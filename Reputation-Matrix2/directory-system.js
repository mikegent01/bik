// directory-system.js - Player Relations Focused Directory System

import { state, loadState } from './state.js';
import { LORE_DATA } from './lore.js';
import { FACTION_ASSESSMENTS } from './assessments.js';
import { getReputation, getGenericFactionAssessment } from './reputation.js';
import { getIntelForFaction, getIntelBreakdown } from './systems/common.js';
import { playSound } from './common.js';

// ============================================
// STATE
// ============================================

let currentView = 'grid';
let selectedPlayer = null; // For player view
let currentFilters = {
    region: 'all',
    standing: 'all',
    sort: 'reputation',
    search: ''
};

// ============================================
// INITIALIZATION
// ============================================

function init() {
    console.log('[Directory] Initializing...');
    
    // Ensure state is loaded
    if (!state.finalReputations || Object.keys(state.finalReputations).length === 0) {
        loadState();
    }
    
    // Set default selected player to logged in user or first party member
    selectedPlayer = state.loggedInUser !== 'generic' ? state.loggedInUser : state.party[0];
    
    // Initial render
    render();
    
    // Setup event listeners
    initEventListeners();
    
    // Handle hash routing for direct faction links
    handleHashRoute();
    
    console.log('[Directory] Initialized with', Object.keys(LORE_DATA.factions).length, 'factions');
}

// ============================================
// DATA FUNCTIONS
// ============================================

function getPartyAverageReputation(factionKey) {
    let total = 0;
    state.party.forEach(playerKey => {
        total += getReputation(playerKey, factionKey);
    });
    return Math.round(total / state.party.length);
}

function getPlayerReputation(playerKey, factionKey) {
    if (state.finalReputations && state.finalReputations[playerKey]) {
        return state.finalReputations[playerKey].reputation[factionKey] || 0;
    }
    return getReputation(playerKey, factionKey);
}

function getPlayerNotoriety(playerKey, factionKey) {
    if (state.finalReputations && state.finalReputations[playerKey]) {
        return state.finalReputations[playerKey].notoriety[factionKey] || 0;
    }
    return 0;
}

function getFactionAssessment(factionKey, playerKey) {
    if (FACTION_ASSESSMENTS[factionKey] && FACTION_ASSESSMENTS[factionKey][playerKey]) {
        return FACTION_ASSESSMENTS[factionKey][playerKey];
    }
    return null;
}

function getReputationClass(rep) {
    if (rep >= 50) return 'friendly';
    if (rep >= 20) return 'warm';
    if (rep > -20) return 'neutral';
    if (rep > -50) return 'cold';
    return 'hostile';
}

function getReputationLabel(rep) {
    if (rep >= 75) return 'Allied';
    if (rep >= 50) return 'Friendly';
    if (rep >= 20) return 'Warm';
    if (rep > -20) return 'Neutral';
    if (rep > -50) return 'Cold';
    if (rep > -75) return 'Hostile';
    return 'Enemy';
}

function getFilteredFactions() {
    const isDebug = state.debugMode;
    
    let factions = Object.entries(LORE_DATA.factions)
        .filter(([key, faction]) => {
            // Filter out factions with no intel unless debug
            const intel = getIntelForFaction(key);
            if (!isDebug && intel <= 0) return false;
            return true;
        })
        .map(([key, faction]) => {
            const partyRep = getPartyAverageReputation(key);
            const intel = getIntelForFaction(key);
            
            // Get individual player reps
            const playerReps = {};
            state.party.forEach(playerKey => {
                playerReps[playerKey] = getPlayerReputation(playerKey, key);
            });
            
            return {
                key,
                faction,
                partyRep,
                intel,
                playerReps,
                region: faction.region || 'Unknown'
            };
        });
    
    // Apply filters
    if (currentFilters.region !== 'all') {
        factions = factions.filter(f => f.region === currentFilters.region);
    }
    
    if (currentFilters.standing !== 'all') {
        factions = factions.filter(f => {
            const rep = selectedPlayer ? f.playerReps[selectedPlayer] : f.partyRep;
            switch (currentFilters.standing) {
                case 'friendly': return rep >= 50;
                case 'neutral': return rep > -50 && rep < 50;
                case 'hostile': return rep <= -50;
                default: return true;
            }
        });
    }
    
    if (currentFilters.search) {
        const search = currentFilters.search.toLowerCase();
        factions = factions.filter(f => 
            f.faction.name?.toLowerCase().includes(search) ||
            f.faction.description?.toLowerCase().includes(search) ||
            f.key.toLowerCase().includes(search)
        );
    }
    
    // Sort
    switch (currentFilters.sort) {
        case 'name':
            factions.sort((a, b) => (a.faction.name || a.key).localeCompare(b.faction.name || b.key));
            break;
        case 'intel':
            factions.sort((a, b) => b.intel - a.intel);
            break;
        case 'notoriety':
            const getNotoriety = (f) => selectedPlayer 
                ? getPlayerNotoriety(selectedPlayer, f.key)
                : state.party.reduce((sum, p) => sum + getPlayerNotoriety(p, f.key), 0) / state.party.length;
            factions.sort((a, b) => getNotoriety(b) - getNotoriety(a));
            break;
        case 'reputation':
        default:
            factions.sort((a, b) => {
                const repA = selectedPlayer ? a.playerReps[selectedPlayer] : a.partyRep;
                const repB = selectedPlayer ? b.playerReps[selectedPlayer] : b.partyRep;
                return repB - repA;
            });
    }
    
    return factions;
}

function getUniqueRegions() {
    const regions = new Set();
    Object.values(LORE_DATA.factions).forEach(f => {
        if (f.region) regions.add(f.region);
    });
    return [...regions].sort();
}

function getStandingSummary() {
    const factions = getFilteredFactions(); // Uses current filters
    
    let friendly = 0, neutral = 0, hostile = 0;
    
    factions.forEach(f => {
        // Use selected player's rep or party avg rep
        const rep = selectedPlayer ? f.playerReps[selectedPlayer] : f.partyRep;
        
        if (rep >= 50) friendly++;
        else if (rep <= -50) hostile++;
        else neutral++;
    });
    
    return { friendly, neutral, hostile, total: factions.length };
}

function getRecentRumors(count = 5) {
    if (!LORE_DATA.rumors) return [];
    
    return [...LORE_DATA.rumors]
        .sort((a, b) => {
            const dateA = new Date(a.date.year, a.date.monthIndex, a.date.day);
            const dateB = new Date(b.date.year, b.date.monthIndex, b.date.day);
            return dateB - dateA;
        })
        .slice(0, count);
}

// ============================================
// CALCULATIONS FOR MODAL
// ============================================

function getReputationFactors(factionKey) {
    // 1. Determine which player we are looking at.
    // If 'selectedPlayer' is active (e.g. from Player View or sidebar), use them.
    // If not, use the first party member as the reference for the breakdown.
    const targetPlayer = (selectedPlayer && selectedPlayer !== 'generic') 
        ? selectedPlayer 
        : state.party[0];

    const factors = [];
    
    // Access the calculation breakdown from state
    const breakdown = state.calculationBreakdown?.[targetPlayer]?.[factionKey];

    if (breakdown) {
        // --- Base Reputation ---
        if (breakdown.base !== 0) {
            factors.push({
                source: 'History',
                text: 'Base Reputation',
                impact: breakdown.base >= 0 ? 'positive' : 'negative',
                value: breakdown.base
            });
        }

        // --- Rumors ---
        if (breakdown.rumors && breakdown.rumors.length > 0) {
            breakdown.rumors.forEach(r => {
                factors.push({
                    source: 'Rumor',
                    text: r.title,
                    impact: r.value >= 0 ? 'positive' : 'negative',
                    value: r.value
                });
            });
        }

        // --- Propagation (Relations) ---
        if (breakdown.propagation && breakdown.propagation.length > 0) {
            breakdown.propagation.forEach(p => {
                // Try to get a nice name for the source faction
                const sourceName = LORE_DATA.factions[p.source]?.name || p.source;
                factors.push({
                    source: 'Relations',
                    text: `Influence from ${sourceName}`,
                    impact: p.value >= 0 ? 'positive' : 'negative',
                    value: Math.round(p.value)
                });
            });
        }
    } else {
        // Fallback only if no data exists
        const rep = getReputation(targetPlayer, factionKey);
        factors.push({
            source: 'Unknown',
            text: 'General diplomatic relations',
            impact: rep >= 0 ? 'positive' : 'negative',
            value: rep
        });
    }

    return factors;
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderPartyStatsBar() {
    const container = document.getElementById('party-stats-bar');
    if (!container) return;
    
    const summary = getStandingSummary();
    const factions = getFilteredFactions();
    
    // Calculate total intel
    const totalIntel = factions.reduce((sum, f) => sum + f.intel, 0);
    const avgIntel = factions.length > 0 ? Math.round(totalIntel / factions.length) : 0;
    
    container.innerHTML = `
        <div class="pstat-item">
            <span class="pstat-icon">🏴</span>
            <span class="pstat-value">${summary.total}</span>
            <span class="pstat-label">Known Factions</span>
        </div>
        <div class="pstat-item friendly">
            <span class="pstat-icon">💚</span>
            <span class="pstat-value">${summary.friendly}</span>
            <span class="pstat-label">Friendly</span>
        </div>
        <div class="pstat-item neutral">
            <span class="pstat-icon">💛</span>
            <span class="pstat-value">${summary.neutral}</span>
            <span class="pstat-label">Neutral</span>
        </div>
        <div class="pstat-item hostile">
            <span class="pstat-icon">❤️</span>
            <span class="pstat-value">${summary.hostile}</span>
            <span class="pstat-label">Hostile</span>
        </div>
        <div class="pstat-item">
            <span class="pstat-icon">🔍</span>
            <span class="pstat-value">${avgIntel}%</span>
            <span class="pstat-label">Avg Intel</span>
        </div>
        <div class="pstat-item">
            <span class="pstat-icon">👥</span>
            <span class="pstat-value">${state.party.length}</span>
            <span class="pstat-label">Party Members</span>
        </div>
    `;
}

function renderPartyMemberList() {
    const container = document.getElementById('party-member-list');
    if (!container) return;
    
    container.innerHTML = state.party.map(playerKey => {
        const player = LORE_DATA.characters[playerKey];
        const isSelected = selectedPlayer === playerKey;
        
        return `
            <div class="party-member-item ${isSelected ? 'selected' : ''}" data-player="${playerKey}">
                <img src="${player?.portrait || 'portraits/unknown.png'}" alt="${player?.name}" class="party-member-portrait">
                <div class="party-member-info">
                    <span class="party-member-name">${player?.name || playerKey}</span>
                    <span class="party-member-status">${isSelected ? 'Selected' : 'Click to view'}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderStandingSummary() {
    const container = document.getElementById('standing-summary-content');
    if (!container) return;
    
    const summary = getStandingSummary();
    const total = summary.total || 1; // Prevent division by zero
    
    // Calculate percentages
    const friendlyPct = (summary.friendly / total) * 100;
    const neutralPct = (summary.neutral / total) * 100;
    const hostilePct = (summary.hostile / total) * 100;

    container.innerHTML = `
        <div class="standing-bar">
            <div class="standing-segment friendly" style="width: ${friendlyPct}%;" title="${summary.friendly} Friendly"></div>
            <div class="standing-segment neutral" style="width: ${neutralPct}%;" title="${summary.neutral} Neutral"></div>
            <div class="standing-segment hostile" style="width: ${hostilePct}%;" title="${summary.hostile} Hostile"></div>
        </div>
        <div class="standing-legend">
            <span class="legend-item"><span class="legend-dot friendly"></span> ${summary.friendly} Friendly (${Math.round(friendlyPct)}%)</span>
            <span class="legend-item"><span class="legend-dot neutral"></span> ${summary.neutral} Neutral (${Math.round(neutralPct)}%)</span>
            <span class="legend-item"><span class="legend-dot hostile"></span> ${summary.hostile} Hostile (${Math.round(hostilePct)}%)</span>
        </div>
    `;
}
function renderRecentEvents() {
    const container = document.getElementById('recent-events-list');
    if (!container) return;
    
    const rumors = getRecentRumors(5);
    
    if (rumors.length === 0) {
        container.innerHTML = '<p class="no-events">No recent events</p>';
        return;
    }
    
    container.innerHTML = rumors.map(rumor => `
        <div class="recent-event-item">
            <span class="event-date">${rumor.date.day}/${rumor.date.monthIndex + 1}</span>
            <span class="event-title">${rumor.title}</span>
        </div>
    `).join('');
}

function renderRegionFilter() {
    const select = document.getElementById('region-filter');
    if (!select) return;
    
    const regions = getUniqueRegions();
    select.innerHTML = `
        <option value="all">All Regions (${regions.length})</option>
        ${regions.map(r => `<option value="${r}" ${currentFilters.region === r ? 'selected' : ''}>${r}</option>`).join('')}
    `;
}

function renderGridView() {
    const container = document.getElementById('view-container');
    if (!container) return;
    
    const factions = getFilteredFactions();
    const isDebug = state.debugMode;
    
    if (factions.length === 0) {
        container.innerHTML = '<div class="no-factions"><p>No factions match your filters.</p></div>';
        return;
    }
    
    container.innerHTML = `
        <div class="faction-grid">
            ${factions.map(faction => renderFactionCard(faction, isDebug)).join('')}
        </div>
    `;
}

function renderWhyModal(factionKey) {
    const faction = LORE_DATA.factions[factionKey];
    const factors = getReputationFactors(factionKey);
    
    // Determine rep to show in header (match what is used in factors)
    const targetPlayer = (selectedPlayer && selectedPlayer !== 'generic') ? selectedPlayer : state.party[0];
    const totalRep = getReputation(targetPlayer, factionKey);
    
    // Create container if it doesn't exist
    let modal = document.getElementById('why-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'why-modal';
        modal.className = 'faction-modal-overlay';
        document.body.appendChild(modal);
    }

    const html = `
        <div class="faction-modal small-modal">
            <button class="modal-close" id="why-close-btn">✕</button>
            <div class="modal-header compact">
                <img src="${faction.logo || 'logos/default.png'}" class="modal-logo-small">
                <div>
                    <h3 class="modal-title-small">Reputation Breakdown</h3>
                    <span class="modal-subtitle">${faction.name}</span>
                </div>
                <div class="fc-rep-badge ${getReputationClass(totalRep)} ml-auto">
                    ${totalRep >= 0 ? '+' : ''}${totalRep}
                </div>
            </div>
            
            <div class="why-list">
                ${factors.map(f => `
                    <div class="why-item ${f.impact}">
                        <div class="why-icon">${f.impact === 'negative' ? '📉' : (f.impact === 'positive' ? '📈' : '⏺')}</div>
                        <div class="why-content">
                            <span class="why-text">${f.text}</span>
                            <span class="why-source">${f.source}</span>
                        </div>
                        ${f.value !== undefined ? `
                            <span class="why-value ${f.value >= 0 ? 'positive' : 'negative'}">
                                ${f.value >= 0 ? '+' : ''}${f.value}
                            </span>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
            
            <div class="why-footer">
                <p>Standing for <strong>${LORE_DATA.characters[targetPlayer]?.name || targetPlayer}</strong>: <strong>${getReputationLabel(totalRep)}</strong></p>
            </div>
        </div>
    `;

    modal.innerHTML = html;
    modal.classList.add('visible');

    // Add close listeners specifically for this modal
    document.getElementById('why-close-btn').onclick = () => modal.classList.remove('visible');
    modal.onclick = (e) => { if(e.target === modal) modal.classList.remove('visible'); };
}

function renderFactionCard(factionData, isDebug) {
    const { key, faction, partyRep, intel, playerReps } = factionData;
    
    // Determine the reputation number to show
    const displayRep = selectedPlayer ? playerReps[selectedPlayer] : partyRep;
    
    // Define repClass (friendly, hostile, etc.)
    const repClass = getReputationClass(displayRep);
    
    // Define label (Allied, Enemy, etc.)
    const repLabel = getReputationLabel(displayRep);
    
    // Calculate Notoriety
    const notoriety = selectedPlayer 
        ? getPlayerNotoriety(selectedPlayer, key)
        : Math.round(state.party.reduce((sum, p) => sum + getPlayerNotoriety(p, key), 0) / state.party.length);
    
    // Get Assessment Text
    const assessmentPlayer = selectedPlayer || 'archie';
    const assessment = getFactionAssessment(key, assessmentPlayer);
    const assessmentSnippet = assessment 
        ? assessment.substring(0, 120) + (assessment.length > 120 ? '...' : '')
        : getGenericFactionAssessment(displayRep);
    
    // Generate Player Dots HTML
    const playerIndicators = state.party.map(p => {
        const rep = playerReps[p];
        const cls = getReputationClass(rep);
        const char = LORE_DATA.characters[p];
        return `<span class="player-rep-dot ${cls}" title="${char?.name || p}: ${rep}"></span>`;
    }).join('');

    // Calculate Bar Width
    const widthPct = Math.min(Math.abs(displayRep), 100) / 2;
    
    // Determine bar direction and rounding
    const barStyle = displayRep < 0 
        ? `width: ${widthPct}%; right: 50%; border-radius: 4px 0 0 4px;` 
        : `width: ${widthPct}%; left: 50%; border-radius: 0 4px 4px 0;`;
    
    return `
        <div class="faction-card ${repClass}" data-faction="${key}">
            <div class="fc-header">
                <img src="${faction.logo || 'logos/default.png'}" alt="${faction.name}" class="fc-logo">
                <div class="fc-title-block">
                    <h4 class="fc-name">${faction.name || key}</h4>
                    <span class="fc-region">${faction.region || 'Unknown Region'}</span>
                </div>
                
                <!-- Reputation Badge & Why Button -->
                <div class="fc-rep-wrapper">
                    <div class="fc-rep-badge ${repClass}">
                        ${displayRep >= 0 ? '+' : ''}${displayRep}
                    </div>
                    <button class="fc-why-btn" data-why="${key}" title="View Reputation Breakdown">?</button>
                </div>
            </div>
            
            <!-- Center-Out Reputation Bar -->
            <div class="fc-rep-bar-container">
                <div class="fc-rep-bar">
                    <div class="fc-rep-fill ${repClass}" style="${barStyle}"></div>
                    <div class="fc-rep-center"></div>
                </div>
                <div class="fc-rep-labels">
                    <span>Hostile</span>
                    <span class="fc-rep-label">${repLabel}</span>
                    <span>Friendly</span>
                </div>
            </div>
            
            <p class="fc-assessment">"${assessmentSnippet}"</p>
            
            <div class="fc-stats">
                <div class="fc-stat">
                    <span class="fc-stat-label">Intel</span>
                    <div class="fc-stat-bar">
                        <div class="fc-stat-fill intel" style="width: ${intel}%;"></div>
                    </div>
                    <span class="fc-stat-value">${intel}%</span>
                </div>
                <div class="fc-stat">
                    <span class="fc-stat-label">Notoriety</span>
                    <div class="fc-stat-bar">
                        <div class="fc-stat-fill notoriety" style="width: ${notoriety}%;"></div>
                    </div>
                    <span class="fc-stat-value">${notoriety}%</span>
                </div>
            </div>
            
            <div class="fc-footer">
                <div class="fc-party-reps">
                    ${playerIndicators}
                </div>
                <button class="fc-details-btn" data-faction="${key}">View Details →</button>
            </div>
        </div>
    `;
}


function renderPlayerView() {
    const container = document.getElementById('view-container');
    if (!container) return;
    
    const player = LORE_DATA.characters[selectedPlayer];
    const factions = getFilteredFactions();
    
    // Categorize factions by standing
    const friendly = factions.filter(f => f.playerReps[selectedPlayer] >= 50);
    const warm = factions.filter(f => f.playerReps[selectedPlayer] >= 20 && f.playerReps[selectedPlayer] < 50);
    const neutral = factions.filter(f => f.playerReps[selectedPlayer] > -20 && f.playerReps[selectedPlayer] < 20);
    const cold = factions.filter(f => f.playerReps[selectedPlayer] <= -20 && f.playerReps[selectedPlayer] > -50);
    const hostile = factions.filter(f => f.playerReps[selectedPlayer] <= -50);
    
    container.innerHTML = `
        <div class="player-view">
            <div class="pv-header">
                <img src="${player?.portrait || 'portraits/unknown.png'}" alt="${player?.name}" class="pv-portrait">
                <div class="pv-info">
                    <h3 class="pv-name">${player?.name || selectedPlayer}</h3>
                    <p class="pv-title">${player?.title || 'Party Member'}</p>
                </div>
                <div class="pv-summary">
                    <div class="pv-stat"><span class="pv-stat-value">${friendly.length}</span><span class="pv-stat-label">Allies</span></div>
                    <div class="pv-stat"><span class="pv-stat-value">${hostile.length}</span><span class="pv-stat-label">Enemies</span></div>
                    <div class="pv-stat"><span class="pv-stat-value">${neutral.length + warm.length + cold.length}</span><span class="pv-stat-label">Neutral</span></div>
                </div>
            </div>
            
            ${renderPlayerStandingSection('💚 Friendly Factions', friendly, selectedPlayer, 'friendly')}
            ${renderPlayerStandingSection('💛 Warm Relations', warm, selectedPlayer, 'warm')}
            ${renderPlayerStandingSection('⚪ Neutral', neutral, selectedPlayer, 'neutral')}
            ${renderPlayerStandingSection('🧊 Cold Relations', cold, selectedPlayer, 'cold')}
            ${renderPlayerStandingSection('❤️ Hostile Factions', hostile, selectedPlayer, 'hostile')}
        </div>
    `;
}

function renderPlayerStandingSection(title, factions, playerKey, className) {
    if (factions.length === 0) return '';
    
    return `
        <div class="pv-section ${className}">
            <h4 class="pv-section-title">${title} (${factions.length})</h4>
            <div class="pv-faction-list">
                ${factions.map(f => {
                    const rep = f.playerReps[playerKey];
                    const assessment = getFactionAssessment(f.key, playerKey);
                    
                    return `
                        <div class="pv-faction-item" data-faction="${f.key}">
                            <img src="${f.faction.logo || 'logos/default.png'}" alt="${f.faction.name}" class="pv-faction-logo">
                            <div class="pv-faction-info">
                                <span class="pv-faction-name">${f.faction.name}</span>
                                <span class="pv-faction-region">${f.region}</span>
                            </div>
                            <div class="pv-faction-rep ${getReputationClass(rep)}">
                                ${rep >= 0 ? '+' : ''}${rep}
                            </div>
                            ${assessment ? `<p class="pv-faction-assessment">"${assessment.substring(0, 80)}..."</p>` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderStandingsMatrix() {
    const container = document.getElementById('view-container');
    if (!container) return;
    
    const factions = getFilteredFactions().slice(0, 25); // Limit for readability
    
    container.innerHTML = `
        <div class="standings-matrix">
            <h3 class="matrix-title">📈 Party Standing Matrix</h3>
            <p class="matrix-desc">How each party member stands with each faction</p>
            
            <div class="matrix-container">
                <table class="matrix-table">
                    <thead>
                        <tr>
                            <th class="matrix-corner">Faction</th>
                            ${state.party.map(p => {
                                const char = LORE_DATA.characters[p];
                                return `<th class="matrix-player-header">
                                    <img src="${char?.portrait || 'portraits/unknown.png'}" alt="${char?.name}" class="matrix-portrait">
                                    <span>${char?.name?.split(' ')[0] || p}</span>
                                </th>`;
                            }).join('')}
                            <th class="matrix-player-header">
                                <span>👥 Party</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${factions.map(f => `
                            <tr class="matrix-row" data-faction="${f.key}">
                                <td class="matrix-faction-cell">
                                    <img src="${f.faction.logo || 'logos/default.png'}" alt="${f.faction.name}" class="matrix-faction-logo">
                                    <span>${f.faction.name}</span>
                                </td>
                                ${state.party.map(p => {
                                    const rep = f.playerReps[p];
                                    const cls = getReputationClass(rep);
                                    return `<td class="matrix-rep-cell ${cls}">${rep >= 0 ? '+' : ''}${rep}</td>`;
                                }).join('')}
                                <td class="matrix-rep-cell ${getReputationClass(f.partyRep)}">${f.partyRep >= 0 ? '+' : ''}${f.partyRep}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="matrix-legend">
                <span class="legend-item"><span class="legend-dot friendly"></span> 50+ Friendly</span>
                <span class="legend-item"><span class="legend-dot warm"></span> 20-49 Warm</span>
                <span class="legend-item"><span class="legend-dot neutral"></span> -19 to 19 Neutral</span>
                <span class="legend-item"><span class="legend-dot cold"></span> -20 to -49 Cold</span>
                <span class="legend-item"><span class="legend-dot hostile"></span> -50- Hostile</span>
            </div>
        </div>
    `;
}

function renderIntelReport() {
    const container = document.getElementById('view-container');
    if (!container) return;
    
    const factions = getFilteredFactions().sort((a, b) => b.intel - a.intel);
    
    container.innerHTML = `
        <div class="intel-report">
            <h3 class="intel-title">🔍 Intelligence Report</h3>
            <p class="intel-desc">Current intelligence levels on known factions</p>
            
            <div class="intel-list">
                ${factions.map(f => {
                    const breakdown = getIntelBreakdown(f.key);
                    
                    return `
                        <div class="intel-item" data-faction="${f.key}">
                            <div class="intel-item-header">
                                <img src="${f.faction.logo || 'logos/default.png'}" alt="${f.faction.name}" class="intel-logo">
                                <div class="intel-item-info">
                                    <span class="intel-item-name">${f.faction.name}</span>
                                    <span class="intel-item-region">${f.region}</span>
                                </div>
                                <div class="intel-level">
                                    <span class="intel-value">${f.intel}%</span>
                                </div>
                            </div>
                            <div class="intel-bar">
                                <div class="intel-bar-fill" style="width: ${f.intel}%;"></div>
                            </div>
                            <div class="intel-breakdown">
                                <span>Base: ${breakdown.base}</span>
                                <span>History: +${breakdown.history}</span>
                                <span class="intel-active">Active: +${breakdown.active}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderFactionDetailModal(factionKey) {
    const faction = LORE_DATA.factions[factionKey];
    if (!faction) return;
    
    const intel = getIntelForFaction(factionKey);
    const isDebug = state.debugMode;
    
    const content = document.getElementById('faction-modal-content');
    if (!content) return;
    
    // Build player assessments section
    const assessmentsHTML = state.party.map(playerKey => {
        const player = LORE_DATA.characters[playerKey];
        const rep = getPlayerReputation(playerKey, factionKey);
        const notoriety = getPlayerNotoriety(playerKey, factionKey);
        const assessment = getFactionAssessment(factionKey, playerKey);
        const repClass = getReputationClass(rep);
        
        return `
            <div class="modal-player-assessment">
                <div class="mpa-header">
                    <img src="${player?.portrait || 'portraits/unknown.png'}" alt="${player?.name}" class="mpa-portrait">
                    <div class="mpa-info">
                        <span class="mpa-name">${player?.name || playerKey}</span>
                        <div class="mpa-stats">
                            <span class="mpa-rep ${repClass}">Rep: ${rep >= 0 ? '+' : ''}${rep}</span>
                            <span class="mpa-notoriety">Notoriety: ${notoriety}</span>
                        </div>
                    </div>
                </div>
                ${assessment && (intel >= 40 || isDebug) ? `
                    <div class="mpa-assessment">
                        <p>"${assessment}"</p>
                    </div>
                ` : `
                    <div class="mpa-assessment locked">
                        <p>🔒 Requires ${40 - intel}% more intel to view assessment</p>
                    </div>
                `}
            </div>
        `;
    }).join('');
    
    // Notable people section
    let notablePeopleHTML = '';
    if ((intel >= 25 || isDebug) && faction.notable_people && faction.notable_people.length > 0) {
        notablePeopleHTML = `
            <div class="modal-section">
                <h4>Notable People</h4>
                <div class="modal-people-grid">
                    ${faction.notable_people.map(person => `
                        <div class="modal-person">
                            <strong>${person.name}</strong>
                            <span class="person-role">${person.role}</span>
                            ${intel >= 60 || isDebug ? `<p class="person-desc">${person.description}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Relations section
    let relationsHTML = '';
    if ((intel >= 50 || isDebug) && faction.relations) {
        const allies = faction.relations.allies || [];
        const enemies = faction.relations.enemies || [];
        
        if (allies.length > 0 || enemies.length > 0) {
            relationsHTML = `
                <div class="modal-section">
                    <h4>Known Relations</h4>
                    <div class="modal-relations">
                        ${allies.length > 0 ? `
                            <div class="modal-relation-group">
                                <span class="relation-label">🤝 Allies:</span>
                                ${allies.map(a => {
                                    const allyFaction = LORE_DATA.factions[a];
                                    return allyFaction ? `<span class="relation-tag ally">${allyFaction.name}</span>` : '';
                                }).join('')}
                            </div>
                        ` : ''}
                        ${enemies.length > 0 ? `
                            <div class="modal-relation-group">
                                <span class="relation-label">⚔️ Enemies:</span>
                                ${enemies.map(e => {
                                    const enemyFaction = LORE_DATA.factions[e];
                                    return enemyFaction ? `<span class="relation-tag enemy">${enemyFaction.name}</span>` : '';
                                }).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    }
    
    content.innerHTML = `
        <div class="modal-header" style="border-color: var(--accent-color);">
            <img src="${faction.logo || 'logos/default.png'}" alt="${faction.name}" class="modal-logo">
            <div class="modal-title-block">
                <h2>${faction.name}</h2>
                <span class="modal-region">${faction.region || 'Unknown Region'}</span>
            </div>
        </div>
        
        <div class="modal-intel-bar">
            <span class="modal-intel-label">Intel Level: ${intel}%</span>
            <div class="modal-intel-track">
                <div class="modal-intel-fill" style="width: ${intel}%;"></div>
            </div>
        </div>
        
        <div class="modal-section">
            <h4>Description</h4>
            <p class="modal-description">${faction.description || 'No description available.'}</p>
        </div>
        
        <div class="modal-section">
            <h4>Party Standings & Assessments</h4>
            <div class="modal-assessments">
                ${assessmentsHTML}
            </div>
        </div>
        
        ${notablePeopleHTML}
        ${relationsHTML}
    `;
    
    // Show modal
    const modal = document.getElementById('faction-detail-modal');
    if (modal) {
        modal.classList.add('visible');
    }
}

// ============================================
// MAIN RENDER
// ============================================

function render() {
    renderPartyStatsBar();
    renderPartyMemberList();
    renderStandingSummary();
    renderRecentEvents();
    renderRegionFilter();
    
    switch (currentView) {
        case 'player':
            renderPlayerView();
            break;
        case 'standings':
            renderStandingsMatrix();
            break;
        case 'intel':
            renderIntelReport();
            break;
        default:
            renderGridView();
    }
}

// ============================================
// HASH ROUTING
// ============================================

function handleHashRoute() {
    const hash = window.location.hash;
    if (hash.startsWith('#faction/')) {
        const factionKey = hash.replace('#faction/', '');
        if (LORE_DATA.factions[factionKey]) {
            renderFactionDetailModal(factionKey);
        }
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

function initEventListeners() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    // Hash change for direct links
    window.addEventListener('hashchange', handleHashRoute);
    
    // Why Button Click
    document.addEventListener('click', (e) => {
        const whyBtn = e.target.closest('.fc-why-btn');
        if (whyBtn) {
            e.stopPropagation(); // Prevent opening the main faction detail modal
            const factionKey = whyBtn.dataset.why;
            playSound('click.mp3', 0.5);
            renderWhyModal(factionKey);
        }
    });

    mainContent.addEventListener('click', (e) => {
        // View mode tabs
        const viewBtn = e.target.closest('.view-mode-btn');
        if (viewBtn) {
            playSound('click.mp3', 0.5);
            document.querySelectorAll('.view-mode-btn').forEach(b => b.classList.remove('active'));
            viewBtn.classList.add('active');
            currentView = viewBtn.dataset.view;
            render();
            return;
        }
        
        // Party member selection
        const partyMember = e.target.closest('.party-member-item');
        if (partyMember) {
            playSound('click.mp3', 0.5);
            selectedPlayer = partyMember.dataset.player;
            render();
            return;
        }
        
        // Faction card click
        const factionCard = e.target.closest('.faction-card, .pv-faction-item, .matrix-row, .intel-item');
        if (factionCard && !e.target.closest('button')) {
            playSound('click.mp3', 0.5);
            const factionKey = factionCard.dataset.faction;
            window.location.hash = `faction/${factionKey}`;
            renderFactionDetailModal(factionKey);
            return;
        }
        
        // Details button
        const detailsBtn = e.target.closest('.fc-details-btn');
        if (detailsBtn) {
            playSound('click.mp3', 0.5);
            const factionKey = detailsBtn.dataset.faction;
            window.location.hash = `faction/${factionKey}`;
            renderFactionDetailModal(factionKey);
            return;
        }
    });
    
    // Modal close
    const modalClose = document.getElementById('modal-close-btn');
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            playSound('click.mp3', 0.5);
            document.getElementById('faction-detail-modal')?.classList.remove('visible');
            window.location.hash = '';
        });
    }
    
    // Modal overlay click
    const modal = document.getElementById('faction-detail-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('visible');
                window.location.hash = '';
            }
        });
    }
    
    // Filters
    document.getElementById('region-filter')?.addEventListener('change', (e) => {
        currentFilters.region = e.target.value;
        render();
    });
    
    document.getElementById('standing-filter')?.addEventListener('change', (e) => {
        currentFilters.standing = e.target.value;
        render();
    });
    
    document.getElementById('sort-filter')?.addEventListener('change', (e) => {
        currentFilters.sort = e.target.value;
        render();
    });
    
    document.getElementById('search-filter')?.addEventListener('input', (e) => {
        currentFilters.search = e.target.value;
        render();
    });
    
    // Escape to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('faction-detail-modal')?.classList.remove('visible');
            window.location.hash = '';
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

export { render, getFilteredFactions };