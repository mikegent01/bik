// societal-values.js - Faction & Regional Value Spectrum System

import { getAllFactions, getFaction } from './systems/faction-registry.js'; 
import { MAP_DATA } from './map-data.js'; 

// ============================================
// VALUE AXES DEFINITIONS
// ============================================
const EXCLUDED_FACTION_IDS = [
    'unaligned',
    'independent',
    'none',
    'neutral',
    'unknown',
    'n/a',
    'na',
    'null',
    'undefined',
    ''
];
function calculateFactionCompatibility(factionId1, factionId2) {
    const values1 = getFactionValues(factionId1);
    const values2 = getFactionValues(factionId2);
    
    if (!values1 || !values2) return null;
    
    let totalDiff = 0;
    let count = 0;
    let extremeConflicts = 0;      // 50+ diff
    let strongConflicts = 0;        // 35-49 diff
    let strongAgreements = 0;       // 0-15 diff
    let maxSingleDiff = 0;
    const biggestDifferences = [];
    const biggestAgreements = [];
    
    Object.entries(VALUE_AXES).forEach(([axisId, axis]) => {
        const val1 = values1[axisId] || 50;
        const val2 = values2[axisId] || 50;
        const diff = Math.abs(val1 - val2);
        
        totalDiff += diff;
        count++;
        maxSingleDiff = Math.max(maxSingleDiff, diff);
        
        // Count conflict/agreement levels
        if (diff >= 50) {
            extremeConflicts++;
            biggestDifferences.push({ axis, diff, val1, val2 });
        } else if (diff >= 35) {
            strongConflicts++;
            biggestDifferences.push({ axis, diff, val1, val2 });
        }
        
        if (diff <= 15) {
            strongAgreements++;
            biggestAgreements.push({ axis, diff, val1, val2 });
        }
    });
    
    const avgDiff = count > 0 ? totalDiff / count : 50;
    
    // Calculate base compatibility
    let compatibility = Math.round(100 - avgDiff);
    
    // Apply penalties for extreme conflicts
    if (extremeConflicts >= 3) {
        compatibility -= 30;  // Fundamental opposition
    } else if (extremeConflicts >= 2) {
        compatibility -= 20;  // Major opposition
    } else if (extremeConflicts >= 1) {
        compatibility -= 12;  // Significant tension
    }
    
    // Apply smaller penalties for strong conflicts
    if (strongConflicts >= 3) {
        compatibility -= 10;
    } else if (strongConflicts >= 2) {
        compatibility -= 5;
    }
    
    // Bonus for strong agreements (smaller than penalties)
    if (strongAgreements >= 4) {
        compatibility += 8;
    } else if (strongAgreements >= 3) {
        compatibility += 4;
    }
    
    // If there's one massive disagreement (70+), it dominates
    if (maxSingleDiff >= 70) {
        compatibility = Math.min(compatibility, 35);
    } else if (maxSingleDiff >= 60) {
        compatibility = Math.min(compatibility, 45);
    }
    
    // Clamp to 0-100
    compatibility = Math.max(0, Math.min(100, compatibility));
    
    return {
        compatibility,
        avgDiff,
        extremeConflicts,
        strongConflicts,
        strongAgreements,
        maxSingleDiff,
        biggestDifferences: biggestDifferences.sort((a, b) => b.diff - a.diff).slice(0, 3),
        biggestAgreements: biggestAgreements.sort((a, b) => a.diff - b.diff).slice(0, 3)
    };
}
function getRelationshipLabel(compatibility, extremeConflicts = 0, strongAgreements = 0) {
    if (compatibility >= 85) return { label: 'Natural Allies', type: 'ally', icon: '💚' };
    if (compatibility >= 77) return { label: 'Strong Partners', type: 'ally', icon: '🤝' };
    if (compatibility >= 70) return { label: 'Friendly Relations', type: 'ally', icon: '😊' };
    
    if (compatibility <= 15) return { label: 'Mortal Enemies', type: 'rival', icon: '💀' };
    if (compatibility <= 25) return { label: 'Bitter Rivals', type: 'rival', icon: '⚔️' };
    if (compatibility <= 35) return { label: 'Opposed', type: 'rival', icon: '😠' };
    
    // Neutral range with nuance
    if (extremeConflicts > 0 && strongAgreements > 0) {
        return { label: 'Tense Neutrality', type: 'neutral', icon: '😬' };
    }
    if (strongAgreements >= 3) {
        return { label: 'Cordial', type: 'neutral', icon: '🙂' };
    }
    return { label: 'Indifferent', type: 'neutral', icon: '😐' };
}

const VALUE_AXES = {
    tradition_innovation: {
        id: 'tradition_innovation',
        name: 'Cultural Outlook',
        leftLabel: 'Traditionalist',
        rightLabel: 'Innovative',
        leftIcon: '🏛️',
        rightIcon: '🔬',
        leftColor: '#8b4513',
        rightColor: '#06b6d4',
        description: 'How open is the society to new ideas and change?',
        leftDesc: 'Values heritage, customs, proven methods, and ancestral wisdom.',
        rightDesc: 'Embraces new ideas, experimentation, and progress.'
    },
    centralization: {
        id: 'centralization',
        name: 'Governance Structure',
        leftLabel: 'Centralized',
        rightLabel: 'Decentralized',
        leftIcon: '👑',
        rightIcon: '🤝',
        leftColor: '#7c3aed',
        rightColor: '#22c55e',
        description: 'How is power distributed within the society?',
        leftDesc: 'Power concentrated in single authority or small ruling body.',
        rightDesc: 'Power distributed among many groups, regions, or individuals.'
    },
    magic_technology: {
        id: 'magic_technology',
        name: 'Power Source',
        leftLabel: 'Arcane',
        rightLabel: 'Martial',
        leftIcon: '✨',
        rightIcon: '⚔️',
        leftColor: '#a855f7',
        rightColor: '#ef4444',
        description: 'Primary source of military and societal power.',
        leftDesc: 'Relies on magic, mystical arts, and supernatural forces.',
        rightDesc: 'Relies on weapons, physical training, and warfare technology.'
    },
    militarism: {
        id: 'militarism',
        name: 'War Stance',
        leftLabel: 'Militaristic',
        rightLabel: 'Pacifist',
        leftIcon: '🗡️',
        rightIcon: '🕊️',
        leftColor: '#dc2626',
        rightColor: '#60a5fa',
        description: 'Attitude towards warfare and military strength.',
        leftDesc: 'War is honorable, strength through arms, conquest-oriented.',
        rightDesc: 'Prefers diplomacy, trade, and peaceful resolution.'
    },
    foreign_policy: {
        id: 'foreign_policy',
        name: 'Foreign Policy',
        leftLabel: 'Isolationist',
        rightLabel: 'Expansionist',
        leftIcon: '🏔️',
        rightIcon: '🌍',
        leftColor: '#64748b',
        rightColor: '#f59e0b',
        description: 'Approach to foreign relations and territorial ambitions.',
        leftDesc: 'Focuses inward, minimal foreign entanglement, defensive.',
        rightDesc: 'Seeks to grow influence, acquire territory, project power.'
    },
    religion_state: {
        id: 'religion_state',
        name: 'Religious Influence',
        leftLabel: 'Theocratic',
        rightLabel: 'Secular',
        leftIcon: '⛪',
        rightIcon: '⚖️',
        leftColor: '#eab308',
        rightColor: '#6366f1',
        description: 'Role of religion in governance and daily life.',
        leftDesc: 'Religious authority guides law, politics, and society.',
        rightDesc: 'Separation of faith and state, rational governance.'
    },
    collectivism: {
        id: 'collectivism',
        name: 'Social Priority',
        leftLabel: 'Collectivist',
        rightLabel: 'Individualist',
        leftIcon: '👥',
        rightIcon: '👤',
        leftColor: '#ec4899',
        rightColor: '#14b8a6',
        description: 'Balance between community needs and individual rights.',
        leftDesc: 'Group welfare over individual desires, shared resources.',
        rightDesc: 'Personal freedom, individual achievement, self-reliance.'
    },
    social_mobility: {
        id: 'social_mobility',
        name: 'Social Structure',
        leftLabel: 'Aristocratic',
        rightLabel: 'Meritocratic',
        leftIcon: '🎭',
        rightIcon: '📈',
        leftColor: '#be185d',
        rightColor: '#10b981',
        description: 'How is status and power determined?',
        leftDesc: 'Birth, bloodline, and hereditary titles determine status.',
        rightDesc: 'Achievement, skill, and effort determine advancement.'
    },
    economy_type: {
        id: 'economy_type',
        name: 'Economic Base',
        leftLabel: 'Agrarian',
        rightLabel: 'Industrial',
        leftIcon: '🌾',
        rightIcon: '🏭',
        leftColor: '#84cc16',
        rightColor: '#78716c',
        description: 'Primary economic activity and development level.',
        leftDesc: 'Agriculture, animal husbandry, land-based wealth.',
        rightDesc: 'Manufacturing, trade networks, urban production.'
    },
    borders: {
        id: 'borders',
        name: 'Border Policy',
        leftLabel: 'Closed',
        rightLabel: 'Open',
        leftIcon: '🚫',
        rightIcon: '🚪',
        leftColor: '#991b1b',
        rightColor: '#2563eb',
        description: 'Attitude towards outsiders, trade, and immigration.',
        leftDesc: 'Restricted access, protective tariffs, cultural purity.',
        rightDesc: 'Free trade, welcomes outsiders, cultural exchange.'
    },
    nature_development: {
        id: 'nature_development',
        name: 'Environment',
        leftLabel: 'Naturalist',
        rightLabel: 'Urban',
        leftIcon: '🌲',
        rightIcon: '🏙️',
        leftColor: '#166534',
        rightColor: '#475569',
        description: 'Relationship with the natural world.',
        leftDesc: 'Harmony with nature, minimal environmental impact.',
        rightDesc: 'Urban development, resource exploitation, city-focused.'
    },
    knowledge: {
        id: 'knowledge',
        name: 'Knowledge Access',
        leftLabel: 'Secretive',
        rightLabel: 'Open',
        leftIcon: '🔒',
        rightIcon: '📚',
        leftColor: '#1e1b4b',
        rightColor: '#0ea5e9',
        description: 'How is knowledge and information shared?',
        leftDesc: 'Knowledge hoarded, mysteries protected, need-to-know basis.',
        rightDesc: 'Education for all, libraries, shared learning.'
    }
};
// ============================================
// KEYWORD-BASED VALUE MAPPINGS
// Values are now MORE EXTREME to create real differences
// ============================================

const KEYWORD_VALUE_MODIFIERS = {
    // ==========================================
    // GOVERNMENT/STRUCTURE - Strong modifiers
    // ==========================================
    'empire': {
        centralization: -45,
        tradition_innovation: -30,
        militarism: -40,
        foreign_policy: 40,
        social_mobility: -40,
        collectivism: -30,
        borders: -20
    },
    'kingdom': {
        centralization: -35,
        tradition_innovation: -25,
        social_mobility: -45,
        religion_state: -20,
        collectivism: -20
    },
    'republic': {
        centralization: 35,
        social_mobility: 40,
        collectivism: 25,
        religion_state: 30,
        tradition_innovation: 20
    },
    'federation': {
        centralization: 45,
        collectivism: 30,
        borders: 25,
        social_mobility: 30
    },
    'confederacy': {
        centralization: 45,
        collectivism: 20,
        militarism: 15
    },
    'council': {
        centralization: 35,
        social_mobility: 30,
        knowledge: 30,
        collectivism: 20
    },
    'theocracy': {
        religion_state: -50,
        tradition_innovation: -40,
        centralization: -30,
        knowledge: -35,
        social_mobility: -25
    },
    'tribe': {
        centralization: 40,
        tradition_innovation: -35,
        nature_development: -40,
        economy_type: -45,
        collectivism: -30
    },
    'tribal': {
        centralization: 35,
        tradition_innovation: -30,
        nature_development: -35,
        economy_type: -40
    },
    'horde': {
        militarism: -50,
        centralization: 25,
        tradition_innovation: -25,
        foreign_policy: 45,
        nature_development: -30,
        social_mobility: 35
    },
    'clan': {
        centralization: 30,
        tradition_innovation: -30,
        collectivism: -35,
        social_mobility: -20
    },
    'dynasty': {
        social_mobility: -50,
        tradition_innovation: -35,
        centralization: -35
    },
    'commune': {
        collectivism: -50,
        centralization: 45,
        social_mobility: 40,
        economy_type: -25
    },
    'collective': {
        collectivism: -50,
        centralization: 40,
        social_mobility: 35
    },
    'academy': {
        knowledge: 50,
        tradition_innovation: 40,
        social_mobility: 40,
        magic_technology: -20
    },
    'school': {
        knowledge: 50,
        tradition_innovation: 35,
        social_mobility: 45,
        militarism: 30
    },
    'university': {
        knowledge: 50,
        tradition_innovation: 40,
        social_mobility: 40,
        religion_state: 30
    },
    'guild': {
        economy_type: 30,
        social_mobility: 35,
        centralization: 30,
        knowledge: 25
    },
    
    // ==========================================
    // MILITARY - Very strong modifiers
    // ==========================================
    'military': {
        militarism: -45,
        centralization: -25,
        magic_technology: 35,
        foreign_policy: 20
    },
    'army': {
        militarism: -40,
        magic_technology: 40,
        centralization: -20
    },
    'legion': {
        militarism: -45,
        centralization: -30,
        tradition_innovation: -25,
        magic_technology: 35
    },
    'order': {
        centralization: -25,
        tradition_innovation: -30,
        religion_state: -25,
        militarism: -30,
        collectivism: -25
    },
    'knights': {
        militarism: -35,
        tradition_innovation: -30,
        social_mobility: -30,
        magic_technology: 40,
        religion_state: -20
    },
    'warrior': {
        militarism: -45,
        magic_technology: 45,
        tradition_innovation: -20
    },
    'guard': {
        militarism: -30,
        centralization: -25,
        tradition_innovation: -15
    },
    'mercenary': {
        militarism: -30,
        collectivism: 45,
        borders: 35,
        social_mobility: 30
    },
    'raiders': {
        militarism: -45,
        foreign_policy: 40,
        borders: -30,
        collectivism: 35,
        centralization: 35
    },
    'pirates': {
        militarism: -35,
        borders: 40,
        collectivism: 40,
        centralization: 40,
        foreign_policy: 30
    },
    'bandits': {
        militarism: -30,
        centralization: 45,
        collectivism: 45,
        borders: -25
    },
    'rebel': {
        centralization: 40,
        tradition_innovation: 25,
        foreign_policy: 25,
        militarism: -25
    },
    'rebellion': {
        centralization: 45,
        tradition_innovation: 30,
        militarism: -20
    },
    'resistance': {
        centralization: 35,
        militarism: -25,
        collectivism: -20
    },
    'revolutionary': {
        tradition_innovation: 45,
        centralization: 40,
        social_mobility: 35
    },
    
    // ==========================================
    // RELIGIOUS/SPIRITUAL - Strong modifiers
    // ==========================================
    'church': {
        religion_state: -50,
        tradition_innovation: -35,
        centralization: -30,
        knowledge: -25
    },
    'temple': {
        religion_state: -45,
        tradition_innovation: -30,
        knowledge: -20,
        nature_development: -15
    },
    'cult': {
        religion_state: -50,
        centralization: -35,
        knowledge: -40,
        borders: -35,
        collectivism: -30
    },
    'holy': {
        religion_state: -45,
        tradition_innovation: -30,
        militarism: -20
    },
    'sacred': {
        religion_state: -40,
        nature_development: -30,
        tradition_innovation: -25
    },
    'divine': {
        religion_state: -45,
        social_mobility: -25,
        centralization: -20
    },
    'blessed': {
        religion_state: -35,
        nature_development: -20
    },
    'inquisition': {
        religion_state: -50,
        centralization: -40,
        borders: -45,
        knowledge: -35,
        militarism: -30
    },
    'monastery': {
        religion_state: -40,
        knowledge: 30,
        militarism: 35,
        nature_development: -25
    },
    'shrine': {
        religion_state: -35,
        nature_development: -25
    },
    'druid': {
        nature_development: -50,
        religion_state: -30,
        magic_technology: -40,
        tradition_innovation: -30
    },
    'monk': {
        religion_state: -35,
        militarism: 25,
        knowledge: 30,
        collectivism: -25
    },
    
    // ==========================================
    // MAGIC/ARCANE - Very strong modifiers
    // ==========================================
    'magic': {
        magic_technology: -50,
        knowledge: 35,
        tradition_innovation: 15
    },
    'magical': {
        magic_technology: -45,
        knowledge: 30
    },
    'mage': {
        magic_technology: -50,
        knowledge: 40,
        social_mobility: 30
    },
    'wizard': {
        magic_technology: -50,
        knowledge: 45,
        centralization: 20
    },
    'sorcerer': {
        magic_technology: -50,
        knowledge: 30,
        collectivism: 35
    },
    'witch': {
        magic_technology: -45,
        centralization: 40,
        nature_development: -30
    },
    'arcane': {
        magic_technology: -50,
        knowledge: 40
    },
    'mystic': {
        magic_technology: -45,
        religion_state: -25,
        knowledge: 25
    },
    'enchant': {
        magic_technology: -40,
        economy_type: 20
    },
    'coven': {
        magic_technology: -45,
        centralization: 35,
        collectivism: -30,
        borders: -30
    },
    'elves': {
        magic_technology: -40,
        nature_development: -45,
        tradition_innovation: -35,
        social_mobility: -25
    },
    'elf': {
        magic_technology: -35,
        nature_development: -40,
        tradition_innovation: -30
    },
    'elven': {
        magic_technology: -40,
        nature_development: -45,
        tradition_innovation: -35
    },
    
    // ==========================================
    // TECHNOLOGY/SCIENCE - Very strong modifiers
    // ==========================================
    'science': {
        tradition_innovation: 50,
        magic_technology: 45,
        knowledge: 45,
        religion_state: 35
    },
    'scientific': {
        tradition_innovation: 45,
        magic_technology: 40,
        knowledge: 40
    },
    'technology': {
        tradition_innovation: 50,
        magic_technology: 45,
        economy_type: 35
    },
    'tech': {
        tradition_innovation: 45,
        magic_technology: 40,
        economy_type: 30
    },
    'engineer': {
        tradition_innovation: 40,
        magic_technology: 35,
        economy_type: 30,
        knowledge: 25
    },
    'industrial': {
        economy_type: 50,
        tradition_innovation: 35,
        nature_development: 45
    },
    'factory': {
        economy_type: 50,
        nature_development: 40,
        tradition_innovation: 25
    },
    'mechanical': {
        magic_technology: 45,
        tradition_innovation: 40
    },
    'cyber': {
        tradition_innovation: 50,
        magic_technology: 50,
        economy_type: 35
    },
    'cybernetic': {
        tradition_innovation: 50,
        magic_technology: 50,
        economy_type: 30
    },
    'robot': {
        magic_technology: 50,
        tradition_innovation: 45
    },
    'android': {
        magic_technology: 50,
        tradition_innovation: 45
    },
    'research': {
        knowledge: 50,
        tradition_innovation: 40
    },
    'laboratory': {
        knowledge: 45,
        tradition_innovation: 45,
        magic_technology: 30
    },
    'hacktivist': {
        tradition_innovation: 45,
        centralization: 45,
        borders: 40,
        knowledge: 40
    },
    'data': {
        tradition_innovation: 40,
        knowledge: 40,
        economy_type: 30
    },
    'internet': {
        tradition_innovation: 45,
        borders: 50,
        knowledge: 45,
        centralization: 40
    },
    'digital': {
        tradition_innovation: 45,
        magic_technology: 40,
        borders: 35
    },
    
    // ==========================================
    // TRADE/ECONOMIC - Strong modifiers
    // ==========================================
    'merchant': {
        economy_type: 40,
        borders: 45,
        collectivism: 40,
        militarism: 35
    },
    'trade': {
        borders: 45,
        economy_type: 35,
        militarism: 30
    },
    'trading': {
        borders: 40,
        economy_type: 30
    },
    'trader': {
        borders: 40,
        economy_type: 30,
        collectivism: 30
    },
    'company': {
        economy_type: 35,
        collectivism: 35,
        centralization: 25,
        social_mobility: 25
    },
    'corporation': {
        economy_type: 45,
        collectivism: 40,
        centralization: 30
    },
    'cartel': {
        economy_type: 35,
        centralization: 35,
        borders: -25
    },
    'syndicate': {
        centralization: 30,
        borders: 30,
        collectivism: 30,
        knowledge: -30
    },
    'bank': {
        economy_type: 40,
        centralization: -25
    },
    'market': {
        borders: 40,
        economy_type: 30
    },
    'wario': {
        economy_type: 40,
        collectivism: 50,
        militarism: -20,
        borders: 30
    },
    
    // ==========================================
    // NATURE/ENVIRONMENT - Strong modifiers
    // ==========================================
    'forest': {
        nature_development: -50,
        tradition_innovation: -25,
        economy_type: -35
    },
    'wood': {
        nature_development: -40,
        economy_type: -30
    },
    'grove': {
        nature_development: -45,
        religion_state: -25
    },
    'nature': {
        nature_development: -50,
        tradition_innovation: -30
    },
    'wild': {
        nature_development: -45,
        centralization: 35,
        tradition_innovation: -25
    },
    'feral': {
        nature_development: -50,
        centralization: 45
    },
    'beast': {
        nature_development: -40,
        militarism: -30
    },
    'animal': {
        nature_development: -35,
        centralization: 25
    },
    'mountain': {
        nature_development: -35,
        foreign_policy: -30,
        borders: -30
    },
    'sea': {
        borders: 35,
        foreign_policy: 30,
        economy_type: 25
    },
    'ocean': {
        borders: 40,
        foreign_policy: 35
    },
    'desert': {
        nature_development: -30,
        foreign_policy: -25,
        economy_type: -30,
        borders: -25
    },
    'swamp': {
        nature_development: -40,
        foreign_policy: -35,
        borders: -35
    },
    'island': {
        foreign_policy: -30,
        borders: -25
    },
    'flower': {
        nature_development: -40,
        militarism: 35,
        tradition_innovation: -15
    },
    'yoshi': {
        nature_development: -35,
        collectivism: -30,
        militarism: 30
    },
    
    // ==========================================
    // RACE/SPECIES - Strong modifiers
    // ==========================================
    'dwarf': {
        tradition_innovation: -30,
        economy_type: 40,
        nature_development: 35,
        magic_technology: 30,
        centralization: -25
    },
    'dwarven': {
        tradition_innovation: -35,
        economy_type: 45,
        nature_development: 40
    },
    'orc': {
        militarism: -50,
        tradition_innovation: -20,
        magic_technology: 45,
        centralization: 25
    },
    'orcish': {
        militarism: -50,
        magic_technology: 45
    },
    'greenskin': {
        militarism: -45,
        magic_technology: 40,
        centralization: 30
    },
    'goblin': {
        tradition_innovation: 30,
        centralization: 35,
        collectivism: 30
    },
    'troll': {
        militarism: -35,
        tradition_innovation: -30
    },
    'undead': {
        religion_state: -30,
        nature_development: 35,
        tradition_innovation: -35,
        militarism: -30
    },
    'vampire': {
        social_mobility: -45,
        tradition_innovation: -30,
        centralization: -35,
        knowledge: 25
    },
    'demon': {
        religion_state: -40,
        militarism: -40,
        centralization: -30
    },
    'dragon': {
        centralization: -45,
        social_mobility: -40,
        militarism: -35,
        magic_technology: -30
    },
    'halfling': {
        militarism: 40,
        nature_development: -25,
        collectivism: -30,
        economy_type: -20
    },
    'gnome': {
        tradition_innovation: 35,
        knowledge: 35,
        economy_type: 25
    },
    'lizard': {
        tradition_innovation: -35,
        nature_development: -35,
        magic_technology: -30
    },
    'skaven': {
        tradition_innovation: 30,
        centralization: 35,
        collectivism: -35,
        borders: -40,
        knowledge: -30
    },
    'chaos': {
        centralization: 45,
        tradition_innovation: 30,
        religion_state: -35,
        militarism: -40
    },
    'void': {
        magic_technology: -40,
        knowledge: -35,
        religion_state: -30,
        foreign_policy: -30
    },
    'cosmic': {
        magic_technology: -35,
        knowledge: 30,
        tradition_innovation: 25
    },
    'toad': {
        nature_development: -30,
        collectivism: -25
    },
    'koopa': {
        militarism: -35,
        centralization: -30,
        tradition_innovation: -20
    },
    'mushroom': {
        nature_development: -30,
        tradition_innovation: -20,
        collectivism: -25
    },
    'pony': {
        collectivism: -30,
        militarism: 30,
        nature_development: -25,
        magic_technology: -25
    },
    'changeling': {
        borders: -40,
        centralization: -35,
        collectivism: -40,
        knowledge: -35
    },
    'griffon': {
        militarism: -25,
        social_mobility: -30,
        tradition_innovation: -20
    },
    
    // ==========================================
    // POLITICAL STANCE - Strong modifiers
    // ==========================================
    'free': {
        centralization: 45,
        collectivism: 40,
        borders: 35
    },
    'freedom': {
        centralization: 50,
        collectivism: 45
    },
    'liberty': {
        centralization: 45,
        collectivism: 45,
        borders: 30
    },
    'liberation': {
        centralization: 40,
        foreign_policy: 30
    },
    'liberated': {
        centralization: 45,
        collectivism: 40
    },
    'royal': {
        social_mobility: -45,
        centralization: -35,
        tradition_innovation: -30
    },
    'imperial': {
        centralization: -45,
        foreign_policy: 40,
        social_mobility: -35
    },
    'noble': {
        social_mobility: -40,
        tradition_innovation: -25
    },
    'aristocrat': {
        social_mobility: -50,
        centralization: -25
    },
    'democratic': {
        centralization: 45,
        social_mobility: 40,
        collectivism: 30
    },
    'populist': {
        centralization: 35,
        social_mobility: 35
    },
    'loyalist': {
        centralization: -35,
        tradition_innovation: -30,
        collectivism: -30
    },
    'regency': {
        centralization: -30,
        social_mobility: -35,
        tradition_innovation: -25
    },
    
    // ==========================================
    // ISOLATIONIST/EXPANSIONIST - Strong modifiers
    // ==========================================
    'isolat': {
        foreign_policy: -50,
        borders: -45
    },
    'hidden': {
        foreign_policy: -45,
        borders: -50,
        knowledge: -35
    },
    'secret': {
        knowledge: -50,
        borders: -40,
        centralization: -30
    },
    'shadow': {
        knowledge: -45,
        borders: -35,
        centralization: -25
    },
    'conquest': {
        foreign_policy: 50,
        militarism: -45
    },
    'conquer': {
        foreign_policy: 45,
        militarism: -40
    },
    'dominion': {
        foreign_policy: 40,
        centralization: -35
    },
    'expansion': {
        foreign_policy: 45
    },
    'colonial': {
        foreign_policy: 45,
        borders: 30
    },
    
    // ==========================================
    // PEACEFUL/DIPLOMATIC - Strong modifiers
    // ==========================================
    'peace': {
        militarism: 50,
        foreign_policy: -15,
        borders: 30
    },
    'peaceful': {
        militarism: 45,
        borders: 25
    },
    'harmony': {
        militarism: 40,
        collectivism: -25,
        nature_development: -30
    },
    'diplomatic': {
        militarism: 35,
        borders: 35,
        foreign_policy: 25
    },
    'alliance': {
        borders: 35,
        foreign_policy: 25
    },
    'united': {
        collectivism: -35,
        centralization: -25
    },
    'union': {
        collectivism: -40,
        centralization: 25
    },
    'general': {
        centralization: 30,
        militarism: -20
    },
    'student': {
        knowledge: 40,
        tradition_innovation: 30,
        social_mobility: 35
    },
    
    // ==========================================
    // CRIMINAL/UNDERWORLD - Strong modifiers
    // ==========================================
    'underworld': {
        knowledge: -45,
        borders: -35,
        centralization: 35,
        collectivism: 40
    },
    'gang': {
        centralization: 40,
        collectivism: 35,
        militarism: -25,
        knowledge: -30
    },
    'thief': {
        collectivism: 45,
        borders: 30,
        centralization: 35
    },
    'assassin': {
        knowledge: -40,
        centralization: 30,
        militarism: -30
    },
    'smuggler': {
        borders: 40,
        centralization: 35,
        collectivism: 35
    },
    'criminal': {
        centralization: 40,
        collectivism: 40,
        knowledge: -30
    },
    'mafia': {
        centralization: -25,
        knowledge: -35,
        collectivism: 30
    },
    
    // ==========================================
    // MISCELLANEOUS - Strong modifiers
    // ==========================================
    'ancient': {
        tradition_innovation: -45,
        knowledge: 25
    },
    'old': {
        tradition_innovation: -35
    },
    'eternal': {
        tradition_innovation: -40
    },
    'new': {
        tradition_innovation: 35
    },
    'modern': {
        tradition_innovation: 45,
        economy_type: 30
    },
    'progressive': {
        tradition_innovation: 50,
        social_mobility: 35
    },
    'conservative': {
        tradition_innovation: -40,
        social_mobility: -25
    },
    'orthodox': {
        tradition_innovation: -45,
        religion_state: -35
    },
    'reformed': {
        tradition_innovation: 30,
        religion_state: 25
    },
    'elite': {
        social_mobility: -40,
        centralization: -30
    },
    'chosen': {
        religion_state: -35,
        social_mobility: -30
    },
    'supreme': {
        centralization: -40,
        social_mobility: -35
    },
    'grand': {
        centralization: -30,
        social_mobility: -25
    },
    'great': {
        centralization: -25
    },
    'dark': {
        religion_state: -25,
        knowledge: -30
    },
    'light': {
        religion_state: -25,
        knowledge: 25
    },
    'crimson': {
        militarism: -30
    },
    'iron': {
        militarism: -35,
        magic_technology: 40,
        tradition_innovation: -20
    },
    'steel': {
        magic_technology: 45,
        economy_type: 30
    },
    'golden': {
        economy_type: 35,
        social_mobility: -25
    },
    'silver': {
        economy_type: 30
    },
    'blood': {
        militarism: -35,
        religion_state: -25
    },
    'death': {
        militarism: -40
    },
    'war': {
        militarism: -50,
        foreign_policy: 35
    },
    'battle': {
        militarism: -40
    },
    'storm': {
        militarism: -30,
        foreign_policy: 25
    },
    'flame': {
        militarism: -30,
        tradition_innovation: 15
    },
    'fire': {
        militarism: -25
    },
    'frost': {
        foreign_policy: -30,
        nature_development: -25
    },
    'ice': {
        foreign_policy: -25
    },
    'star': {
        magic_technology: -30,
        tradition_innovation: 25
    },
    'starlight': {
        magic_technology: -35,
        nature_development: -25
    },
    'moon': {
        nature_development: -30,
        magic_technology: -25
    },
    'sun': {
        religion_state: -25,
        centralization: -20
    },
    'abyssal': {
        nature_development: 30,
        magic_technology: -35,
        religion_state: -30
    },
    'predator': {
        militarism: -35,
        nature_development: -25
    },
    'prey': {
        militarism: 35,
        collectivism: -30
    },
    'ranger': {
        nature_development: -40,
        militarism: -20,
        centralization: 25
    },
    'trainer': {
        nature_development: -25,
        knowledge: 30,
        collectivism: 20
    },
    'team': {
        collectivism: -30,
        centralization: -20
    },
    'ratchet': {
        tradition_innovation: 35,
        magic_technology: 35,
        economy_type: 25
    },
    'oathbound': {
        religion_state: -30,
        tradition_innovation: -25,
        centralization: -25
    },
    'judge': {
        centralization: -30,
        religion_state: -20
    },
    'investigator': {
        knowledge: 35,
        centralization: 25
    },
    'detective': {
        knowledge: 35,
        centralization: 20
    },
    'unchained': {
        centralization: 45,
        collectivism: 40,
        tradition_innovation: 25
    },
    'liberated': {
        centralization: 45,
        collectivism: 40
    },
    'custodian': {
        tradition_innovation: -30,
        knowledge: 30,
        centralization: -25
    },
    'weaver': {
        magic_technology: -30,
        tradition_innovation: -20
    },
    'drifter': {
        centralization: 45,
        foreign_policy: -30,
        borders: 35
    },
    'pioneer': {
        foreign_policy: 35,
        tradition_innovation: 30,
        borders: 30
    },
    'spark': {
        tradition_innovation: 35,
        centralization: 30
    },
    'jester': {
        centralization: 40,
        tradition_innovation: 25,
        religion_state: 30
    },
    'artisan': {
        economy_type: 25,
        tradition_innovation: -15,
        social_mobility: 25
    },
    'fist': {
        militarism: -40,
        centralization: -25
    },
    'hand': {
        knowledge: -30,
        centralization: -20
    },
    'fleet': {
        militarism: -30,
        borders: 30,
        foreign_policy: 25
    },
    'crew': {
        centralization: 35,
        collectivism: -25
    }
};
// ============================================
// FACTION VALUE DATA
// Values range from 0-100 (0 = full left, 100 = full right, 50 = neutral)
// ============================================

const FACTION_VALUES = {
    'imperium': {
        tradition_innovation: 15,
        centralization: 10,
        magic_technology: 75,
        militarism: 15,
        foreign_policy: 85,
        religion_state: 20,
        collectivism: 30,
        social_mobility: 20,
        economy_type: 70,
        borders: 35,
        nature_development: 80,
        knowledge: 25
    },
    'elven_dominion': {
        tradition_innovation: 20,
        centralization: 40,
        magic_technology: 15,
        militarism: 60,
        foreign_policy: 25,
        religion_state: 35,
        collectivism: 45,
        social_mobility: 25,
        economy_type: 20,
        borders: 30,
        nature_development: 10,
        knowledge: 55
    },
    'merchant_league': {
        tradition_innovation: 70,
        centralization: 75,
        magic_technology: 50,
        militarism: 75,
        foreign_policy: 80,
        religion_state: 85,
        collectivism: 90,
        social_mobility: 85,
        economy_type: 85,
        borders: 95,
        nature_development: 65,
        knowledge: 80
    },
    'orcish_horde': {
        tradition_innovation: 35,
        centralization: 30,
        magic_technology: 90,
        militarism: 5,
        foreign_policy: 90,
        religion_state: 40,
        collectivism: 25,
        social_mobility: 70,
        economy_type: 25,
        borders: 20,
        nature_development: 45,
        knowledge: 15
    },
    'mage_council': {
        tradition_innovation: 55,
        centralization: 55,
        magic_technology: 5,
        militarism: 50,
        foreign_policy: 40,
        religion_state: 60,
        collectivism: 60,
        social_mobility: 75,
        economy_type: 55,
        borders: 45,
        nature_development: 50,
        knowledge: 90
    },
    'theocracy': {
        tradition_innovation: 10,
        centralization: 15,
        magic_technology: 30,
        militarism: 35,
        foreign_policy: 45,
        religion_state: 5,
        collectivism: 20,
        social_mobility: 30,
        economy_type: 35,
        borders: 25,
        nature_development: 40,
        knowledge: 30
    },
    'free_cities': {
        tradition_innovation: 80,
        centralization: 90,
        magic_technology: 55,
        militarism: 65,
        foreign_policy: 50,
        religion_state: 80,
        collectivism: 85,
        social_mobility: 90,
        economy_type: 80,
        borders: 85,
        nature_development: 70,
        knowledge: 85
    },
    'nomad_tribes': {
        tradition_innovation: 30,
        centralization: 80,
        magic_technology: 60,
        militarism: 55,
        foreign_policy: 15,
        religion_state: 45,
        collectivism: 35,
        social_mobility: 60,
        economy_type: 10,
        borders: 70,
        nature_development: 5,
        knowledge: 40
    }
};

// ============================================
// STATE
// ============================================

let selectedAxis = 'tradition_innovation';
let sortOrder = 'left';
let comparisonFactions = [];
let viewMode = 'spectrum';

// ============================================
// DATA FUNCTIONS
// ============================================

// ============================================
// ALLIANCE TYPE CALCULATION - DYNAMIC
// ============================================

/**
 * Calculate alliance type based on member POIs and building types
 */
function calculateAllianceType(members) {
    if (!members || members.length === 0) return 'military_pact';
    
    // Count building types across all members
    const buildingCounts = {
        military: 0,      // fortress, castle, barracks, watchtower
        economic: 0,      // market, mine, farm, port, trade_post
        naval: 0,         // port, shipyard, harbor
        research: 0,      // academy, library, mages_tower, laboratory
        cultural: 0,      // temple, shrine, monument, theater
        political: 0      // capital, palace, embassy, court
    };
    
    const buildingTypeMap = {
        // Military
        'fortress': 'military', 'castle': 'military', 'barracks': 'military',
        'watchtower': 'military', 'fort': 'military', 'outpost': 'military',
        'siege_camp': 'military', 'garrison': 'military', 'stronghold': 'military',
        
        // Economic
        'market': 'economic', 'mine': 'economic', 'farm': 'economic',
        'trade_post': 'economic', 'warehouse': 'economic', 'bank': 'economic',
        'workshop': 'economic', 'factory': 'economic', 'quarry': 'economic',
        
        // Naval
        'port': 'naval', 'shipyard': 'naval', 'harbor': 'naval',
        'dock': 'naval', 'lighthouse': 'naval', 'naval_base': 'naval',
        
        // Research
        'academy': 'research', 'library': 'research', 'mages_tower': 'research',
        'laboratory': 'research', 'university': 'research', 'observatory': 'research',
        'school': 'research', 'archive': 'research',
        
        // Cultural
        'temple': 'cultural', 'shrine': 'cultural', 'monument': 'cultural',
        'theater': 'cultural', 'monastery': 'cultural', 'cathedral': 'cultural',
        'arena': 'cultural', 'colosseum': 'cultural',
        
        // Political
        'capital': 'political', 'capital_city': 'political', 'palace': 'political',
        'embassy': 'political', 'court': 'political', 'senate': 'political',
        'throne_room': 'political'
    };
    
    // Count POIs by type for all members
    members.forEach(memberId => {
        if (!MAP_DATA) return;
        
        Object.entries(MAP_DATA).forEach(([regionId, region]) => {
            if (!regionId.endsWith('_full')) return;
            const pois = region.pointsOfInterest || [];
            
            pois.forEach(poi => {
                if (poi.factionId !== memberId) return;
                
                const poiType = (poi.type || '').toLowerCase().replace(/[\s-]/g, '_');
                const category = buildingTypeMap[poiType];
                
                if (category) {
                    buildingCounts[category]++;
                } else {
                    // Default categorization based on stats
                    if ((poi.military_strength || 0) > (poi.economic_value || 0)) {
                        buildingCounts.military++;
                    } else if ((poi.economic_value || 0) > 0) {
                        buildingCounts.economic++;
                    }
                }
            });
        });
    });
    
    // Calculate total and percentages
    const total = Object.values(buildingCounts).reduce((a, b) => a + b, 0) || 1;
    const percentages = {};
    Object.entries(buildingCounts).forEach(([key, val]) => {
        percentages[key] = (val / total) * 100;
    });
    
    // Determine alliance type based on dominant categories
    const dominant = Object.entries(percentages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2);
    
    const [primary, secondary] = dominant;
    
    // Decision tree for alliance type
    if (primary[0] === 'military' && primary[1] >= 40) {
        if (secondary && secondary[0] === 'political' && secondary[1] >= 20) {
            return 'hegemonic_bloc';
        }
        return 'military_pact';
    }
    
    if (primary[0] === 'economic' && primary[1] >= 35) {
        return 'economic_union';
    }
    
    if (primary[0] === 'naval' && primary[1] >= 25) {
        return 'naval_league';
    }
    
    if (primary[0] === 'research' && primary[1] >= 25) {
        return 'technology_pact';
    }
    
    if (primary[0] === 'cultural' && primary[1] >= 25) {
        return 'cultural_alliance';
    }
    
    if (primary[0] === 'political' && primary[1] >= 30) {
        return 'federation';
    }
    
    // Mixed - default to defensive coalition
    if (primary[1] < 30) {
        return 'defensive_coalition';
    }
    
    // Fallback
    return 'military_pact';
}

/**
 * Calculate member role based on power disparity
 */
function calculateMemberRoles(alliance) {
    const memberPowers = {};
    let maxPower = 0;
    let leaderId = null;
    
    alliance.members.forEach(memberId => {
        const stats = getFactionStats(memberId);
        const pois = getFactionTotalPOIs(memberId);
        const power = (stats.military * 2) + (stats.economic * 1.5) + (stats.political) + (pois * 5);
        memberPowers[memberId] = power;
        
        if (power > maxPower) {
            maxPower = power;
            leaderId = memberId;
        }
    });
    
    const roles = {};
    const avgPower = Object.values(memberPowers).reduce((a, b) => a + b, 0) / alliance.members.length;
    
    alliance.members.forEach(memberId => {
        const power = memberPowers[memberId];
        const ratio = power / maxPower;
        
        if (memberId === leaderId) {
            roles[memberId] = 'leader';
        } else if (ratio >= 0.7) {
            roles[memberId] = 'full_member';
        } else if (ratio >= 0.4) {
            roles[memberId] = 'full_member';
        } else if (ratio >= 0.2) {
            roles[memberId] = 'associate';
        } else if (ratio >= 0.1) {
            roles[memberId] = 'vassal';
        } else {
            roles[memberId] = 'puppet';
        }
    });
    
    return { roles, leaderId, memberPowers };
}

// ============================================
// VALUE RANDOMIZATION WITH SEED
// ============================================

/**
 * Seeded random number generator
 */
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

/**
 * Generate a stable seed from a string
 */
function stringToSeed(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

/**
 * Generate faction values with randomization
 */
function generateFactionValuesWithSeed(faction) {
    const values = {};
    const factionId = faction.id || faction.name || 'unknown';
    const baseSeed = stringToSeed(factionId);
    
    // Start with neutral values
    Object.keys(VALUE_AXES).forEach((axisId, index) => {
        values[axisId] = 50;
    });
    
    if (!faction) return values;
    
    // Gather text to analyze
    const textsToAnalyze = [
        faction.id || '',
        faction.name || '',
        faction.type || '',
        faction.description || '',
        faction.lore || '',
        faction.government || '',
        faction.culture || '',
        faction.religion || '',
        faction.primaryRace || '',
        faction.species || '',
        ...(faction.tags || [])
    ].join(' ').toLowerCase();
    
    // Track applied modifiers
    const appliedModifiers = {};
    Object.keys(VALUE_AXES).forEach(axisId => {
        appliedModifiers[axisId] = [];
    });
    
    // Check keywords and apply modifiers
    Object.entries(KEYWORD_VALUE_MODIFIERS).forEach(([keyword, modifiers]) => {
        const regex = new RegExp(`\\b${keyword}`, 'i');
        if (regex.test(textsToAnalyze)) {
            Object.entries(modifiers).forEach(([axisId, modifier]) => {
                if (VALUE_AXES[axisId]) {
                    appliedModifiers[axisId].push(modifier);
                }
            });
        }
    });
    
    // Calculate final values with randomization
    Object.entries(appliedModifiers).forEach(([axisId, mods], index) => {
        // Generate random offset for this faction/axis combination
        const axisSeed = baseSeed + index * 7919; // Use prime multiplier for variety
        const randomOffset = (seededRandom(axisSeed) - 0.5) * 20; // -10 to +10 random offset
        
        if (mods.length > 0) {
            const avgMod = mods.reduce((sum, m) => sum + m, 0) / mods.length;
            values[axisId] = Math.max(5, Math.min(95, Math.round(50 + avgMod + randomOffset)));
        } else {
            // No keywords - use larger random variance
            const noKeywordSeed = baseSeed + index * 3571;
            const variance = (seededRandom(noKeywordSeed) - 0.5) * 40; // -20 to +20
            values[axisId] = Math.max(10, Math.min(90, Math.round(50 + variance)));
        }
    });
    
    // Ensure minimum differentiation - check against other factions
    // Add faction-specific quirks based on name hash
    const quirks = Math.floor(seededRandom(baseSeed + 999) * 3) + 1; // 1-3 quirks
    const axisKeys = Object.keys(VALUE_AXES);
    
    for (let i = 0; i < quirks; i++) {
        const quirkSeed = baseSeed + i * 1337;
        const axisIndex = Math.floor(seededRandom(quirkSeed) * axisKeys.length);
        const axisId = axisKeys[axisIndex];
        const quirkAmount = (seededRandom(quirkSeed + 1) - 0.5) * 30; // -15 to +15 quirk
        
        values[axisId] = Math.max(5, Math.min(95, Math.round(values[axisId] + quirkAmount)));
    }
    
    return values;
}

// Update the getFactionValues function to use seeded randomization
function getFactionValues(factionId) {
    // Check preset values first
    if (FACTION_VALUES[factionId]) {
        return FACTION_VALUES[factionId];
    }
    
    const faction = getFaction(factionId);
    if (!faction) return generateDefaultValues();
    
    // Use seeded generation
    return generateFactionValuesWithSeed(faction);
}

// ============================================
// UNIFIED ALLIANCE CALCULATION
// ============================================



// ============================================
// UNIFIED RENDER - ALLIANCE MEMBER ROW
// ============================================

function renderAllianceMemberChip(memberId, alliance, showStats = false) {
    const member = getFaction(memberId);
    const role = alliance.memberRoles?.[memberId] || 'full_member';
    const roleInfo = MEMBER_ROLES[role] || MEMBER_ROLES.full_member;
    const isLeader = memberId === alliance.leader;
    const power = alliance.memberPowers?.[memberId] || 0;
    const stats = showStats ? getFactionStats(memberId) : null;
    
    return `
        <div class="member-chip ${role}" 
             data-faction="${memberId}"
             style="--member-color: ${member?.color || '#666'};"
             title="${member?.name || memberId} - ${roleInfo.name}">
            <span class="member-icon" style="background: ${member?.color || '#666'};">
                ${member?.icon || '❓'}
            </span>
            <span class="member-name">${member?.shortName || memberId}</span>
            ${isLeader ? '<span class="leader-crown">👑</span>' : ''}
            <span class="role-indicator" style="color: ${roleInfo.color};" title="${roleInfo.name}">
                ${roleInfo.icon}
            </span>
            ${showStats && stats ? `
                <span class="member-stats-inline">⚔️${stats.military}</span>
            ` : ''}
        </div>
    `;
}

// ============================================
// UNIFIED RENDER - ALLIANCE HEADER
// ============================================

function renderAllianceHeader(alliance, showPower = true) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    
    return `
        <div class="alliance-header-unified" style="--alliance-color: ${alliance.color};">
            <span class="alliance-icon-unified" style="background: ${alliance.color};">
                ${alliance.icon}
            </span>
            <div class="alliance-info-unified">
                <h4 class="alliance-name-unified">${alliance.name}</h4>
                <div class="alliance-meta-unified">
                    <span class="alliance-type-badge ${alliance.allianceType}">
                        ${allianceType.icon} ${allianceType.name}
                    </span>
                    <span class="alliance-size">${alliance.members.length} members</span>
                    <span class="alliance-cohesion-inline">${alliance.cohesion}% cohesion</span>
                </div>
            </div>
            ${showPower ? `
                <div class="alliance-power-badge">
                    <span class="power-value">${Math.round(alliance.totalPower)}</span>
                    <span class="power-label">Power</span>
                </div>
            ` : ''}
        </div>
    `;
}

// ============================================
// UNIFIED RENDER - ALLIANCE SECTION (for global-war page)
// ============================================

function renderAllianceSectionCompact(alliance) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    
    return `
        <div class="alliance-section-compact" style="border-color: ${alliance.color};">
            ${renderAllianceHeader(alliance, false)}
            
            <div class="alliance-members-compact">
                <span class="members-label">Members:</span>
                <div class="members-list-compact">
                    ${alliance.members.map(m => renderAllianceMemberChip(m, alliance, true)).join('')}
                </div>
            </div>
            
            <div class="alliance-features-compact">
                ${allianceType.features.slice(0, 5).map(fId => {
                    const f = ALLIANCE_FEATURES[fId];
                    return f ? `<span class="feature-dot" title="${f.name}">${f.icon}</span>` : '';
                }).join('')}
            </div>
        </div>
    `;
}

// ============================================
// UPDATED: renderTerritoryDetailModal alliance section
// ============================================

function renderTerritoryAllianceSection(control) {
    if (!control.alliance) return '';
    
    const alliance = control.alliance;
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    
    return `
        <div class="modal-section alliance-section">
            <h4>🤝 Controlling Alliance</h4>
            <div class="alliance-card-unified" style="border-color: ${alliance.color};">
                <div class="alliance-card-header-unified">
                    <span class="alliance-icon" style="background: ${alliance.color};">
                        ${alliance.icon}
                    </span>
                    <div class="alliance-info">
                        <span class="alliance-name">${alliance.name}</span>
                        <span class="alliance-type-line">
                            <span class="alliance-type-badge ${alliance.allianceType}">
                                ${allianceType.icon} ${allianceType.name}
                            </span>
                            <span class="alliance-stats-mini">
                                ${alliance.members.length} members • ${alliance.cohesion}% cohesion
                            </span>
                        </span>
                    </div>
                    <div class="alliance-power">
                        <span class="power-value">${control.controlPercent}%</span>
                        <span class="power-label">control</span>
                    </div>
                </div>
                
                <div class="alliance-members">
                    <span class="members-label">Member Factions:</span>
                    <div class="members-list">
                        ${alliance.members.map(memberId => {
                            const member = getFaction(memberId);
                            const isLeader = memberId === alliance.leader;
                            const role = alliance.memberRoles?.[memberId] || 'full_member';
                            const roleInfo = MEMBER_ROLES[role] || MEMBER_ROLES.full_member;
                            const memberStats = control.dominantBloc?.members?.find(m => m.factionId === memberId);
                            
                            return `
                                <div class="member-chip ${role}" 
                                     style="border-color: ${member?.color || '#666'};"
                                     onclick="window.showFactionModal('${memberId}'); document.getElementById('terr-modal')?.remove();">
                                    <span class="member-icon" style="background: ${member?.color || '#666'};">
                                        ${member?.icon || '?'}
                                    </span>
                                    <span class="member-name">${member?.shortName || memberId}</span>
                                    ${isLeader ? '<span class="leader-badge">👑</span>' : `<span class="role-badge" style="color: ${roleInfo.color};">${roleInfo.icon}</span>`}
                                    ${memberStats ? `<span class="member-power">⚔️${memberStats.stats?.military || 0}</span>` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="alliance-features-row">
                    <span class="features-label">Features:</span>
                    <div class="features-icons">
                        ${allianceType.features.slice(0, 6).map(fId => {
                            const f = ALLIANCE_FEATURES[fId];
                            return f ? `<span class="feature-icon-mini" title="${f.name}: ${f.effect}">${f.icon}</span>` : '';
                        }).join('')}
                    </div>
                </div>
            </div>
            
            <p class="control-explanation">
                <strong>De Facto</strong> control - This territory is governed by an alliance of ideologically aligned factions.
                As a <strong>${allianceType.name}</strong>, members share ${allianceType.features.slice(0, 2).map(f => ALLIANCE_FEATURES[f]?.name || f).join(' and ')}.
            </p>
        </div>
    `;
}

function generateDefaultValues() {
    const values = {};
    Object.keys(VALUE_AXES).forEach(axisId => {
        values[axisId] = 50;
    });
    return values;
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash) % 100;
}


function getFactionsByAxis(axisId, order = 'left') {
    const factions = getAllFactionsWithValues();
    
    return factions.sort((a, b) => {
        const valA = a.values[axisId] || 50;
        const valB = b.values[axisId] || 50;
        
        if (order === 'left') return valA - valB;
        if (order === 'right') return valB - valA;
        return (a.faction?.name || '').localeCompare(b.faction?.name || '');
    });
}

function getGlobalAverages() {
    const factions = getAllFactionsWithValues();
    const totals = {};
    const counts = {};
    
    Object.keys(VALUE_AXES).forEach(axisId => {
        totals[axisId] = 0;
        counts[axisId] = 0;
    });
    
    factions.forEach(({ values }) => {
        Object.entries(values).forEach(([axisId, value]) => {
            totals[axisId] += value;
            counts[axisId]++;
        });
    });
    
    const averages = {};
    Object.keys(VALUE_AXES).forEach(axisId => {
        averages[axisId] = counts[axisId] > 0 ? Math.round(totals[axisId] / counts[axisId]) : 50;
    });
    
    return averages;
}

function findSimilarFactions(factionId, threshold = 15) {
    const targetValues = getFactionValues(factionId);
    if (!targetValues) return [];
    
    const factions = getAllFactionsWithValues();
    
    return factions
        .filter(f => f.id !== factionId)
        .map(f => {
            const compat = calculateFactionCompatibility(factionId, f.id);
            return {
                ...f,
                similarity: compat ? compat.compatibility : 50,
                avgDiff: compat ? compat.avgDiff : 50,
                ...compat
            };
        })
        .filter(f => f.avgDiff <= threshold)
        .sort((a, b) => b.similarity - a.similarity);
}
function findOpposingFactions(factionId, threshold = 30) {
    const targetValues = getFactionValues(factionId);
    if (!targetValues) return [];
    
    const factions = getAllFactionsWithValues();
    
    return factions
        .filter(f => f.id !== factionId)
        .map(f => {
            const compat = calculateFactionCompatibility(factionId, f.id);
            return {
                ...f,
                opposition: compat ? (100 - compat.compatibility) : 50,
                avgDiff: compat ? compat.avgDiff : 50,
                ...compat
            };
        })
        .filter(f => f.avgDiff >= threshold)
        .sort((a, b) => b.opposition - a.opposition);
}
// ============================================
// RENDER FUNCTIONS
// ============================================

function renderHeader() {
    const factionCount = getAllFactionsWithValues().length;
    const axisCount = Object.keys(VALUE_AXES).length;
    
    return `
        <div class="sv-header">
            <div class="sv-header-content">
                <h2 class="sv-title">⚖️ Societal Values Analysis</h2>
                <p class="sv-subtitle">
                    Ideological landscape of ${factionCount} factions across ${axisCount} value dimensions
                </p>
            </div>
            <div class="sv-header-stats">
                <div class="sv-header-stat">
                    <span class="sv-header-stat-value">${factionCount}</span>
                    <span class="sv-header-stat-label">Factions</span>
                </div>
                <div class="sv-header-stat">
                    <span class="sv-header-stat-value">${axisCount}</span>
                    <span class="sv-header-stat-label">Value Axes</span>
                </div>
            </div>
        </div>
    `;
}

function renderViewTabs() {
    const tabs = [
        { id: 'spectrum', label: '📊 Spectrum View', desc: 'See all factions on selected axis' },
        { id: 'radar', label: '🎯 Radar Charts', desc: 'Multi-dimensional faction profiles' },
        { id: 'comparison', label: '⚔️ Compare', desc: 'Side-by-side faction comparison' },
        { id: 'overview', label: '🌐 World Overview', desc: 'Global value trends' }
    ];
    
    return `
        <div class="sv-view-tabs">
            ${tabs.map(tab => `
                <button class="sv-view-tab ${viewMode === tab.id ? 'active' : ''}" 
                        data-view="${tab.id}" 
                        title="${tab.desc}">
                    ${tab.label}
                </button>
            `).join('')}
        </div>
    `;
}

function renderAxisSelector() {
    return `
        <div class="sv-axis-selector">
            <h3 class="sv-section-title">📐 Select Value Axis</h3>
            <div class="sv-axis-grid">
                ${Object.values(VALUE_AXES).map(axis => `
                    <button class="sv-axis-btn ${selectedAxis === axis.id ? 'active' : ''}"
                            data-axis="${axis.id}"
                            style="--left-color: ${axis.leftColor}; --right-color: ${axis.rightColor};">
                        <div class="sv-axis-btn-icons">
                            <span>${axis.leftIcon}</span>
                            <span class="sv-axis-btn-arrow">↔</span>
                            <span>${axis.rightIcon}</span>
                        </div>
                        <div class="sv-axis-btn-name">${axis.name}</div>
                        <div class="sv-axis-btn-labels">
                            <span>${axis.leftLabel}</span>
                            <span>${axis.rightLabel}</span>
                        </div>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSpectrumView() {
    const axis = VALUE_AXES[selectedAxis];
    if (!axis) return '<p class="sv-error">Invalid axis selected</p>';
    
    const factions = getFactionsByAxis(selectedAxis, sortOrder);
    
    return `
        <div class="sv-spectrum-view">
            <div class="sv-spectrum-header">
                <div class="sv-spectrum-title">
                    <h3>${axis.leftIcon} ${axis.name} ${axis.rightIcon}</h3>
                    <p>${axis.description}</p>
                </div>
                <div class="sv-spectrum-sort">
                    <span>Sort:</span>
                    <button class="sv-sort-btn ${sortOrder === 'left' ? 'active' : ''}" data-sort="left">
                        ${axis.leftIcon} ${axis.leftLabel} First
                    </button>
                    <button class="sv-sort-btn ${sortOrder === 'right' ? 'active' : ''}" data-sort="right">
                        ${axis.rightIcon} ${axis.rightLabel} First
                    </button>
                </div>
            </div>
            
            <div class="sv-spectrum-scale">
                <div class="sv-scale-left" style="background: ${axis.leftColor};">
                    <span class="sv-scale-icon">${axis.leftIcon}</span>
                    <span class="sv-scale-label">${axis.leftLabel}</span>
                    <p class="sv-scale-desc">${axis.leftDesc}</p>
                </div>
                <div class="sv-scale-center">
                    <span>⚖️</span>
                    <span>Balanced</span>
                </div>
                <div class="sv-scale-right" style="background: ${axis.rightColor};">
                    <span class="sv-scale-icon">${axis.rightIcon}</span>
                    <span class="sv-scale-label">${axis.rightLabel}</span>
                    <p class="sv-scale-desc">${axis.rightDesc}</p>
                </div>
            </div>
            
            <div class="sv-spectrum-list">
                ${factions.map(({ id, faction, values }) => {
                    const value = values[selectedAxis] || 50;
                    const position = value;
                    const isLeft = value < 40;
                    const isRight = value > 60;
                    
                    return `
                        <div class="sv-spectrum-item" data-faction="${id}">
                            <div class="sv-spectrum-faction">
                                <span class="sv-spectrum-icon" style="background: ${faction?.color || '#666'};">
                                    ${faction?.icon || '❓'}
                                </span>
                                <div class="sv-spectrum-info">
                                    <span class="sv-spectrum-name">${faction?.name || id}</span>
                                    <span class="sv-spectrum-value ${isLeft ? 'left' : isRight ? 'right' : 'center'}">
                                        ${isLeft ? axis.leftLabel : isRight ? axis.rightLabel : 'Balanced'}
                                        (${value})
                                    </span>
                                </div>
                            </div>
                            <div class="sv-spectrum-bar">
                                <div class="sv-spectrum-track" style="
                                    background: linear-gradient(to right, ${axis.leftColor}, #374151, ${axis.rightColor});
                                ">
                                    <div class="sv-spectrum-marker" style="left: ${position}%;">
                                        <div class="sv-marker-dot" style="
                                            background: ${value < 50 ? axis.leftColor : axis.rightColor};
                                        "></div>
                                    </div>
                                    <div class="sv-spectrum-fill" style="
                                        left: ${Math.min(50, value)}%;
                                        width: ${Math.abs(50 - value)}%;
                                        background: ${value < 50 ? axis.leftColor : axis.rightColor};
                                    "></div>
                                </div>
                            </div>
                            <button class="sv-spectrum-details" data-faction="${id}">
                                Details →
                            </button>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderRadarView() {
    const factions = getAllFactionsWithValues().slice(0, 80);
    
    return `
        <div class="sv-radar-view">
            <h3 class="sv-section-title">🎯 Faction Value Profiles</h3>
            <p class="sv-section-desc">Complete ideological profiles showing all value dimensions</p>
            
            <div class="sv-radar-grid">
                ${factions.map(({ id, faction, values }) => renderFactionRadar(id, faction, values)).join('')}
            </div>
        </div>
    `;
}

function renderFactionRadar(id, faction, values) {
    const axes = Object.values(VALUE_AXES);
    
    return `
        <div class="sv-radar-card" data-faction="${id}">
            <div class="sv-radar-header" style="border-color: ${faction?.color || '#666'};">
                <span class="sv-radar-icon" style="background: ${faction?.color || '#666'};">
                    ${faction?.icon || '❓'}
                </span>
                <h4 class="sv-radar-name">${faction?.name || id}</h4>
            </div>
            <div class="sv-radar-axes">
                ${axes.map(axis => {
                    const value = values[axis.id] || 50;
                    
                    return `
                        <div class="sv-radar-axis">
                            <div class="sv-radar-axis-header">
                                <span class="sv-radar-axis-left" style="color: ${axis.leftColor};">
                                    ${axis.leftIcon}
                                </span>
                                <span class="sv-radar-axis-name">${axis.name}</span>
                                <span class="sv-radar-axis-right" style="color: ${axis.rightColor};">
                                    ${axis.rightIcon}
                                </span>
                            </div>
                            <div class="sv-radar-axis-bar">
                                <div class="sv-radar-axis-track" style="
                                    background: linear-gradient(to right, ${axis.leftColor}40, transparent, ${axis.rightColor}40);
                                ">
                                    <div class="sv-radar-axis-center"></div>
                                    <div class="sv-radar-axis-marker" style="
                                        left: ${value}%;
                                        background: ${value < 50 ? axis.leftColor : axis.rightColor};
                                    "></div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            <div class="sv-radar-actions">
                <button class="sv-radar-btn" data-action="compare" data-faction="${id}">
                    + Compare
                </button>
                <button class="sv-radar-btn" data-action="details" data-faction="${id}">
                    Full Profile
                </button>
            </div>
        </div>
    `;
}

function renderComparisonView() {
    const allFactions = getAllFactionsWithValues();
    const toCompare = comparisonFactions.length >= 2 
        ? comparisonFactions.map(id => allFactions.find(f => f.id === id)).filter(Boolean)
        : allFactions.slice(0, 80);
    
    return `
        <div class="sv-comparison-view">
            <h3 class="sv-section-title">⚔️ Faction Comparison</h3>
            
            <div class="sv-comparison-selector">
                <p>Select factions to compare:</p>
                <div class="sv-comparison-chips">
                    ${allFactions.slice(0, 80).map(({ id, faction }) => `
                        <button class="sv-comparison-chip ${comparisonFactions.includes(id) ? 'selected' : ''}"
                                data-faction="${id}"
                                style="--faction-color: ${faction?.color || '#666'};">
                            <span>${faction?.icon || '❓'}</span>
                            <span>${faction?.shortName || faction?.name || id}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="sv-comparison-table">
                <div class="sv-comparison-header">
                    <div class="sv-comparison-axis-col">Value Axis</div>
                    ${toCompare.map(({ faction }) => `
                        <div class="sv-comparison-faction-col" style="border-top-color: ${faction?.color || '#666'};">
                            <span class="sv-comparison-faction-icon" style="background: ${faction?.color || '#666'};">
                                ${faction?.icon || '❓'}
                            </span>
                            <span>${faction?.shortName || faction?.name || 'Unknown'}</span>
                        </div>
                    `).join('')}
                </div>
                
                ${Object.values(VALUE_AXES).map(axis => `
                    <div class="sv-comparison-row">
                        <div class="sv-comparison-axis-col">
                            <span class="sv-comparison-axis-icons">
                                ${axis.leftIcon} ↔ ${axis.rightIcon}
                            </span>
                            <span class="sv-comparison-axis-name">${axis.name}</span>
                        </div>
                        ${toCompare.map(({ values }) => {
                            const value = values[axis.id] || 50;
                            const isLeft = value < 40;
                            const isRight = value > 60;
                            const label = isLeft ? axis.leftLabel : isRight ? axis.rightLabel : 'Balanced';
                            const color = value < 50 ? axis.leftColor : axis.rightColor;
                            
                            return `
                                <div class="sv-comparison-value-col">
                                    <div class="sv-comparison-mini-bar">
                                        <div class="sv-comparison-mini-track" style="
                                            background: linear-gradient(to right, ${axis.leftColor}40, transparent, ${axis.rightColor}40);
                                        ">
                                            <div class="sv-comparison-mini-marker" style="
                                                left: ${value}%;
                                                background: ${color};
                                            "></div>
                                        </div>
                                    </div>
                                    <span class="sv-comparison-label" style="color: ${color};">
                                        ${label} (${value})
                                    </span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `).join('')}
            </div>
            
            <div class="sv-comparison-analysis">
                <h4>📊 Compatibility Analysis</h4>
                ${renderCompatibilityMatrix(toCompare)}
            </div>
        </div>
    `;
}

function renderCompatibilityMatrix(factions) {
    if (factions.length < 2) return '<p>Select at least 2 factions to see compatibility.</p>';
    
    const pairs = [];
    for (let i = 0; i < factions.length; i++) {
        for (let j = i + 1; j < factions.length; j++) {
            const f1 = factions[i];
            const f2 = factions[j];
            
            const compat = calculateFactionCompatibility(f1.id, f2.id);
            if (!compat) continue;
            
            const relationInfo = getRelationshipLabel(
                compat.compatibility, 
                compat.extremeConflicts, 
                compat.strongAgreements
            );
            
            pairs.push({
                f1: f1.faction,
                f2: f2.faction,
                compatibility: compat.compatibility,
                relationInfo,
                differences: compat.biggestDifferences,
                agreements: compat.biggestAgreements,
                extremeConflicts: compat.extremeConflicts
            });
        }
    }
    
    return `
        <div class="sv-compatibility-grid">
            ${pairs.map(pair => {
                const statusClass = pair.relationInfo.type;
                
                return `
                    <div class="sv-compatibility-card ${statusClass}">
                        <div class="sv-compat-header">
                            <span class="sv-compat-faction" style="background: ${pair.f1?.color || '#666'};">
                                ${pair.f1?.icon || '❓'}
                            </span>
                            <span class="sv-compat-vs">VS</span>
                            <span class="sv-compat-faction" style="background: ${pair.f2?.color || '#666'};">
                                ${pair.f2?.icon || '❓'}
                            </span>
                        </div>
                        <div class="sv-compat-score">
                            <div class="sv-compat-percentage">${pair.compatibility}%</div>
                            <div class="sv-compat-label">
                                ${pair.relationInfo.icon} ${pair.relationInfo.label}
                            </div>
                        </div>
                        ${pair.differences.length > 0 ? `
                            <div class="sv-compat-conflicts">
                                <span class="sv-compat-conflicts-title">
                                    ${pair.extremeConflicts >= 2 ? '⚠️ Major Conflicts:' : 'Key Differences:'}
                                </span>
                                ${pair.differences.map(d => `
                                    <span class="sv-compat-conflict" title="${d.axis.name}: ${d.diff} point difference">
                                        ${d.axis.leftIcon}↔${d.axis.rightIcon}
                                    </span>
                                `).join('')}
                            </div>
                        ` : `
                            <div class="sv-compat-harmony">
                                ✨ Strong value alignment
                                ${pair.agreements.length > 0 ? `
                                    <span class="sv-compat-agreements">
                                        ${pair.agreements.slice(0, 2).map(a => `${a.axis.leftIcon}`).join(' ')}
                                    </span>
                                ` : ''}
                            </div>
                        `}
                    </div>
                `;
            }).join('')}
        </div>
    `;
}
function renderWorldOverviewContent() {
    const averages = getGlobalAverages();
    const factions = getAllFactionsWithValues();
    
    return `
        <div class="sv-world-overview">
            <h3 class="sv-section-title">🌐 World Value Trends</h3>
            <p class="sv-section-desc">Average positions across all factions for each value dimension</p>
            
            <div class="sv-world-axes">
                ${Object.values(VALUE_AXES).map(axis => {
                    const avg = averages[axis.id];
                    const isLeft = avg < 40;
                    const isRight = avg > 60;
                    const lean = isLeft ? axis.leftLabel : isRight ? axis.rightLabel : 'Balanced';
                    
                    const leftCount = factions.filter(f => (f.values[axis.id] || 50) < 40).length;
                    const rightCount = factions.filter(f => (f.values[axis.id] || 50) > 60).length;
                    const centerCount = factions.length - leftCount - rightCount;
                    
                    return `
                        <div class="sv-world-axis">
                            <div class="sv-world-axis-header">
                                <div class="sv-world-axis-title">
                                    <span>${axis.leftIcon} ${axis.name} ${axis.rightIcon}</span>
                                </div>
                                <div class="sv-world-axis-avg">
                                    World leans: <strong style="color: ${avg < 50 ? axis.leftColor : axis.rightColor};">
                                        ${lean}
                                    </strong>
                                </div>
                            </div>
                            
                            <div class="sv-world-axis-visual">
                                <div class="sv-world-side left" style="background: ${axis.leftColor}40;">
                                    <span class="sv-world-side-icon">${axis.leftIcon}</span>
                                    <span class="sv-world-side-label">${axis.leftLabel}</span>
                                    <span class="sv-world-side-count">${leftCount} factions</span>
                                </div>
                                <div class="sv-world-center">
                                    <span>⚖️</span>
                                    <span>${centerCount}</span>
                                </div>
                                <div class="sv-world-side right" style="background: ${axis.rightColor}40;">
                                    <span class="sv-world-side-icon">${axis.rightIcon}</span>
                                    <span class="sv-world-side-label">${axis.rightLabel}</span>
                                    <span class="sv-world-side-count">${rightCount} factions</span>
                                </div>
                            </div>
                            
                            <div class="sv-world-axis-bar">
                                <div class="sv-world-bar-track" style="
                                    background: linear-gradient(to right, ${axis.leftColor}, #374151, ${axis.rightColor});
                                ">
                                    <div class="sv-world-bar-marker" style="left: ${avg}%;">
                                        <span class="sv-world-bar-value">${avg}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="sv-world-insights">
                <h4>🔍 World Insights</h4>
                <div class="sv-insights-grid">
                    ${generateWorldInsights(averages, factions)}
                </div>
            </div>
        </div>
    `;
}

function generateWorldInsights(averages, factions) {
    const insights = [];
    
    let mostLeft = { axis: null, value: 100 };
    let mostRight = { axis: null, value: 0 };
    let mostDivided = { axis: null, spread: 0 };
    
    Object.entries(VALUE_AXES).forEach(([axisId, axis]) => {
        const avg = averages[axisId];
        
        if (avg < mostLeft.value) {
            mostLeft = { axis, value: avg };
        }
        if (avg > mostRight.value) {
            mostRight = { axis, value: avg };
        }
        
        const values = factions.map(f => f.values[axisId] || 50);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const spread = max - min;
        
        if (spread > mostDivided.spread) {
            mostDivided = { axis, spread, min, max };
        }
    });
    
    if (mostLeft.axis) {
        insights.push(`
            <div class="sv-insight">
                <span class="sv-insight-icon">${mostLeft.axis.leftIcon}</span>
                <div class="sv-insight-text">
                    <strong>Dominant Trend:</strong> The world leans strongly ${mostLeft.axis.leftLabel} 
                    in ${mostLeft.axis.name} (avg: ${mostLeft.value})
                </div>
            </div>
        `);
    }
    
    if (mostDivided.axis) {
        insights.push(`
            <div class="sv-insight conflict">
                <span class="sv-insight-icon">⚡</span>
                <div class="sv-insight-text">
                    <strong>Greatest Division:</strong> ${mostDivided.axis.name} shows the widest 
                    ideological split between factions (${mostDivided.min} to ${mostDivided.max})
                </div>
            </div>
        `);
    }
    
    const similar = findSimilarFactions(factions[0]?.id, 20);
    if (similar.length > 1) {
        insights.push(`
            <div class="sv-insight alliance">
                <span class="sv-insight-icon">🤝</span>
                <div class="sv-insight-text">
                    <strong>Natural Alliances:</strong> ${similar.length + 1} factions share 
                    highly similar values and may form coalitions.
                </div>
            </div>
        `);
    }
    
    return insights.join('');
}

// ============================================
// MAIN RENDER
// ============================================

function renderSocietalValues() {
    const header = renderHeader();
    const tabs = renderViewTabs();
    const axisSelector = viewMode === 'spectrum' ? renderAxisSelector() : '';
    
    let content = '';
    switch (viewMode) {
        case 'spectrum':
            content = renderSpectrumView();
            break;
        case 'radar':
            content = renderRadarView();
            break;
        case 'comparison':
            content = renderComparisonView();
            break;
        case 'overview':
            content = renderWorldOverviewContent();
            break;
        default:
            content = renderSpectrumView();
    }
    
    return `
        <div class="societal-values-system">
            ${header}
            ${tabs}
            <div class="sv-content">
                ${axisSelector}
                ${content}
            </div>
        </div>
    `;
}

// ============================================
// EVENT LISTENERS
// ============================================

function initSocietalValuesListeners() {
    const container = document.querySelector('.societal-values-system');
    if (!container) return;
    
    container.addEventListener('click', (e) => {
        // View tabs
        const viewTab = e.target.closest('.sv-view-tab');
        if (viewTab) {
            viewMode = viewTab.dataset.view;
            rerenderSocietalValues();
            return;
        }
        
        // Axis selector
        const axisBtn = e.target.closest('.sv-axis-btn');
        if (axisBtn) {
            selectedAxis = axisBtn.dataset.axis;
            rerenderSocietalValues();
            return;
        }
        
        // Sort buttons
        const sortBtn = e.target.closest('.sv-sort-btn');
        if (sortBtn) {
            sortOrder = sortBtn.dataset.sort;
            rerenderSocietalValues();
            return;
        }
        
        // Comparison chips
        const compChip = e.target.closest('.sv-comparison-chip');
        if (compChip) {
            const factionId = compChip.dataset.faction;
            if (comparisonFactions.includes(factionId)) {
                comparisonFactions = comparisonFactions.filter(id => id !== factionId);
            } else if (comparisonFactions.length < 4) {
                comparisonFactions.push(factionId);
            }
            rerenderSocietalValues();
            return;
        }
        
        // FIXED: Faction details buttons
        const detailsBtn = e.target.closest('.sv-spectrum-details, .sv-radar-btn[data-action="details"], [data-action="details"]');
        if (detailsBtn) {
            const factionId = detailsBtn.dataset.faction;
            console.log('[SocietalValues] Details clicked for:', factionId);
            
            if (window.showFactionModal) {
                window.showFactionModal(factionId);
            } else {
                console.error('[SocietalValues] showFactionModal not found on window');
                alert(`Faction: ${factionId}\n\nModal system not loaded.`);
            }
            return;
        }
        
        // Add to compare
        const compareBtn = e.target.closest('.sv-radar-btn[data-action="compare"], [data-action="compare"]');
        if (compareBtn) {
            const factionId = compareBtn.dataset.faction;
            if (!comparisonFactions.includes(factionId) && comparisonFactions.length < 4) {
                comparisonFactions.push(factionId);
                viewMode = 'comparison';
                rerenderSocietalValues();
            }
            return;
        }
        
        // Click on spectrum row (not on buttons)
        const spectrumItem = e.target.closest('.sv-spectrum-item');
        if (spectrumItem && !e.target.closest('button')) {
            const factionId = spectrumItem.dataset.faction;
            if (window.showFactionModal) {
                window.showFactionModal(factionId);
            }
            return;
        }
        
        // Click on radar card (not on buttons)
        const radarCard = e.target.closest('.sv-radar-card');
        if (radarCard && !e.target.closest('button')) {
            const factionId = radarCard.dataset.faction;
            if (window.showFactionModal) {
                window.showFactionModal(factionId);
            }
            return;
        }
    });
}

function rerenderSocietalValues() {
    const container = document.querySelector('.societal-values-system');
    if (!container) return;
    
    const parent = container.parentElement;
    container.remove();
    parent.insertAdjacentHTML('beforeend', renderSocietalValues());
    initSocietalValuesListeners();
}
function shouldExcludeFaction(factionId, faction) {
    if (!factionId) return true;
    
    const idLower = String(factionId).toLowerCase().trim();
    
    // Excluded IDs
    const excludedPatterns = [
        'unaligned',
        'independent',
        'none',
        'neutral',
        'unknown',
        'n/a',
        'na',
        'null',
        'undefined'
    ];
    
    // Check if ID matches or contains excluded patterns
    for (const pattern of excludedPatterns) {
        if (idLower === pattern || idLower.includes(pattern)) {
            return true;
        }
    }
    
    // Check faction name
    if (faction) {
        const name = String(faction.name || '').toLowerCase();
        for (const pattern of excludedPatterns) {
            if (name.includes(pattern)) {
                return true;
            }
        }
        
        // Also exclude "no faction" type names
        if (name === 'none' || name.includes('no faction')) {
            return true;
        }
    }
    
    return false;
}
/**
 * Generate values for a faction based on keyword analysis
 */
function generateFactionValues(faction) {
    // Start with neutral values
    const values = {};
    Object.keys(VALUE_AXES).forEach(axisId => {
        values[axisId] = 50;
    });
    
    if (!faction) return values;
    
    // Gather all text to analyze
    const textsToAnalyze = [
        faction.id || '',
        faction.name || '',
        faction.type || '',
        faction.description || '',
        faction.lore || '',
        faction.government || '',
        faction.culture || '',
        faction.religion || '',
        faction.primaryRace || '',
        faction.species || '',
        ...(faction.tags || [])
    ].join(' ').toLowerCase();
    
    // Track which modifiers we've applied to average them
    const appliedModifiers = {};
    Object.keys(VALUE_AXES).forEach(axisId => {
        appliedModifiers[axisId] = [];
    });
    
    // Check each keyword
    Object.entries(KEYWORD_VALUE_MODIFIERS).forEach(([keyword, modifiers]) => {
        // Check if keyword exists in faction text
        const regex = new RegExp(`\\b${keyword}`, 'i');
        if (regex.test(textsToAnalyze)) {
            // Apply modifiers
            Object.entries(modifiers).forEach(([axisId, modifier]) => {
                if (VALUE_AXES[axisId]) {
                    appliedModifiers[axisId].push(modifier);
                }
            });
        }
    });
    
    // Calculate final values by averaging modifiers
    Object.entries(appliedModifiers).forEach(([axisId, mods]) => {
        if (mods.length > 0) {
            // Average the modifiers
            const avgMod = mods.reduce((sum, m) => sum + m, 0) / mods.length;
            // Apply to base value of 50
            values[axisId] = Math.max(5, Math.min(95, Math.round(50 + avgMod)));
        } else {
            // No keywords matched - use hash-based fallback with less variance
            const hash = simpleHash(faction.id || faction.name || 'unknown');
            const variance = ((hash + Object.keys(VALUE_AXES).indexOf(axisId) * 7) % 30) - 15;
            values[axisId] = 50 + variance;
        }
    });
    
    return values;
}

/**
 * Get all factions with their values (filtered)
 */
function getAllFactionsWithValues() {
    const allFactions = getAllFactions();
    const result = [];
    const addedIds = new Set();
    
    // Add factions with preset values first
    Object.keys(FACTION_VALUES).forEach(factionId => {
        if (shouldExcludeFaction(factionId, null)) return;
        if (addedIds.has(factionId)) return;
        
        const faction = allFactions[factionId] || getFaction(factionId);
        if (faction && !shouldExcludeFaction(factionId, faction)) {
            result.push({
                id: factionId,
                faction,
                values: FACTION_VALUES[factionId]
            });
            addedIds.add(factionId);
        }
    });
    
    // Add remaining factions from registry with generated values
    Object.entries(allFactions).forEach(([id, faction]) => {
        // Skip if already added or should be excluded
        if (addedIds.has(id)) return;
        if (shouldExcludeFaction(id, faction)) return;
        
        result.push({
            id,
            faction,
            values: generateFactionValues(faction)
        });
        addedIds.add(id);
    });
    
    return result;
}
/**
 * Get value data for a faction
 */

/**
 * Debug function to see what keywords matched for a faction
 */
function debugFactionKeywords(factionId) {
    const allFactions = getAllFactions();
    const faction = allFactions[factionId] || getFaction(factionId);
    
    if (!faction) {
        console.log(`Faction ${factionId} not found`);
        return;
    }
    
    const textsToAnalyze = [
        faction.id || '',
        faction.name || '',
        faction.type || '',
        faction.description || '',
        faction.lore || '',
        faction.government || '',
        faction.culture || '',
        faction.religion || '',
        faction.primaryRace || '',
        faction.species || '',
        ...(faction.tags || [])
    ].join(' ').toLowerCase();
    
    console.log(`\n=== Debug: ${faction.name || factionId} ===`);
    console.log(`Text analyzed: "${textsToAnalyze.substring(0, 200)}..."`);
    console.log('\nMatched keywords:');
    
    const matches = [];
    Object.entries(KEYWORD_VALUE_MODIFIERS).forEach(([keyword, modifiers]) => {
        const regex = new RegExp(`\\b${keyword}`, 'i');
        if (regex.test(textsToAnalyze)) {
            matches.push({ keyword, modifiers });
            console.log(`  ✓ "${keyword}":`, modifiers);
        }
    });
    
    if (matches.length === 0) {
        console.log('  (no keywords matched)');
    }
    
    console.log('\nGenerated values:');
    const values = generateFactionValues(faction);
    Object.entries(VALUE_AXES).forEach(([axisId, axis]) => {
        const val = values[axisId];
        const stance = val < 40 ? axis.leftLabel : val > 60 ? axis.rightLabel : 'Balanced';
        console.log(`  ${axis.name}: ${val} (${stance})`);
    });
    
    return { faction, matches, values };
}

// Make debug function available globally
window.debugFactionKeywords = debugFactionKeywords;
// ============================================
// EXPORTS
// ============================================

export {
    VALUE_AXES,
    renderSocietalValues,
    initSocietalValuesListeners,
    getAllFactionsWithValues,
    getFactionsByAxis,
    getGlobalAverages,
    findSimilarFactions,
    findOpposingFactions,
    getFactionValues,
    calculateFactionCompatibility,  // NEW
    getRelationshipLabel            // NEW
};