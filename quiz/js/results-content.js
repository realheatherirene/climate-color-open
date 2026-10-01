/* ==========================================================================
   QUIZ RESULTS WORDING: the words that belong only to the results page
   ==========================================================================
   Everything about a color (its archetype, move, and spark) comes from
   core/climate-color.js, and blends come from core/blends.js, so none of
   that is repeated here. The resource and story picks come straight from
   the Directory and Story Map data.

   Written at a 9th-grade reading level or below, in second person. Avoid
   words that assume a body or a sense (walk, see, look, hear), so every
   line works for everyone.
   ========================================================================== */

export const RESULTS_TEXT = {
    heroLabel: "Your climate colors",
    // "{Blend} is the color of {image}."
    natureLine: (blendName, image) => `${blendName} is the color of ${image}.`,
    // Color first, archetype right after.
    archetypeLine: (a, b, c) => `You're part ${a}, part ${b}, and part ${c}.`,
    // Leads from the three colors into the blend they make.
    blendLead: "Together, they make:",
    reassurance: "You don't need to become anyone new. Who you are is enough to start.",
    chipsLabel: "Your three colors",

    colorsHeading: "Your climate colors in action",
    // Small label above each color, strongest first.
    rankLabels: ["Your strongest color", "Your second color", "Your third color"],
    // Built from each color's move and spark in core/climate-color.js.
    sparkLead: "You light up when",

    firstStepHeading: "Your climate colors in the wild",
    firstStepLead: (colorKey, archetype) =>
        `Start with ${colorKey}, your strongest color. Its path shows what a ${archetype} can do, with ideas to try this week.`,
    pathButton: archetype => `Explore the ${archetype}'s Path`,
    bridgeLine: "Your colors show what you already bring to the climate movement. " +
        "The resources and stories below share your colors, so if you're wondering how to get involved, start there.",
    picksLabel: "Picked for your palette",
    resourceKind: "A resource to try",
    storyKind: "A story to read",
    // How many of the person's three colors a pick shares.
    matchLine: n => n >= 3 ? "Matches all three of your colors"
        : n === 2 ? "Matches two of your colors"
        : "Matches one of your colors",
    newTab: "(opens in a new tab)",

    moreResources: n => `All ${n} resources for your palette`,
    moreStories: n => `All ${n} stories for your palette`,

    // The closing line, shared by all 56 blends (reading level: grade 5.9).
    closer: "Together, these three colors mean you don't just care about the climate. " +
        "You keep hope alive, and you make it easier for everyone around you to care too.",

    copied: "Link copied.",
    copyFallback: "Copy this link to share your result:"
};