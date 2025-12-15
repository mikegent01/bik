// quests-main.js - UPDATED

import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

// --- REWARDS EXTRACTION SYSTEM ---

function findLastCompletedMilestoneDate(quest) {
    if (!quest.milestones) return null;
    
    let lastDate = null;
    quest.milestones.forEach(m => {
        if (m.status === 'completed' && m.completedDate) {
            if (!lastDate || 
                (m.completedDate.year > lastDate.year) ||
                (m.completedDate.year === lastDate.year && m.completedDate.monthIndex > lastDate.monthIndex) ||
                (m.completedDate.year === lastDate.year && m.completedDate.monthIndex === lastDate.monthIndex && m.completedDate.day > lastDate.day)) {
                lastDate = m.completedDate;
            }
        }
    });
    
    return lastDate;
}

function getRewardIcon(type) {
    const icons = {
        'item': '📦',
        'intel': '🔍',
        'summon': '🐯',
        'ally': '🤝',
        'reputation': '⭐',
        'facility': '🏠',
        'income': '💰',
        'unit': '⚔️',
        'trait': '🧠',
        'ability': '✨',
        'feat': '🏆',
        'knowledge': '📚',
        'companion': '🐕',
        'status': '📜',
        'gold': '🪙',
        'xp': '⚡',
        'army': '🎖️',
        'artifact': '💎',
        'favor': '🎭'
    };
    return icons[type] || '🎁';
}
export function extractAllRewards() {
    const allQuests = {
        ...TOADS_QUESTS,
        ...HUMPIK_QUESTS,
        ...ARCHIE_QUESTS,
        ...REMI_QUESTS,
        ...DK_QUESTS,
        ...GUILDS_QUESTS,
        ...BOWSER_QUESTS,
        ...MARKOP_QUESTS,
        ...MYSTERY_QUESTS,
        ...WORLD_QUESTS,
        ...MAIN_QUESTS
    };
    
    const rewards = [];
    
    for (const [questId, quest] of Object.entries(allQuests)) {
        if (!quest.rewards) continue;
        
        const isCompleted = quest.status === QUEST_STATUS.COMPLETED;
        const completedDate = quest.dates?.completed || findLastCompletedMilestoneDate(quest);
        
        // Determine who earned the reward
        const earnedBy = quest.primaryAssignee || 
                         (quest.assignees && quest.assignees[0]) || 
                         'party';
        
        // Guaranteed rewards
        if (quest.rewards.guaranteed) {
            quest.rewards.guaranteed.forEach(reward => {
                let rewardName = reward.name;
                if (!rewardName && reward.type === 'reputation') {
                    rewardName = reward.description || `${reward.faction} +${reward.amount}`;
                } else if (!rewardName) {
                    rewardName = reward.description || 'Unknown Reward';
                }
                
                rewards.push({
                    ...reward,
                    name: rewardName,
                    icon: getRewardIcon(reward.type),
                    questId: questId,
                    questTitle: quest.title,
                    questCategory: quest.category,
                    earned: isCompleted,
                    earnedDate: isCompleted ? completedDate : null,
                    earnedBy: earnedBy,
                    category: 'guaranteed',
                    description: reward.description || `Reward from ${quest.title}`
                });
            });
        }
        
        // Conditional rewards
        if (quest.rewards.conditional) {
            quest.rewards.conditional.forEach(cond => {
                const rewardData = cond.reward || cond;
                const conditionMet = cond.status === 'earned';
                
                let rewardName = rewardData.name;
                if (!rewardName && rewardData.type === 'reputation') {
                    rewardName = rewardData.description || `${rewardData.faction} +${rewardData.amount}`;
                } else if (!rewardName) {
                    rewardName = rewardData.description || 'Unknown Reward';
                }
                
                rewards.push({
                    ...rewardData,
                    name: rewardName,
                    icon: getRewardIcon(rewardData.type),
                    questId: questId,
                    questTitle: quest.title,
                    questCategory: quest.category,
                    condition: cond.condition,
                    earned: conditionMet,
                    earnedDate: conditionMet ? completedDate : null,
                    earnedBy: earnedBy,
                    category: 'conditional',
                    description: rewardData.description || `Conditional reward from ${quest.title}`
                });
            });
        }
        
        // Outcomes
        if (quest.rewards.outcomes) {
            quest.rewards.outcomes.forEach((outcome, idx) => {
                rewards.push({
                    type: 'outcome',
                    name: outcome.length > 50 ? outcome.substring(0, 50) + '...' : outcome,
                    icon: '📋',
                    questId: questId,
                    questTitle: quest.title,
                    questCategory: quest.category,
                    earned: true,
                    earnedDate: completedDate,
                    earnedBy: earnedBy,
                    category: 'outcome',
                    description: outcome
                });
            });
        }
        
        // XP rewards
        if (quest.rewards.xp) {
            rewards.push({
                type: 'xp',
                name: `${quest.rewards.xp.toLocaleString()} XP`,
                icon: '⚡',
                amount: quest.rewards.xp,
                questId: questId,
                questTitle: quest.title,
                questCategory: quest.category,
                earned: isCompleted,
                earnedDate: isCompleted ? completedDate : null,
                earnedBy: earnedBy,
                category: 'guaranteed',
                description: `Experience points earned from completing ${quest.title}`
            });
        }
        
        // Gold rewards
        if (quest.rewards.gold) {
            const goldAmount = typeof quest.rewards.gold === 'object' 
                ? `${quest.rewards.gold.min}-${quest.rewards.gold.max}` 
                : quest.rewards.gold;
            rewards.push({
                type: 'gold',
                name: `${goldAmount} Gold`,
                icon: '🪙',
                amount: quest.rewards.gold,
                questId: questId,
                questTitle: quest.title,
                questCategory: quest.category,
                earned: isCompleted,
                earnedDate: isCompleted ? completedDate : null,
                earnedBy: earnedBy,
                category: 'guaranteed',
                description: `Gold earned from ${quest.title}`
            });
        }
    }
    
    return rewards;
}
export function getRewardsByDate() {
    const allRewards = extractAllRewards();
    const earnedRewards = allRewards.filter(r => r.earned && r.earnedDate);
    
    // Sort by date (newest first)
    earnedRewards.sort((a, b) => {
        const dateA = a.earnedDate.year * 10000 + a.earnedDate.monthIndex * 100 + a.earnedDate.day;
        const dateB = b.earnedDate.year * 10000 + b.earnedDate.monthIndex * 100 + b.earnedDate.day;
        return dateB - dateA;
    });
    
    // Group by date
    const groupedByDate = {};
    earnedRewards.forEach(reward => {
        const key = `${reward.earnedDate.year}-${reward.earnedDate.monthIndex}-${reward.earnedDate.day}`;
        if (!groupedByDate[key]) {
            groupedByDate[key] = {
                date: { ...reward.earnedDate },
                rewards: []
            };
        }
        groupedByDate[key].rewards.push(reward);
    });
    
    return groupedByDate;
}

export function getPendingRewards() {
    const allRewards = extractAllRewards();
    return allRewards.filter(r => !r.earned);
}

export function getRewardsForSpecificDay(year, monthIndex, day) {
    const allRewards = extractAllRewards();
    return allRewards.filter(r => 
        r.earned && 
        r.earnedDate &&
        r.earnedDate.year === year && 
        r.earnedDate.monthIndex === monthIndex && 
        r.earnedDate.day === day
    );
}

// Export the rewards data for calendar integration
export const REWARDS_DATA = {
    extractAll: extractAllRewards,
    getByDate: getRewardsByDate,
    getPending: getPendingRewards,
    getForDay: getRewardsForSpecificDay,
    getIcon: getRewardIcon
};
export const TOADS_QUESTS = {

'rogueport_retrieval': {
        id: 'rogueport_retrieval',
        title: "The Price of a Handshake",
        subtitle: "Diplomacy by Other Means",
        type: QUEST_TYPES.EXPEDITION,
        category: 'Liberated Toads',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'rakasha_alliance',
        objective: "Retrieve Rakasha's stolen prize from the purple emblem building in Rogueport's Trade Ward.",
        assignees: ['embercap', 'dewdrop', 'erick'],
        primaryAssignee: 'embercap',
        difficulty: { overall: DIFFICULTY.DEADLY, combat: DIFFICULTY.HARD, investigation: DIFFICULTY.MODERATE },
        tags: ['rogueport', 'heist', 'rakasha', 'stealth'],
        dates: { added: { year: 1040, monthIndex: 6, day: 21 }, updated: { year: 1040, monthIndex: 6, day: 21 } },
        
        description: "To secure a vital alliance with the Rakasha and the networks of Thornpaw, a delegation of Toads was sent to negotiate. The price of cooperation is not gold, but action. Rakasha has tasked the group with a 'retrieval' mission in the heart of Rogueport—a lawless city of pirates and thieves. They must locate a building in the Trade Ward marked with a purple emblem and recover a stolen item. Failure means the alliance dies; success means surviving the night in a city that wants them dead.",

        loreEntries: ['rakasha_totems', 'rogueport_trade_ward', 'the_cheep_cheep_treaty'],

        consequences: {
            success: "The Rakasha join the fight against the Loyalists. The Cheep-Cheep Treaty is ratified.",
            failure: "The delegation is executed or enslaved in Rogueport. The Rakasha remain neutral.",
            partial: "The item is retrieved damaged; Rakasha offers only limited support."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Rakasha's Favor", description: "Token of safe passage in tribal lands" },
                { type: 'intel', name: "Rogueport Network", description: "Access to the criminal underworld market" }
            ],
            conditional: [
                { condition: "Don't use the Tiger summons again", reward: { type: 'summon', name: "Spirit Tiger", description: "One-time use combat summon kept for later" }}
            ],
            xp: 8000
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Plunge", 
                description: "Jumped from Cheep-Cheep Falls to board the transport. Survived the psychological test.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "Welcome to Rogueport", 
                description: "Survived the initial ambush by local thugs and the Iron Legion using the Tiger summon.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm3',
                status: 'active',
                title: "The Violet Emblem",
                description: "Infiltrate the Trade Ward and locate the shop with the purple emblem. Retrieve the target.",
                goals: [
                    { text: "Bypass Trade Ward Guild Guards", status: 'completed' },
                    { text: "Enter the Target Building", status: 'active' },
                    { text: "Escape with the Item", status: 'pending' }
                ]
            }
        ]
    },

    'festival_of_the_fallen_pact': {
        id: 'festival_of_the_fallen_pact',
        title: "The Inner Path",
        subtitle: "Mind Games",
        type: QUEST_TYPES.DIPLOMACY,
        category: 'Peach Loyalists',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'rakasha_alliance',
        objective: "Honor the pact made with Thornpaw by establishing a protective garrison in Rogueport.",
        assignees: ['mystivil', 'big_r'],
        primaryAssignee: 'mystivil',
        difficulty: { overall: DIFFICULTY.HARD, magic: DIFFICULTY.EXTREME, social: DIFFICULTY.HARD },
        tags: ['ritual', 'mind-control', 'politics'],
        dates: { added: { year: 1040, monthIndex: 6, day: 21 }, updated: { year: 1040, monthIndex: 6, day: 21 } },
        
        description: "Mystivil and Big R attended the Rakasha's 'Festival of the Fallen'. Through a hallucinogenic ritual known as 'Xeos', Mystivil entered a mental construct and negotiated directly with Thornpaw. The resulting agreement is fragile: The Peach Loyalists must take control of a specific district in Rogueport and protect the Rakasha interests there—not as conquerors, but as guardians. This puts the Loyalists in direct proximity to the Liberated Toads' operation.",

        loreEntries: ['xeos_ritual', 'thornpaws_network', 'house_of_pleasure'],

        consequences: {
            success: "The Loyalists gain a powerful irregular army in the Rakasha.",
            failure: "Thornpaw views the broken promise as an act of war.",
            partial: "The garrison is established but conflicts with locals arise."
        },

        rewards: {
            guaranteed: [
                { type: 'ally', name: "Thornpaw's Spies", description: "Global surveillance bonuses" }
            ],
            xp: 6500
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Ritual", 
                description: "Survived the Xeos trance and successfully negotiated with the avatar of Thornpaw.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            { 
                id: 'm2', 
                status: 'active', 
                title: "The Garrison", 
                description: "Deploy forces to Rogueport to secure the designated Rakasha district.",
                goals: [
                    { text: "Identify the District", status: 'pending' },
                    { text: "Clear Hostiles", status: 'pending' },
                    { text: "Establish HQ", status: 'pending' }
                ]
            }
        ]
    },    
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
        subtitle: "The Decoy Gambit & Order 120",
        type: QUEST_TYPES.FACTION,
        category: 'Liberated Toads',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'toad_liberation',
        objective: "Survive the Iron Legion's 'Order 120' execution command and determine the fate of the real Speaker L.",
        assignees: ['bones', 'party'],
        primaryAssignee: 'bones',
        difficulty: { overall: DIFFICULTY.DEADLY, social: DIFFICULTY.DEADLY, combat: DIFFICULTY.EXTREME },
        tags: ['politics', 'betrayal', 'rescue', 'execution'],
        dates: { added: { year: 1040, monthIndex: 6, day: 16 }, updated: { year: 1040, monthIndex: 6, day: 21 } },
        
        description: "The attempt to infiltrate the Legion interrogation center ended in chaos. Bones, disguised as a guard, discovered that the Legion has captured a 'Green Speaker L'—a decoy claiming he ate a poisonous mushroom. The interrogation revealed the Cohort's cult-like devotion to 'The Fractured Heart' philosophy. However, the operation went south when Marcus Ironhand identified Bones as an impostor and stabbed him. A Toad raid led by Creek caused massive collateral damage (acid attacks), but Ironhand has issued 'Order 120': Execute them all. The Legion believes they have the leadership, but the real Speaker L remains at large.",

        loreEntries: ['the_first_cohort', 'speaker_l_decoy', 'order_120', 'marcus_ironhand'],

        consequences: {
            success: "Bones escapes execution. The Legion is misled by the decoy, buying time for the real rebellion.",
            failure: "Bones, Creek, and the captured Toads are executed. The movement is decapitated.",
            partial: "The decoys are executed, but the Legion realizes they were tricked and doubles their efforts."
        },

        rewards: {
            guaranteed: [
                { type: 'intel', name: "Legion Interrogation Logs", description: "Insight into what the Legion fears (Archie's influence)" }
            ],
            conditional: [
                { condition: "Bones survives the stab wound", reward: { type: 'trait', name: "Iron Scars", description: "Bonus intimidation vs Legion" }},
                { condition: "Rescue the Green Decoy", reward: { type: 'ally', name: "The Double", description: "Can impersonate leadership" }}
            ],
            xp: 8500
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Infiltration", 
                description: "Bones successfully infiltrated the prison courtyard disguised as a guard, witnessing the arrival of the prisoners.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "The Interrogation", 
                description: "Witnessed the questioning of the decoy. Learned of the 'Fractured Heart' metaphor and the Council of Seven.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            { 
                id: 'm3', 
                status: 'active', 
                title: "Order 120", 
                description: "Cover blown. Marcus Ironhand stabbed Bones. A 'fake' Archie and the 'Green' Speaker L are in custody. Execution order given.",
                goals: [
                    { text: "Survive the immediate execution order", status: 'active', priority: 'critical' },
                    { text: "Escape Aegis Command with Creek", status: 'pending', priority: 'critical' },
                    { text: "Locate the REAL Speaker L", status: 'active', priority: 'high' }
                ]
            }
        ]
    }
};
export const HUMPIK_QUESTS = {
    'humpik_mirror_identity': {
        id: 'humpik_mirror_identity',
        title: "The Reflection's Gamble",
        subtitle: "Red vs Blue",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Humpik',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Escape the Mirror Library and defeat the 'Blue Humpik' while the 'Red Humpik' deceives the party in reality.",
        assignees: ['humpik'],
        primaryAssignee: 'humpik',
        description: "During the battle with the Shard Stalker, Humpik was pulled into the mirror dimension. Faced with a choice between violence and mercy, Humpik chose mercy at the urging of a Legion Spy also trapped within. This choice allowed him to return to reality, displacing the 'Red' impostor and saving the creature from execution by the Mages' Guild.",
        difficulty: { overall: DIFFICULTY.DEADLY, puzzle: DIFFICULTY.HARD, combat: DIFFICULTY.HARD },
        tags: ['dimensional', 'impostor', 'puzzle', 'solo'],
        dates: { added: { year: 1040, monthIndex: 6, day: 20 }, completed: { year: 1040, monthIndex: 6, day: 20 } },
        
        loreEntries: ['mirror_doppelgangers', 'library_of_reflections'],

        consequences: {
            success: "Humpik returns to his body. The Red Humpik is exposed.",
            failure: "Humpik remains trapped forever. The Red Humpik infiltrates the party permanently.",
            partial: "Humpik returns, but the Red Humpik escapes into the world."
        },

        rewards: {
            guaranteed: [
                { type: 'trait', name: "Shattered Sight", description: "Ability to see through illusions" }
            ],
            xp: 5000
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Swap", 
                description: "Pulled into the mirror by the Shard Stalker. Woke up in the Mirror Library.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "The Choice", 
                description: "Confronted the Mirror Monster with a Legion Spy. Chose mercy over destruction, sparing the creature and returning to the real world.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            }
        ]
    },

    'humpik_legion_pact': {
        id: 'humpik_legion_pact',
        title: "The Legion's Mandate",
        subtitle: "A Private Agreement",
        type: QUEST_TYPES.FACTION,
        category: 'Personal - Humpik',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'raventree_manor',
        objective: "Allow the Oracle's ritual to conclude, then aid the Iron Legion in taking custody of the situation.",
        assignees: ['humpik'],
        primaryAssignee: 'humpik',
        description: "A Legion Spy pulled Humpik aside in the Ruined Hall. She warned him that the Mages' Guild is reckless and that the 'Supernatural Sovereignty Act' is inevitable. She offered a deal: Let the Oracle finish his ritual to cleanse the manor, but ensure the Legion takes custody of him afterward. She provided Humpik with Legion-issue thieves' tools to aid in this 'cooperation'. Humpik has agreed to the pact, but warned against betrayal.",
        difficulty: { overall: DIFFICULTY.HARD, social: DIFFICULTY.HARD, deception: DIFFICULTY.HARD },
        tags: ['secret', 'betrayal', 'politics'],
        
        rewards: {
            guaranteed: [
                { type: 'item', name: "Legion Thieves' Tools", description: "High-quality lockpicks and wire" }
            ],
            conditional: [
                { condition: "Betray the Oracle", reward: { type: 'reputation', faction: 'iron_legion', amount: 500, description: "Empire's Asset" }},
                { condition: "Warn the Oracle", reward: { type: 'reputation', faction: 'mages_guild', amount: 500, description: "Guardian of Magic" }}
            ]
        },

        milestones: [
            { id: 'm1', status: 'completed', title: "The Meeting", description: "Met with the Spy in the side room. Accepted the tools and the mission." },
            { id: 'm2', status: 'active', title: "The Ritual", description: "Wait for the Oracle to finish the separation ritual." },
            { id: 'm3', status: 'locked', title: "The Arrest", description: "The moment the spell ends, the Legion strikes. Whose side will you be on?" }
        ]
    },

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

export const ARCHIE_QUESTS = {
   'archie_fugitive_of_the_accords': {
    id: 'archie_fugitive_of_the_accords',
    title: "Fugitive of the Accords",
    subtitle: "Ice Over Fire",
    type: QUEST_TYPES.PERSONAL,
    category: 'Personal - Archie',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.CRITICAL,
    arcId: 'raventree_manor',
    objective: "Complete the Oracle's ritual in the Summoning Room while maintaining the Mages' Guild's provisional approval.",
    assignees: ['archie'],
    primaryAssignee: 'archie',
    difficulty: { overall: DIFFICULTY.DEADLY, magic: DIFFICULTY.HARD, control: DIFFICULTY.CRITICAL },
    tags: ['survival', 'law', 'magic', 'redemption', 'ritual'],
    dates: { added: { year: 1040, monthIndex: 6, day: 20 }, updated: { year: 1040, monthIndex: 6, day: 21 } },
    
    description: "Archie has successfully hunted the Arcane Wraith, proving his versatility by utilizing Ice magic instead of his forbidden Fireball. Despite a rocky start (melting icicles), he landed a decisive freeze that allowed the Oracle to banish the entity. He has collected valuable ectoplasm and is currently in good standing with his provisional Guild license, despite the heckling of Senior Mage Pernus Annmatar. Now, he must assist the Oracle in the final separation ritual in the Summoning Room without losing control or succumbing to the manor's chaos.",

    loreEntries: ['autumnwood_accords', 'cryomancy_basics', 'guild_membership_protocols', 'ectoplasm_harvesting'],

    consequences: {
        success: "Archie solidifies his status as a legitimate mage, earning a permanent Guild license.",
        failure: "Archie loses control during the ritual, causing a magical catastrophe and immediate revocation of his life.",
        partial: "The ritual succeeds, but Archie is arrested immediately after by the waiting Legion."
    },

    rewards: {
        guaranteed: [
            { type: 'item', name: "Wraith Ectoplasm", description: "Potent magical reagent harvested from the banished entity" },
            { type: 'item', name: "Provisional Guild Card", description: "Currently Active - Validated by combat performance" }
        ],
        conditional: [
            { condition: "Finish the ritual without Fireball", reward: { type: 'feat', name: "Cryomancer's Patience", description: "Bonus to ice magic control and mental fortitude" }},
            { condition: "Humiliate Pernus Annmatar", reward: { type: 'reputation', faction: 'cosmic_jesters', amount: 300, description: "Made a mockery of the establishment" }}
        ],
        xp: 6500
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
            status: 'completed',
            title: "The Wraith Slayer",
            description: "Defeated the Arcane Wraith using Ice magic. Collected the remains. Proved he is not a 'one-trick pony' to the watching Mages.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 },
            outcomes: [
                "Used Ice Beam successfully",
                "Harvested Ectoplasm",
                "Resisted baiting by Pernus Annmatar"
            ]
        },
        {
            id: 'm4',
            status: 'active',
            title: "The Summoning Room",
            description: "Assist the Oracle in the final separation ritual. The energies required are vast, and the 'Audience' is watching.",
            goals: [
                { text: "Channel energy for the Oracle", status: 'active' },
                { text: "Maintain magical discipline (No Fire)", status: 'active' },
                { text: "Ensure the timeline separates cleanly", status: 'pending' }
            ]
        }
    ],
    npcs: { enemies: ['pernus_annmatar', 'iron_legion'], keyNpcs: ['self_reflection_oracle', 'senior_magus'] }
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
    },
    
    'remi_adopt_mossy': {
        id: 'remi_adopt_mossy',
        title: "Taming the Beast",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Remi',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Bond with the experimental construct 'Mossy'.",
        assignees: ['remi'],
        primaryAssignee: 'remi',
        description: "The Oracle gifted Remi a chrome-plated mechanical dog, a failed Guild experiment. It is loyal, violent, and occasionally heals people after concussing them. Remi has taken it upon herself to train it.",
        difficulty: { overall: DIFFICULTY.MODERATE, animal_handling: DIFFICULTY.HARD },
        tags: ['pet', 'construct', 'loyalty'],
        rewards: {
             guaranteed: [
                { type: 'companion', name: "Mossy", description: "A robotic dog that attacks and heals." }
            ],
            xp: 1500
        },
        milestones: [
            { id: 'm1', status: 'completed', title: "Acceptance", description: "Accepted the gift from the Oracle." },
            { id: 'm2', status: 'completed', title: "First Command", description: "Taught Mossy to 'sit' (he sat too hard)." }
        ]
    }
};

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

export const MARKOP_QUESTS = {
    'markop_silver_flame_schism': {
        id: 'markop_silver_flame_schism',
        title: "The Silver Flame's Schism",
        subtitle: "Faith Against Zealotry",
        type: QUEST_TYPES.FACTION,
        category: 'Personal - Markop',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'supernatural_sovereignty',
        objective: "Aid the moderate faction of the Silver Flame against High Inquisitor Vale.",
        assignees: ['markop'],
        primaryAssignee: 'markop',
        description: "The Order of the Silver Flame is at war with itself. High Inquisitor Vale has launched a brutal purge of 'non-human sympathizers', turning the order into a weapon of the Regal Empire. Captain Dorn, a moderate Templar, has reached out to Markop. He believes Vale is corrupted by a darker power and needs Markop's help to expose him before the Order is irrevocably stained.",
        difficulty: { overall: DIFFICULTY.HARD, social: DIFFICULTY.HARD, combat: DIFFICULTY.MODERATE },
        tags: ['religion', 'politics', 'redemption', 'investigation'],
        dates: { added: { year: 1040, monthIndex: 6, day: 18 } },
        
        loreEntries: ['silver_flame_history', 'inquisitor_vale', 'templar_dorn'],

        consequences: {
            success: "Vale is deposed. The Silver Flame returns to its noble roots. Markop gains powerful allies.",
            failure: "The moderates are purged. The Order becomes a fanatical enemy of the party.",
            partial: "A civil war erupts within the Order, neutralizing them as a threat but destroying their power."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Sun-Blessed Blade", description: "Weapon effective against undead and demons" }
            ],
            conditional: [
                { condition: "Expose Vale publicly", reward: { type: 'reputation', faction: 'silver_flame', amount: 1000, description: "Champion of the Faith", name: "Hero of the Flame" }},
                { condition: "Avoid killing Templars", reward: { type: 'ability', name: "Pacifist's Aura", description: "Enemies hesitate to attack you" }}
            ],
            xp: 6000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Contact Dorn", description: "Meet the Templar emissary in secret at the ruined chapel." },
            { id: 'm2', status: 'locked', title: "Infiltrate Archive", description: "Break into the Cathedral's restricted archives to find proof of Vale's corruption." },
            { id: 'm3', status: 'locked', title: "The Synod", description: "Present the evidence to the Council of Cardinals." }
        ]
    },

    'markop_serpents_key': {
        id: 'markop_serpents_key',
        title: "The Serpent's Key",
        subtitle: "Legacy of the Time War",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Markop',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'raventree_manor',
        objective: "Investigate the key given by Green T and the time loop.",
        description: "Before he was taken by the mirror, Green T slipped Markop a heavy, serpent-headed key. It radiated a cold, temporal energy. Markop followed the pull of the key to a hidden section of the Raventree grounds—an abandoned manor that existed in a different time. There, he discovered the 'Book of Obituaries', listing names of people who hadn't died yet, and realized the Oracle's family has been fighting a losing war against time for centuries.",
        assignees: ['markop'],
        primaryAssignee: 'markop',
        dates: { added: { year: 1040, monthIndex: 6, day: 17 }, updated: { year: 1040, monthIndex: 6, day: 20 } },
        
        rewards: {
            guaranteed: [
                { type: 'knowledge', name: "Temporal Insight", description: "Understanding of the manor's true nature" }
            ],
            xp: 4000
        },

        milestones: [
            { id: 'm1', status: 'completed', title: "Accept the Key", description: "Received from Green T moments before his abduction.", completedDate: { year: 1040, monthIndex: 6, day: 17 } },
            { id: 'm2', status: 'completed', title: "The Hidden House", description: "Navigated the living hedge maze to the abandoned manor.", completedDate: { year: 1040, monthIndex: 6, day: 18 } },
            { id: 'm3', status: 'completed', title: "The Time War", description: "Discovered the obituary book and the history of the Oracle.", completedDate: { year: 1040, monthIndex: 6, day: 20 } }
        ]
    },

    'markop_paladins_penance': {
        id: 'markop_paladins_penance',
        title: "A Paladin's Penance",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Markop',
        status: QUEST_STATUS.PENDING,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Protect a vulnerable community to rediscover his purpose.",
        assignees: ['markop'],
        primaryAssignee: 'markop',
        description: "Markop feels his code has been compromised by the party's chaotic actions. He seeks to define his own path by protecting those forgotten by the major powers—not for glory, but for duty.",
        milestones: [
            { id: 'm1', status: 'locked', title: "Find a Village", description: "Locate a settlement in need of a protector." }
        ]
    },

    'markop_centaurs_burden': {
        id: 'markop_centaurs_burden',
        title: "The Centaur's Burden",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Markop',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.MEDIUM,
        arcId: 'capital_intrigue',
        objective: "Deal with the arrest warrant issued by his old friend, Justicar Valerius.",
        assignees: ['markop'],
        primaryAssignee: 'markop',
        description: "An Oathbound Judge—and Markop's former mentor—has issued a summons. Markop is accused of 'Consorting with Anomalies'. He must choose to answer the summons and argue his case, or flee and become a true outlaw.",
        milestones: [
            { id: 'm1', status: 'active', title: "The Summons", description: "Receive the formal writ carried by the clockwork owl." },
            { id: 'm2', status: 'locked', title: "The Meeting", description: "Confront Valerius at the Hall of Judgment." }
        ]
    }
};

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
        
export const MAIN_QUESTS = {
    'vigilance_fallen': {
        id: 'vigilance_fallen',
        title: "The Iron Sky Breach",
        subtitle: "Order 120",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'vigilance_saga',
        objective: "Recover the airship 'Vigilance' and survive the Legion's total purge order.",
        assignees: ['party', 'liberated_toads'],
        primaryAssignee: 'party',
        difficulty: { 
            overall: DIFFICULTY.DEADLY, 
            combat: DIFFICULTY.DEADLY, 
            stealth: DIFFICULTY.HARD,
            social: DIFFICULTY.MODERATE 
        },
        tags: ['combat', 'rescue', 'airship', 'betrayal', 'urgent', 'faction-war'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 18 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 },
            deadline: { year: 1040, monthIndex: 6, day: 25 }
        },
        description: "The situation has spiraled from a capture to a massacre. Following the 'Iron Sky Breach', the Legion seized the Vigilance. Attempts to infiltrate Legion command by Bones ended in catastrophe: Marcus Ironhand has issued 'Order 120'—the execution of all captured Toads. A decoy 'Green Speaker L' is in custody, while the rebellion's true leadership is scattered. The Legion now controls the skies and is systematically purging the ground.",
        
        loreEntries: ['vigilance_history', 'iron_legion_tactics', 'order_120', 'marcus_ironhand'],
        
        consequences: {
            success: "Reclaiming the Vigilance restores the party's mobility and halts the execution order.",
            failure: "The rebellion is decapitated. Bones and the Toad captives are executed. The Vigilance becomes a permanent Legion flagship.",
            partial: "The ship is destroyed to prevent Legion use; survivors are scattered."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Captain's Key (Restored)", description: "Full access to the Vigilance's secure compartments" },
                { type: 'reputation', faction: 'liberated_toads', amount: 500, description: "Heroes of the Liberation" },
                { type: 'reputation', faction: 'iron_legion', amount: -2000, description: "Kill on Sight" }
            ],
            conditional: [
                { condition: "Save Bones from execution", reward: { type: 'ally', name: "Bones (Survivor)", description: "Hardened by torture and betrayal" }},
                { condition: "Expose the Decoy Speaker L", reward: { type: 'intel', name: "Legion Confusion", description: "Legion tactical delays" }}
            ],
            xp: 8000,
            gold: { min: 2000, max: 5000 }
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Boarding", 
                description: "Iron Legion shock troops breached the hull. Ryan plummeted into the forest. The ship was taken.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            },
            { 
                id: 'm2', 
                status: 'failed', 
                title: "The Infiltration", 
                description: "Bones attempted to infiltrate Aegis Command. Cover blown. Stabbed by Marcus Ironhand. Execution order issued.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            { 
                id: 'm3', 
                status: 'active', 
                title: "Regroup and Retaliate", 
                description: "The infiltration failed. A new plan is needed immediately to stop the executions.",
                goals: [
                    { text: "Escape Raventree Manor to aid the Toads", status: 'active', priority: 'critical' },
                    { text: "Use Humpik's Legion contact to delay Order 120", status: 'pending', priority: 'high' },
                    { text: "Locate the real Speaker L", status: 'active', priority: 'medium' }
                ],
                choices: [
                    {
                        id: 'approach_method',
                        title: "Choose Your Approach",
                        description: "The stealth option failed. What now?",
                        options: [
                            { 
                                id: 'assault', 
                                name: "Iron Storm", 
                                description: "Full frontal assault. High casualties likely, but necessary to stop executions.",
                                requirements: ["Allied military support", "Siege equipment"],
                                consequences: { success: "Prison break successful", failure: "Total party kill" }
                            },
                            { 
                                id: 'diplomacy', 
                                name: "The Humpik Protocol", 
                                description: "Leverage Humpik's deal regarding the Oracle to bargain for the prisoners.",
                                requirements: ["Humpik delivers the Oracle to Legion custody"],
                                consequences: { success: "Bloodless resolution for Toads, betrayal of Oracle", failure: "Oracle captured AND Toads executed" }
                            }
                        ]
                    }
                ]
            }
        ],

        npcs: {
            allies: ['captain_ryan', 'toad_lee', 'bones'],
            enemies: ['marcus_ironhand', 'legion_commander_vex', 'creek'],
            neutral: ['green_speaker_l_decoy']
        },

        locations: {
            primary: 'vigilance_airship',
            related: ['aegis_command', 'raventree_manor']
        },

        relatedQuests: ['retrieve_the_staff', 'toads_a_place_to_call_home', 'liberated_toads_integration']
    },

    'retrieve_the_staff': {
        id: 'retrieve_the_staff',
        title: "The Brandished Staff",
        subtitle: "One-Armed Mastery",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'vigilance_saga',
        objective: "Manage the staff's corruption while Dan adapts to his injury.",
        assignees: ['dan', 'toad_lee'],
        primaryAssignee: 'dan',
        difficulty: { 
            overall: DIFFICULTY.HARD, 
            magic: DIFFICULTY.DEADLY, 
            knowledge: DIFFICULTY.HARD 
        },
        tags: ['artifact', 'curse', 'combat-adaptation'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 15 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 },
            deadline: { year: 1040, monthIndex: 6, day: 28 }
        },
        
        description: "Dan has begun to adapt to his grievous injury. During the battle with the Arcane Wraith, he wielded handaxes and javelins with his remaining arm, proving he is still a capable warrior. However, the Staff of X.O. remains a looming threat, its seal degrading daily. Finding Forgemaster Grimm remains the only long-term solution.",

        loreEntries: ['xo_the_betrayer', 'amputee_combat_techniques'],

        consequences: {
            success: "The staff is cleansed. Dan masters his new fighting style.",
            failure: "The staff detonates. Dan succumbs to despair.",
            partial: "The staff is contained, but Dan relies on it too heavily."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Staff of the Shattered Veil", description: "Unstable Artifact" },
                { type: 'ability', name: "Southpaw Throw", description: "High accuracy with thrown weapons using off-hand" }
            ],
            xp: 4000
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "Assess the Seal", 
                description: "Seal integrity failing.",
                completedDate: { year: 1040, monthIndex: 6, day: 15 }
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "The Catastrophe", 
                description: "Dan lost his arm. 13 Toads died.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            },
            { 
                id: 'm3', 
                status: 'active', 
                title: "Adaptation", 
                description: "Dan successfully fought the Arcane Wraith using thrown weapons, proving his combat viability despite the injury.",
                goals: [
                    { text: "Continue combat training", status: 'active' },
                    { text: "Locate Forgemaster Grimm", status: 'pending', priority: 'critical' }
                ]
            }
        ],

        relatedQuests: ['dan_reclaim_the_staff', 'vigilance_fallen']
    },

    'artifacts_of_balance': {
        id: 'artifacts_of_balance',
        title: "The Artifacts of Balance",
        subtitle: "The Final Key",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Perform the final ritual in the Summoning Room to sever the timeline anchors.",
        assignees: ['party', 'self_reflection_oracle'],
        primaryAssignee: 'party',
        difficulty: { 
            overall: DIFFICULTY.DEADLY, 
            combat: DIFFICULTY.HARD, 
            puzzle: DIFFICULTY.DEADLY,
            magic: DIFFICULTY.EXTREME 
        },
        tags: ['supernatural', 'time', 'demons', 'ritual', 'boss-rush'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 19 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 }
        },

        description: "The anchors are broken. The Star Fragment shattered the first. Humpik spared the Mirror Terror. And now, the Arcane Wraith has been banished by the Oracle after a chaotic battle in the lower levels. The party faced interference from the Mage Pernus Annmatar (who possessed Bowser briefly) and lurking Legion spies. Bowser overcame his fear of ghosts to deliver the heavy hits, while Archie proved his worth with Ice magic. Now, the Oracle is leading them to the Summoning Room for the final separation. The 'Audience'—the Legion and the Mages—are watching, waiting to strike.",

        loreEntries: ['raventree_curse_origin', 'timeline_bleeding', 'demon_taxonomy', 'pernus_annmatar'],

        consequences: {
            success: "The timelines separate. The Manor is stabilized. The Oracle is saved (or captured per Humpik's deal).",
            partial: "With the Mirror Terror spared, the curse is weakened but not broken. Residual instability remains.",
            failure: "The ritual is interrupted by the Legion or Mages. The timelines collapse."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Wraith Ectoplasm", description: "Collected by Archie" },
                { type: 'ally', name: "The Oracle's Gratitude", description: "For now..." }
            ],
            conditional: [
                { condition: "Complete the ritual", reward: { type: 'artifact', name: "Shard of Stabilized Time", description: "A crystal containing a moment of perfect stillness" }},
                { condition: "Humpik delivers the Oracle", reward: { type: 'favor', name: "Legion Command Favor", description: "Can be used to negotiate for prisoners" }}
            ],
            xp: 10000
        },

        milestones: [
            { id: 'm1', status: 'completed', title: "The Star Ascendant", description: "God Toad created; first anchor broken.", completedDate: { year: 1040, monthIndex: 6, day: 19 } },
            { id: 'm2', status: 'completed', title: "The Mirror Terror", description: "Spared by Humpik. Contained.", completedDate: { year: 1040, monthIndex: 6, day: 21 } },
            { 
                id: 'm3', 
                status: 'completed', 
                title: "The Arcane Wraith", 
                description: "Defeated. Bowser overcame fear to punch the ghost (and tripped a Mage). Dan used thrown weapons. Archie used Ice magic effectively. Oracle banished the weakened entity.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 },
                outcomes: [
                    "Wraith Banished",
                    "Archie collected Ectoplasm",
                    "Pernus Annmatar interfered/heckled",
                    "Legion Spies attempted to steal kill but failed"
                ]
            },
            {
                id: 'm4',
                status: 'active',
                title: "The Summoning Room",
                description: "The Oracle is heading to the summoning room to place the 'Third Key'. The ritual requires opposing signs and vast energy.",
                goals: [
                    { text: "Escort the Oracle", status: 'active', priority: 'critical' },
                    { text: "Place the Third Key", status: 'pending', priority: 'critical' },
                    { text: "Prevent the 'Audience' (Legion/Mages) from interrupting", status: 'active', priority: 'high' }
                ],
                notes: "Humpik has a secret deal to hand the Oracle over to the Legion AFTER the ritual."
            }
        ],

        npcs: {
            allies: ['self_reflection_oracle', 'ghost_servants'],
            enemies: ['pernus_annmatar', 'iron_legion_spy'],
            neutral: ['iron_legion_spy_contact']
        },

        locations: {
            primary: 'raventree_manor',
            current: 'summoning_room',
            related: ['lower_levels', 'ruined_hall']
        },

        relatedQuests: ['main_quest_raventree', 'rescue_green_t', 'humpik_legion_pact']
    },

'main_quest_raventree': {
        id: 'main_quest_raventree',
        title: "The Curse of Raventree",
        subtitle: "The Final Act",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Survive the escalating supernatural incursions, navigate the political convergence in the Summoning Room, and escape Raventree Manor alive.",
        assignees: ['party'],
        primaryAssignee: 'party',
        difficulty: { 
            overall: DIFFICULTY.DEADLY, 
            survival: DIFFICULTY.HARD, 
            sanity: DIFFICULTY.HARD,
            social: DIFFICULTY.EXTREME
        },
        tags: ['survival', 'horror', 'supernatural', 'politics', 'urgent'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 19 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 }
        },

        description: "The Arcane Wraith has been banished, but the danger has only shifted forms. The party is now moving to the Summoning Room for the Oracle's final ritual. The manor is no longer just haunted; it is a stage for a political standoff. Pernus Annmatar of the Mages' Guild is physically present, heckling the party and treating the apocalypse like a performance. The Iron Legion watches from the shadows, waiting for the exact moment the ritual ends to claim the Oracle. Trust is fracturing: Bowser suspects Humpik, Humpik is hiding a deal with the Legion, and Green T remains missing in the shifting corridors.",

        loreEntries: ['raventree_manor_history', 'pernus_annmatar', 'the_great_sealing', 'legion_black_ops'],

        consequences: {
            success: "The ritual completes, severing the timeline anchors. The Manor stabilizes into a normal (if ruined) building. The party escapes with their lives.",
            failure: "The ritual is interrupted by Pernus or the Legion. The timelines collapse, erasing the party or trapping them in an eternal loop.",
            partial_betrayal: "The ritual succeeds, but Humpik fulfills his deal. The Oracle is taken by the Iron Legion. The Toads lose a powerful magical ally, but Humpik gains Legion leverage.",
            partial_loss: "The party escapes, but Green T is not found in time. He is left behind in a dissolving timeline, effectively erased from history."
        },

        rewards: {
            guaranteed: [
                { type: 'trait', name: "Supernatural Survival", description: "+2 to saves vs fear and supernatural effects permanently" },
                { type: 'item', name: "Wraith Ectoplasm", description: "Harvested by Archie. Potent alchemical reagent." },
                { type: 'xp', amount: 6000 }
            ],
            conditional: [
                { 
                    condition: "Deliver the Oracle to the Legion (Humpik)", 
                    reward: { type: 'favor', name: "Iron Legion High Command Favor", description: "Can be exchanged for the release of captured Toads (Bones/Creek)" },
                    status: 'pending'
                },
                { 
                    condition: "Defy the Legion and Save the Oracle", 
                    reward: { type: 'ally', name: "The Oracle", description: "Powerful chronomancer ally for the rebellion" },
                    status: 'pending'
                },
                { 
                    condition: "Archie maintains magical discipline", 
                    reward: { type: 'reputation', faction: 'mages_guild', amount: 500, description: "Demonstrated Control (Ice over Fire)" },
                    status: 'earned'
                },
                { 
                    condition: "Find Green T", 
                    reward: { type: 'ally', name: "Green T (Mirror Touched)", description: "Gains ability to sense dimensional rifts" },
                    status: 'pending'
                }
            ],
            outcomes: [
                "The Arcane Wraith was defeated by a combination of physical force (Bowser), adaptation (Dan), and elemental counter-play (Archie).",
                "Pernus Annmatar was humiliated (tripped by Bowser) but remains a threat.",
                "Legion Spies attempted to steal the kill but were rebuffed."
            ]
        },

        partyStatus: {
            bowser: { 
                location: "Summoning Room", 
                status: "Combat Ready / Suspicious", 
                sanity: 7,
                notes: "Punched a ghost. Tripped a Mage. Saw the Mage's red underwear. Distrusts the Legion presence."
            },
            humpik: { 
                location: "Summoning Room", 
                status: "Scheming", 
                sanity: 8,
                notes: "Has a deal to hand over the Oracle. Acting as the 'rational' one to mask his intent."
            },
            archie: { 
                location: "Summoning Room", 
                status: "Focused", 
                sanity: 7,
                notes: "Successfully used Ice magic. Collected ectoplasm. Earning Guild favor despite his warrants."
            },
            dan: { 
                location: "Summoning Room", 
                status: "Injured but Effective", 
                sanity: 6,
                notes: "Proved one-armed combat viability with throwing axes. Protective of the group."
            },
            green_t: { 
                location: "Unknown", 
                status: "Missing / Panicked", 
                sanity: 2,
                notes: "Still lost in the manor. At risk of being left behind."
            }
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Entry", 
                description: "Entered the manor.",
                completedDate: { year: 1040, monthIndex: 6, day: 19 }
            },
            {
                id: 'm2',
                status: 'completed',
                title: "The Mirror Terror",
                description: "Spared by Humpik. Contained.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm3',
                status: 'completed',
                title: "The Wraith Hunt",
                description: "Cleared the lower levels. Bowser punched the ghost. Dan threw axes. Archie used Ice. Oracle banished it.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm4',
                status: 'active',
                title: "The Summoning Room Convergence",
                description: "Legion, Mages, and the Party are all in the Summoning Room. The final ritual begins.",
                goals: [
                    { text: "Protect the Oracle during the ritual", status: 'active', priority: 'critical' },
                    { text: "Locate Green T before the timeline seals", status: 'active', priority: 'high' },
                    { text: "Prevent Pernus Annmatar from interfering", status: 'active', priority: 'medium' },
                    { text: "Resolve the standoff with the Iron Legion", status: 'pending', priority: 'critical' }
                ]
            }
        ],

        relatedQuests: ['artifacts_of_balance', 'rescue_green_t', 'humpik_legion_pact']
    },    
    'rescue_green_t': {
        id: 'rescue_green_t',
        title: "Through the Looking Glass",
        subtitle: "Find the Fleeing Survivor",
        type: QUEST_TYPES.RESCUE,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'raventree_manor',
        objective: "Locate and calm Green T, who fled deeper into the manor.",
        assignees: ['party', 'dan'],
        primaryAssignee: 'dan',
        difficulty: { 
            overall: DIFFICULTY.MODERATE, 
            tracking: DIFFICULTY.MODERATE, 
            social: DIFFICULTY.HARD 
        },
        tags: ['rescue', 'dimensional', 'time-sensitive', 'chase'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 19 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 }
        },

        description: "Green T remains missing. He was pulled from the mirror by Dan but fled in a state of temporal shock. With the manor's timelines about to be severed by the ritual, finding him is becoming critically urgent. If he is not in the 'present' timeline when the separation occurs, he may be lost forever.",

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Abduction", 
                description: "Taken by the mirror.", 
                completedDate: { year: 1040, monthIndex: 6, day: 19 }
            },
            {
                id: 'm2',
                status: 'completed', 
                title: "The Extraction",
                description: "Rescued by Dan.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm3',
                status: 'active',
                title: "The Flight",
                description: "Green T is hiding. Locate him before the ritual ends.",
                goals: [
                    { text: "Search the upper floors", status: 'active', priority: 'high' },
                    { text: "Search the servants' quarters", status: 'active', priority: 'high' }
                ]
            }
        ],

        greenTStatus: {
            currentCondition: "Panicked Flight",
            lastAction: "Broke a lock to escape the Solarium",
            mentalState: "Critical - Reality Confusion",
            sanity: 2
        }
    }
};