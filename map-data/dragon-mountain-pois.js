// map-data/dragon-mountain-pois.js

export const dragonMountainData = {
    pointsOfInterest: [
        {
            id: 'poi_dm_blast_crater',
            x: 42.50,
            y: 43.00,
            type: 'landmark',
            name: "The Great Blast Crater",
            description: "Ground zero of the explosion, now a contested frontline. The Vampire Covenant has established blood wards around the fused glass, harvesting the unstable magic to fuel their war machine. The air smells of ozone and iron.",
            factionId: 'vampire_covenant',
            intelReq: 20,
            political_influence: 1,
            economic_value: 3,
            military_strength: 6, // Increased due to Vampire occupation
            population: 0,
            age_of_antiquity: 1,
            crime_rate: 5
        },
        {
            id: 'poi_dm_fort_tiberius',
            x: 40.00,
            y: 48.00,
            type: 'ruins',
            name: "Occupied Ruins of Fort Tiberius",
            description: "The skeletal remains of the fort have been seized by the Vampires. They have raised the bones of the dead legionnaires to serve as skeletal sentries. It is now a fortified forward operating base against the Lycans.",
            factionId: 'vampire_covenant',
            intelReq: 35,
            political_influence: 3,
            economic_value: 2,
            military_strength: 7, // Highly fortified
            population: 0,
            age_of_antiquity: 4,
            crime_rate: 3
        },
        {
            id: 'poi_dm_wyrms_scar',
            x: 46.00,
            y: 41.00,
            type: 'mountain_pass',
            name: "Wyrm's Scar",
            description: "The Lycan Pack has claimed this treacherous chasm. They use the rocky overhangs to ambush Vampire couriers. The lesser drakes that once infested the area have been hunted to extinction for food by the wolves.",
            factionId: 'lycan_pack',
            intelReq: 25,
            political_influence: 1,
            economic_value: 2,
            military_strength: 6, // Strong Lycan presence
            population: 0,
            age_of_antiquity: 1,
            crime_rate: 8
        },
        {
            id: 'poi_dm_ashfall_village',
            x: 38.00,
            y: 51.00,
            type: 'ruins',
            name: "Ashfall Village",
            description: "The thick ash cloud here blocks out the sun entirely, making it a perfect haven for vampires during the day. The ghosts of the miners have been enslaved by vampire necromancers to act as invisible spies.",
            factionId: 'vampire_covenant',
            intelReq: 15,
            political_influence: 1,
            economic_value: 1,
            military_strength: 4,
            population: 0,
            age_of_antiquity: 4,
            crime_rate: 2
        },
        {
            id: 'poi_dm_elders_eyrie',
            x: 46.50,
            y: 37.00,
            type: 'lair',
            name: "The Elder's Eyrie",
            description: "The war rages below, but neither the Vampires nor the Lycans dare approach the Elder Dragon's lair. The storm around the entrance has intensified, as if the dragon is displeased with the noise of the conflict.",
            factionId: 'unaligned',
            intelReq: 80,
            political_influence: 2,
            economic_value: 5,
            military_strength: 9,
            population: 1,
            age_of_antiquity: 10,
            crime_rate: 1
        },
        {
            id: 'poi_dm_orc_scavengers',
            x: 44.50,
            y: 48.00,
            type: 'bandit_camp',
            name: "Subjugated Orc Camp",
            description: "The Orc warband was brutally defeated by the Lycan Pack two weeks ago. The survivors have been cowed into submission, forced to craft crude armor for the werewolves and serve as shock troops.",
            factionId: 'lycan_pack',
            intelReq: 20,
            political_influence: 2,
            economic_value: 4,
            military_strength: 7, // Orcs + Werewolves
            population: 150, // Reduced population due to fighting
            age_of_antiquity: 1,
            crime_rate: 9
        },
        {
            id: 'poi_dm_obsidian_fields',
            x: 44.00,
            y: 44.00,
            type: 'landmark',
            name: "Obsidian Fields",
            description: "The sharp volcanic glass shreds the paws of the Lycans, making this natural territory for the Vampires who float silently over the hazards. It serves as a kill-zone where they bait werewolves into charging blindly.",
            factionId: 'vampire_covenant',
            intelReq: 10,
            political_influence: 0,
            economic_value: 6,
            military_strength: 3,
            population: 0,
            age_of_antiquity: 1,
            crime_rate: 4
        },
        {
            id: 'poi_dm_dwarven_mine',
            x: 40.50,
            y: 38.00,
            type: 'mine',
            name: "Lycan Den (Former Mine)",
            description: "The Lycans broke the seal on the Dwarven mine and slaughtered whatever was inside. Now, the deep tunnels serve as the central 'Den' for the pack, safe from sunlight and vampire magic.",
            factionId: 'lycan_pack',
            intelReq: 45,
            political_influence: 2,
            economic_value: 7,
            military_strength: 8, // Main base
            population: 0,
            age_of_antiquity: 7,
            crime_rate: 3
        },
        {
            id: 'poi_dm_dragon_cult',
            x: 42.00,
            y: 51.50,
            type: 'shrine',
            name: "Dragon Cultist Shrine",
            description: "The Cultists have struck a tentative alliance with the Vampires, believing the 'immortals' are closer to dragons than humans are. They provide intelligence on Lycan movements in exchange for blood.",
            factionId: 'vampire_covenant', // Aligned via alliance
            intelReq: 60,
            political_influence: 3,
            economic_value: 1,
            military_strength: 5,
            population: 40,
            age_of_antiquity: 1,
            crime_rate: 6
        },
        {
            id: 'poi_dm_last_stand',
            x: 40.50,
            y: 46.00,
            type: 'battlefield',
            name: "Judi's Last Stand",
            description: "The site of General Judi's fall is now a grisly no-man's-land. By night, Lycan scavengers pick through the debris; by day, Vampire thralls patrol. The ground is soaked in fresh blood, layering over the old.",
            factionId: 'lycan_pack', // Currently holding the ground physically
            intelReq: 40,
            political_influence: 1,
            economic_value: 1,
            military_strength: 4,
            population: 0,
            age_of_antiquity: 1,
            crime_rate: 1
        },
        // #157
        {
            id: 'poi_dm_larios_workshop',
            x: 45.0,
            y: 46.0,
            type: 'workshop',
            name: "Lario's War-Torn Workshop",
            description: "Lario is nervously selling upgraded silver-coated scrap to the Vampires and UV-light bombs to the Lycans (via intermediaries). He's terrified one side will find out he's playing both, but the profits are too good to stop.",
            factionId: 'ratchet_raiders',
            intelReq: 25,
            political_influence: 2,
            economic_value: 8, // Value increased due to war profiteering
            military_strength: 5, // Upgraded defenses
            population: 5,
            age_of_antiquity: 1,
            crime_rate: 8
        },
        {
            id: 'poi_dm_rakasha_shrine',
            x: 41.0,
            y: 47.5,
            type: 'shrine',
            name: "Shrine of the Lost Princess",
            description: "The Rakasha have fortified the shrine, refusing entry to both Vampire and Lycan. Chief Thornpaw views the war as a desecration of this sacred ground. Several Lycan corpses litter the perimeter, a warning to the pack.",
            factionId: 'rakasha_clans',
            intelReq: 75,
            political_influence: 3,
            economic_value: 1,
            military_strength: 6, // Increased defense
            population: 5,
            age_of_antiquity: 6,
            crime_rate: 1
        }
    ]
};