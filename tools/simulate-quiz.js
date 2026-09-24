/* ==========================================================================
   Quiz Scoring Simulator (normative engine, confidence v2)
   ==========================================================================
   Not part of the deployed site. A dev tool that runs simulated respondents
   through the production scoring engine (quiz/js/quiz-scoring.js — imported,
   never re-implemented) and reports how decisive and how accurate the
   engine's results are under different response patterns.

   Run from the repo root:  node tools/simulate-quiz.js

   Why simulate with a known "true" palette: each simulated respondent is
   generated from a latent profile where three colors are set as their real
   top three. That makes it possible to measure what live data never can
   directly — whether the engine recovers the palette the respondent
   actually has, and whether the confidence score is higher when it does.
   The second question is the simulated counterpart to pilot RQ4.

   Limits: personas are modeling assumptions, not empirical distributions.
   Read the output for patterns and relative differences between
   conditions, not as predictions of live pilot numbers.
   ========================================================================== */

import { COLORS, SCALE, emptyScores, computeConstellation } from '../quiz/js/quiz-scoring.js';
import { questions } from '../quiz/js/quiz-data.js';

const TRIALS = 20000;
const SEED = 20260924;

// --------------------------------------------------------------------------
// Bank integrity check. quiz-logic.js hardcodes ITEMS_PER_COLOR, and the
// confidence formula normalizes against it — if the bank stops holding
// exactly that many items per color, confidence silently mis-scales. Derive
// the count from the real bank and fail loudly on an uneven bank.
// --------------------------------------------------------------------------
const perColorCounts = COLORS.map(c => questions.filter(q => q.color === c).length);
const BANK_ITEMS_PER_COLOR = perColorCounts[0];
if (!perColorCounts.every(n => n === BANK_ITEMS_PER_COLOR)) {
    console.error('Uneven question bank — items per color:',
        Object.fromEntries(COLORS.map((c, i) => [c, perColorCounts[i]])));
    process.exit(1);
}
if (SCALE.map(s => s.points).join() !== '0,1,2') {
    console.error('SCALE is no longer 0/1/2 — review the response-probability model below before trusting this output.');
    process.exit(1);
}

// Deterministic PRNG (mulberry32) so runs are reproducible and comparable
// across engine changes. Passed into computeConstellation as well, so the
// engine's tie-break shuffle is seeded too.
function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
        a = (a + 0x6D2B79F5) >>> 0;
        let t = a;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Response probabilities [Probably not, Maybe, Probably yes] by latent level.
const LEVEL = {
    high: [0.10, 0.30, 0.60],
    mid:  [0.30, 0.40, 0.30],
    low:  [0.60, 0.30, 0.10],
    flat: [1 / 3, 1 / 3, 1 / 3],
};

// Each persona returns a per-color level map for one respondent, given a
// random ordering of the 8 colors (so no color is favored across trials).
// `hasTruth` marks personas with a defined true top three.
const PERSONAS = [
    { name: 'Random responder',            hasTruth: false, levels: () => COLORS.map(() => 'flat') },
    { name: 'Mild lean (3 high / 5 mid)',  hasTruth: true,  levels: () => [...Array(3).fill('high'), ...Array(5).fill('mid')] },
    { name: 'Graded (3 high / 3 mid / 2 low)', hasTruth: true, levels: () => [...Array(3).fill('high'), ...Array(3).fill('mid'), ...Array(2).fill('low')] },
    { name: 'Clear lean (3 high / 5 low)', hasTruth: true,  levels: () => [...Array(3).fill('high'), ...Array(5).fill('low')] },
];

function shuffled(arr, rng) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function drawResponse(p, rng) {
    const r = rng();
    return r < p[0] ? 0 : r < p[0] + p[1] ? 1 : 2;
}

function runCondition(persona, itemsPerColor, rng) {
    const rows = [];
    for (let t = 0; t < TRIALS; t++) {
        const order = shuffled(COLORS, rng);
        const levels = persona.levels();
        const levelOf = Object.fromEntries(order.map((c, i) => [c, levels[i]]));
        const truth = new Set(order.slice(0, 3));

        const scores = emptyScores();
        for (const c of COLORS) {
            for (let k = 0; k < itemsPerColor; k++) scores[c] += drawResponse(LEVEL[levelOf[c]], rng);
        }
        const r = computeConstellation(scores, { itemsPerColor, rng });
        rows.push({
            confidence: r.confidence,
            tieAtCut: r.breakdown[2].score === r.breakdown[3].score,
            gap: r.breakdown[2].score - r.breakdown[3].score,
            recovered: persona.hasTruth ? [r.primary, r.secondary, r.tertiary].every(c => truth.has(c)) : null,
        });
    }
    return rows;
}

// Spearman rank correlation with average ranks for ties — the same statistic
// the pilot analysis plan specifies for RQ4.
function rank(values) {
    const idx = values.map((v, i) => [v, i]).sort((a, b) => a[0] - b[0]);
    const ranks = new Array(values.length);
    for (let i = 0; i < idx.length;) {
        let j = i;
        while (j + 1 < idx.length && idx[j + 1][0] === idx[i][0]) j++;
        const avg = (i + j) / 2 + 1;
        for (let k = i; k <= j; k++) ranks[idx[k][1]] = avg;
        i = j + 1;
    }
    return ranks;
}
function spearman(x, y) {
    const rx = rank(x), ry = rank(y), n = x.length;
    const mx = rx.reduce((s, v) => s + v, 0) / n, my = ry.reduce((s, v) => s + v, 0) / n;
    let num = 0, dx = 0, dy = 0;
    for (let i = 0; i < n; i++) {
        num += (rx[i] - mx) * (ry[i] - my);
        dx += (rx[i] - mx) ** 2;
        dy += (ry[i] - my) ** 2;
    }
    return dx && dy ? num / Math.sqrt(dx * dy) : NaN;
}

const pct = (n, d) => (100 * n / d).toFixed(1).padStart(5) + '%';

function report(rows, hasTruth) {
    const n = rows.length;
    const conf = rows.map(r => r.confidence);
    const sorted = [...conf].sort((a, b) => a - b);
    const out = {
        tie: pct(rows.filter(r => r.tieAtCut).length, n),
        narrow: pct(rows.filter(r => r.gap <= 1).length, n),
        median: String(sorted[Math.floor(n / 2)]).padStart(6),
        recov: hasTruth ? pct(rows.filter(r => r.recovered).length, n) : '   n/a',
        rho: hasTruth ? spearman(conf, rows.map(r => (r.recovered ? 1 : 0))).toFixed(2).padStart(5) : '  n/a',
    };
    return `${out.tie}  | ${out.narrow}  | ${out.median} | ${out.recov}  | ${out.rho}`;
}

// Current bank depth first, then hypothetical deeper banks — for weighing
// an engine change against pilot data later, not a recommendation on its own.
const DEPTHS = [...new Set([BANK_ITEMS_PER_COLOR, 6, 8, 10])].sort((a, b) => a - b);

console.log(`Climate Color scoring simulation — ${TRIALS.toLocaleString()} trials per condition, seed ${SEED}`);
console.log(`Live bank: ${questions.length} items, ${BANK_ITEMS_PER_COLOR} per color, 3-point scale (0/1/2)\n`);
console.log('Columns:');
console.log('  tie@cut  — 3rd and 4th place tied; tertiary chosen by random tie-break, confidence = 0');
console.log('  gap≤1    — 3rd place beat 4th by at most one raw point (one item answered one step differently)');
console.log('  median   — median confidence (0–100; step size is 100 / (2 × items per color), so it shrinks as depth grows)');
console.log('  recov    — engine returned the respondent\'s true top-3 set (blend is order-independent)');
console.log('  rho      — Spearman(confidence, recovered): does higher confidence mean a more accurate result?\n');

for (const persona of PERSONAS) {
    console.log(`=== ${persona.name} ===`);
    console.log('items/color | tie@cut | gap≤1  | median | recov  | rho');
    console.log('------------|---------|--------|--------|--------|------');
    for (const d of DEPTHS) {
        const rng = mulberry32(SEED + d);
        const label = d === BANK_ITEMS_PER_COLOR ? `${d} (live)` : `${d}`;
        console.log(`${label.padEnd(11)} | ${report(runCondition(persona, d, rng), persona.hasTruth)}`);
    }
    console.log('');
}

// Degenerate-input check: a respondent who answers identically on every
// item produces an 8-way tie, so the displayed palette is entirely random.
const flat = emptyScores();
COLORS.forEach(c => { flat[c] = BANK_ITEMS_PER_COLOR; });
const fr = computeConstellation(flat, { itemsPerColor: BANK_ITEMS_PER_COLOR, rng: mulberry32(SEED) });
console.log(`Straight-line check (every answer "Maybe"): ${fr.primary} / ${fr.secondary} / ${fr.tertiary}, confidence ${fr.confidence} — palette is a pure tie-break.`);