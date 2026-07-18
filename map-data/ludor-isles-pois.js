// map-data/ludor-isles-pois.js

export const ludorIslesData = {
    pointsOfInterest: [
        // #91
        {
            id: 'poi_li_port_noir',
            x: 93.00,
            y: 52.00,
            type: 'port',
            name: "Port Noir",
            description: "The largest settlement in the isles, a notorious pirate haven and black market hub. It is a lawless place, nominally independent but secretly influenced by the Crimson Fleet and Freelancer Underworld.",
            factionId: 'freelancer_underworld',
            intelReq: 20,
            political_influence: 6,
            economic_value: 9,
            military_strength: 5,
            population: 3000,
            age_of_antiquity: 4,
            crime_rate: 10
        },
        // #92
        {
            id: 'poi_li_sirens_rock',
            x: 88.00,
            y: 48.00,
            type: 'lair',
            name: "Siren's Rock",
            description: "A jagged rock formation where a coven of sirens lures ships to their doom with an enchanting song. Their nests are said to be filled with the treasures of their victims.",
            factionId: 'unaligned',
            intelReq: 35,
            political_influence: 1,
            economic_value: 4,
            military_strength: 6,
            population: 20,
            age_of_antiquity: 10,
            crime_rate: 8
        },
        // #93
        {
            id: 'poi_li_forgotten_temple',
            x: 90.00,
            y: 60.00,
            type: 'ruins',
            name: "Forgotten Temple of the Stars",
            description: "The vine-choked ruins of a temple dedicated to celestial worship. Its architecture is unlike any known culture, and its chambers are said to be aligned with the constellations.",
            factionId: 'unaligned',
            intelReq: 50,
            political_influence: 2,
            economic_value: 5,
            military_strength: 3,
            population: 0,
            age_of_antiquity: 9,
            crime_rate: 3
        },
        // #94
        {
            id: 'poi_li_crimson_fleet_outpost',
            x: 95.50,
            y: 55.00,
            type: 'outpost',
            name: "Crimson Fleet Outpost",
            description: "A hidden, fortified cove that serves as a forward operating base for Captain Syrup's fleet, allowing her to raid the rich shipping lanes of the eastern Midlands.",
            factionId: 'crimson_fleet',
            intelReq: 45,
            political_influence: 4,
            economic_value: 3,
            military_strength: 7,
            population: 300,
            age_of_antiquity: 1,
            crime_rate: 9
        },
        // #95
        {
            id: 'poi_li_whirlpool_maze',
            x: 87.00,
            y: 55.00,
            type: 'landmark',
            name: "The Whirlpool Maze",
            description: "A treacherous region of the sea filled with unpredictable currents and powerful whirlpools. Navigating it requires immense skill, but it is rumored to hide a path to a sunken city.",
            factionId: 'unaligned',
            intelReq: 30,
            political_influence: 0,
            economic_value: 2,
            military_strength: 4,
            population: 0,
            age_of_antiquity: 10,
            crime_rate: 7
        },
        // #96
        {
            id: 'poi_li_hermit_isle',
            x: 91.00,
            y: 47.00,
            type: 'village',
            name: "Hermit's Isle",
            description: "A tiny, isolated island that is home to a single, ancient turtle-like sage who is said to have lived for a thousand years and knows the secrets of the isles.",
            factionId: 'unaligned',
            intelReq: 60,
            political_influence: 2,
            economic_value: 1,
            military_strength: 2,
            population: 1,
            age_of_antiquity: 10,
            crime_rate: 1
        },
        // #97
        {
            id: 'poi_li_shipwreck_graveyard',
            x: 95.00,
            y: 49.00,
            type: 'shipwreck',
            name: "Shipwreck Graveyard",
            description: "A shallow reef littered with the skeletal remains of hundreds of ships from every era. A rich ground for scavengers and treasure hunters, but also haunted by the ghosts of drowned sailors.",
            factionId: 'unaligned',
            intelReq: 25,
            political_influence: 1,
            economic_value: 6,
            military_strength: 2,
            population: 0,
            age_of_antiquity: 8,
            crime_rate: 5
        },
        // #98
        {
            id: 'poi_li_moon_pool',
            x: 89.00,
            y: 62.00,
            type: 'ley_line',
            name: "The Moon Pool",
            description: "A hidden lagoon whose water glows with a soft, silver light under the moon. The water is said to have powerful healing and restorative properties, and is considered sacred by a local cult.",
            factionId: 'toad_cult',
            intelReq: 55,
            political_influence: 3,
            economic_value: 5,
            military_strength: 3,
            population: 30,
            age_of_antiquity: 9,
            crime_rate: 2
        },
        // #99
        {
            id: 'poi_li_imperial_blockade',
            x: 97.00,
            y: 52.00,
            type: 'barracks',
            name: "Imperial Naval Blockade",
            description: "A small fleet of Iron Legion warships attempting to enforce an Imperial blockade around Port Noir. They are engaged in constant skirmishes with the Crimson Fleet.",
            factionId: 'iron_legion',
            intelReq: 30,
            political_influence: 4,
            economic_value: 2,
            military_strength: 8,
            population: 800,
            age_of_antiquity: 1,
            crime_rate: 2
        },
        // #100
        {
            id: 'poi_li_kraken_trench',
            x: 86.00,
            y: 63.00,
            type: 'lair',
            name: "The Kraken's Trench",
            description: "A deep, dark ocean trench said to be the lair of a colossal, ancient kraken. Sailors tell tales of its massive tentacles dragging entire ships to the depths.",
            factionId: 'unaligned',
            intelReq: 70,
            political_influence: 1,
            economic_value: 2,
            military_strength: 10,
            population: 1,
            age_of_antiquity: 10,
            crime_rate: 6
        }
    ],
    fogOfWar: []
};