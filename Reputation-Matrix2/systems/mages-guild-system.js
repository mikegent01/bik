// This module handles the rendering and initialization for the Mages' Guild unique system.

import { state } from '../state.js';
import { MAGES_GUILD_DETAILS } from '../mages-guild-details.js';

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

    return `
        <p class="system-description">${data.description}</p>
        <div class="mages-guild-magic-system">
            <div class="scrying-orb-container">
                <div class="scrying-orb"></div>
                <div class="scrying-orb-info">
                    <h6>${data.scrying_orb.title}</h6>
                    <p><strong>Plot:</strong> <span class="active-plot">${data.scrying_orb.active_plot}</span></p>
                    <p>${data.scrying_orb.current_focus}</p>
                </div>
            </div>
            <div class="influence-details-container">
                <div class="influence-chart-container">
                    <h5>Distribution of Influence</h5>
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

    const data = MAGES_GUILD_DETAILS.influence_distribution;
    if (state.chartInstances['mages-guild']) {
        state.chartInstances['mages-guild'].destroy();
    }
    
    // The Chart.js library is loaded from a CDN in directory.html
    state.chartInstances['mages-guild'] = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Influence %',
                data: data.data,
                backgroundColor: [
                    'rgba(138, 43, 226, 0.7)', // Purple
                    'rgba(218, 54, 51, 0.7)',  // Red
                    'rgba(240, 185, 11, 0.7)', // Yellow
                    'rgba(139, 148, 158, 0.7)'// Grey
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
                        color: 'var(--text-secondary)',
                        font: {
                            family: "'Roboto Mono', monospace"
                        }
                    }
                }
            }
        }
    });
}