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
    // ============================
    // PACE — Director vs. Stabilizer
    // ============================

    {
        axis: "Pace",
        prompt: "Cleanup day keeps getting pushed back, and folks are shrugging like, “Maybe next weekend?” What do you do?",
        options: [
            { text: "I’ll grab a rake and start a small section so people see progress.", style: "Driver" },
            { text: "I text the group: ‘I’m heading over now. Join if you can.’", style: "Driver" },
            { text: "Before we rush again, let’s figure out why this keeps stalling.", style: "Stabilizer" },
            { text: "I call a quick check‑in to sort out who’s free and what we actually have.", style: "Stabilizer" }
        ]
    },

    {
        axis: "Pace",
        prompt: "A storm knocks out power on your block. Everyone’s panicking about what to do first.",
        options: [
            { text: "I check on houses and make a quick list so we can move fast.", style: "Driver" },
            { text: "I grab flashlights and start knocking on doors.", style: "Driver" },
            { text: "Let’s slow down and make sure folks are safe before rushing.", style: "Stabilizer" },
            { text: "I set up a little porch ‘base’ so people know where to check in.", style: "Stabilizer" }
        ]
    },

    {
        axis: "Pace",
        prompt: "A neighborhood project has been ‘in planning mode’ for months. Nothing’s happening.",
        options: [
            { text: "I’ll throw together a rough first version so people have something real to react to.", style: "Driver" },
            { text: "I say, ‘Let’s pick a day and do the first step.’ Enough talking.", style: "Driver" },
            { text: "We need to slow down and figure out what’s blocking us.", style: "Stabilizer" },
            { text: "I suggest we pause and make a simple checklist so we stop spinning.", style: "Stabilizer" }
        ]
    },

    {
        axis: "Pace",
        prompt: "A community meeting is dragging on, and folks keep going in circles.",
        options: [
            { text: "I jump in: ‘Okay, here’s what we can actually do today.’", style: "Driver" },
            { text: "I offer a quick plan so we stop debating and start doing.", style: "Driver" },
            { text: "I ask, ‘Can we clarify the goal before we decide anything?’", style: "Stabilizer" },
            { text: "I slow the room down: ‘Let’s make sure we’re not missing anything important.’", style: "Stabilizer" }
        ]
    },

    {
        axis: "Pace",
        prompt: "A neighbor calls saying their basement is flooding. People are texting ideas but no one’s acting.",
        options: [
            { text: "I grab boots and head over. We’ll figure it out on the spot.", style: "Driver" },
            { text: "I say, ‘I’m going now. Who’s coming?’", style: "Driver" },
            { text: "I ask what’s actually happening so we don’t make it worse.", style: "Stabilizer" },
            { text: "I check what tools we have before anyone rushes in.", style: "Stabilizer" }
        ]
    },

    {
        axis: "Pace",
        prompt: "A local event is falling apart because volunteers keep canceling last minute.",
        options: [
            { text: "I’ll cover a couple roles myself so the thing actually happens.", style: "Driver" },
            { text: "I say, ‘Let’s simplify the plan and just get it done.’", style: "Driver" },
            { text: "We need to figure out why people keep dropping off.", style: "Stabilizer" },
            { text: "I suggest we rebuild the schedule so it’s realistic.", style: "Stabilizer" }
        ]
    },

    // ============================
    // PEOPLE — Advocate vs. Connector
    // ============================

    {
        axis: "People",
        prompt: "Your building posts a new rule that clearly favors a few people and leaves others out.",
        options: [
            { text: "I bring it up publicly. If it’s unfair, people should hear about it.", style: "Advocate" },
            { text: "I write a quick note to the building chat: ‘This doesn’t sit right with me.’", style: "Advocate" },
            { text: "I check in with a couple neighbors: ‘Did you see this? What do you think?’", style: "Connector" },
            { text: "I talk to the folks involved privately to understand what’s going on.", style: "Connector" }
        ]
    },

    {
        axis: "People",
        prompt: "You join a new volunteer group, and the vibe is polite but awkward.",
        options: [
            { text: "I speak up: ‘Hey, what are we actually trying to fix here?’", style: "Advocate" },
            { text: "I push the group to name the real issue out loud.", style: "Advocate" },
            { text: "I start chatting with people one‑on‑one to break the ice.", style: "Connector" },
            { text: "I find the quiet folks and pull them in gently.", style: "Connector" }
        ]
    },

    {
        axis: "People",
        prompt: "A neighbor is being treated unfairly at a meeting. People are staying quiet.",
        options: [
            { text: "I step in and say, ‘Hold on, that’s not okay.’", style: "Advocate" },
            { text: "I call out the behavior so it doesn’t slide.", style: "Advocate" },
            { text: "I check in with the neighbor afterward to make sure they’re alright.", style: "Connector" },
            { text: "I pull a few folks aside to talk through what happened.", style: "Connector" }
        ]
    },

    {
        axis: "People",
        prompt: "A local issue is heating up online, and people are arguing.",
        options: [
            { text: "I jump in with a clear message about what needs to change.", style: "Advocate" },
            { text: "I post publicly to steer the conversation toward fairness.", style: "Advocate" },
            { text: "I message a few people privately to calm things down.", style: "Connector" },
            { text: "I try to get folks talking face‑to‑face instead of fighting online.", style: "Connector" }
        ]
    },

    {
        axis: "People",
        prompt: "A new family moves in and seems overwhelmed.",
        options: [
            { text: "I ask the neighborhood group to organize support.", style: "Advocate" },
            { text: "I speak up: ‘Let’s make sure they get what they need.’", style: "Advocate" },
            { text: "I stop by with a friendly hello and see how they’re settling in.", style: "Connector" },
            { text: "I introduce them to a couple neighbors so they feel connected.", style: "Connector" }
        ]
    },

    {
        axis: "People",
        prompt: "A community survey comes out, and the questions feel biased.",
        options: [
            { text: "I call it out: ‘These questions aren’t fair.’", style: "Advocate" },
            { text: "I ask the organizers to fix it before collecting responses.", style: "Advocate" },
            { text: "I talk to the organizers privately to understand their thinking.", style: "Connector" },
            { text: "I gather a few neighbors to discuss how we can improve it.", style: "Connector" }
        ]
    },

    // ============================
    // PLACE — Architect vs. Guardian
    // ============================

    {
        axis: "Place",
        prompt: "You walk past a community garden that’s half thriving, half falling apart.",
        options: [
            { text: "I’m already sketching where new beds could go and how to fix the walkway.", style: "Architect" },
            { text: "I take photos and think through a simple layout to make the space work better.", style: "Architect" },
            { text: "I head straight to the healthy plants to protect them.", style: "Guardian" },
            { text: "I flag fragile spots: ‘Let’s keep this safe while we figure out the rest.’", style: "Guardian" }
        ]
    },

    {
        axis: "Place",
        prompt: "Your neighborhood trail has a washed‑out section after heavy rain.",
        options: [
            { text: "I’m thinking about drainage, signage, and how to rebuild it so it lasts.", style: "Architect" },
            { text: "I walk the area and mentally map out a sturdier fix.", style: "Architect" },
            { text: "I focus on keeping people away from the damaged part so the land can recover.", style: "Guardian" },
            { text: "I check the plants and soil first — what needs protecting right now?", style: "Guardian" }
        ]
    },

    {
        axis: "Place",
        prompt: "A local park has a broken bench and a patch of wildflowers barely hanging on.",
        options: [
            { text: "I’m already imagining a better layout for the seating area.", style: "Architect" },
            { text: "I think through how to rebuild the bench so it doesn’t break again.", style: "Architect" },
            { text: "I go straight to the wildflowers to make sure they’re not trampled.", style: "Guardian" },
            { text: "I rope off the fragile patch so it gets a chance to recover.", style: "Guardian" }
        ]
    },

    {
        axis: "Place",
        prompt: "A community center is cluttered and chaotic.",
        options: [
            { text: "I start rearranging things in my head so the space actually works.", style: "Architect" },
            { text: "If we moved that shelf and cleared that corner, this place would breathe.", style: "Architect" },
            { text: "I look for anything sentimental or important that needs protecting.", style: "Guardian" },
            { text: "I make sure nothing gets tossed that people care about.", style: "Guardian" }
        ]
    },

    {
        axis: "Place",
        prompt: "A neighbor wants to redo their yard but isn’t sure where to start.",
        options: [
            { text: "I sketch a quick layout to help them see the possibilities.", style: "Architect" },
            { text: "I walk the space with them and point out what could be improved.", style: "Architect" },
            { text: "I ask what plants or spots they love so we don’t mess them up.", style: "Guardian" },
            { text: "I focus on preserving the parts that already feel special.", style: "Guardian" }
        ]
    },

    {
        axis: "Place",
        prompt: "A small wooded area near your block is getting worn down by foot traffic.",
        options: [
            { text: "I think about where a simple path or sign could help.", style: "Architect" },
            { text: "I picture a layout that guides people without harming the trees.", style: "Architect" },
            { text: "I check the most fragile spots and try to protect them.", style: "Guardian" },
            { text: "I gently redirect people to safer areas to give the woods a break.", style: "Guardian" }
        ]
    },

    // ============================
    // PURPOSE — Visionary vs. Keeper
    // ============================

    {
        axis: "Purpose",
        prompt: "Every year your block tries the same holiday event, and every year it turns into the same argument.",
        options: [
            { text: "Why are we doing this the same way? Let’s try something different.", style: "Visionary" },
            { text: "What if we flipped the whole thing — new theme, new setup?", style: "Visionary" },
            { text: "Before we reinvent everything, let’s look at what actually worked.", style: "Keeper" },
            { text: "Someone solved this once. Let’s dig up the old notes.", style: "Keeper" }
        ]
    },

    {
        axis: "Purpose",
        prompt: "A neighborhood issue keeps popping up — parking, noise, trash, whatever.",
        options: [
            { text: "We’re stuck in a loop. Let’s imagine a completely new way to handle this.", style: "Visionary" },
            { text: "What if we tried something bold instead of patching the same routine?", style: "Visionary" },
            { text: "Let’s look at what used to work before things changed.", style: "Keeper" },
            { text: "There’s probably a simple fix we’ve forgotten.", style: "Keeper" }
        ]
    },

    {
        axis: "Purpose",
        prompt: "A local group wants to start a new tradition but can’t agree on what it should be.",
        options: [
            { text: "Let’s dream up something fresh that fits who we are now.", style: "Visionary" },
            { text: "What if we tried something no one’s done before?", style: "Visionary" },
            { text: "What traditions did we used to have? Maybe we can revive one.", style: "Keeper" },
            { text: "Let’s ask older neighbors what they remember.", style: "Keeper" }
        ]
    },

    {
        axis: "Purpose",
        prompt: "A recurring problem keeps showing up at meetings, and people are tired of discussing it.",
        options: [
            { text: "We need a totally new angle. Let’s rethink the whole thing.", style: "Visionary" },
            { text: "What if we stopped trying to fix it and tried replacing it?", style: "Visionary" },
            { text: "Let’s look back at when this wasn’t a problem. What changed?", style: "Keeper" },
            { text: "There’s probably an old solution that still works.", style: "Keeper" }
        ]
    },

    {
        axis: "Purpose",
        prompt: "A youth group wants to redesign a community space.",
        options: [
            { text: "Let’s imagine what this place could be if we started from scratch.", style: "Visionary" },
            { text: "What’s the wildest version of this space that still helps people?", style: "Visionary" },
            { text: "What parts of the space have meaning? Let’s keep those.", style: "Keeper" },
            { text: "Let’s ask longtime neighbors what they love about it.", style: "Keeper" }
        ]
    },

    {
        axis: "Purpose",
        prompt: "A neighborhood committee is split between ‘new ideas’ and ‘the way we’ve always done it.’",
        options: [
            { text: "Let’s try the new idea. Worst case, we learn something.", style: "Visionary" },
            { text: "Why not experiment? We’re not stuck.", style: "Visionary" },
            { text: "Let’s keep what’s worked — no need to toss good habits.", style: "Keeper" },
            { text: "We should build on the old approach instead of ditching it.", style: "Keeper" }
        ]
    }
];
