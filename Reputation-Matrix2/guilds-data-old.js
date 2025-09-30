import { LORE_DATA } from './lore.js';

export const GUILD_DATA = {
    'wayfinders_guild': {
        name: "The Wayfinders' Guild",
        description: "An independent organization dedicated to charting the unknown regions of the world, from the deepest dungeons to the skies beyond The Edge. They sell maps and recovered artifacts to fund their expeditions.",
        leader: "High Cartographer Elara",
        sponsoring_faction: null, // Independent
        headquarters: "The Horizon Spire, Port Anvil",
        goals: [
            "Map the entire Doughnut World.",
            "Discover and catalogue new species of flora and fauna.",
            "Uncover lost artifacts from ancient civilizations."
        ],
        ranks: [
            { title: "High Cartographer", description: "The elected leader of the Guild." },
            { title: "Master Wayfinder", description: "Leads major expeditions into uncharted territory." },
            { title: "Journeyman", description: "Experienced explorers qualified for solo missions." },
            { title: "Apprentice", description: "New members learning the arts of cartography and survival." }
        ],
        rules: [
            "The map must be true. Accuracy is sacred.",
            "Share knowledge with the Guild. Discoveries belong to all.",
            "Leave no trace but footprints. Respect the places you explore.",
            "Aid a fellow Wayfinder in need. The wilderness is foe enough."
        ],
        recruitment: "Membership is granted to those who can present a significant discovery—a previously unmapped location, a new species, or a lost artifact. The discovery is vetted by a council of Master Wayfinders. Alternatively, one can be accepted as an apprentice under the sponsorship of a Journeyman.",
        sub_guilds: []
    },
    'shadow_syndicate': {
        name: "The Shadow Syndicate",
        description: "The most powerful and secretive branch of the Freelancer Underworld. The Shadow Syndicate controls the majority of smuggling, assassination, and espionage contracts in the major cities. Membership is by invitation only.",
        leader: "'The Broker' (rumored)",
        sponsoring_faction: "freelancer_underworld",
        headquarters: "The Flophouse, City Underbelly",
        goals: [
            "Maintain control over the criminal underworld.",
            "Accumulate wealth and influence through illicit activities.",
            "Gather secrets on all major political figures."
        ],
        ranks: [
            { title: "Shadow Broker", description: "The unseen master(s) of the Syndicate." },
            { title: "Whisper Lord", description: "Manages a network of spies and informants in a city." },
            { title: "Silent Hand", description: "Elite assassins and infiltrators." },
            { title: "Shade", description: "Standard operatives for smuggling and intelligence." },
            { title: "Echo", description: "Initiates and informants on the lowest rung." }
        ],
        rules: [
            "Anonymity is your life. Never reveal your true face.",
            "The contract is absolute. No questions, no morality.",
            "Betrayal is paid in blood. There are no second chances.",
            "Never cross The Broker. Ever."
        ],
        recruitment: "One does not 'join' the Shadow Syndicate. Those with a particular talent for stealth, information gathering, or murder may find a coded invitation left for them. To accept is to disappear from your old life forever. To refuse is often a death sentence.",
        sub_guilds: [
            {
                name: "The Cleaners",
                leader: "Mother Mop",
                description: "A sub-guild specializing in disposing of evidence, bodies, and other inconvenient messes. Their discretion is legendary."
            }
        ]
    },
    'aegis_magi': {
        name: "The Aegis Magi",
        description: "The official military arm of the Mages' Guild. They are battle-mages who serve as enforcers of the Guild's laws, protectors of its assets, and a standing army against external threats. They value discipline and the practical application of destructive and defensive magic.",
        leader: "Battle-Mage Kovar",
        sponsoring_faction: "mages_guild",
        headquarters: "The Argent Tower, Silverhaven",
        goals: [
            "Defend the Mages' Guild from all external threats.",
            "Enforce the edicts of the Archmage Sovereign.",
            "Neutralize rogue mages and contain magical anomalies."
        ],
        ranks: [
            { title: "Grand Magus", description: "The supreme commander of the Aegis, second only to the Archmage." },
            { title: "Battle-Mage", description: "Veteran officers who lead companies in the field." },
            { title: "Adept", description: "Fully-fledged battle-mages skilled in combat magic." },
            { title: "Initiate", description: "Apprentices who have chosen the martial path." }
        ],
        rules: [
            "The Guild is paramount. Defend it with your life.",
            "Control your power. An errant spell is a betrayal.",
            "Knowledge is a weapon. Wield it with precision.",
            "A rogue mage is a threat to all. Show no mercy."
        ],
        recruitment: "Mages' Guild apprentices who show an aptitude for combat magic and a disciplined temperament may be invited to join the Aegis. They undergo rigorous physical and magical training, learning to cast spells in the heat of battle without incinerating their allies.",
        sub_guilds: []
    },
    'spore_seekers': {
        name: "The Spore-Seekers",
        description: "A fanatical sect within the Toad Cult dedicated to archaeology and relic-hunting. They believe that by unearthing the lost artifacts of 'The Ascended One', they can hasten their god's return and trigger the Great Fungal Rebirth.",
        leader: "High Spore Speaker",
        sponsoring_faction: "toad_cult",
        headquarters: "Nomadic; follows ley lines and ancient sites.",
        goals: [
            "Locate and secure all known relics of The Ascended One.",
            "Decipher ancient prophecies related to the Great Fungal Rebirth.",
            "Prevent rival factions from interfering with their holy mission."
        ],
        ranks: [
            { title: "High Spore Speaker", description: "The prophet who guides the Seekers with visions." },
            { title: "Relic Keeper", description: "Entrusted with the protection of recovered artifacts." },
            { title: "Spore-Seeker", description: "Field agents who explore ruins and excavate sites." },
            { title: "Convert", description: "New followers tasked with research and support." }
        ],
        rules: [
            "The relics are sacred. To damage one is heresy.",
            "The Prophecy guides our path. Trust in the vision.",
            "The unenlightened are obstacles. Convert them or cast them aside.",
            "All that is will one day be fungus. Embrace the change."
        ],
        recruitment: "Converts to the Toad Cult who show a particular zeal for history and a disregard for personal safety are inducted into the Spore-Seekers. They are taught to decipher ancient texts and navigate trap-filled ruins, all in the name of their fungal deity.",
        sub_guilds: []
    },
    'visionary_vanguard': {
        name: "The Visionary Vanguard",
        description: "An independent guild of powerful 'Vision Bearers' from Teyvat who are not loyal to any single Archon. They dedicate themselves to maintaining the balance of the elements and protecting mortals from the collateral damage of the gods' eternal war.",
        leader: "The Elemental Concord (a council)",
        sponsoring_faction: null,
        headquarters: "The Nexus Point, Teyvat",
        goals: [
            "Maintain the balance between the seven elemental powers.",
            "Protect mortals from the fallout of the Archon War.",
            "Study the nature of Visions and their connection to Celestia."
        ],
        ranks: [
            { title: "Concordant", description: "One of the seven leaders on the ruling council." },
            { title: "Master of Elements", description: "A veteran who has mastered their elemental abilities." },
            { title: "Visionary Adept", description: "A full member of the Vanguard." },
            { title: "Initiate", description: "A new Vision Bearer undergoing trials and training." }
        ],
        rules: [
            "Serve the Balance, not the Archons.",
            "Power must be tempered with wisdom and compassion.",
            "Share knowledge of the elements for the good of all.",
            "Protect the innocent from the wars of the divine."
        ],
        recruitment: "Membership is open only to those who have been granted a Vision. Prospective members must undertake a pilgrimage to the Nexus Point and pass a series of trials to prove they can control their element without letting it control them.",
        sub_guilds: []
    },
    'mithril_guard': {
        name: "The Mithril Guard",
        description: "An elite guild of Dwarven warriors and crafters from the great holds of Middle Earth. They serve as the personal bodyguards of King Thorin and are responsible for forging the legendary arms and armor of the Dwarven armies.",
        leader: "Forge-Thane Dwalin",
        sponsoring_faction: null,
        headquarters: "The Great Forge, Iron Hills",
        goals: [
            "Protect the life of King Thorin and the royal line.",
            "Forge weapons and armor of unparalleled quality.",
            "Reclaim lost Dwarven holds from Orcs and Goblins."
        ],
        ranks: [
            { title: "Forge-Thane", description: "The master of the guild, a legendary smith and warrior." },
            { title: "Anvil Master", description: "A master smith responsible for outfitting a company." },
            { title: "Stone Guard", description: "Veteran warriors who form the King's personal guard." },
            { title: "Iron Beard", description: "A full member of the guild." }
        ],
        rules: [
            "Loyalty is forged in fire and tempered in battle.",
            "A flaw in the steel is a flaw in the spirit. Strive for perfection.",
            "An oath given is an oath kept, until death and beyond.",
            "Never yield a single inch of Dwarven stone."
        ],
        recruitment: "Only the most skilled Dwarven smiths and warriors are invited to join. One must be sponsored by a current member and present a masterwork of their own creation—be it a finely crafted axe or a legendary feat of arms—to be considered.",
        sub_guilds: []
    },
    'freedom_trotters': {
        name: "The Freedom Trotters",
        description: "A secret network dedicated to liberating the enslaved and marginalized races from Queen Celestia's tyrannical regime in Equestria. They operate a clandestine 'underground railroad' of safehouses and hidden routes to help escapees find freedom.",
        leader: "'Pathfinder' (Anonymous Title)",
        sponsoring_faction: "the_unchained",
        headquarters: "The Hidden Trail (A network of secret locations)",
        goals: [
            "Guide escapees from Equestria to sanctuary in free lands.",
            "Spread messages of hope and rebellion to the oppressed.",
            "Sabotage the regime's operations and undermine Celestia's authority."
        ],
        ranks: [
            { title: "Pathfinder", description: "The anonymous leader(s) who coordinate the entire network." },
            { title: "Station Master", description: "An individual who runs a safehouse on the Trail." },
            { title: "Conductor", description: "A brave guide who leads escapees between stations." },
            { title: "Spark", description: "A new recruit or agent, often working as an informant." }
        ],
        rules: [
            "Never betray the Trail or those who walk it.",
            "The mission—a life saved—comes before all else.",
            "No one is left behind.",
            "Trust in the Spark of Rebellion."
        ],
        recruitment: "Members are recruited secretly and carefully from the ranks of the oppressed or from sympathetic outsiders who have proven their dedication to the cause of freedom. The process is perilous, as discovery means certain death or enslavement.",
        sub_guilds: []
    },
    'unseen_cipher': {
        name: "Guild of the Unseen Cipher",
        description: "A collective of rebel hackers and techno-anarchists from Aurea. They operate from the digital shadows, fighting a guerilla war of information against the Technocratic Oligarchy's oppressive control and censorship.",
        leader: "Alias: 'Null'",
        sponsoring_faction: null,
        headquarters: "The Glitchstream (Decentralized Digital Network)",
        goals: [
            "Expose the corruption of the Technocratic Elite.",
            "Liberate censored information and forbidden technologies.",
            "Develop and distribute untraceable communication methods for all."
        ],
        ranks: [
            { title: "Ghost", description: "The legendary, anonymous leaders of the guild." },
            { title: "Cipher", description: "Master hackers who lead major digital operations." },
            { title: "Glitch", description: "Experienced agents capable of solo infiltration." },
            { title: "Echo", description: "New recruits learning the arts of code-breaking and data-theft." }
        ],
        rules: [
            "Your identity is a ghost. Protect it above all.",
            "Information wants to be free. Unleash it.",
            "Never betray a fellow ghost's location or identity.",
            "Break the code, break the chains."
        ],
        recruitment: "Prospective members must solve a series of increasingly complex cryptographic puzzles hidden in Aurea's public data network. Those who succeed receive a cryptic invitation to join the guild. To accept is to erase one's official identity and be reborn in the Glitchstream.",
        sub_guilds: []
    }
};

export const CHARTER_DATA = {
    'gilded_gryphon': {
        name: "The Gilded Gryphon Mercenary Company",
        description: "A highly disciplined and expensive mercenary company formed from the remnants of a disgraced Iron Legion cohort. They operate under a strict charter and value contracts and coin above all else. They are known for their professionalism and their heavy infantry.",
        leader: "Commander Valerius 'The Gilded'",
        sponsoring_faction: "iron_legion",
        headquarters: "The Gryphon's Roost, Midlands Border",
        goals: [
            "Secure high-value contracts from major powers.",
            "Rebuild the company's reputation and treasury.",
            "Recruit skilled warriors from any background."
        ],
        ranks: [
            { title: "Commander", description: "The supreme leader of the company." },
            { title: "Captain", description: "Leads a full wing of soldiers (approx. 100)." },
            { title: "Gryphon Knight", description: "Veteran officers, proven in battle." },
            { title: "Mercenary", description: "Rank-and-file soldiers under contract." },
            { title: "Initiate", description: "New recruits undergoing the Forge Trials." }
        ],
        rules: [
            "A contract is bond. Fulfill it to the letter.",
            "Payment is paramount. Secure it before the blood is dry.",
            "Discipline is our shield. Maintain it or be broken.",
            "Leave politics to the politicians. We serve the coin, not the crown."
        ],
        recruitment: "Recruitment is open to any skilled warrior, regardless of origin. Prospective members must survive the grueling 'Forge Trials'—a series of combat and survival tests—and then swear an unbreakable oath to the company's charter.",
        sub_guilds: [
            {
                name: "The Siegebreakers",
                leader: "Engineer Tiber",
                description: "A specialized unit focused on siege warfare and artillery. They are often hired out separately for fortress assaults."
            }
        ]
    },
    'goodstyle_collective': {
        name: "The Goodstyle Collective",
        description: "An expansion of the Goodstyle Artisans faction into a formal guild. They are a collective of the world's finest craftsmen, dedicated to creating and preserving beauty. They often find themselves in conflict with treasure hunters and plunderers who see art as mere coin.",
        leader: "Master Goodstyle",
        sponsoring_faction: "goodstyle_artisans",
        headquarters: "The Grand Atrium, Diamond City",
        goals: [
            "Preserve historical artifacts from destruction.",
            "Create new masterpieces that inspire future generations.",
            "Counter the influence of materialistic factions like Wario Land."
        ],
        ranks: [
            { title: "Master Artisan", description: "Creators of legendary works, leaders of the Collective." },
            { title: "Virtuoso", description: "Highly skilled artisans recognized for their unique style." },
            { title: "Craftsman", description: "Certified members of the Collective." },
            { title: "Apprentice", description: "Students learning under a Master." }
        ],
        rules: [
            "Beauty is currency. Protect it from the crude.",
            "Form is function. Strive for perfection in both.",
            "Share your craft. Knowledge elevates all.",
            "Never create for a tyrant or a destroyer."
        ],
        recruitment: "To join, an artisan must submit a 'Masterwork' to be judged by the Collective's council. If the work displays exceptional skill and artistic vision, the creator is invited to join as a Craftsman. Apprenticeships are rare and highly sought after.",
        sub_guilds: []
    },
    'da_krumperz': {
        name: "Da Krumperz Mercenary Warband",
        description: "The biggest, meanest, and most 'cunnin' Orc warband from the Known World, led by the infamous Warboss Skarjaw. They hire themselves out to the highest bidder, seeking not just coin, but a proper good fight and shiny loot to add to their scrap-heap fortresses.",
        leader: "Warboss Skarjaw",
        sponsoring_faction: null,
        headquarters: "Da Scrap-Heap, Known World Borderlands",
        goals: [
            "Find the biggest fight and win it.",
            "Get paid in lots of shiny 'teef' (coin) and scrap.",
            "Make their WAAAGH! the loudest in the world."
        ],
        ranks: [
            { title: "Warboss", description: "The biggest and strongest, who leads the warband." },
            { title: "Big Nob", description: "The Warboss's toughest lieutenants." },
            { title: "Mekboy", description: "Orc mechanics who build dangerous, ramshackle war machines." },
            { title: "Boy", description: "The rank-and-file Orc warriors." }
        ],
        rules: [
            "The Boss is always right, 'coz he's the biggest.",
            "A proper fight is better than all the teef.",
            "If it's shiny, it's ours.",
            "Bigger explosions are always better."
        ],
        recruitment: "If you're an Orc (or a very tough goblin) and you can beat one of Da Krumperz in a fight without dying, you're in. Alternatively, bringing the Warboss a particularly shiny piece of scrap or a promise of a really, really big battle might get you a spot on the team.",
        sub_guilds: []
    }
};
