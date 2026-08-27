// quiz-data.js
export const climateColorCodeNames = {
    Driver: {
        Advocate: "The Forward Voice",
        Visionary: "The Bold Imagineer",
        Stabilizer: "The Steady Starter",
        Architect: "The Tactical Mover",
        Keeper: "The Grounded Initiator",
        Connector: "The Rally Builder",
        Guardian: "The Watchful Activator"
    },
    Advocate: {
        Driver: "The Spark Communicator",
        Visionary: "The Future Speaker",
        Stabilizer: "The Steady Voice",
        Architect: "The Clear Planner",
        Keeper: "The Story Holder",
        Connector: "The Bridge Speaker",
        Guardian: "The Truth Caller"
    },
    Visionary: {
        Driver: "The Dynamic Dreamer",
        Advocate: "The Idea Messenger",
        Stabilizer: "The Rooted Dreamer",
        Architect: "The Pattern Builder",
        Keeper: "The Story Weaver",
        Connector: "The Insight Gatherer",
        Guardian: "The Principle Seer"
    },
    Stabilizer: {
        Driver: "The Grounded Mover",
        Advocate: "The Calm Communicator",
        Visionary: "The Quiet Innovator",
        Architect: "The Rhythm Builder",
        Keeper: "The Tradition Steward",
        Connector: "The Steady Harmonizer",
        Guardian: "The Consistent Watcher"
    },
    Architect: {
        Driver: "The Precision Starter",
        Advocate: "The Clear Organizer",
        Visionary: "The Structure Dreamer",
        Stabilizer: "The System Keeper",
        Keeper: "The Order Steward",
        Connector: "The Network Builder",
        Guardian: "The Systems Watcher"
    },
    Keeper: {
        Driver: "The Heritage Activator",
        Advocate: "The Meaning Messenger",
        Visionary: "The Legacy Imagineer",
        Stabilizer: "The Continuity Holder",
        Architect: "The Archive Builder",
        Connector: "The Story Gatherer",
        Guardian: "The Tradition Watcher"
    },
    Connector: {
        Driver: "The Social Starter",
        Advocate: "The Warm Communicator",
        Visionary: "The Insight Connector",
        Stabilizer: "The Steady Unifier",
        Architect: "The Coordination Weaver",
        Keeper: "The Memory Connector",
        Guardian: "The Trust Protector"
    },
    Guardian: {
        Driver: "The Protective Activator",
        Advocate: "The Clear Watcher",
        Visionary: "The Future Sentinel",
        Stabilizer: "The Steady Sentinel",
        Architect: "The Order Sentinel",
        Keeper: "The Heritage Sentinel",
        Connector: "The People Sentinel"
    }
};
export const scenes = {
    individual: {
        q1: "A spot in your neighborhood has been neglected, and neighbors show up to fix it.",
        q2: "Someone nearby needs help, and a few people start organizing support.",
        q3: "Neighbors gather to decide how to handle a specific community task.",
        q4: "A weekly neighborhood project depends on people showing up regularly.",
        q5: "People on your block meet to talk through a local problem.",
        q6: "A volunteer group in your area is sorting out who will do what.",
        q7: "A new neighborhood project kicks off today and volunteers arrive.",
        q8: "Something in your community needs long-term attention and steady involvement."
    },

    workplace: {
        q1: "Your team faces a problem that affects everyone and needs a quick response.",
        q2: "Coworkers put together a volunteer effort to help a local cause.",
        q3: "Your team meets to choose how to approach a shared project.",
        q4: "A recurring responsibility at work needs reliable follow-through.",
        q5: "People at work gather to discuss an issue affecting the whole team.",
        q6: "A cross-team group meets to divide responsibilities for a joint project.",
        q7: "A major project launches today and the team gathers to begin.",
        q8: "Your organization prepares for responsibilities that will last over time."
    },

    student: {
        q1: "Your school asks students to help with a task that affects daily campus life.",
        q2: "Students organize a volunteer effort to support a specific campus need.",
        q3: "Your student group meets to choose how to tackle a shared project.",
        q4: "A campus project needs students who will keep showing up each week.",
        q5: "Students gather to talk through an issue affecting the school community.",
        q6: "Your project group meets to divide roles for a shared assignment.",
        q7: "A student-led project begins today and people arrive to start.",
        q8: "Something on campus needs long-term care and dependable involvement."
    }
};

export const questions = [
    {
        id: "q1",
        getPrompt: (aud) => scenes[aud]?.q1 || scenes.individual.q1,
        options: [
            { text: "I jump in and get things moving.", style: "Driver" },
            { text: "I speak up so people understand what's happening.", style: "Advocate" },
            { text: "I look at the situation from a different angle.", style: "Visionary" },
            { text: "I look for a steady way forward.", style: "Stabilizer" }
        ]
    },
    {
        id: "q2",
        getPrompt: (aud) => scenes[aud]?.q2 || scenes.individual.q2,
        options: [
            { text: "I break things into clear steps.", style: "Architect" },
            { text: "I remember what has mattered before.", style: "Keeper" },
            { text: "I notice how people are relating.", style: "Connector" },
            { text: "I notice when something feels off.", style: "Guardian" }
        ]
    },
    {
        id: "q3",
        getPrompt: (aud) => scenes[aud]?.q3 || scenes.individual.q3,
        options: [
            { text: "I take the first step without hesitation.", style: "Driver" },
            { text: "I share my thoughts to help others follow along.", style: "Advocate" },
            { text: "I imagine how things could unfold.", style: "Visionary" },
            { text: "I stick with what works once it’s working.", style: "Stabilizer" }
        ]
    },
    {
        id: "q4",
        getPrompt: (aud) => scenes[aud]?.q4 || scenes.individual.q4,
        options: [
            { text: "I figure out what needs to happen first.", style: "Architect" },
            { text: "I bring up lessons we've learned before.", style: "Keeper" },
            { text: "I check in on how others are feeling.", style: "Connector" },
            { text: "I pay attention to who might be missed.", style: "Guardian" }
        ]
    },
    {
        id: "q5",
        getPrompt: (aud) => scenes[aud]?.q5 || scenes.individual.q5,
        options: [
            { text: "I act quickly when something needs attention.", style: "Driver" },
            { text: "I explain things in simple terms.", style: "Advocate" },
            { text: "I notice ideas that aren’t being discussed yet.", style: "Visionary" },
            { text: "I help keep the pace manageable.", style: "Stabilizer" }
        ]
    },
    {
        id: "q6",
        getPrompt: (aud) => scenes[aud]?.q6 || scenes.individual.q6,
        options: [
            { text: "I line things up so they make sense.", style: "Architect" },
            { text: "I think about what should stay the same.", style: "Keeper" },
            { text: "I look for shared understanding in the group.", style: "Connector" },
            { text: "I speak up when something doesn’t sit right.", style: "Guardian" }
        ]
    },
    {
        id: "q7",
        getPrompt: (aud) => scenes[aud]?.q7 || scenes.individual.q7,
        options: [
            { text: "I get things started.", style: "Driver" },
            { text: "I put things into words when the group needs clarity.", style: "Advocate" },
            { text: "I think about where this could lead.", style: "Visionary" },
            { text: "I stay consistent.", style: "Stabilizer" }
        ]
    },
    {
        id: "q8",
        getPrompt: (aud) => scenes[aud]?.q8 || scenes.individual.q8,
        options: [
            { text: "I keep track of details so nothing gets lost.", style: "Architect" },
            { text: "I hold onto the meaning behind the work.", style: "Keeper" },
            { text: "I make it easier for people to be together.", style: "Connector" },
            { text: "I watch for signs that something needs attention.", style: "Guardian" }
        ]
    }
};

export const styles = {
    Driver: {
        color: "#E63946",
        identity: "You initiate momentum.",
        behavior: "You act quickly and help things begin.",
        action: "Start small climate actions and help others get moving."
    },
    Advocate: {
        color: "#F77F00",
        identity: "You clarify and communicate.",
        behavior: "You help people understand what matters.",
        action: "Share climate insights and help others stay informed."
    },
    Visionary: {
        color: "#FFD60A",
        identity: "You imagine possibilities.",
        behavior: "You see new angles and future pathways.",
        action: "Explore creative climate solutions and inspire others."
    },
    Stabilizer: {
        color: "#2A9D8F",
        identity: "You keep things steady.",
        behavior: "You maintain consistency and reliability.",
        action: "Support ongoing climate efforts with dependable follow‑through."
    },
    Architect: {
        color: "#457B9D",
        identity: "You organize systems.",
        behavior: "You break things into steps and build structure.",
        action: "Create plans and frameworks that make climate action easier."
    },
    Keeper: {
        color: "#4B3F72",
        identity: "You preserve meaning.",
        behavior: "You remember what matters and carry it forward.",
        action: "Protect climate values and help maintain long‑term commitments."
    },
    Connector: {
        color: "#7B2CBF",
        identity: "You bring people together.",
        behavior: "You notice relationships and build cohesion.",
        action: "Help groups collaborate and stay connected around climate work."
    },
    Guardian: {
        color: "#5E548E",
        identity: "You watch what’s important.",
        behavior: "You notice risks and protect what needs care.",
        action: "Monitor climate issues and help safeguard vulnerable areas."
    }
];
