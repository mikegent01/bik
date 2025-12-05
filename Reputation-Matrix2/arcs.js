
import { TOAD_ABILITIES } from './abilities.js';
import {RUMORS } from './party-and-events.js';
import { STORY_ARCS,  getRumorsByArc, getArcProgress, getArcStats } from './lore.js';
import { LORE_DATA } from './lore.js';

const ARC_POSITION_ORDER = {
    'opening': 0,
    'rising': 1,
    'climax': 2,
    'falling': 3,
    'resolution': 4
};

const ARC_STATUS_LABELS = {
    'upcoming': { label: 'Upcoming', class: 'status-upcoming', icon: '⏳' },
    'active': { label: 'In Progress', class: 'status-active', icon: '🔥' },
    'resolved': { label: 'Resolved', class: 'status-resolved', icon: '✓' },
    'failed': { label: 'Failed', class: 'status-failed', icon: '✗' }
};

function formatDate(date) {
    if (!date) return 'Ongoing';
    const months = ['Deepwinter', 'Stormcrest', 'Mudmarch', 'Bloomtide', 'Highsun', 'Goldfall', 'Harvestmoon', 'Frostfall', 'Darkember', 'Starfall', 'Snowmantle', 'Yearsend'];
    return `${date.day} ${months[date.monthIndex]}, ${date.year}`;
}

function renderArcProgressBar(arc) {
    const progress = getArcProgress(arc.id);
    const phases = arc.phases;
    
    return `
        <div class="arc-progress-container">
            <div class="arc-progress-bar">
                <div class="arc-progress-fill" style="width: ${progress * 100}%"></div>
            </div>
            <div class="arc-phases">
                ${phases.map((phase, index) => {
                    let phaseClass = 'phase-pending';
                    if (index < arc.currentPhase) phaseClass = 'phase-complete';
                    else if (index === arc.currentPhase) phaseClass = 'phase-active';
                    
                    return `
                        <div class="arc-phase ${phaseClass}" title="${phase.description}">
                            <div class="phase-marker"></div>
                            <span class="phase-name">${phase.name}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderArcRumorTimeline(arcId) {
    const rumors = getRumorsByArc(arcId);
    
    if (rumors.length === 0) {
        return '<p class="no-rumors">No recorded events yet.</p>';
    }
    
    // Group rumors by position
    const grouped = {
        opening: [],
        rising: [],
        climax: [],
        falling: [],
        resolution: []
    };
    
    rumors.forEach(rumor => {
        const position = rumor.arcPosition || 'rising';
        if (grouped[position]) {
            grouped[position].push(rumor);
        }
    });
    
    return `
        <div class="arc-timeline">
            ${Object.entries(grouped).map(([position, positionRumors]) => {
                if (positionRumors.length === 0) return '';
                
                const positionLabels = {
                    opening: '🎬 Opening',
                    rising: '📈 Rising Action',
                    climax: '⚡ Climax',
                    falling: '📉 Falling Action',
                    resolution: '🎭 Resolution'
                };
                
                return `
                    <div class="timeline-section timeline-${position}">
                        <h4 class="timeline-section-header">${positionLabels[position]}</h4>
                        <div class="timeline-events">
                            ${positionRumors.map(rumor => `
                                <div class="timeline-event ${rumor.isEvent ? 'is-event' : 'is-rumor'}">
                                    <div class="event-marker"></div>
                                    <div class="event-content">
                                        <div class="event-header">
                                            <span class="event-title">${rumor.title}</span>
                                            <span class="event-date">${formatDate(rumor.date)}</span>
                                        </div>
                                        <p class="event-description">${rumor.description.substring(0, 150)}${rumor.description.length > 150 ? '...' : ''}</p>
                                        ${rumor.cycle_impact ? `
                                            <span class="event-impact impact-${rumor.cycle_impact.type}">
                                                ${rumor.cycle_impact.label} (${rumor.cycle_impact.score > 0 ? '+' : ''}${rumor.cycle_impact.score})
                                            </span>
                                        ` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderArcCard(arc) {
    const stats = getArcStats(arc.id);
    const statusInfo = ARC_STATUS_LABELS[arc.status] || ARC_STATUS_LABELS.active;
    
    // Get top affected factions
    const topFactions = Object.entries(stats.factionImpacts)
        .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
        .slice(0, 5);
    
    return `
        <div class="arc-card arc-${arc.status}" data-arc-id="${arc.id}">
            <div class="arc-header">
                <div class="arc-icon">${arc.icon}</div>
                <div class="arc-title-section">
                    <h3 class="arc-title">${arc.name}</h3>
                    <span class="arc-status ${statusInfo.class}">
                        ${statusInfo.icon} ${statusInfo.label}
                    </span>
                </div>
            </div>
            
            <p class="arc-description">${arc.description}</p>
            
            <div class="arc-meta">
                <span class="arc-dates">
                    📅 ${formatDate(arc.startDate)} ${arc.endDate ? `→ ${formatDate(arc.endDate)}` : '→ Ongoing'}
                </span>
                <span class="arc-rumor-count">📜 ${stats.rumorCount} Events</span>
            </div>
            
            ${renderArcProgressBar(arc)}
            
            <div class="arc-themes">
                ${arc.themes.map(theme => `<span class="theme-tag theme-${theme}">${theme}</span>`).join('')}
            </div>
            
            <div class="arc-faction-impacts">
                <h4>Key Faction Impacts:</h4>
                <div class="faction-impact-list">
                    ${topFactions.map(([factionId, value]) => {
                        const faction = LORE_DATA?.factions?.[factionId];
                        const factionName = faction?.name || factionId;
                        const impactClass = value > 0 ? 'positive' : 'negative';
                        const sign = value > 0 ? '+' : '';
                        return `
                            <div class="faction-impact ${impactClass}">
                                <span class="faction-name">${factionName}</span>
                                <span class="faction-value">${sign}${value}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div class="arc-consequences">
                <div class="consequences-positive">
                    <h5>✓ Gains</h5>
                    <ul>${arc.consequences.positive.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
                <div class="consequences-negative">
                    <h5>✗ Losses</h5>
                    <ul>${arc.consequences.negative.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
            </div>
            
            <button class="arc-expand-btn" onclick="toggleArcTimeline('${arc.id}')">
                View Timeline ▼
            </button>
            
            <div class="arc-timeline-container" id="timeline-${arc.id}" style="display: none;">
                ${renderArcRumorTimeline(arc.id)}
            </div>
        </div>
    `;
}

function renderArcOverview() {
    const arcs = Object.values(STORY_ARCS);
    
    // Separate by status
    const activeArcs = arcs.filter(a => a.status === 'active');
    const resolvedArcs = arcs.filter(a => a.status === 'resolved');
    const upcomingArcs = arcs.filter(a => a.status === 'upcoming');
    
    return `
        <div class="arcs-overview">
            <div class="arcs-summary">
                <div class="summary-stat">
                    <span class="stat-value">${activeArcs.length}</span>
                    <span class="stat-label">Active Arcs</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${resolvedArcs.length}</span>
                    <span class="stat-label">Resolved</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${RUMORS.length}</span>
                    <span class="stat-label">Total Events</span>
                </div>
            </div>
            
            ${activeArcs.length > 0 ? `
                <section class="arc-section">
                    <h2>🔥 Active Story Arcs</h2>
                    <div class="arcs-grid">
                        ${activeArcs.map(arc => renderArcCard(arc)).join('')}
                    </div>
                </section>
            ` : ''}
            
            ${resolvedArcs.length > 0 ? `
                <section class="arc-section">
                    <h2>✓ Resolved Arcs</h2>
                    <div class="arcs-grid">
                        ${resolvedArcs.map(arc => renderArcCard(arc)).join('')}
                    </div>
                </section>
            ` : ''}
            
            ${upcomingArcs.length > 0 ? `
                <section class="arc-section">
                    <h2>⏳ Upcoming Arcs</h2>
                    <div class="arcs-grid">
                        ${upcomingArcs.map(arc => renderArcCard(arc)).join('')}
                    </div>
                </section>
            ` : ''}
        </div>
    `;
}

// Toggle timeline visibility
window.toggleArcTimeline = function(arcId) {
    const timeline = document.getElementById(`timeline-${arcId}`);
    const btn = timeline.previousElementSibling;
    
    if (timeline.style.display === 'none') {
        timeline.style.display = 'block';
        btn.textContent = 'Hide Timeline ▲';
    } else {
        timeline.style.display = 'none';
        btn.textContent = 'View Timeline ▼';
    }
};

export function renderArcs() {
    const container = document.getElementById('arcs-container');
    if (!container) return;
    
    container.innerHTML = renderArcOverview();
}

export function init() {
    renderArcs();
}

init();
export const AUXILIARY_PARTY = {
    dan: { name: "Dan", weapon: "Longsword & Magic", status: "Weakened & Diminished", portrait: "toads/dan.png", level: 1, xp: 0, xp_to_next: 100, log: [], abilities: [] },
    toad_lee: { name: "Toad Lee", description: "A hardy toad warrior who fights with a surprisingly large axe.", weapon: "Axe", status: "Active", portrait: "toads/toad_lee.png", level: 2, xp: 150, xp_to_next: 300, log: ["Survived the horrifying dinner and subsequent Iron Legion raid at Shadeward Mansion."], abilities: ["Reckless Attack"] },
    eager: { name: "Eager", weapon: "Whip", status: "Active", portrait: "toads/eager.png", level: 1, xp: 0, xp_to_next: 100, log: [], abilities: [] },
    ryan: { name: "Ryan", weapon: "Spellcaster", status: "Active", description: "A quiet, studious toad with a natural but untrained affinity for magic...", portrait: "toads/ryan.png", level: 2, xp: 150, xp_to_next: 300, log: ["Faced the Oracle at Shadeward Mansion and used a powerful darkness spell..."], abilities: ["Magic Missile"] },
    roger: { name: "Roger", weapon: "Gun", status: "Active", portrait: "toads/roger.png", level: 2, xp: 150, xp_to_next: 300, log: ["Stood up to the Oracle at Shadeward Mansion and dropped an Iron Legionnaire..."], abilities: ["Deadeye Shot"] },
    bones: { name: "Bones", weapon: "Grotesque", status: "Active", portrait: "toads/bones.png", level: 2, xp: 150, xp_to_next: 300, log: ["Captured and interrogated by the Iron Legion during the chaotic raid..."], abilities: ["Rage"] },
    the_mole: { name: "The Mole", weapon: "Deceit", status: "Active", description: "A toad of unknown origin... Revealed as an agent for the Iron Legion.", portrait: "toads/the_mole.png", level: 2, xp: 150, xp_to_next: 300, log: ["Revealed his allegiance by helping the Iron Legion capture Bones..."], abilities: ["Feint"] }
};
