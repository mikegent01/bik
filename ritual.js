// ==================== RITUAL STATE ====================
const ritual = {
    // Core progression
    phase: 'awakening', // awakening, grounding, tuning, resonance, sequencing, convergence, interface, complete
    
    // Component states
    veinsActive: false,
    veinPulseCount: 0,
    forkStruck: false,
    forkResonating: false,
    forkTuning: null, // null, 'purple', 'orange'
    forkStrikeCount: 0,
    candlesLit: [],
    correctOrder: [1, 12, 2, 11, 3, 10, 4, 9, 5, 8, 6, 7],
    sequenceErrors: 0,
    maxErrors: 3,
    filamentsActive: false,
    mirrorAwakened: false,
    mirrorInterfaceReady: false,
    ritualComplete: false,
    
    // Bell as stabilizer
    bellRings: 0,
    bellStabilizing: false,
    bellCooldown: false,
    stabilizationCharges: 0,
    maxStabilization: 3,
    
    // Auxiliary systems
    shearLevel: 0,
    entropyLevel: 0,
    governorToggles: { line: false, dot: false, cross: false },
    inkDisturbances: 0,
    
    // Narrative tracking
    oraclePresent: false,
    oracleProximityVerified: false,
    geometryStable: true,
    chromaticBasis: null, // null, 'purple', 'orange'
    
    // Hints and guidance
    lastHint: '',
    hintsShown: [],
    
    // Get current suggested action
    getSuggestedAction() {
        if (!this.veinsActive) return 'veins';
        if (!this.forkStruck) return 'fork';
        if (this.candlesLit.length < 12) return 'candles';
        if (!this.mirrorAwakened) return 'mirror';
        if (!this.ritualComplete) return 'complete';
        return null;
    },
    
    // Get next candle in sequence
    getNextCandle() {
        if (this.candlesLit.length >= 12) return null;
        return this.correctOrder[this.candlesLit.length];
    },
    
    // Check if a candle is the correct next one
    isCorrectCandle(num) {
        const next = this.getNextCandle();
        return next === num;
    },
    
    // Get candles that would be acceptable (with tolerance)
    getAcceptableCandles() {
        const idx = this.candlesLit.length;
        if (idx >= 12) return [];
        
        const correct = this.correctOrder[idx];
        const acceptable = [correct];
        
        const pairs = [[1,12], [2,11], [3,10], [4,9], [5,8], [6,7]];
        const currentPairIndex = Math.floor(idx / 2);
        
        if (currentPairIndex < pairs.length) {
            const pair = pairs[currentPairIndex];
            if (idx % 2 === 0) {
                if (!this.candlesLit.includes(pair[0])) acceptable.push(pair[0]);
                if (!this.candlesLit.includes(pair[1])) acceptable.push(pair[1]);
            } else {
                const remaining = pair.find(c => !this.candlesLit.includes(c));
                if (remaining && !acceptable.includes(remaining)) acceptable.push(remaining);
            }
        }
        
        return [...new Set(acceptable)];
    },
    
    // Use bell to stabilize - reduces shear and grants error forgiveness
    useBellStabilizer() {
        if (this.bellCooldown) return false;
        if (this.bellRings >= 3) return false; // Bell exhausted
        
        this.bellRings++;
        this.bellStabilizing = true;
        this.stabilizationCharges = Math.min(this.maxStabilization, this.stabilizationCharges + 1);
        
        // Reduce dangerous levels
        this.shearLevel = Math.max(0, this.shearLevel - 0.3);
        this.entropyLevel = Math.max(0, this.entropyLevel - 20);
        this.geometryStable = true;
        
        // Forgive one error
        if (this.sequenceErrors > 0) {
            this.sequenceErrors = Math.max(0, this.sequenceErrors - 1);
        }
        
        // Cooldown
        this.bellCooldown = true;
        setTimeout(() => {
            this.bellCooldown = false;
            this.bellStabilizing = false;
        }, 5000);
        
        return true;
    },
    
    // Fork tuning - strike pattern determines chromatic basis
    tuneFork(strikeType) {
        this.forkStrikeCount++;
        
        // Pattern detection: 
        // Quick double-strike (within 1s) = purple (reflection)
        // Slow deliberate strikes = orange (transformation)
        // The fork remembers
        
        if (this.forkTuning === null) {
            // First tuning attempt
            if (strikeType === 'quick') {
                this.forkTuning = 'purple';
                this.chromaticBasis = 'purple';
            } else {
                this.forkTuning = 'orange';
                this.chromaticBasis = 'orange';
            }
        }
        
        return this.forkTuning;
    },
    
    // Update phase based on current state
    updatePhase() {
        if (this.ritualComplete) {
            this.phase = 'complete';
        } else if (this.mirrorInterfaceReady) {
            this.phase = 'interface';
        } else if (this.filamentsActive) {
            this.phase = 'convergence';
        } else if (this.candlesLit.length > 0) {
            this.phase = 'sequencing';
        } else if (this.forkStruck) {
            this.phase = 'resonance';
        } else if (this.veinsActive) {
            this.phase = 'grounding';
        } else {
            this.phase = 'awakening';
        }
    },
    
    // Get contextual hint based on current state
    getContextualHint() {
        // Danger warnings first
        if (this.shearLevel > 0.6) {
            return {
                type: 'warning',
                text: '⚠ Chronometric shear rising! The bell can stabilize the geometry if rung carefully.'
            };
        }
        
        if (this.entropyLevel > 60) {
            return {
                type: 'warning',
                text: '⚠ Entropy building in the sinks. The bell\'s resonance can bleed off excess.'
            };
        }
        
        if (!this.veinsActive) {
            return {
                type: 'guidance',
                text: 'The veins in the table pulse faintly. They await grounding before the geometry can stabilize.'
            };
        }
        
        if (!this.forkStruck) {
            return {
                type: 'guidance', 
                text: 'The resonance fork rests in its felt. Strike it to verify Oracle proximity. Strike pattern determines chromatic tuning—quick strikes for reflection, deliberate for transformation.'
            };
        }
        
        if (this.forkStruck && this.chromaticBasis) {
            const basisDesc = this.chromaticBasis === 'purple' 
                ? 'reflection spaces (purple)' 
                : 'transformation domains (orange)';
            if (this.candlesLit.length === 0) {
                return {
                    type: 'guidance',
                    text: `Fork tuned to ${basisDesc}. "You cannot cut the center until you have defined the edges." Begin with the outermost candles.`
                };
            }
        }
        
        if (this.candlesLit.length === 0) {
            return {
                type: 'guidance',
                text: '"You cannot cut the center until you have defined the edges." Begin with the outermost candles.'
            };
        }
        
        if (this.candlesLit.length < 12) {
            const next = this.getNextCandle();
            const acceptable = this.getAcceptableCandles();
            
            let hint = '';
            if (this.sequenceErrors > 0 && this.stabilizationCharges < this.maxStabilization) {
                hint = ` The bell can forgive errors if the geometry destabilizes.`;
            }
            
            if (acceptable.length > 1) {
                return {
                    type: 'guidance',
                    text: `Opposition precedes resolution. Light either candle ${acceptable[0]} or ${acceptable[1]}.${hint}`
                };
            }
            return {
                type: 'guidance',
                text: `The copper tongues warm in sequence. Candle ${next} awaits.${hint}`
            };
        }
        
        if (!this.mirrorAwakened) {
            return {
                type: 'guidance',
                text: 'The filaments glow along the mirror\'s edge. The glass is no longer bored. Observe it.'
            };
        }
        
        if (!this.ritualComplete) {
            const basisText = this.chromaticBasis 
                ? ` The ${this.chromaticBasis} basis is locked.`
                : '';
            return {
                type: 'ready',
                text: `The mirror has stopped being a mirror. It is ready to become an interface.${basisText} Proceed when prepared.`
            };
        }
        
        return null;
    },
    
    // Reset the ritual
    reset() {
        this.phase = 'awakening';
        this.veinsActive = false;
        this.veinPulseCount = 0;
        this.forkStruck = false;
        this.forkResonating = false;
        this.forkTuning = null;
        this.forkStrikeCount = 0;
        this.candlesLit = [];
        this.sequenceErrors = 0;
        this.filamentsActive = false;
        this.mirrorAwakened = false;
        this.mirrorInterfaceReady = false;
        this.ritualComplete = false;
        this.bellRings = 0;
        this.bellStabilizing = false;
        this.bellCooldown = false;
        this.stabilizationCharges = 0;
        this.shearLevel = 0;
        this.entropyLevel = 0;
        this.governorToggles = { line: false, dot: false, cross: false };
        this.inkDisturbances = 0;
        this.oraclePresent = false;
        this.oracleProximityVerified = false;
        this.geometryStable = true;
        this.chromaticBasis = null;
        this.lastHint = '';
        this.hintsShown = [];
    }
};

// ==================== LORE DATA ====================
const lore = {
    table: {
        title: "The Table",
        content: `<p>The table comes first, because everything else bows to it.</p>
        <p class="mt-2">It isn't wood. The surface is a single slab of compressed slate and resin, veins of pale metal running through it like fossilized lightning. Those veins aren't decoration—they're grounding paths, etched deliberately <span class="text-purple-300">wrong</span> so stray energies slide off instead of pooling.</p>
        <p class="mt-2">The table is octagonal. Not for symbolism—eight gives you redundancy without symmetry locking.</p>
        <p class="mt-2 text-amber-300">Its legs don't touch the floor. Each terminates in a floating foot, humming quietly. Vibration isolation.</p>`
    },
    veins: {
        title: "Grounding Veins",
        content: `<p>Veins of pale metal run through the surface like fossilized lightning.</p>
        <p class="mt-2">They're not decoration. They're <span class="text-cyan-300">grounding paths</span>, etched deliberately wrong so stray energies slide off instead of pooling.</p>
        <p class="mt-2">When the room's geometry starts breathing, these veins glow just enough to notice.</p>`
    },
    mirror: {
        title: "Mirror Assembly",
        content: `<p>A rectangular frame of blackened silver, lying flat like a window set into the table.</p>
        <p class="mt-2">The glass is dull, almost cloudy, refusing to reflect properly. If you lean over it, your face appears <span class="text-purple-300">slightly delayed</span>, like the mirror is thinking before answering.</p>
        <p class="mt-2">Along the frame's inner edge run hair-thin filaments that glow faintly when active—reference filaments, each tuned to a different layer of reality.</p>
        <p class="mt-2 text-red-300">When inactive, the mirror looks bored. That's how you know it's dangerous.</p>`
    },
    candles: {
        title: "Candle Sequencer",
        content: `<p>A low metal track with precisely <span class="text-amber-300">twelve recesses</span> and one deliberately empty slot.</p>
        <p class="mt-2">Each candle is packed with slow-burning alchemical salts and a wick braided from mnemonic fibers—thread that remembers prior burn patterns.</p>
        <p class="mt-2">Between each recess is a thin copper tongue that acts as both conductor and timer. Light them out of order and the rail physically resists.</p>
        <p class="mt-2 text-yellow-300">"You cannot cut the center until you have defined the edges."</p>`
    },
    fork: {
        title: "Resonance Fork",
        content: `<p>Twin prongs etched with matching scars, resting in felt.</p>
        <p class="mt-2">It <span class="text-purple-300">hums faintly</span> when the Oracle is nearby, like a dog recognizing footsteps.</p>
        <p class="mt-2">Strike it to verify proximity before proceeding with the ritual.</p>
        <p class="mt-2 text-cyan-300">The fork also serves as a <span class="text-amber-300">chromatic tuner</span>. Strike pattern matters:</p>
        <p class="mt-1 text-purple-400">• Quick double-strike → Purple basis (reflection spaces)</p>
        <p class="mt-1 text-orange-400">• Deliberate single strike → Orange basis (transformation domains)</p>`
    },
    bell: {
        title: "The Bell — Stabilizer",
        content: `<p>It hangs from a separate stand of pale wood, isolated, its surface dull and unadorned.</p>
        <p class="mt-2">Originally a <span class="text-red-300">Range Enforcer</span>, the Guild has repurposed it as a <span class="text-cyan-300">geometry stabilizer</span>.</p>
        <p class="mt-2">When the ritual threatens to destabilize, ring the bell to:</p>
        <p class="mt-1 text-green-400">• Reduce chronometric shear</p>
        <p class="mt-1 text-green-400">• Bleed excess entropy</p>
        <p class="mt-1 text-green-400">• Forgive sequence errors</p>
        <p class="mt-2 text-amber-300">⚠ Limited to 3 rings per ritual. Use wisely.</p>
        <p class="mt-2 text-red-300">The bell announces to things that listen sideways. But controlled rings stabilize rather than summon.</p>`
    },
    entropy: {
        title: "Entropy Regulator Ring",
        content: `<p>Inside that band is a spiral lattice of <span class="text-purple-300">probability sinks</span>—tiny pockets of unrealized outcomes.</p>
        <p class="mt-2">The ring bleeds entropy into those sinks, keeping the traveler below catastrophic narrative divergence.</p>
        <p class="mt-2 text-red-300">⚠ Once the sinks fill, they don't empty. They rupture. Usually inward.</p>
        <p class="mt-2 text-amber-300">Guild policy: rings are returned, or rings are buried with the user.</p>`
    },
    shear: {
        title: "Chronometric Shear Gauge",
        content: `<p>A glass cylinder with floating rings inside, <span class="text-cyan-300">slowly rotating out of sync</span>.</p>
        <p class="mt-2">It exists solely to scream if time is about to do something rude.</p>
        <p class="mt-2 text-red-300">⚠ If the rings ever align perfectly, someone shouts and everyone stops.</p>
        <p class="mt-2 text-green-400">The bell can reduce shear if rung at the right moment.</p>`
    },
    governor: {
        title: "Governor Housing",
        content: `<p>A rectangular block of iron with vent slats and heavy toggles labeled: <span class="text-purple-300">line, dot, cross</span>.</p>
        <p class="mt-2">These toggles control shutters that collapse geometry sections. When thrown, you feel the room <span class="text-red-300">lose options</span>.</p>
        <p class="mt-2 text-yellow-300">No one flips a governor switch casually. They do it with both hands.</p>`
    },
    inkBowl: {
        title: "Observation Ink Bowls",
        content: `<p>Three shallow bowls of dark ink sit in a triangular arrangement.</p>
        <p class="mt-2">The ink <span class="text-cyan-300">never stills</span>; it ripples in response to things no one in the room is doing.</p>
        <p class="mt-2">Suspended above each bowl is a lens assembly, like an insect eye frozen mid-curiosity.</p>`
    }
};
