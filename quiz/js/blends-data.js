/* ==========================================================================
   Climate Color — 56 Three-Color Blend Names
   ==========================================================================
   Generated from Colors_56_Combinations.txt (C(8,3) = 56 combinations of the
   8 core colors). Order-independent: getBlend() sorts the three color names
   before matching, so it doesn't matter which of a result's three colors is
   primary/secondary/tertiary.

   `hex` is the blend's real color: a simple RGB average of its three
   ingredient colors' atlas.css hex values, computed once (not hand-picked).
   It's meant for decorative use (a swatch/bar), not text — several blends
   average out lighter or more desaturated than their name alone would
   suggest, and a decorative swatch doesn't carry WCAG's text-contrast
   requirement the way the blend name does. Recompute this list if any of
   the 8 core color hex values in atlas.css ever change.

   Seven blends were renamed from their original name (2026-09-21) because
   their computed hex didn't match what the original name implied — e.g.
   "Copper" averaged to a flat gray, not a warm metallic tone. Each was
   renamed to something that matches its real computed color AND stays
   nature-derived, consistent with every other name in this list:
     Forest  -> Fawn      (Red+Green+Blue,    #786254 — warm taupe-brown)
     Copper  -> Ash       (Orange+Blue+Indigo,#6E5E68 — grayish, like wood ash)
     Ember   -> Rosewood  (Orange+Blue+Purple,#836872 — dusty rose-brown)
     Fog     -> Foxglove  (Yellow+Blue+Violet,#A17A8D — dusty pink-mauve)
     Dusk    -> Driftwood (Yellow+Blue+Purple,#7D766C — warm greige)
     Lilac   -> Chestnut  (Yellow+Indigo+Purple,#7F5955 — reddish-brown)
     Lagoon  -> Twilight  (Green+Blue+Violet, #746D98 — muted blue-violet)
   Their descriptors were updated only enough to stop being factually wrong
   for the new name (e.g. Fawn no longer says "cool like deep woods"). This
   is NOT the broader pass on descriptor redundancy across the other 49
   blends that Heather flagged separately — that's deliberately deferred.
   ========================================================================== */

export const blends = [
  { colors: ["Red", "Orange", "Yellow"], name: "Amber", descriptor: "warm like late-summer light", hex: "#E77818" },
  { colors: ["Red", "Orange", "Green"], name: "Rust", descriptor: "earthy like sun-warmed clay", hex: "#BA6B22" },
  { colors: ["Red", "Orange", "Blue"], name: "Brick", descriptor: "solid like kiln-fired brick", hex: "#AA614F" },
  { colors: ["Red", "Orange", "Indigo"], name: "Oxide", descriptor: "deep like mineral earth", hex: "#AB4438" },
  { colors: ["Red", "Orange", "Violet"], name: "Garnet", descriptor: "rich like polished stone", hex: "#E45264" },
  { colors: ["Red", "Orange", "Purple"], name: "Maroon", descriptor: "warm like worn leather", hex: "#C04E43" },
  { colors: ["Red", "Yellow", "Green"], name: "Olive", descriptor: "mossy like shaded ground", hex: "#B5791C" },
  { colors: ["Red", "Yellow", "Blue"], name: "Umber", descriptor: "grounded like dark soil", hex: "#A56F49" },
  { colors: ["Red", "Yellow", "Indigo"], name: "Sienna", descriptor: "warm like baked earth", hex: "#A65232" },
  { colors: ["Red", "Yellow", "Violet"], name: "Terracotta", descriptor: "soft like sun-dried clay", hex: "#DF605E" },
  { colors: ["Red", "Yellow", "Purple"], name: "Clay", descriptor: "steady like riverbank mud", hex: "#BB5C3D" },
  { colors: ["Red", "Green", "Blue"], name: "Fawn", descriptor: "gentle like a fawn's coat", hex: "#786254" },
  { colors: ["Red", "Green", "Indigo"], name: "Pine", descriptor: "fresh like evergreen shade", hex: "#79453D" },
  { colors: ["Red", "Green", "Violet"], name: "Mulch", descriptor: "rich like damp garden soil", hex: "#B25369" },
  { colors: ["Red", "Green", "Purple"], name: "Briar", descriptor: "thorny like wild undergrowth", hex: "#8E4F47" },
  { colors: ["Red", "Blue", "Indigo"], name: "Wine", descriptor: "deep like aged fruit", hex: "#693A6A" },
  { colors: ["Red", "Blue", "Violet"], name: "Plum", descriptor: "soft like ripe plum skin", hex: "#A24996" },
  { colors: ["Red", "Blue", "Purple"], name: "Aubergine", descriptor: "dark like nightfall fruit", hex: "#7E4474" },
  { colors: ["Red", "Indigo", "Violet"], name: "Magenta", descriptor: "bright like vivid petals", hex: "#A32C7F" },
  { colors: ["Red", "Indigo", "Purple"], name: "Fuchsia", descriptor: "sharp like electric bloom", hex: "#7F275D" },
  { colors: ["Red", "Violet", "Purple"], name: "Orchid", descriptor: "delicate like tropical flowers", hex: "#B83689" },
  { colors: ["Orange", "Yellow", "Green"], name: "Chartreuse", descriptor: "bright like spring shoots", hex: "#B99D1A" },
  { colors: ["Orange", "Yellow", "Blue"], name: "Ochre", descriptor: "earthy like dry hillside", hex: "#A99247" },
  { colors: ["Orange", "Yellow", "Indigo"], name: "Honey", descriptor: "warm like thick honey", hex: "#AB7530" },
  { colors: ["Orange", "Yellow", "Violet"], name: "Gold", descriptor: "glowing like morning light", hex: "#E4845C" },
  { colors: ["Orange", "Yellow", "Purple"], name: "Saffron", descriptor: "spiced like warm air", hex: "#C0803B" },
  { colors: ["Orange", "Green", "Blue"], name: "Moss", descriptor: "soft like forest floor", hex: "#7C8552" },
  { colors: ["Orange", "Green", "Indigo"], name: "Lichen", descriptor: "cool like stone lichen", hex: "#7E683B" },
  { colors: ["Orange", "Green", "Violet"], name: "Fern", descriptor: "fresh like shaded fronds", hex: "#B77767" },
  { colors: ["Orange", "Green", "Purple"], name: "Thicket", descriptor: "dense like tangled growth", hex: "#937345" },
  { colors: ["Orange", "Blue", "Indigo"], name: "Ash", descriptor: "quiet like cooled hearth ash", hex: "#6E5E68" },
  { colors: ["Orange", "Blue", "Violet"], name: "Bronze", descriptor: "aged like weathered bronze", hex: "#A76C94" },
  { colors: ["Orange", "Blue", "Purple"], name: "Rosewood", descriptor: "warm like polished rosewood", hex: "#836872" },
  { colors: ["Orange", "Indigo", "Violet"], name: "Grove", descriptor: "quiet like orchard shade", hex: "#A84F7D" },
  { colors: ["Orange", "Indigo", "Purple"], name: "Field", descriptor: "open like late-summer fields", hex: "#844B5B" },
  { colors: ["Orange", "Violet", "Purple"], name: "Meadow", descriptor: "gentle like wild meadow air", hex: "#BD5A87" },
  { colors: ["Yellow", "Green", "Blue"], name: "Teal", descriptor: "cool like shallow water", hex: "#77934B" },
  { colors: ["Yellow", "Green", "Indigo"], name: "Seafoam", descriptor: "light like ocean spray", hex: "#787634" },
  { colors: ["Yellow", "Green", "Violet"], name: "Spring", descriptor: "fresh like early growth", hex: "#B18560" },
  { colors: ["Yellow", "Green", "Purple"], name: "Leaf", descriptor: "soft like new leaves", hex: "#8D813F" },
  { colors: ["Yellow", "Blue", "Indigo"], name: "Slate", descriptor: "calm like overcast sky", hex: "#686C61" },
  { colors: ["Yellow", "Blue", "Violet"], name: "Foxglove", descriptor: "soft like foxglove bloom", hex: "#A17A8D" },
  { colors: ["Yellow", "Blue", "Purple"], name: "Driftwood", descriptor: "weathered like sea-worn driftwood", hex: "#7D766C" },
  { colors: ["Yellow", "Indigo", "Violet"], name: "Periwinkle", descriptor: "soft like twilight haze", hex: "#A35D76" },
  { colors: ["Yellow", "Indigo", "Purple"], name: "Chestnut", descriptor: "rich like roasted chestnut", hex: "#7F5955" },
  { colors: ["Yellow", "Violet", "Purple"], name: "Lavender", descriptor: "calm like dried lavender", hex: "#B86881" },
  { colors: ["Green", "Blue", "Indigo"], name: "Fjord", descriptor: "deep like cold water", hex: "#3B5F6C" },
  { colors: ["Green", "Blue", "Violet"], name: "Twilight", descriptor: "hushed like fading twilight", hex: "#746D98" },
  { colors: ["Green", "Blue", "Purple"], name: "Cove", descriptor: "quiet like hidden inlets", hex: "#506977" },
  { colors: ["Green", "Indigo", "Violet"], name: "Midnight", descriptor: "dark like moonless night", hex: "#765081" },
  { colors: ["Green", "Indigo", "Purple"], name: "Shadow", descriptor: "soft like cool shade", hex: "#524C60" },
  { colors: ["Green", "Violet", "Purple"], name: "Thistle", descriptor: "light like dry hillside bloom", hex: "#8B5B8C" },
  { colors: ["Blue", "Indigo", "Violet"], name: "Iris", descriptor: "bright like spring petals", hex: "#6646AE" },
  { colors: ["Blue", "Indigo", "Purple"], name: "Heather", descriptor: "soft like hillside heather", hex: "#42418D" },
  { colors: ["Blue", "Violet", "Purple"], name: "Berry", descriptor: "rich like wild berries", hex: "#7B50B9" },
  { colors: ["Indigo", "Violet", "Purple"], name: "Stone", descriptor: "steady like river stone", hex: "#7C33A2" },
];

function blendKey(colors) {
  return [...colors].sort().join("|");
}

const blendIndex = new Map(blends.map(b => [blendKey(b.colors), b]));

/**
 * Look up the blend for any three distinct color names, regardless of order.
 * Returns a { colors, name, descriptor, hex } object, or null if the three
 * names don't resolve to one of the 8 core colors (e.g. a bad/legacy shared
 * link).
 */
export function getBlend(primary, secondary, tertiary) {
  return blendIndex.get(blendKey([primary, secondary, tertiary])) || null;
}