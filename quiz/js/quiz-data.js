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
        primary: "Orange is you at your warmest. You walk into a room and people feel like they belong there too. That warmth turns quiet interest into real momentum.",
        short: "Orange brings the warmth. You make people feel welcome, and you turn quiet interest into real momentum."
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
export const QUESTION_BANK_VERSION = "2026-09-25";

export const questions = [
  // Red — five items
  { id: "red-1", v: 2, color: "Red", prompt: "You're the first to arrive at a beach cleanup, and no one has told you where to begin. Do you start picking up trash on your own?" },
  { id: "red-2", v: 2, color: "Red", prompt: "Your group has argued for weeks over where to put a community garden, and no one will decide. Do you pick a spot and get started?" },
  { id: "red-3", v: 2, color: "Red", prompt: "A friend keeps saying they'll find people for a community storytelling project someday, but never does. Do you take over the search?" },
  { id: "red-4", v: 2, color: "Red", prompt: "A recycling project meeting ends with \"let's draft it tomorrow,\" and nothing's due before then. Do you feel a pull to start tonight?" },
  { id: "red-5", v: 2, color: "Red", prompt: "You notice old event posters still up in your building, and it isn't your job to remove them. Do you take them down yourself?" },

  // Orange — five items
  { id: "orange-1", v: 2, color: "Orange", prompt: "A new neighbor moves in looking overwhelmed, and it doesn't seem like a good time to chat. Do you go introduce yourself anyway?" },
  { id: "orange-2", v: 2, color: "Orange", prompt: "Someone at a neighborhood block party seems unsure they belong, and it isn't your event. Do you go out of your way to welcome them?" },
  { id: "orange-3", v: 2, color: "Orange", prompt: "A friend says they're curious about climate issues but doesn't know where to start. Do you jump right in and tell them all about it?" },
  { id: "orange-4", v: 2, color: "Orange", prompt: "You're invited, but not required, to tell a room of strangers why climate action matters to you. Do you say yes?" },
  { id: "orange-5", v: 2, color: "Orange", prompt: "A group chat has been quiet for weeks, and no one seems ready to revive it. Do you post something to get it going again?" },

  // Yellow — five items
  { id: "yellow-1", v: 2, color: "Yellow", prompt: "Your town's festival has looked the same for years, and people are losing interest. Do you start picturing ways to make it better?" },
  { id: "yellow-2", v: 2, color: "Yellow", prompt: "Your group's street cleanup has followed the same route for years, and no one has asked for a change. Do you suggest a new one?" },
  { id: "yellow-3", v: 2, color: "Yellow", prompt: "Your idea to compost at the office gets shut down with \"we don't do that here,\" and they may have a point. Do you want to try even harder?" },
  { id: "yellow-4", v: 2, color: "Yellow", prompt: "You're asked to picture your neighborhood twenty years from now, and it may not change much. Do you get excited imagining something different?" },
  { id: "yellow-5", v: 2, color: "Yellow", prompt: "Talk turns to redesigning your town's recycling program from scratch, even though the current one works fine. Do you light up at the idea?" },

  // Green — five items
  { id: "green-1", v: 2, color: "Green", prompt: "You signed up to water a community garden all summer, and by the last week you're worn out. Do you still show up?" },
  { id: "green-2", v: 2, color: "Green", prompt: "Sorting food bank donations turns out to be duller than you expected, and you'd like to leave. Do you stick it out?" },
  { id: "green-3", v: 2, color: "Green", prompt: "No one else renewed their spot on the monthly cleanup crew, but your name is still on the list. Do you keep showing up?" },
  { id: "green-4", v: 2, color: "Green", prompt: "A garden irrigation project has been stuck for months waiting on permits, and there's little you can do. Do you keep checking in?" },
  { id: "green-5", v: 2, color: "Green", prompt: "Your part of the creek restoration is done, but the whole project will take years. Do you stay involved for the long haul?" },

  // Blue — five items
  { id: "blue-1", v: 2, color: "Blue", prompt: "Your group's sign-up sheet is a mess of crossed-out names and sticky notes, but it still works. Do you offer to redo it?" },
  { id: "blue-2", v: 2, color: "Blue", prompt: "The shared supply closet has turned into chaos, and fixing it isn't anyone's job. Do you take it on and organize it?" },
  { id: "blue-3", v: 2, color: "Blue", prompt: "Your team keeps forgetting to log volunteer hours after events, though it hasn't caused problems yet. Do you set up a simple checklist?" },
  { id: "blue-4", v: 2, color: "Blue", prompt: "A friend is overwhelmed planning a tree-planting day with lots of moving parts, but hasn't asked for help. Do you offer to map it out?" },
  { id: "blue-5", v: 2, color: "Blue", prompt: "Directions for a group hike are spread across three group texts, and so far everyone has figured it out. Do you pull them into one clear plan?" },

  // Indigo — five items
  { id: "indigo-1", v: 2, color: "Indigo", prompt: "Your community center is being renovated, and old records that matter to longtime residents will be boxed up. Do you speak up so nothing gets lost?" },
  { id: "indigo-2", v: 2, color: "Indigo", prompt: "At an antique shop, you find an old photo of your neighborhood, and nothing is written on the back. Do you want to track down its story?" },
  { id: "indigo-3", v: 2, color: "Indigo", prompt: "A new playground is planned for a lot that used to flood, though it hasn't in years. Do you bring up what happened back then?" },
  { id: "indigo-4", v: 2, color: "Indigo", prompt: "An elder in your community offers to tell you how the land has changed over the years, and your week is already full. Do you make time to listen?" },
  { id: "indigo-5", v: 2, color: "Indigo", prompt: "Your town's river cleanup festival draws a smaller crowd every year, and some say it has run its course. Do you work to keep it alive?" },

  // Purple — five items
  { id: "purple-1", v: 2, color: "Purple", prompt: "At a community meeting, someone sits alone and hasn't said a word, and you can't tell if they'd want company. Do you go sit with them?" },
  { id: "purple-2", v: 2, color: "Purple", prompt: "Two friend groups you're part of have never really mixed, and you're not sure everyone would get along. Do you try to bring them together?" },
  { id: "purple-3", v: 2, color: "Purple", prompt: "Two friends are arguing about a fundraiser they're planning together, and it's really between them. Do you step in to help them hear each other?" },
  { id: "purple-4", v: 2, color: "Purple", prompt: "A coworker seems to have been left out of the team's plans, probably by accident. Do you loop them in yourself?" },
  { id: "purple-5", v: 2, color: "Purple", prompt: "A new person joins your climate group, and welcoming people is usually someone else's job. Do you make sure they leave with one new connection?" },

  // Violet — five items
  { id: "violet-1", v: 2, color: "Violet", prompt: "A crew starts marking trees for removal in a park you love, and it might just be routine. Do you go find out what's happening?" },
  { id: "violet-2", v: 2, color: "Violet", prompt: "You hear that a nearby wetland is quietly at risk, and someone else may already be on it. Do you look into it yourself?" },
  { id: "violet-3", v: 2, color: "Violet", prompt: "Someone suggests a shortcut that would disturb a nearby nesting site, even though other routes would work. Do you push back?" },
  { id: "violet-4", v: 2, color: "Violet", prompt: "A plan to close the only nearby bus route overlooks an elderly neighbor, and it isn't really your place to weigh in. Do you speak up for them?" },
  { id: "violet-5", v: 2, color: "Violet", prompt: "You notice early signs of erosion on a trail you care about, and it might settle on its own. Do you act before it gets worse?" }
];