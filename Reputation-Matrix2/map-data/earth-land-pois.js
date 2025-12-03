
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
            population: 8500,
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
            population: 600,
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
        { id: 'na_liberty', x: 49.0, y: 47.5, type: 'major_city', name: 'Liberty Metropolis', description: 'A towering city of steel and glass, bustling with trade and innovation.', factionId: 'unaligned', population: 80000, economic_value: 9, age_of_antiquity: 2 },
        { id: 'na_canyon', x: 45.5, y: 48.5, type: 'landmark', name: 'The Grand Rift', description: 'A massive geological scar running through the continent.', factionId: 'unaligned', population: 50, economic_value: 4, age_of_antiquity: 10 },
        { id: 'na_yellowstone', x: 46.0, y: 46.5, type: 'volcano', name: 'Geyser Basin', description: 'A land of bubbling mud and shooting water.', factionId: 'unaligned', population: 0, economic_value: 2, age_of_antiquity: 10 },
        { id: 'na_lakes', x: 47.5, y: 46.0, type: 'waterfall', name: 'Great Freshwater Seas', description: 'A collection of massive interconnected lakes.', factionId: 'unaligned', population: 2000, economic_value: 6, age_of_antiquity: 5 },
        { id: 'na_capital', x: 48.5, y: 48.0, type: 'capital_city', name: 'Federal District', description: 'The seat of government for the local federation.', factionId: 'north_america', population: 7000, economic_value: 7, age_of_antiquity: 3 },
        { id: 'na_hollywood', x: 44.5, y: 49.0, type: 'town', name: 'Starfall City', description: 'Where dreams are made and stories are told.', factionId: 'unaligned', population: 40000, economic_value: 8, age_of_antiquity: 2 },
        { id: 'na_bayou', x: 47.0, y: 50.0, type: 'swamp', name: 'Deep Bayou', description: 'Mysterious swamps filled with ancient magic.', factionId: 'unaligned', population: 500, economic_value: 3, age_of_antiquity: 6 },
        { id: 'na_rockies', x: 45.0, y: 47.0, type: 'mountain_pass', name: 'Spine of the World', description: 'High peaks that divide the continent.', factionId: 'unaligned', population: 100, economic_value: 2, age_of_antiquity: 10 },
        { id: 'na_corn', x: 47.0, y: 48.0, type: 'farm', name: 'The Heartland', description: 'Endless fields of golden grain.', factionId: 'unaligned', population: 1500, economic_value: 5, age_of_antiquity: 4 },
        { id: 'na_north_forest', x: 46.0, y: 45.5, type: 'forest', name: 'Boreal Expanse', description: 'Cold, pine-covered wilderness.', factionId: 'unaligned', population: 5000, economic_value: 3, age_of_antiquity: 10 }
    ],
    fogOfWar: [

    ]
};

export const southAmericaData = { pointsOfInterest: [], fogOfWar: [] };

export const africaData = {
    pointsOfInterest: [
        { id: 'af_pyramids', x: 51.0, y: 54.0, type: 'landmark', name: 'Great Pyramids', description: 'Tombs of ancient kings rising from the sands.', factionId: 'africa', population: 5000, economic_value: 6, age_of_antiquity: 10 },
        { id: 'af_nile', x: 51.5, y: 55.0, type: 'resource', name: 'Lifeblood River', description: 'The longest river, bringing life to the desert.', factionId: 'unaligned', population: 1000, economic_value: 7, age_of_antiquity: 10 },
        { id: 'af_sahara', x: 49.5, y: 54.5, type: 'resource', name: 'Sea of Sand', description: 'An inhospitable expanse of heat and dunes.', factionId: 'unaligned', population: 1000, economic_value: 2, age_of_antiquity: 10 },
        { id: 'af_victoria', x: 52.5, y: 56.0, type: 'waterfall', name: 'Thunderous Falls', description: 'A massive curtain of falling water.', factionId: 'unaligned', population: 5000, economic_value: 4, age_of_antiquity: 10 },
        { id: 'af_kilimanjaro', x: 53.0, y: 55.5, type: 'mountain_pass', name: 'Snow-Capped Giant', description: 'A lone mountain rising from the savannah.', factionId: 'unaligned', population: 2000, economic_value: 3, age_of_antiquity: 10 },
        { id: 'af_cape', x: 52.0, y: 57.0, type: 'port', name: 'Table Bay', description: 'A strategic port at the southern tip.', factionId: 'africa', population: 4000, economic_value: 7, age_of_antiquity: 4 },
        { id: 'af_congo', x: 51.0, y: 55.5, type: 'forest', name: 'Emerald Heart', description: 'A dense, impenetrable rainforest.', factionId: 'unaligned', population: 200, economic_value: 5, age_of_antiquity: 10 },
        { id: 'af_serengeti', x: 52.5, y: 55.0, type: 'resource', name: 'Great Plains', description: 'Teeming with wildlife and migration herds.', factionId: 'unaligned', population: 5000, economic_value: 4, age_of_antiquity: 10 },
        { id: 'af_madagascar', x: 54.0, y: 56.5, type: 'landmark', name: 'Lemur Island', description: 'An island of unique biodiversity.', factionId: 'unaligned', population: 2500, economic_value: 3, age_of_antiquity: 8 },
        { id: 'af_timbuktu', x: 49.0, y: 55.0, type: 'library', name: 'Scholars\' Oasis', description: 'A historic center of learning and manuscripts.', factionId: 'africa', population: 500, economic_value: 4, age_of_antiquity: 9 }
    ],
    fogOfWar: [

    ]
};

export const asiaData = {
    pointsOfInterest: [
        { id: 'as_forbidden', x: 55.0, y: 48.0, type: 'capital_city', name: 'The Jade Palace', description: 'An ancient imperial complex at the heart of the east.', factionId: 'asia', population: 20000, economic_value: 8, age_of_antiquity: 9 },
        { id: 'as_wall', x: 54.0, y: 47.5, type: 'fortress', name: 'The Great Barrier', description: 'A massive stone wall stretching for thousands of miles.', factionId: 'asia', population: 100, economic_value: 2, age_of_antiquity: 9 },
        { id: 'as_himalaya', x: 52.0, y: 49.5, type: 'mountain_pass', name: 'Roof of the World', description: 'The highest peaks in existence, shrouded in mystery.', factionId: 'unaligned', population: 500, economic_value: 1, age_of_antiquity: 10 },
        { id: 'as_taj', x: 51.5, y: 50.5, type: 'landmark', name: 'Marble Mausoleum', description: 'A stunning white monument to lost love.', factionId: 'unaligned', population: 5000, economic_value: 5, age_of_antiquity: 6 },
        { id: 'as_tokyo', x: 57.0, y: 48.5, type: 'major_city', name: 'Neon Harbor', description: 'A futuristic city that never sleeps.', factionId: 'asia', population: 140000, economic_value: 10, age_of_antiquity: 1 },
        { id: 'as_angkor', x: 55.5, y: 51.5, type: 'ruins', name: 'Jungle Temples', description: 'Ancient stone structures reclaimed by nature.', factionId: 'unaligned', population: 0, economic_value: 3, age_of_antiquity: 9 },
        { id: 'as_siberia', x: 54.0, y: 46.0, type: 'outpost', name: 'Frozen Wastes', description: 'A harsh, cold land of exile and resources.', factionId: 'unaligned', population: 5000, economic_value: 6, age_of_antiquity: 10 },
        { id: 'as_gobi', x: 53.0, y: 48.0, type: 'resource', name: 'Endless Dunes', description: 'A vast, cold desert.', factionId: 'unaligned', population: 1000, economic_value: 2, age_of_antiquity: 10 },
        { id: 'as_fuji', x: 56.5, y: 49.0, type: 'volcano', name: 'Sacred Peak', description: 'A perfect cone volcano worshipped by locals.', factionId: 'unaligned', population: 0, economic_value: 4, age_of_antiquity: 10 },
        { id: 'as_silk', x: 52.5, y: 48.5, type: 'trade_post', name: 'Silk Road Hub', description: 'A historic meeting point for merchants of east and west.', factionId: 'unaligned', population: 200, economic_value: 6, age_of_antiquity: 7 }
    ],
    fogOfWar: [

    ]
};

export const azaniaData = { pointsOfInterest: [], fogOfWar: [] };
export const terraNovaData = { pointsOfInterest: [], fogOfWar: [] };

// --- EGYPTIAN / DIVINE REALMS ---

export const atenData = { 
    pointsOfInterest: [
        { id: 'aten_capital', x: 36.5, y: 38.0, type: 'capital_city', name: "Akhetaten Reborn", description: "The radiant capital dedicated strictly to the sun disc, built of gleaming limestone that blinds the unworthy.", factionId: 'wh_tomb_kings', population: 45000, economic_value: 9, military_strength: 8 },
        { id: 'aten_temple_sun', x: 37.2, y: 37.5, type: 'temple', name: "Great Temple of the Disc", description: "A massive roofless temple allowing the sun's rays to touch every altar within.", factionId: 'wh_tomb_kings', population: 2000, economic_value: 5 },
        { id: 'aten_solar_array', x: 35.8, y: 39.1, type: 'landmark', name: "Solar Mirror Array", description: "Ancient golden mirrors focusing light to a central tower, powering city wards.", factionId: 'wh_tomb_kings' },
        { id: 'aten_market', x: 36.0, y: 37.8, type: 'market', name: "Bazaar of Noon", description: "A bustling market that only opens when the sun is at its zenith.", factionId: 'wh_araby', economic_value: 7 },
        { id: 'aten_oasis_1', x: 34.5, y: 35.0, type: 'oasis', name: "Ray's Respite", description: "A shimmering pool said to cure diseases if bathed in at sunrise.", factionId: 'unaligned' },
        { id: 'aten_fort_1', x: 41.5, y: 33.0, type: 'fortress', name: "Fort Dawn", description: "Guards the eastern approach against creatures of the shadow.", factionId: 'wh_tomb_kings', military_strength: 7 },
        { id: 'aten_ruins_1', x: 31.0, y: 39.0, type: 'ruins', name: "Old Amarna Ruins", description: "Remnants of a heretic city destroyed by traditionalists ages ago.", factionId: 'unaligned' },
        { id: 'aten_village_1', x: 38.0, y: 36.0, type: 'village', name: "Sun-Baker's Hamlet", description: "Known for producing sun-dried bricks of exceptional durability.", factionId: 'wh_tomb_kings' },
        { id: 'aten_mine_1', x: 32.5, y: 41.0, type: 'mine', name: "Gold Vein Quarry", description: "Extracts pure gold used exclusively for temple adornments.", factionId: 'wh_tomb_kings', economic_value: 6 },
        { id: 'aten_shrine_1', x: 40.0, y: 34.0, type: 'shrine', name: "Shrine of the First Light", description: "Marks the spot where the first ray of sun touches the land each year.", factionId: 'wh_tomb_kings' },
        { id: 'aten_tower_1', x: 35.0, y: 41.5, type: 'tower', name: "Gleaming Spire", description: "A watchtower plated in electrum.", factionId: 'wh_tomb_kings' },
        { id: 'aten_dungeon_1', x: 31.5, y: 38.0, type: 'dungeon_entrance', name: "Crypt of the Eclipsed", description: "Where enemies of the sun are interred in eternal darkness.", factionId: 'unaligned' },
        { id: 'aten_farm_1', x: 37.5, y: 39.5, type: 'farm', name: "Golden Wheat Fields", description: "Vast fields that seem to glow with an inner light.", factionId: 'wh_tomb_kings' },
        { id: 'aten_workshop_1', x: 36.2, y: 38.5, type: 'workshop', name: "Goldsmith's Row", description: "Artisans crafting intricate solar jewelry.", factionId: 'wh_tomb_kings' },
        { id: 'aten_camp_1', x: 42.0, y: 35.0, type: 'bandit_camp', name: "Eclipse Raiders Camp", description: "Bandits who strike during sandstorms.", factionId: 'unaligned' },
        { id: 'aten_monastery', x: 33.0, y: 43.0, type: 'monastery', name: "Order of the Solar Disc", description: "Monks who meditate by staring into the sun.", factionId: 'wh_tomb_kings' },
        { id: 'aten_port', x: 39.0, y: 37.0, type: 'port', name: "Sunriver Docks", description: "Small river port for solar barges.", factionId: 'wh_tomb_kings' },
        { id: 'aten_library', x: 36.8, y: 37.2, type: 'library', name: "Archives of Light", description: "Scrolls detailing the cycles of the sun.", factionId: 'wh_tomb_kings' },
        { id: 'aten_statue', x: 35.5, y: 36.5, type: 'landmark', name: "Colossus of Aten", description: "A giant statue with a sun-disk head.", factionId: 'wh_tomb_kings' },
        { id: 'aten_village_2', x: 39.5, y: 35.5, type: 'village', name: "Mornington", description: "Farmers who wake before dawn.", factionId: 'wh_tomb_kings' },
        { id: 'aten_village_3', x: 33.5, y: 40.0, type: 'village', name: "Duskwatch", description: "A settlement paranoid about the coming night.", factionId: 'wh_tomb_kings' },
        { id: 'aten_ruins_2', x: 41.0, y: 33.5, type: 'ruins', name: "Fallen Obelisk", description: "A massive shattered stone marker.", factionId: 'unaligned' },
        { id: 'aten_oasis_2', x: 32.0, y: 42.0, type: 'oasis', name: "Mirage Pool", description: "Water that vanishes when approached by the impure.", factionId: 'unaligned' },
        { id: 'aten_fort_2', x: 30.8, y: 43.0, type: 'outpost', name: "Western Watch", description: "Guards the desert frontier.", factionId: 'wh_tomb_kings' },
        { id: 'aten_mine_2', x: 41.5, y: 32.5, type: 'quarry', name: "Sandstone Cut", description: "Source of the city's building blocks.", factionId: 'wh_tomb_kings' },
        { id: 'aten_tomb_1', x: 34.0, y: 41.0, type: 'graveyard', name: "Valley of Nobles", description: "Tombs of the sun-priests.", factionId: 'wh_tomb_kings' },
        { id: 'aten_town_1', x: 35.0, y: 35.0, type: 'town', name: "Heliopolis Minor", description: "A center of solar theology.", factionId: 'wh_tomb_kings' },
        { id: 'aten_shrine_2', x: 37.0, y: 40.0, type: 'shrine', name: "Altar of Noon", description: "Offerings are burnt here daily.", factionId: 'wh_tomb_kings' },
        { id: 'aten_cave', x: 31.0, y: 37.5, type: 'cave_entrance', name: "Sunless Grotto", description: "A dark damp cave avoiding the heat.", factionId: 'unaligned' },
        { id: 'aten_bridge', x: 38.5, y: 37.5, type: 'bridge', name: "Arch of Ra", description: "A golden bridge spanning a dry wadi.", factionId: 'wh_tomb_kings' },
        { id: 'aten_village_4', x: 34.8, y: 34.8, type: 'village', name: "Beam's End", description: "A small hamlet at the edge of the cultivable land.", factionId: 'wh_tomb_kings' },
        { id: 'aten_ruins_3', x: 40.5, y: 34.0, type: 'ruins', name: "Shattered Sphinx", description: "An enigmatic statue broken in half.", factionId: 'unaligned' },
        { id: 'aten_lair', x: 30.5, y: 41.0, type: 'lair', name: "Scorpion's Nest", description: "Infested with giant arachnids.", factionId: 'unaligned' },
        { id: 'aten_workshop_2', x: 36.0, y: 38.8, type: 'workshop', name: "Chariot Works", description: "Builders of light war chariots.", factionId: 'wh_tomb_kings' },
        { id: 'aten_farm_2', x: 38.0, y: 39.0, type: 'farm', name: "Flax Fields", description: "Produces linen for priestly robes.", factionId: 'wh_tomb_kings' },
        { id: 'aten_tower_2', x: 33.0, y: 36.0, type: 'watchtower', name: "Glare Tower", description: "Uses mirrors to blind attackers.", factionId: 'wh_tomb_kings' },
        { id: 'aten_inn', x: 36.2, y: 37.5, type: 'inn', name: "The Gilded Goblet", description: "Serves wine in golden cups.", factionId: 'wh_tomb_kings' },
        { id: 'aten_trade', x: 35.8, y: 35.5, type: 'trade_post', name: "Caravan Stop Alpha", description: "Major stop for salt traders.", factionId: 'wh_araby' },
        { id: 'aten_monument', x: 39.0, y: 33.0, type: 'landmark', name: "Pillar of Akhenaten", description: "Commemorating the heretic king.", factionId: 'wh_tomb_kings' },
        { id: 'aten_pyramid', x: 35.0, y: 40.0, type: 'landmark', name: "Pyramid of the Sun", description: "A smooth-sided pyramid capped with gold.", factionId: 'wh_tomb_kings', military_strength: 9 },
        { id: 'aten_outpost_1', x: 31.5, y: 36.5, type: 'outpost', name: "Dune Watch", description: "Scanning the endless sands.", factionId: 'wh_tomb_kings' },
        { id: 'aten_ruins_4', x: 42.2, y: 34.5, type: 'ruins', name: "Sunken Library", description: "Swallowed by the sands.", factionId: 'unaligned' },
        { id: 'aten_shrine_3', x: 36.5, y: 42.5, type: 'shrine', name: "Ray's Touch", description: "A simple stone altar on a hill.", factionId: 'wh_tomb_kings' },
        { id: 'aten_village_5', x: 32.5, y: 39.5, type: 'village', name: "Brightwater", description: "Built around a clear spring.", factionId: 'wh_tomb_kings' }
    ],
    fogOfWar: [

    ]
};

// 2. ANUBIS (Death / Underworld Aspect)
export const anubisData = { 
    pointsOfInterest: [
        { id: 'anubis_capital', x: 46.0, y: 20.0, type: 'major_city', name: "Duat's Gate", description: "A city shrouded in perpetual twilight, the center of the embalming arts.", factionId: 'wh_tomb_kings', population: 300, economic_value: 7, military_strength: 9 },
        { id: 'anubis_necropolis', x: 45.0, y: 19.0, type: 'graveyard', name: "Necropolis of Scales", description: "Vast burial grounds guarded by jackal-headed statues.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_temple', x: 46.5, y: 20.5, type: 'temple', name: "Sanctum of the Weigher", description: "Where souls are judged against the feather of truth.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_dungeon_1', x: 44.0, y: 21.5, type: 'dungeon_entrance', name: "Tomb of the Unworthy", description: "Those who failed judgment roam here.", factionId: 'unaligned' },
        { id: 'anubis_ruins_1', x: 47.5, y: 21.0, type: 'ruins', name: "Crumbling Mastaba", description: "An ancient tomb, looted ages ago.", factionId: 'unaligned' },
        { id: 'anubis_fort_1', x: 43.0, y: 18.5, type: 'fortress', name: "Black Stone Keep", description: "A fortress made of obsidian.", factionId: 'wh_tomb_kings', military_strength: 8 },
        { id: 'anubis_village_1', x: 45.5, y: 18.0, type: 'village', name: "Embalmer's Rest", description: "Home to the guild of mummifiers.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_workshop_1', x: 46.2, y: 19.8, type: 'workshop', name: "Linen Weavers", description: "Produces high quality burial shrouds.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_shrine_1', x: 48.0, y: 19.5, type: 'shrine', name: "Shrine of Anput", description: "Dedicated to the female aspect of Anubis.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_landmark_1', x: 44.5, y: 20.5, type: 'landmark', name: "The Black Sphinx", description: "A statue carved from jet, eyes glowing green.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_oasis', x: 47.0, y: 18.5, type: 'oasis', name: "Soul-Well", description: "Water glows faintly pale in the dark.", factionId: 'unaligned' },
        { id: 'anubis_mine_1', x: 43.5, y: 19.0, type: 'mine', name: "Natron Pits", description: "Essential salts for mummification.", factionId: 'wh_tomb_kings', economic_value: 6 },
        { id: 'anubis_tower_1', x: 45.0, y: 21.0, type: 'watchtower', name: "Vigil of the Dead", description: "Guards against grave robbers.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_camp_1', x: 48.0, y: 22.0, type: 'bandit_camp', name: "Grave Robber's Hideout", description: "Scum who prey on the dead.", factionId: 'unaligned' },
        { id: 'anubis_lair_1', x: 43.0, y: 20.0, type: 'lair', name: "Ammit's Den", description: "Lair of a crocodile-lion-hippo chimera.", factionId: 'unaligned' },
        { id: 'anubis_town_1', x: 47.0, y: 22.5, type: 'town', name: "Jackal's Crossing", description: "A town obsessed with canine imagery.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_ruins_2', x: 44.0, y: 18.0, type: 'ruins', name: "Forgotten Hypogeum", description: "Underground chambers filled with dust.", factionId: 'unaligned' },
        { id: 'anubis_shrine_2', x: 46.8, y: 21.5, type: 'shrine', name: "Altar of Silence", description: "A place for quiet contemplation of death.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_market', x: 46.0, y: 20.2, type: 'market', name: "Market of Memories", description: "Traders sell urns and mementos.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_library', x: 45.8, y: 19.5, type: 'library', name: "Scrolls of the Dead", description: "Contains spells for the afterlife.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_island_town', x: 44.0, y: 21.0, type: 'town', name: "Isle of Passing", description: "Located on a river of black water.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_village_2', x: 48.0, y: 20.0, type: 'village', name: "Canopic Creek", description: "Potters specializing in visceral jars.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_bridge', x: 45.2, y: 20.8, type: 'bridge', name: "Bridge of Judgment", description: "A narrow bridge spanning a chasm.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_cave', x: 42.8, y: 19.5, type: 'cave_entrance', name: "Echoing Cavern", description: "Voices of the past linger here.", factionId: 'unaligned' },
        { id: 'anubis_monastery', x: 47.5, y: 19.0, type: 'monastery', name: "Keepers of the Veil", description: "Monks who study the threshold of life.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_farm', x: 46.5, y: 18.0, type: 'farm', name: "Lotus Fields", description: "Black lotuses grown for rituals.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_trade', x: 45.5, y: 22.0, type: 'trade_post', name: "Underworld Exchange", description: "Smugglers trading rare artifacts.", factionId: 'wh_araby' },
        { id: 'anubis_workshop_2', x: 46.0, y: 19.2, type: 'workshop', name: "Sarcophagus Carvers", description: "Master sculptors of stone coffins.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_statue_1', x: 43.8, y: 18.8, type: 'landmark', name: "Statue of Upuaut", description: "The opener of ways.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_outpost', x: 48.2, y: 21.8, type: 'outpost', name: "Border Watch", description: "Patrols the edge of the cursed lands.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_ruins_3', x: 44.5, y: 17.8, type: 'ruins', name: "Buried Temple", description: "Only the roof remains visible.", factionId: 'unaligned' },
        { id: 'anubis_dungeon_2', x: 47.2, y: 20.8, type: 'dungeon_entrance', name: "Labyrinth of Souls", description: "A maze designed to trap grave robbers.", factionId: 'unaligned' },
        { id: 'anubis_tower_2', x: 43.2, y: 21.2, type: 'tower', name: "Obsidian Spire", description: "Absorbs light.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_village_3', x: 45.0, y: 17.8, type: 'village', name: "Mourner's End", description: "Professional wailers live here.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_inn', x: 46.2, y: 20.8, type: 'inn', name: "The Silent Jackal", description: "A quiet inn for weary travelers.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_quarry', x: 42.5, y: 19.5, type: 'quarry', name: "Black Granite Quarry", description: "Source of the region's dark stone.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_landmark_2', x: 48.0, y: 18.5, type: 'landmark', name: "Gate of the West", description: "Symbolic entrance to the afterlife.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_shrine_3', x: 44.8, y: 21.8, type: 'shrine', name: "Shrine of Passing", description: "Where final goodbyes are said.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_village_4', x: 47.8, y: 22.2, type: 'village', name: "Dusk's Edge", description: "On the border of the livable lands.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_fort_2', x: 43.5, y: 18.2, type: 'castle', name: "Citadel of Bone", description: "Decorated with skeletal motifs.", factionId: 'wh_tomb_kings', military_strength: 9 },
        { id: 'anubis_ruins_4', x: 46.8, y: 17.5, type: 'ruins', name: "Collapsed Tomb", description: "Unstable ground.", factionId: 'unaligned' },
        { id: 'anubis_outpost_2', x: 42.2, y: 20.2, type: 'outpost', name: "Shadowguard", description: "Elite warriors of Anubis.", factionId: 'wh_tomb_kings' },
        { id: 'anubis_lair_2', x: 48.5, y: 21.5, type: 'lair', name: "Ghouls' Pit", description: "Flesh eaters dwell here.", factionId: 'unaligned' }
    ],
    fogOfWar: [

    ]
};

// 3. AMUN-RA (King of Gods / Power Aspect)
export const amunRaData = { 
    pointsOfInterest: [
        { id: 'amun_capital', x: 81.0, y: 58.0, type: 'capital_city', name: "Thebes Aeterna", description: "The majestic capital of the Gods' domain, filled with colossal statues and avenues of sphinxes.", factionId: 'wh_tomb_kings', population: 600, economic_value: 10, military_strength: 10 },
        { id: 'amun_temple_great', x: 80.5, y: 57.0, type: 'temple', name: "Great Temple of Karnak", description: "Massive complex of pillars and halls dedicated to Amun.", factionId: 'wh_tomb_kings', population: 5000 },
        { id: 'amun_fort_1', x: 83.0, y: 55.0, type: 'fortress', name: "Ram's Head Bastion", description: "Heavily fortified stronghold guarding the northern pass.", factionId: 'wh_tomb_kings', military_strength: 9 },
        { id: 'amun_pyramid_1', x: 79.5, y: 60.0, type: 'landmark', name: "Pyramid of Amun", description: "A towering structure capped with solid gold.", factionId: 'wh_tomb_kings' },
        { id: 'amun_market', x: 81.5, y: 58.5, type: 'market', name: "Golden Avenue Market", description: "Trade hub for luxury goods and spices.", factionId: 'wh_araby', economic_value: 8 },
        { id: 'amun_oasis_1', x: 78.0, y: 52.0, type: 'oasis', name: "Hidden Lake", description: "Sacred pool for the temple priests.", factionId: 'unaligned' },
        { id: 'amun_ruins_1', x: 84.0, y: 62.0, type: 'ruins', name: "Old Palace Ruins", description: "Remains of a forgotten dynasty.", factionId: 'unaligned' },
        { id: 'amun_village_1', x: 82.0, y: 54.0, type: 'village', name: "Pillarton", description: "Home to the stone masons who maintain the temples.", factionId: 'wh_tomb_kings' },
        { id: 'amun_mine_1', x: 85.0, y: 59.0, type: 'mine', name: "Electrum Mines", description: "Source of the precious alloy.", factionId: 'wh_tomb_kings', economic_value: 7 },
        { id: 'amun_shrine_1', x: 79.0, y: 55.0, type: 'shrine', name: "Shrine of the Hidden One", description: "A small, quiet shrine to Amun.", factionId: 'wh_tomb_kings' },
        { id: 'amun_tower_1', x: 83.5, y: 57.0, type: 'tower', name: "Obelisk of Power", description: "Inscribed with spells of protection.", factionId: 'wh_tomb_kings' },
        { id: 'amun_dungeon_1', x: 85.5, y: 61.0, type: 'dungeon_entrance', name: "Vault of Chaos", description: "Sealed prison of ancient demons.", factionId: 'unaligned' },
        { id: 'amun_farm_1', x: 80.0, y: 53.0, type: 'farm', name: "Nile's Gift Farms", description: "Extremely fertile lands along the river.", factionId: 'wh_tomb_kings' },
        { id: 'amun_workshop_1', x: 81.2, y: 58.8, type: 'workshop', name: "Royal Stonemasons", description: "Creates statues for the king.", factionId: 'wh_tomb_kings' },
        { id: 'amun_camp_1', x: 75.0, y: 64.0, type: 'bandit_camp', name: "Sandstorm Raiders", description: "Nomads who reject the King's rule.", factionId: 'unaligned' },
        { id: 'amun_monastery', x: 78.5, y: 61.0, type: 'monastery', name: "Priests of the Ram", description: "Devoted followers of Amun.", factionId: 'wh_tomb_kings' },
        { id: 'amun_port', x: 82.5, y: 50.0, type: 'port', name: "Upper River Harbor", description: "Major port for river trade.", factionId: 'wh_tomb_kings' },
        { id: 'amun_library', x: 81.8, y: 57.5, type: 'library', name: "Library of Kings", description: "Records of royal lineages.", factionId: 'wh_tomb_kings' },
        { id: 'amun_statue_1', x: 80.0, y: 56.0, type: 'landmark', name: "Colossi of Memnon", description: "Two massive stone statues singing at dawn.", factionId: 'wh_tomb_kings' },
        { id: 'amun_village_2', x: 84.5, y: 56.0, type: 'village', name: "East Bank Village", description: "Settlement of artisans.", factionId: 'wh_tomb_kings' },
        { id: 'amun_village_3', x: 79.0, y: 63.0, type: 'village', name: "West Bank Village", description: "Settlement of tomb workers.", factionId: 'wh_tomb_kings' },
        { id: 'amun_ruins_2', x: 76.0, y: 65.0, type: 'ruins', name: "Buried Sphinx Avenue", description: "Statues half-covered in sand.", factionId: 'unaligned' },
        { id: 'amun_oasis_2', x: 83.0, y: 63.0, type: 'oasis', name: "Palm Grove", description: "Resting spot for travelers.", factionId: 'unaligned' },
        { id: 'amun_fort_2', x: 77.0, y: 50.0, type: 'castle', name: "Citadel of the Sun", description: "Royal retreat and fortress.", factionId: 'wh_tomb_kings', military_strength: 9 },
        { id: 'amun_mine_2', x: 84.0, y: 60.0, type: 'quarry', name: "Limestone Quarry", description: "Supplies stone for the capital.", factionId: 'wh_tomb_kings' },
        { id: 'amun_tomb_1', x: 78.0, y: 59.0, type: 'graveyard', name: "Valley of Kings", description: "Resting place of pharaohs.", factionId: 'wh_tomb_kings' },
        { id: 'amun_town_1', x: 82.0, y: 60.0, type: 'town', name: "Luxor Minor", description: "A wealthy suburb of the capital.", factionId: 'wh_tomb_kings' },
        { id: 'amun_shrine_2', x: 80.0, y: 50.0, type: 'shrine', name: "Altar of Creation", description: "Where the world was said to begin.", factionId: 'wh_tomb_kings' },
        { id: 'amun_cave', x: 85.0, y: 55.0, type: 'cave_entrance', name: "Gold Dust Cavern", description: "Rich mineral deposits.", factionId: 'unaligned' },
        { id: 'amun_bridge', x: 81.5, y: 56.0, type: 'bridge', name: "King's Crossing", description: "Grand bridge over the river.", factionId: 'wh_tomb_kings' },
        { id: 'amun_village_4', x: 83.0, y: 52.0, type: 'village', name: "Reed Marsh", description: "Harvesters of papyrus.", factionId: 'wh_tomb_kings' },
        { id: 'amun_ruins_3', x: 77.0, y: 58.0, type: 'ruins', name: "Temple of Mut (Ruined)", description: "Destroyed in a past war.", factionId: 'unaligned' },
        { id: 'amun_lair', x: 84.5, y: 63.0, type: 'lair', name: "Griffin's Roost", description: "Nesting ground for desert griffins.", factionId: 'unaligned' },
        { id: 'amun_workshop_2', x: 81.0, y: 59.0, type: 'workshop', name: "Chariot Maker's Guild", description: "Finest chariots in the land.", factionId: 'wh_tomb_kings' },
        { id: 'amun_farm_2', x: 82.0, y: 62.0, type: 'farm', name: "Papyrus Marshes", description: "Source of writing material.", factionId: 'wh_tomb_kings' },
        { id: 'amun_tower_2', x: 79.5, y: 54.0, type: 'watchtower', name: "Southern Eye", description: "Watches the river traffic.", factionId: 'wh_tomb_kings' },
        { id: 'amun_inn', x: 81.2, y: 58.2, type: 'inn', name: "The Golden Ram", description: "Luxury inn for merchants.", factionId: 'wh_tomb_kings' },
        { id: 'amun_trade', x: 80.5, y: 49.0, type: 'trade_post', name: "Nubian Gate", description: "Trade with the southern kingdoms.", factionId: 'wh_araby' },
        { id: 'amun_monument', x: 83.5, y: 58.5, type: 'landmark', name: "Statue of Rameses", description: "A fallen giant statue.", factionId: 'wh_tomb_kings' },
        { id: 'amun_pyramid_2', x: 78.0, y: 56.0, type: 'landmark', name: "Step Pyramid", description: "An older, stepped design.", factionId: 'wh_tomb_kings' },
        { id: 'amun_outpost_1', x: 76.5, y: 53.0, type: 'outpost', name: "Desert Edge", description: "Remote military post.", factionId: 'wh_tomb_kings' },
        { id: 'amun_ruins_4', x: 85.5, y: 64.0, type: 'ruins', name: "Sand-Swallowed City", description: "Only tower tops visible.", factionId: 'unaligned' },
        { id: 'amun_village_5', x: 80.0, y: 64.5, type: 'village', name: "Oasis Town", description: "Stopover for caravans.", factionId: 'wh_tomb_kings' }
    ],
    fogOfWar: [

    ]
};

// 4. HORUS (Sky / War Aspect)
export const horusData = { 
    pointsOfInterest: [
        { id: 'horus_capital', x: 72.0, y: 76.0, type: 'major_city', name: "Edfu Heights", description: "A city built on high cliffs, dedicated to the falcon god and aerial superiority.", factionId: 'wh_tomb_kings', population: 200, military_strength: 9 },
        { id: 'horus_temple', x: 71.5, y: 75.5, type: 'temple', name: "Temple of the Falcon", description: "Grand pylons depict victories over Seth.", factionId: 'wh_tomb_kings' },
        { id: 'horus_fort_1', x: 74.0, y: 74.0, type: 'fortress', name: "Sky-High Citadel", description: "A fortress accessible only by steep paths or flight.", factionId: 'wh_tomb_kings', military_strength: 8 },
        { id: 'horus_landmark_1', x: 70.0, y: 78.0, type: 'landmark', name: "Eye of Horus", description: "A massive geoglyph visible from the sky.", factionId: 'wh_tomb_kings' },
        { id: 'horus_market', x: 72.5, y: 76.5, type: 'market', name: "Highwind Bazaar", description: "Market famous for falcons and rare birds.", factionId: 'wh_araby', economic_value: 6 },
        { id: 'horus_oasis_1', x: 69.0, y: 73.0, type: 'oasis', name: "Falcon's Drink", description: "A pure spring high in the mountains.", factionId: 'unaligned' },
        { id: 'horus_ruins_1', x: 76.0, y: 79.0, type: 'ruins', name: "Fallen Sky Temple", description: "Ruins of a floating city that crashed.", factionId: 'unaligned' },
        { id: 'horus_village_1', x: 73.0, y: 77.0, type: 'village', name: "Wingbeat", description: "Village of falconers.", factionId: 'wh_tomb_kings' },
        { id: 'horus_mine_1', x: 68.0, y: 75.0, type: 'mine', name: "Turquoise Mines", description: "Gems the color of the sky.", factionId: 'wh_tomb_kings', economic_value: 5 },
        { id: 'horus_shrine_1', x: 71.0, y: 74.5, type: 'shrine', name: "Shrine of the Wing", description: "Offerings of feathers are made here.", factionId: 'wh_tomb_kings' },
        { id: 'horus_tower_1', x: 75.0, y: 76.0, type: 'tower', name: "Watcher's Spire", description: "Tallest tower in the region.", factionId: 'wh_tomb_kings' },
        { id: 'horus_dungeon_1', x: 70.5, y: 80.0, type: 'dungeon_entrance', name: "Pit of Vipers", description: "A deep chasm filled with snakes.", factionId: 'unaligned' },
        { id: 'horus_farm_1', x: 72.0, y: 78.0, type: 'farm', name: "Highland Terraces", description: "Farming on steep slopes.", factionId: 'wh_tomb_kings' },
        { id: 'horus_workshop_1', x: 72.2, y: 76.2, type: 'workshop', name: "Fletcher's District", description: "Produces arrows and bows.", factionId: 'wh_tomb_kings' },
        { id: 'horus_camp_1', x: 68.0, y: 81.0, type: 'bandit_camp', name: "Sky-Pirate Roost", description: "Bandits using gliders.", factionId: 'unaligned' },
        { id: 'horus_monastery', x: 74.5, y: 75.0, type: 'monastery', name: "Order of the Talon", description: "Warrior monks.", factionId: 'wh_tomb_kings' },
        { id: 'horus_port', x: 70.0, y: 72.0, type: 'port', name: "River Landing", description: "Access point for the highlands.", factionId: 'wh_tomb_kings' },
        { id: 'horus_library', x: 71.8, y: 75.8, type: 'library', name: "Scrolls of Strategy", description: "Military treatises.", factionId: 'wh_tomb_kings' },
        { id: 'horus_statue_1', x: 73.5, y: 75.0, type: 'landmark', name: "Golden Falcon Statue", description: "Shines in the sun.", factionId: 'wh_tomb_kings' },
        { id: 'horus_village_2', x: 75.5, y: 74.0, type: 'village', name: "Cloudrest", description: "Often shrouded in mist.", factionId: 'wh_tomb_kings' },
        { id: 'horus_village_3', x: 69.5, y: 79.0, type: 'village', name: "Cliffside", description: "Buildings carved into the rock face.", factionId: 'wh_tomb_kings' },
        { id: 'horus_ruins_2', x: 71.0, y: 82.0, type: 'ruins', name: "Shattered Aerie", description: "Old giant bird nests.", factionId: 'unaligned' },
        { id: 'horus_oasis_2', x: 76.0, y: 77.0, type: 'oasis', name: "Blue Eye Pool", description: "A deep blue crater lake.", factionId: 'unaligned' },
        { id: 'horus_fort_2', x: 70.0, y: 74.0, type: 'castle', name: "Avenger's Keep", description: "Named for Horus the Avenger.", factionId: 'wh_tomb_kings', military_strength: 8 },
        { id: 'horus_mine_2', x: 68.5, y: 80.0, type: 'quarry', name: "Sky Stone Quarry", description: "Mines strange floating rocks.", factionId: 'wh_tomb_kings' },
        { id: 'horus_tomb_1', x: 73.0, y: 79.0, type: 'graveyard', name: "Hero's Rest", description: "Tombs of great warriors.", factionId: 'wh_tomb_kings' },
        { id: 'horus_town_1', x: 74.0, y: 78.0, type: 'town', name: "Behdet", description: "A fortress town.", factionId: 'wh_tomb_kings' },
        { id: 'horus_shrine_2', x: 72.0, y: 74.0, type: 'shrine', name: "Altar of the Sky", description: "Open air altar.", factionId: 'wh_tomb_kings' },
        { id: 'horus_cave', x: 68.0, y: 77.0, type: 'cave_entrance', name: "Windy Caverns", description: "Howling winds echo here.", factionId: 'unaligned' },
        { id: 'horus_bridge', x: 71.0, y: 76.0, type: 'bridge', name: "Skybridge", description: "Connects two peaks.", factionId: 'wh_tomb_kings' },
        { id: 'horus_village_4', x: 75.0, y: 78.5, type: 'village', name: "Featherfall", description: "Famous for down harvesting.", factionId: 'wh_tomb_kings' },
        { id: 'horus_ruins_3', x: 69.0, y: 75.0, type: 'ruins', name: "Old Aviary", description: "Cages for giant birds.", factionId: 'unaligned' },
        { id: 'horus_lair', x: 76.5, y: 80.0, type: 'lair', name: "Roc's Nest", description: "A giant roc lives here.", factionId: 'unaligned' },
        { id: 'horus_workshop_2', x: 71.5, y: 77.0, type: 'workshop', name: "Spear Makers", description: "Crafts long spears.", factionId: 'wh_tomb_kings' },
        { id: 'horus_farm_2', x: 73.0, y: 80.0, type: 'farm', name: "High Pastures", description: "Goat herding.", factionId: 'wh_tomb_kings' },
        { id: 'horus_tower_2', x: 69.0, y: 76.0, type: 'watchtower', name: "Storm Watch", description: "Predicts weather.", factionId: 'wh_tomb_kings' },
        { id: 'horus_inn', x: 72.2, y: 76.0, type: 'inn', name: "The Soaring Hawk", description: "Ale with a view.", factionId: 'wh_tomb_kings' },
        { id: 'horus_trade', x: 70.0, y: 71.0, type: 'trade_post', name: "River Trade Outpost", description: "Goods moving upriver.", factionId: 'wh_araby' },
        { id: 'horus_monument', x: 74.0, y: 75.0, type: 'landmark', name: "Pillar of Victory", description: "Marks a battle won.", factionId: 'wh_tomb_kings' },
        { id: 'horus_battlefield', x: 71.0, y: 81.0, type: 'battlefield', name: "Plain of Conflict", description: "Site of a legendary battle against chaos.", factionId: 'unaligned' },
        { id: 'horus_outpost_1', x: 75.8, y: 73.0, type: 'outpost', name: "Eastern Lookout", description: "Watching the sunrise.", factionId: 'wh_tomb_kings' },
        { id: 'horus_ruins_4', x: 68.5, y: 82.0, type: 'ruins', name: "Crashed Airship", description: "Wreckage of a strange vessel.", factionId: 'unaligned' },
        { id: 'horus_village_5', x: 70.5, y: 73.5, type: 'village', name: "Lowland Gate", description: "Entrance to the highlands.", factionId: 'wh_tomb_kings' }
    ],
    fogOfWar: [

    ]
};

// 5. TOTH (Wisdom / Moon Aspect)
export const tothData = { 
    pointsOfInterest: [
        { id: 'toth_capital', x: 40.0, y: 60.0, type: 'major_city', name: "Hermopolis Magna", description: "City of scribes, scholars, and magic. The streets are lined with ibis statues.", factionId: 'wh_tomb_kings', population: 35000, economic_value: 8, military_strength: 6 },
        { id: 'toth_library_great', x: 40.5, y: 60.5, type: 'library', name: "Grand Library of Toth", description: "Holds the accumulated knowledge of ages, guarded by magic.", factionId: 'wh_tomb_kings', libraryStockKey: 'toth' },
        { id: 'toth_temple', x: 39.5, y: 59.5, type: 'temple', name: "Sanctuary of the Ibis", description: "Where the moon god is worshipped.", factionId: 'wh_tomb_kings' },
        { id: 'toth_tower_1', x: 42.0, y: 62.0, type: 'mages_tower', name: "Moonlit Spire", description: "A tower of pure white marble glowing at night.", factionId: 'mages_guild' },
        { id: 'toth_market', x: 40.0, y: 60.2, type: 'market', name: "Scroll Market", description: "Paper, ink, and spells for sale.", factionId: 'wh_araby', economic_value: 7 },
        { id: 'toth_oasis_1', x: 37.0, y: 58.0, type: 'oasis', name: "Inkwell Pool", description: "Water dark as ink, used for divination.", factionId: 'unaligned' },
        { id: 'toth_ruins_1', x: 43.0, y: 63.0, type: 'ruins', name: "Archive of Dust", description: "An ancient library destroyed by fire.", factionId: 'unaligned' },
        { id: 'toth_village_1', x: 38.0, y: 59.0, type: 'village', name: "Papyrusville", description: "Major producer of writing material.", factionId: 'wh_tomb_kings' },
        { id: 'toth_mine_1', x: 36.0, y: 57.0, type: 'mine', name: "Silver Vein", description: "Mines silver for lunar amulets.", factionId: 'wh_tomb_kings', economic_value: 6 },
        { id: 'toth_shrine_1', x: 41.0, y: 61.0, type: 'shrine', name: "Shrine of Measurements", description: "Dedicated to mathematics and order.", factionId: 'wh_tomb_kings' },
        { id: 'toth_tower_2', x: 39.0, y: 58.5, type: 'tower', name: "Astronomer's Watch", description: "Observes the stars.", factionId: 'wh_tomb_kings' },
        { id: 'toth_dungeon_1', x: 44.0, y: 62.5, type: 'dungeon_entrance', name: "Forbidden Stacks", description: "Underground vault of dangerous books.", factionId: 'unaligned' },
        { id: 'toth_farm_1', x: 37.5, y: 60.0, type: 'farm', name: "Ibis Marshes", description: "Sacred birds are raised here.", factionId: 'wh_tomb_kings' },
        { id: 'toth_workshop_1', x: 40.2, y: 60.8, type: 'workshop', name: "Scribe's Guild", description: "Copies manuscripts.", factionId: 'wh_tomb_kings' },
        { id: 'toth_camp_1', x: 35.5, y: 56.5, type: 'bandit_camp', name: "Heretic's Hideaway", description: "Mages exiled from the city.", factionId: 'unaligned' },
        { id: 'toth_monastery', x: 41.5, y: 59.0, type: 'monastery', name: "Keepers of the Calendar", description: "Track time and seasons.", factionId: 'wh_tomb_kings' },
        { id: 'toth_port', x: 38.5, y: 57.0, type: 'port', name: "Reed Boat Dock", description: "River transport hub.", factionId: 'wh_tomb_kings' },
        { id: 'toth_landmark_1', x: 40.0, y: 61.5, type: 'landmark', name: "Baboon Rock", description: "Natural rock formation shaped like a baboon.", factionId: 'wh_tomb_kings' },
        { id: 'toth_village_2', x: 42.5, y: 61.5, type: 'village', name: "Moonside", description: "Quiet village.", factionId: 'wh_tomb_kings' },
        { id: 'toth_village_3', x: 36.5, y: 58.5, type: 'village', name: "Quill's Rest", description: "Retired scribes live here.", factionId: 'wh_tomb_kings' },
        { id: 'toth_ruins_2', x: 39.0, y: 62.0, type: 'ruins', name: "Forgotten Observatory", description: "Ancient astronomical devices.", factionId: 'unaligned' },
        { id: 'toth_oasis_2', x: 43.5, y: 60.0, type: 'oasis', name: "Silent Spring", description: "A place of meditation.", factionId: 'unaligned' },
        { id: 'toth_fort_1', x: 38.0, y: 57.5, type: 'fortress', name: "Gate of Knowledge", description: "Guards the archives.", factionId: 'wh_tomb_kings', military_strength: 7 },
        { id: 'toth_mine_2', x: 44.0, y: 61.0, type: 'quarry', name: "Alabaster Quarry", description: "White stone for statues.", factionId: 'wh_tomb_kings' },
        { id: 'toth_tomb_1', x: 41.0, y: 62.5, type: 'graveyard', name: "Crypt of Sages", description: "Burial place of wise men.", factionId: 'wh_tomb_kings' },
        { id: 'toth_town_1', x: 42.0, y: 60.0, type: 'town', name: "Ashmunein", description: "A major administrative center.", factionId: 'wh_tomb_kings' },
        { id: 'toth_shrine_2', x: 39.0, y: 59.0, type: 'shrine', name: "Altar of the Moon", description: "Silver altar.", factionId: 'wh_tomb_kings' },
        { id: 'toth_cave', x: 36.0, y: 59.5, type: 'cave_entrance', name: "Whispering Cave", description: "Echoes sound like voices.", factionId: 'unaligned' },
        { id: 'toth_bridge', x: 40.0, y: 58.0, type: 'bridge', name: "Bridge of Thoth", description: "Decorated with hieroglyphs.", factionId: 'wh_tomb_kings' },
        { id: 'toth_village_4', x: 43.0, y: 62.5, type: 'village', name: "Starlight", description: "Night-blooming flowers grow here.", factionId: 'wh_tomb_kings' },
        { id: 'toth_ruins_3', x: 37.0, y: 61.0, type: 'ruins', name: "Library of Ash", description: "Burned books.", factionId: 'unaligned' },
        { id: 'toth_lair', x: 42.5, y: 63.5, type: 'lair', name: "Sphinx's Riddle", description: "A sphinx guards this cave.", factionId: 'unaligned' },
        { id: 'toth_workshop_2', x: 40.8, y: 60.2, type: 'workshop', name: "Alchemist's Row", description: "Brewing potions.", factionId: 'wh_tomb_kings' },
        { id: 'toth_farm_2', x: 39.0, y: 61.0, type: 'farm', name: "Sacred Groves", description: "Growing herbs for rituals.", factionId: 'wh_tomb_kings' },
        { id: 'toth_tower_3', x: 37.5, y: 59.5, type: 'watchtower', name: "Owl's Perch", description: "Night watch.", factionId: 'wh_tomb_kings' },
        { id: 'toth_inn', x: 40.2, y: 60.0, type: 'inn', name: "The Clever Ibis", description: "Scholars meet here.", factionId: 'wh_tomb_kings' },
        { id: 'toth_trade', x: 35.8, y: 57.5, type: 'trade_post', name: "Western Desert Post", description: "Traders from the dunes.", factionId: 'wh_araby' },
        { id: 'toth_monument', x: 41.0, y: 59.5, type: 'landmark', name: "Obelisk of Thoth", description: "Inscribed with all known spells.", factionId: 'wh_tomb_kings' },
        { id: 'toth_academy', x: 40.0, y: 61.0, type: 'academy', name: "Academy of Magic", description: "Teaching the arcane arts.", factionId: 'mages_guild' },
        { id: 'toth_landmark_2', x: 43.0, y: 63.0, type: 'landmark', name: "The Silver Gate", description: "A mysterious archway.", factionId: 'wh_tomb_kings' },
        { id: 'toth_outpost_1', x: 44.5, y: 59.5, type: 'outpost', name: "Lunar Watch", description: "Guards the east.", factionId: 'wh_tomb_kings' },
        { id: 'toth_ruins_4', x: 36.5, y: 62.0, type: 'ruins', name: "Shattered Observatory", description: "Broken lenses.", factionId: 'unaligned' },
        { id: 'toth_village_5', x: 39.5, y: 63.0, type: 'village', name: "Ink-Stain", description: "Dye makers.", factionId: 'wh_tomb_kings' }
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
