
// This module handles the rendering and interaction for the Onyx Hand's unique system.

import { LORE_DATA } from '../lore.js';
import { getIntelForFaction } from './common.js';
import { state } from '../state.js';
import { getAbsoluteDay } from '../research-data.js';
import { MOON_PHASES } from '../calendar-data.js';

export function renderOnyxHandCovenSystem() {
    const data = LORE_DATA.faction_details.onyx_hand;
    const intel = getIntelForFaction('onyx_hand');
    const isDebug = state.debugMode;

    // --- Calculate Active Coven based on Moon Phase ---
    const MOON_CYCLE_LENGTH = 28;
    const day = getAbsoluteDay();
    const cyclePos = day % MOON_CYCLE_LENGTH;
    const phaseIndex = Math.floor((cyclePos / MOON_CYCLE_LENGTH) * MOON_PHASES.length);
    const currentPhase = MOON_PHASES[phaseIndex];

    // Logic:
    // New Moon / Darkening (Index 4, 0) -> Shadow Coven
    // Full Moon / Inner Rim (Index 1, 2) -> Blood Coven
    // Outer Crust (Index 3) -> Iron Coven (Balance/Waning)
    let ascendantCovenId = 'blood'; // Default
    if (phaseIndex === 0 || phaseIndex === 4) ascendantCovenId = 'shadow';
    else if (phaseIndex === 3) ascendantCovenId = 'iron';
    
    const covensHTML = data.covens.map(coven => {
        const isKnown = intel >= coven.intel_req || isDebug;
        const name = isKnown ? coven.name : "Unknown Coven";
        const leader = isKnown ? coven.leader : "???";
        const desc = isKnown ? coven.specialty : "Details unknown.";
        const typeClass = coven.id.toLowerCase();

        const isAscendant = coven.id === ascendantCovenId;
        const ascendantBadge = isAscendant 
            ? `<div class="ascendant-badge" style="color:var(--accent-color); font-size:0.75rem; text-transform:uppercase; margin-bottom:4px;">✨ Ascendant (Moon Phase)</div>` 
            : '';
        const borderStyle = isAscendant ? 'border: 2px solid var(--accent-color); box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);' : '';

        return `
            <div class="coven-card type-${typeClass}" style="${borderStyle}">
                ${ascendantBadge}
                <div class="coven-header">
                    <h6>${name}</h6>
                    <span class="coven-leader">${leader}</span>
                </div>
                <p>${desc}</p>
            </div>
        `;
    }).join('');

    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content onyx-coven-system">
             <div class="moon-status-header" style="text-align:center; margin-bottom:16px; font-style:italic; color:var(--text-secondary);">
                Current Moon: <strong>${currentPhase.name}</strong>
            </div>
            <div class="coven-grid">
                ${covensHTML}
            </div>
        </div>
    `;
}

export function initOnyxHandSystem() {
    // No complex JS needed for this system currently.
    // Could add hover effects for redacted info if needed.
}
