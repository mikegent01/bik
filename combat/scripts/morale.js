/**
 * morale.js
 * Lightweight morale system for the NPC tactical AI layer.
 *
 * Morale is a per-combat-instance value in the range [0, 100].
 * It degrades in response to battlefield events and recovers slightly when
 * conditions improve. It is NOT persisted between combats.
 *
 * Morale influences:
 *   - retreat likelihood (low morale → more likely to flee)
 *   - aggression (high morale → bolder attacks)
 *   - focus fire (high morale → better discipline)
 *   - pursuit (low morale → abandon pursuit)
 *
 * Certain creature types and archetypes ignore morale entirely.
 *
 * Performance:
 *   - Morale values are stored in a Map keyed by combatant ID.
 *   - They are computed once per turn, not per-action.
 *   - Battlefield scans are limited to the combat participant list,
 *     not the entire canvas.
 */

import { log } from "./utils.js";
import { MODULE_ID, getSetting, SETTINGS } from "./settings.js";
import { broadcastMoraleBubble } from "./dialogue-ui.js";

// ─── Morale storage ───────────────────────────────────────────────────────────
// Keys: combatantId → { morale: number, flags: object }
const _moraleStore = new Map();

// Per-combat bracket memory, used to fire whispers + dialogue only on change.
// combatantId → bracket string
const _bracketMemory = new Map();

// Clear on combat end
Hooks.on("deleteCombat", () => {
  _moraleStore.clear();
  _bracketMemory.clear();
  globalThis.__NCA_PREV_MORALE_BRACKET__?.clear();
  log("Morale store cleared (combat ended).");
});

// ─── Constants ────────────────────────────────────────────────────────────────

export const MORALE = {
  MAX:              100,
  MIN:              0,
  BASE:             75,   // starting morale
  ROUT_THRESHOLD:   20,   // below this → rout behavior (flee even outside retreat conditions)
  SHAKEN_THRESHOLD: 40,   // below this → reduced aggression, easier retreat trigger
  BOLD_THRESHOLD:   80,   // above this → increased aggression

  // Event modifiers (applied to own morale unless noted)
  ALLY_DIED_NEAR:   -12,
  ALLY_DIED_FAR:    -5,
  LEADER_DIED:      -25,
  SELF_BLOODIED:    -15,
  OUTNUMBERED:      -8,   // per turn while outnumbered 2:1+
  ISOLATED:         -10,  // per turn with no allies within 30ft
  ALLY_NEAR:        +3,   // per turn with allies within 15ft (formation bonus)
  ENEMY_BLOODIED:   +5,   // when NPC bloodied a target this turn
  ENEMY_KILLED:     +10,
  // ── Recovery events (one-shot, applied via applyMoraleEvents) ─────────────
  CRIT_HIT:         +6,   // NPC lands a critical hit
  ENEMY_FLED:       +8,   // an enemy routs or flees
  REINFORCED:       +10,  // an ally joins combat mid-fight
  RALLY_ITEM:       +20,  // NPC uses a rally / inspire feature
  MIN_PER_TURN:    -20,   // morale cannot fall more than this in a single evaluation
};

// ─── Creature types that ignore morale ───────────────────────────────────────
const MORALE_IMMUNE_TYPES = new Set([
  "construct", "undead",
]);

// Actor subtypes / keywords that grant morale immunity
const MORALE_IMMUNE_KEYWORDS = [
  "mindless", "zombie", "skeleton", "golem", "animated",
  "construct", "ooze",
];

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Get the current morale for a combatant. Initializes to BASE if not yet set.
 * @param {string} combatantId
 * @returns {number}
 */
export function getMorale(combatantId) {
  if (!_moraleStore.has(combatantId)) {
    // Per-actor seeding: a GM-set "startingMorale" flag (0–100) overrides the
    // default base when the store is first touched for this combatant. The
    // combatant is resolved from the active combat — getMorale is only ever
    // called with live combatant ids.
    let seed = MORALE.BASE;
    try {
      const actor = game.combat?.combatants?.get(combatantId)?.actor;
      if (actor?.getFlag?.(MODULE_ID, "moraleImmune") === true) {
        seed = MORALE.MAX;
      } else {
        const starting = Number(actor?.getFlag?.(MODULE_ID, "startingMorale"));
        if (Number.isFinite(starting)) {
          seed = Math.max(MORALE.MIN ?? 0, Math.min(MORALE.MAX, starting));
        }
      }
    } catch { /* default seed */ }
    _moraleStore.set(combatantId, { morale: seed });
  }
  return _moraleStore.get(combatantId).morale;
}

/**
 * Evaluate and update morale for an NPC at the start of their turn.
 * Returns the new morale value.
 *
 * @param {Combatant} combatant
 * @param {object}    archetypeProfile   merged archetype definition
 * @returns {number}  new morale value
 */
export function evaluateMorale(combatant, archetypeProfile) {
  const actor = combatant.actor;
  if (!actor) return MORALE.BASE;

  // Immune check
  if (archetypeProfile.ignoresMorale || _isMoraleImmune(actor)) {
    return MORALE.MAX; // effectively always bold
  }

  const current = getMorale(combatant.id);
  const delta = _computeMoraleDelta(combatant, actor, archetypeProfile);

  // Apply delta, clamped to MAX turn-drop and overall range
  const clampedDelta = Math.max(MORALE.MIN_PER_TURN, delta);
  const next = _commitMorale(combatant.id, current + clampedDelta, {
    tokenId:   combatant.token?.id ?? combatant.tokenId ?? null,
    actorName: actor.name,
  });

  log(`${actor.name}: Morale=${Math.round(next)} (Δ${delta > 0 ? "+" : ""}${Math.round(delta)})`);
  return next;
}

/**
 * Apply one-shot morale events (recovery or shock) by event-name.
 * @param {Combatant} combatant
 * @param {Array<{type:string, value?:number}>} events  e.g. [{type:"CRIT_HIT"}]
 */
export function applyMoraleEvents(combatant, events = []) {
  if (!combatant?.id || !Array.isArray(events) || events.length === 0) return;
  if (_isMoraleImmune(combatant.actor)) return;
  let sum = 0;
  for (const e of events) {
    const v = Number.isFinite(e?.value) ? e.value : (MORALE[e?.type] ?? 0);
    sum += v;
  }
  if (sum === 0) return;
  const current = getMorale(combatant.id);
  _commitMorale(combatant.id, current + sum, {
    tokenId:   combatant.token?.id ?? combatant.tokenId ?? null,
    actorName: combatant.actor?.name ?? "NPC",
  });
}

/**
 * Apply a one-time morale shock to a combatant (e.g. leader death notification).
 * @param {string} combatantId
 * @param {number} delta
 */
export function applyMoraleShock(combatantId, delta) {
  const current = getMorale(combatantId);
  // Resolve token/name for the bubble + whisper if the combatant is live.
  const c = game.combat?.combatants?.get?.(combatantId) ?? null;
  _commitMorale(combatantId, current + delta, {
    tokenId:   c?.token?.id ?? c?.tokenId ?? null,
    actorName: c?.actor?.name ?? "NPC",
  });
}

/**
 * Central morale mutator. Clamps, stores, fires the visible-morale bubble for
 * the signed change, and whispers the GM + (future) dialogue on bracket change.
 * All morale writes funnel through here.
 *
 * @param {string} combatantId
 * @param {number} rawNext        unclamped proposed morale
 * @param {object} meta           { tokenId, actorName }
 * @returns {number}              clamped new morale
 */
function _commitMorale(combatantId, rawNext, meta = {}) {
  const prev = getMorale(combatantId);
  const next = Math.max(MORALE.MIN, Math.min(MORALE.MAX, rawNext));
  _moraleStore.set(combatantId, { morale: next });

  const delta = Math.round(next - prev);

  // Visible-morale bubble (audience-gated inside the dialogue layer).
  if (delta !== 0 && meta.tokenId) {
    try { broadcastMoraleBubble(meta.tokenId, delta); }
    catch (err) { log(`[Morale] bubble failed: ${err.message}`); }
  }

  // Bracket-change whisper to GM(s).
  const prevBracket = _bracketMemory.get(combatantId) ?? getMoraleBracket(prev);
  const nextBracket = getMoraleBracket(next);
  if (nextBracket !== prevBracket) {
    _bracketMemory.set(combatantId, nextBracket);
    _whisperBracketChange(meta.actorName ?? "NPC", nextBracket, Math.round(next));
  } else {
    _bracketMemory.set(combatantId, nextBracket);
  }

  return next;
}

/**
 * Whisper a morale bracket transition to all GM users.
 */
function _whisperBracketChange(name, bracket, value) {
  // Only bother when at least one notable bracket is involved.
  if (bracket === "normal") return;
  try {
    const gmIds = game.users?.filter?.(u => u.isGM).map(u => u.id) ?? [];
    if (gmIds.length === 0) return;
    const label = bracket.toUpperCase();
    ChatMessage.create({
      content: `<span class="nca-morale-note">${_escapeHtml(name)} morale: <strong>${label}</strong> (${value}).</span>`,
      whisper: gmIds,
      speaker: { alias: "NCA Morale" },
    });
  } catch (err) {
    log(`[Morale] bracket whisper failed: ${err.message}`);
  }
}

function _escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

/**
 * Returns a label for the current morale bracket.
 * @param {number} morale
 * @returns {"rout"|"shaken"|"normal"|"bold"}
 */
export function getMoraleBracket(morale) {
  if (morale <= MORALE.ROUT_THRESHOLD)   return "rout";
  if (morale <= MORALE.SHAKEN_THRESHOLD) return "shaken";
  if (morale >= MORALE.BOLD_THRESHOLD)   return "bold";
  return "normal";
}

/**
 * Broadcast morale shocks when a combatant is defeated or killed.
 * Called by the combat turn hook when an NPC dies.
 * Applies shock to all remaining NPC combatants of the same faction.
 *
 * @param {Combatant} deadCombatant
 * @param {Combat}    combat
 * @param {boolean}   isLeader   true if the dead NPC was a leader-type
 */
export function broadcastDeathShock(deadCombatant, combat, isLeader = false) {
  if (!combat?.combatants) return;
  const deadToken = deadCombatant.token;
  if (!deadToken) return;

  for (const c of combat.combatants) {
    if (c.id === deadCombatant.id) continue;
    if (c.actor?.type !== "npc") continue;

    const token = c.token;
    if (!token) continue;

    // Same-faction check (hostile NPCs share morale; friendly NPCs have separate pool)
    const sameDisposition = token.disposition === deadToken.disposition;
    if (!sameDisposition) continue;

    if (_isMoraleImmune(c.actor)) continue;

    // Nearby vs. far shock
    const dist = _tokenDistanceFt(token, deadToken);
    let shock = isLeader
      ? MORALE.LEADER_DIED
      : (dist <= 60 ? MORALE.ALLY_DIED_NEAR : MORALE.ALLY_DIED_FAR);

    // Rout propagation: if the dier was already routing, its death is an even
    // sharper sympathy blow to same-creature-type allies within 30 ft. Watching
    // a panicking comrade die spreads the panic.
    const deadWasRouting = getMoraleBracket(getMorale(deadCombatant.id)) === "rout";
    if (deadWasRouting && dist <= 30) {
      const deadType = deadCombatant.actor?.system?.details?.type?.value ?? null;
      const thisType = c.actor?.system?.details?.type?.value ?? null;
      if (deadType && thisType && deadType === thisType) {
        shock = Math.round(MORALE.ALLY_DIED_NEAR * 1.5);
      }
    }

    applyMoraleShock(c.id, shock);
    log(`${c.actor?.name}: Death shock from ${deadCombatant.actor?.name} (${isLeader ? "leader" : "ally"}) Δ${shock}`);
  }
}

/**
 * Determine whether an actor is a "leader" whose death triggers a larger morale
 * shock. Order of evidence (any hit → leader):
 *   1. Explicit GM flag  MODULE_ID.isLeader === true
 *   2. A feature/item named like a leadership ability
 *   3. A leader-flavoured archetype (disciplined / tactician)
 * The old CR-vs-average heuristic remains available to the caller as a fallback
 * but is intentionally NOT part of this function — name/archetype/flag are the
 * authoritative signals per the expansion guide.
 *
 * @param {Actor5e} actor
 * @param {string[]} [archetypeKeys]  resolved archetype keys, if available
 * @returns {boolean}
 */
export function isLeaderActor(actor, archetypeKeys = null) {
  if (!actor) return false;

  // 1. Explicit flag
  if (actor.getFlag?.(MODULE_ID, "isLeader") === true) return true;

  // 2. Leadership-flavoured item
  const LEADER_ITEM = /leadership|war ?leader|battle ?commander|commander|rally|inspiring (presence|leader)/i;
  for (const item of actor.items ?? []) {
    if (LEADER_ITEM.test(item.name ?? "")) return true;
  }

  // 3. Leader-flavoured archetype
  if (Array.isArray(archetypeKeys)) {
    if (archetypeKeys.includes("disciplined") || archetypeKeys.includes("tactician")) return true;
  }

  return false;
}

/**
 * Detect a rally/inspire feature the NPC can use to restore allies' morale.
 * @param {Actor5e} actor
 * @returns {Item5e|null}
 */
export function getRallyItem(actor) {
  if (!actor?.items) return null;
  const RALLY = /rally|inspiring (presence|word|leader)|war ?cry|battle ?cry|embolden/i;
  for (const item of actor.items) {
    if (RALLY.test(item.name ?? "")) return item;
  }
  return null;
}

// ─── Private helpers ──────────────────────────────────────────────────────────

function _computeMoraleDelta(combatant, actor, archetypeProfile) {
  let delta = 0;
  const token = combatant.token;
  if (!token) return delta;

  const combat = game.combat;
  if (!combat) return delta;

  // ── Self-preservation signals ─────────────────────────────────────────
  const hp    = actor.system?.attributes?.hp;
  const hpVal = Number(hp?.value ?? 0);
  const hpMax = Number(hp?.max ?? 0);
  if (hpMax > 0 && hpVal > 0 && hpVal <= hpMax / 2) {
    delta += MORALE.SELF_BLOODIED;
  }

  // ── Battlefield counts ────────────────────────────────────────────────
  const { allyCount, enemyCount, nearbyAllyCount } = _countBattlefield(token, combat);

  if (allyCount === 0) {
    delta += MORALE.ISOLATED;
  } else if (nearbyAllyCount > 0) {
    delta += MORALE.ALLY_NEAR * Math.min(nearbyAllyCount, 3);
  }

  if (enemyCount > 0 && allyCount < enemyCount / 2) {
    delta += MORALE.OUTNUMBERED;
  }

  // ── Archetype morale immunity already filtered above ──────────────────
  // (archetypeProfile.ignoresMorale handled by caller)

  return delta;
}

/**
 * Count nearby allies and all-scene enemies for morale calculation.
 * Scans only combat participants, not all canvas tokens — O(combatants).
 */
function _countBattlefield(npcToken, combat) {
  let allyCount    = 0;
  let enemyCount   = 0;
  let nearbyAllyCount = 0;

  for (const c of combat.combatants) {
    if (!c.token || !c.actor) continue;
    const hp = c.actor.system?.attributes?.hp;
    if (hp && Number(hp.value ?? 0) <= 0) continue;
    if (c.token.document?.defeated) continue;

    const sameDisp = c.token.disposition === npcToken.disposition;

    if (sameDisp) {
      if (c.token.id === npcToken.id) continue;
      allyCount++;
      const d = _tokenDistanceFt(c.token, npcToken);
      if (d <= 30) nearbyAllyCount++;
    } else {
      // Enemies are opposite disposition
      const isEnemy = (npcToken.disposition === CONST.TOKEN_DISPOSITIONS.HOSTILE &&
                       c.token.disposition  === CONST.TOKEN_DISPOSITIONS.FRIENDLY) ||
                      (npcToken.disposition === CONST.TOKEN_DISPOSITIONS.FRIENDLY &&
                       c.token.disposition  === CONST.TOKEN_DISPOSITIONS.HOSTILE);
      if (isEnemy) enemyCount++;
    }
  }

  return { allyCount, enemyCount, nearbyAllyCount };
}

function _isMoraleImmune(actor) {
  // Per-actor GM override — checked first so it works for any creature type.
  if (actor?.getFlag?.(MODULE_ID, "moraleImmune") === true) return true;

  const creatureType = String(
    (typeof actor.system?.details?.type === "object"
      ? actor.system.details.type.value
      : actor.system?.details?.type)
    ?? ""
  ).toLowerCase();

  if (MORALE_IMMUNE_TYPES.has(creatureType)) return true;

  const subtype = String(
    (typeof actor.system?.details?.type === "object"
      ? actor.system.details.type.subtype
      : "")
    ?? ""
  ).toLowerCase();

  return MORALE_IMMUNE_KEYWORDS.some(kw => creatureType.includes(kw) || subtype.includes(kw));
}

/** Distance in feet between two TokenDocument-like objects. */
function _tokenDistanceFt(tokenDocA, tokenDocB) {
  try {
    // TokenDocuments from combatant.token have x, y in pixels
    const gs = canvas.grid.size;
    const gd = canvas.grid.distance ?? 5;
    const dx = (tokenDocA.x - tokenDocB.x) / gs;
    const dy = (tokenDocA.y - tokenDocB.y) / gs;
    return Math.sqrt(dx * dx + dy * dy) * gd;
  } catch {
    return 999;
  }
}
