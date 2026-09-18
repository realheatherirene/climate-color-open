/* ==========================================================================
   Quiz Sampling-Depth Simulator
   ==========================================================================
   Not part of the deployed site. A dev tool for answering one question with
   data instead of a guess: at a given "questions sampled per axis" depth,
   how decisive are the results the scoring engine actually produces?

   Run: node tools/simulate-quiz.js
   ========================================================================== */

import { AXES, emptyScores, computeConstellation } from '../js/quiz-scoring.js';

const TRIALS_PER_CONDITION = 20000;

// Simulated "answer personas" — how strongly a simulated quiz-taker leans
// toward one pole vs the other on a given axis. 0.5 = pure coin flip
// (a genuinely undecided or randomly-clicking person). Real quiz-takers are
// presumably somewhere between "random" and "decisive" — showing both ends
// of that range is more honest than picking one assumption.
const PERSONAS = {
    'random (0.50/0.50)': 0.50,
    'mild lean (0.65/0.35)': 0.65,
    'decisive (0.80/0.20)': 0.80,
};

function simulateOneTrial(perAxis, bias, rng) {
    const scores = emptyScores();
    for (const axis of AXES) {
        // Randomly decide, per simulated person, which pole they lean toward
        // on this axis — otherwise "bias" would always favor poleA and skew
        // the simulation.
        const leansTowardA = rng() < 0.5;
        const pForA = leansTowardA ? bias : 1 - bias;
        let scoreA = 0;
        for (let q = 0; q < perAxis; q++) {
            if (rng() < pForA) scoreA++;
        }
        scores[axis.poleA] += scoreA;
        scores[axis.poleB] += (perAxis - scoreA);
    }
    return computeConstellation(scores, { perAxis, rng });
}

function summarize(values) {
    const sorted = [...values].sort((a, b) => a - b);
    const mean = values.reduce((s, v) => s + v, 0) / values.length;
    const median = sorted[Math.floor(sorted.length / 2)];
    const pctBelow40 = 100 * values.filter(v => v < 40).length / values.length;
    const pctBelow25 = 100 * values.filter(v => v < 25).length / values.length;
    return { mean: mean.toFixed(1), median, pctBelow40: pctBelow40.toFixed(1), pctBelow25: pctBelow25.toFixed(1) };
}

console.log(`Simulating ${TRIALS_PER_CONDITION.toLocaleString()} trials per condition...\n`);

const depths = [2, 3, 4, 5, 6];

for (const [personaName, bias] of Object.entries(PERSONAS)) {
    console.log(`\n=== Persona: ${personaName} ===`);
    console.log('perAxis | mean conf | median | % <40 conf | % <25 conf');
    console.log('--------|-----------|--------|------------|------------');
    for (const perAxis of depths) {
        // Simple seeded-ish RNG per condition isn't necessary here — Math.random
        // is fine for aggregate statistics across 20k trials.
        const results = [];
        for (let t = 0; t < TRIALS_PER_CONDITION; t++) {
            const r = simulateOneTrial(perAxis, bias, Math.random);
            results.push(r.confidence);
        }
        const s = summarize(results);
        console.log(
            `${String(perAxis).padEnd(7)} | ${s.mean.padEnd(9)} | ${String(s.median).padEnd(6)} | ${s.pctBelow40.padEnd(10)} | ${s.pctBelow25}`
        );
    }
}

console.log(`\nNote: "perAxis" here is questions SAMPLED per axis per quiz session,`);
console.log(`not the size of the underlying question bank. A bank of 8/axis could`);
console.log(`still sample only 2/axis at quiz time — those are independent choices.`);
