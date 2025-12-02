
export const earthLandData = {
    pointsOfInterest: [
        {
            id: 'el_capital_fiore',
            x: 43.5,
            y: 54.0,
            type: 'capital_city',
            name: 'Crocus (Fiore Capital)',
            description: 'The blooming capital of the Kingdom of Fiore, known for its annual Grand Magic Games.',
            factionId: 'fiore_kingdom',
            political_influence: 9,
            economic_value: 8,
            military_strength: 7,
            population: 850000,
            age_of_antiquity: 4,
            crime_rate: 2,
            intelReq: 0
        },
        {
            id: 'el_magnolia',
            x: 45.2,
            y: 53.5,
            type: 'major_city',
            name: 'Magnolia',
            description: 'A bustling merchant town, home to several prominent wizard guilds.',
            factionId: 'fiore_kingdom',
            political_influence: 6,
            economic_value: 7,
            military_strength: 8,
            population: 60000,
            age_of_antiquity: 3,
            crime_rate: 4,
            intelReq: 0
        },
        {
            id: 'el_alvarez_outpost',
            x: 40.5,
            y: 56.5,
            type: 'fortress',
            name: 'Western Shield',
            description: 'A forward operating base of the Alvarez Empire, guarding the western approaches.',
            factionId: 'alvarez_empire',
            political_influence: 5,
            economic_value: 4,
            military_strength: 9,
            population: 12000,
            age_of_antiquity: 2,
            crime_rate: 1,
            intelReq: { faction: 'alvarez_empire', level: 2 }
        },
        {
            id: 'el_ice_wall_ruins',
            x: 42.0,
            y: 58.0,
            type: 'ruins',
            name: 'Pre-Collapse Ruins',
            description: 'Ancient structures partially buried in ice, hinting at civilizations before the Great Freeze.',
            factionId: 'unaligned',
            political_influence: 1,
            economic_value: 2,
            military_strength: 0,
            population: 0,
            age_of_antiquity: 10,
            crime_rate: 0,
            intelReq: 3
        }
    ],
    fogOfWar: [

    ]
};

// --- REAL WORLD CONTINENTS ---
export const northAmericaData = {
    pointsOfInterest: [
        { id: 'na_liberty', x: 49.0, y: 47.5, type: 'major_city', name: 'Liberty Metropolis', description: 'A towering city of steel and glass, bustling with trade and innovation.', factionId: 'unaligned', population: 8000000, economic_value: 9, age_of_antiquity: 2 },
        { id: 'na_canyon', x: 45.5, y: 48.5, type: 'landmark', name: 'The Grand Rift', description: 'A massive geological scar running through the continent.', factionId: 'unaligned', population: 50, economic_value: 4, age_of_antiquity: 10 },
        { id: 'na_yellowstone', x: 46.0, y: 46.5, type: 'volcano', name: 'Geyser Basin', description: 'A land of bubbling mud and shooting water.', factionId: 'unaligned', population: 0, economic_value: 2, age_of_antiquity: 10 },
        { id: 'na_lakes', x: 47.5, y: 46.0, type: 'waterfall', name: 'Great Freshwater Seas', description: 'A collection of massive interconnected lakes.', factionId: 'unaligned', population: 200000, economic_value: 6, age_of_antiquity: 5 },
        { id: 'na_capital', x: 48.5, y: 48.0, type: 'capital_city', name: 'Federal District', description: 'The seat of government for the local federation.', factionId: 'north_america', population: 700000, economic_value: 7, age_of_antiquity: 3 },
        { id: 'na_hollywood', x: 44.5, y: 49.0, type: 'town', name: 'Starfall City', description: 'Where dreams are made and stories are told.', factionId: 'unaligned', population: 4000000, economic_value: 8, age_of_antiquity: 2 },
        { id: 'na_bayou', x: 47.0, y: 50.0, type: 'swamp', name: 'Deep Bayou', description: 'Mysterious swamps filled with ancient magic.', factionId: 'unaligned', population: 50000, economic_value: 3, age_of_antiquity: 6 },
        { id: 'na_rockies', x: 45.0, y: 47.0, type: 'mountain_pass', name: 'Spine of the World', description: 'High peaks that divide the continent.', factionId: 'unaligned', population: 10000, economic_value: 2, age_of_antiquity: 10 },
        { id: 'na_corn', x: 47.0, y: 48.0, type: 'farm', name: 'The Heartland', description: 'Endless fields of golden grain.', factionId: 'unaligned', population: 150000, economic_value: 5, age_of_antiquity: 4 },
        { id: 'na_north_forest', x: 46.0, y: 45.5, type: 'forest', name: 'Boreal Expanse', description: 'Cold, pine-covered wilderness.', factionId: 'unaligned', population: 5000, economic_value: 3, age_of_antiquity: 10 }
    ],
    fogOfWar: [

    ]
};

export const southAmericaData = { pointsOfInterest: [], fogOfWar: [] };

export const africaData = {
    pointsOfInterest: [
        { id: 'af_pyramids', x: 51.0, y: 54.0, type: 'landmark', name: 'Great Pyramids', description: 'Tombs of ancient kings rising from the sands.', factionId: 'africa', population: 5000, economic_value: 6, age_of_antiquity: 10 },
        { id: 'af_nile', x: 51.5, y: 55.0, type: 'resource', name: 'Lifeblood River', description: 'The longest river, bringing life to the desert.', factionId: 'unaligned', population: 100000, economic_value: 7, age_of_antiquity: 10 },
        { id: 'af_sahara', x: 49.5, y: 54.5, type: 'resource', name: 'Sea of Sand', description: 'An inhospitable expanse of heat and dunes.', factionId: 'unaligned', population: 1000, economic_value: 2, age_of_antiquity: 10 },
        { id: 'af_victoria', x: 52.5, y: 56.0, type: 'waterfall', name: 'Thunderous Falls', description: 'A massive curtain of falling water.', factionId: 'unaligned', population: 5000, economic_value: 4, age_of_antiquity: 10 },
        { id: 'af_kilimanjaro', x: 53.0, y: 55.5, type: 'mountain_pass', name: 'Snow-Capped Giant', description: 'A lone mountain rising from the savannah.', factionId: 'unaligned', population: 2000, economic_value: 3, age_of_antiquity: 10 },
        { id: 'af_cape', x: 52.0, y: 57.0, type: 'port', name: 'Table Bay', description: 'A strategic port at the southern tip.', factionId: 'africa', population: 400000, economic_value: 7, age_of_antiquity: 4 },
        { id: 'af_congo', x: 51.0, y: 55.5, type: 'forest', name: 'Emerald Heart', description: 'A dense, impenetrable rainforest.', factionId: 'unaligned', population: 20000, economic_value: 5, age_of_antiquity: 10 },
        { id: 'af_serengeti', x: 52.5, y: 55.0, type: 'resource', name: 'Great Plains', description: 'Teeming with wildlife and migration herds.', factionId: 'unaligned', population: 5000, economic_value: 4, age_of_antiquity: 10 },
        { id: 'af_madagascar', x: 54.0, y: 56.5, type: 'landmark', name: 'Lemur Island', description: 'An island of unique biodiversity.', factionId: 'unaligned', population: 250000, economic_value: 3, age_of_antiquity: 8 },
        { id: 'af_timbuktu', x: 49.0, y: 55.0, type: 'library', name: 'Scholars\' Oasis', description: 'A historic center of learning and manuscripts.', factionId: 'africa', population: 50000, economic_value: 4, age_of_antiquity: 9 }
    ],
    fogOfWar: [

    ]
};

export const asiaData = {
    pointsOfInterest: [
        { id: 'as_forbidden', x: 55.0, y: 48.0, type: 'capital_city', name: 'The Jade Palace', description: 'An ancient imperial complex at the heart of the east.', factionId: 'asia', population: 2000000, economic_value: 8, age_of_antiquity: 9 },
        { id: 'as_wall', x: 54.0, y: 47.5, type: 'fortress', name: 'The Great Barrier', description: 'A massive stone wall stretching for thousands of miles.', factionId: 'asia', population: 10000, economic_value: 2, age_of_antiquity: 9 },
        { id: 'as_himalaya', x: 52.0, y: 49.5, type: 'mountain_pass', name: 'Roof of the World', description: 'The highest peaks in existence, shrouded in mystery.', factionId: 'unaligned', population: 500, economic_value: 1, age_of_antiquity: 10 },
        { id: 'as_taj', x: 51.5, y: 50.5, type: 'landmark', name: 'Marble Mausoleum', description: 'A stunning white monument to lost love.', factionId: 'unaligned', population: 5000, economic_value: 5, age_of_antiquity: 6 },
        { id: 'as_tokyo', x: 57.0, y: 48.5, type: 'major_city', name: 'Neon Harbor', description: 'A futuristic city that never sleeps.', factionId: 'asia', population: 14000000, economic_value: 10, age_of_antiquity: 1 },
        { id: 'as_angkor', x: 55.5, y: 51.5, type: 'ruins', name: 'Jungle Temples', description: 'Ancient stone structures reclaimed by nature.', factionId: 'unaligned', population: 0, economic_value: 3, age_of_antiquity: 9 },
        { id: 'as_siberia', x: 54.0, y: 46.0, type: 'outpost', name: 'Frozen Wastes', description: 'A harsh, cold land of exile and resources.', factionId: 'unaligned', population: 5000, economic_value: 6, age_of_antiquity: 10 },
        { id: 'as_gobi', x: 53.0, y: 48.0, type: 'resource', name: 'Endless Dunes', description: 'A vast, cold desert.', factionId: 'unaligned', population: 1000, economic_value: 2, age_of_antiquity: 10 },
        { id: 'as_fuji', x: 56.5, y: 49.0, type: 'volcano', name: 'Sacred Peak', description: 'A perfect cone volcano worshipped by locals.', factionId: 'unaligned', population: 0, economic_value: 4, age_of_antiquity: 10 },
        { id: 'as_silk', x: 52.5, y: 48.5, type: 'trade_post', name: 'Silk Road Hub', description: 'A historic meeting point for merchants of east and west.', factionId: 'unaligned', population: 20000, economic_value: 6, age_of_antiquity: 7 }
    ],
    fogOfWar: [

    ]
};

export const azaniaData = { pointsOfInterest: [], fogOfWar: [] };
export const terraNovaData = { pointsOfInterest: [], fogOfWar: [] };

// --- EGYPTIAN / DIVINE REALMS ---
export const atenData = { pointsOfInterest: [], fogOfWar: [] };
export const anubisData = { pointsOfInterest: [], fogOfWar: [] };
export const amunRaData = { pointsOfInterest: [], fogOfWar: [] };
export const horusData = { pointsOfInterest: [], fogOfWar: [] };
export const tothData = { pointsOfInterest: [], fogOfWar: [] };
export const apisiaData = { pointsOfInterest: [], fogOfWar: [] };
export const minMnevisData = { pointsOfInterest: [], fogOfWar: [] };

// --- MYTHIC ISLES & LOST LANDS ---
export const muData = { pointsOfInterest: [], fogOfWar: [] };
export const greaterLemuriaData = { pointsOfInterest: [], fogOfWar: [] };
export const isleOfBlessedData = { pointsOfInterest: [], fogOfWar: [] };
export const avalOnsData = { pointsOfInterest: [], fogOfWar: [] };
export const scyllaCharybdisData = { pointsOfInterest: [], fogOfWar: [] };
export const gardenIslesData = { pointsOfInterest: [], fogOfWar: [] };
export const crimisionIsleData = { pointsOfInterest: [], fogOfWar: [] };

// --- COSMIC & ABSTRACT ---
export const xenonesiaData = { pointsOfInterest: [], fogOfWar: [] };
export const geminiaData = { pointsOfInterest: [], fogOfWar: [] };
export const uData = { pointsOfInterest: [], fogOfWar: [] };
export const polybiusData = { pointsOfInterest: [], fogOfWar: [] };
export const eiwassData = { pointsOfInterest: [], fogOfWar: [] };
export const oraculaData = { pointsOfInterest: [], fogOfWar: [] };
export const asclepiaData = { pointsOfInterest: [], fogOfWar: [] };
export const minervaData = { pointsOfInterest: [], fogOfWar: [] };

// --- NORSE / YGGDRASIL REALMS ---
export const asgardData = { pointsOfInterest: [], fogOfWar: [] };
export const jotunheimrData = { pointsOfInterest: [], fogOfWar: [] };
export const skycavernsData = { pointsOfInterest: [], fogOfWar: [] };

// --- UNCHARTED WATERS & STRANGE LANDS ---
export const sirsirianOceanData = { pointsOfInterest: [], fogOfWar: [] };
export const pitatiaData = { pointsOfInterest: [], fogOfWar: [] };
export const refijiaData = { pointsOfInterest: [], fogOfWar: [] };
export const robensoniaData = { pointsOfInterest: [], fogOfWar: [] };
export const glarniaData = { pointsOfInterest: [], fogOfWar: [] };
export const weldrhomData = { pointsOfInterest: [], fogOfWar: [] };
export const formosaUltimaData = { pointsOfInterest: [], fogOfWar: [] };
