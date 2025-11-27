import { state } from './state.js'; // Needed for seeded random if we use state

export const CURRENT_GAME_DATE = {
    year: 1040,
    monthIndex: 6, // 0-indexed for Highsun (ordinal 7)
    day: 20
};

export const CURRENT_GAME_TIME = {
    hour: 22,
    minute: 0
};

export const PAGE_UPDATES = {
    'maps.html': 20,
    'battlefield.html': 20,
    'liberated-toads-system.html': 20,
    'assembly.html': 20,
    'research.html': 20,
    'plagues.html': 20 // New page
};

export const MOON_PHASES = [
    { name: "The Hole (New)", lore: "The moon turns its empty center to the world. Darkness reigns.", effect: "Stealth abilities maxed. Magic regeneration low.", icon: "⚫" },
    { name: "Inner Rim (Waxing)", lore: "The inner curve catches the sun. Instincts sharpen.", effect: "Senses sharpen. Pack coordination increases.", icon: "🌒" },
    { name: "The Glazed Face (Full)", lore: "The full face of the Torus shines. Madness takes hold.", effect: "Feral power absolute. Berserker rage. Magic surge.", icon: "🍩" },
    { name: "Outer Crust (Waning)", lore: "The light recedes to the edges. Cold focus.", effect: "Calculated aggression. Defensive bonuses.", icon: "🌘" },
    { name: "The Bite (Darkening)", lore: "A shadow falls across the rim. Spirits are close.", effect: "Spirit communication. Banishment rituals.", icon: "🌑" }
];

export const CALENDAR_DATA = {
  "name": "Regal Empire Standard Calendar",
  "description": "The official calendar of the Regal Empire...",
  "version": "1.3.0",
  "id": "regal-empire-standard-1040bf",
  "months": {
    "values": [
      { "name": "Firstlight", "abbreviation": "Fst", "ordinal": 1, "days": 30 },
      { "name": "Chillwind", "abbreviation": "Chl", "ordinal": 2, "days": 30 },
      { "name": "Veridia", "abbreviation": "Ver", "ordinal": 3, "days": 30 },
      { "name": "Bloom", "abbreviation": "Blo", "ordinal": 4, "days": 30 },
      { "name": "Floria", "abbreviation": "Flo", "ordinal": 5, "days": 30 },
      { "name": "Efferd", "abbreviation": "Eff", "ordinal": 6, "days": 30 },
      { "name": "Highsun", "abbreviation": "Hsn", "ordinal": 7, "days": 30 },
      { "name": "Harvestide", "abbreviation": "Hrv", "ordinal": 8, "days": 30 },
      { "name": "Aethel", "abbreviation": "Aet", "ordinal": 9, "days": 30 },
      { "name": "Darkmoon", "abbreviation": "Drk", "ordinal": 10, "days": 30 },
      { "name": "Frostfall", "abbreviation": "Frs", "ordinal": 11, "days": 30 },
      { "name": "Deepwinter", "abbreviation": "Dpw", "ordinal": 12, "days": 35 }
    ]
  },
  "days": {
    "values": [
      { "name": "Soldas", "abbreviation": "Sol", "ordinal": 1 },
      { "name": "Lunadas", "abbreviation": "Lun", "ordinal": 2 },
      { "name": "Terras", "abbreviation": "Ter", "ordinal": 3 },
      { "name": "Mercurias", "abbreviation": "Mer", "ordinal": 4 },
      { "name": "Jovias", "abbreviation": "Jov", "ordinal": 5 },
      { "name": "Venerias", "abbreviation": "Ven", "ordinal": 6, "isRestDay": true },
      { "name": "Saturias", "abbreviation": "Sat", "ordinal": 7, "isRestDay": true }
    ]
  },
  "seasons": {
    "values": [
      { "name": "Verdant Spring", "abbreviation": "Spr", "monthStart": 3, "monthEnd": 5, "color": "#90EE90" },
      { "name": "Golden Summer", "abbreviation": "Sum", "monthStart": 6, "monthEnd": 8, "color": "#FFD700" },
      { "name": "Crimson Fall", "abbreviation": "Fal", "monthStart": 9, "monthEnd": 11, "color": "#FFA07A" },
      { "name": "Hoarfrost Winter", "abbreviation": "Win", "monthStart": 12, "monthEnd": 2, "color": "#ADD8E6" }
    ]
  },
  "moons": {
    "values": [
      { "name": "Torrus (The Doughnut Moon)", "cycleLength": 28, "phaseNames": MOON_PHASES.map(p => p.name), "offset": 0, "color": "#E0E0E0" }
    ]
  },
  "birthdays": [
    { name: "Archie Miser", month: 1, day: 1 },
    { name: "Markop Judi", month: 7, day: 15 },
    { name: "Humpik", month: 2, day: 3 },
    { name: "Bowser", month: 12, day: 30 },
    { name: "Remi (FNG)", month: 8, day: 12 }
  ],
  "holidays": {
    "values": [
      { "name": "Empire's Founding Day", "month": 1, "day": 1, "description": "Commemorates the establishment of the Regal Empire.", "traditions": "Parades, Oaths." },
      { "name": "First Hum Imperial Recognition", "month": 1, "day": 2, "description": "Cosmic significance of the First Hum.", "traditions": "Contemplation." },
      { "name": "Zootopian Founders' Day", "month": 1, "day": 25, "description": "Zootopia celebrates equality.", "traditions": "Community Service." },
      { "name": "Midlands' King's Coronation", "month": 2, "day": 5, "description": "King Alaric's ascent.", "traditions": "Feasts, Warding." },
      { "name": "First Bloom Festival", "month": 3, "day": 1, "description": "First signs of spring.", "traditions": "Planting." },
      { "name": "The Feast of the Silver Flame", "month": 3, "day": 15, "description": "Religious holiday.", "traditions": "Lighting bonfires, fasting." },
      { "name": "Aurean Glitch Day", "month": 4, "day": 4, "description": "Celebrated by rebel hackers.", "traditions": "Digital mischief." },
      { "name": "Victory at Cerulean Pass", "month": 5, "day": 5, "description": "Decisive ancient battle.", "traditions": "Bonfires." },
      { "name": "The Great Gear Grind", "month": 5, "day": 20, "description": "Machine Orthodoxy celebration.", "traditions": "Oiling machinery." },
      { "name": "Efferd's Sun Zenith", "month": 6, "day": 21, "description": "Summer Solstice.", "traditions": "Feasts, Bonfires." },
      { "name": "Wario's Remembrance", "month": 6, "day": 25, "description": "Anniversary of Wario's supposed death.", "traditions": "Hiding valuables." },
      { "name": "Admin Zero's Protocol Day", "month": 7, "day": 7, "description": "System diagnostics.", "traditions": "Data-cleaning." },
      { "name": "Celestia's Iron Hoof Day", "month": 7, "day": 15, "description": "Celebration of Celestia's rule.", "traditions": "Military Parades." },
      { "name": "Festival of the Fallen", "month": 7, "day": 20, "description": "A Rakasha tradition celebrating life.", "traditions": "Bonfires, bone chimes." },
      { "name": "Starfall Eve", "month": 8, "day": 12, "description": "Star Spirits are closest.", "traditions": "Wishing on stars." },
      { "name": "Peach's Starfall Lament", "month": 9, "day": 20, "description": "Mourning for Princess Peach.", "traditions": "Lanterns." },
      { "name": "Blood Moon Hunt", "month": 10, "day": 13, "description": "Folkloric monster hunting day.", "traditions": "Lock-ins." },
      { "name": "Night of the Howl", "month": 10, "day": 28, "description": "Sacred night for Moonfang Pack.", "traditions": "Howling, feasts." },
      { "name": "Warding Night", "month": 10, "day": 30, "description": "Reinforcing wards.", "traditions": "Salt lines." },
      { "name": "Remembrance of the First Guard", "month": 11, "day": 11, "description": "Honoring fallen soldiers.", "traditions": "Memorial visits." },
      { "name": "Winter's Veil Ball", "month": 12, "day": 20, "description": "Grand ball in the Capital.", "traditions": "Dancing." },
      { "name": "The Day of Silence", "month": 12, "day": 21, "description": "Solemn day for Cosmic Void.", "traditions": "Total silence." },
      { "name": "Doughnut Hole Festival", "month": 12, "day": 30, "description": "Celebrating the world's topology.", "traditions": "Doughnut cakes." }
    ]
  }
};

export const MAGICAL_WEATHER_EVENTS = [
    { name: "Chrono-Mists", icon: "⏳" }, { name: "Sunpetal Showers", icon: "🌸" }, { name: "Whispering Winds", icon: "🍃" },
    { name: "Gravity Flux", icon: "🎈" }, { name: "Aetheric Fog", icon: "🔮" }, { name: "Polychrome Rain", icon: "🌈" },
    { name: "Sorrow Storm", icon: "💧" }, { name: "Static Discharge", icon: "⚡️" }
];

export function getDynamicTimestamp(postDate) {
    const minutesPerHour = 60;
    const minutesPerDay = 24 * 60;
    const minutesPerMonth = 30 * minutesPerDay;
    const minutesPerYear = 365 * minutesPerDay;
    const currentTotalMinutes = 
        (CURRENT_GAME_DATE.year * minutesPerYear) +
        (CURRENT_GAME_DATE.monthIndex * minutesPerMonth) +
        (CURRENT_GAME_DATE.day * minutesPerDay) +
        (CURRENT_GAME_TIME.hour * minutesPerHour) +
        CURRENT_GAME_TIME.minute;
    const pYear = postDate.year ?? CURRENT_GAME_DATE.year;
    const pMonth = postDate.monthIndex ?? CURRENT_GAME_DATE.monthIndex;
    const pDay = postDate.day ?? CURRENT_GAME_DATE.day;
    const pHour = postDate.hour ?? 12;
    const pMinute = postDate.minute ?? 0;
    const postTotalMinutes = 
        (pYear * minutesPerYear) +
        (pMonth * minutesPerMonth) +
        (pDay * minutesPerDay) +
        (pHour * minutesPerHour) +
        pMinute;
    const diffMinutes = currentTotalMinutes - postTotalMinutes;
    if (diffMinutes < 2) return "Just Now";
    if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    const diffDays = Math.floor(diffMinutes / 1440);
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 30) return `${diffDays} days ago`;
    const monthName = CALENDAR_DATA.months.values[pMonth].name;
    return `${monthName} ${pDay}, ${pYear}`;
}

// --- WEATHER GENERATION ---
function getSeededRandom(seed) {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

export function generateWeatherForDay(year, monthIndex, day) {
    const season = CALENDAR_DATA.seasons.values.find(s => {
        const startMonth = s.monthStart - 1;
        const endMonth = s.monthEnd - 1;
        if (startMonth <= endMonth) return monthIndex >= startMonth && monthIndex <= endMonth;
        else return monthIndex >= startMonth || monthIndex <= endMonth;
    });

    const seed = year * 10000 + (monthIndex + 1) * 100 + day;
    const rand = getSeededRandom(seed);
    const tempRand = getSeededRandom(seed + 1);
    
    if (getSeededRandom(seed + 2) < 0.08 && MAGICAL_WEATHER_EVENTS.length > 0) {
        const magicalIndex = Math.floor(getSeededRandom(seed + 3) * MAGICAL_WEATHER_EVENTS.length);
        const magicalEvent = MAGICAL_WEATHER_EVENTS[magicalIndex];
        return { temp: `??°C`, icon: magicalEvent.icon, desc: magicalEvent.name, isMagical: true };
    }

    let baseTemp, tempVariation, weatherOptions;
    switch (season.name) {
        case 'Golden Summer': baseTemp = 24; tempVariation = 10; weatherOptions = [{ icon: '☀️', desc: 'Clear and Sunny', chance: 0.6 }, { icon: '🌤️', desc: 'Partly Cloudy', chance: 0.2 }, { icon: '☁️', desc: 'Overcast', chance: 0.1 }, { icon: '🌦️', desc: 'Scattered Showers', chance: 0.07 }, { icon: '⛈️', desc: 'Afternoon Thunderstorm', chance: 0.03 }]; break;
        case 'Hoarfrost Winter': baseTemp = -5; tempVariation = 8; weatherOptions = [{ icon: '❄️', desc: 'Light Snowfall', chance: 0.4 }, { icon: '🥶', desc: 'Bitterly Cold', chance: 0.3 }, { icon: '☁️', desc: 'Grey and Overcast', chance: 0.2 }, { icon: '☀️', desc: 'Crisp and Clear', chance: 0.1 }]; break;
        default: baseTemp = 12; tempVariation = 12; weatherOptions = [{ icon: '🌤️', desc: 'Mild and Pleasant', chance: 0.4 }, { icon: '☁️', desc: 'Cloudy Skies', chance: 0.25 }, { icon: '🌦️', desc: 'Light Showers', chance: 0.2 }, { icon: '💨', desc: 'Windy', chance: 0.15 }]; break;
    }

    const temperature = Math.floor(baseTemp + (tempRand * tempVariation) - (tempVariation / 2));
    let cumulativeChance = 0;
    const chosenWeather = weatherOptions.find(w => { cumulativeChance += w.chance; return rand <= cumulativeChance; }) || weatherOptions[0];
    return { temp: `${temperature}°C`, ...chosenWeather };
}
// Add this to your lore.js file

export const STORY_ARCS = {
    raventree_manor: {
        id: 'raventree_manor',
        name: 'The Raventree Manor Crisis',
        description: 'A haunted mansion, a time-looping oracle, and a supernatural containment crisis that threatens to tear reality apart.',
        icon: '🏚️',
        status: 'active', // 'upcoming', 'active', 'resolved', 'failed'
        startDate: { day: 16, monthIndex: 6, year: 1040 },
        endDate: null, // null if ongoing
        phases: [
            { id: 'discovery', name: 'Discovery', description: 'The party arrives at the cursed mansion' },
            { id: 'escalation', name: 'Escalation', description: 'Supernatural threats multiply' },
            { id: 'crisis', name: 'Crisis', description: 'Full containment breach' },
            { id: 'resolution', name: 'Resolution', description: 'The fate of the manor is decided' }
        ],
        currentPhase: 2, // 0-indexed, so this is 'crisis'
        themes: ['supernatural', 'survival', 'mystery'],
        keyFactions: ['mages_guild', 'cosmic_jesters', 'iron_legion'],
        consequences: {
            positive: ['Potential arcane knowledge', 'Supernatural allies'],
            negative: ['Reality destabilization', 'Casualties mounting']
        }
    },
    capital_intrigue: {
        id: 'capital_intrigue',
        name: 'Capital Intrigue',
        description: 'A web of political schemes, prison breaks, and shadow deals in the heart of the Regal Empire.',
        icon: '🏛️',
        status: 'resolved',
        startDate: { day: 14, monthIndex: 6, year: 1040 },
        endDate: { day: 14, monthIndex: 6, year: 1040 },
        phases: [
            { id: 'arrival', name: 'Arrival', description: 'The Vigilance arrives at the capital' },
            { id: 'dealings', name: 'Shadow Dealings', description: 'Secret meetings and marketplace chaos' },
            { id: 'rescue', name: 'Rescue Attempt', description: 'The failed prison break' },
            { id: 'escape', name: 'Escape', description: 'Fleeing the capital' }
        ],
        currentPhase: 3,
        themes: ['political', 'espionage', 'survival'],
        keyFactions: ['regal_empire', 'iron_legion', 'freelancer_underworld'],
        consequences: {
            positive: ['New underworld contacts', 'Intel on Legion operations'],
            negative: ['Increased Imperial scrutiny', 'Failed to rescue Eager cleanly']
        }
    },
    vigilance_saga: {
        id: 'vigilance_saga',
        name: 'The Vigilance Saga',
        description: 'The acquisition of a legendary airship and the chaos that followed.',
        icon: '🚀',
        status: 'resolved',
        startDate: { day: 22, monthIndex: 5, year: 1040 },
        endDate: { day: 22, monthIndex: 5, year: 1040 },
        phases: [
            { id: 'pursuit', name: 'Pursuit', description: 'Tracking down X.O.' },
            { id: 'battle', name: 'Battle', description: 'The fight for the Vigilance' },
            { id: 'crisis', name: 'Core Crisis', description: 'Humpik\'s reckless action' },
            { id: 'aftermath', name: 'Aftermath', description: 'Dealing with the fallout' }
        ],
        currentPhase: 3,
        themes: ['action', 'liberation', 'recklessness'],
        keyFactions: ['liberated_toads', 'regal_empire', 'ratchet_raiders'],
        consequences: {
            positive: ['Gained the Vigilance', 'Freed toad slaves', 'Defeated X.O.'],
            negative: ['Massive reputation damage', 'Ship nearly destroyed']
        }
    },
    supernatural_sovereignty: {
        id: 'supernatural_sovereignty',
        name: 'The Supernatural Sovereignty Crisis',
        description: 'A political earthquake as the Empire moves to outlaw supernatural factions.',
        icon: '⚖️',
        status: 'active',
        startDate: { day: 18, monthIndex: 6, year: 1040 },
        endDate: null,
        phases: [
            { id: 'proposal', name: 'The Proposal', description: 'Dan introduces the act' },
            { id: 'vote', name: 'The Vote', description: 'The Diet passes the act 81-30' },
            { id: 'enforcement', name: 'Enforcement', description: 'Military protocols activated' },
            { id: 'consequences', name: 'Consequences', description: 'The supernatural factions respond' }
        ],
        currentPhase: 2,
        themes: ['political', 'supernatural', 'war'],
        keyFactions: ['regal_empire', 'onyx_hand', 'moonfang_pack', 'silver_flame'],
        consequences: {
            positive: ['Imperial favor', 'Silver Flame support'],
            negative: ['Supernatural enemies', 'War on two fronts']
        }
    },
    mushroom_civil_war: {
        id: 'mushroom_civil_war',
        name: 'The Mushroom Kingdom Civil War',
        description: 'A 45-year conflict following Princess Peach\'s death, now reaching a bloody crescendo.',
        icon: '🍄',
        status: 'active',
        startDate: { day: 1, monthIndex: 0, year: 995 },
        endDate: null,
        phases: [
            { id: 'assassination', name: 'The Assassination', description: 'Princess Peach is killed' },
            { id: 'fragmentation', name: 'Fragmentation', description: 'The kingdom splinters' },
            { id: 'stalemate', name: 'Stalemate', description: 'Decades of grinding warfare' },
            { id: 'escalation', name: 'Escalation', description: 'New players enter the conflict' },
            { id: 'endgame', name: 'Endgame', description: 'The final confrontation approaches' }
        ],
        currentPhase: 3,
        themes: ['war', 'political', 'tragedy'],
        keyFactions: ['mushroom_regency', 'peach_loyalists', 'koopa_troop', 'fawfuls_furious_freaks'],
        consequences: {
            positive: ['Koopa-Loyalist truce'],
            negative: ['Bramblehaven massacre', 'Civilian casualties']
        }
    },
    kong_kremling_cold_war: {
        id: 'kong_kremling_cold_war',
        name: 'The Kong-Kremling Cold War',
        description: 'A false peace hides assassination plots and espionage between two bitter rivals.',
        icon: '🦍',
        status: 'active',
        startDate: { day: 18, monthIndex: 6, year: 1040 },
        endDate: null,
        phases: [
            { id: 'discovery', name: 'Bug Discovery', description: 'Funky finds the listening device' },
            { id: 'confrontation', name: 'Confrontation', description: 'DK calls K. Rool' },
            { id: 'assassination', name: 'Assassination Plot', description: 'Galypso targets Funky' },
            { id: 'war', name: 'Open War?', description: 'Will the cold war turn hot?' }
        ],
        currentPhase: 2,
        themes: ['espionage', 'political', 'betrayal'],
        keyFactions: ['dk_crew', 'kremling_krew'],
        consequences: {
            positive: ['Intel on Kremling operations'],
            negative: ['Peace shattered', 'Assassination imminent']
        }
    },
    shadow_war: {
        id: 'shadow_war',
        name: 'The Shadow War',
        description: 'An escalating supernatural conflict between vampires and werewolves.',
        icon: '🌙',
        status: 'active',
        startDate: { day: 1, monthIndex: 6, year: 1040 },
        endDate: null,
        phases: [
            { id: 'tensions', name: 'Rising Tensions', description: 'Old grudges resurface' },
            { id: 'skirmishes', name: 'Skirmishes', description: 'First blood is drawn' },
            { id: 'escalation', name: 'Escalation', description: 'Open warfare begins' },
            { id: 'intervention', name: 'Intervention', description: 'Outside forces get involved' }
        ],
        currentPhase: 1,
        themes: ['supernatural', 'war', 'horror'],
        keyFactions: ['onyx_hand', 'moonfang_pack', 'silver_flame'],
        consequences: {
            positive: ['Potential supernatural allies'],
            negative: ['Collateral damage', 'Hunter attention']
        }
    },
    toad_liberation: {
        id: 'toad_liberation',
        name: 'The Toad Liberation Movement',
        description: 'The ongoing struggle to free toads from slavery and establish their freedom.',
        icon: '⛓️',
        status: 'active',
        startDate: { day: 22, monthIndex: 5, year: 1040 },
        endDate: null,
        phases: [
            { id: 'awakening', name: 'Awakening', description: 'Dan and others are freed' },
            { id: 'organization', name: 'Organization', description: 'The Liberated Toads form' },
            { id: 'infiltration', name: 'Infiltration', description: 'Spies are discovered' },
            { id: 'reckoning', name: 'Reckoning', description: 'The movement\'s future is decided' }
        ],
        currentPhase: 2,
        themes: ['liberation', 'betrayal', 'identity'],
        keyFactions: ['liberated_toads', 'the_unchained', 'iron_legion'],
        consequences: {
            positive: ['Freed toads', 'Growing movement'],
            negative: ['Infiltration by spies', 'Identity crisis (Two Dans)']
        }
    }
};

// Updated RUMORS with arc references
export const RUMORS = [
    {
        id: 'greenhouse_inferno_confession',
        title: "Archie's Confession",
        date: { day: 20, monthIndex: 6, year: 1040 },
        isEvent: false,
        instigator: 'archie',
        arc: 'raventree_manor',
        arcPhase: 2, // crisis phase
        arcPosition: 'climax', // 'opening', 'rising', 'climax', 'falling', 'resolution'
        description: "Archie Miser has publicly admitted to casting a high-level Fireball spell...",
        targets: ['archie'],
        effects: {
            mages_guild: -30,
            green_thumb_guardians: -20,
            regal_empire: -10,
            cosmic_jesters: 25,
            liberated_toads: 10,
            ratchet_raiders: 10
        },
        cycle_impact: { score: 0.5, label: "Public Recklessness", type: "magic" }
    },
    {
        id: 'wraith_conflagration',
        title: "Conflagration in the Manor",
        date: { day: 19, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'markop',
        arc: 'raventree_manor',
        arcPhase: 2,
        arcPosition: 'climax',
        description: "A chaotic battle erupted within Raventree Manor...",
        targets: ['markop', 'liberated_toads', 'remi'],
        effects: {
            liberated_toads: -15,
            silver_flame: 10,
            mages_guild: 5,
            cosmic_jesters: 5
        },
        cycle_impact: { score: 2.0, label: "Supernatural Incursion", type: "magic" }
    },
    {
        id: 'peach_death_fallout',
        title: "The Princess is Dead",
        date: { day: 1, monthIndex: 0, year: 995 },
        time_ago: "45 Years Ago",
        arc: 'mushroom_civil_war',
        arcPhase: 0,
        arcPosition: 'opening',
        description: "Princess Peach was killed, sparking a long and brutal civil war...",
        targets: ['bowser'],
        effects: { mushroom_regency: -50, regal_empire: -15, silver_flame: -15, oathbound_judges: -15 },
        cycle_impact: { score: 2, label: "Regime Collapse", type: "political" }
    },
    {
        id: 'archie_third_eye_escape',
        title: "The Third Eye Escape",
        date: { day: 19, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'archie',
        arc: 'raventree_manor',
        arcPhase: 2,
        arcPosition: 'rising',
        description: "In a stunning betrayal, the Liberated Toad 'Jerry' was revealed to be an Iron Legion spy...",
        targets: ['archie', 'liberated_toads', 'iron_legion', 'rakasha_clans', 'mages_guild'],
        effects: {
            liberated_toads: -25,
            iron_legion: -20,
            freelancer_underworld: 15,
            rakasha_clans: 10,
            mages_guild: -10,
            cosmic_jesters: 10
        },
        cycle_impact: { score: 1.5, label: "Dimensional Breach", type: "magic" }
    },
    {
        id: 'supernatural_sovereignty_act',
        title: "The Supernatural Sovereignty Act",
        isEvent: true,
        instigator: 'dan',
        date: { day: 18, monthIndex: 6, year: 1040 },
        arc: 'supernatural_sovereignty',
        arcPhase: 1,
        arcPosition: 'climax',
        description: "In a stunning display of political power, the Regal Empire pushed its 'Supernatural Sovereignty Act'...",
        targets: ['dan', 'party', 'liberated_toads', 'onyx_hand', 'moonfang_pack', 'regal_empire', 'iron_legion'],
        effects: {
            regal_empire: 30,
            iron_legion: 25,
            silver_flame: 40,
            oathbound_judges: 15,
            onyx_hand: -50,
            moonfang_pack: -50,
            liberated_toads: -5,
            the_unchained: -10,
            rebel_clans: -5,
            mages_guild: -15,
            freelancer_underworld: -5
        },
        cycle_impact: { score: 0.8, label: "Legislative Crackdown", type: "political" }
    },
    {
        id: 'the_kong_bug',
        title: "The Kong Bug & Assassination Plot",
        date: { day: 18, monthIndex: 6, year: 1040 },
        arc: 'kong_kremling_cold_war',
        arcPhase: 0,
        arcPosition: 'opening',
        description: "Donkey Kong's Director of Intelligence, Funky Kong, has discovered a sophisticated listening device...",
        targets: ['donkey_kong', 'king_k_rool', 'funky_kong', 'dk_crew', 'kremling_krew'],
        effects: {
            dk_crew: -40,
            kremling_krew: -40,
            freelancer_underworld: 15,
            regal_empire: -10,
            mushroom_regency: -5
        },
        cycle_impact: { score: 1.2, label: "Espionage Scandal", type: "political" }
    },
    {
        id: 'greenhouse_inferno',
        title: "The Greenhouse Inferno",
        time_ago: "Today",
        date: { day: 17, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'archie',
        arc: 'raventree_manor',
        arcPhase: 1,
        arcPosition: 'rising',
        description: "A chaotic series of events at Raventree Manor culminated in a devastating battle...",
        targets: ['archie', 'markop', 'humpik', 'bowser', 'remi', 'dan', 'eager', 'waluigi', 'green_t', 'self_reflection_oracle'],
        effects: { freelancer_underworld: 10, cosmic_jesters: 15, regal_empire: -15, iron_legion: -15, mages_guild: -20, liberated_toads: -5 },
        cycle_impact: { score: 2.5, label: "Arcane Catastrophe", type: "magic" }
    },
    // ... continue updating all rumors with arc, arcPhase, and arcPosition
    {
        id: 'standoff_at_the_capital',
        title: "Standoff at the Capital",
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
        arc: 'capital_intrigue',
        arcPhase: 0,
        arcPosition: 'opening',
        description: "The Vigilance was boarded by Regal Empire forces over the capital...",
        targets: ['party'],
        effects: { regal_empire: -30, iron_legion: -25, crimson_fleet: 5, freelancer_underworld: -10, liberated_toads: -5 },
        cycle_impact: { score: 0.8, label: "Military Standoff", type: "military" }
    },
    {
        id: 'oracle_of_cursed_mansion',
        title: "The Oracle of the Cursed Mansion",
        time_ago: "Tonight",
        date: { day: 16, monthIndex: 6, year: 1040 },
        arc: 'raventree_manor',
        arcPhase: 0,
        arcPosition: 'opening',
        description: "The party staying at Waluigi's newly acquired mansion has encountered its mysterious host...",
        targets: ['party', 'waluigi'],
        effects: { mages_guild: 5, cosmic_jesters: 10, silver_flame: -5, freelancer_underworld: 5 },
        cycle_impact: { score: 1.5, label: "Temporal Phenomenon", type: "magic" }
    },
    {
        id: 'shadeward_mansion_raid',
        title: "The Dinner That Broke Time",
        time_ago: "Tonight",
        date: { day: 16, monthIndex: 6, year: 1040 },
        arc: 'raventree_manor',
        arcPhase: 1,
        arcPosition: 'rising',
        description: "A group of toads seeking Archie were trapped in the Shadeward Mansion...",
        targets: ['liberated_toads', 'bones', 'wario'],
        effects: { liberated_toads: -30, iron_legion: -25, regal_empire: -15, freelancer_underworld: 10, mages_guild: 5 },
        cycle_impact: { score: 2.5, label: "Temporal Anomaly", type: "magic" }
    },
    {
        id: 'shadow_war',
        title: "Shadow War Escalation",
        time_ago: "Ongoing",
        date: { day: 1, monthIndex: 6, year: 1040 },
        arc: 'shadow_war',
        arcPhase: 1,
        arcPosition: 'rising',
        description: "The conflict between the Onyx Hand and Moonfang Pack is escalating...",
        targets: ['party'],
        effects: { onyx_hand: 5, moonfang_pack: 5, silver_flame: -10 },
        cycle_impact: { score: 1.5, label: "Supernatural Conflict", type: "military" }
    },
    {
        id: 'imposter_dan_revelation',
        title: "The Two Toads",
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
        instigator: 'lario',
        arc: 'toad_liberation',
        arcPhase: 2,
        arcPosition: 'climax',
        description: "A shocking revelation from the goblin Lario claims the 'Dan' traveling with the party is an imposter...",
        targets: ['party', 'liberated_toads'],
        effects: { liberated_toads: -20, regal_empire: -10, freelancer_underworld: 10, oathbound_judges: -5 },
        cycle_impact: { score: 0.5, label: "Identity Crisis", type: "social" }
    },
    {
        id: 'fall_of_bramblehaven',
        title: "The Bramblehaven Massacre",
        time_ago: "Today",
        date: { day: 17, monthIndex: 6, year: 1040 },
        instigator: 'captain_toadette',
        arc: 'mushroom_civil_war',
        arcPhase: 3,
        arcPosition: 'rising',
        description: "The Peach Loyalists brutally conquered the Fawful bastion of Bramblehaven...",
        targets: ['captain_toadette', 'embercap'],
        effects: { peach_loyalists: 10, mushroom_regency: -20, fawfuls_furious_freaks: -30, koopa_troop: 5, iron_legion: 5, silver_flame: -10 },
        cycle_impact: { score: 2.0, label: "Fortress Capture", type: "military" }
    },
    // Add the rest of your rumors with arc information...
];

// Helper function to get all rumors for a specific arc
export function getRumorsByArc(arcId) {
    return RUMORS.filter(rumor => rumor.arc === arcId)
        .sort((a, b) => {
            // Sort by date
            const dateA = new Date(a.date.year, a.date.monthIndex, a.date.day);
            const dateB = new Date(b.date.year, b.date.monthIndex, b.date.day);
            return dateA - dateB;
        });
}

// Helper function to calculate arc progress
export function getArcProgress(arcId) {
    const arc = STORY_ARCS[arcId];
    if (!arc) return 0;
    return (arc.currentPhase + 1) / arc.phases.length;
}

// Helper function to get arc summary stats
export function getArcStats(arcId) {
    const rumors = getRumorsByArc(arcId);
    const arc = STORY_ARCS[arcId];
    
    if (!arc) return null;
    
    // Calculate net faction impacts from all rumors in this arc
    const factionImpacts = {};
    rumors.forEach(rumor => {
        Object.entries(rumor.effects || {}).forEach(([faction, value]) => {
            factionImpacts[faction] = (factionImpacts[faction] || 0) + value;
        });
    });
    
    // Calculate total cycle impact
    const totalCycleImpact = rumors.reduce((sum, r) => sum + (r.cycle_impact?.score || 0), 0);
    
    return {
        rumorCount: rumors.length,
        factionImpacts,
        totalCycleImpact,
        progress: getArcProgress(arcId),
        currentPhaseName: arc.phases[arc.currentPhase]?.name || 'Unknown'
    };
}