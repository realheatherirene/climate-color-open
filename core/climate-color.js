/* ==========================================================================
   CLIMATE COLOR: the one source of truth for what each color means
   ==========================================================================
   Every page reads the color system from here, so nothing drifts out of
   sync. What lives where:

     core/atlas.css         What each color LOOKS like: the brand color
                            (--{color}-color), its darker text shade
                            (--{color}-text), and its three wheel shades
                            (--{color}-tint-1 to -3). No hex codes live in
                            this file.
     core/climate-color.js  What each color MEANS (this file): archetype,
                            move, spark, verbs, and wheel order.
     core/blends.js         The 56 three-color blends.
     core/wheel.js          The wheel, drawn from the two files above.
     core/index.html        The reference page that shows all of it.

   RULES
     - Color names are the keys (links, data, saved answers). Archetypes are
       display labels only, so they can be renamed without breaking links.
       When one is renamed, add the old name to ALIASES so old links still
       work. Aliases stay forever.
     - Lead with the color, then the archetype right after it. Never show a
       color without its name or archetype.
     - COLORS is in wheel order, clockwise from 12 o'clock.
     - `verbs` are in clockwise order around the wheel's outer ring.
     - `label` is the wheel's text color on that wedge: whichever of black
       or white clears 4.5:1 on the brand color. core/index.html checks it
       live and flags it if a palette change ever breaks it.
   ========================================================================== */

export const COLORS = [
  {
    key: "Yellow", archetype: "Visionary", plural: "Visionaries",
    move: "Imagining what could be.",
    spark: "Someone asks, \"What if?\"",
    verbs: ["Imagine", "Reframe", "Create"],
    label: "black"
  },
  {
    key: "Orange", archetype: "Amplifier", plural: "Amplifiers",
    move: "Raising people's energy.",
    spark: "People are curious but not yet involved.",
    verbs: ["Evangelize", "Encourage", "Amplify"],
    label: "black"
  },
  {
    key: "Red", archetype: "Catalyst", plural: "Catalysts",
    move: "Getting action started.",
    spark: "Something needs doing, and nobody has begun.",
    verbs: ["Catalyze", "Execute", "Deploy"],
    label: "white"
  },
  {
    key: "Violet", archetype: "Guardian", plural: "Guardians",
    move: "Protecting what's at risk.",
    spark: "Something worth saving is under threat.",
    verbs: ["Defend", "Uphold", "Shield"],
    label: "black"
  },
  {
    key: "Indigo", archetype: "Keeper", plural: "Keepers",
    move: "Keeping what matters from being lost.",
    spark: "A story, place, or lesson might be forgotten.",
    verbs: ["Archive", "Preserve", "Honor"],
    label: "white"
  },
  {
    key: "Purple", archetype: "Connector", plural: "Connectors",
    move: "Connecting people to each other.",
    spark: "Someone is left out, or two groups haven't met.",
    verbs: ["Bridge", "Listen", "Unite"],
    label: "white"
  },
  {
    key: "Green", archetype: "Anchor", plural: "Anchors",
    move: "Keeping effort going.",
    spark: "A job needs someone who'll show up again and again.",
    verbs: ["Sustain", "Equip", "Ground"],
    label: "white"
  },
  {
    key: "Blue", archetype: "Architect", plural: "Architects",
    move: "Organizing things so they work.",
    spark: "Something is messy and could run better.",
    verbs: ["Design", "Organize", "Align"],
    label: "white"
  }
];

/* Old archetype names. Kept forever so old links and saved answers still
   find their color. */
export const ALIASES = {
  Driver: "Red",
  Advocate: "Orange",
  Stabilizer: "Green"
};

/* Color keys in wheel order: ["Yellow", "Orange", ...]. */
export const COLOR_KEYS = COLORS.map(c => c.key);

const byKey = new Map(COLORS.map(c => [c.key, c]));

/* Any name a link might carry (color, archetype, plural, or old alias, in
   any capitalization) mapped to its color key. */
const lookup = new Map();
for (const c of COLORS) {
  for (const n of [c.key, c.archetype, c.plural]) lookup.set(n.toLowerCase(), c.key);
}
for (const [oldName, key] of Object.entries(ALIASES)) {
  lookup.set(oldName.toLowerCase(), key);
  lookup.set((oldName + "s").toLowerCase(), key);
}

/* "purple", "Connector", "connectors", "Driver" -> "Purple". Returns null
   for anything that isn't one of the eight. */
export function resolveColor(name) {
  if (typeof name !== "string") return null;
  return lookup.get(name.trim().toLowerCase()) || null;
}

/* A list of colors from a link, like "Purple,Indigo,Orange". Each name
   resolves the same way as resolveColor. Unknown names and repeats are
   dropped, and the order given is kept:
   resolveColors("purple, keepers, purple") -> ["Purple", "Indigo"]. */
export function resolveColors(text) {
  if (typeof text !== "string") return [];
  return [...new Set(text.split(",").map(resolveColor).filter(Boolean))];
}

/* How many of a palette's colors an item carries. Pages use it to show
   the best matches first:
   paletteMatches(["Purple", "Orange"], ["Purple", "Indigo", "Orange"]) -> 2. */
export function paletteMatches(itemColors, palette) {
  return itemColors.filter(k => palette.includes(k)).length;
}

/* The full record for a color key (or any name resolveColor accepts). */
export function getColor(name) {
  return byKey.get(resolveColor(name)) || null;
}

/* The atlas.css variable names for a color: cssVar("Purple") ->
   "--purple-color", cssVar("Purple", "text") -> "--purple-text". Use in
   styles as `var(${cssVar(key)})`. */
export function cssVar(name, kind = "color") {
  const key = resolveColor(name);
  return key ? `--${key.toLowerCase()}-${kind}` : null;
}

/* The live hex value from core/atlas.css, e.g. colorValue("Purple") ->
   "#89387A". Needs a page that has loaded atlas.css. Returns "" if it
   can't find one. */
export function colorValue(name, kind = "color", el = document.documentElement) {
  const v = cssVar(name, kind);
  return v ? getComputedStyle(el).getPropertyValue(v).trim().toUpperCase() : "";
}
