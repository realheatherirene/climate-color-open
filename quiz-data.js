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
];
