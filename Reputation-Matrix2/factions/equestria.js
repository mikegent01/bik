


// factions/equestria.js

export const EQUESTRIA_FACTIONS = {
    equestrian_regime: {
        name: "The Equestrian Regime",
        description: "The absolute, solar-divine authority governing Equestria. Led by the immortal Queen Celestia, the Regime enforces 'Harmony' through a rigid caste system, a powerful secret police (The Ministry of Friendship Enforcement), and the elite Wonderbolts. They view non-pony races as subjects to be 'guided' or contained.",
        logo: 'assets/factions/faction_assets/maps/equestria.png',
        relations: {
            allies: ['regal_empire', 'pony_nobility'],
            enemies: ['spark_of_rebellion', 'zootopia_republic', 'the_unchained', 'liberated_toads', 'changeling_hive']
        },
        power_level: 8,
        category: "Regional Powers",
        region: "Equestria (Cenerlot)",
        leader: "queen_celestia",
        notable_people: [
            { name: "Queen Celestia", role: "Solar Sovereign", description: "The immortal ruler who raises the sun and dictates the law." },
            { name: "Commander Hurricane", role: "Captain of the Royal Guard", description: "The stern commander of the military forces." },
            { name: "Twilight Sparkle", role: "Minister of Arcane Sciences", description: "A powerful mage obsessed with order and magical regulation." }
        ]
    },
    pony_nobility: {
        name: "The Pony Nobility",
        description: "The landed aristocracy of Unicorns and Pegasi who control the economy and local governance. They are obsessed with status, lineage, and maintaining their privileges over Earth Ponies and non-pony species.",
        logo: 'assets/icons/icon_currency.png', // Placeholder or specific logo
        relations: {
            allies: ['equestrian_regime'],
            enemies: ['spark_of_rebellion', 'freelancer_underworld']
        },
        power_level: 6,
        category: "Regional Powers",
        region: "Equestria (High Town)",
        leader: "duke_blueblood",
        notable_people: [
            { name: "Duke Blueblood", role: "High Lord", description: "The epitome of aristocratic arrogance and wealth." },
            { name: "Fancy Pants", role: "Socialite Influencer", description: "A noble who sways public opinion through high society." }
        ]
    },
    spark_of_rebellion: {
        name: "The Spark of Rebellion",
        description: "An underground resistance movement composed of disenfranchised Earth Ponies, changelings, griffons, and other minorities. They operate from the shadows, seeking to dismantle the Regime and establish a republic.",
        logo: 'assets/factions/faction_rebel_clans.png', // Placeholder
        relations: {
            allies: ['the_unchained', 'rebel_clans'],
            enemies: ['equestrian_regime', 'pony_nobility', 'iron_legion']
        },
        power_level: 4,
        category: "Underworld & Fringe",
        region: "Equestria (Undercity)",
        leader: "starlight_glimmer",
        notable_people: [
            { name: "Starlight Glimmer", role: "Revolutionary Leader", description: "A former mage who turned against the system to fight for equality." },
            { name: "Tempest Shadow", role: "Enforcer", description: "A broken-horned mercenary working for the rebels." }
        ]
    },
    changeling_hive: {
        name: "The Changeling Hive",
        description: "A parasitic species of shapeshifters who feed on love and emotion. They infiltrate pony society to survive and undermine the Regime from within.",
        logo: 'assets/factions/faction_rakasha.png', // Placeholder
        relations: {
            allies: ['spark_of_rebellion'],
            enemies: ['equestrian_regime', 'pony_nobility']
        },
        power_level: 5,
        category: "Underworld & Fringe",
        region: "Equestria (Hidden)",
        leader: "queen_chrysalis",
        notable_people: [
            { name: "Queen Chrysalis", role: "Hive Queen", description: "The ruthless leader of the Changelings, seeking to consume all love in Equestria." }
        ]
    },
    griffon_stone: {
        name: "Griffonstone Empire",
        description: "A neighboring empire of proud, greedy griffons. They maintain a tense peace with Equestria, focused entirely on trade and the accumulation of gold.",
        logo: 'assets/factions/faction_world_beyond.png', // Placeholder
        relations: {
            allies: [],
            enemies: []
        },
        power_level: 5,
        category: "Regional Powers",
        region: "Equestria (Borderlands)",
        leader: "king_glover",
        notable_people: [
            { name: "Gilda", role: "Mercenary Captain", description: "A tough griffon mercenary working for whoever pays the most." }
        ]
    },
    farasi: {
        name: "Farasi",
        description: "A mysterious and ancient land bordering the ocean to Teyvat, known for its skilled sailors and unique magic.",
        logo: 'faction_araby.png', // Placeholder
        relations: {
            allies: ['saddle_arabia'],
            enemies: ['equestrian_regime']
        },
        power_level: 4,
        category: "Regional Powers",
        region: "Equestria (South)",
        leader: "sultan_al_rashid",
    },
    zebrabwe: {
        name: "Zebrabwe",
        description: "The homeland of the Zebras, a society known for its intricate alchemy, shamanistic traditions, and fierce warriors.",
        logo: 'assets/factions/faction_forests.png', // Placeholder
        relations: {
            allies: [],
            enemies: []
        },
        power_level: 5,
        category: "Regional Powers",
        region: "Equestria (South)",
        leader: "chief_zecora",
        notable_people: [
            { name: "Zecora", role: "Shaman", description: "A wise alchemist who often aids ponies despite the prejudice she faces." }
        ]
    },
    saddle_arabia: {
        name: "Saddle Arabia",
        description: "A wealthy and powerful nation of horses known for its vast deserts, rich trade routes, and opulent palaces.",
        logo: 'faction_araby.png', // Placeholder
        relations: {
            allies: ['farasi', 'regal_empire'],
            enemies: []
        },
        power_level: 6,
        category: "Regional Powers",
        region: "Equestria (South)",
        leader: "caliph_horseshoe",
    }
};
