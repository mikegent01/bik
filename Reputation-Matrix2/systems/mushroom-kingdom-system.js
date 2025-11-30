// mushroom-kingdom-system.js
// Complete overhaul of the Mushroom Kingdom Civil War political system

import { LORE_DATA } from '../lore.js';
import { FACTION_COLORS } from '../factions/faction-colors.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from '../calendar-data.js';
import { HISTORICAL_TIMELINE } from '../timeline-data.js';
import { MAJOR_BATTLES } from '../battlefield.js';
import { getRealTimeMapStats } from './map-analysis.js'; // NEW IMPORT

// ============================================
// CIVIL WAR CONFIGURATION
// ============================================

const CIVIL_WAR_CONFIG = {
    name: "Mushroom Kingdom Civil War",
    startDate: { year: 1040, monthIndex: 6, day: 1 },
    status: "Active Conflict",
    phase: "Escalation",
    description: "The assassination of Princess Peach's legacy has fractured the kingdom into warring factions. The Regency struggles to maintain legitimacy, Loyalists wage holy war against the usurper Fawful, Koopa remnants fight for survival under Kamek's cunning leadership, and criminal syndicates feast on the chaos.",
};

// ============================================
// FACTIONS DATA
// ============================================

const CIVIL_WAR_FACTIONS = {
    regency: {
        id: 'regency',
        name: 'Mushroom Regency',
        shortName: 'Regency',
        leader: 'chancellor_toadsworth',
        leaderName: 'Chancellor Toadsworth',
        leaderTitle: 'Lord Regent of the Mushroom Throne',
        color: FACTION_COLORS['mushroom_regency'] || '#4a90d9',
        icon: '🍄',
        ideology: 'Constitutional Monarchy',
        goal: 'Restore order and maintain the legitimate government until a new ruler can be crowned.',
        strengths: ['Institutional legitimacy', 'Treasury access', 'Diplomatic recognition'],
        weaknesses: ['Slow bureaucracy', 'Military weakness', 'Public distrust'],
        baseInfluence: 20, // Lowered base to allow dynamic stats to take over
        territories: ['Toad Town (Contested)', 'Mushroom Plains', 'Petalburg'],
        military: {
            strength: 45,
            morale: 60,
            units: ['Toadstool Guard', 'Royal Pikemen', 'Mushroom Militia']
        },
        relations: {
            loyalists: -30,
            warlords: -50,
            criminals: -40,
            fawful: -80,
            liberated_toads: 20
        }
    },
    loyalists: {
        id: 'loyalists',
        name: 'Peach Loyalists',
        shortName: 'Loyalists',
        leader: 'captain_toadette',
        leaderName: 'Captain Toadette',
        leaderTitle: 'Commander of the Crusade',
        color: FACTION_COLORS['peach_loyalists'] || '#ff69b4',
        icon: '👑',
        ideology: 'Monarchist Zealotry',
        goal: 'Destroy all who defiled the Princess\'s memory and purge the usurper from her castle.',
        strengths: ['Fanatical morale', 'Guerilla expertise', 'Popular support among veterans'],
        weaknesses: ['Extremism alienates moderates', 'Limited resources', 'No diplomatic recognition'],
        baseInfluence: 15,
        territories: ['Bramblehaven (Captured)', 'Southern Forests', 'Scattered Cells'],
        military: {
            strength: 35,
            morale: 95,
            units: ['Pink Crusaders', 'Veteran Militia', 'Mushroom Martyrs']
        },
        relations: {
            regency: -30,
            warlords: -90,
            criminals: -60,
            fawful: -100,
            liberated_toads: -10
        }
    },
    fawful: {
        id: 'fawful',
        name: "Fawful's Dominion",
        shortName: 'Fawful',
        leader: 'fawful',
        leaderName: 'Lord Fawful',
        leaderTitle: 'Supreme Overlord of FURY',
        color: FACTION_COLORS['fawfuls_furious_freaks'] || '#7cfc00',
        icon: '😈',
        ideology: 'Megalomaniacal Technarchy',
        goal: 'HAVE FURY! Conquer the kingdom with the brilliance of BEANS and MACHINES!',
        strengths: ['Technological superiority', 'Castle fortifications', 'Unpredictability'],
        weaknesses: ['Insanity', 'No local support', 'Besieged position'],
        baseInfluence: 12,
        territories: ["Peach's Castle (Occupied)", 'Castle Grounds', 'Underground Labs'],
        military: {
            strength: 55,
            morale: 70,
            units: ['Fawful Bots', 'Brainwashed Minions', 'Bean Constructs', 'Midbus']
        },
        relations: {
            regency: -80,
            loyalists: -100,
            warlords: -40,
            criminals: 10,
            liberated_toads: -70
        }
    },
    warlords: {
        id: 'warlords',
        name: 'Koopa Remnants',
        shortName: 'Remnants',
        leader: 'kamek',
        leaderName: 'Kamek',
        leaderTitle: 'Grand Magikoopa & Regent-in-Exile',
        color: FACTION_COLORS['koopa_troop'] || '#ffa500',
        icon: '🐢',
        ideology: 'Koopa Restoration',
        goal: 'Survive, rebuild, and await the return of King Bowser to reclaim the Koopa throne.',
        strengths: ['Experienced veterans', 'Magical support', 'Defensive terrain'],
        weaknesses: ['Scattered forces', 'No king', 'Hunted by all'],
        baseInfluence: 10,
        territories: ['Valley of Bowser (Core)', 'Scattered Outposts', 'Hidden Caves'],
        military: {
            strength: 40,
            morale: 55,
            units: ['Koopa Veterans', 'Magikoopa Circle', 'Hammer Bros Elite', 'Shy Guy Auxiliaries']
        },
        relations: {
            regency: -50,
            loyalists: -90,
            criminals: 20,
            fawful: -40,
            liberated_toads: -30
        }
    },
    criminals: {
        id: 'criminals',
        name: 'Criminal Underworld',
        shortName: 'Underworld',
        leader: 'skull_cap_murphy',
        leaderName: 'Skull-Cap Murphy',
        leaderTitle: 'Boss of Bosses',
        color: FACTION_COLORS['toad_gang'] || '#8b4513',
        icon: '💀',
        ideology: 'Organized Crime',
        goal: 'Profit from the chaos. Control the black markets. Become indispensable to all sides.',
        strengths: ['Information networks', 'Smuggling routes', 'Corruption'],
        weaknesses: ['No military strength', 'Hated by populace', 'Internal rivalries'],
        baseInfluence: 8,
        territories: ['Rogueport (Base)', 'Underground Networks', 'Smuggler Coves'],
        military: {
            strength: 20,
            morale: 40,
            units: ['Toad Gang Enforcers', 'Bandit Crews', 'Mercenary Contracts']
        },
        relations: {
            regency: -40,
            loyalists: -60,
            warlords: 20,
            fawful: 10,
            liberated_toads: -20
        }
    }
};

// ============================================
// STRATEGIC OPERATIONS (Plans)
// ============================================

const STRATEGIC_OPERATIONS = {
    regency: [
        {
            id: 'reg_fortify',
            name: 'Fortify Key Positions',
            type: 'defensive',
            duration: 25,
            cost: { gold: 5000, manpower: 500 },
            description: 'Reinforce walls and garrisons at Toad Town and Petalburg.',
            effects: { influence: +3, military_strength: +5, defense: +10 },
            risks: ['Drains treasury', 'Signals weakness'],
            status: 'available'
        },
        {
            id: 'reg_diplomacy',
            name: 'Diplomatic Summit',
            type: 'political',
            duration: 40,
            cost: { gold: 2000, influence: 5 },
            description: 'Invite neutral parties and foreign powers to recognize Regency legitimacy.',
            effects: { influence: +8, relations_liberated: +15 },
            risks: ['May fail spectacularly', 'Loyalists may attack summit'],
            status: 'available'
        },
        {
            id: 'reg_crackdown',
            name: 'Criminal Crackdown',
            type: 'military',
            duration: 30,
            cost: { gold: 3000, manpower: 300 },
            description: 'Deploy guards to root out criminal operations in major cities.',
            effects: { criminals_influence: -8, public_order: +10 },
            risks: ['Corruption may sabotage efforts', 'Criminals may retaliate'],
            status: 'active',
            startDate: { year: 1040, monthIndex: 6, day: 5 },
            progress: 60
        }
    ],
    loyalists: [
        {
            id: 'loy_siege',
            name: 'Siege Intensification',
            type: 'military',
            duration: 45,
            cost: { manpower: 800, supplies: 1000 },
            description: "Tighten the noose around Peach's Castle. Cut all supply lines to Fawful.",
            effects: { fawful_influence: -10, influence: +5 },
            risks: ['Heavy casualties', 'Fawful counterattack'],
            status: 'active',
            startDate: { year: 1040, monthIndex: 6, day: 12 },
            progress: 35
        },
        {
            id: 'loy_rally',
            name: 'Martyrs Day Rally',
            type: 'political',
            duration: 15,
            cost: { gold: 1000 },
            description: 'Hold a massive rally commemorating fallen heroes to recruit new crusaders.',
            effects: { influence: +6, morale: +15, recruits: +200 },
            risks: ['Regency may suppress', 'Exposes leadership'],
            status: 'available'
        },
        {
            id: 'loy_purge',
            name: 'Purge the Collaborators',
            type: 'covert',
            duration: 20,
            cost: { manpower: 100 },
            description: 'Identify and eliminate those who aided Fawful or the Koopa occupation.',
            effects: { fear: +20, regency_relations: -10 },
            risks: ['Creates martyrs', 'International condemnation'],
            status: 'completed',
            completedDate: { year: 1040, monthIndex: 6, day: 17 }
        }
    ],
    fawful: [
        {
            id: 'faw_fury',
            name: 'OPERATION: MAXIMUM FURY',
            type: 'military',
            duration: 20,
            cost: { beans: 500, robots: 50 },
            description: 'Unleash a wave of upgraded Fawful-bots against the besieging Loyalists!',
            effects: { loyalists_influence: -5, fear: +15 },
            risks: ['Resource drain', 'May provoke unified response'],
            status: 'active',
            startDate: { year: 1040, monthIndex: 6, day: 15 },
            progress: 45
        },
        {
            id: 'faw_beans',
            name: 'Project: DARK BEAN',
            type: 'research',
            duration: 60,
            cost: { beans: 2000, time: 'immense' },
            description: 'Develop a new strain of corrupted beans capable of mind control at range.',
            effects: { tech_level: +2, influence: +10, terror: +25 },
            risks: ['May backfire catastrophically', 'Attracts unwanted attention'],
            status: 'available'
        },
        {
            id: 'faw_alliance',
            name: 'Dragon Pact',
            type: 'diplomatic',
            duration: 30,
            cost: { gold: 10000, artifacts: 3 },
            description: 'Finalize the alliance with the dragon clans revealed at the Gala.',
            effects: { military_strength: +30, influence: +15 },
            risks: ['Dragons are unreliable', 'May demand terrible price'],
            status: 'active',
            startDate: { year: 1040, monthIndex: 6, day: 11 },
            progress: 70
        }
    ],
    warlords: [
        {
            id: 'war_rally',
            name: 'Rally the Remnants',
            type: 'military',
            duration: 28,
            cost: { supplies: 500 },
            description: 'Send messengers to gather scattered Koopa survivors into a cohesive force.',
            effects: { influence: +4, military_strength: +8, morale: +10 },
            risks: ['Messengers may be intercepted', 'Reveals positions'],
            status: 'completed',
            completedDate: { year: 1040, monthIndex: 6, day: 18 }
        },
        {
            id: 'war_scavenge',
            name: 'Battlefield Salvage',
            type: 'logistics',
            duration: 35,
            cost: { manpower: 200 },
            description: 'Scour old battlefields for abandoned war machines and supplies.',
            effects: { supplies: +800, military_strength: +5 },
            risks: ['May encounter hostiles', 'Cursed artifacts'],
            status: 'active',
            startDate: { year: 1040, monthIndex: 6, day: 10 },
            progress: 55
        },
        {
            id: 'war_bowser',
            name: 'Locate King Bowser',
            type: 'covert',
            duration: 90,
            cost: { magic: 'significant' },
            description: "Use Kamek's magic to divine the location of the missing King.",
            effects: { morale: +30, legitimacy: +50 },
            risks: ['May reveal nothing', 'Magic may be detected'],
            status: 'available'
        }
    ],
    criminals: [
        {
            id: 'crim_racket',
            name: 'Expand Protection Rackets',
            type: 'economic',
            duration: 20,
            cost: { enforcers: 50 },
            description: 'Force refugee camps and outlying villages to pay for "protection".',
            effects: { gold: +3000, influence: +5, hatred: +10 },
            risks: ['May trigger crackdown', 'Creates enemies'],
            status: 'active',
            startDate: { year: 1040, monthIndex: 6, day: 8 },
            progress: 80
        },
        {
            id: 'crim_smuggle',
            name: 'War Profiteering',
            type: 'economic',
            duration: 30,
            cost: { gold: 2000 },
            description: 'Sell weapons and supplies to all sides of the conflict.',
            effects: { gold: +8000, relations_all: +5 },
            risks: ['May be discovered', 'Creates paper trail'],
            status: 'available'
        },
        {
            id: 'crim_mole',
            name: 'Plant Informants',
            type: 'covert',
            duration: 45,
            cost: { gold: 5000 },
            description: 'Place moles in every major faction to gather intelligence.',
            effects: { intel: +100, influence: +8 },
            risks: ['Moles may be turned', 'Expensive to maintain'],
            status: 'available'
        }
    ]
};

// ============================================
// RECENT EVENTS (From Timeline)
// ============================================

const CIVIL_WAR_EVENTS = [
    {
        id: 'evt_fawful_seizure',
        date: { year: 1040, monthIndex: 6, day: 8 },
        title: "Fawful Seizes Peach's Castle",
        description: "In a shocking coup, the Beanish villain Fawful launched a surprise assault on a vulnerable Peach's Castle, establishing his 'Dominion' at the heart of the kingdom.",
        impact: { fawful: +15, regency: -10, loyalists: +5 },
        type: 'major'
    },
    {
        id: 'evt_toad_town_coup',
        date: { year: 1040, monthIndex: 6, day: 12 },
        title: "Toad Town Martial Law",
        description: "Captain Toadette declared martial law and seized control of Toad Town following the mayor's assassination, ousting Regency authority.",
        impact: { loyalists: +8, regency: -8 },
        type: 'major'
    },
    {
        id: 'evt_bramblehaven',
        date: { year: 1040, monthIndex: 6, day: 17 },
        title: "Fall of Bramblehaven",
        description: "Loyalist forces captured the Fawful stronghold of Bramblehaven in a brutal assault, executing prisoners and cementing their ruthless reputation.",
        impact: { loyalists: +10, fawful: -8 },
        type: 'battle'
    },
    {
        id: 'evt_kamek_return',
        date: { year: 1040, monthIndex: 6, day: 18 },
        title: "Kamek's Return",
        description: "Magical activity in the Valley of Bowser signals the return of Kamek, who has begun consolidating control over the scattered Koopa Troop remnants.",
        impact: { warlords: +12 },
        type: 'major'
    },
    {
        id: 'evt_dragon_alliance',
        date: { year: 1040, monthIndex: 6, day: 11 },
        title: "Fawful's Dragon Alliance",
        description: "At a victory gala, Fawful revealed he has forged an alliance with dragon clans, dramatically shifting the military balance.",
        impact: { fawful: +10 },
        type: 'diplomatic'
    },
    {
        id: 'evt_vigilance_capture',
        date: { year: 1040, monthIndex: 6, day: 20 },
        title: "Iron Legion Captures Vigilance",
        description: "The Iron Legion boards and captures the airship Vigilance, eliminating a key asset for the Liberated Toads and their allies.",
        impact: { regency: -3, criminals: +3 },
        type: 'military'
    }
];

// ============================================
// TERRITORY CONTROL MAP
// ============================================

export const TERRITORY_MAP = {
    regions: [
        {
            id: 'toad_town',
            name: 'Toad Town',
            type: 'capital',
            controller: 'loyalists',
            contestedBy: ['regency'],
            population: 50000,
            importance: 'critical',
            description: 'The traditional capital, now under Loyalist martial law.',
            icon: '🏰'
        },
        {
            id: 'peachs_castle',
            name: "Peach's Castle",
            type: 'fortress',
            controller: 'fawful',
            contestedBy: ['loyalists'],
            population: 500,
            importance: 'critical',
            description: 'The symbolic heart of the kingdom, occupied by Fawful.',
            icon: '🏯',
            siege: true
        },
        {
            id: 'mushroom_plains',
            name: 'Mushroom Plains',
            type: 'farmland',
            controller: 'regency',
            contestedBy: [],
            population: 25000,
            importance: 'high',
            description: 'Fertile agricultural heartland still loyal to the Regency.',
            icon: '🌾'
        },
        {
            id: 'valley_of_bowser',
            name: 'Valley of Bowser',
            type: 'wasteland',
            controller: 'warlords',
            contestedBy: [],
            population: 8000,
            importance: 'medium',
            description: 'Volcanic badlands serving as the Koopa Remnant stronghold.',
            icon: '🌋'
        },
        {
            id: 'rogueport',
            name: 'Rogueport',
            type: 'port',
            controller: 'criminals',
            contestedBy: [],
            population: 15000,
            importance: 'high',
            description: 'Lawless port city controlled by the criminal underworld.',
            icon: '⚓'
        },
        {
            id: 'bramblehaven',
            name: 'Bramblehaven',
            type: 'town',
            controller: 'loyalists',
            contestedBy: [],
            population: 3000,
            importance: 'medium',
            description: 'Recently captured Fawful outpost, now a Loyalist forward base.',
            icon: '🏘️',
            recentlyChanged: true
        },
        {
            id: 'petalburg',
            name: 'Petalburg',
            type: 'town',
            controller: 'regency',
            contestedBy: ['criminals'],
            population: 12000,
            importance: 'medium',
            description: 'Quiet town with growing criminal infiltration.',
            icon: '🌸'
        },
        {
            id: 'southern_forests',
            name: 'Southern Forests',
            type: 'wilderness',
            controller: 'loyalists',
            contestedBy: ['warlords'],
            population: 2000,
            importance: 'low',
            description: 'Dense forests hiding Loyalist guerilla camps.',
            icon: '🌲'
        }
    ]
};

// ============================================
// CALCULATION ENGINE
// ============================================

function getAbsoluteDay(date = CURRENT_GAME_DATE) {
    return (date.year - 1035) * 365 + date.monthIndex * 30 + date.day;
}

function getDaysSince(pastDate) {
    return getAbsoluteDay(CURRENT_GAME_DATE) - getAbsoluteDay(pastDate);
}

/**
 * Calculates current influence based on Events AND Data Files
 */
function calculateDynamicInfluence() {
    const influence = {};
    
    // 1. Start with Base Influence defined above
    Object.keys(CIVIL_WAR_FACTIONS).forEach(key => {
        influence[key] = CIVIL_WAR_FACTIONS[key].baseInfluence;
    });

    // 2. Add Influence from Real Map Data Files
    try {
        const stats = getRealTimeMapStats().global;
        Object.keys(influence).forEach(key => {
            if (stats[key]) {
                // Formula: 1 Influence per 8 Military Strength + 1 per 8 Economic Value
                // This makes the "pointsOfInterest" files actually matter!
                const dataBonus = Math.floor((stats[key].military / 8) + (stats[key].economic / 8));
                influence[key] += dataBonus;
            }
        });
    } catch (e) {
        console.warn("Could not calculate dynamic map stats:", e);
    }

    // 3. Apply Event Impacts (Historical momentum)
    CIVIL_WAR_EVENTS.forEach(event => {
        const eventDay = getAbsoluteDay(event.date);
        const currentDay = getAbsoluteDay();
        
        if (eventDay <= currentDay) {
            Object.entries(event.impact || {}).forEach(([faction, change]) => {
                if (influence[faction] !== undefined) {
                    influence[faction] += change;
                }
            });
        }
    });

    // 4. Apply Operation Progress
    Object.entries(STRATEGIC_OPERATIONS).forEach(([faction, ops]) => {
        ops.forEach(op => {
            if (op.status === 'completed') {
                if (op.effects?.influence) influence[faction] += op.effects.influence;
                Object.entries(op.effects || {}).forEach(([key, value]) => {
                    if (key.endsWith('_influence') && typeof value === 'number') {
                        const targetFaction = key.replace('_influence', '');
                        if (influence[targetFaction] !== undefined) {
                            influence[targetFaction] += value;
                        }
                    }
                });
            } else if (op.status === 'active' && op.progress) {
                const partialEffect = Math.floor((op.effects?.influence || 0) * (op.progress / 100));
                influence[faction] += partialEffect * 0.3;
            }
        });
    });

    // 5. Time-based drift
    const currentDay = getAbsoluteDay();
    const drift = Math.sin(currentDay * 0.15) * 2;
    influence.regency += drift;
    influence.loyalists -= drift * 0.5;

    // Normalize
    Object.keys(influence).forEach(key => {
        influence[key] = Math.max(5, Math.round(influence[key]));
    });

    return influence;
}

function calculateWarStatus() {
    const influence = calculateDynamicInfluence();
    const total = Object.values(influence).reduce((a, b) => a + b, 0);
    
    // Determine leading faction
    let leading = null;
    let leadingValue = 0;
    Object.entries(influence).forEach(([faction, value]) => {
        if (value > leadingValue) {
            leading = faction;
            leadingValue = value;
        }
    });

    // Calculate war phase
    const daysSinceStart = getDaysSince(CIVIL_WAR_CONFIG.startDate);
    let phase = 'Opening Moves';
    if (daysSinceStart > 7) phase = 'Escalation';
    if (daysSinceStart > 21) phase = 'Stalemate';
    if (daysSinceStart > 45) phase = 'Attrition';

    // Check for decisive events
    const fawfulStrong = influence.fawful > 25;
    const loyalistsWinning = influence.loyalists > influence.regency + 10;
    
    let specialStatus = null;
    if (fawfulStrong) specialStatus = "Fawful's grip tightens on the castle...";
    if (loyalistsWinning) specialStatus = "The Crusade gains momentum!";

    return {
        influence,
        total,
        leading,
        leadingFaction: CIVIL_WAR_FACTIONS[leading],
        phase,
        daysSinceStart,
        specialStatus
    };
}

function getOperationProgress(op) {
    if (op.status === 'completed') return 100;
    if (op.status !== 'active' || !op.startDate) return 0;
    
    const daysPassed = getDaysSince(op.startDate);
    return Math.min(100, Math.round((daysPassed / op.duration) * 100));
}

function getOperationEndDate(op) {
    if (!op.startDate) return null;
    const endDay = getAbsoluteDay(op.startDate) + op.duration;
    
    // Convert back to date
    const startYear = 1035;
    const yearsPassed = Math.floor(endDay / 365);
    let remainingDays = endDay % 365;
    
    let monthIndex = 0;
    let day = 1;
    
    for (let i = 0; i < CALENDAR_DATA.months.values.length; i++) {
        const daysInMonth = CALENDAR_DATA.months.values[i].days;
        if (remainingDays < daysInMonth) {
            monthIndex = i;
            day = remainingDays + 1;
            break;
        }
        remainingDays -= daysInMonth;
    }

    return { year: startYear + yearsPassed, monthIndex, day };
}

function formatDate(date) {
    if (!date) return 'Unknown';
    const month = CALENDAR_DATA?.months?.values?.[date.monthIndex];
    return `${month?.name || 'Month'} ${date.day}, ${date.year}`;
}

// ============================================
// CALENDAR INTEGRATION
// ============================================

export function getCivilWarEventsForDay(year, monthIndex, day) {
    const events = [];
    
    // Check civil war events
    CIVIL_WAR_EVENTS.forEach(event => {
        if (event.date.year === year && 
            event.date.monthIndex === monthIndex && 
            event.date.day === day) {
            events.push({
                type: 'civil_war',
                name: event.title,
                description: event.description,
                icon: event.type === 'battle' ? '⚔️' : event.type === 'diplomatic' ? '🤝' : '📜',
                eventType: event.type
            });
        }
    });

    // Check operation completions
    Object.entries(STRATEGIC_OPERATIONS).forEach(([faction, ops]) => {
        ops.forEach(op => {
            if (op.status === 'active' && op.startDate) {
                const endDate = getOperationEndDate(op);
                if (endDate && 
                    endDate.year === year && 
                    endDate.monthIndex === monthIndex && 
                    endDate.day === day) {
                    events.push({
                        type: 'operation_complete',
                        name: `Operation Complete: ${op.name}`,
                        description: `${CIVIL_WAR_FACTIONS[faction].name} completes their operation.`,
                        icon: '✅',
                        faction
                    });
                }
            }
            if (op.status === 'completed' && op.completedDate) {
                if (op.completedDate.year === year && 
                    op.completedDate.monthIndex === monthIndex && 
                    op.completedDate.day === day) {
                    events.push({
                        type: 'operation_complete',
                        name: `Completed: ${op.name}`,
                        description: `${CIVIL_WAR_FACTIONS[faction].name} operation concluded.`,
                        icon: '✅',
                        faction
                    });
                }
            }
        });
    });

    return events;
}

// ============================================
// EXPORTS
// ============================================

export {
    CIVIL_WAR_CONFIG,
    CIVIL_WAR_FACTIONS,
    STRATEGIC_OPERATIONS,
    CIVIL_WAR_EVENTS,
    calculateDynamicInfluence,
    calculateWarStatus
};