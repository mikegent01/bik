// This module handles the rendering and interaction for the Onyx Hand's Coven Circle system.

import { ONYX_HAND_DETAILS } from '../onyx-hand-details.js';

/**
 * Renders the HTML structure for the Onyx Hand's Coven Circle.
 * @returns {string} The HTML for the system.
 */
export function renderOnyxHandCovenSystem() {
    const data = ONYX_HAND_DETAILS;
    const radius = 140; // Radius of the circle
    const numNodes = data.covens.length;
    const angleStep = (2 * Math.PI) / numNodes;

    const covenNodesHTML = data.covens.map((coven, i) => {
        const angle = i * angleStep - (Math.PI / 2); // Start from the top
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return `
            <div class="coven-node" data-coven-id="${coven.id}" style="transform: translate(${x}px, ${y}px);">
                <img src="faction_onyx_hand.png" alt="${coven.name} Sigil">
            </div>
        `;
    }).join('');

    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content onyx-hand-coven-system">
            <div class="coven-circle-container">
                <div class="coven-patriarch" title="${data.patriarch.title}: ${data.patriarch.name}">
                    <img src="faction_onyx_hand.png" alt="Patriarch Sigil">
                </div>
                ${covenNodesHTML}
            </div>
            <div class="coven-info-panel" id="onyx-hand-info-panel">
                <!-- Info will be populated by JS -->
            </div>
        </div>
    `;
}

/**
 * Initializes event listeners for the interactive Coven Circle.
 */
export function initOnyxHandSystem() {
    const infoPanel = document.getElementById('onyx-hand-info-panel');
    const systemContainer = document.querySelector('.onyx-hand-coven-system');
    if (!infoPanel || !systemContainer) return;

    const patriarch = ONYX_HAND_DETAILS.patriarch;
    
    function showPatriarchInfo() {
        infoPanel.innerHTML = `
            <h6>${patriarch.name}</h6>
            <p class="info-specialty">${patriarch.title}</p>
            <p>${patriarch.description}</p>
        `;
        infoPanel.classList.add('hidden');
    }

    showPatriarchInfo(); // Set initial state

    systemContainer.addEventListener('mouseover', (e) => {
        const node = e.target.closest('.coven-node');
        if (node) {
            systemContainer.querySelectorAll('.coven-node').forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            const covenId = node.dataset.covenId;
            const covenData = ONYX_HAND_DETAILS.covens.find(c => c.id === covenId);
            if (covenData) {
                infoPanel.innerHTML = `
                    <h6>${covenData.name}</h6>
                    <p class="info-specialty">${covenData.specialty}</p>
                    <p>${covenData.description}</p>
                    <p><strong>Leader:</strong> ${covenData.leader}</p>
                    <p><strong>Operation:</strong> ${covenData.operation}</p>
                `;
                infoPanel.classList.remove('hidden');
            }
        }
    });
    
    systemContainer.addEventListener('mouseout', (e) => {
         const node = e.target.closest('.coven-node');
         if (node) {
            node.classList.remove('active');
            showPatriarchInfo();
         }
    });
}