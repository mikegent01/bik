/**
 * spotlight.js — Turn Spotlight (cinematic layer).
 *
 * On an automated NPC's turn, optionally:
 *   - pans/zooms the camera to the acting token (GM-driven, broadcast so every
 *     client follows), and
 *   - shows a brief "turn card" naming the NPC and its intent (from narrate.js).
 *
 * Controlled by a single client-side CINEMATIC_MODE setting: "off" | "subtle" |
 * "full". Camera movement only happens in "full" and only when the separate
 * camera toggle is on — because yanking a player's viewport is the fastest way
 * to annoy a table, this is conservative by default.
 *
 * ── LIVE VERIFICATION REQUIRED ──────────────────────────────────────────────
 * Everything here is Foundry-layer (canvas pan, DOM overlay, socket relay) and
 * cannot be exercised by the Node harness. Verify in a live world with a second
 * connected client before relying on it.
 */

import { SOCKET_EVENT } from "./constants.js";
import { getSetting, SETTINGS } from "./settings.js";
import { log } from "./utils.js";
import { narrateIntent } from "./narrate.js";

const L = (key) => game.i18n.localize(key);

function mode() {
  try { return getSetting(SETTINGS.CINEMATIC_MODE) ?? "off"; }
  catch { return "off"; }
}

/**
 * Show the spotlight for an NPC turn. Call with the trace-style row so the
 * narration matches what the AI actually decided. Safe no-op when mode is off.
 *
 * @param {Token} token
 * @param {object} row  narrate.js-compatible decision row
 */
export function showTurnSpotlight(token, row) {
  const m = mode();
  if (m === "off") return;
  try {
    const line = narrateIntent(row ?? {}, { includeName: true });
    _renderCard(token?.name ?? row?.actorName ?? "NPC", line, token);

    if (m === "full" && getSetting(SETTINGS.SPOTLIGHT_CAMERA)) {
      _panTo(token);
    }

    // Broadcast so players see the same card / camera move.
    game.socket.emit(SOCKET_EVENT, {
      type: "spotlight",
      userId: game.user.id,
      tokenId: token?.id ?? row?.tokenId ?? null,
      name: token?.name ?? row?.actorName ?? "NPC",
      line,
      camera: m === "full" && getSetting(SETTINGS.SPOTLIGHT_CAMERA),
    });
  } catch (err) {
    log(`[Spotlight] render failed: ${err.message}`, "warn");
  }
}

/** Socket handler payload → local render (called from the shared bubble socket). */
export function handleSpotlightPayload(payload) {
  try {
    if (mode() === "off") return; // respect this client's preference
    const token = payload.tokenId
      ? canvas?.tokens?.placeables?.find(t => t.id === payload.tokenId) ?? null
      : null;
    _renderCard(payload.name ?? "NPC", payload.line ?? "", token);
    if (payload.camera && mode() === "full" && getSetting(SETTINGS.SPOTLIGHT_CAMERA)) {
      _panTo(token);
    }
  } catch (err) {
    log(`[Spotlight] remote render failed: ${err.message}`, "warn");
  }
}

let _cardEl = null;
let _cardTimer = null;

function _renderCard(name, line, token) {
  try {
    if (_cardTimer) { clearTimeout(_cardTimer); _cardTimer = null; }
    if (_cardEl) { _cardEl.remove(); _cardEl = null; }

    const portrait = token?.document?.texture?.src ?? token?.actor?.img ?? null;
    const el = document.createElement("div");
    el.className = "nca-spotlight-card nca-spotlight-in";
    el.innerHTML = `
      ${portrait ? `<div class="nca-spotlight-portrait" style="background-image:url('${portrait}')"></div>` : ""}
      <div class="nca-spotlight-body">
        <div class="nca-spotlight-name">${_escape(name)}</div>
        <div class="nca-spotlight-intent">${_escape(line)}</div>
      </div>`;
    document.body.appendChild(el);
    _cardEl = el;

    // Force reflow then transition in.
    void el.offsetWidth;
    el.classList.remove("nca-spotlight-in");

    _cardTimer = setTimeout(() => {
      el.classList.add("nca-spotlight-out");
      setTimeout(() => { el.remove(); if (_cardEl === el) _cardEl = null; }, 500);
    }, 2600);
  } catch (err) {
    log(`[Spotlight] card DOM failed: ${err.message}`, "warn");
  }
}

function _panTo(token) {
  try {
    if (!token || !canvas?.animatePan) return;
    canvas.animatePan({ x: token.center?.x ?? token.x, y: token.center?.y ?? token.y, duration: 500 });
  } catch { /* non-fatal */ }
}

function _escape(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}
