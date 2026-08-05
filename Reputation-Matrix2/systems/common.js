
import { state } from '../app/core/state.js';
import { LORE_DATA } from '../lore.js';
import { getSubFactionReputation } from '../app/systems/reputation.js';
import { calculateRumorMetrics } from '../data/support/research-data.js';
import { WAHBOOK_POSTS } from '../data/assembly/assembly-data.js';
import { CURRENT_GAME_DATE } from '../data/world/calendar.js';
/**
 * Calculates the breakdown of intel for a faction.
 * @param {string} factionKey
 * @returns {object} Breakdown of Base, History, Active, and Total intel.
 */
function gameDateToDays(date) {
    const daysPerMonth = 30; // Assuming 30-day months, adjust if needed
    const monthsPerYear = 12;
    return (date.year * monthsPerYear * daysPerMonth) + (date.monthIndex * daysPerMonth) + date.day;
}

export function getIntelBreakdown(factionKey) {
    const loggedInUser = state.loggedInUser || 'generic';
    
    // 1. Base Intel (From state.intelLevels - starting point)
    const userIntel = state.intelLevels?.[loggedInUser] || state.intelLevels?.generic || {};
    const genericIntel = state.intelLevels?.generic || {};
    const base = userIntel[factionKey] ?? genericIntel[factionKey] ?? 0;

    // 2. History Modifier (Dynamic - based on consecutive days in positive/negative standing)
    const history = calculateHistoryModifier(factionKey);

    // 3. Decay (Negative modifier based on chatter inactivity)
    const decay = calculateIntelDecay(factionKey);

    // 4. Active Chatter Bonus (Dynamic based on active rumors)
    let active = 0;
    if (LORE_DATA && LORE_DATA.rumors) {
        LORE_DATA.rumors.forEach(rumor => {
            const isAffected = rumor.effects && rumor.effects[factionKey] !== undefined;
            const isTarget = rumor.targets && rumor.targets.includes(factionKey);
            
            if (isAffected || isTarget) {
                const relatedPosts = WAHBOOK_POSTS.filter(p => p.rumorId === rumor.id);
                const metrics = calculateRumorMetrics(rumor, relatedPosts);
                
                if (metrics.status !== 'Dead' && metrics.status !== 'Old News') {
                    const bonus = Math.min(20, Math.ceil(metrics.finalScore * 2)); 
                    active += Math.max(0, bonus);
                    
                    // Mark chatter as active when rumors are alive
                    markChatterActive(factionKey);
                }
            }
        });
    }

    const total = Math.max(0, Math.min(100, base + history + decay + active));

    return {
        base,
        history,
        decay,
        active,
        total
    };
}
/**
 * Calculates the intel level for a given faction based on the logged-in user.
 * Now dynamically calculates active bonuses.
 * @param {string} factionKey - The key of the faction.
 * @returns {number} The calculated intel level.
 */
export function getIntelForFaction(factionKey) {
    return getIntelBreakdown(factionKey).total;
}
export function processDailyIntelUpdates(getReputation, getAllFactionKeys) {
    const factionKeys = getAllFactionKeys();
    const targetPlayer = state.party?.[0] || state.loggedInUser || 'generic';
    
    factionKeys.forEach(factionKey => {
        const currentRep = getReputation(targetPlayer, factionKey);
        updateFactionHistory(factionKey, currentRep);
    });
}
/**
 * Builds a generic tabbed interface for factions with detailed, structured information.
 * @param {object} details - The data object containing hierarchy, recruitment, etc.
 * @param {string} description - The introductory text for the system.
 * @returns {string} The complete HTML for the tabbed system.
 */
export function buildDetailedSystemHTML(details, description) {
    const tabs = [];
    const contents = [];

    if (details.hierarchy) {
        tabs.push({ id: 'hierarchy', label: 'Hierarchy' });
        const hierarchyHTML = `
            <div class="system-org-chart">
                ${details.hierarchy.map(level => `
                    <div class="org-chart-level">
                        <div class="org-rank">${level.rank}</div>
                        <div class="org-leader">${level.leader}</div>
                        <p class="org-description">${level.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        contents.push({ id: 'hierarchy', html: hierarchyHTML });
    }

    if (details.recruitment) {
        tabs.push({ id: 'recruitment', label: 'Recruitment' });
        const recruitmentHTML = `
            <div class="info-card-grid">
                ${Object.values(details.recruitment).filter(item => typeof item === 'object').map(item => `
                    <div class="info-card">
                        <h6>${item.title}</h6>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </div>`;
        contents.push({ id: 'recruitment', html: recruitmentHTML });
    }

    if (details.tactics) {
        tabs.push({ id: 'tactics', label: 'Tactics' });
        const tacticsHTML = `
            <div class="info-card-grid">
                 ${Object.values(details.tactics).filter(item => typeof item === 'object').map(item => `
                    <div class="info-card">
                        <h6>${item.title}</h6>
                        <p>${item.description}</p>
                    </div>
                `).join('')}
            </div>`;
        contents.push({ id: 'tactics', html: tacticsHTML });
    }
    
    if (details.ideology) {
        tabs.push({ id: 'ideology', label: 'Ideology & Culture' });
        const ideologyHTML = `
            <div class="info-card">
                 <h6>${details.ideology.title}</h6>
                 <p>${details.ideology.description}</p>
            </div>
        `;
        contents.push({ id: 'ideology', html: ideologyHTML });
    }
    
    if (details.shared_mechanic) {
        tabs.push({ id: 'mechanic', label: details.shared_mechanic.tab_title || 'Unique Mechanic' });
        const mechanicHTML = `
            <div class="mechanic-container">
                 ${Object.values(details.shared_mechanic.cards).map(card => `
                    <div class="mechanic-card ${card.css_class}">
                         <h6>${card.title}</h6>
                         <p>${card.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        contents.push({ id: 'mechanic', html: mechanicHTML });
    }

    const tabsHTML = tabs.map((tab, index) => `<button class="system-tab-btn ${index === 0 ? 'active' : ''}" data-tab="${tab.id}">${tab.label}</button>`).join('');
    const contentsHTML = contents.map((content, index) => `<div id="${content.id}" class="system-tab-content ${index === 0 ? 'active' : ''}">${content.html}</div>`).join('');

    return `
        <p class="system-description">${description}</p>
        <div class="faction-detailed-system">
            <div class="system-tabs">${tabsHTML}</div>
            ${contentsHTML}
        </div>
    `;
}
/**
 * Initializes the event listeners for a generic tabbed system.
 */
export function initTabbedSystem() {
    const systemContainer = document.querySelector('.faction-detailed-system');
    if (systemContainer) {
        const tabsContainer = systemContainer.querySelector('.system-tabs');
        const tabs = tabsContainer.querySelectorAll('.system-tab-btn');
        const contents = systemContainer.querySelectorAll('.system-tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                contents.forEach(content => {
                    content.classList.toggle('active', content.id === tab.dataset.tab);
                });
            });
        });
    }
}
/**
 * A fallback renderer for factions that have subfactions but no unique visualization.
 * @param {object} subFactions - The subfaction data object.
 * @param {string} factionKey - The key of the parent faction.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML for the subfaction list.
 */
export function renderDefaultSubfactionList(subFactions, factionKey, currentState) {
    const subFactionListHTML = Object.entries(subFactions).map(([subKey, subFaction]) => {
        const playerRepHTML = currentState.party.map(playerKey => {
            const subRep = getSubFactionReputation(playerKey, factionKey, subKey);
            const repClass = subRep > 10 ? 'positive' : subRep < -10 ? 'negative' : 'neutral';
            return `<div class="subfaction-player-rep">
                    <span class="char-name">${LORE_DATA.characters[playerKey].name}:</span>
                    <span class="rep-value ${repClass}">${subRep}</span>
                </div>`;
        }).join('');
        return `<li class="subfaction-item">
                <div class="subfaction-header">
                    <span class="subfaction-name">${subFaction.name}</span>
                    <span class="subfaction-influence">(${subFaction.influence || '??'}% Influence)</span>
                </div>
                <p class="subfaction-description">${subFaction.description}</p>
                <div class="subfaction-reps-container">${playerRepHTML}</div>
            </li>`;
    }).join('');
    return `<div class="system-content"><ul class="subfaction-list">${subFactionListHTML}</ul></div>`;
}
function getDaysBetween(dateA, dateB) {
    return gameDateToDays(dateB) - gameDateToDays(dateA);
}
function calculateIntelDecay(factionKey) {
    const lastActiveDate = state.factionChatterLastActive?.[factionKey];
    if (!lastActiveDate) return 0;
    
    const daysSinceActive = getDaysBetween(lastActiveDate, CURRENT_GAME_DATE);
    
    if (daysSinceActive <= 0) return 0;
    
    // Decay 2% per day of inactivity, max 50% decay
    const decay = Math.min(daysSinceActive * 2, 50);
    return -decay;
}
function calculateHistoryModifier(factionKey) {
    const historyData = state.factionHistory?.[factionKey];
    if (!historyData) return 0;
    
    const { consecutiveDays, isPositive } = historyData;
    
    // +1 or -1 per consecutive day, capped at ±30
    const modifier = Math.min(Math.abs(consecutiveDays), 30);
    return isPositive ? modifier : -modifier;
}


export function updateFactionHistory(factionKey, currentRep) {
    if (!state.factionHistory) {
        state.factionHistory = {};
    }
    
    const existing = state.factionHistory[factionKey];
    const isPositive = currentRep >= 0;
    
    if (!existing) {
        state.factionHistory[factionKey] = {
            consecutiveDays: 1,
            isPositive: isPositive,
            lastUpdated: { ...CURRENT_GAME_DATE }
        };
        return;
    }
    
    const daysPassed = getDaysBetween(existing.lastUpdated, CURRENT_GAME_DATE);
    
    if (daysPassed < 1) return; // Already updated today
    
    if (existing.isPositive === isPositive) {
        // Same direction, increment consecutive days
        existing.consecutiveDays += daysPassed;
    } else {
        // Direction changed, reset
        existing.consecutiveDays = daysPassed;
        existing.isPositive = isPositive;
    }
    
    existing.lastUpdated = { ...CURRENT_GAME_DATE };
}
export function markChatterActive(factionKey) {
    if (!state.factionChatterLastActive) {
        state.factionChatterLastActive = {};
    }
    state.factionChatterLastActive[factionKey] = { ...CURRENT_GAME_DATE };
}
export function isChatterActive(factionKey, thresholdDays = 3) {
    const lastActive = state.factionChatterLastActive?.[factionKey];
    if (!lastActive) return false;
    
    const daysSince = getDaysBetween(lastActive, CURRENT_GAME_DATE);
    
    return daysSince < thresholdDays;
}

/**
 * A fallback renderer for factions that have subfactions but no unique visualization.
 * @param {object} subFactions - The subfaction data object.
 * @param {string} factionKey - The key of the parent faction.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML for the subfaction list.
 */

