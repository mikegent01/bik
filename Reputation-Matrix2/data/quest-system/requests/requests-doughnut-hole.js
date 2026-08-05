// This file contains 30 new "Request" quests for The Doughnut Hole region.

export const DOUGHNUT_HOLE_REQUESTS = {
    'req_dh_radio_song': {
        id: 'req_dh_radio_song', title: "Request: Broadcast a Terrible Song", type: 'request', category: 'Requests',
        objective: "The DJs at Radio Free Waluigi want to broadcast the most annoying song in the universe to disrupt Custodian communications. They need you to retrieve the 'Song of the Screaming Star-Gnats' from a haunted asteroid.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_radio_pirates'
    },
    'req_dh_fix_paradox': {
        id: 'req_dh_fix_paradox', title: "Request: Fix a Minor Temporal Anomaly", type: 'request', category: 'Requests',
        objective: "A flustered Custodian at the Paradox Engine has a problem. Someone went back in time and taught their great-grandfather a terrible pun, creating a minor paradox. They need a deniable third party to go back and make him forget it.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_paradox_engine'
    },
    'req_dh_salvage_run': {
        id: 'req_dh_salvage_run', title: "Request: A Simple Salvage Run", type: 'request', category: 'Requests',
        objective: "Captain Star-Scrap at Drifter's Port needs a crew to salvage a still-functional espresso machine from a derelict generation ship rumored to be haunted by the ghost of a disgruntled barista.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_drifter_port'
    },
    'req_dh_stardust': {
        id: 'req_dh_stardust', title: "Request: Gather Stardust", type: 'request', category: 'Requests',
        objective: "A Starlight Weaver needs raw material. It is offering a shard of crystallized music in exchange for a pouch of stardust gathered from the tail of the Prankster's Comet.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_starlight_loom'
    },
    'req_dh_casino_cards': {
        id: 'req_dh_casino_cards', title: "Request: Count the Cards", type: 'request', category: 'Requests',
        objective: "The pit boss at the Cosmic Casino suspects a player is cheating by using a deck of cards from the future. He wants you to 'investigate' and maybe steal the deck.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_cosmic_casino'
    },
    'req_dh_unreliable_wormhole_map': {
        id: 'req_dh_unreliable_wormhole_map', title: "Request: Chart the Unchartable", type: 'request', category: 'Requests',
        objective: "A Void Drifter cartographer wants to map the Unreliable Wormhole. He needs a brave crew to fly through it a few dozen times and record where (or when) they end up.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_unreliable_wormhole'
    },
    'req_dh_time_prison_delivery': {
        id: 'req_dh_time_prison_delivery', title: "Request: A Cake for a Prisoner", type: 'request', category: 'Requests',
        objective: "A Jester cultist wants to deliver a birthday cake to his friend in the Time-Loop Prison. The Custodians won't allow it. A stealthy approach is required.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_time_prison'
    },
    'req_dh_lost_idea': {
        id: 'req_dh_lost_idea', title: "Request: Retrieve a Lost Idea", type: 'request', category: 'Requests',
        objective: "A Starlight Weaver has lost the inspiration for a new constellation. She believes the idea drifted into the Field of Lost Ideas and needs someone to retrieve the specific mote of light.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_lost_idea_field'
    },
    'req_dh_gravity_inspection': {
        id: 'req_dh_gravity_inspection', title: "Request: Anomaly Investigation", type: 'request', category: 'Requests',
        objective: "A Custodian scientist needs a third party to investigate the Gravity Optional Zone. Their own ships are too logical to function properly there.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_gravity_optional_zone'
    },
    'req_dh_library_book': {
        id: 'req_dh_library_book', title: "Request: Overdue Book", type: 'request', category: 'Requests',
        objective: "The librarian at the Library of Illogical Tomes needs a book returned. The book, 'A Brief History of the Future', was checked out by a Jester who now lives in the past.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_library_illogical'
    },
    'req_dh_bistro_review': {
        id: 'req_dh_bistro_review', title: "Request: A Restaurant Review", type: 'request', category: 'Requests',
        objective: "A food critic wants a review of the Bad Omen Bistro but is too afraid to go. He will pay for a detailed account of the food and the vaguely threatening prophecies.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_bad_omen_bistro'
    },
    'req_dh_unmine_object': {
        id: 'req_dh_unmine_object', title: "Request: A Specific Item", type: 'request', category: 'Requests',
        objective: "A Void Drifter collector has heard that a pristine, pre-cosmic war rubber duck is scheduled to emerge from The Un-Mine. He will pay handsomely for it.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_unmine'
    },
    'req_dh_kraken_hunt': {
        id: 'req_dh_kraken_hunt', title: "Request: Kraken Hunt", type: 'request', category: 'Requests',
        objective: "A Void Drifter captain needs a brave crew to help him hunt a Void Kraken for its valuable, dimension-hopping ink.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_void_kraken_hunt'
    },
    'req_dh_propaganda_poster': {
        id: 'req_dh_propaganda_poster', title: "Request: A Public Art Project", type: 'request', category: 'Requests',
        objective: "A Jester cultist wants to hang a massive 'WAH'-themed propaganda poster on the side of a Causality Enforcement Fort. A distraction will be necessary.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_causality_fort'
    },
    'req_dh_sad_clown': {
        id: 'req_dh_sad_clown', title: "Request: Cheer Up a Nebula", type: 'request', category: 'Requests',
        objective: "The Starlight Weavers are concerned about the Clown Nebula. Its inherent sadness is affecting the local cosmic balance. They need someone to fly through it telling it jokes.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_clown_nebula'
    },
    'req_dh_weavers_pigment': {
        id: 'req_dh_weavers_pigment', title: "Request: Color Harvest", type: 'request', category: 'Requests',
        objective: "A Weaver needs a specific shade of 'melancholy blue' for a new nebula. It can only be harvested from the chaotic Color Storm.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_color_storm'
    },
    'req_dh_logic_test': {
        id: 'req_dh_logic_test', title: "Request: Cheat on a Test", type: 'request', category: 'Requests',
        objective: "A Void Drifter needs to get his cargo through the Logic Gate, but he's notoriously illogical. He needs someone to sneak him the answers to the test.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_logic_gate'
    },
    'req_dh_infinite_pie_fight_ammo': {
        id: 'req_dh_infinite_pie_fight_ammo', title: "Request: Just Desserts", type: 'request', category: 'Requests',
        objective: "A spectral combatant in the Infinite Pie Fight is losing. He wants you to smuggle in a fresh, non-spectral custard pie to give him an edge.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_infinite_pie_fight'
    },
    'req_dh_chroniton_heist': {
        id: 'req_dh_chroniton_heist', title: "Request: A Matter of Time", type: 'request', category: 'Requests',
        objective: "A Jester cultist wants to steal a canister of pure Chroniton particles from the Custodian mine to power his 'time-traveling unicycle'.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_chroniton_mine'
    },
    'req_dh_ghost_fleet_story': {
        id: 'req_dh_ghost_fleet_story', title: "Request: An End to the Story", type: 'request', category: 'Requests',
        objective: "A Starlight Weaver believes the Ghost Fleet is trapped repeating its battle because its story was never finished. She needs someone to go there and compose an epic poem about their heroic last stand.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_ghost_fleet'
    },
    'req_dh_fourth_wall_repair': {
        id: 'req_dh_fourth_wall_repair', title: "Request: A Crack in the Wall", type: 'request', category: 'Requests',
        objective: "A Custodian has detected a minor crack in the Fourth Wall. This is a severe threat to causality. He needs a team to apply 'narrative sealant' before any 'players' get any funny ideas.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_fourth_wall'
    },
    'req_dh_hotel_booking': {
        id: 'req_dh_hotel_booking', title: "Request: Room Service", type: 'request', category: 'Requests',
        objective: "A wealthy Void Drifter wants to book a room at the Infinity Hotel. Since all rooms are occupied, this will require convincing an existing guest to check out. The guests are all infinitely patient.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_infinity_hotel'
    },
    'req_dh_plot_hole_fishing': {
        id: 'req_dh_plot_hole_fishing', title: "Request: Fishing Expedition", type: 'request', category: 'Requests',
        objective: "A Jester needs to recover a specific lost item: the left shoe of the Imperial Emperor. He believes it was retconned out of existence and can now be retrieved from the Plot Hole.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_plot_hole'
    },
    'req_dh_laundry_day': {
        id: 'req_dh_laundry_day', title: "Request: Laundry Day", type: 'request', category: 'Requests',
        objective: "The gnome at the Bureau of Lost Socks needs help sorting. He will pay handsomely in single, unmatched socks for anyone who can help him organize the latest shipment from the Dryer Dimension.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dc_lost_socks'
    },
    'req_dh_silent_oracle_question': {
        id: 'req_dh_silent_oracle_question', title: "Request: A Simple Question", type: 'request', category: 'Requests',
        objective: "A Custodian needs to know the outcome of a complex equation but is forbidden from using paradoxical prediction methods. He needs a neutral party to ask the Silent Oracle for him.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_silent_oracle'
    },
    'req_dh_frozen_thought_sample': {
        id: 'req_dh_frozen_thought_sample', title: "Request: A Sample of Ennui", type: 'request', category: 'Requests',
        objective: "A Jester alchemist needs a sample of the Frozen Thought for a potion of ultimate apathy. Chipping off a piece requires a 'conceptually sharp' object.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_frozen_thought'
    },
    'req_dh_rogue_planet_survey': {
        id: 'req_dh_rogue_planet_survey', title: "Request: Survey a Rogue Planet", type: 'request', category: 'Requests',
        objective: "The Wayfinders' Guild has detected a rogue planet drifting through the Anomaly region. They are offering a reward for a full survey of its surface.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_rogue_planet'
    },
    'req_dh_mute_button_press': {
        id: 'req_dh_mute_button_press', title: "Request: Press the Button", type: 'request', category: 'Requests',
        objective: "A Jester cultist has a simple request, backed by a surprisingly large bag of money: go to the Mute Button asteroid and press the button. What's the worst that could happen?",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_the_mute_button'
    },
    'req_dh_big_crunch_tip': {
        id: 'req_dh_big_crunch_tip', title: "Request: Leave a Tip", type: 'request', category: 'Requests',
        objective: "A temporal tourist wants to leave a good review for the Big Crunch Cafe, but can't get there because it's at the end of a pocket universe. He needs someone to deliver his 5-star review and a generous tip.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_big_crunch_cafe'
    },
    'req_dh_compiler_bug_report': {
        id: 'req_dh_compiler_bug_report', title: "Request: Bug Report", type: 'request', category: 'Requests',
        objective: "A Custodian programmer has noticed a severe bug in the Universal Compiler: it doesn't correctly handle pineapple on pizza. He needs someone to submit a formal bug report.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_dh_universal_compiler'
    }
}