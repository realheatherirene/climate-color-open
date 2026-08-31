/* ==========================================================================
   QUIZ DATA: Single Source of Truth for Quiz Questions & Synthesis
   ========================================================================== */

export const styles = {
  Driver: { 
    color: "var(--driver-color, #DC2626)",
    rgb: "220, 38, 38",
    slug: "red",
    theme: "Action & Pace",
    pAnchor: "PACE",
    identity: "You are the spark of momentum in climate stewardship. When faced with urgency, you step forward to mobilize resources, lead direct efforts, and break through inertia.",
    behavior: "You thrive on clear goals, decisive leadership, and tangible outcomes. You naturally push projects across the finish line when others get stuck in debate.",
    action: "Your gift shines when taking immediate action, launching campaigns, and rallying people around urgent milestones.",
    watchouts: "Remember to slow down occasionally to ensure team alignment and prevent burnout.",
    description: "Action-oriented and decisive, driving rapid progress and accountability." 
  },
  Advocate: { 
    color: "var(--advocate-color, #EA580C)",
    rgb: "234, 88, 12",
    slug: "orange",
    theme: "People & Justice",
    pAnchor: "PEOPLE",
    identity: "You are the voice for systemic change and equity. You center frontline experiences, challenge unfair policies, and champion human rights in climate solutions.",
    behavior: "You hold institutions accountable and ensure that no community is left out of environmental protection and policy decisions.",
    action: "Your gift shines when speaking out at public forums, writing policy proposals, and organizing community campaigns.",
    watchouts: "Guard against cynicism by celebrating small wins and nurturing supportive partnerships.",
    description: "Vocal and community-focused, mobilizing support and empowering voices." 
  },
  Visionary: { 
    color: "var(--visionary-color, #E1B809)",
    rgb: "202, 138, 4",
    slug: "yellow",
    theme: "Purpose & Possibility",
    pAnchor: "PURPOSE",
    identity: "You are the beacon of new paradigms. You imagine restored, thriving futures and inspire others to break free from old, limiting assumptions.",
    behavior: "You think far ahead, connecting creative ideas across disciplines to craft bold, uplifting long-term narratives.",
    action: "Your gift shines when framing inspiring stories, designing future scenarios, and opening people’s eyes to radical possibilities.",
    watchouts: "Pair your big-picture visions with concrete next steps so projects gain grounding.",
    description: "Forward-thinking and innovative, mapping future possibilities and bold ideas." 
  },
  Stabilizer: { 
    color: "var(--stabilizer-color, #16A34A)",
    rgb: "22, 163, 74",
    slug: "green",
    theme: "Pace & Systems",
    pAnchor: "PACE",
    identity: "You are the backbone of sustainable operations. You turn chaotic energy into smooth, dependable processes that keep climate initiatives running for years.",
    behavior: "You focus on reliability, clear protocols, and steady progress, making sure community work doesn't burn out or break down.",
    action: "Your gift shines when building operational workflows, managing logistics, and keeping projects grounded and predictable.",
    watchouts: "Stay open to rapid pivots and strategic risks when situations evolve quickly.",
    description: "Grounded and steady, ensuring sustainable operations and reliable execution." 
  },
  Architect: { 
    color: "var(--architect-color, #0284C7)",
    rgb: "2, 132, 199",
    slug: "blue",
    theme: "Place & Design",
    pAnchor: "PLACE",
    identity: "You are the designer of resilient infrastructure. You build analytical frameworks, technological tools, and spatial designs that prepare systems for climate realities.",
    behavior: "You analyze data, model ecological flows, and design durable systems that stand up to environmental change.",
    action: "Your gift shines when constructing framework blueprints, optimizing energy systems, and designing spatial resilience.",
    watchouts: "Remember to include community feedback early so designs fit human needs.",
    description: "Systems-minded and analytical, designing frameworks and scalable structures." 
  },
  Keeper: { 
    color: "var(--keeper-color, #4F46E5)",
    rgb: "79, 70, 229",
    slug: "indigo",
    theme: "Purpose & Wisdom",
    pAnchor: "PURPOSE",
    identity: "You are the guardian of memory and truth. You preserve historical knowledge, institutional principles, and cultural heritage to guide present action.",
    behavior: "You ground modern climate work in time-tested wisdom, ensuring initiatives maintain integrity and build on past lessons.",
    action: "Your gift shines when holding space for reflection, archiving stories, and keeping organizations aligned with core values.",
    watchouts: "Balance reverence for tradition with flexibility for new innovations.",
    description: "Values-driven and protective, preserving core missions and ancestral knowledge." 
  },
  Connector: { 
    color: "var(--connector-color, #9333EA)",
    rgb: "147, 51, 234",
    slug: "purple",
    theme: "People & Bridge-Building",
    pAnchor: "PEOPLE",
    identity: "You are the weaver of trust and collaboration. You build relationships across diverse groups, turning isolated efforts into strong, supportive networks.",
    behavior: "You excel at listening, mediating dialogue, and bringing people together around shared goals and mutual care.",
    action: "Your gift shines when hosting collaborative gatherings, facilitating dialogues, and building multi-organization coalitions.",
    watchouts: "Set healthy personal boundaries to avoid taking on everyone else's emotional weight.",
    description: "Relational and integrative, bridging silos and weaving networks together." 
  },
  Guardian: { 
    color: "var(--guardian-color, #D946EF)",
    rgb: "217, 70, 239",
    slug: "violet",
    theme: "Place & Care",
    pAnchor: "PLACE",
    identity: "You are the protector of local ecosystems and community sanctuaries. You nurture habitats, care for living spaces, and steward the land with direct affection.",
    behavior: "You focus on direct environmental stewardship, ecosystem preservation, and maintaining safe, nourishing community grounds.",
    action: "Your gift shines when tending community gardens, restoring local habitats, and protecting neighborhood spaces.",
    watchouts: "Delegate tasks to others so you don't carry the physical burden of care alone.",
    description: "Steward-focused and protective of ecosystems, places, and vulnerable assets." 
  }
};

export const secondarySyntheses = {
  Driver: {
    Advocate: "Urgent Mobilizer — Combines rapid execution with strong grassroots call-to-action.",
    Visionary: "Strategic Trailblazer — Pairs high-speed action with big-picture innovation.",
    Stabilizer: "Paced Operator — Balances urgency with operational resilience.",
    Architect: "Systemic Catalyst — Drives fast-paced execution built on rigorous frameworks.",
    Keeper: "Mission Vanguard — Pushes aggressive goals while safeguarding core integrity.",
    Connector: "Network Activator — Moves fast to bridge key people and accelerate movement.",
    Guardian: "Protective Force — Rapidly defends ecosystems and vulnerable communities."
  },
  Advocate: {
    Driver: "Campaign Catalyst — Turns community energy into swift, decisive action.",
    Visionary: "Movement Composer — Champions bold future ideals through collective power.",
    Stabilizer: "Community Anchor — Builds steady, trust-based support networks.",
    Architect: "Structural Champion — Demands policy and structural fixes for human needs.",
    Keeper: "Cultural Shield — Elevates marginalized voices to protect tradition and values.",
    Connector: "Coalition Builder — Weaves disparate groups into unified advocacy.",
    Guardian: "Bioregional Voice — Speaks up aggressively for local environmental protection."
  },
  Visionary: {
    Driver: "Pioneering Force — Translates futuristic concepts into rapid deployment.",
    Advocate: "Inspirational Voice — Paints compelling futures that inspire group action.",
    Stabilizer: "Grounded Futurist — Connects big-picture dreams to practical implementation.",
    Architect: "Systemic Designer — Reimagines whole systems with innovative blueprints.",
    Keeper: "Legacy Strategist — Aligns long-term future horizons with timeless core values.",
    Connector: "Ecosystem Weaver — Connects diverse innovators to seed future movements.",
    Guardian: "Regenerative Designer — Envisions future ecosystems rooted in place defense."
  },
  Stabilizer: {
    Driver: "Pragmatic Executor — Tempers rapid pushes with steady, repeatable systems.",
    Advocate: "Reliable Ally — Provides steady backing to keep community efforts sustained.",
    Visionary: "Practical Dreamer — Grounds visionary concepts into viable roadmaps.",
    Architect: "Operational Engineer — Optimizes logistics and process stability.",
    Keeper: "Institutional Anchor — Protects foundational practices through routine.",
    Connector: "Relational Glue — Maintains steady, supportive ties across working groups.",
    Guardian: "Habitat Maintainer — Ensures long-term, consistent care for local environments."
  },
  Architect: {
    Driver: "Systemic Operator — Builds high-throughput structures for quick results.",
    Advocate: "Policy Strategist — Structures systemic pathways for advocacy goals.",
    Visionary: "Framework Innovator — Creates flexible architectures for future models.",
    Stabilizer: "Process Optimizer — Builds durable, frictionless organizational logic.",
    Keeper: "Protocol Custodian — Embeds ethical values directly into systems design.",
    Connector: "Network Architect — Designs platforms that enable seamless cross-pollination.",
    Guardian: "Spatial Analyst — Maps structural solutions for land and asset preservation."
  },
  Keeper: {
    Driver: "Principled Operator — Drives forward while holding non-negotiable standards.",
    Advocate: "Ethical Champion — Protects core human values within public movements.",
    Visionary: "Ancestral Futurist — Uses historical wisdom to guide future directional vision.",
    Stabilizer: "Steady Custodian — Safeguards resources and identity with calm consistency.",
    Architect: "Ethical Modeler — Encodes core principles directly into systems architecture.",
    Connector: "Relational Guardian — Preserves trust and relational integrity in networks.",
    Guardian: "Heritage Steward — Protects cultural and ecological legacy in place."
  },
  Connector: {
    Driver: "Relationship Engine — Mobilizes networks quickly to meet immediate needs.",
    Advocate: "Grassroots Weaver — Amplifies collective advocacy by connecting allies.",
    Visionary: "Cross-Disciplinary Bridge — Brings disparate visionaries into shared spaces.",
    Stabilizer: "Network Stabilizer — Maintains health and trust across multi-partner efforts.",
    Architect: "Integration Specialist — Links complex systems and teams together smoothly.",
    Keeper: "Trust Custodian — Connects people while safeguarding core relational values.",
    Guardian: "Bioregional Synthesizer — Unites local stewards around ecosystem defense."
  },
  Guardian: {
    Driver: "Rapid Responder — Deploys swift protective measures for vulnerable assets.",
    Advocate: "Defender of the Commons — Mobilizes public support for local preservation.",
    Visionary: "Regenerative Guardian — Protects current resources while preparing future ecology.",
    Stabilizer: "Site Steward — Maintains steady, daily vigilance over habitats and systems.",
    Architect: "Spatial Guardian — Uses analytical models to map and protect critical areas.",
    Keeper: "Bioregional Custodian — Preserves local ecosystems using traditional wisdom.",
    Connector: "Community Defender — Coordinates local networks around environmental defense."
  }
};

export const questions = [
  // --- PACE AXIS (1-4) ---
  {
    id: 1,
    axis: "Pace",
    prompt: "When urgent challenges arise, your default approach is to:",
    options: [
      { text: "Act immediately to momentum-build and resolve issues fast.", style: "Driver" },
      { text: "Assess steady operational steps to keep execution reliable.", style: "Stabilizer" }
    ]
  },
  {
    id: 2,
    axis: "Pace",
    prompt: "In project timelines, you prioritize:",
    options: [
      { text: "Speed to delivery, iterating quickly on the move.", style: "Driver" },
      { text: "Sustainable rhythm, minimizing burn and maintaining quality.", style: "Stabilizer" }
    ]
  },
  {
    id: 3,
    axis: "Pace",
    prompt: "When facing roadblocks, you prefer to:",
    options: [
      { text: "Push directly through barriers to force progress.", style: "Driver" },
      { text: "Stabilize current workflows and find sustainable workarounds.", style: "Stabilizer" }
    ]
  },
  {
    id: 4,
    axis: "Pace",
    prompt: "Your preferred team dynamic focuses on:",
    options: [
      { text: "High-energy urgency and rapid milestones.", style: "Driver" },
      { text: "Consistent cadence and predictable deliverables.", style: "Stabilizer" }
    ]
  },
  
  // --- PEOPLE AXIS (5-8) ---
  {
    id: 5,
    axis: "People",
    prompt: "To create impact, you focus most on:",
    options: [
      { text: "Rallying communities and amplifying voices for action.", style: "Advocate" },
      { text: "Connecting diverse individuals and bridging disparate silos.", style: "Connector" }
    ]
  },
  {
    id: 6,
    axis: "People",
    prompt: "When building momentum, you emphasize:",
    options: [
      { text: "Vocal public messaging and passionate calls-to-action.", style: "Advocate" },
      { text: "Relational trust and inter-organizational alignment.", style: "Connector" }
    ]
  },
  {
    id: 7,
    axis: "People",
    prompt: "In collaborative settings, your strength is:",
    options: [
      { text: "Mobilizing collective energy around common causes.", style: "Advocate" },
      { text: "Cross-pollinating ideas and building collaborative networks.", style: "Connector" }
    ]
  },
  {
    id: 8,
    axis: "People",
    prompt: "You measure relational success by:",
    options: [
      { text: "The strength of public participation and advocacy movement.", style: "Advocate" },
      { text: "The depth and connectivity of partner relationships.", style: "Connector" }
    ]
  },

  // --- PLACE AXIS (9-12) ---
  {
    id: 9,
    axis: "Place",
    prompt: "When structuring solutions, your lens centers on:",
    options: [
      { text: "Designing systems, metrics, and scalable frameworks.", style: "Architect" },
      { text: "Protecting local land, ecosystems, and physical commons.", style: "Guardian" }
    ]
  },
  {
    id: 10,
    axis: "Place",
    prompt: "Your analytical approach focuses primary attention on:",
    options: [
      { text: "Process efficiency and systemic infrastructure.", style: "Architect" },
      { text: "Bioregional health and ecological stewardship.", style: "Guardian" }
    ]
  },
  {
    id: 11,
    axis: "Place",
    prompt: "When solving problems, you ask:",
    options: [
      { text: "'What system or framework will scale this solution?'", style: "Architect" },
      { text: "'How does this protect and restore our local habitat?'", style: "Guardian" }
    ]
  },
  {
    id: 12,
    axis: "Place",
    prompt: "Your preferred domain of intervention is:",
    options: [
      { text: "Organizational blueprints and policy/technical architecture.", style: "Architect" },
      { text: "On-the-ground ecological defense and place preservation.", style: "Guardian" }
    ]
  },

  // --- PURPOSE AXIS (13-16) ---
  {
    id: 13,
    axis: "Purpose",
    prompt: "When shaping long-term vision, you focus on:",
    options: [
      { text: "Pioneering bold, future-oriented possibilities.", style: "Visionary" },
      { text: "Safeguarding core values, ethics, and foundational wisdom.", style: "Keeper" }
    ]
  },
  {
    id: 14,
    axis: "Purpose",
    prompt: "Your decision-making guidepost is:",
    options: [
      { text: "Transformative innovation and future horizons.", style: "Visionary" },
      { text: "Principled integrity and historic/ancestral legacy.", style: "Keeper" }
    ]
  },
  {
    id: 15,
    axis: "Purpose",
    prompt: "In times of shifting direction, you advocate for:",
    options: [
      { text: "Reimagining current models with fresh paradigms.", style: "Visionary" },
      { text: "Anchoring decisions back into core mission standards.", style: "Keeper" }
    ]
  },
  {
    id: 16,
    axis: "Purpose",
    prompt: "You bring focus to strategic discussions by highlighting:",
    options: [
      { text: "What could be built for tomorrow.", style: "Visionary" },
      { text: "What must be protected and honored from yesterday.", style: "Keeper" }
    ]
  }
];
