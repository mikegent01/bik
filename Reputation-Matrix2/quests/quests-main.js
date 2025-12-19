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
                { text: "Delay Order 120 execution (Humpik's Legion contact?)", status: 'pending', priority: 'critical' }
            ],
            notes: "The party is trapped in Raventree Manor. Humpik has a Legion contact who might be leveraged. The Oracle might be used as a bargaining chip. Every option has a cost."
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
        neutral: ['humpik_legion_contact']
    },

    locations: {
        primary: 'aegis_command',
        related: ['vigilance_airship', 'raventree_manor', 'speaker_l_safehouse']
    },

    relatedQuests: ['vigilance_fallen', 'humpik_legion_pact', 'artifacts_of_balance']
},
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
    subtitle: "A Knife Behind a Handshake",
    type: QUEST_TYPES.FACTION,
    category: 'Personal - Humpik',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.CRITICAL,
    arcId: 'raventree_manor',
    objective: "Fulfill the deal with the Iron Legion: let the Oracle complete his ritual, then ensure the Legion takes custody of him. Or betray the deal and accept the consequences.",
    assignees: ['humpik'],
    primaryAssignee: 'humpik',
    difficulty: {
        overall: DIFFICULTY.DEADLY,
        social: DIFFICULTY.EXTREME,
        deception: DIFFICULTY.EXTREME,
        moral: DIFFICULTY.EXTREME
    },
    tags: ['secret', 'betrayal', 'politics', 'moral_choice', 'faction_defining'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 21 },
        updated: { year: 1040, monthIndex: 6, day: 21 }
    },

    description: "The Legion spy found Humpik in the Ruined Hall, away from the others. She was calm, professional, and terrifyingly well-informed.\n\nShe knew about the Mages' Guild's reckless approach to the manor. She knew about the Supernatural Sovereignty Act—the new law that makes organized supernatural entities illegal, effectively declaring war on vampires, werewolves, and anything else the Empire finds inconvenient. She knew that the Oracle, whatever he is, represents exactly the kind of 'uncontrolled magical threat' the Empire wants eliminated.\n\nHer offer was simple: Let the Oracle finish his ritual. The Legion understands the manor needs to be stabilized—they don't want a dimensional collapse on Imperial soil any more than anyone else. But when the ritual ends and the danger passes, the Oracle becomes Legion property. Humpik ensures the handoff goes smoothly.\n\nIn exchange? The Legion's goodwill. Tools for the job. And perhaps—she didn't promise, but she implied—leverage to negotiate for Toad prisoners currently facing Order 120.\n\nHumpik accepted. He took the thieves' tools. He warned her not to betray him.\n\nNow he walks beside his companions toward the Summoning Room, carrying a secret that could save some lives by destroying others. Bowser already suspects something. The Oracle trusts them. And the Mages' Guild representative—Pernus Annmatar—is watching everyone with undisguised contempt.\n\nThe ritual will end soon. Then Humpik chooses.",

    loreEntries: ['supernatural_sovereignty_act', 'iron_mandate', 'legion_black_ops', 'oracle_nature'],

    consequences: {
        success_betray_oracle: "The Legion takes custody of the Oracle. Humpik gains significant Legion favor, potentially including leverage to negotiate for Bones, Creek, and other prisoners. The Toads lose a powerful magical ally. The Oracle's fate is imprisonment, experimentation, or execution.",
        success_protect_oracle: "Humpik betrays the Legion deal. The Oracle escapes or allies with the party. The Legion responds with hostility—Humpik becomes a target, and any negotiating leverage for the Toad prisoners evaporates.",
        partial: "The handoff is botched. The Oracle escapes, but so does Legion awareness that Humpik was supposed to deliver. Both sides distrust him.",
        failure: "The ritual fails. The Oracle is destroyed or the timelines collapse. The Legion deal becomes irrelevant amid the catastrophe."
    },

    rewards: {
        guaranteed: [
            { type: 'item', name: "Legion Thieves' Tools", description: "High-quality lockpicks, wire cutters, and a small vial of universal solvent. Currently in Humpik's possession." }
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
            description: "The Legion spy approached Humpik privately in the Ruined Hall. She explained the political situation, the Supernatural Sovereignty Act, and offered the deal. Humpik accepted the tools and the mission.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 }
        },
        {
            id: 'm2',
            status: 'active',
            title: "The Ritual",
            description: "The Oracle is leading the party to the Summoning Room for the final ritual. Humpik must help ensure it succeeds—the deal requires the manor to be stabilized first.",
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
            status: 'locked',
            title: "The Arrest",
            description: "The moment the ritual ends, the Legion strikes. Humpik's choice becomes action.",
            unlockCondition: "Ritual completion",
            choices: [
                {
                    id: 'final_choice',
                    title: "The Moment of Truth",
                    options: [
                        { id: 'deliver', name: "Honor the Deal", description: "Signal the Legion. Ensure the Oracle is taken. Collect the favor." },
                        { id: 'betray_legion', name: "Betray the Legion", description: "Warn the Oracle. Fight the Legion. Burn the bridge." },
                        { id: 'chaos', name: "Create Chaos", description: "Trigger a three-way fight between Legion, Mages, and Oracle. Escape in the confusion." },
                        { id: 'negotiate', name: "Renegotiate", description: "Use the moment to demand the prisoners' release BEFORE handing over the Oracle." }
                    ]
                }
            ]
        }
    ],

    secretStatus: {
        knownTo: ['humpik', 'legion_spy'],
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
    difficulty: { 
        overall: DIFFICULTY.DEADLY, 
        magic: DIFFICULTY.HARD, 
        control: DIFFICULTY.CRITICAL,
        social: DIFFICULTY.MODERATE
    },
    tags: ['survival', 'law', 'magic', 'redemption', 'ritual', 'ice-magic', 'wraith'],
    dates: { 
        added: { year: 1040, monthIndex: 6, day: 20 }, 
        updated: { year: 1040, monthIndex: 6, day: 21 },
        deadline: { year: 1040, monthIndex: 6, day: 25 }
    },
    
    description: "Archie has successfully hunted the Arcane Wraith, proving his versatility by utilizing Ice magic instead of his forbidden Fireball. Despite a rocky start (melting icicles), he landed a decisive freeze that allowed the Oracle to banish the entity. He has collected valuable ectoplasm and is currently in good standing with his provisional Guild license, despite the heckling of Senior Mage Pernus Annmatar. Now, he must assist the Oracle in the final separation ritual in the Summoning Room without losing control or succumbing to the manor's chaos.",

    loreEntries: ['autumnwood_accords', 'cryomancy_basics', 'guild_membership_protocols', 'ectoplasm_harvesting', 'raventree_manor_history', 'temporal_magic'],

    consequences: {
        success: "Archie solidifies his status as a legitimate mage, earning a permanent Guild license and proving his discipline.",
        failure: "Archie loses control during the ritual, causing a magical catastrophe and immediate revocation of his license and freedom.",
        partial: "The ritual succeeds, but Archie is arrested immediately after by the waiting Legion or Guild enforcers."
    },

    rewards: {
        guaranteed: [
            { type: 'item', name: "Wraith Ectoplasm", description: "Potent magical reagent harvested from the banished entity" },
            { type: 'item', name: "Provisional Guild Card", description: "Currently Active - Validated by combat performance" },
            { type: 'reputation', faction: 'mages_guild', amount: 150, description: "Demonstrated ice magic competency" }
        ],
        conditional: [
            { condition: "Finish the ritual without Fireball", reward: { type: 'feat', name: "Archie's Patience", description: "Bonus to ice magic control and mental fortitude checks" }},
            { condition: "Humiliate Pernus Annmatar", reward: { type: 'reputation', faction: 'cosmic_jesters', amount: 300, description: "Made a mockery of the establishment" }},
            { condition: "Perfect ritual execution", reward: { type: 'item', name: "Full Guild License", description: "Permanent Mages' Guild membership" }},
            { condition: "Assist Oracle successfully", reward: { type: 'ally', name: "The Oracle's Favor", description: "Cryptic assistance in future temporal matters" }}
        ],
        xp: 6500,
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
            description: "Defeated the Arcane Wraith using Ice magic. Collected the remains. Proved he is not a 'one-trick pony' to the watching Mages.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 },
            outcomes: [
                "Used Ice Beam successfully",
                "Harvested Ectoplasm",
                "Resisted baiting by Pernus Annmatar",
                "Demonstrated magical versatility",
                "Aided the Oracle in banishment"
            ]
        },
        {
            id: 'm4',
            status: 'active',
            title: "The Summoning Room",
            description: "Assist the Oracle in the final separation ritual. The energies required are vast, and the 'Audience' is watching.",
            goals: [
                { text: "Channel energy for the Oracle", status: 'active', priority: 'critical' },
                { text: "Maintain magical discipline (No Fire)", status: 'active', priority: 'critical' },
                { text: "Ensure the timeline separates cleanly", status: 'pending', priority: 'high' },
                { text: "Avoid provocations from Pernus Annmatar", status: 'active', priority: 'medium' },
                { text: "Protect the ritual from Iron Legion interference", status: 'pending', priority: 'high' }
            ],
            choices: [
                {
                    id: 'ritual_approach',
                    title: "Magical Contribution Method",
                    description: "How will Archie channel his power during the separation ritual?",
                    options: [
                        {
                            id: 'ice_anchor',
                            name: "Ice Anchor",
                            description: "Use cryomancy to stabilize the temporal energies. Safe and Guild-approved, but requires precise control.",
                            requirements: ["High Arcana check", "No fire magic"],
                            consequences: { 
                                success: "Perfect execution, full Guild license granted", 
                                failure: "Ritual destabilizes, partial success only" 
                            }
                        },
                        {
                            id: 'third_eye_focus',
                            name: "Third Eye Amplification",
                            description: "Channel the unique power of the Third Eye to boost the ritual. Risky, unpredictable, but potentially legendary.",
                            requirements: ["Embrace the Third Eye's nature", "Accept unknown consequences"],
                            consequences: { 
                                success: "Ritual supercharged, Oracle's gratitude, mysterious new power", 
                                failure: "Third Eye attracts unwanted attention, dimensional breach" 
                            }
                        },
                        {
                            id: 'controlled_burn',
                            name: "Controlled Fireball (Forbidden)",
                            description: "Use the power that works best. Break the Guild's trust but guarantee success.",
                            requirements: ["Abandon Guild approval", "Accept outlaw status"],
                            consequences: { 
                                success: "Ritual succeeds perfectly, immediate Guild excommunication and arrest warrant", 
                                failure: "Catastrophic explosion, everyone dies" 
                            }
                        }
                    ]
                },
                {
                    id: 'pernus_response',
                    title: "Dealing with the Heckler",
                    description: "Senior Mage Pernus Annmatar continues to provoke. How does Archie respond?",
                    options: [
                        {
                            id: 'ignore',
                            name: "Professional Silence",
                            description: "Ignore the provocations completely. Focus on the ritual.",
                            consequences: { success: "Guild approves of maturity", failure: "Pernus escalates interference" }
                        },
                        {
                            id: 'verbal_spar',
                            name: "Witty Retort",
                            description: "Match wits with the pompous mage. Show intelligence, not fire.",
                            requirements: ["High Charisma/Intelligence check"],
                            consequences: { success: "Pernus humiliated, crowd loves it", failure: "Lose focus, ritual suffers" }
                        },
                        {
                            id: 'ice_his_feet',
                            name: "Freeze His Feet to the Floor",
                            description: "Non-lethal, humiliating, and technically Guild-legal.",
                            requirements: ["Subtle spellcasting"],
                            consequences: { success: "Pernus silenced, comedic gold", failure: "Assault charges filed" }
                        }
                    ]
                }
            ]
        }
    ],

    npcs: { 
        allies: ['self_reflection_oracle', 'bowser', 'dan'],
        enemies: ['pernus_annmatar', 'iron_legion_spy', 'marcus_ironhand'], 
        keyNpcs: ['self_reflection_oracle', 'senior_magus', 'pernus_annmatar'],
        neutral: ['mages_guild_observers']
    },

    locations: {
        primary: 'raventree_manor_summoning_room',
        related: ['raventree_manor_ruined_hall', 'raventree_manor_solarium', 'raventree_manor_dance_hall']
    },

    relatedQuests: ['raventree_manor_mysteries', 'vigilance_fallen', 'the_oracle_paradox']
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
    title: "The Impostor Among Us",
    subtitle: "A Question That Won't Stay Buried",
    type: QUEST_TYPES.MYSTERY,
    category: 'Personal',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.CRITICAL,
    arcId: 'raventree_manor',
    objective: "Determine whether Dan is who he claims to be before the Summoning Room ritual seals your fate with whoever—or whatever—stands beside you.",
    assignees: ['party'],
    primaryAssignee: 'party',
    difficulty: {
        overall: DIFFICULTY.DEADLY,
        combat: DIFFICULTY.MEDIUM,
        puzzle: DIFFICULTY.HARD,
        social: DIFFICULTY.EXTREME
    },
    tags: ['mystery', 'impersonation', 'paranoia', 'infiltration', 'mirrors', 'ritual', 'time_sensitive'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 14 },
        updated: { year: 1040, monthIndex: 6, day: 21 }
    },

    description: "The warning came at the worst possible moment.\n\nDay 14. The Restaurant Raid. Iron Legion soldiers kicking in doors, crossbows clicking in the dining hall, the 'ketchup man' story spilling across the floor alongside actual blood. Dan went down hard—critical injuries, emergency triage, no time to think. And in that chaos, Lario grabbed someone by the sleeve and hissed the words that should have stopped everything: *That isn't Dan.*\n\nNot 'Dan is acting strange.' Not 'Dan seems off.' Lario was certain. Certain enough to risk saying it while the Legion swept room-by-room, while the party was dragging wounded through kitchen exits, while survival was measured in seconds.\n\nBut survival was measured in seconds. There wasn't time for suspicion. There wasn't room for paranoia. The party plunged into lava-lit sewers seeking a cure for Dan's wounds, walked into a Legion trap, fought a Behir in the dark. By the time anyone could breathe again, the warning had faded into the noise of a week that never stopped screaming.\n\nRaventree Manor made it easier to forget. Mirrors that lie. People pulled into reflections. Doppelgangers and temporal echoes and things wearing faces that don't belong to them. Dan kept moving through it all—voting on policy, fighting alongside the group, bleeding when he was hit, saying the right things at the right times. If something was wrong, wouldn't it have slipped by now?\n\nOr is that exactly what it would want you to think?\n\nThe Oracle is leading everyone to the Summoning Room. The ritual requires participants to stand in a circle, bound by magic that reacts to truth and falseness. The Oracle keeps talking about 'true selves' and 'proper placement.' The Legion and the Mages' Guild are watching from the shadows, waiting for the moment everything goes wrong.\n\nIf Dan is Dan, the paranoia is a distraction at a critical moment.\n\nIf Dan isn't Dan, the ritual circle is about to include something that has been waiting for exactly this opportunity.\n\nYou're running out of hallway.",

    loreEntries: ['raventree_mirror_entities', 'doppelganger_taxonomy', 'ritual_circle_requirements', 'lario_background'],

    consequences: {
        success: "The party enters the ritual with certainty. If Dan is real, trust is restored. If Dan is false, the impostor is exposed before it can sabotage the circle.",
        partial: "The truth emerges mid-ritual, forcing an ugly choice while magic is already in motion. Survival is possible but costly.",
        failure: "The party carries unresolved doubt into the circle. If something is wrong with Dan, it has access to the ritual's power at the moment of maximum vulnerability."
    },

    rewards: {
        guaranteed: [
            { type: 'intel', name: "The Truth About Dan", description: "Certainty, one way or another" }
        ],
        conditional: [
            { condition: "Confirm Dan's identity without alerting observers (Legion/Mages)", reward: { type: 'trait', name: "Quiet Competence", description: "Bonus to handling internal crises under external pressure" }},
            { condition: "Expose an impostor before the ritual", reward: { type: 'xp', amount: 3000, description: "Catastrophe Averted" }},
            { condition: "Dan is real and you apologize for the suspicion", reward: { type: 'loyalty', name: "Dan's Trust", description: "He understands. The apology matters." }},
            { condition: "Dan is false and you destroy the impostor", reward: { type: 'item', name: "Mirror Shard (Warm)", description: "A fragment of whatever was pretending to be your friend" }}
        ],
        xp: 4000
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "The Restaurant Warning",
            description: "Day 14. Amid the chaos of the Legion raid and Dan's critical injuries, Lario claimed the Dan with them was a fake. The warning was heard but not investigated.",
            completedDate: { year: 1040, monthIndex: 6, day: 14 }
        },
        {
            id: 'm2',
            status: 'completed',
            title: "Buried Under Emergencies",
            description: "The sewer descent, the Behir trap, the Manor's horrors—every emergency pushed the question further down the priority list. Dan continued to act like Dan. No one tested the claim.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 }
        },
        {
            id: 'm3',
            status: 'active',
            title: "Before the Circle Closes",
            description: "The party approaches the Summoning Room. The Oracle's ritual requires trust in every participant. This is the last chance to verify before the magic seals everyone together.",
            goals: [
                { text: "Privately test Dan's knowledge (something only the real Dan would know)", status: 'active', priority: 'critical' },
                { text: "Observe Dan's behavior during the approach (does he avoid mirrors? hesitate at thresholds?)", status: 'active', priority: 'high' },
                { text: "Position Dan away from critical ritual points until verified", status: 'active', priority: 'high' },
                { text: "Keep the investigation hidden from Legion spies and Mages' Guild observers", status: 'active', priority: 'high' }
            ],
            notes: "You don't need a trial. You need certainty, obtained quietly, in the next few minutes."
        }
    ],

    clues: [
        { id: 'c1', status: 'known', text: "Lario chose the most dangerous possible moment to deliver the warning—suggesting urgency and conviction, not idle gossip.", source: 'lario_toad' },
        { id: 'c2', status: 'unverified', text: "Lario claimed Dan's mannerisms were 'off' even before Raventree—consistent small differences, not a single slip.", source: 'lario_toad' },
        { id: 'c3', status: 'unverified', text: "The Manor has produced mirror duplicates, temporal echoes, and entities wearing stolen forms. A replacement is plausible.", source: 'manor_events' },
        { id: 'c4', status: 'unverified', text: "The Oracle emphasizes 'true self' and 'proper placement.' The ritual may react badly to falseness in the circle.", source: 'oracle_statements' },
        { id: 'c5', status: 'unverified', text: "Dan fought effectively against the Arcane Wraith using one arm. Either he's adapted remarkably well, or something is maintaining the performance.", source: 'wraith_battle' },
        { id: 'c6', status: 'unknown', text: "What does Lario know that made him so certain? Has anyone asked him directly?", source: 'unasked_question' }
    ],

    testMethods: [
        { method: "Ask about a shared memory only Dan would have", risk: "Low—but a good impostor might have absorbed memories" },
        { method: "Observe reaction to a mirror", risk: "Medium—might alert the subject or observers" },
        { method: "Have the Oracle examine him", risk: "High—exposes the suspicion to everyone present" },
        { method: "Physical test (wound, blood)", risk: "Variable—some impostors bleed normally, others don't" },
        { method: "Trust and watch", risk: "Highest—but also might be the only option left" }
    ],

    npcs: {
        allies: ['lario'],
        neutral: ['dan'],
        observers: ['pernus_annmatar', 'iron_legion_spy', 'self_reflection_oracle']
    },

    locations: {
        primary: 'raventree_manor',
        current: 'final_corridor_to_summoning_room',
        related: ['restaurant_ruins', 'lava_sewers', 'summoning_room']
    },

    relatedQuests: ['artifacts_of_balance', 'main_quest_raventree', 'rescue_green_t']
},
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
                { text: "Use Humpik's Legion contact to delay Order 120", status: 'pending', priority: 'critical' },
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
                            name: "The Humpik Protocol",
                            description: "Trade the Oracle to the Legion in exchange for the prisoners. Humpik's deal becomes the party's salvation—at a cost.",
                            requirements: ["Humpik completes his deal", "Oracle delivered to Legion custody", "Party accepts the betrayal"],
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
        neutral: ['humpik_legion_contact', 'self_reflection_oracle'],
        unknown: ['real_speaker_l']
    },

    locations: {
        primary: 'vigilance_airship',
        critical: 'aegis_command',
        current: 'raventree_manor',
        related: ['forest_crash_site', 'rogueport']
    },

    relatedQuests: ['liberated_toads_integration', 'humpik_legion_pact', 'artifacts_of_balance', 'rogueport_retrieval', 'retrieve_the_staff']
},

'retrieve_the_staff': {
    id: 'retrieve_the_staff',
    title: "The Brandished Staff",
    subtitle: "One Arm, One Chance",
    type: QUEST_TYPES.MAIN,
    category: 'Main Story',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.HIGH,
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

    description: "The seal is failing. Everyone can see it now—the cracks spreading across the Staff of X.O.'s containment runes, the occasional pulse of wrongness that makes teeth ache and shadows twitch. The artifact that cost Dan his arm is slowly waking up, and when it does, the thirteen Toads who died in the initial catastrophe will seem like a mercy.\n\nBut Dan isn't waiting to die.\n\nDuring the battle with the Arcane Wraith, he fought. One arm, handaxes and javelins, throwing with precision that shouldn't have been possible for someone still learning to compensate for the loss. He proved—to himself, to the others, to whatever doubts had been growing—that he is still dangerous. Still useful. Still a warrior.\n\nThe adaptation is working. The question is whether it will matter.\n\nForgemaster Grimm remains the only known expert capable of properly containing or cleansing the Staff. But Grimm is somewhere in the Koopa territories, and the party is trapped in Raventree Manor watching the Iron Legion consolidate control of the skies. Travel is complicated. Time is short.\n\nToad Lee has been monitoring the seal's degradation. Her estimate: seven days before critical failure. Maybe less if the Staff is exposed to significant magical stress—like, for example, a major ritual in a haunted manor.",

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
            status: 'active',
            title: "The Race",
            description: "Find Forgemaster Grimm before the seal fails. Continue combat training. Manage the Staff's instability.",
            goals: [
                { text: "Survive the Raventree ritual without triggering the Staff", status: 'active', priority: 'critical' },
                { text: "Locate Forgemaster Grimm (last known: Koopa territories)", status: 'pending', priority: 'critical' },
                { text: "Continue one-armed combat training", status: 'active', priority: 'high' },
                { text: "Monitor seal integrity daily", status: 'active', priority: 'high' }
            ],
            notes: "Toad Lee estimates seven days to critical failure. The Raventree ritual involves significant magical energy. Keep Dan away from the innermost circle."
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

'artifacts_of_balance': {
    id: 'artifacts_of_balance',
    title: "The Artifacts of Balance",
    subtitle: "The Final Key",
    type: QUEST_TYPES.MAIN,
    category: 'Main Story',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.CRITICAL,
    arcId: 'raventree_manor',
    objective: "Perform the final ritual in the Summoning Room to sever the timeline anchors and stabilize the manor.",
    assignees: ['party', 'self_reflection_oracle'],
    primaryAssignee: 'party',
    difficulty: {
        overall: DIFFICULTY.DEADLY,
        combat: DIFFICULTY.HARD,
        puzzle: DIFFICULTY.DEADLY,
        magic: DIFFICULTY.EXTREME,
        social: DIFFICULTY.HARD
    },
    tags: ['supernatural', 'time', 'demons', 'ritual', 'boss-rush', 'faction-convergence'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 19 },
        updated: { year: 1040, monthIndex: 6, day: 21 }
    },

    description: "Three anchors bound the fractured timelines to Raventree Manor. Three threats had to fall before the Oracle could even attempt the separation.\n\nThe first anchor shattered when Archie's reckless brilliance created God Toad—a Star Fragment born of chaos, ascending through the greenhouse ceiling in a blinding spiral. The second anchor was spared: Humpik, in an act of calculated mercy, allowed the Mirror Terror to live within its containment. This was not kindness. This was leverage. The creature's survival means the curse is weakened, not broken—a deliberate gamble that leaves residual instability in the walls.\n\nThe third anchor died screaming.\n\nThe Arcane Wraith descended on the party in the lower levels with the force of a collapsing timeline. Bowser—who spent years hiding from anything that floated—punched it in the face. Dan, still adapting to his missing arm, hurled axes with desperate accuracy. Archie, for once, chose ice over fire, and the temperature drop gave the Oracle the opening he needed to banish the weakened entity. The ghost is gone. Archie scraped its ectoplasm into a jar.\n\nBut the fight had an audience.\n\nPernus Annmatar of the Mages' Guild watched from the doorway, offering commentary like a theater critic at a slaughter. He briefly possessed Bowser, was tripped for his trouble, and now nurses both a grudge and a bruised ego. The Iron Legion spies—the same ones who offered Humpik his devil's bargain—tried to steal the kill and failed. Both factions saw what the party is capable of. Both factions want the Oracle.\n\nNow everyone is walking toward the Summoning Room. The Oracle moves with the weariness of someone who has done this before. The party moves with the tension of people who know they are surrounded. The 'Audience' moves with the patience of predators waiting for the ritual to end.\n\nThe third key must be placed. Opposing signs must be aligned. Vast energy must be channeled. And somewhere in the process, someone is going to make their move.",

    loreEntries: ['raventree_curse_origin', 'timeline_bleeding', 'demon_taxonomy', 'pernus_annmatar', 'the_great_sealing'],

    consequences: {
        success: "The timelines separate cleanly. The Manor stabilizes into a ruin—haunted by memory, not malice. The Oracle survives to offer guidance or be claimed by whoever moves fastest.",
        partial_mercy: "With the Mirror Terror spared, the separation is incomplete. The Manor stabilizes, but dimensional bleeds will occur for decades. Something will eventually crawl through.",
        partial_betrayal: "The ritual succeeds, but Humpik honors his pact. The Oracle is handed to the Iron Legion in chains. The Toads lose a chronomancer; Humpik gains leverage for the prisoners at Aegis Command.",
        failure: "The ritual is interrupted. The timelines collapse inward. Everyone in the Summoning Room is either erased or trapped in a moment that repeats forever."
    },

    rewards: {
        guaranteed: [
            { type: 'item', name: "Wraith Ectoplasm", description: "Harvested by Archie. Potent reagent for binding or dispelling spirits." },
            { type: 'trait', name: "Anchor Breakers", description: "All party members gain +2 to saves vs. temporal and dimensional effects." },
            { type: 'reputation', faction: 'mages_guild', amount: -200, description: "Pernus will remember this." }
        ],
        conditional: [
            { 
                condition: "Complete the ritual without Legion interference", 
                reward: { type: 'artifact', name: "Shard of Stabilized Time", description: "A crystal containing a moment of perfect stillness. Can freeze a single action once per day." }
            },
            { 
                condition: "Humpik delivers the Oracle to the Legion", 
                reward: { type: 'favor', name: "Iron Legion High Command Favor", description: "Can be exchanged for prisoner release—including Bones and Creek." }
            },
            { 
                condition: "Defy the Legion and protect the Oracle", 
                reward: { type: 'ally', name: "The Oracle (Unbound)", description: "A chronomancer with knowledge of the Manor's secrets and the Dragon Conspiracy." }
            },
            { 
                condition: "Archie maintains ice discipline through the ritual", 
                reward: { type: 'reputation', faction: 'mages_guild', amount: 300, description: "Demonstrated Elemental Control—reduces bounty." }
            }
        ],
        xp: 10000,
        gold: { min: 0, max: 0, note: "This is not a quest for profit. This is a quest for survival." }
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "The Star Ascendant",
            description: "The Greenhouse Inferno was not a disaster—it was a catalyst. Archie's fireball did not merely destroy the structure; it ignited the latent Star Fragment within. God Toad was born in the flames, ascending through the shattered glass in a spiral of light. The first anchor snapped. The timeline shuddered.",
            completedDate: { year: 1040, monthIndex: 6, day: 17 },
            outcomes: [
                "First anchor destroyed",
                "God Toad created (location unknown)",
                "Greenhouse reduced to ash",
                "Green T received a mysterious key from the Oracle"
            ]
        },
        {
            id: 'm2',
            status: 'completed',
            title: "The Mirror Terror",
            description: "The Shard Stalker emerged from the shattered mirrors of the Solarium—a thing of reflected malice and stolen faces. Humpik faced it alone in the Mirror Dimension after being pulled through the glass. He fought his own doppelganger. He won. And then, instead of destroying the creature, he spared it.\n\nThe Legion spy who aided his escape approved. The Oracle noted the decision with something that might have been disappointment. The Terror is contained, not destroyed. The second anchor bends but does not break.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 },
            outcomes: [
                "Second anchor contained (not destroyed)",
                "Mirror Terror imprisoned in the Solarium",
                "Humpik received Legion thieves' tools",
                "Residual dimensional instability confirmed"
            ]
        },
        {
            id: 'm3',
            status: 'completed',
            title: "The Arcane Wraith",
            description: "It came howling through the lower levels—a knot of screaming magic and ancient grudge. The party was not ready. They fought anyway.\n\nBowser charged the ghost. Physically. With his fists. The absurdity of a koopa punching ectoplasm would be funny if it hadn't worked. Dan, still learning to compensate for his missing arm, proved his adaptation with thrown handaxes that somehow found their marks. Archie—for once—chose ice over fire, dropping the ambient temperature enough to slow the entity.\n\nPernus Annmatar watched from the doorway, offering critique. He briefly possessed Bowser. Bowser responded by tripping him. The mage's red underwear was observed by multiple witnesses.\n\nThe Legion spies tried to steal the kill with a crossbow shot. They missed. The Oracle stepped forward and banished the weakened wraith with a word that made everyone's ears ring.\n\nArchie collected the ectoplasm. Bowser collected his dignity. Dan collected another reason to hate magic.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 },
            outcomes: [
                "Third anchor destroyed",
                "Wraith banished by the Oracle",
                "Bowser overcame ghost phobia (partially)",
                "Dan proved one-armed combat viability",
                "Archie earned grudging Mages' Guild respect",
                "Pernus humiliated but not neutralized",
                "Legion kill-steal failed"
            ]
        },
        {
            id: 'm4',
            status: 'active',
            title: "The Summoning Room",
            description: "The corridor stretches ahead. The Oracle walks with purpose. The party walks with weapons ready. And somewhere behind them—or ahead of them, or in the walls—the 'Audience' waits.\n\nThe ritual requires the Third Key. It requires opposing signs aligned in the circle. It requires vast energy channeled through participants who must hold their positions while reality tries to tear itself apart. And it requires trust—in the Oracle, in each other, in the plan.\n\nTrust is in short supply.\n\nHumpik has a deal. The Legion has patience. The Mages have pride. Green T is still missing somewhere in the shifting halls. And Dan—Dan might not be Dan at all.",
            goals: [
                { text: "Escort the Oracle to the Summoning Room", status: 'completed', priority: 'critical' },
                { text: "Place the Third Key in the ritual circle", status: 'active', priority: 'critical' },
                { text: "Hold positions during the separation ritual", status: 'pending', priority: 'critical' },
                { text: "Prevent the 'Audience' from interrupting", status: 'active', priority: 'high' },
                { text: "Resolve the Dan situation before the circle closes", status: 'active', priority: 'high' },
                { text: "Locate Green T before the timelines seal", status: 'active', priority: 'high' }
            ],
            choices: [
                {
                    id: 'oracle_fate',
                    title: "The Oracle's Destiny",
                    description: "The ritual will end. The Oracle will be vulnerable. Humpik made a deal. The party doesn't know.",
                    options: [
                        {
                            id: 'honor_pact',
                            name: "The Humpik Protocol",
                            description: "Humpik fulfills his bargain. The Oracle is handed to the Iron Legion.",
                            requirements: ["Humpik must act before the party reacts"],
                            consequences: { 
                                success: "Legion favor secured. Oracle captured. Toad prisoners can be negotiated.", 
                                failure: "Humpik is exposed. Party trust shatters. Legion attacks." 
                            }
                        },
                        {
                            id: 'protect_oracle',
                            name: "Shield the Seer",
                            description: "The party defends the Oracle against all claimants.",
                            requirements: ["Combat readiness", "Unified front"],
                            consequences: { 
                                success: "Oracle joins the rebellion. Legion becomes openly hostile.", 
                                failure: "Oracle captured anyway. Party wounded." 
                            }
                        },
                        {
                            id: 'oracle_choice',
                            name: "Let the Oracle Decide",
                            description: "Step back. Let the chronomancer choose his own fate.",
                            requirements: ["Trust in the Oracle's judgment"],
                            consequences: { 
                                success: "Unknown. The Oracle has not revealed his preference.", 
                                failure: "Indecision leads to chaos." 
                            }
                        }
                    ]
                }
            ],
            notes: "The ritual chamber is ahead. Everyone who matters is converging. This is the fulcrum point of the Manor arc."
        }
    ],

    npcs: {
        allies: ['self_reflection_oracle', 'ghost_servants'],
        enemies: ['pernus_annmatar'],
        observers: ['iron_legion_spy', 'iron_legion_spy_contact'],
        uncertain: ['dan']
    },

    locations: {
        primary: 'raventree_manor',
        current: 'corridor_to_summoning_room',
        ritual: 'summoning_room',
        related: ['lower_levels', 'ruined_hall', 'solarium', 'greenhouse_ruins']
    },

    relatedQuests: ['main_quest_raventree', 'rescue_green_t', 'humpik_legion_pact', 'mystery_imposter_toad', 'vigilance_fallen']
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
    objective: "Complete the separation ritual, survive the political convergence in the Summoning Room, and escape Raventree Manor with your lives and your souls intact.",
    assignees: ['party'],
    primaryAssignee: 'party',
    difficulty: {
        overall: DIFFICULTY.DEADLY,
        survival: DIFFICULTY.HARD,
        sanity: DIFFICULTY.HARD,
        social: DIFFICULTY.EXTREME,
        combat: DIFFICULTY.HARD
    },
    tags: ['survival', 'horror', 'supernatural', 'politics', 'urgent', 'faction-war', 'ritual'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 15 },
        updated: { year: 1040, monthIndex: 6, day: 21 }
    },

    description: "It was supposed to be shelter.\n\nWhen the party followed Bowser and Waluigi into Raventree Manor, they expected dust, decay, and perhaps a few rats. What they found was a house that remembers too much—a place where timelines bleed into each other, where mirrors show what shouldn't be, and where the dead have opinions about the living.\n\nThe first night brought flaming books, a polite ghost, and a warning written in Markop's father's hand: *Don't clean the mirrors.* They cleaned the mirrors.\n\nSince then, the Manor has escalated. Rust monsters in the bedrooms. A balcony that tried to kill Remi. An Oracle who speaks in riddles and offers tea. A hedge maze that loops through abandoned versions of the house. And the Siege—Speaker L's Pond Patrol surrounding the building, demanding Archie's surrender while the walls manifested wraiths.\n\nArchie surrendered. Then a glass monster emerged from a mirror. Green T was pulled into a reflection. The party scattered through collapsing rooms and burning libraries, fighting creatures that shouldn't exist in a house that shouldn't stand.\n\nThe Oracle has been guiding them. Three anchors bound the curse. Three threats had to fall. The Star Fragment ascended. The Mirror Terror was spared. The Arcane Wraith was banished. Now, only the final ritual remains—a separation of timelines in the Summoning Room.\n\nBut the party is not alone.\n\nPernus Annmatar of the Mages' Guild haunts the hallways, treating the apocalypse like entertainment. Iron Legion spies watch from the shadows, waiting for the Oracle to become vulnerable. Humpik carries a secret deal. Green T is missing. And Dan—Dan might be wearing someone else's face.\n\nThe Summoning Room is ahead. The ritual will begin. And when it ends, someone is going to make their move.",

    loreEntries: ['raventree_manor_history', 'pernus_annmatar', 'the_great_sealing', 'legion_black_ops', 'timeline_bleeding', 'mirror_entities'],

    consequences: {
        success: "The ritual completes. The timelines separate. The Manor becomes ruins—haunted by history, not horror. The party escapes with new scars and hard-won knowledge. The Oracle's fate depends on choices yet unmade.",
        failure_ritual: "The ritual is interrupted. The timelines collapse. Everyone in the Summoning Room is erased from history or trapped in a moment that repeats forever. The Manor becomes a permanent wound in reality.",
        failure_political: "The ritual succeeds, but the aftermath becomes a bloodbath. Legion and Mages fight over the Oracle. The party is caught in the crossfire. Survivors are scattered and hunted.",
        partial_betrayal: "The ritual succeeds. Humpik fulfills his deal. The Oracle is taken by the Iron Legion. The Toads lose a powerful ally, but gain leverage to negotiate for Bones, Creek, and the prisoners at Aegis Command.",
        partial_loss: "The party escapes, but Green T is not found. When the timelines separate, he is on the wrong side of the cut. He is erased—not dead, but never-was. Only those who knew him remember he existed at all."
    },

    rewards: {
        guaranteed: [
            { type: 'trait', name: "Manor Survivors", description: "All party members gain +2 to saves vs. fear, supernatural effects, and temporal displacement." },
            { type: 'item', name: "Wraith Ectoplasm", description: "Harvested by Archie. Potent for spirit-binding or dispelling." },
            { type: 'knowledge', name: "The Bleeding Timeline", description: "Understanding of how temporal fractures form and stabilize." }
        ],
        conditional: [
            {
                condition: "Deliver the Oracle to the Legion (Humpik's deal)",
                reward: { type: 'favor', name: "Iron Legion High Command Favor", description: "Can be exchanged for prisoner release at Aegis Command—including Bones and Creek." },
                status: 'pending'
            },
            {
                condition: "Protect the Oracle from all claimants",
                reward: { type: 'ally', name: "The Oracle (Unbound)", description: "Chronomancer ally. Knows secrets of the Manor, the Dragon Conspiracy, and the Iron Legion's true goals." },
                status: 'pending'
            },
            {
                condition: "Archie maintains elemental discipline (ice over fire)",
                reward: { type: 'reputation', faction: 'mages_guild', amount: 500, description: "Demonstrated Control—reduces active warrants." },
                status: 'earned'
            },
            {
                condition: "Find Green T before the separation",
                reward: { type: 'ally', name: "Green T (Mirror-Touched)", description: "Gains permanent ability to sense dimensional rifts and detect shapeshifters." },
                status: 'pending'
            },
            {
                condition: "Resolve the Dan situation",
                reward: { type: 'trust', name: "Circle Integrity", description: "The ritual proceeds without internal sabotage. Party cohesion strengthened." },
                status: 'pending'
            }
        ],
        xp: 12000,
        gold: { min: 0, max: 0, note: "The Manor takes. It does not give." }
    },

    partyStatus: {
        bowser: {
            location: "Approaching Summoning Room",
            status: "Combat Ready / Wary",
            sanity: 7,
            notes: "Punched a ghost. Tripped a mage. Overcame his fear of the supernatural through violence. Distrusts the Legion presence. Suspects Humpik is hiding something. Will protect the group with his life."
        },
        humpik: {
            location: "Approaching Summoning Room",
            status: "Outwardly Calm / Internally Conflicted",
            sanity: 8,
            notes: "Carries a secret deal with the Iron Legion. Has Legion-issue thieves' tools. Believes he is making the pragmatic choice. Has not yet decided if he will follow through."
        },
        archie: {
            location: "Approaching Summoning Room",
            status: "Focused / Disciplined",
            sanity: 7,
            notes: "Successfully used ice magic against the Wraith. Collected ectoplasm. Has warrants from the Mages' Guild but is earning grudging respect through restraint. The Greenhouse Inferno still haunts him."
        },
        dan: {
            location: "Approaching Summoning Room",
            status: "Injured / Determined / Uncertain",
            sanity: 6,
            notes: "Lost his arm to the Staff catastrophe. Proved he can still fight with thrown weapons. Protective of the group. May or may not be the real Dan—Lario's warning from Day 14 remains unresolved."
        },
        markop: {
            location: "Approaching Summoning Room",
            status: "Giant / Fading",
            sanity: 5,
            notes: "Accepted the Oracle's blessing to grow colossal during the spider fight. The effect is wearing off but the experience has left him changed. Found a photo of his father in the Manor."
        },
        remi: {
            location: "Approaching Summoning Room",
            status: "Battered / Resilient",
            sanity: 6,
            notes: "Survived a balcony collapse. Her mechanical companion is damaged. Applied to the Deephold Smithing Guild during the chaos. Has a job from Waluigi waiting."
        },
        green_t: {
            location: "Unknown",
            status: "Missing / Panicked / Time-Critical",
            sanity: 2,
            notes: "Was pulled into a mirror dimension. Was extracted by Dan. Fled in terror. Is somewhere in the Manor. Must be found before the timelines separate or he will be erased."
        }
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
            description: "Flaming books. Rust monsters. A balcony that collapsed under Remi. The Manor tested the party's survival instincts and found them barely adequate. The Oracle made contact, offering cryptic guidance and unsettling hospitality.",
            completedDate: { year: 1040, monthIndex: 6, day: 16 }
        },
        {
            id: 'm3',
            status: 'completed',
            title: "The Siege",
            description: "Speaker L's Pond Patrol surrounded the Manor. Archie surrendered to buy time. A glass monster emerged from a mirror. Green T was pulled into a reflection. The party scattered through collapsing corridors while the walls manifested wraiths.",
            completedDate: { year: 1040, monthIndex: 6, day: 19 }
        },
        {
            id: 'm4',
            status: 'completed',
            title: "The Anchors",
            description: "Three threats bound the curse. The Star Fragment ascended through the burning greenhouse (God Toad born). The Mirror Terror was spared by Humpik (contained, not destroyed). The Arcane Wraith was banished by the Oracle after the party weakened it through teamwork. The path to the final ritual is clear.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 }
        },
        {
            id: 'm5',
            status: 'active',
            title: "The Convergence",
            description: "Everyone who matters is walking toward the Summoning Room. The Oracle leads. The party follows. The Mages watch. The Legion waits. And somewhere in the shifting halls, Green T is hiding from things only he can see.",
            goals: [
                { text: "Reach the Summoning Room", status: 'completed', priority: 'critical' },
                { text: "Protect the Oracle during the ritual", status: 'active', priority: 'critical' },
                { text: "Hold position in the circle during the separation", status: 'pending', priority: 'critical' },
                { text: "Locate Green T before the timelines seal", status: 'active', priority: 'high' },
                { text: "Prevent Pernus Annmatar from interfering", status: 'active', priority: 'medium' },
                { text: "Resolve the standoff with the Iron Legion", status: 'pending', priority: 'critical' },
                { text: "Address the Dan situation", status: 'active', priority: 'high' }
            ]
        }
    ],

    threats: {
        pernus_annmatar: {
            name: "Pernus Annmatar",
            faction: "Mages' Guild",
            status: "Present / Hostile",
            motivation: "Professional pride. He was humiliated (tripped by Bowser, underwear exposed). He wants to prove the Guild's superiority and potentially claim the Oracle's knowledge.",
            danger: "Can possess party members briefly. Will interfere with the ritual if he sees an advantage. Treats everything like a performance."
        },
        iron_legion_spies: {
            name: "Legion Shadow Team",
            faction: "Iron Legion",
            status: "Present / Watching",
            motivation: "The Supernatural Sovereignty Act. The Oracle is a 'supernatural threat' under new law. They have orders to take him into custody. They also have a deal with Humpik.",
            danger: "Will strike the moment the ritual ends. Well-armed, disciplined, patient. Have crossbows and binding chains."
        },
        mirror_residue: {
            name: "Dimensional Bleed",
            faction: "The Manor",
            status: "Ambient Threat",
            motivation: "None. The Mirror Terror was spared, not destroyed. Residual instability remains in the walls. Reflections may still move wrong.",
            danger: "Unpredictable. May manifest as minor visual disturbances or major spatial anomalies during the ritual."
        }
    },

    relatedQuests: ['artifacts_of_balance', 'rescue_green_t', 'humpik_legion_pact', 'mystery_imposter_toad', 'vigilance_fallen']
},
'rescue_green_t': {
    id: 'rescue_green_t',
    title: "Through the Looking Glass",
    subtitle: "Find Him Before He Fades",
    type: QUEST_TYPES.RESCUE,
    category: 'Main Story',
    status: QUEST_STATUS.ACTIVE,
    priority: QUEST_PRIORITY.HIGH,
    arcId: 'raventree_manor',
    objective: "Locate Green T in the shifting corridors of Raventree Manor and bring him to the Summoning Room before the timelines separate.",
    assignees: ['party'],
    primaryAssignee: 'dan',
    difficulty: {
        overall: DIFFICULTY.MODERATE,
        tracking: DIFFICULTY.HARD,
        social: DIFFICULTY.HARD,
        time: DIFFICULTY.CRITICAL
    },
    tags: ['rescue', 'dimensional', 'time-sensitive', 'chase', 'psychological'],
    dates: {
        added: { year: 1040, monthIndex: 6, day: 19 },
        updated: { year: 1040, monthIndex: 6, day: 21 },
        deadline: "Before the separation ritual completes"
    },

    description: "Green T saw something in the mirror that he cannot unsee.\n\nWhen the Shard Stalker dragged him through the glass on Day 19, he spent what felt like hours in a place where nothing was real and everything wore his face. Dan pulled him out. It should have been a rescue. Instead, Green T looked at Dan—looked *through* Dan—and ran.\n\nHe broke a lock to escape the Solarium. He has been moving through the Manor ever since, avoiding the party, avoiding the Oracle, avoiding anything that casts a reflection. The few glimpses caught of him suggest a toad operating on pure panic: checking corners for mirrors, muttering about 'the wrong faces,' refusing to look anyone in the eye.\n\nThe Oracle has warned that the separation ritual will seal the timelines. Anyone not in the 'present' when the cut happens will be left behind—not dead, but never-was. Green T's current location is unknown. The Manor's geography shifts. And time is running out.\n\nDan has taken point on this search. This is personal. He pulled Green T from the mirror. He feels responsible. But Green T ran *from* Dan specifically. That fact has not been discussed. Perhaps it should be.",

    loreEntries: ['mirror_entities', 'timeline_bleeding', 'dimensional_trauma'],

    consequences: {
        success: "Green T is found, calmed, and brought to the Summoning Room. He survives the separation. The experience has changed him—he gains the ability to sense dimensional rifts and detect shapeshifters.",
        failure: "Green T is not found in time. When the timelines separate, he is on the wrong side of the cut. He is erased from history. Only those who knew him will remember he existed. His absence becomes a permanent wound in the party's conscience.",
        partial: "Green T is found but cannot be calmed. He is dragged to the Summoning Room against his will. He survives but his sanity does not fully recover. He becomes a liability in future operations.",
        dark: "Green T is found—but he has already been replaced by something from the mirrors. The rescue brings the enemy into the ritual circle."
    },

    rewards: {
        guaranteed: [
            { type: 'knowledge', name: "Mirror Trauma Protocols", description: "Understanding of how to help dimensional displacement victims." }
        ],
        conditional: [
            {
                condition: "Rescue Green T successfully",
                reward: { type: 'ally', name: "Green T (Mirror-Touched)", description: "Gains permanent ability to sense dimensional rifts and detect shapeshifters. His perspective has been fundamentally altered." }
            },
            {
                condition: "Dan makes the rescue personally",
                reward: { type: 'bond', name: "Reforged Trust", description: "Dan and Green T share a unique connection. Green T will follow Dan's lead in future crises." }
            },
            {
                condition: "Discover why Green T ran from Dan",
                reward: { type: 'clue', name: "The Wrong Face", description: "Green T saw something in Dan's reflection that wasn't Dan. This information connects to the Impostor Toad mystery." }
            }
        ],
        xp: 3000
    },

    greenTStatus: {
        currentCondition: "Panicked Flight / Reality Dissociation",
        physicalState: "Exhausted, dehydrated, minor injuries from running through debris",
        mentalState: "Critical. Cannot distinguish between 'real' and 'reflection.' Sees threats in every mirror, window, and polished surface.",
        lastKnownLocation: "Broke a lock to escape the Solarium (Day 21, early morning)",
        lastKnownAction: "Running toward the east wing—away from the main corridors",
        possibleLocations: [
            "Upper floors (avoiding the lower levels where the Wraith was)",
            "Servants' quarters (few reflective surfaces)",
            "The abandoned kitchen (boarded windows, no mirrors)",
            "The hedge maze (dangerous, but no glass)"
        ],
        sanity: 2,
        trust: "Will not approach anyone who casts a reflection he doesn't recognize. May attack if cornered.",
        notes: "He ran specifically from Dan. He may have seen something in Dan's reflection that frightened him more than the Mirror Terror itself."
    },

    milestones: [
        {
            id: 'm1',
            status: 'completed',
            title: "The Abduction",
            description: "During the Siege of Raventree, the Shard Stalker manifested from a mirror and pulled Green T into the dimension between reflections. The party could only watch as he vanished into the glass.",
            completedDate: { year: 1040, monthIndex: 6, day: 19 }
        },
        {
            id: 'm2',
            status: 'completed',
            title: "The Extraction",
            description: "Dan reached into the mirror and pulled Green T back to reality. It should have been a moment of triumph. Instead, Green T looked at Dan with an expression of absolute terror and fled into the Manor's depths.",
            completedDate: { year: 1040, monthIndex: 6, day: 21 }
        },
        {
            id: 'm3',
            status: 'active',
            title: "The Hunt",
            description: "Green T is somewhere in the Manor. The ritual is approaching. The timelines will separate. Anyone not in the 'present' when the cut happens will be erased.",
            goals: [
                { text: "Search the upper floors", status: 'active', priority: 'high' },
                { text: "Search the servants' quarters", status: 'active', priority: 'high' },
                { text: "Check the abandoned kitchen", status: 'pending', priority: 'medium' },
                { text: "Send someone into the hedge maze", status: 'pending', priority: 'low', note: "Dangerous. Last resort." },
                { text: "Approach Green T without triggering a panic response", status: 'pending', priority: 'critical' },
                { text: "Understand why he ran from Dan", status: 'pending', priority: 'high' }
            ],
            notes: "The Manor's geography shifts. Green T may not be where he was five minutes ago. And the ritual is starting soon."
        }
    ],

    connections: {
        to_impostor_quest: "Green T ran from Dan specifically. If Lario's warning from Day 14 is correct—if the Dan with the party is not the real Dan—then Green T may have seen proof in the mirror dimension. He may be the only person who knows the truth.",
        to_ritual_quest: "If Green T is not found before the separation, he will be erased. If he is found but is actually a mirror replacement, bringing him into the ritual circle could be catastrophic.",
        to_dan: "Dan pulled Green T from the mirror. Dan is taking point on the search. Dan is either a hero trying to save a friend, or something wearing Dan's face trying to eliminate a witness."
    },

    relatedQuests: ['artifacts_of_balance', 'main_quest_raventree', 'mystery_imposter_toad']
},
};