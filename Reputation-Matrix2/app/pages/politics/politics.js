// politics.js - Political Systems, Laws, and Governance Analysis
// Focused on political structures, legislation, and diplomatic relations

import { getAllFactions, getFaction } from '../../../systems/faction-registry.js';
import { 
    getFactionValues, 
    VALUE_AXES, 
    calculateFactionCompatibility, 
    getRelationshipLabel,
    getAllFactionsWithValues 
} from './societal-values.js';
import { RUMORS } from '../../../party-and-events.js';
import { STORY_ARCS,  } from '../../../lore.js';
import { MAJOR_BATTLES, CONFLICT_DETAILS } from '../battlefield/battlefield.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA, getDynamicTimestamp } from '../../../data/world/calendar.js';
import { 
    calculateAllAlliances, 
    SCRIPTED_ALLIANCES,
    ALLIANCE_TYPES,
    isExcludedFromAlliances 
} from '../../systems/alliances-page.js';
let _cachedWarData = null;
let _cachedAllianceData = null;
let _cacheTimestamp = 0;
const CACHE_DURATION = 5000; // 5 seconds
// ============================================================================
// POLITICAL SYSTEM DEFINITIONS
// ============================================================================

export const GOVERNMENT_TYPES = {
    absolute_monarchy: {
        id: 'absolute_monarchy',
        name: 'Absolute Monarchy',
        icon: '👑',
        description: 'A single ruler holds complete, unchecked power over all aspects of governance.',
        characteristics: ['Divine Right', 'Hereditary Rule', 'No Legislature', 'Personal Law'],
        stability: 'Dependent on ruler competence',
        succession: 'Hereditary / Conquest',
        citizenRights: 'Subjects, not citizens',
        color: '#7c2d12',
        valueProfile: { centralization: [0, 25], social_mobility: [0, 30] }
    },
    constitutional_monarchy: {
        id: 'constitutional_monarchy',
        name: 'Constitutional Monarchy',
        icon: '🏰',
        description: 'A monarch serves as head of state with powers limited by law or constitution.',
        characteristics: ['Limited Crown', 'Parliament/Council', 'Rule of Law', 'Traditional Legitimacy'],
        stability: 'High - balances tradition with progress',
        succession: 'Hereditary with oversight',
        citizenRights: 'Protected by constitution',
        color: '#1e40af',
        valueProfile: { centralization: [25, 45], tradition_innovation: [20, 50] }
    },
    oligarchy: {
        id: 'oligarchy',
        name: 'Oligarchy',
        icon: '🏛️',
        description: 'Power rests with a small group of elite individuals - nobles, wealthy, or powerful.',
        characteristics: ['Council Rule', 'Elite Class', 'Wealth/Power Requirements', 'Limited Franchise'],
        stability: 'Moderate - internal competition',
        succession: 'Selection by peers',
        citizenRights: 'Varies by status',
        color: '#7c3aed',
        valueProfile: { social_mobility: [0, 35], centralization: [30, 50] }
    },
    republic: {
        id: 'republic',
        name: 'Republic',
        icon: '🗳️',
        description: 'Citizens elect representatives to govern on their behalf.',
        characteristics: ['Elected Officials', 'Term Limits', 'Separation of Powers', 'Constitutional Framework'],
        stability: 'High - peaceful transitions',
        succession: 'Election',
        citizenRights: 'Full citizenship rights',
        color: '#2563eb',
        valueProfile: { centralization: [60, 90], social_mobility: [60, 90] }
    },
    direct_democracy: {
        id: 'direct_democracy',
        name: 'Direct Democracy',
        icon: '🤝',
        description: 'Citizens directly vote on laws and policies without intermediary representatives.',
        characteristics: ['Popular Assembly', 'Referendum System', 'No Representatives', 'Majority Rule'],
        stability: 'Variable - depends on engagement',
        succession: 'N/A - continuous participation',
        citizenRights: 'Direct political power',
        color: '#059669',
        valueProfile: { centralization: [75, 100], collectivism: [0, 40] }
    },
    theocracy: {
        id: 'theocracy',
        name: 'Theocracy',
        icon: '⛪',
        description: 'Religious leaders govern according to divine law and spiritual authority.',
        characteristics: ['Divine Law', 'Clergy Rule', 'Religious Courts', 'Faith Requirements'],
        stability: 'High within faith, hostile to outsiders',
        succession: 'Religious hierarchy',
        citizenRights: 'Dependent on faith adherence',
        color: '#eab308',
        valueProfile: { religion_state: [0, 25], tradition_innovation: [0, 35] }
    },
    stratocracy: {
        id: 'stratocracy',
        name: 'Stratocracy',
        icon: '⚔️',
        description: 'Military leaders hold political power; citizenship tied to service.',
        characteristics: ['Military Hierarchy', 'Service Requirements', 'Martial Law', 'Veteran Privileges'],
        stability: 'High internal, aggressive external',
        succession: 'Merit within military',
        citizenRights: 'Earned through service',
        color: '#374151',
        valueProfile: { militarism: [0, 30], centralization: [20, 50] }
    },
    magocracy: {
        id: 'magocracy',
        name: 'Magocracy',
        icon: '🔮',
        description: 'Magic users rule; arcane power determines political standing.',
        characteristics: ['Arcane Council', 'Power Testing', 'Magical Law', 'Research Priority'],
        stability: 'Moderate - power struggles',
        succession: 'Magical aptitude',
        citizenRights: 'Based on magical ability',
        color: '#8b5cf6',
        valueProfile: { magic_technology: [0, 30], knowledge: [60, 100] }
    },
    technocracy: {
        id: 'technocracy',
        name: 'Technocracy',
        icon: '🔬',
        description: 'Experts and scientists govern based on technical knowledge and data.',
        characteristics: ['Expert Panels', 'Data-Driven Policy', 'Meritocratic', 'Efficiency Focus'],
        stability: 'High - systematic approach',
        succession: 'Expertise demonstration',
        citizenRights: 'Equal but specialized',
        color: '#06b6d4',
        valueProfile: { tradition_innovation: [70, 100], knowledge: [70, 100] }
    },
    plutocracy: {
        id: 'plutocracy',
        name: 'Plutocracy',
        icon: '💰',
        description: 'Wealthy individuals or corporations hold political power.',
        characteristics: ['Wealth = Power', 'Corporate Influence', 'Economic Focus', 'Pay-to-Play'],
        stability: 'Moderate - wealth fluctuates',
        succession: 'Wealth acquisition',
        citizenRights: 'Proportional to wealth',
        color: '#ca8a04',
        valueProfile: { economy_type: [60, 100], collectivism: [60, 100] }
    },
    anarchy: {
        id: 'anarchy',
        name: 'Anarchy',
        icon: '🏴',
        description: 'No formal government; voluntary associations and self-governance.',
        characteristics: ['No Central Authority', 'Voluntary Association', 'Direct Action', 'Mutual Aid'],
        stability: 'Low - constant negotiation',
        succession: 'N/A',
        citizenRights: 'Individual sovereignty',
        color: '#000000',
        valueProfile: { centralization: [80, 100], collectivism: [70, 100] }
    },
    tribal_confederation: {
        id: 'tribal_confederation',
        name: 'Tribal Confederation',
        icon: '🏕️',
        description: 'Loose alliance of tribes or clans with shared customs but local autonomy.',
        characteristics: ['Elder Councils', 'Clan Autonomy', 'Traditional Law', 'Consensus Building'],
        stability: 'Variable - depends on unity',
        succession: 'Tribal customs',
        citizenRights: 'Clan membership',
        color: '#78350f',
        valueProfile: { centralization: [60, 85], tradition_innovation: [0, 35] }
    },
    hive_mind: {
        id: 'hive_mind',
        name: 'Hive Mind',
        icon: '🐝',
        description: 'Collective consciousness with unified will; no individual political agency.',
        characteristics: ['Unity of Purpose', 'No Dissent', 'Perfect Coordination', 'Shared Identity'],
        stability: 'Absolute - no internal conflict',
        succession: 'N/A - continuous existence',
        citizenRights: 'Part of the whole',
        color: '#84cc16',
        valueProfile: { collectivism: [0, 15], centralization: [0, 20] }
    }
};

// ============================================================================
// LAW CATEGORIES & LEGISLATION
// ============================================================================

export const LAW_CATEGORIES = {
    civil_rights: {
        id: 'civil_rights',
        name: 'Civil Rights',
        icon: '⚖️',
        description: 'Laws governing individual freedoms and protections',
        laws: [
            { id: 'speech_free', name: 'Free Speech', extreme: 'right', effect: 'Unrestricted expression' },
            { id: 'speech_limited', name: 'Limited Speech', extreme: 'center', effect: 'Some restrictions on expression' },
            { id: 'speech_controlled', name: 'Controlled Speech', extreme: 'left', effect: 'State-controlled messaging' },
            { id: 'assembly_free', name: 'Free Assembly', extreme: 'right', effect: 'Unrestricted gathering' },
            { id: 'assembly_permit', name: 'Permitted Assembly', extreme: 'center', effect: 'Requires government approval' },
            { id: 'assembly_banned', name: 'No Assembly', extreme: 'left', effect: 'Gatherings forbidden' }
        ]
    },
    economic_policy: {
        id: 'economic_policy',
        name: 'Economic Policy',
        icon: '💰',
        description: 'Laws governing trade, taxation, and economic activity',
        laws: [
            { id: 'market_free', name: 'Free Market', extreme: 'right', effect: 'No trade restrictions' },
            { id: 'market_regulated', name: 'Regulated Market', extreme: 'center', effect: 'Some trade oversight' },
            { id: 'market_controlled', name: 'Command Economy', extreme: 'left', effect: 'State-controlled economy' },
            { id: 'tax_none', name: 'No Taxation', extreme: 'right', effect: 'Voluntary contributions only' },
            { id: 'tax_progressive', name: 'Progressive Tax', extreme: 'center', effect: 'Higher earners pay more' },
            { id: 'tax_flat', name: 'Flat Tax', extreme: 'center', effect: 'Equal percentage for all' }
        ]
    },
    military_law: {
        id: 'military_law',
        name: 'Military Law',
        icon: '⚔️',
        description: 'Laws governing armed forces and warfare',
        laws: [
            { id: 'conscription_none', name: 'Volunteer Military', extreme: 'right', effect: 'Professional army only' },
            { id: 'conscription_crisis', name: 'Crisis Conscription', extreme: 'center', effect: 'Draft during emergencies' },
            { id: 'conscription_universal', name: 'Universal Service', extreme: 'left', effect: 'All citizens serve' },
            { id: 'war_defensive', name: 'Defensive Only', extreme: 'right', effect: 'No offensive wars' },
            { id: 'war_preemptive', name: 'Preemptive Strikes', extreme: 'center', effect: 'Attack if threatened' },
            { id: 'war_expansionist', name: 'Expansionist', extreme: 'left', effect: 'Conquest encouraged' }
        ]
    },
    religious_law: {
        id: 'religious_law',
        name: 'Religious Law',
        icon: '⛪',
        description: 'Laws governing faith and religious practice',
        laws: [
            { id: 'religion_state', name: 'State Religion', extreme: 'left', effect: 'Official faith enforced' },
            { id: 'religion_tolerated', name: 'Religious Tolerance', extreme: 'center', effect: 'Multiple faiths permitted' },
            { id: 'religion_secular', name: 'Secular State', extreme: 'right', effect: 'Faith separate from government' },
            { id: 'religion_banned', name: 'State Atheism', extreme: 'far-right', effect: 'Religion prohibited' }
        ]
    },
    magical_law: {
        id: 'magical_law',
        name: 'Magical Law',
        icon: '✨',
        description: 'Laws governing arcane practice and supernatural beings',
        laws: [
            { id: 'magic_free', name: 'Unrestricted Magic', extreme: 'right', effect: 'No magical oversight' },
            { id: 'magic_licensed', name: 'Licensed Magic', extreme: 'center', effect: 'Practitioners must register' },
            { id: 'magic_restricted', name: 'Restricted Magic', extreme: 'left', effect: 'Heavy regulations' },
            { id: 'magic_banned', name: 'Magic Prohibition', extreme: 'far-left', effect: 'All magic illegal' },
            { id: 'supernatural_citizen', name: 'Supernatural Citizenship', extreme: 'right', effect: 'Full rights for supernatural beings' },
            { id: 'supernatural_regulated', name: 'Supernatural Registration', extreme: 'center', effect: 'Must register with authorities' },
            { id: 'supernatural_banned', name: 'Supernatural Sovereignty Act', extreme: 'left', effect: 'Organized supernatural factions illegal' }
        ]
    },
    criminal_justice: {
        id: 'criminal_justice',
        name: 'Criminal Justice',
        icon: '🔒',
        description: 'Laws governing crime and punishment',
        laws: [
            { id: 'punishment_rehabilitative', name: 'Rehabilitative Justice', extreme: 'right', effect: 'Focus on reform' },
            { id: 'punishment_balanced', name: 'Balanced Justice', extreme: 'center', effect: 'Mix of punishment and reform' },
            { id: 'punishment_retributive', name: 'Retributive Justice', extreme: 'left', effect: 'Focus on punishment' },
            { id: 'punishment_brutal', name: 'Brutal Justice', extreme: 'far-left', effect: 'Harsh, public punishments' },
            { id: 'trial_jury', name: 'Jury Trial', extreme: 'right', effect: 'Judged by peers' },
            { id: 'trial_judge', name: 'Judicial Trial', extreme: 'center', effect: 'Professional judges decide' },
            { id: 'trial_inquisition', name: 'Inquisitorial System', extreme: 'left', effect: 'State-led investigation and judgment' }
        ]
    },
    social_policy: {
        id: 'social_policy',
        name: 'Social Policy',
        icon: '👥',
        description: 'Laws governing social structure and welfare',
        laws: [
            { id: 'mobility_open', name: 'Open Mobility', extreme: 'right', effect: 'Anyone can rise in status' },
            { id: 'mobility_limited', name: 'Limited Mobility', extreme: 'center', effect: 'Some restrictions on advancement' },
            { id: 'mobility_caste', name: 'Caste System', extreme: 'left', effect: 'Birth determines status' },
            { id: 'welfare_none', name: 'No Welfare', extreme: 'right', effect: 'Self-reliance expected' },
            { id: 'welfare_basic', name: 'Basic Safety Net', extreme: 'center', effect: 'Minimal support for needy' },
            { id: 'welfare_comprehensive', name: 'Comprehensive Welfare', extreme: 'left', effect: 'State provides for all' }
        ]
    },
    foreign_policy: {
        id: 'foreign_policy',
        name: 'Foreign Policy',
        icon: '🌍',
        description: 'Laws governing relations with other factions',
        laws: [
            { id: 'borders_open', name: 'Open Borders', extreme: 'right', effect: 'Free movement allowed' },
            { id: 'borders_controlled', name: 'Controlled Borders', extreme: 'center', effect: 'Immigration regulated' },
            { id: 'borders_closed', name: 'Closed Borders', extreme: 'left', effect: 'No immigration permitted' },
            { id: 'diplomacy_isolationist', name: 'Isolationist', extreme: 'left', effect: 'Minimal foreign involvement' },
            { id: 'diplomacy_neutral', name: 'Neutral', extreme: 'center', effect: 'Case-by-case engagement' },
            { id: 'diplomacy_interventionist', name: 'Interventionist', extreme: 'right', effect: 'Active foreign involvement' }
        ]
    }
};

// ============================================================================
// RECENT LEGISLATION (From game events)
// ============================================================================

export const RECENT_LEGISLATION = [
    {
        id: 'supernatural_sovereignty_act',
        name: 'The Supernatural Sovereignty Act',
        shortName: 'SSA',
        date: { year: 1040, monthIndex: 6, day: 18 },
        proposedBy: 'dan',
        faction: 'regal_empire',
        chamber: 'Imperial Diet',
        vote: { for: 81, against: 30, abstain: 0 },
        status: 'passed',
        category: 'magical_law',
        description: 'Declares organized vampires and werewolves illegal within Imperial territory. Grants the Iron Legion emergency powers to pursue and neutralize supernatural threats.',
        effects: [
            { faction: 'onyx_hand', impact: -50, note: 'Vampires declared illegal' },
            { faction: 'moonfang_pack', impact: -50, note: 'Werewolves declared illegal' },
            { faction: 'iron_legion', impact: +25, note: 'Granted enforcement powers' },
            { faction: 'silver_flame', impact: +40, note: 'Hunters legitimized' },
            { faction: 'regal_empire', impact: +30, note: 'Consolidated power' }
        ],
        controversy: 'high',
        enforcement: 'Iron Mandate (passed Day 21)',
        relatedArc: 'supernatural_sovereignty'
    },
    {
        id: 'iron_mandate',
        name: 'The Iron Mandate',
        shortName: 'IM',
        date: { year: 1040, monthIndex: 6, day: 21 },
        proposedBy: 'iron_legion',
        faction: 'regal_empire',
        chamber: 'Midlands Diet',
        vote: { for: 28, against: 8, abstain: 3 },
        status: 'passed',
        category: 'military_law',
        description: 'Grants the Iron Legion emergency powers to purge supernatural threats. Speaker Rivers resigned in protest. Legion patrols mobilized immediately.',
        effects: [
            { faction: 'iron_legion', impact: +35, note: 'Emergency powers granted' },
            { faction: 'regal_empire', impact: -10, note: 'Political division' },
            { faction: 'onyx_hand', impact: -30, note: 'Active persecution' },
            { faction: 'moonfang_pack', impact: -30, note: 'Active persecution' }
        ],
        controversy: 'extreme',
        enforcement: 'Immediate',
        relatedArc: 'supernatural_sovereignty'
    },
    {
        id: 'scavenging_doctrine',
        name: 'The Scavenging Doctrine',
        shortName: 'SD',
        date: { year: 1040, monthIndex: 6, day: 16 },
        proposedBy: 'dan',
        faction: 'liberated_toads',
        chamber: 'Toad Assembly',
        vote: { for: 'Majority', against: 'Archie Proposal', abstain: 0 },
        status: 'passed',
        category: 'military_law',
        description: 'Establishes resource gathering strategy for the Liberated Toads. Larger, cautious expeditions favored over small high-risk teams.',
        effects: [
            { faction: 'liberated_toads', impact: +10, note: 'Strategic clarity' },
            { faction: 'liberated_toads', impact: -5, note: 'Archie influence reduced' }
        ],
        controversy: 'low',
        enforcement: 'Standard',
        relatedArc: 'toad_liberation'
    },
    {
        id: 'toad_town_martial_law',
        name: 'Toad Town Martial Law Declaration',
        shortName: 'TTML',
        date: { year: 1040, monthIndex: 6, day: 12 },
        proposedBy: 'captain_toadette',
        faction: 'peach_loyalists',
        chamber: 'Military Command',
        vote: { for: 'Decree', against: 'N/A', abstain: 'N/A' },
        status: 'enforced',
        category: 'military_law',
        description: 'Captain Toadette declared martial law and seized control of Toad Town. The mayor was killed "resisting arrest."',
        effects: [
            { faction: 'peach_loyalists', impact: +20, note: 'Territorial gain' },
            { faction: 'mushroom_regency', impact: -30, note: 'Lost Toad Town' }
        ],
        controversy: 'extreme',
        enforcement: 'Military occupation',
        relatedArc: 'mushroom_civil_war'
    }
];

// ============================================================================
// DIPLOMATIC STANCES
// ============================================================================

export const DIPLOMATIC_STANCES = {
    allied: { 
        id: 'allied',
        name: 'Allied', 
        icon: '🤝', 
        color: '#22c55e', 
        value: 85,
        description: 'Formal alliance with mutual defense obligations',
        treaties: ['Mutual Defense', 'Free Trade', 'Open Borders']
    },
    friendly: { 
        id: 'friendly',
        name: 'Friendly', 
        icon: '😊', 
        color: '#84cc16', 
        value: 70,
        description: 'Positive relations with potential for cooperation',
        treaties: ['Non-Aggression', 'Trade Agreement']
    },
    cordial: {
        id: 'cordial',
        name: 'Cordial',
        icon: '🙂',
        color: '#a3e635',
        value: 60,
        description: 'Polite but distant relations',
        treaties: ['Basic Diplomacy']
    },
    neutral: { 
        id: 'neutral',
        name: 'Neutral', 
        icon: '😐', 
        color: '#6b7280', 
        value: 50,
        description: 'No significant positive or negative relations',
        treaties: []
    },
    tense: {
        id: 'tense',
        name: 'Tense',
        icon: '😬',
        color: '#fbbf24',
        value: 40,
        description: 'Relations strained by ideological differences',
        treaties: []
    },
    unfriendly: { 
        id: 'unfriendly',
        name: 'Unfriendly', 
        icon: '😠', 
        color: '#f97316', 
        value: 30,
        description: 'Active distrust and competition',
        treaties: []
    },
    hostile: { 
        id: 'hostile',
        name: 'Hostile', 
        icon: '👊', 
        color: '#dc2626', 
        value: 15,
        description: 'Open antagonism short of war',
        treaties: []
    },
    at_war: { 
        id: 'at_war',
        name: 'At War', 
        icon: '⚔️', 
        color: '#7f1d1d', 
        value: 0,
        description: 'Active military conflict',
        treaties: []
    }
};

// ============================================================================
// POLITICAL BLOCS & IDEOLOGICAL GROUPINGS
// ============================================================================

export const IDEOLOGICAL_BLOCS = {
    authoritarian_traditionalist: {
        id: 'authoritarian_traditionalist',
        name: 'Traditionalist Bloc',
        icon: '🏛️',
        color: '#7c2d12',
        description: 'Factions favoring strong central authority and traditional values',
        valueRequirements: {
            centralization: { max: 40 },
            tradition_innovation: { max: 45 }
        },
        typicalGovernments: ['absolute_monarchy', 'theocracy', 'oligarchy']
    },
    militarist_expansionist: {
        id: 'militarist_expansionist',
        name: 'Militarist Bloc',
        icon: '⚔️',
        color: '#991b1b',
        description: 'Factions prioritizing military strength and territorial expansion',
        valueRequirements: {
            militarism: { max: 35 },
            foreign_policy: { min: 60 }
        },
        typicalGovernments: ['stratocracy', 'absolute_monarchy']
    },
    progressive_democratic: {
        id: 'progressive_democratic',
        name: 'Democratic Bloc',
        icon: '🗳️',
        color: '#2563eb',
        description: 'Factions supporting representative government and reform',
        valueRequirements: {
            centralization: { min: 60 },
            social_mobility: { min: 55 }
        },
        typicalGovernments: ['republic', 'direct_democracy', 'constitutional_monarchy']
    },
    arcane_technocratic: {
        id: 'arcane_technocratic',
        name: 'Knowledge Bloc',
        icon: '🔮',
        color: '#7c3aed',
        description: 'Factions prioritizing magical or scientific knowledge',
        valueRequirements: {
            knowledge: { min: 60 }
        },
        typicalGovernments: ['magocracy', 'technocracy']
    },
    libertarian_individualist: {
        id: 'libertarian_individualist',
        name: 'Libertarian Bloc',
        icon: '🏴',
        color: '#000000',
        description: 'Factions opposing centralized authority',
        valueRequirements: {
            centralization: { min: 70 },
            collectivism: { min: 65 }
        },
        typicalGovernments: ['anarchy', 'tribal_confederation']
    },
    theocratic_religious: {
        id: 'theocratic_religious',
        name: 'Religious Bloc',
        icon: '⛪',
        color: '#eab308',
        description: 'Factions where faith guides governance',
        valueRequirements: {
            religion_state: { max: 35 }
        },
        typicalGovernments: ['theocracy']
    }
};

// ============================================================================
// WAR & ALLIANCE DETECTION FUNCTIONS (From battlefield.js and alliances.js)
// ============================================================================

/**
 * Get all factions currently at war from MAJOR_BATTLES
 * Returns a Map where key = factionId, value = Set of enemy factionIds
 */
function getFactionsAtWar() {
    const atWar = new Map();
    
    // Check if MAJOR_BATTLES exists
    if (typeof MAJOR_BATTLES === 'undefined' || !MAJOR_BATTLES || !Array.isArray(MAJOR_BATTLES)) {
        console.log('[Politics] No battle data available');
        return atWar;
    }
    
    // Find ongoing battles
    const ongoingBattles = MAJOR_BATTLES.filter(battle => {
        const outcome = (battle.outcome || '').toLowerCase();
        return outcome.includes('ongoing') || outcome === '' || outcome.includes('active');
    });
    
    console.log('[Politics] Ongoing battles found:', ongoingBattles.length);
    
    ongoingBattles.forEach(battle => {
        const belligerents = battle.belligerents || {};
        const sides = ['side_a', 'side_b', 'side_c', 'side_d'];
        
        // Get factions for each side
        const sidesFactions = sides
            .filter(s => belligerents[s])
            .map(s => belligerents[s].factions || []);
        
        // Mark factions on different sides as at war with each other
        for (let i = 0; i < sidesFactions.length; i++) {
            for (let j = i + 1; j < sidesFactions.length; j++) {
                sidesFactions[i].forEach(f1 => {
                    sidesFactions[j].forEach(f2 => {
                        if (!f1 || !f2 || f1 === 'unaligned' || f2 === 'unaligned') return;
                        
                        if (!atWar.has(f1)) atWar.set(f1, new Set());
                        if (!atWar.has(f2)) atWar.set(f2, new Set());
                        
                        atWar.get(f1).add(f2);
                        atWar.get(f2).add(f1);
                    });
                });
            }
        }
    });
    
    return atWar;
}

/**
 * Check if two specific factions are at war
 */
function areFactionsAtWar(factionId1, factionId2) {
    const atWar = getFactionsAtWar();
    return atWar.has(factionId1) && atWar.get(factionId1).has(factionId2);
}

/**
 * Check if a faction is at war with anyone
 */
function isFactionAtWar(factionId) {
    const atWar = getFactionsAtWar();
    return atWar.has(factionId) && atWar.get(factionId).size > 0;
}

/**
 * Get all enemies of a faction
 */
function getFactionEnemies(factionId) {
    const atWar = getFactionsAtWar();
    return atWar.has(factionId) ? Array.from(atWar.get(factionId)) : [];
}

/**
 * Get active conflicts involving a faction
 */
function getFactionActiveConflicts(factionId) {
    if (!MAJOR_BATTLES || !Array.isArray(MAJOR_BATTLES)) return [];
    
    return MAJOR_BATTLES.filter(battle => {
        const outcome = (battle.outcome || '').toLowerCase();
        if (!outcome.includes('ongoing') && outcome !== '' && !outcome.includes('active')) {
            return false;
        }
        
        const belligerents = battle.belligerents || {};
        const sides = ['side_a', 'side_b', 'side_c', 'side_d'];
        
        return sides.some(side => {
            const factions = belligerents[side]?.factions || [];
            return factions.includes(factionId);
        });
    });
}

/**
 * Get alliance data for a faction
 */
function getFactionAlliance(factionId) {
    try {
        const allianceData = calculateAllAlliances();
        return allianceData.factionToAlliance[factionId] || null;
    } catch (e) {
        console.error('[Politics] Error getting alliance data:', e);
        return null;
    }
}

/**
 * Get all allies of a faction (from same alliance)
 */
function getFactionAllies(factionId) {
    const alliance = getFactionAlliance(factionId);
    if (!alliance) return [];
    return alliance.members.filter(m => m !== factionId);
}

/**
 * Check if two factions are allies
 */
function areFactionsAllied(factionId1, factionId2) {
    const alliance1 = getFactionAlliance(factionId1);
    const alliance2 = getFactionAlliance(factionId2);
    
    if (!alliance1 || !alliance2) return false;
    return alliance1.id === alliance2.id;
}

// ============================================================================
// ANALYSIS FUNCTIONS
// ============================================================================

function determineGovernmentType(factionId, faction, values) {
    if (!values) return 'oligarchy';
    
    const text = ((faction?.name || '') + ' ' + (faction?.type || '') + ' ' + (faction?.description || '')).toLowerCase();
    
    // Check each government type's value profile
    let bestMatch = { type: 'oligarchy', score: 0 };
    
    Object.entries(GOVERNMENT_TYPES).forEach(([typeId, govType]) => {
        let score = 0;
        const profile = govType.valueProfile || {};
        
        Object.entries(profile).forEach(([axis, range]) => {
            const value = values[axis];
            if (value !== undefined) {
                if (value >= range[0] && value <= range[1]) {
                    score += 20;
                } else {
                    const distance = Math.min(
                        Math.abs(value - range[0]),
                        Math.abs(value - range[1])
                    );
                    score -= distance / 5;
                }
            }
        });
        
        // Keyword bonuses
        const keywords = {
            'absolute_monarchy': ['empire', 'emperor', 'king', 'tyrant', 'dictator'],
            'constitutional_monarchy': ['kingdom', 'crown', 'royal'],
            'republic': ['republic', 'democratic', 'elected', 'senate'],
            'theocracy': ['church', 'temple', 'holy', 'divine', 'sacred', 'flame'],
            'stratocracy': ['legion', 'army', 'military', 'martial'],
            'magocracy': ['mage', 'wizard', 'arcane', 'coven', 'circle'],
            'technocracy': ['science', 'research', 'laboratory', 'institute'],
            'plutocracy': ['merchant', 'trade', 'company', 'syndicate', 'cartel'],
            'anarchy': ['free', 'rebel', 'bandit', 'raider'],
            'tribal_confederation': ['tribe', 'clan', 'pack', 'horde'],
            'oligarchy': ['council', 'guild', 'order']
        };
        
        (keywords[typeId] || []).forEach(keyword => {
            if (text.includes(keyword)) {
                score += 15;
            }
        });
        
        if (score > bestMatch.score) {
            bestMatch = { type: typeId, score };
        }
    });
    
    return bestMatch.type;
}

function determineFactionLaws(factionId, values) {
    const laws = {};
    
    Object.entries(LAW_CATEGORIES).forEach(([categoryId, category]) => {
        const relevantLaws = [];
        
        category.laws.forEach(law => {
            let applies = false;
            
            // Determine based on values
            switch (categoryId) {
                case 'civil_rights':
                    if (law.id.includes('speech')) {
                        const cent = values.centralization || 50;
                        if (cent < 35 && law.extreme === 'left') applies = true;
                        else if (cent > 65 && law.extreme === 'right') applies = true;
                        else if (cent >= 35 && cent <= 65 && law.extreme === 'center') applies = true;
                    }
                    break;
                    
                case 'economic_policy':
                    const econ = values.collectivism || 50;
                    if (law.id.includes('market')) {
                        if (econ > 65 && law.extreme === 'right') applies = true;
                        else if (econ < 35 && law.extreme === 'left') applies = true;
                        else if (econ >= 35 && econ <= 65 && law.extreme === 'center') applies = true;
                    }
                    break;
                    
                case 'military_law':
                    const mil = values.militarism || 50;
                    if (law.id.includes('conscription')) {
                        if (mil < 30 && law.extreme === 'left') applies = true;
                        else if (mil > 70 && law.extreme === 'right') applies = true;
                        else if (mil >= 30 && mil <= 70 && law.extreme === 'center') applies = true;
                    }
                    break;
                    
                case 'religious_law':
                    const rel = values.religion_state || 50;
                    if (rel < 30 && law.id === 'religion_state') applies = true;
                    else if (rel > 70 && law.id === 'religion_secular') applies = true;
                    else if (rel >= 30 && rel <= 70 && law.id === 'religion_tolerated') applies = true;
                    break;
                    
                case 'magical_law':
                    const magic = values.magic_technology || 50;
                    if (law.id.includes('magic')) {
                        if (magic < 30 && (law.id === 'magic_free' || law.id === 'supernatural_citizen')) applies = true;
                        else if (magic > 70 && (law.id === 'magic_restricted' || law.id === 'magic_banned')) applies = true;
                        else if (magic >= 30 && magic <= 70 && law.id === 'magic_licensed') applies = true;
                    }
                    break;
            }
            
            if (applies) {
                relevantLaws.push(law);
            }
        });
        
        if (relevantLaws.length > 0) {
            laws[categoryId] = relevantLaws[0]; // Take most applicable
        }
    });
    
    return laws;
}

function getIdeologicalBloc(values) {
    if (!values) return null;
    
    for (const [blocId, bloc] of Object.entries(IDEOLOGICAL_BLOCS)) {
        let matches = true;
        
        for (const [axis, req] of Object.entries(bloc.valueRequirements)) {
            const value = values[axis];
            if (value === undefined) continue;
            
            if (req.min !== undefined && value < req.min) matches = false;
            if (req.max !== undefined && value > req.max) matches = false;
        }
        
        if (matches) return bloc;
    }
    
    return null;
}

/**
 * Calculate diplomatic stance between two factions
 * Uses alliance data and war status from battlefield.js
 */
function calculateDiplomaticStance(faction1Id, faction2Id) {
    // First check if they're at war (from battlefield.js)
    if (areFactionsAtWar(faction1Id, faction2Id)) {
        return DIPLOMATIC_STANCES.at_war;
    }
    
    // Check if they're allies (from alliances.js)
    if (areFactionsAllied(faction1Id, faction2Id)) {
        return DIPLOMATIC_STANCES.allied;
    }
    
    // Fall back to compatibility-based stance
    const compat = calculateFactionCompatibility(faction1Id, faction2Id);
    if (!compat) return DIPLOMATIC_STANCES.neutral;
    
    const c = compat.compatibility;
    
    if (c >= 85) return DIPLOMATIC_STANCES.allied;
    if (c >= 75) return DIPLOMATIC_STANCES.friendly;
    if (c >= 60) return DIPLOMATIC_STANCES.cordial;
    if (c >= 45) return DIPLOMATIC_STANCES.neutral;
    if (c >= 35) return DIPLOMATIC_STANCES.tense;
    if (c >= 20) return DIPLOMATIC_STANCES.unfriendly;
    return DIPLOMATIC_STANCES.hostile;
}

/**
 * Get all active wars from battlefield data
 */
function getActiveWars() {
    if (!MAJOR_BATTLES || !Array.isArray(MAJOR_BATTLES)) return [];
    
    return MAJOR_BATTLES.filter(battle => {
        const outcome = (battle.outcome || '').toLowerCase();
        return outcome.includes('ongoing') || outcome === '' || outcome.includes('active');
    }).map(battle => {
        const sides = ['side_a', 'side_b', 'side_c', 'side_d'];
        const belligerents = battle.belligerents || {};
        
        const participants = [];
        sides.forEach(side => {
            if (belligerents[side]) {
                const factions = (belligerents[side].factions || []).map(fId => ({
                    id: fId,
                    faction: getFaction(fId),
                    side: side
                }));
                participants.push(...factions);
            }
        });
        
        return {
            ...battle,
            participants,
            conflictName: battle.conflict || battle.name || 'Unknown Conflict'
        };
    });
}

/**
 * Count total number of factions at war
 */
function countFactionsAtWar() {
    const atWar = getFactionsAtWar();
    return atWar.size;
}
function analyzePoliticalLandscape() {
    const allFactions = getAllFactionsWithValues();
    
    // Get cached data once
    const atWarMap = getFactionsAtWar();
    const activeWars = getActiveWars();
    const allianceData = getCachedAllianceData();
    
    const factionAnalysis = allFactions.map(({ id, faction, values }) => {
        const govType = determineGovernmentType(id, faction, values);
        const laws = determineFactionLaws(id, values);
        const bloc = getIdeologicalBloc(values);
        const isAtWar = atWarMap.has(id);
        const enemies = isAtWar ? Array.from(atWarMap.get(id)) : [];
        const alliance = allianceData?.factionToAlliance?.[id] || null;
        const allies = alliance ? alliance.members.filter(m => m !== id) : [];
        
        return {
            id,
            faction,
            values,
            govType,
            govTypeData: GOVERNMENT_TYPES[govType],
            laws,
            bloc,
            isAtWar,
            enemies,
            alliance,
            allies,
            activeConflicts: getFactionActiveConflicts(id),
            recentLegislation: RECENT_LEGISLATION.filter(l => l.faction === id)
        };
    });
    
    // Count government types
    const govTypeCounts = {};
    Object.keys(GOVERNMENT_TYPES).forEach(type => {
        govTypeCounts[type] = factionAnalysis.filter(f => f.govType === type).length;
    });
    
    // Group by bloc
    const blocGroups = {};
    Object.keys(IDEOLOGICAL_BLOCS).forEach(blocId => {
        blocGroups[blocId] = factionAnalysis.filter(f => f.bloc?.id === blocId);
    });
    
    // Calculate diplomatic tensions (only between factions not already at war)
    const tensions = [];
    for (let i = 0; i < Math.min(factionAnalysis.length, 30); i++) {
        for (let j = i + 1; j < Math.min(factionAnalysis.length, 30); j++) {
            const f1 = factionAnalysis[i];
            const f2 = factionAnalysis[j];
            
            // Skip if already at war - use cached map directly
            if (atWarMap.has(f1.id) && atWarMap.get(f1.id).has(f2.id)) continue;
            
            const compat = calculateFactionCompatibility(f1.id, f2.id);
            
            if (compat && compat.compatibility < 35) {
                tensions.push({
                    faction1: f1,
                    faction2: f2,
                    compatibility: compat.compatibility,
                    differences: compat.biggestDifferences || [],
                    stance: calculateDiplomaticStanceFromCache(f1.id, f2.id, atWarMap, allianceData, compat)
                });
            }
        }
    }
    
    tensions.sort((a, b) => a.compatibility - b.compatibility);
    
    // Count factions at war
    const factionsAtWarCount = atWarMap.size;
    const activeWarCount = activeWars.length;
    
    return {
        factions: factionAnalysis,
        govTypeCounts,
        blocGroups,
        tensions: tensions.slice(0, 10),
        activeWars,
        factionsAtWarCount,
        activeWarCount,
        allianceData,
        recentLegislation: RECENT_LEGISLATION.sort((a, b) => {
            const dateA = new Date(a.date.year, a.date.monthIndex, a.date.day);
            const dateB = new Date(b.date.year, b.date.monthIndex, b.date.day);
            return dateB - dateA;
        })
    };
}


// ============================================================================
// RENDER FUNCTIONS
// ============================================================================
function calculateDiplomaticStanceFromCache(faction1Id, faction2Id, atWarMap, allianceData, compat) {
    // Check war from cached map
    if (atWarMap.has(faction1Id) && atWarMap.get(faction1Id).has(faction2Id)) {
        return DIPLOMATIC_STANCES.at_war;
    }
    
    // Check alliance from cached data
    const alliance1 = allianceData?.factionToAlliance?.[faction1Id];
    const alliance2 = allianceData?.factionToAlliance?.[faction2Id];
    if (alliance1 && alliance2 && alliance1.id === alliance2.id) {
        return DIPLOMATIC_STANCES.allied;
    }
    
    // Use pre-calculated compatibility
    if (!compat) return DIPLOMATIC_STANCES.neutral;
    
    const c = compat.compatibility;
    
    if (c >= 85) return DIPLOMATIC_STANCES.allied;
    if (c >= 75) return DIPLOMATIC_STANCES.friendly;
    if (c >= 60) return DIPLOMATIC_STANCES.cordial;
    if (c >= 45) return DIPLOMATIC_STANCES.neutral;
    if (c >= 35) return DIPLOMATIC_STANCES.tense;
    if (c >= 20) return DIPLOMATIC_STANCES.unfriendly;
    return DIPLOMATIC_STANCES.hostile;
}
function getCachedAllianceData() {
    const now = Date.now();
    if (_cachedAllianceData && (now - _cacheTimestamp) < CACHE_DURATION) {
        return _cachedAllianceData;
    }
    
    try {
        _cachedAllianceData = calculateAllAlliances();
        _cacheTimestamp = now;
        return _cachedAllianceData;
    } catch (e) {
        console.warn('[Politics] Could not load alliance data:', e);
        return null;
    }
}

function renderStatsOverview(data) {
    const totalFactions = data.factions.length;
    const activeLaws = RECENT_LEGISLATION.filter(l => l.status === 'passed' || l.status === 'enforced').length;
    const govTypesUsed = Object.values(data.govTypeCounts).filter(c => c > 0).length;
    const allianceCount = data.allianceData?.totalAlliances || 0;
    
    return `
        <div class="politics-stats-overview">
            <div class="politics-stat-card">
                <span class="stat-icon">🏛️</span>
                <div class="stat-content">
                    <span class="stat-value">${totalFactions}</span>
                    <span class="stat-label">Political Entities</span>
                </div>
            </div>
            <div class="politics-stat-card">
                <span class="stat-icon">👑</span>
                <div class="stat-content">
                    <span class="stat-value">${govTypesUsed}</span>
                    <span class="stat-label">Government Types</span>
                </div>
            </div>
            <div class="politics-stat-card">
                <span class="stat-icon">📜</span>
                <div class="stat-content">
                    <span class="stat-value">${activeLaws}</span>
                    <span class="stat-label">Recent Laws</span>
                </div>
            </div>
            <div class="politics-stat-card">
                <span class="stat-icon">🤝</span>
                <div class="stat-content">
                    <span class="stat-value">${allianceCount}</span>
                    <span class="stat-label">Active Alliances</span>
                </div>
            </div>
            <div class="politics-stat-card">
                <span class="stat-icon">⚡</span>
                <div class="stat-content">
                    <span class="stat-value">${data.tensions.length}</span>
                    <span class="stat-label">Diplomatic Tensions</span>
                </div>
            </div>
            <div class="politics-stat-card ${data.activeWarCount > 0 ? 'highlight' : ''}">
                <span class="stat-icon">⚔️</span>
                <div class="stat-content">
                    <span class="stat-value">${data.activeWarCount}</span>
                    <span class="stat-label">Active Wars</span>
                </div>
            </div>
        </div>
    `;
}

function renderActiveWarsPanel(activeWars) {
    if (!activeWars || activeWars.length === 0) {
        return `
            <div class="active-wars-panel empty">
                <h3 class="panel-title">
                    <span class="title-icon">⚔️</span>
                    Active Conflicts
                </h3>
                <div class="no-wars">
                    <span class="peace-icon">🕊️</span>
                    <p>No active wars detected</p>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="active-wars-panel">
            <h3 class="panel-title">
                <span class="title-icon">⚔️</span>
                Active Conflicts (${activeWars.length})
            </h3>
            <div class="wars-list">
                ${activeWars.map(war => {
                    // Group participants by side
                    const sideGroups = {};
                    war.participants.forEach(p => {
                        if (!sideGroups[p.side]) sideGroups[p.side] = [];
                        sideGroups[p.side].push(p);
                    });
                    
                    const conflictDetail = CONFLICT_DETAILS?.[war.conflict] || null;
                    
                    return `
                        <div class="war-card" data-battle="${war.id || war.name}">
                            <div class="war-header">
                                <h4 class="war-name">${war.name || war.conflict || 'Unknown Conflict'}</h4>
                                <span class="war-status ongoing">ONGOING</span>
                            </div>
                            
                            ${conflictDetail ? `
                                <p class="war-summary">${conflictDetail.summary}</p>
                            ` : ''}
                            
                            <div class="war-belligerents">
                                ${Object.entries(sideGroups).map(([side, participants], index) => `
                                    <div class="war-side">
                                        <span class="side-label">${participants[0]?.faction?.name ? '' : side.replace('_', ' ').toUpperCase()}</span>
                                        <div class="side-factions">
                                            ${participants.map(p => `
                                                <div class="war-faction" 
                                                     data-faction="${p.id}"
                                                     style="background: ${p.faction?.color || '#666'};">
                                                    ${p.faction?.icon || '?'}
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                    ${index < Object.keys(sideGroups).length - 1 ? '<span class="vs-divider">VS</span>' : ''}
                                `).join('')}
                            </div>
                            
                            ${war.location ? `
                                <div class="war-location">
                                    <span class="location-icon">📍</span>
                                    <span>${war.location}</span>
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderRecentLegislation(legislation) {
    return `
        <div class="legislation-panel">
            <h3 class="panel-title">
                <span class="title-icon">📜</span>
                Recent Legislation
            </h3>
            <div class="legislation-list">
                ${legislation.slice(0, 6).map(law => {
                    const category = LAW_CATEGORIES[law.category];
                    const dateStr = getDynamicTimestamp(law.date);
                    const proposer = getFaction(law.proposedBy) || { name: law.proposedBy, icon: '👤' };
                    const originFaction = getFaction(law.faction);
                    
                    return `
                        <div class="legislation-card ${law.status}" data-law="${law.id}">
                            <div class="law-header">
                                <span class="law-category-icon">${category?.icon || '📄'}</span>
                                <div class="law-title-group">
                                    <h4 class="law-name">${law.name}</h4>
                                    <span class="law-meta">
                                        ${law.chamber} • ${dateStr}
                                    </span>
                                </div>
                                <span class="law-status ${law.status}">${law.status.toUpperCase()}</span>
                            </div>
                            
                            <p class="law-description">${law.description}</p>
                            
                            <div class="law-vote">
                                ${typeof law.vote.for === 'number' ? `
                                    <div class="vote-bar">
                                        <div class="vote-for" style="width: ${(law.vote.for / (law.vote.for + law.vote.against)) * 100}%">
                                            ✓ ${law.vote.for}
                                        </div>
                                        <div class="vote-against" style="width: ${(law.vote.against / (law.vote.for + law.vote.against)) * 100}%">
                                            ✗ ${law.vote.against}
                                        </div>
                                    </div>
                                ` : `
                                    <span class="vote-decree">${law.vote.for}</span>
                                `}
                            </div>
                            
                            <div class="law-effects">
                                <span class="effects-label">Effects:</span>
                                <div class="effects-list">
                                    ${law.effects.slice(0, 3).map(effect => {
                                        const targetFaction = getFaction(effect.faction);
                                        const impactClass = effect.impact > 0 ? 'positive' : 'negative';
                                        return `
                                            <span class="effect-chip ${impactClass}" data-faction="${effect.faction}">
                                                ${targetFaction?.icon || '?'} 
                                                ${effect.impact > 0 ? '+' : ''}${effect.impact}
                                            </span>
                                        `;
                                    }).join('')}
                                    ${law.effects.length > 3 ? `<span class="more-effects">+${law.effects.length - 3} more</span>` : ''}
                                </div>
                            </div>
                            
                            ${law.controversy === 'extreme' ? `
                                <div class="law-controversy">
                                    ⚠️ Highly Controversial
                                </div>
                            ` : law.controversy === 'high' ? `
                                <div class="law-controversy moderate">
                                    ⚡ Controversial
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderGovernmentTypes(govTypeCounts, factions) {
    const activeTypes = Object.entries(govTypeCounts)
        .filter(([_, count]) => count > 0)
        .sort((a, b) => b[1] - a[1]);
    
    return `
        <div class="government-types-panel">
            <h3 class="panel-title">
                <span class="title-icon">👑</span>
                Government Systems
            </h3>
            <div class="gov-types-grid">
                ${activeTypes.map(([typeId, count]) => {
                    const govType = GOVERNMENT_TYPES[typeId];
                    const typeFactions = factions.filter(f => f.govType === typeId).slice(0, 4);
                    
                    return `
                        <div class="gov-type-card" data-gov-type="${typeId}" style="--gov-color: ${govType.color}">
                            <div class="gov-type-header">
                                <span class="gov-type-icon">${govType.icon}</span>
                                <div class="gov-type-info">
                                    <h4 class="gov-type-name">${govType.name}</h4>
                                    <span class="gov-type-count">${count} faction${count !== 1 ? 's' : ''}</span>
                                </div>
                            </div>
                            <p class="gov-type-desc">${govType.description}</p>
                            <div class="gov-type-traits">
                                ${govType.characteristics.slice(0, 3).map(c => `
                                    <span class="trait-chip">${c}</span>
                                `).join('')}
                            </div>
                            <div class="gov-type-factions">
                                ${typeFactions.map(f => `
                                    <div class="mini-faction" 
                                         data-faction="${f.id}"
                                         style="background: ${f.faction?.color || '#666'}"
                                         title="${f.faction?.name || f.id}${f.isAtWar ? ' ⚔️ AT WAR' : ''}">
                                        ${f.faction?.icon || '?'}
                                        ${f.isAtWar ? '<span class="war-indicator">⚔️</span>' : ''}
                                    </div>
                                `).join('')}
                                ${count > 4 ? `<span class="more-factions">+${count - 4}</span>` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderIdeologicalBlocs(blocGroups) {
    const activeBlocs = Object.entries(blocGroups).filter(([_, factions]) => factions.length > 0);
    
    return `
        <div class="ideological-blocs-panel">
            <h3 class="panel-title">
                <span class="title-icon">🏴</span>
                Ideological Blocs
            </h3>
            <div class="blocs-grid">
                ${activeBlocs.map(([blocId, factions]) => {
                    const bloc = IDEOLOGICAL_BLOCS[blocId];
                    const atWarCount = factions.filter(f => f.isAtWar).length;
                    
                    return `
                        <div class="bloc-card" style="--bloc-color: ${bloc.color}">
                            <div class="bloc-header">
                                <span class="bloc-icon">${bloc.icon}</span>
                                <h4 class="bloc-name">${bloc.name}</h4>
                                <span class="bloc-count">${factions.length}</span>
                                ${atWarCount > 0 ? `<span class="bloc-war-count" title="${atWarCount} at war">⚔️${atWarCount}</span>` : ''}
                            </div>
                            <p class="bloc-desc">${bloc.description}</p>
                            <div class="bloc-members">
                                ${factions.slice(0, 6).map(f => `
                                    <div class="bloc-member ${f.isAtWar ? 'at-war' : ''}" 
                                         data-faction="${f.id}"
                                         style="background: ${f.faction?.color || '#666'}"
                                         title="${f.faction?.name || f.id}${f.isAtWar ? ' - AT WAR' : ''}">
                                        ${f.faction?.icon || '?'}
                                        ${f.isAtWar ? '<span class="war-badge">⚔️</span>' : ''}
                                    </div>
                                `).join('')}
                                ${factions.length > 6 ? `<span class="more-members">+${factions.length - 6}</span>` : ''}
                            </div>
                            <div class="bloc-values">
                                <span class="values-label">Shared Values:</span>
                                ${Object.entries(bloc.valueRequirements).map(([axis, req]) => {
                                    const axisData = VALUE_AXES[axis];
                                    const direction = req.max ? 'left' : 'right';
                                    return `
                                        <span class="value-chip ${direction}">
                                            ${direction === 'left' ? axisData?.leftIcon : axisData?.rightIcon}
                                            ${direction === 'left' ? axisData?.leftLabel : axisData?.rightLabel}
                                        </span>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderDiplomaticTensions(tensions) {
    return `
        <div class="tensions-panel">
            <h3 class="panel-title">
                <span class="title-icon">⚡</span>
                Diplomatic Tensions
            </h3>
            <div class="tensions-list">
                ${tensions.map(t => {
                    const f1 = t.faction1;
                    const f2 = t.faction2;
                    const stance = t.stance;
                    
                    return `
                        <div class="tension-card" style="--tension-color: ${stance.color}">
                            <div class="tension-factions">
                                <div class="tension-faction" data-faction="${f1.id}">
                                    <span class="faction-icon" style="background: ${f1.faction?.color || '#666'}">
                                        ${f1.faction?.icon || '?'}
                                    </span>
                                    <span class="faction-name">${f1.faction?.name || f1.id}</span>
                                    ${f1.isAtWar ? '<span class="at-war-badge">⚔️</span>' : ''}
                                </div>
                                <div class="tension-vs">
                                    <span class="stance-icon">${stance.icon}</span>
                                    <span class="stance-name">${stance.name}</span>
                                </div>
                                <div class="tension-faction" data-faction="${f2.id}">
                                    <span class="faction-icon" style="background: ${f2.faction?.color || '#666'}">
                                        ${f2.faction?.icon || '?'}
                                    </span>
                                    <span class="faction-name">${f2.faction?.name || f2.id}</span>
                                    ${f2.isAtWar ? '<span class="at-war-badge">⚔️</span>' : ''}
                                </div>
                            </div>
                            <div class="tension-details">
                                <div class="compatibility-bar">
                                    <div class="compat-fill" style="width: ${t.compatibility}%"></div>
                                    <span class="compat-value">${t.compatibility}%</span>
                                </div>
                                <div class="tension-causes">
                                    ${t.differences.slice(0, 2).map(d => `
                                        <span class="cause-chip" title="${d.axis.name}: ${d.diff} point difference">
                                            ${d.axis.leftIcon}↔${d.axis.rightIcon}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderFactionPoliticsDetail(factionData) {
    const f = factionData.faction;
    const govType = factionData.govTypeData;
    const laws = factionData.laws;
    const values = factionData.values;
    const bloc = factionData.bloc;
    const alliance = factionData.alliance;
    const allianceType = alliance ? (ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact) : null;
    
    return `
        <div class="faction-politics-modal-overlay" onclick="if(event.target === this) this.remove()">
            <div class="faction-politics-modal">
                <button class="modal-close" onclick="this.closest('.faction-politics-modal-overlay').remove()">✕</button>
                
                <div class="modal-header" style="background: linear-gradient(135deg, ${f?.color || '#333'}22, transparent)">
                    <div class="modal-icon" style="background: ${f?.color || '#666'}">${f?.icon || '?'}</div>
                    <div class="modal-title">
                        <h2>${f?.name || factionData.id}</h2>
                        <span class="modal-subtitle">
                            ${govType?.icon} ${govType?.name}
                            ${bloc ? `• ${bloc.icon} ${bloc.name}` : ''}
                            ${factionData.isAtWar ? '• ⚔️ AT WAR' : ''}
                        </span>
                    </div>
                </div>
                
                <div class="modal-body">
                    <!-- War Status -->
                    ${factionData.isAtWar ? `
                        <div class="modal-section war-status-section">
                            <h5>⚔️ Active Conflicts</h5>
                            <div class="war-status-content">
                                <p class="at-war-notice">This faction is currently at war!</p>
                                <div class="enemies-list">
                                    <span class="enemies-label">Fighting against:</span>
                                    ${factionData.enemies.map(enemyId => {
                                        const enemy = getFaction(enemyId);
                                        return `
                                            <div class="enemy-chip" data-faction="${enemyId}" style="border-color: ${enemy?.color || '#666'}">
                                                <span class="enemy-icon" style="background: ${enemy?.color || '#666'}">${enemy?.icon || '?'}</span>
                                                <span class="enemy-name">${enemy?.name || enemyId}</span>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Alliance Status -->
                    ${alliance ? `
                        <div class="modal-section alliance-status-section">
                            <h5>🤝 Alliance Membership</h5>
                            <div class="alliance-info-card" style="border-color: ${alliance.color}">
                                <div class="alliance-header-mini">
                                    <span class="alliance-icon" style="background: ${alliance.color}">${alliance.icon}</span>
                                    <div class="alliance-details">
                                        <span class="alliance-name">${alliance.name}</span>
                                        <span class="alliance-type">${allianceType?.icon} ${allianceType?.name}</span>
                                    </div>
                                </div>
                                <div class="alliance-allies">
                                    <span class="allies-label">Allied with:</span>
                                    ${factionData.allies.map(allyId => {
                                        const ally = getFaction(allyId);
                                        return `
                                            <div class="ally-chip" data-faction="${allyId}" style="background: ${ally?.color || '#666'}">
                                                ${ally?.icon || '?'}
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="modal-section">
                        <h5>Government Structure</h5>
                        <div class="gov-details">
                            <p>${govType?.description}</p>
                            <div class="gov-traits">
                                ${(govType?.characteristics || []).map(c => `
                                    <span class="trait-chip">${c}</span>
                                `).join('')}
                            </div>
                            <div class="gov-meta">
                                <div class="meta-item">
                                    <span class="meta-label">Stability</span>
                                    <span class="meta-value">${govType?.stability || 'Unknown'}</span>
                                </div>
                                <div class="meta-item">
                                    <span class="meta-label">Succession</span>
                                    <span class="meta-value">${govType?.succession || 'Unknown'}</span>
                                </div>
                                <div class="meta-item">
                                    <span class="meta-label">Citizen Rights</span>
                                    <span class="meta-value">${govType?.citizenRights || 'Unknown'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h5>Active Laws</h5>
                        <div class="laws-grid">
                            ${Object.entries(laws).map(([catId, law]) => {
                                const category = LAW_CATEGORIES[catId];
                                return `
                                    <div class="law-item">
                                        <span class="law-icon">${category?.icon || '📄'}</span>
                                        <div class="law-info">
                                            <span class="law-category">${category?.name || catId}</span>
                                            <span class="law-name">${law.name}</span>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                            ${Object.keys(laws).length === 0 ? '<p class="no-laws">No specific laws determined</p>' : ''}
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h5>Political Values</h5>
                        <div class="values-grid">
                            ${Object.entries(VALUE_AXES).slice(0, 6).map(([axisId, axis]) => {
                                const value = values[axisId] || 50;
                                const position = value < 40 ? 'left' : value > 60 ? 'right' : 'center';
                                const label = position === 'left' ? axis.leftLabel : 
                                              position === 'right' ? axis.rightLabel : 'Balanced';
                                
                                return `
                                    <div class="value-bar-item">
                                        <div class="value-header">
                                            <span class="value-icons">${axis.leftIcon} ↔ ${axis.rightIcon}</span>
                                            <span class="value-name">${axis.name}</span>
                                        </div>
                                        <div class="value-track">
                                            <div class="value-fill" style="
                                                left: ${Math.min(50, value)}%;
                                                width: ${Math.abs(50 - value)}%;
                                                background: ${value < 50 ? axis.leftColor : axis.rightColor};
                                            "></div>
                                            <div class="value-marker" style="left: ${value}%"></div>
                                        </div>
                                        <span class="value-label" style="color: ${value < 50 ? axis.leftColor : axis.rightColor}">
                                            ${label} (${value})
                                        </span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    
                    ${factionData.recentLegislation.length > 0 ? `
                        <div class="modal-section">
                            <h5>Recent Legislation</h5>
                            <div class="faction-laws-list">
                                ${factionData.recentLegislation.map(law => `
                                    <div class="faction-law-item ${law.status}">
                                        <span class="law-name">${law.shortName}: ${law.name}</span>
                                        <span class="law-status">${law.status}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

function renderLegislationDetailModal(law) {
    const category = LAW_CATEGORIES[law.category];
    const proposer = getFaction(law.proposedBy);
    const originFaction = getFaction(law.faction);
    
    return `
        <div class="legislation-modal-overlay" onclick="if(event.target === this) this.remove()">
            <div class="legislation-modal">
                <button class="modal-close" onclick="this.closest('.legislation-modal-overlay').remove()">✕</button>
                
                <div class="modal-header ${law.status}">
                    <span class="modal-icon">${category?.icon || '📜'}</span>
                    <div class="modal-title">
                        <h2>${law.name}</h2>
                        <span class="modal-subtitle">${law.chamber} • ${getDynamicTimestamp(law.date)}</span>
                    </div>
                    <span class="law-status-badge ${law.status}">${law.status.toUpperCase()}</span>
                </div>
                
                <div class="modal-body">
                    <div class="modal-section">
                        <h5>Summary</h5>
                        <p class="law-full-description">${law.description}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h5>Voting Record</h5>
                        ${typeof law.vote.for === 'number' ? `
                            <div class="vote-details">
                                <div class="vote-bar large">
                                    <div class="vote-for" style="width: ${(law.vote.for / (law.vote.for + law.vote.against + (law.vote.abstain || 0))) * 100}%">
                                        <span class="vote-label">For</span>
                                        <span class="vote-count">${law.vote.for}</span>
                                    </div>
                                    <div class="vote-against" style="width: ${(law.vote.against / (law.vote.for + law.vote.against + (law.vote.abstain || 0))) * 100}%">
                                        <span class="vote-label">Against</span>
                                        <span class="vote-count">${law.vote.against}</span>
                                    </div>
                                    ${law.vote.abstain ? `
                                        <div class="vote-abstain" style="width: ${(law.vote.abstain / (law.vote.for + law.vote.against + law.vote.abstain)) * 100}%">
                                            <span class="vote-count">${law.vote.abstain}</span>
                                        </div>
                                    ` : ''}
                                </div>
                                <div class="vote-meta">
                                    <span>Passed with ${Math.round((law.vote.for / (law.vote.for + law.vote.against)) * 100)}% support</span>
                                </div>
                            </div>
                        ` : `
                            <div class="vote-decree-details">
                                <span class="decree-badge">${law.vote.for}</span>
                                <p>This measure was enacted by decree, not through legislative vote.</p>
                            </div>
                        `}
                    </div>
                    
                    <div class="modal-section">
                        <h5>Affected Factions</h5>
                        <div class="effects-grid">
                            ${law.effects.map(effect => {
                                const faction = getFaction(effect.faction);
                                const impactClass = effect.impact > 0 ? 'positive' : 'negative';
                                
                                return `
                                    <div class="effect-card ${impactClass}" data-faction="${effect.faction}">
                                        <div class="effect-faction">
                                            <span class="faction-icon" style="background: ${faction?.color || '#666'}">
                                                ${faction?.icon || '?'}
                                            </span>
                                            <span class="faction-name">${faction?.name || effect.faction}</span>
                                        </div>
                                        <div class="effect-impact">
                                            <span class="impact-value">${effect.impact > 0 ? '+' : ''}${effect.impact}</span>
                                        </div>
                                        <p class="effect-note">${effect.note}</p>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h5>Details</h5>
                        <div class="law-details-grid">
                            <div class="detail-item">
                                <span class="detail-label">Proposed By</span>
                                <span class="detail-value">${proposer?.name || law.proposedBy}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Origin</span>
                                <span class="detail-value">${originFaction?.name || law.faction}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Category</span>
                                <span class="detail-value">${category?.name || law.category}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Enforcement</span>
                                <span class="detail-value">${law.enforcement}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Controversy</span>
                                <span class="detail-value controversy-${law.controversy}">${law.controversy}</span>
                            </div>
                            ${law.relatedArc ? `
                                <div class="detail-item">
                                    <span class="detail-label">Related Story</span>
                                    <span class="detail-value">${STORY_ARCS[law.relatedArc]?.name || law.relatedArc}</span>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================================
// MAIN RENDER
// ============================================================================

function renderPoliticsPage() {
    const container = document.getElementById('politics-container');
    if (!container) return;
    
    const data = analyzePoliticalLandscape();
    
    if (!data || data.factions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🏛️</span>
                <p>No political data available.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        ${renderStatsOverview(data)}
        
        <div class="politics-main-grid">
            <div class="politics-column-left">
                ${renderActiveWarsPanel(data.activeWars)}
                ${renderRecentLegislation(data.recentLegislation)}
                ${renderGovernmentTypes(data.govTypeCounts, data.factions)}
            </div>
            <div class="politics-column-right">
                ${renderIdeologicalBlocs(data.blocGroups)}
                ${renderDiplomaticTensions(data.tensions)}
            </div>
        </div>
    `;
    
    // Store data for modals
    window._politicsData = data;
    
    initPoliticsListeners(container, data);
}

function initPoliticsListeners(container, data) {
    container.addEventListener('click', (e) => {
        // Faction clicks
        const factionElement = e.target.closest('[data-faction]');
        if (factionElement) {
            const factionId = factionElement.dataset.faction;
            const factionData = data.factions.find(f => f.id === factionId);
            
            if (factionData) {
                document.body.insertAdjacentHTML('beforeend', renderFactionPoliticsDetail(factionData));
            } else if (window.showFactionModal) {
                window.showFactionModal(factionId);
            }
            return;
        }
        
        // Law clicks
        const lawElement = e.target.closest('[data-law]');
        if (lawElement) {
            const lawId = lawElement.dataset.law;
            const law = RECENT_LEGISLATION.find(l => l.id === lawId);
            
            if (law) {
                document.body.insertAdjacentHTML('beforeend', renderLegislationDetailModal(law));
            }
            return;
        }
        
        // Government type clicks
        const govTypeElement = e.target.closest('[data-gov-type]');
        if (govTypeElement) {
            const typeId = govTypeElement.dataset.govType;
            const typeFactions = data.factions.filter(f => f.govType === typeId);
            
            // Could show a modal with all factions of this type
            console.log(`${typeId}: ${typeFactions.length} factions`);
            return;
        }
        
        // War card clicks
        const warCard = e.target.closest('.war-card');
        if (warCard) {
            const battleId = warCard.dataset.battle;
            // Could navigate to battlefield page or show war details
            console.log(`War clicked: ${battleId}`);
            return;
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        try {
            renderPoliticsPage();
        } catch (e) {
            console.error("Politics page error:", e);
        }
    }, 150);
});

// Export functions for use by other modules
export { 
    analyzePoliticalLandscape, 
    getFactionsAtWar,
    areFactionsAtWar,
    isFactionAtWar,
    getFactionEnemies,
    getFactionAlliance,
    getFactionAllies,
    areFactionsAllied,
    getActiveWars,
    calculateDiplomaticStance
};                                        