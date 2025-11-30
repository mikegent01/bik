// mushroom-kingdom-civil-war.js
// Renders the detailed Mushroom Kingdom Civil War component with intel-based visibility

import { 
    CIVIL_WAR_CONFIG,
    CIVIL_WAR_FACTIONS,
    STRATEGIC_OPERATIONS,
    CIVIL_WAR_EVENTS,
    TERRITORY_MAP,
    calculateDynamicInfluence,
    calculateWarStatus
} from './mushroom-kingdom-system.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from '../calendar-data.js';
import { state } from '../state.js';
import { renderAnalyticsModal } from './map-analysis.js'; // NEW IMPORT

// ============================================
// INTEL SYSTEM
// ============================================

function getIntelForFaction(factionKey) {
    if (state.factionIntel && typeof state.factionIntel[factionKey] === 'number') {
        return state.factionIntel[factionKey];
    }
    const defaultIntel = {
        regency: 60,
        loyalists: 40,
        fawful: 25,
        warlords: 35,
        criminals: 30
    };
    return defaultIntel[factionKey] || 50;
}

function getCivilWarIntel() {
    const factionIntels = Object.keys(CIVIL_WAR_FACTIONS).map(key => getIntelForFaction(key));
    return Math.round(factionIntels.reduce((a, b) => a + b, 0) / factionIntels.length);
}

function redact(text, intel, requiredIntel) {
    if (state.debugMode || intel >= requiredIntel) {
        return text;
    }
    return `<span class="redacted" title="Requires Intel Level ${requiredIntel}">[CLASSIFIED - Intel ${requiredIntel}]</span>`;
}

function partialRedact(text, intel, requiredIntel) {
    if (state.debugMode || intel >= requiredIntel) {
        return text;
    }
    const words = text.split(' ');
    if (words.length <= 3) {
        return redact(text, intel, requiredIntel);
    }
    const visibleWords = words.slice(0, 3).join(' ');
    return `${visibleWords} <span class="redacted">[...REDACTED...]</span>`;
}

// ============================================
// DATE UTILITIES
// ============================================

function getAbsoluteDay(date = CURRENT_GAME_DATE) {
    return (date.year - 1035) * 365 + date.monthIndex * 30 + date.day;
}

function getDaysSince(pastDate) {
    return getAbsoluteDay(CURRENT_GAME_DATE) - getAbsoluteDay(pastDate);
}

function formatDate(date) {
    if (!date) return 'Unknown';
    const month = CALENDAR_DATA?.months?.values?.[date.monthIndex];
    return `${month?.name || 'Month'} ${date.day}, ${date.year}`;
}

function getOperationProgress(op) {
    if (op.status === 'completed') return 100;
    if (op.status !== 'active' || !op.startDate) return 0;
    const daysPassed = getDaysSince(op.startDate);
    return Math.min(100, Math.round((daysPassed / op.duration) * 100));
}

function getOperationEndDate(op) {
    if (!op.startDate) return null;
    const endDay = getAbsoluteDay(op.startDate) + op.duration;
    
    const startYear = 1035;
    const yearsPassed = Math.floor(endDay / 365);
    let remainingDays = endDay % 365;
    let monthIndex = 0;
    let day = 1;
    
    for (let i = 0; i < CALENDAR_DATA.months.values.length; i++) {
        const daysInMonth = CALENDAR_DATA.months.values[i].days;
        if (remainingDays < daysInMonth) {
            monthIndex = i;
            day = remainingDays + 1;
            break;
        }
        remainingDays -= daysInMonth;
    }
    return { year: startYear + yearsPassed, monthIndex, day };
}

function getDaysRemaining(op) {
    if (!op.startDate || op.status !== 'active') return null;
    const endDate = getOperationEndDate(op);
    if (!endDate) return null;
    return getAbsoluteDay(endDate) - getAbsoluteDay(CURRENT_GAME_DATE);
}

// ============================================
// RENDER: LOW INTEL VIEW
// ============================================

function renderLowIntelView(intel) {
    const rumors = [
        "Whispers speak of a great schism in the Mushroom Kingdom...",
        "Travelers report armed conflict near Toad Town...",
        "A green menace has supposedly seized a great castle...",
        "The old guard struggles to maintain order..."
    ];
    const visibleRumors = rumors.slice(0, Math.floor(intel / 10) + 1);
    
    return `
        <div class="civil-war-container intel-low">
            <div class="intel-warning">
                <span class="intel-icon">🔒</span>
                <h4>Insufficient Intelligence</h4>
                <p>Your network lacks the resources to fully understand the situation in the Mushroom Kingdom.</p>
                <div class="intel-meter">
                    <div class="intel-fill" style="width: ${intel}%"></div>
                    <span class="intel-label">Intel Level: ${intel}/100</span>
                </div>
            </div>
            <div class="rumors-section">
                <h5>📡 Intercepted Rumors</h5>
                <ul class="rumors-list">
                    ${visibleRumors.map(rumor => `<li class="rumor-item">${rumor}</li>`).join('')}
                </ul>
            </div>
            <div class="intel-hint">
                <p>💡 <strong>Tip:</strong> Complete faction quests, deploy spies, or acquire intelligence reports to increase your intel level.</p>
            </div>
        </div>
    `;
}

// ============================================
// RENDER: INFLUENCE BAR
// ============================================

function renderInfluenceBar(intel) {
    const influence = calculateDynamicInfluence();
    const total = Object.values(influence).reduce((a, b) => a + b, 0);
    
    let leadingFaction = null;
    let leadingValue = 0;
    Object.entries(influence).forEach(([key, value]) => {
        if (value > leadingValue) {
            leadingFaction = key;
            leadingValue = value;
        }
    });

    const segments = Object.entries(CIVIL_WAR_FACTIONS).map(([key, faction]) => {
        const percentage = (influence[key] / total * 100).toFixed(1);
        const isLeading = key === leadingFaction;
        const showLabel = intel >= 50 || state.debugMode;
        const showValue = intel >= 70 || state.debugMode;
        
        return `
            <div class="influence-segment ${isLeading ? 'leading' : ''}" 
                 style="width: ${percentage}%; background: ${faction.color};"
                 title="${showLabel ? `${faction.name}: ${influence[key]} (${percentage}%)` : 'Unknown Faction'}"
                 data-faction="${key}">
                <span class="segment-icon">${faction.icon}</span>
                ${showValue ? `<span class="segment-value">${influence[key]}</span>` : ''}
            </div>
        `;
    }).join('');

    const legend = Object.entries(CIVIL_WAR_FACTIONS).map(([key, faction]) => {
        const showName = intel >= 40 || state.debugMode;
        return `
            <div class="legend-item" data-faction="${key}">
                <span class="legend-color" style="background: ${faction.color}"></span>
                <span class="legend-icon">${faction.icon}</span>
                <span class="legend-name">${showName ? faction.shortName : '???'}</span>
            </div>
        `;
    }).join('');

    return `
        <div class="influence-section">
            <h4 class="section-title">📊 Balance of Power</h4>
            <div class="influence-bar-container">
                ${segments}
            </div>
            <div class="influence-legend">
                ${legend}
            </div>
            ${intel < 70 ? `<p class="intel-note">* Higher intel reveals exact influence values</p>` : ''}
        </div>
    `;
}

// ============================================
// RENDER: FACTION CARDS
// ============================================

function renderFactionCard(factionKey, intel) {
    const faction = CIVIL_WAR_FACTIONS[factionKey];
    const factionIntel = getIntelForFaction(factionKey);
    const operations = STRATEGIC_OPERATIONS[factionKey] || [];
    const activeOps = operations.filter(op => op.status === 'active');
    const influence = calculateDynamicInfluence();
    
    const warStatus = calculateWarStatus();
    const isLeading = warStatus.leading === factionKey;

    const showLeader = factionIntel >= 30 || state.debugMode;
    const showGoal = factionIntel >= 45 || state.debugMode;
    const showMilitary = factionIntel >= 55 || state.debugMode;
    const showOperations = factionIntel >= 60 || state.debugMode;
    const showOpDetails = factionIntel >= 75 || state.debugMode;

    return `
        <div class="faction-card ${isLeading ? 'faction-leading' : ''}" data-faction="${factionKey}">
            <div class="faction-card-header" style="border-color: ${faction.color}">
                <div class="faction-icon" style="background: ${faction.color}">${faction.icon}</div>
                <div class="faction-title-block">
                    <h4 class="faction-name">${faction.name}</h4>
                    <p class="faction-leader">
                        ${showLeader ? faction.leaderTitle : redact(faction.leaderTitle, factionIntel, 30)}
                    </p>
                </div>
                <div class="faction-influence-badge" style="background: ${faction.color}">
                    ${factionIntel >= 70 || state.debugMode ? influence[factionKey] : '?'}
                </div>
            </div>
            
            <div class="faction-card-body">
                <div class="faction-stats">
                    <div class="stat-item">
                        <span class="stat-icon">⚔️</span>
                        <span class="stat-value">${showMilitary ? faction.military.strength : '??'}</span>
                        <span class="stat-label">Military</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">💪</span>
                        <span class="stat-value">${showMilitary ? faction.military.morale + '%' : '??'}</span>
                        <span class="stat-label">Morale</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">🏴</span>
                        <span class="stat-value">${faction.territories.length}</span>
                        <span class="stat-label">Territories</span>
                    </div>
                </div>
                
                <p class="faction-goal">
                    "${showGoal ? faction.goal : partialRedact(faction.goal, factionIntel, 45)}"
                </p>
                
                <div class="faction-operations">
                    <h5>Active Operations ${showOperations ? `(${activeOps.length})` : ''}</h5>
                    ${showOperations ? (
                        activeOps.length > 0 ? activeOps.map(op => {
                            const progress = op.progress || getOperationProgress(op);
                            const daysRemaining = getDaysRemaining(op);
                            return `
                                <div class="operation-item active" data-op-id="${op.id}">
                                    <div class="op-header">
                                        <span class="op-type op-type-${op.type}">${op.type}</span>
                                        <span class="op-name">${showOpDetails ? op.name : redact(op.name, factionIntel, 75)}</span>
                                    </div>
                                    <div class="op-progress-bar">
                                        <div class="op-progress-fill" style="width: ${progress}%; background: ${faction.color}"></div>
                                    </div>
                                    <div class="op-footer">
                                        <span class="op-progress-text">${progress}%</span>
                                        ${showOpDetails && daysRemaining !== null ? 
                                            `<span class="op-days-remaining">${daysRemaining} days left</span>` : 
                                            ''
                                        }
                                    </div>
                                </div>
                            `;
                        }).join('') : '<p class="no-ops">No active operations detected</p>'
                    ) : `<p class="redacted">[Intel ${60} required]</p>`}
                </div>
            </div>
            
            <div class="faction-card-footer">
                <div class="faction-intel-level">
                    <span class="intel-label">Intel Level:</span>
                    <div class="mini-intel-bar">
                        <div class="mini-intel-fill" style="width: ${factionIntel}%"></div>
                    </div>
                    <span class="intel-value">${factionIntel}%</span>
                </div>
                <button class="faction-detail-btn" data-faction="${factionKey}">View Details</button>
            </div>
        </div>
    `;
}

// ============================================
// RENDER: TERRITORY MAP
// ============================================

function renderTerritoryMap(intel) {
    const showController = intel >= 35 || state.debugMode;
    const showDetails = intel >= 50 || state.debugMode;
    const showContested = intel >= 65 || state.debugMode;

    const territories = TERRITORY_MAP.regions.map(region => {
        const controller = CIVIL_WAR_FACTIONS[region.controller];
        const isContested = region.contestedBy && region.contestedBy.length > 0;
        
        return `
            <div class="territory-item control-${region.controller} ${isContested && showContested ? 'contested' : ''} ${region.siege ? 'under-siege' : ''} ${region.recentlyChanged ? 'recently-changed' : ''}"
                 data-region="${region.id}"
                 title="${showDetails ? region.description : 'Unknown territory'}">
                <div class="territory-icon">${region.icon}</div>
                <div class="territory-info">
                    <span class="territory-name">${region.name}</span>
                    <span class="territory-type">${showDetails ? region.type : '???'}</span>
                </div>
                <div class="territory-controller" style="background: ${showController ? (controller?.color || '#666') : '#444'}">
                    ${showController ? (controller?.icon || '?') : '?'}
                </div>
                ${isContested && showContested ? 
                    `<span class="contested-badge" title="Contested by ${region.contestedBy.map(f => CIVIL_WAR_FACTIONS[f]?.shortName || '???').join(', ')}">⚔️</span>` : 
                    ''
                }
                ${region.siege ? '<span class="siege-badge" title="Under Siege">🏰</span>' : ''}
            </div>
        `;
    }).join('');

    return `
        <div class="territory-section">
            <h4 class="section-title">🗺️ Territory Control</h4>
            ${intel < 35 ? '<p class="intel-note">* Intel too low to identify territory controllers</p>' : ''}
            <div class="territory-list">
                ${territories}
            </div>
        </div>
    `;
}

// ============================================
// RENDER: RECENT EVENTS
// ============================================

function renderRecentEvents(intel) {
    const showEventDetails = intel >= 40 || state.debugMode;
    const showImpact = intel >= 70 || state.debugMode;
    
    const recentEvents = CIVIL_WAR_EVENTS
        .filter(e => getDaysSince(e.date) <= 14 && getDaysSince(e.date) >= 0)
        .sort((a, b) => getAbsoluteDay(b.date) - getAbsoluteDay(a.date))
        .slice(0, 5);

    if (recentEvents.length === 0) {
        return `
            <div class="events-section">
                <h4 class="section-title">📜 Recent Events</h4>
                <p class="no-events">No significant events detected in the past two weeks.</p>
            </div>
        `;
    }

    const eventsHTML = recentEvents.map(event => {
        const daysAgo = getDaysSince(event.date);
        const daysLabel = daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo}d ago`;
        
        return `
            <div class="timeline-event event-${event.type}">
                <div class="event-date-marker">
                    <span class="days-ago">${daysLabel}</span>
                </div>
                <div class="event-content">
                    <h5 class="event-title">${showEventDetails ? event.title : partialRedact(event.title, intel, 40)}</h5>
                    <p class="event-desc">${showEventDetails ? event.description : redact(event.description, intel, 40)}</p>
                    ${showImpact && event.impact ? `
                        <div class="event-impact">
                            ${Object.entries(event.impact).map(([faction, change]) => {
                                const factionData = CIVIL_WAR_FACTIONS[faction];
                                if (!factionData) return '';
                                const changeClass = change > 0 ? 'positive' : 'negative';
                                return `
                                    <span class="impact-item ${changeClass}">
                                        ${factionData.icon} ${change > 0 ? '+' : ''}${change}
                                    </span>
                                `;
                            }).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="events-section">
            <h4 class="section-title">📜 Recent Events</h4>
            <div class="events-timeline">
                ${eventsHTML}
            </div>
            ${intel < 70 ? '<p class="intel-note">* Higher intel reveals event impacts</p>' : ''}
        </div>
    `;
}

// ============================================
// RENDER: WAR STATUS HEADER
// ============================================

function renderWarStatusHeader(intel) {
    const warStatus = calculateWarStatus();
    const { phase, daysSinceStart, leadingFaction, specialStatus } = warStatus;
    
    const showPhase = intel >= 25 || state.debugMode;
    const showLeading = intel >= 55 || state.debugMode;
    const showSpecial = intel >= 80 || state.debugMode;

    return `
        <div class="cw-header">
            <div class="cw-title-block">
                <h2 class="cw-title">🍄 ${CIVIL_WAR_CONFIG.name}</h2>
                <div class="cw-meta">
                    ${showPhase ? `
                        <span class="cw-phase phase-${phase.toLowerCase().replace(' ', '-')}">${phase}</span>
                    ` : `
                        <span class="cw-phase phase-unknown">Phase Unknown</span>
                    `}
                    <span class="cw-day">Day ${daysSinceStart} of Conflict</span>
                    <span class="cw-date">${formatDate(CURRENT_GAME_DATE)}</span>
                </div>
            </div>
            ${showLeading && leadingFaction ? `
                <div class="cw-leading-indicator">
                    <span class="leading-label">Currently Leading:</span>
                    <span class="leading-faction" style="color: ${leadingFaction.color}">
                        ${leadingFaction.icon} ${leadingFaction.shortName}
                    </span>
                </div>
            ` : ''}
            ${showSpecial && specialStatus ? `
                <div class="cw-special-status">${specialStatus}</div>
            ` : ''}
            
            <!-- BUTTON FOR ANALYTICS MODAL -->
            <button id="btn-view-analytics" class="faction-detail-btn" style="height: fit-content; margin-left: auto; border: 1px solid #ffffff44;">
                📊 View Intel Report
            </button>
        </div>
    `;
}

// ============================================
// RENDER: INTEL DASHBOARD
// ============================================

function renderIntelDashboard() {
    const overallIntel = getCivilWarIntel();
    const factionIntels = Object.entries(CIVIL_WAR_FACTIONS).map(([key, faction]) => {
        const intel = getIntelForFaction(key);
        return `
            <div class="intel-faction-item">
                <span class="intel-faction-icon" style="background: ${faction.color}">${faction.icon}</span>
                <span class="intel-faction-name">${faction.shortName}</span>
                <div class="intel-faction-bar">
                    <div class="intel-faction-fill" style="width: ${intel}%; background: ${faction.color}"></div>
                </div>
                <span class="intel-faction-value">${intel}%</span>
            </div>
        `;
    }).join('');

    return `
        <div class="intel-dashboard">
            <h4 class="section-title">🕵️ Intelligence Overview</h4>
            <div class="intel-overall">
                <div class="intel-overall-meter">
                    <svg viewBox="0 0 100 50" class="intel-gauge">
                        <path d="M 10 45 A 40 40 0 0 1 90 45" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
                        <path d="M 10 45 A 40 40 0 0 1 90 45" fill="none" stroke="var(--accent-color)" stroke-width="8" 
                              stroke-dasharray="${overallIntel * 1.26} 126" stroke-linecap="round"/>
                    </svg>
                    <div class="intel-overall-value">${overallIntel}%</div>
                    <div class="intel-overall-label">Overall Intel</div>
                </div>
            </div>
            <div class="intel-by-faction">
                ${factionIntels}
            </div>
        </div>
    `;
}

// ============================================
// MAIN RENDER FUNCTION
// ============================================

export function renderMushroomKingdomCivilWar(viewingFactionKey = null) {
    const intel = getCivilWarIntel();
    
    if (intel < 25 && !state.debugMode) {
        return renderLowIntelView(intel);
    }

    const factionCardsHTML = Object.keys(CIVIL_WAR_FACTIONS)
        .map(key => renderFactionCard(key, intel))
        .join('');

    return `
        <div class="civil-war-system">
            ${renderWarStatusHeader(intel)}
            <p class="cw-description">
                ${intel >= 30 || state.debugMode ? CIVIL_WAR_CONFIG.description : partialRedact(CIVIL_WAR_CONFIG.description, intel, 30)}
            </p>
            ${renderIntelDashboard()}
            ${renderInfluenceBar(intel)}
            <div class="cw-content-grid">
                <div class="factions-section">
                    <h3 class="section-title">⚔️ Warring Factions</h3>
                    <div class="faction-cards-grid">
                        ${factionCardsHTML}
                    </div>
                </div>
                <div class="cw-sidebar">
                    ${renderTerritoryMap(intel)}
                    ${renderRecentEvents(intel)}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// EVENT LISTENERS SETUP
// ============================================

function initCivilWarListeners() {
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

// ============================================
// EXPORTS
// ============================================
 
export {
    initCivilWarListeners,
    getIntelForFaction,
    getCivilWarIntel,
    redact,
    partialRedact
};