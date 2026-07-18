// map-data/warhammer/brettonia.js
export const bretonniaPois = [
    {
        id: 'poi_wh_couronne', x: 48.5, y: 19.0, type: 'capital_city', subRegion: 'bretonnia',
        name: "Couronne",
        description: "The capital of Bretonnia and the seat of its king. A city of towering spires, grand tourney fields, and the great Cathedral of the Lady.",
        factionId: 'bretonnia', intelReq: 5, political_influence: 9, economic_value: 8, military_strength: 8,
    },
    {
        id: 'poi_wh_gisoreux', x: 51.5, y: 22.0, type: 'fortress', subRegion: 'bretonnia',
        name: "Gisoreux",
        description: "A mighty fortress-city guarding the pass into the Grey Mountains, a bastion against the frequent incursions of Greenskins.",
        factionId: 'bretonnia', intelReq: 15, political_influence: 5, economic_value: 4, military_strength: 9,
    },
    {
        id: 'poi_wh_forest_of_arden', x: 50.0, y: 21.0, type: 'forest', subRegion: 'bretonnia',
        name: "Forest of Arden",
        description: "A vast and ancient forest, known for its fierce Beastmen and its reclusive Grail Knights who guard its sacred glades.",
        factionId: 'unaligned', intelReq: 25, political_influence: 3, economic_value: 3, military_strength: 6,
    }
];