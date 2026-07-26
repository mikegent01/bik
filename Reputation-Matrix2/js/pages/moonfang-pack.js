// ============================================
// MOONFANG PACK SYSTEM
// Connects to calendar-data.js and common.js
// ============================================

import { MOON_PHASES, CURRENT_GAME_DATE, CURRENT_GAME_TIME } from './calendar-data.js';
import { getIntelForFaction } from '../core/common-1.js';
import { state } from '../core/state.js'; 

// ============================================
// EXTENDED DATA (Pack-specific)
// ============================================

const PACK_HIERARCHY = [
    {
        id: 'fenris_bloodmaw',
        name: 'Fenris Bloodmaw',
        rank: 'alpha',
        title: 'Lord of the Hunt',
        icon: '🐺',
        stats: { strength: 95, cunning: 80, loyalty: 100 }
    },
    {
        id: 'lyra_shadowfang',
        name: 'Lyra Shadowfang',
        rank: 'beta',
        title: 'Second of the Pack',
        icon: '🐺',
        stats: { strength: 75, cunning: 92, loyalty: 95 }
    },
    {
        id: 'unknown_omega',
        name: '???',
        rank: 'omega',
        title: 'The Broken One',
        icon: '🐺',
        stats: null // Hidden
    }
];

const PACK_MECHANICS = [
    {
        id: 'bloodlust',
        name: 'Bloodlust',
        icon: '🩸',
        description: 'When a pack member draws blood, nearby wolves gain increased attack speed and damage.',
        statLabel: 'Bonus Damage',
        statValue: '+25%',
        intelRequired: 30
    },
    {
        id: 'pack_bond',
        name: 'Pack Bond',
        icon: '🔗',
        description: 'Wolves share a supernatural connection, communicating silently across vast distances.',
        statLabel: 'Range',
        statValue: '1 Mile',
        intelRequired: 30
    },
    {
        id: 'lunar_power',
        name: 'Lunar Empowerment',
        icon: '🌙',
        description: 'Pack abilities fluctuate with the moon. Full moons grant power, new moons bring weakness.',
        statLabel: 'Current Modifier',
        statValue: null, // Dynamic
        intelRequired: 50
    },
    {
        id: 'territory',
        name: 'Territorial Advantage',
        icon: '🏔️',
        description: 'Within marked territory, the Pack gains enhanced senses and movement speed.',
        statLabel: 'Territory Status',
        statValue: 'CONTESTED',
        intelRequired: 70
    }
];

const PACK_EVENTS = [
    {
        date: { year: 1040, monthIndex: 6, day: 18 },
        title: 'The Supernatural Sovereignty Act',
        description: 'The Regal Empire declares organized werewolves illegal, effectively declaring war on the Moonfang Pack.',
        category: 'Political'
    },
    {
        date: { year: 1040, monthIndex: 6, day: 21 },
        title: 'Iron Mandate Enacted',
        description: 'The Midlands Diet grants the Iron Legion emergency powers to purge supernatural threats.',
        category: 'Military'
    },
    {
        date: { year: 1040, monthIndex: 6, day: 21 },
        title: 'The Pack Goes Underground',
        description: 'Alpha Fenris orders all pack members to retreat to deep forest dens.',
        category: 'Tactical'
    },
    {
        date: { year: 1040, monthIndex: 6, day: 22 },
        title: 'First Blood',
        description: 'A Legion patrol encounters Pack scouts. Three legionnaires killed. Pack position revealed.',
        category: 'Combat'
    }
];

// ============================================
// STATE
// ============================================

let currentPhaseIndex = null;
let selectedPhaseIndex = null;

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getIntelLevel() {
    try {
        return getIntelForFaction('moonfang_pack') || 0;
    } catch {
        return 50; // Default for testing
    }
}

function isDebugMode() {
    return state?.debugMode || window.location.search.includes('debug=true');
}

function getCurrentPhaseIndex() {
    // Calculate based on game date
    const totalDays = (CURRENT_GAME_DATE.year * 360) + 
                      (CURRENT_GAME_DATE.monthIndex * 30) + 
                      CURRENT_GAME_DATE.day;
    return totalDays % MOON_PHASES.length;
}

function redactText(text, intensity = 0.4) {
    return text.split(' ').map(word => {
        if (word.length <= 3 || Math.random() > intensity) return word;
        return `<span class="redacted">${'█'.repeat(word.length)}</span>`;
    }).join(' ');
}

function formatDate(date) {
    return `Day ${date.day}, Year ${date.year}`;
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderMoonSection() {
    const intel = getIntelLevel();
    const debug = isDebugMode();
    currentPhaseIndex = getCurrentPhaseIndex();
    const currentPhase = MOON_PHASES[currentPhaseIndex];
    const displayPhase = selectedPhaseIndex !== null ? MOON_PHASES[selectedPhaseIndex] : currentPhase;

    // Moon shadow style based on phase
    const shadowStyles = {
        0: 'background: rgba(10, 5, 5, 0.95);', // Hole (New)
        1: 'background: linear-gradient(90deg, rgba(10,5,5,0.95) 60%, transparent 100%);', // Inner Rim
        2: 'background: transparent;', // Glazed Face (Full)
        3: 'background: linear-gradient(270deg, rgba(10,5,5,0.95) 60%, transparent 100%);', // Outer Crust
        4: 'background: linear-gradient(180deg, rgba(10,5,5,0.9) 40%, transparent 100%);' // Bite
    };
    
    const displayIndex = selectedPhaseIndex !== null ? selectedPhaseIndex : currentPhaseIndex;

    // Phase nodes
    const phaseNodesHTML = MOON_PHASES.map((phase, index) => `
        <div class="phase-node ${index === currentPhaseIndex ? 'current' : ''} ${index === selectedPhaseIndex ? 'active' : ''}" 
             data-phase-index="${index}">
            <span class="phase-icon">${phase.icon}</span>
            <span class="phase-label">${phase.name.split('(')[0].trim()}</span>
        </div>
    `).join('');

    // Info panel content based on intel
    let loreHTML, effectHTML;
    
    if (debug || intel >= 70) {
        loreHTML = displayPhase.lore;
        effectHTML = displayPhase.effect;
    } else if (intel >= 30) {
        loreHTML = displayPhase.lore;
        effectHTML = `<em>[Fragmentary Intel]</em> ${redactText(displayPhase.effect)}`;
    } else {
        loreHTML = '<span class="intel-locked">??? INSUFFICIENT INTELLIGENCE ???</span>';
        effectHTML = '<span class="intel-locked">█████ ████████ ███████</span>';
    }

    return `
        <section class="moon-section">
            <div class="section-header">
                <div class="scratch-line"></div>
                <h2>The Lunar Cycle</h2>
                <div class="scratch-line"></div>
            </div>

            <div class="moon-display">
                <div class="central-moon-container">
                    <div class="moon-visual">
                        <div class="moon-aura"></div>
                        <div class="moon-body">
                            <div class="moon-crater moon-crater-1"></div>
                            <div class="moon-crater moon-crater-2"></div>
                            <div class="moon-crater moon-crater-3"></div>
                            <div class="moon-shadow" style="${shadowStyles[displayIndex] || ''}"></div>
                        </div>
                    </div>
                    <div class="phase-orbit">
                        ${phaseNodesHTML}
                    </div>
                </div>

                <div class="phase-info-panel">
                    <div class="panel-header">
                        <span class="panel-phase-icon">${displayPhase.icon}</span>
                        <h3 class="panel-phase-name">${displayPhase.name}</h3>
                    </div>
                    <div class="info-block lore-block">
                        <h4>📜 Pack Lore</h4>
                        <p>${loreHTML}</p>
                    </div>
                    <div class="info-block effect-block">
                        <h4>⚔️ Combat Effect</h4>
                        <p>${effectHTML}</p>
                    </div>
                    <div class="intel-indicator">
                        <span>🔍 Intel Level: </span>
                        <span style="color: ${intel >= 70 ? 'var(--wolf-success)' : intel >= 30 ? 'var(--wolf-warning)' : 'var(--wolf-blood-glow)'}">
                            ${debug ? 'DEBUG (100)' : intel + '%'}
                        </span>
                    </div>
                </div>
            </div>

            <div class="current-phase-status">
                <div class="status-block">
                    <span class="status-label">Current Moon Phase</span>
                    <span class="status-value">${currentPhase.name}</span>
                    <span class="status-sub">${intel >= 30 ? currentPhase.effect.split('.')[0] : '???'}</span>
                </div>
                <div class="status-block phase-timer">
                    <span class="status-label">Next Phase In</span>
                    <span class="status-value">${Math.floor(Math.random() * 3) + 1} Days</span>
                </div>
            </div>
        </section>
    `;
}

function renderHierarchySection() {
    const intel = getIntelLevel();
    const debug = isDebugMode();

    const cardsHTML = PACK_HIERARCHY.map(member => {
        const isHidden = !member.stats && !debug && intel < 80;
        const showStats = (debug || intel >= 50) && member.stats;

        return `
            <div class="hierarchy-card ${member.rank}">
                <div class="rank-badge">${member.rank.toUpperCase()}</div>
                <div class="member-portrait">${member.icon}</div>
                <h3 class="member-name">${isHidden ? '???' : member.name}</h3>
                <p class="member-title">${isHidden ? 'Unknown' : member.title}</p>
                <div class="member-stats">
                    ${showStats ? Object.entries(member.stats).map(([key, value]) => `
                        <div class="stat-row">
                            <span class="stat-label">${key}</span>
                            <div class="stat-bar">
                                <div class="stat-fill" style="width: ${value}%"></div>
                            </div>
                        </div>
                    `).join('') : `
                        <div class="stat-row">
                            <span class="stat-label intel-locked">█████████</span>
                            <div class="stat-bar locked"></div>
                        </div>
                    `}
                </div>
            </div>
        `;
    }).join('');

    return `
        <section class="hierarchy-section">
            <div class="section-header">
                <div class="scratch-line"></div>
                <h2>Pack Hierarchy</h2>
                <div class="scratch-line"></div>
            </div>
            <div class="hierarchy-grid">
                ${cardsHTML}
            </div>
        </section>
    `;
}

function renderMechanicsSection() {
    const intel = getIntelLevel();
    const debug = isDebugMode();
    const currentPhase = MOON_PHASES[getCurrentPhaseIndex()];

    const cardsHTML = PACK_MECHANICS.map(mech => {
        const hasAccess = debug || intel >= mech.intelRequired;
        let statValue = mech.statValue;
        
        // Dynamic value for lunar power
        if (mech.id === 'lunar_power') {
            statValue = hasAccess ? `${currentPhase.icon} Active` : '???';
        }

        return `
            <div class="mechanic-card">
                <div class="mechanic-icon">${mech.icon}</div>
                <h3>${mech.name}</h3>
                <p>${hasAccess ? mech.description : redactText(mech.description, 0.6)}</p>
                <div class="mechanic-stat">
                    <span class="mechanic-stat-label">${mech.statLabel}</span>
                    <span class="mechanic-stat-value">${hasAccess ? statValue : '???'}</span>
                </div>
            </div>
        `;
    }).join('');

    return `
        <section class="mechanics-section">
            <div class="section-header">
                <div class="scratch-line"></div>
                <h2>Pack Mechanics</h2>
                <div class="scratch-line"></div>
            </div>
            <div class="mechanics-grid">
                ${cardsHTML}
            </div>
        </section>
    `;
}

function renderTimelineSection() {
    const intel = getIntelLevel();
    const debug = isDebugMode();

    const eventsHTML = PACK_EVENTS.map((event, index) => `
        <div class="timeline-event" style="animation-delay: ${index * 0.1}s">
            <span class="event-date">${formatDate(event.date)}</span>
            <h4 class="event-title">${event.title}</h4>
            <p class="event-description">${debug || intel >= 40 ? event.description : redactText(event.description)}</p>
            <span class="event-category">${event.category}</span>
        </div>
    `).join('');

    return `
        <section class="timeline-section">
            <div class="section-header">
                <div class="scratch-line"></div>
                <h2>Pack Chronicle</h2>
                <div class="scratch-line"></div>
            </div>
            <div class="timeline-container">
                ${eventsHTML}
            </div>
        </section>
    `;
}

// ============================================
// MAIN RENDER
// ============================================

export function renderMoonfangPackSystem() {
    return `
        ${renderMoonSection()}
        ${renderHierarchySection()}
        ${renderMechanicsSection()}
        ${renderTimelineSection()}
    `;
}

// ============================================
// EVENT LISTENERS
// ============================================

export function initMoonfangPackSystem() {
    const contentContainer = document.getElementById('moonfang-content');
    if (!contentContainer) return;

    // Render content
    contentContainer.innerHTML = renderMoonfangPackSystem();

    // Setup particles
    setupParticles();

    // Setup event listeners
    setupEventListeners(contentContainer);

    // Alert dismiss
    const alertDismiss = document.querySelector('.alert-dismiss');
    if (alertDismiss) {
        alertDismiss.addEventListener('click', () => {
            const banner = document.getElementById('sovereigntyAlert');
            if (banner) {
                banner.style.opacity = '0';
                setTimeout(() => banner.remove(), 300);
            }
        });
    }

    console.log('🐺 Moonfang Pack System Initialized');
}

function setupEventListeners(container) {
    // Phase node clicks
    container.addEventListener('click', (e) => {
        const phaseNode = e.target.closest('.phase-node');
        if (phaseNode) {
            const index = parseInt(phaseNode.dataset.phaseIndex);
            selectedPhaseIndex = index;
            rerender();
            
            // Play howl on full moon (index 2)
            if (index === 2) {
                const audio = document.getElementById('howlAudio');
                if (audio) {
                    audio.currentTime = 0;
                    audio.volume = 0.3;
                    audio.play().catch(() => {});
                }
            }
        }
    });

    // Phase node hover
    container.addEventListener('mouseover', (e) => {
        const phaseNode = e.target.closest('.phase-node');
        if (phaseNode) {
            const index = parseInt(phaseNode.dataset.phaseIndex);
            updateInfoPanel(index);
        }
    });

    container.addEventListener('mouseout', (e) => {
        const phaseNode = e.target.closest('.phase-node');
        if (phaseNode) {
            // Restore to selected or current
            updateInfoPanel(selectedPhaseIndex !== null ? selectedPhaseIndex : currentPhaseIndex);
        }
    });
}

function updateInfoPanel(phaseIndex) {
    const phase = MOON_PHASES[phaseIndex];
    const intel = getIntelLevel();
    const debug = isDebugMode();

    const iconEl = document.querySelector('.panel-phase-icon');
    const nameEl = document.querySelector('.panel-phase-name');
    const loreEl = document.querySelector('.lore-block p');
    const effectEl = document.querySelector('.effect-block p');
    const shadowEl = document.querySelector('.moon-shadow');

    if (iconEl) iconEl.textContent = phase.icon;
    if (nameEl) nameEl.textContent = phase.name;

    if (loreEl) {
        if (debug || intel >= 70) {
            loreEl.innerHTML = phase.lore;
        } else if (intel >= 30) {
            loreEl.innerHTML = phase.lore;
        } else {
            loreEl.innerHTML = '<span class="intel-locked">??? INSUFFICIENT INTELLIGENCE ???</span>';
        }
    }

    if (effectEl) {
        if (debug || intel >= 70) {
            effectEl.innerHTML = phase.effect;
        } else if (intel >= 30) {
            effectEl.innerHTML = `<em>[Fragmentary Intel]</em> ${redactText(phase.effect)}`;
        } else {
            effectEl.innerHTML = '<span class="intel-locked">█████ ████████ ███████</span>';
        }
    }

    // Update moon shadow
    if (shadowEl) {
        const shadowStyles = [
            'background: rgba(10, 5, 5, 0.95);',
            'background: linear-gradient(90deg, rgba(10,5,5,0.95) 60%, transparent 100%);',
            'background: transparent;',
            'background: linear-gradient(270deg, rgba(10,5,5,0.95) 60%, transparent 100%);',
            'background: linear-gradient(180deg, rgba(10,5,5,0.9) 40%, transparent 100%);'
        ];
        shadowEl.style.cssText = shadowStyles[phaseIndex] || '';
    }

    // Update active state on nodes
    document.querySelectorAll('.phase-node').forEach((node, i) => {
        node.classList.toggle('active', i === phaseIndex);
    });
}

function rerender() {
    const contentContainer = document.getElementById('moonfang-content');
    if (contentContainer) {
        contentContainer.innerHTML = renderMoonfangPackSystem();
        setupEventListeners(contentContainer);
    }
}

function setupParticles() {
    const container = document.getElementById('particles');
    if (!container || container.children.length > 0) return;

    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${5 + Math.random() * 5}s`;
        container.appendChild(particle);
    }
}

// ============================================
// AUTO-INIT
// ============================================

if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMoonfangPackSystem);
    } else {
        initMoonfangPackSystem();
    }
}

// ============================================
// EXPORTS
// ============================================

export { PACK_HIERARCHY, PACK_MECHANICS, PACK_EVENTS };