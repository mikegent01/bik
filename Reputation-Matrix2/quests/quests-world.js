
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const WORLD_QUESTS = {
    'war_of_blood_and_moon': {
        id: 'war_of_blood_and_moon',
        title: "The War of Blood and Moon",
        type: QUEST_TYPES.WORLD,
        category: 'World',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'shadow_war',
        objective: "Resolve the Vampire-Werewolf conflict.",
        assignees: ['party'],
        milestones: [
            { id: 'm1', status: 'active', title: "Investigate", description: "Gather evidence from both sides." }
        ]
    },
    'world_imperial_demand': {
        id: 'world_imperial_demand',
        title: "The Imperial Demand",
        type: QUEST_TYPES.POLITICAL,
        category: 'World',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'capital_intrigue',
        objective: "Respond to the Iron Legion's demand for Green T.",
        assignees: ['party'],
        description: "The Legion demands Green T and Lario be handed over.",
        milestones: [
            { id: 'm1', status: 'active', title: "The Ultimatum", description: "Decide: Comply or Defy." }
        ]
    }
};
        