
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


// 1. ATEN (Sun Disc / Solar Aspect)
export const atenData = { 
    pointsOfInterest: [
        { id: 'aten_capital', x: 36.5, y: 38.0, type: 'capital_city', name: "Akhetaten Reborn", description: "The radiant capital dedicated to the sun disc, gleaming with gold and sandstone.", factionId: 'wh_tomb_kings', population: 45000, economic_value: 9, military_strength: 8 },
        { id: 'aten_temple_sun', x: 37.2, y: 37.5, type: 'temple', name: "Great Temple of the Disc", description: "A roofless temple allowing direct sunlight to touch the altar.", factionId: 'wh_tomb_kings', population: 2000, economic_value: 5 },
        { id: 'aten_solar_array', x: 35.8, y: 39.1, type: 'landmark', name: "Solar Mirror Array", description: "Ancient mirrors focusing light to a central tower.", factionId: 'wh_tomb_kings' },
        { id: 'aten_market', x: 36.0, y: 37.8, type: 'market', name: "Bazaar of Noon", description: "Trade hub active only when the sun is highest.", factionId: 'wh_araby', economic_value: 7 },
        { id: 'aten_oasis_1', x: 34.5, y: 35.0, type: 'oasis', name: "Ray's Respite", description: "A shimmering pool reflecting the sun.", factionId: 'unaligned' },
        { id: 'aten_fort_1', x: 41.5, y: 33.0, type: 'fortress', name: "Fort Dawn", description: "Guards the eastern approach from shadow.", factionId: 'wh_tomb_kings', military_strength: 7 },
        { id: 'aten_ruins_1', x: 31.0, y: 39.0, type: 'ruins', name: "Old Amarna Ruins", description: "Remnants of a heretic city.", factionId: 'unaligned' },
        { id: 'aten_village_1', x: 38.0, y: 36.0, type: 'village', name: "Sun-Baker's Hamlet", description: "Known for sun-dried bricks.", factionId: 'wh_tomb_kings' },
        { id: 'aten_mine_1', x: 32.5, y: 41.0, type: 'mine', name: "Gold Vein Quarry", description: "Extracts gold for the temples.", factionId: 'wh_tomb_kings', economic_value: 6 },
        { id: 'aten_shrine_1', x: 40.0, y: 34.0, type: 'shrine', name: "Shrine of the First Light", factionId: 'wh_tomb_kings' },
        { id: 'aten_tower_1', x: 35.0, y: 41.5, type: 'tower', name: "Gleaming Spire", factionId: 'wh_tomb_kings' },
        { id: 'aten_dungeon_1', x: 31.5, y: 38.0, type: 'dungeon_entrance', name: "Crypt of the Eclipsed", description: "Where enemies of the sun are interred.", factionId: 'unaligned' },
        { id: 'aten_farm_1', x: 37.5, y: 39.5, type: 'farm', name: "Golden Wheat Fields", factionId: 'wh_tomb_kings' },
        { id: 'aten_workshop_1', x: 36.2, y: 38.5, type: 'workshop', name: "Goldsmith's Row", factionId: 'wh_tomb_kings' },
        { id: 'aten_camp_1', x: 42.0, y: 35.0, type: 'bandit_camp', name: "Eclipse Raiders Camp", factionId: 'unaligned' },
        { id: 'aten_monastery', x: 33.0, y: 43.0, type: 'monastery', name: "Order of the Solar Disc", factionId: 'wh_tomb_kings' },
        { id: 'aten_port', x: 39.0, y: 37.0, type: 'port', name: "Sunriver Docks", description: "Small river port for barges.", factionId: 'wh_tomb_kings' },
        { id: 'aten_library', x: 36.8, y: 37.2, type: 'library', name: "Archives of Light", factionId: 'wh_tomb_kings' },
        { id: 'aten_statue', x: 35.5, y: 36.5, type: 'landmark', name: "Colossus of Aten", factionId: 'wh_tomb_kings' },
        { id: 'aten_village_2', x: 39.5, y: 35.5, type: 'village', name: "Mornington", factionId: 'wh_tomb_kings' },
        { id: 'aten_village_3', x: 33.5, y: 40.0, type: 'village', name: "Duskwatch", factionId: 'wh_tomb_kings' },
        { id: 'aten_ruins_2', x: 41.0, y: 33.5, type: 'ruins', name: "Fallen Obelisk", factionId: 'unaligned' },
        { id: 'aten_oasis_2', x: 32.0, y: 42.0, type: 'oasis', name: "Mirage Pool", factionId: 'unaligned' },
        { id: 'aten_fort_2', x: 30.8, y: 43.0, type: 'outpost', name: "Western Watch", factionId: 'wh_tomb_kings' },
        { id: 'aten_mine_2', x: 41.5, y: 32.5, type: 'quarry', name: "Sandstone Cut", factionId: 'wh_tomb_kings' },
        { id: 'aten_tomb_1', x: 34.0, y: 41.0, type: 'graveyard', name: "Valley of Nobles", factionId: 'wh_tomb_kings' },
        { id: 'aten_town_1', x: 35.0, y: 35.0, type: 'town', name: "Heliopolis Minor", factionId: 'wh_tomb_kings' },
        { id: 'aten_shrine_2', x: 37.0, y: 40.0, type: 'shrine', name: "Altar of Noon", factionId: 'wh_tomb_kings' },
        { id: 'aten_cave', x: 31.0, y: 37.5, type: 'cave_entrance', name: "Sunless Grotto", factionId: 'unaligned' },
        { id: 'aten_bridge', x: 38.5, y: 37.5, type: 'bridge', name: "Arch of Ra", factionId: 'wh_tomb_kings' },
        { id: 'aten_village_4', x: 34.8, y: 34.8, type: 'village', name: "Beam's End", factionId: 'wh_tomb_kings' },
        { id: 'aten_ruins_3', x: 40.5, y: 34.0, type: 'ruins', name: "Shattered Sphinx", factionId: 'unaligned' },
        { id: 'aten_lair', x: 30.5, y: 41.0, type: 'lair', name: "Scorpion's Nest", factionId: 'unaligned' },
        { id: 'aten_workshop_2', x: 36.0, y: 38.8, type: 'workshop', name: "Chariot Works", factionId: 'wh_tomb_kings' },
        { id: 'aten_farm_2', x: 38.0, y: 39.0, type: 'farm', name: "Flax Fields", factionId: 'wh_tomb_kings' },
        { id: 'aten_tower_2', x: 33.0, y: 36.0, type: 'watchtower', name: "Glare Tower", factionId: 'wh_tomb_kings' },
        { id: 'aten_inn', x: 36.2, y: 37.5, type: 'inn', name: "The Gilded Goblet", factionId: 'wh_tomb_kings' },
        { id: 'aten_trade', x: 35.8, y: 35.5, type: 'trade_post', name: "Caravan Stop Alpha", factionId: 'wh_araby' },
        { id: 'aten_monument', x: 39.0, y: 33.0, type: 'landmark', name: "Pillar of Akhenaten", factionId: 'wh_tomb_kings' },
        { id: 'aten_pyramid', x: 35.0, y: 40.0, type: 'landmark', name: "Pyramid of the Sun", factionId: 'wh_tomb_kings', military_strength: 9 }
    ],
    fogOfWar: [

    ]
};

// 2. ANUBIS (Death / Underworld Aspect)
export const anubisData = { 
    pointsOfInterest: [
        { id: 'anubis_capital', x: 46.0, y: 20.0, type: 'major_city', name: "Duat's Gate", description: "A city shrouded in perpetual twilight, center of embalming arts.", factionId: 'wh_tomb_kings', population: 30000, economic_value: 7, military_strength: 9 },
        { id: 'anubis_necropolis', x: 45.0, y: 19.0, type: 'graveyard', name: "Necropolis of Scales", description: "Vast burial grounds guarded by jackal-headed statues.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_temple', x: 46.5, y: 20.5, type: 'temple', name: "Sanctum of the Weigher", description: "Where souls are judged.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_dungeon_1', x: 44.0, y: 21.5, type: 'dungeon_entrance', name: "Tomb of the Unworthy", factionId: 'unaligned' },
        { id: 'anubis_ruins_1', x: 47.5, y: 21.0, type: 'ruins', name: "Crumbling Mastaba", factionId: 'unaligned' },
        { id: 'anubis_fort_1', x: 43.0, y: 18.5, type: 'fortress', name: "Black Stone Keep", factionId: 'wh_tomb_kings', military_strength: 8 },
        { id: 'anubis_village_1', x: 45.5, y: 18.0, type: 'village', name: "Embalmer's Rest", factionId: 'wh_tomb_kings' },
        { id: 'anubis_workshop_1', x: 46.2, y: 19.8, type: 'workshop', name: "Linen Weavers", description: "Produces high quality burial shrouds.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_shrine_1', x: 48.0, y: 19.5, type: 'shrine', name: "Shrine of Anput", factionId: 'wh_tomb_kings' },
        { id: 'anubis_landmark_1', x: 44.5, y: 20.5, type: 'landmark', name: "The Black Sphinx", factionId: 'wh_tomb_kings' },
        { id: 'anubis_oasis', x: 47.0, y: 18.5, type: 'oasis', name: "Soul-Well", description: "Water glows faintly pale.", factionId: 'unaligned' },
        { id: 'anubis_mine_1', x: 43.5, y: 19.0, type: 'mine', name: "Natron Pits", description: "Essential for mummification.", factionId: 'wh_tomb_kings', economic_value: 6 },
        { id: 'anubis_tower_1', x: 45.0, y: 21.0, type: 'watchtower', name: "Vigil of the Dead", factionId: 'wh_tomb_kings' },
        { id: 'anubis_camp_1', x: 48.0, y: 22.0, type: 'bandit_camp', name: "Grave Robber's Hideout", factionId: 'unaligned' },
        { id: 'anubis_lair_1', x: 43.0, y: 20.0, type: 'lair', name: "Ammit's Den", factionId: 'unaligned' },
        { id: 'anubis_town_1', x: 47.0, y: 22.5, type: 'town', name: "Jackal's Crossing", factionId: 'wh_tomb_kings' },
        { id: 'anubis_ruins_2', x: 44.0, y: 18.0, type: 'ruins', name: "Forgotten Hypogeum", factionId: 'unaligned' },
        { id: 'anubis_shrine_2', x: 46.8, y: 21.5, type: 'shrine', name: "Altar of Silence", factionId: 'wh_tomb_kings' },
        { id: 'anubis_market', x: 46.0, y: 20.2, type: 'market', name: "Market of Memories", factionId: 'wh_tomb_kings' },
        { id: 'anubis_library', x: 45.8, y: 19.5, type: 'library', name: "Scrolls of the Dead", factionId: 'wh_tomb_kings' },
        { id: 'anubis_island_town', x: 44.0, y: 21.0, type: 'town', name: "Isle of Passing", factionId: 'wh_tomb_kings' },
        { id: 'anubis_village_2', x: 48.0, y: 20.0, type: 'village', name: "Canopic Creek", factionId: 'wh_tomb_kings' },
        { id: 'anubis_bridge', x: 45.2, y: 20.8, type: 'bridge', name: "Bridge of Judgment", factionId: 'wh_tomb_kings' },
        { id: 'anubis_cave', x: 42.8, y: 19.5, type: 'cave_entrance', name: "Echoing Cavern", factionId: 'unaligned' },
        { id: 'anubis_monastery', x: 47.5, y: 19.0, type: 'monastery', name: "Keepers of the Veil", factionId: 'wh_tomb_kings' },
        { id: 'anubis_farm', x: 46.5, y: 18.0, type: 'farm', name: "Lotus Fields", factionId: 'wh_tomb_kings' },
        { id: 'anubis_trade', x: 45.5, y: 22.0, type: 'trade_post', name: "Underworld Exchange", factionId: 'wh_araby' },
        { id: 'anubis_workshop_2', x: 46.0, y: 19.2, type: 'workshop', name: "Sarcophagus Carvers", factionId: 'wh_tomb_kings' },
        { id: 'anubis_statue_1', x: 43.8, y: 18.8, type: 'landmark', name: "Statue of Upuaut", factionId: 'wh_tomb_kings' },
        { id: 'anubis_outpost', x: 48.2, y: 21.8, type: 'outpost', name: "Border Watch", factionId: 'wh_tomb_kings' },
        { id: 'anubis_ruins_3', x: 44.5, y: 17.8, type: 'ruins', name: "Buried Temple", factionId: 'unaligned' },
        { id: 'anubis_dungeon_2', x: 47.2, y: 20.8, type: 'dungeon_entrance', name: "Labyrinth of Souls", factionId: 'unaligned' },
        { id: 'anubis_tower_2', x: 43.2, y: 21.2, type: 'tower', name: "Obsidian Spire", factionId: 'wh_tomb_kings' },
        { id: 'anubis_village_3', x: 45.0, y: 17.8, type: 'village', name: "Mourner's End", factionId: 'wh_tomb_kings' },
        { id: 'anubis_inn', x: 46.2, y: 20.8, type: 'inn', name: "The Silent Jackal", factionId: 'wh_tomb_kings' },
        { id: 'anubis_quarry', x: 42.5, y: 19.5, type: 'quarry', name: "Black Granite Quarry", factionId: 'wh_tomb_kings' },
        { id: 'anubis_landmark_2', x: 48.0, y: 18.5, type: 'landmark', name: "Gate of the West", factionId: 'wh_tomb_kings' },
        { id: 'anubis_shrine_3', x: 44.8, y: 21.8, type: 'shrine', name: "Shrine of Passing", factionId: 'wh_tomb_kings' },
        { id: 'anubis_village_4', x: 47.8, y: 22.2, type: 'village', name: "Dusk's Edge", factionId: 'wh_tomb_kings' },
        { id: 'anubis_fort_2', x: 43.5, y: 18.2, type: 'castle', name: "Citadel of Bone", factionId: 'wh_tomb_kings', military_strength: 9 }
    ],
    fogOfWar: [

    ]
};

// 3. AMUN-RA (King of Gods / Power Aspect)
export const amunRaData = { 
    pointsOfInterest: [
        { id: 'amun_capital', x: 81.0, y: 58.0, type: 'capital_city', name: "Thebes Aeterna", description: "The majestic capital of the Gods' domain, filled with colossal statues.", factionId: 'wh_tomb_kings', population: 60000, economic_value: 10, military_strength: 10 },
        { id: 'amun_temple_great', x: 80.5, y: 57.0, type: 'temple', name: "Great Temple of Karnak", description: "Massive complex of pillars and halls.", factionId: 'wh_tomb_kings', population: 5000 },
        { id: 'amun_fort_1', x: 83.0, y: 55.0, type: 'fortress', name: "Ram's Head Bastion", factionId: 'wh_tomb_kings', military_strength: 9 },
        { id: 'amun_pyramid_1', x: 79.5, y: 60.0, type: 'landmark', name: "Pyramid of Amun", factionId: 'wh_tomb_kings' },
        { id: 'amun_market', x: 81.5, y: 58.5, type: 'market', name: "Golden Avenue Market", factionId: 'wh_araby', economic_value: 8 },
        { id: 'amun_oasis_1', x: 78.0, y: 52.0, type: 'oasis', name: "Hidden Lake", factionId: 'unaligned' },
        { id: 'amun_ruins_1', x: 84.0, y: 62.0, type: 'ruins', name: "Old Palace Ruins", factionId: 'unaligned' },
        { id: 'amun_village_1', x: 82.0, y: 54.0, type: 'village', name: "Pillarton", factionId: 'wh_tomb_kings' },
        { id: 'amun_mine_1', x: 85.0, y: 59.0, type: 'mine', name: "Electrum Mines", factionId: 'wh_tomb_kings', economic_value: 7 },
        { id: 'amun_shrine_1', x: 79.0, y: 55.0, type: 'shrine', name: "Shrine of the Hidden One", factionId: 'wh_tomb_kings' },
        { id: 'amun_tower_1', x: 83.5, y: 57.0, type: 'tower', name: "Obelisk of Power", factionId: 'wh_tomb_kings' },
        { id: 'amun_dungeon_1', x: 85.5, y: 61.0, type: 'dungeon_entrance', name: "Vault of Chaos", factionId: 'unaligned' },
        { id: 'amun_farm_1', x: 80.0, y: 53.0, type: 'farm', name: "Nile's Gift Farms", factionId: 'wh_tomb_kings' },
        { id: 'amun_workshop_1', x: 81.2, y: 58.8, type: 'workshop', name: "Royal Stonemasons", factionId: 'wh_tomb_kings' },
        { id: 'amun_camp_1', x: 75.0, y: 64.0, type: 'bandit_camp', name: "Sandstorm Raiders", factionId: 'unaligned' },
        { id: 'amun_monastery', x: 78.5, y: 61.0, type: 'monastery', name: "Priests of the Ram", factionId: 'wh_tomb_kings' },
        { id: 'amun_port', x: 82.5, y: 50.0, type: 'port', name: "Upper River Harbor", factionId: 'wh_tomb_kings' },
        { id: 'amun_library', x: 81.8, y: 57.5, type: 'library', name: "Library of Kings", factionId: 'wh_tomb_kings' },
        { id: 'amun_statue_1', x: 80.0, y: 56.0, type: 'landmark', name: "Colossi of Memnon", factionId: 'wh_tomb_kings' },
        { id: 'amun_village_2', x: 84.5, y: 56.0, type: 'village', name: "East Bank Village", factionId: 'wh_tomb_kings' },
        { id: 'amun_village_3', x: 79.0, y: 63.0, type: 'village', name: "West Bank Village", factionId: 'wh_tomb_kings' },
        { id: 'amun_ruins_2', x: 76.0, y: 65.0, type: 'ruins', name: "Buried Sphinx Avenue", factionId: 'unaligned' },
        { id: 'amun_oasis_2', x: 83.0, y: 63.0, type: 'oasis', name: "Palm Grove", factionId: 'unaligned' },
        { id: 'amun_fort_2', x: 77.0, y: 50.0, type: 'castle', name: "Citadel of the Sun", factionId: 'wh_tomb_kings', military_strength: 9 },
        { id: 'amun_mine_2', x: 84.0, y: 60.0, type: 'quarry', name: "Limestone Quarry", factionId: 'wh_tomb_kings' },
        { id: 'amun_tomb_1', x: 78.0, y: 59.0, type: 'graveyard', name: "Valley of Kings", factionId: 'wh_tomb_kings' },
        { id: 'amun_town_1', x: 82.0, y: 60.0, type: 'town', name: "Luxor Minor", factionId: 'wh_tomb_kings' },
        { id: 'amun_shrine_2', x: 80.0, y: 50.0, type: 'shrine', name: "Altar of Creation", factionId: 'wh_tomb_kings' },
        { id: 'amun_cave', x: 85.0, y: 55.0, type: 'cave_entrance', name: "Gold Dust Cavern", factionId: 'unaligned' },
        { id: 'amun_bridge', x: 81.5, y: 56.0, type: 'bridge', name: "King's Crossing", factionId: 'wh_tomb_kings' },
        { id: 'amun_village_4', x: 83.0, y: 52.0, type: 'village', name: "Reed Marsh", factionId: 'wh_tomb_kings' },
        { id: 'amun_ruins_3', x: 77.0, y: 58.0, type: 'ruins', name: "Temple of Mut (Ruined)", factionId: 'unaligned' },
        { id: 'amun_lair', x: 84.5, y: 63.0, type: 'lair', name: "Griffin's Roost", factionId: 'unaligned' },
        { id: 'amun_workshop_2', x: 81.0, y: 59.0, type: 'workshop', name: "Chariot Maker's Guild", factionId: 'wh_tomb_kings' },
        { id: 'amun_farm_2', x: 82.0, y: 62.0, type: 'farm', name: "Papyrus Marshes", factionId: 'wh_tomb_kings' },
        { id: 'amun_tower_2', x: 79.5, y: 54.0, type: 'watchtower', name: "Southern Eye", factionId: 'wh_tomb_kings' },
        { id: 'amun_inn', x: 81.2, y: 58.2, type: 'inn', name: "The Golden Ram", factionId: 'wh_tomb_kings' },
        { id: 'amun_trade', x: 80.5, y: 49.0, type: 'trade_post', name: "Nubian Gate", factionId: 'wh_araby' },
        { id: 'amun_monument', x: 83.5, y: 58.5, type: 'landmark', name: "Statue of Rameses", factionId: 'wh_tomb_kings' },
        { id: 'amun_pyramid_2', x: 78.0, y: 56.0, type: 'landmark', name: "Step Pyramid", factionId: 'wh_tomb_kings' }
    ],
    fogOfWar: [

    ]
};

// 4. HORUS (Sky / War Aspect)
export const horusData = { 
    pointsOfInterest: [
        { id: 'horus_capital', x: 72.0, y: 76.0, type: 'major_city', name: "Edfu Heights", description: "A city built on high cliffs, dedicated to the falcon god.", factionId: 'wh_tomb_kings', population: 20000, military_strength: 9 },
        { id: 'horus_temple', x: 71.5, y: 75.5, type: 'temple', name: "Temple of the Falcon", description: "Grand pylons depict victories over Seth.", factionId: 'wh_tomb_kings' },
        { id: 'horus_fort_1', x: 74.0, y: 74.0, type: 'fortress', name: "Sky-High Citadel", factionId: 'wh_tomb_kings', military_strength: 8 },
        { id: 'horus_landmark_1', x: 70.0, y: 78.0, type: 'landmark', name: "Eye of Horus", description: "A massive geoglyph visible from the sky.", factionId: 'wh_tomb_kings' },
        { id: 'horus_market', x: 72.5, y: 76.5, type: 'market', name: "Highwind Bazaar", factionId: 'wh_araby', economic_value: 6 },
        { id: 'horus_oasis_1', x: 69.0, y: 73.0, type: 'oasis', name: "Falcon's Drink", factionId: 'unaligned' },
        { id: 'horus_ruins_1', x: 76.0, y: 79.0, type: 'ruins', name: "Fallen Sky Temple", factionId: 'unaligned' },
        { id: 'horus_village_1', x: 73.0, y: 77.0, type: 'village', name: "Wingbeat", factionId: 'wh_tomb_kings' },
        { id: 'horus_mine_1', x: 68.0, y: 75.0, type: 'mine', name: "Turquoise Mines", factionId: 'wh_tomb_kings', economic_value: 5 },
        { id: 'horus_shrine_1', x: 71.0, y: 74.5, type: 'shrine', name: "Shrine of the Wing", factionId: 'wh_tomb_kings' },
        { id: 'horus_tower_1', x: 75.0, y: 76.0, type: 'tower', name: "Watcher's Spire", factionId: 'wh_tomb_kings' },
        { id: 'horus_dungeon_1', x: 70.5, y: 80.0, type: 'dungeon_entrance', name: "Pit of Vipers", factionId: 'unaligned' },
        { id: 'horus_farm_1', x: 72.0, y: 78.0, type: 'farm', name: "Highland Terraces", factionId: 'wh_tomb_kings' },
        { id: 'horus_workshop_1', x: 72.2, y: 76.2, type: 'workshop', name: "Fletcher's District", factionId: 'wh_tomb_kings' },
        { id: 'horus_camp_1', x: 68.0, y: 81.0, type: 'bandit_camp', name: "Sky-Pirate Roost", factionId: 'unaligned' },
        { id: 'horus_monastery', x: 74.5, y: 75.0, type: 'monastery', name: "Order of the Talon", factionId: 'wh_tomb_kings' },
        { id: 'horus_port', x: 70.0, y: 72.0, type: 'port', name: "River Landing", factionId: 'wh_tomb_kings' },
        { id: 'horus_library', x: 71.8, y: 75.8, type: 'library', name: "Scrolls of Strategy", factionId: 'wh_tomb_kings' },
        { id: 'horus_statue_1', x: 73.5, y: 75.0, type: 'landmark', name: "Golden Falcon Statue", factionId: 'wh_tomb_kings' },
        { id: 'horus_village_2', x: 75.5, y: 74.0, type: 'village', name: "Cloudrest", factionId: 'wh_tomb_kings' },
        { id: 'horus_village_3', x: 69.5, y: 79.0, type: 'village', name: "Cliffside", factionId: 'wh_tomb_kings' },
        { id: 'horus_ruins_2', x: 71.0, y: 82.0, type: 'ruins', name: "Shattered Aerie", factionId: 'unaligned' },
        { id: 'horus_oasis_2', x: 76.0, y: 77.0, type: 'oasis', name: "Blue Eye Pool", factionId: 'unaligned' },
        { id: 'horus_fort_2', x: 70.0, y: 74.0, type: 'castle', name: "Avenger's Keep", factionId: 'wh_tomb_kings', military_strength: 8 },
        { id: 'horus_mine_2', x: 68.5, y: 80.0, type: 'quarry', name: "Sky Stone Quarry", factionId: 'wh_tomb_kings' },
        { id: 'horus_tomb_1', x: 73.0, y: 79.0, type: 'graveyard', name: "Hero's Rest", factionId: 'wh_tomb_kings' },
        { id: 'horus_town_1', x: 74.0, y: 78.0, type: 'town', name: "Behdet", factionId: 'wh_tomb_kings' },
        { id: 'horus_shrine_2', x: 72.0, y: 74.0, type: 'shrine', name: "Altar of the Sky", factionId: 'wh_tomb_kings' },
        { id: 'horus_cave', x: 68.0, y: 77.0, type: 'cave_entrance', name: "Windy Caverns", factionId: 'unaligned' },
        { id: 'horus_bridge', x: 71.0, y: 76.0, type: 'bridge', name: "Skybridge", factionId: 'wh_tomb_kings' },
        { id: 'horus_village_4', x: 75.0, y: 78.5, type: 'village', name: "Featherfall", factionId: 'wh_tomb_kings' },
        { id: 'horus_ruins_3', x: 69.0, y: 75.0, type: 'ruins', name: "Old Aviary", factionId: 'unaligned' },
        { id: 'horus_lair', x: 76.5, y: 80.0, type: 'lair', name: "Roc's Nest", factionId: 'unaligned' },
        { id: 'horus_workshop_2', x: 71.5, y: 77.0, type: 'workshop', name: "Spear Makers", factionId: 'wh_tomb_kings' },
        { id: 'horus_farm_2', x: 73.0, y: 80.0, type: 'farm', name: "High Pastures", factionId: 'wh_tomb_kings' },
        { id: 'horus_tower_2', x: 69.0, y: 76.0, type: 'watchtower', name: "Storm Watch", factionId: 'wh_tomb_kings' },
        { id: 'horus_inn', x: 72.2, y: 76.0, type: 'inn', name: "The Soaring Hawk", factionId: 'wh_tomb_kings' },
        { id: 'horus_trade', x: 70.0, y: 71.0, type: 'trade_post', name: "River Trade Outpost", factionId: 'wh_araby' },
        { id: 'horus_monument', x: 74.0, y: 75.0, type: 'landmark', name: "Pillar of Victory", factionId: 'wh_tomb_kings' },
        { id: 'horus_battlefield', x: 71.0, y: 81.0, type: 'battlefield', name: "Plain of Conflict", description: "Site of a legendary battle against chaos.", factionId: 'unaligned' }
    ],
    fogOfWar: [

    ]
};

// 5. TOTH (Wisdom / Moon Aspect)
export const tothData = { 
    pointsOfInterest: [
        { id: 'toth_capital', x: 40.0, y: 60.0, type: 'major_city', name: "Hermopolis Magna", description: "City of scribes, scholars, and magic.", factionId: 'wh_tomb_kings', population: 35000, economic_value: 8, military_strength: 6 },
        { id: 'toth_library_great', x: 40.5, y: 60.5, type: 'library', name: "Grand Library of Toth", description: "Holds the accumulated knowledge of ages.", factionId: 'wh_tomb_kings', libraryStockKey: 'toth' },
        { id: 'toth_temple', x: 39.5, y: 59.5, type: 'temple', name: "Sanctuary of the Ibis", factionId: 'wh_tomb_kings' },
        { id: 'toth_tower_1', x: 42.0, y: 62.0, type: 'mages_tower', name: "Moonlit Spire", factionId: 'mages_guild' },
        { id: 'toth_market', x: 40.0, y: 60.2, type: 'market', name: "Scroll Market", factionId: 'wh_araby', economic_value: 7 },
        { id: 'toth_oasis_1', x: 37.0, y: 58.0, type: 'oasis', name: "Inkwell Pool", description: "Water dark as ink, used for divination.", factionId: 'unaligned' },
        { id: 'toth_ruins_1', x: 43.0, y: 63.0, type: 'ruins', name: "Archive of Dust", factionId: 'unaligned' },
        { id: 'toth_village_1', x: 38.0, y: 59.0, type: 'village', name: "Papyrusville", factionId: 'wh_tomb_kings' },
        { id: 'toth_mine_1', x: 36.0, y: 57.0, type: 'mine', name: "Silver Vein", factionId: 'wh_tomb_kings', economic_value: 6 },
        { id: 'toth_shrine_1', x: 41.0, y: 61.0, type: 'shrine', name: "Shrine of Measurements", factionId: 'wh_tomb_kings' },
        { id: 'toth_tower_2', x: 39.0, y: 58.5, type: 'tower', name: "Astronomer's Watch", factionId: 'wh_tomb_kings' },
        { id: 'toth_dungeon_1', x: 44.0, y: 62.5, type: 'dungeon_entrance', name: "Forbidden Stacks", factionId: 'unaligned' },
        { id: 'toth_farm_1', x: 37.5, y: 60.0, type: 'farm', name: "Ibis Marshes", factionId: 'wh_tomb_kings' },
        { id: 'toth_workshop_1', x: 40.2, y: 60.8, type: 'workshop', name: "Scribe's Guild", factionId: 'wh_tomb_kings' },
        { id: 'toth_camp_1', x: 35.5, y: 56.5, type: 'bandit_camp', name: "Heretic's Hideaway", factionId: 'unaligned' },
        { id: 'toth_monastery', x: 41.5, y: 59.0, type: 'monastery', name: "Keepers of the Calendar", factionId: 'wh_tomb_kings' },
        { id: 'toth_port', x: 38.5, y: 57.0, type: 'port', name: "Reed Boat Dock", factionId: 'wh_tomb_kings' },
        { id: 'toth_landmark_1', x: 40.0, y: 61.5, type: 'landmark', name: "Baboon Rock", description: "Natural rock formation shaped like a baboon.", factionId: 'wh_tomb_kings' },
        { id: 'toth_village_2', x: 42.5, y: 61.5, type: 'village', name: "Moonside", factionId: 'wh_tomb_kings' },
        { id: 'toth_village_3', x: 36.5, y: 58.5, type: 'village', name: "Quill's Rest", factionId: 'wh_tomb_kings' },
        { id: 'toth_ruins_2', x: 39.0, y: 62.0, type: 'ruins', name: "Forgotten Observatory", factionId: 'unaligned' },
        { id: 'toth_oasis_2', x: 43.5, y: 60.0, type: 'oasis', name: "Silent Spring", factionId: 'unaligned' },
        { id: 'toth_fort_1', x: 38.0, y: 57.5, type: 'fortress', name: "Gate of Knowledge", factionId: 'wh_tomb_kings', military_strength: 7 },
        { id: 'toth_mine_2', x: 44.0, y: 61.0, type: 'quarry', name: "Alabaster Quarry", factionId: 'wh_tomb_kings' },
        { id: 'toth_tomb_1', x: 41.0, y: 62.5, type: 'graveyard', name: "Crypt of Sages", factionId: 'wh_tomb_kings' },
        { id: 'toth_town_1', x: 42.0, y: 60.0, type: 'town', name: "Ashmunein", factionId: 'wh_tomb_kings' },
        { id: 'toth_shrine_2', x: 39.0, y: 59.0, type: 'shrine', name: "Altar of the Moon", factionId: 'wh_tomb_kings' },
        { id: 'toth_cave', x: 36.0, y: 59.5, type: 'cave_entrance', name: "Whispering Cave", factionId: 'unaligned' },
        { id: 'toth_bridge', x: 40.0, y: 58.0, type: 'bridge', name: "Bridge of Thoth", factionId: 'wh_tomb_kings' },
        { id: 'toth_village_4', x: 43.0, y: 62.5, type: 'village', name: "Starlight", factionId: 'wh_tomb_kings' },
        { id: 'toth_ruins_3', x: 37.0, y: 61.0, type: 'ruins', name: "Library of Ash", factionId: 'unaligned' },
        { id: 'toth_lair', x: 42.5, y: 63.5, type: 'lair', name: "Sphinx's Riddle", factionId: 'unaligned' },
        { id: 'toth_workshop_2', x: 40.8, y: 60.2, type: 'workshop', name: "Alchemist's Row", factionId: 'wh_tomb_kings' },
        { id: 'toth_farm_2', x: 39.0, y: 61.0, type: 'farm', name: "Sacred Groves", factionId: 'wh_tomb_kings' },
        { id: 'toth_tower_3', x: 37.5, y: 59.5, type: 'watchtower', name: "Owl's Perch", factionId: 'wh_tomb_kings' },
        { id: 'toth_inn', x: 40.2, y: 60.0, type: 'inn', name: "The Clever Ibis", factionId: 'wh_tomb_kings' },
        { id: 'toth_trade', x: 35.8, y: 57.5, type: 'trade_post', name: "Western Desert Post", factionId: 'wh_araby' },
        { id: 'toth_monument', x: 41.0, y: 59.5, type: 'landmark', name: "Obelisk of Thoth", factionId: 'wh_tomb_kings' },
        { id: 'toth_academy', x: 40.0, y: 61.0, type: 'academy', name: "Academy of Magic", factionId: 'mages_guild' },
        { id: 'toth_landmark_2', x: 43.0, y: 63.0, type: 'landmark', name: "The Silver Gate", factionId: 'wh_tomb_kings' }
    ],
    fogOfWar: [
    ]
};

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
