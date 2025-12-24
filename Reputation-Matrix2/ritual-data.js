// ============================================
// RAVENTREE RITUAL - DATA STRUCTURES
// ============================================

const RitualData = {
    
    // ========== CORE STATE ==========
    state: {
        integrity: 5,
        maxIntegrity: 5,
        safeguards: 3,
        maxSafeguards: 3,
        currentScene: 0,
        phase: 'PRE-RITUAL',
        flags: {
            impostor: false,
            greenT: false,
            pointOfNoReturn: false,
            impostorRevealed: false,
            fireWarning: false,
            legionMoved: false,
            combatActive: false
        },
        playerStatus: {
            archie: { prep: null, main: null, sustain: [null, null, null], fireResist: null },
            markop: { prep: null, position: null, defense: null },
            waluigi: { prep: null, stillness: [null, null, null], weirdCount: 0 },
            bowser: { prep: null, ground: null, mirror: null, sustain: [null, null, null, null] }
        },
        dcModifiers: {
            global: 0,
            archie: 0,
            bowser: 0,
            waluigi: 0,
            markop: 0
        }
    },

    // ========== SCENES ==========
    scenes: [
        {
            id: 0,
            name: "Approach to the Summoning Room",
            icon: "⏳",
            oracle: "No pauses once we enter. Hesitation desynchronizes intent.",
            description: "The corridor narrows. The Manor quiets in that way that means it's listening.",
            mirrorShows: [
                "Archie reflected slightly older",
                "Bowser reflected without scars", 
                "Dan reflected half a beat late"
            ],
            checks: [
                {
                    name: "Corridor Passage",
                    type: "Group",
                    dc: 12,
                    altDc: 14,
                    skill: "WIS Save",
                    altSkill: "Insight",
                    passEffect: "Move through quickly. No mirror interaction.",
                    failEffect: "Mirror attempts 'correction'. Minor possession attempt.",
                    consequence: "WIS Save DC 15 or minor possession. Oracle burns 1 safeguard."
                }
            ],
            triggers: ["Joke, stop, or stare too long → Mirror correction attempt"],
            phase: "PRE-RITUAL"
        },
        {
            id: 1,
            name: "The Last Check (Dan / Impostor)",
            icon: "🔍",
            oracle: "Truth binds circles. Lies rupture them. Speak now or bleed later.",
            description: "The Oracle stops before the threshold. Everyone feels it. The mirrors hum.",
            checks: [
                {
                    name: "Impostor Detection (Dan)",
                    type: "Individual",
                    dc: 18,
                    skill: "Insight",
                    altSkill: "Detect Magic (auto-pass if cast)",
                    passEffect: "Dan verified. Mirrors dim. +1 Circle Integrity.",
                    failEffect: "Status unknown. GM rolls secretly.",
                    integrityChange: { pass: 1, fail: 0 }
                }
            ],
            branches: [
                { condition: "Dan is Real", effect: "+1 Integrity, proceed normally" },
                { condition: "Dan is Impostor (undetected)", effect: "Betrayal triggers in Scene 4" },
                { condition: "Dan is Impostor (detected)", effect: "Immediate confrontation, -1 Integrity, ritual delayed" }
            ],
            phase: "PRE-RITUAL"
        },
        {
            id: 2,
            name: "Entering the Summoning Room",
            icon: "🔵",
            oracle: "Positions. Do not choose where you want to stand. Choose where you belong.",
            description: "The room is circular, etched with opposing sigils. Three anchor glyphs are cracked. One still breathes faintly.",
            positions: {
                north: { character: "Archie", role: "Stasis/Ice", required: true },
                south: { character: "Bowser", role: "Mass/Grounding", required: true },
                center: { character: "Oracle", role: "Voice", required: true },
                east: { character: "Others", role: "Balance", required: false },
                west: { character: "Others", role: "Balance", required: false }
            },
            checks: [
                {
                    name: "Position Intuition",
                    type: "Individual (each player)",
                    dc: 12,
                    skill: "Insight",
                    passEffect: "Character moves to correct node naturally.",
                    failEffect: "Must be directed by Oracle or guess."
                },
                {
                    name: "Bowser - Claim South Node",
                    type: "Individual",
                    dc: 12,
                    skill: "CON Check",
                    passEffect: "Floor sigils glow. Circle settles. +1 Integrity.",
                    failEffect: "Circle 'floats' slightly. +2 to all stability DCs. -1 Integrity.",
                    integrityChange: { pass: 1, fail: -1 }
                },
                {
                    name: "Markop - Strategic Positioning",
                    type: "Individual",
                    dc: 12,
                    skill: "INT (Tactics) or WIS (Insight) DC 14",
                    passEffect: "Perfect sightlines. +2 to reaction checks. Can protect 2 targets.",
                    failEffect: "Blind spot exists. Can only react to ONE threat."
                }
            ],
            phase: "RITUAL-ACTIVE"
        },
        {
            id: 3,
            name: "Archie Channels (Ice Anchor)",
            icon: "❄️",
            oracle: "Cold does not conquer. It preserves. Begin.",
            description: "Archie exhales. Frost creeps outward — slow, controlled. Mirrors ripple but do not flare.",
            checks: [
                {
                    name: "Ice Channeling (Archie)",
                    type: "Individual",
                    dc: 14,
                    altDc: 15,
                    skill: "Arcana",
                    altSkill: "CON Save",
                    passEffect: "Time viscosity increases. Everyone feels heavier. Outside sounds muffle.",
                    partialEffect: "Slight frost instability. -1 Circle Integrity. Ritual continues.",
                    failEffect: "Ice fractures into mirrors. Reflection bleed begins. Archie sees Fireball reflected.",
                    integrityChange: { pass: 0, partial: -1, fail: -2 }
                },
                {
                    name: "Fire Resistance (if ice fails)",
                    type: "Individual (Archie)",
                    dc: 18,
                    skill: "WIS Save",
                    passEffect: "Archie resists. Ice holds. Continue.",
                    failEffect: "CATASTROPHIC FAILURE. Fire cast mid-ritual.",
                    triggered: true,
                    triggerCondition: "Archie fails Ice Channeling"
                },
                {
                    name: "Waluigi Stillness Check",
                    type: "Individual",
                    dc: 12,
                    skill: "WIS Save",
                    passEffect: "Absorbs ambient chaos. +1 Integrity.",
                    failEffect: "Roll on Waluigi Weirdness table. -1 Integrity.",
                    integrityChange: { pass: 1, fail: -1 }
                },
                {
                    name: "Bowser Sustained Grounding",
                    type: "Individual",
                    dc: 10,
                    skill: "CON Save",
                    passEffect: "Grounding holds steady.",
                    failEffect: "+2 to all others' DCs this scene."
                }
            ],
            catastrophe: {
                trigger: "Archie fails WIS 18 after seeing Fireball reflection",
                name: "Fire Catastrophe",
                table: "fireSacrifice"
            },
            phase: "RITUAL-ACTIVE"
        },
        {
            id: 4,
            name: "The Oracle Speaks the Name",
            icon: "🕯️",
            oracle: "Raventree was never cursed. It remembered.",
            description: "The Oracle's voice changes. Not louder. Older. The sigils light. The mirrors lean in.",
            warning: "POINT OF NO RETURN",
            checks: [
                {
                    name: "Impostor Betrayal",
                    type: "Triggered",
                    triggered: true,
                    triggerCondition: "Impostor flag is set",
                    effect: "Betrayal happens NOW. Roll for consequences."
                },
                {
                    name: "Archie Sustained Channeling",
                    type: "Individual",
                    dc: 12,
                    skill: "CON Save",
                    modifier: "+2 DC per previous failure",
                    passEffect: "Ice continues to hold.",
                    failEffect: "Ice flickers. -1 Integrity. Must concentrate."
                },
                {
                    name: "Waluigi Stillness Check",
                    type: "Individual",
                    dc: 14,
                    skill: "WIS Save",
                    passEffect: "Absorbs ambient chaos. +1 Integrity.",
                    failEffect: "Roll on Waluigi Weirdness table. -1 Integrity."
                },
                {
                    name: "Bowser Mirror Confrontation",
                    type: "Individual",
                    dc: 15,
                    skill: "WIS Save",
                    passEffect: "'I earned these scars.' Mirror dims. +2 Integrity. Immune to mirror tricks.",
                    hesitateEffect: "Stares too long. -1 Integrity. Must repeat grounding check.",
                    failEffect: "Reaches toward reflection. -2 Integrity. Grounding compromised.",
                    integrityChange: { pass: 2, hesitate: -1, fail: -2 }
                }
            ],
            overflow: {
                trigger: "Circle Integrity drops below 2 during this scene",
                table: "overflow"
            },
            phase: "RITUAL-CRITICAL"
        },
        {
            id: 5,
            name: "The Audience Moves",
            icon: "⚔️",
            oracle: "Do not interrupt a man while he is editing history.",
            description: "Pernus shifts. Legion weapons click.",
            checks: [
                {
                    name: "Legion Interruption Timing",
                    type: "GM Decision",
                    options: [
                        { name: "Legion waits", effect: "Proceed to Scene 6" },
                        { name: "Legion moves early", effect: "Combat in fractured time" },
                        { name: "Legion signals outside", effect: "Reinforcements incoming" }
                    ]
                },
                {
                    name: "Markop Defense (if Legion moves)",
                    type: "Individual",
                    options: [
                        { name: "Intimidation", dc: 16, effect: "Legion hesitates 1 round" },
                        { name: "Physical Interception", dc: 14, skill: "Athletics/DEX", effect: "Block path, no violence yet" },
                        { name: "Diplomatic Delay", dc: 18, skill: "Persuasion", effect: "'30 more seconds' - Legion agrees" },
                        { name: "Initiate Combat", effect: "Effective but political consequences, +2 DC to Oracle" }
                    ]
                },
                {
                    name: "Archie Sustained Channeling",
                    type: "Individual",
                    dc: 14,
                    skill: "CON Save"
                },
                {
                    name: "Waluigi Stillness Check",
                    type: "Individual",
                    dc: 16,
                    skill: "WIS Save"
                },
                {
                    name: "Bowser Sustained Grounding",
                    type: "Individual",
                    dc: 12,
                    skill: "CON Save"
                }
            ],
            combat: {
                name: "Combat in Fractured Time",
                rules: [
                    "Initiative is unstable - reroll each round",
                    "Ranged attacks have 50% miss chance (time distortion)",
                    "Fire deals double damage to Circle Integrity",
                    "Each round of combat: -1 Integrity",
                    "If combat lasts 3+ rounds: Timeline Shear"
                ]
            },
            phase: "RITUAL-CRITICAL"
        },
        {
            id: 6,
            name: "Mirrors Go Dull",
            icon: "🪞",
            oracle: "It is done. Step back. Slowly.",
            description: "Not dark. Not shattered. Just... boring. That's the cue.",
            checks: [
                {
                    name: "Patient Exit",
                    type: "Group",
                    dc: 10,
                    skill: "WIS Save",
                    passEffect: "Clean exit. No lingering effects.",
                    failEffect: "Leaves something behind. Gains reflection that doesn't blink."
                }
            ],
            outcomes: {
                bestCase: [
                    "Subtle new perception",
                    "Temporal intuition", 
                    "Mirror immunity"
                ],
                worstCase: [
                    "Identity slippage",
                    "Remembered by things that shouldn't",
                    "Becoming future anchor"
                ]
            },
            phase: "RITUAL-COMPLETE"
        },
        // Add this scene to getSceneData() - insert it as Scene 7 (after Oracle Speaks, before Mirror Responds)
// This means you'll need to renumber scenes 7-10 to 8-11

// Scene 7: DAN'S CHOICE (The Betrayal Window)
{
    icon: '🦾',
    title: 'DAN\'S CHOICE',
    subtitle: 'The Question Moves',
    oracleQuote: 'Dan. The mirror sees you. What does it see you doing?',
    description: `
        <p>The ritual reaches its peak tension. The mirror focuses entirely on Dan.</p>
        <p>This is the moment. Dan has been passive. Dan has been the question.</p>
        <p>But questions can refuse to be answered.</p>
        <p class="critical">What does Dan do?</p>
    `,
    danChoice: true,
    choices: [
        {
            id: 'passive',
            name: 'Remain Passive',
            icon: '🧘',
            description: 'Dan stays still. Stays silent. Lets the mirror decide.',
            oracleResponse: 'Good. The question allows itself to be answered.',
            consequence: 'Proceed to Mirror Responds normally. The ritual determines Dan\'s nature.',
            mechanicalEffect: 'No additional checks. Mirror gives true answer.',
            nextScene: 8
        },
        {
            id: 'speak',
            name: 'Speak / Assert Identity',
            icon: '🗣️',
            description: 'Dan tries to prove himself. Claims to be real. Argues with the mirror.',
            oracleResponse: 'No! You fool — the mirror accepts performance as fact!',
            consequence: 'Dan has contaminated the answer. The mirror now shows what Dan WANTS to be true.',
            mechanicalEffect: 'Mirror locks current state as "true" — even if Dan is fake. Impostor potentially validated.',
            requiresCheck: {
                name: 'Undo Assertion',
                dc: 18,
                type: 'WIS Save DC 18',
                who: 'Oracle',
                description: 'Oracle attempts to re-open the question before it crystallizes',
                success: 'Question reopened. Proceed with -2 Integrity.',
                failure: 'Answer crystallized. Dan is "real" by declaration, not truth.'
            },
            nextScene: 8
        },
        {
            id: 'subtle',
            name: 'Subtle Manipulation',
            icon: '🕷️',
            description: 'Dan whispers. Suggests doubts. Tries to make others break position.',
            oracleResponse: 'He\'s trying to desynchronize you. Do not listen. Do not move.',
            consequence: 'Dan attempts to cause misfires by manipulating other participants.',
            mechanicalEffect: 'Each participant must WIS Save DC 14 or be affected by Dan\'s whispers.',
            requiresGroupCheck: {
                name: 'Resist Dan\'s Whispers',
                dc: 14,
                type: 'WIS Save DC 14',
                who: 'All participants except Dan',
                description: 'Resist the urge to react, move, or respond to Dan',
                perPersonFailure: 'That person shifts position. -1 Integrity per failure.',
                massFailure: 'If 4+ fail, ritual misfires. Partial severance. Two truths persist.'
            },
            nextScene: 8
        },
        {
            id: 'grab_control',
            name: 'Attempt to Seize Control',
            icon: '👑',
            description: 'Dan lunges for the mirror. Tries to overwrite the ritual. Grab power.',
            oracleResponse: 'HOLD POSITIONS! Let the ritual answer this!',
            consequence: 'Dan attempts to become the ritual\'s author instead of its subject.',
            mechanicalEffect: 'The ritual stress-tests Dan\'s legitimacy. Hard.',
            danCheck: {
                name: 'Temporal Authority',
                dc: 20,
                type: 'Automatic failure if Dan is fake',
                description: 'The ritual asks: From which timeline do you speak with authority?',
                ifFake: 'Dan has no timeline backing. The ritual uses him as proof of what must be severed. Dan is expelled/destroyed.',
                ifReal: 'Dan can attempt seizure but pays permanently. Roll on Tyrant\'s Price table.',
                ifRealSuccess: 'Dan bends the outcome but loses future versions of himself. Fixed to one outcome. Diminished.',
                ifRealFailure: 'Dan is rejected AND pays the price. Worst outcome.'
            },
            triggerFailure: 'dan_seizes',
            nextScene: 8
        },
        {
            id: 'collapse',
            name: 'Cause Total Collapse',
            icon: '💥',
            description: 'Dan doesn\'t want answers. Dan wants chaos. Break everything.',
            oracleResponse: 'He\'s trying to tangle the timelines! Stop — no, don\'t chase him!',
            consequence: 'Dan attempts to break the ritual entirely, preventing any answer.',
            mechanicalEffect: 'Collapse requires multiple failures. Dan alone cannot do it.',
            collapseRequirements: [
                'Dan breaks position (automatic)',
                'Someone chases Dan (participant choice)',
                'Mirror is touched (Dan attempts)',
                'Oracle timing disrupted (interrupt check)',
                'Panic spreads (squad stability)'
            ],
            collapseCheck: {
                name: 'Prevent Collapse',
                description: 'Party must prevent 3+ of 5 collapse conditions',
                conditions: [
                    { condition: 'Dan breaks position', automatic: true, preventable: false },
                    { condition: 'Someone chases', preventable: true, prevention: 'No one moves. Let the mirror answer.' },
                    { condition: 'Mirror touched', dc: 15, who: 'Markop or Waluigi intercept', prevention: 'Athletics/DEX DC 15 to intercept Dan before mirror' },
                    { condition: 'Oracle disrupted', dc: 14, who: 'Oracle', prevention: 'CON Save DC 14 to maintain concentration despite chaos' },
                    { condition: 'Panic spreads', dc: 13, who: 'Rodger\'s Squad', prevention: 'Group WIS Save DC 13 to hold discipline' }
                ]
            },
            triggerFailure: 'ritual_collapse',
            nextScene: 8
        }
    ],
    rollTables: [
        {
            name: 'Tyrant\'s Price (Real Dan seizes control)',
            id: 'tyrant-price',
            die: 6,
            note: 'Only roll if Dan is REAL and attempts seizure',
            results: [
                { roll: 1, text: 'Future Burn: Dan loses all future versions of himself', effect: 'No alternate timelines. No "what ifs." This Dan is the only Dan forever.' },
                { roll: 2, text: 'Fixed Point: Dan becomes unchangeable', effect: 'Cannot grow, learn, or change. Personality locked at this moment.' },
                { roll: 3, text: 'Diminished: Dan sacrifices part of himself', effect: 'Lose 1d4 from a random ability score permanently.' },
                { roll: 4, text: 'Marked: Reality marks Dan as a tyrant', effect: 'All truth-magic automatically targets Dan first. Forever.' },
                { roll: 5, text: 'Hollow Victory: Dan wins but feels nothing', effect: 'Emotional capacity permanently reduced. Cannot feel triumph.' },
                { roll: 6, text: 'Acceptable Price: Dan pays but remains mostly intact', effect: 'Lose 1 level. Gain permanent mirror-sight. Fair trade?' }
            ]
        },
        {
            name: 'Whisper Effects (What Dan says)',
            id: 'whisper-effects',
            die: 6,
            note: 'What Dan whispers to destabilize participants',
            results: [
                { roll: 1, text: '"Archie, fire would end this faster..."', effect: 'Archie WIS DC 16 or fire temptation' },
                { roll: 2, text: '"Rodger, your squad is in danger..."', effect: 'Rodger WIS DC 14 or looks away from Oracle' },
                { roll: 3, text: '"Hjumpik, this is your moment..."', effect: 'Hjumpik WIS DC 12 or flips early' },
                { roll: 4, text: '"The Oracle is lying to all of you..."', effect: 'All participants WIS DC 13 or doubt flickers' },
                { roll: 5, text: '"Waluigi, do something unexpected..."', effect: 'Waluigi CHA DC 14 or chaos spikes' },
                { roll: 6, text: '"This ritual was never going to save anyone..."', effect: 'Morale damage. -1 to all saves this scene.' }
            ]
        },
        {
            name: 'Collapse Consequences',
            id: 'collapse-consequences',
            die: 6,
            note: 'What happens if ritual collapses',
            results: [
                { roll: 1, text: 'Timeline Tangle: Everyone slightly out of sync', effect: 'Living with reality jet lag. Relationships warp. Trust corrodes.' },
                { roll: 2, text: 'Memory Fracture: History disagrees with itself', effect: 'Each person remembers the ritual differently. Arguments forever.' },
                { roll: 3, text: 'Partial Severance: Cut half-complete', effect: 'Dan is "maybe" real. Two truths persist. Civil war fuel.' },
                { roll: 4, text: 'Mirror Shatter: Physical and metaphorical', effect: 'Shards scatter. Each person carries a piece. Connected forever.' },
                { roll: 5, text: 'Temporal Stutter: The ritual tries to restart', effect: 'Groundhog moment. Must redo from Scene 6. Everyone remembers.' },
                { roll: 6, text: 'Void Touch: The collapse draws attention', effect: 'Something from outside noticed. It\'s coming. Eventually.' }
            ]
        },
        {
            name: 'Fake Dan Destruction',
            id: 'fake-dan-destruction',
            die: 6,
            note: 'What happens when fake Dan is exposed by seizure attempt',
            results: [
                { roll: 1, text: 'Dissolved: Dan collapses into mirror-fragments', effect: 'No body. Just shards of reflection scattering.' },
                { roll: 2, text: 'Expelled: Dan hurled out of ritual space', effect: 'Through wall, physically. Takes 4d6 damage.' },
                { roll: 3, text: 'Revealed: Dan\'s true form shown', effect: 'Everyone sees what Dan actually is. Horror check WIS DC 14.' },
                { roll: 4, text: 'Absorbed: Mirror takes Dan', effect: 'Dan now exists only in reflections. Can communicate but not escape.' },
                { roll: 5, text: 'Burned: Ritual energy incinerates the fake', effect: 'Fire damage to fake Dan. Nothing left.' },
                { roll: 6, text: 'Answers Given: The fake\'s destruction reveals real Dan\'s location', effect: 'Ritual provides coordinates/visions of where real Dan is.' }
            ]
        }
    ],
    special: `
        <div class="dan-choice-section">
            <h4>🎭 GM: This Scene is Player-Driven</h4>
            <p>Ask Dan's player directly: <strong>"The mirror is looking at you. What do you do?"</strong></p>
            <p>If Dan is an NPC or the player is uncertain, use Dan's established character to decide.</p>
            <p>If Dan is secretly an impostor (GM knowledge), the impostor may choose based on its goals.</p>
            
            <div class="dan-truth-box">
                <h5>What Is Dan?</h5>
                <p>The GM should know (or decide now) which of these is true:</p>
                <ul>
                    <li><strong>Real Dan:</strong> Seizure possible but costly. Passive is safe.</li>
                    <li><strong>Fake Dan (Fragment):</strong> Seizure auto-fails. Subtle manipulation possible.</li>
                    <li><strong>Fake Dan (Impostor):</strong> Will likely try subtle or collapse. Seizure destroys it.</li>
                    <li><strong>Liminal Dan:</strong> Neither fully real nor fake. Results unpredictable.</li>
                </ul>
            </div>
        </div>
        
        <div class="hidden-safeguard">
            <h4>🔐 The Hidden Safeguard</h4>
            <p>Remind players of this truth:</p>
            <blockquote>
                "Accusation empowers parasites. Stillness starves them.<br>
                If Dan moves, no one chases. No one shouts. No one breaks position.<br>
                Let the mirror answer."
            </blockquote>
            <p>The ritual does not reward clever villains. It rewards alignment, patience, and witnesses who refuse to blink.</p>
        </div>
    `,
    checks: []
},
    ],

    // ========== ROLL TABLES ==========
    rollTables: {
        fireSacrifice: {
            name: "🔥 Fire Catastrophe Sacrifice Target",
            die: 6,
            results: [
                { roll: 1, result: "Nearest party member (Bowser)", effect: "Death or severe burns", severity: "critical" },
                { roll: 2, result: "Ghost servant", effect: "Crystallizes permanently", severity: "high" },
                { roll: 3, result: "Green T (if present)", effect: "Erased. Maximum guilt.", severity: "critical" },
                { roll: 4, result: "Random Toad", effect: "Civilian casualty", severity: "high" },
                { roll: 5, result: "Oracle", effect: "Takes damage, survives, becomes anchored. Legion interest spikes.", severity: "high" },
                { roll: 6, result: "Player's choice", effect: "Worst guilt. They decide who.", severity: "critical" }
            ]
        },
        overflow: {
            name: "⏳ Overflow Target",
            die: 6,
            results: [
                { roll: [1, 2], result: "Party member", effect: "Absorbs overflow. Gains temporal mark.", severity: "medium" },
                { roll: [3, 4], result: "Ghost servant", effect: "Crystallizes permanently.", severity: "high" },
                { roll: [5, 6], result: "Oracle", effect: "Takes burden. Survives. Becomes anchored. Legion interest spikes.", severity: "high" }
            ]
        },
        waluigiWeird: {
            name: "🟣 Waluigi Weirdness",
            die: 6,
            results: [
                { roll: 1, result: "Reflection stays behind", effect: "A reflection of Waluigi stays behind in a mirror", consequence: "Future Problem", severity: "medium" },
                { roll: 2, result: "Mystery door", effect: "A door that shouldn't exist appears somewhere", consequence: "Mystery Hook", severity: "low" },
                { roll: 3, result: "WAH echo", effect: "Someone hears 'WAH' echo for hours", consequence: "Annoying", severity: "low" },
                { roll: 4, result: "Everyone is Waluigi", effect: "All mirrors briefly show everyone as Waluigi", consequence: "Disturbing", severity: "medium" },
                { roll: 5, result: "Minor prophecy", effect: "Waluigi gains minor prophecy (annoying but accurate)", consequence: "Boon?", severity: "low" },
                { roll: 6, result: "Nothing", effect: "Nothing happens. Waluigi is disappointed.", consequence: "Safe", severity: "none" }
            ]
        },
        mirrorCorrection: {
            name: "🪞 Mirror Correction Attempt",
            die: 6,
            results: [
                { roll: 1, result: "Age shift", effect: "Character appears 10 years older/younger in all reflections for 24 hours", severity: "low" },
                { roll: 2, result: "Scar removal", effect: "A meaningful scar disappears temporarily - unsettling", severity: "medium" },
                { roll: 3, result: "Delay", effect: "Reflection moves half a beat late permanently", severity: "medium" },
                { roll: 4, result: "Possession attempt", effect: "WIS DC 15 or mirror entity hitchhikes", severity: "high" },
                { roll: 5, result: "Memory bleed", effect: "Gain fragmented memories of alternate self", severity: "medium" },
                { roll: 6, result: "Eye contact", effect: "Reflection makes eye contact when character looks away", severity: "high" }
            ]
        },
        legionAction: {
            name: "⚔️ Legion Action",
            die: 6,
            results: [
                { roll: 1, result: "Hold position", effect: "Legion maintains observation only", severity: "none" },
                { roll: 2, result: "Signal sent", effect: "Message dispatched to Legion command", severity: "medium" },
                { roll: 3, result: "Demand pause", effect: "Pernus demands ritual halt for 'inspection'", severity: "medium" },
                { roll: 4, result: "Grab witness", effect: "Legion attempts to seize a Toad as 'evidence'", severity: "high" },
                { roll: 5, result: "Weapons drawn", effect: "Legion draws weapons, threatens Oracle", severity: "high" },
                { roll: 6, result: "Full intervention", effect: "Legion attempts to physically stop ritual", severity: "critical" }
            ]
        },
        ritualComplication: {
            name: "💀 Ritual Complication",
            die: 8,
            results: [
                { roll: 1, result: "Mirror crack", effect: "One mirror develops a crack. Unstable.", severity: "low" },
                { roll: 2, result: "Candle flicker", effect: "Candles begin guttering. +1 DC to all checks.", severity: "medium" },
                { roll: 3, result: "Temperature spike", effect: "Room grows hot suddenly. Archie's ice strains.", severity: "medium" },
                { roll: 4, result: "Voice echo", effect: "Oracle's words echo wrong. -1 Integrity.", severity: "medium" },
                { roll: 5, result: "Ground tremor", effect: "Minor shake. Bowser must re-ground.", severity: "medium" },
                { roll: 6, result: "Something watches", effect: "All participants feel observed. WIS DC 12 or distracted.", severity: "medium" },
                { roll: 7, result: "Blood appears", effect: "Someone is bleeding. No wound visible.", severity: "high" },
                { roll: 8, result: "Name spoken", effect: "Someone's true name is whispered by mirrors.", severity: "high" }
            ]
        },
        timelineShear: {
            name: "⏳ Timeline Shear Effects",
            die: 6,
            results: [
                { roll: 1, result: "Loop fragment", effect: "Someone repeats their last action involuntarily", severity: "medium" },
                { roll: 2, result: "Future echo", effect: "Party glimpses consequence 1 hour ahead", severity: "low" },
                { roll: 3, result: "Past bleed", effect: "Dead NPC briefly visible in mirrors", severity: "medium" },
                { roll: 4, result: "Age slip", effect: "Random character ages/de-ages 1d10 years temporarily", severity: "high" },
                { roll: 5, result: "Memory insertion", effect: "Everyone gains memory of event that didn't happen", severity: "high" },
                { roll: 6, result: "Person unwritten", effect: "NPC written out. Roll to see who remembers.", severity: "critical" }
            ]
        }
    },

    // ========== CHARACTERS ==========
    players: {
        archie: {
            name: "Archie (FNG)",
            icon: "❄️",
            role: "Ice Anchor",
            node: "NORTH",
            importance: "CRITICAL",
            function: "Stasis Controller - Slows time within circle",
            oracleQuote: "Cold does not conquer. It preserves. You are not freezing time — you are asking it to wait.",
            mirrorShows: "Reflected slightly older",
            forbidden: "FIRE IS FORBIDDEN",
            checks: {
                prep: { name: "Mental Preparation", dc: 12, skill: "WIS Save", bonus: "+2 to all Ice checks" },
                main: { name: "Ice Channeling", dc: 14, skill: "Arcana or CON DC 15" },
                fireResist: { name: "Fire Resistance", dc: 18, skill: "WIS Save", triggered: true }
            },
            sustain: { dc: 12, skill: "CON Save", modifier: "+2 per previous failure" },
            failureEffects: [
                { condition: "Wrong Position", effect: "+5 to all fire resistance DCs, -1 Integrity" },
                { condition: "Late Arrival", effect: "-2 Integrity, must rush channeling (+3 DC)" },
                { condition: "Absent", effect: "RITUAL CANNOT PROCEED" },
                { condition: "Casts Fire", effect: "Someone dies. Guild excommunication." }
            ]
        },
        markop: {
            name: "Markop",
            icon: "⚔️",
            role: "Outer Ward",
            node: "PERIMETER",
            importance: "MEDIUM",
            function: "Circle Protector - Intercepts threats before they reach ritual",
            oracleQuote: "The circle is fragile. You are not. Stand where breaking happens.",
            checks: {
                prep: { name: "Threat Assessment", dc: 14, skill: "Perception", bonus: "Advantage on first defensive action" },
                position: { name: "Strategic Positioning", dc: 12, skill: "INT (Tactics) or WIS (Insight) DC 14" }
            },
            defenseOptions: [
                { name: "Intimidating Presence", dc: 16, skill: "Intimidation", effect: "Legion hesitates 1 round" },
                { name: "Physical Interception", dc: 14, skill: "Athletics or DEX DC 15", effect: "Blocks path, no violence" },
                { name: "Diplomatic Delay", dc: 18, skill: "Persuasion", effect: "Legion agrees to 30 seconds" },
                { name: "Initiate Combat", dc: null, effect: "Political fallout, +2 DC to Oracle" }
            ],
            failureEffects: [
                { condition: "Bad Position", effect: "Can only protect ONE person when Legion moves" },
                { condition: "Failed to Stop Legion", effect: "Interruption before Scene 6 = Timeline Shear" },
                { condition: "Late Arrival", effect: "No defender, Legion has free action" },
                { condition: "Absent", effect: "-2 Circle Integrity, auto-interruption in Scene 5" }
            ]
        },
        waluigi: {
            name: "Waluigi",
            icon: "🟣",
            role: "Chaos Sink",
            node: "WEST",
            importance: "SPECIAL",
            function: "Entropy Absorber - Absorbs chaotic energy by being the most chaotic thing in the room",
            oracleQuote: "You. Stand there. Do not... do the thing. Whatever thing you're thinking. Don't.",
            warning: "The Manor LIKES him. That's terrifying.",
            challenge: "Hardest task is to be BORING. Absorb chaos, not create it.",
            checks: {
                prep: { name: "Contain the Wah", dc: 10, skill: "CHA Save", effect: "Enters quietly. Oracle relieved." }
            },
            stillness: { dc: 12, skill: "WIS Save", modifier: "+2 per failure" },
            chaosSurge: {
                name: "Chaos Surge (Emergency)",
                dc: 15,
                skill: "CHA Check",
                controlled: "+3 Integrity, stabilize ONE failed check, Waluigi exhausted",
                uncontrolled: "Roll d6 TWICE on weirdness, -2 Integrity, something MEMORABLE"
            },
            failureEffects: [
                { condition: "Did a Thing", effect: "Roll on weirdness table, -1 Integrity per occurrence" },
                { condition: "Late Arrival", effect: "Mirrors briefly reactivate, -1 Integrity, loose thread" },
                { condition: "Absent", effect: "Chaos has nowhere to go. +3 to ALL DCs, random weird events" }
            ]
        },
        bowser: {
            name: "Bowser",
            icon: "🐢",
            role: "Mass Anchor",
            node: "SOUTH",
            importance: "CRITICAL",
            function: "Physical Grounding - Anchors circle to physical reality",
            oracleQuote: "You are the mountain. Mountains do not move. Mountains do not doubt. Be heavy. Be still. Be here.",
            mirrorShows: "Reflected without scars (younger, before everything went wrong)",
            mirrorWhispers: "You could go back. This is what you were.",
            checks: {
                prep: { name: "Grounding Meditation", dc: 10, skill: "WIS Save", bonus: "Advantage on first grounding check" },
                ground: { name: "Claim South Node", dc: 12, skill: "CON Check" },
                mirror: { name: "Mirror Confrontation", dc: 15, skill: "WIS Save" }
            },
            sustain: { dc: 10, skill: "CON Save", modifier: "+2 if hesitated at mirror" },
            holdTheLine: {
                name: "Hold the Line (Emergency)",
                dc: 18,
                skill: "CON Save",
                damage: "2d6 psychic regardless of result",
                success: "Integrity returns to 3, gain 'Unshakeable' trait",
                failure: "Additional 2d6 damage, knocked prone, Integrity to 0"
            },
            failureEffects: [
                { condition: "Wrong Position", effect: "+2 to all DCs, circle 'floats', -1 Integrity" },
                { condition: "Late Arrival", effect: "-2 Integrity, must rush grounding (+3 DC)" },
                { condition: "Failed Grounding", effect: "Others' checks become harder (+2 DC)" },
                { condition: "Absent", effect: "RITUAL CANNOT PROCEED — no physical anchor" }
            ]
        }
    },

    // ========== SUPPORT NPCs ==========
    supportNPCs: {
        dan: {
            name: "Dan",
            icon: "🔍",
            role: "Possible Impostor",
            importance: "CRITICAL",
            position: "MUST BE VERIFIED",
            effect: "If impostor: betrayal at peak energy. If real: stability +1.",
            checks: [{ name: "Impostor Detection", dc: 18, skill: "Insight or Detect Magic" }]
        },
        remi: {
            name: "Remi",
            icon: "🐕",
            role: "Engineer / Mechanical Stabilizer",
            importance: "HIGH",
            position: "Tech Counterweight to Legion",
            notes: "Injuries may slow movement. Political importance."
        },
        hjumpik: {
            name: "Hjumpik",
            icon: "🐸",
            role: "Balancing Node",
            importance: "MEDIUM",
            position: "Stability Support",
            notes: "Reliable. Good for balance."
        },
        rodger: {
            name: "Rodger",
            icon: "🛡️",
            role: "Guard / Witness",
            importance: "LOW",
            position: "Balancing Node",
            notes: "Steady presence. Good for stability."
        },
        toadburt: {
            name: "Toadburt",
            icon: "🍄",
            role: "Witness / Backup",
            importance: "MEDIUM",
            position: "Emergency Replacement",
            notes: "Can substitute for missing witnesses. Loyal."
        },
        oracle: {
            name: "The Oracle",
            icon: "🧙‍♂️",
            role: "Chronomancer / Voice",
            importance: "CRITICAL",
            position: "CENTER (REQUIRED)",
            notes: "Speaks the true-name. Cannot be replaced."
        },
        eager: {
            name: "Eager",
            icon: "✨",
            role: "Enthusiast",
            importance: "LOW",
            position: "Emotional Stabilizer",
            notes: "Genuine belief helps. Skepticism hurts."
        },
        toads: {
            name: "Toads (Guard/Scout/Helper)",
            icon: "🍄",
            role: "Civilian Anchors",
            importance: "MEDIUM",
            position: "Reality Weight",
            notes: "Civilians matter. They anchor reality by existing normally."
        }
    },

    // ========== OBSERVERS/THREATS ==========
    observers: {
        legionSpy1: {
            name: "Legion Spy #1",
            icon: "👁️",
            role: "Observer / Threat",
            importance: "THREAT",
            position: "Potential Interrupter",
            notes: "Watching for evidence. May signal Legion forces.",
            actions: [
                "Observe silently",
                "Signal to Spy #2",
                "Report to Pernus",
                "Attempt intervention"
            ]
        },
        legionSpy2: {
            name: "Legion Spy #2",
            icon: "👁️",
            role: "Observer / Threat",
            importance: "THREAT",
            position: "Potential Interrupter",
            notes: "Backup for Spy #1. May act independently.",
            actions: [
                "Maintain cover",
                "Independent action",
                "Coordinate with Spy #1",
                "Emergency extraction"
            ]
        },
        smokinAl: {
            name: "Smokin' Al",
            icon: "🚬",
            role: "Wild Card Observer",
            importance: "UNKNOWN",
            position: "Unknown Allegiance",
            notes: "Motives unclear. May help or hinder.",
            actions: [
                "Continue smoking, watching",
                "Cryptic comment",
                "Unexpected assistance",
                "Disappear at critical moment"
            ]
        },
        magesGuild: {
            name: "Mages Guild Member",
            icon: "🔮",
            role: "Official Observer",
            importance: "POLITICAL",
            position: "Witness for Guild",
            notes: "Here to verify Oracle actions. Political consequences.",
            actions: [
                "Document everything",
                "Demand explanation",
                "Support Oracle",
                "Report to Guild council"
            ]
        }
    },

    // ========== FAILURE TREES ==========
    failureTrees: {
        fireCatastrophe: {
            name: "🔥 Fire Casting Catastrophe",
            trigger: "Archie fails WIS 18 after overextending",
            steps: [
                "Ice channeling fails or is interrupted",
                "Archie sees Fireball reflected in fractured ice",
                "Must make WIS DC 18 to resist casting",
                "On failure: Fire is cast mid-ritual",
                "Roll d6 on Fire Sacrifice table",
                "Result dies or is permanently affected",
                "Ritual technically succeeds but at terrible cost",
                "Guild excommunication for Archie"
            ],
            consequences: [
                "Permanent character death or maiming",
                "Massive guilt for Archie",
                "Political fallout with Mages Guild",
                "Oracle becomes more isolated"
            ]
        },
        impostorBetrayal: {
            name: "🗡️ Impostor Betrayal",
            trigger: "Dan is impostor AND reaches Scene 4 undetected",
            steps: [
                "Oracle speaks the Name",
                "Peak ritual energy achieved",
                "Impostor-Dan acts immediately",
                "Circle Integrity drops by 2",
                "Mirrors 'reassign' an innocent (random target)",
                "Real Dan (if exists) is in danger",
                "Combat may begin in fractured time"
            ],
            consequences: [
                "Innocent reassigned to mirror-space",
                "Real Dan may be lost",
                "Trust issues for party",
                "Legion may use chaos to intervene"
            ]
        },
        timelineShear: {
            name: "⏳ Timeline Shear",
            trigger: "Oracle interrupted before Scene 6 OR Circle Integrity hits 0",
            steps: [
                "Ritual energy has nowhere to go",
                "Time fractures locally",
                "Roll on Timeline Shear table",
                "Effects may be temporary or permanent",
                "Someone may be 'unwritten'",
                "Oracle takes severe strain"
            ],
            consequences: [
                "NPC erased from timeline",
                "Memory inconsistencies for party",
                "Temporal mark on random character",
                "Manor's attention intensifies"
            ]
        },
        noGreenT: {
            name: "🟢 No Green T - Circle Hunts",
            trigger: "Green T is absent AND Circle Integrity drops below 2",
            steps: [
                "Excess ritual energy needs an anchor",
                "Circle begins 'hunting' for anchor",
                "Roll d6 on Overflow table",
                "Selected target absorbs energy",
                "Target gains temporal mark",
                "May become future anchor for Manor"
            ],
            consequences: [
                "Character becomes partially attuned to Manor",
                "Future plot hook: Manor can 'call' them",
                "Oracle guilt increases",
                "New vulnerability created"
            ]
        },
        positionErrors: {
            name: "📍 Position Errors",
            trigger: "Required positions not filled correctly",
            steps: [
                "Circle lacks proper balance",
                "All DCs increase by 2",
                "Pernus notices and smirks",
                "Ritual proceeds but strained",
                "Higher chance of complications"
            ],
            consequences: [
                "Pernus gains political leverage",
                "Future rituals more difficult",
                "Legion report includes 'incompetence'",
                "Oracle reputation damaged"
            ]
        }
    },

    // ========== QUICK REFERENCE ==========
    quickRef: {
        rules: [
            "No pauses. Hesitation desynchronizes intent.",
            "Truth binds circles. Lies rupture them.",
            "Cold preserves. Fire destroys.",
            "The circle is fragile. The participants are not.",
            "If someone screams, bleeds, or vanishes: DO NOT BREAK FORMATION.",
            "Intervention breaks synchronization faster than death."
        ],
        ritualRoles: [
            { role: "Anchor", desc: "Physically resilient, proven under strain. Keeps ritual tied to real world." },
            { role: "Bearer", desc: "Carries sanctioned power (Star Shard). Authorizes exchange." },
            { role: "Witness", desc: "Has seen Empire's truth and survived. Memory stabilizes what's revealed." },
            { role: "Vector", desc: "Altered by the zone. Allows signal to pass without tearing space." }
        ],
        mirrorRules: [
            "Mirror reflects intent, not bodies",
            "Multiple intents = recursive feedback",
            "If anyone sees themselves CLEARLY, ritual aborts",
            "Mirror is pressure membrane, not doorway",
            "When mirrors show structures (towers, eyes, roots) = success"
        ],
        integrityEffects: [
            { level: 5, effect: "Optimal. All checks at normal DC." },
            { level: 4, effect: "Stable. Minor strain visible." },
            { level: 3, effect: "Strained. +1 to all DCs." },
            { level: 2, effect: "Critical. +2 to all DCs. Overflow possible." },
            { level: 1, effect: "Failing. +3 to all DCs. Emergency measures available." },
            { level: 0, effect: "CATASTROPHE. Timeline Shear imminent." }
        ],
        successIndicators: [
            "Mirror stops reflecting faces, shows structures",
            "Candles extinguish in reverse order",
            "Mirror closes without being touched",
            "Someone collapses (expected)"
        ],
        failureIndicators: [
            "Someone tries to close mirror manually",
            "Mirrors show everyone clearly",
            "Fire appears in any form",
            "Combat lasts more than 3 rounds"
        ]
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RitualData;
}