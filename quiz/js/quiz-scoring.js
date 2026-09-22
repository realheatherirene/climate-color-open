/* ==========================================================================
   Climate Color Quiz — Pure Scoring Engine (Normative model, 2026-09-22)
   ==========================================================================
   No DOM, no localStorage, no URL access — safe to import in a browser
   (quiz-logic.js) or in Node (tools/simulate-quiz.js). This is the ONLY
   place the actual scoring math lives, so the simulation harness is always
   testing the real production logic, not a re-implementation of it.

   REPLACES the earlier ipsative, axis-paired model (Pace: Red/Green,
   People: Orange/Purple, Place: Blue/Violet, Purpose: Yellow/Indigo), which
   forced a head-to-head choice within each pair and, as a structural
   consequence, could only ever reach 32 of the 56 named blends (a color
   pair on the same axis could never both appear in one result). Each of
   the 8 colors is now its own independent track: 5 items per color,
   answered on a fixed 3-point behaviorally-anchored scale, scored on its
   own. All 56 blends are reachable through ordinary quiz play.
   ========================================================================== */

export const COLORS = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Purple", "Violet"];

// The only response scale in the quiz. Kept here (not just in quiz-data.js)
// because the point values are load-bearing scoring logic, not UI copy.
export const SCALE = [
    { label: "Probably not", points: 0 },
    { label: "Maybe", points: 1 },
    { label: "Probably yes", points: 2 }
];

export function emptyScores() {
    return COLORS.reduce((acc, color) => {
        acc[color] = 0;
        return acc;
    }, {});
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
 * @param {Object} scores - e.g. {Red: 8, Orange: 3, Yellow: 6, ...} — one
 *        independent raw sum per color, each in [0, itemsPerColor * 2].
 * @param {Object} [options]
 * @param {number}   [options.itemsPerColor=5] - items answered per color
 *        this session. Used only to normalize the confidence score against
 *        the maximum possible sum — the ranking logic itself doesn't need it.
 * @param {Function} [options.rng=Math.random] - injectable RNG, for
 *        deterministic testing/simulation.
 *
 * @returns {{
 *   primary: string, secondary: string, tertiary: string,
 *   confidence: number,        // 0-100 — how decisive this particular
 *                               // result is, not a property of the colors
 *                               // themselves. See note below.
 *   breakdown: Array,           // all 8 colors, ranked, with score
 *   excluded: {color, score}|null  // the 4th-place color, left out of the
 *                               // top 3 — useful for showing "how close" a
 *                               // color came to making the result
 * }}
 *
 * CONFIDENCE — v2, simplified from the old 60/40 avgDecisiveness +
 * separationGap blend. Under the normative model there's no "how clean was
 * each axis win" component to compute (there are no axes/pairs anymore) —
 * confidence is just how clearly the top 3 cleared the 4th-place color:
 * the raw score gap between 3rd and 4th place, normalized to the maximum
 * possible per-color score. A wide gap means the result is unambiguous; a
 * narrow one means a 4th color nearly made the cut.
 */
export function computeConstellation(scores, options = {}) {
    const itemsPerColor = options.itemsPerColor ?? 5;
    const rng = options.rng ?? Math.random;
    const maxPerColor = itemsPerColor * 2; // every item answered "Probably yes"

    const raw = COLORS.map(color => ({ color, score: scores[color] ?? 0 }));

    // Sort by score, but shuffle within any group that's still tied instead
    // of silently favoring COLORS array order (Red > Orange > ... > Violet)
    // every time two or more colors land on the same sum.
    const deterministic = [...raw].sort((a, b) => b.score - a.score);

    const buckets = [];
    deterministic.forEach((item, i) => {
        const prev = deterministic[i - 1];
        const sameGroup = prev && prev.score === item.score;
        if (sameGroup) {
            buckets[buckets.length - 1].push(item);
        } else {
            buckets.push([item]);
        }
    });

    const ranked = buckets.flatMap(group => shuffle(group, rng));

    const primary = ranked[0].color;
    const secondary = ranked[1].color;
    const tertiary = ranked[2].color;
    const excluded = ranked[3] ?? null;

    const gap = excluded ? Math.max(0, ranked[2].score - excluded.score) : maxPerColor;
    const confidence = Math.round(100 * (gap / maxPerColor));

    return {
        primary,
        secondary,
        tertiary,
        confidence,
        breakdown: ranked,
        excluded: excluded ? { color: excluded.color, score: excluded.score } : null
    };
}