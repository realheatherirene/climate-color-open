// quiz-data.js

export const questions = [
  // AXIS 1: PACE (Driver vs. Stabilizer)
  {
    id: 1,
    axis: "Pace",
    prompt: "A small group is considering taking on a shared task. You tend to…",
    options: [
      { text: "Offer a quick nudge so the group can get moving right away", style: "Driver" },
      { text: "Establish a steady, manageable rhythm before getting started", style: "Stabilizer" }
    ]
  },
  {
    id: 2,
    axis: "Pace",
    prompt: "A shared effort is slowing down. You tend to…",
    options: [
      { text: "Suggest a clear next step to regain momentum immediately", style: "Driver" },
      { text: "Take on one practical task to keep current progress steady", style: "Stabilizer" }
    ]
  },
  {
    id: 3,
    axis: "Pace",
    prompt: "A group is drifting without a clear path forward. You tend to…",
    options: [
      { text: "Inject fresh direction to accelerate the pace of decision-making", style: "Driver" },
      { text: "Help re-establish a reliable baseline so people can regain focus", style: "Stabilizer" }
    ]
  },
  {
    id: 4,
    axis: "Pace",
    prompt: "When a project hits a lull or plateau, your instinct is to…",
    options: [
      { text: "Introduce a bold starting point to re-energize forward progress", style: "Driver" },
      { text: "Maintain steady routines until natural momentum returns", style: "Stabilizer" }
    ]
  },
  {
    id: 5,
    axis: "Pace",
    prompt: "When leading or supporting a simple initiative, you focus on…",
    options: [
      { text: "Reaching key milestones quickly to maintain progress", style: "Driver" },
      { text: "Pacing work sustainably so the team avoids burnout", style: "Stabilizer" }
    ]
  },
  {
    id: 6,
    axis: "Pace",
    prompt: "A task needs volunteers in your community. You tend to…",
    options: [
      { text: "Step up immediately to spur action by example", style: "Driver" },
      { text: "Quietly handle behind-the-scenes work to support ongoing flow", style: "Stabilizer" }
    ]
  },
  {
    id: 7,
    axis: "Pace",
    prompt: "When a discussion stalls, you prefer to…",
    options: [
      { text: "Propose a simple decision right now to break the bottleneck", style: "Driver" },
      { text: "Give people space to process at their own natural speed", style: "Stabilizer" }
    ]
  },
  {
    id: 8,
    axis: "Pace",
    prompt: "Your primary contribution to group momentum is…",
    options: [
      { text: "Sparking initiation and pushing past inertia", style: "Driver" },
      { text: "Providing consistent follow-through and operational calm", style: "Stabilizer" }
    ]
  },

  // AXIS 2: PEOPLE (Advocate vs. Connector)
  {
    id: 9,
    axis: "People",
    prompt: "A small opportunity is shared with your community. You tend to…",
    options: [
      { text: "Highlight why it matters broadly to inspire wider participation", style: "Advocate" },
      { text: "Send it directly to a specific person who would benefit", style: "Connector" }
    ]
  },
  {
    id: 10,
    axis: "People",
    prompt: "You come across a useful resource for your community. You tend to…",
    options: [
      { text: "Share it widely in a main channel with an encouraging note", style: "Advocate" },
      { text: "Reach out 1-on-1 to someone who might appreciate it", style: "Connector" }
    ]
  },
  {
    id: 11,
    axis: "People",
    prompt: "A newcomer joins a group you belong to. You tend to…",
    options: [
      { text: "Give a warm public welcome to spark energy in the room", style: "Advocate" },
      { text: "Check in with them privately to help them feel comfortable", style: "Connector" }
    ]
  },
  {
    id: 12,
    axis: "People",
    prompt: "A community member shares a personal milestone or win. You tend to…",
    options: [
      { text: "Celebrate publicly with enthusiasm to build shared joy", style: "Advocate" },
      { text: "Send a thoughtful personal message of connection", style: "Connector" }
    ]
  },
  {
    id: 13,
    axis: "People",
    prompt: "When encouraging participation in an event, you prefer to…",
    options: [
      { text: "Amplify enthusiasm across the whole group", style: "Advocate" },
      { text: "Build relational trust through personal invitations", style: "Connector" }
    ]
  },
  {
    id: 14,
    axis: "People",
    prompt: "During a quiet moment in a group exchange, you naturally…",
    options: [
      { text: "Share an uplifting reflection to boost overall energy", style: "Advocate" },
      { text: "Notice who is quiet and reach out privately to listen", style: "Connector" }
    ]
  },
  {
    id: 15,
    axis: "People",
    prompt: "You notice someone hesitating to participate. You tend to…",
    options: [
      { text: "Share why their presence adds value to inspire them to join", style: "Advocate" },
      { text: "Offer quiet personal support so they feel safe stepping in", style: "Connector" }
    ]
  },
  {
    id: 16,
    axis: "People",
    prompt: "Your strength in relational stewardship is best described as…",
    options: [
      { text: "Rallying people around shared warmth and enthusiasm", style: "Advocate" },
      { text: "Nurturing deep 1-on-1 trust and individual belonging", style: "Connector" }
    ]
  },

  // AXIS 3: PLACE (Architect vs. Guardian)
  {
    id: 17,
    axis: "Place",
    prompt: "A shared document or space has become messy and chaotic. You tend to…",
    options: [
      { text: "Reorganize the content into a clear, logical structure", style: "Architect" },
      { text: "Check in on group members to ensure no one feels overwhelmed", style: "Guardian" }
    ]
  },
  {
    id: 18,
    axis: "Place",
    prompt: "A group receives a complex or confusing update. You tend to…",
    options: [
      { text: "Synthesize the update into concise, easy-to-digest points", style: "Architect" },
      { text: "Provide a reassuring message to maintain emotional safety", style: "Guardian" }
    ]
  },
  {
    id: 19,
    axis: "Place",
    prompt: "A discussion is getting tangled and tense. You tend to…",
    options: [
      { text: "Outline the core points clearly to help everyone regroup", style: "Architect" },
      { text: "Offer a grounding reflection to restore safety and care", style: "Guardian" }
    ]
  },
  {
    id: 20,
    axis: "Place",
    prompt: "When a team is starting a project, your priority is to…",
    options: [
      { text: "Define clear systems, goals, and operational frameworks", style: "Architect" },
      { text: "Establish shared norms, boundaries, and mutual care", style: "Guardian" }
    ]
  },
  {
    id: 21,
    axis: "Place",
    prompt: "A small problem or conflict pops up in a group space. You tend to…",
    options: [
      { text: "Analyze the issue and propose a structured fix", style: "Architect" },
      { text: "Assess the human impact and protect group wellbeing", style: "Guardian" }
    ]
  },
  {
    id: 22,
    axis: "Place",
    prompt: "When information is scattered across channels, your instinct is to…",
    options: [
      { text: "Build a central index or summary for better clarity", style: "Architect" },
      { text: "Ensure everyone feels supported navigating the confusion", style: "Guardian" }
    ]
  },
  {
    id: 23,
    axis: "Place",
    prompt: "When someone asks for help understanding a decision, you tend to…",
    options: [
      { text: "Break down the logic and facts behind it simply", style: "Architect" },
      { text: "Reassure them and validate their feelings about the change", style: "Guardian" }
    ]
  },
  {
    id: 24,
    axis: "Place",
    prompt: "Your main focus when supporting group process is…",
    options: [
      { text: "Creating systematic clarity and functional coherence", style: "Architect" },
      { text: "Safeguarding emotional health and healthy boundaries", style: "Guardian" }
    ]
  },

  // AXIS 4: PURPOSE (Visionary vs. Keeper)
  {
    id: 25,
    axis: "Purpose",
    prompt: "Someone suggests a new idea for a shared initiative. You tend to…",
    options: [
      { text: "Explore how the idea could open up novel directions", style: "Visionary" },
      { text: "Consider how the idea aligns with foundational values", style: "Keeper" }
    ]
  },
  {
    id: 26,
    axis: "Purpose",
    prompt: "A group is losing focus during a long-term effort. You tend to…",
    options: [
      { text: "Offer a fresh angle or creative pivot to re-inspire them", style: "Visionary" },
      { text: "Remind everyone of the core purpose that brought them together", style: "Keeper" }
    ]
  },
  {
    id: 27,
    axis: "Purpose",
    prompt: "When approaching a complex community challenge, you prefer to…",
    options: [
      { text: "Reframe the problem to reveal unconventional possibilities", style: "Visionary" },
      { text: "Anchor your approach in shared history and proven principles", style: "Keeper" }
    ]
  },
  {
    id: 28,
    axis: "Purpose",
    prompt: "In group discussions about future plans, you tend to focus on…",
    options: [
      { text: "Imagining bold possibilities and emerging horizons", style: "Visionary" },
      { text: "Preserving the essential meaning and identity of the work", style: "Keeper" }
    ]
  },
  {
    id: 29,
    axis: "Purpose",
    prompt: "When evaluating a proposed change, your priority is assessing…",
    options: [
      { text: "What new opportunities or growth it could unlock", style: "Visionary" },
      { text: "Whether it stays true to original commitments and values", style: "Keeper" }
    ]
  },
  {
    id: 30,
    axis: "Purpose",
    prompt: "When someone asks for input on a small concept, you offer…",
    options: [
      { text: "An expansive thought that broadens their perspective", style: "Visionary" },
      { text: "A grounding insight that connects back to core intent", style: "Keeper" }
    ]
  },
  {
    id: 31,
    axis: "Purpose",
    prompt: "A team reaches a major milestone. You naturally highlight…",
    options: [
      { text: "Where this success enables the group to venture next", style: "Visionary" },
      { text: "Why this milestone feels deeply meaningful to the mission", style: "Keeper" }
    ]
  },
  {
    id: 32,
    axis: "Purpose",
    prompt: "Your core gift to community alignment is…",
    options: [
      { text: "Expanding horizons and illuminating creative possibilities", style: "Visionary" },
      { text: "Stewarding depth, purpose, and foundational continuity", style: "Keeper" }
    ]
  }
];

// Synchronized strictly with Atlas CSS Source of Truth
export const styles = {
  Driver: {
    color: "#DC2626",
    rgb: "220, 38, 38",
    slug: "red",
    anchor: "PACE",
    identity: "You move things forward.",
    energy: "Momentum · Initiation · Direction · Activation",
    contribution: "You help groups shift from hesitation to motion — cutting through uncertainty, naming the next step, and getting efforts underway.",
    shine: "You excel at launching new efforts, clarifying direction, and helping groups start strong.",
    watchouts: "You may move faster than others are ready for or feel impatient when things slow down."
  },
  Advocate: {
    color: "#EA580C",
    rgb: "234, 88, 12",
    slug: "orange",
    anchor: "PEOPLE",
    identity: "You spark energy and connection.",
    energy: "Enthusiasm · Warmth · Amplification · Engagement",
    contribution: "You help people feel interested, welcomed, and emotionally invested in shared work.",
    shine: "You excel at encouraging participation, sharing opportunities, and building enthusiasm.",
    watchouts: "You may take on more emotional responsibility or feel discouraged when enthusiasm doesn’t catch immediately."
  },
  Visionary: {
    color: "#E1B809",
    rgb: "225, 184, 9",
    slug: "yellow",
    anchor: "PURPOSE",
    identity: "You open new paths.",
    energy: "Possibility · Imagination · Perspective · Expansion",
    contribution: "You help groups see beyond what’s in front of them — offering fresh angles and creative solutions.",
    shine: "You excel at brainstorming, reframing challenges, and illuminating the big picture.",
    watchouts: "You may generate more ideas than a group can act on or overlook practical constraints."
  },
  Architect: {
    color: "#0284C7",
    rgb: "2, 132, 199",
    slug: "blue",
    anchor: "PLACE",
    identity: "You bring things into focus.",
    energy: "Clarity · Structure · Synthesis · Understanding",
    contribution: "You help groups understand what’s happening, what matters, and how to move forward.",
    shine: "You excel at summarizing key points, organizing information, and building frameworks.",
    watchouts: "You may take on more sensemaking than realized or feel frustrated by vagueness."
  },
  Stabilizer: {
    color: "#16A34A",
    rgb: "22, 163, 74",
    slug: "green",
    anchor: "PACE",
    identity: "You keep things steady.",
    energy: "Steadiness · Reliability · Followthrough · Continuity",
    contribution: "You help groups maintain momentum, consistency, and calm — especially when things feel scattered or uncertain.",
    shine: "You excel at supporting ongoing efforts, pacing the work, and sustaining progress.",
    watchouts: "You may take on more small tasks than others notice or feel overlooked for your steady presence."
  },
  Connector: {
    color: "#9333EA",
    rgb: "147, 51, 234",
    slug: "purple",
    anchor: "PEOPLE",
    identity: "You help people feel seen.",
    energy: "Relationship · Intuition · Attunement · Belonging",
    contribution: "You notice subtle emotions, quiet hesitations, and small openings for care.",
    shine: "You excel at checking in privately, supporting quieter voices, and strengthening relational trust.",
    watchouts: "You may carry quiet emotional labor or feel overly responsible for the feelings of others."
  },
  Keeper: {
    color: "#4F46E5",
    rgb: "79, 70, 229",
    slug: "indigo",
    anchor: "PURPOSE",
    identity: "You steady the center.",
    energy: "Continuity · Meaning · Memory · Values",
    contribution: "You help groups stay connected to what matters most — the purpose, history, and commitments that give shared work depth.",
    shine: "You excel at stewarding shared values, maintaining rhythm, and protecting the “why.”",
    watchouts: "You may hold back when quick action is needed or feel uneasy when things shift rapidly."
  },
  Guardian: {
    color: "#D946EF",
    rgb: "217, 70, 239",
    slug: "violet",
    anchor: "PLACE",
    identity: "You protect what matters.",
    energy: "Protection · Care · Boundaries · Steadiness",
    contribution: "You help groups feel safe, supported, and grounded — especially when things feel uncertain.",
    shine: "You excel at supporting hesitant participants, protecting group tone, and holding boundaries.",
    watchouts: "You may carry heavy emotional responsibility or hesitate to speak up until boundaries are crossed."
  }
};

export const secondarySyntheses = {
  Driver: {
    Advocate: "You combine decisive momentum with bold advocacy, mobilizing rapid action to challenge injustice.",
    Visionary: "You merge fast-paced execution with expansive vision, turning radical future ideas into immediate reality.",
    Stabilizer: "You balance swift action with grounding structures, ensuring rapid progress without sacrificing operational stability.",
    Architect: "You pair high-energy drive with strategic design, building resilient systems at a fast, decisive pace.",
    Keeper: "You combine clear direction with deep respect for core values, advancing goals while honoring institutional memory.",
    Connector: "You pair swift execution with relational warmth, bringing diverse stakeholders together for fast collective action.",
    Guardian: "You combine proactive initiative with protective care, taking swift action to safeguard local environments."
  },
  Advocate: {
    Driver: "You blend passionate advocacy with rapid execution, turning principled demands into swift, tangible momentum.",
    Visionary: "You combine social justice advocacy with expansive vision, inspiring movement building for long-term transformation.",
    Stabilizer: "You pair bold advocacy with practical stability, ensuring cause-driven efforts have reliable, sustainable support.",
    Architect: "You merge voice-giving advocacy with systemic design, embedding equity and fairness directly into framework blueprints.",
    Keeper: "You combine public advocacy with traditional wisdom, championing causes while upholding core cultural memory.",
    Connector: "You pair vocal advocacy with bridge-building skills, uniting coalitions around essential social and environmental rights.",
    Guardian: "You blend principled advocacy with ecological defense, standing firmly to protect both community and place."
  },
  Visionary: {
    Driver: "You pair radical imagination with swift execution, ensuring bold future ideas lead to immediate impact.",
    Advocate: "You combine transformative vision with vocal advocacy, inspiring communities to fight for a better future.",
    Stabilizer: "You balance visionary ideals with structured processes, turning abstract possibilities into workable long-term systems.",
    Architect: "You merge big-picture imagination with technical architecture, designing scalable models for tomorrow's world.",
    Keeper: "You bridge the future and the past, weaving timeless wisdom into visionary concepts for holistic innovation.",
    Connector: "You pair expansive concepts with relational networking, rallying diverse groups around a shared dream.",
    Guardian: "You combine future-focused imagination with environmental protection, envisioning new ways to restore natural harmony."
  },
  Stabilizer: {
    Driver: "You balance systematic stability with rapid initiative, creating efficient workflows that sustain steady momentum.",
    Advocate: "You pair reliable operational structure with passionate advocacy, giving cause-based movements a solid foundation.",
    Visionary: "You ground bold visionary concepts into clear, actionable, and repeatable operational systems.",
    Architect: "You combine practical organization with technical framework design, ensuring structural blueprints are flawlessly maintained.",
    Keeper: "You pair methodical stability with historical preservation, keeping organizational processes consistent over time.",
    Connector: "You combine structured workflows with relational care, providing steady coordination for collaborative networks.",
    Guardian: "You pair operational reliability with ecological stewardship, maintaining dependable systems for habitat care."
  },
  Architect: {
    Driver: "You combine technical design with rapid drive, building high-impact structural solutions at an accelerated pace.",
    Advocate: "You pair framework design with social advocacy, constructing systems that explicitly serve equity and justice.",
    Visionary: "You merge structural architecture with expansive vision, creating tangible blueprints for transformative change.",
    Stabilizer: "You pair complex design with steady operational care, building frameworks that run smoothly and reliably.",
    Keeper: "You combine system design with institutional memory, building modern solutions rooted in proven knowledge.",
    Connector: "You pair structural planning with network building, designing open frameworks that encourage broad participation.",
    Guardian: "You merge technical infrastructure design with ecological stewardship, building in harmony with natural systems."
  },
  Keeper: {
    Driver: "You balance deep respect for core wisdom with swift action, ensuring rapid movement stays anchored to core values.",
    Advocate: "You pair historical memory with vocal advocacy, drawing on past struggles to champion present causes.",
    Visionary: "You bridge past wisdom with future possibilities, ensuring visionary ideas maintain structural and cultural integrity.",
    Stabilizer: "You combine traditional preservation with methodical organization, keeping core standards intact.",
    Architect: "You pair institutional knowledge with technical system design, building modern frameworks on proven foundations.",
    Connector: "You merge cultural stewardship with relational connections, using shared stories to unite communities.",
    Guardian: "You combine historical continuity with place-based protection, safeguarding both cultural heritage and natural environments."
  },
  Connector: {
    Driver: "You pair relational warmth with rapid drive, aligning group energy for quick, collaborative execution.",
    Advocate: "You combine coalition-building with strong advocacy, amplifying diverse voices into unified action.",
    Visionary: "You pair community networking with expansive vision, weaving individual ideas into a collective future.",
    Stabilizer: "You combine relationship building with dependable structure, keeping networks supported and organized.",
    Architect: "You pair community alignment with systemic design, creating collaborative environments where infrastructure succeeds.",
    Keeper: "You blend community care with historical memory, strengthening relationships through shared heritage.",
    Guardian: "You pair relational connection with local stewardship, mobilizing neighborhood networks to protect place."
  },
  Guardian: {
    Driver: "You combine protective care with swift initiative, moving decisively when local environments need defense.",
    Advocate: "You pair environmental protection with bold advocacy, standing up for vulnerable ecosystems and places.",
    Visionary: "You merge local ecological care with forward-thinking vision, preserving land while innovating restoration techniques.",
    Stabilizer: "You pair natural habitat care with steady maintenance, providing consistent stewardship for local places.",
    Architect: "You combine ecological defense with technical design, engineering solutions that protect living systems.",
    Keeper: "You pair environmental stewardship with traditional wisdom, preserving ecological and cultural heritage.",
    Connector: "You pair place-based stewardship with community connection, inviting neighbors into hands-on conservation."
  }
};
