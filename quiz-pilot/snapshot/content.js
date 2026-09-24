/* ==========================================================================
   Pilot results snapshot — results-screen content
   ==========================================================================
   Frozen copy of the styles, identityBlurbs, and colorActivities exports
   from quiz/js/quiz-data.js, taken 2026-09-24 for the pilot. The pilot's
   results screen reads from here, not from the live file, so the result
   participants rate stays identical for the whole data-collection window
   while the public results page keeps evolving. Do not edit during the
   pilot. The question bank is deliberately NOT here — the pilot imports
   the live questions so it measures the same instrument the public takes.
   ========================================================================== */

export const styles = {
    "Red": {
        "name": "Red",
        "reflection": "Movement"
    },
    "Green": {
        "name": "Green",
        "reflection": "Steadiness"
    },
    "Orange": {
        "name": "Orange",
        "reflection": "Enthusiasm"
    },
    "Purple": {
        "name": "Purple",
        "reflection": "Belonging"
    },
    "Blue": {
        "name": "Blue",
        "reflection": "Clarity"
    },
    "Violet": {
        "name": "Violet",
        "reflection": "Safety"
    },
    "Yellow": {
        "name": "Yellow",
        "reflection": "Possibility"
    },
    "Indigo": {
        "name": "Indigo",
        "reflection": "Memory"
    }
};

export const identityBlurbs = {
    "Red": {
        "primary": "Red is you at your most unstoppable. When a project stalls, you're the one who gets it moving again. You'd rather try something imperfect today than wait for a perfect plan tomorrow.",
        "short": "Red brings the momentum. You push things forward when everyone else is still talking about it."
    },
    "Green": {
        "primary": "Green is you at your steadiest. While others move on to the next exciting thing, you keep showing up, day after day, season after season. That kind of endurance is rare, and the climate movement genuinely needs it.",
        "short": "Green brings the steadiness. You're the reason things keep going long after the excitement fades."
    },
    "Orange": {
        "primary": "Orange is you at your warmest. You walk into a room and people feel like they belong there too. That warmth turns quiet interest into real momentum.",
        "short": "Orange brings the warmth. You make people feel welcome, and you turn quiet interest into real momentum."
    },
    "Purple": {
        "primary": "Purple is you at your most connected. You notice who's missing from the room, and you bring them in. That instinct turns separate efforts into one real movement.",
        "short": "Purple brings the connection. You notice who's missing from the room, and you bring them in."
    },
    "Blue": {
        "primary": "Blue is you at your clearest. You look at a messy problem and see the system underneath it, then you build something that actually works. That clarity turns a tangled goal into a plan people can follow.",
        "short": "Blue brings the clarity. You turn a messy problem into a plan people can actually follow."
    },
    "Violet": {
        "primary": "Violet is you at your most protective. When something worth saving is at risk, you're the one standing in front of it. That protectiveness is what keeps hard-won progress from slipping away.",
        "short": "Violet brings the protection. When something worth saving is at risk, you're the one standing in front of it."
    },
    "Yellow": {
        "primary": "Yellow is you at your most imaginative. You're the one still asking what if when everyone else has given up on the old approach. That kind of imagination opens doors other people can't see yet.",
        "short": "Yellow brings the imagination. You're the one still asking 'what if' when everyone else has given up on the old approach."
    },
    "Indigo": {
        "primary": "Indigo is you at your most grounded. You remember what's worked before, and you make sure good lessons don't get lost the next time around. That memory keeps the movement from repeating its own mistakes.",
        "short": "Indigo brings the memory. You make sure the lessons already learned don't get lost."
    }
};

export const colorActivities = {
    "Red": [
        "Leading a local cleanup or restoration shift",
        "Starting a small action crew with friends",
        "Stepping up as a project lead"
    ],
    "Orange": [
        "Hosting a climate storytelling night",
        "Recording a video about a local project",
        "Joining an outreach team that spreads the word"
    ],
    "Yellow": [
        "Going to a climate innovation workshop",
        "Offering a fresh angle at a planning meeting",
        "Brainstorming zero-waste solutions with a local group"
    ],
    "Green": [
        "Adopting a local habitat",
        "Joining a trail or garden crew",
        "Taking a recurring conservation shift"
    ],
    "Blue": [
        "Running logistics for a cleanup event",
        "Building a simple sign-up system",
        "Offering your organizing skills to a nonprofit"
    ],
    "Indigo": [
        "Supporting a land trust long-term",
        "Helping maintain a local heritage site",
        "Recording an elder's story about the area"
    ],
    "Purple": [
        "Volunteering as a welcomer for a climate group",
        "Hosting a small gathering that builds trust",
        "Helping lead a conversation about local needs"
    ],
    "Violet": [
        "Joining a habitat defense team",
        "Volunteering with a climate justice group",
        "Helping with trail restoration work"
    ]
};
