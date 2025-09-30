// This file contains 30 new "Request" quests for the Kivotos region.

export const KIVOTOS_REQUESTS = {
    'req_kv_angel24_robbery': {
        id: 'req_kv_angel24_robbery', title: "Request: Another Robbery!", type: 'request', category: 'Requests',
        objective: "Sora at Angel 24 is exasperated. Another delinquent gang has robbed the store. She's offering a reward for anyone who can track them down and retrieve her stolen 'Mega-Soda' shipment.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_kv_angel_24'
    },
    'req_kv_schale_errand': {
        id: 'req_kv_schale_errand', title: "Request: Urgent Delivery for Schale", type: 'request', category: 'Requests',
        objective: "A GSU official needs an urgent data packet delivered to the Sensei at the Schale building, but the route is blocked by a territorial dispute between two academies. An armed escort is required.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_kv_schale_building'
    },
    'req_kv_market_intel': {
        id: 'req_kv_market_intel', title: "Request: Intel Purchase", type: 'request', category: 'Requests',
        objective: "An information broker in the Black Market is selling data on a Kaiser Corporation PMC shipment schedule. The information is valuable to the Abydos students, but the broker's price is steep.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_kv_black_market'
    },
    'req_kv_downtown_brawl': {
        id: 'req_kv_downtown_brawl', title: "Request: Break Up a Street Brawl", type: 'request', category: 'Requests',
        objective: "A massive brawl between Gehenna and Trinity students has erupted in the Central District Downtown. Valkyrie Police are overwhelmed and offering a reward for any third party who can disperse the crowd.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_kv_downtown'
    },
    'req_kv_station_cleanup': {
        id: 'req_kv_station_cleanup', title: "Request: Station Cleanup", type: 'request', category: 'Requests',
        objective: "The Helmet Gang has vandalized Kivotos Central Station. The station master is hiring a 'cleaning crew' to remove the graffiti and the gang members.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_kv_central_station'
    },
    'req_kv_abydos_part_time': {
        id: 'req_kv_abydos_part_time', title: "Request: Part-Time Job Opportunity", type: 'request', category: 'Requests',
        objective: "The Foreclosure Task Force at Abydos High is desperate for cash. They've posted a notice offering their services for any odd job, from bodyguarding to cleaning.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_nc_abydos_high'
    },
    'req_kv_ramen_delivery': {
        id: 'req_kv_ramen_delivery', title: "Request: Dangerous Delivery", type: 'request', category: 'Requests',
        objective: "The owner of Shibasedo Ramen needs a large order of ramen delivered to a client in the sandstorm-plagued outskirts of the Abydos district. Standard delivery services have refused.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_nc_shibasedo_ramen'
    },
    'req_gl_lost_scripture': {
        id: 'req_gl_lost_scripture', title: "Request: Lost Scripture", type: 'request', category: 'Requests',
        objective: "A Sisterhood librarian at the Trinity Grand Cathedral has misplaced a sacred text. She believes it was accidentally taken by a student from the Make-Up Work Club. A reward is offered for its discreet return.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_gl_trinity_cathedral'
    },
    'req_gl_duel_of_honor': {
        id: 'req_gl_duel_of_honor', title: "Request: A Duel of Honor", type: 'request', category: 'Requests',
        objective: "A hot-headed member of the Justice Task Force has challenged a Gehenna Prefect Team member to a duel in Riveria Park. The JTF captain wants to hire a neutral party to 'oversee' the duel and ensure it doesn't escalate.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_gl_riveria_park'
    },
    'req_au_explosives_theft': {
        id: 'req_au_explosives_theft', title: "Request: Stolen Goods", type: 'request', category: 'Requests',
        objective: "Someone has stolen a crate of high-yield explosives from the Hot Springs Development Department. They are offering a... smaller explosive... as a reward for its return, no questions asked.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_au_hot_springs_department'
    },
    'req_au_merc_job': {
        id: 'req_au_merc_job', title: "Request: Mercenaries Wanted", type: 'request', category: 'Requests',
        objective: "A notice is posted outside the Problem Solver 68 Office: 'Need a distraction created in the Trinity district. Flashy, loud, but non-lethal. Payment upon completion.'",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'au_problem_solver_68_office'
    },
    'req_sb_debug_bot': {
        id: 'req_sb_debug_bot', title: "Request: Debug a Security Bot", type: 'request', category: 'Requests',
        objective: "A student from the Engineering Department has created a security robot that has gone haywire and is now attacking cleaning drones. She needs someone to subdue it so she can debug the code.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_sb_engineering_dept'
    },
    'req_sb_veritas_hack': {
        id: 'req_sb_veritas_hack', title: "Request: A Favor for a Hacker", type: 'request', category: 'Requests',
        objective: "A member of Veritas needs a physical data chip planted in the Seminar Council Room. She can handle the digital side, but needs someone to do the legwork. Payment is in crypto-currency.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_sb_veritas_hideout'
    },
    'req_ah_rare_herb': {
        id: 'req_ah_rare_herb', title: "Request: Rare Ingredient Needed", type: 'request', category: 'Requests',
        objective: "A member of the Alchemist Society needs a rare, glowing mushroom that only grows in the deepest part of the Whispering Bamboo Forest. The forest is guarded by territorial spirits.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_ah_alchemist_society'
    },
    'req_ah_escort_merchant': {
        id: 'req_ah_escort_merchant', title: "Request: Escort a Merchant", type: 'request', category: 'Requests',
        objective: "A nervous merchant on the Black Tortoise Promenade needs an escort for his spice caravan. He fears an attack from the Gourmet Research Society, who have been 'aggressively acquiring' his stock.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_ah_black_tortoise_promenade'
    },
    'req_np_purge_list': {
        id: 'req_np_purge_list', title: "Request: Recover a Lost Document", type: 'request', category: 'Requests',
        objective: "A panicked-looking student from Red Winter has lost a document in the Cherenka Tavern. The document is a list of students scheduled for the next 'purge'. She needs it recovered before the Spec Bureau finds it.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_np_cherenka_tavern'
    },
    'req_np_supply_run': {
        id: 'req_np_supply_run', title: "Request: A Dangerous Supply Run", type: 'request', category: 'Requests',
        objective: "The outcasts of Spec Ops No. 227 are running low on instant noodles. They've pooled their money to hire someone to make a supply run to the central district and back without being caught by the Prefect Team.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_np_no227_club_shack'
    },
    'req_na_fox_statue': {
        id: 'req_na_fox_statue', title: "Request: Clean the Statue", type: 'request', category: 'Requests',
        objective: "A local citizen is upset that the Statue of the 'Fox of Justice' has been vandalized by delinquents. They are offering a small reward to anyone who will clean it and teach the vandals a lesson.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_na_freedom_statue'
    },
    'req_sp_artifact_retrieval': {
        id: 'req_sp_artifact_retrieval', title: "Request: Artifact Retrieval", type: 'request', category: 'Requests',
        objective: "A mysterious client, communicating via a data terminal, wants to hire a team to retrieve a specific artifact from the Ruins of the Nameless Priests. The client is cagey about the details but the pay is astronomical.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_sp_nameless_priests_ruins'
    },
    'req_kv_chronos_leak': {
        id: 'req_kv_chronos_leak', title: "Request: Stop the Presses!", type: 'request', category: 'Requests',
        objective: "A Trinity student needs help. She claims Chronos Media is about to run a scandalous, untrue story about her. She needs someone to infiltrate their media center and delete the story before it goes live.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_kv_chronos_media'
    },
    'req_gl_book_retrieval': {
        id: 'req_gl_book_retrieval', title: "Request: Overdue Book", type: 'request', category: 'Requests',
        objective: "The head of the Trinity Library Committee is offering a reward for the return of a rare book on magical theory, currently overdue from a member of the Gourmet Research Society (Gehenna).",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_gl_trinity_library'
    },
    'req_au_gourmet_ingredient': {
        id: 'req_au_gourmet_ingredient', title: "Request: A Culinary Challenge", type: 'request', category: 'Requests',
        objective: "The Gourmet Research Society is looking for a rare, fire-breathing salamander that lives in the district's volcanic vents. They need it for a new spicy recipe and are willing to pay handsomely.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'au_gourmet_research_club'
    },
    'req_sb_game_jam': {
        id: 'req_sb_game_jam', title: "Request: Beta Testers Needed", type: 'request', category: 'Requests',
        objective: "The Game Development Department is holding a 'Game Jam' and needs beta testers for a new, highly realistic combat simulator. Participants will be rewarded with a copy of the game.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_sb_game_dev_dept'
    },
    'req_ah_dojo_challenge': {
        id: 'req_ah_dojo_challenge', title: "Request: A Worthy Opponent", type: 'request', category: 'Requests',
        objective: "The master of the Martial Arts Training Dojo in Shanhaijing is looking for outsiders to challenge her students, believing they have grown complacent fighting only each other.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_ah_training_dojo'
    },
    'req_np_escapee': {
        id: 'req_np_escapee', title: "Request: Help an Escapee", type: 'request', category: 'Requests',
        objective: "A student who has escaped the Engineering Dept. Gulag needs help. She needs to be smuggled out of the Red Winter district before the Spec Bureau finds her.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_np_gulag'
    },
    'req_na_supply_cache': {
        id: 'req_na_supply_cache', title: "Request: Supply Cache", type: 'request', category: 'Requests',
        objective: "The RABBIT Squad has located a forgotten military supply cache in the old SRT Academy ruins, but it's in an area heavily patrolled by Valkyrie bots. They need a team to help them break in and retrieve the supplies.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_na_rabbit_squad_camp'
    },
    'req_sp_scan_anomaly': {
        id: 'req_sp_scan_anomaly', title: "Request: Scan an Anomaly", type: 'request', category: 'Requests',
        objective: "A researcher from Millennium wants to hire a team to escort her to the Decagrammaton Anomaly Point. She needs to place a series of scanners in the area to study its strange energy.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_sp_decagrammaton_anomaly'
    },
    'req_kv_kaiser_sabotage': {
        id: 'req_kv_kaiser_sabotage', title: "Request: A Little Sabotage", type: 'request', category: 'Requests',
        objective: "The Abydos Task Force has a plan to disrupt Kaiser Corporation's operations. They need a team to infiltrate the local Kaiser office and upload a virus into their network.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_kv_kaiser_corp_office'
    },
    'req_gl_vigilante_trouble': {
        id: 'req_gl_vigilante_trouble', title: "Request: Stop the 'Vigilantes'", type: 'request', category: 'Requests',
        objective: "A group of Trinity students has started a 'vigilante' club and are causing more harm than good. A local shopkeeper is offering a reward to anyone who can convince them to disband.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_gl_vigilante_crew_hideout'
    },
    'req_au_prefect_problem': {
        id: 'req_au_prefect_problem', title: "Request: A Prefect's Problem", type: 'request', category: 'Requests',
        objective: "A member of the Gehenna Prefect Team needs a neutral party to act as a go-between to negotiate a truce with a particularly troublesome delinquent gang. Official channels have failed.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'au_prefect_team_hq'
    }
}