/* ==========================================================================
   QUIZ SCORING: the scoring math, and nothing else
   ==========================================================================
   No page, storage, or address code, so it runs the same in the browser
   (quiz-logic.js) and in Node (tools/simulate-quiz.js). This is the only
   place the scoring math lives, so the simulator always tests the real
   thing.

   Each of the 8 colors is scored on its own: 5 questions per color,
   answered on a fixed 3-point scale. Colors are never set against each
   other, so all 56 blends can come up.

   Part of the measuring tool: don't change it while a pilot is collecting
   answers.
   ========================================================================== */

export const COLORS = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Purple", "Violet"];

// The only answer scale in the quiz. It lives here, not with the
// questions, because the point values are scoring logic, not wording.
//
// The labels are short, gut-reaction answers to the shared question
// "Would that energize you?" (ITEM_STEM in questions.js). Answers to this
// version (v3) must not be pooled with v2 answers, which used different
// labels. "Yes" has no exclamation point on purpose: all three answers
// stay equally plain, so none looks more inviting.
export const SCALE = [
    { label: "Not really", points: 0 },
    { label: "Maybe", points: 1 },
    { label: "Yes", points: 2 }
];

export function emptyScores() {
    return COLORS.reduce((acc, color) => {
        acc[color] = 0;
        return acc;
    }, {});
}

// Fisher-Yates shuffle, used to break ties without favoring list order.
// Takes a random-number function so simulations can be repeated exactly.
function shuffle(arr, rng) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

/**
 * Computes the primary/secondary/tertiary result from the raw scores.
 *
 * @param {Object} scores - e.g. {Red: 8, Orange: 3, Yellow: 6, ...}: one
 *        raw sum per color, each from 0 to itemsPerColor * 2.
 * @param {Object} [options]
 * @param {number}   [options.itemsPerColor=5] - questions answered per
 *        color. Used only to scale the confidence score; the ranking
 *        doesn't need it.
 * @param {Function} [options.rng=Math.random] - random-number function,
 *        so tests and simulations can be repeated exactly.
 *
 * @returns {{
 *   primary: string, secondary: string, tertiary: string,
 *   confidence: number,        // 0-100: how clear-cut this particular
 *                               // result is (not a property of the
 *                               // colors themselves)
 *   breakdown: Array,           // all 8 colors, ranked, with scores
 *   excluded: {color, score}|null  // the 4th-place color: the one that
 *                               // came closest to making the top 3
 * }}
 *
 * CONFIDENCE: how clearly the top 3 cleared the 4th-place color. It's the
 * score gap between 3rd and 4th place, divided by the highest possible
 * score for one color. A wide gap means a clear result; a narrow one means
 * a 4th color nearly made the cut.
 */
export function computeConstellation(scores, options = {}) {
    const itemsPerColor = options.itemsPerColor ?? 5;
    const rng = options.rng ?? Math.random;
    const maxPerColor = itemsPerColor * 2; // every question answered "Yes"

    const raw = COLORS.map(color => ({ color, score: scores[color] ?? 0 }));

    // Sort by score, but shuffle within any tie instead of always favoring
    // the order of the COLORS list.
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