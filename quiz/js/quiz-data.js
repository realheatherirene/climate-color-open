/* ==========================================================================
   Climate Color Quiz — Data Engine (Colors, Questions, and Syntheses)
   ========================================================================== */

export const styles = {
    Red:    { name: "Red",    axis: "Pace",    reflection: "Movement" },
    Green:  { name: "Green",  axis: "Pace",    reflection: "Steadiness" },
    Orange: { name: "Orange", axis: "People",  reflection: "Enthusiasm" },
    Purple: { name: "Purple", axis: "People",  reflection: "Belonging" },
    Blue:   { name: "Blue",   axis: "Place",   reflection: "Clarity" },
    Violet: { name: "Violet", axis: "Place",   reflection: "Safety" },
    Yellow: { name: "Yellow", axis: "Purpose", reflection: "Possibility" },
    Indigo: { name: "Indigo", axis: "Purpose", reflection: "Memory" }
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

export const questions = [
  {
    axis: "Pace",
    prompt: "A project has stalled. Your first move is to…",
    options: [
      { text: "jump in and get something moving.", style: "Red" },
      { text: "push for a quick next step, even a small one.", style: "Red" },
      { text: "pause to see what's actually holding things up.", style: "Green" },
      { text: "check in on pacing before changing anything.", style: "Green" }
    ]
  },
  {
    axis: "Pace",
    prompt: "Given a tight deadline and an unfinished plan, you'd rather…",
    options: [
      { text: "start now and adjust as you go.", style: "Red" },
      { text: "act on the best information available today.", style: "Red" },
      { text: "take the extra time to get it right.", style: "Green" },
      { text: "slow down until the plan feels solid.", style: "Green" }
    ]
  },
  {
    axis: "Pace",
    prompt: "When energy in a group starts to dip, you tend to…",
    options: [
      { text: "push for one concrete next step.", style: "Red" },
      { text: "create urgency to keep things moving.", style: "Red" },
      { text: "hold steady and let the pace settle.", style: "Green" },
      { text: "protect the group's ability to keep going long-term.", style: "Green" }
    ]
  },
  {
    axis: "Pace",
    prompt: "Faced with an unexpected setback, you're more likely to…",
    options: [
      { text: "move quickly to a new plan.", style: "Red" },
      { text: "act fast, even without every answer.", style: "Red" },
      { text: "wait until you understand what happened.", style: "Green" },
      { text: "stay consistent and let the dust settle.", style: "Green" }
    ]
  },

  {
    axis: "People",
    prompt: "A new volunteer seems nervous on their first day. You'd probably…",
    options: [
      { text: "bring energy to help them feel welcome.", style: "Orange" },
      { text: "make the moment feel exciting for them.", style: "Orange" },
      { text: "check in quietly to see how they're doing.", style: "Purple" },
      { text: "listen for what they actually need right now.", style: "Purple" }
    ]
  },
  {
    axis: "People",
    prompt: "A conversation online is getting tense. Your instinct is to…",
    options: [
      { text: "post something that lifts the mood.", style: "Orange" },
      { text: "redirect the energy toward something hopeful.", style: "Orange" },
      { text: "reach out to someone directly, one-on-one.", style: "Purple" },
      { text: "try to understand where the tension is coming from.", style: "Purple" }
    ]
  },
  {
    axis: "People",
    prompt: "A group needs to feel more connected before they'll act. You'd focus on…",
    options: [
      { text: "sparking enthusiasm for what's possible.", style: "Orange" },
      { text: "getting people excited to participate.", style: "Orange" },
      { text: "building trust between people first.", style: "Purple" },
      { text: "making space for people to be heard.", style: "Purple" }
    ]
  },
  {
    axis: "People",
    prompt: "Someone shares an idea that falls flat with the group. You're likely to…",
    options: [
      { text: "amplify the parts that could still work.", style: "Orange" },
      { text: "bring energy back to keep momentum going.", style: "Orange" },
      { text: "check in with that person directly.", style: "Purple" },
      { text: "help the group understand each other's reactions.", style: "Purple" }
    ]
  },

  {
    axis: "Place",
    prompt: "A shared space is cluttered and hard to use. You'd likely…",
    options: [
      { text: "redesign the layout so it works better.", style: "Blue" },
      { text: "organize things so they make more sense.", style: "Blue" },
      { text: "make sure nothing important gets lost in the cleanup.", style: "Violet" },
      { text: "protect the fragile or sentimental items first.", style: "Violet" }
    ]
  },
  {
    axis: "Place",
    prompt: "A trail is being worn down by heavy use. Your first thought is…",
    options: [
      { text: "design a better path to guide people.", style: "Blue" },
      { text: "map out a more sustainable layout.", style: "Blue" },
      { text: "shield the most fragile areas from damage.", style: "Violet" },
      { text: "redirect traffic away from what needs to recover.", style: "Violet" }
    ]
  },
  {
    axis: "Place",
    prompt: "You're asked to help with a disorganized project. You gravitate toward…",
    options: [
      { text: "building a clearer system from scratch.", style: "Blue" },
      { text: "untangling the complexity into something workable.", style: "Blue" },
      { text: "making sure nothing critical gets overlooked.", style: "Violet" },
      { text: "setting boundaries so people don't burn out.", style: "Violet" }
    ]
  },
  {
    axis: "Place",
    prompt: "A natural area near you is at risk of being paved over. You're drawn to…",
    options: [
      { text: "propose a better-designed alternative.", style: "Blue" },
      { text: "organize a plan that serves both needs.", style: "Blue" },
      { text: "defend the space directly.", style: "Violet" },
      { text: "rally people to protect what's there.", style: "Violet" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "Your community's annual event has followed the same format for a decade, and interest is fading. Some people want to try something new; others want to protect what's meaningful about the tradition. When you imagine how to move forward, you find yourself…",
    options: [
      { text: "picturing a completely different version of the event.", style: "Yellow" },
      { text: "getting excited about what it could become.", style: "Yellow" },
      { text: "thinking about which parts have carried real meaning over the years.", style: "Indigo" },
      { text: "wanting to preserve what's made the tradition matter.", style: "Indigo" }
    ]
  },
  {
    axis: "Purpose",
    prompt: "A local group keeps running into the same recurring problem, and people are tired of solving it the same way. When you're asked to help, you tend to…",
    options: [
      { text: "propose a completely different approach.", style: "Yellow" },
      { text: "reimagine the problem from scratch.", style: "Yellow" },
      { text: "look at what's worked in the past and why.", style: "Indigo" },
      { text: "draw on lessons the group has already learned.", style: "Indigo" }
    ]
  },
  {
    axis: "Purpose",
    prompt: "A younger member of your community wants to redesign a shared space that holds a lot of history for long-time residents. As the conversation unfolds, you find yourself…",
    options: [
      { text: "excited by the fresh possibilities they're proposing.", style: "Yellow" },
      { text: "encouraging them to imagine boldly.", style: "Yellow" },
      { text: "asking what should be kept from what came before.", style: "Indigo" },
      { text: "making sure the space's history isn't lost in the redesign.", style: "Indigo" }
    ]
  },
  {
    axis: "Purpose",
    prompt: "Your group is deciding whether to try something experimental or stick with an approach that's worked reliably for years. When the debate comes up, you tend to…",
    options: [
      { text: "advocate for trying the new idea, even without guarantees.", style: "Yellow" },
      { text: "get energized by the unknown potential.", style: "Yellow" },
      { text: "advocate for building on what's already proven.", style: "Indigo" },
      { text: "want to honor the effort already invested in the current approach.", style: "Indigo" }
    ]
  }
];