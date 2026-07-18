// This module handles the rendering and interaction for the Oathbound Judges' Tribunal system.

import { OATHBOUND_JUDGES_DETAILS } from '../oathbound-judges-details.js';

/**
 * Renders the HTML structure for the Oathbound Judges' Tribunal Chamber.
 * @returns {string} The HTML for the system.
 */
export function renderOathboundJudgesSystem() {
    const data = OATHBOUND_JUDGES_DETAILS;
    const balance = Math.max(-15, Math.min(15, data.scales_of_justice.balance)); // Clamp rotation
    
    // Position the 4 members around the scales
    const memberPositions = [
        { top: '0%', left: '50%', transform: 'translateX(-50%)' },   // Top
        { top: '50%', left: '0%', transform: 'translateY(-50%)' },   // Left
        { top: '50%', right: '0%', transform: 'translateY(-50%)' },  // Right
        { bottom: '0%', left: '50%', transform: 'translateX(-50%)' } // Bottom
    ];

    const membersHTML = data.tribunal.map((member, i) => {
        const pos = memberPositions[i];
        return `
            <div class="judge-seat" data-judge-id="${member.id}" style="top: ${pos.top || 'auto'}; left: ${pos.left || 'auto'}; right: ${pos.right || 'auto'}; bottom: ${pos.bottom || 'auto'}; transform: ${pos.transform};">
                <img src="icon_gavel.png" alt="Judge Icon" class="judge-icon">
            </div>
        `;
    }).join('');

    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content judges-tribunal-system">
            <div class="tribunal-chamber">
                <div class="tribunal-members-circle">
                    ${membersHTML}
                </div>
                <div class="scales-of-justice">
                    <img src="scales_of_justice.png" alt="Scales of Justice" class="scales-base">
                    <img src="scales_beam.png" alt="Scales Beam" class="scales-beam" style="transform: rotate(${balance}deg);">
                </div>
            </div>
            <div class="judge-info-panel" id="judge-info-panel">
                <div class="judge-info-default">
                    <h6>${data.scales_of_justice.status_text}</h6>
                    <p>Hover over a Tribunal member to view their dossier.</p>
                </div>
            </div>
        </div>
    `;
}

/**
 * Initializes event listeners for the interactive Tribunal Chamber.
 */
export function initOathboundJudgesSystem() {
    const infoPanel = document.getElementById('judge-info-panel');
    const chamber = document.querySelector('.tribunal-chamber');
    if (!infoPanel || !chamber) return;

    chamber.addEventListener('mouseover', e => {
        const seat = e.target.closest('.judge-seat');
        if (seat) {
            const judgeId = seat.dataset.judgeId;
            const judgeData = OATHBOUND_JUDGES_DETAILS.tribunal.find(j => j.id === judgeId);
            if (judgeData) {
                const philosophyClass = judgeData.philosophy.toLowerCase().replace(/\s+/g, '-');
                infoPanel.innerHTML = `
                    <div class="judge-info-content">
                        <h6 class="judge-name">${judgeData.name}</h6>
                        <p class="judge-title">${judgeData.title}</p>
                        <p class="judge-philosophy ${philosophyClass}">${judgeData.philosophy}</p>
                        <p class="judge-description">${judgeData.description}</p>
                    </div>
                `;
            }
        }
    });

    chamber.addEventListener('mouseout', e => {
        const seat = e.target.closest('.judge-seat');
        if (seat) {
            infoPanel.innerHTML = `
                <div class="judge-info-default">
                    <h6>${OATHBOUND_JUDGES_DETAILS.scales_of_justice.status_text}</h6>
                    <p>Hover over a Tribunal member to view their dossier.</p>
                </div>
            `;
        }
    });
}
