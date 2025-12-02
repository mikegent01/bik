// world-overview.js - Global World View

import { MDATA_F } from '../map-data.js';
import { getAllFactions, getFaction, getFactionColor, getFactionIcon } from './faction-registry.js';
import { CURRENT_GAME_DATE } from '../calendar-data.js';

// ============================================
// STATE
// ============================================
let currentWorldSort = 'power';
let selectedRegion = null;
let expandedRegions = new Set();

// ============================================
// DATA PROCESSING
// ============================================

/**
 * Get all regions from map data with calculated stats
 */
function getAllRegionsWithStats() {
    if (!MDATA_F) return [];
    
    return Object.entries(MDATA_F).map(([id, region]) => {
        const pois = region.pointsOfInterest || [];
        const factionPresence = {};
        let totalMilitary = 0;
        let totalEconomic = 0;
        let totalPolitical = 0;
        let totalPopulation = 0;
        
        pois.forEach(poi => {
            const factionId = poi.factionId || 'unaligned';
            if (!factionPresence[factionId]) {
                factionPresence[factionId] = {
                    poiCount: 0,
                    military: 0,
                    economic: 0,
                    political: 0,
                    population: 0
                };
            }
            factionPresence[factionId].poiCount++;
            factionPresence[factionId].military += poi.military_strength || 0;
            factionPresence[factionId].economic += poi.economic_value || 0;
            factionPresence[factionId].political += poi.political_influence || 0;
            factionPresence[factionId].population += poi.population || 0;
            
            totalMilitary += poi.military_strength || 0;
            totalEconomic += poi.economic_value || 0;
            totalPolitical += poi.political_influence || 0;
            totalPopulation += poi.population || 0;
        });
        
        // Determine dominant faction
        let dominantFaction = 'unaligned';
        let maxPresence = 0;
        Object.entries(factionPresence).forEach(([factionId, stats]) => {
            const presence = stats.military + stats.economic + stats.poiCount * 5;
            if (presence > maxPresence) {
                maxPresence = presence;
                dominantFaction = factionId;
            }
        });
        
        // Check if contested (multiple factions with significant presence)
        const significantFactions = Object.entries(factionPresence)
            .filter(([id, stats]) => {
                const presence = stats.military + stats.economic + stats.poiCount * 5;
                return presence > maxPresence * 0.5 && id !== dominantFaction;
            });
        const isContested = significantFactions.length > 0;
        
        return {
            id,
            name: region.name || id,
            description: region.description || '',
            terrain: region.terrain || 'Unknown',
            climate: region.climate || 'Unknown',
            poiCount: pois.length,
            pois,
            factionPresence,
            dominantFaction,
            isContested,
            totalMilitary,
            totalEconomic,
            totalPolitical,
            totalPopulation,
            totalPower: totalMilitary + totalEconomic + totalPolitical
        };
    }).sort((a, b) => b.totalPower - a.totalPower);
}

/**
 * Get global faction stats across all regions
 */
function getGlobalFactionStats() {
    const regions = getAllRegionsWithStats();
    const factionStats = {};
    
    regions.forEach(region => {
        Object.entries(region.factionPresence).forEach(([factionId, stats]) => {
            if (!factionStats[factionId]) {
                factionStats[factionId] = {
                    id: factionId,
                    military: 0,
                    economic: 0,
                    political: 0,
                    population: 0,
                    poiCount: 0,
                    regionCount: 0,
                    dominatedRegions: 0,
                    contestedRegions: 0,
                    regions: []
                };
            }
            factionStats[factionId].military += stats.military;
            factionStats[factionId].economic += stats.economic;
            factionStats[factionId].political += stats.political;
            factionStats[factionId].population += stats.population;
            factionStats[factionId].poiCount += stats.poiCount;
            
            if (!factionStats[factionId].regions.includes(region.id)) {
                factionStats[factionId].regions.push(region.id);
                factionStats[factionId].regionCount++;
            }
            
            if (region.dominantFaction === factionId) {
                if (region.isContested) {
                    factionStats[factionId].contestedRegions++;
                } else {
                    factionStats[factionId].dominatedRegions++;
                }
            }
        });
    });
    
    // Calculate total power and sort
    return Object.values(factionStats)
        .map(stats => ({
            ...stats,
            totalPower: stats.military + stats.economic + stats.political + (stats.dominatedRegions * 50)
        }))
        .filter(stats => stats.poiCount > 0)
        .sort((a, b) => {
            switch (currentWorldSort) {
                case 'military': return b.military - a.military;
                case 'economic': return b.economic - a.economic;
                case 'political': return b.political - a.political;
                case 'population': return b.population - a.population;
                case 'regions': return b.regionCount - a.regionCount;
                case 'pois': return b.poiCount - a.poiCount;
                default: return b.totalPower - a.totalPower;
            }
        });
}

/**
 * Get world summary stats
 */
function getWorldSummary() {
    const regions = getAllRegionsWithStats();
    const factionStats = getGlobalFactionStats();
    
    return {
        totalRegions: regions.length,
        totalPOIs: regions.reduce((sum, r) => sum + r.poiCount, 0),
        totalMilitary: regions.reduce((sum, r) => sum + r.totalMilitary, 0),
        totalEconomic: regions.reduce((sum, r) => sum + r.totalEconomic, 0),
        totalPolitical: regions.reduce((sum, r) => sum + r.totalPolitical, 0),
        totalPopulation: regions.reduce((sum, r) => sum + r.totalPopulation, 0),
        activeFactions: factionStats.filter(f => f.id !== 'unaligned').length,
        contestedRegions: regions.filter(r => r.isContested).length,
        uncontestedRegions: regions.filter(r => !r.isContested && r.dominantFaction !== 'unaligned').length,
        wildRegions: regions.filter(r => r.dominantFaction === 'unaligned').length
    };
}

// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Render the world summary header
 */
function renderWorldSummary() {
    const summary = getWorldSummary();
    
    return `
        <div class="world-summary">
            <div class="world-summary-header">
                <h2 class="world-title">🌍 World Overview</h2>
                <div class="world-date">Year ${CURRENT_GAME_DATE.year}</div>
            </div>
            
            <div class="world-stats-grid">
                <div class="world-stat-card">
                    <div class="world-stat-icon">🗺️</div>
                    <div class="world-stat-value">${summary.totalRegions}</div>
                    <div class="world-stat-label">Regions</div>
                </div>
                <div class="world-stat-card">
                    <div class="world-stat-icon">📍</div>
                    <div class="world-stat-value">${summary.totalPOIs.toLocaleString()}</div>
                    <div class="world-stat-label">Locations</div>
                </div>
                <div class="world-stat-card">
                    <div class="world-stat-icon">⚔️</div>
                    <div class="world-stat-value">${summary.totalMilitary.toLocaleString()}</div>
                    <div class="world-stat-label">Military</div>
                </div>
                <div class="world-stat-card">
                    <div class="world-stat-icon">💰</div>
                    <div class="world-stat-value">${summary.totalEconomic.toLocaleString()}</div>
                    <div class="world-stat-label">Economic</div>
                </div>
                <div class="world-stat-card">
                    <div class="world-stat-icon">🏛️</div>
                    <div class="world-stat-value">${summary.totalPolitical.toLocaleString()}</div>
                    <div class="world-stat-label">Political</div>
                </div>
                <div class="world-stat-card">
                    <div class="world-stat-icon">👥</div>
                    <div class="world-stat-value">${summary.totalPopulation.toLocaleString()}</div>
                    <div class="world-stat-label">Population</div>
                </div>
                <div class="world-stat-card">
                    <div class="world-stat-icon">🏴</div>
                    <div class="world-stat-value">${summary.activeFactions}</div>
                    <div class="world-stat-label">Factions</div>
                </div>
                <div class="world-stat-card contested">
                    <div class="world-stat-icon">🔥</div>
                    <div class="world-stat-value">${summary.contestedRegions}</div>
                    <div class="world-stat-label">Contested</div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Render sort controls
 */
function renderWorldSortControls() {
    const sortOptions = [
        { id: 'power', label: '⚡ Power', title: 'Total Power' },
        { id: 'military', label: '⚔️ Military', title: 'Military Strength' },
        { id: 'economic', label: '💰 Economic', title: 'Economic Value' },
        { id: 'political', label: '🏛️ Political', title: 'Political Influence' },
        { id: 'population', label: '👥 Population', title: 'Population' },
        { id: 'regions', label: '🗺️ Regions', title: 'Region Count' },
        { id: 'pois', label: '📍 POIs', title: 'Location Count' }
    ];
    
    return `
        <div class="world-sort-controls">
            <span class="sort-label">Sort by:</span>
            <div class="sort-buttons">
                ${sortOptions.map(opt => `
                    <button class="sort-btn ${currentWorldSort === opt.id ? 'active' : ''}" 
                            data-sort="${opt.id}" 
                            title="${opt.title}">
                        ${opt.label}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

/**
 * Render global faction rankings
 */
function renderGlobalFactionRankings() {
    const factionStats = getGlobalFactionStats();
    const allFactions = getAllFactions();
    
    // Calculate max values for bars
    const maxMilitary = Math.max(...factionStats.map(f => f.military), 1);
    const maxEconomic = Math.max(...factionStats.map(f => f.economic), 1);
    const maxPolitical = Math.max(...factionStats.map(f => f.political), 1);
    const maxPopulation = Math.max(...factionStats.map(f => f.population), 1);
    
    const rows = factionStats.slice(0, 20).map((stats, index) => {
        const faction = allFactions[stats.id] || getFaction(stats.id);
        if (!faction || stats.id === 'unaligned') return '';
        
        const rankBadge = index < 3 ? ['🥇', '🥈', '🥉'][index] : `#${index + 1}`;
        
        return `
            <div class="world-faction-row" data-faction="${stats.id}">
                <div class="wfr-rank">${rankBadge}</div>
                <div class="wfr-faction">
                    <span class="wfr-icon" style="background: ${faction.color};">${faction.icon}</span>
                    <div class="wfr-info">
                        <span class="wfr-name">${faction.name}</span>
                        <span class="wfr-regions">${stats.dominatedRegions} controlled, ${stats.contestedRegions} contested</span>
                    </div>
                </div>
                <div class="wfr-stats">
                    <div class="wfr-stat-bar">
                        <div class="wfr-bar-label">⚔️</div>
                        <div class="wfr-bar-track">
                            <div class="wfr-bar-fill military" style="width: ${(stats.military / maxMilitary) * 100}%;"></div>
                        </div>
                        <div class="wfr-bar-value">${stats.military.toLocaleString()}</div>
                    </div>
                    <div class="wfr-stat-bar">
                        <div class="wfr-bar-label">💰</div>
                        <div class="wfr-bar-track">
                            <div class="wfr-bar-fill economic" style="width: ${(stats.economic / maxEconomic) * 100}%;"></div>
                        </div>
                        <div class="wfr-bar-value">${stats.economic.toLocaleString()}</div>
                    </div>
                    <div class="wfr-stat-bar">
                        <div class="wfr-bar-label">🏛️</div>
                        <div class="wfr-bar-track">
                            <div class="wfr-bar-fill political" style="width: ${(stats.political / maxPolitical) * 100}%;"></div>
                        </div>
                        <div class="wfr-bar-value">${stats.political.toLocaleString()}</div>
                    </div>
                </div>
                <div class="wfr-totals">
                    <div class="wfr-total-item">
                        <span class="wfr-total-value">${stats.poiCount}</span>
                        <span class="wfr-total-label">POIs</span>
                    </div>
                    <div class="wfr-total-item">
                        <span class="wfr-total-value">${stats.regionCount}</span>
                        <span class="wfr-total-label">Regions</span>
                    </div>
                    <div class="wfr-total-item">
                        <span class="wfr-total-value">${stats.population.toLocaleString()}</span>
                        <span class="wfr-total-label">Pop</span>
                    </div>
                </div>
                <button class="wfr-details-btn" data-faction="${stats.id}">Details →</button>
            </div>
        `;
    }).filter(Boolean).join('');
    
    return `
        <div class="world-faction-rankings">
            <h3 class="world-section-title">🏆 Global Faction Rankings</h3>
            ${renderWorldSortControls()}
            <div class="world-faction-list">
                ${rows || '<p class="no-data">No faction data available</p>'}
            </div>
        </div>
    `;
}

/**
 * Render region grid
 */
function renderRegionGrid() {
    const regions = getAllRegionsWithStats();
    const allFactions = getAllFactions();
    
    const regionCards = regions.map(region => {
        const dominantFaction = allFactions[region.dominantFaction] || getFaction(region.dominantFaction);
        const factionCount = Object.keys(region.factionPresence).filter(id => id !== 'unaligned').length;
        const isExpanded = expandedRegions.has(region.id);
        
        // Top 3 factions in region
        const topFactions = Object.entries(region.factionPresence)
            .filter(([id]) => id !== 'unaligned')
            .sort((a, b) => (b[1].military + b[1].economic) - (a[1].military + a[1].economic))
            .slice(0, 3)
            .map(([id, stats]) => {
                const f = allFactions[id] || getFaction(id);
                return { id, ...stats, faction: f };
            });
        
        return `
            <div class="world-region-card ${region.isContested ? 'contested' : ''} ${isExpanded ? 'expanded' : ''}"
                 data-region="${region.id}"
                 style="border-top-color: ${dominantFaction?.color || '#666'};">
                <div class="wrc-header">
                    <div class="wrc-status">
                        ${region.isContested ? '🔥' : region.dominantFaction === 'unaligned' ? '🏳️' : '🏰'}
                    </div>
                    <div class="wrc-info">
                        <h4 class="wrc-name">${region.name}</h4>
                        <p class="wrc-meta">
                            ${region.terrain} · ${region.poiCount} locations · ${factionCount} factions
                        </p>
                    </div>
                    <div class="wrc-controller" style="background: ${dominantFaction?.color || '#666'};">
                        ${dominantFaction?.icon || '❓'}
                    </div>
                </div>
                
                <div class="wrc-stats">
                    <div class="wrc-stat">
                        <span class="wrc-stat-icon">⚔️</span>
                        <span class="wrc-stat-value">${region.totalMilitary}</span>
                    </div>
                    <div class="wrc-stat">
                        <span class="wrc-stat-icon">💰</span>
                        <span class="wrc-stat-value">${region.totalEconomic}</span>
                    </div>
                    <div class="wrc-stat">
                        <span class="wrc-stat-icon">🏛️</span>
                        <span class="wrc-stat-value">${region.totalPolitical}</span>
                    </div>
                    <div class="wrc-stat">
                        <span class="wrc-stat-icon">👥</span>
                        <span class="wrc-stat-value">${region.totalPopulation.toLocaleString()}</span>
                    </div>
                </div>
                
                <div class="wrc-factions">
                    ${topFactions.map(f => `
                        <div class="wrc-faction-chip" style="border-color: ${f.faction?.color || '#666'};">
                            <span class="wrc-faction-icon">${f.faction?.icon || '❓'}</span>
                            <span class="wrc-faction-name">${f.faction?.shortName || 'Unknown'}</span>
                            <span class="wrc-faction-pois">${f.poiCount}</span>
                        </div>
                    `).join('')}
                    ${factionCount > 3 ? `<span class="wrc-more">+${factionCount - 3} more</span>` : ''}
                </div>
                
                <button class="wrc-expand-btn" data-region="${region.id}">
                    ${isExpanded ? '▲ Collapse' : '▼ Expand'}
                </button>
                
                ${isExpanded ? renderExpandedRegion(region) : ''}
            </div>
        `;
    }).join('');
    
    return `
        <div class="world-regions">
            <h3 class="world-section-title">🗺️ All Regions</h3>
            <div class="world-region-grid">
                ${regionCards || '<p class="no-data">No regions found</p>'}
            </div>
        </div>
    `;
}

/**
 * Render expanded region details
 */
function renderExpandedRegion(region) {
    const allFactions = getAllFactions();
    
    // All factions in this region
    const factionList = Object.entries(region.factionPresence)
        .filter(([id]) => id !== 'unaligned')
        .sort((a, b) => (b[1].military + b[1].economic) - (a[1].military + a[1].economic))
        .map(([id, stats]) => {
            const f = allFactions[id] || getFaction(id);
            return `
                <div class="wrc-expanded-faction">
                    <div class="wrc-ef-header">
                        <span class="wrc-ef-icon" style="background: ${f?.color || '#666'};">${f?.icon || '❓'}</span>
                        <span class="wrc-ef-name">${f?.name || 'Unknown'}</span>
                        <span class="wrc-ef-pois">${stats.poiCount} POIs</span>
                    </div>
                    <div class="wrc-ef-stats">
                        <span>⚔️ ${stats.military}</span>
                        <span>💰 ${stats.economic}</span>
                        <span>🏛️ ${stats.political}</span>
                        <span>👥 ${stats.population.toLocaleString()}</span>
                    </div>
                </div>
            `;
        }).join('');
    
    // Sample POIs
    const samplePois = region.pois.slice(0, 10).map(poi => {
        const f = allFactions[poi.factionId] || getFaction(poi.factionId);
        return `
            <div class="wrc-poi-item" style="border-left-color: ${f?.color || '#666'};">
                <span class="wrc-poi-icon">${getPoiTypeIcon(poi.type)}</span>
                <div class="wrc-poi-info">
                    <span class="wrc-poi-name">${poi.name}</span>
                    <span class="wrc-poi-type">${poi.type || 'Location'}</span>
                </div>
                <div class="wrc-poi-stats">
                    <span>⚔️${poi.military_strength || 0}</span>
                    <span>💰${poi.economic_value || 0}</span>
                </div>
            </div>
        `;
    }).join('');
    
    return `
        <div class="wrc-expanded">
            <div class="wrc-expanded-section">
                <h5>Faction Presence</h5>
                <div class="wrc-expanded-factions">
                    ${factionList || '<p class="no-data">No factions</p>'}
                </div>
            </div>
            <div class="wrc-expanded-section">
                <h5>Notable Locations (${region.pois.length} total)</h5>
                <div class="wrc-poi-list">
                    ${samplePois || '<p class="no-data">No locations</p>'}
                </div>
                ${region.pois.length > 10 ? `<p class="wrc-poi-more">+${region.pois.length - 10} more locations</p>` : ''}
            </div>
        </div>
    `;
}

/**
 * Get icon for POI type
 */
function getPoiTypeIcon(type) {
    const icons = {
        'village': '🏘️', 'city': '🏙️', 'town': '🏠', 'castle': '🏰',
        'fortress': '🏯', 'fort': '⛫', 'outpost': '🚩', 'mine': '⛏️',
        'farm': '🌾', 'port': '⚓', 'market': '🏪', 'temple': '⛩️',
        'tower': '🗼', 'camp': '⛺', 'ruins': '🏚️', 'cave': '🕳️',
        'forest': '🌲', 'mountain': '⛰️', 'bridge': '🌉', 'warehouse': '📦',
        'guild': '🏛️', 'tavern': '🍺', 'arena': '🏟️', 'laboratory': '🔬',
        'factory': '🏭', 'capital': '👑', 'dungeon': '⚔️'
    };
    return icons[type?.toLowerCase()] || '📍';
}

/**
 * Render world territorial map (text-based visualization)
 */
function renderWorldTerritorialMap() {
    const regions = getAllRegionsWithStats();
    const factionStats = getGlobalFactionStats();
    const totalPOIs = regions.reduce((sum, r) => sum + r.poiCount, 0) || 1;
    
    // Create stacked bar for world control
    const segments = factionStats
        .filter(f => f.id !== 'unaligned')
        .slice(0, 15)
        .map(stats => {
            const faction = getFaction(stats.id);
            const percent = (stats.poiCount / totalPOIs) * 100;
            return {
                id: stats.id,
                faction,
                percent,
                poiCount: stats.poiCount
            };
        });
    
    const claimedPercent = segments.reduce((sum, s) => sum + s.percent, 0);
    const wildPercent = 100 - claimedPercent;
    
    return `
        <div class="world-territorial-map">
            <h3 class="world-section-title">🌐 World Territorial Control</h3>
            
            <div class="world-control-bar">
                ${segments.map(s => `
                    <div class="world-control-segment" 
                         style="width: ${s.percent}%; background: ${s.faction?.color || '#666'};"
                         title="${s.faction?.name || 'Unknown'}: ${s.percent.toFixed(1)}% (${s.poiCount} POIs)">
                    </div>
                `).join('')}
                ${wildPercent > 0 ? `
                    <div class="world-control-segment segment-wild" 
                         style="width: ${wildPercent}%;"
                         title="Uncontrolled: ${wildPercent.toFixed(1)}%">
                    </div>
                ` : ''}
            </div>
            
            <div class="world-control-legend">
                ${segments.slice(0, 8).map(s => `
                    <div class="world-legend-item">
                        <span class="world-legend-color" style="background: ${s.faction?.color || '#666'};"></span>
                        <span class="world-legend-name">${s.faction?.shortName || 'Unknown'}</span>
                        <span class="world-legend-percent">${s.percent.toFixed(0)}%</span>
                    </div>
                `).join('')}
                ${wildPercent > 1 ? `
                    <div class="world-legend-item">
                        <span class="world-legend-color wild"></span>
                        <span class="world-legend-name">Uncontrolled</span>
                        <span class="world-legend-percent">${wildPercent.toFixed(0)}%</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// ============================================
// MAIN RENDER
// ============================================

export function renderWorldOverview() {
    const summaryHTML = renderWorldSummary();
    const territorialMapHTML = renderWorldTerritorialMap();
    const factionRankingsHTML = renderGlobalFactionRankings();
    const regionGridHTML = renderRegionGrid();
    
    return `
        <div class="world-overview-system">
            ${summaryHTML}
            ${territorialMapHTML}
            
            <div class="world-content-grid">
                <div class="world-main-content">
                    ${factionRankingsHTML}
                </div>
                <div class="world-sidebar">
                    <div class="world-quick-stats">
                        <h4>Quick Navigation</h4>
                        <button class="world-nav-btn" data-action="scroll-factions">🏆 Faction Rankings</button>
                        <button class="world-nav-btn" data-action="scroll-regions">🗺️ Region List</button>
                        <button class="world-nav-btn" data-action="toggle-all-regions">📂 Expand All Regions</button>
                    </div>
                </div>
            </div>
            
            ${regionGridHTML}
        </div>
    `;
}

// ============================================
// EVENT LISTENERS
// ============================================

export function initWorldOverviewListeners() {
    const container = document.querySelector('.world-overview-system');
    if (!container) return;
    
    container.addEventListener('click', (e) => {
        // Sort buttons
        const sortBtn = e.target.closest('.sort-btn');
        if (sortBtn) {
            currentWorldSort = sortBtn.dataset.sort;
            rerenderWorldOverview();
            return;
        }
        
        // Expand region
        const expandBtn = e.target.closest('.wrc-expand-btn');
        if (expandBtn) {
            const regionId = expandBtn.dataset.region;
            if (expandedRegions.has(regionId)) {
                expandedRegions.delete(regionId);
            } else {
                expandedRegions.add(regionId);
            }
            rerenderWorldOverview();
            return;
        }
        
        // Faction details
        const detailsBtn = e.target.closest('.wfr-details-btn');
        if (detailsBtn) {
            const factionId = detailsBtn.dataset.faction;
            if (typeof window.showFactionModal === 'function') {
                window.showFactionModal(factionId);
            }
            return;
        }
        
        // Navigation buttons
        const navBtn = e.target.closest('.world-nav-btn');
        if (navBtn) {
            const action = navBtn.dataset.action;
            if (action === 'scroll-factions') {
                document.querySelector('.world-faction-rankings')?.scrollIntoView({ behavior: 'smooth' });
            } else if (action === 'scroll-regions') {
                document.querySelector('.world-regions')?.scrollIntoView({ behavior: 'smooth' });
            } else if (action === 'toggle-all-regions') {
                const regions = getAllRegionsWithStats();
                if (expandedRegions.size === regions.length) {
                    expandedRegions.clear();
                } else {
                    regions.forEach(r => expandedRegions.add(r.id));
                }
                rerenderWorldOverview();
            }
            return;
        }
        
        // Click on faction row
        const factionRow = e.target.closest('.world-faction-row');
        if (factionRow && !e.target.closest('button')) {
            const factionId = factionRow.dataset.faction;
            if (typeof window.showFactionModal === 'function') {
                window.showFactionModal(factionId);
            }
            return;
        }
    });
}

/**
 * Rerender the world overview
 */
function rerenderWorldOverview() {
    const container = document.querySelector('.world-overview-system');
    if (!container) return;
    
    const parent = container.parentElement;
    const newHTML = renderWorldOverview();
    
    container.remove();
    parent.insertAdjacentHTML('beforeend', newHTML);
    
    initWorldOverviewListeners();
}

// ============================================
// EXPORTS
// ============================================

export { getAllRegionsWithStats, getGlobalFactionStats, getWorldSummary };