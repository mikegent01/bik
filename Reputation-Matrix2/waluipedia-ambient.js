// Waluipedia Audio Desk: calm reading music + reliable controls for root index.html.
// Generated with WebAudio (no large audio files). Starts only after the user presses 🎧/▶.
(() => {
  if (window.WaluipediaAmbient?.__v2) return;

  const STORE = 'waluipediaAmbient';
  const VOL_STORE = 'waluipediaAmbientVolume';
  let enabled = localStorage.getItem(STORE) !== 'off';
  let volume = Number(localStorage.getItem(VOL_STORE) || 0.55);
  if (!Number.isFinite(volume)) volume = 0.55;

  let audio = null;
  let master = null;
  let musicTimer = null;
  let playing = false;
  let step = 0;
  let nextTime = 0;
  let trackIndex = Number(localStorage.getItem('waluipediaAmbientTrack') || 0) || 0;
  let loopsOnTrack = 0;
  let ui = null;

  const hz = {
    C2: 65.41, D2: 73.42, E2: 82.41, F2: 87.31, G2: 98, A2: 110, B2: 123.47,
    C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196, A3: 220, B3: 246.94,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880, B5: 987.77,
    C6: 1046.5, D6: 1174.66
  };

  const tracks = [
    { name: 'Waluigi Reading Room', tempo: 72,
      chords: [['D3','F3','A3','C4'], ['A2','E3','G3','C4'], ['B2','D3','F3','A3'], ['G2','D3','F3','B3']],
      melody: ['A4','_','C5','D5','F5','_','E5','D5','C5','_','A4','G4','F4','_','D4','_','E4','G4','A4','C5','D5','_','C5','A4','G4','_','F4','E4','D4','_','_','_'],
      bass: ['D2','_','_','A2','F2','_','A2','_','A2','_','_','E2','G2','_','E2','_'], wave: 'sine' },
    { name: 'Purple Marginalia', tempo: 66,
      chords: [['C3','E3','G3','B3'], ['G2','D3','F3','A3'], ['A2','C3','E3','G3'], ['F2','C3','E3','A3']],
      melody: ['E4','_','G4','B4','D5','_','B4','G4','A4','_','C5','E5','D5','_','B4','_','C5','B4','G4','E4','F4','_','A4','C5','B4','_','G4','E4','C4','_','_','_'],
      bass: ['C2','_','G2','_','A2','_','E2','_','F2','_','C3','_','G2','_','D2','_'], wave: 'triangle' },
    { name: 'Library of WAH', tempo: 60,
      chords: [['A2','C3','E3','G3'], ['F2','A2','C3','E3'], ['C3','E3','G3','B3'], ['E2','G2','B2','D3']],
      melody: ['C5','_','B4','A4','E4','_','G4','A4','C5','_','E5','D5','B4','_','G4','_','A4','C5','B4','G4','E4','_','F4','A4','G4','_','E4','C4','B3','_','_','_'],
      bass: ['A2','_','_','E2','F2','_','_','C2','C3','_','_','G2','E2','_','_','B2'], wave: 'sine' },
    { name: 'Footnote Moonwalk', tempo: 78,
      chords: [['G2','B2','D3','F3'], ['D3','F3','A3','C4'], ['E3','G3','B3','D4'], ['C3','E3','G3','B3']],
      melody: ['D5','_','F5','E5','B4','_','D5','A4','G4','_','B4','D5','F5','_','E5','_','B4','D5','E5','G5','A5','_','G5','E5','D5','_','B4','G4','A4','_','_','_'],
      bass: ['G2','_','D2','_','D3','_','A2','_','E3','_','B2','_','C3','_','G2','_'], wave: 'triangle' },
    { name: 'Archivist After Hours', tempo: 58,
      chords: [['F2','A2','C3','E3'], ['C3','E3','G3','B3'], ['D3','F3','A3','C4'], ['A2','C3','E3','G3']],
      melody: ['A4','C5','_','E5','G5','_','E5','C5','B4','D5','_','F5','E5','_','C5','_','D5','F5','A5','_','G5','E5','C5','_','A4','C5','D5','_','E5','_','_','_'],
      bass: ['F2','_','C3','_','C2','_','G2','_','D3','_','A2','_','A2','_','E2','_'], wave: 'sine' },
    { name: 'Quiet Stache Study', tempo: 69,
      chords: [['E3','G3','B3','D4'], ['A2','C3','E3','G3'], ['D3','F3','A3','C4'], ['G2','B2','D3','F3']],
      melody: ['G4','B4','_','D5','E5','_','D5','B4','A4','C5','_','E5','D5','_','A4','_','F4','A4','C5','D5','F5','_','E5','C5','B4','_','G4','F4','E4','_','_','_'],
      bass: ['E2','_','B2','_','A2','_','E2','_','D3','_','A2','_','G2','_','D2','_'], wave: 'sine' }
  ];

  function ensureAudio() {
    if (!enabled) return null;
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

  function tone(note, when, length = 0.2, type = 'sine', gainValue = 0.05) {
    const ctx = ensureAudio();
    if (!ctx || !master || note === '_' || !hz[note]) return;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(hz[note], when);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(type === 'sine' ? 1800 : 1250, when);
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.exponentialRampToValueAtTime(gainValue, when + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, when + length);
    osc.connect(filter).connect(gain).connect(master);
    osc.start(when);
    osc.stop(when + length + 0.05);
  }

  function confirmation(kind = 'start') {
    const ctx = ensureAudio();
    if (!ctx) return;
    const t = ctx.currentTime + 0.02;
    if (kind === 'next') {
      tone('D5', t, 0.11, 'triangle', 0.08); tone('A5', t + 0.09, 0.12, 'triangle', 0.06);
    } else if (kind === 'shuffle') {
      tone('G4', t, 0.08, 'square', 0.055); tone('C5', t + 0.07, 0.08, 'square', 0.055); tone('F5', t + 0.14, 0.10, 'square', 0.05);
    } else {
      tone('C5', t, 0.16, 'sine', 0.08); tone('E5', t + 0.11, 0.18, 'sine', 0.065); tone('G5', t + 0.22, 0.2, 'sine', 0.05);
    }
  }

  function schedule() {
    const ctx = ensureAudio();
    if (!playing || !ctx) return;
    const track = tracks[trackIndex % tracks.length];
    const beat = 60 / track.tempo;
    while (nextTime < ctx.currentTime + 0.9) {
      const pos = step % track.melody.length;
      const chord = track.chords[Math.floor(pos / 8) % track.chords.length];
      if (pos % 8 === 0) chord.forEach((note, i) => tone(note, nextTime + i * 0.025, beat * 3.8, 'sine', 0.04));
      if (pos % 4 === 0) tone(track.bass[pos % track.bass.length], nextTime, beat * 2.5, 'triangle', 0.06);
      tone(track.melody[pos], nextTime, beat * 0.9, track.wave, 0.058);
      if (pos % 8 === 6) tone(chord[1], nextTime + beat * 0.18, beat * 0.75, 'sine', 0.024);
      step += 1;
      if (step % track.melody.length === 0) {
        loopsOnTrack += 1;
        if (loopsOnTrack >= 2) advanceTrack(true);
      }
      nextTime += beat / 2;
    }
    musicTimer = window.setTimeout(schedule, 100);
  }

  function currentTrack() { return tracks[trackIndex % tracks.length]; }

  function updateUi() {
    const track = currentTrack();
    document.querySelectorAll('[data-walu-music-title]').forEach(el => { el.textContent = track.name; });
    document.querySelectorAll('[data-walu-music-play]').forEach(el => { el.textContent = playing ? '⏸' : '▶'; });
    const header = document.getElementById('musicBtn');
    if (header) {
      header.textContent = playing ? '🎶' : '🎧';
      header.title = playing ? `Pause Waluigi playlist: ${track.name}` : `Play Waluigi playlist: ${track.name}`;
    }
    ui?.classList.toggle('is-playing', playing);
    localStorage.setItem('waluipediaAmbientTrack', String(trackIndex));
    renderPlaylist();
  }

  function start() {
    enabled = true;
    localStorage.setItem(STORE, 'on');
    if (playing) return;
    const ctx = ensureAudio();
    if (!ctx) return;
    playing = true;
    nextTime = ctx.currentTime + 0.42;
    confirmation('start');
    schedule();
    updateUi();
  }

  function stop() {
    playing = false;
    if (musicTimer) clearTimeout(musicTimer);
    musicTimer = null;
    updateUi();
  }

  function toggle() { playing ? stop() : start(); }

  function advanceTrack(auto = false) {
    trackIndex = (trackIndex + 1) % tracks.length;
    step = 0;
    loopsOnTrack = 0;
    if (audio) nextTime = audio.currentTime + (auto ? 0.2 : 0.12);
    updateUi();
  }

  function randomTrack() {
    let next = trackIndex;
    while (tracks.length > 1 && next === trackIndex) next = Math.floor(Math.random() * tracks.length);
    trackIndex = next;
    step = 0;
    loopsOnTrack = 0;
    if (audio) nextTime = audio.currentTime + 0.12;
    updateUi();
  }

  function nextTrack() { advanceTrack(false); if (!playing) start(); else confirmation('next'); }
  function shuffleTrack() { randomTrack(); if (!playing) start(); else confirmation('shuffle'); }

  function renderPlaylist() {
    // The playlist lives in the separate floating panel, not inside the compact bar.
    const list = document.querySelector('[data-walu-music-list]');
    if (!list) return;
    list.innerHTML = tracks.map((track, index) => `<button type="button" data-walu-music-track="${index}" class="${index === trackIndex ? 'active' : ''}"><span>🎵</span><b>${track.name}</b><small>${track.tempo} bpm</small></button>`).join('');
  }

  function buildUi() {
    if (ui || !document.body) return;
    const style = document.createElement('style');
    style.textContent = `.walu-ambient{position:fixed;right:14px;bottom:14px;z-index:2147483000;display:flex;align-items:center;gap:7px;padding:8px 10px;border:1px solid rgba(172,112,255,.45);border-radius:999px;background:linear-gradient(135deg,rgba(34,18,48,.96),rgba(12,7,22,.96));box-shadow:0 8px 30px rgba(0,0,0,.45);color:#eadbff;font:12px system-ui,sans-serif;backdrop-filter:blur(8px);pointer-events:auto}.walu-ambient button{border:1px solid rgba(234,219,255,.28);background:rgba(255,255,255,.08);color:#f4e7ff;border-radius:999px;min-width:30px;height:30px;cursor:pointer;pointer-events:auto}.walu-ambient button:hover{background:rgba(172,112,255,.25)}.walu-ambient-title{max-width:190px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.88}.walu-ambient.is-playing{box-shadow:0 0 22px rgba(172,112,255,.32),0 8px 30px rgba(0,0,0,.45)}.walu-music-panel{position:fixed;right:14px;bottom:68px;z-index:2147482999;width:min(360px,calc(100vw - 28px));max-height:430px;overflow:auto;border:1px solid rgba(172,112,255,.45);border-radius:18px;background:linear-gradient(180deg,rgba(34,18,48,.98),rgba(9,5,18,.98));box-shadow:0 18px 50px rgba(0,0,0,.55);color:#eadbff;padding:12px;display:none}.walu-music-panel.open{display:block}.walu-music-panel h3{margin:0 0 4px;font-size:14px}.walu-music-panel p{margin:0 0 10px;opacity:.7;font-size:12px;line-height:1.35}.walu-music-list{display:grid;gap:7px}.walu-music-list button{width:100%;display:grid;grid-template-columns:24px 1fr auto;gap:8px;align-items:center;text-align:left;border:1px solid rgba(234,219,255,.16);border-radius:12px;background:rgba(255,255,255,.06);color:#f4e7ff;padding:8px;cursor:pointer}.walu-music-list button:hover,.walu-music-list button.active{border-color:#f8c14a;background:rgba(248,193,74,.13)}.walu-music-list small{opacity:.55}.walu-music-volume{width:100%;accent-color:#a855f7}@media(max-width:700px){.walu-ambient{left:10px;right:10px;justify-content:center}.walu-ambient-title{max-width:130px}.walu-music-panel{left:10px;right:10px;width:auto}}`;
    document.head.appendChild(style);
    ui = document.createElement('div');
    ui.className = 'walu-ambient';
    ui.innerHTML = `<span title="Waluigi playlist">🎧</span><button type="button" data-walu-music-play title="Play / pause Waluigi playlist">▶</button><button type="button" data-walu-music-shuffle title="Shuffle Waluigi playlist">🔀</button><button type="button" data-walu-music-next title="Next Waluigi track">⏭</button><button type="button" data-walu-music-panel-toggle title="Open dedicated music section">🎼</button><span data-walu-music-title class="walu-ambient-title"></span>`;
    document.body.appendChild(ui);
    const panel = document.createElement('div');
    panel.className = 'walu-music-panel';
    panel.setAttribute('data-walu-music-panel', 'true');
    panel.innerHTML = `<h3>🎼 Waluigi Site Playlist</h3><p>Dedicated music section for Waluipedia, Bank, Shop, Battlefield, and linked pages. Pick a calm reading loop or let it rotate.</p><div class="walu-music-list" data-walu-music-list></div><p style="margin-top:10px">Volume</p><input class="walu-music-volume" data-walu-music-volume type="range" min="0" max="1" step="0.01" value="${volume}">`;
    document.body.appendChild(panel);
    renderPlaylist();
    updateUi();
  }

  // Capture-phase event delegation makes the controls work even if the SPA adds
  // other click handlers later. Stop only these music-control clicks.
  document.addEventListener('click', event => {
    const target = event.target?.closest?.('#musicBtn,[data-walu-music-play],[data-walu-music-next],[data-walu-music-shuffle],[data-walu-music-panel-toggle],[data-walu-music-track]');
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    if (target.matches('[data-walu-music-next]')) nextTrack();
    else if (target.matches('[data-walu-music-shuffle]')) shuffleTrack();
    else if (target.matches('[data-walu-music-panel-toggle]')) document.querySelector('[data-walu-music-panel]')?.classList.toggle('open');
    else if (target.matches('[data-walu-music-track]')) { trackIndex = Number(target.dataset.waluMusicTrack) || 0; step = 0; loopsOnTrack = 0; if (audio) nextTime = audio.currentTime + 0.12; updateUi(); if (!playing) start(); else confirmation('next'); }
    else toggle();
  }, true);

  document.addEventListener('input', event => {
    const slider = event.target?.closest?.('[data-walu-music-volume]');
    if (!slider) return;
    window.WaluipediaAmbient?.setVolume?.(Number(slider.value));
  }, true);

  document.addEventListener('contextmenu', event => {
    const target = event.target?.closest?.('#musicBtn');
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    shuffleTrack();
  }, true);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildUi);
  else buildUi();

  window.WaluipediaAmbient = {
    __v2: true,
    start, stop, toggle, nextTrack, randomTrack: shuffleTrack,
    setVolume(v) {
      volume = Math.max(0, Math.min(1, Number(v) || 0));
      localStorage.setItem(VOL_STORE, String(volume));
      if (master) master.gain.value = volume;
    },
    enable() { enabled = true; localStorage.setItem(STORE, 'on'); start(); },
    disable() { enabled = false; localStorage.setItem(STORE, 'off'); stop(); },
    test() { confirmation('start'); },
    get playing() { return playing; },
    get track() { return currentTrack().name; }
  };
})();
