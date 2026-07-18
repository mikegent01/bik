// map-data/internet/big-tech.js

export const bigTechPois = [
    // Big Tech
    {
        id: 'poi_inet_redmond_campus',
        x: 75.0, y: 25.0,
        type: 'capital_city', name: "The Redmond Sprawling Campus (Microsoft)",
        subRegion: 'big_tech',
        description: "A vast corporate city-state with its own laws and security. It is a center of software development, but its attempts to create a closed ecosystem often put it at odds with the rest of the web.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 20 },
        political_influence: 9, economic_value: 10, military_strength: 8, population: 15000,
        age_of_antiquity: 1, crime_rate: 2
    },
    {
        id: 'poi_inet_aws_cloud',
        x: 70.0, y: 35.0,
        type: 'ley_line', name: "The AWS Cloud (Amazon)",
        subRegion: 'big_tech',
        description: "A colossal, continent-spanning cloud of servers that provides the backbone for a huge percentage of the entire Internet. Its stability is critical, and it is defended by powerful AI daemons.",
        factionId: 'cybernetic_collectives', intelReq: { faction: 'data_merchant_guilds', level: 30 },
        political_influence: 8, economic_value: 10, military_strength: 9, population: 5000,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_oracle_vaults',
        x: 65.0, y: 20.0,
        type: 'fortress', name: "Oracle Database Vaults",
        subRegion: 'big_tech',
        description: "The most secure data vaults in the digital realm, holding the corporate and government secrets of a thousand worlds. Protected by layers of encryption so complex they are considered a form of magic.",
        factionId: 'data_merchant_guilds', intelReq: { faction: 'data_merchant_guilds', level: 60 },
        political_influence: 7, economic_value: 9, military_strength: 10, population: 800,
        age_of_antiquity: 1, crime_rate: 1
    },
    {
        id: 'poi_inet_big_blue_mainframe',
        x: 80.0, y: 45.0,
        type: 'ruins', name: "Big Blue's Mainframe (IBM)",
        subRegion: 'big_tech',
        description: "An ancient but still incredibly powerful mainframe computer from a bygone era. It is slow and monolithic, but its raw computational power is still respected. It now mostly plays chess with itself.",
        factionId: 'cybernetic_collectives', intelReq: { faction: 'internet_federation', level: 40 },
        political_influence: 4, economic_value: 5, military_strength: 6, population: 10,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_hp_spires',
        x: 83.0, y: 35.0,
        type: 'workshop', name: "HP's Printing Press Spires",
        subRegion: 'big_tech',
        description: "Towering spires that manufacture the physical hardware of the web. Known for their intricate designs and a business model that involves selling printers cheaply and ink cartridges at exorbitant prices.",
        factionId: 'data_merchant_guilds', intelReq: { faction: 'data_merchant_guilds', level: 20 },
        political_influence: 5, economic_value: 8, military_strength: 4, population: 4000,
        age_of_antiquity: 1, crime_rate: 5
    },
    {
        id: 'poi_inet_patent_office',
        x: 68.0, y: 28.0,
        type: 'academy', name: "The Digital Patent Office",
        subRegion: 'big_tech',
        description: "A bureaucratic labyrinth where tech giants wage endless legal wars over intellectual property. It is said the building's code is so convoluted with legalese that it is nearly impossible to navigate.",
        factionId: 'internet_federation', intelReq: { faction: 'internet_federation', level: 35 },
        political_influence: 6, economic_value: 6, military_strength: 5, population: 1000,
        age_of_antiquity: 1, crime_rate: 3
    },
    {
        id: 'poi_inet_server_graveyard',
        x: 78.0, y: 55.0,
        type: 'ruins', name: "The Server Graveyard",
        subRegion: 'big_tech',
        description: "A vast, cold, and dark expanse where decommissioned servers are left to rust. It is a treasure trove for hardware scavengers from the Ratchet Raiders.",
        factionId: 'ratchet_raiders', intelReq: { faction: 'ratchet_raiders', level: 25 },
        political_influence: 2, economic_value: 5, military_strength: 2, population: 200,
        age_of_antiquity: 1, crime_rate: 10
    },
    {
        id: 'poi_inet_adobe_palace',
        x: 62.0, y: 40.0,
        type: 'capital_city', name: "The Adobe Design Palace",
        subRegion: 'big_tech',
        description: "A beautiful, floating palace where the world's creative tools are forged. Access requires a subscription, and its halls are filled with digital artists and designers.",
        factionId: 'unaligned', intelReq: { faction: 'internet_federation', level: 20 },
        political_influence: 6, economic_value: 8, military_strength: 4, population: 3000,
        age_of_antiquity: 1, crime_rate: 4
    },
    {
        id: 'poi_inet_nvidia_farms',
        x: 72.0, y: 18.0,
        type: 'farm', name: "The NVIDIA Rendering Farms",
        subRegion: 'big_tech',
        description: "Vast, humming fields of graphics processing units that render the most complex visuals on the web. The heat they generate creates a perpetual, shimmering haze.",
        factionId: 'cybernetic_collectives', intelReq: { faction: 'cybernetic_collectives', level: 35 },
        political_influence: 5, economic_value: 9, military_strength: 6, population: 1000,
        age_of_antiquity: 1, crime_rate: 3
    },
];