
import { RELIGION_DATA } from './religion-data.js';
import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS } from './species-data.js';
import { MAP_DATA } from './map-data.js';
import { playSound } from './common.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from './calendar-data.js';
import { state } from './state.js'; // Import state to get logged-in user

// DOM Elements
const chartCanvas = document.getElementById('religion-chart');
const edictsContainer = document.getElementById('active-edicts-container');
const ritualsContainer = document.getElementById('daily-rituals-container');
const treeContainer = document.querySelector('.religion-tree-container');
const religionModal = document.getElementById('religion-modal');
const religionModalBody = document.getElementById('religion-modal-body');
const religionModalClose = document.getElementById('religion-modal-close');

let globalReligiousCounts = {};
let grandTotalPop = 0;

// --- DATA AUGMENTATION (Simulating data update) ---
if (RELIGION_DATA.denominations.star_spirits) {
    RELIGION_DATA.denominations.star_spirits.weekly_observances = [
        { day: "Soldas", text: "Stand beneath the open sky at midnight and offer a Star Bit." },
        { day: "Mercurias", text: "Sketch the position of the North Star upon waking." },
        { day: "Venerias", text: "Share a wish with a stranger." }
    ];
}

/**
 * Helper to get player species key from state.
 */
function getPlayerSpeciesKey() {
    const user = state.loggedInUser || 'generic';
    
    const charMap = {
        'archie': 'dnd_human',
        'markop': 'centaur_human_head',
        'humpik': 'dnd_dwarf_mountain',
        'bowser': 'koopa',
        'remi': 'dnd_human'
    };

    return charMap[user] || 'dnd_human'; // Default to human if unknown
}

/**
 * Determines the tension between the player's species' dominant religion
 * and a target religion.
 */
function calculateTension(targetDenomId) {
    const playerSpeciesKey = getPlayerSpeciesKey();
    const speciesInfo = SPECIES_DATA[playerSpeciesKey];
    
    // Find dominant religion for species
    let dominantDenomId = 'unaligned';
    if (speciesInfo && speciesInfo.religion_breakdown) {
        const sorted = Object.entries(speciesInfo.religion_breakdown).sort((a, b) => b[1] - a[1]);
        if (sorted.length > 0) {
            dominantDenomId = sorted[0][0];
        }
    }

    // If unaligned or same religion, no tension
    if (dominantDenomId === 'unaligned' || dominantDenomId === targetDenomId) {
        return { level: 0, label: 'Harmonious', color: 'var(--positive-color)', sameFaith: true };
    }

    const playerDenom = RELIGION_DATA.denominations[dominantDenomId];
    const targetDenom = RELIGION_DATA.denominations[targetDenomId];

    if (!playerDenom || !targetDenom) {
        return { level: 10, label: 'Neutral', color: 'var(--neutral-color)' };
    }

    const playerGroup = playerDenom.group;
    const targetGroup = targetDenom.group;

    // Check matrix
    let tensionValue = 50; // Default
    if (RELIGION_DATA.compatibility_matrix[playerGroup] && RELIGION_DATA.compatibility_matrix[playerGroup][targetGroup] !== undefined) {
        tensionValue = RELIGION_DATA.compatibility_matrix[playerGroup][targetGroup];
    }

    let label = 'Neutral';
    let color = 'var(--neutral-color)';

    if (tensionValue <= 10) { label = 'Peaceful'; color = 'var(--positive-color)'; }
    else if (tensionValue <= 30) { label = 'Uneasy'; color = '#FFD700'; } // Gold
    else if (tensionValue <= 60) { label = 'Tense'; color = 'var(--accent-color)'; } // Orange-ish via CSS vars usually
    else if (tensionValue <= 80) { label = 'Hostile'; color = 'var(--negative-color)'; }
    else { label = 'Heretical'; color = '#8B0000'; } // Dark Red

    return { level: tensionValue, label, color, sameFaith: false };
}


/**
 * Calculates total followers.
 */
function calculateReligiousDemographics() {
    const counts = {};
    let totalPop = 0;

    Object.keys(RELIGION_DATA.denominations).forEach(key => counts[key] = 0);
    counts['unaligned'] = 0;

    for (const mapKey in MAP_DATA) {
        const map = MAP_DATA[mapKey];
        const group = map.group || 'Other';
        
        const regionalSpecies = REGIONAL_DEMOGRAPHICS[group] || { other: 1.0 };

        if (map.pointsOfInterest) {
            map.pointsOfInterest.forEach(poi => {
                const poiPop = poi.population || 0;
                if (poiPop > 0) {
                    totalPop += poiPop;

                    for (const [speciesKey, speciesPct] of Object.entries(regionalSpecies)) {
                        const speciesPop = poiPop * speciesPct;
                        const speciesInfo = SPECIES_DATA[speciesKey];

                        if (speciesInfo && speciesInfo.religion_breakdown) {
                            for (const [religionKey, religionPct] of Object.entries(speciesInfo.religion_breakdown)) {
                                let followers = speciesPop * religionPct;
                                
                                if (counts[religionKey] !== undefined) {
                                    counts[religionKey] += followers;
                                } else {
                                    distributeToMinorFaiths(counts, followers, religionKey);
                                }
                            }
                        } else {
                            distributeToMinorFaiths(counts, speciesPop, 'unaligned');
                        }
                    }
                }
            });
        }
    }
    
    grandTotalPop = totalPop;
    globalReligiousCounts = counts;
    return counts;
}

function distributeToMinorFaiths(counts, amount, key) {
    if (key === 'unaligned') {
        counts['unaligned'] += amount * 0.5;
        amount = amount * 0.5;
    }
    const allKeys = Object.keys(RELIGION_DATA.denominations);
    const randomKey = allKeys[Math.floor(Math.random() * allKeys.length)];
    if(counts[randomKey] !== undefined) {
        counts[randomKey] += amount;
    }
}

function renderChart(counts) {
    if (!chartCanvas) return;

    const groupCounts = {};
    Object.keys(RELIGION_DATA.groups).forEach(k => groupCounts[k] = 0);
    groupCounts['unaligned'] = counts['unaligned'];

    Object.entries(counts).forEach(([denomKey, count]) => {
        if (denomKey === 'unaligned') return;
        const denom = RELIGION_DATA.denominations[denomKey];
        if (denom) {
            groupCounts[denom.group] += count;
        }
    });

    const labels = [];
    const data = [];
    const colors = [];

    Object.entries(groupCounts).forEach(([key, count]) => {
        if (count > 0) {
            const groupName = RELIGION_DATA.groups[key]?.name || "Secular / Unaligned";
            const color = RELIGION_DATA.groups[key]?.color || "#6c757d";
            labels.push(groupName);
            data.push(count);
            colors.push(color);
        }
    });

    new Chart(chartCanvas, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 1,
                borderColor: '#161b22'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#e6edf3',
                        font: { family: "'Roboto Mono', monospace" }
                    }
                }
            }
        }
    });
}

function renderEdicts() {
    if (!edictsContainer) return;
    
    let html = '';
    const activeDenoms = Object.values(RELIGION_DATA.denominations).filter(d => d.active_law && Math.random() > 0.7).slice(0, 6);

    activeDenoms.forEach(denom => {
        const groupColor = RELIGION_DATA.groups[denom.group].color;
        html += `
            <div class="edict-card" style="border-left-color: ${groupColor}">
                <div class="edict-header">
                    <span class="edict-religion">${denom.name}</span>
                    <span class="edict-leader">${denom.leader}</span>
                </div>
                <div class="edict-text">"${denom.active_law}"</div>
            </div>
        `;
    });
    edictsContainer.innerHTML = html;
}

// Helper for seeded random (simple LCG)
function getSeededRandom(seed) {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function getGameDayName() {
    const date = new Date(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
    // Map JS day 0 (Sunday) to Game Calendar index. 
    // Assuming standard mapping for simplicity or using CALENDAR_DATA if needed.
    // CALENDAR_DATA.days.values array usually matches 0-6 index.
    const dayIndex = date.getDay(); 
    return CALENDAR_DATA.days.values[dayIndex]?.name || "Unknown Day";
}

function renderDailyRituals() {
    if (!ritualsContainer) return;

    // 1. Update Header with Date
    const monthName = CALENDAR_DATA.months.values[CURRENT_GAME_DATE.monthIndex].name;
    const dayName = getGameDayName();
    const dateString = `${dayName}, ${monthName} ${CURRENT_GAME_DATE.day}, ${CURRENT_GAME_DATE.year} BF`;
    
    const panelHeader = ritualsContainer.closest('.ritual-panel').querySelector('h3');
    if (panelHeader) {
        panelHeader.innerHTML = `Today's Liturgy <span class="header-date">${dateString}</span>`;
    }

    // 2. Select Rituals Deterministically based on Date
    const denoms = Object.values(RELIGION_DATA.denominations);
    const seed = CURRENT_GAME_DATE.year * 10000 + CURRENT_GAME_DATE.monthIndex * 100 + CURRENT_GAME_DATE.day;
    
    // Shuffle using seeded random
    const shuffled = [...denoms];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const r = getSeededRandom(seed + i);
        const j = Math.floor(r * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    const dailyPicks = shuffled.slice(0, 4);
    
    // 3. Build HTML
    let html = `
        <div class="ritual-subtitle">
            To maintain faithful standing, adherents are expected to complete at least one observance per week.
        </div>
        <div class="rituals-grid">
    `;
    
    dailyPicks.forEach(denom => {
        const group = RELIGION_DATA.groups[denom.group];
        let ritualText = denom.daily_liturgy || "Daily prayer.";
        
        // Check for specific day observance
        if (denom.weekly_observances) {
            const todayObs = denom.weekly_observances.find(o => o.day === dayName);
            if (todayObs) {
                ritualText = `<strong style="color:var(--accent-color)">${dayName}:</strong> ${todayObs.text}`;
            }
        }
        
        html += `
            <div class="ritual-card" style="border-left: 3px solid ${group.color}">
                <div class="ritual-header">
                    <span>${group.icon}</span>
                    <strong>${denom.name}</strong>
                </div>
                <div class="ritual-content">${ritualText}</div>
            </div>
        `;
    });
    
    html += `</div>`;
    
    ritualsContainer.innerHTML = html;
}

function renderTree() {
    if (!treeContainer) return;

    let html = '';
    
    Object.entries(RELIGION_DATA.groups).forEach(([groupKey, group]) => {
        const denoms = Object.values(RELIGION_DATA.denominations).filter(d => d.group === groupKey);
        
        const denomsHTML = denoms.map(d => {
            const count = Math.round(globalReligiousCounts[d.id] || 0);
            // Filter out tiny cults randomly to save space
            if (count < 100 && Math.random() > 0.1) return ''; 
            
            return `
                <div class="denomination-card" data-id="${d.id}">
                    <div class="denom-stripe" style="background-color: ${group.color}"></div>
                    <div class="denom-content">
                        <div class="denom-name">${d.name}</div>
                        <div class="denom-followers">${count.toLocaleString()} believers</div>
                        <div class="denom-bonus">${d.bonus}</div>
                    </div>
                </div>
            `;
        }).join('');

        if (denomsHTML) {
            html += `
                <div class="religion-group-section">
                    <div class="group-header">
                        <span class="group-icon">${group.icon}</span>
                        <div class="group-info">
                            <h3 style="color: ${group.color}">${group.name}</h3>
                            <p class="group-desc">${group.description}</p>
                        </div>
                    </div>
                    <div class="denomination-grid">
                        ${denomsHTML}
                    </div>
                </div>
            `;
        }
    });

    treeContainer.innerHTML = html;
}

// --- NEW MODAL DETAIL LOGIC ---

function showDetailModal(denomId) {
    const denom = RELIGION_DATA.denominations[denomId];
    if (!denom) return;
    
    const group = RELIGION_DATA.groups[denom.group];
    const count = Math.round(globalReligiousCounts[denomId] || 0);
    
    const traditionsList = denom.traditions ? denom.traditions.map(t => `<li>${t}</li>`).join('') : '<li>Unknown customs.</li>';
    const saintsList = denom.saints ? denom.saints.map(s => `<li>${s}</li>`).join('') : '<li>No recorded saints.</li>';
    const ritualText = denom.activation_ritual || "No specific ritual data available.";
    const dailyText = denom.daily_liturgy || "No daily observance recorded.";
    const heresyText = denom.heresies || "None currently recorded.";

    // Mechanics List
    let mechanicsList = '';
    if (denom.mechanics && denom.mechanics.length > 0) {
        mechanicsList = `
            <div class="mechanics-box" style="border-left-color: ${group.color};">
                <h4>⚙️ Tenets & Mechanics</h4>
                <ul class="mechanics-list">
                    ${denom.mechanics.map(m => `<li><strong>${m.name}:</strong> ${m.effect}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Build Weekly Schedule HTML
    let weeklyScheduleHTML = '';
    if (denom.weekly_observances && denom.weekly_observances.length > 0) {
        weeklyScheduleHTML = `<div class="weekly-schedule-box"><h5 style="color:${group.color}">Weekly Observances</h5><ul class="weekly-list">`;
        denom.weekly_observances.forEach(obs => {
            weeklyScheduleHTML += `<li><strong>${obs.day}:</strong> ${obs.text}</li>`;
        });
        weeklyScheduleHTML += `</ul></div>`;
    }

    // Tension Calculation & Effects
    const tensionData = calculateTension(denomId);
    const tensionHTML = `
        <div class="tension-meter-container" style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; margin-top: 10px; text-align: center;">
            <div class="tension-header" style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 5px;">
                Spiritual Alignment vs. Your Faith
            </div>
            <div class="tension-bar-bg" style="width: 100%; height: 10px; background: #333; border-radius: 5px; overflow: hidden;">
                <div class="tension-bar-fill" style="width: ${tensionData.level}%; height: 100%; background-color: ${tensionData.color}; transition: width 0.5s;"></div>
            </div>
            <div class="tension-label" style="color: ${tensionData.color}; font-weight: bold; margin-top: 5px;">
                ${tensionData.label} (${tensionData.level}% Tension)
            </div>
            ${tensionData.sameFaith ? '<div style="font-size:0.8rem; font-style:italic; color:var(--positive-color); margin-top:2px;">(This is your faith)</div>' : ''}
        </div>
    `;

    // Find the specific consequence based on the tension level
    let consequenceHTML = '';
    const consequence = RELIGION_DATA.tension_consequences.find(c => tensionData.level >= c.min && tensionData.level <= c.max);
    
    if (consequence) {
        const effectsList = consequence.effects.map(e => `<li>${e}</li>`).join('');
        consequenceHTML = `
            <div class="tension-outcome-box" style="border-color: ${tensionData.color};">
                <h5 style="color: ${tensionData.color};">${consequence.title}</h5>
                <p class="outcome-desc">${consequence.description}</p>
                <ul class="outcome-list">
                    ${effectsList}
                </ul>
            </div>
        `;
    }

    religionModalBody.innerHTML = `
        <div class="holy-grid-layout">
            <div class="holy-header-section">
                <div class="holy-icon-large" style="text-shadow: 0 0 20px ${group.color};">${group.icon}</div>
                <h2 class="holy-title" style="color: ${group.color};">${denom.name}</h2>
                <p class="holy-leader">High Priest: ${denom.leader}</p>
                <div class="holy-stats">
                    <div class="stat-box"><span class="stat-label">Seat</span><span class="stat-val">${denom.seat}</span></div>
                    <div class="stat-box"><span class="stat-label">Followers</span><span class="stat-val">${count.toLocaleString()}</span></div>
                </div>
                ${tensionHTML}
                ${consequenceHTML}
            </div>

            <div class="holy-left-col">
                <div class="doctrine-box">
                    <h5 style="color:${group.color}; margin-top:0;">Doctrine & Dogma</h5>
                    "${denom.description}"
                </div>

                <div class="ritual-box" style="border-color: ${group.color}">
                    <h4>🔮 Rituals & Observances</h4>
                    <p><strong>Activation:</strong> <span class="ritual-text">${ritualText}</span></p>
                    <div class="daily-liturgy-text">
                        <strong>Daily Liturgy:</strong> "${dailyText}"
                    </div>
                    ${weeklyScheduleHTML}
                </div>

                <div class="heresy-box">
                    <h4>⚠️ Known Heresies</h4>
                    <p class="heresy-text">${heresyText}</p>
                </div>
            </div>

            <div class="holy-right-col">
                <div class="edict-scroll">
                    <h4>📜 Active Edict</h4>
                    <p class="edict-content">${denom.active_law}</p>
                </div>

                <div class="favor-box" style="border-color: ${group.color}; background: linear-gradient(135deg, rgba(0,0,0,0), ${group.color}11);">
                    <h4>✨ Divine Favor</h4>
                    <p class="favor-text">${denom.bonus}</p>
                    <small style="color:var(--text-secondary)">Effect active for allied forces.</small>
                </div>

                ${mechanicsList}

                <div class="list-group">
                    <h5>Traditions</h5>
                    <ul class="holy-list">${traditionsList}</ul>
                </div>

                <div class="list-group">
                    <h5>Saints & Figures</h5>
                    <ul class="holy-list">${saintsList}</ul>
                </div>
            </div>
        </div>
    `;

    religionModal.style.display = 'flex';
}

function hideDetailModal() {
    religionModal.style.display = 'none';
}

function setupEventListeners() {
    treeContainer.addEventListener('click', e => {
        const card = e.target.closest('.denomination-card');
        if (card) {
            playSound('click.mp3');
            showDetailModal(card.dataset.id);
        }
    });

    if (religionModalClose) {
        religionModalClose.addEventListener('click', hideDetailModal);
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === religionModal) {
            hideDetailModal();
        }
    });
}

function init() {
    if (!treeContainer) return; 
    
    const counts = calculateReligiousDemographics();
    renderChart(counts);
    renderEdicts();
    renderDailyRituals();
    renderTree();
    setupEventListeners();
}

init();
