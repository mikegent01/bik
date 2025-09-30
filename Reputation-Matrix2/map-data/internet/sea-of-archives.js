// map-data/internet/sea-of-archives.js

export const seaOfArchivesPois = [
    // Sea of Archives & Data Ocean
    {
        id: 'poi_inet_mega_archive',
        x: 58.0, y: 30.0,
        type: 'fortress', name: "The Mega-Archive Isle",
        subRegion: 'sea_of_archives',
        description: "A massive, heavily fortified island that serves as a cloud storage data center for the entire realm. It is run by the Data Merchant Guilds.",
        factionId: 'data_merchant_guilds', intelReq: { faction: 'data_merchant_guilds', level: 25 },
        political_influence: 6, economic_value: 10, military_strength: 8, population: 1000,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_wikia_atolls',
        x: 55.0, y: 45.0,
        type: 'village', name: "The Wikia Atolls",
        subRegion: 'sea_of_archives',
        description: "A sprawling chain of user-created islands, each dedicated to a single topic of obsessive detail. The information is not always accurate, but it is always passionate.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 10 },
        political_influence: 4, economic_value: 5, military_strength: 2, population: 2000,
        age_of_antiquity: 1, crime_rate: 5
    },
    {
        id: 'poi_inet_bittorrent_archipelago',
        x: 50.0, y: 60.0,
        type: 'port', name: "The Bittorrent Archipelago",
        subRegion: 'sea_of_archives',
        description: "A chaotic, decentralized network of islands where users freely share data with each other. A haven for pirates and a nightmare for copyright enforcers.",
        factionId: 'freelancer_underworld', intelReq: { faction: 'freelancer_underworld', level: 30 },
        political_influence: 5, economic_value: 8, military_strength: 4, population: 800,
        age_of_antiquity: 1, crime_rate: 9
    },
    {
        id: 'poi_inet_library_zero',
        x: 45.0, y: 50.0,
        type: 'library', name: "The Library of Zero",
        subRegion: 'sea_of_archives',
        description: "A library dedicated to the history of Admin Zero. Most of the books are either empty, written in binary, or simply contain the word 'REDACTED'.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 90 },
        political_influence: 5, economic_value: 2, military_strength: 6, population: 50,
        library_summary: "A library dedicated to the history of Admin Zero. Most of the books are either empty, written in binary, or simply contain the word 'REDACTED'. It offers more questions than answers, but contains a basic guide to navigating the datastream.",
        libraryStockKey: 'library_of_zero',
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_cybernetic_haven',
        x: 38.0, y: 55.0,
        type: 'major_city', name: "Data-Haven of the Cybernetic Collectives",
        subRegion: 'sea_of_archives',
        description: "A city of pure logic and data, incomprehensible to most organic minds. It is the primary node for the enigmatic AI entities.",
        factionId: 'cybernetic_collectives', intelReq: { faction: 'cybernetic_collectives', level: 75 },
        political_influence: 8, economic_value: 7, military_strength: 9, population: 1000,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_siren_server',
        x: 59.0, y: 32.0,
        type: 'lair', name: "The Siren's Server",
        subRegion: 'sea_of_archives',
        description: "A lone, isolated server in the middle of the Data Ocean that emits a strange, alluring signal. Data-sailors who follow it are said to have their packets corrupted and their connections lost forever.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 55 },
        political_influence: 2, economic_value: 3, military_strength: 5, population: 1,
        age_of_antiquity: 1, crime_rate: 8
    },
    {
        id: 'poi_inet_gutenberg_galleon',
        x: 48.0, y: 55.0,
        type: 'shipwreck', name: "The Gutenberg Galleon",
        subRegion: 'sea_of_archives',
        description: "A massive, digital ghost ship that endlessly sails the Sea of Archives. Its sails are made of text, and its cargo hold contains every public domain book ever written. It is crewed by the ghosts of forgotten authors.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 40 },
        political_influence: 3, economic_value: 6, military_strength: 3, population: 100,
        age_of_antiquity: 1, crime_rate: 9
    },
    {
        id: 'poi_inet_soundcloud_sea',
        x: 53.0, y: 20.0,
        type: 'landmark', name: "The Soundcloud Sea",
        subRegion: 'sea_of_archives',
        description: "A region of the web where the data streams are composed entirely of audio. Amateur musicians upload their tracks here, creating a chaotic, ever-changing symphony.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 15 },
        political_influence: 3, economic_value: 6, military_strength: 1, population: 500,
        age_of_antiquity: 1, crime_rate: 6
    },
    {
        id: 'poi_inet_wayback_machine',
        x: 42.0, y: 35.0,
        type: 'watchtower', name: "The Wayback Machine Lighthouse",
        subRegion: 'sea_of_archives',
        description: "A towering lighthouse whose beam does not project light, but snapshots of the past. From its peak, one can view websites as they existed years, or even decades, ago.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 50 },
        political_influence: 4, economic_value: 5, military_strength: 3, population: 20,
        age_of_antiquity: 1, crime_rate: 3
    },
];