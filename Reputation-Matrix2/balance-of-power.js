// This file manages the "Balance of Power" mini-game on the politics screen.

import { LORE_DATA } from './lore.js';
import { FACTION_COLORS } from './factions/faction-colors.js';

export const BOP_STATE = {
    mushroom_kingdom: {
        title: "Mushroom Kingdom Civil War",
        description: "The kingdom has shattered into a five-way conflict. The Regency attempts to restore order, the Loyalists pursue their crusade against the new occupier of Peach's Castle, the maniacal Fawful. Elsewhere, Koopa Troop remnants fight for survival and the criminal Underworld exploits the chaos.",
        influence: { regency: 35, loyalists: 20, warlords: 15, criminals: 15, fawful: 15 },
        active_plans: [
            { leader: 'chancellor_toadsworth', planId: 'regency_1', days: 19 },
            { leader: 'captain_toadette', planId: 'loyalist_2', days: 13 },
            { leader: 'kamek', planId: 'warlord_2', days: 25 },
            { leader: 'fawful', planId: 'fawful_1', days: 15 },
        ],
        plans: {
            chancellor_toadsworth: [
                { id: 'regency_1', name: "Bolster Defenses", duration: 30, description: "Increase recruitment for the Toadstool Guard and fortify key locations.", effect: "+5 Regency Influence, -5 Loyalist Influence" },
                { id: 'regency_2', name: "Diplomatic Outreach", duration: 45, description: "Send envoys to the Liberated Toads and other neutral parties to gain support.", effect: "+10 Regency Influence, increases relations with Liberated Toads" },
                { id: 'regency_3', name: "Root Out Agitators", duration: 60, description: "Use the Guard to crack down on criminal elements sowing dissent.", effect: "-10 Criminal Influence, small chance of backfire" },
            ],
            captain_toadette: [
                { id: 'loyalist_1', name: "Launch Crusade", duration: 50, description: "Launch a major military offensive against a known Koopa Remnant outpost.", effect: "+15 Loyalist Influence, -5 Warlord Influence, high risk of casualties" },
                { id: 'loyalist_2', name: "Siege the Castle", duration: 60, description: "Intensify the siege on Peach's Castle to dislodge the green menace, Fawful.", effect: "+10 Loyalist Influence, -10 Fawful Influence" },
                { id: 'loyalist_3', name: "Rally Zealots", duration: 20, description: "Hold a public rally to whip up support for the 'true' monarchy.", effect: "+10 Loyalist Influence, -5 Regency Influence" },
            ],
            kamek: [
                 { id: 'warlord_1', name: "Scavenge War Machines", duration: 35, description: "Scour old battlefields for abandoned Koopa Troop technology to rebuild their arsenal.", effect: "+10 Warlord Influence" },
                 { id: 'warlord_2', name: "Rally the Remnants", duration: 28, description: "Send messengers to gather scattered Koopa Troop survivors into a more cohesive fighting force.", effect: "+5 Warlord Influence, consolidates forces" },
            ],
            skull_cap_murphy: [
                 { id: 'criminal_1', name: "Expand Protection Rackets", duration: 20, description: "Use the chaos to force outlying villages and refugee camps to pay for 'protection'.", effect: "+10 Criminal Influence" },
                 { id: 'criminal_2', name: "Raid Refugee Supplies", duration: 15, description: "Intercept and steal supplies meant for refugees, selling them on the black market.", effect: "+5 Criminal Influence, -5 Regency Influence" },
            ],
            fawful: [
                 { id: 'fawful_1', name: "I HAVE FURY!", duration: 25, description: "Unleash a wave of unpredictable mechanical minions against the besieging Loyalists.", effect: "+10 Fawful Influence, -5 Loyalist Influence" },
                 { id: 'fawful_2', name: "Bolster with Beans", duration: 40, description: "Strengthen the castle's defenses with sinister, rapidly growing beanstalks and purple sludge.", effect: "+15 Fawful Influence" },
                 { id: 'fawful_3', name: "Brainwash Brigade", duration: 30, description: "Send out Engulfo-Globes to capture more stray Toads and Goombas to bolster his forces.", effect: "+5 Fawful Influence, small chance to capture a known character" },
            ]
        }
    },
    midlands: {
        title: "Battle of Ravencreek (Lockerwood Province)",
        description: "The shadow war between vampire and werewolf has erupted into a full-blown conflict within the forests of Lockerwood. The battle lines are drawn over the key town of Ravencreek, with both sides vying for control of strategic keeps, towers, and outposts along a north-south axis. Regal forces are present, but their influence is limited.",
        locations: [
            // North (Werewolf territory)
            { id: 'frostclaw', name: 'Frostclaw Stronghold', type: 'stronghold', control: 'werewolf', icon: 'faction_moonfang.png' },
            { id: 'moonclaw', name: 'Moonclaw Bastion', type: 'bastion', control: 'werewolf', icon: 'faction_moonfang.png' },
            { id: 'fangmoor', name: 'Fangmoor', type: 'town', control: 'werewolf', icon: 'faction_moonfang.png' },
            { id: 'ironpelt_n', name: 'Ironpelt Keep (North)', type: 'keep', control: 'werewolf', icon: 'faction_moonfang.png' },
            { id: 'shadowpelt_n', name: 'Shadowpelt Redoubt (North)', type: 'tower', control: 'werewolf', icon: 'faction_moonfang.png' },
            { id: 'fangridge', name: 'Fangridge Outpost', type: 'outpost', control: 'werewolf', icon: 'faction_moonfang.png' },
            { id: 'howlstone', name: 'Howlstone Den', type: 'den', control: 'werewolf', icon: 'faction_moonfang.png' },
            // Contested / Neutral
            { id: 'swiftsoul', name: 'Swiftsoul Keep', type: 'keep', control: 'regal', icon: 'faction_regal_empire.png' },
            { id: 'rakasha_temple', name: 'Rakasha Temple', type: 'temple', control: 'neutral', icon: 'faction_rakasha.png' },
            // Battlefront
            { id: 'ravencreek', name: 'Ravencreek', type: 'town', control: 'vampire', isBattlefront: true, icon: 'faction_onyx_hand.png' },
             // South (Vampire territory)
            { id: 'bloodspire', name: 'Bloodspire Keep', type: 'keep', control: 'vampire', icon: 'faction_onyx_hand.png' },
            { id: 'crimsonperch', name: 'Crimson Perch', type: 'tower', control: 'vampire', icon: 'faction_onyx_hand.png' },
            { id: 'shadowpelt_s', name: 'Shadowpelt Redoubt (South)', type: 'tower', control: 'vampire', icon: 'faction_onyx_hand.png' },
            { id: 'vielthorn', name: 'Vielthorn Outpost', type: 'cave', control: 'vampire', icon: 'faction_onyx_hand.png' },
            { id: 'rubywatch', name: 'Rubywatch Keep', type: 'keep', control: 'vampire', icon: 'faction_onyx_hand.png' },
            { id: 'ebonwatch', name: 'Ebonwatch Citadel', type: 'stronghold', control: 'vampire', icon: 'faction_onyx_hand.png' },
            { id: 'edgeshade', name: 'Edgeshade', type: 'ruins', control: 'neutral', note: 'Destroyed by dragon', icon: 'icon_focus.png' },
        ],
        active_plans: [
            { leader: 'baron_von_hess', planId: 'vampire_2', days: 38, target: 'southern_march' },
            { leader: 'grak_ironhide', planId: 'werewolf_1', days: 8, target: 'dark_valley' },
        ],
        plans: {
            emperor_elagabalus: [
                { id: 'imperial_1', name: "Reinforce Swiftsoul Keep", duration: 30, description: "Send an Iron Legion detachment to reinforce the Regal position in Lockerwood.", effect: "Strengthens Regal control of their keep." },
                { id: 'imperial_2', name: "Broker Ceasefire", duration: 90, description: "Attempt to force a ceasefire through overwhelming military presence and diplomacy.", effect: "May halt the conflict, or cause both sides to unite against the Empire." },
            ],
            baron_von_hess: [
                { id: 'vampire_1', name: "Push on Ravencreek", duration: 40, description: "Launch a major offensive to secure the battlefront and push north.", effect: "High chance to capture a northern location, but costly." },
                { id: 'vampire_2', name: "Raise Undead", duration: 60, description: "Bolster forces by raising fallen combatants from the battlefield as undead minions.", effect: "Grants a temporary numerical advantage." },
            ],
            grak_ironhide: [
                { id: 'werewolf_1', name: "Guerilla Raids", duration: 25, description: "Use knowledge of the forest to launch hit-and-run attacks on vampire supply lines.", effect: "Weakens vampire positions in the south." },
                { id: 'werewolf_2', name: "Challenge to Single Combat", duration: 50, description: "Challenge a vampire champion to a duel to seize control of a location.", effect: "High-risk, high-reward for control of a single point." },
            ]
        }
    }
};

function renderMushroomKingdom() {
    const data = BOP_STATE.mushroom_kingdom;
    const totalInfluence = Object.values(data.influence).reduce((a, b) => a + b, 0);

    const influenceColors = {
        regency: FACTION_COLORS['mushroom_regency'],
        loyalists: FACTION_COLORS['peach_loyalists'],
        fawful: FACTION_COLORS['fawfuls_furious_freaks'],
        warlords: FACTION_COLORS['koopa_troop'],
        criminals: FACTION_COLORS['toad_gang']
    };

    const influenceBarHTML = `
        <div class="influence-bar-segment" style="width: ${data.influence.regency / totalInfluence * 100}%; background-color: ${influenceColors.regency};" title="Regency Influence">Regency</div>
        <div class="influence-bar-segment" style="width: ${data.influence.loyalists / totalInfluence * 100}%; background-color: ${influenceColors.loyalists};" title="Loyalist Influence">Loyalists</div>
        <div class="influence-bar-segment" style="width: ${data.influence.fawful / totalInfluence * 100}%; background-color: ${influenceColors.fawful};" title="Fawful's Influence">Fawful</div>
        <div class="influence-bar-segment" style="width: ${data.influence.warlords / totalInfluence * 100}%; background-color: ${influenceColors.warlords};" title="Koopa Remnant Influence">Warlords</div>
        <div class="influence-bar-segment" style="width: ${data.influence.criminals / totalInfluence * 100}%; background-color: ${influenceColors.criminals};" title="Criminal Underworld Influence">Criminals</div>
    `;

    const getPlansHTML = (leaderKey) => {
        return data.plans[leaderKey].map(plan => {
            const active = data.active_plans.find(p => p.planId === plan.id);
            return `
                <div class="plan-card ${active ? 'active-plan' : ''}" data-description="${plan.description}" data-effect="${plan.effect}">
                    <div class="plan-title">${plan.name}</div>
                    <div class="plan-details">
                        ${active ? `<strong>${active.days} remaining</strong>` : `(${plan.duration} days)`}
                    </div>
                </div>
            `;
        }).join('');
    };
    
    return `
        <div class="bop-system">
            <h4>${data.title}</h4>
            <p class="bop-description">${data.description}</p>
            <div class="civil-war-meter">
                <h5>Current Influence</h5>
                <div class="influence-bar-container">${influenceBarHTML}</div>
            </div>
            <div class="bop-plans-section">
                <h5>Leader Agendas</h5>
                <div class="leader-plans-grid">
                    <div class="leader-plans-block">
                        <h6>Chancellor Toadsworth (Regency)</h6>
                        ${getPlansHTML('chancellor_toadsworth')}
                    </div>
                    <div class="leader-plans-block">
                        <h6>Captain Toadette (Loyalists)</h6>
                        ${getPlansHTML('captain_toadette')}
                    </div>
                     <div class="leader-plans-block">
                        <h6>Fawful (Castle Occupation)</h6>
                        ${getPlansHTML('fawful')}
                    </div>
                    <div class="leader-plans-block">
                        <h6>Kamek (Koopa Remnants)</h6>
                        ${getPlansHTML('kamek')}
                    </div>
                    <div class="leader-plans-block">
                        <h6>Skull-Cap Murphy (Toad Gang)</h6>
                        ${getPlansHTML('skull_cap_murphy')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMidlands() {
    const data = BOP_STATE.midlands;

    const locationsHTML = data.locations.map(loc => `
        <div class="location-item control-${loc.control} ${loc.isBattlefront ? 'is-battlefront' : ''}">
            <img src="${loc.icon}" alt="${loc.control}" class="location-icon">
            <div class="location-info">
                <div class="name">${loc.name}</div>
                <div class="type">${loc.type} ${loc.note ? `- <span class="note">${loc.note}</span>` : ''}</div>
            </div>
        </div>
    `).join('');

     const getPlansHTML = (leaderKey) => {
        const leaderChar = LORE_DATA.characters[leaderKey] || {};
        return data.plans[leaderKey].map(plan => {
            const active = data.active_plans.find(p => p.planId === plan.id);
            return `
                <div class="plan-card ${active ? 'active-plan' : ''}" data-description="${plan.description}" data-effect="${plan.effect}">
                    <div class="plan-title">${plan.name}</div>
                    <div class="plan-details">
                         ${active ? `<strong>${active.days} remaining</strong>` : `(${plan.duration} days)`}
                    </div>
                </div>
            `;
        }).join('');
    };

    return `
         <div class="bop-system">
            <h4>${data.title}</h4>
            <p class="bop-description">${data.description}</p>
            <div class="midlands-overview-container">
                <div class="battle-map-container">
                    <h5>Battle Map</h5>
                    <div class="battle-map-locations">${locationsHTML}</div>
                </div>
            </div>
            <div class="bop-plans-section">
                <h5>Leader Agendas</h5>
                <div class="leader-plans-grid">
                     <div class="leader-plans-block">
                        <h6>Emperor Elagabalus (Regal)</h6>
                        ${getPlansHTML('emperor_elagabalus')}
                    </div>
                     <div class="leader-plans-block">
                        <h6>Baron Von Hess (Vampire)</h6>
                        ${getPlansHTML('baron_von_hess')}
                    </div>
                     <div class="leader-plans-block">
                        <h6>Grak Ironhide (Werewolf)</h6>
                        ${getPlansHTML('grak_ironhide')}
                    </div>
                </div>
            </div>
        </div>
    `;
}


function setupEventListeners() {
    const tooltip = document.getElementById('bop-tooltip');
    const container = document.getElementById('bop-container');
    if(!tooltip || !container) return;

    container.addEventListener('mouseover', (e) => {
        const planCard = e.target.closest('.plan-card');
        if (planCard && planCard.dataset.description) {
            tooltip.innerHTML = `
                <h6>${planCard.querySelector('.plan-title').textContent}</h6>
                <p>${planCard.dataset.description}</p>
                <p class="tooltip-effect"><strong>Effect:</strong> ${planCard.dataset.effect}</p>
            `;
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        }
    });

    container.addEventListener('mousemove', (e) => {
        if (tooltip.style.visibility === 'visible') {
            tooltip.style.left = `${e.clientX + 15}px`;
            tooltip.style.top = `${e.clientY + 15}px`;
        }
    });

    container.addEventListener('mouseout', (e) => {
        if (e.target.closest('.plan-card')) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    });
}


export function init() {
    const container = document.getElementById('bop-container');
    if (!container) return;

    container.innerHTML = `
        <h3 class="page-title" style="font-size: 1.8rem; color: var(--text-secondary); margin-bottom: 24px;">Balance of Power</h3>
        ${renderMushroomKingdom()}
        ${renderMidlands()}
        <div id="bop-tooltip"></div>
    `;
    setupEventListeners();
}