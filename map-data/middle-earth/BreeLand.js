// map-data/middle-earth/BreeLand.js

export const breeLandData = {
    pointsOfInterest: [
        {
            id: 'poi_me_bree',
            x: 34.0, y: 36.0,
            type: 'town', subRegion: 'bree_land', name: "The Town of Bree",
            description: "A bustling town of Men and Hobbits, located at the crossing of the Great East Road and the Greenway. It is a major center of trade and travel, and a place where news from all corners of the world can be heard.",
            factionId: 'unaligned', intelReq: 10, political_influence: 4, economic_value: 7, military_strength: 3, population: 1500,
            age_of_antiquity: 7, magical_resonance: 2, crime_rate: 4
        },
        {
            id: 'poi_me_prancing_pony',
            x: 34.2, y: 36.2,
            type: 'inn', subRegion: 'bree_land', name: "The Prancing Pony Inn",
            description: "A famous and ancient inn in the heart of Bree, a meeting place for all sorts of folk—Hobbits, Men, Dwarves, and even Rangers of the North. Run by the forgetful but good-hearted Barliman Butterbur.",
            factionId: 'unaligned', intelReq: 5, political_influence: 3, economic_value: 6, military_strength: 1, population: 50,
            age_of_antiquity: 8, magical_resonance: 3, crime_rate: 3
        },
        {
            id: 'poi_me_staddle',
            x: 34.8, y: 36.8,
            type: 'village', subRegion: 'bree_land', name: "Staddle",
            description: "A quiet village on the south-eastern slopes of Bree-hill, mostly inhabited by Hobbits who farm the surrounding lands. Known for its pipe-weed and friendly folk.",
            factionId: 'unaligned', intelReq: 10, political_influence: 2, economic_value: 4, military_strength: 1, population: 600,
            age_of_antiquity: 7, magical_resonance: 1, crime_rate: 2
        },
        {
            id: 'poi_me_combe',
            x: 35.0, y: 35.5,
            type: 'village', subRegion: 'bree_land', name: "Combe",
            description: "A village of Men nestled in a deep valley to the east of Bree-hill. The people here are more suspicious of outsiders than those in Bree.",
            factionId: 'unaligned', intelReq: 10, political_influence: 2, economic_value: 3, military_strength: 2, population: 500,
            age_of_antiquity: 7, magical_resonance: 1, crime_rate: 3
        },
        {
            id: 'poi_me_archet',
            x: 35.5, y: 34.0,
            type: 'village', subRegion: 'bree_land', name: "Archet",
            description: "The northernmost village of Bree-land, situated on the edge of the Chetwood. A quiet place, but close to the wilder lands to the north.",
            factionId: 'unaligned', intelReq: 10, political_influence: 2, economic_value: 3, military_strength: 2, population: 400,
            age_of_antiquity: 7, magical_resonance: 2, crime_rate: 4
        },
        {
            id: 'poi_me_barrow_downs',
            x: 33.5, y: 41.5,
            type: 'haunted_place', subRegion: 'bree_land', name: "The Barrow-downs",
            description: "A series of green, rolling hills dotted with the ancient burial mounds of the kings of old. The area is now a place of great dread, haunted by malevolent spirits known as Barrow-wights.",
            factionId: 'unaligned', intelReq: 40, political_influence: 1, economic_value: 3, military_strength: 6, population: 0,
            age_of_antiquity: 10, magical_resonance: 9, crime_rate: 9
        }
    ]
};
