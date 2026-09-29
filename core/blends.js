/* ==========================================================================
   CLIMATE COLOR: the 56 three-color blends (one copy)
   ==========================================================================
   Every combination of three of the eight colors (8 choose 3 = 56). Order
   doesn't matter: getBlend() finds a blend from its three colors in any
   order.

   FIELDS
     colors       The three color keys (see core/climate-color.js).
     name         The blend's name. Nature-derived.
     descriptor   Short simile ("warm like late-summer light").
     natureImage  Finishes "{name} is the color of ___." Never repeats or
                  paraphrases the blend's own name.

   NO HEX CODES HERE. A blend's swatch is the simple average of its three
   colors' RGB values, worked out live from core/atlas.css by blendHex().
   So if the palette ever changes, all 56 swatches follow on their own.
   Swatches are for decoration only (a bar or chip), never for text.

   Choosing a name: it should fit the swatch's real color, come from
   nature, and not repeat another blend's name.
   ========================================================================== */

import { colorValue } from "./climate-color.js";

export const BLENDS = [
  { colors: ["Red", "Orange", "Yellow"], name: "Amber", descriptor: "warm like late-summer light", natureImage: "late-summer light" },
  { colors: ["Red", "Orange", "Green"], name: "Rust", descriptor: "earthy like sun-warmed clay", natureImage: "sun-warmed clay" },
  { colors: ["Red", "Orange", "Blue"], name: "Brick", descriptor: "solid like kiln-fired brick", natureImage: "a sunbaked adobe wall" },
  { colors: ["Red", "Orange", "Indigo"], name: "Oxide", descriptor: "deep like mineral earth", natureImage: "mineral earth" },
  { colors: ["Red", "Orange", "Violet"], name: "Garnet", descriptor: "rich like polished stone", natureImage: "polished stone" },
  { colors: ["Red", "Orange", "Purple"], name: "Poppy", descriptor: "bold like red blooms", natureImage: "a field of wild red blossoms" },
  { colors: ["Red", "Yellow", "Green"], name: "Cinnamon", descriptor: "warm like spiced bark", natureImage: "warm bark drying in the sun" },
  { colors: ["Red", "Yellow", "Blue"], name: "Umber", descriptor: "grounded like dark soil", natureImage: "dark soil" },
  { colors: ["Red", "Yellow", "Indigo"], name: "Sienna", descriptor: "warm like baked earth", natureImage: "baked earth" },
  { colors: ["Red", "Yellow", "Violet"], name: "Coral", descriptor: "vivid like a warm reef", natureImage: "a warm reef in shallow water" },
  { colors: ["Red", "Yellow", "Purple"], name: "Clay", descriptor: "steady like riverbank mud", natureImage: "riverbank mud" },
  { colors: ["Red", "Green", "Blue"], name: "Cedar", descriptor: "warm like weathered bark", natureImage: "old bark after a spring rain" },
  { colors: ["Red", "Green", "Indigo"], name: "Sumac", descriptor: "rich like turning autumn leaves", natureImage: "a hillside of leaves turning deep red" },
  { colors: ["Red", "Green", "Violet"], name: "Hibiscus", descriptor: "bold like tropical blooms", natureImage: "a wide-open tropical blossom" },
  { colors: ["Red", "Green", "Purple"], name: "Briar", descriptor: "thorny like wild undergrowth", natureImage: "wild undergrowth" },
  { colors: ["Red", "Blue", "Indigo"], name: "Wine", descriptor: "deep like aged fruit", natureImage: "aged fruit" },
  { colors: ["Red", "Blue", "Violet"], name: "Plum", descriptor: "soft like ripe plum skin", natureImage: "the dusty bloom on ripe fruit" },
  { colors: ["Red", "Blue", "Purple"], name: "Aubergine", descriptor: "dark like nightfall fruit", natureImage: "nightfall fruit" },
  { colors: ["Red", "Indigo", "Violet"], name: "Magenta", descriptor: "bright like vivid petals", natureImage: "vivid petals" },
  { colors: ["Red", "Indigo", "Purple"], name: "Fuchsia", descriptor: "sharp like electric bloom", natureImage: "an electric bloom" },
  { colors: ["Red", "Violet", "Purple"], name: "Orchid", descriptor: "delicate like tropical flowers", natureImage: "dew on a delicate petal" },
  { colors: ["Orange", "Yellow", "Green"], name: "Mustard", descriptor: "bright like blooming fields", natureImage: "a yellow field in early spring" },
  { colors: ["Orange", "Yellow", "Blue"], name: "Ochre", descriptor: "earthy like dry hillside", natureImage: "a dry hillside" },
  { colors: ["Orange", "Yellow", "Indigo"], name: "Honey", descriptor: "warm like thick honey", natureImage: "slow-pouring tree sap" },
  { colors: ["Orange", "Yellow", "Violet"], name: "Apricot", descriptor: "glowing like morning light", natureImage: "morning light" },
  { colors: ["Orange", "Yellow", "Purple"], name: "Saffron", descriptor: "spiced like warm air", natureImage: "warm air" },
  { colors: ["Orange", "Green", "Blue"], name: "Moss", descriptor: "soft like forest floor", natureImage: "velvet growth on a damp log" },
  { colors: ["Orange", "Green", "Indigo"], name: "Lichen", descriptor: "cool like stone lichen", natureImage: "pale growth on a shaded boulder" },
  { colors: ["Orange", "Green", "Violet"], name: "Sandstone", descriptor: "warm like sunlit canyon rock", natureImage: "red rock walls in late afternoon sun" },
  { colors: ["Orange", "Green", "Purple"], name: "Thicket", descriptor: "dense like tangled growth", natureImage: "an overgrown hedgerow" },
  { colors: ["Orange", "Blue", "Indigo"], name: "Ash", descriptor: "quiet like cooled hearth ash", natureImage: "a spent campfire at dawn" },
  { colors: ["Orange", "Blue", "Violet"], name: "Lilac", descriptor: "soft like spring blossoms", natureImage: "a spring bush heavy with fragrant blooms" },
  { colors: ["Orange", "Blue", "Purple"], name: "Rosewood", descriptor: "warm like polished rosewood", natureImage: "an old violin's polished grain" },
  { colors: ["Orange", "Indigo", "Violet"], name: "Fireweed", descriptor: "resilient like first blooms after fire", natureImage: "a burned hillside blooming again" },
  { colors: ["Orange", "Indigo", "Purple"], name: "Mulberry", descriptor: "deep like ripe dark fruit", natureImage: "dark fruit ripening on a summer branch" },
  { colors: ["Orange", "Violet", "Purple"], name: "Peony", descriptor: "lush like garden blooms", natureImage: "wildflowers stirring in warm summer air" },
  { colors: ["Yellow", "Green", "Blue"], name: "Meadow", descriptor: "gentle like open grassland", natureImage: "tall grass swaying in early summer" },
  { colors: ["Yellow", "Green", "Indigo"], name: "Olive", descriptor: "earthy like sun-dried leaves", natureImage: "silvery leaves on a dry hillside" },
  { colors: ["Yellow", "Green", "Violet"], name: "Wheat", descriptor: "golden like harvest fields", natureImage: "an open sun-baked prairie" },
  { colors: ["Yellow", "Green", "Purple"], name: "Leaf", descriptor: "warm like turning foliage", natureImage: "the first gold of early autumn" },
  { colors: ["Yellow", "Blue", "Indigo"], name: "Slate", descriptor: "calm like overcast sky", natureImage: "an overcast sky" },
  { colors: ["Yellow", "Blue", "Violet"], name: "Foxglove", descriptor: "soft like foxglove bloom", natureImage: "a nodding wildflower in the shade" },
  { colors: ["Yellow", "Blue", "Purple"], name: "Driftwood", descriptor: "weathered like sea-worn driftwood", natureImage: "sun-bleached beach timber" },
  { colors: ["Yellow", "Indigo", "Violet"], name: "Clover", descriptor: "soft like pasture blossoms", natureImage: "blossoms dotting a summer pasture" },
  { colors: ["Yellow", "Indigo", "Purple"], name: "Chestnut", descriptor: "rich like roasted chestnut", natureImage: "warm autumn firelight" },
  { colors: ["Yellow", "Violet", "Purple"], name: "Salmon", descriptor: "warm like a pink dawn", natureImage: "a pink dawn over the river" },
  { colors: ["Green", "Blue", "Indigo"], name: "Fjord", descriptor: "deep like cold water", natureImage: "cold water" },
  { colors: ["Green", "Blue", "Violet"], name: "Twilight", descriptor: "hushed like fading twilight", natureImage: "a darkening evening sky" },
  { colors: ["Green", "Blue", "Purple"], name: "Cove", descriptor: "quiet like hidden inlets", natureImage: "a sheltered rocky shoreline" },
  { colors: ["Green", "Indigo", "Violet"], name: "Midnight", descriptor: "hushed like a moonlit night", natureImage: "a night sky lit by a full moon" },
  { colors: ["Green", "Indigo", "Purple"], name: "Shadow", descriptor: "soft like cool shade", natureImage: "the cool underside of a leaf" },
  { colors: ["Green", "Violet", "Purple"], name: "Thistle", descriptor: "hardy like wild hillside blooms", natureImage: "a spiky wildflower in late summer" },
  { colors: ["Blue", "Indigo", "Violet"], name: "Iris", descriptor: "bright like spring petals", natureImage: "a rain-washed spring sky" },
  { colors: ["Blue", "Indigo", "Purple"], name: "Heather", descriptor: "soft like hillside heather", natureImage: "a moor in early bloom" },
  { colors: ["Blue", "Violet", "Purple"], name: "Berry", descriptor: "rich like wild berries", natureImage: "a bramble thick with fruit" },
  { colors: ["Indigo", "Violet", "Purple"], name: "Aster", descriptor: "bright like late-summer blooms", natureImage: "wildflowers along a late-summer roadside" }
];

const blendKey = colors => [...colors].sort().join("|");
const index = new Map(BLENDS.map(b => [blendKey(b.colors), b]));

/* getBlend("Purple", "Indigo", "Orange") -> the blend, or null if the three
   aren't three different colors from the eight. */
export function getBlend(a, b, c) {
  return index.get(blendKey([a, b, c])) || null;
}

/* The swatch for a blend (or any three color keys): the average of the
   three atlas.css colors, rounded, as "#RRGGBB". Needs a page that has
   loaded core/atlas.css. Returns "" if a color can't be read. */
export function blendHex(blendOrColors, el = document.documentElement) {
  const colors = Array.isArray(blendOrColors) ? blendOrColors : blendOrColors.colors;
  const rgbs = colors.map(k => colorValue(k, "color", el)).map(h => {
    const m = /^#?([0-9a-f]{6})$/i.exec(h);
    return m ? [0, 2, 4].map(i => parseInt(m[1].slice(i, i + 2), 16)) : null;
  });
  if (rgbs.some(x => !x)) return "";
  return "#" + [0, 1, 2]
    .map(i => Math.round(rgbs.reduce((sum, c) => sum + c[i], 0) / rgbs.length)
      .toString(16).padStart(2, "0"))
    .join("").toUpperCase();
}
