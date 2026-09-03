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

/* ==========================================================================
   Style Metadata (Primary + Secondary Descriptions)
   ========================================================================== */

export const styles = {
  Driver: {
    identity: "You bring activation, momentum, and clarity to group processes.",
    anchor: "Pace",
    energy: "Forward",
    contribution: "You help groups begin, move, and regain direction.",
    shine: "Moments that need initiative, activation, or decisive motion.",
    watchouts: "Moving too quickly for others or skipping emotional context."
  },
  Stabilizer: {
    identity: "You bring steadiness, grounding, and rhythm to shared work.",
    anchor: "Pace",
    energy: "Steady",
    contribution: "You help groups settle, regulate, and maintain momentum.",
    shine: "Moments that need calm, consistency, or patient follow‑through.",
    watchouts: "Holding back motion when activation is needed."
  },
  Advocate: {
    identity: "You lift energy, amplify voices, and spark participation.",
    anchor: "People",
    energy: "Expressive",
    contribution: "You help people feel seen, energized, and invited in.",
    shine: "Moments that need enthusiasm, encouragement, or shared joy.",
    watchouts: "Over‑energizing spaces that need quiet or care."
  },
  Connector: {
    identity: "You attune, support, and help people feel safe joining in.",
    anchor: "People",
    energy: "Relational",
    contribution: "You help people feel comfortable, welcomed, and understood.",
    shine: "Moments that need gentleness, trust‑building, or emotional safety.",
    watchouts: "Staying quiet when a group needs visible energy."
  },
  Architect: {
    identity: "You organize, clarify, and make sense of complexity.",
    anchor: "Place",
    energy: "Structural",
    contribution: "You help groups understand information and navigate chaos.",
    shine: "Moments that need mapping, structuring, or analysis.",
    watchouts: "Over‑structuring when people need emotional grounding."
  },
  Guardian: {
    identity: "You protect tone, wellbeing, and the emotional integrity of spaces.",
    anchor: "Place",
    energy: "Protective",
    contribution: "You help groups feel safe, supported, and cared for.",
    shine: "Moments that need grounding, care, or conflict de‑escalation.",
    watchouts: "Protecting too quickly when clarity or structure is needed."
  },
  Visionary: {
    identity: "You imagine possibilities, expand horizons, and inspire direction.",
    anchor: "Purpose",
    energy: "Expansive",
    contribution: "You help groups see potential and explore new futures.",
    shine: "Moments that need creativity, re‑framing, or bold ideas.",
    watchouts: "Leaping ahead when values or commitments need honoring."
  },
  Keeper: {
    identity: "You honor meaning, values, and continuity.",
    anchor: "Purpose",
    energy: "Grounded",
    contribution: "You help groups stay aligned with what matters most.",
    shine: "Moments that need reflection, alignment, or purpose‑checking.",
    watchouts: "Holding too tightly to tradition when change is needed."
  }
};

/* ==========================================================================
   Secondary Synthesis (How Primary + Secondary Combine)
   ========================================================================== */

export const secondarySyntheses = {
  Driver: {
    Stabilizer: "You balance activation with steadiness, helping groups move without rushing.",
    Advocate: "You energize groups with both motion and enthusiasm.",
    Connector: "You activate groups while staying attuned to emotional dynamics.",
    Architect: "You bring decisive motion to structured problem‑solving.",
    Guardian: "You move groups forward while protecting tone and wellbeing.",
    Visionary: "You combine bold ideas with decisive action.",
    Keeper: "You move groups forward while honoring core values."
  },
  Stabilizer: {
    Driver: "You steady momentum while supporting activation when needed.",
    Advocate: "You bring calm encouragement that helps people join in.",
    Connector: "You create gentle, steady relational safety.",
    Architect: "You bring rhythm to structured processes.",
    Guardian: "You steady emotional tone and protect group wellbeing.",
    Visionary: "You ground expansive ideas in steady pacing.",
    Keeper: "You maintain rhythm while honoring meaning and values."
  },
  Advocate: {
    Connector: "You blend expressive encouragement with relational care.",
    Driver: "You energize motion and participation.",
    Stabilizer: "You lift energy while keeping things grounded.",
    Architect: "You amplify clarity and shared understanding.",
    Guardian: "You energize groups while protecting emotional tone.",
    Visionary: "You inspire participation in new possibilities.",
    Keeper: "You celebrate values and shared meaning."
  },
  Connector: {
    Advocate: "You blend relational care with expressive encouragement.",
    Driver: "You support motion with emotional attunement.",
    Stabilizer: "You create gentle, steady relational safety.",
    Architect: "You help people navigate complexity with care.",
    Guardian: "You deepen emotional grounding and trust.",
    Visionary: "You help people feel safe exploring new ideas.",
    Keeper: "You support values‑aligned participation."
  },
  Architect: {
    Guardian: "You combine clarity with emotional protection.",
    Driver: "You bring structure to decisive action.",
    Stabilizer: "You organize with steady pacing.",
    Advocate: "You clarify information with expressive energy.",
    Connector: "You help people navigate complexity with care.",
    Visionary: "You map possibilities into clear pathways.",
    Keeper: "You structure work around core values."
  },
  Guardian: {
    Architect: "You protect tone while supporting clarity.",
    Driver: "You safeguard wellbeing during motion.",
    Stabilizer: "You steady emotional tone.",
    Advocate: "You protect emotional integrity during celebration.",
    Connector: "You deepen relational safety.",
    Visionary: "You ground expansive ideas in emotional care.",
    Keeper: "You protect meaning and shared commitments."
  },
  Visionary: {
    Keeper: "You blend expansive imagination with grounded values.",
    Driver: "You inspire bold motion.",
    Stabilizer: "You explore possibilities with steady pacing.",
    Advocate: "You energize new ideas with expressive enthusiasm.",
    Connector: "You help people feel safe exploring new futures.",
    Architect: "You map bold ideas into clear structures.",
    Guardian: "You imagine futures that protect wellbeing."
  },
  Keeper: {
    Visionary: "You honor meaning while exploring new horizons.",
    Driver: "You move groups forward while protecting commitments.",
    Stabilizer: "You maintain values with steady pacing.",
    Advocate: "You celebrate shared meaning.",
    Connector: "You support values‑aligned participation.",
    Architect: "You structure work around what matters most.",
    Guardian: "You protect emotional and ethical integrity."
  }
};
