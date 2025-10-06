

import { state } from './state.js';
import { LORE_DATA } from './lore.js';
import { getReputation, getNotoriety, getDetailedFactionAssessment, getGenericFactionAssessment } from './reputation.js';
import { playSound } from './common.js';
import * as factionSystems from './faction-systems.js';
import { BOP_STATE } from './balance-of-power.js';
import { getIntelForFaction } from './systems/common.js';

const viewContainer = document.getElementById('view-container');
const partyList = document.getElementById('party-list');
const eventList = document.getElementById('event-list');
let currentFactionDetail = null;
let activeRegion = 'All Regions'; // Default active region

// --- ROUTING ---

export function router() {
    const hash = window.location.hash;
    const [path, param] = hash.substring(1).split('/');
    const layout = document.getElementById('directory-layout');

    // Clear old chart instances before rendering new view
    Object.values(state.chartInstances).forEach(chart => chart.destroy());
    state.chartInstances = {};

    if (path === 'faction' && param && LORE_DATA.factions[param]) {
        currentFactionDetail = param;
        if (layout) layout.classList.add('detail-view-active');
        renderFactionDetail(param);
    } else {
        currentFactionDetail = null;
        if (layout) layout.classList.remove('detail-view-active');
        renderFactionDirectory();
    }
}

// --- CORE RENDERERS ---

export function renderPartyList() {
    if (!partyList) return;
    partyList.innerHTML = '';
    state.party.forEach(playerKey => {
        const li = document.createElement('li');
        const player = LORE_DATA.characters[playerKey];
        if (player) {
            li.textContent = player.name;
            partyList.appendChild(li);
        }
    });
}

export function renderEventList() {
    const eventListContainer = document.getElementById('event-list');
    if (!eventListContainer) return;
    eventListContainer.innerHTML = '';
    // Show the last 5 events, most recent first.
    const recentEvents = [...LORE_DATA.timeline].reverse().slice(0, 5); 

    recentEvents.forEach(event => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${event.title}</strong><br><span style="font-size: 0.9em; opacity: 0.8;">${event.phase}</span>`;
        eventListContainer.appendChild(li);
    });
}

// --- VIEW-SPECIFIC RENDERERS ---

function renderFactionDirectory() {
    viewContainer.innerHTML = ''; // Clear previous view
    const grid = document.createElement('div');
    grid.className = 'faction-directory-grid';
    viewContainer.appendChild(grid);
    
    const isDebug = state.debugMode;
    const knownFactions = Object.entries(LORE_DATA.factions).filter(([key]) => isDebug || getIntelForFaction(key) > 0);

    // Get unique regions from known factions and render filter
    const knownRegions = [...new Set(knownFactions.map(([, f]) => f.region))].sort();
    const regionFilterList = document.getElementById('region-filter-list');
    
    let regionsHTML = `<li data-region="All Regions" class="${activeRegion === 'All Regions' ? 'active' : ''}">All Regions</li>`;
    regionsHTML += knownRegions.map(region => 
        `<li data-region="${region}" class="${region === activeRegion ? 'active' : ''}">${region}</li>`
    ).join('');
    regionFilterList.innerHTML = regionsHTML;
    
    // Filter and render factions for the active region
    const factionsToRender = knownFactions
        .filter(([, faction]) => activeRegion === 'All Regions' || faction.region === activeRegion)
        .sort(([, a], [, b]) => (b.power_level || 0) - (a.power_level || 0));

    grid.innerHTML = ''; // Clear existing grid before re-rendering
    
    factionsToRender.forEach(([factionKey, faction]) => {
        const intelLevel = getIntelForFaction(factionKey);
        
        // Leader
        let leaderHTML = '';
        if (intelLevel >= 40 || isDebug) {
            const leaderKey = faction.leader;
            if (leaderKey && LORE_DATA.characters[leaderKey]) {
                const leaderName = LORE_DATA.characters[leaderKey].name;
                leaderHTML = `<p class="assessment-text" style="font-size: 0.8rem; margin-top: 8px; font-style: normal;"><strong>Leader:</strong> ${leaderName}</p>`;
            }
        }
    
        // Power level
        let powerHTML = '';
        if (intelLevel >= 40 || isDebug) {
            powerHTML = `<strong>Power:</strong> ${faction.power_level || 'N/A'}`;
        }

        // Party Standing
        let partyRepTotal = 0;
        state.party.forEach(playerKey => { partyRepTotal += getReputation(playerKey, factionKey); });
        const partyRep = Math.round(partyRepTotal / state.party.length);
        const partyRepClass = partyRep > 10 ? 'positive' : partyRep < -10 ? 'negative' : 'neutral';
        const partyBarWidth = Math.min(Math.abs(partyRep), 100);
        const partyRepDisplay = `<span class="${partyRepClass}">${partyRep}</span>`;
        
        // Personal Standing
        let personalStandingHTML = '';
        const loggedInUser = state.loggedInUser;
        if (loggedInUser && loggedInUser !== 'generic') {
            const personalRep = getReputation(loggedInUser, factionKey);
            const personalRepClass = personalRep > 10 ? 'positive' : personalRep < -10 ? 'negative' : 'neutral';
            const personalBarWidth = Math.min(Math.abs(personalRep), 100);
            const personalRepDisplay = `<span class="${personalRepClass}">${personalRep}</span>`;
            const userName = LORE_DATA.characters[loggedInUser]?.name || 'Operator';
            personalStandingHTML = `
                <div class="personal-standing" style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--border-color);">
                    <h5 style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">${userName}'s Standing:${personalRepDisplay}</h5>
                    <div class="reputation-bar-container">
                        <div class="reputation-bar ${personalRepClass}" style="width: ${personalBarWidth}%; background-color: var(--${personalRepClass}-color);"></div>
                    </div>
                </div>
            `;
        }
        
        // Intel Bar
        const intelBarHTML = `
            <div class="intel-level" style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed var(--border-color);">
                <h5 style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">Intel: <span style="color: var(--accent-color);">${intelLevel}</span></h5>
                <div class="reputation-bar-container">
                    <div class="reputation-bar" style="width: ${intelLevel}%; background-color: var(--accent-color);"></div>
                </div>
            </div>
        `;

        const standingHTML = `
            <div class="party-reputation" style="margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-color);">
                <h5 style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px;">Party Standing:${partyRepDisplay}</h5>
                <div class="reputation-bar-container">
                    <div class="reputation-bar ${partyRepClass}" style="width: ${partyBarWidth}%; background-color: var(--${partyRepClass}-color);"></div>
                </div>
                ${personalStandingHTML}
                ${intelBarHTML}
            </div>
        `;

        const card = document.createElement('a');
        card.className = `faction-directory-card`;
        card.href = `#faction/${factionKey}`;
        card.innerHTML = `
            <div class="faction-directory-header">
                <img src="${faction.logo}" class="faction-directory-logo" alt="${faction.name} Logo">
                <div class="faction-info">
                    <h4 class="faction-directory-title">${faction.name}</h4>
                     <p class="assessment-text" style="font-size: 0.8rem; margin-top: 4px; font-style: normal;">
                        ${powerHTML}
                     </p>
                     ${leaderHTML}
                </div>
            </div>
             <p class="assessment-text" style="font-size: 0.8rem">${faction.description}</p>
            ${standingHTML}
        `;
        grid.appendChild(card);
    });
}

function getPortraitForPerson(personName) {
    const nameMap = {
        // Toads
        'Dan': 'toads/dan.png',
        'Toad Lee': 'toads/toad_lee.png',
        'Bones': 'toads/bones.png',
        'Embercap': 'toads/embercap.png',
        'Mistveil': 'toads/mistveil.png',
        'Dewdrop': 'toads/dewdrop.png',
        'Captain Toadette': 'toads/captain_toadette.png',
        'Captain Toad': 'toads/captain_toad.png',
        'Chancellor Toadsworth': 'toads/chancellor_toadsworth.png',
        'Big T': 'toads/big_t.png',
        'Skull-Cap Murphy': 'toads/skull_cap_murphy.png',
        'The Ascended One': 'toads/the_ascended_one.png',
        'High Spore Speaker': 'toads/high_spore_speaker.png',
        'The Evil Toad God': 'toads/evil_toad_god.png',
        'Forgeheart': 'toads/forgeheart.png',
        'Green T': 'toads/green_t.png',
        'Earl Grey': 'toads/earl_grey.png',
        'Chai': 'toads/chai.png',

        // Others
        'Fawful': 'portraits/fawful.png',
        'X.O.': 'portraits/xo.png',
        'Bowser': 'portraits/bowser.png',
        'Kamek': 'portraits/kamek.png',
        'Emperor Elagabalus': 'portraits/emperor_elagabalus.png',
        'General Marcus Ironhand': 'portraits/general_marcus_ironhand.png',
        'Colonel Vera Steelstorm': 'portraits/colonel_vera_steelstorm.png',
        'Lord Vexar Steelclad': 'portraits/lord_vexar_steelclad.png',
        'Lady Ebonveil': 'portraits/lady_ebonveil.png',
        'Lord Crimson': 'portraits/lord_crimson.png',
        'The Veil Matron': 'portraits/the_veil_matron.png',
        'Archmage Veyra': 'portraits/archmage_veyra.png',
        'Archmage Theron': 'portraits/archmage_theron.png',
        'Janna Brightspark': 'portraits/janna_brightspark.png',
        'High Inquisitor Vale': 'portraits/high_inquisitor_vale.png',
        'Chief Thornpaw': 'portraits/chief_thornpaw.png',
        'Warchief Ironmane': 'portraits/warchief_ironmane.png',
        'Captain Syrup': 'portraits/captain_syrup.png',
        'Lario': 'portraits/lario.png',
        'Wario': 'portraits/wario.png',
        'Detective Penny': 'portraits/detective_penny.png',
        'Master Goodstyle': 'portraits/master_goodstyle.png',
    };
    return nameMap[personName] || 'portraits/unknown.png'; // Default portrait
}


function renderFactionDetail(factionKey) {
    viewContainer.innerHTML = ''; // Clear previous view
    const faction = LORE_DATA.factions[factionKey];
    if (!faction) {
        viewContainer.innerHTML = `<h2 class="page-title">Faction Not Found</h2><a href="#" class="terminal-back-button">&laquo; Back to Directory</a>`;
        return;
    }
    
    const detailWrapper = document.createElement('div');
    detailWrapper.id = 'faction-detail-view';
    viewContainer.appendChild(detailWrapper);

    const intelLevel = getIntelForFaction(factionKey);
    const isDebug = state.debugMode;

    const categoryClass = `legend-${faction.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}-border`;
    
    // Party Reputation
    let partyRepHTML = '';
    if (intelLevel >= 40 || isDebug) {
        let partyRepTotal = 0;
        state.party.forEach(playerKey => {
            partyRepTotal += getReputation(playerKey, factionKey);
        });
        const partyRep = Math.round(partyRepTotal / state.party.length);
        const partyRepClass = partyRep > 10 ? 'positive' : partyRep < -10 ? 'negative' : 'neutral';
        const partyBarWidth = Math.min(Math.abs(partyRep), 100);
        const showNumbers = intelLevel >= 80 || isDebug;
        const partyRepDisplay = showNumbers ? `<span class="${partyRepClass}">${partyRep}</span>` : '';

        partyRepHTML = `
            <div class="party-reputation">
                <h4>Total Party Reputation: ${partyRepDisplay}</h4>
                <div class="reputation-bar-container">
                    <div class="reputation-bar ${partyRepClass}" style="width: ${partyBarWidth}%; background-color: var(--${partyRepClass}-color);"></div>
                </div>
                <p class="assessment-text"><strong>Overall Stance:</strong> ${getGenericFactionAssessment(partyRep)}</p>
            </div>
        `;
    }

    // Rumors, Intel & Active Agenda
    let intelSectionHTML = '';
    if (intelLevel >= 60 || isDebug) {
        const relevantRumors = LORE_DATA.rumors.filter(rumor =>
            state.activeRumors.includes(rumor.id) && rumor.effects[factionKey]
        );
        
        // Find leader and their active plans from the Balance of Power state
        const bopLeaderMap = {
            'mushroom_regency': 'chancellor_toadsworth',
            'peach_loyalists': 'captain_toadette',
            'koopa_troop': 'kamek',
            'toad_gang': 'skull_cap_murphy',
            'fawfuls_furious_freaks': 'fawful',
            'regal_empire': 'emperor_elagabalus',
            'onyx_hand': 'baron_von_hess',
            'moonfang_pack': 'grak_ironhide'
        };
        const factionBOPLeaderKey = bopLeaderMap[factionKey];
        const bopPlans = { ...(BOP_STATE.mushroom_kingdom.plans || {}), ...(BOP_STATE.midlands.plans || {}) };
        const activeBopPlans = [ ...(BOP_STATE.mushroom_kingdom.active_plans || []), ...(BOP_STATE.midlands.active_plans || []) ];

        let activePlans = [];
        if (factionBOPLeaderKey && bopPlans[factionBOPLeaderKey]) {
            const leaderPlans = bopPlans[factionBOPLeaderKey];
            const activeLeaderPlans = activeBopPlans.filter(p => p.leader === factionBOPLeaderKey);
            
            activeLeaderPlans.forEach(activePlan => {
                const planDetails = leaderPlans.find(p => p.id === activePlan.planId);
                if (planDetails) {
                    activePlans.push({ ...planDetails, ...activePlan });
                }
            });
        }

        if (relevantRumors.length > 0 || activePlans.length > 0) {
            intelSectionHTML = `<div class="intel-and-agenda-container">`;

            if (relevantRumors.length > 0) {
                intelSectionHTML += `
                    <h5>Active Rumors & Intel</h5>
                    <div class="rumors-list">
                        ${relevantRumors.map(rumor => `
                            <div class="rumor">
                                <strong class="rumor-title">${rumor.title}</strong>
                                <p class="assessment-text">${rumor.description} (Rep ${rumor.effects[factionKey] > 0 ? '+' : ''}${rumor.effects[factionKey]})</p>
                            </div>`).join('')
                        }
                    </div>
                `;
            }

            if (activePlans.length > 0) {
                intelSectionHTML += `
                    <h5 style="margin-top: ${relevantRumors.length > 0 ? '16px' : '0'};">Active Agenda</h5>
                    <div class="agenda-list">
                        ${activePlans.map(plan => `
                            <div class="agenda-item">
                                <strong class="agenda-title">${plan.name} (${plan.days} days remaining)</strong>
                                <p class="assessment-text">${plan.description}</p>
                                <p class="assessment-text"><em><strong>Effect:</strong> ${plan.effect}</em></p>
                            </div>`).join('')
                        }
                    </div>
                `;
            }

            intelSectionHTML += `</div>`;
        }
    }


    // Notable People
    let notablePeopleHTML = '';
    if ((intelLevel >= 25 || isDebug) && faction.notable_people && faction.notable_people.length > 0) {
        const showDetails = intelLevel >= 60 || isDebug;
        notablePeopleHTML = `
            <div class="notable-people-container">
                <h5>Notable People</h5>
                <div class="notable-people-grid">
                    ${faction.notable_people.map(person => `
                        <div class="notable-person-card">
                            <img src="${getPortraitForPerson(person.name)}" alt="${person.name}" class="person-portrait">
                            <div class="person-info">
                                <h6 class="person-name">${person.name}</h6>
                                <span class="person-role">${person.role}</span>
                                ${showDetails ? `<p class="person-description">${person.description}</p>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Unique System
    const uniqueSystemHTML = (intelLevel >= 60 || isDebug) ? factionSystems.renderSystemForFaction(factionKey, faction, state) : '';

    // Individual Character Assessments
    let characterAssessmentsHTML = '';
    if (intelLevel >= 80 || isDebug) {
        let assessments = '';
        const loggedInUser = state.loggedInUser;
        state.party.forEach(playerKey => {
            const player = state.players[playerKey];
            const reputation = getReputation(playerKey, factionKey);
            const repClass = reputation > 10 ? 'positive' : reputation < -10 ? 'negative' : 'neutral';
            const personalStandingClass = (loggedInUser !== 'generic' && loggedInUser === playerKey) ? 'personal-standing' : '';
            const notoriety = getNotoriety(playerKey, factionKey);
            const hasMeaningfulConnection = state.calculationBreakdown[playerKey]?.[factionKey] && (
                state.calculationBreakdown[playerKey][factionKey].rumors.length > 0 ||
                (state.calculationBreakdown[playerKey][factionKey].propagation && state.calculationBreakdown[playerKey][factionKey].propagation.length > 0) ||
                Math.abs(state.calculationBreakdown[playerKey][factionKey].base) > 10
            );

            assessments += `
                <div class="character-assessment ${personalStandingClass}">
                    <div class="char-rep-header">
                        <span class="char-name ${repClass}">${player.name}: ${reputation}</span>
                        <span class="char-notoriety">Notoriety: ${notoriety}</span>
                    </div>
                    <div class="assessment-text">${getDetailedFactionAssessment(factionKey, playerKey, reputation, notoriety)}</div>
                    ${hasMeaningfulConnection ? `
                    <div class="calculation-breakdown">
                        <details>
                            <summary class="calculation-breakdown summary">Show Calculation</summary>
                            <ul>
                                <li>Base Reputation: ${state.calculationBreakdown[playerKey][factionKey].base}</li>
                                ${state.calculationBreakdown[playerKey][factionKey].rumors.map(r => `<li>Rumor: "${r.title}": ${r.value > 0 ? '+' : ''}${r.value}</li>`).join('')}
                                ${state.calculationBreakdown[playerKey][factionKey].propagation ? state.calculationBreakdown[playerKey][factionKey].propagation.map(p => `<li>From ${p.source}: ${p.value > 0 ? '+' : ''}${p.value}</li>`).join('') : ''}
                                <li><em>(Further propagation passes applied)</em></li>
                                <li><strong>Final Total: ${reputation}</strong></li>
                            </ul>
                        </details>
                    </div>` : ''}
                </div>`;
        });
        characterAssessmentsHTML = `
            <div class="character-assessments-container">
                <h4>Individual Standing & Overall Faction Opinion:</h4>
                ${assessments}
            </div>
        `;
    }

    // Waluigi Tip
    let waluigiTipHTML = '';
    if (intelLevel >= 90 || isDebug) {
        let tipText = faction.waluigi_tip;
        if (tipText) {
            waluigiTipHTML = `
            <div class="waluigi-faction-tip">
                <img src="logo.png" alt="Waluigi Logo">
                <div>
                    <h6>Waluigi's Cunning Plan</h6>
                    <p>${tipText}</p>
                </div>
            </div>`;
        }
    }

    detailWrapper.innerHTML = `
        <a href="#" class="terminal-back-button">&laquo; Back to Directory</a>
        <div class="card faction-card ${categoryClass}" id="${factionKey}">
             <div class="faction-card-header">
                <img src="${faction.logo}" class="faction-logo" alt="${faction.name} Logo">
                <div class="faction-info">
                    <h3 class="card-title" style="font-size: 2rem;">${faction.name}</h3>
                    <p class="faction-description">${faction.description}</p>
                </div>
            </div>
            ${partyRepHTML}
            ${intelSectionHTML}
            ${notablePeopleHTML}
            ${uniqueSystemHTML}
            ${characterAssessmentsHTML}
            ${waluigiTipHTML}
        </div>
    `;
    
    factionSystems.initSystem(factionKey, faction);
}


// --- EVENT LISTENERS ---

export function setupEventListeners() {
    window.addEventListener('hashchange', router);

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.nav-button') || e.target.closest('.back-button') || e.target.closest('.terminal-back-button')) {
            playSound('click.mp3', 0.6);
        }
        if(e.target.matches('summary')) {
            const details = e.target.closest('details');
            if (details && !details.open) {
                 playSound('confirm.mp3', 0.5);
            }
        }
    });

    const regionFilterList = document.getElementById('region-filter-list');
    if(regionFilterList) {
        regionFilterList.addEventListener('click', e => {
            if(e.target.tagName === 'LI') {
                const region = e.target.dataset.region;
                if(region) {
                    playSound('click.mp3');
                    activeRegion = region;
                    renderFactionDirectory();
                }
            }
        });
    }

    const switchOperatorBtn = document.getElementById('switch-operator-btn');
    if (switchOperatorBtn) {
        switchOperatorBtn.addEventListener('click', () => {
            playSound('wah.mp3');
            localStorage.removeItem('vigilanceTerminalUser');
            localStorage.removeItem('vigilanceDebugMode');
            window.location.href = 'index.html';
        });
    }
}