
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const DK_QUESTS = {
    'dk_save_funky': {
        id: 'dk_save_funky',
        title: "The Serpent in the Surf Shack",
        subtitle: "Assassination Protocol: Foiled",
        type: QUEST_TYPES.RESCUE,
        category: 'Personal - Donkey Kong',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'kong_kremling_cold_war',
        objective: "Protect Funky Kong from the assassin Galypso.",
        assignees: ['donkey_kong'],
        primaryAssignee: 'donkey_kong',
        description: "The truce is broken. King K. Rool was overheard ordering his top assassin, the camouflaged Kremling 'Galypso', to eliminate Funky Kong. DK raced to the Surf Shack and intercepted the assassin moments before the strike. Galypso was beaten back into the ocean, but the message is clear: The Cold War is over. Open conflict has begun.",
        difficulty: { overall: DIFFICULTY.HARD, combat: DIFFICULTY.HARD, speed: DIFFICULTY.CRITICAL },
        tags: ['rescue', 'combat', 'time-sensitive', 'jungle'],
        dates: { added: { year: 1040, monthIndex: 6, day: 18 }, updated: { year: 1040, monthIndex: 6, day: 20 }, completed: { year: 1040, monthIndex: 6, day: 20 } },
        
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
            { 
                id: 'm1', 
                status: 'completed', 
                title: "Secure Funky", 
                description: "DK arrived at the shack just as Galypso decloaked. Funky was mid-shaka.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "Defeat Galypso", 
                description: "The assassin was overpowered by a Banana Slamma and forced to retreat into the sea.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            }
        ]
    }
};
