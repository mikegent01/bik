// This file contains the expanded, detailed internal factions for several major world powers.

export const EXPANDED_REALMS_AUREA_TO_FAERUN = {
    // --- Aurea ---
    technocratic_elite: {
        name: "Technocratic Elite",
        description: "The ruling class of Aurea, composed of high-ranking techno-mages and oligarchs who believe in progress through strict control.",
        logo: 'faction_aurea.png', relations: {}, power_level: 9, category: "Major Powers", region: "Aurea", leader: "high_overseer_aurelia"
    },
    tech_guild: {
        name: "The Tech Guild",
        description: "The industrial and research arm of Aurea, responsible for creating the nation's advanced magitek. They often push ethical boundaries for the sake of innovation.",
        logo: 'faction_aurea.png', relations: {}, power_level: 8, category: "Regional Powers", region: "Aurea", leader: "artificer_kael"
    },
    arcane_scholars: {
        name: "Arcane Scholars",
        description: "A traditionalist faction of magic purists who view the fusion with technology as a perversion of the arcane arts. They act as a check on the Tech Guild's ambition.",
        logo: 'faction_aurea.png', relations: {}, power_level: 6, category: "Mystical & Ancient", region: "Aurea", leader: "loremaster_vex"
    },
    rebel_hackers: {
        name: "Rebel Hackers",
        description: "A network of digital rebels and anarchists who use their skills to disrupt the Oligarchy's control grid and fight for information freedom.",
        logo: 'faction_aurea.png', relations: {}, power_level: 4, category: "Underworld & Fringe", region: "Aurea", leader: "alias_null"
    },

    // --- Middle Earth ---
    thorins_royal_power: {
        name: "King Thorin's Royal Power",
        description: "The core military and political leadership of the united kingdoms, loyal to King Thorin and his vision of a restored, unified Middle Earth.",
        logo: 'faction_middle_earth.png', relations: {}, power_level: 8, category: "Major Powers", region: "Middle Earth", leader: "king_thorin"
    },
    elven_clans: {
        name: "The Elven Clans",
        description: "Ancient and isolationist, the Elven clans of Mirkwood and Rivendell lend their wisdom and magical prowess to the alliance, though they remain wary of mortal ambitions.",
        logo: 'faction_middle_earth.png', relations: {}, power_level: 7, category: "Mystical & Ancient", region: "Middle Earth", leader: "lady_aranel"
    },
    dwarven_holds: {
        name: "The Dwarven Holds",
        description: "The powerful and wealthy Dwarven clans of the Iron Hills and the Blue Mountains. Their master craftsmanship and stalwart warriors form the backbone of the allied armies.",
        logo: 'faction_middle_earth.png', relations: {}, power_level: 7, category: "Regional Powers", region: "Middle Earth", leader: "forge-thane_dwalin"
    },
    human_tribes: {
        name: "Scattered Human Tribes",
        description: "The independent and hardy tribes of men, including the Rohirrim and the men of Gondor, who have pledged their swords to King Thorin's cause.",
        logo: 'faction_middle_earth.png', relations: {}, power_level: 6, category: "Regional Powers", region: "Middle Earth", leader: "captain_boromir"
    },

    // --- Pokemon Regions ---
    league_authority: {
        name: "League Authority",
        description: "The official governing body of the Pokémon League, responsible for regulating battles, maintaining gyms, and organizing the Champion's tournament.",
        logo: 'faction_pokemon.png', relations: {}, power_level: 6, category: "Regional Powers", region: "Pokemon Regions", leader: "champion_carter"
    },
    trainer_guild: {
        name: "The Trainer Guild",
        description: "An influential organization that provides support, resources, and representation for registered Pokémon trainers. They often lobby the League on behalf of their members.",
        logo: 'faction_pokemon.png', relations: {}, power_level: 5, category: "Regional Powers", region: "Pokemon Regions", leader: "guildmaster_jenny"
    },
    pokemon_society: {
        name: "The Pokémon Society",
        description: "A research organization dedicated to the study of Pokémon behavior, habitats, and the bonds they form with humans. Their findings often influence League policy.",
        logo: 'faction_pokemon.png', relations: {}, power_level: 4, category: "Regional Powers", region: "Pokemon Regions", leader: "professor_elm"
    },
    wildlife_conservators: {
        name: "Wildlife Conservators",
        description: "A group dedicated to protecting wild Pokémon habitats and preserving endangered species from poachers and habitat loss.",
        logo: 'faction_pokemon.png', relations: {}, power_level: 3, category: "Underworld & Fringe", region: "Pokemon Regions", leader: "ranger_brie"
    },

    // --- Teyvat ---
    archon_lumines_power: {
        name: "Archon Lumine's Divine Power",
        description: "The direct forces and followers of the God of Light, forming the dominant political and military entity in the ongoing Archon War.",
        logo: 'faction_teyvat.png', relations: {}, power_level: 9, category: "Major Powers", region: "Teyvat", leader: "archon_lumine"
    },
    elemental_cults: {
        name: "Elemental Cults",
        description: "Various fanatical cults dedicated to the worship of specific elements (Pyro, Cryo, etc.), often acting as independent and unpredictable forces in the war.",
        logo: 'faction_teyvat.png', relations: {}, power_level: 5, category: "Mystical & Ancient", region: "Teyvat", leader: "pyro_prophet_ember"
    },
    divine_guard: {
        name: "The Divine Guard",
        description: "An elite order of mortals sworn to protect the Archons and their temples. They are granted a measure of divine power for their service.",
        logo: 'faction_teyvat.png', relations: {}, power_level: 7, category: "Regional Powers", region: "Teyvat", leader: "captain_aetherius"
    },
    vision_bearers: {
        name: "Mortals (Vision Bearers)",
        description: "A growing faction of mortals who have been granted 'Visions' (elemental powers) and seek to carve out their own destiny, independent of the gods.",
        logo: 'faction_teyvat.png', relations: {}, power_level: 6, category: "Regional Powers", region: "Teyvat", leader: "the_traveler"
    },
    abyss_order: {
        name: "The Abyss Order",
        description: "A shadowy organization of monsters and corrupted beings who seek to overthrow the divine rule of the Archons and plunge the world into chaos.",
        logo: 'faction_teyvat.png', relations: {}, power_level: 7, category: "Underworld & Fringe", region: "Teyvat", leader: "the_abyssal_prince"
    },

    // --- Faerun ---
    high_magus_circle: {
        name: "High Magus Elion's Circle",
        description: "The inner circle of archmages and advisors who directly serve the Supreme Sorcerer, enacting his will to maintain their magical utopia.",
        logo: 'faction_faerun.png', relations: {}, power_level: 8, category: "Major Powers", region: "Faerun", leader: "high_magus_elion"
    },
    mage_council: {
        name: "The Mage Council",
        description: "The legislative body of Faerun's theocracy. While loyal to the High Magus, they often debate the ethical implications of his grand spells and policies.",
        logo: 'faction_faerun.png', relations: {}, power_level: 7, category: "Regional Powers", region: "Faerun", leader: "lady_silverhand"
    },
    warrior_clans_faerun: {
        name: "Warrior Clans of Faerun",
        description: "Various martial orders and warrior clans who serve as the military arm of the theocracy, their blades and bows augmented with powerful enchantments.",
        logo: 'faction_faerun.png', relations: {}, power_level: 6, category: "Regional Powers", region: "Faerun", leader: "warlord_drizzt"
    },
    ancient_keepers: {
        name: "Elven Tribes (Ancient Keepers)",
        description: "Ancient Elven tribes who act as the guardians of Faerun's most powerful magical sites and artifacts, often operating with a degree of autonomy from the Mage Council.",
        logo: 'faction_faerun.png', relations: {}, power_level: 5, category: "Mystical & Ancient", region: "Faerun", leader: "elder_elara"
    }
};