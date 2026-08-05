// Wario Audio Bridge
// The bundled shop app owns a private WebAudio music loop (its own AudioContext +
// scheduler) that autostarts on the first click and is invisible to the site's
// 🎧 music controls. This bridge makes the site controls authoritative:
//   * mutes/stops the bundle's private context when site music is off,
//   * exposes one shared toggle used by both the shop chrome and Waluipedia,
//   * keeps the shop's `__warioSoundEnabled` SFX flag in sync with WarioSiteSounds.
// Load this BEFORE the shop bundle so the AudioContext patch is in place.
(() => {
  if (window.WarioAudioBridge?.__v1) return;

  const KEY = 'warioShopMusic';           // 'on' | 'off' (shared with the site player)
  const SFX_KEY = 'warioSiteSounds';
  let musicOn = localStorage.getItem(KEY) === 'on';   // default OFF: no surprise autoplay
  const contexts = new Set();

  // --- 1. Capture every AudioContext the bundle creates ---------------------
  const NativeCtx = window.AudioContext || window.webkitAudioContext;
  if (NativeCtx) {
    const Patched = function (...args) {
      const ctx = new NativeCtx(...args);
      contexts.add(ctx);
      // If music is off, keep the bundle's context parked immediately.
      if (!musicOn) { try { ctx.suspend(); } catch (e) {} }
      return ctx;
    };
    Patched.prototype = NativeCtx.prototype;
    try {
      Object.defineProperty(window, 'AudioContext', { value: Patched, writable: true, configurable: true });
      if (window.webkitAudioContext) {
        Object.defineProperty(window, 'webkitAudioContext', { value: Patched, writable: true, configurable: true });
      }
    } catch (e) { /* non-fatal: fall back to unpatched audio */ }
  }

  // The site's own players build their contexts through the same patched
  // constructor, so exempt them: we only park contexts while music is off, and
  // the site player explicitly resumes its own when the user presses play.
  function suspendAll() {
    contexts.forEach(ctx => { try { ctx.state === 'running' && ctx.suspend(); } catch (e) {} });
  }
  function resumeAll() {
    contexts.forEach(ctx => { try { ctx.state === 'suspended' && ctx.resume(); } catch (e) {} });
  }

  // --- 2. Public, shared control -------------------------------------------
  function setMusic(on) {
    musicOn = !!on;
    localStorage.setItem(KEY, musicOn ? 'on' : 'off');
    if (musicOn) {
      resumeAll();
      // Prefer the site's ambient player as the actual source of music.
      try { window.WaluipediaAmbient?.enable?.(); } catch (e) {}
    } else {
      try { window.WaluipediaAmbient?.disable?.(); } catch (e) {}
      suspendAll();
      // Re-park shortly after: the bundle may kick its scheduler on the same click.
      setTimeout(suspendAll, 60);
      setTimeout(suspendAll, 400);
    }
    document.dispatchEvent(new CustomEvent('wario-music-changed', { detail: { on: musicOn } }));
    return musicOn;
  }
  function toggleMusic() { return setMusic(!musicOn); }

  // --- 3. Keep the bundle's SFX flag aligned with the site setting ----------
  function syncSfx() {
    const on = localStorage.getItem(SFX_KEY) !== 'off';
    window.__warioSoundEnabled = on;
    return on;
  }
  syncSfx();

  // The bundle sets __warioSoundEnabled on mount; re-assert ours after load and
  // whenever the site toggles sounds.
  document.addEventListener('DOMContentLoaded', () => { syncSfx(); if (!musicOn) suspendAll(); });
  window.addEventListener('load', () => { syncSfx(); if (!musicOn) suspendAll(); });
  window.addEventListener('storage', e => {
    if (e.key === SFX_KEY) syncSfx();
    if (e.key === KEY) setMusic(localStorage.getItem(KEY) === 'on');
  });

  // Belt-and-braces: the bundle starts its loop on the first user gesture.
  // Park it again straight after if the user has music off.
  document.addEventListener('click', () => { if (!musicOn) setTimeout(suspendAll, 30); }, true);
  document.addEventListener('keydown', () => { if (!musicOn) setTimeout(suspendAll, 30); }, true);

  window.WarioAudioBridge = {
    __v1: true,
    setMusic, toggleMusic, syncSfx,
    get musicOn() { return musicOn; },
    get contextCount() { return contexts.size; }
  };
})();
