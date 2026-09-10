/* ==========================================================================
   Climate Color Quiz — Data Engine (Styles, Questions, and Syntheses)
   ========================================================================== */

export const styles = {
    Driver: { name: "Driver", axis: "Pace" },
    Stabilizer: { name: "Stabilizer", axis: "Pace" },
    Advocate: { name: "Advocate", axis: "People" },
    Connector: { name: "Connector", axis: "People" },
    Architect: { name: "Architect", axis: "Place" },
    Guardian: { name: "Guardian", axis: "Place" },
    Visionary: { name: "Visionary", axis: "Purpose" },
    Keeper: { name: "Keeper", axis: "Purpose" }
};

export const fullResults = {
    Driver: { description: "Drivers are the spark plugs of climate action. You thrive on momentum, rapid prototyping, and cutting through red tape to deliver tangible outcomes." },
    Stabilizer: { description: "Stabilizers provide the backbone of endurance. You ensure that systems are resilient, reliable, and capable of weathering long-term systemic pressures." },
    Advocate: { description: "Advocates are the megaphones for equity and accountability. You mobilize public pressure, shift narratives, and demand structural justice." },
    Connector: { description: "Connectors weave the social fabric of the movement. You bridge isolated groups, foster collaboration, and build resilient coalitions." },
    Architect: { description: "Architects design the physical and systemic blueprints of a sustainable world. You turn abstract ideas into functional, scalable structures." },
    Guardian: { description: "Guardians stand watch over the earth. You defend vital ecosystems, protect vulnerable biomes, and safeguard local biodiversity." },
    Visionary: { description: "Visionaries dream the world anew. You inspire collective imagination with bold alternatives, paradigm shifts, and hopeful horizons." },
    Keeper: { description: "Keepers preserve the wisdom of the past. You protect cultural heritage, historical lore, and ecological memory across generations." }
};

export const starterKits = {
    Driver: { core: ["Deploy rapid pilot initiatives", "Cut bureaucratic friction", "Measure tangible outcomes weekly"] },
    Stabilizer: { core: ["Reinforce operational redundancies", "Audit long-term system health", "Build shock-resistant workflows"] },
    Advocate: { core: ["Amplify frontline community voices", "Launch public awareness campaigns", "Hold institutions accountable"] },
    Connector: { core: ["Host cross-sector working groups", "Map community resource networks", "Facilitate collaborative spaces"] },
    Architect: { core: ["Draft modular physical blueprints", "Design low-carbon local infrastructure", "Optimize resource loops"] },
    Guardian: { core: ["Establish localized environmental patrols", "Monitor local habitat health", "Defend ecological buffer zones"] },
    Visionary: { core: ["Prototype alternative cultural futures", "Author speculative policy narratives", "Host creative scenario workshops"] },
    Keeper: { core: ["Document oral histories and local lore", "Preserve traditional ecological knowledge", "Maintain institutional archives"] }
};

export const secondarySyntheses = {
    Driver: {
        Stabilizer: "You balance rapid transformation with foundational resilience.",
        Advocate: "You combine high-velocity execution with loud collective pressure.",
        Connector: "You bridge fast-paced targets with community-wide collaboration.",
        Architect: "You translate ambitious speed into structural, physical blueprints.",
        Guardian: "You match urgent momentum with deep landscape protection.",
        Visionary: "You link rapid deployment directly with long-horizon imagination.",
        Keeper: "You bridge immediate operational drive with generational memory."
    },
    Stabilizer: {
        Driver: "You anchor bold momentum in steady, operational reliability.",
        Advocate: "You back public demands with resilient, long-term frameworks.",
        Connector: "You build enduring networks that withstand systemic shocks.",
        Architect: "You construct structural continuity that safeguards our habitats.",
        Guardian: "You merge rigorous preservation with long-lasting system safety.",
        Visionary: "You anchor creative futures in durable, practical realities.",
        Keeper: "You preserve continuity and traditions to keep systems healthy."
    },
    Advocate: {
        Driver: "You channel public pressure into fast, high-impact breakthroughs.",
        Stabilizer: "You ground public voice in dependable, sustained pressure.",
        Connector: "You organize broad coalitions to amplify community reach.",
        Architect: "You push public narratives that demand systemic structural changes.",
        Guardian: "You defend vulnerable landscapes using public voice and visibility.",
        Visionary: "You rally communities around bold, reimagined futures.",
        Keeper: "You honor historical struggles while demanding forward equity."
    },
    Connector: {
        Driver: "You weave networks that quickly mobilize around climate solutions.",
        Stabilizer: "You create relational glue that keeps safety networks robust.",
        Advocate: "You tie interpersonal bonds directly to public movement building.",
        Architect: "You foster collaborative spaces for co-designing physical infrastructure.",
        Guardian: "You link local stewards together to protect shared ecosystems.",
        Visionary: "You connect diverse thinkers to dream up transformative systems.",
        Keeper: "You weave communities together through shared lore and wisdom."
    },
    Architect: {
        Driver: "You design efficient, high-speed structural systems for a low-carbon world.",
        Stabilizer: "You engineer resilient structures built to withstand climate shifts.",
        Advocate: "You construct physical frameworks that serve public equity.",
        Connector: "You build collaborative architecture shaped by community needs.",
        Guardian: "You design systems that honor and integrate natural geography.",
        Visionary: "You prototype physical manifestations of bold climate futures.",
        Keeper: "You design enduring spaces that preserve heritage and function."
    },
    Guardian: {
        Driver: "You protect critical environmental nodes to prevent rapid degradation.",
        Stabilizer: "You secure defensive boundaries that stabilize vulnerable biomes.",
        Advocate: "You stand watch over threatened places and voice their defense.",
        Connector: "You unite local guardians into a defensive regional shield.",
        Architect: "You guard natural layouts by designing harmonious human boundaries.",
        Visionary: "You protect the ecological bedrock necessary for future imagination.",
        Keeper: "You safeguard sacred ecological and cultural histories from loss."
    },
    Visionary: {
        Driver: "You fuel rapid action with imaginative, paradigm-shifting futures.",
        Stabilizer: "You ground radical imagination in reliable, workable paths.",
        Advocate: "You paint vivid pictures of what a just climate future looks like.",
        Connector: "You inspire collective networks with a shared, hopeful vision.",
        Architect: "You dream up structural paradigms that reshape our physical reality.",
        Guardian: "You envision landscapes restored to wild, thriving health.",
        Keeper: "You draw on ancient wisdom to dream forward into tomorrow."
    },
    Keeper: {
        Driver: "You anchor rapid innovation in deep historical knowledge.",
        Stabilizer: "You maintain institutional memory to protect ongoing stability.",
        Advocate: "You ensure justice campaigns remember past lessons and lineage.",
        Connector: "You pass down ecological traditions through strong social fabric.",
        Architect: "You maintain spaces designed for enduring cultural transmission.",
        Guardian: "You keep vigil over old-growth wisdom and historical biomes.",
        Visionary: "You bridge deep history with visionary possibilities."
    }
};

export const questions = [
  {
    axis: "Pace",
    prompt: "Cleanup day keeps getting delayed. You would…",
    options: [
      { text: "initiate a small part of the plan so others see momentum.", style: "Driver" },
      { text: "signal that you're beginning now and invite others to join in any way they can.", style: "Driver" },
      { text: "pause the group and identify what's causing the repeated stall.", style: "Stabilizer" },
      { text: "organize a quick check-in to clarify availability and needs.", style: "Stabilizer" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A storm knocks out power and people panic about next steps. You would…",
    options: [
      { text: "compile a rapid list of immediate needs based on neighbor reports.", style: "Driver" },
      { text: "reach out to households to understand who needs support right away.", style: "Driver" },
      { text: "slow the conversation and confirm everyone's safety before decisions are made.", style: "Stabilizer" },
      { text: "establish a shared communication point so people know where to check in.", style: "Stabilizer" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A neighborhood project has been stuck in planning mode for months. You would…",
    options: [
      { text: "draft a rough first version so people have something concrete to react to.", style: "Driver" },
      { text: "schedule a clear first step and encourage the group to begin.", style: "Driver" },
      { text: "identify what's blocking progress before moving forward.", style: "Stabilizer" },
      { text: "create a simple checklist to help the group stop spinning.", style: "Stabilizer" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A community meeting is dragging on and going in circles. You would…",
    options: [
      { text: "name a doable action the group can complete today.", style: "Driver" },
      { text: "offer a quick plan to shift the room from debating to doing.", style: "Driver" },
      { text: "ask the group to clarify the actual goal before deciding anything.", style: "Stabilizer" },
      { text: "slow the conversation to ensure nothing important is being overlooked.", style: "Stabilizer" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A neighbor's basement is flooding and people are texting ideas but not acting. You would…",
    options: [
      { text: "coordinate the first steps so the group moves.", style: "Driver" },
      { text: "announce you're initiating support now and invite others to join in any way they can.", style: "Driver" },
      { text: "request clear details so the group doesn't make the situation worse.", style: "Stabilizer" },
      { text: "review what resources or information the group has before moving.", style: "Stabilizer" }
    ]
  },

  {
    axis: "Pace",
    prompt: "A local event is falling apart because volunteers keep canceling. You would…",
    options: [
      { text: "take on a couple responsibilities yourself to stabilize the plan.", style: "Driver" },
      { text: "simplify the event so the group can execute quickly.", style: "Driver" },
      { text: "investigate why volunteers keep dropping off.", style: "Stabilizer" },
      { text: "rebuild the schedule so it's realistic and sustainable.", style: "Stabilizer" }
    ]
  },

  {
    axis: "People",
    prompt: "A building rule favors a few people and leaves others out. You would…",
    options: [
      { text: "raise the issue publicly so everyone sees the unfairness.", style: "Advocate" },
      { text: "post a clear message expressing concern about the rule.", style: "Advocate" },
      { text: "check in with neighbors privately to hear their reactions.", style: "Connector" },
      { text: "talk with the decision-makers directly to understand their reasoning.", style: "Connector" }
    ]
  },

  {
    axis: "People",
    prompt: "You join a new volunteer group and the vibe is polite but awkward. You would…",
    options: [
      { text: "ask the group directly what problem they're actually trying to solve.", style: "Advocate" },
      { text: "push people to name the real issue out loud.", style: "Advocate" },
      { text: "start casual one-on-one conversations to break the ice.", style: "Connector" },
      { text: "invite quieter folks into the conversation gently.", style: "Connector" }
    ]
  },

  {
    axis: "People",
    prompt: "A neighbor is treated unfairly at a meeting while others stay quiet. You would…",
    options: [
      { text: "interrupt and call out the behavior immediately.", style: "Advocate" },
      { text: "state clearly that the treatment is not acceptable.", style: "Advocate" },
      { text: "check in with the neighbor afterward to support them.", style: "Connector" },
      { text: "gather a few people to talk through what happened.", style: "Connector" }
    ]
  },

  {
    axis: "People",
    prompt: "A local issue is heating up online and people are arguing. You would…",
    options: [
      { text: "post a clear message about what needs to change.", style: "Advocate" },
      { text: "redirect the conversation publicly toward fairness.", style: "Advocate" },
      { text: "message individuals privately to calm things down.", style: "Connector" },
      { text: "encourage people to shift the conversation to a more constructive format.", style: "Connector" }
    ]
  },

  {
    axis: "People",
    prompt: "A new family moves in and seems overwhelmed. You would…",
    options: [
      { text: "ask the neighborhood group to organize support.", style: "Advocate" },
      { text: "speak up to ensure the family gets what they need.", style: "Advocate" },
      { text: "reach out with a warm welcome and see how they're settling in.", style: "Connector" },
      { text: "introduce them to neighbors so they feel connected.", style: "Connector" }
    ]
  },

  {
    axis: "People",
    prompt: "A community survey comes out and the questions feel biased. You would…",
    options: [
      { text: "call out the bias directly and ask for changes.", style: "Advocate" },
      { text: "request that organizers fix the survey before collecting responses.", style: "Advocate" },
      { text: "talk privately with organizers to understand their thinking.", style: "Connector" },
      { text: "gather neighbors to discuss how to improve the survey.", style: "Connector" }
    ]
  },

  {
    axis: "Place",
    prompt: "A community garden is half thriving, half struggling. You would…",
    options: [
      { text: "sketch ideas for a layout that improves flow and function.", style: "Architect" },
      { text: "capture photos and map out a clearer layout.", style: "Architect" },
      { text: "identify the healthiest areas that need protection.", style: "Guardian" },
      { text: "flag fragile spots so they stay safe while planning continues.", style: "Guardian" }
    ]
  },

  {
    axis: "Place",
    prompt: "Heavy rain washes out part of a neighborhood trail. You would…",
    options: [
      { text: "plan drainage and signage improvements for a long-lasting fix.", style: "Architect" },
      { text: "map a sturdier solution by reviewing the affected area.", style: "Architect" },
      { text: "redirect people away from the damaged section to support recovery.", style: "Guardian" },
      { text: "assess what parts of the landscape need immediate protection.", style: "Guardian" }
    ]
  },

  {
    axis: "Place",
    prompt: "A park has a broken bench and a fragile patch of wildflowers. You would…",
    options: [
      { text: "reimagine a better seating layout.", style: "Architect" },
      { text: "design a stronger bench concept that won't fail again.", style: "Architect" },
      { text: "highlight the fragile wildflowers so people avoid disturbing them.", style: "Guardian" },
      { text: "mark the delicate patch so it has space to recover.", style: "Guardian" }
    ]
  },

  {
    axis: "Place",
    prompt: "A community center is cluttered and chaotic. You would…",
    options: [
      { text: "rearrange the space mentally to make it functional.", style: "Architect" },
      { text: "identify which shifts would make the room breathe.", style: "Architect" },
      { text: "locate sentimental or important items that need protection.", style: "Guardian" },
      { text: "ensure nothing meaningful gets tossed during cleanup.", style: "Guardian" }
    ]
  },

  {
    axis: "Place",
    prompt: "A neighbor wants to redo their yard but feels unsure. You would…",
    options: [
      { text: "sketch a quick layout to show possibilities.", style: "Architect" },
      { text: "review the space with them and highlight improvements.", style: "Architect" },
      { text: "ask which plants or spots they love so they stay intact.", style: "Guardian" },
      { text: "preserve the parts of the yard that already feel special.", style: "Guardian" }
    ]
  },

  {
    axis: "Place",
    prompt: "A small wooded area is getting worn down by foot traffic. You would…",
    options: [
      { text: "plan a simple path or sign to guide people.", style: "Architect" },
      { text: "outline a layout that protects trees while guiding visitors.", style: "Architect" },
      { text: "identify fragile spots and shield them from damage.", style: "Guardian" },
      { text: "encourage people to use sturdier areas to give the woods a break.", style: "Guardian" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A holiday event repeats every year and ends in the same argument. You would…",
    options: [
      { text: "generate a new idea that reflects the community's current needs today.", style: "Visionary" },
      { text: "propose a completely different theme and setup.", style: "Visionary" },
      { text: "review what actually worked before reinventing anything.", style: "Keeper" },
      { text: "retrieve old notes to see how past issues were solved.", style: "Keeper" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A recurring neighborhood issue keeps popping up. You would…",
    options: [
      { text: "draft a bold alternative that breaks the usual routine.", style: "Visionary" },
      { text: "rethink the issue from a fresh angle.", style: "Visionary" },
      { text: "look at what used to work before things changed.", style: "Keeper" },
      { text: "recall simple fixes the community may have forgotten.", style: "Keeper" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A local group wants a new tradition but can't agree. You would…",
    options: [
      { text: "generate a new idea that fits who the community is now.", style: "Visionary" },
      { text: "suggest a creative option no one has tried before.", style: "Visionary" },
      { text: "suggest reviving an older tradition that once brought people together.", style: "Keeper" },
      { text: "ask longtime neighbors what they remember.", style: "Keeper" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A recurring problem keeps showing up at meetings and people are tired. You would…",
    options: [
      { text: "rethink the entire issue from a new angle.", style: "Visionary" },
      { text: "propose a trial replacement instead of fixing the same problem again.", style: "Visionary" },
      { text: "review when this wasn't a problem and identify what changed.", style: "Keeper" },
      { text: "reuse an old solution that still works.", style: "Keeper" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A youth group wants to redesign a community space. You would…",
    options: [
      { text: "sketch a fresh concept starting from a blank slate.", style: "Visionary" },
      { text: "draft a bold concept that stretches what the space could be.", style: "Visionary" },
      { text: "identify meaningful parts worth keeping.", style: "Keeper" },
      { text: "ask longtime neighbors what they love about the space.", style: "Keeper" }
    ]
  },

  {
    axis: "Purpose",
    prompt: "A committee is split between new ideas and the old way of doing things. You would…",
    options: [
      { text: "propose a bold trial version to see what the group learns.", style: "Visionary" },
      { text: "try the new idea and treat it as an experiment.", style: "Visionary" },
      { text: "keep what has worked instead of tossing good habits.", style: "Keeper" },
      { text: "build on the old approach rather than ditching it.", style: "Keeper" }
    ]
  }
];
