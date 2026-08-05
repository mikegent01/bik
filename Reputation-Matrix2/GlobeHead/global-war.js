// global-war.js

import { getAllFactions, getFaction, getFactionStats, toSystemId } from '../systems/faction-registry.js';
import { getRealTimeMapStats, getCuratedTerritoryList, getDetailedRegionStats, renderAnalyticsModal, getDetailedFactionStats } from '../global-map-analysis.js';
import { CURRENT_GAME_DATE } from '../data/world/calendar.js';
import { MAP_DATA } from '../map-data.js';
import { renderTerritoryDetailModal } from '../systems/mushroom-kingdom-system.js'; 
import { showFactionModal } from '../app/components/factions/faction-modal.js';
// ============================================
// STATE
// ============================================
let currentView = 'global'; // 'global' or 'region'
let currentRegion = null;   // Selected region ID when in region view
let currentSort = 'power';  // 'power', 'military', 'economic', 'political', 'population'

// ============================================
// HELPER
// ============================================
function formatPop(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
}

// ============================================
// GET ALL REGIONS FROM MAP DATA
// ============================================
function getAllRegions() {
    if (!MAP_DATA) return [];
    // Only use _full keys to represent distinct regions
    return Object.entries(MAP_DATA)
        .filter(([id]) => id.endsWith('_full'))
        .map(([id, data]) => ({
            id,
            name: data.name.replace(' (Full)', '') || id,
            description: data.description || '',
            poiCount: (data.pointsOfInterest || []).length
        })).sort((a, b) => a.name.localeCompare(b.name));
}

// ============================================
// SORT FUNCTION
// ============================================
function sortFactions(factions, sortBy) {
    return [...factions].sort((a, b) => {
        switch (sortBy) {
            case 'military':
                return (b[1].military || 0) - (a[1].military || 0);
            case 'economic':
                return (b[1].economic || 0) - (a[1].economic || 0);
            case 'political':
                return (b[1].political || 0) - (a[1].political || 0);
            case 'population':
                return (b[1].population || 0) - (a[1].population || 0);
            case 'power':
            default:
                // Using activeRegions instead of controlledRegions, weight adjusted to 10
                const aPower = (a[1].military || 0) + (a[1].economic || 0) + ((a[1].activeRegions || 0) * 10);
                const bPower = (b[1].military || 0) + (b[1].economic || 0) + ((b[1].activeRegions || 0) * 10);
                return bPower - aPower;
        }
    });
}

// ============================================
// RENDER VIEW CONTROLS
// ============================================
function renderViewControls() {
    const regions = getAllRegions();
    
    return `
        <div class="view-controls">
            <div class="view-toggle">
                <button class="view-btn ${currentView === 'global' ? 'active' : ''}" data-view="global">
                    🌍 Multiverse View
                </button>
                <button class="view-btn ${currentView === 'region' ? 'active' : ''}" data-view="region">
                    🗺️ Region View
                </button>
            </div>
            
            ${currentView === 'region' ? `
                <div class="region-selector">
                    <label for="region-select">Select Region:</label>
                    <select id="region-select" class="region-dropdown">
                        <option value="">-- Choose Region --</option>
                        ${regions.map(r => `
                            <option value="${r.id}" ${currentRegion === r.id ? 'selected' : ''}>
                                ${r.name} (${r.poiCount} POIs)
                            </option>
                        `).join('')}
                    </select>
                </div>
            ` : ''}
            
            <div class="sort-controls">
                <label>Sort by:</label>
                <div class="sort-buttons">
                    <button class="sort-btn ${currentSort === 'power' ? 'active' : ''}" data-sort="power" title="Total Power">
                        ⚡ Power
                    </button>
                    <button class="sort-btn ${currentSort === 'military' ? 'active' : ''}" data-sort="military" title="Military Strength">
                        ⚔️ Military
                    </button>
                    <button class="sort-btn ${currentSort === 'economic' ? 'active' : ''}" data-sort="economic" title="Economic Power">
                        💰 Economic
                    </button>
                    <button class="sort-btn ${currentSort === 'political' ? 'active' : ''}" data-sort="political" title="Political Influence">
                        🏛️ Political
                    </button>
                    <button class="sort-btn ${currentSort === 'population' ? 'active' : ''}" data-sort="population" title="Total Population">
                        👥 Population
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// GLOBAL STRATEGIC OVERVIEW
// ============================================
function renderGlobalStrategicOverview(stats) {
    const allFactions = getAllFactions();
    
    const totalPois = Object.values(stats.global).reduce((acc, f) => acc + (f.poiCount || 0), 0) || 1;

    // Get active factions and apply filter
    let factionData = Object.entries(allFactions)
        .filter(([id]) => {
            if (id === 'unaligned') return false;
            const data = stats.global[id];
            if (!data) return false;
            return (data.military || 0) > 0 || 
                   (data.economic || 0) > 0 || 
                   (data.political || 0) > 0 ||
                   (data.poiCount || 0) > 0;
        })
        .map(([id, def]) => {
            const data = stats.global[id] || { military: 0, economic: 0, political: 0, poiCount: 0, controlledRegions: 0, activeRegions: 0, population: 0 };
            const totalPower = (data.military || 0) + (data.economic || 0) + ((data.activeRegions || 0) * 10);
            return {
                id,
                name: def.name,
                shortName: def.shortName,
                color: def.color,
                icon: def.icon,
                isAuto: def.isAutoGenerated,
                military: data.military || 0,
                economic: data.economic || 0,
                political: data.political || 0,
                poiCount: data.poiCount || 0,
                controlledRegions: data.controlledRegions || 0,
                activeRegions: data.activeRegions || 0,
                population: data.population || 0,
                totalPower,
                poiPercent: ((data.poiCount || 0) / totalPois) * 100
            };
        });

    // Apply sorting
    factionData = factionData.sort((a, b) => b.totalPower - a.totalPower);

    const displayFactions = factionData; // Show ALL factions
    
    const claimedPercent = factionData.reduce((acc, f) => acc + f.poiPercent, 0);
    const unclaimedPercent = Math.max(0, 100 - claimedPercent);

    const maxMilitary = Math.max(...displayFactions.map(f => f.military), 1);
    const maxEconomic = Math.max(...displayFactions.map(f => f.economic), 1);
    const maxPolitical = Math.max(...displayFactions.map(f => f.political), 1);

    // Color Uniquifier Logic
    const usedColors = new Map();
    const getStyle = (baseColor) => {
        let style = `background: ${baseColor};`;
        if (usedColors.has(baseColor)) {
            const count = usedColors.get(baseColor);
            style += ` filter: hue-rotate(${count * 45}deg);`;
            usedColors.set(baseColor, count + 1);
        } else {
            usedColors.set(baseColor, 1);
        }
        return style;
    };
    
    // Reset used colors for stacking logic
    const stackColorMap = new Map(); 

    const stackedSegments = displayFactions.map(f => {
        let style = `width: ${f.poiPercent}%; background: ${f.color};`;
        if (stackColorMap.has(f.color)) {
            const count = stackColorMap.get(f.color);
            style += ` filter: hue-rotate(${count * 45}deg);`;
            stackColorMap.set(f.color, count + 1);
        } else {
            stackColorMap.set(f.color, 1);
        }
        
        return `
        <div class="control-segment ${f.isAuto ? 'auto-segment' : ''}" 
             style="${style}"
             title="${f.name}: ${f.poiPercent.toFixed(1)}% (${f.poiCount} POIs)">
        </div>
        `;
    }).join('');

    // Reset for rows/legend to match
    usedColors.clear();
    
    const powerRows = displayFactions.map(f => `
        <div class="power-comparison-row ${f.isAuto ? 'auto-faction' : ''}">
            <div class="pcr-faction" style="color: ${f.color};">
                <span class="pcr-icon">${f.icon}</span>
                <span class="pcr-name" title="${f.name}">${f.shortName}</span>
            </div>
            <div class="pcr-bars">
                <div class="pcr-bar-group">
                    <div class="pcr-bar-track">
                        <div class="pcr-bar-fill military" style="width: ${(f.military / maxMilitary) * 100}%;"></div>
                    </div>
                    <span class="pcr-bar-value">⚔️ ${f.military}</span>
                </div>
                <div class="pcr-bar-group">
                    <div class="pcr-bar-track">
                        <div class="pcr-bar-fill economy" style="width: ${(f.economic / maxEconomic) * 100}%;"></div>
                    </div>
                    <span class="pcr-bar-value">💰 ${f.economic}</span>
                </div>
                <div class="pcr-bar-group">
                    <div class="pcr-bar-track">
                        <div class="pcr-bar-fill pois" style="width: ${(f.political / maxPolitical) * 100}%;"></div>
                    </div>
                    <span class="pcr-bar-value">🏛️ ${f.political}</span>
                </div>
            </div>
            <div class="pcr-regions">
                <span class="pcr-region-count">${formatPop(f.population)}</span>
                <span class="pcr-region-label">Pop.</span>
            </div>
        </div>
    `).join('');

    // Reset usedColors for legend to ensure it matches the stacked bar colors
    stackColorMap.clear();

    const legendItems = displayFactions.map(f => {
        let style = `background: ${f.color};`;
        if (stackColorMap.has(f.color)) {
            const count = stackColorMap.get(f.color);
            style += ` filter: hue-rotate(${count * 45}deg);`;
            stackColorMap.set(f.color, count + 1);
        } else {
            stackColorMap.set(f.color, 1);
        }

        return `
        <div class="legend-chip ${f.isAuto ? 'auto-discovered' : ''}">
            <span class="legend-color" style="${style}"></span>
            <span class="legend-name" title="${f.name}">${f.shortName}</span>
            <span class="legend-percent">${f.poiPercent.toFixed(1)}%</span>
        </div>
        `;
    }).join('');

    const autoCount = factionData.filter(f => f.isAuto).length;
    const manualCount = factionData.filter(f => !f.isAuto).length;

    // Handle view title logic
    let viewTitle = '🌍 Multiverse Control Overview';
    if (currentView === 'region' && currentRegion) {
        const regionName = MAP_DATA[currentRegion]?.name.replace(' (Full)', '') || currentRegion;
        viewTitle = `🗺️ ${regionName} Overview`;
    }

    return `
        <div class="global-strategic-overview">
            <div class="gso-header">
                <h3 class="gso-title">${viewTitle}</h3>
                <div class="gso-summary">
                    <span class="gso-stat"><strong>${stats.regions?.length || 0}</strong> Regions</span>
                    <span class="gso-stat"><strong>${totalPois}</strong> POIs</span>
                    <span class="gso-stat"><strong>${manualCount + autoCount}</strong> Active Factions</span>
                </div>
            </div>

            <div class="gso-section">
                <div class="gso-section-header">
                    <span class="gso-section-title">Territorial Control</span>
                    <span class="gso-section-meta">${claimedPercent.toFixed(0)}% Claimed</span>
                </div>
                <div class="stacked-control-bar">
                    ${stackedSegments}
                    <div class="control-segment segment-unclaimed" style="flex: 1;"></div>
                </div>
                <div class="control-legend">
                    ${legendItems}
                </div>
            </div>

            <div class="gso-section">
                <div class="gso-section-header">
                    <span class="gso-section-title">Power Projection (All Active Factions)</span>
                    <div class="gso-bar-legend">
                        <span class="bar-legend-item"><span class="bar-dot military"></span>Military</span>
                        <span class="bar-legend-item"><span class="bar-dot economy"></span>Economy</span>
                        <span class="bar-legend-item"><span class="bar-dot pois"></span>Political</span>
                    </div>
                </div>
                <div class="power-comparison-chart">
                    ${powerRows}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// MAIN RENDER
// ============================================
export function renderGlobalWar() {
    
    // Get stats based on current view
    let stats;
    
    if (currentView === 'region' && currentRegion) {
        // Region view: stats for specific region
        // We use getDetailedRegionStats but need to shape it like the global stats object for consistency
        const detailed = getDetailedRegionStats(currentRegion);
        
        // Re-build stats.global to contain sum for this region
        const globalStats = {};
        if (detailed && detailed.pois) {
            detailed.pois.forEach(poi => {
                const fid = poi.factionId;
                if (!globalStats[fid]) globalStats[fid] = { military: 0, economic: 0, political: 0, poiCount: 0, controlledRegions: 0, activeRegions: 0, population: 0 };
                globalStats[fid].military += poi.military_strength || 0;
                globalStats[fid].economic += poi.economic_value || 0;
                globalStats[fid].political += poi.political_influence || 0; // Fix: Aggregate political power
                globalStats[fid].population += poi.population || 0;
                globalStats[fid].poiCount += 1;
            });
             if (detailed.controller && detailed.controller !== 'unaligned' && globalStats[detailed.controller]) {
                globalStats[detailed.controller].controlledRegions = 1;
            }
            // For single region view, active region is just 1 if present
            Object.keys(detailed.factionPresence).forEach(fid => {
                if (globalStats[fid]) globalStats[fid].activeRegions = 1;
            });
        }
        
        stats = {
            global: globalStats, 
            regions: detailed ? [detailed] : []
        };

    } else {
        // Global view: all full maps
        stats = getRealTimeMapStats();
    }
    
    const territories = getCuratedTerritoryList(); // Used for sidebar
    const allFactions = getAllFactions();

    // Get all active factions in the current view
    let allActiveFactions = Object.entries(allFactions)
        .filter(([key]) => {
            if (key === 'unaligned') return false;
            const fStats = stats.global[key];
            if (!fStats) return false;
            return (fStats.military || 0) > 0 || 
                   (fStats.economic || 0) > 0 || 
                   (fStats.poiCount || 0) > 0;
        })
        .map(([key, faction]) => {
            const fStats = stats.global[key] || {};
            return [key, {
                ...faction,
                military: fStats.military || 0,
                economic: fStats.economic || 0,
                political: fStats.political || 0,
                population: fStats.population || 0,
                poiCount: fStats.poiCount || 0,
                controlledRegions: fStats.controlledRegions || 0,
                activeRegions: fStats.activeRegions || 0
            }];
        });

    // Apply sorting
    allActiveFactions = sortFactions(allActiveFactions, currentSort);
    
    // Split into manual and auto-discovered
    const manualFactions = allActiveFactions.filter(([, faction]) => !faction.isAutoGenerated);
    const autoFactions = allActiveFactions.filter(([, faction]) => faction.isAutoGenerated);
    
    // Combine for display
    const activeFactions = [...manualFactions, ...autoFactions];

    // Faction Cards
    const cardsHTML = activeFactions.map(([key, faction]) => {
        let badgeHTML = '';
        if (faction.isAutoGenerated) {
             badgeHTML = '<span class="source-badge from-inferred">New</span>';
        }

        const highlightClass = (stat) => currentSort === stat ? 'stat-highlighted' : '';

        return `
            <div class="faction-card ${faction.isAutoGenerated ? 'faction-auto' : ''}" 
                 data-faction="${key}" 
                 style="border-top: 4px solid ${faction.color};">
                <div class="faction-card-header" style="border-bottom-color: ${faction.color};">
                    <div class="faction-icon" style="background: ${faction.color}">${faction.icon}</div>
                    <div class="faction-title-block">
                        <h4 class="faction-name">${faction.name} ${badgeHTML}</h4>
                        <p class="faction-leader">
                            ${faction.leaderTitle}: ${faction.leaderName}
                        </p>
                    </div>
                </div>
                <div class="faction-card-body">
                    <div class="faction-stats">
                        <div class="stat-item ${highlightClass('military')}">
                            <span class="stat-icon">⚔️</span>
                            <span class="stat-value">${faction.military || 0}</span>
                            <span class="stat-label">Military</span>
                        </div>
                        <div class="stat-item ${highlightClass('economic')}">
                            <span class="stat-icon">💰</span>
                            <span class="stat-value">${faction.economic || 0}</span>
                            <span class="stat-label">Economic</span>
                        </div>
                        <div class="stat-item ${highlightClass('political')}">
                            <span class="stat-icon">🏛️</span>
                            <span class="stat-value">${faction.political || 0}</span>
                            <span class="stat-label">Political</span>
                        </div>
                         <div class="stat-item ${highlightClass('population')}">
                            <span class="stat-icon">👥</span>
                            <span class="stat-value">${formatPop(faction.population || 0)}</span>
                            <span class="stat-label">Pop.</span>
                        </div>
                    </div>
                    <div class="faction-stats-secondary">
                        <div class="stat-item-small">
                            <span class="stat-icon">🌍</span>
                            <span class="stat-value">${faction.activeRegions || 0}</span>
                            <span class="stat-label">${currentView === 'region' ? 'Zones' : 'Active Regions'}</span>
                        </div>
                        <div class="stat-item-small">
                            <span class="stat-icon">📍</span>
                            <span class="stat-value">${faction.poiCount || 0}</span>
                            <span class="stat-label">POIs</span>
                        </div>
                    </div>
                    <button class="faction-detail-btn" data-faction="${key}">View Details</button>
                </div>
            </div>
        `;
    }).join('');

    // Section title with count
    const factionCountText = `<span class="section-meta">(${activeFactions.length} active)</span>`;

    const territoryHTML = territories.length > 0 ? territories.slice(0, 10).map(region => {
        const controllerDef = getFaction(region.controller);
        return `
            <div class="territory-item ${region.isContested ? 'contested' : ''}" 
                 data-region-id="${region.id}" 
                 style="border-left: 3px solid ${controllerDef.color};">
                <div class="territory-icon">${region.isContested ? '🔥' : '🌍'}</div>
                <div class="territory-info">
                    <span class="territory-name">${region.name}</span>
                    <span class="territory-type">${region.isContested ? 'Contested Region' : 'Region'}</span>
                </div>
                <div class="territory-controller" style="background:${controllerDef.color};">
                    ${controllerDef.icon}
                </div>
            </div>
        `;
    }).join('') : '<p class="no-territories">No data found</p>';

    const viewControlsHTML = renderViewControls();
    const globalOverviewHTML = renderGlobalStrategicOverview(stats);

    return `
        <div class="civil-war-system">
            <div class="cw-header">
                <div class="cw-title-block">
                    <h2 class="cw-title">🌌 Multiverse Conflict Monitor</h2>
                    <div class="cw-meta">
                        <span class="cw-phase phase-escalation">Global Escalation</span>
                        <span class="cw-date">Year ${CURRENT_GAME_DATE.year}</span>
                    </div>
                </div>
            </div>

            <p class="cw-description">Live strategic tracking across all known regions. Monitoring power projection and territorial control of major factions throughout the multiverse.</p>

            ${viewControlsHTML}

            ${globalOverviewHTML}

            <div class="cw-content-grid">
                <div class="factions-section">
                    <h3 class="section-title">⚔️ Active Power Blocs ${factionCountText}</h3>
                    <div class="faction-cards-grid">
                        ${cardsHTML}
                    </div>
                </div>

                <div class="cw-sidebar">
                    <div class="territory-section">
                        <h3 class="section-title">🌍 Strategic Regions</h3>
                        <p class="section-subtitle">Click for details</p>
                        <div class="territory-list">
                            ${territoryHTML}
                        </div>
                    </div>
                    
                    <div class="events-section">
                        <h3 class="section-title">📊 Analytics</h3>
                        <button id="btn-view-analytics" class="cw-btn-primary" style="width: 100%;">View Full Report</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// EVENT LISTENERS
// ============================================
export function initGlobalWarListeners() {
    const container = document.querySelector('.civil-war-system');
    if (!container) return;

    // View Toggle Buttons
    container.addEventListener('click', (e) => {
        const viewBtn = e.target.closest('.view-btn');
        if (viewBtn) {
            const newView = viewBtn.dataset.view;
            if (newView !== currentView) {
                currentView = newView;
                if (newView === 'global') {
                    currentRegion = null;
                }
                rerenderGlobalWar();
            }
            return;
        }

        // Sort Buttons
        const sortBtn = e.target.closest('.sort-btn');
        if (sortBtn) {
            const newSort = sortBtn.dataset.sort;
            if (newSort !== currentSort) {
                currentSort = newSort;
                rerenderGlobalWar();
            }
            return;
        }

        // Faction Detail Buttons
        const detailBtn = e.target.closest('.faction-detail-btn');
        if (detailBtn) {
            const factionKey = detailBtn.dataset.faction;
            showGlobalFactionModal(factionKey);
            return;
        }

        // Sidebar Territory Click
        const terrItem = e.target.closest('.territory-item');
        if (terrItem) {
            const regionId = terrItem.dataset.regionId;
            const detailedRegion = getDetailedRegionStats(regionId);
            if (detailedRegion) {
                const html = renderTerritoryDetailModal(detailedRegion); 
                document.body.insertAdjacentHTML('beforeend', html);
                requestAnimationFrame(() => {
                    const overlay = document.getElementById('terr-modal');
                    if (overlay) overlay.classList.add('visible');
                });
            }
        }
    });

    // Region Dropdown
    container.addEventListener('change', (e) => {
        if (e.target.id === 'region-select') {
            currentRegion = e.target.value || null;
            rerenderGlobalWar();
        }
    });

    // Analytics Modal
    const analyticsBtn = container.querySelector('#btn-view-analytics');
    if (analyticsBtn) {
        analyticsBtn.addEventListener('click', () => {
            const html = renderAnalyticsModal();
            document.body.insertAdjacentHTML('beforeend', html);
             requestAnimationFrame(() => {
                const overlay = document.querySelector('.analytics-overlay');
                if (overlay) overlay.classList.add('visible');
            });
        });
    }
}

// ============================================
// MODAL HELPER
// ============================================
function showGlobalFactionModal(factionKey) {
    const registryId = toSystemId(factionKey);
    
    // Use the full-featured modal from faction-modal.js
    if (window.showFactionModal) {
        window.showFactionModal(registryId);
    } else if (showFactionModal) {
        showFactionModal(registryId);
    } else {
        console.error('[GlobalWar] showFactionModal not available');
    }
}

// Simplified Modal Renderer for Global Context
function renderGlobalFactionDetailModal(registryId) {
    const faction = getFaction(registryId);
    if (!faction) return '';
    
    const detailedStats = getDetailedFactionStats(registryId);
    
    // Get top POIs (sorted by value)
    const topPois = (detailedStats.pois || [])
        .sort((a, b) => (b.military_strength + b.economic_value) - (a.military_strength + a.economic_value))
        .slice(0, 10);
    
    return `
        <div class="faction-modal-overlay" id="faction-modal-${registryId}">
            <div class="faction-modal faction-modal-large">
                <button class="modal-close" onclick="this.closest('.faction-modal-overlay').remove()">✕</button>
                <div class="modal-header" style="border-bottom-color: ${faction.color}">
                    <div class="modal-icon" style="background: ${faction.color};">${faction.icon}</div>
                    <div class="modal-title-block">
                        <h2>${faction.name}</h2>
                        <p class="modal-subtitle">Global Analysis</p>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="faction-description"><p>${faction.description}</p></div>
                    <div class="stats-hero-grid">
                        <div class="stat-hero-card"><div class="stat-hero-value">${detailedStats.military}</div><div class="stat-hero-label">Military</div></div>
                        <div class="stat-hero-card"><div class="stat-hero-value">${detailedStats.economic}</div><div class="stat-hero-label">Economic</div></div>
                        <div class="stat-hero-card"><div class="stat-hero-value">${detailedStats.activeRegions}</div><div class="stat-hero-label">Active Regions</div></div>
                        <div class="stat-hero-card"><div class="stat-hero-value">${detailedStats.poiCount}</div><div class="stat-hero-label">POIs</div></div>
                    </div>
                    
                    <div class="modal-two-column">
                        <div class="modal-column">
                            <div class="modal-section">
                                <h4>🌍 Active Regions</h4>
                                <div class="region-chips">
                                     ${(detailedStats.regions && detailedStats.regions.length > 0) ? 
                                        detailedStats.regions.map(r => `
                                            <div class="region-chip">
                                                <span class="region-chip-icon">${r.isContested ? '🔥' : '🌍'}</span>
                                                <span class="region-chip-name">${r.name}</span>
                                            </div>
                                        `).join('') : '<p class="no-data">No active regions</p>'}
                                </div>
                            </div>
                        </div>
                        <div class="modal-column">
                             <div class="modal-section">
                                <h4>📍 Top Holdings</h4>
                                <div class="poi-list-container">
                                    <div class="poi-list">
                                        ${topPois.length > 0 ? topPois.map(poi => `
                                            <div class="poi-list-item" style="border-left: 3px solid ${faction.color};">
                                                <div class="poi-list-info">
                                                    <span class="poi-list-name">${poi.name}</span>
                                                    <span class="poi-list-type" style="font-size: 0.75rem; color: #888;">${poi.type} in ${poi.regionName}</span>
                                                </div>
                                                <div class="poi-list-stats">
                                                    <span class="poi-stat">⚔️${poi.military_strength}</span>
                                                    <span class="poi-stat">💰${poi.economic_value}</span>
                                                </div>
                                            </div>
                                        `).join('') : '<p class="no-data">No POIs found</p>'}
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
// RERENDER HELPER
// ============================================
function rerenderGlobalWar() {
    const container = document.querySelector('.civil-war-system');
    if (!container) return;
    
    const parent = container.parentElement;
    const newHTML = renderGlobalWar();
    
    container.remove();
    parent.insertAdjacentHTML('beforeend', newHTML);
    
    initGlobalWarListeners();
}