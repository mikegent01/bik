import { state } from './state.js'; // Needed for seeded random if we use state
import {STORY_ARCS} from './lore.js';
export const CURRENT_GAME_DATE = {
    year: 1040,
    monthIndex: 6, // 0-indexed for Highsun (ordinal 7)
    day: 22
};

const now = new Date();
export const CURRENT_GAME_TIME = {
    hour: now.getHours(),
    minute: now.getMinutes()
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
      { "name": "Midlands' King's Coronation", "month": 2, "day": 5, "description": "King Elagabalu's ascent.", "traditions": "Feasts, Warding." },
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
export const GUILD_HOLIDAYS = [
    { name: "Foundation of Stone", month: 2, day: 10, guild: "stonecarvers_brethren", description: "Dwarves celebrate the laying of the first stone. Ale flows freely." },
    { name: "The Great Transmutation", month: 5, day: 20, guild: "alchemists_union", description: "Alchemists display their most volatile creations in public squares." },
    { name: "Cartographer's Zenith", month: 6, day: 21, guild: "wayfinders_guild", description: "Celebration of the longest day, perfect for mapping." },
    { name: "The Unseen Market", month: 10, day: 30, guild: "shadow_syndicate", description: "A night where illicit trade is traditionally ignored by guards." },
    { name: "Day of the Kinetic Eye", month: 9, day: 1, guild: "aegis_magi", description: "Military parades displaying magical prowess." },
    { name: "The Golden Handshake", month: 4, day: 15, guild: "gilded_gryphon", description: "Mercenary contracts are renewed globally." }
];
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