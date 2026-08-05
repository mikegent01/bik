
// This module handles the rendering and initialization for the Mages' Guild unique system.

import { state } from './state.js';
import { MAGES_GUILD_DETAILS } from './mages-guild-details.js';
import { generateWeatherForDay, CURRENT_GAME_DATE } from './data/world/calendar.js';
import { calculateGlobalCycle } from './research-data.js';
import { WAHBOOK_POSTS } from './assembly-data.js';
import { MAJOR_BATTLES } from './app/pages/battlefield/battlefield.js'; // Import battles for timeline connection

/**
 * Renders the HTML structure for the Mages' Guild system.
 * @returns {string} The HTML for the system.
 */
export function renderMagesGuildSystem() {
    const data = MAGES_GUILD_DETAILS;
    const networkHTML = data.influence_network.map(node => `
        <li class="influence-node">
            <strong>${node.label}</strong>
            <p>${node.description}</p>
        </li>
    `).join('');

    // Get Dynamic Data
    const weather = generateWeatherForDay(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);

    // Determine Orb Visuals based on Weather
    let orbClass = '';
    let orbStatusText = '';
    
    if (weather.desc.includes('Storm') || weather.desc.includes('Rain') || weather.isMagical) {
        orbClass = 'orb-storm';
        orbStatusText = "Turbulent (Weather Interference)";
    } else if (weather.desc.includes('Clear')) {
        orbClass = 'orb-clear';
        orbStatusText = "Stable (Clear Skies)";
    } else {
        orbClass = 'orb-neutral';
        orbStatusText = "Fluctuating";
    }

    // Apply Cycle Color
    const cycleColor = globalCycle.phase.color || '#a855f7';

    // --- NEW: Connect Plot to Timeline ---
    // Get the most recent ongoing or completed battle
    const sortedBattles = [...MAJOR_BATTLES].sort((a, b) => {
        const dateA = typeof a.date === 'object' ? (a.date.year * 10000 + a.date.monthIndex * 100 + a.date.day) : 0;
        const dateB = typeof b.date === 'object' ? (b.date.year * 10000 + b.date.monthIndex * 100 + b.date.day) : 0;
        return dateB - dateA;
    });
    
    const latestEvent = sortedBattles[0];
    const activePlotText = latestEvent 
        ? `Monitoring temporal fallout from: <strong>${latestEvent.name}</strong>`
        : data.scrying_orb.active_plot;

    return `
        <p class="system-description">${data.description}</p>
        <div class="mages-guild-magic-system">
            <div class="scrying-orb-container">
                <div class="scrying-orb ${orbClass}" style="--cycle-color: ${cycleColor};"></div>
                <div class="scrying-orb-info">
                    <h6>${data.scrying_orb.title}</h6>
                    <p><strong>Signal:</strong> <span class="active-plot">${orbStatusText}</span></p>
                    <p><strong>Cycle Resonance:</strong> <span style="color:${cycleColor}; font-weight:bold;">${globalCycle.phase.name}</span></p>
                    <div style="margin-top:8px; padding-top:8px; border-top:1px dashed var(--border-color);">
                        <p style="font-size:0.85rem; color:var(--text-color);">${activePlotText}</p>
                    </div>
                </div>
            </div>
            <div class="influence-details-container">
                <div class="influence-chart-container">
                    <h5>Distribution of Influence</h5>
                    <p class="small" style="text-align:center; color:var(--text-secondary); margin-bottom:5px;">(Modified by Weather: ${weather.desc})</p>
                    <div id="mages-guild-chart-wrapper">
                        <canvas id="mages-guild-chart"></canvas>
                    </div>
                </div>
                <div class="influence-network-container">
                    <h5>Arcane Network</h5>
                    <ul class="influence-network">
                        ${networkHTML}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

/**
 * Initializes the Chart.js doughnut chart for the Mages' Guild influence.
 */
export function initMagesGuildSystem() {
    const canvas = document.getElementById('mages-guild-chart');
    if (!canvas) return;

    // Apply Weather Modifier to Data
    const weather = generateWeatherForDay(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
    let baseData = [...MAGES_GUILD_DETAILS.influence_distribution.data];
    
    // Storms boost Defense, Clear skies boost Research
    if (weather.desc.includes('Storm') || weather.isMagical) {
        baseData[2] += 10; // Defense
        baseData[0] -= 10; // Research
    } else if (weather.desc.includes('Clear')) {
        baseData[0] += 5; // Research
        baseData[2] -= 5; // Defense
    }

    if (state.chartInstances['mages-guild']) {
        state.chartInstances['mages-guild'].destroy();
    }
    
    // Ensure Chart is available
    if (typeof Chart !== 'undefined') {
        state.chartInstances['mages-guild'] = new Chart(canvas, {
            type: 'doughnut',
            data: {
                labels: MAGES_GUILD_DETAILS.influence_distribution.labels,
                datasets: [{
                    label: 'Influence %',
                    data: baseData,
                    backgroundColor: [
                        'rgba(138, 43, 226, 0.7)', // Purple (Research)
                        'rgba(218, 54, 51, 0.7)',  // Red (Regulation)
                        'rgba(240, 185, 11, 0.7)', // Yellow (Defense)
                        'rgba(139, 148, 158, 0.7)' // Grey (Politics)
                    ],
                    borderColor: 'var(--sidebar-bg)',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#7d8590', 
                            font: {
                                family: "'Roboto Mono', monospace"
                            }
                        }
                    }
                }
            }
        });
    }
}
