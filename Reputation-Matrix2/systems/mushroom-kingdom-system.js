// mushroom-kingdom-system.js - Rewritten to use FactionRegistry

import { getRealTimeMapStats, renderAnalyticsModal, getCuratedTerritoryList, getDetailedFactionStats, getDetailedRegionStats } from './map-analysis.js';
import { CURRENT_GAME_DATE } from '../calendar-data.js';
import { getFaction, getAllFactions, getFactionColor, getFactionIcon } from './faction-registry.js';

// ============================================
// 1. CONFIGURATION
// ============================================
export const CIVIL_WAR_CONFIG = {
    name: "Mushroom Kingdom Civil War",
    startDate: { year: 998, monthIndex: 6, day: 1 },
    status: "Active Conflict",
    description: "The kingdom is fractured. The Regency holds the plains, Loyalists wage crusade, while new powers like the Iron Legion and Onyx Hand enter the fray."
};

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
        console.warn('No faction found for key:', factionKey, '-> registryId:', registryId);
        return '';
    }
    
    // Get detailed stats from the analysis module
    const detailedStats = getDetailedFactionStats(registryId);
    const allFactionStats = getRealTimeMapStats();
    const operations = STRATEGIC_OPERATIONS[registryId] || [];
    
    // Calculate kingdom control percentage
    const totalInfluence = Object.values(allFactionStats.global)
        .reduce((sum, f) => sum + (f.military || 0) + (f.economic || 0), 0) || 1;
    const factionInfluence = (detailedStats.military || 0) + (detailedStats.economic || 0);
    const controlPercent = Math.round((factionInfluence / totalInfluence) * 100);
    
    // Get top 6 factions for the power distribution chart
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
                
                <!-- HEADER -->
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

                <div class="modal-body">
                    <!-- DESCRIPTION -->
                    <div class="faction-description">
                        <p>${faction.description}</p>
                    </div>

                    <!-- MAIN STATS GRID -->
                    <div class="stats-hero-grid">
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">⚔️</div>
                            <div class="stat-hero-value">${(detailedStats.military || 0).toLocaleString()}</div>
                            <div class="stat-hero-label">Military Strength</div>
                            <div class="stat-hero-bar">
                                <div class="stat-hero-fill" style="width: ${Math.min(100, ((detailedStats.military || 0) / 500) * 100)}%; background: #ef4444;"></div>
                            </div>
                        </div>
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">💰</div>
                            <div class="stat-hero-value">${(detailedStats.economic || 0).toLocaleString()}</div>
                            <div class="stat-hero-label">Economic Power</div>
                            <div class="stat-hero-bar">
                                <div class="stat-hero-fill" style="width: ${Math.min(100, ((detailedStats.economic || 0) / 500) * 100)}%; background: #fbbf24;"></div>
                            </div>
                        </div>
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">🏛️</div>
                            <div class="stat-hero-value">${(detailedStats.political || 0).toLocaleString()}</div>
                            <div class="stat-hero-label">Political Influence</div>
                            <div class="stat-hero-bar">
                                <div class="stat-hero-fill" style="width: ${Math.min(100, ((detailedStats.political || 0) / 500) * 100)}%; background: #8b5cf6;"></div>
                            </div>
                        </div>
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">👥</div>
                            <div class="stat-hero-value">${(detailedStats.population || 0).toLocaleString()}</div>
                            <div class="stat-hero-label">Total Population</div>
                            <div class="stat-hero-bar">
                                <div class="stat-hero-fill" style="width: ${Math.min(100, ((detailedStats.population || 0) / 50000) * 100)}%; background: #22c55e;"></div>
                            </div>
                        </div>
                    </div>

                    <!-- TWO COLUMN LAYOUT -->
                    <div class="modal-two-column">
                        <!-- LEFT COLUMN -->
                        <div class="modal-column">
                            
                            <!-- KINGDOM POWER DISTRIBUTION -->
                            <div class="modal-section">
                                <h4>📊 Kingdom Power Distribution</h4>
                                <div class="power-chart">
                                    ${topFactions.map(f => {
                                        if (!f.faction) return '';
                                        const percent = (f.total / maxPower) * 100;
                                        const isCurrentFaction = f.id === registryId;
                                        return `
                                            <div class="power-bar-row ${isCurrentFaction ? 'current-faction' : ''}">
                                                <div class="power-bar-label">
                                                    <span class="power-bar-icon">${f.faction.icon}</span>
                                                    <span class="power-bar-name">${f.faction.shortName}</span>
                                                </div>
                                                <div class="power-bar-track">
                                                    <div class="power-bar-fill" style="width: ${percent}%; background: ${f.faction.color};"></div>
                                                </div>
                                                <span class="power-bar-value">${f.total}</span>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>

                            <!-- CONTROLLED REGIONS -->
                            <div class="modal-section">
                                <h4>🗺️ Controlled Regions (${detailedStats.controlledRegions || 0})</h4>
                                <div class="region-chips">
                                    ${(detailedStats.regions && detailedStats.regions.length > 0) ? 
                                        detailedStats.regions.map(r => `
                                            <div class="region-chip">
                                                <span class="region-chip-icon">${r.isContested ? '🔥' : '🏰'}</span>
                                                <span class="region-chip-name">${r.name}</span>
                                                <span class="region-chip-value">⚔️${r.military || 0} 💰${r.economic || 0}</span>
                                            </div>
                                        `).join('') :
                                        '<p class="no-data">No regions currently controlled</p>'
                                    }
                                </div>
                            </div>

                            <!-- STRATEGIC GOAL -->
                            <div class="modal-section goal-section" style="border-left: 4px solid ${faction.color};">
                                <h4>🎯 Strategic Goal</h4>
                                <p class="goal-text">"${faction.goal}"</p>
                                <div class="ideology-badge">
                                    <span class="ideology-label">Ideology:</span>
                                    <span class="ideology-value">${faction.ideology}</span>
                                </div>
                            </div>
                        </div>

                        <!-- RIGHT COLUMN -->
                        <div class="modal-column">
                            
                            <!-- CONTROLLED POIs -->
                            <div class="modal-section">
                                <h4>📍 Key Holdings (${(detailedStats.pois || []).length} POIs)</h4>
                                <div class="poi-list-container">
                                    ${(detailedStats.pois && detailedStats.pois.length > 0) ? `
                                        <div class="poi-list">
                                            ${detailedStats.pois.slice(0, 10).map(poi => `
                                                <div class="poi-list-item">
                                                    <div class="poi-list-icon">${getPoiIcon(poi.type)}</div>
                                                    <div class="poi-list-info">
                                                        <span class="poi-list-name">${poi.name}</span>
                                                        <span class="poi-list-type">${poi.type || 'Location'}</span>
                                                    </div>
                                                    <div class="poi-list-stats">
                                                        <span class="poi-stat" title="Military">⚔️${poi.military_strength || 0}</span>
                                                        <span class="poi-stat" title="Economy">💰${poi.economic_value || 0}</span>
                                                        <span class="poi-stat" title="Population">👥${poi.population || 0}</span>
                                                    </div>
                                                </div>
                                            `).join('')}
                                            ${detailedStats.pois.length > 10 ? `
                                                <div class="poi-list-more">+ ${detailedStats.pois.length - 10} more locations...</div>
                                            ` : ''}
                                        </div>
                                    ` : '<p class="no-data">No POIs currently controlled</p>'}
                                </div>
                            </div>

                            <!-- STRENGTHS & WEAKNESSES -->
                            <div class="modal-section sw-grid">
                                <div class="sw-card sw-strengths">
                                    <h5>💪 Strengths</h5>
                                    <ul>
                                        ${(faction.strengths || ['Unknown']).map(s => `<li>${s}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="sw-card sw-weaknesses">
                                    <h5>⚠️ Weaknesses</h5>
                                    <ul>
                                        ${(faction.weaknesses || ['Unknown']).map(w => `<li>${w}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>

                            <!-- ACTIVE OPERATIONS -->
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
                                                <div class="operation-desc">${op.description}</div>
                                                <div class="operation-progress">
                                                    <div class="operation-progress-bar">
                                                        <div class="operation-progress-fill" style="width: ${op.progress}%; background: ${faction.color};"></div>
                                                    </div>
                                                    <span class="operation-progress-text">${op.progress}%</span>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}

                            <!-- RELATIONS -->
                            <div class="modal-section">
                                <h4>🤝 Diplomatic Relations</h4>
                                <div class="relations-grid">
                                    <div class="relations-column">
                                        <span class="relations-label">Allies</span>
                                        <div class="relations-list">
                                            ${(faction.allies || []).length > 0 ? 
                                                faction.allies.map(allyId => {
                                                    const ally = getFaction(allyId);
                                                    if (!ally || ally.id === 'unaligned') return '';
                                                    return `<span class="relation-chip ally" style="border-color: ${ally.color};">${ally.icon} ${ally.shortName}</span>`;
                                                }).filter(Boolean).join('') || '<span class="no-relations">None</span>' :
                                                '<span class="no-relations">None</span>'
                                            }
                                        </div>
                                    </div>
                                    <div class="relations-column">
                                        <span class="relations-label">Enemies</span>
                                        <div class="relations-list">
                                            ${(faction.enemies || []).length > 0 ? 
                                                faction.enemies.map(enemyId => {
                                                    const enemy = getFaction(enemyId);
                                                    if (!enemy || enemy.id === 'unaligned') return '';
                                                    return `<span class="relation-chip enemy" style="border-color: ${enemy.color};">${enemy.icon} ${enemy.shortName}</span>`;
                                                }).filter(Boolean).join('') || '<span class="no-relations">None</span>' :
                                                '<span class="no-relations">None</span>'
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
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
export function renderTerritoryDetailModal(regionData) {
    const controllerId = toRegistryId(regionData.controller);
    const controller = getFaction(controllerId);

    const regionPois = regionData.pois || [];

    return `
        <div class="faction-modal-overlay" id="terr-modal">
            <div class="faction-modal" style="max-width: 600px;">
                <button class="modal-close" onclick="this.closest('.faction-modal-overlay').remove()">✕</button>
                
                <div class="modal-header" style="border-bottom-color: ${controller.color}">
                    <div class="modal-icon" style="background: ${controller.color}">${regionData.isContested ? '🔥' : '🏰'}</div>
                    <div class="modal-title-block">
                        <h2>${regionData.name}</h2>
                        <p class="modal-subtitle">${regionData.isContested ? '⚠️ Contested Zone' : `Controlled by ${controller.name}`}</p>
                    </div>
                </div>
                
                <div class="modal-body">
                    <div class="territory-status-banner ${regionData.isContested ? 'contested' : 'secure'}">
                        ${regionData.isContested ? 
                            '⚠️ ACTIVE COMBAT ZONE - Multiple factions fighting for control' : 
                            `✅ SECURED - Under ${controller.name} occupation`
                        }
                    </div>

                    <div class="stats-hero-grid" style="grid-template-columns: repeat(4, 1fr);">
                        <div class="stat-hero-card compact">
                            <div class="stat-hero-icon">⚔️</div>
                            <div class="stat-hero-value">${regionData.militarySum || 0}</div>
                            <div class="stat-hero-label">Military</div>
                        </div>
                        <div class="stat-hero-card compact">
                            <div class="stat-hero-icon">💰</div>
                            <div class="stat-hero-value">${regionData.economicSum || 0}</div>
                            <div class="stat-hero-label">Economy</div>
                        </div>
                        <div class="stat-hero-card compact">
                            <div class="stat-hero-icon">🏛️</div>
                            <div class="stat-hero-value">${regionData.politicalSum || 0}</div>
                            <div class="stat-hero-label">Political</div>
                        </div>
                        <div class="stat-hero-card compact">
                            <div class="stat-hero-icon">📍</div>
                            <div class="stat-hero-value">${regionData.poiCount || 0}</div>
                            <div class="stat-hero-label">POIs</div>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h4>🏴 Controlling Faction</h4>
                        <div class="controller-card" style="border-color: ${controller.color};">
                            <div class="controller-icon" style="background: ${controller.color};">${controller.icon}</div>
                            <div class="controller-info">
                                <span class="controller-name">${controller.name}</span>
                                <span class="controller-ideology">${controller.ideology || 'Unknown'}</span>
                            </div>
                            <button class="view-faction-btn" onclick="window.showFactionModal('${controllerId}'); this.closest('.faction-modal-overlay').remove();">
                                View Faction →
                            </button>
                        </div>
                    </div>

                    ${regionData.factionPresence ? `
                        <div class="modal-section">
                            <h4>📊 Faction Presence</h4>
                            <div class="presence-chart">
                                ${Object.entries(regionData.factionPresence)
                                    .sort((a, b) => b[1] - a[1])
                                    .slice(0, 5)
                                    .map(([factionId, count]) => {
                                        const f = getFaction(factionId);
                                        if (!f || f.id === 'unaligned') return '';
                                        const maxPresence = Math.max(...Object.values(regionData.factionPresence));
                                        const percent = (count / maxPresence) * 100;
                                        return `
                                            <div class="presence-row">
                                                <div class="presence-label">${f.icon} ${f.shortName}</div>
                                                <div class="presence-bar">
                                                    <div class="presence-fill" style="width: ${percent}%; background: ${f.color};"></div>
                                                </div>
                                                <span class="presence-count">${count} POIs</span>
                                            </div>
                                        `;
                                    }).filter(Boolean).join('')}
                            </div>
                        </div>
                    ` : ''}

                    ${regionPois.length > 0 ? `
                        <div class="modal-section">
                            <h4>📍 Points of Interest</h4>
                            <div class="poi-list">
                                ${regionPois.slice(0, 8).map(poi => {
                                    const poiFaction = getFaction(poi.factionId);
                                    return `
                                        <div class="poi-list-item" style="border-left: 3px solid ${poiFaction.color};">
                                            <div class="poi-list-icon">${getPoiIcon(poi.type)}</div>
                                            <div class="poi-list-info">
                                                <span class="poi-list-name">${poi.name}</span>
                                                <span class="poi-list-type">${poi.type} • ${poiFaction.icon}</span>
                                            </div>
                                            <div class="poi-list-stats">
                                                <span class="poi-stat">⚔️${poi.military_strength || 0}</span>
                                                <span class="poi-stat">💰${poi.economic_value || 0}</span>
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

// ============================================
// 9. EVENT LISTENERS
// ============================================
export function initMushroomKingdomListeners() {
    const container = document.querySelector('.civil-war-system');
    if (!container) {
        console.warn('Civil war container not found');
        return;
    }

    console.log('Initializing Mushroom Kingdom listeners...');

    // View Analytics Button
    const analyticsBtn = container.querySelector('#btn-view-analytics');
    if (analyticsBtn) {
        analyticsBtn.addEventListener('click', () => {
            const factions = getCivilWarFactions();
            const html = renderAnalyticsModal(factions);
            document.body.insertAdjacentHTML('beforeend', html);
            requestAnimationFrame(() => {
                const overlay = document.querySelector('.analytics-overlay');
                if (overlay) overlay.classList.add('visible');
            });
        });
    }

    // Main Click Delegation
    container.addEventListener('click', (e) => {
        // A. Handle Faction Card "View Details"
        const factionBtn = e.target.closest('.faction-detail-btn');
        if (factionBtn && factionBtn.id !== 'btn-view-analytics') {
            const key = factionBtn.dataset.faction;
            console.log('Faction button clicked:', key);
            window.showFactionModal(key);
            return;
        }

        // B. Handle Sidebar Territory Click
        const terrItem = e.target.closest('.territory-item');
        if (terrItem) {
            const regionId = terrItem.dataset.regionId;
            console.log('Territory clicked:', regionId);

            const detailedRegion = getDetailedRegionStats(regionId);

            if (detailedRegion) {
                const existing = document.getElementById('terr-modal');
                if (existing) existing.remove();

                const html = renderTerritoryDetailModal(detailedRegion);
                document.body.insertAdjacentHTML('beforeend', html);

                requestAnimationFrame(() => {
                    const overlay = document.getElementById('terr-modal');
                    if (overlay) overlay.classList.add('visible');
                });
            } else {
                console.warn('No stats found for region:', regionId);
            }
        }
    });
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
        if (val > max) { 
            max = val; 
            leading = id; 
        }
    }
    
    const startYear = 1040;
    const leadingFaction = leading ? getFaction(leading) : null;
    
    return { 
        leadingFaction: leadingFaction, 
        daysSinceStart: (CURRENT_GAME_DATE.year - startYear) * 365, 
        phase: "Escalation" 
    };
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