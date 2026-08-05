
// faction-registry.js - Complete Rewrite with Singleton Pattern

// ============================================
// IMPORTS
// ============================================

import { MAP_DATA } from '../data/maps/map-data.js';
import { LORE_DATA } from '../lore.js';
import { MIDLANDS_FACTIONS } from '../factions/midlands.js';
import { MUSHROOM_KINGDOM_FACTIONS } from '../factions/mushroom-kingdom.js';
import { WIDESPREAD_FACTIONS } from '../widespread.js';
import { WILDERLANDS_FACTIONS } from '../factions/wilderlands.js';
import { MIDDLE_EARTH_FACTIONS } from '../factions/middle-earth.js';
import { INTERNET_FACTIONS } from '../factions/internet.js';
import { WARHAMMER_FACTIONS } from '../factions/warhammer.js';
import { KIVOTOS_FACTIONS } from '../factions/kivotos.js';
import { SPACE_FACTIONS } from '../factions/space.js';
import { POKEMON_FACTIONS } from '../factions/pokemon.js';
import { EQUESTRIA_FACTIONS } from '../factions/equestria.js';
import { EARTH_LAND_FACTIONS } from '../factions/earth-land.js';

// ============================================
// STATIC DATA - COLORS (from CSS :root)
// ============================================

const COLORS = {
    // Core Factions
    regal_empire: '#FFD700',
    mushroom_regency: '#4169E1',
    peach_loyalists: '#FFDAB9',
    beanbean_kingdom: '#90EE90',
    flower_kingdom: '#FFB6C1',
    middle_earth_kingdoms: '#228B22',
    iron_legion: '#ADB5BD',
    iron_fists: '#495057',
    oathbound_judges: '#007BFF',
    silver_flame: '#C0C0C0',
    knights_of_the_gilded_lily: '#FAFAD2',
    onyx_hand: '#8B0000',
    mages_guild: '#8A2BE2',
    toad_cult: '#9932CC',
    moonfang_pack: '#556B2F',
    cosmic_jesters: '#FF69B4',
    starlight_weavers: '#FFD700',
    custodians_of_causality: '#00BFFF',
    void_drifters: '#483D8B',
    toad_gang: '#A0522D',
    freelancer_underworld: '#2F4F4F',
    crimson_fleet: '#DC143C',
    ratchet_raiders: '#D2691E',
    tea_leaf_syndicate: '#6B8E23',
    fawfuls_furious_freaks: '#32CD32',
    koopa_troop: '#006400',
    the_unchained: '#FF4500',
    kremling_krew: '#808000',
    yoshi_clans: '#7FFF00',
    dk_crew: '#FFE135',
    rakasha_clans: '#D2B48C',
    rebel_clans: '#800000',
    wario_land: '#FFAC1C',
    diamond_city_investigators: '#8B4513',
    goodstyle_artisans: '#20B2AA',
    data_merchant_guilds: '#F5DEB3',
    liberated_toads: '#87CEEB',
    internet_federation: '#00FFFF',
    hacktivist_collectives: '#00FF00',
    cybernetic_collectives: '#E0E0E0',
    
    // Warhammer
    wh_the_empire: '#c81d25',
    wh_dwarfs: '#0077b6',
    wh_greenskins: '#2d6a4f',
    wh_vampire_counts: '#800f2f',
    wh_chaos: '#a47c48',
    wh_skaven: '#70e000',
    wh_high_elves: '#ade8f4',
    wh_dark_elves: '#5a189a',
    wh_lizardmen: '#48bfe3',
    wh_tomb_kings: '#f0ead2',
    wh_araby: '#ffd60a',
    wh_bretonnia: '#00509d',
    wh_chaos_dwarfs: '#b21e35',
    wh_grand_cathay: '#52b788',
    wh_hobgoblins: '#8d6e63',
    
    // Kivotos
    kivotos_gsu: '#4a86e8',
    kivotos_millennium: '#674ea7',
    kivotos_trinity: '#f1c232',
    kivotos_gehenna: '#cc0000',
    kivotos_shanhaijing: '#93c47d',
    kivotos_abydos: '#e69138',
    kivotos_red_winter: '#a61c00',
    
    // Pokemon
    pokemon_league: '#3b4cca',
    pokemon_plasma: '#7b8b8c',
    pokemon_trainer: '#ff0000',
    pokemon_aqua: '#0077b6',
    pokemon_magma: '#b21e35',
    pokemon_flare: '#fd7e14',
    pokemon_rocket: '#212529',
    pokemon_star: '#e94a89',
    pokemon_ranger: '#4CAF50',
    pokemon_gorock: '#795548',

    // Earth Land
    fiore_kingdom: '#4fc3f7',
    alvarez_empire: '#d32f2f',
    tartaros_guild: '#212121',
    
    // System
    unaligned: '#6c757d'
};

// ============================================
// STATIC DATA - ICONS
// ============================================

const ICONS = {
    regal_empire: '⚜️',
    mushroom_regency: '🍄',
    peach_loyalists: '👑',
    beanbean_kingdom: '🫘',
    flower_kingdom: '🌸',
    middle_earth_kingdoms: '🏔️',
    iron_legion: '⚔️',
    iron_fists: '✊',
    oathbound_judges: '⚖️',
    silver_flame: '🔥',
    knights_of_the_gilded_lily: '🛡️',
    onyx_hand: '🌑',
    mages_guild: '🔮',
    toad_cult: '👁️',
    moonfang_pack: '🐺',
    cosmic_jesters: '🎭',
    starlight_weavers: '✨',
    custodians_of_causality: '⏳',
    void_drifters: '🌌',
    toad_gang: '💀',
    freelancer_underworld: '🗡️',
    crimson_fleet: '🏴‍☠️',
    ratchet_raiders: '🦅',
    tea_leaf_syndicate: '🍵',
    fawfuls_furious_freaks: '😈',
    koopa_troop: '🐢',
    the_unchained: '⛓️',
    kremling_krew: '🐊',
    yoshi_clans: '🥚',
    dk_crew: '🍌',
    rakasha_clans: '🐅',
    rebel_clans: '🏴',
    wario_land: '💰',
    diamond_city_investigators: '🔍',
    goodstyle_artisans: '🎨',
    data_merchant_guilds: '💾',
    liberated_toads: '✊',
    internet_federation: '🌐',
    hacktivist_collectives: '💻',
    cybernetic_collectives: '🤖',
    wh_the_empire: '🦅',
    wh_dwarfs: '⛏️',
    wh_greenskins: '👹',
    wh_vampire_counts: '🧛',
    wh_chaos: '☠️',
    wh_skaven: '🐀',
    wh_high_elves: '🧝',
    wh_dark_elves: '🗡️',
    wh_lizardmen: '🦎',
    wh_tomb_kings: '💀',
    wh_araby: '🏜️',
    wh_bretonnia: '🛡️',
    wh_chaos_dwarfs: '🔥',
    wh_grand_cathay: '🐉',
    wh_hobgoblins: '👺',
    kivotos_gsu: '🎓',
    kivotos_millennium: '🔬',
    kivotos_trinity: '✝️',
    kivotos_gehenna: '😈',
    kivotos_shanhaijing: '🐲',
    kivotos_abydos: '🏛️',
    kivotos_red_winter: '❄️',
    pokemon_league: '🏆',
    pokemon_plasma: '⚡',
    pokemon_trainer: '🧢',
    pokemon_aqua: '🌊',
    pokemon_magma: '🌋',
    pokemon_flare: '🔥',
    pokemon_rocket: '🚀',
    pokemon_star: '⭐',
    pokemon_ranger: '🌿',
    pokemon_gorock: '🎸',
    fiore_kingdom: '🧚',
    alvarez_empire: '🛡️',
    tartaros_guild: '👹',
    unaligned: '❓'
};

// ============================================
// CATEGORY FALLBACKS
// ============================================

const CATEGORY_COLORS = {
    'major powers': '#e3b341',
    'regional powers': '#fd7e14',
    'mystical & ancient': '#a371f7',
    'underworld & fringe': '#6a737d',
    'interdimensional threat': '#e94a89',
    'criminal': '#A0522D',
    'underworld': '#2F4F4F',
    'military': '#ADB5BD',
    'religious': '#C0C0C0',
    'magical': '#8A2BE2',
    'mystical': '#a371f7',
    'political': '#4169E1',
    'tribal': '#556B2F',
    'merchant': '#FFD700',
    'nature': '#228B22',
    'neutral': '#6c757d'
};

const CATEGORY_ICONS = {
    'major powers': '👑',
    'regional powers': '🏰',
    'mystical & ancient': '🔮',
    'underworld & fringe': '🌑',
    'interdimensional threat': '🌀',
    'criminal': '💀',
    'underworld': '🗡️',
    'military': '⚔️',
    'religious': '🔥',
    'magical': '✨',
    'mystical': '🔮',
    'political': '👑',
    'tribal': '🦁',
    'merchant': '💰',
    'nature': '🌿',
    'neutral': '⚪'
};

// ============================================
// THE GLOBAL REGISTRY OBJECT
// ============================================

const FactionRegistry = {
    _factions: {},
    _idMap: {},
    _initialized: false,
    
    // Initialize the registry
    init() {
        if (this._initialized) {
            return this;
        }
        
        console.log('[FactionRegistry] Initializing...');
        
        // Collect all faction sources
        const allSources = this._collectAllSources();
        
        // Process each source
        for (const [sourceId, sourceData] of Object.entries(allSources)) {
            if (!sourceData || typeof sourceData !== 'object') continue;
            
            for (const [rawKey, rawData] of Object.entries(sourceData)) {
                const id = this._normalizeId(rawKey);
                
                // Skip if already exists (first source wins)
                if (this._factions[id]) continue;
                
                // Build faction object
                this._factions[id] = this._buildFaction(id, rawKey, rawData, sourceId);
                
                // Add to ID map
                this._idMap[id] = id;
                this._idMap[rawKey] = id;
                this._idMap[rawKey.toLowerCase()] = id;
            }
        }
        
        // Discover from map
        this._discoverFromMap();
        
        // Ensure unaligned exists
        if (!this._factions['unaligned']) {
            this._factions['unaligned'] = this._createUnaligned();
        }
        
        // Build additional ID mappings
        this._buildIdMappings();
        
        this._initialized = true;
        console.log(`[FactionRegistry] Initialized with ${Object.keys(this._factions).length} factions`);
        
        return this;
    },
    
    // Collect all source data
    _collectAllSources() {
        const sources = {};
        
        // Add LORE_DATA first (highest priority)
        if (LORE_DATA && LORE_DATA.factions) {
            sources['lore'] = LORE_DATA.factions;
        }
        
        // Add faction files
        if (MUSHROOM_KINGDOM_FACTIONS) sources['mushroom_kingdom'] = MUSHROOM_KINGDOM_FACTIONS;
        if (WIDESPREAD_FACTIONS) sources['widespread'] = WIDESPREAD_FACTIONS;
        if (MIDLANDS_FACTIONS) sources['midlands'] = MIDLANDS_FACTIONS;
        if (WILDERLANDS_FACTIONS) sources['wilderlands'] = WILDERLANDS_FACTIONS;
        if (MIDDLE_EARTH_FACTIONS) sources['middle_earth'] = MIDDLE_EARTH_FACTIONS;
        if (INTERNET_FACTIONS) sources['internet'] = INTERNET_FACTIONS;
        if (WARHAMMER_FACTIONS) sources['warhammer'] = WARHAMMER_FACTIONS;
        if (KIVOTOS_FACTIONS) sources['kivotos'] = KIVOTOS_FACTIONS;
        if (SPACE_FACTIONS) sources['space'] = SPACE_FACTIONS;
        if (POKEMON_FACTIONS) sources['pokemon'] = POKEMON_FACTIONS;
        if (EQUESTRIA_FACTIONS) sources['equestria'] = EQUESTRIA_FACTIONS;
        if (EARTH_LAND_FACTIONS) sources['earth_land'] = EARTH_LAND_FACTIONS;
        
        return sources;
    },
    
    // Normalize faction ID
    _normalizeId(rawId) {
        if (!rawId) return 'unknown';
        return String(rawId).toLowerCase().trim().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    },
    
    // Build a faction object from raw data
    _buildFaction(id, rawKey, data, source) {
        const name = data.name || this._toTitleCase(rawKey);
        const category = data.category || 'Unknown';
        const leader = this._extractLeader(data);
        const relations = this._extractRelations(data);
        
        return {
            id: id,
            name: name,
            shortName: this._toShortName(name),
            leaderTitle: leader.title,
            leaderName: leader.name,
            color: COLORS[id] || this._getCategoryColor(category),
            icon: ICONS[id] || this._getCategoryIcon(category),
            ideology: this._inferIdeology(name, category, data.description),
            goal: this._inferGoal(data.description),
            strengths: this._inferStrengths(category, data.power_level),
            weaknesses: this._inferWeaknesses(category, data.power_level),
            allies: relations.allies,
            enemies: relations.enemies,
            description: data.description || `A faction known as ${name}.`,
            powerLevel: data.power_level || 5,
            category: category,
            region: data.region || 'Unknown',
            logo: data.logo || null,
            notablePeople: data.notable_people || [],
            internalPolitics: data.internal_politics || null,
            waluigiTip: data.waluigi_tip || null,
            source: source,
            isAutoGenerated: false
        };
    },
    
    // Create unaligned faction
    _createUnaligned() {
        return {
            id: 'unaligned',
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
            description: 'Territories not controlled by any major faction.',
            powerLevel: 0,
            category: 'Neutral',
            region: 'N/A',
            logo: null,
            notablePeople: [],
            internalPolitics: null,
            waluigiTip: null,
            source: 'system',
            isAutoGenerated: false
        };
    },
    
    // Discover factions from map data
    _discoverFromMap() {
        // Prefer MAP_DATA for comprehensive global coverage
        const data = MAP_DATA || MDATA_F;
        if (!data) return;
        
        let discovered = 0;
        
        for (const region of Object.values(data)) {
            if (!region.pointsOfInterest) continue;
            
            for (const poi of region.pointsOfInterest) {
                if (!poi.factionId || poi.factionId.trim() === '') continue;
                
                const id = this._normalizeId(poi.factionId);
                
                // Skip if already exists
                if (this._factions[id]) {
                    // Just add to ID map
                    this._idMap[poi.factionId] = id;
                    continue;
                }
                
                // Create minimal faction
                const name = this._toTitleCase(poi.factionId);
                this._factions[id] = {
                    id: id,
                    name: name,
                    shortName: this._toShortName(name),
                    leaderTitle: 'Leader',
                    leaderName: 'Unknown',
                    color: COLORS[id] || '#6c757d',
                    icon: ICONS[id] || '❓',
                    ideology: 'Unknown',
                    goal: 'Unknown objectives.',
                    strengths: ['Adaptable'],
                    weaknesses: ['Unknown'],
                    allies: [],
                    enemies: [],
                    description: `A faction known as ${name}.`,
                    powerLevel: 3,
                    category: 'Unknown',
                    region: 'Unknown',
                    logo: null,
                    notablePeople: [],
                    internalPolitics: null,
                    waluigiTip: null,
                    source: 'map_discovery',
                    isAutoGenerated: true
                };
                
                this._idMap[poi.factionId] = id;
                discovered++;
            }
        }
        
        if (discovered > 0) {
            console.log(`[FactionRegistry] Discovered ${discovered} factions from map`);
        }
    },
    
    // Build additional ID mappings
    _buildIdMappings() {
        // Common aliases
        const aliases = {
            'koopa_remnants': 'koopa_troop',
            'warlords': 'koopa_troop',
            'criminals': 'freelancer_underworld',
            'regency': 'mushroom_regency',
            'loyalists': 'peach_loyalists',
            'fawful': 'fawfuls_furious_freaks',
            'neutral': 'unaligned',
            'none': 'unaligned',
            '': 'unaligned'
        };
        
        for (const [alias, target] of Object.entries(aliases)) {
            if (this._factions[target]) {
                this._idMap[alias] = target;
            }
        }
        
        // Add variations for each faction
        for (const id of Object.keys(this._factions)) {
            // kebab-case
            this._idMap[id.replace(/_/g, '-')] = id;
            // no separators
            this._idMap[id.replace(/_/g, '')] = id;
        }
    },
    
    // Extract leader from data
    _extractLeader(data) {
        // Check notable_people
        if (data.notable_people && data.notable_people.length > 0) {
            const leaderRoles = ['leader', 'head', 'boss', 'chief', 'king', 'queen', 
                               'lord', 'lady', 'president', 'ceo', 'commander', 
                               'general', 'captain', 'master', 'don', 'archmage',
                               'supreme', 'ruler', 'sovereign', 'alpha', 'elder'];
            
            const leader = data.notable_people.find(p => {
                const role = (p.role || '').toLowerCase();
                return leaderRoles.some(r => role.includes(r));
            }) || data.notable_people[0];
            
            return { title: leader.role || 'Leader', name: leader.name || 'Unknown' };
        }
        
        // Check leader string
        if (data.leader && typeof data.leader === 'string') {
            return { title: 'Leader', name: this._toTitleCase(data.leader) };
        }
        
        return { title: 'Leader', name: 'Unknown' };
    },
    
    // Extract relations
    _extractRelations(data) {
        const result = { allies: [], enemies: [] };
        
        if (data.relations) {
            if (Array.isArray(data.relations.allies)) {
                result.allies = [...data.relations.allies];
            }
            if (Array.isArray(data.relations.enemies)) {
                result.enemies = [...data.relations.enemies];
            }
        }
        
        return result;
    },
    
    // Convert to title case
    _toTitleCase(str) {
        if (!str) return 'Unknown';
        return String(str)
            .replace(/[-_]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .split(' ')
            .map((word, i) => {
                if (!word) return '';
                const skip = ['of', 'the', 'and', 'in', 'on', 'at', 'to', 'for'];
                if (i > 0 && skip.includes(word.toLowerCase())) {
                    return word.toLowerCase();
                }
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join(' ');
    },
    
    // Convert to short name
    _toShortName(name) {
        if (!name) return 'Unknown';
        if (name.length <= 14) return name;
        
        const words = name.split(' ');
        const skip = ['the', 'a', 'an', 'of', 'and'];
        const meaningful = words.filter(w => !skip.includes(w.toLowerCase()));
        
        if (meaningful.length === 0) return words[0] || name.substring(0, 14);
        if (meaningful.length === 1) return meaningful[0];
        
        const twoWords = meaningful.slice(0, 2).join(' ');
        if (twoWords.length <= 16) return twoWords;
        
        return meaningful[0];
    },
    
    // Get color for category
    _getCategoryColor(category) {
        if (!category) return '#6c757d';
        const lower = category.toLowerCase();
        for (const [key, color] of Object.entries(CATEGORY_COLORS)) {
            if (lower.includes(key)) return color;
        }
        return '#6c757d';
    },
    
    // Get icon for category
    _getCategoryIcon(category) {
        if (!category) return '❓';
        const lower = category.toLowerCase();
        for (const [key, icon] of Object.entries(CATEGORY_ICONS)) {
            if (lower.includes(key)) return icon;
        }
        return '❓';
    },
    
    // Infer ideology
    _inferIdeology(name, category, desc) {
        if (category && category !== 'Unknown') return category;
        
        const text = ((name || '') + ' ' + (desc || '')).toLowerCase();
        
        const patterns = [
            [['criminal', 'gang', 'thief'], 'Criminal Enterprise'],
            [['empire', 'imperial'], 'Imperial'],
            [['kingdom', 'regency', 'royal'], 'Monarchy'],
            [['cult', 'church', 'religious'], 'Religious Order'],
            [['guild', 'mage', 'magic'], 'Magical Collective'],
            [['legion', 'army', 'military'], 'Martial Order'],
            [['tribe', 'clan', 'pack'], 'Tribal'],
            [['rebel', 'liberation', 'freedom'], 'Revolutionary']
        ];
        
        for (const [keywords, ideology] of patterns) {
            if (keywords.some(k => text.includes(k))) return ideology;
        }
        
        return 'Independent';
    },
    
    // Infer goal
    _inferGoal(desc) {
        if (!desc) return 'Unknown objectives.';
        
        const indicators = ['operating for', 'dedicated to', 'seeking to', 'aims to'];
        const lower = desc.toLowerCase();
        
        for (const ind of indicators) {
            const idx = lower.indexOf(ind);
            if (idx !== -1) {
                const after = desc.substring(idx + ind.length);
                const end = after.search(/[.!?]/);
                if (end > 0 && end <= 80) {
                    return after.substring(0, end + 1).trim();
                }
            }
        }
        
        return 'Pursue their own agenda.';
    },
    
    // Infer strengths
    _inferStrengths(category, powerLevel) {
        const strengths = [];
        const cat = (category || '').toLowerCase();
        
        if (cat.includes('military')) strengths.push('Disciplined Forces');
        if (cat.includes('magical') || cat.includes('mystical')) strengths.push('Magical Power');
        if (cat.includes('criminal') || cat.includes('underworld')) strengths.push('Information Network');
        if (cat.includes('major')) strengths.push('Vast Resources');
        
        if (powerLevel >= 8) strengths.push('Major Power');
        else if (powerLevel >= 5) strengths.push('Established');
        else strengths.push('Adaptable');
        
        return strengths.slice(0, 3);
    },
    
    // Infer weaknesses
    _inferWeaknesses(category, powerLevel) {
        const weaknesses = [];
        const cat = (category || '').toLowerCase();
        
        if (cat.includes('criminal')) weaknesses.push('No Legitimacy');
        if (cat.includes('religious')) weaknesses.push('Extremism');
        if (powerLevel >= 8) weaknesses.push('Overextension');
        if (powerLevel <= 3) weaknesses.push('Limited Resources');
        
        return weaknesses.length > 0 ? weaknesses : ['Unknown'];
    },
    
    // ==========================================
    // PUBLIC API
    // ==========================================
    
    // Get a faction by ID
    get(id) {
        this.init();
        
        if (!id) return this._factions['unaligned'];
        
        const normalId = this._normalizeId(id);
        
        // Direct lookup
        if (this._factions[normalId]) {
            return this._factions[normalId];
        }
        
        // Try ID map
        const mappedId = this._idMap[normalId] || this._idMap[id] || this._idMap[id?.toLowerCase?.()];
        if (mappedId && this._factions[mappedId]) {
            return this._factions[mappedId];
        }
        
        // Not found
        return this._factions['unaligned'];
    },
    
    // Get all factions
    getAll() {
        this.init();
        return { ...this._factions };
    },
    
    // Check if faction exists
    exists(id) {
        this.init();
        const normalId = this._normalizeId(id);
        return !!(this._factions[normalId] || this._idMap[normalId] || this._idMap[id]);
    },
    
    // Get faction color
    getColor(id) {
        return this.get(id)?.color || '#6c757d';
    },
    
    // Get faction icon
    getIcon(id) {
        return this.get(id)?.icon || '❓';
    },
    
    // Get all IDs
    getAllIds() {
        this.init();
        return Object.keys(this._factions);
    },
    
    // Search factions
    search(query) {
        this.init();
        if (!query) return [];
        
        const lower = query.toLowerCase();
        return Object.values(this._factions).filter(f => 
            f.name.toLowerCase().includes(lower) ||
            f.description?.toLowerCase().includes(lower) ||
            f.category?.toLowerCase().includes(lower)
        );
    },
    
    // Get by category
    getByCategory(category) {
        this.init();
        return Object.values(this._factions).filter(f => 
            f.category?.toLowerCase().includes(category.toLowerCase())
        );
    },
    
    // Get by region
    getByRegion(region) {
        this.init();
        return Object.values(this._factions).filter(f => 
            f.region?.toLowerCase().includes(region.toLowerCase())
        );
    },
    
    // Get stats
    getStats() {
        this.init();
        const bySource = {};
        for (const f of Object.values(this._factions)) {
            bySource[f.source] = (bySource[f.source] || 0) + 1;
        }
        return {
            total: Object.keys(this._factions).length,
            bySource
        };
    },
    
    // Force rebuild
    rebuild() {
        this._factions = {};
        this._idMap = {};
        this._initialized = false;
        return this.init();
    }
};

// ============================================
// INITIALIZE ON LOAD
// ============================================

FactionRegistry.init();

// ============================================
// EXPORT FUNCTIONS (for compatibility)
// ============================================

export function getAllFactions() {
    return FactionRegistry.getAll();
}

export function getFaction(id) {
    return FactionRegistry.get(id);
}

export function factionExists(id) {
    return FactionRegistry.exists(id);
}

export function getFactionColor(id) {
    return FactionRegistry.getColor(id);
}

export function getFactionIcon(id) {
    return FactionRegistry.getIcon(id);
}

export function getAllSystemIds() {
    return FactionRegistry.getAllIds();
}

export function toSystemId(rawId) {
    if (!rawId) return 'unaligned';
    return FactionRegistry._normalizeId(rawId);
}

export function getFactionMap() {
    FactionRegistry.init();
    return { ...FactionRegistry._idMap };
}

export function searchFactions(query) {
    return FactionRegistry.search(query);
}

export function getFactionsByCategory(category) {
    return FactionRegistry.getByCategory(category);
}

export function getFactionsByRegion(region) {
    return FactionRegistry.getByRegion(region);
}

export function getFactionStats() {
    return FactionRegistry.getStats();
}

export function rebuildRegistry() {
    return FactionRegistry.rebuild();
}

export function getAutoFactions() {
    FactionRegistry.init();
    return Object.fromEntries(
        Object.entries(FactionRegistry._factions).filter(([, f]) => f.isAutoGenerated)
    );
}

export function registerFaction(id, data) {
    FactionRegistry.init();
    const normalId = FactionRegistry._normalizeId(id);
    FactionRegistry._factions[normalId] = FactionRegistry._buildFaction(normalId, id, data, 'runtime');
    FactionRegistry._idMap[id] = normalId;
    console.log(`[FactionRegistry] Registered: ${normalId}`);
}

export function getAllCategories() {
    FactionRegistry.init();
    const cats = new Set();
    for (const f of Object.values(FactionRegistry._factions)) {
        if (f.category && f.category !== 'Unknown') cats.add(f.category);
    }
    return [...cats].sort();
}

export function getAllRegions() {
    FactionRegistry.init();
    const regions = new Set();
    for (const f of Object.values(FactionRegistry._factions)) {
        if (f.region && f.region !== 'Unknown' && f.region !== 'N/A') {
            regions.add(f.region);
        }
    }
    return [...regions].sort();
}

// Also export the registry object itself for direct access if needed
export { FactionRegistry };
