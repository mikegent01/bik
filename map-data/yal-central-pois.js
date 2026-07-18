// map-data/yal-central-pois.js

export const yalCentralData = {
    pointsOfInterest: [
        // #151
        {
            id: 'poi_yc_port_toadstool',
            x: 22.00,
            y: 40.00,
            type: 'port',
            name: "Port Toadstool West",
            description: "A bustling Mushroom Kingdom colonial port, established to facilitate trade with the central provinces of the Midlands. It's a colorful, chaotic town, a blend of Toadratic architecture and Imperial pragmatism.",
            factionId: 'mushroom_regency',
            intelReq: 20,
            political_influence: 6,
            economic_value: 9,
            military_strength: 5,
            population: 5000
        },
        // #152
        {
            id: 'poi_yc_central_plains',
            x: 25.00,
            y: 50.00,
            type: 'farm',
            name: "Yal Central Plains",
            description: "Vast, fertile plains that serve as a breadbasket for the region. The area is dotted with small farming communities and is a strategic target for any army needing to feed its troops.",
            factionId: 'unaligned',
            intelReq: 5,
            political_influence: 3,
            economic_value: 10,
            military_strength: 2,
            population: 3000
        },
        // #153
        {
            id: 'poi_yc_imperial_toll_fort',
            x: 28.00,
            y: 57.00,
            type: 'fortress',
            name: "Imperial Toll Fort",
            description: "A stern Imperial fort that controls the main road connecting Yal Central to the southern Midlands. They extract a heavy tax from all goods passing north, a major source of friction with Port Toadstool.",
            factionId: 'iron_legion',
            intelReq: 25,
            political_influence: 5,
            economic_value: 4,
            military_strength: 8,
            population: 600
        },
        // #154
        {
            id: 'poi_yc_whispering_reeds',
            x: 16.00,
            y: 55.00,
            type: 'swamp',
            name: "The Whispering Reeds",
            description: "A dense marshland along the coast. The reeds are said to whisper secrets on the wind, and it's a known hiding place for smugglers and deserters.",
            factionId: 'freelancer_underworld',
            intelReq: 30,
            political_influence: 2,
            economic_value: 3,
            military_strength: 3,
            population: 40
        },
        // #155
        {
            id: 'poi_yc_ruined_abbey',
            x: 18.00,
            y: 45.00,
            type: 'ruins',
            name: "Ruined Abbey of the Silent Sisters",
            description: "The beautiful, crumbling ruins of an ancient abbey. It is now a place of eerie silence, said to be haunted by the ghosts of the sisters who prayed for peace.",
            factionId: 'unaligned',
            intelReq: 35,
            political_influence: 2,
            economic_value: 2,
            military_strength: 1,
            population: 0
        }
    ],
    fogOfWar: []
};