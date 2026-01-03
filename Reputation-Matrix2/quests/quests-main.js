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
        ...hjumpik_QUESTS,
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
    'toad_lee_feywild_protocol': {
        id: 'toad_lee_feywild_protocol',
        title: "Protocol: Wild Garden",
        subtitle: "Herding Chaos",
        type: QUEST_TYPES.PERSONAL,
        category: 'Liberated Toads',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Manage Waluigi (Chaotic Neutral) and Toadburt (Walking Bomb) in the Feywild environment.",
        assignees: ['toad_lee', 'waluigi', 'toadburt'],
        primaryAssignee: 'toad_lee',
        difficulty: { overall: DIFFICULTY.HARD, management: DIFFICULTY.EXTREME, survival: DIFFICULTY.HARD },
        tags: ['escort', 'feywild', 'bomb-disposal'],
        dates: { added: { year: 1040, monthIndex: 6, day: 22 } },
        
        description: "Toad Lee is a logistics officer. he deals in supplies, rosters, and sanity. he is now trapped in a psychedelic forest (formerly the attic) with Waluigi (who is trying to steal everything) and Toadburt (who is sobbing and strapped with a Legion nuke). His  mission is to keep Waluigi focused on the 'Key' and keep Toadburt calm enough not to detonate.",

        rewards: {
            guaranteed: [
                { type: 'item', name: "Feywild Flora Samples", description: "Potentially valuable alchemical ingredients." }
            ],
            conditional: [
                { condition: "Prevent Waluigi from eating unknown mushrooms", reward: { type: 'status', name: "Crisis Manager", description: "You can herd cats." }}
            ],
            xp: 5000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "The Bomb", description: "Inspect Toadburt's ring. Determine if it can be removed or must be endured." },
            { id: 'm2', status: 'active', title: "The Looter", description: "Convince Waluigi that the 'Giant Butterfly' has better loot than the goblin servants." }
        ]
    },
'rogueport_retrieval': {
    id: 'rogueport_retrieval',
    title: "The Price of a Handshake",
    subtitle: "Diplomacy by Other Means",
    type: QUEST_TYPES.EXPEDITION,
    category: 'Liberated Toads',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.CRITICAL,
    arcId: 'rakasha_alliance',
    objective: "Retrieve Rakasha's stolen prize from the purple emblem building in Rogueport's Trade Ward, then escape the city alive.",
    assignees: ['embercap', 'dewdrop', 'erick'],
    primaryAssignee: 'embercap',
    difficulty: {
        overall: DIFFICULTY.DEADLY,
        combat: DIFFICULTY.HARD,
        stealth: DIFFICULTY.EXTREME,
        investigation: DIFFICULTY.MODERATE
    },
    tags: ['rogueport', 'heist', 'rakasha', 'stealth', 'alliance', 'underworld'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 21 },
        updated: { year: 1040, monthIndex: 6, day: 21 },
        deadline: { year: 1040, monthIndex: 6, day: 23 }
    },

    description: "The Liberated Toads need allies. The Rakasha have allies to spare—smuggler networks, safe houses, spirit-walkers who can read the movement of enemies before they arrive. But Thornpaw doesn't deal in promises. He deals in proof.\n\nThe delegation—Embercap, Dewdrop, and Erick—jumped from Cheep-Cheep Falls onto a smuggler's skiff, surviving the Rakasha's first test: a psychological gauntlet designed to weed out cowards. They arrived in Rogueport bruised but breathing, only to walk directly into an ambush. Iron Legion soldiers had been tipped off. Local thugs smelled opportunity. The Tiger summon—a one-use spirit bound to Embercap's totem—was burned to escape the kill box.\n\nNow they're in the Trade Ward with no backup summon, no extraction plan, and a target building marked only by a purple emblem. Whatever Thornpaw wants retrieved, he wants it badly enough to stake the entire alliance on three Toads and a prayer.\n\nThe Iron Mandate passed this morning. Legion patrols have emergency powers. The city that was already hostile is now a hunting ground.",

    loreEntries: ['rakasha_totems', 'rogueport_trade_ward', 'the_cheep_cheep_treaty', 'iron_mandate'],

    consequences: {
        success: "The Rakasha commit to the Toad Liberation. Thornpaw's spy network becomes available. The Cheep-Cheep Treaty is ratified, granting naval escape routes.",
        failure: "The delegation is killed, enslaved, or ransomed. The Rakasha write off the Toads as weak. The alliance dies before it begins.",
        partial: "The item is retrieved damaged or the team takes heavy casualties. Rakasha offers limited, conditional support with ongoing 'tests'."
    },

    rewards: {
        guaranteed: [
            { type: 'item', name: "Rakasha's Favor", description: "Token of safe passage in tribal lands and Rakasha-controlled black markets" },
            { type: 'intel', name: "Rogueport Network Access", description: "Fence contacts, safe houses, and smuggling routes through the criminal underworld" },
            { type: 'reputation', faction: 'rakasha', amount: 750, description: "Proven Through Fire" }
        ],
        conditional: [
            { condition: "Complete without using additional Rakasha resources", reward: { type: 'item', name: "Spirit Tiger Totem (Recharged)", description: "The Tiger returns. One more use earned through honor." }},
            { condition: "Identify who tipped off the Legion", reward: { type: 'intel', name: "The Leak", description: "Knowledge of a traitor in the Toad intelligence chain" }},
            { condition: "Escape Rogueport by sea", reward: { type: 'contact', name: "Captain Barnacle", description: "Smuggler captain who owes a favor" }}
        ],
        xp: 8000,
        gold: { min: 500, max: 1500 }
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "The Plunge",
            description: "The delegation leapt from Cheep-Cheep Falls onto a moving skiff—a psychological test designed by Thornpaw to prove commitment. All three survived. The alliance became possible.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 }
        },
        {
            id: 'm2',
            status: 'completed',
            title: "Welcome to Rogueport",
            description: "Ambushed within minutes of arrival. Legion soldiers and local muscle coordinated the attack—someone knew they were coming. The Spirit Tiger was summoned and exhausted to break the encirclement. The team escaped into the Trade Ward alleys.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 },
            outcomes: [
                "Tiger summon expended",
                "Legion presence confirmed in Rogueport",
                "Possible intelligence leak identified"
            ]
        },
        {
            id: 'm3',
            status: 'active',
            title: "The Violet Emblem",
            description: "The target is a building in the Trade Ward marked with a purple emblem. Contents unknown. Security unknown. The Iron Mandate means Legion patrols have shoot-on-sight authority for 'supernatural threats'—and Toads with Rakasha connections qualify.",
            goals: [
                { text: "Locate the purple emblem building", status: 'completed', priority: 'high' },
                { text: "Bypass Trade Ward Guild security", status: 'completed', priority: 'high' },
                { text: "Infiltrate the target building", status: 'active', priority: 'critical' },
                { text: "Identify and secure the retrieval target", status: 'pending', priority: 'critical' },
                { text: "Escape Rogueport with the item", status: 'pending', priority: 'critical' }
            ],
            notes: "The team has no extraction plan. The docks are watched. The sewers lead to Kremling territory. The rooftops are patrolled. Think fast."
        }
    ],

    npcs: {
        allies: ['thornpaw_contact'],
        enemies: ['iron_legion_rogueport_garrison', 'trade_ward_guild_enforcers'],
        neutral: ['captain_barnacle', 'fence_networks']
    },

    locations: {
        primary: 'rogueport_trade_ward',
        current: 'target_building_exterior',
        related: ['cheep_cheep_falls', 'rogueport_docks', 'rogueport_sewers']
    },

    relatedQuests: ['festival_of_the_fallen_pact', 'liberated_toads_integration', 'vigilance_fallen']
},

'festival_of_the_fallen_pact': {
    id: 'festival_of_the_fallen_pact',
    title: "The Inner Path",
    subtitle: "A Garrison of Ghosts",
    type: QUEST_TYPES.DIPLOMACY,
    category: 'Peach Loyalists',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.HIGH,
    arcId: 'rakasha_alliance',
    objective: "Establish a Peach Loyalist garrison in Rogueport's Rakasha district as payment for Thornpaw's alliance.",
    assignees: ['mystivil', 'big_r'],
    primaryAssignee: 'mystivil',
    difficulty: {
        overall: DIFFICULTY.HARD,
        magic: DIFFICULTY.EXTREME,
        social: DIFFICULTY.HARD,
        logistics: DIFFICULTY.HARD
    },
    tags: ['ritual', 'mind-control', 'politics', 'rakasha', 'loyalists', 'rogueport'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 21 },
        updated: { year: 1040, monthIndex: 6, day: 21 },
        deadline: { year: 1040, monthIndex: 6, day: 28 }
    },

    description: "The Festival of the Fallen is not a celebration. It is a negotiation conducted through chemistry and willpower.\n\nMystivil and Big R attended the Rakasha's sacred rite, consuming 'Xeos'—a hallucinogenic compound that tears down the barriers between minds. In that shared dreamspace, Mystivil negotiated directly with an avatar of Chief Thornpaw. The price of the Rakasha's full support was not gold or blood. It was territory.\n\nThe Rakasha have interests in Rogueport—smuggling routes, safe houses, debts owed by powerful criminals. Those interests are threatened by the Iron Legion's expanding reach and the chaos of the underworld's power struggles. Thornpaw wants the Peach Loyalists to take control of a specific district and protect Rakasha operations there. Not as conquerors extracting tribute—as guardians maintaining order.\n\nThis puts the Loyalists in Rogueport at the exact moment a Liberated Toad delegation is conducting a heist in the Trade Ward. Two factions who share enemies but not trust, operating in the same lawless city, with the Iron Legion hunting both.\n\nThe Iron Mandate complicates everything. Legion patrols now have emergency powers. The Supernatural Sovereignty Act makes organized supernatural entities—including the Rakasha—illegal. A Loyalist garrison protecting Rakasha interests is technically sedition.",

    loreEntries: ['xeos_ritual', 'thornpaws_network', 'house_of_pleasure', 'iron_mandate', 'supernatural_sovereignty_act'],

    consequences: {
        success: "The Peach Loyalists gain Thornpaw's full support—a spy network spanning the continent, smuggling routes, and the Rakasha's spiritual warriors. The garrison becomes a foothold in Rogueport's criminal underworld.",
        failure: "Thornpaw interprets the broken promise as betrayal. The Rakasha become hostile. Mystivil's mind may carry scars from the Xeos ritual's failure state.",
        partial: "The garrison is established but conflicts with locals, the Legion, or the Liberated Toads undermine its stability. Thornpaw offers limited, probationary support."
    },

    rewards: {
        guaranteed: [
            { type: 'ally', name: "Thornpaw's Spies", description: "Continental surveillance network with +3 to all faction intelligence gathering" },
            { type: 'territory', name: "Rogueport Foothold", description: "A district under Loyalist protection, generating income and influence" }
        ],
        conditional: [
            { condition: "Avoid conflict with the Liberated Toad delegation", reward: { type: 'diplomacy', name: "Unexpected Allies", description: "Opens dialogue between Loyalists and Liberated Toads" }},
            { condition: "Defend the district against a Legion raid", reward: { type: 'reputation', faction: 'rakasha', amount: 500, description: "Blood Proven" }},
            { condition: "Mystivil masters the Xeos state", reward: { type: 'ability', name: "Dreamwalk", description: "Can enter shared mental spaces with willing participants" }}
        ],
        xp: 6500,
        gold: { min: 1000, max: 3000 }
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "The Ritual",
            description: "Mystivil consumed Xeos and entered the shared dreamspace. Through force of will and careful negotiation, they reached an agreement with Thornpaw's avatar. The price was named: a garrison, not a conquest.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 },
            outcomes: [
                "Xeos trance survived",
                "Terms negotiated successfully",
                "Big R provided physical security during the vulnerable ritual state"
            ]
        },
        {
            id: 'm2',
            status: 'active',
            title: "The Garrison",
            description: "Deploy Loyalist forces to Rogueport. Identify and secure the designated district. Establish a defensible headquarters without triggering open war with the Legion or local powers.",
            goals: [
                { text: "Identify the exact district boundaries", status: 'pending', priority: 'high' },
                { text: "Scout local threats (gangs, Legion presence, rival factions)", status: 'pending', priority: 'high' },
                { text: "Establish initial Loyalist presence without alerting Legion intelligence", status: 'pending', priority: 'critical' },
                { text: "Secure a headquarters building", status: 'pending', priority: 'high' },
                { text: "Make contact with Rakasha assets in the district", status: 'pending', priority: 'medium' }
            ],
            notes: "The Iron Mandate means Legion patrols have emergency powers. A visible Loyalist military presence will draw immediate attention. Subtlety is required."
        },
        {
            id: 'm3',
            status: 'locked',
            title: "The Proof",
            description: "Thornpaw will test the garrison's commitment. An attack, a crisis, or a betrayal will come. How the Loyalists respond determines whether the alliance becomes permanent.",
            unlockCondition: "Garrison established for 48 hours"
        }
    ],

    npcs: {
        allies: ['thornpaw', 'rakasha_contacts'],
        enemies: ['iron_legion_rogueport_garrison', 'local_gang_lords'],
        neutral: ['liberated_toad_delegation', 'rogueport_merchants_guild']
    },

    locations: {
        primary: 'rogueport_rakasha_district',
        related: ['festival_grounds', 'rogueport_trade_ward', 'rogueport_docks']
    },

    relatedQuests: ['rogueport_retrieval', 'vigilance_fallen', 'liberated_toads_integration']
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
    subtitle: "Order 120 — Execute Them All",
    type: QUEST_TYPES.FACTION,
    category: 'Liberated Toads',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.CRITICAL,
    arcId: 'toad_liberation',
    objective: "Survive Order 120, rescue Bones and Creek from Aegis Command, and locate the real Speaker L before the Legion realizes they've been deceived.",
    assignees: ['bones', 'creek', 'party'],
    primaryAssignee: 'bones',
    difficulty: {
        overall: DIFFICULTY.DEADLY,
        social: DIFFICULTY.DEADLY,
        combat: DIFFICULTY.EXTREME,
        stealth: DIFFICULTY.EXTREME
    },
    tags: ['politics', 'betrayal', 'rescue', 'execution', 'urgent', 'faction-survival'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 16 },
        updated: { year: 1040, monthIndex: 6, day: 21 },
        deadline: { year: 1040, monthIndex: 6, day: 22 }
    },

    description: "Everything has gone wrong.\n\nBones infiltrated the Imperial Processing Facility at Aegis Command disguised as a Legion guard. For hours, it worked. He walked the corridors of an industrial nightmare—a complex designed to process prisoners at scale. He witnessed the arrival of the captured Toads. He saw the interrogation of the 'Green Speaker L.'\n\nThe prisoner wasn't the real Speaker L. It was a decoy—a loyalist who claimed, under torture, that he'd eaten a poisonous mushroom and was dying anyway. The decoy spoke of the 'Fractured Heart' philosophy, of the Council of Seven, of how the movement would survive any single death. The interrogators were getting nothing useful.\n\nThen Marcus Ironhand arrived.\n\nThe General of the Iron Legion didn't ask questions. He looked at the decoy, looked at the reports, looked at Bones standing too still in his borrowed uniform—and stabbed Bones through the chest without a word of warning. Cover blown. Mission failed.\n\nIn the chaos that followed, a Toad raiding party led by Creek attempted extraction. Acid attacks. Collateral damage. Legion casualties. It bought time, nothing more.\n\nIronhand's response was Order 120: Execute all Toad prisoners immediately. No trials. No ransoms. No exceptions.\n\nThe clock is now measured in hours. Bones is wounded and captured. Creek is pinned down somewhere in the facility. The decoy is still performing his role, buying time the real Speaker L—wherever they are—desperately needs.\n\nAnd the party is trapped in Raventree Manor, watching the Vigilance fly overhead broadcasting Legion propaganda, unable to help.",

    loreEntries: ['the_first_cohort', 'speaker_l_decoy', 'order_120', 'marcus_ironhand', 'aegis_command_layout', 'fractured_heart_philosophy'],

    consequences: {
        success: "Bones and Creek escape. The decoy's sacrifice buys enough time for the real Speaker L to reorganize. The movement survives decapitation.",
        failure: "Order 120 is executed. Bones, Creek, and all captured Toads are killed. The movement loses its most experienced operatives and its organizational backbone.",
        partial: "Some prisoners escape, others don't. The movement survives but is crippled. The Legion realizes the 'Green Speaker L' was a decoy and intensifies the hunt."
    },

    rewards: {
        guaranteed: [
            { type: 'intel', name: "Legion Interrogation Protocols", description: "Understanding of what the Legion fears—specifically, they asked repeatedly about Archie's influence on the movement" },
            { type: 'intel', name: "Aegis Command Layout", description: "Bones' observations of the facility's structure, guard rotations, and weak points" }
        ],
        conditional: [
            { condition: "Bones survives the stab wound", reward: { type: 'trait', name: "Iron Scars", description: "Permanent intimidation bonus vs Legion soldiers who recognize the wound" }},
            { condition: "Rescue Creek", reward: { type: 'ally', name: "Creek (Blooded)", description: "Mercenary loyalty upgraded to true belief after the rescue" }},
            { condition: "Extract the Green Decoy alive", reward: { type: 'ally', name: "The Double", description: "A Toad who can impersonate leadership and has proven willingness to die for the cause" }},
            { condition: "Kill Marcus Ironhand", reward: { type: 'reputation', faction: 'liberated_toads', amount: 2000, description: "Vengeance Delivered" }}
        ],
        xp: 8500,
        gold: { min: 0, max: 500 }
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "The Infiltration",
            description: "Bones successfully infiltrated Aegis Command's prison complex disguised as a Legion guard. He witnessed the industrial scale of the processing facility and the arrival of captured Toads.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 }
        },
        {
            id: 'm2',
            status: 'completed',
            title: "The Interrogation",
            description: "Witnessed the questioning of the 'Green Speaker L'—actually a decoy loyalist. Learned of the 'Fractured Heart' philosophy and the Council of Seven organizational structure. The decoy performed perfectly, revealing nothing useful while appearing to break.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 },
            outcomes: [
                "Decoy identity confirmed",
                "Fractured Heart philosophy documented",
                "Council of Seven structure partially revealed",
                "Legion interrogators frustrated but suspicious"
            ]
        },
        {
            id: 'm3',
            status: 'active',
            title: "Order 120",
            description: "Marcus Ironhand saw through Bones' disguise and stabbed him without warning. Creek's extraction raid caused chaos but failed to secure the prisoners. Ironhand issued Order 120: kill them all.",
            goals: [
                { text: "Bones: Survive the stab wound", status: 'critical', priority: 'critical' },
                { text: "Bones: Escape custody before execution", status: 'active', priority: 'critical' },
                { text: "Creek: Break contact and regroup", status: 'active', priority: 'critical' },
                { text: "Party: Escape Raventree Manor to provide support", status: 'active', priority: 'high' },
                { text: "Locate the REAL Speaker L", status: 'active', priority: 'high' },
                { text: "Delay Order 120 execution (hjumpik's Legion contact?)", status: 'pending', priority: 'critical' }
            ],
            notes: "The party is trapped in Raventree Manor. hjumpik has a Legion contact who might be leveraged. The Oracle might be used as a bargaining chip. Every option has a cost."
        }
    ],

    boneStatus: {
        condition: "Critical — Stabbed through chest",
        location: "Aegis Command — Detention Block",
        captors: "Iron Legion High Command",
        timeToExecution: "Hours, not days"
    },

    creekStatus: {
        condition: "Combat Ready — Pinned Down",
        location: "Aegis Command — Unknown Sector",
        action: "Attempted extraction, failed, now evading",
        resources: "Low ammunition, acid grenades depleted"
    },

    npcs: {
        allies: ['bones', 'creek', 'green_speaker_l_decoy', 'real_speaker_l'],
        enemies: ['marcus_ironhand', 'legion_interrogators', 'aegis_command_garrison'],
        neutral: ['hjumpik_legion_contact']
    },

    locations: {
        primary: 'aegis_command',
        related: ['vigilance_airship', 'raventree_manor', 'speaker_l_safehouse']
    },

    relatedQuests: ['vigilance_fallen', 'hjumpik_legion_pact', 'artifacts_of_balance']
},
};
export const hjumpik_QUESTS = {
    'hjumpik_mirror_identity': {
        id: 'hjumpik_mirror_identity',
        title: "The Reflection's Gamble",
        subtitle: "Red vs Blue",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - hjumpik',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Escape the Mirror Library and defeat the 'Blue hjumpik' while the 'Red hjumpik' deceives the party in reality.",
        assignees: ['hjumpik'],
        primaryAssignee: 'hjumpik',
        description: "During the battle with the Shard Stalker, hjumpik was pulled into the mirror dimension. Faced with a choice between violence and mercy, hjumpik chose mercy at the urging of a Legion Spy also trapped within. This choice allowed him to return to reality, displacing the 'Red' impostor and saving the creature from execution by the Mages' Guild.",
        difficulty: { overall: DIFFICULTY.DEADLY, puzzle: DIFFICULTY.HARD, combat: DIFFICULTY.HARD },
        tags: ['dimensional', 'impostor', 'puzzle', 'solo'],
        dates: { added: { year: 1040, monthIndex: 6, day: 20 }, completed: { year: 1040, monthIndex: 6, day: 20 } },
        
        loreEntries: ['mirror_doppelgangers', 'library_of_reflections'],

        consequences: {
            success: "hjumpik returns to his body. The Red hjumpik is exposed.",
            failure: "hjumpik remains trapped forever. The Red hjumpik infiltrates the party permanently.",
            partial: "hjumpik returns, but the Red hjumpik escapes into the world."
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
'hjumpik_legion_pact': {
    id: 'hjumpik_legion_pact',
    title: "The Legion's Mandate",
    subtitle: "A Knife Behind a Handshake",
    type: QUEST_TYPES.FACTION,
    category: 'Personal - hjumpik',
        status: QUEST_STATUS.FAILED, // Paused because the conditions for the deal are currently physically impossible
    priority: QUEST_PRIORITY.CRITICAL,
    arcId: 'raventree_manor',
    objective: "Fulfill the deal with the Iron Legion: let the Oracle complete his ritual, then ensure the Legion takes custody of him. Or betray the deal and accept the consequences.",
    assignees: ['hjumpik'],
    primaryAssignee: 'hjumpik',
    difficulty: {
        overall: DIFFICULTY.DEADLY,
        social: DIFFICULTY.EXTREME,
        deception: DIFFICULTY.EXTREME,
        moral: DIFFICULTY.EXTREME
    },
    tags: ['secret', 'betrayal', 'politics', 'moral_choice', 'faction_defining'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 21 },
        updated: { year: 1040, monthIndex: 6, day: 21 },
            completed: { year: 1040, monthIndex: 6, day: 21 } // Failed on this date        
    },

        failureReason: "Breach of Contract",
        description: "The deal was specific: Deliver the Oracle to the Legion *immediately* after the ritual. The ritual failed, the Oracle is lost in the Void, and hjumpik is missing. Commander Vex and the Iron Legion view this as a failure at best, and a betrayal at worst. The Pact is broken. hjumpik is now a loose end to be tied up.",
        notes: "Any Legion favor rewards are lost. hjumpik is likely now on the Legion's hit list alongside the Toads.",
            loreEntries: ['supernatural_sovereignty_act', 'iron_mandate', 'legion_black_ops', 'oracle_nature'],

    consequences: {
        success_betray_oracle: "The Legion takes custody of the Oracle. hjumpik gains significant Legion favor, potentially including leverage to negotiate for Bones, Creek, and other prisoners. The Toads lose a powerful magical ally. The Oracle's fate is imprisonment, experimentation, or execution.",
        success_protect_oracle: "hjumpik betrays the Legion deal. The Oracle escapes or allies with the party. The Legion responds with hostility—hjumpik becomes a target, and any negotiating leverage for the Toad prisoners evaporates.",
        partial: "The handoff is botched. The Oracle escapes, but so does Legion awareness that hjumpik was supposed to deliver. Both sides distrust him.",
        failure: "The ritual fails. The Oracle is destroyed or the timelines collapse. The Legion deal becomes irrelevant amid the catastrophe."
    },

    rewards: {
        guaranteed: [
            { type: 'item', name: "Legion Thieves' Tools", description: "High-quality lockpicks, wire cutters, and a small vial of universal solvent. Currently in hjumpik's possession." }
        ],
        conditional: [
            {
                condition: "Deliver the Oracle to the Legion",
                reward: { type: 'favor', name: "Legion High Command Favor", description: "Can be exchanged for prisoner release (Bones/Creek), information, or a single 'look the other way' from Legion patrols" }
            },
            {
                condition: "Deliver the Oracle AND maintain cover with party",
                reward: { type: 'reputation', faction: 'iron_legion', amount: 750, description: "Reliable Asset" }
            },
            {
                condition: "Warn the Oracle and help him escape",
                reward: { type: 'ally', name: "The Oracle (Grateful)", description: "A chronomancer who owes you his freedom" }
            },
            {
                condition: "Warn the Oracle AND frame the Mages' Guild for the betrayal",
                reward: { type: 'reputation', faction: 'mages_guild', amount: -1000, description: "Enemies of the Guild" }
            },
            {
                condition: "Refuse to choose (let events unfold without intervention)",
                reward: { type: 'trait', name: "The Watcher", description: "Bonus to reading situations where multiple factions conflict" }
            }
        ],
        xp: 5000
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "The Meeting",
            description: "The Legion spy approached hjumpik privately in the Ruined Hall. She explained the political situation, the Supernatural Sovereignty Act, and offered the deal. hjumpik accepted the tools and the mission.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 }
        },
        {
            id: 'm2',
            status: 'active',
            title: "The Ritual",
            description: "The Oracle is leading the party to the Summoning Room for the final ritual. hjumpik must help ensure it succeeds—the deal requires the manor to be stabilized first.",
            goals: [
                { text: "Protect the Oracle during the ritual", status: 'active', priority: 'critical' },
                { text: "Prevent the Mages' Guild from interfering", status: 'active', priority: 'high' },
                { text: "Maintain cover with party members", status: 'active', priority: 'high' },
                { text: "Position for the handoff", status: 'pending', priority: 'medium' }
            ],
            notes: "Bowser is suspicious. The Oracle is perceptive. Pernus Annmatar is watching everything. One wrong word could expose the plan prematurely."
        },
        {
            id: 'm3',
            status: 'active', // Changed from locked
            title: "The Breach of Contract",
            description: "The ritual failed. The Oracle is gone (to the Void). hjumpik is gone. The Legion holds the physical room. The deal is effectively void unless hjumpik can re-establish contact and offer something of equal value—like the Star Shard.",
            goals: [
                { text: "Survive the Fracture", status: 'active', priority: 'critical' },
                { text: "Prepare an explanation for Commander Vex", status: 'pending', priority: 'high' }
            ]
        }
    ],

    secretStatus: {
        knownTo: ['hjumpik', 'legion_spy'],
        suspectedBy: ['bowser'],
        hiddenFrom: ['archie', 'dan', 'oracle', 'pernus_annmatar']
    },

    npcs: {
        allies: ['iron_legion_spy_contact'],
        enemies: [],
        neutral: ['self_reflection_oracle', 'pernus_annmatar', 'party_members'],
        potential_enemies: ['self_reflection_oracle', 'party_members']
    },

    locations: {
        primary: 'raventree_manor',
        current: 'en_route_to_summoning_room',
        related: ['ruined_hall', 'summoning_room']
    },

    relatedQuests: ['artifacts_of_balance', 'main_quest_raventree', 'liberated_toads_integration', 'vigilance_fallen']
},


    'hjumpik_honor_quest': {
        id: 'hjumpik_honor_quest',
        title: "An Axe to Grind",
        subtitle: "Dwarven Honor vs. Imperial Steel",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - hjumpik',
        status: QUEST_STATUS.PENDING,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Restore honor by defeating an Iron Legion champion in a formal duel.",
        assignees: ['hjumpik'],
        primaryAssignee: 'hjumpik',
        description: "Colonel Vera Steelstorm called hjumpik a 'filthy savage' during the Vigilance standoff. To a Dwarf of the Stonecarver's Brethren, this insult cannot stand. hjumpik intends to challenge her or her champion to a duel of honor. He needs to learn the Imperial Dueling Code to ensure they cannot refuse.",
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

    'hjumpik_kings_physician': {
        id: 'hjumpik_kings_physician',
        title: "The King's Physician",
        subtitle: "A Cure from the Depths",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - hjumpik',
        status: QUEST_STATUS.COMPLETED,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'capital_intrigue',
        objective: "Acquire a cure for Dan's magical malady.",
        assignees: ['hjumpik'],
        primaryAssignee: 'hjumpik',
        description: "When Dan fell ill from the magical backlash, hjumpik took it upon himself to find a cure. He braved the lava-filled sewers of the Capital, negotiated with a senile dragon, and bullied an Archmage into brewing a restorative elixir. It was a triumph of stubbornness over common sense.",
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

    'hjumpik_rescue_mission': {
        id: 'hjumpik_rescue_mission',
        title: "Dwarven Rescue Mission",
        type: QUEST_TYPES.RESCUE,
        category: 'Personal - hjumpik',
        status: QUEST_STATUS.AVAILABLE,
        priority: QUEST_PRIORITY.MEDIUM,
        objective: "Rescue captured Koopa Troopas from a Loyalist prison camp.",
        assignees: ['hjumpik'],
        primaryAssignee: 'hjumpik',
        description: "hjumpik has heard reports of Koopa Troopas—his newfound drinking buddies—being held in a Peach Loyalist internment camp. He intends to break them out, utilizing explosives and grit.",
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
        subtitle: "The Bearer's Circle",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Archie',
        status: QUEST_STATUS.FAILED,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Channel energy for the Oracle's ritual while maintaining ice discipline. The War Mage's Staff awaits. The Oracles are multiple. The separation approaches.",
        assignees: ['archie'],
        primaryAssignee: 'archie',
        difficulty: { 
            overall: DIFFICULTY.DEADLY, 
            magic: DIFFICULTY.HARD, 
            control: DIFFICULTY.CRITICAL,
            social: DIFFICULTY.MODERATE
        },
        tags: ['survival', 'law', 'magic', 'redemption', 'ritual', 'ice-magic', 'wraith', 'oracle', 'bearer'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 20 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 },
            deadline: { year: 1040, monthIndex: 6, day: 22 },
completed: { year: 1040, monthIndex: 6, day: 21 } // Failed on this date            
        },
                failureReason: "Ritual Catastrophe",
        description: "Archie failed to maintain control during the separation ritual. His ice magic destabilized, contributing to the planar fracture. The Mages' Guild observer (Pernus Annmatar) undoubtedly witnessed this failure. Archie's provisional license is forfeit; he is once again a rogue mage, and likely blamed for the destruction of the Manor.",
        notes: "The War Mage's Staff remains in Archie's possession, but the 'Bearer's Blessing' and Guild License rewards are lost.",
        loreEntries: ['autumnwood_accords', 'cryomancy_basics', 'guild_membership_protocols', 'ectoplasm_harvesting', 'raventree_manor_history', 'temporal_magic', 'toad_god_mythology', 'star_shard_properties', 'bearer_protocols'],

        consequences: {
            success: "Archie channels energy flawlessly through the War Mage's Staff. The ritual succeeds. The Guild grants a permanent license. The Oracle(s) recognize him as a valuable ally.",
            failure: "Archie loses control during the ritual, causing a magical catastrophe. The Staff is destroyed. Immediate revocation of license and freedom. The timelines collapse.",
            partial: "The ritual succeeds, but Archie's contribution is flawed. The Star Shard's power compensates. Archie earns grudging respect but not full acceptance.",
            fire_relapse: "Archie uses fire during the ritual. It works perfectly. The Guild excommunicates him on the spot. Worth it? Only time will tell."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "War Mage's Staff", description: "Gifted by Markop. Quality magical focus with strong arcane resonance. Archie's first proper channeling tool." },
                { type: 'item', name: "Wraith Ectoplasm", description: "Potent magical reagent harvested from the banished entity" },
                { type: 'item', name: "Provisional Guild Card", description: "Currently Active - Validated by Wraith combat performance" },
                { type: 'reputation', faction: 'mages_guild', amount: 150, description: "Demonstrated ice magic competency against Arcane Wraith" }
            ],
            conditional: [
                { condition: "Complete the ritual using only ice magic through the Staff", reward: { type: 'feat', name: "Archie's Discipline", description: "Permanent +2 to ice magic control and focus checks" }},
                { condition: "Channel the Star Shard's energy successfully", reward: { type: 'boon', name: "Bearer's Blessing", description: "Minor divine favor from the Toad God—once per day, stabilize a failing spell" }},
                { condition: "Humiliate Pernus Annmatar during the ritual", reward: { type: 'reputation', faction: 'cosmic_jesters', amount: 300, description: "Made a mockery of the establishment at the worst possible moment" }},
                { condition: "Perfect ritual execution with new Staff", reward: { type: 'item', name: "Full Guild License", description: "Permanent Mages' Guild membership—all warrants suspended" }},
                { condition: "Impress the Oracle(s) with magical contribution", reward: { type: 'ally', name: "The Bearer's Recognition", description: "The Oracle(s) consider Archie worthy of deeper temporal secrets" }}
            ],
            xp: 7500,
            gold: { min: 500, max: 1200 }
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Confession", 
                description: "Archie posted the confession to Wahbook at 07:45. By 08:00, it had 2,000 likes and one official warrant.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 },
                outcomes: [
                    "Public admission to the Greenhouse Inferno",
                    "Gained viral social media attention",
                    "Triggered Mages' Guild investigation"
                ]
            },
            {
                id: 'm2', 
                status: 'completed', 
                title: "The Solarium Test",
                description: "Archie did NOT cast Fireball. He threw a twig. The Guild noticed. He has been issued a provisional license.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 },
                outcomes: [
                    "Demonstrated restraint under pressure",
                    "Earned provisional Guild approval",
                    "Avoided immediate arrest"
                ]
            },
            {
                id: 'm3',
                status: 'completed',
                title: "The Wraith Slayer",
                description: "Defeated the Arcane Wraith using Ice magic. Collected the remains. Proved he is not a 'one-trick pony' to the watching Mages. The temperature drop gave the Oracle the opening needed for banishment.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 },
                outcomes: [
                    "Used Ice Beam successfully in combat",
                    "Harvested Ectoplasm for future use",
                    "Resisted baiting by Pernus Annmatar",
                    "Demonstrated magical versatility",
                    "Aided the Oracle in final banishment",
                    "Earned grudging Mages' Guild respect"
                ]
            },
            {
                id: 'm4',
                status: 'completed',
                title: "The War Mage's Gift",
                description: "Markop returned from the Silent Grove battle carrying the spoils of victory. Without hesitation, he handed Archie the War Mage's Staff recovered from the Arachnid Matriarch's hoard. 'You've earned it,' he said. For the first time, Archie holds a focus worthy of his power.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 },
                outcomes: [
                    "Received War Mage's Staff from Markop",
                    "First proper magical focus acquired",
                    "Party recognition of magical growth",
                    "Staff resonance with ice magic confirmed"
                ]
            },
            {
                id: 'm5',
                status: 'completed',
                title: "The Many Oracles",
                description: "Returning to the Upper House, Archie witnessed the impossible: multiple Oracles existing simultaneously. One had been speaking with him and Hjumpik. Another led the rescue party back from the grove. When questioned, an Oracle revealed a 'Star Shard'—a crystalline gift from the Toad God—and declared himself a 'Bearer.' The ritual preparations began immediately.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 },
                outcomes: [
                    "Confirmed multiple Oracles exist",
                    "Witnessed Star Shard artifact",
                    "Learned of 'Bearer' title",
                    "Toad God connection revealed",
                    "Ritual preparations underway"
                ]
            },
            {
                id: 'm6',
                status: 'active',
                title: "The Separation Ritual",
                description: "The Oracle insists there can be no hesitation. 'Hesitation desynchronizes intent.' The ritual to separate the bleeding timelines requires vast energy channeled through willing participants. Archie has a new Staff. He has proven his ice discipline. Now he must prove he can be part of something greater than himself.",
                goals: [
                    { text: "Channel energy through the War Mage's Staff", status: 'active', priority: 'critical' },
                    { text: "Maintain ice discipline (NO FIRE)", status: 'active', priority: 'critical' },
                    { text: "Synchronize with the Oracle's timing", status: 'active', priority: 'critical' },
                    { text: "Hold position when reality destabilizes", status: 'pending', priority: 'high' },
                    { text: "Avoid Pernus Annmatar's provocations", status: 'active', priority: 'medium' },
                    { text: "Protect the ritual from Legion interference", status: 'pending', priority: 'high' },
                    { text: "Understand the Star Shard's role", status: 'active', priority: 'medium' }
                ],
                choices: [
                    {
                        id: 'staff_channeling',
                        title: "War Mage's Staff Technique",
                        description: "The new Staff responds to Archie's touch. How will he channel power through it?",
                        options: [
                            {
                                id: 'ice_conduit',
                                name: "Frozen Conduit",
                                description: "Channel pure cryomantic energy. The Staff's resonance with ice magic makes this the safest option. Maximum control, moderate power.",
                                requirements: ["High Arcana check", "No fire magic"],
                                consequences: { 
                                    success: "Perfect execution, full Guild license, Staff attunement complete", 
                                    failure: "Staff resonance wavers, ritual contribution reduced" 
                                }
                            },
                            {
                                id: 'dual_element',
                                name: "Balanced Elements",
                                description: "Channel both ice and fire through the Staff, keeping them in perfect opposition. Extremely dangerous, but theoretically ideal for a 'separation' ritual.",
                                requirements: ["Legendary Arcana check", "Perfect emotional control", "Guild violation"],
                                consequences: { 
                                    success: "Ritual supercharged, Staff permanently enhanced, theoretical breakthrough achieved", 
                                    failure: "Elements collide inside the Staff, catastrophic feedback" 
                                }
                            },
                            {
                                id: 'star_shard_sync',
                                name: "Bearer's Harmony",
                                description: "Attempt to synchronize the Staff with the Oracle's Star Shard. Unknown interaction. Potentially divine.",
                                requirements: ["Oracle's permission", "Faith in the Toad God (or willingness to fake it)"],
                                consequences: { 
                                    success: "Staff infused with Star Shard energy, Bearer recognition, divine boon", 
                                    failure: "Shard rejects unworthy channeler, magical backlash" 
                                }
                            }
                        ]
                    },
                    {
                        id: 'pernus_final',
                        title: "The Heckler's Last Chance",
                        description: "Pernus Annmatar will be watching the ritual. He will comment. He will judge. This is his final opportunity to undermine Archie—and Archie's final opportunity to silence him.",
                        options: [
                            {
                                id: 'ignore_completely',
                                name: "Professional Excellence",
                                description: "The best revenge is success. Let the ritual speak for itself.",
                                consequences: { success: "Guild approves of maturity and focus", failure: "Pernus claims credit for 'supervision'" }
                            },
                            {
                                id: 'perfect_timing',
                                name: "The Perfect Moment",
                                description: "Wait for Pernus to interrupt at the worst possible time, then redirect his energy into the ritual against his will.",
                                requirements: ["Timing check", "Arcane manipulation"],
                                consequences: { success: "Pernus becomes an unwilling power source, humiliated utterly", failure: "Ritual disrupted, both blamed" }
                            },
                            {
                                id: 'ice_mic_drop',
                                name: "Frozen Finale",
                                description: "At the moment of ritual completion, create an ice sculpture of Pernus in an embarrassing pose. Non-lethal. Devastating.",
                                requirements: ["Spare concentration during ritual climax"],
                                consequences: { success: "Legend status among junior mages, Pernus's dignity destroyed", failure: "Concentration split, ritual quality suffers" }
                            }
                        ]
                    }
                ]
            }
        ],

        npcs: { 
            allies: ['self_reflection_oracle', 'bowser', 'dan', 'markop', 'hjumpik'],
            enemies: ['pernus_annmatar', 'iron_legion_spy', 'marcus_ironhand'], 
            keyNpcs: ['self_reflection_oracle', 'senior_magus', 'pernus_annmatar'],
            neutral: ['mages_guild_observers'],
            new_revelations: ['multiple_oracles', 'star_shard_bearer']
        },

        locations: {
            primary: 'upper_house',
            ritual: 'summoning_room',
            related: ['raventree_manor_ruined_hall', 'raventree_manor_solarium', 'raventree_manor_dance_hall', 'silent_grove']
        },

        relatedQuests: ['raventree_manor_mysteries', 'vigilance_fallen', 'the_oracle_paradox', 'artifacts_of_balance', 'main_quest_raventree']
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
    subtitle: "The Purple Menace Needs a Favor",
    type: QUEST_TYPES.PERSONAL,
    category: 'Personal - Remi',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.MEDIUM,
    arcId: 'waluigi_schemes',
    objective: "Eavesdrop on an Imperial logistics meeting at the Port of Mighdural and report to Waluigi.",
    assignees: ['remi'],
    primaryAssignee: 'remi',
    difficulty: {
        overall: DIFFICULTY.MODERATE,
        stealth: DIFFICULTY.HARD,
        social: DIFFICULTY.MODERATE,
        survival: DIFFICULTY.LOW
    },
    tags: ['espionage', 'stealth', 'waluigi', 'personal', 'underworld'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 20 },
        updated: { year: 1040, monthIndex: 6, day: 21 }
    },

    description: "Waluigi doesn't ask nicely. He appears, makes cryptic threats that might be jokes (or might not be), waves around objects that might be weapons (or might be props), and then tells you what you're going to do for him. It's less 'recruitment' and more 'aggressive volunteering.'\n\nRemi has been aggressively volunteered.\n\nThe target is a meeting at the Port of Mighdural between a high-ranking Imperial logistics officer and a Merchant Prince. Waluigi wants to know what they're shipping. Not the manifests—those are lies. The real cargo. The kind of thing powerful people discuss in private rooms with guards at the doors.\n\nThe job is simple: plant a bug or find a listening position. Record the conversation. Get out. Report to Waluigi.\n\nThe complication is timing. The Iron Mandate just passed. Legion patrols have emergency powers. The Port of Mighdural is a major Imperial hub, and security has tightened considerably. A Toad caught spying on Imperial officials right now wouldn't face arrest—they'd face 'Order 120 adjacent' treatment.\n\nWaluigi's payment is... Waluigi. An autographed Bob-omb (he swears it's defused, probably), some gold, and the dubious privilege of having Waluigi consider you an asset rather than an obstacle.",

    loreEntries: ['waluigi_network', 'port_of_mighdural', 'iron_mandate'],

    consequences: {
        success: "Waluigi gets his intelligence. Remi gains a chaotic but occasionally useful contact. The information might prove valuable to the party later.",
        failure: "Remi is caught, killed, or compromised. Waluigi disavows all knowledge ('WAH! Never met her!').",
        partial: "The recording is incomplete or the intelligence is partial. Waluigi is disappointed but not hostile."
    },

    rewards: {
        guaranteed: [
            { type: 'item', name: "Waluigi's Autographed Bob-omb", description: "A Bob-omb with a purple mustache drawn on it. Waluigi swears it's defused. The fuse looks suspicious." },
            { type: 'gold', amount: 500 },
            { type: 'contact', name: "Waluigi", description: "Now considers you 'not completely useless.' This is high praise." }
        ],
        conditional: [
            { condition: "Identify what's being shipped", reward: { type: 'intel', name: "The Shipment", description: "Knowledge of illegal Imperial logistics—potential blackmail or leverage" }},
            { condition: "Complete without being detected", reward: { type: 'trait', name: "Ghost", description: "+1 to stealth in urban environments" }},
            { condition: "Steal something valuable during the mission", reward: { type: 'approval', name: "Waluigi's Respect", description: "He likes initiative. Might offer better jobs." }}
        ],
        xp: 2000
    },

    milestones: [
        {
            id: 'm1',
            status: 'active',
            title: "Identify the Target",
            description: "Locate the meeting venue at the Port of Mighdural. Identify the logistics officer and the Merchant Prince. Scout security.",
            goals: [
                { text: "Travel to Port of Mighdural", status: 'pending', priority: 'high' },
                { text: "Identify the meeting location", status: 'pending', priority: 'high' },
                { text: "Scout guard patterns and security measures", status: 'pending', priority: 'high' }
            ]
        },
        {
            id: 'm2',
            status: 'locked',
            title: "The Sting",
            description: "Plant the bug or find a listening position. Record the conversation. Don't get caught.",
            unlockCondition: "Target location identified"
        },
        {
            id: 'm3',
            status: 'locked',
            title: "The Delivery",
            description: "Return the recording to Waluigi. Collect payment. Try not to get exploded.",
            unlockCondition: "Recording obtained"
        }
    ],

    npcs: {
        allies: ['waluigi'],
        enemies: ['imperial_logistics_officer', 'merchant_prince_guards', 'legion_patrols'],
        neutral: ['port_workers', 'dockside_merchants']
    },

    locations: {
        primary: 'port_of_mighdural',
        related: ['waluigi_hideout', 'merchant_quarter']
    },

    relatedQuests: ['vigilance_fallen']
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
        status: QUEST_STATUS.NPCCOMPLETED,
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
        'bowser_shadow_etiquette': {
        id: 'bowser_shadow_etiquette',
        title: "The King's Manners",
        subtitle: "Don't Punch the Host (Yet)",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Bowser',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Survive the dinner party with Orangus Cornelius without initiating combat, as physical aggression will lead to immediate execution in the Shadowfell.",
        assignees: ['bowser'],
        primaryAssignee: 'bowser',
        difficulty: { overall: DIFFICULTY.HARD, social: DIFFICULTY.EXTREME, restraint: DIFFICULTY.EXTREME },
        tags: ['social', 'restraint', 'shadowfell', 'vampire'],
        dates: { added: { year: 1040, monthIndex: 6, day: 22 } },
        
        description: "Bowser is a King. He conquers. He breathes fire. He does not make polite conversation with undead aristocrats who view him as a novelty pet.\n\nHowever, in the Shadowfell Estate, his fire is cold light, and his strength is trivial compared to the vampiric speed of the Onyx Hand. Orangus Cornelius has seated Bowser at the head table. To save Green T and Archie, Bowser must do the hardest thing he has ever done: behave.",

        consequences: {
            success: "Cornelius is amused. The party gains a window to escape. Bowser gains the 'Intimidating Presence' social trait.",
            failure: "Bowser attacks. The Onyx Hand swarms. Capture or death is certain.",
        },

        rewards: {
            conditional: [
                { condition: "Pass 3 Social/Restraint checks", reward: { type: 'reputation', faction: 'onyx_hand', amount: 100, description: "A Civilized Beast" }},
                { condition: "Intimidate a vampire without violence", reward: { type: 'feat', name: "Silent Threat", description: "Advantage on intimidation" }}
            ],
            xp: 4000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "The First Course", description: "Endure the appetizer (which appears to be coagulated shadows) without flipping the table." },
            { id: 'm2', status: 'locked', title: "The Conversation", description: "Answer Cornelius's questions about the Mushroom Kingdom without revealing tactical weaknesses." }
        ]
    },
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
    'markop_void_vigil': {
        id: 'markop_void_vigil',
        title: "The Void Vigil",
        subtitle: "Staring Back",
        type: QUEST_TYPES.PERSONAL,
        category: 'Personal - Markop',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Maintain sanity while protecting the Oracle/Star Shard in the Void layer between dimensions.",
        assignees: ['markop'],
        primaryAssignee: 'markop',
        difficulty: { overall: DIFFICULTY.DEADLY, sanity: DIFFICULTY.EXTREME, combat: DIFFICULTY.HARD },
        tags: ['survival', 'void', 'horror', 'protection'],
        dates: { added: { year: 1040, monthIndex: 6, day: 22 } },
        
        description: "The edges of the manor have peeled away to Shadow and Fey, leaving Markop, Remi, and the Oracle in the center—which is now a platform floating in the Deep Mirror (The Void). The 'Something Older' that the Empire was digging for is here. It is scratching at the underside of the platform. Markop must hold the line.",

        loreEntries: ['void_entities', 'deep_mirror_physics'],

        rewards: {
            guaranteed: [
                { type: 'knowledge', name: "Glimpse of the End", description: "Saw what lies beneath reality." }
            ],
            xp: 6000
        },

        milestones: [
            { id: 'm1', status: 'active', title: "Shield the Light", description: "The Star Shard attracts the Void entities. Keep them away from the Oracle." },
            { id: 'm2', status: 'locked', title: "Don't Look Down", description: "Resist the urge to look into the infinite dark." }
        ]
    },
    
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
    title: "The Impostor Among Us",
    subtitle: "A Question That Won't Stay Buried",
    type: QUEST_TYPES.MYSTERY,
    category: 'Personal',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.CRITICAL, 
    arcId: 'raventree_manor',
    objective: "Determine whether Dan is who he claims to be, now that the only witness (Green T) is a captive in another dimension and the party is separated.",
    assignees: ['party'],
    primaryAssignee: 'party',
    difficulty: {
        overall: DIFFICULTY.DEADLY,
        investigation: DIFFICULTY.EXTREME, // Key witness is inaccessible
        puzzle: DIFFICULTY.HARD,
        social: DIFFICULTY.EXTREME
    },
    tags: ['mystery', 'impersonation', 'paranoia', 'infiltration', 'mirrors', 'planar-travel', 'time_sensitive'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 14 },
        updated: { year: 1040, monthIndex: 6, day: 22 }
    },

    description: "The ritual failed. The party is shattered across dimensions. And the question Lario asked on Day 14 now echoes in the silence between worlds: *Is Dan who he claims to be?*\n\nThe only person who might have had an answer was Green T. He saw something in Dan's reflection that made him run in terror. Now, Green T is a captive in the Shadowfell, and the party is separated by planar barriers. There is no one to ask. There is no easy way to verify the truth.\n\nEvery member of the party must now operate under a cloud of deep suspicion. Who are they trusting? Who is leading the Toads? What is the nature of the entity that pulled Green T from the mirror?\n\nThe revelation of the multiple Oracles and the Bearer's fragmented nature has proven that identity in Raventree is fluid. Doppelgangers and reflections are real. A replacement is not just plausible—it's precedented.\n\nThis is no longer an investigation to be completed before a ritual. This is a cold war of paranoia that will fester until the party reunites. And if they do reunite, will they be able to trust the faces that emerge from the portals?",

    loreEntries: ['raventree_mirror_entities', 'doppelganger_taxonomy', 'lario_background', 'planar_fracture_theory'],

    consequences: {
        success: "The party finds concrete proof of Dan's identity (or lack thereof) before reuniting. They can act with certainty, either by welcoming an ally or ambushing a foe.",
        failure_reunion: "The party reunites without answers. If Dan is an impostor, it has now infiltrated the core group with its cover stronger than ever. The opportunity to expose it may be lost.",
        failure_witness_lost: "Green T is not rescued from the Shadowfell. The only direct witness is lost, and the truth may be buried with him forever.",
        paranoia_collapse: "Suspicion spirals out of control. The separated party members turn on each other, sabotaging the efforts to fix the ritual based on unproven fears."
    },

    rewards: {
        guaranteed: [
            { type: 'intel', name: "The Truth About Dan", description: "Certainty, one way or another." }
        ],
        conditional: [
            { condition: "Expose an impostor while separated", reward: { type: 'xp', amount: 5000, description: "Catastrophe Averted" }},
            { condition: "Dan is real and you maintain trust despite the distance", reward: { type: 'loyalty', name: "Dan's Unbreakable Trust", description: "He learns of the suspicion later and is grateful for the faith shown in him." }},
            { condition: "Dan is false and you destroy the impostor upon reunion", reward: { type: 'item', name: "Shard of a False Face", description: "A fragment of whatever was pretending to be your friend, radiating deceit." }}
        ],
        xp: 4000
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "The Restaurant Warning",
            description: "Day 14. Amid the chaos of the Legion raid, Lario claimed the Dan with them was a fake. The warning was heard but not investigated.",
            completedDate: { year: 1040, monthIndex: 6, day: 14 }
        },
        {
            id: 'm2',
            status: 'completed',
            title: "The Witness and the Flight",
            description: "Green T was pulled from the Mirror Dimension by Dan. He looked at his rescuer with absolute terror and fled, suggesting he saw proof of the impostor theory in the reflection.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 }
        },
        {
            id: 'm3',
            status: 'completed',
            title: "The Separation",
            description: "The ritual failed, scattering the party and separating everyone from the key witness, Green T, who is now a captive in the Shadowfell.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 }
        },
        {
            id: 'm4',
            status: 'active',
            title: "Paranoia in Isolation",
            description: "The party must now operate while separated, unable to trust the reports from other groups. Is Dan's leadership of the remaining Toads genuine? Is the being in the Void with Markop and Remi the real Oracle? Every action must be re-evaluated through the lens of potential infiltration.",
            goals: [
                { text: "Rescue Green T to secure the only witness (see 'Rescue Green T' quest)", status: 'active', priority: 'critical' },
                { text: "Find a way to communicate between planar shards to compare notes", status: 'active', priority: 'high' },
                { text: "Analyze Dan's past actions for inconsistencies", status: 'active', priority: 'medium' },
                { text: "Prepare a contingency plan for a hostile reunion", status: 'active', priority: 'critical' }
            ]
        }
    ],

    clues: [
        { id: 'c1', status: 'known', text: "Lario's warning was delivered with extreme urgency, suggesting high confidence.", source: 'lario_toad' },
        { id: 'c2', status: 'known', text: "Green T ran specifically from Dan after being pulled from a mirror, a place of reflections and true selves.", source: 'green_t_flight' },
        { id: 'c3', status: 'confirmed', text: "The Manor can produce duplicates and fragmented identities (The Many Oracles).", source: 'bearer_revelation' },
        { id: 'c4', status: 'unknown', text: "Where is the 'real' Dan, if he was replaced? Is he trapped in the Mirror Dimension?", source: 'deduction' },
        { id: 'c5', status: 'unknown', text: "What are the goals of a potential impostor? Sabotage? Intelligence gathering?", source: 'deduction' }
    ],

    npcs: {
        allies: ['lario'],
        key_witness: ['green_t'],
        subject: ['dan'],
        observers: [] // Party is now isolated
    },

    locations: {
        primary: 'multiple_planes',
        witness_location: 'shadowfell_estate',
        subject_location: 'physical_antechamber_or_void', // His location post-fracture is ambiguous
        related: ['restaurant_ruins', 'raventree_manor']
    },

    relatedQuests: ['artifacts_of_balance', 'main_quest_raventree', 'rescue_green_t']
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

};
        
export const MAIN_QUESTS = {
'artifacts_of_balance': {
        id: 'artifacts_of_balance',
        title: "The Artifacts of Balance",
        subtitle: "The Three Keys",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Define the three layers of reality (Shadowfell, Feywild, Void) to complete the ritual and reunify the shattered manor.",
        assignees: ['party'],
        primaryAssignee: 'party',
        difficulty: {
            overall: DIFFICULTY.DEADLY,
            combat: DIFFICULTY.HARD,
            puzzle: DIFFICULTY.DEADLY,
            magic: DIFFICULTY.EXTREME,
            social: DIFFICULTY.HARD,
            theological: DIFFICULTY.UNKNOWN
        },
        tags: ['supernatural', 'planar-travel', 'ritual', 'boss-rush', 'faction-convergence', 'divine', 'bearer', 'fracture'],
        dates: {
            added: { year: 1040, monthIndex: 6, day: 19 },
            updated: { year: 1040, monthIndex: 6, day: 22 }
        },

        description: "The ritual failed. The manor has shattered into three distinct planar shards, and the party is scattered. To fix the ritual and escape, the party must conquer the 'edges' of reality they have been thrown into.\n\n**The Shadow Key:**\nArchie and Bowser are in the Shadowfell Estate. They must navigate a vampire dinner party hosted by 'Orangus Cornelius.' Their goal is to rescue Green T, whose presence is required to anchor the ritual. Archie must master the reversed physics of Shadow magic (Light as Force).\n\n**The Wild Key:**\nWaluigi and Toad Lee are in the Feywild Attic. They must secure the treasure hoard of the Giant Butterfly, which likely contains the 'Third Key' artifact needed for the ritual circle. They must also deal with Toadburt, who has been turned into a living bomb by the Iron Legion.\n\n**The Void Key:**\nMarkop, Remi, and the Oracle are in the Deep Mirror (Void). They are the center point. They must hold the line against the 'Something Older' while waiting for the edges to be defined.\n\nThe Star Shard is still with the Oracle in the Void. Its light is the only thing keeping them from being erased.",

        loreEntries: ['planar_fracture_theory', 'shadowfell_physics', 'feywild_ecology', 'void_entities', 'star_shard_properties', 'bearer_lineage', 'oracle_multiplicity'],

        consequences: {
            success: "The three keys are aligned. The manor reunifies. The party escapes with the Star Shard and the Oracle. The Iron Legion ambush in the physical room is overwhelmed by the sudden return of the full party.",
            partial_success: "One key is missing. The manor reassembles imperfectly. Parts of the building remain in the Shadowfell or Feywild. Party members may be left behind or altered permanently.",
            failure: "The edges are never defined. The center collapses. The manor implodes into the Void, erasing everyone inside from history.",
            legion_victory: "Toadburt detonates his ring in the Feywild, destroying that shard. The recoil shatters the ritual, killing the Oracle and allowing the Legion to scavenge the Star Shard from the wreckage."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Wraith Ectoplasm", description: "Harvested by Archie. Potent reagent for binding or dispelling spirits." },
                { type: 'item', name: "War Mage's Staff", description: "Recovered from the Arachnid Matriarch. Given to Archie by Markop." },
                { type: 'item', name: "Web-Woven Scale Armor", description: "Claimed by Remi. Corrupted by grove magic. Properties unknown." },
                { type: 'trait', name: "Planar Anchors", description: "All party members gain resistance to forced teleportation." }
            ],
            conditional: [
                {
                    condition: "Rescue Green T",
                    reward: { type: 'ally', name: "Green T (Shadow-Touched)", description: "Can detect planar rifts and shadow-walk." }
                },
                {
                    condition: "Defuse Toadburt",
                    reward: { type: 'item', name: "Entropy Core", description: "The heart of the ring. A grenade that erases matter." }
                },
                {
                    condition: "Loot the Feywild Hoard",
                    reward: { type: 'wealth', amount: 50000, description: "Ancient fey gold and gems. Equivalent to a small dragon's hoard." }
                }
            ],
            xp: 15000,
            gold: { min: 0, max: 0, note: "The gold is in the Feywild. Getting it out is the hard part." }
        },

        milestones: [
            {
                id: 'm1',
                status: 'completed',
                title: "The Anchors Fall",
                description: "Three threats bound the curse. Three fell. The Star Fragment birthed God Toad in the Greenhouse Inferno. The Mirror Terror was spared by hjumpik. The Arcane Wraith was banished. The path to the final ritual opened.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm2',
                status: 'completed',
                title: "The Silent Grove Purged",
                description: "The Arachnid Matriarch was banished. The Silent Grove was cleared.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm3',
                status: 'completed',
                title: "The Shattered Ritual",
                description: "The synchronization rite failed. Reality fractured. The party is scattered across the Shadowfell, Feywild, and Void.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm4',
                status: 'active',
                title: "The Three Keys",
                description: "The party must conquer their respective shards to repair the ritual.\n\n**Shadow Key:** Find Green T in the Shadowfell Dinner Party.\n**Wild Key:** Find the Artifact in the Feywild Hoard and stop Toadburt.\n**Void Key:** Survive the 'Something Older' in the Deep Mirror.",
                goals: [
                    { text: "Rescue Green T (Shadowfell)", status: 'active', priority: 'critical' },
                    { text: "Stop Toadburt / Get Artifact (Feywild)", status: 'active', priority: 'critical' },
                    { text: "Survive the Void (Mirror Space)", status: 'active', priority: 'critical' },
                    { text: "Synchronize the shards", status: 'pending', priority: 'critical' }
                ]
            }
        ],

        npcs: {
            allies: ['self_reflection_oracle', 'ghost_servants', 'green_t'],
            enemies: ['orangus_cornelius', 'fey_butterfly_guardian', 'agent_malissia'],
            observers: ['iron_legion_spy', 'iron_legion_spy_contact'],
            uncertain: ['toadburt', 'dan'],
            new_revelations: ['planar_fracture', 'star_shard_bearer', 'entropy_ring_tech']
        },

        locations: {
            primary: 'raventree_manor',
            shards: ['shadowfell_estate', 'feywild_attic', 'deep_mirror', 'physical_antechamber'],
            cleared: 'silent_grove',
        },

        relatedQuests: ['main_quest_raventree', 'rescue_green_t', 'rescue_toadburt', 'hjumpik_legion_pact']
    },
'main_quest_raventree': {
        id: 'main_quest_raventree',
        title: "The Curse of Raventree",
        subtitle: "The Fracture",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Survive the three fractured realities (Shadowfell, Feywild, Void), repair the ritual by defining the 'edges' of reality, and synchronize the timelines before the manor collapses into the Deep Mirror.",
        assignees: ['party', 'auxiliary'],
        primaryAssignee: 'party',
        difficulty: {
            overall: DIFFICULTY.DEADLY,
            survival: DIFFICULTY.EXTREME,
            sanity: DIFFICULTY.HARD,
            social: DIFFICULTY.EXTREME,
            combat: DIFFICULTY.HARD,
            theological: DIFFICULTY.UNKNOWN
        },
        tags: ['survival', 'horror', 'supernatural', 'politics', 'urgent', 'faction-war', 'ritual', 'planar-travel', 'shadowfell', 'feywild', 'fracture'],
        dates: {
            added: { year: 1040, monthIndex: 6, day: 15 },
            updated: { year: 1040, monthIndex: 6, day: 22 }
        },

        description: "The ritual failed.\n\nOn Day 21, the Oracle attempted to synchronize three layers of reality. Instead, reality shattered. The party has been violently separated across dimensions, each trapped in a distorted reflection of Raventree Manor.\n\n**The Shadowfell Estate (Archie & Bowser):**\nA colorless, frozen world where fire magic is dampened to harmless light. Ruled by 'Orangus Cornelius' and the Onyx Hand, who are hosting a macabre dinner party. Green T is here, held as a 'guest.' Archie and Bowser must navigate vampire politics without their usual brute force.\n\n**The Feywild Attic (Waluigi & Toad Lee):**\nAn overgrown, vibrant nightmare where the manor's attic has exploded into a forest. Giant insects guard treasure hoards, and goblin staff have unionized against the chaos. They must survive the flora and fauna while looting what they can.\n\n**The Deep Mirror (Markop, Remi, Oracle):**\nTrapped in the void between reflections. They are facing the 'Something Older' the Empire was digging for. Their status is unknown.\n\n**The Physical Manor (Toad Squad & Legion):**\nThe Iron Legion has seized the physical room. Toadburt has been captured, fitted with a magical bomb (Entropy Ring), and coerced into a suicide mission to the Feywild to capture the Oracle. The remaining Toads are scattered or captured.\n\nThe Oracle's final words before the fracture provided the key: *'You cannot cut the center until you have defined the edges.'* The party must conquer their respective 'edges' (Shadow and Fey) to stabilize the center and reunite.",

        loreEntries: ['raventree_manor_history', 'planar_fracture_theory', 'shadowfell_physics', 'feywild_ecology', 'entropy_ring_tech', 'orangus_cornelius', 'onyx_hand_etiquette'],

        consequences: {
            success: "The edges are defined. The ritual is completed properly. The party reunites in a stabilized Manor with the truth they sought. Green T is rescued. The Iron Legion's ambush is thwarted.",
            failure_shadow: "Archie and Bowser are consumed by the Onyx Hand or trapped as permanent guests. Green T remains a prisoner forever.",
            failure_fey: "Waluigi and Toad Lee are eaten by mega-fauna or lost in the timeless drift of the Feywild. Toadburt's ring detonates, causing a massive planar rupture.",
            failure_void: "Markop, Remi, and the Oracle are erased from existence, becoming reflections in the glass that scream silently.",
            total_collapse: "The Manor implodes, taking a chunk of the material plane with it. The 'Something Older' escapes into the world."
        },

        rewards: {
            guaranteed: [
                { type: 'trait', name: "Planar Traveler", description: "Resistance to planar displacement and environmental effects of Shadow/Fey realms." },
                { type: 'item', name: "Shadow-Touched Rose", description: "A flower that absorbs light and heat. Useful for stealth." },
                { type: 'item', name: "Feywild Treasure", description: "Gold and gems from the Butterfly's Hoard. Values fluctuate wildly based on observer belief." },
                { type: 'knowledge', name: "Vampiric Etiquette", description: "Advantage on social checks with undead nobility." }
            ],
            conditional: [
                {
                    condition: "Rescue Green T from the Dinner Party",
                    reward: { type: 'ally', name: "Green T (Shadow-Walker)", description: "Gains ability to step through shadows." },
                    status: 'active'
                },
                {
                    condition: "Toadburt survives and removes the Ring",
                    reward: { type: 'item', name: "Defused Entropy Ring", description: "A powerful, unstable magical explosive." },
                    status: 'active'
                },
                {
                    condition: "Waluigi befriends the Goblin Union",
                    reward: { type: 'ally', name: "Goblin Local 404", description: "A group of goblins willing to perform maintenance and sabotage." },
                    status: 'pending'
                },
                {
                    condition: "Archie masters 'Light as Force' magic",
                    reward: { type: 'ability', name: "Hard Light Constructs", description: "Can create solid barriers and weapons using light spells." },
                    status: 'active'
                }
            ],
            xp: 20000,
            gold: { min: 5000, max: 20000, note: "The Feywild hoard is vast, but carrying it out is the problem." }
        },

        milestones: [
            {
                id: 'm1',
                status: 'completed',
                title: "The Arrival",
                description: "The party entered Raventree Manor seeking shelter. They found a parlor ghost, enchanted clothing that attacked Markop, and a note warning them about the mirrors. They ignored the note.",
                completedDate: { year: 1040, monthIndex: 6, day: 15 }
            },
            {
                id: 'm2',
                status: 'completed',
                title: "The Descent",
                description: "Flaming books. Rust monsters. A balcony that collapsed under Remi. The Manor tested the party's survival instincts. The Oracle made contact, offering cryptic guidance and unsettling hospitality.",
                completedDate: { year: 1040, monthIndex: 6, day: 16 }
            },
            {
                id: 'm3',
                status: 'completed',
                title: "The Siege",
                description: "Speaker L's Pond Patrol surrounded the Manor. Archie surrendered to buy time. A glass monster emerged from a mirror. Green T was pulled into a reflection. The party scattered while walls manifested wraiths.",
                completedDate: { year: 1040, monthIndex: 6, day: 19 }
            },
            {
                id: 'm4',
                status: 'completed',
                title: "The Anchors Fall",
                description: "Three threats bound the curse. Three fell. The Star Fragment birthed God Toad in the Greenhouse Inferno. The Mirror Terror was spared by hjumpik—contained, not destroyed. The Arcane Wraith was banished through teamwork. The path to the final ritual opened.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm5',
                status: 'completed',
                title: "The Silent Grove Purged",
                description: "A rescue mission to save Eager from the Arachnid Matriarch. Markop grew to titan size. Remi fell and rose. Salem shot the spider in the eye. The Oracle's banishment circle erased the threat.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm6',
                status: 'completed',
                title: "The Bearer Revealed",
                description: "The party returned to find two Oracles waiting. The revelation: there are many Oracles, or one fractured across time and space. The Star Shard was displayed—a crystalline gift from the Toad God. The Bearer title was explained.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm7',
                status: 'completed',
                title: "The Shattered Ritual",
                description: "The synchronization rite failed catastrophically due to missing participants and Archie's unstable magic. Reality fractured, splitting the party across the Shadowfell, Feywild, and Void. The physical room was lost to the Iron Legion.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm8',
                status: 'active',
                title: "Defining the Edges",
                description: "The party must survive and conquer their respective dimensions to stabilize the ritual from the outside in.\n\n**Shadowfell:** Archie & Bowser must survive the Dinner Party and rescue Green T.\n**Feywild:** Waluigi & Toad Lee must loot the hoard and survive the Sleeper Agent (Toadburt).\n**Void:** Markop & Remi must keep their sanity and protect the Oracle.",
                goals: [
                    { text: "Survive 'Orangus Cornelius' Dinner Party", status: 'active', priority: 'critical' },
                    { text: "Rescue Green T from the Shadowfell", status: 'active', priority: 'critical' },
                    { text: "Loot the Feywild Attic Hoard", status: 'active', priority: 'medium' },
                    { text: "Deal with the Sleeper Agent (Toadburt)", status: 'active', priority: 'critical' },
                    { text: "Find a way back to the Central Mirror", status: 'pending', priority: 'critical' }
                ]
            }
        ],

        threats: {
            orangus_cornelius: {
                name: "Orangus Cornelius",
                faction: "Onyx Hand (Shadowfell)",
                status: "Host",
                motivation: "Boredom, hunger, and a desire to collect 'interesting' guests. He is amused by Bowser's strength but will turn violent if bored.",
                danger: "Vampiric strength, political power, controls the Shadow Estate. Archie's fire magic is useless against him here."
            },
            agent_malissia: {
                name: "Agent Malissia",
                faction: "Iron Legion",
                status: "Overseer",
                motivation: "Efficiency and control. She has turned Toadburt into a weapon to bypass the manor's defenses.",
                danger: "Holding the kill-switch for Toadburt. commands the Legion forces in the physical manor."
            },
            sleeper_toadburt: {
                name: "Toadburt (The Sleeper)",
                faction: "Coerced / Iron Legion",
                status: "Active Threat / Victim",
                motivation: "Survival. He believes he must capture the Oracle or die.",
                danger: "Equipped with an Entropy Ring that can disintegrate targets or explode with massive force."
            },
            fey_mega_fauna: {
                name: "The Butterfly Guardian",
                faction: "Feywild",
                status: "Territorial",
                motivation: "Protecting the hoard/grove.",
                danger: "Massive size, flight, spore attacks."
            }
        },

        newRevelations: {
            planar_fracture: "Raventree Manor exists in multiple dimensions simultaneously. The ritual failure forced these layers apart.",
            shadow_physics: "Magic behaves differently in other planes. Fire becomes Light/Cold in the Shadowfell.",
            legion_tech: "The Iron Legion possesses 'Entropy Rings' capable of stabilizing—or destroying—planar travelers.",
            green_t_location: "Green T is alive, trapped in the Shadowfell reflection of the manor."
        },

        relatedQuests: ['rescue_toadburt', 'shadow_dinner_diplomacy', 'feywild_heist', 'artifacts_of_balance']
    },
'rescue_green_t': {
        id: 'rescue_green_t',
        title: "Through the Looking Glass",
        subtitle: "The Captive Witness",
        type: QUEST_TYPES.RESCUE,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Rescue Green T, a captive 'guest' at a vampire dinner party hosted by Orangus Cornelius in the Shadowfell Estate, before the escape window closes.",
        assignees: ['archie_miser', 'bowser'],
        primaryAssignee: 'archie_miser',
        difficulty: {
            overall: DIFFICULTY.DEADLY,
            tracking: DIFFICULTY.EASY, // He's not hiding anymore
            social: DIFFICULTY.EXTREME, // Vampire politics
            time: DIFFICULTY.CRITICAL,
            psychological: DIFFICULTY.EXTREME
        },
        tags: ['rescue', 'dimensional', 'time-sensitive', 'social-stealth', 'psychological', 'shadowfell', 'impostor'],
        dates: {
            added: { year: 1040, monthIndex: 6, day: 19 },
            updated: { year: 1040, monthIndex: 6, day: 22 },
            deadline: { year: 1040, monthIndex: 6, day: 22, hour: 12, note: "Deadline is when Cornelius loses patience or the dinner concludes." }
        },

        description: "The ritual failed. Green T was not found. Now, the fracture has revealed his fate.\n\nHe is trapped in the Shadowfell, a 'guest of honor' at a macabre dinner party hosted by the vampire lord Orangus Cornelius. His paranoia is suppressed by a greater, more immediate terror: his hosts. For Archie and Bowser, this is no longer a search—it's an extraction from behind enemy lines where open combat is suicide.\n\nThey must play a dangerous social game in a world where their strengths are liabilities. Archie's fire magic is dampened to harmless, cold light. Bowser's brute force is an insult to the vampires' refined cruelty. They must rely on wits, bluffs, and intimidation to create an opportunity to escape with the only witness to the truth.\n\nThe core mystery remains: Why did Green T run from Dan? What did he see in the mirror? Rescuing him isn't just about saving a friend—it's about recovering a truth that could shatter the party's trust forever. He is the Shadow Key, and without him, the ritual cannot be fixed.",

        loreEntries: ['mirror_entities', 'shadowfell_physics', 'onyx_hand_etiquette', 'orangus_cornelius', 'impostor_theory'],

        consequences: {
            success: "Green T is extracted from the Shadowfell. He survives, and his testimony about Dan's reflection becomes available. The party secures the 'Shadow Key' needed to repair the ritual.",
            failure: "Green T is not rescued. He becomes a permanent thrall of Orangus Cornelius, his mind and secrets belonging to the Onyx Hand forever. The Shadow Key is lost, making the ritual impossible to complete.",
            partial: "Green T is rescued, but Archie or Bowser is left behind, captured by the Onyx Hand. The party is forced to make a terrible choice between the mission and a friend.",
            dark_truth: "The rescue succeeds, and Green T reveals what he saw: Dan's reflection was wrong. The party has been traveling with a doppelganger. This revelation arrives at the worst possible time, sowing chaos and distrust.",
            violent_escape: "The party fights their way out. They may escape, but the Onyx Hand is now a declared, active enemy who will hunt them across the planes."
        },

        rewards: {
            guaranteed: [
                { type: 'knowledge', name: "Vampire Politics", description: "Advantage on social checks against the Onyx Hand." }
            ],
            conditional: [
                {
                    condition: "Rescue Green T successfully",
                    reward: { type: 'ally', name: "Green T (Shadow-Walker)", description: "Gains the ability to sense planar rifts and step through shadows. His perspective has been fundamentally altered." }
                },
                {
                    condition: "Escape without alerting the entire estate",
                    reward: { type: 'item', name: "Cornelius's Signet Ring", description: "Stolen during the escape. Grants passage in certain underworld circles." }
                },
                {
                    condition: "Discover why Green T ran from Dan",
                    reward: { type: 'revelation', name: "The Wrong Face", description: "Green T confirms he saw something inhuman in Dan's reflection, providing concrete evidence for the Impostor Toad theory." }
                }
            ],
            xp: 5000
        },

        greenTStatus: {
            currentCondition: "Captive Guest / Suppressed Paranoia / Socially Paralyzed",
            physicalState: "Physically unharmed but exhausted. Forced to eat and drink strange Shadowfell food.",
            mentalState: "Critical. He is playing the part of a polite guest to survive, but his underlying terror of reflections and his fear of Dan is consuming him. He views Archie and Bowser as his only hope.",
            lastKnownLocation: "The Shadow Estate Dining Hall, seated near Orangus Cornelius.",
            sanity: 2,
            trust: "Will trust Archie and Bowser implicitly, but will panic if he sees Dan or a perfect reflection.",
            notes: "He is the only witness to Dan's potential true nature. His survival is critical to resolving the impostor subplot. His death or permanent capture would be a victory for the entity posing as Dan."
        },

        milestones: [
            {
                id: 'm1',
                status: 'completed',
                title: "The Abduction",
                description: "During the Siege of Raventree, the Shard Stalker manifested from a mirror and pulled Green T into the dimension between reflections.",
                completedDate: { year: 1040, monthIndex: 6, day: 19 }
            },
            {
                id: 'm2',
                status: 'completed',
                title: "The Extraction & Flight",
                description: "Dan pulled Green T back to reality. Instead of relief, Green T was consumed by terror at what he saw in Dan's reflection and fled into the Manor's depths.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm3',
                status: 'completed',
                title: "The Fracture",
                description: "The ritual failed before Green T could be found. The planar fracture cast him into the Shadowfell, where he was 'found' by the Onyx Hand.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 }
            },
            {
                id: 'm4',
                status: 'active',
                title: "Dinner with the Damned",
                description: "Archie and Bowser have infiltrated the dinner party. They must navigate the deadly social etiquette of vampires, create a diversion, and extract Green T before Cornelius decides the evening's entertainment is over.",
                goals: [
                    { text: "Maintain cover as honored guests", status: 'active', priority: 'critical' },
                    { text: "Communicate a plan to Green T non-verbally", status: 'active', priority: 'high' },
                    { text: "Create a diversion using dampened magic or brute force", status: 'pending', priority: 'critical' },
                    { text: "Grab Green T and get to an exit", status: 'pending', priority: 'critical' },
                    { text: "Survive the escape from the Estate grounds", status: 'pending', priority: 'critical' }
                ]
            }
        ],

        connections: {
            to_impostor_quest: "This quest is the key to resolving the 'Mystery Impostor Toad' quest. Green T is the sole witness.",
            to_ritual_quest: "Green T is the 'Shadow Key.' Without him, the 'Artifacts of Balance' quest cannot be completed. His rescue is a mandatory step to fix the primary ritual.",
            to_dan: "Success in this quest will turn suspicion against Dan into near-certainty, creating a massive internal conflict for the party upon their reunion.",
            to_bearer_revelation: "The theme of fractured identity (many Oracles) provides a precedent for what Green T might have seen—a doppelganger or a fragmented entity wearing Dan's face."
        },

        urgencyNote: "The situation is a social powder keg. A single misstep by Archie or Bowser could turn the dinner party into a slaughter. They are outnumbered, outmatched, and magically disadvantaged.",

        relatedQuests: ['artifacts_of_balance', 'main_quest_raventree', 'mystery_imposter_toad']
    },    
'vigilance_fallen': {
    id: 'vigilance_fallen',
    title: "The Iron Sky Breach",
    subtitle: "Order 120 — The Clock Is Running",
    type: QUEST_TYPES.MAIN,
    category: 'Main Story',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.CRITICAL,
    arcId: 'vigilance_saga',
    objective: "Recover the airship 'Vigilance', halt Order 120, and prevent the complete destruction of the Toad Liberation movement.",
    assignees: ['party', 'liberated_toads'],
    primaryAssignee: 'party',
    difficulty: {
        overall: DIFFICULTY.DEADLY,
        combat: DIFFICULTY.DEADLY,
        stealth: DIFFICULTY.HARD,
        social: DIFFICULTY.MODERATE,
        logistics: DIFFICULTY.EXTREME
    },
    tags: ['combat', 'rescue', 'airship', 'betrayal', 'urgent', 'faction-war', 'time-critical'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 18 },
        updated: { year: 1040, monthIndex: 6, day: 21 },
        deadline: { year: 1040, monthIndex: 6, day: 22 }
    },

    description: "The Vigilance is gone. The sky belongs to the Iron Legion now.\n\nDay 20, 16:30: Legion shock troops breached the hull in a coordinated assault. Captain Ryan was forced to jump rather than be captured—he plummeted into the forest below, his fate unknown. The airship that carried the Liberated Toads, that served as their mobile headquarters and symbol of freedom, now flies under Legion colors. It passed over Raventree Manor broadcasting propaganda, a deliberate humiliation.\n\nDay 21, 14:30: Bones' infiltration of Aegis Command ended with Marcus Ironhand's blade in his chest. The General issued Order 120 without hesitation—execute all Toad prisoners. No negotiations. No ransoms. No survivors.\n\nThe movement is being decapitated in real-time. Bones is wounded and captured. Creek is pinned down somewhere in the Legion fortress. Over a hundred Toads discovered in the Vigilance's hidden barrel compartments are now Legion prisoners. The 'Green Speaker L' in custody is a decoy buying time, but time is measured in hours now.\n\nAnd the party is trapped in Raventree Manor, about to enter a magical ritual they cannot abandon, while everything they fought to build burns.\n\nThe Iron Mandate gives the Legion emergency powers. The Supernatural Sovereignty Act makes their allies illegal. The sky is controlled, the ground is being purged, and the only assets not in chains are scattered, wounded, or occupied.\n\nSomething has to give. The question is what—and who pays the price.",

    loreEntries: ['vigilance_history', 'iron_legion_tactics', 'order_120', 'marcus_ironhand', 'iron_mandate', 'aegis_command_layout'],

    consequences: {
        success: "The Vigilance is reclaimed or destroyed to deny the Legion. Order 120 is halted or circumvented. The movement survives, bloodied but intact.",
        failure: "Bones, Creek, and all captured Toads are executed. The Vigilance becomes a permanent Legion flagship. The Liberation movement is effectively destroyed as an organized force.",
        partial: "The ship is scuttled to prevent Legion use. Some prisoners escape, others don't. The movement survives but loses its mobility, its command structure, and its momentum."
    },

    rewards: {
        guaranteed: [
            { type: 'item', name: "Captain's Key (Restored)", description: "Full access to the Vigilance's secure compartments—if the ship is recovered" },
            { type: 'reputation', faction: 'liberated_toads', amount: 500, description: "Heroes of the Liberation" },
            { type: 'reputation', faction: 'iron_legion', amount: -2000, description: "Kill on Sight designation across all Legion territories" }
        ],
        conditional: [
            { condition: "Save Bones from execution", reward: { type: 'ally', name: "Bones (Survivor)", description: "Hardened by torture and betrayal, absolutely loyal to whoever saved him" }},
            { condition: "Rescue Creek", reward: { type: 'ally', name: "Creek (True Believer)", description: "The mercenary's loyalty is no longer for sale" }},
            { condition: "Expose the Decoy Speaker L's deception to the Legion", reward: { type: 'intel', name: "Legion Confusion", description: "24-48 hours of tactical paralysis as they reorganize" }},
            { condition: "Reclaim the Vigilance intact", reward: { type: 'asset', name: "The Vigilance (Scarred)", description: "Battle damage, but flying. The symbol endures." }},
            { condition: "Kill Marcus Ironhand", reward: { type: 'reputation', faction: 'liberated_toads', amount: 2000, description: "The Hand That Bled" }}
        ],
        xp: 10000,
        gold: { min: 2000, max: 5000 }
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "The Boarding",
            description: "Iron Legion shock troops breached the Vigilance's hull in a coordinated assault. The crew fought but was overwhelmed. Captain Ryan jumped rather than surrender, falling into the forest. The ship was taken.",
            completedDate: { year: 1040, monthIndex: 6, day: 20 }
        },
        {
            id: 'm2',
            status: 'failed',
            title: "The Infiltration",
            description: "Bones infiltrated Aegis Command disguised as a Legion guard. He witnessed the interrogation of the decoy Speaker L and gathered critical intelligence. Then Marcus Ironhand saw through the disguise and stabbed him. Creek's extraction attempt caused chaos but failed. Order 120 was issued.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 },
            outcomes: [
                "Bones critically wounded, captured",
                "Creek pinned down, evading",
                "Decoy performing successfully",
                "Order 120 issued—execution imminent"
            ]
        },
        {
            id: 'm3',
            status: 'active',
            title: "Regroup and Retaliate",
            description: "The infiltration failed catastrophically. The party is trapped in Raventree Manor. Every asset is either captured, wounded, or occupied. A new approach is needed immediately.",
            goals: [
                { text: "Complete the Raventree ritual (cannot be abandoned)", status: 'active', priority: 'critical' },
                { text: "Escape Raventree Manor immediately after", status: 'pending', priority: 'critical' },
                { text: "Use hjumpik's Legion contact to delay Order 120", status: 'pending', priority: 'critical' },
                { text: "Locate Captain Ryan (status unknown)", status: 'pending', priority: 'high' },
                { text: "Locate the real Speaker L", status: 'active', priority: 'high' },
                { text: "Coordinate with Rogueport delegation (Embercap)", status: 'pending', priority: 'medium' }
            ],
            choices: [
                {
                    id: 'approach_method',
                    title: "Choose Your Approach",
                    description: "Stealth failed. Infiltration failed. What remains?",
                    options: [
                        {
                            id: 'assault',
                            name: "Iron Storm",
                            description: "Full military assault on Aegis Command. Maximum violence, minimum subtlety.",
                            requirements: ["Allied military support (Rakasha? Loyalists?)", "Siege equipment or air support", "Acceptance of heavy casualties"],
                            consequences: { success: "Prison break. Prisoners freed. Legion garrison destroyed.", failure: "Total party kill. Movement extinction." }
                        },
                        {
                            id: 'diplomacy',
                            name: "The hjumpik Protocol",
                            description: "Trade the Oracle to the Legion in exchange for the prisoners. hjumpik's deal becomes the party's salvation—at a cost.",
                            requirements: ["hjumpik completes his deal", "Oracle delivered to Legion custody", "Party accepts the betrayal"],
                            consequences: { success: "Prisoners released. Oracle lost. Magical ally sacrificed for lives.", failure: "Oracle captured AND prisoners executed. Worst outcome." }
                        },
                        {
                            id: 'chaos',
                            name: "The Third Faction",
                            description: "Trigger conflict between the Legion and another power (Mages' Guild? Dragons? K. Rool?) and extract prisoners in the chaos.",
                            requirements: ["Identify exploitable faction tensions", "Timing and positioning", "Willingness to cause collateral damage"],
                            consequences: { success: "Prisoners escape amid larger conflict.", failure: "Prisoners killed in crossfire. Party blamed by multiple factions." }
                        },
                        {
                            id: 'decoy_extension',
                            name: "The Long Con",
                            description: "Extend the decoy's performance. Feed the Legion false intelligence. Buy time for a proper rescue.",
                            requirements: ["Communication with the decoy", "Convincing false intelligence", "Time the party doesn't have"],
                            consequences: { success: "Execution delayed. Window opens.", failure: "Decoy exposed. Execution accelerated." }
                        }
                    ]
                }
            ]
        }
    ],

    assetStatus: {
        vigilance: { status: "Captured", location: "Legion control, patrolling Raventree region", crew: "Prisoners or dead" },
        bones: { status: "Critical—Stabbed", location: "Aegis Command detention", timeToExecution: "Hours" },
        creek: { status: "Evading", location: "Aegis Command—unknown sector", resources: "Low" },
        ryan: { status: "Unknown", location: "Forest below Vigilance crash site", lastSeen: "Day 20, 16:30" },
        speaker_l_real: { status: "Unknown", location: "Unknown", note: "Must be found before Legion realizes deception" },
        speaker_l_decoy: { status: "Performing", location: "Aegis Command interrogation", note: "Buying time successfully" },
        party: { status: "Trapped", location: "Raventree Manor—en route to Summoning Room", constraint: "Cannot leave until ritual complete" }
    },

    npcs: {
        allies: ['captain_ryan', 'bones', 'creek', 'toad_lee', 'speaker_l_decoy'],
        enemies: ['marcus_ironhand', 'legion_commander_vex', 'aegis_command_garrison'],
        neutral: ['hjumpik_legion_contact', 'self_reflection_oracle'],
        unknown: ['real_speaker_l']
    },

    locations: {
        primary: 'vigilance_airship',
        critical: 'aegis_command',
        current: 'raventree_manor',
        related: ['forest_crash_site', 'rogueport']
    },

    relatedQuests: ['liberated_toads_integration', 'hjumpik_legion_pact', 'artifacts_of_balance', 'rogueport_retrieval', 'retrieve_the_staff']
},

'retrieve_the_staff': {
    id: 'retrieve_the_staff',
    title: "The Brandished Staff",
    subtitle: "One Arm, One Chance",
    type: QUEST_TYPES.MAIN,
    category: 'Main Story',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.CRITICAL, 
    arcId: 'vigilance_saga',
    objective: "Stabilize the Staff of X.O. before its seal fails completely, while Dan adapts to fighting with one arm.",
    assignees: ['dan', 'toad_lee'],
    primaryAssignee: 'dan',
    difficulty: {
        overall: DIFFICULTY.HARD,
        magic: DIFFICULTY.DEADLY,
        knowledge: DIFFICULTY.HARD,
        personal: DIFFICULTY.EXTREME
    },
    tags: ['artifact', 'curse', 'combat-adaptation', 'personal-growth', 'ticking-clock'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 15 },
        updated: { year: 1040, monthIndex: 6, day: 21 },
        deadline: { year: 1040, monthIndex: 6, day: 28 }
    },

        description: "The Staff is with Dan (or the entity posing as Dan). The seal is degrading. However, the party is trapped in the Fracture. Reaching Forgemaster Grimm is currently impossible. The objective has shifted: Keep the Staff stable while surviving the alien physics of the Fracture.",
    loreEntries: ['xo_the_betrayer', 'amputee_combat_techniques', 'forgemaster_grimm', 'staff_seal_mechanics'],

    consequences: {
        success: "The Staff is cleansed or permanently contained. Dan masters his new fighting style. The threat is ended.",
        failure: "The seal fails. The Staff detonates or releases its bound entity. Casualties measured in dozens. Dan's sacrifice becomes meaningless.",
        partial: "The Staff is contained but not cleansed—a ticking bomb that must be carefully managed indefinitely. Dan adapts but carries the trauma."
    },

    rewards: {
        guaranteed: [
            { type: 'item', name: "Staff of the Shattered Veil", description: "Currently unstable. Potential: immense. Risk: catastrophic." },
            { type: 'ability', name: "Southpaw Throw", description: "Dan's adapted throwing technique—high accuracy with off-hand" },
            { type: 'trait', name: "Phantom Grip", description: "Dan occasionally 'feels' the missing arm. Sometimes this helps." }
        ],
        conditional: [
            { condition: "Reach Forgemaster Grimm before seal failure", reward: { type: 'item', name: "Staff of the Shattered Veil (Cleansed)", description: "Powerful artifact, safely contained" }},
            { condition: "Dan achieves a significant combat victory one-armed", reward: { type: 'reputation', faction: 'liberated_toads', amount: 300, description: "The Unbroken" }},
            { condition: "The Staff is used deliberately despite the risk", reward: { type: 'power', name: "Desperate Channeling", description: "Massive magical effect, seal integrity drops significantly" }}
        ],
        xp: 4000
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "Assess the Seal",
            description: "Initial examination revealed the seal's degradation. Timeline established: weeks, not months.",
            completedDate: { year: 1040, monthIndex: 6, day: 15 }
        },
        {
            id: 'm2',
            status: 'completed',
            title: "The Catastrophe",
            description: "The Staff's partial activation during a crisis cost Dan his arm and killed thirteen Toads. The seal cracked further. The countdown accelerated.",
            completedDate: { year: 1040, monthIndex: 6, day: 20 },
            outcomes: [
                "Dan's arm lost",
                "13 Toads killed",
                "Seal integrity: critical",
                "Timeline revised: days"
            ]
        },
        {
            id: 'm3',
            status: 'completed',
            title: "Proof of Concept",
            description: "Dan fought the Arcane Wraith using throwing axes and javelins with his remaining arm. He was effective. The adaptation is working.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 },
            outcomes: [
                "Combat viability confirmed",
                "Throwing technique developing",
                "Morale improved",
                "Physical therapy ongoing"
            ]
        },
        {
            id: 'm4',
            status: 'failed',
            title: "The Race",
            description: "Find Forgemaster Grimm before the seal fails. Continue combat training. Manage the Staff's instability.",
            goals: [
                { text: "Survive the Raventree ritual without triggering the Staff", status: 'active', priority: 'critical' },
                { text: "Locate Forgemaster Grimm (last known: Koopa territories)", status: 'pending', priority: 'critical' },
                { text: "Continue one-armed combat training", status: 'active', priority: 'high' },
                { text: "Monitor seal integrity daily", status: 'active', priority: 'high' }
            ],
            notes: "Toad Lee estimates seven days to critical failure. The Raventree ritual involves significant magical energy. Keep Dan away from the innermost circle."
        },
            {
                id: 'm5',
                status: 'failed', // The specific goal to find Grimm quickly has failed due to entrapment
                title: "The Detour",
                description: "The path to Forgemaster Grimm is cut off. The party is trapped in other dimensions. The clock is still ticking (approx 6 days remaining), but the solution is now out of reach.",
                goals: [
                    { text: "Escape Raventree Fracture to resume travel", status: 'active', priority: 'critical' },
                    { text: "Prevent the Staff from reacting to Shadow/Fey magic", status: 'active', priority: 'critical' }
                ]
            }        
    ],

    staffStatus: {
        sealIntegrity: "27% and falling",
        estimatedFailure: { year: 1040, monthIndex: 6, day: 28 },
        currentLocation: "Dan's possession",
        riskFactors: ["Proximity to major magic", "Physical damage", "Emotional extremity of wielder"],
        symptoms: ["Visible cracks in runes", "Occasional wrongness pulses", "Shadows behave oddly nearby"]
    },

    danStatus: {
        physicalCondition: "Adapting—one arm functional, phantom limb sensations",
        combatReadiness: "Proven against Arcane Wraith",
        mentalState: "Determined but grieving",
        training: "Throwing weapons, single-arm grappling, shield work"
    },

    npcs: {
        allies: ['toad_lee', 'party_members'],
        enemies: [],
        neutral: ['forgemaster_grimm']
    },

    locations: {
        primary: 'party_location',
        target: 'forgemaster_grimm_workshop',
        related: ['koopa_territories', 'raventree_manor']
    },

    relatedQuests: ['vigilance_fallen', 'artifacts_of_balance', 'main_quest_raventree']
},

};
