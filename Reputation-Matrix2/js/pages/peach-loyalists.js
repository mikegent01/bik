// =============================================
// PEACH LOYALISTS FACTION SYSTEM
// =============================================

import { state } from '../core/state.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from './calendar-data.js'; // Adjust path if necessary
// =============================================
// DATA DEFINITIONS
// =============================================

const LOYALIST_DATA = {
    // Faction Overview
    overview: {
        name: 'Peach Loyalists',
        motto: 'The Crown Endures',
        founded: 956,
        icon: '🌸',
        description: 'A fanatical resistance movement dedicated to avenging Princess Peach\'s assassination and uncovering the truth behind the conspiracy that killed her. For 85 years, they have waged an unrelenting shadow war against the Mushroom Regency and all who they believe benefited from the Princess\'s death.',
        currentStatus: 'Active insurgency with recent major victories',
        leadership: 'Captain Toadette (Supreme Commander)',
        headquarters: 'Classified (mobile command structure)',
        strength: 'Estimated 2,000-3,000 active operatives',
        alignment: 'Lawful Evil / Chaotic Good (perspective dependent)'
    },

    // Investigation Board - Evidence related to Peach's assassination
    investigation: {
        centralSubject: {
            id: 'princess_peach',
            name: 'Princess Peach',
            icon: '👑',
            date: '955 BF',
            description: 'The beloved ruler of the Mushroom Kingdom, assassinated in her private chambers. Her death triggered the civil war that continues 85 years later.'
        },
        
        evidenceClusters: [
            {
                id: 'crime_scene',
                category: 'Physical Evidence',
                icon: '🔍',
                color: '#e74c3c',
                nodes: [
                    {
                        id: 'secret_hatch',
                        icon: '🚪',
                        label: 'Secret Hatch',
                        status: 'critical',
                        intelRequired: 60,
                        discoveredDate: { year: 1040, monthIndex: 6, day: 10 },
                        discoveredBy: 'Chief Thornpaw via Scout Mistveil',
                        description: 'A hidden passage behind the royal portrait in Peach\'s private chambers. Revealed by Chief Thornpaw at Fawful\'s gala - he learned of it during a secret romantic relationship with the Princess.',
                        implications: [
                            'Assassin had intimate knowledge of castle layout',
                            'Possible insider involvement',
                            'Official investigation may have been compromised',
                            'Access mechanism requires specific sequence'
                        ],
                        connections: ['thornpaw_testimony', 'castle_guards', 'regency_cover']
                    },
                    {
                        id: 'murder_weapon',
                        icon: '🗡️',
                        label: 'Murder Weapon',
                        status: 'disputed',
                        intelRequired: 30,
                        discoveredDate: { year: 955, monthIndex: 6, day: 2 },
                        discoveredBy: 'Royal Guard Investigation',
                        description: 'Official reports claim a ceremonial dagger was found at the scene. However, witness accounts vary wildly on the nature of the wounds.',
                        implications: [
                            'Weapon may have been planted',
                            'Multiple assailants possible',
                            'Magical involvement cannot be ruled out'
                        ],
                        connections: ['castle_guards', 'koopa_theory']
                    },
                    {
                        id: 'timeline_gaps',
                        icon: '⏰',
                        label: 'Timeline Gaps',
                        status: 'verified',
                        intelRequired: 45,
                        discoveredDate: { year: 998, monthIndex: 3, day: 15 },
                        discoveredBy: 'Loyalist Archivist Inkwell',
                        description: 'Analysis of guard rotation logs reveals a 47-minute gap where no guards were stationed near the royal chambers. This was attributed to a "scheduling error" that has never been adequately explained.',
                        implications: [
                            'Guards were deliberately withdrawn',
                            'Inside job is highly likely',
                            'Someone with authority arranged the gap'
                        ],
                        connections: ['castle_guards', 'regency_cover', 'secret_hatch']
                    }
                ]
            },
            {
                id: 'witnesses',
                category: 'Witnesses & Testimony',
                icon: '👁️',
                color: '#3498db',
                nodes: [
                    {
                        id: 'thornpaw_testimony',
                        icon: '🐾',
                        label: 'Chief Thornpaw',
                        status: 'critical',
                        intelRequired: 70,
                        discoveredDate: { year: 1040, monthIndex: 6, day: 10 },
                        discoveredBy: 'Scout Mistveil at Fawful\'s Gala',
                        description: 'The Rakasha chief revealed he was in a romantic relationship with Princess Peach. She personally showed him the secret hatch as her "escape route if the worst ever happened." His 85-year silence raises questions.',
                        implications: [
                            'Thornpaw knew the Princess intimately',
                            'Why did he wait 85 years to reveal this?',
                            'What else does he know?',
                            'Is he protecting someone?'
                        ],
                        connections: ['secret_hatch', 'rakasha_involvement', 'timing_question']
                    },
                    {
                        id: 'castle_guards',
                        icon: '🛡️',
                        label: 'Royal Guard Testimony',
                        status: 'disputed',
                        intelRequired: 35,
                        discoveredDate: { year: 955, monthIndex: 6, day: 1 },
                        discoveredBy: 'Official Investigation',
                        description: 'Three guards who were on duty that night gave contradictory testimony. Two died within a year under suspicious circumstances. The third, Captain Silvercap, disappeared and is presumed dead.',
                        implications: [
                            'Witnesses were silenced',
                            'Guard testimony is unreliable',
                            'Captain Silvercap may still be alive'
                        ],
                        connections: ['timeline_gaps', 'regency_cover', 'missing_persons']
                    },
                    {
                        id: 'chamberlain_notes',
                        icon: '📝',
                        label: 'Toadsworth Sr. Notes',
                        status: 'verified',
                        intelRequired: 55,
                        discoveredDate: { year: 1010, monthIndex: 8, day: 22 },
                        discoveredBy: 'Captain Toadette',
                        description: 'Private journals of the Royal Chamberlain (father of current Chancellor) recovered from family vault. Contains cryptic references to "the arrangement" and "those who benefit from chaos."',
                        implications: [
                            'Chamberlain suspected conspiracy',
                            'He knew more than he revealed',
                            'Current Toadsworth may have relevant information'
                        ],
                        connections: ['regency_cover', 'mushroom_regency_motive']
                    }
                ]
            },
            {
                id: 'suspects',
                category: 'Suspects & Theories',
                icon: '🎯',
                color: '#9b59b6',
                nodes: [
                    {
                        id: 'koopa_theory',
                        icon: '🐢',
                        label: 'Koopa Involvement',
                        status: 'disputed',
                        intelRequired: 25,
                        discoveredDate: { year: 955, monthIndex: 6, day: 5 },
                        discoveredBy: 'Mushroom Regency',
                        description: 'The official narrative blamed Bowser and the Koopa Troop. However, Bowser has consistently denied involvement and the evidence is circumstantial at best. Some believe this was a convenient scapegoat.',
                        implications: [
                            'Bowser may be innocent of this specific crime',
                            'The accusation served political purposes',
                            'Real assassin used Koopa as cover'
                        ],
                        connections: ['murder_weapon', 'regency_cover']
                    },
                    {
                        id: 'regency_cover',
                        icon: '🏛️',
                        label: 'Regency Conspiracy',
                        status: 'verified',
                        intelRequired: 50,
                        discoveredDate: { year: 1035, monthIndex: 2, day: 8 },
                        discoveredBy: 'Loyalist Intelligence Network',
                        description: 'Mounting evidence suggests the Mushroom Regency actively suppressed investigation leads. Whether this was to protect the true killers or simply to maintain power remains unclear.',
                        implications: [
                            'Regency officials destroyed evidence',
                            'Chancellor Toadsworth inherited the cover-up',
                            'The truth threatens current power structures'
                        ],
                        connections: ['timeline_gaps', 'castle_guards', 'chamberlain_notes', 'mushroom_regency_motive']
                    },
                    {
                        id: 'mushroom_regency_motive',
                        icon: '💰',
                        label: 'Cui Bono?',
                        status: 'verified',
                        intelRequired: 40,
                        discoveredDate: { year: 980, monthIndex: 11, day: 1 },
                        discoveredBy: 'Loyalist Founding Council',
                        description: 'The question "who benefits?" points clearly at those who gained power after Peach\'s death. The Mushroom Regency has held power for 85 years. They had the most to gain.',
                        implications: [
                            'Regency officials are prime suspects',
                            'The civil war serves certain interests',
                            'Peace would threaten their power'
                        ],
                        connections: ['regency_cover', 'chamberlain_notes']
                    },
                    {
                        id: 'missing_persons',
                        icon: '❓',
                        label: 'The Vanished',
                        status: 'unresolved',
                        intelRequired: 65,
                        discoveredDate: { year: 1000, monthIndex: 1, day: 1 },
                        discoveredBy: 'Loyalist Archivists',
                        description: 'Several key witnesses and potential sources vanished in the years following the assassination. Captain Silvercap, Lady Bloomia (Peach\'s handmaiden), and the Royal Alchemist all disappeared without a trace.',
                        implications: [
                            'Witnesses were eliminated or went into hiding',
                            'Lady Bloomia may have critical documents',
                            'Finding these individuals is a priority'
                        ],
                        connections: ['castle_guards', 'regency_cover']
                    }
                ]
            },
            {
                id: 'new_leads',
                category: 'Recent Developments',
                icon: '✨',
                color: '#f39c12',
                nodes: [
                    {
                        id: 'rakasha_involvement',
                        icon: '👁️',
                        label: 'Rakasha Connection',
                        status: 'new',
                        intelRequired: 75,
                        discoveredDate: { year: 1040, monthIndex: 6, day: 10 },
                        discoveredBy: 'Scout Mistveil',
                        description: 'Chief Thornpaw\'s revelation opens new avenues of investigation. The Rakasha may have been watching events unfold for decades. Spirit-Walker Elder Moon-Eye claims to have "witnessed" the death through spirit-sight.',
                        implications: [
                            'Rakasha have additional intelligence',
                            'Spirit-sight testimony could provide new evidence',
                            'Alliance with Rakasha could break the case'
                        ],
                        connections: ['thornpaw_testimony', 'spirit_vision']
                    },
                    {
                        id: 'spirit_vision',
                        icon: '✨',
                        label: 'Ryan\'s Vision',
                        status: 'new',
                        intelRequired: 80,
                        discoveredDate: { year: 1040, monthIndex: 6, day: 20 },
                        discoveredBy: 'Ryan (Liberated Toad)',
                        description: 'During Rakasha spirit-walking rites, the toad Ryan reportedly saw fragmentary visions of the assassination. He claims to have glimpsed the face of the true killer, though the vision was unclear.',
                        implications: [
                            'Supernatural methods may reveal truth',
                            'Ryan needs further debriefing',
                            'The spirits want the truth known'
                        ],
                        connections: ['rakasha_involvement', 'thornpaw_testimony']
                    },
                    {
                        id: 'timing_question',
                        icon: '🕐',
                        label: 'Why Now?',
                        status: 'new',
                        intelRequired: 60,
                        discoveredDate: { year: 1040, monthIndex: 6, day: 11 },
                        discoveredBy: 'Intelligence Analysis',
                        description: 'Why did Chief Thornpaw choose THIS moment to reveal his secret? At Fawful\'s gala, to Loyalist operatives? His timing seems calculated. Is he playing a deeper game?',
                        implications: [
                            'Thornpaw has his own agenda',
                            'Political calculations are in play',
                            'The Rakasha may be maneuvering'
                        ],
                        connections: ['thornpaw_testimony', 'rakasha_involvement']
                    },
                    {
                        id: 'fawful_archives',
                        icon: '📁',
                        label: 'Fawful\'s Discovery',
                        status: 'new',
                        intelRequired: 85,
                        discoveredDate: { year: 1040, monthIndex: 6, day: 8 },
                        discoveredBy: 'Intelligence Projection',
                        description: 'Fawful\'s seizure of Peach\'s Castle gave him access to the royal archives. What did he find? Has he discovered the secret hatch? Does he now possess evidence we have sought for decades?',
                        implications: [
                            'Fawful may have critical evidence',
                            'He could be leveraged or eliminated',
                            'Castle infiltration is now priority'
                        ],
                        connections: ['secret_hatch', 'regency_cover']
                    }
                ]
            }
        ],
        
        breakthroughs: [
            {
                date: { year: 1040, monthIndex: 6, day: 21 },
                title: 'The House of Pleasure (Xeos)',
                description: 'Mystivil entered the Rakasha mindscape (Xeos). He confirmed Thornpaw\'s deep connection to the spirit realm and the existence of a "Rakasha Guide" who facilitates these connections. The Rakasha are not just savages; they are a psychic collective.',
                critical: true,
                intelRequired: 60
            },            
            {
                date: { year: 1040, monthIndex: 6, day: 10 },
                title: 'The Thornpaw Revelation',
                description: 'Chief Thornpaw reveals his relationship with Princess Peach and the existence of a secret hatch in her chambers. This is the most significant breakthrough in decades.',
                critical: true,
                intelRequired: 50
            },
            {
                date: { year: 1040, monthIndex: 6, day: 20 },
                title: 'Ryan\'s Spirit Vision',
                description: 'Toad operative Ryan witnesses fragmentary visions of the assassination during Rakasha rites. Claims to have seen the killer\'s face.',
                critical: true,
                intelRequired: 70
            },
            {
                date: { year: 1040, monthIndex: 6, day: 15 },
                title: 'Bramblehaven Intelligence',
                description: 'Documents recovered during the assault on Bramblehaven include references to "pre-war arrangements" that may relate to the assassination.',
                critical: false,
                intelRequired: 40
            },
            {
                date: { year: 1040, monthIndex: 6, day: 8 },
                title: 'Fawful\'s Castle Secrets',
                description: 'Fawful\'s seizure of Peach\'s Castle may have given him access to hidden records. Intelligence priority: determine what he found.',
                critical: false,
                intelRequired: 55
            }
        ]
    },
    
    // Cell Network Structure
    cells: {
        highCommand: [
            {
                id: 'toadette',
                name: 'Captain Toadette',
                codename: 'CROWN',
                icon: '👑',
                role: 'Supreme Commander',
                status: 'active',
                intelRequired: 20,
                bio: 'The ruthless leader of the Peach Loyalists. Her fanatical devotion to the Princess\'s memory drives the movement\'s most extreme actions. She personally ordered the Bramblehaven massacre and shows no remorse.',
                personality: 'Cold, calculating, utterly devoted. Views mercy as weakness.',
                stats: {
                    operations: 47,
                    yearsActive: 23,
                    directKills: 'Classified'
                },
                recentActions: [
                    'Ordered Bramblehaven massacre (Day 17)',
                    'Led Toad Town coup (Day 12)',
                    'Authorized Castle infiltration (Day 20)'
                ],
                quote: '"Every enemy we kill brings us one step closer to the truth. Every ally we lose is a martyr for our cause."'
            },
            {
                id: 'commander_redcap',
                name: 'Commander Redcap',
                codename: 'SWORD',
                icon: '⚔️',
                role: 'Military Commander',
                status: 'active',
                intelRequired: 35,
                bio: 'Former Regency military officer who defected after discovering evidence of the cover-up. Now leads all Loyalist combat operations with brutal efficiency.',
                personality: 'Professional soldier. Follows orders without question.',
                stats: {
                    operations: 89,
                    yearsActive: 15,
                    directKills: 200
                },
                recentActions: [
                    'Commanded Bramblehaven assault forces',
                    'Planning Vigilance recovery operation'
                ],
                quote: '"War is simple. Kill more of them than they kill of us. Everything else is politics."'
            },
            {
                id: 'spymaster_shade',
                name: 'Spymaster Shade',
                codename: 'VEIL',
                icon: '🕵️',
                role: 'Intelligence Director',
                status: 'active',
                intelRequired: 50,
                bio: 'The shadow behind the shadows. Shade runs the Loyalist intelligence network and knows secrets that could topple kingdoms. No one knows their true identity.',
                personality: 'Paranoid, meticulous, always three steps ahead.',
                stats: {
                    operations: 'Unknown',
                    yearsActive: 'Unknown',
                    directKills: 0
                },
                recentActions: [
                    'Coordinated gala infiltration',
                    'Managing Rakasha liaison',
                    'Running counter-intelligence against Iron Legion'
                ],
                quote: '"Information is the only weapon that never runs out of ammunition."'
            }
        ],
        
        cellLeaders: [
            {
                id: 'mystivil',
                name: 'Mystivil',
                codename: 'ENVOY',
                icon: '🎭',
                role: 'Diplomatic Liaison',
                status: 'active',
                intelRequired: 40,
                bio: 'A high-ranking diplomat who successfully navigated the Rakasha "Festival of the Fallen." He survived the Xeos Ritual—a psychic link to the Rakasha hive mind—to secure a pact with Chief Thornpaw.',
                stats: {
                    operations: 12,
                    yearsActive: 4,
                    directKills: 0
                },
                recentActions: [
                    'Attended Festival of the Fallen',
                    'Survived Xeos Ritual (Inner Path)',
                    'Secured "Rogueport District" Pact'
                ]
            },
            {
                id: 'big_r',
                name: 'Big R',
                codename: 'ANCHOR',
                icon: '🛡️',
                role: 'Diplomatic Security',
                status: 'active',
                intelRequired: 35,
                bio: 'Mystivil\'s personal bodyguard and enforcer. Skeptical of magic but fiercely loyal. Kept watch while Mystivil was under the influence of the Xeos trance.',
                stats: {
                    operations: 45,
                    yearsActive: 7,
                    directKills: 32
                },
                recentActions: [
                    'Security for Festival of the Fallen',
                    'Extracted Envoy from ritual site'
                ]
            },            
            {
                id: 'embercap',
                name: 'Embercap',
                codename: 'SHADOW',
                icon: '🔥',
                role: 'Infiltration Specialist',
                status: 'compromised',
                statusDetail: 'Identity exposed at Fawful\'s gala. Currently in hiding.',
                intelRequired: 25,
                bio: 'Master of disguise and infiltration. His gala operation obtained critical intel from Thornpaw but was exposed, costing operative Jade Grit her life.',
                stats: {
                    operations: 34,
                    yearsActive: 8,
                    directKills: 12
                },
                recentActions: [
                    'Fawful Gala Infiltration (Exposed)',
                    'Bramblehaven reconnaissance (Success)'
                ]
            },
            {
                id: 'mistveil',
                name: 'Mistveil',
                codename: 'WHISPER',
                icon: '🌫️',
                role: 'Field Intelligence Chief',
                status: 'active',
                intelRequired: 30,
                bio: 'The Loyalists\' primary intelligence gatherer. He successfully extracted the Thornpaw revelation during the gala. Now coordinates Rakasha relations.',
                stats: {
                    operations: 56,
                    yearsActive: 12,
                    directKills: 3
                },
                recentActions: [
                    'Extracted Thornpaw intelligence',
                    'Opened Rakasha diplomatic channel',
                    'Running Operation HOMECOMING'
                ]
            },
            {
                id: 'stonecap',
                name: 'Stonecap',
                codename: 'HAMMER',
                icon: '🔨',
                role: 'Demolitions Expert',
                status: 'active',
                intelRequired: 35,
                bio: 'If it needs to be destroyed, Stonecap handles it. Responsible for numerous infrastructure attacks that have crippled enemy supply lines.',
                stats: {
                    operations: 41,
                    yearsActive: 10,
                    directKills: 67
                },
                recentActions: [
                    'Bridge network sabotage (3 bridges destroyed)',
                    'Fawful factory raid planning'
                ]
            },
            {
                id: 'bloodcap',
                name: 'Bloodcap',
                codename: 'DAGGER',
                icon: '🗡️',
                role: 'Assassination Cell Leader',
                status: 'active',
                intelRequired: 60,
                bio: 'Leads the Vengeance Cell. Cold, efficient, and utterly without mercy. Her kill list includes dozens of high-value targets.',
                stats: {
                    operations: 28,
                    yearsActive: 6,
                    directKills: 89
                },
                recentActions: [
                    'Mayor of Toad Town elimination',
                    'Fawful officer assassinations (ongoing)'
                ]
            }
        ],
        
        operationalCells: [
            {
                id: 'vengeance_cell',
                name: 'Vengeance Cell',
                codename: 'CRIMSON',
                icon: '🩸',
                specialty: 'Assassination & Wetwork',
                status: 'active',
                members: 12,
                leader: 'Bloodcap',
                description: 'The Loyalists\' wetwork division. They carry out targeted killings of high-value enemies. No target is too protected.',
                recentOperations: ['Mayor elimination', 'Regency officer purge'],
                killCount: 147
            },
            {
                id: 'truth_cell',
                name: 'Truth Seekers',
                codename: 'ARCHIVE',
                icon: '📚',
                specialty: 'Investigation & Analysis',
                status: 'active',
                members: 8,
                leader: 'Archivist Inkwell',
                description: 'Dedicated to uncovering the truth about Princess Peach\'s assassination. They maintain the investigation board and pursue every lead.',
                recentOperations: ['Thornpaw intel analysis', 'Bramblehaven document recovery'],
                killCount: 0
            },
            {
                id: 'liberation_cell',
                name: 'Liberation Front',
                codename: 'FREEDOM',
                icon: '🔓',
                specialty: 'Rescue Operations',
                status: 'deployed',
                statusDetail: '',
                members: 150,
                leader: 'Brightcap',
                description: 'Specializes in freeing imprisoned Loyalists and sympathizers from enemy detention.',
                recentOperations: ['Regency prison break (14 rescued)', 'Fawful labor camp liberation'],
                killCount: 34
            },
            {
                id: 'propaganda_cell',
                name: 'Voice of the Crown',
                codename: 'HERALD',
                icon: '📢',
                specialty: 'Information Warfare',
                status: 'active',
                members: 6,
                leader: 'Inkspore',
                description: 'Spreads the Loyalist message and counters enemy propaganda. Operates clandestine printing presses throughout the kingdom.',
                recentOperations: ['Toad Town leaflet drops', '"Truth of the Crown" pamphlet series'],
                killCount: 0
            },
            {
                id: 'supply_cell',
                name: 'The Gardeners',
                codename: 'ROOT',
                icon: '🌱',
                specialty: 'Logistics & Supply',
                status: 'active',
                members: 23,
                leader: 'Fernshade',
                description: 'Maintains the Loyalist supply network. Runs safehouses, smuggles weapons, and ensures operatives have what they need.',
                recentOperations: ['Bramblehaven supply chain', 'Weapons cache establishment'],
                killCount: 2
            }
        ]
    },
    
    // Operations Database
    operations: [
        {
            id: 'op_rakasha_alliance',
            codename: 'SPIRIT BOND',
            type: 'diplomatic',
            typeLabel: 'Diplomatic Mission',
            status: 'completed', // CHANGED FROM active
            classification: 'secret',
            date: { year: 1040, monthIndex: 6, day: 21 }, // Updated Date
            objective: 'Establish formal alliance with the Rakasha Clans via the Festival of the Fallen.',
            commander: 'Mistveil / Mystivil',
            cells: ['Truth Seekers'],
            forces: { friendly: 2, enemy: 0 },
            outcome: 'PACT ESTABLISHED', // CHANGED
            outcomeDetail: 'Mystivil passed the Xeos Ritual. Thornpaw agreed to an alliance on the condition that Loyalists protect a specific district in Rogueport.',
            casualties: { friendly: 0, enemy: 0 },
            intelGained: [
                'Direct mental link with Thornpaw established',
                'Confirmation of Rakasha hive-mind capabilities',
                'Location of Rakasha interests in Rogueport'
            ],
            notes: 'The alliance is fragile. We must honor the "District Protection" clause or the pact voids.'
        },

        // ADD THIS NEW OPERATION:
        {
            id: 'op_rogueport_district',
            codename: 'SAFE HAVEN',
            type: 'military',
            typeLabel: 'Garrison Deployment',
            status: 'active',
            classification: 'secret',
            date: { year: 1040, monthIndex: 6, day: 22 },
            objective: 'Occupy and protect the Rakasha-designated district in Rogueport as per the Spirit Bond treaty.',
            commander: 'Commander Redcap',
            cells: ['Liberation Front', 'Vengeance Cell'],
            forces: { friendly: 150, enemy: 'Various gangs' },
            outcome: 'DEPLOYING',
            outcomeDetail: 'Troops moving to secure the perimeter. No invasion—strictly a protection detail as requested by Thornpaw.',
            casualties: { friendly: 0, enemy: 0 },
            intelGained: [],
            notes: 'This is the price of the Rakasha alliance. We hold this district, we hold their friendship.'
        },        
        {
            id: 'op_bramblehaven',
            codename: 'IRON ROSE',
            type: 'military',
            typeLabel: 'Military Assault',
            status: 'completed',
            classification: 'declassified',
            date: { year: 1040, monthIndex: 6, day: 17 },
            endDate: { year: 1040, monthIndex: 6, day: 17 },
            objective: 'Capture the Fawful stronghold of Bramblehaven and recover intelligence assets.',
            commander: 'Captain Toadette',
            cells: ['Vengeance Cell', 'Liberation Front'],
            forces: { friendly: 600, enemy: 200 },
            outcome: 'TOTAL VICTORY',
            outcomeDetail: 'Fortress captured. All defenders eliminated. Critical intel recovered. War crimes allegations pending.',
            casualties: { friendly: 180, enemy: 200 },
            intelGained: [
                'Fawful troop deployment maps',
                'Communication cipher keys',
                'References to "pre-war arrangements"'
            ],
            notes: 'No quarter given by order of Captain Toadette. All prisoners executed. The Regal Empire has opened a formal inquiry.',
            warCrimesFlag: true
        },
        {
            id: 'op_toad_town',
            codename: 'DAWN CHORUS',
            type: 'political',
            typeLabel: 'Political Action',
            status: 'completed',
            classification: 'declassified',
            date: { year: 1040, monthIndex: 6, day: 12 },
            objective: 'Seize control of Toad Town and declare martial law.',
            commander: 'Captain Toadette',
            cells: ['All Cells Mobilized'],
            forces: { friendly: 400, enemy: 150 },
            outcome: 'SUCCESS',
            outcomeDetail: 'Mayor eliminated. Chancellor Toadsworth under house arrest. Martial law declared.',
            casualties: { friendly: 23, enemy: 45 },
            intelGained: [
                'Regency communication records',
                'Financial ledgers showing suspicious payments',
                'List of Regency informants'
            ],
            notes: 'Control of Toad Town secured. Regency forces in disarray. Population largely compliant due to propaganda campaign.'
        },
        {
            id: 'op_gala',
            codename: 'MASQUERADE',
            type: 'intelligence',
            typeLabel: 'Intelligence Gathering',
            status: 'partial',
            classification: 'classified',
            date: { year: 1040, monthIndex: 6, day: 10 },
            objective: 'Infiltrate Fawful\'s victory gala and gather intelligence on his operations.',
            commander: 'Embercap',
            cells: ['Truth Seekers'],
            forces: { friendly: 2, enemy: 'Unknown' },
            outcome: 'MIXED RESULTS',
            outcomeDetail: 'Critical intel obtained from Chief Thornpaw. However, operative Embercap was exposed. Jade Grit killed during extraction.',
            casualties: { friendly: 1, enemy: 2 },
            intelGained: [
                'Thornpaw revelation about secret hatch',
                'Thornpaw\'s relationship with Princess Peach',
                'Partial Fawful troop dispositions'
            ],
            notes: 'The Thornpaw intelligence justifies the cost. Jade Grit\'s sacrifice will be honored. Embercap\'s identity is now burned.',
            martyrs: ['Jade Grit']
        },
        {
            id: 'op_castle_shadow',
            codename: 'HOMECOMING',
            type: 'infiltration',
            typeLabel: 'Deep Infiltration',
            status: 'active',
            classification: 'top-secret',
            date: { year: 1040, monthIndex: 6, day: 20 },
            objective: 'Infiltrate Peach\'s Castle (now under Fawful control) and locate the secret hatch. Recover any hidden documents or evidence.',
            commander: 'Mistveil',
            cells: ['Truth Seekers', 'Vengeance Cell (support)'],
            forces: { friendly: 4, enemy: 'Unknown (estimated 500+)' },
            outcome: 'IN PROGRESS',
            outcomeDetail: 'Operatives in position within Fawful\'s servant staff. Awaiting opportunity to access royal chambers.',
            casualties: { friendly: 0, enemy: 0 },
            intelGained: [],
            notes: 'HIGHEST PRIORITY. The secret hatch may contain evidence that changes everything. Operatives authorized to take extreme measures.',
            priority: 'critical'
        },
        {
            id: 'op_rakasha_alliance',
            codename: 'SPIRIT BOND',
            type: 'diplomatic',
            typeLabel: 'Diplomatic Mission',
            status: 'active',
            classification: 'secret',
            date: { year: 1040, monthIndex: 6, day: 15 },
            objective: 'Establish formal alliance with the Rakasha Clans. Gain access to their intelligence and spiritual resources.',
            commander: 'Mistveil',
            cells: ['Truth Seekers'],
            forces: { friendly: 3, enemy: 0 },
            outcome: 'NEGOTIATIONS ONGOING',
            outcomeDetail: 'Chief Thornpaw is receptive but cautious. The Iron Mandate has made the Rakasha more willing to consider alliance.',
            casualties: { friendly: 0, enemy: 0 },
            intelGained: [
                'Rakasha clan structure',
                'Spirit-Walker capabilities',
                'Ryan\'s vision report'
            ],
            notes: 'The Iron Mandate threatens both our organizations. An alliance would provide spiritual insight and wilderness sanctuaries.'
        },
        {
            id: 'op_vigilance',
            codename: 'SKY FREEDOM',
            type: 'acquisition',
            typeLabel: 'Asset Recovery',
            status: 'planning',
            classification: 'secret',
            date: { year: 1040, monthIndex: 6, day: 21 },
            objective: 'Recapture the airship Vigilance from Iron Legion control or establish alliance with its former crew (Liberated Toads).',
            commander: 'Commander Redcap',
            cells: ['Liberation Front'],
            forces: { friendly: 'TBD', enemy: 'Iron Legion garrison (est. 50)' },
            outcome: 'PLANNING PHASE',
            outcomeDetail: 'Intelligence gathering on Legion disposition. Contact with Liberated Toad survivors being established.',
            casualties: { friendly: 0, enemy: 0 },
            intelGained: [],
            notes: 'The Vigilance would provide crucial air mobility. The Liberated Toads aboard are ideologically compatible. Priority: establish contact with survivors.'
        },
        {
            id: 'op_toadsworth',
            codename: 'CONFESSION',
            type: 'interrogation',
            typeLabel: 'Enhanced Interrogation',
            status: 'active',
            classification: 'top-secret',
            date: { year: 1040, monthIndex: 6, day: 13 },
            objective: 'Extract information from Chancellor Toadsworth regarding his father\'s journals and any knowledge of the assassination cover-up.',
            commander: 'Bloodcap',
            cells: ['Vengeance Cell'],
            forces: { friendly: 4, enemy: 0 },
            outcome: 'ONGOING',
            outcomeDetail: 'Subject is proving resistant. Enhanced techniques authorized but producing limited results. He may genuinely not know.',
            casualties: { friendly: 0, enemy: 0 },
            intelGained: [
                'Confirmation that Toadsworth Sr. journals exist',
                'Location of family vault (already raided)',
                'Names of father\'s closest associates'
            ],
            notes: 'Subject claims ignorance of assassination details. Psychological profile suggests he may be telling the truth about direct knowledge, but is hiding something about the cover-up.',
            ethicalConcerns: true
        }
    ],
    
    // Martyrs Memorial
    martyrs: [
        {
            id: 'jade_grit',
            name: 'Jade Grit',
            rank: 'Operative',
            cell: 'Truth Seekers',
            dateOfDeath: { year: 1040, monthIndex: 6, day: 10 },
            placeOfDeath: 'Fawful\'s Victory Gala, extraction point',
            causeOfDeath: 'Killed by Fawful security forces during extraction',
            yearsOfService: 5,
            operations: 23,
            portrait: '🌸',
            tribute: 'Jade Grit died ensuring her partner Embercap could escape with the Thornpaw intelligence. She held off six guards with nothing but a concealed blade, buying the precious seconds needed for the greatest breakthrough in our investigation in decades.',
            lastWords: '"The Crown endures. Tell them what we found."',
            avenged: false,
            avengersNote: 'Her killers have been identified. Vengeance Cell is tracking them.'
        },
        {
            id: 'commander_puffshroom',
            name: 'Commander Puffshroom',
            rank: 'Cell Leader',
            cell: 'Liberation Front',
            dateOfDeath: { year: 1040, monthIndex: 6, day: 17 },
            placeOfDeath: 'Bramblehaven Fortress, eastern wall breach',
            causeOfDeath: 'Fawful cannon fire while leading the assault',
            yearsOfService: 12,
            operations: 67,
            portrait: '⚔️',
            tribute: 'He was the first through the breach and the last to fall. Commander Puffshroom personally accounted for seventeen enemy soldiers before a direct cannon hit claimed him. His death was avenged a hundredfold that same day.',
            lastWords: '"For the Princess! For the truth!"',
            avenged: true,
            avengersNote: 'The entire Bramblehaven garrison was eliminated in his name.'
        },
        {
            id: 'inkblot',
            name: 'Inkblot',
            rank: 'Operative',
            cell: 'Voice of the Crown',
            dateOfDeath: { year: 1039, monthIndex: 11, day: 3 },
            placeOfDeath: 'Regency Detention Center',
            causeOfDeath: 'Executed after refusing to reveal contacts',
            yearsOfService: 8,
            operations: 0,
            portrait: '📜',
            tribute: 'Captured while running a clandestine printing press. Despite days of torture, Inkblot never revealed a single name. His courage saved a dozen operatives and preserved our propaganda network.',
            lastWords: '"The Princess lives in our hearts forever."',
            avenged: true,
            avengersNote: 'His interrogators were eliminated during the Toad Town coup.'
        },
        {
            id: 'silent_one',
            name: 'The Silent One',
            rank: 'Unknown',
            cell: 'Unknown',
            dateOfDeath: { year: 955, monthIndex: 6, day: 15 },
            placeOfDeath: 'Mushroom Castle, servant passages',
            causeOfDeath: 'Died protecting Lady Bloomia\'s escape',
            yearsOfService: 'Unknown',
            operations: 'Unknown',
            portrait: '🌑',
            tribute: 'A founding martyr whose true name was lost to history. Legend says they held off a dozen assassins while Lady Bloomia escaped with documents that would later form the foundation of our movement. Their identity remains our greatest mystery.',
            lastWords: 'Unknown',
            avenged: false,
            avengersNote: 'We cannot avenge them until we know who killed them. The investigation continues.'
        },
        {
            id: 'captain_goldcap',
            name: 'Captain Goldcap',
            rank: 'Cell Leader',
            cell: 'Liberation Front (former)',
            dateOfDeath: { year: 1020, monthIndex: 8, day: 12 },
            placeOfDeath: 'Bob-omb Battlefield',
            causeOfDeath: 'Killed in action during the Second Koopa War',
            yearsOfService: 25,
            operations: 134,
            portrait: '🎖️',
            tribute: 'Led the Loyalist contingent that fought alongside Regency forces against Bowser, during the brief alliance. He died still believing in the possibility of a united Mushroom Kingdom. His optimism was misplaced, but his courage was not.',
            lastWords: '"Even our enemies can be tools for justice."',
            avenged: true,
            avengersNote: 'The Koopa forces that killed him were destroyed in the same battle.'
        },
        {
            id: 'whisper_three',
            name: 'Whisper-3',
            rank: 'Deep Cover Agent',
            cell: 'Intelligence Division',
            dateOfDeath: { year: 1038, monthIndex: 4, day: 22 },
            placeOfDeath: 'Iron Legion Headquarters',
            causeOfDeath: 'Executed after discovery',
            yearsOfService: 7,
            operations: 1,
            portrait: '👤',
            tribute: 'Spent three years embedded in the Iron Legion as a common soldier, then clerk, then intelligence analyst. Her final transmission warned us of Legion involvement in toad trafficking. She died so that others might be free.',
            lastWords: 'Unknown - final transmission was data only',
            avenged: false,
            avengersNote: 'The Legion officer who exposed her has been identified. He is marked for death.'
        }
    ],
    
    // Sacred Tenets
    tenets: [
        {
            number: 1,
            icon: '👑',
            title: 'The Princess Is Eternal',
            text: 'Princess Peach\'s spirit lives on in every Loyalist heart. We are her legacy, her voice, and her vengeance. Her death was not an ending but a transformation—she watches over us still.',
            interpretation: 'This tenet establishes the quasi-religious nature of the movement. Peach is not merely remembered but deified.'
        },
        {
            number: 2,
            icon: '⚖️',
            title: 'The Truth Must Be Known',
            text: 'We will uncover the truth of her assassination, no matter how long it takes or how many must die. Those who hide the truth are as guilty as those who held the blade.',
            interpretation: 'The investigation is sacred. Anyone who impedes it is considered an enemy, regardless of their other allegiances.'
        },
        {
            number: 3,
            icon: '🗡️',
            title: 'No Mercy for Traitors',
            text: 'Those who benefited from her death forfeit their right to mercy. The Regency, the conspirators, and all who prop up the illegitimate order will face justice.',
            interpretation: 'This tenet justifies the movement\'s most extreme actions, including the Bramblehaven massacre.'
        },
        {
            number: 4,
            icon: '🤝',
            title: 'Brother and Sister in Arms',
            text: 'Every Loyalist is family. We protect our own, we avenge our fallen, and we never leave a comrade behind. Betrayal of a brother or sister is punishable by death.',
            interpretation: 'Internal loyalty is absolute. The movement has never had a successful infiltrator—those discovered are dealt with harshly.'
        },
        {
            number: 5,
            icon: '🔥',
            title: 'The Fire Never Dies',
            text: 'Until the truth is revealed and the guilty are punished, our crusade continues. There is no retirement from this cause. We serve until victory or death.',
            interpretation: 'Loyalists serve for life. Leaving the movement is impossible—you either die in service or die trying to leave.'
        },
        {
            number: 6,
            icon: '🌹',
            title: 'Remember the Rose',
            text: 'The rose was her symbol—beautiful, but with thorns. We carry her beauty in our hearts and her thorns in our hands. Let our enemies learn why roses bleed.',
            interpretation: 'The rose is the movement\'s sacred symbol. It appears on all communications and is left at the scenes of assassinations.'
        }
    ],
    
    // Relationship Map
    relationships: [
        {
            faction: 'Mushroom Regency',
            status: 'hostile',
            icon: '🍄',
            description: 'Our primary enemy. They stole power in the chaos following the assassination and have maintained the cover-up for 85 years.',
            recentDevelopments: 'Toad Town coup has shattered their control. Chancellor Toadsworth in custody.'
        },
        {
            faction: 'Fawful\'s Forces',
            status: 'hostile',
            icon: '😈',
            description: 'An opportunistic usurper who seized the Princess\'s castle. He may have found evidence we need.',
            recentDevelopments: 'Bramblehaven destroyed. Castle infiltration underway.'
        },
        {
            faction: 'Koopa Troop',
            status: 'complicated',
            icon: '🐢',
            description: 'Traditionally blamed for the assassination, but evidence suggests Bowser may be innocent of this crime. Potential ally of convenience.',
            recentDevelopments: 'Bowser\'s capture by unknown parties creates uncertainty.'
        },
        {
            faction: 'Rakasha Clans',
            status: 'ally', // CHANGED from potential-ally
            icon: '🐾',
            description: 'Allied via the Spirit Bond Pact. We protect their interests in Rogueport; they provide intelligence and sanctuary.',
            recentDevelopments: 'Formal pact sealed at the Festival of the Fallen.'
        },
        {
            faction: 'Liberated Toads',
            status: 'potential-ally',
            icon: '🍄',
            description: 'Fellow freedom fighters with compatible goals. The Vigilance crew could be valuable allies.',
            recentDevelopments: 'Operation SKY FREEDOM aims to establish contact and alliance.'
        },
        {
            faction: 'Iron Legion',
            status: 'hostile',
            icon: '⚔️',
            description: 'Mercenary scum who serve the highest bidder. Currently holding the Vigilance and hunting our potential allies.',
            recentDevelopments: 'Iron Mandate makes them dangerous to all resistance movements.'
        },
        {
            faction: 'Regal Empire',
            status: 'neutral',
            icon: '🏰',
            description: 'They observe and document but rarely intervene. Their war crimes investigation is inconvenient but manageable.',
            recentDevelopments: 'Supernatural Sovereignty Act does not directly affect us, but allies like Rakasha are threatened.'
        }
    ]
};

// =============================================
// STATE MANAGEMENT  
// =============================================

let currentView = 'investigation';
let selectedEvidence = null;
let selectedOperation = null;
let selectedMartyr = null;
let selectedAgent = null;
let localDebugMode = false;

/**
 * Gets the current intel level for the Peach Loyalists faction
 */
function getIntelLevel() {
    if (state.debugMode || localDebugMode) {
        return 100;
    }
    
    if (state.intelLevels) {
        return state.intelLevels.peach_loyalists ?? 
               state.intelLevels['Peach Loyalists'] ??
               state.intelLevels.loyalists ?? 
               35;
    }
    
    return 35;
}

/**
 * Checks if content should be visible based on intel level
 */
function meetsIntelRequirement(required) {
    return getIntelLevel() >= (required || 0);
}

/**
 * Checks if we're in full reveal mode
 */
function isFullReveal() {
    return getIntelLevel() >= 100;
}

// =============================================
// INITIALIZATION
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Loyalists] Initializing system...');
    console.log('[Loyalists] Current intel level:', getIntelLevel());
    
    initViewControls();
    initDebugToggle();
    updateIntelDisplay();
    renderCurrentView();
    initModalHandlers();
});

function initViewControls() {
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            renderCurrentView();
        });
    });
}

function initDebugToggle() {
    const debugBtn = document.getElementById('debug-toggle');
    if (debugBtn) {
        if (state.debugMode) {
            localDebugMode = true;
            debugBtn.classList.add('active');
        }
        
        debugBtn.addEventListener('click', () => {
            localDebugMode = !localDebugMode;
            if (typeof state.debugMode !== 'undefined') {
                state.debugMode = localDebugMode;
            }
            
            debugBtn.classList.toggle('active', localDebugMode);
            updateIntelDisplay();
            renderCurrentView();
        });
    }
}

function updateIntelDisplay() {
    const intelEl = document.getElementById('intel-level');
    if (intelEl) {
        const level = getIntelLevel();
        intelEl.textContent = level;
        
        const banner = document.querySelector('.intel-warning-banner');
        if (level >= 100) {
            banner.classList.add('full-access');
            banner.querySelector('.warning-text').innerHTML = 
                '<span class="full-access-text">FULL CLEARANCE — All classified materials accessible</span>';
        } else {
            banner.classList.remove('full-access');
        }
    }
}

function initModalHandlers() {
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
        }
    });
}

// =============================================
// VIEW RENDERING
// =============================================

function renderCurrentView() {
    document.querySelectorAll('.loyalist-view').forEach(v => v.classList.remove('active'));
    
    const currentViewEl = document.getElementById(`view-${currentView}`);
    if (currentViewEl) {
        currentViewEl.classList.add('active');
    }
    
    switch(currentView) {
        case 'investigation':
            renderInvestigationBoard();
            break;
        case 'cells':
            renderCellNetwork();
            break;
        case 'operations':
            renderOperations();
            break;
        case 'martyrs':
            renderMartyrs();
            break;
        case 'tenets':
            renderTenets();
            break;
    }
}

// =============================================
// INVESTIGATION BOARD
// =============================================
function renderInvestigationBoard() {
    const container = document.getElementById('investigation-board');
    if (!container) return;
    
    const intel = getIntelLevel();
    const data = LOYALIST_DATA.investigation;
    
    // Filter breakthroughs based on intel
    const visibleBreakthroughs = data.breakthroughs.filter(b => meetsIntelRequirement(b.intelRequired));
    
    let html = `
        <div class="investigation-header">
            <div class="central-subject">
                <div class="subject-portrait">${data.centralSubject.icon}</div>
                <div class="subject-info">
                    <h3>${data.centralSubject.name}</h3>
                    <span class="subject-date">Assassinated: ${data.centralSubject.date}</span>
                </div>
            </div>
            <p class="subject-description">${data.centralSubject.description}</p>
        </div>
        
        <div class="breakthroughs-timeline">
            <h4>Recent Breakthroughs</h4>
            ${visibleBreakthroughs.length > 0 ? `
                <div class="breakthrough-list">
                    ${visibleBreakthroughs.map(b => `
                        <div class="breakthrough-item ${b.critical ? 'critical' : ''}">
                            <span class="breakthrough-date">${formatDate(b.date)}</span>
                            <span class="breakthrough-title">${b.title}</span>
                            ${b.critical ? '<span class="breakthrough-badge">CRITICAL</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="no-breakthroughs">
                    <p>Insufficient intel clearance to view breakthroughs. Current level: ${intel}%</p>
                </div>
            `}
        </div>
        
        <div class="evidence-clusters">
            ${data.evidenceClusters.map(cluster => renderEvidenceCluster(cluster, intel)).join('')}
        </div>
    `;
    
    container.innerHTML = html;
    initEvidenceInteractions();
}

function renderEvidenceCluster(cluster, intel) {
    const visibleNodes = cluster.nodes.filter(n => meetsIntelRequirement(n.intelRequired));
    const hiddenCount = cluster.nodes.length - visibleNodes.length;
    
    return `
        <div class="evidence-cluster" data-cluster="${cluster.id}">
            <div class="cluster-header">
                <span class="cluster-icon">${cluster.icon}</span>
                <h4 class="cluster-title">${cluster.category}</h4>
                
                <!-- Right side controls -->
                <div class="cluster-meta">
                    <span class="cluster-count">${visibleNodes.length} items</span>
                    ${hiddenCount > 0 ? `<span class="cluster-hidden">+${hiddenCount} classified</span>` : ''}
                    <button class="cluster-close-btn" onclick="this.closest('.evidence-cluster').remove()" title="Hide Panel">×</button>
                </div>
            </div>
            <div class="cluster-nodes">
                ${visibleNodes.length > 0 ? 
                    visibleNodes.map(node => renderEvidenceNode(node)).join('') :
                    '<div class="no-nodes">No evidence accessible at current intel level.</div>'
                }
            </div>
        </div>
    `;
}
 
function renderEvidenceNode(node) {
    const statusClass = `status-${node.status}`;
    
    return `
        <div class="evidence-node ${statusClass}" data-node="${node.id}">
            <span class="node-icon">${node.icon}</span>
            <span class="node-label">${node.label}</span>
            <span class="node-status">${node.status.toUpperCase()}</span>
        </div>
    `;
}

function initEvidenceInteractions() {
    document.querySelectorAll('.evidence-node').forEach(node => {
        node.addEventListener('click', () => {
            const nodeId = node.dataset.node;
            openEvidenceModal(nodeId);
        });
    });
}

function openEvidenceModal(nodeId) {
    // Find the node across all clusters
    let nodeData = null;
    for (const cluster of LOYALIST_DATA.investigation.evidenceClusters) {
        const found = cluster.nodes.find(n => n.id === nodeId);
        if (found) {
            nodeData = found;
            break;
        }
    }
    
    if (!nodeData) return;
    
    const modal = document.getElementById('evidence-modal');
    const body = document.getElementById('evidence-modal-body');
    
    const statusClass = `status-${nodeData.status}`;
    
    body.innerHTML = `
        <div class="evidence-detail">
            <div class="evidence-header">
                <span class="evidence-icon">${nodeData.icon}</span>
                <div class="evidence-title-block">
                    <h3>${nodeData.label}</h3>
                    <span class="evidence-status ${statusClass}">${nodeData.status.toUpperCase()}</span>
                </div>
            </div>
            
            <div class="evidence-meta">
                <div class="meta-item">
                    <span class="meta-label">Discovered:</span>
                    <span class="meta-value">${formatDate(nodeData.discoveredDate)}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Source:</span>
                    <span class="meta-value">${nodeData.discoveredBy}</span>
                </div>
            </div>
            
            <div class="evidence-description">
                <p>${nodeData.description}</p>
            </div>
            
            <div class="evidence-implications">
                <h4>Implications</h4>
                <ul>
                    ${nodeData.implications.map(imp => `<li>${imp}</li>`).join('')}
                </ul>
            </div>
            
            ${nodeData.connections.length > 0 ? `
                <div class="evidence-connections">
                    <h4>Connected Evidence</h4>
                    <div class="connection-tags">
                        ${nodeData.connections.map(conn => `
                            <span class="connection-tag" data-connection="${conn}">${conn.replace(/_/g, ' ')}</span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'flex';
    
    // Add connection click handlers
    body.querySelectorAll('.connection-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            modal.style.display = 'none';
            openEvidenceModal(tag.dataset.connection);
        });
    });
}

// =============================================
// CELL NETWORK
// =============================================

function renderCellNetwork() {
    const container = document.getElementById('cell-network');
    if (!container) return;
    
    const cells = LOYALIST_DATA.cells;
    const intel = getIntelLevel();
    
    let html = `
        <div class="network-section high-command">
            <h3 class="section-title">
                <span class="title-icon">👑</span>
                High Command
            </h3>
            <div class="command-grid">
                ${cells.highCommand
                    .filter(c => meetsIntelRequirement(c.intelRequired))
                    .map(agent => renderAgentCard(agent, 'command')).join('')}
            </div>
        </div>
        
        <div class="network-section cell-leaders">
            <h3 class="section-title">
                <span class="title-icon">⭐</span>
                Cell Leaders
            </h3>
            <div class="leaders-grid">
                ${cells.cellLeaders
                    .filter(c => meetsIntelRequirement(c.intelRequired))
                    .map(agent => renderAgentCard(agent, 'leader')).join('')}
            </div>
        </div>
        
        <div class="network-section operational-cells">
            <h3 class="section-title">
                <span class="title-icon">🔷</span>
                Operational Cells
            </h3>
            <div class="cells-grid">
                ${cells.operationalCells.map(cell => renderCellCard(cell)).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    initAgentInteractions();
}

function renderAgentCard(agent, type) {
    const statusClass = agent.status === 'active' ? 'active' : 
                        agent.status === 'compromised' ? 'compromised' : 'inactive';
    
    return `
        <div class="agent-card ${type} ${statusClass}" data-agent="${agent.id}">
            <div class="agent-portrait">${agent.icon}</div>
            <div class="agent-info">
                <div class="agent-name">${agent.name}</div>
                <div class="agent-codename">${agent.codename}</div>
                <div class="agent-role">${agent.role}</div>
            </div>
            <div class="agent-status-badge ${statusClass}">${agent.status}</div>
        </div>
    `;
}

function renderCellCard(cell) {
    const statusClass = cell.status === 'active' ? 'active' : 
                        cell.status === 'deployed' ? 'deployed' : 'inactive';
    
    return `
        <div class="cell-card ${statusClass}">
            <div class="cell-header">
                <span class="cell-icon">${cell.icon}</span>
                <div class="cell-title">
                    <div class="cell-name">${cell.name}</div>
                    <div class="cell-codename">${cell.codename}</div>
                </div>
            </div>
            <div class="cell-specialty">${cell.specialty}</div>
            <div class="cell-stats">
                <span class="cell-stat">
                    <span class="stat-icon">👥</span>
                    ${cell.members} operatives
                </span>
                <span class="cell-stat">
                    <span class="stat-icon">💀</span>
                    ${cell.killCount} kills
                </span>
            </div>
            <div class="cell-leader">Leader: ${cell.leader}</div>
            <p class="cell-description">${cell.description}</p>
            <div class="cell-status ${statusClass}">${cell.status}${cell.statusDetail ? ` - ${cell.statusDetail}` : ''}</div>
        </div>
    `;
}

function initAgentInteractions() {
    document.querySelectorAll('.agent-card').forEach(card => {
        card.addEventListener('click', () => {
            const agentId = card.dataset.agent;
            openAgentModal(agentId);
        });
    });
}

function openAgentModal(agentId) {
    // Find agent in high command or cell leaders
    let agentData = LOYALIST_DATA.cells.highCommand.find(a => a.id === agentId);
    if (!agentData) {
        agentData = LOYALIST_DATA.cells.cellLeaders.find(a => a.id === agentId);
    }
    
    if (!agentData) return;
    
    const modal = document.getElementById('agent-modal');
    const body = document.getElementById('agent-modal-body');
    
    const statusClass = agentData.status === 'active' ? 'active' : 
                        agentData.status === 'compromised' ? 'compromised' : 'inactive';
    
    body.innerHTML = `
        <div class="agent-detail">
            <div class="agent-profile">
                <div class="profile-portrait">${agentData.icon}</div>
                <div class="profile-info">
                    <h3>${agentData.name}</h3>
                    <div class="profile-codename">Codename: ${agentData.codename}</div>
                    <div class="profile-role">${agentData.role}</div>
                    <div class="profile-status ${statusClass}">Status: ${agentData.status}</div>
                    ${agentData.statusDetail ? `<div class="profile-status-detail">${agentData.statusDetail}</div>` : ''}
                </div>
            </div>
            
            <div class="agent-bio">
                <h4>Background</h4>
                <p>${agentData.bio}</p>
                ${agentData.personality ? `<p class="personality"><strong>Personality:</strong> ${agentData.personality}</p>` : ''}
            </div>
            
            <div class="agent-stats-grid">
                <div class="stat-box">
                    <span class="stat-value">${agentData.stats.operations}</span>
                    <span class="stat-label">Operations</span>
                </div>
                <div class="stat-box">
                    <span class="stat-value">${agentData.stats.yearsActive}</span>
                    <span class="stat-label">Years Active</span>
                </div>
                <div class="stat-box">
                    <span class="stat-value">${agentData.stats.directKills}</span>
                    <span class="stat-label">Confirmed Kills</span>
                </div>
            </div>
            
            <div class="agent-actions">
                <h4>Recent Actions</h4>
                <ul class="action-list">
                    ${agentData.recentActions.map(action => `<li>${action}</li>`).join('')}
                </ul>
            </div>
            
            ${agentData.quote ? `
                <div class="agent-quote">
                    <blockquote>"${agentData.quote}"</blockquote>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'flex';
}

// =============================================
// OPERATIONS
// =============================================

function renderOperations() {
    const container = document.getElementById('operations-list');
    if (!container) return;
    
    const ops = LOYALIST_DATA.operations;
    const intel = getIntelLevel();
    
    // Group operations by status
    const activeOps = ops.filter(o => o.status === 'active' || o.status === 'planning');
    const completedOps = ops.filter(o => o.status === 'completed' || o.status === 'partial');
    const failedOps = ops.filter(o => o.status === 'failed');
    
    let html = `
        <div class="ops-section active-ops">
            <h3 class="section-header">
                <span class="header-icon">🔴</span>
                Active Operations
                <span class="section-count">${activeOps.length}</span>
            </h3>
            <div class="ops-grid">
                ${activeOps.map(op => renderOperationCard(op, intel)).join('')}
            </div>
        </div>
        
        <div class="ops-section completed-ops">
            <h3 class="section-header">
                <span class="header-icon">✅</span>
                Completed Operations
                <span class="section-count">${completedOps.length}</span>
            </h3>
            <div class="ops-grid">
                ${completedOps.map(op => renderOperationCard(op, intel)).join('')}
            </div>
        </div>
        
        ${failedOps.length > 0 ? `
            <div class="ops-section failed-ops">
                <h3 class="section-header">
                    <span class="header-icon">❌</span>
                    Failed/Compromised Operations
                    <span class="section-count">${failedOps.length}</span>
                </h3>
                <div class="ops-grid">
                    ${failedOps.map(op => renderOperationCard(op, intel)).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    container.innerHTML = html;
    initOperationInteractions();
}

function renderOperationCard(op, intel) {
    const typeIcons = {
        military: '⚔️',
        political: '🏛️',
        intelligence: '🔍',
        infiltration: '👤',
        diplomatic: '🤝',
        acquisition: '📦',
        interrogation: '💬'
    };
    
    const statusClass = op.status;
    const classificationClass = op.classification || 'standard';
    
    return `
        <div class="operation-card ${statusClass}" data-op="${op.id}">
            <div class="op-header">
                <span class="op-type-icon">${typeIcons[op.type] || '📋'}</span>
                <div class="op-title">
                    <div class="op-codename">${op.codename}</div>
                    <div class="op-type">${op.typeLabel}</div>
                </div>
                <span class="op-classification ${classificationClass}">${op.classification?.toUpperCase() || 'STANDARD'}</span>
            </div>
            
            <div class="op-date">${formatDate(op.date)}</div>
            
            <div class="op-objective">${op.objective}</div>
            
            <div class="op-outcome">
                <span class="outcome-label">Outcome:</span>
                <span class="outcome-value ${statusClass}">${op.outcome}</span>
            </div>
            
            ${op.warCrimesFlag ? '<div class="op-warning">⚠️ War crimes allegations pending</div>' : ''}
            ${op.priority === 'critical' ? '<div class="op-priority">🔴 CRITICAL PRIORITY</div>' : ''}
        </div>
    `;
}

function initOperationInteractions() {
    document.querySelectorAll('.operation-card').forEach(card => {
        card.addEventListener('click', () => {
            const opId = card.dataset.op;
            openOperationModal(opId);
        });
    });
}

function openOperationModal(opId) {
    const opData = LOYALIST_DATA.operations.find(o => o.id === opId);
    if (!opData) return;
    
    const modal = document.getElementById('operation-modal');
    const body = document.getElementById('operation-modal-body');
    
    body.innerHTML = `
        <div class="operation-detail">
            <div class="op-detail-header">
                <h3>Operation ${opData.codename}</h3>
                <span class="op-detail-classification ${opData.classification}">${opData.classification?.toUpperCase()}</span>
            </div>
            
            <div class="op-meta-grid">
                <div class="meta-item">
                    <span class="meta-label">Type</span>
                    <span class="meta-value">${opData.typeLabel}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Status</span>
                    <span class="meta-value status-${opData.status}">${opData.status.toUpperCase()}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Date</span>
                    <span class="meta-value">${formatDate(opData.date)}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Commander</span>
                    <span class="meta-value">${opData.commander}</span>
                </div>
            </div>
            
            <div class="op-section">
                <h4>Objective</h4>
                <p>${opData.objective}</p>
            </div>
            
            <div class="op-section">
                <h4>Participating Cells</h4>
                <div class="cell-tags">
                    ${opData.cells.map(cell => `<span class="cell-tag">${cell}</span>`).join('')}
                </div>
            </div>
            
            <div class="op-section">
                <h4>Force Disposition</h4>
                <div class="force-grid">
                    <div class="force-item friendly">
                        <span class="force-label">Friendly Forces</span>
                        <span class="force-value">${opData.forces.friendly}</span>
                    </div>
                    <div class="force-item enemy">
                        <span class="force-label">Enemy Forces</span>
                        <span class="force-value">${opData.forces.enemy}</span>
                    </div>
                </div>
            </div>
            
            <div class="op-section outcome-section">
                <h4>Outcome</h4>
                <div class="outcome-badge ${opData.status}">${opData.outcome}</div>
                <p>${opData.outcomeDetail}</p>
            </div>
            
            <div class="op-section casualties-section">
                <h4>Casualties</h4>
                <div class="casualty-grid">
                    <div class="casualty-item friendly">
                        <span class="casualty-label">Friendly</span>
                        <span class="casualty-value">${opData.casualties.friendly}</span>
                    </div>
                    <div class="casualty-item enemy">
                        <span class="casualty-label">Enemy</span>
                        <span class="casualty-value">${opData.casualties.enemy}</span>
                    </div>
                </div>
            </div>
            
            ${opData.intelGained && opData.intelGained.length > 0 ? `
                <div class="op-section intel-section">
                    <h4>Intelligence Gained</h4>
                    <ul class="intel-list">
                        ${opData.intelGained.map(intel => `<li>${intel}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            ${opData.martyrs && opData.martyrs.length > 0 ? `
                <div class="op-section martyrs-section">
                    <h4>Fallen Comrades</h4>
                    <div class="martyr-names">
                        ${opData.martyrs.map(m => `<span class="martyr-name">🌸 ${m}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="op-section notes-section">
                <h4>Commander's Notes</h4>
                <p class="op-notes">${opData.notes}</p>
            </div>
            
            ${opData.warCrimesFlag ? `
                <div class="op-warning-box">
                    <span class="warning-icon">⚠️</span>
                    <span class="warning-text">This operation is under investigation for potential war crimes by the Regal Empire.</span>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'flex';
}

// =============================================
// MARTYRS MEMORIAL
// =============================================

function renderMartyrs() {
    const container = document.getElementById('martyrs-memorial');
    if (!container) return;
    
    const martyrs = LOYALIST_DATA.martyrs;
    
    let html = `
        <div class="memorial-header">
            <div class="memorial-flame">🕯️</div>
            <h3>In Memoriam</h3>
            <p class="memorial-quote">"They gave everything for the truth. We will not forget."</p>
        </div>
        
        <div class="martyrs-grid">
            ${martyrs.map(martyr => renderMartyrCard(martyr)).join('')}
        </div>
        
        <div class="memorial-footer">
            <div class="total-fallen">
                <span class="fallen-count">${martyrs.length}</span>
                <span class="fallen-label">Named Martyrs</span>
            </div>
            <div class="total-fallen">
                <span class="fallen-count">2,847</span>
                <span class="fallen-label">Total Fallen (85 Years)</span>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    initMartyrInteractions();
}

function renderMartyrCard(martyr) {
    const avengedClass = martyr.avenged ? 'avenged' : 'unavenged';
    
    return `
        <div class="martyr-card ${avengedClass}" data-martyr="${martyr.id}">
            <div class="martyr-portrait">${martyr.portrait}</div>
            <div class="martyr-info">
                <div class="martyr-name">${martyr.name}</div>
                <div class="martyr-rank">${martyr.rank} - ${martyr.cell}</div>
                <div class="martyr-death">${formatDate(martyr.dateOfDeath)}</div>
            </div>
            <div class="martyr-avenged ${avengedClass}">
                ${martyr.avenged ? '✓ AVENGED' : '⚔️ VENGEANCE PENDING'}
            </div>
        </div>
    `;
}

function initMartyrInteractions() {
    document.querySelectorAll('.martyr-card').forEach(card => {
        card.addEventListener('click', () => {
            const martyrId = card.dataset.martyr;
            openMartyrModal(martyrId);
        });
    });
}

function openMartyrModal(martyrId) {
    const martyrData = LOYALIST_DATA.martyrs.find(m => m.id === martyrId);
    if (!martyrData) return;
    
    const modal = document.getElementById('martyr-modal');
    const body = document.getElementById('martyr-modal-body');
    
    const avengedClass = martyrData.avenged ? 'avenged' : 'unavenged';
    
    body.innerHTML = `
        <div class="martyr-detail">
            <div class="martyr-header">
                <div class="martyr-large-portrait">${martyrData.portrait}</div>
                <div class="martyr-header-info">
                    <h3>${martyrData.name}</h3>
                    <div class="martyr-subtitle">${martyrData.rank}</div>
                    <div class="martyr-cell">${martyrData.cell}</div>
                </div>
            </div>
            
            <div class="martyr-meta">
                <div class="meta-item">
                    <span class="meta-label">Date of Death</span>
                    <span class="meta-value">${formatDate(martyrData.dateOfDeath)}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Place of Death</span>
                    <span class="meta-value">${martyrData.placeOfDeath}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Cause of Death</span>
                    <span class="meta-value">${martyrData.causeOfDeath}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Years of Service</span>
                    <span class="meta-value">${martyrData.yearsOfService}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Operations</span>
                    <span class="meta-value">${martyrData.operations}</span>
                </div>
            </div>
            
            <div class="martyr-tribute">
                <h4>Tribute</h4>
                <p>${martyrData.tribute}</p>
            </div>
            
            ${martyrData.lastWords !== 'Unknown' ? `
                <div class="martyr-last-words">
                    <h4>Last Words</h4>
                    <blockquote>"${martyrData.lastWords}"</blockquote>
                </div>
            ` : ''}
            
            <div class="martyr-vengeance ${avengedClass}">
                <h4>Vengeance Status</h4>
                <div class="vengeance-status">
                    ${martyrData.avenged ? '✓ AVENGED' : '⚔️ VENGEANCE PENDING'}
                </div>
                <p class="vengeance-note">${martyrData.avengersNote}</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// =============================================
// SACRED TENETS
// =============================================

// =============================================
// SACRED TENETS (continued)
// =============================================

function renderTenets() {
    const container = document.getElementById('tenets-display');
    if (!container) return;
    
    const tenets = LOYALIST_DATA.tenets;
    const intel = getIntelLevel();
    
    let html = `
        <div class="tenets-header">
            <div class="tenets-symbol">🌸</div>
            <h3>The Six Sacred Tenets</h3>
            <p class="tenets-intro">These are the principles that guide every Loyalist. They are learned upon induction and recited before every operation.</p>
        </div>
        
        <div class="tenets-scroll">
            ${tenets.map(tenet => renderTenet(tenet, intel)).join('')}
        </div>
        
        <div class="tenets-oath">
            <h4>The Induction Oath</h4>
            <div class="oath-text">
                <p>"I swear by the Crown that endures,</p>
                <p>By the blood of martyrs before me,</p>
                <p>By the thorns that guard the rose—</p>
                <p>To seek the truth until my dying breath,</p>
                <p>To avenge those who cannot avenge themselves,</p>
                <p>To never rest until justice is done.</p>
                <p>The Princess watches. The Princess remembers.</p>
                <p><strong>The Crown endures.</strong>"</p>
            </div>
        </div>
        
        <div class="tenets-footer">
            <div class="rose-symbol">🌹</div>
            <p class="footer-quote">"We are the thorns. Let our enemies bleed."</p>
        </div>
    `;
    
    container.innerHTML = html;
}

function renderTenet(tenet, intel) {
    const showInterpretation = intel >= 70;
    
    return `
        <div class="tenet-card" data-tenet="${tenet.number}">
            <div class="tenet-number">${tenet.number}</div>
            <div class="tenet-icon">${tenet.icon}</div>
            <div class="tenet-content">
                <h4 class="tenet-title">${tenet.title}</h4>
                <p class="tenet-text">${tenet.text}</p>
                ${showInterpretation ? `
                    <div class="tenet-interpretation">
                        <span class="interpretation-label">Intelligence Analysis:</span>
                        <p>${tenet.interpretation}</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// =============================================
// RELATIONSHIPS VIEW
// =============================================

function renderRelationships() {
    const container = document.getElementById('relationships-map');
    if (!container) return;
    
    const relationships = LOYALIST_DATA.relationships;
    
    let html = `
        <div class="relationships-header">
            <h3>Faction Relations</h3>
            <p class="relationships-intro">Current diplomatic and hostile relationships as maintained by Loyalist Intelligence.</p>
        </div>
        
        <div class="relationships-grid">
            ${relationships.map(rel => renderRelationshipCard(rel)).join('')}
        </div>
        
        <div class="relationships-legend">
            <div class="legend-item hostile"><span class="legend-dot"></span> Hostile</div>
            <div class="legend-item neutral"><span class="legend-dot"></span> Neutral</div>
            <div class="legend-item complicated"><span class="legend-dot"></span> Complicated</div>
            <div class="legend-item potential-ally"><span class="legend-dot"></span> Potential Ally</div>
        </div>
    `;
    
    container.innerHTML = html;
}

function renderRelationshipCard(rel) {
    return `
        <div class="relationship-card ${rel.status}">
            <div class="rel-header">
                <span class="rel-icon">${rel.icon}</span>
                <div class="rel-title">
                    <h4>${rel.faction}</h4>
                    <span class="rel-status">${rel.status.replace('-', ' ').toUpperCase()}</span>
                </div>
            </div>
            <p class="rel-description">${rel.description}</p>
            <div class="rel-developments">
                <span class="dev-label">Recent:</span>
                <span class="dev-text">${rel.recentDevelopments}</span>
            </div>
        </div>
    `;
}

// =============================================
// UTILITY FUNCTIONS
// =============================================

function formatDate(dateObj) {
    if (!dateObj || typeof dateObj !== 'object') return 'Unknown Date';
    
    // Validate bounds
    const safeMonthIndex = Math.max(0, Math.min(dateObj.monthIndex, CALENDAR_DATA.months.values.length - 1));
    
    // Get month name from CALENDAR_DATA
    const monthData = CALENDAR_DATA.months.values[safeMonthIndex];
    const monthName = monthData ? monthData.name : `Month ${dateObj.monthIndex + 1}`;
    
    // Determine suffix (We removed "BF" as 1040 is the current era)
    return `${monthName} ${dateObj.day}, ${dateObj.year}`;
}

function formatDateTime(dateObj) {
    if (!dateObj) return 'Unknown';
    
    const date = formatDate(dateObj);
    if (dateObj.hour !== undefined) {
        const hour = dateObj.hour.toString().padStart(2, '0');
        const minute = (dateObj.minute || 0).toString().padStart(2, '0');
        return `${date} @ ${hour}:${minute}`;
    }
    return date;
}
function getDaysAgo(dateObj) {
    if (!dateObj) return null;
    
    const current = CURRENT_GAME_DATE;
    
    // Calculate distinct days (Simplified approximation assuming 30 days/month for performance)
    // For exact precision including the 35-day month, you would iterate the month array.
    const daysPerYear = 365;
    const daysPerMonth = 30;
    
    const currentTotal = (current.year * daysPerYear) + (current.monthIndex * daysPerMonth) + current.day;
    const targetTotal = (dateObj.year * daysPerYear) + (dateObj.monthIndex * daysPerMonth) + dateObj.day;
    
    return currentTotal - targetTotal;
}

function getTimeAgoString(dateObj) {
    const days = getDaysAgo(dateObj);
    if (days === null) return '';
    
    if (days < 0) return 'In the future';
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;
    if (days >= 365) {
        const years = Math.floor(days / 365);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }
    return formatDate(dateObj);
}

// =============================================
// EXPORTS
// =============================================

export function refreshLoyalistDisplay() {
    updateIntelDisplay();
    renderCurrentView();
}

export function setLoyalistIntel(level) {
    if (state.intelLevels) {
        state.intelLevels.peach_loyalists = Math.max(0, Math.min(100, level));
        refreshLoyalistDisplay();
    }
}

export function getLoyalistStatus() {
    return {
        currentView,
        intelLevel: getIntelLevel(),
        debugMode: localDebugMode || state.debugMode,
        selectedEvidence,
        selectedOperation
    };
}