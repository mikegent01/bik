
export const EARTH_LAND_FACTIONS = {
    fiore_kingdom: {
        name: "Kingdom of Fiore",
        description: "A neutral nation of 17 million people, known for its deep connection to magic and its wizard guilds.",
        logo: 'faction_fiore.png',
        relations: { 
            allies: ['mages_guild', 'oathbound_judges'], 
            enemies: ['alvarez_empire', 'tartaros_guild']
        },
        power_level: 8,
        category: "Major Powers",
        region: "Earth Land",
        leader: "King Toma E. Fiore",
        notable_people: [
            { name: "Toma E. Fiore", role: "King", description: "The benevolent ruler of Fiore." },
            { name: "Makarov Dreyar", role: "Guild Master", description: "Master of the Fairy Tail guild." }
        ],
        internal_politics: {
            ruling_faction: "royal_family",
            sub_factions: {
                royal_family: {
                    name: "House of Fiore",
                    description: "The royal lineage that has maintained peace in the kingdom for centuries.",
                    influence: 50
                },
                magic_council: {
                    name: "Magic Council",
                    description: "The governing body that oversees the wizard guilds and enforces magical law.",
                    influence: 40
                }
            }
        }
    },
    alvarez_empire: {
        name: "Alvarez Empire",
        description: "A massive military empire from the western continent of Alakitasia, seeking to unify Earth Land under one banner.",
        logo: 'faction_alvarez.png',
        relations: { 
            allies: [], 
            enemies: ['fiore_kingdom', 'regal_empire', 'iron_legion']
        },
        power_level: 9,
        category: "Major Powers",
        region: "Earth Land (West)",
        leader: "Emperor Spriggan",
        notable_people: [
            { name: "Zeref Dragneel", role: "Emperor", description: "The immortal black wizard leading the empire." },
            { name: "August", role: "General", description: "The Magic King, leader of the Spriggan 12." }
        ],
        internal_politics: null
    },
    tartaros_guild: {
        name: "Tartaros",
        description: "A dark guild composed entirely of Etherious demons from the books of Zeref.",
        logo: 'faction_tartaros.png',
        relations: { 
            allies: ['void_drifters'], 
            enemies: ['fiore_kingdom', 'magic_council', 'silver_flame']
        },
        power_level: 7,
        category: "Interdimensional Threat",
        region: "Earth Land (Hidden)",
        leader: "E.N.D.",
        notable_people: [
            { name: "Mard Geer", role: "Underworld King", description: "The de facto leader of Tartaros." }
        ],
        internal_politics: null
    }
};
