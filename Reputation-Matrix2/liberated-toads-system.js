
// liberated-toads-system.js
import { state, loadState } from './Reputation-Matrix2/state.js';
import { LORE_DATA, CHARACTER_RELATIONS } from './lore.js';
import { renderLiberatedToadsSystem, initLiberatedToadsSystem } from './systems/liberated-toads-system.js';
import { TOAD_TIMELINE } from './focus-tree.js';

// Constants from focus.js
const CURRENT_DAY = 15;

function init() {
    const systemContainer = document.getElementById('toads-system-container');
    const auxContainer = document.getElementById('auxiliary-party-container');
    const timelineContainer = document.getElementById('toad-timeline-container');

    loadState(); // Ensure we have the latest data

    // 1. Render Key Figures & Factions System
    if (systemContainer) {
        const factionKey = 'liberated_toads';
        const factionData = LORE_DATA.factions[factionKey];
        systemContainer.innerHTML = renderLiberatedToadsSystem(factionKey, factionData, state);
        initLiberatedToadsSystem();
    }

    // 2. Render Auxiliary Party (Crew Status)
    if (auxContainer) {
        renderAuxiliaryParty(auxContainer);
    }

    // 3. Render Timeline
    if (timelineContainer) {
        renderTimeline(timelineContainer);
    }
}

function renderAuxiliaryParty(container) {
    container.innerHTML = `
        <h3 class="page-title" style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 16px;">
            Liberated Toads: Crew Status
        </h3>
    `;

    const grid = document.createElement('div');
    grid.className = 'auxiliary-party-grid';
    container.appendChild(grid);
    
    Object.entries(state.auxiliary_party_state).forEach(([key, member]) => {
        if (key === 'group') return;

        const card = document.createElement('div');
        card.className = 'aux-member-card';

        const xpPercentage = (member.xp / member.xp_to_next) * 100;

        const statusClass = member.status?.includes("Injured") || member.status?.includes("Kidnapped") || member.status?.includes("Detained") || member.status?.includes("Duplicitous") || member.status?.includes("Vengeful") || member.status?.includes("Traumatized") || member.status?.includes("Critical") ? 'negative' : 'positive';
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

function renderTimeline(container) {
    // Sort timeline from most recent day to oldest
    const sortedTimeline = [...TOAD_TIMELINE].sort((a, b) => b.day - a.day);

    container.innerHTML = sortedTimeline.map(dayEntry => {
        const eventsHTML = dayEntry.events.map(event => {
            const toadData = state.auxiliary_party_state[event.toadKey];
            if (!toadData) {
                return ''; 
            }
            const statusClass = `status-${event.status.toLowerCase().replace(' ', '-')}`;
            const updatedTag = dayEntry.day === 20 ? '<span class="updated-tag">UPDATED</span>' : ''; // Update day check for visual tag

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
            <div class="timeline-day-container ${dayEntry.day >= 20 ? 'current-day' : ''}">
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
