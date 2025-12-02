// mushroom-kingdom-civil-war.js

import {
    CIVIL_WAR_CONFIG,
    CIVIL_WAR_EVENTS,
    calculateDynamicInfluence,
    calculateWarStatus,
    initMushroomKingdomListeners
} from './mushroom-kingdom-system.js';

import { getAllFactions, getFaction, getFactionStats } from './faction-registry.js';
import { getRealTimeMapStats, getCuratedTerritoryList } from './map-analysis.js';
import { CURRENT_GAME_DATE } from '../calendar-data.js';
import { MDATA_F } from '../map-data.js';

export { initMushroomKingdomListeners };

// ============================================
// STATE
// ============================================
let currentView = 'global'; // 'global' or 'region'
let currentRegion = null;   // Selected region ID when in region view
let currentSort = 'power';  // 'power', 'military', 'economic', 'political', 'population'

// ============================================
// GET ALL REGIONS FROM MAP DATA
// ============================================
function getAllRegions() {
    if (!MDATA_F) return [];
    return Object.entries(MDATA_F).map(([id, data]) => ({
        id,
        name: data.name || id,
        description: data.description || '',
        poiCount: (data.pointsOfInterest || []).length
    })).sort((a, b) => a.name.localeCompare(b.name));
}

// ============================================
// GET STATS FOR SPECIFIC REGION
// ============================================
function getRegionStats(regionId) {
    if (!MDATA_F || !MDATA_F[regionId]) return null;
    
    const region = MDATA_F[regionId];
    const pois = region.pointsOfInterest || [];
    const factionStats = {};
    
    pois.forEach(poi => {
        const factionId = poi.factionId || 'unaligned';
        if (!factionStats[factionId]) {
            factionStats[factionId] = {
                military: 0,
                economic: 0,
                political: 0,
                population: 0,
                poiCount: 0,
                controlledRegions: 0
            };
        }
        factionStats[factionId].military += poi.military_strength || 0;
        factionStats[factionId].economic += poi.economic_value || 0;
        factionStats[factionId].political += poi.political_influence || 0;
        factionStats[factionId].population += poi.population || 0;
        factionStats[factionId].poiCount += 1;
    });
    
    return {
        regionId,
        regionName: region.name || regionId,
        global: factionStats,
        regions: [{ id: regionId, name: region.name }]
    };
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
                const aPower = (a[1].military || 0) + (a[1].economic || 0) + ((a[1].controlledRegions || 0) * 15);
                const bPower = (b[1].military || 0) + (b[1].economic || 0) + ((b[1].controlledRegions || 0) * 15);
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
                    🌍 Global View
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
                    <button class="sort-btn ${currentSort === 'population' ? 'active' : ''}" data-sort="population" title="Population">
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
    const factionStats = getFactionStats();

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
                   (data.population || 0) > 0 ||
                   (data.poiCount || 0) > 0;
        })
        .map(([id, def]) => {
            const data = stats.global[id] || { military: 0, economic: 0, poiCount: 0, controlledRegions: 0, political: 0, population: 0 };
            const totalPower = (data.military || 0) + (data.economic || 0) + ((data.controlledRegions || 0) * 15);
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
                population: data.population || 0,
                poiCount: data.poiCount || 0,
                controlledRegions: data.controlledRegions || 0,
                totalPower,
                poiPercent: ((data.poiCount || 0) / totalPois) * 100
            };
        });

    // Apply sorting
    factionData = factionData.sort((a, b) => {
        switch (currentSort) {
            case 'military': return b.military - a.military;
            case 'economic': return b.economic - a.economic;
            case 'political': return b.political - a.political;
            case 'population': return b.population - a.population;
            case 'power':
            default: return b.totalPower - a.totalPower;
        }
    });

    const topFactions = factionData;
    const claimedPercent = topFactions.reduce((acc, f) => acc + f.poiPercent, 0);
    const unclaimedPercent = Math.max(0, 100 - claimedPercent);

    const maxMilitary = Math.max(...topFactions.map(f => f.military), 1);
    const maxEconomic = Math.max(...topFactions.map(f => f.economic), 1);
    const maxPois = Math.max(...topFactions.map(f => f.poiCount), 1);

    const stackedSegments = topFactions.map(f => `
        <div class="control-segment ${f.isAuto ? 'auto-segment' : ''}" 
             style="width: ${f.poiPercent}%; background: ${f.color};"
             title="${f.name}${f.isAuto ? ' (Discovered)' : ''}: ${f.poiPercent.toFixed(1)}% (${f.poiCount} POIs)">
        </div>
    `).join('');

    const powerRows = topFactions.map(f => `
        <div class="power-comparison-row ${f.isAuto ? 'auto-faction' : ''}">
            <div class="pcr-faction" style="color: ${f.color};">
                <span class="pcr-icon">${f.icon}</span>
                <span class="pcr-name" title="${f.name}">${f.name}</span>
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
                        <div class="pcr-bar-fill pois" style="width: ${(f.poiCount / maxPois) * 100}%;"></div>
                    </div>
                    <span class="pcr-bar-value">📍 ${f.poiCount}</span>
                </div>
            </div>
            <div class="pcr-regions">
                <span class="pcr-region-count">${f.controlledRegions}</span>
                <span class="pcr-region-label">Regions</span>
            </div>
        </div>
    `).join('');

    const legendItems = topFactions.slice(0, 20).map(f => `
        <div class="legend-chip ${f.isAuto ? 'auto-discovered' : ''}">
            <span class="legend-color" style="background: ${f.color};"></span>
            <span class="legend-name" title="${f.name}">${f.shortName}</span>
            <span class="legend-percent">${f.poiPercent.toFixed(0)}%</span>
        </div>
    `).join('');

    const autoCount = factionData.filter(f => f.isAuto).length;
    const manualCount = factionData.filter(f => !f.isAuto).length;

    const viewTitle = currentView === 'region' && currentRegion 
        ? `🗺️ ${MDATA_F[currentRegion]?.name || currentRegion} Overview`
        : '🌍 Kingdom Control Overview';

    return `
        <div class="global-strategic-overview">
            <div class="gso-header">
                <h3 class="gso-title">${viewTitle}</h3>
                <div class="gso-summary">
                    <span class="gso-stat"><strong>${stats.regions?.length || 1}</strong> Regions</span>
                    <span class="gso-stat"><strong>${totalPois}</strong> POIs</span>
                    <span class="gso-stat"><strong>${manualCount + autoCount}</strong> Factions</span>
                    ${autoCount > 0 ? `<span class="gso-stat gso-auto">+${autoCount} discovered</span>` : ''}
                </div>
            </div>

            <div class="gso-section">
                <div class="gso-section-header">
                    <span class="gso-section-title">Territorial Control</span>
                    <span class="gso-section-meta">${claimedPercent.toFixed(0)}% Claimed · ${unclaimedPercent.toFixed(0)}% Contested/Wild</span>
                </div>
                <div class="stacked-control-bar">
                    ${stackedSegments}
                    ${unclaimedPercent > 0 ? `<div class="control-segment segment-unclaimed" style="width: ${unclaimedPercent}%;"></div>` : ''}
                </div>
                <div class="control-legend">
                    ${legendItems}
                    ${unclaimedPercent > 2 ? `
                        <div class="legend-chip">
                            <span class="legend-color segment-unclaimed-dot"></span>
                            <span class="legend-name">Wild</span>
                            <span class="legend-percent">${unclaimedPercent.toFixed(0)}%</span>
                        </div>
                    ` : ''}
                </div>
            </div>

            <div class="gso-section">
                <div class="gso-section-header">
                    <span class="gso-section-title">Power Projection</span>
                    <div class="gso-bar-legend">
                        <span class="bar-legend-item"><span class="bar-dot military"></span>Military</span>
                        <span class="bar-legend-item"><span class="bar-dot economy"></span>Economy</span>
                        <span class="bar-legend-item"><span class="bar-dot pois"></span>Holdings</span>
                    </div>
                </div>
                <div class="power-comparison-chart">
                    ${powerRows}
                </div>
                ${autoCount > 0 ? `<p class="gso-footnote">✦ = Auto-discovered faction from map data</p>` : ''}
            </div>
        </div>
    `;
}

// ============================================
// MAIN RENDER
// ============================================
export function renderMushroomKingdomCivilWar() {
    const influence = calculateDynamicInfluence();
    
    // Get stats based on current view
    let stats;
    if (currentView === 'region' && currentRegion) {
        stats = getRegionStats(currentRegion);
        if (!stats) {
            stats = getRealTimeMapStats();
        }
    } else {
        stats = getRealTimeMapStats();
    }
    
    const warStatus = calculateWarStatus();
    const territories = getCuratedTerritoryList();
    const allFactions = getAllFactions();

    // Get all active factions with at least some stats
    let allActiveFactions = Object.entries(allFactions)
        .filter(([key]) => {
            if (key === 'unaligned') return false;
            const fStats = stats.global[key];
            if (!fStats) return false;
            return (fStats.military || 0) > 0 || 
                   (fStats.economic || 0) > 0 || 
                   (fStats.political || 0) > 0 || 
                   (fStats.population || 0) > 0 ||
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
                controlledRegions: fStats.controlledRegions || 0
            }];
        });

    // Apply sorting
    allActiveFactions = sortFactions(allActiveFactions, currentSort);
    
    // Split into manual and auto-discovered
    const manualFactions = allActiveFactions.filter(([, faction]) => !faction.isAutoGenerated);
    const autoFactions = allActiveFactions.filter(([, faction]) => faction.isAutoGenerated);
    
    // Combine for display (manual first, then auto)
    const activeFactions = [...manualFactions, ...autoFactions];

    // Faction Cards
    const cardsHTML = activeFactions.map(([key, faction]) => {
        const fStats = stats.global[key] || { military: 0, controlledRegions: 0, poiCount: 0 };
        const isLeading = warStatus.leadingFaction && warStatus.leadingFaction.id === key;
        
        let badgeHTML = '';
        if (faction.isAutoGenerated) {
            if (faction.sourceData === 'widespread') {
                badgeHTML = '<span class="source-badge from-widespread">Known</span>';
            } else {
                badgeHTML = '<span class="source-badge from-inferred">New</span>';
            }
        }

        // Highlight sorted column
        const highlightClass = (stat) => currentSort === stat ? 'stat-highlighted' : '';

        return `
            <div class="faction-card ${isLeading ? 'faction-leading' : ''} ${faction.isAutoGenerated ? 'faction-auto' : ''}" 
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
                    <div class="faction-influence-badge" style="background:${faction.color};">
                        ${influence[key] || 0}
                    </div>
                </div>
                <div class="faction-card-body">
                    <div class="faction-stats">
                        <div class="stat-item ${highlightClass('military')}">
                            <span class="stat-icon">⚔️</span>
                            <span class="stat-value">${faction.military || fStats.military || 0}</span>
                            <span class="stat-label">Military</span>
                        </div>
                        <div class="stat-item ${highlightClass('economic')}">
                            <span class="stat-icon">💰</span>
                            <span class="stat-value">${faction.economic || fStats.economic || 0}</span>
                            <span class="stat-label">Economic</span>
                        </div>
                        <div class="stat-item ${highlightClass('political')}">
                            <span class="stat-icon">🏛️</span>
                            <span class="stat-value">${faction.political || fStats.political || 0}</span>
                            <span class="stat-label">Political</span>
                        </div>
                        <div class="stat-item ${highlightClass('population')}">
                            <span class="stat-icon">👥</span>
                            <span class="stat-value">${faction.population || fStats.population || 0}</span>
                            <span class="stat-label">Population</span>
                        </div>
                    </div>
                    <div class="faction-stats-secondary">
                        <div class="stat-item-small">
                            <span class="stat-icon">🏴</span>
                            <span class="stat-value">${faction.controlledRegions || fStats.controlledRegions || 0}</span>
                            <span class="stat-label">Regions</span>
                        </div>
                        <div class="stat-item-small">
                            <span class="stat-icon">📍</span>
                            <span class="stat-value">${faction.poiCount || fStats.poiCount || 0}</span>
                            <span class="stat-label">POIs</span>
                        </div>
                    </div>
                    <button class="faction-detail-btn" data-faction="${key}">View Details</button>
                </div>
            </div>
        `;
    }).join('');

    // Section title with count
    const factionCountText = `<span class="section-meta">(${activeFactions.length} factions)</span>`;

    // Territory List
    const territoryHTML = territories.length > 0 ? territories.map(region => {
        const controllerDef = getFaction(region.controller);
        return `
            <div class="territory-item ${region.isContested ? 'contested' : ''}" 
                 data-region-id="${region.id}" 
                 style="border-left: 3px solid ${controllerDef.color};">
                <div class="territory-icon">${region.isContested ? '🔥' : '🏰'}</div>
                <div class="territory-info">
                    <span class="territory-name">${region.name}</span>
                    <span class="territory-type">${region.isContested ? 'Contested' : (region.label || region.type || 'Territory')}</span>
                </div>
                <div class="territory-controller" style="background:${controllerDef.color};">
                    ${controllerDef.icon}
                </div>
            </div>
        `;
    }).join('') : '<p class="no-territories">No territories found</p>';

    // Events
    const eventsHTML = (CIVIL_WAR_EVENTS || []).slice(0, 10).map(evt => `
        <div class="timeline-event event-${evt.type}">
            <div class="event-date-marker">
                <div class="days-ago">${evt.date.monthIndex + 1}/${evt.date.day}</div>
            </div>
            <div class="event-content">
                <h5 class="event-title">${evt.title}</h5>
                <p class="event-desc">${evt.description}</p>
            </div>
        </div>
    `).join('');

    const viewControlsHTML = renderViewControls();
    const globalOverviewHTML = renderGlobalStrategicOverview(stats);

    return `
        <div class="civil-war-system">
            <div class="cw-header">
                <div class="cw-title-block">
                    <h2 class="cw-title">🍄 ${CIVIL_WAR_CONFIG.name}</h2>
                    <div class="cw-meta">
                        <span class="cw-phase phase-${warStatus.phase.toLowerCase().replace(/\s+/g, '-')}">${warStatus.phase}</span>
                        <span class="cw-date">Year ${CURRENT_GAME_DATE.year}</span>
                    </div>
                </div>
            </div>

            <p class="cw-description">${CIVIL_WAR_CONFIG.description}</p>

            ${viewControlsHTML}

            ${globalOverviewHTML}

            <div class="cw-content-grid">
                <div class="factions-section">
                    <h3 class="section-title">⚔️ Major Power Blocs ${factionCountText}</h3>
                    <div class="faction-cards-grid">
                        ${cardsHTML}
                    </div>
                </div>

                <div class="cw-sidebar">
                    <div class="territory-section">
                        <h3 class="section-title">🗺️ Key Holdings</h3>
                        <p class="section-subtitle">Click for details</p>
                        <div class="territory-list">
                            ${territoryHTML}
                        </div>
                    </div>

                    <div class="events-section">
                        <h3 class="section-title">📜 Recent Events</h3>
                        <div class="events-timeline">
                            ${eventsHTML}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// EVENT LISTENERS
// ============================================
export function initCivilWarListeners() {
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
                rerenderCivilWar();
            }
            return;
        }

        // Sort Buttons
        const sortBtn = e.target.closest('.sort-btn');
        if (sortBtn) {
            const newSort = sortBtn.dataset.sort;
            if (newSort !== currentSort) {
                currentSort = newSort;
                rerenderCivilWar();
            }
            return;
        }

        // Faction Detail Buttons
        const detailBtn = e.target.closest('.faction-detail-btn');
        if (detailBtn && detailBtn.id !== 'btn-view-analytics') {
            const factionKey = detailBtn.dataset.faction;
            if (typeof window.showFactionModal === 'function') {
                window.showFactionModal(factionKey);
            }
            return;
        }
    });

    // Region Dropdown
    container.addEventListener('change', (e) => {
        if (e.target.id === 'region-select') {
            currentRegion = e.target.value || null;
            rerenderCivilWar();
        }
    });

    // Analytics Modal
    const analyticsBtn = container.querySelector('#btn-view-analytics');
    if (analyticsBtn) {
        analyticsBtn.addEventListener('click', () => {
            const html = renderAnalyticsModal();
            document.body.insertAdjacentHTML('beforeend', html);
        });
    }
}

// ============================================
// RERENDER HELPER
// ============================================
function rerenderCivilWar() {
    const container = document.querySelector('.civil-war-system');
    if (!container) return;
    
    const parent = container.parentElement;
    const newHTML = renderMushroomKingdomCivilWar();
    
    container.remove();
    parent.insertAdjacentHTML('beforeend', newHTML);
    
    // Re-attach listeners
    initCivilWarListeners();
}

// ============================================
// EXPORT STATE SETTERS (optional, for external control)
// ============================================
export function setView(view) {
    currentView = view;
    if (view === 'global') currentRegion = null;
}

export function setRegion(regionId) {
    currentView = 'region';
    currentRegion = regionId;
}

export function setSort(sortBy) {
    currentSort = sortBy;
}