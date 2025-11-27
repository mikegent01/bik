// rumors.js - Complete file with Arc integration

import { LORE_DATA, STORY_ARCS, getRumorsByArc, getArcProgress, getArcStats, getUnassignedRumors } from './lore.js';
import { CALENDAR_DATA } from './calendar-data.js';
import { playSound } from './common.js';

// ============================================
// STATE
// ============================================
let currentFilter = 'all'; // 'all', 'active', 'resolved', 'unassigned'
let expandedArcs = new Set();
let sortOrder = 'newest'; // 'newest', 'oldest', 'impact'

// ============================================
// DATE UTILITIES
// ============================================
function formatDate(date) {
    if (!date) return 'Ongoing';
    const month = CALENDAR_DATA.months.values[date.monthIndex];
    return `${month?.name || 'Unknown'} ${date.day}, ${date.year}`;
}

function getRelativeTime(date) {
    if (!date) return 'Ongoing';
    
    // Current game date
    const currentYear = 1040;
    const currentMonth = 6;
    const currentDay = 20;
    
    const currentTotal = currentYear * 365 + currentMonth * 30 + currentDay;
    const dateTotal = date.year * 365 + date.monthIndex * 30 + date.day;
    const diff = currentTotal - dateTotal;
    
    if (diff < 0) return 'Upcoming';
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 7) return `${diff} days ago`;
    if (diff < 14) return '1 week ago';
    if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
    if (diff < 60) return '1 month ago';
    if (diff < 365) return `${Math.floor(diff / 30)} months ago`;
    if (diff < 730) return '1 year ago';
    return `${Math.floor(diff / 365)} years ago`;
}

// ============================================
// RENDER: Arc Progress Bar
// ============================================
function renderArcProgressBar(arc) {
    const progress = getArcProgress(arc.id);
    
    return `
        <div class="arc-progress-container">
            <div class="arc-progress-bar">
                <div class="arc-progress-fill" style="width: ${progress * 100}%"></div>
            </div>
            <div class="arc-phases">
                ${arc.phases.map((phase, index) => {
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

// ============================================
// RENDER: Rumor Card
// ============================================
function renderRumorCard(rumor, showArcBadge = false) {
    const effectsHTML = Object.entries(rumor.effects || {}).map(([factionKey, value]) => {
        const faction = LORE_DATA.factions?.[factionKey];
        const factionName = faction?.name || factionKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const changeClass = value > 0 ? 'positive' : 'negative';
        const sign = value > 0 ? '+' : '';
        return `<li class="${changeClass}">${factionName}: <span>${sign}${value}</span></li>`;
    }).join('');

    const arcBadge = showArcBadge && rumor.arc && STORY_ARCS[rumor.arc] 
        ? `<span class="rumor-arc-badge" data-arc="${rumor.arc}">${STORY_ARCS[rumor.arc].icon} ${STORY_ARCS[rumor.arc].name}</span>`
        : '';
    
    const positionBadge = rumor.arcPosition 
        ? `<span class="rumor-position-badge position-${rumor.arcPosition}">${rumor.arcPosition}</span>`
        : '';

    const cycleImpact = rumor.cycle_impact 
        ? `<div class="rumor-cycle-impact impact-${rumor.cycle_impact.type}">
            <span class="impact-label">${rumor.cycle_impact.label}</span>
            <span class="impact-score">${rumor.cycle_impact.score > 0 ? '+' : ''}${rumor.cycle_impact.score}</span>
           </div>`
        : '';

    const instigatorDisplay = rumor.instigator 
        ? `<div class="rumor-instigator">Instigated by: <strong>${rumor.instigator.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong></div>` 
        : '';

    return `
        <div class="rumor-card ${rumor.isEvent ? 'is-event' : ''}" data-rumor-id="${rumor.id}">
            <div class="rumor-header">
                <div class="rumor-meta">
                    <span class="rumor-date" title="${formatDate(rumor.date)}">${getRelativeTime(rumor.date)}</span>
                    ${rumor.isEvent ? '<span class="rumor-type-badge event">EVENT</span>' : '<span class="rumor-type-badge rumor">RUMOR</span>'}
                    ${positionBadge}
                </div>
                ${arcBadge}
            </div>
            <h3>${rumor.title}</h3>
            <p class="rumor-description">${rumor.description}</p>
            ${cycleImpact}
            <div class="rumor-effects">
                <h4>Reputation Effects:</h4>
                <ul>${effectsHTML || '<li class="no-effects">No faction effects recorded.</li>'}</ul>
            </div>
            ${instigatorDisplay}
        </div>
    `;
}

// ============================================
// RENDER: Arc Timeline
// ============================================
function renderArcTimeline(arcId) {
    const rumors = getRumorsByArc(arcId);
    
    if (rumors.length === 0) {
        return '<p class="no-rumors">No recorded events in this arc yet.</p>';
    }
    
    // Group by position
    const positions = ['opening', 'rising', 'climax', 'falling', 'resolution'];
    const grouped = {};
    positions.forEach(p => grouped[p] = []);
    
    rumors.forEach(rumor => {
        const pos = rumor.arcPosition || 'rising';
        if (grouped[pos]) grouped[pos].push(rumor);
    });
    
    const positionLabels = {
        opening: { icon: '🎬', label: 'Opening' },
        rising: { icon: '📈', label: 'Rising Action' },
        climax: { icon: '⚡', label: 'Climax' },
        falling: { icon: '📉', label: 'Falling Action' },
        resolution: { icon: '🎭', label: 'Resolution' }
    };
    
    return `
        <div class="arc-timeline">
            ${positions.map(position => {
                const posRumors = grouped[position];
                if (posRumors.length === 0) return '';
                
                return `
                    <div class="timeline-section timeline-${position}">
                        <h4 class="timeline-section-header">
                            ${positionLabels[position].icon} ${positionLabels[position].label}
                            <span class="timeline-count">${posRumors.length}</span>
                        </h4>
                        <div class="timeline-events">
                            ${posRumors.map(rumor => `
                                <div class="timeline-event ${rumor.isEvent ? 'is-event' : ''}">
                                    <div class="event-marker"></div>
                                    <div class="event-content">
                                        <div class="event-header">
                                            <span class="event-title">${rumor.title}</span>
                                            <span class="event-date">${formatDate(rumor.date)}</span>
                                        </div>
                                        <p class="event-description">${rumor.description.substring(0, 200)}${rumor.description.length > 200 ? '...' : ''}</p>
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

// ============================================
// RENDER: Arc Card
// ============================================
function renderArcCard(arc) {
    const stats = getArcStats(arc.id);
    const isExpanded = expandedArcs.has(arc.id);
    
    const statusConfig = {
        active: { label: 'Active', icon: '🔥', class: 'status-active' },
        resolved: { label: 'Resolved', icon: '✓', class: 'status-resolved' },
        upcoming: { label: 'Upcoming', icon: '⏳', class: 'status-upcoming' },
        failed: { label: 'Failed', icon: '✗', class: 'status-failed' }
    };
    const status = statusConfig[arc.status] || statusConfig.active;
    
    // Get top faction impacts (sorted by absolute value)
    const topFactions = Object.entries(stats.factionImpacts)
        .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
        .slice(0, 4);
    
    return `
        <div class="arc-card arc-${arc.status}" data-arc-id="${arc.id}">
            <div class="arc-header">
                <div class="arc-icon">${arc.icon}</div>
                <div class="arc-title-section">
                    <h3 class="arc-title">${arc.name}</h3>
                    <span class="arc-status ${status.class}">
                        ${status.icon} ${status.label}
                    </span>
                </div>
            </div>
            
            <p class="arc-description">${arc.description}</p>
            
            <div class="arc-meta">
                <span class="arc-dates">
                    📅 ${formatDate(arc.startDate)} ${arc.endDate ? `→ ${formatDate(arc.endDate)}` : '→ Ongoing'}
                </span>
                <span class="arc-rumor-count">📜 ${stats.rumorCount} Events</span>
                <span class="arc-cycle-score" title="Total Cycle Impact">
                    🌀 ${stats.totalCycleImpact.toFixed(1)}
                </span>
            </div>
            
            ${renderArcProgressBar(arc)}
            
            <div class="arc-themes">
                ${arc.themes.map(theme => `<span class="theme-tag theme-${theme}">${theme}</span>`).join('')}
            </div>
            
            ${topFactions.length > 0 ? `
                <div class="arc-faction-impacts">
                    <h4>Key Impacts:</h4>
                    <div class="faction-impact-list">
                        ${topFactions.map(([factionId, value]) => {
                            const faction = LORE_DATA.factions?.[factionId];
                            const factionName = faction?.name || factionId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
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
            ` : ''}
            
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
            
            <button class="arc-expand-btn" data-arc="${arc.id}">
                ${isExpanded ? 'Hide Timeline ▲' : 'View Timeline ▼'}
            </button>
            
            <div class="arc-timeline-container ${isExpanded ? 'expanded' : ''}" id="timeline-${arc.id}">
                ${isExpanded ? renderArcTimeline(arc.id) : ''}
            </div>
        </div>
    `;
}

// ============================================
// RENDER: Filter Tabs
// ============================================
function renderFilterTabs() {
    const arcs = Object.values(STORY_ARCS);
    const activeCount = arcs.filter(a => a.status === 'active').length;
    const resolvedCount = arcs.filter(a => a.status === 'resolved').length;
    const unassignedCount = getUnassignedRumors().length;
    
    return `
        <div class="rumors-filter-tabs">
            <button class="filter-tab ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">
                All <span class="tab-count">${LORE_DATA.rumors.length}</span>
            </button>
            <button class="filter-tab ${currentFilter === 'active' ? 'active' : ''}" data-filter="active">
                🔥 Active Arcs <span class="tab-count">${activeCount}</span>
            </button>
            <button class="filter-tab ${currentFilter === 'resolved' ? 'active' : ''}" data-filter="resolved">
                ✓ Resolved <span class="tab-count">${resolvedCount}</span>
            </button>
            <button class="filter-tab ${currentFilter === 'unassigned' ? 'active' : ''}" data-filter="unassigned">
                📋 Misc Intel <span class="tab-count">${unassignedCount}</span>
            </button>
        </div>
    `;
}

// ============================================
// RENDER: Summary Stats
// ============================================
function renderSummaryStats() {
    const arcs = Object.values(STORY_ARCS);
    const activeArcs = arcs.filter(a => a.status === 'active');
    const totalRumors = LORE_DATA.rumors.length;
    const totalEvents = LORE_DATA.rumors.filter(r => r.isEvent).length;
    const totalCycleImpact = LORE_DATA.rumors.reduce((sum, r) => sum + (r.cycle_impact?.score || 0), 0);
    
    return `
        <div class="rumors-summary">
            <div class="summary-stat">
                <span class="stat-value">${activeArcs.length}</span>
                <span class="stat-label">Active Arcs</span>
            </div>
            <div class="summary-stat">
                <span class="stat-value">${totalEvents}</span>
                <span class="stat-label">Major Events</span>
            </div>
            <div class="summary-stat">
                <span class="stat-value">${totalRumors}</span>
                <span class="stat-label">Total Intel</span>
            </div>
            <div class="summary-stat">
                <span class="stat-value">${totalCycleImpact.toFixed(1)}</span>
                <span class="stat-label">Cycle Impact</span>
            </div>
        </div>
    `;
}

// ============================================
// MAIN RENDER FUNCTION
// ============================================
function renderRumors() {
    const container = document.getElementById('rumors-container');
    if (!container) return;

    const arcs = Object.values(STORY_ARCS);
    let content = '';
    
    // Add summary and filters
    content += renderSummaryStats();
    content += renderFilterTabs();
    
    // Active Arcs Section
    if (currentFilter === 'all' || currentFilter === 'active') {
        const activeArcs = arcs.filter(a => a.status === 'active');
        if (activeArcs.length > 0) {
            content += `
                <section class="arc-section">
                    <h2 class="section-header">🔥 Active Story Arcs</h2>
                    <div class="arcs-grid">
                        ${activeArcs.map(arc => renderArcCard(arc)).join('')}
                    </div>
                </section>
            `;
        }
    }
    
    // Resolved Arcs Section
    if (currentFilter === 'all' || currentFilter === 'resolved') {
        const resolvedArcs = arcs.filter(a => a.status === 'resolved');
        if (resolvedArcs.length > 0) {
            content += `
                <section class="arc-section">
                    <h2 class="section-header">✓ Resolved Arcs</h2>
                    <div class="arcs-grid">
                        ${resolvedArcs.map(arc => renderArcCard(arc)).join('')}
                    </div>
                </section>
            `;
        }
    }
    
    // Unassigned Rumors Section
    if (currentFilter === 'unassigned' || currentFilter === 'all') {
        const unassigned = getUnassignedRumors();
        if (unassigned.length > 0) {
            // Sort by date (newest first)
            const sortedUnassigned = [...unassigned].sort((a, b) => {
                const dateA = a.date ? a.date.year * 10000 + a.date.monthIndex * 100 + a.date.day : 0;
                const dateB = b.date ? b.date.year * 10000 + b.date.monthIndex * 100 + b.date.day : 0;
                return dateB - dateA;
            });
            
            content += `
                <section class="arc-section">
                    <h2 class="section-header">📋 Unassigned Intel</h2>
                    <p class="section-description">Standalone events and rumors not yet connected to a major story arc.</p>
                    <div class="rumors-grid">
                        ${sortedUnassigned.map(r => renderRumorCard(r, false)).join('')}
                    </div>
                </section>
            `;
        }
    }
    
    container.innerHTML = content;
    
    // Attach event listeners
    attachEventListeners();
}

// ============================================
// EVENT LISTENERS
// ============================================
function attachEventListeners() {
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            currentFilter = e.target.closest('.filter-tab').dataset.filter;
            if (typeof playSound === 'function') playSound('click.mp3');
            renderRumors();
        });
    });
    
    // Arc expand buttons
    document.querySelectorAll('.arc-expand-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const arcId = e.target.dataset.arc;
            if (expandedArcs.has(arcId)) {
                expandedArcs.delete(arcId);
            } else {
                expandedArcs.add(arcId);
            }
            if (typeof playSound === 'function') playSound('click.mp3');
            renderRumors();
        });
    });
    
    // Arc badge clicks (filter to that arc's rumors)
    document.querySelectorAll('.rumor-arc-badge').forEach(badge => {
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            const arcId = e.target.dataset.arc;
            // Expand that arc and scroll to it
            expandedArcs.add(arcId);
            if (typeof playSound === 'function') playSound('click.mp3');
            renderRumors();
            
            // Scroll to the arc card
            setTimeout(() => {
                const arcCard = document.querySelector(`[data-arc-id="${arcId}"]`);
                if (arcCard) {
                    arcCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    renderRumors();
}

init();