// This file contains the expanded, detailed internal factions for several world powers.

export const EXPANDED_REALMS_ZOOTOPIA_TO_DIVIDED = {
    // --- Zootopia ---
    presidential_admin: {
        name: "Presidential Administration",
        description: "The current government of Zootopia, led by President Judy, focused on progressive reforms and interspecies cooperation.",
        logo: 'faction_zootopia.png', relations: {}, power_level: 6, category: "Regional Powers", region: "Zootopia", leader: "president_judy"
    },
    animal_rights_groups: {
        name: "Animal Rights Groups",
        description: "A coalition of activist groups that lobby for landmark legislation protecting minority species and challenging systemic prejudice.",
        logo: 'faction_zootopia.png', relations: {}, power_level: 4, category: "Regional Powers", region: "Zootopia", leader: "activist_finnick"
    },
    civic_coalition: {
        name: "The Civic Coalition",
        description: "A non-profit organization that champions community programs to promote social harmony and provides aid to disadvantaged species.",
        logo: 'faction_zootopia.png', relations: {}, power_level: 3, category: "Regional Powers", region: "Zootopia", leader: "director_bellwether"
    },
    trade_unions_zootopia: {
        name: "Zootopian Trade Unions",
        description: "Powerful unions that represent workers from various sectors, ensuring fair representation and economic opportunities for all.",
        logo: 'faction_zootopia.png', relations: {}, power_level: 5, category: "Regional Powers", region: "Zootopia", leader: "union_boss_bogo"
    },

    // --- Realm of Forests ---
    tribal_confederacy: {
        name: "The Tribal Confederacy",
        description: "The ruling council of chiefs from the various forest tribes, who make decisions for the collective defense of their ancestral lands.",
        logo: 'faction_forests.png', relations: {}, power_level: 5, category: "Regional Powers", region: "Realm of Forests", leader: "chief_redwood"
    },
    pathfinders: {
        name: "Forest Tribes (Pathfinders)",
        description: "The scouts and warriors of the Confederacy, responsible for patrolling the borders and guiding their people through the dense jungles.",
        logo: 'faction_forests.png', relations: {}, power_level: 4, category: "Regional Powers", region: "Realm of Forests", leader: "kaelen_swift-arrow"
    },
    beastmasters: {
        name: "Wild Guardians (Beastmasters)",
        description: "A specialized group of tribesfolk who form powerful bonds with the wild creatures of the forest, acting as both shepherds and cavalry.",
        logo: 'faction_forests.png', relations: {}, power_level: 4, category: "Mystical & Ancient", region: "Realm of Forests", leader: "beast-caller_zola"
    },
    nature_shamans: {
        name: "Nature Shamans",
        description: "The spiritual leaders of the tribes, who commune with forest spirits and use their knowledge to heal the land and their people.",
        logo: 'faction_forests.png', relations: {}, power_level: 3, category: "Mystical & Ancient", region: "Realm of Forests", leader: "elder_birch"
    },

    // --- L'Eclaire Island ---
    ruler_dougs_authority: {
        name: "Ruler Doug's Authority",
        description: "The charismatic leader and his inner circle, who control the island's government and military with popular support.",
        logo: 'faction_leclaire.png', relations: {}, power_level: 4, category: "Regional Powers", region: "L'Eclaire Island", leader: "ruler_doug"
    },
    islanders_united: {
        name: "Islanders United (Pro-Expansion)",
        description: "A populist movement fiercely loyal to Ruler Doug, who believe in his vision of unifying the Doughnut World under their banner.",
        logo: 'faction_leclaire.png', relations: {}, power_level: 3, category: "Regional Powers", region: "L'Eclaire Island", leader: "speaker_marco"
    },
    reformist_movement: {
        name: "The Reformist Movement (Isolationists)",
        description: "A minority political faction that opposes Ruler Doug's expansionist plans, advocating for peace and isolationism.",
        logo: 'faction_leclaire.png', relations: {}, power_level: 2, category: "Regional Powers", region: "L'Eclaire Island", leader: "elara_vance"
    },
    local_militias: {
        name: "Local Militias",
        description: "The surprisingly well-trained and equipped citizen militias that form the backbone of L'Eclaire's military might.",
        logo: 'faction_leclaire.png', relations: {}, power_level: 3, category: "Regional Powers", region: "L'Eclaire Island", leader: "general_matisse"
    },

    // --- Triple Moon World ---
    warlord_lunas_forces: {
        name: "Warlord Luna's Forces",
        description: "The largest and most powerful remnant faction, a brutal but organized military that controls the most stable territories.",
        logo: 'faction_triple_moon.png', relations: {}, power_level: 3, category: "Underworld & Fringe", region: "Triple Moon World", leader: "warlord_luna"
    },
    survivor_enclaves: {
        name: "Survivor Enclaves",
        description: "A loose network of fortified settlements where civilians try to rebuild a semblance of society amidst the chaos.",
        logo: 'faction_triple_moon.png', relations: {}, power_level: 2, category: "Regional Powers", region: "Triple Moon World", leader: "elder_jax"
    },
    raider_clans: {
        name: "Raider Clans",
        description: "Various nomadic clans of raiders and scavengers who prey on the weak and fight over the scraps of the old world.",
        logo: 'faction_triple_moon.png', relations: {}, power_level: 2, category: "Underworld & Fringe", region: "Triple Moon World", leader: "scrap-king_rex"
    },
    void_cultists: {
        name: "Void Cultists",
        description: "A nihilistic cult that worships the gaping holes into space, believing that the destruction of their world is a divine calling.",
        logo: 'faction_triple_moon.png', relations: {}, power_level: 2, category: "Mystical & Ancient", region: "Triple Moon World", leader: "the_hollow_one"
    },

    // --- Divided Realms ---
    varis_coalition: {
        name: "President Varis's Coalition",
        description: "The ruling coalition of the Fragmented Republic, a shaky alliance of island-states held together by President Varis's political maneuvering.",
        logo: 'faction_divided_realms.png', relations: {}, power_level: 7, category: "Regional Powers", region: "Divided Realms", leader: "president_varis"
    },
    revolutionary_front: {
        name: "The Revolutionary Front",
        description: "A rebel movement that seeks to overthrow the current republic, which they see as corrupt, and establish a true democracy for all islanders.",
        logo: 'faction_divided_realms.png', relations: {}, power_level: 5, category: "Underworld & Fringe", region: "Divided Realms", leader: "commander_rex"
    },
    merchant_guilds_conglomerate: {
        name: "Merchant Guilds Conglomerate",
        description: "A powerful cabal of merchant guilds that controls almost all trade in the realms. Their economic power is immense, often allowing them to act as kingmakers.",
        logo: 'faction_divided_realms.png', relations: {}, power_level: 6, category: "Regional Powers", region: "Divided Realms", leader: "silas_kane"
    },
    independent_islands: {
        name: "Independent Island Coalitions",
        description: "Several powerful island-states that have refused to join Varis's coalition, fiercely guarding their independence and often acting as spoilers in republican politics.",
        logo: 'faction_divided_realms.png', relations: {}, power_level: 5, category: "Regional Powers", region: "Divided Realms", leader: "governor_tessa"
    }
};