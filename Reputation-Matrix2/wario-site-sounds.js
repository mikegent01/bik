// Lightweight shared UI sounds for Waluipedia / Wario pages.
// Uses tiny WebAudio synth blips instead of large audio files.
(() => {
  if (window.WarioSiteSounds) return;

  const STORAGE_KEY = 'warioSiteSounds';
  const prefersQuiet = () => window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  let enabled = localStorage.getItem(STORAGE_KEY) !== 'off';
  let ctx = null;
  let master = null;
  let lastHover = 0;
  let unlocked = false;

  const notes = {
    C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196, A3: 220, B3: 246.94,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880, B5: 987.77,
    C6: 1046.5
  };

  function allowed() {
    return enabled && !prefersQuiet() && window.__warioSoundEnabled !== false;
  }

  function ensureAudio() {
    if (!allowed()) return null;
    if (!ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return null;
      ctx = new AudioContext();
      master = ctx.createGain();
      master.gain.value = 0.075;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    unlocked = true;
    return ctx;
  }

  function tone(note, start, length = 0.075, type = 'square', volume = 0.08) {
    const audio = ensureAudio();
    if (!audio || !master) return;
    const freq = typeof note === 'number' ? note : notes[note];
    if (!freq) return;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(volume, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + length);
    osc.connect(gain).connect(master);
    osc.start(start);
    osc.stop(start + length + 0.015);
  }

  function noise(start, length = 0.045, volume = 0.035) {
    const audio = ensureAudio();
    if (!audio || !master) return;
    const buffer = audio.createBuffer(1, Math.max(1, Math.floor(audio.sampleRate * length)), audio.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const source = audio.createBufferSource();
    const filter = audio.createBiquadFilter();
    const gain = audio.createGain();
    source.buffer = buffer;
    filter.type = 'highpass';
    filter.frequency.value = 5000;
    gain.gain.setValueAtTime(volume, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + length);
    source.connect(filter).connect(gain).connect(master);
    source.start(start);
    source.stop(start + length);
  }

  function play(kind = 'click') {
    const audio = ensureAudio();
    if (!audio) return;
    const t = audio.currentTime + 0.005;
    switch (kind) {
      case 'hover':
        tone('E5', t, 0.035, 'sine', 0.025);
        break;
      case 'nav':
        tone('A3', t, 0.07, 'triangle', 0.06);
        tone('D4', t + 0.055, 0.09, 'triangle', 0.05);
        break;
      case 'select':
        tone('C5', t, 0.045, 'square', 0.05);
        tone('E5', t + 0.04, 0.045, 'square', 0.045);
        break;
      case 'success':
        tone('C5', t, 0.06, 'square', 0.055);
        tone('E5', t + 0.055, 0.06, 'square', 0.05);
        tone('G5', t + 0.11, 0.08, 'square', 0.045);
        break;
      case 'error':
        tone('C4', t, 0.06, 'sawtooth', 0.055);
        tone('B3', t + 0.055, 0.08, 'sawtooth', 0.05);
        break;
      case 'coin':
        tone('G5', t, 0.05, 'square', 0.055);
        tone('C6', t + 0.045, 0.09, 'square', 0.045);
        noise(t + 0.015, 0.025, 0.015);
        break;
      default:
        tone('D5', t, 0.055, 'square', 0.05);
        tone('A4', t + 0.045, 0.05, 'triangle', 0.035);
    }
  }

  function interactiveFrom(target) {
    return target?.closest?.('button,a,[role="button"],summary,select,input[type="checkbox"],input[type="radio"],.card,.arttile,.result-card,.timeline-event,.nav-link,.tab,.category-pill');
  }

  document.addEventListener('pointerdown', ensureAudio, { passive: true, once: true });
  document.addEventListener('keydown', ensureAudio, { passive: true, once: true });

  document.addEventListener('pointerover', event => {
    const item = interactiveFrom(event.target);
    if (!item || item.contains(event.relatedTarget)) return;
    const now = performance.now();
    if (now - lastHover < 120) return;
    lastHover = now;
    play('hover');
  }, true);

  document.addEventListener('click', event => {
    const item = interactiveFrom(event.target);
    if (!item) return;
    if (item.matches('a[href]')) return play('nav');
    if (item.matches('select,input')) return play('select');
    const label = (item.textContent || item.getAttribute('aria-label') || '').toLowerCase();
    if (/buy|add|purchase|coin|gold|checkout|sync|save|complete/.test(label)) return play('coin');
    if (/close|delete|remove|cancel|error|sold out/.test(label)) return play('error');
    play('click');
  }, true);

  document.addEventListener('change', event => {
    if (event.target?.matches?.('select,input')) play('select');
  }, true);

  window.WarioSiteSounds = {
    play,
    enable() { enabled = true; localStorage.setItem(STORAGE_KEY, 'on'); ensureAudio(); },
    disable() { enabled = false; localStorage.setItem(STORAGE_KEY, 'off'); },
    setEnabled(value) { value ? this.enable() : this.disable(); },
    get enabled() { return enabled; }
  };
})();
