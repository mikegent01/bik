// map-data/northern-lands-pois.js

export const northernLandsData = {
    pointsOfInterest: [
        {
            id: 'poi_nl_fort_desolation',
            x: 22.00,
            y: 7.00,
            type: 'fortress',
            name: "Fort Desolation",
            description: "The main Iron Legion fortress in the Northern Lands, a grim symbol of Imperial conquest. It serves as the administrative center for the 'pacified' territory and a staging ground for further expansion.",
            factionId: 'iron_legion',
            intelReq: 30,
            political_influence: 8,
            economic_value: 3,
            military_strength: 9,
            population: 2500
        },
        {
            id: 'poi_nl_frost_quarry',
            x: 50.00,
            y: 5.00,
            type: 'quarry',
            name: "The Frost-Spire Quarry",
            description: "A vast quarry where political prisoners and conquered clan members are forced into hard labor, mining rare ice-vein crystals for the Empire's magitek engines. Conditions are brutal.",
            factionId: 'regal_empire',
            intelReq: 40,
            political_influence: 3,
            economic_value: 8,
            military_strength: 5,
            population: 1500
        },
        {
            id: 'poi_nl_clan_ruins',
            x: 35.00,
            y: 8.00,
            type: 'ruins',
            name: "Ruins of Clan Redmane's Hold",
            description: "The shattered, frozen ruins of the stronghold of Clan Redmane, one of the most powerful of the old Northern Clans. It now serves as a grim reminder of the cost of defying the Empire.",
            factionId: 'rebel_clans',
            intelReq: 25,
            political_influence: 2,
            economic_value: 2,
            military_strength: 2,
            population: 0
        },
        {
            id: 'poi_nl_silent_peaks',
            x: 10.00,
            y: 9.00,
            type: 'mountain_pass',
            name: "The Silent Peaks",
            description: "A treacherous and perpetually snow-covered mountain range. The peaks are known for their unnatural silence, as no birds or animals are ever heard here. A place of ill omen.",
            factionId: 'unaligned',
            intelReq: 20,
            political_influence: 0,
            economic_value: 1,
            military_strength: 2,
            population: 0
        },
        {
            id: 'poi_nl_last_hearth',
            x: 5.00,
            y: 7.00,
            type: 'village',
            name: "The Last Hearth",
            description: "A small, hidden village deep in the mountains, home to the last remnants of the free Northern Clans. They wage a desperate guerrilla war against the Iron Legion.",
            factionId: 'rebel_clans',
            intelReq: 50,
            political_influence: 3,
            economic_value: 2,
            military_strength: 4,
            population: 200
        },
        {
            id: 'poi_nl_icevein_river',
            x: 45.00,
            y: 10.00,
            type: 'river',
            name: "Ice-Vein River",
            description: "A frigid river that flows from the northern glaciers. Its waters are so cold they can freeze unprotected skin in seconds, forming a natural barrier.",
            factionId: 'unaligned',
            intelReq: 5,
            political_influence: 1,
            economic_value: 2,
            military_strength: 1,
            population: 0
        },
        {
            id: 'poi_nl_forgotten_barrow',
            x: 60.00,
            y: 8.00,
            type: 'dungeon_entrance',
            name: "Forgotten Barrow",
            description: "An ancient burial mound of the first kings of the North, predating even the clans. It is said to be filled with treasure and guarded by the spirits of long-dead warriors.",
            factionId: 'unaligned',
            intelReq: 35,
            political_influence: 1,
            economic_value: 5,
            military_strength: 3,
            population: 0
        },
        {
            id: 'poi_nl_northern_watchtower',
            x: 15.00,
            y: 12.00,
            type: 'watchtower',
            name: "Northern Watchtower",
            description: "A tall, isolated watchtower manned by Iron Legion sharpshooters. It provides a commanding view of the surrounding tundra, watching for signs of rebel activity.",
            factionId: 'iron_legion',
            intelReq: 20,
            political_influence: 2,
            economic_value: 1,
            military_strength: 5,
            population: 20
        }
    ],
    fogOfWar: []
};
