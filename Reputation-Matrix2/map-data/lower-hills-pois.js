// map-data/lower-hills-pois.js

export const lowerHillsData = {
    pointsOfInterest: [
        // #141
        {
            id: 'poi_lh_crossroads_keep',
            x: 48.00,
            y: 65.00,
            type: 'fortress',
            name: "Crossroads Keep",
            description: "A strategically vital keep that overlooks the main trade routes between the Midlands and the southern territories. It has changed hands many times and is currently held by a determined Iron Legion garrison.",
            factionId: 'iron_legion',
            intelReq: 20,
            political_influence: 7,
            economic_value: 6,
            military_strength: 8,
            population: 900
        },
        // #142
        {
            id: 'poi_lh_barrow_downs',
            x: 45.00,
            y: 75.00,
            type: 'ruins',
            name: "The Barrow-Downs",
            description: "A series of ancient, rolling hills dotted with the burial mounds of forgotten kings and heroes. The area is wreathed in mist and haunted by restless Barrow-wights.",
            factionId: 'unaligned',
            intelReq: 35,
            political_influence: 2,
            economic_value: 3,
            military_strength: 4,
            population: 0
        },
        // #143
        {
            id: 'poi_lh_refugee_camp',
            x: 55.00,
            y: 70.00,
            type: 'village',
            name: "Hope's Respite Refugee Camp",
            description: "A sprawling, overcrowded camp for those displaced by the wars. It is a place of hardship and desperation, but also a recruiting ground for the Rebel Clans and The Unchained.",
            factionId: 'the_unchained',
            intelReq: 15,
            political_influence: 4,
            economic_value: 2,
            military_strength: 2,
            population: 4000
        },
        // #144
        {
            id: 'poi_lh_old_watchtower',
            x: 52.00,
            y: 58.00,
            type: 'watchtower',
            name: "The Old Watchtower",
            description: "A crumbling stone watchtower from a bygone era. It offers a commanding view of the surrounding hills and is often used as a clandestine meeting spot or observation post.",
            factionId: 'unaligned',
            intelReq: 10,
            political_influence: 1,
            economic_value: 1,
            military_strength: 3,
            population: 0
        },
        // #145
        {
            id: 'poi_lh_gilded_gryphon_outpost',
            x: 44.00,
            y: 62.00,
            type: 'outpost',
            name: "Gilded Gryphon Outpost",
            description: "A fortified encampment for the Gilded Gryphon Mercenary Company. They are under contract by the Empire to pacify the region, a task they perform with ruthless efficiency.",
            factionId: 'unaligned',
            intelReq: 25,
            political_influence: 4,
            economic_value: 3,
            military_strength: 7,
            population: 400
        },
        // #146
        {
            id: 'poi_lh_hidden_shrine',
            x: 42.00,
            y: 80.00,
            type: 'shrine',
            name: "Hidden Shrine of the Wanderer",
            description: "A small, hidden shrine dedicated to a forgotten god of travelers and outcasts. It is a place of sanctuary for those on the run, and is secretly maintained by the Rebel Clans.",
            factionId: 'rebel_clans',
            intelReq: 45,
            political_influence: 3,
            economic_value: 1,
            military_strength: 2,
            population: 5
        },
        // #147
        {
            id: 'poi_lh_weeping_valley',
            x: 50.00,
            y: 78.00,
            type: 'landmark',
            name: "The Weeping Valley",
            description: "A narrow valley where a constant, magical rain falls. The plants here grow unusually large and are a source of potent alchemical ingredients.",
            factionId: 'unaligned',
            intelReq: 30,
            political_influence: 1,
            economic_value: 5,
            military_strength: 1,
            population: 0
        },
        // #148
        {
            id: 'poi_lh_kings_road',
            x: 58.00,
            y: 60.00,
            type: 'trade_post',
            name: "The King's Road",
            description: "A stretch of the Great Imperial Road known for frequent bandit attacks and rebel ambushes. Traveling it without an armed escort is a death sentence.",
            factionId: 'unaligned',
            intelReq: 10,
            political_influence: 2,
            economic_value: 4,
            military_strength: 4,
            population: 0
        },
        // #149
        {
            id: 'poi_lh_troll_bridge',
            x: 41.00,
            y: 68.00,
            type: 'bridge',
            name: "Troll's Bridge",
            description: "A sturdy stone bridge over the Serpent River, which is 'owned' by a particularly large and belligerent troll who demands a toll from all who wish to cross.",
            factionId: 'unaligned',
            intelReq: 15,
            political_influence: 1,
            economic_value: 2,
            military_strength: 3,
            population: 1
        },
        // #150
        {
            id: 'poi_lh_centaur_plains',
            x: 55.00,
            y: 80.00,
            type: 'village',
            name: "Centaur Plains",
            description: "The nomadic grazing lands of several independent centaur clans. They are proud and territorial, and have little love for the encroaching Empire.",
            factionId: 'unaligned',
            intelReq: 25,
            political_influence: 4,
            economic_value: 3,
            military_strength: 5,
            population: 300
        }
    ],
    fogOfWar: []
};
