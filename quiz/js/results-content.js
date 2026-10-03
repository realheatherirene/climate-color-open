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
    // Opens the page. The blend name comes right under it.
    heroLabel: "You are:",
    // "{Blend} is the color of {image}."
    natureLine: (blendName, image) => `${blendName} is the color of ${image}.`,
    // Follows the three colors, so each color comes first and its
    // archetype right after.
    archetypeLine: (a, b, c) => `You're part ${a}, part ${b}, and part ${c}.`,
    // Leads from the blend into the three colors that make it.
    blendLead: "a blend of:",
    // Ends the page, right after the closer, in the same paragraph.
    reassurance: "You don't need to become anyone new. Who you are is enough to start.",
    chipsLabel: "Your three colors",

    // Heads the wheel, which shows the three colors among all eight.
    contextHeading: "Your colors in context",
    // Small label above each color, strongest first.
    rankLabels: ["Your strongest color", "Your second color", "Your third color"],
    // Built from each color's move and spark in core/climate-color.js.
    sparkLead: "You light up when",

    // The checklist: a few small steps, each one line with a short note.
    checklistHeading: "Your climate color checklist",
    checklistLead: "Small steps, picked for your palette. Check them off as you go.",
    pathButton: archetype => `Explore the ${archetype}'s Path`,
    firstStepLead: (colorKey, archetype) =>
        `Start with ${colorKey}, your strongest color. Its path shows what a ${archetype} can do, with ideas to try this week.`,
    resourceKind: "Try a resource:",
    storyKind: "Read a story:",
    moreLead: "Explore more for your palette:",
    // How many of the person's three colors a pick shares.
    matchLine: n => n >= 3 ? "Matches all three of your colors"
        : n === 2 ? "Matches two of your colors"
        : "Matches one of your colors",
    newTab: "(opens in a new tab)",

    moreResources: n => `${n} resources`,
    moreStories: n => `${n} stories`,

    // The closing line, shared by all 56 blends (reading level: grade 5.9).
    closer: "Together, your colors reflect the care you bring to the climate movement. " +
        "By sharing them, you make it easier for everyone around you to care too.",

    copied: "Link copied.",
    copyFallback: "Copy this link to share your result:"
};
