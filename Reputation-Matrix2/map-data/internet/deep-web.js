// map-data/internet/deep-web.js

export const deepWebPois = [
    // Deep Web
    {
        id: 'poi_inet_onion_patch',
        x: 20.0, y: 70.0,
        type: 'forest', name: "The Onion Patch (Tor)",
        subRegion: 'deep_web',
        description: "A layered, labyrinthine network of encrypted relays that provides true anonymity. It is the gateway to the Deep Web, a place free from Admin Zero's surveillance.",
        factionId: 'unaligned', intelReq: { faction: 'hacktivist_collectives', level: 50 },
        political_influence: 5, economic_value: 4, military_strength: 6, population: 0,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_whistleblower_sanctuary',
        x: 18.0, y: 75.0,
        type: 'village', name: "The Whistleblower's Sanctuary",
        subRegion: 'deep_web',
        description: "A hidden, heavily protected data haven where those who expose corruption can live safely under the protection of the Hacktivist Collectives.",
        factionId: 'hacktivist_collectives', intelReq: { faction: 'hacktivist_collectives', level: 60 },
        political_influence: 6, economic_value: 3, military_strength: 7, population: 200,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_hacktivist_mainframe',
        x: 22.0, y: 78.0,
        type: 'capital_city', name: "Hacktivist Collective Mainframe",
        subRegion: 'deep_web',
        description: "The decentralized command center for the largest Hacktivist cell. From here, they launch their major operations against corporate and government targets.",
        factionId: 'hacktivist_collectives', intelReq: { faction: 'hacktivist_collectives', level: 70 },
        political_influence: 7, economic_value: 4, military_strength: 8, population: 300,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_unseen_library',
        x: 15.0, y: 68.0,
        type: 'library', name: "The Unseen Library",
        subRegion: 'deep_web',
        description: "A legendary library containing all the information that has ever been deleted or censored from the Surface Web. A place of dangerous, forbidden knowledge.",
        factionId: 'unaligned', intelReq: { faction: 'hacktivist_collectives', level: 85 },
        political_influence: 5, economic_value: 7, military_strength: 3, population: 10,
        library_summary: "A legendary library containing all the information that has ever been deleted or censored from the Surface Web. A place of dangerous, forbidden knowledge, accessible only to those who can find it in the depths of the anonymous network.",
        libraryStockKey: 'unseen_library',
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_cryptovault',
        x: 16.0, y: 72.0,
        type: 'fortress', name: "The Crypto-Vault",
        subRegion: 'deep_web',
        description: "The primary repository for the web's cryptocurrencies. Protected by quantum encryption, it is considered the most secure location in the entire digital realm.",
        factionId: 'data_merchant_guilds', intelReq: { faction: 'data_merchant_guilds', level: 75 },
        political_influence: 6, economic_value: 10, military_strength: 9, population: 50,
        age_of_antiquity: 1, crime_rate: 1
    },
];