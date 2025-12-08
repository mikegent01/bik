// quests-main.js - UPDATED

import { QUEST_STATUS, QUEST_PRIORITY, QUEST_TYPES, DIFFICULTY } from './quests-constants.js';

export const MAIN_QUESTS = {
    'vigilance_fallen': {
        id: 'vigilance_fallen',
        title: "The Iron Sky Breach",
        subtitle: "The Vigilance Has Fallen",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'vigilance_saga',
        objective: "Recover the airship 'Vigilance' from Iron Legion occupation and rescue the captured crew.",
        assignees: ['party', 'liberated_toads'],
        primaryAssignee: 'party',
        difficulty: { 
            overall: DIFFICULTY.DEADLY, 
            combat: DIFFICULTY.DEADLY, 
            stealth: DIFFICULTY.HARD,
            social: DIFFICULTY.MODERATE 
        },
        tags: ['combat', 'rescue', 'airship', 'betrayal', 'urgent', 'faction-war'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 18 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 },
            deadline: { year: 1040, monthIndex: 6, day: 25 }
        },
        description: "The unthinkable has happened. Following the 'Iron Sky Breach' event at Raventree Manor, the Iron Legion launched a ruthless boarding action against the Vigilance. Despite Captain Ryan's desperate resistance and the crew's valiant stand, the ship was seized in a brutal thirty-minute assault. Ryan was forced to leap from the burning deck, plummeting into the forest canopy below. The surviving Liberated Toads are either scattered across the countryside, hiding in the wreckage of their dreams, or in Legion chains being transported to an unknown facility. The Iron Legion now controls the skies above the Midlands, and with them, the party's only true home. Today's passage of the Iron Mandate has made the situation exponentially worse—the Legion now has legal authority to hunt down survivors.",
        
        loreEntries: ['vigilance_history', 'iron_legion_tactics', 'ryan_the_pilot', 'iron_mandate'],
        
        consequences: {
            success: "Reclaiming the Vigilance restores the party's mobility and deals a crushing blow to Legion morale. The Liberated Toads gain a symbol of hope.",
            failure: "The Vigilance is stripped for parts and the crew is executed publicly. The party becomes permanent ground-bound fugitives.",
            partial: "The ship may be recovered but critically damaged, or crew members may be lost in the rescue attempt."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Captain's Key (Restored)", description: "Full access to the Vigilance's secure compartments" },
                { type: 'reputation', faction: 'liberated_toads', amount: 500, description: "Heroes of the Liberation" },
                { type: 'reputation', faction: 'iron_legion', amount: -1000, description: "Priority Enemies of the State" }
            ],
            conditional: [
                { condition: "Save all crew members", reward: { type: 'title', name: "The Unbroken", description: "A title of legend among the Toads" }},
                { condition: "Capture Legion Commander", reward: { type: 'intel', name: "Legion Command Codes", description: "Tactical advantage in future encounters" }},
                { condition: "Destroy Legion flagship", reward: { type: 'gold', amount: 5000, description: "Salvage rights from the wreckage" }}
            ],
            xp: 8000,
            gold: { min: 2000, max: 5000 }
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Boarding", 
                description: "Iron Legion shock troops breached the hull using void-anchor grapples. The crew was overwhelmed within minutes. Screams echoed across Wahbook as toads posted their final messages.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 },
                outcomes: [
                    "17 crew members confirmed captured",
                    "3 confirmed dead in the initial assault",
                    "Unknown number escaped into the forest"
                ]
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "The Fall", 
                description: "Ryan plummeted 300 feet from the ship's observation deck. His fate was uncertain for two agonizing hours until the Rakasha confirmed a thermal signature matching his location in the eastern forest.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 },
                outcomes: [
                    "Ryan survived with severe injuries",
                    "Currently hiding in a cave system near Raventree",
                    "Has critical information about Legion weak points"
                ]
            },
            { 
                id: 'm3', 
                status: 'active', 
                title: "Regroup and Retaliate", 
                description: "The party is fractured. The Vigilance has been sighted flying low over Raventree Manor, broadcasting Iron Legion propaganda and ignoring the battles below. It is taunting us.",
                goals: [
                    { text: "Escape Raventree Manor alive", status: 'active', priority: 'critical' },
                    { text: "Locate Captain Ryan in the eastern forest", status: 'pending', priority: 'high' },
                    { text: "Contact the Rakasha for aerial reconnaissance", status: 'pending', priority: 'medium' },
                    { text: "Identify the Legion's prisoner transport route", status: 'locked', priority: 'high' },
                    { text: "Rally the scattered Toad survivors", status: 'pending', priority: 'medium' }
                ],
                choices: [
                    {
                        id: 'approach_method',
                        title: "Choose Your Approach",
                        description: "How will you retake the Vigilance?",
                        options: [
                            { 
                                id: 'stealth', 
                                name: "Ghost Protocol", 
                                description: "Infiltrate at night with a small team. Lower risk, but if discovered, no backup.",
                                requirements: ["Stealth proficiency", "At least one crew member inside"],
                                consequences: { success: "Clean extraction possible", failure: "Team captured, leverage lost" }
                            },
                            { 
                                id: 'assault', 
                                name: "Iron Storm", 
                                description: "Full frontal assault with allied forces. High casualties likely, but overwhelming.",
                                requirements: ["Allied military support", "Siege equipment"],
                                consequences: { success: "Ship may be damaged but crew saved", failure: "Catastrophic losses" }
                            },
                            { 
                                id: 'sabotage', 
                                name: "The Trojan Toad", 
                                description: "Allow 'capture' of a party member to sabotage from within.",
                                requirements: ["Volunteer willing to be captured", "Hidden communication method"],
                                consequences: { success: "Internal chaos allows easy boarding", failure: "Volunteer is executed" }
                            },
                            { 
                                id: 'diplomacy', 
                                name: "The Devil's Bargain", 
                                description: "Negotiate with a Legion officer who may have... flexible loyalties.",
                                requirements: ["Significant leverage or payment", "Contact within Legion"],
                                consequences: { success: "Bloodless resolution", failure: "Trap sprung, position revealed" },
                                note: "Humpik has established contact with a Legion spy. This path may now be viable."
                            }
                        ]
                    }
                ]
            },
            {
                id: 'm4',
                status: 'locked',
                title: "The Siege",
                description: "Execute the plan to breach the Legion's defenses and board the Vigilance.",
                goals: [
                    { text: "Disable the Legion's communication array", status: 'locked' },
                    { text: "Neutralize the anti-air batteries", status: 'locked' },
                    { text: "Board the Vigilance", status: 'locked' },
                    { text: "Secure the engine room", status: 'locked' },
                    { text: "Eliminate or capture the Legion commander", status: 'locked' }
                ]
            },
            {
                id: 'm5',
                status: 'locked',
                title: "Reclamation",
                description: "Retake full control of the Vigilance and ensure the crew's safety.",
                goals: [
                    { text: "Clear all decks of Legion forces", status: 'locked' },
                    { text: "Free the imprisoned crew", status: 'locked' },
                    { text: "Repair critical systems", status: 'locked' },
                    { text: "Escape Legion airspace", status: 'locked' }
                ]
            }
        ],

        npcs: {
            allies: ['captain_ryan', 'toad_lee', 'roger_the_bold', 'rakasha_pilot'],
            enemies: ['legion_commander_vex', 'iron_legion', 'void_hunters'],
            neutral: ['smuggler_collective', 'mercenary_guild', 'legion_spy']
        },

        locations: {
            primary: 'vigilance_airship',
            related: ['raventree_manor', 'eastern_forest', 'legion_command_post', 'prisoner_convoy_route']
        },

        hints: [
            "Ryan knows a maintenance hatch that isn't on any official schematic.",
            "The Legion rotates guards every four hours - there's a fifteen minute window during shift change.",
            "One of the Legion officers has gambling debts to the wrong people...",
            "The Rakasha owe Ryan a life-debt. They might provide more than just reconnaissance.",
            "Humpik's new Legion contact might prove useful—if she can be trusted."
        ],

        journalEntries: [
            { date: { year: 1040, monthIndex: 6, day: 18 }, author: 'system', text: "The Vigilance has been captured. All hands scattered. This is our darkest hour." },
            { date: { year: 1040, monthIndex: 6, day: 19 }, author: 'ryan', text: "Broken ribs. Can barely breathe. But I'm alive. The bastards have my ship. They'll pay for every scratch on her hull." },
            { date: { year: 1040, monthIndex: 6, day: 20 }, author: 'system', text: "Contact established with Ryan. He's injured but mobile. Planning phase initiated." },
            { date: { year: 1040, monthIndex: 6, day: 21 }, author: 'system', text: "The Iron Mandate has passed. The Legion now has emergency powers. Our window is closing." }
        ],

        relatedQuests: ['retrieve_the_staff', 'toads_a_place_to_call_home', 'liberated_toads_integration']
    },

    'retrieve_the_staff': {
        id: 'retrieve_the_staff',
        title: "The Brandished Staff",
        subtitle: "A Weapon That Remembers",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'vigilance_saga',
        objective: "Cleanse, contain, or destroy the corruption of X.O.'s staff before it claims more lives.",
        assignees: ['dan', 'toad_lee'],
        primaryAssignee: 'dan',
        difficulty: { 
            overall: DIFFICULTY.HARD, 
            magic: DIFFICULTY.DEADLY, 
            knowledge: DIFFICULTY.HARD 
        },
        tags: ['artifact', 'curse', 'tragedy', 'redemption', 'time-sensitive'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 15 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 },
            deadline: { year: 1040, monthIndex: 6, day: 28 }
        },
        
        description: "The artifact recovered from the rogue mage X.O. is no mere weapon—it is a conduit of raw, unstable magic that seems to possess a malevolent sentience. When Dan, driven by desperation and grief, attempted to wield it to protect the toads during the Legion's assault, the staff recognized his pain and fed upon it. The resulting magical detonation cost Dan his right arm and unleashed a devastating blast that killed thirteen of his kin—toads who trusted him to protect them. Despite his injury, Dan proved his courage today by pulling Green T from the Mirror Dimension with his one remaining arm. The staff remains sealed, but the binding weakens with each passing hour.",

        loreEntries: ['xo_the_betrayer', 'iron_binding_ritual', 'arcane_weapons_history'],

        consequences: {
            success: "The staff is rendered safe. Dan may find peace, and the Toads gain a powerful defensive artifact.",
            failure: "The staff detonates, causing catastrophic magical fallout across a mile radius. Hundreds die.",
            partial: "The staff is contained but not cleansed—it becomes a time bomb requiring constant maintenance."
        },

        rewards: {
            guaranteed: [
                { type: 'item', name: "Staff of the Shattered Veil", description: "If cleansed: A powerful arcane focus. If contained: A dangerous but usable weapon." },
                { type: 'reputation', faction: 'liberated_toads', amount: 300, description: "Closure for the fallen" }
            ],
            conditional: [
                { condition: "Cleanse the staff completely", reward: { type: 'ability', name: "Dan's Redemption", description: "Dan gains a unique bond with the staff, allowing limited safe usage" }},
                { condition: "Destroy the staff", reward: { type: 'xp_bonus', amount: 2000, description: "Release of trapped souls grants enlightenment" }},
                { condition: "Bind the staff to a new wielder", reward: { type: 'ally', name: "Staff-Bound Mage", description: "A powerful but unstable magical ally" }}
            ],
            xp: 4000,
            gold: { min: 500, max: 1500 }
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "Assess the Seal", 
                description: "Toad Lee identified the degrading Iron Binding runes holding the staff's power in check. The seal was originally designed by X.O. himself—a contingency in case he lost control. But X.O. is dead, and his magic dies with him.",
                completedDate: { year: 1040, monthIndex: 6, day: 15 },
                outcomes: [
                    "Seal integrity: 47% and falling",
                    "Estimated time to failure: 8-12 days",
                    "The staff's 'voice' is becoming audible to those nearby"
                ]
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "The Catastrophe", 
                description: "Dan's failed attempt to master the staff resulted in tragedy that will haunt him forever. Thirteen names are now carved into his memory. Thirteen faces that trusted him.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 },
                outcomes: [
                    "Dan lost his right arm below the elbow",
                    "Thirteen Liberated Toads killed instantly",
                    "Dan is suffering from severe magical trauma and survivor's guilt",
                    "Some Toads now fear or blame Dan"
                ],
                memorialList: [
                    "Pipwick", "Toadsworth Jr.", "Bella", "Croaker", "Fern", "Gill", "Hop", 
                    "Ivy", "Jumper", "Kelp", "Lily", "Marsh", "Puddle"
                ]
            },
            { 
                id: 'm3', 
                status: 'active', 
                title: "Seek the Arcane Smith", 
                description: "Rumors point to a legendary smith in the Undercity who specializes in cursed metals and corrupted artifacts. This 'Forgemaster Grimm' is said to have unmade weapons that drove their wielders to madness. Finding them is the first challenge—convincing them to help may be harder. The Mages' Guild may have information, but after the Iron Mandate, their cooperation is uncertain.",
                goals: [
                    { text: "Locate an entrance to the Undercity", status: 'pending', priority: 'high' },
                    { text: "Find a guide who knows the Forgemaster's location", status: 'pending', priority: 'medium' },
                    { text: "Gather payment for the Forgemaster's services", status: 'pending', priority: 'medium' },
                    { text: "Transport the staff safely to the forge", status: 'locked', priority: 'critical' }
                ],
                choices: [
                    {
                        id: 'staff_fate',
                        title: "The Staff's Fate",
                        description: "What should be done with the staff?",
                        options: [
                            {
                                id: 'cleanse',
                                name: "Cleansing Ritual",
                                description: "Attempt to purify the staff, removing its corruption while preserving its power.",
                                requirements: ["Forgemaster's assistance", "Rare purification reagents", "A pure heart to anchor the ritual"],
                                consequences: { success: "Staff becomes a holy artifact", failure: "Corruption spreads to the ritualist" }
                            },
                            {
                                id: 'contain',
                                name: "Permanent Binding",
                                description: "Seal the staff in an unbreakable prison, never to be used again.",
                                requirements: ["Mythril containment vessel", "Three binding anchors", "Location of eternal stillness"],
                                consequences: { success: "Threat neutralized forever", failure: "Prison cracks in 1d100 years" }
                            },
                            {
                                id: 'destroy',
                                name: "Unmake the Weapon",
                                description: "Destroy the staff utterly, releasing all trapped energy in a controlled detonation.",
                                requirements: ["Void-forge temperature", "Sacrificial focus to absorb the blast", "Evacuation of surrounding area"],
                                consequences: { success: "Staff destroyed, minor magical fallout", failure: "Catastrophic explosion, major casualties" }
                            },
                            {
                                id: 'wield',
                                name: "Master the Corruption",
                                description: "Find someone strong enough to dominate the staff's will and turn its power to good.",
                                requirements: ["Willing wielder with exceptional willpower", "Binding tattoos", "Ongoing maintenance rituals"],
                                consequences: { success: "Gain a powerful but risky ally/weapon", failure: "New wielder becomes a threat" }
                            }
                        ]
                    }
                ]
            },
            {
                id: 'm4',
                status: 'locked',
                title: "The Forgemaster's Price",
                description: "Forgemaster Grimm does not work for gold. Their price is always... unusual.",
                goals: [
                    { text: "Discover what the Forgemaster wants", status: 'locked' },
                    { text: "Acquire the payment", status: 'locked' },
                    { text: "Deliver without betrayal", status: 'locked' }
                ]
            },
            {
                id: 'm5',
                status: 'locked',
                title: "The Final Forging",
                description: "Witness or participate in the resolution of the staff's corruption.",
                goals: [
                    { text: "Prepare the ritual space", status: 'locked' },
                    { text: "Survive the process", status: 'locked' },
                    { text: "Contain any secondary effects", status: 'locked' }
                ]
            }
        ],

        npcs: {
            allies: ['toad_lee', 'dan'],
            enemies: ['staff_corruption_entity'],
            neutral: ['forgemaster_grimm', 'undercity_guides']
        },

        locations: {
            primary: 'toad_camp_current',
            related: ['undercity_entrance', 'grimms_forge', 'site_of_tragedy']
        },

        hints: [
            "The staff seems to react to strong emotions—particularly grief and rage.",
            "Forgemaster Grimm hasn't been seen on the surface in thirty years. They had a falling out with the Mages' Guild.",
            "The thirteen souls killed by the staff... might still be trapped inside it.",
            "Dan's severed arm occasionally twitches in the direction of the staff, even from a distance.",
            "Archie's new Mages' Guild membership might help locate the Forgemaster."
        ],

        journalEntries: [
            { date: { year: 1040, monthIndex: 6, day: 15 }, author: 'toad_lee', text: "The binding is failing. I can hear it whispering at night. It knows my name." },
            { date: { year: 1040, monthIndex: 6, day: 18 }, author: 'dan', text: "What have I done? Thirteen souls. Thirteen friends. Their blood is on my hands—on my one remaining hand." },
            { date: { year: 1040, monthIndex: 6, day: 20 }, author: 'system', text: "Seal integrity now at 31%. Time is running out." },
            { date: { year: 1040, monthIndex: 6, day: 21 }, author: 'dan', text: "Pulled Green T from that mirror with one arm. Maybe I'm not completely useless. Maybe there's still a chance to make things right." }
        ],

        relatedQuests: ['dan_reclaim_the_staff', 'vigilance_fallen']
    },

    'artifacts_of_balance': {
        id: 'artifacts_of_balance',
        title: "The Artifacts of Balance",
        subtitle: "Three Demons, Three Timelines, One Chance",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Purge the three demons anchoring the temporal instability at Raventree Manor to heal the wounded timeline and free those trapped within.",
        assignees: ['party', 'self_reflection_oracle'],
        primaryAssignee: 'party',
        difficulty: { 
            overall: DIFFICULTY.DEADLY, 
            combat: DIFFICULTY.HARD, 
            puzzle: DIFFICULTY.DEADLY,
            magic: DIFFICULTY.HARD 
        },
        tags: ['supernatural', 'time', 'demons', 'puzzle', 'cosmic-horror'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 19 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 }
        },

        description: "The Oracle of Raventree—a being who has lived the same day ten thousand times—has revealed the true nature of the manor's curse. It is not merely haunted; it is a nexus point where three distinct timelines have been forcibly braided together by demonic anchors. One anchor remains active in the shadows, while another battle rages in the Silent Grove. The Mirror Terror was spared by Humpik, angering the Oracle. Now, Markop fights a Titan-sized battle in the gardens, while Archie hunts the final demon in the depths.",

        loreEntries: ['raventree_curse_origin', 'timeline_bleeding', 'demon_taxonomy', 'oracle_families'],

        consequences: {
            success: "The timelines separate. Raventree becomes just a manor again. Those trapped are freed. Eager's mind is restored.",
            partial: "With the Mirror Terror spared, the curse is weakened but not broken. Residual instability remains.",
            failure: "The timelines collapse into one another. Everyone in the manor is erased from existence—past, present, and future."
        },

        rewards: {
            guaranteed: [
                { type: 'artifact', name: "Shard of Stabilized Time", description: "A crystal containing a moment of perfect stillness. Has various temporal applications." },
                { type: 'ally', name: "The Oracle's... Tolerance", description: "The Oracle is displeased that the Mirror Terror was spared, but the ritual can proceed." },
                { type: 'reputation', faction: 'cosmic_entities', amount: 200, description: "Notice from beings beyond mortal ken", name: "Cosmic Notice" }
            ],
            conditional: [
                { condition: "Destroy all three demons", reward: { type: 'title', name: "Timeline Mender", description: "You have healed a wound in reality itself" }, status: 'failed', reason: "Mirror Terror was spared by Humpik" },
                { condition: "Spare the Mirror Terror", reward: { type: 'favor', name: "Legion Intelligence Contact", description: "The Iron Legion spy owes Humpik for this outcome" }, status: 'earned' },
                { condition: "Complete without any party deaths", reward: { type: 'blessing', name: "Temporal Immunity", description: "Resistance to time-manipulation effects" }, status: 'pending' }
            ],
            xp: 10000,
            gold: { min: 3000, max: 8000 }
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Star Ascendant", 
                description: "The entity once known as the 'Evil Toad' utilized a Star Fragment to transcend its mortal form, becoming something between a god and an abomination. This violent apotheosis destabilized the first temporal anchor.",
                completedDate: { year: 1040, monthIndex: 6, day: 19 },
                outcomes: [
                    "First anchor destroyed (unintentionally)",
                    "God Toad's location confirmed: Fawful's Castle",
                    "Timeline instability increased by 40%",
                    "The 'past' layer of the manor is now accessible"
                ]
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "The Time War Revealed", 
                description: "Markop and Green T discovered the hidden history buried in the abandoned wing—the Oracle's family waged a secret war against time-manipulating entities for generations. They lost. The obituary book contains names that haven't been born yet.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 },
                outcomes: [
                    "Oracle family history discovered",
                    "Weakness of the demons revealed: They fear their own reflections",
                    "The 'key' Green T possessed opens the demon's prison-layer",
                    "Markop gained +2 to saves against temporal effects"
                ]
            },
            { 
                id: 'm3', 
                status: 'active', 
                title: "The Three Demons", 
                description: "Two anchors are accounted for. The third is being hunted.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 },
                goals: [
                    { 
                        text: "The Spider Demon (The Weaver of Moments)", 
                        status: 'active', 
                        details: "ENGAGED: Markop has assumed Titan form and is battling the Arachnid Matriarch in the Silent Grove. The battle is ongoing.",
                        priority: 'critical',
                        outcome: 'ongoing'
                    },
                    { 
                        text: "The Mirror Terror (The Reflection That Hungers)", 
                        status: 'completed', 
                        details: "SPARED by Humpik. Contained in the mirror dimension by choice. The Oracle is displeased—demands blood for the ritual.",
                        priority: 'completed',
                        outcome: 'spared'
                    },
                    { 
                        text: "The Arcane Wraith (The Echo of Uncast Spells)", 
                        status: 'active', 
                        details: "Archie is hunting it alone in the lower levels. He has a provisional Mages' Guild card now.",
                        priority: 'high'
                    }
                ],
                demonProfiles: [
                    {
                        id: 'spider_demon',
                        name: "The Weaver of Moments",
                        status: 'engaged',
                        domain: "Connections between cause and effect",
                        weakness: "Titan-scale brute force",
                        reward: "Thread of Causality",
                        engagedBy: "Titan Markop & Remi",
                        method: "Physical Combat & Oracle Blessing"
                    },
                    {
                        id: 'mirror_terror',
                        name: "The Reflection That Hungers",
                        status: 'contained',
                        domain: "Identity and self-perception",
                        weakness: "Compassion / Lack of hostility",
                        reward: "Legion Spy Favor (earned by Humpik)",
                        sparedBy: "Humpik",
                        reason: "Showed mercy to the creature",
                        consequence: "Oracle demands blood for the ritual",
                        legionInvolvement: "A Legion spy observed and approved—this served their interests"
                    },
                    {
                        id: 'arcane_wraith',
                        name: "The Echo of Uncast Spells",
                        status: 'active',
                        domain: "Magical potential and unrealized power",
                        weakness: "Can be starved by suppressing all magic in its vicinity",
                        reward: "Spell Echo Stone (stores one spell for later release)",
                        huntedBy: "Archie (alone)",
                        note: "Archie now has a provisional Mages' Guild card"
                    }
                ]
            },
            {
                id: 'm4',
                status: 'active',
                title: "The Oracle's Ritual",
                description: "The Oracle has led the party to the Ruined Hall. Because the Mirror Terror was spared rather than destroyed, the ritual requires additional sacrifice—blood. The Iron Legion watches from the shadows. A spy has made a deal with Humpik.",
                goals: [
                    { text: "Await outcome of the Spider Demon battle", status: 'active', priority: 'critical' },
                    { text: "Await Archie's return from hunting the Arcane Wraith", status: 'active', priority: 'high' },
                    { text: "Provide blood sacrifice for the ritual (Oracle's demand)", status: 'pending', priority: 'high' },
                    { text: "Complete the Oracle's separation ritual", status: 'pending', priority: 'critical' },
                    { text: "Decide: Trust the Oracle or the Legion?", status: 'active', priority: 'critical' }
                ],
                currentSituation: {
                    location: "Ruined Hall",
                    oracleStatus: "Demanding blood for the ritual",
                    legionPresence: "Two spies watching; one made a deal with Humpik",
                    archieStatus: "Hunting the Arcane Wraith in lower levels with new Guild card",
                    greenTStatus: "Fled in panic after being rescued from the mirror",
                    partyMood: "Fractured trust, uncertain alliances"
                }
            },
            {
                id: 'm5',
                status: 'locked',
                title: "The Convergence",
                description: "The ritual to separate the timelines. Success or failure will reshape reality.",
                goals: [
                    { text: "Survive the ritual", status: 'locked' },
                    { text: "Contain any secondary effects", status: 'locked' },
                    { text: "Escape the manor before midnight", status: 'locked' }
                ]
            }
        ],

        npcs: {
            allies: ['self_reflection_oracle', 'ghost_of_lady_raventree'],
            enemies: ['arcane_wraith', 'spider_matriarch', 'god_toad'],
            neutral: ['iron_legion_spy', 'blue_humpik'],
            removed: ['red_humpik']
        },

        locations: {
            primary: 'raventree_manor',
            current: 'ruined_hall',
            related: ['silent_grove', 'mirror_dimension', 'dance_hall', 'upper_house', 'clock_tower', 'basement_web', 'solarium']
        },

        hints: [
            "The Oracle cannot lie, but he cannot tell the whole truth either. He's displeased about the Mirror Terror being spared.",
            "The Legion spy told Humpik not to let the Mages' Guild get to the Oracle. They want him in Legion custody.",
            "Archie punched a mirror in anger when he learned Humpik was supposed to kill the Mirror Terror. His hand bleeds.",
            "The clock tower hasn't struck midnight in 200 years. When it does, the timelines will synchronize—for better or worse.",
            "The spy said: 'Do your little ritual, have him do it, the iron will strike while it's hot.'"
        ],

        recentEvents: [
            { 
                timestamp: "Day 21 - Solarium Battle",
                event: "The party confronted the Shard Stalker (Mirror Terror's physical form)",
                details: [
                    "Oracle crashed into the monster; Humpik held the front line",
                    "Dan pulled Green T from the mirror dimension with one arm",
                    "Bowser punched the mirror repeatedly, bleeding heavily",
                    "Humpik was pulled into the mirror dimension",
                    "A 'Red Humpik' emerged while the real Humpik was inside",
                    "Bowser killed the Shard Stalker's physical form"
                ]
            },
            {
                timestamp: "Day 21 - Mirror Dimension",
                event: "Humpik's journey through the mirror realm",
                details: [
                    "Met a 'Blue Humpik' who warned him about attacking reflections",
                    "Found a Legion spy reading in a floating library",
                    "The spy gave him thieves' tools and information",
                    "She said: 'We need bronze, steel, iron weapons—no spells'",
                    "Humpik agreed to help deliver the Oracle to Legion custody",
                    "Chose to spare the Mirror Terror; it is now contained (not destroyed)"
                ]
            },
            {
                timestamp: "Day 21 - Silent Grove",
                event: "Battle engaged",
                details: [
                    "Rescue party ambushed by Spider Matriarch",
                    "Markop accepted Oracle's blessing to grow to Titan size",
                    "Vigilance observed flying overhead broadcasting propaganda"
                ]
            }
        ],

        relatedQuests: ['main_quest_raventree', 'rescue_green_t', 'archie_god_toad_hunt', 'archie_fugitive_of_the_accords']
    },

    'main_quest_raventree': {
        id: 'main_quest_raventree',
        title: "The Curse of Raventree",
        subtitle: "Escape the Impossible Manor",
        type: QUEST_TYPES.MAIN,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.CRITICAL,
        arcId: 'raventree_manor',
        objective: "Survive the escalating supernatural incursions, reunite the scattered party, and escape Raventree Manor alive.",
        assignees: ['party'],
        primaryAssignee: 'party',
        difficulty: { 
            overall: DIFFICULTY.DEADLY, 
            survival: DIFFICULTY.HARD, 
            navigation: DIFFICULTY.DEADLY, 
            sanity: DIFFICULTY.HARD 
        },
        tags: ['survival', 'horror', 'supernatural', 'split-party', 'urgent'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 19 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 }
        },

        description: "What began as a simple investigation has become a waking nightmare. The party is split across the manor. While Bowser and Dan regroup in the Ruined Hall, a rescue team led by Markop and Remi is fighting for their lives in the Silent Grove against a massive Arachnid Matriarch. Humpik has returned from the Mirror Dimension with a secret deal. Green T is lost in the halls. The Oracle demands blood. And overhead, the captured Vigilance broadcasts Legion propaganda, mocking the party's plight.",

        loreEntries: ['raventree_manor_history', 'lady_raventree_tragedy', 'the_great_sealing'],

        consequences: {
            success: "The party escapes with their lives and sanity (mostly) intact. The curse begins to weaken.",
            failure: "The manor claims more souls. Those who die here don't rest—they become part of the curse.",
            partial: "Some escape. Others are left behind, trapped in temporal loops or worse."
        },

        rewards: {
            guaranteed: [
                { type: 'experience', name: "Supernatural Survival", description: "+2 to saves vs fear and supernatural effects permanently" },
                { type: 'lore', name: "Raventree Secrets", description: "Knowledge that may prove useful against other haunted locations" }
            ],
            conditional: [
                { condition: "Everyone survives", reward: { type: 'bond', name: "Forged in Horror", description: "Party gains +1 to all rolls when protecting each other" }},
                { condition: "Solve the curse's origin", reward: { type: 'artifact', name: "Lady Raventree's Locket", description: "Powerful protective charm" }},
                { condition: "Map the entire manor", reward: { type: 'knowledge', name: "Complete Manor Schematic", description: "Valuable to collectors and curse-breakers" }}
            ],
            xp: 6000,
            gold: { min: 1000, max: 3000 }
        },

        partyStatus: {
            archie: { 
                location: "Lower Levels (Hunting Arcane Wraith)", 
                status: "Provisional Mages' Guild Member", 
                sanity: 7,
                notes: "Has new Guild card. Hunting alone. Hand bleeding from punching mirror in anger."
            },
            markop: { 
                location: "Silent Grove", 
                status: "TITAN FORM (Active)", 
                sanity: 7,
                notes: "Accepted Oracle's blessing. Currently giant-sized and wrestling a spider."
            },
            remi: {
                location: "Silent Grove",
                status: "Combat Active",
                sanity: 5,
                notes: "With Mossy (damaged). Defending against spiders."
            },
            waluigi: {
                location: "Silent Grove",
                status: "Webbed / Casting Ice",
                sanity: 4,
                notes: "Claiming to be an 'Ice King'. Providing chaotic support."
            },
            eager: {
                location: "Silent Grove",
                status: "Rescued / Combat",
                sanity: 3,
                notes: "Freed from cocoon. Blindly firing pepper spray."
            },
            bowser: { 
                location: "Ruined Hall", 
                status: "Protective of Toads / Suspicious", 
                sanity: 7,
                notes: "Killed the Shard Stalker. Hands bleeding from punching mirrors. Doesn't fully trust Humpik."
            },
            humpik: { 
                location: "Ruined Hall", 
                status: "Returned (Secret Legion Deal)", 
                sanity: 8,
                notes: "Made deal with Legion spy. Has thieves' tools. Agreed to help deliver Oracle to Legion custody.",
                secretAgenda: true
            },
            dan: { 
                location: "Ruined Hall", 
                status: "One-Armed Hero", 
                sanity: 6,
                notes: "Pulled Green T from mirror with one arm. Proving his worth despite his injury."
            },
            green_t: { 
                location: "Unknown (Fled)", 
                status: "Traumatized / Fleeing", 
                sanity: 2,
                notes: "Rescued from mirror but fled in panic. Broke a lock to escape. Critical mental state."
            }
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Entry", 
                description: "Waluigi forced the ancient door open with a crowbar and a prayer. The door closed behind them of its own accord. The nightmare began.",
                completedDate: { year: 1040, monthIndex: 6, day: 19 }
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "The Greenhouse Inferno", 
                description: "When Rust Monsters emerged from the walls, Archie made a split-second decision. The resulting fire destroyed the greenhouse, the monsters, and any hope of a stealthy investigation.",
                completedDate: { year: 1040, monthIndex: 6, day: 17 },
                outcomes: [
                    "Rust Monsters eliminated",
                    "Greenhouse destroyed",
                    "Iron Legion alerted to party's presence",
                    "Archie's warrant elevated to 'capture or kill'"
                ]
            },
            { 
                id: 'm3', 
                status: 'completed', 
                title: "The Upper House Breach", 
                description: "The party breached the distorted upper levels via a hidden staircase.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            },
            {
                id: 'm4',
                status: 'completed',
                title: "Solarium Showdown",
                description: "The final confrontation with the Mirror Terror in the shattered solarium. Mirrors everywhere. Reflections that moved wrong. And then the chaos.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 },
                outcomes: [
                    "Oracle crashed into the Shard Stalker to start the fight",
                    "Humpik held the front line against the creature",
                    "Toad Lee hopped over the Oracle to attack",
                    "Archie threw flaming twigs at the monster",
                    "The creature retreated into mirrors, creating duplicates",
                    "Bowser arrived, angry about Humpik's caution",
                    "A reflection of Humpik appeared in a mirror",
                    "The real Humpik smashed the mirror containing his reflection",
                    "Archie considered using unsanctioned magic but held back",
                    "Dan pushed mirrors over with his one arm",
                    "Bowser used fire breath on the creature",
                    "The creature pulled Humpik into the mirror dimension",
                    "Dan pulled Green T from the mirror—but Green T fled in panic",
                    "A 'Red Humpik' emerged from the mirror (later revealed as impostor)",
                    "Bowser punched the mirror three times, hands bleeding",
                    "The Shard Stalker was destroyed when Bowser shattered the mirror"
                ]
            },
            {
                id: 'm5',
                status: 'completed',
                title: "Humpik's Mirror Journey",
                description: "While the party fought the Shard Stalker, Humpik traveled through the mirror dimension.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 },
                outcomes: [
                    "Found himself in a floating library with books and pews",
                    "Heard Green T calling out—followed the voice",
                    "Encountered a clone of himself created by the monster",
                    "Met a Legion spy reading in the dimension",
                    "The spy revealed she was sent to observe, not kill",
                    "She explained the Supernatural Sovereignty Act would pass",
                    "Made a deal: help deliver the Oracle to Legion custody",
                    "Received thieves' picks and tools from the spy",
                    "Met a 'Blue Humpik' who warned about attacking reflections",
                    "Chose to SPARE the Mirror Terror rather than destroy it",
                    "The creature was contained in the mirror dimension by choice",
                    "Returned to reality, displacing the 'Red Humpik' impostor"
                ]
            },
            {
                id: 'm6',
                status: 'active',
                title: "The Ruined Hall Gathering",
                description: "The party has regrouped in the Ruined Hall. Trust is fractured. The Oracle demands blood. The Legion watches. Archie hunts alone.",
                goals: [
                    { text: "Secure the Ruined Hall", status: 'completed', priority: 'high' },
                    { text: "Locate the fleeing Green T", status: 'active', priority: 'high' },
                    { text: "Wait for Archie to return from hunting the Arcane Wraith", status: 'active', priority: 'high' },
                    { text: "Provide blood for the Oracle's ritual", status: 'pending', priority: 'critical' },
                    { text: "Decide: Trust the Oracle or the Legion?", status: 'active', priority: 'critical' }
                ],
                currentState: {
                    archieStatus: "Left to hunt the Arcane Wraith alone. Said 'if you see anything out of the ordinary, attack.'",
                    oracleStatus: "Displeased that Mirror Terror was spared. Demands blood for ritual.",
                    legionSpyStatus: "Made deal with Humpik. Said 'the iron will strike while it's hot.'",
                    humpikSecret: "Has agreed to help Legion capture the Oracle after the ritual.",
                    bowserSuspicion: "Noticed Humpik was 'normal' before and now is 'red.' Told party to hold off destroying mirrors.",
                    danHeroism: "Proved himself by pulling Green T from the mirror with one arm.",
                    greenTFlight: "Broke a lock to escape. Currently somewhere in the manor, panicked."
                }
            },
            {
                id: 'm7',
                status: 'active',
                title: "The Titan in the Grove",
                description: "A rescue mission in the gardens turned into a full-scale battle. Markop, Remi, Waluigi, and the toad squad are fighting a massive Arachnid Matriarch.",
                goals: [
                    { text: "Defeat the Arachnid Matriarch", status: 'active', priority: 'critical' },
                    { text: "Rescue the scattered Toad Squad", status: 'active', priority: 'high' },
                    { text: "Regroup with the main party in the Hall", status: 'pending', priority: 'medium' }
                ],
                currentEvents: [
                    "Markop accepted Oracle's blessing, growing to 5x size (Titan Form)",
                    "Vigilance flying overhead broadcasting compliance anthems",
                    "Waluigi using ice magic with surprising effectiveness",
                    "Remi's dog 'Mossy' damaged in combat"
                ]
            },
            {
                id: 'm8',
                status: 'locked',
                title: "The Escape",
                description: "Find a way out of this nightmare.",
                goals: [
                    { text: "Reach the front door (or equivalent)", status: 'locked' },
                    { text: "Ensure the door can be opened from this side", status: 'locked' },
                    { text: "Survive whatever guards the exit", status: 'locked' },
                    { text: "Don't look back", status: 'locked' }
                ]
            }
        ],

        npcs: {
            allies: ['self_reflection_oracle', 'ghost_servants', 'green_t'],
            enemies: ['arcane_wraith', 'iron_legion'],
            neutral: ['lady_raventree_echo', 'temporal_duplicates', 'blue_humpik', 'legion_spy'],
            removed: ['red_humpik', 'shard_stalker']
        },

        locations: {
            primary: 'raventree_manor',
            current: 'ruined_hall',
            subLocations: [
                { name: "Grand Foyer", status: 'explored', notes: "Legion presence. Avoid." },
                { name: "Solarium", status: 'destroyed', notes: "Mirrors shattered. Shard Stalker destroyed here. Glass and blood everywhere." },
                { name: "Dance Hall", status: 'dangerous', notes: "Arcane Wraith territory. Archie hunting here." },
                { name: "Upper House", status: 'cleared', notes: "Path from Solarium to Ruined Hall." },
                { name: "Ruined Hall", status: 'current', notes: "Party staging area. Oracle preparing ritual." },
                { name: "Lower Levels", status: 'dangerous', notes: "Archie's hunting ground. Arcane Wraith's domain." },
                { name: "Silent Grove", status: 'combat', notes: "Battle active. Titan Markop vs Spider." }
            ]
        },

        survivalTips: [
            "The Manor responds to fear. Stay calm or it will find you.",
            "Reflective surfaces are doorways. Most mirrors are now destroyed in the Solarium.",
            "The ghosts of servants remember their duties. Ask for help politely.",
            "If you see yourself, run. It's not a reflection.",
            "The Oracle cannot lie, but he cannot tell the whole truth either.",
            "The Legion spy said: 'We need bronze, steel, iron weapons—no spells.' What does this mean?",
            "Green T is somewhere in the manor, traumatized. Find him before something else does."
        ],

        relatedQuests: ['artifacts_of_balance', 'rescue_green_t', 'archie_fugitive_of_the_accords', 'humpik_legion_deal']
    },

    'rescue_green_t': {
        id: 'rescue_green_t',
        title: "Through the Looking Glass",
        subtitle: "Find the Fleeing Survivor",
        type: QUEST_TYPES.RESCUE,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'raventree_manor',
        objective: "Locate and calm Green T, who was rescued from the mirror but fled in a state of temporal shock.",
        assignees: ['party', 'dan'],
        primaryAssignee: 'dan',
        difficulty: { 
            overall: DIFFICULTY.MODERATE, 
            tracking: DIFFICULTY.MODERATE, 
            social: DIFFICULTY.HARD 
        },
        tags: ['rescue', 'dimensional', 'time-sensitive', 'chase', 'mirror', 'trauma'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 19 }, 
            updated: { year: 1040, monthIndex: 6, day: 21 },
            deadline: { year: 1040, monthIndex: 6, day: 21 }
        },

        description: "Green T was trapped in the Mirror Dimension for what felt like days, though only hours passed in reality. Dan, despite having only one arm, successfully pulled him through the shattering mirror during the Solarium battle. However, Green T took one look at the chaos—the blood, the shattered glass, the impossible reflections—and fled in terror. He broke a lock to escape deeper into the manor. He is back in our reality, but his mind may still be trapped in the reflection. The manor is dangerous. He is alone. And he is not thinking clearly.",

        loreEntries: ['mirror_dimension', 'reflection_entities', 'prism_artifacts'],

        consequences: {
            success: "Green T is calmed and rejoins the party. His knowledge of the mirror realm may prove valuable.",
            failure: "Green T wanders the manor alone and is taken by another entity—or worse, the Legion.",
            partial: "Green T is found but remains catatonic or hostile. Requires ongoing care."
        },

        rewards: {
            guaranteed: [
                { type: 'ally', name: "Green T's Loyalty", description: "Green T becomes a dedicated ally with knowledge of the mirror realm" },
                { type: 'item', name: "Mirror Shard", description: "A piece of the dimension barrier—has unusual reflective properties" }
            ],
            xp: 3000
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Abduction", 
                description: "Bowser watched helplessly as Green T was dragged into the mirror. The glass rippled like water, and then he was gone. Only his scream lingered.",
                completedDate: { year: 1040, monthIndex: 6, day: 19 }
            },
            { 
                id: 'm2', 
                status: 'completed', 
                title: "Find the Mirrors", 
                description: "The party located the mirrors in the Solarium.",
                completedDate: { year: 1040, monthIndex: 6, day: 20 }
            },
            {
                id: 'm3',
                status: 'completed', 
                title: "The Extraction",
                description: "Amidst the chaos of the Shard Stalker battle, Dan rushed a mirror. Despite his injury—despite having only one arm—he reached in and hauled Green T out just as the glass shattered around them.",
                completedDate: { year: 1040, monthIndex: 6, day: 21 },
                outcomes: [
                    "Green T successfully pulled from mirror dimension",
                    "Dan proved his worth despite his injury",
                    "Green T is disoriented and traumatized",
                    "Dan told Green T to help—Green T refused, saying 'I was stuck in there for hours'"
                ]
            },
            {
                id: 'm4',
                status: 'active',
                title: "The Flight",
                description: "Green T took one look at the battle, the blood, the chaos—and ran. He broke a lock to escape deeper into the manor. He's back in reality, but his mind is still fractured.",
                goals: [
                    { text: "Track Green T's path through the manor", status: 'active', priority: 'high' },
                    { text: "Find him before the Legion does", status: 'active', priority: 'high' },
                    { text: "Calm him down without violence or restraint", status: 'pending', priority: 'high' },
                    { text: "Assess his mental state", status: 'pending', priority: 'medium' }
                ]
            }
        ],

        greenTStatus: {
            currentCondition: "Panicked Flight",
            lastAction: "Broke a lock to escape the Solarium",
            lastDirection: "Deeper into the manor (unknown location)",
            mentalState: "Critical - experiencing reality confusion",
            physicalState: "Uninjured but exhausted",
            timeInMirror: "Subjective hours (actual: unknown)",
            sanity: 2,
            notes: [
                "Spent what felt like hours in the mirror dimension",
                "Was likely exposed to temporal distortion",
                "May have difficulty distinguishing reality from reflection",
                "Dan's rescue may have been too sudden—no time to adjust",
                "The chaos of the battle upon emergence worsened his state"
            ]
        },

        npcs: {
            allies: ['green_t', 'dan'],
            enemies: ['manor_traps', 'temporal_echoes'],
            neutral: []
        },

        relatedQuests: ['artifacts_of_balance', 'main_quest_raventree']
    }
};