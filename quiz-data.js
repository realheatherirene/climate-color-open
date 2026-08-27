// quiz-data.js
export const styles = {
    Driver: {
        color: "#E32322",
        rgb: "227, 35, 34",
        identity: "Direct Action & High Momentum",
        behavior: "You thrive when jumping straight into action and leading physical campaigns.",
        action: "Focus on rapid-response events, direct mobilization, and visible projects.",
        searchTerms: ["climate rally coordinator", "action leader", "rapid response campaign"]
    },
    Advocate: {
        color: "#F18E1C",
        rgb: "241, 142, 28",
        identity: "Public Voice & Storytelling",
        behavior: "You excel at communicating big ideas and inspiring public support.",
        action: "Focus on social campaigns, community presentations, and writing outreach materials.",
        searchTerms: ["climate storyteller", "community outreach volunteer", "campaign writer"]
    },
    Visionary: {
        color: "#9A7B00",
        rgb: "154, 123, 0",
        identity: "Future Concepts & Innovation",
        behavior: "You see creative solutions and love building new community possibilities.",
        action: "Focus on design labs, local innovation sprints, and vision mapping.",
        searchTerms: ["urban innovation lab", "rewilding design", "sustainability strategist"]
    },
    Stabilizer: {
        color: "#5A9129",
        rgb: "90, 145, 41",
        identity: "Consistent Care & Habitual Support",
        behavior: "You keep local efforts strong through steady, dependable ongoing care.",
        action: "Focus on recurring park maintenance, community gardens, or habitat restoration.",
        searchTerms: ["community garden volunteer", "tree planting crew", "trail steward"]
    },
    Architect: {
        color: "#2A71B0",
        rgb: "42, 113, 176",
        identity: "Systems Design & Logistics",
        behavior: "You make sure plans are organized, efficient, and built to last.",
        action: "Focus on project logistics, volunteer databases, and event planning.",
        searchTerms: ["nonprofit operations volunteer", "data coordinator", "event logistics manager"]
    },
    Keeper: {
        color: "#002060",
        rgb: "0, 32, 96",
        identity: "Heritage Protection & Tradition",
        behavior: "You protect established community wisdom, land heritage, and local history.",
        action: "Focus on land trust preservation, seed saving, and historical restoration.",
        searchTerms: ["land trust volunteer", "heritage seed saver", "historical ecology"]
    },
    Connector: {
        color: "#6D398B",
        rgb: "109, 57, 139",
        identity: "Relationship Building & Trust",
        behavior: "You bring people together and build bridges across diverse community groups.",
        action: "Focus on community welcoming, liaison roles, and collaborative meetings.",
        searchTerms: ["community liaison", "volunteer host", "coalition builder"]
    },
    Guardian: {
        color: "#D946EF",
        rgb: "217, 70, 239",
        identity: "Protector & Policy Watchdog",
        behavior: "You stand up for local environmental rights and policy accountability.",
        action: "Focus on legal observation, policy monitoring, and environmental justice.",
        searchTerms: ["environmental justice watchdog", "policy observer", "civic monitor"]
    }
};

const scenes = {
    individual: {
        q1: "A shared space in your neighborhood needs attention and people are stepping in.",
        q2: "Neighbors are organizing a small volunteer effort to help with a local need.",
        q3: "A group is deciding how to tackle a community task together.",
        q4: "A community project needs people to keep showing up week after week.",
        q5: "People are gathered to talk through a problem affecting your neighborhood.",
        q6: "A local volunteer group is figuring out roles and responsibilities.",
        q7: "A new community service effort begins today and volunteers are arriving.",
        q8: "Something in your area needs long-term care and steady hands."
    },

    workplace: {
        q1: "Your team faces a challenge that needs quick, thoughtful action.",
        q2: "Coworkers are organizing a volunteer or service activity together.",
        q3: "Your team is choosing how to approach a project that requires shared effort.",
        q4: "An ongoing workplace initiative needs people who will reliably support it.",
        q5: "People at work are discussing an issue that impacts the whole team.",
        q6: "A cross-team group is figuring out how to divide responsibilities.",
        q7: "A major team project begins today and people are gathering to start.",
        q8: "Your organization is planning for responsibilities that will require long-term commitment."
    },

    student: {
        q1: "Your school needs students to help with a shared task that matters.",
        q2: "People on campus are organizing a volunteer activity.",
        q3: "Your student group is choosing how to approach a project that requires teamwork.",
        q4: "A campus effort needs students who will keep showing up.",
        q5: "Students are gathered to talk through an issue affecting the school.",
        q6: "Your project group is figuring out how to divide roles and responsibilities.",
        q7: "A student-led service effort begins today and people are arriving.",
        q8: "Something on campus needs long-term care and dependable attention."
    }
};

export const questions = [
    {
        id: "q1",
        getPrompt: (aud) => scenes[aud]?.q1 || scenes.individual.q1,
        options: [
            { text: "You get people moving and take the first step together.", style: "Driver" },
            { text: "You explain things in a way that helps people feel connected.", style: "Advocate" },
            { text: "You look for a fresh angle that opens new possibilities.", style: "Visionary" },
            { text: "You create a steady plan that keeps things going over time.", style: "Stabilizer" }
        ]
    },
    {
        id: "q2",
        getPrompt: (aud) => scenes[aud]?.q2 || scenes.individual.q2,
        options: [
            { text: "You organize the details so the effort runs smoothly.", style: "Architect" },
            { text: "You make sure important lessons and values aren’t forgotten.", style: "Keeper" },
            { text: "You help people feel welcome and build trust in the group.", style: "Connector" },
            { text: "You watch for risks and help the group stay true to its principles.", style: "Guardian" }
        ]
    },
    {
        id: "q3",
        getPrompt: (aud) => scenes[aud]?.q3 || scenes.individual.q3,
        options: [
            { text: "You set clear goals and push the project into motion.", style: "Driver" },
            { text: "You share a message that motivates people to join in.", style: "Advocate" },
            { text: "You offer a creative idea that changes how the group sees the challenge.", style: "Visionary" },
            { text: "You build a practical routine that keeps the work reliable.", style: "Stabilizer" }
        ]
    },
    {
        id: "q4",
        getPrompt: (aud) => scenes[aud]?.q4 || scenes.individual.q4,
        options: [
            { text: "You create structure so tasks and timelines stay clear.", style: "Architect" },
            { text: "You protect what’s meaningful and make sure it continues.", style: "Keeper" },
            { text: "You help people communicate openly and feel connected.", style: "Connector" },
            { text: "You hold the group accountable to its shared values.", style: "Guardian" }
        ]
    },
    {
        id: "q5",
        getPrompt: (aud) => scenes[aud]?.q5 || scenes.individual.q5,
        options: [
            { text: "You mobilize people quickly and respond with clear action.", style: "Driver" },
            { text: "You break things down so everyone understands what’s at stake.", style: "Advocate" },
            { text: "You suggest imaginative alternatives that could improve the situation.", style: "Visionary" },
            { text: "You support the steady rhythms that keep the group grounded.", style: "Stabilizer" }
        ]
    },
    {
        id: "q6",
        getPrompt: (aud) => scenes[aud]?.q6 || scenes.individual.q6,
        options: [
            { text: "You build a simple system that keeps everyone organized.", style: "Architect" },
            { text: "You ensure long-held knowledge and values shape decisions.", style: "Keeper" },
            { text: "You bridge differences and help the team work in harmony.", style: "Connector" },
            { text: "You check for fairness and protect anyone who might be overlooked.", style: "Guardian" }
        ]
    },
    {
        id: "q7",
        getPrompt: (aud) => scenes[aud]?.q7 || scenes.individual.q7,
        options: [
            { text: "You kick off the effort with energy and direction.", style: "Driver" },
            { text: "You share the purpose in a way that brings people on board.", style: "Advocate" },
            { text: "You sketch out long-term possibilities and future pathways.", style: "Visionary" },
            { text: "You set up dependable weekly patterns that keep the project strong.", style: "Stabilizer" }
        ]
    },
    {
        id: "q8",
        getPrompt: (aud) => scenes[aud]?.q8 || scenes.individual.q8,
        options: [
            { text: "You organize tools and information so progress can be tracked.", style: "Architect" },
            { text: "You care for what’s fragile and ensure it’s protected over time.", style: "Keeper" },
            { text: "You maintain relationships that keep the group connected.", style: "Connector" },
            { text: "You stand firm when something vulnerable needs defending.", style: "Guardian" }
        ]
    }
];
