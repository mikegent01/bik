// liberated-toads-system.js
import { state, loadState } from './state.js';
import { LORE_DATA } from './lore.js';
import { renderLiberatedToadsSystem, initLiberatedToadsSystem } from './systems/liberated-toads-system.js';

function init() {
    const container = document.getElementById('toads-system-container');
    if (!container) return;

    loadState(); // Ensure we have the latest data

    const factionKey = 'liberated_toads';
    const factionData = LORE_DATA.factions[factionKey];

    // Render the system without the "Full Report" button
    container.innerHTML = renderLiberatedToadsSystem(factionKey, factionData, state);
    
    initLiberatedToadsSystem();
}

init();
