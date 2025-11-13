
import { RELIGION_DATA } from './religion-data.js';
import { SPECIES_DATA } from './species-data.js';
import { MAP_DATA } from './map-data.js';
import { REGIONAL_DEMOGRAPHICS } from './species-data.js';
import { playSound } from './common.js';

// DOM Elements
const chartCanvas = document.getElementById('religion-chart');
const edictsContainer = document.getElementById('active-edicts-container');
const treeContainer = document.querySelector('.religion-tree-container');
const detailPanel = document.getElementById('detail-panel');
const detailPanelContent = document.getElementById('detail-panel-content');
const detailPanelClose = document.getElementById('detail-panel-close');
const appContainer = document.getElementById('app');

let globalReligiousCounts = {};
let grandTotalPop = 0;

/**
 * Calculates total followers.
 * Includes logic to distribute "Unaligned" population into minor specific faiths 
 * based on their group to ensure the 50+ religions have representation.
 */
function calculateReligiousDemographics() {
    const counts = {};
    let totalPop = 0;

    // Initialize counts
    Object.keys(RELIGION_DATA.denominations).forEach(key => counts[key] = 0);
    counts['unaligned'] = 0;

    // Iterate through maps -> POIs -> Population
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
                                    // Distribute "Unaligned" or unknown faiths to minor religions in that group
                                    // This simulates local folk religions
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

/**
 * Helper to randomly assign population to minor faiths to populate the world data
 */
function distributeToMinorFaiths(counts, amount, key) {
    if (key === 'unaligned') {
        // Keep 50% truly unaligned
        counts['unaligned'] += amount * 0.5;
        amount = amount * 0.5;
    }

    // Get all religion keys
    const allKeys = Object.keys(RELIGION_DATA.denominations);
    // Pick a random one to dump this chunk into to simulate pockets of belief
    const randomKey = allKeys[Math.floor(Math.random() * allKeys.length)];
    counts[randomKey] += amount;
}

// --- RENDERING ---

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
    // Randomly select 5 active edicts to show to prevent clutter, or show important ones
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

function renderTree() {
    if (!treeContainer) return;

    let html = '';
    
    Object.entries(RELIGION_DATA.groups).forEach(([groupKey, group]) => {
        const denoms = Object.values(RELIGION_DATA.denominations).filter(d => d.group === groupKey);
        
        const denomsHTML = denoms.map(d => {
            const count = Math.round(globalReligiousCounts[d.id] || 0);
            // Only show religions with > 0 followers or main ones
            if (count < 100 && Math.random() > 0.1) return ''; 

            const percent = grandTotalPop > 0 ? ((count / grandTotalPop) * 100).toFixed(2) : 0;
            
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

// --- NEW DETAIL POPUP LOGIC ---

function showDetail(denomId) {
    const denom = RELIGION_DATA.denominations[denomId];
    if (!denom) return;
    
    const group = RELIGION_DATA.groups[denom.group];
    const count = Math.round(globalReligiousCounts[denomId] || 0);
    
    // Create a "Holy Text" style display
    detailPanelContent.innerHTML = `
        <div class="religion-modal-frame" style="border-color: ${group.color}">
            <div class="religion-modal-header">
                <div class="religion-icon-large">${group.icon}</div>
                <h2 style="color: ${group.color}">${denom.name}</h2>
                <p class="leader-name">High Priest: ${denom.leader}</p>
            </div>

            <div class="religion-stats-bar">
                <div class="stat-pill">
                    <span class="label">Seat</span>
                    <span class="val">${denom.seat}</span>
                </div>
                <div class="stat-pill">
                    <span class="label">Followers</span>
                    <span class="val">${count.toLocaleString()}</span>
                </div>
            </div>

            <div class="litany-box">
                <h5>Doctrine & Dogma</h5>
                <p>"${denom.description}"</p>
            </div>

            <div class="scroll-container">
                <div class="edict-scroll">
                    <h5>📜 Active Edict</h5>
                    <p class="edict-content">${denom.active_law}</p>
                </div>
            </div>

            <div class="blessing-box" style="background: linear-gradient(45deg, var(--sidebar-bg), ${group.color}22);">
                <h5>✨ Divine Favor</h5>
                <p><strong>${denom.bonus}</strong></p>
                <p class="subtext">Effect active for allied forces.</p>
            </div>

            <div class="organization-footer">
                <p>Administered by: <strong>${denom.organization}</strong></p>
            </div>
        </div>
    `;

    detailPanel.classList.add('visible');
    appContainer.classList.add('panel-visible');
}

function hideDetail() {
    detailPanel.classList.remove('visible');
    appContainer.classList.remove('panel-visible');
}

function setupEventListeners() {
    treeContainer.addEventListener('click', e => {
        const card = e.target.closest('.denomination-card');
        if (card) {
            playSound('click.mp3');
            showDetail(card.dataset.id);
        }
    });

    if (detailPanelClose) {
        detailPanelClose.addEventListener('click', hideDetail);
    }
}

function init() {
    if (!treeContainer) return; 
    
    const counts = calculateReligiousDemographics();
    renderChart(counts);
    renderEdicts();
    renderTree();
    setupEventListeners();
}

init();
