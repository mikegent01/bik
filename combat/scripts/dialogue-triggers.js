/**
 * dialogue-triggers.js
 * Combat event hooks that fire NPC dialogue at appropriate moments.
 *
 * Responsibilities:
 *  - Hook into: combatTurnChange, combatant defeated, HP changes,
 *    morale breaks, automation action events, attack execution
 *  - Resolve archetype, token, and speech state for each event
 *  - Call dialogue-manager and dialogue-ui to display phrases
 *
 * Design:
 *  - All hooks are lightweight; dialogue fires async without blocking combat
 *  - Uses a shared NCA event bus (globalThis.__NCA_DIALOGUE_BUS__) that
 *    automation.js can push events to without creating a circular import
 *  - Falls back gracefully if combat, token, or actor is missing
 */

import { MODULE_ID, getSetting, SETTINGS } from "./settings.js";
import { resolveArchetypes } from "./archetypes.js";
import { getMoraleBracket, getMorale } from "./morale.js";
import { getSpeechPhrase, getEffortNoise, markFirstEngagement } from "./dialogue-manager.js";
import { showSpeechBubble, postDialogueChatMessage, broadcastSpeechBubble } from "./dialogue-ui.js";
import { log } from "./utils.js";

// ─── First-engagement tracking ────────────────────────────────────────────────
const _firstEngagementFired = new Set(); // tokenIds that have already spoken engagement

// ─── Dialogue event bus ───────────────────────────────────────────────────────
// automation.js calls globalThis.__NCA_DIALOGUE_BUS__.emit(event, payload)
// so this module doesn't need to import automation.js (avoids circular imports).

const _bus = {
  _handlers: new Map(),
  on(event, fn) {
    if (!this._handlers.has(event)) this._handlers.set(event, []);
    this._handlers.get(event).push(fn);
  },
  emit(event, payload) {
    const handlers = this._handlers.get(event) ?? [];
    for (const fn of handlers) {
      try { fn(payload); } catch (err) { log(`[Dialogue] Bus error (${event}): ${err.message}`); }
    }
  },
};

globalThis.__NCA_DIALOGUE_BUS__ = _bus;

// ─── Registration ─────────────────────────────────────────────────────────────

export function registerDialogueTriggers() {
  // ── Turn start — first engagement bark ──────────────────────────────────
  Hooks.on("combatTurnChange", (combat) => {
    if (!_dialogueEnabled()) return;
    const combatant = combat?.combatant;
    if (!combatant) return;
    const actor = combatant.actor;
    if (!actor || actor.type !== "npc" || actor.hasPlayerOwner) return;

    _scheduleAsync(() => _onTurnStart(combatant));
  });

  // ── Combatant defeated — death bark ─────────────────────────────────────
  Hooks.on("updateCombatant", (combatant, changes) => {
    if (!_dialogueEnabled()) return;
    if (!changes.defeated) return;
    const actor = combatant.actor;
    if (!actor || actor.type !== "npc") return;

    _scheduleAsync(() => _onDefeated(combatant));
  });

  // ── HP change — damage taken / bloodied detection ────────────────────────
  Hooks.on("updateActor", (actor, changes) => {
    if (!_dialogueEnabled()) return;
    if (actor.type !== "npc" || actor.hasPlayerOwner) return;

    const newHp = changes?.system?.attributes?.hp?.value;
    if (newHp === undefined) return;

    _scheduleAsync(() => _onActorHpChanged(actor, newHp));
  });

  // ── Morale-triggered barks ────────────────────────────────────────────────
  // The morale system can fire a bark when morale collapses below rout threshold.
  // automation.js emits this on the bus after evaluateMorale.
  _bus.on("morale-rout", ({ combatant }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onMoraleRout(combatant));
  });

  _bus.on("morale-shaken", ({ combatant }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onMoraleShaken(combatant));
  });

  // ── Attack start — effort noise ───────────────────────────────────────────
  _bus.on("attack-start", ({ combatant, item }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onAttackStart(combatant, item));
  });

  // ── Attack hit — attack bark ──────────────────────────────────────────────
  _bus.on("attack-hit", ({ combatant, target, roll }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onAttackHit(combatant, target, roll));
  });

  // ── Kill — defeat a target ───────────────────────────────────────────────
  _bus.on("kill", ({ combatant, target }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onKill(combatant, target));
  });

  // ── Retreat ───────────────────────────────────────────────────────────────
  _bus.on("retreat", ({ combatant }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onRetreat(combatant));
  });

  // ── Ally died nearby ─────────────────────────────────────────────────────
  _bus.on("ally-died", ({ observer, dead }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onAllyDied(observer, dead));
  });

  // ── Tactical callout ─────────────────────────────────────────────────────
  _bus.on("tactical", ({ combatant }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onTactical(combatant));
  });

  // ── Spell cast — caster bark ─────────────────────────────────────────────
  // Caster archetypes (controller/warpriest/summoner/blaster) have dedicated
  // "spell" pools; everyone else falls back to their tactical pool via the
  // dialogue-manager CONTEXT_FALLBACK map.
  _bus.on("spell-cast", ({ combatant, spellName }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onSpellCast(combatant, spellName));
  });

  // ── Legendary / lair action — boss bark ──────────────────────────────────
  // A boss acting outside its turn is a dramatic beat; let it taunt. Uses the
  // "tactical" pool as fallback for archetypes without a dedicated boss line.
  _bus.on("legendary-action", ({ combatant }) => {
    if (!_dialogueEnabled()) return;
    _scheduleAsync(() => _onBossAction(combatant));
  });

  log("[Dialogue] Triggers registered.");
}

// ─── Event handlers ───────────────────────────────────────────────────────────

async function _onTurnStart(combatant) {
  const tokenDoc = combatant.token;
  if (!tokenDoc) return;
  const actor = combatant.actor;

  // Only fire engagement bark once per combat per token
  const wasFirst = !_firstEngagementFired.has(combatant.id);
  if (wasFirst) {
    _firstEngagementFired.add(combatant.id);
    markFirstEngagement(tokenDoc.id);

    const archetypes = resolveArchetypes(actor);
    await _speak(tokenDoc, archetypes, "engagement", { forceMajor: true });
    return;
  }

  // Occasionally fire a taunt or tactical bark on subsequent turns
  const archetypes = resolveArchetypes(actor);
  const morale     = getMorale(combatant.id);
  const bracket    = getMoraleBracket(morale);

  if (bracket === "bold") {
    await _speak(tokenDoc, archetypes, "taunt");
  } else if (bracket === "normal" || bracket === "shaken") {
    await _speak(tokenDoc, archetypes, "tactical");
  }
}

async function _onDefeated(combatant) {
  const tokenDoc = combatant.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);
  await _speak(tokenDoc, archetypes, "death", { forceMajor: true });
}

async function _onActorHpChanged(actor, newHp) {
  const tokenDoc = _findTokenDoc(actor);
  if (!tokenDoc) return;

  const hpMax = Number(actor.system?.attributes?.hp?.max ?? 0);
  const wasBloodied = newHp > 0 && newHp <= hpMax / 2;

  const archetypes = resolveArchetypes(actor);
  await _speak(tokenDoc, archetypes, "damaged", { guaranteed: wasBloodied });
}

async function _onMoraleRout(combatant) {
  const tokenDoc = combatant.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);
  await _speak(tokenDoc, archetypes, "panic", { forceMajor: true });
}

async function _onMoraleShaken(combatant) {
  const tokenDoc = combatant.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);
  await _speak(tokenDoc, archetypes, "panic");
}

async function _onAttackStart(combatant, _item) {
  const tokenDoc = combatant.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);

  // Effort noise (separate channel, short cooldown, no chat mirror)
  const effortNoise = getEffortNoise(tokenDoc, archetypes);
  if (effortNoise) {
    const token = _resolveCanvasToken(tokenDoc);
    if (token) showSpeechBubble(token, effortNoise);
    // Effort noises never go to chat
  }

  // Regular attack bark
  await _speak(tokenDoc, archetypes, "attack");
}

async function _onAttackHit(combatant, _target, roll) {
  const tokenDoc   = combatant.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);

  // Critical hit → guaranteed attack bark
  const isCrit = roll?.isCritical ?? false;
  if (isCrit) {
    await _speak(tokenDoc, archetypes, "attack", { guaranteed: true });
  }
}

async function _onKill(combatant, _target) {
  const tokenDoc = combatant.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);
  await _speak(tokenDoc, archetypes, "kill", { guaranteed: true });
}

async function _onRetreat(combatant) {
  const tokenDoc = combatant.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);
  await _speak(tokenDoc, archetypes, "retreat", { forceMajor: true });
}

/**
 * Spellcast bark. Public entry also exposed for §6's contract:
 * triggerSpellcastDialogue(tokenId, spellName, archetypes).
 */
async function _onSpellCast(combatant, _spellName) {
  const tokenDoc = combatant?.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);
  await _speak(tokenDoc, archetypes, "spell");
}

async function _onBossAction(combatant) {
  const tokenDoc = combatant?.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);
  // Dedicated "boss" pool if the archetype defines one; otherwise taunt, then
  // tactical (handled by the dialogue-manager fallback chain).
  await _speak(tokenDoc, archetypes, "boss");
}

export function triggerSpellcastDialogue(tokenId, spellName, archetypes) {
  const combatant = game.combat?.combatants?.find(
    c => (c.token?.id ?? c.tokenId) === tokenId
  );
  if (!combatant) return;
  if (Array.isArray(archetypes) && archetypes.length) {
    const tokenDoc = combatant.token;
    if (tokenDoc) _scheduleAsync(() => _speak(tokenDoc, archetypes, "spell"));
    return;
  }
  _scheduleAsync(() => _onSpellCast(combatant, spellName));
}

async function _onAllyDied(observer, _dead) {
  const tokenDoc = observer?.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(observer.actor);
  // Nearby ally death triggers a fear/panic bark, chance-based
  await _speak(tokenDoc, archetypes, "panic");
}

async function _onTactical(combatant) {
  const tokenDoc = combatant.token;
  if (!tokenDoc) return;
  const archetypes = resolveArchetypes(combatant.actor);
  await _speak(tokenDoc, archetypes, "tactical");
}

// ─── Core speech dispatch ─────────────────────────────────────────────────────

/**
 * Get a phrase and display it (bubble + optional chat).
 */
async function _speak(tokenDoc, archetypes, context, opts = {}) {
  const result = getSpeechPhrase(tokenDoc, archetypes, context, opts);
  if (!result) return;

  const { phrase, languageDisplay } = result;

  // Find the live canvas token
  const token = _resolveCanvasToken(tokenDoc);
  if (token) {
    // Show locally (with this client's language resolution)
    showSpeechBubble(token, phrase, languageDisplay);
    // Broadcast the raw phrase to all other clients so they render their own
    // bubble with their own per-client language resolution.
    broadcastSpeechBubble(token.id, phrase);
  }

  await postDialogueChatMessage(tokenDoc, phrase, languageDisplay);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function _resolveCanvasToken(tokenDoc) {
  try {
    const id = tokenDoc?.id ?? tokenDoc?._id;
    const token = canvas?.tokens?.placeables?.find(t => t.id === id) ?? null;
    if (!token && id) {
      log(`[Dialogue] _resolveCanvasToken: no live canvas token found for id=${id} (name=${tokenDoc?.name ?? "unknown"}). Speech bubble will not display.`);
    }
    return token;
  } catch {
    return null;
  }
}

function _findTokenDoc(actor) {
  try {
    const token = canvas?.tokens?.placeables?.find(t => t.actor?.id === actor.id);
    return token?.document ?? null;
  } catch {
    return null;
  }
}

function _scheduleAsync(fn) {
  // Run asynchronously so dialogue never blocks combat automation
  Promise.resolve().then(fn).catch(err => {
    log(`[Dialogue] Async error: ${err.message}`);
  });
}

function _dialogueEnabled() {
  try {
    return getSetting(SETTINGS.DIALOGUE_ENABLED) === true;
  } catch {
    return false;
  }
}

// ─── Cleanup on combat end ────────────────────────────────────────────────────

Hooks.on("deleteCombat", () => {
  _firstEngagementFired.clear();
});
