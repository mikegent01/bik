
// quests-main.js
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
            updated: { year: 1040, monthIndex: 6, day: 20 },
            deadline: { year: 1040, monthIndex: 6, day: 25 }
        },
        description: "The unthinkable has happened. Following the 'Iron Sky Breach' event at Raventree Manor, the Iron Legion launched a ruthless boarding action against the Vigilance. Despite Captain Ryan's desperate resistance and the crew's valiant stand, the ship was seized in a brutal thirty-minute assault. Ryan was forced to leap from the burning deck, plummeting into the forest canopy below. The surviving Liberated Toads are either scattered across the countryside, hiding in the wreckage of their dreams, or in Legion chains being transported to an unknown facility. The Iron Legion now controls the skies above the Midlands, and with them, the party's only true home.",
        
        loreEntries: ['vigilance_history', 'iron_legion_tactics', 'ryan_the_pilot'],
        
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
                description: "The party is fractured across multiple locations. To retake the ship, they must first survive the current manhunt, gather their scattered allies, and formulate a plan to breach the Legion's aerial cordon around the captured Vigilance.",
                goals: [
                    { text: "Escape Raventree Manor alive", status: 'active', priority: 'critical' },
                    { text: "Locate Captain Ryan in the eastern forest", status: 'active', priority: 'high' },
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
                                consequences: { success: "Bloodless resolution", failure: "Trap sprung, position revealed" }
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
            neutral: ['smuggler_collective', 'mercenary_guild']
        },

        locations: {
            primary: 'vigilance_airship',
            related: ['raventree_manor', 'eastern_forest', 'legion_command_post', 'prisoner_convoy_route']
        },

        hints: [
            "Ryan knows a maintenance hatch that isn't on any official schematic.",
            "The Legion rotates guards every four hours - there's a fifteen minute window during shift change.",
            "One of the Legion officers has gambling debts to the wrong people...",
            "The Rakasha owe Ryan a life-debt. They might provide more than just reconnaissance."
        ],

        journalEntries: [
            { date: { year: 1040, monthIndex: 6, day: 18 }, author: 'system', text: "The Vigilance has been captured. All hands scattered. This is our darkest hour." },
            { date: { year: 1040, monthIndex: 6, day: 19 }, author: 'ryan', text: "Broken ribs. Can barely breathe. But I'm alive. The bastards have my ship. They'll pay for every scratch on her hull." },
            { date: { year: 1040, monthIndex: 6, day: 20 }, author: 'system', text: "Contact established with Ryan. He's injured but mobile. Planning phase initiated." }
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
            updated: { year: 1040, monthIndex: 6, day: 20 },
            deadline: { year: 1040, monthIndex: 6, day: 28 }
        },
        
        description: "The artifact recovered from the rogue mage X.O. is no mere weapon—it is a conduit of raw, unstable magic that seems to possess a malevolent sentience. When Dan, driven by desperation and grief, attempted to wield it to protect the toads during the Legion's assault, the staff recognized his pain and fed upon it. The resulting magical detonation cost Dan his right arm and unleashed a devastating blast that killed thirteen of his kin—toads who trusted him to protect them. The staff is currently in the trembling possession of Toad Lee, sealed within an 'Iron Binding' ritual circle that he created from memory. But the runes are degrading. Cracks are forming. The staff whispers through the barriers. It is a weapon of mass destruction with a faulty trigger, and it is counting down.",

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
                description: "Rumors point to a legendary smith in the Undercity who specializes in cursed metals and corrupted artifacts. This 'Forgemaster Grimm' is said to have unmade weapons that drove their wielders to madness. Finding them is the first challenge—convincing them to help may be harder.",
                goals: [
                    { text: "Locate an entrance to the Undercity", status: 'active', priority: 'high' },
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
            "Dan's severed arm occasionally twitches in the direction of the staff, even from a distance."
        ],

        journalEntries: [
            { date: { year: 1040, monthIndex: 6, day: 15 }, author: 'toad_lee', text: "The binding is failing. I can hear it whispering at night. It knows my name." },
            { date: { year: 1040, monthIndex: 6, day: 18 }, author: 'dan', text: "What have I done? Thirteen souls. Thirteen friends. Their blood is on my hands—on my one remaining hand." },
            { date: { year: 1040, monthIndex: 6, day: 20 }, author: 'system', text: "Seal integrity now at 31%. Time is running out." }
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
            updated: { year: 1040, monthIndex: 6, day: 20 }
        },

        description: "The Oracle of Raventree—a being who has lived the same day ten thousand times—has revealed the true nature of the manor's curse. It is not merely haunted; it is a nexus point where three distinct timelines have been forcibly braided together by demonic anchors. Past, present, and a terrible possible future bleed into one another, creating paradoxes that drive mortals mad and feed the entities that dwell in the spaces between moments. The Star Ascension of the 'Evil Toad God' destabilized the first anchor, but two demons remain. To heal Eager's fractured mind, to escape the loop, to prevent this manor from becoming a permanent wound in reality, these entities must be destroyed—or bound—or bargained with. Each has their own nature. Each has their own price. Visit the <a href='artifacts.html' class='quest-link'>Artifact Collection</a> to track your progress.",

        loreEntries: ['raventree_curse_origin', 'timeline_bleeding', 'demon_taxonomy', 'oracle_families'],

        consequences: {
            success: "The timelines separate. Raventree becomes just a manor again. Those trapped are freed. Eager's mind is restored.",
            partial: "Some demons are destroyed but others remain. The curse continues in a weakened but persistent form.",
            failure: "The timelines collapse into one another. Everyone in the manor is erased from existence—past, present, and future."
        },

        rewards: {
            guaranteed: [
                { type: 'artifact', name: "Shard of Stabilized Time", description: "A crystal containing a moment of perfect stillness. Has various temporal applications." },
                { type: 'ally', name: "The Oracle's Gratitude", description: "The Oracle becomes a powerful divination contact" },
                { type: 'reputation', faction: 'cosmic_entities', amount: 200, description: "Notice from beings beyond mortal ken", name: "Cosmic Notice" }
            ],
            conditional: [
                { condition: "Destroy all three demons", reward: { type: 'title', name: "Timeline Mender", description: "You have healed a wound in reality itself" }},
                { condition: "Bind a demon instead of destroying it", reward: { type: 'summon', name: "Bound Demon", description: "A dangerous but controllable ally" }},
                { condition: "Complete without any party deaths", reward: { type: 'blessing', name: "Temporal Immunity", description: "Resistance to time-manipulation effects" }}
            ],
            xp: 10000,
            gold: { min: 3000, max: 8000 }
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Star Ascendant", 
                description: "The entity once known as the 'Evil Toad' utilized a Star Fragment to transcend its mortal form, becoming something between a god and an abomination. This violent apotheosis destabilized the first temporal anchor, causing the timeline bleeding to accelerate.",
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
                description: "Three entities anchor the curse. Each must be confronted.",
                goals: [
                    { 
                        text: "The Spider Demon (The Weaver of Moments)", 
                        status: 'completed', 
                        details: "Hunted by Markop in the basement levels. Destroyed via holy fire.",
                        priority: 'completed'
                    },
                    { 
                        text: "The Mirror Terror (The Reflection That Hungers)", 
                        status: 'active', 
                        details: "Currently stalking the Upper House. Has captured Green T. Weakness: Cannot exist without something to reflect.",
                        priority: 'critical'
                    },
                    { 
                        text: "The Arcane Wraith (The Echo of Uncast Spells)", 
                        status: 'active', 
                        details: "Roaming the Dance Hall, feeding on magical energy. Even the Legion fears it.",
                        priority: 'high'
                    }
                ],
                demonProfiles: [
                    {
                        id: 'spider_demon',
                        name: "The Weaver of Moments",
                        status: 'destroyed',
                        domain: "Connections between cause and effect",
                        weakness: "Holy fire severs its threads",
                        reward: "Thread of Causality (allows minor retcon once per day)"
                    },
                    {
                        id: 'mirror_terror',
                        name: "The Reflection That Hungers",
                        status: 'active',
                        domain: "Identity and self-perception",
                        weakness: "Cannot exist in complete darkness or without reflective surfaces",
                        reward: "Mirror of True Seeing (shows things as they truly are)",
                        hostage: "Green T (trapped in mirror dimension)"
                    },
                    {
                        id: 'arcane_wraith',
                        name: "The Echo of Uncast Spells",
                        status: 'active',
                        domain: "Magical potential and unrealized power",
                        weakness: "Can be starved by suppressing all magic in its vicinity",
                        reward: "Spell Echo Stone (stores one spell for later release)"
                    }
                ]
            },
            {
                id: 'm4',
                status: 'locked',
                title: "The Convergence",
                description: "With all three anchors addressed, the timelines will attempt to separate. This will be violent.",
                goals: [
                    { text: "Reach the manor's heart (the clock tower)", status: 'locked' },
                    { text: "Perform the separation ritual", status: 'locked' },
                    { text: "Survive the temporal backlash", status: 'locked' },
                    { text: "Choose which timeline becomes 'real'", status: 'locked' }
                ]
            }
        ],

        npcs: {
            allies: ['self_reflection_oracle', 'ghost_of_lady_raventree'],
            enemies: ['mirror_terror', 'arcane_wraith', 'god_toad'],
            neutral: ['iron_legion_captain']
        },

        locations: {
            primary: 'raventree_manor',
            related: ['mirror_dimension', 'dance_hall', 'upper_house', 'clock_tower', 'basement_web']
        },

        hints: [
            "The Oracle has lived this day before. He knows how most attempts end—badly.",
            "The Mirror Terror cannot harm what it cannot see. But it can hear...",
            "The Arcane Wraith was once a mage who tried to stop the curse. His good intentions paved the way to his damnation.",
            "The clock tower hasn't struck midnight in 200 years. When it does, the timelines will synchronize—for better or worse."
        ],

        relatedQuests: ['main_quest_raventree', 'rescue_green_t', 'archie_god_toad_hunt']
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
            updated: { year: 1040, monthIndex: 6, day: 20 }
        },

        description: "What began as a simple investigation has become a waking nightmare. Raventree Manor has shifted from a haunted house to an active warzone where reality itself is a casualty. The 'Dance Hall Discord' and 'Mirror Door Breach' events on Day 20 saw the manifestation of Arcane Wraiths so terrifying that hardened Iron Legion soldiers fled screaming into the night. The party is now scattered across multiple layers of the manor—some in the present, some in echoes of the past, and Archie briefly visited what might have been the future. The laws of physics are optional here. Gravity is a suggestion. Time is a spiral. The only certainty is that staying still means death.",

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
            archie: { location: "Upper House (Post-dimensional return)", status: "Shaken but alive", sanity: 7 },
            markop: { location: "Upper House (Fighting wraiths)", status: "In combat", sanity: 8 },
            bowser: { location: "Unknown (Lost in transition)", status: "Missing", sanity: "?" },
            humpik: { location: "Dance Hall (Evading Legion)", status: "Hiding", sanity: 9 },
            remi: { location: "Greenhouse Ruins", status: "Wounded", sanity: 6 }
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
                description: "When Rust Monsters emerged from the walls, Archie made a split-second decision. The resulting fire destroyed the greenhouse, the monsters, and any hope of a stealthy investigation. The smoke drew the Legion. The chaos drew worse things.",
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
                status: 'active', 
                title: "The Upper House Breach", 
                description: "The party has breached the distorted upper levels via a hidden staircase. The Mirror Door Breach event (Day 20) signaled a massive escalation in supernatural activity. A Mirror Monster has sealed the exit.",
                goals: [
                    { text: "Reunite the scattered party members", status: 'active', priority: 'critical' },
                    { text: "Find Bowser (last seen near the conservatory)", status: 'active', priority: 'high' },
                    { text: "Defeat or bypass the Mirror Monster", status: 'active', priority: 'critical' },
                    { text: "Locate an alternative exit route", status: 'pending', priority: 'medium' },
                    { text: "Avoid the Arcane Wraith's patrol pattern", status: 'active', priority: 'high' },
                    { text: "Keep everyone sane", status: 'ongoing', priority: 'medium' }
                ],
                currentThreats: [
                    { name: "Mirror Monster", threat: 'critical', behavior: "Blocks the main staircase. Reflects attacks. Hungers for identity." },
                    { name: "Arcane Wraith", threat: 'extreme', behavior: "Patrols the Dance Hall. Drains magic. Attracted to spellcasting." },
                    { name: "Iron Legion Squad", threat: 'high', behavior: "Searching the lower floors. Will shoot on sight." },
                    { name: "Temporal Echoes", threat: 'moderate', behavior: "Ghosts of past events. Mostly harmless but disorienting." },
                    { name: "The Manor Itself", threat: 'variable', behavior: "Rooms shift. Stairs lead to different places. Trust nothing." }
                ]
            },
            {
                id: 'm4',
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
            allies: ['self_reflection_oracle', 'ghost_servants'],
            enemies: ['mirror_terror', 'arcane_wraith', 'iron_legion', 'rust_monsters'],
            neutral: ['lady_raventree_echo', 'temporal_duplicates']
        },

        locations: {
            primary: 'raventree_manor',
            subLocations: [
                { name: "Grand Foyer", status: 'explored', notes: "Legion presence. Avoid." },
                { name: "Greenhouse", status: 'destroyed', notes: "Archie's handiwork." },
                { name: "Dance Hall", status: 'dangerous', notes: "Wraith territory." },
                { name: "Upper House", status: 'current', notes: "Reality unstable." },
                { name: "Basement", status: 'explored', notes: "Spider demon destroyed." },
                { name: "Clock Tower", status: 'locked', notes: "The heart of the curse." }
            ]
        },

        survivalTips: [
            "The Manor responds to fear. Stay calm or it will find you.",
            "Reflective surfaces are doorways. Cover them or avoid them.",
            "The ghosts of servants remember their duties. Ask for help politely.",
            "If you see yourself, run. It's not a reflection.",
            "The Oracle cannot lie, but he cannot tell the whole truth either."
        ],

        relatedQuests: ['artifacts_of_balance', 'rescue_green_t', 'archie_fugitive_of_the_accords']
    },

    'rescue_green_t': {
        id: 'rescue_green_t',
        title: "Through the Looking Glass",
        subtitle: "Save Green T from the Mirror Dimension",
        type: QUEST_TYPES.RESCUE,
        category: 'Main Story',
        status: QUEST_STATUS.ACTIVE,
        priority: QUEST_PRIORITY.HIGH,
        arcId: 'raventree_manor',
        objective: "Rescue Green T from the Mirror Dimension before he is consumed by the Reflection That Hungers.",
        assignees: ['party', 'bowser'],
        primaryAssignee: 'bowser',
        difficulty: { 
            overall: DIFFICULTY.HARD, 
            puzzle: DIFFICULTY.HARD, 
            time: DIFFICULTY.CRITICAL 
        },
        tags: ['rescue', 'dimensional', 'time-sensitive', 'puzzle', 'mirror'],
        dates: { 
            added: { year: 1040, monthIndex: 6, day: 19 }, 
            updated: { year: 1040, monthIndex: 6, day: 20 },
            deadline: { year: 1040, monthIndex: 6, day: 21 }
        },

        description: "During the initial chaos at the manor, Green T made the mistake of looking too long into an antique mirror. Crystalline hands erupted from the glass and pulled him screaming into another place—a reflection of Raventree Manor where everything is reversed, cold, and hungry. Through scattered mirrors, the party has caught glimpses of him: running through corridors that don't exist in the real manor, hiding from things that look almost like his friends but aren't, slowly losing color as the dimension drains his essence. The Oracle claims the key to his release lies somewhere in the Upper House—a 'Prism Key' that can shatter the barrier between reflection and reality. But time moves differently in the mirror. Every hour here is a day there. Green T's reflection is becoming more solid than he is.",

        loreEntries: ['mirror_dimension', 'reflection_entities', 'prism_artifacts'],

        consequences: {
            success: "Green T is rescued, possibly with unique insights about the mirror dimension.",
            failure: "Green T is fully absorbed into the mirror. His reflection walks free in the real world—but it isn't him.",
            partial: "Green T is rescued but permanently changed—part of him remains in the mirror."
        },

        rewards: {
            guaranteed: [
                { type: 'ally', name: "Green T's Loyalty", description: "Green T becomes a dedicated ally with knowledge of the mirror realm" },
                { type: 'item', name: "Mirror Shard", description: "A piece of the dimension barrier—has unusual reflective properties" }
            ],
            conditional: [
                { condition: "Rescue without confronting the Terror", reward: { type: 'stealth_xp', amount: 1000, description: "Bonus XP for clever solution", name: "Stealth Bonus" }},
                { condition: "Rescue within 12 hours", reward: { type: 'item', name: "Green T's Journal", description: "Contains valuable observations about the mirror realm" }},
                { condition: "Destroy the mirror permanently", reward: { type: 'peace', name: "One Less Gateway", description: "The manor becomes slightly less dangerous" }}
            ],
            xp: 3000,
            gold: { min: 500, max: 1500 }
        },

        milestones: [
            { 
                id: 'm1', 
                status: 'completed', 
                title: "The Abduction", 
                description: "Bowser watched helplessly as Green T was dragged into the mirror. The glass rippled like water, and then he was gone. Only his scream lingered.",
                completedDate: { year: 1040, monthIndex: 6, day: 19 },
                witnessReport: "One moment he was there, the next—hands made of glass came out of nowhere. I tried to grab him but my claws just... passed through."
            },
            { 
                id: 'm2', 
                status: 'active', 
                title: "Find the Prism Key", 
                description: "Locate the artifact that anchors the Mirror Dimension to our reality. The Oracle says it's in the Upper House, hidden by Lady Raventree herself.",
                goals: [
                    { text: "Search Lady Raventree's private chambers", status: 'active', priority: 'high' },
                    { text: "Solve the riddle of the seven mirrors", status: 'pending', priority: 'medium' },
                    { text: "Avoid attracting the Mirror Terror's attention", status: 'ongoing', priority: 'critical' }
                ],
                clues: [
                    "Lady Raventree wrote: 'The key reflects truth, and truth is found in the eye of the beholder.'",
                    "There are seven mirrors in the Upper House. Only one shows true reflections.",
                    "The Prism Key was used to imprison the Mirror Terror originally. It may recognize it."
                ]
            },
            {
                id: 'm3',
                status: 'locked',
                title: "Enter the Mirror",
                description: "Use the Prism Key to create a stable passage into the Mirror Dimension.",
                goals: [
                    { text: "Activate the Prism Key at the correct mirror", status: 'locked' },
                    { text: "Enter the Mirror Dimension", status: 'locked' },
                    { text: "Navigate the reversed manor", status: 'locked' }
                ]
            },
            {
                id: 'm4',
                status: 'locked',
                title: "The Rescue",
                description: "Find Green T and bring him back before the dimension consumes him.",
                goals: [
                    { text: "Track Green T's location in the mirror realm", status: 'locked' },
                    { text: "Defeat or evade his mirror-self", status: 'locked' },
                    { text: "Escape before the portal closes", status: 'locked' }
                ]
            }
        ],

        greenTStatus: {
            currentCondition: "Fading",
            timeInMirror: "Approximately 2 days (mirror time)",
            colorSaturation: "47%",
            lastSighting: "Running through mirrored Dance Hall",
            mirrorSelfStrength: "Growing"
        },

        npcs: {
            allies: ['green_t'],
            enemies: ['mirror_terror', 'green_t_reflection'],
            neutral: ['mirror_servants']
        },

        locations: {
            primary: 'mirror_dimension',
            related: ['upper_house', 'lady_raventree_chambers', 'seven_mirror_gallery']
        },

        hints: [
            "In the mirror realm, left is right and right is left. Maps are useless unless flipped.",
            "Green T's reflection grows stronger as he grows weaker. Kill one, and both might die.",
            "The mirror servants obey whoever holds the Prism Key. They may help.",
            "Time flows backward in some parts of the mirror realm. Watch for loops."
        ],

        relatedQuests: ['artifacts_of_balance', 'main_quest_raventree']
    }
};
