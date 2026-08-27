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
        q1: "A situation in your community needs people to get involved. You are most likely to…",
        q2: "A neighborhood event is being planned and volunteers are gathering. You are most likely to…",
        q3: "A group is deciding on a new shared goal. You are most likely to…",
        q4: "A community project is entering its second year. You are most likely to…",
        q5: "A public issue is being discussed and people are weighing in. You are most likely to…",
        q6: "A local group is organizing how it will work together. You are most likely to…",
        q7: "A new community effort is kicking off today. You are most likely to…",
        q8: "A long-term challenge in your area needs steady attention. You are most likely to…"
    },
    workplace: {
        q1: "Your team needs to respond quickly to a new challenge. You are most likely to…",
        q2: "A cross-department event is being organized. You are most likely to…",
        q3: "Your team is setting new goals for the year. You are most likely to…",
        q4: "An internal initiative needs ongoing support. You are most likely to…",
        q5: "A company-wide issue is open for employee input. You are most likely to…",
        q6: "A cross-functional team is structuring its workflow. You are most likely to…",
        q7: "A major workplace project launches today. You are most likely to…",
        q8: "Your organization is planning for long-term responsibilities. You are most likely to…"
    },
    student: {
        q1: "Your school needs students to help with a new situation. You are most likely to…",
        q2: "A campus event is being planned. You are most likely to…",
        q3: "Your student group is choosing a project for the semester. You are most likely to…",
        q4: "A campus initiative needs ongoing support. You are most likely to…",
        q5: "A school-wide issue is being reviewed. You are most likely to…",
        q6: "Your project group is organizing responsibilities. You are most likely to…",
        q7: "A student-led effort kicks off today. You are most likely to…",
        q8: "A long-term campus challenge needs steady attention. You are most likely to…"
    }
};

export const questions = [
    {
    id: "q1",
    getPrompt: (aud) => scenes[aud]?.q1 || scenes.individual.q1,
    options: [
        { text: "Get people moving and take the first step together.", style: "Driver" },
        { text: "Explain the situation in a way that helps people feel connected.", style: "Advocate" },
        { text: "Look for a fresh angle that opens new possibilities.", style: "Visionary" },
        { text: "Create a steady plan that keeps things going over time.", style: "Stabilizer" }
    ]
},
    {
    id: "q2",
    getPrompt: (aud) => scenes[aud]?.q2 || scenes.individual.q2,
    options: [
        { text: "Organize the details so the effort runs smoothly.", style: "Architect" },
        { text: "Make sure important lessons and values aren’t forgotten.", style: "Keeper" },
        { text: "Help people feel welcome and build trust in the group.", style: "Connector" },
        { text: "Watch for risks and help the group stay true to its principles.", style: "Guardian" }
    ]
},
    {
    id: "q3",
    getPrompt: (aud) => scenes[aud]?.q3 || scenes.individual.q3,
    options: [
        { text: "Set clear goals and push the project into motion.", style: "Driver" },
        { text: "Share a message that motivates people to join in.", style: "Advocate" },
        { text: "Offer a creative idea that changes how the group sees the challenge.", style: "Visionary" },
        { text: "Build a practical routine that keeps the work steady and reliable.", style: "Stabilizer" }
    ]
},
    {
    id: "q4",
    getPrompt: (aud) => scenes[aud]?.q4 || scenes.individual.q4,
    options: [
        { text: "Create structure so tasks and timelines stay clear.", style: "Architect" },
        { text: "Protect what’s meaningful and make sure it continues.", style: "Keeper" },
        { text: "Help people communicate openly and feel connected.", style: "Connector" },
        { text: "Hold the group accountable to its shared values.", style: "Guardian" }
    ]
},
    {
    id: "q5",
    getPrompt: (aud) => scenes[aud]?.q5 || scenes.individual.q5,
    options: [
        { text: "Mobilize people quickly and respond with clear action.", style: "Driver" },
        { text: "Break things down so everyone understands what’s at stake.", style: "Advocate" },
        { text: "Suggest imaginative alternatives that could improve the situation.", style: "Visionary" },
        { text: "Support the steady routines that keep the group grounded.", style: "Stabilizer" }
    ]
},
    {
    id: "q6",
    getPrompt: (aud) => scenes[aud]?.q6 || scenes.individual.q6,
    options: [
        { text: "Build a simple system that keeps everyone organized.", style: "Architect" },
        { text: "Make sure long-held knowledge and values shape decisions.", style: "Keeper" },
        { text: "Bridge differences and help the team work in harmony.", style: "Connector" },
        { text: "Check for fairness and protect anyone who might be overlooked.", style: "Guardian" }
    ]
},
    {
    id: "q7",
    getPrompt: (aud) => scenes[aud]?.q7 || scenes.individual.q7,
    options: [
        { text: "Kick off the effort with energy and clear direction.", style: "Driver" },
        { text: "Share the purpose in a way that brings people on board.", style: "Advocate" },
        { text: "Sketch out long-term possibilities and future pathways.", style: "Visionary" },
        { text: "Set up reliable weekly rhythms that keep the project strong.", style: "Stabilizer" }
    ]
},
    {
    id: "q8",
    getPrompt: (aud) => scenes[aud]?.q8 || scenes.individual.q8,
    options: [
        { text: "Organize tools and information so progress can be tracked.", style: "Architect" },
        { text: "Care for what’s fragile and ensure it’s protected over time.", style: "Keeper" },
        { text: "Maintain relationships that keep the group connected.", style: "Connector" },
        { text: "Stand firm when something vulnerable needs defending.", style: "Guardian" }
    ]
}
];
