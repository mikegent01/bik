// map-data/midlands-pois.js

const midlandsData = {
    pointsOfInterest: [
        // #66
        {
            id: 'poi_mid_capital_district',
            x: 81.28,
            y: 4.29,
            type: 'capital_city',
            name: "Imperial District of Mighdural",
            description: "The administrative and symbolic heart of the Regal Empire. This central district houses the ministries, high courts, and the residences of the most powerful non-noble bureaucrats.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 5 },
            political_influence: 10,
            economic_value: 8,
            military_strength: 7,
            population: 25000
        },
        // #67
        {
            id: 'poi_mid_imperial_palace',
            x: 84.50,
            y: 3.50,
            type: 'castle',
            name: "The Imperial Palace",
            description: "The magnificent, sprawling palace of Emperor Elagabalus. A city within a city, protected by the elite Imperial Guard and powerful magical wards. The seat of all power in the Empire.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 70 },
            political_influence: 10,
            economic_value: 6,
            military_strength: 8,
            population: 5000
        },
        // #68
        {
            id: 'poi_mid_aegis_command',
            x: 78.5,
            y: 2.5,
            type: 'barracks',
            name: "Aegis Command",
            description: "The central command and grand barracks for the Iron Legion's home guard. A massive, imposing fortress where thousands of soldiers are garrisoned and trained.",
            factionId: 'iron_legion',
            intelReq: { faction: 'iron_legion', level: 30 },
            political_influence: 5,
            economic_value: 3,
            military_strength: 10,
            population: 10000
        },
        // #69
        {
            id: 'poi_mid_magitek_foundries',
            x: 75.0,
            y: 8.0,
            type: 'workshop',
            name: "Magitek Foundries",
            description: "A district of immense forges and workshops that produce the Empire's magitek war machines. The sky above is perpetually choked with arcane smog and the sound of ethereal hammers.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 40 },
            political_influence: 3,
            economic_value: 10,
            military_strength: 6,
            population: 8000
        },
        // #70
        {
            id: 'poi_mid_silent_service_hq',
            x: 87.0,
            y: 6.0,
            type: 'prison',
            name: "The Obsidian Spire (Silent Service HQ)",
            description: "A windowless, black monolith that serves as the headquarters for the Silent Service, the Empire's feared intelligence agency. It is said to be one of the most secure buildings in the world, holding the Empire's darkest secrets.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 90 },
            political_influence: 9,
            economic_value: 4,
            military_strength: 8,
            population: 1500
        },
        // #71
        {
            id: 'poi_mid_grand_market',
            x: 79.0,
            y: 7.5,
            type: 'market',
            name: "Grand Market of Mighdural",
            description: "The largest market in the Midlands, a bustling hub of commerce where goods from across the world are traded. It is officially under Imperial control, but is a hotbed for spies and freelancers.",
            factionId: 'unaligned',
            intelReq: { faction: 'freelancer_underworld', level: 10 },
            political_influence: 3,
            economic_value: 10,
            military_strength: 3,
            population: 6000
        },
        // #72
        {
            id: 'poi_mid_great_orrery',
            x: 82.0,
            y: 7.0,
            type: 'observatory',
            name: "The Great Orrery",
            description: "A colossal, magical orrery that maps the movements of celestial bodies in real-time. A symbol of the Empire's mastery over science and magic, used for both navigation and astrological prophecy.",
            factionId: 'regal_empire',
            intelReq: { faction: 'mages_guild', level: 50 },
            political_influence: 6,
            economic_value: 5,
            military_strength: 2,
            population: 200
        },
        // #73
        {
            id: 'poi_mid_undercroft',
            x: 76.5,
            y: 11.0,
            type: 'dungeon_entrance',
            name: "The Undercroft",
            description: "The entrance to the capital's ancient sewer system, which has become the domain of the Freelancer Underworld. A hidden city of black markets, smugglers' dens, and secret guild halls.",
            factionId: 'freelancer_underworld',
            intelReq: { faction: 'freelancer_underworld', level: 35 },
            political_influence: 2,
            economic_value: 7,
            military_strength: 4,
            population: 2500
        },
        // #74
        {
            id: 'poi_mid_sunstone_gate',
            x: 83.0,
            y: 15.0,
            type: 'watchtower',
            name: "The Sunstone Gate",
            description: "The main southern gate of the capital city. A massive fortification manned by the Iron Legion, it controls all traffic along the great southern road.",
            factionId: 'iron_legion',
            intelReq: { faction: 'iron_legion', level: 15 },
            political_influence: 3,
            economic_value: 4,
            military_strength: 8,
            population: 500
        },
        // #75
        {
            id: 'poi_mid_imperial_university',
            x: 85.5,
            y: 9.0,
            type: 'academy',
            name: "Imperial University",
            description: "The premier institution of learning in the Empire, where the children of nobility and promising commoners are educated in law, history, and the state-sanctioned arcane arts.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 25 },
            political_influence: 7,
            economic_value: 5,
            military_strength: 3,
            population: 4000
        },
        // #76
        {
            id: 'poi_mid_cathedral_flame',
            x: 89.0,
            y: 14.0,
            type: 'temple',
            name: "Cathedral of the Cleansing Flame",
            description: "The grand cathedral of the Order of the Silver Flame. A bastion of faith and martial power, from which the Order coordinates its crusades against supernatural threats across the Midlands.",
            factionId: 'silver_flame',
            intelReq: { faction: 'silver_flame', level: 30 },
            political_influence: 6,
            economic_value: 3,
            military_strength: 6,
            population: 1000
        },
        // #77
        {
            id: 'poi_mid_imperial_diet',
            x: 82.5,
            y: 2.0,
            type: 'capital_city',
            name: "The Imperial Diet",
            description: "The grand parliamentary building where representatives from all Imperial provinces convene. A place of political intrigue, debate, and the formal passing of Imperial law under the Emperor's watchful eye.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 20 },
            political_influence: 10,
            economic_value: 5,
            military_strength: 5,
            population: 1000
        },
        // #78
        {
            id: 'poi_mid_noble_district',
            x: 86.5,
            y: 2.5,
            type: 'town',
            name: "The Gilded Quarter (Noble District)",
            description: "An opulent district of lavish estates and manicured gardens, home to the most powerful noble families of the Empire. The air is thick with wealth, privilege, and political conspiracy.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 30 },
            political_influence: 8,
            economic_value: 7,
            military_strength: 4,
            population: 3000
        },
        // #79
        {
            id: 'poi_mid_mages_guild_spire',
            x: 77.0,
            y: 5.0,
            type: 'mages_tower',
            name: "Mages' Guild Spire",
            description: "The officially sanctioned headquarters of the Mages' Guild within the capital. A gleaming white tower that serves as a library, laboratory, and embassy for the powerful arcane faction.",
            factionId: 'mages_guild',
            intelReq: { faction: 'mages_guild', level: 35 },
            political_influence: 5,
            economic_value: 4,
            military_strength: 6,
            population: 500
        },
        // #80
        {
            id: 'poi_mid_onyx_embassy',
            x: 88.5,
            y: 10.0,
            type: 'landmark',
            name: "The Onyx Embassy",
            description: "The 'diplomatic' presence of the Onyx Hand vampires. A dark, gothic manor that is an open secret in the capital. No business is conducted in the light of day, and invitations are rare and dangerous.",
            factionId: 'onyx_hand',
            intelReq: { faction: 'onyx_hand', level: 60 },
            political_influence: 7,
            economic_value: 5,
            military_strength: 6,
            population: 100
        },
        // #81
        {
            id: 'poi_mid_fighting_pit',
            x: 74.5,
            y: 13.0,
            type: 'lair',
            name: "The Grinder (Underworld Fighting Pit)",
            description: "A notorious, illegal fighting pit deep in the Undercroft, run by the Iron Fists. A place where disputes are settled with fists and fortunes are made and lost on brutal contests.",
            factionId: 'iron_fists',
            intelReq: { faction: 'iron_fists', level: 45 },
            political_influence: 2,
            economic_value: 6,
            military_strength: 5,
            population: 300
        },
        // #82
        {
            id: 'poi_mid_imperial_mint',
            x: 73.0,
            y: 5.0,
            type: 'workshop',
            name: "The Imperial Mint",
            description: "A heavily fortified facility where the Empire's currency is minted. Guarded by the Iron Legion, it is said to be as secure as the Imperial Palace itself.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 55 },
            political_influence: 4,
            economic_value: 10,
            military_strength: 8,
            population: 400
        },
        {
            id: 'poi_mid_grand_library',
            x: 79.5,
            y: 13.5,
            type: 'library',
            name: "Grand Library of Mighdural",
            description: "The largest repository of knowledge in the Midlands, containing centuries of Imperial history, law, and censored literature. It is managed by an order of stoic, Imperial scribes.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 30 },
            political_influence: 6,
            economic_value: 4,
            military_strength: 3,
            population: 300,
            library_summary: "The largest public library in the Regal Empire. While its collection is vast, many texts concerning the Empire's more questionable history or forbidden magic have been heavily redacted or are kept in locked vaults, accessible only to the Silent Service.",
            libraryStockKey: 'midlands'
        },
        // #84
        {
            id: 'poi_mid_diplomatic_quarter',
            x: 90.5,
            y: 8.5,
            type: 'village',
            name: "The Diplomatic Quarter",
            description: "A walled district where ambassadors from allied and vassal states reside. A beautiful but heavily monitored area, where the Silent Service watches every move.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 25 },
            political_influence: 7,
            economic_value: 5,
            military_strength: 6,
            population: 1200
        },
        // #85
        {
            id: 'poi_mid_artificers_guild',
            x: 73.5,
            y: 10.5,
            type: 'academy',
            name: "Artificer's Guildhall",
            description: "The guildhall for civilian magitek engineers and inventors. While they often work on Imperial contracts, they maintain a degree of independence and are a source of non-military technological innovation.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 30 },
            political_influence: 4,
            economic_value: 8,
            military_strength: 3,
            population: 1800
        },
        // #86
        {
            id: 'poi_mid_citadel_of_law',
            x: 84.5,
            y: 12.0,
            type: 'temple',
            name: "Citadel of Law",
            description: "The austere and imposing headquarters of the Oathbound Judges in the capital. From here, they dispense cosmic justice, their authority respected even by the Emperor.",
            factionId: 'oathbound_judges',
            intelReq: { faction: 'oathbound_judges', level: 40 },
            political_influence: 8,
            economic_value: 2,
            military_strength: 7,
            population: 600
        },
        // #87
        {
            id: 'poi_mid_imperial_menagerie',
            x: 92.0,
            y: 12.5,
            type: 'landmark',
            name: "The Imperial Menagerie",
            description: "A vast, enchanted park that houses exotic and magical creatures captured from across the world. A symbol of the Empire's reach and power, though some see it as a cruel prison.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 20 },
            political_influence: 3,
            economic_value: 4,
            military_strength: 4,
            population: 300
        },
        // #88
        {
            id: 'poi_mid_gilded_gryphon_barracks',
            x: 77.5,
            y: 15.0,
            type: 'barracks',
            name: "Gilded Gryphon Barracks",
            description: "The urban barracks for the Gilded Gryphon Mercenary Company. When not on contract, they can be found here, training, gambling, and spending their coin.",
            factionId: 'unaligned',
            intelReq: { faction: 'unaligned', level: 25 },
            political_influence: 3,
            economic_value: 5,
            military_strength: 6,
            population: 600
        },
        // #89
        {
            id: 'poi_mid_wayfinders_guildhall',
            x: 71.0,
            y: 14.5,
            type: 'academy',
            name: "Wayfinders' Guildhall",
            description: "The capital chapterhouse of the Wayfinders' Guild. A place filled with maps, artifacts, and adventurers planning their next expedition into the unknown.",
            factionId: 'unaligned',
            intelReq: { faction: 'unaligned', level: 20 },
            political_influence: 4,
            economic_value: 4,
            military_strength: 2,
            population: 200
        },
        // #90
        {
            id: 'poi_mid_cosmic_jester_shrine',
            x: 93.0,
            y: 4.0,
            type: 'shrine',
            name: "Hidden Shrine to the Jester",
            description: "A secret, nonsensical shrine to the Cosmic Jester, hidden in the attic of a noble's estate. It is maintained by a small, influential cult of aristocrats who find Imperial order dreadfully boring.",
            factionId: 'cosmic_jesters',
            intelReq: { faction: 'cosmic_jesters', level: 85 },
            political_influence: 4,
            economic_value: 1,
            military_strength: 1,
            population: 15
        },
        // #158
        {
            id: 'poi_mid_heralds_plaza',
            x: 80.5,
            y: 2.0,
            type: 'landmark',
            name: "Imperial Herald's Plaza",
            description: "A grand plaza where Imperial Heralds make public proclamations and post official news bulletins. It is a key tool for state propaganda, and a place where the Silent Service subtly monitors public opinion.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 15 },
            political_influence: 6,
            economic_value: 2,
            military_strength: 3,
            population: 500
        },
        {
            id: 'poi_mid_mk_embassy',
            x: 91.5,
            y: 7.0,
            type: 'landmark',
            name: "Mushroom Kingdom Embassy",
            description: "A cheerful, toadstool-shaped building that stands in stark contrast to the severe Imperial architecture. It serves as the Mushroom Regency's diplomatic mission, promoting trade and seeking allies in the chaotic Midlands.",
            factionId: 'mushroom_regency',
            intelReq: 20,
            political_influence: 5,
            economic_value: 4,
            military_strength: 3,
            population: 50
        },
        {
            id: 'poi_mid_midearth_embassy',
            x: 89.5,
            y: 7.0,
            type: 'landmark',
            name: "Middle-Earth Embassy",
            description: "An embassy of stone and ancient wood, representing the far-western kingdoms of Middle-Earth. Its diplomats are known for their wisdom, patience, and deep distrust of industrial magitek.",
            factionId: 'kingdom_of_gondor',
            intelReq: 50,
            political_influence: 4,
            economic_value: 3,
            military_strength: 4,
            population: 40
        },
        {
            id: 'poi_mid_internet_embassy',
            x: 92.0,
            y: 10.0,
            type: 'landmark',
            name: "The Internet Embassy",
            description: "A strange, shimmering building that seems to flicker at the edge of vision. It is the diplomatic node for The Internet Federation, a place of data-brokers and digital envoys from another dimension.",
            factionId: 'internet_federation',
            intelReq: 50,
            political_influence: 6,
            economic_value: 6,
            military_strength: 5,
            population: 30
        }
    ],
    fogOfWar: [
  
    ]
};

export default midlandsData;