/* ==========================================================================
   Climate Color — 56 Three-Color Blend Names
   ==========================================================================
   Generated from Colors_56_Combinations.txt (C(8,3) = 56 combinations of the
   8 core colors). Order-independent: getBlend() sorts the three color names
   before matching, so it doesn't matter which of a result's three colors is
   primary/secondary/tertiary.
   ========================================================================== */

export const blends = [
  { colors: ["Red", "Orange", "Yellow"], name: "Amber", descriptor: "warm like late-summer light" },
  { colors: ["Red", "Orange", "Green"], name: "Rust", descriptor: "earthy like sun-warmed clay" },
  { colors: ["Red", "Orange", "Blue"], name: "Brick", descriptor: "solid like kiln-fired brick" },
  { colors: ["Red", "Orange", "Indigo"], name: "Oxide", descriptor: "deep like mineral earth" },
  { colors: ["Red", "Orange", "Violet"], name: "Garnet", descriptor: "rich like polished stone" },
  { colors: ["Red", "Orange", "Purple"], name: "Maroon", descriptor: "warm like worn leather" },
  { colors: ["Red", "Yellow", "Green"], name: "Olive", descriptor: "mossy like shaded ground" },
  { colors: ["Red", "Yellow", "Blue"], name: "Umber", descriptor: "grounded like dark soil" },
  { colors: ["Red", "Yellow", "Indigo"], name: "Sienna", descriptor: "warm like baked earth" },
  { colors: ["Red", "Yellow", "Violet"], name: "Terracotta", descriptor: "soft like sun-dried clay" },
  { colors: ["Red", "Yellow", "Purple"], name: "Clay", descriptor: "steady like riverbank mud" },
  { colors: ["Red", "Green", "Blue"], name: "Forest", descriptor: "cool like deep woods" },
  { colors: ["Red", "Green", "Indigo"], name: "Pine", descriptor: "fresh like evergreen shade" },
  { colors: ["Red", "Green", "Violet"], name: "Mulch", descriptor: "rich like damp garden soil" },
  { colors: ["Red", "Green", "Purple"], name: "Briar", descriptor: "thorny like wild undergrowth" },
  { colors: ["Red", "Blue", "Indigo"], name: "Wine", descriptor: "deep like aged fruit" },
  { colors: ["Red", "Blue", "Violet"], name: "Plum", descriptor: "soft like ripe plum skin" },
  { colors: ["Red", "Blue", "Purple"], name: "Aubergine", descriptor: "dark like nightfall fruit" },
  { colors: ["Red", "Indigo", "Violet"], name: "Magenta", descriptor: "bright like vivid petals" },
  { colors: ["Red", "Indigo", "Purple"], name: "Fuchsia", descriptor: "sharp like electric bloom" },
  { colors: ["Red", "Violet", "Purple"], name: "Orchid", descriptor: "delicate like tropical flowers" },
  { colors: ["Orange", "Yellow", "Green"], name: "Chartreuse", descriptor: "bright like spring shoots" },
  { colors: ["Orange", "Yellow", "Blue"], name: "Ochre", descriptor: "earthy like dry hillside" },
  { colors: ["Orange", "Yellow", "Indigo"], name: "Honey", descriptor: "warm like thick honey" },
  { colors: ["Orange", "Yellow", "Violet"], name: "Gold", descriptor: "glowing like morning light" },
  { colors: ["Orange", "Yellow", "Purple"], name: "Saffron", descriptor: "spiced like warm air" },
  { colors: ["Orange", "Green", "Blue"], name: "Moss", descriptor: "soft like forest floor" },
  { colors: ["Orange", "Green", "Indigo"], name: "Lichen", descriptor: "cool like stone lichen" },
  { colors: ["Orange", "Green", "Violet"], name: "Fern", descriptor: "fresh like shaded fronds" },
  { colors: ["Orange", "Green", "Purple"], name: "Thicket", descriptor: "dense like tangled growth" },
  { colors: ["Orange", "Blue", "Indigo"], name: "Copper", descriptor: "warm like hammered metal" },
  { colors: ["Orange", "Blue", "Violet"], name: "Bronze", descriptor: "aged like weathered bronze" },
  { colors: ["Orange", "Blue", "Purple"], name: "Ember", descriptor: "glowing like fading fire" },
  { colors: ["Orange", "Indigo", "Violet"], name: "Grove", descriptor: "quiet like orchard shade" },
  { colors: ["Orange", "Indigo", "Purple"], name: "Field", descriptor: "open like late-summer fields" },
  { colors: ["Orange", "Violet", "Purple"], name: "Meadow", descriptor: "gentle like wild meadow air" },
  { colors: ["Yellow", "Green", "Blue"], name: "Teal", descriptor: "cool like shallow water" },
  { colors: ["Yellow", "Green", "Indigo"], name: "Seafoam", descriptor: "light like ocean spray" },
  { colors: ["Yellow", "Green", "Violet"], name: "Spring", descriptor: "fresh like early growth" },
  { colors: ["Yellow", "Green", "Purple"], name: "Leaf", descriptor: "soft like new leaves" },
  { colors: ["Yellow", "Blue", "Indigo"], name: "Slate", descriptor: "calm like overcast sky" },
  { colors: ["Yellow", "Blue", "Violet"], name: "Fog", descriptor: "dim like morning fog" },
  { colors: ["Yellow", "Blue", "Purple"], name: "Dusk", descriptor: "quiet like evening air" },
  { colors: ["Yellow", "Indigo", "Violet"], name: "Periwinkle", descriptor: "soft like twilight haze" },
  { colors: ["Yellow", "Indigo", "Purple"], name: "Lilac", descriptor: "light like gentle bloom" },
  { colors: ["Yellow", "Violet", "Purple"], name: "Lavender", descriptor: "calm like dried lavender" },
  { colors: ["Green", "Blue", "Indigo"], name: "Fjord", descriptor: "deep like cold water" },
  { colors: ["Green", "Blue", "Violet"], name: "Lagoon", descriptor: "still like sheltered water" },
  { colors: ["Green", "Blue", "Purple"], name: "Cove", descriptor: "quiet like hidden inlets" },
  { colors: ["Green", "Indigo", "Violet"], name: "Midnight", descriptor: "dark like moonless night" },
  { colors: ["Green", "Indigo", "Purple"], name: "Shadow", descriptor: "soft like cool shade" },
  { colors: ["Green", "Violet", "Purple"], name: "Thistle", descriptor: "light like dry hillside bloom" },
  { colors: ["Blue", "Indigo", "Violet"], name: "Iris", descriptor: "bright like spring petals" },
  { colors: ["Blue", "Indigo", "Purple"], name: "Heather", descriptor: "soft like hillside heather" },
  { colors: ["Blue", "Violet", "Purple"], name: "Berry", descriptor: "rich like wild berries" },
  { colors: ["Indigo", "Violet", "Purple"], name: "Stone", descriptor: "steady like river stone" },
];

function blendKey(colors) {
  return [...colors].sort().join("|");
}

const blendIndex = new Map(blends.map(b => [blendKey(b.colors), b]));

/**
 * Look up the blend for any three distinct color names, regardless of order.
 * Returns an { colors, name, descriptor } object, or null if the three names
 * don't resolve to one of the 8 core colors (e.g. a bad/legacy shared link).
 */
export function getBlend(primary, secondary, tertiary) {
  return blendIndex.get(blendKey([primary, secondary, tertiary])) || null;
}