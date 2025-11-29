// This module handles the rendering and interaction for the Holy Midlands Diet system.

import { LORE_DATA, CHARACTER_RELATIONS } from '../lore.js';
import { state } from '../state.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from '../calendar-data.js';

// ============================================
// DIET CONFIGURATION DATA
// ============================================

const MIDLANDS_DIET_DATA = {
    name: "Holy Midlands Diet",
    status: "Crisis Session",
    currentSession: 47,
    sessionStartDate: { year: 1040, monthIndex: 6, day: 15 },
    description: "The Midlands are governed by a parliamentary body where provincial representatives vote on state matters. The Diet is currently in emergency session following the passage of the Supernatural Sovereignty Act. The traditional Imperial Concordat faces open revolt from the supernatural blocs, while the pragmatic Heartland Alliance desperately seeks de-escalation.",
    provinces: [
        { name: 'Capital Province', votes: 15, faction: 'regal_empire', wealth: 'high', militarized: true },
        { name: 'Yal Belanor', votes: 4, faction: 'regal_empire', wealth: 'medium', militarized: false },
        { name: 'Vemilia', votes: 3, faction: 'regal_empire', wealth: 'medium', militarized: false },
        { name: 'Ironwood & Isle of Burbary', votes: 4, faction: 'regal_empire', wealth: 'high', militarized: true },
        { name: 'Lockerwood', votes: 3, faction: 'unaligned', wealth: 'low', militarized: false },
        { name: 'Yal Central', votes: 3, faction: 'regal_empire', wealth: 'medium', militarized: false },
        { name: 'Dark Shores', votes: 2, faction: 'unaligned', wealth: 'low', militarized: false },
        { name: 'Autumnwood', votes: 5, faction: 'onyx_hand', wealth: 'high', militarized: true },
        { name: 'Dry County', votes: 1, faction: 'cosmic_jesters', wealth: 'low', militarized: false },
        { name: 'Dulgra', votes: 3, faction: 'moonfang_pack', wealth: 'medium', militarized: true },
        { name: 'Dark Valley', votes: 3, faction: 'moonfang_pack', wealth: 'low', militarized: true },
        { name: 'Gehnsha Glade', votes: 3, faction: 'onyx_hand', wealth: 'medium', militarized: false },
        { name: 'Jungle de Thorn', votes: 2, faction: 'regal_empire', wealth: 'low', militarized: false },
        { name: 'Yale Shores', votes: 2, faction: 'mages_guild', wealth: 'high', militarized: false }
    ],
    coalitions: {
        imperial_concordat: { 
            name: 'The Imperial Concordat', 
            color: 'var(--faction-regal_empire)', 
            factions: ['regal_empire', 'iron_legion'], 
            description: "The old guard of the Regal Empire, pushing for order through strength.",
            stance: 'hawkish',
            leader: 'Lord Chancellor Aldric Stonehand'
        },
        sanguine_covenant: { 
            name: 'The Sanguine Covenant', 
            color: 'var(--faction-onyx_hand)', 
            factions: ['onyx_hand'], 
            description: "The political arm of the vampire covens, now fighting for survival.",
            stance: 'defensive',
            leader: 'Countess Isolde Blackwood'
        },
        territorial_pact: { 
            name: 'The Territorial Pact', 
            color: 'var(--faction-moonfang_pack)', 
            factions: ['moonfang_pack'], 
            description: "The werewolf clans, preparing for total war.",
            stance: 'aggressive',
            leader: 'Alpha Fenris Greycastle'
        },
        arcane_congress: { 
            name: 'The Arcane Congress', 
            color: 'var(--faction-mages_guild)', 
            factions: ['mages_guild'], 
            description: "The Mages' Guild, viewing this as mundane overreach into arcane matters.",
            stance: 'isolationist',
            leader: 'Archmage Quintus Brightwater'
        },
        heartland_alliance: { 
            name: 'The Heartland Alliance', 
            color: 'var(--faction-unaligned)', 
            factions: ['unaligned'], 
            description: "Common folk caught between empires and monsters.",
            stance: 'neutral',
            leader: 'Speaker Wren Rivers'
        },
        chaos_caucus: { 
            name: 'The Chaos Caucus', 
            color: 'var(--faction-cosmic_jesters)', 
            factions: ['cosmic_jesters', 'freelancer_underworld'], 
            description: "Pure disruption made manifest.",
            stance: 'chaotic',
            leader: 'The Laughing Representative'
        }
    }
};

// ============================================
// LEGISLATIVE CALENDAR - All Votes
// ============================================

const VOTE_HISTORY = [
    {
        id: 'supernatural_sovereignty_act',
        title: "The Supernatural Sovereignty Act",
        proposer: 'Tavian Hawkwind',
        proposerFaction: 'regal_empire',
        date: { year: 1040, monthIndex: 6, day: 18 },
        status: 'passed',
        description: "Declares organized supernatural entities—specifically the Onyx Hand and Moonfang Pack—illegal within Imperial borders and mandates military containment.",
        arguments: {
            for: "Necessary for security. These factions do not recognize mortal law; their nature is predatory.",
            against: "This is a declaration of war the Empire cannot afford. It will unite ancient enemies against us."
        },
        results: { yes: 81, no: 30, abstain: 4 },
        consequences: [
            "Onyx Hand and Moonfang Pack representatives expelled from Diet",
            "Iron Legion authorized for 'containment operations'",
            "Border provinces placed under martial law"
        ],
        icon: '⚔️'
    },
    {
        id: 'toad_town_recognition',
        title: "Recognition of the Toad Town Provisional Government",
        proposer: 'Merek Oakhaven',
        proposerFaction: 'unaligned',
        date: { year: 1040, monthIndex: 6, day: 12 },
        status: 'tabled',
        description: "Motion to formally recognize Captain Toadette's martial government as legitimate successor to the Mushroom Regency in Toad Town.",
        arguments: {
            for: "The Regency has failed. Captain Toadette brings order and effective governance.",
            against: "Legitimizing a military coup sets dangerous precedent for all provinces."
        },
        results: { yes: 35, no: 42, abstain: 38 },
        consequences: ["Vote tabled for 30 days pending investigation"],
        icon: '🍄'
    }
];

const UPCOMING_VOTES = [
    {
        id: 'iron_mandate',
        title: "The Iron Mandate",
        proposer: 'Lord Chancellor Aldric Stonehand',
        proposerFaction: 'regal_empire',
        date: { year: 1040, monthIndex: 6, day: 21 },
        status: 'scheduled',
        description: "Emergency authorization granting the Iron Legion expanded powers to enforce the Supernatural Sovereignty Act, including: warrantless searches in border provinces, requisition of civilian assets, and summary detention of 'supernatural sympathizers'.",
        arguments: {
            for: "The Sovereignty Act is meaningless without enforcement. The Legion needs these tools to protect citizens from supernatural retaliation. Half-measures invite annihilation.",
            against: "This grants the Legion powers not seen since the Tyrant Wars. Today it's supernaturals—tomorrow, anyone who opposes the Chancellor. The border provinces will become military fiefdoms."
        },
        projectedResults: null,
        icon: '🛡️',
        urgency: 'critical',
        relatedEvents: [
            "Supernatural Sovereignty Act (Passed - Day 18)",
            "Kong-Kremling War Rekindled (Day 18)",
            "Iron Sky Breach - Vigilance Captured (Day 20)"
        ]
    },
    {
        id: 'refugee_containment_act',
        title: "The Displaced Persons Containment Act",
        proposer: 'Countess Nerys Thorne',
        proposerFaction: 'unaligned',
        date: { year: 1040, monthIndex: 6, day: 24 },
        status: 'proposed',
        description: "Establishes 'temporary processing facilities' for supernatural refugees fleeing the border provinces. Proponents call it humanitarian; critics call it concentration camps.",
        arguments: {
            for: "These beings need somewhere to go. Controlled facilities protect both them and citizens.",
            against: "We're building prisons for people whose only crime is existing. This is how atrocities begin."
        },
        projectedResults: null,
        icon: '🏚️',
        urgency: 'high'
    },
    {
        id: 'mage_registry_amendment',
        title: "Amendment to the Arcane Registration Act",
        proposer: 'Archmage Quintus Brightwater',
        proposerFaction: 'mages_guild',
        date: { year: 1040, monthIndex: 6, day: 28 },
        status: 'proposed',
        description: "Exempts licensed Mages' Guild members from supernatural categorization under the Sovereignty Act. The Guild is playing hardball—cooperate and we stay useful; lump us with vampires and we withdraw all services.",
        arguments: {
            for: "Mages are not supernatural creatures—they are trained scholars. The Empire needs our services.",
            against: "Special exemptions create a two-tiered system. Why should wealth and education buy immunity?"
        },
        projectedResults: null,
        icon: '📜',
        urgency: 'medium'
    },
    {
        id: 'kong_kremling_neutrality',
        title: "The Neutral Waters Resolution",
        proposer: 'Admiral Corbin Westbrook',
        proposerFaction: 'regal_empire',
        date: { year: 1040, monthIndex: 7, day: 3 },
        status: 'proposed',
        description: "Declares Imperial neutrality in the rekindled Kong-Kremling conflict and establishes a 'free passage corridor' through Imperial waters. Economic opportunism disguised as diplomacy.",
        arguments: {
            for: "Let the apes and lizards exhaust each other. We profit from both sides and emerge stronger.",
            against: "Neutrality is cowardice. The Kremlings are monsters. Supporting this resolution is complicity in their atrocities."
        },
        projectedResults: null,
        icon: '🌊',
        urgency: 'medium'
    }
];

// ============================================
// REPRESENTATIVE GENERATION
// ============================================

const NAME_PARTS = {
    first: ['Alden', 'Brant', 'Corbin', 'Darian', 'Elias', 'Finnian', 'Gareth', 'Hadrian', 'Isolde', 'Joric', 'Kael', 'Liana', 'Merek', 'Nerys', 'Orin', 'Perrin', 'Quintus', 'Rowan', 'Seraphina', 'Tavian', 'Uriel', 'Valerius', 'Wren', 'Xanthe', 'Ysolde', 'Zarek', 'Aldric', 'Fenris', 'Magnus', 'Helena', 'Viktor', 'Celeste'],
    last: ['Stonehand', 'Blackwood', 'Ironford', 'Silverstream', 'Goldcrest', 'Hawkwind', 'Oakhaven', 'Brightwater', 'Stormcaller', 'Ashworth', 'Vale', 'Thorne', 'Westbrook', 'Northgate', 'Rivers', 'Marsh', 'Fell', 'Crestwood', 'Greycastle', 'Sunstrider', 'Nighthollow', 'Duskwood', 'Ravencroft', 'Bloodmoon']
};

const PERSONALITIES = [
    { type: 'Stoic Traditionalist', bias: { imperial: 0.3, supernatural: -0.2 } },
    { type: 'Fiery Firebrand', bias: { imperial: 0.4, supernatural: -0.4 } },
    { type: 'Cunning Diplomat', bias: { imperial: 0, supernatural: 0 } },
    { type: 'Pragmatic Bureaucrat', bias: { imperial: 0.1, supernatural: -0.1 } },
    { type: 'Ambitious Schemer', bias: { imperial: 0.2, supernatural: 0.1 } },
    { type: 'Honorable Zealot', bias: { imperial: 0.5, supernatural: -0.5 } },
    { type: 'Jaded Cynic', bias: { imperial: -0.2, supernatural: 0 } },
    { type: 'Reformist Idealist', bias: { imperial: -0.3, supernatural: 0.2 } },
    { type: 'Corrupt Opportunist', bias: { imperial: 0, supernatural: 0.3 } }
];

let representatives = [];
let selectedSeat = null;
let currentVoteIndex = 0;

function generateSeededRandom(seed) {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function generateUniqueName(existingNames, seed) {
    let name;
    let attempts = 0;
    do {
        const firstIndex = Math.floor(generateSeededRandom(seed + attempts) * NAME_PARTS.first.length);
        const lastIndex = Math.floor(generateSeededRandom(seed + attempts + 1000) * NAME_PARTS.last.length);
        name = `${NAME_PARTS.first[firstIndex]} ${NAME_PARTS.last[lastIndex]}`;
        attempts++;
    } while (existingNames.has(name) && attempts < 100);
    existingNames.add(name);
    return name;
}

function generateRepresentatives() {
    const reps = [];
    let idCounter = 0;
    const existingNames = new Set();
    const baseSeed = 42069; // Consistent seed for reproducibility

    MIDLANDS_DIET_DATA.provinces.forEach((province, provIndex) => {
        for (let i = 0; i < province.votes; i++) {
            const repSeed = baseSeed + provIndex * 100 + i;
            const personalityIndex = Math.floor(generateSeededRandom(repSeed + 500) * PERSONALITIES.length);
            
            reps.push({
                id: `rep-${idCounter++}`,
                name: generateUniqueName(existingNames, repSeed),
                province: province.name,
                factionId: province.faction,
                personality: PERSONALITIES[personalityIndex],
                influence: 20 + Math.floor(generateSeededRandom(repSeed + 600) * 51),
                corruptible: generateSeededRandom(repSeed + 700) < 0.3,
                relationships: {},
                voteHistory: []
            });
        }
    });
    return reps;
}

// ============================================
// VOTE SIMULATION ENGINE
// ============================================

function getCurrentVote() {
    const currentAbsDay = CURRENT_GAME_DATE.year * 365 + CURRENT_GAME_DATE.monthIndex * 30 + CURRENT_GAME_DATE.day;
    
    // Find the most recent scheduled/active vote
    for (const vote of UPCOMING_VOTES) {
        const voteAbsDay = vote.date.year * 365 + vote.date.monthIndex * 30 + vote.date.day;
        if (voteAbsDay <= currentAbsDay + 1) { // Include votes happening tomorrow
            return vote;
        }
    }
    return UPCOMING_VOTES[0]; // Default to first upcoming
}

function getVoteStatus(vote) {
    const currentAbsDay = CURRENT_GAME_DATE.year * 365 + CURRENT_GAME_DATE.monthIndex * 30 + CURRENT_GAME_DATE.day;
    const voteAbsDay = vote.date.year * 365 + vote.date.monthIndex * 30 + vote.date.day;
    
    if (vote.status === 'passed' || vote.status === 'failed' || vote.status === 'tabled') {
        return vote.status;
    }
    
    const diff = voteAbsDay - currentAbsDay;
    if (diff < 0) return 'missed';
    if (diff === 0) return 'voting_today';
    if (diff === 1) return 'voting_tomorrow';
    return 'scheduled';
}

function simulateVote(vote) {
    if (vote.results) return vote.results;
    if (vote.status !== 'passed' && vote.status !== 'failed') {
        // Project results for upcoming votes
        return projectVoteResults(vote);
    }
    return vote.results;
}

function projectVoteResults(vote) {
    const results = { yes: 0, no: 0, abstain: 0, votes: [], projected: true };
    const voteSeed = vote.id.length * 1000 + vote.date.day;

    representatives.forEach((rep, idx) => {
        let voteDecision = 'abstain';
        let reason = 'Position unclear.';
        let confidence = 0.5;

        const coalition = Object.values(MIDLANDS_DIET_DATA.coalitions).find(c => 
            c.factions.includes(rep.factionId)
        );

        // Base faction alignment
        if (rep.factionId === 'onyx_hand' || rep.factionId === 'moonfang_pack') {
            // Supernatural factions - expelled but tracking their "would vote"
            voteDecision = 'expelled';
            reason = 'Expelled from Diet following Supernatural Sovereignty Act.';
            confidence = 1.0;
        } else if (rep.factionId === 'mages_guild') {
            // Mages are nervous but strategic
            if (vote.id === 'mage_registry_amendment') {
                voteDecision = 'yes';
                reason = 'Voting to protect Guild interests.';
                confidence = 0.95;
            } else if (vote.id === 'iron_mandate') {
                voteDecision = 'no';
                reason = 'Fears Legion overreach will eventually target mages.';
                confidence = 0.7;
            } else {
                voteDecision = 'abstain';
                reason = 'Watching carefully, avoiding commitment.';
                confidence = 0.6;
            }
        } else if (coalition?.name === 'The Imperial Concordat') {
            // Pro-imperial votes
            if (vote.id === 'iron_mandate' || vote.id === 'refugee_containment_act') {
                voteDecision = 'yes';
                reason = 'Supporting the Chancellor\'s security agenda.';
                confidence = 0.85;
            } else {
                voteDecision = 'yes';
                reason = 'Following party line.';
                confidence = 0.7;
            }
        } else if (rep.factionId === 'unaligned') {
            // Heartland swing votes
            const swingRoll = generateSeededRandom(voteSeed + idx);
            if (vote.id === 'iron_mandate') {
                if (swingRoll < 0.4) {
                    voteDecision = 'no';
                    reason = 'Fears Legion overreach in their province.';
                } else if (swingRoll < 0.7) {
                    voteDecision = 'abstain';
                    reason = 'Torn between security and liberty.';
                } else {
                    voteDecision = 'yes';
                    reason = 'Believes strong measures are necessary.';
                }
                confidence = 0.5;
            } else {
                voteDecision = 'abstain';
                reason = 'Waiting to see which way the wind blows.';
                confidence = 0.4;
            }
        } else if (rep.factionId === 'cosmic_jesters') {
            // Chaos vote
            const chaosRoll = generateSeededRandom(voteSeed + idx + 9999);
            if (chaosRoll < 0.33) voteDecision = 'yes';
            else if (chaosRoll < 0.66) voteDecision = 'no';
            else voteDecision = 'abstain';
            reason = 'Voted based on... unclear criteria.';
            confidence = 0.1;
        }

        // Personality modifiers
        if (rep.personality.type === 'Fiery Firebrand' && vote.id === 'iron_mandate') {
            voteDecision = 'yes';
            reason = 'Passionately supports crushing supernatural threat.';
            confidence = 0.9;
        } else if (rep.personality.type === 'Reformist Idealist' && vote.id === 'iron_mandate') {
            voteDecision = 'no';
            reason = 'Believes this path leads to tyranny.';
            confidence = 0.85;
        } else if (rep.personality.type === 'Jaded Cynic') {
            if (generateSeededRandom(voteSeed + idx + 5000) < 0.4) {
                voteDecision = 'abstain';
                reason = 'Believes the vote is already decided by backroom deals.';
                confidence = 0.6;
            }
        }

        if (voteDecision !== 'expelled') {
            results.votes.push({
                repId: rep.id,
                name: rep.name,
                province: rep.province,
                vote: voteDecision,
                reason,
                confidence
            });

            if (voteDecision === 'yes') results.yes++;
            else if (voteDecision === 'no') results.no++;
            else results.abstain++;
        }
    });

    return results;
}

// ============================================
// CALENDAR INTEGRATION
// ============================================

export function getLegislativeEventsForDay(year, monthIndex, day) {
    const events = [];
    
    // Check historical votes
    VOTE_HISTORY.forEach(vote => {
        if (vote.date.year === year && vote.date.monthIndex === monthIndex && vote.date.day === day) {
            events.push({
                type: 'legislation',
                name: `Diet Vote: ${vote.title}`,
                description: `Result: ${vote.status.toUpperCase()}. ${vote.description.substring(0, 100)}...`,
                icon: vote.icon || '🏛️',
                voteId: vote.id,
                status: vote.status
            });
        }
    });

    // Check upcoming votes
    UPCOMING_VOTES.forEach(vote => {
        if (vote.date.year === year && vote.date.monthIndex === monthIndex && vote.date.day === day) {
            const status = getVoteStatus(vote);
            events.push({
                type: 'legislation',
                name: `Scheduled Vote: ${vote.title}`,
                description: `${vote.description.substring(0, 100)}...`,
                icon: vote.icon || '🏛️',
                voteId: vote.id,
                status: status,
                urgency: vote.urgency
            });
        }
    });

    return events;
}

export function getAllLegislativeEvents() {
    const allEvents = [];
    
    VOTE_HISTORY.forEach(vote => {
        allEvents.push({
            ...vote,
            eventType: 'historical'
        });
    });

    UPCOMING_VOTES.forEach(vote => {
        allEvents.push({
            ...vote,
            eventType: 'upcoming',
            computedStatus: getVoteStatus(vote)
        });
    });

    return allEvents.sort((a, b) => {
        const aDay = a.date.year * 365 + a.date.monthIndex * 30 + a.date.day;
        const bDay = b.date.year * 365 + b.date.monthIndex * 30 + b.date.day;
        return aDay - bDay;
    });
}

// ============================================
// UI FUNCTIONS
// ============================================

function showDietDetailPanel(repData, seatElement) {
    const appContainer = document.getElementById('app');
    const detailPanel = document.getElementById('detail-panel');
    const detailPanelContent = document.getElementById('detail-panel-content');
    
    // Create or get overlay
    let overlay = document.querySelector('.detail-panel-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'detail-panel-overlay';
        overlay.addEventListener('click', hideDietDetailPanel);
        document.body.appendChild(overlay);
    }
    
    if (!detailPanel || !detailPanelContent) return;

    if (selectedSeat) selectedSeat.classList.remove('selected');
    selectedSeat = seatElement;
    selectedSeat.classList.add('selected');

    const faction = LORE_DATA?.factions?.[repData.factionId] || { name: 'Unaligned', logo: '' };
    const coalition = Object.values(MIDLANDS_DIET_DATA.coalitions).find(c => 
        c.factions.includes(repData.factionId)
    );

    const currentVote = getCurrentVote();
    const voteResults = simulateVote(currentVote);
    const repVote = voteResults.votes?.find(v => v.repId === repData.id);

    const isExpelled = repData.factionId === 'onyx_hand' || repData.factionId === 'moonfang_pack';

    detailPanelContent.innerHTML = `
        <div class="panel-header">
            ${faction.logo ? `<img src="${faction.logo}" alt="${faction.name} Logo">` : ''}
            <h3>${repData.name}</h3>
            ${isExpelled ? '<span class="expelled-badge">EXPELLED</span>' : ''}
        </div>
        <div class="panel-section">
            <p><strong>Province:</strong> ${repData.province}</p>
            <p><strong>Affiliation:</strong> ${faction.name}</p>
            <p><strong>Coalition:</strong> ${coalition ? coalition.name : 'Independent'}</p>
            <p><strong>Personality:</strong> <span class="personality">${repData.personality.type}</span></p>
            <p><strong>Influence:</strong> ${repData.influence}/100</p>
            ${repData.corruptible ? '<p class="corruptible-tag">⚠️ Susceptible to... persuasion</p>' : ''}
        </div>
        ${!isExpelled && repVote ? `
            <div class="panel-section vote-prediction">
                <h4>Predicted Vote on "${currentVote.title}"</h4>
                <p class="vote-stance vote-${repVote.vote}">${repVote.vote.toUpperCase()}</p>
                <p class="vote-reason">${repVote.reason}</p>
                <p class="vote-confidence">Confidence: ${Math.round(repVote.confidence * 100)}%</p>
            </div>
        ` : ''}
        ${isExpelled ? `
            <div class="panel-section expelled-notice">
                <h4>⛔ Expelled Representative</h4>
                <p>Following the passage of the Supernatural Sovereignty Act, this representative has been forcibly removed from the Diet.</p>
            </div>
        ` : ''}
    `;

    // Show panel and overlay
    detailPanel.classList.add('visible');
    overlay.classList.add('visible');
    appContainer?.classList.add('panel-visible');
    document.body.classList.add('panel-open');
    
    // Scroll panel content to top
    detailPanelContent.scrollTop = 0;
}

function hideDietDetailPanel() {
    const appContainer = document.getElementById('app');
    const detailPanel = document.getElementById('detail-panel');
    const overlay = document.querySelector('.detail-panel-overlay');
    
    if (detailPanel) detailPanel.classList.remove('visible');
    if (overlay) overlay.classList.remove('visible');
    if (appContainer) appContainer.classList.remove('panel-visible');
    document.body.classList.remove('panel-open');
    
    if (selectedSeat) {
        selectedSeat.classList.remove('selected');
        selectedSeat = null;
    }
}

function formatDate(date) {
    const month = CALENDAR_DATA?.months?.values?.[date.monthIndex];
    return `${month?.name || 'Month'} ${date.day}, ${date.year}`;
}

function getDaysUntil(date) {
    const currentAbs = CURRENT_GAME_DATE.year * 365 + CURRENT_GAME_DATE.monthIndex * 30 + CURRENT_GAME_DATE.day;
    const targetAbs = date.year * 365 + date.monthIndex * 30 + date.day;
    return targetAbs - currentAbs;
}

// ============================================
// MAIN RENDER FUNCTION
// ============================================

export function renderHolyMidlandsDiet() {
    // Initialize representatives if needed
    if (representatives.length === 0) {
        representatives = generateRepresentatives();
    }

    const data = MIDLANDS_DIET_DATA;
    const currentVote = getCurrentVote();
    const voteStatus = getVoteStatus(currentVote);
    const voteResults = simulateVote(currentVote);
    
    // Calculate totals (excluding expelled)
    const activeReps = representatives.filter(r => 
        r.factionId !== 'onyx_hand' && r.factionId !== 'moonfang_pack'
    );
    const totalActiveVotes = activeReps.length;
    const expelledCount = representatives.length - activeReps.length;

    // Group by coalition
    const groupedByCoalition = representatives.reduce((acc, rep) => {
        const coalitionKey = Object.keys(data.coalitions).find(key => 
            data.coalitions[key].factions.includes(rep.factionId)
        ) || 'independent';
        if (!acc[coalitionKey]) acc[coalitionKey] = [];
        acc[coalitionKey].push(rep);
        return acc;
    }, {});

    // Speaker
    const speakerRep = activeReps[0];

    // Coalition HTML
    const coalitionsHTML = Object.entries(data.coalitions).map(([key, coalition]) => {
        const reps = groupedByCoalition[key] || [];
        if (reps.length === 0) return '';
        
        const isExpelled = coalition.factions.includes('onyx_hand') || coalition.factions.includes('moonfang_pack');
        
        return `
            <div class="coalition-block ${isExpelled ? 'expelled-coalition' : ''}">
                <h4 class="coalition-header" style="border-left-color: ${coalition.color};">
                    ${coalition.name} 
                    <span class="seat-count">(${reps.length} seats${isExpelled ? ' - EXPELLED' : ''})</span>
                </h4>
                <p class="coalition-stance">Stance: <strong>${coalition.stance}</strong> | Leader: ${coalition.leader}</p>
                <div class="seat-container">
                    ${reps.map(rep => {
                        const repVote = voteResults.votes?.find(v => v.repId === rep.id);
                        const voteClass = repVote ? `vote-${repVote.vote}` : '';
                        const expelledClass = isExpelled ? 'expelled' : '';
                        return `
                            <div class="parliament-seat seat-${rep.factionId} ${voteClass} ${expelledClass}" 
                                 data-rep-id="${rep.id}" 
                                 title="${rep.name}${isExpelled ? ' (Expelled)' : ''}">
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    // Vote status display
    const statusConfig = {
        'voting_today': { label: 'VOTING TODAY', class: 'status-urgent', icon: '🗳️' },
        'voting_tomorrow': { label: 'VOTING TOMORROW', class: 'status-warning', icon: '⏰' },
        'scheduled': { label: 'SCHEDULED', class: 'status-info', icon: '📅' },
        'passed': { label: 'PASSED', class: 'status-success', icon: '✅' },
        'failed': { label: 'FAILED', class: 'status-danger', icon: '❌' },
        'tabled': { label: 'TABLED', class: 'status-muted', icon: '📋' }
    };
    const statusInfo = statusConfig[voteStatus] || statusConfig['scheduled'];
    const daysUntil = getDaysUntil(currentVote.date);

    // Current vote display
    const voteDisplayHTML = `
        <div class="vote-display-card urgency-${currentVote.urgency || 'medium'}">
            <div class="vote-header">
                <span class="vote-icon">${currentVote.icon || '🏛️'}</span>
                <div class="vote-title-block">
                    <h3 class="section-title">${currentVote.title}</h3>
                    <p class="vote-proposer">Proposed by: <strong>${currentVote.proposer}</strong></p>
                </div>
                <div class="vote-status-block">
                    <span class="vote-status-badge ${statusInfo.class}">
                        ${statusInfo.icon} ${statusInfo.label}
                    </span>
                    <span class="vote-date">${formatDate(currentVote.date)}</span>
                    ${daysUntil > 0 ? `<span class="days-until">(in ${daysUntil} day${daysUntil > 1 ? 's' : ''})</span>` : ''}
                </div>
            </div>
            
            <p class="vote-description">${currentVote.description}</p>
            
            <div class="vote-arguments">
                <div class="argument argument-for">
                    <h5>✅ Argument FOR:</h5>
                    <p>${currentVote.arguments.for}</p>
                </div>
                <div class="argument argument-against">
                    <h5>❌ Argument AGAINST:</h5>
                    <p>${currentVote.arguments.against}</p>
                </div>
            </div>

            ${currentVote.relatedEvents ? `
                <div class="related-events">
                    <h5>📌 Related Events:</h5>
                    <ul>
                        ${currentVote.relatedEvents.map(e => `<li>${e}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <div class="vote-results ${voteResults.projected ? 'projected' : 'final'}">
                <h4>${voteResults.projected ? '📊 Projected Outcome' : '📊 Final Tally'}</h4>
                ${voteResults.projected ? '<p class="projection-warning">⚠️ Projections based on current faction alignments. Actual votes may vary.</p>' : ''}
                <div class="vote-tally-bar">
                    <div class="tally-segment vote-yes" 
                         style="width: ${(voteResults.yes / totalActiveVotes) * 100}%" 
                         title="${voteResults.yes} Yes votes">
                        <span class="tally-label">YES</span>
                        <span class="tally-count">${voteResults.yes}</span>
                    </div>
                    <div class="tally-segment vote-no" 
                         style="width: ${(voteResults.no / totalActiveVotes) * 100}%" 
                         title="${voteResults.no} No votes">
                        <span class="tally-label">NO</span>
                        <span class="tally-count">${voteResults.no}</span>
                    </div>
                    <div class="tally-segment vote-abstain" 
                         style="width: ${(voteResults.abstain / totalActiveVotes) * 100}%" 
                         title="${voteResults.abstain} Abstain votes">
                        <span class="tally-label">ABSTAIN</span>
                        <span class="tally-count">${voteResults.abstain}</span>
                    </div>
                </div>
                <p class="expelled-note">Note: ${expelledCount} seats vacant (supernatural representatives expelled)</p>
            </div>
        </div>
    `;

    // Legislative calendar
    const calendarHTML = `
        <div class="legislative-calendar">
            <h4>📅 Legislative Calendar</h4>
            <div class="calendar-items">
                ${VOTE_HISTORY.slice(-2).map(vote => `
                    <div class="calendar-item historical">
                        <span class="cal-date">${formatDate(vote.date)}</span>
                        <span class="cal-title">${vote.title}</span>
                        <span class="cal-status status-${vote.status}">${vote.status.toUpperCase()}</span>
                    </div>
                `).join('')}
                <div class="calendar-divider">— Today: ${formatDate(CURRENT_GAME_DATE)} —</div>
                ${UPCOMING_VOTES.map(vote => {
                    const status = getVoteStatus(vote);
                    const days = getDaysUntil(vote.date);
                    return `
                        <div class="calendar-item upcoming ${status === 'voting_today' || status === 'voting_tomorrow' ? 'imminent' : ''}">
                            <span class="cal-date">${formatDate(vote.date)}</span>
                            <span class="cal-title">${vote.title}</span>
                            <span class="cal-days">${days === 0 ? 'TODAY' : days === 1 ? 'TOMORROW' : `+${days} days`}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    // Speaker vote
    const speakerVote = voteResults.votes?.find(v => v.repId === speakerRep?.id)?.vote || 'abstain';

    return `
        <div class="diet-header">
            <h2>${data.name}</h2>
            <span class="diet-status status-${data.status.toLowerCase().replace(' ', '-')}">${data.status}</span>
            <span class="session-info">Session ${data.sessionStartDate ? data.currentSession : '??'}</span>
        </div>
        
        <p class="system-description">${data.description}</p>
        
        <div class="system-content">
            ${voteDisplayHTML}
            
            ${calendarHTML}
            
            <h3 class="section-title" style="margin-top: 32px;">Diet Seating Chart</h3>
            <p class="seating-subtitle">Click on a seat to view representative details and voting prediction.</p>
            
            <div class="parliament-container">
                <div class="speaker-section">
                    <h4>Speaker of the Diet</h4>
                    <div class="speaker-seat seat-${speakerRep?.factionId || 'unaligned'} vote-${speakerVote}" 
                         data-rep-id="${speakerRep?.id}" 
                         title="${speakerRep?.name || 'Unknown'}">
                    </div>
                    <p class="speaker-name">${speakerRep?.name || 'Unknown'}</p>
                </div>
                <div class="coalition-grid">${coalitionsHTML}</div>
            </div>
            
            <div class="legend-section">
                <h4>Vote Legend</h4>
                <div class="vote-legend">
                    <span class="legend-item"><span class="legend-dot vote-yes"></span> Voting YES</span>
                    <span class="legend-item"><span class="legend-dot vote-no"></span> Voting NO</span>
                    <span class="legend-item"><span class="legend-dot vote-abstain"></span> Abstaining</span>
                    <span class="legend-item"><span class="legend-dot expelled"></span> Expelled</span>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// EVENT LISTENERS
// ============================================

export function initHolyMidlandsDietListeners() {
    const tooltip = document.getElementById('parliament-tooltip');
    const dietContainer = document.querySelector('.unique-system-container');
    const detailPanelClose = document.getElementById('detail-panel-close');

    if (!dietContainer) return;

    // Tooltip on hover
    dietContainer.addEventListener('mouseover', (e) => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat && tooltip) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            const currentVote = getCurrentVote();
            const voteResults = simulateVote(currentVote);
            const voteData = voteResults.votes?.find(v => v.repId === repId);
            
            if (repData) {
                const isExpelled = repData.factionId === 'onyx_hand' || repData.factionId === 'moonfang_pack';
                tooltip.innerHTML = `
                    <h4>${repData.name}</h4>
                    <p><strong>Province:</strong> ${repData.province}</p>
                    <p><strong>Personality:</strong> ${repData.personality.type}</p>
                    ${isExpelled ? 
                        '<p class="vote-expelled"><strong>STATUS: EXPELLED</strong></p>' :
                        voteData ? `<p class="vote-${voteData.vote}"><strong>Predicted: ${voteData.vote.toUpperCase()}</strong></p><p class="tooltip-reason">${voteData.reason}</p>` : ''
                    }
                `;
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        }
    });

    dietContainer.addEventListener('mousemove', (e) => {
        if (tooltip && tooltip.style.visibility === 'visible') {
            const containerRect = dietContainer.getBoundingClientRect();
            tooltip.style.left = `${e.clientX - containerRect.left + 15}px`;
            tooltip.style.top = `${e.clientY - containerRect.top + 15}px`;
        }
    });

    dietContainer.addEventListener('mouseout', (e) => {
        if (e.target.closest('.parliament-seat, .speaker-seat') && tooltip) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    });

    // Click for detail panel
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