// This file contains faction data for powers primarily based in the Mushroom Kingdom.

export const MUSHROOM_KINGDOM_FACTIONS = {
    toad_gang: { 
        name: "The Toad Gang", 
        description: "Led by the tyrannical Big T, they seek to expand their 'Toadification' campaign.",
        logo: 'faction_toad_gang.png',
        relations: { 
            allies: ['toad_cult'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'fawfuls_furious_freaks'] 
        },
        power_level: 4,
        category: "Underworld & Fringe",
        region: "Mushroom Kingdom (Underbelly)",
        leader: "skull_cap_murphy",
        notable_people: [
            { name: "Big T", role: "Former Leader", description: "The tyrannical toad supremacist whose body has mysteriously vanished." },
            { name: "Skull-Cap Murphy", role: "Mushroom Skulls Leader", description: "The violent leader of the radical faction that seized power after Big T's defeat." }
        ],
        waluigi_tip: "This gang is a mess! The 'Mushroom Skulls' think Big T was weak! If you want to take over, challenge the Skulls' leader to a fight. Or, even better, trick them into fighting the 'Big T Loyalists'. More chaos for me! WAH!",
        internal_politics: {
            ruling_faction: "mushroom_skulls",
            sub_factions: {
                big_t_loyalists: {
                    name: "Big T Loyalists",
                    description: "The remnants of Big T's inner circle, who believe he will one day return. They are focused on revenge against the party.",
                    opinion: "The party are scum who attacked the great Big T! They must be crushed to pave the way for his glorious return!",
                    influence: 25,
                    reputation_modifiers: { archie: -10, markop: -10, humpik: -10, bowser: -10 },
                    key_figures: [
                        { name: "Knuckles", role: "Chief Enforcer", description: "Big T's former right-hand man, now leading the search for his body." }
                    ]
                },
                mushroom_skulls: {
                    name: "The Mushroom Skulls",
                    description: "A more radical and violent faction that saw Big T's defeat as a sign of weakness. They want to escalate the 'Toadification' to all-out war.",
                    opinion: "Big T got soft! The party did us a favor by removing him. Now, under our lead, we can show the world true Toad power!",
                    influence: 45,
                    reputation_modifiers: { archie: 5, markop: -5, humpik: -5, bowser: 0 },
                    key_figures: [
                        { name: "Skull-Cap Murphy", role: "New Leader", description: "The violent toad who seized power after Big T's defeat." },
                        { name: "Bryan", role: "Vindicator", description: "A vengeful toad empowered by the 'God Toad', hunting Archie Miser." }
                    ]
                },
                the_extortionists: {
                    name: "The Extortionists",
                    description: "The 'business' arm of the gang, focused on running protection rackets and smuggling operations. They care more about profit than ideology.",
                    opinion: "The party's fight with Big T was bad for business. All that chaos disrupted our income streams. We want them gone so we can get back to making coin.",
                    influence: 20,
                    reputation_modifiers: { archie: -5, markop: -5, humpik: -5, bowser: -5 },
                    key_figures: [
                        { name: "Fingers", role: "Accountant", description: "The bean-counter of the gang, obsessed with the bottom line." }
                    ]
                },
                new_bloods: {
                    name: "The New Bloods",
                    description: "Young, reckless recruits who joined the gang for the thrill of violence and mayhem, with little loyalty to any specific leader.",
                    opinion: "That three-eyed guy is cool! He just blows stuff up! We should be more like that! Why are we fighting him again?",
                    influence: 10,
                    reputation_modifiers: { archie: 10, markop: 0, humpik: 0, bowser: 5 },
                    key_figures: [
                        { name: "Spike", role: "Aspiring Thug", description: "A young toad with more bravado than sense." }
                    ]
                }
            }
        }
    },
    toad_cult: {
        name: "The Toad Cult",
        description: "Fanatical schismatics who worship 'The Ascended One' and seek revenge.",
        logo: 'faction_toad_cult.png',
        relations: { 
            allies: ['toad_gang'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists'] 
        },
        power_level: 3,
        category: "Underworld & Fringe",
        region: "Mushroom Kingdom (Fringe)",
        leader: "high_spore_speaker",
        notable_people: [
            { name: "The Ascended One", role: "Deity", description: "The mysterious toad god worshipped by the cult, whose return is prophesied." },
            { name: "High Spore Speaker", role: "Cult Leader", description: "The main prophet who interprets the will of The Ascended One." }
        ],
        waluigi_tip: "These weirdos are a joke! But the 'New Bloom' fanatics are dangerous. If you want to discredit the whole cult, just give the New Bloom guys some explosives and point them at something important. They'll do the rest!",
        internal_politics: {
            ruling_faction: "ascended_chosen",
            sub_factions: {
                ascended_chosen: {
                    name: "The Ascended's Chosen",
                    description: "The original followers of 'The Ascended One', who believe in subtle conversion and prophecy. They see the party as unwitting tools.",
                    opinion: "They are signs. Their chaos is part of the Great Prophecy, clearing the way for the Ascended One's true return. We must watch them, not fight them.",
                    influence: 50,
                    reputation_modifiers: { archie: 5, markop: 0, humpik: 0, bowser: 0 }
                },
                new_bloom_schismatics: {
                    name: "New Bloom Schismatics",
                    description: "A radical offshoot that believes prophecy must be forced. They advocate for direct action, terrorism, and sacrifice to hasten the coming of their god.",
                    opinion: "Prophecy is a path, not a destination! The party are heretics who must be sacrificed to nourish the New Bloom!",
                    influence: 25,
                    reputation_modifiers: { archie: -20, markop: -20, humpik: -20, bowser: -20 }
                },
                quiet_converts: {
                    name: "The Quiet Converts",
                    description: "Secret members of the cult operating within mainstream society. They subtly spread the cult's influence and gather information.",
                    opinion: "The party's high-profile actions make our work of subtle conversion much harder. They draw too much attention to the 'weirder' elements of the world.",
                    influence: 15,
                    reputation_modifiers: { archie: -5, markop: -5, humpik: -5, bowser: -5 }
                },
                spore_seekers: {
                    name: "The Spore-Seekers",
                    description: "Cultist archaeologists and explorers who search for holy sites and lost relics related to The Ascended One.",
                    opinion: "The party's dimension-hopping could lead them to a lost temple or relic by accident! We must follow them and see what secrets they unearth.",
                    influence: 10,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 5, bowser: 5 }
                }
            }
        }
    },
    mushroom_regency: {
        name: "Mushroom Regency",
        description: "The official but fractured government of the Mushroom Kingdom, struggling to maintain order amidst a civil war that has simmered for over a century. The conflict escalated dramatically into its current, chaotic final phase following the death of Princess Peach 45 years ago.",
        logo: 'faction_mushroom_regency.png',
        relations: { 
            allies: ['liberated_toads', 'goodstyle_artisans'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'wario_land', 'peach_loyalists', 'fawfuls_furious_freaks']
        },
        power_level: 5,
        leader: "chancellor_toadsworth",
        category: "Regional Powers",
        region: "Mushroom Kingdom (Heartlands)",
        notable_people: [
            { name: "Chancellor Toadsworth", role: "Head of the Regency", description: "The elderly, overwhelmed leader trying to hold the kingdom together." },
            { name: "Captain Toad", role: "Commander of the Toadstool Guard", description: "The brave but beleaguered commander of the official military forces." }
        ],
        waluigi_tip: "They're falling apart! Toadsworth is a worrier. Just convince him there's a new, imaginary threat, and he'll waste all his resources preparing for it. Easy!"
    },
    peach_loyalists: {
        name: "Peach Loyalists",
        description: "A fanatical military faction that has split from the Regency. Following the events in Toad Town, their strategy has shifted under Captain Toadette to a brutal war of attrition. They have seized Toad Town, appointed a provisional government, and are now preparing to besiege Peach's Castle.",
        logo: 'faction_peach_loyalists.png',
        relations: { 
            allies: [], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'fawfuls_furious_freaks']
        },
        power_level: 4,
        leader: "captain_toadette",
        category: "Regional Powers",
        region: "Mushroom Kingdom (Militarized Zones)",
        notable_people: [
            { name: "Captain Toadette", role: "Faction Leader", description: "A fanatical commander who believes the Princess is alive and the Regency is illegitimate." },
            { name: "Embercap", role: "Field Commander", description: "Captain Toadette's most steadfast and loyal soldier. Presumed dead at Fawful's Gala, he has returned with a hardened resolve, fully embracing her ruthless new strategies." },
            { name: "Mistveil", role: "Interim Governor of Toad Town", description: "A nimble scout specializing in stealth and reconnaissance. He has been appointed as the provisional governor of occupied Toad Town, tasked with carrying out Toadette's orders." },
            { name: "Dewdrop", role: "Chief Medic", description: "A compassionate medic with an aqua-blue cap, responsible for tending to the wounded in Toadette's growing army." }
        ],
        waluigi_tip: "Fanatics are the easiest to fool. Plant some fake 'evidence' of the princess being alive somewhere dangerous, and they'll charge right into a trap. WAH-HA-HA!",
        internal_politics: {
            ruling_faction: "command_staff",
            sub_factions: {
                embercap: {
                    name: "Commander Embercap",
                    level: 2,
                    xp: 150,
                    xp_to_next: 200,
                    description: "A resilient warrior whose near-death experience has forged him into a harder, more pragmatic soldier.",
                    log: [
                        { xp: 50, reason: "Survived the events at Fawful's Gala and embraced a new, harsher reality." },
                        { xp: 100, reason: "Endured Toadette's loyalty test and reaffirmed his commitment to the cause." },
                        { xp: 0, reason: "Leveled up to 2!", isLevelUp: true }
                    ]
                },
                mistveil: {
                    name: "Scout Mistveil",
                    level: 2,
                    xp: 25,
                    xp_to_next: 200,
                    description: "A stealthy operative now thrust into a position of authority he may not be prepared for.",
                    log: [
                        { xp: 25, reason: "Successfully scouted Fawful's Gala." },
                        { xp: 50, reason: "Killed a Fawful Cultist in the sewers, securing vital intelligence." },
                        { xp: 50, reason: "Passed Toadette's loyalty test through decisive, ruthless action." },
                        { xp: 0, reason: "Leveled up to 2!", isLevelUp: true }
                    ]
                },
                dewdrop: {
                    name: "Medic Dewdrop",
                    level: 1,
                    xp: 25,
                    xp_to_next: 100,
                    description: "The compassionate heart of the Loyalists, working tirelessly to save lives in an increasingly brutal conflict.",
                    log: [
                        { xp: 25, reason: "Tended to the wounded after the chaos at Fawful's Gala." }
                    ]
                }
            }
        }
    },
    fawfuls_furious_freaks: {
        name: "Fawful's Furious Freaks",
        description: "The erratic Beanish villain Fawful has seized Peach's Castle amidst the chaos, transforming it into a twisted stronghold. In a shocking move, he has formed an alliance with dragons and revealed that the very stones of the castle are alive. His army is a bizarre mix of brainwashed Toads, reprogrammed Goombas, and his own maniacal mechanical minions. They fight with unpredictable fury and chortles of doom.",
        logo: 'faction_fawful.png',
        relations: { 
            allies: [], 
            enemies: ['peach_loyalists', 'mushroom_regency', 'koopa_troop', 'toad_gang', 'liberated_toads', 'regal_empire', 'iron_legion']
        },
        power_level: 6,
        leader: "fawful",
        category: "Regional Powers",
        region: "Mushroom Kingdom (Peach's Castle)",
        notable_people: [
            { name: "Fawful", role: "Master of Fury", description: "A cunning Beanish villain with a penchant for maniacal laughter and green-hued schemes." },
            { name: "The Evil Toad God", role: "Guest of Honor", description: "An ancient evil empowered by an artifact, attending Fawful's gala as a show of chaotic solidarity." },
            { name: "Crimson Spore", role: "Party Guest", description: "A flamboyant toad attending Fawful's party." },
            { name: "Sapphire Bloom", role: "Party Guest", description: "An elegant toad attending Fawful's party." },
            { name: "Obsidian Crunch", role: "Party Guest", description: "A gruff, battle-hardened toad attending Fawful's party." },
            { name: "Amber Whistle", role: "Party Guest", description: "A playful, energetic toad attending Fawful's party." },
            { name: "Jade Grit", role: "Party Guest", description: "A stoic and resilient toad attending Fawful's party." },
            { name: "Violet Hush", role: "Party Guest", description: "A mysterious and subtle toad attending Fawful's party." }
        ],
        waluigi_tip: "Fawful has fury! And ego! Tell him his machines are just cheap knock-offs of my own brilliant designs. His rage will make him sloppy! WAH!"
    },
    liberated_toads: {
        name: "The Liberated Toads",
        description: "A group of former slaves freed by the party. Led by the heroic Dan, they are finding their place in a dangerous world, now burdened with the knowledge that over 150 more trafficked toads were aboard the Vigilance.",
        logo: 'faction_liberated_toads.png',
        relations: { 
            allies: ['rakasha_clans', 'the_unchained', 'rebel_clans', 'mushroom_regency'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'cosmic_jesters', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'wario_land', 'peach_loyalists', 'fawfuls_furious_freaks']
        },
        power_level: 2,
        leader: "dan",
        category: "Underworld & Fringe",
        region: "Mushroom Kingdom (Nomadic)",
        notable_people: [
            { name: "Dan", role: "Hero Leader", description: "The brave toad who defeated X.O. and now leads his fellow liberated toads." },
            { name: "Toad Lee", role: "First Warrior", description: "The first toad to join the party, wielding a surprisingly large axe." },
            { name: "Bones", role: "The Survivor", description: "A grotesque but resilient toad who owes a debt to the Orcs who kidnapped and then spared him." }
        ],
        waluigi_tip: "WAH! These toads are surprisingly tough! Dan is their heart, but Toad Lee is their history. Turn them against each other by reminding Toad Lee that a newcomer is getting all the glory! A classic Waluigi move!",
        internal_politics: {
            ruling_faction: "dan",
            sub_factions: {
                dan: {
                    name: "Dan, The Hero",
                    status: "Injured",
                    description: "His incredible bravery in the face of X.O. has made him the de facto leader and hero of the group. He is learning magic from the Rakasha.",
                    influence: 40,
                    events: {
                        peach_death: "The Princess is dead? But... she was a symbol of hope for so many. This is a tragedy, and Bowser's aggression is surely to blame."
                    },
                    current_focus: "Mastering his new magical abilities under the Rakasha's guidance and recovering from his injuries."
                },
                toad_lee: {
                    name: "Toad Lee, The First",
                    status: "Active",
                    description: "The first toad to join the party and a powerful warrior. He acts as the group's enforcer and protector.",
                    influence: 25,
                    events: {
                        peach_death: "Another ruler falls. It proves we can only rely on our own strength, not on monarchs."
                    },
                    current_focus: "Training the other toads in basic combat and ensuring their immediate safety."
                },
                eager: {
                    name: "Eager, The Swift",
                    status: "Active",
                    description: "A nimble and quick-witted toad who prefers to keep his distance, using his whip to control the battlefield.",
                    influence: 10,
                    events: {
                        peach_death: "Oh no! That's terrible! Does this mean more fighting? I don't like fighting."
                    },
                    current_focus: "Scouting safe locations for the toads to rest and gather supplies."
                },
                roger: {
                    name: "Roger, The Pragmatist",
                    status: "Active",
                    description: "A practical toad who sees the world for what it is. He found a gun and has become a crack shot.",
                    influence: 10,
                    events: {
                        peach_death: "A power vacuum. This is bad for stability. Bad for business. Bowser's fault, probably."
                    },
                    current_focus: "Maintaining their limited equipment and trying to acquire more ammunition."
                },
                ryan: {
                    name: "Ryan, The Studious",
                    status: "Duplicitous",
                    description: "A quiet toad with a natural, if untrained, affinity for magic. ",
                    influence: 10,
                    events: {
                        peach_death: "Her magic was said to be protective, a light in the darkness. For that light to be extinguished... it's a great loss for the world."
                    },
                    current_focus: "Trying to decipher a spell scroll they recovered during their escape."
                },
                bones: {
                    name: "Bones, The Hardened",
                    status: "Active",
                    description: "A tough, grotesque toad who has seen the worst of the world and survived. He is resilient and cynical.",
                    influence: 5,
                    events: {
                        peach_death: "She was a princess in a castle. Never knew real suffering. Her death changes nothing for toads like us."
                    },
                    current_focus: "Wrestling with the 'debt' he owes to the Orcs who kidnapped and then spared him."
                },
                wallys_toad: {
                    name: "Wally's Toad (De-programmed)",
                    status: "Detained (Iron Legion)",
                    description: "A Waluigi loyalist who infiltrated the group. He was captured by the Iron Legion, who removed a strange seed from his head, turning him back into a normal, confused toad. His discovery has sown seeds of distrust among the toads.",
                    influence: 0,
                    events: {
                        peach_death: "Good. One less monarch to complicate things. All according to the WAH-ster plan!"
                    },
                    current_focus: "Held by the Iron Legion for observation."
                }
            }
        }
    },
};