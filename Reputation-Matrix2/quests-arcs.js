// quests-arcs.js - Arc Selection + Interactive Quest Modal

import { 
    QUEST_DATA, 
    QUEST_STATUS, 
    QUEST_PRIORITY, 
    QUEST_TYPES,
    getQuestProgress,
    getDaysUntilDeadline,
    isQuestUpdatedRecently,
    getUrgentQuests,
    getQuestsByArc
} from './quests-data.js';
import { playSound } from './common.js';
import { LORE_DATA, STORY_ARCS } from './lore.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from './calendar-data.js';

// ============================================
// CONFIGURATION - CUSTOMIZE YOUR IMAGE PATHS
// ============================================
const ARC_IMAGES = {
    shadowfell_estate: { 
        panel: 'assets/images/arcs/shadowfell-estate.png',
        header: 'assets/images/arcs/shadowfell-header.png',
        fallback: 'assets/images/arcs/default-dark.png'
    }, 
    feywild_attic: {
        panel: 'assets/images/arcs/feywild-attic.png',
        header: 'assets/images/arcs/feywild-header.png',
        fallback: 'assets/images/arcs/default-nature.png'
    },
    raventree_manor: { 
        panel: 'assets/images/arcs/raventree-manor.png',
        header: 'assets/images/arcs/raventree-header.png',
        fallback: 'assets/images/arcs/default-ruins.png'
    }
};

const QUEST_TYPE_IMAGES = {
    main: 'assets/images/quests/main-quest-bg.png',
    side: 'assets/images/quests/side-quest-bg.png',
    personal: 'assets/images/quests/personal-quest-bg.png',
    faction: 'assets/images/quests/faction-quest-bg.png',
    rescue: 'assets/images/quests/bounty-quest-bg.png',
    mystery: 'assets/images/quests/wallys_toad.png',
    request: 'assets/images/quests/big_t.png',
    default: 'assets/images/quests/default-quest-bg.png'
};

// ============================================
// STATE
// ============================================
let currentView = 'selection';
let selectedArc = null;
let arcQuestFilter = 'active';
let arcSearchQuery = '';
let allQuestsTab = 'active';
let allQuestsSortMode = 'priority';
let allQuestsArcFilter = 'all';
let allQuestsSearchQuery = '';
let currentModalTab = 'overview';
let currentQuestId = null;
let expandedMilestones = new Set();

// ============================================
// DOM ELEMENTS - Will be initialized after DOM load
// ============================================
let arcSelectionScreen, arcDetailView, allQuestsView, arcPanelsContainer, questModal;

// ============================================
// UTILITIES
// ============================================
function formatDate(date) {
    if (!date) return '';
    if (typeof date === 'string') return date;
    const month = CALENDAR_DATA?.months?.values?.[date.monthIndex];
    return `${month?.name || 'Month'} ${date.day}, ${date.year}`;
}

function formatRelativeDate(date) {
    if (!date) return '';
    const current = CURRENT_GAME_DATE;
    const dateTotal = date.year * 365 + date.monthIndex * 30 + date.day;
    const currentTotal = current.year * 365 + current.monthIndex * 30 + current.day;
    const diff = currentTotal - dateTotal;
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 0) return `In ${Math.abs(diff)} days`;
    if (diff < 7) return `${diff} days ago`;
    return formatDate(date);
}

function formatKey(key) {
    if (!key) return '';
    if (key === 'full_party' || key === 'party') return 'The Party';
    const char = LORE_DATA?.characters?.[key] || LORE_DATA?.auxiliary_party?.[key];
    if (char) return char.name;
    const faction = LORE_DATA?.factions?.[key];
    if (faction) return faction.name;
    const location = LORE_DATA?.locations?.[key];
    if (location) return location.name;
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function formatReward(val) {
    if (typeof val === 'object' && val.min !== undefined) {
        if (val.note) return `${val.min}-${val.max} (${val.note})`;
        return `${val.min}-${val.max}`;
    }
    return val;
}

function normalizeQuestData(quest) {
    let milestones = quest.milestones || [];
    if (!milestones.length && quest.steps) {
        milestones = quest.steps.map(s => ({
            id: s.id,
            title: s.title,
            description: s.description,
            status: s.status,
            goals: s.options ? s.options.map(opt => ({ text: opt, status: 'active' })) : []
        }));
    }

    let priority = quest.priority;
    if (typeof priority === 'string') {
        priority = Object.values(QUEST_PRIORITY).find(p => 
            p.label.toLowerCase() === priority.toLowerCase()
        ) || QUEST_PRIORITY.MEDIUM;
    }
    if (!priority) priority = QUEST_PRIORITY.MEDIUM;

    let type = quest.type;
    if (typeof type === 'string') {
        type = Object.values(QUEST_TYPES).find(t => 
            t.id === type.toLowerCase()
        ) || QUEST_TYPES.REQUEST;
    }
    if (!type) type = QUEST_TYPES.REQUEST;

    let assignees = [...(quest.assignees || [])];
    if (quest.assignee) assignees.push(quest.assignee);
    if (quest.primaryAssignee) assignees.push(quest.primaryAssignee);
    
    const uniqueNames = [...new Set(assignees.map(formatKey).filter(Boolean))];
    const assigneeNames = uniqueNames.length > 0 ? uniqueNames.join(', ') : 'Unassigned';

    const completedMilestones = milestones.filter(m => m.status === 'completed').length;
    const totalMilestones = milestones.length;
    const progress = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0;

    return {
        ...quest,
        milestones,
        priority,
        type,
        assigneeNames,
        assigneeKeys: assignees,
        progress,
        completedMilestones,
        totalMilestones
    };
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const icons = { success: '✓', error: '✗', info: 'ℹ', warning: '⚠' };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// ARC SELECTION SCREEN
// ============================================
function renderArcSelection() {
    currentView = 'selection';
    arcSelectionScreen.hidden = false;
    arcDetailView.hidden = true;
    allQuestsView.hidden = true;

    // Update stats for each arc
    ['shadowfell_estate', 'feywild_attic', 'raventree_manor'].forEach(arcId => {
        const quests = getQuestsByArc(arcId);
        const prefix = arcId.split('_')[0];
        
        // Update panel background image
        const panel = document.querySelector(`.arc-panel[data-arc="${arcId}"]`);
        if (panel && ARC_IMAGES[arcId]) {
            const bgEl = panel.querySelector('.arc-panel-bg');
            if (bgEl) {
                bgEl.style.backgroundImage = `url('${ARC_IMAGES[arcId].panel}')`;
            }
        }
        
        const countEl = document.getElementById(`${prefix}-quest-count`);
        if (countEl) countEl.textContent = quests.length;

        const arc = STORY_ARCS?.[arcId];
        if (arc) {
            const phaseEl = document.getElementById(`${prefix}-phase`);
            if (phaseEl) {
                phaseEl.textContent = `${(arc.currentPhase || 0) + 1}/${arc.phases?.length || 0}`;
            }
        }
    });
}

// ============================================
// ARC DETAIL VIEW
// ============================================
function renderArcDetail(arcId) {
    const arc = STORY_ARCS?.[arcId];
    if (!arc) return;

    currentView = 'arc-detail';
    selectedArc = arcId;
    arcQuestFilter = 'active';
    
    arcSelectionScreen.hidden = true;
    arcDetailView.hidden = false;
    allQuestsView.hidden = true;

    // Update header background image
    const headerBg = document.getElementById('arc-detail-header');
    if (headerBg && ARC_IMAGES[arcId]) {
        headerBg.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('${ARC_IMAGES[arcId].header}')`;
    }

    // Update header content
    document.getElementById('arc-detail-icon').textContent = arc.icon || '📋';
    document.getElementById('arc-detail-name').textContent = arc.name || 'Unknown Arc';
    document.getElementById('arc-detail-tagline').textContent = getArcTagline(arcId);

    // Update stats
    const quests = getQuestsByArc(arcId);
    const completedQuests = quests.filter(q => q.status === QUEST_STATUS.COMPLETED);
    const progress = quests.length > 0 ? Math.round((completedQuests.length / quests.length) * 100) : 0;

    document.getElementById('detail-quest-count').textContent = quests.length;
    document.getElementById('detail-progress').textContent = `${progress}%`;

    // Render components
    renderArcDescription(arc);
    renderPhaseTimeline(arc);
    renderConsequencesPreview(arc);
    renderArcQuests(arcId);
    
    // Reset filter tabs
    document.querySelectorAll('#arc-quest-filters .filter-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('#arc-quest-filters .filter-tab[data-filter="active"]')?.classList.add('active');
}

function getArcTagline(arcId) {
    const taglines = {
        'shadowfell_estate': 'The Vampire\'s Banquet',
        'feywild_attic': 'The Chaos Garden',
        'raventree_manor': 'The Nexus of Ruin'
    };
    return taglines[arcId] || '';
}

function renderArcDescription(arc) {
    const descEl = document.getElementById('arc-description-full');
    if (descEl) {
        descEl.innerHTML = `
            <p>${arc.description || 'No description available.'}</p>
            ${arc.themes?.length ? `
                <div class="arc-themes-inline">
                    ${arc.themes.map(t => `<span class="theme-chip">${t}</span>`).join('')}
                </div>
            ` : ''}
        `;
    }
}

function renderPhaseTimeline(arc) {
    const timelineEl = document.getElementById('phase-timeline');
    if (!timelineEl) return;
    
    if (!arc.phases?.length) {
        timelineEl.innerHTML = '<p class="no-data">No phases defined.</p>';
        return;
    }

    timelineEl.innerHTML = `
        <div class="timeline-track">
            ${arc.phases.map((phase, index) => {
                let status = 'pending';
                if (index < arc.currentPhase) status = 'completed';
                if (index === arc.currentPhase) status = 'active';

                return `
                    <div class="phase-node ${status}" data-phase="${index}">
                        <div class="phase-marker">
                            <span class="phase-number">${index + 1}</span>
                            ${status === 'completed' ? '<span class="phase-check">✓</span>' : ''}
                        </div>
                        <div class="phase-connector"></div>
                        <div class="phase-info">
                            <span class="phase-name">${phase.name}</span>
                            <span class="phase-desc">${phase.description}</span>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderConsequencesPreview(arc) {
    const positiveEl = document.getElementById('positive-consequences');
    const negativeEl = document.getElementById('negative-consequences');
    
    if (positiveEl && arc.consequences?.positive) {
        positiveEl.innerHTML = arc.consequences.positive.map(c => 
            `<li><span class="consequence-icon">✓</span>${c}</li>`
        ).join('');
    }
    if (negativeEl && arc.consequences?.negative) {
        negativeEl.innerHTML = arc.consequences.negative.map(c => 
            `<li><span class="consequence-icon">✗</span>${c}</li>`
        ).join('');
    }
}

function renderArcQuests(arcId) {
    const questListEl = document.getElementById('arc-quest-list');
    if (!questListEl) return;
    
    let quests = getQuestsByArc(arcId);

    // Apply filter
    quests = quests.filter(q => {
        switch (arcQuestFilter) {
            case 'active':
                return [QUEST_STATUS.ACTIVE, QUEST_STATUS.ONGOING].includes(q.status);
            case 'available':
                return [QUEST_STATUS.PENDING, QUEST_STATUS.AVAILABLE].includes(q.status);
            case 'completed':
                return q.status === QUEST_STATUS.COMPLETED;
            default:
                return true;
        }
    });

    // Apply search
    if (arcSearchQuery) {
        const query = arcSearchQuery.toLowerCase();
        quests = quests.filter(q => {
            const searchable = `${q.title} ${q.objective || ''} ${q.description || ''}`.toLowerCase();
            return searchable.includes(query);
        });
    }

    // Sort by priority
    quests.sort((a, b) => {
        const nA = normalizeQuestData(a);
        const nB = normalizeQuestData(b);
        return (nB.priority.level || 0) - (nA.priority.level || 0);
    });

    if (quests.length === 0) {
        questListEl.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📭</div>
                <h3>No Missions Found</h3>
                <p>No missions match your current filters.</p>
            </div>
        `;
        return;
    }

    questListEl.innerHTML = quests.map(rawQuest => {
        const quest = normalizeQuestData(rawQuest);
        const deadline = getDaysUntilDeadline(rawQuest);
        const isUrgent = deadline !== null && deadline <= 3;
        const questImage = QUEST_TYPE_IMAGES[quest.type?.id] || QUEST_TYPE_IMAGES.default;

        return `
            <article class="arc-quest-card priority-${quest.priority.label.toLowerCase()}" 
                     data-quest-id="${quest.id}"
                     style="--quest-bg: url('${questImage}')">
                <div class="quest-card-image" style="background-image: url('${questImage}')"></div>
                <div class="quest-card-overlay"></div>
                <div class="quest-card-content">
                    <div class="quest-card-header">
                        <div class="quest-type-badge" style="color: ${quest.type.color}">
                            ${quest.type.icon} ${quest.type.label}
                        </div>
                        <span class="quest-status-badge ${quest.status}">${quest.status}</span>
                    </div>
                    <h3 class="quest-card-title">${quest.title}</h3>
                    <p class="quest-card-objective">${quest.objective || quest.description || ''}</p>
                    <div class="quest-card-footer">
                        <div class="quest-card-meta">
                            <span class="meta-item">👤 ${quest.assigneeNames.split(',')[0]}</span>
                            ${isUrgent ? `<span class="meta-item urgent">⏰ ${deadline === 0 ? 'Today!' : deadline + 'd'}</span>` : ''}
                        </div>
                        <div class="quest-card-progress">
                            <div class="progress-bar-mini">
                                <div class="progress-fill-mini" style="width: ${quest.progress}%"></div>
                            </div>
                            <span class="progress-text-mini">${quest.progress}%</span>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// ============================================
// ALL QUESTS VIEW
// ============================================
function renderAllQuests() {
    currentView = 'all-quests';
    arcSelectionScreen.hidden = true;
    arcDetailView.hidden = true;
    allQuestsView.hidden = false;

    renderAllQuestsDashboard();
    renderAllQuestsList();
}

function renderAllQuestsDashboard() {
    const rawQuests = Object.values(QUEST_DATA).filter(q => q && q.status);
    const quests = rawQuests.map(q => normalizeQuestData(q));

    const urgent = getUrgentQuests();
    const active = quests.filter(q => [QUEST_STATUS.ACTIVE, QUEST_STATUS.ONGOING].includes(q.status));
    const completed = quests.filter(q => q.status === QUEST_STATUS.COMPLETED);

    // Update stats
    const urgentEl = document.querySelector('#all-stat-urgent .mini-stat-value');
    const activeEl = document.querySelector('#all-stat-active .mini-stat-value');
    if (urgentEl) urgentEl.textContent = urgent.length;
    if (activeEl) activeEl.textContent = active.length;

    // Overall progress
    const overallProgress = quests.length > 0 ? Math.round((completed.length / quests.length) * 100) : 0;
    const progressRing = document.getElementById('overall-progress-ring');
    const progressValue = document.getElementById('overall-progress-value');
    
    if (progressRing) {
        const circumference = 326.73;
        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        const offset = circumference - (overallProgress / 100) * circumference;
        progressRing.style.strokeDashoffset = offset;
    }
    if (progressValue) progressValue.textContent = `${overallProgress}%`;

    // Party workload
    const partyWorkloadEl = document.getElementById('party-workload');
    if (partyWorkloadEl) {
        const partyLoad = {};
        active.forEach(q => {
            (q.assigneeKeys || []).forEach(name => {
                partyLoad[name] = (partyLoad[name] || 0) + 1;
            });
        });

        partyWorkloadEl.innerHTML = Object.entries(partyLoad)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([key, count]) => {
                const char = LORE_DATA?.characters?.[key] || LORE_DATA?.auxiliary_party?.[key];
                return `
                    <div class="party-member ${count > 3 ? 'overloaded' : ''}">
                        <div class="member-avatar">${char?.icon || '👤'}</div>
                        <div class="member-info">
                            <span class="member-name">${char?.name?.split(' ')[0] || formatKey(key)}</span>
                            <span class="member-quest-count">${count} Quest${count !== 1 ? 's' : ''}</span>
                        </div>
                    </div>
                `;
            }).join('');
    }

    updateAllQuestsTabCounts(rawQuests);
}

function updateAllQuestsTabCounts(quests) {
    const counts = {
        active: quests.filter(q => [QUEST_STATUS.ACTIVE, QUEST_STATUS.ONGOING].includes(q.status)).length,
        available: quests.filter(q => [QUEST_STATUS.PENDING, QUEST_STATUS.AVAILABLE].includes(q.status)).length,
        completed: quests.filter(q => q.status === QUEST_STATUS.COMPLETED).length,
        all: quests.length
    };

    document.querySelectorAll('#all-quest-tabs .quest-tab').forEach(tab => {
        const tabKey = tab.dataset.tab;
        const countEl = tab.querySelector('.tab-count');
        if (countEl && counts[tabKey] !== undefined) {
            countEl.textContent = counts[tabKey];
        }
    });
}

function renderAllQuestsList() {
    const container = document.getElementById('all-quest-container');
    const emptyState = document.getElementById('all-empty-state');
    if (!container) return;
    
    let quests = Object.values(QUEST_DATA).filter(q => q && q.status);

    // Tab filter
    quests = quests.filter(q => {
        switch (allQuestsTab) {
            case 'active':
                return [QUEST_STATUS.ACTIVE, QUEST_STATUS.ONGOING].includes(q.status);
            case 'available':
                return [QUEST_STATUS.PENDING, QUEST_STATUS.AVAILABLE].includes(q.status);
            case 'completed':
                return q.status === QUEST_STATUS.COMPLETED;
            default:
                return true;
        }
    });

    // Arc filter
    if (allQuestsArcFilter !== 'all') {
        quests = quests.filter(q => q.arcId === allQuestsArcFilter);
    }

    // Search filter
    if (allQuestsSearchQuery) {
        const query = allQuestsSearchQuery.toLowerCase();
        quests = quests.filter(q => {
            const searchable = `${q.title} ${q.objective || ''} ${q.description || ''}`.toLowerCase();
            return searchable.includes(query);
        });
    }

    // Sort
    quests.sort((a, b) => {
        const nA = normalizeQuestData(a);
        const nB = normalizeQuestData(b);

        switch (allQuestsSortMode) {
            case 'priority':
                return (nB.priority.level || 0) - (nA.priority.level || 0);
            case 'progress':
                return nB.progress - nA.progress;
            case 'deadline':
                const deadlineA = getDaysUntilDeadline(a) ?? 999;
                const deadlineB = getDaysUntilDeadline(b) ?? 999;
                return deadlineA - deadlineB;
            default:
                return 0;
        }
    });

    if (quests.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.hidden = false;
        return;
    }

    if (emptyState) emptyState.hidden = true;
    container.innerHTML = quests.map(rawQuest => renderQuestCard(rawQuest)).join('');
}

function renderQuestCard(rawQuest) {
    const quest = normalizeQuestData(rawQuest);
    const deadline = getDaysUntilDeadline(rawQuest);
    const isUrgent = deadline !== null && deadline <= 3;
    const questImage = QUEST_TYPE_IMAGES[quest.type?.id] || QUEST_TYPE_IMAGES.default;

    return `
        <article class="quest-card priority-${quest.priority.label.toLowerCase()}" 
                 data-quest-id="${quest.id}">
            <div class="card-bg" style="background-image: url('${questImage}')"></div>
            <div class="card-overlay"></div>
            <div class="card-content">
                <div class="card-header">
                    <div class="card-type" style="color: ${quest.type.color}">
                        ${quest.type.icon} ${quest.type.label}
                    </div>
                    <span class="card-status status-${quest.status}">${quest.status}</span>
                </div>
                <h3 class="card-title">${quest.title}</h3>
                <p class="card-objective">${quest.objective || quest.description || ''}</p>
                <div class="card-progress">
                    <div class="card-progress-bar">
                        <div class="card-progress-fill" style="width: ${quest.progress}%"></div>
                    </div>
                    <span class="card-progress-text">${quest.progress}%</span>
                </div>
                <div class="card-footer">
                    <div class="card-meta">
                        <span>👤 ${quest.assigneeNames.split(',')[0]}</span>
                        ${isUrgent ? `<span class="urgent">⏰ ${deadline === 0 ? 'Today!' : deadline + 'd'}</span>` : ''}
                    </div>
                    <div class="card-rewards">
                        ${quest.rewards?.gold ? `<span class="reward gold">💰${formatReward(quest.rewards.gold)}</span>` : ''}
                        ${quest.rewards?.xp ? `<span class="reward xp">⭐${formatReward(quest.rewards.xp)}</span>` : ''}
                    </div>
                </div>
            </div>
        </article>
    `;
}

// ============================================
// INTERACTIVE QUEST MODAL
// ============================================
function openQuestModal(questId) {
    const rawQuest = QUEST_DATA[questId];
    if (!rawQuest) {
        showToast('Quest not found!', 'error');
        return;
    }

    currentQuestId = questId;
    currentModalTab = 'overview';
    expandedMilestones.clear();

    const quest = normalizeQuestData(rawQuest);
    
    // Get modal elements
    const modalContainer = document.querySelector('#quest-modal .modal-container');
    if (!modalContainer) {
        console.error('Modal container not found');
        return;
    }

    // Build complete modal HTML
    modalContainer.innerHTML = buildModalHTML(quest, rawQuest);

    // Show modal
    questModal.classList.add('active');
    questModal.hidden = false;
    document.body.style.overflow = 'hidden';

    // Setup modal interactivity after render
    setupModalInteractivity(quest);
}

function buildModalHTML(quest, rawQuest) {
    const deadline = getDaysUntilDeadline(rawQuest);
    const isUrgent = deadline !== null && deadline <= 3;
    const arc = quest.arcId && STORY_ARCS ? STORY_ARCS[quest.arcId] : null;
    const questImage = QUEST_TYPE_IMAGES[quest.type?.id] || QUEST_TYPE_IMAGES.default;

    return `
        <!-- Modal Header with Image -->
        <div class="modal-hero" style="background-image: linear-gradient(to bottom, transparent, var(--bg-surface)), url('${questImage}')">
            <button class="modal-close" id="modal-close" aria-label="Close">
                <span>✕</span>
            </button>
            <div class="modal-hero-content">
                <div class="modal-badges">
                    <span class="type-badge" style="background: ${quest.type.color}20; color: ${quest.type.color}">
                        ${quest.type.icon} ${quest.type.label}
                    </span>
                    <span class="priority-badge priority-${quest.priority.label.toLowerCase()}">
                        ${quest.priority.icon || '⚡'} ${quest.priority.label}
                    </span>
                    <span class="status-badge status-${quest.status}">${quest.status}</span>
                </div>
                <h2 class="modal-title">${quest.title}</h2>
                ${quest.subtitle ? `<p class="modal-subtitle">${quest.subtitle}</p>` : ''}
            </div>
        </div>

        <!-- Interactive Navigation Tabs -->
        <nav class="modal-nav" id="modal-nav">
            <button class="modal-nav-tab active" data-tab="overview">
                <span class="tab-icon">📋</span>
                <span class="tab-label">Overview</span>
            </button>
            <button class="modal-nav-tab" data-tab="objectives">
                <span class="tab-icon">🎯</span>
                <span class="tab-label">Objectives</span>
                <span class="tab-badge">${quest.milestones.length}</span>
            </button>
            <button class="modal-nav-tab" data-tab="intel">
                <span class="tab-icon">🔍</span>
                <span class="tab-label">Intel</span>
            </button>
            <button class="modal-nav-tab" data-tab="rewards">
                <span class="tab-icon">🎁</span>
                <span class="tab-label">Rewards</span>
            </button>
        </nav>

        <!-- Modal Content Panels -->
        <div class="modal-body" id="modal-body">
            ${buildOverviewPanel(quest, arc, isUrgent, deadline)}
            ${buildObjectivesPanel(quest)}
            ${buildIntelPanel(quest, rawQuest)}
            ${buildRewardsPanel(quest)}
        </div>

        <!-- Modal Footer Actions -->
        <div class="modal-footer">
            <div class="footer-info">
                <span class="footer-date">📅 Added: ${formatDate(quest.dates?.added)}</span>
                ${quest.dates?.updated ? `<span class="footer-date">🔄 Updated: ${formatRelativeDate(quest.dates.updated)}</span>` : ''}
            </div>
            <div class="footer-actions">
                ${arc ? `
                    <button class="action-btn secondary" id="view-arc-btn" data-arc="${quest.arcId}">
                        <span>${arc.icon}</span> View Arc
                    </button>
                ` : ''}
                <button class="action-btn primary" id="track-quest-btn">
                    <span>📌</span> Track Quest
                </button>
            </div>
        </div>
    `;
}

function buildOverviewPanel(quest, arc, isUrgent, deadline) {
    return `
        <div class="modal-panel active" data-panel="overview">
            <!-- Quick Stats -->
            <div class="overview-stats">
                <div class="stat-card">
                    <div class="stat-icon">📊</div>
                    <div class="stat-info">
                        <span class="stat-value">${quest.progress}%</span>
                        <span class="stat-label">Progress</span>
                    </div>
                    <div class="stat-bar">
                        <div class="stat-bar-fill" style="width: ${quest.progress}%"></div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🎯</div>
                    <div class="stat-info">
                        <span class="stat-value">${quest.completedMilestones}/${quest.totalMilestones}</span>
                        <span class="stat-label">Milestones</span>
                    </div>
                </div>
                <div class="stat-card ${isUrgent ? 'urgent' : ''}">
                    <div class="stat-icon">⏰</div>
                    <div class="stat-info">
                        <span class="stat-value">${deadline !== null ? (deadline === 0 ? 'Today!' : deadline + ' days') : '—'}</span>
                        <span class="stat-label">Deadline</span>
                    </div>
                </div>
            </div>

            <!-- Objective -->
            <section class="content-section">
                <h3 class="section-title"><span class="title-icon">📋</span> Mission Objective</h3>
                <div class="objective-card">
                    <p>${quest.objective || 'No objective specified.'}</p>
                </div>
            </section>

            ${quest.urgencyNote ? `
                <div class="alert-banner urgent">
                    <span class="alert-icon">⚠️</span>
                    <span class="alert-text">${quest.urgencyNote}</span>
                </div>
            ` : ''}

            <!-- Description -->
            ${quest.description ? `
                <section class="content-section">
                    <h3 class="section-title"><span class="title-icon">📖</span> Details</h3>
                    <div class="description-card">
                        ${quest.description.replace(/\n/g, '<br>')}
                    </div>
                </section>
            ` : ''}

            <!-- Assignees -->
            <section class="content-section">
                <h3 class="section-title"><span class="title-icon">👥</span> Assigned To</h3>
                <div class="assignee-grid">
                    ${(quest.assigneeKeys || []).map(key => {
                        const char = LORE_DATA?.characters?.[key] || LORE_DATA?.auxiliary_party?.[key];
                        return `
                            <div class="assignee-card" data-character="${key}">
                                <div class="assignee-avatar">${char?.icon || '👤'}</div>
                                <div class="assignee-info">
                                    <span class="assignee-name">${char?.name || formatKey(key)}</span>
                                    <span class="assignee-role">${char?.role || 'Party Member'}</span>
                                </div>
                            </div>
                        `;
                    }).join('') || '<p class="no-data">No one assigned</p>'}
                </div>
            </section>

            <!-- Story Arc Link -->
            ${arc ? `
                <section class="content-section">
                    <h3 class="section-title"><span class="title-icon">🎭</span> Story Arc</h3>
                    <div class="arc-link-card" data-arc="${quest.arcId}">
                        <div class="arc-link-icon">${arc.icon}</div>
                        <div class="arc-link-info">
                            <span class="arc-link-name">${arc.name}</span>
                            <span class="arc-link-phase">Phase ${(arc.currentPhase || 0) + 1} of ${arc.phases?.length || 0}</span>
                        </div>
                        <span class="arc-link-arrow">→</span>
                    </div>
                </section>
            ` : ''}
        </div>
    `;
}

function buildObjectivesPanel(quest) {
    const getMilestoneIcon = (status) => {
        switch(status) {
            case 'completed': return '✅';
            case 'failed': return '❌';
            case 'active': return '🔵';
            case 'locked': return '🔒';
            default: return '⏳';
        }
    };

    return `
        <div class="modal-panel" data-panel="objectives">
            <section class="content-section">
                <h3 class="section-title">
                    <span class="title-icon">🎯</span> 
                    Mission Objectives
                    <span class="title-badge">${quest.completedMilestones}/${quest.totalMilestones} Complete</span>
                </h3>
                
                ${quest.milestones.length > 0 ? `
                    <div class="milestones-list">
                        ${quest.milestones.map((m, index) => `
                            <div class="milestone-item ${m.status || 'pending'}" data-milestone="${index}">
                                <div class="milestone-header">
                                    <div class="milestone-status">
                                        <span class="milestone-icon">${getMilestoneIcon(m.status)}</span>
                                        <span class="milestone-number">#${index + 1}</span>
                                    </div>
                                    <div class="milestone-title-group">
                                        <h4 class="milestone-title">${m.title || 'Objective'}</h4>
                                        ${m.completedDate ? `<span class="milestone-date">${formatDate(m.completedDate)}</span>` : ''}
                                    </div>
                                    <button class="milestone-expand" aria-label="Expand milestone">
                                        <span class="expand-icon">▼</span>
                                    </button>
                                </div>
                                <div class="milestone-body">
                                    <p class="milestone-desc">${(m.description || 'No description').replace(/\n/g, '<br>')}</p>
                                    
                                    ${m.goals?.length ? `
                                        <div class="milestone-goals">
                                            <h5>Sub-goals:</h5>
                                            <ul class="goals-list">
                                                ${m.goals.map(g => `
                                                    <li class="goal-item ${g.status || 'pending'}">
                                                        <span class="goal-checkbox">${g.status === 'completed' ? '☑' : '☐'}</span>
                                                        <span class="goal-text">${g.text}</span>
                                                        ${g.priority ? `<span class="goal-priority ${g.priority}">${g.priority}</span>` : ''}
                                                    </li>
                                                `).join('')}
                                            </ul>
                                        </div>
                                    ` : ''}
                                    
                                    ${m.outcomes?.length ? `
                                        <div class="milestone-outcomes">
                                            <h5>Outcomes:</h5>
                                            <ul>
                                                ${m.outcomes.map(o => `<li>${o}</li>`).join('')}
                                            </ul>
                                        </div>
                                    ` : ''}
                                    
                                    ${m.notes ? `
                                        <div class="milestone-notes">
                                            <strong>Notes:</strong> ${m.notes}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : `
                    <div class="empty-state-mini">
                        <span class="empty-icon">📝</span>
                        <p>No objectives defined for this quest.</p>
                    </div>
                `}
            </section>
        </div>
    `;
}
/**
 * Dynamically builds the Intel panel for a quest modal.
 * This version is adapted to handle categorized NPC and Location data.
 *
 * @param {object} quest - The processed quest data object.
 * @param {object} rawQuest - The original raw quest data.
 * @returns {string} The HTML string for the intel panel.
 */
function buildIntelPanel(quest, rawQuest) {
    // Helper function to format keys into readable titles (e.g., 'side_with_perrius' -> 'Side With Perrius')
    // This function is assumed to exist from your previous code.
    const formatKey = (key) => {
        if (!key) return '';
        return key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    };

    return `
        <div class="modal-panel" data-panel="intel">
            <!-- NPCs Section (Dynamic Groups) -->
            ${quest.npcs && Object.keys(quest.npcs).length > 0 ? `
                <section class="content-section">
                    <h3 class="section-title"><span class="title-icon">👥</span> Key NPCs</h3>
                    <div class="npc-groups">
                        ${Object.entries(quest.npcs).map(([groupKey, npcList]) => {
                            if (!npcList?.length) return '';
                            return `
                                <div class="npc-group">
                                    <h4 class="npc-group-title">
                                        <span class="group-dot"></span> ${formatKey(groupKey)}
                                    </h4>
                                    <div class="npc-chips">
                                        ${npcList.map(npc => {
                                            const npcData = LORE_DATA?.characters?.[npc] || {};
                                            return `
                                                <button class="npc-chip" data-npc="${npc}">
                                                    <span class="npc-avatar">${npcData.icon || '👤'}</span>
                                                    <span class="npc-name">${formatKey(npc)}</span>
                                                </button>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </section>
            ` : ''}

            <!-- Locations Section (Dynamic Groups) -->
            ${quest.locations && Object.keys(quest.locations).length > 0 ? `
                ${Object.entries(quest.locations).map(([regionKey, locationList]) => {
                    if (!locationList?.length) return '';
                    return `
                        <section class="content-section">
                            <h3 class="section-title"><span class="title-icon">📍</span> ${formatKey(regionKey)}</h3>
                            <div class="locations-grid">
                                ${locationList.map(loc => `
                                    <div class="location-card">
                                        <div class="location-marker">📌</div>
                                        <div class="location-info">
                                            <span class="location-name">${formatKey(loc)}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </section>
                    `;
                }).join('')}
            ` : ''}
            
            <!-- Hints Section -->
            ${quest.hints?.length ? `
                <section class="content-section">
                    <h3 class="section-title"><span class="title-icon">💡</span> Intel & Hints</h3>
                    <div class="hints-list">
                        ${quest.hints.map((hint, i) => `
                            <div class="hint-card" data-hint="${i}">
                                <span class="hint-icon">💡</span>
                                <p class="hint-text">${hint}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            <!-- Consequences / Possible Outcomes Section (NEW DYNAMIC LOGIC) -->
            ${quest.consequences ? `
                <section class="content-section">
                    <h3 class="section-title"><span class="title-icon">⚡</span> Possible Outcomes</h3>
                    <div class="outcomes-list">
                        ${Object.entries(quest.consequences).map(([outcomeKey, details]) => `
                            <div class="outcome-card">
                                <h4 class="outcome-title">${formatKey(outcomeKey)}</h4>
                                <div class="outcome-details">
                                    ${details.action ? `
                                        <div class="outcome-detail action">
                                            <span class="detail-icon">🎯</span>
                                            <div class="detail-content">
                                                <span class="detail-label">Action Required</span>
                                                <p>${details.action}</p>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${details.result ? `
                                        <div class="outcome-detail result">
                                            <span class="detail-icon">➡️</span>
                                            <div class="detail-content">
                                                <span class="detail-label">Probable Result</span>
                                                <p>${details.result}</p>
                                            </div>
                                        </div>
                                    ` : ''}
                                    ${details.cost ? `
                                        <div class="outcome-detail cost">
                                            <span class="detail-icon">⚖️</span>
                                            <div class="detail-content">
                                                <span class="detail-label">The Cost</span>
                                                <p>${details.cost}</p>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
            ` : ''}

            <!-- Related Quests Section -->
            ${quest.relatedQuests?.length ? `
                <section class="content-section">
                    <h3 class="section-title"><span class="title-icon">🔗</span> Related Quests</h3>
                    <div class="related-quests-list">
                        ${quest.relatedQuests.map(qId => {
                            const rq = QUEST_DATA[qId];
                            if (!rq) return '';
                            const normalized = normalizeQuestData(rq); // Assumes this function exists
                            return `
                                <button class="related-quest-card" data-quest-id="${qId}">
                                    <span class="related-type" style="color: ${normalized.type.color}">${normalized.type.icon}</span>
                                    <span class="related-title">${normalized.title}</span>
                                    <span class="related-status status-${normalized.status}">${normalized.status}</span>
                                </button>
                            `;
                        }).join('')}
                    </div>
                </section>
            ` : ''}

            <!-- Empty State Check -->
            ${!quest.npcs && !quest.locations && !quest.hints?.length && !quest.consequences && !quest.relatedQuests?.length ? `
                <div class="empty-state-mini">
                    <span class="empty-icon">🔍</span>
                    <p>No additional intel available for this quest.</p>
                </div>
            ` : ''}
        </div>
    `;
}

function buildRewardsPanel(quest) {
    const hasRewards = quest.rewards && (quest.rewards.gold || quest.rewards.xp || quest.rewards.guaranteed?.length || quest.rewards.conditional?.length);

    // Expanded icon map to handle all reward types, including from conditional rewards
    const typeIcons = {
        item: '📦', 
        reputation: '📈', 
        ally: '🤝', 
        intel: '🔍', 
        unlock: '🔓', 
        trait: '⚡',
        boon: '✨', 
        knowledge: '📚',
        tactical: '🗺️',
        variable: '🎲',
        legendary: '🏆'
    };

    return `
        <div class="modal-panel" data-panel="rewards">
            ${hasRewards ? `
                <!-- Base Rewards -->
                ${quest.rewards.gold || quest.rewards.xp ? `
                    <section class="content-section">
                        <h3 class="section-title"><span class="title-icon">💎</span> Base Rewards</h3>
                        <div class="base-rewards">
                            ${quest.rewards.gold ? `
                                <div class="reward-card gold">
                                    <div class="reward-icon">💰</div>
                                    <div class="reward-info">
                                        <span class="reward-value">${formatReward(quest.rewards.gold)}</span>
                                        <span class="reward-label">Gold</span>
                                    </div>
                                </div>
                            ` : ''}
                            ${quest.rewards.xp ? `
                                <div class="reward-card xp">
                                    <div class="reward-icon">⭐</div>
                                    <div class="reward-info">
                                        <span class="reward-value">${formatReward(quest.rewards.xp)}</span>
                                        <span class="reward-label">Experience</span>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </section>
                ` : ''}

                <!-- Guaranteed Rewards -->
                ${quest.rewards.guaranteed?.length ? `
                    <section class="content-section">
                        <h3 class="section-title"><span class="title-icon">🎁</span> Guaranteed Rewards</h3>
                        <div class="rewards-grid">
                            ${quest.rewards.guaranteed.map(r => {
                                if (!r) return '';
                                return `
                                    <div class="reward-item-card ${r.type || ''}">
                                        <span class="reward-item-icon">${typeIcons[r.type] || '🎁'}</span>
                                        <div class="reward-item-info">
                                            <span class="reward-item-name">${r.name || r.type || 'Reward'}</span>
                                            ${r.description ? `<span class="reward-item-desc">${r.description}</span>` : ''}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </section>
                ` : ''}

                <!-- Conditional Rewards -->
                ${quest.rewards.conditional?.length ? `
                    <section class="content-section">
                        <h3 class="section-title"><span class="title-icon">🔮</span> Conditional Rewards</h3>
                        <div class="conditional-rewards">
                            ${quest.rewards.conditional.map(cr => {
                                if (!cr?.reward) return '';
                                const reward = cr.reward;
                                const rewardIcon = typeIcons[reward.type] || '🎯'; // Default icon
                                return `
                                    <div class="conditional-card ${cr.status || ''}">
                                        <div class="condition-header">
                                            <span class="condition-if">IF:</span>
                                            <span class="condition-text">${cr.condition}</span>
                                            ${cr.status ? `<span class="condition-status status-${cr.status}">${cr.status}</span>` : ''}
                                        </div>
                                        <div class="condition-then">
                                            <span class="then-arrow">→</span>
                                            <span class="then-reward-icon">${rewardIcon}</span>
                                            <div class="then-reward-info">
                                                <span class="then-reward">${reward.name || 'Reward'}</span>
                                                ${reward.description ? `<span class="then-desc">${reward.description}</span>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </section>
                ` : ''}
            ` : `
                <div class="empty-state-mini">
                    <span class="empty-icon">🎁</span>
                    <p>No rewards specified for this quest.</p>
                </div>
            `}
        </div>
    `;
}
function setupModalInteractivity(quest) {
    const modal = document.getElementById('quest-modal');
    if (!modal) return;

    // Tab Navigation
    const navTabs = modal.querySelectorAll('.modal-nav-tab');
    const panels = modal.querySelectorAll('.modal-panel');

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPanel = tab.dataset.tab;
            
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            panels.forEach(p => {
                p.classList.toggle('active', p.dataset.panel === targetPanel);
            });
            
            currentModalTab = targetPanel;
            playSound?.('click.mp3');
        });
    });

    // Milestone Expansion
    modal.querySelectorAll('.milestone-item').forEach(item => {
        const header = item.querySelector('.milestone-header');
        const body = item.querySelector('.milestone-body');
        const expandBtn = item.querySelector('.milestone-expand');
        
        if (header && body) {
            header.addEventListener('click', (e) => {
                if (e.target.closest('.milestone-expand')) return;
                toggleMilestone(item);
            });
            
            if (expandBtn) {
                expandBtn.addEventListener('click', () => toggleMilestone(item));
            }
        }
    });

    // Related Quest Navigation
    modal.querySelectorAll('.related-quest-card').forEach(card => {
        card.addEventListener('click', () => {
            const questId = card.dataset.questId;
            if (questId && QUEST_DATA[questId]) {
                playSound?.('click.mp3');
                openQuestModal(questId);
            }
        });
    });

    // Arc Link Navigation
    modal.querySelectorAll('.arc-link-card, #view-arc-btn').forEach(el => {
        el.addEventListener('click', () => {
            const arcId = el.dataset.arc;
            if (arcId) {
                closeModal();
                setTimeout(() => renderArcDetail(arcId), 300);
            }
        });
    });

    // Close Button
    modal.querySelector('#modal-close')?.addEventListener('click', closeModal);

    // Track Quest Button
    modal.querySelector('#track-quest-btn')?.addEventListener('click', () => {
        showToast(`Now tracking: ${quest.title}`, 'success');
        playSound?.('success.mp3');
    });

    // NPC Chips (could open character modal)
    modal.querySelectorAll('.npc-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const npcKey = chip.dataset.npc;
            showToast(`Viewing: ${formatKey(npcKey)}`, 'info');
            // Could open a character modal here
        });
    });

    // Assignee Cards
    modal.querySelectorAll('.assignee-card').forEach(card => {
        card.addEventListener('click', () => {
            const charKey = card.dataset.character;
            showToast(`Character: ${formatKey(charKey)}`, 'info');
        });
    });
}

function toggleMilestone(item) {
    const index = item.dataset.milestone;
    const isExpanded = item.classList.contains('expanded');
    
    if (isExpanded) {
        item.classList.remove('expanded');
        expandedMilestones.delete(index);
    } else {
        item.classList.add('expanded');
        expandedMilestones.add(index);
    }
    
    playSound?.('click.mp3');
}

function closeModal() {
    if (!questModal) return;
    questModal.classList.remove('active');
    setTimeout(() => {
        questModal.hidden = true;
        document.body.style.overflow = '';
    }, 300);
}

// ============================================
// EVENT HANDLERS
// ============================================
function setupEventListeners() {
    // Arc Panel Clicks
    arcPanelsContainer?.addEventListener('click', (e) => {
        const panel = e.target.closest('.arc-panel');
        if (panel) {
            playSound?.('click.mp3');
            const arcId = panel.dataset.arc;
            renderArcDetail(arcId);
        }
    });

    // Arc Panel Keyboard
    arcPanelsContainer?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const panel = e.target.closest('.arc-panel');
            if (panel) {
                e.preventDefault();
                playSound?.('click.mp3');
                renderArcDetail(panel.dataset.arc);
            }
        }
    });

    // View All Quests
    document.getElementById('view-all-quests')?.addEventListener('click', () => {
        playSound?.('click.mp3');
        renderAllQuests();
    });

    // Back Buttons
    document.getElementById('back-to-selection')?.addEventListener('click', () => {
        playSound?.('click.mp3');
        renderArcSelection();
    });

    document.getElementById('back-to-selection-from-all')?.addEventListener('click', () => {
        playSound?.('click.mp3');
        renderArcSelection();
    });

    // Arc Quest Filter Tabs
    document.getElementById('arc-quest-filters')?.addEventListener('click', (e) => {
        const tab = e.target.closest('.filter-tab');
        if (tab) {
            playSound?.('click.mp3');
            document.querySelectorAll('#arc-quest-filters .filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            arcQuestFilter = tab.dataset.filter;
            renderArcQuests(selectedArc);
        }
    });

    // Arc Quest Search
    document.getElementById('arc-quest-search')?.addEventListener('input', (e) => {
        arcSearchQuery = e.target.value;
        renderArcQuests(selectedArc);
    });

    // Arc Quest Card Clicks
    document.getElementById('arc-quest-list')?.addEventListener('click', (e) => {
        const card = e.target.closest('.arc-quest-card');
        if (card) {
            playSound?.('click.mp3');
            openQuestModal(card.dataset.questId);
        }
    });

    // All Quests Tab Clicks
    document.getElementById('all-quest-tabs')?.addEventListener('click', (e) => {
        const tab = e.target.closest('.quest-tab');
        if (tab) {
            playSound?.('click.mp3');
            document.querySelectorAll('#all-quest-tabs .quest-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            allQuestsTab = tab.dataset.tab;
            renderAllQuestsList();
        }
    });

    // All Quests Filters
    document.getElementById('all-sort-select')?.addEventListener('change', (e) => {
        allQuestsSortMode = e.target.value;
        renderAllQuestsList();
    });

    document.getElementById('all-arc-filter')?.addEventListener('change', (e) => {
        allQuestsArcFilter = e.target.value;
        renderAllQuestsList();
    });

    document.getElementById('all-quest-search')?.addEventListener('input', (e) => {
        allQuestsSearchQuery = e.target.value;
        renderAllQuestsList();
    });

    // All Quests Card Clicks
    document.getElementById('all-quest-container')?.addEventListener('click', (e) => {
        const card = e.target.closest('.quest-card');
        if (card) {
            playSound?.('click.mp3');
            openQuestModal(card.dataset.questId);
        }
    });

    // Modal Overlay Click to Close
    questModal?.addEventListener('click', (e) => {
        if (e.target === questModal) closeModal();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (questModal?.classList.contains('active')) {
                closeModal();
            } else if (currentView === 'arc-detail') {
                renderArcSelection();
            } else if (currentView === 'all-quests') {
                renderArcSelection();
            }
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    // Get DOM elements after load
    arcSelectionScreen = document.getElementById('arc-selection-screen');
    arcDetailView = document.getElementById('arc-detail-view');
    allQuestsView = document.getElementById('all-quests-view');
    arcPanelsContainer = document.getElementById('arc-panels-container');
    questModal = document.getElementById('quest-modal');

    if (!arcSelectionScreen) {
        console.error('Arc selection screen not found');
        return;
    }

    renderArcSelection();
    setupEventListeners();
    
    console.log('Quest Arc System initialized');
}

// Wait for DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}