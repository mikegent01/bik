// plagues-data.js - COMPLETE PRODUCTION VERSION
// Deterministic procedural plague generation based on game date, season, and cycle

import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS, SPECIES_ESTATE_BIAS } from './species-data.js';
import { NATIONS, getAbsoluteDay } from './research-data.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from './calendar-data.js';

// ============================================================================
// CONSTANTS
// ============================================================================
export const PLAGUE_LIFECYCLE = {
    INCUBATION_DAYS: 30,
    GROWTH_DAYS: 60,
    PEAK_DAYS: 30,
    DECLINE_DAYS: 90,
    
    get TOTAL_DAYS() {
        return this.INCUBATION_DAYS + this.GROWTH_DAYS + this.PEAK_DAYS + this.DECLINE_DAYS;
    },
    
    STATUSES: {
        INCUBATING: 'Incubating',
        RISING: 'Rising',
        PEAK_OUTBREAK: 'Peak Outbreak',
        DECLINING: 'Declining',
        CONTAINED: 'Contained',
        DORMANT: 'Dormant',
        ERADICATED: 'Eradicated'
    }
};
function createBlorbs(spawnDay, cycle) {
    const rng = seededRandom(`blorbs_${cycle}`);
    
    const affectedSpecies = getSpeciesForNations(["mushroom_kingdom"]).filter(s => 
        isSpeciesSusceptible(s, THE_BLORBS.susceptible_types, THE_BLORBS.immune_tags)
    );
    
    return {
        ...THE_BLORBS,
        start_day: spawnDay,
        affected_nations: ["mushroom_kingdom", "leclaire_isle"],
        affected_species: affectedSpecies.length > 0 ? affectedSpecies : ['toad_citizen', 'goomba'],
        estate_impact: { commoners: 60, burghers: 40 },
        _seed: `blorbs_${cycle}`
    };
}
const MAX_ACTIVE_PLAGUES = 6;
const SPAWN_CHECK_INTERVAL = 25;
const MAX_SPAWN_HISTORY = 25;

// ============================================================================
// SEEDED RANDOM NUMBER GENERATOR
// ============================================================================
function seededRandom(seed) {
    const numSeed = typeof seed === 'string'
        ? Array.from(seed).reduce((acc, c, i) => acc + c.charCodeAt(0) * (i + 1), 0)
        : seed;
    
    let state = numSeed;
    return function() {
        state = (state * 1103515245 + 12345) & 0x7fffffff;
        return state / 0x7fffffff;
    };
}

function seededShuffle(arr, rng) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function seededPick(arr, rng) {
    return arr[Math.floor(rng() * arr.length)];
}

function seededPickN(arr, n, rng) {
    return seededShuffle(arr, rng).slice(0, Math.min(n, arr.length));
}

// ============================================================================
// SPECIES TAGS
// ============================================================================
export const SPECIES_TAGS = {
    // Humanoids
    dnd_human: ['organic', 'humanoid'],
    regal_midlander: ['organic', 'humanoid'],
    dnd_elf_high: ['organic', 'humanoid', 'magical'],
    dnd_elf_wood: ['organic', 'humanoid', 'magical'],
    dnd_elf_drow: ['organic', 'humanoid', 'magical'],
    dnd_dwarf_hill: ['organic', 'humanoid'],
    dnd_dwarf_mountain: ['organic', 'humanoid'],
    dnd_halfling: ['organic', 'humanoid'],
    dnd_orc: ['organic', 'humanoid'],
    dnd_goblin: ['organic', 'humanoid'],
    dnd_gnome: ['organic', 'humanoid'],
    dnd_tiefling: ['organic', 'humanoid', 'fiendish'],
    dnd_dragonborn_metallic: ['organic', 'humanoid', 'draconic'],
    dnd_goliath: ['organic', 'humanoid'],
    
    // Mushroom Kingdom
    toad_citizen: ['organic', 'fungal', 'humanoid'],
    goomba: ['organic', 'fungal'],
    koopa: ['organic', 'reptile'],
    shy_guy: ['organic', 'masked', 'humanoid'],
    yoshi: ['organic', 'reptile'],
    pianta: ['organic', 'humanoid'],
    noki: ['organic', 'humanoid'],
    bob_omb: ['construct', 'mechanical'],
    monty_mole: ['organic', 'beast'],
    
    // Midlands
    moonfang_werewolf: ['organic', 'humanoid', 'lycanthrope'],
    elder_vampire: ['undead', 'humanoid'],
    midlands_orc: ['organic', 'humanoid'],
    midlands_goblin: ['organic', 'humanoid'],
    rakasha_hunter: ['organic', 'humanoid', 'beast'],
    skeleton_warrior: ['undead', 'construct'],
    ghost_spirit: ['undead', 'ethereal'],
    
    // Warhammer
    warhammer_human: ['organic', 'humanoid'],
    skaven: ['organic', 'humanoid', 'beast'],
    warhammer_dwarf: ['organic', 'humanoid'],
    warhammer_orc: ['organic', 'humanoid'],
    warhammer_elf: ['organic', 'humanoid', 'magical'],
    beastman: ['organic', 'humanoid', 'beast'],
    chaos_warrior: ['organic', 'humanoid', 'corrupted'],
    lizardman: ['organic', 'reptile', 'magical'],
    
    // Middle-earth
    gondorian: ['organic', 'humanoid'],
    rohirrim: ['organic', 'humanoid'],
    middle_earth_elf: ['organic', 'humanoid', 'magical'],
    middle_earth_dwarf: ['organic', 'humanoid'],
    uruk_hai: ['organic', 'humanoid', 'corrupted'],
    mordor_orc: ['organic', 'humanoid', 'corrupted'],
    hobbit: ['organic', 'humanoid'],
    ent: ['organic', 'magical', 'plant'],
    cave_troll: ['organic', 'beast'],
    
    // Kivotos
    kivotos_human: ['organic', 'humanoid'],
    kivotos_angel: ['organic', 'humanoid', 'celestial'],
    kivotos_demon: ['organic', 'humanoid', 'fiendish'],
    kivotos_beastkin: ['organic', 'humanoid', 'beast'],
    kivotos_robot: ['construct', 'digital'],
    
    // Pokemon
    pokemon_human: ['organic', 'humanoid'],
    normal_pokemon: ['organic', 'creature'],
    water_pokemon: ['organic', 'creature', 'elemental'],
    grass_pokemon: ['organic', 'creature', 'plant'],
    fire_pokemon: ['organic', 'creature', 'elemental'],
    ghost_pokemon: ['undead', 'ethereal', 'creature'],
    steel_pokemon: ['organic', 'creature', 'metallic'],
    electric_pokemon: ['organic', 'creature', 'elemental'],
    psychic_pokemon: ['organic', 'creature', 'magical'],
    dark_pokemon: ['organic', 'creature'],
    fighting_pokemon: ['organic', 'creature'],
    
    // Internet
    netizen: ['digital', 'construct'],
    spam_bot: ['digital', 'construct'],
    living_meme: ['digital', 'construct'],
    virus_entity: ['digital', 'construct'],
    moderator_construct: ['digital', 'construct'],
    
    // Doughnut Hole
    void_entity: ['magical', 'ethereal'],
    cosmic_entity: ['magical', 'ethereal'],
    fractal_being: ['magical', 'construct'],
    time_echo: ['magical', 'ethereal'],
    logic_crystal: ['construct', 'magical'],
    
    // Animatopia
    rabbit_folk: ['organic', 'humanoid', 'beast'],
    sheep_folk: ['organic', 'humanoid', 'beast'],
    fox_folk: ['organic', 'humanoid', 'beast'],
    lion_folk: ['organic', 'humanoid', 'beast'],
    sloth_folk: ['organic', 'humanoid', 'beast'],
    bear_folk: ['organic', 'humanoid', 'beast'],
    
    // Equestria
    earth_pony: ['organic', 'beast', 'equine'],
    pegasus: ['organic', 'beast', 'equine'],
    unicorn: ['organic', 'beast', 'equine', 'magical'],
    crystal_pony: ['organic', 'beast', 'equine', 'magical'],
    bat_pony: ['organic', 'beast', 'equine'],
    changeling_reformed: ['organic', 'beast', 'magical'],
    kirin: ['organic', 'beast', 'magical'],
    griffon: ['organic', 'beast'],
    yak: ['organic', 'beast'],
    
    // Teyvat
    teyvat_human: ['organic', 'humanoid'],
    hilichurl: ['organic', 'humanoid', 'corrupted'],
    adeptus: ['organic', 'magical', 'beast'],
    fontainian: ['organic', 'humanoid'],
    melusine: ['organic', 'magical'],
    youkai_inazuma: ['organic', 'magical'],
    abyss_mage: ['organic', 'corrupted', 'magical'],
    
    // L'Eclaire Isle
    dough_glazed: ['organic', 'construct'],
    dough_cake: ['organic', 'construct'],
    dough_jelly: ['organic', 'construct'],
    dough_cruller: ['organic', 'construct'],
    dough_croissant: ['organic', 'construct'],
    frosting_slime: ['organic', 'construct'],
    candy_construct: ['construct'],
    
    // Others
    centaur_human_head: ['organic', 'humanoid', 'beast'],
    centaur_horse_head: ['organic', 'humanoid', 'beast', 'equine'],
    block_folk: ['organic', 'humanoid'],
    creeper_kind: ['organic', 'construct'],
    ender_kind: ['magical', 'ethereal'],
    earth_land_mage: ['organic', 'humanoid', 'magical'],
    exceed: ['organic', 'beast', 'magical'],
    celestial_spirit: ['magical', 'ethereal'],
    vulcan: ['organic', 'beast'],
    null_texture: ['digital', 'construct'],
    wireframe_husk: ['digital', 'construct'],
    
    // Fallback
    default: ['organic']
};

function getSpeciesTags(key) {
    return SPECIES_TAGS[key] || SPECIES_TAGS.default;
}

// ============================================================================
// GENERATION DATA POOLS
// ============================================================================
const NAME_PREFIXES = [
    "Crimson", "Azure", "Void", "Bone", "Shadow", "Rot", "Iron", "Night",
    "Soul", "Mind", "Echo", "Frost", "Ember", "Ashen", "Gilded", "Spore",
    "Crypt", "Star", "Nether", "Blood", "Crystal", "Blight", "Grey", "Pale",
    "Black", "Witch", "Corpse", "Grave", "Moon", "Sun", "Storm", "Plague",
    "Silent", "Weeping", "Howling", "Creeping", "Festering", "Withering"
];

const NAME_SUFFIXES = [
    "Fever", "Blight", "Pox", "Rot", "Shakes", "Chill", "Burn", "Plague",
    "Curse", "Sickness", "Wither", "Rust", "Flu", "Malaise", "Scourge",
    "Tremors", "Weep", "Fade", "Bane", "Doom", "Touch", "Kiss", "Grip",
    "Wasting", "Decay", "Murrain", "Pestilence", "Contagion", "Affliction",
    "Madness", "Terror", "Corruption", "Taint", "Blisters", "Boils"
];

const ICONS = ["🦠", "☠️", "🤢", "🤮", "💀", "🧪", "⚗️", "🔬", "💉", "🩸", "🫁", "🧠", "👁️", "🦴", "🫀", "☢️", "⚠️", "🔥", "❄️", "💎", "🌑", "🕳️", "👻", "🧟", "🍄", "🌿", "🐛", "🦟", "🪲", "🕷️"];

const VECTORS = [
    "Airborne / Respiratory",
    "Contact / Touch",
    "Waterborne / Ingestion",
    "Blood / Bodily Fluids",
    "Magical Radiation",
    "Spore Inhalation",
    "Insect Vector",
    "Cursed Objects",
    "Psychic Transmission",
    "Miasma / Bad Air",
    "Fungal Network",
    "Unknown Vector"
];

const LETHALITY_CLASSES = [
    { label: "Negligible", mortality: 0.001, desc: "Rarely fatal, causes minor discomfort." },
    { label: "Low", mortality: 0.005, desc: "Occasional deaths among the weak or elderly." },
    { label: "Low (Incapacitating)", mortality: 0.002, desc: "Rarely kills but severely disables victims." },
    { label: "Moderate", mortality: 0.02, desc: "Significant mortality without treatment." },
    { label: "Moderate (Slow)", mortality: 0.015, desc: "Deaths occur over weeks or months." },
    { label: "High", mortality: 0.05, desc: "Many victims do not survive." },
    { label: "High (Terminal)", mortality: 0.08, desc: "Most untreated cases are fatal." },
    { label: "Severe", mortality: 0.12, desc: "Majority of victims die without intervention." },
    { label: "Extreme", mortality: 0.2, desc: "Few survive exposure." },
    { label: "Extreme (Bioweapon)", mortality: 0.25, desc: "Engineered for maximum lethality." }
];

const ECONOMIC_STRAINS = [
    "Negligible",
    "Minor (Local Disruption)",
    "Low (Trade Slowdown)",
    "Moderate (Workforce Impact)",
    "Medium (Industry Shutdowns)",
    "High (Workforce Paralysis)",
    "High (Quarantine Zones)",
    "Severe (Trade Embargos)",
    "Critical (Economic Collapse)",
    "Catastrophic (Societal Breakdown)"
];

const SYMPTOM_PARTS = {
    physical: ["fever", "chills", "sweating", "fatigue", "weakness", "muscle pain", "joint stiffness", "tremors", "paralysis", "numbness", "swelling", "lesions", "rash", "boils", "necrosis", "bleeding", "coughing", "vomiting", "diarrhea"],
    mental: ["confusion", "delirium", "hallucinations", "paranoia", "memory loss", "personality changes", "aggression", "depression", "mania", "speaking in tongues"],
    magical: ["mana discharge", "aura corruption", "spell failure", "magical sensitivity", "ley line attraction", "ethereal flickering", "shadow bleeding"],
    strange: ["crystalline growths", "fungal blooms", "color changes", "floating", "phasing", "time dilation perception", "voice echoing", "light sensitivity", "attraction to undead"]
};

// ============================================================================
// REGION AND NATION MAPPINGS
// ============================================================================
const REGION_NATION_MAP = {
    "Mushroom Kingdom": ["mushroom_kingdom"],
    "The Midlands": ["midlands"],
    "Middle-earth": ["middle_earth"],
    "The Fated Place": ["warhammer"],
    "Kivotos": ["kivotos"],
    "The Internet": ["internet"],
    "The Doughnut Hole": ["doughnut_hole"],
    "Pokémon Regions": ["pokemon"],
    "Animatopia": ["animatopia"],
    "Equestria": ["equestria"],
    "L'Eclaire Isle": ["leclaire_isle"],
    "Teyvat": ["teyvat"],
    "The Grand Country": ["grand_country"]
};

const NATION_CONNECTIONS = {
    mushroom_kingdom: ['midlands', 'leclaire_isle', 'animatopia'],
    midlands: ['mushroom_kingdom', 'warhammer', 'middle_earth', 'grand_country'],
    warhammer: ['midlands', 'middle_earth'],
    middle_earth: ['midlands', 'warhammer', 'grand_country'],
    kivotos: ['internet', 'pokemon'],
    internet: ['kivotos', 'doughnut_hole'],
    doughnut_hole: ['internet'],
    pokemon: ['kivotos', 'animatopia'],
    animatopia: ['mushroom_kingdom', 'pokemon', 'equestria'],
    equestria: ['animatopia', 'teyvat'],
    leclaire_isle: ['mushroom_kingdom'],
    teyvat: ['equestria', 'grand_country'],
    grand_country: ['midlands', 'middle_earth', 'teyvat']
};

const NATION_TO_REGIONS = {
    midlands: ['The Midlands'],
    mushroom_kingdom: ['Mushroom Kingdom Regions', 'Islands & Outer Realms'],
    middle_earth: ['Middle-earth'],
    kivotos: ['Kivotos'],
    internet: ['The Internet'],
    warhammer: ['The Fated Place'],
    doughnut_hole: ['The Doughnut Hole'],
    pokemon: ['Pokémon Regions'],
    animatopia: ['Animatopia'],
    equestria: ['Equestria'],
    leclaire_isle: ["L'Eclaire Isle"],
    teyvat: ['Teyvat'],
    grand_country: ['The Grand Country']
};

// ============================================================================
// THE BLORBS - Canonical Disease
// ============================================================================
const THE_BLORBS = {
    id: 'the_blorbs',
    name: "The Blorbs",
    icon: "🟠",
    region: "Mushroom Kingdom",
    description: "A magical affliction causing victims to swell into giant, immobile spheres. First documented during the Dark Star crisis.",
    symptoms: "Rapid body swelling, uncontrollable rolling, loss of motor function, orange coloration.",
    transmission_vector: "Contact / Spore Inhalation",
    lethality_class: "Low (Incapacitating)",
    lethality_desc: "Rarely fatal directly, but victims are vulnerable to starvation and accidents.",
    mortality_rate: 0.002,
    mutation_risk: 15,
    economic_strain: "High (Workforce Paralysis)",
    active_seasons: ["Golden Summer", "Verdant Spring"],
    cycle_modifier: { crisis: 2.0, conflict: 1.5, calm: 0.3, expansion: 1.2, tension: 1.0, research: 0.6, rebirth: 0.5 },
    base_severity: 40,
    peak_population: 150000,
    base_cure_rate: 0.5,
    canonical: true,
    primary_nations: ["mushroom_kingdom"],
    susceptible_types: ['organic', 'fungal', 'humanoid'],
    immune_tags: ['undead', 'digital', 'construct', 'ethereal'],
    estate_bias: ['commoners', 'burghers']
};

// ============================================================================
// PLAGUE TEMPLATES
// ============================================================================
const PLAGUE_TEMPLATES = [
    {
        id: 'crystal_fade',
        name: "Crystal Fade",
        region: "The Midlands",
        primary_nations: ["midlands"],
        icon: "💎",
        description: "A mana-sickness caused by exposure to raw magitek runoff.",
        symptoms: "Joint stiffness, crystalline growths on skin, mana discharge.",
        transmission_vector: "Magical Radiation / Ley Line Proximity",
        lethality_class: "High (Terminal)",
        lethality_desc: "If untreated, the victim fully crystallizes and shatters.",
        mutation_risk: 40,
        economic_strain: "Medium (Magitek Shutdowns)",
        active_seasons: ["Verdant Spring", "Crimson Fall"],
        cycle_modifier: { research: 1.5, rebirth: 0.5, calm: 0.4, crisis: 1.2, conflict: 0.8, tension: 1.0, expansion: 0.9 },
        base_severity: 25,
        peak_population: 50000,
        mortality_rate: 0.05,
        base_cure_rate: 0.35,
        spawn_weight: 8,
        susceptible_types: ['magical', 'organic', 'humanoid'],
        immune_tags: ['digital', 'construct'],
        estate_bias: ['clergy', 'nobility']
    },
    {
        id: 'rot_lung',
        name: "Rot-Lung",
        region: "The Fated Place",
        primary_nations: ["warhammer"],
        icon: "🤢",
        description: "A biological weapon developed by Clan Pestilens.",
        symptoms: "Coughing up green phlegm, necrosis of the jaw, hallucinations.",
        transmission_vector: "Airborne / Waterborne",
        lethality_class: "Extreme (Bioweapon)",
        lethality_desc: "Death usually occurs within 7 days of first symptom.",
        mutation_risk: 85,
        economic_strain: "Severe (Trade Embargos)",
        active_seasons: ["Hoarfrost Winter"],
        cycle_modifier: { crisis: 1.8, tension: 1.2, conflict: 1.5, calm: 0.2, research: 0.5, rebirth: 0.3, expansion: 0.7 },
        base_severity: 60,
        peak_population: 500000,
        mortality_rate: 0.15,
        base_cure_rate: 0.2,
        spawn_weight: 5,
        susceptible_types: ['organic', 'humanoid'],
        immune_tags: ['undead', 'digital', 'construct'],
        estate_bias: ['commoners', 'indentured']
    },
    {
        id: 'digital_frag',
        name: "Digital Fragmentation",
        region: "The Internet",
        primary_nations: ["internet", "kivotos"],
        icon: "💻",
        description: "A malicious code that corrupts digital consciousness and AI cores.",
        symptoms: "Memory loops, personality fragmentation, data corruption.",
        transmission_vector: "Network / Data Transfer",
        lethality_class: "High (System Death)",
        lethality_desc: "Affected entities experience total identity collapse.",
        mutation_risk: 95,
        economic_strain: "Catastrophic (Infrastructure Failure)",
        active_seasons: ["All"],
        cycle_modifier: { research: 0.5, crisis: 2.5, tension: 1.5, calm: 0.3, conflict: 1.0, rebirth: 0.4, expansion: 0.8 },
        base_severity: 35,
        peak_population: 80000,
        mortality_rate: 0.08,
        base_cure_rate: 0.25,
        spawn_weight: 6,
        susceptible_types: ['digital', 'construct'],
        immune_tags: ['organic', 'undead'],
        estate_bias: ['burghers', 'nobility']
    },
    {
        id: 'soul_wither',
        name: "Soul Wither",
        region: "Middle-earth",
        primary_nations: ["middle_earth", "warhammer"],
        icon: "👻",
        description: "A necromantic curse that slowly drains the victim's life essence.",
        symptoms: "Pallid complexion, loss of appetite, speaking in tongues, shadow attraction.",
        transmission_vector: "Cursed Objects / Proximity to Undead",
        lethality_class: "Moderate (Slow Death)",
        lethality_desc: "Victims become wraiths if not treated within 30 days.",
        mutation_risk: 60,
        economic_strain: "Medium (Funeral Costs)",
        active_seasons: ["Hoarfrost Winter", "Crimson Fall"],
        cycle_modifier: { crisis: 1.8, calm: 0.2, rebirth: 0.3, tension: 1.1, conflict: 1.4, research: 0.6, expansion: 0.5 },
        base_severity: 30,
        peak_population: 25000,
        mortality_rate: 0.03,
        base_cure_rate: 0.4,
        spawn_weight: 7,
        susceptible_types: ['organic', 'humanoid', 'magical'],
        immune_tags: ['undead', 'digital', 'construct'],
        estate_bias: ['commoners', 'clergy']
    },
    {
        id: 'spore_madness',
        name: "Spore Madness",
        region: "Animatopia",
        primary_nations: ["animatopia", "pokemon"],
        icon: "🍄",
        description: "Parasitic fungal infection that hijacks the nervous system.",
        symptoms: "Erratic behavior, fungal growths, loss of self-control.",
        transmission_vector: "Airborne Spores / Contaminated Food",
        lethality_class: "Moderate (Mind Death)",
        lethality_desc: "Victims become puppets for the fungal network.",
        mutation_risk: 70,
        economic_strain: "High (Quarantine Zones)",
        active_seasons: ["Verdant Spring", "Golden Summer"],
        cycle_modifier: { expansion: 1.5, crisis: 1.3, calm: 0.5, tension: 0.9, conflict: 1.0, research: 0.7, rebirth: 1.2 },
        base_severity: 45,
        peak_population: 75000,
        mortality_rate: 0.04,
        base_cure_rate: 0.3,
        spawn_weight: 7,
        susceptible_types: ['organic', 'creature', 'beast'],
        immune_tags: ['digital', 'construct', 'undead', 'mechanical'],
        estate_bias: ['commoners', 'indentured']
    },
    {
        id: 'starlight_fever',
        name: "Starlight Fever",
        region: "Equestria",
        primary_nations: ["equestria", "teyvat"],
        icon: "✨",
        description: "A magical malady that causes uncontrollable magical surges.",
        symptoms: "Glowing eyes, fever dreams, random spell discharge, insomnia.",
        transmission_vector: "Magical Radiation",
        lethality_class: "Moderate",
        lethality_desc: "Death from magical exhaustion or accidental self-harm.",
        mutation_risk: 50,
        economic_strain: "High (Magical Containment)",
        active_seasons: ["Golden Summer", "Crimson Fall"],
        cycle_modifier: { research: 1.8, calm: 0.6, crisis: 0.9, tension: 1.0, conflict: 0.7, rebirth: 1.3, expansion: 1.1 },
        base_severity: 35,
        peak_population: 40000,
        mortality_rate: 0.025,
        base_cure_rate: 0.45,
        spawn_weight: 6,
        susceptible_types: ['magical', 'equine', 'humanoid'],
        immune_tags: ['digital', 'construct', 'undead'],
        estate_bias: ['clergy', 'nobility']
    },
    {
        id: 'sugar_rot',
        name: "Sugar Rot",
        region: "L'Eclaire Isle",
        primary_nations: ["leclaire_isle", "mushroom_kingdom"],
        icon: "🍩",
        description: "A degenerative condition affecting pastry-based lifeforms.",
        symptoms: "Crystallization of frosting, structural collapse, bitter taste.",
        transmission_vector: "Contact / Contaminated Ingredients",
        lethality_class: "High (Structural Failure)",
        lethality_desc: "Affected dough-folk literally crumble apart.",
        mutation_risk: 30,
        economic_strain: "Severe (Food Industry Collapse)",
        active_seasons: ["Golden Summer"],
        cycle_modifier: { crisis: 1.5, calm: 0.4, expansion: 1.3, tension: 0.8, conflict: 0.6, research: 0.9, rebirth: 0.7 },
        base_severity: 40,
        peak_population: 20000,
        mortality_rate: 0.06,
        base_cure_rate: 0.35,
        spawn_weight: 4,
        susceptible_types: ['construct', 'organic'],
        immune_tags: ['digital', 'undead', 'beast'],
        estate_bias: ['commoners', 'burghers']
    }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getCurrentSeason() {
    const monthIndex = CURRENT_GAME_DATE.monthIndex;
    const seasons = CALENDAR_DATA?.seasons?.values || [];
    
    for (const season of seasons) {
        const start = (season.monthStart || 1) - 1;
        const end = (season.monthEnd || 12) - 1;
        
        if (start <= end) {
            if (monthIndex >= start && monthIndex <= end) return season.name;
        } else {
            if (monthIndex >= start || monthIndex <= end) return season.name;
        }
    }
    return "Unknown";
}

function getSeasonForDay(absDay) {
    const dayOfYear = absDay % 365;
    const monthIndex = Math.floor(dayOfYear / 30) % 12;
    
    const seasons = CALENDAR_DATA?.seasons?.values || [];
    for (const season of seasons) {
        const start = (season.monthStart || 1) - 1;
        const end = (season.monthEnd || 12) - 1;
        
        if (start <= end) {
            if (monthIndex >= start && monthIndex <= end) return season.name;
        } else {
            if (monthIndex >= start || monthIndex <= end) return season.name;
        }
    }
    return "Unknown";
}

function getAllSeasons() {
    return CALENDAR_DATA?.seasons?.values?.map(s => s.name) || ["Golden Summer", "Hoarfrost Winter", "Verdant Spring", "Crimson Fall"];
}

// Add these if missing in plagues-data.js
// Add this function to plagues-data.js

/**
 * Generate a completely random plague (mutation)
 */
function generateRandomPlague(seed, spawnDay, season) {
    const rng = seededRandom(seed);
    
    // Pick random region and nations
    const regions = Object.keys(REGION_NATION_MAP);
    const region = seededPick(regions, rng);
    const primaryNations = [...(REGION_NATION_MAP[region] || ['midlands'])];
    
    // Generate name
    const name = generatePlagueName(rng);
    
    // Get affected species
    const potentialSpecies = getSpeciesForNations(primaryNations);
    const speciesCount = 2 + Math.floor(rng() * 5);
    const affectedSpecies = seededPickN(potentialSpecies, speciesCount, rng);
    
    // Random characteristics
    const icons = ["🦠", "☠️", "🤢", "🤮", "💀", "🧪", "⚗️", "💉", "🩸", "🫁", "🧠", "👁️", "🦴", "☢️", "🔥", "❄️", "💎", "🌑", "👻", "🍄", "🐛", "🦟", "🕷️"];
    const vectors = [
        "Airborne / Respiratory",
        "Contact / Touch", 
        "Waterborne / Ingestion",
        "Blood / Bodily Fluids",
        "Magical Radiation",
        "Spore Inhalation",
        "Insect Vector",
        "Cursed Objects",
        "Psychic Transmission",
        "Unknown Vector"
    ];
    const lethalityOptions = [
        { label: "Negligible", mortality: 0.001, desc: "Rarely fatal, causes minor discomfort." },
        { label: "Low", mortality: 0.005, desc: "Occasional deaths among the weak or elderly." },
        { label: "Low (Incapacitating)", mortality: 0.002, desc: "Rarely kills but severely disables victims." },
        { label: "Moderate", mortality: 0.02, desc: "Significant mortality without treatment." },
        { label: "High", mortality: 0.05, desc: "Many victims do not survive." },
        { label: "High (Terminal)", mortality: 0.08, desc: "Most untreated cases are fatal." },
        { label: "Severe", mortality: 0.12, desc: "Majority of victims die without intervention." },
        { label: "Extreme", mortality: 0.2, desc: "Few survive exposure." }
    ];
    const economicStrains = [
        "Negligible",
        "Minor (Local Disruption)",
        "Low (Trade Slowdown)",
        "Moderate (Workforce Impact)",
        "High (Quarantine Zones)",
        "Severe (Trade Embargos)",
        "Critical (Economic Collapse)"
    ];
    
    const lethality = seededPick(lethalityOptions, rng);
    
    // Generate symptoms
    const symptoms = generateSymptoms(rng);
    
    // Generate estate impact
    const estateImpact = generateEstateImpact(rng);
    
    // Generate cycle modifiers
    const cycleModifier = {
        calm: 0.3 + rng() * 0.5,
        research: 0.5 + rng() * 0.5,
        expansion: 0.8 + rng() * 0.6,
        tension: 1.0 + rng() * 0.5,
        conflict: 1.2 + rng() * 0.6,
        crisis: 1.5 + rng() * 1.0,
        rebirth: 0.4 + rng() * 0.4
    };
    
    return {
        id: seed,
        templateId: null,
        name: name,
        icon: seededPick(icons, rng),
        region: region,
        description: `A novel pathogen that emerged in ${region} under mysterious circumstances. Origin unknown.`,
        symptoms: symptoms,
        transmission_vector: seededPick(vectors, rng),
        lethality_class: lethality.label,
        lethality_desc: lethality.desc,
        mortality_rate: lethality.mortality,
        mutation_risk: Math.floor(30 + rng() * 60),
        economic_strain: seededPick(economicStrains, rng),
        active_seasons: [season, "All"].slice(0, 1 + Math.floor(rng() * 2)),
        cycle_modifier: cycleModifier,
        base_severity: Math.floor(20 + rng() * 60),
        peak_population: Math.floor(20000 + rng() * 300000),
        base_cure_rate: 0.2 + rng() * 0.4,
        canonical: false,
        is_mutation: true,
        primary_nations: primaryNations,
        affected_nations: primaryNations,
        affected_species: affectedSpecies.length > 0 ? affectedSpecies : ['dnd_human'],
        estate_impact: estateImpact,
        susceptible_types: ['organic', 'humanoid'],
        immune_tags: ['digital', 'construct'],
        start_day: spawnDay,
        _seed: seed
    };
}

/**
 * Generate a random plague name
 */


/**
 * Generate random symptoms
 */
function generateSymptoms(rng, count = 4) {
    const physical = [
        "fever", "chills", "sweating", "fatigue", "weakness", 
        "muscle pain", "joint stiffness", "tremors", "paralysis",
        "swelling", "lesions", "rash", "boils", "necrosis", 
        "bleeding", "coughing", "vomiting"
    ];
    
    const mental = [
        "confusion", "delirium", "hallucinations", "paranoia",
        "memory loss", "personality changes", "aggression", "depression"
    ];
    
    const magical = [
        "mana discharge", "aura corruption", "spell failure",
        "magical sensitivity", "ethereal flickering", "shadow bleeding"
    ];
    
    const allSymptoms = [
        ...physical,
        ...mental,
        ...(rng() > 0.5 ? magical : [])
    ];
    
    const selected = seededPickN(allSymptoms, count, rng);
    return selected.map((s, i) => i === 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join(", ") + ".";
}

/**
 * Generate random estate impact
 */
function generateEstateImpact(rng) {
    const estates = ['nobility', 'clergy', 'burghers', 'commoners', 'indentured'];
    const impact = {};
    
    // Pick 2-3 affected estates
    const count = 2 + Math.floor(rng() * 2);
    const selected = seededPickN(estates, count, rng);
    
    let total = 0;
    selected.forEach(e => {
        const val = 20 + Math.floor(rng() * 40);
        impact[e] = val;
        total += val;
    });
    
    // Normalize to 100%
    if (total > 0) {
        Object.keys(impact).forEach(e => {
            impact[e] = Math.round((impact[e] / total) * 100);
        });
    }
    
    return impact;
}

/**
 * Generate procedural plague from template
 */

function getSpeciesForNations(nationKeys) {
    const species = new Set();
    
    nationKeys.forEach(nationKey => {
        const regions = NATION_TO_REGIONS[nationKey] || [];
        regions.forEach(region => {
            const demographics = REGIONAL_DEMOGRAPHICS?.[region];
            if (demographics) {
                Object.keys(demographics).forEach(s => species.add(s));
            }
        });
    });
    
    if (species.size === 0) {
        species.add('dnd_human');
    }
    
    return Array.from(species);
}

function isSpeciesSusceptible(speciesKey, susceptibleTypes, immuneTags) {
    const tags = SPECIES_TAGS[speciesKey] || SPECIES_TAGS.default || ['organic'];
    
    // Check immunity first
    for (const tag of immuneTags) {
        if (tags.includes(tag)) return false;
    }
    
    // Check susceptibility
    for (const type of susceptibleTypes) {
        if (tags.includes(type)) return true;
    }
    
    return false;
}

function getNearbyNations(primaryNations) {
    const nearby = new Set();
    primaryNations.forEach(nation => {
        (NATION_CONNECTIONS[nation] || []).forEach(n => nearby.add(n));
    });
    primaryNations.forEach(n => nearby.delete(n));
    return Array.from(nearby);
}

// ============================================================================
// SPAWN CHANCE CALCULATION
// ============================================================================
// Replace or add calculatePlagueSpawnChance in plagues-data.js

/**
 * Calculate the chance of a new plague spawning
 */
function calculatePlagueSpawnChance(day, globalCycle, season, activePlagueCount) {
    // Base spawn chance
    let chance = 0.15; // 15% base chance per spawn window
    
    // Season modifiers
    const seasonMods = {
        "Golden Summer": 1.3,
        "Crimson Fall": 1.5,
        "Hoarfrost Winter": 0.6,
        "Verdant Spring": 1.8,
        "Unknown": 1.0
    };
    chance *= (seasonMods[season] || 1.0);
    
    // Cycle modifiers
    const cycleMods = {
        calm: 0.4,
        research: 0.6,
        expansion: 0.9,
        tension: 1.3,
        conflict: 1.6,
        crisis: 2.5,
        rebirth: 0.5
    };
    chance *= (cycleMods[globalCycle?.phase?.id] || 1.0);
    
    // Reduce chance if many plagues active
    if (activePlagueCount >= 2) chance *= 0.7;
    if (activePlagueCount >= 4) chance *= 0.5;
    if (activePlagueCount >= 6) chance *= 0.3;
    
    // Increase chance if no plagues active
    if (activePlagueCount === 0) chance *= 2.0;
    
    // Cap between 5% and 50%
    return Math.max(0.05, Math.min(0.5, chance));
}
// Replace or add selectPlagueTemplate in plagues-data.js

/**
 * Select which plague template to spawn
 */
function selectPlagueTemplate(rng, season, globalCycle, existingIds) {
    // Get available templates (not currently active)
    const available = PLAGUE_TEMPLATES.filter(t => !existingIds.includes(t.id));
    
    if (available.length === 0) {
        // All templates in use, allow repeats
        return seededPick(PLAGUE_TEMPLATES, rng);
    }
    
    // Prefer templates that match current season
    const seasonMatched = available.filter(t => 
        t.active_seasons?.includes('All') || 
        t.active_seasons?.includes(season)
    );
    
    const pool = seasonMatched.length > 0 ? seasonMatched : available;
    
    // Weight by cycle affinity
    const cycleId = globalCycle?.phase?.id || 'calm';
    const weighted = pool.map(t => ({
        template: t,
        weight: (t.cycle_modifier?.[cycleId] || 1.0) + 1 // +1 to ensure minimum weight
    }));
    
    // Weighted random selection
    const totalWeight = weighted.reduce((sum, w) => sum + w.weight, 0);
    let roll = rng() * totalWeight;
    
    for (const w of weighted) {
        roll -= w.weight;
        if (roll <= 0) return w.template;
    }
    
    return weighted[0]?.template || PLAGUE_TEMPLATES[0];
}


// ============================================================================
// PLAGUE GENERATION
// ============================================================================

function generatePlagueName(rng) {
    return `${seededPick(NAME_PREFIXES, rng)} ${seededPick(NAME_SUFFIXES, rng)}`;
}


function generateCycleModifiers(rng) {
    return {
        calm: 0.3 + rng() * 0.5,
        research: 0.5 + rng() * 0.5,
        expansion: 0.8 + rng() * 0.6,
        tension: 1.0 + rng() * 0.5,
        conflict: 1.2 + rng() * 0.6,
        crisis: 1.5 + rng() * 1.0,
        rebirth: 0.4 + rng() * 0.4
    };
}


function generateProceduralPlague(seed, spawnDay, template = null) {
    const rng = seededRandom(seed);
    
    let region, primaryNations, name, icon, description, symptoms, vector;
    let lethalityData, economicStrain, activeSeasons, cycleModifier;
    let baseSeverity, peakPopulation, baseCureRate, mutationRisk, mortalityRate;
    let susceptibleTypes, immuneTags, estateBias;
    
    if (template) {
        region = template.region;
        primaryNations = [...template.primary_nations];
        name = template.name;
        icon = template.icon;
        description = template.description;
        symptoms = template.symptoms;
        vector = template.transmission_vector;
        lethalityData = { label: template.lethality_class, desc: template.lethality_desc };
        mortalityRate = template.mortality_rate;
        economicStrain = template.economic_strain;
        activeSeasons = [...template.active_seasons];
        cycleModifier = { ...template.cycle_modifier };
        baseSeverity = template.base_severity;
        peakPopulation = template.peak_population;
        baseCureRate = template.base_cure_rate;
        mutationRisk = template.mutation_risk;
        susceptibleTypes = template.susceptible_types;
        immuneTags = template.immune_tags;
        estateBias = template.estate_bias;
    } else {
        const regions = Object.keys(REGION_NATION_MAP);
        region = seededPick(regions, rng);
        primaryNations = [...REGION_NATION_MAP[region]];
        name = generatePlagueName(rng);
        icon = seededPick(ICONS, rng);
        description = `A novel pathogen that emerged in ${region} under mysterious circumstances.`;
        symptoms = generateSymptoms(rng);
        vector = seededPick(VECTORS, rng);
        lethalityData = seededPick(LETHALITY_CLASSES, rng);
        mortalityRate = lethalityData.mortality;
        economicStrain = seededPick(ECONOMIC_STRAINS, rng);
        activeSeasons = seededPickN(getAllSeasons(), 1 + Math.floor(rng() * 2), rng);
        cycleModifier = generateCycleModifiers(rng);
        baseSeverity = Math.floor(30 + rng() * 50);
        peakPopulation = Math.floor(20000 + rng() * 200000);
        baseCureRate = 0.15 + rng() * 0.4;
        mutationRisk = Math.floor(30 + rng() * 60);
        
        const susceptiblePools = [
            ['organic', 'humanoid'],
            ['organic', 'beast'],
            ['organic', 'fungal'],
            ['magical', 'humanoid'],
            ['digital', 'construct']
        ];
        susceptibleTypes = seededPick(susceptiblePools, rng);
        
        const immunePools = [
            ['digital', 'construct'],
            ['undead', 'ethereal'],
            ['magical'],
            []
        ];
        immuneTags = seededPick(immunePools, rng);
        
        const estatePools = [
            ['commoners', 'indentured'],
            ['burghers', 'commoners'],
            ['nobility', 'clergy'],
            ['clergy', 'commoners']
        ];
        estateBias = seededPick(estatePools, rng);
    }
    
    const nearbyNations = getNearbyNations(primaryNations);
    const spreadCount = Math.floor(rng() * 3);
    const affectedNations = [...primaryNations, ...seededPickN(nearbyNations, spreadCount, rng)];
    
    const potentialSpecies = getSpeciesForNations(affectedNations);
    const susceptibleSpecies = potentialSpecies.filter(s => 
        isSpeciesSusceptible(s, susceptibleTypes, immuneTags)
    );
    const speciesCount = Math.min(susceptibleSpecies.length, 2 + Math.floor(rng() * 5));
    const affectedSpecies = susceptibleSpecies.length > 0 
        ? seededPickN(susceptibleSpecies, speciesCount, rng)
        : ['dnd_human'];
    
    const estateImpact = generateEstateImpact(rng, estateBias);
    
    return {
        id: seed,
        templateId: template?.id || null,
        name,
        icon,
        region,
        description,
        symptoms,
        transmission_vector: vector,
        lethality_class: lethalityData.label,
        lethality_desc: lethalityData.desc,
        mortality_rate: mortalityRate,
        mutation_risk: mutationRisk,
        economic_strain: economicStrain,
        active_seasons: activeSeasons,
        cycle_modifier: cycleModifier,
        base_severity: baseSeverity,
        peak_population: peakPopulation,
        base_cure_rate: baseCureRate,
        canonical: false,
        is_mutation: !template,
        primary_nations: primaryNations,
        affected_nations: affectedNations,
        affected_species: affectedSpecies,
        estate_impact: estateImpact,
        susceptible_types: susceptibleTypes,
        immune_tags: immuneTags,
        start_day: spawnDay,
        _seed: seed
    };
}

// ============================================================================
// PLAGUE STATE CALCULATION
// ============================================================================

// Replace calculatePlagueState in plagues-data.js

/**
 * Calculate plague lifecycle status based on days active
 */
function calculatePlagueState(plague, currentDay, globalCycle, medicalTech) {
    const daysActive = Math.max(0, currentDay - plague.start_day);
    const { INCUBATION_DAYS, GROWTH_DAYS, PEAK_DAYS, DECLINE_DAYS, STATUSES } = PLAGUE_LIFECYCLE;
    const TOTAL_DAYS = INCUBATION_DAYS + GROWTH_DAYS + PEAK_DAYS + DECLINE_DAYS;
    
    // Calculate cure progress based on time and tech
    const baseCurePerDay = plague.base_cure_rate || 0.3;
    const techBonus = medicalTech * 0.1;
    const cycleBonus = globalCycle?.phase?.id === 'research' ? 0.15 : 0;
    const cyclePenalty = globalCycle?.phase?.id === 'crisis' ? -0.1 : 0;
    
    const dailyCureRate = Math.max(0.1, baseCurePerDay + techBonus + cycleBonus + cyclePenalty);
    const cure_progress = Math.min(100, daysActive * dailyCureRate);
    
    // Knowledge increases over time
    const knowledge_level = Math.min(100, 10 + (daysActive * 0.5));
    
    // Check if eradicated (cure complete OR naturally ran its course)
    if (cure_progress >= 100 || daysActive > TOTAL_DAYS + 30) {
        return {
            status: STATUSES.ERADICATED,
            daysActive,
            phase: 1.0,
            cure_progress: 100,
            knowledge_level: 100,
            currentInfected: 0,
            projectedDecline: 0,
            cycleMod: 1.0,
            containment_status: 'Eradicated',
            isSeasonActive: false
        };
    }
    
    // Calculate phase and status based on lifecycle
    let status, infectionFactor, phase;
    
    if (daysActive < INCUBATION_DAYS) {
        status = STATUSES.INCUBATING;
        phase = daysActive / INCUBATION_DAYS;
        infectionFactor = phase * 0.1;
    } else if (daysActive < INCUBATION_DAYS + GROWTH_DAYS) {
        status = STATUSES.RISING;
        const growthProgress = (daysActive - INCUBATION_DAYS) / GROWTH_DAYS;
        phase = growthProgress;
        infectionFactor = 0.1 + (growthProgress * 0.9);
    } else if (daysActive < INCUBATION_DAYS + GROWTH_DAYS + PEAK_DAYS) {
        status = STATUSES.PEAK_OUTBREAK;
        phase = (daysActive - INCUBATION_DAYS - GROWTH_DAYS) / PEAK_DAYS;
        infectionFactor = 1.0;
    } else if (daysActive < TOTAL_DAYS) {
        const declineProgress = (daysActive - INCUBATION_DAYS - GROWTH_DAYS - PEAK_DAYS) / DECLINE_DAYS;
        
        // Cure progress accelerates decline
        const cureAcceleration = cure_progress / 100;
        const effectiveDecline = Math.min(1, declineProgress + (cureAcceleration * 0.5));
        
        infectionFactor = Math.max(0.02, 1.0 - (effectiveDecline * 0.98));
        status = effectiveDecline > 0.75 ? STATUSES.CONTAINED : STATUSES.DECLINING;
        phase = declineProgress;
    } else {
        // Past natural lifecycle but not yet eradicated
        status = STATUSES.CONTAINED;
        phase = 1.0;
        infectionFactor = 0.01;
    }
    
    // Apply cycle modifier
    const cycleMod = plague.cycle_modifier?.[globalCycle?.phase?.id] || 1.0;
    infectionFactor *= cycleMod;
    
    // Apply medical tech reduction
    infectionFactor *= Math.max(0.25, 1.0 - (medicalTech * 0.05));
    
    // Season modifier
    const currentSeason = getCurrentSeason();
    const isSeasonActive = plague.active_seasons?.includes(currentSeason) || 
                           plague.active_seasons?.includes('All');
    if (!isSeasonActive) {
        infectionFactor *= 0.5;
    }
    
    // Calculate numbers
    const currentInfected = Math.max(0, Math.floor((plague.peak_population || 100000) * infectionFactor));
    const deathRate = (plague.mortality_rate || 0.01) * Math.max(0.15, 1.0 - (medicalTech * 0.08));
    const projectedDecline = Math.floor(currentInfected * deathRate);
    
    // Containment status
    let containment_status = 'Unknown';
    if (cure_progress >= 90) containment_status = 'Controlled';
    else if (cure_progress >= 70) containment_status = 'Managed';
    else if (cure_progress >= 40) containment_status = 'Partial';
    else if (cure_progress >= 20) containment_status = 'Attempted';
    else if (daysActive > INCUBATION_DAYS) containment_status = 'Failing';
    
    // Calculate overall phase for lifecycle bar
    const overallPhase = Math.min(1, daysActive / TOTAL_DAYS);
    
    return {
        status,
        daysActive,
        phase: overallPhase,
        cure_progress,
        knowledge_level,
        currentInfected,
        projectedDecline,
        cycleMod,
        containment_status,
        isSeasonActive
    };
}

// ============================================================================
// KNOWN DISEASES ARCHIVE
// ============================================================================
const ARCHIVE_KEY = 'vigilance_known_diseases_v2';

function loadArchive() {
    try {
        const data = localStorage.getItem(ARCHIVE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveToArchive(plague) {
    try {
        const archive = loadArchive();
        if (archive.some(p => p.id === plague.id)) return;
        
        archive.push({
            id: plague.id,
            name: plague.name,
            icon: plague.icon,
            region: plague.region,
            description: plague.description,
            symptoms: plague.symptoms,
            transmission_vector: plague.transmission_vector,
            lethality_class: plague.lethality_class,
            lethality_desc: plague.lethality_desc,
            eradicated_day: getAbsoluteDay(),
            canonical: plague.canonical || false
        });
        
        localStorage.setItem(ARCHIVE_KEY, JSON.stringify(archive));
    } catch (e) {
        console.warn('[Plagues] Failed to save to archive:', e);
    }
}

export function getKnownDiseases() {
    return loadArchive();
}

// ============================================================================
// MAIN API
// ============================================================================

// Replace getPlagueData in plagues-data.js

/**
 * Get all active plagues for the current game date
 * Plagues spawn based on season, cycle, and world conditions
 */
export function getPlagueData(globalCycle, medicalTech = 1) {
    const currentDay = getAbsoluteDay();
    const currentSeason = getCurrentSeason();
    const plagues = [];
    
    console.log(`[Plagues] Current day: ${currentDay}, Season: ${currentSeason}`);
    
    // ========================================================================
    // 1. THE BLORBS - Canonical disease that cycles
    // ========================================================================
    const BLORBS_CYCLE_LENGTH = 300; // Blorbs outbreak every 300 days
    const currentBlorbsCycle = Math.floor(currentDay / BLORBS_CYCLE_LENGTH);
    const blorbsSpawnDay = currentBlorbsCycle * BLORBS_CYCLE_LENGTH;
    const daysSinceBlorbsSpawn = currentDay - blorbsSpawnDay;
    
    // Only show Blorbs if within its lifecycle + buffer
    if (daysSinceBlorbsSpawn <= PLAGUE_LIFECYCLE.TOTAL_DAYS + 30) {
        const blorbsPlague = createBlorbs(blorbsSpawnDay, currentBlorbsCycle);
        const blorbsState = calculatePlagueState(blorbsPlague, currentDay, globalCycle, medicalTech);
        
        plagues.push({ ...blorbsPlague, ...blorbsState });
        
        if (blorbsState.status === PLAGUE_LIFECYCLE.STATUSES.ERADICATED) {
            saveToArchive(blorbsPlague);
        }
    }
    
    // ========================================================================
    // 2. DYNAMIC PLAGUE SPAWNING - Check spawn windows
    // ========================================================================
    const SPAWN_CHECK_INTERVAL = 30; // Check for new plague every 30 days
    const existingTemplateIds = plagues.map(p => p.templateId).filter(Boolean);
    
    // Calculate how many spawn windows have passed
    const totalSpawnWindows = Math.floor(currentDay / SPAWN_CHECK_INTERVAL);
    
    // Check last 15 spawn windows (covers ~450 days of plague history)
    for (let windowIndex = Math.max(0, totalSpawnWindows - 15); windowIndex <= totalSpawnWindows; windowIndex++) {
        const windowDay = windowIndex * SPAWN_CHECK_INTERVAL;
        const daysSinceWindow = currentDay - windowDay;
        
        // Skip if this window's plague would be too old
        if (daysSinceWindow > PLAGUE_LIFECYCLE.TOTAL_DAYS + 60) continue;
        
        // Skip if in the future
        if (windowDay > currentDay) continue;
        
        const seed = `spawn_window_${windowIndex}`;
        const rng = seededRandom(seed);
        
        // Get conditions for spawn window
        const windowSeason = getSeasonForDay(windowDay);
        
        // Calculate spawn chance based on conditions
        const activeCount = plagues.filter(p => 
            p.status !== PLAGUE_LIFECYCLE.STATUSES.ERADICATED &&
            p.status !== PLAGUE_LIFECYCLE.STATUSES.DORMANT
        ).length;
        
        const spawnChance = calculatePlagueSpawnChance(windowDay, globalCycle, windowSeason, activeCount);
        const roll = rng();
        
        // Check if plague spawns in this window
        if (roll < spawnChance) {
            // Select a template
            const template = selectPlagueTemplate(rng, windowSeason, globalCycle, existingTemplateIds);
            
            if (template) {
                const plague = generateProceduralPlague(`${template.id}_${windowIndex}`, windowDay, template);
                const state = calculatePlagueState(plague, currentDay, globalCycle, medicalTech);
                
                plagues.push({ ...plague, ...state });
                existingTemplateIds.push(template.id);
                
                if (state.status === PLAGUE_LIFECYCLE.STATUSES.ERADICATED) {
                    saveToArchive(plague);
                }
            }
        }
        
        // Small chance for random mutation plague
        if (rng() < 0.02) { // 2% chance per window
            const mutationSeed = `mutation_${windowIndex}`;
            const plague = generateRandomPlague(mutationSeed, windowDay, windowSeason);
            const state = calculatePlagueState(plague, currentDay, globalCycle, medicalTech);
            
            // Only add if not too old
            if (daysSinceWindow <= PLAGUE_LIFECYCLE.TOTAL_DAYS + 60) {
                plagues.push({ ...plague, ...state });
                
                if (state.status === PLAGUE_LIFECYCLE.STATUSES.ERADICATED) {
                    saveToArchive(plague);
                }
            }
        }
    }
    
    // ========================================================================
    // 3. SORT AND RETURN
    // ========================================================================
    const statusOrder = {
        [PLAGUE_LIFECYCLE.STATUSES.PEAK_OUTBREAK]: 0,
        [PLAGUE_LIFECYCLE.STATUSES.RISING]: 1,
        [PLAGUE_LIFECYCLE.STATUSES.INCUBATING]: 2,
        [PLAGUE_LIFECYCLE.STATUSES.DECLINING]: 3,
        [PLAGUE_LIFECYCLE.STATUSES.CONTAINED]: 4,
        [PLAGUE_LIFECYCLE.STATUSES.DORMANT]: 5,
        [PLAGUE_LIFECYCLE.STATUSES.ERADICATED]: 6
    };
    
    plagues.sort((a, b) => {
        const orderA = statusOrder[a.status] ?? 5;
        const orderB = statusOrder[b.status] ?? 5;
        if (orderA !== orderB) return orderA - orderB;
        return (b.currentInfected || 0) - (a.currentInfected || 0);
    });
    
    // Separate active and inactive
    const active = plagues.filter(p => 
        p.status !== PLAGUE_LIFECYCLE.STATUSES.ERADICATED && 
        p.status !== PLAGUE_LIFECYCLE.STATUSES.DORMANT
    ).slice(0, MAX_ACTIVE_PLAGUES);
    
    const eradicated = plagues.filter(p => 
        p.status === PLAGUE_LIFECYCLE.STATUSES.ERADICATED
    );
    
    console.log(`[Plagues] Active: ${active.length}, Eradicated: ${eradicated.length}`);
    
    return [...active, ...eradicated];
}

// ============================================================================
// EXPORTS
// ============================================================================
export { getSpeciesTags, NATION_TO_REGIONS };
export const PLAGUE_DATA = [];