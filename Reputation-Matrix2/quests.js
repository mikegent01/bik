
// quests.js - Overhauled Quest System

import { 
    QUEST_DATA, 
    QUEST_STATUS, 
    QUEST_PRIORITY, 
    QUEST_TYPES,
    DIFFICULTY,
    getQuestProgress,
    getDaysUntilDeadline,
    isQuestUpdatedRecently,
    getQuestsByArc,
    getUrgentQuests
} from './quests-data.js';
import { BOUNTY_BOARD_QUESTS } from './bounty-quests-data.js';
import { playSound } from './common.js';
import { state } from './state.js';
import { LORE_DATA, STORY_ARCS } from './lore.js';
import { MAP_DATA } from './map-data.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from './calendar-data.js';

// ============================================
// DOM ELEMENTS
// ============================================
const mainQuestContainer = document.getElementById('quest-container');
const bountyBoardContainer = document.getElementById('quest-board-list');
const questCounter = document.getElementById('quest-counter');
const filtererContainer = document.getElementById('quest-filterer');
const statusFiltererContainer = document.getElementById('status-filterer');
const questSummary = document.getElementById('quest-summary');

// ============================================
// STATE
// ============================================
let filterStates = {
    assignees: {},
    statuses: {},
    types: {},
    priorities: {},
    arcs: {},
    tags: {}
};

let sortMode = 'priority'; // 'priority', 'date', 'progress', 'deadline'
let viewMode = 'cards'; // 'cards', 'compact', 'timeline'
let expandedQuests = new Set();
let selectedQuestId = null;

// Initialize filter states
function initFilterStates() {
    // Assignees
    const allAssignees = new Set();
    Object.values(QUEST_DATA).forEach(q => {
        q.assignees?.forEach(a => allAssignees.add(a));
        if (q.primaryAssignee) allAssignees.add(q.primaryAssignee);
    });
    allAssignees.forEach(a => filterStates.assignees[a] = 'off');

    // Statuses
    Object.values(QUEST_STATUS).forEach(s => filterStates.statuses[s] = 'off');

    // Types
    Object.keys(QUEST_TYPES).forEach(t => filterStates.types[t.toLowerCase()] = 'off');

    // Priorities
    Object.keys(QUEST_PRIORITY).forEach(p => filterStates.priorities[p.toLowerCase()] = 'off');

    // Arcs
    Object.keys(STORY_ARCS || {}).forEach(a => filterStates.arcs[a] = 'off');

    // Tags
    const allTags = new Set();
    Object.values(QUEST_DATA).forEach(q => q.tags?.forEach(t => allTags.add(t)));
    allTags.forEach(t => filterStates.tags[t] = 'off');
}

// ============================================
// DATE UTILITIES
// ============================================
function formatDate(date) {
    if (!date) return 'Unknown';
    if (typeof date === 'string') return date; // Handle legacy string dates
    const month = CALENDAR_DATA?.months?.values?.[date.monthIndex];
    return `${month?.name || 'Month'} ${date.day}, ${date.year}`;
}

function formatRelativeDate(date) {
    if (!date) return '';
    if (typeof date === 'string') return date; // Handle legacy
    const current = CURRENT_GAME_DATE;
    const dateTotal = date.year * 365 + date.monthIndex * 30 + date.day;
    const currentTotal = current.year * 365 + current.monthIndex * 30 + current.day;
    const diff = currentTotal - dateTotal;

    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 0) return `In ${Math.abs(diff)} days`;
    if (diff < 7) return `${diff} days ago`;
    if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
    return formatDate(date);
}

// ============================================
// DATA NORMALIZATION
// ============================================
function normalizeQuestData(quest) {
    // fix milestones vs steps
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

    // fix priority
    let priority = quest.priority;
    if (typeof priority === 'string') {
        priority = Object.values(QUEST_PRIORITY).find(p => p.label.toLowerCase() === priority.toLowerCase()) || QUEST_PRIORITY.MEDIUM;
    }
    if (!priority) priority = QUEST_PRIORITY.MEDIUM;

    // fix type
    let type = quest.type;
    if (typeof type === 'string') {
        type = Object.values(QUEST_TYPES).find(t => t.id === type.toLowerCase()) || QUEST_TYPES.REQUEST;
    }
    if (!type) type = QUEST_TYPES.REQUEST;

    // fix assignee formatting - IMPROVED LOGIC
    const formatName = (key) => {
        if (!key) return null;
        if (key === 'full_party' || key === 'party') return 'The Party';
        if (key === 'the' || key === 'The') return null; // Filter out erroneous 'The' keys

        // Check Character Data
        const char = LORE_DATA?.characters?.[key] || LORE_DATA?.auxiliary_party?.[key];
        if (char) return char.name;
        
        // Check Faction Data
        const faction = LORE_DATA?.factions?.[key];
        if (faction) return faction.name;

        // Default Formatting
        return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    };

    let assignees = quest.assignees || [];
    if (quest.assignee) assignees.push(quest.assignee);
    if (quest.primaryAssignee) assignees.push(quest.primaryAssignee);
    
    // Filter unique and valid names
    const uniqueNames = [...new Set(assignees.map(formatName).filter(Boolean))];
    const assigneeNames = uniqueNames.length > 0 ? uniqueNames.join(', ') : 'Unassigned';

    return {
        ...quest,
        milestones,
        priority,
        type,
        assigneeNames
    };
}


// ============================================
// FILTERING
// ============================================
function applyFilters(quests) {
    const includeAssignees = Object.entries(filterStates.assignees).filter(([k, v]) => v === 'include').map(([k]) => k);
    const excludeAssignees = Object.entries(filterStates.assignees).filter(([k, v]) => v === 'exclude').map(([k]) => k);
    const includeStatuses = Object.entries(filterStates.statuses).filter(([k, v]) => v === 'include').map(([k]) => k);
    const excludeStatuses = Object.entries(filterStates.statuses).filter(([k, v]) => v === 'exclude').map(([k]) => k);
    
    return quests.filter(quest => {
        const nQuest = normalizeQuestData(quest);

        // Assignee filter
        const questAssignees = [...(quest.assignees || []), quest.primaryAssignee, quest.assigneeKey].filter(Boolean);
        if (includeAssignees.length > 0 && !questAssignees.some(a => includeAssignees.includes(a))) return false;
        if (excludeAssignees.length > 0 && questAssignees.some(a => excludeAssignees.includes(a))) return false;

        // Status filter
        if (includeStatuses.length > 0 && !includeStatuses.includes(quest.status)) return false;
        if (excludeStatuses.includes(quest.status)) return false;

        return true;
    });
}

// ============================================
// SORTING
// ============================================
function sortQuests(quests) {
    const statusOrder = {
        [QUEST_STATUS.ACTIVE]: 1,
        [QUEST_STATUS.ONGOING]: 2,
        [QUEST_STATUS.PENDING]: 3,
        [QUEST_STATUS.AVAILABLE]: 4,
        [QUEST_STATUS.PAUSED]: 5,
        [QUEST_STATUS.HIDDEN]: 6,
        [QUEST_STATUS.COMPLETED]: 7,
        [QUEST_STATUS.FAILED]: 8,
        [QUEST_STATUS.EXPIRED]: 9
    };

    return [...quests].sort((a, b) => {
        const nA = normalizeQuestData(a);
        const nB = normalizeQuestData(b);

        switch (sortMode) {
            case 'priority':
                const priorityDiff = (nB.priority.level || 0) - (nA.priority.level || 0);
                if (priorityDiff !== 0) return priorityDiff;
                break;
            // ... other sorts
        }

        // Secondary: status order
        const statusDiff = (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
        if (statusDiff !== 0) return statusDiff;

        return a.title.localeCompare(b.title);
    });
}

function formatRewardValue(val) {
    if (typeof val === 'object' && val !== null) {
        if (val.min !== undefined && val.max !== undefined) {
            return `${val.min}-${val.max}`;
        }
        // Fallback if object but not min/max
        return Object.values(val).join('-');
    }
    return val;
}

// ============================================
// RENDER: Quest Card (New Format)
// ============================================
function renderQuestCard(rawQuest) {
    const quest = normalizeQuestData(rawQuest); // Normalize data first
    const isExpanded = expandedQuests.has(quest.id);
    
    // Progress calc
    const completedMilestones = quest.milestones.filter(m => m.status === 'completed').length;
    const totalMilestones = quest.milestones.length;
    const progress = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0;

    const deadline = getDaysUntilDeadline(quest);
    const isUrgent = deadline !== null && deadline <= 3;
    const isUpdated = isQuestUpdatedRecently(quest, 2);
    const arc = quest.arcId && STORY_ARCS ? STORY_ARCS[quest.arcId] : null;
    const difficultyInfo = quest.difficulty?.overall || DIFFICULTY.MODERATE;

    const goldReward = quest.rewards?.gold ? formatRewardValue(quest.rewards.gold) : null;
    const xpReward = quest.rewards?.xp ? formatRewardValue(quest.rewards.xp) : null;

    return `
        <div class="quest-card status-${quest.status} priority-${quest.priority.label.toLowerCase()} ${isExpanded ? 'is-expanded' : ''} ${isUrgent ? 'is-urgent' : ''} ${isUpdated ? 'is-updated' : ''}" 
             data-quest-id="${quest.id}">
            
            <!-- Header -->
            <div class="quest-header">
                <div class="quest-priority-marker" style="background: ${quest.priority.color}" title="${quest.priority.label} Priority">
                    ${quest.priority.icon}
                </div>
                
                <div class="quest-title-section">
                    <div class="quest-title-row">
                        <h4 class="quest-title">${quest.title}</h4>
                        ${isUpdated ? '<span class="updated-badge">NEW</span>' : ''}
                        ${isUrgent ? `<span class="deadline-badge">⏰ ${deadline === 0 ? 'TODAY' : deadline + 'd'}</span>` : ''}
                    </div>
                    ${quest.subtitle ? `<p class="quest-subtitle">${quest.subtitle}</p>` : ''}
                    
                    <div class="quest-meta-row">
                        <span class="quest-type" style="color: ${quest.type.color}">${quest.type.icon} ${quest.type.label}</span>
                        <span class="quest-assignee">👤 ${quest.assigneeNames}</span>
                        ${quest.difficulty ? `<span class="quest-difficulty" title="Difficulty: ${difficultyInfo.label}">${difficultyInfo.stars}</span>` : ''}
                    </div>
                </div>

                <div class="quest-header-right">
                    <div class="quest-status status-${quest.status}">${quest.status.toUpperCase()}</div>
                    <div class="quest-expand-icon">${isExpanded ? '▲' : '▼'}</div>
                </div>
            </div>

            <!-- Progress Bar -->
            <div class="quest-progress-section">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%; background: ${quest.priority.color}"></div>
                </div>
                <div class="progress-text">
                    <span>${progress}% Complete</span>
                    <span>${completedMilestones}/${totalMilestones} Steps</span>
                </div>
            </div>

            <!-- Collapsible Body -->
            <div class="quest-body ${isExpanded ? 'expanded' : ''}">
                
                <!-- Objective -->
                <div class="quest-section objective-section">
                    <h5>📋 Objective</h5>
                    <p>${quest.objective}</p>
                </div>

                <!-- Description -->
                ${quest.description ? `
                    <div class="quest-section description-section">
                        <h5>📖 Details</h5>
                        <p>${quest.description}</p>
                    </div>
                ` : ''}

                <!-- Arc Connection -->
                ${arc ? `
                    <div class="quest-section arc-section">
                        <div class="arc-badge" style="border-color: ${arc.status === 'active' ? '#ff6b6b' : '#51cf66'}">
                            <span class="arc-icon">${arc.icon}</span>
                            <span class="arc-name">${arc.name}</span>
                            <span class="arc-status">${arc.status}</span>
                        </div>
                    </div>
                ` : ''}

                <!-- Dates -->
                <div class="quest-section dates-section">
                    <div class="date-grid">
                        <div class="date-item">
                            <span class="date-label">Added:</span>
                            <span class="date-value">${formatDate(quest.dates?.added)}</span>
                        </div>
                        ${quest.dates?.updated ? `
                        <div class="date-item">
                            <span class="date-label">Updated:</span>
                            <span class="date-value">${formatRelativeDate(quest.dates?.updated)}</span>
                        </div>` : ''}
                        ${quest.dates?.deadline ? `
                            <div class="date-item ${isUrgent ? 'urgent' : ''}">
                                <span class="date-label">Deadline:</span>
                                <span class="date-value">${formatDate(quest.dates.deadline)} (${deadline} days)</span>
                            </div>
                        ` : ''}
                    </div>
                </div>

                <!-- Milestones -->
                ${quest.milestones.length > 0 ? `
                    <div class="quest-section milestones-section">
                        <h5>🎯 Steps</h5>
                        <div class="milestones-list">
                            ${quest.milestones.map(milestone => renderMilestone(milestone, quest.status === 'hidden')).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Rewards -->
                ${quest.rewards ? `
                    <div class="quest-section rewards-section">
                        <h5>🎁 Rewards & Outcomes</h5>
                        <div class="rewards-grid">
                            ${goldReward ? `<span class="reward-item gold">💰 ${goldReward} Gold</span>` : ''}
                            ${xpReward ? `<span class="reward-item xp">⭐ ${xpReward} XP</span>` : ''}
                            ${Array.isArray(quest.rewards) ? quest.rewards.map(r => `<span class="reward-item item">📦 ${r}</span>`).join('') : ''}
                            ${quest.rewards.guaranteed ? quest.rewards.guaranteed.map(r => {
                                let label = r.name;
                                if (!label && r.type === 'reputation') {
                                    const factionName = r.faction ? r.faction.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Faction';
                                    label = `${r.amount > 0 ? '+' : ''}${r.amount} Rep (${factionName})`;
                                }
                                return `<span class="reward-item item">${r.type === 'item' ? '📦' : '🎖️'} ${label || 'Unknown Reward'}</span>`;
                            }).join('') : ''}
                        </div>

                        <!-- NEW: Conditional Rewards Block -->
                        ${quest.rewards.conditional ? `
                            <div class="conditional-rewards">
                                <div class="rewards-list">
                                    ${quest.rewards.conditional.map(item => {
                                        // 1. Determine Status
                                        const isFailed = item.status === 'failed';
                                        const isCompleted = item.status === 'earned' || item.status === 'completed';
                                        
                                        // 2. Assign CSS Classes
                                        let statusClass = 'reward-pending';
                                        if (isCompleted) statusClass = 'reward-completed';
                                        if (isFailed) statusClass = 'reward-failed';

                                        // 3. Icons
                                        const icon = isCompleted ? '✅' : (isFailed ? '❌' : '⏳');
                                        
                                        // 4. Format Label
                                        let rLabel = item.reward.name || 'Bonus';
                                        if (item.reward.type === 'gold') rLabel = `${item.reward.amount} Gold`;
                                        if (item.reward.type === 'xp') rLabel = `${item.reward.amount} XP`;

                                        return `
                                        <div class="conditional-reward-item ${statusClass}">
                                            <div class="reward-condition">
                                                <span class="reward-status-icon">${icon}</span>
                                                <span class="reward-condition-text ${isFailed ? 'struck' : ''}">${item.condition}</span>
                                            </div>
                                            <div class="reward-details">
                                                <span class="reward-type">${item.reward.type}</span>
                                                <span class="reward-name ${isFailed ? 'struck' : ''}">${rLabel}</span>
                                                <span class="reward-desc">${item.reward.description || ''}</span>
                                            </div>
                                            <!-- Inject Failure Reason if Failed -->
                                            ${isFailed && item.reason ? `<span class="fail-reason">${item.reason}</span>` : ''}
                                        </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}

                <!-- Consequences -->
                ${quest.consequences ? `
                    <div class="quest-section consequences-section">
                        <h5>⚠ Consequences</h5>
                        <div class="consequences-grid">
                            ${quest.consequences.success ? `<div class="consequence success"><span class="c-label">Success:</span> ${quest.consequences.success}</div>` : ''}
                            ${quest.consequences.partial ? `<div class="consequence partial"><span class="c-label">Partial:</span> ${quest.consequences.partial}</div>` : ''}
                            ${quest.consequences.failure ? `<div class="consequence failure"><span class="c-label">Failure:</span> ${quest.consequences.failure}</div>` : ''}
                        </div>
                    </div>
                ` : ''}

                <!-- Hints -->
                ${quest.hints && quest.hints.length > 0 ? `
                    <div class="quest-section hints-section">
                        <h5>💡 Tactical Intel</h5>
                        <ul class="hints-list">
                            ${quest.hints.map(h => `<li>${h}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}

                <!-- Tags -->
                ${quest.tags && quest.tags.length > 0 ? `
                    <div class="quest-section tags-section">
                        <div class="quest-tags">
                            ${quest.tags.map(tag => `<span class="quest-tag">#${tag}</span>`).join('')}
                        </div>
                    </div>
                ` : ''}

            </div>
        </div>
    `;
}
// ============================================
// RENDER: Milestone
// ============================================
function renderMilestone(milestone, isQuestHidden) {
    const isLocked = milestone.status === 'locked';
    const isCompleted = milestone.status === 'completed';
    const isActive = milestone.status === 'active';

    const completedGoals = milestone.goals?.filter(g => g.status === 'completed').length || 0;
    const totalGoals = milestone.goals?.length || 0;
    const goalProgress = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

    return `
        <div class="milestone status-${milestone.status}">
            <div class="milestone-header">
                <span class="milestone-icon">
                    ${isCompleted ? '✅' : isActive ? '🔵' : isLocked ? '🔒' : '⏳'}
                </span>
                <span class="milestone-title">${milestone.title}</span>
            </div>
            <p class="milestone-desc">${milestone.description}</p>
            
            ${milestone.goals && milestone.goals.length > 0 && !isLocked ? `
                <div class="milestone-goals">
                    <div class="goals-progress">
                        <div class="goals-bar">
                            <div class="goals-fill" style="width: ${goalProgress}%"></div>
                        </div>
                        <span class="goals-count">${completedGoals}/${totalGoals}</span>
                    </div>
                    <ul class="goals-list">
                        ${milestone.goals.map(goal => `
                            <li class="goal-item status-${goal.status}">
                                <span class="goal-checkbox">
                                    ${goal.status === 'completed' ? '☑' : '☐'}
                                </span>
                                <span class="goal-text">${goal.text}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

// ============================================
// RENDER: Category Section
// ============================================
function renderCategory(title, quests, cssClass = '') {
    return `
        <div class="quest-category ${cssClass}">
            <div class="category-header">
                <h3 class="quest-category-title">${title}</h3>
                <span class="category-count">${quests.length}</span>
            </div>
            <div class="quest-list">
                ${quests.map(renderQuestCard).join('')}
            </div>
        </div>
    `;
}

// ============================================
// RENDER: Main Quest Container
// ============================================
function renderQuests() {
    if (!mainQuestContainer) return;

    // Get and filter quests
    let quests = Object.values(QUEST_DATA).filter(q => q && q.status);
    quests = applyFilters(quests);
    quests = sortQuests(quests);

    // Separate by status
    const activeQuests = quests.filter(q => [QUEST_STATUS.ACTIVE, QUEST_STATUS.ONGOING].includes(q.status));
    const pendingQuests = quests.filter(q => [QUEST_STATUS.PENDING, QUEST_STATUS.AVAILABLE].includes(q.status));
    const completedQuests = quests.filter(q => q.status === QUEST_STATUS.COMPLETED);
    const failedQuests = quests.filter(q => [QUEST_STATUS.FAILED, QUEST_STATUS.EXPIRED].includes(q.status));

    // Group active quests by category
    const activeByCategory = {};
    activeQuests.forEach(q => {
        const cat = q.category || 'Miscellaneous';
        if (!activeByCategory[cat]) activeByCategory[cat] = [];
        activeByCategory[cat].push(q);
    });

    // Sort categories (Main Story first)
    const sortedCategories = Object.keys(activeByCategory).sort((a, b) => {
        if (a === 'Main Story') return -1;
        if (b === 'Main Story') return 1;
        return a.localeCompare(b);
    });

    // Build HTML
    let html = '';

    if (quests.length === 0) {
        html = `
            <div class="no-quests">
                <p>No quests match the current filters.</p>
                <button class="control-btn" onclick="resetAllFilters()">Reset Filters</button>
            </div>
        `;
    } else {
        // Active quests by category
        for (const category of sortedCategories) {
            html += renderCategory(category, activeByCategory[category]);
        }

        // Other sections
        if (pendingQuests.length > 0) html += renderCategory("Available / Pending", pendingQuests, 'collapsed');
        if (completedQuests.length > 0) html += renderCategory("Completed", completedQuests, 'collapsed');
        if (failedQuests.length > 0) html += renderCategory("Failed / Expired", failedQuests, 'collapsed');
    }

    mainQuestContainer.innerHTML = html;
    updateQuestCounter(activeQuests.length, quests.length);
    renderDashboardStats();
}

// ============================================
// RENDER: Dashboard & Stats
// ============================================
function updateQuestCounter(active, total) {
    if (questCounter) {
        questCounter.textContent = `${active} Active / ${total} Total`;
    }
}

function renderDashboardStats() {
    if (!questSummary) return;

    // Calculate stats
    const quests = Object.values(QUEST_DATA);
    const urgent = getUrgentQuests();
    const active = quests.filter(q => q.status === QUEST_STATUS.ACTIVE);
    const completed = quests.filter(q => q.status === QUEST_STATUS.COMPLETED);
    
    // Party Load
    const partyLoad = {};
    state.party.forEach(p => partyLoad[p] = 0);
    
    active.forEach(q => {
        if (q.assignees) {
            q.assignees.forEach(a => {
                if (partyLoad[a] !== undefined) partyLoad[a]++;
            });
        }
        if (q.primaryAssignee && partyLoad[q.primaryAssignee] !== undefined) {
            partyLoad[q.primaryAssignee] += 0.5; // Weight primary higher? Or just count it.
        }
    });

    const memberLoadHTML = Object.entries(partyLoad).map(([member, count]) => {
        const charName = LORE_DATA.characters[member]?.name || member;
        const maxLoad = 5; // Arbitrary capacity
        const percent = Math.min(100, (count / maxLoad) * 100);
        
        return `
            <div class="member-load ${count > maxLoad ? 'overloaded' : ''}">
                <span class="member-name">${charName.split(' ')[0]}</span>
                <div class="load-bar">
                    <div class="load-fill" style="width: ${percent}%"></div>
                </div>
                <span class="load-count">${Math.floor(count)}</span>
            </div>
        `;
    }).join('');

    questSummary.innerHTML = `
        <div class="quest-dashboard">
            <div class="dashboard-stats">
                <div class="stat-card ${urgent.length > 0 ? 'urgent' : ''}">
                    <span class="stat-value">${urgent.length}</span>
                    <span class="stat-label">Urgent</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">${active.length}</span>
                    <span class="stat-label">Active</span>
                </div>
                 <div class="stat-card">
                    <span class="stat-value">${completed.length}</span>
                    <span class="stat-label">Done</span>
                </div>
            </div>
            
            <div class="dashboard-section">
                <h4>Party Workload</h4>
                <div class="party-quest-load">
                    ${memberLoadHTML}
                </div>
            </div>
        </div>
    `;

    if (urgent.length > 0) {
        const urgentBanner = document.createElement('div');
        urgentBanner.className = 'urgent-alert';
        urgentBanner.innerHTML = `<span class="alert-icon">⚠️</span><span class="alert-text">Attention: ${urgent.length} critical missions require immediate attention!</span>`;
        questSummary.prepend(urgentBanner);
    }
}


// ============================================
// RENDER: Bounty Board
// ============================================
function renderBountyBoard() {
    if (!bountyBoardContainer) return; 
    
    // Filter available bounties
    const bounties = BOUNTY_BOARD_QUESTS.filter(b => b.status === 'available' || b.status === 'active');
    
    if (bounties.length === 0) {
        bountyBoardContainer.innerHTML = '<p class="no-quests">No bounties posted.</p>';
        return;
    }

    bountyBoardContainer.innerHTML = bounties.map(bounty => `
        <div class="quest-note" data-id="${bounty.id}">
            <div class="quest-pin"></div>
            <div class="note-title">${bounty.title}</div>
            <div class="note-content">${bounty.description}</div>
            <div class="note-footer">
                <span>💰 ${bounty.reward}</span>
                <span>${bounty.location}</span>
            </div>
            ${bounty.status === 'active' ? '<div class="note-stamp">ACCEPTED</div>' : ''}
        </div>
    `).join('');
}

// ============================================
// RENDER: Filters
// ============================================
function renderFilters() {
    if (!filtererContainer) return;

    const createButtons = (category, options) => {
        return Object.keys(options).map(key => {
            const state = options[key]; // 'off', 'include', 'exclude'
            let label = key.replace(/_/g, ' ');
            if (category === 'assignees' && LORE_DATA.characters[key]) label = LORE_DATA.characters[key].name.split(' ')[0];

            return `<button class="filter-btn ${state}" data-category="${category}" data-key="${key}">
                ${label}
            </button>`;
        }).join('');
    };

    filtererContainer.innerHTML = `
        <div class="filter-group">
            <label>Assignee:</label>
            <div class="filter-buttons">${createButtons('assignees', filterStates.assignees)}</div>
        </div>
        <div class="filter-group">
            <label>Status:</label>
            <div class="filter-buttons">${createButtons('statuses', filterStates.statuses)}</div>
        </div>
        <div class="filter-group">
            <label>Type:</label>
            <div class="filter-buttons">${createButtons('types', filterStates.types)}</div>
        </div>
         <div class="filter-group">
            <label>Sort:</label>
            <div class="filter-buttons">
                <button class="sort-btn ${sortMode === 'priority' ? 'active' : ''}" data-sort="priority">Priority</button>
                <button class="sort-btn ${sortMode === 'date' ? 'active' : ''}" data-sort="date">Date</button>
                <button class="sort-btn ${sortMode === 'progress' ? 'active' : ''}" data-sort="progress">Progress</button>
            </div>
        </div>
    `;
}

// ============================================
// EVENT HANDLERS
// ============================================
function setupEventListeners() {
    // Filters
    filtererContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            playSound('click.mp3');
            const cat = e.target.dataset.category;
            const key = e.target.dataset.key;
            const currentState = filterStates[cat][key];
            
            // Cycle: off -> include -> exclude -> off
            let nextState = 'include';
            if (currentState === 'include') nextState = 'exclude';
            else if (currentState === 'exclude') nextState = 'off';
            
            filterStates[cat][key] = nextState;
            renderFilters();
            renderQuests();
        } else if (e.target.classList.contains('sort-btn')) {
            playSound('click.mp3');
            sortMode = e.target.dataset.sort;
            renderFilters();
            renderQuests();
        }
    });

    // Quest Cards (Expand/Collapse)
    mainQuestContainer.addEventListener('click', (e) => {
        const header = e.target.closest('.quest-header');
        if (header) {
            playSound('click.mp3');
            const card = header.closest('.quest-card');
            const id = card.dataset.questId;
            const body = card.querySelector('.quest-body');
            
            if (expandedQuests.has(id)) {
                expandedQuests.delete(id);
                card.classList.remove('is-expanded');
                body.classList.remove('expanded');
                header.querySelector('.quest-expand-icon').textContent = '▼';
            } else {
                expandedQuests.add(id);
                card.classList.add('is-expanded');
                body.classList.add('expanded');
                header.querySelector('.quest-expand-icon').textContent = '▲';
            }
        }

        // Category Headers
        const catHeader = e.target.closest('.category-header');
        if (catHeader) {
            playSound('click.mp3');
            const category = catHeader.closest('.quest-category');
            category.classList.toggle('collapsed');
        }
    });

    // Bounty Board
    bountyBoardContainer.addEventListener('click', (e) => {
        const note = e.target.closest('.quest-note');
        if (note) {
            // In a real app, this would open a modal or accept the quest
            playSound('click.mp3');
            alert(`Bounty Details: ${note.querySelector('.note-title').textContent}`);
        }
    });
}

window.resetAllFilters = function() {
    initFilterStates();
    renderFilters();
    renderQuests();
};

// ============================================
// INIT
// ============================================
function init() {
    if (!mainQuestContainer) return;
    initFilterStates();
    renderFilters();
    renderQuests();
    renderBountyBoard();
    setupEventListeners();
}

init();
