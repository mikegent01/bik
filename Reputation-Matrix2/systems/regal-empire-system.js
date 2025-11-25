// This module handles the rendering and interaction for the Holy Midlands Diet system.

import { LORE_DATA, CHARACTER_RELATIONS } from '../lore.js';
import { state } from '../Reputation-Matrix2/state.js';

const MIDLANDS_DIET_DATA = {
    name: "Holy Midlands Diet",
    status: "Fractured",
    description: "The Midlands are governed by a parliamentary body where provincial representatives vote on state matters. The Diet is currently highly fractured. The traditional Imperial Concordat faces opposition from multiple, hostile supernatural blocs: the manipulative Sanguine Covenant of vampires, the territorial Territorial Pact of werewolves, and the isolationist Arcane Congress of mages. With these factions refusing to cooperate, the pragmatic Heartland Alliance holds the decisive swing vote in an increasingly unstable political landscape.",
    provinces: [
        { name: 'Capital Province', votes: 15, faction: 'regal_empire' }, { name: 'Yal Belanor', votes: 4, faction: 'regal_empire' },
        { name: 'Vemilia', votes: 3, faction: 'regal_empire' }, { name: 'Ironwood & Isle of Burbary', votes: 4, faction: 'regal_empire' },
        { name: 'Lockerwood', votes: 3, faction: 'unaligned' }, { name: 'Yal Central', votes: 3, faction: 'regal_empire' },
        { name: 'Dark Shores', votes: 2, faction: 'unaligned' }, { name: 'Autumnwood', votes: 5, faction: 'onyx_hand' },
        { name: 'Dry County', votes: 1, faction: 'cosmic_jesters' }, { name: 'Dulgra', votes: 3, faction: 'moonfang_pack' },
        { name: 'Dark Valley', votes: 3, faction: 'moonfang_pack' }, { name: 'Gehnsha Glade', votes: 3, faction: 'onyx_hand' },
        { name: 'Jungle de Thorn', votes: 2, faction: 'regal_empire' }, { name: 'Yale Shores', votes: 2, faction: 'mages_guild' }
    ],
    coalitions: {
        imperial_concordat: { name: 'The Imperial Concordat', color: 'var(--faction-regal_empire)', factions: ['regal_empire', 'iron_legion'], description: "Represents the old guard of the Regal Empire..." },
        sanguine_covenant: { name: 'The Sanguine Covenant', color: 'var(--faction-onyx_hand)', factions: ['onyx_hand'], description: "The political arm of the ancient vampire covens..." },
        territorial_pact: { name: 'The Territorial Pact', color: 'var(--faction-moonfang_pack)', factions: ['moonfang_pack'], description: "Represents the fierce werewolf clans..." },
        arcane_congress: { name: 'The Arcane Congress', color: 'var(--faction-mages_guild)', factions: ['mages_guild'], description: "The Mages' Guild acts as its own independent voting bloc..." },
        heartland_alliance: { name: 'The Heartland Alliance', color: 'var(--faction-unaligned)', factions: ['unaligned'], description: "A pragmatic bloc representing the common folk..." },
        chaos_caucus: { name: 'The Chaos Caucus', color: 'var(--faction-cosmic_jesters)', factions: ['cosmic_jesters', 'freelancer_underworld'], description: "A force of pure disruption..." }
    }
};

const CURRENT_VOTE = {
    id: 'supernatural_sovereignty_act',
    title: "Vote on: The Supernatural Sovereignty Act",
    proposer: 'Tavian Hawkwind',
    description: "An emergency vote has been called on a proposal by the delegate Tavian Hawkwind. The act seeks to declare organized supernatural entities, specifically the Onyx Hand (vampires) and the Moonfang Pack (werewolves), illegal within Imperial borders and mandate a military containment protocol.",
    arguments: {
        for: "Proponents argue this is a necessary step for security. They claim you cannot make a truce with factions that do not recognize mortal law and whose very nature is predatory. This act, they say, provides a clear legal and moral mandate to protect Imperial citizens.",
        against: "Opponents argue this is a declaration of war that the Empire cannot afford. They believe it will unite two powerful, ancient enemies against the Empire, stretch the Iron Legion too thin, and result in catastrophic bloodshed on the border provinces. They advocate for containment through diplomacy and treaties, not open conflict."
    },
    results: null
};

const NAME_PARTS = {
    first: ['Alden', 'Brant', 'Corbin', 'Darian', 'Elias', 'Finnian', 'Gareth', 'Hadrian', 'Isolde', 'Joric', 'Kael', 'Liana', 'Merek', 'Nerys', 'Orin', 'Perrin', 'Quintus', 'Rowan', 'Seraphina', 'Tavian', 'Uriel', 'Valerius', 'Wren', 'Xanthe', 'Ysolde', 'Zarek'],
    last: ['Stonehand', 'Blackwood', 'Ironford', 'Silverstream', 'Goldcrest', 'Hawkwind', 'Oakhaven', 'Brightwater', 'Stormcaller', 'Ashworth', 'Vale', 'Thorne', 'Westbrook', 'Northgate', 'Rivers', 'Marsh', 'Fell', 'Crestwood', 'Greycastle', 'Sunstrider']
};
const PERSONALITIES = ['Stoic Traditionalist', 'Fiery Firebrand', 'Cunning Diplomat', 'Pragmatic Bureaucrat', 'Ambitious Schemer', 'Honorable Zealot', 'Jaded Cynic'];
let selectedSeat = null;

function generateUniqueName(existingNames) {
    let name;
    do {
        const first = NAME_PARTS.first[Math.floor(Math.random() * NAME_PARTS.first.length)];
        const last = NAME_PARTS.last[Math.floor(Math.random() * NAME_PARTS.last.length)];
        name = `${first} ${last}`;
    } while (existingNames.has(name));
    existingNames.add(name);
    return name;
}

function generateRepresentatives() {
    let reps = [];
    let idCounter = 0;
    const existingNames = new Set();
    MIDLANDS_DIET_DATA.provinces.forEach(province => {
        for (let i = 0; i < province.votes; i++) {
            reps.push({
                id: `rep-${idCounter++}`,
                name: generateUniqueName(existingNames),
                province: province.name,
                factionId: province.faction,
                personality: PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)],
                power: 20 + Math.floor(Math.random() * 51)
            });
        }
    });
    return reps;
}

const representatives = generateRepresentatives();

function simulateVote() {
    if (CURRENT_VOTE.results) return CURRENT_VOTE.results;

    const proposer = CURRENT_VOTE.proposer;
    const results = { yes: 0, no: 0, abstain: 0, votes: [] };

    representatives.forEach(rep => {
        let vote = 'abstain';
        let reason = 'Undecided or prioritizing provincial matters.';
        const repWithFaction = state.finalReputations[proposer]?.reputation[rep.factionId] || 0;
        const coalition = Object.values(MIDLANDS_DIET_DATA.coalitions).find(c => c.factions.includes(rep.factionId));
        
        if (rep.factionId === 'onyx_hand' || rep.factionId === 'moonfang_pack') { vote = 'no'; reason = 'Voted NO out of self-preservation.'; } 
        else if (rep.factionId === 'mages_guild') { vote = 'no'; reason = 'Voted NO, viewing this as a dangerous overreach of mundane law.'; } 
        else if (coalition?.name === 'The Imperial Concordat') { vote = 'yes'; reason = 'Voted YES, supporting the Emperor\'s mandate for order.'; }

        if (vote === 'abstain') {
            if (repWithFaction > 30) { vote = 'yes'; reason = `Voted YES, influenced by the proposer's positive reputation.`; } 
            else if (repWithFaction < -20) { vote = 'no'; reason = `Voted NO due to a deep distrust of the proposer.`; }
        }

        if (rep.personality === 'Fiery Firebrand' || rep.personality === 'Honorable Zealot') { vote = 'yes'; reason = `Voted YES based on a strong ideological stance against supernatural threats.` } 
        else if (rep.personality === 'Jaded Cynic') { vote = 'abstain'; reason = 'Abstained, believing the vote to be a pointless political gesture.'; }
        
        results.votes.push({ repId: rep.id, name: rep.name, vote, reason });
    });

    results.yes = 81;
    results.no = 30;
    results.abstain = 4;
    
    CURRENT_VOTE.results = results;
    return results;
}

function showDietDetailPanel(repData, seatElement) {
    const appContainer = document.getElementById('app');
    const detailPanel = document.getElementById('detail-panel');
    const detailPanelContent = document.getElementById('detail-panel-content');
    if (!detailPanel || !detailPanelContent) return;

    if (selectedSeat) selectedSeat.classList.remove('selected');
    selectedSeat = seatElement;
    selectedSeat.classList.add('selected');

    const faction = LORE_DATA.factions[repData.factionId] || { name: 'Unaligned', logo: '' };
    const coalition = Object.values(MIDLANDS_DIET_DATA.coalitions).find(c => c.factions.includes(repData.factionId));
    
    detailPanelContent.innerHTML = `
        <div class="panel-header">${faction.logo ? `<img src="${faction.logo}" alt="${faction.name} Logo">` : ''}<h3>${repData.name}</h3></div>
        <div class="panel-section">
            <p><strong>Province:</strong> ${repData.province}</p>
            <p><strong>Affiliation:</strong> ${faction.name}</p>
            <p><strong>Coalition:</strong> ${coalition ? coalition.name : 'Independent'}</p>
            <p><strong>Personality:</strong> <span class="personality">${repData.personality}</span></p>
        </div>`;

    detailPanel.classList.add('visible');
    appContainer.classList.add('panel-visible');
}

function hideDietDetailPanel() {
    const appContainer = document.getElementById('app');
    const detailPanel = document.getElementById('detail-panel');
    if (detailPanel) detailPanel.classList.remove('visible');
    if (appContainer) appContainer.classList.remove('panel-visible');
    if (selectedSeat) { selectedSeat.classList.remove('selected'); selectedSeat = null; }
}

export function renderHolyMidlandsDiet() {
    const data = MIDLANDS_DIET_DATA;
    const voteResults = simulateVote();
    const totalVotes = voteResults.yes + voteResults.no + voteResults.abstain;
    const speakerRep = representatives[0];
    const groupedByCoalition = representatives.reduce((acc, rep) => {
        const coalitionKey = Object.keys(data.coalitions).find(key => data.coalitions[key].factions.includes(rep.factionId)) || 'independent';
        if (!acc[coalitionKey]) acc[coalitionKey] = [];
        acc[coalitionKey].push(rep);
        return acc;
    }, {});

    const coalitionsHTML = Object.entries(data.coalitions).map(([key, coalition]) => {
        const reps = groupedByCoalition[key] || [];
        if (reps.length === 0) return '';
        return `
            <div class="coalition-block">
                <h4 class="coalition-header" style="border-left-color: ${coalition.color};">${coalition.name} (${reps.length} seats)</h4>
                <div class="seat-container">
                    ${reps.map(rep => {
                        const repVote = voteResults.votes.find(v => v.repId === rep.id);
                        return `<div class="parliament-seat seat-${rep.factionId} vote-${repVote.vote}" data-rep-id="${rep.id}" title="${rep.name}"></div>`;
                    }).join('')}
                </div>
            </div>`;
    }).join('');

    const voteDisplayHTML = `
        <div class="vote-display-card">
            <h3 class="section-title">${CURRENT_VOTE.title}</h3>
            <p class="vote-description">${CURRENT_VOTE.description}</p>
            <div class="vote-arguments">
                <div class="argument-for"><strong>Argument FOR:</strong> ${CURRENT_VOTE.arguments.for}</div>
                <div class="argument-against"><strong>Argument AGAINST:</strong> ${CURRENT_VOTE.arguments.against}</div>
            </div>
            <div class="vote-results">
                <h4>Final Tally: PASSED</h4>
                <div class="vote-tally-bar">
                    <div class="tally-segment vote-yes" style="width: ${(voteResults.yes / totalVotes) * 100}%" title="${voteResults.yes} Yes votes">${voteResults.yes}</div>
                    <div class="tally-segment vote-no" style="width: ${(voteResults.no / totalVotes) * 100}%" title="${voteResults.no} No votes">${voteResults.no}</div>
                    <div class="tally-segment vote-abstain" style="width: ${(voteResults.abstain / totalVotes) * 100}%" title="${voteResults.abstain} Abstain votes">${voteResults.abstain}</div>
                </div>
            </div>
        </div>`;

    const speakerVote = voteResults.votes.find(v => v.repId === speakerRep.id)?.vote || 'yes';

    return `
        <p class="system-description">${data.description}</p>
        <div class="system-content">
            ${voteDisplayHTML}
            <h3 class="section-title" style="margin-top: 32px;">Diet Seating Chart</h3>
            <div class="parliament-container">
                 <div class="speaker-section">
                    <h4>Speaker of the Diet</h4>
                    <div class="speaker-seat seat-${speakerRep.factionId} vote-${speakerVote}" data-rep-id="${speakerRep.id}" title="${speakerRep.name}"></div>
                 </div>
                <div class="coalition-grid">${coalitionsHTML}</div>
            </div>
        </div>`;
}

export function initHolyMidlandsDietListeners() {
    const tooltip = document.getElementById('parliament-tooltip');
    const dietContainer = document.querySelector('.unique-system-container');
    const detailPanelClose = document.getElementById('detail-panel-close');

    if (!tooltip || !dietContainer) return;

    dietContainer.addEventListener('mouseover', (e) => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            const voteData = CURRENT_VOTE.results?.votes.find(v => v.repId === repId);
            if (repData && voteData) {
                tooltip.innerHTML = `<h4>${repData.name}</h4><p><strong>Province:</strong> ${repData.province}</p><p class="vote-${voteData.vote}"><strong>Vote: ${voteData.vote.toUpperCase()}</strong></p><p class="personality">${voteData.reason}</p>`;
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        }
    });

    dietContainer.addEventListener('mousemove', (e) => {
        if (tooltip.style.visibility === 'visible') {
            const containerRect = dietContainer.getBoundingClientRect();
            tooltip.style.left = `${e.clientX - containerRect.left + 15}px`;
            tooltip.style.top = `${e.clientY - containerRect.top + 15}px`;
        }
    });

    dietContainer.addEventListener('mouseout', (e) => {
        if (e.target.closest('.parliament-seat, .speaker-seat')) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    });

    dietContainer.addEventListener('click', e => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            if (repData) showDietDetailPanel(repData, seat);
        }
    });

    if (detailPanelClose) {
        detailPanelClose.addEventListener('click', hideDietDetailPanel);
    }
}