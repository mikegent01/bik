
// This file contains faction data for powers primarily based in The Midlands.

export const MIDLANDS_FACTIONS = {
    regal_empire: { 
        name: "The Regal Empire",
        description: "The orderly, magitek-obsessed creators of the 'Vigilance', seeking to suppress chaos.",
        logo: 'faction_regal_empire.png',
        relations: { 
            allies: ['iron_legion', 'oathbound_judges', 'iron_fists'], 
            enemies: ['freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators', 'goodstyle_artisans'] 
        },
        power_level: 10,
        category: "Major Powers",
        region: "The Midlands (Capital)",
        leader: "emperor_elagabalus",
        notable_people: [
            { name: "Emperor Elagabalus", role: "Supreme Ruler", description: "The divine ruler of the Empire, believed to be immortal and all-knowing." },
            { name: "High Artificer Construct", role: "Magitek Leader", description: "A powerful artificial being that leads the Magitek Ascension faction." },
            { name: "Artificer Prime Kael", role: "Head of Magitek Research", description: "A brilliant but ruthless scientist pushing the boundaries of magitek." }
        ],
        waluigi_tip: "WAH! The Empire is full of stuffed shirts! The 'Magitek Ascension' nerds secretly love chaos, and the 'Silent Service' spies can be bought. Use their own secrets against them! It's what I would do!",
        internal_politics: {
            ruling_faction: "imperial_core",
            sub_factions: {
                imperial_core: {
                    name: "The Imperial Core",
                    description: "Traditionalist nobles who believe in order, heritage, and the divine right of the Emperor. They view magitek as a tool, not a replacement for strong leadership.",
                    opinion: "The party represents the exact kind of chaos that threatens the Imperial peace. They are criminals and anarchists who must be brought to justice.",
                    influence: 45,
                    reputation_modifiers: { archie: -20, markop: -5, humpik: -5, bowser: -15 },
                    key_figures: [
                        { name: "Duke Tiberius", role: "Speaker of the Noble Houses", description: "Represents the interests of the old, landed aristocracy." },
                        { name: "Lady Seraphina", role: "Keeper of Traditions", description: "Ensures that Imperial protocol is strictly followed." }
                    ]
                },
                magitek_ascension: {
                    name: "The Magitek Ascension",
                    description: "A rising faction of technocrats and artificers who believe technology is the key to perfecting the Empire. They secretly admire X.O.'s power.",
                    opinion: "While their methods are crude, the party's interactions with powerful artifacts and individuals are a valuable source of data. They are test subjects, not enemies.",
                    influence: 25,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 0, bowser: 5 },
                    key_figures: [
                        { name: "Artificer Prime Kael", role: "Head of Research", description: "A brilliant but ruthless scientist pushing the boundaries of magitek." },
                        { name: "X.O.", role: "Former Member (Disgraced)", description: "Once a rising star, now a cautionary tale of ambition." }
                    ]
                },
                the_silent_service: {
                    name: "The Silent Service",
                    description: "The Empire's vast and secretive intelligence network. They value information and stability above all, using blackmail, sabotage, and assassination as needed.",
                    opinion: "The party is a chaotic variable that is both a threat and an opportunity. We have assets observing them and will leverage their actions to our advantage.",
                    influence: 20,
                    reputation_modifiers: { archie: 5, markop: -5, humpik: 0, bowser: 0 },
                    key_figures: [
                        { name: "Spymaster Varrus", role: "Director", description: "A shadowy figure whose face is unknown even to most of the Imperial court." },
                        { name: "Agent Nightingale", role: "Top Operative", description: "A master of disguise and infiltration." }
                    ]
                },
                diplomatic_corps: {
                    name: "The Diplomatic Corps",
                    description: "The face of the Empire abroad. They work to form treaties and maintain alliances, often cleaning up the messes made by the Iron Legion.",
                    opinion: "The party's actions have caused multiple diplomatic incidents. Their alliance with Bowser, a foreign warlord, is particularly problematic. They are an obstacle to peace.",
                    influence: 10,
                    reputation_modifiers: { archie: -15, markop: -10, humpik: -10, bowser: -20 },
                    key_figures: [
                        { name: "Ambassador Callista", role: "Chief Diplomat", description: "A patient and sharp-witted negotiator." }
                    ]
                }
            }
        }
    },
    iron_legion: {
        name: "The Iron Legion",
        description: "A highly organized militaristic faction dedicated to 'Order Through Expansion.' Operating from the Midlands, they seek to build a new empire through disciplined conquest and assimilation. They maintain a semi-autonomous sister legion, the Iron Crown Brigade, in the Mushroom Kingdom to undermine local factions and pave the way for annexation.",
        logo: 'faction_iron_legion.png',
        relations: { 
            allies: ['regal_empire'], 
            enemies: ['freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists', 'diamond_city_investigators', 'goodstyle_artisans']
        },
        power_level: 9,
        category: "Major Powers",
        region: "The Midlands (Imperial Borders)",
        leader: "lord_vexar_steelclad",
        notable_people: [
            { name: "Lord Vexar Steelclad", role: "Grand Forgemaster", description: "The supreme leader of the entire Iron Legion, ruling from the Iron Citadel." },
            { name: "General Marcus Ironhand", role: "Supreme Commander, Midland Legions", description: "The veteran leader of the Legion's main forces, a master of traditional warfare." },
            { name: "Colonel Vera Steelstorm", role: "War-Forged Leader", description: "A young, ambitious officer who leads the Legion's progressive faction." },
            { name: "Forgeheart", role: "Viceroy Hammer, Iron Crown Brigade", description: "The Toad commander of the Legion's covert operations in the Mushroom Kingdom." }
        ],
        waluigi_tip: "WAH! These legionnaires are so predictable. The 'Old Guard' under Ironhand hates chaos, but the younger 'War-Forged' officers are hungry for glory. Give them a chance to prove themselves in a big, flashy fight, and they'll love you for it!"
    },
    onyx_hand: {
        name: "The Onyx Hand",
        description: "A shadowy network of ancient vampire covens from the Midlands. They operate as a clandestine cabal, weaving intricate webs of political intrigue and subtle manipulation to amass influence. Their sister coven, the Crimson Veil, is currently active in the Mushroom Kingdom, where they have orchestrated the assassination of the Toad Town mayor in a bid to install a puppet ruler.",
        logo: 'faction_onyx_hand.png',
        relations: { 
            allies: ['koopa_troop'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 8,
        leader: "lady_ebonveil",
        category: "Mystical & Ancient",
        region: "The Midlands (Southern Marchlands)",
        notable_people: [
            { name: "Lady Ebonveil", role: "Shadow Patriarch", description: "The immortal vampire elder who sits at the pinnacle of the Onyx Hand's shadowy hierarchy." },
            { name: "Lord Crimson", role: "Onyx Lord", description: "An ancient and manipulative vampire who sits on the council of 13 master vampires." },
            { name: "The Veil Matron", role: "Crimson Veil Leader", description: "Leads the Hand's autonomous sister coven in the Mushroom Kingdom." }
        ],
        waluigi_tip: "Vampires think they're so clever. They play the 'long game,' but they hate surprises! Expose one of their secret plots in public and watch them scurry back to the shadows. WAH-HAH-HAH!"
    },
    mages_guild: {
        name: "Mages' Guild",
        description: "A formidable and enigmatic organization dedicated to the mastery and control of magic. Its internal structure is fractured, torn between the traditionalist Conservators, who prioritize stability, and the radical Innovators, who push magical boundaries at any cost. The Aegis Magi enforce the will of the dominant faction.",
        logo: 'faction_mages_guild.png',
        relations: { 
            allies: ['goodstyle_artisans'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 8,
        leader: "archmage_veyra",
        category: "Mystical & Ancient",
        region: "The Midlands (Autumn Wood)",
        notable_people: [
            { name: "Archmage Veyra", role: "Archmage Sovereign", description: "The elected leader of the Guild, struggling to mediate between the two main factions." },
            { name: "Archmage Theron", role: "Conservator Leader", description: "The stern former leader who now heads the traditionalist Conservator faction." },
            { name: "Janna Brightspark", role: "Innovator Leader", description: "A brilliant but reckless mage who leads the radical Innovator faction." }
        ],
        waluigi_tip: "The Guild is a snake pit of rivalries. The 'Conservators' hate new magic, the 'Innovators' love it, and the 'Aegis' just wants to blow things up. Play them against each other for maximum chaos! WAH!"
    },
    silver_flame: {
        name: "Order of the Silver Flame",
        description: "Zealous paladins and clerics dedicated to eradicating supernatural evil.",
        logo: 'faction_silver_flame.png',
        relations: { 
            allies: [], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'oathbound_judges', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 7,
        leader: "high_inquisitor_vale",
        category: "Mystical & Ancient",
        region: "The Midlands (Holy Enclaves)",
        notable_people: [
            { name: "High Inquisitor Vale", role: "Purifier Leader", description: "A zealous paladin who sees all supernatural creatures as abominations." },
            { name: "Templar Captain Dorn", role: "Torch Bearer", description: "A more moderate leader who believes in redemption before destruction." }
        ],
        waluigi_tip: "So self-righteous! The 'Purifiers' are easy to manipulate. Just point them at something you want destroyed and yell 'Vampire!'. The 'Templars' are tougher, they might actually investigate first. Boring!",
        internal_politics: {
            ruling_faction: "purifiers",
            sub_factions: {
                purifiers: {
                    name: "The Purifiers",
                    description: "The militant core of the order, who believe in destroying supernatural evil without mercy or question. They are zealous and uncompromising.",
                    opinion: "Markop has fallen from the light, consorting with criminals and monsters. He is a lost cause. The rest of the party are simply heretics to be purged.",
                    influence: 50,
                    reputation_modifiers: { archie: -25, markop: -20, humpik: -10, bowser: -10 }
                },
                templars_of_the_torch: {
                    name: "Templars of the Torch",
                    description: "Investigators and diplomats who believe in understanding an enemy and redeeming those who have strayed before passing judgment.",
                    opinion: "Markop's path is troubled, but there may yet be hope for his soul. We must observe him and see if he can be guided back to the light.",
                    influence: 35,
                    reputation_modifiers: { archie: -10, markop: 10, humpik: 0, bowser: -5 }
                },
                keepers_of_the_flame: {
                    name: "Keepers of the Flame",
                    description: "A monastic branch dedicated to protecting holy sites and relics. They are scholars and guardians, not frontline fighters.",
                    opinion: "The party's actions have unearthed several sites of interest. They are a chaotic force, but their path crosses with things we must protect.",
                    influence: 15,
                    reputation_modifiers: { archie: 0, markop: 5, humpik: 0, bowser: 0 }
                }
            }
        }
    },
    oathbound_judges: {
        name: "The Oathbound Judges",
        description: "An impartial and unyielding order dedicated to upholding cosmic law.",
        logo: 'faction_oathbound_judges.png',
        relations: { 
            allies: ['regal_empire', 'diamond_city_investigators'], 
            enemies: ['iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'rakasha_clans', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'ratchet_raiders', 'koopa_troop', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'moonfang_pack', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 7,
        leader: "judge_eternal_korven",
        category: "Regional Powers",
        region: "The Midlands (Citadel of Law)",
        notable_people: [
            { name: "Judge Eternal Korven", role: "Supreme Arbiter", description: "The immortal leader of the Truthbearers, known for his unwavering dedication to law." },
            { name: "Arbitrix Mira", role: "Intent Reader", description: "A younger judge who considers the spirit of the law as much as the letter." }
        ],
        waluigi_tip: "These guys are no fun at all. They only care about their precious 'Law'. The best way to deal with them is to frame someone else! It's a classic for a reason. WAH!",
        internal_politics: {
            ruling_faction: "truthbearers",
            sub_factions: {
                truthbearers: {
                    name: "The Truthbearers",
                    description: "The core of the order, who believe in absolute, impartial justice. The law is the law, and all are subject to it.",
                    opinion: "The party, particularly Archie, has a long list of crimes to answer for. Markop, as a former paladin, should know better. Justice will be served.",
                    influence: 60,
                    reputation_modifiers: { archie: -30, markop: -20, humpik: -10, bowser: -15 }
                },
                arbiters_of_intent: {
                    name: "Arbiters of Intent",
                    description: "A faction that believes the spirit of the law is more important than the letter. They consider motive and consequence when passing judgment.",
                    opinion: "While their methods are criminal, the party often brings about a greater good, such as stopping X.O. or dismantling smuggling rings. Their case is... complex.",
                    influence: 40,
                    reputation_modifiers: { archie: 5, markop: 10, humpik: 5, bowser: 0 }
                }
            }
        }
    },
    moonfang_pack: {
        name: "Moonfang Pack",
        description: "Territorial werewolf packs who clash with the city's ancient vampire covens.",
        logo: 'faction_moonfang.png',
        relations: { 
            allies: ['rakasha_clans', 'koopa_troop'], 
            enemies: ['regal_empire', 'iron_legion', 'freelancer_underworld', 'toad_gang', 'toad_cult', 'onyx_hand', 'mages_guild', 'cosmic_jesters', 'the_unchained', 'silver_flame', 'oathbound_judges', 'ratchet_raiders', 'rebel_clans', 'crimson_fleet', 'iron_fists', 'liberated_toads', 'wario_land', 'mushroom_regency', 'peach_loyalists']
        },
        power_level: 7,
        leader: "alpha_bloodmaw",
        category: "Mystical & Ancient",
        region: "The Midlands (Dark Valley)",
        notable_people: [
            { name: "Alpha Bloodmaw", role: "Pack Leader", description: "The strongest werewolf who leads the pack through dominance and fury." },
            { name: "Shaman Moonwhisper", role: "Spirit Guide", description: "The pack's spiritual leader who communes with lunar spirits." }
        ],
        waluigi_tip: "Werewolves are just angry dogs. The 'Alphas' are all about territory, but the 'Spirit-Walkers' are the ones to watch. They see things. Confuse them with a disguise and they won't know who to bite!",
        internal_politics: {
            ruling_faction: "alphas",
            sub_factions: {
                alphas: {
                    name: "The Alphas",
                    description: "The leaders of the packs, who rule through strength and combat prowess. They are fiercely territorial and aggressive.",
                    opinion: "The city is our hunting ground. The party's war with the Onyx Hand is our war. We don't trust them, but any enemy of the leeches is a temporary ally.",
                    influence: 55,
                    reputation_modifiers: { archie: 5, markop: 5, humpik: 0, bowser: 5 }
                },
                spirit_walkers: {
                    name: "The Spirit-Walkers",
                    description: "The shamans of the pack, who commune with the moon and the spirits of the hunt. They see the bigger picture.",
                    opinion: "A great change is upon us. The party are catalysts, their chaos upsetting the balance between predator and prey. We must watch them closely.",
                    influence: 25,
                    reputation_modifiers: { archie: 0, markop: 5, humpik: 0, bowser: 0 }
                },
                young_bloods: {
                    name: "The Young Bloods",
                    description: "Newly turned werewolves who are reckless, violent, and eager to prove themselves in battle.",
                    opinion: "Fighting! We love fighting! The party fights vampires! Let's go fight vampires with them!",
                    influence: 20,
                    reputation_modifiers: { archie: 10, markop: 5, humpik: 5, bowser: 10 }
                }
            }
        }
    },
};