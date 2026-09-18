/* ==========================================================================
   Climate Color Quiz — Pure Scoring Engine
   ==========================================================================
   No DOM, no localStorage, no URL access — safe to import in a browser
   (quiz-logic.js) or in Node (tools/simulate-quiz.js). This is the ONLY
   place the actual scoring math lives, so the simulation harness is always
   testing the real production logic, not a re-implementation of it.
   ========================================================================== */

export const AXES = [
    { anchor: "Pace", poleA: "Red", poleB: "Green" },
    { anchor: "People", poleA: "Orange", poleB: "Purple" },
    { anchor: "Place", poleA: "Blue", poleB: "Violet" },
    { anchor: "Purpose", poleA: "Yellow", poleB: "Indigo" }
];

export function emptyScores() {
    return { Red: 0, Green: 0, Orange: 0, Purple: 0, Blue: 0, Violet: 0, Yellow: 0, Indigo: 0 };
}

// Fisher-Yates shuffle — used to break ties without favoring array/object
// order. Accepts an injectable RNG so simulation runs can be seeded/repeated.
function shuffle(arr, rng) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/**
 * Computes the primary/secondary/tertiary result from a raw score vector.
 *
 * @param {Object} scores - e.g. {Red: 2, Green: 0, Orange: 1, Purple: 1, ...}
 * @param {Object} [options]
 * @param {number}   [options.perAxis=2] - questions sampled per axis this
 *        session. Used only to normalize the confidence score — the
 *        selection logic itself doesn't need it.
 * @param {Function} [options.rng=Math.random] - injectable RNG, for
 *        deterministic testing/simulation.
 *
 * @returns {{
 *   primary: string, secondary: string, tertiary: string,
 *   confidence: number,        // 0-100 — how decisive this particular
 *                               // result is, not a property of the colors
 *                               // themselves. See note below.
 *   axisBreakdown: Array,       // all 4 axes, ranked, with winner/score/margin
 *   excluded: {anchor, winner}|null  // the 4th axis's color, left out of the
 *                               // top 3 — useful for showing "how close" a
 *                               // color came to making the result
 * }}
 *
 * CONFIDENCE — v1 heuristic, not empirically tuned:
 * Two components, weighted 60/40:
 *   (1) avgDecisiveness — how clean each of the 3 winning axes' individual
 *       wins were (margin / perAxis, averaged across the top 3)
 *   (2) separationGap — how far the 3rd-place axis beat the 4th (excluded)
 *       axis. A narrow gap means the color left out of the result nearly
 *       made it in — the top-3 cutoff itself was a close call.
 * The 60/40 weighting is a reasonable starting guess, not a derived
 * constant. Use tools/simulate-quiz.js against the real question bank to
 * validate or retune these weights before the confidence score is ever
 * surfaced in the UI.
 */
export function computeConstellation(scores, options = {}) {
    const perAxis = options.perAxis ?? 2;
    const rng = options.rng ?? Math.random;

    const axisWinners = AXES.map((axis, index) => {
        const scoreA = scores[axis.poleA] ?? 0;
        const scoreB = scores[axis.poleB] ?? 0;
        // A tied axis is a genuine coin flip, not a default to poleA.
        const winner = scoreA === scoreB
            ? (rng() < 0.5 ? axis.poleA : axis.poleB)
            : (scoreA > scoreB ? axis.poleA : axis.poleB);
        return {
            anchor: axis.anchor,
            winner,
            winningScore: Math.max(scoreA, scoreB),
            margin: Math.abs(scoreA - scoreB),
            originalIndex: index
        };
    });

    // Sort by score/margin, but shuffle within any group that's still tied
    // instead of silently favoring Pace > People > Place > Purpose every time.
    const deterministic = [...axisWinners].sort((a, b) => {
        if (b.winningScore !== a.winningScore) return b.winningScore - a.winningScore;
        return b.margin - a.margin;
    });

    const buckets = [];
    deterministic.forEach((item, i) => {
        const prev = deterministic[i - 1];
        const sameGroup = prev && prev.winningScore === item.winningScore && prev.margin === item.margin;
        if (sameGroup) {
            buckets[buckets.length - 1].push(item);
        } else {
            buckets.push([item]);
        }
    });

    const ranked = buckets.flatMap(group => shuffle(group, rng));

    let primaryKey = ranked[0].winner;
    let secondaryKey = ranked[1].winner;
    let tertiaryKey = ranked[2].winner;

    // Defensive only — cannot actually trigger given 4 non-overlapping axes,
    // each contributing exactly one distinct color. Kept in case AXES ever
    // changes shape (e.g. team-mode aggregation) in a way that breaks that
    // guarantee.
    if (secondaryKey === primaryKey) {
        const alt = ranked.find(w => w.winner !== primaryKey);
        secondaryKey = alt ? alt.winner : (primaryKey === "Red" ? "Green" : "Red");
    }
    if (tertiaryKey === primaryKey || tertiaryKey === secondaryKey) {
        const alt = ranked.find(w => w.winner !== primaryKey && w.winner !== secondaryKey);
        tertiaryKey = alt ? alt.winner : (primaryKey === "Blue" ? "Violet" : "Blue");
    }

    const top3 = ranked.slice(0, 3);
    const excludedAxis = ranked[3] ?? null;

    const avgDecisiveness = top3.reduce((sum, a) => sum + (a.margin / perAxis), 0) / 3;

    const strength = (a) => (a.winningScore + a.margin) / (2 * perAxis);
    const separationGap = excludedAxis
        ? Math.max(0, strength(ranked[2]) - strength(excludedAxis))
        : 1;

    const confidence = Math.round(100 * (0.6 * avgDecisiveness + 0.4 * separationGap));

    return {
        primary: primaryKey,
        secondary: secondaryKey,
        tertiary: tertiaryKey,
        confidence,
        axisBreakdown: ranked,
        excluded: excludedAxis ? { anchor: excludedAxis.anchor, winner: excludedAxis.winner } : null
    };
}
