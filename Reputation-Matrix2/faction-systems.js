// This file acts as a dispatcher for rendering unique faction systems.
// It imports modular rendering and initialization functions from the `/systems` directory.

import { state } from './state.js';
import { renderDefaultSubfactionList } from './systems/common.js';

// Import all system renderers and initializers
import { renderHolyMidlandsDiet, initHolyMidlandsDietListeners } from './systems/regal-empire-system.js';
import { renderFreelancerNetwork, initFreelancerNetwork } from './systems/freelancer-system.js';
import { renderOnyxHandCovenSystem, initOnyxHandSystem } from './systems/onyx-hand-system.js';
import { renderMagesGuildSystem, initMagesGuildSystem } from './mages-guild-system.js';
import { renderMoonfangPackSystem, initMoonfangPackSystem } from './systems/moonfang-pack-system.js';
import { renderCosmicJestersSystem, initCosmicJestersSystem } from './systems/cosmic-jesters-system.js';
import { renderDCISystem, initDCISystem } from './systems/dci-system.js';
import { renderOathboundJudgesSystem, initOathboundJudgesSystem } from './systems/oathbound-judges-system.js';
import { renderRakashaClansSystem, initRakashaClansSystem } from './systems/rakasha-clans-system.js';
import { renderRebelClansSystem, initRebelClansSystem } from './systems/rebel-clans-system.js';
import { renderFawfulSystem, initFawfulSystem } from './systems/fawful-system.js';

// NEW: Import from the new mushroom kingdom system
import { 
    renderMushroomKingdomCivilWar, 
    initCivilWarListeners 
} from './systems/mushroom-kingdom-civil-war.js';

import { initTabbedSystem } from './systems/common.js';

// Named imports from simple-renderers to avoid "is not a function" errors
import { 
    renderIronLegionDetailedSystem, 
    renderKoopaTroopHierarchySystem, 
    renderSilverFlameEdictsSystem, 
    renderTurfWar, 
    renderLiberatedToads 
} from './systems/simple-renderers.js';

/**
 * Selects and renders the appropriate unique system display for a given faction.
 * @param {string} factionKey - The key of the faction.
 * @param {object} factionData - The faction's data object.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML content for the unique system.
 */
export function renderSystemForFaction(factionKey, factionData, currentState) {
    const MUSHROOM_KINGDOM_FACTIONS = ['toad_gang', 'toad_cult', 'mushroom_regency', 'peach_loyalists', 'fawfuls_furious_freaks', 'liberated_toads', 'koopa_troop'];

    let uniqueSystemHTML = getSystemHTML(factionKey, factionData, currentState);
    const civilWarHTML = MUSHROOM_KINGDOM_FACTIONS.includes(factionKey) ? renderMushroomKingdomCivilWar(factionKey) : '';

    if (uniqueSystemHTML) {
        uniqueSystemHTML = `
            <div class="unique-system-container">
                <h5>Internal Faction Dynamics</h5>
                ${uniqueSystemHTML}
            </div>
        `;
    }

    return uniqueSystemHTML + civilWarHTML;
}

/**
 * Calls the correct rendering function based on the faction key.
 * @returns {string} HTML for the specific system.
 */
function getSystemHTML(factionKey, factionData, currentState) {
    const subFactions = factionData.internal_politics?.sub_factions;
    switch (factionKey) {
        case 'regal_empire': return renderHolyMidlandsDiet();
        case 'iron_legion': return renderIronLegionDetailedSystem();
        case 'onyx_hand': return renderOnyxHandCovenSystem();
        case 'moonfang_pack': return renderMoonfangPackSystem();
        case 'mages_guild': return renderMagesGuildSystem();
        case 'koopa_troop': return renderKoopaTroopHierarchySystem();
        case 'silver_flame': return renderSilverFlameEdictsSystem();
        case 'oathbound_judges': return renderOathboundJudgesSystem();
        case 'freelancer_underworld': return renderFreelancerNetwork();
        case 'toad_gang': return renderTurfWar(subFactions);
        case 'cosmic_jesters': return renderCosmicJestersSystem();
        case 'diamond_city_investigators': return renderDCISystem();
        case 'liberated_toads':
            return renderLiberatedToads(factionKey, factionData, currentState);
        case 'rakasha_clans': return renderRakashaClansSystem();
        case 'rebel_clans': return renderRebelClansSystem();
        case 'fawfuls_furious_freaks': return renderFawfulSystem();
        default:
            if (subFactions) return renderDefaultSubfactionList(subFactions, factionKey, state);
            return ``;
    }
}

/**
 * Initializes any dynamic JS for a system after it has been rendered.
 * @param {string} factionKey - The key of the faction.
 */
export function initSystem(factionKey) {
    // NEW: Initialize civil war listeners for Mushroom Kingdom factions
    const MUSHROOM_KINGDOM_FACTIONS = ['toad_gang', 'toad_cult', 'mushroom_regency', 'peach_loyalists', 'fawfuls_furious_freaks', 'liberated_toads', 'koopa_troop'];
    
    if (MUSHROOM_KINGDOM_FACTIONS.includes(factionKey)) {
        initCivilWarListeners();
    }

    // Call specific initializers for complex systems
    switch (factionKey) {
        case 'regal_empire':
            initHolyMidlandsDietListeners();
            break;
        case 'freelancer_underworld':
            initFreelancerNetwork();
            break;
        case 'onyx_hand':
            initOnyxHandSystem();
            break;
        case 'mages_guild':
            initMagesGuildSystem();
            break;
        case 'moonfang_pack':
            initMoonfangPackSystem();
            break;
        case 'cosmic_jesters':
            initCosmicJestersSystem();
            break;
        case 'diamond_city_investigators':
            initDCISystem();
            break;
        case 'oathbound_judges':
            initOathboundJudgesSystem();
            break;
        case 'rakasha_clans':
            initRakashaClansSystem();
            break;
        case 'rebel_clans':
            initRebelClansSystem();
            break;
        case 'fawfuls_furious_freaks':
            initFawfulSystem();
            break;
    }
    
    // Handle generic tabbed systems (like Iron Legion)
    const tabbedSystems = ['iron_legion'];
    if (tabbedSystems.includes(factionKey)) {
        initTabbedSystem();
    }
}