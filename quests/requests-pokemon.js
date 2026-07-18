// quests/requests-pokemon.js

export const POKEMON_REQUESTS = {
    // Unova
    'req_un_fossil_theft': {
        id: 'req_un_fossil_theft', title: "Request: Stolen Dragon Skull", type: 'request', category: 'Requests',
        objective: "An elder in the historic Opelucid City is seeking skilled individuals to track down a thief who has stolen a priceless dragon skull fossil from the local museum. The trail leads into the lawless outer routes.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_un_opelucid'
    },
    'req_un_dream_mist': {
        id: 'req_un_dream_mist', title: "Request: A Researcher's Need", type: 'request', category: 'Requests',
        objective: "A scientist studying dreams needs a sample of 'Dream Mist', which is only emitted by certain Psychic-type Pokémon in the abandoned Dreamyard. She's offering rare items in exchange for a fresh sample.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_un_dreamyard'
    },

    // Oore
    'req_oo_shadow_bounty': {
        id: 'req_oo_shadow_bounty', title: "Request: Shadow Pokémon Bounty", type: 'request', category: 'Requests',
        objective: "A notice posted on the Pyrite Town bounty board offers a substantial reward for the capture and purification of a particularly vicious Shadow Tyranitar that has been terrorizing local prospectors.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_oo_pyrite_town'
    },
    'req_oo_purify_test': {
        id: 'req_oo_purify_test', title: "Request: Field Test", type: 'request', category: 'Requests',
        objective: "A scientist at the Pokémon HQ Lab needs a team to help field-test a new prototype of the Purification Chamber. They need a team to capture a Shadow Pokémon and bring it back for the experiment.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_oo_hq_lab'
    },

    // Kanto
    'req_kn_silph_co_security': {
        id: 'req_kn_silph_co_security', title: "Request: Security Consultants", type: 'request', category: 'Requests',
        objective: "Following the recent hostile takeover attempt by Team Rocket, the Silph Co. is hiring independent security consultants to audit their headquarters in Saffron City and identify remaining vulnerabilities.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_kn_silph_co'
    },
    'req_kn_lavender_ghost': {
        id: 'req_kn_lavender_ghost', title: "Request: A Final Farewell", type: 'request', category: 'Requests',
        objective: "An elderly woman in Lavender Town is seeking someone to place a bouquet of flowers on her deceased Marowak's grave at the very top of the haunted Pokémon Tower, a task she is too afraid to do herself.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_kn_lavender'
    },

    // Johto
    'req_jo_radio_signal': {
        id: 'req_jo_radio_signal', title: "Request: Signal Interference", type: 'request', category: 'Requests',
        objective: "The manager of the Goldenrod Radio Tower is experiencing signal interference that he believes is a precursor to another Team Rocket takeover. He's hiring a discreet team to find and disable the source of the broadcast.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_jo_radio_tower'
    },
    'req_jo_ecruteak_artifact': {
        id: 'req_jo_ecruteak_artifact', title: "Request: An Ancient Relic", type: 'request', category: 'Requests',
        objective: "A historian in Ecruteak City will pay handsomely for the recovery of a 'Clear Bell' artifact, believed to be lost in the most dangerous, unstable levels of the Burned Tower.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_jo_ecruteak'
    },

    // Hoenn
    'req_ho_weather_guard': {
        id: 'req_ho_weather_guard', title: "Request: Guard Duty", type: 'request', category: 'Requests',
        objective: "The Weather Institute is anticipating another raid from Team Aqua or Magma. They are hiring powerful trainers to bolster their defenses for the next 48 hours. The pay is excellent.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_ho_weather_institute'
    },
    'req_ho_devon_heist': {
        id: 'req_ho_devon_heist', title: "Request: Corporate Espionage", type: 'request', category: 'Requests',
        objective: "An anonymous client wants to hire a team to infiltrate the Devon Corporation in Rustboro and steal the blueprints for their new 'Poké Ball Enhancement' technology. The client promises a massive payout.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_ho_rustboro'
    },

    // Kalos
    'req_ka_lumiose_fashion': {
        id: 'req_ka_lumiose_fashion', title: "Request: A Fashion Emergency", type: 'request', category: 'Requests',
        objective: "A famous fashion designer in Lumiose City needs the iridescent feathers of a rare Vivillon pattern for her latest creation. The Pokémon can only be found in a remote, hard-to-reach part of the region.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_ka_lumiose'
    },
    'req_ka_factory_recall': {
        id: 'req_ka_factory_recall', title: "Request: Malfunctioning Product", type: 'request', category: 'Requests',
        objective: "The Poké Ball Factory is having a crisis. A batch of Quick Balls has a malfunction that causes them to teleport randomly. They need a team to track down and recall the defective products before they cause a major incident.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_ka_pokeball_factory'
    },

    // Paldea
    'req_pa_treasure_hunt_help': {
        id: 'req_pa_treasure_hunt_help', title: "Request: Treasure Hunt Assistance", type: 'request', category: 'Requests',
        objective: "A student from the Naranja/Uva Academy is struggling with their Treasure Hunt project. They need to find three rare herbs guarded by Titan Pokémon and are looking to hire skilled bodyguards.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_pa_academy'
    },
    'req_pa_star_base_noise': {
        id: 'req_pa_star_base_noise', title: "Request: A Noise Complaint", type: 'request', category: 'Requests',
        objective: "A notice posted in Artazon claims Team Star's fire squad is having nightly rave parties. A local innkeeper is offering a reward to anyone who can sabotage their sound system.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_pa_star_fire_base'
    },

    // Fiore & Almia
    'req_fi_ranger_assist': {
        id: 'req_fi_ranger_assist', title: "Request: Ranger Assistance Needed", type: 'request', category: 'Requests',
        objective: "The Fall City Ranger Base is overwhelmed. The Go-Rock Squad has caused a rockslide, trapping a group of Pokémon in a cave. They are seeking skilled individuals to help clear the path.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_fi_fall_city'
    },
    'req_al_missing_pokemon': {
        id: 'req_al_missing_pokemon', title: "Request: Missing Partner Pokémon", type: 'request', category: 'Requests',
        objective: "A student at the Ranger School is distraught. Their partner Pokémon has gone missing, last seen heading towards the dangerous Volcano Cavern. A reward is offered for its safe return.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_al_ranger_school'
    },

    // Mountain Savana
    'req_ms_tagging_mission': {
        id: 'req_ms_tagging_mission', title: "Request: Research Assistance", type: 'request', category: 'Requests',
        objective: "The Savanna Research Camp needs help with their migration study. They need a team to track down and attach a GPS tag to a particularly fast and elusive Luxray. Non-lethal methods are required.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_ms_research_camp'
    }
};