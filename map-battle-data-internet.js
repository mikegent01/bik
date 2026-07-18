// This file contains new troop deployments for The Internet region.

export const INTERNET_TROOPS = [
    {
        id: 'inet_troop_1',
        mapId: 'internet_full',
        x: 10.0,
        y: 32.0,
        factionId: 'internet_federation',
        name: "Federation Firewall Patrol",
        unitType: 'patrol',
        strength: "Anti-Malware Sentinels",
        path: "M 10,32 L 12,35 L 9,36 Z",
        details: {
            status: "Patrolling",
            objective: "Scan incoming data packets at the Great Firewall Gate for viruses and illegal code.",
            supply_level: 100,
            morale: 90,
            organization: 95,
            intelReq: { faction: 'internet_federation', level: 15 }
        }
    },
    {
        id: 'inet_troop_2',
        mapId: 'internet_full',
        x: 19.0,
        y: 73.0,
        factionId: 'hacktivist_collectives',
        name: "Deep Web Freedom Cell",
        unitType: 'ambush',
        strength: "Anonymous Hackers",
        details: {
            status: "Hiding",
            objective: "Use the anonymity of the Deep Web to plan data heists and cyber-attacks against corporate and Federation targets.",
            supply_level: 40,
            morale: 95,
            organization: 70,
            intelReq: { faction: 'hacktivist_collectives', level: 65 }
        }
    },
    {
        id: 'inet_troop_3',
        mapId: 'internet_full',
        x: 55.0,
        y: 33.0,
        factionId: 'data_merchant_guilds',
        name: "Data Merchant Convoy",
        unitType: 'patrol',
        strength: "Armored Data-Haulers",
        path: "M 55,33 L 58,36 L 54,37 Z",
        details: {
            status: "Transporting",
            objective: "Move high-value, encrypted data from the Mega-Archive Isle to clients in the Big Tech region through the Data Ocean.",
            supply_level: 90,
            morale: 70,
            organization: 85,
            intelReq: { faction: 'data_merchant_guilds', level: 30 }
        }
    },
    {
        id: 'inet_troop_4',
        mapId: 'internet_full',
        x: 40.0,
        y: 58.0,
        factionId: 'cybernetic_collectives',
        name: "Observing AI Entity",
        unitType: 'special_ops',
        strength: "Singular AI Presence",
        details: {
            status: "Observing",
            objective: "Gather data on the conflicts of biological and lesser digital beings for analysis. Motives are unknown.",
            supply_level: 100,
            morale: 100,
            organization: 100,
            intelReq: { faction: 'cybernetic_collectives', level: 80 }
        }
    },
    {
        id: 'inet_troop_5',
        mapId: 'internet_full',
        x: 27.0,
        y: 27.0,
        factionId: 'cosmic_jesters',
        name: "Digital Prankster",
        unitType: 'special_ops',
        strength: "One agent of chaos",
        details: {
            status: "Trolling",
            objective: "Inject random, nonsensical data into the Great Social Forum to maximize confusion and absurdity.",
            supply_level: 100,
            morale: 100,
            organization: 5,
            intelReq: { faction: 'cosmic_jesters', level: 50 }
        }
    }
];