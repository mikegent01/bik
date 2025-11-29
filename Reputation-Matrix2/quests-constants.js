
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
        