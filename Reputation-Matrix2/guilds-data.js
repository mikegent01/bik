// guilds-data.js
// Comprehensive Guilds & Charters Data System

export const GUILD_CATEGORIES = {
    trade: { name: 'Trade Guilds', icon: '💰', color: '#ffd700', description: 'Commerce and crafting organizations' },
    martial: { name: 'Martial Orders', icon: '⚔️', color: '#dc3545', description: 'Military and combat organizations' },
    arcane: { name: 'Arcane Circles', icon: '🔮', color: '#8a2be2', description: 'Magic and scholarly organizations' },
    faith: { name: 'Religious Orders', icon: '✨', color: '#ffffff', description: 'Divine and spiritual organizations' },
    shadow: { name: 'Shadow Networks', icon: '🗡️', color: '#2d2d2d', description: 'Covert and underground organizations' },
    political: { name: 'Political Factions', icon: '🏛️', color: '#4a90d9', description: 'Governance and diplomatic organizations' },
    artisan: { name: 'Artisan Collectives', icon: '🔨', color: '#cd7f32', description: 'Craft and creation focused organizations' }
};

export const REPUTATION_TIERS = {
    exalted: { name: 'Exalted', min: 10000, color: '#ffd700', icon: '👑', perks: ['Maximum discounts', 'Leadership roles', 'Secret knowledge'] },
    revered: { name: 'Revered', min: 6000, color: '#ff8c00', icon: '⭐', perks: ['Major discounts', 'Special contracts', 'Inner circle access'] },
    honored: { name: 'Honored', min: 3000, color: '#9370db', icon: '🏅', perks: ['Good discounts', 'Priority contracts', 'Member facilities'] },
    friendly: { name: 'Friendly', min: 1000, color: '#3fb950', icon: '🤝', perks: ['Small discounts', 'Basic contracts', 'Guild hall access'] },
    neutral: { name: 'Neutral', min: 0, color: '#888888', icon: '➖', perks: ['Standard prices', 'Public contracts only'] },
    unfriendly: { name: 'Unfriendly', min: -1000, color: '#ffa500', icon: '😠', perks: ['Price markup', 'Limited services'] },
    hostile: { name: 'Hostile', min: -3000, color: '#dc3545', icon: '⚠️', perks: ['Denied entry', 'Active opposition'] },
    hated: { name: 'Hated', min: -6000, color: '#8b0000', icon: '💀', perks: ['Kill on sight', 'Bounty placed'] }
};

export const GUILD_DATA = {
    stonecarvers_brethren: {
        id: 'stonecarvers_brethren',
        name: "The Stonecarver's Brethren",
        shortName: "Stonecarvers",
        motto: "From Stone, Eternity",
        category: 'artisan',
        icon: '⚒️',
        banner: 'guild_banners/stonecarvers.png',
        founded: '847 BF',
        headquarters: 'The Granite Hall, Midlands Capital',
        
        description: "An ancient and prestigious guild of master stonemasons, sculptors, and architects. The Brethren have built the greatest monuments and fortifications across the realm for centuries.",
        
        lore: `The Stonecarver's Brethren traces its origins to the reconstruction era following the Tyrant Wars. When the great cities lay in ruins, it was the first Grandmaster, Theron Ironchisel, who united the scattered masons under a single banner.

Their works include the Iron Citadel, the Cathedral of the Eternal Flame, and countless lesser structures. The guild jealously guards ancient techniques passed down through generations, including methods of working enchanted stone that modern artificers cannot replicate.

In recent years, the Brethren have faced challenges from cheaper labor and magical construction methods, but their reputation for quality remains unmatched.`,

        leader: {
            name: "Grandmaster Aldric Stoneheart",
            title: "Grandmaster",
            portrait: "portraits/aldric_stoneheart.png",
            description: "A stern dwarf of 340 years who has led the guild for three decades. Known for his uncompromising standards."
        },
        
        officers: [
            { name: "Warden Helga Ironvein", role: "Warden of Standards", description: "Oversees quality control and apprentice training" },
            { name: "Quartermaster Boris Granitefist", role: "Quartermaster", description: "Manages guild resources and contracts" },
            { name: "Lorekeeper Maeve Chiselwright", role: "Keeper of Techniques", description: "Guards the guild's ancient secrets" }
        ],

        ranks: [
            { 
                tier: 1, 
                title: "Apprentice", 
                description: "Learning the fundamentals of stonework",
                requirements: "Sponsored by a Journeyman, pass basic assessment",
                benefits: ["Access to training halls", "Basic tool allowance", "Dormitory housing"],
                repRequired: 0
            },
            { 
                tier: 2, 
                title: "Journeyman", 
                description: "Competent craftsman, may take independent contracts",
                requirements: "5 years apprenticeship, masterwork submission",
                benefits: ["Independent contracts", "Vote in guild matters", "Workshop access"],
                repRequired: 1000
            },
            { 
                tier: 3, 
                title: "Stonecarver", 
                description: "Full guild member with all privileges",
                requirements: "Notable project completion, peer endorsement",
                benefits: ["Major contracts", "Apprentice sponsorship", "Profit sharing"],
                repRequired: 3000
            },
            { 
                tier: 4, 
                title: "Master Carver", 
                description: "Elite artisan, shapes guild policy",
                requirements: "Landmark achievement, council approval",
                benefits: ["Council seat", "Secret techniques", "Premium contracts"],
                repRequired: 6000
            },
            { 
                tier: 5, 
                title: "Grandmaster", 
                description: "Supreme leader of the guild",
                requirements: "Election by Master Carvers upon vacancy",
                benefits: ["Full authority", "Guild treasury access", "Legendary status"],
                repRequired: 10000
            }
        ],

        rules: [
            "Never reveal guild techniques to outsiders",
            "Complete all contracted work to the highest standard",
            "Assist fellow Brethren in times of need",
            "Pay guild dues promptly and honestly",
            "Respect the hierarchy and decisions of superiors",
            "Never undercut a fellow member's contract"
        ],

        resources: {
            treasury: 75000,
            influence: 68,
            manpower: 450,
            materials: {
                stone: 85,
                metal: 40,
                gems: 25
            }
        },

        facilities: [
            { name: "The Granite Hall", type: "Headquarters", description: "Main guild hall with meeting chambers and archives", access: "Apprentice+" },
            { name: "Training Quarries", type: "Training", description: "Practice areas for apprentices", access: "Apprentice+" },
            { name: "Master's Workshop", type: "Crafting", description: "Premium workspace with enchanted tools", access: "Stonecarver+" },
            { name: "The Vault of Forms", type: "Archive", description: "Repository of ancient blueprints and techniques", access: "Master Carver+" }
        ],

        services: [
            { name: "Stonework Commission", description: "Custom masonry and sculpture", priceRange: "50-10,000 gold", discount: { friendly: 10, honored: 20, revered: 30, exalted: 40 } },
            { name: "Fortification Consultation", description: "Expert advice on defensive structures", priceRange: "100-500 gold", discount: { friendly: 5, honored: 15, revered: 25, exalted: 35 } },
            { name: "Apprentice Training", description: "Basic stonework instruction", priceRange: "200 gold/month", discount: { friendly: 0, honored: 10, revered: 20, exalted: 50 } },
            { name: "Material Procurement", description: "Access to quality stone sources", priceRange: "Market rate", discount: { friendly: 5, honored: 10, revered: 15, exalted: 25 } }
        ],

        research_bonus: { 
            category: 'Construction', 
            amount: 0.15,
            description: "+15% to Construction research when allied"
        },

        relations: {
            merchants_consortium: { standing: 'friendly', reason: 'Regular business partners' },
            iron_legion: { standing: 'neutral', reason: 'Occasional military contracts' },
            mages_guild: { standing: 'unfriendly', reason: 'Competition from magical construction' },
            miners_collective: { standing: 'allied', reason: 'Essential material suppliers' }
        },

        contracts: [
            {
                id: 'sc_001',
                title: "Repair the Eastgate Bridge",
                type: 'construction',
                difficulty: 'medium',
                reward: { gold: 500, reputation: 150 },
                deadline: 14,
                description: "The eastern bridge has developed cracks. Requires skilled repair work.",
                requirements: ["Journeyman rank", "Construction skill 3+"],
                status: 'available'
            },
            {
                id: 'sc_002',
                title: "Memorial Statue Commission",
                type: 'crafting',
                difficulty: 'hard',
                reward: { gold: 1200, reputation: 300, item: 'Master Chisel' },
                deadline: 30,
                description: "Create a memorial statue for the fallen of the recent conflicts.",
                requirements: ["Stonecarver rank", "Sculpture skill 4+"],
                status: 'available'
            },
            {
                id: 'sc_003',
                title: "Emergency Fortification",
                type: 'urgent',
                difficulty: 'hard',
                reward: { gold: 2000, reputation: 500 },
                deadline: 7,
                description: "Iron Legion requires immediate defensive works. Time-critical.",
                requirements: ["Any rank", "Available immediately"],
                status: 'urgent'
            }
        ],

        events: [
            { date: "Day 25", title: "Annual Masonry Competition", description: "Apprentices compete for advancement" },
            { date: "Day 30", title: "Quarterly Council Meeting", description: "Guild policy discussions" }
        ],

        history: [
            { year: '847 BF', event: 'Guild founded by Theron Ironchisel' },
            { year: '892 BF', event: 'Completed the Iron Citadel' },
            { year: '956 BF', event: 'Great Schism - Sculptors briefly split off' },
            { year: '1020 BF', event: 'Current Grandmaster elected' }
        ],

        rumors: [
            "They say the Brethren know how to build structures that can withstand any magic...",
            "The Vault of Forms supposedly contains blueprints for weapons of immense power.",
            "Grandmaster Stoneheart is seeking to recover techniques lost in the Tyrant Wars."
        ],

        membershipRequirements: {
            species: ['dwarf', 'human', 'golem'],
            skills: ['stonework', 'architecture'],
            sponsorship: true,
            fee: 100
        },

        isPlayerMember: 'humpik',
        playerRank: 'Stonecarver',
        playerReputation: 3500
    },

    merchants_consortium: {
        id: 'merchants_consortium',
        name: "The Merchants' Consortium",
        shortName: "Consortium",
        motto: "Profit Through Unity",
        category: 'trade',
        icon: '💰',
        banner: 'guild_banners/consortium.png',
        founded: '723 BF',
        headquarters: 'The Golden Exchange, Toad Town',
        
        description: "The largest and most influential trade organization in the realm. The Consortium controls major trade routes, sets market standards, and provides banking services.",
        
        lore: `Born from the chaos of the post-war economy, the Merchants' Consortium was founded by seven wealthy traders who recognized that cooperation would benefit all. Their "Pact of Seven Coins" established the framework that still governs inter-regional commerce today.

The Consortium's influence extends into every marketplace. They maintain the only reliable banking network, insure cargo shipments, and arbitrate trade disputes. Critics accuse them of monopolistic practices, but few can deny the stability they bring to commerce.

Recent events have strained the Consortium's resources. The conflict in the Mushroom Kingdom has disrupted trade routes, and the Iron Legion's expansion threatens their autonomy.`,

        leader: {
            name: "Guildmaster Theodora Goldweaver",
            title: "Guildmaster",
            portrait: "portraits/theodora.png",
            description: "A shrewd Toad businesswoman who rose from humble origins to control the realm's largest trading network."
        },

        officers: [
            { name: "Chancellor Marcus Coinsworth", role: "Master of Coin", description: "Oversees the banking division" },
            { name: "Admiral Petra Stormwind", role: "Fleet Admiral", description: "Commands the merchant marine" },
            { name: "Arbiter Lysander", role: "Chief Arbiter", description: "Handles trade disputes and contracts" }
        ],

        ranks: [
            { tier: 1, title: "Associate", description: "Licensed to trade under Consortium banner", requirements: "Pay membership fee", benefits: ["Trade license", "Basic insurance"], repRequired: 0 },
            { tier: 2, title: "Merchant", description: "Full trading privileges", requirements: "1000 gold in trade volume", benefits: ["Banking access", "Route protection"], repRequired: 1000 },
            { tier: 3, title: "Factor", description: "May operate trading posts", requirements: "Establish profitable route", benefits: ["Trading post rights", "Bulk discounts"], repRequired: 3000 },
            { tier: 4, title: "Magnate", description: "Voting member of the Council", requirements: "Major economic contribution", benefits: ["Council vote", "Exclusive contracts"], repRequired: 6000 },
            { tier: 5, title: "Guildmaster", description: "Leader of the Consortium", requirements: "Election by Magnates", benefits: ["Full authority", "Treasury access"], repRequired: 10000 }
        ],

        rules: [
            "Honor all contracts sealed with the Consortium mark",
            "Pay tariffs and dues promptly",
            "Report any trade route disruptions immediately",
            "Never engage in smuggling of prohibited goods",
            "Maintain fair prices within established ranges",
            "Protect Consortium trade secrets"
        ],

        resources: {
            treasury: 500000,
            influence: 85,
            manpower: 2000,
            materials: {
                gold: 95,
                goods: 90,
                ships: 60
            }
        },

        facilities: [
            { name: "The Golden Exchange", type: "Headquarters", description: "Main trading floor and administrative center", access: "Associate+" },
            { name: "Consortium Bank", type: "Banking", description: "Secure vaults and lending services", access: "Merchant+" },
            { name: "Trade Academy", type: "Training", description: "Business and negotiation training", access: "Associate+" },
            { name: "Magnate Lounge", type: "Exclusive", description: "Private meeting space for elite members", access: "Magnate+" }
        ],

        services: [
            { name: "Banking Services", description: "Deposits, loans, and money transfers", priceRange: "2-10% fees", discount: { friendly: 5, honored: 15, revered: 25, exalted: 40 } },
            { name: "Cargo Insurance", description: "Protection against loss", priceRange: "5-15% of cargo value", discount: { friendly: 10, honored: 20, revered: 30, exalted: 50 } },
            { name: "Trade Route Access", description: "Use of protected trade routes", priceRange: "100-1000 gold/trip", discount: { friendly: 5, honored: 15, revered: 25, exalted: 35 } },
            { name: "Market Intelligence", description: "Price and demand information", priceRange: "50-500 gold", discount: { friendly: 10, honored: 25, revered: 40, exalted: 60 } }
        ],

        research_bonus: { 
            category: 'Economics', 
            amount: 0.20,
            description: "+20% to Economics research when allied"
        },

        relations: {
            stonecarvers_brethren: { standing: 'friendly', reason: 'Regular business partners' },
            iron_legion: { standing: 'tense', reason: 'Taxation disputes' },
            tea_leaf_syndicate: { standing: 'hostile', reason: 'Smuggling competition' },
            mages_guild: { standing: 'friendly', reason: 'Magical goods trade' }
        },

        contracts: [
            {
                id: 'mc_001',
                title: "Escort Valuable Shipment",
                type: 'escort',
                difficulty: 'medium',
                reward: { gold: 300, reputation: 100 },
                deadline: 7,
                description: "Guard a cargo of magical components traveling to the capital.",
                requirements: ["Combat capable", "Trustworthy reputation"],
                status: 'available'
            },
            {
                id: 'mc_002',
                title: "Investigate Market Manipulation",
                type: 'investigation',
                difficulty: 'hard',
                reward: { gold: 800, reputation: 250 },
                deadline: 21,
                description: "Someone is artificially inflating grain prices. Find out who.",
                requirements: ["Investigation skill", "Market knowledge"],
                status: 'available'
            }
        ],

        events: [
            { date: "Day 28", title: "Quarterly Auction", description: "Rare goods and contracts available" },
            { date: "Day 35", title: "Trade Summit", description: "Inter-guild negotiations" }
        ],

        history: [
            { year: '723 BF', event: 'Pact of Seven Coins signed' },
            { year: '801 BF', event: 'Established banking monopoly' },
            { year: '945 BF', event: 'Survived the Great Depression' },
            { year: '1038 BF', event: 'Current Guildmaster elected' }
        ],

        rumors: [
            "The Consortium's vaults hold enough gold to buy a kingdom...",
            "Guildmaster Goldweaver has secret dealings with the Tea Leaf Syndicate.",
            "They're planning to establish their own private army."
        ],

        membershipRequirements: {
            species: null,
            skills: ['commerce', 'negotiation'],
            sponsorship: false,
            fee: 500
        },

        isPlayerMember: null,
        playerRank: null,
        playerReputation: 250
    },

    shadow_weavers: {
        id: 'shadow_weavers',
        name: "The Shadow Weavers",
        shortName: "Weavers",
        motto: "Unseen, Unheard, Undone",
        category: 'shadow',
        icon: '🕷️',
        banner: 'guild_banners/weavers.png',
        founded: '??? BF',
        headquarters: 'Unknown (rumored: The Whisper Market)',
        
        description: "A secretive organization of spies, assassins, and information brokers. Their existence is officially denied by all governments, yet their influence is felt everywhere.",
        
        lore: `No one knows when the Shadow Weavers truly began. Some claim they predate the kingdoms themselves, others that they emerged from the chaos of the Tyrant Wars. What is known is that they deal in the currency of secrets, and their price is always paid.

The Weavers operate through a cell structure—no member knows more than a handful of others. Contracts are accepted through dead drops and coded messages. Payment is made in ways that leave no trace.

To attract their attention, one must know the signs. A particular arrangement of coins on a tavern table. A phrase spoken to the right beggar. Those who seek the Weavers without proper introduction often simply... disappear.`,

        leader: {
            name: "The Weavemaster",
            title: "Weavemaster",
            portrait: "portraits/shadow_silhouette.png",
            description: "Identity unknown. May be one person or several. Some doubt they exist at all."
        },

        officers: [
            { name: "The Whisper", role: "Information Network", description: "Coordinates intelligence gathering" },
            { name: "The Blade", role: "Wet Work Division", description: "Handles... permanent solutions" },
            { name: "The Face", role: "Infiltration", description: "Masters of disguise and social engineering" }
        ],

        ranks: [
            { tier: 1, title: "Thread", description: "Lowest rank, used for simple tasks", requirements: "Recruited by existing member", benefits: ["Basic jobs", "Protection from exposure"], repRequired: 0 },
            { tier: 2, title: "Strand", description: "Proven operative", requirements: "Successful operations", benefits: ["Better contracts", "Safe houses"], repRequired: 1000 },
            { tier: 3, title: "Pattern", description: "Cell leader", requirements: "Demonstrated leadership", benefits: ["Own cell", "Major operations"], repRequired: 3000 },
            { tier: 4, title: "Weaver", description: "Senior operative", requirements: "Exceptional service", benefits: ["Strategic planning", "Elite resources"], repRequired: 6000 },
            { tier: 5, title: "Weavemaster", description: "The shadow that guides all others", requirements: "Unknown", benefits: ["Ultimate authority"], repRequired: 10000 }
        ],

        rules: [
            "Never reveal the organization's existence",
            "Complete all contracts or die trying",
            "Leave no witnesses, no evidence",
            "Never betray a fellow Weaver",
            "The Weavemaster's word is absolute",
            "Death before dishonor to the web"
        ],

        resources: {
            treasury: 'Unknown',
            influence: 95,
            manpower: 'Unknown',
            materials: {
                intelligence: 99,
                poison: 85,
                safehouses: 70
            }
        },

        facilities: [
            { name: "The Whisper Market", type: "Headquarters", description: "Hidden bazaar of secrets", access: "Thread+" },
            { name: "Dead Drops", type: "Communication", description: "Secure message points across the realm", access: "Thread+" },
            { name: "Safe Houses", type: "Refuge", description: "Hidden locations for operatives", access: "Strand+" },
            { name: "The Black Archive", type: "Intelligence", description: "Repository of all gathered secrets", access: "Weaver+" }
        ],

        services: [
            { name: "Information Gathering", description: "Learn secrets about anyone", priceRange: "100-10,000 gold", discount: { friendly: 10, honored: 20, revered: 35, exalted: 50 } },
            { name: "Surveillance", description: "Track a target's movements", priceRange: "200-2,000 gold", discount: { friendly: 5, honored: 15, revered: 25, exalted: 40 } },
            { name: "Elimination", description: "Permanent problem solving", priceRange: "1,000-100,000 gold", discount: { friendly: 0, honored: 10, revered: 20, exalted: 30 } },
            { name: "Protection", description: "Counter-intelligence services", priceRange: "500-5,000 gold", discount: { friendly: 10, honored: 20, revered: 30, exalted: 45 } }
        ],

        research_bonus: { 
            category: 'Espionage', 
            amount: 0.25,
            description: "+25% to Espionage research when allied"
        },

        relations: {
            iron_legion: { standing: 'hostile', reason: 'Natural enemies' },
            merchants_consortium: { standing: 'business', reason: 'Mutual utility' },
            tea_leaf_syndicate: { standing: 'rivalry', reason: 'Competing in similar markets' },
            onyx_hand: { standing: 'neutral', reason: 'Professional respect' }
        },

        contracts: [
            {
                id: 'sw_001',
                title: "Eyes and Ears",
                type: 'espionage',
                difficulty: 'easy',
                reward: { gold: 200, reputation: 75 },
                deadline: 14,
                description: "Observe and report on a noble's activities. No contact required.",
                requirements: ["Stealth skill", "Patience"],
                status: 'available'
            },
            {
                id: 'sw_002',
                title: "The Silent Treatment",
                type: 'assassination',
                difficulty: 'extreme',
                reward: { gold: 5000, reputation: 800 },
                deadline: 30,
                description: "[CLASSIFIED] - Details provided upon acceptance.",
                requirements: ["Pattern rank", "Proven discretion"],
                status: 'restricted'
            }
        ],

        events: [
            { date: "Unknown", title: "The Gathering", description: "Rare meeting of senior Weavers" }
        ],

        history: [
            { year: '??? BF', event: 'Origins lost to time' },
            { year: '~800 BF', event: 'First documented activity' },
            { year: '1015 BF', event: 'The Night of Falling Stars (mass assassination)' },
            { year: '1040 BF', event: 'Current activities classified' }
        ],

        rumors: [
            "They say the Weavers have agents in every court...",
            "The Weavemaster is actually a council of seven.",
            "They've been hired to eliminate someone in the party..."
        ],

        membershipRequirements: {
            species: null,
            skills: ['stealth', 'deception'],
            sponsorship: true,
            fee: 'Your first secret'
        },

        isPlayerMember: 'archie',
        playerRank: 'Thread',
        playerReputation: 500
    },

    mages_guild: {
        id: 'mages_guild',
        name: "The Mages' Guild",
        shortName: "Mages Guild",
        motto: "Knowledge Is Power",
        category: 'arcane',
        icon: '🔮',
        banner: 'guild_banners/mages.png',
        founded: '412 BF',
        headquarters: 'The Astral Spire, Yale Shores',
        
        description: "The preeminent organization of magical practitioners. The Guild regulates magic use, trains new mages, and researches the arcane arts. Recently under political pressure from the Iron Legion.",
        
        lore: `The Mages' Guild was established in the aftermath of the Arcane Cataclysm, when unregulated magic nearly destroyed the realm. The founding Archmages created the Guild to ensure such devastation would never occur again.

For centuries, the Guild has maintained a careful balance—preserving magical knowledge while preventing its misuse. They license practitioners, investigate magical crimes, and serve as advisors to governments across the realm.

The recent Supernatural Sovereignty Act has placed the Guild in a precarious position. While officially exempt, many members fear they will be the next targets. Some advocate cooperation with the Iron Legion, while others counsel resistance.`,

        leader: {
            name: "Archmage Quintus Brightwater",
            title: "Archmage",
            portrait: "portraits/quintus.png",
            description: "A powerful human wizard known for his diplomatic skill and political acumen. Currently navigating the Guild through its greatest crisis."
        },

        officers: [
            { name: "Grand Enchanter Lyria Moonwhisper", role: "Dean of Enchantment", description: "Heads the Enchantment College" },
            { name: "High Conjurer Thaddeus Vex", role: "Dean of Conjuration", description: "Heads the Conjuration College" },
            { name: "Keeper Mordecai", role: "Master of the Library", description: "Guards the Forbidden Archives" }
        ],

        ranks: [
            { tier: 1, title: "Initiate", description: "Student of the arcane arts", requirements: "Pass magical aptitude test", benefits: ["Basic training", "Library access"], repRequired: 0 },
            { tier: 2, title: "Apprentice", description: "Assigned to a master for training", requirements: "Complete initiate studies", benefits: ["Master mentorship", "Practice labs"], repRequired: 1000 },
            { tier: 3, title: "Journeymage", description: "Licensed to practice magic independently", requirements: "Pass certification exams", benefits: ["Legal practice", "Guild contracts"], repRequired: 3000 },
            { tier: 4, title: "Magister", description: "Respected expert in magical field", requirements: "Significant magical achievement", benefits: ["Teaching rights", "Research grants"], repRequired: 6000 },
            { tier: 5, title: "Archmage", description: "Supreme magical authority", requirements: "Election by the Conclave", benefits: ["Full authority", "Artifact access"], repRequired: 10000 }
        ],

        rules: [
            "Never use magic for wanton destruction",
            "Report all magical anomalies to the Guild",
            "Maintain accurate records of all spell research",
            "Do not teach magic to unlicensed individuals",
            "Submit to Guild arbitration in magical disputes",
            "Protect non-magical persons from magical harm"
        ],

        resources: {
            treasury: 150000,
            influence: 72,
            manpower: 800,
            materials: {
                mana_crystals: 80,
                rare_reagents: 65,
                artifacts: 45
            }
        },

        facilities: [
            { name: "The Astral Spire", type: "Headquarters", description: "Main tower containing all colleges", access: "Initiate+" },
            { name: "The Great Library", type: "Archive", description: "Vast collection of magical texts", access: "Initiate+" },
            { name: "The Forbidden Archives", type: "Restricted", description: "Dangerous knowledge under seal", access: "Magister+" },
            { name: "The Crucible", type: "Laboratory", description: "Advanced magical experimentation", access: "Journeymage+" }
        ],

        services: [
            { name: "Spellcasting Services", description: "Hire a mage for magical needs", priceRange: "50-5,000 gold", discount: { friendly: 10, honored: 20, revered: 35, exalted: 50 } },
            { name: "Magical Training", description: "Learn spells and magical theory", priceRange: "200 gold/week", discount: { friendly: 5, honored: 15, revered: 30, exalted: 45 } },
            { name: "Enchantment Services", description: "Have items enchanted", priceRange: "100-10,000 gold", discount: { friendly: 10, honored: 25, revered: 40, exalted: 55 } },
            { name: "Magical Identification", description: "Identify unknown magical items", priceRange: "25-500 gold", discount: { friendly: 15, honored: 30, revered: 45, exalted: 60 } }
        ],

        research_bonus: { 
            category: 'Arcane', 
            amount: 0.30,
            description: "+30% to Arcane research when allied"
        },

        relations: {
            iron_legion: { standing: 'tense', reason: 'Supernatural Sovereignty Act' },
            stonecarvers_brethren: { standing: 'unfriendly', reason: 'Magical construction competition' },
            merchants_consortium: { standing: 'friendly', reason: 'Magical goods trade' },
            onyx_hand: { standing: 'complicated', reason: 'Mutual interest in the arcane' }
        },

        contracts: [
            {
                id: 'mg_001',
                title: "Investigate Magical Anomaly",
                type: 'investigation',
                difficulty: 'medium',
                reward: { gold: 400, reputation: 150 },
                deadline: 14,
                description: "Strange magical readings detected in the eastern forest. Investigate and report.",
                requirements: ["Basic magical knowledge", "Investigation skill"],
                status: 'available'
            },
            {
                id: 'mg_002',
                title: "Escort Researcher",
                type: 'escort',
                difficulty: 'hard',
                reward: { gold: 600, reputation: 200 },
                deadline: 21,
                description: "Protect a Guild researcher traveling to study ancient ruins.",
                requirements: ["Combat capability", "Discretion"],
                status: 'available'
            }
        ],

        events: [
            { date: "Day 28", title: "Mage Registry Amendment Vote", description: "Diet votes on Guild exemption" },
            { date: "Day 35", title: "Conclave Assembly", description: "Emergency meeting of all Magisters" }
        ],

        history: [
            { year: '412 BF', event: 'Guild founded after Arcane Cataclysm' },
            { year: '567 BF', event: 'Established the Licensing System' },
            { year: '890 BF', event: 'The Mage Wars - Guild nearly destroyed' },
            { year: '1040 BF', event: 'Supernatural Sovereignty Act crisis' }
        ],

        rumors: [
            "The Archmage is secretly negotiating with vampire emissaries...",
            "Some Magisters are planning to defect to the supernatural factions.",
            "The Forbidden Archives contain spells that could destroy armies."
        ],

        membershipRequirements: {
            species: null,
            skills: ['arcana', 'spellcasting'],
            sponsorship: false,
            fee: 'Magical aptitude test'
        },

        isPlayerMember: null,
        playerRank: null,
        playerReputation: -500
    },

    iron_crown_brigade: {
        id: 'iron_crown_brigade',
        name: "Iron Crown Brigade",
        shortName: "Iron Crown",
        motto: "Order Through Strength",
        category: 'martial',
        icon: '⚔️',
        banner: 'guild_banners/iron_crown.png',
        founded: '1038 BF',
        headquarters: 'Mobile Command (Currently: Mushroom Kingdom)',
        
        description: "The elite covert operations arm of the Iron Legion. Officially, they don't exist. In practice, they're the tip of the Empire's spear in foreign territories.",
        
        lore: `The Iron Crown Brigade was formed in secret as the Iron Legion's answer to unconventional threats. Where the main Legion operates openly, the Brigade works in shadows—infiltrating, destabilizing, and preparing the ground for eventual conquest.

Their operatives are drawn from the Legion's most capable soldiers, supplemented by recruited specialists. Training is brutal, with a 60% washout rate. Those who survive emerge as some of the most dangerous individuals in the realm.

Currently, the Brigade is focused on the Mushroom Kingdom, where they've successfully captured the airship Vigilance and are expanding their network of agents and sympathizers.`,

        leader: {
            name: "Viceroy Hammer Forgeheart",
            title: "Viceroy",
            portrait: "portraits/forgeheart.png",
            description: "A calculating strategist who views the Kingdom as a puzzle to be solved. Known for patience and ruthlessness in equal measure."
        },

        officers: [
            { name: "Tribune Aldric Stone", role: "Field Commander", description: "Leads direct action operations" },
            { name: "Operative Shade", role: "Intelligence Chief", description: "Manages spy networks" },
            { name: "Captain Creek", role: "Medical/Infiltration", description: "Surgeon and deep cover specialist" }
        ],

        ranks: [
            { tier: 1, title: "Recruit", description: "In training", requirements: "Legion service + selection", benefits: ["Training", "Basic gear"], repRequired: 0 },
            { tier: 2, title: "Operative", description: "Field agent", requirements: "Survive training", benefits: ["Field assignments", "Cover identity"], repRequired: 1000 },
            { tier: 3, title: "Senior Operative", description: "Experienced agent", requirements: "Successful missions", benefits: ["Team leadership", "Priority intel"], repRequired: 3000 },
            { tier: 4, title: "Tribune", description: "Operation commander", requirements: "Exceptional service", benefits: ["Operation planning", "Asset access"], repRequired: 6000 },
            { tier: 5, title: "Viceroy", description: "Theater commander", requirements: "Appointment by Grand Forgemaster", benefits: ["Full authority", "Direct line to command"], repRequired: 10000 }
        ],

        rules: [
            "The mission is paramount",
            "Leave no evidence of Legion involvement",
            "Expendable assets are to be expended",
            "Intelligence is to be shared up the chain only",
            "Capture is not an option—die first",
            "The Brigade does not exist"
        ],

        resources: {
            treasury: 'Classified',
            influence: 60,
            manpower: 2000,
            materials: {
                weapons: 90,
                intel: 85,
                safehouses: 75
            }
        },

        facilities: [
            { name: "Mobile Command", type: "Headquarters", description: "Relocatable command center", access: "Operative+" },
            { name: "The Vigilance", type: "Asset", description: "Captured airship serving as mobile base", access: "Senior Operative+" },
            { name: "Dead Drops", type: "Communication", description: "Secure message points", access: "Operative+" },
            { name: "Safe Houses", type: "Refuge", description: "Hidden locations throughout the Kingdom", access: "Operative+" }
        ],

        services: [
            { name: "Intelligence Sharing", description: "Access to Legion intelligence", priceRange: "Favor-based", discount: { friendly: 0, honored: 0, revered: 0, exalted: 0 } },
            { name: "Extraction", description: "Emergency evacuation services", priceRange: "Mission-based", discount: { friendly: 0, honored: 0, revered: 0, exalted: 0 } },
            { name: "Equipment", description: "Access to military-grade gear", priceRange: "Requisition", discount: { friendly: 0, honored: 0, revered: 0, exalted: 0 } }
        ],

        research_bonus: { 
            category: 'Military', 
            amount: 0.20,
            description: "+20% to Military research when allied"
        },

        relations: {
            iron_legion: { standing: 'allied', reason: 'Parent organization' },
            liberated_toads: { standing: 'hostile', reason: 'Primary opposition' },
            shadow_weavers: { standing: 'hostile', reason: 'Competing intelligence services' },
            mages_guild: { standing: 'hostile', reason: 'Supernatural Sovereignty Act' }
        },

        contracts: [
            {
                id: 'icb_001',
                title: "[CLASSIFIED]",
                type: 'classified',
                difficulty: 'extreme',
                reward: { gold: 'Varies', reputation: 'Varies' },
                deadline: 'Mission-dependent',
                description: "Details available to authorized personnel only.",
                requirements: ["Iron Legion affiliation"],
                status: 'restricted'
            }
        ],

        events: [
            { date: "Classified", title: "Operation Updates", description: "Need-to-know basis only" }
        ],

        history: [
            { year: '1038 BF', event: 'Brigade formally established' },
            { year: '1040 BF', event: 'Deployed to Mushroom Kingdom' },
            { year: '1040 BF', event: 'Captured the Vigilance' },
            { year: '1040 BF', event: 'Iron Mandate grants expanded authority' }
        ],

        rumors: [
            "They've infiltrated every major faction in the Kingdom...",
            "The Viceroy reports directly to the Grand Forgemaster.",
            "They're planning something big for the Starfall Festival."
        ],

        membershipRequirements: {
            species: null,
            skills: ['combat', 'stealth', 'loyalty'],
            sponsorship: 'Legion service required',
            fee: 'Blood oath'
        },

        isPlayerMember: null,
        playerRank: null,
        playerReputation: -3500
    }
};

export const CHARTER_DATA = {
    liberated_toads: {
        id: 'liberated_toads',
        name: "The Liberated Toads",
        shortName: "Liberated",
        motto: "Freedom Through Unity",
        category: 'political',
        icon: '🍄',
        banner: 'charter_banners/liberated.png',
        founded: '1040 BF',
        headquarters: 'Mobile (Last known: Shadeward Manor)',
        
        description: "A resistance movement formed by those who refuse to accept Iron Legion occupation. Part freedom fighters, part refugees, wholly determined to reclaim their homeland.",
        
        lore: `The Liberated Toads emerged from the chaos of the Legion's incursion into the Mushroom Kingdom. What began as scattered groups of refugees and deserters has coalesced into an organized resistance under the unlikely leadership of an adventuring party.

Their resources are limited, their enemies numerous, but their resolve is unshakeable. Operating from hidden bases and relying on sympathizers throughout the Kingdom, they strike at Legion operations wherever possible.

Recent events have tested them severely. The loss of the Vigilance, the intensifying crackdown, and the passage of the Iron Mandate have all added pressure. Yet they continue to fight, believing that freedom is worth any price.`,

        leader: {
            name: "The Party",
            title: "Leadership Council",
            portrait: "portraits/party_emblem.png",
            description: "An adventuring party that has become the de facto leadership. Decisions are made collectively."
        },

        officers: [
            { name: "Captain Toadette", role: "Military Liaison", description: "Provides tactical expertise and some official cover" },
            { name: "Archie Miser", role: "Intelligence", description: "Information gathering and analysis" },
            { name: "Bowser", role: "Heavy Support", description: "When subtlety fails, Bowser succeeds" }
        ],

        ranks: [
            { tier: 1, title: "Sympathizer", description: "Provides passive support", requirements: "Share our values", benefits: ["Safe passage", "Information"], repRequired: 0 },
            { tier: 2, title: "Supporter", description: "Active assistance", requirements: "Proven trustworthy", benefits: ["Safe houses", "Basic resources"], repRequired: 500 },
            { tier: 3, title: "Operative", description: "Full resistance member", requirements: "Demonstrated commitment", benefits: ["Full support", "Mission participation"], repRequired: 1500 },
            { tier: 4, title: "Cell Leader", description: "Commands a resistance cell", requirements: "Leadership proven", benefits: ["Resource allocation", "Strategic input"], repRequired: 4000 },
            { tier: 5, title: "Council Member", description: "Part of central leadership", requirements: "Exceptional contribution", benefits: ["Policy decisions", "Full access"], repRequired: 8000 }
        ],

        rules: [
            "Protect civilians at all costs",
            "Never betray a fellow Liberated",
            "Minimize collateral damage",
            "Share resources with those in need",
            "The cause comes before personal gain",
            "Hope is our greatest weapon"
        ],

        resources: {
            treasury: 5000,
            influence: 35,
            manpower: 150,
            materials: {
                weapons: 30,
                supplies: 40,
                safehouses: 50
            }
        },

        facilities: [
            { name: "The Network", type: "Communication", description: "Hidden message system", access: "Sympathizer+" },
            { name: "Safe Houses", type: "Refuge", description: "Hidden locations for members", access: "Supporter+" },
            { name: "The Armory", type: "Equipment", description: "Cached weapons and supplies", access: "Operative+" },
            { name: "Command Post", type: "Headquarters", description: "Mobile leadership location", access: "Cell Leader+" }
        ],

        services: [
            { name: "Safe Passage", description: "Help moving through dangerous areas", priceRange: "Free for allies", discount: { friendly: 100, honored: 100, revered: 100, exalted: 100 } },
            { name: "Intelligence", description: "Information about Legion movements", priceRange: "Shared freely", discount: { friendly: 100, honored: 100, revered: 100, exalted: 100 } },
            { name: "Medical Care", description: "Treatment for the wounded", priceRange: "What you can give", discount: { friendly: 100, honored: 100, revered: 100, exalted: 100 } }
        ],

        research_bonus: { 
            category: 'Guerrilla Tactics', 
            amount: 0.15,
            description: "+15% to asymmetric warfare research"
        },

        relations: {
            iron_crown_brigade: { standing: 'war', reason: 'Primary enemy' },
            iron_legion: { standing: 'war', reason: 'Occupying force' },
            mages_guild: { standing: 'friendly', reason: 'Common enemy' },
            onyx_hand: { standing: 'potential', reason: 'Enemy of our enemy...' }
        },

        contracts: [
            {
                id: 'lt_001',
                title: "Supply Run",
                type: 'logistics',
                difficulty: 'medium',
                reward: { gold: 0, reputation: 200, gratitude: 'Immense' },
                deadline: 7,
                description: "Smuggle medical supplies to refugees in the eastern district.",
                requirements: ["Stealth", "Dedication to the cause"],
                status: 'urgent'
            },
            {
                id: 'lt_002',
                title: "Intelligence Gathering",
                type: 'espionage',
                difficulty: 'hard',
                reward: { gold: 0, reputation: 350 },
                deadline: 14,
                description: "Learn the Legion's patrol schedules in the market district.",
                requirements: ["Observation", "Patience"],
                status: 'available'
            }
        ],

        events: [
            { date: "Unknown", title: "Strategy Meeting", description: "Planning next operations" },
            { date: "Day 25", title: "Remembrance", description: "Honoring fallen comrades" }
        ],

        history: [
            { year: '1040 BF', event: 'Movement began forming' },
            { year: '1040 BF', event: 'Party assumes leadership role' },
            { year: '1040 BF', event: 'Vigilance lost to Legion' },
            { year: '1040 BF', event: 'Continued resistance despite setbacks' }
        ],

        rumors: [
            "They're planning to retake the Vigilance...",
            "The party has allies even among the Legion's ranks.",
            "Some say they've contacted the supernatural factions for help."
        ],

        membershipRequirements: {
            species: null,
            skills: ['courage', 'conviction'],
            sponsorship: 'Prove your commitment',
            fee: 'None - we all give what we can'
        },

        isPlayerMember: 'bowser',
        playerRank: 'Council Member',
        playerReputation: 8500
    }
};

// Player reputation data (would normally be in state.js)
export const PLAYER_GUILD_DATA = {
    archie: {
        stonecarvers_brethren: { reputation: 500, rank: null, joinDate: null },
        merchants_consortium: { reputation: 1200, rank: 'Merchant', joinDate: '1038 BF' },
        shadow_weavers: { reputation: 500, rank: 'Thread', joinDate: '1040 BF' },
        mages_guild: { reputation: 2500, rank: 'Journeymage', joinDate: '1035 BF' },
        iron_crown_brigade: { reputation: -5000, rank: null, joinDate: null },
        liberated_toads: { reputation: 8000, rank: 'Council Member', joinDate: '1040 BF' }
    },
    humpik: {
        stonecarvers_brethren: { reputation: 3500, rank: 'Stonecarver', joinDate: '1020 BF' },
        merchants_consortium: { reputation: 800, rank: 'Associate', joinDate: '1038 BF' },
        shadow_weavers: { reputation: -1000, rank: null, joinDate: null },
        mages_guild: { reputation: 200, rank: null, joinDate: null },
        iron_crown_brigade: { reputation: -4000, rank: null, joinDate: null },
        liberated_toads: { reputation: 7500, rank: 'Council Member', joinDate: '1040 BF' }
    },
    markop: {
        stonecarvers_brethren: { reputation: 100, rank: null, joinDate: null },
        merchants_consortium: { reputation: 500, rank: 'Associate', joinDate: '1039 BF' },
        shadow_weavers: { reputation: 300, rank: null, joinDate: null },
        mages_guild: { reputation: 1500, rank: 'Apprentice', joinDate: '1038 BF' },
        iron_crown_brigade: { reputation: -3500, rank: null, joinDate: null },
        liberated_toads: { reputation: 7000, rank: 'Council Member', joinDate: '1040 BF' }
    },
    bowser: {
        stonecarvers_brethren: { reputation: 50, rank: null, joinDate: null },
        merchants_consortium: { reputation: -500, rank: null, joinDate: null },
        shadow_weavers: { reputation: -2000, rank: null, joinDate: null },
        mages_guild: { reputation: -1000, rank: null, joinDate: null },
        iron_crown_brigade: { reputation: -8000, rank: null, joinDate: null },
        liberated_toads: { reputation: 9000, rank: 'Council Member', joinDate: '1040 BF' }
    },
    remi: {
        stonecarvers_brethren: { reputation: 200, rank: null, joinDate: null },
        merchants_consortium: { reputation: 1000, rank: 'Merchant', joinDate: '1039 BF' },
        shadow_weavers: { reputation: 100, rank: null, joinDate: null },
        mages_guild: { reputation: 800, rank: 'Initiate', joinDate: '1040 BF' },
        iron_crown_brigade: { reputation: -2500, rank: null, joinDate: null },
        liberated_toads: { reputation: 6500, rank: 'Operative', joinDate: '1040 BF' }
    }
};

export function getReputationTier(reputation) {
    const tiers = Object.values(REPUTATION_TIERS).sort((a, b) => b.min - a.min);
    for (const tier of tiers) {
        if (reputation >= tier.min) {
            return tier;
        }
    }
    return REPUTATION_TIERS.hated;
}

export function getPlayerGuildData(playerKey, guildId) {
    if (!PLAYER_GUILD_DATA[playerKey]) return null;
    return PLAYER_GUILD_DATA[playerKey][guildId] || { reputation: 0, rank: null, joinDate: null };
}

export function getAllPlayerGuilds(playerKey) {
    if (!PLAYER_GUILD_DATA[playerKey]) return [];
    
    const result = [];
    const playerData = PLAYER_GUILD_DATA[playerKey];
    
    Object.entries(playerData).forEach(([guildId, data]) => {
        if (data.rank) {
            const guild = GUILD_DATA[guildId] || CHARTER_DATA[guildId];
            if (guild) {
                result.push({
                    ...guild,
                    playerData: data,
                    reputationTier: getReputationTier(data.reputation)
                });
            }
        }
    });
    
    return result;
}