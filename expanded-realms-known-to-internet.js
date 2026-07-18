// This file contains the expanded, detailed internal factions for several world powers.

export const EXPANDED_REALMS_KNOWN_TO_INTERNET = {
    // --- The Known World ---
    sigmars_command: {
        name: "Lord Sigmar's Command",
        description: "The central military command of the World Federation, personally led by Lord Sigmar. They are responsible for the grand strategy against the Orcs.",
        logo: 'faction_known_world.png', relations: {}, power_level: 8, category: "Major Powers", region: "The Known World", leader: "lord_sigmar"
    },
    orc_clans: {
        name: "The Orc Clans (WAAAGH!)",
        description: "A loose but terrifying coalition of Orc warclans united by their love of battle. They are a constant and unpredictable threat on the Federation's borders.",
        logo: 'faction_known_world.png', relations: {}, power_level: 7, category: "Underworld & Fringe", region: "The Known World", leader: "warboss_grimgul"
    },
    human_militias: {
        name: "Human Militias Alliance",
        description: "A network of local militias from border towns and provinces. Less equipped than the Federation forces, but more experienced in guerilla warfare against Orcs.",
        logo: 'faction_known_world.png', relations: {}, power_level: 6, category: "Regional Powers", region: "The Known World", leader: "captain_helena"
    },
    trade_federations: {
        name: "Trade Federations Council",
        description: "The economic powerhouse of the Known World, a council of powerful merchant guilds that funds much of the war effort in exchange for political influence.",
        logo: 'faction_known_world.png', relations: {}, power_level: 7, category: "Regional Powers", region: "The Known World", leader: "master_trader_voss"
    },

    // --- The World Beyond ---
    imperator_maximus_empire: {
        name: "Imperator Maximus's Empire",
        description: "The core of the expansionist empire, including the senate, the imperial bureaucracy, and the emperor's personal guard.",
        logo: 'faction_world_beyond.png', relations: {}, power_level: 9, category: "Major Powers", region: "The World Beyond", leader: "imperator_maximus"
    },
    imperial_legions: {
        name: "The Imperial Legions",
        description: "The disciplined and seemingly endless armies of the Empire, the primary instrument of the Imperator's expansionist policies.",
        logo: 'faction_world_beyond.png', relations: {}, power_level: 8, category: "Major Powers", region: "The World Beyond", leader: "legate_valerius"
    },
    colonial_administrators: {
        name: "Colonial Administrators",
        description: "The governors and bureaucrats tasked with pacifying and integrating newly conquered territories, often using ruthless methods.",
        logo: 'faction_world_beyond.png', relations: {}, power_level: 6, category: "Regional Powers", region: "The World Beyond", leader: "proconsul_tiber"
    },
    merchant_princes_guild: {
        name: "Merchant Princes' Guild",
        description: "A wealthy guild of merchants who fund the Empire's expeditions in exchange for exclusive trade rights in conquered lands.",
        logo: 'faction_world_beyond.png', relations: {}, power_level: 7, category: "Regional Powers", region: "The World Beyond", leader: "magnate_orion"
    },

    // --- The Edge ---
    explorer_drakes_network: {
        name: "Explorer Drake's Network",
        description: "A loose network of explorers, scouts, and survivalists personally led by Drake, who act as the guardians of the frontier.",
        logo: 'faction_the_edge.png', relations: {}, power_level: 2, category: "Underworld & Fringe", region: "The Edge", leader: "explorer_drake"
    },
    pioneer_settlements: {
        name: "The Pioneer Settlements",
        description: "A handful of small, hardy settlements where pioneers try to eke out a living at the end of the world, reliant on Drake's protection.",
        logo: 'faction_the_edge.png', relations: {}, power_level: 1, category: "Regional Powers", region: "The Edge", leader: "mayor_jane"
    },
    scavenger_crews: {
        name: "Scavenger Crews",
        description: "Nomadic crews who pilot ramshackle vessels near the waterfall's edge, scavenging rare materials and lost relics from the void.",
        logo: 'faction_the_edge.png', relations: {}, power_level: 1, category: "Underworld & Fringe", region: "The Edge", leader: "captain_rex"
    },
    void_gazers: {
        name: "The Void-Gazers",
        description: "A mysterious cult of hermits and mystics who meditate at the Edge, believing they can glean secrets from the abyss.",
        logo: 'faction_the_edge.png', relations: {}, power_level: 1, category: "Mystical & Ancient", region: "The Edge", leader: "old_man_hemlock"
    },

    // --- Equestria ---
    celestias_regime: {
        name: "Queen Celestia's Regime",
        description: "The autocratic government and royal guard that enforces Queen Celestia's immortal rule and pony supremacy.",
        logo: 'faction_equestria.png', relations: {}, power_level: 5, category: "Regional Powers", region: "Equestria", leader: "queen_celestia"
    },
    pony_nobility: {
        name: "The Pony Nobility",
        description: "The elite class of unicorn and pegasus nobles who support Celestia's rule in exchange for power and privilege.",
        logo: 'faction_equestria.png', relations: {}, power_level: 4, category: "Regional Powers", region: "Equestria", leader: "duke_blueblood"
    },
    enslaved_minorities: {
        name: "Enslaved Minorities (Secret Keepers)",
        description: "The various non-pony races (griffons, diamond dogs, etc.) who are marginalized or enslaved. They secretly plot their liberation.",
        logo: 'faction_equestria.png', relations: {}, power_level: 2, category: "Underworld & Fringe", region: "Equestria", leader: "gilda_the_griffon"
    },
    spark_of_rebellion: {
        name: "The Spark of Rebellion",
        description: "A small but growing faction of rebel ponies who believe in equality and seek to overthrow Celestia's tyranny.",
        logo: 'faction_equestria.png', relations: {}, power_level: 2, category: "Underworld & Fringe", region: "Equestria", leader: "starlight_glimmer"
    },

    // --- Grand Line Archipelago ---
    naval_command: {
        name: "Admiral Wave's Naval Command",
        description: "The central command of the Naval Republic's forces, dedicated to bringing law and order to the chaotic seas.",
        logo: 'faction_grand_line.png', relations: {}, power_level: 6, category: "Regional Powers", region: "Grand Line Archipelago", leader: "admiral_wave"
    },
    pirate_crews_coalition: {
        name: "Major Pirate Crews Coalition",
        description: "A loose and treacherous alliance of the most powerful pirate crews who challenge the Navy's dominance and hunt for the ultimate treasure.",
        logo: 'faction_grand_line.png', relations: {}, power_level: 5, category: "Underworld & Fringe", region: "Grand Line Archipelago", leader: "pirate_lord_shanks"
    },
    republic_naval_forces: {
        name: "Republic Naval Forces",
        description: "The rank-and-file sailors and marines who patrol the shipping lanes and battle the pirate menace on a daily basis.",
        logo: 'faction_grand_line.png', relations: {}, power_level: 5, category: "Regional Powers", region: "Grand Line Archipelago", leader: "captain_smoker"
    },
    united_merchant_fleets: {
        name: "United Merchant Fleets",
        description: "The powerful merchant companies that fund the Naval Republic in exchange for protection of their valuable cargo fleets.",
        logo: 'faction_grand_line.png', relations: {}, power_level: 4, category: "Regional Powers", region: "Grand Line Archipelago", leader: "merchant_king_wapol"
    },

    // --- The Internet ---
    admin_zeros_network: {
        name: "Admin Zero's Control Network",
        description: "The core administrators and protocols that maintain the stability and governance of The Internet, led by the enigmatic Admin Zero.",
        logo: 'faction_internet.png', relations: {}, power_level: 6, category: "Regional Powers", region: "The Internet", leader: "admin_zero"
    },
    hacktivist_collectives: {
        name: "Hacktivist Collectives",
        description: "Decentralized groups of hackers and information activists who fight against censorship and control, often clashing with Admin Zero's network.",
        logo: 'faction_internet.png', relations: {}, power_level: 4, category: "Underworld & Fringe", region: "The Internet", leader: "vector"
    },
    data_merchant_guilds: {
        name: "Data Merchant Guilds",
        description: "Powerful guilds that trade in valuable information, encrypted data, and digital assets. They are a major economic force within the digital realm.",
        logo: 'faction_internet.png', relations: {}, power_level: 5, category: "Regional Powers", region: "The Internet", leader: "the_broker_ai"
    },
    cybernetic_collectives: {
        name: "Cybernetic Collectives (AIs)",
        description: "A growing community of sentient AIs and digital consciousnesses who are beginning to advocate for their own rights and a place in the Federation's governance.",
        logo: 'faction_internet.png', relations: {}, power_level: 4, category: "Regional Powers", region: "The Internet", leader: "unit_734"
    }
};