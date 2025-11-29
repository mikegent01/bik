
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const MYSTERY_QUESTS = {
    'hidden_echo_in_the_core': {
        id: 'hidden_echo_in_the_core',
        title: "The Echo in the Core",
        type: QUEST_TYPES.MYSTERY,
        category: 'Mystery',
        status: QUEST_STATUS.HIDDEN,
        priority: QUEST_PRIORITY.HIGH,
        objective: "Investigate the strange energy in the Vigilance core.",
        assignees: ['party'],
        milestones: [
            { id: 'm1', status: 'active', title: "Analyze", description: "Ryan needs to check the readings." }
        ]
    },
    'mystery_imposter_toad': {
        id: 'mystery_imposter_toad',
        title: "The Impostor Toad",
        type: QUEST_TYPES.MYSTERY,
        category: 'Mystery',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        objective: "Identify the fake Dan.",
        assignees: ['party'],
        description: "Lario claims the Dan with the party is a fake.",
        milestones: [
            { id: 'm1', status: 'completed', title: "The Warning", description: "Lario warned the party." },
            { id: 'm2', status: 'active', title: "Observe", description: "Watch for slips." }
        ]
    }
};
        