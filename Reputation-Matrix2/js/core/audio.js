// ==================== AUDIO ENGINE ====================
class AudioEngine {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.masterVolume = 0.4;
        this.initialized = false;
        this.ambientNodes = [];
    }
    
    init() {
        if (this.initialized) return;
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
            this.startAmbient();
        } catch(e) {
            console.warn('Web Audio not supported');
        }
    }
    
    setVolume(vol) {
        this.masterVolume = vol;
    }
    
    toggle() {
        this.enabled = !this.enabled;
        if (!this.enabled) {
            this.stopAllAmbient();
        } else if (this.initialized) {
            this.startAmbient();
        }
        return this.enabled;
    }
    
    startAmbient() {
        if (!this.enabled || !this.ctx || this.ambientNodes.length > 0) return;
        
        // Low drone
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 40;
        gain.gain.value = 0.03 * this.masterVolume;
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        this.ambientNodes.push({ osc, gain });
    }
    
    stopAllAmbient() {
        this.ambientNodes.forEach(n => {
            try { n.osc.stop(); } catch(e) {}
        });
        this.ambientNodes = [];
    }
    
    // Table floating feet hum
    playTableHum() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 45;
        gain.gain.setValueAtTime(0, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.08 * this.masterVolume, this.ctx.currentTime + 0.2);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 2);
    }
    
    // Vein activation pulse
    playVeinPulse() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.5);
        gain.gain.setValueAtTime(0.06 * this.masterVolume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.5);
    }
    
    // Mirror delay effect
    playMirrorDelay() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        osc.type = 'sine';
        osc.frequency.value = 300;
        filter.type = 'lowpass';
        filter.frequency.value = 400;
        gain.gain.setValueAtTime(0.1 * this.masterVolume, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 1.5);
    }
    
    // Candle lighting whoosh
    playCandleLight() {
        if (!this.enabled || !this.ctx) return;
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.4, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < buffer.length; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (buffer.length * 0.15));
        }
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 800;
        filter.Q.value = 0.5;
        const gain = this.ctx.createGain();
        gain.gain.value = 0.12 * this.masterVolume;
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    }
    
    // Copper tongue tick
    playCopperTick() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = 2500;
        gain.gain.setValueAtTime(0.08 * this.masterVolume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.03);
    }
    
    // Resonance fork hum with beating
    playForkHum() {
        if (!this.enabled || !this.ctx) return;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc1.type = 'sine';
        osc2.type = 'sine';
        osc1.frequency.value = 440;
        osc2.frequency.value = 442; // Slight detuning for beating
        gain.gain.setValueAtTime(0.1 * this.masterVolume, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 3);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);
        osc1.start();
        osc2.start();
        osc1.stop(this.ctx.currentTime + 3);
        osc2.stop(this.ctx.currentTime + 3);
    }
    
    // Bell ring with harmonics
    playBellRing() {
        if (!this.enabled || !this.ctx) return;
        const harmonics = [1, 2.4, 5.95, 8.5, 11.8];
        const baseFreq = 523.25;
        harmonics.forEach((h, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = baseFreq * h;
            const vol = (0.2 / (i + 1)) * this.masterVolume;
            gain.gain.setValueAtTime(vol, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 4);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 4);
        });
    }
    
    // Entropy bleed sound
    playEntropyBleed() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(80, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(300, this.ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.08 * this.masterVolume, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    }
    
    // Sequence complete chord
    playSequenceComplete() {
        if (!this.enabled || !this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.12 * this.masterVolume, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.6);
            }, i * 150);
        });
    }
    
    // System collapse/overload
    playCollapse() {
        if (!this.enabled || !this.ctx) return;
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 1.5, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < buffer.length; i++) {
            data[i] = (Math.random() * 2 - 1);
        }
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(3000, this.ctx.currentTime);
        filter.frequency.linearRampToValueAtTime(50, this.ctx.currentTime + 1.5);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.25 * this.masterVolume, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    }
    
    // Ritual complete ethereal sound
    playRitualComplete() {
        if (!this.enabled || !this.ctx) return;
        const freqs = [261.63, 329.63, 392.00, 523.25, 659.25];
        freqs.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0, this.ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.08 * this.masterVolume, this.ctx.currentTime + 0.5);
            gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 5);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 5);
        });
    }
    
    // Ink bowl ripple
    playInkRipple() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(80, this.ctx.currentTime + 0.8);
        gain.gain.setValueAtTime(0.05 * this.masterVolume, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.8);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.8);
    }
    
    // Governor toggle slam
    playGovernorSlam() {
        if (!this.enabled || !this.ctx) return;
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.6, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < buffer.length; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (buffer.length * 0.03));
        }
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 300;
        const gain = this.ctx.createGain();
        gain.gain.value = 0.35 * this.masterVolume;
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    }
    
    // Shear warning beeps
    playShearWarning() {
        if (!this.enabled || !this.ctx) return;
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'square';
                osc.frequency.value = 880;
                gain.gain.setValueAtTime(0.15 * this.masterVolume, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.1);
            }, i * 120);
        }
    }
    
    // Needle click
    playNeedleClick() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.value = 1200;
        gain.gain.setValueAtTime(0.04 * this.masterVolume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.02);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.02);
    }
    
    // Whisper hint sound
    playWhisper() {
        if (!this.enabled || !this.ctx) return;
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.5, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < buffer.length; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.3 * Math.sin(i / 500);
        }
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 2000;
        filter.Q.value = 2;
        const gain = this.ctx.createGain();
        gain.gain.value = 0.05 * this.masterVolume;
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start();
    }
    
    // Phase lock sound
    playPhaseLock() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(200, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(400, this.ctx.currentTime + 0.2);
        osc.frequency.setValueAtTime(400, this.ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.1 * this.masterVolume, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.4);
    }
    
    // Purple tuning - ethereal, reflective sound
    playPurpleTuning() {
        if (!this.enabled || !this.ctx) return;
        // Descending ethereal tone suggesting reflection/mirrors
        const freqs = [880, 660, 440, 330];
        freqs.forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(0.08 * this.masterVolume, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc.stop(this.ctx.currentTime + 0.5);
            }, i * 100);
        });
    }
    
    // Orange tuning - warmer, transformative sound
    playOrangeTuning() {
        if (!this.enabled || !this.ctx) return;
        // Ascending warm tone suggesting transformation/fey
        const freqs = [220, 330, 440, 550];
        freqs.forEach((freq, i) => {
            setTimeout(() => {
                const osc = this.ctx.createOscillator();
                const osc2 = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc2.type = 'sawtooth';
                osc.frequency.value = freq;
                osc2.frequency.value = freq * 1.01; // Slight detune for warmth
                gain.gain.setValueAtTime(0.06 * this.masterVolume, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
                osc.connect(gain);
                osc2.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start();
                osc2.start();
                osc.stop(this.ctx.currentTime + 0.6);
                osc2.stop(this.ctx.currentTime + 0.6);
            }, i * 120);
        });
    }
    
    // Bell stabilization - soothing resonance
    playBellStabilize() {
        if (!this.enabled || !this.ctx) return;
        // Calming chord with long decay
        const harmonics = [1, 1.5, 2, 2.5, 3];
        const baseFreq = 440;
        harmonics.forEach((h, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = baseFreq * h;
            const vol = (0.12 / (i + 1)) * this.masterVolume;
            gain.gain.setValueAtTime(vol, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 5);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 5);
        });
        
        // Add a gentle "washing" noise for stabilization feel
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 2, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < buffer.length; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (buffer.length * 0.3));
        }
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 500;
        const noiseGain = this.ctx.createGain();
        noiseGain.gain.value = 0.04 * this.masterVolume;
        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);
        noise.start();
    }
    
    // Stabilization charge granted
    playStabilizationGrant() {
        if (!this.enabled || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(783.99, this.ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.1 * this.masterVolume, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
    }
}

// Global audio instance
const audio = new AudioEngine();

function toggleSound() {
    audio.init();
    const enabled = audio.toggle();
    document.getElementById('sound-toggle').textContent = enabled ? '🔊 Sound' : '🔇 Muted';
}

function setVolume(val) {
    audio.setVolume(val / 100);
}
