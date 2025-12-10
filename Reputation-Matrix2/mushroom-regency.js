// =============================================
// MUSHROOM REGENCY FACTION SYSTEM
// =============================================

import { state } from './state.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from './calendar-data.js';

// =============================================
// DATA DEFINITIONS
// =============================================

const REGENCY_DATA = {
    // Faction Overview
    overview: {
        name: 'Mushroom Regency',
        motto: 'Order Through Stewardship',
        founded: 955,
        icon: '🍄',
        description: 'The provisional government established in the wake of Princess Peach\'s assassination. For 85 years, the Regency has maintained order, defended against external threats, and governed the Mushroom Kingdom in the absence of a legitimate heir. Critics call them usurpers; supporters call them saviors. The truth, as always, lies buried beneath layers of official narrative.',
        currentStatus: 'GOVERNMENT IN EXILE — Capital under hostile occupation',
        leadership: 'Chancellor Toadsworth III (Detained)',
        headquarters: 'Toad Town Administrative Complex (Occupied)',
        legitimacy: 'Contested — No royal succession established',
        alignment: 'Lawful Neutral'
    },

    // Government Structure
    government: {
        executive: {
            title: 'The Chancellery',
            description: 'The executive branch of the Regency, responsible for all major policy decisions and kingdom-wide administration. The Chancellery has maintained unbroken control since the Emergency Succession Act of 955—an act drafted, curiously, three days before the assassination.',
            icon: '🏛️',
            officials: [
                {
                    id: 'toadsworth_iii',
                    name: 'Chancellor Toadsworth III',
                    title: 'Supreme Chancellor',
                    icon: '👔',
                    status: 'detained',
                    statusDetail: 'Under house arrest by Loyalist forces since Day 12',
                    intelRequired: 15,
                    tenure: '1015 - Present (25 years)',
                    bio: 'The third generation of Toadsworths to serve the kingdom. Unlike his grandfather who served Princess Peach directly, he has only known the Regency. A pragmatic administrator who prioritized stability over reform. His grandfather\'s personal journals remain sealed by family order—a decision that has drawn Loyalist attention. He claims ignorance of their contents, though staff report he spent three sleepless nights reading them upon his father\'s death.',
                    personality: 'Cautious, traditionalist, conflict-averse. His critics call him weak; his supporters call him steady. Those who know him well say he carries a burden he refuses to name.',
                    achievements: [
                        'Negotiated the Treaty of Beanbean (1025)',
                        'Established the Merchant Guild compact',
                        'Maintained peace with Koopa Kingdom for 12 years',
                        'Expanded infrastructure throughout rural territories'
                    ],
                    controversies: [
                        'Refused to release classified assassination files despite multiple petitions',
                        'Suppressed Loyalist protests (1032 Toad Square Incident)',
                        'Increased taxes on outer territories',
                        'Failed to prevent Fawful\'s rise',
                        'Ordered the sealing of his grandfather\'s private study—contents inventoried but never disclosed'
                    ],
                    quote: '"We are caretakers, not conquerors. Our duty is to preserve what remains until... until a better path reveals itself. Some doors, once opened, cannot be closed again."'
                },
                {
                    id: 'vice_chancellor_caps',
                    name: 'Vice Chancellor Greycaps',
                    title: 'Vice Chancellor',
                    icon: '📋',
                    status: 'missing',
                    statusDetail: 'Fled Toad Town during coup. Location unknown.',
                    intelRequired: 25,
                    tenure: '1028 - Present',
                    bio: 'A career bureaucrat who rose through the Treasury before being appointed Vice Chancellor. Known for meticulous record-keeping and an encyclopedic knowledge of kingdom finances. His disappearance during the coup has sparked rumors—did he flee, or was he extracted? Treasury auditors note he had been quietly researching expenditures from 954-956 in the months before the crisis. What he found, if anything, left with him.',
                    personality: 'Methodical, secretive, obsessed with documentation. Colleagues say he trusted paper more than people.',
                    achievements: [
                        'Reformed the taxation system (1030)',
                        'Uncovered embezzlement in Public Works',
                        'Created the Emergency Reserve Fund'
                    ],
                    controversies: [
                        'Rumored to maintain "shadow archives" of documents deemed too sensitive for official records',
                        'Connections to banking interests in Rogueport—where many 955-era officials retired',
                        'Vanished with unknown documents during coup',
                        'His assistant found dead three days after his disappearance—ruled "accidental"'
                    ],
                    quote: '"Every coin tells a story. Every ledger reveals a truth. You simply have to know where to look—and have the courage to follow where the numbers lead."'
                },
                {
                    id: 'secretary_bloom',
                    name: 'Secretary Bloomsworth',
                    title: 'Secretary of State',
                    icon: '🌷',
                    status: 'active',
                    statusDetail: 'Operating from Sarasaland diplomatic mission',
                    intelRequired: 30,
                    tenure: '1035 - Present',
                    bio: 'The Regency\'s chief diplomat, currently the highest-ranking official still at liberty. She has taken on the role of acting government-in-exile leader from the Sarasaland embassy. A skilled negotiator with deep ties to Princess Daisy\'s court. Her family name has raised eyebrows—she is the grandniece of Lady Bloomia, Princess Peach\'s handmaiden who vanished the night of the assassination. She deflects all questions about her great-aunt with practiced ease.',
                    personality: 'Diplomatic, sharp-witted, pragmatic about alliances. Those who\'ve negotiated against her say her smile never reaches her eyes.',
                    achievements: [
                        'Secured Sarasaland mutual defense pact',
                        'Established trade routes with Kong territories',
                        'Maintained back-channel communications with Bowser\'s envoys'
                    ],
                    controversies: [
                        'Accused of prioritizing foreign allies over domestic concerns',
                        'Her loyalty to the Regency vs. Sarasaland questioned',
                        'Negotiated with Fawful before the invasion (content classified)',
                        'Received a sealed letter from an unknown source two days before Fawful\'s attack—contents unknown',
                        'Her great-aunt Lady Bloomia was never officially declared dead, only "missing presumed deceased"'
                    ],
                    quote: '"A kingdom without friends is a kingdom without a future. We must be practical about who we embrace—and wise about what questions we leave unasked."'
                }
            ]
        },

        departments: [
            {
                id: 'dept_treasury',
                name: 'Royal Treasury',
                icon: '💰',
                head: 'Treasurer Goldcap (Detained)',
                status: 'seized',
                employees: 450,
                intelRequired: 20,
                description: 'Manages the kingdom\'s finances, taxation, and economic policy. The Treasury vaults in Toad Town are now under Loyalist control, though rumors persist of hidden reserves established in the chaotic days of 955.',
                functions: [
                    'Tax collection and distribution',
                    'Currency management',
                    'Economic policy development',
                    'Trade regulation',
                    'Emergency fund administration'
                ],
                currentSituation: 'Treasury offices occupied. Acting Treasurer Silverspore operating from Petalburg with limited access to funds. Emergency protocols activated. Loyalists are reportedly examining financial records from 954-956 with great interest.',
                secrets: [
                    'Black budget allocations to "Special Projects Division"—no records of what projects were funded',
                    'Hidden accounts in Rogueport banks established by Toadsworth Sr. in 956',
                    'Missing funds from the year 955 never accounted for—approximately 2.3 million coins vanished from the Royal Household budget',
                    'Pension payments to an unnamed recipient in Sarasaland, initiated 955, continuing to present day'
                ]
            },
            {
                id: 'dept_defense',
                name: 'Ministry of Defense',
                icon: '🛡️',
                head: 'Marshal Steelcap (KIA)',
                status: 'collapsed',
                employees: 'Approximately 8,000 (pre-crisis)',
                intelRequired: 25,
                description: 'The military arm of the Regency, responsible for defending the kingdom against external and internal threats. Currently in complete disarray following simultaneous attacks by Fawful and the Loyalists. The Ministry was originally formed from loyal elements of the Royal Guard—though records of who exactly was "loyal" and who was purged in 955-956 remain classified.',
                functions: [
                    'Military command and operations',
                    'Fortress maintenance',
                    'Border patrol',
                    'Emergency response coordination',
                    'Weapons research and procurement'
                ],
                currentSituation: 'Command structure shattered. Marshal Steelcap killed at Peach\'s Castle. Remaining forces fragmented between those who surrendered to Loyalists, those fighting Fawful, and those simply scattered.',
                secrets: [
                    'Classified weapons programs at Whomp Fortress',
                    'Secret agreement with Bob-omb mercenaries—in place since 955',
                    'Contingency plans for "internal pacification" drafted after the assassination',
                    'Personnel files from the original Royal Guard purge of 956—87 guards dismissed, 12 died within the year',
                    'Standing order to detain anyone claiming to be "Lady Bloomia" or presenting documents from her'
                ]
            },
            {
                id: 'dept_justice',
                name: 'Ministry of Justice',
                icon: '⚖️',
                head: 'Chief Justice Lawcap',
                status: 'defunct',
                employees: 280,
                intelRequired: 35,
                description: 'Administers the legal system, courts, and law enforcement. The Ministry has been a target of Loyalist criticism for decades, accused of protecting Regency interests over true justice. The original assassination tribunal\'s records were sealed under the Emergency Evidence Protection Act—authored by Toadsworth Sr. himself.',
                functions: [
                    'Court administration',
                    'Legal code maintenance',
                    'Criminal prosecution',
                    'Prison system oversight',
                    'Constitutional interpretation'
                ],
                currentSituation: 'Courts suspended. Chief Justice Lawcap has issued a statement from hiding declaring all Loyalist tribunals illegitimate. Prison system under Loyalist control—political prisoners being released while Regency officials are detained.',
                secrets: [
                    'Sealed records from the 955 assassination investigation—including testimony that contradicts official narrative',
                    'List of Loyalist sympathizers compiled over decades—cross-referenced with descendants of 955-era palace staff',
                    'Evidence suppression orders signed by multiple Chancellors',
                    'The original witness list from the assassination tribunal included 47 names—only 31 testified, the rest listed as "unavailable"',
                    'Death certificate for Captain Silvercap filed in 959—body never recovered, circumstances listed as "classified military operation"'
                ]
            },
            {
                id: 'dept_archives',
                name: 'Royal Archives',
                icon: '📚',
                head: 'Master Archivist Dustcap',
                status: 'compromised',
                employees: 45,
                intelRequired: 50,
                description: 'Maintains the kingdom\'s historical records, official documents, and classified materials. The Archives hold the most complete record of events before and after the assassination—and the most heavily redacted. Entire sections from 954-956 are accessible only with Chancellery authorization, which has never been granted to outside researchers.',
                functions: [
                    'Document preservation',
                    'Historical research',
                    'Classification management',
                    'Royal lineage records',
                    'Treaty archives'
                ],
                currentSituation: 'Fawful\'s forces control the main Archives in Peach\'s Castle. Loyalists hold the secondary archive in Toad Town. Unknown how much has been destroyed, stolen, or compromised. Master Archivist Dustcap reportedly burned several boxes of documents before Fawful\'s forces breached the castle.',
                secrets: [
                    'The sealed Toadsworth Sr. personal papers—rumored to contain a confession or exoneration, depending on who you ask',
                    'Pre-assassination security reports marked DESTROYED but possibly preserved in secondary locations',
                    'Alternative succession documents—the "Daisy Protocols"—drafted in 954, before the assassination',
                    'Complete list of VANISHED personnel from 955-960: 23 names, including Lady Bloomia, Captain Silvercap, and the Royal Alchemist',
                    'Princess Peach\'s personal diary—officially listed as "not recovered," though three Archivists have been dismissed for claiming otherwise',
                    'A sealed envelope labeled "To be opened upon discovery of the truth" in Toadsworth Sr.\'s handwriting—never opened'
                ]
            },
            {
                id: 'dept_intelligence',
                name: 'Bureau of State Security',
                icon: '🔍',
                head: 'Director Shadowcap (Status Unknown)',
                status: 'unknown',
                employees: 'Classified',
                intelRequired: 70,
                description: 'The Regency\'s intelligence and counter-intelligence apparatus. Officially tasked with protecting the kingdom from external threats; unofficially, they have spent decades hunting Loyalist cells and suppressing inquiry into the assassination. The Bureau was established on Day 3 after the Princess\'s death—an unusually rapid institutional response.',
                functions: [
                    'Foreign intelligence gathering',
                    'Counter-espionage operations',
                    'Internal security monitoring',
                    'Threat assessment',
                    'Covert operations'
                ],
                currentSituation: 'Complete operational blackout. Director Shadowcap has not been seen since before the Fawful invasion. Bureau assets may still be operational in deep cover, or may have been entirely compromised. One agent reportedly defected to the Loyalists with a cache of documents.',
                secrets: [
                    'Infiltration attempts into Loyalist cells (most failed—suggesting internal leaks)',
                    'Psychological profiles on all major faction leaders',
                    'Evidence of Fawful\'s invasion plans—warnings that were ignored or suppressed',
                    'The "Silvercap File"—investigation into the vanished guard captain, concluded he was alive as of 1002',
                    'Operation SILENT BLOOM—long-term surveillance of anyone connected to Lady Bloomia\'s family',
                    'Intercepted communications suggesting Lady Bloomia was seen in Rogueport in 978—investigation "discontinued by order of Chancellery"',
                    'A list of seven Regency officials identified as "potentially compromised by prior knowledge"—names redacted even in classified files'
                ]
            },
            {
                id: 'dept_public_works',
                name: 'Department of Public Works',
                icon: '🔧',
                head: 'Director Pipecap',
                status: 'operational',
                employees: 1200,
                intelRequired: 15,
                description: 'Manages infrastructure, utilities, and public services throughout the kingdom. The one department that has largely continued functioning regardless of who controls the capital. Public Works inherited responsibility for "special maintenance" of certain castle passages after the assassination—passages that officially don\'t exist.',
                functions: [
                    'Pipe network maintenance',
                    'Road and bridge construction',
                    'Public utility management',
                    'Emergency services coordination',
                    'Urban planning'
                ],
                currentSituation: 'Director Pipecap has declared the department "politically neutral" and continues basic services under whoever controls a given territory. Critics call this collaboration; Pipecap calls it pragmatism.',
                secrets: [
                    'Complete maps of the underground pipe network—including routes sealed after 955',
                    'Emergency bunker locations—one beneath the castle was bricked up in 956 with no explanation',
                    'Maintenance tunnels that bypass security checkpoints—one leads directly to the royal chambers',
                    'Structural weaknesses in major fortifications',
                    'Work orders from 955 showing a "private passage" in the royal suite was sealed with quick-set concrete three days after the assassination',
                    'The foreman who supervised that work died in a construction accident two months later'
                ]
            }
        ],

        councils: [
            {
                id: 'privy_council',
                name: 'Privy Council',
                icon: '👥',
                description: 'The Chancellor\'s closest advisors, meeting in secret session to discuss matters of state security. The original Privy Council of 955 has never been fully identified—several members served under pseudonyms.',
                members: 7,
                status: 'disbanded',
                intelRequired: 60,
                lastMeeting: { year: 1040, monthIndex: 6, day: 11 },
                notes: 'The Privy Council held an emergency session on Day 11, hours before the Loyalist coup. Meeting minutes have not been recovered. It is unknown what was discussed or decided. One attendee reportedly left the meeting visibly shaken and was heard saying "They\'re right. They\'ve always been right."'
            },
            {
                id: 'merchant_council',
                name: 'Merchant Guild Council',
                icon: '🏪',
                description: 'Representatives of the major trading houses who advise on economic policy. Several founding Guild families received unusual trading concessions in 956, establishing monopolies that persist today.',
                members: 12,
                status: 'fractured',
                intelRequired: 25,
                lastMeeting: { year: 1040, monthIndex: 6, day: 8 },
                notes: 'The Merchant Council has split, with some members backing the Regency-in-exile, others accommodating the Loyalists, and a few reportedly negotiating with Fawful for trade guarantees. The Coinsworth family—largest contributors to Regency campaigns—quietly liquidated their Mushroom Kingdom holdings and relocated to Sarasaland six months before the current crisis.'
            },
            {
                id: 'territorial_governors',
                name: 'Territorial Governors Assembly',
                icon: '🗺️',
                description: 'Governors of the various regions who coordinate local administration. The Assembly was created in 957 to replace the Princess\'s system of appointed stewards—most of whom had resigned or been removed.',
                members: 15,
                status: 'fragmented',
                intelRequired: 30,
                lastMeeting: { year: 1040, monthIndex: 5, day: 20 },
                notes: 'Governors are acting independently based on local conditions. Some have declared for the Loyalists, some maintain Regency allegiance, and others are simply trying to survive the chaos. Governor Fernwood of the Forever Forest region has been unreachable for two weeks—her territory borders Rakasha lands.'
            }
        ]
    },

    // Historical Timeline
    history: {
        eras: [
            {
                id: 'era_founding',
                name: 'The Founding Crisis',
                years: '955-960',
                icon: '⚡',
                description: 'The chaotic years following the assassination, when the Regency was established amid civil unrest and the first Koopa War. A time of purges, disappearances, and the systematic sealing of records that continues to fuel conspiracy theories.',
                intelRequired: 20
            },
            {
                id: 'era_consolidation',
                name: 'The Consolidation',
                years: '961-990',
                icon: '🏗️',
                description: 'Three decades of building institutional authority, suppressing dissent, and establishing the Regency as the de facto permanent government. The generation that knew Princess Peach personally slowly aged out of power, replaced by those who knew only the official narrative.',
                intelRequired: 25
            },
            {
                id: 'era_wars',
                name: 'The Koopa Wars',
                years: '991-1028',
                icon: '⚔️',
                description: 'Multiple conflicts with the Koopa Kingdom that both threatened and legitimized Regency rule. Notably, Bowser consistently denied ordering the assassination, even when doing so might have rallied his troops.',
                intelRequired: 20
            },
            {
                id: 'era_modern',
                name: 'The Modern Era',
                years: '1029-1039',
                icon: '📈',
                description: 'A period of relative peace marked by growing internal tensions, economic development, and the rise of new threats. The Loyalist movement gained unprecedented popular support, particularly after the Toad Square Incident.',
                intelRequired: 15
            },
            {
                id: 'era_crisis',
                name: 'The Current Crisis',
                years: '1040',
                icon: '🔥',
                description: 'The year everything fell apart—or perhaps, the year everything finally came to light.',
                intelRequired: 10
            }
        ],

        keyEvents: [
            {
                id: 'event_assassination',
                date: { year: 955, monthIndex: 6, day: 1 },
                title: 'The Assassination',
                era: 'era_founding',
                importance: 'critical',
                intelRequired: 10,
                summary: 'Princess Peach is killed in her private chambers. The kingdom is thrown into chaos.',
                officialNarrative: 'Koopa Kingdom operatives infiltrated the castle and assassinated the Princess as a prelude to invasion. The Royal Guard responded heroically but too late. Lady Bloomia, the Princess\'s handmaiden, was also killed or abducted—her body was never found.',
                details: 'The official investigation concluded within two weeks, placing blame squarely on Bowser and the Koopa Troop. Critics have noted the unusual speed of this conclusion and the subsequent sealing of all evidence. The investigation was led by Toadsworth Sr., who had been the Princess\'s chamberlain for thirty years. He never spoke publicly about the details and destroyed his personal notes before his death—or so the official record states.',
                controversies: [
                    'Investigation sealed by emergency order drafted before the assassination occurred',
                    'Several witnesses died or disappeared within months—including Lady Bloomia, Captain Silvercap, and the Royal Alchemist',
                    'Koopa Kingdom has consistently denied involvement—Bowser reportedly called the accusation "convenient slander"',
                    'Guard rotation "scheduling error" never explained—47 minutes with no guards near the royal chambers',
                    'Lady Bloomia\'s quarters were found empty but undisturbed—her personal effects were never inventoried',
                    'A second set of bloody footprints at the scene was omitted from the official report',
                    'The Princess\'s diary was never recovered, despite being a known daily habit'
                ],
                legacy: 'The assassination remains the most contentious event in kingdom history. The Loyalists claim it was an inside job; the Regency maintains the official narrative while refusing to release the evidence that would prove it. The truth, whatever it may be, has shaped every subsequent event.'
            },
            {
                id: 'event_bloomia_vanishing',
                date: { year: 955, monthIndex: 6, day: 1 },
                title: 'The Vanishing of Lady Bloomia',
                era: 'era_founding',
                importance: 'major',
                intelRequired: 45,
                summary: 'Princess Peach\'s closest handmaiden disappears the night of the assassination. Her fate remains unknown.',
                officialNarrative: 'Lady Bloomia was either killed by the assassins and her body removed, or abducted as a witness. Despite extensive searches, no trace of her was ever found.',
                details: 'Lady Bloomia had served the Princess for fifteen years and was known to be her closest confidante. She was last seen entering the Princess\'s chambers approximately one hour before the assassination was discovered. Her quarters showed no signs of struggle, but several personal items were missing—including a small lockbox she was known to keep. Her family received a substantial anonymous payment in 956 and subsequently emigrated to Sarasaland.',
                controversies: [
                    'Her body was never found despite the castle being thoroughly searched',
                    'Her family refused to participate in the investigation and left the kingdom abruptly',
                    'A woman matching her description was reportedly seen in Rogueport in 978',
                    'Bureau of State Security maintained surveillance on her family for decades',
                    'Secretary Bloomsworth, current diplomat, is her grandniece—appointed despite this connection',
                    'Her personal effects were seized by Toadsworth Sr. and never catalogued publicly'
                ],
                legacy: 'Lady Bloomia has become a symbol for both sides. The Loyalists believe she escaped with proof of conspiracy; the Regency maintains she was an innocent victim. Her grandniece now serves in the government-in-exile, a coincidence that raises uncomfortable questions.'
            },
            {
                id: 'event_regency_formation',
                date: { year: 955, monthIndex: 6, day: 15 },
                title: 'Formation of the Regency',
                era: 'era_founding',
                importance: 'critical',
                intelRequired: 15,
                summary: 'The Mushroom Council establishes a provisional government pending identification of a legitimate heir.',
                officialNarrative: 'In the absence of a clear successor, senior officials formed a temporary government to maintain order and defend against the Koopa threat.',
                details: 'Toadsworth Sr., the Royal Chamberlain, was named First Chancellor. The Regency was explicitly described as "temporary" in founding documents, pending either discovery of an heir or a constitutional convention. The Emergency Succession Act that enabled this had been drafted on June 28th—three days before the assassination. Officials claimed this was "prudent contingency planning" given ongoing tensions with the Koopa Kingdom.',
                controversies: [
                    'Constitutional convention never convened despite being mandated within "five years"',
                    'Search for heirs was abandoned after 5 years—some candidates were rejected on technicalities',
                    '"Temporary" government has now lasted 85 years',
                    'Several potential distant heirs were ruled "illegitimate" by tribunals with sealed proceedings',
                    'The Emergency Succession Act was drafted before the assassination—coincidence or foreknowledge?',
                    'Toadsworth Sr. reportedly said "It has to be this way" when accepting the Chancellorship'
                ],
                legacy: 'The Regency\'s claim to legitimacy rests on the argument that no better alternative exists. This argument has worn thin over 85 years. The Loyalists ask: how did they prepare for something they claim not to have expected?'
            },
            {
                id: 'event_guard_purge',
                date: { year: 956, monthIndex: 2, day: 1 },
                title: 'The Royal Guard Reorganization',
                era: 'era_founding',
                importance: 'major',
                intelRequired: 40,
                summary: 'The Royal Guard is dissolved and reformed as the Mushroom Defense Forces. 87 guards are dismissed; 12 die within the year.',
                officialNarrative: 'A necessary restructuring to address the security failures that allowed the assassination. Personnel changes ensured only the most loyal and capable remained.',
                details: 'Every guard who had been on duty the night of the assassination was either dismissed, transferred to remote postings, or died under various circumstances. Captain Silvercap, who had commanded the guard rotation that night, officially died during a "classified military operation" in 959—though no record of this operation exists in military archives. His body was never recovered.',
                controversies: [
                    'The three guards who gave contradictory testimony all died within a year',
                    'Dismissed guards were forbidden from discussing their service under penalty of treason',
                    'Captain Silvercap\'s death certificate is signed by Toadsworth Sr. personally',
                    'Several dismissed guards later joined what would become the Loyalist movement',
                    'Guard logs from the night of the assassination were "damaged by fire" in 957',
                    'Bureau of State Security concluded Captain Silvercap was still alive in 1002—file was then sealed'
                ],
                legacy: 'The purge ensured that anyone who might have witnessed what actually happened that night was silenced, one way or another. The Loyalists consider this proof of conspiracy; the Regency calls it "unfortunate but necessary security measures."'
            },
            {
                id: 'event_first_koopa_war',
                date: { year: 955, monthIndex: 8, day: 1 },
                title: 'First Koopa War Begins',
                era: 'era_founding',
                importance: 'major',
                intelRequired: 15,
                summary: 'Bowser\'s forces invade, claiming to "avenge false accusations."',
                officialNarrative: 'The Koopa Kingdom revealed its true colors by invading immediately after the assassination, proving their guilt.',
                details: 'The timing of the invasion has been debated for decades. Regency historians claim it proves Koopa guilt; others argue Bowser invaded because he was being blamed for something he didn\'t do. Notably, captured Koopa officers consistently expressed confusion about the assassination charges, suggesting the invasion was not pre-planned as claimed.',
                legacy: 'The war lasted until 959 and resulted in a Regency victory, cementing their authority. It also made it politically impossible to question the assassination narrative—doing so would be tantamount to siding with the enemy.'
            },
            {
                id: 'event_loyalist_founding',
                date: { year: 965, monthIndex: 3, day: 12 },
                title: 'Peach Loyalists Founded',
                era: 'era_consolidation',
                importance: 'major',
                intelRequired: 25,
                summary: 'Former palace staff and military officers form an underground movement dedicated to "truth and justice for the Princess."',
                officialNarrative: 'A terrorist organization founded by malcontents and Koopa sympathizers who reject legitimate governance.',
                details: 'The early Loyalists were primarily people who had known Princess Peach personally and rejected the official assassination narrative. Their founding manifesto accused the Regency of complicity in her death. Among the founders were three dismissed Royal Guards and a cousin of Lady Bloomia.',
                legacy: 'What began as a small group of grieving loyalists has grown into a formidable insurgency that now controls the capital. Their central claim—that the Regency knows more than it admits—has never been disproven.'
            },
            {
                id: 'event_toad_square',
                date: { year: 1032, monthIndex: 4, day: 15 },
                title: 'Toad Square Incident',
                era: 'era_modern',
                importance: 'major',
                intelRequired: 30,
                summary: 'Regency forces violently disperse a peaceful Loyalist memorial gathering, killing 23 civilians.',
                officialNarrative: 'Security forces responded proportionally to an unlawful assembly that was becoming violent.',
                details: 'Eyewitness accounts contradict the official narrative. The gathering was a memorial on the 77th anniversary of the assassination, featuring a speech by a woman claiming to have evidence from Lady Bloomia. Security forces fired into the crowd without warning. The speaker was among the dead; her evidence, if it existed, was never recovered.',
                controversies: [
                    'Independent investigation blocked by Ministry of Justice',
                    'Commander responsible was promoted, not punished',
                    'Victims included children',
                    'The speaker claimed to be Lady Bloomia\'s granddaughter—DNA confirmation was never attempted',
                    'Event radicalized a new generation of Loyalist recruits',
                    'Chancellor Toadsworth III allegedly opposed the crackdown but was overruled'
                ],
                legacy: 'The incident is considered a turning point that transformed the Loyalists from a fringe movement into a genuine threat. It also raised questions about what the speaker knew—and who wanted her silenced.'
            },
            {
                id: 'event_fawful_invasion',
                date: { year: 1040, monthIndex: 6, day: 5 },
                title: 'Fawful\'s Invasion',
                era: 'era_crisis',
                importance: 'critical',
                intelRequired: 10,
                summary: 'The mad scientist Fawful launches a surprise attack and captures Peach\'s Castle.',
                officialNarrative: 'An unforeseen attack by a foreign aggressor that the Regency was preparing to counter.',
                details: 'Intelligence suggests the Regency had warnings about Fawful\'s build-up but failed to act. The castle fell in less than a day. Marshal Steelcap was killed in the defense. Fawful now has access to the Royal Archives—including sealed records that have been hidden for 85 years.',
                legacy: 'The fall of the castle shattered public confidence in the Regency and created the opening the Loyalists exploited one week later. It also raised a terrifying question: what will Fawful find in those archives?'
            },
            {
                id: 'event_loyalist_coup',
                date: { year: 1040, monthIndex: 6, day: 12 },
                title: 'The Loyalist Coup',
                era: 'era_crisis',
                importance: 'critical',
                intelRequired: 10,
                summary: 'Peach Loyalists seize Toad Town and arrest Chancellor Toadsworth.',
                officialNarrative: 'A terrorist coup exploiting the chaos of Fawful\'s invasion.',
                details: 'The Loyalists moved with shocking coordination. The Mayor was assassinated, key military units were neutralized, and the Chancellery was surrounded within hours. Toadsworth surrendered to prevent civilian casualties. He reportedly told Captain Toadette: "I understand why you\'re doing this. I wish I could have done more."',
                legacy: 'For the first time in 85 years, the Regency does not control the capital. The legitimate government now operates from exile in Sarasaland. The Loyalists are demanding the truth—and they finally have the power to dig for it.'
            }
        ],

        successionCrisis: {
            title: 'The Succession Question',
            intelRequired: 40,
            summary: 'Princess Peach had no known children and no clear heir. The Regency\'s legitimacy has always rested on this inconvenient fact—a fact some have spent 85 years trying to verify or disprove.',
            potentialHeirs: [
                {
                    name: 'Princess Daisy',
                    relation: 'Cousin (disputed)',
                    status: 'Alive, rules Sarasaland',
                    claim: 'The closest known blood relative, though the exact relationship is disputed. She has consistently refused to press her claim.',
                    regencyPosition: 'Acknowledged as a friendly foreign monarch, not as a potential successor.',
                    notes: 'Daisy\'s refusal to claim the throne has been attributed to everything from humility to secret agreements with the Regency. Notably, Lady Bloomia\'s family settled in Sarasaland after 956. Daisy\'s mother was close friends with Bloomia before the assassination.'
                },
                {
                    name: 'Lord Champignon',
                    relation: 'Distant cousin through maternal line',
                    status: 'Deceased (1002)',
                    claim: 'Pressed his claim in 985, was rejected on grounds of insufficient documentation.',
                    regencyPosition: 'Ruled illegitimate. Died under mysterious circumstances.',
                    notes: 'His death while in Regency custody remains unexplained. He claimed to possess documents proving his lineage—documents that were never produced after his death. His descendants have been barred from court and placed under Bureau surveillance.'
                },
                {
                    name: 'The "Lost Princess" Legend',
                    relation: 'Alleged secret child of Peach',
                    status: 'Unconfirmed',
                    claim: 'Persistent rumors that Peach had a secret child who was hidden before her death.',
                    regencyPosition: 'Official position: "Baseless conspiracy theories promoted by enemies of stability."',
                    notes: 'The Loyalists have spent decades searching for evidence of this child. Some believe Chief Thornpaw\'s recently revealed "relationship" with Peach is connected. Lady Bloomia\'s disappearance—without a body, with missing personal effects—has fueled theories that she smuggled an heir to safety. The pension payments from Treasury to an unnamed Sarasaland recipient, initiated in 955, have never been explained.'
                }
            ],
            currentSituation: 'With the Regency in collapse, the succession question has become urgent. If Daisy could be convinced to claim the throne, it might provide a unifying alternative to both the Regency and the Loyalists. But if the Lost Princess exists—if Lady Bloomia succeeded in her final mission—everything changes.'
        }
    },

    // Military Structure (abbreviated for space - key changes shown)
    military: {
        overview: {
            name: 'Mushroom Kingdom Defense Forces',
            icon: '🛡️',
            motto: 'Shield of the Realm',
            status: 'CRITICAL — Force structure collapsed',
            precrisisStrength: 8000,
            currentEstimate: 'Unknown — Forces scattered',
            description: 'The Regency military was organized around static defense of key fortifications. This doctrine proved catastrophic when facing Fawful\'s mobile forces and the Loyalists\' insurgent tactics. The MKDF was built from the ashes of the Royal Guard purge of 956—a force designed as much to prevent internal threats as external ones.'
        },

        branches: [
            {
                id: 'royal_guard',
                name: 'Royal Mushroom Guard',
                icon: '👑',
                specialty: 'Palace and VIP Protection',
                status: 'destroyed',
                strength: { precrisis: 500, current: 0 },
                commander: 'Captain Ironspore (KIA)',
                intelRequired: 20,
                description: 'Elite troops responsible for protecting the royal family and high officials. With no royal family to protect, they guarded the Chancellor and government buildings. The Guard maintained traditions from Princess Peach\'s era, including the ceremonial protection of her sealed chambers—a duty no one questioned.',
                equipment: ['Ceremonial spears', 'Light armor', 'Fire Flower munitions'],
                currentSituation: 'Wiped out during the defense of Peach\'s Castle. Captain Ironspore died holding the throne room doors. His last transmission mentioned "secondary objective compromised"—meaning unknown.',
                notable: 'The Guard maintained standing orders, never rescinded, to protect "the Princess\'s private effects" with their lives. These orders were written by Toadsworth Sr. in 955 and remained in effect until the castle fell.'
            },
            {
                id: 'territorial_army',
                name: 'Territorial Defense Forces',
                icon: '⚔️',
                specialty: 'Regional Defense',
                status: 'fragmented',
                strength: { precrisis: 5000, current: 'Est. 2000 scattered' },
                commander: 'General Stonecap (Location Unknown)',
                intelRequired: 25,
                description: 'The main body of the Mushroom Kingdom military, organized into regional commands responsible for defending their territories.',
                equipment: ['Standard arms', 'Fortress artillery', 'Bob-omb ordnance'],
                currentSituation: 'Regional commanders are acting independently. Some have surrendered to Loyalists, some continue resistance against Fawful, others have simply dispersed. General Stonecap was last seen heading toward the Forever Forest—Rakasha territory.',
                notable: 'The Territorial Forces include several veterans whose families served in the original Royal Guard. Many harbor private doubts about the official assassination narrative—doubts they\'ve kept silent for careers and pensions.'
            },
            {
                id: 'border_patrol',
                name: 'Border Patrol Service',
                icon: '🚧',
                specialty: 'Border Security and Customs',
                status: 'operational',
                strength: { precrisis: 1500, current: 'Est. 1200' },
                commander: 'Director Watchcap',
                intelRequired: 20,
                description: 'Paramilitary force responsible for securing the kingdom\'s borders. More accustomed to smugglers and refugees than military operations.',
                equipment: ['Light arms', 'Patrol vehicles', 'Communication networks'],
                currentSituation: 'Still functioning at most border posts, though allegiances vary. Director Watchcap has maintained communication with the government-in-exile. Standing orders to detain "persons of interest" related to the Bloomia case remain technically active.',
                notable: 'The Border Patrol has the most intact command structure of any military branch—because they were too far from the capital to be destroyed in the initial chaos. They also maintain the most complete records of who has entered and left the kingdom since 955.'
            },
            {
                id: 'special_operations',
                name: 'Special Operations Division',
                icon: '🎯',
                specialty: 'Covert Operations',
                status: 'unknown',
                strength: { precrisis: 'Classified', current: 'Unknown' },
                commander: 'Classified',
                intelRequired: 65,
                description: 'The Regency\'s black operations unit, responsible for missions too sensitive for conventional forces. Their existence was officially denied until documents leaked in 1035. Established in 956 with a mandate that included "resolution of historical complications."',
                equipment: ['Classified'],
                currentSituation: 'Complete operational blackout. May still be active, may have been completely destroyed, may have defected to other factions. One operative reportedly approached the Loyalists with information before the coup.',
                notable: 'Rumored to have been involved in numerous "disappearances" of Loyalist leaders over the years. The Loyalists call them the "Vanishing Squad" and believe they\'re responsible for silencing witnesses since 955. Their commander has never been publicly identified.'
            }
        ],

        fortifications: [
            {
                name: 'Peach\'s Castle',
                status: 'Hostile — Fawful Control',
                garrison: 'Unknown Fawful forces',
                notes: 'The symbolic heart of the kingdom. Its fall was a catastrophic blow to Regency legitimacy. More critically, Fawful now has access to the sealed archives and the Princess\'s private chambers—including whatever lies behind the hidden passage.'
            },
            {
                name: 'Toad Town Garrison',
                status: 'Hostile — Loyalist Control',
                garrison: 'Est. 400 Loyalists',
                notes: 'The administrative center. Now serves as Loyalist headquarters. They are systematically reviewing Regency files, focusing on 955-960.'
            },
            {
                name: 'Whomp Fortress',
                status: 'Contested',
                garrison: 'Mixed — fighting ongoing',
                notes: 'Major military installation. Battle between Fawful forces and remaining Regency troops. Contains classified weapons research—and rumored secondary archives.'
            },
            {
                name: 'Shiver Station',
                status: 'Regency Control',
                garrison: '200 Border Patrol',
                notes: 'Northern border post. Loyal to government-in-exile. Remote enough to avoid the chaos. Maintains records of everyone who\'s crossed the northern border since 970.'
            },
            {
                name: 'Lavalava Outpost',
                status: 'Abandoned',
                garrison: 'None',
                notes: 'Southern volcanic region post. Evacuated during crisis. Local legends speak of someone living in the volcanic caves—a hermit who arrived in 956.'
            }
        ],

        lostAssets: [
            {
                name: 'Peach\'s Royal Airship',
                type: 'Flagship',
                status: 'Captured — Fawful',
                notes: 'The Princess\'s personal vessel. Now part of Fawful\'s fleet. Its safe contained her personal correspondence—now in enemy hands.'
            },
            {
                name: 'Star Road Defense Grid',
                type: 'Strategic Defense',
                status: 'Offline',
                notes: 'Defensive installations along the Star Road have gone dark. Cause unknown. Last personnel reported "unusual activity" before going silent.'
            },
            {
                name: 'Fire Flower Reserves',
                type: 'Strategic Munitions',
                status: 'Partially Seized',
                notes: 'Main armory captured by Loyalists. Emergency caches may still exist in locations known only to senior officials—many now dead or detained.'
            }
        ]
    },

    // Diplomatic Relations (abbreviated - key changes)
    diplomacy: {
        factions: [
            {
                id: 'sarasaland',
                name: 'Sarasaland',
                icon: '🌻',
                leader: 'Princess Daisy',
                status: 'allied',
                relationship: 95,
                intelRequired: 15,
                description: 'The Regency\'s closest and most reliable ally. Princess Daisy has provided sanctuary for the government-in-exile and continues to recognize Regency legitimacy.',
                history: 'Relations have been warm since the Treaty of Flowers (980). Daisy\'s refusal to claim the Mushroom throne has been interpreted as either loyalty to the Regency or secret agreement. The Bloomia family\'s presence in Sarasaland since 956 adds an interesting dimension to this relationship.',
                currentStatus: 'Sarasaland is providing diplomatic cover and limited material support to the government-in-exile. Secretary Bloomsworth—grandniece of Lady Bloomia—now operates from Daisy\'s court. Military intervention has been discussed but not committed.',
                concerns: [
                    'How long will Daisy\'s patience last?',
                    'Is she positioning for eventual succession claim?',
                    'What does she know about the Bloomia family\'s history?',
                    'The pension payments to Sarasaland—who receives them?'
                ]
            },
            {
                id: 'koopa_kingdom',
                name: 'Koopa Kingdom',
                icon: '🐢',
                leader: 'Bowser (Missing)',
                status: 'hostile',
                relationship: 15,
                intelRequired: 20,
                description: 'Traditional enemy of the Mushroom Kingdom. Three wars in 85 years. Currently in chaos following Bowser\'s disappearance.',
                history: 'The Koopa Kingdom has been blamed for the assassination since day one. Multiple wars have reinforced this enmity. Yet Bowser has always denied ordering the killing—even when doing so might have served propaganda purposes. Recent intelligence suggests he may have been framed.',
                currentStatus: 'Bowser vanished shortly after Fawful\'s invasion. The Koopa Kingdom is dealing with its own succession crisis. Some in the government-in-exile see an opportunity for rapprochement—or at least, for finally learning the truth.',
                concerns: [
                    'Who captured Bowser and why?',
                    'Could the Koopa Troop become an ally against common enemies?',
                    'Would acknowledging Bowser\'s possible innocence undermine Regency legitimacy?',
                    'If the Koopas didn\'t do it, who did?'
                ]
            },
            {
                id: 'peach_loyalists',
                name: 'Peach Loyalists',
                icon: '🌸',
                leader: 'Captain Toadette',
                status: 'at war',
                relationship: 5,
                intelRequired: 15,
                description: 'Insurgency turned occupying force. Now controls Toad Town and holds Chancellor Toadsworth. They have spent 85 years claiming the Regency conceals the truth—and now they have the power to search for it.',
                history: '85 years of shadow war. Assassinations, sabotage, propaganda. They claim to fight for truth and justice; the Regency calls them murderers and traitors. Some of their founders were dismissed Royal Guards and relatives of Lady Bloomia.',
                currentStatus: 'The Loyalists hold the capital and our leader. Their demands include release of classified assassination files and "truth tribunals" for Regency officials. They have already discovered documents that contradict official narratives.',
                concerns: [
                    'What will they do with Toadsworth?',
                    'What have they found in the archives?',
                    'Can negotiation be possible?',
                    'Are they capable of governing, or only destroying?'
                ]
            },
            {
                id: 'rakasha_clans',
                name: 'Rakasha Clans',
                icon: '🐾',
                leader: 'Chief Thornpaw',
                status: 'neutral',
                relationship: 40,
                intelRequired: 40,
                description: 'Woodland tribal confederation. Historically isolationist but increasingly drawn into kingdom politics. Chief Thornpaw\'s recently revealed connection to Princess Peach has complicated everything.',
                history: 'The Regency has had minimal direct relations with the Rakasha. They control significant wilderness territory but have avoided formal alignment with any faction. The Bureau of State Security has long suspected they shelter fugitives.',
                currentStatus: 'Recent intelligence suggests the Rakasha are negotiating with the Loyalists. Chief Thornpaw\'s admitted romantic relationship with Princess Peach—hidden for 85 years—raises profound questions about what else he knows.',
                concerns: [
                    'What does Thornpaw know about the assassination?',
                    'Why did he hide his relationship for 85 years?',
                    'Did the Rakasha help anyone escape in 955?',
                    'Their spirit-walking abilities make them uniquely capable of uncovering truth'
                ]
            },
            {
                id: 'fawful_forces',
                name: 'Fawful\'s Domain',
                icon: '😈',
                leader: 'Lord Fawful',
                status: 'at war',
                relationship: 0,
                intelRequired: 15,
                description: 'Mad scientist turned conqueror. His forces hold Peach\'s Castle and significant territory. He now has access to 85 years of sealed secrets.',
                history: 'Fawful first appeared as a minor threat a decade ago. His rapid military build-up was monitored but fatally underestimated.',
                currentStatus: 'Active warfare. Fawful\'s forces control the most strategically valuable territory. His ultimate goals remain unclear—but he has been seen personally examining documents in the Royal Archives.',
                concerns: [
                    'What is Fawful actually after?',
                    'What has he found in the sealed archives?',
                    'Does he know about the hidden passage in the royal chambers?',
                    'Is he searching for something specific—or someone?'
                ]
            },
            {
                id: 'iron_legion',
                name: 'Iron Legion',
                icon: '⚔️',
                leader: 'Unknown Hierarchy',
                status: 'complicated',
                relationship: 30,
                intelRequired: 35,
                description: 'Professional mercenary organization. Has worked both for and against Regency interests over the years.',
                history: 'The Legion has been hired by the Regency for specific operations in the past—including, rumor suggests, operations related to "witness management" in the early years.',
                currentStatus: 'Currently enforcing the "Iron Mandate" in neutral territories. Their relationship with Fawful is unclear. May be an asset or a threat depending on who\'s paying.',
                concerns: [
                    'What exactly did they do for the Regency in 955-960?',
                    'Do their archives contain relevant records?',
                    'Can we afford to hire them?',
                    'Would they honor a contract against their current clients?'
                ]
            },
            {
                id: 'regal_empire',
                name: 'Regal Empire',
                icon: '🏰',
                leader: 'The Council of Crowns',
                status: 'neutral',
                relationship: 50,
                intelRequired: 25,
                description: 'Distant superpower that maintains observer status in regional conflicts. Their investigators have a reputation for uncovering inconvenient truths.',
                history: 'The Empire has never directly intervened in Mushroom Kingdom affairs but maintains diplomatic presence and occasionally issues pronouncements. They requested access to assassination records in 980—the request was denied.',
                currentStatus: 'Currently investigating war crimes allegations against the Loyalists for the Bramblehaven massacre. May be seeking pretext for greater involvement. Their investigators have reportedly made contact with the Loyalists.',
                concerns: [
                    'Are they planning intervention?',
                    'What do they know about 955 that we don\'t?',
                    'Could they be convinced to support Regency restoration?',
                    'What would they demand in return?'
                ]
            }
        ]
    },

    // Current Crisis
    crisis: {
        overview: {
            title: 'State of Emergency',
            declared: { year: 1040, monthIndex: 6, day: 12 },
            currentDay: 'Day 22 of Crisis',
            threatLevel: 'EXISTENTIAL',
            description: 'The Mushroom Regency faces the most severe crisis in its 85-year history. Simultaneous attacks by Fawful and the Loyalists have shattered the government and military. The Chancellor is a prisoner. The capital is occupied. The archives are compromised. Secrets that have been buried for 85 years are being unearthed. The future of legitimate governance hangs by a thread—but so does the future of the truth.'
        },

        activeThreats: [
            {
                id: 'threat_fawful',
                name: 'Fawful Occupation',
                severity: 'critical',
                icon: '😈',
                territories: ['Peach\'s Castle', 'Mushroom Plains', 'Donut Plains', 'Star Road (partial)'],
                forces: 'Est. 3,000+',
                description: 'Fawful\'s mechanized forces control the most symbolically and strategically important territory, including the castle. His technological superiority makes direct assault impossible. Reports indicate he has been personally examining the sealed Royal Archives—and has discovered the hidden passage in the Princess\'s chambers.',
                objectives: 'Unknown. He has not issued demands or explained his goals. His interest in historical records suggests he is searching for something specific.',
                response: 'Containment. Prevent further expansion while seeking intelligence on vulnerabilities. Priority: determine what he has found in the archives.'
            },
            {
                id: 'threat_loyalist',
                name: 'Loyalist Occupation',
                severity: 'critical',
                icon: '🌸',
                territories: ['Toad Town', 'Forever Forest (partial)', 'Goomba Road'],
                forces: 'Est. 2,000-3,000',
                description: 'The Loyalists control the administrative capital and have declared martial law. They hold the Chancellor and are conducting "truth tribunals." They have begun systematic review of government files and have reportedly found "significant discrepancies" in official assassination records.',
                objectives: 'Release of assassination files. Prosecution of "war criminals." Establishment of "legitimate government." Discovery of what happened to Lady Bloomia.',
                response: 'Diplomatic engagement attempted. Currently preparing for possible rescue operation. Containment of information leaks now impossible.'
            },
            {
                id: 'threat_truth',
                name: 'The Unraveling',
                severity: 'severe',
                icon: '📜',
                territories: 'N/A — Conceptual Threat',
                forces: 'N/A',
                description: 'Beyond military threats, the Regency faces exposure of 85 years of sealed records. Both Fawful and the Loyalists are actively searching archives. Information that could destroy the Regency\'s legitimacy may already be in hostile hands. The official narrative of the assassination is under unprecedented assault.',
                objectives: 'N/A',
                response: 'Unknown. Many officials question whether suppression is still possible—or desirable. Some suggest controlled disclosure might be preferable to chaotic revelation.'
            },
            {
                id: 'threat_collapse',
                name: 'Institutional Collapse',
                severity: 'severe',
                icon: '⚠️',
                territories: 'Kingdom-wide',
                forces: 'N/A',
                description: 'Beyond enemy occupation, the greater threat is the collapse of Regency institutions. Without a functioning government, even liberated territories may descend into chaos. The system built on the foundation of 955 is crumbling.',
                objectives: 'N/A',
                response: 'Government-in-exile working to maintain communication with loyal officials. Emergency protocols activated. Secretary Bloomsworth coordinating from Sarasaland.'
            }
        ],

        governmentInExile: {
            location: 'Sarasaland Embassy Complex, Daisy City',
            leader: 'Secretary Bloomsworth (Acting)',
            personnel: 47,
            resources: 'Limited — Emergency funds only',
            capabilities: [
                'Diplomatic communication',
                'Intelligence coordination',
                'Refugee processing',
                'Broadcasting (Radio Mushroom continues operation)',
                'Coordination with Sarasaland security services'
            ],
            limitations: [
                'No military force under direct command',
                'Limited financial resources',
                'Dependent on Sarasaland hospitality',
                'Legitimacy questioned by some territorial governors',
                'Acting leader\'s family connection to Lady Bloomia raises questions'
            ],
            priorities: [
                'Secure release of Chancellor Toadsworth',
                'Coordinate with loyal military elements',
                'Maintain international recognition',
                'Prepare for eventual restoration',
                'Assess what information has been compromised'
            ]
        },

        rescueOperation: {
            codename: 'CROWN RECOVERY',
            target: 'Chancellor Toadsworth III',
            location: 'Toad Town Chancellery (Loyalist-held)',
            status: 'planning',
            intelRequired: 55,
            assets: ['Border Patrol special unit', 'Underground contacts in Toad Town', 'Possible Iron Legion hire'],
            challenges: [
                'Heavy Loyalist presence in capital',
                'Unknown location within Chancellery compound',
                'Risk of harm to Chancellor if rescue attempted',
                'Limited extraction routes',
                'Chancellor may have information that makes rescue... complicated',
                'Loyalists claim he has begun cooperating with their inquiry'
            ],
            notes: 'Secretary Bloomsworth is personally coordinating. Princess Daisy has offered Sarasaland special forces support if requested. Some officials question whether the Chancellor wishes to be rescued—his reported statement during arrest suggests guilt or at least regret about what he knows.'
        },

        civilianSituation: {
            refugees: 'Est. 50,000 displaced',
            shelters: 'Operating at 180% capacity',
            foodSupply: 'Adequate for now — harvest season helps',
            publicOrder: 'Varies by region — some looting reported',
            healthcare: 'Hospitals functioning but strained',
            propaganda: 'Both Loyalists and Fawful broadcasting heavily. Loyalists claiming documentary evidence of conspiracy.',
            morale: 'Conflicted. Many civilians are tired of the fighting—but many are also tired of the lies. Support for truth revelation is surprisingly high, even among traditional Regency supporters.'
        }
    }
};

// =============================================
// STATE MANAGEMENT  
// =============================================

let currentView = 'government';
let selectedOfficial = null;
let selectedDepartment = null;
let selectedEvent = null;
let localDebugMode = false;

/**
 * Gets the current intel level for the Mushroom Regency faction
 */
function getIntelLevel() {
    if (state.debugMode || localDebugMode) {
        return 100;
    }
    
    if (state.intelLevels) {
        return state.intelLevels.mushroom_regency ?? 
               state.intelLevels['Mushroom Regency'] ??
               state.intelLevels.regency ?? 
               40;
    }
    
    return 40;
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
    console.log('[Regency] Initializing system...');
    console.log('[Regency] Current intel level:', getIntelLevel());
    
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
                '<span class="full-access-text">FULL CLEARANCE — All administrative records accessible</span>';
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
    document.querySelectorAll('.regency-view').forEach(v => v.classList.remove('active'));
    
    const currentViewEl = document.getElementById(`view-${currentView}`);
    if (currentViewEl) {
        currentViewEl.classList.add('active');
    }
    
    switch(currentView) {
        case 'government':
            renderGovernment();
            break;
        case 'history':
            renderHistory();
            break;
        case 'military':
            renderMilitary();
            break;
        case 'diplomacy':
            renderDiplomacy();
            break;
        case 'crisis':
            renderCrisis();
            break;
    }
}

// =============================================
// GOVERNMENT VIEW
// =============================================

function renderGovernment() {
    const container = document.getElementById('government-structure');
    if (!container) return;
    
    const gov = REGENCY_DATA.government;
    const intel = getIntelLevel();
    
    let html = `
        <div class="gov-section executive-section">
            <div class="section-header">
                <span class="section-icon">${gov.executive.icon}</span>
                <h3>${gov.executive.title}</h3>
            </div>
            <p class="section-description">${gov.executive.description}</p>
            <div class="officials-grid">
                ${gov.executive.officials
                    .filter(o => meetsIntelRequirement(o.intelRequired))
                    .map(official => renderOfficialCard(official)).join('')}
            </div>
        </div>
        
        <div class="gov-section departments-section">
            <div class="section-header">
                <span class="section-icon">🏢</span>
                <h3>Government Departments</h3>
            </div>
            <div class="departments-grid">
                ${gov.departments
                    .filter(d => meetsIntelRequirement(d.intelRequired))
                    .map(dept => renderDepartmentCard(dept)).join('')}
            </div>
        </div>
        
        <div class="gov-section councils-section">
            <div class="section-header">
                <span class="section-icon">👥</span>
                <h3>Advisory Councils</h3>
            </div>
            <div class="councils-grid">
                ${gov.councils
                    .filter(c => meetsIntelRequirement(c.intelRequired))
                    .map(council => renderCouncilCard(council)).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    initGovernmentInteractions();
}

function renderOfficialCard(official) {
    const statusColors = {
        'detained': 'status-detained',
        'missing': 'status-missing',
        'active': 'status-active',
        'deceased': 'status-deceased'
    };
    
    return `
        <div class="official-card ${statusColors[official.status] || ''}" data-official="${official.id}">
            <div class="official-portrait">${official.icon}</div>
            <div class="official-info">
                <div class="official-name">${official.name}</div>
                <div class="official-title">${official.title}</div>
                <div class="official-tenure">${official.tenure}</div>
            </div>
            <div class="official-status">
                <span class="status-badge ${official.status}">${official.status.toUpperCase()}</span>
            </div>
        </div>
    `;
}

function renderDepartmentCard(dept) {
    const statusColors = {
        'operational': 'status-operational',
        'compromised': 'status-compromised',
        'seized': 'status-seized',
        'collapsed': 'status-collapsed',
        'defunct': 'status-defunct',
        'unknown': 'status-unknown'
    };
    
    return `
        <div class="department-card ${statusColors[dept.status] || ''}" data-dept="${dept.id}">
            <div class="dept-header">
                <span class="dept-icon">${dept.icon}</span>
                <div class="dept-title-block">
                    <div class="dept-name">${dept.name}</div>
                    <div class="dept-head">${dept.head}</div>
                </div>
            </div>
            <div class="dept-status">
                <span class="status-label">Status:</span>
                <span class="status-value ${dept.status}">${dept.status.toUpperCase()}</span>
            </div>
            <p class="dept-description">${dept.description.substring(0, 100)}...</p>
        </div>
    `;
}

function renderCouncilCard(council) {
    return `
        <div class="council-card" data-council="${council.id}">
            <div class="council-header">
                <span class="council-icon">${council.icon}</span>
                <div class="council-name">${council.name}</div>
            </div>
            <div class="council-meta">
                <span class="council-members">${council.members} members</span>
                <span class="council-status ${council.status}">${council.status}</span>
            </div>
            <p class="council-description">${council.description}</p>
        </div>
    `;
}

function initGovernmentInteractions() {
    document.querySelectorAll('.official-card').forEach(card => {
        card.addEventListener('click', () => {
            openOfficialModal(card.dataset.official);
        });
    });
    
    document.querySelectorAll('.department-card').forEach(card => {
        card.addEventListener('click', () => {
            openDepartmentModal(card.dataset.dept);
        });
    });
}

function openOfficialModal(officialId) {
    const official = REGENCY_DATA.government.executive.officials.find(o => o.id === officialId);
    if (!official) return;
    
    const modal = document.getElementById('official-modal');
    const body = document.getElementById('official-modal-body');
    
    body.innerHTML = `
        <div class="official-detail">
            <div class="official-header">
                <div class="official-large-portrait">${official.icon}</div>
                <div class="official-header-info">
                    <h3>${official.name}</h3>
                    <div class="official-subtitle">${official.title}</div>
                    <div class="official-tenure-detail">In office: ${official.tenure}</div>
                    <span class="status-badge large ${official.status}">${official.status.toUpperCase()}</span>
                    ${official.statusDetail ? `<div class="status-detail">${official.statusDetail}</div>` : ''}
                </div>
            </div>
            
            <div class="official-bio">
                <h4>Biography</h4>
                <p>${official.bio}</p>
                ${official.personality ? `<p class="personality"><strong>Personality:</strong> ${official.personality}</p>` : ''}
            </div>
            
            <div class="official-record">
                <div class="record-section achievements">
                    <h4>Notable Achievements</h4>
                    <ul>
                        ${official.achievements.map(a => `<li class="achievement">${a}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="record-section controversies">
                    <h4>Controversies</h4>
                    <ul>
                        ${official.controversies.map(c => `<li class="controversy">${c}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            ${official.quote ? `
                <div class="official-quote">
                    <blockquote>"${official.quote}"</blockquote>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'flex';
}

function openDepartmentModal(deptId) {
    const dept = REGENCY_DATA.government.departments.find(d => d.id === deptId);
    if (!dept) return;
    
    const modal = document.getElementById('department-modal');
    const body = document.getElementById('department-modal-body');
    
    const showSecrets = meetsIntelRequirement(60);
    
    body.innerHTML = `
        <div class="department-detail">
            <div class="dept-detail-header">
                <span class="dept-large-icon">${dept.icon}</span>
                <div class="dept-header-info">
                    <h3>${dept.name}</h3>
                    <div class="dept-head-detail">${dept.head}</div>
                    <span class="status-badge large ${dept.status}">${dept.status.toUpperCase()}</span>
                </div>
            </div>
            
            <div class="dept-meta">
                <div class="meta-item">
                    <span class="meta-label">Personnel</span>
                    <span class="meta-value">${dept.employees}</span>
                </div>
            </div>
            
            <div class="dept-description-full">
                <h4>Overview</h4>
                <p>${dept.description}</p>
            </div>
            
            <div class="dept-functions">
                <h4>Primary Functions</h4>
                <ul>
                    ${dept.functions.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            
            <div class="dept-situation">
                <h4>Current Situation</h4>
                <p>${dept.currentSituation}</p>
            </div>
            
            ${showSecrets && dept.secrets ? `
                <div class="dept-secrets">
                    <h4>🔒 Classified Information</h4>
                    <ul class="secrets-list">
                        ${dept.secrets.map(s => `<li class="secret-item">${s}</li>`).join('')}
                    </ul>
                </div>
            ` : dept.secrets ? `
                <div class="dept-secrets locked">
                    <h4>🔒 Classified Information</h4>
                    <p class="locked-message">Insufficient clearance. Requires Level 60+ intel access.</p>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'flex';
}

// =============================================
// HISTORY VIEW
// =============================================

function renderHistory() {
    const container = document.getElementById('history-timeline');
    if (!container) return;
    
    const history = REGENCY_DATA.history;
    const intel = getIntelLevel();
    
    let html = `
        <div class="history-eras">
            <h4>Historical Eras</h4>
            <div class="eras-list">
                ${history.eras
                    .filter(e => meetsIntelRequirement(e.intelRequired))
                    .map(era => `
                        <div class="era-card" data-era="${era.id}">
                            <span class="era-icon">${era.icon}</span>
                            <div class="era-info">
                                <div class="era-name">${era.name}</div>
                                <div class="era-years">${era.years}</div>
                            </div>
                        </div>
                    `).join('')}
            </div>
        </div>
        
        <div class="history-events">
            <h4>Key Events</h4>
            <div class="events-timeline">
                ${history.keyEvents
                    .filter(e => meetsIntelRequirement(e.intelRequired))
                    .map(event => renderEventCard(event)).join('')}
            </div>
        </div>
        
        ${meetsIntelRequirement(history.successionCrisis.intelRequired) ? `
            <div class="succession-section">
                <h4>The Succession Question</h4>
                <p class="succession-summary">${history.successionCrisis.summary}</p>
                <div class="heirs-grid">
                    ${history.successionCrisis.potentialHeirs.map(heir => renderHeirCard(heir)).join('')}
                </div>
                <div class="succession-current">
                    <h5>Current Situation</h5>
                    <p>${history.successionCrisis.currentSituation}</p>
                </div>
            </div>
        ` : `
            <div class="succession-section locked">
                <h4>🔒 The Succession Question</h4>
                <p class="locked-message">Classified. Requires Level ${history.successionCrisis.intelRequired}+ intel access.</p>
            </div>
        `}
    `;
    
    container.innerHTML = html;
    initHistoryInteractions();
}

function renderEventCard(event) {
    const importanceClass = event.importance === 'critical' ? 'critical' : 
                            event.importance === 'major' ? 'major' : 'minor';
    
    return `
        <div class="event-card ${importanceClass}" data-event="${event.id}">
            <div class="event-date">${formatDate(event.date)}</div>
            <div class="event-content">
                <div class="event-title">${event.title}</div>
                <p class="event-summary">${event.summary}</p>
            </div>
            <div class="event-importance">${event.importance}</div>
        </div>
    `;
}

function renderHeirCard(heir) {
    return `
        <div class="heir-card">
            <div class="heir-name">${heir.name}</div>
            <div class="heir-relation">${heir.relation}</div>
            <div class="heir-status">${heir.status}</div>
            <p class="heir-claim">${heir.claim}</p>
            <div class="heir-regency-position">
                <strong>Regency Position:</strong> ${heir.regencyPosition}
            </div>
        </div>
    `;
}

function initHistoryInteractions() {
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', () => {
            openEventModal(card.dataset.event);
        });
    });
}

function openEventModal(eventId) {
    const event = REGENCY_DATA.history.keyEvents.find(e => e.id === eventId);
    if (!event) return;
    
    const modal = document.getElementById('event-modal');
    const body = document.getElementById('event-modal-body');
    
    body.innerHTML = `
        <div class="event-detail">
            <div class="event-header">
                <div class="event-date-large">${formatDate(event.date)}</div>
                <h3>${event.title}</h3>
                <span class="importance-badge ${event.importance}">${event.importance.toUpperCase()}</span>
            </div>
            
            <div class="event-section summary-section">
                <h4>Summary</h4>
                <p>${event.summary}</p>
            </div>
            
            <div class="event-section narrative-section">
                <h4>Official Narrative</h4>
                <p class="official-narrative">${event.officialNarrative}</p>
            </div>
            
            <div class="event-section details-section">
                <h4>Historical Details</h4>
                <p>${event.details}</p>
            </div>
            
            ${event.controversies && event.controversies.length > 0 ? `
                <div class="event-section controversies-section">
                    <h4>Controversies & Disputed Facts</h4>
                    <ul class="controversies-list">
                        ${event.controversies.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <div class="event-section legacy-section">
                <h4>Historical Legacy</h4>
                <p>${event.legacy}</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// =============================================
// MILITARY VIEW
// =============================================

function renderMilitary() {
    const container = document.getElementById('military-overview');
    if (!container) return;
    
    const military = REGENCY_DATA.military;
    const intel = getIntelLevel();
    
    let html = `
        <div class="military-header">
            <div class="military-emblem">${military.overview.icon}</div>
            <div class="military-title-block">
                <h3>${military.overview.name}</h3>
                <p class="military-motto">"${military.overview.motto}"</p>
            </div>
            <div class="military-status-block">
                <span class="threat-level">${military.overview.status}</span>
            </div>
        </div>
        
        <div class="military-stats">
            <div class="stat-box">
                <span class="stat-value">${military.overview.precrisisStrength.toLocaleString()}</span>
                <span class="stat-label">Pre-Crisis Strength</span>
            </div>
            <div class="stat-box critical">
                <span class="stat-value">${military.overview.currentEstimate}</span>
                <span class="stat-label">Current Estimate</span>
            </div>
        </div>
        
        <p class="military-description">${military.overview.description}</p>
        
        <div class="branches-section">
            <h4>Military Branches</h4>
            <div class="branches-grid">
                ${military.branches
                    .filter(b => meetsIntelRequirement(b.intelRequired))
                    .map(branch => renderBranchCard(branch)).join('')}
            </div>
        </div>
        
        <div class="fortifications-section">
            <h4>Key Fortifications</h4>
            <div class="fortifications-grid">
                ${military.fortifications.map(fort => renderFortificationCard(fort)).join('')}
            </div>
        </div>
        
        <div class="lost-assets-section">
            <h4>Lost Strategic Assets</h4>
            <div class="assets-list">
                ${military.lostAssets.map(asset => `
                    <div class="lost-asset">
                        <span class="asset-name">${asset.name}</span>
                        <span class="asset-type">${asset.type}</span>
                        <span class="asset-status ${asset.status.toLowerCase().replace(/\s+/g, '-')}">${asset.status}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    initMilitaryInteractions();
}

function renderBranchCard(branch) {
    const statusClass = branch.status;
    
    return `
        <div class="branch-card ${statusClass}" data-branch="${branch.id}">
            <div class="branch-header">
                <span class="branch-icon">${branch.icon}</span>
                <div class="branch-title-block">
                    <div class="branch-name">${branch.name}</div>
                    <div class="branch-specialty">${branch.specialty}</div>
                </div>
            </div>
            <div class="branch-strength">
                <div class="strength-item">
                    <span class="strength-label">Pre-crisis:</span>
                    <span class="strength-value">${branch.strength.precrisis}</span>
                </div>
                <div class="strength-item current">
                    <span class="strength-label">Current:</span>
                    <span class="strength-value">${branch.strength.current}</span>
                </div>
            </div>
            <div class="branch-status">
                <span class="status-badge ${statusClass}">${branch.status.toUpperCase()}</span>
            </div>
        </div>
    `;
}

function renderFortificationCard(fort) {
    const statusClass = fort.status.toLowerCase().includes('hostile') ? 'hostile' :
                        fort.status.toLowerCase().includes('contested') ? 'contested' :
                        fort.status.toLowerCase().includes('regency') ? 'friendly' : 'neutral';
    
    return `
        <div class="fortification-card ${statusClass}">
            <div class="fort-name">${fort.name}</div>
            <div class="fort-status">${fort.status}</div>
            <div class="fort-garrison">Garrison: ${fort.garrison}</div>
            <p class="fort-notes">${fort.notes}</p>
        </div>
    `;
}

function initMilitaryInteractions() {
    document.querySelectorAll('.branch-card').forEach(card => {
        card.addEventListener('click', () => {
            openUnitModal(card.dataset.branch);
        });
    });
}

function openUnitModal(branchId) {
    const branch = REGENCY_DATA.military.branches.find(b => b.id === branchId);
    if (!branch) return;
    
    const modal = document.getElementById('unit-modal');
    const body = document.getElementById('unit-modal-body');
    
    body.innerHTML = `
        <div class="unit-detail">
            <div class="unit-header">
                <span class="unit-large-icon">${branch.icon}</span>
                <div class="unit-header-info">
                    <h3>${branch.name}</h3>
                    <div class="unit-specialty">${branch.specialty}</div>
                    <span class="status-badge large ${branch.status}">${branch.status.toUpperCase()}</span>
                </div>
            </div>
            
            <div class="unit-commander">
                <span class="commander-label">Commander:</span>
                <span class="commander-name">${branch.commander}</span>
            </div>
            
            <div class="unit-strength-detail">
                <h4>Force Strength</h4>
                <div class="strength-comparison">
                    <div class="strength-bar pre-crisis">
                        <span class="bar-label">Pre-Crisis</span>
                        <span class="bar-value">${branch.strength.precrisis}</span>
                    </div>
                    <div class="strength-bar current">
                        <span class="bar-label">Current</span>
                        <span class="bar-value">${branch.strength.current}</span>
                    </div>
                </div>
            </div>
            
            <div class="unit-description">
                <h4>Overview</h4>
                <p>${branch.description}</p>
            </div>
            
            <div class="unit-equipment">
                <h4>Standard Equipment</h4>
                <ul>
                    ${branch.equipment.map(e => `<li>${e}</li>`).join('')}
                </ul>
            </div>
            
            <div class="unit-situation">
                <h4>Current Situation</h4>
                <p>${branch.currentSituation}</p>
            </div>
            
            <div class="unit-notable">
                <h4>Notable Information</h4>
                <p>${branch.notable}</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// =============================================
// DIPLOMACY VIEW
// =============================================

function renderDiplomacy() {
    const container = document.getElementById('diplomacy-map');
    if (!container) return;
    
    const diplomacy = REGENCY_DATA.diplomacy;
    const intel = getIntelLevel();
    
    let html = `
        <div class="diplomacy-legend">
            <div class="legend-item allied"><span class="legend-dot"></span> Allied</div>
            <div class="legend-item neutral"><span class="legend-dot"></span> Neutral</div>
            <div class="legend-item complicated"><span class="legend-dot"></span> Complicated</div>
            <div class="legend-item hostile"><span class="legend-dot"></span> Hostile</div>
            <div class="legend-item at-war"><span class="legend-dot"></span> At War</div>
        </div>
        
        <div class="factions-grid">
            ${diplomacy.factions
                .filter(f => meetsIntelRequirement(f.intelRequired))
                .map(faction => renderFactionCard(faction)).join('')}
        </div>
    `;
    
    container.innerHTML = html;
}

function renderFactionCard(faction) {
    const statusClass = faction.status.replace(/\s+/g, '-');
    
    // Calculate relationship bar width
    const relWidth = Math.max(0, Math.min(100, faction.relationship));
    const relColor = faction.relationship >= 70 ? 'good' :
                     faction.relationship >= 40 ? 'neutral' :
                     faction.relationship >= 20 ? 'poor' : 'hostile';
    
    return `
        <div class="faction-card ${statusClass}">
            <div class="faction-header">
                <span class="faction-icon">${faction.icon}</span>
                <div class="faction-title-block">
                    <div class="faction-name">${faction.name}</div>
                    <div class="faction-leader">${faction.leader}</div>
                </div>
                <span class="faction-status-badge ${statusClass}">${faction.status.toUpperCase()}</span>
            </div>
            
            <div class="relationship-meter">
                <div class="meter-bar ${relColor}" style="width: ${relWidth}%"></div>
                <span class="meter-value">${faction.relationship}%</span>
            </div>
            
            <p class="faction-description">${faction.description}</p>
            
            <div class="faction-history">
                <h5>Historical Relations</h5>
                <p>${faction.history}</p>
            </div>
            
            <div class="faction-current">
                <h5>Current Status</h5>
                <p>${faction.currentStatus}</p>
            </div>
            
            <div class="faction-concerns">
                <h5>Key Concerns</h5>
                <ul>
                    ${faction.concerns.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// =============================================
// CRISIS VIEW
// =============================================



        
function renderCrisis() {
    const container = document.getElementById('crisis-report');
    if (!container) return;
    
    const crisis = REGENCY_DATA.crisis;
    const intel = getIntelLevel();
    
    let html = `
        <div class="crisis-header">
            <div class="crisis-alert-icon">🚨</div>
            <div class="crisis-title-block">
                <h3>${crisis.overview.title}</h3>
                <div class="crisis-day">${crisis.overview.currentDay}</div>
            </div>
            <div class="threat-level-badge">${crisis.overview.threatLevel}</div>
        </div>
        
        <p class="crisis-description">${crisis.overview.description}</p>
        
        <div class="threats-section">
            <h4>Active Threats</h4>
            <div class="threats-grid">
                ${crisis.activeThreats.map(threat => renderThreatCard(threat)).join('')}
            </div>
        </div>
        
        <div class="exile-section">
            <h4>Government in Exile</h4>
            <div class="exile-card">
                <div class="exile-header">
                    <span class="exile-icon">🏛️</span>
                    <div class="exile-location">${crisis.governmentInExile.location}</div>
                </div>
                <div class="exile-leader">
                    <strong>Acting Leader:</strong> ${crisis.governmentInExile.leader}
                </div>
                <div class="exile-personnel">
                    <strong>Personnel:</strong> ${crisis.governmentInExile.personnel}
                </div>
                
                <div class="exile-capabilities">
                    <h5>Current Capabilities</h5>
                    <ul>
                        ${crisis.governmentInExile.capabilities.map(c => `<li class="capability">${c}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="exile-limitations">
                    <h5>Limitations</h5>
                    <ul>
                        ${crisis.governmentInExile.limitations.map(l => `<li class="limitation">${l}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="exile-priorities">
                    <h5>Immediate Priorities</h5>
                    <ol>
                        ${crisis.governmentInExile.priorities.map(p => `<li>${p}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </div>
        
        ${meetsIntelRequirement(crisis.rescueOperation.intelRequired) ? `
            <div class="rescue-section">
                <h4>🔒 Operation ${crisis.rescueOperation.codename}</h4>
                <div class="rescue-card classified">
                    <div class="rescue-target">
                        <strong>Target:</strong> ${crisis.rescueOperation.target}
                    </div>
                    <div class="rescue-location">
                        <strong>Location:</strong> ${crisis.rescueOperation.location}
                    </div>
                    <div class="rescue-status">
                        <strong>Status:</strong> ${crisis.rescueOperation.status.toUpperCase()}
                    </div>
                    
                    <div class="rescue-assets">
                        <h5>Available Assets</h5>
                        <ul>
                            ${crisis.rescueOperation.assets.map(a => `<li>${a}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="rescue-challenges">
                        <h5>Challenges</h5>
                        <ul>
                            ${crisis.rescueOperation.challenges.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="rescue-notes">
                        <p>${crisis.rescueOperation.notes}</p>
                    </div>
                </div>
            </div>
        ` : `
            <div class="rescue-section locked">
                <h4>🔒 Classified Operation</h4>
                <p class="locked-message">Insufficient clearance. Requires Level ${crisis.rescueOperation.intelRequired}+ intel access.</p>
            </div>
        `}
        
        <div class="civilian-section">
            <h4>Civilian Situation Report</h4>
            <div class="civilian-grid">
                <div class="civilian-stat">
                    <span class="stat-icon">🏃</span>
                    <span class="stat-label">Refugees</span>
                    <span class="stat-value">${crisis.civilianSituation.refugees}</span>
                </div>
                <div class="civilian-stat">
                    <span class="stat-icon">🏠</span>
                    <span class="stat-label">Shelters</span>
                    <span class="stat-value">${crisis.civilianSituation.shelters}</span>
                </div>
                <div class="civilian-stat">
                    <span class="stat-icon">🍞</span>
                    <span class="stat-label">Food Supply</span>
                    <span class="stat-value">${crisis.civilianSituation.foodSupply}</span>
                </div>
                <div class="civilian-stat">
                    <span class="stat-icon">⚖️</span>
                    <span class="stat-label">Public Order</span>
                    <span class="stat-value">${crisis.civilianSituation.publicOrder}</span>
                </div>
                <div class="civilian-stat">
                    <span class="stat-icon">🏥</span>
                    <span class="stat-label">Healthcare</span>
                    <span class="stat-value">${crisis.civilianSituation.healthcare}</span>
                </div>
                <div class="civilian-stat">
                    <span class="stat-icon">📢</span>
                    <span class="stat-label">Propaganda</span>
                    <span class="stat-value">${crisis.civilianSituation.propaganda}</span>
                </div>
            </div>
            <div class="morale-report">
                <strong>Public Morale:</strong> ${crisis.civilianSituation.morale}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}
function renderThreatCard(threat) {
    const severityClass = threat.severity;
    
    // Handle territories - could be array or string
    let territoriesHtml = '';
    if (Array.isArray(threat.territories)) {
        territoriesHtml = threat.territories.map(t => `<span class="territory-tag">${t}</span>`).join('');
    } else if (typeof threat.territories === 'string') {
        territoriesHtml = `<span class="territory-tag">${threat.territories}</span>`;
    } else {
        territoriesHtml = '<span class="territory-tag">Unknown</span>';
    }
    
    return `
        <div class="threat-card ${severityClass}">
            <div class="threat-header">
                <span class="threat-icon">${threat.icon}</span>
                <div class="threat-title">${threat.name}</div>
                <span class="severity-badge ${severityClass}">${threat.severity.toUpperCase()}</span>
            </div>
            
            <div class="threat-territories">
                <strong>Controlled Territories:</strong>
                <div class="territory-tags">
                    ${territoriesHtml}
                </div>
            </div>
            
            <div class="threat-forces">
                <strong>Estimated Forces:</strong> ${threat.forces}
            </div>
            
            <p class="threat-description">${threat.description}</p>
            
            <div class="threat-objectives">
                <strong>Known Objectives:</strong> ${threat.objectives}
            </div>
            
            <div class="threat-response">
                <strong>Our Response:</strong> ${threat.response}
            </div>
        </div>
    `;
}
// =============================================
// UTILITY FUNCTIONS
// =============================================

function formatDate(dateObj) {
    if (!dateObj || typeof dateObj !== 'object') return 'Unknown Date';
    
    const safeMonthIndex = Math.max(0, Math.min(dateObj.monthIndex, CALENDAR_DATA.months.values.length - 1));
    const monthData = CALENDAR_DATA.months.values[safeMonthIndex];
    const monthName = monthData ? monthData.name : `Month ${dateObj.monthIndex + 1}`;
    
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

export function refreshRegencyDisplay() {
    updateIntelDisplay();
    renderCurrentView();
}

export function setRegencyIntel(level) {
    if (state.intelLevels) {
        state.intelLevels.mushroom_regency = Math.max(0, Math.min(100, level));
        refreshRegencyDisplay();
    }
}

export function getRegencyStatus() {
    return {
        currentView,
        intelLevel: getIntelLevel(),
        debugMode: localDebugMode || state.debugMode,
        selectedOfficial,
        selectedDepartment
    };
}
