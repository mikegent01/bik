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
    if (!date) return '';
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
    // 1. Get and Normalize all quests first
    const rawQuests = Object.values(QUEST_DATA).filter(q => q && q.status);
    const quests = rawQuests.map(q => normalizeQuestData(q));

    const urgent = getUrgentQuests();
    const active = quests.filter(q => [QUEST_STATUS.ACTIVE, QUEST_STATUS.ONGOING].includes(q.status));
    const completed = quests.filter(q => q.status === QUEST_STATUS.COMPLETED);
    
    // 2. Update Mini Stats
    if (statUrgent) statUrgent.querySelector('.mini-stat-value').textContent = urgent.length;
    if (statActive) statActive.querySelector('.mini-stat-value').textContent = active.length;
    if (statComplete) statComplete.querySelector('.mini-stat-value').textContent = completed.length;

    // 3. Overall Progress Ring
    const overallProgress = quests.length > 0 ? Math.round((completed.length / quests.length) * 100) : 0;
    if (overallProgressRing) {
        const circumference = 326.73; 
        overallProgressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        const offset = circumference - (overallProgress / 100) * circumference;
        overallProgressRing.style.strokeDashoffset = offset;
    }
    if (overallProgressValue) overallProgressValue.textContent = `${overallProgress}%`;

    // 4. MAIN STORY vs SIDE QUEST Bars (Fixed)
    // We use the 'id' assigned by normalizeQuestData
    const mainQuests = quests.filter(q => q.type.id === 'main');
    const sideQuests = quests.filter(q => q.type.id !== 'main');

    const calculatePercent = (group) => {
        if (group.length === 0) return 0;
        const done = group.filter(q => q.status === QUEST_STATUS.COMPLETED).length;
        return Math.round((done / group.length) * 100);
    };

    const mainBar = document.getElementById('main-story-progress');
    const sideBar = document.getElementById('side-quest-progress');

    if (mainBar) mainBar.style.width = `${calculatePercent(mainQuests)}%`;
    if (sideBar) sideBar.style.width = `${calculatePercent(sideQuests)}%`;

    // 5. Party Workload
    // This includes both main party and auxiliary (like Donkey Kong)
    if (partyWorkload) {
        const partyLoad = {};
        
        // Populate with everyone currently assigned to an active quest
        active.forEach(q => {
            const names = q.assigneeKeys || [];
            names.forEach(name => {
                partyLoad[name] = (partyLoad[name] || 0) + 1;
            });
        });

        partyWorkload.innerHTML = Object.entries(partyLoad).map(([key, count]) => {
            const char = LORE_DATA?.characters?.[key] || LORE_DATA?.auxiliary_party?.[key];
            return `
                <div class="party-member ${count > 3 ? 'overloaded' : ''}">
                    <div class="member-avatar">${char?.icon || '👤'}</div>
                    <div class="member-info">
                        <span class="member-name">${char?.name?.split(' ')[0] || key}</span>
                        <span class="member-quest-count">${count} Active</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 6. Urgent Alert
    if (urgentAlertCard) {
        const hasUrgent = urgent.length > 0;
        urgentAlertCard.classList.toggle('has-urgent', hasUrgent);
        if (hasUrgent) {
            urgentAlertTitle.textContent = `${urgent.length} Critical Mission${urgent.length > 1 ? 's' : ''}`;
            urgentAlertSubtitle.textContent = urgent[0].title;
        } else {
            urgentAlertTitle.textContent = 'No Critical Missions';
            urgentAlertSubtitle.textContent = 'All operations nominal';
        }
    }

    updateTabCounts(rawQuests);
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


function closeModal() {
    questModal.classList.remove('active');
    document.body.style.overflow = '';
}
// ============================================
// RENDER: Quest Detail Modal (Full Version)
// ============================================
// ============================================
// RENDER: Quest Detail Modal (Fixed Version)
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

    // Helper to format NPC/location names
    const formatKey = (key) => {
        if (!key) return '';
        const char = LORE_DATA?.characters?.[key] || LORE_DATA?.auxiliary_party?.[key];
        if (char) return char.name;
        const location = LORE_DATA?.locations?.[key];
        if (location) return location.name;
        const faction = LORE_DATA?.factions?.[key];
        if (faction) return faction.name;
        return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    };

    // Helper to get lore entry
    const getLoreEntry = (key) => {
        return LORE_DATA?.entries?.[key] || 
               LORE_DATA?.events?.[key] || 
               LORE_DATA?.characters?.[key] ||
               LORE_DATA?.locations?.[key] ||
               { name: formatKey(key), description: null };
    };

    // Helper for difficulty badge colors - WITH NULL CHECK
    const getDifficultyColor = (diff) => {
        if (!diff || typeof diff !== 'object') return 'var(--text-muted)';
        const label = diff.label?.toLowerCase();
        switch(label) {
            case 'deadly': return 'var(--accent-danger)';
            case 'hard': return 'var(--accent-warning)';
            case 'moderate': return 'var(--accent-primary)';
            case 'easy': return 'var(--accent-success)';
            case 'trivial': return 'var(--text-muted)';
            default: return 'var(--text-secondary)';
        }
    };

    // Helper for difficulty label - WITH NULL CHECK
    const getDifficultyLabel = (diff) => {
        if (!diff) return '';
        if (typeof diff === 'string') return diff;
        if (typeof diff === 'object' && diff.label) return diff.label;
        return '';
    };

    // Helper for difficulty icon - WITH NULL CHECK
    const getDifficultyIcon = (diff) => {
        if (!diff || typeof diff !== 'object') return '';
        return diff.icon || '';
    };

    // Helper for milestone status
    const getMilestoneIcon = (status) => {
        switch(status) {
            case 'completed': return '✅';
            case 'failed': return '❌';
            case 'active': return '🔵';
            case 'locked': return '🔒';
            default: return '⏳';
        }
    };

    // Helper for goal priority styling
    const getGoalPriorityClass = (priority) => {
        switch(priority) {
            case 'critical': return 'priority-critical';
            case 'high': return 'priority-high';
            case 'medium': return 'priority-medium';
            case 'low': return 'priority-low';
            default: return '';
        }
    };

    // Filter valid difficulty entries
    const getValidDifficulties = (difficulty) => {
        if (!difficulty || typeof difficulty !== 'object') return [];
        return Object.entries(difficulty).filter(([key, diff]) => {
            // Only include if diff is a valid object with a label
            return diff && typeof diff === 'object' && diff.label;
        });
    };

    const validDifficulties = getValidDifficulties(quest.difficulty);

    modalContent.innerHTML = `
        <div class="modal-priority-bar ${quest.priority?.label?.toLowerCase() || 'medium'}"></div>
        
        <!-- HEADER -->
        <header class="modal-header">
            <div class="modal-title-row">
                <div class="modal-title-group">
                    <h2 class="modal-title" id="modal-title">${quest.title || 'Untitled Quest'}</h2>
                    ${quest.subtitle ? `<span class="modal-subtitle">${quest.subtitle}</span>` : ''}
                </div>
                <span class="card-status status-${quest.status || 'pending'}">${quest.status || 'Pending'}</span>
            </div>
            <div class="modal-meta">
                <span class="modal-meta-item" style="color: ${quest.type?.color || 'var(--text-secondary)'}">
                    ${quest.type?.icon || '📋'} ${quest.type?.label || 'Quest'}
                </span>
                <span class="modal-meta-item">👤 ${quest.assigneeNames || 'Unassigned'}</span>
                ${quest.difficulty?.overall ? `
                    <span class="modal-meta-item" style="color: ${getDifficultyColor(quest.difficulty.overall)}">
                        ⚔️ ${getDifficultyLabel(quest.difficulty.overall)}
                    </span>
                ` : ''}
                ${isUrgent ? `
                    <span class="modal-meta-item urgent-badge">
                        ⏰ ${deadline === 0 ? 'TODAY!' : deadline + ' days left'}
                    </span>
                ` : ''}
            </div>
            ${quest.tags?.length ? `
                <div class="modal-tags">
                    ${quest.tags.map(tag => `<span class="quest-tag">${tag}</span>`).join('')}
                </div>
            ` : ''}
        </header>

        <!-- OBJECTIVE -->
        <section class="modal-section">
            <h3 class="modal-section-title">📋 Objective</h3>
            <div class="modal-section-content objective-text">${quest.objective || 'No objective specified.'}</div>
        </section>

        <!-- DESCRIPTION -->
        ${quest.description ? `
            <section class="modal-section">
                <h3 class="modal-section-title">📖 Details</h3>
                <div class="modal-section-content">${quest.description}</div>
            </section>
        ` : ''}

        <!-- STORY ARC -->
        ${arc ? `
            <section class="modal-section">
                <h3 class="modal-section-title">🎭 Story Arc</h3>
                <div class="arc-card">
                    <div class="arc-header">
                        <span class="arc-icon">${arc.icon || '📚'}</span>
                        <span class="arc-name">${arc.name || 'Arc'}</span>
                        <span class="arc-status status-${arc.status || 'active'}">${arc.status || 'Active'}</span>
                    </div>
                    ${arc.description ? `<p class="arc-description">${arc.description}</p>` : ''}
                </div>
            </section>
        ` : ''}

        <!-- DIFFICULTY BREAKDOWN - FIXED -->
        ${validDifficulties.length > 1 ? `
            <section class="modal-section">
                <h3 class="modal-section-title">⚔️ Difficulty Assessment</h3>
                <div class="difficulty-grid">
                    ${validDifficulties.map(([key, diff]) => `
                        <div class="difficulty-item">
                            <span class="difficulty-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                            <span class="difficulty-value" style="color: ${getDifficultyColor(diff)}">
                                ${getDifficultyIcon(diff)} ${getDifficultyLabel(diff)}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </section>
        ` : ''}

        <!-- PROGRESS -->
        <section class="modal-section">
            <h3 class="modal-section-title">📊 Progress</h3>
            <div class="modal-progress-container">
                <div class="modal-progress-header">
                    <span class="modal-progress-label">Steps Completed</span>
                    <span class="modal-progress-value">${quest.completedMilestones || 0}/${quest.totalMilestones || 0}</span>
                </div>
                <div class="modal-progress-bar">
                    <div class="modal-progress-fill" style="width: ${quest.progress || 0}%"></div>
                </div>
            </div>
        </section>

        <!-- MILESTONES -->
        ${quest.milestones?.length > 0 ? `
            <section class="modal-section">
                <h3 class="modal-section-title">🎯 Milestones</h3>
                <div class="modal-milestones">
                    ${quest.milestones.map(m => `
                        <div class="modal-milestone ${m.status || 'pending'}">
                            <div class="milestone-header">
                                <span class="milestone-icon">${getMilestoneIcon(m.status)}</span>
                                <div class="milestone-title-group">
                                    <span class="milestone-title">${m.title || 'Untitled Step'}</span>
                                    ${m.completedDate ? `
                                        <span class="milestone-date">${formatDate(m.completedDate)}</span>
                                    ` : ''}
                                </div>
                            </div>
                            <div class="milestone-content">
                                <p class="milestone-desc">${m.description || ''}</p>
                                
                                <!-- Goals within milestone -->
                                ${m.goals?.length ? `
                                    <div class="milestone-goals">
                                        <h5 class="goals-header">Current Goals:</h5>
                                        <ul class="goals-list">
                                            ${m.goals.map(g => `
                                                <li class="goal-item ${g.status || 'pending'} ${getGoalPriorityClass(g.priority)}">
                                                    <span class="goal-status-icon">
                                                        ${g.status === 'completed' ? '✅' : g.status === 'active' ? '🔹' : '○'}
                                                    </span>
                                                    <span class="goal-text">${g.text || ''}</span>
                                                    ${g.priority ? `<span class="goal-priority">${g.priority}</span>` : ''}
                                                </li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                ` : ''}

                                <!-- Choices within milestone -->
                                ${m.choices?.length ? `
                                    <div class="milestone-choices">
                                        ${m.choices.map(choice => `
                                            <div class="choice-block">
                                                <h5 class="choice-title">⚖️ ${choice.title || 'Choice'}</h5>
                                                <p class="choice-description">${choice.description || ''}</p>
                                                ${choice.options?.length ? `
                                                    <div class="choice-options">
                                                        ${choice.options.map(opt => `
                                                            <div class="choice-option">
                                                                <div class="option-header">
                                                                    <strong class="option-name">${opt.name || 'Option'}</strong>
                                                                </div>
                                                                <p class="option-description">${opt.description || ''}</p>
                                                                ${opt.requirements?.length ? `
                                                                    <div class="option-requirements">
                                                                        <span class="req-label">Requires:</span>
                                                                        <ul>
                                                                            ${opt.requirements.map(req => `<li>${req}</li>`).join('')}
                                                                        </ul>
                                                                    </div>
                                                                ` : ''}
                                                                ${opt.consequences ? `
                                                                    <div class="option-consequences">
                                                                        ${opt.consequences.success ? `<span class="consequence success">✓ ${opt.consequences.success}</span>` : ''}
                                                                        ${opt.consequences.failure ? `<span class="consequence failure">✗ ${opt.consequences.failure}</span>` : ''}
                                                                    </div>
                                                                ` : ''}
                                                            </div>
                                                        `).join('')}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        ` : ''}

        <!-- CONSEQUENCES -->
        ${quest.consequences ? `
            <section class="modal-section">
                <h3 class="modal-section-title">⚡ Consequences</h3>
                <div class="consequences-grid">
                    ${quest.consequences.success ? `
                        <div class="consequence-card success">
                            <div class="consequence-header">
                                <span class="consequence-icon">✅</span>
                                <span class="consequence-label">Success</span>
                            </div>
                            <p class="consequence-text">${quest.consequences.success}</p>
                        </div>
                    ` : ''}
                    ${quest.consequences.partial ? `
                        <div class="consequence-card partial">
                            <div class="consequence-header">
                                <span class="consequence-icon">⚠️</span>
                                <span class="consequence-label">Partial</span>
                            </div>
                            <p class="consequence-text">${quest.consequences.partial}</p>
                        </div>
                    ` : ''}
                    ${quest.consequences.failure ? `
                        <div class="consequence-card failure">
                            <div class="consequence-header">
                                <span class="consequence-icon">❌</span>
                                <span class="consequence-label">Failure</span>
                            </div>
                            <p class="consequence-text">${quest.consequences.failure}</p>
                        </div>
                    ` : ''}
                </div>
            </section>
        ` : ''}

        <!-- REWARDS -->
        ${quest.rewards ? `
            <section class="modal-section">
                <h3 class="modal-section-title">🎁 Rewards</h3>
                
                <!-- Base Rewards -->
                <div class="rewards-base">
                    ${quest.rewards.gold ? `
                        <span class="modal-reward-item gold">💰 ${formatReward(quest.rewards.gold)} Gold</span>
                    ` : ''}
                    ${quest.rewards.xp ? `
                        <span class="modal-reward-item xp">⭐ ${formatReward(quest.rewards.xp)} XP</span>
                    ` : ''}
                </div>

                <!-- Guaranteed Rewards -->
                ${quest.rewards.guaranteed?.length ? `
                    <div class="rewards-section">
                        <h4 class="rewards-section-title">Guaranteed</h4>
                        <div class="modal-rewards-grid">
                            ${quest.rewards.guaranteed.map(r => {
                                if (!r) return '';
                                switch(r.type) {
                                    case 'item':
                                        return `
                                            <div class="reward-card item">
                                                <span class="reward-icon">📦</span>
                                                <div class="reward-info">
                                                    <span class="reward-name">${r.name || 'Item'}</span>
                                                    ${r.description ? `<span class="reward-desc">${r.description}</span>` : ''}
                                                </div>
                                            </div>
                                        `;

case 'xp':
    // If the data is { type: 'xp', amount: 500 }
    const xpAmount = r.amount || quest.rewards.xp || 0; 
    return `
        <div class="reward-card xp-reward">
            <span class="reward-icon">⭐</span>
            <div class="reward-info">
                <span class="reward-name">${xpAmount} XP</span>
                <span class="reward-desc">Experience points gained for completion.</span>
            </div>
        </div>
    `;                                        
                                    case 'reputation':
                                        const icon = (r.amount || 0) >= 0 ? '📈' : '📉';
                                        const sign = (r.amount || 0) >= 0 ? '+' : '';
                                        const reputationType = (r.amount || 0) >= 0 ? 'positive' : 'negative';
                                        return `
                                            <div class="reward-card reputation ${reputationType}">
                                                <span class="reward-icon">${icon}</span>
                                                <div class="reward-info">
                                                    <span class="reward-name">${formatKey(r.faction)}: ${sign}${r.amount || 0}</span>
                                                    ${r.description ? `<span class="reward-desc">${r.description}</span>` : ''}
                                                </div>
                                            </div>
                                        `;
                                    case 'ally':
                                        return `
                                            <div class="reward-card ally">
                                                <span class="reward-icon">🤝</span>
                                                <div class="reward-info">
                                                    <span class="reward-name">${r.name || 'Ally'}</span>
                                                    ${r.description ? `<span class="reward-desc">${r.description}</span>` : ''}
                                                </div>
                                            </div>
                                        `;
                                    case 'intel':
                                        return `
                                            <div class="reward-card intel">
                                                <span class="reward-icon">🔍</span>
                                                <div class="reward-info">
                                                    <span class="reward-name">${r.name || 'Intel'}</span>
                                                    ${r.description ? `<span class="reward-desc">${r.description}</span>` : ''}
                                                </div>
                                            </div>
                                        `;
                                    case 'unlock':
                                        return `
                                            <div class="reward-card unlock">
                                                <span class="reward-icon">🔓</span>
                                                <div class="reward-info">
                                                    <span class="reward-name">${r.name || r.description || 'Unlock'}</span>
                                                </div>
                                            </div>
                                        `;
                                    default:
                                        return `
                                            <div class="reward-card">
                                                <span class="reward-icon">🎁</span>
                                                <div class="reward-info">
                                                    <span class="reward-name">${r.name || r.description || r.type || 'Reward'}</span>
                                                </div>
                                            </div>
                                        `;
                                }
                            }).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Conditional Rewards -->
                ${quest.rewards.conditional?.length ? `
                    <div class="rewards-section">
                        <h4 class="rewards-section-title">Conditional</h4>
                        <div class="conditional-rewards">
                            ${quest.rewards.conditional.map(cr => {
                                if (!cr || !cr.reward) return '';
                                return `
                                    <div class="conditional-reward-card">
                                        <div class="condition">
                                            <span class="reward-icon">
                                                ${cr.reward.type === 'ally' ? '🤝' : 
                                                  cr.reward.type === 'intel' ? '🔍' : 
                                                  cr.reward.type === 'item' ? '📦' : '🎁'}
                                            </span>
                                            <span class="condition-text">${cr.condition || 'condition'}</span>
                                        </div>
                                        <div class="condition-reward">
                                            <span class="reward-arrow"></span>
                                            <div class="reward-info">
                                                <span class="reward-name">${cr.reward.name || ''}</span>
                                                ${cr.reward.description ? `<span class="reward-desc">${cr.reward.description}</span>` : ''}
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
            </section>
        ` : ''}

        <!-- NPCs -->
        ${quest.npcs && (quest.npcs.allies?.length || quest.npcs.enemies?.length || quest.npcs.neutral?.length) ? `
            <section class="modal-section">
                <h3 class="modal-section-title">👥 Key NPCs</h3>
                <div class="npcs-grid">
                    ${quest.npcs.allies?.length ? `
                        <div class="npc-group allies">
                            <h4 class="npc-group-title">🟢 Allies</h4>
                            <div class="npc-list">
                                ${quest.npcs.allies.map(npc => {
                                    const npcData = LORE_DATA?.characters?.[npc] || LORE_DATA?.auxiliary_party?.[npc];
                                    return `
                                        <div class="npc-chip ally" data-npc="${npc}">
                                            <span class="npc-icon">${npcData?.icon || '👤'}</span>
                                            <span class="npc-name">${formatKey(npc)}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${quest.npcs.enemies?.length ? `
                        <div class="npc-group enemies">
                            <h4 class="npc-group-title">🔴 Enemies</h4>
                            <div class="npc-list">
                                ${quest.npcs.enemies.map(npc => {
                                    const npcData = LORE_DATA?.characters?.[npc];
                                    return `
                                        <div class="npc-chip enemy" data-npc="${npc}">
                                            <span class="npc-icon">${npcData?.icon || '👤'}</span>
                                            <span class="npc-name">${formatKey(npc)}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${quest.npcs.neutral?.length ? `
                        <div class="npc-group neutral">
                            <h4 class="npc-group-title">⚪ Neutral</h4>
                            <div class="npc-list">
                                ${quest.npcs.neutral.map(npc => {
                                    const npcData = LORE_DATA?.characters?.[npc];
                                    return `
                                        <div class="npc-chip neutral" data-npc="${npc}">
                                            <span class="npc-icon">${npcData?.icon || '👤'}</span>
                                            <span class="npc-name">${formatKey(npc)}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </section>
        ` : ''}

        <!-- LOCATIONS -->
        ${quest.locations && (quest.locations.primary || quest.locations.related?.length) ? `
            <section class="modal-section">
                <h3 class="modal-section-title">📍 Locations</h3>
                <div class="locations-grid">
                    ${quest.locations.primary ? `
                        <div class="location-card primary">
                            <span class="location-badge">Primary</span>
                            <span class="location-icon">🎯</span>
                            <span class="location-name">${formatKey(quest.locations.primary)}</span>
                        </div>
                    ` : ''}
                    ${quest.locations.related?.length ? `
                        ${quest.locations.related.map(loc => `
                            <div class="location-card related">
                                <span class="location-icon">📍</span>
                                <span class="location-name">${formatKey(loc)}</span>
                            </div>
                        `).join('')}
                    ` : ''}
                </div>
            </section>
        ` : ''}

        <!-- LORE ENTRIES -->
        ${quest.loreEntries?.length ? `
            <section class="modal-section">
                <h3 class="modal-section-title">📚 Lore & Intel</h3>
                <div class="lore-entries">
                    ${quest.loreEntries.map(entryKey => {
                        const entry = getLoreEntry(entryKey);
                        return `
                            <div class="lore-entry-card" data-lore="${entryKey}">
                                <span class="lore-icon">📜</span>
                                <div class="lore-info">
                                    <span class="lore-title">${entry?.name || formatKey(entryKey)}</span>
                                    ${entry?.description ? `<span class="lore-preview">${entry.description.substring(0, 100)}...</span>` : ''}
                                </div>
                                <span class="lore-arrow">→</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        ` : ''}

        <!-- RELATED QUESTS -->
        ${quest.relatedQuests?.length ? `
            <section class="modal-section">
                <h3 class="modal-section-title">🔗 Related Quests</h3>
                <div class="related-quests">
                    ${quest.relatedQuests.map(qId => {
                        const relatedQuest = QUEST_DATA[qId];
                        if (!relatedQuest) return '';
                        const rq = normalizeQuestData(relatedQuest);
                        return `
                            <div class="related-quest-card" data-quest-id="${qId}">
                                <div class="related-quest-info">
                                    <span class="related-quest-type" style="color: ${rq.type?.color || 'var(--text-secondary)'}">
                                        ${rq.type?.icon || '📋'}
                                    </span>
                                    <span class="related-quest-title">${rq.title || 'Quest'}</span>
                                </div>
                                <span class="related-quest-status status-${rq.status || 'pending'}">${rq.status || 'Pending'}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        ` : ''}

        <!-- HINTS -->
        ${quest.hints?.length ? `
            <section class="modal-section">
                <h3 class="modal-section-title">💡 Intel & Hints</h3>
                <ul class="hints-list">
                    ${quest.hints.map(h => `
                        <li class="hint-item">
                            <span class="hint-icon">💡</span>
                            <span class="hint-text">${h}</span>
                        </li>
                    `).join('')}
                </ul>
            </section>
        ` : ''}

        <!-- TIMELINE -->
        <section class="modal-section">
            <h3 class="modal-section-title">📅 Timeline</h3>
            <div class="timeline-grid">
                <div class="timeline-item">
                    <span class="timeline-label">Added</span>
                    <span class="timeline-value">${formatDate(quest.dates?.added) || ''}</span>
                </div>
                ${quest.dates?.updated ? `
                    <div class="timeline-item">
                        <span class="timeline-label">Last Update</span>
                        <span class="timeline-value">${formatRelativeDate(quest.dates.updated)}</span>
                    </div>
                ` : ''}
                ${quest.dates?.deadline ? `
                    <div class="timeline-item ${isUrgent ? 'urgent' : ''}">
                        <span class="timeline-label">Deadline</span>
                        <span class="timeline-value">${formatDate(quest.dates.deadline)}</span>
                    </div>
                ` : ''}
            </div>
        </section>
    `;

    // Hide loading state
    const loadingEl = document.getElementById('modal-loading');
    if (loadingEl) loadingEl.style.display = 'none';

    // Add click handlers for related quests
    modalContent.querySelectorAll('.related-quest-card').forEach(card => {
        card.addEventListener('click', () => {
            const relatedQuestId = card.dataset.questId;
            if (relatedQuestId && QUEST_DATA[relatedQuestId]) {
                playSound?.('click.mp3');
                renderQuestModal(relatedQuestId);
            }
        });
    });

    // Add click handlers for lore entries
    modalContent.querySelectorAll('.lore-entry-card').forEach(card => {
        card.addEventListener('click', () => {
            const loreKey = card.dataset.lore;
            if (loreKey && typeof openLoreModal === 'function') {
                playSound?.('click.mp3');
                openLoreModal(loreKey);
            }
        });
    });

    // Add click handlers for NPC chips
    modalContent.querySelectorAll('.npc-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const npcKey = chip.dataset.npc;
            if (npcKey && typeof openNpcModal === 'function') {
                playSound?.('click.mp3');
                openNpcModal(npcKey);
            }
        });
    });

    // Show modal
    questModal.classList.add('active');
    questModal.hidden = false;
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modalContent.focus();
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