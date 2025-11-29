
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const DK_QUESTS = {
    'dk_save_funky': {
        id: 'dk_save_funky',
        title: "The Serpent in the Surf Shack",
        subtitle: "Assassination Protocol: Active",
        type: QUEST_TYPES.RESCUE,
        category: 'Personal - Donkey Kong',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'kong_kremling_cold_war',
        objective: "Protect Funky Kong from the assassin Galypso.",
        assignees: ['donkey_kong'],
        primaryAssignee: 'donkey_kong',
        description: "The truce is broken. King K. Rool was overheard ordering his top assassin, the camouflaged Kremling 'Galypso', to eliminate Funky Kong. Funky is currently at his Surf Shack on the coast, unaware that a hit squad is closing in. DK must race against time to intercept the assassins before they strike.",
        difficulty: { overall: DIFFICULTY.HARD, combat: DIFFICULTY.HARD, speed: DIFFICULTY.CRITICAL },
        tags: ['rescue', 'combat', 'time-sensitive', 'jungle'],
        dates: { added: { year: 1040, monthIndex: 6, day: 18 }, deadline: { year: 1040, monthIndex: 6, day: 19 } },
        
        loreEntries: ['galypso_profile', 'funky_kong', 'kremling_tactics'],

        consequences: {
            success: "Funky survives. War is declared openly.",
            failure: "Funky is assassinated. The DK Crew loses their transport and tech expert.",
            partial: "Funky is wounded, shack destroyed."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Funky's Special Board", description: "A surfboard that works on lava" },
                { type: 'reputation', faction: 'dk_crew', amount: 1000, description: "Family Savior" }
            ],
            xp: 6000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Secure Funky", description: "Reach the surf shack. Galypso is likely already there." },
            { id: 'm2', status: 'locked', title: "Defeat Galypso", description: "The assassin uses active camouflage. Watch the water." }
        ]
    }
};
