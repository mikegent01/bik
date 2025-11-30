// mushroom-kingdom-civil-war.js
import { 
    CIVIL_WAR_CONFIG,
    CIVIL_WAR_FACTIONS,
    CIVIL_WAR_EVENTS,
    calculateDynamicInfluence,
    calculateWarStatus,
    initMushroomKingdomListeners
} from './mushroom-kingdom-system.js';
import { getRealTimeMapStats, getCuratedTerritoryList } from './map-analysis.js';
import { CURRENT_GAME_DATE } from '../calendar-data.js';

export { initMushroomKingdomListeners };

export function renderMushroomKingdomCivilWar() {
    const influence = calculateDynamicInfluence();
    const stats = getRealTimeMapStats().global;
    const warStatus = calculateWarStatus();
    const territories = getCuratedTerritoryList();
    
    // 1. Active Factions (Filter out those with 0 presence to keep UI clean)
    const activeFactions = Object.entries(CIVIL_WAR_FACTIONS)
        .filter(([key, _]) => stats[key] && stats[key].poiCount > 0)
        .sort(([keyA, _], [keyB, __]) => influence[keyB] - influence[keyA])
        .slice(0, 8); // Top 8 active

    const cardsHTML = activeFactions.map(([key, faction]) => {
        const fStats = stats[key];
        const isLeading = warStatus.leadingFaction && warStatus.leadingFaction.id === key;
        
        return `
            <div class="faction-card ${isLeading ? 'faction-leading' : ''}" data-faction="${key}" style="border-top: 4px solid ${faction.color};">
                <div class="faction-card-header">
                    <div class="faction-icon" style="background: ${faction.color}">${faction.icon}</div>
                    <div class="faction-title-block">
                        <h4 class="faction-name">${faction.name}</h4>
                        <p class="faction-leader">${faction.leaderTitle}</p>
                    </div>
                    <div class="faction-influence-badge" style="background:${faction.color};">
                        ${influence[key]}
                    </div>
                </div>
                <div class="faction-card-body">
                    <div class="faction-stats">
                        <div class="stat-item"><span class="stat-icon">⚔️</span><span class="stat-value">${fStats.military}</span><span class="stat-label">Military</span></div>
                        <div class="stat-item"><span class="stat-icon">🏴</span><span class="stat-value">${fStats.controlledRegions}</span><span class="stat-label">Regions</span></div>
                        <div class="stat-item"><span class="stat-icon">📍</span><span class="stat-value">${fStats.poiCount}</span><span class="stat-label">POIs</span></div>
                    </div>
                    <button class="faction-detail-btn" data-faction="${key}" style="width:100%; margin-top:10px;">View Details</button>
                </div>
            </div>
        `;
    }).join('');

    // 2. Sidebar Territories
    const territoryHTML = territories.map(region => {
        const controllerDef = CIVIL_WAR_FACTIONS[region.controller] || { color: '#666', icon: '?' };
        const isContested = region.isContested;
        
        return `
            <div class="territory-item ${isContested ? 'contested' : ''}" data-region-id="${region.id}" style="border-left: 3px solid ${controllerDef.color};">
                <div class="territory-icon" style="font-size: 1.2rem;">${isContested ? '🔥' : '🏰'}</div>
                <div class="territory-info">
                    <span class="territory-name">${region.name}</span>
                    <span class="territory-type">${region.isContested ? 'Contested Hotspot' : (region.label || region.type)}</span>
                </div>
                <div class="territory-controller" style="background:${controllerDef.color}; color:white;">
                    ${controllerDef.icon}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="civil-war-system">
            <div class="cw-header">
                <div class="cw-title-block">
                    <h2 class="cw-title">🍄 ${CIVIL_WAR_CONFIG.name}</h2>
                    <div class="cw-meta">
                        <span class="cw-phase phase-escalation">${warStatus.phase}</span>
                        <span class="cw-date">Year ${CURRENT_GAME_DATE.year}</span>
                    </div>
                </div>
            </div>

            <p class="cw-description">${CIVIL_WAR_CONFIG.description}</p>
            
            <div class="cw-content-grid">
                <div class="factions-section">
                    <h3 class="section-title">⚔️ Major Power Blocks</h3>
                    <div class="faction-cards-grid">
                        ${cardsHTML}
                    </div>
                </div>

                <div class="cw-sidebar">
                    <div class="territory-section">
                        <h3 class="section-title">🗺️ Key Holdings & Hotspots</h3>
                        <p style="font-size:0.75rem; color:#aaa; margin-bottom:10px;">Click a region for details.</p>
                        <div class="territory-list">
                            ${territoryHTML}
                        </div>
                    </div>
                    <div class="events-section">
                        <h3 class="section-title">📜 Recent Events</h3>
                        <div class="events-timeline">
                            ${(CIVIL_WAR_EVENTS || []).slice(0,3).map(evt => `
                                <div class="timeline-event event-${evt.type}">
                                    <div class="event-date-marker"><div class="days-ago">${evt.date.monthIndex}/${evt.date.day}</div></div>
                                    <div class="event-content">
                                        <h5 class="event-title">${evt.title}</h5>
                                        <p class="event-desc">${evt.description}</p>
                                    </div>
                                </div>
                            `).join('')}
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