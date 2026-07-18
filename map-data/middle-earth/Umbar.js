// map-data/middle-earth/Umbar.js

export const umbarData = {
    pointsOfInterest: [
        {
            id: 'poi_me_umbar_city_center',
            x: 48.00, y: 88.00, type: 'capital_city', subRegion: 'umbar', name: "The City of the Corsairs, Umbar",
            description: "The great, fortified haven of the Corsairs. A city of high white walls and tall ships, where the descendants of Númenor mingle with the peoples of Harad, their shared hatred of Gondor the only law.",
            factionId: 'freelancer_underworld', intelReq: 30, political_influence: 9, economic_value: 9, military_strength: 9, population: 30000, age_of_antiquity: 10, magical_resonance: 6, crime_rate: 9,
        },
        {
            id: 'poi_me_umbar_archives',
            x: 47.50, y: 87.50, type: 'library', subRegion: 'umbar', name: "The Great Archives of Umbar",
            description: "Once a repository of Númenórean sea-lore, these archives now hold the collected histories of the Corsairs, filled with star-charts, tales of plunder, and the dark pacts made in the city's long history.",
            factionId: 'freelancer_underworld', intelReq: 45, political_influence: 6, economic_value: 5, military_strength: 4, population: 100, age_of_antiquity: 9, magical_resonance: 5, crime_rate: 4,
            library_summary: "The Great Archives of Umbar contain a mix of stolen lore and local history, focusing on naval strategy, ancient histories of the south, and tales of the Silmarils from a darker perspective.",
            libraryStockKey: 'umbar_archives',
        },
        {
            id: 'poi_me_umbar_black_shipyards',
            x: 38.00, y: 93.00, type: 'workshop', subRegion: 'umbar', name: "The Black Shipyards",
            description: "Sprawling shipyards where the black-sailed, swift ships of the Corsairs are built. The air is thick with the smell of pitch and sawdust, and the sound of hammers rings day and night.",
            factionId: 'freelancer_underworld', intelReq: 35, political_influence: 4, economic_value: 8, military_strength: 7, population: 4000, age_of_antiquity: 7, magical_resonance: 2, crime_rate: 8,
        },
        {
            id: 'poi_me_umbar_bazaar',
            x: 52.00, y: 90.00, type: 'market', subRegion: 'umbar', name: "The Grand Bazaar",
            description: "A chaotic, sprawling market where goods from all over the south are traded. A place to buy anything from rare spices and silks to captured slaves and forbidden lore.",
            factionId: 'freelancer_underworld', intelReq: 25, political_influence: 5, economic_value: 10, military_strength: 4, population: 6000, age_of_antiquity: 8, magical_resonance: 3, crime_rate: 10,
        },
        {
            id: 'poi_me_umbar_serpents_spire',
            x: 54.00, y: 88.00, type: 'castle', subRegion: 'umbar', name: "The Serpent's Spire",
            description: "The personal fortress of a powerful Corsair lord, known for his cunning and his serpent-prowed flagship. A place of political intrigue and naval command.",
            factionId: 'freelancer_underworld', intelReq: 50, political_influence: 8, economic_value: 6, military_strength: 8, population: 1000, age_of_antiquity: 6, magical_resonance: 4, crime_rate: 9,
        },
        {
            id: 'poi_me_umbar_black_numenorean_citadel',
            x: 43.00, y: 95.00, type: 'fortress', subRegion: 'umbar', name: "Citadel of the Black Númenóreans",
            description: "An ancient, grim fortress that was the seat of power for the original dark settlers of Umbar. It is now a place of dark magic and old secrets, home to a powerful sorcerous cult allied with Mordor.",
            factionId: 'mordor', intelReq: 65, political_influence: 7, economic_value: 5, military_strength: 8, population: 300, age_of_antiquity: 10, magical_resonance: 9, crime_rate: 8,
        },
        {
            id: 'poi_me_umbar_slaves_pits',
            x: 37.00, y: 94.00, type: 'prison', subRegion: 'umbar', name: "The Slaves' Pits",
            description: "Deep, open-air pits where captives from raids are held before being sold in the bazaar. A place of despair and brutal guards.",
            factionId: 'freelancer_underworld', intelReq: 30, political_influence: 2, economic_value: 4, military_strength: 5, population: 2000, age_of_antiquity: 5, magical_resonance: 1, crime_rate: 10,
        },
        {
            id: 'poi_me_umbar_temple_void',
            x: 55.00, y: 94.00, type: 'temple', subRegion: 'umbar', name: "Temple of the Dark Lord",
            description: "A great, black temple where the lords of Umbar openly worshipped Sauron in the Second Age. Though his name is now spoken only in whispers, the dark influence remains strong here.",
            factionId: 'mordor', intelReq: 70, political_influence: 6, economic_value: 2, military_strength: 6, population: 100, age_of_antiquity: 9, magical_resonance: 9, crime_rate: 9,
        },
        {
            id: 'poi_me_umbar_corsairs_flagon',
            x: 49.50, y: 89.00, type: 'inn', subRegion: 'umbar', name: "The Corsair's Flagon",
            description: "A notorious waterfront tavern, the favored drinking hole of ship captains and cutthroats. More plots are hatched here in a single night than in a year in Gondor's courts.",
            factionId: 'freelancer_underworld', intelReq: 20, political_influence: 3, economic_value: 5, military_strength: 3, population: 200, age_of_antiquity: 7, magical_resonance: 1, crime_rate: 10,
        },
        {
            id: 'poi_me_umbar_south_watch',
            x: 46.00, y: 80.00, type: 'watchtower', subRegion: 'umbar', name: "The Southern Watchtower",
            description: "A tall watchtower guarding the southern landward approach to Umbar, protecting it from desert tribes and the forces of Mordor.",
            factionId: 'freelancer_underworld', intelReq: 35, political_influence: 2, economic_value: 1, military_strength: 6, population: 80, age_of_antiquity: 8, magical_resonance: 1, crime_rate: 5,
        },
        {
            id: 'poi_me_umbar_haradrim_quarter',
            x: 53.00, y: 91.00, type: 'village', subRegion: 'umbar', name: "The Haradrim Quarter",
            description: "A district of the city where allied Haradrim merchants, warriors, and their families live. A vibrant, colorful area known for its spice markets and serpent charmers.",
            factionId: 'unaligned', intelReq: 20, political_influence: 4, economic_value: 6, military_strength: 4, population: 5000, age_of_antiquity: 6, magical_resonance: 2, crime_rate: 7,
        },
        {
            id: 'poi_me_umbar_assassins_guild',
            x: 38.00, y: 91.00, type: 'landmark', subRegion: 'umbar', name: "The Veiled Guildhouse",
            description: "The hidden headquarters of a powerful assassins' guild that operates throughout the southern lands. They serve the highest bidder, and their services are often employed by the Corsair lords.",
            factionId: 'freelancer_underworld', intelReq: 60, political_influence: 5, economic_value: 4, military_strength: 7, population: 150, age_of_antiquity: 5, magical_resonance: 3, crime_rate: 10,
        },
        {
            id: 'poi_me_umbar_kings_tomb',
            x: 37.50, y: 92.50, type: 'ruins', subRegion: 'umbar', name: "Forgotten Númenórean Tomb",
            description: "An ancient tomb of a Númenórean king from before the city's fall to shadow. It is rumored to be filled with treasures and protected by ancient wards against the darkness.",
            factionId: 'unaligned', intelReq: 55, political_influence: 2, economic_value: 6, military_strength: 3, population: 0, age_of_antiquity: 10, magical_resonance: 7, crime_rate: 4,
        },
        {
            id: 'poi_me_umbar_spice_warehouses',
            x: 47.00, y: 83.00, type: 'workshop', subRegion: 'umbar', name: "The Spice Warehouses",
            description: "A series of heavily guarded warehouses on the docks where valuable spices, silks, and other goods from the deep south and east are stored before being shipped.",
            factionId: 'freelancer_underworld', intelReq: 20, political_influence: 3, economic_value: 9, military_strength: 4, population: 300, age_of_antiquity: 4, magical_resonance: 1, crime_rate: 6,
        },
        {
            id: 'poi_me_umbar_anchorage',
            x: 40.00, y: 90.00, type: 'port', subRegion: 'umbar', name: "The Corsair Fleet Anchorage",
            description: "The main deep-water harbor of Umbar, capable of holding hundreds of warships. It is the heart of the Corsairs' naval power.",
            factionId: 'freelancer_underworld', intelReq: 25, political_influence: 5, economic_value: 7, military_strength: 9, population: 2000, age_of_antiquity: 10, magical_resonance: 2, crime_rate: 8,
        },
        {
            id: 'poi_me_umbar_salt_barracks',
            x: 44.00, y: 88.00, type: 'barracks', subRegion: 'umbar', name: "The Salt-Caked Barracks",
            description: "The main barracks for the thousands of warriors and sailors who crew the Corsair fleet. A rough and tumble place of constant brawls and training drills.",
            factionId: 'freelancer_underworld', intelReq: 20, political_influence: 3, economic_value: 2, military_strength: 6, population: 3000, age_of_antiquity: 5, magical_resonance: 1, crime_rate: 9,
        },
        {
            id: 'poi_me_umbar_smugglers_tunnels',
            x: 51.00, y: 94.00, type: 'cave_entrance', subRegion: 'umbar', name: "The Smuggler's Tunnels",
            description: "A network of secret tunnels that runs beneath the city, allowing goods to be moved from the docks to the bazaar without passing through the city gates.",
            factionId: 'freelancer_underworld', intelReq: 40, political_influence: 3, economic_value: 5, military_strength: 3, population: 100, age_of_antiquity: 6, magical_resonance: 2, crime_rate: 10,
        },
        {
            id: 'poi_me_umbar_beast_pits',
            x: 54.50, y: 92.50, type: 'lair', subRegion: 'umbar', name: "The Beast Pits",
            description: "Arenas where captured beasts from the jungles of Far Harad are made to fight each other, or captured prisoners, for the entertainment of the Corsair lords.",
            factionId: 'freelancer_underworld', intelReq: 35, political_influence: 2, economic_value: 4, military_strength: 5, population: 500, age_of_antiquity: 4, magical_resonance: 1, crime_rate: 9,
        },
        {
            id: 'poi_me_umbar_gondorian_embassy_ruins',
            x: 49.00, y: 82.00, type: 'ruins', subRegion: 'umbar', name: "Ruins of the Gondorian Embassy",
            description: "The fire-blackened ruins of an embassy built during a brief period of peace with Gondor centuries ago. It was destroyed in a riot and now stands as a monument to the Corsairs' enduring hatred.",
            factionId: 'unaligned', intelReq: 30, political_influence: 2, economic_value: 1, military_strength: 2, population: 0, age_of_antiquity: 6, magical_resonance: 2, crime_rate: 3,
        },
        {
            id: 'poi_me_umbar_sorcerers_tower',
            x: 39.00, y: 94.00, type: 'mages_tower', subRegion: 'umbar', name: "Sorcerer's Tower of the Black Hand",
            description: "A twisted tower of black stone, home to a powerful sorcerer who advises the Corsair lords and practices the dark arts taught by Sauron's emissaries.",
            factionId: 'mordor', intelReq: 75, political_influence: 6, economic_value: 3, military_strength: 7, population: 20, age_of_antiquity: 7, magical_resonance: 9, crime_rate: 9,
        },
    ],
    fogOfWar: [

    ]
};
