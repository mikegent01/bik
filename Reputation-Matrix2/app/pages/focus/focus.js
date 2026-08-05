
import { state, loadState } from '../../core/state.js';
import { TOAD_TIMELINE } from '../../systems/focus-tree.js';
<<<<<<< HEAD
import { LORE_DATA, CHARACTER_RELATIONS } from '../../../lore.js';
=======
import { LORE_DATA, CHARACTER_RELATIONS } from '../../core/lore.js';
>>>>>>> 0357b6f (Move remaining shared modules into core)
import { playSound } from '../../core/common.js';

const auxiliaryPartyContainer = document.getElementById('auxiliary-party-container');
const timelineContainer = document.getElementById('toad-timeline-container');

const CURRENT_DAY = 15;

// Load state immediately to ensure all data is available for rendering.
loadState();

function init() {
    renderAuxiliaryParty();
    renderTimeline();
}

function renderAuxiliaryParty() {
    if (!auxiliaryPartyContainer) return;
    auxiliaryPartyContainer.innerHTML = `
        <h3 class="page-title" style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 16px;">
            Liberated Toads: Crew Status
        </h3>
    `;

    const grid = document.createElement('div');
    grid.className = 'auxiliary-party-grid';
    auxiliaryPartyContainer.appendChild(grid);
    
    Object.entries(state.auxiliary_party_state).forEach(([key, member]) => {
        if (key === 'group') return;

        const card = document.createElement('div');
        card.className = 'aux-member-card';

        const xpPercentage = (member.xp / member.xp_to_next) * 100;

        const statusClass = member.status?.includes("Injured") || member.status?.includes("Kidnapped") || member.status?.includes("Detained") || member.status?.includes("Duplicitous") ? 'negative' : 'positive';
        const statusTextClass = statusClass === 'negative' ? 'negative' : 'status-ok';

        card.classList.add(statusClass);

        const logHTML = member.log.slice().reverse().map(entry => {
             if (entry.isLevelUp) return `<li class="log-levelup">${entry.reason}</li>`;
             if(entry.isAbility) return `<li class="log-ability">${entry.reason}</li>`;
             return `<li>${entry.reason} <span>[+${entry.xp} XP]</span></li>`;
        }).join('');

        const abilitiesHTML = member.abilities.length > 0 ?
            member.abilities.map(ability => `
                <div class="aux-ability">
                    <strong>${ability.name}:</strong> ${ability.description}
                </div>
            `).join('') :
            '<p class="no-abilities">No special abilities learned yet.</p>';

        // --- NEW MERGED CONTENT ---
        const subFactionData = LORE_DATA.factions.liberated_toads.internal_politics.sub_factions[key];
        const descriptionHTML = subFactionData ? `<p class="aux-description">${subFactionData.description}</p>` : '';

        const relations = CHARACTER_RELATIONS[key];
        const opinionsHTML = relations ? `
            <div class="aux-opinions">
                <h6>Opinions</h6>
                <ul>
                    ${Object.entries(relations).map(([targetKey, relation]) => {
                        const targetData = LORE_DATA.characters[targetKey] || { name: targetKey.replace(/_/g, ' ') };
                        const opinionText = relation.text.split(':').slice(1).join(':').trim();
                        return `<li><strong>On ${targetData.name}:</strong> "<em>${opinionText}</em>"</li>`;
                    }).join('')}
                </ul>
            </div>
        ` : '';
        // --- END NEW MERGED CONTENT ---

        card.innerHTML = `
            <div class="aux-card-header">
                <span class="aux-name">${member.name}</span>
                <span class="aux-level">Level ${member.level}</span>
            </div>
            <div class="aux-details">
                <span><strong>Weapon:</strong> ${member.weapon}</span>
                <span><strong>Status:</strong> <span class="${statusTextClass}">${member.status}</span></span>
            </div>
            ${descriptionHTML}
            <div class="xp-bar-container">
                <div class="xp-bar" style="width: ${xpPercentage}%"></div>
                <span class="xp-text">${member.xp} / ${member.xp_to_next} XP</span>
            </div>
            <div class="aux-abilities">
                <h6>Abilities</h6>
                ${abilitiesHTML}
            </div>
            ${opinionsHTML}
            <div class="aux-log">
                <h6>Progression Log</h6>
                <ul>
                    ${logHTML}
                </ul>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderTimeline() {
    if (!timelineContainer) return;

    // Sort timeline from most recent day to oldest
    const sortedTimeline = [...TOAD_TIMELINE].sort((a, b) => b.day - a.day);

    timelineContainer.innerHTML = sortedTimeline.map(dayEntry => {
        const eventsHTML = dayEntry.events.map(event => {
            const toadData = state.auxiliary_party_state[event.toadKey];
            if (!toadData) {
                console.error(`Data not found for toadKey: ${event.toadKey}`);
                return ''; // Prevent crash, render nothing for this event
            }
            const statusClass = `status-${event.status.toLowerCase().replace(' ', '-')}`;
            const updatedTag = dayEntry.day === 15 ? '<span class="updated-tag">UPDATED</span>' : '';

            return `
                <div class="timeline-event-card">
                    ${updatedTag}
                    <div class="event-card-header">
                        <img src="toads/${event.toadKey}.png" alt="${toadData.name}">
                        <span class="toad-name">${toadData.name}</span>
                    </div>
                    <div class="event-card-body">
                        <h5 class="focus-title">${event.focus}</h5>
                        <p class="event-description">${event.description}</p>
                        <p class="event-status"><strong class="${statusClass}">${event.status}</strong> ${event.details || ''}</p>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="timeline-day-container ${dayEntry.day === CURRENT_DAY ? 'current-day' : ''}">
                <div class="timeline-day-marker">${dayEntry.day}</div>
                <div class="timeline-day-content">
                    <h3>Day ${dayEntry.day}</h3>
                    <div class="timeline-events-grid">
                        ${eventsHTML}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

init();
