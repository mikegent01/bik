// politics.js - Political Landscape Analysis

import { getFaction, getAllFactions } from './systems/faction-registry.js';
import { getFactionValues, VALUE_AXES } from './societal-values.js';
import { MAP_DATA } from './map-data.js';

// ============================================
// CONFIGURATION
// ============================================

const GOVERNMENT_TYPES = {
    // --- Value Based ---
    autocracy: {
        name: 'Autocracy',
        icon: '👑',
        description: 'Rule by a single, absolute leader (e.g., Emperor, King).',
        keywords: ['empire', 'kingdom', 'monarchy', 'dictatorship', 'tyrant']
    },
    oligarchy: {
        name: 'Oligarchy',
        icon: '🏛️',
        description: 'Rule by a small, elite group of nobles or elders.',
        keywords: ['council', 'junta', 'aristocracy', 'nobility', 'peers']
    },
    democracy: {
        name: 'Democracy',
        icon: '🗳️',
        description: 'Rule by the people through elected representatives.',
        keywords: ['republic', 'democracy', 'federation', 'commonwealth', 'union', 'elected']
    },
    anarchy: {
        name: 'Anarchy',
        icon: '🏴',
        description: 'Absence of a state; self-governed communities.',
        keywords: ['anarchy', 'free', 'tribal', 'clan', 'bandit', 'rebel']
    },
    
    // --- Building/Role Based ---
    stratocracy: {
        name: 'Stratocracy',
        icon: '⚔️',
        description: 'Military government where the state and army are one.',
        keywords: ['legion', 'army', 'vanguard', 'command', 'martial']
    },
    theocracy: {
        name: 'Theocracy',
        icon: '⛪',
        description: 'Rule by religious leaders or divine mandate.',
        keywords: ['theocracy', 'church', 'cult', 'holy', 'divine', 'cleric', 'priest']
    },
    plutocracy: {
        name: 'Plutocracy',
        icon: '💰',
        description: 'Rule by the wealthy; society is driven by commerce.',
        keywords: ['syndicate', 'cartel', 'trade', 'merchant', 'company', 'bank']
    },
    magocracy: {
        name: 'Magocracy',
        icon: '🔮',
        description: 'Rule by mages, wizards, or arcane institutions.',
        keywords: ['mages', 'wizards', 'arcane', 'circle', 'coven', 'library']
    },
    technocracy: {
        name: 'Technocracy',
        icon: '🔬',
        description: 'Rule by experts, scientists, or engineers.',
        keywords: ['laboratory', 'institute', 'science', 'engineers', 'foundry']
    },
    thalassocracy: {
        name: 'Thalassocracy',
        icon: '⚓',
        description: 'A maritime empire with dominion over the seas.',
        keywords: ['fleet', 'navy', 'pirate', 'armada', 'admiralty']
    }
};

const POLITICAL_CONFLICT_THRESHOLD = 45; 

// ============================================
// HELPER: BUILDING ANALYSIS
// ============================================

function getFactionBuildingStats(factionId) {
    const stats = {
        military: 0, // Forts, Castles
        economic: 0, // Markets, Mines, Ports
        religious: 0, // Temples, Shrines
        arcane: 0,   // Towers, Libraries
        naval: 0,    // Ports, Docks
        total: 0
    };

    if (!MAP_DATA) return stats;

    Object.values(MAP_DATA).forEach(region => {
        if (region.pointsOfInterest) {
            region.pointsOfInterest.forEach(poi => {
                if (poi.factionId === factionId) {
                    stats.total++;
                    const type = (poi.type || '').toLowerCase();

                    if (type.includes('fort') || type.includes('castle') || type.includes('barracks') || type.includes('camp')) {
                        stats.military++;
                    }
                    if (type.includes('market') || type.includes('bank') || type.includes('mine') || type.includes('trade')) {
                        stats.economic++;
                    }
                    if (type.includes('temple') || type.includes('shrine') || type.includes('church') || type.includes('monastery')) {
                        stats.religious++;
                    }
                    if (type.includes('mage') || type.includes('library') || type.includes('lab') || type.includes('academy')) {
                        stats.arcane++;
                    }
                    if (type.includes('port') || type.includes('dock') || type.includes('shipyard') || type.includes('island')) {
                        stats.naval++;
                        stats.economic++; // Ports count as eco too
                    }
                }
            });
        }
    });

    return stats;
}

// ============================================
// DATA PROCESSING
// ============================================

function determineGovernmentType(faction, values, buildingStats) {
    const text = (faction.name + ' ' + (faction.type || '')).toLowerCase();
    const tags = (faction.tags || []).join(' ').toLowerCase();
    const fullText = text + ' ' + tags;

    // 1. Check Building Dominance (Actions speak louder than words)
    const bRatio = (count) => buildingStats.total > 2 ? (count / buildingStats.total) : 0;

    // If > 40% of infrastructure is Magical -> Magocracy
    if (bRatio(buildingStats.arcane) > 0.4) return 'magocracy';
    
    // If > 50% of infrastructure is Religious -> Theocracy
    if (bRatio(buildingStats.religious) > 0.5) return 'theocracy';

    // If > 50% of infrastructure is Military -> Stratocracy
    if (bRatio(buildingStats.military) > 0.5) return 'stratocracy';

    // If > 50% is Naval/Ports -> Thalassocracy
    if (bRatio(buildingStats.naval) > 0.5) return 'thalassocracy';

    // If > 50% is Economic -> Plutocracy
    if (bRatio(buildingStats.economic) > 0.5) return 'plutocracy';

    // 2. Check Strong Keywords (Explicit Naming)
    if (fullText.includes('technocracy') || fullText.includes('science')) return 'technocracy';
    if (fullText.includes('syndicate') || fullText.includes('corporation')) return 'plutocracy';
    if (fullText.includes('navy') || fullText.includes('fleet')) return 'thalassocracy';
    if (fullText.includes('mage') || fullText.includes('wizard')) return 'magocracy';

    // 3. Fallback to Societal Values (Ideological Alignment)
    const cent = values.centralization || 50;
    const rel = values.religion_state || 50; // 0 = Theocratic, 100 = Secular
    const inno = values.tradition_innovation || 50; // 100 = High Tech

    if (rel < 30) return 'theocracy';
    if (inno > 80) return 'technocracy';
    
    if (cent < 35) return 'autocracy';
    if (cent < 55) return 'oligarchy';
    if (cent > 65) return 'democracy';
    
    return 'anarchy';
}

function analyzePoliticalLandscape() {
    const allFactions = getAllFactions();
    
    if (!allFactions || Object.keys(allFactions).length === 0) return null;

    const factions = Object.entries(allFactions)
        .filter(([id, f]) => id !== 'unaligned' && id !== 'neutral')
        .map(([id, f]) => {
            const values = getFactionValues(id);
            const buildings = getFactionBuildingStats(id);
            const govType = determineGovernmentType(f, values, buildings);
            
            return {
                id,
                faction: f,
                values: values,
                buildings: buildings,
                govType: govType
            };
        });

    // Count types
    const govTypeCounts = {};
    const govTypeFactions = {};

    Object.keys(GOVERNMENT_TYPES).forEach(key => {
        govTypeCounts[key] = 0;
        govTypeFactions[key] = [];
    });

    factions.forEach(f => {
        if (govTypeCounts[f.govType] !== undefined) {
            govTypeCounts[f.govType]++;
            govTypeFactions[f.govType].push(f);
        }
    });

    // Calculate Conflicts (Top 8)
    const conflicts = [];
    const compareList = factions.slice(0, 40); // Perf optimization
    
    for (let i = 0; i < compareList.length; i++) {
        for (let j = i + 1; j < compareList.length; j++) {
            const f1 = compareList[i];
            const f2 = compareList[j];
            
            let totalDiff = 0;
            let biggestDiff = { axis: null, diff: 0 };
            
            if (VALUE_AXES) {
                Object.keys(VALUE_AXES).forEach(axisId => {
                    const v1 = f1.values[axisId] || 50;
                    const v2 = f2.values[axisId] || 50;
                    const diff = Math.abs(v1 - v2);
                    totalDiff += diff;
                    if (diff > biggestDiff.diff) {
                        biggestDiff = { axis: VALUE_AXES[axisId], diff };
                    }
                });
                
                const avgDiff = totalDiff / Object.keys(VALUE_AXES).length;
                
                if (avgDiff >= POLITICAL_CONFLICT_THRESHOLD && biggestDiff.axis) {
                    conflicts.push({
                        f1,
                        f2,
                        avgDiff,
                        reason: `${biggestDiff.axis.name} Disagreement`,
                        clashIcon: `${biggestDiff.axis.leftIcon}⚡${biggestDiff.axis.rightIcon}`
                    });
                }
            }
        }
    }
    
    return {
        factions,
        govTypeCounts,
        govTypeFactions,
        conflicts: conflicts.sort((a, b) => b.avgDiff - a.avgDiff).slice(0, 8)
    };
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderStatsBar(data) {
    // Only show types that actually have factions to save space
    const activeTypes = Object.entries(data.govTypeCounts)
        .filter(([_, count]) => count > 0)
        .sort((a, b) => b[1] - a[1]); // Sort by popularity

    return `
        <div class="stats-bar">
            <div class="stat-card">
                <span class="stat-icon">🏴</span>
                <div class="stat-info">
                    <span class="stat-value">${data.factions.length}</span>
                    <span class="stat-label">Total Factions</span>
                </div>
            </div>
            ${activeTypes.slice(0, 5).map(([key, count]) => `
                <div class="stat-card">
                    <span class="stat-icon">${GOVERNMENT_TYPES[key].icon}</span>
                    <div class="stat-info">
                        <span class="stat-value">${count}</span>
                        <span class="stat-label">${GOVERNMENT_TYPES[key].name}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}


function renderMatrix(factions) {
    const cells = Array.from({ length: 16 }, () => []);

    factions.forEach(f => {
        const x = Math.floor(((f.values.centralization || 50) / 100) * 4);
        const y = Math.floor(((f.values.collectivism || 50) / 100) * 4);
        const safeX = Math.max(0, Math.min(3, x));
        const safeY = Math.max(0, Math.min(3, y));
        const index = safeY * 4 + safeX;
        if (cells[index]) cells[index].push(f);
    });

    const labels = ['Auth-Left', '', '', 'Auth-Right', '', '', '', '', '', '', '', '', 'Lib-Left', '', '', 'Lib-Right'];

    return cells.map((cellFactions, index) => `
        <div class="matrix-cell">
            ${[0,3,12,15].includes(index) ? `<div class="matrix-cell-label">${labels[index]}</div>` : ''}
            <div class="faction-dots">
                ${cellFactions.slice(0, 12).map(f => `
                    <div class="faction-dot" 
                         data-faction="${f.id}"
                         style="background: ${f.faction.color || '#666'};"
                         title="${f.faction.name} (${GOVERNMENT_TYPES[f.govType].name})">
                    </div>
                `).join('')}
                ${cellFactions.length > 12 ? `<span class="more-dots" style="font-size:0.6rem; color:#666;">+${cellFactions.length - 12}</span>` : ''}
            </div>
        </div>
    `).join('');
}

function renderPoliticsGrid(data) {
    const matrixCells = renderMatrix(data.factions);
    const sidebar = renderSidebar(data.govTypeFactions, data.conflicts);
    
    const centLeft = VALUE_AXES?.centralization?.leftLabel || 'Auth';
    const centRight = VALUE_AXES?.centralization?.rightLabel || 'Lib';
    const colLeft = VALUE_AXES?.collectivism?.leftLabel || 'Collectivist';
    const colRight = VALUE_AXES?.collectivism?.rightLabel || 'Individualist';

    return `
        <div class="politics-grid">
            <div class="gov-matrix">
                <div class="matrix-header">
                    <h3>Political Compass</h3>
                    <p>Factions plotted by Governance Style (X) vs. Social Priority (Y)</p>
                </div>
                <div class="matrix-grid">
                    ${matrixCells}
                </div>
                <div class="matrix-axes">
                    <div class="axis-label">
                        <span>← ${centLeft}</span>
                        <span>${centRight} →</span>
                    </div>
                    <div class="axis-label">
                        <span>↑ ${colLeft}</span>
                        <span>${colRight} ↓</span>
                    </div>
                </div>
            </div>
            <div class="politics-sidebar">
                ${sidebar}
            </div>
        </div>
    `;
}

function renderPoliticsPage() {
    const data = analyzePoliticalLandscape();
    const container = document.getElementById('politics-container');
    if (!container) return;

    if (!data || data.factions.length === 0) {
        container.innerHTML = '<div class="loading-state">No political data available.</div>';
        return;
    }

    container.innerHTML = `
        ${renderStatsBar(data)}
        ${renderPoliticsGrid(data)}
    `;

    // Attach listeners
    container.addEventListener('click', e => {
        const target = e.target.closest('.faction-dot') || e.target.closest('.conflict-faction');
        if (target && target.dataset.faction && window.showFactionModal) {
            window.showFactionModal(target.dataset.faction);
        }
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        try { renderPoliticsPage(); } 
        catch (e) { console.error("Politics Error:", e); }
    }, 100);
});
// politics.js

// ... (Previous Code: Imports & Config) ...

// ============================================
// MODAL RENDERER
// ============================================

function renderGovTypeModal(typeKey, factions) {
    const typeData = GOVERNMENT_TYPES[typeKey];
    
    // Sort factions by power (Military + Economic)
    const sortedFactions = factions.sort((a, b) => {
        const powerA = (a.buildings.military || 0) + (a.buildings.economic || 0);
        const powerB = (b.buildings.military || 0) + (b.buildings.economic || 0);
        return powerB - powerA;
    });

    const factionListHTML = sortedFactions.map(f => {
        // Get top building type
        const bStats = f.buildings;
        const topType = Object.entries(bStats)
            .filter(([k]) => k !== 'total')
            .sort((a, b) => b[1] - a[1])[0];
            
        const topTypeLabel = topType && topType[1] > 0 
            ? `${topType[0].charAt(0).toUpperCase() + topType[0].slice(1)} (${topType[1]})` 
            : 'None';

        return `
            <div class="faction-card-row" onclick="window.showFactionModal('${f.id}'); document.querySelector('.gov-modal-overlay').remove();">
                <div class="f-icon" style="background: ${f.faction.color};">${f.faction.icon}</div>
                <div class="f-info">
                    <div class="f-name">${f.faction.name}</div>
                    <div class="f-leader">${f.faction.leaderTitle || 'Leader'}: ${f.faction.leaderName || 'Unknown'}</div>
                </div>
                <div class="f-stats">
                    <span class="stat-badge">🏰 ${bStats.total} POIs</span>
                    <span class="stat-badge">🏗️ Focus: ${topTypeLabel}</span>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="gov-modal-overlay">
            <div class="gov-modal">
                <div class="gov-modal-header">
                    <span class="header-icon">${typeData.icon}</span>
                    <div class="header-text">
                        <h2>${typeData.name}</h2>
                        <p>${typeData.description}</p>
                    </div>
                    <button class="close-btn" onclick="this.closest('.gov-modal-overlay').remove()">✕</button>
                </div>
                <div class="gov-modal-body">
                    <div class="faction-list-container">
                        ${factionListHTML || '<p class="no-data">No active factions of this type.</p>'}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// UPDATE RENDER SIDEBAR
// ============================================

function renderSidebar(govTypeFactions, conflicts) {
    // Filter out empty government types
    const activeTypes = Object.entries(govTypeFactions)
        .filter(([_, list]) => list.length > 0)
        .sort((a, b) => b[1].length - a[1].length);

    return `
        <div class="gov-type-panel">
            <h4>Political Systems</h4>
            <div class="gov-type-list">
                ${activeTypes.map(([key, factions]) => `
                    <div class="gov-type-item" title="${GOVERNMENT_TYPES[key].description}">
                        <span class="gov-type-icon">${GOVERNMENT_TYPES[key].icon}</span>
                        <div class="gov-type-info">
                            <span class="gov-type-name">${GOVERNMENT_TYPES[key].name}</span>
                            <span class="gov-type-count">${factions.length} Factions</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="conflict-panel">
            <h4>Ideological Hotspots</h4>
            <div class="conflict-list">
                ${conflicts.map(c => `
                    <div class="conflict-item">
                        <div class="conflict-factions">
                            <div class="conflict-faction" data-faction="${c.f1.id}" style="background: ${c.f1.faction.color || '#666'};" title="${c.f1.faction.name}">${c.f1.faction.icon || '?'}</div>
                            <span class="conflict-vs">vs</span>
                            <div class="conflict-faction" data-faction="${c.f2.id}" style="background: ${c.f2.faction.color || '#666'};" title="${c.f2.faction.name}">${c.f2.faction.icon || '?'}</div>
                        </div>
                        <div class="conflict-info">
                            <span class="conflict-name">${c.clashIcon}</span>
                            <span class="conflict-reason">${c.reason}</span>
                        </div>
                        <span class="conflict-strength">${Math.round(c.avgDiff)}%</span>
                    </div>
                `).join('')}
                ${conflicts.length === 0 ? '<p style="color:#6b7280; font-size:0.8rem;">No major conflicts detected.</p>' : ''}
            </div>
        </div>
    `;
}

// ============================================
// UPDATE INIT LISTENERS
// ============================================

function initListeners() {
    const container = document.getElementById('politics-container');
    if (!container) return;

    container.addEventListener('click', e => {
        // 1. Handle Gov Type Click
        const govItem = e.target.closest('.gov-type-item');
        if (govItem) {
            const typeKey = govItem.dataset.type;
            const data = analyzePoliticalLandscape(); // Get fresh data
            if (data && data.govTypeFactions[typeKey]) {
                const modalHTML = renderGovTypeModal(typeKey, data.govTypeFactions[typeKey]);
                document.body.insertAdjacentHTML('beforeend', modalHTML);
            }
            return;
        }

        // 2. Handle Faction Dot / Conflict Click (Existing)
        const dot = e.target.closest('.faction-dot');
        const conflictFaction = e.target.closest('.conflict-faction');
        const target = dot || conflictFaction;
        
        if (target && target.dataset.faction && window.showFactionModal) {
            window.showFactionModal(target.dataset.faction);
        }
    });
}

// ... (Rest of the file remains the same)