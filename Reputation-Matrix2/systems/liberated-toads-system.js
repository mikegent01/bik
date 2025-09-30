
// liberated-toads-system.js
import { state } from '../state.js';
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

    const toadMetadata = {
        dan: { weapon: 'Longsword & Magic', portrait: 'toads/dan.png', status: "Critical Condition (at Archmage's shop)" },
        toad_lee: { weapon: 'Axe', portrait: 'toads/toad_lee.png', status: 'Active' },
        eager: { weapon: 'Whip', portrait: 'toads/eager.png', status: "Active (Endangered)" },
        roger: { weapon: 'Gun', portrait: 'toads/roger.png', status: 'Active' },
        ryan: { weapon: 'Spellcaster', portrait: 'toads/ryan.png', status: 'Active (Duplicitous)' },
        bones: { weapon: 'Grotesque Resilience', portrait: 'toads/bones.png', status: 'Active' },
        first_cohort_of_renewal: { name_override: 'The First Cohort', portrait: 'toads/toad.png', status: 'Restive', description_override: "The 137 survivors of the trafficking operation. Led by the vengeful 'L', they are a volatile but powerful new element within the group." }
    };

    const keyFiguresHTML = Object.entries(subFactions).map(([subKey, subFaction]) => {
        const metadata = toadMetadata[subKey];
        if (!metadata) return '';

        const name = metadata.name_override || subFaction.name;
        
        let description = subFaction.description;
        if (subKey === 'dan') {
            description = "His incredible bravery has made him the de facto leader. His life now hangs in the balance, dependent on the party's dangerous mission in the sewers.";
        } else if (subKey === 'eager') {
            description = "A nimble and quick-witted toad. After a chaotic extraction from the restaurant, he has rejoined the party. He is now with them in the dangerous, lava-filled sewers facing a new set of threats.";
        } else {
            description = metadata.description_override || subFaction.description;
        }

        let statusClass = 'neutral';
        if (metadata.status.includes('Injured') || metadata.status.includes('Kidnapped') || metadata.status.includes('Duplicitous') || metadata.status.includes('Condition')) {
            statusClass = 'negative';
        } else if (metadata.status.includes('Active')) {
            statusClass = 'positive';
        }
        
        const playerOpinionsHTML = currentState.party.map(playerKey => {
            const player = LORE_DATA.characters[playerKey];
            const relation = CHARACTER_RELATIONS[subKey]?.[playerKey];
            const opinionText = relation ? relation.text.split(':').slice(1).join(':').trim() : "No strong opinion recorded.";
            
            return `
                <li class="toad-opinion-item">
                    <strong>On ${player.name}:</strong> <em>"${opinionText}"</em>
                </li>
            `;
        }).join('');

        const opinionsSectionHTML = `
            <div class="toad-figure-opinions">
                <h6>Opinions on Party Members</h6>
                <ul>
                    ${playerOpinionsHTML}
                </ul>
            </div>
        `;

        return `
            <div class="toad-figure-card">
                <img src="${metadata.portrait}" alt="${name}" class="toad-figure-portrait">
                <div class="toad-figure-info">
                    <div>
                        <h4 class="toad-figure-name">${name}</h4>
                        <p class="toad-figure-status status-${statusClass}">${metadata.status}</p>
                        <p class="toad-figure-desc">${description}</p>
                    </div>
                    ${opinionsSectionHTML}
                </div>
            </div>
        `;
    }).join('');

    return `
        <p class="system-description">Once a small band of escaped slaves, the Liberated Toads have been reforged in a crucible of tragedy and betrayal. After discovering and freeing 150 more trafficked toads, a catastrophic magical accident killed 13 of the newcomers, gravely injuring their leader Dan and shattering their unity. Now bound by a fragile vow, they face their darkest hour: Dan's life hangs by a thread, Eager has been rescued only to be plunged into a new peril, and a dark secret suggests one of their heroes is not who he seems.</p>
        
        <div class="liberated-toads-system-container">

            <div class="toad-section-header">
                <h3>Current Crises</h3>
            </div>
            <div class="crisis-grid">
                 <div class="crisis-card">
                    <h4>A Hero's Life on the Line</h4>
                    <p>Critically injured and missing an arm, Dan's life now depends on the party's success in a perilous quest deep within the city's lava-filled sewers to find a rare magical cure.</p>
                </div>
                <div class="crisis-card">
                    <h4>Rescued but Endangered</h4>
                    <p>Eager has been successfully extracted from the restaurant, but the entire party is now trapped in the dangerous, lava-filled sewers. Their guide is a treacherous Legion spy, and a monstrous Behir blocks their path.</p>
                </div>
                <div class="crisis-card">
                    <h4>The Imposter</h4>
                    <p>Lario's revelation that the 'Dan' with the party is a fake has sown deep distrust. The true Dan's location and the imposter's motives are a terrifying unknown that threatens the party from within.</p>
                </div>
                <div class="crisis-card">
                    <h4>The Staff's Burden</h4>
                    <p>Toad Lee now holds X.O.'s volatile staff. It is a powerful weapon, but its corrupting influence was the cause of the group's recent tragedy. He bears its weight to protect the others, but for how long?</p>
                </div>
            </div>

            <div class="toad-section-header">
                <h3>Key Figures & Factions</h3>
            </div>
            <div class="toad-figures-grid">
                ${keyFiguresHTML}
            </div>

            <div class="toad-timeline-section">
                <div class="toad-section-header">
                    <h3>Recent History</h3>
                </div>
                <ul class="toad-timeline-list">
                    <li><strong>Day 14: A Web of Deceit.</strong> The rescue of Eager succeeds, but the party is forced to flee into the sewers. With Dan critically injured, the united group must now find a rare cure while navigating the treacherous tunnels with a duplicitous Legion spy, all while being hunted by a monstrous Behir.</li>
                    <li><strong>Day 12:</strong> 150+ trafficked toads are discovered. A brawl over weapons escalates.</li>
                    <li><strong>Day 12 (Cont.):</strong> Dan's attempt to reclaim the staff results in a magical outburst, killing 13 new toads. Dan loses an arm. Toad Lee secures the staff. The "First Cohort of Renewal" is formed under a fragile vow.</li>
                    <li><strong>Day 7:</strong> After a ship crash, the original Liberated Toads are critically injured in a confrontation with Iron Legion agents.</li>
                    <li><strong>Day 5:</strong> Dan plays a key role in defeating the powerful sorceress X.O., helping to secure the Vigilance.</li>
                </ul>
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
