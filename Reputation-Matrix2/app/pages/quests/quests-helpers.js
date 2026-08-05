// quests-helpers.js - NEW FILE for rendering helpers

import { QUEST_STATUS_CONFIG, MILESTONE_STATUS_CONFIG, GOAL_STATUS_CONFIG, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from '../../../data/quest-system/constants.js';

/**
 * Render a quest status badge
 */
export function renderQuestStatusBadge(status, options = {}) {
    const config = QUEST_STATUS_CONFIG[status] || QUEST_STATUS_CONFIG.pending;
    const { compact = false, showLabel = true, showIcon = true } = options;

    const classes = [
        'quest-status-badge',
        `status-${status}`,
        config.animation ? `anim-${config.animation}` : '',
        config.strikethrough ? 'strikethrough' : '',
        compact ? 'compact' : ''
    ].filter(Boolean).join(' ');

    const style = `
        --status-color: ${config.color};
        --status-bg: ${config.bgColor};
        --status-border: ${config.borderColor};
        --status-glow: ${config.glowColor};
    `;

    return `
        <span class="${classes}" style="${style}" data-status="${status}">
            ${showIcon ? `<span class="status-icon">${config.icon}</span>` : ''}
            ${showLabel ? `<span class="status-label">${config.label}</span>` : ''}
        </span>
    `;
}

/**
 * Render a milestone status indicator
 */
export function renderMilestoneStatus(status, options = {}) {
    const config = MILESTONE_STATUS_CONFIG[status] || MILESTONE_STATUS_CONFIG.pending;
    const { inline = false } = options;

    const classes = [
        'milestone-status',
        `ms-${status}`,
        config.pulse ? 'pulsing' : '',
        config.locked ? 'locked' : '',
        config.strikethrough ? 'strikethrough' : '',
        inline ? 'inline' : ''
    ].filter(Boolean).join(' ');

    return `
        <span class="${classes}" style="--ms-color: ${config.color}; --ms-bg: ${config.bgColor};">
            <span class="ms-icon">${config.icon}</span>
            <span class="ms-label">${config.label}</span>
        </span>
    `;
}

/**
 * Render a goal checkbox/status
 */
export function renderGoalStatus(status, text, options = {}) {
    const config = GOAL_STATUS_CONFIG[status] || GOAL_STATUS_CONFIG.pending;
    const { priority = null } = options;

    const classes = [
        'goal-item',
        `goal-${status}`,
        config.strike ? 'struck' : '',
        priority ? `priority-${priority}` : ''
    ].filter(Boolean).join(' ');

    return `
        <div class="${classes}">
            <span class="goal-checkbox" style="color: ${config.color};">${config.icon}</span>
            <span class="goal-text">${text}</span>
            ${priority ? `<span class="goal-priority priority-${priority}">${priority.toUpperCase()}</span>` : ''}
        </div>
    `;
}

/**
 * Render a priority badge
 */
export function renderPriorityBadge(priority) {
    if (!priority || typeof priority === 'string') {
        // Handle string priorities
        const priorityMap = {
            critical: QUEST_PRIORITY.CRITICAL,
            high: QUEST_PRIORITY.HIGH,
            medium: QUEST_PRIORITY.MEDIUM,
            low: QUEST_PRIORITY.LOW,
            passive: QUEST_PRIORITY.PASSIVE
        };
        priority = priorityMap[priority?.toLowerCase()] || QUEST_PRIORITY.MEDIUM;
    }

    return `
        <span class="priority-badge priority-${priority.label.toLowerCase()}" 
              style="--priority-color: ${priority.color};">
            <span class="priority-icon">${priority.icon}</span>
            <span class="priority-label">${priority.label}</span>
        </span>
    `;
}

/**
 * Render a quest type badge
 */
export function renderQuestTypeBadge(type) {
    if (!type) return '';
    
    // Handle both object and string types
    const typeConfig = typeof type === 'string' 
        ? Object.values(QUEST_TYPES).find(t => t.id === type) 
        : type;
    
    if (!typeConfig) return '';

    return `
        <span class="quest-type-badge" style="--type-color: ${typeConfig.color};">
            <span class="type-icon">${typeConfig.icon}</span>
            <span class="type-label">${typeConfig.label}</span>
        </span>
    `;
}

/**
 * Render difficulty stars/indicator
 */
export function renderDifficulty(difficulty) {
    if (!difficulty) return '';

    // Handle complex difficulty objects
    if (typeof difficulty === 'object' && difficulty.overall) {
        difficulty = difficulty.overall;
    }

    const config = typeof difficulty === 'string'
        ? Object.values(DIFFICULTY).find(d => d.label.toLowerCase() === difficulty.toLowerCase())
        : difficulty;

    if (!config) return '';

    const isDeadly = config.level >= 6;

    return `
        <span class="difficulty-badge ${isDeadly ? 'deadly' : ''}" data-level="${config.level}">
            <span class="difficulty-stars">${config.stars}</span>
            <span class="difficulty-label">${config.label}</span>
        </span>
    `;
}

/**
 * Render a complete quest card header
 */
export function renderQuestHeader(quest) {
    return `
        <div class="quest-header">
            <div class="quest-badges">
                ${renderQuestTypeBadge(quest.type)}
                ${renderQuestStatusBadge(quest.status)}
                ${quest.priority ? renderPriorityBadge(quest.priority) : ''}
            </div>
            <h3 class="quest-title">
                ${quest.title}
                ${quest.subtitle ? `<span class="quest-subtitle">${quest.subtitle}</span>` : ''}
            </h3>
            <div class="quest-meta">
                ${renderDifficulty(quest.difficulty)}
                ${quest.dates?.deadline ? renderDeadlineIndicator(quest) : ''}
            </div>
        </div>
    `;
}

/**
 * Render deadline indicator
 */
export function renderDeadlineIndicator(quest) {
    if (!quest.dates?.deadline) return '';
    
    // Import would create circular dependency, so inline the calculation
    const deadline = quest.dates.deadline;
    // Simplified - in real usage, import CURRENT_GAME_DATE
    const daysLeft = 5; // Placeholder - calculate properly in actual implementation
    
    let urgencyClass = 'normal';
    if (daysLeft <= 1) urgencyClass = 'critical';
    else if (daysLeft <= 3) urgencyClass = 'urgent';
    else if (daysLeft <= 7) urgencyClass = 'warning';

    return `
        <span class="deadline-indicator ${urgencyClass}">
            <span class="deadline-icon">⏰</span>
            <span class="deadline-text">${daysLeft} day${daysLeft !== 1 ? 's' : ''} left</span>
        </span>
    `;
}

/**
 * Render a milestone timeline
 */
export function renderMilestoneTimeline(milestones) {
    if (!milestones || milestones.length === 0) return '';

    return `
        <div class="milestone-timeline">
            ${milestones.map((milestone, index) => {
                const statusConfig = MILESTONE_STATUS_CONFIG[milestone.status] || MILESTONE_STATUS_CONFIG.pending;
                const isLast = index === milestones.length - 1;
                
                return `
                    <div class="milestone-node ms-${milestone.status} ${statusConfig.locked ? 'locked' : ''}">
                        <div class="milestone-connector" style="--line-style: ${statusConfig.lineStyle};">
                            <div class="milestone-dot" style="--dot-color: ${statusConfig.color};">
                                ${statusConfig.icon}
                            </div>
                            ${!isLast ? '<div class="milestone-line"></div>' : ''}
                        </div>
                        <div class="milestone-content">
                            <div class="milestone-header">
                                <h4 class="milestone-title ${statusConfig.strikethrough ? 'struck' : ''}">
                                    ${milestone.title}
                                </h4>
                                ${renderMilestoneStatus(milestone.status, { inline: true })}
                            </div>
                            <p class="milestone-description">${milestone.description}</p>
                            ${milestone.goals ? renderGoalsList(milestone.goals) : ''}
                            ${milestone.outcomes ? renderOutcomesList(milestone.outcomes) : ''}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

/**
 * Render goals list
 */
export function renderGoalsList(goals) {
    if (!goals || goals.length === 0) return '';

    return `
        <div class="goals-list">
            ${goals.map(goal => {
                const status = goal.status || 'pending';
                return renderGoalStatus(status, goal.text, { priority: goal.priority });
            }).join('')}
        </div>
    `;
}

/**
 * Render outcomes list
 */
export function renderOutcomesList(outcomes) {
    if (!outcomes || outcomes.length === 0) return '';

    return `
        <ul class="outcomes-list">
            ${outcomes.map(outcome => `<li class="outcome-item">${outcome}</li>`).join('')}
        </ul>
    `;
}