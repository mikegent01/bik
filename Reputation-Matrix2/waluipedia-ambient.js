// Calm Waluigi reading radio for the root Waluipedia app.
// Tiny WebAudio generative playlist: no audio assets, no autoplay until user gesture.
(() => {
  if (window.WaluipediaAmbient) return;

  const STORE = 'waluipediaAmbient';
  const VOL_STORE = 'waluipediaAmbientVolume';
  let enabled = localStorage.getItem(STORE) !== 'off';
  let audio = null;
  let master = null;
  let timer = null;
  let playing = false;
  let step = 0;
  let nextTime = 0;
  let trackIndex = Number(localStorage.getItem('waluipediaAmbientTrack') || 0) || 0;
  let currentTrackLoops = 0;
  let ui = null;
  let titleEl = null;
  let playBtn = null;
  let volume = Number(localStorage.getItem(VOL_STORE) || 0.42);
  if (!Number.isFinite(volume)) volume = 0.22;

  const noteHz = {
    C2: 65.41, D2: 73.42, E2: 82.41, F2: 87.31, G2: 98, A2: 110, B2: 123.47,
    C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196, A3: 220, B3: 246.94,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880, B5: 987.77,
    C6: 1046.5
  };

  const tracks = [
    {
      name: 'Waluigi Reading Room', tempo: 72,
      chords: [['D3','F3','A3','C4'], ['A2','E3','G3','C4'], ['B2','D3','F3','A3'], ['G2','D3','F3','B3']],
      melody: ['A4','_','C5','D5','F5','_','E5','D5','C5','_','A4','G4','F4','_','D4','_', 'E4','G4','A4','C5','D5','_','C5','A4','G4','_','F4','E4','D4','_','_','_'],
      bass: ['D2','_','_','A2','_','_','F2','_','A2','_','_','E2','_','_','G2','_'],
      texture: 'sine'
    },
    {
      name: 'Purple Marginalia', tempo: 66,
      chords: [['C3','E3','G3','B3'], ['G2','D3','F3','A3'], ['A2','C3','E3','G3'], ['F2','C3','E3','A3']],
      melody: ['E4','_','G4','B4','D5','_','B4','G4','A4','_','C5','E5','D5','_','B4','_', 'C5','B4','G4','E4','F4','_','A4','C5','B4','_','G4','E4','C4','_','_','_'],
      bass: ['C2','_','G2','_','A2','_','E2','_','F2','_','C3','_','G2','_','D2','_'],
      texture: 'triangle'
    },
    {
      name: 'Library of Wah', tempo: 60,
      chords: [['A2','C3','E3','G3'], ['F2','A2','C3','E3'], ['C3','E3','G3','B3'], ['E2','G2','B2','D3']],
      melody: ['C5','_','B4','A4','E4','_','G4','A4','C5','_','E5','D5','B4','_','G4','_', 'A4','C5','B4','G4','E4','_','F4','A4','G4','_','E4','C4','B3','_','_','_'],
      bass: ['A2','_','_','E2','F2','_','_','C2','C3','_','_','G2','E2','_','_','B2'],
      texture: 'sine'
    },
    {
      name: 'Footnote Moonwalk', tempo: 78,
      chords: [['G2','B2','D3','F3'], ['D3','F3','A3','C4'], ['E3','G3','B3','D4'], ['C3','E3','G3','B3']],
      melody: ['D5','_','F5','E5','B4','_','D5','A4','G4','_','B4','D5','F5','_','E5','_', 'B4','D5','E5','G5','A5','_','G5','E5','D5','_','B4','G4','A4','_','_','_'],
      bass: ['G2','_','D2','_','D3','_','A2','_','E3','_','B2','_','C3','_','G2','_'],
      texture: 'triangle'
    },
    {
      name: 'Archivist After Hours', tempo: 58,
      chords: [['F2','A2','C3','E3'], ['C3','E3','G3','B3'], ['D3','F3','A3','C4'], ['A2','C3','E3','G3']],
      melody: ['A4','C5','_','E5','G5','_','E5','C5','B4','D5','_','F5','E5','_','C5','_', 'D5','F5','A5','_','G5','E5','C5','_','A4','C5','D5','_','E5','_','_','_'],
      bass: ['F2','_','C3','_','C2','_','G2','_','D3','_','A2','_','A2','_','E2','_'],
      texture: 'sine'
    }
  ];

  function allowed() {
    return enabled;
  }

  function ctx() {
    if (!allowed()) return null;
    if (!audio) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return null;
      audio = new AudioContext();
      master = audio.createGain();
      master.gain.value = volume;
      master.connect(audio.destination);
    }
    if (audio.state === 'suspended') audio.resume().catch(() => {});
    return audio;
  }

  function hit(note, when, length, type, gainValue) {
    const c = ctx();
    if (!c || !master || note === '_' || !noteHz[note]) return;
    const osc = c.createOscillator();
    const gain = c.createGain();
    const filter = c.createBiquadFilter();
    osc.type = type;
    osc.frequency.setValueAtTime(noteHz[note], when);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(type === 'sine' ? 1450 : 1050, when);
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(gainValue, when + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + length);
    osc.connect(filter).connect(gain).connect(master);
    osc.start(when);
    osc.stop(when + length + 0.04);
  }

  function schedule() {
    const c = ctx();
    if (!playing || !c) return;
    const track = tracks[trackIndex % tracks.length];
    const beat = 60 / track.tempo;
    while (nextTime < c.currentTime + 0.75) {
      const pos = step % track.melody.length;
      const chord = track.chords[Math.floor(pos / 8) % track.chords.length];
      const bass = track.bass[pos % track.bass.length];
      if (pos % 8 === 0) chord.forEach((n, i) => hit(n, nextTime + i * 0.018, beat * 3.7, 'sine', 0.036));
      if (pos % 4 === 0) hit(bass, nextTime, beat * 2.4, 'triangle', 0.052);
      const melodyNote = track.melody[pos];
      if (melodyNote !== '_') hit(melodyNote, nextTime, beat * 0.88, track.texture, 0.044);
      if (pos % 8 === 6) hit(chord[1], nextTime + beat * 0.15, beat * 0.7, 'sine', 0.02);
      step++;
      if (step % track.melody.length === 0) {
        currentTrackLoops++;
        if (currentTrackLoops >= 2) nextTrack(true);
      }
      nextTime += beat / 2;
    }
    timer = window.setTimeout(schedule, 120);
  }

  function updateUi() {
    const track = tracks[trackIndex % tracks.length];
    if (titleEl) titleEl.textContent = track.name;
    if (playBtn) playBtn.textContent = playing ? '⏸' : '▶';
    if (ui) ui.classList.toggle('is-playing', playing);
    const headerButton = document.getElementById('musicBtn');
    if (headerButton) {
      headerButton.textContent = playing ? '🎶' : '🎧';
      headerButton.title = playing ? `Pause reading music: ${track.name}` : `Play Waluigi reading music: ${track.name}`;
    }
    localStorage.setItem('waluipediaAmbientTrack', String(trackIndex));
  }

  function start() {
    enabled = true;
    localStorage.setItem(STORE, 'on');
    if (playing) return;
    const c = ctx();
    if (!c) return;
    playing = true;
    nextTime = c.currentTime + 0.08;
    // Immediate audible confirmation on the click that unlocked audio, then the loop follows.
    hit('C5', c.currentTime + 0.02, 0.18, 'sine', 0.055);
    hit('E5', c.currentTime + 0.12, 0.20, 'sine', 0.045);
    schedule();
    updateUi();
  }

  function stop() {
    playing = false;
    if (timer) clearTimeout(timer);
    timer = null;
    updateUi();
  }

  function toggle() { playing ? stop() : start(); }

  function nextTrack(auto = false) {
    trackIndex = (trackIndex + 1) % tracks.length;
    step = 0;
    currentTrackLoops = 0;
    if (audio) nextTime = audio.currentTime + (auto ? 0.25 : 0.06);
    updateUi();
  }

  function randomTrack() {
    let next = trackIndex;
    while (tracks.length > 1 && next === trackIndex) next = Math.floor(Math.random() * tracks.length);
    trackIndex = next;
    step = 0;
    currentTrackLoops = 0;
    if (audio) nextTime = audio.currentTime + 0.06;
    updateUi();
  }

  function buildUi() {
    if (ui || !document.body) return;
    const style = document.createElement('style');
    style.textContent = `.walu-ambient{position:fixed;right:14px;bottom:14px;z-index:10000;display:flex;align-items:center;gap:7px;padding:8px 10px;border:1px solid rgba(172,112,255,.35);border-radius:999px;background:linear-gradient(135deg,rgba(34,18,48,.92),rgba(12,7,22,.92));box-shadow:0 8px 30px rgba(0,0,0,.35);color:#eadbff;font:12px system-ui,sans-serif;backdrop-filter:blur(8px)}.walu-ambient button{border:1px solid rgba(234,219,255,.22);background:rgba(255,255,255,.06);color:#f4e7ff;border-radius:999px;min-width:28px;height:28px;cursor:pointer}.walu-ambient button:hover{background:rgba(172,112,255,.22)}.walu-ambient-title{max-width:170px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.82}.walu-ambient.is-playing{box-shadow:0 0 20px rgba(172,112,255,.25),0 8px 30px rgba(0,0,0,.35)}@media(max-width:700px){.walu-ambient{left:10px;right:10px;justify-content:center}.walu-ambient-title{max-width:120px}}`;
    document.head.appendChild(style);
    ui = document.createElement('div');
    ui.className = 'walu-ambient';
    ui.innerHTML = `<span title="Calm Waluigi reading radio">🎧</span><button type="button" class="walu-ambient-play" title="Play / pause calm reading music">▶</button><button type="button" class="walu-ambient-shuffle" title="Shuffle Waluigi playlist">🔀</button><button type="button" class="walu-ambient-next" title="Next calm track">⏭</button><span class="walu-ambient-title"></span>`;
    document.body.appendChild(ui);
    titleEl = ui.querySelector('.walu-ambient-title');
    playBtn = ui.querySelector('.walu-ambient-play');
    playBtn.addEventListener('click', toggle);
    ui.querySelector('.walu-ambient-next').addEventListener('click', () => { nextTrack(); if (!playing) start(); });
    ui.querySelector('.walu-ambient-shuffle').addEventListener('click', () => { randomTrack(); if (!playing) start(); });
    const headerButton = document.getElementById('musicBtn');
    if (headerButton && !headerButton.dataset.waluAmbientBound) {
      headerButton.dataset.waluAmbientBound = 'true';
      headerButton.addEventListener('click', event => { event.preventDefault(); toggle(); });
      headerButton.addEventListener('contextmenu', event => { event.preventDefault(); randomTrack(); if (!playing) start(); });
    }
    updateUi();
  }

  // Do not auto-start on a generic pointerdown: that made the play button start
  // on pointerdown and immediately stop again on click. Music starts only from
  // the explicit 🎧/▶ controls.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildUi);
  else buildUi();

  window.WaluipediaAmbient = {
    start, stop, toggle, nextTrack, randomTrack,
    setVolume(v) {
      volume = Math.max(0, Math.min(0.9, Number(v) || 0));
      localStorage.setItem(VOL_STORE, String(volume));
      if (master) master.gain.value = volume;
    },
    enable() { enabled = true; localStorage.setItem(STORE, 'on'); start(); },
    disable() { enabled = false; localStorage.setItem(STORE, 'off'); stop(); },
    get playing() { return playing; },
    get track() { return tracks[trackIndex % tracks.length].name; }
  };
})();
