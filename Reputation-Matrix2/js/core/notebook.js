// ==================== NOTEBOOK SYSTEM ====================

function toggleNotebook() {
    const overlay = document.getElementById('notebook-overlay');
    overlay.classList.toggle('hidden');
    if (!overlay.classList.contains('hidden')) {
        updateProgressTab();
    }
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    event.target.classList.add('active');
    if (tabName === 'progress') updateProgressTab();
}

function updateProgressTab() {
    // Update checkmarks
    const updates = [
        { id: 'prog-veins', complete: ritual.veinsActive },
        { id: 'prog-fork', complete: ritual.forkStruck },
        { id: 'prog-tuning', complete: ritual.chromaticBasis !== null },
        { id: 'prog-candles', complete: ritual.candlesLit.length === 12 },
        { id: 'prog-filaments', complete: ritual.filamentsActive },
        { id: 'prog-mirror', complete: ritual.mirrorAwakened },
        { id: 'prog-complete', complete: ritual.ritualComplete }
    ];
    
    updates.forEach(u => {
        const el = document.getElementById(u.id);
        if (el) {
            el.textContent = u.complete ? '●' : '○';
            el.className = u.complete ? 'text-2xl text-green-700' : 'text-2xl text-gray-400';
        }
    });
    
    // Update tuning display
    const tuningDisplay = document.getElementById('tuning-display');
    if (tuningDisplay) {
        if (ritual.chromaticBasis === 'purple') {
            tuningDisplay.textContent = 'PURPLE (Reflection)';
            tuningDisplay.className = 'text-purple-700 font-bold';
        } else if (ritual.chromaticBasis === 'orange') {
            tuningDisplay.textContent = 'ORANGE (Transformation)';
            tuningDisplay.className = 'text-orange-600 font-bold';
        } else {
            tuningDisplay.textContent = 'Not tuned';
            tuningDisplay.className = 'text-gray-500';
        }
    }
    
    // Update candle count
    const candleProgress = document.getElementById('candle-progress');
    if (candleProgress) candleProgress.textContent = ritual.candlesLit.length;
    
    // Update bell charges
    const bellCharges = document.getElementById('bell-charges');
    if (bellCharges) {
        const remaining = 3 - ritual.bellRings;
        bellCharges.textContent = remaining;
        bellCharges.className = remaining === 0 ? 'text-red-600 font-bold' : 
                                remaining === 1 ? 'text-amber-600' : 'text-green-700';
    }
    
    // Update stabilization charges
    const stabCharges = document.getElementById('stab-charges');
    if (stabCharges) stabCharges.textContent = ritual.stabilizationCharges;
    
    // Update objective
    const msgDiv = document.getElementById('progress-message');
    const objText = document.getElementById('current-objective');
    if (msgDiv && objText) {
        msgDiv.classList.remove('hidden');
        const hint = ritual.getContextualHint();
        if (hint) {
            objText.textContent = hint.text;
            msgDiv.className = `mt-6 p-3 rounded ${
                hint.type === 'ready' ? 'bg-green-100 border border-green-400' :
                hint.type === 'warning' ? 'bg-red-100 border border-red-400' :
                'bg-purple-100 border border-purple-400'
            }`;
        }
    }
    
    // Update status displays
    const statusShear = document.getElementById('status-shear');
    const statusEntropy = document.getElementById('status-entropy');
    const statusGeometry = document.getElementById('status-geometry');
    
    if (statusShear) {
        statusShear.textContent = (ritual.shearLevel * 100).toFixed(0) + '%';
        statusShear.className = ritual.shearLevel > 0.7 ? 'text-red-600 font-bold' : 
                                ritual.shearLevel > 0.4 ? 'text-amber-600' : 'text-green-700';
    }
    if (statusEntropy) {
        statusEntropy.textContent = ritual.entropyLevel + '%';
        statusEntropy.className = ritual.entropyLevel > 70 ? 'text-red-600 font-bold' : 
                                  ritual.entropyLevel > 40 ? 'text-amber-600' : 'text-green-700';
    }
    if (statusGeometry) {
        statusGeometry.textContent = ritual.geometryStable ? 'Stable' : 'UNSTABLE';
        statusGeometry.className = ritual.geometryStable ? 'text-green-700' : 'text-red-600 font-bold';
    }
    
    // Update step indicators
    updateStepIndicators();
}

function updateStepIndicators() {
    const steps = [
        { id: 'step-1', complete: ritual.veinsActive, available: true },
        { id: 'step-2', complete: ritual.forkStruck && ritual.chromaticBasis, available: ritual.veinsActive },
        { id: 'step-3', complete: ritual.candlesLit.length === 12, available: ritual.forkStruck },
        { id: 'step-4', complete: ritual.filamentsActive, available: ritual.candlesLit.length === 12 },
        { id: 'step-5', complete: ritual.mirrorAwakened, available: ritual.filamentsActive },
        { id: 'step-6', complete: ritual.ritualComplete, available: ritual.mirrorAwakened }
    ];
    
    let foundCurrent = false;
    steps.forEach((step) => {
        const el = document.getElementById(step.id);
        if (!el) return;
        
        if (step.complete) {
            el.className = 'step-complete';
        } else if (!foundCurrent && step.available) {
            el.className = 'step-current';
            foundCurrent = true;
        } else if (step.available) {
            el.className = 'step-available';
        } else {
            el.className = 'step-pending';
        }
    });
}

// Generate notebook HTML
function getNotebookHTML() {
    return `
    <div id="notebook-overlay" class="overlay hidden" style="background: rgba(0,0,0,0.7); padding: 1rem;">
        <div class="notebook-panel rounded-lg max-w-2xl w-full max-h-[85vh] overflow-hidden">
            <div class="flex justify-between items-center p-4 border-b-2 border-amber-800/30">
                <h2 class="text-xl notebook-font text-amber-900">MAGES GUILD - FIELD NOTES</h2>
                <button onclick="toggleNotebook()" class="text-amber-900 text-2xl hover:text-red-700">&times;</button>
            </div>
            
            <div class="flex border-b border-amber-800/30 flex-wrap">
                <button class="tab-btn active" onclick="showTab('procedure')">Procedure</button>
                <button class="tab-btn" onclick="showTab('tools')">Tools</button>
                <button class="tab-btn" onclick="showTab('warnings')">Warnings</button>
                <button class="tab-btn" onclick="showTab('progress')">Progress</button>
            </div>
            
            <div class="notebook-page p-6 overflow-y-auto max-h-[60vh]">
                <!-- Procedure Tab -->
                <div id="tab-procedure" class="tab-content notebook-font text-amber-900 text-sm leading-relaxed">
                    <h3 class="text-lg font-bold mb-3 underline">CONVERGENCE ENGINE STARTUP SEQUENCE</h3>
                    
                    <p class="italic mb-4">Transcribed from Oracle's whispered instructions. The ritual adapts—but do not test its patience.</p>
                    
                    <div class="mb-4 p-3 bg-amber-100 border border-amber-300 rounded">
                        <h4 class="font-bold">CANDLE SEQUENCE:</h4>
                        <p class="mt-1">Define edges before cutting center. Light opposing pairs:</p>
                        <p class="font-mono mt-2 text-center">1 ↔ 12 → 2 ↔ 11 → 3 ↔ 10 → 4 ↔ 9 → 5 ↔ 8 → 6 ↔ 7</p>
                        <p class="mt-2 text-xs italic">Either candle of a pair may be lit first. The ritual cares about opposition, not pedantry.</p>
                    </div>
                    
                    <div class="mb-4">
                        <h4 class="font-bold">GENERAL FLOW:</h4>
                        <ol class="list-decimal ml-6 mt-2 space-y-2">
                            <li id="step-1" class="step-current">Activate grounding veins (the pale metal paths)</li>
                            <li id="step-2" class="step-pending">Strike resonance fork to tune chromatic basis</li>
                            <li id="step-3" class="step-pending">Light candles in opposing pairs, edges to center</li>
                            <li id="step-4" class="step-pending">Observe mirror filaments activate</li>
                            <li id="step-5" class="step-pending">Wake the mirror interface</li>
                            <li id="step-6" class="step-pending">Complete the convergence</li>
                        </ol>
                    </div>
                    
                    <div class="mb-4 p-3 bg-gray-100 border border-gray-300 rounded">
                        <h4 class="font-bold">THE SIX PRINCIPLES:</h4>
                        <ul class="mt-2 space-y-1 text-xs">
                            <li>• "You cannot cut the center until you have defined the edges."</li>
                            <li>• "Opposition precedes resolution."</li>
                            <li>• "Certainty before uncertainty."</li>
                            <li>• "The question is not the first thing asked."</li>
                            <li>• "What divides must exist before what is divided."</li>
                            <li>• "The hand that holds the blade moves last."</li>
                        </ul>
                    </div>
                    
                    <p class="mt-4 italic text-xs">— Notes compiled by Junior Technician Vells, Applied Metaphysics Div.</p>
                </div>
                
                <!-- Tools Tab -->
                <div id="tab-tools" class="tab-content notebook-font text-amber-900 text-sm leading-relaxed hidden">
                    <h3 class="text-lg font-bold mb-3 underline">AUXILIARY INSTRUMENTS</h3>
                    
                    <div class="mb-4 p-3 bg-purple-100 border-l-4 border-purple-600">
                        <h4 class="font-bold text-purple-800">RESONANCE FORK — Chromatic Tuner</h4>
                        <p class="mt-1">The fork doesn't just verify Oracle proximity. It <span class="font-bold">tunes the chromatic basis</span>.</p>
                        <p class="mt-2">Strike patterns matter:</p>
                        <p class="mt-1 text-purple-700">• <span class="font-bold">Quick double-strike</span> (within 1 second) → PURPLE basis</p>
                        <p class="text-xs ml-4">Aligns with reflection spaces, delayed causality, self-observation</p>
                        <p class="mt-1 text-orange-700">• <span class="font-bold">Deliberate single strike</span> (let it settle) → ORANGE basis</p>
                        <p class="text-xs ml-4">Aligns with fey realms, spore networks, transformation domains</p>
                        <p class="mt-2 text-gray-600 text-xs italic">The basis determines where the mirror looks when it becomes an interface.</p>
                    </div>
                    
                    <div class="mb-4 p-3 bg-cyan-100 border-l-4 border-cyan-600">
                        <h4 class="font-bold text-cyan-800">THE BELL — Geometry Stabilizer</h4>
                        <p class="mt-1">Originally a Range Enforcer. Repurposed as a <span class="font-bold">stabilization tool</span>.</p>
                        <p class="mt-2">When rung, the bell:</p>
                        <ul class="mt-1 ml-4 space-y-1">
                            <li>• Reduces chronometric shear (-30%)</li>
                            <li>• Bleeds excess entropy (-20%)</li>
                            <li>• Grants +1 error tolerance charge</li>
                            <li>• Stabilizes geometry if unstable</li>
                        </ul>
                        <p class="mt-2 text-red-700 font-bold">⚠ Limited to 3 rings per ritual.</p>
                        <p class="mt-1 text-gray-600 text-xs">5-second cooldown between rings. Things still listen sideways, but controlled rings stabilize rather than summon.</p>
                    </div>
                    
                    <div class="mb-4 p-3 bg-amber-100 border-l-4 border-amber-600">
                        <h4 class="font-bold text-amber-800">GOVERNOR HOUSING</h4>
                        <p class="mt-1">Emergency geometry collapse. Each toggle (line, dot, cross) collapses a section of ritual space.</p>
                        <p class="mt-1">Reduces shear by 20% per toggle engaged.</p>
                        <p class="mt-1 text-gray-600 text-xs italic">"No one flips a governor switch casually. They do it with both hands."</p>
                    </div>
                    
                    <div class="mb-4 p-3 bg-gray-100 border-l-4 border-gray-600">
                        <h4 class="font-bold">OBSERVATION INK BOWLS</h4>
                        <p class="mt-1">The ink never stills. It ripples in response to things no one in the room is doing.</p>
                        <p class="mt-1 text-gray-600 text-xs">Disturbing the ink changes the patterns. Meaning is uncertain.</p>
                    </div>
                </div>
                
                <!-- Warnings Tab -->
                <div id="tab-warnings" class="tab-content notebook-font text-amber-900 text-sm leading-relaxed hidden">
                    <h3 class="text-lg font-bold mb-3 underline text-red-800">⚠ CRITICAL WARNINGS ⚠</h3>
                    
                    <div class="mb-4 p-3 bg-red-100 border-2 border-red-400 rounded">
                        <h4 class="font-bold text-red-800">SEQUENCE VIOLATION:</h4>
                        <p class="mt-1">The ritual tolerates minor deviations—pairs may be lit in either order.</p>
                        <p class="mt-1">But skip a pair entirely? Light the center before the edges?</p>
                        <p class="mt-1 font-bold">The inner ring shears. Guild wings are named after people who did that.</p>
                        <p class="mt-2 text-cyan-700">The bell can forgive errors if you've earned stabilization charges.</p>
                    </div>
                    
                    <div class="mb-4 p-3 bg-red-100 border-2 border-red-400 rounded">
                        <h4 class="font-bold text-red-800">BELL EXHAUSTION:</h4>
                        <p class="mt-1">Three rings maximum. After that, the sympathetic metal goes dull.</p>
                        <p class="mt-1">No more stabilization. No safety net.</p>
                        <p class="mt-1 text-xs italic">"Things that listen sideways have noted your position. But not enough to act."</p>
                    </div>
                    
                    <div class="mb-4 p-3 bg-red-100 border-2 border-red-400 rounded">
                        <h4 class="font-bold text-red-800">ENTROPY RING:</h4>
                        <p class="mt-1">Probability sinks do NOT empty. They RUPTURE. Usually inward.</p>
                        <p class="mt-1">The bell can bleed entropy if levels get dangerous.</p>
                    </div>
                    
                    <div class="mb-4 p-3 bg-red-100 border-2 border-red-400 rounded">
                        <h4 class="font-bold text-red-800">CHRONOMETRIC SHEAR:</h4>
                        <p class="mt-1">If the floating rings ALIGN—time is about to do something rude.</p>
                        <p class="mt-1">Bell stabilization or governor toggles can reduce shear.</p>
                    </div>
                    
                    <div class="mt-4 p-3 bg-gray-200 border border-gray-400 rounded">
                        <p class="italic">"We don't ask whether something should be done.</p>
                        <p class="italic">We ask whether it fits inside tolerance."</p>
                        <p class="text-right text-xs mt-2">— Guild Philosophy</p>
                    </div>
                </div>
                
                <!-- Progress Tab -->
                <div id="tab-progress" class="tab-content notebook-font text-amber-900 text-sm leading-relaxed hidden">
                    <h3 class="text-lg font-bold mb-3 underline">RITUAL PROGRESS</h3>
                    
                    <div class="space-y-3">
                        <div class="flex items-center gap-3">
                            <span id="prog-veins" class="text-2xl text-gray-400">○</span>
                            <span>Grounding Veins Activated</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span id="prog-fork" class="text-2xl text-gray-400">○</span>
                            <span>Resonance Fork Struck</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span id="prog-tuning" class="text-2xl text-gray-400">○</span>
                            <span>Chromatic Basis: <span id="tuning-display" class="text-gray-500">Not tuned</span></span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span id="prog-candles" class="text-2xl text-gray-400">○</span>
                            <span>Candles Lit: <span id="candle-progress">0</span>/12</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span id="prog-filaments" class="text-2xl text-gray-400">○</span>
                            <span>Mirror Filaments Active</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span id="prog-mirror" class="text-2xl text-gray-400">○</span>
                            <span>Mirror Interface Awakened</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span id="prog-complete" class="text-2xl text-gray-400">○</span>
                            <span>Convergence Complete</span>
                        </div>
                    </div>
                    
                    <div id="progress-message" class="mt-6 p-3 bg-purple-100 border border-purple-400 rounded">
                        <p class="text-purple-900 font-bold">Current Guidance:</p>
                        <p id="current-objective" class="text-purple-800 mt-1">Activate the grounding veins to stabilize the geometry.</p>
                    </div>
                    
                    <div class="mt-6 p-3 bg-gray-200 border border-gray-400 rounded">
                        <p class="font-bold">System Status:</p>
                        <div class="grid grid-cols-2 gap-2 mt-2">
                            <p>Geometry: <span id="status-geometry" class="text-green-700">Stable</span></p>
                            <p>Shear: <span id="status-shear" class="text-green-700">0%</span></p>
                            <p>Entropy: <span id="status-entropy" class="text-green-700">0%</span></p>
                            <p>Bell Charges: <span id="bell-charges" class="text-green-700">3</span></p>
                            <p>Stabilization: <span id="stab-charges">0</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}
