
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const TOADS_QUESTS = {
    'dan_reclaim_the_staff': {
        id: 'dan_reclaim_the_staff',
        title: "The Staff's Burden",
        subtitle: "The Weight of Command",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Dan',
        status: QUEST_STATUS.FAILED,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Reclaim control of X.O.'s staff and find redemption for the lives lost.",
        assignees: ['dan'],
        primaryAssignee: 'dan',
        difficulty: { overall: DIFFICULTY.DEADLY, magic: DIFFICULTY.DEADLY, emotional: DIFFICULTY.EXTREME },
        tags: ['trauma', 'magic', 'redemption', 'failure'],
        dates: { added: { year: 1040, monthIndex: 6, day: 15 }, updated: { year: 1040, monthIndex: 6, day: 20 } },
        
        description: "Dan's attempt to wield X.O.'s staff during the Legion assault was an act of desperate heroism that ended in catastrophic failure. The staff's raw power overwhelmed him, detonating in a blast that took his right arm and the lives of thirteen fellow toads. Now, the staff is contained but unstable, and Dan is broken—physically maimed and spiritually crushed by guilt. To reclaim the staff is not just about power; it is about proving that the sacrifice was not in vain, and that he is still worthy to lead.",
        
        loreEntries: ['dan_the_survivor', 'the_thirteen_fallen', 'arcane_backlash'],

        consequences: {
            success: "Dan masters the staff, turning a curse into a tool for liberation.",
            failure: "The staff consumes Dan completely, creating a magical anomaly.",
            partial: "Dan rejects the staff but finds a new way to lead without magic."
        },

        rewards: {
            guaranteed: [
                { type: 'trait', name: "Scarred Wisdom", description: "Permanent mental resilience bonus" }
            ],
            conditional: [
                { condition: "Forgive yourself", reward: { type: 'ability', name: "One-Handed Casting", description: "Mastery of somatic components with a disability" }}
            ],
            xp: 5000
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Confrontation", 
                description: "Dan seized the staff amidst the chaos of the Legion boarding action.",
                completedDate: { year: 1040, monthIndex: 6, day: 15 }
            },
            { 
                id: 'm2', 
                status: 'failed', 
                title: "The Detonation", 
                description: "Control was lost. The resulting explosion killed 13 allies and severed Dan's arm. The staff was dropped and remains volatile.",
                completedDate: { year: 1040, monthIndex: 6, day: 15 }
            },
            {
                id: 'm3',
                status: 'active',
                title: "The Recovery",
                description: "Recover from the physical wounds. The psychological wounds may never heal.",
                goals: [
                    { text: "Survive the initial shock", status: 'completed' },
                    { text: "Accept the loss of the arm", status: 'active' },
                    { text: "Face the families of the fallen", status: 'pending' }
                ]
            }
        ]
    },

    'toads_rescue_eager': {
        id: 'toads_rescue_eager',
        title: "Rescue Eager",
        subtitle: "No Toad Left Behind",
        type: QUEST_TYPES.RESCUE,
        category: 'Liberated Toads',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'capital_intrigue',
        objective: "Rescue Eager from his various captors across the Capital.",
        assignees: ['party', 'liberated_toads'],
        primaryAssignee: 'party',
        difficulty: { overall: DIFFICULTY.HARD, combat: DIFFICULTY.MODERATE, stealth: DIFFICULTY.HARD },
        tags: ['rescue', 'urban', 'chase'],
        dates: { added: { year: 1040, monthIndex: 6, day: 14 }, updated: { year: 1040, monthIndex: 6, day: 18 } },
        
        description: "Eager, the youngest and most impulsive of the crew, was captured during the initial scattering. His rescue became a running battle across the Capital city—from a high-security Imperial prison to the kitchens of the Gilded Octopus restaurant, and finally through the lava-filled sewers. The party's persistence paid off, but Eager remains critically injured and traumatized by his ordeal.",

        loreEntries: ['eager_the_scout', 'imperial_prison_system', 'capital_sewers'],

        rewards: {
            guaranteed: [
                { type: 'ally', name: "Eager (Injured)", description: "Eager returns to the party" },
                { type: 'reputation', faction: 'liberated_toads', amount: 200, description: "Loyalty proven" }
            ],
            xp: 3000
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "Locate", 
                description: "Intel confirmed Eager was being held at the Gilded Octopus restaurant as 'exotic stock'.",
                completedDate: { year: 1040, monthIndex: 6, day: 14 }
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "Extract", 
                description: "A raid on the restaurant turned into a sewer chase. Eager was recovered but requires advanced healing.",
                completedDate: { year: 1040, monthIndex: 6, day: 15 }
            }
        ]
    },

    'toads_a_place_to_call_home': {
        id: 'toads_a_place_to_call_home',
        title: "A Place to Call Home",
        subtitle: "Land for the Landless",
        type: QUEST_TYPES.FACTION,
        category: 'Liberated Toads',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'toad_liberation',
        objective: "Establish a permanent, defensible settlement for the Liberated Toads.",
        assignees: ['liberated_toads'],
        primaryAssignee: 'toad_lee',
        difficulty: { overall: DIFFICULTY.HARD, management: DIFFICULTY.HARD, exploration: DIFFICULTY.MODERATE },
        tags: ['settlement', 'survival', 'politics', 'resource-management'],
        dates: { added: { year: 1040, monthIndex: 6, day: 18 }, updated: { year: 1040, monthIndex: 6, day: 20 } },
        
        description: "The loss of the Vigilance has made one thing clear: the Toads cannot live on the run forever. They need land. They need walls. They need a home. Roger and Toad Lee are spearheading the effort to find a suitable location. Options include reclaiming the ruins of Bramblehaven (currently held by ruthless Loyalists), negotiating for land in the dangerous Wilderlands, or finding a hidden valley in the mountains. Each choice carries significant geopolitical risks.",

        loreEntries: ['toad_diaspora', 'wilderlands_geography', 'settlement_requirements'],

        consequences: {
            success: "The Toads establish 'New Toad Town', a sovereign city-state.",
            failure: "The refugees are scattered and absorbed into other factions as second-class citizens.",
            partial: "A hidden camp is established, but it is vulnerable and lacks resources."
        },

        rewards: {
            guaranteed: [
                { type: 'facility', name: "Base of Operations", description: "A safe haven with crafting and rest bonuses" }
            ],
            conditional: [
                { condition: "Secure a trade route", reward: { type: 'income', name: "Tax Revenue", description: "Weekly gold income" }},
                { condition: "Ally with locals", reward: { type: 'unit', name: "Local Militia", description: "Defense bonus" }}
            ],
            xp: 10000
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'active', 
                title: "Scouting Phase", 
                description: "Scout teams are currently evaluating three potential sites.",
                goals: [
                    { text: "Scout Bramblehaven Ruins", status: 'pending' },
                    { text: "Survey the Hidden Valley", status: 'active' },
                    { text: "Investigate the Abandoned Mine", status: 'pending' }
                ]
            },
            { 
                id: 'm2', 
                status: 'locked', 
                title: "Clearance", 
                description: "The chosen site must be cleared of current occupants (monsters or bandits)." 
            },
            { 
                id: 'm3', 
                status: 'locked', 
                title: "Construction", 
                description: "Build housing, defenses, and resource gathering infrastructure." 
            }
        ]
    },

    'liberated_toads_integration': {
        id: 'liberated_toads_integration',
        title: "The Shattered Vow",
        subtitle: "Civil War of the Toads",
        type: QUEST_TYPES.FACTION,
        category: 'Liberated Toads',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'toad_liberation',
        objective: "Resolve the deepening schism between Speaker L's 'First Cohort' and Dan's original group.",
        assignees: ['liberated_toads', 'party'],
        primaryAssignee: 'party',
        difficulty: { overall: DIFFICULTY.HARD, social: DIFFICULTY.DEADLY, politics: DIFFICULTY.HARD },
        tags: ['politics', 'betrayal', 'diplomacy', 'civil-war'],
        dates: { added: { year: 1040, monthIndex: 6, day: 16 }, updated: { year: 1040, monthIndex: 6, day: 20 } },
        
        description: "The unity of the Liberated Toads has fractured. Speaker L, commanding the militant 'First Cohort' (also known as the Pond Patrol), has formally arrested Archie Miser for the Greenhouse Inferno incident. This has created a violent rift with Dan's faction, who view Archie as a flawed but necessary leader. The internal conflict reached a boiling point during the 'Siege of Raventree', where toads drew weapons on toads. With Speaker L now captured by the Iron Legion, the Cohort is leaderless and angry. The party must bridge this divide before the faction destroys itself from within.",

        loreEntries: ['the_first_cohort', 'speaker_l', 'the_unity_vow'],

        consequences: {
            success: "The factions reunite under a shared council. The Toads become a major political power.",
            failure: "The Toads split into warring gangs. The movement dies.",
            partial: "An uneasy truce is formed, but resentment lingers."
        },

        rewards: {
            guaranteed: [
                { type: 'reputation', faction: 'liberated_toads', amount: 1000, description: "Savior of the Movement" }
            ],
            conditional: [
                { condition: "Rescue Speaker L", reward: { type: 'ally', name: "First Cohort Loyalty", description: "Access to elite toad shock troops" }},
                { condition: "Expose the true mole", reward: { type: 'intel', name: "Legion Spy Network", description: "List of other spies" }}
            ],
            xp: 7500
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Vow", 
                description: "The initial vow of unity was taken on the deck of the Vigilance. It lasted less than a week.",
                completedDate: { year: 1040, monthIndex: 6, day: 12 }
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "The Betrayal", 
                description: "The discovery of an Iron Legion mole within the ranks sowed the seeds of paranoia.",
                completedDate: { year: 1040, monthIndex: 6, day: 16 }
            },
            { 
                id: 'm3', 
                status: 'active', 
                title: "The Schism", 
                description: "Open conflict. Speaker L arrested Archie. Markop fought to defend him. Now Speaker L is gone, and the Cohort is demanding action.",
                goals: [
                    { text: "Rescue Speaker L from the Legion", status: 'active', priority: 'high' },
                    { text: "Negotiate a ceasefire between Cohort and Dan's group", status: 'pending', priority: 'critical' },
                    { text: "Prove Archie's value to the Cohort hardliners", status: 'locked', priority: 'medium' }
                ]
            }
        ]
    }
};
