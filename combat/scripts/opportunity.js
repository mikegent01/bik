/**
 * opportunity.js
 * Opportunity attacks for automated NPCs (Task 7).
 *
 * Trigger: a hostile, player-driven token moves from inside an automated
 * NPC's melee reach to outside it without Disengaging. The NPC spends its
 * one-per-round reaction (shared tracker with the spell/damage reactions in
 * automation.js) on its best melee weapon.
 *
 * Deliberate scope limits:
 *  - Only PLAYER-DRIVEN movement provokes. The module's own NPC movement
 *    never triggers OAs from other automated NPCs — that path runs inside
 *    live midi workflows and an interleaved attack there is a recursion
 *    hazard for marginal table value.
 *  - Skipped entirely when midi-qol's own opportunity-attack optional rule
 *    appears active (never double-attack).
 *  - One OA per NPC per provoking move; multiple NPCs may each react.
 *
 * Setting: ENABLE_OPPORTUNITY_ATTACKS (default OFF — this interrupts player
 * actions; playtest before enabling).
 */

import { MODULE_ID, SETTINGS, getSetting } from "./settings.js";
import { log, delay, getItemRange, getItemReach, isMeleeItem, isRangedItem, postChatMessage } from "./utils.js";
import { hasDamageFormula } from "./spell-ai.js";
import { executeMidiItem, hasMidiQol } from "./midi.js";
import { isReactionSpent, markReactionSpent } from "./automation.js";
import * as trace from "./ai-trace.js";

const DISENGAGE_RX = /disengage/i;

/** Per-update dedup so a single drag-move never double-fires. */
const _processedMoves = new Set();

export function registerOpportunityAttackHooks() {
  Hooks.on("preUpdateToken", (tokenDoc, changes, options, userId) => {
    try {
      _onPreUpdateToken(tokenDoc, changes, options, userId);
    } catch (err) {
      log(`[OA] preUpdateToken handler error: ${err.message}`, "warn");
    }
  });
  Hooks.on("deleteCombat", () => _processedMoves.clear());
  log("[OA] Opportunity attack hooks registered.");
}

function _onPreUpdateToken(tokenDoc, changes, options, userId) {
  if (!game.user.isGM) return;
  if (!getSetting(SETTINGS.ENABLE_OPPORTUNITY_ATTACKS)) return;
  if (!getSetting(SETTINGS.AUTOMATION_ACTIVE)) return;
  if (game.paused) return;
  if (!game.combat?.started) return;
  if (changes.x === undefined && changes.y === undefined) return;
  if (!hasMidiQol()) return;
  if (_midiHandlesOA()) return;

  const mover = tokenDoc.object;
  const moverActor = tokenDoc.actor;
  if (!mover || !moverActor) return;

  // Player-driven movement only: never provoke off the module's own NPC moves.
  if (moverActor.type === "npc" && !moverActor.hasPlayerOwner) return;
  if ((moverActor.system?.attributes?.hp?.value ?? 0) <= 0) return;
  if (_hasDisengage(moverActor)) {
    log(`[OA] ${tokenDoc.name} is Disengaging — no opportunity attacks.`);
    return;
  }

  const gridSize  = canvas.grid?.size ?? 100;

  const moveKey = `${tokenDoc.id}:${changes.x ?? tokenDoc.x},${changes.y ?? tokenDoc.y}:${game.combat.round}.${game.combat.turn}`;
  if (_processedMoves.has(moveKey)) return;
  _processedMoves.add(moveKey);
  if (_processedMoves.size > 300) {
    _processedMoves.delete(_processedMoves.values().next().value);
  }

  const maxCR = getSetting(SETTINGS.MAX_AUTOMATED_CR);
  const jobs  = [];

  for (const combatant of game.combat.combatants) {
    try {
      const actor = combatant.actor;
      if (!actor || actor.type !== "npc" || actor.hasPlayerOwner) continue;
      if (combatant.defeated) continue;
      if ((actor.system?.attributes?.hp?.value ?? 0) <= 0) continue;
      if (Number(actor.system?.details?.cr ?? 0) > maxCR) continue;
      if (isReactionSpent(actor.id)) continue;
      if (_isIncapacitated(actor)) continue;

      const npcToken = combatant.token?.object;
      if (!npcToken || npcToken.id === tokenDoc.id) continue;

      // Hostility: opposite player-facing dispositions only.
      const npcDisp   = npcToken.document.disposition;
      const moverDisp = tokenDoc.disposition;
      if (npcDisp === CONST.TOKEN_DISPOSITIONS.SECRET) continue;
      if (npcDisp === moverDisp) continue;

      const weapon = _bestMeleeWeapon(actor);
      if (!weapon) continue;

      const reachFt = Math.max(5, getItemReach(weapon) || 5);

      // 5e reach is grid-based: all eight squares around a creature are "in
      // reach," so a diagonally-adjacent enemy is 5 ft away, NOT 7.07. The old
      // euclidean centre-to-centre test put diagonal neighbours at √2×5 ≈ 7 ft,
      // beyond a 5 ft reach + tolerance — which is why most opportunity attacks
      // silently never fired. Measure via the grid path API (honours the
      // scene's diagonal rule) using the token corners closest to the NPC.
      const distFt = (px, py) => _gridReachFt(
        npcToken.document, gridSize,
        { x: px, y: py, width: tokenDoc.width ?? 1, height: tokenDoc.height ?? 1 }
      );

      const wasInReach = distFt(tokenDoc.x, tokenDoc.y) <= reachFt + 0.5;
      const leftReach  = distFt(changes.x ?? tokenDoc.x, changes.y ?? tokenDoc.y) > reachFt + 0.5;
      if (!wasInReach || !leftReach) continue;

      jobs.push({ combatant, npcToken, weapon, reachFt });
    } catch { /* next combatant — never block the token update */ }
  }

  if (!jobs.length) return;

  // Execute AFTER the movement update lands, never inside preUpdate.
  setTimeout(() => {
    _executeOpportunityAttacks(jobs, tokenDoc).catch(err =>
      log(`[OA] Execution failed: ${err.message}`, "warn"));
  }, 100);
}

async function _executeOpportunityAttacks(jobs, moverDoc) {
  for (const { combatant, npcToken, weapon, reachFt } of jobs) {
    const actor = combatant.actor;
    if (isReactionSpent(actor.id)) continue; // may have reacted meanwhile
    markReactionSpent(actor.id);

    const moverToken = canvas.tokens.get(moverDoc.id);
    if (!moverToken || (moverToken.actor?.system?.attributes?.hp?.value ?? 0) <= 0) continue;

    log(`[OA] ${actor.name} takes an opportunity attack on ${moverDoc.name} with ${weapon.name} (reach ${reachFt}ft).`);

    await postChatMessage(
      game.i18n.format("NCA.Chat.OpportunityAttack", {
        name:   actor.name,
        target: moverDoc.name,
        weapon: weapon.name,
      }),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );

    moverToken.setTarget(true, { user: game.user, releaseOthers: true });
    await delay(150);

    let error = null;
    try {
      await executeMidiItem(weapon, moverToken, npcToken, {});
    } catch (err) {
      error = String(err?.message ?? err);
      log(`[OA] ${actor.name}: attack execution failed: ${error}`, "warn");
    } finally {
      game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
    }

    trace.recordEvent("opportunityAttack", {
      actorId:   actor.id,
      actorName: actor.name,
      target:    moverDoc.name,
      weapon:    weapon.name,
      error,
    });
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Grid-based reach in feet between an NPC token and a mover footprint at a
 * given top-left pixel position. Uses the minimum cell-to-cell distance across
 * both footprints (5e treats any of the eight surrounding squares as adjacent),
 * so a diagonal neighbour measures 5 ft — matching how the rest of the module
 * judges melee reach. Falls back to centre distance on error.
 */
function _gridReachFt(npcDoc, gridSize, mover) {
  try {
    const npcW = npcDoc.width ?? 1, npcH = npcDoc.height ?? 1;
    const mvW  = mover.width ?? 1,  mvH  = mover.height ?? 1;
    const cells = (x, y, w, h) => {
      const out = [];
      for (let i = 0; i < Math.max(1, Math.round(w)); i++)
        for (let j = 0; j < Math.max(1, Math.round(h)); j++)
          out.push({ x: x + (i + 0.5) * gridSize, y: y + (j + 0.5) * gridSize });
      return out;
    };
    const npcCells = cells(npcDoc.x, npcDoc.y, npcW, npcH);
    const mvCells  = cells(mover.x, mover.y, mvW, mvH);
    let min = Infinity;
    for (const a of npcCells) for (const b of mvCells) {
      const d = canvas.grid.measurePath([a, b])?.distance;
      if (typeof d === "number" && d < min) min = d;
    }
    return Number.isFinite(min) ? min : Infinity;
  } catch {
    const npcCx = npcDoc.x + (npcDoc.width ?? 1) * gridSize / 2;
    const npcCy = npcDoc.y + (npcDoc.height ?? 1) * gridSize / 2;
    const mvCx  = mover.x + (mover.width ?? 1) * gridSize / 2;
    const mvCy  = mover.y + (mover.height ?? 1) * gridSize / 2;
    return (Math.hypot(npcCx - mvCx, npcCy - mvCy) / gridSize) * (canvas.grid?.distance ?? 5);
  }
}

/** Best-effort detection of midi-qol's own OA optional rule. */
function _midiHandlesOA() {
  try {
    const cfg = globalThis.MidiQOL?.configSettings?.();
    const rules = cfg?.optionalRules ?? cfg ?? {};
    return !!(rules.attackOfOpportunity || rules.opportunityAttack || rules.aoo);
  } catch { return false; }
}

function _hasDisengage(actor) {
  try {
    if (actor.statuses?.has?.("disengage")) return true;
    for (const effect of actor.effects) {
      if (!effect.disabled && DISENGAGE_RX.test(effect.name ?? effect.label ?? "")) return true;
    }
  } catch { /* assume not disengaging */ }
  return false;
}

function _isIncapacitated(actor) {
  try {
    const s = actor.statuses;
    return !!(s?.has?.("incapacitated") || s?.has?.("stunned") ||
              s?.has?.("paralyzed") || s?.has?.("unconscious") || s?.has?.("petrified"));
  } catch { return false; }
}

/** Highest-reach damaging melee item, v2/v3-safe reads only. */
function _bestMeleeWeapon(actor) {
  let best = null;
  let bestReach = -1;
  for (const item of (actor.items ?? [])) {
    try {
      if (item.type !== "weapon" && item.type !== "feat") continue;
      if (!hasDamageFormula(item)) continue;
      // Must be melee-CAPABLE. Testing isRangedItem() here would exclude thrown
      // weapons (dagger, handaxe), which are perfectly good opportunity attacks
      // when swung. getItemReach() reports the melee reach, not the throw range.
      if (!isMeleeItem(item)) continue;
      const reach = getItemReach(item) || 5;
      if (reach > 10 + 5) continue; // melee/reach only — never lob a javelin as an OA
      if (reach > bestReach) { best = item; bestReach = reach; }
    } catch { /* skip malformed item */ }
  }
  return best;
}
