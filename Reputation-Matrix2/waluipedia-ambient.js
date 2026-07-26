// Waluipedia Audio Desk: calm reading music + reliable controls for root index.html.
// Generated with WebAudio (no large audio files). Starts only after the user presses 🎧/▶.
(() => {
  if (window.WaluipediaAmbient?.__v4) return;

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
  let panel = null;
  const savedCollapsed = localStorage.getItem('waluipediaAmbientCollapsed');
  let collapsed = savedCollapsed == null ? /shop\.html$/i.test(location.pathname) : savedCollapsed === 'true';
  let dismissed = localStorage.getItem('waluipediaAmbientDismissed') === 'true';
  let mobileMode = localStorage.getItem('waluipediaMobileMode') === 'on';
  let drag = null;

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
      bass: ['E2','_','B2','_','A2','_','E2','_','D3','_','A2','_','G2','_','D2','_'], wave: 'sine' },
    { name: 'Anvil at Dawn', tempo: 64,
      chords: [['D2','A2','D3','F3'], ['B2','F3','A3','D4'], ['G2','D3','G3','B3'], ['A2','E3','G3','C4']],
      melody: ['D4','_','F4','A4','D5','_','C5','A4','B4','_','D5','F5','E5','_','C5','_','B4','A4','G4','A4','D5','_','F5','D5','C5','_','A4','F4','D4','_','_','_'],
      bass: ['D2','_','A2','_','B2','_','F2','_','G2','_','D2','_','A2','_','E2','_'], wave: 'triangle' },
    { name: 'Field Journal Candlelight', tempo: 62,
      chords: [['A2','C3','E3','A3'], ['E2','B2','D3','G3'], ['F2','A2','C3','F3'], ['C3','E3','G3','B3']],
      melody: ['E4','_','A4','C5','B4','_','G4','E4','F4','_','A4','C5','E5','_','D5','_','C5','A4','E4','G4','A4','_','C5','B4','G4','_','E4','F4','A4','_','_','_'],
      bass: ['A2','_','E2','_','E2','_','B2','_','F2','_','C3','_','C2','_','G2','_'], wave: 'sine' },
    { name: 'Coin Vault Lullaby', tempo: 74,
      chords: [['C3','E3','G3','C4'], ['F2','A2','C3','E3'], ['G2','B2','D3','F3'], ['E3','G3','B3','D4']],
      melody: ['G4','_','E5','D5','C5','_','G4','E4','A4','_','C5','E5','G5','_','E5','_','D5','B4','G4','B4','D5','_','F5','E5','C5','_','B4','G4','E4','_','_','_'],
      bass: ['C2','_','G2','_','F2','_','C3','_','G2','_','D3','_','E2','_','B2','_'], wave: 'triangle' },
    { name: 'Shadow Estate Waltz', tempo: 54,
      chords: [['D3','F3','A3','C4'], ['G2','B2','D3','F3'], ['C3','E3','G3','B3'], ['A2','C3','E3','G3']],
      melody: ['A4','C5','D5','_','F5','E5','D5','_','B4','D5','G5','_','F5','D5','B4','_','C5','E5','G5','_','B5','G5','E5','_','A4','C5','E5','_','D5','C5','_','_'],
      bass: ['D2','_','_','A2','G2','_','_','D2','C3','_','_','G2','A2','_','_','E2'], wave: 'sine' },
    { name: 'Feyward Window Escape', tempo: 82,
      chords: [['F2','A2','C3','E3'], ['D3','F3','A3','C4'], ['G2','B2','D3','F3'], ['C3','E3','G3','B3']],
      melody: ['C5','D5','F5','_','A5','G5','F5','D5','A4','C5','D5','_','F5','E5','D5','_','B4','D5','F5','G5','B5','_','G5','F5','E5','_','C5','A4','F4','_','_','_'],
      bass: ['F2','_','C3','_','D3','_','A2','_','G2','_','D3','_','C3','_','G2','_'], wave: 'triangle' },
    { name: 'Survey Machine Snowdin', tempo: 70,
      chords: [['G2','B2','D3','G3'], ['E3','G3','B3','D4'], ['C3','E3','G3','C4'], ['D3','F3','A3','C4']],
      melody: ['B4','_','D5','G5','F5','_','D5','B4','G4','_','B4','D5','E5','_','D5','_','C5','E5','G5','_','A5','G5','E5','_','D5','_','B4','G4','F4','_','_','_'],
      bass: ['G2','_','D2','_','E3','_','B2','_','C3','_','G2','_','D3','_','A2','_'], wave: 'sine' },
    { name: 'Warizon Midnight Checkout', tempo: 88,
      chords: [['A2','C3','E3','A3'], ['D3','F3','A3','C4'], ['G2','B2','D3','G3'], ['E3','G3','B3','D4']],
      melody: ['A4','C5','E5','_','A5','G5','E5','C5','D5','_','F5','A5','G5','_','E5','_','D5','B4','G4','B4','D5','_','G5','F5','E5','_','C5','A4','B4','_','_','_'],
      bass: ['A2','_','E2','_','D3','_','A2','_','G2','_','D3','_','E3','_','B2','_'], wave: 'square' },
    { name: 'Training Wing Focus', tempo: 76,
      chords: [['D3','F3','A3','D4'], ['C3','E3','G3','C4'], ['G2','B2','D3','G3'], ['A2','C3','E3','A3']],
      melody: ['D4','A4','D5','_','F5','E5','D5','A4','C5','_','E5','G5','E5','_','C5','_','B4','D5','G5','_','A5','G5','E5','_','D5','C5','A4','F4','D4','_','_','_'],
      bass: ['D2','_','A2','_','C3','_','G2','_','G2','_','D3','_','A2','_','E2','_'], wave: 'triangle' },
    { name: 'Garlic Cart After Dark', tempo: 68,
      chords: [['E2','G2','B2','E3'], ['A2','C3','E3','A3'], ['C3','E3','G3','C4'], ['B2','D3','F3','B3']],
      melody: ['E4','G4','B4','_','E5','D5','B4','G4','A4','_','C5','E5','D5','_','B4','_','C5','E5','G5','_','B5','G5','E5','_','D5','B4','G4','F4','E4','_','_','_'],
      bass: ['E2','_','B2','_','A2','_','E2','_','C3','_','G2','_','B2','_','F2','_'], wave: 'sine' }
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
      header.textContent = playing ? '🎶 Music' : '🎧 Music';
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

  function clampWidgetPosition(left, top) {
    if (!ui) return { left, top };
    const pad = 8;
    const w = ui.offsetWidth || 320;
    const h = ui.offsetHeight || 48;
    return {
      left: Math.max(pad, Math.min(window.innerWidth - w - pad, left)),
      top: Math.max(pad, Math.min(window.innerHeight - h - pad, top))
    };
  }

  function positionPanel() {
    if (!ui || !panel || !panel.classList.contains('open')) return;
    const r = ui.getBoundingClientRect();
    const width = Math.min(360, window.innerWidth - 20);
    const left = Math.max(10, Math.min(window.innerWidth - width - 10, r.right - width));
    const roomAbove = r.top - 10;
    panel.style.width = `${width}px`;
    panel.style.left = `${left}px`;
    panel.style.right = 'auto';
    panel.style.top = roomAbove >= Math.min(430, panel.scrollHeight) ? 'auto' : `${Math.min(window.innerHeight - 440, r.bottom + 8)}px`;
    panel.style.bottom = roomAbove >= Math.min(430, panel.scrollHeight) ? `${window.innerHeight - r.top + 8}px` : 'auto';
  }

  function setCollapsed(value) {
    collapsed = !!value;
    localStorage.setItem('waluipediaAmbientCollapsed', String(collapsed));
    ui?.classList.toggle('is-collapsed', collapsed);
    const button = ui?.querySelector('[data-walu-music-collapse]');
    if (button) {
      button.textContent = collapsed ? '↗' : '−';
      button.title = collapsed ? 'Expand music controls' : 'Collapse music controls';
    }
    if (collapsed) panel?.classList.remove('open');
  }

  function showWidget() {
    dismissed = false;
    localStorage.setItem('waluipediaAmbientDismissed', 'false');
    if (ui) ui.hidden = false;
  }

  function restorePosition() {
    if (!ui) return;
    try {
      const saved = JSON.parse(localStorage.getItem('waluipediaAmbientPosition') || 'null');
      if (!saved || !Number.isFinite(saved.left) || !Number.isFinite(saved.top)) return;
      const pos = clampWidgetPosition(saved.left, saved.top);
      ui.style.left = `${pos.left}px`;
      ui.style.top = `${pos.top}px`;
      ui.style.right = 'auto';
      ui.style.bottom = 'auto';
    } catch (_) {}
  }

  function applyMobileMode(value = mobileMode) {
    mobileMode = !!value;
    localStorage.setItem('waluipediaMobileMode', mobileMode ? 'on' : 'off');
    document.documentElement.classList.toggle('walu-mobile-mode', mobileMode);
    document.querySelectorAll('[data-walu-mobile-mode]').forEach(button => {
      button.setAttribute('aria-pressed', String(mobileMode));
      button.textContent = mobileMode ? '📱✓' : '📱';
      button.title = mobileMode ? 'Disable easy mobile mode' : 'Enable easy mobile mode';
    });
  }

  function buildUi() {
    if (ui || !document.body) return;
    const style = document.createElement('style');
    style.textContent = `.walu-ambient{position:fixed;right:14px;bottom:14px;z-index:450;display:flex;align-items:center;gap:7px;padding:7px 9px;border:1px solid rgba(172,112,255,.45);border-radius:999px;background:linear-gradient(135deg,rgba(34,18,48,.96),rgba(12,7,22,.96));box-shadow:0 8px 30px rgba(0,0,0,.45);color:#eadbff;font:12px system-ui,sans-serif;backdrop-filter:blur(8px);pointer-events:auto;max-width:calc(100vw - 20px);touch-action:none}.walu-ambient[hidden]{display:none}.walu-ambient button{border:1px solid rgba(234,219,255,.28);background:rgba(255,255,255,.08);color:#f4e7ff;border-radius:999px;min-width:30px;height:30px;cursor:pointer;pointer-events:auto}.walu-ambient button:hover{background:rgba(172,112,255,.25)}.walu-ambient-drag{cursor:grab!important;touch-action:none}.walu-ambient-drag:active{cursor:grabbing!important}.walu-ambient-title{max-width:180px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.88}.walu-ambient.is-playing{box-shadow:0 0 22px rgba(172,112,255,.32),0 8px 30px rgba(0,0,0,.45)}.walu-ambient.is-dragging{opacity:.9;box-shadow:0 16px 45px rgba(0,0,0,.5)}.walu-ambient.is-collapsed [data-walu-secondary],.walu-ambient.is-collapsed .walu-ambient-title{display:none}.walu-music-panel{position:fixed;z-index:449;width:min(360px,calc(100vw - 20px));max-height:min(430px,calc(100vh - 90px));overflow:auto;border:1px solid rgba(172,112,255,.45);border-radius:18px;background:linear-gradient(180deg,rgba(34,18,48,.98),rgba(9,5,18,.98));box-shadow:0 18px 50px rgba(0,0,0,.55);color:#eadbff;padding:12px;display:none;font:12px system-ui,sans-serif}.walu-music-panel.open{display:block}.walu-music-panel-head{display:flex;justify-content:space-between;gap:8px;align-items:center}.walu-music-panel h3{margin:0 0 4px;font-size:14px}.walu-music-panel-close{border:1px solid rgba(234,219,255,.25);border-radius:50%;width:28px;height:28px;background:rgba(255,255,255,.08);color:#fff;cursor:pointer}.walu-music-panel p{margin:0 0 10px;opacity:.7;font-size:12px;line-height:1.35}.walu-music-list{display:grid;gap:7px}.walu-music-list button{width:100%;display:grid;grid-template-columns:24px 1fr auto;gap:8px;align-items:center;text-align:left;border:1px solid rgba(234,219,255,.16);border-radius:12px;background:rgba(255,255,255,.06);color:#f4e7ff;padding:8px;cursor:pointer}.walu-music-list button:hover,.walu-music-list button.active{border-color:#f8c14a;background:rgba(248,193,74,.13)}.walu-music-list small{opacity:.55}.walu-music-volume{width:100%;accent-color:#a855f7}@media(max-width:700px){.walu-ambient{right:10px;bottom:10px}.walu-ambient-title{max-width:105px}.walu-ambient [data-walu-music-shuffle]{display:none}}`;
    document.head.appendChild(style);
    const mobileStyle = document.createElement('style');
    mobileStyle.setAttribute('data-walu-mobile-style', 'true');
    mobileStyle.textContent = `
      html.walu-mobile-mode,html.walu-mobile-mode body{max-width:100%;overflow-x:hidden!important;-webkit-text-size-adjust:100%;text-size-adjust:100%}
      html.walu-mobile-mode body{font-size:16px!important;line-height:1.6!important}
      html.walu-mobile-mode .layout{display:block!important;width:100%!important;max-width:100%!important;margin:8px auto!important;padding:0 8px!important}
      html.walu-mobile-mode aside.sidenav,html.walu-mobile-mode .sidebar,html.walu-mobile-mode .side-nav{position:static!important;width:100%!important;max-width:none!important;max-height:none!important;margin:0 0 12px!important;overflow:visible!important}
      html.walu-mobile-mode main,html.walu-mobile-mode .content,html.walu-mobile-mode .main-content{width:100%!important;min-width:0!important;margin-left:0!important;padding-left:8px!important;padding-right:8px!important}
      html.walu-mobile-mode .grid2,html.walu-mobile-mode .grid3,html.walu-mobile-mode .home-layout,html.walu-mobile-mode .article-layout,html.walu-mobile-mode .item-detail-layout,html.walu-mobile-mode .results-layout,html.walu-mobile-mode .co-grid,html.walu-mobile-mode .pdp{grid-template-columns:1fr!important}
      html.walu-mobile-mode .card,html.walu-mobile-mode .hero,html.walu-mobile-mode .panel,html.walu-mobile-mode .infobox{padding:14px!important;border-radius:12px!important;max-width:100%!important}
      html.walu-mobile-mode .topbar,html.walu-mobile-mode .topnav,html.walu-mobile-mode header{max-width:100vw!important;flex-wrap:wrap!important}
      html.walu-mobile-mode .searchwrap,html.walu-mobile-mode .nav-search{order:20!important;flex:1 0 100%!important;max-width:100%!important}
      html.walu-mobile-mode button:not(.modal-x):not(.walu-music-panel-close),html.walu-mobile-mode [role="button"],html.walu-mobile-mode input,html.walu-mobile-mode select,html.walu-mobile-mode summary{min-height:44px}
      html.walu-mobile-mode input,html.walu-mobile-mode select,html.walu-mobile-mode textarea{max-width:100%!important;font-size:16px!important}
      html.walu-mobile-mode table{display:block!important;width:100%!important;max-width:100%!important;overflow-x:auto!important;-webkit-overflow-scrolling:touch}
      html.walu-mobile-mode img,html.walu-mobile-mode svg,html.walu-mobile-mode canvas,html.walu-mobile-mode iframe{max-width:100%!important}
      html.walu-mobile-mode .modal-scrim{padding:6px!important}
      html.walu-mobile-mode .modal{max-width:calc(100vw - 12px)!important;border-radius:12px!important}
      html.walu-mobile-mode .pdp{padding:46px 10px 16px!important}
      html.walu-mobile-mode .pdp-img{min-height:180px!important;font-size:96px!important}
      html.walu-mobile-mode .pdp-buybox,html.walu-mobile-mode .co-summary{position:static!important;grid-column:1!important}
      html.walu-mobile-mode .grid,html.walu-mobile-mode .ab-grid,html.walu-mobile-mode .cf-grid,html.walu-mobile-mode .crafting-grid{grid-template-columns:1fr!important}
      html.walu-mobile-mode .wz-container{padding-left:8px!important;padding-right:8px!important}
      html.walu-mobile-mode #warioShell{height:auto!important;min-height:52px!important;padding:6px 8px!important}
      html.walu-mobile-mode.has-wario-shell body{padding-top:62px!important}
      html.walu-mobile-mode .ws-brandtxt,html.walu-mobile-mode .ws-link em,html.walu-mobile-mode .ws-btn em{display:none!important}
      html.walu-mobile-mode .walu-ambient{right:8px!important;bottom:8px!important;max-width:calc(100vw - 16px)!important}
    `;
    document.head.appendChild(mobileStyle);
    ui = document.createElement('div');
    ui.className = 'walu-ambient';
    ui.setAttribute('role', 'region');
    ui.setAttribute('aria-label', 'Movable site music controls');
    ui.innerHTML = `<button type="button" class="walu-ambient-drag" data-walu-music-drag title="Drag music controls" aria-label="Drag music controls">⠿</button><button type="button" data-walu-music-play title="Play / pause playlist">▶</button><button type="button" data-walu-mobile-mode aria-pressed="false" title="Enable easy mobile mode">📱</button><button type="button" data-walu-secondary data-walu-music-shuffle title="Shuffle playlist">🔀</button><button type="button" data-walu-secondary data-walu-music-next title="Next track">⏭</button><button type="button" data-walu-secondary data-walu-music-panel-toggle title="Open music library">🎼</button><span data-walu-secondary data-walu-music-title class="walu-ambient-title"></span><button type="button" data-walu-music-collapse title="Collapse music controls">−</button><button type="button" data-walu-secondary data-walu-music-dismiss title="Hide music controls; use the header Music button to restore">×</button>`;
    document.body.appendChild(ui);
    panel = document.createElement('div');
    panel.className = 'walu-music-panel';
    panel.setAttribute('data-walu-music-panel', 'true');
    panel.innerHTML = `<div class="walu-music-panel-head"><h3>🎼 Waluigi Site Playlist</h3><button type="button" class="walu-music-panel-close" data-walu-music-panel-close aria-label="Close music library">×</button></div><p>Includes dedicated Warizon checkout, Training Wing, and garlic-cart loops. Drag or collapse the control bar so it never covers the interface.</p><p><b>📱 Easy mobile mode:</b> use the phone button on the control bar for larger tap targets, single-column pages, readable tables, and phone-sized dialogs across the shop and Waluipedia.</p><div class="walu-music-list" data-walu-music-list></div><p style="margin-top:10px">Volume</p><input class="walu-music-volume" data-walu-music-volume type="range" min="0" max="1" step="0.01" value="${volume}">`;
    document.body.appendChild(panel);
    applyMobileMode(mobileMode);
    ui.hidden = dismissed;
    setCollapsed(collapsed);
    requestAnimationFrame(restorePosition);
    renderPlaylist();
    updateUi();
  }

  // Capture-phase event delegation makes the controls work even if the SPA adds
  // other click handlers later. Stop only these music-control clicks.
  document.addEventListener('click', event => {
    const target = event.target?.closest?.('#musicBtn,[data-walu-music-play],[data-walu-music-next],[data-walu-music-shuffle],[data-walu-music-panel-toggle],[data-walu-music-panel-close],[data-walu-music-track],[data-walu-music-collapse],[data-walu-music-dismiss],[data-walu-mobile-mode]');
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();
    if (target.matches('[data-walu-music-next]')) nextTrack();
    else if (target.matches('[data-walu-music-shuffle]')) shuffleTrack();
    else if (target.matches('[data-walu-music-panel-toggle]')) {
      showWidget(); panel?.classList.toggle('open'); positionPanel();
    }
    else if (target.matches('[data-walu-music-panel-close]')) panel?.classList.remove('open');
    else if (target.matches('[data-walu-mobile-mode]')) applyMobileMode(!mobileMode);
    else if (target.matches('[data-walu-music-collapse]')) setCollapsed(!collapsed);
    else if (target.matches('[data-walu-music-dismiss]')) {
      dismissed = true; localStorage.setItem('waluipediaAmbientDismissed', 'true');
      panel?.classList.remove('open'); if (ui) ui.hidden = true;
    }
    else if (target.matches('[data-walu-music-track]')) { trackIndex = Number(target.dataset.waluMusicTrack) || 0; step = 0; loopsOnTrack = 0; if (audio) nextTime = audio.currentTime + 0.12; updateUi(); if (!playing) start(); else confirmation('next'); }
    else { showWidget(); toggle(); }
    if (target.id === 'musicBtn') showWidget();
  }, true);

  // Dragging is limited to the ⠿ handle so music buttons never steal pointer
  // gestures from the shop. Position is clamped and persisted across pages.
  document.addEventListener('pointerdown', event => {
    const handle = event.target?.closest?.('[data-walu-music-drag]');
    if (!handle || !ui) return;
    event.preventDefault();
    const rect = ui.getBoundingClientRect();
    drag = { pointerId: event.pointerId, dx: event.clientX - rect.left, dy: event.clientY - rect.top };
    handle.setPointerCapture?.(event.pointerId);
    ui.classList.add('is-dragging');
    ui.style.right = 'auto'; ui.style.bottom = 'auto';
  }, true);

  document.addEventListener('pointermove', event => {
    if (!drag || event.pointerId !== drag.pointerId || !ui) return;
    event.preventDefault();
    const pos = clampWidgetPosition(event.clientX - drag.dx, event.clientY - drag.dy);
    ui.style.left = `${pos.left}px`; ui.style.top = `${pos.top}px`;
    positionPanel();
  }, true);

  const finishDrag = event => {
    if (!drag || event.pointerId !== drag.pointerId || !ui) return;
    const rect = ui.getBoundingClientRect();
    localStorage.setItem('waluipediaAmbientPosition', JSON.stringify({ left: rect.left, top: rect.top }));
    ui.classList.remove('is-dragging');
    drag = null;
  };
  document.addEventListener('pointerup', finishDrag, true);
  document.addEventListener('pointercancel', finishDrag, true);
  window.addEventListener('resize', () => {
    if (!ui || ui.hidden) return;
    const rect = ui.getBoundingClientRect();
    const pos = clampWidgetPosition(rect.left, rect.top);
    ui.style.left = `${pos.left}px`; ui.style.top = `${pos.top}px`;
    ui.style.right = 'auto'; ui.style.bottom = 'auto';
    positionPanel();
  });

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
    __v4: true,
    start, stop, toggle, nextTrack, randomTrack: shuffleTrack,
    setVolume(v) {
      volume = Math.max(0, Math.min(1, Number(v) || 0));
      localStorage.setItem(VOL_STORE, String(volume));
      if (master) master.gain.value = volume;
    },
    enable() { enabled = true; localStorage.setItem(STORE, 'on'); start(); },
    disable() { enabled = false; localStorage.setItem(STORE, 'off'); stop(); },
    setMobileMode(value) { applyMobileMode(value); },
    toggleMobileMode() { applyMobileMode(!mobileMode); },
    test() { confirmation('start'); },
    get mobileMode() { return mobileMode; },
    get playing() { return playing; },
    get track() { return currentTrack().name; }
  };
})();
