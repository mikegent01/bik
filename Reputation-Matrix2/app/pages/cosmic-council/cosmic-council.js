// cosmic-council.js

import { getAllFactions, getFaction, toSystemId } from '../../../systems/faction-registry.js';
import { getRealTimeMapStats } from '../../systems/global-map-analysis.js';
import { CURRENT_GAME_DATE } from '../../../data/world/calendar.js';

// ============================================
// CONFIGURATION & LORE
// ============================================
const TOTAL_SEATS = 500;
const EXCLUDED_FACTIONS = ['freelancer_underworld', 'unaligned']; // The "Shadow" factions

// Parliamentary Coalitions (Expanded to 7 Blocs)
const COALITIONS = {
    'Imperial': { 
        name: 'The Imperial High Council', 
        color: '#b91c1c', // Deep Red
        icon: '👑', 
        desc: 'Authoritarian empires, monarchies, and military dictatorships.' 
    },
    'Technocratic': { 
        name: 'The Technocratic Union', 
        color: '#06b6d4', // Cyan
        icon: '🦾', 
        desc: 'Scientific academies, AI collectives, and futuristic societies.' 
    },
    'Arcane': { 
        name: 'The Arcane Concord', 
        color: '#9333ea', // Purple
        icon: '🔮', 
        desc: 'Magic-wielding nations, cults, and supernatural orders.' 
    },
    'Verdant': { 
        name: 'The Verdant Pact', 
        color: '#16a34a', // Green
        icon: '🌿', 
        desc: 'Nature-aligned tribes, beast clans, and preservationists.' 
    },
    'Democratic': { 
        name: 'United Systems Alliance', 
        color: '#2563eb', // Blue
        icon: '🌐', 
        desc: 'Democracies, republics, and peaceful federations.' 
    },
    'Mercantile': { 
        name: 'The Guild Assembly', 
        color: '#d97706', // Amber/Gold
        icon: '⚖️', 
        desc: 'Trade guilds, independent city-states, and economic zones.' 
    },
    'Chaos': { 
        name: 'The Fringe Factions', 
        color: '#475569', // Slate
        icon: '🏴', 
        desc: 'Pirates, anarchists, and non-aligned anomalies.' 
    },
    'Rogue': { 
        name: 'Sanctioned Entities', 
        color: '#0f172a', // Dark
        icon: '🚫', 
        desc: 'Factions under diplomatic embargo.' 
    }
};

// Mock Active Legislation
const CURRENT_AGENDA = [
    {
        id: "RES-2024",
        title: "The Mana Conservation Act",
        proponent: "Asgard",
        desc: "Proposed restrictions on industrial magic usage to prevent aetheric depletion.",
        status: "Voting in Progress",
        votesFor: 145,
        votesAgainst: 112,
        votesAbstain: 40
    },
    {
        id: "RES-2025",
        title: "Academic Neutrality Treaty",
        proponent: "Millennium Science School",
        desc: "Designates all educational institutions as neutral ground during conflicts.",
        status: "Passed",
        votesFor: 380,
        votesAgainst: 12,
        votesAbstain: 5
    }
];

// ============================================
// HELPERS
// ============================================

/**
 * Robust Coalition Sorting Logic
 */
function getCoalition(faction) {
    if (faction.seats === 0) return 'Rogue';
    
    const n = (faction.name + " " + (faction.leaderTitle || "")).toLowerCase();
    
    // 1. TECHNOCRATIC (Science, Schools, Future)
    if (
        n.includes('science') || n.includes('school') || n.includes('academy') || 
        n.includes('cyber') || n.includes('internet') || n.includes('data') || 
        n.includes('tech') || n.includes('formosa') || n.includes('polybius') ||
        n.includes('skycavern') || n.includes('weldrhom') || n.includes('robot') ||
        n.includes('glarnia') || n.includes('geminia')
    ) return 'Technocratic';

    // 2. ARCANE (Magic, Gods, Undead)
    if (
        n.includes('magic') || n.includes('elf') || n.includes('elves') || 
        n.includes('wizard') || n.includes('mage') || n.includes('asgard') || 
        n.includes('mystic') || n.includes('cult') || n.includes('temple') || 
        n.includes('vampire') || n.includes('tomb') || n.includes('spirit') ||
        n.includes('goddess') || n.includes('priest') || n.includes('divine') ||
        n.includes('oracula') || n.includes('asclepia')
    ) return 'Arcane';

    // 3. VERDANT (Nature, Beasts, Tribes)
    if (
        n.includes('pony') || n.includes('equestria') || n.includes('beast') || 
        n.includes('clan') || n.includes('tribe') || n.includes('jungle') || 
        n.includes('forest') || n.includes('nature') || n.includes('pokemon') || 
        n.includes('trainer') || n.includes('yoshi') || n.includes('kong') || 
        n.includes('ratchet') || n.includes('greenskin') || n.includes('xenonesia') ||
        n.includes('animatopia') || n.includes('moonfang') || n.includes('zebrabwe')
    ) return 'Verdant';

    // 4. IMPERIAL (Monarchies, Hard Power)
    if (
        n.includes('empire') || n.includes('kingdom') || n.includes('legion') || 
        n.includes('dominion') || n.includes('mordor') || n.includes('koopa') || 
        n.includes('bowser') || n.includes('sultanate') || n.includes('khanate') || 
        n.includes('iron') || n.includes('throne') || n.includes('emperor') ||
        n.includes('regency') || n.includes('dynasty') || n.includes('changeling')
    ) return 'Imperial';

    // 5. DEMOCRATIC (Republics, Unions)
    if (
        n.includes('republic') || n.includes('democracy') || n.includes('united') || 
        n.includes('alliance') || n.includes('federation') || n.includes('council') ||
        n.includes('congress') || n.includes('parliament')
    ) return 'Democratic';

    // 6. MERCANTILE (Money, Trade, Independents)
    if (
        n.includes('guild') || n.includes('merchant') || n.includes('trade') || 
        n.includes('syndicate') || n.includes('company') || n.includes('market') || 
        n.includes('investigator') || n.includes('artisan') || n.includes('shop') ||
        n.includes('bank') || n.includes('resort') || n.includes('garden isles')
    ) return 'Mercantile';

    // 7. CHAOS / FRINGE (Everything else)
    return 'Chaos';
}

/**
 * Calculates Seats (Sainte-Laguë method)
 */
function distributeParliamentSeats(factions) {
    const validFactions = factions.filter(f => f.political > 0);
    const totalInfluence = validFactions.reduce((sum, f) => sum + f.political, 0);

    validFactions.forEach(f => {
        const share = f.political / totalInfluence;
        f.seats = Math.floor(share * TOTAL_SEATS);
        // Ensure very small factions with some influence don't just disappear if they are notable
        if (f.seats === 0 && share > 0.005) f.seats = 1; 
    });
    
    // Handle leftover seats due to rounding
    const assignedSeats = validFactions.reduce((sum, f) => sum + f.seats, 0);
    let remainder = TOTAL_SEATS - assignedSeats;
    
    // Give remainder to highest influence factions
    if (remainder > 0) {
        validFactions.sort((a, b) => b.political - a.political);
        for (let i = 0; i < remainder; i++) {
            if (validFactions[i]) validFactions[i].seats++;
        }
    }

    return factions.sort((a, b) => b.seats - a.seats);
}

// ============================================
// RENDERERS
// ============================================

function renderHemicycle(factions) {
    const coalitionCounts = {};
    Object.keys(COALITIONS).forEach(k => coalitionCounts[k] = 0);
    
    let totalSeated = 0;

    factions.forEach(f => {
        if (f.seats > 0) {
            const c = getCoalition(f);
            if (coalitionCounts[c] !== undefined) coalitionCounts[c] += f.seats;
            totalSeated += f.seats;
        }
    });

    const segments = Object.entries(coalitionCounts)
        .filter(([_, count]) => count > 0)
        .map(([key, count]) => {
            const coal = COALITIONS[key];
            const percent = (count / totalSeated) * 100;
            return `<div class="hemi-segment" style="width: ${percent}%; background: ${coal.color};" title="${coal.name}: ${count} Seats"></div>`;
        }).join('');

    return `
        <div class="hemicycle-container">
            <div class="hemi-chart">
                <div class="hemi-arc">${segments}</div>
                <div class="hemi-center">
                    <span class="hemi-total">${totalSeated}</span>
                    <span class="hemi-label">Representatives</span>
                </div>
            </div>
            <div class="coalition-legend">
                ${Object.entries(coalitionCounts).filter(([_,c]) => c > 0).map(([key, count]) => `
                    <div class="legend-item">
                        <span class="legend-dot" style="background: ${COALITIONS[key].color}"></span>
                        <div class="legend-info">
                            <span class="legend-name">${COALITIONS[key].name}</span>
                            <span class="legend-count">${count} seats</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderRoster(factions) {
    return factions.map(f => {
        const coalitionKey = getCoalition(f);
        const bloc = COALITIONS[coalitionKey];
        const isSanctioned = f.seats === 0;

        let statusBadge = '';
        if (isSanctioned) statusBadge = `<span class="badge-sanctioned">SANCTIONED</span>`;

        return `
            <div class="roster-row ${isSanctioned ? 'row-sanctioned' : ''}" onclick="window.showCouncilFaction('${f.id}')">
                <div class="col-name">
                    <div class="faction-flag" style="background: ${f.color}">${f.icon}</div>
                    <div class="name-block">
                        <span class="f-name">${f.name}</span>
                        <span class="f-rep">${statusBadge} ${f.leaderTitle} ${f.leaderName}</span>
                    </div>
                </div>
                <div class="col-bloc">
                    <span class="bloc-badge" style="border-color: ${bloc.color}; color: ${bloc.color}">
                        ${bloc.icon} ${bloc.name}
                    </span>
                </div>
                <div class="col-stats">
                    <div class="stat-pill">🏛️ ${f.political}</div>
                    <div class="stat-pill">💰 ${f.economic}</div>
                </div>
                <div class="col-seats">
                    <span class="seat-count ${f.seats > 0 ? 'has-seats' : 'no-seats'}">
                        ${f.seats}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// MAIN RENDER
// ============================================

export function renderCosmicCouncil() {
    const stats = getRealTimeMapStats();
    const allFactions = getAllFactions();
    
    // 1. Process Data
    let processedFactions = Object.entries(allFactions)
        .filter(([key]) => !EXCLUDED_FACTIONS.includes(key) && stats.global[key])
        .map(([key, def]) => {
            const s = stats.global[key];
            return {
                id: key,
                ...def,
                military: s.military || 0,
                economic: s.economic || 0,
                political: s.political || 0,
                population: s.population || 0,
                color: def.color
            };
        });

    // 2. Calculate Seats
    const parliament = distributeParliamentSeats(processedFactions);
    
    // 3. Render
    return `
        <div class="council-system-v2">
            <div class="council-header">
                <div class="header-titles">
                    <h1>The Cosmic Council</h1>
                    <div class="header-subtitle">
                        <span class="year-badge">Year ${CURRENT_GAME_DATE.year}</span>
                        <span>Inter-Universal Parliamentary Assembly</span>
                    </div>
                </div>
                <div class="header-status">
                    <div class="status-light pulse-green"></div>
                    <span>42nd SESSION ACTIVE</span>
                </div>
            </div>

            <div class="council-top-grid">
                <div class="panel-section hemi-section">
                    <h3>Parliamentary Floor</h3>
                    ${renderHemicycle(parliament)}
                    <div class="majority-line">
                        <span>Simple Majority: ${Math.floor(TOTAL_SEATS/2) + 1}</span>
                        <span>Super Majority: ${Math.floor(TOTAL_SEATS * 0.66)}</span>
                    </div>
                </div>

                <div class="panel-section agenda-section">
                    <h3>Legislative Docket</h3>
                    <div class="agenda-scroll">
                        ${CURRENT_AGENDA.map(item => `
                            <div class="agenda-card">
                                <div class="agenda-header">
                                    <span class="agenda-id">${item.id}</span>
                                    <span class="agenda-status status-pending">${item.status}</span>
                                </div>
                                <h4 class="agenda-title">${item.title}</h4>
                                <p class="agenda-desc">${item.desc}</p>
                                <div class="vote-bar-multi">
                                    <div style="width: ${(item.votesFor / (item.votesFor+item.votesAgainst+item.votesAbstain))*100}%; background: #22c55e;"></div>
                                    <div style="width: ${(item.votesAgainst / (item.votesFor+item.votesAgainst+item.votesAbstain))*100}%; background: #ef4444;"></div>
                                    <div style="flex:1; background: #64748b;"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="panel-section roster-section">
                <div class="roster-header">
                    <h3>Member State Registry</h3>
                </div>
                <div class="roster-columns-header">
                    <span>Delegation</span>
                    <span>Political Bloc</span>
                    <span>Influence / Econ</span>
                    <span>Seats</span>
                </div>
                <div class="roster-scroll-container">
                    ${renderRoster(parliament)}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// EXPORTS
// ============================================
window.showCouncilFaction = (factionId) => {
    if(window.showFactionModal) window.showFactionModal(toSystemId(factionId));
};

export function initCosmicCouncilListeners() {}