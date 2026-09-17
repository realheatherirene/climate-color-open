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
    Indigo: { name: "Indigo", axis: "Purpose", reflection: "Honor" }
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

export const secondarySyntheses = {
    Red: {
        Green:  "You balance rapid transformation with foundational resilience.",
        Orange: "You channel enthusiasm into fast, high-impact momentum.",
        Purple: "You bridge fast-paced targets with community-wide collaboration.",
        Blue:   "You translate ambitious speed into structural, physical blueprints.",
        Violet: "You match urgent momentum with deep landscape protection.",
        Yellow: "You link rapid deployment directly with long-horizon imagination.",
        Indigo: "You bridge immediate operational drive with generational memory."
    },
    Green: {
        Red:    "You anchor bold momentum in steady, operational reliability.",
        Orange: "You back enthusiastic momentum with resilient, long-term frameworks.",
        Purple: "You build enduring networks that withstand systemic shocks.",
        Blue:   "You construct structural continuity that safeguards our habitats.",
        Violet: "You merge rigorous preservation with long-lasting system safety.",
        Yellow: "You anchor creative futures in durable, practical realities.",
        Indigo: "You preserve continuity and traditions to keep systems healthy."
    },
    Orange: {
        Red:    "You channel enthusiasm into fast, high-impact momentum.",
        Green:  "You ground steady enthusiasm in dependable, lasting support.",
        Purple: "You bring warm energy to broad coalitions, amplifying community reach.",
        Blue:   "You bring enthusiasm to structural narratives, helping bold ideas take shape.",
        Violet: "You bring warmth and visibility to the landscapes that need protecting.",
        Yellow: "You rally communities around bold, reimagined futures.",
        Indigo: "You bring warmth to historical memory, energizing the path forward."
    },
    Purple: {
        Red:    "You weave networks that quickly mobilize around climate solutions.",
        Green:  "You create relational glue that keeps safety networks robust.",
        Orange: "You tie interpersonal bonds directly to warm, energizing engagement.",
        Blue:   "You foster collaborative spaces for co-designing physical infrastructure.",
        Violet: "You link local stewards together to protect shared ecosystems.",
        Yellow: "You connect diverse thinkers to dream up transformative systems.",
        Indigo: "You weave communities together through shared lore and wisdom."
    },
    Blue: {
        Red:    "You design efficient, high-speed structural systems for a low-carbon world.",
        Green:  "You engineer resilient structures built to withstand climate shifts.",
        Orange: "You construct physical frameworks that channel enthusiasm into structure.",
        Purple: "You build collaborative architecture shaped by community needs.",
        Violet: "You design systems that honor and integrate natural geography.",
        Yellow: "You prototype physical manifestations of bold climate futures.",
        Indigo: "You design enduring spaces that preserve heritage and function."
    },
    Violet: {
        Red:    "You protect critical environmental nodes to prevent rapid degradation.",
        Green:  "You secure defensive boundaries that stabilize vulnerable biomes.",
        Orange: "You stand watch over threatened places, bringing warmth to their defense.",
        Purple: "You unite local guardians into a defensive regional shield.",
        Blue:   "You guard natural layouts by designing harmonious human boundaries.",
        Yellow: "You protect the ecological bedrock necessary for future imagination.",
        Indigo: "You safeguard sacred ecological and cultural histories from loss."
    },
    Yellow: {
        Red:    "You fuel rapid action with imaginative, paradigm-shifting futures.",
        Green:  "You ground radical imagination in reliable, workable paths.",
        Orange: "You paint vivid, hopeful pictures that spark shared enthusiasm.",
        Purple: "You inspire collective networks with a shared, hopeful vision.",
        Blue:   "You dream up structural paradigms that reshape our physical reality.",
        Violet: "You envision landscapes restored to wild, thriving health.",
        Indigo: "You draw on ancient wisdom to dream forward into tomorrow."
    },
    Indigo: {
        Red:    "You anchor rapid innovation in deep historical knowledge.",
        Green:  "You maintain institutional memory to protect ongoing stability.",
        Orange: "You ensure enthusiasm stays rooted in memory and lineage.",
        Purple: "You pass down ecological traditions through strong social fabric.",
        Blue:   "You maintain spaces designed for enduring cultural transmission.",
        Violet: "You keep vigil over old-growth wisdom and historical biomes.",
        Yellow: "You bridge deep history with visionary possibilities."
    }
};

export const questions = [
  {
    axis: "Pace",
    prompt: "Cleanup day keeps getting delayed. You would…",
    options: [
      { text: "initiate a small part of the plan so others see momentum.", style: "Red" },
      { text: "signal that you're beginning now and invite others to join in any way they can.", style: "Red" },
      { text: "pause the group and identify what's causing the repeated stall.", style: "Green" },
      { text: "organize a quick check-in to clarify availability and needs.", style: "Green" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A storm knocks out power and people panic about next steps. You would…",
    options: [
      { text: "compile a rapid list of immediate needs based on neighbor reports.", style: "Red" },
      { text: "reach out to households to understand who needs support right away.", style: "Red" },
      { text: "slow the conversation and confirm everyone's safety before decisions are made.", style: "Green" },
      { text: "establish a shared communication point so people know where to check in.", style: "Green" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A neighborhood project has been stuck in planning mode for months. You would…",
    options: [
      { text: "draft a rough first version so people have something concrete to react to.", style: "Red" },
      { text: "schedule a clear first step and encourage the group to begin.", style: "Red" },
      { text: "identify what's blocking progress before moving forward.", style: "Green" },
      { text: "create a simple checklist to help the group stop spinning.", style: "Green" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A community meeting is dragging on and going in circles. You would…",
    options: [
      { text: "name a doable action the group can complete today.", style: "Red" },
      { text: "offer a quick plan to shift the room from debating to doing.", style: "Red" },
      { text: "ask the group to clarify the actual goal before deciding anything.", style: "Green" },
      { text: "slow the conversation to ensure nothing important is being overlooked.", style: "Green" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A neighbor's basement is flooding and people are texting ideas but not acting. You would…",
    options: [
      { text: "coordinate the first steps so the group moves.", style: "Red" },
      { text: "announce you're initiating support now and invite others to join in any way they can.", style: "Red" },
      { text: "request clear details so the group doesn't make the situation worse.", style: "Green" },
      { text: "review what resources or information the group has before moving.", style: "Green" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A local event is falling apart because volunteers keep canceling. You would…",
    options: [
      { text: "take on a couple responsibilities yourself to stabilize the plan.", style: "Red" },
      { text: "simplify the event so the group can execute quickly.", style: "Red" },
      { text: "investigate why volunteers keep dropping off.", style: "Green" },
      { text: "rebuild the schedule so it's realistic and sustainable.", style: "Green" }
    ]
  },

  {
    axis: "People",
    prompt: "A building rule favors a few people and leaves others out. You would…",
    options: [
      { text: "raise the issue publicly so everyone sees the unfairness.", style: "Orange" },
      { text: "post a clear message expressing concern about the rule.", style: "Orange" },
      { text: "check in with neighbors privately to hear their reactions.", style: "Purple" },
      { text: "talk with the decision-makers directly to understand their reasoning.", style: "Purple" }
    ]
  },

  {
    axis: "People",
    prompt: "You join a new volunteer group and the vibe is polite but awkward. You would…",
    options: [
      { text: "bring energy to the room to help people feel more at ease.", style: "Orange" },
      { text: "encourage folks to share what excites them about the work.", style: "Orange" },
      { text: "start casual one-on-one conversations to break the ice.", style: "Purple" },
      { text: "invite quieter folks into the conversation gently.", style: "Purple" }
    ]
  },

  {
    axis: "People",
    prompt: "A neighbor is treated unfairly at a meeting while others stay quiet. You would…",
    options: [
      { text: "speak up right away to shift the room's energy back toward support.", style: "Orange" },
      { text: "rally others to voice encouragement for the neighbor.", style: "Orange" },
      { text: "check in with the neighbor afterward to support them.", style: "Purple" },
      { text: "gather a few people to talk through what happened.", style: "Purple" }
    ]
  },

  {
    axis: "People",
    prompt: "A local issue is heating up online and people are arguing. You would…",
    options: [
      { text: "post something upbeat to help redirect the group's energy.", style: "Orange" },
      { text: "encourage people to focus on what excites them about a solution.", style: "Orange" },
      { text: "message individuals privately to calm things down.", style: "Purple" },
      { text: "encourage people to shift the conversation to a more constructive format.", style: "Purple" }
    ]
  },

  {
    axis: "People",
    prompt: "A new family moves in and seems overwhelmed. You would…",
    options: [
      { text: "rally the neighborhood group to organize a warm welcome.", style: "Orange" },
      { text: "bring enthusiasm to gathering support for the family.", style: "Orange" },
      { text: "reach out with a warm welcome and see how they're settling in.", style: "Purple" },
      { text: "introduce them to neighbors so they feel connected.", style: "Purple" }
    ]
  },

  {
    axis: "People",
    prompt: "A community survey comes out and the questions feel biased. You would…",
    options: [
      { text: "energize a small group to push for a better version.", style: "Orange" },
      { text: "encourage organizers with ideas for how to improve it.", style: "Orange" },
      { text: "talk privately with organizers to understand their thinking.", style: "Purple" },
      { text: "gather neighbors to discuss how to improve the survey.", style: "Purple" }
    ]
  },

  {
    axis: "Place",
    prompt: "A community garden is half thriving, half struggling. You would…",
    options: [
      { text: "sketch ideas for a layout that improves flow and function.", style: "Blue" },
      { text: "capture photos and map out a clearer layout.", style: "Blue" },
      { text: "identify the healthiest areas that need protection.", style: "Violet" },
      { text: "flag fragile spots so they stay safe while planning continues.", style: "Violet" }
    ]
  },

  {
    axis: "Place",
    prompt: "Heavy rain washes out part of a neighborhood trail. You would…",
    options: [
      { text: "plan drainage and signage improvements for a long-lasting fix.", style: "Blue" },
      { text: "map a sturdier solution by reviewing the affected area.", style: "Blue" },
      { text: "redirect people away from the damaged section to support recovery.", style: "Violet" },
      { text: "assess what parts of the landscape need immediate protection.", style: "Violet" }
    ]
  },

  {
    axis: "Place",
    prompt: "A park has a broken bench and a fragile patch of wildflowers. You would…",
    options: [
      { text: "reimagine a better seating layout.", style: "Blue" },
      { text: "design a stronger bench concept that won't fail again.", style: "Blue" },
      { text: "highlight the fragile wildflowers so people avoid disturbing them.", style: "Violet" },
      { text: "mark the delicate patch so it has space to recover.", style: "Violet" }
    ]
  },

  {
    axis: "Place",
    prompt: "A community center is cluttered and chaotic. You would…",
    options: [
      { text: "rearrange the space mentally to make it functional.", style: "Blue" },
      { text: "identify which shifts would make the room breathe.", style: "Blue" },
      { text: "locate sentimental or important items that need protection.", style: "Violet" },
      { text: "ensure nothing meaningful gets tossed during cleanup.", style: "Violet" }
    ]
  },

  {
    axis: "Place",
    prompt: "A neighbor wants to redo their yard but feels unsure. You would…",
    options: [
      { text: "sketch a quick layout to show possibilities.", style: "Blue" },
      { text: "review the space with them and highlight improvements.", style: "Blue" },
      { text: "ask which plants or spots they love so they stay intact.", style: "Violet" },
      { text: "preserve the parts of the yard that already feel special.", style: "Violet" }
    ]
  },

  {
    axis: "Place",
    prompt: "A small wooded area is getting worn down by foot traffic. You would…",
    options: [
      { text: "plan a simple path or sign to guide people.", style: "Blue" },
      { text: "outline a layout that protects trees while guiding visitors.", style: "Blue" },
      { text: "identify fragile spots and shield them from damage.", style: "Violet" },
      { text: "encourage people to use sturdier areas to give the woods a break.", style: "Violet" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A holiday event repeats every year and ends in the same argument. You would…",
    options: [
      { text: "generate a new idea that reflects the community's current needs today.", style: "Yellow" },
      { text: "propose a completely different theme and setup.", style: "Yellow" },
      { text: "review what actually worked before reinventing anything.", style: "Indigo" },
      { text: "retrieve old notes to see how past issues were solved.", style: "Indigo" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A recurring neighborhood issue keeps popping up. You would…",
    options: [
      { text: "draft a bold alternative that breaks the usual routine.", style: "Yellow" },
      { text: "rethink the issue from a fresh angle.", style: "Yellow" },
      { text: "look at what used to work before things changed.", style: "Indigo" },
      { text: "recall simple fixes the community may have forgotten.", style: "Indigo" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A local group wants a new tradition but can't agree. You would…",
    options: [
      { text: "generate a new idea that fits who the community is now.", style: "Yellow" },
      { text: "suggest a creative option no one has tried before.", style: "Yellow" },
      { text: "suggest reviving an older tradition that once brought people together.", style: "Indigo" },
      { text: "ask longtime neighbors what they remember.", style: "Indigo" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A recurring problem keeps showing up at meetings and people are tired. You would…",
    options: [
      { text: "rethink the entire issue from a new angle.", style: "Yellow" },
      { text: "propose a trial replacement instead of fixing the same problem again.", style: "Yellow" },
      { text: "review when this wasn't a problem and identify what changed.", style: "Indigo" },
      { text: "reuse an old solution that still works.", style: "Indigo" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A youth group wants to redesign a community space. You would…",
    options: [
      { text: "sketch a fresh concept starting from a blank slate.", style: "Yellow" },
      { text: "draft a bold concept that stretches what the space could be.", style: "Yellow" },
      { text: "identify meaningful parts worth keeping.", style: "Indigo" },
      { text: "ask longtime neighbors what they love about the space.", style: "Indigo" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A committee is split between new ideas and the old way of doing things. You would…",
    options: [
      { text: "propose a bold trial version to see what the group learns.", style: "Yellow" },
      { text: "try the new idea and treat it as an experiment.", style: "Yellow" },
      { text: "keep what has worked instead of tossing good habits.", style: "Indigo" },
      { text: "build on the old approach rather than ditching it.", style: "Indigo" }
    ]
  }
];
