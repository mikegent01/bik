// mushroom-kingdom-system.js

import { getRealTimeMapStats, renderAnalyticsModal, getCuratedTerritoryList, getDetailedFactionStats } from './map-analysis.js';
import { CURRENT_GAME_DATE } from '../calendar-data.js';

// ============================================
// 1. FACTION COLORS
// ============================================
export const FACTION_COLORS = {
    regency: '#4169E1',
    loyalists: '#FFDAB9',
    fawful: '#32CD32',
    warlords: '#006400',
    criminals: '#A0522D',
    iron_legion: '#ADB5BD',
    onyx_hand: '#8B0000',
    wario: '#FFAC1C',
    yoshis: '#7FFF00',
    dk_crew: '#FFE135',
    beanbean: '#90EE90',
    regal_empire: '#FFD700',
    silver_flame: '#C0C0C0',
    mages_guild: '#9966CC',
    unaligned: '#6c757d'
};

// ============================================
// 2. CONFIGURATION
// ============================================
export const CIVIL_WAR_CONFIG = {
    name: "Mushroom Kingdom Civil War",
    startDate: { year: 1040, monthIndex: 6, day: 1 },
    status: "Active Conflict",
    description: "The kingdom is fractured. The Regency holds the plains, Loyalists wage crusade, while new powers like the Iron Legion and Onyx Hand enter the fray."
};

// ============================================
// 3. FACTION DEFINITIONS
// ============================================
export const CIVIL_WAR_FACTIONS = {
    regency: { 
        id: 'regency', 
        name: 'Mushroom Regency', 
        shortName: 'Regency', 
        leaderTitle: 'Lord Regent', 
        leaderName: 'Toadsworth', 
        color: FACTION_COLORS.regency, 
        icon: '🍄', 
        ideology: 'Constitutional Monarchy', 
        goal: 'Maintain order and legitimacy until the Princess returns.', 
        strengths: ['Legitimacy', 'Wealth', 'Infrastructure'], 
        weaknesses: ['Bureaucracy', 'Slow Response'],
        allies: ['beanbean'],
        enemies: ['fawful', 'warlords'],
        description: "The official government of the Mushroom Kingdom, desperately trying to hold things together in Princess Peach's absence."
    },
    loyalists: { 
        id: 'loyalists', 
        name: 'Peach Loyalists', 
        shortName: 'Loyalists', 
        leaderTitle: 'Commander', 
        leaderName: 'Toadette', 
        color: FACTION_COLORS.loyalists, 
        icon: '👑', 
        ideology: 'Royalist Zealotry', 
        goal: 'Purge all usurpers and restore the true monarchy.', 
        strengths: ['Morale', 'Guerilla Tactics', 'Popular Support'], 
        weaknesses: ['Limited Resources', 'Extremism'],
        allies: ['regency'],
        enemies: ['fawful', 'criminals'],
        description: "Fanatical supporters of Princess Peach who believe the Regency has become corrupt and must be cleansed."
    },
    fawful: { 
        id: 'fawful', 
        name: "Fawful's Dominion", 
        shortName: 'Fawful', 
        leaderTitle: 'Supreme Overlord', 
        leaderName: 'Fawful', 
        color: FACTION_COLORS.fawful, 
        icon: '😈', 
        ideology: 'Technarcratic Conquest', 
        goal: 'Total conquest and technological supremacy over all kingdoms.', 
        strengths: ['Advanced Tech', 'Castle Fortifications', 'Robot Armies'], 
        weaknesses: ['Insanity', 'Overconfidence', 'No Allies'],
        allies: [],
        enemies: ['regency', 'loyalists', 'warlords'],
        description: "The mad genius Fawful has seized the royal castle and now builds his mechanical army to conquer everything."
    },
    warlords: { 
        id: 'warlords', 
        name: 'Koopa Remnants', 
        shortName: 'Remnants', 
        leaderTitle: 'Regent Commander', 
        leaderName: 'Kamek', 
        color: FACTION_COLORS.warlords, 
        icon: '🐢', 
        ideology: 'Koopa Restoration', 
        goal: 'Find King Bowser and restore the Koopa Empire.', 
        strengths: ['Magic Users', 'Veteran Soldiers', 'Fortresses'], 
        weaknesses: ['Scattered Forces', 'Internal Disputes'],
        allies: [],
        enemies: ['regency', 'fawful'],
        description: "The remnants of Bowser's army, now scattered and searching for their missing king while defending their territories."
    },
    criminals: { 
        id: 'criminals', 
        name: 'The Underworld', 
        shortName: 'Criminals', 
        leaderTitle: 'Don', 
        leaderName: 'Murphy the Bandit King', 
        color: FACTION_COLORS.criminals, 
        icon: '💀', 
        ideology: 'Profit Above All', 
        goal: 'Exploit the chaos to build a criminal empire.', 
        strengths: ['Smuggling Networks', 'Bribery', 'Information'], 
        weaknesses: ['No Trust', 'No Legitimacy', 'Internal Betrayal'],
        allies: [],
        enemies: ['loyalists', 'iron_legion'],
        description: "A loose coalition of bandits, thieves, and criminal organizations profiting from the kingdom's chaos."
    },
    iron_legion: { 
        id: 'iron_legion', 
        name: 'Iron Legion', 
        shortName: 'Legion', 
        leaderTitle: 'General', 
        leaderName: 'Unknown Commander', 
        color: FACTION_COLORS.iron_legion, 
        icon: '⚔️', 
        ideology: 'Martial Order', 
        goal: 'Impose order through military discipline and force.', 
        strengths: ['Heavy Infantry', 'Discipline', 'Siege Warfare'], 
        weaknesses: ['Slow Mobility', 'Rigid Tactics'],
        allies: [],
        enemies: ['criminals', 'fawful'],
        description: "A military order that emerged from the midlands, they are neutral in the civil war."
    },
    onyx_hand: { 
        id: 'onyx_hand', 
        name: 'Onyx Hand', 
        shortName: 'Onyx', 
        leaderTitle: 'Shadow Master', 
        leaderName: 'Unknown', 
        color: FACTION_COLORS.onyx_hand, 
        icon: '🌑', 
        ideology: 'Dark Arcanism', 
        goal: 'Acquire ancient artifacts and forbidden knowledge.', 
        strengths: ['Stealth', 'Dark Magic', 'Assassination'], 
        weaknesses: ['Public Distrust', 'Small Numbers'],
        allies: [],
        enemies: ['silver_flame', 'mages_guild'],
        description: "A secretive cabal of dark mages and assassins working toward mysterious, sinister goals."
    },
    wario: { 
        id: 'wario', 
        name: 'Wario Land Inc.', 
        shortName: 'Wario', 
        leaderTitle: 'CEO & President', 
        leaderName: 'Wario', 
        color: FACTION_COLORS.wario, 
        icon: '💰', 
        ideology: 'Capitalist Greed', 
        goal: 'Get filthy rich by any means necessary.', 
        strengths: ['Massive Wealth', 'Mercenaries', 'Business Networks'], 
        weaknesses: ['Greed', 'Unreliable', 'Everyone Hates Wario'],
        allies: [],
        enemies: [],
        description: "Wario's corporate empire, exploiting the war to buy up land, hire mercenaries, and make obscene profits."
    },
    yoshis: { 
        id: 'yoshis', 
        name: 'Yoshi Clans', 
        shortName: 'Yoshis', 
        leaderTitle: 'Elder Chief', 
        leaderName: 'Yoshi Elder', 
        color: FACTION_COLORS.yoshis, 
        icon: '🥚', 
        ideology: 'Isolationist Survival', 
        goal: 'Protect the islands and stay out of mainland conflicts.', 
        strengths: ['Home Terrain', 'Unity', 'Natural Defenses'], 
        weaknesses: ['Limited Tech', 'Small Population'],
        allies: ['dk_crew'],
        enemies: [],
        description: "The peaceful Yoshi tribes, forced to defend their island paradise from those who would exploit it."
    },
    dk_crew: { 
        id: 'dk_crew', 
        name: 'Kong Family', 
        shortName: 'Kongs', 
        leaderTitle: 'King of the Jungle', 
        leaderName: 'Donkey Kong', 
        color: FACTION_COLORS.dk_crew, 
        icon: '🍌', 
        ideology: 'Jungle Freedom', 
        goal: 'Protect the banana hoard and jungle territories.', 
        strengths: ['Raw Strength', 'Jungle Warfare', 'Loyal Family'], 
        weaknesses: ['No Politics', 'Easily Tricked'],
        allies: ['yoshis'],
        enemies: [],
        description: "The Kong family and their jungle allies, defending their territory with primal strength."
    },
    beanbean: { 
        id: 'beanbean', 
        name: 'Beanbean Kingdom', 
        shortName: 'Beanbean', 
        leaderTitle: 'Queen', 
        leaderName: 'Queen Bean', 
        color: FACTION_COLORS.beanbean, 
        icon: '🫘', 
        ideology: 'Defensive Sovereignty', 
        goal: 'Protect borders and maintain independence.', 
        strengths: ['Diplomacy', 'Unique Magic', 'Fortified Borders'], 
        weaknesses: ['Small Military', 'Economic Dependency'],
        allies: ['regency'],
        enemies: ['fawful'],
        description: "The neighboring Beanbean Kingdom, trying to stay neutral while protecting their borders from the chaos."
    },
    regal_empire: { 
        id: 'regal_empire', 
        name: 'Regal Empire', 
        shortName: 'Empire', 
        leaderTitle: 'Emperor', 
        leaderName: 'Unknown', 
        color: FACTION_COLORS.regal_empire, 
        icon: '⚜️', 
        ideology: 'Imperial Expansion', 
        goal: 'Expand the empire and civilize the chaos.', 
        strengths: ['Discipline', 'Resources', 'Professional Army'], 
        weaknesses: ['Overextension', 'Arrogance'],
        allies: [],
        enemies: [],
        description: "A foreign imperial power seeing opportunity in the kingdom's weakness."
    },
    silver_flame: { 
        id: 'silver_flame', 
        name: 'Order of the Silver Flame', 
        shortName: 'Silver Flame', 
        leaderTitle: 'High Priest', 
        leaderName: 'Father Luminos', 
        color: FACTION_COLORS.silver_flame, 
        icon: '🔥', 
        ideology: 'Holy Purification', 
        goal: 'Purify the land of darkness and corruption.', 
        strengths: ['Zealous Warriors', 'Healing Magic', 'Popular Faith'], 
        weaknesses: ['Intolerance', 'Extremism'],
        allies: [],
        enemies: ['onyx_hand', 'criminals'],
        description: "A militant religious order dedicated to burning away the darkness they see spreading across the land."
    },
    mages_guild: { 
        id: 'mages_guild', 
        name: "Mages' Guild", 
        shortName: 'Mages', 
        leaderTitle: 'Archmage', 
        leaderName: 'Merlon the Elder', 
        color: '#9966CC', 
        icon: '🔮', 
        ideology: 'Magical Neutrality', 
        goal: 'Preserve magical knowledge and stay neutral.', 
        strengths: ['Powerful Magic', 'Knowledge', 'Neutral Status'], 
        weaknesses: ['Small Numbers', 'Political Naivety'],
        allies: [],
        enemies: ['onyx_hand'],
        description: "The ancient guild of mages, trying to remain neutral while protecting magical artifacts from all sides."
    }
};

// ============================================
// 4. STRATEGIC OPERATIONS
// ============================================
export const STRATEGIC_OPERATIONS = {
    regency: [
        { id: 'reg_1', name: 'Capital Fortification', type: 'defensive', status: 'active', progress: 65, description: 'Reinforcing Toad Town walls.' },
        { id: 'reg_2', name: 'Tax Collection Drive', type: 'economic', status: 'active', progress: 40, description: 'Collecting emergency war taxes.' }
    ],
    loyalists: [
        { id: 'loy_1', name: 'Castle Liberation', type: 'military', status: 'planning', progress: 25, description: 'Planning assault on Fawful\'s castle.' },
        { id: 'loy_2', name: 'Guerilla Campaign', type: 'military', status: 'active', progress: 70, description: 'Sabotaging enemy supply lines.' }
    ],
    fawful: [
        { id: 'faw_1', name: 'Mechawful Production', type: 'research', status: 'active', progress: 85, description: 'Mass-producing robot soldiers.' },
        { id: 'faw_2', name: 'Dark Star Research', type: 'research', status: 'active', progress: 30, description: 'Studying the Dark Star fragments.' }
    ],
    criminals: [
        { id: 'crim_1', name: 'Smuggling Network', type: 'economic', status: 'active', progress: 90, description: 'Moving contraband across borders.' }
    ],
    iron_legion: [
        { id: 'il_1', name: 'March on Capital', type: 'military', status: 'active', progress: 30, description: 'Advancing toward Toad Town.' }
    ],
    warlords: [
        { id: 'war_1', name: 'Search for Bowser', type: 'intelligence', status: 'active', progress: 15, description: 'Scouring the land for the missing king.' }
    ]
};

// ============================================
// 5. CIVIL WAR EVENTS
// ============================================
export const CIVIL_WAR_EVENTS = [
    { type: 'major', date: { year: 1040, monthIndex: 6, day: 8 }, title: "Fawful Seizes Castle", description: "Fawful has occupied the royal castle with his robot army.", impact: { fawful: +15 } },
    { type: 'battle', date: { year: 1040, monthIndex: 6, day: 17 }, title: "Fall of Bramblehaven", description: "Loyalists captured the strategic outpost.", impact: { loyalists: +10 } },
    { type: 'diplomatic', date: { year: 1040, monthIndex: 6, day: 22 }, title: "Beanbean Alliance", description: "Queen Bean pledges support to the Regency.", impact: { regency: +5, beanbean: +5 } }
];

// ============================================
// 6. GLOBAL MODAL FUNCTION
// ============================================
window.showFactionModal = function(factionKey) {
    const existing = document.querySelector('.faction-modal-overlay:not(.analytics-overlay)');
    if (existing) existing.remove();

    const html = renderFactionDetailModal(factionKey);
    if (html) {
        document.body.insertAdjacentHTML('beforeend', html);
        requestAnimationFrame(() => {
            const overlay = document.querySelector(`#faction-modal-${factionKey}`);
            if (overlay) overlay.classList.add('visible');
        });
    }
};

// ============================================
// 7. ENHANCED FACTION DETAIL MODAL
// ============================================
export function renderFactionDetailModal(factionKey) {
    const faction = CIVIL_WAR_FACTIONS[factionKey];
    if (!faction) {
        console.warn('No faction found for key:', factionKey);
        return '';
    }
    
    // Get detailed stats from the analysis module
    const detailedStats = getDetailedFactionStats(factionKey);
    const allFactionStats = getRealTimeMapStats();
    const operations = STRATEGIC_OPERATIONS[factionKey] || [];
    
    // Calculate kingdom control percentage
    const totalInfluence = Object.values(allFactionStats.global)
        .reduce((sum, f) => sum + f.military + f.economic, 0) || 1;
    const factionInfluence = detailedStats.military + detailedStats.economic;
    const controlPercent = Math.round((factionInfluence / totalInfluence) * 100);
    
    // Get top 5 factions for the power distribution chart
    const topFactions = Object.entries(allFactionStats.global)
        .filter(([id, _]) => id !== 'unaligned')
        .map(([id, stats]) => ({
            id,
            faction: CIVIL_WAR_FACTIONS[id],
            total: stats.military + stats.economic + (stats.controlledRegions * 10)
        }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 6);
    
    const maxPower = Math.max(...topFactions.map(f => f.total), 1);

    return `
        <div class="faction-modal-overlay" id="faction-modal-${factionKey}">
            <div class="faction-modal faction-modal-large">
                <button class="modal-close" onclick="this.closest('.faction-modal-overlay').remove()">✕</button>
                
                <!-- HEADER -->
                <div class="modal-header" style="border-bottom-color: ${faction.color}">
                    <div class="modal-icon" style="background: ${faction.color};">${faction.icon}</div>
                    <div class="modal-title-block">
                        <h2>${faction.name}</h2>
                        <p class="modal-subtitle">${faction.leaderTitle}: <strong>${faction.leaderName}</strong></p>
                    </div>
                    <div class="modal-header-badge" style="background: ${faction.color};">
                        <span class="badge-value">${controlPercent}%</span>
                        <span class="badge-label">Kingdom Control</span>
                    </div>
                </div>

                <div class="modal-body">
                    <!-- DESCRIPTION -->
                    <div class="faction-description">
                        <p>${faction.description}</p>
                    </div>

                    <!-- MAIN STATS GRID -->
                    <div class="stats-hero-grid">
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">⚔️</div>
                            <div class="stat-hero-value">${detailedStats.military.toLocaleString()}</div>
                            <div class="stat-hero-label">Military Strength</div>
                            <div class="stat-hero-bar">
                                <div class="stat-hero-fill" style="width: ${Math.min(100, (detailedStats.military / 500) * 100)}%; background: #ef4444;"></div>
                            </div>
                        </div>
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">💰</div>
                            <div class="stat-hero-value">${detailedStats.economic.toLocaleString()}</div>
                            <div class="stat-hero-label">Economic Power</div>
                            <div class="stat-hero-bar">
                                <div class="stat-hero-fill" style="width: ${Math.min(100, (detailedStats.economic / 500) * 100)}%; background: #fbbf24;"></div>
                            </div>
                        </div>
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">🏛️</div>
                            <div class="stat-hero-value">${detailedStats.political.toLocaleString()}</div>
                            <div class="stat-hero-label">Political Influence</div>
                            <div class="stat-hero-bar">
                                <div class="stat-hero-fill" style="width: ${Math.min(100, (detailedStats.political / 500) * 100)}%; background: #8b5cf6;"></div>
                            </div>
                        </div>
                        <div class="stat-hero-card">
                            <div class="stat-hero-icon">👥</div>
                            <div class="stat-hero-value">${detailedStats.population.toLocaleString()}</div>
                            <div class="stat-hero-label">Total Population</div>
                            <div class="stat-hero-bar">
                                <div class="stat-hero-fill" style="width: ${Math.min(100, (detailedStats.population / 50000) * 100)}%; background: #22c55e;"></div>
                            </div>
                        </div>
                    </div>

                    <!-- TWO COLUMN LAYOUT -->
                    <div class="modal-two-column">
                        <!-- LEFT COLUMN -->
                        <div class="modal-column">
                            
                            <!-- KINGDOM POWER DISTRIBUTION -->
                            <div class="modal-section">
                                <h4>📊 Kingdom Power Distribution</h4>
                                <div class="power-chart">
                                    ${topFactions.map(f => {
                                        if (!f.faction) return '';
                                        const percent = (f.total / maxPower) * 100;
                                        const isCurrentFaction = f.id === factionKey;
                                        return `
                                            <div class="power-bar-row ${isCurrentFaction ? 'current-faction' : ''}">
                                                <div class="power-bar-label">
                                                    <span class="power-bar-icon">${f.faction.icon}</span>
                                                    <span class="power-bar-name">${f.faction.shortName}</span>
                                                </div>
                                                <div class="power-bar-track">
                                                    <div class="power-bar-fill" style="width: ${percent}%; background: ${f.faction.color};"></div>
                                                </div>
                                                <span class="power-bar-value">${f.total}</span>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>

                            <!-- CONTROLLED REGIONS -->
                            <div class="modal-section">
                                <h4>🗺️ Controlled Regions (${detailedStats.controlledRegions})</h4>
                                <div class="region-chips">
                                    ${detailedStats.regions.length > 0 ? 
                                        detailedStats.regions.map(r => `
                                            <div class="region-chip">
                                                <span class="region-chip-icon">${r.isContested ? '🔥' : '🏰'}</span>
                                                <span class="region-chip-name">${r.name}</span>
                                                <span class="region-chip-value">⚔️${r.military} 💰${r.economic}</span>
                                            </div>
                                        `).join('') :
                                        '<p class="no-data">No regions currently controlled</p>'
                                    }
                                </div>
                            </div>

                            <!-- STRATEGIC GOAL -->
                            <div class="modal-section goal-section" style="border-left: 4px solid ${faction.color};">
                                <h4>🎯 Strategic Goal</h4>
                                <p class="goal-text">"${faction.goal}"</p>
                                <div class="ideology-badge">
                                    <span class="ideology-label">Ideology:</span>
                                    <span class="ideology-value">${faction.ideology}</span>
                                </div>
                            </div>
                        </div>

                        <!-- RIGHT COLUMN -->
                        <div class="modal-column">
                            
                            <!-- CONTROLLED POIs -->
                            <div class="modal-section">
                                <h4>📍 Key Holdings (${detailedStats.pois.length} POIs)</h4>
                                <div class="poi-list-container">
                                    ${detailedStats.pois.length > 0 ? `
                                        <div class="poi-list">
                                            ${detailedStats.pois.slice(0, 10).map(poi => `
                                                <div class="poi-list-item">
                                                    <div class="poi-list-icon">${getPoiIcon(poi.type)}</div>
                                                    <div class="poi-list-info">
                                                        <span class="poi-list-name">${poi.name}</span>
                                                        <span class="poi-list-type">${poi.type || 'Location'}</span>
                                                    </div>
                                                    <div class="poi-list-stats">
                                                        <span class="poi-stat" title="Military">⚔️${poi.military_strength || 0}</span>
                                                        <span class="poi-stat" title="Economy">💰${poi.economic_value || 0}</span>
                                                        <span class="poi-stat" title="Population">👥${poi.population || 0}</span>
                                                    </div>
                                                </div>
                                            `).join('')}
                                            ${detailedStats.pois.length > 10 ? `
                                                <div class="poi-list-more">+ ${detailedStats.pois.length - 10} more locations...</div>
                                            ` : ''}
                                        </div>
                                    ` : '<p class="no-data">No POIs currently controlled</p>'}
                                </div>
                            </div>

                            <!-- STRENGTHS & WEAKNESSES -->
                            <div class="modal-section sw-grid">
                                <div class="sw-card sw-strengths">
                                    <h5>💪 Strengths</h5>
                                    <ul>
                                        ${faction.strengths.map(s => `<li>${s}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="sw-card sw-weaknesses">
                                    <h5>⚠️ Weaknesses</h5>
                                    <ul>
                                        ${faction.weaknesses.map(w => `<li>${w}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>

                            <!-- ACTIVE OPERATIONS -->
                            ${operations.length > 0 ? `
                                <div class="modal-section">
                                    <h4>⚙️ Active Operations</h4>
                                    <div class="operations-list">
                                        ${operations.map(op => `
                                            <div class="operation-item">
                                                <div class="operation-header">
                                                    <span class="operation-icon">${getOperationIcon(op.type)}</span>
                                                    <span class="operation-name">${op.name}</span>
                                                    <span class="operation-status status-${op.status}">${op.status}</span>
                                                </div>
                                                <div class="operation-desc">${op.description}</div>
                                                <div class="operation-progress">
                                                    <div class="operation-progress-bar">
                                                        <div class="operation-progress-fill" style="width: ${op.progress}%; background: ${faction.color};"></div>
                                                    </div>
                                                    <span class="operation-progress-text">${op.progress}%</span>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}

                            <!-- RELATIONS -->
                            <div class="modal-section">
                                <h4>🤝 Diplomatic Relations</h4>
                                <div class="relations-grid">
                                    <div class="relations-column">
                                        <span class="relations-label">Allies</span>
                                        <div class="relations-list">
                                            ${(faction.allies || []).length > 0 ? 
                                                faction.allies.map(a => {
                                                    const ally = CIVIL_WAR_FACTIONS[a];
                                                    return ally ? `<span class="relation-chip ally" style="border-color: ${ally.color};">${ally.icon} ${ally.shortName}</span>` : '';
                                                }).join('') :
                                                '<span class="no-relations">None</span>'
                                            }
                                        </div>
                                    </div>
                                    <div class="relations-column">
                                        <span class="relations-label">Enemies</span>
                                        <div class="relations-list">
                                            ${(faction.enemies || []).length > 0 ? 
                                                faction.enemies.map(e => {
                                                    const enemy = CIVIL_WAR_FACTIONS[e];
                                                    return enemy ? `<span class="relation-chip enemy" style="border-color: ${enemy.color};">${enemy.icon} ${enemy.shortName}</span>` : '';
                                                }).join('') :
                                                '<span class="no-relations">None</span>'
                                            }
                                        </div>
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

// Helper function for POI icons
function getPoiIcon(type) {
    const icons = {
        'village': '🏘️',
        'city': '🏙️',
        'town': '🏠',
        'castle': '🏰',
        'fortress': '🏯',
        'fort': '⛫',
        'outpost': '🚩',
        'mine': '⛏️',
        'farm': '🌾',
        'port': '⚓',
        'market': '🏪',
        'temple': '⛩️',
        'tower': '🗼',
        'camp': '⛺',
        'ruins': '🏚️',
        'cave': '🕳️',
        'forest': '🌲',
        'mountain': '⛰️',
        'bridge': '🌉',
        'warehouse': '📦',
        'guild': '🏛️',
        'tavern': '🍺',
        'arena': '🏟️',
        'laboratory': '🔬',
        'factory': '🏭'
    };
    return icons[type] || '📍';
}

// Helper function for operation icons
function getOperationIcon(type) {
    const icons = {
        'military': '⚔️',
        'defensive': '🛡️',
        'economic': '💰',
        'research': '🔬',
        'intelligence': '🔍',
        'diplomatic': '🤝',
        'sabotage': '💣'
    };
    return icons[type] || '⚙️';
}

// ============================================
// 8. TERRITORY DETAIL MODAL (ENHANCED)
// ============================================
export function renderTerritoryDetailModal(regionData) {
    const controller = CIVIL_WAR_FACTIONS[regionData.controller] || { 
        name: 'Unaligned', 
        color: '#666', 
        icon: '❓',
        shortName: 'None'
    };

    // Get POIs for this region
    const regionPois = regionData.pois || [];

    return `
        <div class="faction-modal-overlay" id="terr-modal">
            <div class="faction-modal" style="max-width: 600px;">
                <button class="modal-close" onclick="this.closest('.faction-modal-overlay').remove()">✕</button>
                
                <div class="modal-header" style="border-bottom-color: ${controller.color}">
                    <div class="modal-icon" style="background: ${controller.color}">${regionData.isContested ? '🔥' : '🏰'}</div>
                    <div class="modal-title-block">
                        <h2>${regionData.name}</h2>
                        <p class="modal-subtitle">${regionData.isContested ? '⚠️ Contested Zone' : `Controlled by ${controller.name}`}</p>
                    </div>
                </div>
                
                <div class="modal-body">
                    <!-- Status Banner -->
                    <div class="territory-status-banner ${regionData.isContested ? 'contested' : 'secure'}">
                        ${regionData.isContested ? 
                            '⚠️ ACTIVE COMBAT ZONE - Multiple factions fighting for control' : 
                            `✅ SECURED - Under ${controller.name} occupation`
                        }
                    </div>

                    <!-- Stats Grid -->
                    <div class="stats-hero-grid" style="grid-template-columns: repeat(4, 1fr);">
                        <div class="stat-hero-card compact">
                            <div class="stat-hero-icon">⚔️</div>
                            <div class="stat-hero-value">${regionData.militarySum || 0}</div>
                            <div class="stat-hero-label">Military</div>
                        </div>
                        <div class="stat-hero-card compact">
                            <div class="stat-hero-icon">💰</div>
                            <div class="stat-hero-value">${regionData.economicSum || 0}</div>
                            <div class="stat-hero-label">Economy</div>
                        </div>
                        <div class="stat-hero-card compact">
                            <div class="stat-hero-icon">🏛️</div>
                            <div class="stat-hero-value">${regionData.politicalSum || 0}</div>
                            <div class="stat-hero-label">Political</div>
                        </div>
                        <div class="stat-hero-card compact">
                            <div class="stat-hero-icon">📍</div>
                            <div class="stat-hero-value">${regionData.poiCount || 0}</div>
                            <div class="stat-hero-label">POIs</div>
                        </div>
                    </div>

                    <!-- Controller Info -->
                    <div class="modal-section">
                        <h4>🏴 Controlling Faction</h4>
                        <div class="controller-card" style="border-color: ${controller.color};">
                            <div class="controller-icon" style="background: ${controller.color};">${controller.icon}</div>
                            <div class="controller-info">
                                <span class="controller-name">${controller.name}</span>
                                <span class="controller-ideology">${controller.ideology || 'Unknown'}</span>
                            </div>
                            <button class="view-faction-btn" onclick="window.showFactionModal('${regionData.controller}'); this.closest('.faction-modal-overlay').remove();">
                                View Faction →
                            </button>
                        </div>
                    </div>

                    <!-- Faction Presence Chart -->
                    ${regionData.factionPresence ? `
                        <div class="modal-section">
                            <h4>📊 Faction Presence</h4>
                            <div class="presence-chart">
                                ${Object.entries(regionData.factionPresence)
                                    .sort((a, b) => b[1] - a[1])
                                    .slice(0, 5)
                                    .map(([factionId, count]) => {
                                        const f = CIVIL_WAR_FACTIONS[factionId];
                                        if (!f) return '';
                                        const maxPresence = Math.max(...Object.values(regionData.factionPresence));
                                        const percent = (count / maxPresence) * 100;
                                        return `
                                            <div class="presence-row">
                                                <div class="presence-label">${f.icon} ${f.shortName}</div>
                                                <div class="presence-bar">
                                                    <div class="presence-fill" style="width: ${percent}%; background: ${f.color};"></div>
                                                </div>
                                                <span class="presence-count">${count} POIs</span>
                                            </div>
                                        `;
                                    }).join('')}
                            </div>
                        </div>
                    ` : ''}

                    <!-- POI List -->
                    ${regionPois.length > 0 ? `
                        <div class="modal-section">
                            <h4>📍 Points of Interest</h4>
                            <div class="poi-list">
                                ${regionPois.slice(0, 8).map(poi => {
                                    const poiFaction = CIVIL_WAR_FACTIONS[poi.factionId] || { color: '#666', icon: '❓' };
                                    return `
                                        <div class="poi-list-item" style="border-left: 3px solid ${poiFaction.color};">
                                            <div class="poi-list-icon">${getPoiIcon(poi.type)}</div>
                                            <div class="poi-list-info">
                                                <span class="poi-list-name">${poi.name}</span>
                                                <span class="poi-list-type">${poi.type} • ${poiFaction.icon}</span>
                                            </div>
                                            <div class="poi-list-stats">
                                                <span class="poi-stat">⚔️${poi.military_strength || 0}</span>
                                                <span class="poi-stat">💰${poi.economic_value || 0}</span>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// 9. EVENT LISTENERS
// ============================================
export function initMushroomKingdomListeners() {
    const container = document.querySelector('.civil-war-system');
    if (!container) {
        console.warn('Civil war container not found');
        return;
    }

    console.log('Initializing Mushroom Kingdom listeners...');

    // View Analytics Button
    const analyticsBtn = container.querySelector('#btn-view-analytics');
    if (analyticsBtn) {
        analyticsBtn.addEventListener('click', () => {
            const html = renderAnalyticsModal(CIVIL_WAR_FACTIONS);
            document.body.insertAdjacentHTML('beforeend', html);
            requestAnimationFrame(() => {
                const overlay = document.querySelector('.analytics-overlay');
                if (overlay) overlay.classList.add('visible');
            });
        });
    }

    // Main Click Delegation
    container.addEventListener('click', (e) => {
        // A. Handle Faction Card "View Details"
        const factionBtn = e.target.closest('.faction-detail-btn');
        if (factionBtn && factionBtn.id !== 'btn-view-analytics') {
            const key = factionBtn.dataset.faction;
            console.log('Faction button clicked:', key);
            window.showFactionModal(key);
            return;
        }

        // B. Handle Sidebar Territory Click
        const terrItem = e.target.closest('.territory-item');
        if (terrItem) {
            const regionId = terrItem.dataset.regionId;
            console.log('Territory clicked:', regionId);

            const detailedRegion = getDetailedRegionStats(regionId);

            if (detailedRegion) {
                const existing = document.getElementById('terr-modal');
                if (existing) existing.remove();

                const html = renderTerritoryDetailModal(detailedRegion);
                document.body.insertAdjacentHTML('beforeend', html);

                requestAnimationFrame(() => {
                    const overlay = document.getElementById('terr-modal');
                    if (overlay) overlay.classList.add('visible');
                });
            } else {
                console.warn('No stats found for region:', regionId);
            }
        }
    });
}

// ============================================
// 10. CALCULATIONS
// ============================================
export function calculateDynamicInfluence() {
    const influence = {};
    const stats = getRealTimeMapStats().global;
    Object.keys(CIVIL_WAR_FACTIONS).forEach(key => {
        const fStats = stats[key];
        let val = 5;
        if (fStats) val += Math.floor(fStats.military / 10) + Math.floor(fStats.economic / 10) + (fStats.controlledRegions * 3);
        influence[key] = val;
    });
    return influence;
}

export function calculateWarStatus() {
    const influence = calculateDynamicInfluence();
    let leading = null;
    let max = 0;
    Object.entries(influence).forEach(([k, v]) => { 
        if (v > max) { 
            max = v; 
            leading = k; 
        } 
    });
    const startYear = 1040;
    return { 
        leadingFaction: CIVIL_WAR_FACTIONS[leading], 
        daysSinceStart: (CURRENT_GAME_DATE.year - startYear) * 365, 
        phase: "Escalation" 
    };
}

// Import the new helper function
import { getDetailedRegionStats } from './map-analysis.js';