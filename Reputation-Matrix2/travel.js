
import { LEGAL_DATA } from './legal_data.js';
import { MAP_DATA } from './map-data.js';
import { LORE_DATA } from './lore.js';

const container = document.getElementById('travel-cards-grid');
const searchInput = document.getElementById('travel-search');
const filterButtons = document.querySelectorAll('.pill-btn');
let activeFilter = 'all';

const TRAVEL_GUIDES = [
    {
        id: 'guide_regal_empire',
        name: 'The Regal Empire',
        region: 'The Midlands',
        status: 'restricted',
        entry_reqs: "Imperial Passport required. Weapons must be peace-bonded. Magic users must register with the Mages' Guild upon entry.",
        customs: [
            "Bow to Imperial officers and nobles.",
            "Observe the curfew in major cities.",
            "Do not speak ill of the Emperor."
        ],
        prohibited: ["Unsanctioned magical artifacts", "Literature critical of the Empire", "Narcotics"],
        traditions_key: 'midlands_full'
    },
    {
        id: 'guide_mushroom_kingdom',
        name: 'Mushroom Kingdom',
        region: 'Mushroom Kingdom Regions',
        status: 'hostile',
        entry_reqs: "Borders are contested. Regency checkpoints require identification. Loyalist zones are closed to non-combatants.",
        customs: [
            "Share food with those in need (Hospitality).",
            "Do not mention the 'accident' involving the Princess.",
            "Avoid eye contact with Toad Gang enforcers."
        ],
        prohibited: ["Weapons (in Regency zones)", "Koopa Troop insignia", "Fawful merchandise"],
        traditions_key: 'mushroom_kingdom_full'
    },
    {
        id: 'guide_iron_legion',
        name: 'Iron Legion Territories',
        region: 'The Midlands',
        status: 'restricted',
        entry_reqs: "Military clearance or merchant license required. All travelers are subject to random search and seizure.",
        customs: [
            "Stand at attention when addressed by an officer.",
            "Efficiency is valued; do not loiter.",
            "Report any suspicious activity immediately."
        ],
        prohibited: ["Chaos symbols", "Unauthorized maps", "Elven craftsmanship"],
        traditions_key: 'midlands_full' // Fallback
    },
    {
        id: 'guide_pokemon_regions',
        name: 'Pokémon League Regions',
        region: 'Pokémon Regions',
        status: 'safe',
        entry_reqs: "Trainer ID or Tourist Visa. Pokémon must be kept in balls within city limits.",
        customs: [
            "Accept eye-contact challenges for battles.",
            "Treat Pokémon with respect.",
            "Always heal your team at a Center."
        ],
        prohibited: ["Shadow Pokémon", "Team Rocket/Plasma/etc. paraphernalia", "Repels in city limits"],
        traditions_key: 'pokemon_regions_full'
    },
    {
        id: 'guide_internet',
        name: 'The Internet',
        region: 'Other Dimensions',
        status: 'restricted',
        entry_reqs: "Digital Avatar and valid IP address. VPN recommended for the Deep Web.",
        customs: [
            "Do not feed the trolls.",
            "Check your sources.",
            "Anonymity is respected; do not doxx."
        ],
        prohibited: ["Malware", "Copyrighted material (strictly enforced in Federation zones)", "Spam"],
        traditions_key: 'internet_full'
    },
     {
        id: 'guide_kivotos',
        name: 'Kivotos Academy City',
        region: 'Kivotos',
        status: 'hostile',
        entry_reqs: "Student ID or Visitor Pass issued by the GSU. Be prepared for random gunfire.",
        customs: [
            "Carrying a firearm is considered polite.",
            "Respect school territories.",
            "Don't interrupt a club meeting."
        ],
        prohibited: ["Explosives over 50kg (without permit)", "Insulting the Peroro mascot"],
        traditions_key: 'kivotos_full'
    },
    {
        id: 'guide_middle_earth',
        name: 'Middle-earth (Free Peoples)',
        region: 'Middle-earth',
        status: 'restricted',
        entry_reqs: "Varies by realm. Gondor requires proof of intent. The Shire is open but wary.",
        customs: [
            "Share pipe-weed and song.",
            "Respect the King (in Gondor/Rohan).",
            "Do not ask Elves their age."
        ],
        prohibited: ["Orcish weapons", "Black speech", "The One Ring"],
        traditions_key: 'middle_earth_full'
    },
     {
        id: 'guide_mordor',
        name: 'The Land of Mordor',
        region: 'Middle-earth',
        status: 'hostile',
        entry_reqs: "None. One does not simply walk in.",
        customs: [
            "Obey the strongest.",
            "Betray your friends before they betray you.",
            "Worship the Eye."
        ],
        prohibited: ["Light", "Elven bread", "Hope"],
        traditions_key: 'middle_earth_full' // Fallback
    },
    {
        id: 'guide_wario_land',
        name: 'Wario Land',
        region: 'Diamond City',
        status: 'restricted',
        entry_reqs: "Entry fee (Gold). Lots of it.",
        customs: [
            "Greed is good.",
            "Laugh loudly.",
            "Eat garlic."
        ],
        prohibited: ["Charity", "Diet food", "Silence"],
        traditions_key: 'midlands_full' // Fallback
    }
];

function getTraditions(key) {
    if (!key || !LEGAL_DATA.regional_traditions[key]) return [];
    return LEGAL_DATA.regional_traditions[key].map(tradId => {
        // Find tradition in categories
        for (const cat in LEGAL_DATA.traditions) {
            const found = LEGAL_DATA.traditions[cat].find(t => t.id === tradId);
            if (found) return found;
        }
        return null;
    }).filter(t => t);
}

function renderCards() {
    if (!container) return;
    container.innerHTML = '';

    const searchTerm = searchInput.value.toLowerCase();

    TRAVEL_GUIDES.forEach(guide => {
        if (activeFilter !== 'all' && guide.status !== activeFilter) return;
        if (searchTerm && !guide.name.toLowerCase().includes(searchTerm) && !guide.region.toLowerCase().includes(searchTerm)) return;

        const traditions = getTraditions(guide.traditions_key);
        const traditionsHTML = traditions.length > 0 ? 
            `<ul>${traditions.map(t => `<li title="${t.description}"><strong>${t.icon} ${t.name}</strong></li>`).join('')}</ul>` : 
            '<p>No specific regional traditions documented.</p>';

        const customsHTML = guide.customs.map(c => `<li>${c}</li>`).join('');
        const prohibitedHTML = guide.prohibited.map(p => `<li>${p}</li>`).join('');

        const card = document.createElement('div');
        card.className = 'travel-card';
        card.innerHTML = `
            <div class="travel-header">
                <div class="travel-title">
                    <h3>${guide.name}</h3>
                    <span class="travel-region">${guide.region}</span>
                </div>
                <span class="travel-status status-${guide.status}">${guide.status}</span>
            </div>
            <div class="travel-section">
                <h5>Entry Requirements</h5>
                <p>${guide.entry_reqs}</p>
            </div>
            <div class="travel-section">
                <h5>Local Customs & Etiquette</h5>
                <ul class="customs-list">${customsHTML}</ul>
            </div>
            <div class="travel-section">
                <h5>Major Legal Traditions</h5>
                ${traditionsHTML}
            </div>
            <div class="travel-section">
                <h5 style="color:var(--negative-color);">Strictly Prohibited</h5>
                <ul class="prohibited-list">${prohibitedHTML}</ul>
            </div>
        `;
        container.appendChild(card);
    });
}

function init() {
    if (!container) return;

    renderCards();

    searchInput.addEventListener('input', renderCards);

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderCards();
        });
    });
}

init();
