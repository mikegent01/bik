
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const BOWSER_QUESTS = {
    'bowser_rally_remnants': {
        id: 'bowser_rally_remnants',
        title: "Rally the Remnants",
        subtitle: "The Return of the King",
        type: QUEST_TYPES.FACTION,
        category: 'Personal - Bowser',
        status: QUEST_STATUS.PENDING,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'mushroom_civil_war',
        objective: "Unite the scattered Koopa Troop factions under one banner again.",
        assignees: ['bowser'],
        primaryAssignee: 'bowser',
        description: "The Koopa Troop has fractured in Bowser's absence. Kamek leads the largest remnant in the Valley, but other warlords have gone rogue. Bowser must remind them who wears the crown—violently, if necessary. His first step is re-establishing contact with Kamek without alerting the Mushroom Regency.",
        difficulty: { overall: DIFFICULTY.HARD, leadership: DIFFICULTY.HARD, combat: DIFFICULTY.MODERATE },
        tags: ['leadership', 'army', 'civil-war'],
        
        loreEntries: ['kamek_the_advisor', 'koopa_troop_fracture', 'bowsers_fury'],

        rewards: {
            guaranteed: [
                { type: 'army', name: "Koopa Airship Armada", description: "Control over the fleet" },
                { type: 'reputation', faction: 'koopa_troop', amount: 1000, description: "The King is Back" }
            ],
            xp: 7000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Contact Kamek", description: "Send a secure magical message to the Magikoopa." },
            { id: 'm2', status: 'locked', title: "Crush the Usurper", description: "Defeat General Shellshock, who claims Bowser abandoned them." }
        ]
    },

    'bowser_my_heir': {
        id: 'bowser_my_heir',
        title: "My Heir!",
        subtitle: "Junior in Peril",
        type: QUEST_TYPES.RESCUE,
        category: 'Personal - Bowser',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.CRITICAL,
        objective: "Rescue Bowser Jr. from Captain Syrup's flagship.",
        assignees: ['bowser'],
        primaryAssignee: 'bowser',
        description: "Captain Syrup has made a fatal error. She has kidnapped Bowser Jr. and demanded a ransom. Bowser does not pay ransoms. He pays in fire. The goal is simple: Board the S.S. Teacup, retrieve Junior, and sink the ship.",
        difficulty: { overall: DIFFICULTY.DEADLY, combat: DIFFICULTY.EXTREME },
        tags: ['rescue', 'naval', 'boss-fight', 'rage'],
        
        rewards: {
            guaranteed: [
                { type: 'ally', name: "Bowser Jr.", description: "Heir to the throne, skilled with a paintbrush" }
            ],
            conditional: [
                { condition: "Sink the ship", reward: { type: 'reputation', faction: 'freelancer_underworld', amount: 500, description: "Feared by pirates", name: "Pirate Scourge" }}
            ],
            xp: 8000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "The Meeting", description: "Confront Syrup at the designated drop point." },
            { id: 'm2', status: 'locked', title: "The rampage", description: "Destroy everything that isn't Junior." }
        ]
    }
};
