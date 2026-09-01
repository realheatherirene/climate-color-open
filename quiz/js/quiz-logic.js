/* ==========================================================================
   Climate Color Quiz — Scoring + Constellation Logic
   ========================================================================== */

import { axes, tieBreakers } from "./quiz-data.js";

/* --------------------------------------------------------------------------
   Score Object (tracks all 8 styles)
   -------------------------------------------------------------------------- */

export const scores = {
  Driver: 0,
  Stabilizer: 0,
  Advocate: 0,
  Connector: 0,
  Architect: 0,
  Guardian: 0,
  Visionary: 0,
  Keeper: 0
};

/* --------------------------------------------------------------------------
   Record Answer
   -------------------------------------------------------------------------- */

export function recordAnswer(style, weight = 1) {
  scores[style] += weight;
}

/* --------------------------------------------------------------------------
   Axis Resolution
   -------------------------------------------------------------------------- */

function resolveAxis(styleA, styleB) {
  const scoreA = scores[styleA];
  const scoreB = scores[styleB];

  if (scoreA > scoreB) return styleA;
  if (scoreB > scoreA) return styleB;

  // If tied, return both — UI will trigger tie-breaker
  return [styleA, styleB];
}

export function determineAxisStyle(axis) {
  const [styleA, styleB] = axes[axis];
  return resolveAxis(styleA, styleB);
}

/* --------------------------------------------------------------------------
   Tie-Breaker Resolution
   -------------------------------------------------------------------------- */

export function applyTieBreaker(axis, chosenStyle) {
  // chosenStyle is the style selected from the tie-breaker question
  scores[chosenStyle] += 1; // nudge the score to break the tie
  return chosenStyle;
}

/* --------------------------------------------------------------------------
   Final Constellation (Primary + Secondary)
   -------------------------------------------------------------------------- */

export function calculateConstellation() {
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([style]) => style);

  return {
    primary: sorted[0],
    secondary: sorted[1],
    allScores: { ...scores }
  };
}

/* --------------------------------------------------------------------------
   Reset Scores (for replay)
   -------------------------------------------------------------------------- */

export function resetScores() {
  Object.keys(scores).forEach(style => {
    scores[style] = 0;
  });
}
