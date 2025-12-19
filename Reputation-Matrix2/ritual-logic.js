// ============================================
// RAVENTREE RITUAL - LOGIC & INTERACTIVITY
// ============================================

// State Management
let state = {
    circleIntegrity: 5,
    safeguards: 3,
    ritualStress: 0,
    timeline: 'STABLE',
    currentPhase: 'PRE',
    witnessCount: 0,
    
    // Character statuses: 'present', 'late', 'absent'
    characters: {},
    
    // Active flags
    flags: new Set(),
    
    // Completed scenes
    completedScenes: [],
    
    // Notes
    notes: [],
    
    // Player Role Tracking
    players: {
        archie: {
            prep: null,
            mainCheck: null,
            fireResist: null,
            sustain: { 4: null, 5: null, 6: null },
            bonus: 0
        },
        markop: {
            prep: null,
            position: null,
            defense: null,
            defenseType: null
        },
        waluigi: {
            prep: null,
            stillness: { 3: null, 4: null, 5: null },
            weirdnessCount: 0,
            surgeUsed: false
        },
        bowser: {
            prep: null,
            grounding: null,
            mirror: null,
            sustain: { 3: null, 4: null, 5: null, 6: null },
            hesitated: false
        }
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeCharacters();
    renderCharacterCards();
    renderScenes();
    updateAllDisplays();
    showTab('overview');
});

// ============================================
// CHARACTER MANAGEMENT
// ============================================

function initializeCharacters() {
    // Initialize all characters with default status
    Object.values(CHARACTERS).flat().forEach(char => {
        state.characters[char.id] = {
            status: 'present',
            notes: '',
            checks: {}
        };
    });
    updateWitnessCount();
}

function updateCharacterStatus(charId, status) {
    state.characters[charId].status = status;
    updateWitnessCount();
    renderCharacterCards();
    updateGroupSummaries();
    updateAllDisplays();
}

function updateWitnessCount() {
    let count = 0;
    [...CHARACTERS.groupA, ...CHARACTERS.groupB].forEach(char => {
        if (state.characters[char.id]?.status === 'present') {
            count++;
        }
    });
    state.witnessCount = count;
    document.getElementById('witnessCount').textContent = `${count}/14`;
    
    // Update requirement
    updateRequirement('witnesses', count >= 6);
}

function renderCharacterCards() {
    // Group A
    const groupAContainer = document.getElementById('groupA-cards');
    if (groupAContainer) {
        groupAContainer.innerHTML = CHARACTERS.groupA.map(char => createCharacterCard(char, 'A')).join('');
        document.getElementById('groupA-count').textContent = `${CHARACTERS.groupA.filter(c => state.characters[c.id]?.status === 'present').length}/${CHARACTERS.groupA.length} Present`;
    }
    
    // Group B
    const groupBContainer = document.getElementById('groupB-cards');
    if (groupBContainer) {
        groupBContainer.innerHTML = CHARACTERS.groupB.map(char => createCharacterCard(char, 'B')).join('');
        document.getElementById('groupB-count').textContent = `${CHARACTERS.groupB.filter(c => state.characters[c.id]?.status === 'present').length}/${CHARACTERS.groupB.length} Present`;
    }
    
    // Group C
    const groupCContainer = document.getElementById('groupC-cards');
    if (groupCContainer) {
        groupCContainer.innerHTML = CHARACTERS.groupC.map(char => createCharacterCard(char, 'C')).join('');
        document.getElementById('groupC-count').textContent = `${CHARACTERS.groupC.filter(c => state.characters[c.id]?.status !== 'absent').length}/${CHARACTERS.groupC.length} Watching`;
    }
}

function createCharacterCard(char, group) {
    const charState = state.characters[char.id] || { status: 'present' };
    const statusClass = charState.status;
    const borderColor = group === 'A' ? 'green' : group === 'B' ? 'blue' : 'red';
    
    const importanceColors = {
        critical: 'text-red-400',
        high: 'text-orange-400',
        medium: 'text-yellow-400',
        low: 'text-gray-400',
        special: 'text-purple-400',
        threat: 'text-red-500',
        unknown: 'text-gray-500',
        political: 'text-blue-400'
    };
    
    return `
        <div class="character-card ${statusClass} bg-gray-800 rounded-lg p-3 border-2 border-${borderColor}-600" data-char="${char.id}">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <span class="text-xl">${char.emoji}</span>
                    <span class="font-bold text-${borderColor}-300">${char.name}</span>
                </div>
                <span class="text-xs ${importanceColors[char.importance] || 'text-gray-400'}">${char.importance?.toUpperCase()}</span>
            </div>
            
            <div class="text-xs text-gray-400 mb-2">${char.role}</div>
            <div class="text-xs text-${borderColor}-400 mb-2">📍 ${char.ritualRole}</div>
            
            ${char.notes ? `<div class="text-xs text-gray-500 italic mb-2">${char.notes}</div>` : ''}
            
            <!-- Status Buttons -->
            <div class="flex gap-1 mb-2">
                <button onclick="updateCharacterStatus('${char.id}', 'present')" 
                    class="flex-1 px-2 py-1 text-xs rounded ${charState.status === 'present' ? 'bg-green-700' : 'bg-gray-700'} hover:bg-green-600">
                    ✓ Present
                </button>
                <button onclick="updateCharacterStatus('${char.id}', 'late')" 
                    class="flex-1 px-2 py-1 text-xs rounded ${charState.status === 'late' ? 'bg-yellow-700' : 'bg-gray-700'} hover:bg-yellow-600">
                    ⏳ Late
                </button>
                <button onclick="updateCharacterStatus('${char.id}', 'absent')" 
                    class="flex-1 px-2 py-1 text-xs rounded ${charState.status === 'absent' ? 'bg-red-700' : 'bg-gray-700'} hover:bg-red-600">
                    ✗ Absent
                </button>
            </div>
            
            <!-- Failure Consequences -->
            <details class="text-xs">
                <summary class="cursor-pointer text-gray-500 hover:text-gray-300">View Consequences</summary>
                <div class="mt-2 space-y-1 bg-gray-900 p-2 rounded">
                    ${char.failureIfAbsent ? `<div class="text-red-400"><strong>If Absent:</strong> ${char.failureIfAbsent}</div>` : ''}
                    ${char.failureIfLate ? `<div class="text-yellow-400"><strong>If Late:</strong> ${char.failureIfLate}</div>` : ''}
                    ${char.wrongPosition ? `<div class="text-orange-400"><strong>Wrong Position:</strong> ${char.wrongPosition}</div>` : ''}
                </div>
            </details>
            
            <!-- Special Checks -->
            ${char.specialChecks && char.specialChecks.length > 0 ? `
                <details class="text-xs mt-2">
                    <summary class="cursor-pointer text-blue-400 hover:text-blue-300">🎲 Checks Required</summary>
                    <div class="mt-2 space-y-1 bg-gray-900 p-2 rounded">
                        ${char.specialChecks.map(check => `
                            <div class="flex justify-between items-center">
                                <span>${check.name}</span>
                                <span class="roll-box">${check.type} DC ${check.dc}</span>
                            </div>
                        `).join('')}
                    </div>
                </details>
            ` : ''}
            
            <!-- Impostor Branch (Dan only) -->
            ${char.impostorBranch ? `
                <details class="text-xs mt-2">
                    <summary class="cursor-pointer text-red-400 hover:text-red-300">🔍 Impostor Branch</summary>
                    <div class="mt-2 space-y-1 bg-gray-900 p-2 rounded">
                        <div class="text-green-400"><strong>If Real:</strong> ${char.impostorBranch.ifReal}</div>
                        <div class="text-red-400"><strong>If Impostor:</strong> ${char.impostorBranch.ifImpostor}</div>
                        <div class="text-yellow-400"><strong>If Unknown:</strong> ${char.impostorBranch.ifUnknown}</div>
                    </div>
                </details>
            ` : ''}
            
            <!-- Threat Actions (Group C) -->
            ${char.actions ? `
                <details class="text-xs mt-2">
                    <summary class="cursor-pointer text-red-400 hover:text-red-300">⚠️ Possible Actions</summary>
                    <div class="mt-2 bg-gray-900 p-2 rounded">
                        <div class="flex flex-wrap gap-1">
                            ${char.actions.map(action => `<span class="px-2 py-1 bg-red-900 rounded">${action}</span>`).join('')}
                        </div>
                        ${char.threat ? `<div class="mt-1 text-red-300">${char.threat}</div>` : ''}
                    </div>
                </details>
            ` : ''}
        </div>
    `;
}

function updateGroupSummaries() {
    // Group A Summary
    const groupASummary = document.getElementById('groupA-summary');
    if (groupASummary) {
        groupASummary.innerHTML = CHARACTERS.groupA.map(char => {
            const status = state.characters[char.id]?.status || 'present';
            const statusIcon = status === 'present' ? '✅' : status === 'late' ? '⏳' : '❌';
            const statusColor = status === 'present' ? 'text-green-400' : status === 'late' ? 'text-yellow-400' : 'text-red-400';
            return `<div class="${statusColor}">${statusIcon} ${char.emoji} ${char.name}</div>`;
        }).join('');
    }
    
    // Group B Summary
    const groupBSummary = document.getElementById('groupB-summary');
    if (groupBSummary) {
        groupBSummary.innerHTML = CHARACTERS.groupB.map(char => {
            const status = state.characters[char.id]?.status || 'present';
            const statusIcon = status === 'present' ? '✅' : status === 'late' ? '⏳' : '❌';
            const statusColor = status === 'present' ? 'text-green-400' : status === 'late' ? 'text-yellow-400' : 'text-red-400';
            return `<div class="${statusColor}">${statusIcon} ${char.emoji} ${char.name}</div>`;
        }).join('');
    }
    
    // Group C Summary
    const groupCSummary = document.getElementById('groupC-summary');
    if (groupCSummary) {
        groupCSummary.innerHTML = CHARACTERS.groupC.map(char => {
            return `<div class="text-red-400">👁️ ${char.emoji} ${char.name}</div>`;
        }).join('');
    }
}

// ============================================
// SCENE RENDERING
// ============================================

function renderScenes() {
    const container = document.getElementById('scenes-container');
    if (!container) return;
    
    container.innerHTML = SCENES.map(scene => createSceneBlock(scene)).join('');
}

function createSceneBlock(scene) {
    const colorMap = {
        gray: { border: 'gray-600', header: 'gray-300', bg: 'gray-800' },
        yellow: { border: 'yellow-600', header: 'yellow-300', bg: 'yellow-900/20' },
        blue: { border: 'blue-600', header: 'blue-300', bg: 'blue-900/20' },
        cyan: { border: 'cyan-600', header: 'cyan-300', bg: 'cyan-900/20' },
        purple: { border: 'purple-600', header: 'purple-300', bg: 'purple-900/20' },
        orange: { border: 'orange-600', header: 'orange-300', bg: 'orange-900/20' },
        red: { border: 'red-600', header: 'red-300', bg: 'red-900/20' },
        green: { border: 'green-600', header: 'green-300', bg: 'green-900/20' }
    };
    
    const colors = colorMap[scene.color] || colorMap.gray;
    
    return `
        <div id="scene-${scene.id}" class="bg-gray-900/80 rounded-xl border-2 border-${colors.border} overflow-hidden">
            <!-- Scene Header -->
            <details open>
                <summary class="bg-${colors.bg} p-4 cursor-pointer flex justify-between items-center hover:bg-gray-700">
                    <h2 class="scene-title text-xl text-${colors.header}">
                        ${scene.emoji} ${scene.title}
                    </h2>
                    <span class="arrow text-xl">▶</span>
                </summary>
                
                <div class="p-4 space-y-4">
                    <!-- Oracle Quote -->
                    <div class="bg-gray-800 p-3 rounded-lg border-l-4 border-purple-500">
                        <p class="text-gray-300 italic">🧙‍♂️ ${scene.oracleQuote}</p>
                    </div>
                    
                    <!-- Description -->
                    <p class="text-gray-400">${scene.description}</p>
                    
                    <!-- Mirror Effects (if any) -->
                    ${scene.mirrorEffects ? `
                        <div class="bg-purple-900/30 p-3 rounded border border-purple-600">
                            <h4 class="text-purple-400 font-bold mb-2">🪞 Mirror Shows:</h4>
                            <ul class="text-sm space-y-1">
                                ${scene.mirrorEffects.map(effect => `<li>• ${effect}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    
                    <!-- Positions (Scene 2) -->
                    ${scene.positions ? `
                        <div class="bg-blue-900/30 p-3 rounded border border-blue-600">
                            <h4 class="text-blue-400 font-bold mb-2">📍 Required Positions:</h4>
                            <div class="grid md:grid-cols-2 gap-2 text-sm">
                                ${scene.positions.map(pos => `
                                    <div class="flex items-center gap-2 ${pos.required ? 'text-red-300' : 'text-gray-300'}">
                                        <span class="font-bold">${pos.node}:</span>
                                        <span>${pos.character}</span>
                                        <span class="text-gray-500">(${pos.role})</span>
                                        ${pos.required ? '<span class="text-red-400 text-xs">REQUIRED</span>' : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Checks -->
                    ${scene.checks && scene.checks.length > 0 ? `
                        <div class="space-y-3">
                            <h4 class="text-lg text-yellow-400">🎲 Required Checks:</h4>
                            ${scene.checks.map(check => createCheckBlock(check)).join('')}
                        </div>
                    ` : ''}
                    
                    <!-- Failure Points -->
                    ${scene.failurePoints && scene.failurePoints.length > 0 ? `
                        <div class="bg-red-900/30 p-3 rounded border border-red-600">
                            <h4 class="text-red-400 font-bold mb-2">⚠️ Failure Points:</h4>
                            ${scene.failurePoints.map(fp => `
                                <div class="mb-2">
                                    <div class="text-yellow-400 text-sm"><strong>Trigger:</strong> ${fp.trigger}</div>
                                    <div class="text-gray-300 text-sm"><strong>Effect:</strong> ${fp.effect}</div>
                                    <div class="text-red-300 text-sm"><strong>Consequence:</strong> ${fp.consequence}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    <!-- Branch Options -->
                    ${scene.branchOptions && scene.branchOptions.length > 0 ? `
                        <div class="space-y-3">
                            <h4 class="text-lg text-purple-400">🔀 Branch Options:</h4>
                            <div class="flex flex-wrap gap-2 mb-3">
                                ${scene.branchOptions.map(branch => `
                                    <button onclick="selectBranch(${scene.id}, '${branch.id}')" 
                                        class="px-3 py-2 bg-${branch.color}-700 hover:bg-${branch.color}-600 rounded text-sm transition"
                                        id="btn-${branch.id}">
                                        ${branch.name}
                                    </button>
                                `).join('')}
                            </div>
                            
                            <!-- Branch Details (hidden by default) -->
                            ${scene.branchOptions.map(branch => `
                                <div id="branch-${branch.id}" class="hidden bg-${branch.color}-900/30 p-3 rounded border border-${branch.color}-600">
                                    <h5 class="text-${branch.color}-400 font-bold mb-2">${branch.name}</h5>
                                    <ul class="text-sm space-y-1">
                                        ${branch.effects.map(effect => `<li>• ${effect}</li>`).join('')}
                                    </ul>
                                    ${branch.statChange ? `
                                        <button onclick="applyBranchEffects(${JSON.stringify(branch.statChange).replace(/"/g, "'")})" 
                                            class="mt-2 px-3 py-1 bg-${branch.color}-700 hover:bg-${branch.color}-600 rounded text-sm">
                                            Apply Effects
                                        </button>
                                    ` : ''}
                                    ${branch.flag ? `
                                        <button onclick="toggleFlag('${branch.flag}', true)" 
                                            class="mt-2 ml-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">
                                            Set Flag: ${branch.flag}
                                        </button>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    <!-- Catastrophe (Scene 3) -->
                    ${scene.catastrophe ? `
                        <div class="bg-red-900/50 p-4 rounded-lg border-2 border-red-500">
                            <h4 class="text-xl text-red-400 font-bold mb-2 pulse-warning">🔥 ${scene.catastrophe.name}</h4>
                            <p class="text-sm text-gray-300 mb-3"><strong>Trigger:</strong> ${scene.catastrophe.trigger}</p>
                            
                            <div class="bg-gray-900 p-3 rounded">
                                <p class="text-yellow-400 mb-2">Roll d6 for Sacrifice Target:</p>
                                <ol class="text-sm list-decimal list-inside space-y-1">
                                    ${scene.catastrophe.sacrificeTable.map((entry, i) => `
                                        <li><strong>${entry.target}:</strong> ${entry.effect}</li>
                                    `).join('')}
                                </ol>
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Overflow Table (Scene 4) -->
                    ${scene.overflowTable ? `
                        <div class="bg-yellow-900/30 p-3 rounded border border-yellow-600">
                            <h4 class="text-yellow-400 font-bold mb-2">🎲 Overflow Target (d6):</h4>
                            <div class="space-y-1 text-sm">
                                ${scene.overflowTable.map(entry => `
                                    <div><strong>${entry.roll}:</strong> ${entry.target} — ${entry.effect}</div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Combat in Shear (Scene 5) -->
                    ${scene.combatInShear ? `
                        <details class="bg-red-900/30 rounded border border-red-600">
                            <summary class="p-3 cursor-pointer text-red-400 font-bold">⚔️ Combat in Fractured Time</summary>
                            <div class="p-3 border-t border-red-700">
                                <ul class="text-sm space-y-1">
                                    ${scene.combatInShear.rules.map(rule => `<li>• ${rule}</li>`).join('')}
                                </ul>
                                <p class="mt-2 text-yellow-400 text-sm"><strong>Escape:</strong> ${scene.combatInShear.escape}</p>
                            </div>
                        </details>
                    ` : ''}
                    
                    <!-- Aftermath (Scene 6) -->
                    ${scene.aftermath ? `
                        <div class="grid md:grid-cols-2 gap-3">
                            <div class="bg-green-900/30 p-3 rounded border border-green-600">
                                <h5 class="text-green-400 font-bold">🟢 Best Case:</h5>
                                <ul class="text-sm mt-1">
                                    ${scene.aftermath.bestCase.map(item => `<li>• ${item}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="bg-red-900/30 p-3 rounded border border-red-600">
                                <h5 class="text-red-400 font-bold">🔴 Worst Case:</h5>
                                <ul class="text-sm mt-1">
                                    ${scene.aftermath.worstCase.map(item => `<li>• ${item}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Scene Complete Buttons -->
                    <div class="flex gap-2 pt-4 border-t border-gray-700">
                        <button onclick="completeScene(${scene.id}, true)" 
                            class="px-4 py-2 bg-green-700 hover:bg-green-600 rounded transition">
                            ✓ Scene Complete
                        </button>
                        <button onclick="completeScene(${scene.id}, false)" 
                            class="px-4 py-2 bg-red-700 hover:bg-red-600 rounded transition">
                            ✗ Scene Failed
                        </button>
                    </div>
                </div>
            </details>
        </div>
    `;
}

function createCheckBlock(check) {
    return `
        <div class="bg-gray-800 p-3 rounded border border-gray-600">
            <div class="flex flex-wrap justify-between items-start gap-2 mb-2">
                <div>
                    <span class="font-bold text-blue-300">${check.name}</span>
                    ${check.target ? `<span class="text-gray-400 text-sm"> (${check.target})</span>` : ''}
                    <span class="text-xs text-gray-500 ml-2">${check.type}</span>
                </div>
                <div class="flex gap-2">
                    <span class="roll-box text-green-400">${check.skill} DC ${check.dc}</span>
                    ${check.altSkill ? `<span class="roll-box text-yellow-400">or ${check.altSkill} DC ${check.altDc || check.dc}</span>` : ''}
                </div>
            </div>
            
            ${check.description ? `<p class="text-sm text-gray-400 mb-2">${check.description}</p>` : ''}
            
            <div class="grid md:grid-cols-2 gap-2 text-sm">
                ${check.passEffect ? `
                    <div class="bg-green-900/30 p-2 rounded">
                        <span class="text-green-400 font-bold">✅ Pass:</span>
                        <span class="text-gray-300"> ${check.passEffect}</span>
                    </div>
                ` : ''}
                ${check.failEffect ? `
                    <div class="bg-red-900/30 p-2 rounded">
                        <span class="text-red-400 font-bold">❌ Fail:</span>
                        <span class="text-gray-300"> ${check.failEffect}</span>
                    </div>
                ` : ''}
                ${check.partialEffect ? `
                    <div class="bg-yellow-900/30 p-2 rounded md:col-span-2">
                        <span class="text-yellow-400 font-bold">⚠️ Partial:</span>
                        <span class="text-gray-300"> ${check.partialEffect}</span>
                    </div>
                ` : ''}
                ${check.failConsequence ? `
                    <div class="bg-red-900/50 p-2 rounded md:col-span-2">
                        <span class="text-red-300 font-bold">💀 Consequence:</span>
                        <span class="text-gray-300"> ${check.failConsequence}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// ============================================
// BRANCH & STATE MANAGEMENT
// ============================================

function selectBranch(sceneId, branchId) {
    // Hide all branches for this scene
    const scene = SCENES.find(s => s.id === sceneId);
    if (scene && scene.branchOptions) {
        scene.branchOptions.forEach(branch => {
            const el = document.getElementById(`branch-${branch.id}`);
            if (el) el.classList.add('hidden');
        });
    }
    
    // Show selected branch
    const selectedBranch = document.getElementById(`branch-${branchId}`);
    if (selectedBranch) {
        selectedBranch.classList.remove('hidden');
        selectedBranch.style.animation = 'fadeIn 0.3s ease';
    }
}

function applyBranchEffects(changes) {
    // Parse if string
    if (typeof changes === 'string') {
        changes = JSON.parse(changes.replace(/'/g, '"'));
    }
    
    Object.entries(changes).forEach(([key, value]) => {
        if (key === 'timeline') {
            setTimeline(value);
        } else if (typeof value === 'number') {
            modifyStat(key, value);
        }
    });
}

function completeScene(sceneId, success) {
    const sceneEl = document.getElementById(`scene-${sceneId}`);
    if (!sceneEl) return;
    
    if (success) {
        state.completedScenes.push({ id: sceneId, success: true });
        sceneEl.classList.add('success-glow');
        sceneEl.style.borderColor = '#22c55e';
    } else {
        state.completedScenes.push({ id: sceneId, success: false });
        sceneEl.classList.add('danger-glow');
        sceneEl.style.borderColor = '#ef4444';
    }
    
    // Update phase
    state.currentPhase = `S${sceneId + 1}`;
    updateAllDisplays();
    
    // Scroll to next scene
    const nextScene = document.getElementById(`scene-${sceneId + 1}`);
    if (nextScene) {
        setTimeout(() => nextScene.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
    }
}

// ============================================
// STAT MANAGEMENT
// ============================================

function modifyStat(stat, amount) {
    if (state[stat] !== undefined && typeof state[stat] === 'number') {
        state[stat] += amount;
        if (state[stat] < 0) state[stat] = 0;
        if (stat === 'circleIntegrity' && state[stat] > 10) state[stat] = 10;
        
        updateAllDisplays();
        
        // Visual feedback
        const el = document.getElementById(stat);
        if (el) {
            el.style.transform = 'scale(1.3)';
            el.style.color = amount > 0 ? '#22c55e' : '#ef4444';
            setTimeout(() => {
                el.style.transform = 'scale(1)';
                updateAllDisplays();
            }, 300);
        }
    }
}

function setTimeline(status) {
    state.timeline = status;
    updateAllDisplays();
}

function toggleFlag(flagName, value) {
    if (value) {
        state.flags.add(flagName);
    } else {
        state.flags.delete(flagName);
    }
    updateFlagsDisplay();
}

function updateFlagsDisplay() {
    const container = document.getElementById('activeFlags');
    if (!container) return;
    
    const flagColors = {
        'impostor-present': 'bg-red-700',
        'dan-unchecked': 'bg-yellow-700',
        'archie-wrong-position': 'bg-orange-700',
        'fire-temptation': 'bg-red-600',
        'fire-catastrophe': 'bg-red-900',
        'greent-present': 'bg-green-700',
        'greent-absent': 'bg-yellow-700',
        'timeline-shear': 'bg-red-800',
        'waluigi-thread': 'bg-purple-700',
        'unrecognized': 'bg-gray-700',
        'reflection-curse': 'bg-purple-600'
    };
    
    container.innerHTML = Array.from(state.flags).map(flag => 
        `<span class="${flagColors[flag] || 'bg-gray-600'} px-2 py-1 rounded">🚩 ${flag}</span>`
    ).join('');
}

function updateRequirement(req, met) {
    const el = document.getElementById(`req-${req}`);
    if (el) {
        el.textContent = met ? '✅' : '❌';
        el.className = met ? 'text-green-400' : 'text-red-400';
    }
}

function updateAllDisplays() {
    // Update stat displays
    document.getElementById('circleIntegrity').textContent = state.circleIntegrity;
    document.getElementById('circleIntegrity').className = state.circleIntegrity <= 2 ? 'text-xl font-bold text-red-400' : 'text-xl font-bold';
    
    document.getElementById('safeguards').textContent = state.safeguards;
    document.getElementById('safeguards').className = state.safeguards <= 1 ? 'text-xl font-bold text-red-400' : 'text-xl font-bold';
    
    document.getElementById('ritualStress').textContent = state.ritualStress;
    document.getElementById('ritualStress').className = state.ritualStress >= 3 ? 'text-xl font-bold text-red-400' : 'text-xl font-bold';
    
    document.getElementById('timeline').textContent = state.timeline;
    document.getElementById('timeline').className = state.timeline !== 'STABLE' ? 'text-xl font-bold text-red-400' : 'text-xl font-bold text-green-400';
    
    document.getElementById('currentPhase').textContent = state.currentPhase;
    
    updateFlagsDisplay();
    updateGroupSummaries();
}

// ============================================
// TAB NAVIGATION
// ============================================

function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(`tab-${tabName}`);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('tab-active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('tab-active');
        }
    });
}

function scrollToScene(sceneId) {
    const scene = document.getElementById(`scene-${sceneId}`);
    if (scene) {
        scene.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Open the details if closed
        const details = scene.querySelector('details');
        if (details) details.open = true;
    }
}

// ============================================
// DELAY HANDLERS
// ============================================

function handleDelay(type, checked) {
    if (!checked) return;
    
    switch(type) {
        case 'wario':
            // Effects handled by buttons inside
            break;
        case 'groupA':
            // Multiple people late
            modifyStat('ritualStress', 1);
            break;
        case 'waluigi':
            toggleFlag('waluigi-thread', true);
            break;
        case 'remi-absent':
            updateCharacterStatus('remi', 'absent');
            break;
    }
}

// ============================================
// SAVE / LOAD / RESET
// ============================================

function saveState() {
    const saveData = {
        ...state,
        flags: Array.from(state.flags)
    };
    localStorage.setItem('raventree-ritual-state', JSON.stringify(saveData));
    
    // Visual feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Saved!';
    btn.classList.add('bg-green-600');
    setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('bg-green-600');
    }, 1500);
}

function loadState() {
    const saved = localStorage.getItem('raventree-ritual-state');
    if (saved) {
        const loaded = JSON.parse(saved);
        state = {
            ...loaded,
            flags: new Set(loaded.flags || []),
            players: loaded.players || state.players
        };
        renderCharacterCards();
        updateAllDisplays();
        restorePlayerDisplays();
        
        // Visual feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Loaded!';
        btn.classList.add('bg-green-600');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('bg-green-600');
        }, 1500);
    } else {
        alert('No saved state found.');
    }
}

function restorePlayerDisplays() {
    // Restore Archie displays
    if (state.players.archie.prep !== null) {
        setPlayerCheck('archie', 'prep', state.players.archie.prep);
    }
    if (state.players.archie.mainCheck) {
        const el = document.getElementById('archie-main-status');
        if (el) {
            el.textContent = state.players.archie.mainCheck === 'success' ? '✅ SUCCESS' : 
                             state.players.archie.mainCheck === 'partial' ? '⚠️ PARTIAL' : '❌ FAILED';
        }
        if (state.players.archie.mainCheck === 'fail') {
            document.getElementById('archie-fire-check')?.classList.remove('hidden');
        }
    }
    Object.entries(state.players.archie.sustain).forEach(([scene, val]) => {
        if (val !== null) {
            const el = document.getElementById(`archie-sustain-${scene}`);
            if (el) {
                el.textContent = val ? '✅' : '❌';
                el.className = val ? 'text-green-400' : 'text-red-400';
            }
        }
    });
    
    // Restore Markop displays
    if (state.players.markop.prep !== null) {
        setPlayerCheck('markop', 'prep', state.players.markop.prep);
    }
    if (state.players.markop.position !== null) {
        const el = document.getElementById('markop-pos-status');
        if (el) {
            el.textContent = state.players.markop.position ? '✅ GOOD' : '❌ BLIND SPOT';
            el.className = state.players.markop.position ? 'text-green-400' : 'text-red-400';
        }
    }
    if (state.players.markop.defense !== null) {
        const el = document.getElementById('markop-def-status');
        if (el) {
            const type = state.players.markop.defenseType?.toUpperCase() || '';
            el.textContent = state.players.markop.defense ? `✅ ${type}` : `❌ ${type}`;
            el.className = state.players.markop.defense ? 'text-green-400' : 'text-red-400';
        }
    }
    
    // Restore Waluigi displays
    if (state.players.waluigi.prep !== null) {
        setPlayerCheck('waluigi', 'prep', state.players.waluigi.prep);
    }
    Object.entries(state.players.waluigi.stillness).forEach(([scene, val]) => {
        if (val !== null) {
            const el = document.getElementById(`waluigi-still-${scene}`);
            if (el) {
                el.textContent = val ? '😐 Still' : '🟣 WAH!';
                el.className = val ? 'text-green-400' : 'text-purple-400';
            }
        }
    });
    updateWaluigiStatus();
    
    // Restore Bowser displays
    if (state.players.bowser.prep !== null) {
        setPlayerCheck('bowser', 'prep', state.players.bowser.prep);
    }
    if (state.players.bowser.grounding !== null) {
        const el = document.getElementById('bowser-ground-status');
        if (el) {
            el.textContent = state.players.bowser.grounding ? '✅ GROUNDED' : '❌ FLOATING';
            el.className = state.players.bowser.grounding ? 'text-green-400' : 'text-red-400';
        }
    }
    if (state.players.bowser.mirror !== null) {
        const el = document.getElementById('bowser-mirror-status');
        if (el) {
            el.textContent = state.players.bowser.mirror ? '✅ REJECTED' : '⚠️ HESITATED';
            el.className = state.players.bowser.mirror ? 'text-green-400' : 'text-yellow-400';
        }
    }
    Object.entries(state.players.bowser.sustain).forEach(([scene, val]) => {
        if (val !== null) {
            const el = document.getElementById(`bowser-sustain-${scene}`);
            if (el) {
                el.textContent = val ? '✅' : '❌';
                el.className = val ? 'text-green-400' : 'text-red-400';
            }
        }
    });
    
    updatePlayerStatusCards();
}

function resetAll() {
    if (!confirm('Reset all progress? This cannot be undone.')) return;
    
    localStorage.removeItem('raventree-ritual-state');
    
    state = {
        circleIntegrity: 5,
        safeguards: 3,
        ritualStress: 0,
        timeline: 'STABLE',
        currentPhase: 'PRE',
        witnessCount: 0,
        characters: {},
        flags: new Set(),
        completedScenes: [],
        notes: [],
        players: {
            archie: {
                prep: null,
                mainCheck: null,
                fireResist: null,
                sustain: { 4: null, 5: null, 6: null },
                bonus: 0
            },
            markop: {
                prep: null,
                position: null,
                defense: null,
                defenseType: null
            },
            waluigi: {
                prep: null,
                stillness: { 3: null, 4: null, 5: null },
                weirdnessCount: 0,
                surgeUsed: false
            },
            bowser: {
                prep: null,
                grounding: null,
                mirror: null,
                sustain: { 3: null, 4: null, 5: null, 6: null },
                hesitated: false
            }
        }
    };
    
    initializeCharacters();
    renderCharacterCards();
    renderScenes();
    updateAllDisplays();
    
    // Reset all checkboxes
    document.querySelectorAll('.checkbox-custom').forEach(cb => {
        if (!cb.disabled) cb.checked = false;
    });
    
    // Reset requirements
    ['impostor', 'greent', 'positions', 'witnesses'].forEach(req => {
        updateRequirement(req, false);
    });
    updateRequirement('nofire', true);
    
    // Reset player status displays
    ['archie', 'markop', 'waluigi', 'bowser'].forEach(player => {
        ['prep', 'main', 'sustain', 'pos', 'def', 'still', 'weird', 'ground', 'mirror'].forEach(check => {
            const el = document.getElementById(`${player}-${check}-status`);
            if (el) {
                el.textContent = '—';
                el.className = '';
            }
        });
    });
    
    // Reset sustain displays
    [4, 5, 6].forEach(scene => {
        const archieEl = document.getElementById(`archie-sustain-${scene}`);
        if (archieEl) { archieEl.textContent = '—'; archieEl.className = ''; }
    });
    [3, 4, 5, 6].forEach(scene => {
        const bowserEl = document.getElementById(`bowser-sustain-${scene}`);
        if (bowserEl) { bowserEl.textContent = '—'; bowserEl.className = ''; }
    });
    [3, 4, 5].forEach(scene => {
        const waluigiEl = document.getElementById(`waluigi-still-${scene}`);
        if (waluigiEl) { waluigiEl.textContent = '—'; waluigiEl.className = ''; }
    });
    
    // Hide conditional elements
    const fireCheck = document.getElementById('archie-fire-check');
    if (fireCheck) fireCheck.classList.add('hidden');
    
    const sacrificeTable = document.getElementById('fire-sacrifice-table');
    if (sacrificeTable) sacrificeTable.classList.add('hidden');
    
    const weirdResult = document.getElementById('weirdness-result');
    if (weirdResult) weirdResult.classList.add('hidden');
    
    // Reset card styles
    ['archie', 'markop', 'waluigi', 'bowser'].forEach(player => {
        const card = document.getElementById(`${player}-status-card`);
        if (card) {
            card.style.background = '';
            card.style.borderColor = '';
            card.style.boxShadow = '';
            card.style.opacity = '';
        }
    });
    
    showTab('overview');
}

// Add animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// ============================================
// PLAYER ROLE FUNCTIONS
// ============================================

// Generic player check setter
function setPlayerCheck(player, checkType, passed) {
    state.players[player][checkType] = passed;
    
    const statusEl = document.getElementById(`${player}-${checkType}-status`);
    if (statusEl) {
        statusEl.textContent = passed ? '✅' : '❌';
        statusEl.className = passed ? 'text-green-400' : 'text-red-400';
    }
    
    // Apply bonuses/penalties
    if (player === 'archie' && checkType === 'prep' && passed) {
        state.players.archie.bonus = 2;
    }
    
    updatePlayerStatusCards();
}

// ============================================
// ARCHIE FUNCTIONS
// ============================================

function archieIceResult(result) {
    state.players.archie.mainCheck = result;
    
    const statusEl = document.getElementById('archie-main-status');
    
    switch(result) {
        case 'success':
            statusEl.textContent = '✅ SUCCESS';
            statusEl.className = 'text-green-400';
            modifyStat('circleIntegrity', 1);
            break;
        case 'partial':
            statusEl.textContent = '⚠️ PARTIAL';
            statusEl.className = 'text-yellow-400';
            modifyStat('circleIntegrity', -1);
            break;
        case 'fail':
            statusEl.textContent = '❌ FAILED';
            statusEl.className = 'text-red-400';
            // Show fire temptation check
            document.getElementById('archie-fire-check').classList.remove('hidden');
            toggleFlag('fire-temptation', true);
            break;
    }
    
    updatePlayerStatusCards();
}

function archieFireResult(result) {
    state.players.archie.fireResist = result;
    
    if (result === 'resist') {
        modifyStat('circleIntegrity', -1);
        document.getElementById('archie-fire-check').style.borderColor = '#22c55e';
        toggleFlag('fire-temptation', false);
    } else {
        // CATASTROPHE
        document.getElementById('fire-sacrifice-table').classList.remove('hidden');
        toggleFlag('fire-catastrophe', true);
        setTimeline('FRACTURED');
        modifyStat('circleIntegrity', -3);
        
        // Update status
        const statusEl = document.getElementById('archie-main-status');
        statusEl.textContent = '🔥 CATASTROPHE';
        statusEl.className = 'text-red-400 pulse-warning';
    }
    
    updatePlayerStatusCards();
}

function archieSustain(scene, passed) {
    state.players.archie.sustain[scene] = passed;
    
    const el = document.getElementById(`archie-sustain-${scene}`);
    el.textContent = passed ? '✅' : '❌';
    el.className = passed ? 'text-green-400' : 'text-red-400';
    
    if (!passed) {
        modifyStat('circleIntegrity', -1);
        modifyStat('ritualStress', 1);
    }
    
    updateArchiesSustainStatus();
    updatePlayerStatusCards();
}

function updateArchiesSustainStatus() {
    const sustain = state.players.archie.sustain;
    const passed = Object.values(sustain).filter(v => v === true).length;
    const failed = Object.values(sustain).filter(v => v === false).length;
    const total = passed + failed;
    
    const el = document.getElementById('archie-sustain-status');
    if (el && total > 0) {
        el.textContent = `${passed}/${total}`;
        el.className = failed > 1 ? 'text-red-400' : failed > 0 ? 'text-yellow-400' : 'text-green-400';
    }
}

// ============================================
// MARKOP FUNCTIONS
// ============================================

function markopPositionResult(good) {
    state.players.markop.position = good;
    
    const statusEl = document.getElementById('markop-pos-status');
    statusEl.textContent = good ? '✅ GOOD' : '❌ BLIND SPOT';
    statusEl.className = good ? 'text-green-400' : 'text-red-400';
    
    if (!good) {
        toggleFlag('markop-blind-spot', true);
    }
    
    updatePlayerStatusCards();
}

function markopDefend(type, success) {
    state.players.markop.defense = success;
    state.players.markop.defenseType = type;
    
    const statusEl = document.getElementById('markop-def-status');
    
    if (success) {
        statusEl.textContent = `✅ ${type.toUpperCase()}`;
        statusEl.className = 'text-green-400';
        
        if (type === 'intimidate') {
            toggleFlag('legion-hesitating', true);
        }
    } else {
        statusEl.textContent = `❌ ${type.toUpperCase()}`;
        statusEl.className = 'text-red-400';
        
        if (type === 'block') {
            modifyStat('safeguards', -1);
            toggleFlag('combat-started', true);
        }
        
        // Check if this causes early interruption
        if (!success && state.currentPhase !== 'S6') {
            toggleFlag('early-interruption-risk', true);
        }
    }
    
    updatePlayerStatusCards();
}

// ============================================
// WALUIGI FUNCTIONS
// ============================================

function waluigiStillness(scene, still) {
    state.players.waluigi.stillness[scene] = still;
    
    const el = document.getElementById(`waluigi-still-${scene}`);
    
    if (still) {
        el.textContent = '😐 Still';
        el.className = 'text-green-400';
        modifyStat('circleIntegrity', 1);
    } else {
        el.textContent = '🟣 WAH!';
        el.className = 'text-purple-400';
        modifyStat('circleIntegrity', -1);
        state.players.waluigi.weirdnessCount++;
        
        // Prompt for weirdness roll
        document.getElementById('weirdness-result').classList.remove('hidden');
        document.getElementById('weirdness-result').textContent = '⬆️ Roll on Weirdness Table!';
        document.getElementById('weirdness-result').className = 'mt-2 text-center text-lg text-purple-400';
    }
    
    updateWaluigiStatus();
    updatePlayerStatusCards();
}

function updateWaluigiStatus() {
    const stillness = state.players.waluigi.stillness;
    const still = Object.values(stillness).filter(v => v === true).length;
    const wah = Object.values(stillness).filter(v => v === false).length;
    const total = still + wah;
    
    const el = document.getElementById('waluigi-still-status');
    if (el && total > 0) {
        el.textContent = `${still}/${total}`;
        el.className = wah > 1 ? 'text-purple-400' : wah > 0 ? 'text-yellow-400' : 'text-green-400';
    }
    
    const weirdEl = document.getElementById('waluigi-weird-status');
    if (weirdEl) {
        weirdEl.textContent = state.players.waluigi.weirdnessCount;
        weirdEl.className = state.players.waluigi.weirdnessCount > 0 ? 'text-purple-400' : '';
    }
}

function rollWeirdness() {
    const roll = Math.floor(Math.random() * 6) + 1;
    const results = [
        '1️⃣ Reflection stays behind in mirror (FUTURE PROBLEM)',
        '2️⃣ Impossible door appears somewhere (MYSTERY)',
        '3️⃣ "WAH" echoes for hours (ANNOYING)',
        '4️⃣ Everyone shown as Waluigi in mirrors (DISTURBING)',
        '5️⃣ Waluigi gains prophecy (BOON?)',
        '6️⃣ Nothing happens (SAFE)'
    ];
    
    const resultEl = document.getElementById('weirdness-result');
    resultEl.textContent = results[roll - 1];
    resultEl.classList.remove('hidden');
    
    if (roll <= 2) {
        resultEl.className = 'mt-2 text-center text-lg text-yellow-400';
        toggleFlag(`waluigi-weird-${roll}`, true);
    } else if (roll === 5) {
        resultEl.className = 'mt-2 text-center text-lg text-green-400';
        toggleFlag('waluigi-prophecy', true);
    } else if (roll === 6) {
        resultEl.className = 'mt-2 text-center text-lg text-green-400';
    } else {
        resultEl.className = 'mt-2 text-center text-lg text-purple-400';
    }
}

function waluigiSurge(controlled) {
    state.players.waluigi.surgeUsed = true;
    
    if (controlled) {
        modifyStat('circleIntegrity', 3);
        toggleFlag('waluigi-exhausted', true);
        
        document.getElementById('waluigi-status-card').style.opacity = '0.6';
    } else {
        modifyStat('circleIntegrity', -2);
        state.players.waluigi.weirdnessCount += 2;
        toggleFlag('waluigi-surge-uncontrolled', true);
        
        // Roll twice
        rollWeirdness();
        setTimeout(rollWeirdness, 1000);
    }
    
    updateWaluigiStatus();
    updatePlayerStatusCards();
}

// ============================================
// BOWSER FUNCTIONS
// ============================================

function bowserGrounding(scene, success) {
    if (scene === 'scene2') {
        state.players.bowser.grounding = success;
    }
    
    const statusEl = document.getElementById('bowser-ground-status');
    
    if (success) {
        statusEl.textContent = '✅ GROUNDED';
        statusEl.className = 'text-green-400';
        modifyStat('circleIntegrity', 1);
    } else {
        statusEl.textContent = '❌ FLOATING';
        statusEl.className = 'text-red-400';
        modifyStat('circleIntegrity', -1);
        toggleFlag('circle-floating', true);
    }
    
    updatePlayerStatusCards();
}

function bowserMirror(rejected) {
    state.players.bowser.mirror = rejected;
    
    const statusEl = document.getElementById('bowser-mirror-status');
    
    if (rejected) {
        statusEl.textContent = '✅ REJECTED';
        statusEl.className = 'text-green-400';
        modifyStat('circleIntegrity', 2);
        toggleFlag('bowser-resolve', true);
    } else {
        statusEl.textContent = '⚠️ HESITATED';
        statusEl.className = 'text-yellow-400';
        modifyStat('circleIntegrity', -1);
        state.players.bowser.hesitated = true;
        toggleFlag('bowser-hesitated', true);
    }
    
    updatePlayerStatusCards();
}

function bowserSustain(scene, passed) {
    state.players.bowser.sustain[scene] = passed;
    
    const el = document.getElementById(`bowser-sustain-${scene}`);
    el.textContent = passed ? '✅' : '❌';
    el.className = passed ? 'text-green-400' : 'text-red-400';
    
    if (!passed) {
        modifyStat('ritualStress', 1);
        // Others' checks become harder
        toggleFlag('grounding-unstable', true);
    }
    
    updatePlayerStatusCards();
}

function bowserHoldLine(success) {
    if (success) {
        state.circleIntegrity = 3;
        toggleFlag('bowser-unshakeable', true);
        
        document.getElementById('bowser-status-card').style.boxShadow = '0 0 20px rgba(234, 179, 8, 0.5)';
    } else {
        modifyStat('circleIntegrity', -state.circleIntegrity); // Drop to 0
        toggleFlag('circle-collapsed', true);
        setTimeline('SHEARED');
    }
    
    updateAllDisplays();
    updatePlayerStatusCards();
}

// ============================================
// PLAYER STATUS CARD UPDATES
// ============================================

function updatePlayerStatusCards() {
    // Archie
    const archieCard = document.getElementById('archie-status-card');
    if (archieCard) {
        if (state.players.archie.fireResist === 'cast') {
            archieCard.style.background = 'rgba(239, 68, 68, 0.3)';
            archieCard.style.borderColor = '#ef4444';
        } else if (state.players.archie.mainCheck === 'success') {
            archieCard.style.background = 'rgba(34, 197, 94, 0.2)';
        }
    }
    
    // Markop
    const markopCard = document.getElementById('markop-status-card');
    if (markopCard) {
        if (state.players.markop.defense === true) {
            markopCard.style.background = 'rgba(34, 197, 94, 0.2)';
        } else if (state.players.markop.defense === false) {
            markopCard.style.background = 'rgba(239, 68, 68, 0.2)';
        }
    }
    
    // Waluigi
    const waluigiCard = document.getElementById('waluigi-status-card');
    if (waluigiCard && state.players.waluigi.weirdnessCount > 2) {
        waluigiCard.style.background = 'rgba(147, 51, 234, 0.3)';
    }
    
    // Bowser
    const bowserCard = document.getElementById('bowser-status-card');
    if (bowserCard) {
        if (state.players.bowser.mirror === true) {
            bowserCard.style.background = 'rgba(34, 197, 94, 0.2)';
        } else if (state.players.bowser.hesitated) {
            bowserCard.style.background = 'rgba(234, 179, 8, 0.2)';
        }
    }
}
