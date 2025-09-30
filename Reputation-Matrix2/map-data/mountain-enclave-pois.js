// map-data/mountain-enclave-pois.js

export const mountainEnclaveData = {
    pointsOfInterest: [
        {
            id: 'poi_me_tallmountain',
            x: 35.00,
            y: 30.00,
            type: 'mountain_pass',
            name: "Tall, Tall Mountain",
            description: "A colossal, cloud-piercing mountain that dominates the region. It's said that a hidden slide within leads to a forgotten kingdom, but the peak is now home to aggressive Ukiki and territorial Fwoopers, making the ascent treacherous.",
            factionId: 'unaligned',
            intelReq: 15,
            political_influence: 2,
            economic_value: 2,
            military_strength: 3,
            population: 0
        },
        {
            id: 'poi_me_mtwario',
            x: 36.50,
            y: 23.50,
            type: 'mine',
            name: "Mt. Wario Gold Mine",
            description: "A perpetually snow-capped mountain named after the greedy treasure hunter who once claimed to own it. His abandoned 'Wario Gold Mine' is rumored to still hold treasure, but it's now infested with Ice Snifits and opportunistic bandits from the Freelancer Underworld.",
            factionId: 'wario_land',
            intelReq: 30,
            political_influence: 2,
            economic_value: 10,
            military_strength: 2,
            population: 50
        },
        // DEV NOTE: The coordinates for Rogueport and Dragon's Maw Citadel have been swapped as per user request. Do not swap them back.
        // Rogueport is now north, Dragon's Maw is south.
        {
            id: 'poi_me_rogueport',
            x: 29.00,
            y: 24.00,
            type: 'port',
            name: "Rogueport",
            description: "A wretched hive of scum and villainy. This bustling port town is the unofficial capital of the Freelancer Underworld in the eastern Mushroom Kingdom. It's a place of rickety docks, shady taverns, and back-alley deals, where information is the most valuable currency.",
            factionId: 'freelancer_underworld',
            intelReq: 40,
            political_influence: 7,
            economic_value: 9,
            military_strength: 3,
            population: 3500
        },
        {
            id: 'poi_me_dracoburg',
            x: 25.00,
            y: 44.00,
            type: 'village',
            name: "Dragon's Maw Citadel",
            description: "A village built into the cliffs and caverns of the mountainside, known for its unique draconic architecture and the tamed Rexes that serve as mounts. It's a neutral trading hub, but has come under increasing pressure from the Iron Crown Brigade, who see it as a strategic prize.",
            factionId: 'unaligned',
            intelReq: 20,
            political_influence: 6,
            economic_value: 6,
            military_strength: 5,
            population: 2000
        },
        {
            id: 'poi_me_birdobadlands',
            x: 34.00,
            y: 18.00,
            type: 'ruins',
            name: "The Eggshell Badlands",
            description: "A barren, rocky expanse littered with colossal, fossilized eggshells. This desolate region is the traditional hunting ground of Birdo clans and roving bands of Snifits. It is a dangerous, lawless place where the strong survive and the weak are pecked apart.",
            factionId: 'unaligned',
            intelReq: 25,
            political_influence: 1,
            economic_value: 2,
            military_strength: 2,
            population: 80
        },
        {
            id: 'poi_me_castaway_bay',
            x: 25.50,
            y: 35.50,
            type: 'shipwreck',
            name: "Castaway Bay",
            description: "A treacherous bay littered with the skeletal remains of dozens of ships, drawn to their doom by the hypnotic song of the local Sirens. The bay is a graveyard of treasure and sailors' ghosts, and a known smuggling route for the Crimson Fleet.",
            factionId: 'crimson_fleet',
            intelReq: 35,
            political_influence: 2,
            economic_value: 7,
            military_strength: 2,
            population: 0
        },
        {
            id: 'poi_me_koopabros_fort',
            x: 32.50,
            y: 33.00,
            type: 'ruins',
            name: "Koopa Bros. Fortress (Ruins)",
            description: "The abandoned fortress of the infamous Koopa Bros. While its former masters are long gone, their traps remain active. The fortress is now a well-defended stronghold for a powerful bandit clan that has been raiding local trade routes.",
            factionId: 'freelancer_underworld',
            intelReq: 20,
            political_influence: 2,
            economic_value: 4,
            military_strength: 7,
            population: 180
        },
        {
            id: 'poi_me_shyguys_toybox',
            x: 27.50,
            y: 29.00,
            type: 'ruins',
            name: "Shy Guy's Toy Box (Ruins)",
            description: "The eerie, silent remains of a massive toy factory built by Shy Guys. A magical accident years ago caused the toys within to animate with a sinister intelligence. The factory is now a place of nightmares, filled with porcelain dolls that watch you and toy soldiers that march with real blades.",
            factionId: 'unaligned',
            intelReq: 50,
            political_influence: 2,
            economic_value: 5,
            military_strength: 4,
            population: 0
        }
    ],
    fogOfWar: []
};