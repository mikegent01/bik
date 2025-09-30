// map-data/battlefield-ravencreek-pois.js

export const ravencreekPois = [
    {
        id: 'poi_bf_moonfang_hq',
        x: 50.00, y: 19.50,
        type: 'outpost',
        name: "Moonfang Pack Command Post",
        description: "The forward command post for the Moonfang Pack's vanguard, led by Grak Ironhide. From here, they coordinate their assault on the vampire forces at the river.",
        factionId: 'moonfang_pack',
        intelReq: 20,
        political_influence: 5,
        economic_value: 2,
        military_strength: 6
    },
    {
        id: 'poi_bf_sanguine_hq',
        x: 55.50, y: 74.00,
        type: 'outpost',
        name: "Sanguine Legion Command",
        description: "Baron Von Hess commands the vampire forces from this fortified manor in the town of Ravencreek. It serves as the nerve center for the defense of the southern bank.",
        factionId: 'onyx_hand',
        intelReq: 20,
        political_influence: 6,
        economic_value: 3,
        military_strength: 7
    },
    {
        id: 'poi_bf_regal_observation',
        x: 65.00, y: 90.00,
        type: 'watchtower',
        name: "Imperial Observation Post",
        description: "A fortified observation post on a southern ridge, manned by Sir Reginald Stonebridge and his Legionnaires. Their official orders are to observe and contain the conflict, not to intervene.",
        factionId: 'regal_empire',
        intelReq: 20,
        political_influence: 4,
        economic_value: 1,
        military_strength: 5
    }
];
