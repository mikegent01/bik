
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const GUILDS_QUESTS = {
    'guild_gryphon_contract_1': {
        id: 'guild_gryphon_contract_1',
        title: "The Road to Vemilia",
        subtitle: "Gilded Gryphon Contract",
        type: QUEST_TYPES.BOUNTY,
        category: 'Guilds',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Escort a high-value magitek shipment through bandit territory.",
        assignees: ['party'],
        primaryAssignee: 'party',
        description: "Commander Valerius of the Gilded Gryphon has a contract available. A caravan carrying unstable magitek cores needs to get from the Capital to Vemilia. The route passes through the Whispering Woods, known for bandit ambushes and rogue elementals. The pay is good, but the cargo explodes if jostled too hard.",
        difficulty: { overall: DIFFICULTY.MODERATE, combat: DIFFICULTY.MODERATE, survival: DIFFICULTY.MODERATE },
        tags: ['escort', 'combat', 'mercenary'],
        
        loreEntries: ['gilded_gryphon_charter', 'magitek_volatility'],

        rewards: {
            guaranteed: [
                { type: 'gold', amount: 2000 },
                { type: 'reputation', faction: 'iron_legion', amount: 100, description: "Reliable Mercenaries" }
            ],
            conditional: [
                { condition: "Zero cargo damage", reward: { type: 'item', name: "Magitek Core", description: "A spare volatile core" }}
            ],
            xp: 3000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Accept Contract", description: "Meet Commander Valerius at the Gryphon's Roost." },
            { id: 'm2', status: 'locked', title: "The Journey", description: "Defend the caravan for 3 days of travel." }
        ]
    },

    'guild_mages_anomaly': {
        id: 'guild_mages_anomaly',
        title: "Contain the Anomaly",
        subtitle: "Mages' Guild Request",
        type: QUEST_TYPES.MYSTERY,
        category: 'Guilds',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.HIGH,
        objective: "Close a reality rift leaking creatures near the Innovation Spire.",
        assignees: ['party'],
        primaryAssignee: 'party',
        description: "Janna Brightspark's latest experiment has punched a hole in reality. Small, aggressive void-critters are leaking into the city. The Guild needs discreet contractors to enter the rift, find the anchor, and shut it down before the Archmages find out.",
        difficulty: { overall: DIFFICULTY.HARD, magic: DIFFICULTY.HARD },
        tags: ['magic', 'combat', 'dimensional'],
        
        rewards: {
            guaranteed: [
                { type: 'item', name: "Scroll of Banishment", description: "Useful against summons" },
                { type: 'reputation', faction: 'mages_guild', amount: 300, description: "Discreet Problem Solver" }
            ],
            xp: 4000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Enter Rift", description: "Use Janna's phase-key to enter the anomaly." },
            { id: 'm2', status: 'locked', title: "Stabilize", description: "Defeat the Void Mother protecting the anchor." }
        ]
    }
};
