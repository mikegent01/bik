// faction-registry.js

import { MDATA_F } from '../map-data.js';

// ============================================
// 1. MANUAL FACTION DEFINITIONS (OVERRIDES)
// These take priority over auto-generated ones
// ============================================
const MANUAL_FACTION_DEFINITIONS = {
    regency: {
        name: 'Mushroom Regency',
        shortName: 'Regency',
        leaderTitle: 'Lord Regent',
        leaderName: 'Toadsworth',
        color: '#4169E1',
        icon: '🍄',
        ideology: 'Constitutional Monarchy',
        goal: 'Maintain order and legitimacy until the Princess returns.',
        strengths: ['Legitimacy', 'Wealth', 'Infrastructure'],
        weaknesses: ['Bureaucracy', 'Slow Response'],
        allies: ['beanbean'],
        enemies: ['fawful', 'warlords'],
        description: "The official government of the Mushroom Kingdom, desperately trying to hold things together in Princess Peach's absence."
    },
    loyalists: {
        name: 'Peach Loyalists',
        shortName: 'Loyalists',
        leaderTitle: 'Commander',
        leaderName: 'Toadette',
        color: '#FFDAB9',
        icon: '👑',
        ideology: 'Royalist Zealotry',
        goal: 'Purge all usurpers and restore the true monarchy.',
        strengths: ['Morale', 'Guerilla Tactics', 'Popular Support'],
        weaknesses: ['Limited Resources', 'Extremism'],
        allies: ['regency'],
        enemies: ['fawful', 'criminals'],
        description: "Fanatical supporters of Princess Peach who believe the Regency has become corrupt."
    },
    fawful: {
        name: "Fawful's Dominion",
        shortName: 'Fawful',
        leaderTitle: 'Supreme Overlord',
        leaderName: 'Fawful',
        color: '#32CD32',
        icon: '😈',
        ideology: 'Technarcratic Conquest',
        goal: 'Total conquest and technological supremacy.',
        strengths: ['Advanced Tech', 'Castle Fortifications', 'Robot Armies'],
        weaknesses: ['Insanity', 'Overconfidence', 'No Allies'],
        allies: [],
        enemies: ['regency', 'loyalists', 'warlords'],
        description: "The mad genius Fawful has seized the royal castle and builds his mechanical army."
    },
    warlords: {
        name: 'Koopa Remnants',
        shortName: 'Remnants',
        leaderTitle: 'Regent Commander',
        leaderName: 'Kamek',
        color: '#006400',
        icon: '🐢',
        ideology: 'Koopa Restoration',
        goal: 'Find King Bowser and restore the Koopa Empire.',
        strengths: ['Magic Users', 'Veteran Soldiers', 'Fortresses'],
        weaknesses: ['Scattered Forces', 'Internal Disputes'],
        allies: [],
        enemies: ['regency', 'fawful'],
        description: "The remnants of Bowser's army, searching for their missing king."
    },
    criminals: {
        name: 'The Underworld',
        shortName: 'Criminals',
        leaderTitle: 'Don',
        leaderName: 'Murphy the Bandit King',
        color: '#A0522D',
        icon: '💀',
        ideology: 'Profit Above All',
        goal: 'Exploit the chaos to build a criminal empire.',
        strengths: ['Smuggling Networks', 'Bribery', 'Information'],
        weaknesses: ['No Trust', 'No Legitimacy'],
        allies: [],
        enemies: ['loyalists', 'iron_legion'],
        description: "A loose coalition of bandits, thieves, and criminal organizations."
    },
    iron_legion: {
        name: 'Iron Legion',
        shortName: 'Legion',
        leaderTitle: 'General',
        leaderName: 'Unknown Commander',
        color: '#ADB5BD',
        icon: '⚔️',
        ideology: 'Martial Order',
        goal: 'Impose order through military discipline.',
        strengths: ['Heavy Infantry', 'Discipline', 'Siege Warfare'],
        weaknesses: ['Slow Mobility', 'Rigid Tactics'],
        allies: [],
        enemies: ['criminals', 'fawful'],
        description: "A mysterious military order claiming to restore order through strength."
    },
    onyx_hand: {
        name: 'Onyx Hand',
        shortName: 'Onyx',
        leaderTitle: 'Shadow Master',
        leaderName: 'Unknown',
        color: '#8B0000',
        icon: '🌑',
        ideology: 'Dark Arcanism',
        goal: 'Acquire ancient artifacts and forbidden knowledge.',
        strengths: ['Stealth', 'Dark Magic', 'Assassination'],
        weaknesses: ['Public Distrust', 'Small Numbers'],
        allies: [],
        enemies: ['silver_flame', 'mages_guild'],
        description: "A secretive cabal of dark mages working toward sinister goals."
    },
    wario: {
        name: 'Wario Land Inc.',
        shortName: 'Wario',
        leaderTitle: 'CEO & President',
        leaderName: 'Wario',
        color: '#FFAC1C',
        icon: '💰',
        ideology: 'Capitalist Greed',
        goal: 'Get filthy rich by any means necessary.',
        strengths: ['Massive Wealth', 'Mercenaries'],
        weaknesses: ['Greed', 'Everyone Hates Wario'],
        allies: [],
        enemies: [],
        description: "Wario's corporate empire exploiting the war for profit."
    },
    yoshis: {
        name: 'Yoshi Clans',
        shortName: 'Yoshis',
        leaderTitle: 'Elder Chief',
        leaderName: 'Yoshi Elder',
        color: '#7FFF00',
        icon: '🥚',
        ideology: 'Isolationist Survival',
        goal: 'Protect the islands and stay neutral.',
        strengths: ['Home Terrain', 'Unity', 'Natural Defenses'],
        weaknesses: ['Limited Tech', 'Small Population'],
        allies: ['dk_crew'],
        enemies: [],
        description: "The peaceful Yoshi tribes defending their island paradise."
    },
    dk_crew: {
        name: 'Kong Family',
        shortName: 'Kongs',
        leaderTitle: 'King of the Jungle',
        leaderName: 'Donkey Kong',
        color: '#FFE135',
        icon: '🍌',
        ideology: 'Jungle Freedom',
        goal: 'Protect the banana hoard.',
        strengths: ['Raw Strength', 'Jungle Warfare'],
        weaknesses: ['No Politics', 'Easily Tricked'],
        allies: ['yoshis'],
        enemies: [],
        description: "The Kong family defending their territory with primal strength."
    },
    beanbean: {
        name: 'Beanbean Kingdom',
        shortName: 'Beanbean',
        leaderTitle: 'Queen',
        leaderName: 'Queen Bean',
        color: '#90EE90',
        icon: '🫘',
        ideology: 'Defensive Sovereignty',
        goal: 'Protect borders and maintain independence.',
        strengths: ['Diplomacy', 'Unique Magic'],
        weaknesses: ['Small Military'],
        allies: ['regency'],
        enemies: ['fawful'],
        description: "The neighboring Beanbean Kingdom trying to stay neutral."
    },
    regal_empire: {
        name: 'Regal Empire',
        shortName: 'Empire',
        leaderTitle: 'Emperor',
        leaderName: 'Unknown',
        color: '#FFD700',
        icon: '⚜️',
        ideology: 'Imperial Expansion',
        goal: 'Expand the empire.',
        strengths: ['Discipline', 'Resources'],
        weaknesses: ['Overextension', 'Arrogance'],
        allies: [],
        enemies: [],
        description: "A foreign imperial power seeing opportunity in the kingdom's weakness."
    },
    silver_flame: {
        name: 'Order of the Silver Flame',
        shortName: 'Silver Flame',
        leaderTitle: 'High Priest',
        leaderName: 'Father Luminos',
        color: '#C0C0C0',
        icon: '🔥',
        ideology: 'Holy Purification',
        goal: 'Purify the land of darkness.',
        strengths: ['Zealous Warriors', 'Healing Magic'],
        weaknesses: ['Intolerance', 'Extremism'],
        allies: [],
        enemies: ['onyx_hand', 'criminals'],
        description: "A militant religious order dedicated to burning away darkness."
    },
    mages_guild: {
        name: "Mages' Guild",
        shortName: 'Mages',
        leaderTitle: 'Archmage',
        leaderName: 'Merlon the Elder',
        color: '#9966CC',
        icon: '🔮',
        ideology: 'Magical Neutrality',
        goal: 'Preserve magical knowledge.',
        strengths: ['Powerful Magic', 'Knowledge'],
        weaknesses: ['Small Numbers', 'Political Naivety'],
        allies: [],
        enemies: ['onyx_hand'],
        description: "The ancient guild of mages trying to remain neutral."
    },
    unaligned: {
        name: 'Unaligned',
        shortName: 'Wild',
        leaderTitle: 'None',
        leaderName: 'N/A',
        color: '#6c757d',
        icon: '❓',
        ideology: 'None',
        goal: 'Survival',
        strengths: [],
        weaknesses: [],
        allies: [],
        enemies: [],
        description: "Territories and locations not controlled by any major faction."
    }
};

// ============================================
// 2. RAW FACTION ID TO SYSTEM ID MAPPING
// Maps POI factionIds to our system IDs
// ============================================
const MANUAL_FACTION_MAP = {
    'mushroom_regency': 'regency',
    'peach_loyalists': 'loyalists',
    'fawfuls_furious_freaks': 'fawful',
    'koopa_troop': 'warlords',
    'koopa_remnants': 'warlords',
    'toad_gang': 'criminals',
    'freelancer_underworld': 'criminals',
    'bandit_gang': 'criminals',
    'iron_legion': 'iron_legion',
    'onyx_hand': 'onyx_hand',
    'wario_land': 'wario',
    'wario_inc': 'wario',
    'yoshi_clans': 'yoshis',
    'yoshi_tribe': 'yoshis',
    'dk_crew': 'dk_crew',
    'kong_family': 'dk_crew',
    'beanbean_kingdom': 'beanbean',
    'regal_empire': 'regal_empire',
    'silver_flame': 'silver_flame',
    'mages_guild': 'mages_guild',
    'unaligned': 'unaligned',
    'neutral': 'unaligned',
    'none': 'unaligned',
    '': 'unaligned'
};

// ============================================
// 3. AUTO-GENERATION UTILITIES
// ============================================

// Color palette for auto-generated factions
const AUTO_COLORS = [
    '#E74C3C', '#3498DB', '#2ECC71', '#9B59B6', '#F39C12',
    '#1ABC9C', '#E91E63', '#00BCD4', '#FF5722', '#607D8B',
    '#8BC34A', '#FFC107', '#795548', '#673AB7', '#009688',
    '#FF9800', '#CDDC39', '#03A9F4', '#F44336', '#4CAF50',
    '#FFEB3B', '#9C27B0', '#00E5FF', '#76FF03', '#FF1744'
];

// Icon pool for auto-generated factions
const AUTO_ICONS = [
    '⚔️', '🛡️', '🏴', '🏰', '⭐', '🔶', '🔷', '🔴', '🟢', '🟡',
    '🟣', '🟠', '⚪', '🔵', '🟤', '👁️', '🗡️', '🏹', '🪓', '🔱',
    '⚡', '🌟', '💎', '🎭', '🦅', '🐉', '🦁', '🐺', '🦊', '🐍'
];

/**
 * Generate a consistent color from a string (hash-based)
 */
function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AUTO_COLORS[Math.abs(hash) % AUTO_COLORS.length];
}

/**
 * Generate a consistent icon from a string (hash-based)
 */
function stringToIcon(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AUTO_ICONS[Math.abs(hash) % AUTO_ICONS.length];
}

/**
 * Convert snake_case or kebab-case to Title Case
 */
function toTitleCase(str) {
    return str
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase())
        .trim();
}

/**
 * Generate a short name from full name
 */
function toShortName(name) {
    const words = name.split(' ');
    if (words.length === 1) return name.substring(0, 8);
    if (words.length === 2) return words[0];
    // For 3+ words, try acronym or first word
    if (name.length <= 10) return name;
    return words[0];
}

/**
 * Create a default faction definition for auto-discovered factions
 */
function createAutoFaction(systemId, rawId) {
    const name = toTitleCase(rawId || systemId);
    return {
        id: systemId,
        name: name,
        shortName: toShortName(name),
        leaderTitle: 'Leader',
        leaderName: 'Unknown',
        color: stringToColor(systemId),
        icon: stringToIcon(systemId),
        ideology: 'Unknown',
        goal: 'Unknown objectives.',
        strengths: ['Adaptable'],
        weaknesses: ['Unknown'],
        allies: [],
        enemies: [],
        description: `A faction known as ${name}. Little is known about their true intentions.`,
        isAutoGenerated: true
    };
}

// ============================================
// 4. FACTION DISCOVERY & REGISTRY
// ============================================

let _factionRegistry = null;
let _factionMap = null;
let _discoveredRawIds = null;

/**
 * Scan all map data and discover unique faction IDs
 */
function discoverFactionsFromMapData() {
    const rawFactionIds = new Set();

    Object.values(MDATA_F).forEach(region => {
        if (!region.pointsOfInterest) return;

        region.pointsOfInterest.forEach(poi => {
            if (poi.factionId) {
                rawFactionIds.add(poi.factionId);
            }
        });
    });

    return rawFactionIds;
}

/**
 * Build the complete faction registry
 * Combines manual definitions with auto-discovered factions
 */
function buildFactionRegistry() {
    const registry = {};
    const factionMap = { ...MANUAL_FACTION_MAP };
    const discoveredRawIds = discoverFactionsFromMapData();

    // 1. Add all manual definitions first
    Object.entries(MANUAL_FACTION_DEFINITIONS).forEach(([id, def]) => {
        registry[id] = {
            id,
            ...def,
            isAutoGenerated: false
        };
    });

    // 2. Process discovered raw IDs
    discoveredRawIds.forEach(rawId => {
        const normalizedRawId = rawId.toLowerCase().trim();

        // Check if we have a manual mapping
        if (MANUAL_FACTION_MAP[normalizedRawId]) {
            // Already mapped, ensure the mapping exists
            factionMap[normalizedRawId] = MANUAL_FACTION_MAP[normalizedRawId];
            return;
        }

        // Check if raw ID matches an existing system ID
        if (registry[normalizedRawId]) {
            factionMap[normalizedRawId] = normalizedRawId;
            return;
        }

        // Check if the raw ID is similar to any existing system ID
        const possibleMatch = Object.keys(registry).find(sysId => 
            normalizedRawId.includes(sysId) || sysId.includes(normalizedRawId)
        );

        if (possibleMatch) {
            factionMap[normalizedRawId] = possibleMatch;
            return;
        }

        // No match found - create new auto-generated faction
        const newSystemId = normalizedRawId.replace(/[^a-z0-9_]/g, '_');
        
        if (!registry[newSystemId]) {
            console.log(`[FactionRegistry] Auto-discovered new faction: "${rawId}" → "${newSystemId}"`);
            registry[newSystemId] = createAutoFaction(newSystemId, rawId);
        }

        factionMap[normalizedRawId] = newSystemId;
    });

    return { registry, factionMap, discoveredRawIds };
}

/**
 * Initialize or get the faction registry (singleton)
 */
function getRegistry() {
    if (!_factionRegistry) {
        const result = buildFactionRegistry();
        _factionRegistry = result.registry;
        _factionMap = result.factionMap;
        _discoveredRawIds = result.discoveredRawIds;

        console.log(`[FactionRegistry] Initialized with ${Object.keys(_factionRegistry).length} factions`);
        console.log(`[FactionRegistry] Manual: ${Object.keys(MANUAL_FACTION_DEFINITIONS).length}, Auto-discovered: ${Object.keys(_factionRegistry).length - Object.keys(MANUAL_FACTION_DEFINITIONS).length}`);
    }
    return { registry: _factionRegistry, factionMap: _factionMap, discoveredRawIds: _discoveredRawIds };
}

// ============================================
// 5. PUBLIC API
// ============================================

/**
 * Get all factions (combined manual + auto-discovered)
 */
export function getAllFactions() {
    return getRegistry().registry;
}

/**
 * Get a specific faction by system ID
 */
export function getFaction(systemId) {
    const { registry } = getRegistry();
    return registry[systemId] || registry['unaligned'];
}

/**
 * Get the faction map (raw ID → system ID)
 */
export function getFactionMap() {
    return getRegistry().factionMap;
}

/**
 * Convert a raw faction ID to system ID
 */
export function toSystemId(rawFactionId) {
    if (!rawFactionId) return 'unaligned';
    const { factionMap } = getRegistry();
    const normalized = rawFactionId.toLowerCase().trim();
    return factionMap[normalized] || factionMap[rawFactionId] || 'unaligned';
}

/**
 * Get list of all system IDs
 */
export function getAllSystemIds() {
    return Object.keys(getRegistry().registry);
}

/**
 * Get only manually defined factions
 */
export function getManualFactions() {
    const { registry } = getRegistry();
    const result = {};
    Object.entries(registry).forEach(([id, faction]) => {
        if (!faction.isAutoGenerated) {
            result[id] = faction;
        }
    });
    return result;
}

/**
 * Get only auto-discovered factions
 */
export function getAutoFactions() {
    const { registry } = getRegistry();
    const result = {};
    Object.entries(registry).forEach(([id, faction]) => {
        if (faction.isAutoGenerated) {
            result[id] = faction;
        }
    });
    return result;
}

/**
 * Check if a faction exists
 */
export function factionExists(systemId) {
    return !!getRegistry().registry[systemId];
}

/**
 * Force rebuild the registry (useful after map data changes)
 */
export function rebuildRegistry() {
    _factionRegistry = null;
    _factionMap = null;
    _discoveredRawIds = null;
    return getRegistry();
}

/**
 * Get faction color by system ID
 */
export function getFactionColor(systemId) {
    return getFaction(systemId)?.color || '#6c757d';
}

/**
 * Get faction icon by system ID
 */
export function getFactionIcon(systemId) {
    return getFaction(systemId)?.icon || '❓';
}

/**
 * Add or update a manual faction definition at runtime
 */
export function registerFaction(systemId, definition) {
    const { registry } = getRegistry();
    registry[systemId] = {
        id: systemId,
        ...definition,
        isAutoGenerated: false
    };
    console.log(`[FactionRegistry] Registered faction: ${systemId}`);
}

/**
 * Get summary statistics about factions
 */
export function getFactionStats() {
    const { registry, discoveredRawIds } = getRegistry();
    const manual = Object.values(registry).filter(f => !f.isAutoGenerated).length;
    const auto = Object.values(registry).filter(f => f.isAutoGenerated).length;
    
    return {
        total: Object.keys(registry).length,
        manual,
        autoDiscovered: auto,
        rawIdsFound: discoveredRawIds.size
    };
}