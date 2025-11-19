
// factions/equestria.js

export const EQUESTRIA_FACTIONS = {
    equestrian_regime: {
        name: "The Equestrian Regime",
        description: "The absolute, solar-divine authority governing Equestria. Led by the immortal Queen Celestia, the Regime enforces 'Harmony' through a rigid caste system, a powerful secret police (The Ministry of Friendship Enforcement), and the elite Wonderbolts. They view non-pony races as subjects to be 'guided' or contained.",
        logo: 'faction_equestria.png',
        relations: {
            allies: ['regal_empire', 'pony_nobility'],
            enemies: ['spark_of_rebellion', 'zootopia_republic', 'the_unchained', 'liberated_toads']
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
        logo: 'icon_currency.png', // Placeholder or specific logo
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
        logo: 'faction_rebel_clans.png', // Placeholder
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
    }
};
