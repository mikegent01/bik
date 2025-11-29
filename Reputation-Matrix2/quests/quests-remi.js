
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const REMI_QUESTS = {
    'remi_noble_debt': {
        id: 'remi_noble_debt',
        title: "A Noble's Debt",
        subtitle: "The Price of Education",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Remi',
        status: QUEST_STATUS.ONGOING,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Pay off the crippling debt owed to Lord Harrington for Academy tuition.",
        assignees: ['remi'],
        primaryAssignee: 'remi',
        description: "Remi's education at the Kivotos Academy wasn't free. Lord Harrington, a minor Imperial noble with major connections, holds her contract. He expects regular payments, or 'favors'. Currently, Remi is behind on payments and Harrington's collectors are getting close.",
        difficulty: { overall: DIFFICULTY.MODERATE, economic: DIFFICULTY.HARD },
        tags: ['debt', 'finance', 'survival'],
        dates: { added: { year: 1040, monthIndex: 5, day: 10 } },
        
        loreEntries: ['lord_harrington', 'student_loans', 'kivotos_economy'],

        rewards: {
            guaranteed: [
                { type: 'status', name: "Debt Free", description: "Freedom from Harrington's influence" }
            ],
            xp: 3000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Earn Gold", description: "Accumulate 5,000 gold through adventuring or jobs." },
            { id: 'm2', status: 'locked', title: "The Payoff", description: "Deliver the payment without getting robbed." }
        ]
    },

    'remi_waluigi_espionage': {
        id: 'remi_waluigi_espionage',
        title: "WAH! A Little Espionage!",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Remi',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Eavesdrop on an Imperial meeting for Waluigi.",
        assignees: ['remi'],
        primaryAssignee: 'remi',
        description: "Waluigi has 'hired' Remi (read: vaguely threatened/bribed) to spy on a secret meeting between a high-ranking Imperial logistics officer and a Merchant Prince. He wants to know what they're shipping. Remi needs to plant a bug or listen in without being caught.",
        difficulty: { overall: DIFFICULTY.MODERATE, stealth: DIFFICULTY.HARD },
        tags: ['espionage', 'stealth', 'waluigi'],
        
        rewards: {
            guaranteed: [
                { type: 'item', name: "Waluigi's Autographed Bomb", description: "A bob-omb with a mustache drawn on it" },
                { type: 'gold', amount: 500 }
            ],
            xp: 2000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Identify Target", description: "Find the meeting location at the Port of Mighdural." },
            { id: 'm2', status: 'locked', title: "The Sting", description: "Record the conversation." }
        ]
    }
};
