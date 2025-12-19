// ============================================
// RAVENTREE RITUAL - CHARACTER & SCENE DATA
// ============================================

const CHARACTERS = {
    // GROUP A - Support Team
    groupA: [
        {
            id: 'markop',
            name: 'Markop',
            emoji: '⚔️',
            role: 'Balancing Node',
            ritualRole: 'Witness / Secondary Stabilizer',
            importance: 'medium',
            notes: 'Combat capable. Can protect circle if needed.',
            failureIfAbsent: 'Minor stability loss (-1 Integrity)',
            failureIfLate: 'Reduced protection capacity',
            specialChecks: []
        },
        {
            id: 'remi',
            name: 'Remi',
            emoji: '🐕',
            role: 'Engineer / Mechanical Stabilizer',
            ritualRole: 'Tech Counterweight to Legion',
            importance: 'high',
            notes: 'Injuries may slow movement. Political importance.',
            failureIfAbsent: 'No tech counterweight. Legion narrative advantage. "Their engineer fled."',
            failureIfLate: 'Reduced credibility. Mages say "unprepared."',
            specialChecks: [
                { name: 'Injury Check', dc: 12, type: 'CON', consequence: 'Arrives late' }
            ]
        },
        {
            id: 'waluigi',
            name: 'Waluigi',
            emoji: '🟣',
            role: 'Chaos Element',
            ritualRole: 'Reality Anchor (ironic)',
            importance: 'special',
            notes: 'Narratively unstable. Manor LIKES him. Bad.',
            failureIfAbsent: 'Mirrors become unpredictable. Jokes may manifest.',
            failureIfLate: 'Mirrors reactivate. Joke becomes rule. Loose thread.',
            specialChecks: [
                { name: 'Weirdness Resistance', dc: 10, type: 'CHA', consequence: 'Roll on Waluigi table' }
            ]
        },
        {
            id: 'rodger',
            name: 'Rodger',
            emoji: '🛡️',
            role: 'Guard / Witness',
            ritualRole: 'Balancing Node',
            importance: 'low',
            notes: 'Steady presence. Good for stability.',
            failureIfAbsent: 'Minor: one less balancing point',
            failureIfLate: 'Negligible unless stacked',
            specialChecks: []
        },
        {
            id: 'toad1',
            name: 'Toad (Guard)',
            emoji: '🍄',
            role: 'Civilian Anchor',
            ritualRole: 'Reality Weight',
            importance: 'medium',
            notes: 'Civilians matter. They anchor reality by existing normally.',
            failureIfAbsent: 'Cumulative with other Toads. 3 absent = -2 Integrity.',
            failureIfLate: 'Circle compensates by drawing more from Archie.',
            specialChecks: []
        },
        {
            id: 'toad2',
            name: 'Toad (Scout)',
            emoji: '🍄',
            role: 'Civilian Anchor',
            ritualRole: 'Reality Weight',
            importance: 'medium',
            notes: 'Civilians matter. They anchor reality by existing normally.',
            failureIfAbsent: 'Cumulative with other Toads.',
            failureIfLate: 'Circle compensates.',
            specialChecks: []
        },
        {
            id: 'toad3',
            name: 'Toad (Helper)',
            emoji: '🍄',
            role: 'Civilian Anchor',
            ritualRole: 'Reality Weight',
            importance: 'medium',
            notes: 'Civilians matter. They anchor reality by existing normally.',
            failureIfAbsent: 'Cumulative with other Toads.',
            failureIfLate: 'Circle compensates.',
            specialChecks: []
        },
        {
            id: 'eager',
            name: 'Eager',
            emoji: '✨',
            role: 'Enthusiast',
            ritualRole: 'Emotional Stabilizer',
            importance: 'low',
            notes: 'Genuine belief helps. Skepticism hurts.',
            failureIfAbsent: 'Minor emotional instability',
            failureIfLate: 'Others may doubt more',
            specialChecks: [
                { name: 'Faith Check', dc: 8, type: 'WIS', consequence: 'Provides +1 to group checks' }
            ]
        }
    ],
    
    // GROUP B - Ritual Core
    groupB: [
        {
            id: 'dan',
            name: 'Dan',
            emoji: '🔍',
            role: 'Possible Impostor',
            ritualRole: 'MUST BE VERIFIED',
            importance: 'critical',
            notes: 'If impostor: betrayal at peak energy. If real: stability +1.',
            failureIfAbsent: 'Actually good if impostor. Bad if real Dan needed.',
            failureIfLate: 'Suspicion increases. Mirrors react.',
            specialChecks: [
                { name: 'Impostor Detection', dc: 18, type: 'Insight', consequence: 'If failed: unknown status' },
                { name: 'Detect Magic', dc: 'auto', type: 'Spell', consequence: 'Reveals impostor nature' }
            ],
            impostorBranch: {
                ifReal: 'Mirrors dim. +1 Circle Integrity. Trust established.',
                ifImpostor: 'Betrayal triggers at Scene 4. Mirror reassigns innocent victim.',
                ifUnknown: 'GM rolls secretly: 1-10 real, 11-20 impostor.'
            }
        },
        {
            id: 'hjumpik',
            name: 'Hjumpik',
            emoji: '🐸',
            role: 'Balancing Node',
            ritualRole: 'Stability Support',
            importance: 'medium',
            notes: 'Reliable. Good for balance.',
            failureIfAbsent: '-1 Integrity. Circle feels lighter.',
            failureIfLate: 'Minor instability.',
            specialChecks: []
        },
        {
            id: 'bowser',
            name: 'Bowser',
            emoji: '🐢',
            role: 'South Node (REQUIRED)',
            ritualRole: 'Mass / Grounding Force',
            importance: 'critical',
            notes: 'Physical presence grounds the circle. Reflected without scars.',
            failureIfAbsent: 'RITUAL CANNOT PROCEED. Circle floats.',
            failureIfLate: '-2 Integrity. +2 to all stability DCs.',
            specialChecks: [
                { name: 'Grounding Hold', dc: 10, type: 'CON', consequence: 'Circle stability maintained' }
            ],
            position: 'South Node',
            wrongPosition: 'Grounding unstable. +2 to all DCs. -1 Integrity.'
        },
        {
            id: 'archie',
            name: 'Archie',
            emoji: '❄️',
            role: 'North Node (REQUIRED)',
            ritualRole: 'Ice Anchor / Stasis',
            importance: 'critical',
            notes: 'Reflected slightly older. Fire is FORBIDDEN.',
            failureIfAbsent: 'RITUAL CANNOT PROCEED. No stasis anchor.',
            failureIfLate: '-2 Integrity. Fire temptation increases.',
            specialChecks: [
                { name: 'Ice Channeling', dc: 14, type: 'Arcana', consequence: 'Time viscosity controlled' },
                { name: 'Ice Channeling (Alt)', dc: 15, type: 'CON', consequence: 'Physical control' },
                { name: 'Fire Resistance', dc: 18, type: 'WIS', consequence: 'CATASTROPHIC if failed' }
            ],
            position: 'North Node',
            wrongPosition: 'Ice destabilizes. +5 DC to resist fire. Pernus smirks. -1 Integrity.',
            fireCatastrophe: {
                trigger: 'Fails WIS 18 after seeing fireball in mirrors',
                immediate: ['Guild excommunication', 'Ritual burns something alive', 'Someone dies or erased'],
                sacrificeTable: [
                    'Nearest party member (Bowser)',
                    'Ghost servant crystallizes',
                    'Green T (if present)',
                    'Random Toad',
                    'Oracle takes damage (not death)',
                    "Player's choice"
                ]
            }
        },
        {
            id: 'toadburt',
            name: 'Toadburt',
            emoji: '🍄',
            role: 'Witness / Backup',
            ritualRole: 'Emergency Replacement',
            importance: 'medium',
            notes: 'Can substitute for missing witnesses. Loyal.',
            failureIfAbsent: 'One less backup option.',
            failureIfLate: 'Reduced flexibility.',
            specialChecks: []
        },
        {
            id: 'oracle',
            name: 'The Oracle',
            emoji: '🧙‍♂️',
            role: 'Center (REQUIRED)',
            ritualRole: 'Chronomancer / Voice',
            importance: 'critical',
            notes: 'Speaks the true-name. Cannot be replaced.',
            failureIfAbsent: 'RITUAL IMPOSSIBLE.',
            failureIfLate: 'He is never late. Reality waits for him.',
            specialChecks: [
                { name: 'True-Name Speaking', dc: 'auto', type: 'N/A', consequence: 'Must complete uninterrupted' },
                { name: 'Concentration (if interrupted)', dc: 25, type: 'CON', consequence: 'Per round of combat' }
            ],
            position: 'Center',
            wrongPosition: 'Cannot speak true-name. Automatic failure.',
            quotes: [
                '"No pauses once we enter. Hesitation desynchronizes intent."',
                '"Truth binds circles. Lies rupture them. Speak now or bleed later."',
                '"Positions. Do not choose where you want to stand. Choose where you belong."',
                '"Cold does not conquer. It preserves. Begin."',
                '"Raventree was never cursed. It remembered."',
                '"Do not interrupt a man while he is editing history."',
                '"It is done. Step back. Slowly."'
            ]
        }
    ],
    
    // GROUP C - Observers
    groupC: [
        {
            id: 'legion-spy-1',
            name: 'Legion Spy #1',
            emoji: '👁️',
            role: 'Observer / Threat',
            ritualRole: 'Potential Interrupter',
            importance: 'threat',
            notes: 'Watching for evidence. May signal Legion forces.',
            threat: 'Can trigger early interruption (Scene 5)',
            actions: ['Observe', 'Signal', 'Intervene'],
            specialChecks: [
                { name: 'Stealth', dc: 14, type: 'Perception', consequence: 'Detect hidden actions' }
            ]
        },
        {
            id: 'legion-spy-2',
            name: 'Legion Spy #2',
            emoji: '👁️',
            role: 'Observer / Threat',
            ritualRole: 'Potential Interrupter',
            importance: 'threat',
            notes: 'Backup for Spy #1. May act independently.',
            threat: 'Can trigger early interruption (Scene 5)',
            actions: ['Observe', 'Signal', 'Intervene'],
            specialChecks: []
        },
        {
            id: 'smokin-al',
            name: "Smokin' Al",
            emoji: '🚬',
            role: 'Wild Card Observer',
            ritualRole: 'Unknown Allegiance',
            importance: 'unknown',
            notes: 'Motives unclear. May help or hinder.',
            threat: 'Unpredictable. Could expose party or cover for them.',
            actions: ['Observe', 'Distract', 'Cover', 'Betray'],
            specialChecks: [
                { name: 'Read Intentions', dc: 16, type: 'Insight', consequence: 'Determine allegiance' }
            ]
        },
        {
            id: 'mages-guild',
            name: 'Mages Guild Member',
            emoji: '🔮',
            role: 'Official Observer',
            ritualRole: 'Witness for Guild',
            importance: 'political',
            notes: 'Here to verify Oracle actions. Political consequences.',
            threat: 'Low threat during ritual. High political stakes after.',
            actions: ['Observe', 'Document', 'Report'],
            specialChecks: []
        }
    ]
};

// ============================================
// SCENE DATA
// ============================================

const SCENES = [
    {
        id: 0,
        title: 'SCENE 0 — APPROACH TO THE SUMMONING ROOM',
        emoji: '⏳',
        color: 'gray',
        oracleQuote: '"No pauses once we enter. Hesitation desynchronizes intent."',
        description: 'The corridor narrows. The Manor quiets in that way that means it\'s listening.',
        mirrorEffects: [
            'Archie reflected slightly older',
            'Bowser reflected without scars',
            'Dan reflected half a beat late'
        ],
        checks: [
            {
                name: 'Corridor Passage',
                type: 'Group',
                dc: 12,
                skill: 'WIS Save',
                altDc: 14,
                altSkill: 'Insight',
                description: 'Each player must pass to avoid mirror interaction',
                passEffect: 'Move through quickly. No mirror interaction.',
                failEffect: 'Mirror attempts "correction". Minor possession attempt.',
                failConsequence: 'WIS Save DC 15 or minor possession. Oracle burns 1 safeguard.'
            }
        ],
        failurePoints: [
            {
                trigger: 'Joke, stop, or stare too long',
                effect: 'Mirror tries to "correct" them',
                consequence: 'Minor possession attempt + burned safeguard'
            }
        ],
        branchOptions: []
    },
    {
        id: 1,
        title: 'SCENE 1 — THE LAST CHECK (DAN / IMPOSTOR)',
        emoji: '🔍',
        color: 'yellow',
        oracleQuote: '"Truth binds circles. Lies rupture them. Speak now or bleed later."',
        description: 'The Oracle stops before the threshold. Everyone feels it. The mirrors hum.',
        checks: [
            {
                name: 'Impostor Detection',
                type: 'Individual',
                target: 'Dan',
                dc: 18,
                skill: 'Insight',
                altSkill: 'Detect Magic (auto)',
                description: 'Verify Dan is real before entering circle',
                passEffect: 'Dan verified. Mirrors dim. +1 Circle Integrity.',
                failEffect: 'Status unknown. GM rolls secretly.',
                skipEffect: 'If impostor, betrayal at Scene 4.'
            }
        ],
        branchOptions: [
            {
                id: 'dan-real',
                name: 'Dan is REAL',
                color: 'green',
                effects: ['+1 Circle Integrity', 'Trust established', 'Proceed safely'],
                statChange: { circleIntegrity: 1 }
            },
            {
                id: 'dan-impostor',
                name: 'Dan is IMPOSTOR',
                color: 'red',
                effects: ['Mark betrayal for Scene 4', 'Mirror will reassign innocent', 'Maximum danger'],
                flag: 'impostor-present'
            },
            {
                id: 'dan-unknown',
                name: 'Not Checked (Risky)',
                color: 'yellow',
                effects: ['GM rolls d20 secretly', '1-10: Real', '11-20: Impostor'],
                flag: 'dan-unchecked'
            }
        ]
    },
    {
        id: 2,
        title: 'SCENE 2 — ENTERING THE SUMMONING ROOM',
        emoji: '🔵',
        color: 'blue',
        oracleQuote: '"Positions. Do not choose where you want to stand. Choose where you belong."',
        description: 'The room is circular, etched with opposing sigils. Three anchor glyphs are cracked. One still breathes faintly.',
        positions: [
            { node: 'North', character: 'Archie', role: 'Stasis/Ice', required: true },
            { node: 'South', character: 'Bowser', role: 'Mass/Grounding', required: true },
            { node: 'Center', character: 'Oracle', role: 'Voice', required: true },
            { node: 'East/West', character: 'Others', role: 'Balance', required: false }
        ],
        checks: [
            {
                name: 'Position Intuition',
                type: 'Individual',
                dc: 12,
                skill: 'Insight',
                description: 'Sense correct position naturally',
                passEffect: 'Character moves to correct node.',
                failEffect: 'Must be directed by Oracle or guess.'
            }
        ],
        branchOptions: [
            {
                id: 'archie-north',
                name: 'Archie at NORTH ✓',
                color: 'green',
                effects: ['Ice anchor stable', 'Normal DCs apply']
            },
            {
                id: 'archie-wrong',
                name: 'Archie ELSEWHERE ✗',
                color: 'red',
                effects: ['Ice destabilizes', '+5 DC to resist fire', 'Pernus smirks', '-1 Circle Integrity'],
                statChange: { circleIntegrity: -1 },
                flag: 'archie-wrong-position'
            },
            {
                id: 'bowser-south',
                name: 'Bowser at SOUTH ✓',
                color: 'green',
                effects: ['Grounding stable', 'Normal DCs apply']
            },
            {
                id: 'bowser-wrong',
                name: 'Bowser ELSEWHERE ✗',
                color: 'yellow',
                effects: ['Grounding unstable', '+2 to stability DCs', '-1 Circle Integrity'],
                statChange: { circleIntegrity: -1 }
            }
        ]
    },
    {
        id: 3,
        title: 'SCENE 3 — ARCHIE CHANNELS (ICE ANCHOR)',
        emoji: '❄️',
        color: 'cyan',
        oracleQuote: '"Cold does not conquer. It preserves. Begin."',
        description: 'Archie exhales. Frost creeps outward — slow, controlled. Mirrors ripple but do not flare.',
        checks: [
            {
                name: 'Ice Channeling',
                type: 'Individual',
                target: 'Archie',
                dc: 14,
                skill: 'Arcana',
                altDc: 15,
                altSkill: 'CON Save',
                description: 'Controlled ice channeling. No excess, no flourish.',
                passEffect: 'Time viscosity increases. Everyone feels heavier. Outside sounds muffle.',
                partialEffect: 'Slight frost instability. -1 Circle Integrity. Ritual continues.',
                failEffect: 'Ice fractures into mirrors. Reflection bleed begins. Archie sees Fireball reflected.'
            },
            {
                name: 'Fire Resistance (if ice fails)',
                type: 'Individual',
                target: 'Archie',
                dc: 18,
                skill: 'WIS Save',
                description: 'Resist urge to cast fire after seeing reflection',
                passEffect: 'Archie resists. Ice holds. Continue to Scene 4.',
                failEffect: 'CATASTROPHIC FAILURE. Fire cast mid-ritual.'
            }
        ],
        branchOptions: [
            {
                id: 'ice-success',
                name: 'Ice Stable ✓',
                color: 'green',
                effects: ['Time viscosity increases', 'Sounds muffle', 'Mirrors ripple, don\'t flare']
            },
            {
                id: 'ice-partial',
                name: 'Ice Partial (1-5 over DC)',
                color: 'yellow',
                effects: ['Slight instability', '-1 Circle Integrity', 'Ritual continues'],
                statChange: { circleIntegrity: -1 }
            },
            {
                id: 'ice-overextended',
                name: 'Ice Overextended ✗',
                color: 'red',
                effects: ['Ice fractures into mirrors', 'Reflection bleed', 'Fireball reflected at Archie'],
                flag: 'fire-temptation'
            },
            {
                id: 'fire-resisted',
                name: 'Fire Resisted ✓',
                color: 'green',
                effects: ['Archie resists', 'Ice holds', 'Continue safely']
            },
            {
                id: 'fire-cast',
                name: '🔥 FIRE CAST',
                color: 'red',
                effects: ['Immediate Guild excommunication', 'Ritual burns something alive', 'Someone dies'],
                flag: 'fire-catastrophe',
                statChange: { timeline: 'FRACTURED' }
            }
        ],
        catastrophe: {
            name: 'Fire Catastrophe',
            trigger: 'Archie fails WIS 18 after overextending',
            sacrificeTable: [
                { roll: 1, target: 'Nearest party member (Bowser)', effect: 'Death or severe burns' },
                { roll: 2, target: 'Ghost servant', effect: 'Crystallizes permanently' },
                { roll: 3, target: 'Green T (if present)', effect: 'Erased. Maximum guilt.' },
                { roll: 4, target: 'Random Toad', effect: 'Civilian casualty' },
                { roll: 5, target: 'Oracle', effect: 'Takes damage, survives, becomes anchored' },
                { roll: 6, target: "Player's choice", effect: 'Worst guilt. They decide who.' }
            ]
        }
    },
    {
        id: 4,
        title: 'SCENE 4 — THE ORACLE SPEAKS THE NAME',
        emoji: '🕯️',
        color: 'purple',
        oracleQuote: '"Raventree was never cursed. It remembered."',
        description: 'The Oracle\'s voice changes. Not louder. Older. The sigils light. The mirrors lean in. POINT OF NO RETURN.',
        checks: [
            {
                name: 'Impostor Betrayal (if flagged)',
                type: 'Triggered',
                description: 'If impostor flag is set, betrayal happens NOW',
                effect: 'Impostor disrupts. Mirror reassigns innocent.'
            }
        ],
        branchOptions: [
            {
                id: 'greent-appears',
                name: '🟢 Green T APPEARS',
                color: 'green',
                effects: ['Overflow redirected', 'Mirror Terror dormant', '+2 Circle Integrity', 'Green T gains: rift-sensor, mirror immunity, slightly not-normal'],
                statChange: { circleIntegrity: 2 },
                flag: 'greent-present'
            },
            {
                id: 'greent-absent',
                name: '🔴 Green T ABSENT',
                color: 'red',
                effects: ['Circle hunts for overflow target', 'Roll d6', 'Someone becomes valve'],
                flag: 'greent-absent'
            },
            {
                id: 'betrayal-triggered',
                name: '🗡️ IMPOSTOR BETRAYAL',
                color: 'red',
                effects: ['Disruption at peak', 'Mirror reassigns', 'Innocent pays price'],
                requires: 'impostor-present'
            }
        ],
        overflowTable: [
            { roll: '1-2', target: 'Party member', effect: 'Absorbs overflow. Gains temporal mark.' },
            { roll: '3-4', target: 'Ghost servant', effect: 'Crystallizes permanently.' },
            { roll: '5-6', target: 'Oracle', effect: 'Takes burden. Survives. Becomes anchored. Legion interest spikes.' }
        ]
    },
    {
        id: 5,
        title: 'SCENE 5 — THE AUDIENCE MOVES',
        emoji: '⚔️',
        color: 'orange',
        oracleQuote: '"Do not interrupt a man while he is editing history."',
        description: 'Pernus shifts. Legion weapons click.',
        checks: [
            {
                name: 'Interruption Timing',
                type: 'GM Decision',
                description: 'When do observers act?',
                options: [
                    'No interruption (best)',
                    'Before mirrors dull (catastrophic)',
                    'After mirrors dull (manageable)'
                ]
            }
        ],
        branchOptions: [
            {
                id: 'no-interrupt',
                name: 'No Interruption',
                color: 'green',
                effects: ['Proceed to Scene 6', 'Ritual completes cleanly']
            },
            {
                id: 'early-interrupt',
                name: 'Interrupt BEFORE Mirrors Dull',
                color: 'red',
                effects: ['Timeline shear', 'Reality fractures', 'Loop or erasure possible', 'WORST ENDING TERRITORY'],
                statChange: { timeline: 'SHEARED' },
                flag: 'timeline-shear'
            },
            {
                id: 'late-interrupt',
                name: 'Interrupt AFTER Mirrors Dull',
                color: 'yellow',
                effects: ['Political chaos', 'Ritual holds', 'Violence survivable', 'Normal combat rules']
            }
        ],
        combatInShear: {
            rules: [
                'All attacks: 50% miss chance (d20 1-10 miss)',
                'Spells may loop (cast twice, hit self)',
                'Movement unpredictable (d4 for direction)',
                'Death doesn\'t stick (neither does victory)'
            ],
            escape: 'Oracle must speak true-name while fighting. DC 25 Concentration per round.'
        }
    },
    {
        id: 6,
        title: 'SCENE 6 — MIRRORS GO DULL',
        emoji: '🪞',
        color: 'gray',
        oracleQuote: '"It is done. Step back. Slowly."',
        description: 'Not dark. Not shattered. Just... boring. That\'s the cue.',
        checks: [
            {
                name: 'Patient Exit',
                type: 'Group',
                dc: 10,
                skill: 'WIS Save',
                description: 'Exit slowly and patiently',
                passEffect: 'Clean exit. No lingering effects.',
                failEffect: 'Leaves something behind. Gains reflection that doesn\'t blink.'
            }
        ],
        branchOptions: [
            {
                id: 'clean-exit',
                name: 'Patient Exit ✓',
                color: 'green',
                effects: ['Clean exit', 'No lingering effects']
            },
            {
                id: 'early-move',
                name: 'Moved Early ✗',
                color: 'yellow',
                effects: ['Leaves something behind', 'Reflection doesn\'t blink', 'Mark on character sheet'],
                flag: 'reflection-curse'
            }
        ],
        aftermath: {
            bestCase: ['Subtle new perception', 'Temporal intuition', 'Mirror immunity'],
            worstCase: ['Identity slippage', 'Remembered by things that shouldn\'t', 'Becoming future anchor']
        }
    }
];

// ============================================
// ROLL TABLES
// ============================================

const ROLL_TABLES = {
    waluigiWeirdness: [
        { roll: 1, effect: 'A reflection of Waluigi stays behind', future: true },
        { roll: 2, effect: 'A door that shouldn\'t exist does', future: true },
        { roll: 3, effect: 'Someone hears "WAH" echo for hours', comedic: true },
        { roll: 4, effect: 'Mirror shows everyone as Waluigi briefly', weird: true },
        { roll: 5, effect: 'Waluigi gains minor prophecy (annoying, accurate)', boon: true },
        { roll: 6, effect: 'Nothing happens (Waluigi disappointed)', safe: true }
    ],
    
    fireSacrifice: [
        { roll: 1, target: 'Nearest party member', effect: 'Death or severe burns' },
        { roll: 2, target: 'Ghost servant', effect: 'Crystallizes permanently' },
        { roll: 3, target: 'Green T', effect: 'Erased. Maximum guilt.' },
        { roll: 4, target: 'Random Toad', effect: 'Civilian casualty' },
        { roll: 5, target: 'Oracle', effect: 'Damaged, anchored to manor' },
        { roll: 6, target: 'Player choice', effect: 'They decide who burns' }
    ],
    
    impostorVictim: [
        { roll: 1, target: 'Toadburt', effect: 'Takes impostor\'s ritual role' },
        { roll: 2, target: 'Hjumpik', effect: 'Identity fractures' },
        { roll: 3, target: 'Random Toad', effect: 'Erased from memory' },
        { roll: 4, target: 'Eager', effect: 'Becomes the new "Dan"' },
        { roll: 5, target: 'Rodger', effect: 'Cursed reflection' },
        { roll: 6, target: 'Oracle', effect: 'Anchored to manor' }
    ],
    
    overflowTarget: [
        { roll: '1-2', target: 'Party member', effect: 'Gains temporal mark' },
        { roll: '3-4', target: 'Ghost servant', effect: 'Crystallizes' },
        { roll: '5-6', target: 'Oracle', effect: 'Anchored, Legion interested' }
    ],
    
    exitPenalty: [
        { roll: 1, effect: 'Reflection blinks when you don\'t' },
        { roll: 2, effect: 'Shadow slightly delayed' },
        { roll: 3, effect: 'Dreams of the manor' },
        { roll: 4, effect: 'Recognized by mirrors elsewhere' },
        { roll: 5, effect: 'Temporal intuition (mixed blessing)' },
        { roll: 6, effect: 'Nothing noticeable yet' }
    ]
};
