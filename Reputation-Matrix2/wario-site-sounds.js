// Shared Wario/Waluipedia UI sound effects.
// Small WebAudio synth cues: no large audio files, unlocks on user gesture.
(() => {
  if (window.WarioSiteSounds?.__v3) return;

  const STORAGE_KEY = 'warioSiteSounds';
  let enabled = localStorage.getItem(STORAGE_KEY) !== 'off';
  let ctx = null;
  let master = null;
  let lastHover = 0;
  let lastHoverItem = null;   // which control last played the hover cue (stops repeats)
  let lastInput = 0;
  let lastAnyClick = 0;
  let lastRoute = location.hash;

  const notes = {
    C2: 65.41, D2: 73.42, E2: 82.41, F2: 87.31, G2: 98, A2: 110, B2: 123.47,
    C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196, A3: 220, B3: 246.94,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880, B5: 987.77,
    C6: 1046.5, D6: 1174.66
  };

  function allowed() {
    return enabled;
  }

  function ensureAudio() {
    if (!allowed()) return null;
    if (!ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return null;
      try {
        ctx = new AudioContext();
        master = ctx.createGain();
        master.gain.value = 0.22;
        master.connect(ctx.destination);
      } catch(e) {
        console.warn('[WarioSiteSounds] AudioContext creation failed:', e);
        return null;
      }
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {
        console.warn('[WarioSiteSounds] AudioContext resume failed, requires user gesture');
      });
      return null;
    }
    return ctx;
  }

  function tone(note, start, length = 0.075, type = 'square', volume = 0.08, endFreq = null) {
    const audio = ensureAudio();
    if (!audio || !master) return;
    const freq = typeof note === 'number' ? note : notes[note];
    if (!freq) return;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    const filter = audio.createBiquadFilter();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, start + length);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(type === 'sawtooth' ? 1600 : 2600, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, start + length);
    osc.connect(filter).connect(gain).connect(master);
    osc.start(start);
    osc.stop(start + length + 0.02);
  }

  function noise(start, length = 0.045, volume = 0.035, highpass = 5000) {
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
    filter.frequency.value = highpass;
    gain.gain.setValueAtTime(volume, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + length);
    source.connect(filter).connect(gain).connect(master);
    source.start(start);
    source.stop(start + length);
  }

  function arpeggio(sequence, t, step = 0.055, type = 'square', volume = 0.05, length = 0.08) {
    sequence.forEach((note, i) => tone(note, t + i * step, length, type, volume * Math.max(0.45, 1 - i * 0.08)));
  }

  function play(kind = 'click') {
    const audio = ensureAudio();
    if (!audio) return;
    const t = audio.currentTime + 0.006;
    switch (kind) {
      case 'hover':
        tone('E5', t, 0.045, 'sine', 0.038);
        tone('B5', t + 0.022, 0.035, 'sine', 0.018);
        break;
      case 'click':
        tone('D5', t, 0.055, 'square', 0.055);
        tone('A4', t + 0.04, 0.05, 'triangle', 0.035);
        break;
      case 'nav':
        arpeggio(['A3', 'D4', 'F4'], t, 0.055, 'triangle', 0.065, 0.095);
        break;
      case 'article':
        arpeggio(['D4', 'F4', 'A4', 'D5'], t, 0.06, 'sine', 0.055, 0.16);
        noise(t + 0.03, 0.035, 0.012, 8000);
        break;
      case 'page':
        tone('F4', t, 0.11, 'sine', 0.04);
        tone('C5', t + 0.09, 0.15, 'sine', 0.035);
        noise(t + 0.015, 0.08, 0.012, 6500);
        break;
      case 'search-open':
        arpeggio(['C5', 'E5', 'G5'], t, 0.035, 'sine', 0.035, 0.075);
        break;
      case 'search-type':
        tone(Math.random() < 0.5 ? 'G5' : 'A5', t, 0.025, 'sine', 0.018);
        break;
      case 'search-result':
        arpeggio(['G4', 'B4', 'D5'], t, 0.045, 'triangle', 0.04, 0.09);
        break;
      case 'select':
        tone('C5', t, 0.045, 'square', 0.055);
        tone('E5', t + 0.04, 0.045, 'square', 0.048);
        break;
      case 'success':
        arpeggio(['C5', 'E5', 'G5', 'C6'], t, 0.055, 'square', 0.058, 0.09);
        break;
      case 'error':
        tone('C4', t, 0.075, 'sawtooth', 0.06);
        tone('B3', t + 0.06, 0.095, 'sawtooth', 0.052);
        break;
      case 'coin':
        tone('G5', t, 0.05, 'square', 0.06);
        tone('C6', t + 0.045, 0.09, 'square', 0.05);
        noise(t + 0.015, 0.025, 0.018);
        break;
      case 'dice':
        noise(t, 0.055, 0.032, 3500);
        tone('D5', t + 0.035, 0.055, 'square', 0.038);
        tone('A5', t + 0.09, 0.07, 'square', 0.032);
        break;
      case 'theme':
        arpeggio(['A4', 'C5', 'E5', 'A5'], t, 0.04, 'triangle', 0.045, 0.085);
        break;
      case 'login':
        arpeggio(['E4', 'G4', 'B4'], t, 0.06, 'triangle', 0.05, 0.11);
        break;
      case 'open':
        tone('G4', t, 0.09, 'triangle', 0.05);
        tone('C5', t + 0.08, 0.12, 'triangle', 0.045);
        break;
      case 'close':
        tone('C5', t, 0.06, 'triangle', 0.045);
        tone('G4', t + 0.05, 0.08, 'triangle', 0.04);
        break;
      case 'wah':
        tone('A4', t, 0.08, 'sawtooth', 0.04, notes.D4);
        tone('D5', t + 0.075, 0.12, 'square', 0.042, notes.A4);
        break;
      default:
        tone('D5', t, 0.055, 'square', 0.05);
        tone('A4', t + 0.045, 0.05, 'triangle', 0.035);
    }
  }

  function interactiveFrom(target) {
    const selector = 'button,a,[role="button"],summary,select,input[type="checkbox"],input[type="radio"],.card,.arttile,.result-card,.timeline-event,.nav-link,.tab,.category-pill,.brand,.pill,.chip,.tag,.wiki-card,.wiki-home-cat-card,.wiki-result,.res-item,.arttile,.navitem,.sideitem,.menu-item,.result,.book-card,.faction-card,.cur-card,.currency-card,.wallet-card,.bank-card,.shop-item-tile,.rate-row,.rate,.convert-box,.topbar [class],tr,li,img,[onclick],[tabindex]';
    const direct = target?.closest?.(selector);
    if (direct) return direct;
    // Some React/generated Battlefield controls are plain div/span nodes with cursor:pointer.
    let node = target?.nodeType === 1 ? target : target?.parentElement;
    for (let depth = 0; node && depth < 5 && node !== document.body; depth++, node = node.parentElement) {
      try {
        const style = window.getComputedStyle(node);
        if (style.cursor === 'pointer' || node.onclick || node.getAttribute('role') === 'button') return node;
      } catch {}
    }
    return null;
  }

  function classifyClick(item) {
    const label = (item.textContent || item.getAttribute('aria-label') || item.id || item.title || '').toLowerCase();
    const href = item.getAttribute?.('href') || '';
    const route = href || item.dataset?.route || location.hash || '';
    if (item.id === 'randomBtn' || /random|🎲/.test(label)) return 'dice';
    if (item.id === 'themeBtn' || /theme|🌙|☀️/.test(label)) return 'theme';
    if (item.id === 'loginBtn' || /login|operator|profile|👤/.test(label)) return 'login';
    if (item.id === 'musicBtn' || /music|playlist|🎧|🎶|▶|⏭|🔀/.test(label)) return 'select';
    if (/article\//.test(route) || /article|read|field journal|waluipedia/.test(label)) return 'article';
    if (/search|filter/.test(label)) return 'search-open';
    if (/close|delete|remove|cancel|dismiss|sold out/.test(label)) return 'close';
    if (/buy|add|purchase|coin|gold|checkout|sync|save|complete/.test(label)) return 'coin';
    if (/error|failed|danger|warning/.test(label)) return 'error';
    if (item.matches('a[href]')) return 'nav';
    if (item.matches('select,input')) return 'select';
    return 'click';
  }

  document.addEventListener('pointerdown', ensureAudio, { passive: true, once: true });
  document.addEventListener('keydown', ensureAudio, { passive: true, once: true });

  document.addEventListener('pointerdown', event => {
    const item = interactiveFrom(event.target);
    if (!item) return;
    // Unlock + immediate tactile downbeat; click handler may add a more specific cue.
    if (event.pointerType !== 'mouse') play('click');
  }, true);

  document.addEventListener('pointerover', event => {
    const item = interactiveFrom(event.target);
    if (!item) { lastHoverItem = null; return; }
    // Ignore bubbling from inside the same control (e.g. an icon <span> in a button).
    if (item.contains(event.relatedTarget)) return;
    // The cue is once PER ELEMENT, not per unit of time. A purely time-based throttle
    // let a slow mouse re-trigger the same inline link over and over, because browsers
    // re-fire pointerover as the cursor crosses text nodes / when a hover card
    // repositions under the pointer. Remembering the last element fixes the repeat.
    if (item === lastHoverItem) return;
    const now = performance.now();
    // Rate-limit fast sweeps, but do NOT claim the element yet — otherwise a throttled
    // first hover would mark it "already played" and it would stay silent until you
    // left and came back.
    if (now - lastHover < 110) return;
    lastHoverItem = item;
    lastHover = now;
    play('hover');
  }, true);

  // Leaving a control clears it so re-entering later legitimately plays again.
  document.addEventListener('pointerout', event => {
    if (lastHoverItem && event.target === lastHoverItem &&
        !lastHoverItem.contains(event.relatedTarget)) lastHoverItem = null;
  }, true);

  document.addEventListener('focusin', event => {
    if (event.target?.matches?.('#search,[type="search"],input[type="text"],textarea')) play('search-open');
  }, true);

  document.addEventListener('input', event => {
    const target = event.target;
    if (!target?.matches?.('#search,[type="search"],input[type="text"],textarea')) return;
    const now = performance.now();
    if (now - lastInput < 70) return;
    lastInput = now;
    play(target.id === 'search' ? 'search-type' : 'select');
  }, true);

  document.addEventListener('click', event => {
    const now = performance.now();
    if (now - lastAnyClick < 45) return;
    lastAnyClick = now;
    const item = interactiveFrom(event.target);
    if (item) return play(classifyClick(item));
    // Battlefield and generated pages often use plain divs/spans as clickable UI.
    // Give every real click a soft tap so browsing never feels silent.
    if (event.target && event.target !== document.body && event.target !== document.documentElement) play('click');
  }, true);

  document.addEventListener('change', event => {
    if (event.target?.matches?.('select,input')) play('select');
  }, true);

  document.addEventListener('keydown', event => {
    if (event.key === '/' && !/input|textarea|select/i.test(document.activeElement?.tagName || '')) play('search-open');
    if (event.key === 'Escape') play('close');
    if (event.key === 'Enter' && document.activeElement?.id === 'search') play('search-result');
  }, true);

  window.addEventListener('hashchange', () => {
    if (location.hash === lastRoute) return;
    lastRoute = location.hash;
    if (/\/article\//.test(location.hash)) play('article');
    else play('page');
  });

  // Waluipedia-specific mutation cue: when the SPA swaps content, give a soft page-settle sound.
  let contentDebounce = null;
  const observeContent = () => {
    const content = document.getElementById('content');
    if (!content || content.dataset.warioSoundObserved) return;
    content.dataset.warioSoundObserved = 'true';
    new MutationObserver(() => {
      clearTimeout(contentDebounce);
      contentDebounce = setTimeout(() => {
        if (/\/article\//.test(location.hash)) play('article');
      }, 180);
    }).observe(content, { childList: true, subtree: false });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', observeContent);
  else observeContent();

  window.WarioSiteSounds = {
    __v3: true,
    play,
    enable() { enabled = true; localStorage.setItem(STORAGE_KEY, 'on'); ensureAudio(); play('success'); },
    disable() { enabled = false; localStorage.setItem(STORAGE_KEY, 'off'); },
    setEnabled(value) { value ? this.enable() : this.disable(); },
    get enabled() { return enabled; }
  };
})();
