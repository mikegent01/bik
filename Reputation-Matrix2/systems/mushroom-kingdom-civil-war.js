// mushroom-kingdom-civil-war.js

import {
    CIVIL_WAR_CONFIG,
    CIVIL_WAR_FACTIONS,
    CIVIL_WAR_EVENTS,
    calculateDynamicInfluence,
    calculateWarStatus,
    initMushroomKingdomListeners,
    FACTION_COLORS
} from './mushroom-kingdom-system.js';

import { getRealTimeMapStats, getCuratedTerritoryList } from './map-analysis.js';
import { CURRENT_GAME_DATE } from '../calendar-data.js';

export { initMushroomKingdomListeners };

// ============================================
// RENDER GLOBAL STRATEGIC OVERVIEW
// ============================================
function renderGlobalStrategicOverview(stats) {
    // Calculate totals
    const totalRegions = stats.regions.length || 1;
    const totalPois = Object.values(stats.global).reduce((acc, f) => acc + (f.poiCount || 0), 0) || 1;
    const totalEconomy = Object.values(stats.global).reduce((acc, f) => acc + (f.economic || 0), 0) || 1;
    const totalMilitary = Object.values(stats.global).reduce((acc, f) => acc + (f.military || 0), 0) || 1;
    const totalPopulation = Object.values(stats.global).reduce((acc, f) => acc + (f.population || 0), 0) || 1;

    // Get faction data sorted by power
    const factionData = Object.entries(stats.global)
        .filter(([id, data]) => id !== 'unaligned' && CIVIL_WAR_FACTIONS[id])
        .map(([id, data]) => {
            const def = CIVIL_WAR_FACTIONS[id];
            const totalPower = (data.military || 0) + (data.economic || 0) + ((data.controlledRegions || 0) * 15);
            return {
                id,
                name: def.name,
                shortName: def.shortName,
                color: def.color,
                icon: def.icon,
                military: data.military || 0,
                economic: data.economic || 0,
                political: data.political || 0,
                population: data.population || 0,
                poiCount: data.poiCount || 0,
                controlledRegions: data.controlledRegions || 0,
                totalPower,
                // Percentages
                regionPercent: ((data.controlledRegions || 0) / totalRegions) * 100,
                poiPercent: ((data.poiCount || 0) / totalPois) * 100,
                milPercent: ((data.military || 0) / totalMilitary) * 100,
                ecoPercent: ((data.economic || 0) / totalEconomy) * 100
            };
        })
        .sort((a, b) => b.totalPower - a.totalPower)
        .slice(0, 8);

    // Calculate unaligned/contested percentage
    const claimedPercent = factionData.reduce((acc, f) => acc + f.poiPercent, 0);
    const unclaimedPercent = Math.max(0, 100 - claimedPercent);

    // Max values for scaling bars
    const maxMilitary = Math.max(...factionData.map(f => f.military), 1);
    const maxEconomic = Math.max(...factionData.map(f => f.economic), 1);
    const maxPois = Math.max(...factionData.map(f => f.poiCount), 1);

    // Build Stacked Territory Control Bar
    const stackedSegments = factionData.map(f => `
        <div class="control-segment" 
             style="width: ${f.poiPercent}%; background: ${f.color};"
             title="${f.name}: ${f.poiPercent.toFixed(1)}% (${f.poiCount} POIs)">
        </div>
    `).join('');

    // Build Power Comparison Rows
    const powerRows = factionData.map(f => `
        <div class="power-comparison-row">
            <div class="pcr-faction" style="color: ${f.color};">
                <span class="pcr-icon">${f.icon}</span>
                <span class="pcr-name">${f.shortName}</span>
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

    // Build Legend
    const legendItems = factionData.slice(0, 6).map(f => `
        <div class="legend-chip">
            <span class="legend-color" style="background: ${f.color};"></span>
            <span class="legend-name">${f.shortName}</span>
            <span class="legend-percent">${f.poiPercent.toFixed(0)}%</span>
        </div>
    `).join('');

    return `
        <div class="global-strategic-overview">
            <div class="gso-header">
                <h3 class="gso-title">🌍 Kingdom Control Overview</h3>
                <div class="gso-summary">
                    <span class="gso-stat"><strong>${stats.regions.length}</strong> Regions</span>
                    <span class="gso-stat"><strong>${totalPois}</strong> POIs</span>
                    <span class="gso-stat"><strong>${factionData.length}</strong> Active Factions</span>
                </div>
            </div>

            <!-- TERRITORIAL CONTROL BAR -->
            <div class="gso-section">
                <div class="gso-section-header">
                    <span class="gso-section-title">Territorial Control Distribution</span>
                    <span class="gso-section-meta">${claimedPercent.toFixed(0)}% Claimed · ${unclaimedPercent.toFixed(0)}% Contested/Wild</span>
                </div>
                <div class="stacked-control-bar">
                    ${stackedSegments}
                    ${unclaimedPercent > 0 ? `
                        <div class="control-segment segment-unclaimed" 
                             style="width: ${unclaimedPercent}%;"
                             title="Unaligned/Contested: ${unclaimedPercent.toFixed(1)}%">
                        </div>
                    ` : ''}
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

            <!-- POWER COMPARISON CHART -->
            <div class="gso-section">
                <div class="gso-section-header">
                    <span class="gso-section-title">Power Projection by Faction</span>
                    <div class="gso-bar-legend">
                        <span class="bar-legend-item"><span class="bar-dot military"></span>Military</span>
                        <span class="bar-legend-item"><span class="bar-dot economy"></span>Economy</span>
                        <span class="bar-legend-item"><span class="bar-dot pois"></span>Holdings</span>
                    </div>
                </div>
                <div class="power-comparison-chart">
                    ${powerRows}
                </div>
            </div>

            <!-- QUICK STATS PIE REPRESENTATION -->
            <div class="gso-section">
                <div class="gso-section-header">
                    <span class="gso-section-title">At a Glance</span>
                </div>
                <div class="gso-pie-grid">
                    ${factionData.slice(0, 4).map((f, i) => `
                        <div class="gso-pie-card">
                            <div class="gso-pie-ring" style="--percent: ${f.poiPercent}; --color: ${f.color};">
                                <span class="gso-pie-icon">${f.icon}</span>
                            </div>
                            <div class="gso-pie-info">
                                <span class="gso-pie-name">${f.shortName}</span>
                                <span class="gso-pie-value">${f.poiPercent.toFixed(0)}%</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// MAIN RENDER FUNCTION
// ============================================
export function renderMushroomKingdomCivilWar() {
    const influence = calculateDynamicInfluence();
    const stats = getRealTimeMapStats();
    const warStatus = calculateWarStatus();
    const territories = getCuratedTerritoryList();

    // Active Factions
    const activeFactions = Object.entries(CIVIL_WAR_FACTIONS)
        .filter(([key, _]) => stats.global[key] && stats.global[key].poiCount > 0)
        .sort(([keyA], [keyB]) => influence[keyB] - influence[keyA])
        .slice(0, 8);

    // Faction Cards
    const cardsHTML = activeFactions.map(([key, faction]) => {
        const fStats = stats.global[key] || { military: 0, controlledRegions: 0, poiCount: 0 };
        const isLeading = warStatus.leadingFaction && warStatus.leadingFaction.id === key;

        return `
            <div class="faction-card ${isLeading ? 'faction-leading' : ''}" data-faction="${key}" style="border-top: 4px solid ${faction.color};">
                <div class="faction-card-header">
                    <div class="faction-icon" style="background: ${faction.color}">${faction.icon}</div>
                    <div class="faction-title-block">
                        <h4 class="faction-name">${faction.name}</h4>
                        <p class="faction-leader">${faction.leaderTitle}: ${faction.leaderName}</p>
                    </div>
                    <div class="faction-influence-badge" style="background:${faction.color};">
                        ${influence[key]}
                    </div>
                </div>
                <div class="faction-card-body">
                    <div class="faction-stats">
                        <div class="stat-item">
                            <span class="stat-icon">⚔️</span>
                            <span class="stat-value">${fStats.military}</span>
                            <span class="stat-label">Military</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">🏴</span>
                            <span class="stat-value">${fStats.controlledRegions}</span>
                            <span class="stat-label">Regions</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">📍</span>
                            <span class="stat-value">${fStats.poiCount}</span>
                            <span class="stat-label">POIs</span>
                        </div>
                    </div>
                    <button class="faction-detail-btn" data-faction="${key}">View Details</button>
                </div>
            </div>
        `;
    }).join('');

    // Territory List
    const territoryHTML = territories.length > 0 ? territories.map(region => {
        const controllerDef = CIVIL_WAR_FACTIONS[region.controller] || { color: '#666', icon: '❓' };
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
    }).join('') : '<p class="no-territories">No territories found. Check map data.</p>';

    // Events Timeline
    const eventsHTML = (CIVIL_WAR_EVENTS || []).slice(0, 3).map(evt => `
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

    // Global Overview
    const globalOverviewHTML = renderGlobalStrategicOverview(stats);

    return `
        <div class="civil-war-system">
            <!-- HEADER -->
            <div class="cw-header">
                <div class="cw-title-block">
                    <h2 class="cw-title">🍄 ${CIVIL_WAR_CONFIG.name}</h2>
                    <div class="cw-meta">
                        <span class="cw-phase phase-${warStatus.phase.toLowerCase()}">${warStatus.phase}</span>
                        <span class="cw-date">Year ${CURRENT_GAME_DATE.year}</span>
                    </div>
                </div>
            </div>

            <p class="cw-description">${CIVIL_WAR_CONFIG.description}</p>

            <!-- GLOBAL STRATEGIC OVERVIEW -->
            ${globalOverviewHTML}

            <!-- MAIN CONTENT GRID -->
            <div class="cw-content-grid">
                <!-- FACTIONS SECTION -->
                <div class="factions-section">
                    <h3 class="section-title">⚔️ Major Power Blocs</h3>
                    <div class="faction-cards-grid">
                        ${cardsHTML}
                    </div>
                </div>

                <!-- SIDEBAR -->
                <div class="cw-sidebar">
                    <div class="territory-section">
                        <h3 class="section-title">🗺️ Key Holdings & Hotspots</h3>
                        <p class="section-subtitle">Click a region for details</p>
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
export function initCivilWarListeners() {
    const container = document.querySelector('.civil-war-system');
    if (!container) return;

    // 1. Faction Detail Cards
    container.addEventListener('click', (e) => {
        const detailBtn = e.target.closest('.faction-detail-btn');
        // Do not trigger if it's the analytics button
        if (detailBtn && detailBtn.id !== 'btn-view-analytics') {
            const factionKey = detailBtn.dataset.faction;
            if (typeof window.showFactionModal === 'function') {
                window.showFactionModal(factionKey);
            }
        }
    });

    // 2. Analytics Modal
    const analyticsBtn = container.querySelector('#btn-view-analytics');
    if (analyticsBtn) {
        analyticsBtn.addEventListener('click', () => {
            const html = renderAnalyticsModal();
            document.body.insertAdjacentHTML('beforeend', html);
        });
    }

    // 3. Territory Hover Tooltips
    container.addEventListener('mouseover', (e) => {
        const territory = e.target.closest('.territory-item');
        if (territory) {
           // Tooltip logic can go here (handled via global listeners usually)
        }
    });
}