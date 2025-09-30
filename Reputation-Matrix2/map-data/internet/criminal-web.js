// map-data/internet/criminal-web.js

export const criminalWebPois = [
    // Criminal Web
    {
        id: 'poi_inet_silk_overpass',
        x: 30.0, y: 65.0,
        type: 'market', name: "The Silk Overpass (Darknet Market)",
        subRegion: 'criminal_web',
        description: "A notorious marketplace for illegal goods and services. It is technically indexed, but heavily encrypted and accessible only through hidden nodes.",
        factionId: 'freelancer_underworld', intelReq: { faction: 'freelancer_underworld', level: 60 },
        political_influence: 4, economic_value: 8, military_strength: 4, population: 400,
        age_of_antiquity: 1, crime_rate: 4
    },
    {
        id: 'poi_inet_botnet_ranch',
        x: 35.0, y: 70.0,
        type: 'lair', name: "The Botnet Herders' Ranch",
        subRegion: 'criminal_web',
        description: "A hidden server farm where black-hat hackers cultivate and control vast networks of infected computers (bots), renting them out for denial-of-service attacks.",
        factionId: 'freelancer_underworld', intelReq: { faction: 'freelancer_underworld', level: 65 },
        political_influence: 3, economic_value: 6, military_strength: 6, population: 50,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_phishing_reefs',
        x: 40.0, y: 68.0,
        type: 'landmark', name: "The Phishing Reefs",
        subRegion: 'criminal_web',
        description: "A dangerous area of the web filled with fake login pages and deceptive links, designed to steal credentials from unwary travelers.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 20 },
        political_influence: 1, economic_value: 2, military_strength: 3, population: 0,
        age_of_antiquity: 1, crime_rate: 10
    },
    {
        id: 'poi_inet_zeros_first_hack',
        x: 28.0, y: 72.0,
        type: 'shrine', name: "Zero's First Hack (Landmark)",
        subRegion: 'criminal_web',
        description: "A defunct, heavily fire-scarred server that is rumored to be the site of Admin Zero's first legendary hack, which brought down the previous web authority.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 80 },
        political_influence: 3, economic_value: 2, military_strength: 1, population: 0,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_ransomware_fortress',
        x: 38.0, y: 64.0,
        type: 'fortress', name: "Ransomware Fortress",
        subRegion: 'criminal_web',
        description: "The heavily-encrypted fortress of a gang that specializes in kidnapping valuable data and holding it for ransom.",
        factionId: 'freelancer_underworld', intelReq: { faction: 'freelancer_underworld', level: 55 },
        political_influence: 3, economic_value: 7, military_strength: 7, population: 100,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_malware_forge',
        x: 33.0, y: 73.0,
        type: 'workshop', name: "The Malware Forge",
        subRegion: 'criminal_web',
        description: "A heavily-fortified digital forge where black-hat hackers craft malicious code, viruses, and logic bombs for sale on the darknet. A place of immense digital danger.",
        factionId: 'freelancer_underworld', intelReq: { faction: 'freelancer_underworld', level: 70 },
        political_influence: 3, economic_value: 7, military_strength: 7, population: 80,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_identity_bourse',
        x: 43.0, y: 70.0,
        type: 'market', name: "The Identity Bourse",
        subRegion: 'criminal_web',
        description: "A shadowy stock exchange where stolen digital identities are bought and sold. The most valuable commodity here is a clean, high-credit-score persona.",
        factionId: 'data_merchant_guilds', intelReq: { faction: 'data_merchant_guilds', level: 65 },
        political_influence: 4, economic_value: 9, military_strength: 5, population: 200,
        age_of_antiquity: 1, crime_rate: 3
    },
];