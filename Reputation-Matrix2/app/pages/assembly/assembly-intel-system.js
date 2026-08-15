
import { LORE_DATA, STORY_ARCS, getRumorsByArc, getArcProgress, getArcStats, getUnassignedRumors } from '../../core/lore.js';
import { calculateRumorMetrics } from '../../../data/support/research-data.js';
import { WAHWIRE_POSTS } from '../../../data/assembly/assembly-data.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from '../../../data/world/calendar.js';
import { playSound } from '../../core/common.js';

// ============================================
// STATE
// ============================================
let currentFilter = 'all';
let expandedArcs = new Set();

// ============================================
// DATE UTILITIES
// ============================================
function formatDate(date) {
    if (!date) return 'Ongoing';
    const month = CALENDAR_DATA?.months?.values?.[date.monthIndex];
    return `${month?.name || 'Unknown'} ${date.day}, ${date.year}`;
}

function getRelativeTime(date) {
    if (!date) return 'Ongoing';
    
    const currentTotal = CURRENT_GAME_DATE.year * 365 + CURRENT_GAME_DATE.monthIndex * 30 + CURRENT_GAME_DATE.day;
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
// RENDER: Intel Card
// ============================================
function renderIntelCard(rumor, showArcBadge = true) {
    // Ensure we are looking at the latest WAHWIRE_POSTS (which might be modified by assembly.js)
    const relatedPosts = WAHWIRE_POSTS.filter(post => post.rumorId === rumor.id);
    const chatterCount = relatedPosts.length;
    const metrics = calculateRumorMetrics(rumor, relatedPosts);

    // Badge Logic
    let badgeHTML = '';
    if (metrics.status === 'Viral') badgeHTML = '<span class="intel-badge viral">🔥 VIRAL</span>';
    else if (metrics.status === 'Trending') badgeHTML = '<span class="intel-badge trending">📈 TRENDING</span>';
    else if (metrics.status === 'Legendary') badgeHTML = '<span class="intel-badge legendary">👑 LEGENDARY</span>';
    else if (metrics.status === 'Fading') badgeHTML = '<span class="intel-badge fading">📉 FADING</span>';
    else if (metrics.status === 'Old News') badgeHTML = '<span class="intel-badge old">🕸️ OLD NEWS</span>';
    else if (metrics.status === 'Dead') badgeHTML = '<span class="intel-badge dead">☠️ DEAD</span>';
    else badgeHTML = '<span class="intel-badge active">⚡ ACTIVE</span>';

    // Time Display
    let timeDisplay = "Ongoing";
    if (metrics.daysPassed === 0) timeDisplay = "Started Today";
    else if (metrics.daysPassed === 1) timeDisplay = "Started Yesterday";
    else timeDisplay = `${metrics.daysPassed} Days Active`;

    // Impact Display
    const baseScore = metrics.baseData.score;
    const finalScore = metrics.finalScore.toFixed(2);
    let impactClass = finalScore > 0 ? 'high-impact' : 'low-impact';
    if (Math.abs(finalScore) > 2) impactClass = 'critical-impact';

    // Rep changes
    const effects = rumor.effects || {};
    const repChangesHTML = Object.entries(effects).map(([factionKey, value]) => {
        const faction = LORE_DATA.factions?.[factionKey];
        if (!faction) return '';
        const adjustedValue = Math.round(value * metrics.repMultiplier);
        const changeClass = adjustedValue > 0 ? 'positive' : 'negative';
        const sign = adjustedValue > 0 ? '+' : '';
        return `<li class="rep-change-item"><img src="${faction.logo}" alt="${faction.name}" title="${faction.name}"><span>${faction.name}</span><span class="rep-value ${changeClass}">${sign}${adjustedValue} Rep</span></li>`;
    }).join('');

    const repSectionHTML = repChangesHTML ? `<details class="intel-rep-details"><summary>View Reputation Impact (x${metrics.repMultiplier.toFixed(1)})</summary><ul class="intel-rep-list">${repChangesHTML}</ul></details>` : '';

    // Decay Display
    let decayDisplayHTML = '';
    if (metrics.isFresh) {
        decayDisplayHTML = `<span class="intel-decay decay-paused">Decay: PAUSED (Active Chatter)</span>`;
    } else {
        const lossValue = Math.abs(metrics.decayLoss).toFixed(2);
        if (lossValue > 0.00) {
            decayDisplayHTML = `<span class="intel-decay decay-active">Decay: -${lossValue} Impact</span>`;
        } else {
            decayDisplayHTML = `<span class="intel-decay decay-neutral">Decay: 0</span>`;
        }
    }

    // Instigator
    let instigatorHTML = '';
    if (rumor.instigator) {
        const charData = LORE_DATA.characters?.[rumor.instigator] || LORE_DATA.auxiliary_party?.[rumor.instigator];
        const name = charData ? charData.name : rumor.instigator;
        instigatorHTML = `<span class="instigator-tag">Instigator: ${name} (2x Reputation Effect)</span>`;
    }

    // Arc badge
    const arcBadgeHTML = showArcBadge && rumor.arc && STORY_ARCS?.[rumor.arc]
        ? `<span class="intel-arc-badge" data-arc="${rumor.arc}">${STORY_ARCS[rumor.arc].icon} ${STORY_ARCS[rumor.arc].name}</span>`
        : '';

    // Position badge
    const positionBadge = rumor.arcPosition
        ? `<span class="intel-position-badge position-${rumor.arcPosition}">${rumor.arcPosition}</span>`
        : '';

    // Add dossier-trigger class to make it clickable
    return `
        <div class="intel-card dossier-trigger" data-rumor-id="${rumor.id}" title="Click to view dossier and chatter">
            <div class="intel-card-header">
                <h3 class="intel-title">${rumor.title || 'Untitled Rumor'}</h3>
                <div class="intel-badges">
                    ${badgeHTML}
                    ${positionBadge}
                </div>
            </div>
            ${arcBadgeHTML ? `<div class="intel-arc-row">${arcBadgeHTML}</div>` : ''}
            <div class="intel-meta-row">
                <span class="intel-time">${timeDisplay}</span>
                <span class="intel-impact ${impactClass}">Impact: ${finalScore} (Base: ${baseScore})</span>
            </div>
            <p class="intel-description">${rumor.description}</p>
            ${instigatorHTML}
            ${repSectionHTML}
            <div class="intel-footer">
                <span>Chatter Reports: <span class="chatter-count">${chatterCount}</span></span>
                <span>Hype Factor: x${metrics.hypeFactor.toFixed(1)}</span>
                ${decayDisplayHTML}
            </div>
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
                                const relatedPosts = WAHWIRE_POSTS.filter(p => p.rumorId === rumor.id);
                                const metrics = calculateRumorMetrics(rumor, relatedPosts);
                                return `
                                    <div class="timeline-event dossier-trigger ${rumor.isEvent ? 'is-event' : ''}" data-rumor-id="${rumor.id}" title="Click to view intel details">
                                        <div class="event-marker"></div>
                                        <div class="event-content">
                                            <div class="event-header">
                                                <span class="event-title">${rumor.title}</span>
                                                <span class="event-date">${formatDate(rumor.date)}</span>
                                            </div>
                                            <p class="event-description">${rumor.description.substring(0, 200)}${rumor.description.length > 200 ? '...' : ''}</p>
                                            <div class="event-metrics">
                                                <span class="event-impact impact-${rumor.cycle_impact?.type || 'neutral'}">
                                                    ${rumor.cycle_impact?.label || 'Event'} (${metrics.finalScore.toFixed(1)})
                                                </span>
                                                <span class="view-event-link">👁️ View Dossier</span>
                                            </div>
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
    if (!stats) return '';
    const isExpanded = expandedArcs.has(arc.id);
    const rumors = getRumorsByArc(arc.id);

    // Calculate Max and Min Impact
    let maxImpact = -Infinity;
    let minImpact = Infinity;
    let hasImpactData = false;

    rumors.forEach(rumor => {
        const relatedPosts = WAHWIRE_POSTS.filter(p => p.rumorId === rumor.id);
        const metrics = calculateRumorMetrics(rumor, relatedPosts);
        if (metrics.finalScore > maxImpact) maxImpact = metrics.finalScore;
        if (metrics.finalScore < minImpact) minImpact = metrics.finalScore;
        hasImpactData = true;
    });

    if (!hasImpactData) {
        maxImpact = 0;
        minImpact = 0;
    }

    const statusConfig = {
        active: { label: 'Active', icon: '🔥', class: 'status-active' },
        resolved: { label: 'Resolved', icon: '✓', class: 'status-resolved' },
        upcoming: { label: 'Upcoming', icon: '⏳', class: 'status-upcoming' },
        failed: { label: 'Failed', icon: '✗', class: 'status-failed' }
    };
    const status = statusConfig[arc.status] || statusConfig.active;

    // Generate "Winners & Losers" based on net reputation change
    const sortedFactions = Object.entries(stats.factionImpacts)
        .sort((a, b) => b[1] - a[1]); // Sort descending by value

    const winners = sortedFactions.filter(([, val]) => val > 0).slice(0, 3);
    const losers = sortedFactions.filter(([, val]) => val < 0).reverse().slice(0, 3); // Most negative first

    // Determine Net Cycle Shift Label
    let cycleShiftText = "Stable";
    if (stats.totalCycleImpact > 5) cycleShiftText = "Shift towards Chaos/Crisis";
    else if (stats.totalCycleImpact < -5) cycleShiftText = "Shift towards Order/Peace";
    else if (stats.totalCycleImpact > 0) cycleShiftText = "Leaning Chaotic";
    else if (stats.totalCycleImpact < 0) cycleShiftText = "Leaning Orderly";


    return `
        <div class="arc-card arc-${arc.status}" data-arc-id="${arc.id}">
            <div class="arc-header">
                <div class="arc-icon">${arc.icon}</div>
                <div class="arc-title-section">
                    <h3 class="arc-title">${arc.name}</h3>
                    <span class="arc-status ${status.class}">${status.icon} ${status.label}</span>
                </div>
            </div>
            <p class="arc-description">${arc.description}</p>
            <div class="arc-meta">
                <span class="arc-dates">📅 ${formatDate(arc.startDate)} ${arc.endDate ? `→ ${formatDate(arc.endDate)}` : '→ Ongoing'}</span>
                <span class="arc-rumor-count">📜 ${stats.rumorCount} Events</span>
            </div>
            
            <!-- New Statistics Block -->
            <div class="arc-impact-stats">
                <div class="impact-stat">
                    <span class="impact-label">Max Event Impact</span>
                    <span class="impact-val positive">+${maxImpact.toFixed(2)}</span>
                </div>
                 <div class="impact-stat">
                    <span class="impact-label">Cycle Shift</span>
                    <span class="impact-val ${stats.totalCycleImpact > 0 ? 'negative' : 'positive'}">${stats.totalCycleImpact.toFixed(1)} 🌀</span>
                </div>
                <div class="impact-stat">
                    <span class="impact-label">Min Event Impact</span>
                    <span class="impact-val negative">${minImpact.toFixed(2)}</span>
                </div>
            </div>
            <div class="arc-cycle-shift-text">
                <strong>Impact on World Cycle:</strong> ${cycleShiftText}
            </div>

            ${renderArcProgressBar(arc)}
            <div class="arc-themes">
                ${arc.themes.map(theme => `<span class="theme-tag theme-${theme}">${theme}</span>`).join('')}
            </div>
            
            <div class="arc-consequences">
                <div class="consequences-positive">
                    <h5>🏆 Winners (Net Rep)</h5>
                    <ul>
                        ${winners.length > 0 ? winners.map(([fid, val]) => {
                            const fData = LORE_DATA.factions?.[fid];
                            const fName = fData?.name || fid;
                            const fLogo = fData?.logo ? `<img src="${fData.logo}" class="mini-faction-logo" alt="${fName}">` : '';
                            return `<li>${fLogo}<strong>${fName}</strong> <span class="rep-gain">(+${val})</span></li>`;
                        }).join('') : '<li>None yet.</li>'}
                    </ul>
                </div>
                <div class="consequences-negative">
                    <h5>📉 Losers (Net Rep)</h5>
                    <ul>
                         ${losers.length > 0 ? losers.map(([fid, val]) => {
                            const fData = LORE_DATA.factions?.[fid];
                            const fName = fData?.name || fid;
                            const fLogo = fData?.logo ? `<img src="${fData.logo}" class="mini-faction-logo" alt="${fName}">` : '';
                            return `<li>${fLogo}<strong>${fName}</strong> <span class="rep-loss">(${val})</span></li>`;
                        }).join('') : '<li>None yet.</li>'}
                    </ul>
                </div>
            </div>

            <div class="arc-consequences">
                 <div class="consequences-positive">
                    <h5>✓ Strategic Gains</h5>
                    <ul>${arc.consequences.positive.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
                <div class="consequences-negative">
                    <h5>✗ Strategic Losses</h5>
                    <ul>${arc.consequences.negative.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>
            </div>

            <button class="arc-expand-btn" data-arc="${arc.id}">${isExpanded ? 'Hide Timeline ▲' : 'View Timeline ▼'}</button>
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
    const arcs = Object.values(STORY_ARCS || {});
    const activeCount = arcs.filter(a => a.status === 'active').length;
    const resolvedCount = arcs.filter(a => a.status === 'resolved').length;
    const unassignedCount = getUnassignedRumors().length;
    const totalRumors = LORE_DATA.rumors?.length || 0;

    return `
        <div class="intel-filter-tabs">
            <button class="intel-filter-tab ${currentFilter === 'all' ? 'active' : ''}" data-filter="all">
                All Intel <span class="tab-count">${totalRumors}</span>
            </button>
            <button class="intel-filter-tab ${currentFilter === 'active' ? 'active' : ''}" data-filter="active">
                🔥 Active Arcs <span class="tab-count">${activeCount}</span>
            </button>
            <button class="intel-filter-tab ${currentFilter === 'resolved' ? 'active' : ''}" data-filter="resolved">
                ✓ Resolved <span class="tab-count">${resolvedCount}</span>
            </button>
            <button class="intel-filter-tab ${currentFilter === 'unassigned' ? 'active' : ''}" data-filter="unassigned">
                📋 Misc Intel <span class="tab-count">${unassignedCount}</span>
            </button>
        </div>
    `;
}

// ============================================
// RENDER: Summary Stats
// ============================================
function renderSummaryStats() {
    const arcs = Object.values(STORY_ARCS || {});
    const activeArcs = arcs.filter(a => a.status === 'active');
    const totalRumors = LORE_DATA.rumors?.length || 0;
    const totalEvents = LORE_DATA.rumors?.filter(r => r.isEvent).length || 0;
    const totalCycleImpact = LORE_DATA.rumors?.reduce((sum, r) => sum + (r.cycle_impact?.score || 0), 0) || 0;

    // Calculate total chatter across all rumors based on current WAHWIRE_POSTS
    const totalChatter = LORE_DATA.rumors?.reduce((sum, r) => {
        const related = WAHWIRE_POSTS.filter(p => p.rumorId === r.id).length;
        return sum + related;
    }, 0) || 0;

    return `
        <div class="intel-summary">
            <div class="intel-summary-stat">
                <span class="stat-value">${activeArcs.length}</span>
                <span class="stat-label">Active Arcs</span>
            </div>
            <div class="intel-summary-stat">
                <span class="stat-value">${totalEvents}</span>
                <span class="stat-label">Major Events</span>
            </div>
             <div class="intel-summary-stat">
                <span class="stat-value">${totalChatter}</span>
                <span class="stat-label">Active Chatter</span>
            </div>
            <div class="intel-summary-stat">
                <span class="stat-value">${totalCycleImpact.toFixed(1)}</span>
                <span class="stat-label">Cycle Impact</span>
            </div>
        </div>
    `;
}

// ============================================
// MAIN RENDER
// ============================================
function renderContent() {
    const container = document.getElementById('intel-rumors-container');
    if (!container) return;

    const arcs = Object.values(STORY_ARCS || {});
    let content = '';

    content += renderSummaryStats();
    content += renderFilterTabs();

    // Active Arcs
    if (currentFilter === 'all' || currentFilter === 'active') {
        const activeArcs = arcs.filter(a => a.status === 'active');
        if (activeArcs.length > 0) {
            content += `
                <section class="intel-arc-section">
                    <h3 class="intel-section-header">🔥 Active Story Arcs</h3>
                    <div class="intel-arcs-grid">
                        ${activeArcs.map(arc => renderArcCard(arc)).join('')}
                    </div>
                </section>
            `;
        }
    }

    // Resolved Arcs
    if (currentFilter === 'all' || currentFilter === 'resolved') {
        const resolvedArcs = arcs.filter(a => a.status === 'resolved');
        if (resolvedArcs.length > 0) {
            content += `
                <section class="intel-arc-section">
                    <h3 class="intel-section-header">✓ Resolved Arcs</h3>
                    <div class="intel-arcs-grid">
                        ${resolvedArcs.map(arc => renderArcCard(arc)).join('')}
                    </div>
                </section>
            `;
        }
    }

    // Unassigned Intel
    if (currentFilter === 'unassigned' || currentFilter === 'all') {
        const unassigned = getUnassignedRumors();
        if (unassigned.length > 0) {
            const sortedUnassigned = [...unassigned].sort((a, b) => {
                const dateA = a.date ? a.date.year * 10000 + a.date.monthIndex * 100 + a.date.day : 0;
                const dateB = b.date ? b.date.year * 10000 + b.date.monthIndex * 100 + b.date.day : 0;
                return dateB - dateA;
            });
            content += `
                <section class="intel-arc-section">
                    <h3 class="intel-section-header">📋 Unassigned Intel</h3>
                    <p class="intel-section-description">Standalone events and rumors not yet connected to a major story arc.</p>
                    <div class="intel-cards-grid">
                        ${sortedUnassigned.map(r => renderIntelCard(r, false)).join('')}
                    </div>
                </section>
            `;
        }
    }

    container.innerHTML = content;
    attachEventListeners();
}

// ============================================
// EVENT LISTENERS
// ============================================
function attachEventListeners() {
    // Filter tabs
    document.querySelectorAll('.intel-filter-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            currentFilter = e.target.closest('.intel-filter-tab').dataset.filter;
            if (typeof playSound === 'function') playSound('../../../assets/audio/ui/click.mp3');
            renderContent();
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
            if (typeof playSound === 'function') playSound('../../../assets/audio/ui/click.mp3');
            renderContent();
        });
    });

    // Arc badge clicks
    document.querySelectorAll('.intel-arc-badge').forEach(badge => {
        badge.addEventListener('click', (e) => {
            e.stopPropagation();
            const arcId = e.target.dataset.arc;
            expandedArcs.add(arcId);
            currentFilter = 'all';
            if (typeof playSound === 'function') playSound('../../../assets/audio/ui/click.mp3');
            renderContent();
            setTimeout(() => {
                const arcCard = document.querySelector(`[data-arc-id="${arcId}"]`);
                if (arcCard) arcCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    });
}

// ============================================
// EXPORT
// ============================================
export function renderIntelAndRumors() {
    renderContent();
}
