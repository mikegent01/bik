// rumors.js - Complete file with Arc integration and Debug Mode support

import { LORE_DATA, STORY_ARCS, getRumorsByArc, getArcProgress, getArcStats, getUnassignedRumors } from '../../../lore.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from '../../../data/world/calendar.js';
import { playSound } from '../../core/common.js';
import { state } from '../../core/state.js';

// ============================================
// STATE
// ============================================
let currentFilter = 'all'; // 'all', 'active', 'resolved', 'unassigned', 'debug'
let expandedArcs = new Set();
let sortOrder = 'newest'; // 'newest', 'oldest', 'impact'

// ============================================
// DATE & VISIBILITY UTILITIES
// ============================================

/**
 * Check if a rumor/event is in the future (not yet happened in game time)
 */
function isFutureEvent(dateObj) {
    if (!dateObj || !CURRENT_GAME_DATE) return false;
    
    if (dateObj.year > CURRENT_GAME_DATE.year) return true;
    if (dateObj.year === CURRENT_GAME_DATE.year) {
        if (dateObj.monthIndex > CURRENT_GAME_DATE.monthIndex) return true;
        if (dateObj.monthIndex === CURRENT_GAME_DATE.monthIndex) {
            if (dateObj.day > CURRENT_GAME_DATE.day) return true;
        }
    }
    return false;
}

/**
 * Check if content should be visible
 * Future content only visible in debug mode
 */
function isContentVisible(dateObj) {
    if (!dateObj) return true;
    
    const isFuture = isFutureEvent(dateObj);
    
    if (isFuture) {
        // Only show if debug mode is enabled
        return window.debugMode === true || state?.debugMode === true;
    }
    
    return true;
}

/**
 * Check if effects should apply (only for past/present events)
 */
function shouldEffectsApply(dateObj) {
    // Effects only apply if the event has already happened
    return !isFutureEvent(dateObj);
}

function formatDate(date) {
    if (!date) return 'Ongoing';
    const month = CALENDAR_DATA?.months?.values?.[date.monthIndex];
    return `${month?.name || 'Unknown'} ${date.day}, ${date.year}`;
}

function getRelativeTime(date) {
    if (!date) return 'Ongoing';
    
    const currentYear = CURRENT_GAME_DATE?.year || 1040;
    const currentMonth = CURRENT_GAME_DATE?.monthIndex || 6;
    const currentDay = CURRENT_GAME_DATE?.day || 20;
    
    const currentTotal = currentYear * 365 + currentMonth * 30 + currentDay;
    const dateTotal = date.year * 365 + date.monthIndex * 30 + date.day;
    const diff = currentTotal - dateTotal;
    
    if (diff < 0) return `In ${Math.abs(diff)} days`;
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
// RENDER: Debug Badge
// ============================================
function renderDebugBadge() {
    return `
        <div class="debug-future-badge" style="
            background: repeating-linear-gradient(45deg, #aa0000, #aa0000 10px, #660000 10px, #660000 20px);
            color: #fff;
            padding: 4px 8px;
            font-weight: bold;
            font-size: 0.7em;
            text-align: center;
            border: 1px solid #ff4444;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 1px;
            animation: debug-pulse 2s ease-in-out infinite;
        ">⚠️ FUTURE EVENT (Debug Only)</div>
    `;
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
    const isFuture = isFutureEvent(rumor.date);
    const effectsApply = shouldEffectsApply(rumor.date);
    
    // Build effects HTML - show differently if effects don't apply yet
    let effectsHTML = '';
    if (rumor.effects && Object.keys(rumor.effects).length > 0) {
        effectsHTML = Object.entries(rumor.effects).map(([factionKey, value]) => {
            const faction = LORE_DATA.factions?.[factionKey];
            const factionName = faction?.name || factionKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            const changeClass = value > 0 ? 'positive' : 'negative';
            const sign = value > 0 ? '+' : '';
            
            // If effects don't apply yet, show them as pending
            if (!effectsApply) {
                return `<li class="pending" style="opacity: 0.5; font-style: italic;">${factionName}: <span>${sign}${value}</span> (Pending)</li>`;
            }
            
            return `<li class="${changeClass}">${factionName}: <span>${sign}${value}</span></li>`;
        }).join('');
    } else {
        effectsHTML = '<li class="no-effects">No faction effects recorded.</li>';
    }

    const arcBadge = showArcBadge && rumor.arc && STORY_ARCS[rumor.arc] 
        ? `<span class="rumor-arc-badge" data-arc="${rumor.arc}">${STORY_ARCS[rumor.arc].icon} ${STORY_ARCS[rumor.arc].name}</span>`
        : '';
    
    const positionBadge = rumor.arcPosition 
        ? `<span class="rumor-position-badge position-${rumor.arcPosition}">${rumor.arcPosition}</span>`
        : '';

    const cycleImpact = rumor.cycle_impact 
        ? `<div class="rumor-cycle-impact impact-${rumor.cycle_impact.type}" ${!effectsApply ? 'style="opacity: 0.5;"' : ''}>
            <span class="impact-label">${rumor.cycle_impact.label}</span>
            <span class="impact-score">${rumor.cycle_impact.score > 0 ? '+' : ''}${rumor.cycle_impact.score}</span>
            ${!effectsApply ? '<span class="pending-label">(Pending)</span>' : ''}
           </div>`
        : '';

    const instigatorDisplay = rumor.instigator 
        ? `<div class="rumor-instigator">Instigated by: <strong>${rumor.instigator.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong></div>` 
        : '';

    // Debug styling for future events
    const debugClass = isFuture ? 'debug-future-event' : '';
    const debugStyle = isFuture ? `
        border: 3px dashed #ff4444 !important;
        background: linear-gradient(135deg, rgba(255, 68, 68, 0.1), rgba(170, 0, 0, 0.1)) !important;
        position: relative;
    ` : '';

    return `
        <div class="rumor-card ${rumor.isEvent ? 'is-event' : ''} ${debugClass}" 
             data-rumor-id="${rumor.id}"
             data-is-future="${isFuture}"
             style="${debugStyle}">
            ${isFuture ? renderDebugBadge() : ''}
            <div class="rumor-header">
                <div class="rumor-meta">
                    <span class="rumor-date ${isFuture ? 'future-date' : ''}" title="${formatDate(rumor.date)}">
                        ${isFuture ? '🔮 ' : ''}${getRelativeTime(rumor.date)}
                    </span>
                    ${rumor.isEvent ? '<span class="rumor-type-badge event">EVENT</span>' : '<span class="rumor-type-badge rumor">RUMOR</span>'}
                    ${positionBadge}
                </div>
                ${arcBadge}
            </div>
            <h3>${rumor.title}</h3>
            <p class="rumor-description">${rumor.description}</p>
            ${cycleImpact}
            <div class="rumor-effects">
                <h4>Reputation Effects: ${!effectsApply ? '<span class="effects-pending">(Not yet applied)</span>' : ''}</h4>
                <ul>${effectsHTML}</ul>
            </div>
            ${instigatorDisplay}
        </div>
    `;
}

// ============================================
// RENDER: Arc Timeline
// ============================================
function renderArcTimeline(arcId) {
    const allRumors = getRumorsByArc(arcId);
    
    // Filter based on visibility (respect debug mode)
    const rumors = allRumors.filter(r => isContentVisible(r.date));
    
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
                            ${posRumors.map(rumor => {
                                const isFuture = isFutureEvent(rumor.date);
                                const effectsApply = shouldEffectsApply(rumor.date);
                                
                                return `
                                    <div class="timeline-event ${rumor.isEvent ? 'is-event' : ''} ${isFuture ? 'debug-future-event' : ''}"
                                         style="${isFuture ? 'border: 2px dashed #ff4444; background: rgba(255, 68, 68, 0.1);' : ''}">
                                        <div class="event-marker ${isFuture ? 'future-marker' : ''}"></div>
                                        <div class="event-content">
                                            ${isFuture ? '<div class="debug-mini-badge" style="font-size: 0.7em; color: #ff4444; font-weight: bold;">🔮 FUTURE</div>' : ''}
                                            <div class="event-header">
                                                <span class="event-title">${rumor.title}</span>
                                                <span class="event-date ${isFuture ? 'future-date' : ''}">${formatDate(rumor.date)}</span>
                                            </div>
                                            <p class="event-description">${rumor.description.substring(0, 200)}${rumor.description.length > 200 ? '...' : ''}</p>
                                            ${rumor.cycle_impact ? `
                                                <span class="event-impact impact-${rumor.cycle_impact.type}" ${!effectsApply ? 'style="opacity: 0.5;"' : ''}>
                                                    ${rumor.cycle_impact.label} (${rumor.cycle_impact.score > 0 ? '+' : ''}${rumor.cycle_impact.score})
                                                    ${!effectsApply ? ' - Pending' : ''}
                                                </span>
                                            ` : ''}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
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
    
    // Count future events in this arc
    const arcRumors = getRumorsByArc(arc.id);
    const futureCount = arcRumors.filter(r => isFutureEvent(r.date)).length;
    const visibleCount = arcRumors.filter(r => isContentVisible(r.date)).length;
    
    const statusConfig = {
        active: { label: 'Active', icon: '🔥', class: 'status-active' },
        resolved: { label: 'Resolved', icon: '✓', class: 'status-resolved' },
        upcoming: { label: 'Upcoming', icon: '⏳', class: 'status-upcoming' },
        failed: { label: 'Failed', icon: '✗', class: 'status-failed' }
    };
    const status = statusConfig[arc.status] || statusConfig.active;
    
    // Get top faction impacts (only from past events)
    const pastRumors = arcRumors.filter(r => shouldEffectsApply(r.date));
    const appliedImpacts = {};
    pastRumors.forEach(rumor => {
        Object.entries(rumor.effects || {}).forEach(([factionId, value]) => {
            appliedImpacts[factionId] = (appliedImpacts[factionId] || 0) + value;
        });
    });
    
    const topFactions = Object.entries(appliedImpacts)
        .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
        .slice(0, 4);
    
    // Debug badge if arc has future events
    const hasFutureEvents = futureCount > 0 && (window.debugMode || state?.debugMode);
    
    return `
        <div class="arc-card arc-${arc.status} ${hasFutureEvents ? 'has-future-events' : ''}" 
             data-arc-id="${arc.id}"
             style="${hasFutureEvents ? 'border: 2px dashed #ff6b35;' : ''}">
            ${hasFutureEvents ? `
                <div class="arc-debug-notice" style="
                    background: linear-gradient(90deg, #ff6b35, #e74c3c);
                    color: white;
                    padding: 6px 12px;
                    font-size: 0.8em;
                    font-weight: bold;
                    text-align: center;
                    margin: -16px -16px 16px -16px;
                    border-radius: 6px 6px 0 0;
                ">
                    🔮 Contains ${futureCount} future event${futureCount > 1 ? 's' : ''} (Debug Mode)
                </div>
            ` : ''}
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
                <span class="arc-rumor-count">📜 ${visibleCount} Events</span>
                <span class="arc-cycle-score" title="Total Cycle Impact (Applied)">
                    🌀 ${stats.totalCycleImpact.toFixed(1)}
                </span>
            </div>
            
            ${renderArcProgressBar(arc)}
            
            <div class="arc-themes">
                ${arc.themes.map(theme => `<span class="theme-tag theme-${theme}">${theme}</span>`).join('')}
            </div>
            
            ${topFactions.length > 0 ? `
                <div class="arc-faction-impacts">
                    <h4>Applied Impacts:</h4>
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
            ` : '<p class="no-impacts" style="font-style: italic; color: var(--text-secondary);">No effects applied yet.</p>'}
            
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
    
    // Only count visible unassigned rumors
    const unassignedRumors = getUnassignedRumors().filter(r => isContentVisible(r.date));
    const unassignedCount = unassignedRumors.length;
    
    // Count future events (debug mode only)
    const futureCount = LORE_DATA.rumors.filter(r => isFutureEvent(r.date)).length;
    const isDebugMode = window.debugMode === true || state?.debugMode === true;
    
    // Count visible rumors
    const visibleRumorsCount = LORE_DATA.rumors.filter(r => isContentVisible(r.date)).length;
    
    return `
        <div class="rumors-filter-tabs">
            <button class="filter-tab ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">
                All <span class="tab-count">${visibleRumorsCount}</span>
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
            ${isDebugMode ? `
                <button class="filter-tab debug-tab ${currentFilter === 'debug' ? 'active' : ''}" data-filter="debug" style="
                    background: linear-gradient(135deg, #ff6b35, #e74c3c);
                    border-color: #ff4444;
                ">
                    🔮 Future Events <span class="tab-count">${futureCount}</span>
                </button>
            ` : ''}
        </div>
        ${isDebugMode ? `
            <div class="debug-mode-notice" style="
                background: repeating-linear-gradient(45deg, rgba(255, 68, 68, 0.1), rgba(255, 68, 68, 0.1) 10px, transparent 10px, transparent 20px);
                border: 1px solid #ff4444;
                border-radius: 8px;
                padding: 12px 16px;
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
            ">
                <span style="font-size: 1.5em;">⚠️</span>
                <div>
                    <strong style="color: #ff6b35;">Debug Mode Active</strong>
                    <p style="margin: 4px 0 0; font-size: 0.9em; color: var(--text-secondary);">
                        Showing ${futureCount} future event${futureCount !== 1 ? 's' : ''} that haven't occurred yet in-game. 
                        Effects from future events are marked as "Pending" and won't affect reputation calculations.
                    </p>
                </div>
            </div>
        ` : ''}
    `;
}

// ============================================
// RENDER: Summary Stats
// ============================================
function renderSummaryStats() {
    const arcs = Object.values(STORY_ARCS);
    const activeArcs = arcs.filter(a => a.status === 'active');
    
    // Only count visible rumors
    const visibleRumors = LORE_DATA.rumors.filter(r => isContentVisible(r.date));
    const totalRumors = visibleRumors.length;
    const totalEvents = visibleRumors.filter(r => r.isEvent).length;
    
    // Only count cycle impact from past events
    const pastRumors = LORE_DATA.rumors.filter(r => shouldEffectsApply(r.date));
    const appliedCycleImpact = pastRumors.reduce((sum, r) => sum + (r.cycle_impact?.score || 0), 0);
    
    // Pending impact (from future events, debug mode only)
    const futureRumors = LORE_DATA.rumors.filter(r => isFutureEvent(r.date));
    const pendingCycleImpact = futureRumors.reduce((sum, r) => sum + (r.cycle_impact?.score || 0), 0);
    const isDebugMode = window.debugMode === true || state?.debugMode === true;
    
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
                <span class="stat-value">${appliedCycleImpact.toFixed(1)}</span>
                <span class="stat-label">Cycle Impact</span>
            </div>
            ${isDebugMode && pendingCycleImpact !== 0 ? `
                <div class="summary-stat debug-stat" style="border: 1px dashed #ff6b35; background: rgba(255, 107, 53, 0.1);">
                    <span class="stat-value" style="color: #ff6b35;">${pendingCycleImpact > 0 ? '+' : ''}${pendingCycleImpact.toFixed(1)}</span>
                    <span class="stat-label">Pending Impact</span>
                </div>
            ` : ''}
        </div>
    `;
}

// ============================================
// RENDER: Debug-Only Future Events Section
// ============================================
function renderFutureEventsSection() {
    const futureRumors = LORE_DATA.rumors
        .filter(r => isFutureEvent(r.date))
        .sort((a, b) => {
            const dateA = a.date ? a.date.year * 10000 + a.date.monthIndex * 100 + a.date.day : 0;
            const dateB = b.date ? b.date.year * 10000 + b.date.monthIndex * 100 + b.date.day : 0;
            return dateA - dateB; // Chronological order (earliest first)
        });
    
    if (futureRumors.length === 0) {
        return `
            <section class="arc-section">
                <h2 class="section-header" style="color: #ff6b35;">🔮 Future Events</h2>
                <p class="no-rumors">No future events scheduled.</p>
            </section>
        `;
    }
    
    // Group by arc
    const byArc = {};
    const noArc = [];
    
    futureRumors.forEach(rumor => {
        if (rumor.arc && STORY_ARCS[rumor.arc]) {
            if (!byArc[rumor.arc]) byArc[rumor.arc] = [];
            byArc[rumor.arc].push(rumor);
        } else {
            noArc.push(rumor);
        }
    });
    
    return `
        <section class="arc-section future-events-section" style="
            border: 2px dashed #ff6b35;
            border-radius: 12px;
            padding: 20px;
            background: linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(255, 68, 68, 0.05));
        ">
            <h2 class="section-header" style="color: #ff6b35;">
                🔮 Future Events Timeline
                <span style="font-size: 0.6em; opacity: 0.7; margin-left: 12px;">Debug Mode Only</span>
            </h2>
            <p class="section-description" style="color: var(--text-secondary); margin-bottom: 20px;">
                These events haven't occurred yet in-game. Their effects are shown as "Pending" and won't affect current reputation values.
            </p>
            
            ${Object.entries(byArc).map(([arcId, rumors]) => {
                const arc = STORY_ARCS[arcId];
                return `
                    <div class="future-arc-group" style="margin-bottom: 24px;">
                        <h3 style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                            <span>${arc.icon}</span>
                            <span>${arc.name}</span>
                            <span class="rumor-count" style="
                                background: #ff6b35;
                                color: white;
                                padding: 2px 8px;
                                border-radius: 10px;
                                font-size: 0.8em;
                            ">${rumors.length} upcoming</span>
                        </h3>
                        <div class="rumors-grid">
                            ${rumors.map(r => renderRumorCard(r, false)).join('')}
                        </div>
                    </div>
                `;
            }).join('')}
            
            ${noArc.length > 0 ? `
                <div class="future-arc-group" style="margin-bottom: 24px;">
                    <h3 style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                        <span>📋</span>
                        <span>Unassigned Future Events</span>
                        <span class="rumor-count" style="
                            background: #ff6b35;
                            color: white;
                            padding: 2px 8px;
                            border-radius: 10px;
                            font-size: 0.8em;
                        ">${noArc.length} upcoming</span>
                    </h3>
                    <div class="rumors-grid">
                        ${noArc.map(r => renderRumorCard(r, false)).join('')}
                    </div>
                </div>
            ` : ''}
        </section>
    `;
}

// ============================================
// MAIN RENDER FUNCTION
// ============================================
function renderRumors() {
    const container = document.getElementById('rumors-container');
    if (!container) return;

    const arcs = Object.values(STORY_ARCS);
    const isDebugMode = window.debugMode === true || state?.debugMode === true;
    let content = '';
    
    // Add summary and filters
    content += renderSummaryStats();
    content += renderFilterTabs();
    
    // Debug-only: Future Events Tab
    if (currentFilter === 'debug' && isDebugMode) {
        content += renderFutureEventsSection();
        container.innerHTML = content;
        attachEventListeners();
        return;
    }
    
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
        // Filter to only visible unassigned rumors
        const unassigned = getUnassignedRumors().filter(r => isContentVisible(r.date));
        
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
            try { playSound('click.mp3'); } catch (e) {}
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
            try { playSound('click.mp3'); } catch (e) {}
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
            try { playSound('click.mp3'); } catch (e) {}
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
    // Sync debug mode from localStorage
    try {
        window.debugMode = localStorage.getItem('vigilanceDebugMode') === 'true';
    } catch (e) {
        window.debugMode = false;
    }
    
    console.log('[Rumors] Initializing...', { debugMode: window.debugMode });
    renderRumors();
}

init();