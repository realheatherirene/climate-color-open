/* ==========================================================================
   QUIZ QUESTIONS: the measuring tool
   ==========================================================================
   Only the shared question, the version, and the 40 activities live here, so
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
   WRITING GUIDE (never shown on the page). Every activity follows these
   rules:

     1. One activity, starting with a verb, in 12 words or fewer. Not a
        scene, and never something the person has already done.
     2. Written for someone who hasn't joined anything yet: everyday
        settings (friends, neighbors, school, work, town), never "your
        group," a meeting, or a crew.
     3. Equally easy to say yes to for every color: no time spans,
        deadlines, strangers, microphones, confrontation, or promised
        results.
     4. One or two climate scenes per color at most, so the quiz never
        feels like a test of how green someone is. Violet's move is about
        protecting places, so it has more.
     5. No body or sense words (walk, see, look, hear, picture, notice,
        hike, listen, sounds).
     6. Specific about the activity, ordinary about the setting. The
        detail test: if someone says no, is it more likely because of the
        color's move or because of the detail? If the detail, swap in one
        almost everyone has (a park, not a beach).
     7. One move per activity. Check it against every pair below that
        includes its color: if a reader could reasonably sort it into the
        other color, rewrite it.

   The pairs of colors most likely to be confused in one item. (Some
   colors appear in more pairs than others because they are easier to
   confuse, not because they matter more.)

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

// One shared question, the same on every item, about enjoying the
// activity rather than willingness to pay a cost. Separate questions per item mixed costly
// actions ("Do you still show up?") with easy feelings ("Do you light
// up?"), which likely made some colors easier to score high on. Keeping
// it here, not in each prompt, means it can't drift.
export const ITEM_STEM = "Would you enjoy this?";

// Each prompt is one short, everyday activity that makes the color's move,
// with no "friction" (no added cost, pressure, or deadline). Results rank colors against each other, so
// someone who says yes to everything shifts all eight colors equally.
// Watch pilot data for ceiling effects (many 10/10 scores) instead.
export const QUESTION_BANK_VERSION = "2026-10-01";

export const questions = [
  // Red — getting action started
  { id: "red-1", v: 4, color: "Red", prompt: "Start a book-sharing shelf while others are still talking about it." },
  { id: "red-2", v: 4, color: "Red", prompt: "Kick off the fix-it night everyone keeps saying they want." },
  { id: "red-3", v: 4, color: "Red", prompt: "Launch a clothing swap in your neighborhood." },
  { id: "red-4", v: 4, color: "Red", prompt: "Start fixing up a run-down playground instead of waiting for a plan." },
  { id: "red-5", v: 4, color: "Red", prompt: "Start a community garden on an empty lot." },

  // Orange — raising people's energy
  { id: "orange-1", v: 4, color: "Orange", prompt: "Get your friends excited to join a park cleanup." },
  { id: "orange-2", v: 4, color: "Orange", prompt: "Get a friend who's curious about climate excited to get involved." },
  { id: "orange-3", v: 4, color: "Orange", prompt: "Share a post that gets people fired up for Earth Day." },
  { id: "orange-4", v: 4, color: "Orange", prompt: "Cheer on a friend who's trying to waste less food." },
  { id: "orange-5", v: 4, color: "Orange", prompt: "Get a quiet group chat buzzing again." },

  // Yellow — imagining what could be
  { id: "yellow-1", v: 4, color: "Yellow", prompt: "Dream up a fresh new version of your town's festival." },
  { id: "yellow-2", v: 4, color: "Yellow", prompt: "Imagine what your street could be like in twenty years." },
  { id: "yellow-3", v: 4, color: "Yellow", prompt: "Come up with a wild idea for reusing an empty building." },
  { id: "yellow-4", v: 4, color: "Yellow", prompt: "Brainstorm bold ideas for what your library could become." },
  { id: "yellow-5", v: 4, color: "Yellow", prompt: "Imagine a zero-waste version of your school or workplace." },

  // Green — keeping effort going
  { id: "green-1", v: 4, color: "Green", prompt: "Help at the same food pantry every month." },
  { id: "green-2", v: 4, color: "Green", prompt: "Be the one a neighborhood cleanup can always count on." },
  { id: "green-3", v: 4, color: "Green", prompt: "Take a regular turn watering a shared garden." },
  { id: "green-4", v: 4, color: "Green", prompt: "Keep a new recycling program going after the first excitement fades." },
  { id: "green-5", v: 4, color: "Green", prompt: "Keep up a weekly habit, like composting." },

  // Blue — organizing things so they work
  { id: "blue-1", v: 4, color: "Blue", prompt: "Turn scattered notes for a bake sale into one clear plan." },
  { id: "blue-2", v: 4, color: "Blue", prompt: "Sort a cluttered closet so everything has a place." },
  { id: "blue-3", v: 4, color: "Blue", prompt: "Make a simple sign-up sheet for a potluck." },
  { id: "blue-4", v: 4, color: "Blue", prompt: "Plan out who does what for a tree-planting day." },
  { id: "blue-5", v: 4, color: "Blue", prompt: "Set up a chore chart so everyone knows their job." },

  // Indigo — keeping what matters from being lost
  { id: "indigo-1", v: 4, color: "Indigo", prompt: "Collect the stories of older people in your town." },
  { id: "indigo-2", v: 4, color: "Indigo", prompt: "Save old photos and records before they're thrown out." },
  { id: "indigo-3", v: 4, color: "Indigo", prompt: "Find out the history behind a place in your neighborhood." },
  { id: "indigo-4", v: 4, color: "Indigo", prompt: "Write down old recipes from your community so they aren't forgotten." },
  { id: "indigo-5", v: 4, color: "Indigo", prompt: "Keep a record of how a local park or creek has changed." },

  // Purple — connecting people to each other
  { id: "purple-1", v: 4, color: "Purple", prompt: "Introduce two people you think should meet." },
  { id: "purple-2", v: 4, color: "Purple", prompt: "Get two of your friend groups to hang out together." },
  { id: "purple-3", v: 4, color: "Purple", prompt: "Help two people who disagree understand each other." },
  { id: "purple-4", v: 4, color: "Purple", prompt: "Help a new neighbor get to know the people next door." },
  { id: "purple-5", v: 4, color: "Purple", prompt: "Connect neighbors who all want more trees on your street." },

  // Violet — protecting what's at risk
  { id: "violet-1", v: 4, color: "Violet", prompt: "Help save a park that's about to be paved over." },
  { id: "violet-2", v: 4, color: "Violet", prompt: "Protect a nesting area during bird season." },
  { id: "violet-3", v: 4, color: "Violet", prompt: "Help keep a bus route your neighbors rely on." },
  { id: "violet-4", v: 4, color: "Violet", prompt: "Join an effort to protect a wetland from being filled in." },
  { id: "violet-5", v: 4, color: "Violet", prompt: "Help protect a trail before it washes away." }
];
