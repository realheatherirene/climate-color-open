/* ==========================================================================
   QUIZ QUESTIONS: the measuring tool
   ==========================================================================
   Only the shared question, the version, and the 40 moments live here, so
   they are easy to freeze and to check. The quiz, the pilot, and
   tools/simulate-quiz.js all read this file. Change a prompt only on
   purpose: bump its `v` and QUESTION_BANK_VERSION, so answers to different
   wordings are never pooled.

   What each color means (its move and what sparks it) lives in
   core/climate-color.js. Every question is written from that.
   ========================================================================== */

// Each item's `id` never changes once assigned and is never reused, even
// if the item is retired: it is the key every recorded answer points back
// to. `v` is the wording version: raise it whenever a prompt's text
// changes, and update QUESTION_BANK_VERSION below. The quiz shuffles the
// order, so the order here means nothing.

/* --------------------------------------------------------------------------
   WRITING GUIDE (never shown on the page): the pairs of colors most likely
   to be confused in one item. Before adding or revising an item, check it
   against every pair that includes its color: if a reader could
   reasonably sort it into the other color, rewrite it. (Some colors appear
   in more pairs than others because they are easier to confuse, not
   because they matter more.)

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

// One shared question, the same on every item, about energy rather than
// willingness to pay a cost. Separate questions per item mixed costly
// actions ("Do you still show up?") with easy feelings ("Do you light
// up?"), which likely made some colors easier to score high on. Keeping
// it here, not in each prompt, means it can't drift.
export const ITEM_STEM = "Would that energize you?";

// Each prompt is a neutral moment plus the color's move, with no "friction"
// ("and it isn't your job"). Results rank colors against each other, so
// someone who says yes to everything shifts all eight colors equally.
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
