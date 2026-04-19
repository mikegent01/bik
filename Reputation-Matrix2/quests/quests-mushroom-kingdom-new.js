
// This file contains new "Request" quests for the Mushroom Kingdom and surrounding areas.
// UPDATED: Standardized schema to use 'milestones', 'QUEST_PRIORITY', and 'QUEST_TYPES'.

import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const NEW_MK_QUESTS = {
    'toadette_loyalty_test': {
        id: 'toadette_loyalty_test',
        title: "Toadette's Loyalty Test",
        type: QUEST_TYPES.FACTION,
        category: 'Peach Loyalists',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.HIGH,
        objective: "Survive the loyalty test in the sewers.",
        assignees: ['party'],
        description: "Toadette put recruits through a brutal, illusional test to ensure they were ready to die for the cause.",
        milestones: [
            { id: 'm1', status: 'completed', title: "The Sewer Mission", description: "Entered the sewers to investigate 'cultists'." },
            { id: 'm2', status: 'completed', title: "The Illusion", description: "Realized the death and danger were manufactured." }
        ]
    },
    'bramblehaven_siege': {
        id: 'bramblehaven_siege',
        title: "The Bramblehaven Siege",
        type: QUEST_TYPES.COMBAT,
        category: 'Peach Loyalists',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.HIGH,
        objective: "Clear Fawful's forces from Bramblehaven.",
        assignees: ['peach_loyalists'],
        description: "The outer walls have fallen. Now comes the street fighting.",
        milestones: [
            { id: 'm1', status: 'completed', title: "Dawn Assault", description: "Breached the outer walls." },
            { id: 'm2', status: 'active', title: "Secure Town", description: "Eliminate remaining pockets of resistance." }
        ]
    },
   
    'eager_rescue_lead': {
        id: 'eager_rescue_lead',
        title: "Lead on Eager",
        type: QUEST_TYPES.RESCUE,
        category: 'Liberated Toads',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Pursue Green T’s tip regarding Eager.",
        assignees: ['party'],
        milestones: [
            { id: 'm1', status: 'active', title: "Verify Intel", description: "Confirm the location." }
        ],
        sessionNotes: [
            { date: { year: 1040, monthIndex: 6, day: 1 }, content: "The group is planning scouting maneuvers using teleportation and diversions to locate a color-changing creature." },
        ]
    }
};
