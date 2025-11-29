
// quests-data.js

export const QUEST_DATA = {
    'archie_fugitive_of_the_accords': {
        id: 'archie_fugitive_of_the_accords',
        title: "Fugitive of the Accords",
        type: 'personal',
        category: 'Personal - Archie',
        is_updated: true,
        objective: "Evade capture by the Mages' Guild and Iron Legion while trapped in Raventree Manor.",
        assignee: "Archie",
        assigneeKey: 'archie',
        status: "active",
        motivation: "The public confession was a mistake. Now the Guild Envoys are in the house, and the Legion has a triangulation lock. Survival is the only priority.",
        steps: [
            { id: 'step1', title: "The Confession Fallout", status: 'completed', description: "Archie's public confession triggered warrants from the Mages' Guild." },
            { id: 'step2', title: "A Tense Truce", status: 'active', description: "A rogue Mage has offered a temporary alliance against the Manor's ghosts, but he intends to arrest Archie once the danger passes." },
            { id: 'step3', title: "The Upper House", status: 'active', description: "Follow the Oracle into the Upper House to escape immediate capture." }
        ]
    },
    'main_quest_raventree': {
        id: 'main_quest_raventree',
        title: "The Curse of Raventree",
        type: 'main',
        category: 'Main Story',
        objective: "Uncover the source of the time loop and the mirror monsters within Raventree Manor.",
        assignee: "Party",
        assigneeKey: 'party',
        status: "active",
        is_updated: true,
        steps: [
            { id: 'enter_manor', title: "Enter the Manor", status: 'completed', description: "Access gained via Waluigi's 'key'." },
            { id: 'survive_night', title: "Survive the Night", status: 'completed', description: "Fought off books, coats, and rust monsters." },
            { id: 'greenhouse', title: "The Greenhouse", status: 'completed', description: "Destroyed the corrupted greenhouse." },
            { id: 'upper_house', title: "Breach the Upper House", status: 'active', description: "Cross the threshold into the mirror-distorted upper levels." }
        ]
    },
    'humpik_crystals': {
        id: 'humpik_crystals',
        title: "Dark Resonance",
        type: 'personal',
        category: 'Personal - Humpik',
        objective: "Determine the nature and use of the Dark Crystals looted from the Magi.",
        assignee: "Humpik",
        assigneeKey: 'humpik',
        status: "active",
        motivation: "The mage called them evil. Humpik calls them heavy. They might be useful for crafting or smashing.",
        steps: [
            { id: 'acquire', title: "Acquire Crystals", status: 'completed', description: "Pocketed while the Magi weren't looking." },
            { id: 'analyze', title: "Analyze Properties", status: 'pending', description: "Find a safe place to study them without blowing up." }
        ]
    },
    'rescue_green_t': {
        id: 'rescue_green_t',
        title: "Through the Looking Glass",
        type: 'main',
        category: 'Main Story',
        objective: "Rescue Green T from the Mirror Dimension.",
        assignee: "Party",
        assigneeKey: 'party',
        status: "active",
        steps: [
            { id: 'witness', title: "Witness the Abduction", status: 'completed', description: "Green T was pulled into a mirror by a glass entity." },
            { id: 'find_entry', title: "Find an Entry Point", status: 'active', description: "The Oracle suggests the Upper House holds the key to the mirror world." }
        ]
    }
};
