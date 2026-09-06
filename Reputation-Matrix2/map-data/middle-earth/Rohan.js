// map-data/middle-earth/Rohan.js

export const rohanData = {
    pointsOfInterest: [
        {
            id: 'poi_me_edoras',
            x: 43.0, y: 68.0,
            type: 'capital_city', subRegion: 'rohan', name: "Edoras, the Golden Hall",
            description: "The capital of Rohan, a city of high wooden halls and thatched roofs, built upon a green hill. At its peak stands Meduseld, the Golden Hall of the Kings, its roof gleaming in the sun.",
            factionId: 'unaligned', intelReq: 15, political_influence: 8, economic_value: 7, military_strength: 7, population: 5000,
            age_of_antiquity: 7, magical_resonance: 3, crime_rate: 2
        },
        {
            id: 'poi_me_helms_deep',
            x: 40.0, y: 70.0,
            type: 'fortress', subRegion: 'rohan', name: "Helm's Deep",
            description: "A great fortress built into a gorge in the White Mountains. The Hornburg stands as its citadel, and the great Deeping Wall has never been taken by assault. A refuge for the people of Rohan in times of war.",
            factionId: 'unaligned', intelReq: 20, political_influence: 6, economic_value: 4, military_strength: 10, population: 1000,
            age_of_antiquity: 9, magical_resonance: 4, crime_rate: 2
        },
        {
            id: 'poi_me_isengard',
            x: 42.0, y: 62.0,
            type: 'fortress', subRegion: 'rohan', name: "Isengard (Orthanc)",
            description: "A great ring of stone built by the Númenóreans of old, now the domain of the wizard Saruman. At its center stands the black, unbreakable tower of Orthanc. Once a place of wisdom, its pits are now filled with forges and the armies of the White Hand.",
            factionId: 'unaligned', intelReq: 30, political_influence: 7, economic_value: 6, military_strength: 9, population: 10000,
            age_of_antiquity: 10, magical_resonance: 9, crime_rate: 8
        },
        {
            id: 'poi_me_glittering_caves',
            x: 40.5, y: 71.0,
            type: 'cave_entrance', subRegion: 'rohan', name: "The Glittering Caves of Aglarond",
            description: "A network of breathtaking crystal caves located behind the fortress of Helm's Deep. A place of natural wonder, beloved by the Dwarves.",
            factionId: 'unaligned', intelReq: 25, political_influence: 2, economic_value: 5, military_strength: 2, population: 10,
            age_of_antiquity: 10, magical_resonance: 5, crime_rate: 1
        },
        {
            id: 'poi_me_fords_of_isen',
            x: 41.0, y: 65.0,
            type: 'landmark', subRegion: 'rohan', name: "The Fords of Isen",
            description: "A strategic river crossing on the River Isen, guarding the Gap of Rohan. It is the site of many great battles between the Rohirrim and the Dunlendings.",
            factionId: 'unaligned', intelReq: 15, political_influence: 2, economic_value: 2, military_strength: 6, population: 0,
            age_of_antiquity: 8, magical_resonance: 2, crime_rate: 5
        },
        {
            id: 'poi_me_fangorn_forest',
            x: 46.0, y: 63.0,
            type: 'forest', subRegion: 'rohan', name: "Fangorn Forest",
            description: "An ancient, dark, and tangled forest, the last remnant of the great forests of the First Age. It is home to the Ents, the ancient shepherds of the trees. A dangerous place for those who carry axes.",
            factionId: 'unaligned', intelReq: 50, political_influence: 4, economic_value: 3, military_strength: 8, population: 100,
            age_of_antiquity: 10, magical_resonance: 9, crime_rate: 3
        },
        // --- Location-article pins (map-preview pass). Rohan's sheet data was
        // written but never spread into middle-earth-pois.js; wiring it in put
        // these Waluipedia locations on the painted map at last. ---
        {
            id: 'poi_me_rohan_hillfort_ruins',
            x: 45.0, y: 66.0,
            type: 'ruins', subRegion: 'rohan', name: "Ruins of Rohan Hillfort",
            description: "A forgotten stronghold of the mobile oath-kingdom on the downs east of Edoras. Its crumbling stones still tell of Rohan's resilience against encroaching threats.",
            factionId: 'unaligned', intelReq: 20, political_influence: 1, economic_value: 1, military_strength: 2, population: 0,
            age_of_antiquity: 8, magical_resonance: 2, crime_rate: 1,
            articleId: 'ruins_of_rohan_hillfort'
        },
        {
            id: 'poi_me_overgrown_rider_camp',
            x: 48.0, y: 65.0,
            type: 'outpost', subRegion: 'rohan', name: "Overgrown Rider Camp",
            description: "An ancient resting site of Rohan's riders on the plains beyond the mountains, now forgotten amidst wildflowers and thorny vines.",
            factionId: 'unaligned', intelReq: 15, political_influence: 1, economic_value: 1, military_strength: 1, population: 0,
            age_of_antiquity: 7, magical_resonance: 2, crime_rate: 1,
            articleId: 'overgrown_rider_camp'
        },
        {
            id: 'poi_me_shadow_pass_ruins',
            x: 40.5, y: 64.0,
            type: 'ruins', subRegion: 'rohan', name: "Ruins of Shadow Pass",
            description: "Fallen fortifications at the pass above the Gap of Rohan: Gondorian masonry raised against the north, now crumbled under time, neglect and the weight of old borders.",
            factionId: 'unaligned', intelReq: 25, political_influence: 1, economic_value: 1, military_strength: 3, population: 0,
            age_of_antiquity: 9, magical_resonance: 3, crime_rate: 2,
            articleId: 'ruins_of_shadow_pass'
        },
        {
            id: 'poi_me_shadow_pass_hillfort',
            x: 40.0, y: 63.2,
            type: 'fortress', subRegion: 'rohan', name: "Shadow Pass Hillfort",
            description: "A weathered hillfort guarding the Shadow Pass approach, shaped by past conflicts and harsh elements into a sprawling, overgrown wilderness.",
            factionId: 'unaligned', intelReq: 25, political_influence: 1, economic_value: 1, military_strength: 3, population: 0,
            age_of_antiquity: 8, magical_resonance: 2, crime_rate: 2,
            articleId: 'overgrown_hillfort_shadow_pass'
        }
    ],
    fogOfWar: []
};
