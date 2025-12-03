

import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const ARCHIE_QUESTS = {
    'archie_fugitive_of_the_accords': {
        id: 'archie_fugitive_of_the_accords',
        title: "Fugitive of the Accords",
        subtitle: "Wanted: Dead or Alive (or Licensed?)",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Archie',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Survive the Manor, hunt the final Wraith, and navigate the fragile truce with the Mages' Guild.",
        assignees: ['archie'],
        primaryAssignee: 'archie',
        difficulty: { overall: DIFFICULTY.DEADLY, magic: DIFFICULTY.HARD, stealth: DIFFICULTY.HARD, social: DIFFICULTY.DEADLY },
        tags: ['survival', 'law', 'magic', 'escape', 'warrant'],
        dates: { added: { year: 1040, monthIndex: 6, day: 20 }, updated: { year: 1040, monthIndex: 6, day: 20 }, deadline: { year: 1040, monthIndex: 6, day: 21 } },
        
        description: "Archie's status has shifted from 'Kill on Sight' to 'Provisionally Useful'. After aiding in the Solarium battle and refraining from using his signature Fireball (mostly), a senior Magus handed him an official Guild Card. It's a reprieve, not a pardon. However, his anger at learning that 'cleansing' requires blood led him to shatter a mirror in the Ruined Hall. He has now been sent downstairs to hunt the Arcane Wraith alone—a test of his loyalty, or a suicide mission. The Oracle demands a death to fuel the ritual.",

        loreEntries: ['autumnwood_accords', 'aegis_magi_tactics', 'magical_crimes_act', 'guild_membership_protocols'],

        consequences: {
            success: "Archie proves his worth, potentially earning a real pardon or at least a trial.",
            failure: "Archie is executed by the Legion or the Guild once his usefulness ends.",
            partial: "Archie survives but is forced into servitude as a Guild enforcer."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Provisional Guild Card", description: "Grants access to basic Guild services, monitored by tracking spells" }
            ],
            conditional: [
                { condition: "Kill the Wraith alone", reward: { type: 'reputation', faction: 'mages_guild', amount: 300, description: "Competence proven" }},
                { condition: "Rebel against the Oracle", reward: { type: 'reputation', faction: 'liberated_toads', amount: 300, description: "Defied the Blood Magic" }}
            ],
            xp: 5000
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Confession", 
                description: "Archie posted the confession to Wahbook at 07:45. By 08:00, it had 2,000 likes and one official warrant.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            },
            {
                id: 'm2', 
                status: 'completed', 
                title: "The Solarium Test",
                description: "Archie did NOT cast Fireball. He threw a twig. The Guild noticed. He has been issued a provisional license.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            },
            {
                id: 'm3',
                status: 'active',
                title: "The Wraith Hunt",
                description: "Descend to the lower levels. Find the Arcane Wraith. Kill it. The Oracle demands blood, the Legion demands order, and Archie just wants to not be arrested.",
                goals: [
                    { text: "Locate the Wraith", status: 'active' },
                    { text: "Destroy it without causing collateral damage", status: 'active' },
                    { text: "Return alive with proof of kill", status: 'pending' }
                ]
            }
        ],
        npcs: { enemies: ['arcane_wraith'], keyNpcs: ['self_reflection_oracle', 'senior_magus', 'legion_spy'] }
    },

    'archie_god_toad_hunt': {
        id: 'archie_god_toad_hunt',
        title: "An Audience with a God",
        subtitle: "Sins of the Father",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Archie',
        status: QUEST_STATUS.ONGOING,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'mushroom_civil_war',
        objective: "Confront the 'God Toad' (formerly known as the Evil Toad) to understand the nature of the Star Fragments and atone for creating him.",
        assignees: ['archie'],
        primaryAssignee: 'archie',
        description: "Archie didn't just betray his former boss; he accidentally ascended him. The toad once known as 'Orange T' utilized a Star Fragment to become a warping divinity. Now allied with Fawful, this 'God Toad' represents a cosmological threat that Archie feels personally responsible for. To fix this, he must enter the heart of Fawful's territory and stare his creation in the many, many eyes.",
        difficulty: { overall: DIFFICULTY.DEADLY, sanity: DIFFICULTY.EXTREME },
        tags: ['divine', 'guilt', 'mystery', 'boss-hunt'],
        
        loreEntries: ['star_fragment_corruption', 'orange_t_biography', 'apotheosis_theory'],

        rewards: {
            guaranteed: [
                { type: 'knowledge', name: "Truth of the Star", description: "Understanding the fragment's origin" }
            ],
            xp: 8000
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "Locate the God", 
                description: "Archie confirmed the God Toad's presence at Fawful's Gala. The aura was unmistakable.", 
                completedDate: { year: 1040, monthIndex: 6, day: 11 } 
            },
            { 
                id: 'm2', 
                status: 'active', 
                title: "Infiltrate the Castle", 
                description: "Fawful's Castle is a fortress of madness. Archie needs a way in that doesn't involve being eaten by a mechanical midbus.", 
                goals: [{ text: "Find a secret entrance", status: 'active' }] 
            },
            { 
                id: 'm3', 
                status: 'locked', 
                title: "The Audience", 
                description: "Speak the words that need to be spoken. Survive the answer." 
            }
        ]
    },

    'archie_third_eye_escape': {
        id: 'archie_third_eye_escape',
        title: "The Third Eye Escape",
        subtitle: "A Trip Through Nowhere",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Archie',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'raventree_manor',
        objective: "Escape Cohort custody and survive the dimensional jaunt.",
        description: "Captured by Speaker L's Pond Patrol, Archie was moments away from a tribunal. In a flash of desperation, he activated his 'Third Eye' ability, tearing a hole in space. He tumbled through a Rakasha relay station and a Mindflayer colony before crashing back into Raventree Manor. The experience has left him vibrating with residual dimensional energy.",
        assignees: ['archie'],
        primaryAssignee: 'archie',
        dates: { added: { year: 1040, monthIndex: 6, day: 20 }, updated: { year: 1040, monthIndex: 6, day: 20 } },
        
        rewards: {
            guaranteed: [
                { type: 'ability', name: "Dimension Hop (Unstable)", description: "Can teleport short distances, 50% chance of error" }
            ],
            xp: 2000
        },

        milestones: [
            { id: 'm1', status: 'completed', title: "Escape Custody", description: "Fled the 'Pond Patrol' with help from a spy." },
            { id: 'm2', status: 'completed', title: "Dimensional Drift", description: "Survived the Rakasha relay and Mindflayer colony." },
            { id: 'm3', status: 'completed', title: "Return", description: "Returned to Raventree Manor, slightly traumatized." }
        ]
    },

    'archie_jesters_masterpiece': {
        id: 'archie_jesters_masterpiece',
        title: "The Jester's Masterpiece",
        subtitle: "Art Through Chaos",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Archie',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.LOW,
        objective: "Create an act of chaos so profound it impresses the Cosmic Jesters.",
        assignees: ['archie'],
        primaryAssignee: 'archie',
        description: "The Greenhouse Inferno was an accident, but the Jesters loved it. Now, Archie feels the pressure to perform. He wants to top it with a deliberate 'masterpiece'—a prank or act of destruction that defies logic and authority in equal measure.",
        difficulty: { overall: DIFFICULTY.MODERATE, creativity: DIFFICULTY.HARD },
        tags: ['chaos', 'art', 'prank', 'optional'],
        
        rewards: {
            conditional: [
                { condition: "Make the Empire laugh", reward: { type: 'item', name: "Jester's Cap", description: "Immunity to confusion effects" }}
            ]
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Conception", description: "Identify a target worthy of the 'joke'." },
            { id: 'm2', status: 'locked', title: "Execution", description: "Pull it off without getting caught." }
        ]
    },

    'archie_kamek_conundrum': {
        id: 'archie_kamek_conundrum',
        title: "The Kamek Conundrum",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Archie',
        status: QUEST_STATUS.ONGOING,
        priority: QUEST_PRIORITY.MEDIUM,
        arcId: 'mushroom_civil_war',
        objective: "Secure leverage over Kamek to ensure safety within the Koopa alliance.",
        assignees: ['archie'],
        primaryAssignee: 'archie',
        description: "Kamek views Archie as a chaotic liability and a rival spellcaster. To ensure he doesn't 'accidentally' get targeted by a Magikoopa blast during the next battle, Archie needs dirt. Serious dirt.",
        milestones: [
            { id: 'm1', status: 'active', title: "Dig for Dirt", description: "Find embarrassing secrets or tactical weaknesses about Kamek." }
        ]
    }
};
