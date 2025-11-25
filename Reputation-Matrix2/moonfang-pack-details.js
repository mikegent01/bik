

import { getAbsoluteDay } from './research-data.js';
import { MOON_PHASES } from './calendar-data.js';

// Dynamic phase calculation using the shared data
const MOON_CYCLE_LENGTH = 28;

function getCurrentMoonPhase() {
    const day = getAbsoluteDay();
    const cyclePos = day % MOON_CYCLE_LENGTH;
    // Map 0-28 days to 5 phases
    const phaseIndex = Math.floor((cyclePos / MOON_CYCLE_LENGTH) * MOON_PHASES.length);
    return MOON_PHASES[phaseIndex];
}

const currentPhaseObj = getCurrentMoonPhase();

export const MOONFANG_PACK_DETAILS = {
    moon_phases: {
        current_phase: currentPhaseObj.name,
        phases: MOON_PHASES
    },
    shared_mechanic: {
        tab_title: "Ancestral Surge",
        cards: {
            surge: {
                title: "Shared Mechanic: Ancestral Surge",
                description: "In the eternal war between werewolf and vampire, both sides draw upon their cursed lineage to unleash powerful abilities.",
                css_class: 'mechanic-card'
            },
            lunar_echo: {
                title: "Lunar Echo (Moonfang Pack)",
                description: "Moonfang werewolves channel the specific aspect of the Torrus Moon visible in the sky.",
                css_class: 'moonfang-pack-mechanic'
            }
        }
    }
};
