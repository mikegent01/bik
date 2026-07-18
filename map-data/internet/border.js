// map-data/internet/border.js

export const borderPois = [
    // Farthest West of the Internet Isles (The Border)
    {
        id: 'poi_inet_firewall_gate',
        x: 8.5, y: 30.0,
        type: 'fortress', name: "The Great Firewall Gate",
        subRegion: 'border',
        description: "A colossal, shimmering barrier of pure data that serves as the main entry point from the physical realm into The Internet. All data packets are inspected here by Federation sentinels.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 10 },
        political_influence: 7, economic_value: 5, military_strength: 9, population: 500,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_regal_charter',
        x: 9.5, y: 35.5,
        type: 'outpost', name: "Regal Empire Digital Charter Office",
        subRegion: 'border',
        description: "An embassy of the Regal Empire, existing as a pocket of Imperial law in the digital world. They manage 'visas' for Imperial citizens and monitor data traffic for seditious content.",
        factionId: 'regal_empire', intelReq: { faction: 'regal_empire', level: 30 },
        political_influence: 5, economic_value: 3, military_strength: 6, population: 150,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_glitch_chasm',
        x: 7.0, y: 29.0,
        type: 'landmark', name: "The Glitch Chasm",
        subRegion: 'border',
        description: "A deep, crackling chasm where corrupted data falls into an abyss of nothingness. The chasm serves as a natural, impassable border.",
        factionId: 'unaligned', intelReq: { faction: 'cosmic_jesters', level: 15 },
        political_influence: 1, economic_value: 1, military_strength: 1, population: 0,
        age_of_antiquity: 1, crime_rate: 10
    },
    {
        id: 'poi_inet_last_server',
        x: 10.0, y: 27.5,
        type: 'ruins', name: "The Last Physical Server",
        subRegion: 'border',
        description: "The rusted, monolithic remains of a server from the 'old world'. It is a pilgrimage site for digital historians and a source of rare, archaic hardware for scavengers.",
        factionId: 'unaligned', intelReq: { faction: 'ratchet_raiders', level: 25 },
        political_influence: 2, economic_value: 4, military_strength: 1, population: 10,
        age_of_antiquity: 1, crime_rate: 9
    },
    {
        id: 'poi_inet_packet_inspection',
        x: 8.0, y: 33.0,
        type: 'watchtower', name: "Data Packet Inspection Point",
        subRegion: 'border',
        description: "A Federation checkpoint where data packets are scanned for malware and illegal information before being allowed deeper into the Surface Web.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 15 },
        political_influence: 4, economic_value: 4, military_strength: 7, population: 100,
        age_of_antiquity: 1, crime_rate: 2
    },
];