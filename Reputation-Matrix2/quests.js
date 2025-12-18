// quests.js - Redesigned Quest System with Tabs, Grid, and Modal

import { 
    QUEST_DATA, 
    QUEST_STATUS, 
    QUEST_PRIORITY, 
    QUEST_TYPES,
    DIFFICULTY,
    getQuestProgress,
    getDaysUntilDeadline,
    isQuestUpdatedRecently,
    getUrgentQuests
} from './quests-data.js';
import { playSound } from './common.js';
import { state } from './state.js';
import { LORE_DATA, STORY_ARCS } from './lore.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from './calendar-data.js';

// ============================================
// DOM ELEMENTS
// ============================================
const questContainer = document.getElementById('quest-container');
const questTabs = document.getElementById('quest-tabs');
const filterBar = document.getElementById('filter-bar');
const questModal = document.getElementById('quest-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const emptyState = document.getElementById('empty-state');

// Dashboard Elements
const statUrgent = document.getElementById('stat-urgent');
const statActive = document.getElementById('stat-active');
const statComplete = document.getElementById('stat-complete');
const overallProgressRing = document.getElementById('overall-progress-ring');
const overallProgressValue = document.getElementById('overall-progress-value');
const partyWorkload = document.getElementById('party-workload');
const urgentAlertCard = document.getElementById('urgent-alert-card');
const urgentAlertTitle = document.getElementById('urgent-alert-title');
const urgentAlertSubtitle = document.getElementById('urgent-alert-subtitle');
const assigneeFilter = document.getElementById('assignee-filter');

// ============================================
// STATE
// ============================================
let currentTab = 'active';
let sortMode = 'priority';
let typeFilter = 'all';
let assigneeFilterValue = 'all';
let searchQuery = '';

// ============================================
// DATE UTILITIES
// ============================================
function formatDate(date) {
    if (!date) return 'Unknown';
    if (typeof date === 'string') return date;
    const month = CALENDAR_DATA?.months?.values?.[date.monthIndex];
    return `${month?.name || 'Month'} ${date.day}, ${date.year}`;
}

function formatRelativeDate(date) {
    if (!date) return '';
    if (typeof date === 'string') return date;
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

// ============================================
// DATA NORMALIZATION
// ============================================
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
        priority = Object.values(QUEST_PRIORITY).find(p => p.label.toLowerCase() === priority.toLowerCase()) || QUEST_PRIORITY.MEDIUM;
    }
    if (!priority) priority = QUEST_PRIORITY.MEDIUM;

    let type = quest.type;
    if (typeof type === 'string') {
        type = Object.values(QUEST_TYPES).find(t => t.id === type.toLowerCase()) || QUEST_TYPES.REQUEST;
    }
    if (!type) type = QUEST_TYPES.REQUEST;

    const formatName = (key) => {
        if (!key) return null;
        if (key === 'full_party' || key === 'party') return 'The Party';
        if (key === 'the' || key === 'The') return null;
        const char = LORE_DATA?.characters?.[key] || LORE_DATA?.auxiliary_party?.[key];
        if (char) return char.name;
        const faction = LORE_DATA?.factions?.[key];
        if (faction) return faction.name;
        return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    };

    let assignees = quest.assignees || [];
    if (quest.assignee) assignees.push(quest.assignee);
    if (quest.primaryAssignee) assignees.push(quest.primaryAssignee);
    
    const uniqueNames = [...new Set(assignees.map(formatName).filter(Boolean))];
    const assigneeNames = uniqueNames.length > 0 ? uniqueNames.join(', ') : 'Unassigned';

    // Calculate progress
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

// ============================================
// FILTERING & SORTING
// ============================================
function getQuestsByTab(quests, tab) {
    switch (tab) {
        case 'active':
            return quests.filter(q => [QUEST_STATUS.ACTIVE, QUEST_STATUS.ONGOING].includes(q.status));
        case 'available':
            return quests.filter(q => [QUEST_STATUS.PENDING, QUEST_STATUS.AVAILABLE, QUEST_STATUS.PAUSED].includes(q.status));
        case 'completed':
            return quests.filter(q => q.status === QUEST_STATUS.COMPLETED);
        case 'failed':
            return quests.filter(q => [QUEST_STATUS.FAILED, QUEST_STATUS.EXPIRED].includes(q.status));
        case 'all':
        default:
            return quests;
    }
}

function applyFilters(quests) {
    return quests.filter(q => {
        // Type filter
        if (typeFilter !== 'all') {
            const questType = q.type?.id || q.category?.toLowerCase() || '';
            if (!questType.includes(typeFilter)) return false;
        }

        // Assignee filter
        if (assigneeFilterValue !== 'all') {
            const assignees = [...(q.assignees || []), q.primaryAssignee, q.assignee].filter(Boolean);
            if (!assignees.includes(assigneeFilterValue)) return false;
        }

        // Search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const searchable = `${q.title} ${q.objective || ''} ${q.description || ''}`.toLowerCase();
            if (!searchable.includes(query)) return false;
        }

        return true;
    });
}

function sortQuests(quests) {
    const statusOrder = {
        [QUEST_STATUS.ACTIVE]: 1,
        [QUEST_STATUS.ONGOING]: 2,
        [QUEST_STATUS.PENDING]: 3,
        [QUEST_STATUS.AVAILABLE]: 4,
        [QUEST_STATUS.PAUSED]: 5,
        [QUEST_STATUS.COMPLETED]: 6,
        [QUEST_STATUS.FAILED]: 7,
        [QUEST_STATUS.EXPIRED]: 8,
        [QUEST_STATUS.NPCCOMPLETED]: 9
    };

    return [...quests].sort((a, b) => {
        const nA = normalizeQuestData(a);
        const nB = normalizeQuestData(b);

        switch (sortMode) {
            case 'priority':
                const priorityDiff = (nB.priority.level || 0) - (nA.priority.level || 0);
                if (priorityDiff !== 0) return priorityDiff;
                break;
            case 'progress':
                return nB.progress - nA.progress;
            case 'deadline':
                const deadlineA = getDaysUntilDeadline(a) ?? 999;
                const deadlineB = getDaysUntilDeadline(b) ?? 999;
                return deadlineA - deadlineB;
            case 'date':
                // Sort by most recently updated/added
                break;
        }

        const statusDiff = (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
        if (statusDiff !== 0) return statusDiff;

        return a.title.localeCompare(b.title);
    });
}

// ============================================
// RENDER: Quest Card (Compact Grid Version)
// ============================================
function renderQuestCard(rawQuest) {
    const quest = normalizeQuestData(rawQuest);
    const deadline = getDaysUntilDeadline(rawQuest);
    const isUrgent = deadline !== null && deadline <= 3;
    const isUpdated = isQuestUpdatedRecently(rawQuest, 2);

    const goldReward = quest.rewards?.gold;
    const xpReward = quest.rewards?.xp;

    const formatReward = (val) => {
        if (typeof val === 'object' && val.min !== undefined) return `${val.min}-${val.max}`;
        return val;
    };

    return `
        <article class="quest-card priority-${quest.priority.label.toLowerCase()} ${isUrgent ? 'is-urgent' : ''} ${isUpdated ? 'is-updated' : ''}" 
                 data-quest-id="${quest.id}">
            
            <div class="card-header">
                <div class="card-title-section">
                    <div class="card-type" style="color: ${quest.type.color}">
                        ${quest.type.icon} ${quest.type.label}
                    </div>
                    <h3 class="card-title">${quest.title}</h3>
                </div>
                <span class="card-status status-${quest.status}">${quest.status}</span>
            </div>

            <p class="card-objective">${quest.objective || quest.description || 'No objective specified.'}</p>

            <div class="card-progress">
                <div class="card-progress-bar">
                    <div class="card-progress-fill" style="width: ${quest.progress}%"></div>
                </div>
                <span class="card-progress-text">${quest.progress}%</span>
            </div>

            <div class="card-footer">
                <div class="card-meta">
                    <span class="card-assignee">👤 ${quest.assigneeNames.split(',')[0]}</span>
                    ${isUrgent ? `<span class="card-deadline">⏰ ${deadline === 0 ? 'Today!' : deadline + 'd'}</span>` : ''}
                </div>
                <div class="card-rewards">
                    ${goldReward ? `<span class="reward-badge">💰 ${formatReward(goldReward)}</span>` : ''}
                    ${xpReward ? `<span class="reward-badge xp">⭐ ${formatReward(xpReward)}</span>` : ''}
                </div>
            </div>
        </article>
    `;
}

// ============================================
// RENDER: Quest Grid
// ============================================
function renderQuests() {
    if (!questContainer) return;

    let quests = Object.values(QUEST_DATA).filter(q => q && q.status);
    quests = getQuestsByTab(quests, currentTab);
    quests = applyFilters(quests);
    quests = sortQuests(quests);

    if (quests.length === 0) {
        questContainer.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    questContainer.innerHTML = quests.map(renderQuestCard).join('');
}

// ============================================
// RENDER: Dashboard Stats
// ============================================
function renderDashboard() {
    const quests = Object.values(QUEST_DATA).filter(q => q && q.status);
    const urgent = getUrgentQuests();
    const active = quests.filter(q => [QUEST_STATUS.ACTIVE, QUEST_STATUS.ONGOING].includes(q.status));
    const completed = quests.filter(q => q.status === QUEST_STATUS.COMPLETED);
    const total = quests.length;

    // Header Stats
    if (statUrgent) statUrgent.querySelector('.mini-stat-value').textContent = urgent.length;
    if (statActive) statActive.querySelector('.mini-stat-value').textContent = active.length;
    if (statComplete) statComplete.querySelector('.mini-stat-value').textContent = completed.length;

    // Overall Progress Ring
    const overallProgress = total > 0 ? Math.round((completed.length / total) * 100) : 0;
    if (overallProgressRing) {
        const circumference = 326.73; // 2 * PI * 52
        const offset = circumference - (overallProgress / 100) * circumference;
        overallProgressRing.style.strokeDashoffset = offset;
    }
    if (overallProgressValue) {
        overallProgressValue.textContent = `${overallProgress}%`;
    }

    // Party Workload
    if (partyWorkload && state.party) {
        const partyLoad = {};
        state.party.forEach(p => partyLoad[p] = 0);
        
        active.forEach(q => {
            if (q.assignees) {
                q.assignees.forEach(a => {
                    if (partyLoad[a] !== undefined) partyLoad[a]++;
                });
            }
            if (q.primaryAssignee && partyLoad[q.primaryAssignee] !== undefined) {
                partyLoad[q.primaryAssignee]++;
            }
        });

        partyWorkload.innerHTML = Object.entries(partyLoad).map(([key, count]) => {
            const char = LORE_DATA?.characters?.[key];
            const name = char?.name?.split(' ')[0] || key;
            const emoji = char?.icon || '👤';
            const isOverloaded = count > 4;

            return `
                <div class="party-member ${isOverloaded ? 'overloaded' : ''}">
                    <div class="member-avatar">${emoji}</div>
                    <div class="member-info">
                        <span class="member-name">${name}</span>
                        <span class="member-quest-count">${count}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Urgent Alert
    if (urgentAlertCard) {
        if (urgent.length > 0) {
            urgentAlertCard.classList.add('has-urgent');
            urgentAlertTitle.textContent = `${urgent.length} Critical Mission${urgent.length > 1 ? 's' : ''}`;
            urgentAlertSubtitle.textContent = urgent[0]?.title || 'Requires immediate attention';
        } else {
            urgentAlertCard.classList.remove('has-urgent');
            urgentAlertTitle.textContent = 'No Critical Missions';
            urgentAlertSubtitle.textContent = 'All operations nominal';
        }
    }

    // Update Tab Counts
    updateTabCounts(quests);

    // Populate Assignee Filter
    populateAssigneeFilter();
}

function updateTabCounts(quests) {
    const counts = {
        active: quests.filter(q => [QUEST_STATUS.ACTIVE, QUEST_STATUS.ONGOING].includes(q.status)).length,
        available: quests.filter(q => [QUEST_STATUS.PENDING, QUEST_STATUS.AVAILABLE, QUEST_STATUS.PAUSED].includes(q.status)).length,
        completed: quests.filter(q => q.status === QUEST_STATUS.COMPLETED).length,
        failed: quests.filter(q => [QUEST_STATUS.FAILED, QUEST_STATUS.EXPIRED].includes(q.status)).length,
        all: quests.length
    };

    document.querySelectorAll('.quest-tab').forEach(tab => {
        const tabKey = tab.dataset.tab;
        const countEl = tab.querySelector('.tab-count');
        if (countEl && counts[tabKey] !== undefined) {
            countEl.textContent = counts[tabKey];
        }
    });
}

function populateAssigneeFilter() {
    if (!assigneeFilter) return;

    const allAssignees = new Set();
    Object.values(QUEST_DATA).forEach(q => {
        q.assignees?.forEach(a => allAssignees.add(a));
        if (q.primaryAssignee) allAssignees.add(q.primaryAssignee);
    });

    const options = ['<option value="all">Everyone</option>'];
    allAssignees.forEach(key => {
        if (key === 'the' || key === 'The') return;
        const char = LORE_DATA?.characters?.[key];
        const name = char?.name?.split(' ')[0] || key.replace(/_/g, ' ');
        options.push(`<option value="${key}">${name}</option>`);
    });

    assigneeFilter.innerHTML = options.join('');
}

// ============================================
// RENDER: Quest Detail Modal
// ============================================
function renderQuestModal(questId) {
    const rawQuest = QUEST_DATA[questId];
    if (!rawQuest) return;

    const quest = normalizeQuestData(rawQuest);
    const deadline = getDaysUntilDeadline(rawQuest);
    const isUrgent = deadline !== null && deadline <= 3;
    const arc = quest.arcId && STORY_ARCS ? STORY_ARCS[quest.arcId] : null;

    const formatReward = (val) => {
        if (typeof val === 'object' && val.min !== undefined) return `${val.min}-${val.max}`;
        return val;
    };

    modalContent.innerHTML = `
        <div class="modal-priority-bar ${quest.priority.label.toLowerCase()}"></div>
        
        <header class="modal-header">
            <div class="modal-title-row">
                <h2 class="modal-title">${quest.title}</h2>
                <span class="card-status status-${quest.status}">${quest.status}</span>
            </div>
            <div class="modal-meta">
                <span class="modal-meta-item" style="color: ${quest.type.color}">
                    ${quest.type.icon} ${quest.type.label}
                </span>
                <span class="modal-meta-item">👤 ${quest.assigneeNames}</span>
                ${quest.difficulty?.overall ? `<span class="modal-meta-item">⚔️ ${quest.difficulty.overall.label}</span>` : ''}
                ${isUrgent ? `<span class="modal-meta-item" style="color: var(--accent-danger)">⏰ ${deadline} days left</span>` : ''}
            </div>
        </header>

        <section class="modal-section">
            <h3 class="modal-section-title">📋 Objective</h3>
            <div class="modal-section-content">${quest.objective}</div>
        </section>

        ${quest.description ? `
            <section class="modal-section">
                <h3 class="modal-section-title">📖 Details</h3>
                <div class="modal-section-content">${quest.description}</div>
            </section>
        ` : ''}

        ${arc ? `
            <section class="modal-section">
                <h3 class="modal-section-title">🎭 Story Arc</h3>
                <div class="arc-badge" style="border-color: ${arc.status === 'active' ? 'var(--accent-danger)' : 'var(--accent-success)'}">
                    <span>${arc.icon} ${arc.name}</span>
                </div>
            </section>
        ` : ''}

        <section class="modal-section">
            <h3 class="modal-section-title">📊 Progress</h3>
            <div class="modal-progress-container">
                <div class="modal-progress-header">
                    <span class="modal-progress-label">Steps Completed</span>
                    <span class="modal-progress-value">${quest.completedMilestones}/${quest.totalMilestones}</span>
                </div>
                <div class="modal-progress-bar">
                    <div class="modal-progress-fill" style="width: ${quest.progress}%"></div>
                </div>
            </div>
        </section>

        ${quest.milestones.length > 0 ? `
            <section class="modal-section">
                <h3 class="modal-section-title">🎯 Milestones</h3>
                <div class="modal-milestones">
                    ${quest.milestones.map(m => `
                        <div class="modal-milestone ${m.status}">
                            <span class="milestone-icon">
                                ${m.status === 'completed' ? '✅' : m.status === 'active' ? '🔵' : '⏳'}
                            </span>
                            <div class="milestone-content">
                                <div class="milestone-title">${m.title}</div>
                                <div class="milestone-desc">${m.description || ''}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        ` : ''}

        ${quest.rewards ? `
            <section class="modal-section">
                <h3 class="modal-section-title">🎁 Rewards</h3>
                <div class="modal-rewards-grid">
                    ${quest.rewards.gold ? `<span class="modal-reward-item">💰 ${formatReward(quest.rewards.gold)} Gold</span>` : ''}
                    ${quest.rewards.xp ? `<span class="modal-reward-item xp">⭐ ${formatReward(quest.rewards.xp)} XP</span>` : ''}
                    ${quest.rewards.guaranteed ? quest.rewards.guaranteed.map(r => 
                        `<span class="modal-reward-item item">📦 ${r.name || 'Unknown'}</span>`
                    ).join('') : ''}
                </div>
            </section>
        ` : ''}

        ${quest.hints?.length ? `
            <section class="modal-section">
                <h3 class="modal-section-title">💡 Intel</h3>
                <ul style="margin: 0; padding-left: 1.25rem; color: var(--text-secondary);">
                    ${quest.hints.map(h => `<li style="margin-bottom: 0.5rem;">${h}</li>`).join('')}
                </ul>
            </section>
        ` : ''}

        <section class="modal-section">
            <h3 class="modal-section-title">📅 Timeline</h3>
            <div class="modal-section-content">
                <p><strong>Added:</strong> ${formatDate(quest.dates?.added)}</p>
                ${quest.dates?.updated ? `<p><strong>Last Update:</strong> ${formatRelativeDate(quest.dates?.updated)}</p>` : ''}
                ${quest.dates?.deadline ? `<p><strong>Deadline:</strong> ${formatDate(quest.dates.deadline)}</p>` : ''}
            </div>
        </section>
    `;

    questModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    questModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// EVENT HANDLERS
// ============================================
function setupEventListeners() {
    // Tab Switching
    questTabs?.addEventListener('click', (e) => {
        const tab = e.target.closest('.quest-tab');
        if (!tab) return;

        playSound('click.mp3');
        document.querySelectorAll('.quest-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentTab = tab.dataset.tab;
        renderQuests();
    });

    // Sort Select
    document.getElementById('sort-select')?.addEventListener('change', (e) => {
        sortMode = e.target.value;
        renderQuests();
    });

    // Type Filter
    document.getElementById('type-filter')?.addEventListener('change', (e) => {
        typeFilter = e.target.value;
        renderQuests();
    });

    // Assignee Filter
    assigneeFilter?.addEventListener('change', (e) => {
        assigneeFilterValue = e.target.value;
        renderQuests();
    });

    // Search
    document.getElementById('quest-search')?.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderQuests();
    });

    // Quest Card Click (Open Modal)
    questContainer?.addEventListener('click', (e) => {
        const card = e.target.closest('.quest-card');
        if (card) {
            playSound('click.mp3');
            renderQuestModal(card.dataset.questId);
        }
    });

    // Modal Close
    modalClose?.addEventListener('click', closeModal);
    questModal?.addEventListener('click', (e) => {
        if (e.target === questModal) closeModal();
    });

    // ESC to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && questModal?.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================================
// INIT
// ============================================
function init() {
    if (!questContainer) return;
    renderDashboard();
    renderQuests();
    setupEventListeners();
}

init();