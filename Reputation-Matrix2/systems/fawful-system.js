// This module handles rendering for Fawful's Furious Freaks' unique system.

import { LORE_DATA } from '../lore.js';
import { getIntelForFaction } from './common.js';
import { state } from '../state.js';

export function renderFawfulSystem() {
    const data = LORE_DATA.faction_details.fawfuls_furious_freaks;
    const intel = getIntelForFaction('fawfuls_furious_freaks');
    const isDebug = state.debugMode;

    // Fury Meter
    const currentFury = data.fury_meter.current_fury;
    const currentLevel = data.fury_meter.levels.slice().reverse().find(level => currentFury >= level.threshold);
    const furyEffect = (intel >= 70 || isDebug) ? currentLevel.effect : '<span class="redacted">[Further effects unknown]</span>';
    
    const furyMeterHTML = `
        <div class="fury-meter-container">
            <h5>Fawful's Fury Meter</h5>
            <div class="fury-bar">
                <div class="fury-bar-fill" style="width: ${currentFury}%;">
                    <span class="fury-text">${currentFury}%</span>
                </div>
            </div>
            <div class="fury-status">
                <p><strong>Current State:</strong> ${currentLevel.name}</p>
                <p><strong>Effect:</strong> ${furyEffect}</p>
            </div>
        </div>
    `;

    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content fawful-system">
            ${furyMeterHTML}
        </div>
    `;
}

export function initFawfulSystem() {
    // No complex JS needed for this system currently.
}