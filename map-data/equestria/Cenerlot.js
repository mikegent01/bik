
// map-data/equestria/Cenerlot.js

export const cenerlotPois = [
    {
        id: 'poi_eq_solar_spire', x: 42.50, y: 18.50, type: 'castle', subRegion: 'Cenerlot',
        name: "The Solar Spire",
        description: "The towering, crystalline seat of Queen Celestia. From here, she controls the movement of the sun and issues decrees that govern every aspect of Equestrian life. It is the most heavily guarded structure on the continent.",
        factionId: 'equestrian_regime', intelReq: 10, political_influence: 10, economic_value: 8, military_strength: 10, population: 5000
    },
    {
        id: 'poi_eq_school_gifted', x: 40.00, y: 22.00, type: 'academy', subRegion: 'Cenerlot',
        name: "School for Gifted Unicorns",
        description: "An elite academy where young unicorns are trained in high-level magic and absolute loyalty to the crown. It is a factory for the regime's magical enforcers.",
        factionId: 'pony_nobility', intelReq: 20, political_influence: 7, economic_value: 6, military_strength: 6, population: 1200
    },
    {
        id: 'poi_eq_grand_galloping_hall', x: 45.00, y: 20.00, type: 'landmark', subRegion: 'Cenerlot',
        name: "Grand Galloping Hall",
        description: "A massive ballroom used for state functions and the annual Gala. It is a hotbed of political intrigue where nobles vie for the Queen's favor.",
        factionId: 'pony_nobility', intelReq: 15, political_influence: 8, economic_value: 5, military_strength: 2, population: 300
    },
    {
        id: 'poi_eq_royal_guard_hq', x: 43.50, y: 19.50, type: 'barracks', subRegion: 'Cenerlot',
        name: "Royal Guard Headquarters",
        description: "The central command for the gold-clad Royal Guard. It houses the armory, training grounds, and the offices of Commander Hurricane.",
        factionId: 'equestrian_regime', intelReq: 30, political_influence: 6, economic_value: 3, military_strength: 9, population: 2000
    },
    {
        id: 'poi_eq_crystal_gardens', x: 41.00, y: 17.00, type: 'landmark', subRegion: 'Cenerlot',
        name: "The Crystal Gardens",
        description: "Beautifully manicured gardens where the statues are actually petrified dissidents, displayed as 'art' to remind citizens of the cost of treason.",
        factionId: 'equestrian_regime', intelReq: 40, political_influence: 5, economic_value: 2, military_strength: 4, population: 50
    },
    {
        id: 'poi_eq_star_swirl_archive', x: 39.50, y: 24.00, type: 'library', subRegion: 'Cenerlot',
        name: "Star Swirl's Restricted Archive",
        description: "A legendary library containing the most powerful and dangerous spells in history. Access is restricted to the highest-ranking mages of the regime.",
        factionId: 'equestrian_regime', intelReq: 50, political_influence: 4, economic_value: 7, military_strength: 8, population: 20,
        library_summary: "The Restricted Archive of Cenerlot holds the collected magical knowledge of the Unicorn elite. Forbidden spells, history of the pre-unification era, and research on dimensional travel are stored here under heavy guard.",
        libraryStockKey: 'equestria_archives'
    },
    {
        id: 'poi_eq_noble_quarter', x: 46.00, y: 23.00, type: 'town', subRegion: 'Cenerlot',
        name: "High Town (Noble Quarter)",
        description: "The residential district for the unicorn elite. Non-ponies are only allowed here with a servant's pass. The opulence is staggering.",
        factionId: 'pony_nobility', intelReq: 10, political_influence: 9, economic_value: 8, military_strength: 3, population: 8000
    },
    {
        id: 'poi_eq_pegasus_aerodrome', x: 38.50, y: 16.00, type: 'port', subRegion: 'Cenerlot',
        name: "Cloudwalker Aerodrome",
        description: "A high-altitude docking station for airships and chariot squadrons. It controls the airspace above the capital.",
        factionId: 'equestrian_regime', intelReq: 25, political_influence: 3, economic_value: 6, military_strength: 7, population: 500
    },
    {
        id: 'poi_eq_labor_camp_beta', x: 37.50, y: 26.00, type: 'prison', subRegion: 'Cenerlot',
        name: "Re-Education Center Beta",
        description: "A grim facility where 'disharmonious' elements (mostly non-ponies) are sent to learn the value of friendship through forced labor.",
        factionId: 'equestrian_regime', intelReq: 35, political_influence: 2, economic_value: 4, military_strength: 6, population: 3000
    },
    {
        id: 'poi_eq_everfree_gate', x: 40.38, y: 27.20, type: 'watchtower', subRegion: 'Cenerlot',
        name: "The Everfree Gate",
        description: "The heavily fortified southern gate leading towards the wild Everfree Forest. It is designed to keep things in, as much as out.",
        factionId: 'equestrian_regime', intelReq: 15, political_influence: 3, economic_value: 2, military_strength: 7, population: 100
    },
    {
        id: 'poi_eq_donut_joes', x: 44.00, y: 21.50, type: 'inn', subRegion: 'Cenerlot',
        name: "Donut Joe's",
        description: "A popular donut shop frequented by guards and spies alike. A surprising amount of intelligence is traded over sprinkles and coffee.",
        factionId: 'unaligned', intelReq: 5, political_influence: 2, economic_value: 4, military_strength: 1, population: 50
    },
    {
        id: 'poi_eq_friendship_ministry', x: 42.00, y: 20.50, type: 'fortress', subRegion: 'Cenerlot',
        name: "Ministry of Friendship Enforcement",
        description: "A terrifying bureaucratic office that monitors citizens for 'unfriendly thoughts' and coordinates the secret police.",
        factionId: 'equestrian_regime', intelReq: 45, political_influence: 8, economic_value: 3, military_strength: 5, population: 400
    },
    {
        id: 'poi_eq_statue_victory', x: 43.00, y: 17.00, type: 'landmark', subRegion: 'Cenerlot',
        name: "Statue of Eternal Harmony",
        description: "A colossal golden statue of Queen Celestia. It conceals a magical dampening field generator that suppresses wild magic in the city.",
        factionId: 'equestrian_regime', intelReq: 60, political_influence: 6, economic_value: 1, military_strength: 4, population: 0
    },
    {
        id: 'poi_eq_underground_rail', x: 47.00, y: 25.00, type: 'cave_entrance', subRegion: 'Cenerlot',
        name: "Abandoned Mine Shaft (Rebel Hideout)",
        description: "An entrance to the old crystal mines beneath the city, now used by the Spark of Rebellion to smuggle refugees out of the capital.",
        factionId: 'spark_of_rebellion', intelReq: 55, political_influence: 3, economic_value: 2, military_strength: 4, population: 60
    },
    {
        id: 'poi_eq_weather_factory', x: 37.80, y: 19.50, type: 'workshop', subRegion: 'Cenerlot',
        name: "Cenerlot Weather Factory",
        description: "A massive facility that processes clouds and manufactures lightning for the regime's weather control grid.",
        factionId: 'equestrian_regime', intelReq: 20, political_influence: 4, economic_value: 7, military_strength: 3, population: 800
    },
    {
        id: 'poi_eq_solar_courts', x: 45.50, y: 18.00, type: 'temple', subRegion: 'Cenerlot',
        name: "The Solar Courts",
        description: "The judicial center of the city where trials are public spectacles. The verdict is almost always guilty.",
        factionId: 'equestrian_regime', intelReq: 10, political_influence: 7, economic_value: 2, military_strength: 4, population: 200
    },
    {
        id: 'poi_eq_crystal_mine', x: 48.00, y: 20.00, type: 'mine', subRegion: 'Cenerlot',
        name: "Deep Crystal Mine",
        description: "An active mine producing the magical crystals that power the city's defense grid. Labor is provided by indentured Diamond Dogs.",
        factionId: 'pony_nobility', intelReq: 15, political_influence: 5, economic_value: 9, military_strength: 3, population: 500
    },
    {
        id: 'poi_eq_fashion_district', x: 46.50, y: 21.50, type: 'market', subRegion: 'Cenerlot',
        name: "The Gilded Thread District",
        description: "A high-end fashion district where nobles compete to wear the most extravagant and magically enhanced clothing.",
        factionId: 'unaligned', intelReq: 5, political_influence: 4, economic_value: 8, military_strength: 1, population: 1500
    },
    {
        id: 'poi_eq_observatory', x: 39.00, y: 15.50, type: 'observatory', subRegion: 'Cenerlot',
        name: "Royal Observatory",
        description: "Used to track the movements of the stars and monitor for any signs of the returned Nightmare Moon or other cosmic threats.",
        factionId: 'equestrian_regime', intelReq: 25, political_influence: 3, economic_value: 3, military_strength: 2, population: 20
    },
    {
        id: 'poi_eq_royal_treasury', x: 43.00, y: 21.00, type: 'dungeon_entrance', subRegion: 'Cenerlot',
        name: "The Royal Treasury Vault",
        description: "A fortress within the city holding the kingdom's gold reserves and confiscated magical artifacts. Rumored to be guarded by a dragon.",
        factionId: 'equestrian_regime', intelReq: 80, political_influence: 6, economic_value: 10, military_strength: 9, population: 50
    },
    {
        id: 'poi_eq_griffon_compound', x: 47.50, y: 18.00, type: 'outpost', subRegion: 'Cenerlot',
        name: "Griffon Diplomatic Compound",
        description: "A small, tense district where Griffon ambassadors negotiate trade deals. They are watched closely by the Royal Guard.",
        factionId: 'unaligned', intelReq: 20, political_influence: 4, economic_value: 5, military_strength: 5, population: 100
    },
    {
        id: 'poi_eq_changeling_hive', x: 37.50, y: 23.00, type: 'lair', subRegion: 'Cenerlot',
        name: "Hidden Changeling Hive",
        description: "Beneath an abandoned theater lies a small hive of changelings who have replaced several minor nobles. They feed on the city's love and ambition.",
        factionId: 'spark_of_rebellion', intelReq: 70, political_influence: 5, economic_value: 2, military_strength: 4, population: 40
    },
    {
        id: 'poi_eq_elements_shrine', x: 42.00, y: 16.00, type: 'shrine', subRegion: 'Cenerlot',
        name: "Shrine of the Elements",
        description: "A museum displaying replicas of the Elements of Harmony. The real ones are locked away in the Spire, weaponized by the Queen.",
        factionId: 'equestrian_regime', intelReq: 10, political_influence: 8, economic_value: 3, military_strength: 2, population: 10
    },
    {
        id: 'poi_eq_royal_orchard', x: 48.00, y: 16.50, type: 'farm', subRegion: 'Cenerlot',
        name: "Royal Apple Orchard",
        description: "Genetically modified apple trees that produce fruit year-round to feed the army. The apples are delicious but strangely addictive.",
        factionId: 'equestrian_regime', intelReq: 15, political_influence: 2, economic_value: 6, military_strength: 2, population: 200
    },
    {
        id: 'poi_eq_moon_dungeon', x: 41.50, y: 19.00, type: 'prison', subRegion: 'Cenerlot',
        name: "The Moon Cellars",
        description: "Deep dungeons where political prisoners are kept in total darkness to break their spirits. It is whispered that the real Princess Luna is held here.",
        factionId: 'equestrian_regime', intelReq: 90, political_influence: 5, economic_value: 1, military_strength: 8, population: 500
    },
    {
        id: 'poi_eq_boutique_row', x: 45.50, y: 22.00, type: 'market', subRegion: 'Cenerlot',
        name: "Boutique Row",
        description: "A row of high-end shops selling magical accessories. A front for the Pony Nobility to launder money.",
        factionId: 'pony_nobility', intelReq: 15, political_influence: 4, economic_value: 7, military_strength: 1, population: 300
    },
    {
        id: 'poi_eq_rebel_safehouse', x: 47.80, y: 24.50, type: 'outpost', subRegion: 'Cenerlot',
        name: "The Broken Horseshoe Inn",
        description: "A dingy tavern in the lower district that serves as a recruitment center for the Spark of Rebellion.",
        factionId: 'spark_of_rebellion', intelReq: 40, political_influence: 3, economic_value: 3, military_strength: 4, population: 20
    },
    {
        id: 'poi_eq_mirror_pool', x: 38.00, y: 20.00, type: 'cosmic_anomaly', name: "Artificial Mirror Pool", subRegion: "Cenerlot", description: "A contained, weaponized version of the legendary Mirror Pool, used by the regime to create disposable clones for labor and war.", factionId: 'equestrian_regime', intelReq: 85, political_influence: 2, economic_value: 5, military_strength: 7, population: 0 },
    {
        id: 'poi_eq_wonderbolt_barracks', x: 39.20, y: 17.50, type: 'barracks', name: "Wonderbolt Aerial Academy", subRegion: "Cenerlot", description: "The training center for the Wonderbolts, the regime's elite aerial shock troops. They perform air shows that double as displays of overwhelming military force.", factionId: 'equestrian_regime', intelReq: 20, political_influence: 5, economic_value: 3, military_strength: 8, population: 400 },
    {
        id: 'poi_eq_train_station', x: 44.50, y: 26.00, type: 'trade_post', name: "Cenerlot Central Station", subRegion: "Cenerlot", description: "The primary rail link to the rest of Equestria. Heavily patrolled, it is the main artery for resources flowing into the capital and troops flowing out.", factionId: 'unaligned', intelReq: 5, political_influence: 4, economic_value: 8, military_strength: 5, population: 5000 }
];

export const cenerlotData = {
    pointsOfInterest: cenerlotPois,
    fogOfWar: [

    ]
};
