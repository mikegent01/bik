// map-data/middle-earth/Gondor.js

export const gondorData = {
    pointsOfInterest: [
        {
            id: 'poi_me_minas_tirith',
            x: 46.50, y: 56.50, type: 'capital_city', subRegion: 'gondor', name: "Minas Tirith, the Guarded City",
            description: "The seven-tiered White City of Gondor, a bastion against the shadow of the East. Carved from the mountain, its white stone gleams in the sun. A city of great strength and ancient sorrow.",
            factionId: 'kingdom_of_gondor', intelReq: 10, political_influence: 10, economic_value: 9, military_strength: 10, population: 50000,
        },
        {
            id: 'poi_me_osgiliath_west',
            x: 52.50, y: 57.00, type: 'ruins', subRegion: 'gondor', name: "Osgiliath (Western Bank)",
            description: "The ruined western half of the former capital, now a contested warzone. Gondorian rangers fight bitterly amongst the shattered domes and plazas to hold the line against Mordor.",
            factionId: 'kingdom_of_gondor', intelReq: 20, political_influence: 4, economic_value: 2, military_strength: 8, population: 200,
        },
        {
            id: 'poi_me_osgiliath_east',
            x: 54.00, y: 57.20, type: 'ruins', subRegion: 'gondor', name: "Osgiliath (Eastern Bank)",
            description: "The eastern half of Osgiliath, now firmly under the control of Mordor. Orcs swarm through its ruined streets, using it as a staging ground for their assault on the west.",
            factionId: 'mordor', intelReq: 25, political_influence: 2, economic_value: 1, military_strength: 8, population: 1000,
        },
        {
            id: 'poi_me_cair_andros',
            x: 56.00, y: 53.00, type: 'fortress', subRegion: 'gondor', name: "Cair Andros",
            description: "A fortified island in the river Anduin, guarding the northern approaches to Minas Tirith. Its garrison stands as a vital bulwark against forces coming down the river.",
            factionId: 'kingdom_of_gondor', intelReq: 30, political_influence: 4, economic_value: 3, military_strength: 8, population: 800,
        },
        {
            id: 'poi_me_pelennor_fields',
            x: 47.00, y: 58.50, type: 'farm', subRegion: 'gondor', name: "The Pelennor Fields",
            description: "The rich, fertile townlands surrounding Minas Tirith, protected by the great wall of the Rammas Echor. A place of farms and orchards, vital for the city's sustenance.",
            factionId: 'kingdom_of_gondor', intelReq: 15, political_influence: 5, economic_value: 10, military_strength: 4, population: 5000,
        },
        {
            id: 'poi_me_rammas_echor',
            x: 50.00, y: 60.00, type: 'landmark', subRegion: 'gondor', name: "The Rammas Echor",
            description: "The great outer wall protecting the Pelennor Fields. Though a formidable defense, it is long and requires a great host to man it fully.",
            factionId: 'kingdom_of_gondor', intelReq: 20, political_influence: 3, economic_value: 2, military_strength: 7, population: 0,
        },
        {
            id: 'poi_me_dol_amroth',
            x: 34.00, y: 64.00, type: 'major_city', subRegion: 'gondor', name: "Dol Amroth",
            description: "The beautiful city of the Prince of Dol Amroth in the fief of Belfalas. Known for its Swan Knights and its strong Elven heritage.",
            factionId: 'kingdom_of_gondor', intelReq: 25, political_influence: 8, economic_value: 8, military_strength: 8, population: 20000,
        },
        {
            id: 'poi_me_harlond_docks',
            x: 46.00, y: 58.00, type: 'port', subRegion: 'gondor', name: "Harlond Docks",
            description: "The southern docks of Minas Tirith on the river Anduin, the city's main port for trade and naval forces.",
            factionId: 'kingdom_of_gondor', intelReq: 15, political_influence: 4, economic_value: 7, military_strength: 6, population: 1500,
        },
        {
            id: 'poi_me_henneth_annun',
            x: 62.50, y: 56.00, type: 'cave_entrance', subRegion: 'gondor', name: "Henneth Annûn",
            description: "The secret 'Window of the Sunset', a hidden refuge of the Rangers of Ithilien behind a waterfall. A place of guarded peace in a war-torn land.",
            factionId: 'kingdom_of_gondor', intelReq: 50, political_influence: 3, economic_value: 2, military_strength: 6, population: 100,
        },
        {
            id: 'poi_me_minas_morgul',
            x: 64.00, y: 59.00, type: 'fortress', subRegion: 'gondor', name: "Minas Morgul",
            description: "Once the Gondorian city of Minas Ithil, now a fortress of unspeakable evil, home to the Witch-king of Angmar. A sickly green light emanates from it, a beacon of terror.",
            factionId: 'mordor', intelReq: 40, political_influence: 8, economic_value: 1, military_strength: 10, population: 5000,
        },
        {
            id: 'poi_me_crossroads',
            x: 58.00, y: 61.00, type: 'landmark', subRegion: 'gondor', name: "The Cross-roads of the Fallen King",
            description: "The intersection of the road from Osgiliath to Morgul Vale and the Harad Road. A defiled statue of an ancient Gondorian king stands here, a symbol of the land's corruption.",
            factionId: 'unaligned', intelReq: 25, political_influence: 1, economic_value: 1, military_strength: 2, population: 0,
        },
        {
            id: 'poi_me_pelargir',
            x: 44.00, y: 64.00, type: 'major_city', subRegion: 'gondor', name: "Pelargir",
            description: "The greatest and most ancient port of Gondor, a key hub for trade and naval power. It is frequently threatened by the Corsairs of Umbar.",
            factionId: 'kingdom_of_gondor', intelReq: 20, political_influence: 7, economic_value: 9, military_strength: 7, population: 30000,
        },
        {
            id: 'poi_me_linhir',
            x: 39.50, y: 63.00, type: 'town', subRegion: 'gondor', name: "Linhir",
            description: "A town situated at a key river crossing in the fief of Lebennin, contested by men from both Lamedon and Belfalas.",
            factionId: 'kingdom_of_gondor', intelReq: 15, political_influence: 4, economic_value: 5, military_strength: 5, population: 4000,
        },
        {
            id: 'poi_me_ethring',
            x: 36.00, y: 60.00, type: 'village', subRegion: 'gondor', name: "Ethring",
            description: "A town on the Ringló river, guarding a ford on the main road to Pelargir.",
            factionId: 'kingdom_of_gondor', intelReq: 15, political_influence: 3, economic_value: 4, military_strength: 4, population: 2000,
        },
        {
            id: 'poi_me_calembel',
            x: 34.50, y: 58.00, type: 'town', subRegion: 'gondor', name: "Calembel",
            description: "The chief town of the fief of Lamedon, situated on a green hill by the river Ciril.",
            factionId: 'kingdom_of_gondor', intelReq: 15, political_influence: 5, economic_value: 5, military_strength: 5, population: 6000,
        },
        {
            id: 'poi_me_erech',
            x: 33.50, y: 56.00, type: 'landmark', subRegion: 'gondor', name: "The Hill of Erech",
            description: "A bare, black hill where a great stone was placed by Isildur. It is here the Oathbreakers dwell, bound by their ancient curse.",
            factionId: 'unaligned', intelReq: 45, political_influence: 1, economic_value: 1, military_strength: 8, population: 0,
        },
        {
            id: 'poi_me_tarlang_neck',
            x: 30.50, y: 58.00, type: 'mountain_pass', subRegion: 'gondor', name: "Tarlang's Neck",
            description: "A high pass through the White Mountains, a difficult but strategic route between the western fiefs.",
            factionId: 'unaligned', intelReq: 25, political_influence: 2, economic_value: 2, military_strength: 3, population: 0,
        },
        {
            id: 'poi_me_pinnath_gelin',
            x: 28.00, y: 63.00, type: 'farm', subRegion: 'gondor', name: "The Green Hills of Pinnath Gelin",
            description: "A fief of green hills, home to hardy folk who are loyal to the Steward.",
            factionId: 'kingdom_of_gondor', intelReq: 15, political_influence: 4, economic_value: 6, military_strength: 4, population: 7000,
        },
        {
            id: 'poi_me_edhellond',
            x: 32.00, y: 61.50, type: 'ruins', subRegion: 'gondor', name: "Edhellond (Ruins)",
            description: "The ancient, abandoned Elven haven. It is now a place of memory, its white stones quiet save for the sound of the sea.",
            factionId: 'unaligned', intelReq: 40, political_influence: 2, economic_value: 3, military_strength: 2, population: 0,
        },
        {
            id: 'poi_me_anfalas_coast',
            x: 28.50, y: 66.00, type: 'village', subRegion: 'gondor', name: "Coast of Anfalas (Longstrand)",
            description: "A long, wild coast, sparsely populated by fisher-folk. The land is poor, but its people are hardy and loyal.",
            factionId: 'kingdom_of_gondor', intelReq: 15, political_influence: 3, economic_value: 3, military_strength: 3, population: 3000,
        },
        {
            id: 'poi_me_lossarnach',
            x: 48.00, y: 61.00, type: 'village', subRegion: 'gondor', name: "The Valleys of Lossarnach",
            description: "A beautiful and populous fief known for its skilled axemen. They are the first line of defense for Minas Tirith from the south.",
            factionId: 'kingdom_of_gondor', intelReq: 15, political_influence: 5, economic_value: 6, military_strength: 6, population: 9000,
        },
        {
            id: 'poi_me_druadan_forest',
            x: 42.00, y: 54.00, type: 'forest', subRegion: 'gondor', name: "Drúadan Forest",
            description: "An ancient, dark forest, home to the reclusive Wild Men (the Woses). They are masters of the woods and hold an ancient alliance with Gondor.",
            factionId: 'unaligned', intelReq: 40, political_influence: 3, economic_value: 2, military_strength: 4, population: 500,
        },
        {
            id: 'poi_me_amon_din',
            x: 44.00, y: 53.00, type: 'watchtower', subRegion: 'gondor', name: "Amon Dîn",
            description: "The easternmost of the northern beacon-towers of Gondor, used to warn of invasion from the east.",
            factionId: 'kingdom_of_gondor', intelReq: 25, political_influence: 2, economic_value: 1, military_strength: 5, population: 20,
        },
        {
            id: 'poi_me_emyn_arnen',
            x: 55.00, y: 65.00, type: 'village', subRegion: 'gondor', name: "Emyn Arnen",
            description: "A series of hills in Ithilien, the ancient home of the Stewards of Gondor before they moved to Minas Tirith.",
            factionId: 'kingdom_of_gondor', intelReq: 30, political_influence: 4, economic_value: 4, military_strength: 4, population: 500,
        },
        {
            id: 'poi_me_ithilien_ranger_camp',
            x: 60.00, y: 58.00, type: 'outpost', subRegion: 'gondor', name: "Ranger Outpost in Ithilien",
            description: "One of several hidden outposts from which the Rangers of Ithilien wage their guerrilla war against the forces of Mordor.",
            factionId: 'kingdom_of_gondor', intelReq: 45, political_influence: 3, economic_value: 1, military_strength: 7, population: 60,
        },
        {
            id: 'poi_me_mouths_of_anduin',
            x: 49.00, y: 66.00, type: 'landmark', subRegion: 'gondor', name: "Mouths of the Anduin",
            description: "The vast, marshy delta where the Great River Anduin meets the sea. A difficult terrain to navigate and a haven for smugglers.",
            factionId: 'unaligned', intelReq: 20, political_influence: 2, economic_value: 3, military_strength: 3, population: 0,
        },
        {
            id: 'poi_me_white_mountains',
            x: 39.00, y: 55.00, type: 'mountain_pass', subRegion: 'gondor', name: "The White Mountains (Ered Nimrais)",
            description: "The great mountain range that forms the northern border of Gondor. Its high passes are treacherous and home to ancient evils.",
            factionId: 'unaligned', intelReq: 15, political_influence: 1, economic_value: 2, military_strength: 2, population: 0,
        },
        {
            id: 'poi_me_cirith_ungol',
            x: 64.50, y: 60.50, type: 'mountain_pass', subRegion: 'gondor', name: "The Pass of Cirith Ungol",
            description: "A high and treacherous pass into Mordor, guarded by an evil watchtower and haunted by the ancient horror, Shelob.",
            factionId: 'mordor', intelReq: 55, political_influence: 2, economic_value: 1, military_strength: 9, population: 100,
        },
        {
            id: 'poi_me_south_ithilien',
            x: 58.50, y: 64.00, type: 'forest', subRegion: 'gondor', name: "South Ithilien",
            description: "Once a fair garden, now a debatable land overrun by fell creatures from Morgul Vale. Rangers still fight here, but it is a losing battle.",
            factionId: 'unaligned', intelReq: 30, political_influence: 2, economic_value: 2, military_strength: 5, population: 0,
        },
        {
            id: 'poi_me_archives_minas_tirith',
            x: 47.00, y: 56.00, type: 'library', subRegion: 'gondor', name: "The Archives of Minas Tirith",
            description: "Deep within the White City lies the great library and archives of Gondor, holding the lore and history of Númenor and the Realms in Exile. It is a place of immense knowledge, guarded by the wisest lore-masters.",
            factionId: 'kingdom_of_gondor', intelReq: 25, political_influence: 8, economic_value: 6, military_strength: 5, population: 200,
            library_summary: "The Archives of Minas Tirith contain the most complete histories of the Second and Third Ages, with a focus on the lineage of the Kings and the wars against Sauron.",
            libraryStockKey: 'gondor_archives',
        },
    ],
    fogOfWar: [

    ]
};