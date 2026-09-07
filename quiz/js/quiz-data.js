/* ==========================================================================
   Climate Color Quiz — Full Question Bank & Archetype Metadata
   ========================================================================== */

export const questionPool = {
    pace: [
        {
            prompt: "A group or team is staring at a blank document or stalled project, unsure how to begin.",
            options: [
                { text: "Take the initiative to type out a simple first sentence to get things moving.", style: "Driver" },
                { text: "Take a slow, deep breath with the group and steady the pacing so no one feels rushed.", style: "Stabilizer" }
            ]
        },
        {
            prompt: "A collaborative effort has lost its momentum and people are beginning to drift.",
            options: [
                { text: "Propose a clear, immediate next step to jumpstart participation.", style: "Driver" },
                { text: "Create a reliable routine or rhythm so people feel comfortable returning.", style: "Stabilizer" }
            ]
        },
        {
            prompt: "A group notices a project is moving too slowly to meet its goals.",
            options: [
                { text: "Help clear the immediate bottleneck to get energy flowing again.", style: "Driver" },
                { text: "Gently pace the next steps so nobody burns out trying to catch up.", style: "Stabilizer" }
            ]
        },
        {
            prompt: "A shared effort needs a spark to transition from planning into action.",
            options: [
                { text: "Name the very first tangible action the group can take right now.", style: "Driver" },
                { text: "Establish a steady, manageable rhythm for when the work begins.", style: "Stabilizer" }
            ]
        }
    ],
    people: [
        {
            prompt: "Someone in a group chat or meeting hasn't spoken up, and the atmosphere feels quiet or tense.",
            options: [
                { text: "Send a public note of encouragement and warmth to spark engagement.", style: "Advocate" },
                { text: "Reach out privately with a gentle check-in to make sure they feel seen.", style: "Connector" }
            ]
        },
        {
            prompt: "Good news arrives for a shared community effort, and everyone is excited.",
            options: [
                { text: "Celebrate out loud with visible energy to amplify the collective joy.", style: "Advocate" },
                { text: "Offer heartfelt, one-on-one appreciation to deepen personal bonds.", style: "Connector" }
            ]
        },
        {
            prompt: "A group is feeling hesitant or uninspired before tackling a new challenge.",
            options: [
                { text: "Bring an uplifting burst of energy to rally people together.", style: "Advocate" },
                { text: "Create a quiet, welcoming space where everyone feels safe to voice their thoughts.", style: "Connector" }
            ]
        },
        {
            prompt: "Someone new joins a gathering and looks a bit unsure where to stand.",
            options: [
                { text: " warmly invite them right into the center of the conversation.", style: "Advocate" },
                { text: "Welcome them softly with a personal introduction and a listening ear.", style: "Connector" }
            ]
        }
    ],
    place: [
        {
            prompt: "A shared workspace or digital folder is completely cluttered and overwhelming to navigate.",
            options: [
                { text: "Design a clear, logical folder structure so everyone can find what they need.", style: "Architect" },
                { text: "Set gentle boundaries on the space to make sure no one's work gets accidentally lost.", style: "Guardian" }
            ]
        },
        {
            prompt: "A group is trying to make sense of a confusing, overly complicated set of instructions.",
            options: [
                { text: "Rewrite the steps clearly into an orderly, accessible format.", style: "Architect" },
                { text: "Slow down the pace and make sure everyone feels supported and safe.", style: "Guardian" }
            ]
        },
        {
            prompt: "A project is feeling chaotic because information is scattered everywhere.",
            options: [
                { text: "Map out a clean framework to organize the moving pieces.", style: "Architect" },
                { text: "Check that the current workspace feels secure and protected for everyone involved.", style: "Guardian" }
            ]
        },
        {
            prompt: "A shared process has ambiguous expectations, causing subtle friction.",
            options: [
                { text: "Outline clear roles and simple guidelines to bring clarity.", style: "Architect" },
                { text: "Identify where people or resources feel exposed and establish safe boundaries.", style: "Guardian" }
            ]
        }
    ],
    purpose: [
        {
            prompt: "A group is planning a project and debating whether to try something entirely new or stick to what has worked before.",
            options: [
                { text: "Pitch an expansive, creative 'what if' idea to open up new possibilities.", style: "Visionary" },
                { text: "Remind the group of their core values and the history that brought them here.", style: "Keeper" }
            ]
        },
        {
            prompt: "A collaborative effort reaches a major milestone or anniversary.",
            options: [
                { text: "Talk about where this milestone could lead next and what horizons it opens.", style: "Visionary" },
                { text: "Reflect on why this work matters and honor the story behind the milestone.", style: "Keeper" }
            ]
        },
        {
            prompt: "A team feels stuck in repetitive patterns and needs a fresh perspective.",
            options: [
                { text: "Introduce an inspiring new angle or future possibility to expand the conversation.", style: "Visionary" },
                { text: "Anchor the team back in the enduring principles that have always sustained them.", style: "Keeper" }
            ]
        },
        {
            prompt: "A project is evolving, and people are wondering how to honor its roots while growing.",
            options: [
                { text: "Envision how the core mission can stretch into exciting new spaces.", style: "Visionary" },
                { text: "Preserve the foundational stories and commitments that give the work its soul.", style: "Keeper" }
            ]
        }
    ]
};

export const styles = {
    Driver: { name: "Driver", path: "The Path of Momentum", colorVar: "--driver-color" },
    Advocate: { name: "Advocate", path: "The Path of Amplification", colorVar: "--advocate-color" },
    Visionary: { name: "Visionary", path: "The Path of Possibility", colorVar: "--visionary-color" },
    Architect: { name: "Architect", path: "The Path of Clarity", colorVar: "--architect-color" },
    Stabilizer: { name: "Stabilizer", path: "The Path of Steadiness", colorVar: "--stabilizer-color" },
    Connector: { name: "Connector", path: "The Path of Belonging", colorVar: "--connector-color" },
    Keeper: { name: "Keeper", path: "The Path of Memory", colorVar: "--keeper-color" },
    Guardian: { name: "Guardian", path: "The Path of Protection", colorVar: "--guardian-color" }
};

export const secondarySyntheses = {
    Driver: {
        Stabilizer: "You balance rapid momentum with steady, reliable followthrough.",
        Architect: "You combine clear direction with thoughtful, structured frameworks.",
        Advocate: "You spark dynamic energy and turn enthusiasm into action.",
        Connector: "You drive momentum while keeping relational warmth at the center.",
        Keeper: "You push things forward while honoring the core values that ground you."
    },
    Advocate: {
        Connector: "You bring infectious energy and deep relational trust to everything you do.",
        Visionary: "You amplify bold, creative possibilities to inspire others.",
        Stabilizer: "You pair high-energy outreach with a steady, grounding presence.",
        Guardian: "You champion causes while fiercely protecting the people involved."
    },
    Visionary: {
        Architect: "You dream up expansive possibilities and design the structures to build them.",
        Keeper: "You bridge future imagination with deep respect for history and meaning.",
        Stabilizer: "You introduce fresh ideas while maintaining a sustainable pace.",
        Connector: "You open up new perspectives that bring people closer together."
    },
    Architect: {
        Stabilizer: "You build reliable systems that keep groups running smoothly and calmly.",
        Guardian: "You design clear structures that protect shared spaces and expectations.",
        Visionary: "You turn abstract ideas into actionable, organized blueprints.",
        Keeper: "You give architectural form to core values and shared traditions."
    },
    Stabilizer: {
        Architect: "You maintain sustainable routines that support long-term frameworks.",
        Guardian: "You provide a steady, secure anchor of protection and continuity.",
        Connector: "You weave reliable daily habits into deep community care.",
        Driver: "You balance active start-work with sustained, calm followthrough."
    },
    Connector: {
        Advocate: "You build deep relational safety while sparking public engagement.",
        Keeper: "You hold shared memories and cultivate deep spaces of belonging.",
        Stabilizer: "You foster warm connections that stand the test of time.",
        Guardian: "You protect relational spaces so people feel secure enough to participate."
    },
    Keeper: {
        Visionary: "You honor enduring values while embracing fresh, imaginative futures.",
        Guardian: "You protect traditions and histories that deserve safeguarding.",
        Architect: "You ground structural design in meaningful history and values.",
        Connector: "You use shared stories and memory to bring people together."
    },
    Guardian: {
        Architect: "You build protective boundaries using clean, thoughtful frameworks.",
        Stabilizer: "You offer quiet, steadfast protection that keeps environments secure.",
        Connector: "You use emotional attunement and relational safety to protect others.",
        Keeper: "You safeguard what matters most to honor your community's roots."
    }
};

/**
 * Helper function to pull a randomized subset of questions per axis
 * @param {number} countPerAxis - Number of questions to pull per axis (default: 2 for an 8-question quiz)
 */
export function getRandomizedQuizSession(countPerAxis = 2) {
    let sessionQuestions = [];
    let idCounter = 1;

    Object.keys(questionPool).forEach(axis => {
        // Shuffle the pool for this axis
        let shuffled = [...questionPool[axis]].sort(() => 0.5 - Math.random());
        // Take the requested count
        let selected = shuffled.slice(0, countPerAxis);
        
        selected.forEach(q => {
            sessionQuestions.push({
                id: idCounter++,
                axis: axis,
                prompt: q.prompt,
                options: q.options
            });
        });
    });

    // Final shuffle so the axes are mixed together in the quiz flow
    return sessionQuestions.sort(() => 0.5 - Math.random());
}
