
import { state } from '../Reputation-Matrix2/state.js';
import { LORE_DATA } from '../lore.js';
import { getSubFactionReputation } from '../reputation.js';
import { calculateRumorMetrics } from '../Reputation-Matrix2/research-data.js';
import { WAHBOOK_POSTS } from '../Reputation-Matrix2/assembly-data.js';

/**
 * Calculates the breakdown of intel for a faction.
 * @param {string} factionKey
 * @returns {object} Breakdown of Base, History, Active, and Total intel.
 */
export function getIntelBreakdown(factionKey) {
    const loggedInUser = state.loggedInUser || 'generic';
    
    // 1. Base Intel (Permanent/Starting)
    const userIntel = state.intelLevels[loggedInUser] || state.intelLevels.generic;
    const base = userIntel[factionKey] ?? (state.intelLevels.generic ? state.intelLevels.generic[factionKey] : 0) ?? 0;

    // 2. Historical Intel (From 'finalIntel' - accumulated from past events)
    let history = 0;
    if (state.finalIntel && state.finalIntel[loggedInUser] && state.finalIntel[loggedInUser][factionKey]) {
        history = state.finalIntel[loggedInUser][factionKey] - base; // Difference is the gained history
        if (history < 0) history = 0;
    }

    // 3. Active Chatter Bonus (Dynamic based on active rumors)
    let active = 0;
    if (LORE_DATA && LORE_DATA.rumors) {
        LORE_DATA.rumors.forEach(rumor => {
            // Is this faction involved?
            const isAffected = rumor.effects && rumor.effects[factionKey] !== undefined;
            const isTarget = rumor.targets && rumor.targets.includes(factionKey);
            
            if (isAffected || isTarget) {
                const relatedPosts = WAHBOOK_POSTS.filter(p => p.rumorId === rumor.id);
                const metrics = calculateRumorMetrics(rumor, relatedPosts);
                
                // Only calculate active bonus for living rumors
                if (metrics.status !== 'Dead' && metrics.status !== 'Old News') {
                    // Bonus is based on Impact. High impact = more intel flowing.
                    // We cap it to prevent game-breaking numbers.
                    const bonus = Math.min(20, Math.ceil(metrics.finalScore * 2)); 
                    active += Math.max(0, bonus);
                }
            }
        });
    }

    return {
        base,
        history,
        active,
        total: Math.min(100, base + history + active)
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
