
// systems/liberated-toads-system.js
import { state } from '../Reputation-Matrix2/state.js';
import { LORE_DATA } from '../lore.js';
import { CHARACTER_RELATIONS } from '../character-relations.js';

/**
 * Renders the unique system display for the Liberated Toads faction.
 * @param {string} factionKey - The key of the faction.
 * @param {object} factionData - The faction's data object.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML content for the unique system.
 */
export function renderLiberatedToadsSystem(factionKey, factionData, currentState) {
    const subFactions = factionData.internal_politics.sub_factions;

    // Additional metadata not present in the faction file
    const toadMetadata = {
        dan: { weapon: 'Longsword & Magic', portrait: 'toads/dan.png' },
        toad_lee: { weapon: 'Axe', portrait: 'toads/toad_lee.png' },
        eager: { weapon: 'Whip', portrait: 'toads/eager.png' },
        roger: { weapon: 'Gun', portrait: 'toads/roger.png' },
        ryan: { weapon: 'Spellcaster', portrait: 'toads/ryan.png' },
        bones: { weapon: 'Grotesque Resilience', portrait: 'toads/bones.png' },
        the_mole: { weapon: 'Deceit', portrait: 'toads/the_mole.png' }
    };

    const keyFiguresHTML = Object.entries(subFactions).map(([subKey, subFaction]) => {
        const metadata = toadMetadata[subKey] || { weapon: 'Unknown', portrait: 'toads/toad.png' };
        
        let statusClass = 'neutral';
        if (subFaction.status.includes('Injured') || subFaction.status.includes('Withdrawn') || subFaction.status.includes('Duplicitous') || subFaction.status.includes('Vengeful') || subFaction.status.includes('Captured') || subFaction.status.includes('Critical')) {
            statusClass = 'negative';
        } else if (subFaction.status.includes('Active') || subFaction.status.includes('Enforcing')) {
            statusClass = 'positive';
        }

        const opinionsHTML = CHARACTER_RELATIONS[subKey] ? `
            <div class="toad-figure-opinions">
                <h6>Opinions:</h6>
                <ul>
                    ${Object.entries(CHARACTER_RELATIONS[subKey]).map(([targetKey, relation]) => {
                        const targetData = LORE_DATA.characters[targetKey];
                        // Fallback for non-character targets
                        const targetName = targetData ? targetData.name : targetKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                        const opinionText = relation.text.split(':').slice(1).join(':').trim();

                        return `<li class="toad-opinion-item"><strong>On ${targetName}:</strong> "<em>${opinionText}</em>"</li>`;
                    }).join('')}
                </ul>
            </div>
        ` : '';

        return `
            <div class="toad-figure-card">
                <img src="${metadata.portrait || 'toads/toad.png'}" alt="${subFaction.name}" class="toad-figure-portrait">
                <div class="toad-figure-info">
                    <h4 class="toad-figure-name">${subFaction.name}</h4>
                    <p class="toad-figure-status status-${statusClass}">${subFaction.status}</p>
                    <p class="toad-figure-desc">${subFaction.description}</p>
                    ${opinionsHTML}
                </div>
            </div>
        `;
    }).join('');

    return `
        
        <div class="liberated-toads-system-container">
            <div class="toad-section-header">
                <h3>Key Figures & Factions</h3>
            </div>
            <div class="toad-figures-grid">
                ${keyFiguresHTML}
            </div>
        </div>
    `;
}

/**
 * Initializes any dynamic JS for this system after it has been rendered.
 * This system is now static, so no initialization is required.
 */
export function initLiberatedToadsSystem() {
    // No JS needed for this static display.
}
