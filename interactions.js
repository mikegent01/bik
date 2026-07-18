// ==================== INTERACTION HANDLERS ====================

// Fork timing for chromatic tuning
let lastForkStrike = 0;
let forkStrikeTimeout = null;

// Logging
function log(message, type = 'info') {
    const logEntries = document.getElementById('log-entries');
    if (!logEntries) return;
    
    const entry = document.createElement('div');
    const time = new Date().toLocaleTimeString();
    const color = type === 'success' ? 'text-green-400' : 
                  type === 'warning' ? 'text-amber-400' : 
                  type === 'error' ? 'text-red-400' :
                  type === 'ritual' ? 'text-purple-400' : 
                  type === 'stabilize' ? 'text-cyan-400' : 'text-gray-400';
    
    entry.innerHTML = `<span class="text-gray-600">[${time}]</span> <span class="${color}">${message}</span>`;
    entry.style.animation = 'fadeSlideIn 0.3s ease-out';
    logEntries.insertBefore(entry, logEntries.firstChild);
    
    if (logEntries.children.length > 20) {
        logEntries.removeChild(logEntries.lastChild);
    }
}

// Show lore in panel
function showLore(title, content) {
    document.getElementById('component-title').textContent = title;
    document.getElementById('lore-content').innerHTML = content;
}

// Update status indicators
function updateStatus() {
    const candleCount = document.getElementById('candle-count');
    if (candleCount) candleCount.textContent = ritual.candlesLit.length;
    
    const statusMap = {
        'veins-indicator': ritual.veinsActive,
        'fork-indicator': ritual.forkStruck,
        'mirror-indicator': ritual.mirrorAwakened,
        'ritual-indicator': ritual.ritualComplete
    };
    
    Object.entries(statusMap).forEach(([id, active]) => {
        const el = document.getElementById(id);
        if (el) {
            el.className = 'w-2 h-2 rounded-full ' + 
                (active ? 'bg-green-500' : 'bg-gray-600');
        }
    });
    
    // Update candle indicator
    const candleIndicator = document.getElementById('candle-indicator');
    if (candleIndicator) {
        candleIndicator.className = 'w-2 h-2 rounded-full ' + 
            (ritual.candlesLit.length === 12 ? 'bg-green-500' : 
             ritual.candlesLit.length > 0 ? 'bg-amber-500' : 'bg-gray-600');
    }
    
    // Update bell indicator
    const bellIndicator = document.getElementById('bell-indicator');
    if (bellIndicator) {
        const bellClass = ritual.bellRings >= 3 ? 'bg-red-500' :
                         ritual.bellRings > 0 ? 'bg-cyan-500' : 'bg-gray-600';
        bellIndicator.className = 'w-2 h-2 rounded-full ' + bellClass;
    }
    
    // Update tuning indicator
    const tuningIndicator = document.getElementById('tuning-indicator');
    if (tuningIndicator) {
        if (ritual.chromaticBasis === 'purple') {
            tuningIndicator.className = 'w-2 h-2 rounded-full bg-purple-500';
        } else if (ritual.chromaticBasis === 'orange') {
            tuningIndicator.className = 'w-2 h-2 rounded-full bg-orange-500';
        } else {
            tuningIndicator.className = 'w-2 h-2 rounded-full bg-gray-600';
        }
    }
}

// Show contextual hint
function showHint() {
    const hint = ritual.getContextualHint();
    if (!hint) return;
    
    const loreContent = document.getElementById('lore-content');
    const existing = loreContent.querySelector('.ritual-hint');
    if (existing) existing.remove();
    
    const hintDiv = document.createElement('div');
    hintDiv.className = `ritual-hint ${hint.type === 'warning' ? 'warning' : hint.type === 'ready' ? 'success' : ''}`;
    hintDiv.innerHTML = `<p class="text-sm italic">${hint.text}</p>`;
    loreContent.appendChild(hintDiv);
}

// ==================== COMPONENT INTERACTIONS ====================

// Activate grounding veins
function activateVeins() {
    audio.init();
    audio.playVeinPulse();
    
    ritual.veinsActive = !ritual.veinsActive;
    ritual.updatePhase();
    
    if (ritual.veinsActive) {
        log('✓ Grounding veins activated', 'success');
        showLore('Grounding Veins — ACTIVE', `
            <p class="text-cyan-300">The veins pulse with stabilizing energy.</p>
            <p class="mt-2">Stray energies now slide off instead of pooling. The geometry breathes easier.</p>
            <p class="mt-2 text-gray-400">The floating feet hum louder, compensating for a world that can't sit still.</p>
        `);
    } else {
        log('Grounding veins deactivated', 'warning');
        showLore(lore.veins.title, lore.veins.content);
    }
    
    updateStatus();
    showHint();
    renderTable();
}

// Strike resonance fork - now with chromatic tuning
function strikeFork() {
    audio.init();
    
    const now = Date.now();
    const timeSinceLastStrike = now - lastForkStrike;
    lastForkStrike = now;
    
    // Determine strike type based on timing
    const isQuickStrike = timeSinceLastStrike < 800 && timeSinceLastStrike > 50;
    
    // Clear any pending tuning decision
    if (forkStrikeTimeout) {
        clearTimeout(forkStrikeTimeout);
    }
    
    // If fork already struck and tuned, just resonate
    if (ritual.forkStruck && ritual.chromaticBasis) {
        audio.playForkHum();
        const basisColor = ritual.chromaticBasis === 'purple' ? 'text-purple-400' : 'text-orange-400';
        log(`Fork resonates in ${ritual.chromaticBasis} basis`, 'ritual');
        showLore(`Resonance Fork — ${ritual.chromaticBasis.toUpperCase()} TUNED`, `
            <p class="${basisColor}">The fork hums with ${ritual.chromaticBasis} resonance.</p>
            <p class="mt-2">Chromatic basis locked: ${ritual.chromaticBasis === 'purple' ? 'Reflection spaces' : 'Transformation domains'}</p>
            <p class="mt-2 text-green-400">Oracle proximity: VERIFIED</p>
        `);
        ritual.forkResonating = true;
        setTimeout(() => {
            ritual.forkResonating = false;
            renderTable();
        }, 2000);
        renderTable();
        return;
    }
    
    // First or second strike for tuning
    if (!ritual.forkStruck) {
        if (isQuickStrike) {
            // Quick double-strike = purple
            audio.playForkHum();
            audio.playPhaseLock();
            ritual.forkStruck = true;
            ritual.oracleProximityVerified = true;
            ritual.forkResonating = true;
            ritual.tuneFork('quick');
            ritual.updatePhase();
            
            log('✓ Fork struck twice quickly — PURPLE basis locked', 'success');
            log('Chromatic tuning: Reflection spaces', 'ritual');
            
            showLore('Resonance Fork — PURPLE TUNED', `
                <p class="text-purple-400">Quick double-strike detected.</p>
                <p class="mt-2">The fork resonates with <span class="text-purple-300">compounded reflection spaces</span>.</p>
                <p class="mt-2">This basis aligns with mirror-space stabilization, delayed causality, and self-observation.</p>
                <p class="mt-2 text-green-400">Oracle proximity: VERIFIED</p>
                <p class="mt-2 text-gray-400">The mirror will open to reflection domains.</p>
            `);
            
            setTimeout(() => {
                ritual.forkResonating = false;
                renderTable();
            }, 3000);
            
        } else {
            // First deliberate strike - wait to see if another comes
            audio.playNeedleClick();
            log('Fork struck... awaiting tuning pattern', 'info');
            
            showLore('Resonance Fork — AWAITING PATTERN', `
                <p>The fork vibrates, awaiting your intent.</p>
                <p class="mt-2 text-purple-400">Strike again quickly → Purple (reflection)</p>
                <p class="mt-2 text-orange-400">Wait and let it settle → Orange (transformation)</p>
                <p class="mt-2 text-gray-400">The chromatic basis determines where the mirror looks.</p>
            `);
            
            // If no second strike within 1.5s, default to orange
            forkStrikeTimeout = setTimeout(() => {
                if (!ritual.forkStruck) {
                    audio.playForkHum();
                    ritual.forkStruck = true;
                    ritual.oracleProximityVerified = true;
                    ritual.forkResonating = true;
                    ritual.tuneFork('deliberate');
                    ritual.updatePhase();
                    
                    log('✓ Deliberate strike settled — ORANGE basis locked', 'success');
                    log('Chromatic tuning: Transformation domains', 'ritual');
                    
                    showLore('Resonance Fork — ORANGE TUNED', `
                        <p class="text-orange-400">Deliberate single strike detected.</p>
                        <p class="mt-2">The fork resonates with <span class="text-orange-300">active transformation domains</span>.</p>
                        <p class="mt-2">This basis aligns with fey realms, spore networks, and places where identity is negotiable.</p>
                        <p class="mt-2 text-green-400">Oracle proximity: VERIFIED</p>
                        <p class="mt-2 text-gray-400">The mirror will open to transformation domains.</p>
                    `);
                    
                    setTimeout(() => {
                        ritual.forkResonating = false;
                        renderTable();
                    }, 3000);
                    
                    updateStatus();
                    showHint();
                    renderTable();
                }
            }, 1500);
        }
    }
    
    updateStatus();
    showHint();
    renderTable();
}

// Light a candle
function lightCandle(num) {
    audio.init();
    
    if (ritual.candlesLit.includes(num)) {
        log(`Candle ${num} already burns`, 'info');
        return;
    }
    
    // Check if this is an acceptable candle
    const acceptable = ritual.getAcceptableCandles();
    const isAcceptable = acceptable.includes(num);
    const isExactlyCorrect = ritual.isCorrectCandle(num);
    
    if (!isAcceptable) {
        // This is a genuine sequence violation
        ritual.sequenceErrors++;
        audio.playCopperTick();
        
        // Check if bell stabilization can help
        if (ritual.stabilizationCharges > 0) {
            ritual.stabilizationCharges--;
            ritual.sequenceErrors = Math.max(0, ritual.sequenceErrors - 1);
            log(`Sequence bent... bell stabilization absorbed the error`, 'stabilize');
            audio.playWhisper();
        } else if (ritual.sequenceErrors >= ritual.maxErrors) {
            log(`⚠ SEQUENCE VIOLATION — inner ring sheared`, 'error');
            setTimeout(() => {
                triggerCollapse('Cut the center before defining the edges. The inner ring cannot stabilize.');
            }, 500);
            return;
        }
        
        const remaining = ritual.maxErrors - ritual.sequenceErrors;
        log(`⚠ Wrong sequence! The copper tongue resists. (${remaining} error${remaining > 1 ? 's' : ''} remaining)`, 'warning');
        
        const bellHint = ritual.bellRings < 3 ? 
            `<p class="mt-2 text-cyan-400">The bell can stabilize the geometry and forgive errors.</p>` : '';
        
        showLore('Candle Sequencer — RESISTANCE', `
            <p class="text-amber-400">The copper tongue resists your touch.</p>
            <p class="mt-2">The sequence demands edges before center, opposition before resolution.</p>
            <p class="mt-2">Acceptable candles: <span class="text-cyan-300">${acceptable.join(' or ')}</span></p>
            <p class="mt-2 text-red-400">Errors remaining: ${remaining}</p>
            ${bellHint}
        `);
        audio.playWhisper();
        renderTable();
        return;
    }
    
    // Light the candle
    ritual.candlesLit.push(num);
    audio.playCandleLight();
    setTimeout(() => audio.playCopperTick(), 200);
    
    // Slightly increase entropy with each candle (natural ritual buildup)
    ritual.entropyLevel = Math.min(100, ritual.entropyLevel + 3);
    ritual.shearLevel = Math.min(1, ritual.shearLevel + 0.02);
    
    if (!isExactlyCorrect) {
        log(`Candle ${num} lit (pair order swapped, but acceptable)`, 'success');
    } else {
        log(`✓ Candle ${num} lit (${ritual.candlesLit.length}/12)`, 'success');
    }
    
    // Check for completion
    if (ritual.candlesLit.length === 12) {
        ritual.filamentsActive = true;
        ritual.updatePhase();
        audio.playSequenceComplete();
        log('★ All candles lit — rings phase-locked — filaments active', 'ritual');
        
        const basisNote = ritual.chromaticBasis ? 
            `<p class="mt-2 text-${ritual.chromaticBasis === 'purple' ? 'purple' : 'orange'}-400">Chromatic basis: ${ritual.chromaticBasis}</p>` : '';
        
        showLore('Candle Sequence — COMPLETE', `
            <p class="text-green-400">All twelve candles burn in perfect opposition.</p>
            <p class="mt-2">The copper tongues tick softly—not like a clock, but like breath being counted.</p>
            <p class="mt-2">Along the mirror's frame, the reference filaments begin to glow.</p>
            ${basisNote}
            <p class="mt-2 text-purple-300">The mirror is no longer bored. It's waiting.</p>
        `);
    } else {
        const next = ritual.getAcceptableCandles();
        showLore('Candle Sequencer', `
            <p>Candle ${num} burns.</p>
            <p class="mt-2">Progress: <span class="text-amber-300">${ritual.candlesLit.length}/12</span></p>
            <p class="mt-2">Next acceptable: <span class="text-cyan-300">${next.join(' or ')}</span></p>
        `);
    }
    
    updateStatus();
    showHint();
    renderTable();
}

// Interact with mirror
function tapMirror() {
    audio.init();
    audio.playMirrorDelay();
    
    if (!ritual.filamentsActive) {
        showLore(lore.mirror.title, lore.mirror.content + `
            <p class="mt-2 text-gray-400">The filaments remain dark. The glass looks bored.</p>
        `);
        log('Mirror waits... filaments inactive', 'info');
        return;
    }
    
    if (!ritual.mirrorAwakened) {
        ritual.mirrorAwakened = true;
        ritual.mirrorInterfaceReady = true;
        ritual.updatePhase();
        log('✓ Mirror interface awakened', 'success');
        
        const basisDesc = ritual.chromaticBasis === 'purple' 
            ? 'reflection spaces—mirrors within mirrors, delayed causality'
            : ritual.chromaticBasis === 'orange'
            ? 'transformation domains—fey realms, spore networks, negotiable identity'
            : 'undefined chromatic space';
        
        showLore('Mirror Assembly — AWAKENED', `
            <p class="text-purple-400">The glass stops being cloudy.</p>
            <p class="mt-2">Your reflection appears with a delay that stretches longer each moment. The mirror is thinking.</p>
            <p class="mt-2">The filaments pulse in patterns that suggest meaning—each one tuned to a different layer of reality.</p>
            <p class="mt-2 text-${ritual.chromaticBasis === 'purple' ? 'purple' : 'orange'}-300">Tuned to: ${basisDesc}</p>
            <p class="mt-2 text-yellow-300">Three layers are being forced to overlap. The physical room. The mirror-space. And something older.</p>
            <p class="mt-3 text-green-400">The interface is ready. Touch it again to complete the convergence.</p>
        `);
        updateStatus();
        showHint();
        renderTable();
        return;
    }
    
    if (!ritual.ritualComplete) {
        completeRitual();
    }
}

// Complete the ritual
function completeRitual() {
    ritual.ritualComplete = true;
    ritual.updatePhase();
    audio.playRitualComplete();
    log('★ CONVERGENCE COMPLETE ★', 'ritual');
    updateStatus();
    showEnding();
}

// Ring the bell - now a stabilizer
function ringBell() {
    audio.init();
    
    if (ritual.bellCooldown) {
        log('Bell still resonating... wait for it to settle', 'warning');
        audio.playNeedleClick();
        return;
    }
    
    if (ritual.bellRings >= 3) {
        log('Bell exhausted — no stabilization charges remain', 'error');
        audio.playNeedleClick();
        showLore('The Bell — EXHAUSTED', `
            <p class="text-red-400">The bell has been rung three times.</p>
            <p class="mt-2">Its sympathetic metal has gone dull. No more stabilization is possible.</p>
            <p class="mt-2 text-gray-400">Things that listen sideways have noted your position. But not enough to act.</p>
            <p class="mt-2 text-amber-300">Proceed carefully. The geometry must hold on its own now.</p>
        `);
        return;
    }
    
    // Use bell as stabilizer
    const success = ritual.useBellStabilizer();
    
    if (success) {
        audio.playBellRing();
        
        const remaining = 3 - ritual.bellRings;
        const effects = [];
        
        if (ritual.shearLevel < 0.3) effects.push('shear reduced');
        if (ritual.entropyLevel < 50) effects.push('entropy bled');
        if (ritual.sequenceErrors === 0) effects.push('errors forgiven');
        
        log(`🔔 Bell stabilization (${remaining} ring${remaining !== 1 ? 's' : ''} left)`, 'stabilize');
        log(`Effects: ${effects.join(', ') || 'geometry stabilized'}`, 'success');
        
        showLore('The Bell — STABILIZING', `
            <p class="text-cyan-400">The bell's resonance washes through the room.</p>
            <p class="mt-2">You feel the geometry <span class="text-green-400">tighten</span>, options reasserting themselves.</p>
            <p class="mt-2">Chronometric shear: <span class="text-green-400">${(ritual.shearLevel * 100).toFixed(0)}%</span></p>
            <p class="mt-2">Entropy level: <span class="text-green-400">${ritual.entropyLevel}%</span></p>
            <p class="mt-2">Sequence tolerance: <span class="text-green-400">+1 charge</span></p>
            <p class="mt-2 text-amber-300">Rings remaining: ${remaining}</p>
            <p class="mt-2 text-gray-400 text-sm">Things that listen sideways stir, but the controlled ring keeps them at bay.</p>
        `);
    }
    
    updateStatus();
    renderTable();
}

// Charge entropy ring
function chargeRing() {
    audio.init();
    ritual.entropyLevel = Math.min(100, ritual.entropyLevel + 12);
    audio.playEntropyBleed();
    
    log(`Entropy sink: ${ritual.entropyLevel}%`, ritual.entropyLevel > 70 ? 'warning' : 'info');
    
    if (ritual.entropyLevel >= 100) {
        setTimeout(() => {
            triggerCollapse('Probability sinks exceeded capacity. Rupture detected. Usually inward.');
        }, 500);
        return;
    }
    
    const bellHint = ritual.entropyLevel > 60 && ritual.bellRings < 3 ?
        `<p class="mt-2 text-cyan-400">The bell can bleed excess entropy if rung.</p>` : '';
    
    showLore(lore.entropy.title, lore.entropy.content + `
        <p class="mt-2 text-${ritual.entropyLevel > 70 ? 'red' : 'cyan'}-400">
            Entropy: ${ritual.entropyLevel}%
        </p>
        ${bellHint}
    `);
    renderTable();
}

// Check shear gauge
function checkShear() {
    audio.init();
    ritual.shearLevel = Math.min(1, ritual.shearLevel + 0.12);
    
    if (ritual.shearLevel > 0.7) {
        audio.playShearWarning();
        ritual.geometryStable = false;
        log('⚠ CHRONOMETRIC SHEAR CRITICAL', 'error');
    } else {
        audio.playNeedleClick();
        log(`Shear level: ${(ritual.shearLevel * 100).toFixed(0)}%`, 'info');
    }
    
    if (ritual.shearLevel >= 1) {
        setTimeout(() => {
            triggerCollapse('Chronometric shear exceeded tolerance. The rings aligned. Time did something rude.');
        }, 500);
        return;
    }
    
    const bellHint = ritual.shearLevel > 0.5 && ritual.bellRings < 3 ?
        `<p class="mt-2 text-cyan-400">The bell can reduce shear if rung.</p>` : '';
    
    showLore(lore.shear.title, lore.shear.content + `
        <p class="mt-2 text-${ritual.shearLevel > 0.7 ? 'red' : 'cyan'}-400">
            Shear: ${(ritual.shearLevel * 100).toFixed(0)}%
        </p>
        ${bellHint}
    `);
    renderTable();
}

// Toggle governor
function toggleGovernor(type) {
    audio.init();
    ritual.governorToggles[type] = !ritual.governorToggles[type];
    
    if (ritual.governorToggles[type]) {
        audio.playGovernorSlam();
        log(`Governor ${type.toUpperCase()} engaged — geometry collapsed`, 'warning');
        ritual.shearLevel = Math.max(0, ritual.shearLevel - 0.2);
        ritual.geometryStable = true;
    } else {
        audio.playNeedleClick();
        log(`Governor ${type.toUpperCase()} released`, 'info');
    }
    
    showLore(lore.governor.title, lore.governor.content);
    renderTable();
}

// Tap ink bowl
function tapInkBowl() {
    audio.init();
    audio.playInkRipple();
    ritual.inkDisturbances++;
    showLore(lore.inkBowl.title, lore.inkBowl.content);
    log('Ink disturbed... patterns shifting', 'info');
}

// Tap table
function tapTable() {
    audio.init();
    audio.playTableHum();
    showLore(lore.table.title, lore.table.content);
}

// ==================== COLLAPSE & RESET ====================

function triggerCollapse(reason) {
    audio.playCollapse();
    
    const overlay = document.getElementById('reset-overlay');
    document.getElementById('reset-reason').textContent = reason;
    overlay.classList.remove('hidden');
    overlay.classList.add('overload-flash');
    
    setTimeout(() => {
        overlay.classList.add('hidden');
        overlay.classList.remove('overload-flash');
        ritual.reset();
        updateStatus();
        renderTable();
        log('System reinitialized', 'info');
        showLore(lore.table.title, lore.table.content);
        showHint();
    }, 3500);
}

function restartExperience() {
    document.getElementById('ending-overlay').classList.add('hidden');
    ritual.reset();
    updateStatus();
    renderTable();
    log('New session initialized', 'info');
    showHint();
}

// ==================== ENDING SEQUENCE ====================

function showEnding() {
    const overlay = document.getElementById('ending-overlay');
    const content = document.getElementById('ending-content');
    
    overlay.classList.remove('hidden');
    
    const basisText = ritual.chromaticBasis === 'purple' 
        ? 'The purple basis shows you reflections—mirrors within mirrors, each one a version of truth delayed.'
        : ritual.chromaticBasis === 'orange'
        ? 'The orange basis shows you transformations—fey paths, spore networks, places where identity bends.'
        : 'The undefined basis shows you raw possibility—dangerous and unfiltered.';
    
    const basisColor = ritual.chromaticBasis === 'purple' ? 'text-purple-400' : 
                       ritual.chromaticBasis === 'orange' ? 'text-orange-400' : 'text-gray-400';
    
    const sequence = [
        { delay: 0, html: `<div class="${basisColor} text-6xl mb-8 mirror-reveal">◈</div>` },
        { delay: 2000, html: `<p class="text-gray-400 text-lg text-reveal">The mirror stops being a mirror.</p>` },
        { delay: 4000, html: `<p class="text-gray-300 text-lg mt-4 text-reveal">It becomes an interface.</p>` },
        { delay: 6000, html: `<p class="${basisColor} mt-6 text-reveal">${basisText}</p>` },
        { delay: 13500, html: `<div class="mt-8 pt-8 border-t border-purple-900/50 text-reveal"><p class="text-gray-300">And then it looks at you.</p></div>` },
        { delay: 15500, html: `<p class="text-purple-400 mt-4 text-reveal italic">Not with words.</p>` },
        { delay: 17000, html: `<p class="text-purple-400 text-reveal italic">With reflections.</p>` },
        { delay: 18500, html: `<p class="text-gray-300 mt-4 text-reveal">With what it shows you about yourself.</p>` },
        { delay: 21500, html: `<div class="mt-8 text-reveal"><p class="text-amber-300">"The mirror will go dull. Not dark. Not shattered.</p><p class="text-amber-300 mt-1">Just ordinary. Boring glass."</p></div>` },
        { delay: 24500, html: `<p class="text-gray-400 mt-4 text-reveal">"When that happens, we will know things we did not know before.</p>` },
        { delay: 26500, html: `<p class="text-gray-400 text-reveal">About the Empire. About the Spore. About each other."</p>` },
        { delay: 29000, html: `<p class="text-red-400 mt-4 text-reveal italic">"Some of it will hurt. All of it will be true."</p>` },
        { delay: 32000, html: `<div class="mt-10 pt-8 border-t border-gray-800 text-reveal">
            <p class="text-gray-500">The candles dim to ordinary flame.</p>
            <p class="text-gray-500 mt-2">The floating rings beneath the floor slow, then stop.</p>
            <p class="text-gray-500 mt-2">The mirror becomes boring glass once more.</p>
        </div>` },
        { delay: 36500, html: `<div class="mt-8 text-reveal">
            <p class="text-green-400 text-xl title-font">CONVERGENCE COMPLETE</p>
            <p class="text-gray-400 mt-4">Three descriptions of reality agreed, briefly.</p>
            <p class="${basisColor} mt-2">Chromatic basis: ${ritual.chromaticBasis || 'undefined'}</p>
            <p class="text-gray-500 mt-2 text-sm">The Mages Guild will write reports instead of prayers.</p>
        </div>` },
        { delay: 40500, html: `<div class="mt-6 text-reveal">
            <p class="text-purple-300 italic">"The terrifying part isn't that they understand reality this way.</p>
            <p class="text-purple-300 italic mt-2">It's that the schematics keep working."</p>
        </div>` },
        { delay: 44500, html: `<button onclick="restartExperience()" class="mt-10 px-8 py-3 bg-purple-900/50 border border-purple-500 rounded-lg text-purple-300 hover:bg-purple-800/50 transition-all title-font cursor-pointer">Begin Again</button>` }
    ];
    
    let currentHTML = '';
    sequence.forEach(item => {
        setTimeout(() => {
            currentHTML += item.html;
            content.innerHTML = currentHTML;
        }, item.delay);
    });
}
