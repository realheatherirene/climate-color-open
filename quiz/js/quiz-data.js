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
// (2026-09-21), approved as: "Love it, love it, love it. Approved. Let's
// build it!" `primary` is used when this color is the person's PRIMARY
// (starting) color — it's the "{Color} is you at your X" opener, 3
// sentences. `short` is used when the color shows up as SECONDARY or
// TERTIARY — a shorter "{Color} brings the Y" beat, 2 sentences. Both are
// written in second person and verified at or under a 9th-grade reading
// level (Flesch-Kincaid, MN plain-language standard) rather than assumed —
// grades ranged 4.5–6.7, well under the ceiling on purpose (more inclusive
// for a "welcome total newcomers" goal, not an accident).
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
// Results-page Card 2 (Checklist) content — one concrete, doable action per
// color. Each is grounded in that color's real "Try This" list on its own
// pathway page (not invented from scratch) — e.g. Green's line reflects the
// pathway's "adopt a local habitat" / "join a stewardship program" /
// "support a community garden" entries. Also verified at or under a
// 9th-grade reading level.
// ==========================================================================
export const checklistActions = {
    Red: "Lead a cleanup, or start a small action crew with friends who want to move fast.",
    Green: "Join a habitat crew, garden project, or trail team near you, and keep coming back.",
    Orange: "Host a coffee chat or a story night about climate. Bring the warmth.",
    Purple: "Host a small gathering, or welcome someone new into a climate group.",
    Blue: "Help a local group get organized. Build a simple system for sign-ups and schedules.",
    Violet: "Join a habitat defense team, or help restore a trail that needs protecting.",
    Yellow: "Go to a workshop that dreams up new climate ideas. Ask your boldest question.",
    Indigo: "Record an elder's story, or help track your area's climate history."
};

// ==========================================================================
// Quiz items — normative rewrite (2026-09-22). Replaces the old ipsative,
// forced-choice-pair question bank above (4 axes x 4 questions x 2 paired
// colors). Each item now belongs to exactly ONE color, is answered
// independently on the fixed 3-point scale defined in quiz-scoring.js
// (SCALE: "Probably not" / "Maybe" / "Probably yes"), and is scored on its
// own — nothing here is compared against an opposite-pole item the way
// Red vs. Green or Blue vs. Violet used to be. That's what makes all 56
// named blends reachable through ordinary quiz play (the old axis-pair
// structure made 24 of them mathematically unreachable — see
// reachability_check.mjs from the 2026-09 analysis).
//
// 5 items per color x 8 colors = 40 items total, every one administered
// each session (no sampling from a larger bank — this IS the bank).
//
// Every item is either:
//   Template A — short sentence + short sentence + question (3 sentences)
//   Template B — one compound sentence + question (2 sentences)
// and every item was checked against three things before landing here:
//   (1) Flesch-Kincaid grade <= 9 (MN plain-language standard)
//   (2) no obvious "virtuous answer" — no either/or phrasing, no
//       population-quantifying legitimizer ("most people," "some people")
//   (3) the question itself never ends on "anyway" — it reads as a
//       neutral, visceral prompt, not a challenge with a judgment baked in
// See final40_verify.mjs / anyway_sweep_verify.mjs for the automated check.
// ==========================================================================
export const questions = [
  // Red — five items
  { color: "Red", prompt: "You're the first to arrive at a beach cleanup, and nobody's told you what to do yet. Do you start picking up trash on your own?" },
  { color: "Red", prompt: "Your group has argued for weeks over where to put a new community garden. No one's forcing a decision today. Do you just pick a spot and get started?" },
  { color: "Red", prompt: "A friend keeps saying \"someday\" about starting the community mural they've talked about for years, and it's really none of your business to push. Do you tell them to start this weekend, ready or not?" },
  { color: "Red", prompt: "The planning meeting ends with \"let's revisit the recycling proposal later.\" Nothing is technically due until then. Do you feel a pull to try something before that?" },
  { color: "Red", prompt: "You spot a broken recycling bin at your building that no one's fixed. It's not something you're responsible for. Do you just fix it yourself right now?" },

  // Orange — five items
  { color: "Orange", prompt: "A neighbor moves in looking overwhelmed, and it's clearly not a good moment for a chat. Do you walk over and introduce yourself right then?" },
  { color: "Orange", prompt: "Someone at your neighborhood block party seems unsure whether they belong there. It's not your event to host. Do you go out of your way to make them feel welcome?" },
  { color: "Orange", prompt: "A friend mentions being mildly curious about composting, and they clearly weren't looking for a whole conversation. Do you get excited and tell them more?" },
  { color: "Orange", prompt: "You're asked to say a few words to a room of strangers about why you started composting. It's completely optional. Do you say yes?" },
  { color: "Orange", prompt: "A group chat has gone quiet for weeks. No one's asked you to revive it. Do you post something to bring the energy back?" },

  // Yellow — five items
  { color: "Yellow", prompt: "Your town's festival has looked the same for years, and people are losing interest. Do you find yourself imagining what it could become instead?" },
  { color: "Yellow", prompt: "Your group's cleanup route has followed the same path for years. Nobody's asked you to change it. Do you propose trying something completely different?" },
  { color: "Yellow", prompt: "Someone shuts down your plan to compost at the office by saying \"that's not how it's done.\" They might have a good reason for that rule. Does it make you want to try it?" },
  { color: "Yellow", prompt: "You're asked to picture your neighborhood twenty years from now. Picturing it mostly the same would be a fair guess too. Do you get excited imagining it very differently instead?" },
  { color: "Yellow", prompt: "A conversation turns to \"what if we redesigned the recycling program from scratch?\" That's a lot to take on for no real reason. Do you light up at the idea?" },

  // Green — five items
  { color: "Green", prompt: "You signed up to water a community garden plot all summer, and it's now week nine of ten, with the season nearly over. Do you show up again this week?" },
  { color: "Green", prompt: "Sorting donations at the food bank turns out to be far less exciting than you expected. You never signed up for a specific length of time. Do you stick with it?" },
  { color: "Green", prompt: "Nobody else has renewed their spot on a monthly cleanup crew, but you're still on the list. Do you keep showing up each month?" },
  { color: "Green", prompt: "A community garden's irrigation project stalls for months waiting on permits and approvals. There's no deadline forcing you to stay on top of it. Do you keep checking in patiently?" },
  { color: "Green", prompt: "Your part of restoring the neighborhood creek is done, but the full restoration is still years away. Do you stay involved for the long haul?" },

  // Blue — five items
  { color: "Blue", prompt: "Your community group's sign-up sheet is a mess of crossed-out names and sticky notes. It's technically still working, just barely. Do you offer to rebuild it as something better?" },
  { color: "Blue", prompt: "A shared supply closet has become chaos nobody wants to deal with, and it's not really anyone's job to fix. Do you take it on and organize it yourself?" },
  { color: "Blue", prompt: "Your team keeps forgetting to log volunteer hours after events. It hasn't caused any real problems yet. Do you build a simple checklist so it stops happening?" },
  { color: "Blue", prompt: "A friend is overwhelmed trying to plan a neighborhood tree-planting day with a lot of moving parts. They haven't actually asked for help. Do you offer to map it out step by step?" },
  { color: "Blue", prompt: "Directions for a group hike are scattered across three group texts, but everyone's managed to figure it out so far. Do you pull them into one clear plan?" },

  // Indigo — five items
  { color: "Indigo", prompt: "An old community center is being renovated, and it's probably just cosmetic changes. Do you speak up for what shouldn't be lost?" },
  { color: "Indigo", prompt: "You find an old photo of how your neighborhood used to look. It's interesting, but not really important to know more. Do you want to track down its story?" },
  { color: "Indigo", prompt: "A group is about to build a playground on the same flood-prone lot your community learned to avoid years ago. It's a small risk, easy to recover from. Do you bring up what happened last time?" },
  { color: "Indigo", prompt: "An elder in your community offers to share how the land has changed over the years. You've got a busy week already. Do you make time to really listen?" },
  { color: "Indigo", prompt: "Your town's annual river cleanup festival is fading because fewer people carry it on. Traditions naturally come and go over time. Do you make an effort to keep it alive?" },

  // Purple — five items
  { color: "Purple", prompt: "At a community meeting, you notice someone sitting alone who hasn't said a word. They haven't signaled they want company. Do you go sit next to them?" },
  { color: "Purple", prompt: "Two friend groups you're part of have never really mixed. They each seem happy enough as they are. Do you try to bring them together?" },
  { color: "Purple", prompt: "Two people you both know get into a heated argument about the group's fundraiser. It's really between the two of them. Do you step in to help them hear each other?" },
  { color: "Purple", prompt: "You notice a coworker seems left out of the team's plans. It might not have been on purpose. Do you loop them in yourself?" },
  { color: "Purple", prompt: "A new person joins your climate group and doesn't know anyone yet. Someone else usually handles that kind of thing. Do you make sure they leave with one new connection?" },

  // Violet — five items
  { color: "Violet", prompt: "A construction crew starts marking trees for removal in a park you love. It could easily just be routine trimming, nothing more. Do you go find out what's happening?" },
  { color: "Violet", prompt: "You learn a nearby wetland is quietly at risk. It might already be on someone's radar. Do you look into how to protect it?" },
  { color: "Violet", prompt: "Someone proposes a shortcut that would disturb a nearby nesting site. The risk is minor and easily fixed later. Do you push back on it?" },
  { color: "Violet", prompt: "Elderly residents in your community are being overlooked in a decision about closing the only nearby bus route. It's not officially your place to weigh in. Do you speak up on their behalf?" },
  { color: "Violet", prompt: "You notice early signs of erosion on a trail you care about. It's early enough that it could just fix itself. Do you act before it gets worse?" }
];