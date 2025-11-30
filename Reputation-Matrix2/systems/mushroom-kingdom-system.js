// mushroom-kingdom-system.js
import { getRealTimeMapStats, renderAnalyticsModal } from './map-analysis.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from '../calendar-data.js';

// ============================================
// 1. FACTION COLORS
// ============================================
export const FACTION_COLORS = {
    regency: '#4169E1',    // --faction-mushroom_regency
    loyalists: '#FFDAB9',  // --faction-peach_loyalists
    fawful: '#32CD32',     // --faction-fawfuls_furious_freaks
    warlords: '#006400',   // --faction-koopa_troop
    criminals: '#A0522D',  // --faction-toad_gang
    liberated: '#87CEEB'   // --faction-liberated_toads
};

// ============================================
// 2. CONFIGURATION
// ============================================
export const CIVIL_WAR_CONFIG = {
    name: "Mushroom Kingdom Civil War",
    startDate: { year: 1040, monthIndex: 6, day: 1 },
    status: "Active Conflict",
    description: "The kingdom is fractured. The Regency holds the plains, Loyalists wage crusade from the woods, Koopa remnants gather in the badlands, and Fawful occupies the castle."
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
        goal: 'Restore order and maintain the legitimate government.',
        strengths: ['Institutional Legitimacy', 'Treasury Access', 'Diplomacy'],
        weaknesses: ['Slow Bureaucracy', 'Military Weakness', 'Public Distrust'],
        relations: { loyalists: -30, warlords: -50, criminals: -40, fawful: -80 }
    },
    loyalists: {
        id: 'loyalists',
        name: 'Peach Loyalists',
        shortName: 'Loyalists',
        leaderTitle: 'Commander',
        leaderName: 'Captain Toadette',
        color: FACTION_COLORS.loyalists,
        icon: '👑',
        ideology: 'Monarchist Zealotry',
        goal: 'Purge the usurper Fawful and restore the throne.',
        strengths: ['Fanatical Morale', 'Guerilla Tactics', 'Public Support'],
        weaknesses: ['Limited Resources', 'Extremism', 'No Recognition'],
        relations: { regency: -30, warlords: -90, fawful: -100 }
    },
    fawful: {
        id: 'fawful',
        name: "Fawful's Dominion",
        shortName: 'Fawful',
        leaderTitle: 'Supreme Overlord',
        leaderName: 'Lord Fawful',
        color: FACTION_COLORS.fawful,
        icon: '😈',
        ideology: 'Technarchy',
        goal: 'Conquer with FURY and BEANS!',
        strengths: ['Technological Superiority', 'Castle Fortifications'],
        weaknesses: ['Insanity', 'No Local Support', 'Besieged'],
        relations: { regency: -80, loyalists: -100 }
    },
    warlords: {
        id: 'warlords',
        name: 'Koopa Remnants',
        shortName: 'Remnants',
        leaderTitle: 'Regent-in-Exile',
        leaderName: 'Kamek',
        color: FACTION_COLORS.warlords,
        icon: '🐢',
        ideology: 'Koopa Restoration',
        goal: 'Rebuild the Koopa Troop and find Bowser.',
        strengths: ['Magical Support', 'Experienced Veterans'],
        weaknesses: ['Scattered Forces', 'Hunted by All'],
        relations: { regency: -50, loyalists: -90 }
    },
    criminals: {
        id: 'criminals',
        name: 'Criminal Underworld',
        shortName: 'Underworld',
        leaderTitle: 'Boss of Bosses',
        leaderName: 'Skull-Cap Murphy',
        color: FACTION_COLORS.criminals,
        icon: '💀',
        ideology: 'Organized Crime',
        goal: 'Profit from the chaos.',
        strengths: ['Smuggling Routes', 'Information Networks'],
        weaknesses: ['No Standing Army', 'Internal Rivalries'],
        relations: { regency: -40, loyalists: -60, warlords: 20 }
    }
};

// ============================================
// 4. STRATEGIC OPERATIONS (Restored)
// ============================================
export const STRATEGIC_OPERATIONS = {
    regency: [
        { id: 'reg_fortify', name: 'Fortify Toad Town', type: 'defensive', status: 'active', progress: 65, description: 'Reinforcing walls against Loyalist incursions.' },
        { id: 'reg_diplo', name: 'Beanbean Summit', type: 'political', status: 'available', progress: 0, description: 'Seeking foreign aid from Queen Bean.' }
    ],
    loyalists: [
        { id: 'loy_siege', name: 'Siege of the Castle', type: 'military', status: 'active', progress: 40, description: 'Cutting off Fawfuls supply lines.' }
    ],
    fawful: [
        { id: 'faw_robot', name: 'Project: MECHAWFUL', type: 'research', status: 'active', progress: 85, description: 'Building the ultimate battle machine.' }
    ],
    warlords: [
        { id: 'war_search', name: 'Search for Bowser', type: 'covert', status: 'active', progress: 20, description: 'Scouring the Dark Lands for the King.' }
    ],
    criminals: [
        { id: 'crim_smuggle', name: 'Weapons Running', type: 'economic', status: 'active', progress: 90, description: 'Selling arms to both Regency and Loyalists.' }
    ]
};

// ============================================
// 5. CIVIL WAR EVENTS (Restored)
// ============================================
export const CIVIL_WAR_EVENTS = [
    {
        type: 'major',
        date: { year: 1040, monthIndex: 6, day: 8 },
        title: "Fawful Seizes Peach's Castle",
        description: "In a shocking coup, Fawful has occupied the royal castle.",
        impact: { fawful: +15, regency: -10 }
    },
    {
        type: 'battle',
        date: { year: 1040, monthIndex: 6, day: 17 },
        title: "Fall of Bramblehaven",
        description: "Loyalist forces captured the outpost of Bramblehaven.",
        impact: { loyalists: +10, fawful: -5 }
    },
    {
        type: 'diplomatic',
        date: { year: 1040, monthIndex: 6, day: 11 },
        title: "Dragon Alliance",
        description: "Fawful has forged an alliance with the Dragon Clans.",
        impact: { fawful: +10 }
    }
];

// ============================================
// 6. TERRITORY MAP (Restored & Dynamic)
// ============================================
// This object provides Metadata for the UI. Controllers are updated dynamically.
export const TERRITORY_MAP = {
    regions: [
        { id: 'mushroom_kingdom', name: 'Mushroom Plains', icon: '🌾', type: 'farmland', description: 'The fertile heartland.' },
        { id: 'mushroom_city', name: 'Mushroom City', icon: '🏙️', type: 'city', description: 'The bustling metropolis.' },
        { id: 'toad_town', name: 'Toad Town', icon: '🏰', type: 'capital', description: 'The historic capital under martial law.' },
        { id: 'beanbean_kingdom', name: 'Beanbean Kingdom', icon: '🫘', type: 'kingdom', description: 'Neighboring ally of Fawful.' },
        { id: 'barrel_volcano', name: 'Barrel Volcano', icon: '🌋', type: 'wasteland', description: 'Stronghold of the Koopa Troop.' },
        { id: 'arid_coast', name: 'Arid Coast', icon: '⚓', type: 'coastal', description: 'Smugglers paradise.' },
        { id: 'wario_woods', name: 'Wario Woods', icon: '🌲', type: 'forest', description: 'Dense woods hiding Loyalist camps.' }
    ]
};

// Update Territory Controllers based on Real-Time Stats
export function getTerritoryMapWithStats() {
    const stats = getRealTimeMapStats().regions;
    
    return TERRITORY_MAP.regions.map(staticRegion => {
        // Find matching dynamic data
        const dynData = stats.find(r => r.id === staticRegion.id) || {};
        return {
            ...staticRegion,
            controller: dynData.controller || 'unaligned',
            poiCount: dynData.poiCount || 0
        };
    });
}

// ============================================
// 7. MODAL RENDERER
// ============================================
export function renderFactionDetailModal(factionKey) {
    const faction = CIVIL_WAR_FACTIONS[factionKey];
    if (!faction) return '';
    
    // Get live stats from map-analysis
    const stats = getRealTimeMapStats().global[factionKey] || { military: 0, economic: 0, controlledRegions: 0, poiCount: 0 };
    const ops = STRATEGIC_OPERATIONS[factionKey] || [];

    return `
        <div class="faction-modal-overlay" id="faction-modal-${factionKey}">
            <div class="faction-modal">
                <button class="modal-close" onclick="document.getElementById('faction-modal-${factionKey}').remove()">✕</button>
                
                <div class="modal-header" style="border-bottom-color: ${faction.color}">
                    <div class="modal-icon" style="background: ${faction.color}">${faction.icon}</div>
                    <div class="modal-title-block">
                        <h2>${faction.name}</h2>
                        <p class="modal-subtitle">${faction.leaderTitle}: <strong>${faction.leaderName}</strong></p>
                    </div>
                </div>

                <div class="modal-body">
                    <div class="modal-section">
                        <h4>Current Strategic Status</h4>
                        <div class="status-grid">
                            <div class="status-item">
                                <span class="status-label">Territories Held</span>
                                <span class="status-value">${stats.controlledRegions}</span>
                            </div>
                            <div class="status-item">
                                <span class="status-label">Total POIs</span>
                                <span class="status-value">${stats.poiCount}</span>
                            </div>
                            <div class="status-item">
                                <span class="status-label">Military Power</span>
                                <span class="status-value">⚔️ ${stats.military}</span>
                            </div>
                            <div class="status-item">
                                <span class="status-label">Economic Value</span>
                                <span class="status-value">💰 ${stats.economic}</span>
                            </div>
                        </div>
                    </div>

                    <div class="modal-section">
                        <h4>Active Operations</h4>
                        <div class="operations-list">
                            ${ops.map(op => `
                                <div class="modal-operation active">
                                    <div class="modal-op-header">
                                        <span class="op-name">${op.name}</span>
                                        <span class="op-progress-text">${op.progress}%</span>
                                    </div>
                                    <div class="op-progress-bar">
                                        <div class="progress-fill" style="width: ${op.progress}%; background: ${faction.color}"></div>
                                    </div>
                                    <small>${op.description}</small>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-section" style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                        <div>
                            <h4>✅ Strengths</h4>
                            <ul>${faction.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                        </div>
                        <div>
                            <h4>❌ Weaknesses</h4>
                            <ul>${faction.weaknesses.map(s => `<li>${s}</li>`).join('')}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// 8. GLOBAL FUNCTION FOR BUTTON CLICK
// ============================================
if (typeof window !== 'undefined') {
    window.showFactionModal = function(factionKey) {
        const existing = document.querySelector('.faction-modal-overlay');
        if (existing) existing.remove();
        const html = renderFactionDetailModal(factionKey);
        document.body.insertAdjacentHTML('beforeend', html);
        requestAnimationFrame(() => {
            const overlay = document.querySelector('.faction-modal-overlay');
            if(overlay) overlay.classList.add('visible');
        });
    };
}

// ============================================
// 9. EVENT LISTENERS
// ============================================
export function initMushroomKingdomListeners() {
    const container = document.querySelector('.civil-war-system');
    if (!container) return;

    const analyticsBtn = container.querySelector('#btn-view-analytics');
    if (analyticsBtn) {
        analyticsBtn.addEventListener('click', () => {
            const html = renderAnalyticsModal();
            document.body.insertAdjacentHTML('beforeend', html);
        });
    }

    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.faction-detail-btn');
        if (btn && btn.id !== 'btn-view-analytics') {
            const key = btn.dataset.faction;
            window.showFactionModal(key);
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
        const factionStats = stats[key];
        let val = 10; 
        if (factionStats) {
            val += Math.floor(factionStats.military / 10);
            val += Math.floor(factionStats.economic / 10);
            val += (factionStats.controlledRegions * 2);
        }
        influence[key] = val;
    });

    return influence;
}

export function calculateWarStatus() {
    const influence = calculateDynamicInfluence();
    let leading = null;
    let max = 0;
    Object.entries(influence).forEach(([k,v]) => {
        if(v > max) { max = v; leading = k; }
    });
    
    const startYear = 1040;
    const currentYear = CURRENT_GAME_DATE.year;
    const yearsWar = currentYear - startYear;
    
    return { 
        leadingFaction: CIVIL_WAR_FACTIONS[leading], 
        daysSinceStart: yearsWar * 365 + (CURRENT_GAME_DATE.monthIndex * 30),
        phase: yearsWar > 5 ? "Total War" : "Escalation"
    }; 
}