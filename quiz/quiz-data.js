/* ==========================================================================
   QUIZ DATA: Single Source of Truth for Quiz Questions & Synthesis
   ========================================================================== */

export const STYLE_KEYS = Object.freeze({
  DRIVER: "Driver",
  ADVOCATE: "Advocate",
  VISIONARY: "Visionary",
  STABILIZER: "Stabilizer",
  ARCHITECT: "Architect",
  KEEPER: "Keeper",
  CONNECTOR: "Connector",
  GUARDIAN: "Guardian"
});

export const styles = {
  [STYLE_KEYS.DRIVER]: { 
    color: "var(--driver-color, #DC2626)",[cite: 1, 2]
    rgb: "220, 38, 38",[cite: 2]
    slug: "red",[cite: 2]
    theme: "Action & Pace",[cite: 2]
    pAnchor: "PACE",[cite: 2]
    identity: "You are the spark of momentum in climate stewardship. When faced with urgency, you step forward to mobilize resources, lead direct efforts, and break through inertia.",[cite: 2]
    behavior: "You thrive on clear goals, decisive leadership, and tangible outcomes. You naturally push projects across the finish line when others get stuck in debate.",[cite: 2]
    action: "Your gift shines when taking immediate action, launching campaigns, and rallying people around urgent milestones.",[cite: 2]
    watchouts: "Remember to slow down occasionally to ensure team alignment and prevent burnout.",[cite: 2]
    description: "Action-oriented and decisive, driving rapid progress and accountability."[cite: 2]
  },
  [STYLE_KEYS.ADVOCATE]: { 
    color: "var(--advocate-color, #EA580C)",[cite: 1, 2]
    rgb: "234, 88, 12",[cite: 2]
    slug: "orange",[cite: 2]
    theme: "People & Justice",[cite: 2]
    pAnchor: "PEOPLE",[cite: 2]
    identity: "You are the voice for systemic change and equity. You center frontline experiences, challenge unfair policies, and champion human rights in climate solutions.",[cite: 2]
    behavior: "You hold institutions accountable and ensure that no community is left out of environmental protection and policy decisions.",[cite: 2]
    action: "Your gift shines when speaking out at public forums, writing policy proposals, and organizing community campaigns.",[cite: 2]
    watchouts: "Guard against cynicism by celebrating small wins and nurturing supportive partnerships.",[cite: 2]
    description: "Vocal and community-focused, mobilizing support and empowering voices."[cite: 2]
  },
  [STYLE_KEYS.VISIONARY]: { 
    color: "var(--visionary-color, #E1B809)",[cite: 1, 2]
    rgb: "225, 184, 9",
    slug: "yellow",[cite: 2]
    theme: "Purpose & Possibility",[cite: 2]
    pAnchor: "PURPOSE",[cite: 2]
    identity: "You are the beacon of new paradigms. You imagine restored, thriving futures and inspire others to break free from old, limiting assumptions.",[cite: 2]
    behavior: "You think far ahead, connecting creative ideas across disciplines to craft bold, uplifting long-term narratives.",[cite: 2]
    action: "Your gift shines when framing inspiring stories, designing future scenarios, and opening people’s eyes to radical possibilities.",[cite: 2]
    watchouts: "Pair your big-picture visions with concrete next steps so projects gain grounding.",[cite: 2]
    description: "Forward-thinking and innovative, mapping future possibilities and bold ideas."[cite: 2]
  },
  [STYLE_KEYS.STABILIZER]: { 
    color: "var(--stabilizer-color, #16A34A)",[cite: 1, 2]
    rgb: "22, 163, 74",[cite: 2]
    slug: "green",[cite: 2]
    theme: "Pace & Systems",[cite: 2]
    pAnchor: "PACE",[cite: 2]
    identity: "You are the backbone of sustainable operations. You turn chaotic energy into smooth, dependable processes that keep climate initiatives running for years.",[cite: 2]
    behavior: "You focus on reliability, clear protocols, and steady progress, making sure community work doesn't burn out or break down.",[cite: 2]
    action: "Your gift shines when building operational workflows, managing logistics, and keeping projects grounded and predictable.",[cite: 2]
    watchouts: "Stay open to rapid pivots and strategic risks when situations evolve quickly.",[cite: 2]
    description: "Grounded and steady, ensuring sustainable operations and reliable execution."[cite: 2]
  },
  [STYLE_KEYS.ARCHITECT]: { 
    color: "var(--architect-color, #0284C7)",[cite: 1, 2]
    rgb: "2, 132, 199",[cite: 2]
    slug: "blue",[cite: 2]
    theme: "Place & Design",[cite: 2]
    pAnchor: "PLACE",[cite: 2]
    identity: "You are the designer of resilient infrastructure. You build analytical frameworks, technological tools, and spatial designs that prepare systems for climate realities.",[cite: 2]
    behavior: "You analyze data, model ecological flows, and design durable systems that stand up to environmental change.",[cite: 2]
    action: "Your gift shines when constructing framework blueprints, optimizing energy systems, and designing spatial resilience.",[cite: 2]
    watchouts: "Remember to include community feedback early so designs fit human needs.",[cite: 2]
    description: "Systems-minded and analytical, designing frameworks and scalable structures."[cite: 2]
  },
  [STYLE_KEYS.KEEPER]: { 
    color: "var(--keeper-color, #4F46E5)",[cite: 1, 2]
    rgb: "79, 70, 229",[cite: 2]
    slug: "indigo",[cite: 2]
    theme: "Purpose & Wisdom",[cite: 2]
    pAnchor: "PURPOSE",[cite: 2]
    identity: "You are the guardian of memory and truth. You preserve historical knowledge, institutional principles, and cultural heritage to guide present action.",[cite: 2]
    behavior: "You ground modern climate work in time-tested wisdom, ensuring initiatives maintain integrity and build on past lessons.",[cite: 2]
    action: "Your gift shines when holding space for reflection, archiving stories, and keeping organizations aligned with core values.",[cite: 2]
    watchouts: "Balance reverence for tradition with flexibility for new innovations.",[cite: 2]
    description: "Values-driven and protective, preserving core missions and ancestral knowledge."[cite: 2]
  },
  [STYLE_KEYS.CONNECTOR]: { 
    color: "var(--connector-color, #9333EA)",[cite: 1, 2]
    rgb: "147, 51, 234",[cite: 2]
    slug: "purple",[cite: 2]
    theme: "People & Bridge-Building",[cite: 2]
    pAnchor: "PEOPLE",[cite: 2]
    identity: "You are the weaver of trust and collaboration. You build relationships across diverse groups, turning isolated efforts into strong, supportive networks.",[cite: 2]
    behavior: "You excel at listening, mediating dialogue, and bringing people together around shared goals and mutual care.",[cite: 2]
    action: "Your gift shines when hosting collaborative gatherings, facilitating dialogues, and building multi-organization coalitions.",[cite: 2]
    watchouts: "Set healthy personal boundaries to avoid taking on everyone else's emotional weight.",[cite: 2]
    description: "Relational and integrative, bridging silos and weaving networks together."[cite: 2]
  },
  [STYLE_KEYS.GUARDIAN]: { 
    color: "var(--guardian-color, #D946EF)",[cite: 1, 2]
    rgb: "217, 70, 239",[cite: 2]
    slug: "violet",[cite: 2]
    theme: "Place & Care",[cite: 2]
    pAnchor: "PLACE",[cite: 2]
    identity: "You are the protector of local ecosystems and community sanctuaries. You nurture habitats, care for living spaces, and steward the land with direct affection.",[cite: 2]
    behavior: "You focus on direct environmental stewardship, ecosystem preservation, and maintaining safe, nourishing community grounds.",[cite: 2]
    action: "Your gift shines when tending community gardens, restoring local habitats, and protecting neighborhood spaces.",[cite: 2]
    watchouts: "Delegate tasks to others so you don't carry the physical burden of care alone.",[cite: 2]
    description: "Steward-focused and protective of ecosystems, places, and vulnerable assets."[cite: 2]
  }
};

export const secondarySyntheses = {
  [STYLE_KEYS.DRIVER]: {
    [STYLE_KEYS.ADVOCATE]: "Urgent Mobilizer — Combines rapid execution with strong grassroots call-to-action.",[cite: 2]
    [STYLE_KEYS.VISIONARY]: "Strategic Trailblazer — Pairs high-speed action with big-picture innovation.",[cite: 2]
    [STYLE_KEYS.STABILIZER]: "Paced Operator — Balances urgency with operational resilience.",[cite: 2]
    [STYLE_KEYS.ARCHITECT]: "Systemic Catalyst — Drives fast-paced execution built on rigorous frameworks.",[cite: 2]
    [STYLE_KEYS.KEEPER]: "Mission Vanguard — Pushes aggressive goals while safeguarding core integrity.",[cite: 2]
    [STYLE_KEYS.CONNECTOR]: "Network Activator — Moves fast to bridge key people and accelerate movement.",[cite: 2]
    [STYLE_KEYS.GUARDIAN]: "Protective Force — Rapidly defends ecosystems and vulnerable communities."[cite: 2]
  },
  [STYLE_KEYS.ADVOCATE]: {
    [STYLE_KEYS.DRIVER]: "Campaign Catalyst — Turns community energy into swift, decisive action.",[cite: 2]
    [STYLE_KEYS.VISIONARY]: "Movement Composer — Champions bold future ideals through collective power.",[cite: 2]
    [STYLE_KEYS.STABILIZER]: "Community Anchor — Builds steady, trust-based support networks.",[cite: 2]
    [STYLE_KEYS.ARCHITECT]: "Structural Champion — Demands policy and structural fixes for human needs.",[cite: 2]
    [STYLE_KEYS.KEEPER]: "Cultural Shield — Elevates marginalized voices to protect tradition and values.",[cite: 2]
    [STYLE_KEYS.CONNECTOR]: "Coalition Builder — Weaves disparate groups into unified advocacy.",[cite: 2]
    [STYLE_KEYS.GUARDIAN]: "Bioregional Voice — Speaks up aggressively for local environmental protection."[cite: 2]
  },
  [STYLE_KEYS.VISIONARY]: {
    [STYLE_KEYS.DRIVER]: "Pioneering Force — Translates futuristic concepts into rapid deployment.",[cite: 2]
    [STYLE_KEYS.ADVOCATE]: "Inspirational Voice — Paints compelling futures that inspire group action.",[cite: 2]
    [STYLE_KEYS.STABILIZER]: "Grounded Futurist — Connects big-picture dreams to practical implementation.",[cite: 2]
    [STYLE_KEYS.ARCHITECT]: "Systemic Designer — Reimagines whole systems with innovative blueprints.",[cite: 2]
    [STYLE_KEYS.KEEPER]: "Legacy Strategist — Aligns long-term future horizons with timeless core values.",[cite: 2]
    [STYLE_KEYS.CONNECTOR]: "Ecosystem Weaver — Connects diverse innovators to seed future movements.",[cite: 2]
    [STYLE_KEYS.GUARDIAN]: "Regenerative Designer — Envisions future ecosystems rooted in place defense."[cite: 2]
  },
  [STYLE_KEYS.STABILIZER]: {
    [STYLE_KEYS.DRIVER]: "Pragmatic Executor — Tempers rapid pushes with steady, repeatable systems.",[cite: 2]
    [STYLE_KEYS.ADVOCATE]: "Reliable Ally — Provides steady backing to keep community efforts sustained.",[cite: 2]
    [STYLE_KEYS.VISIONARY]: "Practical Dreamer — Grounds visionary concepts into viable roadmaps.",[cite: 2]
    [STYLE_KEYS.ARCHITECT]: "Operational Engineer — Optimizes logistics and process stability.",[cite: 2]
    [STYLE_KEYS.KEEPER]: "Institutional Anchor — Protects foundational practices through routine.",[cite: 2]
    [STYLE_KEYS.CONNECTOR]: "Relational Glue — Maintains steady, supportive ties across working groups.",[cite: 2]
    [STYLE_KEYS.GUARDIAN]: "Habitat Maintainer — Ensures long-term, consistent care for local environments."[cite: 2]
  },
  [STYLE_KEYS.ARCHITECT]: {
    [STYLE_KEYS.DRIVER]: "Systemic Operator — Builds high-throughput structures for quick results.",[cite: 2]
    [STYLE_KEYS.ADVOCATE]: "Policy Strategist — Structures systemic pathways for advocacy goals.",[cite: 2]
    [STYLE_KEYS.VISIONARY]: "Framework Innovator — Creates flexible architectures for future models.",[cite: 2]
    [STYLE_KEYS.STABILIZER]: "Process Optimizer — Builds durable, frictionless organizational logic.",[cite: 2]
    [STYLE_KEYS.KEEPER]: "Protocol Custodian — Embeds ethical values directly into systems design.",[cite: 2]
    [STYLE_KEYS.CONNECTOR]: "Network Architect — Designs platforms that enable seamless cross-pollination.",[cite: 2]
    [STYLE_KEYS.GUARDIAN]: "Spatial Analyst — Maps structural solutions for land and asset preservation."[cite: 2]
  },
  [STYLE_KEYS.KEEPER]: {
    [STYLE_KEYS.DRIVER]: "Principled Operator — Drives forward while holding non-negotiable standards.",[cite: 2]
    [STYLE_KEYS.ADVOCATE]: "Ethical Champion — Protects core human values within public movements.",[cite: 2]
    [STYLE_KEYS.VISIONARY]: "Ancestral Futurist — Uses historical wisdom to guide future directional vision.",[cite: 2]
    [STYLE_KEYS.STABILIZER]: "Steady Custodian — Safeguards resources and identity with calm consistency.",[cite: 2]
    [STYLE_KEYS.ARCHITECT]: "Ethical Modeler — Encodes core principles directly into systems architecture.",[cite: 2]
    [STYLE_KEYS.CONNECTOR]: "Relational Guardian — Preserves trust and relational integrity in networks.",[cite: 2]
    [STYLE_KEYS.GUARDIAN]: "Heritage Steward — Protects cultural and ecological legacy in place."[cite: 2]
  },
  [STYLE_KEYS.CONNECTOR]: {
    [STYLE_KEYS.DRIVER]: "Relationship Engine — Mobilizes networks quickly to meet immediate needs.",[cite: 2]
    [STYLE_KEYS.ADVOCATE]: "Grassroots Weaver — Amplifies collective advocacy by connecting allies.",[cite: 2]
    [STYLE_KEYS.VISIONARY]: "Cross-Disciplinary Bridge — Brings disparate visionaries into shared spaces.",[cite: 2]
    [STYLE_KEYS.STABILIZER]: "Network Stabilizer — Maintains health and trust across multi-partner efforts.",[cite: 2]
    [STYLE_KEYS.ARCHITECT]: "Integration Specialist — Links complex systems and teams together smoothly.",[cite: 2]
    [STYLE_KEYS.KEEPER]: "Trust Custodian — Connects people while safeguarding core relational values.",[cite: 2]
    [STYLE_KEYS.GUARDIAN]: "Bioregional Synthesizer — Unites local stewards around ecosystem defense."[cite: 2]
  },
  [STYLE_KEYS.GUARDIAN]: {
    [STYLE_KEYS.DRIVER]: "Rapid Responder — Deploys swift protective measures for vulnerable assets.",[cite: 2]
    [STYLE_KEYS.ADVOCATE]: "Defender of the Commons — Mobilizes public support for local preservation.",[cite: 2]
    [STYLE_KEYS.VISIONARY]: "Regenerative Guardian — Protects current resources while preparing future ecology.",[cite: 2]
    [STYLE_KEYS.STABILIZER]: "Site Steward — Maintains steady, daily vigilance over habitats and systems.",[cite: 2]
    [STYLE_KEYS.ARCHITECT]: "Spatial Guardian — Uses analytical models to map and protect critical areas.",[cite: 2]
    [STYLE_KEYS.KEEPER]: "Bioregional Custodian — Preserves local ecosystems using traditional wisdom.",[cite: 2]
    [STYLE_KEYS.CONNECTOR]: "Community Defender — Coordinates local networks around environmental defense."[cite: 2]
  }
};

export function getSecondarySynthesis(primaryKey, secondaryKey) {
  if (primaryKey === secondaryKey) {
    return `Deeply aligned in ${primaryKey} stewardship principles.`;
  }
  return secondarySyntheses[primaryKey]?.[secondaryKey] || 
         secondarySyntheses[secondaryKey]?.[primaryKey] || 
         `Combines ${primaryKey} leadership with ${secondaryKey} perspective.`;
}

export const questions = [
  // --- PACE AXIS (1-4) ---
  {
    id: 1,[cite: 2]
    axis: "Pace",[cite: 2]
    prompt: "When urgent challenges arise, your default approach is to:",[cite: 2]
    options: [
      { text: "Act immediately to momentum-build and resolve issues fast.", style: STYLE_KEYS.DRIVER },[cite: 2]
      { text: "Assess steady operational steps to keep execution reliable.", style: STYLE_KEYS.STABILIZER }[cite: 2]
    ]
  },
  {
    id: 2,[cite: 2]
    axis: "Pace",[cite: 2]
    prompt: "In project timelines, you prioritize:",[cite: 2]
    options: [
      { text: "Speed to delivery, iterating quickly on the move.", style: STYLE_KEYS.DRIVER },[cite: 2]
      { text: "Sustainable rhythm, minimizing burn and maintaining quality.", style: STYLE_KEYS.STABILIZER }[cite: 2]
    ]
  },
  {
    id: 3,[cite: 2]
    axis: "Pace",[cite: 2]
    prompt: "When facing roadblocks, you prefer to:",[cite: 2]
    options: [
      { text: "Push directly through barriers to force progress.", style: STYLE_KEYS.DRIVER },[cite: 2]
      { text: "Stabilize current workflows and find sustainable workarounds.", style: STYLE_KEYS.STABILIZER }[cite: 2]
    ]
  },
  {
    id: 4,[cite: 2]
    axis: "Pace",[cite: 2]
    prompt: "Your preferred team dynamic focuses on:",[cite: 2]
    options: [
      { text: "High-energy urgency and rapid milestones.", style: STYLE_KEYS.DRIVER },[cite: 2]
      { text: "Consistent cadence and predictable deliverables.", style: STYLE_KEYS.STABILIZER }[cite: 2]
    ]
  },
  
  // --- PEOPLE AXIS (5-8) ---
  {
    id: 5,[cite: 2]
    axis: "People",[cite: 2]
    prompt: "To create impact, you focus most on:",[cite: 2]
    options: [
      { text: "Rallying communities and amplifying voices for action.", style: STYLE_KEYS.ADVOCATE },[cite: 2]
      { text: "Connecting diverse individuals and bridging disparate silos.", style: STYLE_KEYS.CONNECTOR }[cite: 2]
    ]
  },
  {
    id: 6,[cite: 2]
    axis: "People",[cite: 2]
    prompt: "When building momentum, you emphasize:",[cite: 2]
    options: [
      { text: "Vocal public messaging and passionate calls-to-action.", style: STYLE_KEYS.ADVOCATE },[cite: 2]
      { text: "Relational trust and inter-organizational alignment.", style: STYLE_KEYS.CONNECTOR }[cite: 2]
    ]
  },
  {
    id: 7,[cite: 2]
    axis: "People",[cite: 2]
    prompt: "In collaborative settings, your strength is:",[cite: 2]
    options: [
      { text: "Mobilizing collective energy around common causes.", style: STYLE_KEYS.ADVOCATE },[cite: 2]
      { text: "Cross-pollinating ideas and building collaborative networks.", style: STYLE_KEYS.CONNECTOR }[cite: 2]
    ]
  },
  {
    id: 8,[cite: 2]
    axis: "People",[cite: 2]
    prompt: "You measure relational success by:",[cite: 2]
    options: [
      { text: "The strength of public participation and advocacy movement.", style: STYLE_KEYS.ADVOCATE },[cite: 2]
      { text: "The depth and connectivity of partner relationships.", style: STYLE_KEYS.CONNECTOR }[cite: 2]
    ]
  },

  // --- PLACE AXIS (9-12) ---
  {
    id: 9,[cite: 2]
    axis: "Place",[cite: 2]
    prompt: "When structuring solutions, your lens centers on:",[cite: 2]
    options: [
      { text: "Designing systems, metrics, and scalable frameworks.", style: STYLE_KEYS.ARCHITECT },[cite: 2]
      { text: "Protecting local land, ecosystems, and physical commons.", style: STYLE_KEYS.GUARDIAN }[cite: 2]
    ]
  },
  {
    id: 10,[cite: 2]
    axis: "Place",[cite: 2]
    prompt: "Your analytical approach focuses primary attention on:",[cite: 2]
    options: [
      { text: "Process efficiency and systemic infrastructure.", style: STYLE_KEYS.ARCHITECT },[cite: 2]
      { text: "Bioregional health and ecological stewardship.", style: STYLE_KEYS.GUARDIAN }[cite: 2]
    ]
  },
  {
    id: 11,[cite: 2]
    axis: "Place",[cite: 2]
    prompt: "When solving problems, you ask:",[cite: 2]
    options: [
      { text: "'What system or framework will scale this solution?'", style: STYLE_KEYS.ARCHITECT },[cite: 2]
      { text: "'How does this protect and restore our local habitat?'", style: STYLE_KEYS.GUARDIAN }[cite: 2]
    ]
  },
  {
    id: 12,[cite: 2]
    axis: "Place",[cite: 2]
    prompt: "Your preferred domain of intervention is:",[cite: 2]
    options: [
      { text: "Organizational blueprints and policy/technical architecture.", style: STYLE_KEYS.ARCHITECT },[cite: 2]
      { text: "On-the-ground ecological defense and place preservation.", style: STYLE_KEYS.GUARDIAN }[cite: 2]
    ]
  },

  // --- PURPOSE AXIS (13-16) ---
  {
    id: 13,[cite: 2]
    axis: "Purpose",[cite: 2]
    prompt: "When shaping long-term vision, you focus on:",[cite: 2]
    options: [
      { text: "Pioneering bold, future-oriented possibilities.", style: STYLE_KEYS.VISIONARY },[cite: 2]
      { text: "Safeguarding core values, ethics, and foundational wisdom.", style: STYLE_KEYS.KEEPER }[cite: 2]
    ]
  },
  {
    id: 14,[cite: 2]
    axis: "Purpose",[cite: 2]
    prompt: "Your decision-making guidepost is:",[cite: 2]
    options: [
      { text: "Transformative innovation and future horizons.", style: STYLE_KEYS.VISIONARY },[cite: 2]
      { text: "Principled integrity and historic/ancestral legacy.", style: STYLE_KEYS.KEEPER }[cite: 2]
    ]
  },
  {
    id: 15,[cite: 2]
    axis: "Purpose",[cite: 2]
    prompt: "In times of shifting direction, you advocate for:",[cite: 2]
    options: [
      { text: "Reimagining current models with fresh paradigms.", style: STYLE_KEYS.VISIONARY },[cite: 2]
      { text: "Anchoring decisions back into core mission standards.", style: STYLE_KEYS.KEEPER }[cite: 2]
    ]
  },
  {
    id: 16,[cite: 2]
    axis: "Purpose",[cite: 2]
    prompt: "You bring focus to strategic discussions by highlighting:",[cite: 2]
    options: [
      { text: "What could be built for tomorrow.", style: STYLE_KEYS.VISIONARY },[cite: 2]
      { text: "What must be protected and honored from yesterday.", style: STYLE_KEYS.KEEPER }[cite: 2]
    ]
  }
];
