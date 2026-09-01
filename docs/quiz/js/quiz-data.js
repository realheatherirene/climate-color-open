/* ==========================================================================
   Climate Color Quiz — Question + Axis Data
   ========================================================================== */

export const axes = {
  Pace: ["Driver", "Stabilizer"],
  People: ["Advocate", "Connector"],
  Place: ["Architect", "Guardian"],
  Purpose: ["Visionary", "Keeper"]
};

/* --------------------------------------------------------------------------
   16 Core Questions
   -------------------------------------------------------------------------- */

export const questions = [
  /* -------------------- Pace (Driver / Stabilizer) -------------------- */
  {
    id: 1,
    axis: "Pace",
    prompt: "When a group is unsure how to begin, you’re more likely to…",
    options: [
      { text: "Offer a simple starting point", style: "Driver" },
      { text: "Create a calm rhythm so people can settle", style: "Stabilizer" }
    ]
  },
  {
    id: 2,
    axis: "Pace",
    prompt: "When momentum dips, you naturally…",
    options: [
      { text: "Suggest a next step to help things move", style: "Driver" },
      { text: "Take on a steady task to keep progress going", style: "Stabilizer" }
    ]
  },
  {
    id: 3,
    axis: "Pace",
    prompt: "When a discussion feels scattered, you often…",
    options: [
      { text: "Bring direction that helps everyone re-focus", style: "Driver" },
      { text: "Re-establish a gentle baseline so clarity can emerge", style: "Stabilizer" }
    ]
  },
  {
    id: 4,
    axis: "Pace",
    prompt: "When a project hits a lull, you usually…",
    options: [
      { text: "Spark motion to re-energize the group", style: "Driver" },
      { text: "Maintain steadiness until momentum returns", style: "Stabilizer" }
    ]
  },

  /* -------------------- People (Advocate / Connector) -------------------- */
  {
    id: 5,
    axis: "People",
    prompt: "When you discover a meaningful opportunity, you often…",
    options: [
      { text: "Share it widely to inspire participation", style: "Advocate" },
      { text: "Send it directly to someone who would appreciate it", style: "Connector" }
    ]
  },
  {
    id: 6,
    axis: "People",
    prompt: "When someone new joins a space, you naturally…",
    options: [
      { text: "Welcome them openly to lift the room’s energy", style: "Advocate" },
      { text: "Check in privately to help them feel comfortable", style: "Connector" }
    ]
  },
  {
    id: 7,
    axis: "People",
    prompt: "When someone hesitates to join in, you’re inclined to…",
    options: [
      { text: "Name the value they bring to encourage them", style: "Advocate" },
      { text: "Offer quiet support so stepping in feels safe", style: "Connector" }
    ]
  },
  {
    id: 8,
    axis: "People",
    prompt: "When a milestone is shared, you usually…",
    options: [
      { text: "Celebrate publicly to build shared joy", style: "Advocate" },
      { text: "Offer a personal message of care", style: "Connector" }
    ]
  },

  /* -------------------- Place (Architect / Guardian) -------------------- */
  {
    id: 9,
    axis: "Place",
    prompt: "When a shared space becomes messy or chaotic, you often…",
    options: [
      { text: "Organize things into clearer structure", style: "Architect" },
      { text: "Check in to ensure people feel supported", style: "Guardian" }
    ]
  },
  {
    id: 10,
    axis: "Place",
    prompt: "When a conversation gets tangled, you naturally…",
    options: [
      { text: "Outline the core points to help everyone regroup", style: "Architect" },
      { text: "Offer grounding care to restore safety", style: "Guardian" }
    ]
  },
  {
    id: 11,
    axis: "Place",
    prompt: "When information feels scattered, you’re inclined to…",
    options: [
      { text: "Create a simple summary or map", style: "Architect" },
      { text: "Help people navigate the confusion gently", style: "Guardian" }
    ]
  },
  {
    id: 12,
    axis: "Place",
    prompt: "When a small conflict arises, you usually…",
    options: [
      { text: "Analyze the issue and propose a fix", style: "Architect" },
      { text: "Protect the tone and wellbeing of the space", style: "Guardian" }
    ]
  },

  /* -------------------- Purpose (Visionary / Keeper) -------------------- */
  {
    id: 13,
    axis: "Purpose",
    prompt: "When someone shares a new idea, you often…",
    options: [
      { text: "Explore the possibilities it opens", style: "Visionary" },
      { text: "Consider how it aligns with core values", style: "Keeper" }
    ]
  },
  {
    id: 14,
    axis: "Purpose",
    prompt: "When a group loses focus, you naturally…",
    options: [
      { text: "Offer a fresh angle to re-inspire", style: "Visionary" },
      { text: "Remind people of the purpose that brought them together", style: "Keeper" }
    ]
  },
  {
    id: 15,
    axis: "Purpose",
    prompt: "When discussing future plans, you’re more likely to…",
    options: [
      { text: "Imagine bold horizons and new directions", style: "Visionary" },
      { text: "Protect the essential meaning of the work", style: "Keeper" }
    ]
  },
  {
    id: 16,
    axis: "Purpose",
    prompt: "When evaluating a change, you usually…",
    options: [
      { text: "Look at the opportunities it could unlock", style: "Visionary" },
      { text: "Look at whether it honors shared commitments", style: "Keeper" }
    ]
  }
];

/* --------------------------------------------------------------------------
   Tie-Breaker Questions
   -------------------------------------------------------------------------- */

export const tieBreakers = {
  Pace: {
    prompt: "When a group is waiting to begin, what feels most natural?",
    options: [
      { text: "Offer a simple step to get things moving", style: "Driver" },
      { text: "Let the group settle and find its rhythm first", style: "Stabilizer" }
    ]
  },
  People: {
    prompt: "When someone seems unsure about joining in, what’s your first instinct?",
    options: [
      { text: "Lift their energy by naming what they bring", style: "Advocate" },
      { text: "Check in quietly to help them feel comfortable", style: "Connector" }
    ]
  },
  Place: {
    prompt: "When a shared space feels off, what do you notice first?",
    options: [
      { text: "The structure or information that needs clarity", style: "Architect" },
      { text: "The tone or safety that needs protection", style: "Guardian" }
    ]
  },
  Purpose: {
    prompt: "When a group is deciding how to move forward, what guides you most?",
    options: [
      { text: "The new possibilities the change could open", style: "Visionary" },
      { text: "The values or commitments that should be honored", style: "Keeper" }
    ]
  }
};
