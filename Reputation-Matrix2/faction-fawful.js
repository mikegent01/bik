// faction-fawful.js - FAWFUL DOMINION COMMAND INTERFACE
// Interactive Holographic Castle Reconnaissance System

// ============================================
// IMPORTS
// ============================================
import { state } from './state.js';
import { getIntelForFaction } from './systems/common.js'; // IMPORTED: The single source of truth for Intel
import { CURRENT_GAME_DATE, CALENDAR_DATA } from './data/world/calendar.js';

// ============================================
// CONSTANTS & LORE DATA
// ============================================
const FAWFUL_ID = 'fawful_dominion';
const FAWFUL_INTEL_KEY = 'fawfuls_furious_freaks'; // Key matching your state/lore

const MONTH_NAMES = [
    "Hammer", "Alturiak", "Ches", "Tarsakh", "Mirtul", "Kythorn",
    "Highsun", "Eleasias", "Eleint", "Marpenoth", "Uktar", "Nightal"
];

// Castle Zone Data - Interactive Hotspots
const CASTLE_ZONES = {
    royal_chambers: {
        id: 'royal_chambers',
        name: "Royal Chambers",
        icon: "👑",
        position: { x: 50, y: 15, z: 0 },
        status: "SECURED",
        securityLevel: "MAXIMUM",
        color: "#ff1493",
        description: "Former quarters of Princess Peach. Now Fawful's personal domain.",
        discoveries: [
            {
                id: 'secret_hatch',
                title: "THE SECRET HATCH",
                classification: "CONFIDENTIAL",
                icon: "🚪",
                discovered: false,
                intelRequired: 10,
                discoveryDate: { year: 1040, monthIndex: 6, day: 9 },
                content: `Behind the royal portrait of Queen Toadstool the First, scanners detected an anomalous thermal signature. Upon investigation, Fawful's technicians discovered a concealed passage—masterfully hidden for perhaps centuries.

The mechanism requires a specific sequence: Three roses pressed in order (left, center, right), followed by a quarter-turn of the portrait frame clockwise.

The passage leads DOWN. Initial drone reconnaissance shows it connects to a network of tunnels that predate the castle itself. Carbon dating suggests these passages are over 500 years old—older than the Mushroom Kingdom's founding.

FAWFUL'S NOTE: "I am having the INTRIGUE! What secrets did the pink princess hide in her burrow like a frightened bunny? Fawful will know ALL!"`,
                implications: [
                    "Peach knew of escape routes—she was prepared for assassination",
                    "The tunnels predate the kingdom—who built them?",
                    "The Regency never found this in 85 years of control",
                    "Someone taught Peach about this passage"
                ]
            },
            {
                id: 'hidden_journal',
                title: "PEACH'S PRIVATE JOURNAL",
                classification: "SECRET",
                icon: "📔",
                discovered: false,
                intelRequired: 20,
                discoveryDate: { year: 1040, monthIndex: 6, day: 11 },
                content: `Found in a hollowed-out book on the royal bookshelf (disguised as "Advanced Cake Decorating Vol. 7"). Written in a personal cipher that took three days to crack.

Selected translated entries:

ENTRY 847: "T. visited again through the old ways. He says the Council grows restless. They do not understand that the Koopas are not our true enemy. The shadows in the Senate—those are what I fear."

ENTRY 851: "The Chancellor's son watches me with hungry eyes. Not desire—calculation. I have instructed Lady Bloomia to prepare the contingency."

ENTRY 856: "If you are reading this, I am likely dead. Do not trust the Regency. The truth is in the GARDEN OF REMEMBRANCE. Look for the statue that weeps at midnight. T. knows the way. Find him among the spirit-walkers."

FINAL ENTRY (Undated): "They are coming tonight. I can feel it. My only regret is—" [Entry ends abruptly, page torn]

FAWFUL'S ANALYSIS: "The pink one KNEW! She had the knowing of her doom before the doom had the arriving! This 'T' person has the explaining to do. Fawful will find this spirit-walker and extract the TRUTH like juice from a berry!"`,
                implications: [
                    "'T' is almost certainly Chief Thornpaw of the Rakasha",
                    "Peach suspected the Regency, not Bowser",
                    "Lady Bloomia had a 'contingency'—what was it?",
                    "The 'Garden of Remembrance' contains more secrets",
                    "The final entry suggests she knew the exact night"
                ]
            },
            {
                id: 'thornpaw_evidence',
                title: "RAKASHA ARTIFACTS",
                classification: "SECRET",
                icon: "🐾",
                discovered: false,
                intelRequired: 30,
                discoveryDate: { year: 1040, monthIndex: 6, day: 12 },
                content: `Hidden compartment in the nightstand contained several Rakasha artifacts:
                
- A spirit-bone amulet (identifies the wearer as "friend to the clans")
- Three letters written in Rakasha pictographic script (translation pending)
- A lock of silver-white fur tied with a pink ribbon
- A small portrait showing Peach and a Rakasha male (presumably Thornpaw) standing before a waterfall

The implications are clear: Princess Peach and Chief Thornpaw were romantically involved, likely for years before her death. This relationship was hidden from the entire court.

FAWFUL'S NOTE: "The fury-cat and the princess, sitting in a tree! But now the princess is DEAD and the cat has the silence for 85 years! Why does he speak NOW? What game does the whisker-face play?"`,
                implications: [
                    "Confirms Thornpaw's gala confession",
                    "The relationship was serious and long-term",
                    "Thornpaw had access to the castle secretly",
                    "Did the assassins know about this relationship?"
                ]
            }
        ],
        surveillance: {
            cameras: 12,
            guards: 8,
            alerts: 0,
            lastIncident: null
        }
    },

    throne_room: {
        id: 'throne_room',
        name: "Throne Room",
        icon: "🏰",
        position: { x: 50, y: 45, z: 0 },
        status: "CONVERTED",
        securityLevel: "HIGH",
        color: "#00ff00",
        description: "The heart of power. Now displays Fawful's glorious visage.",
        discoveries: [
            {
                id: 'power_core',
                title: "STAR POWER CONDUITS",
                classification: "TOP SECRET",
                icon: "⭐",
                discovered: false,
                intelRequired: 15,
                discoveryDate: { year: 1040, monthIndex: 6, day: 8 },
                content: `The castle's infrastructure is powered by an ancient Star-based energy system. Conduits of crystallized starlight run through the walls like veins, converging beneath the throne room.

Analysis suggests the castle was built AROUND this power source, not the reverse. The Star Core predates the Mushroom Kingdom by potentially thousands of years.

Current readings show the core operating at only 12% capacity. If fully activated, projections suggest it could:
- Power a continental-scale barrier
- Enable mass teleportation
- Potentially... resurrect the recently deceased?

The activation sequence is unknown. References in recovered texts mention "The Seven Star Spirits" as guardians of this knowledge.

FAWFUL'S NOTE: "CONTINENTAL BARRIER! RESURRECTION?! Fawful's genius brain is having the EXPLOSIONS of ideas! This power will be MINE! The Star Spirits will tell Fawful their secrets or they will be having the very bad time!"`,
                implications: [
                    "The castle is far more important than anyone knew",
                    "Star Spirits hold the activation knowledge",
                    "12% power has sustained the kingdom for centuries",
                    "Full activation could change everything"
                ]
            },
            {
                id: 'throne_mechanism',
                title: "THE THRONE'S SECRET",
                classification: "SECRET",
                icon: "⚙️",
                discovered: false,
                intelRequired: 25,
                discoveryDate: { year: 1040, monthIndex: 6, day: 10 },
                content: `The royal throne is not merely decorative. X-ray analysis revealed an intricate mechanism within the seat itself.

When activated by a specific pressure pattern (which Fawful has decoded), the throne rises and rotates, revealing a sealed vault beneath. The vault door bears the royal seal and requires THREE KEYS to open:

1. The Royal Scepter (Currently in Fawful's possession)
2. The Chancellor's Seal (Held by Toadsworth, now prisoner of the Loyalists)
3. The Keeper's Tooth (Location unknown—possibly with "Lady Bloomia")

VAULT STATUS: SEALED
FAWFUL'S ATTEMPTS: 47 (All failed - Requires all three keys simultaneously)

FAWFUL'S NOTE: "FURY! The stupid vault mocks Fawful with its lockedness! What treasures hide inside? Fawful MUST know! Perhaps the blue-haired weakling Toadsworth can be... borrowed... from the Loyalist fools."`,
                implications: [
                    "A three-key system implies extreme security",
                    "The Chancellor was always part of the security",
                    "The 'Keeper's Tooth' suggests a third party",
                    "Lady Bloomia may be the 'Keeper'"
                ]
            }
        ],
        surveillance: {
            cameras: 24,
            guards: 16,
            alerts: 0,
            lastIncident: "Day 10 - Loyalist scout detected and eliminated"
        }
    },

    dungeons: {
        id: 'dungeons',
        name: "Castle Dungeons",
        icon: "⛓️",
        position: { x: 50, y: 85, z: 0 },
        status: "OPERATIONAL",
        securityLevel: "EXTREME",
        color: "#8b0000",
        description: "Ancient cells now holding enemies of the Dominion.",
        discoveries: [
            {
                id: 'old_tunnels',
                title: "THE DEEP TUNNELS",
                classification: "SECRET",
                icon: "🕳️",
                discovered: false,
                intelRequired: 35,
                discoveryDate: { year: 1040, monthIndex: 6, day: 14 },
                content: `The dungeon's lowest level connects to a vast tunnel network. Mapping drones have explored approximately 15% of the system.

Confirmed destinations:
- Toad Town (3 exits, now sealed)
- The Pipe Maze (Emergency escape route)
- Unknown Location "DEEP-7" (Drone lost signal)
- The Garden of Remembrance (Mentioned in Peach's journal!)

The tunnels show signs of recent use—within the last century. Someone has been maintaining them. Boot prints suggest both Toad-sized and larger humanoid traffic.

Most concerning: One tunnel bears FRESH tracks. Someone used these passages AFTER Fawful took the castle. An infiltrator is operating within our walls.

FAWFUL'S NOTE: "SPIES! In FAWFUL'S castle?! Unacceptable! All tunnel exits are now being watched! The spy will be found and will be having the VERY BAD DAY!"`,
                implications: [
                    "The Loyalists' Operation HOMECOMING may use these tunnels",
                    "The 'Garden of Remembrance' is accessible",
                    "'DEEP-7' is concerning—what lies there?",
                    "An active infiltrator is present"
                ]
            },
            {
                id: 'prisoner_085',
                title: "THE FORGOTTEN PRISONER",
                classification: "TOP SECRET",
                icon: "👤",
                discovered: false,
                intelRequired: 40,
                discoveryDate: { year: 1040, monthIndex: 6, day: 9 },
                content: `Cell 085 was sealed behind a false wall. Inside, Fawful's forces discovered a living occupant.

SUBJECT: Unknown male Toad, elderly (estimated 100+ years)
CONDITION: Alive but non-responsive. Eyes open but unfocused.
IDENTIFICATION: None. Fingerprints match no known records.
PECULIARITY: Has not aged since discovery. Does not eat, drink, or speak. Breathes approximately once per minute.

On his cell wall, scratched into the stone over what must have been decades:

"I SAW WHO HELD THE BLADE. I SAW THE FACE BENEATH THE MASK. THEY SILENCED ME BUT I REMEMBER. THE KILLER WALKS FREE. THE KILLER SITS IN POWER. THE KILLER—"

The text ends abruptly. The prisoner's fingernails are worn to nothing.

FAWFUL'S NOTE: "A witness! But his brain is having the emptiness! Fawful's scientists are working to extract the memories like... like PICKLES from a jar! YES! The pickle-extraction of TRUTH!"`,
                implications: [
                    "Someone was imprisoned to hide the truth",
                    "The Regency knew about this cell",
                    "Magical stasis kept him alive",
                    "His memories could identify the real killer"
                ]
            }
        ],
        surveillance: {
            cameras: 48,
            guards: 24,
            alerts: 3,
            lastIncident: "Day 20 - Motion detected in sealed tunnel section"
        },
        prisoners: [
            { id: 'P001', name: 'Regency Officer', status: 'Interrogation' },
            { id: 'P002', name: 'Suspected Loyalist', status: 'Holding' },
            { id: 'P003', name: 'Unknown (Cell 085)', status: 'Medical Study' },
            { id: 'P004', name: 'Captured Mage', status: 'Cooperative' }
        ]
    },

    garden_remembrance: {
        id: 'garden_remembrance',
        name: "Garden of Remembrance",
        icon: "🌹",
        position: { x: 15, y: 50, z: 0 },
        status: "ANOMALOUS",
        securityLevel: "RESTRICTED",
        color: "#ff69b4",
        description: "Memorial garden with... unusual properties.",
        discoveries: [
            {
                id: 'garden_spirits',
                title: "THE WATCHING SPIRITS",
                classification: "SECRET",
                icon: "👻",
                discovered: false,
                intelRequired: 45,
                discoveryDate: { year: 1040, monthIndex: 6, day: 19 },
                content: `The garden is not empty at night. Infrared cameras detected multiple spectral entities after sunset.

They do not attack or threaten, but they WATCH. Analysis suggests they are the spirits of those buried in the garden—nobility and royalty from centuries past.

One spirit has been identified: Former Queen Toadstool III, Peach's grandmother. She appears at her own grave each night and stares at the castle windows. When she "sees" surveillance equipment, she smiles.

Attempts to communicate have failed. However, a medium brought in for consultation reported: "She says 'The garden remembers everything. The trees heard the conspiracy. Ask the ancient oak—it saw the killers' faces.'"

An ancient oak tree stands at the garden's center. It is over 400 years old. Experiments to "communicate" with it are ongoing.

FAWFUL'S NOTE: "Trees that are having the SEEING? Grandmothers who are being GHOSTS? This castle is the craziness wrapped in the madness wrapped in the FURY! But if the tree knows... Fawful will make the tree TALK!"`,
                implications: [
                    "The spirits may be protectors of the truth",
                    "The ancient oak may have witnessed the assassination",
                    "Spectral communication could reveal everything",
                    "Queen Toadstool III seems to approve of investigation"
                ]
            },
            {
                id: 'weeping_statue',
                title: "THE STATUE THAT WEEPS",
                classification: "TOP SECRET",
                icon: "🗿",
                discovered: false,
                intelRequired: 50,
                discoveryDate: { year: 1040, monthIndex: 6, day: 18 },
                content: `Following the clue from Peach's journal, surveillance was established on all garden statues.

At precisely midnight, a statue depicting the first Queen Toadstool began to weep. Not water—STARLIGHT. Liquid luminescence flowed from her stone eyes for exactly seven minutes.

When the weeping stopped, the statue's base shifted, revealing a hidden compartment containing:

1. A sealed letter addressed to "My Dearest T—"
2. A crystal vial containing what appears to be preserved blood
3. A map fragment showing a location in Rakasha territory
4. A golden key with the inscription "FOR WHEN THE TRUTH MUST BE KNOWN"

The letter has been opened and transcribed:

"My love, if you are reading this, I did not survive. The contents of this vault will expose everything. The blood is proof of lineage. The map leads to your people's sacred cave where I have hidden the complete truth. The key opens my mother's locket, which contains the final piece.

Do not blame yourself. They would have come for me eventually. Just promise me: when the time is right, tell the world what really happened.

Forever yours in this life and the next,
- P"

FAWFUL'S NOTE: "BLOOD PROOF?! LINEAGE?! Was the pink princess not who she seemed?! The plot is having more thickness than Fawful's grandmother's mustard soup! I MUST have this locket!"`,
                implications: [
                    "Peach left a complete record of the conspiracy",
                    "The blood proves some kind of lineage secret",
                    "A 'sacred cave' in Rakasha territory holds the truth",
                    "The Queen's locket is the final piece"
                ]
            }
        ],
        surveillance: {
            cameras: 8,
            guards: 4,
            alerts: 12,
            lastIncident: "Day 20 - All cameras failed simultaneously at midnight"
        }
    },

    east_tower: {
        id: 'east_tower',
        name: "East Tower (Observatory)",
        icon: "🔭",
        position: { x: 85, y: 30, z: 0 },
        status: "RESEARCH",
        securityLevel: "MEDIUM",
        color: "#4169e1",
        description: "Astronomical observatory, now Fawful's research division.",
        discoveries: [
            {
                id: 'star_charts',
                title: "THE PROPHECY CHARTS",
                classification: "SECRET",
                icon: "📊",
                discovered: false,
                intelRequired: 20,
                discoveryDate: { year: 1040, monthIndex: 6, day: 12 },
                content: `The observatory contains star charts dating back 500 years. Most are standard astronomical records, but one locked cabinet (now opened) contained charts marked "PROPHECY TRACKING."

These charts track a specific celestial alignment that occurs once every 85 years. The last alignment occurred in 955 BF—the year of Peach's assassination.

The next alignment occurs in 1040 BF—THIS YEAR. Specifically, on Day 30 of Highsun (9 days from now).

Notes in the margins:
"The stars align when the veil thins. The truth can be revealed only when the stars permit. The dead may speak on this night—if the seven flames burn in the Chamber of Stars."

The "Chamber of Stars" is referenced in no other document. Its location remains unknown.

FAWFUL'S NOTE: "Nine days! NINE DAYS until the stars are aligning! Fawful must find this 'Chamber of Stars'! If the dead can speak, then PEACH HERSELF can tell Fawful who had the killing of her! The ULTIMATE interrogation!"`,
                implications: [
                    "The assassination may have been timed to the celestial event",
                    "Day 30 of Highsun is cosmically significant",
                    "The 'Chamber of Stars' is somewhere in the castle",
                    "Communication with the dead may be possible"
                ]
            },
            {
                id: 'dragon_comm',
                title: "DRAGON ALLIANCE COMMUNICATIONS",
                classification: "FAWFUL EYES ONLY",
                icon: "🐉",
                discovered: false,
                intelRequired: 60,
                discoveryDate: { year: 1040, monthIndex: 6, day: 11 },
                content: `[THIS FILE IS RESTRICTED TO LORD FAWFUL ONLY]

The Dragon Council has agreed to Fawful's terms. In exchange for:
- Territorial rights to the Northern Mountains
- Non-interference in dragon hunting grounds
- Access to the Star Core (limited, supervised)

The Dragons will provide:
- Aerial supremacy over the Mushroom Kingdom
- Intelligence on Koopa Troop movements
- Three ancient texts from their hoards (contents: the location of all seven Star Spirits)

Current dragon assets:
- Cindermaw the Red (Stationed: Bramblehaven ruins)
- Frostbane the White (Stationed: Northern patrol)
- Voltaris the Blue (Stationed: Sea approach)
- Ashclaw the Black (Stationed: Personal guard rotation)

The Dragons have also shared a concerning revelation: They remember the night Peach died. Dragons live for millennia. Cindermaw was flying patrol that night and saw "a figure fleeing the castle through a secret passage, carrying a bloody blade. The figure wore the robes of a Chancellor."

FAWFUL'S NOTE: "CHANCELLOR ROBES! Not Bowser! Not Koopa! A CHANCELLOR! The treasonous Toadsworth family has the GUILT! Fawful will have the crushing of them! But first... the Star Spirits. Their knowledge will make Fawful UNSTOPPABLE!"`,
                implications: [
                    "Dragons witnessed the assassination",
                    "A Chancellor-robed figure was the killer",
                    "This directly implicates the Toadsworth family",
                    "Fawful is hunting the Star Spirits"
                ]
            }
        ],
        surveillance: {
            cameras: 6,
            guards: 4,
            alerts: 0,
            lastIncident: null
        }
    },

    west_tower: {
        id: 'west_tower',
        name: "West Tower (Armory)",
        icon: "⚔️",
        position: { x: 15, y: 30, z: 0 },
        status: "FORTIFIED",
        securityLevel: "HIGH",
        color: "#ffa500",
        description: "Royal armory, now upgraded with Fawful technology.",
        discoveries: [
            {
                id: 'royal_guard_logs',
                title: "DELETED GUARD LOGS",
                classification: "SECRET",
                icon: "📋",
                discovered: false,
                intelRequired: 55,
                discoveryDate: { year: 1040, monthIndex: 6, day: 13 },
                content: `The armory's records vault contained guard rotation logs from 955 BF. Most were mundane, but analysis revealed that several entries were OVERWRITTEN—crudely erased and rewritten.

Fawful's data recovery team restored the original entries:

ORIGINAL: "2300 hours - All guards withdrawn from Royal Wing by order of Chancellor Toadsworth. Reason given: 'Emergency drill.' "

MODIFIED VERSION: "2300 hours - All guards maintain normal positions. No incidents."

ORIGINAL: "0015 hours - Princess Peach found deceased in chambers. Guards were not at posts. Chancellor Toadsworth first on scene."

MODIFIED VERSION: "0015 hours - Princess Peach found deceased in chambers. Koopa assassin fled through window. Guards in pursuit."

The forgery is competent but not perfect. The ink age doesn't match. Someone tried to rewrite history.

FAWFUL'S NOTE: "The Chancellor was FIRST ON SCENE after withdrawing the guards! The coincidence is having the suspiciousness! Old Toadsworth had the doing of this! And his son knows! The family secret that EVERYONE should know!"`,
                implications: [
                    "Chancellor Toadsworth withdrew the guards",
                    "He was first to find the body",
                    "The official record was falsified",
                    "Current Chancellor may know the truth"
                ]
            },
            {
                id: 'assassination_weapon',
                title: "THE REAL MURDER WEAPON",
                classification: "TOP SECRET",
                icon: "🗡️",
                discovered: false,
                intelRequired: 70,
                discoveryDate: { year: 1040, monthIndex: 6, day: 15 },
                content: `The official story claims Peach was killed with a ceremonial dagger. That dagger is on display in the Regency Museum.

But a hidden vault in the armory contained the REAL weapon, preserved in a stasis field: A blade of Koopa design—but analysis proves it was FORGED in the Mushroom Kingdom. The metallic signature is unmistakable.

This blade was never used by a Koopa. It was crafted here, in the castle forges, and designed to implicate Bowser.

Inscription on the blade (hidden under dried blood—Peach's blood, confirmed): "For the Greater Mushroom"

The phrase "Greater Mushroom" appears in exactly one other historical document: The founding charter of the Mushroom Regency.

FAWFUL'S NOTE: "FORGED EVIDENCE! The frame-job on the turtle-king was having the planning! This blade PROVES the Regency killed their own princess! Fawful will broadcast this to the WORLD! ...After using the information for maximum personal advantage, of course. I am not being STUPID."`,
                implications: [
                    "Bowser was framed by the Regency",
                    "The assassination was planned well in advance",
                    "The murder weapon proves domestic conspiracy",
                    "The Regency's founding may be built on lies"
                ]
            }
        ],
        surveillance: {
            cameras: 16,
            guards: 12,
            alerts: 1,
            lastIncident: "Day 14 - Attempted break-in, infiltrator escaped"
        }
    },

    grand_kitchen: {
        id: 'grand_kitchen',
        name: "Grand Kitchen",
        icon: "🍰",
        position: { x: 75, y: 65, z: 0 },
        status: "OPERATIONAL",
        securityLevel: "LOW",
        color: "#f0e68c",
        description: "The legendary kitchen. Fawful has... opinions about the menu.",
        discoveries: [
            {
                id: 'poison_evidence',
                title: "THE BACKUP PLAN",
                classification: "SECRET",
                icon: "☠️",
                discovered: false,
                intelRequired: 10,
                discoveryDate: { year: 1040, monthIndex: 6, day: 16 },
                content: `A hidden compartment behind the spice rack contained a vial of extremely rare poison: Essence of Void Mushroom. This poison is undetectable and causes death that appears completely natural.

The vial is 85 years old. It was never used.

Attached note (in different handwriting than Peach's journal):

"Plan B, if the direct approach fails. Add to evening tea. Death within the hour, attributed to natural causes. Destroy this note after reading. —T.Sr."

"T.Sr." almost certainly refers to Toadsworth Senior, the Chancellor at the time of the assassination.

The poison was the BACKUP. The blade was Plan A. Either way, Peach was meant to die that night. The conspirators left nothing to chance.

FAWFUL'S NOTE: "They were having the redundancy! PROFESSIONALS! This was not the crime of the passion—this was the EXECUTION! A PLANNED EXECUTION by her own government! Fawful is almost having the admiration! ...Almost. They should have used more MUSTARD."`,
                implications: [
                    "Multiple assassination methods were prepared",
                    "Toadsworth Senior was definitively involved",
                    "This was a coordinated conspiracy",
                    "The poison proves premeditation"
                ]
            }
        ],
        surveillance: {
            cameras: 4,
            guards: 2,
            alerts: 0,
            lastIncident: null
        }
    },

    secret_passages: {
        id: 'secret_passages',
        name: "Secret Passage Network",
        icon: "🕸️",
        position: { x: 50, y: 50, z: -1 },
        status: "MAPPING",
        securityLevel: "UNKNOWN",
        color: "#4a4a4a",
        description: "Hidden tunnels throughout the castle. Exploration ongoing.",
        discoveries: [
            {
                id: 'passage_map',
                title: "PARTIAL PASSAGE MAP",
                classification: "SECRET",
                icon: "🗺️",
                discovered: false,
                intelRequired: 40,
                discoveryDate: { year: 1040, monthIndex: 6, day: 17 },
                content: `Current mapping progress: 23%

Confirmed passages:
- Royal Chambers → Garden of Remembrance (ACTIVE)
- Throne Room → Dungeons (SEALED)
- West Tower → East Tower (COLLAPSED)
- Kitchen → External escape point (MONITORED)
- Dungeons → Deep Tunnels (ACTIVE, DANGEROUS)

Unknown passages: At least 7 more detected via sonar

One passage defies mapping—instruments simply fail within. This passage connects the Royal Chambers to an unknown destination. Drones sent in do not return. Guards sent in emerge hours later with no memory of entering.

This passage is designated "THE VOID CORRIDOR." Entry is forbidden until further analysis.

FAWFUL'S NOTE: "Memory erasure? Drones vanishing? This passage is having the WEIRDNESS! Fawful suspects magical protection of the highest order. Someone REALLY did not want this destination found. Which means Fawful MUST find it!"`,
                implications: [
                    "The castle has at least 12 secret passages",
                    "The 'Void Corridor' is anomalously protected",
                    "Someone maintains these passages",
                    "The collapsed West-East tunnel may have been deliberate"
                ]
            },
            {
                id: 'chamber_of_stars',
                title: "CHAMBER OF STARS - ACCESSED",
                classification: "TOP SECRET",
                icon: "✨",
                discovered: false,
                intelRequired: 90,
                discoveryDate: { year: 1040, monthIndex: 6, day: 30 },
                content: `[DECRYPTION SUCCESSFUL - INTEL LEVEL SUFFICIENT]

The Void Corridor has opened. The stars have aligned.

Fawful's elite team has breached the Chamber. Inside, suspended in a column of pure starlight, lies the answer to everything.

It is not just a room. It is a memory bank of the Star Spirits.

The center of the room holds a pedestal. On it, a single recording crystal.

Playback initialized...

Voice of Princess Peach (Recorded 955 BF):
"They are breaking down the door. I have sent the Star Spirits away to hide them. But I cannot hide. If you find this... know that Bowser did not do this. It was the Senate. It was the Council of Mushrooms. They want the power of the Stars for themselves. They want to militarize the kingdom. I refused. So they will replace me with a puppet government. A Regency.

Please... protect the Toads. Protect the Koopas. Protect everyone. The darkness comes from within."

FAWFUL'S NOTE: "THE SMOKING GUN! The evidence that burns! The Regency is EXPOSED! The Princess left a message from the GRAVE! Fawful has WON! Now... how to use this to make them all kneel..."`,
                implications: [
                    "Definitive proof of the Regency's guilt",
                    "Peach's final message recovered",
                    "The Star Spirits were sent into hiding by Peach",
                    "The entire political structure of the last 85 years is illegitimate"
                ]
            }
        ],
        surveillance: {
            cameras: 0,
            guards: 6,
            alerts: "CONSTANT",
            lastIncident: "Continuous anomalous readings"
        }
    }
};

// ============================================
// SECURITY & INTEL DATA
// ============================================
const SECURITY_STATUS = {
    overallThreat: "ELEVATED",
    activeInfiltrators: "1-3 (Estimated)",
    dragonCoverage: "87%",
    minionMorale: "HAVING FURY",
    lastBreach: { year: 1040, monthIndex: 6, day: 20 },
    broadcasts: [
        "SECTOR 7 - Clear",
        "SECTOR 12 - Motion detected, investigating",
        "GARDEN - Spectral activity nominal",
        "DUNGEONS - Prisoner 085 unchanged",
        "TUNNELS - Drone 17 lost signal"
    ]
};

const FAWFUL_OBJECTIVES = [
    { id: 'obj1', text: "Locate the Chamber of Stars", status: "IN PROGRESS", priority: "CRITICAL" },
    { id: 'obj2', text: "Open the Throne Vault (2/3 keys)", status: "BLOCKED", priority: "HIGH" },
    { id: 'obj3', text: "Extract memories from Prisoner 085", status: "IN PROGRESS", priority: "HIGH" },
    { id: 'obj4', text: "Find and eliminate Loyalist infiltrators", status: "ONGOING", priority: "HIGH" },
    { id: 'obj5', text: "Communicate with the ancient oak", status: "EXPERIMENTAL", priority: "MEDIUM" },
    { id: 'obj6', text: "Acquire Queen's Locket", status: "SEARCHING", priority: "MEDIUM" },
    { id: 'obj7', text: "Prepare for celestial alignment (Day 30)", status: "PREPARING", priority: "CRITICAL" }
];

// ============================================
// STATE MANAGEMENT
// ============================================
let currentFocus = 'overview';
let selectedZone = null;
let selectedDiscovery = null;
let hologramRotation = { x: 0, y: 0 };
let isRotating = true;
let scanlineOffset = 0;
let particleSystem = null;
let currentUserIntel = 0; // Tracks the user's intel level for UI display

// ============================================
// HELPER FUNCTIONS
// ============================================

function synchronizeIntelState() {
    // 1. Fetch Intel Score using the centralized system helper
    // This handles base stats + history + research automatically
    // It also handles the 'generic' user fallback internally
    currentUserIntel = getIntelForFaction(FAWFUL_INTEL_KEY);
    
    // Safety clamp to ensure it's 0-100
    if (typeof currentUserIntel !== 'number' || isNaN(currentUserIntel)) {
        console.warn(`[FAWFUL_OS] Intel calculation failed for ${FAWFUL_INTEL_KEY}. Defaulting to 0.`);
        currentUserIntel = 0;
    }
    
    console.log(`[FAWFUL_OS] Authenticated User: ${state.loggedInUser || 'generic'}`);
    console.log(`[FAWFUL_OS] Intel Level Resolved: ${currentUserIntel}%`);

    // 2. Update Discovery Unlocks based on Intel Requirements
    let unlockedCount = 0;
    
    Object.values(CASTLE_ZONES).forEach(zone => {
        zone.discoveries.forEach(discovery => {
            // Check if this discovery has an intel requirement
            if (typeof discovery.intelRequired === 'number') {
                if (currentUserIntel >= discovery.intelRequired) {
                    discovery.discovered = true;
                    discovery.unlockedByIntel = true; // Flag for UI styling
                    unlockedCount++;
                } else {
                    discovery.discovered = false;
                }
            } else {
                // If no requirement is set, it defaults to discovered
                discovery.discovered = true; 
            }
        });
    });

    if (unlockedCount > 0) {
        // Optional: Log only if debugging
        // console.log(`[FAWFUL_OS] Decrypted ${unlockedCount} files.`);
    }
}

function getFormattedDate() {
    const month = MONTH_NAMES[CURRENT_GAME_DATE.monthIndex] || "Unknown";
    return `YEAR ${CURRENT_GAME_DATE.year} // ${month.toUpperCase()} // DAY ${CURRENT_GAME_DATE.day}`;
}

function getDaysUntilAlignment() {
    // The alignment is Day 30 of Highsun (monthIndex 6)
    const targetDay = 30;
    const currentDay = CURRENT_GAME_DATE.day;
    return targetDay - currentDay;
}

function calculateThreatLevel() {
    const alerts = Object.values(CASTLE_ZONES).reduce((sum, zone) => 
        sum + (typeof zone.surveillance.alerts === 'number' ? zone.surveillance.alerts : 5), 0);
    if (alerts > 10) return { level: 'CRITICAL', color: '#ff0000' };
    if (alerts > 5) return { level: 'ELEVATED', color: '#ff6600' };
    if (alerts > 2) return { level: 'GUARDED', color: '#ffff00' };
    return { level: 'NOMINAL', color: '#00ff00' };
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderSystemHeader() {
    const dateString = getFormattedDate();
    const threat = calculateThreatLevel();
    const daysToAlignment = getDaysUntilAlignment();
    
    // Ensure intel is synchronized before rendering the header
    // (This acts as a failsafe if render is called before init)
    if (currentUserIntel === 0 && state.loggedInUser && state.loggedInUser !== 'generic') {
         synchronizeIntelState();
    }
    
    return `
        <header class="fawful-system-header">
            <div class="header-row">
                <div class="sys-id">
                    <span class="blink">●</span> FAWFUL_DOMINION // CASTLE COMMAND INTERFACE v2.0
                </div>
                <div class="sys-date">
                    ${dateString}
                </div>
            </div>
            <div class="header-row status-row">
                <div class="sys-status">
                    THREAT LEVEL: <span class="threat-level" style="color: ${threat.color}">${threat.level}</span>
                </div>
                <div class="alignment-countdown ${daysToAlignment <= 3 ? 'critical' : ''}">
                    <span class="countdown-icon">⭐</span>
                    CELESTIAL ALIGNMENT: ${daysToAlignment} DAYS
                </div>
                <div class="sys-intel-readout">
                    DECRYPTION LEVEL: <span class="intel-value" style="color: #00ffff">${currentUserIntel}%</span>
                </div>
            </div>
        </header>
    `;
}

function renderHologramStage() {
    return `
        <div class="hologram-stage" id="hologram-stage">
            <!-- Holographic Grid Floor -->
            <div class="holo-floor">
                <div class="grid-plane"></div>
            </div>
            
            <!-- Projector Base -->
            <div class="projector-base">
                <div class="projector-ring ring-1"></div>
                <div class="projector-ring ring-2"></div>
                <div class="projector-ring ring-3"></div>
                <div class="projector-beam"></div>
            </div>
            
            <!-- The Castle Hologram -->
            <div class="castle-hologram" id="castle-hologram">
                ${renderCastleModel()}
                ${renderZoneHotspots()}
            </div>
            
            <!-- Floating Data Rings -->
            <div class="data-ring-container">
                <div class="data-ring data-ring-inner"></div>
                <div class="data-ring data-ring-outer"></div>
            </div>
            
            <!-- Scanline Effect -->
            <div class="scanline-overlay"></div>
            
            <!-- Glitch Effect Container -->
            <div class="glitch-container"></div>
        </div>
    `;
}

function renderCastleModel() {
    return `
        <div class="castle-3d-model">
            <!-- Main Castle Body -->
            <div class="castle-body">
                <!-- Central Tower -->
                <div class="tower central-tower">
                    <div class="tower-body"></div>
                    <div class="tower-roof">
                        <div class="fawful-banner"></div>
                    </div>
                    <div class="tower-windows">
                        <div class="window"></div>
                        <div class="window"></div>
                        <div class="window"></div>
                    </div>
                </div>
                
                <!-- Left Tower -->
                <div class="tower left-tower">
                    <div class="tower-body"></div>
                    <div class="tower-roof"></div>
                </div>
                
                <!-- Right Tower -->
                <div class="tower right-tower">
                    <div class="tower-body"></div>
                    <div class="tower-roof"></div>
                </div>
                
                <!-- Castle Base/Walls -->
                <div class="castle-base">
                    <div class="wall front-wall">
                        <div class="gate"></div>
                    </div>
                    <div class="wall left-wall"></div>
                    <div class="wall right-wall"></div>
                    <div class="wall back-wall"></div>
                </div>
                
                <!-- Underground Section (Dungeons) -->
                <div class="underground-section">
                    <div class="dungeon-level"></div>
                    <div class="tunnel-hints"></div>
                </div>
                
                <!-- Garden -->
                <div class="castle-garden">
                    <div class="garden-trees"></div>
                    <div class="weeping-statue"></div>
                </div>
            </div>
            
            <!-- Wireframe Overlay -->
            <div class="wireframe-overlay"></div>
            
            <!-- Energy Pulses -->
            <div class="energy-pulse pulse-1"></div>
            <div class="energy-pulse pulse-2"></div>
        </div>
    `;
}

function renderZoneHotspots() {
    return Object.values(CASTLE_ZONES).map(zone => `
        <div class="zone-hotspot" 
             data-zone="${zone.id}"
             style="left: ${zone.position.x}%; top: ${zone.position.y}%; --zone-color: ${zone.color}">
            <div class="hotspot-ping"></div>
            <div class="hotspot-icon">${zone.icon}</div>
            <div class="hotspot-label">${zone.name}</div>
            <div class="hotspot-status status-${zone.status.toLowerCase()}">${zone.status}</div>
        </div>
    `).join('');
}

function renderControlPanel() {
    return `
        <div class="control-panel">
            <div class="panel-section view-controls">
                <h4 class="section-title">
                    <span class="title-icon">🎮</span>
                    HOLOGRAM CONTROLS
                </h4>
                <div class="control-buttons">
                    <button class="control-btn" id="btn-rotate" title="Toggle Rotation">
                        <span class="btn-icon">🔄</span>
                        <span class="btn-label">ROTATE</span>
                    </button>
                    <button class="control-btn" id="btn-reset" title="Reset View">
                        <span class="btn-icon">🏠</span>
                        <span class="btn-label">RESET</span>
                    </button>
                    <button class="control-btn" id="btn-scan" title="Full Scan">
                        <span class="btn-icon">📡</span>
                        <span class="btn-label">SCAN</span>
                    </button>
                    <button class="control-btn danger" id="btn-alert" title="Security Alert">
                        <span class="btn-icon">🚨</span>
                        <span class="btn-label">ALERT</span>
                    </button>
                </div>
            </div>
            
            <div class="panel-section zone-selector">
                <h4 class="section-title">
                    <span class="title-icon">📍</span>
                    ZONE SELECT
                </h4>
                <div class="zone-buttons">
                    ${Object.values(CASTLE_ZONES).map(zone => `
                        <button class="zone-btn" data-zone="${zone.id}">
                            <span class="zone-icon">${zone.icon}</span>
                            <span class="zone-name">${zone.name}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="panel-section objectives-panel">
                <h4 class="section-title">
                    <span class="title-icon">🎯</span>
                    FAWFUL'S OBJECTIVES
                </h4>
                <div class="objectives-list">
                    ${FAWFUL_OBJECTIVES.map(obj => `
                        <div class="objective-item priority-${obj.priority.toLowerCase()}">
                            <span class="obj-status status-${obj.status.toLowerCase().replace(' ', '-')}">${obj.status}</span>
                            <span class="obj-text">${obj.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderInfoPanel() {
    return `
        <div class="info-panel" id="info-panel">
            <div class="info-header">
                <h3 class="info-title" id="info-title">PEACH'S CASTLE - OVERVIEW</h3>
                <button class="info-close" id="btn-close-info">×</button>
            </div>
            <div class="info-content" id="info-content">
                ${renderOverviewContent()}
            </div>
        </div>
    `;
}

function renderOverviewContent() {
    const totalDiscoveries = Object.values(CASTLE_ZONES)
        .reduce((sum, zone) => sum + zone.discoveries.filter(d => d.discovered).length, 0);
    
    return `
        <div class="overview-content">
            <div class="overview-header">
                <div class="castle-icon-large">🏰</div>
                <div class="overview-title">
                    <h2>PEACH'S CASTLE</h2>
                    <p class="subtitle">Now: FAWFUL'S GLORIOUS STRONGHOLD</p>
                </div>
            </div>
            
            <div class="overview-stats">
                <div class="stat-card">
                    <span class="stat-value">${Object.keys(CASTLE_ZONES).length}</span>
                    <span class="stat-label">Zones Secured</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">${totalDiscoveries}</span>
                    <span class="stat-label">Discoveries Decrypted</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">${getDaysUntilAlignment()}</span>
                    <span class="stat-label">Days to Alignment</span>
                </div>
                <div class="stat-card">
                    <span class="stat-value">23%</span>
                    <span class="stat-label">Passages Mapped</span>
                </div>
            </div>
            
            <div class="overview-narrative">
                <h4>SITUATION REPORT</h4>
                <p>Fawful's forces seized this castle on Day 8 of Highsun, 1040. What was once the seat of the illegitimate Mushroom Regency is now the command center of the GLORIOUS FAWFUL DOMINION.</p>
                
                <p>But this castle holds secrets—secrets that even 85 years of Regency rule could not uncover. Princess Peach was assassinated within these walls, and the truth of her death was buried here.</p>
                
                <p>Now, Fawful's brilliant mind has begun to unravel what the Regency tried so desperately to hide. The discoveries are... ILLUMINATING.</p>
                
                <p class="warning-text">⚠️ CELESTIAL ALIGNMENT IMMINENT: In ${getDaysUntilAlignment()} days, the stars will align as they did on the night of the assassination. The Chamber of Stars may finally be accessible. PREPARE FOR REVELATION.</p>
            </div>
            
            <div class="overview-instructions">
                <h4>INTERFACE INSTRUCTIONS</h4>
                <ul>
                    <li><span class="key">CLICK</span> zone hotspots to investigate areas</li>
                    <li><span class="key">DRAG</span> the hologram to rotate view</li>
                    <li><span class="key">SCROLL</span> to zoom in/out</li>
                    <li><span class="key">BUTTONS</span> on the left for quick navigation</li>
                </ul>
            </div>
        </div>
    `;
}

function renderZoneContent(zoneId) {
    const zone = CASTLE_ZONES[zoneId];
    if (!zone) return '';
    
    const discoveredItems = zone.discoveries.filter(d => d.discovered);
    const hiddenItems = zone.discoveries.filter(d => !d.discovered);
    
    return `
        <div class="zone-content">
            <div class="zone-header">
                <div class="zone-icon-large" style="--zone-color: ${zone.color}">${zone.icon}</div>
                <div class="zone-title-block">
                    <h2>${zone.name}</h2>
                    <div class="zone-status-row">
                        <span class="status-badge status-${zone.status.toLowerCase()}">${zone.status}</span>
                        <span class="security-badge security-${zone.securityLevel.toLowerCase()}">${zone.securityLevel} SECURITY</span>
                    </div>
                </div>
            </div>
            
            <p class="zone-description">${zone.description}</p>
            
            <div class="surveillance-grid">
                <div class="surv-item">
                    <span class="surv-icon">📹</span>
                    <span class="surv-value">${zone.surveillance.cameras}</span>
                    <span class="surv-label">Cameras</span>
                </div>
                <div class="surv-item">
                    <span class="surv-icon">💂</span>
                    <span class="surv-value">${zone.surveillance.guards}</span>
                    <span class="surv-label">Guards</span>
                </div>
                <div class="surv-item ${zone.surveillance.alerts > 0 ? 'alert' : ''}">
                    <span class="surv-icon">⚠️</span>
                    <span class="surv-value">${zone.surveillance.alerts}</span>
                    <span class="surv-label">Alerts</span>
                </div>
            </div>
            
            ${zone.surveillance.lastIncident ? `
                <div class="last-incident">
                    <span class="incident-label">LAST INCIDENT:</span>
                    <span class="incident-text">${zone.surveillance.lastIncident}</span>
                </div>
            ` : ''}
            
            ${zone.prisoners ? `
                <div class="prisoners-section">
                    <h4>DETAINED SUBJECTS</h4>
                    <div class="prisoners-list">
                        ${zone.prisoners.map(p => `
                            <div class="prisoner-item">
                                <span class="prisoner-id">${p.id}</span>
                                <span class="prisoner-name">${p.name}</span>
                                <span class="prisoner-status">${p.status}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="discoveries-section">
                <h4>INTELLIGENCE DISCOVERIES (${discoveredItems.length}/${zone.discoveries.length})</h4>
                <div class="discoveries-grid">
                    ${discoveredItems.map(d => `
                        <div class="discovery-card ${d.unlockedByIntel ? 'decrypted' : ''}" data-discovery="${d.id}">
                            <div class="discovery-header">
                                <span class="discovery-icon">${d.icon}</span>
                                <span class="discovery-title">${d.title}</span>
                            </div>
                            <span class="discovery-classification ${d.classification.toLowerCase().replace(' ', '-')}">${d.classification}</span>
                            ${d.unlockedByIntel ? '<span class="decryption-badge">DECRYPTED</span>' : ''}
                            <div class="discovery-preview">Click to view full report...</div>
                        </div>
                    `).join('')}
                    
                    ${hiddenItems.map(h => `
                         <div class="discovery-card locked">
                            <div class="discovery-header">
                                <span class="discovery-icon">🔒</span>
                                <span class="discovery-title">CLASSIFIED</span>
                            </div>
                            <span class="discovery-classification">INTEL REQUIRED: ${h.intelRequired}</span>
                            <div class="discovery-preview">Insufficient decryption level.</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderDiscoveryModal(zoneId, discoveryId) {
    const zone = CASTLE_ZONES[zoneId];
    const discovery = zone?.discoveries.find(d => d.id === discoveryId);
    if (!discovery) return '';
    
    return `
        <div class="discovery-modal" id="discovery-modal">
            <div class="modal-backdrop"></div>
            <div class="modal-content discovery-document">
                <div class="document-header">
                    <div class="classification-stamp ${discovery.classification.toLowerCase().replace(' ', '-')}">
                        ${discovery.classification}
                    </div>
                    ${discovery.unlockedByIntel ? '<div class="decrypted-stamp">DECRYPTED</div>' : ''}
                    <button class="modal-close" id="btn-close-modal">×</button>
                </div>
                
                <div class="document-title-block">
                    <span class="document-icon">${discovery.icon}</span>
                    <h2>${discovery.title}</h2>
                </div>
                
                <div class="document-meta">
                    <div class="meta-item">
                        <span class="meta-label">LOCATION:</span>
                        <span class="meta-value">${zone.name}</span>
                    </div>
                    ${discovery.discoveryDate ? `
                        <div class="meta-item">
                            <span class="meta-label">DISCOVERED:</span>
                            <span class="meta-value">Day ${discovery.discoveryDate.day}, ${MONTH_NAMES[discovery.discoveryDate.monthIndex]} ${discovery.discoveryDate.year}</span>
                        </div>
                    ` : ''}
                </div>
                
                <div class="document-content">
                    ${discovery.content.split('\n\n').map(para => `<p>${para}</p>`).join('')}
                </div>
                
                ${discovery.implications.length > 0 ? `
                    <div class="document-implications">
                        <h4>STRATEGIC IMPLICATIONS</h4>
                        <ul>
                            ${discovery.implications.map(imp => `<li>${imp}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                <div class="document-footer">
                    <div class="fawful-seal">🎭</div>
                    <p class="footer-text">FAWFUL DOMINION INTELLIGENCE DIVISION</p>
                    <p class="footer-motto">"Knowledge is the mustard of POWER!"</p>
                </div>
            </div>
        </div>
    `;
}

function renderSecurityFeed() {
    return `
        <div class="security-feed" id="security-feed">
            <div class="feed-header">
                <span class="feed-icon">📡</span>
                <span class="feed-title">LIVE SECURITY FEED</span>
                <span class="feed-status blink">● LIVE</span>
            </div>
            <div class="feed-scroll" id="feed-scroll">
                ${SECURITY_STATUS.broadcasts.map((msg, i) => `
                    <div class="feed-message" style="animation-delay: ${i * 0.5}s">
                        <span class="msg-time">${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}</span>
                        <span class="msg-text">${msg}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderAmbientEffects() {
    return `
        <div class="ambient-container">
            <div class="particle-field" id="particle-field"></div>
            <div class="hologram-noise"></div>
            <div class="corner-brackets">
                <div class="bracket tl"></div>
                <div class="bracket tr"></div>
                <div class="bracket bl"></div>
                <div class="bracket br"></div>
            </div>
        </div>
    `;
}

// ============================================
// INTERACTION HANDLERS
// ============================================

function attachEventListeners() {
    // Zone hotspots
    document.querySelectorAll('.zone-hotspot').forEach(hotspot => {
        hotspot.addEventListener('click', (e) => {
            e.stopPropagation();
            const zoneId = hotspot.dataset.zone;
            selectZone(zoneId);
        });
    });
    
    // Zone buttons
    document.querySelectorAll('.zone-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const zoneId = btn.dataset.zone;
            selectZone(zoneId);
            focusHologramOnZone(zoneId);
        });
    });
    
    // Control buttons
    document.getElementById('btn-rotate')?.addEventListener('click', toggleRotation);
    document.getElementById('btn-reset')?.addEventListener('click', resetView);
    document.getElementById('btn-scan')?.addEventListener('click', triggerScan);
    document.getElementById('btn-alert')?.addEventListener('click', triggerAlert);
    document.getElementById('btn-close-info')?.addEventListener('click', closeInfoPanel);
    
    // Hologram drag rotation
    const hologram = document.getElementById('castle-hologram');
    if (hologram) {
        let isDragging = false;
        let startX, startY;
        
        hologram.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            isRotating = false;
            updateRotateButton();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            hologramRotation.y += deltaX * 0.5;
            hologramRotation.x += deltaY * 0.3;
            hologramRotation.x = Math.max(-30, Math.min(30, hologramRotation.x));
            applyHologramRotation();
            startX = e.clientX;
            startY = e.clientY;
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }
    
    // Discovery cards
    document.addEventListener('click', (e) => {
        const discoveryCard = e.target.closest('.discovery-card:not(.locked)');
        if (discoveryCard && selectedZone) {
            const discoveryId = discoveryCard.dataset.discovery;
            openDiscoveryModal(selectedZone, discoveryId);
        }
        
        // Modal close
        if (e.target.matches('.modal-backdrop') || e.target.matches('#btn-close-modal')) {
            closeDiscoveryModal();
        }
    });
}

function selectZone(zoneId) {
    selectedZone = zoneId;
    
    // Update hotspot highlighting
    document.querySelectorAll('.zone-hotspot').forEach(h => {
        h.classList.toggle('selected', h.dataset.zone === zoneId);
    });
    
    // Update zone buttons
    document.querySelectorAll('.zone-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.zone === zoneId);
    });
    
    // Update info panel
    const infoTitle = document.getElementById('info-title');
    const infoContent = document.getElementById('info-content');
    const zone = CASTLE_ZONES[zoneId];
    
    if (infoTitle) infoTitle.textContent = zone.name.toUpperCase();
    if (infoContent) {
        infoContent.innerHTML = renderZoneContent(zoneId);
        attachDiscoveryListeners();
    }
    
    // Show info panel
    document.getElementById('info-panel')?.classList.add('visible');
}

function attachDiscoveryListeners() {
    document.querySelectorAll('.discovery-card:not(.locked)').forEach(card => {
        card.addEventListener('click', () => {
            const discoveryId = card.dataset.discovery;
            if (selectedZone && discoveryId) {
                openDiscoveryModal(selectedZone, discoveryId);
            }
        });
    });
}

function focusHologramOnZone(zoneId) {
    const zone = CASTLE_ZONES[zoneId];
    if (!zone) return;
    
    // Calculate rotation to face zone
    const targetY = (zone.position.x - 50) * -2;
    const targetX = (zone.position.y - 50) * 0.5;
    
    animateRotation(targetX, targetY);
}

function animateRotation(targetX, targetY) {
    const duration = 500;
    const startX = hologramRotation.x;
    const startY = hologramRotation.y;
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        hologramRotation.x = startX + (targetX - startX) * eased;
        hologramRotation.y = startY + (targetY - startY) * eased;
        applyHologramRotation();
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

function applyHologramRotation() {
    const hologram = document.getElementById('castle-hologram');
    if (hologram) {
        hologram.style.transform = `rotateX(${hologramRotation.x}deg) rotateY(${hologramRotation.y}deg)`;
    }
}

function toggleRotation() {
    isRotating = !isRotating;
    updateRotateButton();
    if (isRotating) startAutoRotation();
}

function updateRotateButton() {
    const btn = document.getElementById('btn-rotate');
    if (btn) {
        btn.classList.toggle('active', isRotating);
    }
}

function startAutoRotation() {
    function rotate() {
        if (!isRotating) return;
        hologramRotation.y += 0.2;
        applyHologramRotation();
        requestAnimationFrame(rotate);
    }
    requestAnimationFrame(rotate);
}

function resetView() {
    selectedZone = null;
    hologramRotation = { x: 0, y: 0 };
    applyHologramRotation();
    
    document.querySelectorAll('.zone-hotspot').forEach(h => h.classList.remove('selected'));
    document.querySelectorAll('.zone-btn').forEach(b => b.classList.remove('active'));
    
    const infoTitle = document.getElementById('info-title');
    const infoContent = document.getElementById('info-content');
    
    if (infoTitle) infoTitle.textContent = "PEACH'S CASTLE - OVERVIEW";
    if (infoContent) infoContent.innerHTML = renderOverviewContent();
}

function triggerScan() {
    const stage = document.getElementById('hologram-stage');
    if (stage) {
        stage.classList.add('scanning');
        addSecurityMessage('FULL SPECTRUM SCAN INITIATED...');
        
        setTimeout(() => {
            stage.classList.remove('scanning');
            addSecurityMessage('SCAN COMPLETE - No new anomalies detected');
        }, 3000);
    }
}

function triggerAlert() {
    const stage = document.getElementById('hologram-stage');
    if (stage) {
        stage.classList.add('alert-mode');
        addSecurityMessage('⚠️ SECURITY ALERT TRIGGERED - All zones on high alert');
        
        // Play alert animation
        document.querySelectorAll('.zone-hotspot').forEach(h => {
            h.classList.add('alert-pulse');
        });
        
        setTimeout(() => {
            stage.classList.remove('alert-mode');
            document.querySelectorAll('.zone-hotspot').forEach(h => {
                h.classList.remove('alert-pulse');
            });
            addSecurityMessage('Alert status normalized');
        }, 5000);
    }
}

function closeInfoPanel() {
    document.getElementById('info-panel')?.classList.remove('visible');
    selectedZone = null;
    document.querySelectorAll('.zone-hotspot').forEach(h => h.classList.remove('selected'));
    document.querySelectorAll('.zone-btn').forEach(b => b.classList.remove('active'));
}

function openDiscoveryModal(zoneId, discoveryId) {
    const existingModal = document.getElementById('discovery-modal');
    if (existingModal) existingModal.remove();
    
    const modalHtml = renderDiscoveryModal(zoneId, discoveryId);
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Animate in
    requestAnimationFrame(() => {
        document.getElementById('discovery-modal')?.classList.add('visible');
    });
}

function closeDiscoveryModal() {
    const modal = document.getElementById('discovery-modal');
    if (modal) {
        modal.classList.remove('visible');
        setTimeout(() => modal.remove(), 300);
    }
}

function addSecurityMessage(message) {
    const feed = document.getElementById('feed-scroll');
    if (feed) {
        const now = new Date();
        const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        
        const msgEl = document.createElement('div');
        msgEl.className = 'feed-message new';
        msgEl.innerHTML = `
            <span class="msg-time">${time}</span>
            <span class="msg-text">${message}</span>
        `;
        
        feed.insertBefore(msgEl, feed.firstChild);
        
        // Remove old messages
        while (feed.children.length > 10) {
            feed.removeChild(feed.lastChild);
        }
    }
}

// ============================================
// PARTICLE SYSTEM
// ============================================

function initParticleSystem() {
    const container = document.getElementById('particle-field');
    if (!container) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'holo-particle';
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation
    particle.style.animationDuration = `${3 + Math.random() * 4}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(particle);
}

// ============================================
// ANIMATION LOOPS
// ============================================

function startAnimationLoops() {
    // Scanline animation
    function animateScanline() {
        scanlineOffset += 1;
        if (scanlineOffset > 100) scanlineOffset = 0;
        
        const overlay = document.querySelector('.scanline-overlay');
        if (overlay) {
            overlay.style.backgroundPositionY = `${scanlineOffset}%`;
        }
        
        requestAnimationFrame(animateScanline);
    }
    animateScanline();
    
    // Start auto-rotation if enabled
    if (isRotating) {
        startAutoRotation();
    }
    
    // Periodic security feed updates
    setInterval(() => {
        const messages = [
            'All sectors nominal',
            'Patrol Unit 7 checking in',
            'Drone sweep complete - Zone 4',
            'Perimeter secure',
            'Spectral activity detected - Garden (normal range)',
            'Prisoner 085 vitals unchanged',
            'Dragon patrol overhead - Ashclaw reporting',
            'Tunnel motion sensors calibrated'
        ];
        
        if (Math.random() > 0.7) {
            addSecurityMessage(messages[Math.floor(Math.random() * messages.length)]);
        }
    }, 8000);
}

// ============================================
// MAIN INITIALIZATION
// ============================================

function initFawfulPage() {
    const container = document.getElementById('main-content');
    if (!container) return;
    
    // CRITICAL: Initialize Intel System first to ensure unlocks are processed 
    // AND state is read correctly before any HTML is generated.
    synchronizeIntelState();

    // Build the complete interface
    container.innerHTML = `
        <div class="fawful-interface">
            ${renderSystemHeader()}
            
            <div class="main-layout">
                ${renderControlPanel()}
                
                <div class="hologram-container">
                    ${renderHologramStage()}
                    ${renderSecurityFeed()}
                </div>
                
                ${renderInfoPanel()}
            </div>
            
            ${renderAmbientEffects()}
        </div>
    `;
    
    // Initialize systems
    attachEventListeners();
    initParticleSystem();
    startAnimationLoops();
    
    console.log('[FAWFUL_OS] Castle Command Interface initialized');
    console.log(`[FAWFUL_OS] Days until celestial alignment: ${getDaysUntilAlignment()}`);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initFawfulPage);

// Export for manual triggering
export { initFawfulPage };