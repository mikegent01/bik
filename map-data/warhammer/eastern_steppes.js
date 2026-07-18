// map-data/warhammer/eastern_steppes.js
export const easternSteppesPois = [
    {
        id: 'poi_wh_hobgoblin_dominions', x: 78.0, y: 19.0, type: 'lair', subRegion: 'eastern_steppes',
        name: "The Hobgoblin Dominions",
        description: "The vast, windswept plains that are home to the cruel Hobgoblin Khanates. A land of nomadic warbands, skilled wolf-riders, and countless slaves.",
        factionId: 'hobgoblin_khanates', intelReq: 25, political_influence: 6, economic_value: 4, military_strength: 7,
        age_of_antiquity: 5, magical_resonance: 2, crime_rate: 9,
    },
    {
        id: 'poi_wh_great_wolf_tribe', x: 76.0, y: 21.0, type: 'lair', subRegion: 'eastern_steppes',
        name: "Great Wolf Tribe Camp",
        description: "The main encampment of the most powerful Hobgoblin Khan. A sprawling camp of yurts, slave pens, and wolf enclosures.",
        factionId: 'hobgoblin_khanates', intelReq: 30, political_influence: 5, economic_value: 3, military_strength: 8,
        age_of_antiquity: 4, magical_resonance: 2, crime_rate: 10,
    },
    {
        id: 'poi_wh_slave_caravan_trail', x: 74.0, y: 17.0, type: 'trade_post', subRegion: 'eastern_steppes',
        name: "The Slave Caravan Trail",
        description: "A major trade route used by the Hobgoblins to transport slaves to the Chaos Dwarfs in the Darklands in exchange for weapons and armor.",
        factionId: 'hobgoblin_khanates', intelReq: 20, political_influence: 3, economic_value: 6, military_strength: 4,
        age_of_antiquity: 6, magical_resonance: 1, crime_rate: 10,
    },
    {
        id: 'poi_wh_ruined_cathayan_outpost', x: 80.0, y: 22.0, type: 'ruins', subRegion: 'eastern_steppes',
        name: "Ruined Cathayan Outpost",
        description: "The burnt-out remains of a Cathayan watchtower, destroyed in a recent Hobgoblin raid. A symbol of the constant border conflict.",
        factionId: 'unaligned', intelReq: 15, political_influence: 1, economic_value: 2, military_strength: 2,
        age_of_antiquity: 1, magical_resonance: 1, crime_rate: 7,
    },
    {
        id: 'poi_wh_skull_road', x: 77.0, y: 16.0, type: 'landmark', subRegion: 'eastern_steppes',
        name: "The Skull Road",
        description: "A grim road leading west, its path marked by the skulls of the Hobgoblins' enemies, mounted on spikes as a warning.",
        factionId: 'unaligned', intelReq: 10, political_influence: 1, economic_value: 0, military_strength: 3,
        age_of_antiquity: 5, magical_resonance: 3, crime_rate: 9,
    }
];
