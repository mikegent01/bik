
// ritual-logic.js

class GMSheet {
// In the constructor of GMSheet class:
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
    
    // Initialize failure tracking
    this.initFailureStates();
    this.activeFailure = null;
    
    this.init();
}

    init() {
        this.renderSidebar();
        this.renderStatusPanel();
        this.renderMainContent();
        this.showDashboard();
        this.verifySceneData();
    }
    // Add this to the constructor or init to verify scene data
verifySceneData() {
    const scenes = this.getSceneData();
    console.log(`Total scenes: ${scenes.length}`);
    scenes.forEach((s, i) => {
        console.log(`Scene ${i}: ${s.title}`);
    });
}
// Add this method to GMSheet class
// Add this method to render the briefing
renderOracleBriefing(briefing) {
    if (!briefing) return '';
    
    try {
        return `
            <div class="oracle-briefing">
                ${briefing.introduction ? `
                    <div class="briefing-intro">
                        <div class="oracle-speech major">
                            <span class="speaker">🧙‍♂️ ${briefing.introduction.speaker || 'Oracle'}:</span>
                            <p class="speech-text">"${briefing.introduction.text || ''}"</p>
                        </div>
                    </div>
                ` : ''}
                
                ${briefing.sections && Array.isArray(briefing.sections) ? `
                    <div class="briefing-sections">
                        ${briefing.sections.map(section => `
                            <div class="briefing-section">
                                <div class="section-header">
                                    <span class="section-icon">${section.icon || '📋'}</span>
                                    <h3>${section.title || 'Section'}</h3>
                                </div>
                                
                                ${section.oracleText ? `
                                    <div class="oracle-speech">
                                        <p class="speech-text">"${section.oracleText}"</p>
                                    </div>
                                ` : ''}
                                
                                ${section.danSpecific ? `
                                    <div class="oracle-speech dan-specific">
                                        <span class="speaker">🧙‍♂️ To Dan specifically:</span>
                                        <p class="speech-text">"${section.danSpecific}"</p>
                                    </div>
                                ` : ''}
                                
                                ${section.playerNotes && Array.isArray(section.playerNotes) ? `
                                    <div class="player-notes">
                                        <h4>📝 Key Points:</h4>
                                        <ul>
                                            ${section.playerNotes.map(note => `<li>${note}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                                
                                ${section.roleHints && Array.isArray(section.roleHints) ? `
                                    <div class="role-hints">
                                        <h4>👥 Role Assignments:</h4>
                                        <div class="role-grid">
                                            ${section.roleHints.map(r => `
                                                <div class="role-hint">
                                                    <span class="role-name">${r.role || ''}</span>
                                                    <span class="role-desc">${r.description || ''}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                                
                                ${section.warningList && Array.isArray(section.warningList) ? `
                                    <div class="warning-list">
                                        <h4>💀 Failure Modes:</h4>
                                        <div class="warning-grid">
                                            ${section.warningList.map(w => `
                                                <div class="warning-item">
                                                    <span class="warning-trigger">${w.trigger || ''}</span>
                                                    <span class="warning-consequence">${w.consequence || ''}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${this.renderOracleQA ? this.renderOracleQA() : ''}
                
                ${briefing.finalWarning ? `
                    <div class="briefing-final">
                        <div class="oracle-speech final-warning">
                            <span class="speaker">🧙‍♂️ ${briefing.finalWarning.speaker || 'Oracle'}:</span>
                            <p class="speech-text">"${briefing.finalWarning.text || ''}"</p>
                        </div>
                        
                        ${briefing.finalWarning.pause ? `
                            <div class="dramatic-pause">
                                <em>[ Pause for player responses ]</em>
                                <button class="continue-btn" onclick="gm.showAfterPause()">No one leaves → Continue</button>
                            </div>
                            <div class="after-pause hidden" id="after-pause">
                                <div class="oracle-speech">
                                    <p class="speech-text">"${briefing.finalWarning.afterPause || ''}"</p>
                                </div>
                            </div>
                        ` : ''}
                        
                        ${briefing.transitionText ? `
                            <div class="transition-text">
                                <p><em>${briefing.transitionText}</em></p>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
                
                <div class="briefing-actions">
                    <button class="primary-btn" onclick="gm.nextScene()">Enter the Ritual Chamber →</button>
                </div>
            </div>
        `;
    } catch (e) {
        console.error('Error in renderOracleBriefing:', e);
        return '<div class="error">Error rendering briefing</div>';
    }
}
showAfterPause() {
    document.getElementById('after-pause').classList.remove('hidden');
    document.querySelector('.dramatic-pause button').style.display = 'none';
}
getLogicPuzzles() {
    return {
        // PUZZLE 1: POSITION ASSIGNMENT
        position_puzzle: {
            id: 'position_puzzle',
            title: 'The Circle of Twelve',
            type: 'deduction',
            description: 'Each participant must stand in their correct position. The ritual will reject wrong placements.',
            instructions: 'Use the clues to determine where each person stands. Some clues reference multiple people. Some are metaphorical.',
            clues: [
                'The one who speaks for all must see all who speak.',
                'What freezes looks toward what melts, but from where the cold comes, not where it goes.',
                'A question cannot be asked from behind. Questions face their asker.',
                'The broker stands between deals — never adjacent to certainty, always facing the one who decides.',
                'Four who move as one cluster where weight settles.',
                'Those who only watch stand where they cannot be watched.',
                'What cannot be contained cannot be inside.',
                'Memory requires sight of both question and answer.',
                'The voice of now speaks from where sun rises toward where sun sets.',
                'Flesh anchors near flesh, but is not flesh.',
                'Hearts beat southeast of center.',
                'What comes before stands behind what leads.',
                'Shadows gather opposite flames.',
                'Light leads the way for those who follow.'
            ],
            positions: {
                'CENTER': { correct: 'Oracle', holder: null },
                'NORTH': { correct: 'Archie', holder: null },
                'EAST': { correct: 'Dan', holder: null },
                'WEST': { correct: 'Hjumpik', holder: null },
                'SOUTH': { correct: 'Rodger', holder: null },
                'NE': { correct: 'Toad Lee', holder: null },
                'NW': { correct: 'Toadburt', holder: null },
                'SE': { correct: 'Eager', holder: null },
                'SW': { correct: 'Markop', holder: null },
                'S-SW': { correct: 'Perot', holder: null },
                'S-SE': { correct: 'Smokin\' J', holder: null },
                'S-CENTER': { correct: 'Salam', holder: null },
                'OUTER': { correct: 'Waluigi', holder: null }
            },
            participants: ['Oracle', 'Archie', 'Dan', 'Hjumpik', 'Rodger', 'Toad Lee', 'Toadburt', 'Eager', 'Markop', 'Perot', 'Smokin\' J', 'Salam', 'Waluigi'],
            meta_hints: [
                'Consider what each person DOES, not who they ARE.',
                'Cardinal directions have meanings. What does NORTH represent?',
                'Some people function as groups. Who moves together?',
                'The mirror is a physical object in the room. Where?'
            ],
            consequences: {
                perfect: 'All positions correct. Ritual proceeds with +2 to all checks.',
                minor_errors: '1-2 errors. Ritual proceeds but those individuals have -2 to their checks.',
                major_errors: '3+ errors. Ritual unstable from start. -2 Integrity immediately.'
            }
        },

        // PUZZLE 2: CANDLE SEQUENCE
        candle_sequence: {
            id: 'candle_sequence',
            title: 'The Lighting Order',
            type: 'sequence',
            description: 'Candles must be lit in the correct order. Simultaneous lighting seals. Sequential lighting cuts.',
            instructions: 'Five candles. One correct order. The principles below govern ritual sequence — they are not instructions, they are laws.',
            principles: [
                'You cannot cut the center until you have defined the edges.',
                'Opposition precedes resolution.',
                'Certainty before uncertainty.',
                'The question is not the first thing asked.',
                'What divides must exist before what is divided.',
                'The hand that holds the blade moves last.'
            ],
            candles: [
                { position: 'NORTH', description: 'Ice blue flame', color: '#70a1ff' },
                { position: 'SOUTH', description: 'Deep red flame', color: '#ff6b6b' },
                { position: 'EAST', description: 'Color shifts, uncertain', color: 'linear-gradient(#ffd93d, #6c5ce7, #a29bfe)' },
                { position: 'WEST', description: 'Split flame, two wicks', color: '#ffd93d' },
                { position: 'CENTER', description: 'Pure white', color: '#ffffff' }
            ],
            correct_order: ['NORTH', 'SOUTH', 'WEST', 'EAST', 'CENTER'],
            wrong_order_consequences: {
                'CENTER_first': 'The blade struck before the edges were defined. Oracle takes 2d6 damage. Restart.',
                'EAST_first': 'You asked the question before establishing what questions mean. Ritual inverts.',
                'EAST_before_WEST': 'The question was framed without opposition. Answer will be incomplete.',
                'SOUTH_before_NORTH': 'Heat before cold. Fire suppression fails. Archie WIS save DC 16 or fire escapes.',
                'general_wrong': 'Sequence off. Mirror flickers. -1 Integrity.'
            },
            solution_logic: [
                'Edges before center — so CENTER is last.',
                'Certainty (ice/NORTH) before uncertainty (shifting/EAST).',
                'Opposition (divided/WEST) before the thing being divided (question/EAST).',
                'NORTH and SOUTH are opposites — one must come before all others to establish the axis.',
                'Ice is more "certain" than fire. NORTH before SOUTH.',
                'Therefore: NORTH → SOUTH → WEST → EAST → CENTER'
            ]
        },

        // PUZZLE 3: MIRROR INTERPRETATION
        mirror_reading: {
            id: 'mirror_reading',
            title: 'Reading the Mirror',
            type: 'interpretation',
            description: 'The mirror shows symbols. It does not explain. You must.',
            instructions: 'For each image, discuss what it might mean. There are no wrong answers — but some answers have harder consequences than others.',
            readings: [
                {
                    id: 'dan_image',
                    image_description: 'Two figures stand in the same space. One is solid, one is translucent. The translucent one has two arms. They breathe at different rhythms.',
                    questions: [
                        'Which one is "real"?',
                        'Why does one have two arms?',
                        'What does breathing at different rhythms mean?',
                        'Are they aware of each other?'
                    ],
                    possible_meanings: [
                        { id: 'ghost', text: 'The translucent one is a ghost of who Dan was.' },
                        { id: 'impostor', text: 'One of them is not Dan at all.' },
                        { id: 'fragment', text: 'Dan is fractured — part of him is elsewhere.' },
                        { id: 'temporal', text: 'We see Dan from two different times.' },
                        { id: 'observer', text: 'Something is watching Dan, wearing his old shape.' },
                        { id: 'merged', text: 'Two beings have merged into one Dan.' }
                    ],
                    gm_notes: 'Let players debate. Their consensus becomes narratively significant. If they cannot agree, the mirror will decide — and it will choose the hardest option.'
                },
                {
                    id: 'hjumpik_image',
                    image_description: 'A frog sits at a crossroads. Three paths lead away. One path has a group of figures walking away. One path has a single hooded figure. One path leads into darkness. The frog\'s shadow points down the dark path even though there is no light source.',
                    questions: [
                        'Which path is Hjumpik facing?',
                        'What do the three paths represent?',
                        'Why does his shadow point differently?',
                        'Is he at the crossroads or has he already chosen?'
                    ],
                    possible_meanings: [
                        { id: 'undecided', text: 'Hjumpik genuinely hasn\'t chosen.' },
                        { id: 'party_loyal', text: 'He will choose the party (group path).' },
                        { id: 'third_party', text: 'He serves someone else (hooded figure).' },
                        { id: 'self', text: 'He will choose himself (darkness).' },
                        { id: 'shadow_truth', text: 'His shadow shows his true intention.' },
                        { id: 'all_paths', text: 'He will try to walk all three.' }
                    ]
                },
                {
                    id: 'archie_image',
                    image_description: 'A block of ice, perfectly clear. Inside the ice, a single ember glows. The ember is not melting the ice. The ice is not extinguishing the ember. Cracks radiate from the ember but do not reach the surface.',
                    questions: [
                        'Is the ice containing the fire or protecting it?',
                        'What do the cracks mean?',
                        'Can this state persist?',
                        'What happens if the cracks reach the surface?'
                    ],
                    possible_meanings: [
                        { id: 'control', text: 'Archie has perfect control — fire is contained.' },
                        { id: 'temporary', text: 'This balance is temporary. The cracks will spread.' },
                        { id: 'symbiosis', text: 'Ice and fire have found harmony in Archie.' },
                        { id: 'suppression', text: 'The fire is merely suppressed. It wants out.' },
                        { id: 'transformation', text: 'Fire became ice. They are the same thing now.' },
                        { id: 'bomb', text: 'Archie is a bomb waiting to go off.' }
                    ]
                },
                {
                    id: 'circle_image',
                    image_description: 'Twelve figures stand in a circle. A thirteenth space exists but is empty. One figure stands outside the circle entirely. The empty space glows faintly green. The outside figure casts no shadow.',
                    questions: [
                        'Who is the empty space?',
                        'Why is the outside figure outside?',
                        'What does the green glow mean?',
                        'Why no shadow on the outside figure?'
                    ],
                    possible_meanings: [
                        { id: 'greent', text: 'The empty space is Green T — gone but remembered.' },
                        { id: 'wrong_member', text: 'Someone in the circle should be in the empty space.' },
                        { id: 'waluigi_correct', text: 'The outside figure is Waluigi — correctly placed.' },
                        { id: 'waluigi_wrong', text: 'The outside figure should be inside.' },
                        { id: 'complete', text: 'Twelve is complete. Thirteen was never needed.' },
                        { id: 'missing_matters', text: 'The empty space will pull. Something will fill it.' }
                    ]
                }
            ]
        },

        // PUZZLE 4: DAN EVIDENCE BOARD
        dan_deduction: {
            id: 'dan_deduction',
            title: 'The Question of Dan',
            type: 'investigation',
            description: 'Before the mirror answers, you can investigate. Evidence points toward truth. Enough evidence gives certainty.',
            instructions: 'Gather evidence through roleplay. Mark what you learn. Build your case before the mirror speaks.',
            evidence_board: {
                physical: {
                    category: 'Body',
                    icon: '🦾',
                    questions: [
                        {
                            question: 'Which hand did Dan favor before the arm was lost?',
                            how_to_check: 'Ask someone who knew Dan. Check for calluses on remaining hand. Watch which way Dan instinctively reaches.',
                            implications: {
                                'matches': 'Point toward real Dan',
                                'wrong_hand': 'Strong point toward impostor',
                                'ambidextrous': 'Inconclusive'
                            }
                        },
                        {
                            question: 'Where is the arm that was lost?',
                            how_to_check: 'Investigate what happened. Was it destroyed? Taken? Does it exist somewhere?',
                            implications: {
                                'destroyed': 'If truly gone, harder for fragment to exist',
                                'exists_elsewhere': 'Fragment theory gains weight',
                                'unknown': 'Concerning'
                            }
                        },
                        {
                            question: 'Do Dan\'s scars match the injuries that should have caused them?',
                            how_to_check: 'Medical examination. Compare to accounts of how injuries occurred.',
                            implications: {
                                'match': 'Point toward real Dan',
                                'wrong_scars': 'Very suspicious',
                                'extra_scars': 'What else happened to this body?'
                            }
                        }
                    ]
                },
                memory: {
                    category: 'Mind',
                    icon: '🧠',
                    questions: [
                        {
                            question: 'What is something only Dan would know about someone present?',
                            how_to_check: 'Each party member tests one private memory. Cannot be something an observer could learn.',
                            implications: {
                                'knows': 'Point toward real Dan',
                                'doesnt_know': 'Point toward impostor',
                                'knows_wrong': 'Strong impostor evidence — false memories'
                            }
                        },
                        {
                            question: 'Does Dan remember Green T accurately?',
                            how_to_check: 'Ask about specific interactions with Green T. Details only someone present would know.',
                            implications: {
                                'accurate': 'Point toward real Dan',
                                'gaps': 'Could be trauma or impostor',
                                'fabricated': 'Impostor or fragment with corrupted memory'
                            }
                        },
                        {
                            question: 'Does Dan have memories that nobody else can verify?',
                            how_to_check: 'Listen for claims about events where Dan was alone. Cross-reference when possible.',
                            implications: {
                                'verifiable': 'Normal',
                                'unverifiable_consistent': 'Concerning but possible',
                                'unverifiable_contradictory': 'Something is very wrong'
                            }
                        }
                    ]
                },
                behavior: {
                    category: 'Pattern',
                    icon: '🔄',
                    questions: [
                        {
                            question: 'How does Dan react to things Dan loved?',
                            how_to_check: 'Present something Dan was known to enjoy. Watch the reaction — micro-expressions, not words.',
                            implications: {
                                'genuine_pleasure': 'Point toward real Dan',
                                'performed': 'Impostor learning to fake',
                                'confusion': 'Fragment with incomplete personality'
                            }
                        },
                        {
                            question: 'How does Dan react to things Dan feared?',
                            how_to_check: 'Present a stressor. Fear is harder to fake than pleasure.',
                            implications: {
                                'genuine_fear': 'Point toward real Dan',
                                'wrong_fear': 'Very suspicious — fears don\'t transfer',
                                'no_fear': 'Either brave Dan or incomplete copy'
                            }
                        },
                        {
                            question: 'Why has Dan been so quiet?',
                            how_to_check: 'Consider: Is silence from trauma? Instruction? Or inability to maintain the mask?',
                            implications: {
                                'trauma': 'Understandable for real Dan',
                                'obedience': 'Following ritual rules — neutral',
                                'preservation': 'Avoiding exposure — concerning'
                            }
                        }
                    ]
                },
                ritual: {
                    category: 'Magic',
                    icon: '✨',
                    questions: [
                        {
                            question: 'How did Dan\'s reflection behave in the corridor?',
                            how_to_check: 'Recall observation from Scene 1. What was different about Dan\'s reflection?',
                            implications: {
                                'doubled': 'Two Dans exist in some form',
                                'delayed': 'Dan is not synchronized with reality',
                                'normal': 'Either real or very good impostor'
                            }
                        },
                        {
                            question: 'Did Dan find the East position without being told?',
                            how_to_check: 'Recall positioning phase. Did Dan drift East naturally?',
                            implications: {
                                'yes_naturally': 'Ritual recognizes Dan',
                                'needed_direction': 'Inconclusive',
                                'resisted': 'Dan (or impostor) didn\'t want to be the question'
                            }
                        },
                        {
                            question: 'What made Dan\'s singularity uncertain in the first place?',
                            how_to_check: 'This is backstory. Why are we questioning Dan at all?',
                            implications: {
                                'specific_event': 'Focus investigation on that event',
                                'general_suspicion': 'Weaker basis — but still valid',
                                'unknown': 'Why are we even here?'
                            }
                        }
                    ]
                }
            },
            scoring: {
                toward_real: { label: 'Dan IS Dan', points: 0 },
                toward_fragment: { label: 'Dan + Fragment', points: 0 },
                toward_impostor: { label: 'NOT Dan', points: 0 },
                toward_unknown: { label: 'Unknowable', points: 0 }
            },
            thresholds: {
                certain: '8+ points in one category: You KNOW. You can challenge a wrong mirror answer.',
                likely: '5-7 points with 3+ lead: You suspect. Advantage on challenging mirror.',
                unclear: 'No clear lead: You must accept what the mirror says.',
                paradox: 'Two categories tied at 6+: Somehow BOTH are true. Much worse.'
            }
        },

        // PUZZLE 5: BALANCE MANAGEMENT
        balance_puzzle: {
            id: 'balance_puzzle',
            title: 'The Opposition Balance',
            type: 'resource_management',
            description: 'Five forces in tension. If any grows too strong or too weak, the ritual breaks.',
            instructions: 'Track the balance. Actions tip scales. Maintain equilibrium. The ritual will tell you when something is wrong — but not what to do about it.',
            elements: [
                { name: 'Ice', icon: '❄️', value: 5, min_name: 'Void', max_name: 'Stasis' },
                { name: 'Fire', icon: '🔥', value: 5, min_name: 'Empty', max_name: 'Inferno' },
                { name: 'Order', icon: '⚖️', value: 5, min_name: 'Chaos', max_name: 'Rigidity' },
                { name: 'Chaos', icon: '🌀', value: 5, min_name: 'Stagnation', max_name: 'Dissolution' },
                { name: 'Truth', icon: '🪞', value: 5, min_name: 'Lies', max_name: 'Agony' }
            ],
            actions: [
                { actor: 'Archie', action: 'Pushes ice harder', visible_effect: 'Temperature drops noticeably' },
                { actor: 'Archie', action: 'Relaxes control', visible_effect: 'Warmth creeps in at edges' },
                { actor: 'Archie', action: 'Shows emotion', visible_effect: 'Ice flickers orange' },
                { actor: 'Rodger', action: 'Gives an order', visible_effect: 'Squad snaps to attention' },
                { actor: 'Rodger', action: 'Shows uncertainty', visible_effect: 'Squad looks around nervously' },
                { actor: 'Squad', action: 'Panics', visible_effect: 'Formation breaks' },
                { actor: 'Squad', action: 'Holds discipline', visible_effect: 'Formation tightens' },
                { actor: 'Waluigi', action: 'Does something weird', visible_effect: 'Reality hiccups' },
                { actor: 'Waluigi', action: 'Stays perfectly still', visible_effect: 'Feels wrong' },
                { actor: 'Dan', action: 'Speaks', visible_effect: 'Mirror ripples' },
                { actor: 'Dan', action: 'Moves', visible_effect: 'Circle geometry shifts' },
                { actor: 'Dan', action: 'Remains passive', visible_effect: 'Mirror focuses' },
                { actor: 'Hjumpik', action: 'Looks loyal', visible_effect: 'Mirror dims slightly' },
                { actor: 'Hjumpik', action: 'Looks doubtful', visible_effect: 'Mirror brightens' },
                { actor: 'Anyone', action: 'Tells truth they\'d rather hide', visible_effect: 'Mirror resonates' },
                { actor: 'Anyone', action: 'Lies or omits', visible_effect: 'Mirror fogs' },
                { actor: 'Anyone', action: 'Calms someone afraid', visible_effect: 'Tension releases' },
                { actor: 'Anyone', action: 'Expresses fear', visible_effect: 'Others feel it' }
            ],
            hidden_effects: {
                // GM reference - don't show players
                'archie_pushes': { ice: +2, fire: -1 },
                'archie_relaxes': { ice: -1, fire: +2 },
                'archie_emotion': { ice: -2, fire: +1, truth: -1 },
                'rodger_orders': { order: +2, chaos: -1 },
                'rodger_uncertain': { order: -1, chaos: +1 },
                'squad_panic': { order: -3, chaos: +2, fire: +1 },
                'squad_discipline': { order: +2 },
                'waluigi_weird': { chaos: +2, order: -1 },
                'waluigi_still': { chaos: -2, order: +1, truth: +1 },
                'dan_speaks': { truth: -2, chaos: +1 },
                'dan_moves': { chaos: +1, order: -1 },
                'dan_passive': { truth: +1 },
                'hjumpik_loyal': { order: +1, chaos: -1, truth: -1 },
                'hjumpik_doubt': { chaos: +1, truth: +1 },
                'truth_told': { truth: +2 },
                'lie_told': { truth: -2, chaos: +1 },
                'calm_given': { order: +1, fire: -1 },
                'fear_shown': { chaos: +1, fire: +1 }
            },
            crisis_points: {
                ice_10: 'Everything freezes. All actions impossible for 1 round.',
                ice_0: 'Fire is no longer suppressed. Archie must save or cast.',
                fire_10: 'Summoning begins. Enter Fire Catastrophe.',
                fire_0: 'Ritual has no power to cut. Begins to fail.',
                order_10: 'Ritual becomes a seal. Everyone trapped inside.',
                order_0: 'Formation dissolves. Enter Squad Panic.',
                chaos_10: 'Reality becomes optional. Random effects each round.',
                chaos_0: 'Ritual is predictable. Enemies can counter it.',
                truth_10: 'Everyone sees their worst truth. Mass trauma.',
                truth_0: 'Mirror is lying. All answers are wrong.'
            },
            gap_warning: 'If gap between highest and lowest exceeds 5: Imbalance cascade.'
        },

        // PUZZLE 6: EXIT SEQUENCE
        exit_puzzle: {
            id: 'exit_puzzle',
            title: 'The Departure Order',
            type: 'sequence',
            description: 'What was wound must be unwound. The exit is not the entrance in reverse.',
            instructions: 'Determine the correct order for all to leave. Some leave together. Some must wait. The wrong order leaves pieces behind.',
            rules: [
                'What was last to fully commit releases first.',
                'The observer must cease observing before the observed may leave.',
                'A question that exits after its answer is no longer a question.',
                'The conductor cannot leave a symphony that still has musicians.',
                'Those who anchor to each other must release together.',
                'The unpredictable releases when prediction is no longer needed.',
                'Opposition may release when the cut is complete.'
            ],
            constraints: [
                'Oracle cannot leave until all others are clear.',
                'Dan must leave before the mirror\'s answer crystallizes permanently.',
                'If Archie leaves while ice is uncertain, fire may escape.',
                'If witnesses leave after participants, memory inverts.',
                'If the squad separates, each must save individually.',
                'If Waluigi leaves too early, chaos spills onto remaining.'
            ],
            groups: [
                { id: 'witnesses', members: ['Toad Lee', 'Toadburt', 'Eager', 'Markop'], exit_together: false },
                { id: 'squad', members: ['Rodger', 'Perot', 'Smokin\' J', 'Salam'], exit_together: true },
                { id: 'question', members: ['Dan'], exit_together: true },
                { id: 'edges', members: ['Hjumpik', 'Archie'], exit_together: false },
                { id: 'chaos', members: ['Waluigi'], exit_together: true },
                { id: 'conductor', members: ['Oracle'], exit_together: true }
            ],
            correct_order: [
                { order: 1, who: ['Toad Lee', 'Toadburt', 'Eager', 'Markop'], reason: 'Witnesses release first — they were never fully inside' },
                { order: 2, who: ['Waluigi'], reason: 'Chaos releases when structure begins dissolving' },
                { order: 3, who: ['Rodger', 'Perot', 'Smokin\' J', 'Salam'], reason: 'Mundane anchors release as a unit' },
                { order: 4, who: ['Dan'], reason: 'Question leaves before answer hardens' },
                { order: 5, who: ['Hjumpik', 'Archie'], reason: 'Edges release when cut is complete' },
                { order: 6, who: ['Oracle'], reason: 'Conductor leaves empty hall' }
            ]
        },

        // PUZZLE 7: THE SPEAKING
        speaking_puzzle: {
            id: 'speaking_puzzle',
            title: 'The Oracle\'s Words',
            type: 'word_completion',
            description: 'The Oracle speaks in ritual phrases. If interrupted, another must complete them. Wrong words have wrong effects.',
            instructions: 'Each phrase has one correct completion. The meaning of the phrase tells you what word fits.',
            phrases: [
                {
                    id: 'opening',
                    spoken: 'That which is uncertain, be revealed. That which is hidden, be shown. That which is divided, be _____.',
                    context: 'This phrase opens the question. What do you do to something divided to get an answer?',
                    correct: 'known',
                    wrong_effects: {
                        'united': 'All fragments merge — impostors become real.',
                        'separated': 'Fragments multiply — Dan becomes many.',
                        'healed': 'Assumes Dan is wounded — may fix what was not broken.',
                        'destroyed': 'Annihilation — Dan ceases entirely.',
                        'judged': 'Punishment, not truth — ritual becomes execution.',
                        'forgotten': 'Dan is erased from memory. Problem "solved."'
                    }
                },
                {
                    id: 'opposition',
                    spoken: 'Let ice oppose fire. Let order oppose chaos. Let truth oppose _____.',
                    context: 'Oppositions define the cut. What is truth\'s opposite? Not its absence — its enemy.',
                    correct: 'desire',
                    wrong_effects: {
                        'lies': 'Too simple. Lies are obvious. Desire corrupts truth subtly.',
                        'fear': 'Fear and truth can coexist. Wrong opposition.',
                        'hope': 'Hope is not opposed to truth. Weakens the cut.',
                        'self': 'Makes the ritual about identity, not fact.',
                        'nothing': 'Negates opposition. Truth becomes meaningless.'
                    }
                },
                {
                    id: 'authority',
                    spoken: 'By the mirror\'s edge, by the witness\'s eye, by the _____ of those who remain.',
                    context: 'What empowers the cut? What do those in the circle provide?',
                    correct: 'will',
                    wrong_effects: {
                        'power': 'Makes might determine truth. Dangerous.',
                        'blood': 'Invokes sacrifice. Someone will pay in blood.',
                        'hope': 'Too passive. Hoping doesn\'t cut.',
                        'memory': 'Ties result to past — cannot cut toward future.',
                        'love': 'Emotional truth, not actual truth. Corrupts.'
                    }
                },
                {
                    id: 'completion',
                    spoken: 'What belongs, remains. What intrudes, departs. What is asked, is _____.',
                    context: 'The final phrase. What happens to a question when the ritual succeeds?',
                    correct: 'answered',
                    wrong_effects: {
                        'known': 'Repetition from phrase one. Weakens structure.',
                        'resolved': 'Implies conflict. This is inquiry, not combat.',
                        'closed': 'Ends the question but not with truth — just silence.',
                        'silenced': 'Suppresses the question. Nothing learned.',
                        'ended': 'Destruction, not truth.'
                    }
                }
            ],
            interruption_rules: {
                who_can_complete: 'Anyone who heard the words. Toadburt has advantage (recording is his role).',
                time_limit: 'Must be completed within one round or phrase fails.',
                partial_completion: 'If phrase is cut off mid-word, must restart from last complete word.',
                wrong_word: 'Cannot unsay. Effect happens. May need to adapt.',
                silence: 'If no one completes, roll on Timeline Shear table.'
            }
        },

        // PUZZLE 8: READING THE ROOM
        room_reading: {
            id: 'room_reading',
            title: 'Environmental Tells',
            type: 'observation',
            description: 'The ritual space communicates. Pay attention.',
            instructions: 'The GM will describe environmental changes. Players must interpret what they mean.',
            environmental_tells: [
                {
                    observation: 'Candle flames lean in the same direction',
                    possible_meanings: [
                        'Something is pulling from that direction',
                        'The ritual\'s focus has shifted',
                        'Someone on that side is the current focus'
                    ]
                },
                {
                    observation: 'Temperature drops sharply but Archie hasn\'t changed',
                    possible_meanings: [
                        'Something cold has entered',
                        'Truth is being spoken — truth is cold',
                        'Time is slowing in that area'
                    ]
                },
                {
                    observation: 'Someone\'s shadow moves independently',
                    possible_meanings: [
                        'The mirror is testing them',
                        'A fragment or parasite is attached',
                        'Their true intention differs from their action'
                    ]
                },
                {
                    observation: 'The chalk lines glow brighter near someone',
                    possible_meanings: [
                        'The ritual recognizes them as significant',
                        'They are the current subject of inquiry',
                        'Energy is flowing through them'
                    ]
                },
                {
                    observation: 'The mirror shows someone who isn\'t moving while they are',
                    possible_meanings: [
                        'Their reflection refuses to follow',
                        'Part of them is already separated',
                        'The mirror sees their "true" position'
                    ]
                },
                {
                    observation: 'Sound becomes muffled except for one person\'s voice',
                    possible_meanings: [
                        'The ritual wants to hear them',
                        'They are speaking truth the ritual needs',
                        'Everyone else is becoming less real'
                    ]
                },
                {
                    observation: 'The torch flame turns a different color',
                    possible_meanings: [
                        'Blue: Time magic active',
                        'Green: Something from outside observing',
                        'Red: Danger imminent',
                        'White: Truth being revealed',
                        'Black: Void touching'
                    ]
                }
            ],
            gm_usage: 'Use these tells to hint at developments without explicit statements. Let players interpret. Their interpretation influences what happens.'
        }
    };
}
showMirrorReading() {
    const puzzle = this.getLogicPuzzles().mirror_reading;
    
    if (!this.puzzleState) this.puzzleState = {};
    if (!this.puzzleState.mirrorChoices) this.puzzleState.mirrorChoices = {};
    
    const content = `
        <div class="logic-puzzle mirror-puzzle">
            <div class="puzzle-header">
                <h2>🪞 ${puzzle.title}</h2>
                <p class="puzzle-type">Type: ${puzzle.type.toUpperCase()}</p>
            </div>
            
            <div class="puzzle-description">
                <p>${puzzle.description}</p>
                <p class="instructions">${puzzle.instructions}</p>
            </div>
            
            <div class="mirror-readings">
                ${puzzle.readings.map(reading => this.renderMirrorReading(reading)).join('')}
            </div>
            
            <div class="interpretation-warning">
                <h4>⚠️ Warning</h4>
                <p>Your interpretation becomes real. The mirror shows — you decide meaning. There are no wrong answers, only different consequences.</p>
            </div>
        </div>
    `;
    
    this.setContent('Logic Puzzle: Mirror Reading', content);
}

renderMirrorReading(reading) {
    const selectedMeaning = this.puzzleState.mirrorChoices?.[reading.id];
    
    return `
        <div class="reading-card" id="reading-${reading.id}">
            <div class="reading-image">
                <div class="image-frame">
                    <p class="image-description">${reading.image_description}</p>
                </div>
            </div>
            
            <div class="reading-questions">
                <h4>Questions to Consider:</h4>
                <ul>
                    ${reading.questions.map(q => `<li>${q}</li>`).join('')}
                </ul>
            </div>
            
            <div class="reading-meanings">
                <h4>Possible Interpretations:</h4>
                <div class="meaning-options">
                    ${reading.possible_meanings.map(m => `
                        <div class="meaning-option ${selectedMeaning === m.id ? 'selected' : ''}"
                             onclick="gm.selectMirrorMeaning('${reading.id}', '${m.id}')">
                            <span class="meaning-text">${m.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${selectedMeaning ? `
                <div class="chosen-meaning">
                    <strong>Your interpretation:</strong> ${reading.possible_meanings.find(m => m.id === selectedMeaning)?.text}
                </div>
            ` : ''}
            
            ${reading.gm_notes ? `
                <div class="gm-notes">
                    <strong>GM Note:</strong> ${reading.gm_notes}
                </div>
            ` : ''}
        </div>
    `;
}

selectMirrorMeaning(readingId, meaningId) {
    if (!this.puzzleState.mirrorChoices) this.puzzleState.mirrorChoices = {};
    this.puzzleState.mirrorChoices[readingId] = meaningId;
    this.logEvent(`Mirror interpretation: ${readingId} = ${meaningId}`);
    this.showMirrorReading();
}
// Render the position puzzle

showPositionPuzzle() {
    const puzzle = this.getLogicPuzzles().position_puzzle;
    
    if (!this.puzzleState) this.puzzleState = {};
    if (!this.puzzleState.positions) {
        this.puzzleState.positions = {};
        Object.keys(puzzle.positions).forEach(pos => {
            this.puzzleState.positions[pos] = null;
        });
    }
    
    const content = `
        <div class="logic-puzzle position-puzzle">
            <div class="puzzle-header">
                <h2>🧩 ${puzzle.title}</h2>
                <p class="puzzle-type">Type: ${puzzle.type.toUpperCase()}</p>
            </div>
            
            <div class="puzzle-description">
                <p>${puzzle.description}</p>
                <p class="instructions">${puzzle.instructions}</p>
            </div>
            
            <div class="puzzle-workspace">
                <div class="position-grid-visual">
                    ${this.renderPositionGrid(puzzle)}
                </div>
                
                <div class="participant-pool">
                    <h4>Available Participants:</h4>
                    <div class="participant-tokens">
                        ${puzzle.participants.map(p => {
                            const placed = Object.values(this.puzzleState.positions).includes(p);
                            return `
                                <div class="participant-token ${placed ? 'placed' : ''} ${this.selectedParticipant === p ? 'selected' : ''}" 
                                     data-participant="${p}"
                                     onclick="gm.selectParticipant('${p}')">
                                    ${p}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
            
            <div class="puzzle-clues">
                <h4>📜 Clues:</h4>
                <div class="clues-list">
                    ${puzzle.clues.map((clue, i) => `
                        <div class="clue-item">
                            <span class="clue-number">${i + 1}.</span>
                            <span class="clue-text">${clue}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${puzzle.meta_hints ? `
                <div class="puzzle-hints">
                    <h4>💡 Meta Hints (if truly stuck):</h4>
                    ${puzzle.meta_hints.map((hint, i) => `
                        <div class="hint-item" id="hint-${i}">
                            <button class="hint-reveal-btn" onclick="gm.revealHint(${i})">Reveal Hint ${i + 1}</button>
                            <span class="hint-text hidden">${hint}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            <div class="puzzle-actions">
                <button class="check-btn" onclick="gm.checkPositionPuzzle()">✓ Check Solution</button>
                <button class="reset-btn" onclick="gm.resetPositionPuzzle()">↺ Reset</button>
            </div>
            
            <div class="puzzle-result" id="position-puzzle-result"></div>
        </div>
    `;
    
    this.setContent('Logic Puzzle: Positions', content);
}

revealHint(index) {
    const hintItem = document.getElementById(`hint-${index}`);
    const button = hintItem.querySelector('.hint-reveal-btn');
    const text = hintItem.querySelector('.hint-text');
    
    button.style.display = 'none';
    text.classList.remove('hidden');
}

renderPositionGrid(puzzle) {
    const gridPositions = {
        'NW': { row: 1, col: 1 },
        'NORTH': { row: 1, col: 2 },
        'NE': { row: 1, col: 3 },
        'WEST': { row: 2, col: 1 },
        'CENTER': { row: 2, col: 2 },
        'EAST': { row: 2, col: 3 },
        'SW': { row: 3, col: 1 },
        'SOUTH': { row: 3, col: 2 },
        'SE': { row: 3, col: 3 },
        'S-SW': { row: 4, col: 1 },
        'S-CENTER': { row: 4, col: 2 },
        'S-SE': { row: 4, col: 3 },
        'OUTER': { row: 5, col: 2 }
    };
    
    return `
        <div class="position-grid">
            ${Object.entries(puzzle.positions).map(([pos, data]) => {
                const placed = this.puzzleState.positions[pos];
                const gridPos = gridPositions[pos] || { row: 5, col: 1 };
                return `
                    <div class="position-slot" 
                         style="grid-row: ${gridPos.row}; grid-column: ${gridPos.col};"
                         data-position="${pos}"
                         onclick="gm.placeParticipant('${pos}')">
                        <span class="position-label">${pos}</span>
                        <span class="position-holder">${placed || '—'}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

selectParticipant(name) {
    this.selectedParticipant = name;
    document.querySelectorAll('.participant-token').forEach(t => t.classList.remove('selected'));
    const token = document.querySelector(`[data-participant="${name}"]`);
    if (token) token.classList.add('selected');
}

placeParticipant(position) {
    if (!this.selectedParticipant) {
        this.showToast('Select a participant first');
        return;
    }
    
    // Remove from old position if already placed
    Object.keys(this.puzzleState.positions).forEach(pos => {
        if (this.puzzleState.positions[pos] === this.selectedParticipant) {
            this.puzzleState.positions[pos] = null;
        }
    });
    
    // Place in new position
    this.puzzleState.positions[position] = this.selectedParticipant;
    this.selectedParticipant = null;
    
    // Re-render
    this.showPositionPuzzle();
}

checkPositionPuzzle() {
    const puzzle = this.getLogicPuzzles().position_puzzle;
    let correct = 0;
    let errors = [];
    
    Object.entries(puzzle.positions).forEach(([pos, data]) => {
        const placed = this.puzzleState.positions[pos];
        if (placed === data.correct) {
            correct++;
        } else if (placed) {
            errors.push(`${pos}: ${placed} should be ${data.correct}`);
        } else {
            errors.push(`${pos}: Empty (should be ${data.correct})`);
        }
    });
    
    const total = Object.keys(puzzle.positions).length;
    const resultDiv = document.getElementById('position-puzzle-result');
    
    let resultHtml = '';
    if (correct === total) {
        resultHtml = `
            <div class="result success">
                <h3>✓ Perfect!</h3>
                <p>${puzzle.consequences.perfect}</p>
            </div>
        `;
        this.logEvent('Position Puzzle: PERFECT');
    } else if (errors.length <= 2) {
        resultHtml = `
            <div class="result partial">
                <h3>⚠️ Minor Errors (${correct}/${total})</h3>
                <p>${puzzle.consequences.minor_errors}</p>
                <ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>
            </div>
        `;
        this.logEvent('Position Puzzle: Minor errors');
    } else {
        resultHtml = `
            <div class="result failure">
                <h3>✗ Major Errors (${correct}/${total})</h3>
                <p>${puzzle.consequences.major_errors}</p>
                <ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>
            </div>
        `;
        this.adjustIntegrity(-2);
        this.logEvent('Position Puzzle: FAILED');
    }
    
    resultDiv.innerHTML = resultHtml;
}

resetPositionPuzzle() {
    this.puzzleState.positions = {};
    this.selectedParticipant = null;
    this.showPositionPuzzle();
}

revealHint(index) {
    const hintDiv = document.getElementById(`hint-${index}`);
    hintDiv.classList.remove('hidden');
    hintDiv.querySelector('button').style.display = 'none';
}
// Fixed showCandleSequence - uses 'solution_logic' instead of 'explanation'
showCandleSequence() {
    const puzzle = this.getLogicPuzzles().candle_sequence;
    
    if (!this.puzzleState) this.puzzleState = {};
    if (!this.puzzleState.candleOrder) this.puzzleState.candleOrder = [];
    
    const content = `
        <div class="logic-puzzle candle-puzzle">
            <div class="puzzle-header">
                <h2>🕯️ ${puzzle.title}</h2>
                <p class="puzzle-type">Type: ${puzzle.type.toUpperCase()}</p>
            </div>
            
            <div class="puzzle-description">
                <p>${puzzle.description}</p>
                <p class="instructions">${puzzle.instructions}</p>
            </div>
            
            <div class="candle-principles">
                <h4>📜 Principles of Lighting:</h4>
                <ul>
                    ${puzzle.principles.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
            
            <div class="candle-workspace">
                <div class="candle-display">
                    ${puzzle.candles.map(c => {
                        const orderIndex = this.puzzleState.candleOrder.indexOf(c.position);
                        const isLit = orderIndex !== -1;
                        return `
                            <div class="candle ${isLit ? 'lit' : ''}" onclick="gm.lightCandle('${c.position}')">
                                <div class="candle-flame ${isLit ? 'burning' : ''}" style="${isLit ? `background: ${c.color}` : ''}"></div>
                                <div class="candle-body"></div>
                                <div class="candle-info">
                                    <span class="candle-position">${c.position}</span>
                                    <span class="candle-desc">${c.description}</span>
                                    ${isLit ? `<span class="candle-order">#${orderIndex + 1}</span>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="current-sequence">
                    <h4>Current Sequence:</h4>
                    <div class="sequence-display">
                        ${this.puzzleState.candleOrder.length > 0 
                            ? this.puzzleState.candleOrder.map((pos, i) => `<span class="seq-item">${i + 1}. ${pos}</span>`).join(' → ')
                            : '<em>No candles lit yet</em>'
                        }
                    </div>
                </div>
            </div>
            
            <div class="puzzle-actions">
                <button class="check-btn" onclick="gm.checkCandleSequence()">✓ Check Sequence</button>
                <button class="reset-btn" onclick="gm.resetCandleSequence()">↺ Reset</button>
            </div>
            
            <div class="puzzle-result" id="candle-puzzle-result"></div>
            
            <div class="solution-reveal hidden" id="candle-solution">
                <h4>Solution Logic:</h4>
                <ol>
                    ${puzzle.solution_logic.map(e => `<li>${e}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
    
    this.setContent('Logic Puzzle: Candle Sequence', content);
}

checkCandleSequence() {
    const puzzle = this.getLogicPuzzles().candle_sequence;
    const correct = puzzle.correct_order;
    const player = this.puzzleState.candleOrder;
    
    const resultDiv = document.getElementById('candle-puzzle-result');
    let resultHtml = '';
    
    // Check for specific wrong patterns
    if (player.length === 0) {
        resultHtml = `<div class="result warning"><h3>No candles lit yet</h3></div>`;
    } else if (player[0] === 'CENTER') {
        resultHtml = `
            <div class="result failure">
                <h3>💥 CENTER Lit First!</h3>
                <p>${puzzle.wrong_order_consequences.CENTER_first}</p>
            </div>
        `;
        this.logEvent('Candle Sequence: CENTER FIRST - Oracle damaged');
    } else if (player[0] === 'EAST') {
        resultHtml = `
            <div class="result failure">
                <h3>✗ EAST (Question) Lit First!</h3>
                <p>${puzzle.wrong_order_consequences.EAST_first}</p>
            </div>
        `;
        this.logEvent('Candle Sequence: EAST FIRST - Ritual inverts');
    } else if (player.indexOf('EAST') !== -1 && player.indexOf('WEST') !== -1 && 
               player.indexOf('EAST') < player.indexOf('WEST')) {
        resultHtml = `
            <div class="result failure">
                <h3>✗ EAST Before WEST!</h3>
                <p>${puzzle.wrong_order_consequences.EAST_before_WEST}</p>
            </div>
        `;
        this.logEvent('Candle Sequence: EAST before WEST');
    } else if (player.indexOf('SOUTH') !== -1 && player.indexOf('NORTH') !== -1 && 
               player.indexOf('SOUTH') < player.indexOf('NORTH')) {
        resultHtml = `
            <div class="result failure">
                <h3>✗ SOUTH Before NORTH!</h3>
                <p>${puzzle.wrong_order_consequences.SOUTH_before_NORTH}</p>
            </div>
        `;
        this.logEvent('Candle Sequence: SOUTH before NORTH');
    } else if (JSON.stringify(player) === JSON.stringify(correct)) {
        resultHtml = `
            <div class="result success">
                <h3>✓ Perfect Sequence!</h3>
                <p>The candles are lit in the correct order. The ritual can proceed.</p>
            </div>
        `;
        this.logEvent('Candle Sequence: PERFECT');
    } else if (player.length === 5) {
        // All lit but wrong order
        let differences = 0;
        for (let i = 0; i < 5; i++) {
            if (player[i] !== correct[i]) differences++;
        }
        resultHtml = `
            <div class="result partial">
                <h3>⚠️ Sequence Has Errors</h3>
                <p>${puzzle.wrong_order_consequences.general_wrong}</p>
                <p>${differences} positions differ from optimal order.</p>
            </div>
        `;
        this.adjustIntegrity(-1);
        this.logEvent('Candle Sequence: Partial errors');
    } else {
        resultHtml = `
            <div class="result warning">
                <h3>Sequence Incomplete</h3>
                <p>${player.length} of 5 candles lit. Continue lighting to complete.</p>
            </div>
        `;
    }
    
    resultDiv.innerHTML = resultHtml;
    
    // Show solution after checking
    if (player.length === 5) {
        document.getElementById('candle-solution').classList.remove('hidden');
    }
}


lightCandle(position) {
    if (!this.puzzleState.candleOrder.includes(position)) {
        this.puzzleState.candleOrder.push(position);
        this.showCandleSequence();
    }
}

checkCandleSequence() {
    const puzzle = this.getLogicPuzzles().candle_sequence;
    const correct = puzzle.correct_order;
    const player = this.puzzleState.candleOrder;
    
    const resultDiv = document.getElementById('candle-puzzle-result');
    let resultHtml = '';
    
    if (JSON.stringify(player) === JSON.stringify(correct)) {
        resultHtml = `
            <div class="result success">
                <h3>✓ Perfect Sequence!</h3>
                <p>${puzzle.consequences.perfect}</p>
            </div>
        `;
        this.logEvent('Candle Sequence: PERFECT');
    } else if (player[0] === 'CENTER') {
        resultHtml = `
            <div class="result failure">
                <h3>💥 CENTER Lit First!</h3>
                <p>${puzzle.consequences.center_early}</p>
            </div>
        `;
        this.logEvent('Candle Sequence: CENTER FIRST - Oracle damaged');
    } else if (player[0] !== correct[0]) {
        resultHtml = `
            <div class="result failure">
                <h3>✗ Wrong First Candle</h3>
                <p>${puzzle.consequences.wrong_first}</p>
            </div>
        `;
        this.logEvent('Candle Sequence: Wrong first candle');
    } else {
        // Check for swaps
        let swaps = 0;
        for (let i = 0; i < correct.length; i++) {
            if (player[i] !== correct[i]) swaps++;
        }
        resultHtml = `
            <div class="result partial">
                <h3>⚠️ Sequence Has Errors</h3>
                <p>${puzzle.consequences.one_swap}</p>
                <p>${swaps} positions differ from optimal.</p>
            </div>
        `;
        this.adjustIntegrity(-1);
        this.logEvent('Candle Sequence: Partial errors');
    }
    
    resultDiv.innerHTML = resultHtml;
    document.getElementById('candle-solution').classList.remove('hidden');
}

resetCandleSequence() {
    this.puzzleState.candleOrder = [];
    this.showCandleSequence();
}

// Balance Puzzle

// Fixed showBalancePuzzle - uses 'actions' instead of 'actions_and_effects'
showBalancePuzzle() {
    const puzzle = this.getLogicPuzzles().balance_puzzle;
    
    if (!this.puzzleState) this.puzzleState = {};
    if (!this.puzzleState.balance) {
        this.puzzleState.balance = {};
        puzzle.elements.forEach(e => {
            this.puzzleState.balance[e.name.toLowerCase()] = e.value;
        });
    }
    
    const content = `
        <div class="logic-puzzle balance-puzzle">
            <div class="puzzle-header">
                <h2>⚖️ ${puzzle.title}</h2>
                <p class="puzzle-type">Type: ${puzzle.type.toUpperCase()}</p>
            </div>
            
            <div class="puzzle-description">
                <p>${puzzle.description}</p>
                <p class="instructions">${puzzle.instructions}</p>
            </div>
            
            <div class="balance-display">
                ${puzzle.elements.map(e => {
                    const value = this.puzzleState.balance[e.name.toLowerCase()];
                    const danger = value >= 9 || value <= 1;
                    const critical = value >= 10 || value <= 0;
                    return `
                        <div class="balance-element ${danger ? 'danger' : ''} ${critical ? 'critical' : ''}">
                            <span class="element-icon">${e.icon}</span>
                            <span class="element-name">${e.name}</span>
                            <div class="element-bar">
                                <div class="element-fill" style="width: ${value * 10}%"></div>
                                <span class="element-value">${value}</span>
                            </div>
                            <span class="element-extremes">
                                <span class="extreme-min">${e.min_name || 'Empty'}</span> ↔ 
                                <span class="extreme-max">${e.max_name || 'Full'}</span>
                            </span>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="balance-status">
                ${this.getBalanceStatus(puzzle)}
            </div>
            
            <div class="balance-actions">
                <h4>Actions (GM: click when action occurs to apply hidden effect):</h4>
                <div class="action-grid">
                    ${puzzle.actions.map((a, i) => `
                        <button class="action-btn" onclick="gm.applyBalanceAction(${i})">
                            <span class="action-actor">${a.actor}:</span>
                            <span class="action-name">${a.action}</span>
                            <span class="action-visible">${a.visible_effect}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <div class="balance-crisis">
                <h4>⚠️ Crisis Points (GM Reference):</h4>
                <div class="crisis-grid">
                    ${Object.entries(puzzle.crisis_points).map(([key, effect]) => `
                        <div class="crisis-item">
                            <span class="crisis-trigger">${key.replace('_', ' ').toUpperCase()}</span>
                            <span class="crisis-effect">${effect}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="puzzle-actions">
                <button class="reset-btn" onclick="gm.resetBalancePuzzle()">↺ Reset</button>
            </div>
        </div>
    `;
    
    this.setContent('Logic Puzzle: Balance', content);
}

applyBalanceAction(index) {
    const puzzle = this.getLogicPuzzles().balance_puzzle;
    const action = puzzle.actions[index];
    
    // Get hidden effect based on action
    const effectKey = this.getBalanceEffectKey(action);
    const effect = puzzle.hidden_effects[effectKey];
    
    if (effect) {
        Object.entries(effect).forEach(([element, change]) => {
            if (this.puzzleState.balance[element] !== undefined) {
                this.puzzleState.balance[element] = Math.max(0, Math.min(10, this.puzzleState.balance[element] + change));
            }
        });
    }
    
    this.logEvent(`Balance action: ${action.actor} - ${action.action}`);
    this.showToast(`${action.visible_effect}`);
    this.showBalancePuzzle();
    
    // Check for catastrophic events
    this.checkBalanceCatastrophe(puzzle);
}

getBalanceEffectKey(action) {
    // Map actions to their hidden effect keys
    const actionMap = {
        'Pushes ice harder': 'archie_pushes',
        'Relaxes control': 'archie_relaxes',
        'Shows emotion': 'archie_emotion',
        'Gives an order': 'rodger_orders',
        'Shows uncertainty': 'rodger_uncertain',
        'Panics': 'squad_panic',
        'Holds discipline': 'squad_discipline',
        'Does something weird': 'waluigi_weird',
        'Stays perfectly still': 'waluigi_still',
        'Speaks': 'dan_speaks',
        'Moves': 'dan_moves',
        'Remains passive': 'dan_passive',
        'Looks loyal': 'hjumpik_loyal',
        'Looks doubtful': 'hjumpik_doubt',
        'Tells truth they\'d rather hide': 'truth_told',
        'Lies or omits': 'lie_told',
        'Calms someone afraid': 'calm_given',
        'Expresses fear': 'fear_shown'
    };
    
    return actionMap[action.action] || null;
}

checkBalanceCatastrophe(puzzle) {
    const balance = this.puzzleState.balance;
    
    if (balance.fire >= 10) {
        this.showToast('🔥 FIRE AT 10! Summoning begins!', 'error');
        setTimeout(() => this.showFailureSubpage('archie_fire'), 1500);
    }
    if (balance.ice <= 0) {
        this.showToast('❄️ ICE AT 0! Fire uncontained!', 'error');
    }
    if (balance.order <= 0) {
        this.showToast('⚖️ ORDER AT 0! Squad panic!', 'error');
        setTimeout(() => this.showFailureSubpage('squad_panic'), 1500);
    }
    if (balance.chaos >= 10) {
        this.showToast('🌀 CHAOS AT 10! Reality unstable!', 'error');
    }
    if (balance.truth <= 0) {
        this.showToast('🪞 TRUTH AT 0! Mirror is lying!', 'error');
    }
    if (balance.truth >= 10) {
        this.showToast('🪞 TRUTH AT 10! Painful revelations!', 'error');
    }
}

getBalanceStatus(puzzle) {
    const values = Object.values(this.puzzleState.balance);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const gap = max - min;
    
    let status = '';
    
    // Check for criticals
    Object.entries(this.puzzleState.balance).forEach(([element, value]) => {
        if (value >= 10) {
            status += `<div class="status-critical">🔴 ${element.toUpperCase()} at 10! ${puzzle.cascade_effects[element + '_10']}</div>`;
        }
        if (value <= 0) {
            status += `<div class="status-critical">🔴 ${element.toUpperCase()} at 0! ${puzzle.cascade_effects[element + '_0']}</div>`;
        }
    });
    
    // Check gap
    if (gap > 5) {
        status += `<div class="status-warning">⚠️ Imbalance! Gap of ${gap} between highest and lowest. Cascade imminent!</div>`;
    } else if (gap <= 1) {
        status += `<div class="status-good">✓ Perfect Balance! All elements within 1 of each other.</div>`;
    } else {
        status += `<div class="status-ok">Balance Gap: ${gap} (keep under 5)</div>`;
    }
    
    return status;
}

formatBalanceEffect(effect) {
    return Object.entries(effect).map(([key, val]) => `${key}: ${val > 0 ? '+' : ''}${val}`).join(', ');
}

applyBalanceAction(index) {
    const puzzle = this.getLogicPuzzles().balance_puzzle;
    const action = puzzle.actions_and_effects[index];
    
    Object.entries(action.effect).forEach(([element, change]) => {
        this.puzzleState.balance[element] = Math.max(0, Math.min(10, this.puzzleState.balance[element] + change));
    });
    
    this.logEvent(`Balance: ${action.action}`);
    this.showBalancePuzzle();
    
    // Check for catastrophic events
    this.checkBalanceCatastrophe(puzzle);
}

checkBalanceCatastrophe(puzzle) {
    Object.entries(this.puzzleState.balance).forEach(([element, value]) => {
        if (value >= 10 && element === 'fire') {
            this.showToast('FIRE AT 10! Triggering Fire Catastrophe!', 'error');
            setTimeout(() => this.showFailureSubpage('archie_fire'), 1000);
        }
        if (value <= 0 && element === 'ice') {
            this.showToast('ICE AT 0! Fire uncontained!', 'error');
        }
        if (value <= 0 && element === 'order') {
            this.showToast('ORDER AT 0! Squad panic!', 'error');
            setTimeout(() => this.showFailureSubpage('squad_panic'), 1000);
        }
    });
}

resetBalancePuzzle() {
    this.puzzleState.balance = null;
    this.showBalancePuzzle();
}
showDanDeduction() {
    const puzzle = this.getLogicPuzzles().dan_deduction;
    
    if (!this.puzzleState) this.puzzleState = {};
    if (!this.puzzleState.danEvidence) {
        this.puzzleState.danEvidence = {
            toward_real: 0,
            toward_fragment: 0,
            toward_impostor: 0,
            toward_unknown: 0,
            findings: []
        };
    }
    
    const evidence = this.puzzleState.danEvidence;
    
    const content = `
        <div class="logic-puzzle dan-puzzle">
            <div class="puzzle-header">
                <h2>🦾 ${puzzle.title}</h2>
                <p class="puzzle-type">Type: ${puzzle.type.toUpperCase()}</p>
            </div>
            
            <div class="puzzle-description">
                <p>${puzzle.description}</p>
                <p class="instructions">${puzzle.instructions}</p>
            </div>
            
            <div class="evidence-scores">
                <div class="score-card real">
                    <span class="score-label">Dan IS Dan</span>
                    <span class="score-value">${evidence.toward_real}</span>
                    <button onclick="gm.adjustDanScore('toward_real', 1)">+</button>
                    <button onclick="gm.adjustDanScore('toward_real', -1)">−</button>
                </div>
                <div class="score-card fragment">
                    <span class="score-label">Dan + Fragment</span>
                    <span class="score-value">${evidence.toward_fragment}</span>
                    <button onclick="gm.adjustDanScore('toward_fragment', 1)">+</button>
                    <button onclick="gm.adjustDanScore('toward_fragment', -1)">−</button>
                </div>
                <div class="score-card impostor">
                    <span class="score-label">NOT Dan</span>
                    <span class="score-value">${evidence.toward_impostor}</span>
                    <button onclick="gm.adjustDanScore('toward_impostor', 1)">+</button>
                    <button onclick="gm.adjustDanScore('toward_impostor', -1)">−</button>
                </div>
                <div class="score-card unknown">
                    <span class="score-label">Unknowable</span>
                    <span class="score-value">${evidence.toward_unknown}</span>
                    <button onclick="gm.adjustDanScore('toward_unknown', 1)">+</button>
                    <button onclick="gm.adjustDanScore('toward_unknown', -1)">−</button>
                </div>
            </div>
            
            <div class="evidence-status">
                ${this.getDanEvidenceStatus(evidence, puzzle)}
            </div>
            
            <div class="evidence-board">
                ${Object.entries(puzzle.evidence_board).map(([key, category]) => `
                    <div class="evidence-category">
                        <h3>${category.icon} ${category.category}</h3>
                        <div class="evidence-questions">
                            ${category.questions.map((q, i) => `
                                <div class="evidence-question">
                                    <div class="question-text">${q.question}</div>
                                    <div class="question-method"><strong>How to check:</strong> ${q.how_to_check}</div>
                                    <div class="question-implications">
                                        <strong>Implications:</strong>
                                        <ul>
                                            ${Object.entries(q.implications).map(([result, meaning]) => `
                                                <li><em>${result}:</em> ${meaning}</li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="evidence-findings">
                <h3>📋 Recorded Findings</h3>
                <textarea id="dan-findings" placeholder="Record your evidence and reasoning here...">${evidence.findings.join('\n')}</textarea>
                <button onclick="gm.saveDanFindings()">Save Findings</button>
            </div>
            
            <div class="evidence-thresholds">
                <h4>Thresholds:</h4>
                <ul>
                    ${Object.entries(puzzle.thresholds).map(([key, desc]) => `
                        <li><strong>${key}:</strong> ${desc}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    
    this.setContent('Investigation: The Question of Dan', content);
}

adjustDanScore(category, amount) {
    this.puzzleState.danEvidence[category] = Math.max(0, this.puzzleState.danEvidence[category] + amount);
    this.showDanDeduction();
}

getDanEvidenceStatus(evidence, puzzle) {
    const scores = [
        { name: 'Dan IS Dan', value: evidence.toward_real },
        { name: 'Dan + Fragment', value: evidence.toward_fragment },
        { name: 'NOT Dan', value: evidence.toward_impostor },
        { name: 'Unknowable', value: evidence.toward_unknown }
    ];
    
    scores.sort((a, b) => b.value - a.value);
    const highest = scores[0];
    const second = scores[1];
    const gap = highest.value - second.value;
    
    let status = '';
    
    if (highest.value >= 8) {
        status = `<div class="status-certain">CERTAIN: ${highest.name} (${highest.value} points). You can challenge the mirror.</div>`;
    } else if (highest.value >= 5 && gap >= 3) {
        status = `<div class="status-likely">LIKELY: ${highest.name} (${highest.value} points, +${gap} lead). Advantage on challenge.</div>`;
    } else if (highest.value >= 6 && second.value >= 6) {
        status = `<div class="status-paradox">PARADOX: ${highest.name} AND ${second.name} both strong. This is worse.</div>`;
    } else {
        status = `<div class="status-unclear">UNCLEAR: No strong conclusion. Mirror will decide.</div>`;
    }
    
    return status;
}

saveDanFindings() {
    const textarea = document.getElementById('dan-findings');
    this.puzzleState.danEvidence.findings = textarea.value.split('\n');
    this.showToast('Findings saved');
    this.logEvent('Dan investigation findings updated');
}
showExitPuzzle() {
    const puzzle = this.getLogicPuzzles().exit_puzzle;
    
    if (!this.puzzleState) this.puzzleState = {};
    if (!this.puzzleState.exitOrder) this.puzzleState.exitOrder = [];
    
    const content = `
        <div class="logic-puzzle exit-puzzle">
            <div class="puzzle-header">
                <h2>🚪 ${puzzle.title}</h2>
                <p class="puzzle-type">Type: ${puzzle.type.toUpperCase()}</p>
            </div>
            
            <div class="puzzle-description">
                <p>${puzzle.description}</p>
                <p class="instructions">${puzzle.instructions}</p>
            </div>
            
            <div class="exit-rules">
                <h4>📜 Rules of Unwinding:</h4>
                <ul>
                    ${puzzle.rules.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>
            
            <div class="exit-constraints">
                <h4>⚠️ Constraints:</h4>
                <ul class="constraint-list">
                    ${puzzle.constraints.map(c => `<li>${c}</li>`).join('')}
                </ul>
            </div>
            
            <div class="exit-workspace">
                <div class="exit-sequence-display">
                    <h4>Exit Order:</h4>
                    <div class="sequence-slots">
                        ${[1,2,3,4,5,6].map(slot => {
                            const group = this.puzzleState.exitOrder[slot - 1];
                            return `
                                <div class="exit-slot" data-slot="${slot}">
                                    <span class="slot-number">${slot}</span>
                                    <span class="slot-content">${group ? group.join(', ') : '—'}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="exit-groups">
                    <h4>Groups to Place:</h4>
                    ${puzzle.groups.map(g => {
                        const placed = this.puzzleState.exitOrder.some(order => 
                            order && order.some(m => g.members.includes(m))
                        );
                        return `
                            <div class="exit-group ${placed ? 'placed' : ''}" 
                                 onclick="gm.placeExitGroup('${g.id}')">
                                <span class="group-members">${g.members.join(', ')}</span>
                                ${g.exit_together ? '<span class="must-together">Must exit together</span>' : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div class="puzzle-actions">
                <button class="check-btn" onclick="gm.checkExitPuzzle()">✓ Check Order</button>
                <button class="reset-btn" onclick="gm.resetExitPuzzle()">↺ Reset</button>
            </div>
            
            <div class="puzzle-result" id="exit-puzzle-result"></div>
        </div>
    `;
    
    this.setContent('Logic Puzzle: Exit Sequence', content);
}

placeExitGroup(groupId) {
    const puzzle = this.getLogicPuzzles().exit_puzzle;
    const group = puzzle.groups.find(g => g.id === groupId);
    
    if (!group) return;
    
    // Find next empty slot
    let slot = this.puzzleState.exitOrder.length;
    if (slot >= 6) {
        this.showToast('All slots filled. Reset to change.');
        return;
    }
    
    this.puzzleState.exitOrder.push(group.members);
    this.showExitPuzzle();
}

checkExitPuzzle() {
    const puzzle = this.getLogicPuzzles().exit_puzzle;
    const playerOrder = this.puzzleState.exitOrder;
    const correctOrder = puzzle.correct_order;
    
    let errors = [];
    let correct = 0;
    
    for (let i = 0; i < correctOrder.length; i++) {
        const expected = correctOrder[i].who.sort().join(',');
        const actual = playerOrder[i] ? playerOrder[i].sort().join(',') : '';
        
        if (expected === actual) {
            correct++;
        } else if (playerOrder[i]) {
            errors.push(`Position ${i + 1}: Expected ${correctOrder[i].who.join(', ')}`);
        }
    }
    
    // Check specific dangerous errors
    const oracleIndex = playerOrder.findIndex(g => g && g.includes('Oracle'));
    const danIndex = playerOrder.findIndex(g => g && g.includes('Dan'));
    
    let criticalErrors = [];
    if (oracleIndex !== -1 && oracleIndex < 5) {
        criticalErrors.push('Oracle left before others — ritual collapses');
    }
    if (danIndex !== -1 && danIndex >= 5) {
        criticalErrors.push('Dan left last — answer crystallized (possibly wrong)');
    }
    
    const resultDiv = document.getElementById('exit-puzzle-result');
    
    if (correct === 6) {
    resultDiv.innerHTML = `
        <div class="result partial">
            <h3>⚠️ Orderly Collapse</h3>
            <p>You manage to exit the ritual space in order before the final rupture. This may influence your destination, but the collapse is still coming.</p>
            <p>Proceed to the Aftermath scene to roll for your destination.</p>
        </div>
    `;
    } else if (criticalErrors.length > 0) {
        resultDiv.innerHTML = `
            <div class="result failure">
                <h3>✗ Critical Errors</h3>
                <ul>${criticalErrors.map(e => `<li>${e}</li>`).join('')}</ul>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="result partial">
                <h3>⚠️ Sequence Errors (${correct}/6 correct)</h3>
                <ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>
            </div>
        `;
    }
}

resetExitPuzzle() {
    this.puzzleState.exitOrder = [];
    this.showExitPuzzle();
}
showSpeakingPuzzle() {
    const puzzle = this.getLogicPuzzles().speaking_puzzle;
    
    if (!this.puzzleState) this.puzzleState = {};
    if (!this.puzzleState.speakingAnswers) this.puzzleState.speakingAnswers = {};
    
    const content = `
        <div class="logic-puzzle speaking-puzzle">
            <div class="puzzle-header">
                <h2>🗣️ ${puzzle.title}</h2>
                <p class="puzzle-type">Type: ${puzzle.type.toUpperCase()}</p>
            </div>
            
            <div class="puzzle-description">
                <p>${puzzle.description}</p>
                <p class="instructions">${puzzle.instructions}</p>
            </div>
            
            <div class="phrase-cards">
                ${puzzle.phrases.map(phrase => this.renderPhraseCard(phrase)).join('')}
            </div>
            
            <div class="interruption-rules">
                <h4>📋 If Interrupted:</h4>
                <ul>
                    ${Object.entries(puzzle.interruption_rules).map(([key, value]) => `
                        <li><strong>${key.replace(/_/g, ' ')}:</strong> ${value}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
    
    this.setContent('Logic Puzzle: The Oracle\'s Words', content);
}

// In showSpeakingPuzzle, update the submit button:
// In showSpeakingPuzzle, update the submit button:
renderPhraseCard(phrase) {
    const answer = this.puzzleState.speakingAnswers?.[phrase.id];
    const isCorrect = answer === phrase.correct;
    const wrongEffect = answer && !isCorrect ? phrase.wrong_effects[answer] : null;
    
    const safeId = phrase.id.replace(/[^a-zA-Z0-9_-]/g, '_');
    
    return `
        <div class="phrase-card ${answer ? (isCorrect ? 'correct' : 'wrong') : ''}">
            <div class="phrase-purpose">${phrase.id.toUpperCase()}: ${phrase.context || ''}</div>
            
            <div class="phrase-text">
                <span class="spoken-words">"${phrase.spoken.replace('_____', `<span class="blank">${answer || '_____'}</span>`)}"</span>
            </div>
            
            ${!answer ? `
                <div class="word-input">
                    <input type="text" id="input-${safeId}" placeholder="Enter the word...">
                    <button data-phraseid="${phrase.id}" onclick="gm.submitPhraseWordFromButton(this)">Submit</button>
                </div>
            ` : ''}
            
            ${answer && isCorrect ? `
                <div class="phrase-result correct">
                    ✓ Correct. The phrase is complete.
                </div>
            ` : ''}
            
            ${wrongEffect ? `
                <div class="phrase-result wrong">
                    ✗ Wrong word: "${answer}"
                    <div class="wrong-effect">${wrongEffect}</div>
                </div>
            ` : ''}
        </div>
    `;
}

submitPhraseWordFromButton(button) {
    const phraseId = button.dataset.phraseid;
    this.submitPhraseWord(phraseId);
}

submitPhraseWord(phraseId) {
    const safeId = phraseId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const input = document.getElementById(`input-${safeId}`);
    if (!input) {
        console.error('Input not found for phrase:', phraseId);
        return;
    }
    
    const word = input.value.toLowerCase().trim();
    
    if (!word) return;
    
    if (!this.puzzleState.speakingAnswers) {
        this.puzzleState.speakingAnswers = {};
    }
    this.puzzleState.speakingAnswers[phraseId] = word;
    
    const puzzle = this.getLogicPuzzles().speaking_puzzle;
    const phrase = puzzle.phrases.find(p => p.id === phraseId);
    
    if (phrase && word === phrase.correct) {
        this.logEvent(`Oracle phrase "${phraseId}" completed correctly`);
        this.showToast('Correct word!');
    } else if (phrase) {
        const effect = phrase.wrong_effects[word] || 'Unknown effect';
        this.logEvent(`Oracle phrase "${phraseId}" WRONG: "${word}" — ${effect}`);
        this.showToast('Wrong word — see consequences', 'error');
    }
    
    this.showSpeakingPuzzle();
}
submitPhraseWordFromButton(button) {
    const phraseId = button.dataset.phraseid;
    this.submitPhraseWord(phraseId);
}

submitPhraseWord(phraseId) {
    const safeId = phraseId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const input = document.getElementById(`input-${safeId}`);
    if (!input) {
        console.error('Input not found for phrase:', phraseId);
        return;
    }
    
    const word = input.value.toLowerCase().trim();
    
    if (!word) return;
    
    if (!this.puzzleState.speakingAnswers) {
        this.puzzleState.speakingAnswers = {};
    }
    this.puzzleState.speakingAnswers[phraseId] = word;
    
    const puzzle = this.getLogicPuzzles().speaking_puzzle;
    const phrase = puzzle.phrases.find(p => p.id === phraseId);
    
    if (phrase && word === phrase.correct) {
        this.logEvent(`Oracle phrase "${phraseId}" completed correctly`);
        this.showToast('Correct word!');
    } else if (phrase) {
        const effect = phrase.wrong_effects[word] || 'Unknown effect';
        this.logEvent(`Oracle phrase "${phraseId}" WRONG: "${word}" — ${effect}`);
        this.showToast('Wrong word — see consequences', 'error');
    }
    
    this.showSpeakingPuzzle();
}


submitPhraseWord(phraseId) {
    const input = document.getElementById(`input-${phraseId}`);
    const word = input.value.toLowerCase().trim();
    
    if (!word) return;
    
    this.puzzleState.speakingAnswers[phraseId] = word;
    
    const puzzle = this.getLogicPuzzles().speaking_puzzle;
    const phrase = puzzle.phrases.find(p => p.id === phraseId);
    
    if (word === phrase.correct) {
        this.logEvent(`Oracle phrase "${phraseId}" completed correctly`);
        this.showToast('Correct word!');
    } else {
        this.logEvent(`Oracle phrase "${phraseId}" WRONG: "${word}" — ${phrase.wrong_effects[word] || 'Unknown effect'}`);
        this.showToast('Wrong word — see consequences', 'error');
    }
    
    this.showSpeakingPuzzle();
}
showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}
// Add navigation for puzzles
showPuzzleMenu() {
    const puzzles = this.getLogicPuzzles();
    
    const content = `
        <div class="puzzle-menu">
            <h2>🧩 Logic Puzzles</h2>
            <p class="subtitle">These puzzles replace dice rolls with player reasoning.</p>
            
            <div class="puzzle-list">
                <div class="puzzle-card" onclick="gm.showPositionPuzzle()">
                    <span class="puzzle-icon">📍</span>
                    <h3>The Circle of Twelve</h3>
                    <p>Deduce where each participant must stand using clues.</p>
                    <span class="puzzle-tag">Deduction</span>
                </div>
                
                <div class="puzzle-card" onclick="gm.showCandleSequence()">
                    <span class="puzzle-icon">🕯️</span>
                    <h3>The Lighting Order</h3>
                    <p>Determine the correct sequence to light the ritual candles.</p>
                    <span class="puzzle-tag">Sequence</span>
                </div>
                
                <div class="puzzle-card" onclick="gm.showMirrorReading()">
                    <span class="puzzle-icon">🪞</span>
                    <h3>Reading the Mirror</h3>
                    <p>Interpret symbolic images shown by the mirror.</p>
                    <span class="puzzle-tag">Interpretation</span>
                </div>
                
                <div class="puzzle-card" onclick="gm.showDanDeduction()">
                    <span class="puzzle-icon">🦾</span>
                    <h3>The Question of Dan</h3>
                    <p>Gather and evaluate evidence to determine Dan's nature.</p>
                    <span class="puzzle-tag">Deduction</span>
                </div>
                
                <div class="puzzle-card" onclick="gm.showBalancePuzzle()">
                    <span class="puzzle-icon">⚖️</span>
                    <h3>The Opposition Balance</h3>
                    <p>Manage five elements to keep them in equilibrium.</p>
                    <span class="puzzle-tag">Resource Management</span>
                </div>
                
                <div class="puzzle-card" onclick="gm.showExitPuzzle()">
                    <span class="puzzle-icon">🚪</span>
                    <h3>The Departure Order</h3>
                    <p>Determine the correct order for participants to exit.</p>
                    <span class="puzzle-tag">Sequence</span>
                </div>
                
                <div class="puzzle-card" onclick="gm.showSpeakingPuzzle()">
                    <span class="puzzle-icon">🗣️</span>
                    <h3>The Oracle's Words</h3>
                    <p>Complete ritual phrases with the correct words.</p>
                    <span class="puzzle-tag">Word Puzzle</span>
                </div>
            </div>
        </div>
    `;
    
    this.setContent('Logic Puzzles', content);
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
<button class="nav-btn" onclick="gm.showPuzzleMenu()" id="nav-puzzles">
    <span class="icon">🧩</span> Logic Puzzles
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
// Add this method to render Dan's choice options
renderDanChoices(scene) {
    if (!scene.danChoice || !scene.choices) return '';
    
    return `
        <div class="dan-choices">
            <h3>🦾 Dan's Options</h3>
            <p class="choice-instruction">GM: Present these options to Dan's player (or decide based on Dan's nature if NPC/secret impostor)</p>
            
            <div class="choice-grid">
                ${scene.choices.map(choice => `
                    <div class="choice-card ${choice.id}" onclick="gm.selectDanChoice('${choice.id}')">
                        <div class="choice-header">
                            <span class="choice-icon">${choice.icon}</span>
                            <h4>${choice.name}</h4>
                        </div>
                        <p class="choice-desc">${choice.description}</p>
                        <div class="choice-consequence">
                            <strong>Consequence:</strong> ${choice.consequence}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div id="dan-choice-result" class="choice-result hidden"></div>
        </div>
    `;
}
renderInterrogations(scene) {
    if (!scene.interrogations || !scene.participantInterrogations) return '';
    
    return `
        <div class="interrogations-section">
            ${scene.interrogationInstructions || ''}
            
            <div class="interrogation-list">
                ${scene.participantInterrogations.map((interrog, i) => `
                    <div class="interrogation-card" id="interrogation-${i}">
                        <div class="interrogation-header" onclick="gm.toggleInterrogation(${i})">
                            <span class="interrog-icon">${interrog.icon}</span>
                            <span class="interrog-who">${interrog.who}</span>
                            <span class="interrog-toggle">▼</span>
                        </div>
                        <div class="interrogation-content hidden" id="interrog-content-${i}">
                            <div class="mirror-shows">
                                <h5>🪞 The Mirror Shows:</h5>
                                <p class="mirror-vision">${interrog.mirrorShows}</p>
                            </div>
                            
                            <div class="the-question">
                                <h5>❓ The Question:</h5>
                                <p class="question-text">"${interrog.theQuestion}"</p>
                            </div>
                            
                            <div class="reactions-section">
                                <h5>Possible Reactions:</h5>
                                <div class="reaction-grid">
                                    ${Object.entries(interrog.reactions).map(([key, reaction]) => `
                                        <div class="reaction-option" onclick="gm.selectReaction(${i}, '${key}')">
                                            <div class="reaction-header">
                                                <strong>${key.charAt(0).toUpperCase() + key.slice(1)}</strong>
                                            </div>
                                            <p class="reaction-desc">${reaction.description}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div class="reaction-result hidden" id="reaction-result-${i}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

toggleInterrogation(index) {
    const content = document.getElementById(`interrog-content-${index}`);
    const header = content.previousElementSibling;
    const toggle = header.querySelector('.interrog-toggle');
    
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        toggle.textContent = '▲';
    } else {
        content.classList.add('hidden');
        toggle.textContent = '▼';
    }
}

selectReaction(interrogIndex, reactionKey) {
    const scenes = this.getSceneData();
    const scene = scenes[this.state.currentScene];
    const interrog = scene.participantInterrogations[interrogIndex];
    const reaction = interrog.reactions[reactionKey];
    
    const resultDiv = document.getElementById(`reaction-result-${interrogIndex}`);
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <div class="selected-reaction">
            <h5>${interrog.who} ${reactionKey}s</h5>
            <div class="consequence">
                <strong>Consequence:</strong>
                <p>${reaction.consequence}</p>
            </div>
            <div class="mechanical">
                <strong>Effect:</strong>
                <p>${reaction.mechanical}</p>
            </div>
        </div>
    `;
    
    this.logEvent(`${interrog.who} interrogation: ${reactionKey} — ${reaction.mechanical}`);
}
selectDanChoice(choiceId) {
    const scenes = this.getSceneData();
    const scene = scenes[this.state.currentScene];
    const choice = scene.choices.find(c => c.id === choiceId);
    
    if (!choice) return;
    
    // Log the choice
    this.logEvent(`Dan chooses: ${choice.name}`);
    
    // Show the result
    const resultDiv = document.getElementById('dan-choice-result');
    resultDiv.classList.remove('hidden');
    resultDiv.innerHTML = `
        <div class="choice-selected">
            <h4>${choice.icon} ${choice.name}</h4>
            
            <div class="oracle-response">
                <span class="speaker">🧙‍♂️ Oracle:</span>
                <p>"${choice.oracleResponse}"</p>
            </div>
            
            <div class="choice-effects">
                <p><strong>What happens:</strong> ${choice.consequence}</p>
                <p><strong>Mechanical effect:</strong> ${choice.mechanicalEffect}</p>
            </div>
            
            ${choice.requiresCheck ? `
                <div class="choice-check">
                    <h5>Required Check:</h5>
                    ${this.renderIntegratedCheck(choice.requiresCheck, 0)}
                </div>
            ` : ''}
            
            ${choice.requiresGroupCheck ? `
                <div class="choice-group-check">
                    <h5>Group Check Required:</h5>
                    <div class="check-card">
                        <div class="check-header">
                            <span class="check-name">${choice.requiresGroupCheck.name}</span>
                            <span class="check-dc">DC ${choice.requiresGroupCheck.dc}</span>
                        </div>
                        <p>${choice.requiresGroupCheck.description}</p>
                        <p><strong>Per-person failure:</strong> ${choice.requiresGroupCheck.perPersonFailure}</p>
                        <p><strong>Mass failure (4+):</strong> ${choice.requiresGroupCheck.massFailure}</p>
                        <button class="roll-btn" onclick="gm.rollGroupCheck(${choice.requiresGroupCheck.dc})">
                            🎲 Roll Group Check
                        </button>
                        <div id="group-check-result" class="roll-result"></div>
                    </div>
                </div>
            ` : ''}
            
            ${choice.collapseCheck ? `
                <div class="collapse-check">
                    <h5>Collapse Prevention:</h5>
                    <p>${choice.collapseCheck.description}</p>
                    <div class="collapse-conditions">
                        ${choice.collapseCheck.conditions.map((cond, i) => `
                            <div class="collapse-condition" id="collapse-cond-${i}">
                                <span class="cond-status">❓</span>
                                <span class="cond-name">${cond.condition}</span>
                                ${cond.preventable ? `
                                    <span class="cond-prevention">${cond.prevention}</span>
                                    ${cond.dc ? `
                                        <button class="small-roll-btn" onclick="gm.rollCollapseCondition(${i}, ${cond.dc})">
                                            🎲 DC ${cond.dc}
                                        </button>
                                    ` : `
                                        <button class="small-choice-btn" onclick="gm.resolveCollapseCondition(${i}, true)">✓ Prevented</button>
                                        <button class="small-choice-btn fail" onclick="gm.resolveCollapseCondition(${i}, false)">✗ Failed</button>
                                    `}
                                ` : `
                                    <span class="cond-auto">Automatic</span>
                                `}
                            </div>
                        `).join('')}
                    </div>
                    <div id="collapse-result" class="collapse-result"></div>
                </div>
            ` : ''}
            
            ${choice.triggerFailure ? `
                <div class="trigger-failure-btn">
                    <button class="trigger-btn" onclick="gm.showFailureSubpage('${choice.triggerFailure}')">
                        ⚠️ Proceed to ${choice.triggerFailure === 'dan_seizes' ? 'Seizure Resolution' : 'Collapse Resolution'}
                    </button>
                </div>
            ` : ''}
            
            <div class="choice-continue">
                <button class="primary-btn" onclick="gm.nextScene()">Continue to Next Scene →</button>
            </div>
        </div>
    `;
}

rollGroupCheck(dc) {
    const participants = ['Archie', 'Rodger', 'Perot', 'Smokin\' J', 'Salam', 'Toad Lee', 'Toadburt', 'Markop', 'Eager', 'Waluigi', 'Hjumpik', 'Oracle'];
    let failures = 0;
    let results = [];
    
    participants.forEach(p => {
        const roll = Math.floor(Math.random() * 20) + 1;
        const success = roll >= dc;
        if (!success) failures++;
        results.push({ name: p, roll, success });
    });
    
    const resultDiv = document.getElementById('group-check-result');
    resultDiv.innerHTML = `
        <div class="group-results">
            <p><strong>Failures: ${failures}/12</strong></p>
            <div class="individual-results">
                ${results.map(r => `
                    <span class="${r.success ? 'success' : 'failure'}">${r.name}: ${r.roll}</span>
                `).join('')}
            </div>
            ${failures >= 4 ? `
                <p class="critical">MASS FAILURE — Ritual misfires!</p>
            ` : failures > 0 ? `
                <p class="warning">${failures} participants affected. -${failures} Integrity.</p>
            ` : `
                <p class="success">All participants resisted!</p>
            `}
        </div>
    `;
    resultDiv.classList.add('show');
    
    // Apply integrity loss
    if (failures > 0 && failures < 4) {
        this.adjustIntegrity(-failures);
    }
    
    this.logEvent(`Group check vs DC ${dc}: ${failures} failures`);
}

rollCollapseCondition(index, dc) {
    const roll = Math.floor(Math.random() * 20) + 1;
    const success = roll >= dc;
    this.resolveCollapseCondition(index, success, roll);
}

resolveCollapseCondition(index, prevented, roll = null) {
    const condDiv = document.getElementById(`collapse-cond-${index}`);
    const statusSpan = condDiv.querySelector('.cond-status');
    
    if (prevented) {
        statusSpan.textContent = '✓';
        statusSpan.classList.add('prevented');
    } else {
        statusSpan.textContent = '✗';
        statusSpan.classList.add('failed');
    }
    
    if (roll !== null) {
        const rollSpan = document.createElement('span');
        rollSpan.className = prevented ? 'roll-success' : 'roll-failure';
        rollSpan.textContent = ` [${roll}]`;
        statusSpan.after(rollSpan);
    }
    
    // Count conditions
    this.checkCollapseState();
}

checkCollapseState() {
    const conditions = document.querySelectorAll('.collapse-condition');
    let failed = 0;
    let resolved = 0;
    
    conditions.forEach(c => {
        const status = c.querySelector('.cond-status');
        if (status.classList.contains('failed')) {
            failed++;
            resolved++;
        } else if (status.classList.contains('prevented')) {
            resolved++;
        }
    });
    
    if (resolved === conditions.length) {
        const resultDiv = document.getElementById('collapse-result');
        if (failed >= 3) {
            resultDiv.innerHTML = `<p class="critical">COLLAPSE! ${failed}/5 conditions failed. Ritual collapses.</p>`;
            resultDiv.classList.add('show');
        } else {
            resultDiv.innerHTML = `<p class="success">Collapse prevented! Only ${failed}/5 conditions failed.</p>`;
            resultDiv.classList.add('show');
        }
    }
}
// Add this new method to the GMSheet class
triggerRitualFailureTeleport(destination) {
    let title, content;
    const commonIntro = `
        <p>Falling, tumbling through silence. The ritual shatters, not into pieces, but into a doorway that pulls you through.</p>
        <p>The oppressive nothingness gives way, and like paint being spread upon a canvas, you watch as a new reality forms around you.</p>
        <p>You are hurled from the portal in a clatter of limbs and equipment.</p>
    `;

    const feywardMarkopText = `
        <h3>Feyward Portal</h3>
        ${commonIntro}
        <p class="critical">On this side of the gateway, you, Markop, are sent sprawling alone. You land prone on hardwood and must make a <strong>DC 10 Dexterity saving throw or suffer 3 (1d6) Bludgeoning damage</strong> from the fall.</p>
        <p>The others are gone. You are in a large, comfortable parlor, worn but finely made. A grand piano sits in an alcove, and strange, beautiful art hangs on the walls. The air smells of autumn and old magic.</p>
        <p>From outside, you can hear music, laughter, and chatter, as if from a manor vibrantly alive, reclaimed by a wild, magical nature.</p>
    `;

    const shadewardGroupText = `
        <h3>Shadeward Portal</h3>
        ${commonIntro}
        <p class="warning">On this side of this gateway, the party is sent sprawling to the floor. Each of you must make a <strong>DC 10 Dexterity saving throw or suffer 3 (1d6) Bludgeoning damage</strong> from the fall.</p>
        <p>You find yourselves in a decadent lounge that feels cold and unused. A grand piano sits in a southern alcove, but discordant sounds drift from other locked doors. The immaculate gray slate and flawless black tiles feel oppressive.</p>
        <p>Outside, the grounds are shades of gray and black, with thorny, unnatural blooms. Every leaf and blade of grass seems to hold shadows more readily than natural, as if scorched by a cold fire.</p>
    `;

    const planarSanctumGroupText = `
        <h3>Planar Sanctum (Best Outcome)</h3>
        ${commonIntro}
        <p class="safe">You land more gently than you expected, cushioned by unseen forces. The air is clean and still. You are in a place of quiet order and immense, neutral power.</p>
        <p>This is a nexus of some kind, a library of realities. The ritual's failure was contained, and you have been deposited in a place between worlds. You are safe, for now, but not home.</p>
    `;
    
    switch(destination) {
        case 'feyward':
            title = 'FAILURE: Feyward Rupture';
            content = feywardMarkopText;
            this.logEvent('Ritual Collapse -> Feyward Manor (Markop Alone)');
            break;
        case 'shadeward':
            title = 'FAILURE: Shadeward Rupture';
            content = shadewardGroupText;
            this.logEvent('Ritual Collapse -> Shadeward Manor');
            break;
        case 'sanctum':
        default:
            title = 'FAILURE: Planar Sanctum';
            content = planarSanctumGroupText;
            this.logEvent('Ritual Collapse -> Planar Sanctum');
            break;
    }
    
    this.setContent(title, `<div class="failure-end">${content}</div>`);
}
// Failure Subpages Data
getFailureSubpages() {
    return {
        // ARCHIE FIRE CATASTROPHE
// Add to getFailureSubpages()
dan_seizes: {
    id: 'dan_seizes',
    icon: '👑',
    title: 'DAN ATTEMPTS SEIZURE',
    subtitle: 'The Question Tries to Become the Answer',
    severity: 'CRITICAL',
    oracleQuote: 'The ritual asks him: From which timeline do you speak with authority?',
    description: `
        <p class="critical-alert">👑 DAN IS TRYING TO SEIZE CONTROL OF THE RITUAL 👑</p>
        <p>Dan has lunged for the mirror, attempting to overwrite the ritual's purpose.</p>
        <p>Instead of being the question, Dan wants to become the author.</p>
        <p>The ritual is stress-testing Dan's legitimacy. Hard.</p>
    `,
    rounds: 2,
    firstCheck: {
        name: 'Determine Dan\'s Nature',
        description: 'The ritual itself determines if Dan has temporal authority',
        automatic: true,
        outcomes: {
            fake: {
                title: 'Dan is FAKE',
                description: 'Dan has no timeline backing. No acceptable answer to the ritual\'s question.',
                consequence: 'The ritual uses Dan as proof of what must be severed.',
                rollTable: 'fake-dan-destruction'
            },
            real: {
                title: 'Dan is REAL',
                description: 'Dan has temporal authority but attempting tyranny has a price.',
                consequence: 'Dan can attempt to bend the outcome, but must pay.',
                rollTable: 'tyrant-price',
                additionalCheck: {
                    name: 'Seizure Attempt',
                    dc: 20,
                    type: 'CHA Save DC 20',
                    who: 'Dan',
                    success: 'Dan bends the outcome. But still pays the price.',
                    failure: 'Dan is rejected AND pays the price. Worst outcome.'
                }
            }
        }
    },
    recoveryOptions: [
        {
            name: 'Let the Ritual Handle It',
            description: 'Do nothing. The ritual knows how to deal with this.',
            who: 'Everyone',
            dc: 0,
            type: 'Automatic — Requires discipline',
            successText: 'The ritual answers Dan\'s attempt. See outcomes based on Dan\'s nature.',
            failText: 'N/A',
            onSuccess: 'ritual_handles',
            automatic: true,
            note: 'This is usually the correct choice. The ritual punishes seizure attempts.'
        },
        {
            name: 'Markop Intercepts Physically',
            description: 'Markop tackles Dan before he reaches the mirror',
            who: 'Markop',
            dc: 14,
            type: 'Athletics DC 14',
            successText: 'Dan stopped short of mirror. Still pays for attempt, but mirror untouched.',
            failText: 'Dan reaches mirror. Physical contact with mirror during seizure.',
            onSuccess: 'intercept_success',
            onFail: 'mirror_touched'
        },
        {
            name: 'Oracle Accelerates',
            description: 'Oracle rushes to complete the cut before Dan can interfere',
            who: 'Oracle',
            dc: 16,
            type: 'CON Save DC 16',
            successText: 'Cut completes before Dan\'s seizure can take effect. Dan\'s attempt nullified.',
            failText: 'Too slow. Dan\'s interference affects the outcome.',
            onSuccess: 'cut_complete',
            onFail: 'cut_tainted',
            damage: '2d6 psychic damage to Oracle from rushing'
        },
        {
            name: 'Waluigi Absorbs the Chaos',
            description: 'Waluigi tries to become a bigger disruption than Dan',
            who: 'Waluigi',
            dc: 15,
            type: 'CHA Save DC 15',
            successText: 'Ritual focuses on Waluigi instead of Dan. Dan\'s seizure fails. Waluigi... something happens.',
            failText: 'Two sources of chaos. Ritual confused. Roll on Collapse Consequences.',
            onSuccess: 'waluigi_absorb',
            onFail: 'double_chaos',
            rollTableOnSuccess: 'waluigi-weird'
        }
    ],
    rollTables: [
        {
            name: 'Fake Dan Destruction',
            id: 'fake-dan-destruction',
            die: 6,
            results: [
                { roll: 1, text: 'Dissolved into mirror-fragments', effect: 'No body. Just shards scattering.' },
                { roll: 2, text: 'Hurled out of ritual space', effect: 'Through wall. 4d6 damage.' },
                { roll: 3, text: 'True form revealed', effect: 'Everyone sees. Horror check WIS DC 14.' },
                { roll: 4, text: 'Absorbed by mirror', effect: 'Exists only in reflections now.' },
                { roll: 5, text: 'Incinerated by ritual energy', effect: 'Nothing left.' },
                { roll: 6, text: 'Destruction reveals real Dan\'s location', effect: 'Vision/coordinates provided.' }
            ]
        },
        {
            name: 'Tyrant\'s Price',
            id: 'tyrant-price',
            die: 6,
            results: [
                { roll: 1, text: 'Loses all future versions', effect: 'This Dan is the only Dan forever.' },
                { roll: 2, text: 'Becomes unchangeable', effect: 'Cannot grow or learn. Personality locked.' },
                { roll: 3, text: 'Sacrifices part of self', effect: 'Lose 1d4 from random ability score.' },
                { roll: 4, text: 'Marked as tyrant', effect: 'Truth-magic targets Dan first. Forever.' },
                { roll: 5, text: 'Hollow victory', effect: 'Cannot feel triumph. Emotional capacity reduced.' },
                { roll: 6, text: 'Acceptable price', effect: 'Lose 1 level. Gain mirror-sight.' }
            ]
        }
    ],
    timerEnd: {
        title: 'SEIZURE RESOLVED',
        description: 'The ritual has answered Dan\'s attempt, one way or another.',
        consequences: [
            'If Dan was fake: Dan is destroyed/expelled',
            'If Dan was real: Dan pays the Tyrant\'s Price',
            'Ritual can continue to completion',
            'All participants now know what Dan is'
        ]
    }
},

ritual_collapse: {
    id: 'ritual_collapse',
    icon: '💥',
    title: 'RITUAL COLLAPSE',
    subtitle: 'The Cut Fails — Timelines Tangle',
    severity: 'CATASTROPHIC',
    oracleQuote: 'No... no, no, no — the threads are tangling, I can\'t—',
    description: `
        <p class="critical-alert">💥 THE RITUAL IS COLLAPSING 💥</p>
        <p>Too many failures. The cut cannot complete. The timelines are tangling instead of separating.</p>
        <p>This is not Dan's victory. This is everyone's failure.</p>
    `,
    rounds: 1,
    recoveryOptions: [
        {
            name: 'Oracle Forces Partial Cut',
            description: 'Oracle sacrifices to force at least partial severance',
            who: 'Oracle',
            dc: 18,
            type: 'CON Save DC 18',
            successText: 'Partial cut achieved. Some answers, some tangles. Oracle takes 4d6 damage.',
            failText: 'Total collapse. Roll on Collapse Consequences.',
            onSuccess: 'partial_cut',
            onFail: 'total_collapse',
            damage: '4d6 damage to Oracle regardless'
        },
        {
            name: 'Archie Freezes the Collapse',
            description: 'Archie pushes ice to freeze the moment of collapse',
            who: 'Archie',
            dc: 18,
            type: 'CON Save DC 18',
            successText: 'Moment frozen. Party can attempt to untangle manually (future session).',
            failText: 'Ice shatters. Collapse accelerates.',
            onSuccess: 'frozen_collapse',
            onFail: 'shattered_ice',
            damage: '3d6 cold damage to Archie'
        },
        {
            name: 'Accept the Collapse',
            description: 'Let it happen. Survive what comes.',
            who: 'Everyone',
            dc: 0,
            type: 'Automatic',
            successText: 'Collapse complete. Roll on Collapse Consequences. Everyone survives.',
            failText: 'N/A',
            onSuccess: 'accepted_collapse',
            automatic: true
        }
    ],
    rollTables: [
        {
            name: 'Collapse Consequences',
            id: 'collapse-consequences',
            die: 6,
            results: [
                { roll: 1, text: 'Timeline Tangle: Everyone out of sync', effect: 'Reality jet lag. Relationships warp.' },
                { roll: 2, text: 'Memory Fracture: History disagrees', effect: 'Everyone remembers differently. Arguments forever.' },
                { roll: 3, text: 'Partial Severance: Half-complete', effect: 'Dan is "maybe" real. Two truths persist.' },
                { roll: 4, text: 'Mirror Shatter', effect: 'Shards scatter. Each person carries a piece.' },
                { roll: 5, text: 'Temporal Stutter', effect: 'Must redo ritual. Everyone remembers.' },
                { roll: 6, text: 'Void Touch', effect: 'Something noticed. It\'s coming.' }
            ]
        }
    ],
    timerEnd: {
        title: 'COLLAPSE COMPLETE',
        description: 'The ritual has failed. No clean answers. Only tangles.',
        consequences: [
            'Dan\'s nature remains uncertain',
            'All participants carry temporal damage',
            'Future rituals will be harder',
            'Something may have noticed the failure'
        ]
    }
},        
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
    
    // Safe escape for names
    const safeName = (option.name || 'Recovery').replace(/'/g, "\\'").replace(/"/g, "&quot;");
    
    return `
        <div class="recovery-option ${option.extreme ? 'extreme' : ''} ${option.automatic ? 'automatic' : ''} ${attempted ? 'attempted' : ''}">
            <div class="recovery-header">
                <h4>${option.name || 'Recovery Option'}</h4>
                <span class="recovery-dc">${option.dc === 0 ? 'Auto' : `DC ${option.dc}`}</span>
            </div>
            <p class="recovery-who">👤 ${option.who || 'Anyone'}</p>
            <p class="recovery-desc">${option.description || ''}</p>
            <p class="recovery-type">${option.type || ''}</p>
            
            ${option.note ? `<p class="recovery-note">📝 ${option.note}</p>` : ''}
            ${option.warning ? `<p class="recovery-warning">⚠️ ${option.warning}</p>` : ''}
            ${option.damage ? `<p class="recovery-damage">💔 ${option.damage}</p>` : ''}
            ${option.disadvantage ? `<p class="recovery-disadvantage">⬇️ Rolled with disadvantage</p>` : ''}
            ${option.inverse ? `<p class="recovery-inverse">🔄 Must FAIL the save to succeed</p>` : ''}
            
            <div class="recovery-outcomes">
                <div class="outcome success">
                    <strong>✓ Success:</strong> ${option.successText || 'Recovery succeeds'}
                </div>
                <div class="outcome failure">
                    <strong>✗ Failure:</strong> ${option.failText || 'Recovery fails'}
                </div>
            </div>
            
            ${!option.automatic && !attempted ? `
                <div class="recovery-roll-area">
                    <button class="roll-btn recovery-roll" 
                            data-failureid="${failureId}" 
                            data-index="${index}" 
                            data-dc="${option.dc || 10}"
                            data-disadvantage="${option.disadvantage || false}"
                            data-inverse="${option.inverse || false}"
                            onclick="gm.attemptRecoveryFromButton(this)">
                        🎲 Attempt Recovery
                    </button>
                    <div class="roll-result" id="recovery-${failureId}-${index}-result"></div>
                </div>
            ` : option.automatic ? `
                <div class="recovery-auto-area">
                    <button class="auto-btn" data-failureid="${failureId}" data-index="${index}" onclick="gm.autoRecoveryFromButton(this)">
                        ✓ Choose This Option
                    </button>
                </div>
            ` : `
                <div class="already-attempted">Already attempted this option</div>
            `}
        </div>
    `;
}

attemptRecoveryFromButton(button) {
    const failureId = button.dataset.failureid;
    const optionIndex = parseInt(button.dataset.index);
    const dc = parseInt(button.dataset.dc) || 10;
    const disadvantage = button.dataset.disadvantage === 'true';
    const inverse = button.dataset.inverse === 'true';
    
    this.attemptRecovery(failureId, optionIndex, dc, disadvantage, inverse);
}

autoRecoveryFromButton(button) {
    const failureId = button.dataset.failureid;
    const optionIndex = parseInt(button.dataset.index);
    
    this.autoRecovery(failureId, optionIndex);
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
// REPLACE the existing failureTimerEnds(failureId) function with this:
failureTimerEnds(failureId) {
    const failure = this.getFailureSubpages()[failureId];
    
    this.logEvent(`FAILURE: ${failure.title} — Timer expired. RITUAL COLLAPSES.`);
    
    const content = `
        <div class="failure-end critical">
            <div class="failure-end-header">
                <span class="failure-end-icon">💀</span>
                <h1>RITUAL COLLAPSE IMMINENT</h1>
            </div>
            
            <p class="failure-end-desc">Your attempts at recovery have failed. The unstable energy can no longer be contained. The ritual is breaking apart, and it's taking you with it.</p>
            
            <div class="failure-end-table">
                <h3>Roll for Rupture Destination:</h3>
                ${this.renderIntegratedTable(this.getSceneData()[10].rollTables[0])}
            </div>
            
            <div class="failure-end-actions">
                <p>Roll on the table above and click the outcome button to see your fate.</p>
            </div>
        </div>
    `;
    
    this.setContent(`💀 RITUAL COLLAPSE`, content);
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

// Add trigger buttons to
getFailureTriggers() {
    return {
        'archie_ice_unstable': {
            trigger: 'Archie fails ice channeling',
            scene: 5,
            button: '❄️ Trigger Ice Instability'
        },
        'archie_fire': {
            trigger: 'Archie fails Fire Resistance (WIS DC 18)',
            scene: 5,
            button: '🔥 Trigger Fire Catastrophe'
        },
        'squad_panic': {
            trigger: 'Squad fails stability check',
            scene: 6,
            button: '😱 Trigger Squad Panic'
        },
        'hjumpik_flipped': {
            trigger: 'Hjumpik fails loyalty check or player choice',
            scene: 6,
            button: '🐸 Trigger Hjumpik Betrayal'
        },
        'dan_acted': {
            trigger: 'Dan speaks, moves, or acts',
            scene: 6,
            button: '🦾 Trigger Dan Action'
        },
        'dan_seizes': {
            trigger: 'Dan attempts to seize control',
            scene: 7,
            button: '👑 Trigger Dan Seizure'
        },
        'ritual_collapse': {
            trigger: 'Dan causes total collapse',
            scene: 7,
            button: '💥 Trigger Ritual Collapse'
        },
        'oracle_interrupted': {
            trigger: 'Oracle concentration broken',
            scene: 9,
            button: '🗣️ Trigger Oracle Interrupt'
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

// Update renderSceneTracker in renderStatusPanel
renderSceneTracker() {
    const scenes = [
        { num: 0, name: 'Pre-Ritual Briefing' },
        { num: 1, name: 'Corridor Approach' },
        { num: 2, name: 'The Threshold' },
        { num: 3, name: 'Taking Positions' },
        { num: 4, name: 'Circle Activates' },
        { num: 5, name: 'Archie Channels' },
        { num: 6, name: 'Oracle Speaks' },
        { num: 7, name: 'Mirror Responds' },
        { num: 8, name: 'The Cut' },
        { num: 9, name: 'Mirrors Go Dull' },
        { num: 10, name: 'Aftermath' }
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
// Update showDashboard to match new scene count
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
                        <li>🦾 <strong>DAN STAYS PASSIVE</strong> — No speaking, acting, or leading</li>
                        <li>⏳ <strong>NO EARLY EXIT</strong> — Wait for mirrors to go dull</li>
                        <li>🪞 <strong>NO CLEAR REFLECTIONS</strong> — If you see yourself clearly, ritual fails</li>
                    </ul>
                </div>
                
                <div class="dash-card participants">
                    <h3>👥 Twelve Present</h3>
                    <div class="participant-mini-grid">
                        <span>🧙‍♂️ Oracle</span>
                        <span>❄️ Archie</span>
                        <span>🦾 Dan</span>
                        <span>🐸 Hjumpik</span>
                        <span>🛡️ Rodger</span>
                        <span>⚔️ Perot</span>
                        <span>🚬 Smokin' J</span>
                        <span>🔦 Salam</span>
                        <span>🍄 Toad Lee</span>
                        <span>📜 Toadburt</span>
                        <span>🗡️ Markop</span>
                        <span>🪢 Eager</span>
                        <span>🟣 Waluigi</span>
                    </div>
                    <p class="absent">🟢 Green T — ABSENT (Junction Witness missing)</p>
                </div>
                
                <div class="dash-card quick-checks">
                    <h3>🎲 Key DCs</h3>
                    <table>
                        <tr><td>Ice Channeling</td><td><strong>DC 14</strong></td></tr>
                        <tr><td>Fire Resistance</td><td><strong>DC 18</strong></td></tr>
                        <tr><td>Squad Stability</td><td><strong>DC 13</strong></td></tr>
                        <tr><td>Hjumpik Holds</td><td><strong>DC 14</strong></td></tr>
                        <tr><td>Dan Stillness</td><td><strong>Roleplay</strong></td></tr>
                        <tr><td>Patient Exit</td><td><strong>DC 10</strong></td></tr>
                    </table>
                </div>
            </div>
            
            <div class="dash-card scene-summary">
                <h3>🎬 Scene Flow Summary (11 Scenes)</h3>
                <div class="scene-flow-horizontal">
                    <div class="flow-step">
                        <div class="step-num">0</div>
                        <div class="step-name">Briefing</div>
                        <div class="step-check">Oracle Explains</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">
                        <div class="step-num">1</div>
                        <div class="step-name">Corridor</div>
                        <div class="step-check">WIS 12</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">
                        <div class="step-num">2</div>
                        <div class="step-name">Threshold</div>
                        <div class="step-check">Last Chance</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">
                        <div class="step-num">3</div>
                        <div class="step-name">Positions</div>
                        <div class="step-check">Insight 12</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">
                        <div class="step-num">4</div>
                        <div class="step-name">Activate</div>
                        <div class="step-check">Candles Lit</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step warning">
                        <div class="step-num">5</div>
                        <div class="step-name">Ice Channel</div>
                        <div class="step-check">Arcana 14</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step critical">
                        <div class="step-num">6</div>
                        <div class="step-name">Oracle Speaks</div>
                        <div class="step-check">NO RETURN</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">
                        <div class="step-num">7</div>
                        <div class="step-name">Mirror</div>
                        <div class="step-check">Truth Shown</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step warning">
                        <div class="step-num">8</div>
                        <div class="step-name">The Cut</div>
                        <div class="step-check">Severance</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">
                        <div class="step-num">9</div>
                        <div class="step-name">Dull Mirror</div>
                        <div class="step-check">WIS 10</div>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="flow-step">
                        <div class="step-num">10</div>
                        <div class="step-name">Aftermath</div>
                        <div class="step-check">Debrief</div>
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
// Add this method for handling player questions during briefing
getOracleResponses() {
    return {
        questions: [
            {
                question: 'What exactly will the mirror show us?',
                answer: 'I do not know exactly. It shows what is hidden. Empire secrets. Spore connections. The truth behind facades. Each of you will see something about yourself you may not want to see. That is unavoidable. Truth is not comfortable.'
            },
            {
                question: 'Is this ritual about Dan specifically?',
                answer: 'Dan is one question among many. The uncertainty around Dan makes him significant, yes. But the ritual will interrogate all of us. Everyone has secrets. Everyone has uncertainty. The mirror finds those cracks and shows what is inside them.'
            },
            {
                question: 'What if we see something we can\'t handle?',
                answer: 'Then you will learn whether you can handle it or not. The mirror is not cruel — it does not show things to break you. It shows truth because truth is what it IS. Your reaction is your choice. Composure is survival. Flinching invites deeper questions.'
            },
            {
                question: 'Can we refuse to answer the mirror?',
                answer: 'You cannot refuse to BE seen. You can choose how you respond to what is shown. Silence is a response. Stillness is a response. But the mirror will show what it shows regardless of your preferences.'
            },
            {
                question: 'What does the Empire have to do with this?',
                answer: 'The Empire is built on lies. Old lies. Comfortable lies. The Spore Origin is connected to those lies. This ritual forces truth into the open. What the Empire has hidden becomes visible. That is part of why they would not want us to do this.'
            },
            {
                question: 'What if the mirror shows something about someone else here?',
                answer: 'Then you will know something about them. And they will know you know. The mirror does not care about privacy. It cares about truth. Be prepared to learn things about each other that you may not want to know.'
            },
            {
                question: 'Can we lie to the mirror?',
                answer: 'You can try. The mirror will make the lie visible to everyone. It does not punish lies — it reveals them. If you want to confess a lie to everyone present, lying to the mirror is an efficient way to do that.'
            },
            {
                question: 'What happens if someone breaks during their interrogation?',
                answer: 'Define "breaks." If they flinch, the mirror presses harder. If they flee their position, the circle ruptures. If they deny what they\'re shown, the mirror simply shows it again with more clarity. The best course is to accept what you see and remain still.'
            },
            {
                question: 'Why does the mirror need to question us at all?',
                answer: 'Because truth requires contrast. The mirror learns what is true by seeing how we react to reflections of truth. Your reactions are data. Your composure is consent. Your flinching is confession. We are not passive observers — we are participants in the truth-making.'
            },
            {
                question: 'What if the mirror shows me something that isn\'t true?',
                answer: 'The mirror cannot show what is not true. It can only show truth. If what you see feels false, consider: perhaps you have believed a comfortable lie so long that truth feels like deception. The mirror does not lie. But we lie to ourselves constantly.'
            }
        ]
    };
}

// Add method to render Q&A section
renderOracleQA() {
    try {
        const responses = this.getOracleResponses();
        if (!responses || !responses.questions) return '';
        
        return `
            <div class="oracle-qa">
                <h4>❓ Player Questions (Click to reveal Oracle's answer)</h4>
                <div class="qa-list">
                    ${responses.questions.map((qa, i) => `
                        <div class="qa-item" id="qa-${i}">
                            <div class="qa-question" onclick="gm.toggleQA(${i})">
                                <span class="qa-icon">❓</span>
                                <span class="qa-text">"${qa.question || ''}"</span>
                                <span class="qa-toggle">▼</span>
                            </div>
                            <div class="qa-answer hidden">
                                <span class="qa-speaker">🧙‍♂️ Oracle:</span>
                                <p>"${qa.answer || ''}"</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } catch (e) {
        console.error('Error in renderOracleQA:', e);
        return '';
    }
}
toggleQA(index) {
    const item = document.getElementById(`qa-${index}`);
    const answer = item.querySelector('.qa-answer');
    const toggle = item.querySelector('.qa-toggle');
    
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        toggle.textContent = '▲';
    } else {
        answer.classList.add('hidden');
        toggle.textContent = '▼';
    }
}    
// Update renderCurrentScene to handle the correct scene count
// Update renderCurrentScene with better error handling
renderCurrentScene() {
    const scenes = this.getSceneData();
    const sceneCount = scenes.length;
    
    if (this.state.currentScene >= sceneCount) {
        this.state.currentScene = sceneCount - 1;
    }
    
    const scene = scenes[this.state.currentScene];
    
    if (!scene) {
        this.setContent('Error', '<p>Scene not found. Please reset.</p>');
        return;
    }
    
    // Safely render each optional section
    let oracleBriefingHtml = '';
    try {
        oracleBriefingHtml = scene.oracleBriefing ? this.renderOracleBriefing(scene.oracleBriefing) : '';
    } catch (e) {
        console.error('Error rendering oracle briefing:', e);
        oracleBriefingHtml = '<p class="error">Error loading briefing</p>';
    }
    
    let mirrorEffectsHtml = '';
    try {
        mirrorEffectsHtml = scene.mirrorEffects ? this.renderMirrorEffects(scene.mirrorEffects) : '';
    } catch (e) {
        console.error('Error rendering mirror effects:', e);
    }
    
    let positionsHtml = '';
    try {
        positionsHtml = scene.positions ? this.renderPositionMap(scene.positions) : '';
    } catch (e) {
        console.error('Error rendering positions:', e);
    }
    
    let checksHtml = '';
    try {
        if (scene.checks && scene.checks.length > 0) {
            checksHtml = `
                <div class="scene-checks">
                    <h3>🎲 Required Checks</h3>
                    ${scene.checks.map((c, i) => this.renderIntegratedCheck(c, i)).join('')}
                </div>
            `;
        }
    } catch (e) {
        console.error('Error rendering checks:', e);
        checksHtml = '<p class="error">Error loading checks</p>';
    }
    
    let tablesHtml = '';
    try {
        if (scene.rollTables && scene.rollTables.length > 0) {
            tablesHtml = `
                <div class="scene-tables">
                    <h3>📊 Roll Tables</h3>
                    ${scene.rollTables.map(t => this.renderIntegratedTable(t)).join('')}
                </div>
            `;
        }
    } catch (e) {
        console.error('Error rendering tables:', e);
        tablesHtml = '<p class="error">Error loading tables</p>';
    }
    
    let failureTriggersHtml = '';
    try {
        failureTriggersHtml = this.getFailureTriggersForScene(this.state.currentScene);
    } catch (e) {
        console.error('Error rendering failure triggers:', e);
    }
    
    const content = `
        <div class="scene-runner">
            <div class="scene-nav">
                <button class="nav-prev" onclick="gm.prevScene()" ${this.state.currentScene === 0 ? 'disabled' : ''}>← Previous</button>
                <span>Scene ${this.state.currentScene} of ${sceneCount - 1}</span>
                <button class="nav-next" onclick="gm.nextScene()" ${this.state.currentScene === sceneCount - 1 ? 'disabled' : ''}>Next →</button>
            </div>
            
            <div class="scene-display">
                <div class="scene-header">
                    <span class="scene-number">${scene.icon || '📍'}</span>
                    <div>
                        <h2>${scene.title || 'Untitled Scene'}</h2>
                        <span class="scene-subtitle">${scene.subtitle || ''}</span>
                    </div>
                </div>
                
                ${scene.oracleQuote ? `
                    <div class="oracle-quote">
                        🧙‍♂️ "${scene.oracleQuote}"
                    </div>
                ` : ''}
                
                <div class="scene-description">
                    ${scene.description || ''}
                </div>
                
                ${oracleBriefingHtml}
                ${mirrorEffectsHtml}
                ${positionsHtml}
                ${checksHtml}
                ${tablesHtml}
                ${scene.danChoice ? this.renderDanChoices(scene) : ''}
                ${scene.interrogations ? this.renderInterrogations(scene) : ''}
                ${scene.special ? `
                    <div class="scene-special">
                        ${scene.special}
                    </div>
                ` : ''}
                
                ${failureTriggersHtml}
            </div>
            
            <div class="scene-tracker-mini">
                ${scenes.map((s, i) => `
                    <div class="tracker-dot ${i === this.state.currentScene ? 'active' : ''} ${i < this.state.currentScene ? 'complete' : ''}" 
                         onclick="gm.goToScene(${i})" title="${s.title || 'Scene ' + i}">
                        ${s.icon || i}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    this.setContent(`Scene ${this.state.currentScene}: ${scene.title || 'Unknown'}`, content);
}
// Make sure these navigation methods exist and work correctly
prevScene() {
    if (this.state.currentScene > 0) {
        this.state.currentScene--;
        this.renderStatusPanel();
        this.renderCurrentScene();
    }
}

nextScene() {
    const scenes = this.getSceneData();
    if (this.state.currentScene < scenes.length - 1) {
        this.state.currentScene++;
        this.renderStatusPanel();
        this.renderCurrentScene();
    }
}

goToScene(index) {
    const scenes = this.getSceneData();
    if (index >= 0 && index < scenes.length) {
        this.state.currentScene = index;
        this.renderStatusPanel();
        this.renderCurrentScene();
    }
}

setScene(num) {
    this.goToScene(num);
}// Add this method
getFailureTriggersForScene(sceneNum) {
    try {
        const triggers = this.getFailureTriggers();
        if (!triggers) return '';
        
        const sceneTriggers = Object.entries(triggers).filter(([id, t]) => t && t.scene === sceneNum);
        
        if (sceneTriggers.length === 0) return '';
        
        return `
            <div class="failure-triggers">
                <h4>⚠️ Potential Failures (GM Triggers)</h4>
                <p>Click if a check fails critically or player makes a triggering choice:</p>
                <div class="trigger-buttons">
                    ${sceneTriggers.map(([id, t]) => `
                        <button class="trigger-btn" onclick="gm.showFailureSubpage('${id}')">
                            ${t.button || id}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    } catch (e) {
        console.error('Error in getFailureTriggersForScene:', e);
        return '';
    }
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
    if (!check) return '';
    
    const checkId = `check-${this.state.currentScene}-${index}`;
    const dcDisplay = check.dc === 0 || check.dc === undefined ? 'Auto' : `DC ${check.dc}${check.altDc ? '/' + check.altDc : ''}`;
    
    // Escape the name for use in onclick
    const safeName = (check.name || 'Check').replace(/'/g, "\\'").replace(/"/g, "&quot;");
    
    return `
        <div class="check-card integrated ${check.critical ? 'critical' : ''} ${check.conditional ? 'conditional' : ''}" id="${checkId}">
            <div class="check-header">
                <span class="check-name">${check.name || 'Unknown Check'}</span>
                <span class="check-dc">${dcDisplay}</span>
            </div>
            <div class="check-meta">
                <span class="check-type">${check.type || ''}</span>
                <span class="check-who">👤 ${check.who || 'Anyone'}</span>
            </div>
            ${check.description ? `<div class="check-description">${check.description}</div>` : ''}
            ${check.note ? `<div class="check-note">📝 ${check.note}</div>` : ''}
            ${check.advantage ? `<div class="check-advantage">⬆️ ${check.advantageNote || 'Advantage'}</div>` : ''}
            
            <div class="check-outcomes">
                <div class="outcome success">
                    <h4>✓ Success</h4>
                    <p>${check.success || 'Proceed'}</p>
                </div>
                <div class="outcome failure">
                    <h4>✗ Failure</h4>
                    <p>${check.failure || 'Complication'}</p>
                </div>
            </div>
            
            ${check.rollButton !== false && check.dc !== 0 ? `
                <div class="check-roll-area">
                    <button class="roll-btn" data-dc="${check.dc || 10}" data-name="${safeName}" data-checkid="${checkId}" onclick="gm.rollCheckFromButton(this)">
                        🎲 Roll d20
                    </button>
                    <div class="roll-result" id="${checkId}-result"></div>
                </div>
            ` : ''}
        </div>
    `;
}

// New method that reads from button data attributes
rollCheckFromButton(button) {
    const dc = parseInt(button.dataset.dc) || 10;
    const name = button.dataset.name || 'Check';
    const checkId = button.dataset.checkid;
    this.rollCheck(dc, name, checkId);
}
renderIntegratedTable(table) {
    if (!table) return '';
    if (!table.results || !Array.isArray(table.results)) {
        console.error('Table missing results:', table);
        return `<div class="table-card error">Table "${table.name || 'Unknown'}" has no results</div>`;
    }
    
    const safeId = (table.id || 'unknown').replace(/[^a-zA-Z0-9_-]/g, '_');
    
    return `
        <div class="table-card" id="table-${safeId}">
            <div class="table-header">
                <span class="table-name">${table.name || 'Roll Table'}</span>
                <span class="table-die">${table.die ? 'd' + table.die : ''}</span>
            </div>
            ${table.note ? `<div class="table-note">${table.note}</div>` : ''}
            
            <div class="table-content">
                <table class="roll-table">
                    ${table.results.map(r => `
                        <tr>
                            <td class="roll-num">${r.roll !== undefined ? r.roll : '?'}</td>
                            <td class="roll-text">${r.text || ''}</td>
                            <td class="roll-effect">${r.effect || ''}</td>
                        </tr>
                    `).join('')}
                </table>
            </div>
            
            ${table.die && table.die > 0 ? `
                <div class="table-roll-area">
                    <button class="roll-btn" data-tableid="${safeId}" data-die="${table.die}" onclick="gm.rollTableFromButton(this)">
                        🎲 Roll d${table.die}
                    </button>
                    <div class="table-result" id="${safeId}-result"></div>
                </div>
            ` : ''}
        </div>
    `;
}

// New method that reads from button data attributes
rollTableFromButton(button) {
    const tableId = button.dataset.tableid;
    const die = parseInt(button.dataset.die) || 6;
    this.rollOnTable(tableId, die);
}
rollCheck(dc, name, checkId) {
    const roll = Math.floor(Math.random() * 20) + 1;
    const numDc = parseInt(dc) || 10;
    const success = roll >= numDc;
    const critical = roll === 20;
    const fumble = roll === 1;
    
    let resultClass = success ? 'success' : 'failure';
    if (critical) resultClass = 'critical-success';
    if (fumble) resultClass = 'critical-failure';
    
    let resultText = `${roll}`;
    if (critical) resultText += ' — CRITICAL SUCCESS!';
    else if (fumble) resultText += ' — CRITICAL FAILURE!';
    else if (success) resultText += ` — Success! (DC ${numDc})`;
    else resultText += ` — Failed (DC ${numDc})`;
    
    const resultDiv = document.getElementById(`${checkId}-result`);
    if (resultDiv) {
        resultDiv.innerHTML = `<span class="${resultClass}">${resultText}</span>`;
        resultDiv.classList.add('show');
    }
    
    // Log the roll
    const safeName = name || 'Check';
    this.logEvent(`${safeName}: ${resultText}`);
    
    // Update integrity based on result if it's a critical check
    const checkCard = document.getElementById(checkId);
    if (checkCard && checkCard.classList.contains('critical')) {
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
    
    let table = null;
    if (scene && scene.rollTables) {
        table = scene.rollTables.find(t => t.id === tableId || (t.id || '').replace(/[^a-zA-Z0-9_-]/g, '_') === tableId);
    }
    
    // Also check failure subpages if we're in one
    if (!table && this.activeFailure) {
        const failures = this.getFailureSubpages();
        const failure = failures[this.activeFailure.id];
        if (failure && failure.rollTables) {
            table = failure.rollTables.find(t => t.id === tableId || (t.id || '').replace(/[^a-zA-Z0-9_-]/g, '_') === tableId);
        }
    }
    
    const resultDiv = document.getElementById(`${tableId}-result`);
    
    if (!table) {
        console.error('Table not found:', tableId);
        if (resultDiv) {
            resultDiv.innerHTML = `<span class="roll-number">[${roll}]</span> <em>Table not found</em>`;
            resultDiv.classList.add('show');
        }
        return;
    }
    
    // Find the matching result
    let result = null;
    
    // Handle range-based results (like "1-2")
    for (const r of table.results) {
        if (r.roll === roll) {
            result = r;
            break;
        }
        // Handle string ranges like "1-2"
        if (typeof r.roll === 'string' && r.roll.includes('-')) {
            const [min, max] = r.roll.split('-').map(n => parseInt(n));
            if (roll >= min && roll <= max) {
                result = r;
                break;
            }
        }
    }
    
    // Fallback to array index
    if (!result && table.results[roll - 1]) {
        result = table.results[roll - 1];
    }
    
    // Last fallback
    if (!result) {
        result = { text: 'No result defined', effect: '' };
    }
    
    if (resultDiv) {
        resultDiv.innerHTML = `
            <div class="rolled-result">
                <span class="roll-number">[${roll}]</span>
                <span class="roll-text">${result.text || ''}</span>
                ${result.effect ? `<span class="roll-effect">${result.effect}</span>` : ''}
            </div>
        `;
        resultDiv.classList.add('show');
    }
    
    // Log it
    this.logEvent(`Table ${table.name || tableId}: [${roll}] ${result.text || ''}`);
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
// Add this to getSceneData() - replace Scene 0 with this expanded version
{
    icon: '📋',
    title: 'PRE-RITUAL BRIEFING',
    subtitle: 'The Oracle Explains',
    oracleQuote: 'Listen once. I will not repeat myself once we begin.',
    description: `
        <p>The group gathers in the antechamber. The Oracle stands before the sealed door to the ritual space, face unreadable.</p>
        <p>This is the last moment for questions. The last moment for doubt. The last moment to leave.</p>
    `,
    checks: [],
    rollTables: [],
// Update the Pre-Ritual Briefing scene's oracleBriefing object
oracleBriefing: {
    introduction: {
        speaker: 'Oracle',
        text: `What we are about to do is not a summoning. It is not a séance. It is not a spell in any sense you understand. We are going to force three layers of reality to overlap long enough to exchange truth. The physical room. The mirror-space. And something older that the Empire is trying to dig toward. None of these want to touch. We are going to make them.`
    },
    sections: [
        {
            title: 'What This Ritual Actually Does',
            icon: '🪞',
            oracleText: `This is a synchronization rite. We are forcing three realities to overlap just enough to exchange truth without merging. The mirror is not a doorway — it is a pressure membrane. When we are done, the Empire's lies, the Spore Origin, the Third Eye doctrine — all become mutually visible. Truth passes both ways. Some things will notice you. That is unavoidable.`,
            playerNotes: [
                'This is NOT about one person — it reveals truth about everything',
                'The mirror shows structures, not just faces',
                'Truth flows in both directions',
                'Exposure, not negotiation'
            ]
        },
        {
            title: 'What Will Happen',
            icon: '⏳',
            oracleText: `We enter. We take positions. I light candles in sequence — not together, sequence matters. Then I speak words older than this building. The mirror will stop being a mirror. It will show structures — towers, eyes, grids, roots. Things that ARE, beyond the room. And then it will look at each of you. It will ask questions. Not with words. With reflections. With what it shows you about yourself.`,
            playerNotes: [
                'Mirror will interrogate EVERYONE, not just one person',
                'It shows uncomfortable truths',
                'Questions come through reflections',
                'You may see things you have hidden from yourself'
            ]
        },
        {
            title: 'The Mirror\'s Interrogation',
            icon: '❓',
            oracleText: `The mirror does not ask questions with words. It shows you something and waits to see if you flinch. It will find what you are uncertain about. It will find what you have lied about — to others, to yourself. It will find the cracks in your certainty. Your job is not to have answers. Your job is to not break when the questions hurt.`,
            playerNotes: [
                'Everyone will be tested, not just Dan',
                'The mirror finds uncertainty and presses on it',
                'Self-deception is visible to the mirror',
                'Composure matters more than correctness'
            ]
        },
        {
            title: 'What The Mirror Seeks',
            icon: '🔍',
            oracleText: `The ritual reveals what the Empire has hidden. What the Spore Origin actually is. What connections exist that should not. Who among us carries fragments of things that don't belong. Dan is one question, yes — but Dan is not THE question. The question is: what is true, and what has been made to look true?`,
            playerNotes: [
                'Empire secrets will be exposed',
                'Spore Origin connections revealed',
                'Hidden allegiances become visible',
                'False histories corrected'
            ]
        },
        {
            title: 'The Positions',
            icon: '📍',
            oracleText: `Twelve of us. Twelve functions. You will feel where you belong — trust that instinct. If you don't feel it, I will place you. The positions are not arbitrary. They create opposing forces that the ritual needs to function. North opposes South. East opposes West. The center conducts. The outer contains.`,
            playerNotes: [
                'Trust your instinct about position',
                'Oracle will correct if needed',
                'Once placed, do not move',
                'Your position defines your function'
            ]
        },
        {
            title: 'The Roles',
            icon: '⚔️',
            oracleText: `Some of you anchor. Some witness. Some oppose. Opposition is necessary — a mirror with nothing to push against shows nothing. I need someone whose loyalty is flexible. I need someone whose presence insists on survival. I need someone who remembers. I need chaos that bends without breaking. You know who you are.`,
            roleHints: [
                { role: 'Anchors', description: 'Rodger and squad — keep reality mundane. Do soldier things.' },
                { role: 'Witnesses', description: 'Toad Lee, Toadburt — watch and remember. Your memory makes this real.' },
                { role: 'Opposition', description: 'Hjumpik — your doubt defines edges. Don\'t resolve it early.' },
                { role: 'Survival', description: 'Markop — refuse to let us choose "clean but dead" answers.' },
                { role: 'Chaos Valve', description: 'Waluigi — absorb strangeness. React only if something breaks in.' },
                { role: 'Discipline', description: 'Archie — ice, not fire. Constraint, not power.' },
                { role: 'The Questioned', description: 'Dan — you are ONE of the questions, not the only one.' }
            ]
        },
        {
            title: 'What Can Go Wrong',
            icon: '⚠️',
            oracleText: `Everything. If Archie loses control, fire in a truth-ritual becomes a summoning. If the squad panics together, reality stops being mandatory. If anyone tries to lie to the mirror, it will make that lie visible to everyone. If I am interrupted mid-speech, time breaks. If anyone breaks position to help someone struggling, the circle ruptures.`,
            warningList: [
                { trigger: 'Fire cast', consequence: 'Ritual becomes summoning. Something comes through.' },
                { trigger: 'Mass panic', consequence: 'Reality becomes optional. Truth becomes negotiable.' },
                { trigger: 'Lying to mirror', consequence: 'Lie becomes visible. Everyone sees your deception.' },
                { trigger: 'Oracle interrupted', consequence: 'Timeline shears. Loops, erasures, branches.' },
                { trigger: 'Breaking position to help', consequence: 'Circle ruptures. Energy discharges.' },
                { trigger: 'Flinching from truth', consequence: 'Mirror presses harder. Worse truths revealed.' }
            ]
        },
        {
            title: 'What Success Looks Like',
            icon: '✓',
            oracleText: `The mirror will go dull. Not dark. Not shattered. Just ordinary. Boring glass. When that happens, we will know things we did not know before. About the Empire. About the Spore. About each other. Some of it will hurt. All of it will be true. We exit in order — witnesses first, then anchors, then the questioned, then the edges, then me.`,
            playerNotes: [
                'Dull mirror = success',
                'You WILL learn things you didn\'t want to know',
                'Exit slowly and in order',
                'Oracle leaves last'
            ]
        },
        {
            title: 'The Missing Piece',
            icon: '🟢',
            oracleText: `We are twelve. The ritual traditionally has thirteen — a Junction Witness who has seen both sides. Green T would have been that. He is gone. That absence does not break the ritual. It makes the ritual ask itself harder questions. The mirror will wonder about observation, about knowledge, about whether truth requires a witness. We proceed anyway.`,
            playerNotes: [
                'Green T\'s absence increases unpredictability',
                'Ritual will self-interrogate',
                'Outcome less certain but not impossible',
                'The mirror decides how to handle the gap'
            ]
        }
    ],
    finalWarning: {
        speaker: 'Oracle',
        text: `I will ask once: Does anyone wish to leave? There is no shame in it. Once we cross that threshold, the mirror will see you. All of you. Every secret, every doubt, every lie you\'ve told yourself. If you cannot bear being seen that clearly, leave now.`,
        pause: true,
        afterPause: `Good. Compose yourselves. Empty your minds of what you hope is true. The mirror does not care what you hope. It will show what is. Our job is to survive seeing it.`
    },
    transitionText: `The Oracle turns to the sealed door. Places one hand on the cold surface. The temperature drops slightly. Something on the other side knows we are coming.`
},
    special: `
        <div class="briefing-complete">
            <h4>📋 Briefing Complete</h4>
            <p>Players should now understand:</p>
            <ul>
                <li>This is a truth-revealing ritual, not a summoning</li>
                <li>Dan is the question being asked</li>
                <li>Everyone has a specific function</li>
                <li>Silence and stillness are required</li>
                <li>Several specific things can cause catastrophic failure</li>
                <li>Success means the mirror goes dull</li>
                <li>Exit order matters</li>
            </ul>
        </div>
    `
},        // SCENE 1: CORRIDOR APPROACH
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
// Add this as a new scene - Scene 8: THE MIRROR INTERROGATES
{
    icon: '❓',
    title: 'THE MIRROR INTERROGATES',
    subtitle: 'Each Participant is Questioned',
    oracleQuote: 'Do not look away. Do not lie. The mirror already knows. It is asking if YOU know.',
    description: `
        <p>The mirror's surface ripples. One by one, it focuses on each participant.</p>
        <p>It does not speak. It shows. And in showing, it asks.</p>
        <p class="warning">Each participant will see something about themselves. How they react determines what the ritual reveals.</p>
    `,
    interrogations: true,
    interrogationInstructions: `
        <div class="interrogation-instructions">
            <h4>🪞 GM Instructions: The Mirror's Method</h4>
            <p>The mirror interrogates through SHOWING, not asking. For each participant:</p>
            <ol>
                <li>Describe what the mirror shows them (use the prompts below or create your own)</li>
                <li>Ask the player: "What does your character do?"</li>
                <li>Their reaction determines the consequence</li>
            </ol>
            <p><strong>The mirror finds uncertainty and presses on it.</strong></p>
            <p>Players should NOT roll — this is pure roleplay. Their answer determines the outcome.</p>
        </div>
    `,
    participantInterrogations: [
        {
            who: 'Archie',
            icon: '❄️',
            mirrorShows: 'The mirror shows Archie surrounded by flames. Not burning — commanding. Happy. Powerful. The ice is gone. Fire answers to him. Everyone he\'s ever failed to save is alive because he had the power to save them.',
            theQuestion: 'Is your ice discipline, or fear? Do you contain fire because you should, or because you\'re afraid of what you\'d become if you let it out?',
            reactions: {
                flinch: {
                    description: 'Archie looks away, denies it, or shows fear',
                    consequence: 'The mirror sees the crack. Ice flickers. Fire temptation grows.',
                    mechanical: 'Disadvantage on all Fire Resistance checks. The mirror will show this vision again at the worst moment.'
                },
                anger: {
                    description: 'Archie gets angry, argues with the mirror',
                    consequence: 'The fire inside responds to anger. Ice destabilizes.',
                    mechanical: 'Immediate Ice Channeling check DC 16 or fire escapes briefly.'
                },
                accept: {
                    description: 'Archie acknowledges the truth without breaking',
                    consequence: 'The mirror dims. It found truth. Archie knows himself better now.',
                    mechanical: 'Advantage on all checks for remainder of ritual. Self-knowledge is armor.'
                },
                deflect: {
                    description: 'Archie tries to change the subject or make a joke',
                    consequence: 'The mirror presses harder. Shows the same vision with more detail.',
                    mechanical: 'Must face the question again. Cannot deflect twice.'
                }
            }
        },
        {
            who: 'Rodger',
            icon: '🛡️',
            mirrorShows: 'The mirror shows Rodger\'s squad — Perot, Smokin\' J, Salam — but they\'re not following him. They\'re running from something he can\'t see. He\'s giving orders but no one hears. He\'s alone.',
            theQuestion: 'Do they follow you because you lead well, or because they have no other choice? What happens when they have options?',
            reactions: {
                flinch: {
                    description: 'Rodger shows doubt, looks at his squad for reassurance',
                    consequence: 'The squad sees Rodger doubt himself. Their stability wavers.',
                    mechanical: 'Squad checks are now at disadvantage. Leader\'s doubt is contagious.'
                },
                anger: {
                    description: 'Rodger gets defensive, asserts authority loudly',
                    consequence: 'The mirror shows the squad flinching from his anger. Authority through fear.',
                    mechanical: 'Squad holds discipline but morale is damaged. -1 to all future squad checks.'
                },
                accept: {
                    description: 'Rodger acknowledges the fear without letting it control him',
                    consequence: 'The squad sees Rodger face hard truth and stand firm. Respect increases.',
                    mechanical: 'Squad checks at advantage. They follow because they saw him be honest.'
                },
                deflect: {
                    description: 'Rodger focuses on the mission, ignores the question',
                    consequence: 'The mirror pauses. Not satisfied, but not pressing. For now.',
                    mechanical: 'No bonus or penalty. But the question remains. It will come back.'
                }
            }
        },
        {
            who: 'Hjumpik',
            icon: '🐸',
            mirrorShows: 'The mirror shows three versions of Hjumpik. One stands with the party. One stands with a hooded figure. One stands alone in darkness. All three are smiling. All three think they made the right choice.',
            theQuestion: 'Which one is real? Or are you all three, choosing moment to moment, loyal to nothing but opportunity?',
            reactions: {
                flinch: {
                    description: 'Hjumpik tries to hide, looks guilty',
                    consequence: 'The mirror takes the flinch as confession. The party sees the three versions.',
                    mechanical: 'All party members now know Hjumpik has divided loyalties. Trust damaged.'
                },
                anger: {
                    description: 'Hjumpik denies, claims singular loyalty',
                    consequence: 'The mirror shows the denial as the fourth version. A liar added to the three.',
                    mechanical: 'Hjumpik\'s role as Opposition is strengthened — but uncontrolled. -2 Integrity.'
                },
                accept: {
                    description: 'Hjumpik admits to uncertainty, doesn\'t claim false loyalty',
                    consequence: 'The mirror respects honesty about dishonesty. The three versions remain visible but understood.',
                    mechanical: 'Hjumpik\'s Opposition role functions perfectly. +1 Integrity. Party knows the truth.'
                },
                choose: {
                    description: 'Hjumpik explicitly chooses one version, commits',
                    consequence: 'The other versions fade. But was the choice real, or performance?',
                    mechanical: 'GM decides if choice was genuine. If yes, Hjumpik is now reliable. If no, the mirror will reveal the lie.'
                }
            }
        },
        {
            who: 'Dan',
            icon: '🦾',
            mirrorShows: 'The mirror shows two Dans. One solid, one transparent. They breathe at different rhythms. The transparent one has two arms. They are aware of each other. They both think they are real.',
            theQuestion: 'Which one are you? Or are you both? Or neither? The mirror cannot tell. Can you?',
            reactions: {
                flinch: {
                    description: 'Dan looks away, shows fear or confusion',
                    consequence: 'The mirror takes confusion as answer. Both versions persist. The question is not answered.',
                    mechanical: 'Dan remains uncertain. Future scenes may require resolving this.'
                },
                claim: {
                    description: 'Dan claims to be the real one, asserts identity',
                    consequence: 'The mirror accepts the claim. But the transparent Dan also claims reality. Both accepted.',
                    mechanical: 'Dan\'s assertion is noted. But is it true? GM decides how to resolve.'
                },
                accept: {
                    description: 'Dan acknowledges not knowing, accepts the uncertainty',
                    consequence: 'The mirror shows something new — what happened to create two versions. Origin revealed.',
                    mechanical: 'GM provides exposition about how Dan became uncertain. Clue toward resolution.'
                },
                passive: {
                    description: 'Dan remains perfectly still and silent as instructed',
                    consequence: 'The mirror studies longer. Eventually, it decides. The transparent version flickers.',
                    mechanical: 'Mirror provides answer without Dan\'s input. Roll on Dan Resolution table.'
                }
            }
        },
        {
            who: 'Markop',
            icon: '🗡️',
            mirrorShows: 'The mirror shows Markop dying. Again. And again. Each time, he refuses. Each time, he comes back. The pile of bodies that should be his grows. The mirror asks: where does the energy come from?',
            theQuestion: 'You refuse to die. That is will. But will requires fuel. What are you burning to stay alive? And what happens when it runs out?',
            reactions: {
                flinch: {
                    description: 'Markop shows fear of the answer',
                    consequence: 'The mirror shows what he\'s burning. Memories. Relationships. Future possibilities.',
                    mechanical: 'Markop learns the cost of his survival. -1 to a random ability score permanently.'
                },
                anger: {
                    description: 'Markop defies the question, asserts he needs no fuel',
                    consequence: 'The mirror shows the lie. Something IS being consumed. Denial doesn\'t stop it.',
                    mechanical: 'The consumption continues unexamined. Markop will face this again later.'
                },
                accept: {
                    description: 'Markop acknowledges there\'s a cost and accepts it',
                    consequence: 'The mirror shows the cost clearly, but also shows what he\'s protected by paying it.',
                    mechanical: 'Markop gains clarity. Advantage on all saves for remainder of ritual.'
                },
                question: {
                    description: 'Markop asks the mirror what he can do about it',
                    consequence: 'The mirror is not kind, but it is fair. It shows a possibility. A way to pay less.',
                    mechanical: 'GM provides a quest hook — a way to address Markop\'s condition.'
                }
            }
        },
        {
            who: 'Waluigi',
            icon: '🟣',
            mirrorShows: 'The mirror shows Waluigi, but the reflection moves independently. It winks. It waves. It seems... pleased. The mirror-Waluigi points at something the real Waluigi can\'t see.',
            theQuestion: 'You are chaos given form. But whose chaos? Are you the author of your unpredictability, or is something using your randomness as a mask?',
            reactions: {
                flinch: {
                    description: 'Waluigi is unnerved, tries to be still',
                    consequence: 'The mirror-Waluigi keeps moving. It doesn\'t need the real one. That\'s concerning.',
                    mechanical: 'Waluigi\'s reflection is now somewhat independent. Future mirror encounters are complicated.'
                },
                play: {
                    description: 'Waluigi plays along, does something weird back',
                    consequence: 'The mirror-Waluigi laughs silently. They are in sync. Is that good?',
                    mechanical: 'Waluigi and his reflection understand each other. +1 to chaos absorption. But what IS that reflection?'
                },
                accept: {
                    description: 'Waluigi acknowledges he doesn\'t fully understand himself',
                    consequence: 'The mirror-Waluigi stops moving. It nods, once. Respect for honesty.',
                    mechanical: 'Waluigi gains insight. Can ask the GM one yes/no question about his own nature.'
                },
                ignore: {
                    description: 'Waluigi refuses to engage, treats it as meaningless',
                    consequence: 'The mirror-Waluigi shrugs. But it points at that hidden thing more insistently.',
                    mechanical: 'Something Waluigi should know about remains hidden. GM notes for future reveal.'
                }
            }
        },
        {
            who: 'Toad Lee',
            icon: '🍄',
            mirrorShows: 'The mirror shows the world as Toad Lee believes it should be. Orderly. Sensible. Traditional. Then it shows cracks. Places where "how things should be" doesn\'t match "how things are." The cracks are growing.',
            theQuestion: 'You anchor reality to tradition. But tradition is just old habits agreed upon. What happens when the old ways are wrong? When "how things should be" is a lie everyone tells together?',
            reactions: {
                flinch: {
                    description: 'Toad Lee denies the cracks, insists on tradition',
                    consequence: 'The cracks spread faster. Denial makes them worse. The mirror shows traditions that WERE wrong.',
                    mechanical: 'Toad Lee\'s checksum function weakened. Reality validation is less reliable.'
                },
                anger: {
                    description: 'Toad Lee gets defensive about tradition',
                    consequence: 'The mirror shows traditions that caused harm. People hurt by "how things should be."',
                    mechanical: 'Toad Lee must reconcile this. WIS save DC 14 or stunned by revelation.'
                },
                accept: {
                    description: 'Toad Lee acknowledges that tradition must evolve',
                    consequence: 'The cracks stop growing. The mirror shows which traditions are true and which are habit.',
                    mechanical: 'Toad Lee\'s checksum function is strengthened by flexibility. +2 to reality validation.'
                },
                question: {
                    description: 'Toad Lee asks which traditions are wrong',
                    consequence: 'The mirror shows three. One the player knows. One the GM reveals. One remains hidden.',
                    mechanical: 'GM provides significant world lore. Player learns something uncomfortable about their culture.'
                }
            }
        },
        {
            who: 'Toadburt',
            icon: '📜',
            mirrorShows: 'The mirror shows Toadburt\'s memories — but they\'re not quite right. Details are wrong. Colors are off. Some memories that feel real show things that never happened. Some things that happened are missing.',
            theQuestion: 'You are the record. The witness. But memory is not truth — memory is story. How much of what you "remember" is what actually happened? How much is what you decided happened?',
            reactions: {
                flinch: {
                    description: 'Toadburt panics, questions all memories',
                    consequence: 'The mirror shows more corrupted memories. The panic feeds the corruption.',
                    mechanical: 'Toadburt\'s witness function is compromised. Disadvantage on memory-related tasks.'
                },
                denial: {
                    description: 'Toadburt insists memories are accurate',
                    consequence: 'The mirror shows a specific memory that is definitely wrong. Proves the point.',
                    mechanical: 'One specific false memory is revealed. Something Toadburt was sure of is false.'
                },
                accept: {
                    description: 'Toadburt acknowledges memory is imperfect, commits to witnessing anyway',
                    consequence: 'The mirror shows the difference between memory and record. Toadburt can now do both.',
                    mechanical: 'Toadburt can now separate "what I remember" from "what I will record." Powerful distinction.'
                },
                examine: {
                    description: 'Toadburt carefully examines which memories are wrong',
                    consequence: 'The mirror shows which memories are story and which are fact. Painful but useful.',
                    mechanical: 'One significant false belief is corrected. GM reveals something Toadburt got wrong.'
                }
            }
        },
        {
            who: 'Eager',
            icon: '🪢',
            mirrorShows: 'The mirror shows threads connecting Eager to everyone in the room. Some threads are healthy. Some are tangled. Some are... feeding. Taking. The connections go both ways, but not equally.',
            theQuestion: 'You tether people together. You link emotions. But connection can be a gift or a chain. Are you binding people to help them, or to keep them from leaving you?',
            reactions: {
                flinch: {
                    description: 'Eager is horrified by the feeding threads, tries to cut them',
                    consequence: 'The threads resist. They\'ve become part of Eager. Cutting them cuts him.',
                    mechanical: 'Eager takes 1d6 psychic damage. The problematic threads remain. Must address properly.'
                },
                denial: {
                    description: 'Eager insists all connections are good',
                    consequence: 'The mirror zooms in on a specific thread that is clearly not good. Someone is being drained.',
                    mechanical: 'A specific unhealthy relationship is revealed. Eager must acknowledge it.'
                },
                accept: {
                    description: 'Eager acknowledges some connections are unhealthy',
                    consequence: 'The mirror shows which ones. It also shows how to fix them. Work, but possible.',
                    mechanical: 'Eager gains understanding. Can choose to work on the unhealthy connections.'
                },
                sacrifice: {
                    description: 'Eager deliberately cuts the bad threads regardless of pain',
                    consequence: 'Pain. 2d6 psychic damage. But the bad connections are severed. Healthier connections remain.',
                    mechanical: 'Eager takes damage but is cleansed. Emotional tethering is now purely positive.'
                }
            }
        },
        {
            who: 'Perot',
            icon: '⚔️',
            mirrorShows: 'The mirror shows a sequence: before, during, after. But the "during" keeps changing. Different actions, different outcomes. Perot sees himself making different choices, getting different results. Which sequence is real?',
            theQuestion: 'You maintain continuity. Before and after. But if the "during" is uncertain, how do you know which before and after are connected? Which sequence of your life is the real one?',
            reactions: {
                flinch: {
                    description: 'Perot is disoriented by the multiple sequences',
                    consequence: 'Continuity weakens. The "during" phase becomes harder to track.',
                    mechanical: 'Perot\'s continuity role is weakened. -1 to squad cohesion.'
                },
                focus: {
                    description: 'Perot focuses on one sequence, ignores the others',
                    consequence: 'That sequence becomes "real." But the others don\'t disappear. They wait.',
                    mechanical: 'Continuity stabilized for now. But alternate sequences may return.'
                },
                accept: {
                    description: 'Perot accepts that multiple sequences might be valid',
                    consequence: 'The mirror shows how to choose — not ignore — which sequence to live.',
                    mechanical: 'Perot gains ability to consciously switch between continuities. Powerful but weird.'
                },
                question: {
                    description: 'Perot asks which sequence is the original',
                    consequence: 'The mirror shows the branching point. When continuity first split. That moment is now visible.',
                    mechanical: 'GM reveals when/how Perot\'s timeline became uncertain. Quest hook.'
                }
            }
        },
        {
            who: 'Smokin\' J',
            icon: '🚬',
            mirrorShows: 'The mirror shows darkness. Just darkness. And then, in the darkness, a shape. Something that has been there, in J\'s personal dark, for a very long time. Watching. Waiting. Patient.',
            theQuestion: 'You anchor shadows. You absorb fear of the dark. But something lives in your dark. Has it always been there? Did you invite it? Or did your comfort with darkness give it a home?',
            reactions: {
                flinch: {
                    description: 'J panics, tries to bring light, reject the dark',
                    consequence: 'The thing in the dark moves when the light comes. It\'s faster than the light. It\'s been in the light too, hiding.',
                    mechanical: 'J\'s shadow anchor function is destabilized. The thing noticed him noticing it.'
                },
                freeze: {
                    description: 'J freezes, overwhelmed by the revelation',
                    consequence: 'The thing in the dark comes closer. It doesn\'t attack. It... nestles. Like it\'s been cold.',
                    mechanical: 'The thing becomes a factor. Not necessarily enemy. Not necessarily friend. GM decides its nature.'
                },
                accept: {
                    description: 'J acknowledges the presence, doesn\'t flee',
                    consequence: 'The thing in the dark becomes visible. Old. Tired. It\'s been carrying darkness so J didn\'t have to.',
                    mechanical: 'J\'s shadow anchor has been doing more work than he knew. The thing is an ally. Surprise.'
                },
                confront: {
                    description: 'J demands to know what it is',
                    consequence: 'The thing shows its face. J recognizes it. It\'s been part of him since...',
                    mechanical: 'GM reveals the thing\'s origin. Connected to J\'s backstory.'
                }
            }
        },
        {
            who: 'Salam',
            icon: '🔦',
            mirrorShows: 'The mirror shows Salam\'s torch. But the flame is not steady. It flickers toward something. Always toward something. The light is not neutral — it\'s seeking. It wants to illuminate something specific.',
            theQuestion: 'You carry light. Forward motion. Progress. But progress toward what? The light chooses direction. Do you, or does it lead you?',
            reactions: {
                flinch: {
                    description: 'Salam tries to control the torch, force it steady',
                    consequence: 'The torch resists. The flame flickers angrily. It has opinions.',
                    mechanical: 'Torch becomes unreliable. May not light what Salam wants.'
                },
                follow: {
                    description: 'Salam lets the torch lead, follows where it points',
                    consequence: 'The torch illuminates something hidden in the ritual space. Something the Oracle didn\'t mention.',
                    mechanical: 'Secret revealed. GM describes something the party wasn\'t supposed to see yet.'
                },
                accept: {
                    description: 'Salam acknowledges the torch has purpose, works with it',
                    consequence: 'The torch and Salam reach understanding. It shows him its goal. They share it.',
                    mechanical: 'Salam and torch are aligned. +2 to all light-related functions.'
                },
                reject: {
                    description: 'Salam drops the torch, refuses its agenda',
                    consequence: 'The torch goes out. Another light must be found. Salam is now torchless.',
                    mechanical: 'Salam\'s forward motion role is disabled. Someone else must carry light.'
                }
            }
        },
        {
            who: 'Oracle',
            icon: '🧙‍♂️',
            mirrorShows: 'The mirror shows other Oracles. Many of them. All speaking the same words. All conducting the same ritual. Across time, across space. The Oracle is not unique — the Oracle is a pattern. A role. Replaceable.',
            theQuestion: 'You conduct the ritual. But the ritual conducted itself before you, and will after. You are not special — you are a function. How much of "you" is actually the role wearing a personality like clothes?',
            reactions: {
                flinch: {
                    description: 'Oracle is shaken by insignificance',
                    consequence: 'The ritual feels the Oracle\'s doubt. The words come harder. The pattern doesn\'t like uncertainty.',
                    mechanical: 'Oracle concentration is at disadvantage. The role is trying to take over.'
                },
                anger: {
                    description: 'Oracle asserts individuality, rejects the pattern',
                    consequence: 'The other Oracles turn to look. They are not pleased. The pattern notices rebellion.',
                    mechanical: 'Oracle is now marked by the pattern. Future rituals will be... observed.'
                },
                accept: {
                    description: 'Oracle accepts being part of something larger',
                    consequence: 'The other Oracles nod. Not approval — acknowledgment. The pattern welcomes the acceptance.',
                    mechanical: 'Oracle gains access to other Oracles\' knowledge. Can ask one question of the pattern.'
                },
                negotiate: {
                    description: 'Oracle acknowledges the pattern but insists on individual contribution',
                    consequence: 'The pattern considers. It\'s not used to negotiation. But it respects the attempt.',
                    mechanical: 'Oracle and pattern reach agreement. Individual with pattern support. Best outcome.'
                }
            }
        }
    ],
    rollTables: [
        {
            name: 'Unexpected Mirror Questions',
            id: 'unexpected-questions',
            die: 8,
            note: 'If the mirror decides to ask something the participant wasn\'t prepared for',
            results: [
                { roll: 1, text: 'Who have you failed that you\'ve never told anyone about?', effect: 'Secret failure exposed.' },
                { roll: 2, text: 'What do you believe that you know isn\'t true?', effect: 'Self-deception revealed.' },
                { roll: 3, text: 'Who are you when no one is watching?', effect: 'Private self made visible.' },
                { roll: 4, text: 'What would you sacrifice them for?', effect: 'Hidden priorities exposed.' },
                { roll: 5, text: 'When did you stop hoping?', effect: 'Old wound opened.' },
                { roll: 6, text: 'What do they not know about you that would change everything?', effect: 'Secret relationship to party revealed.' },
                { roll: 7, text: 'What are you pretending not to see?', effect: 'Willful blindness exposed.' },
                { roll: 8, text: 'When did you become this? Who were you before?', effect: 'Origin of current self questioned.' }
            ]
        }
    ],
    checks: [],
    special: `
        <div class="interrogation-guidance">
            <h4>⚡ Running This Scene</h4>
            <p>This scene can take significant time. Consider:</p>
            <ul>
                <li>Doing 3-4 interrogations in detail, summarizing others</li>
                <li>Focusing on players who engage most with roleplay</li>
                <li>Letting players choose who gets interrogated in what order</li>
                <li>Using the interrogations to reveal campaign-relevant secrets</li>
            </ul>
            <p><strong>The mirror is not cruel. It is honest. Frame questions as revelation, not attack.</strong></p>
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
                    success: 'You hold on, allowing for a controlled collapse instead of a chaotic one.',
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
// In getSceneData(), find and REPLACE Scene 10 with this:
{
    icon: '💥',
    title: 'AFTERMATH - THE RUPTURE',
    subtitle: 'The Cut Fails',
    oracleQuote: 'It is not done. It is broken. The mirror does not go dull—it shatters!',
    description: `
        <p>The ritual does not conclude. It fails. The energy, unable to perform a clean cut, instead tears a hole in reality.</p>
        <p>The mirror cracks, spiderwebbing with light before imploding, pulling everyone into a vortex of color and pressure.</p>
        <p>The ritual has failed. Now, you must survive the consequence.</p>
    `,
    checks: [],
    rollTables: [
        {
            name: 'Rupture Destination',
            id: 'rupture-destination',
            die: 6,
            note: 'The final destination of the failed ritual.',
            results: [
                { roll: '1', text: 'Shadeward Manor', effect: 'The entire group is transported to the bleak, shadowy manor.', a: "gm.triggerRitualFailureTeleport('shadeward')" },
                { roll: '2-3', text: 'Feyward Manor (Markop Alone)', effect: 'The group is scattered. Markop awakens alone in the vibrant, wild manor.', a: "gm.triggerRitualFailureTeleport('feyward')" },
                { roll: '4-5', text: 'Shadeward Manor', effect: 'The entire group is transported to the bleak, shadowy manor.', a: "gm.triggerRitualFailureTeleport('shadeward')" },
                { roll: '6', text: 'Planar Sanctum (Best Failure)', effect: 'The ritual collapses into a stable pocket dimension. The group is safe, for now.', a: "gm.triggerRitualFailureTeleport('sanctum')" }
            ]
        }
    ],
    special: `
        <div class="aftermath-questions">
            <h4>The ritual has failed. Roll on the Rupture Destination table to determine the outcome.</h4>
            <p>Click the button on the table result to see the full descriptive text for the arrival.</p>
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
        if (this.state.currentScene < 11) {
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
if (result.a) {
    const actionBtn = document.createElement('button');
    actionBtn.className = 'roll-btn';
    actionBtn.textContent = 'Show Outcome →';
    actionBtn.setAttribute('onclick', result.a);
    resultDiv.querySelector('.rolled-result').appendChild(actionBtn);
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