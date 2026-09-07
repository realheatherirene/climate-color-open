/* ==========================================================================
   Climate Color Quiz — Data Engine (Styles, Questions, and Syntheses)
   ========================================================================== */

export const styles = {
    Driver: { name: "Driver", axis: "Pace", color: "#E24A3B" },
    Stabilizer: { name: "Stabilizer", axis: "Pace", color: "#22C55E" },
    Advocate: { name: "Advocate", axis: "People", color: "#E88D34" },
    Connector: { name: "Connector", axis: "People", color: "#06B6D4" },
    Architect: { name: "Architect", axis: "Place", color: "#3B82F6" },
    Guardian: { name: "Guardian", axis: "Place", color: "#64748B" },
    Visionary: { name: "Visionary", axis: "Purpose", color: "#D65BB1" },
    Keeper: { name: "Keeper", axis: "Purpose", color: "#8B5CF6" }
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
        prompt: "When facing a systemic climate bottleneck, your first instinct is to:",
        options: [
            { text: "Push for an immediate, high-impact pilot project to force momentum.", style: "Driver" },
            { text: "Reinforce existing foundations to ensure long-term stability and safety.", style: "Stabilizer" }
        ]
    },
    {
        axis: "People",
        prompt: "How do you prefer to influence change within your community?",
        options: [
            { text: "Loudly advocate, protest, and demand accountability from decision-makers.", style: "Advocate" },
            { text: "Connect diverse groups, bridging gaps to foster collaboration.", style: "Connector" }
        ]
    },
    {
        axis: "Place",
        prompt: "When looking at a local environmental challenge, you focus on:",
        options: [
            { text: "Designing structural, technical, or systemic blueprints to solve it.", style: "Architect" },
            { text: "Guarding and defending the existing natural habitat from harm.", style: "Guardian" }
        ]
    },
    {
        axis: "Purpose",
        prompt: "What drives your long-term dedication to climate action?",
        options: [
            { text: "Imagining and prototyping bold, alternative societal futures.", style: "Visionary" },
            { text: "Preserving cultural wisdom, ecological history, and continuity.", style: "Keeper" }
        ]
    },
    {
        axis: "Pace",
        prompt: "In a fast-moving crisis, what is your approach?",
        options: [
            { text: "Accelerate solutions quickly; speed is essential to survival.", style: "Driver" },
            { text: "Slow down, secure the perimeter, and safeguard critical nodes.", style: "Stabilizer" }
        ]
    },
    {
        axis: "People",
        prompt: "When organizing an initiative, your priority is:",
        options: [
            { text: "Mobilizing public pressure and shifting cultural narratives outward.", style: "Advocate" },
            { text: "Weaving deep, interpersonal relationships among participants.", style: "Connector" }
        ]
    },
    {
        axis: "Place",
        prompt: "Your relationship with your physical environment is best described as:",
        options: [
            { text: "Building and constructing infrastructure that minimizes impact.", style: "Architect" },
            { text: "Defending and watching over wild or vulnerable terrain.", style: "Guardian" }
        ]
    },
    {
        axis: "Purpose",
        prompt: "How do you view the relationship between past and future?",
        options: [
            { text: "We must transcend current paradigms to invent entirely new systems.", style: "Visionary" },
            { text: "We must honor ancestral knowledge and maintain continuity across generations.", style: "Keeper" }
        ]
    }
];
