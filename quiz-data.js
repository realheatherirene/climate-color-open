// quiz-data.js

export const questions = [
  // =========================================================================
  // AXIS 1: PACING (Driver vs. Stabilizer)
  // =========================================================================
  {
    id: 1,
    axis: "Pacing",
    prompt: "A small group is considering taking on a shared task. You tend to…",
    options: [
      { text: "Offer a quick nudge so the group can get moving right away", style: "Driver" },
      { text: "Establish a steady, manageable rhythm before getting started", style: "Stabilizer" }
    ]
  },
  {
    id: 2,
    axis: "Pacing",
    prompt: "A shared effort is slowing down. You tend to…",
    options: [
      { text: "Suggest a clear next step to regain momentum immediately", style: "Driver" },
      { text: "Take on one practical task to keep current progress steady", style: "Stabilizer" }
    ]
  },
  {
    id: 3,
    axis: "Pacing",
    prompt: "A group is drifting without a clear path forward. You tend to…",
    options: [
      { text: "Inject fresh direction to accelerate the pace of decision-making", style: "Driver" },
      { text: "Help re-establish a reliable baseline so people can regain focus", style: "Stabilizer" }
    ]
  },
  {
    id: 4,
    axis: "Pacing",
    prompt: "When a project hits a lull or plateau, your instinct is to…",
    options: [
      { text: "Introduce a bold starting point to re-energize forward progress", style: "Driver" },
      { text: "Maintain steady routines until natural momentum returns", style: "Stabilizer" }
    ]
  },
  {
    id: 5,
    axis: "Pacing",
    prompt: "When leading or supporting a simple initiative, you focus on…",
    options: [
      { text: "Reaching key milestones quickly to maintain progress", style: "Driver" },
      { text: "Pacing work sustainably so the team avoids burnout", style: "Stabilizer" }
    ]
  },
  {
    id: 6,
    axis: "Pacing",
    prompt: "A task needs volunteers in your community. You tend to…",
    options: [
      { text: "Step up immediately to spur action by example", style: "Driver" },
      { text: "Quietly handle behind-the-scenes work to support ongoing flow", style: "Stabilizer" }
    ]
  },
  {
    id: 7,
    axis: "Pacing",
    prompt: "When a discussion stalls, you prefer to…",
    options: [
      { text: "Propose a simple decision right now to break the bottleneck", style: "Driver" },
      { text: "Give people space to process at their own natural speed", style: "Stabilizer" }
    ]
  },
  {
    id: 8,
    axis: "Pacing",
    prompt: "Your primary contribution to group momentum is…",
    options: [
      { text: "Sparking initiation and pushing past inertia", style: "Driver" },
      { text: "Providing consistent follow-through and operational calm", style: "Stabilizer" }
    ]
  },

  // =========================================================================
  // AXIS 2: RELATIONAL REACH (Advocate vs. Connector)
  // =========================================================================
  {
    id: 9,
    axis: "Relational",
    prompt: "A small opportunity is shared with your community. You tend to…",
    options: [
      { text: "Highlight why it matters broadly to inspire wider participation", style: "Advocate" },
      { text: "Send it directly to a specific person who would benefit", style: "Connector" }
    ]
  },
  {
    id: 10,
    axis: "Relational",
    prompt: "You come across a useful resource for your community. You tend to…",
    options: [
      { text: "Share it widely in a main channel with an encouraging note", style: "Advocate" },
      { text: "Reach out 1-on-1 to someone who might appreciate it", style: "Connector" }
    ]
  },
  {
    id: 11,
    axis: "Relational",
    prompt: "A newcomer joins a group you belong to. You tend to…",
    options: [
      { text: "Give a warm public welcome to spark energy in the room", style: "Advocate" },
      { text: "Check in with them privately to help them feel comfortable", style: "Connector" }
    ]
  },
  {
    id: 12,
    axis: "Relational",
    prompt: "A community member shares a personal milestone or win. You tend to…",
    options: [
      { text: "Celebrate publicly with enthusiasm to build shared joy", style: "Advocate" },
      { text: "Send a thoughtful personal message of connection", style: "Connector" }
    ]
  },
  {
    id: 13,
    axis: "Relational",
    prompt: "When encouraging participation in an event, you prefer to…",
    options: [
      { text: "Amplify enthusiasm across the whole group", style: "Advocate" },
      { text: "Build relational trust through personal invitations", style: "Connector" }
    ]
  },
  {
    id: 14,
    axis: "Relational",
    prompt: "During a quiet moment in a group exchange, you naturally…",
    options: [
      { text: "Share an uplifting reflection to boost overall energy", style: "Advocate" },
      { text: "Notice who is quiet and reach out privately to listen", style: "Connector" }
    ]
  },
  {
    id: 15,
    axis: "Relational",
    prompt: "You notice someone hesitating to participate. You tend to…",
    options: [
      { text: "Share why their presence adds value to inspire them to join", style: "Advocate" },
      { text: "Offer quiet personal support so they feel safe stepping in", style: "Connector" }
    ]
  },
  {
    id: 16,
    axis: "Relational",
    prompt: "Your strength in relational stewardship is best described as…",
    options: [
      { text: "Rallying people around shared warmth and enthusiasm", style: "Advocate" },
      { text: "Nurturing deep 1-on-1 trust and individual belonging", style: "Connector" }
    ]
  },

  // =========================================================================
  // AXIS 3: OPERATIONAL FRAMING (Architect vs. Guardian)
  // =========================================================================
  {
    id: 17,
    axis: "Operations",
    prompt: "A shared document or space has become messy and chaotic. You tend to…",
    options: [
      { text: "Reorganize the content into a clear, logical structure", style: "Architect" },
      { text: "Check in on group members to ensure no one feels overwhelmed", style: "Guardian" }
    ]
  },
  {
    id: 18,
    axis: "Operations",
    prompt: "A group receives a complex or confusing update. You tend to…",
    options: [
      { text: "Synthesize the update into concise, easy-to-digest points", style: "Architect" },
      { text: "Provide a reassuring message to maintain emotional safety", style: "Guardian" }
    ]
  },
  {
    id: 19,
    axis: "Operations",
    prompt: "A discussion is getting tangled and tense. You tend to…",
    options: [
      { text: "Outline the core points clearly to help everyone regroup", style: "Architect" },
      { text: "Offer a grounding reflection to restore safety and care", style: "Guardian" }
    ]
  },
  {
    id: 20,
    axis: "Operations",
    prompt: "When a team is starting a project, your priority is to…",
    options: [
      { text: "Define clear systems, goals, and operational frameworks", style: "Architect" },
      { text: "Establish shared norms, boundaries, and mutual care", style: "Guardian" }
    ]
  },
  {
    id: 21,
    axis: "Operations",
    prompt: "A small problem or conflict pops up in a group space. You tend to…",
    options: [
      { text: "Analyze the issue and propose a structured fix", style: "Architect" },
      { text: "Assess the human impact and protect group wellbeing", style: "Guardian" }
    ]
  },
  {
    id: 22,
    axis: "Operations",
    prompt: "When information is scattered across channels, your instinct is to…",
    options: [
      { text: "Build a central index or summary for better clarity", style: "Architect" },
      { text: "Ensure everyone feels supported navigating the confusion", style: "Guardian" }
    ]
  },
  {
    id: 23,
    axis: "Operations",
    prompt: "When someone asks for help understanding a decision, you tend to…",
    options: [
      { text: "Break down the logic and facts behind it simply", style: "Architect" },
      { text: "Reassure them and validate their feelings about the change", style: "Guardian" }
    ]
  },
  {
    id: 24,
    axis: "Operations",
    prompt: "Your main focus when supporting group process is…",
    options: [
      { text: "Creating systematic clarity and functional coherence", style: "Architect" },
      { text: "Safeguarding emotional health and healthy boundaries", style: "Guardian" }
    ]
  },

  // =========================================================================
  // AXIS 4: PURPOSE ALIGNMENT (Visionary vs. Keeper)
  // =========================================================================
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

export const styles = {
  Driver: {
    color: "#DC2626",
    rgb: "220, 38, 38",
    slug: "red",
    theme: "Momentum, initiation, direction, activation",
    identity: "You move things forward.",
    behavior: "You help groups shift from hesitation to motion — cutting through uncertainty, naming the next step, and getting efforts underway. You’re the person who says, 'Let’s start here,' and suddenly the whole room knows what to do.",
    action: "Your gift shines when launching new efforts, clarifying direction, and helping groups start strong.",
    watchouts: "You may move faster than others are ready for or feel impatient when things slow down."
  },
  Advocate: {
    color: "#EA580C",
    rgb: "234, 88, 12",
    slug: "orange",
    theme: "Enthusiasm, warmth, amplification, engagement",
    identity: "You spark energy and connection.",
    behavior: "You help people feel interested, welcomed, and emotionally invested in shared work. You’re the person who brings a bright note into the room — the one who makes others lean in and feel excited to participate.",
    action: "Your gift shines when welcoming new participants, sharing opportunities, and encouraging engagement.",
    watchouts: "You may take on more emotional responsibility or feel discouraged when enthusiasm doesn't catch immediately."
  },
  Visionary: {
    color: "#D97706",
    rgb: "217, 119, 6",
    slug: "yellow",
    theme: "Possibility, imagination, perspective, expansion",
    identity: "You open new paths.",
    behavior: "You help groups see beyond what’s in front of them — offering fresh angles, creative solutions, and perspectives that shift what feels possible. You’re the person who says, 'What if we tried it this way?'",
    action: "Your gift shines when brainstorming, reframing challenges, and seeing the big picture.",
    watchouts: "You may generate more ideas than a group can act on or overlook practical constraints."
  },
  Stabilizer: {
    color: "#16A34A",
    rgb: "22, 163, 74",
    slug: "green",
    theme: "Steadiness, reliability, followthrough, continuity",
    identity: "You keep things steady.",
    behavior: "You help groups maintain momentum, consistency, and calm — especially when things feel scattered or uncertain. You’re the person who quietly picks up a task or offers a practical step that helps everyone breathe easier.",
    action: "Your gift shines when maintaining momentum, supporting ongoing efforts, and pacing the work.",
    watchouts: "You may take on more small tasks than others notice or feel overlooked for your steady presence."
  },
  Architect: {
    color: "#0284C7",
    rgb: "2, 132, 199",
    slug: "blue",
    theme: "Clarity, structure, synthesis, understanding",
    identity: "You bring things into focus.",
    behavior: "You help groups understand what’s happening, what matters, and how to move forward. You take scattered information, tangled conversations, or unclear updates and turn them into something usable.",
    action: "Your gift shines when summarizing key points, organizing information, and building frameworks.",
    watchouts: "You may take on more sensemaking than realized or feel frustrated by vagueness."
  },
  Keeper: {
    color: "#4F46E5",
    rgb: "79, 70, 229",
    slug: "indigo",
    theme: "Continuity, meaning, memory, values",
    identity: "You steady the center.",
    behavior: "You help groups stay connected to what matters most — the purpose, history, and commitments that give shared work depth. You’re the person who remembers why something began and gently brings people back to the heart of things.",
    action: "Your gift shines when stewarding shared values, maintaining rhythm, and protecting the 'why'.",
    watchouts: "You may hold back when quick action is needed or feel uneasy when things shift rapidly."
  },
  Connector: {
    color: "#9333EA",
    rgb: "147, 51, 234",
    slug: "purple",
    theme: "Relationship, intuition, attunement, belonging",
    identity: "You help people feel seen.",
    behavior: "You notice subtle emotions, quiet hesitations, and small openings for care. You’re the person who reaches out privately or checks in gently to ensure people feel included and supported.",
    action: "Your gift shines when checking in privately, supporting quieter voices, and strengthening relational trust.",
    watchouts: "You may carry quiet emotional labor or feel overly responsible for the feelings of others."
  },
  Guardian: {
    color: "#7E22CE",
    rgb: "126, 34, 206",
    slug: "violet",
    theme: "Protection, care, boundaries, steadiness",
    identity: "You protect what matters.",
    behavior: "You help groups feel safe, supported, and grounded — especially when things feel uncertain. You notice when someone needs reassurance, when a boundary needs to be held, or when a group needs to slow down.",
    action: "Your gift shines when supporting hesitant participants, protecting group tone, and holding boundaries.",
    watchouts: "You may carry heavy emotional responsibility or hesitate to speak up until boundaries are crossed."
  }
};

export const secondarySyntheses = {
  Driver: {
    Advocate: "Your Advocate side brings warmth and enthusiasm to your natural momentum. You help groups move forward and feel excited about the journey. You make action feel inviting rather than pressured.",
    Visionary: "Your Visionary side expands the range of possibilities you’re willing to pursue. You don’t just move things forward — you open new paths and help groups imagine what’s possible. You bring direction shaped by creativity.",
    Stabilizer: "Your Stabilizer side helps you pace your momentum with steadiness. You launch efforts confidently while keeping them sustainable. You move things forward without burning people out.",
    Architect: "Your Architect side brings clarity and structure to your directional energy. You help groups move forward with understanding, not just urgency. You cut through uncertainty while building coherence.",
    Connector: "Your Connector side helps you sense when people need reassurance or support before moving ahead. You bring direction shaped by relational intuition. You help groups start in ways that feel safe and human.",
    Keeper: "Your Keeper side anchors your momentum in meaning. You move things forward while protecting the purpose behind the work. You help groups start strong and stay true.",
    Guardian: "Your Guardian side helps you hold boundaries as you push forward. You bring direction that protects people and tone. You help groups move ahead without losing emotional safety."
  },
  Advocate: {
    Driver: "Your Driver side helps you turn enthusiasm into action. You spark interest and then help groups take the next step. You make participation feel both exciting and doable.",
    Visionary: "Your Visionary side expands the ideas you amplify. You inspire people with possibilities that feel fresh and energizing. You help groups imagine new paths and feel excited to explore them.",
    Stabilizer: "Your Stabilizer side grounds your enthusiasm in steadiness. You encourage participation in ways that feel sustainable and supportive. You help groups stay engaged without overwhelm.",
    Architect: "Your Architect side helps you communicate clearly and compellingly. You amplify ideas with structure, making them easier for others to understand and act on. You bring excitement shaped by clarity.",
    Connector: "Your Connector side deepens the relational warmth behind your enthusiasm. You help people feel both welcomed and genuinely seen. You spark interest supported by trust.",
    Keeper: "Your Keeper side helps you highlight what’s meaningful, not just exciting. You amplify purpose in ways that help groups stay connected to their 'why.' You bring enthusiasm shaped by depth.",
    Guardian: "Your Guardian side helps you encourage participation while protecting emotional safety. You spark interest gently, in ways that feel supportive and grounded. You make engagement feel safe."
  },
  Visionary: {
    Driver: "Your Driver side helps you turn ideas into motion. You open new paths and then help groups take the first step. You bring possibility shaped by direction.",
    Advocate: "Your Advocate side helps you inspire others with your ideas. You make possibility feel exciting and accessible. You bring creativity supported by warmth.",
    Stabilizer: "Your Stabilizer side grounds your imagination in practicality. You offer fresh ideas that people can actually act on. You bring possibility shaped by steadiness.",
    Architect: "Your Architect side helps you give structure to your ideas. You open new directions and then clarify how they can work. You bring creativity shaped by coherence.",
    Connector: "Your Connector side helps you sense which ideas will resonate with people. You bring possibility shaped by relational intuition. You open paths that feel human and meaningful.",
    Keeper: "Your Keeper side helps you imagine new futures rooted in purpose. You bring creativity shaped by continuity. You open possibilities that stay true to what matters.",
    Guardian: "Your Guardian side helps you introduce new ideas gently and safely. You bring possibility shaped by care. You help groups explore without feeling overwhelmed."
  },
  Stabilizer: {
    Driver: "Your Driver side helps you maintain momentum with clarity. You keep things steady while helping groups move forward confidently. You bring reliability shaped by direction.",
    Advocate: "Your Advocate side helps you support progress with warmth and encouragement. You keep things moving while helping people feel engaged. You bring steadiness shaped by enthusiasm.",
    Visionary: "Your Visionary side helps you bring creativity into your steady care. You support progress with fresh ideas and new approaches. You bring reliability shaped by possibility.",
    Architect: "Your Architect side helps you organize your steady efforts with clarity. You maintain momentum through structure and understanding. You bring steadiness shaped by coherence.",
    Connector: "Your Connector side helps you support progress with relational intuition. You keep things moving while noticing what people need. You bring reliability shaped by care.",
    Keeper: "Your Keeper side helps you maintain momentum anchored in meaning. You keep things steady while protecting purpose. You bring reliability shaped by depth.",
    Guardian: "Your Guardian side helps you support progress while protecting emotional safety. You keep things moving gently and responsibly. You bring steadiness shaped by protection."
  },
  Architect: {
    Driver: "Your Driver side helps you turn clarity into action. You organize information and then help groups move forward. You bring structure shaped by direction.",
    Advocate: "Your Advocate side helps you communicate your clarity with warmth. You make understanding feel inviting and energizing. You bring structure shaped by enthusiasm.",
    Visionary: "Your Visionary side helps you build frameworks that support new ideas. You bring clarity shaped by possibility. You make creativity feel coherent.",
    Stabilizer: "Your Stabilizer side helps you maintain clarity over time. You bring structure shaped by steadiness. You help groups stay organized through change.",
    Connector: "Your Connector side helps you clarify complexity with relational intuition. You bring structure shaped by care. You make understanding feel human.",
    Keeper: "Your Keeper side helps you organize information anchored in purpose. You bring clarity shaped by meaning. You help groups understand what matters most.",
    Guardian: "Your Guardian side helps you clarify boundaries and protect group tone. You bring structure shaped by care. You help groups navigate sensitive moments clearly."
  },
  Keeper: {
    Driver: "Your Driver side helps you move things forward while keeping them anchored. You bring direction rooted in meaning, making sure progress stays true to core purpose.",
    Advocate: "Your Advocate side helps you share what's meaningful with enthusiasm. You invite people into shared values with warmth and open encouragement.",
    Visionary: "Your Visionary side helps you imagine new ways to stay true to purpose. You bring continuity shaped by creativity, helping groups evolve without losing their heart.",
    Stabilizer: "Your Stabilizer side helps you sustain shared values with steady routines. You protect meaning through reliable, daily follow-through.",
    Architect: "Your Architect side helps you organize shared memory and values into clear frameworks. You bring coherence to continuity.",
    Connector: "Your Connector side deepens belonging around shared purpose. You hold values through quiet relational care and deep listening.",
    Guardian: "Your Guardian side helps you safeguard both people and purpose with firm, steady resolve. You hold ethical boundaries with protective care."
  },
  Connector: {
    Driver: "Your Driver side helps you turn relational intuition into gentle momentum. You support people while helping them take the next step. You bring care shaped by direction.",
    Advocate: "Your Advocate side helps you make people feel both welcomed and excited. You bring care shaped by enthusiasm and warmth. You help participation feel natural.",
    Visionary: "Your Visionary side helps you offer relational insight shaped by possibility. You bring care shaped by creativity. You help people explore new paths safely.",
    Stabilizer: "Your Stabilizer side helps you support relationships with steady, reliable care. You bring intuition shaped by consistency. You help groups feel both connected and grounded.",
    Architect: "Your Architect side helps you communicate your relational insight clearly. You bring care shaped by understanding. You help people feel seen and informed.",
    Keeper: "Your Keeper side helps you nurture belonging anchored in meaning. You bring care shaped by depth. You help relationships feel purposeful.",
    Guardian: "Your Guardian side helps you protect people with intuition and steadiness. You bring care shaped by safety. You help groups feel emotionally secure."
  },
  Guardian: {
    Driver: "Your Driver side helps you protect people while moving things forward. You bring safety shaped by direction and clarity.",
    Advocate: "Your Advocate side helps you encourage participation gently and warmly. You help groups feel invited, supported, and emotionally grounded.",
    Visionary: "Your Visionary side helps you introduce new ideas in ways that feel safe. You bring protection shaped by possibility. You help groups explore without overwhelm.",
    Stabilizer: "Your Stabilizer side helps you protect people with steady, ongoing care. You bring safety shaped by reliability. You help groups feel consistently supported.",
    Architect: "Your Architect side helps you clarify boundaries and protect tone. You help groups navigate sensitive moments with structure and understanding.",
    Connector: "Your Connector side helps you feel safe, supported, and genuinely seen. You protect group tone while offering quiet relational care.",
    Keeper: "Your Keeper side helps you safeguard both people and purpose. You help groups stay grounded in what matters most while protecting emotional wellbeing."
  }
};

export const combinedPatterns = {
  Driver: {
    Advocate: "You move things forward with warmth and enthusiasm. You help groups start strong because people feel energized, welcomed, and ready to participate.",
    Visionary: "You open new paths and help groups take the first step. You bring direction shaped by imagination, making progress feel both bold and possible.",
    Stabilizer: "You create momentum that lasts. You help groups begin confidently and continue steadily, pacing the work in ways that feel sustainable.",
    Architect: "You cut through uncertainty with clarity. You help groups move forward with a shared understanding of what matters and how to begin.",
    Connector: "You move things forward in ways that feel human. You sense when people need reassurance and help them step into action at a pace that feels right.",
    Keeper: "You help groups start strong while staying true to their purpose. You bring direction anchored in meaning, protecting what matters as you move ahead.",
    Guardian: "You move things forward while protecting emotional safety. You help groups advance without losing steadiness, care, or boundaries."
  },
  Advocate: {
    Driver: "You spark enthusiasm and turn it into motion. You help groups feel excited and ready to take the next step.",
    Visionary: "You inspire people with fresh possibilities. You help groups imagine new paths and feel energized enough to explore them.",
    Stabilizer: "You encourage participation in ways that feel steady and sustainable. You help groups stay engaged without overwhelm.",
    Architect: "You amplify ideas with clarity. You help people understand and feel excited about what’s possible.",
    Connector: "You help people feel both welcomed and genuinely seen. You spark interest supported by trust and relational warmth.",
    Keeper: "You highlight what’s meaningful, not just exciting. You help groups stay connected to their purpose through enthusiasm and care.",
    Guardian: "You encourage participation gently and safely. You help groups feel invited, supported, and emotionally grounded."
  },
  Visionary: {
    Driver: "You open new paths and help groups take the first step. You bring possibility shaped by direction and momentum.",
    Advocate: "You inspire people with ideas that feel exciting and accessible. You help groups imagine and believe in new futures.",
    Stabilizer: "You bring creativity grounded in practicality. You help groups explore new approaches in ways that feel steady and doable.",
    Architect: "You give structure to possibility. You help groups understand how new ideas can work and how to move toward them.",
    Connector: "You open paths that feel human and meaningful. You sense which ideas will resonate and help people explore them safely.",
    Keeper: "You imagine new futures rooted in purpose. You help groups evolve while staying connected to what matters most.",
    Guardian: "You introduce new ideas gently and responsibly. You help groups explore without feeling overwhelmed or unsafe."
  },
  Stabilizer: {
    Driver: "You keep things steady while helping groups move forward. You bring reliability shaped by clear direction.",
    Advocate: "You support progress with warmth and encouragement. You help groups stay engaged and energized over time.",
    Visionary: "You bring creativity into your steady care. You help groups explore new approaches without losing consistency.",
    Architect: "You maintain momentum through clarity and structure. You help groups stay organized and grounded through change.",
    Connector: "You support progress with relational intuition. You help groups move forward while noticing what people need.",
    Keeper: "You maintain momentum anchored in meaning. You help groups move at a steady, purposeful pace.",
    Guardian: "You support progress gently and responsibly. You help groups move forward while protecting emotional safety."
  },
  Architect: {
    Driver: "You bring clarity that moves groups forward. You help people understand what matters and act on it confidently.",
    Advocate: "You communicate understanding with warmth. You help groups grasp ideas in ways that feel inviting and energizing.",
    Visionary: "You give structure to creativity. You help groups imagine new possibilities and understand how to pursue them.",
    Stabilizer: "You maintain clarity over time. You help groups stay organized, steady, and coherent through transitions.",
    Connector: "You make understanding feel human. You clarify complexity with relational intuition and care.",
    Keeper: "You organize information anchored in purpose. You help groups understand what matters most and stay connected to it.",
    Guardian: "You clarify boundaries and protect tone. You help groups navigate sensitive moments with structure and understanding."
  },
  Keeper: {
    Driver: "You help groups start strong while staying anchored in purpose. You bring direction grounded in meaning.",
    Advocate: "You invite people into shared values with warmth and open encouragement. You bring purpose shaped by enthusiasm.",
    Visionary: "You help groups stay true to their purpose while imagining new ways to grow. You hold the heart of the work steady as you open doors.",
    Stabilizer: "You help groups move forward at a steady, meaningful pace. You maintain momentum while protecting the purpose that gives work its heart.",
    Architect: "You help groups understand what matters and stay connected to it. You bring clarity that protects purpose.",
    Connector: "You nurture belonging anchored in meaning. You help relationships feel purposeful and deeply grounded.",
    Guardian: "You safeguard both people and purpose. You help groups stay grounded in what matters most while protecting emotional wellbeing."
  },
  Connector: {
    Driver: "You support people while helping them take the next step. You bring relational intuition shaped by gentle momentum.",
    Advocate: "You help people feel both welcomed and excited. You build trust through quiet care while sparking enthusiasm.",
    Visionary: "You offer relational insight shaped by possibility. You help people explore new paths in ways that feel safe and meaningful.",
    Stabilizer: "You support relationships with steady, reliable care. You help groups feel both connected and grounded.",
    Architect: "You make relational insight clear and accessible. You help people feel seen and informed at the same time.",
    Keeper: "You nurture belonging anchored in meaning. You help relationships feel purposeful and emotionally rich.",
    Guardian: "You protect people with intuition and steadiness. You help groups feel deeply supported and emotionally secure."
  },
  Guardian: {
    Driver: "You protect people while helping groups move forward. You bring safety shaped by direction and clarity.",
    Advocate: "You encourage participation gently and warmly. You help groups feel invited, supported, and emotionally grounded.",
    Visionary: "You introduce new ideas in ways that feel safe. You help groups explore possibility without overwhelm.",
    Stabilizer: "You protect people with steady, ongoing care. You help groups feel consistently supported and grounded.",
    Architect: "You clarify boundaries and protect tone. You help groups navigate sensitive moments with structure and understanding.",
    Connector: "You help people feel safe, supported, and genuinely seen. You protect group tone while offering quiet relational care.",
    Keeper: "You safeguard both people and purpose. You help groups stay grounded in what matters most while protecting emotional wellbeing."
  }
};
