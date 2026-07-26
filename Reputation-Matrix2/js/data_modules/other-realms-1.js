// This file contains faction data for various other realms and dimensions.

export const OTHER_REALMS_1 = {
    aurea_oligarchy: {
        name: "Aurean Technocratic Oligarchy",
        description: "A land of ancient ruins and futuristic designs, where tech and magic coexist under the strict governance of the High Overseer.",
        logo: 'faction_aurea.png',
        relations: { 
            allies: ['mages_guild', 'internet_federation'], 
            enemies: ['regal_empire', 'iron_legion', 'rakasha_clans', 'moonfang_pack', 'rebel_clans', 'the_unchained', 'silver_flame']
        },
        power_level: 9,
        category: "Major Powers",
        region: "Aurea",
        leader: "high_overseer_aurelia",
        notable_people: [
            { name: "High Overseer Aurelia", role: "Techno-Mage Ruler", description: "The enigmatic leader who has fused her own being with ancient magic and advanced technology." },
            { name: "Artificer Kael", role: "Head of Tech Guild", description: "A brilliant but ruthless scientist pushing the boundaries of what's possible, often clashing with the Arcane Scholars." }
        ],
        waluigi_tip: "WAH! So sterile! The 'Technocratic Elite' think they're perfect, but the 'Rebel Hackers' know all their dirty secrets. A little 'anonymous tip' could cause a system-wide crash! Heh heh."
    },
    middle_earth_kingdoms: {
        name: "Kingdoms of Middle Earth",
        description: "A loose coalition of ancient kingdoms of Elves, Dwarves, and Men, defined by a legacy of magic and wars against ancient evils.",
        logo: 'faction_middle_earth.png',
        relations: { 
            allies: ['rakasha_clans', 'rebel_clans'], 
            enemies: ['regal_empire', 'iron_legion', 'onyx_hand', 'koopa_troop', 'the_known_world']
        },
        power_level: 8,
        category: "Major Powers",
        region: "Middle Earth",
        leader: "king_thorin",
        notable_people: [
            { name: "King Thorin", role: "Warrior King", description: "A stoic and honorable king seeking to unite the fractured peoples of Middle Earth against encroaching darkness." },
            { name: "Lady Aranel", role: "Elven Emissary", description: "A wise and ancient elf who acts as a diplomat between the races." }
        ],
        waluigi_tip: "Honor is so boring! The Elves are arrogant, the Dwarves are greedy, and the Humans are easily scared. Just tell the Dwarves the Elves insulted their beards. Instant chaos!"
    },
    pokemon_league: {
        name: "Pokémon League Federation",
        description: "A vibrant realm guided by the bonds between trainers and their Pokémon, with a culture built around competition and cooperation.",
        logo: 'faction_pokemon.png',
        relations: { 
            allies: ['zootopia_republic'], 
            enemies: ['regal_empire', 'iron_legion', 'onyx_hand', 'equestrian_regime']
        },
        power_level: 6,
        category: "Regional Powers",
        region: "Pokémon Regions",
        leader: "champion_carter",
        notable_people: [
            { name: "Champion Carter", role: "League Champion", description: "The strongest trainer in the Federation, a symbol of the bond between humans and Pokémon." },
            { name: "Professor Elm", role: "Head of Pokémon Society", description: "The leading researcher on Pokémon behavior and inter-species communication." }
        ],
        waluigi_tip: "They love rules! Just switch the signs for the Pokémon Center and the 'Team Rocket' hideout. WAH-HA-HA! The resulting confusion will be hilarious!"
    },
    teyvat_hegemony: {
        name: "Teyvat Divine Hegemony",
        description: "A continent ruled by divine Archons where mortals and gods clash for dominion over elemental forces.",
        logo: 'faction_teyvat.png',
        relations: { 
            allies: ['mages_guild', 'faerun_theocracy'], 
            enemies: ['regal_empire', 'silver_flame', 'the_unchained', 'abyss_order']
        },
        power_level: 9,
        category: "Major Powers",
        region: "Teyvat",
        leader: "archon_lumine",
        notable_people: [
            { name: "Archon Lumine", role: "God of Light", description: "The ruling deity of the dominant faction in the Archon War, a being of immense power and conviction." },
            { name: "The Traveler", role: "Outlander", description: "A mysterious figure of great power, searching for their lost sibling amidst the divine conflict." }
        ],
        waluigi_tip: "Gods have the biggest egos! Just tell one Archon that another Archon said their favorite color is lame. Divine temper tantrums are the best kind of chaos!"
    },
    faerun_theocracy: {
        name: "Faerun Mystical Theocracy",
        description: "A realm where magic saturates every aspect of life, and governance is fused with mystical traditions under a supreme sorcerer.",
        logo: 'faction_faerun.png',
        relations: { 
            allies: ['mages_guild', 'teyvat_hegemony'], 
            enemies: ['regal_empire', 'iron_legion', 'silver_flame']
        },
        power_level: 8,
        category: "Major Powers",
        region: "Faerun",
        leader: "high_magus_elion",
        notable_people: [
            { name: "High Magus Elion", role: "Supreme Sorcerer", description: "The powerful and enigmatic ruler who seeks to create a perfect, magically-ordered utopia." },
            { name: "Lady Silverhand", role: "Head of the Mage Council", description: "A legendary mage who oversees the day-to-day application of magical law." }
        ],
        waluigi_tip: "So much magic, so many rules! Just swap the labels on the 'Potion of Ultimate Power' and the 'Potion of Uncontrollable Flatulence'. It's a classic for a reason. WAH!"
    }
};
