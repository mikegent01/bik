// liberated-toads-system.js
import { state, loadState, saveState } from './state.js';

// ========================================
// DATA DEFINITIONS
// ========================================

const CURRENT_DAY = 20;

const ACCOUNTABILITY_DOCKET = [
    { name: "Archie Miser", crime: "Reckless Mind; Loss of Control resulting in Casualty." },
    { name: "King Bowser", crime: "Flame without Restraint; Destruction of Infrastructure." },
    { name: "Waluigi", crime: "Jester's Sin; Breach of Lab and Discipline." },
    { name: "Dan", crime: "Unstable Hand; Magic Endangerment of the Cohort." },
    { name: "Eager", crime: "Blind Loyalty; Crossing the Line of Engagement." }
];

// Skill tree definitions for each toad
const SKILL_TREES = {
    dan: [
        { name: "Divine Smite", icon: "⚔️", level: 2, description: "Channel holy energy into melee attacks" },
        { name: "Cure Wounds", icon: "💚", level: 3, description: "Heal allies with divine magic" },
        { name: "Shield of Faith", icon: "🛡️", level: 5, description: "Grant protective aura to self or ally" },
        { name: "Turn Undead", icon: "☀️", level: 7, description: "Force undead creatures to flee" },
        { name: "Aura of Protection", icon: "✨", level: 10, description: "Allies gain bonus to saving throws" }
    ],
    eager: [
        { name: "Trip Attack", icon: "🦶", level: 2, description: "Knock targets prone with whip strikes" },
        { name: "Cunning Action", icon: "💨", level: 3, description: "Dash, Disengage, or Hide as bonus action" },
        { name: "Disarming Strike", icon: "🎯", level: 5, description: "Force enemies to drop their weapons" },
        { name: "Evasion", icon: "🌀", level: 7, description: "Take no damage on successful DEX saves" },
        { name: "Blindsense", icon: "👁️", level: 10, description: "Detect invisible creatures nearby" }
    ],
    toad_lee: [
        { name: "Reckless Attack", icon: "💢", level: 2, description: "Gain advantage at cost of defense" },
        { name: "Danger Sense", icon: "⚡", level: 3, description: "Advantage on DEX saves vs visible threats" },
        { name: "Extra Attack", icon: "⚔️⚔️", level: 5, description: "Attack twice per action" },
        { name: "Brutal Critical", icon: "💀", level: 7, description: "Extra damage dice on critical hits" },
        { name: "Relentless Rage", icon: "🔥", level: 10, description: "Refuse to fall in combat" }
    ],
    ryan: [
        { name: "Magic Missile", icon: "✨", level: 2, description: "Unerring force darts strike targets" },
        { name: "Shield", icon: "🔮", level: 3, description: "React to block incoming attacks" },
        { name: "Fireball", icon: "🔥", level: 5, description: "Explosive area damage spell" },
        { name: "Counterspell", icon: "🚫", level: 7, description: "Interrupt enemy spellcasting" },
        { name: "Arcane Recovery", icon: "📚", level: 10, description: "Recover spell slots on short rest" }
    ],
    roger: [
        { name: "Deadeye Shot", icon: "🎯", level: 2, description: "Sacrifice speed for accuracy" },
        { name: "Quick Draw", icon: "⚡", level: 3, description: "Draw and fire in one fluid motion" },
        { name: "Piercing Shot", icon: "💥", level: 5, description: "Shots penetrate multiple targets" },
        { name: "Trick Shot", icon: "🔄", level: 7, description: "Ricochet bullets around cover" },
        { name: "Sniper's Nest", icon: "🏠", level: 10, description: "Gain bonuses when stationary" }
    ],
    bones: [
        { name: "Rage", icon: "😤", level: 2, description: "Enter a battle frenzy for bonus damage" },
        { name: "Unarmored Defense", icon: "💪", level: 3, description: "Constitution adds to AC" },
        { name: "Reckless Fury", icon: "🌪️", level: 5, description: "Rage harder, hit harder" },
        { name: "Mindless Rage", icon: "🧠", level: 7, description: "Cannot be charmed or frightened" },
        { name: "Primal Champion", icon: "👑", level: 10, description: "Peak physical capability" }
    ],
    the_mole: [
        { name: "Feint", icon: "🎭", level: 2, description: "Deceive enemies to create openings" },
        { name: "False Identity", icon: "🎪", level: 3, description: "Maintain cover under scrutiny" },
        { name: "Backstab", icon: "🗡️", level: 5, description: "Extra damage from surprise" },
        { name: "Slippery Mind", icon: "💭", level: 7, description: "Resist mental intrusion" },
        { name: "Master Spy", icon: "🕵️", level: 10, description: "Ultimate infiltration techniques" }
    ]
};

// Default toad data
const DEFAULT_TOAD_DATA = {
    dan: {
        name: "Dan",
        weapon: "Longsword & Magic",
        status: "Traumatized & Catatonic",
        statusType: "critical",
        portrait: "🐸",
        level: 4,
        xp: 25,
        xp_to_next: 500,
        stats: { hp: 28, maxHp: 40, str: 14, dex: 10, con: 12, int: 10, wis: 16, cha: 14 },
        abilities: ["Divine Smite", "Cure Wounds"],
        log: [
            { day: 10, reason: "Joined the Liberation effort", xp: 50 },
            { day: 12, reason: "Faced the Oracle's terror", xp: 100, isLevelUp: false },
            { day: 15, reason: "Witnessed traumatic events at Shadeward Mansion", xp: 150 },
            { day: 15, reason: "LEVEL UP! Reached Level 4", isLevelUp: true },
            { day: 20, reason: "Catatonic state - psychological trauma", xp: 0 }
        ]
    },
    eager: {
        name: "Eager",
        weapon: "Whip",
        status: "Critically Wounded & Unconscious",
        statusType: "critical",
        portrait: "🐸",
        level: 4,
        xp: 125,
        xp_to_next: 500,
        stats: { hp: 5, maxHp: 32, str: 10, dex: 18, con: 12, int: 12, wis: 10, cha: 14 },
        abilities: ["Trip Attack", "Cunning Action"],
        log: [
            { day: 8, reason: "First successful reconnaissance mission", xp: 75 },
            { day: 12, reason: "Daring escape from enemy patrol", xp: 100 },
            { day: 15, reason: "Engaged enemy forces directly", xp: 150 },
            { day: 15, reason: "LEVEL UP! Reached Level 4", isLevelUp: true },
            { day: 20, reason: "Suffered critical wounds in combat", xp: 0 }
        ]
    },
    toad_lee: {
        name: "Toad Lee",
        weapon: "Axe",
        status: "Active",
        statusType: "active",
        portrait: "🐸",
        level: 2,
        xp: 150,
        xp_to_next: 300,
        stats: { hp: 24, maxHp: 24, str: 16, dex: 12, con: 14, int: 8, wis: 10, cha: 10 },
        abilities: ["Reckless Attack"],
        log: [
            { day: 10, reason: "Survived the dinner at Shadeward Mansion", xp: 75 },
            { day: 15, reason: "Fought through the Iron Legion raid", xp: 75 }
        ]
    },
    ryan: {
        name: "Ryan",
        weapon: "Spellcaster",
        status: "Active",
        statusType: "active",
        portrait: "🐸",
        level: 2,
        xp: 200,
        xp_to_next: 300,
        stats: { hp: 16, maxHp: 16, str: 8, dex: 14, con: 10, int: 18, wis: 12, cha: 10 },
        abilities: ["Magic Missile"],
        log: [
            { day: 12, reason: "Faced the Oracle with courage", xp: 100 },
            { day: 15, reason: "Cast darkness spell to aid escape", xp: 100 }
        ]
    },
    roger: {
        name: "Roger",
        weapon: "Gun",
        status: "Active",
        statusType: "active",
        portrait: "🐸",
        level: 2,
        xp: 175,
        xp_to_next: 300,
        stats: { hp: 20, maxHp: 20, str: 10, dex: 16, con: 12, int: 12, wis: 14, cha: 10 },
        abilities: ["Deadeye Shot"],
        log: [
            { day: 12, reason: "Stood against the Oracle", xp: 75 },
            { day: 15, reason: "Dropped an Iron Legionnaire with crossbow", xp: 100 }
        ]
    },
    bones: {
        name: "Bones",
        weapon: "Grotesque",
        status: "Captured",
        statusType: "special",
        portrait: "🐸",
        level: 2,
        xp: 150,
        xp_to_next: 300,
        stats: { hp: 28, maxHp: 28, str: 18, dex: 8, con: 16, int: 6, wis: 10, cha: 8 },
        abilities: ["Rage"],
        log: [
            { day: 15, reason: "Captured and interrogated by Iron Legion", xp: 75 },
            { day: 15, reason: "Currently held prisoner", xp: 75 }
        ]
    },
    the_mole: {
        name: "The Mole",
        weapon: "Deceit",
        status: "Duplicitous (Revealed)",
        statusType: "special",
        portrait: "🐸",
        level: 2,
        xp: 150,
        xp_to_next: 300,
        stats: { hp: 18, maxHp: 18, str: 10, dex: 16, con: 10, int: 14, wis: 12, cha: 16 },
        abilities: ["Feint"],
        log: [
            { day: 15, reason: "True allegiance revealed - Iron Legion agent", xp: 100 },
            { day: 15, reason: "Helped capture Bones during raid", xp: 50 }
        ]
    }
};

const TIMELINE_DATA = [
    {
        day: 20,
        events: [
            { toadKey: "dan", focus: "Mental Recovery", description: "Dan remains in catatonic state after witnessing the horrors at Shadeward Mansion. Requires immediate psychological care.", status: "ongoing" },
            { toadKey: "eager", focus: "Emergency Medical", description: "Eager is being treated for critical wounds. Unconscious but stable.", status: "ongoing" },
            { toadKey: "bones", focus: "Rescue Operation", description: "Bones is confirmed held by Iron Legion. Rescue mission being planned.", status: "ongoing" }
        ]
    },
    {
        day: 15,
        events: [
            { toadKey: "dan", focus: "Shadeward Confrontation", description: "Witnessed traumatic events during the Oracle encounter and subsequent Iron Legion raid.", status: "resolved" },
            { toadKey: "eager", focus: "Combat Engagement", description: "Engaged enemy forces directly during the chaotic battle at Shadeward Mansion.", status: "resolved" },
            { toadKey: "the_mole", focus: "Cover Blown", description: "Revealed as an Iron Legion agent. Helped enemy forces capture Bones.", status: "resolved" },
            { toadKey: "toad_lee", focus: "Survival", description: "Fought through the Iron Legion raid and survived.", status: "resolved" },
            { toadKey: "ryan", focus: "Magical Support", description: "Used darkness spell to cover the group's escape.", status: "resolved" },
            { toadKey: "roger", focus: "Ranged Support", description: "Provided covering fire, eliminating an Iron Legionnaire.", status: "resolved" }
        ]
    },
    {
        day: 12,
        events: [
            { toadKey: "dan", focus: "Oracle Encounter", description: "Faced the mysterious Oracle for the first time.", status: "resolved" },
            { toadKey: "eager", focus: "Reconnaissance", description: "Escaped from enemy patrol during scouting mission.", status: "resolved" },
            { toadKey: "ryan", focus: "Standing Firm", description: "Showed courage when facing the Oracle.", status: "resolved" },
            { toadKey: "roger", focus: "Standing Firm", description: "Stood up to the Oracle alongside the team.", status: "resolved" }
        ]
    },
    {
        day: 10,
        events: [
            { toadKey: "dan", focus: "Recruitment", description: "Joined the Liberated Toads cause.", status: "resolved" },
            { toadKey: "toad_lee", focus: "The Dinner", description: "Survived the horrifying dinner at Shadeward Mansion.", status: "resolved" }
        ]
    },
    {
        day: 8,
        events: [
            { toadKey: "eager", focus: "First Mission", description: "Completed first successful reconnaissance mission.", status: "resolved" }
        ]
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let selectedMember = null;
let currentFilter = 'all';

function getToadData() {
    // Use state if available, otherwise use defaults
    if (state.auxiliary_party_state && Object.keys(state.auxiliary_party_state).length > 1) {
        // Merge state data with defaults to ensure all fields exist
        const mergedData = {};
        for (const key in DEFAULT_TOAD_DATA) {
            mergedData[key] = {
                ...DEFAULT_TOAD_DATA[key],
                ...(state.auxiliary_party_state[key] || {})
            };
        }
        return mergedData;
    }
    return DEFAULT_TOAD_DATA;
}

function calculateSquadStats(toads) {
    const toadArray = Object.values(toads);
    const activeCount = toadArray.filter(t => t.statusType === 'active').length;
    const totalXP = toadArray.reduce((sum, t) => sum + t.xp + ((t.level - 1) * 300), 0);
    const avgLevel = (toadArray.reduce((sum, t) => sum + t.level, 0) / toadArray.length).toFixed(1);
    
    // Calculate morale based on status
    const moraleFactors = toadArray.map(t => {
        switch(t.statusType) {
            case 'active': return 1;
            case 'injured': return 0.5;
            case 'critical': return 0.2;
            case 'special': return 0.3;
            default: return 0.5;
        }
    });
    const morale = Math.round((moraleFactors.reduce((a, b) => a + b, 0) / moraleFactors.length) * 100);
    
    return {
        active: activeCount,
        total: toadArray.length,
        totalXP,
        avgLevel,
        morale
    };
}

// ========================================
// RENDER FUNCTIONS
// ========================================

function renderDocket() {
    const container = document.getElementById('docket-list');
    if (!container) return;
    
    container.innerHTML = ACCOUNTABILITY_DOCKET.map(entry => `
        <div class="docket-entry">
            <span class="target-name">${entry.name}</span>
            <span class="target-crime">${entry.crime}</span>
        </div>
    `).join('');
}

function renderSquadOverview(stats) {
    document.getElementById('active-count').textContent = `${stats.active}/${stats.total}`;
    document.getElementById('total-xp').textContent = stats.totalXP.toLocaleString();
    document.getElementById('avg-level').textContent = stats.avgLevel;
    
    const moraleBar = document.getElementById('morale-bar');
    const moraleText = document.getElementById('morale-text');
    
    moraleBar.style.width = `${stats.morale}%`;
    moraleText.textContent = `${stats.morale}%`;
    
    if (stats.morale < 40) {
        moraleBar.className = 'morale-bar low';
    } else if (stats.morale < 70) {
        moraleBar.className = 'morale-bar medium';
    } else {
        moraleBar.className = 'morale-bar';
    }
    
    // Update header status
    const squadStatus = document.getElementById('squad-status');
    if (stats.morale < 40) {
        squadStatus.textContent = 'CRITICAL';
        squadStatus.className = 'status-critical';
    } else if (stats.morale < 70) {
        squadStatus.textContent = 'COMPROMISED';
        squadStatus.className = 'status-compromised';
    } else {
        squadStatus.textContent = 'OPERATIONAL';
        squadStatus.className = 'status-operational';
    }
}

function renderCrewGrid(toads) {
    const container = document.getElementById('crew-grid');
    if (!container) return;
    
    const filteredToads = Object.entries(toads).filter(([key, toad]) => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'active') return toad.statusType === 'active';
        if (currentFilter === 'injured') return toad.statusType === 'injured' || toad.statusType === 'critical';
        if (currentFilter === 'special') return toad.statusType === 'special';
        return true;
    });
    
    container.innerHTML = filteredToads.map(([key, toad]) => {
        const xpPercentage = (toad.xp / toad.xp_to_next) * 100;
        const hpPercentage = (toad.stats.hp / toad.stats.maxHp) * 100;
        
        let statusBadgeClass = toad.statusType;
        let cardStatusClass = '';
        if (toad.statusType === 'injured') cardStatusClass = 'status-injured';
        if (toad.statusType === 'critical') cardStatusClass = 'status-critical';
        if (toad.statusType === 'special') cardStatusClass = 'status-special';
        
        return `
            <div class="crew-card ${cardStatusClass} ${selectedMember === key ? 'selected' : ''}" data-key="${key}">
                <span class="crew-status-badge ${statusBadgeClass}">${toad.statusType.toUpperCase()}</span>
                <div class="crew-card-header">
                    <div class="crew-portrait">${toad.portrait}</div>
                    <div class="crew-info">
                        <div class="crew-name">${toad.name}</div>
                        <div class="crew-meta">
                            <span class="crew-level">LVL ${toad.level}</span>
                            <span class="crew-weapon">${toad.weapon}</span>
                        </div>
                    </div>
                </div>
                <div class="crew-card-body">
                    <div class="xp-section">
                        <div class="xp-header">
                            <span class="xp-label">Experience</span>
                            <span class="xp-value">${toad.xp}/${toad.xp_to_next}</span>
                        </div>
                        <div class="xp-bar-outer">
                            <div class="xp-bar-inner" style="width: ${xpPercentage}%"></div>
                        </div>
                    </div>
                    <div class="quick-stats">
                        <div class="quick-stat">
                            <div class="quick-stat-value">${toad.stats.hp}/${toad.stats.maxHp}</div>
                            <div class="quick-stat-label">HP</div>
                        </div>
                        <div class="quick-stat">
                            <div class="quick-stat-value">${toad.abilities.length}</div>
                            <div class="quick-stat-label">Skills</div>
                        </div>
                        <div class="quick-stat">
                            <div class="quick-stat-value">${toad.log.length}</div>
                            <div class="quick-stat-label">Events</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderDetailPanel(key, toad) {
    const panel = document.getElementById('member-detail-panel');
    
    // Portrait
    document.getElementById('detail-portrait').innerHTML = toad.portrait;
    
    // Basic info
    document.getElementById('detail-name').textContent = toad.name;
    document.getElementById('detail-level').textContent = `Level ${toad.level}`;
    
    const statusSpan = document.getElementById('detail-status');
    statusSpan.textContent = toad.status;
    statusSpan.className = `crew-status-badge ${toad.statusType}`;
    
    // Stats
    const statsContainer = document.getElementById('detail-stats');
    statsContainer.innerHTML = `
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-item-value">${toad.stats.hp}/${toad.stats.maxHp}</div>
                <div class="stat-item-label">HP</div>
            </div>
            <div class="stat-item">
                <div class="stat-item-value">${toad.stats.str}</div>
                <div class="stat-item-label">STR</div>
            </div>
            <div class="stat-item">
                <div class="stat-item-value">${toad.stats.dex}</div>
                <div class="stat-item-label">DEX</div>
            </div>
            <div class="stat-item">
                <div class="stat-item-value">${toad.stats.con}</div>
                <div class="stat-item-label">CON</div>
            </div>
            <div class="stat-item">
                <div class="stat-item-value">${toad.stats.int}</div>
                <div class="stat-item-label">INT</div>
            </div>
            <div class="stat-item">
                <div class="stat-item-value">${toad.stats.wis}</div>
                <div class="stat-item-label">WIS</div>
            </div>
        </div>
    `;
    
    // Progression
    const xpPercentage = (toad.xp / toad.xp_to_next) * 100;
    const nextSkill = SKILL_TREES[key]?.find(s => s.level > toad.level);
    
    document.getElementById('detail-progression').innerHTML = `
        <div class="progression-container">
            <div class="progression-xp-bar">
                <div class="progression-xp-fill" style="width: ${xpPercentage}%"></div>
                <span class="progression-xp-text">${toad.xp} / ${toad.xp_to_next} XP</span>
            </div>
            <div class="progression-info">
                <span>Level ${toad.level} → Level ${toad.level + 1}</span>
                <span class="next-level-reward">${nextSkill ? `Next: ${nextSkill.name} (Lv${nextSkill.level})` : 'Max skills unlocked'}</span>
            </div>
        </div>
    `;
    
    // Abilities
    const abilitiesContainer = document.getElementById('detail-abilities');
    if (toad.abilities.length > 0) {
        const skillTree = SKILL_TREES[key] || [];
        abilitiesContainer.innerHTML = `
            <div class="abilities-list">
                ${toad.abilities.map(abilityName => {
                    const skill = skillTree.find(s => s.name === abilityName);
                    return `
                        <div class="ability-item">
                            <div class="ability-icon">${skill?.icon || '⭐'}</div>
                            <div class="ability-content">
                                <div class="ability-name">${abilityName}</div>
                                <div class="ability-description">${skill?.description || 'No description available'}</div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    } else {
        abilitiesContainer.innerHTML = '<p class="no-abilities">No abilities unlocked yet.</p>';
    }
    
    // Skill Tree
    const skillTreeContainer = document.getElementById('detail-skill-tree');
    const skills = SKILL_TREES[key] || [];
    
    skillTreeContainer.innerHTML = `
        <div class="skill-tree">
            ${skills.map(skill => {
                const isUnlocked = toad.abilities.includes(skill.name);
                const isNext = !isUnlocked && skill.level === toad.level + 1;
                const isLocked = !isUnlocked && !isNext;
                
                let nodeClass = 'skill-node';
                let statusText = '';
                
                if (isUnlocked) {
                    nodeClass += ' unlocked';
                    statusText = '✓ Unlocked';
                } else if (isNext) {
                    nodeClass += ' next-unlock';
                    statusText = 'Next Level';
                } else {
                    nodeClass += ' locked';
                    statusText = `Lv ${skill.level}`;
                }
                
                return `
                    <div class="${nodeClass}">
                        <div class="skill-node-icon">${skill.icon}</div>
                        <div class="skill-node-content">
                            <div class="skill-node-name">${skill.name}</div>
                            <div class="skill-node-req">Requires Level ${skill.level}</div>
                        </div>
                        <span class="skill-node-status">${statusText}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    // Activity Log
    const logContainer = document.getElementById('detail-log');
    const sortedLog = [...toad.log].sort((a, b) => b.day - a.day);
    
    logContainer.innerHTML = `
        <div class="activity-log">
            ${sortedLog.map(entry => `
                <div class="log-entry ${entry.isLevelUp ? 'level-up' : ''}">
                    <span class="log-day">Day ${entry.day}</span>
                    <span class="log-content">${entry.reason}</span>
                    ${entry.xp !== undefined && entry.xp > 0 ? `<span class="log-xp">+${entry.xp} XP</span>` : ''}
                </div>
            `).join('')}
        </div>
    `;
    
    // Show panel
    panel.classList.remove('hidden');
    panel.classList.add('visible');
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    const toads = getToadData();
    
    container.innerHTML = TIMELINE_DATA.map(dayEntry => {
        const isCurrent = dayEntry.day === CURRENT_DAY;
        
        return `
            <div class="timeline-day ${isCurrent ? 'current' : ''}">
                <div class="timeline-marker">${dayEntry.day}</div>
                <div class="timeline-day-content">
                    <div class="timeline-day-header">
                        <h4>Day ${dayEntry.day}</h4>
                        ${isCurrent ? '<span class="updated-badge">CURRENT</span>' : ''}
                    </div>
                    <div class="timeline-events">
                        ${dayEntry.events.map(event => {
                            const toad = toads[event.toadKey];
                            if (!toad) return '';
                            
                            return `
                                <div class="timeline-event status-${event.status}">
                                    <div class="timeline-event-portrait">${toad.portrait}</div>
                                    <div class="timeline-event-content">
                                        <div class="timeline-event-header">
                                            <strong>${toad.name}: ${event.focus}</strong>
                                            <span class="timeline-event-status ${event.status}">${event.status.toUpperCase()}</span>
                                        </div>
                                        <p class="timeline-event-description">${event.description}</p>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ========================================
// EVENT HANDLERS
// ========================================

function setupEventListeners() {
    // Collapsible sections
    document.querySelectorAll('.section-header[data-toggle]').forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.dataset.toggle;
            const content = document.getElementById(targetId);
            if (content) {
                content.classList.toggle('collapsed');
                header.classList.toggle('collapsed');
            }
        });
    });
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderCrewGrid(getToadData());
            attachCardListeners();
        });
    });
    
    // Close detail panel
    document.querySelector('.close-detail-btn')?.addEventListener('click', () => {
        const panel = document.getElementById('member-detail-panel');
        panel.classList.remove('visible');
        panel.classList.add('hidden');
        selectedMember = null;
        renderCrewGrid(getToadData());
        attachCardListeners();
    });
}

function attachCardListeners() {
    document.querySelectorAll('.crew-card').forEach(card => {
        card.addEventListener('click', () => {
            const key = card.dataset.key;
            const toads = getToadData();
            selectedMember = key;
            
            renderCrewGrid(toads);
            attachCardListeners();
            renderDetailPanel(key, toads[key]);
        });
    });
}

// ========================================
// INITIALIZATION
// ========================================

function init() {
    loadState();
    
    const toads = getToadData();
    const stats = calculateSquadStats(toads);
    
    // Set current day
    document.getElementById('current-day').textContent = CURRENT_DAY;
    
    // Render all sections
    renderDocket();
    renderSquadOverview(stats);
    renderCrewGrid(toads);
    renderTimeline();
    
    // Setup event listeners
    setupEventListeners();
    attachCardListeners();
}

// Run on load
init();

export { getToadData, SKILL_TREES, TIMELINE_DATA };