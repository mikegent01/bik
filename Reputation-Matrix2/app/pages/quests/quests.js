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
} from '../../../data/quest-system/index.js';
import { playSound } from '../../../common.js';
import { state } from '../../../state.js';
import { LORE_DATA, STORY_ARCS } from '../../../lore.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from '../../../data/world/calendar.js';

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
            goals: s.options ? s.options.map(opt => ({
                // Legacy quest steps store options as objects; never leak [object Object] into the UI.
                text: typeof opt === 'string' ? opt : (opt.name || opt.title || opt.text || opt.description || 'Unnamed option'),
                status: opt.status || 'active',
                note: typeof opt === 'object' ? opt.description : ''
            })) : []
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
// ============================================
// RENDER: Quest Detail Modal (Enhanced Version)
// ============================================
function renderQuestModal(questId) {
    const rawQuest = QUEST_DATA[questId];
    if (!rawQuest) return;

    const quest = normalizeQuestData(rawQuest);
    const deadline = getDaysUntilDeadline(rawQuest);
    const isUrgent = deadline !== null && deadline <= 3;
    const arc = quest.arcId && STORY_ARCS ? STORY_ARCS[quest.arcId] : null;

    // ============================================
    // HELPER FUNCTIONS
    // ============================================
    const formatReward = (val) => {
        if (typeof val === 'object' && val.min !== undefined) {
            if (val.note) return `${val.min}-${val.max} (${val.note})`;
            return `${val.min}-${val.max}`;
        }
        return val;
    };

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

    const getLoreEntry = (key) => {
        return LORE_DATA?.entries?.[key] || 
               LORE_DATA?.events?.[key] || 
               LORE_DATA?.characters?.[key] ||
               LORE_DATA?.locations?.[key] ||
               { name: formatKey(key), description: null };
    };

    const getDifficultyColor = (diff) => {
        if (!diff || typeof diff !== 'object') return 'var(--text-muted)';
        const label = diff.label?.toLowerCase();
        switch(label) {
            case 'deadly': return 'var(--accent-danger)';
            case 'extreme': return 'var(--accent-danger)';
            case 'critical': return 'var(--accent-danger)';
            case 'hard': return 'var(--accent-warning)';
            case 'moderate': return 'var(--accent-primary)';
            case 'easy': return 'var(--accent-success)';
            case 'trivial': return 'var(--text-muted)';
            case 'unknown': return 'var(--mystical-color, #8A2BE2)';
            default: return 'var(--text-secondary)';
        }
    };

    const getDifficultyLabel = (diff) => {
        if (!diff) return '';
        if (typeof diff === 'string') return diff;
        if (typeof diff === 'object' && diff.label) return diff.label;
        return '';
    };

    const getDifficultyIcon = (diff) => {
        if (!diff || typeof diff !== 'object') return '';
        return diff.icon || '';
    };

    const getMilestoneIcon = (status) => {
        switch(status) {
            case 'completed': return '✅';
            case 'failed': return '❌';
            case 'active': return '🔵';
            case 'locked': return '🔒';
            default: return '⏳';
        }
    };

    const getGoalPriorityClass = (priority) => {
        switch(priority) {
            case 'critical': return 'priority-critical';
            case 'high': return 'priority-high';
            case 'medium': return 'priority-medium';
            case 'low': return 'priority-low';
            default: return '';
        }
    };

    const getGoalStatusIcon = (status) => {
        switch(status) {
            case 'completed': return '✅';
            case 'active': return '🔹';
            case 'pending': return '○';
            case 'failed': return '❌';
            default: return '○';
        }
    };

    const getValidDifficulties = (difficulty) => {
        if (!difficulty || typeof difficulty !== 'object') return [];
        return Object.entries(difficulty).filter(([key, diff]) => {
            return diff && typeof diff === 'object' && diff.label;
        });
    };

    const renderConsequences = (consequences) => {
        if (!consequences) return '';
        const entries = Object.entries(consequences).filter(([key, val]) => val);
        if (entries.length === 0) return '';

        const getConsequenceType = (key) => {
            if (key.includes('success')) return { class: 'success', icon: '✅', label: 'Success' };
            if (key.includes('failure')) return { class: 'failure', icon: '❌', label: 'Failure' };
            if (key.includes('partial')) return { class: 'partial', icon: '⚠️', label: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) };
            return { class: 'neutral', icon: '📋', label: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) };
        };

        return `
            <section class="modal-section">
                <h3 class="modal-section-title">⚡ Consequences</h3>
                <div class="consequences-grid">
                    ${entries.map(([key, val]) => {
                        const type = getConsequenceType(key);
                        return `
                            <div class="consequence-card ${type.class}">
                                <div class="consequence-header">
                                    <span class="consequence-icon">${type.icon}</span>
                                    <span class="consequence-label">${type.label}</span>
                                </div>
                                <div class="consequence-text">${typeof val === 'object' ? Object.entries(val).map(([label, text]) => `<p><strong>${label.replace(/_/g, ' ')}</strong>: ${text}</p>`).join('') : val}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        `;
    };

    const renderPartyStatus = (partyStatus) => {
        if (!partyStatus) return '';
        const members = Object.entries(partyStatus);
        if (members.length === 0) return '';

        const getSanityColor = (sanity) => {
            if (sanity >= 8) return 'var(--accent-success)';
            if (sanity >= 6) return 'var(--accent-primary)';
            if (sanity >= 4) return 'var(--accent-warning)';
            return 'var(--accent-danger)';
        };

        return `
            <section class="modal-section">
                <h3 class="modal-section-title">👥 Party Status</h3>
                <div class="party-status-grid">
                    ${members.map(([key, member]) => `
                        <div class="party-member-card">
                            <div class="member-header">
                                <span class="member-name">${formatKey(key)}</span>
                                <span class="member-location">${member.location || 'Unknown'}</span>
                            </div>
                            <div class="member-status">${member.status || ''}</div>
                            ${member.sanity !== undefined ? `
                                <div class="member-sanity">
                                    <span class="sanity-label">Sanity:</span>
                                    <span class="sanity-value" style="color: ${getSanityColor(member.sanity)}">${member.sanity}/10</span>
                                </div>
                            ` : ''}
                            ${member.notes ? `<p class="member-notes">${member.notes}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    };

    const renderThreats = (threats) => {
        if (!threats) return '';
        const threatEntries = Object.entries(threats);
        if (threatEntries.length === 0) return '';

        return `
            <section class="modal-section">
                <h3 class="modal-section-title">⚠️ Active Threats</h3>
                <div class="threats-grid">
                    ${threatEntries.map(([key, threat]) => `
                        <div class="threat-card">
                            <div class="threat-header">
                                <span class="threat-name">${threat.name || formatKey(key)}</span>
                                ${threat.faction ? `<span class="threat-faction">${threat.faction}</span>` : ''}
                            </div>
                            ${threat.status ? `<div class="threat-status">${threat.status}</div>` : ''}
                            ${threat.motivation ? `
                                <div class="threat-motivation">
                                    <strong>Motivation:</strong> ${threat.motivation}
                                </div>
                            ` : ''}
                            ${threat.danger ? `
                                <div class="threat-danger">
                                    <strong>Danger:</strong> ${threat.danger}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    };

    const renderNewRevelations = (revelations) => {
        if (!revelations) return '';
        const entries = Object.entries(revelations);
        if (entries.length === 0) return '';

        return `
            <section class="modal-section revelations-section">
                <h3 class="modal-section-title">✨ New Revelations</h3>
                <div class="revelations-grid">
                    ${entries.map(([key, value]) => `
                        <div class="revelation-card">
                            <span class="revelation-key">${formatKey(key)}:</span>
                            <span class="revelation-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    };

    const renderAssetStatus = (assets) => {
        if (!assets) return '';
        const entries = Object.entries(assets);
        if (entries.length === 0) return '';

        const getStatusColor = (status) => {
            const statusLower = (status || '').toLowerCase();
            if (statusLower.includes('critical') || statusLower.includes('captured') || statusLower.includes('unknown')) 
                return 'var(--accent-danger)';
            if (statusLower.includes('evading') || statusLower.includes('performing') || statusLower.includes('trapped')) 
                return 'var(--accent-warning)';
            return 'var(--text-secondary)';
        };

        return `
            <section class="modal-section">
                <h3 class="modal-section-title">📊 Asset Status</h3>
                <div class="asset-status-grid">
                    ${entries.map(([key, asset]) => `
                        <div class="asset-status-card">
                            <div class="asset-header">
                                <span class="asset-name">${formatKey(key)}</span>
                                <span class="asset-status" style="color: ${getStatusColor(asset.status)}">${asset.status || 'Unknown'}</span>
                            </div>
                            ${asset.location ? `<div class="asset-location">📍 ${asset.location}</div>` : ''}
                            ${asset.timeToExecution ? `<div class="asset-urgent">⏰ Execution in: ${asset.timeToExecution}</div>` : ''}
                            ${asset.note ? `<div class="asset-note">${asset.note}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    };

    const renderConnections = (connections) => {
        if (!connections) return '';
        const entries = Object.entries(connections);
        if (entries.length === 0) return '';

        return `
            <section class="modal-section">
                <h3 class="modal-section-title">🔗 Quest Connections</h3>
                <div class="connections-list">
                    ${entries.map(([key, value]) => `
                        <div class="connection-card">
                            <span class="connection-key">${formatKey(key)}:</span>
                            <p class="connection-value">${value}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    };

    const renderSpecialStatus = (statusObj, title, icon) => {
        if (!statusObj) return '';
        const entries = Object.entries(statusObj).filter(([k, v]) => v !== undefined);
        if (entries.length === 0) return '';

        return `
            <section class="modal-section">
                <h3 class="modal-section-title">${icon} ${title}</h3>
                <div class="special-status-grid">
                    ${entries.map(([key, value]) => {
                        if (typeof value === 'object' && !Array.isArray(value)) {
                            return `
                                <div class="status-item complex">
                                    <span class="status-key">${formatKey(key)}</span>
                                    <div class="status-details">
                                        ${Object.entries(value).map(([k, v]) => `
                                            <div class="detail-row">
                                                <span class="detail-key">${formatKey(k)}:</span>
                                                <span class="detail-value">${v}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                        }
                        if (Array.isArray(value)) {
                            return `
                                <div class="status-item">
                                    <span class="status-key">${formatKey(key)}:</span>
                                    <span class="status-value">${value.join(', ')}</span>
                                </div>
                            `;
                        }
                        return `
                            <div class="status-item">
                                <span class="status-key">${formatKey(key)}:</span>
                                <span class="status-value">${value}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        `;
    };

    const validDifficulties = getValidDifficulties(quest.difficulty);

    // ============================================
    // MAIN MODAL CONTENT
    // ============================================
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

        <!-- URGENCY NOTE (if present) -->
        ${quest.urgencyNote ? `
            <div class="urgency-alert">
                <span class="urgency-icon">⚠️</span>
                <span class="urgency-text">${quest.urgencyNote}</span>
            </div>
        ` : ''}

        <!-- DESCRIPTION -->
        ${quest.description ? `
            <section class="modal-section">
                <h3 class="modal-section-title">📖 Details</h3>
                <div class="modal-section-content description-text">${quest.description.replace(/\n/g, '<br>')}</div>
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

        <!-- NEW REVELATIONS (if present) -->
        ${renderNewRevelations(quest.newRevelations || quest.newDevelopments)}

        <!-- DIFFICULTY BREAKDOWN -->
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
                    <span class="modal-progress-label">Milestones Completed</span>
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
                                <p class="milestone-desc">${(m.description || '').replace(/\n/g, '<br>')}</p>
                                
                                <!-- Outcomes within milestone -->
                                ${m.outcomes?.length ? `
                                    <div class="milestone-outcomes">
                                        <h5 class="outcomes-header">Outcomes:</h5>
                                        <ul class="outcomes-list">
                                            ${m.outcomes.map(o => `<li class="outcome-item">${o}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}

                                <!-- Goals within milestone -->
                                ${m.goals?.length ? `
                                    <div class="milestone-goals">
                                        <h5 class="goals-header">Current Goals:</h5>
                                        <ul class="goals-list">
                                            ${m.goals.map(g => `
                                                <li class="goal-item ${g.status || 'pending'} ${getGoalPriorityClass(g.priority)}">
                                                    <span class="goal-status-icon">${getGoalStatusIcon(g.status)}</span>
                                                    <span class="goal-text">${g.text || ''}</span>
                                                    ${g.priority ? `<span class="goal-priority">[${g.priority.toUpperCase()}]</span>` : ''}
                                                    ${g.note ? `<span class="goal-note">(${g.note})</span>` : ''}
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

                                <!-- Notes within milestone -->
                                ${m.notes ? `
                                    <div class="milestone-notes">
                                        <strong>Notes:</strong> ${m.notes}
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        ` : ''}

        <!-- CONSEQUENCES -->
        ${renderConsequences(quest.consequences)}

        <!-- PARTY STATUS (if present) -->
        ${renderPartyStatus(quest.partyStatus)}

        <!-- ASSET STATUS (if present) -->
        ${renderAssetStatus(quest.assetStatus)}

        <!-- THREATS (if present) -->
        ${renderThreats(quest.threats)}

        <!-- SPECIAL STATUSES -->
        ${quest.greenTStatus ? renderSpecialStatus(quest.greenTStatus, "Green T Status", "🐸") : ''}
        ${quest.staffStatus ? renderSpecialStatus(quest.staffStatus, "Staff Status", "🔮") : ''}
        ${quest.danStatus ? renderSpecialStatus(quest.danStatus, "Dan Status", "💪") : ''}

        <!-- CONNECTIONS (if present) -->
        ${renderConnections(quest.connections)}

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
                                const getRewardIcon = (type) => {
                                    switch(type) {
                                        case 'item': return '📦';
                                        case 'reputation': return (r.amount || 0) >= 0 ? '📈' : '📉';
                                        case 'ally': return '🤝';
                                        case 'intel': case 'knowledge': return '🔍';
                                        case 'unlock': return '🔓';
                                        case 'trait': case 'ability': case 'feat': return '⚡';
                                        case 'boon': return '✨';
                                        default: return '🎁';
                                    }
                                };
                                const icon = getRewardIcon(r.type);
                                const reputationType = r.type === 'reputation' ? ((r.amount || 0) >= 0 ? 'positive' : 'negative') : '';
                                
                                return `
                                    <div class="reward-card ${r.type || ''} ${reputationType}">
                                        <span class="reward-icon">${icon}</span>
                                        <div class="reward-info">
                                            <span class="reward-name">${r.name || r.type || 'Reward'}${r.type === 'reputation' && r.faction ? ` (${formatKey(r.faction)}: ${r.amount >= 0 ? '+' : ''}${r.amount})` : ''}</span>
                                            ${r.description ? `<span class="reward-desc">${r.description}</span>` : ''}
                                        </div>
                                    </div>
                                `;
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
                                const getConditionIcon = (type) => {
                                    switch(type) {
                                        case 'ally': return '🤝';
                                        case 'intel': case 'knowledge': case 'revelation': return '🔍';
                                        case 'item': case 'artifact': return '📦';
                                        case 'reputation': return '📈';
                                        case 'favor': return '🎖️';
                                        case 'trait': case 'feat': case 'ability': case 'power': return '⚡';
                                        case 'boon': return '✨';
                                        case 'trust': case 'bond': return '💫';
                                        case 'asset': return '🏠';
                                        default: return '🎁';
                                    }
                                };
                                return `
                                    <div class="conditional-reward-card ${cr.status || ''}">
                                        <div class="condition">
                                            <span class="reward-icon">${getConditionIcon(cr.reward.type)}</span>
                                            <span class="condition-text">${cr.condition || 'Condition'}</span>
                                            ${cr.status ? `<span class="condition-status status-${cr.status}">${cr.status}</span>` : ''}
                                        </div>
                                        <div class="condition-reward">
                                            <span class="reward-arrow">→</span>
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
        ${quest.npcs && Object.values(quest.npcs).some(arr => arr?.length) ? `
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
                    ${quest.npcs.observers?.length ? `
                        <div class="npc-group observers">
                            <h4 class="npc-group-title">👁️ Observers</h4>
                            <div class="npc-list">
                                ${quest.npcs.observers.map(npc => {
                                    const npcData = LORE_DATA?.characters?.[npc];
                                    return `
                                        <div class="npc-chip observer" data-npc="${npc}">
                                            <span class="npc-icon">${npcData?.icon || '👁️'}</span>
                                            <span class="npc-name">${formatKey(npc)}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${quest.npcs.uncertain?.length ? `
                        <div class="npc-group uncertain">
                            <h4 class="npc-group-title">❓ Uncertain</h4>
                            <div class="npc-list">
                                ${quest.npcs.uncertain.map(npc => {
                                    const npcData = LORE_DATA?.characters?.[npc];
                                    return `
                                        <div class="npc-chip uncertain" data-npc="${npc}">
                                            <span class="npc-icon">${npcData?.icon || '❓'}</span>
                                            <span class="npc-name">${formatKey(npc)}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                    ${quest.npcs.divine?.length ? `
                        <div class="npc-group divine">
                            <h4 class="npc-group-title">✨ Divine</h4>
                            <div class="npc-list">
                                ${quest.npcs.divine.map(npc => {
                                    return `
                                        <div class="npc-chip divine" data-npc="${npc}">
                                            <span class="npc-icon">✨</span>
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
        ${quest.locations && (quest.locations.primary || quest.locations.related?.length || quest.locations.cleared) ? `
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
                    ${quest.locations.current ? `
                        <div class="location-card current">
                            <span class="location-badge">Current</span>
                            <span class="location-icon">📍</span>
                            <span class="location-name">${formatKey(quest.locations.current)}</span>
                        </div>
                    ` : ''}
                    ${quest.locations.cleared ? `
                        <div class="location-card cleared">
                            <span class="location-badge">Cleared</span>
                            <span class="location-icon">✅</span>
                            <span class="location-name">${formatKey(quest.locations.cleared)}</span>
                        </div>
                    ` : ''}
                    ${quest.locations.target ? `
                        <div class="location-card target">
                            <span class="location-badge">Target</span>
                            <span class="location-icon">🎯</span>
                            <span class="location-name">${formatKey(quest.locations.target)}</span>
                        </div>
                    ` : ''}
                    ${quest.locations.critical ? `
                        <div class="location-card critical">
                            <span class="location-badge">Critical</span>
                            <span class="location-icon">⚠️</span>
                            <span class="location-name">${formatKey(quest.locations.critical)}</span>
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
                        if (!relatedQuest) return `
                            <div class="related-quest-card missing">
                                <div class="related-quest-info">
                                    <span class="related-quest-type">❓</span>
                                    <span class="related-quest-title">${formatKey(qId)}</span>
                                </div>
                                <span class="related-quest-status status-unknown">Unknown</span>
                            </div>
                        `;
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
                    <span class="timeline-value">${formatDate(quest.dates?.added) || 'Unknown'}</span>
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
                        <span class="timeline-value">${formatDate(quest.dates.deadline)}${quest.dates.deadline.hour !== undefined ? ` (${String(quest.dates.deadline.hour).padStart(2, '0')}:${String(quest.dates.deadline.minute || 0).padStart(2, '0')})` : ''}</span>
                    </div>
                ` : ''}
            </div>
        </section>
    `;

    // Hide loading state
    const loadingEl = document.getElementById('modal-loading');
    if (loadingEl) loadingEl.style.display = 'none';

    // Add click handlers for related quests
    modalContent.querySelectorAll('.related-quest-card[data-quest-id]').forEach(card => {
        card.addEventListener('click', () => {
            const relatedQuestId = card.dataset.questId;
            if (relatedQuestId && QUEST_DATA[relatedQuestId]) {
                playSound?.('click.mp3');
                renderQuestModal(relatedQuestId);
                // Scroll modal to top
                modalContent.scrollTop = 0;
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

    // Add click handlers for location cards
    modalContent.querySelectorAll('.location-card').forEach(card => {
        card.addEventListener('click', () => {
            const locationName = card.querySelector('.location-name')?.textContent;
            if (locationName && typeof openLocationModal === 'function') {
                playSound?.('click.mp3');
                // Convert display name back to key format
                const locationKey = locationName.toLowerCase().replace(/\s+/g, '_');
                openLocationModal(locationKey);
            }
        });
    });

    // Show modal
    questModal.classList.add('active');
    questModal.hidden = false;
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modalContent.focus();
    modalContent.scrollTop = 0;
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