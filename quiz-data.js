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
        q1: "A local environmental issue needs urgent attention.",
        q2: "A neighborhood sustainability fair is being organized.",
        q3: "A new environmental project goal is being set.",
        q4: "A community initiative is entering its second year.",
        q5: "A new municipal policy is open for public comment.",
        q6: "A local group is organizing its workflow.",
        q7: "A community project is kicking off today.",
        q8: "A local habitat is facing long-term pressures."
    },
    workplace: {
        q1: "Your division needs to rapidly reduce its carbon footprint.",
        q2: "A cross-departmental sustainability plan is launching.",
        q3: "Your team is setting annual sustainability targets.",
        q4: "An internal eco-initiative needs ongoing operational support.",
        q5: "New corporate environmental standards are proposed.",
        q6: "A cross-functional green team is structuring its workflow.",
        q7: "A major workplace sustainability project launches today.",
        q8: "Your organization is updating its long-term stewardship policies."
    },
    student: {
        q1: "Your school campus wants to dramatically reduce waste.",
        q2: "A campus eco-club event is being planned.",
        q3: "Your student group is choosing a semester project.",
        q4: "A campus garden project needs ongoing support.",
        q5: "The school board is reviewing environmental policies.",
        q6: "Your project group is organizing responsibilities.",
        q7: "A campus sustainability campaign kicks off today.",
        q8: "A student coalition is protecting local green spaces."
    }
};

export const questions = [
    {
    id: "q1",
    getPrompt: (aud) => scenes[aud]?.q1 || scenes.individual.q1,
    options: [
        { text: "Jump in and get people moving right away.", style: "Driver" },
        { text: "Explain the issue in a way that helps people care.", style: "Advocate" },
        { text: "Step back and imagine a different way to solve it.", style: "Visionary" },
        { text: "Create a steady plan that keeps support going over time.", style: "Stabilizer" }
    ]
},
    {
    id: "q2",
    getPrompt: (aud) => scenes[aud]?.q2 || scenes.individual.q2,
    options: [
        { text: "Organize the moving parts so everything runs smoothly.", style: "Architect" },
        { text: "Make sure traditions, lessons, and history guide the event.", style: "Keeper" },
        { text: "Bring people together so everyone feels welcome and included.", style: "Connector" },
        { text: "Watch for risks and make sure the effort stays principled.", style: "Guardian" }
    ]
},
    {
    id: "q3",
    getPrompt: (aud) => scenes[aud]?.q3 || scenes.individual.q3,
    options: [
        { text: "Set clear goals and push the project into motion.", style: "Driver" },
        { text: "Share a message that inspires people to join in.", style: "Advocate" },
        { text: "Offer a fresh angle that opens new possibilities.", style: "Visionary" },
        { text: "Build a practical routine that keeps the work going long-term.", style: "Stabilizer" }
    ]
},
    {
    id: "q4",
    getPrompt: (aud) => scenes[aud]?.q4 || scenes.individual.q4,
    options: [
        { text: "Create structure so tasks and timelines stay clear.", style: "Architect" },
        { text: "Protect what’s meaningful and make sure it isn’t lost.", style: "Keeper" },
        { text: "Help people communicate openly and feel connected.", style: "Connector" },
        { text: "Hold the group accountable to its values and commitments.", style: "Guardian" }
    ]
},
    {
    id: "q5",
    getPrompt: (aud) => scenes[aud]?.q5 || scenes.individual.q5,
    options: [
        { text: "Mobilize people quickly to respond with visible action.", style: "Driver" },
        { text: "Break down the issue clearly so the public understands it.", style: "Advocate" },
        { text: "Suggest creative alternatives that could improve the policy.", style: "Visionary" },
        { text: "Support the services already helping the community stay steady.", style: "Stabilizer" }
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
        { text: "Maintain relationships that keep the community connected.", style: "Connector" },
        { text: "Stand firm when something vulnerable needs defending.", style: "Guardian" }
    ]
}
];
