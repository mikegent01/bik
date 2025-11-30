// mushroom-kingdom-civil-war.js
import { 
    CIVIL_WAR_CONFIG,
    CIVIL_WAR_FACTIONS,
    CIVIL_WAR_EVENTS,
    getTerritoryMapWithStats,
    calculateDynamicInfluence,
    calculateWarStatus,
    initMushroomKingdomListeners // This is the function you need
} from './mushroom-kingdom-system.js';
import { getRealTimeMapStats } from './map-analysis.js';
import { CURRENT_GAME_DATE } from '../calendar-data.js';

// EXPORT THIS FUNCTION SO EXTERNAL FILES CAN CALL IT
export { initMushroomKingdomListeners as initCivilWarListeners };

export function renderMushroomKingdomCivilWar() {
    const influence = calculateDynamicInfluence();
    const stats = getRealTimeMapStats().global;
    const warStatus = calculateWarStatus();
    const territories = getTerritoryMapWithStats(); 
    
    // 1. Render Faction Cards
    const cardsHTML = Object.entries(CIVIL_WAR_FACTIONS).map(([key, faction]) => {
        const fStats = stats[key] || { military: 0, controlledRegions: 0, poiCount: 0 };
        const isLeading = warStatus.leadingFaction && warStatus.leadingFaction.id === key;
        
        return `
            <div class="faction-card ${isLeading ? 'leading-card' : ''}" data-faction="${key}" style="border-top: 4px solid ${faction.color}; position: relative;">
                <div class="faction-card-header">
                    <div class="faction-icon" style="background: ${faction.color}">${faction.icon}</div>
                    <div>
                        <h4 style="margin:0;">${faction.name}</h4>
                        <small style="opacity:0.8;">${faction.leaderTitle}</small>
                    </div>
                    <div class="influence-badge" style="background:${faction.color}; margin-left:auto;">
                        ${influence[key]}
                    </div>
                </div>
                
                <div class="faction-card-body" style="padding: 15px;">
                    <div class="stat-row" style="display:flex; justify-content:space-between; margin-bottom:5px;">
                        <span>⚔️ Military:</span>
                        <strong>${fStats.military}</strong>
                    </div>
                    <div class="stat-row" style="display:flex; justify-content:space-between; margin-bottom:5px;">
                        <span>🏴 Regions:</span>
                        <strong>${fStats.controlledRegions}</strong>
                    </div>
                    <div class="stat-row" style="display:flex; justify-content:space-between; margin-bottom:15px;">
                        <span>📍 POIs:</span>
                        <strong>${fStats.poiCount}</strong>
                    </div>
                    
                    <button class="faction-detail-btn" data-faction="${key}" 
                        style="width:100%; padding:8px; background:rgba(255,255,255,0.1); border:none; color:white; cursor:pointer; border-radius:4px;">
                        View Details
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // 2. Render Territory Sidebar List
    const territoryHTML = territories.map(region => {
        const controllerDef = CIVIL_WAR_FACTIONS[region.controller];
        const color = controllerDef ? controllerDef.color : '#666';
        const icon = controllerDef ? controllerDef.icon : '?';
        
        return `
            <div class="territory-item" style="display:flex; align-items:center; gap:10px; padding:8px; background:rgba(0,0,0,0.3); margin-bottom:5px; border-left:3px solid ${color};">
                <div style="font-size:1.2em;">${region.icon}</div>
                <div style="flex-grow:1;">
                    <div style="font-weight:bold; font-size:0.9em;">${region.name}</div>
                    <div style="font-size:0.7em; opacity:0.7;">${region.type}</div>
                </div>
                <div style="background:${color}; width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.8em;">
                    ${icon}
                </div>
            </div>
        `;
    }).join('');

    // 3. Render Events Sidebar List
    const eventsHTML = CIVIL_WAR_EVENTS.slice(0,4).map(evt => `
        <div class="timeline-event" style="margin-bottom:10px; padding-left:10px; border-left: 2px solid rgba(255,255,255,0.2);">
            <div style="font-size:0.7em; opacity:0.6;">${evt.date.year}-${evt.date.monthIndex}-${evt.date.day}</div>
            <div style="font-weight:bold; font-size:0.85em;">${evt.title}</div>
            <div style="font-size:0.8em; opacity:0.8;">${evt.description}</div>
        </div>
    `).join('');

    return `
        <div class="civil-war-system">
            <!-- HEADER -->
            <div class="cw-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
                <div>
                    <h2 class="cw-title">🍄 ${CIVIL_WAR_CONFIG.name}</h2>
                    <span style="opacity:0.7;">
                        ${CIVIL_WAR_CONFIG.status} | Year ${CURRENT_GAME_DATE.year} | Phase: ${warStatus.phase}
                    </span>
                </div>
                <button id="btn-view-analytics" class="faction-detail-btn" style="padding:8px 16px; cursor:pointer; background: rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3); color: white; border-radius: 4px;">
                    📊 View Intel Report
                </button>
            </div>

            <p style="margin-bottom:20px; line-height:1.5;">${CIVIL_WAR_CONFIG.description}</p>

            <div class="cw-content-grid" style="display:grid; grid-template-columns: 3fr 1fr; gap:20px;">
                
                <!-- LEFT: FACTION CARDS -->
                <div class="factions-section">
                    <h3 class="section-title">⚔️ Warring Factions</h3>
                    <div class="faction-cards-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:15px;">
                        ${cardsHTML}
                    </div>
                </div>

                <!-- RIGHT: SIDEBAR (Territories & Events) -->
                <div class="cw-sidebar">
                    <h3 class="section-title">🗺️ Territory Control</h3>
                    <div class="territory-list" style="margin-bottom:20px;">
                        ${territoryHTML}
                    </div>

                    <h3 class="section-title">📜 Recent Events</h3>
                    <div class="events-timeline">
                        ${eventsHTML}
                    </div>
                </div>
            </div>
            
            <style>
                .leading-card {
                    box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
                    border: 1px solid rgba(255, 215, 0, 0.5);
                }
                .faction-card {
                    background: rgba(0,0,0,0.4);
                    border-radius: 8px;
                    overflow: hidden;
                    transition: transform 0.2s;
                }
                .faction-card:hover {
                    transform: translateY(-2px);
                }
                .faction-card-header {
                    padding: 12px;
                    background: rgba(255,255,255,0.05);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .faction-icon {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.2em;
                }
                .influence-badge {
                    padding: 2px 8px;
                    border-radius: 12px;
                    font-weight: bold;
                    font-size: 0.9em;
                    color: white;
                    text-shadow: 0 1px 2px black;
                }
            </style>
        </div>
    `;
}