// mushroom-kingdom-system.js - Rewritten to use FactionRegistry

import { getRealTimeMapStats, getDetailedFactionStats, getDetailedRegionStats } from './map-analysis.js';
import { CURRENT_GAME_DATE } from '../calendar-data.js';
import { getFaction, getAllFactions } from './faction-registry.js';
import { MAJOR_BATTLES } from '../battlefield.js';
import { MAP_DATA } from '../map-data.js';

// --- IMPORT THE CANONICAL CALCULATOR & LIMITS ---
import { calculateAllAlliances, ALLIANCE_SIZE_LIMITS } from '../alliances-page.js';// ============================================
// 1. CONFIGURATION
// ============================================

const SCRIPTED_ALLIANCES = [
    {
        id: 'iron_pact',
        name: 'The Iron Pact',
        type: 'coalition',
        members: ['regal_empire', 'iron_legion', 'iron_fists'],
        leader: 'regal_empire',
        description: 'Military alliance between the Regal Empire and its iron-fisted allies',
        isScripted: true
    },
    {
        id: 'koopa_alliance',
        name: 'Koopa Dominion',
        type: 'alliance',
        members: ['koopa_troop', 'kremling_krew'],
        leader: 'koopa_troop',
        description: 'Alliance of reptilian warlords',
        isScripted: true
    },
    {
        id: 'liberation_front',
        name: 'Liberation Front',
        type: 'coalition',
        members: ['liberated_toads', 'the_unchained', 'peach_loyalists'],
        leader: 'liberated_toads',
        description: 'Freedom fighters united against tyranny',
        isScripted: true
    },
    {
        id: 'arcane_council',
        name: 'Arcane Council',
        type: 'pact',
        members: ['mages_guild', 'cosmic_jesters'],
        leader: 'mages_guild',
        description: 'Magical factions united in pursuit of arcane knowledge',
        isScripted: true
    }
];
const ALLIANCE_EXCLUDED_FACTIONS = [
    'freelancer_underworld',  // Freelancers by nature
    'unaligned',
    'independent',
    'tea_leaf_syndicate',     // Criminal organization
    'crimson_fleet',          // Pirates
    'onyx_hand'               // Assassins guild
];
function isExcludedFromAlliances(factionId) {
    if (!factionId) return true;
    
    const idLower = factionId.toLowerCase();
    
    // Check direct exclusion
    if (ALLIANCE_EXCLUDED_FACTIONS.includes(idLower)) return true;
    if (ALLIANCE_EXCLUDED_FACTIONS.includes(factionId)) return true;
    
    // Check for freelancer/mercenary keywords
    const faction = getFaction(factionId);
    if (faction) {
        const name = (faction.name || '').toLowerCase();
        const type = (faction.type || '').toLowerCase();
        
        if (name.includes('freelancer') || name.includes('mercenary') || 
            name.includes('underworld') || name.includes('criminal') ||
            type.includes('criminal') || type.includes('mercenary')) {
            return true;
        }
    }
    
    return false;
}

export const CIVIL_WAR_CONFIG = {
    name: "Mushroom Kingdom Civil War",
    startDate: { year: 998, monthIndex: 6, day: 1 },
    status: "Active Conflict",
    description: "The kingdom is fractured. The Regency holds the plains, Loyalists wage crusade, while new powers like the Iron Legion and Onyx Hand enter the fray."
};
let allianceCache = null;
let allianceCacheTime = 0;
const CACHE_DURATION = 30000; // 30 seconds
function getFactionsAtWar() {
    const atWar = new Map();
    
    // Check if MAJOR_BATTLES exists
    if (typeof MAJOR_BATTLES === 'undefined' || !MAJOR_BATTLES || !Array.isArray(MAJOR_BATTLES)) {
        return atWar;
    }
    
    const ongoingBattles = MAJOR_BATTLES.filter(battle => {
        const outcome = (battle.outcome || '').toLowerCase();
        return outcome.includes('ongoing');
    });
    
    ongoingBattles.forEach(battle => {
        const belligerents = battle.belligerents || {};
        const sides = ['side_a', 'side_b', 'side_c', 'side_d'];
        
        const sidesFactions = sides
            .filter(s => belligerents[s])
            .map(s => belligerents[s].factions || []);
        
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


function areFactionsAtWar(factionId1, factionId2) {
    const atWar = getFactionsAtWar();
    return atWar.has(factionId1) && atWar.get(factionId1).has(factionId2);
}
function isFactionAtWar(factionId) {
    const atWar = getFactionsAtWar();
    return atWar.has(factionId) && atWar.get(factionId).size > 0;
}
function getFactionEnemies(factionId) {
    const atWar = getFactionsAtWar();
    return atWar.has(factionId) ? Array.from(atWar.get(factionId)) : [];
}

function getFactionTotalPOIs(factionId) {
    // Try getDetailedFactionStats first
    if (typeof getDetailedFactionStats === 'function') {
        const stats = getDetailedFactionStats(factionId);
        if (stats?.poiCount) return stats.poiCount;
    }
    
    // Fallback: count POIs directly from MAP_DATA
    if (!MAP_DATA) return 0;
    
    let count = 0;
    Object.entries(MAP_DATA).forEach(([regionId, region]) => {
        if (!regionId.endsWith('_full')) return;
        const pois = region.pointsOfInterest || [];
        pois.forEach(poi => {
            if (poi.factionId === factionId) count++;
        });
    });
    
    return count;
}



function getAllianceThreshold(currentAllianceSize) {
    const base = ALLIANCE_SIZE_LIMITS.BASE_THRESHOLD;
    const penalty = currentAllianceSize * ALLIANCE_SIZE_LIMITS.SIZE_PENALTY_PER_MEMBER;
    return Math.min(95, base + penalty); // Cap at 95%
}
function canJoinAlliance(factionId, alliance, compatMatrix, factionsAtWar) {
    // Check POI minimum (relaxed)
    const poiCount = getFactionTotalPOIs(factionId);
    if (poiCount < 1) {
        return { canJoin: false, reason: 'no_territory' };
    }
    
    // Check alliance size limit
    if (alliance.members.length >= ALLIANCE_SIZE_LIMITS.MAX_ALLIANCE_SIZE) {
        return { canJoin: false, reason: 'alliance_full' };
    }
    
    // Check if at war with any alliance member
    if (factionsAtWar && factionsAtWar.has(factionId)) {
        for (const memberId of alliance.members) {
            if (factionsAtWar.get(factionId).has(memberId)) {
                return { canJoin: false, reason: 'at_war', warWith: memberId };
            }
        }
    }
    
    // Calculate average compatibility
    let totalCompat = 0;
    alliance.members.forEach(memberId => {
        const compat = compatMatrix[factionId]?.[memberId]?.compatibility || 50;
        totalCompat += compat;
    });
    const avgCompat = totalCompat / alliance.members.length;
    
    // Dynamic threshold
    const threshold = getAllianceThreshold(alliance.members.length);
    
    if (avgCompat < threshold) {
        return { canJoin: false, reason: 'incompatible', compatibility: avgCompat, threshold };
    }
    
    return { canJoin: true, compatibility: avgCompat };
}
function calculateAlliances() {
    const now = Date.now();
    if (allianceCache && (now - allianceCacheTime) < CACHE_DURATION) {
        return allianceCache;
    }
    
    // 1. Get the canonical alliance data
    const canonicalData = calculateCanonicalAlliances();
    
    // 2. Get local war data (which might not be in the canonical export)
    const factionsAtWar = getFactionsAtWar();

    // 3. Ensure "activeWars" property exists on alliances (used by territory modal)
    canonicalData.alliances.forEach(alliance => {
        if (!alliance.activeWars) {
            alliance.activeWars = [];
            alliance.members.forEach(memberId => {
                if (factionsAtWar.has(memberId)) {
                    factionsAtWar.get(memberId).forEach(enemyId => {
                        if (!alliance.activeWars.includes(enemyId)) {
                            alliance.activeWars.push(enemyId);
                        }
                    });
                }
            });
        }
        
        // Ensure totalPOIs is calculated if missing
        if (alliance.totalPOIs === undefined) {
             let total = 0;
             alliance.members.forEach(m => {
                 total += getFactionTotalPOIs(m);
             });
             alliance.totalPOIs = total;
        }
    });

    // 4. Merge and cache
    allianceCache = {
        ...canonicalData,
        factionsAtWar
    };
    allianceCacheTime = now;
    
    return allianceCache;
}

function calculateRegionalAlliancePresence(regionPois, factionToAlliance) {
    const factionPresence = {};
    const alliancePresence = {};
    
    regionPois.forEach(poi => {
        const fid = poi.factionId;
        if (!fid || fid === 'unaligned') return;
        
        if (!factionPresence[fid]) {
            factionPresence[fid] = {
                poiCount: 0,
                military: 0,
                economic: 0,
                political: 0,
                totalPower: 0
            };
        }
        
        factionPresence[fid].poiCount++;
        factionPresence[fid].military += poi.military_strength || 0;
        factionPresence[fid].economic += poi.economic_value || 0;
        factionPresence[fid].political += poi.political_influence || 0;
    });
    
    Object.entries(factionPresence).forEach(([fid, stats]) => {
        stats.totalPower = (stats.military * 2) + (stats.economic * 1.5) + (stats.political * 1) + (stats.poiCount * 5);
    });
    
    // Only count toward alliance if faction has MIN_POI_REGIONAL presence
    Object.entries(factionPresence).forEach(([fid, stats]) => {
        const alliance = factionToAlliance[fid];
        
        if (alliance && stats.poiCount >= ALLIANCE_SIZE_LIMITS.MIN_POI_REGIONAL) {
            if (!alliancePresence[alliance.id]) {
                alliancePresence[alliance.id] = {
                    alliance,
                    members: [],
                    totalPower: 0,
                    military: 0,
                    economic: 0,
                    political: 0,
                    poiCount: 0
                };
            }
            alliancePresence[alliance.id].members.push({ factionId: fid, stats });
            alliancePresence[alliance.id].totalPower += stats.totalPower;
            alliancePresence[alliance.id].military += stats.military;
            alliancePresence[alliance.id].economic += stats.economic;
            alliancePresence[alliance.id].political += stats.political;
            alliancePresence[alliance.id].poiCount += stats.poiCount;
        }
    });
    
    return { factionPresence, alliancePresence };
}

function getFactionAlliance(factionId) {
    const { factionToAlliance } = calculateAlliances();
    return factionToAlliance[factionId] || null;
}

/**
 * Get all alliances
 */
function getAllAlliances() {
    const { alliances } = calculateAlliances();
    return alliances;
}
// ============================================
// 2. FACTION KEY MAPPING
// Maps short keys used in this file to registry IDs
// ============================================
const FACTION_KEY_MAP = {
    // Short key -> Registry ID
    'regency': 'mushroom_regency',
    'loyalists': 'peach_loyalists',
    'fawful': 'fawfuls_furious_freaks',
    'warlords': 'koopa_troop',
    'criminals': 'freelancer_underworld',
    'iron_legion': 'iron_legion',
    'onyx_hand': 'onyx_hand',
    'wario': 'wario_land',
    'yoshis': 'yoshi_clans',
    'dk_crew': 'dk_crew',
    'beanbean': 'beanbean_kingdom',
    'regal_empire': 'regal_empire',
    'silver_flame': 'silver_flame',
    'mages_guild': 'mages_guild',
    'toad_cult': 'toad_cult',
    'toad_gang': 'toad_gang',
    'liberated_toads': 'liberated_toads',
    'the_unchained': 'the_unchained',
    'ratchet_raiders': 'ratchet_raiders',
    'crimson_fleet': 'crimson_fleet',
    'iron_fists': 'iron_fists',
    'diamond_city_investigators': 'diamond_city_investigators',
    'goodstyle_artisans': 'goodstyle_artisans',
    'cosmic_jesters': 'cosmic_jesters',
    'flower_kingdom': 'flower_kingdom',
    'kremling_krew': 'kremling_krew',
    'unaligned': 'unaligned'
};

// Reverse map: Registry ID -> Short key
const REVERSE_KEY_MAP = Object.fromEntries(
    Object.entries(FACTION_KEY_MAP).map(([short, full]) => [full, short])
);

/**
 * Convert any faction key to registry ID
 */
function toRegistryId(key) {
    if (!key) return 'unaligned';
    // If it's already a full ID, return it
    if (getFaction(key)?.id === key) return key;
    // Try the mapping
    return FACTION_KEY_MAP[key] || key;
}

/**
 * Get faction from registry, supporting both short and full keys
 */
function getFactionSafe(key) {
    const registryId = toRegistryId(key);
    return getFaction(registryId);
}

// ============================================
// 3. CIVIL WAR SPECIFIC DATA
// (Operations, Events - things not in the registry)
// ============================================

export const STRATEGIC_OPERATIONS = {
    mushroom_regency: [
        { id: 'reg_1', name: 'Capital Fortification', type: 'defensive', status: 'active', progress: 65, description: 'Reinforcing Toad Town walls.' },
        { id: 'reg_2', name: 'Tax Collection Drive', type: 'economic', status: 'active', progress: 40, description: 'Collecting emergency war taxes.' }
    ],
    peach_loyalists: [
        { id: 'loy_1', name: 'Castle Liberation', type: 'military', status: 'planning', progress: 25, description: 'Planning assault on Fawful\'s castle.' },
        { id: 'loy_2', name: 'Guerilla Campaign', type: 'military', status: 'active', progress: 70, description: 'Sabotaging enemy supply lines.' }
    ],
    fawfuls_furious_freaks: [
        { id: 'faw_1', name: 'Mechawful Production', type: 'research', status: 'active', progress: 85, description: 'Mass-producing robot soldiers.' },
        { id: 'faw_2', name: 'Dark Star Research', type: 'research', status: 'active', progress: 30, description: 'Studying the Dark Star fragments.' }
    ],
    freelancer_underworld: [
        { id: 'crim_1', name: 'Smuggling Network', type: 'economic', status: 'active', progress: 90, description: 'Moving contraband across borders.' }
    ],
    iron_legion: [
        { id: 'il_1', name: 'March on Capital', type: 'military', status: 'active', progress: 30, description: 'Advancing toward Toad Town.' }
    ],
    koopa_troop: [
        { id: 'war_1', name: 'Search for Bowser', type: 'intelligence', status: 'active', progress: 15, description: 'Scouring the land for the missing king.' }
    ]
};

export const CIVIL_WAR_EVENTS = [
    { type: 'major', date: { year: 1040, monthIndex: 6, day: 8 }, title: "Fawful Seizes Castle", description: "Fawful has occupied the royal castle with his robot army.", impact: { fawfuls_furious_freaks: +15 } },
    { type: 'battle', date: { year: 1040, monthIndex: 6, day: 17 }, title: "Fall of Bramblehaven", description: "Loyalists captured the strategic outpost.", impact: { peach_loyalists: +10 } },
    { type: 'diplomatic', date: { year: 1040, monthIndex: 6, day: 22 }, title: "Beanbean Alliance", description: "Queen Bean pledges support to the Regency.", impact: { mushroom_regency: +5, beanbean_kingdom: +5 } }
];

// ============================================
// 4. CIVIL WAR FACTIONS LIST
// List of factions involved in the civil war
// ============================================

const CIVIL_WAR_FACTION_IDS = [
    'mushroom_regency',
    'peach_loyalists',
    'fawfuls_furious_freaks',
    'koopa_troop',
    'freelancer_underworld',
    'iron_legion',
    'onyx_hand',
    'wario_land',
    'yoshi_clans',
    'dk_crew',
    'beanbean_kingdom',
    'regal_empire',
    'silver_flame',
    'mages_guild',
    'toad_cult',
    'toad_gang',
    'liberated_toads',
    'the_unchained',
    'ratchet_raiders',
    'crimson_fleet',
    'iron_fists',
    'diamond_city_investigators',
    'goodstyle_artisans',
    'cosmic_jesters',
    'flower_kingdom',
    'kremling_krew'
];

/**
 * Get all civil war factions from the registry
 */
export function getCivilWarFactions() {
    const factions = {};
    for (const id of CIVIL_WAR_FACTION_IDS) {
        const faction = getFaction(id);
        if (faction && faction.id !== 'unaligned') {
            factions[id] = faction;
        }
    }
    return factions;
}

// Legacy export for compatibility
export const CIVIL_WAR_FACTIONS = new Proxy({}, {
    get(target, prop) {
        if (prop === Symbol.iterator || prop === 'then') return undefined;
        return getFactionSafe(prop);
    },
    ownKeys() {
        return CIVIL_WAR_FACTION_IDS;
    },
    getOwnPropertyDescriptor(target, prop) {
        if (CIVIL_WAR_FACTION_IDS.includes(prop) || FACTION_KEY_MAP[prop]) {
            return { enumerable: true, configurable: true };
        }
        return undefined;
    }
});

// ============================================
// 5. GLOBAL MODAL FUNCTION
// ============================================
window.showFactionModal = function(factionKey) {
    const existing = document.querySelector('.faction-modal-overlay:not(.analytics-overlay)');
    if (existing) existing.remove();

    // Convert to registry ID
    const registryId = toRegistryId(factionKey);
    
    const html = renderFactionDetailModal(registryId);
    if (html) {
        document.body.insertAdjacentHTML('beforeend', html);
        requestAnimationFrame(() => {
            const overlay = document.querySelector(`#faction-modal-${registryId}`);
            if (overlay) overlay.classList.add('visible');
        });
    }
};

// ============================================
// 6. ENHANCED FACTION DETAIL MODAL
// ============================================
export function renderFactionDetailModal(factionKey) {
    const registryId = toRegistryId(factionKey);
    const faction = getFaction(registryId);
    
    if (!faction || faction.id === 'unaligned') {
        return '';
    }
    
    const detailedStats = getDetailedFactionStats(registryId);
    const allFactionStats = getRealTimeMapStats();
    const operations = STRATEGIC_OPERATIONS[registryId] || [];
    
    const totalInfluence = Object.values(allFactionStats.global)
        .reduce((sum, f) => sum + (f.military || 0) + (f.economic || 0), 0) || 1;
    const factionInfluence = (detailedStats.military || 0) + (detailedStats.economic || 0);
    const controlPercent = Math.round((factionInfluence / totalInfluence) * 100);
    
    const topFactions = Object.entries(allFactionStats.global)
        .filter(([id, _]) => id !== 'unaligned')
        .map(([id, stats]) => ({
            id,
            faction: getFaction(id),
            total: (stats.military || 0) + (stats.economic || 0) + ((stats.controlledRegions || 0) * 10)
        }))
        .filter(f => f.faction && f.faction.id !== 'unaligned')
        .sort((a, b) => b.total - a.total)
        .slice(0, 6);
    
    const maxPower = Math.max(...topFactions.map(f => f.total), 1);

    return `
        <div class="faction-modal-overlay" id="faction-modal-${registryId}">
            <div class="faction-modal faction-modal-large">
                <button class="modal-close" onclick="this.closest('.faction-modal-overlay').remove()">✕</button>
                
                <div class="modal-header" style="border-bottom-color: ${faction.color}">
                    <div class="modal-icon" style="background: ${faction.color};">${faction.icon}</div>
                    <div class="modal-title-block">
                        <h2>${faction.name}</h2>
                        <p class="modal-subtitle">${faction.leaderTitle}: <strong>${faction.leaderName}</strong></p>
                    </div>
                    <div class="modal-header-badge" style="background: ${faction.color};">
                        <span class="badge-value">${controlPercent}%</span>
                        <span class="badge-label">Kingdom Control</span>
                    </div>
                </div>

                <div class="modal-body modal-body-scrollable">
                    <div class="faction-description">
                        <p>${faction.description}</p>
                    </div>

                    <div class="stats-hero-grid">
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">⚔️</div>
                            <div class="stat-hero-value">${(detailedStats.military || 0).toLocaleString()}</div>
                            <div class="stat-hero-label">Military Strength</div>
                        </div>
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">💰</div>
                            <div class="stat-hero-value">${(detailedStats.economic || 0).toLocaleString()}</div>
                            <div class="stat-hero-label">Economic Power</div>
                        </div>
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">🏛️</div>
                            <div class="stat-hero-value">${(detailedStats.political || 0).toLocaleString()}</div>
                            <div class="stat-hero-label">Political Influence</div>
                        </div>
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">👥</div>
                            <div class="stat-hero-value">${(detailedStats.population || 0).toLocaleString()}</div>
                            <div class="stat-hero-label">Total Population</div>
                        </div>
                    </div>

                    <div class="modal-two-column">
                        <div class="modal-column">
                            <div class="modal-section">
                                <h4>📊 Power Distribution</h4>
                                <div class="power-chart">
                                    ${topFactions.map(f => `
                                        <div class="power-bar-row ${f.id === registryId ? 'current-faction' : ''}">
                                            <div class="power-bar-label">
                                                <span class="power-bar-icon">${f.faction.icon}</span>
                                                <span class="power-bar-name">${f.faction.shortName}</span>
                                            </div>
                                            <div class="power-bar-track">
                                                <div class="power-bar-fill" style="width: ${(f.total / maxPower) * 100}%; background: ${f.faction.color};"></div>
                                            </div>
                                            <span class="power-bar-value">${f.total}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            
                             <div class="modal-section">
                                <h4>🗺️ Controlled Regions (${detailedStats.controlledRegions || 0})</h4>
                                <div class="region-chips">
                                    ${(detailedStats.regions && detailedStats.regions.length > 0) ? 
                                        detailedStats.regions.map(r => `
                                            <div class="region-chip">
                                                <span class="region-chip-icon">${r.isContested ? '🔥' : '🏰'}</span>
                                                <span class="region-chip-name">${r.name}</span>
                                            </div>
                                        `).join('') : '<p class="no-data">No regions currently controlled</p>'}
                                </div>
                            </div>
                        </div>

                        <div class="modal-column">
                            <div class="modal-section">
                                <h4>📍 Key Holdings</h4>
                                <div class="poi-list-container">
                                    ${(detailedStats.pois && detailedStats.pois.length > 0) ? `
                                        <div class="poi-list">
                                            ${detailedStats.pois.slice(0, 8).map(poi => `
                                                <div class="poi-list-item">
                                                    <div class="poi-list-icon">${getPoiIcon(poi.type)}</div>
                                                    <div class="poi-list-info">
                                                        <span class="poi-list-name">${poi.name}</span>
                                                        <span class="poi-list-type">${poi.type}</span>
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    ` : '<p class="no-data">No POIs</p>'}
                                </div>
                            </div>

                            ${operations.length > 0 ? `
                                <div class="modal-section">
                                    <h4>⚙️ Active Operations</h4>
                                    <div class="operations-list">
                                        ${operations.map(op => `
                                            <div class="operation-item">
                                                <div class="operation-header">
                                                    <span class="operation-icon">${getOperationIcon(op.type)}</span>
                                                    <span class="operation-name">${op.name}</span>
                                                    <span class="operation-status status-${op.status}">${op.status}</span>
                                                </div>
                                                <div class="operation-progress">
                                                    <div class="operation-progress-bar">
                                                        <div class="operation-progress-fill" style="width: ${op.progress}%; background: ${faction.color};"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// ============================================
// 7. HELPER FUNCTIONS
// ============================================

function getPoiIcon(type) {
    const icons = {
        'village': '🏘️', 'city': '🏙️', 'town': '🏠', 'castle': '🏰',
        'fortress': '🏯', 'fort': '⛫', 'outpost': '🚩', 'mine': '⛏️',
        'farm': '🌾', 'port': '⚓', 'market': '🏪', 'temple': '⛩️',
        'tower': '🗼', 'camp': '⛺', 'ruins': '🏚️', 'cave': '🕳️',
        'forest': '🌲', 'mountain': '⛰️', 'bridge': '🌉', 'warehouse': '📦',
        'guild': '🏛️', 'tavern': '🍺', 'arena': '🏟️', 'laboratory': '🔬',
        'factory': '🏭'
    };
    return icons[type] || '📍';
}

function getOperationIcon(type) {
    const icons = {
        'military': '⚔️', 'defensive': '🛡️', 'economic': '💰',
        'research': '🔬', 'intelligence': '🔍', 'diplomatic': '🤝',
        'sabotage': '💣'
    };
    return icons[type] || '⚙️';
}

// ============================================
// 8. TERRITORY DETAIL MODAL
// ============================================

    
    
export function calculateTerritoryControl(regionData) {
    const pois = regionData.pois || [];
    
    // 1. Get Alliance Data from the canonical source
    // Note: We only destructure factionToAlliance because that's what the calculator returns
    const { factionToAlliance } = calculateAllAlliances();
    
    // 2. Get War Data using the LOCAL function in this file
    const factionsAtWar = getFactionsAtWar();
    
    // Calculate local power presence
    const factionPresence = {};
    const alliancePresence = {};
    
    // 1. Aggregate Power by Faction
    pois.forEach(poi => {
        const fid = poi.factionId;
        if (!fid || fid === 'unaligned') return;
        
        if (!factionPresence[fid]) {
            factionPresence[fid] = {
                poiCount: 0,
                military: 0,
                economic: 0,
                political: 0,
                totalPower: 0
            };
        }
        
        factionPresence[fid].poiCount++;
        factionPresence[fid].military += poi.military_strength || 0;
        factionPresence[fid].economic += poi.economic_value || 0;
        factionPresence[fid].political += poi.political_influence || 0;
    });
    
    // Calculate Faction Total Power
    Object.values(factionPresence).forEach(stats => {
        stats.totalPower = (stats.military * 2) + (stats.economic * 1.5) + (stats.political * 1) + (stats.poiCount * 5);
    });
    
    // 2. Aggregate Power by Alliance
    Object.entries(factionPresence).forEach(([fid, stats]) => {
        const alliance = factionToAlliance[fid];
        if (alliance) {
            if (!alliancePresence[alliance.id]) {
                alliancePresence[alliance.id] = {
                    alliance,
                    members: [],
                    totalPower: 0,
                    military: 0,
                    economic: 0,
                    political: 0,
                    poiCount: 0
                };
            }
            alliancePresence[alliance.id].members.push({ factionId: fid, stats });
            alliancePresence[alliance.id].totalPower += stats.totalPower;
            alliancePresence[alliance.id].military += stats.military;
            alliancePresence[alliance.id].economic += stats.economic;
            alliancePresence[alliance.id].political += stats.political;
            alliancePresence[alliance.id].poiCount += stats.poiCount;
        }
    });
    
    // 3. Create Power Blocs List
    const powerBlocs = [];
    const factionsInAlliances = new Set();
    
    // Add Alliances
    Object.values(alliancePresence).forEach(ap => {
        if (ap.members.length > 0) {
            ap.members.forEach(m => factionsInAlliances.add(m.factionId));
            
            powerBlocs.push({
                type: 'alliance',
                id: ap.alliance.id,
                name: ap.alliance.name,
                alliance: ap.alliance,
                members: ap.members,
                totalPower: ap.totalPower,
                color: ap.alliance.color,
                icon: ap.alliance.icon,
                leader: ap.alliance.leaderFaction, 
                leaderId: ap.alliance.leader,      
                isScripted: ap.alliance.isScripted
            });
        }
    });
    
    // Add Independents
    Object.entries(factionPresence).forEach(([fid, stats]) => {
        if (factionsInAlliances.has(fid)) return;
        
        const faction = getFaction(fid);
        powerBlocs.push({
            type: 'faction',
            id: fid,
            name: faction.name,
            faction,
            members: [{ factionId: fid, stats }],
            totalPower: stats.totalPower,
            color: faction.color,
            icon: faction.icon,
            leader: faction,
            leaderId: fid,
            isAtWar: factionsAtWar.has(fid)
        });
    });
    
    // Sort and Determine Control
    powerBlocs.sort((a, b) => b.totalPower - a.totalPower);
    
    if (powerBlocs.length === 0) {
        return {
            status: 'unclaimed',
            controlType: null,
            controller: null,
            dominantBloc: null,
            contestedBy: [],
            controlPercent: 0,
            factionStats: factionPresence,
            powerBlocs,
            isDeJure: false,
            isDeFacto: false
        };
    }

    const topBloc = powerBlocs[0];
    const totalRegionPower = powerBlocs.reduce((sum, b) => sum + b.totalPower, 0);
    const topPercent = (topBloc.totalPower / totalRegionPower) * 100;
    
    // Determine status
    const secondBloc = powerBlocs.length > 1 ? powerBlocs[1] : null;
    let status = 'controlled';
    let controlStrength = 'absolute';
    let controlType = topBloc.type === 'faction' ? 'de_jure' : 'de_facto';
    
    if (secondBloc) {
        const ratio = topBloc.totalPower / (secondBloc.totalPower || 1);
        if (ratio < 1.5) {
            status = 'contested';
            controlType = 'contested';
        } else if (ratio < 2.0) {
            status = 'controlled';
            controlStrength = 'strong';
        } else if (ratio < 3.0) {
            status = 'controlled';
            controlStrength = 'dominant';
        }
    }

    const contestedBy = powerBlocs.filter(b => b !== topBloc && (b.totalPower / totalRegionPower) > 0.05);

    return {
        status,
        controlType,
        controller: status === 'controlled' ? (topBloc.type === 'faction' ? topBloc.faction : topBloc.leader) : null,
        alliance: topBloc.type === 'alliance' ? topBloc.alliance : null,
        dominantFaction: topBloc.type === 'faction' ? topBloc.faction : topBloc.leader,
        dominantBloc: topBloc,
        contestedBy,
        controlStrength,
        controlPercent: Math.round(topPercent),
        factionStats: factionPresence,
        powerBlocs,
        totalRegionPower,
        isDeJure: topBloc.type === 'faction',
        isDeFacto: topBloc.type === 'alliance',
        isScripted: topBloc.isScripted
    };
}

  



//#endregion
function getControlTypeLabel(controlType, isDeJure, isDeFacto) {
    if (isDeJure) {
        return { 
            label: 'De Jure', 
            icon: '👑', 
            desc: 'Formal sovereignty - single faction holds undisputed rule',
            class: 'de-jure'
        };
    }
    if (isDeFacto) {
        return { 
            label: 'De Facto', 
            icon: '🤝', 
            desc: 'Alliance control - coalition of aligned factions governs together',
            class: 'de-facto'
        };
    }
    
    switch (controlType) {
        case 'contested':
            return { label: 'Contested', icon: '⚔️', desc: 'Multiple powers fighting for control', class: 'contested' };
        case 'disputed':
            return { label: 'Disputed', icon: '💥', desc: 'No clear controller - chaotic conflict', class: 'disputed' };
        default:
            return { label: 'Unknown', icon: '❓', desc: '', class: '' };
    }
}
// ============================================
// 10. CALCULATIONS
// ============================================
export function calculateDynamicInfluence() {
    const influence = {};
    const stats = getRealTimeMapStats().global;
    
    for (const id of CIVIL_WAR_FACTION_IDS) {
        const fStats = stats[id];
        let val = 5;
        if (fStats) {
            val += Math.floor((fStats.military || 0) / 10);
            val += Math.floor((fStats.economic || 0) / 10);
            val += ((fStats.controlledRegions || 0) * 3);
        }
        influence[id] = val;
    }
    
    return influence;
}

export function calculateWarStatus() {
    const influence = calculateDynamicInfluence();
    let leading = null;
    let max = 0;
    for (const [id, val] of Object.entries(influence)) {
        if (val > max) { max = val; leading = id; }
    }
    const leadingFaction = leading ? getFaction(leading) : null;
    return { leadingFaction, daysSinceStart: (CURRENT_GAME_DATE.year - 1040) * 365, phase: "Escalation" };
}

// ============================================
// 11. LEGACY COLOR EXPORT (for compatibility)
// ============================================
export const FACTION_COLORS = new Proxy({}, {
    get(target, prop) {
        const faction = getFactionSafe(prop);
        return faction ? faction.color : '#6c757d';
    }
});

function getTerritoryStatusBanner(control) {
    // 1. CONTROLLED (De Jure / De Facto) - Mostly unchanged, just cleaner
    if (control.status === 'controlled') {
        if (control.isDeJure) {
            const strengthText = control.controlStrength === 'dominant' ? 'Absolute' : 'Strong';
            return {
                class: 'de-jure',
                icon: '👑',
                text: `${control.controller.name.toUpperCase()} SOVEREIGNTY`,
                subtext: `${strengthText} rule (${control.controlPercent}%) - Unchallenged authority`
            };
        } else if (control.isDeFacto) {
            return {
                class: 'de-facto',
                icon: '🤝',
                text: `${control.alliance.name.toUpperCase()} CONTROL`,
                subtext: `Coalition governance (${control.controlPercent}%) led by ${control.dominantFaction.name}`
            };
        }
    }
    
    // 2. CONTESTED - High Detail Logic
    if (control.status === 'contested') {
        const leader = control.dominantBloc;
        // The strongest challenger is the first item in the contestedBy array
        const challenger = control.contestedBy && control.contestedBy.length > 0 
            ? control.contestedBy[0] 
            : { name: 'Unknown Forces', percent: 0, type: 'faction' };

        // Calculate the power gap to determine the "Flavor" of the war
        const gap = (leader.percent || 0) - (challenger.percent || 0);
        
        let warTitle = "ACTIVE CONFLICT";
        let warDesc = "";
        let icon = "⚔️";

        if (gap < 5) {
            // Very close fight (e.g. 45% vs 43%)
            warTitle = "DEADLY STALEMATE";
            warDesc = `${leader.name} and ${challenger.name} are locked in a dead heat.`;
            icon = "⚖️";
        } else if (gap < 15) {
            // Close fight (e.g. 50% vs 38%)
            warTitle = "FIERCE BATTLE";
            warDesc = `${leader.name} (${Math.round(leader.percent)}%) is heavily engaged by ${challenger.name} (${Math.round(challenger.percent)}%).`;
            icon = "⚔️";
        } else {
            // Distinct leader, but fighting exists (e.g. 60% vs 30%)
            warTitle = "ACTIVE INSURGENCY";
            warDesc = `${leader.name} holds ground while repelling assaults from ${challenger.name}.`;
            icon = "🛡️";
        }

        // Add visual cues for Alliances vs Factions in the text
        const leaderPrefix = leader.type === 'alliance' ? '🤝 ' : '👑 ';
        const challengerPrefix = challenger.type === 'alliance' ? '🤝 ' : '👑 ';

        return {
            class: 'contested',
            icon: icon,
            text: `${leaderPrefix}${leader.name} vs. ${challengerPrefix}${challenger.name}`,
            subtext: warDesc
        };
    }
            
    // 3. DISPUTED - Chaos Logic
    if (control.status === 'disputed') {
        // Get top 3 powers to show it's a mess
        const powers = control.powerBlocs.slice(0, 3).map(b => b.name).join(', ');
        
        return {
            class: 'disputed',
            icon: '💥',
            text: 'FRACTURED WARZONE',
            subtext: `Power vacuum. Chaotic fighting between ${powers}.`
        };
    }
            
    // 4. UNCLAIMED
    if (control.status === 'unclaimed') {
        return {
            class: 'unclaimed',
            icon: '🏜️',
            text: 'UNCLAIMED TERRITORY',
            subtext: 'No established military presence. Lawless wilderness.'
        };
    }
    
    return { class: 'unknown', icon: '❓', text: 'Unknown Status', subtext: '' };
}
export function renderTerritoryDetailModal(regionData) {
    const control = calculateTerritoryControl(regionData);
    const banner = getTerritoryStatusBanner(control);
    
    const dominant = control.dominantBloc;
    const opponent = control.contestedBy && control.contestedBy.length > 0 ? control.contestedBy[0] : null;

    // Helper: Entity Card
    const renderEntityCard = (entity, label, isOpponent = false) => {
        if (!entity) return '';
        const isAlliance = entity.type === 'alliance';
        const borderColor = entity.color || '#666';
        
        // Use leaderId passed from calculator for robust matching
        const leaderId = entity.leaderId; 

        return `
            <div class="alliance-card ${isOpponent ? 'opponent-card' : ''}" style="border-top: 4px solid ${borderColor}; margin-bottom: 15px;">
                <div class="alliance-header" style="padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 8px;">
                    <div style="display: flex; align-items: center; gap: 10px; width: 100%;">
                        <span class="alliance-icon" style="background: ${borderColor}; font-size: 1.5rem; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; border-radius: 4px;">
                            ${entity.icon}
                        </span>
                        <div style="flex: 1;">
                            <span style="display: block; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 2px;">
                                ${label}
                            </span>
                            <span class="alliance-name" style="font-size: 1.1rem; font-weight: bold; color: #fff;">
                                ${entity.name}
                            </span>
                            ${isAlliance ? `
                                <div style="font-size: 0.8rem; color: #aaa; display: flex; align-items: center; gap: 6px; margin-top: 2px;">
                                    <!-- FIX: Use entity.alliance.members.length for Global Count -->
                                    <span>👥 ${entity.alliance.members.length} members</span>
                                    <span style="color: #444;">•</span>
                                    <span>🔗 ${entity.alliance.cohesion}% cohesion</span>
                                </div>
                            ` : ''}
                        </div>
                        <div class="alliance-power" style="text-align: right;">
                            <span style="display: block; font-size: 1.4rem; font-weight: bold; color: ${borderColor};">
                                ${Math.round(entity.totalPower / control.totalRegionPower * 100)}%
                            </span>
                            <span style="font-size: 0.7rem; text-transform: uppercase; color: #666;">Control</span>
                        </div>
                    </div>
                </div>
                
                <!-- Member List (Local Presence Only) -->
                ${isAlliance ? `
                    <div class="alliance-members">
                        <div style="font-size: 0.7rem; color: #666; margin-bottom: 4px;">Active in this region:</div>
                        <div class="members-list" style="display: flex; flex-wrap: wrap; gap: 6px;">
                            ${entity.members.map(m => {
                                const member = getFaction(m.factionId);
                                const isLeader = m.factionId === leaderId; 
                                
                                return `
                                    <div class="member-chip ${isLeader ? 'leader' : ''}" 
                                         style="border: 1px solid ${member.color}; background: rgba(0,0,0,0.3); padding: 4px 8px; border-radius: 12px; display: flex; align-items: center; gap: 6px; cursor: pointer;"
                                         onclick="window.showFactionModal('${m.factionId}'); document.getElementById('terr-modal').remove();">
                                        <span style="font-size: 0.9rem;">${member.icon}</span>
                                        <span style="font-size: 0.85rem; color: #ddd;">${member.shortName}</span>
                                        ${isLeader ? '<span title="Alliance Leader">👑</span>' : ''}
                                        <!-- Optional: Show local contribution percentage -->
                                        <span style="font-size: 0.7rem; opacity: 0.6; margin-left: 2px;">
                                            (${Math.round((m.stats.totalPower / entity.totalPower) * 100)}%)
                                        </span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${!isAlliance ? `
                    <button class="view-faction-btn" style="width: 100%; margin-top: 5px; background: rgba(255,255,255,0.05); border: none; padding: 6px; color: #aaa; font-size: 0.8rem; cursor: pointer; border-radius: 4px;" 
                            onclick="window.showFactionModal('${entity.id}'); document.getElementById('terr-modal').remove();">
                        View Faction Profile →
                    </button>
                ` : ''}
            </div>
        `;
    };

    const displayColor = dominant ? dominant.color : '#666';
    const displayIcon = dominant ? dominant.icon : '❓';
    const modalTitle = dominant ? dominant.name : 'Unknown Region';

    return `
        <div class="faction-modal-overlay" id="terr-modal">
            <div class="faction-modal" style="max-width: 700px;">
                <button class="modal-close" onclick="this.closest('.faction-modal-overlay').remove()">✕</button>
                
                <div class="modal-header" style="border-bottom-color: ${displayColor}">
                    <div class="modal-icon" style="background: ${displayColor}">${control.status === 'contested' ? '⚔️' : displayIcon}</div>
                    <div class="modal-title-block">
                        <h2>${regionData.name}</h2>
                        <p class="modal-subtitle">${modalTitle}</p>
                    </div>
                </div>
                
                <div class="modal-body modal-body-scrollable">
                    <div class="territory-status-banner ${banner.class}">
                        <div class="banner-main">
                            <span class="banner-icon">${banner.icon}</span>
                            <span class="banner-text">${banner.text}</span>
                        </div>
                        <div class="banner-subtext">${banner.subtext}</div>
                    </div>

                    <!-- Power Structure Section -->
                    ${dominant ? `
                        <div class="modal-section alliance-section">
                            <h4>${control.status === 'controlled' ? '🏰 Regional Sovereignty' : '⚔️ Power Struggle'}</h4>
                            
                            ${renderEntityCard(dominant, control.status === 'controlled' ? 'Ruling Power' : 'Dominant Force')}
                            
                            ${opponent ? `
                                <div style="display: flex; align-items: center; gap: 10px; margin: 15px 0;">
                                    <div style="flex: 1; height: 1px; background: #333;"></div>
                                    <span style="font-weight: bold; color: #666; font-size: 0.8rem;">VS</span>
                                    <div style="flex: 1; height: 1px; background: #333;"></div>
                                </div>
                                ${renderEntityCard(opponent, 'Primary Challenger', true)}
                            ` : ''}
                        </div>
                    ` : ''}

                    <!-- Stats Grid -->
                    <div class="stats-hero-grid" style="grid-template-columns: repeat(4, 1fr);">
                        <div class="stat-hero-card compact"><div class="stat-hero-value">${regionData.militarySum || 0}</div><div class="stat-hero-label">Military</div></div>
                        <div class="stat-hero-card compact"><div class="stat-hero-value">${regionData.economicSum || 0}</div><div class="stat-hero-label">Economy</div></div>
                        <div class="stat-hero-card compact"><div class="stat-hero-value">${regionData.politicalSum || 0}</div><div class="stat-hero-label">Political</div></div>
                        <div class="stat-hero-card compact"><div class="stat-hero-value">${regionData.poiCount || 0}</div><div class="stat-hero-label">POIs</div></div>
                    </div>

                    <!-- POIs List -->
                    ${(regionData.pois || []).length > 0 ? `
                        <div class="modal-section">
                            <h4>📍 Points of Interest</h4>
                            <div class="poi-list">
                                ${regionData.pois.slice(0, 6).map(poi => {
                                    const pf = getFaction(poi.factionId);
                                    return `
                                        <div class="poi-list-item" style="border-left: 3px solid ${pf.color};">
                                            <div class="poi-list-icon">${getPoiIcon(poi.type)}</div>
                                            <div class="poi-list-info">
                                                <span class="poi-list-name">${poi.name}</span>
                                                <span class="poi-list-type">${poi.type} • ${pf.shortName}</span>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}
export {
    getAllAlliances,
    getFactionAlliance,
    getControlTypeLabel,
    areFactionsAtWar,
    SCRIPTED_ALLIANCES,
    ALLIANCE_EXCLUDED_FACTIONS,
    isExcludedFromAlliances,    
    isFactionAtWar,
    getFactionEnemies,
    ALLIANCE_SIZE_LIMITS    
};
window.debugAlliances = function() {
    // Clear cache
    allianceCache = null;
    allianceCacheTime = 0;
    
    const result = calculateAlliances();
    
    console.log('=== ALLIANCE DEBUG ===');
    console.log('Total alliances:', result.alliances.length);
    
    result.alliances.forEach(a => {
        console.log(`\n${a.name}:`);
        console.log('  Members:', a.members.join(', '));
        console.log('  Cohesion:', a.cohesion + '%');
        console.log('  Total POIs:', a.totalPOIs);
    });
    
    // Show factions not in alliances
    const allFactions = getAllFactions();
    const inAlliance = new Set();
    result.alliances.forEach(a => a.members.forEach(m => inAlliance.add(m)));
    
    const independents = Object.keys(allFactions).filter(id => 
        id !== 'unaligned' && !inAlliance.has(id)
    );
    
    console.log('\nIndependent factions:', independents.length);
    independents.slice(0, 10).forEach(id => {
        const pois = getFactionTotalPOIs(id);
        console.log(`  ${id}: ${pois} POIs`);
    });
    
    return result;
};