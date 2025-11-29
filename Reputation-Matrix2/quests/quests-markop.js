
import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

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
