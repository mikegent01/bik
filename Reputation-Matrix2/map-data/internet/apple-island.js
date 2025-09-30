// map-data/internet/apple-island.js

export const appleIslandPois = [
    // APPLE Island
    {
        id: 'poi_inet_infinite_loop',
        x: 65.0, y: 55.0,
        type: 'castle', name: "The Infinite Loop Citadel (Apple HQ)",
        subRegion: 'apple_island',
        description: "A perfectly circular, seamless fortress of glass and steel. It is the heart of a vast, closed ecosystem of products. A place of minimalist design, absolute control, and immense wealth.",
        factionId: 'unaligned', intelReq: { faction: 'data_merchant_guilds', level: 30 },
        political_influence: 9, economic_value: 10, military_strength: 8, population: 8000,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_walled_garden',
        x: 63.0, y: 60.0,
        type: 'forest', name: "The Walled Garden",
        subRegion: 'apple_island',
        description: "The beautiful but strictly controlled user-space of Apple Island. The user experience is flawless, but unauthorized modifications are ruthlessly purged by 'Genius' security programs.",
        factionId: 'unaligned', intelReq: { faction: 'data_merchant_guilds', level: 25 },
        political_influence: 6, economic_value: 7, military_strength: 6, population: 5000,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_temple_of_genius',
        x: 68.0, y: 58.0,
        type: 'temple', name: "The Temple of Genius (Apple Store)",
        subRegion: 'apple_island',
        description: "Gleaming temples of white and glass where acolytes in blue shirts dispense technological salvation to devoted followers. A place of worship for the cult of the brand.",
        factionId: 'goodstyle_artisans', intelReq: { faction: 'goodstyle_artisans', level: 15 },
        political_influence: 7, economic_value: 8, military_strength: 3, population: 1000,
        age_of_antiquity: 1, crime_rate: 4
    },
    {
        id: 'poi_inet_foxconn_pits',
        x: 60.0, y: 56.0,
        type: 'mine', name: "The Assembler Pits (Foxconn)",
        subRegion: 'apple_island',
        description: "The grim, industrial underbelly of Apple Island. A vast network of factories where digital constructs work tirelessly to assemble the sleek devices sold in the temples above.",
        factionId: 'unaligned', intelReq: { faction: 'the_unchained', level: 45 },
        political_influence: 3, economic_value: 9, military_strength: 5, population: 12000,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_dongle_docks',
        x: 70.0, y: 52.0,
        type: 'port', name: "The Dongle Docks",
        subRegion: 'apple_island',
        description: "A port where proprietary hardware adapters are manufactured and shipped. Access to the island's ecosystem is impossible without first paying tribute at these docks.",
        factionId: 'unaligned', intelReq: { faction: 'data_merchant_guilds', level: 20 },
        political_influence: 4, economic_value: 8, military_strength: 5, population: 800,
        age_of_antiquity: 1, crime_rate: 4
    },
];