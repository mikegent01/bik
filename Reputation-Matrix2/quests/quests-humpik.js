
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const HUMPIK_QUESTS = {
    'humpik_honor_quest': {
        id: 'humpik_honor_quest',
        title: "An Axe to Grind",
        subtitle: "Dwarven Honor vs. Imperial Steel",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Humpik',
        status: QUEST_STATUS.PENDING,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Restore honor by defeating an Iron Legion champion in a formal duel.",
        assignees: ['humpik'],
        primaryAssignee: 'humpik',
        description: "Colonel Vera Steelstorm called Humpik a 'filthy savage' during the Vigilance standoff. To a Dwarf of the Stonecarver's Brethren, this insult cannot stand. Humpik intends to challenge her or her champion to a duel of honor. He needs to learn the Imperial Dueling Code to ensure they cannot refuse.",
        difficulty: { overall: DIFFICULTY.HARD, combat: DIFFICULTY.HARD, social: DIFFICULTY.MODERATE },
        tags: ['honor', 'combat', 'rivalry'],
        
        loreEntries: ['dwarven_grudges', 'imperial_dueling_code', 'colonel_steelstorm'],

        rewards: {
            guaranteed: [
                { type: 'reputation', faction: 'iron_legion', amount: 200, description: "Respect for strength" },
                { type: 'item', name: "Legion Officer's Pistol", description: "Trophy of victory" }
            ],
            xp: 4500
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Learn the Code", description: "Find a copy of the Imperial Dueling Code." },
            { id: 'm2', status: 'locked', title: "Issue Challenge", description: "Send formal challenge to Steelstorm." },
            { id: 'm3', status: 'locked', title: "The Duel", description: "Win." }
        ]
    },

    'humpik_kings_physician': {
        id: 'humpik_kings_physician',
        title: "The King's Physician",
        subtitle: "A Cure from the Depths",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Humpik',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'capital_intrigue',
        objective: "Acquire a cure for Dan's magical malady.",
        assignees: ['humpik'],
        primaryAssignee: 'humpik',
        description: "When Dan fell ill from the magical backlash, Humpik took it upon himself to find a cure. He braved the lava-filled sewers of the Capital, negotiated with a senile dragon, and bullied an Archmage into brewing a restorative elixir. It was a triumph of stubbornness over common sense.",
        dates: { added: { year: 1040, monthIndex: 6, day: 14 }, updated: { year: 1040, monthIndex: 6, day: 15 } },
        
        rewards: {
            guaranteed: [
                { type: 'item', name: "Elixir of Vitality (Empty Bottle)", description: "Souvenir" },
                { type: 'reputation', faction: 'liberated_toads', amount: 300, description: "Gratitude" }
            ],
            xp: 3500
        },

        milestones: [
            { id: 'm1', status: 'completed', title: "The Sewers", description: "Navigated the lava sewers without melting." },
            { id: 'm2', status: 'completed', title: "The Dragon", description: "Traded 'useless' mushrooms for the dragon's scale." },
            { id: 'm3', status: 'completed', title: "The Cure", description: "Obtained the cure from the Archmage." }
        ]
    },

    'humpik_rescue_mission': {
        id: 'humpik_rescue_mission',
        title: "Dwarven Rescue Mission",
        type: QUEST_TYPES.RESCUE,
        category: 'Personal - Humpik',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Rescue captured Koopa Troopas from a Loyalist prison camp.",
        assignees: ['humpik'],
        primaryAssignee: 'humpik',
        description: "Humpik has heard reports of Koopa Troopas—his newfound drinking buddies—being held in a Peach Loyalist internment camp. He intends to break them out, utilizing explosives and grit.",
        milestones: [
            { id: 'm1', status: 'active', title: "Locate Prison", description: "Find the Loyalist camp near Bramblehaven." },
            { id: 'm2', status: 'locked', title: "The Breach", description: "Blow the wall." }
        ]
    }
};
