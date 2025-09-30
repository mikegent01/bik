// map-data/baldora-plains-pois.js

export const baldoraPlainsData = {
    pointsOfInterest: [
        // #121
        {
            id: 'poi_bp_trade_road',
            x: 60.00,
            y: 35.00,
            type: 'trade_post',
            name: "The Great Imperial Road",
            description: "A major Imperial highway that cuts through the plains, connecting the capital to the southern provinces. It is constantly patrolled by the Iron Legion and sees heavy merchant traffic.",
            factionId: 'regal_empire',
            intelReq: 5,
            political_influence: 5,
            economic_value: 8,
            military_strength: 6,
            population: 0
        },
        // #122
        {
            id: 'poi_bp_windbreak_village',
            x: 58.00,
            y: 40.00,
            type: 'village',
            name: "Windbreak Village",
            description: "A typical farming village on the plains, known for its hardy people and its massive, ancient windbreak trees that protect it from the constant winds.",
            factionId: 'unaligned',
            intelReq: 10,
            political_influence: 2,
            economic_value: 6,
            military_strength: 2,
            population: 800
        },
        // #123
        {
            id: 'poi_bp_standing_stones',
            x: 52.00,
            y: 35.00,
            type: 'ancient_circle',
            name: "The Standing Stones of Baldor",
            description: "A mysterious circle of massive, weathered monoliths that give the plains their name. They hum with a faint, ancient magic, and their purpose has been lost to time.",
            factionId: 'unaligned',
            intelReq: 25,
            political_influence: 2,
            economic_value: 2,
            military_strength: 2,
            population: 0
        },
        // #124
        {
            id: 'poi_bp_fort_resolute',
            x: 64.00,
            y: 32.00,
            type: 'fortress',
            name: "Fort Resolute",
            description: "A large Iron Legion fortress that guards the eastern edge of the plains and serves as a regional administrative center. It projects Imperial power over the surrounding farmlands.",
            factionId: 'iron_legion',
            intelReq: 20,
            political_influence: 7,
            economic_value: 3,
            military_strength: 9,
            population: 2000
        },
        // #125
        {
            id: 'poi_bp_griffon_aerie',
            x: 54.00,
            y: 44.00,
            type: 'lair',
            name: "Griffon Aerie",
            description: "A series of high, rocky crags that are home to a flock of wild griffons. They are proud, intelligent creatures, and are sometimes tamed by the most skilled knights of the Empire.",
            factionId: 'unaligned',
            intelReq: 40,
            political_influence: 1,
            economic_value: 3,
            military_strength: 5,
            population: 0
        },
        // #126
        {
            id: 'poi_bp_battlefield',
            x: 58.00,
            y: 28.00,
            type: 'battlefield',
            name: "The Field of Lost Banners",
            description: "The site of a decisive battle from the Imperial Unification Wars. The field is still littered with rusting armor and the tattered remnants of old banners. It is said to be haunted.",
            factionId: 'unaligned',
            intelReq: 15,
            political_influence: 1,
            economic_value: 1,
            military_strength: 2,
            population: 0
        },
        // #127
        {
            id: 'poi_bp_rebel_hideout',
            x: 51.00,
            y: 39.00,
            type: 'bandit_camp',
            name: "Rebel Hideout",
            description: "A hidden network of caves and tunnels used by the Rebel Clans to launch hit-and-run attacks on Imperial patrols and supply convoys along the Great Road.",
            factionId: 'rebel_clans',
            intelReq: 35,
            political_influence: 3,
            economic_value: 2,
            military_strength: 5,
            population: 120
        },
        // #128
        {
            id: 'poi_bp_nomad_camp',
            x: 56.00,
            y: 30.00,
            type: 'outpost',
            name: "Nomad Camp",
            description: "A temporary encampment of nomadic horse-clans who roam the Baldora Plains. They are fiercely independent and wary of the Empire's encroaching influence.",
            factionId: 'unaligned',
            intelReq: 10,
            political_influence: 2,
            economic_value: 3,
            military_strength: 3,
            population: 250
        },
        // #129
        {
            id: 'poi_bp_sunken_keep',
            x: 62.00,
            y: 44.00,
            type: 'ruins',
            name: "The Sunken Keep",
            description: "The ruins of a small keep that has slowly sunk into the soft earth of the plains over centuries. Only its highest tower remains visible, and it is rumored to hold a lost treasure.",
            factionId: 'unaligned',
            intelReq: 30,
            political_influence: 1,
            economic_value: 4,
            military_strength: 1,
            population: 0
        },
        // #130
        {
            id: 'poi_bp_imperial_villa',
            x: 66.00,
            y: 38.00,
            type: 'village',
            name: "Imperial Governor's Villa",
            description: "The luxurious country estate of the provincial governor. It is a symbol of Imperial wealth and power, and is protected by a detachment of elite Imperial Guard.",
            factionId: 'regal_empire',
            intelReq: 25,
            political_influence: 6,
            economic_value: 5,
            military_strength: 6,
            population: 200
        },
        // #156
        {
            id: 'poi_bp_vigilance',
            x: 58.00,
            y: 25.00,
            type: 'landmark',
            name: "The 'Vigilance' Airship",
            description: "The legendary airship, currently positioned over the Field of Lost Banners. While its destination is the Imperial Capital, its journey is slow and its presence is a major point of interest for all factions in the region. (Note: This is a mobile landmark).",
            factionId: 'unaligned',
            intelReq: 5,
            political_influence: 6,
            economic_value: 4,
            military_strength: 7,
            population: 20
        }
    ],
    fogOfWar: []
};