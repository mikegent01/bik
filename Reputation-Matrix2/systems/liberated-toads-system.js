// systems/liberated-toads-system.js
import { state, loadState } from '../state.js';
import { LORE_DATA } from '../lore.js';
import { CHARACTER_RELATIONS } from '../character-relations.js';

/**
 * Renders the unique system display for the Liberated Toads faction.
 * This has been completely redesigned to be a narrative dashboard reflecting recent story events.
 * @param {string} factionKey - The key of the faction.
 * @param {object} factionData - The faction's data object.
 * @param {object} currentState - The global application state.
 * @returns {string} HTML content for the unique system.
 */
export function renderLiberatedToadsSystem(factionKey, factionData, currentState) {
    const subFactions = factionData.internal_politics.sub_factions;

    const keyFiguresHTML = Object.entries(subFactions).map(([subKey, subFaction]) => {
        const toadData = LORE_DATA.auxiliary_party[subKey] || { name: subFaction.name, portrait: 'toads/toad.png' };
        
        let statusClass = 'neutral';
        if (subFaction.status.includes('Injured') || subFaction.status.includes('Withdrawn') || subFaction.status.includes('Duplicitous') || subFaction.status.includes('Vengeful')) {
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
                        // Fallback for non-character targets like 'xo_staff'
                        const targetName = targetData ? targetData.name : targetKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                        const opinionText = relation.text.split(':').slice(1).join(':').trim();

                        return `<li class="toad-opinion-item"><strong>On ${targetName}:</strong> "<em>${opinionText}</em>"</li>`;
                    }).join('')}
                </ul>
            </div>
        ` : '';

        return `
            <div class="toad-figure-card">
                <img src="${toadData.portrait || 'toads/toad.png'}" alt="${subFaction.name}" class="toad-figure-portrait">
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
        <p class="system-description">A group forged in tragedy, now split by distrust. After a magical accident killed 13 newcomers and gravely injured their leader Dan, the toads are held together by a fragile vow. Their internal politics are highly volatile.</p>
        
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
