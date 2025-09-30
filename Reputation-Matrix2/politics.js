import { LORE_DATA, CHARACTER_RELATIONS } from './lore.js';
import { init as initBoP } from './balance-of-power.js';

const MUSHROOM_KINGDOM_DATA = {
    name: "Mushroom Kingdom",
    status: "CIVIL WAR",
    description: "The Mushroom Kingdom has been embroiled in a complex civil war for over a century, a conflict that began shortly after the death of Princess Peach. The kingdom has now shattered into a five-way conflict. The formal Regency government struggles against the zealous Peach Loyalists who lay siege to Peach's Castle. However, the castle has been seized by the maniacal Fawful, creating a chaotic battlefront. Elsewhere, Bowser's leaderless Koopa Troop remnants fight for survival, and the Toad Gang's criminal underworld exploits the power vacuum for profit.",
    factions: [
        { name: "Mushroom Regency", description: "The official, but weakened, government body led by Chancellor Toadsworth. Their goal is to restore stability and order.", factionId: "mushroom_regency" },
        { name: "Peach Loyalists", description: "A fanatical military splinter group led by Captain Toadette. They seek to find the 'true' heir and punish Bowser for his perceived crimes.", factionId: "peach_loyalists" },
        { name: "Koopa Remnants", description: "Scattered but dangerous elements of Bowser's army, now operating as warlords. Led by Kamek, they seek to regroup and survive.", factionId: "koopa_troop" },
        { name: "Toad Gang Underworld", description: "The criminal syndicates of the kingdom, led by the Toad Gang's Skull-Cap Murphy. They profit from the chaos through extortion and black markets.", factionId: "toad_gang" },
        { name: "Fawful's Occupation", description: "The erratic villain Fawful and his army of mechanical minions have seized Peach's Castle, defending it from all comers with bizarre technology and rage.", factionId: "fawfuls_furious_freaks" },
        { name: "The Liberated Toads", description: "A new, independent community of former slaves led by the hero Dan. They are forging their own path, wary of outside rulers, and are a key neutral party in the conflict.", factionId: "liberated_toads" },
    ]
};

const MIDLANDS_DIET_DATA = {
    name: "Holy Midlands Diet",
    status: "Fractured",
    description: "The Midlands are governed by a parliamentary body where provincial representatives vote on state matters. The Diet is currently highly fractured. The traditional Imperial Concordat faces opposition from multiple, hostile supernatural blocs: the manipulative Sanguine Covenant of vampires, the territorial Territorial Pact of werewolves, and the isolationist Arcane Congress of mages. With these factions refusing to cooperate, the pragmatic Heartland Alliance holds the decisive swing vote in an increasingly unstable political landscape.",
    provinces: [
        { name: 'Capital Province', votes: 15, bias: 'strong human', loyalty: 70, faction: 'regal_empire' },
        { name: 'Yal Belanor', votes: 4, bias: 'human', loyalty: 60, faction: 'regal_empire' },
        { name: 'Vemilia', votes: 3, bias: 'lean human', loyalty: 55, faction: 'regal_empire' },
        { name: 'Ironwood & Isle of Burbary', votes: 4, bias: 'lean human', loyalty: 50, faction: 'regal_empire' },
        { name: 'Lockerwood', votes: 3, bias: 'human', loyalty: 60, faction: 'unaligned' },
        { name: 'Yal Central', votes: 3, bias: 'human', loyalty: 65, faction: 'regal_empire' },
        { name: 'Dark Shores', votes: 2, bias: 'mixed', loyalty: 45, faction: 'unaligned' },
        { name: 'Autumnwood', votes: 5, bias: 'vampire', loyalty: 40, faction: 'onyx_hand' },
        { name: 'Dry County', votes: 1, bias: 'mixed', loyalty: 50, faction: 'cosmic_jesters' },
        { name: 'Dulgra', votes: 3, bias: 'werewolf', loyalty: 45, faction: 'moonfang_pack' },
        { name: 'Dark Valley', votes: 3, bias: 'strong werewolf', loyalty: 35, faction: 'moonfang_pack' },
        { name: 'Gehnsha Glade', votes: 3, bias: 'lean vampire', loyalty: 50, faction: 'onyx_hand' },
        { name: 'Jungle de Thorn', votes: 2, bias: 'regal', loyalty: 60, faction: 'regal_empire' },
        { name: 'Yale Shores', votes: 2, bias: 'magic', loyalty: 55, faction: 'mages_guild' }
    ],
    coalitions: {
        imperial_concordat: {
            name: 'The Imperial Concordat',
            color: 'var(--faction-regal-empire)',
            factions: ['regal_empire', 'iron_legion'],
            description: "A coalition representing the old guard of the Regal Empire, championing order, tradition, and human supremacy. They seek to expand Imperial borders, increase military funding, and restrict the rights of supernatural beings."
        },
        sanguine_covenant: {
            name: 'The Sanguine Covenant',
            color: 'var(--faction-onyx-hand)',
            factions: ['onyx_hand'],
            description: "The political arm of the ancient vampire covens. They operate through shadow, blackmail, and centuries of accumulated influence, voting to legalize their shadow economy and subtly expand their power, viewing mortal politics as a trivial game to be played for their own amusement and gain."
        },
        territorial_pact: {
            name: 'The Territorial Pact',
            color: 'var(--faction-moonfang-pack)',
            factions: ['moonfang_pack'],
            description: "Representing the fierce werewolf clans, this bloc is concerned with one thing: sovereignty. They vote to protect their ancestral hunting grounds, oppose any Imperial or vampiric encroachment, and uphold the right to govern themselves by their own laws of strength and honor."
        },
        arcane_congress: {
            name: 'The Arcane Congress',
            color: 'var(--faction-mages-guild)',
            factions: ['mages_guild'],
            description: "The Mages' Guild acts as its own independent and influential voting bloc. They are isolationist and focused on magical regulation, voting to protect Guild autonomy, fund arcane research, and contain any magical threats—regardless of who wields them."
        },
        heartland_alliance: {
            name: 'The Heartland Alliance',
            color: 'var(--faction-unaligned)',
            factions: ['unaligned'],
            description: "This pragmatic bloc represents the interests of the common folk from unaligned agricultural and trade provinces. Their votes are often the deciding factor in the Diet, traded not for coin, but for policies that ensure prosperity and provincial autonomy."
        },
        chaos_caucus: {
            name: 'The Chaos Caucus',
            color: 'var(--faction-cosmic-jesters)',
            factions: ['cosmic_jesters', 'freelancer_underworld'],
            description: "Less a political party and more a force of pure disruption. Led by the unpredictable Servants of the Cosmic Jester, their goal is not to gain power, but to undermine the very concept of organized government through absurdity and randomness."
        }
    }
};

// --- Panel Logic ---
const appContainer = document.getElementById('app');
const detailPanel = document.getElementById('detail-panel');
const detailPanelContent = document.getElementById('detail-panel-content');
const detailPanelClose = document.getElementById('detail-panel-close');
let selectedSeat = null;

function hideDetailPanel() {
    if (detailPanel) detailPanel.classList.remove('visible');
    if (appContainer) appContainer.classList.remove('panel-visible');
    if (selectedSeat) {
        selectedSeat.classList.remove('selected');
        selectedSeat = null;
    }
}

function showDetailPanel(repData, seatElement) {
    if (!detailPanel || !detailPanelContent) return;

    if (selectedSeat) {
        selectedSeat.classList.remove('selected');
    }
    selectedSeat = seatElement;
    selectedSeat.classList.add('selected');

    const faction = LORE_DATA.factions[repData.factionId] || { name: 'Unaligned', logo: '' };
    const coalition = Object.values(MIDLANDS_DIET_DATA.coalitions).find(c => c.factions.includes(repData.factionId));

    let opinionsHTML = '';
    if (repData.isNamed) {
        const charKey = Object.keys(LORE_DATA.characters).find(key => LORE_DATA.characters[key].name === repData.name);
        let opinionsByHTML = '';
        if (CHARACTER_RELATIONS[charKey]) {
            opinionsByHTML = Object.entries(CHARACTER_RELATIONS[charKey]).map(([targetKey, relation]) => {
                const targetChar = LORE_DATA.characters[targetKey];
                if (!targetChar) return '';
                const opinionText = relation.text.split(':').slice(1).join(':').trim();
                return `<div class="opinion-quote"><strong>On ${targetChar.name}:</strong><p>"${opinionText}"</p></div>`;
            }).join('');
        }
        if (opinionsByHTML) {
            opinionsHTML = `<div class="panel-section"><h4>Dossier: Personal Opinions</h4>${opinionsByHTML}</div>`;
        }
    }

    detailPanelContent.innerHTML = `
        <div class="panel-header">
            ${faction.logo ? `<img src="${faction.logo}" alt="${faction.name} Logo">` : ''}
            <h3>${repData.name}</h3>
        </div>
        <div class="panel-section">
            <p><strong>Province:</strong> ${repData.province}</p>
            <p><strong>Affiliation:</strong> ${faction.name}</p>
            <p><strong>Coalition:</strong> ${coalition ? coalition.name : 'Independent'}</p>
            <p><strong>Personality:</strong> <span class="personality">${repData.personality}</span></p>
            <p><strong>Political Power:</strong> ${repData.power}</p>
        </div>
        ${opinionsHTML}
    `;

    detailPanel.classList.add('visible');
    appContainer.classList.add('panel-visible');
}

// --- Procedural Generation ---
const NAME_PARTS = {
    first: ['Alden', 'Brant', 'Corbin', 'Darian', 'Elias', 'Finnian', 'Gareth', 'Hadrian', 'Isolde', 'Joric', 'Kael', 'Liana', 'Merek', 'Nerys', 'Orin', 'Perrin', 'Quintus', 'Rowan', 'Seraphina', 'Tavian', 'Uriel', 'Valerius', 'Wren', 'Xanthe', 'Ysolde', 'Zarek'],
    last: ['Stonehand', 'Blackwood', 'Ironford', 'Silverstream', 'Goldcrest', 'Hawkwind', 'Oakhaven', 'Brightwater', 'Stormcaller', 'Ashworth', 'Vale', 'Thorne', 'Westbrook', 'Northgate', 'Rivers', 'Marsh', 'Fell', 'Crestwood', 'Greycastle', 'Sunstrider']
};
const PERSONALITIES = ['Stoic Traditionalist', 'Fiery Firebrand', 'Cunning Diplomat', 'Pragmatic Bureaucrat', 'Ambitious Schemer', 'Honorable Zealot', 'Jaded Cynic'];

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
    
    // Add named characters first
    const namedCharacters = Object.values(LORE_DATA.characters).filter(c => c.province && c.factionId);
    namedCharacters.forEach(char => {
        existingNames.add(char.name);
        reps.push({
            id: `rep-${idCounter++}`,
            name: char.name,
            province: char.province,
            factionId: char.factionId,
            isNamed: true,
            personality: char.role.includes('Speaker') ? 'Authoritative & Respected' : PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)],
            power: 80 + Math.floor(Math.random() * 21) // Named chars are powerful
        });
    });

    const filledSeatsByProvince = reps.reduce((acc, rep) => {
        acc[rep.province] = (acc[rep.province] || 0) + 1;
        return acc;
    }, {});

    // Fill remaining seats with generic delegates
    MIDLANDS_DIET_DATA.provinces.forEach(province => {
        const totalSeats = province.votes;
        const filledSeats = filledSeatsByProvince[province.name] || 0;
        
        for (let i = filledSeats; i < totalSeats; i++) {
            let faction = province.faction;
            reps.push({
                id: `rep-${idCounter++}`,
                name: generateUniqueName(existingNames),
                province: province.name,
                factionId: faction,
                isNamed: false,
                personality: PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)],
                power: 20 + Math.floor(Math.random() * 51) // Generated are less powerful
            });
        }
    });

    return reps;
}

const representatives = generateRepresentatives();

function renderMushroomKingdom() {
    const data = MUSHROOM_KINGDOM_DATA;
    return `
        <div class="politics-section">
            <div class="politics-section-header">
                <h3>${data.name}</h3>
                <span class="status status-civil-war">${data.status}</span>
            </div>
            <p class="section-description">${data.description}</p>
            <div class="mk-factions-grid">
                ${data.factions.map(faction => `
                    <div class="mk-faction-card">
                        <h4>
                            <img src="${LORE_DATA.factions[faction.factionId]?.logo || ''}" alt="${faction.name} logo">
                            ${faction.name}
                        </h4>
                        <p>${faction.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderMidlandsDiet() {
    const data = MIDLANDS_DIET_DATA;
    const totalVotes = representatives.length;

    // Separate Speaker
    const speaker = representatives.find(r => r.name === "Lady Elara Veridia");
    const otherReps = representatives.filter(r => r.name !== "Lady Elara Veridia");

    const groupedByCoalition = otherReps.reduce((acc, rep) => {
        const coalitionKey = Object.keys(data.coalitions).find(key => data.coalitions[key].factions.includes(rep.factionId));
        const key = coalitionKey || 'independent';
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(rep);
        return acc;
    }, {});

    const powerBalanceData = Object.entries(data.coalitions).map(([key, coalition]) => {
        const reps = otherReps.filter(r => coalition.factions.includes(r.factionId));
        return { name: coalition.name, count: reps.length, color: coalition.color, key: key };
    });
    
    // Power Balance Chart
    const powerBalanceHTML = `
        <div id="diet-power-balance">
            <h4>Diet Power Balance (${totalVotes} Seats)</h4>
            <div class="power-balance-chart">
                ${powerBalanceData.map(c => `
                    <div class="power-balance-bar coalition-${c.key}" title="${c.name}: ${c.count} seats" style="width: ${(c.count / totalVotes) * 100}%; background-color: ${c.color};">
                        <span>${c.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const coalitionsHTML = Object.entries(data.coalitions).map(([key, coalition]) => {
        const reps = groupedByCoalition[key] || [];
        if (reps.length === 0) return '';
        return `
            <div class="coalition-block">
                <h4 class="coalition-header" style="border-left: 4px solid ${coalition.color}; padding-left: 8px;">${coalition.name} (${reps.length} seats)</h4>
                ${coalition.description ? `<p class="coalition-description">${coalition.description}</p>` : ''}
                <div class="seat-container">
                    ${reps.map(rep => `<div class="parliament-seat seat-${rep.factionId}" data-rep-id="${rep.id}"></div>`).join('')}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="politics-section" id="midlands-diet-section">
            <div class="politics-section-header">
                <h3>${data.name}</h3>
                <span class="status status-fractured">${data.status}</span>
            </div>
            <p class="section-description">${data.description}</p>
            ${powerBalanceHTML}
            <div class="parliament-container">
                 <div class="speaker-section">
                    <h4>Speaker of the Diet</h4>
                    <div class="speaker-seat seat-regal_empire" data-rep-id="${speaker.id}"></div>
                 </div>
                <div class="coalition-grid">
                    ${coalitionsHTML}
                </div>
            </div>
        </div>
    `;
}

function setupEventListeners() {
    const tooltip = document.getElementById('parliament-tooltip');
    if(!tooltip) return;
    
    const parliamentContainer = document.getElementById('midlands-diet-section'); 
    if (!parliamentContainer) return;

    parliamentContainer.addEventListener('mouseover', (e) => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            if (repData) {
                tooltip.innerHTML = `
                    <h4>${repData.name}</h4>
                    <p><strong>Province:</strong> ${repData.province}</p>
                    <p class="personality">${repData.personality}</p>
                    <p><strong>Power:</strong> ${repData.power}</p>
                `;
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        }
    });

    parliamentContainer.addEventListener('mousemove', (e) => {
        if (tooltip.style.visibility === 'visible') {
            tooltip.style.left = `${e.clientX + 15}px`;
            tooltip.style.top = `${e.clientY + 15}px`;
        }
    });

    parliamentContainer.addEventListener('mouseout', (e) => {
        if (e.target.closest('.parliament-seat, .speaker-seat')) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    });

    parliamentContainer.addEventListener('click', e => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            if (repData) {
                showDetailPanel(repData, seat);
            }
        }
    });

    if (detailPanelClose) {
        detailPanelClose.addEventListener('click', hideDetailPanel);
    }
}

function init() {
    const container = document.getElementById('politics-container');
    if (!container) return;

    container.innerHTML = `
        ${renderMushroomKingdom()}
        ${renderMidlandsDiet()}
    `;
    
    setupEventListeners();
    initBoP(); // Initialize the Balance of Power module
}

init();