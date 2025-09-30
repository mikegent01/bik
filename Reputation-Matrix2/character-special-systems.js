// character-special-systems.js

export const CHARACTER_MECHANICS = {
    'archie': {
        id: 'chaos_agent_mechanic',
        title: "Chaos Agent",
        icon: '💥',
        description: "Archie Miser is <strong>The Chaos Agent</strong>. A title, a lifestyle, and a tactical liability all in one. His provocative and unpredictable actions generate 'Infamy'. High Infamy unlocks unique opportunities with chaotic factions (like the Cosmic Jesters) but also attracts significant negative attention from lawful or orderly factions, potentially triggering special negative events or bounty hunters.",
        current_level: 1,
        levels: [
            {
                level: 1,
                name: "Minor Anarchist",
                infamy_threshold: 100,
                description: "Causes minor disruptions and is seen as a nuisance by authorities."
            },
            {
                level: 2,
                name: "Agent of Mayhem",
                infamy_threshold: 250,
                description: "Attracts the attention of both chaos cults and law enforcement. Unlocks new dialogue options with chaotic characters."
            },
            {
                level: 3,
                name: "Harbinger of Pandemonium",
                infamy_threshold: 500,
                description: "Becomes a folk hero to rebels and a high-priority target for empires. May trigger special bounty hunter encounters."
            }
        ],
        current_infamy: 30, // Gained from the Recruitment Fiasco
        log: [
            { infamy: 15, reason: "Publicly insulted Captain Toadette and attempted to poach her army." },
            { infamy: 15, reason: "Incited a multi-faction flame war, annoying allies and enemies alike." }
        ]
    }
};