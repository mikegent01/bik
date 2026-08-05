// This file contains the master list of all characters in the application.
// It is the single source of truth for character names, descriptions, and portraits.

export const CHARACTERS = {
    // --- MAIN PARTY ---
    archie: {
        name: "Archie Miser",
        isParty: true,
        role: "The Anarchist with the Third Eye",
        portrait: "portraits/assets/portraits/party/archie.png",
        description: "A three-eyed bandit with a chaotic history, currently a fugitive on the run. His third eye grants him strange, chaotic powers that defy conventional magic."
    },
    markop: {
        name: "Markop Judi",
        isParty: true,
        role: "The Disgraced Paladin",
        portrait: "portraits/assets/portraits/party/markop.png",
        description: "A Centaur Paladin, reluctantly roped into chaos. He tries to be a moral compass, though his faith and honor are constantly tested."
    },
    hjumpik: {
        name: "Hjumpik",
        isParty: true,
        role: "The Dwarven King's Champion",
        portrait: "portraits/assets/portraits/party/hjumpik.png",
        description: "A powerful Dwarf warrior from a forgotten mountain hold. Fiercely loyal to his friend Bowser, their unlikely alliance is a source of confusion and concern for many factions."
    },
    bowser: {
        name: "Bowser",
        isParty: true,
        role: "The Deposed Koopa King",
        portrait: "portraits/assets/portraits/party/bowser.png",
        description: "The once-mighty King of the Koopas, now a king without a kingdom. Arrogant, powerful, and surprisingly resilient, Bowser seeks to rebuild his empire and crush any who stand in his way."
    },
    remi: {
        name: "FNG Remi",
        isParty: true,
        role: "The Unlucky Newcomer",
        portrait: "portraits/assets/portraits/party/remi.png",
        description: "The newest operator on the Vigilance. Their past is a mystery, their future uncertain. Their stated reason for being here: 'I put one foot in front of the other and next thing I know, something happened.'"
    },

    // --- MAJOR ANTAGONISTS & RIVALS ---
    waluigi: {
        name: "Waluigi",
        role: "Agent of Chaos / Evil Genius",
        portrait: "portraits/waluigi.png",
        description: "Narcissistic evil genius and master hacker. A lanky, dramatic villain who thrives on chaos and attention. His schemes are often as bizarre as they are destructive."
    },
    wario: {
        name: "Mr. Wario",
        role: "Secret Leader of Wario Land",
        portrait: "portraits/assets/portraits/party/wario.png",
        description: "The mysterious mastermind pulling the strings of Wario's old empire. His identity is a closely guarded secret, but he shares Wario's insatiable greed and ruthlessness."
    },
    fawful: {
        name: "Fawful",
        role: "Master of Chortles, Lord of the Castle",
        portrait: "portraits/fawful.png",
        description: "A cunning and erratic Beanish villain known for his maniacal laughter and green-hued schemes. He has seized Peach's Castle and transformed it into a twisted stronghold."
    },
    king_k_rool: {
        name: "King K. Rool",
        role: "Tyrant King of the Kremling Krew",
        portrait: "portraits/king_k_rool.png",
        description: "The bombastic and egotistical king of the Kremlings. He is obsessed with stealing the Crystal Coconut and Donkey Kong's banana hoard."
    },
    captain_syrup: {
        name: "Captain Syrup",
        role: "Fleet Captain of the Crimson Fleet",
        portrait: "portraits/captain_syrup.png",
        description: "The infamous and cunning pirate captain. After being freed by the party only to be immediately embroiled in another conflict, she holds a serious grudge."
    },
    boss_knuckles: {
        name: "Boss Knuckles",
        role: "Leader of the Iron Fists",
        portrait: "portraits/boss_knuckles.png",
        description: "The brutal and vengeful leader of the Iron Fists gang. After the party dismantled one of his most profitable smuggling operations, Knuckles has made it his personal mission to see them all dead."
    },
    
    // --- LIBERATED TOADS ---
    dan: {
        name: "Dan",
        role: "The Wounded Hero",
        portrait: "portraits/dan.png",
        description: "A brave Toad, formerly one of the slaves freed by Archie. After playing a key role in X.O.'s defeat, he is now being trained in magic by the Rakasha, under Markop's supervision."
    },
    toad_lee: {
        name: "Toad Lee",
        role: "Warden of the Toads",
        portrait: "toads/toad_lee.png",
        description: "A hardy toad warrior who fights with a surprisingly large axe and has taken on the burden of protecting the fractured group."
    },
    eager: {
        name: "Eager",
        role: "Swift Scout",
        portrait: "portraits/eager.png",
        description: "A nimble and quick-witted toad who prefers to keep his distance, using his whip to control the battlefield and scout ahead for his slower brethren."
    },
    salam: {
        name: "Salam",
        role: "Ranger With Damaged Trust",
        portrait: "portraits/salam.png",
        description: "A quiet, sharpshooting Toad ranger who landed a legendary eye-shot on the Arachnid Matriarch. Following many trials, his trust in outsiders is deeply fractured, but his vigilance remains unwavering."
    },
    ryan: {
        name: "Ryan",
        role: "Arcane Student",
        portrait: "portraits/ryan.png",
        description: "A quiet, studious toad with a natural but untrained affinity for magic. He watches Dan's training with intense focus, hoping to unlock his own arcane potential."
    },
    roger: {
        name: "Roger",
        role: "Pragmatist Gunner",
        portrait: "toads/roger.png",
        description: "A practical and no-nonsense toad who sees the world for what it is. He found a discarded firearm during their escape and has become a surprisingly skilled marksman."
    },
    bones: {
        name: "Bones",
        role: "Hardened Survivor",
        portrait: "portraits/bones.png",
        description: "A tough, grotesque-looking toad who has seen the worst of the world and survived. He is resilient and cynical, and is currently wrestling with the strange 'debt' he feels he owes to the Orcs."
    },
    the_mole: {
        name: "The Mole",
        role: "Iron Legion Infiltrator",
        portrait: "toads/the_mole.png",
        description: "A spy who successfully infiltrated the Liberated Toads and facilitated the capture of Bones."
    },

    // --- FACTION LEADERS & KEY FIGURES ---
    emperor_elagabalus: {
        name: "Emperor Elagabalus",
        role: "Supreme Ruler of the Regal Empire",
        portrait: "portraits/emperor_elagabalus.png",
        description: "The divine and eternal ruler of the Regal Empire. Elagabalus is a figure of immense power and cold calculation, viewing the maintenance of absolute order as a sacred duty."
    },
    general_marcus_ironhand: {
        name: "General Marcus Ironhand",
        role: "Supreme Commander, Iron Legion Old Guard",
        portrait: "portraits/assets/portraits/leaders/general_marcus_ironhand.png",
        description: "The aging but brilliant Supreme Commander of the Iron Legion. Ironhand is a master strategist who believes discipline is the greatest weapon and a staunch traditionalist."
    },
    colonel_vera_steelstorm: {
        name: "Colonel Vera Steelstorm",
        role: "War-Forged Leader, Iron Legion",
        portrait: "portraits/assets/portraits/leaders/colonel_vera_steelstorm.png",
        description: "A young, ambitious, and pragmatic officer leading the progressive 'War-Forged' faction within the Iron Legion. She values results over tradition."
    },
    chancellor_toadsworth: {
        name: "Chancellor Toadsworth",
        role: "Leader of the Mushroom Regency",
        portrait: "toads/chancellor_toadsworth.png", 
        description: "An elderly, beleaguered, yet deeply loyal servant of the Mushroom Kingdom, trying to navigate a political minefield."
    },
    captain_toadette: {
        name: "Captain Toadette",
        role: "Leader of the Peach Loyalists",
        portrait: "portraits/captain_toadette.png",
        description: "A fierce and fanatical figure in the Mushroom Kingdom Civil War. Her vibrant magenta mushroom cap frames eyes that blaze with manic determination."
    },
    the_broker: {
        name: "The Broker",
        role: "Information Kingpin",
        portrait: "portraits/the_broker.png",
        description: "A mysterious, ghost-like figure who sits at the center of the Freelancer Underworld's web of information. They trade in secrets as the only true currency."
    },
    skull_cap_murphy: {
        name: "Skull-Cap Murphy",
        role: "Leader of the Mushroom Skulls",
        portrait: "portraits/skull_cap_murphy.png",
        description: "The violent and ambitious leader of the Mushroom Skulls. Seized power after Big T's defeat, believing his predecessor was too soft."
    },
    donkey_kong: {
        name: "Donkey Kong",
        role: "Leader of the DK Crew",
        portrait: "portraits/donkey_kong.png",
        description: "The powerful but easy-going leader of the Kong family. He enjoys a simple life of bananas and sunshine, but will fly into a rage if his friends or hoard are threatened."
    },
    kamek: {
        name: "Kamek",
        role: "Chief Advisor to Bowser",
        portrait: "portraits/kamek.png",
        description: "The ancient and powerful Magikoopa who serves as Bowser's most trusted advisor. With Bowser away, Kamek commands the scattered Koopa Troop remnants."
    },
    archmage_theron: {
        name: "Archmage Theron",
        role: "Conservator Leader, Mages' Guild",
        portrait: "portraits/archmage_theron.png",
        description: "The stern and traditionalist former leader of the Mages' Guild. Theron believes that magic is a dangerous force that must be strictly controlled and regulated."
    },
    chief_thornpaw: {
        name: "Chief Thornpaw",
        role: "Spirit-Walker of the Rakasha Clans",
        portrait: "portraits/chief_thornpaw.png",
        description: "The wise and patient shaman who leads the Rakasha Clans. He is deeply connected to the spirits of the natural world and holds a deep secret about the late Princess Peach."
    },
    high_inquisitor_vale: {
        name: "High Inquisitor Vale",
        role: "Leader of the Silver Flame",
        portrait: "portraits/high_inquisitor_vale.png",
        description: "The zealous and unwavering leader of the Order of the Silver Flame. Vale sees the world in stark black and white, a corruption that must be purged with holy fire."
    },
    lord_crimson: {
        name: "Lord Crimson",
        role: "Elder Vampire of the Onyx Hand",
        portrait: "portraits/lord_crimson.png",
        description: "An ancient and manipulative vampire who plays the long game of politics with centuries of experience. He views mortals as pawns in his grand designs."
    },
    lady_toriel: {
        name: "Lady Toriel",
        role: "Representative of Lockerwood",
        portrait: "portraits/lady_toriel.png",
        description: "A kind-hearted and motherly goat-like woman who represents the independent province of Lockerwood. Despite her gentle demeanor, she is a shrewd diplomat."
    },

    // --- OTHER NPCS & MINOR CHARACTERS ---
    lario: {
        name: "Lario",
        role: "Public Leader of Wario Land",
        portrait: "portraits/lario.png",
        description: "Wario's brother and a skilled, if greedy, mechanic. He serves as the public face of Wario Land, taking orders from his ghostly brother."
    },
    green_t: {
        name: "Green T",
        role: "Leader, The Tea Leaf Syndicate",
        portrait: "portraits/green_t.png",
        description: "The mysterious and well-dressed leader of the Syndicate. His motives are unknown, but he commands loyalty through fear and reward. He has revealed the ability to grow to immense size."
    },
    bryan: {
        name: "Bryan",
        role: "Mushroom Skulls Vindicator",
        portrait: "toads/bryan.png",
        description: "A toad with a tragic past seeking vengeance against Archie Miser. Believing Archie betrayed him, he was saved by the 'God Toad' and has since joined the Mushroom Skulls gang."
    },
    sans: {
        name: "Sans",
        role: "Mysterious Watcher",
        portrait: "portraits/sans.png",
        description: "A mysterious figure operating from the Underground, detecting reality-bending static and sending cryptic warnings."
    },
    'battle-mage_kovar': {
        name: "Battle-Mage Kovar",
        role: "Commander of the Aegis Magi",
        portrait: "portraits/battle_mage_kovar.png",
        description: "The hardened and battle-scarred leader of the Mages' Guild's military wing. Kovar has little patience for politics or research, viewing arcane power as a weapon."
    },
    first_mate_jones: {
        name: "First Mate Jones",
        role: "Quartermaster of the Crimson Fleet",
        portrait: "portraits/first_mate_jones.png",
        description: "The loyal and pragmatic second-in-command to Captain Syrup. Jones is the one who keeps the Crimson Fleet running."
    },
    'janna_brightspark': {
        name: "Janna Brightspark",
        role: "Innovator Leader, Mages' Guild",
        portrait: "portraits/janna_brightspark.png",
        description: "A brilliant but reckless mage who leads the radical Innovator faction. She believes that magical progress should be pursued at any cost, viewing tradition as a cage."
    },
    embercap: {
        name: "Embercap",
        role: "Field Commander, Peach Loyalists",
        portrait: "portraits/embercap.png",
        description: "Captain Toadette's most steadfast and loyal soldier. He has fully recommitted himself to her ruthless cause and is now a key figure in the plan to besiege Peach's Castle."
    },
    mistveil: {
        name: "Mistveil",
        role: "Toad Scout, Peach Loyalists",
        portrait: "portraits/mistveil.png",
        description: "A nimble scout with pale gray-green skin and a lavender cap. He moves silently, his keen eyes observing enemy movements for Captain Toadette's next strike."
    },
    dewdrop: {
        name: "Dewdrop",
        role: "Toad Medic, Peach Loyalists",
        portrait: "portraits/dewdrop.png",
        description: "A compassionate medic with soft aqua-blue skin. He provides a calming presence amidst the zealotry of the Loyalist army."
    },
    detective_penny: {
        name: "Detective Penny",
        role: "Lead Investigator, Diamond City",
        portrait: "portraits/detective_penny.png",
        description: "A sharp-witted detective with a passion for puzzles and justice. She has made it her personal mission to dismantle Wario's criminal empire."
    },
    master_goodstyle: {
        name: "Master Goodstyle",
        role: "Patron, The Goodstyle Artisans",
        portrait: "portraits/master_goodstyle.png",
        description: "An ancient and revered artisan who believes that beauty is the world's most valuable currency. He despises Wario for his crude materialism."
    },
    lanky_kong: {
        name: "Lanky Kong",
        role: "Disgraced Member of the DK Crew",
        portrait: "portraits/lanky_kong.png",
        description: "A goofy, long-armed member of the DK crew. His recent conduct at the Democratic Summit has put him in hot water with the rest of the crew."
    },
    diddy_kong: {
        name: "Diddy Kong",
        role: "Heir Apparent of the DK Crew",
        portrait: "portraits/diddy_kong.png",
        description: "Donkey Kong's energetic and loyal nephew. He is a capable adventurer but is growing frustrated with Lanky's irresponsible behavior."
    },
    chunky_kong: {
        name: "Chunky Kong",
        role: "Mediator of the DK Crew",
        portrait: "portraits/chunky_kong.png",
        description: "The strong, gentle giant of the Kong family. Despite his immense power, he is often timid, but he is fiercely loyal and has been asked by DK to mediate the current family crisis."
    },
    candy_kong: {
        name: "Candy Kong",
        role: "Key Advocate of the DK Crew",
        portrait: "portraits/candy_kong.png",
        description: "A key member of the DK crew and Donkey Kong's partner. Once Lanky's strongest supporter, his actions at the summit have left her appalled."
    },
    'iggy_koopa': {
        name: "Iggy Koopa",
        role: "Koopaling",
        portrait: "portraits/iggy_koopa.png",
        description: "One of Bowser's unpredictable and manic children. Recently captured in Toad Town, he was quickly rescued after a chaotic series of events."
    },

    // --- DECEASED OR MISSING ---
    xo: {
        name: "X.O.",
        role: "Rogue Mage",
        status: "MIA / Presumed Deceased",
        portrait: "portraits/xo.png",
        description: "A powerful magic user who betrayed the party. After her defeat, she was last seen dying inside a giant worm, cryptically stating 'my jokes never land' before disappearing."
    },
    bigt: {
        name: "Big T",
        role: "Former Toad Gang Leader",
        status: "Deceased",
        portrait: "portraits/bigt.png",
        description: "Tyrannical leader of the Toad Gang. After his mysterious disappearance, he briefly reappeared in the Vigilance's power room before being assassinated by a sniper."
    },
    'earl_grey': {
        name: "Earl Grey",
        role: "Syndicate Enforcer",
        status: "Deceased",
        portrait: "toads/earl_grey.png",
        description: "A stoic and powerful toad who wielded a heavy axe and shield. He was Green T's loyal bodyguard."
    },
    'chai': {
        name: "Chai",
        role: "Syndicate Diplomat",
        status: "Deceased",
        portrait: "toads/chai.png",
        description: "A smooth-talking toad who handled the Syndicate's negotiations. Concealed a deep distrust of the party behind a veneer of cooperation."
    },

    // GENERIC & MISC (usually don't need portraits but added for consistency)
    koopa_troop: {
        name: "Koopa Troop",
        role: "Generic Koopa Soldier",
        portrait: "portraits/koopa.png",
        description: "A loyal soldier of the Koopa Troop, awaiting the return of King Bowser."
    },
    generic_toad: {
        name: "Toad Town Citizen",
        role: "A Worried Resident",
        portrait: "toads/toad.png",
        description: "An ordinary citizen just trying to get by in a world filled with chaos and conflict."
    },
    self_reflection_oracle: {
        name: "The Oracle",
        role: "The Keeper of Raventree",
        portrait: "portraits/oracle.png",
        description: "A being unstuck from time, residing in the decaying Raventree Manor. His visions guide and torment those who seek him out."
    },
};