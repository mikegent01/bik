/**
 * dialogue-ui.js
 * Speech bubble rendering and optional chat log integration.
 *
 * Responsibilities:
 *  - Inject a floating speech bubble above a Foundry token
 *  - Manage bubble lifetime, fade in/out, and stack prevention
 *  - Optionally mirror speech to the chat log
 *
 * Architecture:
 *  - Bubbles are absolutely-positioned divs in the #tokens layer (or canvas parent)
 *  - Each token can only have ONE active bubble at a time
 *  - Duration is scaled by phrase length (min 2s, max 5s)
 *  - Fades use CSS transitions for performance — no JS animation loops
 *
 * Performance:
 *  - One DOM element per speaking token, cleaned up automatically
 *  - No per-frame work — purely event-driven
 *  - Handles multiple simultaneous speakers without overlap
 */

import { getSetting, SETTINGS } from "./settings.js";
import { SOCKET_EVENT } from "./constants.js";
import { log } from "./utils.js";
import {
  LANGUAGE_DESCRIPTORS,
  UNIVERSAL_LANGUAGES,
} from "./dialogue-registry.js";


// ─── Active bubble tracking ───────────────────────────────────────────────────
// tokenId → { element, timeoutId }
const _activeBubbles = new Map();

// Global simultaneous bubble cap
const MAX_SIMULTANEOUS_BUBBLES = 5;

// ─── Timing constants ─────────────────────────────────────────────────────────
const BUBBLE = {
  FADE_IN_MS:     200,
  FADE_OUT_MS:    400,
  MIN_DISPLAY_MS: 2_000,
  MAX_DISPLAY_MS: 5_000,
  MS_PER_CHAR:    60,    // base reading time scaling
};

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Display a speech bubble above the given token.
 * Clears any existing bubble for this token first.
 *
 * @param {Token}  token         The live canvas Token object (NOT TokenDocument)
 * @param {string} phrase        The text to display
 * @param {string} [languageDesc] If set, display this descriptor instead of the phrase
 */
export function showSpeechBubble(token, phrase, languageDesc = null) {
  if (!getSetting(SETTINGS.DIALOGUE_SPEECH_BUBBLES)) return;
  if (!token?.mesh?.visible && !token?.visible) return;

  // Enforce global simultaneous cap
  if (_activeBubbles.size >= MAX_SIMULTANEOUS_BUBBLES) {
    // Clear the oldest bubble to make room
    const oldest = _activeBubbles.keys().next().value;
    if (oldest) _clearBubble(oldest);
  }

  const tokenId     = token.id;
  const displayText = languageDesc
    ? `<em class="nca-bubble-lang">${_escapeHtml(languageDesc)}.</em>`
    : `"${_escapeHtml(phrase)}"`;

  // Remove any existing bubble for this token
  _clearBubble(tokenId);

  // Build the bubble element
  const el = _createBubbleElement(displayText, phrase);

  // Position it above the token and insert into the canvas container
  _mountBubble(el, token);

  // Calculate display duration
  const textLength = (languageDesc ?? phrase).length;
  const displayMs  = Math.min(
    BUBBLE.MAX_DISPLAY_MS,
    Math.max(BUBBLE.MIN_DISPLAY_MS, textLength * BUBBLE.MS_PER_CHAR)
  );

  // Fade in
  requestAnimationFrame(() => {
    el.classList.add("nca-bubble-visible");
  });

  // Schedule fade-out and removal
  const timeoutId = setTimeout(() => {
    _removeBubble(tokenId, el);
  }, displayMs);

  _activeBubbles.set(tokenId, { element: el, timeoutId, token });
}

// Re-anchor all live speech bubbles to their tokens whenever the canvas pans
// or zooms. Previously bubbles were positioned once on creation and stayed at
// that fixed screen pixel, so panning/zooming made them drift away from the
// token (the "dialogue box moves around when the screen does" report). The
// canvasPan hook fires on every pan/zoom frame; re-running _positionBubble
// keeps each bubble glued above its speaker. Registered once.
let _panHookRegistered = false;
let _panRafPending = false;

/** Reposition every live bubble, coalesced to one pass per animation frame. */
function _scheduleReanchor() {
  if (_panRafPending) return;
  _panRafPending = true;
  requestAnimationFrame(() => {
    _panRafPending = false;
    for (const { element, token } of _activeBubbles.values()) {
      if (element && token) {
        try { _positionBubble(element, token); } catch { /* ignore */ }
      }
    }
  });
}

export function registerBubbleReanchor() {
  if (_panHookRegistered) return;
  _panHookRegistered = true;

  // Camera movement (pan/zoom).
  Hooks.on("canvasPan", _scheduleReanchor);

  // Token movement (0.26.0 fix). canvasPan alone only tracked the CAMERA, so a
  // bubble stayed put while its token walked away. refreshToken fires on every
  // frame of the movement animation, so the bubble now rides along.
  Hooks.on("refreshToken", (token) => {
    if (!_activeBubbles.has(token?.id)) return;
    _scheduleReanchor();
  });

  // Safety net: a continuous ticker while any bubble is live, in case a
  // movement path emits no refreshToken on this core version. Costs nothing
  // when no bubbles exist (the callback returns immediately).
  try {
    canvas?.app?.ticker?.add(() => {
      if (_activeBubbles.size === 0) return;
      _scheduleReanchor();
    });
  } catch { /* ticker unavailable — hooks above still cover the common cases */ }
}

/**
 * Immediately remove any speech bubble for the given token.
 * @param {string} tokenId
 */
export function clearSpeechBubble(tokenId) {
  _clearBubble(tokenId);
}

/**
 * Post a speech line to the chat log (optional mirror).
 * Uses a lightweight non-automated chat message (no NCA header).
 *
 * @param {TokenDocument} tokenDoc
 * @param {string}        phrase
 * @param {string|null}   languageDesc
 */
export async function postDialogueChatMessage(tokenDoc, phrase, languageDesc = null) {
  if (!getSetting(SETTINGS.DIALOGUE_MIRROR_CHAT)) return;

  const speakerName = tokenDoc?.name ?? "Unknown";
  const content     = languageDesc
    ? `<div class="nca-dialogue-chat"><span class="nca-dialogue-name">${_escapeHtml(speakerName)}:</span> <em class="nca-dialogue-lang">${_escapeHtml(languageDesc)}.</em></div>`
    : `<div class="nca-dialogue-chat"><span class="nca-dialogue-name">${_escapeHtml(speakerName)}:</span> <span class="nca-dialogue-phrase">"${_escapeHtml(phrase)}"</span></div>`;

  try {
    await ChatMessage.create({
      content,
      speaker: ChatMessage.getSpeaker({ token: tokenDoc }),
      flags: { [MODULE_ID]: { dialogue: true } },
      style: CONST.CHAT_MESSAGE_STYLES?.IC ?? CONST.CHAT_MESSAGE_STYLES?.OTHER ?? 0,
    });
  } catch (err) {
    log(`[Dialogue] Failed to post chat message: ${err.message}`);
  }
}

// ─── Bubble DOM construction ──────────────────────────────────────────────────

function _createBubbleElement(displayText, rawPhrase) {
  const el        = document.createElement("div");
  el.className    = "nca-speech-bubble";
  el.dataset.raw  = rawPhrase ?? "";

  const inner     = document.createElement("div");
  inner.className = "nca-bubble-inner";
  inner.innerHTML = displayText;

  const tail      = document.createElement("div");
  tail.className  = "nca-bubble-tail";

  el.appendChild(inner);
  el.appendChild(tail);

  return el;
}

/**
 * Mount bubble into the DOM and position it above the token.
 *
 * Foundry V13 uses a PIXI.Application whose canvas element sits inside
 * #board.  We convert world-space token coordinates to screen-space using
 * the PIXI stage's world transform, then position a fixed-position div
 * over the top of the token.
 */
function _mountBubble(el, token) {
  // Always append to document.body so fixed positioning works correctly
  // regardless of which scrollable container Foundry is using.
  document.body.appendChild(el);
  _positionBubble(el, token);
}

function _positionBubble(el, token) {
  try {
    // Token world-space anchor: horizontally centred, top edge.
    //
    // IMPORTANT (0.26.0): use the LIVE placeable position, not the document's.
    // token.x/y on a Token placeable tracks the animated sprite during movement,
    // but if a TokenDocument is passed (or the placeable is stale) we'd read the
    // final snapped position instead — so the bubble would sit at the
    // destination while the token walked. Prefer the mesh/sprite position, then
    // the placeable's own x/y, and only then the document's.
    const live = canvas?.tokens?.get?.(token.id) ?? token;
    const mesh = live.mesh ?? null;
    const w = live.w ?? live.width ?? 0;

    const worldX = (mesh && Number.isFinite(mesh.x) ? mesh.x - w / 2 : live.x) + w / 2;
    const worldY = (mesh && Number.isFinite(mesh.y) ? mesh.y - (live.h ?? live.height ?? 0) / 2 : live.y);

    // Convert world → screen using the PIXI stage transform.
    // canvas.stage is the root PIXI.Container; its worldTransform maps
    // world units to CSS pixels relative to the canvas element.
    const stage = canvas?.stage;
    const canvasEl = canvas?.app?.canvas ?? canvas?.app?.view;

    let screenX, screenY;

    if (stage && canvasEl) {
      const t   = stage.worldTransform;
      // Apply affine transform: screen = world * scale + translation
      screenX = worldX * t.a + worldY * t.c + t.tx;
      screenY = worldX * t.b + worldY * t.d + t.ty;

      // stage coords are relative to the canvas element; add its page offset
      const rect = canvasEl.getBoundingClientRect();
      screenX += rect.left;
      screenY += rect.top;
    } else {
      // Hard fallback — centre of viewport
      screenX = window.innerWidth  / 2;
      screenY = window.innerHeight / 3;
    }

    el.style.position  = "fixed";
    el.style.left      = `${Math.round(screenX)}px`;
    el.style.top       = `${Math.round(screenY)}px`;
    // CSS transform: centre horizontally, push fully above the anchor point,
    // then add a small gap so the tail doesn't sit on the token sprite.
    el.style.transform = "translateX(-50%) translateY(calc(-100% - 6px))";
    el.style.zIndex    = "10000";
  } catch (err) {
    // Non-fatal: bubble appears in fallback position
    el.style.position  = "fixed";
    el.style.left      = "50%";
    el.style.top       = "25%";
    el.style.transform = "translateX(-50%) translateY(-100%)";
    el.style.zIndex    = "10000";
  }
}

// ─── Bubble lifecycle ─────────────────────────────────────────────────────────

function _removeBubble(tokenId, el) {
  el.classList.remove("nca-bubble-visible");
  el.classList.add("nca-bubble-fading");
  setTimeout(() => {
    el.remove();
  }, BUBBLE.FADE_OUT_MS);
  _activeBubbles.delete(tokenId);
}

function _clearBubble(tokenId) {
  const existing = _activeBubbles.get(tokenId);
  if (!existing) return;
  clearTimeout(existing.timeoutId);
  existing.element.remove();
  _activeBubbles.delete(tokenId);
}

// ─── Morale bubbles ───────────────────────────────────────────────────────────
//
// A morale bubble is a small floating indicator (e.g. "+5" green, "−12" red)
// that rises and fades above a token when its morale changes. Unlike speech
// bubbles, it is audience-gated: only users whose role meets the configured
// MORALE_VISIBLE_AUDIENCE threshold render it. The check runs per-client so
// the socket broadcast can be sent to everyone and each client self-filters.

const MORALE_BUBBLE = {
  DISPLAY_MS: 2_200,
  RISE_PX:    34,
};

/**
 * Map the MORALE_VISIBLE_AUDIENCE setting to a minimum Foundry user role.
 * @returns {number} CONST.USER_ROLES threshold
 */
function _moraleAudienceThreshold() {
  const R = CONST.USER_ROLES;
  switch (getSetting(SETTINGS.MORALE_VISIBLE_AUDIENCE)) {
    case "player":    return R.PLAYER;     // 1 — everyone
    case "trusted":   return R.TRUSTED;    // 2
    case "assistant": return R.ASSISTANT;  // 3
    case "gm":
    default:          return R.GAMEMASTER; // 4 — GM only
  }
}

/**
 * True if the local user is allowed to see morale bubbles right now.
 */
function _localUserSeesMorale() {
  if (!getSetting(SETTINGS.MORALE_VISIBLE)) return false;
  return (game.user?.role ?? 0) >= _moraleAudienceThreshold();
}

/**
 * Render a morale-change bubble above a token on THIS client (if permitted).
 *
 * @param {Token}  token  live canvas Token
 * @param {number} delta  signed morale change (positive = gain, negative = loss)
 */
export function showMoraleBubble(token, delta) {
  if (!_localUserSeesMorale()) return;
  if (!token) return;
  if (!token.visible && !token.mesh?.visible) return;
  const d = Math.round(Number(delta) || 0);
  if (d === 0) return;

  const el = document.createElement("div");
  el.className = `nca-morale-bubble ${d > 0 ? "nca-morale-gain" : "nca-morale-loss"}`;
  el.textContent = `${d > 0 ? "+" : "−"}${Math.abs(d)}`;

  document.body.appendChild(el);
  _positionBubble(el, token);

  // Rise-and-fade animation driven by CSS transition on the transform/opacity.
  requestAnimationFrame(() => {
    el.classList.add("nca-morale-visible");
    el.style.transform =
      `translateX(-50%) translateY(calc(-100% - 6px - ${MORALE_BUBBLE.RISE_PX}px))`;
  });

  setTimeout(() => {
    el.classList.add("nca-morale-fading");
    setTimeout(() => el.remove(), BUBBLE.FADE_OUT_MS);
  }, MORALE_BUBBLE.DISPLAY_MS);
}

/**
 * Broadcast a morale bubble to all clients. Each client self-filters by role,
 * so we always emit; non-permitted clients simply render nothing.
 *
 * @param {string} tokenId
 * @param {number} delta
 */
export function broadcastMoraleBubble(tokenId, delta) {
  if (!getSetting(SETTINGS.MORALE_VISIBLE)) return;
  // Render locally first (the GM/automation client)
  const token = canvas?.tokens?.placeables?.find(t => t.id === tokenId) ?? null;
  if (token) showMoraleBubble(token, delta);
  // Then tell everyone else
  game.socket.emit(SOCKET_EVENT, { type: "moraleBubble", tokenId, delta, userId: game.user.id });
}

// ─── Socket: broadcast bubbles to all clients ────────────────────────────────
//
// The GM (or whoever runs the automation) is the only client that calls
// showSpeechBubble directly. We emit a socket message so every other connected
// client also renders the bubble locally, resolving language display for their
// own player characters.
//
// Registration must happen after the game is ready (called from main.js / init).

// ─── Action banner (legendary / lair cut-in) ─────────────────────────────────
//
// A brief animated banner that sweeps across the screen when a boss acts
// outside its turn, so the table registers the interrupt. Client-gated by the
// LEGENDARY_BANNER setting (checked by the caller).

let _bannerActive = false;
let _bannerEl = null;
let _activeBannerGate = null;

/**
 * Resolves when no persistent (held) banner is active. Automation entry points
 * await this so NO turn can start while the GM is holding a legendary pause —
 * regardless of which code path triggered the turn (boundary, unpause, etc.).
 */
export function awaitBannerGate() {
  return _activeBannerGate ?? Promise.resolve();
}

/**
 * Synchronous probe: is a legendary pause currently being held?
 * Used by the combat-advance guard, which must answer immediately (a hook
 * returning false is what actually cancels the update).
 */
export function isBannerHeld() {
  return _activeBannerGate !== null;
}

/**
 * @param {object} opts
 * @param {string} opts.title     big line, e.g. "LEGENDARY ACTION"
 * @param {string} opts.subtitle  small line, e.g. "Ancient Red Dragon — Tail Attack"
 * @param {string} [opts.kind]    "legendary" | "lair"
 */
export function showActionBanner({ title, subtitle, kind = "legendary", persistent = false, showContinue = false, onContinue = null, _retries = 0 } = {}) {
  try {
    if (_bannerActive && !persistent) {
      // Wait for the current banner to clear — but never spin forever. A HELD
      // banner (legendary pause) stays up until the GM clicks Continue, so an
      // uncapped retry would leak timers for the whole hold. ~6s then give up.
      if (_retries >= 15) {
        log("[Banner] dropped — another banner is still held.", "warn");
        return null;
      }
      setTimeout(() => showActionBanner({ title, subtitle, kind, _retries: _retries + 1 }), 400);
      return null;
    }
    if (persistent) dismissActionBanner();  // a held banner supersedes any transient one
    _bannerActive = true;
    const el = document.createElement("div");
    el.className = `nca-action-banner nca-banner-${kind}${persistent ? " nca-banner-persistent" : ""}`;
    el.innerHTML = `
      <div class="nca-banner-sheen"></div>
      <div class="nca-banner-text">
        <div class="nca-banner-title">${_escapeHtml(title ?? "")}</div>
        ${subtitle ? `<div class="nca-banner-subtitle">${_escapeHtml(subtitle)}</div>` : ""}
      </div>
      ${showContinue ? `<button type="button" class="nca-banner-continue" data-nca-continue><i class="fas fa-play"></i> ${_escapeHtml(game.i18n.localize("NCA.Banner.Continue"))}</button>` : ""}`;
    document.body.appendChild(el);
    _bannerEl = el;
    requestAnimationFrame(() => el.classList.add("nca-banner-in"));

    if (showContinue && typeof onContinue === "function") {
      el.querySelector("[data-nca-continue]")?.addEventListener("click", (ev) => { ev.preventDefault(); onContinue(); });
    }

    if (!persistent) {
      setTimeout(() => {
        el.classList.remove("nca-banner-in");
        el.classList.add("nca-banner-out");
        setTimeout(() => { el.remove(); if (_bannerEl === el) _bannerEl = null; _bannerActive = false; }, 600);
      }, 2200);
    }
    return el;
  } catch (err) {
    _bannerActive = false;
    log(`[Banner] render failed: ${err.message}`, "warn");
    return null;
  }
}

/** Remove the current banner immediately (used to clear a persistent one). */
export function dismissActionBanner() {
  try {
    if (_bannerEl) {
      const el = _bannerEl;
      el.classList.remove("nca-banner-in");
      el.classList.add("nca-banner-out");
      setTimeout(() => el.remove(), 400);
      _bannerEl = null;
    }
  } catch { /* ignore */ }
  _bannerActive = false;
}

/**
 * Show the banner locally AND broadcast it so every connected client sees the
 * same beat. Callers gate on the relevant world setting before invoking.
 */
export function broadcastActionBanner({ title, subtitle, kind = "legendary" } = {}) {
  showActionBanner({ title, subtitle, kind });
  try {
    game.socket.emit(SOCKET_EVENT, { type: "actionBanner", title, subtitle, kind, userId: game.user.id });
  } catch { /* socket unavailable — local banner already shown */ }
}

/**
 * Show a PERSISTENT banner with a GM-only Continue button and broadcast the
 * held banner to every client. Resolves when the GM clicks Continue (or after a
 * safety timeout, so combat can never hang). Players see the held banner but no
 * button; a dismiss is broadcast on resolve.
 */
export function broadcastActionBannerContinue({ title, subtitle, kind = "legendary", timeoutMs = 60000 } = {}) {
  const gate = new Promise((resolve) => {
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(safety);
      if (_activeBannerGate === gate) _activeBannerGate = null;
      dismissActionBanner();
      try { game.socket.emit(SOCKET_EVENT, { type: "bannerDismiss", userId: game.user.id }); } catch { /* ignore */ }
      resolve();
    };
    const safety = setTimeout(finish, Math.max(5000, timeoutMs));
    showActionBanner({ title, subtitle, kind, persistent: true, showContinue: true, onContinue: finish });
    try {
      game.socket.emit(SOCKET_EVENT, { type: "actionBanner", title, subtitle, kind, persistent: true, userId: game.user.id });
    } catch { /* socket unavailable */ }
  });
  _activeBannerGate = gate;
  return gate;
}

export function registerBubbleSocket() {
  game.socket.on(SOCKET_EVENT, payload => {
    // Hardening: only GM-driven automation may broadcast on this namespace.
    // (Handlers are render-only, but players share the socket, so verify.)
    const sender = payload?.userId ? game.users?.get(payload.userId) : null;
    if (!sender?.isGM) return;

    // Action banners (legendary / lair) — world settings gate at the source.
    // Persistent banners are held on remote clients until a bannerDismiss.
    if (payload?.type === "actionBanner") {
      showActionBanner({ title: payload.title, subtitle: payload.subtitle, kind: payload.kind, persistent: payload.persistent === true });
      return;
    }
    if (payload?.type === "bannerDismiss") {
      dismissActionBanner();
      return;
    }

    // Turn Spotlight cards — rendered per-client (respects each client's mode).
    if (payload?.type === "spotlight") {
      import("./spotlight.js").then(({ handleSpotlightPayload }) => handleSpotlightPayload(payload));
      return;
    }

    // Morale bubbles — audience-gated per client inside showMoraleBubble.
    if (payload?.type === "moraleBubble") {
      const { tokenId, delta } = payload;
      if (!tokenId) return;
      const token = canvas?.tokens?.placeables?.find(t => t.id === tokenId) ?? null;
      if (token) showMoraleBubble(token, delta);
      return;
    }

    if (payload?.type !== "speechBubble") return;

    const { tokenId, phrase } = payload;
    if (!tokenId || !phrase) return;
    if (!getSetting(SETTINGS.DIALOGUE_SPEECH_BUBBLES)) return;

    // Find the live canvas token by ID
    const token = canvas?.tokens?.placeables?.find(t => t.id === tokenId) ?? null;
    if (!token) return;

    // Language is resolved locally for this client
    showSpeechBubble(token, phrase, null);
  });
}

/**
 * Broadcast a speech bubble event to all OTHER clients.
 * Called by the automation runner after showing the local bubble.
 *
 * @param {string} tokenId
 * @param {string} phrase    The raw (untranslated) phrase
 */
export function broadcastSpeechBubble(tokenId, phrase) {
  if (!getSetting(SETTINGS.DIALOGUE_SPEECH_BUBBLES)) return;
  game.socket.emit(SOCKET_EVENT, { type: "speechBubble", tokenId, phrase, userId: game.user.id });
}

// ─── Per-client language resolution ──────────────────────────────────────────
//
// Each client resolves whether this client's player characters understand the
// NPC's language.  This mirrors the logic in dialogue-manager._resolveLanguageDisplay
// but operates on local PC actor data.

function _resolveLocalLanguageDisplay(tokenDoc, _phrase) {
  if (!getSetting(SETTINGS.DIALOGUE_TRANSLATE_LANGUAGES)) return null;

  const actor = tokenDoc?.actor;
  if (!actor) return null;

  // NPC languages
  const npcLangs = _getActorLangs(actor);
  if (npcLangs.length === 0) return null;
  if (npcLangs.some(l => UNIVERSAL_LANGUAGES.has(l))) return null;

  // Player-character languages — only tokens owned by a player on this client
  const pcLangs = _getLocalPCLanguages();
  if (npcLangs.some(l => pcLangs.has(l))) return null;

  // Not understood
  for (const lang of npcLangs) {
    if (LANGUAGE_DESCRIPTORS[lang]) return LANGUAGE_DESCRIPTORS[lang];
  }
  const pretty = npcLangs[0];
  return `growls something in ${pretty.charAt(0).toUpperCase() + pretty.slice(1)}`;
}

function _getActorLangs(actor) {
  try {
    const langs = actor.system?.traits?.languages?.value;
    if (!langs) return [];
    const arr = Array.isArray(langs) ? langs : [...(langs ?? [])];
    return arr.map(l => String(l).toLowerCase().trim()).filter(Boolean);
  } catch { return []; }
}

function _getLocalPCLanguages() {
  const langs = new Set();
  try {
    for (const token of canvas?.tokens?.placeables ?? []) {
      if (!token.actor?.hasPlayerOwner) continue;
      if (token.actor.type !== "character") continue;
      for (const l of _getActorLangs(token.actor)) langs.add(l);
    }
  } catch { /* non-fatal */ }
  return langs;
}

// ─── Scale helper ─────────────────────────────────────────────────────────────

function _applyBubbleScale() {
  try {
    const scale = Number(getSetting(SETTINGS.DIALOGUE_BUBBLE_SCALE) ?? 1.0);
    document.documentElement.style.setProperty("--nca-bubble-scale", String(scale));
  } catch { /* non-fatal */ }
}

// Clear all bubbles when combat ends
Hooks.on("deleteCombat", () => {
  for (const [tokenId] of _activeBubbles) {
    _clearBubble(tokenId);
  }
});

// ─── Utility ──────────────────────────────────────────────────────────────────

function _escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
