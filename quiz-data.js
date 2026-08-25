// quiz-data.js
const styles = {
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

const questions = [
    {
        title: "1. A local park needs care. Where do you naturally step in?",
        options: [
            { text: "Organize a fast-paced cleanup day with tools ready.", style: "Driver" },
            { text: "Write posters and tell neighbors why the park matters.", style: "Advocate" },
            { text: "Imagine new ways to redesign the park with native plants.", style: "Visionary" },
            { text: "Show up every Saturday to water plants and weed beds.", style: "Stabilizer" }
        ]
    },
    {
        title: "2. Your neighborhood is hosting a sustainability fair. What's your role?",
        options: [
            { text: "Manage the schedule, sign-in sheets, and volunteer shifts.", style: "Architect" },
            { text: "Document the local history of green spaces for display.", style: "Keeper" },
            { text: "Greet visitors and connect different local groups together.", style: "Connector" },
            { text: "Review safety guidelines and ensure fair access for everyone.", style: "Guardian" }
        ]
    },
    {
        title: "3. When faced with a new climate goal, you feel most energized by:",
        options: [
            { text: "Setting bold targets and jumping directly into action.", style: "Driver" },
            { text: "Brainstorming creative, out-of-the-box ideas.", style: "Visionary" },
            { text: "Organizing the step-by-step plan to make it run smoothly.", style: "Architect" },
            { text: "Welcoming new people so everyone feels part of the team.", style: "Connector" }
        ]
    },
    {
        title: "4. What kind of impact feels most rewarding to you?",
        options: [
            { text: "Inspiring dozens of people to care about a shared cause.", style: "Advocate" },
            { text: "Seeing steady, tangible improvement over months and years.", style: "Stabilizer" },
            { text: "Safeguarding vital natural habitats from harm.", style: "Keeper" },
            { text: "Holding local leaders accountable to environmental promises.", style: "Guardian" }
        ]
    },
    {
        title: "5. A new municipal environmental policy is being proposed. You choose to:",
        options: [
            { text: "Rally people to show up at public hearings for direct pressure.", style: "Driver" },
            { text: "Write articles or social posts to explain the impact to voters.", style: "Advocate" },
            { text: "Draft alternative long-term vision maps for city council.", style: "Visionary" },
            { text: "Analyze the exact wording to ensure vulnerable communities are protected.", style: "Guardian" }
        ]
    },
    {
        title: "6. How do you prefer to handle team organization during a project?",
        options: [
            { text: "Build database systems and schedule logistics for everyone.", style: "Architect" },
            { text: "Ensure traditional community wisdom and history guide decision-making.", style: "Keeper" },
            { text: "Facilitate open dialog and resolve conflicts between members.", style: "Connector" },
            { text: "Maintain steady, reliable weekly check-ins to keep work on track.", style: "Stabilizer" }
        ]
    },
    {
        title: "7. What is your primary focus when starting a new initiative?",
        options: [
            { text: "Generating immediate energy and getting things moving.", style: "Driver" },
            { text: "Framing the compelling story that wins people over.", style: "Advocate" },
            { text: "Designing bold, sustainable models for the future.", style: "Visionary" },
            { text: "Establishing a reliable, long-term operational routine.", style: "Stabilizer" }
        ]
    },
    {
        title: "8. How do you ensure community projects stay resilient over time?",
        options: [
            { text: "Set up efficient administrative frameworks and records.", style: "Architect" },
            { text: "Pass down knowledge and protect local ecological heritage.", style: "Keeper" },
            { text: "Nurture continuous strong relationships across the community.", style: "Connector" },
            { text: "Monitor legal policies and protect local environmental rights.", style: "Guardian" }
        ]
    },
    {
        title: "9. What kind of outcome matters most to you at the end of a campaign?",
        options: [
            { text: "Seeing immediate, physical change on the ground.", style: "Driver" },
            { text: "Knowing local heritage and natural ecological wisdom are preserved.", style: "Keeper" },
            { text: "Inspiring widespread public shifts in mindset and awareness.", style: "Advocate" },
            { text: "Designing a fresh, innovative framework that other groups can replicate.", style: "Visionary" }
        ]
    },
    {
        title: "10. How do you prefer to invest your personal energy over the long term?",
        options: [
            { text: "Showing up for routine, ongoing maintenance and practical support.", style: "Stabilizer" },
            { text: "Building dependable background systems and managing logistics.", style: "Architect" },
            { text: "Connecting isolated groups and maintaining strong community trust.", style: "Connector" },
            { text: "Staying vigilant against harmful policy decisions and standing up for civic rights.", style: "Guardian" }
        ]
    }
];
