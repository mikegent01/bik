// This module handles the rendering and interaction for the Moonfang Pack's moon phase system.

import { MOONFANG_PACK_DETAILS } from '../moonfang-pack-details.js';
import { getIntelForFaction } from './common.js';
import { state } from '../state.js';

/**
 * Renders the HTML structure for the Moonfang Pack's moon phase system.
 * @returns {string} The HTML for the system.
 */
export function renderMoonfangPackSystem() {
    const data = MOONFANG_PACK_DETAILS;
    const allPhasesHTML = data.moon_phases.phases.map(p => `
        <div class="moon-phase-node ${p.name === data.moon_phases.current_phase ? 'current-phase' : ''}" 
             data-name="${p.name}" 
             data-lore="${p.lore}" 
             data-effect="${p.effect}">
            <div class="moon-icon">${p.icon}</div>
        </div>
    `).join('');

    const mechanicHTML = `
        <div class="unique-system-container" style="border-top: 1px solid var(--border-color); padding-top: 16px; margin-top: 16px;">
            <h5>${data.shared_mechanic.tab_title}</h5>
             <div class="mechanic-container">
                 ${Object.values(data.shared_mechanic.cards).map(card => `
                    <div class="mechanic-card ${card.css_class}">
                         <h6>${card.title}</h6>
                         <p>${card.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    return `
        <p class="system-description">The Moonfang Pack is a primal society where strength dictates status. Their power waxes and wanes with the phases of the moon, influencing their tactics and their very nature. Hover over a phase to learn what you know about its effects.</p>
        <div class="system-content moonfang-pack-system">
            <div class="moon-cycle-container">
                ${allPhasesHTML}
            </div>
            <div id="moon-phase-info-panel" class="moon-info-panel">
                <p>Hover over a moon phase to see details.</p>
            </div>
            ${mechanicHTML}
        </div>
    `;
}

/**
 * Initializes the event listeners for the interactive moon phase display.
 */
export function initMoonfangPackSystem() {
    const container = document.querySelector('.moon-cycle-container');
    const infoPanel = document.getElementById('moon-phase-info-panel');
    if (!container || !infoPanel) return;

    const intelLevel = getIntelForFaction('moonfang_pack');
    const isDebug = state.debugMode;

    /**
     * Partially redacts a string to simulate fragmentary intelligence.
     * @param {string} text The text to redact.
     * @returns {string} The partially redacted text.
     */
    function redactText(text) {
        const words = text.split(' ');
        const redactedWords = words.map(word => {
            // Keep short words and about half of the long words for readability
            if (word.length <= 3 || Math.random() > 0.5) {
                return word;
            } else {
                return '█'.repeat(word.length);
            }
        });
        return `<em>[Fragmentary Intel]</em> ${redactedWords.join(' ')}`;
    }

    container.addEventListener('mouseover', e => {
        const node = e.target.closest('.moon-phase-node');
        if (node) {
            const name = node.dataset.name;
            const lore = node.dataset.lore;
            const effect = node.dataset.effect;
            
            let html = `<h6>${name}</h6>`;
            
            if (isDebug || intelLevel >= 70) {
                html += `<p class="phase-lore">${lore}</p>`;
                html += `<p class="phase-effect">${effect}</p>`;
            } else if (intelLevel >= 30) {
                html += `<p class="phase-lore">${lore}</p>`;
                const redactedEffect = redactText(effect);
                html += `<p class="phase-effect intel-locked">${redactedEffect}</p>`;
            } else {
                html += `<p class="intel-locked">???</p>`;
            }
            infoPanel.innerHTML = html;
        }
    });

    container.addEventListener('mouseout', () => {
        infoPanel.innerHTML = `<p>Hover over a moon phase to see details.</p>`;
    });
}
