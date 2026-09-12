/**
 * ai-trace.js
 * Lightweight observability layer for NPC turn decisions.
 *
 * One row per NPC turn — captured live, held in a ring buffer, exported as
 * JSONL on demand. Zero behavior impact when AI_TRACE_ENABLED is false: every
 * recorder method short-circuits in O(1).
 *
 * Lifecycle (called from automation.js):
 *   beginTurn(combatant)           → open a partial row keyed by actor.id
 *   annotate(actorId, fields)      → merge fields into the partial row
 *   endTurn(combatant)             → finalise, push to ring buffer
 *
 * Inspection API (exposed via game.modules.get(MODULE_ID).api.trace):
 *   list({limit, actorId, round})  → array of trace rows
 *   last()                         → most recent trace row
 *   summary(opts)                  → formatted multiline string of last N turns
 *   download()                     → save buffer as .jsonl file
 *   clear()                        → empty buffer
 *
 * Storage: in-memory ring buffer, default 500 turns. Tunable via setting.
 * Persistence: none by design — traces are per-session debugging data,
 * not world state. Use download() to capture for post-mortem.
 */

import { MODULE_ID, getSetting, SETTINGS } from "./settings.js";
import { isProperName } from "./utils.js";

// ─── Buffer state ────────────────────────────────────────────────────────────
const _partial   = new Map();   // actorId → in-progress trace row
const _completed = [];          // ring buffer of finished rows

const DEFAULT_BUFFER = 500;
const HARD_CAP      = 5000;     // refuse to grow beyond this regardless of setting

function _bufferLimit() {
  try {
    const n = Number(getSetting(SETTINGS.AI_TRACE_BUFFER_SIZE) ?? DEFAULT_BUFFER);
    return Math.max(50, Math.min(HARD_CAP, n));
  } catch { return DEFAULT_BUFFER; }
}

function _enabled() {
  try { return getSetting(SETTINGS.AI_TRACE_ENABLED) === true; }
  catch { return false; }
}

function _autoLog() {
  try { return getSetting(SETTINGS.AI_TRACE_AUTO_LOG) === true; }
  catch { return false; }
}

// ─── Lifecycle ───────────────────────────────────────────────────────────────

/**
 * Open a new trace row for an NPC turn. Idempotent — repeated calls in the
 * same turn reset the row, which is the desired behaviour if a turn re-runs.
 */
/** Resolve the combatant's live token and ask whether its name is a proper noun. */
function _isProper(combatant) {
  try {
    const token = combatant?.token?.object
      ?? canvas?.tokens?.get?.(combatant?.tokenId ?? combatant?.token?.id)
      ?? combatant?.token
      ?? null;
    return isProperName(token);
  } catch {
    return false;
  }
}

export function beginTurn(combatant) {
  // Partial collection is ALWAYS on (cheap, in-memory) so cinematic features
  // (spotlight, debrief) work without requiring observability tracing to be
  // enabled. Only persistence to the ring buffer + logging is gated (endTurn).
  const actor = combatant?.actor;
  if (!actor) return;

  _partial.set(actor.id, {
    ts:          Date.now(),
    combatId:    game.combat?.id ?? null,
    round:       game.combat?.round ?? 0,
    turn:        game.combat?.turn ?? 0,
    actorId:     actor.id,
    actorName:   actor.name,
    actorIsProper: _isProper(combatant),
    tokenId:     combatant.tokenId ?? combatant.token?.id ?? null,
    _startMs:    performance.now(),
  });
}

/**
 * Merge fields into the current partial trace for this actor. Silent no-op if
 * no partial exists (e.g. annotate called before beginTurn — legitimate when
 * guards exit before the trace was opened).
 */
export function annotate(actorId, fields) {
  if (!actorId || !fields) return;
  const t = _partial.get(actorId);
  if (!t) return;
  // Shallow merge — nested fields (e.g. movement, action) replace wholesale.
  // Callers should compose any nested objects themselves before passing in.
  Object.assign(t, fields);
}

/**
 * Turn-complete subscribers (spotlight, debrief). Invoked with the finished row
 * on every endTurn, regardless of whether observability tracing is enabled.
 */
const _turnHandlers = new Set();
export function onTurnComplete(fn) { if (typeof fn === "function") _turnHandlers.add(fn); }

/**
 * Close out the partial trace, fire turn-complete subscribers, and — only when
 * tracing is enabled — push to the ring buffer and optionally console-log.
 * Always safe to call — missing partial is a silent no-op.
 */
export function endTurn(combatant) {
  const actor = combatant?.actor;
  if (!actor) return;
  const t = _partial.get(actor.id);
  if (!t) return;

  t.durationMs = Number((performance.now() - t._startMs).toFixed(2));
  delete t._startMs;
  _partial.delete(actor.id);

  // Notify cinematic subscribers first (independent of persistence).
  for (const fn of _turnHandlers) {
    try { fn(structuredClone(t)); } catch { /* subscriber errors never break a turn */ }
  }

  if (!_enabled()) return;

  const limit = _bufferLimit();
  _completed.push(t);
  while (_completed.length > limit) _completed.shift();

  if (_autoLog()) {
    // Single-line JSON makes copy/paste from devtools clean.
    console.log("[NCA-trace]", JSON.stringify(t));
  }
}

/**
 * Push a standalone, already-complete trace row directly into the buffer.
 * Used for decisions that happen OUTSIDE a turn (e.g. legendary actions fire
 * at other combatants' turn ends, when no partial row is open). The row gets
 * the same envelope fields as turn rows plus an `event` discriminator so
 * list()/summary() consumers can tell the two apart.
 *
 * @param {string} kind    e.g. "legendary"
 * @param {object} fields  payload merged into the row
 */
export function recordEvent(kind, fields = {}) {
  if (!_enabled()) return;
  const row = {
    ts:       Date.now(),
    event:    kind,
    combatId: game.combat?.id ?? null,
    round:    game.combat?.round ?? 0,
    turn:     game.combat?.turn ?? 0,
    ...fields,
  };

  const limit = _bufferLimit();
  _completed.push(row);
  while (_completed.length > limit) _completed.shift();

  if (_autoLog()) console.log("[NCA-trace]", JSON.stringify(row));
}

// ─── Inspection ──────────────────────────────────────────────────────────────

/**
 * Return a copy of the trace ring buffer, optionally filtered.
 *
 * @param {object} [opts]
 * @param {number} [opts.limit]    return at most N most-recent rows
 * @param {string} [opts.actorId]  filter to one actor
 * @param {number} [opts.round]    filter to one combat round
 */
export function list({ limit, actorId, round } = {}) {
  let rows = _completed;
  if (actorId) rows = rows.filter(r => r.actorId === actorId);
  if (round !== undefined) rows = rows.filter(r => r.round === round);
  if (limit && limit > 0) rows = rows.slice(-limit);
  return rows.map(r => structuredClone(r));
}

export function last()   { return _completed.length ? structuredClone(_completed[_completed.length - 1]) : null; }
export function size()   { return _completed.length; }
export function clear()  { _completed.length = 0; _partial.clear(); }

/**
 * Render a compact human-readable summary of the last N turns. Useful in chat
 * or console when you want a quick read on what's been happening without
 * eyeballing raw JSON.
 *
 * @param {object} [opts]
 * @param {number} [opts.limit=10]
 * @param {string} [opts.actorId]
 */
export function summary({ limit = 10, actorId } = {}) {
  const rows = list({ limit, actorId });
  if (rows.length === 0) return "[NCA-trace] no rows in buffer.";

  const lines = [`[NCA-trace] last ${rows.length} turn(s):`];
  for (const r of rows) {
    const beh   = r.behaviorScores
      ? Object.entries(r.behaviorScores)
          .map(([k, v]) => `${k}=${Math.round(v)}`)
          .join(" ")
      : "no-behavior";
    const tgt   = r.targetName ?? "—";
    const act   = r.actionType ?? "—";
    const move  = r.movement
      ? `${r.movement.spentFt ?? "?"}/${r.movement.budgetFt ?? "?"}ft` +
        (r.movement.usedDash ? "[D]" : "") +
        (r.movement.usedMemory ? "[LKP]" : "") +
        (r.movement.attackPositionValid === false ? "[noLOS]" : "")
      : "—";
    lines.push(
      `  R${r.round}T${r.turn} ${r.actorName.padEnd(18).slice(0,18)} ` +
      `→ ${r.behaviorDecision ?? "?"} ${act} on ${tgt} | ${move} | ${beh} | ${r.durationMs}ms`
    );
  }
  return lines.join("\n");
}

/**
 * Print the most recent trace summary to chat (GM-only whisper) for in-game
 * inspection without opening devtools.
 */
export async function postSummaryToChat(opts = {}) {
  const text = summary(opts);
  await ChatMessage.create({
    content: `<pre style="font-size:11px;line-height:1.3">${_escapeHtml(text)}</pre>`,
    whisper: ChatMessage.getWhisperRecipients("GM").map(u => u.id),
    speaker: { alias: "NCA Trace" },
  });
}

function _escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

/**
 * Build a downloadable JSONL blob and trigger save via Foundry's saveDataToFile.
 * One JSON object per line, suitable for `jq` / `pandas.read_json(lines=True)`.
 */
export function download(filename) {
  if (_completed.length === 0) {
    ui.notifications?.info(game.i18n.localize("NCA.Notify.TraceEmpty"));
    return;
  }
  const jsonl = _completed.map(r => JSON.stringify(r)).join("\n");
  const name  = filename ?? `nca-trace-${Date.now()}.jsonl`;
  // Foundry's helper — available since v10.
  saveDataToFile(jsonl, "application/jsonl", name);
}

// ─── Cleanup ─────────────────────────────────────────────────────────────────

Hooks.on("deleteCombat", () => {
  // Don't clear the buffer — analysing post-combat is the point. But drop any
  // dangling partials from interrupted turns so the next combat starts fresh.
  _partial.clear();
});
