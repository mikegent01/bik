// This file contains 30 new "Request" quests for the Middle-earth region.

export const MIDDLE_EARTH_REQUESTS = {
    'req_me_prancing_pony_missing': {
        id: 'req_me_prancing_pony_missing', title: "Request: Missing Hobbit", type: 'request', category: 'Requests',
        objective: "Barliman Butterbur at The Prancing Pony is worried. A Hobbit patron, Bodo Proudfoot, wandered into the Barrow-downs on a dare and hasn't returned. He's offering a reward for Bodo's safe return.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_prancing_pony'
    },
    'req_me_rivendell_escort': {
        id: 'req_me_rivendell_escort', title: "Request: Escort an Elf-lord", type: 'request', category: 'Requests',
        objective: "Lord Elrond of Rivendell requires an escort for an emissary traveling to the Grey Havens. The road is long and beset by trolls and other dangers. A handsome reward in silver is promised.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_rivendell'
    },
    'req_me_erebor_goblin_infestation': {
        id: 'req_me_erebor_goblin_infestation', title: "Request: Goblin Infestation", type: 'request', category: 'Requests',
        objective: "The Dwarves of Erebor have reopened an old, lower-level mine, only to find it infested with Goblins. The foreman is offering a bounty for every goblin head brought to him.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_erebor'
    },
    'req_me_tharbad_bandits': {
        id: 'req_me_tharbad_bandits', title: "Request: Clear out the Ruins", type: 'request', category: 'Requests',
        objective: "A group of Rangers is trying to establish a safe outpost in the Ruins of Tharbad but are being harassed by a large bandit crew. They are seeking aid from any able-bodied warriors.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_tharbad'
    },
    'req_me_lothlorien_message': {
        id: 'req_me_lothlorien_message', title: "Request: A Message to the Golden Wood", type: 'request', category: 'Requests',
        objective: "A scout from Rohan at the edge of Fangorn Forest has an urgent message for the Lady of Lórien, but dare not enter the wood. He needs someone to carry the message across the river.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_rhovanion_50' // Eaves of Fangorn
    },
    'req_me_minas_tirith_reinforce': {
        id: 'req_me_minas_tirith_reinforce', title: "Request: Reinforce Osgiliath", type: 'request', category: 'Requests',
        objective: "A captain of Gondor in Minas Tirith is seeking volunteers to reinforce the garrison at Osgiliath. The fighting is fierce, but the pay is good, and the honor is great.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_minas_tirith'
    },
    'req_me_rohan_orc_raid': {
        id: 'req_me_rohan_orc_raid', title: "Request: Orc Raiders", type: 'request', category: 'Requests',
        objective: "An Orc raiding party from the Misty Mountains has been attacking farms in the Westfold of Rohan. The local Reeve has posted a bounty for the head of their chieftain.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_helms_deep' // Placeholder for Rohan
    },
    'req_me_isengard_spy': {
        id: 'req_me_isengard_spy', title: "Request: Information Wanted", type: 'request', category: 'Requests',
        objective: "A worried horse-breeder in Edoras has noticed a shifty-eyed Southerner hanging around the stables. He suspects a spy from Isengard and is willing to pay for proof.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_edoras' // Placeholder for Rohan
    },
    'req_me_dale_dragon_scale': {
        id: 'req_me_dale_dragon_scale', title: "Request: A Rare Component", type: 'request', category: 'Requests',
        objective: "A master craftsman in Dale requires a single, undamaged dragon scale for a royal commission. Such scales can still be found in the Desolation of the Dragon, but the area is haunted by fell spirits.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_dale'
    },
    'req_me_umbar_slave_rescue': {
        id: 'req_me_umbar_slave_rescue', title: "Request: A Desperate Plea", type: 'request', category: 'Requests',
        objective: "A message in a bottle has washed ashore near Dol Amroth. It's from a Gondorian sailor captured by Corsairs, now held in the Slaves' Pits of Umbar. He begs for rescue.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_umbar_slaves_pits'
    },
    'req_me_mirkwood_spiders': {
        id: 'req_me_mirkwood_spiders', title: "Request: Spider Bounty", type: 'request', category: 'Requests',
        objective: "The Woodmen of Mirkwood are offering a bounty for every giant spider venom sac brought to their town. The spiders have become increasingly aggressive lately.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_men_of_the_woods'
    },
    'req_me_pelargir_pirates': {
        id: 'req_me_pelargir_pirates', title: "Request: Pirate Menace", type: 'request', category: 'Requests',
        objective: "The harbormaster of Pelargir is hiring privateers to hunt down a Corsair raiding ship that has been preying on merchant vessels near the Mouths of the Anduin.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_pelargir'
    },
    'req_me_harad_mumak_tusk': {
        id: 'req_me_harad_mumak_tusk', title: "Request: An Exotic Trophy", type: 'request', category: 'Requests',
        objective: "A wealthy merchant in Umbar is offering a fortune for an intact Mûmak tusk from the plains of Harad. The local Haradrim tribes do not take kindly to outsiders hunting their beasts.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_mumakil_fields'
    },
    'req_me_grey_havens_voyage': {
        id: 'req_me_grey_havens_voyage', title: "Request: Last Voyage", type: 'request', category: 'Requests',
        objective: "An ancient Elf at the Grey Havens wishes to make one last journey to see the ruins on the Isle of Himring before he sails into the West. He needs a sturdy ship and a brave crew to take him.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_forlond'
    },
    'req_me_shire_lost_recipe': {
        id: 'req_me_shire_lost_recipe', title: "Request: A Cook's Dilemma", type: 'request', category: 'Requests',
        objective: "The Gaffer at the Green Dragon Inn in Hobbiton has lost his prize-winning mushroom pie recipe. He thinks he may have dropped it in the Old Forest, and is offering free pies for a year for its return.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_hobbiton'
    },
    'req_me_blue_mountains_ore': {
        id: 'req_me_blue_mountains_ore', title: "Request: Rich Ore Seam", type: 'request', category: 'Requests',
        objective: "A Dwarven prospector has found a rich seam of silver in the Blue Mountains, but needs guards to protect his claim from rival prospectors and goblin scavengers.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_blue_mountains_south'
    },
    'req_me_mordor_intel': {
        id: 'req_me_mordor_intel', title: "Request: A Glimpse into Shadow", type: 'request', category: 'Requests',
        objective: "Faramir, Captain of the Rangers of Ithilien, needs a small, stealthy group to scout the Pass of Cirith Ungol and report on the enemy's strength. The mission is incredibly dangerous.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_henneth_annun'
    },
    'req_me_fornost_artifact': {
        id: 'req_me_fornost_artifact', title: "Request: A Lost Heirloom", type: 'request', category: 'Requests',
        objective: "A Ranger of the North seeks adventurers to help him retrieve a lost heirloom of the Dúnedain, the Star of Elendil, from the haunted ruins of Fornost.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_fornost_ruins'
    },
    'req_me_dunland_raid': {
        id: 'req_me_dunland_raid', title: "Request: Stolen Livestock", type: 'request', category: 'Requests',
        objective: "Dunlending raiders have stolen a prize-winning herd of cattle from a farm on the borders of Rohan. The farmer is offering a reward for their return.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_dunlending_camp'
    },
    'req_me_druadan_herb': {
        id: 'req_me_druadan_herb', title: "Request: A Rare Herb", type: 'request', category: 'Requests',
        objective: "The healers in Minas Tirith need a rare herb, Athelas, which only grows in the Drúadan Forest. They need someone to persuade the reclusive Wild Men to share some.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_druadan_forest'
    },
    'req_me_esgaroth_smuggler': {
        id: 'req_me_esgaroth_smuggler', title: "Request: Catch a Smuggler", type: 'request', category: 'Requests',
        objective: "The Master of Lake-town suspects a merchant is smuggling weapons to the Orcs of Mirkwood. He's hiring a discreet party to investigate and gather proof.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_esgaroth'
    },
    'req_me_weathertop_watch': {
        id: 'req_me_weathertop_watch', title: "Request: A Watcher Watched", type: 'request', category: 'Requests',
        objective: "A Ranger posted at Weathertop needs a message delivered to Bree. He cannot leave his post, as he's been tracking a large band of Orcs moving south.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_amon_sul'
    },
    'req_me_haradrim_champion': {
        id: 'req_me_haradrim_champion', title: "Request: A Champion's Challenge", type: 'request', category: 'Requests',
        objective: "A Haradrim chieftain at the Camp of the Serpent Clan has issued an open challenge for a duel. He seeks a worthy opponent and offers a prized serpent-venom dagger to the victor.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_nomad_camp_1'
    },
    'req_me_moria_expedition': {
        id: 'req_me_moria_expedition', title: "Request: A Fool's Hope", type: 'request', category: 'Requests',
        objective: "A group of Dwarves in the Blue Mountains is planning an expedition to reclaim Moria. They are looking for brave adventurers to join their doomed, eh, noble quest.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_moria_east_gate'
    },
    'req_me_edoras_tapestry': {
        id: 'req_me_edoras_tapestry', title: "Request: A Missing Tapestry", type: 'request', category: 'Requests',
        objective: "A precious tapestry depicting the deeds of the Kings of Rohan has been stolen from Meduseld, the Golden Hall of Edoras. A reward is offered for its return.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_edoras'
    },
    'req_me_fangorn_orc_hunt': {
        id: 'req_me_fangorn_orc_hunt', title: "Request: Orc-slaying in Fangorn", type: 'request', category: 'Requests',
        objective: "Treebeard the Ent is troubled. A band of Orcs from Isengard has been felling trees on the edge of Fangorn Forest. He needs 'hasty' folk to help him deal with them.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_fangorn_forest'
    },
    'req_me_minas_morgul_intel': {
        id: 'req_me_minas_morgul_intel', title: "Request: A Desperate Gambit", type: 'request', category: 'Requests',
        objective: "A captain of Ithilien needs a small group to infiltrate the Dead City of Minas Morgul and discover the nature of the evil that lies within. Survival is not expected.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_minas_morgul'
    },
    'req_me_dol_guldur_scout': {
        id: 'req_me_dol_guldur_scout', title: "Request: Scouting the Sorcerer's Hill", type: 'request', category: 'Requests',
        objective: "The Elves of Lórien require information on the forces gathering at Dol Guldur. They need a stealthy party to scout the fortress and report on its defenses.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_dol_guldur'
    },
    'req_me_tomb_raiders': {
        id: 'req_me_tomb_raiders', title: "Request: Grave Robbers", type: 'request', category: 'Requests',
        objective: "The Rangers guarding the Barrow-downs have noticed an increase in grave-robbing activity. They are hiring help to track down the culprits and put a stop to their desecration.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_me_barrow_downs'
    },
    'req_me_wainrider_bounty': {
        id: 'req_me_wainrider_bounty', title: "Request: Wainrider Bounty", type: 'request', category: 'Requests',
        objective: "The Men of Dale have placed a bounty on a Wainrider chieftain who has been raiding their eastern borders. Proof of his defeat is required to claim the reward.",
        assignee: "Full Party", assigneeKey: 'full_party', status: "available", locationId: 'poi_rhovanion_27'
    }
}