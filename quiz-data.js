// quiz-data.js

export const questions = [
  {
    id: 1,
    prompt: "A small group is considering taking on a shared task. You tend to…",
    type: "momentum",
    options: [
      { text: "Offer a quick nudge so the group can get moving", style: "Driver" },
      { text: "Share a warm note that helps people feel excited to begin", style: "Advocate" }
    ]
  },
  {
    id: 2,
    prompt: "A shared effort is slowing down. You tend to…",
    type: "momentum",
    options: [
      { text: "Take on one small piece to help keep things moving", style: "Stabilizer" },
      { text: "Suggest a clear next step the group can take", style: "Driver" }
    ]
  },
  {
    id: 3,
    prompt: "A small problem pops up in a shared space. You tend to…",
    type: "relational",
    options: [
      { text: "Suggest a simple fix that could resolve it", style: "Driver" },
      { text: "Check whether anyone is affected and respond accordingly", style: "Guardian" }
    ]
  },
  {
    id: 4,
    prompt: "A group is moving quickly and losing sight of purpose. You tend to…",
    type: "meaning",
    options: [
      { text: "Offer a reminder of the core intention behind the work", style: "Keeper" },
      { text: "Help clarify the main goal so people can refocus", style: "Architect" }
    ]
  },
  {
    id: 5,
    prompt: "A group is drifting without a clear path. You tend to…",
    type: "clarity",
    options: [
      { text: "Offer a simple next step to help regain focus", style: "Driver" },
      { text: "Share a grounding reminder of the group’s purpose", style: "Guardian" }
    ]
  },
  {
    id: 6,
    prompt: "A shared document has become cluttered. You tend to…",
    type: "clarity",
    options: [
      { text: "Reorganize the information into a clearer structure", style: "Architect" },
      { text: "Point out a few helpful pieces others might appreciate", style: "Connector" }
    ]
  },
  {
    id: 7,
    prompt: "A group receives an update that’s confusing. You tend to…",
    type: "clarity",
    options: [
      { text: "Write a short, clear explanation of what it means", style: "Architect" },
      { text: "Share a grounding message to help people feel steady", style: "Keeper" }
    ]
  },
  {
    id: 8,
    prompt: "A community member shares a lengthy update. You tend to…",
    type: "clarity",
    options: [
      { text: "Pull out the key points for others", style: "Architect" },
      { text: "Respond with a warm note of appreciation", style: "Advocate" }
    ]
  },
  {
    id: 9,
    prompt: "A conversation is getting tangled. You tend to…",
    type: "clarity",
    options: [
      { text: "Summarize the main points to help everyone regroup", style: "Architect" },
      { text: "Offer a grounding reflection to steady the tone", style: "Keeper" }
    ]
  },
  {
    id: 10,
    prompt: "Someone suggests a new way to improve a shared space. You tend to…",
    type: "insight",
    options: [
      { text: "Explore how the idea could open up new directions", style: "Visionary" },
      { text: "Consider how the idea fits into what’s already working", style: "Keeper" }
    ]
  },
  {
    id: 11,
    prompt: "People are discussing a challenge they’re unsure how to approach. You tend to…",
    type: "insight",
    options: [
      { text: "Offer a fresh angle that opens up new possibilities", style: "Visionary" },
      { text: "Name one practical thing that could help right now", style: "Stabilizer" }
    ]
  },
  {
    id: 12,
    prompt: "People are tossing out ideas. You tend to…",
    type: "insight",
    options: [
      { text: "Suggest a creative angle that opens new possibilities", style: "Visionary" },
      { text: "Point out one idea that could work well right away", style: "Stabilizer" }
    ]
  },
  {
    id: 13,
    prompt: "Someone asks what you think about a small idea. You tend to…",
    type: "insight",
    options: [
      { text: "Offer a creative possibility they may not have considered", style: "Visionary" },
      { text: "Offer a steady, practical thought they can use", style: "Stabilizer" }
    ]
  },
  {
    id: 14,
    prompt: "A newcomer joins a group you’re part of. You tend to…",
    type: "relational",
    options: [
      { text: "Offer a simple overview to help them get oriented", style: "Advocate" },
      { text: "Reach out with a gentle welcome to help them feel at ease", style: "Guardian" }
    ]
  },
  {
    id: 15,
    prompt: "A small opportunity is shared with your community. You tend to…",
    type: "relational",
    options: [
      { text: "Highlight why it might interest people", style: "Advocate" },
      { text: "Share it directly with someone who might appreciate it", style: "Connector" }
    ]
  },
  {
    id: 16,
    prompt: "A person is quiet during a group exchange. You tend to…",
    type: "relational",
    options: [
      { text: "Check in privately to help them feel included", style: "Connector" },
      { text: "Share a grounding message with the group", style: "Guardian" }
    ]
  },
  {
    id: 17,
    prompt: "A person hesitates before participating. You tend to…",
    type: "relational",
    options: [
      { text: "Give a gentle push that helps them feel ready", style: "Driver" },
      { text: "Offer reassurance that they can join in their own way", style: "Guardian" }
    ]
  },
  {
    id: 18,
    prompt: "A person shares a small personal moment. You tend to…",
    type: "relational",
    options: [
      { text: "Respond with warm encouragement", style: "Advocate" },
      { text: "Check in privately to offer gentle support", style: "Connector" }
    ]
  },
  {
    id: 19,
    prompt: "A group reaches a small milestone. You tend to…",
    type: "meaning",
    options: [
      { text: "Share a message that builds enthusiasm", style: "Advocate" },
      { text: "Name something meaningful about the moment", style: "Keeper" }
    ]
  },
  {
    id: 20,
    prompt: "A simple task needs volunteers. You tend to…",
    type: "momentum",
    options: [
      { text: "Take it on to help keep things moving", style: "Stabilizer" },
      { text: "Encourage someone who might enjoy doing it", style: "Advocate" }
    ]
  },
  {
    id: 21,
    prompt: "People seem tired or distracted. You tend to…",
    type: "momentum",
    options: [
      { text: "Share something that sparks renewed interest", style: "Advocate" },
      { text: "Help reestablish a steady pace", style: "Stabilizer" }
    ]
  },
  {
    id: 22,
    prompt: "You come across something useful for your community. You tend to…",
    type: "relational",
    options: [
      { text: "Share it widely with a short note about why it matters", style: "Advocate" },
      { text: "Send it directly to someone who might benefit", style: "Connector" }
    ]
  },
  {
    id: 23,
    prompt: "A person hesitates before joining a small activity. You tend to…",
    type: "relational",
    options: [
      { text: "Give a gentle push that helps them feel ready", style: "Driver" },
      { text: "Offer reassurance that they can join at their own pace", style: "Guardian" }
    ]
  },
  {
    id: 24,
    prompt: "A discussion is getting tangled. You tend to…",
    type: "clarity",
    options: [
      { text: "Summarize the main points to help everyone regroup", style: "Architect" },
      { text: "Offer a grounding reflection to steady the tone", style: "Keeper" }
    ]
  },
  {
    id: 25,
    prompt: "A person shares something positive. You tend to…",
    type: "meaning",
    options: [
      { text: "Celebrate it with enthusiasm", style: "Advocate" },
      { text: "Name why the moment feels meaningful", style: "Keeper" }
    ]
  },
  {
    id: 26,
    prompt: "A person is confused by a small detail. You tend to…",
    type: "clarity",
    options: [
      { text: "Explain it clearly and simply", style: "Architect" },
      { text: "Offer reassurance that confusion is normal", style: "Connector" }
    ]
  },
  {
    id: 27,
    prompt: "People are unsure how to begin. You tend to…",
    type: "clarity",
    options: [
      { text: "Offer a simple starting point", style: "Driver" },
      { text: "Share a grounding reminder to help everyone settle", style: "Guardian" }
    ]
  },
  {
    id: 28,
    prompt: "A community member mentions something they’re struggling with. You tend to…",
    type: "relational",
    options: [
      { text: "Offer a new way of looking at the situation", style: "Visionary" },
      { text: "Offer a steady, reassuring presence", style: "Stabilizer" }
    ]
  },
  {
    id: 29,
    prompt: "A shared resource feels overwhelming. You tend to…",
    type: "clarity",
    options: [
      { text: "Simplify it into a more usable format", style: "Architect" },
      { text: "Highlight one part that might be especially helpful", style: "Connector" }
    ]
  },
  {
    id: 30,
    prompt: "A person asks how to approach a small decision. You tend to…",
    type: "clarity",
    options: [
      { text: "Suggest a simple next step they can take", style: "Driver" },
      { text: "Share a thoughtful reflection that might help them choose", style: "Guardian" }
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
    Guardian: "Your Guardian side helps you clarify boundaries and protect group tone. You bring structure shaped by care. You help groups understand how to move safely."
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
    Driver: "Your Driver side helps you protect people while moving things forward. You bring safety shaped by direction. You help groups advance without losing emotional grounding.",
    Advocate: "Your Advocate side helps you encourage participation gently and warmly. You bring safety shaped by enthusiasm. You help groups feel supported and invited.",
    Visionary: "Your Visionary side helps you introduce new ideas in ways that feel safe. You bring protection shaped by possibility. You help groups explore without overwhelm.",
    Stabilizer: "Your Stabilizer side helps you protect people with steady, ongoing care. You bring safety shaped by reliability. You help groups feel consistently supported.",
    Architect: "Your Architect side helps you clarify boundaries and protect tone with understanding. You bring safety shaped by structure. You help groups navigate sensitive moments clearly.",
    Connector: "Your Connector side helps you protect people with relational intuition. You bring safety shaped by care. You help groups feel emotionally secure.",
    Keeper: "Your Keeper side helps you protect both people and purpose. You bring safety shaped by meaning. You help groups stay grounded in what matters most."
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
    Guardian: "You clarify boundaries and protect tone. You help groups navigate sensitive moments with structure and steadiness."
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
