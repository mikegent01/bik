// This file contains faction data for widespread, fringe, or multi-regional powers.

export const WIDESPREAD_FACTIONS = {
    freelancer_underworld: {
        name: "Freelancer Underworld",
        description: "A shadowy network of smugglers, assassins, and thieves operating for profit.",
        logo: 'faction_freelancer.png',
        relations: { 
            allies: ['crimson_fleet', 'wario_land'], 
            enemies: ['regal_empire', 'iron_legion', 'toad_gang', 'onyx_hand', 'mages_guild', 'the_unchained', 'silver_flame', 'oathbound_judges', 'iron_fists', 'liberated_toads', 'toad_cult', 'rakasha_clans', 'cosmic_jesters', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'moonfang_pack', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators']
        },
        power_level: 7,
        category: "Underworld & Fringe",
        region: "Widespread (Shadows)",
        leader: "the_broker",
        notable_people: [
            { name: "The Broker", role: "Information Kingpin", description: "A mysterious figure who trades in secrets and favors." },
            { name: "Silent Sam", role: "Assassin Leader", description: "The most feared hitman in the underworld." }
        ],
        waluigi_tip: "Everyone has a price here! The 'Syndicates' are all about stability, but the 'Independents' love chaos. If you want to make friends, break something valuable that belongs to a Syndicate boss. The little guys will love you for it!",
        internal_politics: {
            ruling_faction: "syndicates",
            sub_factions: {
                syndicates: {
                    name: "The Syndicates",
                    description: "A loose cabal of established criminal families who control major smuggling routes and assassination contracts. They value stability and profit over chaos.",
                    opinion: "The party is a disruptive force that upsets the delicate balance of power. Their high-profile actions attract unwanted attention from the law.",
                    influence: 40,
                    reputation_modifiers: { archie: -10, markop: -5, humpik: 0, bowser: -5 },
                    key_figures: [
                        { name: "Don Valeriano", role: "Head of the Valeriano Family", description: "The most powerful and traditionalist of the Syndicate bosses." }
                    ]
                },
                independents: {
                    name: "The Independents",
                    description: "A larger, disorganized group of lone operatives, small-time crooks, and spies who thrive on chaos and the opportunities it creates.",
                    opinion: "The party's chaos creates jobs! Every time they smash a rival's operation or start a gang war, there's money to be made in the aftermath.",
                    influence: 30,
                    reputation_modifiers: { archie: 15, markop: 0, humpik: 0, bowser: 5 },
                    key_figures: [
                        { name: "Nimble Jack", role: "Master Thief", description: "A legendary cat burglar who enjoys the chaos the party creates." }
                    ]
                },
                information_brokers: {
                    name: "The Information Brokers",
                    description: "A neutral faction of spies and whisper-merchants who trade in secrets. They pride themselves on knowing everything about everyone.",
                    opinion: "The party is a font of valuable secrets. Their alliances, their true motives, their weaknesses... all have a high price.",
                    influence: 20,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 5 },
                    key_figures: [
                        { name: "The Broker", role: "Information Kingpin", description: "The enigmatic figure who runs the network." }
                    ]
                },
                the_cleaners: {
                    name: "The Cleaners",
                    description: "Specialists who handle the aftermath of underworld violence. They dispose of bodies, scrub crime scenes, and ensure loose ends are tied up. They are discreet and expensive.",
                    opinion: "This party is messy. Very messy. It's good for business, but their lack of professionalism is offensive.",
                    influence: 10,
                    reputation_modifiers: { archie: 5, markop: -5, humpik: 0, bowser: 5 },
                    key_figures: [
                        { name: "Mother Mop", role: "Proprietor", description: "A surprisingly cheerful woman who runs the most efficient cleaning service in the underworld." }
                    ]
                }
            }
        }
    },
    cosmic_jesters: {
        name: "Servants of the Cosmic Jester",
        description: "An unpredictable cult that worships a chaotic, unknowable entity of madness.",
        logo: 'faction_jester.png',
        relations: { 
            allies: ['ratchet_raiders'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'the_unchained', 'silver_flame', 'oathbound_judges', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 5,
        leader: "the_jester",
        category: "Mystical & Ancient",
        region: "Everywhere & Nowhere",
        notable_people: [
            { name: "The Cosmic Jester", role: "Chaotic Deity", description: "The unknowable entity of madness and chaos worshipped by the cult." },
            { name: "Giggling Pete", role: "High Fool", description: "The most devoted servant of chaos, known for his reality-bending pranks." }
        ],
        waluigi_tip: "These guys are almost as brilliant as me! You can't reason with them. Just do something completely illogical and they'll think you're their new prophet. WAH!",
        internal_politics: {
            ruling_faction: "agents_of_chaos",
            sub_factions: {
                agents_of_chaos: {
                    name: "The Agents of Chaos",
                    description: "True believers who seek to unravel reality by spreading randomness and madness. They see chaos as a form of prayer.",
                    opinion: "Archie is a divine instrument! His every action is a hilarious stroke of genius that brings the Jester's punchline closer!",
                    influence: 60,
                    reputation_modifiers: { archie: 30, markop: -10, humpik: 5, bowser: 10 }
                },
                the_unnerving: {
                    name: "The Unnerving",
                    description: "Cultists who believe the path to enlightenment is through subtle, reality-bending pranks and psychological warfare.",
                    opinion: "The party's antics are amusing, but lack subtlety. The memory-wipe plot by X.O., however... that was a masterpiece of the craft.",
                    influence: 30,
                    reputation_modifiers: { archie: 10, markop: -5, humpik: 0, bowser: 0 }
                },
                the_giggling_nihilists: {
                    name: "The Giggling Nihilists",
                    description: "A small, fatalistic offshoot that believes the only logical response to the universe is to laugh as it all burns down.",
                    opinion: "They're trying so hard! It's adorable. Let's see what they break next. It's all meaningless anyway, so let's enjoy the show.",
                    influence: 10,
                    reputation_modifiers: { archie: 5, markop: 0, humpik: 0, bowser: 5 }
                }
            }
        }
    },
    the_unchained: {
        name: "The Unchained",
        description: "A revolutionary movement of freed slaves and rebels fighting against tyranny.",
        logo: 'faction_the_unchained.png',
        relations: { 
            allies: ['rebel_clans', 'liberated_toads'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 5,
        category: "Underworld & Fringe",
        region: "Widespread (Rebel Territories)",
        leader: "free_name_sarah",
        notable_people: [
            { name: "Free-Name Sarah", role: "Revolutionary Leader", description: "A former slave who leads the Ideologues with inspiring speeches." },
            { name: "Breaker Marcus", role: "Vindicator Commander", description: "A brutal ex-gladiator who leads the militant wing of the movement." }
        ],
        waluigi_tip: "Rebels are so emotional. The 'Ideologues' will believe any sob story, while the 'Vindicators' just want to fight. Tell the Vindicators that an Imperial noble insulted their mother. Instant distraction!",
        internal_politics: {
            ruling_faction: "ideologues",
            sub_factions: {
                ideologues: {
                    name: "The Ideologues",
                    description: "The core of the movement, focused on building a new, equitable society and spreading their message of freedom for all.",
                    opinion: "Freeing the toad slaves was a noble act. The party, especially Archie and Markop, are powerful symbols of liberation, whether they know it or not.",
                    influence: 40,
                    reputation_modifiers: { archie: 15, markop: 15, humpik: 5, bowser: -10 }
                },
                the_vindicators: {
                    name: "The Vindicators",
                    description: "A militant wing composed of former soldiers and pit fighters who believe freedom can only be won through violence against their former masters.",
                    opinion: "Talk is cheap. The party fights the Empire and its dogs. That makes them friends. Their methods are effective, and we respect their strength.",
                    influence: 35,
                    reputation_modifiers: { archie: 15, markop: 10, humpik: 5, bowser: 5 }
                },
                the_silent_network: {
                    name: "The Silent Network",
                    description: "The intelligence arm of the Unchained, operating an underground railroad for escaped slaves and spreading revolutionary propaganda.",
                    opinion: "The party creates chaos that we can exploit to move our people. Their actions against the Iron Fists and the Empire are a welcome distraction.",
                    influence: 25,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 0, bowser: 0 }
                }
            }
        }
    },
    ratchet_raiders: {
        name: "The Ratchet Raiders",
        description: "Goblin mechanics and pilots with a love for dangerous, ramshackle technology.",
        logo: 'faction_ratchet_raiders.png',
        relations: { 
            allies: ['cosmic_jesters'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'the_unchained', 'silver_flame', 'oathbound_judges', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'goodstyle_artisans']
        },
        power_level: 4,
        leader: "lario",
        category: "Underworld & Fringe",
        region: "Wastelands & Borderlands",
        notable_people: [
            { name: "Lario", role: "Workshop Owner", description: "Wario's brother who runs a questionable workshop with 'toad-powered polishing' services." },
            { name: "Captain Zipwire", role: "Speed Freek Leader", description: "The fastest goblin pilot who leads the adrenaline junkies." }
        ],
        waluigi_tip: "Goblins love two things: explosions and shiny things. Archie is their hero! If you want their help, promise them a chance to loot a crashed Imperial airship. They can't resist!",
        internal_politics: {
            ruling_faction: "scrap_barons",
            sub_factions: {
                scrap_barons: {
                    name: "The Scrap Barons",
                    description: "The richest goblins who control the workshops and junkyards. They profit from the chaos created by others. Currently in turmoil over the Lario/Syrup situation.",
                    opinion: "Lario holding a pirate captain captive? Bad for business! Now there's infighting. This party creates expensive problems... but also profitable scrap.",
                    influence: 30,
                    reputation_modifiers: { archie: 10, markop: -10, humpik: 0, bowser: 0 }
                },
                speed_freeks: {
                    name: "The Speed Freeks",
                    description: "Adrenaline-junkie pilots who live to fly fast, loud, and dangerously. They modify their vehicles for speed above all else.",
                    opinion: "A pirate captain breakout on an airship? Sounds like a good time! We respect the guts of anyone who pulls off a stunt like that. Lario is an idiot for getting caught.",
                    influence: 35,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 5, bowser: 10 }
                },
                da_boomers: {
                    name: "Da Boomers",
                    description: "Demolition experts who believe that any problem can be solved with enough explosives. Usually, their own.",
                    opinion: "Archie's got the right idea! Big booms! We like his style. That Humpik fella throwing an axe in the engine? Genius!",
                    influence: 25,
                    reputation_modifiers: { archie: 20, markop: -5, humpik: 10, bowser: 5 }
                },
                syrup_sympathizers: {
                    name: "Syrup Sympathizers",
                    description: "A new splinter group of goblins who are impressed by Captain Syrup's cunning and want to join her pirate crew, abandoning the Raiders.",
                    opinion: "That Captain Syrup is the real deal! She's got style, she's got a ship, and she's not afraid to betray anyone. That's the life for us!",
                    influence: 10,
                    reputation_modifiers: { archie: 15, markop: 5, humpik: 0, bowser: 5 }
                }
            }
        }
    },
    crimson_fleet: {
        name: "The Crimson Fleet",
        description: "A notorious pirate fleet led by the cunning and ruthless Captain Syrup. They value freedom, treasure, and holding a grudge.",
        logo: 'faction_crimson_fleet.png',
        relations: { 
            allies: ['freelancer_underworld'], 
            enemies: ['regal_empire', 'iron_legion', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators', 'goodstyle_artisans']
        },
        power_level: 5,
        leader: "captain_syrup",
        category: "Underworld & Fringe",
        region: "Skies & Seas",
        notable_people: [
            { name: "Captain Syrup", role: "Fleet Captain", description: "A cunning pirate captain with a grudge against Waluigi and the party after being freed, then immediately attacked." },
            { name: "First Mate Jones", role: "Quartermaster", description: "The loyal and pragmatic second-in-command of the Crimson Fleet." }
        ],
        waluigi_tip: "WAH! Pirates! They only care about treasure. She's mad now, but dangle something shiny in front of her and she'll forget all about it. Or, you know, just frame someone else for her problems. That always works!",
        internal_politics: {
            ruling_faction: "captain_syrup",
            sub_factions: {
                captain_syrup: {
                    name: "Captain Syrup's Crew",
                    description: "The core crew of the flagship, fiercely loyal to their captain and her quest for revenge and treasure.",
                    opinion: "The Captain was betrayed by Waluigi and Lario, and then the party attacked her right after freeing her! They are all untrustworthy landlubbers who owe us big time.",
                    influence: 70,
                    reputation_modifiers: { archie: -20, markop: -30, humpik: -10, bowser: -15 },
                     key_figures: [
                        { name: "Captain Syrup", role: "Captain", description: "Vengeful and cunning leader." },
                     ]
                },
                the_free_captains: {
                    name: "The Free Captains",
                    description: "Other pirate captains loosely allied with Syrup. They respect her strength but are ultimately out for themselves.",
                    opinion: "Syrup getting free is good for the Fleet's reputation. The party that did it is powerful, but chaotic. They are either a great opportunity or a huge liability.",
                    influence: 30,
                    reputation_modifiers: { archie: 10, markop: -5, humpik: 0, bowser: 5 },
                    key_figures: [
                         { name: "Captain 'Cutlass' Kael", role: "Ally Captain", description: "A notoriously fickle pirate lord." },
                    ]
                }
            }
        }
    },
    wario_land: {
        name: "Wario Land",
        description: "Wario's personal kingdom of greed, built on plunder and the scent of garlic. After Wario's supposed 'death', it is now secretly led by the mysterious figure known as 'Mr. Wario', whose methods are even more ruthless.",
        logo: 'wario.png',
        relations: { 
            allies: ['freelancer_underworld'], 
            enemies: ['regal_empire', 'iron_legion', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators', 'goodstyle_artisans']
        },
        power_level: 4,
        leader: "wario",
        category: "Underworld & Fringe",
        region: "Diamond City (Greed Pits)",
        notable_people: [
            { name: "Mr. Wario", role: "Secret Leader", description: "The mysterious mastermind pulling the strings, whose identity is a closely guarded secret. He shares Wario's insatiable greed." },
            { name: "Lario", role: "Public Leader", description: "Wario's brother, the public face of the gang and a skilled, if cowardly, mechanic." }
        ],
        waluigi_tip: "WAH! My old partner... He only cares about money. Wave a big enough bag of coins and he'll do anything. Or better yet, tell him someone else has a bigger bag of coins. His jealousy will do the rest!",
        internal_politics: {
            ruling_faction: "wario_ghost",
            sub_factions: {
                wario_ghost: {
                    name: "Mr. Wario's Ambition",
                    description: "The secret leadership of 'Mr. Wario', who pulls the strings from the shadows. His motives are pure, insatiable greed.",
                    influence: 50,
                    reputation_modifiers: { archie: 10, markop: -10, humpik: 0, bowser: -10 },
                    key_figures: [{ name: "Mr. Wario", role: "Mysterious Mastermind", description: "The true leader, obsessed with treasure." }]
                },
                lario_workshop: {
                    name: "Lario's Workshop",
                    description: "The public face of the operation. Lario and his mechanics are more interested in tinkering and 'acquiring' tech than grand schemes.",
                    influence: 30,
                    reputation_modifiers: { archie: 5, markop: -5, humpik: 5, bowser: 5 },
                    key_figures: [{ name: "Lario", role: "Public Face", description: "Wario's brother and a skilled mechanic." }]
                },
                goldgrubber_gang: {
                    name: "The Goldgrubber Gang",
                    description: "Wario's old crew of loyal-to-the-coin treasure hunters. They are direct, brutish, and effective at smash-and-grab operations.",
                    influence: 20,
                    reputation_modifiers: { archie: -5, markop: -5, humpik: 5, bowser: 0 }
                }
            }
        }
    },
    iron_fists: {
        name: "The Iron Fists",
        description: "A brutal and aggressive criminal gang known for smuggling and extortion. Secretly, they have been operating as deniable assets for the Regal Empire, creating instability that the Empire can then quell.",
        logo: 'faction_iron_fists.png',
        relations: { 
            allies: ['regal_empire'], 
            enemies: ['iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators']
        },
        power_level: 5,
        leader: "boss_knuckles",
        category: "Underworld & Fringe",
        region: "Widespread (Urban Centers)",
        notable_people: [
            { name: "Boss Knuckles", role: "Gang Leader", description: "The ruthless leader of the Old Bosses who wants revenge on the party." },
            { name: "Iron Mike", role: "Enforcer Captain", description: "The strongest fighter in the gang, known for his metal gauntlets." }
        ],
        waluigi_tip: "A bunch of thugs. The 'Old Bosses' are predictable, but the 'Upstarts' are hungry. Help an Upstart whack an Old Boss, and you'll have a friend for life... or at least until he tries to whack you.",
        internal_politics: {
            ruling_faction: "old_bosses",
            sub_factions: {
                old_bosses: {
                    name: "The Old Bosses",
                    description: "The established leaders of the gang who control the most lucrative rackets. They are cautious and ruthless.",
                    opinion: "The three-eyed meddler and his paladin friend cost us a fortune. They are dead men walking. A bounty is on their heads.",
                    influence: 50,
                    reputation_modifiers: { archie: -25, markop: -15, humpik: -5, bowser: -5 }
                },
                the_upstarts: {
                    name: "The Upstarts",
                    description: "Younger, more ambitious members who think the Old Bosses are too soft. They want to expand the gang's territory through open warfare.",
                    opinion: "The party showed the Old Bosses are vulnerable. Good. Their chaos is an opportunity for us to seize power.",
                    influence: 30,
                    reputation_modifiers: { archie: 10, markop: -5, humpik: 0, bowser: 0 }
                },
                the_enforcers: {
                    name: "The Enforcers",
                    description: "The muscle of the Iron Fists. They are loyal to whoever pays them the most and lets them break the most heads.",
                    opinion: "They fight good. Especially the paladin and the big turtle guy. We'd love a chance to test our metal against theirs.",
                    influence: 20,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 5 }
                }
            }
        }
    },
    diamond_city_investigators: {
        name: "Diamond City Investigators",
        description: "A private detective agency specializing in high-stakes treasure recovery, often finding themselves at odds with Wario's avaricious schemes.",
        logo: 'icon_dossier.png',
        relations: {
            allies: ['oathbound_judges', 'mushroom_regency'],
            enemies: ['wario_land', 'freelancer_underworld', 'iron_fists', 'crimson_fleet']
        },
        power_level: 3,
        leader: "detective_penny",
        category: "Underworld & Fringe",
        region: "Diamond City (Metropolis)",
        notable_people: [
            { name: "Detective Penny", role: "Lead Investigator", description: "A sharp-witted detective with a passion for puzzles and justice. She has made it her personal mission to dismantle Wario's criminal empire." }
        ],
        waluigi_tip: "These do-gooders are so predictable. Just leave a fake clue leading to a 'bigger' crime, and they'll drop everything to chase the shiny new mystery. WAH!",
        internal_politics: {
            ruling_faction: "the_puzzlers",
            sub_factions: {
                the_puzzlers: {
                    name: "The Puzzlers",
                    description: "The core group of detectives led by Penny. They are dedicated to solving crimes through logic and deduction, and view the party as chaotic lawbreakers.",
                    influence: 60,
                    reputation_modifiers: { archie: -20, markop: -10, humpik: -5, bowser: -15 },
                    key_figures: [{ name: "Detective Penny", role: "Lead Investigator", description: "A brilliant detective with a passion for justice." }]
                },
                forensics_and_artifacts: {
                    name: "Forensics & Artifacts",
                    description: "Specialists who analyze crime scenes and recovered items. They value preservation and despise the party's destructive methods.",
                    influence: 25,
                    reputation_modifiers: { archie: -15, markop: -5, humpik: -5, bowser: -5 }
                },
                informant_network: {
                    name: "The Informant Network",
                    description: "The shadowy side of the agency that deals with underworld contacts. They see the party's chaos as a useful source of information.",
                    influence: 15,
                    reputation_modifiers: { archie: 10, markop: 0, humpik: 0, bowser: 0 }
                }
            }
        }
    },
    goodstyle_artisans: {
        name: "The Goodstyle Artisans",
        description: "A collective of the world's finest artisans and creators, dedicated to preserving beauty and culture from the grubby hands of plunderers like Wario.",
        logo: 'icon_focus.png',
        relations: {
            allies: ['mushroom_regency', 'mages_guild'],
            enemies: ['wario_land', 'ratchet_raiders', 'crimson_fleet']
        },
        power_level: 2,
        leader: "master_goodstyle",
        category: "Regional Powers",
        region: "Diamond City (Cultural Sector)",
        notable_people: [
            { name: "Master Goodstyle", role: "Patron of the Arts", description: "An ancient and revered artisan who believes that beauty is the world's most valuable currency. He despises Wario for his crude materialism." }
        ],
        waluigi_tip: "Artists! So emotional! Just commission them to make a statue of ME, Waluigi, and while they're busy, you can rob them blind! It's a masterpiece of a plan!",
        internal_politics: {
            ruling_faction: "master_patrons",
            sub_factions: {
                master_patrons: {
                    name: "The Master Patrons",
                    description: "Led by Master Goodstyle, this is the core of the collective. They believe beauty is the world's most important currency and despise those who destroy it for profit or power.",
                    influence: 60,
                    reputation_modifiers: { archie: -30, markop: 5, humpik: -10, bowser: -20 },
                    key_figures: [{ name: "Master Goodstyle", role: "Patron of the Arts", description: "An ancient artisan who despises crude materialism." }]
                },
                the_preservationists: {
                    name: "The Preservationists",
                    description: "A group of archivists and restorers dedicated to protecting cultural heritage. They see the party as a walking catastrophe for historical artifacts.",
                    influence: 40,
                    reputation_modifiers: { archie: -20, markop: 0, humpik: -15, bowser: -15 }
                }
            }
        }
    },
    unaligned: {
        name: "Unaligned & Independent",
        description: "Represents various independent settlements, neutral parties, and areas not under the control of a major faction. Their motivations are diverse, ranging from self-preservation to a desire for true neutrality amidst the world's conflicts.",
        logo: 'icon_focus.png',
        relations: { 
            allies: [], 
            enemies: []
        },
        power_level: 1,
        category: "Underworld & Fringe",
        region: "Widespread",
        leader: "None",
    },
    tea_leaf_syndicate: {
        name: "The Tea Leaf Syndicate",
        description: "A sophisticated criminal organization masquerading as a legitimate tea import company. They control the flow of 'special blend' narcotics and enforce their contracts with quiet, brutal efficiency.",
        logo: 'icon_focus.png',
        relations: { 
            allies: ['freelancer_underworld'], 
            enemies: ['mushroom_regency', 'diamond_city_investigators', 'peach_loyalists']
        },
        power_level: 4,
        category: "Underworld & Fringe",
        region: "Widespread (Mushroom Kingdom)",
        leader: "green_t",
        notable_people: [
            { name: "Green T", role: "Leader", description: "The mysterious and well-dressed leader of the Syndicate." },
            { name: "Earl Grey", role: "Enforcer", description: "A stoic and powerful toad who wields a heavy axe and shield." },
            { name: "Chai", role: "Diplomat", description: "A smooth-talking toad who handles negotiations." }
        ]
    },
    beanbean_kingdom: {
        name: "Beanbean Kingdom",
        description: "The quirky, laughter-loving neighboring kingdom to the Mushroom Kingdom, known for its unique flora and culture.",
        logo: 'icon_focus.png',
        relations: { 
            allies: ['mushroom_regency'], 
            enemies: ['fawfuls_furious_freaks']
        },
        power_level: 5,
        category: "Regional Powers",
        region: "Beanbean Kingdom",
        leader: "queen_bean",
    },
    flower_kingdom: {
        name: "Flower Kingdom",
        description: "A whimsical neighboring kingdom where strange 'Wonder Flowers' can dramatically alter reality.",
        logo: 'icon_magic.png',
        relations: { 
            allies: ['mushroom_regency'], 
            enemies: ['koopa_troop']
        },
        power_level: 5,
        category: "Regional Powers",
        region: "Flower Kingdom",
        leader: "prince_florian",
    },
    dk_crew: {
        name: "The DK Crew",
        description: "Donkey Kong and his family of laid-back but powerful apes. They protect their island home and their massive banana hoard, but have recently been fractured by internal strife following Lanky Kong's disgraceful behavior at a diplomatic summit.",
        logo: 'icon_focus.png',
        relations: { 
            allies: [], 
            enemies: ['kremling_krew', 'koopa_troop']
        },
        power_level: 6,
        category: "Regional Powers",
        region: "Yoshi & DK's Islands",
        leader: "donkey_kong",
        notable_people: [
            { name: "Donkey Kong", role: "Leader", description: "The powerful but easy-going leader of the Kong family, currently trying to manage a major internal crisis." },
            { name: "Lanky Kong", role: "Disgraced Member", description: "A goofy, long-armed Kong whose irresponsible actions at the Democratic Summit caused a diplomatic and economic crisis, isolating him from the rest of the crew." },
            { name: "Diddy Kong", role: "Heir Apparent", description: "DK's energetic nephew, who is furious with Lanky's behavior and is actively pushing for his expulsion from the crew." },
            { name: "Candy Kong", role: "Key Advocate", description: "Formerly Lanky's biggest supporter, she is now appalled by his conduct and supports Diddy's motion to have him removed." },
            { name: "Chunky Kong", role: "Mediator", description: "The gentle giant of the family, asked by DK to try and talk some sense into Lanky before the situation becomes irreparable." },
            { name: "Cranky Kong", role: "Grumpy Elder", description: "The original Donkey Kong, now a crotchety old ape who offers cynical advice and complains about how things were better 'back in his day'." }
        ],
        internal_politics: {
            ruling_faction: "donkey_kongs_leadership",
            sub_factions: {
                donkey_kongs_leadership: {
                    name: "Donkey Kong's Leadership",
                    description: "Donkey Kong is trying to keep his family and his diplomatic relations from falling apart. He is furious with Lanky but is hesitant to take the final step of expelling him, hoping Chunky can mediate.",
                    influence: 40
                },
                diddys_hardliners: {
                    name: "Diddy's Hardliners",
                    description: "Led by Diddy Kong and supported by a disillusioned Candy Kong, this faction believes Lanky is an unforgivable liability. They are actively gathering support to have him formally expelled.",
                    influence: 35
                },
                lankys_shenanigans: {
                    name: "Lanky's Isolation",
                    description: "Lanky Kong seems unrepentant, treating the entire international incident as a joke. He is currently isolated from the rest of the crew, with only Chunky willing to speak to him.",
                    influence: 5
                },
                chunkys_mediation: {
                    name: "Chunky's Mediation",
                    description: "Chunky Kong is caught in the middle. He is loyal to DK and has a soft spot for Lanky, and is attempting to broker some kind of peace before the crew fractures permanently.",
                    influence: 20
                }
            }
        }
    },
    yoshi_clans: {
        name: "The Yoshi Clans",
        description: "The peaceful, fruit-loving dinosaur inhabitants of Yoshi's Island. Generally pacifists, but fiercely protective of their young.",
        logo: 'icon_focus.png',
        relations: { 
            allies: ['mushroom_regency'], 
            enemies: ['koopa_troop']
        },
        power_level: 4,
        category: "Regional Powers",
        region: "Yoshi & DK's Islands",
        leader: "yoshi_elder",
    },
    kremling_krew: {
        name: "The Kremling Krew",
        description: "A militaristic army of crocodile-like Kremlings led by the tyrannical King K. Rool. They are the sworn enemies of the DK Crew and seek to steal the banana hoard.",
        logo: 'icon_pirate.png',
        relations: { 
            allies: [], 
            enemies: ['dk_crew', 'mushroom_regency']
        },
        power_level: 5,
        category: "Regional Powers",
        region: "Yoshi & DK's Islands",
        leader: "king_k_rool",
    },
    knights_of_the_gilded_lily: {
        name: "Knights of the Gilded Lily",
        description: "A chivalric order of knights from the swampy kingdom of Chramalot. They value honor and courtly love, but their kingdom is beset by internal political strife.",
        logo: 'icon_focus.png',
        relations: { 
            allies: ['mushroom_regency'], 
            enemies: ['onyx_hand']
        },
        power_level: 5,
        category: "Regional Powers",
        region: "Chramalot Kingdom",
        leader: "king_chalmus_iii",
    }
};