// Comprehensive intelligence dossier on the Iron Legion

export const IRON_LEGION_DATA = {
    overview: {
        name: "The Iron Legion",
        alias: ["The Legion", "Steelclad's Army", "The Hammers"],
        founded: 1035,
        foundedEvent: "Consolidated from a network of Midlands mercenary companies during the Post-War Reconstruction",
        headquarters: "The Iron Citadel, Midlands Capital District",
        estimatedStrength: "45,000+ active combatants",
        politicalStatus: "De facto ruling military junta of the Midlands",
        currentObjective: "Expansion into the Mushroom Kingdom under guise of 'stabilization operations'"
    },

    leadership: {
        title: "Command Structure",
        supremeCommand: {
            rank: "Grand Forgemaster",
            name: "Lord Vexar Steelclad",
            description: "Supreme military and political authority. Elected by the Council of Hammers upon predecessor's death. Known for ruthless efficiency and zero tolerance for insubordination. Has held power for 4 years.",
            status: "Active - Last confirmed at Iron Citadel"
        },
        councilOfHammers: {
            description: "Advisory body of seven senior Hammer Lords. Responsible for grand strategy, resource allocation, and succession protocols. Meets weekly in the Anvil Chamber.",
            members: [
                { name: "Hammer Lord Kessler", portfolio: "Eastern Territories", notes: "Hardliner faction leader" },
                { name: "Hammer Lord Vance", portfolio: "Western Marches", notes: "Moderate, advocates negotiation" },
                { name: "Hammer Lord Thresh", portfolio: "Naval Operations", notes: "Controls the Iron Fleet" },
                { name: "Hammer Lord Brennan", portfolio: "Intelligence & Counter-ops", notes: "Oversees all spy networks" },
                { name: "Hammer Lord Corven", portfolio: "Logistics & Supply", notes: "The Legion's quartermaster" },
                { name: "Hammer Lord Draven", portfolio: "Training & Doctrine", notes: "Architect of current tactics" },
                { name: "Hammer Lord Mira", portfolio: "Occupied Territories", notes: "Governs annexed regions" }
            ]
        },
        fieldRanks: [
            { rank: "Hammer Lord", count: "7", command: "Legion (5,000-10,000 troops)", description: "Strategic commanders answering only to the Grand Forgemaster" },
            { rank: "Iron Tribune", count: "~70", command: "Cohort (500 troops)", description: "Battlefield tacticians, execute operational objectives" },
            { rank: "Centurion", count: "~700", command: "Century (100 troops)", description: "Primary officer corps, the Legion's backbone" },
            { rank: "Decurion", count: "~7,000", command: "Contubernium (10 troops)", description: "Squad leaders, veteran soldiers promoted from ranks" },
            { rank: "Legionnaire", count: "~37,000", command: "Individual", description: "Standard infantry, the iron that makes the machine" }
        ]
    },

    subsidiaryForces: {
        title: "Subsidiary & Covert Units",
        units: [
            {
                name: "Iron Crown Brigade",
                commander: "Viceroy Hammer Forgeheart",
                strength: "~2,000 operatives",
                location: "Regal Empire (dispersed)",
                mission: "Covert destabilization and pre-annexation operations",
                description: "Semi-autonomous force operating under deep cover. Specializes in infiltration, propaganda, and targeted elimination. Reports directly to Hammer Lord Brennan. Currently the primary Legion presence in Kingdom territory.",
                status: "ACTIVE - Recently seized control of the airship 'Vigilance'"
            },
            {
                name: "Shadow Hammers",
                commander: "Classified",
                strength: "~200 operatives",
                location: "Various",
                mission: "Assassination and high-value target elimination",
                description: "Elite black ops unit. Members undergo psychological conditioning and are considered expendable. Known for theatrical kills meant to send messages.",
                status: "ACTIVE - Multiple confirmed operations in Kingdom"
            },
            {
                name: "Royal Service Division",
                commander: "Tribune Aldric Stone",
                strength: "~500 operatives",
                location: "Midlands & Kingdom border regions",
                mission: "VIP protection and counter-intelligence",
                description: "Bodyguard and security force. Also handles internal affairs and loyalty enforcement. Recently deployed to 'secure' the Vigilance.",
                status: "ACTIVE - Reported aboard captured vessels"
            },
            {
                name: "Forge Engineers",
                commander: "Tribune Gearwright",
                strength: "~1,500 specialists",
                location: "Various siege sites",
                mission: "Siege warfare and fortification",
                description: "Combat engineers responsible for siege engines, fortifications, and demolitions. Their 'Forge Engines' are feared across the Midlands.",
                status: "ACTIVE - Constructing new siege works"
            }
        ]
    },

    doctrineAndTactics: {
        title: "Military Doctrine",
        corePhilosophy: "The Legion fights not to win battles, but to end wars. Every engagement is designed to break the enemy's capacity and will to resist. Speed is sacrificed for certainty.",
        tacticalPrinciples: [
            {
                name: "The Iron Wall",
                description: "Standard defensive formation using interlocking enchanted shields. Creates near-impenetrable barriers that can advance slowly while maintaining protection. Vulnerable only to flanking or magical bombardment."
            },
            {
                name: "Siege Doctrine",
                description: "The Legion prefers to surround, isolate, and starve enemies rather than storm fortifications. Patience is considered a virtue. Average siege duration: 6-8 weeks."
            },
            {
                name: "Hammer & Anvil",
                description: "Classic combined-arms tactic. Infantry pins the enemy (anvil) while cavalry or reserves strike the flank (hammer). Requires numerical superiority to execute effectively."
            },
            {
                name: "Controlled Escalation",
                description: "Violence is applied incrementally. Enemies are given opportunities to surrender at each stage. Those who refuse are made examples of."
            }
        ],
        covertTactics: [
            {
                name: "The Long Game",
                description: "In territories not yet conquered, the Legion plants agents years in advance. These sleepers gather intelligence, recruit sympathizers, and await activation."
            },
            {
                name: "Divide & Conquer",
                description: "The Iron Crown Brigade excels at turning factions against each other. False flag operations, leaked intelligence, and strategic assassinations create chaos the Legion can exploit."
            },
            {
                name: "The Helping Hand",
                description: "Legion forces often arrive as 'peacekeepers' or 'advisors' during crises they manufactured. By the time the population realizes the truth, occupation is complete."
            }
        ]
    },

    ideology: {
        title: "The Hammer Code",
        description: "The ideological foundation of Legion society. Drilled into every recruit from day one. Violations are punished severely.",
        tenets: [
            { number: 1, tenet: "Order Above All", meaning: "Chaos is the enemy. Personal desires, moral qualms, and individual freedoms are secondary to collective stability." },
            { number: 2, tenet: "Strength Through Unity", meaning: "A single soldier is nothing. The Legion is everything. Those who act alone threaten the whole." },
            { number: 3, tenet: "Command is Sacred", meaning: "Orders flow downward without question. Hesitation is weakness. Disobedience is treason." },
            { number: 4, tenet: "The Strong Must Lead", meaning: "Power justifies itself. Those who cannot hold power do not deserve it. Conquest is natural law." },
            { number: 5, tenet: "Victory Through Sacrifice", meaning: "A Legionnaire's life belongs to the cause. Death in service is the highest honor." },
            { number: 6, tenet: "The Conquered Shall Serve", meaning: "Defeated peoples are resources. They will be civilized through labor and obedience." }
        ],
        rituals: [
            { name: "The Anvil Oath", description: "Initiation ceremony where recruits are branded with the Legion sigil and swear eternal loyalty." },
            { name: "The Forge Chant", description: "Daily morning recitation reinforcing Code tenets. Mandatory for all personnel." },
            { name: "Rehammering", description: "Public punishment for infractions. Minor offenses result in flogging. Major violations end in execution." },
            { name: "The Iron Vigil", description: "24-hour standing watch as test of discipline. Required for promotion beyond Legionnaire." }
        ]
    },

    recruitment: {
        title: "Recruitment & Training",
        midlandsProgram: {
            name: "The Iron Call",
            description: "Public recruitment drives held in Midlands cities. Targets disaffected youth, unemployed laborers, and those seeking purpose. Promises of steady pay, glory, and belonging are effective lures.",
            process: [
                "Public rally with speeches and demonstrations",
                "Initial screening for physical and mental fitness",
                "Two-week 'Forge Trial' testing endurance and obedience",
                "Successful candidates undergo 'Hammering' ceremony",
                "Six months of intensive training before assignment"
            ],
            washoutRate: "~40% fail the Forge Trials"
        },
        kingdomProgram: {
            name: "The Secret Forge",
            description: "Covert recruitment by the Iron Crown Brigade. Targets refugees, criminals, and those with grievances against existing factions. Emphasizes the Legion as saviors who will bring stability.",
            process: [
                "Identification of vulnerable individuals",
                "Gradual ideological grooming over weeks",
                "Small tasks to build trust and complicity",
                "Secret oath ceremony in hidden locations",
                "Integration into cell structure with limited knowledge"
            ],
            activeRecruitmentZones: ["Refugee camps", "Border towns", "Vigilance crew (compromised)"]
        }
    },

    recentOperations: {
        title: "Recent Operations in Regal Empire",
        operations: [
            {
                date: "Day 7-8, 1040 BF",
                codename: "IRON GATE",
                description: "First major confrontation with party aboard Vigilance. Legion agents attempted to recover prisoners and were detained. Revealed extent of Brigade infiltration.",
                outcome: "Partial failure - agents captured, but intelligence gathered"
            },
            {
                date: "Day 11, 1040 BF",
                codename: "STEEL TIDE",
                description: "Coordinated assault involving multiple faction conflicts. Legion forces engaged Tea Leaf Syndicate while pursuing primary objectives.",
                outcome: "Partial success - significant chaos created, some objectives achieved"
            },
            {
                date: "Day 14, 1040 BF",
                codename: "SEWER RAT",
                description: "Attempted ambush in lava-filled sewer system. Legion spy led party into trap involving a Behir creature.",
                outcome: "Failure - party escaped, spy identity compromised"
            },
            {
                date: "Day 16, 1040 BF",
                codename: "CLOCKWORK",
                description: "Infiltration of Shadeward Manor during temporal anomaly event. Revealed alliance with robotic duplicate and clone assets.",
                outcome: "Mixed - Manor secured briefly, but party escaped with intelligence"
            },
            {
                date: "Day 20, 1040 BF",
                codename: "IRON SKY",
                description: "Successful boarding and capture of the airship Vigilance. Royal Service Division takes control.",
                outcome: "SUCCESS - Vigilance under Legion control"
            },
            {
                date: "Day 21, 1040 BF",
                codename: "MANDATE",
                description: "Political operation. The Iron Mandate passed by Midlands Diet granting emergency powers for 'supernatural threat' elimination.",
                outcome: "SUCCESS - Legal authority for expanded operations"
            }
        ]
    },

    assets: {
        title: "Known Assets & Resources",
        military: [
            { type: "Infantry Legions", quantity: "7 full legions", notes: "Core fighting force" },
            { type: "Cavalry Squadrons", quantity: "~3,000 riders", notes: "Heavy shock cavalry" },
            { type: "Siege Engines", quantity: "~200 'Forge Engines'", notes: "Catapults and ballistae" },
            { type: "Warships", quantity: "~40 vessels", notes: "Iron Fleet, mostly patrol craft" },
            { type: "Airship Assets", quantity: "1 confirmed (Vigilance)", notes: "Recently captured" }
        ],
        intelligence: [
            { type: "Embedded Agents", quantity: "Unknown (dozens confirmed)", notes: "Sleeper cells in all major factions" },
            { type: "Informant Network", quantity: "Extensive", notes: "Paid sources across the Kingdom" },
            { type: "Arcane Assets", quantity: "Limited", notes: "Archie clone, robotic duplicate, others suspected" }
        ],
        political: [
            { type: "Midlands Diet Control", quantity: "28 of 39 seats aligned", notes: "Near-total political control" },
            { type: "Supernatural Sovereignty Act", quantity: "Enacted", notes: "Legal basis for expanded operations" },
            { type: "Iron Mandate", quantity: "Enacted Day 21", notes: "Emergency powers authorization" }
        ]
    },

    knownPersonnel: {
        title: "Known Operatives in Kingdom Theater",
        operatives: [
            {
                name: "Viceroy Hammer Forgeheart",
                role: "Iron Crown Brigade Commander",
                description: "Overall commander of Kingdom operations. Ruthless and methodical. Has not been personally sighted.",
                threatLevel: "Extreme",
                status: "Location unknown"
            },
            {
                name: "Tribune Aldric Stone",
                role: "Royal Service Division Commander",
                description: "Led the Vigilance boarding party. Professional soldier with no known personal grievances.",
                threatLevel: "High",
                status: "Aboard Vigilance"
            },
            {
                name: "The Archie Clone",
                role: "Arcane Asset",
                description: "Two-eyed duplicate of Archie Miser created through forbidden necromancy. Seeks to claim Archie's third eye. Currently held by Behir creature.",
                threatLevel: "High",
                status: "Captive (Behir)"
            },
            {
                name: "Creek",
                role: "Field Medic / Operative",
                description: "Mercenary surgeon with Legion ties. Performed surgery on wounded toad, discovered to be Legion plant.",
                threatLevel: "Medium",
                status: "Aboard Vigilance"
            },
            {
                name: "Unknown Spy (Sewer)",
                role: "Infiltrator",
                description: "Led party into Behir trap. Identity never confirmed. May still be active.",
                threatLevel: "Medium",
                status: "At large"
            },
            {
                name: "Iron Legion Spy (Manor)",
                role: "Deep Cover Agent",
                description: "Assisted Humpik in Mirror Dimension. Revealed impending Supernatural Sovereignty Act. Motivations unclear.",
                threatLevel: "Unknown",
                status: "At large"
            }
        ]
    },

    vulnerabilities: {
        title: "Assessed Vulnerabilities",
        weaknesses: [
            {
                category: "Overextension",
                description: "The Legion is operating far from supply lines. The Iron Crown Brigade has limited reinforcement options and must rely on local recruitment.",
                exploitability: "High"
            },
            {
                category: "Rigid Command Structure",
                description: "Heavy reliance on chain of command. Elimination of key officers can paralyze units for extended periods.",
                exploitability: "Medium"
            },
            {
                category: "Internal Politics",
                description: "Council of Hammers contains moderate faction. If hardliners overreach, internal opposition may emerge.",
                exploitability: "Low (long-term)"
            },
            {
                category: "Public Relations",
                description: "Brutal tactics generate resistance. Conquered populations remain hostile and require constant suppression.",
                exploitability: "Medium"
            },
            {
                category: "Magical Limitations",
                description: "Legion has limited arcane capabilities compared to Mages' Guild or supernatural factions. Relies on captured assets and artifacts.",
                exploitability: "High"
            },
            {
                category: "Supernatural Sovereignty Act",
                description: "Act alienates Onyx Hand, Moonfang Pack, and other supernatural entities. Creates potential alliance of enemies.",
                exploitability: "High"
            }
        ]
    },

    relationships: {
        title: "Faction Relationships",
        factions: [
            { name: "Regal Empire", status: "ALLIED", description: "The Legion is the Empire's military arm. Mutual interests align completely." },
            { name: "Peach Loyalists", status: "HOSTILE", description: "Direct opposition. Loyalists resist all Imperial expansion." },
            { name: "Liberated Toads", status: "HOSTILE", description: "Party's faction. Multiple violent confrontations. High-priority targets." },
            { name: "Fawful's Forces", status: "COMPLICATED", description: "Nominal enemies, but conflicts may serve Legion interests by weakening Kingdom." },
            { name: "Mages' Guild", status: "TENSE", description: "Guild resents Legion's anti-magic tendencies. Supernatural Sovereignty Act deepens rift." },
            { name: "Onyx Hand", status: "HOSTILE (New)", description: "Supernatural Sovereignty Act effectively declares war on vampire organization." },
            { name: "Moonfang Pack", status: "HOSTILE (New)", description: "Supernatural Sovereignty Act targets werewolf faction for elimination." },
            { name: "Tea Leaf Syndicate", status: "OPPORTUNISTIC", description: "Criminal element. Legion uses them when convenient, suppresses them otherwise." },
            { name: "DK Crew", status: "NEUTRAL", description: "No direct conflict. Legion monitors Kong political instability." },
            { name: "Kremling Krew", status: "NEUTRAL", description: "Separate theater. No current interaction." },
            { name: "Koopa Troop Remnants", status: "MONITORING", description: "Kamek's return being watched. Potential future threat or asset." }
        ]
    }
};

export const LEGION_QUOTES = [
    { text: "An order is not a suggestion. It is a fact.", source: "The Hammer Code, Section 2" },
    { text: "We do not raid. We conquer.", source: "Iron Legion Field Manual, Section 6" },
    { text: "The conquered peoples are not our equals. They are raw material.", source: "Field Manual, Section 11" },
    { text: "Chaos is the enemy. Order is the only virtue.", source: "The Hammer Code, Section 2" },
    { text: "A Legionnaire's life belongs to the Emperor. Spend it wisely.", source: "The Hammer Code, Section 2" }
];

export const THREAT_ASSESSMENT = {
    overall: "CRITICAL",
    military: "EXTREME",
    political: "HIGH", 
    intelligence: "EXTREME",
    immediateThreats: [
        "Vigilance under enemy control",
        "Unknown number of sleeper agents remain active",
        "Iron Mandate grants expanded operational authority",
        "Archie clone remains a wild card"
    ],
    recommendedActions: [
        "Prioritize intelligence gathering on Brigade structure",
        "Identify and neutralize remaining embedded agents",
        "Consider alliance with factions targeted by Supernatural Sovereignty Act",
        "Develop contingency for Vigilance recovery or destruction"
    ]
};