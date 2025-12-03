// quests-constants.js - ADD these enhanced status definitions

export const QUEST_STATUS = {
    HIDDEN: 'hidden',
    AVAILABLE: 'available',
    ACTIVE: 'active',
    ONGOING: 'ongoing',
    PENDING: 'pending',
    PAUSED: 'paused',
    COMPLETED: 'completed',
    FAILED: 'failed',
    EXPIRED: 'expired'
};

// Enhanced status configuration with visual styling
export const QUEST_STATUS_CONFIG = {
    hidden: {
        label: 'Hidden',
        icon: '👁️‍🗨️',
        color: '#6c757d',
        bgColor: 'rgba(108, 117, 125, 0.15)',
        borderColor: 'rgba(108, 117, 125, 0.3)',
        glowColor: 'transparent',
        animation: null
    },
    available: {
        label: 'Available',
        icon: '📋',
        color: '#74c0fc',
        bgColor: 'rgba(116, 192, 252, 0.15)',
        borderColor: 'rgba(116, 192, 252, 0.4)',
        glowColor: 'rgba(116, 192, 252, 0.2)',
        animation: 'pulse-soft'
    },
    active: {
        label: 'Active',
        icon: '⚡',
        color: '#ffd43b',
        bgColor: 'rgba(255, 212, 59, 0.15)',
        borderColor: 'rgba(255, 212, 59, 0.5)',
        glowColor: 'rgba(255, 212, 59, 0.3)',
        animation: 'pulse-glow'
    },
    ongoing: {
        label: 'In Progress',
        icon: '🔄',
        color: '#69db7c',
        bgColor: 'rgba(105, 219, 124, 0.15)',
        borderColor: 'rgba(105, 219, 124, 0.4)',
        glowColor: 'rgba(105, 219, 124, 0.2)',
        animation: 'spin-slow'
    },
    pending: {
        label: 'Pending',
        icon: '⏳',
        color: '#ffa94d',
        bgColor: 'rgba(255, 169, 77, 0.15)',
        borderColor: 'rgba(255, 169, 77, 0.4)',
        glowColor: 'rgba(255, 169, 77, 0.2)',
        animation: 'hourglass'
    },
    paused: {
        label: 'Paused',
        icon: '⏸️',
        color: '#adb5bd',
        bgColor: 'rgba(173, 181, 189, 0.15)',
        borderColor: 'rgba(173, 181, 189, 0.4)',
        glowColor: 'transparent',
        animation: null
    },
    completed: {
        label: 'Completed',
        icon: '✅',
        color: '#51cf66',
        bgColor: 'rgba(81, 207, 102, 0.15)',
        borderColor: 'rgba(81, 207, 102, 0.5)',
        glowColor: 'rgba(81, 207, 102, 0.3)',
        animation: 'success-flash'
    },
    failed: {
        label: 'Failed',
        icon: '💀',
        color: '#ff6b6b',
        bgColor: 'rgba(255, 107, 107, 0.2)',
        borderColor: 'rgba(255, 107, 107, 0.6)',
        glowColor: 'rgba(255, 107, 107, 0.4)',
        animation: 'shake-fade',
        strikethrough: true
    },
    expired: {
        label: 'Expired',
        icon: '⌛',
        color: '#868e96',
        bgColor: 'rgba(134, 142, 150, 0.15)',
        borderColor: 'rgba(134, 142, 150, 0.3)',
        glowColor: 'transparent',
        animation: 'fade-out',
        strikethrough: true
    }
};

// Milestone-specific statuses
export const MILESTONE_STATUS_CONFIG = {
    completed: {
        label: 'Complete',
        icon: '✓',
        color: '#51cf66',
        bgColor: 'rgba(81, 207, 102, 0.15)',
        lineStyle: 'solid'
    },
    active: {
        label: 'Active',
        icon: '►',
        color: '#ffd43b',
        bgColor: 'rgba(255, 212, 59, 0.15)',
        lineStyle: 'dashed',
        pulse: true
    },
    pending: {
        label: 'Pending',
        icon: '○',
        color: '#adb5bd',
        bgColor: 'transparent',
        lineStyle: 'dotted'
    },
    locked: {
        label: 'Locked',
        icon: '🔒',
        color: '#495057',
        bgColor: 'rgba(73, 80, 87, 0.1)',
        lineStyle: 'none',
        locked: true
    },
    failed: {
        label: 'Failed',
        icon: '✗',
        color: '#ff6b6b',
        bgColor: 'rgba(255, 107, 107, 0.15)',
        lineStyle: 'solid',
        strikethrough: true
    },
    skipped: {
        label: 'Skipped',
        icon: '↷',
        color: '#868e96',
        bgColor: 'transparent',
        lineStyle: 'dotted',
        strikethrough: true
    }
};

// Goal status configuration
export const GOAL_STATUS_CONFIG = {
    completed: { icon: '✓', color: '#51cf66', strike: false },
    active: { icon: '►', color: '#ffd43b', strike: false },
    pending: { icon: '○', color: '#adb5bd', strike: false },
    locked: { icon: '🔒', color: '#495057', strike: false },
    failed: { icon: '✗', color: '#ff6b6b', strike: true },
    optional: { icon: '◇', color: '#74c0fc', strike: false }
};
export const QUEST_PRIORITY = {
    CRITICAL: { level: 5, label: 'CRITICAL', color: '#ff4444', icon: '🔴' },
    HIGH: { level: 4, label: 'High', color: '#ff8c00', icon: '🟠' },
    MEDIUM: { level: 3, label: 'Medium', color: '#ffd700', icon: '🟡' },
    LOW: { level: 2, label: 'Low', color: '#51cf66', icon: '🟢' },
    PASSIVE: { level: 1, label: 'Passive', color: '#74c0fc', icon: '🔵' }
};

export const QUEST_TYPES = {
    MAIN: { id: 'main', label: 'Main Story', icon: '⭐', color: '#ffd700' },
    PERSONAL: { id: 'personal', label: 'Personal', icon: '👤', color: '#da77f2' },
    FACTION: { id: 'faction', label: 'Faction', icon: '🏛️', color: '#74c0fc' },
    BOUNTY: { id: 'bounty', label: 'Bounty', icon: '💰', color: '#51cf66' },
    MYSTERY: { id: 'mystery', label: 'Mystery', icon: '🔮', color: '#b197fc' },
    RESCUE: { id: 'rescue', label: 'Rescue', icon: '🆘', color: '#ff6b6b' },
    COMBAT: { id: 'combat', label: 'Combat', icon: '⚔️', color: '#ff8787' },
    EXPLORATION: { id: 'exploration', label: 'Exploration', icon: '🗺️', color: '#ffc078' },
    REQUEST: { id: 'request', label: 'Request', icon: '📜', color: '#e9ecef' },
    WORLD: { id: 'world', label: 'World Event', icon: '🌍', color: '#748ffc' }
};

export const DIFFICULTY = {
    TRIVIAL: { level: 1, label: 'Trivial', stars: '★☆☆☆☆' },
    EASY: { level: 2, label: 'Easy', stars: '★★☆☆☆' },
    MODERATE: { level: 3, label: 'Moderate', stars: '★★★☆☆' },
    CHALLENGING: { level: 4, label: 'Challenging', stars: '★★★★☆' },
    HARD: { level: 5, label: 'Hard', stars: '★★★★★' },
    DEADLY: { level: 6, label: 'Deadly', stars: '💀' }
};
        