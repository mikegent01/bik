/* ============================================================
   RAKASHA NEWS NETWORK — AUDIO DESK
   Music bed, stings and newsreader voice for the RNN broadcast.

   Everything here is SYNTHESISED IN THE BROWSER. No .mp3 or .wav is
   shipped: the theme is a small step-sequencer driving Web Audio
   oscillators, and the anchor's voice is the platform speechSynthesis
   engine. That keeps the repo tiny and means every FUTURE episode is
   scored and voiced automatically with no new assets.

   The score is Rakasha: log drums, a low jungle drone, a bone-flute
   motif in A minor pentatonic, and a newsroom arpeggio underneath.

   Exposes window.RNNAudio — see the API block at the bottom.
   ============================================================ */
(function () {
  'use strict';

  var AC = window.AudioContext || window.webkitAudioContext;
  var SYNTH = window.speechSynthesis || null;

  var BPM = 92;
  var SPB = 60 / BPM;          // seconds per beat
  var STEP = SPB / 4;          // 16th note
  var LOOKAHEAD = 0.12;        // schedule this far ahead, seconds
  var TIMER_MS = 25;

  /* A minor pentatonic — the Rakasha mode */
  var BASS = [55.00, 55.00, 43.65, 49.00];            // A1 A1 F1 G1, one per bar
  var ARP = [220.00, 261.63, 329.63, 392.00];          // A3 C4 E4 G4
  var FLUTE = [659.25, 587.33, 493.88, 440.00, 329.63];// E5 D5 B4 A4 E4

  var A = {
    ctx: null,
    master: null,
    bed: null,         // music bus
    duckTarget: 1,
    musicOn: true,
    voiceOn: false,
    running: false,
    step: 0,
    nextTime: 0,
    timer: 0,
    speed: 1,
    noise: null,
    speaking: false,
    utter: null,
    voices: { anchor: null, field: null }
  };

  /* ---------------- plumbing ---------------- */

  function init() {
    if (A.ctx || !AC) return !!A.ctx;
    try { A.ctx = new AC(); } catch (e) { return false; }

    A.master = A.ctx.createGain();
    A.master.gain.value = 0.9;
    A.master.connect(A.ctx.destination);

    A.bed = A.ctx.createGain();
    A.bed.gain.value = 0;
    A.bed.connect(A.master);

    // one shared noise buffer for every percussive hit
    var len = Math.floor(A.ctx.sampleRate * 0.5);
    A.noise = A.ctx.createBuffer(1, len, A.ctx.sampleRate);
    var d = A.noise.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    return true;
  }

  function resume() {
    if (A.ctx && A.ctx.state === 'suspended') A.ctx.resume();
  }

  function t() { return A.ctx.currentTime; }

  /* ---------------- voices (instruments) ---------------- */

  function env(node, at, peak, attack, decay) {
    var g = A.ctx.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), at + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, at + attack + decay);
    node.connect(g);
    return g;
  }

  function noiseHit(at, freq, q, peak, decay, type) {
    var src = A.ctx.createBufferSource();
    src.buffer = A.noise;
    var f = A.ctx.createBiquadFilter();
    f.type = type || 'bandpass';
    f.frequency.value = freq;
    f.Q.value = q;
    src.connect(f);
    var g = env(f, at, peak, 0.002, decay);
    g.connect(A.bed);
    src.start(at);
    src.stop(at + decay + 0.05);
  }

  function logDrum(at, from, to, peak, decay) {
    var o = A.ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(from, at);
    o.frequency.exponentialRampToValueAtTime(to, at + decay * 0.8);
    var g = env(o, at, peak, 0.004, decay);
    g.connect(A.bed);
    o.start(at);
    o.stop(at + decay + 0.05);
  }

  function tone(at, freq, peak, decay, type, dest) {
    var o = A.ctx.createOscillator();
    o.type = type || 'triangle';
    o.frequency.value = freq;
    var g = env(o, at, peak, 0.012, decay);
    g.connect(dest || A.bed);
    o.start(at);
    o.stop(at + decay + 0.08);
    return o;
  }

  function flute(at, freq, peak, dur) {
    var o = A.ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.setValueAtTime(freq, at);
    // breathy vibrato
    var lfo = A.ctx.createOscillator();
    lfo.frequency.value = 5.2;
    var lg = A.ctx.createGain();
    lg.gain.value = freq * 0.012;
    lfo.connect(lg).connect(o.frequency);
    var g = env(o, at, peak, 0.09, dur);
    g.connect(A.bed);
    o.start(at); lfo.start(at);
    o.stop(at + dur + 0.12); lfo.stop(at + dur + 0.12);
  }

  /* ---------------- the pattern ---------------- */

  function scheduleStep(s, at) {
    var bar = Math.floor(s / 16) % 4;
    var k = s % 16;

    // log drums — the spine
    if (k === 0 || k === 6 || k === 10) logDrum(at, 96, 52, 0.55, 0.20);
    if (k === 4 || k === 12) noiseHit(at, 1900, 5, 0.13, 0.045);
    if (k % 2 === 1) noiseHit(at, 6800, 1.2, 0.030, 0.028, 'highpass');

    // bass drone, one note per bar with a mid-bar re-articulation
    if (k === 0) tone(at, BASS[bar], 0.30, SPB * 2.6, 'sine');
    if (k === 10) tone(at, BASS[bar] * 2, 0.09, SPB * 0.6, 'sine');

    // newsroom arpeggio, quiet under everything
    if (k % 2 === 0) {
      var n = ARP[(k / 2) % ARP.length];
      tone(at, n * (bar === 2 ? 0.945 : 1), 0.045, 0.22, 'square');
    }

    // bone flute answers every other bar
    if (bar % 2 === 1 && (k === 0 || k === 6 || k === 11)) {
      var idx = (bar === 1 ? 0 : 2) + (k === 0 ? 0 : k === 6 ? 1 : 2);
      flute(at, FLUTE[idx % FLUTE.length], 0.085, k === 11 ? SPB * 1.2 : SPB * 0.55);
    }
  }

  function tick() {
    if (!A.running) return;
    var horizon = t() + LOOKAHEAD;
    while (A.nextTime < horizon) {
      scheduleStep(A.step, A.nextTime);
      A.step++;
      A.nextTime += STEP / A.speed;
    }
  }

  /* ---------------- transport ---------------- */

  function startBed() {
    if (!init()) return;
    resume();
    if (A.running) return;
    A.running = true;
    A.step = 0;
    A.nextTime = t() + 0.08;
    A.timer = setInterval(tick, TIMER_MS);
    fadeBed(A.musicOn ? 0.34 : 0, 1.2);
  }

  function stopBed(fade) {
    fadeBed(0, fade == null ? 0.8 : fade);
    var when = A.ctx ? (fade == null ? 900 : fade * 1000) : 0;
    setTimeout(function () {
      if (A.bed && A.bed.gain.value < 0.01) {
        A.running = false;
        clearInterval(A.timer);
      }
    }, when + 60);
  }

  function fadeBed(to, secs) {
    if (!A.bed) return;
    var g = A.bed.gain;
    g.cancelScheduledValues(t());
    g.setValueAtTime(Math.max(g.value, 0.0001), t());
    g.linearRampToValueAtTime(to * A.duckTarget, t() + (secs || 0.4));
  }

  function duck(on) {
    A.duckTarget = on ? 0.38 : 1;
    if (A.running) fadeBed(A.musicOn ? 0.34 : 0, 0.35);
  }

  /* ---------------- stings ---------------- */

  function sting(kind) {
    if (!init() || !A.musicOn) return;
    resume();
    var at = t() + 0.02;

    if (kind === 'open' || kind === 'signoff') {
      var root = kind === 'open' ? 220 : 164.81;
      [1, 1.5, 2, 3].forEach(function (m, i) {
        tone(at + i * 0.045, root * m, 0.16, 1.15, 'sawtooth');
      });
      logDrum(at, 130, 44, 0.75, 0.6);
      noiseHit(at, 3200, 0.8, 0.18, 0.5, 'highpass');
    } else {
      // segment transition — short filtered whoosh + rim
      var src = A.ctx.createBufferSource();
      src.buffer = A.noise;
      var f = A.ctx.createBiquadFilter();
      f.type = 'bandpass'; f.Q.value = 2.2;
      f.frequency.setValueAtTime(300, at);
      f.frequency.exponentialRampToValueAtTime(4200, at + 0.28);
      src.connect(f);
      var g = env(f, at, 0.10, 0.05, 0.26);
      g.connect(A.master);
      src.start(at); src.stop(at + 0.42);
      logDrum(at + 0.02, 110, 60, 0.28, 0.16);
    }
  }

  function blip() {
    if (!A.ctx || !A.musicOn || A.voiceOn) return;
    var at = t() + 0.005;
    tone(at, 2100 + Math.random() * 400, 0.016, 0.022, 'square', A.master);
  }

  /* ---------------- newsreader voice (TTS) ---------------- */

  function pickVoices() {
    if (!SYNTH) return;
    var all = SYNTH.getVoices() || [];
    var en = all.filter(function (v) { return /^en(-|_|$)/i.test(v.lang); });
    if (!en.length) en = all;
    var byName = function (re) { return en.filter(function (v) { return re.test(v.name); })[0]; };
    A.voices.anchor = byName(/male|daniel|alex|fred|george|arthur|rishi/i) || en[0] || null;
    A.voices.field = en.filter(function (v) { return v !== A.voices.anchor; })[0] || A.voices.anchor;
  }
  if (SYNTH) {
    pickVoices();
    if (typeof SYNTH.addEventListener === 'function') {
      SYNTH.addEventListener('voiceschanged', pickVoices);
    }
  }

  /* Speak one caption line, paced to fit the cue it belongs to. */
  function speak(text, opts) {
    if (!A.voiceOn || !SYNTH || !text) return;
    opts = opts || {};
    try { SYNTH.cancel(); } catch (e) { }

    var u = new SpeechSynthesisUtterance(text);
    var words = text.split(/\s+/).length;
    var secs = Math.max(0.8, (opts.durationMs || 4000) / 1000);
    // ~2.6 words/sec at rate 1; fit the line into its slot, then honour scrub speed
    u.rate = Math.min(2, Math.max(0.6, words / (2.6 * secs))) * A.speed;
    u.pitch = opts.field ? 1.22 : 0.82;
    u.volume = 1;
    var v = opts.field ? A.voices.field : A.voices.anchor;
    if (v) { u.voice = v; u.lang = v.lang; }

    A.speaking = true;
    duck(true);
    u.onend = u.onerror = function () { A.speaking = false; duck(false); };
    A.utter = u;
    try { SYNTH.speak(u); } catch (e) { A.speaking = false; duck(false); }
  }

  function stopSpeech() {
    if (!SYNTH) return;
    try { SYNTH.cancel(); } catch (e) { }
    A.speaking = false;
    duck(false);
  }

  /* ---------------- API ---------------- */
  window.RNNAudio = {
    supported: !!AC,
    ttsSupported: !!SYNTH,
    init: init,
    start: startBed,
    stop: function () { stopBed(); stopSpeech(); },
    sting: sting,
    blip: blip,
    speak: speak,
    stopSpeech: stopSpeech,
    pauseSpeech: function () { if (SYNTH && A.speaking) { try { SYNTH.pause(); } catch (e) { } } },
    resumeSpeech: function () { if (SYNTH) { try { SYNTH.resume(); } catch (e) { } } },
    setSpeed: function (x) { A.speed = x || 1; },
    setMusic: function (on) {
      A.musicOn = !!on;
      if (!A.ctx) return;
      fadeBed(on ? 0.34 : 0, 0.5);
    },
    setVoice: function (on) {
      A.voiceOn = !!on;
      if (!on) stopSpeech();
    },
    isMusicOn: function () { return A.musicOn; },
    isVoiceOn: function () { return A.voiceOn; }
  };
})();
