// map-data/internet/deviant-web.js

export const deviantWebPois = [
    // Deviant Web
    {
        id: 'poi_inet_gallery_whispers',
        x: 15.0, y: 45.0,
        type: 'market', name: "The Gallery of Whispers (DeviantArt)",
        subRegion: 'deviant_web',
        description: "A sprawling, dimly-lit gallery where amateur and outcast artists display their strange and often unsettling works. A place of raw creativity and niche communities.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 15 },
        political_influence: 3, economic_value: 5, military_strength: 2, population: 500,
        age_of_antiquity: 1, crime_rate: 6
    },
    {
        id: 'poi_inet_fanfic_scriptorium',
        x: 12.0, y: 50.0,
        type: 'library', name: "The Fan-Fiction Scriptorium",
        subRegion: 'deviant_web',
        description: "An infinite, ever-expanding library containing stories about every character and world imaginable, written by devoted fans. Quality varies wildly.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 10 },
        political_influence: 2, economic_value: 3, military_strength: 1, population: 1000,
        library_summary: "An infinite, ever-expanding library containing stories about every character and world imaginable, written by devoted fans. Quality varies wildly, but the passion is undeniable. The collection is vast and chaotic, covering every conceivable genre and crossover.",
        libraryStockKey: 'fanfic_scriptorium',
        age_of_antiquity: 1, crime_rate: 7
    },
    {
        id: 'poi_inet_server_slums',
        x: 20.0, y: 55.0,
        type: 'village', name: "The Server Slums",
        subRegion: 'deviant_web',
        description: "A crowded, unstable region of outdated servers and slow connections. Home to digital refugees and those who cannot afford to live on the main Surface Web.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 5 },
        political_influence: 2, economic_value: 2, military_strength: 2, population: 2000,
        age_of_antiquity: 1, crime_rate: 9
    },
    {
        id: 'poi_inet_glitch_market',
        x: 25.0, y: 50.0,
        type: 'market', name: "The Glitch Market",
        subRegion: 'deviant_web',
        description: "A black market that deals in corrupted data, broken code, and unstable programs. It's dangerous, but sometimes a glitch can be exploited into a powerful weapon.",
        factionId: 'freelancer_underworld', intelReq: { faction: 'freelancer_underworld', level: 40 },
        political_influence: 3, economic_value: 6, military_strength: 3, population: 300,
        age_of_antiquity: 1, crime_rate: 8
    },
    {
        id: 'poi_inet_meme_bazaar',
        x: 18.0, y: 60.0,
        type: 'market', name: "The Meme-Weavers' Bazaar",
        subRegion: 'deviant_web',
        description: "A chaotic, underground bazaar where new and often dangerous memes are forged. Information brokers trade in viral potential, and digital artists craft the next wave of cultural phenomena.",
        factionId: 'freelancer_underworld', intelReq: { faction: 'freelancer_underworld', level: 45 },
        political_influence: 4, economic_value: 7, military_strength: 3, population: 200,
        age_of_antiquity: 1, crime_rate: 7
    },
    {
        id: 'poi_inet_forbidden_lore_forum',
        x: 28.0, y: 58.0,
        type: 'haunted_place', name: "The Forum of Forbidden Lore",
        subRegion: 'deviant_web',
        description: "An ancient forum, predating the Federation, where users discuss forbidden magic and dangerous technomancy. The Mages' Guild Conservators constantly try to shut it down.",
        factionId: 'mages_guild', intelReq: { faction: 'mages_guild', level: 65 },
        political_influence: 3, economic_value: 4, military_strength: 4, population: 100,
        age_of_antiquity: 1, crime_rate: 5
    },
];