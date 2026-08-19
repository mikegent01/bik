// liberated-toads-system.js
// Liberated Toads Command — rebuilt around the Toadslist.xlsx intake.
//
// What changed in the rebuild (see docs/notes/TOADSLIST_INTAKE.md):
//  - The roster is the 75 named toads from the workbook; the old generated
//    150+ roster and the invented cohort machinery (Chroniclers / Crafters /
//    Wardens / Menders / Scouts generators) are gone. Those figures survive
//    only as battle-record context in the timeline.
//  - Governance and voting follow the workbook's seven-position structure:
//    tiers 6+7 elect the Speaker and vote armies into being; the Speaker
//    appoints tiers 3 and 4; tier 3 appoints tier 4, who chooses army leaders;
//    the Spore 5 is rogue; Speaker L was ousted.
//  - Vote records reproduce only tallies that exist in repo sources.
//
// Rendering modules:
//   roster-menu.js        — the Cohort Menu (75 toads, portraits, filters)
//   governance-voting.js  — seven-position structure, voting rules, records
//   legacy-toads-data.js  — canon docket + timeline (days 5–21), preserved

import { loadState } from '../../core/state.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from '../../../data/world/calendar.js';
import {
    TOADSLIST_ROSTER,
    AFFILIATION_META,
    ELECTORATE_SIZE,
    TOADSLIST_SOURCE
} from '../../../data/liberated-toads/toadslist-data.js';
import { ACCOUNTABILITY_DOCKET, FACTION_TIMELINE } from './legacy-toads-data.js';
import { renderCohortMenu } from './roster-menu.js';
import {
    renderGovernanceSection,
    renderVotingSection,
    renderGovernanceGlance,
    renderActiveVotePreview
} from './governance-voting.js';

const CURRENT_DAY = CURRENT_GAME_DATE.day;
const CURRENT_MONTH = CALENDAR_DATA.months.values[CURRENT_GAME_DATE.monthIndex].name;
const CURRENT_YEAR = CURRENT_GAME_DATE.year;
const CURRENT_DATE_STRING = `${CURRENT_MONTH} ${CURRENT_DAY}, ${CURRENT_YEAR} BF`;

// ========================================
// STATE
// ========================================

let appState = {
    roster: [],
    timelineFilter: 7
};

// ========================================
// STATS — computed from the real roster only
// ========================================

function calculateRosterStats(roster) {
    const affiliation = {};
    roster.forEach(t => {
        affiliation[t.affiliation] = (affiliation[t.affiliation] || 0) + 1;
    });
    const tiers = { electorate: 0, appointed: 0, armies: 0, outside: 0 };
    roster.forEach(t => {
        const tier = AFFILIATION_META[t.affiliation]?.tier;
        if (tier === 6 || tier === 7) tiers.electorate++;
        else if (tier === 3 || tier === 4) tiers.appointed++;
        else if (tier === 5) tiers.armies++;
        else tiers.outside++;
    });
    return {
        total: roster.length,
        seen: roster.filter(t => t.seen).length,
        unseen: roster.filter(t => !t.seen).length,
        affiliation,
        tiers
    };
}

function renderFactionStats() {
    const container = document.getElementById('stats-content');
    if (!container) return;
    const stats = calculateRosterStats(TOADSLIST_ROSTER);
    const blocRows = Object.entries(AFFILIATION_META)
        .filter(([key]) => stats.affiliation[key])
        .sort((a, b) => stats.affiliation[b[0]] - stats.affiliation[a[0]]);

    container.innerHTML = `
        <div class="stats-cards-row">
            <div class="stat-card"><div class="stat-value">${stats.total}</div><div class="stat-label">Named Toads</div></div>
            <div class="stat-card"><div class="stat-value">${stats.seen}</div><div class="stat-label">Seen by Players</div></div>
            <div class="stat-card"><div class="stat-value">${ELECTORATE_SIZE}</div><div class="stat-label">Electorate (Tiers 6+7)</div></div>
            <div class="stat-card"><div class="stat-value">${stats.affiliation['Pond Patrol'] || 0}+${stats.affiliation['Spore 5'] || 0}</div><div class="stat-label">Armies (Patrol + Rogue)</div></div>
        </div>

        <div class="stats-bars-section">
            <div class="stat-bar-row">
                <span class="bar-label">Structure spread</span>
                <div class="tier-spread">
                    <span class="tier-pill electorate">Electorate: ${stats.tiers.electorate}</span>
                    <span class="tier-pill appointed">Appointed tiers: ${stats.tiers.appointed}</span>
                    <span class="tier-pill armies">Armies: ${stats.tiers.armies}</span>
                    <span class="tier-pill outside">Outside: ${stats.tiers.outside}</span>
                </div>
            </div>
        </div>

        <div class="level-distribution">
            <h4>Affiliation Strength</h4>
            <div class="level-bars">
                ${blocRows.map(([key, count]) => {
                    const pct = (count / stats.total) * 100;
                    const meta = AFFILIATION_META[key];
                    return `
                        <div class="level-bar-item">
                            <div class="level-label" title="${meta.tierLabel}">${key}</div>
                            <div class="level-bar-track">
                                <div class="level-bar-fill" style="width:${pct}%;background:${meta.color}"></div>
                            </div>
                            <div class="level-count">${count}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <p class="stats-source">source: ${TOADSLIST_SOURCE.file} — ${TOADSLIST_SOURCE.sheets.length} sheets, 75 named individuals</p>
    `;
}

// ========================================
// DOCKET + TIMELINE (canon, preserved)
// ========================================

function renderAccountabilityDocket() {
    const container = document.getElementById('docket-content');
    if (!container) return;
    const docket = ACCOUNTABILITY_DOCKET;

    container.innerHTML = `
        <div class="docket-quote">
            <p>"${docket.quote.text}"</p>
            <cite>— ${docket.quote.speaker}</cite>
        </div>
        <div class="docket-pillars">
            ${docket.pillars.map(p => `
                <div class="pillar">
                    <span class="pillar-icon">${p.icon}</span>
                    <strong>${p.name}</strong>
                    <p>${p.description}</p>
                </div>
            `).join('')}
        </div>
        <div class="docket-protocol">
            <strong>ENGAGEMENT PROTOCOL:</strong> ${docket.protocol}
        </div>
        <div class="docket-targets">
            <h4>Active Targets</h4>
            ${docket.targets.map(target => `
                <div class="docket-target priority-${target.priority} status-${target.status.replace('_', '-')}">
                    <div class="target-header">
                        <span class="target-portrait">${target.portrait}</span>
                        <div class="target-identity">
                            <span class="target-name">${target.name}</span>
                            <div class="target-badges">
                                <span class="priority-badge">${target.priority.toUpperCase()}</span>
                                <span class="status-badge">${target.status.replace('_', ' ').toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                    <div class="target-crimes">
                        <strong>Charges:</strong>
                        <ul>${target.crimes.map(c => `<li>${c}</li>`).join('')}</ul>
                    </div>
                    ${target.evidence ? `
                        <div class="target-evidence">
                            <strong>Evidence:</strong>
                            <ul>${target.evidence.map(e => `<li>${e}</li>`).join('')}</ul>
                        </div>
                    ` : ''}
                    <div class="target-notes">${target.notes}</div>
                    <div class="target-footer">
                        <span class="target-last-seen"><strong>Last Seen:</strong> ${target.last_seen}</span>
                        <span class="target-added"><strong>Added:</strong> ${target.added}</span>
                    </div>
                    ${target.speaker_note ? `
                        <div class="speaker-note">
                            <strong>Speaker L's Note:</strong> "${target.speaker_note}"
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
        ${docket.resolved?.length ? `
            <div class="docket-resolved">
                <h4>Resolved Cases</h4>
                ${docket.resolved.map(r => `
                    <div class="resolved-case">
                        <div class="resolved-header">
                            <span class="resolved-name">${r.name}</span>
                            <span class="resolved-date">${r.date}</span>
                        </div>
                        <div class="resolved-resolution"><strong>Resolution:</strong> ${r.resolution}</div>
                        <div class="resolved-crimes"><strong>Crimes:</strong> ${r.crimes.join(', ')}</div>
                        <div class="resolved-notes">${r.notes}</div>
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    const filtered = appState.timelineFilter > 0
        ? FACTION_TIMELINE.filter(day => day.day >= CURRENT_DAY - appState.timelineFilter)
        : FACTION_TIMELINE;

    container.innerHTML = filtered.map(dayEntry => `
        <div class="timeline-day ${dayEntry.isCurrent ? 'current' : ''}">
            <div class="timeline-marker">${dayEntry.day}</div>
            <div class="timeline-day-content">
                <div class="timeline-day-header">
                    <h4>Day ${dayEntry.day}: ${dayEntry.title}</h4>
                    ${dayEntry.isCurrent ? '<span class="current-badge">CURRENT</span>' : ''}
                </div>
                <div class="timeline-events">
                    ${dayEntry.events.map(event => `
                        <div class="timeline-event severity-${event.severity}">
                            <div class="event-time">${event.time}</div>
                            <div class="event-icon">${event.icon}</div>
                            <div class="event-content">
                                <div class="event-title">${event.title}</div>
                                <div class="event-description">${event.description}</div>
                                ${event.involved ? `<div class="event-involved">Involved: ${event.involved.join(', ')}</div>` : ''}
                            </div>
                            <span class="event-type-badge">${event.type.toUpperCase()}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function setupTimelineFilters() {
    document.querySelectorAll('.timeline-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.timeline-filter-btn').forEach(b => b.classList.toggle('active', b === btn));
            appState.timelineFilter = parseInt(btn.dataset.days, 10) || 0;
            renderTimeline();
        });
    });
}

// ========================================
// INIT
// ========================================

function init() {
    loadState();

    appState.roster = [...TOADSLIST_ROSTER];

    const currentDayEl = document.getElementById('current-day');
    const crewGrid = document.getElementById('crew-grid');
    if (!currentDayEl && !crewGrid) {
        // On a different page (e.g. shop) — data only, no UI.
        return;
    }

    if (currentDayEl) currentDayEl.textContent = CURRENT_DAY;
    const currentDateEl = document.getElementById('current-date');
    if (currentDateEl) currentDateEl.textContent = CURRENT_DATE_STRING;

    const squadStatus = document.getElementById('squad-status');
    if (squadStatus) {
        squadStatus.textContent = 'RESTRUCTURED';
        squadStatus.className = 'status-compromised';
        squadStatus.title = 'Council-of-Seven machinery lapsed; seven-position structure in force';
    }

    renderFactionStats();
    renderGovernanceGlance();
    renderActiveVotePreview();
    renderGovernanceSection();
    renderVotingSection();
    renderAccountabilityDocket();
    renderCohortMenu();
    renderTimeline();
    setupTimelineFilters();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========================================
// EXPORTS (compatibility surface — shop.js imports these)
// ========================================

export function getAllToadsData() {
    return TOADSLIST_ROSTER.map(t => ({
        id: t.id,
        num: t.num,
        name: t.name,
        class: t.affiliation,
        cohort: t.affiliation,
        weapon: t.weapon,
        level: 1,
        xp: 0,
        statusType: 'active',
        isCore: false,
        portrait: '🐸'
    }));
}

export function getPreCalculatedFactionStats() {
    const stats = calculateRosterStats(TOADSLIST_ROSTER);
    return {
        total: stats.total,
        active: stats.total,
        injured: 0,
        critical: 0,
        mia: 0,
        special: 0,
        deceased: 0,
        totalXP: 0,
        averageLevel: 1,
        levelDistribution: { 1: stats.total },
        cohortBreakdown: stats.affiliation,
        classBreakdown: stats.affiliation,
        morale: null,
        loyalty: null,
        combatReadiness: null,
        seen: stats.seen,
        unseen: stats.unseen,
        electorate: ELECTORATE_SIZE
    };
}

export { TOADSLIST_ROSTER, AFFILIATION_META, ACCOUNTABILITY_DOCKET, FACTION_TIMELINE, appState };
