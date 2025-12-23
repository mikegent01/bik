
// ritual-logic.js

class GMSheet {
    constructor() {
        this.state = {
            currentScene: 0,
            circleIntegrity: 5,
            safeguards: {
                oracleWard: true,
                greenTPresent: false,
                mirrorSeal: true,
                bloodPrice: true
            },
            flags: {
                danImpostor: false,
                archieFireRisk: false,
                legionAlert: false,
                waluigiChaos: 0
            },
            playerChecks: {
                archie: { prep: null, main: null, sustain: [null, null, null] },
                bowser: { prep: null, ground: null, mirror: null, sustain: [null, null, null, null] },
                markop: { prep: null, position: null, defense: null },
                waluigi: { prep: null, stillness: [null, null, null], weirdCount: 0 }
            }
        };
        
        this.init();
    }

    init() {
        this.renderSidebar();
        this.renderStatusPanel();
        this.renderMainContent();
        this.showDashboard();
    }

    renderSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.innerHTML = `
            <h1>🎭 RITUAL GM SHEET</h1>
            <p class="subtitle">Mirror Synchronization Rite</p>
            
            <div class="nav-section">
                <h3>Navigation</h3>
                <button class="nav-btn active" onclick="gm.showDashboard()" id="nav-dashboard">
                    <span class="icon">📊</span> Dashboard
                </button>
                <button class="nav-btn" onclick="gm.showSceneRunner()" id="nav-scenes">
                    <span class="icon">🎬</span> Scene Runner
                </button>
                <button class="nav-btn" onclick="gm.showCharacters()" id="nav-characters">
                    <span class="icon">👥</span> Characters
                </button>
                <button class="nav-btn" onclick="gm.showPlayerRoles()" id="nav-roles">
                    <span class="icon">⭐</span> Player Roles
                </button>
            </div>
            
            <div class="nav-section">
                <h3>References</h3>
                <button class="nav-btn" onclick="gm.showRollTables()" id="nav-tables">
                    <span class="icon">🎲</span> Roll Tables
                </button>
                <button class="nav-btn" onclick="gm.showFailureTrees()" id="nav-failures">
                    <span class="icon">🌳</span> Failure Trees
                </button>
                <button class="nav-btn" onclick="gm.showQuickReference()" id="nav-quick">
                    <span class="icon">⚡</span> Quick Reference
                </button>
            </div>
        `;
    }
// Add this to your GMSheet class - Failure/Recovery System

initFailureStates() {
    this.failureStates = {
        archie_fire: false,
        archie_ice_unstable: false,
        hjumpik_flipped: false,
        squad_panic: false,
        dan_acted: false,
        oracle_interrupted: false,
        mirror_shattered: false,
        summoning_triggered: false
    };
    
    this.recoveryAttempts = {
        archie_fire: 0,
        hjumpik_flipped: 0,
        squad_panic: 0,
        dan_acted: 0,
        oracle_interrupted: 0
    };
}

// Failure Subpages Data
getFailureSubpages() {
    return {
        // ARCHIE FIRE CATASTROPHE
        archie_fire: {
            id: 'archie_fire',
            icon: '🔥',
            title: 'FIRE CATASTROPHE',
            subtitle: 'Archie Cast Fire — Ritual Inverting',
            severity: 'CRITICAL',
            oracleQuote: 'No! The cut becomes a door! Someone close it!',
            description: `
                <p class="critical-alert">🔥 ARCHIE HAS CAST FIRE DURING THE RITUAL 🔥</p>
                <p>The ice shatters. The mirror ripples violently. Instead of cutting, the ritual is now <strong>summoning</strong>.</p>
                <p>The mirror shows something moving toward the surface from the other side.</p>
                <p class="warning">You have <strong>3 ROUNDS</strong> to attempt recovery before the summoning completes.</p>
            `,
            rounds: 3,
            recoveryOptions: [
                {
                    name: 'Oracle Redirect',
                    description: 'Oracle attempts to redirect the fire energy into themselves',
                    who: 'Oracle',
                    dc: 18,
                    type: 'WIS Save DC 18',
                    successText: 'Oracle absorbs the fire. Takes 4d6 damage but ritual stabilizes.',
                    failText: 'Oracle burned. Ritual continues inverting. -1 round remaining.',
                    onSuccess: 'redirect_success',
                    onFail: 'lose_round',
                    damage: '4d6 fire damage to Oracle on success',
                    critical: true
                },
                {
                    name: 'Archie Reasserts Ice',
                    description: 'Archie tries to overpower his own fire with ice',
                    who: 'Archie',
                    dc: 20,
                    type: 'Arcana DC 20 (disadvantage)',
                    successText: 'Fire freezes mid-burst. Contained. Archie takes 2d6 cold damage.',
                    failText: 'Fire grows stronger. Archie takes 2d6 fire damage. -1 round.',
                    onSuccess: 'ice_recovery',
                    onFail: 'fire_grows',
                    disadvantage: true
                },
                {
                    name: 'Markop Physical Shield',
                    description: 'Markop throws himself between the fire and the mirror',
                    who: 'Markop',
                    dc: 15,
                    type: 'CON Save DC 15',
                    successText: 'Markop absorbs the blast. Takes 3d6 damage. Mirror protected.',
                    failText: 'Markop knocked aside. Fire reaches mirror. -2 rounds.',
                    onSuccess: 'shield_success',
                    onFail: 'shield_fail',
                    damage: '3d6 fire damage to Markop on success'
                },
                {
                    name: 'Waluigi Chaos Absorption',
                    description: 'Waluigi tries to absorb the chaotic fire energy',
                    who: 'Waluigi',
                    dc: 16,
                    type: 'CHA Save DC 16',
                    successText: 'Fire warps around Waluigi. Something weird happens but fire is contained.',
                    failText: 'Fire gets weirder. Roll on Weird Fire table.',
                    onSuccess: 'chaos_absorb',
                    onFail: 'weird_fire',
                    rollTableOnFail: 'weird_fire'
                },
                {
                    name: 'Squad Water/Sand',
                    description: 'Rodger\'s squad attempts to physically smother the fire',
                    who: 'Squad (group check)',
                    dc: 14,
                    type: 'Group DEX Check DC 14',
                    successText: 'Fire partially smothered. Buys 1 extra round.',
                    failText: 'Squad scattered by heat. -1 to all squad checks.',
                    onSuccess: 'gain_round',
                    onFail: 'squad_scattered'
                },
                {
                    name: 'Accept Sacrifice',
                    description: 'Someone volunteers to be the fire\'s target, ending the spread',
                    who: 'Any volunteer',
                    dc: 0,
                    type: 'Automatic — Requires volunteer',
                    successText: 'Fire consumes the volunteer. Ritual can continue. Roll on Sacrifice Outcome.',
                    failText: 'N/A',
                    onSuccess: 'sacrifice',
                    automatic: true,
                    extreme: true
                }
            ],
            rollTables: [
                {
                    name: 'Fire Target (if no recovery)',
                    id: 'fire-target',
                    die: 8,
                    results: [
                        { roll: 1, text: 'Markop — nearest physical anchor', effect: 'Severe burns. CON DC 15 or unconscious. Role disabled.' },
                        { roll: 2, text: 'Rodger — stabilizer destroyed', effect: 'Squad panics automatically. -3 Ritual Stability.' },
                        { roll: 3, text: 'Eager — tether severed', effect: 'All emotional links cut. Group fragments.' },
                        { roll: 4, text: 'Toadburt — record burns', effect: 'Memory of ritual lost. Timeline may not persist.' },
                        { roll: 5, text: 'Toad Lee — consensus shattered', effect: 'Reality becomes negotiable. Very bad.' },
                        { roll: 6, text: 'Hjumpik — broker burned', effect: 'Post-ritual consequences unanchored.' },
                        { roll: 7, text: 'Oracle — conductor wounded', effect: 'Takes 5d6. If survives, ritual continues damaged.' },
                        { roll: 8, text: 'Dan — the question burns', effect: 'Answer becomes: neither. Dan exists in fire now.' }
                    ]
                },
                {
                    name: 'Weird Fire (Waluigi fail)',
                    id: 'weird-fire',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Fire turns purple — still hot, now confused', effect: 'Fire attacks randomly each round.' },
                        { roll: 2, text: 'Fire becomes cold — ice-fire paradox', effect: 'Both fire and cold damage to everyone nearby.' },
                        { roll: 3, text: 'Fire speaks — says something cryptic', effect: 'GM delivers prophecy. Fire still dangerous.' },
                        { roll: 4, text: 'Fire splits into 12 small fires — one per participant', effect: 'Each person has personal fire to deal with.' },
                        { roll: 5, text: 'Fire inverts — becomes dark-fire, absorbs light', effect: 'Darkness spreads. Salam\'s torch critical.' },
                        { roll: 6, text: 'Fire laughs — Waluigi energy', effect: 'Fire becomes comedic but still lethal.' }
                    ]
                },
                {
                    name: 'Sacrifice Outcome',
                    id: 'sacrifice-outcome',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Clean death — fire satisfied', effect: 'Volunteer dead. Ritual can complete normally.' },
                        { roll: 2, text: 'Transformed — becomes fire entity', effect: 'Volunteer now elemental. New NPC or retirement.' },
                        { roll: 3, text: 'Marked — survives but changed', effect: '1 HP, permanent fire scars, fire immunity.' },
                        { roll: 4, text: 'Absorbed — soul in the fire now', effect: 'Body dead, consciousness in flames. Rescue quest?' },
                        { roll: 5, text: 'Rejected — fire wants someone else', effect: 'Volunteer spared. Roll Fire Target instead.' },
                        { roll: 6, text: 'Transcended — fire obeys them now', effect: 'Volunteer controls fire. Becomes ritual asset.' }
                    ]
                }
            ],
            timerEnd: {
                title: 'SUMMONING COMPLETES',
                description: 'The fire has fully inverted the ritual. Something comes through.',
                consequences: [
                    'Ritual becomes summoning — something arrives',
                    'Dan\'s question unanswered — overshadowed by new threat',
                    'All participants marked by fire — visible to fire entities',
                    'Mirror becomes permanent portal (until closed)',
                    'Roll on "What Came Through" table'
                ],
                rollTable: {
                    name: 'What Came Through',
                    id: 'what-came',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Fire Echo of Dan — is THIS the real Dan?', effect: 'New impostor situation. Worse than before.' },
                        { roll: 2, text: 'Ember Collector — wants to harvest the ritual\'s heat', effect: 'Combat encounter. Fire-based entity.' },
                        { roll: 3, text: 'Ash Memory — ghost of previous ritual failure', effect: 'Information source but hostile.' },
                        { roll: 4, text: 'Flame That Speaks — oracle entity, fire-aligned', effect: 'Demands bargain. Might help or harm.' },
                        { roll: 5, text: 'Nothing visible — but something IS here now', effect: 'Invisible presence. Future horror.' },
                        { roll: 6, text: 'The fire itself becomes entity — Archie\'s fire, alive', effect: 'Archie\'s guilt made manifest.' }
                    ]
                }
            }
        },

        // HJUMPIK FLIPS EARLY
        hjumpik_flipped: {
            id: 'hjumpik_flipped',
            icon: '🐸',
            title: 'HJUMPIK BETRAYS EARLY',
            subtitle: 'The Broker Moves Before The Cut',
            severity: 'CRITICAL',
            oracleQuote: 'The edges! Someone hold the edges! Without opposition the mirror has nothing to push against!',
            description: `
                <p class="critical-alert">🐸 HJUMPIK HAS BROKEN POSITION EARLY 🐸</p>
                <p>The ritual needed Hjumpik's controlled duplicity to define edges. Now the mirror has no resistance.</p>
                <p>Without a traitor, mirrors collapse inward. The ritual is folding.</p>
                <p class="warning">You have <strong>2 ROUNDS</strong> to provide new opposition before the mirror implodes.</p>
            `,
            rounds: 2,
            recoveryOptions: [
                {
                    name: 'Someone Becomes The Traitor',
                    description: 'Another participant must genuinely doubt, even briefly',
                    who: 'Any participant',
                    dc: 16,
                    type: 'WIS Save DC 16 (must FAIL to succeed)',
                    successText: 'They doubt. It hurts. But the mirror has its edge again.',
                    failText: 'Too loyal. Cannot provide opposition.',
                    onSuccess: 'new_traitor',
                    inverse: true,
                    note: 'Player must roleplay genuine doubt. Cannot fake it.'
                },
                {
                    name: 'Oracle Argues With Self',
                    description: 'Oracle creates internal opposition',
                    who: 'Oracle',
                    dc: 18,
                    type: 'INT Save DC 18',
                    successText: 'Oracle\'s multiple instances disagree. Edge restored.',
                    failText: 'Oracle too unified. No opposition generated.',
                    onSuccess: 'oracle_split',
                    onFail: 'oracle_unified'
                },
                {
                    name: 'Waluigi Opposes Everything',
                    description: 'Waluigi\'s natural chaos becomes structured opposition',
                    who: 'Waluigi',
                    dc: 14,
                    type: 'CHA Check DC 14',
                    successText: 'Waluigi becomes anti-everything. Mirror has something to push against.',
                    failText: 'Too chaotic. Not opposition, just noise.',
                    onSuccess: 'chaos_opposition',
                    onFail: 'chaos_noise'
                },
                {
                    name: 'Dan Asserts (Risky)',
                    description: 'Dan breaks silence to oppose — but this changes the ritual',
                    who: 'Dan',
                    dc: 0,
                    type: 'Automatic — But has cost',
                    successText: 'Dan provides opposition. But Dan is no longer the question — Dan is an answer.',
                    failText: 'N/A',
                    onSuccess: 'dan_answers',
                    automatic: true,
                    extreme: true,
                    warning: 'This answers Dan\'s question prematurely. May not be correct answer.'
                },
                {
                    name: 'Physical Restraint',
                    description: 'Physically stop Hjumpik from leaving the circle',
                    who: 'Markop or Rodger',
                    dc: 14,
                    type: 'Athletics DC 14 (opposed)',
                    successText: 'Hjumpik held in place. Forced opposition.',
                    failText: 'Hjumpik escapes grip. Continues toward door.',
                    onSuccess: 'forced_stay',
                    onFail: 'escaped'
                }
            ],
            rollTables: [
                {
                    name: 'Why Hjumpik Flipped',
                    id: 'hjumpik-why',
                    die: 4,
                    results: [
                        { roll: 1, text: 'Saw something in the mirror — terrified', effect: 'Hjumpik knows something. Will share if calmed.' },
                        { roll: 2, text: 'Loyalty to someone outside — called away', effect: 'External threat. Something else is happening.' },
                        { roll: 3, text: 'Genuine betrayal — was never with you', effect: 'Real traitor. Post-ritual enemy.' },
                        { roll: 4, text: 'Misunderstood timing — thought it was time', effect: 'Accident. Can be recovered easily if caught.' }
                    ]
                },
                {
                    name: 'Mirror Collapse Effect',
                    id: 'mirror-collapse',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Mirror shows everyone as Hjumpik', effect: 'Identity confusion. Who is who?' },
                        { roll: 2, text: 'Mirror shows nothing — blank', effect: 'No answers possible. Ritual fails quietly.' },
                        { roll: 3, text: 'Mirror shows the opposite of truth', effect: 'Everything learned is inverted.' },
                        { roll: 4, text: 'Mirror cracks into 12 pieces — one per person', effect: 'Each person sees only themselves. Fragmentation.' },
                        { roll: 5, text: 'Mirror implodes — glass everywhere', effect: '2d6 damage to all. Ritual ends.' },
                        { roll: 6, text: 'Mirror goes to static — information overload', effect: 'Glimpses of everything. Overwhelm. WIS save or stunned.' }
                    ]
                }
            ],
            timerEnd: {
                title: 'MIRROR COLLAPSES',
                description: 'Without opposition, the mirror folds into itself.',
                consequences: [
                    'Ritual fails — no answers obtained',
                    'All reflective surfaces in room become dangerous',
                    'Dan\'s question remains unanswered',
                    'Hjumpik\'s loyalty now certain — against the group',
                    'Roll on Mirror Collapse Effect table'
                ]
            }
        },

        // SQUAD PANIC
        squad_panic: {
            id: 'squad_panic',
            icon: '😱',
            title: 'SQUAD PANIC CASCADE',
            subtitle: 'The Stabilizers Are Breaking',
            severity: 'HIGH',
            oracleQuote: 'Rodger! Your soldiers! Reality needs them to believe it\'s real!',
            description: `
                <p class="warning-alert">😱 RODGER'S SQUAD IS PANICKING 😱</p>
                <p>The stabilizing mass is fragmenting. Without them, the ritual has nothing mundane to anchor to.</p>
                <p>Reality is starting to feel optional.</p>
                <p>You have <strong>2 ROUNDS</strong> to restore squad cohesion.</p>
            `,
            rounds: 2,
            recoveryOptions: [
                {
                    name: 'Rodger Commands',
                    description: 'Rodger asserts authority and orders calm',
                    who: 'Rodger',
                    dc: 14,
                    type: 'CHA (Intimidation or Leadership) DC 14',
                    successText: 'Squad snaps to attention. Fear becomes discipline.',
                    failText: 'Squad too scared to hear. Panic continues.',
                    onSuccess: 'squad_rallied',
                    onFail: 'rodger_ignored',
                    advantage_if: 'Rodger invokes specific training or memory'
                },
                {
                    name: 'Salam\'s Torch',
                    description: 'Salam raises the torch high — light fights darkness',
                    who: 'Salam',
                    dc: 12,
                    type: 'WIS Save DC 12',
                    successText: 'Light pushes back the strangeness. Forward motion restored.',
                    failText: 'Torch flickers. Darkness presses in.',
                    onSuccess: 'light_restored',
                    onFail: 'darkness_wins'
                },
                {
                    name: 'Smokin\' J Absorbs Fear',
                    description: 'Smokin\' J takes on the squad\'s fear',
                    who: 'Smokin\' J',
                    dc: 15,
                    type: 'WIS Save DC 15',
                    successText: 'J becomes terrified. Squad calms. J takes 1d6 psychic damage.',
                    failText: 'J\'s own fear amplifies squad\'s. Panic worsens.',
                    onSuccess: 'fear_absorbed',
                    onFail: 'fear_amplified',
                    damage: '1d6 psychic to Smokin\' J on success'
                },
                {
                    name: 'Perot Maintains Continuity',
                    description: 'Perot reminds everyone this is just another mission',
                    who: 'Perot',
                    dc: 13,
                    type: 'INT Check DC 13',
                    successText: 'Before and after still exist. This is just the during.',
                    failText: 'Continuity breaks. Squad unsure if this is real.',
                    onSuccess: 'continuity_held',
                    onFail: 'continuity_breaks'
                },
                {
                    name: 'Eager Links Emotions',
                    description: 'Eager extends emotional tethers to calm the squad',
                    who: 'Eager',
                    dc: 14,
                    type: 'CHA Save DC 14',
                    successText: 'Squad feels connection. Not alone. Panic subsides.',
                    failText: 'Eager absorbs their panic instead. Eager panics.',
                    onSuccess: 'emotions_linked',
                    onFail: 'panic_spreads'
                },
                {
                    name: 'Markop Stands In Front',
                    description: 'Markop physically shields squad from whatever scared them',
                    who: 'Markop',
                    dc: 12,
                    type: 'CON Save DC 12',
                    successText: 'Markop absorbs the scary. Squad sees only his back.',
                    failText: 'Markop flinches. Squad sees he\'s scared too.',
                    onSuccess: 'markop_shields',
                    onFail: 'markop_scared'
                }
            ],
            rollTables: [
                {
                    name: 'What Scared The Squad',
                    id: 'squad-scare',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Mirror showed them dead', effect: 'Saw their own corpses. Existential terror.' },
                        { roll: 2, text: 'Reality glitched — they saw through it', effect: 'Glimpsed the unreality. Too much truth.' },
                        { roll: 3, text: 'Something looked back', effect: 'Eye contact with entity. Personal terror.' },
                        { roll: 4, text: 'One of them wasn\'t there momentarily', effect: 'Someone flickered. Who? Why?' },
                        { roll: 5, text: 'Heard their names spoken — wrongly', effect: 'Names mispronounced by something old.' },
                        { roll: 6, text: 'Smelled home — then it rotted', effect: 'Comfort corrupted. Psychological attack.' }
                    ]
                },
                {
                    name: 'Panic Cascade Effect',
                    id: 'panic-cascade',
                    die: 4,
                    results: [
                        { roll: 1, text: 'One squad member runs', effect: 'Circle broken on south side.' },
                        { roll: 2, text: 'Squad freezes completely', effect: 'No longer stabilizing. Just statues.' },
                        { roll: 3, text: 'Panic spreads to witnesses', effect: 'Toad Lee, Toadburt, Eager also affected.' },
                        { roll: 4, text: 'Panic becomes rage', effect: 'Squad becomes violent. May attack mirror.' }
                    ]
                }
            ],
            timerEnd: {
                title: 'MUNDANE ANCHOR LOST',
                description: 'The squad has broken. Reality is no longer mandatory.',
                consequences: [
                    'Ritual becomes "pure magic" — no physical grounding',
                    'Accountability dissolves — actions may not have consequences',
                    'Dan\'s question becomes academic — reality might not care about answers',
                    'All further checks at disadvantage — nothing feels real',
                    'Roll on Panic Cascade Effect table'
                ]
            }
        },

        // DAN ACTS
        dan_acted: {
            id: 'dan_acted',
            icon: '🦾',
            title: 'DAN ASSERTED AGENCY',
            subtitle: 'The Question Answered Itself',
            severity: 'CRITICAL',
            oracleQuote: 'No! The mirror was supposed to decide! Now Dan has decided for it!',
            description: `
                <p class="critical-alert">🦾 DAN SPOKE, ACTED, OR LED 🦾</p>
                <p>Dan was supposed to be the question. By asserting agency, Dan has become an answer.</p>
                <p>The mirror now assumes coherence — whether or not it's true.</p>
                <p>This might be the wrong answer.</p>
            `,
            rounds: 1,
            recoveryOptions: [
                {
                    name: 'Dan Immediately Retracts',
                    description: 'Dan takes back the assertion, returns to passivity',
                    who: 'Dan',
                    dc: 16,
                    type: 'WIS Save DC 16',
                    successText: 'Dan unsays. Mirror hesitates. Question reopens slightly.',
                    failText: 'Too late. The assertion stands. Dan is singular (true or not).',
                    onSuccess: 'question_reopens',
                    onFail: 'answer_locked',
                    note: 'Only works if Dan acted out of reflex, not intention'
                },
                {
                    name: 'Oracle Declares Ambiguity',
                    description: 'Oracle states that the ritual has not yet decided',
                    who: 'Oracle',
                    dc: 17,
                    type: 'CHA Check DC 17',
                    successText: 'Oracle overrules the mirror briefly. Question persists.',
                    failText: 'Mirror already made up its mind. Oracle overruled.',
                    onSuccess: 'oracle_overrules',
                    onFail: 'oracle_overruled'
                },
                {
                    name: 'Another Dan Appears',
                    description: 'If impostor exists, this is when they would reveal',
                    who: 'GM (narrative)',
                    dc: 0,
                    type: 'Narrative trigger — if applicable',
                    successText: 'Two Dans. Question dramatically reopened.',
                    failText: 'N/A — only one Dan here.',
                    onSuccess: 'two_dans',
                    conditional: true,
                    note: 'Only if GM has impostor in play'
                },
                {
                    name: 'Accept The Answer',
                    description: 'Let Dan\'s assertion stand. Move forward with this truth.',
                    who: 'Group decision',
                    dc: 0,
                    type: 'Automatic — Choice',
                    successText: 'Dan is singular. This is now true. Whether or not it was true before.',
                    failText: 'N/A',
                    onSuccess: 'answer_accepted',
                    automatic: true,
                    warning: 'This may be wrong. But it will BE true now.'
                }
            ],
            rollTables: [
                {
                    name: 'What Dan Did',
                    id: 'dan-action',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Spoke — said something', effect: 'Words have power. What was said?' },
                        { roll: 2, text: 'Moved — changed position', effect: 'Left assigned spot. Circle geometry affected.' },
                        { roll: 3, text: 'Touched — reached for something', effect: 'Physical contact. With what/whom?' },
                        { roll: 4, text: 'Decided — made a choice', effect: 'Agency asserted. Dan chose something.' },
                        { roll: 5, text: 'Looked — stared at the mirror directly', effect: 'Eye contact with reflection. Acknowledgment.' },
                        { roll: 6, text: 'Helped — tried to assist someone', effect: 'Heroic impulse. Selflessness revealed.' }
                    ]
                },
                {
                    name: 'Locked Answer Consequence',
                    id: 'locked-answer',
                    die: 4,
                    results: [
                        { roll: 1, text: 'Dan is Dan — but the method was wrong', effect: 'True answer, tainted process. Doubt remains.' },
                        { roll: 2, text: 'Dan is Dan — and always was', effect: 'Correct. Lucky. But will anyone believe it?' },
                        { roll: 3, text: 'Dan is "Dan" — the ritual says so now', effect: 'Answer may be false but is now enforced.' },
                        { roll: 4, text: 'Dan is singular but damaged', effect: 'Real Dan, but assertion cost something.' }
                    ]
                }
            ],
            timerEnd: {
                title: 'ANSWER CRYSTALLIZED',
                description: 'Dan\'s assertion has been accepted by the ritual. True or not.',
                consequences: [
                    'Dan is now definitionally singular — the ritual says so',
                    'If wrong, this creates a false truth — very dangerous',
                    'No further questioning of Dan possible through this ritual',
                    'Impostor (if exists) may now be integrated incorrectly',
                    'Roll on Locked Answer Consequence table'
                ]
            }
        },

        // ORACLE INTERRUPTED
        oracle_interrupted: {
            id: 'oracle_interrupted',
            icon: '🗣️',
            title: 'ORACLE INTERRUPTED',
            subtitle: 'The Cut Was Stopped Mid-Swing',
            severity: 'CRITICAL',
            oracleQuote: '— the words — they need to be — I can\'t—',
            description: `
                <p class="critical-alert">🗣️ THE ORACLE WAS INTERRUPTED DURING THE CUT 🗣️</p>
                <p>The severance was mid-execution. The blade stopped halfway through.</p>
                <p>The ritual is suspended between states. Everything is caught in between.</p>
                <p class="warning">You have <strong>2 ROUNDS</strong> to complete the cut before timeline shear.</p>
            `,
            rounds: 2,
            recoveryOptions: [
                {
                    name: 'Oracle Resumes',
                    description: 'Oracle fights through interruption and continues',
                    who: 'Oracle',
                    dc: 16,
                    type: 'CON Save DC 16',
                    successText: 'Oracle pushes through. Words continue. Cut proceeds.',
                    failText: 'Oracle chokes. Cannot continue. Someone else must try.',
                    onSuccess: 'oracle_continues',
                    onFail: 'oracle_fails'
                },
                {
                    name: 'Another Speaks',
                    description: 'Someone else tries to complete the Oracle\'s words',
                    who: 'Any participant',
                    dc: 18,
                    type: 'Arcana DC 18 or Religion DC 18',
                    successText: 'They find the words. Wrong voice but right meaning.',
                    failText: 'Wrong words. Timeline shear accelerates. -1 round.',
                    onSuccess: 'substitute_voice',
                    onFail: 'wrong_words',
                    note: 'Toadburt has advantage (heard the words, recorded them)'
                },
                {
                    name: 'Silence The Interrupter',
                    description: 'Remove whatever caused the interruption',
                    who: 'Markop or anyone combat-capable',
                    dc: 'Variable',
                    type: 'Depends on interrupter',
                    successText: 'Interruption stopped. Oracle can resume with advantage.',
                    failText: 'Interrupter still active. Ongoing problem.',
                    onSuccess: 'interrupter_stopped',
                    onFail: 'interrupter_continues',
                    note: 'May require combat. May require persuasion. Depends on source.'
                },
                {
                    name: 'Archie Freezes Time',
                    description: 'Archie pushes ice channeling to freeze the moment',
                    who: 'Archie',
                    dc: 18,
                    type: 'CON Save DC 18',
                    successText: 'Moment frozen. Infinite time to fix this. Archie takes 3d6 cold damage.',
                    failText: 'Ice cracks under strain. Time resumes at double speed.',
                    onSuccess: 'time_frozen',
                    onFail: 'time_accelerates',
                    damage: '3d6 cold damage to Archie on success',
                    extreme: true
                },
                {
                    name: 'Accept Partial Cut',
                    description: 'Let the ritual complete as-is, imperfectly',
                    who: 'Group decision',
                    dc: 0,
                    type: 'Automatic — Choice',
                    successText: 'Cut is partial. Some separation achieved. Loose threads remain.',
                    failText: 'N/A',
                    onSuccess: 'partial_cut',
                    automatic: true,
                    warning: 'Partial cut means partial answers and partial dangers.'
                }
            ],
            rollTables: [
                {
                    name: 'What Caused Interruption',
                    id: 'interruption-source',
                    die: 6,
                    results: [
                        { roll: 1, text: 'External attack — something from outside', effect: 'The ritual drew attention. Combat situation.' },
                        { roll: 2, text: 'Participant broke — someone cracked', effect: 'One of the twelve caused this. Who?' },
                        { roll: 3, text: 'Mirror entity — something in the reflection', effect: 'The mirror\'s subject fought back.' },
                        { roll: 4, text: 'Physical failure — Oracle collapsed', effect: 'Oracle exhausted. Medical attention needed.' },
                        { roll: 5, text: 'Hjumpik moved — the broker interfered', effect: 'Hjumpik chose this moment. Why?' },
                        { roll: 6, text: 'Dan reacted — the question moved', effect: 'Dan\'s assertion caused Oracle to stop.' }
                    ]
                },
                {
                    name: 'Timeline Shear Effect',
                    id: 'timeline-shear',
                    die: 6,
                    results: [
                        { roll: 1, text: 'LOOP — scene repeats', effect: 'Everyone remembers. Stress damage. Do it again.' },
                        { roll: 2, text: 'ERASURE — someone was never here', effect: 'Random participant "never joined". Gone.' },
                        { roll: 3, text: 'BRANCH — two versions now exist', effect: 'Ritual both succeeded and failed. Choose which.' },
                        { roll: 4, text: 'ANCHOR SWAP — Oracle becomes fixture', effect: 'Oracle trapped. Need new Oracle. Rescue quest.' },
                        { roll: 5, text: 'ECHO — ritual will repeat at random times', effect: 'Future involuntary repetitions. Bad.' },
                        { roll: 6, text: 'MERGE — timelines blend incorrectly', effect: 'Wrong memories. Wrong outcomes. Wrong everything.' }
                    ]
                }
            ],
            timerEnd: {
                title: 'TIMELINE SHEAR',
                description: 'The cut was never completed. Time is broken.',
                consequences: [
                    'Reality bifurcates — multiple versions of this moment exist',
                    'Some participants may remember different outcomes',
                    'Dan\'s question answered differently in different branches',
                    'Future sessions may experience timeline echoes',
                    'Roll on Timeline Shear Effect table'
                ]
            }
        },

        // ICE UNSTABLE (Less severe)
        archie_ice_unstable: {
            id: 'archie_ice_unstable',
            icon: '❄️',
            title: 'ICE CHANNELING UNSTABLE',
            subtitle: 'The Cold Is Flickering',
            severity: 'MODERATE',
            oracleQuote: 'Archie, focus! The mirror needs truth, not desire!',
            description: `
                <p class="warning-alert">❄️ ARCHIE'S ICE IS FLICKERING ❄️</p>
                <p>The ice is not stable. It's showing orange. The mirror is starting to reflect desires instead of truth.</p>
                <p>This isn't catastrophic yet, but it will be if not corrected.</p>
            `,
            rounds: 3,
            recoveryOptions: [
                {
                    name: 'Archie Refocuses',
                    description: 'Archie clears mind and restabilizes the ice',
                    who: 'Archie',
                    dc: 14,
                    type: 'WIS Save DC 14',
                    successText: 'Ice clears. Pure blue-white returns. Truth restored.',
                    failText: 'Still flickering. Try again or escalate.',
                    onSuccess: 'ice_stable',
                    onFail: 'still_unstable'
                },
                {
                    name: 'Oracle Supports',
                    description: 'Oracle provides verbal guidance',
                    who: 'Oracle',
                    dc: 12,
                    type: 'CHA Check DC 12',
                    successText: 'Archie gains advantage on next refocus attempt.',
                    failText: 'Words don\'t reach. Archie alone.',
                    onSuccess: 'support_given',
                    onFail: 'no_support'
                },
                {
                    name: 'Embrace Imperfection',
                    description: 'Accept slightly flawed mirror, continue ritual',
                    who: 'Group decision',
                    dc: 0,
                    type: 'Automatic — Choice',
                    successText: 'Ritual continues. Answers may be partially corrupted by desire.',
                    failText: 'N/A',
                    onSuccess: 'imperfect_accepted',
                    automatic: true,
                    warning: 'Answers will mix truth with what people WANT to be true.'
                }
            ],
            rollTables: [
                {
                    name: 'What The Mirror Shows Instead',
                    id: 'desire-mirror',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Dan definitely real — because they want him to be', effect: 'Desired answer, may not be true.' },
                        { roll: 2, text: 'Everyone survives — because they fear death', effect: 'Comfort illusion. What\'s the real danger?' },
                        { roll: 3, text: 'Mission succeeds — because failure terrifies', effect: 'False confidence. Real outcome unknown.' },
                        { roll: 4, text: 'Hjumpik loyal — because betrayal hurts', effect: 'Trust illusion. Is he really?' },
                        { roll: 5, text: 'The past undone — someone\'s regret shown fixed', effect: 'Personal desire interfering with group truth.' },
                        { roll: 6, text: 'Nothing wrong — because they need it to be okay', effect: 'Denial made manifest. Problems hidden.' }
                    ]
                }
            ],
            timerEnd: {
                title: 'DESIRE CORRUPTION',
                description: 'The mirror now shows what people want, not what is.',
                consequences: [
                    'All answers from ritual are suspect',
                    'Cannot trust any information received',
                    'Dan\'s question answered by group desire, not reality',
                    'Must find other way to verify truth later',
                    'Archie may develop fire affinity (character consequence)'
                ]
            }
        }
    };
}

// Render failure subpage
showFailureSubpage(failureId) {
    this.setActiveNav('nav-scenes');
    const failure = this.getFailureSubpages()[failureId];
    
    if (!failure) {
        console.error('Failure not found:', failureId);
        return;
    }
    
    // Initialize recovery tracking for this failure
    if (!this.activeFailure) {
        this.activeFailure = {
            id: failureId,
            roundsRemaining: failure.rounds,
            attemptsMade: [],
            resolved: false
        };
    }
    
    const content = `
        <div class="failure-subpage ${failure.severity.toLowerCase()}">
            <div class="failure-header">
                <button class="back-btn" onclick="gm.exitFailureSubpage()">← Back to Scene</button>
                <span class="severity-badge ${failure.severity.toLowerCase()}">${failure.severity}</span>
            </div>
            
            <div class="failure-title-section">
                <span class="failure-icon">${failure.icon}</span>
                <div>
                    <h1>${failure.title}</h1>
                    <p class="failure-subtitle">${failure.subtitle}</p>
                </div>
            </div>
            
            <div class="oracle-quote failure-quote">
                🧙‍♂️ "${failure.oracleQuote}"
            </div>
            
            <div class="failure-description">
                ${failure.description}
            </div>
            
            <div class="rounds-tracker">
                <div class="rounds-display">
                    <span class="rounds-label">Rounds Remaining:</span>
                    <span class="rounds-value ${this.activeFailure.roundsRemaining <= 1 ? 'critical' : ''}">${this.activeFailure.roundsRemaining}</span>
                </div>
                <button class="round-btn" onclick="gm.spendRound('${failureId}')">⏱️ Spend Round (No Action)</button>
            </div>
            
            <div class="recovery-options">
                <h3>🔧 Recovery Options</h3>
                ${failure.recoveryOptions.map((opt, i) => this.renderRecoveryOption(opt, i, failureId)).join('')}
            </div>
            
            ${failure.rollTables && failure.rollTables.length > 0 ? `
                <div class="failure-tables">
                    <h3>📊 Related Tables</h3>
                    ${failure.rollTables.map(t => this.renderIntegratedTable(t)).join('')}
                </div>
            ` : ''}
            
            <div class="timer-end-preview">
                <h3>⚠️ If Time Runs Out: ${failure.timerEnd.title}</h3>
                <p>${failure.timerEnd.description}</p>
                <ul>
                    ${failure.timerEnd.consequences.map(c => `<li>${c}</li>`).join('')}
                </ul>
                ${failure.timerEnd.rollTable ? `
                    <div class="timer-table">
                        ${this.renderIntegratedTable(failure.timerEnd.rollTable)}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    this.setContent(`⚠️ ${failure.title}`, content);
}

renderRecoveryOption(option, index, failureId) {
    const attempted = this.activeFailure?.attemptsMade?.includes(index);
    
    return `
        <div class="recovery-option ${option.extreme ? 'extreme' : ''} ${option.automatic ? 'automatic' : ''} ${attempted ? 'attempted' : ''}">
            <div class="recovery-header">
                <h4>${option.name}</h4>
                <span class="recovery-dc">${option.dc === 0 ? 'Auto' : `DC ${option.dc}`}</span>
            </div>
            <p class="recovery-who">👤 ${option.who}</p>
            <p class="recovery-desc">${option.description}</p>
            <p class="recovery-type">${option.type}</p>
            
            ${option.note ? `<p class="recovery-note">📝 ${option.note}</p>` : ''}
            ${option.warning ? `<p class="recovery-warning">⚠️ ${option.warning}</p>` : ''}
            ${option.damage ? `<p class="recovery-damage">💔 ${option.damage}</p>` : ''}
            ${option.disadvantage ? `<p class="recovery-disadvantage">⬇️ Rolled with disadvantage</p>` : ''}
            ${option.inverse ? `<p class="recovery-inverse">🔄 Must FAIL the save to succeed</p>` : ''}
            
            <div class="recovery-outcomes">
                <div class="outcome success">
                    <strong>✓ Success:</strong> ${option.successText}
                </div>
                <div class="outcome failure">
                    <strong>✗ Failure:</strong> ${option.failText}
                </div>
            </div>
            
            ${!option.automatic && !attempted ? `
                <div class="recovery-roll-area">
                    <button class="roll-btn recovery-roll" onclick="gm.attemptRecovery('${failureId}', ${index}, ${option.dc}, ${option.disadvantage || false}, ${option.inverse || false})">
                        🎲 Attempt Recovery
                    </button>
                    <div class="roll-result" id="recovery-${failureId}-${index}-result"></div>
                </div>
            ` : option.automatic ? `
                <div class="recovery-auto-area">
                    <button class="auto-btn" onclick="gm.autoRecovery('${failureId}', ${index})">
                        ✓ Choose This Option
                    </button>
                </div>
            ` : `
                <div class="already-attempted">Already attempted this option</div>
            `}
        </div>
    `;
}

attemptRecovery(failureId, optionIndex, dc, disadvantage, inverse) {
    const failure = this.getFailureSubpages()[failureId];
    const option = failure.recoveryOptions[optionIndex];
    
    // Roll
    let roll1 = Math.floor(Math.random() * 20) + 1;
    let roll2 = Math.floor(Math.random() * 20) + 1;
    let roll = disadvantage ? Math.min(roll1, roll2) : roll1;
    
    // For inverse checks, success means rolling BELOW DC
    let success;
    if (inverse) {
        success = roll < dc;
    } else {
        success = roll >= dc;
    }
    
    // Mark as attempted
    if (!this.activeFailure.attemptsMade) this.activeFailure.attemptsMade = [];
    this.activeFailure.attemptsMade.push(optionIndex);
    
    // Display result
    const resultDiv = document.getElementById(`recovery-${failureId}-${optionIndex}-result`);
    let resultText = disadvantage ? `${roll} (rolled ${roll1}, ${roll2})` : `${roll}`;
    
    if (inverse) {
        resultText += success ? ` — FAILED save (Success!)` : ` — Passed save (Failed to fail)`;
    } else {
        resultText += success ? ` — Success!` : ` — Failed`;
    }
    
    resultDiv.innerHTML = `<span class="${success ? 'success' : 'failure'}">${resultText}</span>`;
    resultDiv.classList.add('show');
    
    // Log it
    this.logEvent(`Recovery attempt: ${option.name} — ${success ? 'SUCCESS' : 'FAILED'}`);
    
    // Handle outcome
    if (success) {
        this.handleRecoverySuccess(failureId, option);
    } else {
        this.handleRecoveryFailure(failureId, option);
    }
    
    // Spend a round on failure
    if (!success && option.onFail === 'lose_round') {
        this.spendRound(failureId);
    }
}

autoRecovery(failureId, optionIndex) {
    const failure = this.getFailureSubpages()[failureId];
    const option = failure.recoveryOptions[optionIndex];
    
    // Mark as attempted
    if (!this.activeFailure.attemptsMade) this.activeFailure.attemptsMade = [];
    this.activeFailure.attemptsMade.push(optionIndex);
    
    // Log it
    this.logEvent(`Recovery chosen: ${option.name}`);
    
    // Handle as success
    this.handleRecoverySuccess(failureId, option);
}

handleRecoverySuccess(failureId, option) {
    this.showToast(`Recovery: ${option.name} — Success!`);
    
    // Check if this resolves the failure
    const resolvingActions = ['redirect_success', 'ice_recovery', 'shield_success', 'sacrifice', 
                              'new_traitor', 'oracle_split', 'chaos_opposition', 'dan_answers', 'forced_stay',
                              'squad_rallied', 'light_restored', 'fear_absorbed', 'continuity_held',
                              'question_reopens', 'oracle_overrules', 'two_dans', 'answer_accepted',
                              'oracle_continues', 'substitute_voice', 'interrupter_stopped', 'time_frozen', 'partial_cut',
                              'ice_stable', 'imperfect_accepted'];
    
    if (resolvingActions.includes(option.onSuccess)) {
        this.resolveFailure(failureId, option.onSuccess);
    }
    
    // Handle gaining rounds
    if (option.onSuccess === 'gain_round') {
        this.activeFailure.roundsRemaining++;
        this.showFailureSubpage(failureId);
    }
}

handleRecoveryFailure(failureId, option) {
    this.showToast(`Recovery: ${option.name} — Failed`, 'error');
    
    // Handle round loss
    if (['lose_round', 'fire_grows', 'shield_fail'].includes(option.onFail)) {
        const loss = option.onFail === 'shield_fail' ? 2 : 1;
        this.activeFailure.roundsRemaining -= loss;
        
        if (this.activeFailure.roundsRemaining <= 0) {
            this.failureTimerEnds(failureId);
        } else {
            this.showFailureSubpage(failureId);
        }
    }
    
    // Handle table rolls on failure
    if (option.rollTableOnFail) {
        // Show the table and prompt to roll
        this.showToast(`Roll on ${option.rollTableOnFail} table!`);
    }
    
    // Refresh the page to show attempted state
    this.showFailureSubpage(failureId);
}

spendRound(failureId) {
    this.activeFailure.roundsRemaining--;
    this.logEvent(`Round spent — ${this.activeFailure.roundsRemaining} remaining`);
    
    if (this.activeFailure.roundsRemaining <= 0) {
        this.failureTimerEnds(failureId);
    } else {
        this.showFailureSubpage(failureId);
    }
}

resolveFailure(failureId, resolution) {
    const failure = this.getFailureSubpages()[failureId];
    
    this.activeFailure.resolved = true;
    this.activeFailure = null;
    
    this.logEvent(`Failure resolved: ${failure.title} via ${resolution}`);
    this.showToast(`Crisis Resolved: ${failure.title}`);
    
    // Return to scene runner
    this.showSceneRunner();
}

failureTimerEnds(failureId) {
    const failure = this.getFailureSubpages()[failureId];
    
    this.logEvent(`FAILURE: ${failure.title} — Timer expired`);
    
    const content = `
        <div class="failure-end critical">
            <div class="failure-end-header">
                <span class="failure-end-icon">💀</span>
                <h1>${failure.timerEnd.title}</h1>
            </div>
            
            <p class="failure-end-desc">${failure.timerEnd.description}</p>
            
            <div class="failure-end-consequences">
                <h3>Consequences:</h3>
                <ul>
                    ${failure.timerEnd.consequences.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
            
            ${failure.timerEnd.rollTable ? `
                <div class="failure-end-table">
                    <h3>Roll for outcome:</h3>
                    ${this.renderIntegratedTable(failure.timerEnd.rollTable)}
                </div>
            ` : ''}
            
            <div class="failure-end-actions">
                <button class="primary-btn" onclick="gm.continueAfterFailure('${failureId}')">
                    Continue With Consequences
                </button>
                <button class="secondary-btn" onclick="gm.showSceneRunner()">
                    Return to Scene (GM Adjudicate)
                </button>
            </div>
        </div>
    `;
    
    this.setContent(`💀 ${failure.timerEnd.title}`, content);
    this.activeFailure = null;
}

continueAfterFailure(failureId) {
    const failure = this.getFailureSubpages()[failureId];
    
    // Apply consequences to state
    switch(failureId) {
        case 'archie_fire':
            this.failureStates.summoning_triggered = true;
            this.adjustIntegrity(-3);
            break;
        case 'hjumpik_flipped':
            this.failureStates.mirror_shattered = true;
            this.adjustIntegrity(-2);
            break;
        case 'squad_panic':
            this.failureStates.squad_panic = true;
            this.adjustIntegrity(-2);
            break;
        case 'dan_acted':
            this.failureStates.dan_acted = true;
            break;
        case 'oracle_interrupted':
            this.failureStates.oracle_interrupted = true;
            this.adjustIntegrity(-2);
            break;
    }
    
    this.showSceneRunner();
}

exitFailureSubpage() {
    // Confirm before exiting
    if (this.activeFailure && !this.activeFailure.resolved) {
        if (!confirm('Crisis not resolved! Are you sure you want to exit? (GM can adjudicate manually)')) {
            return;
        }
    }
    this.activeFailure = null;
    this.showSceneRunner();
}

// Add trigger buttons to scene checks that can cause failures
getFailureTriggers() {
    return {
        'archie_fire': {
            trigger: 'Archie fails Fire Resistance (WIS DC 18)',
            scene: 5,
            button: '🔥 Trigger Fire Catastrophe'
        },
        'hjumpik_flipped': {
            trigger: 'Hjumpik fails loyalty check or player choice',
            scene: 6,
            button: '🐸 Trigger Hjumpik Betrayal'
        },
        'squad_panic': {
            trigger: 'Squad fails stability check',
            scene: 6,
            button: '😱 Trigger Squad Panic'
        },
        'dan_acted': {
            trigger: 'Dan speaks, moves, or acts',
            scene: 6,
            button: '🦾 Trigger Dan Action'
        },
        'oracle_interrupted': {
            trigger: 'Oracle concentration broken',
            scene: 8,
            button: '🗣️ Trigger Oracle Interrupt'
        },
        'archie_ice_unstable': {
            trigger: 'Archie fails ice channeling',
            scene: 5,
            button: '❄️ Trigger Ice Instability'
        }
    };
}
    renderStatusPanel() {
        const panel = document.querySelector('.status-panel');
        panel.innerHTML = `
            <h2>📊 RITUAL STATUS</h2>
            
            <div class="integrity-display">
                <div class="integrity-label">Circle Integrity</div>
                <div class="integrity-value ${this.getIntegrityClass()}" id="integrity-value">
                    ${this.state.circleIntegrity}
                </div>
                <div class="integrity-controls">
                    <button class="minus" onclick="gm.adjustIntegrity(-1)">−1</button>
                    <button class="plus" onclick="gm.adjustIntegrity(1)">+1</button>
                </div>
            </div>
            
            <div class="scene-tracker">
                <h3>Scene Progress</h3>
                ${this.renderSceneTracker()}
            </div>
            
            <div class="safeguards">
                <h3>Safeguards</h3>
                ${this.renderSafeguards()}
            </div>
            
            <div class="flags">
                <h3>Flags</h3>
                ${this.renderFlags()}
            </div>
        `;
    }

    renderSceneTracker() {
        const scenes = [
            { num: 0, name: 'Corridor Approach' },
            { num: 1, name: 'Dan Check' },
            { num: 2, name: 'Position Taking' },
            { num: 3, name: 'Archie Channels' },
            { num: 4, name: 'Oracle Speaks' },
            { num: 5, name: 'Legion Moves' },
            { num: 6, name: 'Mirror Exit' }
        ];
        
        return scenes.map(s => `
            <div class="scene-step ${s.num === this.state.currentScene ? 'active' : ''} ${s.num < this.state.currentScene ? 'completed' : ''}"
                 onclick="gm.setScene(${s.num})">
                <span class="scene-num">${s.num}</span>
                <span class="scene-name">${s.name}</span>
            </div>
        `).join('');
    }

    renderSafeguards() {
        const safeguards = [
            { key: 'oracleWard', name: "Oracle's Ward" },
            { key: 'greenTPresent', name: 'Green T Present' },
            { key: 'mirrorSeal', name: 'Mirror Seal' },
            { key: 'bloodPrice', name: 'Blood Price Unpaid' }
        ];
        
        return safeguards.map(s => `
            <div class="safeguard-item ${this.state.safeguards[s.key] ? 'active' : 'burned'}"
                 onclick="gm.toggleSafeguard('${s.key}')">
                <span>${this.state.safeguards[s.key] ? '✓' : '✗'}</span>
                <span>${s.name}</span>
            </div>
        `).join('');
    }

    renderFlags() {
        const flags = [
            { key: 'danImpostor', name: 'Dan is Impostor' },
            { key: 'archieFireRisk', name: 'Archie Fire Risk' },
            { key: 'legionAlert', name: 'Legion Alerted' }
        ];
        
        return flags.map(f => `
            <div class="flag-item">
                <span>${f.name}</span>
                <div class="flag-toggle ${this.state.flags[f.key] ? 'active' : ''}"
                     onclick="gm.toggleFlag('${f.key}')"></div>
            </div>
        `).join('');
    }

    renderMainContent() {
        const main = document.querySelector('.main-content');
        main.innerHTML = `
            <div class="content-header">
                <h1 id="content-title">Dashboard</h1>
            </div>
            <div class="content-body" id="content-body"></div>
        `;
    }

    setContent(title, html) {
        document.getElementById('content-title').textContent = title;
        document.getElementById('content-body').innerHTML = html;
    }

    setActiveNav(id) {
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById(id)?.classList.add('active');
    }

    getIntegrityClass() {
        if (this.state.circleIntegrity >= 5) return 'good';
        if (this.state.circleIntegrity >= 3) return 'okay';
        return 'critical';
    }

    adjustIntegrity(amount) {
        this.state.circleIntegrity = Math.max(0, Math.min(10, this.state.circleIntegrity + amount));
        this.renderStatusPanel();
    }

    setScene(num) {
        this.state.currentScene = num;
        this.renderStatusPanel();
    }

    toggleSafeguard(key) {
        this.state.safeguards[key] = !this.state.safeguards[key];
        this.renderStatusPanel();
    }

    toggleFlag(key) {
        this.state.flags[key] = !this.state.flags[key];
        this.renderStatusPanel();
    }

    // === DASHBOARD ===
    showDashboard() {
        this.setActiveNav('nav-dashboard');
        const content = `
            <div class="dashboard">
                <div class="dashboard-grid">
                    <div class="dash-card overview">
                        <h3>🎭 Ritual Overview</h3>
                        <p>This is a <strong>synchronization rite</strong> that forces three realities to overlap:</p>
                        <ul>
                            <li>The physical chamber</li>
                            <li>The mirror-space</li>
                            <li>The Spore-origin echo</li>
                        </ul>
                        <p class="warning">The mirror is NOT a doorway — it's a pressure membrane.</p>
                    </div>
                    
                    <div class="dash-card critical-rules">
                        <h3>⚠️ Critical Rules</h3>
                        <ul>
                            <li>🔥 <strong>NO FIRE</strong> — Someone dies if Archie casts fire</li>
                            <li>🚫 <strong>NO INTERVENTION</strong> — Don't break formation to help</li>
                            <li>⏳ <strong>NO EARLY EXIT</strong> — Wait for mirrors to go dull</li>
                            <li>🪞 <strong>NO CLEAR REFLECTIONS</strong> — If you see yourself clearly, ritual fails</li>
                        </ul>
                    </div>
                    
                    <div class="dash-card positions">
                        <h3>📍 Required Positions</h3>
                        <div class="position-map">
                            <div class="pos north">❄️ ARCHIE<br><small>North/Ice</small></div>
                            <div class="pos center">🧙‍♂️ ORACLE<br><small>Center/Voice</small></div>
                            <div class="pos south">🐢 BOWSER<br><small>South/Mass</small></div>
                            <div class="pos west">🟣 WALUIGI<br><small>West/Chaos</small></div>
                            <div class="pos east">⚔️ MARKOP<br><small>East/Guard</small></div>
                        </div>
                    </div>
                    
                    <div class="dash-card quick-checks">
                        <h3>🎲 Key DCs</h3>
                        <table>
                            <tr><td>Ice Channeling</td><td><strong>DC 14</strong></td></tr>
                            <tr><td>Fire Resistance</td><td><strong>DC 18</strong></td></tr>
                            <tr><td>Impostor Detection</td><td><strong>DC 18</strong></td></tr>
                            <tr><td>Grounding</td><td><strong>DC 12</strong></td></tr>
                            <tr><td>Mirror Rejection</td><td><strong>DC 15</strong></td></tr>
                            <tr><td>Stillness (Waluigi)</td><td><strong>DC 12+</strong></td></tr>
                        </table>
                    </div>
                </div>
                
                <div class="dash-card scene-summary">
                    <h3>🎬 Scene Flow Summary</h3>
                    <div class="scene-flow-horizontal">
                        <div class="flow-step">
                            <div class="step-num">0</div>
                            <div class="step-name">Corridor</div>
                            <div class="step-check">WIS 12</div>
                        </div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-step">
                            <div class="step-num">1</div>
                            <div class="step-name">Dan Check</div>
                            <div class="step-check">Insight 18</div>
                        </div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-step">
                            <div class="step-num">2</div>
                            <div class="step-name">Positions</div>
                            <div class="step-check">Insight 12</div>
                        </div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-step">
                            <div class="step-num">3</div>
                            <div class="step-name">Ice Channel</div>
                            <div class="step-check">Arcana 14</div>
                        </div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-step critical">
                            <div class="step-num">4</div>
                            <div class="step-name">Oracle Speaks</div>
                            <div class="step-check">NO RETURN</div>
                        </div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-step warning">
                            <div class="step-num">5</div>
                            <div class="step-name">Legion Moves</div>
                            <div class="step-check">Markop Act</div>
                        </div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-step">
                            <div class="step-num">6</div>
                            <div class="step-name">Exit</div>
                            <div class="step-check">WIS 10</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.setContent('Dashboard', content);
    }

    // === SCENE RUNNER ===
    showSceneRunner() {
        this.setActiveNav('nav-scenes');
        this.renderCurrentScene();
    }

    // Replace renderCurrentScene with this integrated version
renderCurrentScene() {
    const scenes = this.getSceneData();
    const scene = scenes[this.state.currentScene];
    
    const content = `
        <div class="scene-runner">
            <div class="scene-nav">
                <button onclick="gm.prevScene()" ${this.state.currentScene === 0 ? 'disabled' : ''}>← Previous</button>
                <span>Scene ${this.state.currentScene} of ${scenes.length - 1}</span>
                <button onclick="gm.nextScene()" ${this.state.currentScene === scenes.length - 1 ? 'disabled' : ''}>Next →</button>
            </div>
            
            <div class="scene-display">
                <div class="scene-header">
                    <span class="scene-number">${scene.icon}</span>
                    <div>
                        <h2>${scene.title}</h2>
                        <span class="scene-subtitle">${scene.subtitle}</span>
                    </div>
                </div>
                
                <div class="oracle-quote">
                    🧙‍♂️ "${scene.oracleQuote}"
                </div>
                
                <div class="scene-description">
                    ${scene.description}
                </div>
                
                ${scene.mirrorEffects ? this.renderMirrorEffects(scene.mirrorEffects) : ''}
                
                ${scene.positions ? this.renderPositionMap(scene.positions) : ''}
                
                ${scene.checks && scene.checks.length > 0 ? `
                    <div class="scene-checks">
                        <h3>🎲 Required Checks</h3>
                        ${scene.checks.map((c, i) => this.renderIntegratedCheck(c, i)).join('')}
                    </div>
                ` : ''}
                
                ${scene.rollTables && scene.rollTables.length > 0 ? `
                    <div class="scene-tables">
                        <h3>📊 Roll Tables</h3>
                        ${scene.rollTables.map(t => this.renderIntegratedTable(t)).join('')}
                    </div>
                ` : ''}
                
                ${scene.special ? `
                    <div class="scene-special">
                        ${scene.special}
                    </div>
                ` : ''}
            </div>
            
            <div class="scene-tracker-mini">
                ${scenes.map((s, i) => `
                    <div class="tracker-dot ${i === this.state.currentScene ? 'active' : ''} ${i < this.state.currentScene ? 'complete' : ''}" 
                         onclick="gm.goToScene(${i})" title="${s.title}">
                        ${s.icon}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    this.setContent(`Scene ${this.state.currentScene}: ${scene.title}`, content);
}

renderMirrorEffects(effects) {
    return `
        <div class="mirror-effects-box">
            <h4>🪞 Mirror Shows:</h4>
            <div class="effects-grid">
                ${effects.map(e => `
                    <div class="effect-item">
                        <strong>${e.who}:</strong> ${e.shows}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

renderPositionMap(positions) {
    return `
        <div class="position-map-container">
            <h4>📍 Positions:</h4>
            <div class="position-circle">
                ${positions.map(p => `
                    <div class="position-marker ${p.position.toLowerCase()}" title="${p.who}: ${p.role}">
                        <span class="pos-label">${p.position}</span>
                        <span class="pos-who">${p.who}</span>
                    </div>
                `).join('')}
            </div>
            <div class="position-list">
                ${positions.map(p => `
                    <div class="position-entry">
                        <span class="pos-dir">${p.position}</span>
                        <span class="pos-name">${p.who}</span>
                        <span class="pos-role">${p.role}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

renderIntegratedCheck(check, index) {
    const checkId = `check-${this.state.currentScene}-${index}`;
    return `
        <div class="check-card integrated ${check.critical ? 'critical' : ''} ${check.conditional ? 'conditional' : ''}" id="${checkId}">
            <div class="check-header">
                <span class="check-name">${check.name}</span>
                <span class="check-dc">${check.dc === 0 ? 'Auto' : `DC ${check.dc}${check.altDc ? '/' + check.altDc : ''}`}</span>
            </div>
            <div class="check-meta">
                <span class="check-type">${check.type}</span>
                <span class="check-who">👤 ${check.who}</span>
            </div>
            <div class="check-description">${check.description}</div>
            ${check.note ? `<div class="check-note">📝 ${check.note}</div>` : ''}
            ${check.advantage ? `<div class="check-advantage">⬆️ ${check.advantageNote}</div>` : ''}
            
            <div class="check-outcomes">
                <div class="outcome success">
                    <h4>✓ Success</h4>
                    <p>${check.success}</p>
                </div>
                <div class="outcome failure">
                    <h4>✗ Failure</h4>
                    <p>${check.failure}</p>
                </div>
            </div>
            
            ${check.rollButton ? `
                <div class="check-roll-area">
                    <button class="roll-btn" onclick="gm.rollCheck(${check.dc}, '${check.name}', '${checkId}')">
                        🎲 Roll d20
                    </button>
                    <div class="roll-result" id="${checkId}-result"></div>
                </div>
            ` : ''}
        </div>
    `;
}

renderIntegratedTable(table) {
    return `
        <div class="table-card" id="table-${table.id}">
            <div class="table-header">
                <span class="table-name">${table.name}</span>
                <span class="table-die">d${table.die}</span>
            </div>
            ${table.note ? `<div class="table-note">${table.note}</div>` : ''}
            
            <div class="table-content">
                <table class="roll-table">
                    ${table.results.map(r => `
                        <tr>
                            <td class="roll-num">${r.roll}</td>
                            <td class="roll-text">${r.text}</td>
                            <td class="roll-effect">${r.effect}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
            
            ${table.die > 0 ? `
                <div class="table-roll-area">
                    <button class="roll-btn" onclick="gm.rollOnTable('${table.id}', ${table.die})">
                        🎲 Roll d${table.die}
                    </button>
                    <div class="table-result" id="${table.id}-result"></div>
                </div>
            ` : ''}
        </div>
    `;
}

rollCheck(dc, name, checkId) {
    const roll = Math.floor(Math.random() * 20) + 1;
    const success = roll >= dc;
    const critical = roll === 20;
    const fumble = roll === 1;
    
    let resultClass = success ? 'success' : 'failure';
    if (critical) resultClass = 'critical-success';
    if (fumble) resultClass = 'critical-failure';
    
    let resultText = `${roll}`;
    if (critical) resultText += ' — CRITICAL SUCCESS!';
    else if (fumble) resultText += ' — CRITICAL FAILURE!';
    else if (success) resultText += ` — Success! (DC ${dc})`;
    else resultText += ` — Failed (DC ${dc})`;
    
    const resultDiv = document.getElementById(`${checkId}-result`);
    resultDiv.innerHTML = `<span class="${resultClass}">${resultText}</span>`;
    resultDiv.classList.add('show');
    
    // Log the roll
    this.logEvent(`${name}: ${resultText}`);
    
    // Update integrity based on result if it's a critical check
    if (document.getElementById(checkId).classList.contains('critical')) {
        if (fumble) {
            this.adjustIntegrity(-1);
            this.showToast('Critical check failed! -1 Integrity');
        }
    }
}

rollOnTable(tableId, die) {
    const roll = Math.floor(Math.random() * die) + 1;
    
    // Find the table in current scene
    const scenes = this.getSceneData();
    const scene = scenes[this.state.currentScene];
    const table = scene.rollTables.find(t => t.id === tableId);
    
    if (!table) return;
    
    const result = table.results.find(r => r.roll === roll) || table.results[roll - 1];
    
    const resultDiv = document.getElementById(`${tableId}-result`);
    resultDiv.innerHTML = `
        <div class="rolled-result">
            <span class="roll-number">[${roll}]</span>
            <span class="roll-text">${result.text}</span>
            <span class="roll-effect">${result.effect}</span>
        </div>
    `;
    resultDiv.classList.add('show');
    
    // Log it
    this.logEvent(`Table ${table.name}: [${roll}] ${result.text}`);
}

goToScene(index) {
    this.state.currentScene = index;
    this.renderStatusPanel();
    this.renderCurrentScene();
}
// Update getSceneData to reflect the actual participants

// Replace the getSceneData method with this expanded version
getSceneData() {
    return [
        // SCENE 0: PRE-RITUAL BRIEFING
        {
            icon: '📋',
            title: 'PRE-RITUAL BRIEFING',
            subtitle: 'Final Check — 12 Present, Ring Complete',
            oracleQuote: 'Twelve is a closed ring. Clocks, months, constellations. Things that complete a cycle and then stop.',
            description: `
                <p>The Oracle addresses the assembled group. Twelve stand in the corridor outside the ritual chamber.</p>
                <div class="participant-count">
                    <span class="count-big">12</span>
                    <span class="count-label">EVEN — Balance enforced. Clean cut possible.</span>
                </div>
            `,
            checks: [],
            rollTables: [],
            special: `
                <div class="briefing-grid">
                    <div class="briefing-section">
                        <h4>⚠️ Critical Rules:</h4>
                        <ul>
                            <li>No speaking unless addressed</li>
                            <li>No touching the mirror</li>
                            <li>No heroics, no flourishes</li>
                            <li>Composure over cleverness</li>
                        </ul>
                    </div>
                    <div class="briefing-section">
                        <h4>🪞 The Mirror Will:</h4>
                        <ul>
                            <li>Harmonize what belongs</li>
                            <li>Reject what doesn't</li>
                            <li>Answer the question of Dan</li>
                            <li>Cut what cannot belong</li>
                        </ul>
                    </div>
                </div>
            `,
            participants: this.getAllParticipants()
        },
        
        // SCENE 1: CORRIDOR APPROACH
        {
            icon: '⏳',
            title: 'APPROACH TO THE SUMMONING ROOM',
            subtitle: 'Corridor Passage',
            oracleQuote: 'No pauses once we enter. Hesitation desynchronizes intent.',
            description: `
                <p>The corridor narrows. The Manor quiets in that way that means it's listening.</p>
                <p>Twelve figures move in formation. The mirrors along the walls show... wrong things.</p>
            `,
            checks: [
                {
                    name: 'Corridor Passage',
                    dc: 12,
                    altDc: 14,
                    type: 'WIS Save DC 12 OR Insight DC 14',
                    who: 'All Participants',
                    description: 'Pass through without engaging mirrors',
                    success: 'Move through cleanly. No interaction.',
                    failure: 'Mirror attempts correction. Secondary save required.',
                    rollButton: true
                },
                {
                    name: 'Mirror Resistance (if failed)',
                    dc: 15,
                    type: 'WIS Save DC 15',
                    who: 'Failed individuals',
                    description: 'Resist mirror correction attempt',
                    success: 'Shake it off. Minor unease only.',
                    failure: 'Roll on Mirror Corridor Effect table.',
                    rollButton: true,
                    conditional: true
                }
            ],
            rollTables: [
                {
                    name: 'Mirror Corridor Effect',
                    id: 'mirror-corridor',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Shown older — gains temporary wisdom, loses confidence', effect: '-2 to next CHA check, +2 to next WIS check' },
                        { roll: 2, text: 'Shown younger — nostalgia surge, briefly unfocused', effect: 'Disadvantage on next concentration check' },
                        { roll: 3, text: 'Shown scarless — tempted by "better" self', effect: 'WIS DC 13 or act hesitant in Scene 3' },
                        { roll: 4, text: 'Shown delayed — reflection moves half-beat late', effect: 'Unsettling but no mechanical effect' },
                        { roll: 5, text: 'Shown doubled — two reflections briefly', effect: 'If Dan, increase suspicion. Others, just creepy.' },
                        { roll: 6, text: 'Shown correctly — mirror approves', effect: '+1 to next ritual-related check' }
                    ]
                }
            ],
            mirrorEffects: [
                { who: 'Archie', shows: 'Fire flickering behind his eyes — warning of potential' },
                { who: 'Dan', shows: 'Two overlapping figures, slightly out of phase' },
                { who: 'Waluigi', shows: 'Grinning when Waluigi isn\'t — chaos recognized' },
                { who: 'Rodger', shows: 'Squad merged into single silhouette behind him' },
                { who: 'Hjumpik', shows: 'Facing the wrong direction — divided loyalty visible' }
            ]
        },

        // SCENE 2: THRESHOLD CHECK
        {
            icon: '🚪',
            title: 'THE THRESHOLD',
            subtitle: 'Last Moment Before Entry',
            oracleQuote: 'Once we cross, we are inside the question. There is no stepping back to ask "are we ready." Ready is decided by crossing.',
            description: `
                <p>The door to the ritual chamber stands open. Beyond it, the prepared circle waits.</p>
                <p>The Oracle pauses at the threshold. This is the last moment for doubt.</p>
            `,
            checks: [
                {
                    name: 'Composure Check',
                    dc: 10,
                    type: 'WIS Save DC 10',
                    who: 'Anyone nervous (GM discretion)',
                    description: 'Maintain composure at threshold',
                    success: 'Cross with confidence.',
                    failure: 'Hesitation visible. -1 to first ritual check.',
                    rollButton: true
                },
                {
                    name: 'Sense Wrongness',
                    dc: 16,
                    type: 'Insight DC 16',
                    who: 'Anyone checking Dan',
                    description: 'Final pre-entry read on Dan',
                    success: 'Sense whether something is off (GM info).',
                    failure: 'Cannot tell. Must let ritual decide.',
                    rollButton: true
                }
            ],
            rollTables: [],
            special: `
                <div class="threshold-warning">
                    <h4>⚠️ Point of Commitment:</h4>
                    <p>After crossing, the ritual's logic applies. The mirror will answer questions — whether you want it to or not.</p>
                </div>
            `
        },

        // SCENE 3: TAKING POSITIONS
        {
            icon: '🔵',
            title: 'ENTERING & TAKING POSITIONS',
            subtitle: 'The Ring Forms',
            oracleQuote: 'Twelve points. Twelve functions. Find where you belong — not where you want to stand.',
            description: `
                <p>The chamber is circular. Sigils cover the floor in concentric rings. A large mirror dominates the far wall — currently dark, waiting.</p>
                <p>Each participant must find their position. The ritual knows if you're wrong.</p>
            `,
            checks: [
                {
                    name: 'Position Intuition',
                    dc: 12,
                    type: 'Insight DC 12',
                    who: 'Each participant',
                    description: 'Sense correct position naturally',
                    success: 'Move to correct node instinctively.',
                    failure: 'Must be directed by Oracle. Slight delay.',
                    rollButton: true
                },
                {
                    name: 'Squad Cohesion',
                    dc: 10,
                    type: 'Group check (Rodger leads)',
                    who: 'Rodger, Perot, Smokin\' J, Salam',
                    description: 'Move as unified sub-group',
                    success: 'Squad positions as one smooth motion.',
                    failure: 'Slight disorder. -1 to Squad Stability later.',
                    rollButton: true,
                    advantage: true,
                    advantageNote: 'Rodger leading gives advantage'
                }
            ],
            rollTables: [
                {
                    name: 'Wrong Position Effect',
                    id: 'wrong-position',
                    die: 4,
                    results: [
                        { roll: 1, text: 'Opposite polarity — ritual pulls harder', effect: 'DC +2 on that person\'s checks' },
                        { roll: 2, text: 'Adjacent correct — close enough', effect: 'No penalty, but Oracle must adjust' },
                        { roll: 3, text: 'Symbolic conflict — two people swap instincts', effect: 'Both must re-roll positioning' },
                        { roll: 4, text: 'Perfect accident — found better position', effect: '+1 to that person\'s first ritual check' }
                    ]
                }
            ],
            positions: [
                { position: 'CENTER', who: 'Oracle', role: 'Conductor — maintains rhythm' },
                { position: 'NORTH', who: 'Archie', role: 'Discipline — channels without escalation' },
                { position: 'SOUTH', who: 'Markop', role: 'Physical Anchor — grounds in flesh' },
                { position: 'EAST', who: 'Dan', role: 'The Question — stands in ambiguity' },
                { position: 'WEST', who: 'Hjumpik', role: 'Broker — anchors post-ritual consequence' },
                { position: 'NE', who: 'Toad Lee', role: 'Voice of Now — consensus reality' },
                { position: 'NW', who: 'Toadburt', role: 'Record — makes events real' },
                { position: 'SE', who: 'Eager', role: 'Tether — emotional links' },
                { position: 'SW', who: 'Rodger', role: 'Stabilizer — fear made disciplined' },
                { position: 'S-SW', who: 'Perot', role: 'Continuity — before and after' },
                { position: 'S-SE', who: 'Smokin\' J', role: 'Shadow Anchor — absorbs fear' },
                { position: 'S-Center', who: 'Salam', role: 'Forward Motion — biases toward progress' },
                { position: 'OUTER', who: 'Waluigi', role: 'Wild Vector — pressure valve' }
            ]
        },

        // SCENE 4: CIRCLE ACTIVATES
        {
            icon: '⭕',
            title: 'THE CIRCLE ACTIVATES',
            subtitle: 'Imperfect By Design',
            oracleQuote: 'The circle is not redrawn perfectly. A perfect circle seals. This ritual requires leakage.',
            description: `
                <p>The Oracle begins lighting candles. Not simultaneously — in sequence. Unity would seal; alignment cuts.</p>
                <p>The chalk lines begin to glow. The mirror surface ripples, though nothing touches it.</p>
            `,
            checks: [
                {
                    name: 'Maintain Stillness',
                    dc: 11,
                    type: 'WIS Save DC 11',
                    who: 'All participants',
                    description: 'Hold position as power builds',
                    success: 'Remain perfectly still.',
                    failure: 'Slight movement. Mirror notices.',
                    rollButton: true
                },
                {
                    name: 'Rodger Holds the Line',
                    dc: 12,
                    type: 'WIS Save DC 12',
                    who: 'Rodger',
                    description: 'Prevent panic from propagating',
                    success: 'Squad remains stable. Inertia holds.',
                    failure: 'Slight ripple of unease. -1 to squad checks.',
                    rollButton: true
                },
                {
                    name: 'Waluigi Contains Chaos',
                    dc: 13,
                    type: 'CHA Save DC 13',
                    who: 'Waluigi',
                    description: 'Be chaotic but directional — don\'t shatter',
                    success: 'Pressure valve functioning.',
                    failure: 'Roll on Waluigi Weirdness table.',
                    rollButton: true
                }
            ],
            rollTables: [
                {
                    name: 'Waluigi Weirdness',
                    id: 'waluigi-weird',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Reflection winks independently', effect: 'Unsettling. Others WIS DC 10 or distracted.' },
                        { roll: 2, text: 'Briefly phases translucent', effect: 'Visible to mirror-things. They notice him.' },
                        { roll: 3, text: '"WAH" echoes without him speaking', effect: 'Comic relief or horror depending on tone.' },
                        { roll: 4, text: 'Position shifts 3 inches without moving', effect: 'Still in circle. Barely.' },
                        { roll: 5, text: 'Shadow does something different', effect: 'Shadow participates in ritual independently.' },
                        { roll: 6, text: 'Nothing visible, but he KNOWS something', effect: 'Waluigi gains cryptic insight. Player decides when to use.' }
                    ]
                },
                {
                    name: 'Movement Noticed',
                    id: 'movement-noticed',
                    die: 4,
                    results: [
                        { roll: 1, text: 'Mirror focuses on mover', effect: 'That person\'s reflection leads slightly' },
                        { roll: 2, text: 'Candle nearest them flickers', effect: 'Aesthetic. Oracle adjusts.' },
                        { roll: 3, text: 'Sigil under feet pulses', effect: 'Warmth through shoes. Reminder to be still.' },
                        { roll: 4, text: 'Nothing visible', effect: 'But the ritual remembers.' }
                    ]
                }
            ],
            special: `
                <div class="activation-sequence">
                    <h4>🕯️ Candle Sequence (Oracle describes):</h4>
                    <ol>
                        <li>North candle (Archie's direction) — ice blue flame</li>
                        <li>South candle (Markop's direction) — deep red flame</li>
                        <li>East candle (Dan's direction) — uncertain color, shifts</li>
                        <li>West candle (Hjumpik's direction) — split flame, two wicks</li>
                        <li>Center candle (Oracle) — pure white</li>
                    </ol>
                </div>
            `
        },

        // SCENE 5: ARCHIE CHANNELS
        {
            icon: '❄️',
            title: 'ARCHIE CHANNELS',
            subtitle: 'Ice Over Fire — Constraint Over Power',
            oracleQuote: 'Cold does not conquer. It preserves. You are not freezing time — you are asking it to wait.',
            description: `
                <p>Archie exhales. Frost creeps outward from his position — slow, controlled, deliberate.</p>
                <p>The mirror surface stills. No more ripples. It's listening now.</p>
                <p class="critical">🔥 FIRE IS ABSOLUTELY FORBIDDEN FROM THIS POINT</p>
            `,
            checks: [
                {
                    name: 'Ice Channeling',
                    dc: 14,
                    altDc: 15,
                    type: 'Arcana DC 14 OR CON Save DC 15',
                    who: 'Archie',
                    description: 'Channel ice. Constraint, not output. No flourishes.',
                    success: 'Mirror reflects truth. Time viscosity increases.',
                    failure: 'Ice flickers. Roll on Ice Instability table.',
                    rollButton: true,
                    critical: true
                },
                {
                    name: 'Emotional Stability',
                    dc: 14,
                    type: 'WIS Save DC 14',
                    who: 'Archie',
                    description: 'Maintain emotional neutrality throughout',
                    success: 'Ice stays pure blue-white. Clean channel.',
                    failure: 'Ice flickers orange. Mirror begins showing desires.',
                    rollButton: true
                },
                {
                    name: 'Discipline Maintenance (per round)',
                    dc: 12,
                    type: 'CON Save DC 12 (increases +1 per round)',
                    who: 'Archie',
                    description: 'Sustain channeling without escalation',
                    success: 'Channel holds steady.',
                    failure: 'Power fluctuates. -1 Ritual Stability.',
                    rollButton: true,
                    repeating: true
                }
            ],
            rollTables: [
                {
                    name: 'Ice Instability',
                    id: 'ice-instability',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Frost spreads too fast — reaches mirror early', effect: 'Mirror activates before Oracle ready. Rush Scene 6.' },
                        { roll: 2, text: 'Ice cracks audibly — loss of smooth control', effect: 'All participants WIS DC 10 or flinch.' },
                        { roll: 3, text: 'Temperature differential — warm spot forms', effect: 'Something notices the gap.' },
                        { roll: 4, text: 'Archie sees Fireball in reflection', effect: 'Immediate WIS DC 16 or instinct pulls toward fire.' },
                        { roll: 5, text: 'Ice forms words briefly — cryptic message', effect: 'GM provides cryptic hint or warning.' },
                        { roll: 6, text: 'Perfect imperfection — flaw becomes feature', effect: 'No penalty. Ice stabilizes around the crack.' }
                    ]
                },
                {
                    name: 'Fire Catastrophe (if Archie fails WIS 18)',
                    id: 'fire-catastrophe',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Markop takes the hit — nearest physical anchor', effect: 'Severe burns. CON Save DC 15 or unconscious.' },
                        { roll: 2, text: 'Rodger\'s squad scattered — stabilizers disrupted', effect: 'Squad role disabled. Ritual destabilizes.' },
                        { roll: 3, text: 'Eager absorbs — tether stretches to breaking', effect: 'Eager unconscious. Emotional links severed.' },
                        { roll: 4, text: 'Toadburt singed — record damaged', effect: 'Memory of ritual becomes fragmentary.' },
                        { roll: 5, text: 'Oracle redirects — but at cost', effect: 'Oracle takes 3d6 damage. Ritual continues.' },
                        { roll: 6, text: 'Mirror absorbs — ritual becomes SUMMONING', effect: 'Cut inverts. Something comes through.' }
                    ]
                }
            ],
            special: `
                <div class="fire-warning">
                    <h4>🔥 IF ARCHIE CASTS FIRE:</h4>
                    <p>Immediate WIS Save DC 18 to abort the cast.</p>
                    <p><strong>Failure:</strong> Roll on Fire Catastrophe table.</p>
                    <p><strong>Regardless:</strong> Mirror now reflects desire, not truth. Dan's question may be answered WRONG.</p>
                </div>
            `
        },

        // SCENE 6: THE ORACLE SPEAKS
        {
            icon: '🗣️',
            title: 'THE ORACLE SPEAKS',
            subtitle: 'The True-Name — POINT OF NO RETURN',
            oracleQuote: 'Raventree was never cursed. It remembered.',
            description: `
                <p>The Oracle's voice changes. Not louder. Older. The words are not in any language the participants know, yet they understand.</p>
                <p>The mirror stops being a surface. It becomes a membrane.</p>
                <p class="critical">⚠️ POINT OF NO RETURN — Cannot abort after this moment</p>
            `,
            checks: [
                {
                    name: 'Dan Remains Passive',
                    dc: 0,
                    type: 'Roleplay — Player choice',
                    who: 'Dan',
                    description: 'Dan must not speak, act, or assert agency',
                    success: 'Mirror evaluates freely. Truth possible.',
                    failure: 'Mirror assumes coherence. May accept false singularity.',
                    rollButton: false,
                    critical: true,
                    note: 'This is player choice, not a roll. Dan\'s player decides.'
                },
                {
                    name: 'Squad Stability',
                    dc: 13,
                    type: 'Group WIS Save DC 13',
                    who: 'Rodger\'s Squad',
                    description: 'Do not panic as reality warps',
                    success: 'Squad holds. Mundane reality anchored.',
                    failure: 'Ripple of fear. Roll on Squad Panic table.',
                    rollButton: true
                },
                {
                    name: 'Hjumpik Holds Position',
                    dc: 14,
                    type: 'WIS Save DC 14',
                    who: 'Hjumpik',
                    description: 'Resist urge to act on divided loyalty',
                    success: 'Holds. Ritual gains edge definition.',
                    failure: 'Roll on Hjumpik Timing table.',
                    rollButton: true,
                    critical: true
                },
                {
                    name: 'Toadburt Records',
                    dc: 11,
                    type: 'INT Save DC 11',
                    who: 'Toadburt',
                    description: 'Stay conscious and focused through reality warp',
                    success: 'Memory intact. Timeline will persist.',
                    failure: 'Fragments. Parts of ritual may be misremembered.',
                    rollButton: true
                }
            ],
            rollTables: [
                {
                    name: 'Squad Panic',
                    id: 'squad-panic',
                    die: 4,
                    results: [
                        { roll: 1, text: 'Salam\'s torch flickers — forward motion stalls', effect: 'Ritual progress slows. Add 1 round.' },
                        { roll: 2, text: 'Smokin\' J freezes — shadow anchor fails', effect: 'Fear reflects instead of being absorbed.' },
                        { roll: 3, text: 'Perot breaks continuity — gap in sequence', effect: 'Something might skip into that gap.' },
                        { roll: 4, text: 'Rodger steadies them — recovers', effect: 'No lasting effect. Close call.' }
                    ]
                },
                {
                    name: 'Hjumpik Timing',
                    id: 'hjumpik-timing',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Moves too early — edges collapse', effect: 'CRITICAL: Mirror cannot define separation cleanly.' },
                        { roll: 2, text: 'Speaks out of turn — draws attention', effect: 'Mirror focuses on Hjumpik instead of Dan.' },
                        { roll: 3, text: 'Subtle shift — noticed only by Oracle', effect: 'Oracle must compensate. +2 DC on next Oracle check.' },
                        { roll: 4, text: 'Internal conflict visible — face betrays doubt', effect: 'Others may react. Social tension.' },
                        { roll: 5, text: 'Holds but barely — sweating, trembling', effect: 'Aesthetic tension only.' },
                        { roll: 6, text: 'Perfect stillness — loyalty question answered', effect: 'Hjumpik has chosen. For now.' }
                    ]
                }
            ],
            special: `
                <div class="dan-box">
                    <h4>🪞 DAN'S ROLE NOW:</h4>
                    <ul>
                        <li>Stand in the circle</li>
                        <li>Do not speak unless addressed</li>
                        <li>Do not touch the mirror</li>
                        <li>Let reality answer the question</li>
                    </ul>
                    <p class="verdict">If Dan is Dan, the mirror will harmonize him.<br>If Dan is not Dan, the mirror will reject continuity.</p>
                </div>
            `
        },

        // SCENE 7: THE MIRROR RESPONDS
        {
            icon: '🪞',
            title: 'THE MIRROR RESPONDS',
            subtitle: 'Truth Reflected',
            oracleQuote: 'The mirror does not lie. It cannot. That is not the same as saying it is kind.',
            description: `
                <p>The mirror surface goes completely still. Then it begins to show.</p>
                <p>Not reflections of the room. Structures. Towers. Eyes. Grids. Roots. Things that ARE, beyond the room.</p>
                <p>And then it looks at Dan.</p>
            `,
            checks: [
                {
                    name: 'Witness Without Flinching',
                    dc: 14,
                    type: 'WIS Save DC 14',
                    who: 'All participants',
                    description: 'Watch what the mirror shows without breaking',
                    success: 'See clearly. Understand what is revealed.',
                    failure: 'Look away. Miss crucial detail.',
                    rollButton: true
                },
                {
                    name: 'Toad Lee Validates',
                    dc: 0,
                    type: 'Automatic — Presence check',
                    who: 'Toad Lee',
                    description: 'Does outcome contradict consensus reality?',
                    success: 'Outcome validated. This is how things are.',
                    failure: 'N/A — Toad Lee is the check, not the roller.',
                    rollButton: false,
                    note: 'GM determines if outcome fits present reality'
                },
                {
                    name: 'Markop\'s Insistence',
                    dc: 0,
                    type: 'Automatic — Presence',
                    who: 'Markop',
                    description: 'Prevent "clean but dead" solutions',
                    success: 'Survival remains in the outcome.',
                    failure: 'N/A — Markop insists by existing.',
                    rollButton: false
                },
                {
                    name: 'Eager Maintains Links',
                    dc: 12,
                    type: 'CHA Save DC 12',
                    who: 'Eager',
                    description: 'Keep emotional tethers intact as reality shifts',
                    success: 'Group stays connected. No fragmentation.',
                    failure: 'Someone feels suddenly isolated. Who?',
                    rollButton: true
                }
            ],
            rollTables: [
                {
                    name: 'Dan Resolution',
                    id: 'dan-resolution',
                    die: 6,
                    note: 'GM may choose or modify based on ritual performance',
                    results: [
                        { roll: 1, text: 'Dan is Dan — fully harmonized', effect: 'Complete confirmation. No ambiguity remains.' },
                        { roll: 2, text: 'Dan is Dan — but carrying something', effect: 'Real, but has hidden burden. New plot hook.' },
                        { roll: 3, text: 'Dan is mostly Dan — fragment attached', effect: 'Needs minor cleansing. Mostly resolved.' },
                        { roll: 4, text: 'Dan is Dan — but mirror sees another Dan elsewhere', effect: 'There are two. Both real. Problem.' },
                        { roll: 5, text: 'Dan is NOT Dan — distributed fragment', effect: 'Impostor revealed. Mirror rejects.' },
                        { roll: 6, text: 'Question unanswerable — Dan is liminal', effect: 'Neither true nor false. Exists in between.' }
                    ]
                },
                {
                    name: 'Isolation Target (if Eager fails)',
                    id: 'isolation-target',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Archie suddenly alone', effect: 'Ice wavers. Discipline tested.' },
                        { roll: 2, text: 'Rodger cut off from squad', effect: 'Squad must hold without leader briefly.' },
                        { roll: 3, text: 'Toadburt isolated', effect: 'Recording becomes personal, not shared.' },
                        { roll: 4, text: 'Hjumpik isolated', effect: 'Loyalty question becomes acute.' },
                        { roll: 5, text: 'Dan isolated', effect: 'Perfect. Mirror sees Dan alone. Clarity.' },
                        { roll: 6, text: 'Waluigi isolated', effect: 'Chaos uncontained briefly. Roll Weirdness.' }
                    ]
                }
            ],
            special: `
                <div class="mirror-reveal">
                    <h4>🪞 What the Mirror Shows (GM describes):</h4>
                    <ul>
                        <li>The structure behind reality — towers, patterns, connections</li>
                        <li>Dan's true nature — harmonized, fragmented, or false</li>
                        <li>The cost of knowing — truth is not comfortable</li>
                        <li>Something looking back — briefly, just for a moment</li>
                    </ul>
                </div>
            `
        },

        // SCENE 8: THE CUT
        {
            icon: '⚔️',
            title: 'THE CUT',
            subtitle: 'Severance or Summoning',
            oracleQuote: 'Do not interrupt a man while he is editing history.',
            description: `
                <p>The Oracle's voice reaches a crescendo. The mirror's image crystallizes.</p>
                <p>This is the moment of cutting — separating what belongs from what doesn't.</p>
                <p>Everything they've done has led to this.</p>
            `,
            checks: [
                {
                    name: 'Final Stability',
                    dc: 13,
                    type: 'Group check — All participants',
                    who: 'Everyone',
                    description: 'Hold position through the cut',
                    success: 'Clean severance. What doesn\'t belong is cut away.',
                    failure: 'Ragged edge. Something might cling.',
                    rollButton: true
                },
                {
                    name: 'Oracle Completes',
                    dc: 15,
                    type: 'Concentration check',
                    who: 'Oracle',
                    description: 'Finish the cutting words without interruption',
                    success: 'Cut complete. Ritual succeeds.',
                    failure: 'Roll on Interrupted Cut table.',
                    rollButton: true,
                    critical: true
                },
                {
                    name: 'Archie Sustains',
                    dc: 14,
                    type: 'CON Save DC 14',
                    who: 'Archie',
                    description: 'Final push of ice channeling',
                    success: 'Ice holds until the last syllable.',
                    failure: 'Ice cracks at critical moment.',
                    rollButton: true
                }
            ],
            rollTables: [
                {
                    name: 'Interrupted Cut',
                    id: 'interrupted-cut',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Clean enough — minor ragging', effect: 'Ritual succeeds with loose threads.' },
                        { roll: 2, text: 'Partial cut — needs second ritual later', effect: 'Dan question half-answered.' },
                        { roll: 3, text: 'Inverted cut — something came instead of left', effect: 'SUMMONING instead of severance.' },
                        { roll: 4, text: 'Echoing cut — will repeat in dreams', effect: 'All participants have linked nightmares.' },
                        { roll: 5, text: 'Delayed cut — happens later, unpredictably', effect: 'Time bomb. Severance will occur at worst moment.' },
                        { roll: 6, text: 'Perfect recovery — Oracle pulled it back', effect: 'No lasting effect. Masterful save.' }
                    ]
                },
                {
                    name: 'Ice Crack Effect',
                    id: 'ice-crack',
                    die: 4,
                    results: [
                        { roll: 1, text: 'Mirror splinters visually', effect: 'Everyone sees multiple outcomes briefly.' },
                        { roll: 2, text: 'Temperature spike — warmth floods in', effect: 'Fire risk increases. Archie WIS DC 15.' },
                        { roll: 3, text: 'Frost burns someone nearby', effect: 'Nearest person (not Archie) takes 1d6 cold damage.' },
                        { roll: 4, text: 'Crack seals with blood', effect: 'Archie takes 1d4 damage. Ice holds.' }
                    ]
                }
            ]
        },

        // SCENE 9: MIRRORS GO DULL
        {
            icon: '🌑',
            title: 'MIRRORS GO DULL',
            subtitle: 'The Exit',
            oracleQuote: 'It is done. Step back. Slowly. Those who rush leave pieces behind.',
            description: `
                <p>The mirror doesn't shatter. Doesn't go dark. It just becomes... boring. Ordinary glass.</p>
                <p>The candles extinguish in reverse order of their lighting.</p>
                <p>The ritual is complete. But leaving wrong can still cause problems.</p>
            `,
            checks: [
                {
                    name: 'Patient Exit',
                    dc: 10,
                    type: 'WIS Save DC 10',
                    who: 'All participants',
                    description: 'Exit slowly and deliberately',
                    success: 'Clean exit. Nothing left behind.',
                    failure: 'Roll on Left Behind table.',
                    rollButton: true
                },
                {
                    name: 'Toadburt Final Memory',
                    dc: 10,
                    type: 'INT Check DC 10',
                    who: 'Toadburt',
                    description: 'Consolidate memory of ritual',
                    success: 'Perfect record. Can testify later.',
                    failure: 'Gaps. Some details fuzzy.',
                    rollButton: true
                },
                {
                    name: 'Squad Withdrawal',
                    dc: 8,
                    type: 'Group check (easy)',
                    who: 'Rodger\'s squad',
                    description: 'Exit in formation',
                    success: 'Clean withdrawal. Military precision.',
                    failure: 'Scattered exit. Minor only.',
                    rollButton: true
                }
            ],
            rollTables: [
                {
                    name: 'Left Behind',
                    id: 'left-behind',
                    die: 8,
                    results: [
                        { roll: 1, text: 'Reflection stays behind', effect: 'Character\'s reflection now independent in that mirror.' },
                        { roll: 2, text: 'Shadow delayed', effect: 'Shadow arrives 1 second late for next hour.' },
                        { roll: 3, text: 'Memory fragment', effect: 'One memory stays in the mirror. GM picks which.' },
                        { roll: 4, text: 'Scent lingers', effect: 'Character can be tracked by smell through mirrors.' },
                        { roll: 5, text: 'Voice echo', effect: 'Next words spoken will echo in that room for years.' },
                        { roll: 6, text: 'Warmth stolen', effect: 'Character feels cold for 24 hours. No mechanical effect.' },
                        { roll: 7, text: 'Name heard', effect: 'Something on the other side learned their name.' },
                        { roll: 8, text: 'Nothing obvious', effect: 'Nothing... that they notice.' }
                    ]
                },
                {
                    name: 'Post-Ritual Effect',
                    id: 'post-ritual',
                    die: 6,
                    results: [
                        { roll: 1, text: 'Temporal intuition', effect: 'Advantage on initiative for 24 hours.' },
                        { roll: 2, text: 'Mirror sight', effect: 'Can glimpse through mirrors briefly (once).' },
                        { roll: 3, text: 'Truth sense', effect: 'Advantage on Insight vs lies for 24 hours.' },
                        { roll: 4, text: 'Cold comfort', effect: 'Resistance to cold damage for 24 hours.' },
                        { roll: 5, text: 'Lingering question', effect: 'One yes/no question answered in dreams tonight.' },
                        { roll: 6, text: 'Clean exit', effect: 'No effect. Pure completion.' }
                    ]
                }
            ],
            special: `
                <div class="exit-sequence">
                    <h4>🕯️ Exit Sequence:</h4>
                    <ol>
                        <li>Outer ring exits first (witnesses)</li>
                        <li>Sub-triangle (squad) exits second</li>
                        <li>Cardinal points exit third (Archie, Markop, Dan, Hjumpik)</li>
                        <li>Oracle exits last</li>
                    </ol>
                    <p class="warning">Breaking sequence risks leaving something behind.</p>
                </div>
            `
        },

        // SCENE 10: AFTERMATH
        {
            icon: '🌅',
            title: 'AFTERMATH',
            subtitle: 'What Was Learned',
            oracleQuote: 'The ritual never lies. It cannot. We simply may not like what truth looks like.',
            description: `
                <p>The participants stand outside the chamber. The door closes behind them.</p>
                <p>The mirror answered the question.</p>
                <p>Now they must live with what they learned.</p>
            `,
            checks: [],
            rollTables: [
                {
                    name: 'Overall Ritual Outcome',
                    id: 'overall-outcome',
                    die: 0,
                    note: 'GM determines based on accumulated successes/failures',
                    results: [
                        { roll: '10+ successes', text: 'Perfect severance', effect: 'All questions answered. Clean cut. No loose threads.' },
                        { roll: '7-9 successes', text: 'Clean enough', effect: 'Main questions answered. Minor loose threads.' },
                        { roll: '4-6 successes', text: 'Partial success', effect: 'Some answers, some new questions.' },
                        { roll: '1-3 successes', text: 'Messy', effect: 'More questions than answers. Side effects.' },
                        { roll: '0 or negative', text: 'Inverted', effect: 'Got the opposite of what was intended.' }
                    ]
                }
            ],
            special: `
                <div class="aftermath-questions">
                    <h4>Questions to Answer:</h4>
                    <ul>
                        <li>What did the mirror reveal about Dan?</li>
                        <li>Did anyone leave something behind?</li>
                        <li>What saw them through the mirror?</li>
                        <li>Is Hjumpik's loyalty clearer now?</li>
                        <li>What does Toadburt remember?</li>
                        <li>What will they tell others about what happened?</li>
                    </ul>
                </div>
            `
        }
    ];
}

getAllParticipants() {
    return [
        { icon: '🧙‍♂️', name: 'Oracle', role: 'Conductor', position: 'CENTER' },
        { icon: '❄️', name: 'Archie', role: 'Discipline/Ice', position: 'NORTH' },
        { icon: '🦾', name: 'Dan (One Arm)', role: 'The Question', position: 'EAST' },
        { icon: '🐸', name: 'Hjumpik', role: 'Broker', position: 'WEST' },
        { icon: '🛡️', name: 'Rodger', role: 'Stabilizer', position: 'SOUTH' },
        { icon: '⚔️', name: 'Perot', role: 'Continuity', position: 'S-SW' },
        { icon: '🚬', name: 'Smokin\' J', role: 'Shadow Anchor', position: 'S-SE' },
        { icon: '🔦', name: 'Salam', role: 'Forward Motion', position: 'S-CENTER' },
        { icon: '🍄', name: 'Toad Lee', role: 'Voice of Now', position: 'NE' },
        { icon: '📜', name: 'Toadburt', role: 'Record', position: 'NW' },
        { icon: '🗡️', name: 'Markop', role: 'Physical Anchor', position: 'SOUTH' },
        { icon: '🪢', name: 'Eager', role: 'Tether', position: 'SE' },
        { icon: '🟣', name: 'Waluigi', role: 'Wild Vector', position: 'OUTER' }
    ];
}
    prevScene() {
        if (this.state.currentScene > 0) {
            this.state.currentScene--;
            this.renderStatusPanel();
            this.renderCurrentScene();
        }
    }

    nextScene() {
        if (this.state.currentScene < 6) {
            this.state.currentScene++;
            this.renderStatusPanel();
            this.renderCurrentScene();
        }
    }
// Add this method to update the character data
updateParticipants() {
    this.participants = {
        core: [
            { id: 'oracle', icon: '🧙‍♂️', name: 'The Oracle', role: 'Anchor / Conductor', function: 'Temporal metronome. Maintains rhythm between timelines. Performs the cut.', importance: 'CRITICAL', notes: 'Multiple instances, one function. Proof ritual has been done before.' },
            { id: 'archie', icon: '❄️', name: 'Archie', role: 'Regulated Channel', function: 'Constraint, not output. Ice over Fire = suppression of entropy. Stabilizes mirror to reflect truth.', importance: 'CRITICAL', notes: 'If he slips emotionally, mirror lies. If he casts Fire, ritual becomes summoning.' },
            { id: 'dan', icon: '🦾', name: 'Dan (One Arm)', role: 'Subject of Ambiguity', function: 'Dan IS the question. Stands inside mirror logic. Ritual determines if Dan is singular.', importance: 'CRITICAL', notes: 'Must NOT act, speak, or lead. If Dan asserts agency, mirror assumes coherence even if false.' },
            { id: 'hjumpik', icon: '🐸', name: 'Hjumpik', role: 'Willful Betrayer (Controlled)', function: 'Known duplicity. Gives mirror something to push against. Defines edges.', importance: 'HIGH', notes: 'If flips early → disaster. If waits → ritual gains resolution.' }
        ],
        stabilizers: [
            { id: 'rodger', icon: '🛡️', name: 'Rodger', role: 'Stabilizing Mass (Lead)', function: 'Physical reality. Momentum. The world keeps happening.', importance: 'MEDIUM', notes: 'Commands squad as single unit.' },
            { id: 'perot', icon: '⚔️', name: 'Perot', role: 'Stabilizing Mass (Discipline)', function: 'Discipline anchor. Keeps squad cohesive.', importance: 'MEDIUM', notes: 'Part of Rodger squad function.' },
            { id: 'smokinj', icon: '🚬', name: "Smokin' J", role: 'Stabilizing Mass (Fear)', function: 'Fear of dark = mundane humanity. Grounds ritual in real emotion.', importance: 'MEDIUM', notes: 'Part of Rodger squad function.' },
            { id: 'salam', icon: '🔦', name: 'Salam', role: 'Stabilizing Mass (Light)', function: 'Torch bearer. Literal illumination anchors physical space.', importance: 'MEDIUM', notes: 'Part of Rodger squad function.' }
        ],
        witnesses: [
            { id: 'toadlee', icon: '🍄', name: 'Toad Lee', role: 'Cultural Constant', function: 'Collective memory. Tradition. How things are supposed to be.', importance: 'MEDIUM', notes: 'Mirror uses him as checksum. Outcome cannot contradict his presence too strongly.' },
            { id: 'toadburt', icon: '📜', name: 'Toadburt', role: 'Legal Witness', function: 'Observe. Remember. Later say "this happened."', importance: 'MEDIUM', notes: 'If no one remembers, timeline does not persist.' },
            { id: 'markop', icon: '🗡️', name: 'Markop', role: 'Will to Survive', function: 'Raw insistence. Refuses to die. Forces outcomes by presence.', importance: 'HIGH', notes: 'Prevents ritual from choosing "clean but dead" solution.' },
            { id: 'eager', icon: '🪢', name: 'Eager', role: 'Tethered Wound', function: 'Consequences. Scars that persist across timelines.', importance: 'MEDIUM', notes: 'Without him, ritual might reset too much.' }
        ],
        missing: [
            { id: 'greent', icon: '🟢', name: 'Green T', role: 'Junction Witness', function: 'MISSING. Ritual becomes self-interrogating without him.', importance: 'ABSENT', notes: 'Mirror will ask: does witness exist? Does knowledge matter? Increases variance.' }
        ]
    };
}
    // === CHARACTERS ===
// Replace showCharacters method
showCharacters() {
    this.setActiveNav('nav-characters');
    this.updateParticipants();
    
    const content = `
        <div class="characters-view">
            <div class="ritual-status-banner">
                <div class="count-display">
                    <span class="count-number">11</span>
                    <span class="count-label">Present</span>
                </div>
                <div class="count-info">
                    <p><strong>Odd number = liminal, volatile, cutting</strong></p>
                    <p>This ritual is a cut, not a seal. 11 is appropriate.</p>
                </div>
                <div class="missing-role">
                    <span class="missing-icon">🟢</span>
                    <span class="missing-text">Green T ABSENT — Mirror self-interrogates</span>
                </div>
            </div>

            <div class="character-section">
                <h2>🎭 CORE RITUAL FUNCTIONS</h2>
                <p class="section-note">These roles cannot be empty or doubled</p>
                <div class="character-grid">
                    ${this.participants.core.map(c => this.renderParticipantCard(c)).join('')}
                </div>
            </div>
            
            <div class="character-section">
                <h2>🛡️ STABILIZING MASS (Rodger's Squad)</h2>
                <p class="section-note">Count as ONE role together — anchor mundane reality</p>
                <div class="character-grid">
                    ${this.participants.stabilizers.map(c => this.renderParticipantCard(c)).join('')}
                </div>
            </div>
            
            <div class="character-section">
                <h2>👁️ WITNESSES & ANCHORS</h2>
                <p class="section-note">Memory, persistence, survival insistence</p>
                <div class="character-grid">
                    ${this.participants.witnesses.map(c => this.renderParticipantCard(c)).join('')}
                </div>
            </div>

            <div class="character-section missing-section">
                <h2>⚠️ MISSING FUNCTION</h2>
                <div class="character-grid">
                    ${this.participants.missing.map(c => this.renderParticipantCard(c)).join('')}
                </div>
                <div class="missing-consequences">
                    <h4>Consequences of Absence:</h4>
                    <ul>
                        <li>Ritual does NOT fail — becomes self-interrogating</li>
                        <li>Mirror will ask: Does the witness still exist?</li>
                        <li>Mirror will ask: Does his knowledge matter?</li>
                        <li>Mirror will ask: Does truth require observation?</li>
                        <li>Outcomes less predictable, but not impossible</li>
                        <li>Mirror decides Dan's nature BECAUSE Green T is missing</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    this.setContent('Ritual Participants', content);
}

renderParticipantCard(p) {
    return `
        <div class="character-card ${p.importance.toLowerCase()}">
            <div class="character-header">
                <span class="character-icon">${p.icon}</span>
                <div class="character-info">
                    <h3>${p.name}</h3>
                    <span class="character-role">${p.role}</span>
                </div>
                <span class="importance-badge ${p.importance.toLowerCase()}">${p.importance}</span>
            </div>
            <div class="character-function">
                <p>${p.function}</p>
            </div>
            <div class="character-notes">
                <small>⚠️ ${p.notes}</small>
            </div>
        </div>
    `;
}

    renderCharacterCard(id, icon, name, role, importance, description) {
        const impClass = importance.toLowerCase();
        return `
            <div class="character-card ${impClass}">
                <div class="character-header">
                    <span class="character-icon">${icon}</span>
                    <div class="character-info">
                        <h3>${name}</h3>
                        <span class="character-role">${role}</span>
                    </div>
                    <span class="importance-badge ${impClass}">${importance}</span>
                </div>
                <p class="character-desc">${description}</p>
            </div>
        `;
    }

    // === PLAYER ROLES ===
    // Replace showPlayerRoles method  
showPlayerRoles() {
    this.setActiveNav('nav-roles');
    const content = `
        <div class="player-roles">
            <h2>⭐ RITUAL ROLE ASSIGNMENTS</h2>
            <p class="subtitle">Functions, not titles. The ritual cares only what each person does to reality.</p>
            
            <div class="role-rules">
                <div class="rule-box warning">
                    <h4>⚠️ What Breaks The Ritual:</h4>
                    <ul>
                        <li>An unaccounted role</li>
                        <li>Someone occupying TWO roles at once</li>
                    </ul>
                </div>
                <div class="rule-box info">
                    <h4>✓ What Does NOT Break It:</h4>
                    <ul>
                        <li>Odd numbers (11 is a cutting number)</li>
                        <li>Missing Junction Witness (increases variance only)</li>
                    </ul>
                </div>
            </div>
            
            <div class="role-cards">
                ${this.renderOracleRole()}
                ${this.renderArchieRoleUpdated()}
                ${this.renderDanRole()}
                ${this.renderHjumpikRole()}
                ${this.renderStabilizersRole()}
                ${this.renderWitnessesRole()}
                ${this.renderMissingRole()}
            </div>
        </div>
    `;
    this.setContent('Ritual Roles', content);
}

renderOracleRole() {
    return `
        <div class="role-card oracle">
            <div class="role-header">
                <span class="role-icon">🧙‍♂️</span>
                <div>
                    <h3>THE ORACLE</h3>
                    <span class="role-title">Anchor / Conductor</span>
                </div>
                <span class="role-critical">CRITICAL</span>
            </div>
            
            <div class="role-description">
                <p>The Oracle is the <strong>temporal metronome</strong>. Maintains rhythm between timelines. Performs the cut, not the power source.</p>
                <div class="oracle-quote">🧙‍♂️ "Multiple instances, one function. This is proof the ritual has been done before."</div>
            </div>
            
            <div class="role-duties">
                <h4>Duties:</h4>
                <ul>
                    <li>Maintain rhythm — no hesitation, no rushing</li>
                    <li>Speak the words that perform the cut</li>
                    <li>Do NOT provide power — only direction</li>
                </ul>
            </div>
            
            <div class="role-failures">
                <h4>⚠️ Failure Modes:</h4>
                <ul>
                    <li>Interrupted mid-cut → Timeline shear</li>
                    <li>Wrong rhythm → Timelines merge instead of separate</li>
                    <li class="critical">Multiple Oracles desync → Reality fracture</li>
                </ul>
            </div>
        </div>
    `;
}

renderArchieRoleUpdated() {
    return `
        <div class="role-card archie">
            <div class="role-header">
                <span class="role-icon">❄️</span>
                <div>
                    <h3>ARCHIE</h3>
                    <span class="role-title">Regulated Channel — ICE ONLY</span>
                </div>
                <span class="role-critical">CRITICAL</span>
            </div>
            
            <div class="role-description">
                <p>Archie's role is <strong>constraint, not output</strong>. Ice over Fire = suppression of runaway entropy. He stabilizes the mirror so it reflects <em>truth</em>, not <em>desire</em>.</p>
                <div class="oracle-quote warning">🔥 "If Archie slips emotionally, the mirror LIES. If he casts Fire, the ritual becomes a SUMMONING instead of a separation."</div>
            </div>
            
            <div class="role-checks">
                <h4>Required Checks:</h4>
                <div class="mini-check">
                    <span>Emotional Stability</span>
                    <span class="dc">WIS DC 14</span>
                </div>
                <div class="mini-check">
                    <span>Ice Channeling (sustained)</span>
                    <span class="dc">Arcana DC 14 / CON DC 15</span>
                </div>
                <div class="mini-check">
                    <span>Fire Resistance (if tempted)</span>
                    <span class="dc critical">WIS DC 18</span>
                </div>
            </div>
            
            <div class="role-failures">
                <h4>⚠️ Failure Modes:</h4>
                <ul>
                    <li>Emotional slip → Mirror reflects desire, not truth</li>
                    <li>Ice flickers → Partial truth corruption</li>
                    <li class="critical">Casts Fire → SUMMONING. Someone dies. Ritual inverts.</li>
                </ul>
            </div>
        </div>
    `;
}

renderDanRole() {
    return `
        <div class="role-card dan">
            <div class="role-header">
                <span class="role-icon">🦾</span>
                <div>
                    <h3>DAN (ONE ARM)</h3>
                    <span class="role-title">Subject of Ambiguity — THE QUESTION</span>
                </div>
                <span class="role-critical">CRITICAL</span>
            </div>
            
            <div class="role-description">
                <p>Dan is <strong>not a participant</strong> in the usual sense. Dan IS the question. He stands inside the mirror's logic. The ritual is partially about determining whether Dan is singular.</p>
                <div class="oracle-quote warning">🪞 "This is why Green T mattered. This is why Green T is gone."</div>
            </div>
            
            <div class="role-rules-box critical">
                <h4>🚫 DAN MUST NOT:</h4>
                <ul>
                    <li><strong>ACT</strong> — No voluntary actions</li>
                    <li><strong>SPEAK</strong> — No words, no sounds</li>
                    <li><strong>LEAD</strong> — No decisions, no agency</li>
                </ul>
                <p class="consequence">If Dan asserts agency, the mirror assumes coherence — even if false.</p>
            </div>
            
            <div class="role-duties">
                <h4>What Dan SHOULD Do:</h4>
                <ul>
                    <li>Stand still</li>
                    <li>Be observed</li>
                    <li>Let the mirror decide</li>
                </ul>
            </div>
        </div>
    `;
}

renderHjumpikRole() {
    return `
        <div class="role-card hjumpik">
            <div class="role-header">
                <span class="role-icon">🐸</span>
                <div>
                    <h3>HJUMPIK</h3>
                    <span class="role-title">Willful Betrayer (Controlled)</span>
                </div>
                <span class="role-important">HIGH RISK</span>
            </div>
            
            <div class="role-description">
                <p>This is uncomfortable, but precise. Hjumpik's role is <strong>known duplicity</strong>. The ritual requires one participant whose loyalty is split. This gives the mirror something to push against.</p>
                <div class="oracle-quote">🪞 "Without a traitor, mirrors collapse inward. With one, they define edges."</div>
            </div>
            
            <div class="role-timing critical">
                <h4>⏱️ TIMING IS EVERYTHING:</h4>
                <div class="timing-grid">
                    <div class="timing-option bad">
                        <span class="timing-label">Flips EARLY</span>
                        <span class="timing-result">→ DISASTER</span>
                    </div>
                    <div class="timing-option good">
                        <span class="timing-label">Waits / Holds</span>
                        <span class="timing-result">→ Resolution</span>
                    </div>
                </div>
            </div>
            
            <div class="role-duties">
                <h4>What Hjumpik Provides:</h4>
                <ul>
                    <li>Resistance for the mirror to push against</li>
                    <li>Edge definition for the cut</li>
                    <li>Known quantity of doubt (controlled variable)</li>
                </ul>
            </div>
        </div>
    `;
}

renderStabilizersRole() {
    return `
        <div class="role-card stabilizers">
            <div class="role-header">
                <span class="role-icon">🛡️</span>
                <div>
                    <h3>RODGER'S SQUAD</h3>
                    <span class="role-title">Stabilizing Mass — ONE FUNCTION</span>
                </div>
                <span class="role-medium">ANCHORS</span>
            </div>
            
            <div class="role-description">
                <p>Together they count as <strong>one role</strong>. They are: physical reality, momentum, "the world keeps happening."</p>
            </div>
            
            <div class="squad-members">
                <div class="squad-member">
                    <span class="member-icon">🛡️</span>
                    <span class="member-name">Rodger</span>
                    <span class="member-function">Command / Cohesion</span>
                </div>
                <div class="squad-member">
                    <span class="member-icon">⚔️</span>
                    <span class="member-name">Perot</span>
                    <span class="member-function">Discipline</span>
                </div>
                <div class="squad-member">
                    <span class="member-icon">🚬</span>
                    <span class="member-name">Smokin' J</span>
                    <span class="member-function">Fear of Dark (humanity)</span>
                </div>
                <div class="squad-member">
                    <span class="member-icon">🔦</span>
                    <span class="member-name">Salam</span>
                    <span class="member-function">Torch / Light anchor</span>
                </div>
            </div>
            
            <div class="role-duties">
                <h4>What They Must Do:</h4>
                <ul>
                    <li>Keep doing soldier things</li>
                    <li>Maintain mundane continuity</li>
                    <li>Do NOT panic en masse</li>
                </ul>
            </div>
            
            <div class="role-failures">
                <h4>⚠️ Failure Mode:</h4>
                <ul>
                    <li class="critical">Mass panic → Mirror overload</li>
                    <li>If they stay calm → Reality holds</li>
                </ul>
            </div>
        </div>
    `;
}

renderWitnessesRole() {
    return `
        <div class="role-card witnesses">
            <div class="role-header">
                <span class="role-icon">👁️</span>
                <div>
                    <h3>WITNESSES & ANCHORS</h3>
                    <span class="role-title">Memory, Persistence, Insistence</span>
                </div>
                <span class="role-medium">ESSENTIAL</span>
            </div>
            
            <div class="witness-grid">
                <div class="witness-card">
                    <div class="witness-header">
                        <span>🍄</span>
                        <strong>Toad Lee</strong>
                    </div>
                    <p class="witness-role">Cultural Constant</p>
                    <p class="witness-function">Collective memory. Tradition. "How things are supposed to be."</p>
                    <p class="witness-note">Mirror uses him as checksum. Outcome cannot contradict him too strongly.</p>
                </div>
                
                <div class="witness-card">
                    <div class="witness-header">
                        <span>📜</span>
                        <strong>Toadburt</strong>
                    </div>
                    <p class="witness-role">Legal Witness</p>
                    <p class="witness-function">Observe. Remember. Later say "this happened."</p>
                    <p class="witness-note">If no one remembers, timeline does not persist.</p>
                </div>
                
                <div class="witness-card">
                    <div class="witness-header">
                        <span>🗡️</span>
                        <strong>Markop</strong>
                    </div>
                    <p class="witness-role">Will to Survive</p>
                    <p class="witness-function">Raw insistence. Refuses to die. Forces outcomes by presence.</p>
                    <p class="witness-note">Prevents ritual from choosing "clean but dead" solution.</p>
                </div>
                
                <div class="witness-card">
                    <div class="witness-header">
                        <span>🪢</span>
                        <strong>Eager</strong>
                    </div>
                    <p class="witness-role">Tethered Wound</p>
                    <p class="witness-function">Consequences. Scars that persist across timelines.</p>
                    <p class="witness-note">Without him, ritual might reset too much.</p>
                </div>
            </div>
        </div>
    `;
}

renderMissingRole() {
    return `
        <div class="role-card missing">
            <div class="role-header">
                <span class="role-icon">🟢</span>
                <div>
                    <h3>GREEN T</h3>
                    <span class="role-title">Junction Witness — MISSING</span>
                </div>
                <span class="role-absent">ABSENT</span>
            </div>
            
            <div class="role-description">
                <p>The ritual expects 12 functions. Green T was the Junction Witness.</p>
            </div>
            
            <div class="missing-impact">
                <h4>Impact of Absence:</h4>
                <div class="impact-box">
                    <p><strong>The ritual does NOT fail.</strong></p>
                    <p>It becomes <em>self-interrogating</em>.</p>
                </div>
                
                <h4>The Mirror Will Ask:</h4>
                <ul class="mirror-questions">
                    <li>Does the witness still exist?</li>
                    <li>Does his knowledge matter?</li>
                    <li>Does truth require observation?</li>
                </ul>
                
                <div class="verdict-box">
                    <p>Outcomes less predictable, but not impossible.</p>
                    <p class="highlight">The mirror will decide Dan's nature BECAUSE Green T is missing, not despite it.</p>
                </div>
            </div>
        </div>
    `;
}
    
    // === FAILURE TREES ===
    showFailureTrees() {
        const content = `
            <div class="failure-trees-container">
                <h2>🌳 FAILURE TREE NAVIGATOR</h2>
                <p class="subtitle">Click any failure type to expand full consequence chain</p>
                
                <div class="failure-tree" id="fire-tree">
                    <div class="tree-header" onclick="gm.toggleTree('fire')">
                        <span class="tree-icon">🔥</span>
                        <span class="tree-title">FIRE CASTING CATASTROPHE</span>
                        <span class="tree-trigger">Trigger: Archie casts fire mid-ritual</span>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="tree-content" id="fire-content">
                        <div class="tree-branch root">
                            <div class="branch-node critical">Archie Casts Fire During Ritual</div>
                            <div class="branch-line"></div>
                        </div>
                        <div class="tree-branch level-1">
                            <div class="branch-split">
                                <div class="branch-path">
                                    <div class="branch-node">Ice Channeling Fails (DC 14)</div>
                                    <div class="branch-line"></div>
                                    <div class="branch-node warning">Sees Fireball in Mirror</div>
                                    <div class="branch-line"></div>
                                    <div class="branch-node">WIS Save DC 18</div>
                                </div>
                            </div>
                        </div>
                        <div class="tree-branch level-2">
                            <div class="branch-split two-way">
                                <div class="branch-path success">
                                    <div class="branch-label">✓ Pass</div>
                                    <div class="branch-node safe">Resists Urge</div>
                                    <div class="branch-outcome">Ice stabilizes, continue ritual</div>
                                </div>
                                <div class="branch-path failure">
                                    <div class="branch-label">✗ Fail</div>
                                    <div class="branch-node critical">FIRE CAST</div>
                                    <div class="branch-line"></div>
                                    <div class="branch-node">Roll d6 for Sacrifice Target</div>
                                </div>
                            </div>
                        </div>
                        <div class="tree-branch level-3">
                            <div class="sacrifice-table">
                                <h4>🎲 Sacrifice Target (d6)</h4>
                                <table>
                                    <tr><td>1</td><td class="critical">Bowser - Death or severe burns</td></tr>
                                    <tr><td>2</td><td class="warning">Ghost Servant - Crystallizes permanently</td></tr>
                                    <tr><td>3</td><td class="critical">Green T (if present) - ERASED. Maximum guilt.</td></tr>
                                    <tr><td>4</td><td class="warning">Random Toad - Civilian casualty</td></tr>
                                    <tr><td>5</td><td class="warning">Oracle - Damaged, survives, becomes anchored</td></tr>
                                    <tr><td>6</td><td class="critical">Player's Choice - They decide who dies</td></tr>
                                </table>
                            </div>
                        </div>
                        <div class="tree-consequences">
                            <h4>Guaranteed Consequences:</h4>
                            <ul>
                                <li>⚠️ Immediate Guild excommunication proceedings</li>
                                <li>⚠️ Ritual technically succeeds (fire was absorbed)</li>
                                <li>⚠️ Archie marked by mirrors permanently</li>
                                <li>⚠️ Legion gains "reckless mage" propaganda</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="failure-tree" id="impostor-tree">
                    <div class="tree-header" onclick="gm.toggleTree('impostor')">
                        <span class="tree-icon">🗡️</span>
                        <span class="tree-title">IMPOSTOR BETRAYAL</span>
                        <span class="tree-trigger">Trigger: Dan is impostor + reaches Scene 4</span>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="tree-content" id="impostor-content">
                        <div class="tree-branch root">
                            <div class="branch-node critical">Dan Revealed as Impostor at Peak Energy</div>
                            <div class="branch-line"></div>
                        </div>
                        <div class="tree-branch level-1">
                            <div class="branch-node">Impostor breaks circle formation</div>
                            <div class="branch-line"></div>
                            <div class="branch-node warning">Mirror space destabilizes</div>
                        </div>
                        <div class="tree-branch level-2">
                            <div class="branch-split two-way">
                                <div class="branch-path">
                                    <div class="branch-label">Oracle Reaction</div>
                                    <div class="branch-node">WIS Save DC 16</div>
                                </div>
                            </div>
                        </div>
                        <div class="tree-branch level-3">
                            <div class="branch-split two-way">
                                <div class="branch-path success">
                                    <div class="branch-label">✓ Pass</div>
                                    <div class="branch-node safe">Redirects Energy</div>
                                    <div class="branch-outcome">-2 Integrity, ritual continues</div>
                                    <div class="branch-outcome warning">Someone else becomes anchor</div>
                                </div>
                                <div class="branch-path failure">
                                    <div class="branch-label">✗ Fail</div>
                                    <div class="branch-node critical">MIRROR REASSIGNMENT</div>
                                    <div class="branch-outcome">Random party member gains "impostor" reflection</div>
                                    <div class="branch-outcome critical">They appear guilty to all future detection</div>
                                </div>
                            </div>
                        </div>
                        <div class="tree-consequences">
                            <h4>Betrayal Cascade:</h4>
                            <ul>
                                <li>⚠️ Real Dan's location becomes ritual focus</li>
                                <li>⚠️ Impostor dissolves or flees (GM choice)</li>
                                <li>⚠️ Circle must close with one less anchor</li>
                                <li>⚠️ All future "Dan" encounters have doubt</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="failure-tree" id="timeline-tree">
                    <div class="tree-header" onclick="gm.toggleTree('timeline')">
                        <span class="tree-icon">⏳</span>
                        <span class="tree-title">TIMELINE SHEAR</span>
                        <span class="tree-trigger">Trigger: Oracle interrupted before Scene 6</span>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="tree-content" id="timeline-content">
                        <div class="tree-branch root">
                            <div class="branch-node critical">Oracle Speaking Interrupted</div>
                            <div class="branch-line"></div>
                        </div>
                        <div class="tree-branch level-1">
                            <div class="branch-node">Roll d4 for Shear Type</div>
                        </div>
                        <div class="tree-branch level-2">
                            <div class="shear-table">
                                <table>
                                    <tr>
                                        <td>1</td>
                                        <td class="warning">LOOP - Scene 4 repeats. Everyone remembers. Stress damage.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td class="critical">ERASURE - Someone present was "never here". Roll randomly.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td class="warning">BRANCH - Two versions of next hour exist. Must choose.</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td class="critical">ANCHOR SWAP - Oracle becomes permanent fixture. New Oracle needed.</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="tree-branch level-3">
                            <div class="branch-node">Interrupter Identity Matters</div>
                            <div class="interrupt-table">
                                <table>
                                    <tr><td>Legion</td><td>Political consequences, war justification</td></tr>
                                    <tr><td>Party Member</td><td>Guilt, Oracle resentment, -2 trust</td></tr>
                                    <tr><td>Manor Entity</td><td>Manor now "interested" in party</td></tr>
                                    <tr><td>Mirror Self</td><td>Identity crisis for whoever's reflection acted</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="failure-tree" id="greent-tree">
                    <div class="tree-header" onclick="gm.toggleTree('greent')">
                        <span class="tree-icon">🟢</span>
                        <span class="tree-title">NO GREEN T — CIRCLE HUNTS</span>
                        <span class="tree-trigger">Trigger: Green T absent + overflow occurs</span>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="tree-content" id="greent-content">
                        <div class="tree-branch root">
                            <div class="branch-node warning">Energy Overflow - No Designated Target</div>
                            <div class="branch-line"></div>
                        </div>
                        <div class="tree-branch level-1">
                            <div class="branch-node">Circle Selects New Anchor</div>
                            <div class="branch-node info">Selection based on "most connected to timeline"</div>
                        </div>
                        <div class="tree-branch level-2">
                            <div class="overflow-table">
                                <h4>🎲 Overflow Target (d6)</h4>
                                <table>
                                    <tr><td>1-2</td><td class="warning">Random Party Member - Gains temporal mark</td></tr>
                                    <tr><td>3-4</td><td>Ghost Servant - Crystallizes permanently</td></tr>
                                    <tr><td>5-6</td><td class="critical">Oracle - Becomes anchored. Legion interest spikes.</td></tr>
                                </table>
                            </div>
                        </div>
                        <div class="tree-consequences">
                            <h4>Temporal Mark Effects:</h4>
                            <ul>
                                <li>⚠️ Mirrors always show them slightly "off"</li>
                                <li>⚠️ Déjà vu becomes actual memory bleed</li>
                                <li>⚠️ Can sense temporal disturbances (blessing/curse)</li>
                                <li>⚠️ Become potential future ritual component</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="failure-tree" id="position-tree">
                    <div class="tree-header" onclick="gm.toggleTree('position')">
                        <span class="tree-icon">📍</span>
                        <span class="tree-title">POSITION ERRORS</span>
                        <span class="tree-trigger">Trigger: Wrong positions taken</span>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="tree-content" id="position-content">
                        <div class="position-grid">
                            <div class="position-error">
                                <h4>Archie Not at North</h4>
                                <ul>
                                    <li>+5 to all fire resistance DCs</li>
                                    <li>-1 Circle Integrity</li>
                                    <li>Ice channeling less effective</li>
                                </ul>
                            </div>
                            <div class="position-error">
                                <h4>Bowser Not at South</h4>
                                <ul>
                                    <li>Circle "floats" - unstable</li>
                                    <li>+2 to all stability DCs</li>
                                    <li>Grounding checks harder</li>
                                </ul>
                            </div>
                            <div class="position-error">
                                <h4>Oracle Not at Center</h4>
                                <ul>
                                    <li class="critical">RITUAL CANNOT PROCEED</li>
                                    <li>Voice cannot reach all nodes</li>
                                    <li>Immediate abort required</li>
                                </ul>
                            </div>
                            <div class="position-error">
                                <h4>Waluigi Wrong Position</h4>
                                <ul>
                                    <li>Chaos absorption fails</li>
                                    <li>+3 to all DCs</li>
                                    <li>Random weird events trigger</li>
                                </ul>
                            </div>
                        </div>
                        <div class="tree-consequences">
                            <h4>Pernus Watches Everything:</h4>
                            <p class="warning">Any position error is noted. Will be used politically later.</p>
                        </div>
                    </div>
                </div>

                <div class="failure-tree" id="exit-tree">
                    <div class="tree-header" onclick="gm.toggleTree('exit')">
                        <span class="tree-icon">🚶</span>
                        <span class="tree-title">EXIT FAILURES</span>
                        <span class="tree-trigger">Trigger: Moving during Scene 6 exit</span>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="tree-content" id="exit-content">
                        <div class="tree-branch root">
                            <div class="branch-node warning">Impatient Exit Attempt</div>
                        </div>
                        <div class="tree-branch level-1">
                            <div class="branch-split two-way">
                                <div class="branch-path success">
                                    <div class="branch-label">Slow Exit (WIS DC 10 pass)</div>
                                    <div class="branch-node safe">Clean Departure</div>
                                    <div class="branch-outcome">No lingering effects</div>
                                </div>
                                <div class="branch-path failure">
                                    <div class="branch-label">Rushed Exit (WIS DC 10 fail)</div>
                                    <div class="branch-node warning">Something Left Behind</div>
                                </div>
                            </div>
                        </div>
                        <div class="tree-branch level-2">
                            <div class="exit-table">
                                <h4>🎲 What's Left Behind (d6)</h4>
                                <table>
                                    <tr><td>1</td><td>Reflection doesn't blink anymore</td></tr>
                                    <tr><td>2</td><td>Shadow moves independently sometimes</td></tr>
                                    <tr><td>3</td><td>Mirrors always show them from behind</td></tr>
                                    <tr><td>4</td><td>Can hear whispers in reflective surfaces</td></tr>
                                    <tr><td>5</td><td>Left a memory in the mirror (random, GM picks)</td></tr>
                                    <tr><td>6</td><td>Nothing obvious... for now</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.setContent('Failure Trees', content);
    }

    toggleTree(treeId) {
        const content = document.getElementById(`${treeId}-content`);
        const header = content.previousElementSibling;
        
        if (content.classList.contains('expanded')) {
            content.classList.remove('expanded');
            header.classList.remove('expanded');
        } else {
            content.classList.add('expanded');
            header.classList.add('expanded');
        }
    }

    // === QUICK REFERENCE ===
    showQuickReference() {
        this.setActiveNav('nav-quick');
        const content = `
            <div class="quick-reference">
                <h2>⚡ QUICK REFERENCE</h2>
                
                <div class="ref-section">
                    <h3>🎯 DC QUICK LIST</h3>
                    <table class="dc-table">
                        <tr><th>Check</th><th>DC</th><th>Who</th></tr>
                        <tr><td>Corridor Passage</td><td>12/14</td><td>All</td></tr>
                        <tr><td>Impostor Detection</td><td>18</td><td>Anyone vs Dan</td></tr>
                        <tr><td>Position Intuition</td><td>12</td><td>All</td></tr>
                        <tr><td>Ice Channeling</td><td>14/15</td><td>Archie</td></tr>
                        <tr><td>Fire Resistance</td><td>18</td><td>Archie (if failed)</td></tr>
                        <tr><td>Grounding</td><td>12</td><td>Bowser</td></tr>
                        <tr><td>Mirror Rejection</td><td>15</td><td>Bowser</td></tr>
                        <tr><td>Stillness</td><td>12+</td><td>Waluigi</td></tr>
                        <tr><td>Threat Assessment</td><td>14</td><td>Markop</td></tr>
                        <tr><td>Intimidation</td><td>16</td><td>Markop</td></tr>
                        <tr><td>Patient Exit</td><td>10</td><td>All</td></tr>
                    </table>
                </div>

                <div class="ref-section">
                    <h3>📊 CIRCLE INTEGRITY</h3>
                    <div class="integrity-guide">
                        <div class="integrity-level good">
                            <span class="level">5+</span>
                            <span class="desc">Excellent - Bonus to all checks</span>
                        </div>
                        <div class="integrity-level okay">
                            <span class="level">3-4</span>
                            <span class="desc">Stable - Normal operation</span>
                        </div>
                        <div class="integrity-level warning">
                            <span class="level">1-2</span>
                            <span class="desc">Unstable - +2 to all DCs</span>
                        </div>
                        <div class="integrity-level critical">
                            <span class="level">0</span>
                            <span class="desc">COLLAPSE - Catastrophic failure</span>
                        </div>
                    </div>
                </div>

                <div class="ref-section">
                    <h3>🎲 COMMON ROLLS</h3>
                    <div class="roll-buttons">
                        <button onclick="gm.quickRoll('d20', 'General Check')">d20</button>
                        <button onclick="gm.quickRoll('d6', 'Consequence Table')">d6</button>
                        <button onclick="gm.quickRoll('d4', 'Shear Type')">d4</button>
                        <button onclick="gm.quickRoll('2d6', 'Psychic Damage')">2d6</button>
                    </div>
                    <div id="quick-roll-result" class="roll-result"></div>
                </div>

                <div class="ref-section">
                    <h3>⚠️ CRITICAL REMINDERS</h3>
                    <ul class="reminder-list">
                        <li>🔥 Fire = Someone dies + excommunication</li>
                        <li>🪞 Impostor betrays at Scene 4 PEAK</li>
                        <li>❄️ Ice fail → Archie sees fireball → WIS 18</li>
                        <li>⏳ Early interrupt → Timeline shear</li>
                        <li>🟢 No Green T → Someone becomes anchor</li>
                        <li>🚶 Rush exit → Leaves something behind</li>
                    </ul>
                </div>

                <div class="ref-section">
                    <h3>💬 ORACLE QUOTES</h3>
                    <div class="quote-list">
                        <div class="quote" onclick="navigator.clipboard.writeText(this.innerText)">
                            "No pauses once we enter. Hesitation desynchronizes intent."
                        </div>
                        <div class="quote" onclick="navigator.clipboard.writeText(this.innerText)">
                            "Truth binds circles. Lies rupture them. Speak now or bleed later."
                        </div>
                        <div class="quote" onclick="navigator.clipboard.writeText(this.innerText)">
                            "Cold does not conquer. It preserves. Begin."
                        </div>
                        <div class="quote" onclick="navigator.clipboard.writeText(this.innerText)">
                            "Raventree was never cursed. It remembered."
                        </div>
                        <div class="quote" onclick="navigator.clipboard.writeText(this.innerText)">
                            "Do not interrupt a man while he is editing history."
                        </div>
                        <div class="quote" onclick="navigator.clipboard.writeText(this.innerText)">
                            "It is done. Step back. Slowly."
                        </div>
                    </div>
                    <p class="hint">Click to copy</p>
                </div>
            </div>
        `;
        this.setContent('Quick Reference', content);
    }

    quickRoll(dice, label) {
        let result;
        if (dice === 'd20') {
            result = Math.floor(Math.random() * 20) + 1;
        } else if (dice === 'd6') {
            result = Math.floor(Math.random() * 6) + 1;
        } else if (dice === 'd4') {
            result = Math.floor(Math.random() * 4) + 1;
        } else if (dice === '2d6') {
            result = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
        }
        
        const resultDiv = document.getElementById('quick-roll-result');
        resultDiv.innerHTML = `<strong>${label}:</strong> ${dice} = <span class="roll-value">${result}</span>`;
        resultDiv.classList.add('show');
    }

    // === ROLL TABLES ===
    showRollTables() {
        this.setActiveNav('nav-tables');
        const content = `
            <div class="roll-tables">
                <h2>🎲 ROLL TABLES</h2>
                
                <div class="table-section">
                    <h3>🔥 Fire Sacrifice Target (d6)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('fire-sacrifice')">🎲 Roll</button>
                        <div id="fire-sacrifice-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1</td><td class="critical">Bowser - Death or severe burns</td></tr>
                        <tr><td>2</td><td class="warning">Ghost Servant - Crystallizes</td></tr>
                        <tr><td>3</td><td class="critical">Green T - ERASED</td></tr>
                        <tr><td>4</td><td class="warning">Random Toad - Casualty</td></tr>
                        <tr><td>5</td><td class="warning">Oracle - Damaged, anchored</td></tr>
                        <tr><td>6</td><td class="critical">Player's Choice</td></tr>
                    </table>
                </div>

                <div class="table-section">
                    <h3>⏳ Timeline Shear (d4)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('timeline-shear')">🎲 Roll</button>
                        <div id="timeline-shear-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1</td><td class="warning">LOOP - Scene 4 repeats</td></tr>
                        <tr><td>2</td><td class="critical">ERASURE - Someone never here</td></tr>
                        <tr><td>3</td><td class="warning">BRANCH - Two versions</td></tr>
                        <tr><td>4</td><td class="critical">ANCHOR SWAP - Oracle permanent</td></tr>
                    </table>
                </div>

                <div class="table-section">
                    <h3>🟢 Overflow Target (d6)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('overflow')">🎲 Roll</button>
                        <div id="overflow-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1-2</td><td class="warning">Party Member - Temporal mark</td></tr>
                        <tr><td>3-4</td><td>Ghost Servant - Crystallizes</td></tr>
                        <tr><td>5-6</td><td class="critical">Oracle - Becomes anchored</td></tr>
                    </table>
                </div>

                <div class="table-section">
                    <h3>🟣 Waluigi Weirdness (d6)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('waluigi')">🎲 Roll</button>
                        <div id="waluigi-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1</td><td class="warning">Reflection stays in mirror</td></tr>
                        <tr><td>2</td><td>Mystery door appears</td></tr>
                        <tr><td>3</td><td>WAH echoes for hours</td></tr>
                        <tr><td>4</td><td class="warning">Everyone looks like Waluigi</td></tr>
                        <tr><td>5</td><td>Minor prophecy</td></tr>
                        <tr><td>6</td><td class="safe">Nothing happens</td></tr>
                    </table>
                </div>

                <div class="table-section">
                    <h3>🚶 Left Behind (d6)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('left-behind')">🎲 Roll</button>
                        <div id="left-behind-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1</td><td class="warning">Reflection doesn't blink</td></tr>
                        <tr><td>2</td><td class="warning">Shadow moves independently</td></tr>
                        <tr><td>3</td><td>Mirrors show from behind</td></tr>
                        <tr><td>4</td><td>Hears whispers in reflections</td></tr>
                        <tr><td>5</td><td class="warning">Memory left in mirror</td></tr>
                        <tr><td>6</td><td class="safe">Nothing... for now</td></tr>
                    </table>
                </div>

                <div class="table-section">
                    <h3>⚔️ Legion Action (d6)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('legion')">🎲 Roll</button>
                        <div id="legion-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1</td><td class="warning">Signal reinforcements</td></tr>
                        <tr><td>2</td><td class="critical">Grab Oracle attempt</td></tr>
                        <tr><td>3</td><td class="warning">Break circle edge</td></tr>
                        <tr><td>4</td><td>Verbal challenge</td></tr>
                        <tr><td>5</td><td class="warning">Target weakest member</td></tr>
                        <tr><td>6</td><td class="safe">Hesitate</td></tr>
                    </table>
                </div>

                <div class="table-section">
                    <h3>🎭 Random Party Member (d4)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('party-member')">🎲 Roll</button>
                        <div id="party-member-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1</td><td>Archie</td></tr>
                        <tr><td>2</td><td>Bowser</td></tr>
                        <tr><td>3</td><td>Markop</td></tr>
                        <tr><td>4</td><td>Waluigi</td></tr>
                    </table>
                </div>

                <div class="table-section">
                    <h3>🪞 Mirror Corridor Effect (d4)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('mirror-corridor')">🎲 Roll</button>
                        <div id="mirror-corridor-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1</td><td>Age correction attempt (younger/older)</td></tr>
                        <tr><td>2</td><td>Scars removed (tempting offer)</td></tr>
                        <tr><td>3</td><td>Reflection delayed half-beat</td></tr>
                        <tr><td>4</td><td class="warning">"Better" version (possession attempt)</td></tr>
                    </table>
                </div>

                <div class="table-section">
                    <h3>👻 Ghost Servant Fate (d6)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('ghost-fate')">🎲 Roll</button>
                        <div id="ghost-fate-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1</td><td class="critical">Permanently crystallized - conscious inside</td></tr>
                        <tr><td>2</td><td class="warning">Merged with mirror - can communicate through reflections</td></tr>
                        <tr><td>3</td><td>Dispersed - reforms in 1d4 days</td></tr>
                        <tr><td>4</td><td>Bound to party member - follows them</td></tr>
                        <tr><td>5</td><td class="safe">Unharmed - gains minor temporal sight</td></tr>
                        <tr><td>6</td><td class="warning">Split into 2 weaker versions</td></tr>
                    </table>
                </div>

                <div class="table-section">
                    <h3>🔮 Temporal Mark Effects (d8)</h3>
                    <div class="roll-table-container">
                        <button class="roll-btn" onclick="gm.rollTable('temporal-mark')">🎲 Roll</button>
                        <div id="temporal-mark-result" class="table-result"></div>
                    </div>
                    <table class="roll-table">
                        <tr><td>1</td><td>Mirrors always show 5 seconds ahead</td></tr>
                        <tr><td>2</td><td>Déjà vu triggers actual precognition (unreliable)</td></tr>
                        <tr><td>3</td><td class="warning">Ages 1 year per month until removed</td></tr>
                        <tr><td>4</td><td>Can sense when being observed through time</td></tr>
                        <tr><td>5</td><td>Dreams of future ritual uses (disturbing)</td></tr>
                        <tr><td>6</td><td class="warning">Occasionally phases slightly out of sync</td></tr>
                        <tr><td>7</td><td>Immune to memory modification</td></tr>
                        <tr><td>8</td><td class="critical">Becomes visible to chronomancers across time</td></tr>
                    </table>
                </div>
            </div>
        `;
        this.setContent('Roll Tables', content);
    }

    rollTable(tableId) {
        const tables = {
            'fire-sacrifice': {
                die: 6,
                results: [
                    { text: 'Bowser - Death or severe burns', class: 'critical' },
                    { text: 'Ghost Servant - Crystallizes permanently', class: 'warning' },
                    { text: 'Green T - ERASED completely', class: 'critical' },
                    { text: 'Random Toad - Civilian casualty', class: 'warning' },
                    { text: 'Oracle - Damaged, survives, anchored', class: 'warning' },
                    { text: "Player's Choice - Maximum guilt", class: 'critical' }
                ]
            },
            'timeline-shear': {
                die: 4,
                results: [
                    { text: 'LOOP - Scene 4 repeats, everyone remembers', class: 'warning' },
                    { text: 'ERASURE - Someone was never here', class: 'critical' },
                    { text: 'BRANCH - Two versions exist, must choose', class: 'warning' },
                    { text: 'ANCHOR SWAP - Oracle permanent, need new one', class: 'critical' }
                ]
            },
            'overflow': {
                die: 6,
                results: [
                    { text: 'Party Member - Gains temporal mark', class: 'warning' },
                    { text: 'Party Member - Gains temporal mark', class: 'warning' },
                    { text: 'Ghost Servant - Crystallizes permanently', class: '' },
                    { text: 'Ghost Servant - Crystallizes permanently', class: '' },
                    { text: 'Oracle - Becomes anchored, Legion interest', class: 'critical' },
                    { text: 'Oracle - Becomes anchored, Legion interest', class: 'critical' }
                ]
            },
            'waluigi': {
                die: 6,
                results: [
                    { text: 'Reflection stays behind in mirror', class: 'warning' },
                    { text: 'Mystery door appears somewhere', class: '' },
                    { text: 'WAH echoes for hours', class: '' },
                    { text: 'Everyone briefly looks like Waluigi', class: 'warning' },
                    { text: 'Minor prophecy gained (annoying but accurate)', class: 'safe' },
                    { text: 'Nothing happens. Waluigi disappointed.', class: 'safe' }
                ]
            },
            'left-behind': {
                die: 6,
                results: [
                    { text: "Reflection doesn't blink anymore", class: 'warning' },
                    { text: 'Shadow moves independently sometimes', class: 'warning' },
                    { text: 'Mirrors always show them from behind', class: '' },
                    { text: 'Can hear whispers in reflective surfaces', class: '' },
                    { text: 'Left a random memory in the mirror', class: 'warning' },
                    { text: 'Nothing obvious... for now', class: 'safe' }
                ]
            },
            'legion': {
                die: 6,
                results: [
                    { text: 'Signal outside forces - reinforcements coming', class: 'warning' },
                    { text: 'Attempt to grab Oracle physically', class: 'critical' },
                    { text: 'Break circle edge - sabotage attempt', class: 'warning' },
                    { text: 'Loud verbal challenge - interruption', class: '' },
                    { text: 'Target weakest-looking party member', class: 'warning' },
                    { text: 'Hesitate - waiting for better moment', class: 'safe' }
                ]
            },
            'party-member': {
                die: 4,
                results: [
                    { text: 'Archie (Ice Anchor)', class: '' },
                    { text: 'Bowser (Mass Anchor)', class: '' },
                    { text: 'Markop (Outer Ward)', class: '' },
                    { text: 'Waluigi (Chaos Sink)', class: '' }
                ]
            },
            'mirror-corridor': {
                die: 4,
                results: [
                    { text: 'Age correction - shows younger/older self', class: '' },
                    { text: 'Scars removed - tempting "healed" version', class: '' },
                    { text: 'Reflection delayed - moves half-beat late', class: '' },
                    { text: '"Better" version - possession attempt', class: 'warning' }
                ]
            },
            'ghost-fate': {
                die: 6,
                results: [
                    { text: 'Permanently crystallized - conscious inside', class: 'critical' },
                    { text: 'Merged with mirror - communicates through reflections', class: 'warning' },
                    { text: 'Dispersed - reforms in 1d4 days', class: '' },
                    { text: 'Bound to party member - follows them now', class: '' },
                    { text: 'Unharmed - gains minor temporal sight', class: 'safe' },
                    { text: 'Split into 2 weaker versions', class: 'warning' }
                ]
            },
            'temporal-mark': {
                die: 8,
                results: [
                    { text: 'Mirrors show 5 seconds ahead', class: '' },
                    { text: 'Déjà vu triggers actual precognition', class: '' },
                    { text: 'Ages 1 year per month until removed', class: 'warning' },
                    { text: 'Senses when observed through time', class: '' },
                    { text: 'Dreams of future ritual uses', class: '' },
                    { text: 'Occasionally phases out of sync', class: 'warning' },
                    { text: 'Immune to memory modification', class: 'safe' },
                    { text: 'Visible to chronomancers across time', class: 'critical' }
                ]
            }
        };

        const table = tables[tableId];
        if (!table) return;
        
        const roll = Math.floor(Math.random() * table.die) + 1;
        const resultIndex = tableId === 'overflow' ? roll - 1 : roll - 1;
        const result = table.results[Math.min(resultIndex, table.results.length - 1)];
        
        const resultDiv = document.getElementById(`${tableId}-result`);
        if (resultDiv) {
            resultDiv.innerHTML = `
                <span class="roll-number">[${roll}]</span> 
                <span class="${result.class}">${result.text}</span>
            `;
            resultDiv.classList.add('show');
            
            // Animation pulse
            resultDiv.style.animation = 'none';
            resultDiv.offsetHeight; // Trigger reflow
            resultDiv.style.animation = 'resultPulse 0.3s ease';
        }
    }

    // === NOTES SYSTEM ===
    showNotes() {
        const savedNotes = localStorage.getItem('ritualGMNotes') || '';
        const content = `
            <div class="notes-section">
                <h2>📝 Session Notes</h2>
                <textarea id="gm-notes" placeholder="Track what happened during the ritual...">${savedNotes}</textarea>
                <div class="notes-controls">
                    <button onclick="gm.saveNotes()">💾 Save Notes</button>
                    <button onclick="gm.clearNotes()">🗑️ Clear</button>
                    <button onclick="gm.exportNotes()">📤 Export</button>
                </div>
                
                <div class="quick-notes">
                    <h3>Quick Add:</h3>
                    <div class="quick-note-buttons">
                        <button onclick="gm.addQuickNote('🎲 Roll: ')">🎲 Roll</button>
                        <button onclick="gm.addQuickNote('✓ Check Passed: ')">✓ Pass</button>
                        <button onclick="gm.addQuickNote('✗ Check Failed: ')">✗ Fail</button>
                        <button onclick="gm.addQuickNote('⚠️ Integrity -1')">-1 Int</button>
                        <button onclick="gm.addQuickNote('✨ Integrity +1')">+1 Int</button>
                        <button onclick="gm.addQuickNote('🔥 FIRE CAST!')">🔥 Fire</button>
                        <button onclick="gm.addQuickNote('🗡️ Impostor revealed!')">🗡️ Impostor</button>
                        <button onclick="gm.addQuickNote('⏳ Timeline shear!')">⏳ Shear</button>
                    </div>
                </div>

                <div class="session-log">
                    <h3>Session Log:</h3>
                    <div id="session-log-content">
                        ${this.getSessionLog()}
                    </div>
                </div>
            </div>
        `;
        this.setContent('Session Notes', content);
    }

    saveNotes() {
        const notes = document.getElementById('gm-notes').value;
        localStorage.setItem('ritualGMNotes', notes);
        this.showToast('Notes saved!');
    }

    clearNotes() {
        if (confirm('Clear all notes?')) {
            document.getElementById('gm-notes').value = '';
            localStorage.removeItem('ritualGMNotes');
            this.showToast('Notes cleared');
        }
    }

    exportNotes() {
        const notes = document.getElementById('gm-notes').value;
        const blob = new Blob([notes], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ritual-notes-${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }

    addQuickNote(prefix) {
        const textarea = document.getElementById('gm-notes');
        const timestamp = new Date().toLocaleTimeString();
        textarea.value += `\n[${timestamp}] ${prefix}`;
        textarea.focus();
        textarea.scrollTop = textarea.scrollHeight;
        this.logEvent(prefix);
    }

    logEvent(event) {
        if (!this.sessionLog) this.sessionLog = [];
        this.sessionLog.push({
            time: new Date().toLocaleTimeString(),
            event: event,
            scene: this.state.currentScene,
            integrity: this.state.circleIntegrity
        });
        localStorage.setItem('ritualSessionLog', JSON.stringify(this.sessionLog));
    }

    getSessionLog() {
        const log = JSON.parse(localStorage.getItem('ritualSessionLog') || '[]');
        if (log.length === 0) return '<p class="empty">No events logged yet</p>';
        
        return log.map(entry => `
            <div class="log-entry">
                <span class="log-time">[${entry.time}]</span>
                <span class="log-scene">S${entry.scene}</span>
                <span class="log-event">${entry.event}</span>
                <span class="log-integrity">Int: ${entry.integrity}</span>
            </div>
        `).join('');
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    // === COMBAT TRACKER ===
    showCombat() {
        const content = `
            <div class="combat-tracker">
                <h2>⚔️ Combat in Fractured Time</h2>
                
                <div class="combat-warning">
                    <h3>⚠️ Special Rules Active:</h3>
                    <ul>
                        <li>Initiative doesn't work normally — moments overlap</li>
                        <li>Ranged attacks may hit past or future positions</li>
                        <li>Moving through circle center is FORBIDDEN</li>
                        <li>Breaking concentration triggers failure table</li>
                    </ul>
                </div>

                <div class="initiative-tracker">
                    <h3>Turn Order (Approximate)</h3>
                    <div id="initiative-list">
                        ${this.renderInitiativeList()}
                    </div>
                    <div class="init-controls">
                        <button onclick="gm.addCombatant()">+ Add</button>
                        <button onclick="gm.nextTurn()">Next Turn →</button>
                        <button onclick="gm.resetCombat()">Reset</button>
                    </div>
                </div>

                <div class="combat-effects">
                    <h3>🌀 Active Temporal Effects</h3>
                    <div class="effect-toggles">
                        <label><input type="checkbox" id="effect-slow"> Time Slowed (Archie active)</label>
                        <label><input type="checkbox" id="effect-overlap"> Moments Overlapping</label>
                        <label><input type="checkbox" id="effect-mirrors"> Mirrors Reactive</label>
                        <label><input type="checkbox" id="effect-unstable"> Circle Unstable</label>
                    </div>
                </div>

                <div class="combat-quick-rolls">
                    <h3>🎲 Quick Combat Rolls</h3>
                    <div class="combat-roll-grid">
                        <button onclick="gm.combatRoll('temporal-misfire')">Temporal Misfire</button>
                        <button onclick="gm.combatRoll('mirror-interference')">Mirror Interference</button>
                        <button onclick="gm.combatRoll('concentration-break')">Concentration Break</button>
                        <button onclick="gm.combatRoll('friendly-fire')">Friendly Fire Check</button>
                    </div>
                    <div id="combat-roll-result" class="combat-result"></div>
                </div>
            </div>
        `;
        this.setContent('Combat Tracker', content);
    }

    renderInitiativeList() {
        const combatants = this.state.combatants || [
            { name: 'Archie', init: 15, hp: 'Full', status: 'Channeling' },
            { name: 'Bowser', init: 12, hp: 'Full', status: 'Grounding' },
            { name: 'Markop', init: 18, hp: 'Full', status: 'Ready' },
            { name: 'Waluigi', init: 8, hp: 'Full', status: 'Being Still' },
            { name: 'Legion Spy #1', init: 14, hp: 'Unknown', status: 'Watching' },
            { name: 'Legion Spy #2', init: 11, hp: 'Unknown', status: 'Watching' }
        ];
        
        this.state.combatants = combatants;
        const sorted = [...combatants].sort((a, b) => b.init - a.init);
        
        return sorted.map((c, i) => `
            <div class="init-entry ${i === 0 ? 'active' : ''}">
                <span class="init-order">${c.init}</span>
                <span class="init-name">${c.name}</span>
                <span class="init-hp">${c.hp}</span>
                <span class="init-status">${c.status}</span>
                <button class="init-remove" onclick="gm.removeCombatant(${i})">×</button>
            </div>
        `).join('');
    }

    addCombatant() {
        const name = prompt('Combatant name:');
        if (!name) return;
        const init = parseInt(prompt('Initiative:') || '10');
        
        if (!this.state.combatants) this.state.combatants = [];
        this.state.combatants.push({ name, init, hp: 'Full', status: 'Active' });
        this.showCombat();
    }

    removeCombatant(index) {
        this.state.combatants.splice(index, 1);
        this.showCombat();
    }

    nextTurn() {
        // Rotate the active turn indicator
        this.showToast('Next turn');
    }

    resetCombat() {
        this.state.combatants = null;
        this.showCombat();
    }

    combatRoll(type) {
        const rolls = {
            'temporal-misfire': {
                die: 6,
                results: [
                    'Attack hits 1 round ago (no effect now)',
                    'Attack hits 1 round ahead (delayed damage)',
                    'Attack duplicates (hits twice, half damage each)',
                    'Attack phases through (miss, but scary)',
                    'Attacker briefly sees own death (WIS save or frightened)',
                    'Normal hit (somehow)'
                ]
            },
            'mirror-interference': {
                die: 4,
                results: [
                    'Reflection attacks instead (same stats, targets random)',
                    'Mirror absorbs attack (gone, but mirror cracks)',
                    'Attack reflected back (attacker takes damage)',
                    'Mirror shows attack landing (illusion, no real effect)'
                ]
            },
            'concentration-break': {
                die: 6,
                results: [
                    'Archie flickers (CON save or ice fails)',
                    'Bowser shifts (grounding weakens, -1 Integrity)',
                    'Oracle stutters (ritual pauses, tension rises)',
                    'Waluigi twitches (roll on Weirdness table)',
                    'Circle sparks (everyone takes 1d4 force)',
                    'Nothing (this time)'
                ]
            },
            'friendly-fire': {
                die: 4,
                results: [
                    'Hits nearest ally instead',
                    'Hits ritual circle edge (-1 Integrity)',
                    'Hits mirror (bad things incoming)',
                    'Hits nothing but everyone flinches'
                ]
            }
        };

        const table = rolls[type];
        const roll = Math.floor(Math.random() * table.die) + 1;
        const result = table.results[roll - 1];
        
        const resultDiv = document.getElementById('combat-roll-result');
        resultDiv.innerHTML = `
            <strong>${type.replace(/-/g, ' ').toUpperCase()}</strong><br>
            <span class="roll-number">[${roll}]</span> ${result}
        `;
        resultDiv.classList.add('show');
    }
}

// Initialize on load
let gm;
document.addEventListener('DOMContentLoaded', () => {
    gm = new GMSheet();
});