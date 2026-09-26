/* ==========================================================================
   Climate Color Quiz — Data Engine (Colors, Questions, and Syntheses)
   ========================================================================== */

// NOTE: the old `axis` field (Pace/People/Place/Purpose pairings) was
// retired with the 2026-09-22 normative rewrite — each color is now its
// own independent scoring track, not one half of a forced-choice pair. It
// isn't read anywhere else in the codebase (verified before removing it),
// so nothing else needed to change alongside this.
export const styles = {
    Red:    { name: "Red",    reflection: "Movement" },
    Green:  { name: "Green",  reflection: "Steadiness" },
    Orange: { name: "Orange", reflection: "Enthusiasm" },
    Purple: { name: "Purple", reflection: "Belonging" },
    Blue:   { name: "Blue",   reflection: "Clarity" },
    Violet: { name: "Violet", reflection: "Safety" },
    Yellow: { name: "Yellow", reflection: "Possibility" },
    Indigo: { name: "Indigo", reflection: "Memory" }
};

export const fullResults = {
    Red:    { description: "Red brings the spark-plug energy of climate action. You thrive on momentum, rapid prototyping, and cutting through friction to deliver tangible outcomes." },
    Green:  { description: "Green provides the backbone of endurance. You ensure that systems are resilient, reliable, and capable of weathering long-term systemic pressures." },
    Orange: { description: "Orange brings warmth and enthusiasm to climate work. You energize people, spark engagement, and turn quiet awareness into shared momentum." },
    Purple: { description: "Purple weaves the social fabric of the movement. You bridge isolated groups, foster collaboration, and build resilient coalitions." },
    Blue:   { description: "Blue designs the physical and systemic blueprints of a sustainable world. You turn abstract ideas into functional, scalable structures." },
    Violet: { description: "Violet stands watch over what matters. You defend vital ecosystems, protect vulnerable communities, and safeguard what's at risk." },
    Yellow: { description: "Yellow dreams the world anew. You inspire collective imagination with bold alternatives, paradigm shifts, and hopeful horizons." },
    Indigo: { description: "Indigo preserves the wisdom of the past. You protect cultural heritage, historical lore, and ecological memory across generations." }
};

// Retained for future use (e.g. the resource directory or pathway pages).
// Not currently imported or rendered by results-ui.js.
export const starterKits = {
    Red:    { core: ["Deploy rapid pilot initiatives", "Cut bureaucratic friction", "Measure tangible outcomes weekly"] },
    Green:  { core: ["Reinforce operational redundancies", "Audit long-term system health", "Build shock-resistant workflows"] },
    Orange: { core: ["Encourage participation and involvement", "Bring enthusiasm to shared efforts", "Create emotional momentum during slow periods"] },
    Purple: { core: ["Host cross-sector working groups", "Map community resource networks", "Facilitate collaborative spaces"] },
    Blue:   { core: ["Draft modular physical blueprints", "Design low-carbon local infrastructure", "Optimize resource loops"] },
    Violet: { core: ["Establish localized environmental patrols", "Monitor local habitat health", "Defend ecological buffer zones"] },
    Yellow: { core: ["Prototype alternative cultural futures", "Author speculative policy narratives", "Host creative scenario workshops"] },
    Indigo: { core: ["Document oral histories and local lore", "Preserve traditional ecological knowledge", "Maintain institutional archives"] }
};

// ==========================================================================
// Results-page Card 1 (Hero) content — added for the C3 redesign
// (2026-09-21). Originally, `primary` was used when this color was the
// person's PRIMARY (starting) color — the "{Color} is you at your X"
// opener, 3 sentences — and `short` for when it showed up as SECONDARY or
// TERTIARY — a shorter "{Color} brings the Y" beat, 2 sentences.
//
// 2026-09-23: results-ui.js no longer uses `primary` at all — the hero
// summary's three color paragraphs now read as parallel, equally punchy
// "{Color} brings the..." statements rather than giving the primary color a
// longer, differently-voiced treatment, so all three palette colors now
// pull from `short`. `primary` is left in place (each entry's data, not
// deleted) in case a future layout wants the longer per-color voice back,
// but it's currently dormant/unused.
//
// Both fields are written in second person and verified at or under a
// 9th-grade reading level (Flesch-Kincaid, MN plain-language standard)
// rather than assumed — grades ranged 4.5–6.7, well under the ceiling on
// purpose (more inclusive for a "welcome total newcomers" goal, not an
// accident).
// ==========================================================================
export const identityBlurbs = {
    Red: {
        primary: "Red is you at your most unstoppable. When a project stalls, you're the one who gets it moving again. You'd rather try something imperfect today than wait for a perfect plan tomorrow.",
        short: "Red brings the momentum. You push things forward when everyone else is still talking about it."
    },
    Green: {
        primary: "Green is you at your steadiest. While others move on to the next exciting thing, you keep showing up, day after day, season after season. That kind of endurance is rare, and the climate movement genuinely needs it.",
        short: "Green brings the steadiness. You're the reason things keep going long after the excitement fades."
    },
    Orange: {
        primary: "Orange is you at your most energizing. When a room goes flat, you're the one who lights it back up. That excitement turns quiet interest into real momentum.",
        short: "Orange brings the energy. You turn quiet interest into real momentum."
    },
    Purple: {
        primary: "Purple is you at your most connected. You notice who's missing from the room, and you bring them in. That instinct turns separate efforts into one real movement.",
        short: "Purple brings the connection. You notice who's missing from the room, and you bring them in."
    },
    Blue: {
        primary: "Blue is you at your clearest. You look at a messy problem and see the system underneath it, then you build something that actually works. That clarity turns a tangled goal into a plan people can follow.",
        short: "Blue brings the clarity. You turn a messy problem into a plan people can actually follow."
    },
    Violet: {
        primary: "Violet is you at your most protective. When something worth saving is at risk, you're the one standing in front of it. That protectiveness is what keeps hard-won progress from slipping away.",
        short: "Violet brings the protection. When something worth saving is at risk, you're the one standing in front of it."
    },
    Yellow: {
        primary: "Yellow is you at your most imaginative. You're the one still asking what if when everyone else has given up on the old approach. That kind of imagination opens doors other people can't see yet.",
        short: "Yellow brings the imagination. You're the one still asking 'what if' when everyone else has given up on the old approach."
    },
    Indigo: {
        primary: "Indigo is you at your most grounded. You remember what's worked before, and you make sure good lessons don't get lost the next time around. That memory keeps the movement from repeating its own mistakes.",
        short: "Indigo brings the memory. You make sure the lessons already learned don't get lost."
    }
};

// ==========================================================================
// Results-page "action palette" card content — restructured 2026-09-23 from
// one dense sentence per color into a short, punchy bullet list (the
// sentence form read too dense in the narrow card layout; bullets scan
// faster). Each color still gets exactly 3 items, each
// grounded in that color's real "Try This" list from its own pathway page
// (not invented from scratch) — e.g. Green's items reflect the pathway's
// "adopt a local habitat" / "join a stewardship program" / "support a
// community garden" entries, just condensed to short gerund phrases instead
// of full sentences. Renamed from checklistActions (the "checklist" framing
// left this file two content pivots ago) to colorActivities, its only
// consumer (results-ui.js) updated to match.
// ==========================================================================
export const colorActivities = {
    Red: [
        "Leading a local cleanup or restoration shift",
        "Starting a small action crew with friends",
        "Stepping up as a project lead"
    ],
    Orange: [
        "Hosting a climate storytelling night",
        "Recording a video about a local project",
        "Joining an outreach team that spreads the word"
    ],
    Yellow: [
        "Going to a climate innovation workshop",
        "Offering a fresh angle at a planning meeting",
        "Brainstorming zero-waste solutions with a local group"
    ],
    Green: [
        "Adopting a local habitat",
        "Joining a trail or garden crew",
        "Taking a recurring conservation shift"
    ],
    Blue: [
        "Running logistics for a cleanup event",
        "Building a simple sign-up system",
        "Offering your organizing skills to a nonprofit"
    ],
    Indigo: [
        "Supporting a land trust long-term",
        "Helping maintain a local heritage site",
        "Recording an elder's story about the area"
    ],
    Purple: [
        "Volunteering as a welcomer for a climate group",
        "Hosting a small gathering that builds trust",
        "Helping lead a conversation about local needs"
    ],
    Violet: [
        "Joining a habitat defense team",
        "Volunteering with a climate justice group",
        "Helping with trail restoration work"
    ]
};

// Stable item identity for item-level analysis (pilot data, and any later
// revision round). `id` never changes once assigned and is never reused,
// even if an item is retired — it is the key every recorded response points
// back to. `v` is the wording version: increment it whenever a prompt's
// text changes, and update QUESTION_BANK_VERSION below, so responses to
// different wordings of the same item are never pooled by accident. All 40
// items were baselined at v: 1 on 2026-09-24. Presentation order is still
// shuffled at runtime; array order here carries no meaning.
// ==========================================================================
// Color definitions — added 2026-09-26, BEFORE the v3 item rewrite, so every
// item below could be written from (and checked against) one clear standard.
// Every color is defined the same way: as a MOVE a person is energized to
// make, anchored to that color's three wheel verbs and its `reflection`
// word. User-facing: each definition stands on its own and never mentions
// another color, so no color reads as defined by (or against) another.
// ==========================================================================
export const colorDefinitions = {
    Red:    { move: "Getting action started.",               spark: "Something needs doing, and nobody has begun." },
    Orange: { move: "Raising people's energy.",              spark: "People are curious but not yet involved." },
    Yellow: { move: "Imagining what could be.",              spark: "Someone asks, \"What if?\"" },
    Green:  { move: "Keeping effort going.",                 spark: "A job needs someone who'll show up again and again." },
    Blue:   { move: "Organizing things so they work.",       spark: "Something is messy and could run better." },
    Indigo: { move: "Keeping what matters from being lost.", spark: "A story, place, or lesson might be forgotten." },
    Purple: { move: "Connecting people to each other.",      spark: "Someone is left out, or two groups haven't met." },
    Violet: { move: "Protecting what's at risk.",            spark: "Something worth saving is under threat." }
};

/* --------------------------------------------------------------------------
   ITEM-WRITER BOUNDARIES — internal only, never rendered.
   The pairs of colors most likely to be confused in a single item, each
   pair listed once. Before adding or revising an item, check it against
   every boundary that touches its color: if a reader could reasonably sort
   it into the other color in the pair, rewrite it. (Some colors touch more
   boundaries than others — that reflects how easy they are to confuse, not
   their importance, which is why this list stays out of the UI.)

     Red / Green     — starting the effort       vs. keeping it going
     Red / Blue      — starting the doing        vs. giving it a structure
     Orange / Purple — raising people's energy   vs. connecting people to each other
                       (welcoming and belonging are Purple's, not Orange's)
     Yellow / Blue   — imagining what could be   vs. making what exists work
     Yellow / Indigo — reaching for the new      vs. keeping what's been
     Green / Indigo  — keeping the effort alive  vs. keeping the memory alive
     Indigo / Violet — guarding the past         vs. guarding what's threatened now
     Purple / Indigo — listening to connect      vs. listening to preserve
   -------------------------------------------------------------------------- */

// v3 stem (2026-09-26): ONE question, identical on every item, asked about
// energy/preference rather than willingness-at-a-cost. Replaces v2's
// per-item stems, which mixed costly actions ("Do you still show up?") with
// cost-free feelings ("Do you light up?") — four of the six feeling stems
// were Yellow, which likely made Yellow easier to score high on. The stem
// lives here, not in each prompt, so it can't drift again.
export const ITEM_STEM = "Would that energize you?";

// v3 prompts: a neutral moment plus the color's move, with v2's friction
// clauses ("and it isn't your job," "and you're worn out") removed. Those
// clauses guarded against saying yes to everything, but results rank colors
// against each other, so a uniformly agreeable answerer shifts all eight
// colors equally; the friction was mostly adding weight, not precision.
// Watch pilot data for ceiling effects (many 10/10 scores) instead.
export const QUESTION_BANK_VERSION = "2026-09-26";

export const questions = [
  // Red — getting action started
  { id: "red-1", v: 3, color: "Red", prompt: "You're the first one at a beach cleanup. You grab a bag and dive in before anyone else arrives." },
  { id: "red-2", v: 3, color: "Red", prompt: "Your group can't decide where to put a community garden. You pick a spot and break ground that weekend." },
  { id: "red-3", v: 3, color: "Red", prompt: "A tool-share library has been \"a good idea\" in your neighborhood for months. You set a date and launch it with the tools in your garage." },
  { id: "red-4", v: 3, color: "Red", prompt: "A recycling project meeting ends with \"let's draft it tomorrow.\" You start the draft that night." },
  { id: "red-5", v: 3, color: "Red", prompt: "Old event posters are cluttering your building's hallway. You take them all down on the spot." },

  // Orange — raising people's energy
  { id: "orange-1", v: 3, color: "Orange", prompt: "Your block is planning a cleanup day. You go door to door getting neighbors excited to come." },
  { id: "orange-2", v: 3, color: "Orange", prompt: "At a planning meeting, the room feels flat. You share a story that gets everyone fired up again." },
  { id: "orange-3", v: 3, color: "Orange", prompt: "A friend says they're curious about climate issues. You tell them all about a local project you love." },
  { id: "orange-4", v: 3, color: "Orange", prompt: "You're invited to tell a room of strangers why climate action matters to you. You take the mic." },
  { id: "orange-5", v: 3, color: "Orange", prompt: "A group chat has gone quiet. You post something that gets everyone talking again." },

  // Yellow — imagining what could be
  { id: "yellow-1", v: 3, color: "Yellow", prompt: "Your town's festival has looked the same for years. You dream up a fresh new version of it." },
  { id: "yellow-2", v: 3, color: "Yellow", prompt: "Your group's street cleanup always follows the same route. You imagine turning it into a walking tour of hidden local gardens." },
  { id: "yellow-3", v: 3, color: "Yellow", prompt: "Someone says your office could never go zero-waste. You start picturing what it would look like if it did." },
  { id: "yellow-4", v: 3, color: "Yellow", prompt: "You're asked to picture your neighborhood twenty years from now. You imagine something totally different from today." },
  { id: "yellow-5", v: 3, color: "Yellow", prompt: "Talk turns to reinventing your town's recycling program from scratch. You start tossing out bold new ideas." },

  // Green — keeping effort going
  { id: "green-1", v: 3, color: "Green", prompt: "You signed up to water a community garden this summer. You show up every week, right to the end of the season." },
  { id: "green-2", v: 3, color: "Green", prompt: "The food bank needs people to sort donations every Saturday. You become one of the regulars." },
  { id: "green-3", v: 3, color: "Green", prompt: "Your neighborhood has a monthly cleanup crew. You keep your name on the list year after year." },
  { id: "green-4", v: 3, color: "Green", prompt: "A garden irrigation project will take months to finish. You check in every week to keep it on track." },
  { id: "green-5", v: 3, color: "Green", prompt: "A creek restoration project will take years. You stay involved for the long haul." },

  // Blue — organizing things so they work
  { id: "blue-1", v: 3, color: "Blue", prompt: "Your group's sign-up sheet is a mess of crossed-out names. You redo it so it's clear and easy to use." },
  { id: "blue-2", v: 3, color: "Blue", prompt: "The shared supply closet is a jumble. You sort it so everything has a place." },
  { id: "blue-3", v: 3, color: "Blue", prompt: "Your team keeps forgetting to log volunteer hours. You set up a simple checklist." },
  { id: "blue-4", v: 3, color: "Blue", prompt: "A tree-planting day has lots of moving parts. You map out who does what, where, and when." },
  { id: "blue-5", v: 3, color: "Blue", prompt: "Directions for a group hike are spread across three group texts. You pull them into one clear plan." },

  // Indigo — keeping what matters from being lost
  { id: "indigo-1", v: 3, color: "Indigo", prompt: "Your community center is being renovated, and its old records will be boxed up. You make sure the important ones are saved." },
  { id: "indigo-2", v: 3, color: "Indigo", prompt: "At an antique shop, you find an old photo of your neighborhood. You track down the story behind it." },
  { id: "indigo-3", v: 3, color: "Indigo", prompt: "A new playground is planned for a lot that used to flood. You share what happened there years ago." },
  { id: "indigo-4", v: 3, color: "Indigo", prompt: "An elder tells you how the local land has changed over the years. You record their stories so others can hear them later." },
  { id: "indigo-5", v: 3, color: "Indigo", prompt: "Your town's river festival has a long history. You gather old photos and stories to share at this year's event." },

  // Purple — connecting people to each other
  { id: "purple-1", v: 3, color: "Purple", prompt: "At a community meeting, you notice someone sitting on their own. You introduce them to a few people they'd get along with." },
  { id: "purple-2", v: 3, color: "Purple", prompt: "Two friend groups you're part of have never really mixed. You bring them together." },
  { id: "purple-3", v: 3, color: "Purple", prompt: "Two friends planning a fundraiser keep talking past each other. You help them hear each other." },
  { id: "purple-4", v: 3, color: "Purple", prompt: "A new neighbor has just moved onto your block. You introduce them to the people next door." },
  { id: "purple-5", v: 3, color: "Purple", prompt: "A new person joins your climate group. You make sure they leave with at least one new friend." },

  // Violet — protecting what's at risk
  { id: "violet-1", v: 3, color: "Violet", prompt: "A crew starts marking trees for removal in a park you love. You find out whether the trees can be saved." },
  { id: "violet-2", v: 3, color: "Violet", prompt: "A nearby wetland is threatened by new construction. You join the effort to protect it." },
  { id: "violet-3", v: 3, color: "Violet", prompt: "Someone suggests a shortcut through a nesting site. You speak up to protect the birds." },
  { id: "violet-4", v: 3, color: "Violet", prompt: "A plan would cut a bus route some of your neighbors rely on. You stand up to keep it running." },
  { id: "violet-5", v: 3, color: "Violet", prompt: "A trail you care about is starting to erode. You step in to protect it before it gets worse." }
];
