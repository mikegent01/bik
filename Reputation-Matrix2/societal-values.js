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
const KEYWORD_VALUE_MODIFIERS = {
    // Government/Structure Keywords
    'empire': {
        centralization: -40,      // Very centralized
        tradition_innovation: -20, // Traditional
        militarism: -30,          // Militaristic
        foreign_policy: 30,       // Expansionist
        social_mobility: -30,     // Aristocratic
        collectivism: -20         // Collectivist
    },
    'kingdom': {
        centralization: -30,
        tradition_innovation: -15,
        social_mobility: -35,
        religion_state: -15
    },
    'republic': {
        centralization: 20,
        social_mobility: 25,
        collectivism: 15,
        religion_state: 20
    },
    'federation': {
        centralization: 35,
        collectivism: 20,
        borders: 15
    },
    'confederacy': {
        centralization: 40,
        collectivism: 10
    },
    'council': {
        centralization: 25,
        social_mobility: 20,
        knowledge: 20
    },
    'theocracy': {
        religion_state: -45,
        tradition_innovation: -30,
        centralization: -20,
        knowledge: -20
    },
    'tribe': {
        centralization: 30,
        tradition_innovation: -25,
        nature_development: -30,
        economy_type: -35
    },
    'tribal': {
        centralization: 25,
        tradition_innovation: -20,
        nature_development: -25,
        economy_type: -30
    },
    'horde': {
        militarism: -40,
        centralization: 15,
        tradition_innovation: -15,
        foreign_policy: 35,
        nature_development: -20
    },
    'clan': {
        centralization: 20,
        tradition_innovation: -20,
        collectivism: -25
    },
    'dynasty': {
        social_mobility: -40,
        tradition_innovation: -25,
        centralization: -25
    },
    'commune': {
        collectivism: -40,
        centralization: 35,
        social_mobility: 30,
        economy_type: -15
    },
    'collective': {
        collectivism: -45,
        centralization: 30,
        social_mobility: 25
    },
    
    // Military Keywords
    'military': {
        militarism: -35,
        centralization: -15,
        magic_technology: 20
    },
    'army': {
        militarism: -30,
        magic_technology: 25
    },
    'legion': {
        militarism: -35,
        centralization: -20,
        tradition_innovation: -15
    },
    'order': {
        centralization: -15,
        tradition_innovation: -20,
        religion_state: -15,
        militarism: -20
    },
    'knights': {
        militarism: -25,
        tradition_innovation: -20,
        social_mobility: -20,
        magic_technology: 30
    },
    'warrior': {
        militarism: -35,
        magic_technology: 35
    },
    'guard': {
        militarism: -20,
        centralization: -15
    },
    'mercenary': {
        militarism: -20,
        collectivism: 35,
        borders: 25
    },
    'raiders': {
        militarism: -35,
        foreign_policy: 30,
        borders: -20,
        collectivism: 25
    },
    'pirates': {
        militarism: -25,
        borders: 30,
        collectivism: 30,
        centralization: 30
    },
    'bandits': {
        militarism: -20,
        centralization: 40,
        collectivism: 35
    },
    
    // Religious/Spiritual Keywords
    'church': {
        religion_state: -40,
        tradition_innovation: -25,
        centralization: -20
    },
    'temple': {
        religion_state: -35,
        tradition_innovation: -20,
        knowledge: -15
    },
    'cult': {
        religion_state: -40,
        centralization: -25,
        knowledge: -30,
        borders: -25
    },
    'holy': {
        religion_state: -35,
        tradition_innovation: -20
    },
    'sacred': {
        religion_state: -30,
        nature_development: -20
    },
    'divine': {
        religion_state: -35,
        social_mobility: -15
    },
    'blessed': {
        religion_state: -25
    },
    'inquisition': {
        religion_state: -40,
        centralization: -30,
        borders: -35,
        knowledge: -25
    },
    'monastery': {
        religion_state: -30,
        knowledge: 20,
        militarism: 25
    },
    'shrine': {
        religion_state: -25,
        nature_development: -15
    },
    
    // Magic/Arcane Keywords
    'magic': {
        magic_technology: -40,
        knowledge: 25,
        tradition_innovation: 10
    },
    'magical': {
        magic_technology: -35,
        knowledge: 20
    },
    'mage': {
        magic_technology: -40,
        knowledge: 30,
        social_mobility: 20
    },
    'wizard': {
        magic_technology: -45,
        knowledge: 35,
        centralization: 15
    },
    'sorcerer': {
        magic_technology: -40,
        knowledge: 20,
        collectivism: 25
    },
    'witch': {
        magic_technology: -35,
        centralization: 30,
        nature_development: -20
    },
    'arcane': {
        magic_technology: -45,
        knowledge: 30
    },
    'mystic': {
        magic_technology: -35,
        religion_state: -15,
        knowledge: 15
    },
    'enchant': {
        magic_technology: -30,
        economy_type: 15
    },
    'coven': {
        magic_technology: -35,
        centralization: 25,
        collectivism: -20
    },
    'academy': {
        magic_technology: -25,
        knowledge: 40,
        social_mobility: 30,
        tradition_innovation: 25
    },
    
    // Technology/Science Keywords
    'science': {
        tradition_innovation: 40,
        magic_technology: 30,
        knowledge: 35,
        religion_state: 25
    },
    'scientific': {
        tradition_innovation: 35,
        magic_technology: 25,
        knowledge: 30
    },
    'technology': {
        tradition_innovation: 40,
        magic_technology: 35,
        economy_type: 25
    },
    'tech': {
        tradition_innovation: 35,
        magic_technology: 30,
        economy_type: 20
    },
    'engineer': {
        tradition_innovation: 30,
        magic_technology: 25,
        economy_type: 20
    },
    'industrial': {
        economy_type: 40,
        tradition_innovation: 25,
        nature_development: 35
    },
    'factory': {
        economy_type: 40,
        nature_development: 30
    },
    'mechanical': {
        magic_technology: 35,
        tradition_innovation: 30
    },
    'cyber': {
        tradition_innovation: 45,
        magic_technology: 40
    },
    'research': {
        knowledge: 40,
        tradition_innovation: 30
    },
    'laboratory': {
        knowledge: 35,
        tradition_innovation: 35,
        magic_technology: 20
    },
    'school': {
        knowledge: 40,
        social_mobility: 25,
        tradition_innovation: 20
    },
    'university': {
        knowledge: 45,
        social_mobility: 30,
        tradition_innovation: 25
    },
    'institute': {
        knowledge: 35,
        tradition_innovation: 25
    },
    
    // Trade/Economic Keywords
    'merchant': {
        economy_type: 30,
        borders: 35,
        collectivism: 30,
        militarism: 25
    },
    'trade': {
        borders: 35,
        economy_type: 25,
        militarism: 20
    },
    'trading': {
        borders: 30,
        economy_type: 20
    },
    'guild': {
        economy_type: 20,
        social_mobility: 25,
        centralization: 20
    },
    'company': {
        economy_type: 25,
        collectivism: 25,
        centralization: 15
    },
    'corporation': {
        economy_type: 35,
        collectivism: 30,
        centralization: 20
    },
    'cartel': {
        economy_type: 25,
        centralization: 25,
        borders: -15
    },
    'syndicate': {
        centralization: 20,
        borders: 20,
        collectivism: 20
    },
    'bank': {
        economy_type: 30,
        centralization: -15
    },
    'market': {
        borders: 30,
        economy_type: 20
    },
    
    // Nature/Environment Keywords
    'forest': {
        nature_development: -40,
        tradition_innovation: -15,
        economy_type: -25
    },
    'wood': {
        nature_development: -30,
        economy_type: -20
    },
    'grove': {
        nature_development: -35,
        religion_state: -15
    },
    'nature': {
        nature_development: -40,
        tradition_innovation: -20
    },
    'wild': {
        nature_development: -35,
        centralization: 25,
        tradition_innovation: -15
    },
    'feral': {
        nature_development: -40,
        centralization: 35
    },
    'beast': {
        nature_development: -30,
        militarism: -20
    },
    'mountain': {
        nature_development: -25,
        foreign_policy: -20,
        borders: -20
    },
    'sea': {
        borders: 25,
        foreign_policy: 20,
        economy_type: 15
    },
    'ocean': {
        borders: 30,
        foreign_policy: 25
    },
    'river': {
        economy_type: 10,
        borders: 15
    },
    'desert': {
        nature_development: -20,
        foreign_policy: -15,
        economy_type: -20
    },
    'swamp': {
        nature_development: -30,
        foreign_policy: -25,
        borders: -25
    },
    'island': {
        foreign_policy: -20,
        borders: -15
    },
    
    // Race/Species Keywords
    'elf': {
        tradition_innovation: -20,
        nature_development: -30,
        magic_technology: -25,
        social_mobility: -20
    },
    'elven': {
        tradition_innovation: -25,
        nature_development: -35,
        magic_technology: -30
    },
    'dwarf': {
        tradition_innovation: -15,
        economy_type: 25,
        nature_development: 20,
        magic_technology: 20
    },
    'dwarven': {
        tradition_innovation: -20,
        economy_type: 30,
        nature_development: 25
    },
    'orc': {
        militarism: -35,
        tradition_innovation: -10,
        magic_technology: 30
    },
    'orcish': {
        militarism: -40,
        magic_technology: 35
    },
    'goblin': {
        tradition_innovation: 20,
        centralization: 25,
        collectivism: 20
    },
    'troll': {
        militarism: -25,
        tradition_innovation: -20
    },
    'undead': {
        religion_state: -20,
        nature_development: 25,
        tradition_innovation: -25
    },
    'vampire': {
        social_mobility: -35,
        tradition_innovation: -20,
        centralization: -25
    },
    'demon': {
        religion_state: -30,
        militarism: -30,
        centralization: -20
    },
    'dragon': {
        centralization: -35,
        social_mobility: -30,
        militarism: -25
    },
    'human': {
        // Balanced - no strong modifiers
    },
    'halfling': {
        militarism: 30,
        nature_development: -15,
        collectivism: -20
    },
    'gnome': {
        tradition_innovation: 25,
        knowledge: 25,
        economy_type: 15
    },
    
    // Political Stance Keywords
    'free': {
        centralization: 35,
        collectivism: 30,
        borders: 25
    },
    'freedom': {
        centralization: 40,
        collectivism: 35
    },
    'liberty': {
        centralization: 35,
        collectivism: 35,
        borders: 20
    },
    'liberation': {
        centralization: 30,
        foreign_policy: 20
    },
    'rebel': {
        centralization: 30,
        tradition_innovation: 15,
        foreign_policy: 15
    },
    'rebellion': {
        centralization: 35,
        tradition_innovation: 20
    },
    'resistance': {
        centralization: 25,
        militarism: -15
    },
    'revolutionary': {
        tradition_innovation: 35,
        centralization: 30
    },
    'royal': {
        social_mobility: -35,
        centralization: -25,
        tradition_innovation: -20
    },
    'imperial': {
        centralization: -35,
        foreign_policy: 30,
        social_mobility: -25
    },
    'noble': {
        social_mobility: -30,
        tradition_innovation: -15
    },
    'aristocrat': {
        social_mobility: -40,
        centralization: -15
    },
    'democratic': {
        centralization: 35,
        social_mobility: 30,
        collectivism: 20
    },
    'populist': {
        centralization: 25,
        social_mobility: 25
    },
    
    // Isolationist/Expansionist Keywords
    'isolat': {
        foreign_policy: -40,
        borders: -35
    },
    'hidden': {
        foreign_policy: -35,
        borders: -40,
        knowledge: -25
    },
    'secret': {
        knowledge: -40,
        borders: -30,
        centralization: -20
    },
    'shadow': {
        knowledge: -35,
        borders: -25,
        centralization: -15
    },
    'conquest': {
        foreign_policy: 40,
        militarism: -35
    },
    'conquer': {
        foreign_policy: 35,
        militarism: -30
    },
    'dominion': {
        foreign_policy: 30,
        centralization: -25
    },
    'expansion': {
        foreign_policy: 35
    },
    'colonial': {
        foreign_policy: 35,
        borders: 20
    },
    
    // Peaceful/Diplomatic Keywords
    'peace': {
        militarism: 40,
        foreign_policy: -10,
        borders: 20
    },
    'peaceful': {
        militarism: 35,
        borders: 15
    },
    'harmony': {
        militarism: 30,
        collectivism: -15,
        nature_development: -20
    },
    'diplomatic': {
        militarism: 25,
        borders: 25,
        foreign_policy: 15
    },
    'alliance': {
        borders: 25,
        foreign_policy: 15
    },
    'united': {
        collectivism: -25,
        centralization: -15
    },
    'union': {
        collectivism: -30,
        centralization: 15
    },
    
    // Urban/Rural Keywords
    'city': {
        nature_development: 35,
        economy_type: 25,
        centralization: 15
    },
    'cities': {
        nature_development: 30,
        economy_type: 20,
        centralization: 20
    },
    'urban': {
        nature_development: 40,
        economy_type: 30
    },
    'metro': {
        nature_development: 40,
        economy_type: 35,
        tradition_innovation: 25
    },
    'village': {
        nature_development: -20,
        economy_type: -25,
        centralization: 25
    },
    'farm': {
        economy_type: -35,
        nature_development: -25
    },
    'pastoral': {
        economy_type: -30,
        nature_development: -30,
        militarism: 20
    },
    'nomad': {
        centralization: 35,
        foreign_policy: -15,
        nature_development: -25,
        economy_type: -30
    },
    
    // Misc Descriptors
    'ancient': {
        tradition_innovation: -35,
        knowledge: 15
    },
    'old': {
        tradition_innovation: -25
    },
    'eternal': {
        tradition_innovation: -30
    },
    'new': {
        tradition_innovation: 25
    },
    'modern': {
        tradition_innovation: 35,
        economy_type: 20
    },
    'progressive': {
        tradition_innovation: 40,
        social_mobility: 25
    },
    'conservative': {
        tradition_innovation: -30,
        social_mobility: -15
    },
    'orthodox': {
        tradition_innovation: -35,
        religion_state: -25
    },
    'reformed': {
        tradition_innovation: 20,
        religion_state: 15
    },
    'purist': {
        tradition_innovation: -30,
        borders: -25
    },
    'elite': {
        social_mobility: -30,
        centralization: -20
    },
    'chosen': {
        religion_state: -25,
        social_mobility: -20
    },
    'supreme': {
        centralization: -30,
        social_mobility: -25
    },
    'grand': {
        centralization: -20,
        social_mobility: -15
    },
    'great': {
        centralization: -15
    },
    'eternal': {
        tradition_innovation: -30
    },
    'dark': {
        religion_state: -15,
        knowledge: -20
    },
    'light': {
        religion_state: -15,
        knowledge: 15
    },
    'crimson': {
        militarism: -20
    },
    'iron': {
        militarism: -25,
        magic_technology: 25
    },
    'steel': {
        magic_technology: 30,
        economy_type: 20
    },
    'golden': {
        economy_type: 25,
        social_mobility: -15
    },
    'silver': {
        economy_type: 20
    },
    'black': {
        knowledge: -15
    },
    'white': {
        religion_state: -10
    },
    'blood': {
        militarism: -25,
        religion_state: -15
    },
    'death': {
        militarism: -30
    },
    'war': {
        militarism: -40,
        foreign_policy: 25
    },
    'battle': {
        militarism: -30
    },
    'storm': {
        militarism: -20,
        foreign_policy: 15
    },
    'flame': {
        militarism: -20,
        tradition_innovation: 10
    },
    'frost': {
        foreign_policy: -20,
        nature_development: -15
    },
    'ice': {
        foreign_policy: -15
    },
    'void': {
        magic_technology: -30,
        knowledge: -20
    },
    'chaos': {
        centralization: 40,
        tradition_innovation: 20
    },
    'order': {
        centralization: -25,
        tradition_innovation: -20
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

function getFactionValues(factionId) {
    if (FACTION_VALUES[factionId]) {
        return FACTION_VALUES[factionId];
    }
    
    const faction = getFaction(factionId);
    if (!faction) return generateDefaultValues();
    
    return generateFactionValues(faction);
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
            let totalDiff = 0;
            let count = 0;
            
            Object.keys(VALUE_AXES).forEach(axisId => {
                const diff = Math.abs((targetValues[axisId] || 50) - (f.values[axisId] || 50));
                totalDiff += diff;
                count++;
            });
            
            return {
                ...f,
                similarity: 100 - (totalDiff / count),
                avgDiff: totalDiff / count
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
            let totalDiff = 0;
            let count = 0;
            
            Object.keys(VALUE_AXES).forEach(axisId => {
                const diff = Math.abs((targetValues[axisId] || 50) - (f.values[axisId] || 50));
                totalDiff += diff;
                count++;
            });
            
            return {
                ...f,
                opposition: totalDiff / count,
                avgDiff: totalDiff / count
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
    const factions = getAllFactionsWithValues().slice(0, 8);
    
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
        : allFactions.slice(0, 3);
    
    return `
        <div class="sv-comparison-view">
            <h3 class="sv-section-title">⚔️ Faction Comparison</h3>
            
            <div class="sv-comparison-selector">
                <p>Select factions to compare:</p>
                <div class="sv-comparison-chips">
                    ${allFactions.slice(0, 12).map(({ id, faction }) => `
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
            
            let totalDiff = 0;
            let count = 0;
            const differences = [];
            
            Object.entries(VALUE_AXES).forEach(([axisId, axis]) => {
                const v1 = f1.values[axisId] || 50;
                const v2 = f2.values[axisId] || 50;
                const diff = Math.abs(v1 - v2);
                totalDiff += diff;
                count++;
                
                if (diff > 40) {
                    differences.push({ axis, diff, f1Value: v1, f2Value: v2 });
                }
            });
            
            const compatibility = Math.round(100 - (totalDiff / count));
            
            pairs.push({
                f1: f1.faction,
                f2: f2.faction,
                compatibility,
                differences: differences.sort((a, b) => b.diff - a.diff).slice(0, 3)
            });
        }
    }
    
    return `
        <div class="sv-compatibility-grid">
            ${pairs.map(pair => {
                const statusClass = pair.compatibility >= 70 ? 'allied' : 
                                   pair.compatibility >= 40 ? 'neutral' : 'hostile';
                const statusText = pair.compatibility >= 70 ? 'Natural Allies' :
                                  pair.compatibility >= 40 ? 'Potential Partners' : 'Ideological Rivals';
                
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
                            <div class="sv-compat-label">${statusText}</div>
                        </div>
                        ${pair.differences.length > 0 ? `
                            <div class="sv-compat-conflicts">
                                <span class="sv-compat-conflicts-title">Key Differences:</span>
                                ${pair.differences.map(d => `
                                    <span class="sv-compat-conflict">
                                        ${d.axis.leftIcon}↔${d.axis.rightIcon} ${d.axis.name}
                                    </span>
                                `).join('')}
                            </div>
                        ` : '<div class="sv-compat-harmony">✨ Strong value alignment</div>'}
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
    getFactionValues
};
