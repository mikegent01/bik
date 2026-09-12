/**
 * automation.js
 * The core NPC turn automation engine.
 *
 * Fixes applied:
 *  - game.paused checked at entry, before movement, and inside attack loop
 *  - Player-owned actors are hard-blocked at both entry and _runTurn level
 *  - Multiattack array is properly expanded (count × item) before execution
 *  - isValidTarget() used on mid-turn retarget to reject hidden/invisible tokens
 *  - Turn ends ONLY after attacksRemaining reaches 0 or no valid target exists
 */

import { getSetting, SETTINGS, MODULE_ID, LEGACY_MODULE_ID } from "./settings.js";
import { parseMultiattack, findMultiattackFeature } from "./parsing.js";
import { selectTarget, recordAttacker, selectAllyTarget } from "./targeting.js";
import { moveTowardTarget, moveAwayFromPlayerCharacters, moveSkirmisherKite, scootToCover, clearLOSCache } from "./movement.js";
import {
  log, delay, distanceBetweenTokens,
  getItemRange, getItemReach, isMeleeItem, isRangedItem,
  getAttackItems, getUsableActionItems, postChatMessage, normalize,
  getActivities, isProperName,
} from "./utils.js";
import { buildBehaviorContext, scoreBehaviors, BEHAVIOR } from "./behavior.js";
import { broadcastDeathShock } from "./morale.js";
import { resolveEffectOverride } from "./effects.js";
import {
  getElevationProfile, adjustElevationForTurn,
  distanceIncludingElevation, canAttackFromElevation,
} from "./elevation.js";
import {
  hasMidiQol, executeMidiItem,
  isConcentrating, breakConcentration,
  getHighestAvailableSlotLevel, getLowestAvailableSlotLevel,
} from "./midi.js";
import {
  selectBestSpell, buildSituationContext, getSpellMovementPreference,
  classifySpell, getSpellRange, getActivationType, hasDamageFormula,
  hasUsesRemaining, recordSpellCast, SPELL_CATEGORIES,
} from "./spell-ai.js";
import * as trace from "./ai-trace.js";
import { actorCanBonusDash, actorCanBonusDisengage } from "./capabilities.js";


function actorHasBonusActionDash(actor) {
  // Delegates to the capability resolver (capabilities.js). Nimble Escape is
  // intentionally NOT a bonus-Dash source there — that miscount tripled the
  // movement budget (roadmap P0-1). Only Cunning Action / Step of the Wind /
  // an explicit bonus-Dash feature or a GM flag override qualify.
  try {
    return actorCanBonusDash(actor);
  } catch (_) {
    return false;
  }
}

/**
 * Returns true if the actor can Disengage as a bonus action (e.g. Rogue Cunning Action,
 * Monk Step of the Wind, or any feature whose text says "bonus action" and "disengage").
 * Skirmisher kite uses this to avoid provoking opportunity attacks.
 */
function actorHasBonusActionDisengage(actor) {
  // Delegates to the capability resolver (capabilities.js). Nimble Escape,
  // Cunning Action and Step of the Wind all grant bonus-action Disengage there.
  // Skirmisher kite uses this to avoid provoking opportunity attacks.
  try {
    return actorCanBonusDisengage(actor);
  } catch (_) {
    return false;
  }
}

function actorHasCondition(actor, conditionId) {
  const wanted = String(conditionId ?? "").toLowerCase();
  if (!wanted) return false;
  try {
    if (actor.statuses?.has?.(wanted)) return true;
    return actor.effects?.some?.(effect => {
      if (effect.disabled) return false;
      const statusId = String(effect.statuses?.values?.().next?.().value ?? effect.statuses?.[0] ?? "").toLowerCase();
      const name = String(effect.name ?? effect.label ?? "").toLowerCase();
      return statusId === wanted || name.includes(wanted);
    }) ?? false;
  } catch (_) {
    return false;
  }
}

function getActorBehavior(actor) {
  const flag = actor.getFlag?.(MODULE_ID, "behavior")
            ?? actor.getFlag?.(LEGACY_MODULE_ID, "behavior") ?? {};
  const flagSubtype = String(
    flag.subtype
    ?? actor.getFlag?.(MODULE_ID, "behaviorSubtype")
    ?? actor.getFlag?.(LEGACY_MODULE_ID, "behaviorSubtype")
    ?? "");
  const type = actor.system?.details?.type;
  const typeSubtype = typeof type === "object"
    ? String(type.subtype ?? type.value ?? "")
    : String(type ?? "");
  return {
    subtype: flagSubtype || typeSubtype,
    retreatWhenBloodied: flag.retreatWhenBloodied === true,
  };
}

function isBloodied(actor) {
  const hp = actor.system?.attributes?.hp;
  const value = Number(hp?.value ?? 0);
  const max = Number(hp?.max ?? hp?.value ?? 0);
  return max > 0 && value > 0 && value <= (max / 2);
}

function _configuredRetreatKeywords() {
  try {
    return String(getSetting(SETTINGS.RETREAT_SUBTYPE_KEYWORDS) ?? "")
      .split(",")
      .map(s => normalize(s).trim())
      .filter(Boolean);
  } catch (_) {
    return ["coward", "skittish", "fearful", "prey", "survivalist"];
  }
}

function actorHasRetreatSubtype(actor) {
  const behavior = getActorBehavior(actor);
  const subtype = normalize(behavior.subtype ?? "");
  if (!subtype) return false;
  return _configuredRetreatKeywords().some(k => subtype.includes(k) || k.includes(subtype));
}

function getRetreatDecision(actor) {
  if (getSetting(SETTINGS.ENABLE_FRIGHTENED_RETREAT) && actorHasCondition(actor, "frightened")) {
    return { shouldRetreat: true, reason: "frightened" };
  }

  if (!getSetting(SETTINGS.ENABLE_BLOODIED_RETREAT)) return { shouldRetreat: false, reason: "" };

  const behavior = getActorBehavior(actor);
  const hasSubtype = behavior.retreatWhenBloodied || actorHasRetreatSubtype(actor);
  if (hasSubtype && isBloodied(actor)) {
    return { shouldRetreat: true, reason: "bloodied" };
  }

  return { shouldRetreat: false, reason: "" };
}


function getRequiredSequenceRange(items) {
  const ranges = (items ?? [])
    .map(item => getItemRange(item))
    .filter(r => Number.isFinite(r) && r > 0);
  if (ranges.length === 0) return 5;
  // Mixed multiattacks should move close enough for the shortest required
  // action, e.g. Dragon Breath plus two Rend attacks should still close for Rend.
  return Math.min(...ranges);
}
// ─── Per-turn execution lock ──────────────────────────────────────────────────
const _activeTurns = new Set();

// ─── Turn timeout (ms) ────────────────────────────────────────────────────────
const TURN_TIMEOUT_MS = 30_000;

// ─── Reaction engine ─────────────────────────────────────────────────────────

/**
 * Per-round tracking: actorId → true when the reaction has been spent.
 * Cleared on combatRound so each NPC gets one reaction per round.
 * @type {Map<string, boolean>}
 */
const _reactionSpent = new Map();

/** Shared one-reaction-per-round tracker accessors (used by opportunity.js). */
export function isReactionSpent(actorId)  { return !!_reactionSpent.get(actorId); }
export function markReactionSpent(actorId) { _reactionSpent.set(actorId, true); }

/**
 * True if a condition forbids this actor from taking reactions: Slowed (no
 * reactions), or any turn-suppressing state (incapacitated/stunned/paralyzed/
 * unconscious/petrified). Gated by ENABLE_CONDITION_BEHAVIORS for the Slow
 * case; the hard-incapacitation cases always apply.
 */
function _reactionsSuppressedByCondition(actor) {
  try {
    const s = actor.statuses;
    if (s?.has?.("incapacitated") || s?.has?.("stunned") || s?.has?.("paralyzed") ||
        s?.has?.("unconscious") || s?.has?.("petrified")) return true;
    if (getSetting(SETTINGS.ENABLE_CONDITION_BEHAVIORS) && getSetting(SETTINGS.COND_SLOW)) {
      for (const e of (actor.effects ?? [])) {
        if (e.disabled || e.suppressed) continue;
        if (/^slow(ed)?\b/i.test(e.name ?? e.label ?? "")) return true;
      }
    }
  } catch { /* default: allow */ }
  return false;
}

Hooks.on("combatRound", () => {
  _reactionSpent.clear();
  log("[Reactions] New round — reaction tracker cleared.");
});

Hooks.on("deleteCombat", () => {
  _reactionSpent.clear();
});

/**
 * Known reaction items and the trigger type they respond to.
 * Matched case-insensitively against the normalised item name.
 *
 * Trigger types:
 *   "attackTargetsMe"  — an attack roll is about to hit this NPC
 *   "enemySpellCast"   — an enemy within 60 ft starts casting a spell
 *   "takeDamage"       — this NPC just took damage
 */
const REACTION_TRIGGERS = {
  "shield":               "attackTargetsMe",
  "counterspell":         "enemySpellCast",
  "hellish rebuke":       "takeDamage",
  "absorb elements":      "takeDamage",
  "silvery barbs":        "attackTargetsMe",
  "parry":                "attackTargetsMe",
  "uncanny dodge":        "takeDamage",
  "cutting words":        "attackTargetsMe",
  "warding bond":         "takeDamage",
  "sense emotion":        "attackTargetsMe",
  "misty escape":         "takeDamage",
};

/**
 * v2/v3-safe: get the activation type of an item.
 * Duplicates the logic in spell-ai.js to avoid a circular import.
 */
function _getReactionActivationType(item) {
  const top = item.system?.activation?.type;
  if (top && top !== "none" && top !== "") return top;
  const acts = item.system?.activities;
  if (!acts) return "";
  let entries = [];
  if (Array.isArray(acts)) entries = acts;
  else if (typeof acts.contents !== "undefined") entries = acts.contents;
  else { try { entries = [...acts.values()]; } catch (_) { entries = []; } }
  for (const a of entries) {
    const t = a.activation?.type ?? "";
    if (t && t !== "none") return t;
  }
  return "";
}

/**
 * Return all reaction-typed items on an actor that still have uses available.
 * An item counts as "usable" if it has no uses limit (uses.max === 0 / null)
 * or if uses.value > 0.
 *
 * @param {Actor5e} actor
 * @returns {Item5e[]}
 */
export function _getReactionItems(actor) {
  return actor.items.filter(item => {
    const activationType = _getReactionActivationType(item);
    if (activationType !== "reaction") return false;
    // Central resolver handles dnd5e ≤5.0 (uses.value) AND 5.1+ (uses.spent).
    // Previously hand-rolled here and blind to `spent`, so depleted reactions
    // stayed "available" on modern dnd5e.
    try { return hasUsesRemaining(item); } catch { /* fall through to legacy */ }
    const uses = item.system?.uses;
    if (!uses) return true;                     // no usage tracking — always available
    const max = Number(uses.max ?? 0);
    if (max === 0) return true;                 // unlimited
    return Number(uses.value ?? 0) > 0;         // has remaining charges
  });
}

/**
 * Match an item to a reaction trigger type using REACTION_TRIGGERS, then
 * fall back to a keyword scan of the item's description text for items not
 * in the map.
 *
 * @param {Item5e} item
 * @param {string} triggerType  — "attackTargetsMe" | "enemySpellCast" | "takeDamage"
 * @returns {boolean}
 */
export function _matchReactionTrigger(item, triggerType) {
  const name = normalize(item.name ?? "");

  // Explicit map lookup — highest priority
  if (REACTION_TRIGGERS[name] === triggerType) return true;

  // Description-based fallback: scan stripped description text for trigger language
  const rawDesc = String(item.system?.description?.value ?? "");
  const desc = rawDesc.replace(/<[^>]*>/g, " ").toLowerCase();

  if (triggerType === "attackTargetsMe") {
    return desc.includes("attack hits") || desc.includes("attack roll") ||
           desc.includes("attacked by") || desc.includes("you are hit");
  }
  if (triggerType === "enemySpellCast") {
    return (desc.includes("cast a spell") || desc.includes("casting a spell") ||
            desc.includes("you see a creature cast")) && desc.includes("reaction");
  }
  if (triggerType === "takeDamage") {
    return (desc.includes("take damage") || desc.includes("takes damage") ||
            desc.includes("damaged by")) && desc.includes("reaction");
  }
  return false;
}

/**
 * Attempt to fire a reaction for an NPC in response to a trigger event.
 *
 * Returns true if a reaction was used, false otherwise.
 *
 * @param {string}   actorId       — ID of the reacting NPC actor
 * @param {string}   triggerType   — "attackTargetsMe" | "enemySpellCast" | "takeDamage"
 * @param {object}   [context={}]  — extra data for the specific trigger
 * @param {Token}    [context.npcToken]         — the NPC's canvas token
 * @param {Item5e}   [context.enemySpellItem]   — the spell being cast (for Counterspell)
 * @param {Token}    [context.casterToken]      — the caster token (for Counterspell range)
 * @returns {Promise<boolean>}
 */
export async function attemptNPCReaction(actorId, triggerType, context = {}) {
  if (!getSetting(SETTINGS.ENABLE_REACTIONS)) return false;
  if (!hasMidiQol()) return false;

  // One reaction per round per actor
  if (_reactionSpent.get(actorId)) return false;

  // Locate actor
  const actor = game.actors.get(actorId);
  // Reject: missing actor, player characters (definitive type guard), and any
  // player-owned actor (familiars, companions, charmed PCs). hasPlayerOwner is
  // the secondary catch — actor.type === "character" is the authoritative one.
  if (!actor || actor.type === "character" || actor.hasPlayerOwner) return false;

  // Condition-based reaction suppression: a Slowed creature takes no reactions;
  // incapacitated/stunned/paralyzed/unconscious creatures likewise can't react.
  if (_reactionsSuppressedByCondition(actor)) {
    log(`[Reactions] ${actor.name}: reaction suppressed by condition.`);
    return false;
  }

  const hp = actor.system?.attributes?.hp?.value ?? 0;
  if (hp <= 0) return false;                    // dead NPCs don't react

  // Find all available reaction items that match this trigger
  const allReactions = _getReactionItems(actor);
  const matching = allReactions.filter(item => _matchReactionTrigger(item, triggerType));
  if (matching.length === 0) return false;

  // For Counterspell: range check (60 ft) and slot availability
  let chosenItem = null;
  for (const item of matching) {
    const name = normalize(item.name ?? "");

    if (name === "counterspell") {
      const casterToken = context.casterToken;
      const npcToken    = context.npcToken;
      if (!casterToken || !npcToken) continue;
      const dist = distanceBetweenTokens(npcToken, casterToken);
      if (dist > 60) { log(`[Reactions] Counterspell out of range (${dist.toFixed(0)}ft).`); continue; }

      // Need a slot at or above the spell's level
      const spellLevel  = Number(context.enemySpellItem?.system?.level ?? 1);
      const slotLevel   = getLowestAvailableSlotLevel(actor, spellLevel);
      if (slotLevel === 0) { log(`[Reactions] Counterspell: no slot at level ${spellLevel}+.`); continue; }

      chosenItem = item;
      break;
    }

    // Shield: make sure we have a 1st-level spell slot
    if (name === "shield") {
      const slotLevel = getLowestAvailableSlotLevel(actor, 1);
      if (slotLevel === 0) { log(`[Reactions] Shield: no spell slots remaining.`); continue; }
      chosenItem = item;
      break;
    }

    // All other reaction items: just pick the first match
    chosenItem = item;
    break;
  }

  if (!chosenItem) return false;

  // Mark reaction as spent before execution (prevents re-entry if execution hooks fire)
  _reactionSpent.set(actorId, true);

  log(`[Reactions] ${actor.name} uses ${chosenItem.name} (trigger: ${triggerType}).`);

  // Choose the appropriate target for execution
  let targetToken = null;
  if (triggerType === "enemySpellCast") targetToken = context.casterToken ?? null;
  else if (triggerType === "attackTargetsMe" || triggerType === "takeDamage") {
    targetToken = context.attackerToken ?? context.casterToken ?? null;
  }

  // Post a chat notification
  const npcToken = context.npcToken;
  if (npcToken) {
    await postChatMessage(
      `${actor.name} uses <strong>${chosenItem.name}</strong> as a reaction!`,
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
  }

  try {
    await executeMidiItem(chosenItem, targetToken, npcToken ?? null, {});
  } catch (err) {
    log(`[Reactions] ${actor.name}: ${chosenItem.name} execution failed: ${err.message}`, "warn");
    // Un-spend on failure so it can try again next trigger
    _reactionSpent.delete(actorId);
    return false;
  }

  return true;
}

// ─── Main entry point ─────────────────────────────────────────────────────────

/**
 * Force-execute an automated NPC turn, bypassing gate checks (CR limit,
 * enabledByDefault, combatOnly, automation-off guard). Safety checks like
 * token existence and 0-HP guard are deliberately preserved.
 *
 * Only works on NPC-type actors. Player character types are always blocked.
 *
 * @param {Combatant} combatant
 * @param {Combat}    combat
 */
export async function forceAutomateTurn(combatant, combat) {
  const actor = combatant.actor;
  if (!actor) return;

  // Hard block: never force-automate player characters, even via override.
  if (actor.type === "character") {
    ui.notifications.warn(game.i18n.format("NCA.Notify.ForcePcBlocked", { name: actor.name }));
    return;
  }

  log(`=== Force Automate: ${actor.name} (overrideGates=true) ===`);
  await executeNPCTurn(combatant, combat, { overrideGates: true });
}

/**
 * Execute an automated NPC turn.
 * Called from the combat hook handler in main.js.
 *
 * @param {Combatant} combatant
 * @param {Combat}    combat
 * @param {object}    [opts]
 * @param {boolean}   [opts.overrideGates=false]  When true, bypasses: CR limit,
 *   enabledByDefault, combatOnly, and the automation-active guard. Safety checks
 *   (token on canvas, 0-HP guard, player-character block) are always enforced.
 */
export async function executeNPCTurn(combatant, combat, { overrideGates = false } = {}) {

  // ── Pause guard — must be the very first check ───────────────────────────
  if (game.paused) {
    log("Game paused — automation halted.");
    return;
  }

  // ── Player-ownership hard block ───────────────────────────────────────────
  const actor = combatant.actor;
  if (!actor) return;

  // Block player characters by type first — this is the authoritative check.
  // actor.type === "character" is unambiguous in the dnd5e system and catches
  // PCs that have no player account attached (e.g. absent player, GM-run PC)
  // where hasPlayerOwner would incorrectly return false.
  // hasPlayerOwner and players?.length catch NPCs that player accounts own
  // (familiars, companions) but are not the primary guard for PCs.
  const isPlayerCharacterOrOwned =
    actor.type === "character" ||
    actor.hasPlayerOwner ||
    (combatant.players?.length ?? 0) > 0;

  if (isPlayerCharacterOrOwned) {
    log(`Skipping player character / player-owned actor: ${actor.name}`);
    return;
  }

  // ── Duplicate execution guard ─────────────────────────────────────────────
  const lockKey = `${combat.id}:${combatant.id}:${combat.round}:${combat.turn}`;
  if (_activeTurns.has(lockKey)) {
    log(`Turn already executing for ${combatant.name} — skipping.`);
    return;
  }
  _activeTurns.add(lockKey);

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("TURN_TIMEOUT")), TURN_TIMEOUT_MS)
  );

  let automationSucceeded = false;
  try {
    automationSucceeded = await Promise.race([
      _runTurn(combatant, combat, { overrideGates }),
      timeoutPromise,
    ]) === true;
  } catch (err) {
    if (err.message === "TURN_TIMEOUT") {
      const msg = game.i18n.format("NCA.Errors.TurnTimeout", { name: combatant.name });
      console.warn(`[NCA] ${msg}`);
      ui.notifications.warn(msg);
    } else {
      console.error(`[NCA] Error during turn for ${combatant.name}:`, err);
      ui.notifications.error(game.i18n.localize("NCA.Errors.AutomationFailed"));
      if (getSetting(SETTINGS.PAUSE_ON_ERROR)) {
        await game.combat?.stopCombat?.();
      }
    }
  } finally {
    _activeTurns.delete(lockKey);
  }

  // Only advance turn if this was a legitimate NPC turn and automation finished
  const isNPC = actor.type === "npc" && !actor.hasPlayerOwner;

  if (
    automationSucceeded &&
    isNPC &&
    getSetting(SETTINGS.AUTO_END_TURN) &&
    game.combat?.id === combat.id &&
    !game.paused
  ) {
    await delay(400);
    try {
      await game.combat.nextTurn();
    } catch (e) {
      log("Could not advance turn automatically: " + e.message, "warn");
    }
  } else if (!automationSucceeded && isNPC) {
    log(`Turn NOT advanced for ${combatant.name} — automation did not complete.`);
  }
}

// ─── Core turn logic ──────────────────────────────────────────────────────────

async function _runTurn(combatant, combat, { overrideGates = false } = {}) {
  // Trace: open a row for this turn. Annotated throughout, closed in the
  // finally block at the end of this function. Safe no-op when tracing is off.
  trace.beginTurn(combatant);
  try {
    return await _runTurnInner(combatant, combat, { overrideGates });
  } finally {
    trace.endTurn(combatant);
  }
}

async function _runTurnInner(combatant, combat, { overrideGates = false } = {}) {
  // Secondary pause + player guard inside _runTurn (called via Promise.race)
  if (game.paused) { log("Game paused at _runTurn entry."); return; }

  // Fresh sightline memo per turn (Task 3): approach, kite and scoot within
  // this turn share the cache; walls/doors invalidate it via hooks.
  clearLOSCache();

  const actor = combatant.actor;
  if (!actor) throw new Error(`Combatant ${combatant.name} has no actor.`);

  // Hard block — never automate player characters or player-owned actors.
  // actor.type === "character" is checked first as the definitive type guard.
  if (actor.type === "character" || actor.hasPlayerOwner) {
    log(`_runTurn: ${actor.name} is a player character or player-owned. Aborting.`);
    return;
  }

  // ── 0 HP guard — never automate a defeated NPC ────────────────────────────
  const hp = actor.system?.attributes?.hp?.value ?? 0;
  if (hp <= 0) {
    log(`${actor.name} at 0 HP — skipping automation.`);
    return;
  }

  const npcToken = combatant.token?.object ?? _getTokenForCombatant(combatant);
  if (!npcToken) throw new Error(`No token found for ${combatant.name}.`);

  const actionDelay = getSetting(SETTINGS.ACTION_DELAY);
  const attackDelay = getSetting(SETTINGS.ATTACK_DELAY);
  const maxActions  = getSetting(SETTINGS.MAX_ACTIONS_PER_TURN);

  log(`=== Automating turn: ${actor.name} ${overrideGates ? "[FORCE OVERRIDE]" : ""} ===`);

  // ── 0. CR automation limit ─────────────────────────────────────────────────
  // Bypassed when overrideGates is true (Force Automate button).
  const maxCR = getSetting(SETTINGS.MAX_AUTOMATED_CR);
  const cr    = Number(actor.system?.details?.cr ?? 0);
  if (!overrideGates && cr > maxCR) {
    log(`${actor.name} exceeds CR limit (${cr} > ${maxCR}) — skipping.`);
    return;
  } else if (overrideGates && cr > maxCR) {
    log(`${actor.name} exceeds CR limit (${cr} > ${maxCR}) — bypassed by Force Automate.`);
  }

  // ── 0a. Behavioral effect overrides (charm, confusion, midi spells) ───────
  // Must run before retreat/targeting so charm/confusion redirect the turn.
  let effectOverride = null;
  if (getSetting(SETTINGS.ENABLE_EFFECT_OVERRIDES)) {
    effectOverride = await resolveEffectOverride(actor, npcToken, combat);
    if (effectOverride) {
      log(`${actor.name}: Effect override active — type="${effectOverride.type}"`);
      trace.annotate(actor.id, {
        effectOverride: {
          type:       effectOverride.type,
          rollResult: effectOverride.rollResult ?? null,
          skipAttack: !!effectOverride.skipAttack,
        },
      });
    }
  }

  // Short-circuit: incapacitated NPCs end their turn immediately.
  // Generic turn suppression (conditions.js): unconscious, petrified, stunned,
  // Command:halt/grovel/drop, etc. Hard no-op like incapacitated.
  if (effectOverride?.suppressTurn) {
    if (effectOverride.chatKey) {
      await postChatMessage(
        game.i18n.format(effectOverride.chatKey, effectOverride.chatParams),
        { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
      );
    }
    return true;
  }

  if (effectOverride?.type === "incapacitated") {
    await postChatMessage(
      game.i18n.format(effectOverride.chatKey, effectOverride.chatParams),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    return true;
  }

  // Confusion: execute the d10 result and end the turn.
  if (effectOverride?.type === "confusion") {
    await postChatMessage(
      game.i18n.format(effectOverride.chatKey, effectOverride.chatParams),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    await delay(actionDelay);

    if (effectOverride.rollResult === 1) {
      // Random wander: pick a random adjacent direction and move one step.
      await _wanderRandomly(npcToken);
    } else if (!effectOverride.skipAttack && effectOverride.forceTarget) {
      // Confused attack on a random creature in reach.
      effectOverride.forceTarget.setTarget(true, { user: game.user, releaseOthers: true });
      const confusedAttacks = getAttackItems(actor);
      if (confusedAttacks.length > 0) {
        const confusedItem = confusedAttacks[0];
        try {
          // Same fix as the main attack loop: await the real workflow, or the
          // setTarget(false) sweep below fires while the attack is still rolling.
          await executeMidiItem(confusedItem, effectOverride.forceTarget, npcToken, {});
        } catch (err) {
          log(`${actor.name}: Confused attack failed: ${err.message}`, "warn");
        }
      }
      game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
    }
    // Result 2-6 (frozen) and 9-10 (acts normally, effectOverride=null) are handled
    // implicitly: frozen returns true here, normal returned null above.
    return true;
  }

  // Held in place: skip move and attack.
  if (effectOverride?.type === "hold") {
    await postChatMessage(
      game.i18n.format(effectOverride.chatKey, effectOverride.chatParams),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    return true;
  }

  // ── 0b. Elevation adjustment ──────────────────────────────────────────────
  // Flying and burrowing creatures adjust their elevation before moving.
  // This happens before target selection so distanceBetweenTokens is 3D-accurate.
  let elevationProfile = null;
  if (getSetting(SETTINGS.ENABLE_ELEVATION)) {
    elevationProfile = getElevationProfile(actor, npcToken.document);
    if (elevationProfile.isAirborne || elevationProfile.isSubterranean) {
      const walkSpeed  = Number(actor.system?.attributes?.movement?.walk ?? 30);
      const moveSpeed  = Math.min(walkSpeed, getSetting(SETTINGS.MAX_MOVEMENT));
      // We pass a rough budget here; horizontal movement will deduct the remainder.
      // A more precise integration would share a single budget object — future work.
      const { budgetSpent } = await adjustElevationForTurn(
        npcToken,
        null,  // no target yet — we'll refine after selection
        moveSpeed,
        elevationProfile
      );
      if (budgetSpent > 0) {
        log(`${actor.name}: Elevation pre-adjustment spent ${budgetSpent}ft of movement budget.`);
      }
    }
  }

  // ── Fear / retreat inversion ─────────────────────────────────────────────
  // This intentionally runs before target selection and attack planning. A
  // frightened or bloodied coward-type NPC is not choosing an attack target;
  // it is trying to increase distance from player characters.
  const retreatDecision = getRetreatDecision(actor);

  // ── Build tactical AI behavior context ───────────────────────────────────
  // Built once per turn; O(combatants), no canvas scan. Null-safe if AI disabled.
  let behaviorCtx = null;
  let behaviorDecision = null;
  if (getSetting(SETTINGS.ENABLE_BEHAVIOR_AI)) {
    behaviorCtx = buildBehaviorContext(combatant, combat);

    // Pre-compute a rough situation for the behavior scorer.
    // We don't have a target yet, so use battlefield-level approximations.
    const roughSituation = {
      distanceFt:   999,
      inMeleeRange: false,
      attackRange:  5,
      targetHpRatio: 1,
    };
    behaviorDecision = scoreBehaviors(behaviorCtx, roughSituation);
    log(`${actor.name}: BehaviorDecision → ${behaviorDecision.decision} (chatHint=${behaviorDecision.chatHint})`);

    // Trace annotation — full behavior context snapshot for post-mortem analysis.
    trace.annotate(actor.id, {
      archetypeKeys:    behaviorCtx.archetypeKeys,
      intScore:         behaviorCtx.intScore,
      wisScore:         behaviorCtx.wisScore,
      hpRatio:          Number(behaviorCtx.hpRatio?.toFixed?.(3) ?? behaviorCtx.hpRatio),
      bloodied:         behaviorCtx.bloodied,
      critical:         behaviorCtx.critical,
      morale:           Math.round(behaviorCtx.morale ?? 0),
      moraleBracket:    behaviorCtx.bracket,
      allyCount:        behaviorCtx.allyCount,
      nearbyAllyCount:  behaviorCtx.nearbyAllyCount,
      enemyCount:       behaviorCtx.enemyCount,
      nearbyEnemyCount: behaviorCtx.nearbyEnemyCount,
      hasSpells:        behaviorCtx.hasSpells,
      behaviorScores:   behaviorDecision.scores,
      behaviorDecision: behaviorDecision.decision,
      forceRetreat:     behaviorDecision.forceRetreat,
    });
  }

  // ── AI-driven retreat override ────────────────────────────────────────────
  // The behavior AI can trigger a retreat independent of condition flags.
  // Only activates if the existing rules-based system hasn't already decided.
  const aiBehaviorRetreat = behaviorDecision?.forceRetreat
    && !retreatDecision.shouldRetreat
    && !behaviorCtx?.archetypeProfile?.fearless;

  if (retreatDecision.shouldRetreat || aiBehaviorRetreat) {
    const retreatReason = retreatDecision.shouldRetreat
      ? retreatDecision.reason
      : (behaviorCtx?.bracket === "rout" ? "rout" : "morale");

    log(`${actor.name}: Retreat mode active (${retreatReason}).`);

    // Dialogue: retreat bark
    globalThis.__NCA_DIALOGUE_BUS__?.emit("retreat", { combatant });

    const retreat = await moveAwayFromPlayerCharacters(npcToken, {
      bonusActionDash: actorHasBonusActionDash(actor),
      reason: retreatReason,
    });

    trace.annotate(actor.id, {
      actionType:     "retreat",
      retreatReason,
      retreatThreat:  retreat.nearestThreatName ?? null,
    });

    await postChatMessage(
      game.i18n.format("NCA.Chat.Retreats", {
        name: actor.name,
        reason: retreatReason,
        threat: retreat.nearestThreatName ?? "the player characters",
      }),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    await delay(actionDelay);
    game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
    return true;
  }

  // ── 1. Pause check before targeting ───────────────────────────────────────
  if (game.paused) { log("Game paused before targeting."); return; }

  // ── 2. Select target ───────────────────────────────────────────────────────
  // Declared `let` (not const) because the no-LOS retry path further below may
  // swap in an alternative target when the primary turns out to be unreachable.
  // Condition behaviours (conditions.js) reshape acquisition: Dominate inverts
  // disposition (attack former allies), Blinded caps perception range, and
  // charm-like effects forbid targeting the source.
  const targetOpts = {};
  if (effectOverride?.invertDisposition) targetOpts.invertDisposition = true;
  if (effectOverride?.visionLimitFt != null) targetOpts.maxRangeFt = effectOverride.visionLimitFt;
  if (effectOverride?.forbidTargetSource && effectOverride.source) {
    targetOpts.forbidTargetId = effectOverride.source.id;
  }
  let targetToken = selectTarget(npcToken, behaviorCtx, targetOpts);
  if (!targetToken) {
    trace.annotate(actor.id, { targetName: null, targetReason: "no-valid-targets" });
    await postChatMessage(
      game.i18n.format("NCA.Chat.NoTargets", { name: actor.name }),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    log(`${actor.name}: No targets. Ending turn.`);
    // The NPC has made a legitimate decision (nothing to attack). Return true
    // so AUTO_END_TURN advances combat — otherwise the GM has to manually
    // click "next turn" every time an NPC has no valid targets.
    return true;
  }

  trace.annotate(actor.id, {
    targetId:    targetToken.id,
    targetName:  targetToken.name,
    targetIsProper: isProperName(targetToken),
    targetHp:    targetToken.actor?.system?.attributes?.hp?.value ?? null,
    targetHpMax: targetToken.actor?.system?.attributes?.hp?.max ?? null,
    targetDistanceFt: Number(distanceBetweenTokens(npcToken, targetToken)?.toFixed?.(1) ?? 0),
  });

  // ── 2.5. Re-score behavior with real target-aware situation ──────────────
  // The pre-target score (above) used a hardcoded "no information" situation
  // because the target wasn't known yet. That meant every situation.* check
  // in behavior.js was dead code at decision time — reposition/disengage/
  // attack scores ignored distance, melee range, and target HP.
  //
  // Now that we have a target, rebuild a real situation and re-score. The
  // result replaces behaviorDecision for all downstream uses (chat hint,
  // trace, signature behaviors). The forceRetreat flag from the rough pass
  // already triggered above, so re-scoring here can't reverse a retreat
  // decision — it only refines the active-combat decision.
  if (behaviorCtx) {
    const realDistanceFt = distanceBetweenTokens(npcToken, targetToken);
    const tHp    = targetToken.actor?.system?.attributes?.hp?.value ?? 1;
    const tHpMax = targetToken.actor?.system?.attributes?.hp?.max ?? 1;

    const realSituation = {
      distanceFt:    realDistanceFt,
      // 5ft is the standard reach; long-reach NPCs (giants, polearms) still
      // get the "in-range bonus" via the attackRange fallback below.
      inMeleeRange:  realDistanceFt <= 5,
      attackRange:   _estimateAttackRange(actor),
      targetHpRatio: tHpMax > 0 ? (tHp / tHpMax) : 1,
    };

    const roughScores  = behaviorDecision?.scores ?? null;
    const realDecision = scoreBehaviors(behaviorCtx, realSituation);
    log(`${actor.name}: BehaviorDecision (re-scored) → ${realDecision.decision} ` +
        `(chatHint=${realDecision.chatHint}, dist=${Math.round(realDistanceFt)}ft, ` +
        `inMelee=${realSituation.inMeleeRange}, targetHp%=${Math.round(realSituation.targetHpRatio * 100)})`);

    // Trace: emit both the rough and real scores. Diffs between them tell us
    // when target context is actually shifting the decision.
    trace.annotate(actor.id, {
      roughBehaviorScores:   roughScores,
      behaviorScores:        realDecision.scores,
      behaviorDecision:      realDecision.decision,
      realSituation,
    });

    behaviorDecision = realDecision;
  }

  await delay(actionDelay);

  // ── 2a. Charm override: move toward charmer, don't attack ─────────────────
  if (effectOverride?.type === "charm") {
    const charmSource = effectOverride.charmSource;
    await postChatMessage(
      game.i18n.format(effectOverride.chatKey, effectOverride.chatParams),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    await delay(actionDelay);
    if (charmSource) {
      // Move toward the charmer.
      await moveTowardTarget(npcToken, charmSource, 5, [],
        { bonusActionDash: actorHasBonusActionDash(actor), cognitiveProfile: behaviorCtx?.cognitiveProfile ?? null }
      );
      log(`${actor.name}: Charmed — moved toward ${charmSource.name}. No attack.`);
    }
    game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
    return true;
  }

  // ── 2b. Taunt / berserk: override target ──────────────────────────────────
  let resolvedTarget = targetToken;
  if (effectOverride?.forceTarget) {
    resolvedTarget = effectOverride.forceTarget;
    log(`${actor.name}: Effect override forcing target → ${resolvedTarget.name}`);
    await postChatMessage(
      game.i18n.format(effectOverride.chatKey, effectOverride.chatParams),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    await delay(actionDelay);
  }

  // Pacified: move but don't attack.
  if (effectOverride?.type === "pacified") {
    await postChatMessage(
      game.i18n.format(effectOverride.chatKey, effectOverride.chatParams),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    await moveTowardTarget(npcToken, resolvedTarget, 5, [],
      { bonusActionDash: actorHasBonusActionDash(actor), cognitiveProfile: behaviorCtx?.cognitiveProfile ?? null }
    );
    game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
    return true;
  }

  // ── 3. Build expanded attack list ─────────────────────────────────────────
  if (game.paused) { log("Game paused before attack planning."); return; }

  let { attacks, totalCount, isMultiattack } = resolveAttackPlan(actor, npcToken, resolvedTarget ?? targetToken);

  // Slow (conditions.js actionEconomy): a slowed creature can't take more than
  // one weapon attack per turn — collapse a multiattack to its single best
  // (first) attack. Bonus action / reaction suppression is honoured later.
  if (effectOverride?.actionEconomy?.noMultiattack && attacks.length > 1) {
    log(`${actor.name}: Slowed — multiattack reduced to a single attack.`);
    attacks = attacks.slice(0, 1);
    totalCount = 1;
    isMultiattack = false;
  }

  if (attacks.length === 0) {
    trace.annotate(actor.id, { actionType: "none", actionReason: "no-usable-attacks" });
    log(`${actor.name}: No usable attack items. Ending turn.`);
    // No attacks available is a legitimate end-of-turn condition. Return true
    // so AUTO_END_TURN advances combat instead of stalling on this NPC.
    return true;
  }

  // Trace annotation — what the NPC actually plans to do.
  trace.annotate(actor.id, {
    actionType:    isMultiattack ? "multiattack" : "attack",
    actionItems:   attacks.map(a => a?.name).filter(Boolean),
    multiattackCount: totalCount,
  });

  log(`Multiattack count: ${attacks.length}`);
  if (isMultiattack) {
    log(`Parsed Multiattack: ${attacks.map(a => a.name).join(", ")}`);
  }

  if (isMultiattack && totalCount > 1) {
    await postChatMessage(
      game.i18n.format("NCA.Chat.UsesMultiattack", { name: actor.name, count: totalCount }),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    await delay(actionDelay);
  }

  // ── 4. Move if needed ──────────────────────────────────────────────────────
  if (game.paused) { log("Game paused before movement."); return; }

  const primaryAttack = attacks[0];
  const attackRange   = getRequiredSequenceRange(attacks);

  // Declare usedActionDash before the pre-movement spell check references it.
  // It gets its real value from the moveTowardTarget destructure below.
  let usedActionDash = false;

  // ── 3b. Pre-movement spell check for spellcastingFocus archetypes ─────────
  // For casters, run spell selection BEFORE movement so movementHints can steer
  // the NPC toward the optimal casting position (e.g. blaster stays at 60ft,
  // controller moves toward AOE cluster).
  let preMovementSpellDecision = null;
  let movementHints = {};
  // Spell-suppression flags reused by both the pre-move and main spell passes.
  const spellsSuppressedPre = effectOverride?.suppressSpells || effectOverride?.suppressVerbalSpells;
  const overrideBlocksSpellPassPre = effectOverride &&
    !effectOverride.suppressSpells && !effectOverride.suppressVerbalSpells &&
    effectOverride.type !== "hasted";
  if (
    behaviorCtx?.archetypeProfile?.spellcastingFocus &&
    !overrideBlocksSpellPassPre && !spellsSuppressedPre && !usedActionDash &&
    getSetting(SETTINGS.SPELL_ENABLED)
  ) {
    const preCtx = buildSituationContext(actor, npcToken, resolvedTarget ?? targetToken, behaviorCtx);
    preMovementSpellDecision = selectBestSpell(actor, npcToken, resolvedTarget ?? targetToken, preCtx, {
      castingType: "action",
      behaviorCtx,
    });
    if (preMovementSpellDecision) {
      movementHints = getSpellMovementPreference(preMovementSpellDecision);
      log(`${actor.name}: Pre-move spell decision: "${preMovementSpellDecision.item.name}" → hints=${JSON.stringify(movementHints)}`);
    }
  }

  // Condition-driven movement constraints (conditions.js):
  //  - frightened / Command:flee → the NPC may still attack (frightened can),
  //    but must not move toward the source. Rather than teach the approach
  //    pathfinder to avoid a token, we redirect to the existing flee mover when
  //    the target IS (or is near) the fear source; otherwise we let it approach
  //    a DIFFERENT target normally (frightened only forbids approaching the
  //    source, not acting). Slow halves the budget either way.
  let conditionFleeHandled = false;
  if (effectOverride?.forbidApproachSource && effectOverride.source) {
    const tgt = resolvedTarget ?? targetToken;
    const targetIsSource = tgt && tgt.id === effectOverride.source.id;
    // If the only/!chosen target is the source it fears, it can't advance —
    // hold position (it may still attack if already in range) or back away.
    if (targetIsSource || effectOverride.commandKind === "flee") {
      await moveAwayFromPlayerCharacters(npcToken, {
        speedMultiplier: effectOverride.halveSpeed ? 0.5 : 1,
        preferFrom: effectOverride.source,
      });
      conditionFleeHandled = true;
      log(`${actor.name}: ${effectOverride.type} — moving away from ${effectOverride.source.name}.`);
    }
  }

  if (effectOverride?.halveSpeed) movementHints.speedMultiplier = 0.5;

  let moved = false, usedDash = false, attackPositionValid = true;
  if (!conditionFleeHandled) {
    ({ moved, usedDash, usedActionDash, attackPositionValid } = await moveTowardTarget(
      npcToken, resolvedTarget ?? targetToken, attackRange, attacks,
      {
        bonusActionDash:  actorHasBonusActionDash(actor),
        cognitiveProfile: behaviorCtx?.cognitiveProfile ?? null,
        movementHints,
      }
    ));
  }

  // Trace annotation — distilled movement summary. The movement subsystem
  // produces a structured result; we record only the fields useful for
  // decision-level post-mortem (not raw path data, which would bloat rows).
  {
    const gridScale = canvas?.grid?.distance ?? 5;
    const finalDistFt = Number(distanceBetweenTokens(npcToken, resolvedTarget ?? targetToken)?.toFixed?.(1) ?? 0);
    trace.annotate(actor.id, {
      movement: {
        moved:               !!moved,
        usedDash:            !!usedDash,
        usedActionDash:      !!usedActionDash,
        attackPositionValid: attackPositionValid !== false,
        finalDistanceFt:     finalDistFt,
        targetAttackRangeFt: attackRange * gridScale,
        movementHints:       movementHints ?? null,
      },
    });
  }

  // ── CRITICAL: abort the entire turn if no valid attack position was found. ──
  // moveTowardTarget returns attackPositionValid=false when:
  //   • pathfinding found no route with LOS to the target
  //   • the LOS-validated endpoint was rejected and the retry also failed
  //   • the NPC has no movement but is also out of range
  // In every such case, attacking THIS target is illegal — but we should try
  // the next-best target before giving up. Loops in the log show NPCs (esp.
  // ranged spellcasters) wasting multiple consecutive turns on a target they
  // can never reach because there's no LOS to it.
  if (!attackPositionValid) {
    // A taunt/berserk/charm override that has FORCED a specific target can't
    // be rerouted — the NPC is mind-controlled into attacking that one. Fall
    // back to the original end-turn behaviour in that case.
    if (effectOverride?.forceTarget) {
      log(`${actor.name}: No LOS to forced target — cannot reroute. Ending turn.`);
      trace.annotate(actor.id, { noLosRetry: { firstTarget: (resolvedTarget ?? targetToken).name, recoveredTo: null, blockedByOverride: true } });
      game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
      return true;
    }

    const failedTargetName = (resolvedTarget ?? targetToken).name;
    log(`${actor.name}: No LOS to ${failedTargetName} — trying next-best target.`);
    trace.annotate(actor.id, { noLosRetry: { firstTarget: failedTargetName } });

    // Try at most ONE alternative. This bounds the worst case to two move
    // calls per turn — enough to recover from the common "primary target
    // behind a wall" case without burning the per-turn time budget on a
    // sweep of every PC.
    const exclude = new Set([(resolvedTarget ?? targetToken).id]);
    const altTarget = selectTarget(npcToken, behaviorCtx, { excludeIds: exclude });

    if (altTarget) {
      log(`${actor.name}: Retrying with ${altTarget.name}.`);
      // Untarget the failed primary before retargeting
      game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));

      const retry = await moveTowardTarget(
        npcToken, altTarget, attackRange, attacks,
        {
          bonusActionDash:  actorHasBonusActionDash(actor),
          cognitiveProfile: behaviorCtx?.cognitiveProfile ?? null,
          movementHints,
        }
      );

      if (retry.attackPositionValid !== false) {
        // Retry succeeded — splice the alt target into BOTH targetToken and
        // resolvedTarget so the attack loop and every downstream
        // `resolvedTarget ?? targetToken` reference points at the new target.
        targetToken          = altTarget;
        resolvedTarget       = altTarget;
        moved                = retry.moved;
        usedDash             = retry.usedDash;
        usedActionDash       = retry.usedActionDash;
        attackPositionValid  = true;
        log(`${actor.name}: Retry succeeded — committing to ${altTarget.name}.`);
        trace.annotate(actor.id, {
          targetId:    altTarget.id,
          targetName:  altTarget.name,
          targetIsProper: isProperName(altTarget),
          targetHp:    altTarget.actor?.system?.attributes?.hp?.value ?? null,
          targetHpMax: altTarget.actor?.system?.attributes?.hp?.max ?? null,
          targetDistanceFt: Number(distanceBetweenTokens(npcToken, altTarget)?.toFixed?.(1) ?? 0),
          noLosRetry: { firstTarget: failedTargetName, recoveredTo: altTarget.name },
        });
      } else {
        log(`${actor.name}: No LOS to alt target either. Ending turn.`);
        trace.annotate(actor.id, { noLosRetry: { firstTarget: failedTargetName, recoveredTo: null } });
        game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
        return true;
      }
    } else {
      log(`${actor.name}: No alternative targets available. Ending turn.`);
      trace.annotate(actor.id, { noLosRetry: { firstTarget: failedTargetName, recoveredTo: null } });
      game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
      return true;
    }
  }

  if (moved) {
    const chatKey = usedDash ? "NCA.Chat.UsesDash" : "NCA.Chat.RushesTarget";
    await postChatMessage(
      game.i18n.format(chatKey, { name: actor.name, target: (resolvedTarget ?? targetToken).name }),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );
    await delay(actionDelay);
  }

  // D&D 5e: Dash as an action consumes the action. Some NPCs can also Dash
  // as a bonus action; if they needed both bonus-action Dash and action Dash,
  // they still cannot attack this turn.
  if (usedActionDash) {
    log(`${actor.name} used action Dash — no attack this turn.`);
    game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
    return true;
  }

  if (usedDash) {
    log(`${actor.name} used bonus-action Dash — continuing to attack.`);
  }

  // ── 4a. Elevation refinement after target is known ────────────────────────
  // Now that we know the target, let a flying/burrowing NPC fine-tune its
  // elevation relative to the actual target elevation before attacking.
  // We pass the creature's full fly/burrow speed as the elevation budget —
  // elevation changes draw from the same movement pool as horizontal movement,
  // and since moveTowardTarget doesn't expose remaining budget we use the full
  // speed as an upper bound (the NPC may have spent some horizontally, but
  // for flying creatures the vertical adjustment is the critical path when
  // the target is elevated and the NPC couldn't close horizontally).
  if (elevationProfile && (elevationProfile.isAirborne || elevationProfile.isSubterranean)) {
    const flySpeed   = Number(actor.system?.attributes?.movement?.fly ?? 0);
    const elevBudget = Math.min(flySpeed || getSetting(SETTINGS.MAX_MOVEMENT), getSetting(SETTINGS.MAX_MOVEMENT));
    const { newElevation } = await adjustElevationForTurn(
      npcToken, resolvedTarget ?? targetToken, elevBudget,
      elevationProfile
    );
    // Check melee viability after elevation adjustment.
    if (attacks.length > 0 && attacks.some(a => getItemRange(a) <= 10)) {
      const targetElev = Number((resolvedTarget ?? targetToken).document?.elevation ?? 0);
      if (!canAttackFromElevation(newElevation, targetElev, 10)) {
        log(`${actor.name}: Elevation gap (${Math.abs(newElevation - targetElev)}ft) prevents melee — will rely on ranged attacks.`);
      }
    }
  }

  // ── 4b. Spell AI — main action spell check ───────────────────────────────
  // selectBestSpell now runs in all worlds (no midi gate). The CR check has been
  // removed — archetype and cognitive profile drive spell usage instead.
  // For spellcastingFocus archetypes, pre-movement spell selection already ran
  // above (step 3b); here we confirm with post-move position and execute.
  let usedMidiSpell = false;
  // 2014 rule tracking: at most one spell-slot (levelled) spell per turn.
  // Bonus-action levelled spells and action levelled spells are mutually
  // exclusive; only cantrips may accompany a levelled cast.
  let leveledSlotSpellThisTurn = false;
  // Track item IDs spent this turn so the bonus-action phase doesn't re-use the
  // same item (e.g. a weapon that has both an action and a bonus activation).
  const usedItemIds = new Set();
  // (spell-suppression flags computed earlier: spellsSuppressedPre /
  // overrideBlocksSpellPassPre — reuse them here.)
  const spellsSuppressed = spellsSuppressedPre;
  const overrideBlocksSpellPass = overrideBlocksSpellPassPre;
  if (!overrideBlocksSpellPass && !spellsSuppressed && !usedActionDash && getSetting(SETTINGS.SPELL_ENABLED)) {
    const effectiveTarget = resolvedTarget ?? targetToken;
    const situationCtx = buildSituationContext(actor, npcToken, effectiveTarget, behaviorCtx);

    const spellDecision = selectBestSpell(actor, npcToken, effectiveTarget, situationCtx, {
      castingType: "action",
      behaviorCtx,
    });

    if (spellDecision) {
      const { item: bestSpell, concentrationBreak, targeting, slotLevel } = spellDecision;
      log(`${actor.name}: Using spell/feature "${bestSpell.name}" (score=${spellDecision.score.toFixed(1)}).`);

      // Break concentration if the new spell is significantly better
      if (concentrationBreak) {
        await breakConcentration(actor);
        log(`${actor.name}: Broke concentration to cast "${bestSpell.name}".`);
      }

      // Set targeting — self-buff spells target the NPC itself, not the enemy
      const castTarget = targeting.mode === "self"
        ? npcToken
        : (targeting.primaryTarget ?? effectiveTarget);
      if (castTarget) {
        castTarget.setTarget(true, { user: game.user, releaseOthers: true });
      }

      await postChatMessage(
        game.i18n.format("NCA.Chat.CastsSpell", {
          name:   actor.name,
          spell:  bestSpell.name,
          target: castTarget?.name ?? game.i18n.localize("NCA.Chat.Area"),
        }),
        { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
      );
      await delay(attackDelay);

      try {
        await executeMidiItem(bestSpell, castTarget, npcToken, {
          slotLevel,
          aoeOrigin: targeting.aoeOrigin ?? null,
        });
        usedMidiSpell = true;
        if (bestSpell?.id) usedItemIds.add(bestSpell.id);
        recordSpellCast(actor, bestSpell);  // record AFTER successful cast
        // 2014 one-leveled-spell-per-turn rule: did the main action consume a
        // spell slot (level ≥ 1 spell that is NOT at-will/innate)? Cantrips and
        // innate/limited-use features do not count.
        if (bestSpell.type === "spell" && Number(bestSpell.system?.level ?? 0) > 0) {
          leveledSlotSpellThisTurn = true;
        }
        trace.annotate(actor.id, {
          actionType:  "spell",
          actionItems: [bestSpell.name],
          spell: {
            name:       bestSpell.name,
            level:      Number(bestSpell.system?.level ?? 0),
            slotLevel:  slotLevel ?? null,
            category:   spellDecision.category ?? null,
            score:      Number(spellDecision.score?.toFixed?.(2) ?? spellDecision.score ?? 0),
            targetMode: targeting.mode ?? null,
          },
        });
        // Spellcast bark — caster archetypes have dedicated "spell" pools;
        // others fall back to their tactical lines (dialogue-manager fallback).
        globalThis.__NCA_DIALOGUE_BUS__?.emit("spell-cast", {
          combatant,
          spellName: bestSpell.name,
        });
      } catch (err) {
        log(`${actor.name}: Spell/feature "${bestSpell.name}" failed: ${err.message}`, "warn");
        trace.annotate(actor.id, { spellError: String(err?.message ?? err) });
      }

      game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));

      // ── 4c. Bonus action spell pass ───────────────────────────────────────
      // 2014 one-leveled-spell-per-turn rule (ENFORCE_ONE_LEVELLED_SPELL,
      // default on): if the action already spent a spell slot, the bonus pass
      // may only cast a cantrip. On 2024 stat blocks (no slots) this is a
      // no-op. Setting off → no restriction (2024 monsters / homebrew).
      const enforceOneSlot = getSetting(SETTINGS.ENFORCE_ONE_LEVELLED_SPELL);
      const mainActionWasLevelledSpell = bestSpell.type === "spell" &&
        Number(bestSpell.system?.level ?? 0) > 0;

      if (getSetting(SETTINGS.SPELL_ENABLED)) {
        const bonusSituationCtx = buildSituationContext(actor, npcToken,
          resolvedTarget ?? targetToken, behaviorCtx);
        const bonusDecision = selectBestSpell(actor, npcToken,
          resolvedTarget ?? targetToken, bonusSituationCtx, {
            castingType: "bonus",
            behaviorCtx,
            // When a slot was already spent this turn, restrict the bonus pass
            // to cantrips (level 0) so we never spend two slots in one turn.
            cantripOnly: enforceOneSlot && (leveledSlotSpellThisTurn || mainActionWasLevelledSpell),
          });

        if (bonusDecision) {
          log(`${actor.name}: Bonus action spell — "${bonusDecision.item.name}".`);
          if (bonusDecision.concentrationBreak) await breakConcentration(actor);
          const bonusTarget = bonusDecision.targeting.mode === "self"
            ? npcToken
            : (bonusDecision.targeting.primaryTarget ?? (resolvedTarget ?? targetToken));
          if (bonusTarget) bonusTarget.setTarget(true, { user: game.user, releaseOthers: true });

          await delay(attackDelay / 2);
          try {
            await executeMidiItem(bonusDecision.item, bonusTarget, npcToken, {
              slotLevel:  bonusDecision.slotLevel,
              aoeOrigin:  bonusDecision.targeting.aoeOrigin ?? null,
            });
            recordSpellCast(actor, bonusDecision.item);  // record AFTER success
          } catch (err) {
            log(`${actor.name}: Bonus action spell "${bonusDecision.item.name}" failed: ${err.message}`, "warn");
          }
          game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
        }
      }

      // Falls through to the weapon-attack loop below. That loop is guarded
      // with `if (usedMidiSpell) break;` so weapon attacks don't double-fire,
      // but execution continues to the post-attack kite/scoot block — which
      // means a caster like the Mage now gets the chance to step into cover
      // after casting, instead of just returning here.
    }
  }

  // ── 5. Execute all attacks ─────────────────────────────────────────────────
  // attacks[] is already the FULLY EXPANDED list (e.g. [Claw, Claw, Claw]).
  // attacksRemaining decrements each iteration; the loop ends when it hits 0.

  let attacksRemaining = attacks.length;
  let attackIndex      = 0;
  const totalAttacks   = attacks.length;
  let turnCompleted    = false;

  // The safety cap is a runaway-loop guard. It must never be lower than the
  // actual parsed attack count, or valid multiattacks get silently cut short.
  const effectiveCap = Math.max(maxActions, totalAttacks);
  if (effectiveCap > maxActions) {
    log(`${actor.name}: Parsed ${totalAttacks} attacks — raising safety cap from ${maxActions} to ${effectiveCap} for this turn.`);
  }

  while (attacksRemaining > 0) {

    // ── Spell already fired? Skip the weapon-attack loop entirely. ─────────
    // The spell branch above no longer returns early — it falls through so the
    // post-attack kite/scoot can run for casters. But we must not double-act,
    // so the action-spent flag short-circuits the weapon loop.
    if (usedMidiSpell) {
      turnCompleted = true; // spell cast counts as a completed action
      break;
    }

    // ── Mid-turn pause check — halts immediately ───────────────────────────
    if (game.paused) {
      log("Automation paused mid-turn.");
      game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
      return;
    }

    // Safety cap
    if (attackIndex >= effectiveCap) {
      log(`${actor.name}: Safety cap reached (${effectiveCap}). Stopping.`);
      break;
    }

    const item = attacks[attackIndex];
    if (item?.id) usedItemIds.add(item.id);

    // ── Per-attack LOS gate ────────────────────────────────────────────────
    // attackPositionValid was set by moveTowardTarget and reflects whether the
    // NPC has a legal attack position with LOS to the target.  If it becomes
    // false mid-multiattack (e.g. due to target movement or initial failure),
    // the entire remaining multiattack sequence must abort.
    if (!attackPositionValid) {
      log(`${actor.name}: Cannot attack (${item.name}) — no legal LOS position. Aborting multiattack.`);
      break;
    }

    // Validate and refresh target before every attack
    let currentTarget = _refreshTarget(targetToken);
    if (!currentTarget) {
      log(`${actor.name}: Original target gone. Retargeting.`);
      const fallenId = targetToken?.id ?? null;
      currentTarget = selectTarget(npcToken, behaviorCtx,
        fallenId ? { excludeIds: [fallenId] } : {});
      if (!currentTarget) {
        log(`${actor.name}: No valid targets remain. Ending attacks.`);
        break;
      }

      // ── Retarget-on-kill range gate (Task 8, RETARGET_ON_KILL) ────────────
      // Remaining attacks happen from the CURRENT position — no new movement.
      // The replacement must already be inside this weapon's reach (+5ft
      // slack for diagonals); otherwise the remaining attacks are forfeit
      // rather than swung pointlessly across the map.
      if (getSetting(SETTINGS.RETARGET_ON_KILL)) {
        const reach = Math.max(5, getItemReach(item) || 5);
        const dist  = distanceBetweenTokens(npcToken, currentTarget);
        if (dist > reach + 5) {
          log(`${actor.name}: Retarget ${currentTarget.name} is out of reach ` +
              `(${dist.toFixed(0)}ft > ${reach}ft) — forfeiting ${attacksRemaining} remaining attack(s).`);
          trace.annotate(actor.id, {
            retargetedMidTurn: { from: targetToken?.name, to: null, reason: "out_of_reach",
                                 attacksForfeit: attacksRemaining },
          });
          break;
        }
        trace.annotate(actor.id, {
          retargetedMidTurn: { from: targetToken?.name, to: currentTarget.name,
                               attacksRemaining },
        });
      }

      // Keep subsequent iterations (and post-action kite/scoot context) on
      // the live target instead of re-selecting every swing.
      targetToken = currentTarget;
    }

    log(`Executing attack ${attackIndex + 1}/${totalAttacks} — ${item.name} → ${currentTarget.name}`);

    currentTarget.setTarget(true, { user: game.user, releaseOthers: true });

    // Optional lethal confirmation
    if (getSetting(SETTINGS.LETHAL_CONFIRM)) {
      const couldBeLethal = await _checkIfLethal(item, currentTarget.actor);
      if (couldBeLethal) {
        const confirmed = await Dialog.confirm({
          title: game.i18n.localize("NCA.Dialog.LethalTitle"),
          content: game.i18n.format("NCA.Dialog.LethalContent", { attacker: actor.name, target: currentTarget.name }),
          defaultYes: true,
        });
        if (!confirmed) {
          log(`GM declined lethal attack ${attackIndex + 1}. Skipping.`);
          attacksRemaining--;
          attackIndex++;
          continue;
        }
      }
    }

    await postChatMessage(
      game.i18n.format("NCA.Chat.Attacks", {
        name:   actor.name,
        target: currentTarget.name,
        weapon: item.name,
      }),
      { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
    );

    // Validate target before each attack
    if (!currentTarget?.document) {
      log(`${actor.name}: Target has no document — skipping attack ${attackIndex + 1}.`);
      attacksRemaining--;
      attackIndex++;
      continue;
    }
    if (currentTarget.document.hidden) {
      log(`${actor.name}: Target is hidden — skipping attack ${attackIndex + 1}.`);
      attacksRemaining--;
      attackIndex++;
      continue;
    }

    // Execute attack — must be awaited to prevent async races.
    // NOTE: dnd5e may emit "senses.darkvision has moved to senses.ranges.darkvision"
    // warnings during this call.  These originate inside the dnd5e system's own
    // vision/sense resolution code, not in this module.  They are harmless until
    // a future dnd5e release removes the compatibility shim; update this comment
    // when dnd5e >= 4.x drops the legacy path and the warnings become errors.


    // ── FINAL USES GATE (0.26.0) ──────────────────────────────────────────
    // Last line of defence before spending an action: re-read the LIVE item and
    // refuse to fire anything whose limited uses are exhausted. Upstream callers
    // each had their own (some broken) checks; this chokepoint guarantees no
    // depleted feature/spell can ever be executed, whatever path selected it.
    try {
      if (!hasUsesRemaining(item)) {
        log(`${actor.name}: "${item.name}" has no uses remaining — skipping attack ${attackIndex + 1}.`);
        attacksRemaining--;
        attackIndex++;
        continue;
      }
    } catch { /* resolver failure must not block an at-will attack */ }

    // Dialogue: attack effort + attack bark
    globalThis.__NCA_DIALOGUE_BUS__?.emit("attack-start", { combatant, item });

    try {
      // Route through the shared execution chokepoint. This loop was the ONLY
      // path in the module still calling item.use() directly — spells (1240),
      // bonus actions (1309), legendary (legendary.js:426), lair (lair.js:246)
      // and opportunity attacks (opportunity.js:158) all use executeMidiItem.
      //
      // The difference is that item.use() resolves as soon as midi's workflow
      // is handed off, so the loop raced ahead: the delay below started while
      // the attack roll was still pending, the next iteration called
      // setTarget(..., releaseOthers: true), and end-of-turn cleanup cleared
      // game.user.targets — all potentially before the workflow had rolled.
      await executeMidiItem(item, currentTarget, npcToken, {});
      turnCompleted = true;
    } catch (err) {
      // One failed attack must NOT abort the remaining attacks
      console.error(`[NCA] Attack failed for ${actor.name} with ${item.name}:`, err);
      ui.notifications.warn(
        game.i18n.format("NCA.Errors.AttackFailed", { name: actor.name, item: item.name })
      );
    }

    attacksRemaining--;
    attackIndex++;

    // Delay between attacks — skip after the final one
    if (attacksRemaining > 0) {
      await delay(attackDelay);
    }
  }

  // ── Post-attack skirmisher kite ────────────────────────────────────────────
  // Skirmishers use any remaining movement to flee melee range after attacking.
  // Does NOT fire if the NPC used action Dash (no movement reserve left).
  //
  // Kiting without Disengage provokes opportunity attacks from every adjacent
  // enemy (5e RAW). We require the actor to have a bonus-action Disengage
  // feature, or fall back to the KITE_REQUIRES_DISENGAGE setting to override.
  const archetypeProfile = behaviorCtx?.archetypeProfile ?? {};
  const kiteRequiresDisengage = getSetting(SETTINGS.KITE_REQUIRES_DISENGAGE) ?? true;
  const hasDisengage = !kiteRequiresDisengage || actorHasBonusActionDisengage(actor);
  let kiteRan = false;
  if (!usedActionDash && archetypeProfile.kiteEnabled && hasDisengage) {
    const kiteRangeFt    = archetypeProfile.kiteRange ?? 30;
    const speedFt        = Number(actor.system?.attributes?.movement?.walk ?? 30);
    const normalBudgetFt = Math.min(speedFt, getSetting(SETTINGS.MAX_MOVEMENT));
    const spentCells     = normalBudgetFt / canvas.grid.distance;
    const kiteResult = await moveSkirmisherKite(
      npcToken,
      resolvedTarget ?? targetToken,
      spentCells,
      kiteRangeFt,
      elevationProfile ?? null
    );
    kiteRan = !!kiteResult?.moved;
  }

  // ── Post-attack scoot to cover ────────────────────────────────────────────
  // For high-INT ranged NPCs who didn't kite, take the "wizard ducks behind a
  // pillar" reposition: move to a cell that breaks the target's LOS to us.
  // Two combined benefits:
  //   1. Self-preservation — target can't retaliate at range against a covered NPC.
  //   2. Lane-clearing — the NPC moves out of the way of melee allies who
  //      otherwise can't path through the cell the NPC was standing in.
  //
  // Gating (all required):
  //   • Has remaining movement (didn't action-dash, kite didn't already fire)
  //   • INT ≥ 14 (SMART or above) — only smart creatures think positionally
  //   • Ranged-leaning archetype (rangedPreference > 10)
  //   • Successful attack this turn (don't scoot after a failed turn — the
  //     NPC may already be in a weird place because of LOS retry failure)
  //   • Not routing — handled earlier by the retreat branch which would have
  //     replaced this entire flow.
  const SCOOT_INT_THRESHOLD = 14;            // INT.SMART
  const SCOOT_RANGED_THRESHOLD = 10;          // archetypeProfile.rangedPreference > 10
  const isSmart       = (behaviorCtx?.intScore ?? 0) >= SCOOT_INT_THRESHOLD;
  const isRangedLeaning = (archetypeProfile.rangedPreference ?? 0) > SCOOT_RANGED_THRESHOLD;
  // Either a weapon attack landed OR the NPC successfully cast a spell. Both
  // count as "spent the action" and qualify for the post-action scoot.
  const attackedSuccessfully = (turnCompleted && attackIndex > 0) || usedMidiSpell;

  // ── Haste: one extra action (we use it as an extra weapon attack) ──────────
  // Hasted creatures get an additional action limited to Attack (one weapon
  // attack), Dash, Disengage, Hide, or Use Object. The simplest high-value use
  // is an extra attack on the current target if one is in range; otherwise we
  // let the existing kite/scoot movement stand in for a Dash.
  if (effectOverride?.actionEconomy?.extraAction && attackedSuccessfully && !game.paused) {
    const ht = resolvedTarget ?? targetToken;
    if (ht && _refreshTarget(ht)) {
      const reach = Math.max(5, attackRange || 5);
      if (distanceBetweenTokens(npcToken, ht) <= reach + 5 && attacks.length) {
        log(`${actor.name}: Hasted — taking an extra attack.`);
        try {
          ht.setTarget(true, { user: game.user, releaseOthers: true });
          await executeMidiItem(attacks[0], ht, npcToken, {});
          trace.annotate(actor.id, { haste: { extraAttack: true, target: ht.name } });
        } catch (err) {
          log(`${actor.name}: Hasted extra attack failed: ${err.message}`, "warn");
        }
      }
    }
  }

  if (!kiteRan && !usedActionDash && isSmart && isRangedLeaning && attackedSuccessfully) {
    const scoot = await scootToCover(npcToken, resolvedTarget ?? targetToken);
    trace.annotate(actor.id, {
      scoot: {
        attempted:        true,
        moved:            !!scoot.moved,
        takenCover:       !!scoot.takenCover,
        finalDistanceFt:  scoot.finalDistanceFt ?? null,
      },
    });
    if (scoot.moved) {
      log(`${actor.name}: scooted to cover after action (lane cleared for allies).`);
    }
  }

  // ── Post-action bonus-action phase ────────────────────────────────────────
  // Spend a bonus action if one is available and the NPC actually took its main
  // action this turn. Beneficial bonus spells route through ally/self targeting
  // (Healing Word never lands on an enemy); bonus heals only fire when someone
  // is hurt. Gated behind ENABLE_BONUS_ACTIONS.
  if (getSetting(SETTINGS.ENABLE_BONUS_ACTIONS) && attackedSuccessfully && !game.paused
      && !effectOverride?.actionEconomy?.noBonusAction) {
    await _runBonusActionPhase(actor, npcToken, resolvedTarget ?? targetToken, usedItemIds, behaviorCtx);
  }

  // Release all targets — turn is now fully complete
  game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));

  log(`=== Turn complete: ${actor.name} — ${attackIndex}/${totalAttacks} attacks executed ===`);
  return turnCompleted;
}

// ─── Attack plan resolution ───────────────────────────────────────────────────

/**
 * Build an EXPANDED, ordered list of Item5e instances to use this turn.
 *
 * Multiattack expansion: if parsed result is { count: 3, attacks: ["Claw"] }
 * the returned attacks array is [Claw, Claw, Claw] — NOT a single Claw.
 *
 * @param {Actor5e} actor
 * @param {Token}   npcToken
 * @param {Token}   targetToken
 * @returns {{ attacks: Item5e[], totalCount: number, isMultiattack: boolean }}
 */
function resolveAttackPlan(actor, npcToken, targetToken) {
  const allAttacks = getAttackItems(actor);
  const allActions = getUsableActionItems(actor);
  const prefMulti  = getSetting(SETTINGS.PREFER_MULTIATTACK);
  const prefMelee  = getSetting(SETTINGS.PREFER_MELEE);
  const prefRanged = getSetting(SETTINGS.PREFER_RANGED);
  const dist       = distanceBetweenTokens(npcToken, targetToken);
  const meleeRange = 10;

  log(`resolveAttackPlan: ${allAttacks.length} offensive items, ${allActions.length} usable action items, dist=${Math.round(dist)}ft`);

  if (allActions.length === 0) return { attacks: [], totalCount: 0, isMultiattack: false };

  if (prefMulti && findMultiattackFeature(actor)) {
    const parsed = parseMultiattack(actor);
    if (parsed) {
      // expandedActions is fully inflated — e.g. 3× Claw → [Claw, Claw, Claw]
      const expandedActions = buildExpandedMultiattack(parsed, allAttacks, allActions, actor.items?.contents ?? [], dist, meleeRange, prefMelee, prefRanged);
      if (expandedActions.length > 0) {
        log("Resolved (multiattack expanded): " + expandedActions.map(a => a.name).join(", "));
        return { attacks: expandedActions, totalCount: parsed.count, isMultiattack: true };
      }
    }
  }

  const best = pickBestSingleAttack(allAttacks.length ? allAttacks : allActions, dist, meleeRange, prefMelee, prefRanged);
  if (best) {
    log("Resolved (single): " + best.name);
    return { attacks: [best], totalCount: 1, isMultiattack: false };
  }

  return { attacks: [], totalCount: 0, isMultiattack: false };
}

/**
 * Build a FULLY EXPANDED attack array from parsed multiattack data.
 *
 * If parsed.attackNames contains per-attack names with optional counts:
 *   { count: 3, attackNames: ["Claw", "Claw", "Bite"] }
 *   → [ClawItem, ClawItem, BiteItem]
 *
 * If parsed.attackNames is empty (generic "makes N attacks"):
 *   { count: 3, attackNames: [] }
 *   → [BestItem, BestItem, BestItem]
 *
 * Optional replacements (e.g. "it can replace one attack with Dragon's Breath")
 * are applied at most once per multiattack, substituting the last regular attack
 * in the list.  A replacement is only used when:
 *   - The feature exists on the actor
 *   - It has remaining uses (if it has a limited-use resource)
 *   - The feature item has remaining uses (queried live from item.system.uses)
 *
 * @param {object}   parsed        Result from parseMultiattack
 * @param {Item5e[]} allAttacks    All weapon/spell attacks on the actor
 * @param {Item5e[]} allItems      All items on the actor (for replacement lookup)
 * @param {number}   dist
 * @param {number}   meleeRange
 * @param {boolean}  prefMelee
 * @param {boolean}  prefRanged
 * @returns {Item5e[]}
 */
function buildExpandedMultiattack(parsed, allAttacks, allActions, allItems, dist, meleeRange, prefMelee, prefRanged) {
  const expandedActions = [];

  if (Array.isArray(parsed.itemIds) && parsed.itemIds.length > 0) {
    for (const itemId of parsed.itemIds) {
      const item = allItems.find(i => i.id === itemId);
      if (item) expandedActions.push(item);
      else log(`  Override item id "${itemId}" not found — skipping.`);
    }
    return expandedActions;
  }

  if (parsed.attackNames && parsed.attackNames.length > 0) {
    // Named attacks: resolve each name → item, then push once per occurrence.
    // parsed.attackNames may already be expanded (e.g. ["Claw", "Claw", "Bite"]),
    // or it may be de-duped with counts in parsed.counts.
    // We handle both: if parsed.counts exists, expand by count; otherwise take name list as-is.

    if (parsed.counts && Object.keys(parsed.counts).length > 0) {
      // Counts map: { "Claw": 2, "Bite": 1 }
      for (const [attackName, count] of Object.entries(parsed.counts)) {
        const item = findBestMatchingItem(attackName, allAttacks);
        if (!item) {
          log(`  No item match for "${attackName}" — using best fallback`);
          const fallback = pickBestSingleAttack(allAttacks, dist, meleeRange, prefMelee, prefRanged);
          if (fallback) {
            for (let i = 0; i < count; i++) expandedActions.push(fallback);
          }
          continue;
        }
        for (let i = 0; i < count; i++) expandedActions.push(item);
      }
    } else {
      // Name list already represents one entry per attack
      for (const attackName of parsed.attackNames) {
        const item = findBestMatchingItem(attackName, allAttacks);
        if (item) {
          expandedActions.push(item);
        } else {
          log(`  No item match for "${attackName}" — using best fallback`);
          const fallback = pickBestSingleAttack(allAttacks, dist, meleeRange, prefMelee, prefRanged);
          if (fallback) expandedActions.push(fallback);
        }
      }
    }

    // If the name list produced fewer entries than parsed.count, pad with the best item
    while (expandedActions.length < parsed.count) {
      const best = pickBestSingleAttack(allAttacks.length ? allAttacks : allActions, dist, meleeRange, prefMelee, prefRanged);
      if (best) expandedActions.push(best);
      else break;
    }

  } else {
    // No named attacks: generic "makes N attacks" — repeat best item N times
    const best = pickBestSingleAttack(allAttacks.length ? allAttacks : allActions, dist, meleeRange, prefMelee, prefRanged);
    if (best) {
      for (let i = 0; i < parsed.count; i++) {
        expandedActions.push(best);
      }
    }
  }

  // ── Apply optional replacements ─────────────────────────────────────────
  // "It can replace one of its attacks with [a use of] X."
  // Each replacement entry may only be used ONCE per multiattack.
  //
  // Range-aware replacement strategy:
  //   - Count how many named attacks are out of melee range (can't reach the target).
  //   - If ANY replacement is ranged and can reach, substitute it for every
  //     unreachable melee slot (not just the last one).  This prevents the NPC from
  //     standing 115ft away and repeatedly failing to execute three Rend attacks
  //     when it could be casting Melf's Acid Arrow from range instead.
  //   - If no replacement is available/applicable, apply the existing single-slot
  //     substitution as a fallback (maintains original behaviour for normal cases).
  const replacements = parsed.replacements ?? [];
  for (const replacement of replacements) {
    if (expandedActions.length === 0) break;

    // Find the replacement feature on the actor by fuzzy name match.
    const repItem = _findReplacementItem(replacement.name, allItems);
    if (!repItem) {
      log(`  Replacement "${replacement.name}" not found on actor — skipping.`);
      continue;
    }

    // Check uses/charges on the LIVE item — never use a cached value.
    // Uses the central resolver (spell-ai._resolveUses via hasUsesRemaining) so
    // BOTH dnd5e ≤5.0 (uses.value) and 5.1+ (uses.spent) are handled. The old
    // hand-rolled check tested `typeof uses.value !== "number"`, which is TRUE
    // on 5.x where value is undefined — so depleted features were treated as
    // usable forever. That was the "NPC uses features it has no charges of" bug.
    if (!hasUsesRemaining(repItem)) {
      log(`  Replacement "${repItem.name}" has no uses remaining — skipping.`);
      continue;
    }

    // Count how many expanded actions are melee attacks that can't reach the target.
    const outOfMeleeRange = expandedActions.filter(a => {
      const range = getItemRange(a);
      return dist > range;
    });

    if (outOfMeleeRange.length > 1 && isRangedItem(repItem)) {
      // Multiple melee attacks that can't reach, and the replacement is ranged.
      // Replace ALL unreachable slots with the ranged item so the NPC actually
      // contributes damage instead of Dashing for multiple turns.
      let replaced = 0;
      for (let i = 0; i < expandedActions.length; i++) {
        const range = getItemRange(expandedActions[i]);
        if (dist > range) {
          expandedActions[i] = repItem;
          replaced++;
        }
      }
      log(`  Replacement applied (range mode): ${replaced} out-of-range melee slot(s) → "${repItem.name}".`);
    } else {
      // Default: swap only the last attack for the replacement (once only).
      expandedActions.splice(expandedActions.length - 1, 1, repItem);
      log(`  Replacement applied: last attack → "${repItem.name}" (once per multiattack).`);
    }
    break; // only one replacement entry per multiattack
  }

  // ── Range-aware fallback ──────────────────────────────────────────────────
  // If ALL resolved attacks are still out of range (no replacement could help, or
  // replacements list was empty), fall back to pickBestSingleAttack.  This handles
  // the case where the multiattack description names only melee weapons but the
  // NPC has a ranged option available and the target is far away.
  const allOutOfRange = expandedActions.length > 0 &&
    expandedActions.every(a => dist > getItemRange(a));
  if (allOutOfRange) {
    const rangedFallback = pickBestSingleAttack(allAttacks, dist, meleeRange, prefMelee, prefRanged);
    if (rangedFallback && dist <= getItemRange(rangedFallback)) {
      log(`  All named attacks out of range — falling back to ranged: "${rangedFallback.name}" × ${expandedActions.length}`);
      return expandedActions.map(() => rangedFallback);
    }
    // No ranged fallback either — return what we have and let movement handle it
  }

  return expandedActions;
}

/**
 * Find a replacement feature on the actor by fuzzy/partial name match.
 * @param {string}   name
 * @param {Item5e[]} allItems
 * @returns {Item5e|null}
 */
function _findReplacementItem(name, allItems) {
  const needle = normalize(name);
  // 1. Exact normalize() match
  let found = allItems.find(i => normalize(i.name) === needle);
  if (found) return found;
  // 2. Compendium source name match (flags.core.sourceId or flags.dnd5e.sourceId)
  found = allItems.find(i => {
    const srcId = i.flags?.core?.sourceId ?? i.flags?.dnd5e?.sourceId ?? "";
    const srcName = srcId.split(".").pop() ?? "";
    return normalize(srcName) === needle;
  });
  if (found) return found;
  // 3. Partial normalize() match (needle substring of name or vice-versa)
  found = allItems.find(i => {
    const haystack = normalize(i.name);
    return haystack.includes(needle) || needle.includes(haystack);
  });
  return found ?? null;
}

function pickBestSingleAttack(allAttacks, dist, meleeRange, prefMelee, prefRanged) {
  const inMelee = dist <= meleeRange;

  // Range gate. Previously read item.system.range.value directly, which is null
  // for every melee weapon on dnd5e 4.0+ (the value migrates to range.reach),
  // so melee weapons were only ever admitted by the `dist <= 5` escape hatch.
  // getItemRange() resolves reach vs. throw range vs. shot range properly.
  const inRange = allAttacks.filter(item => dist <= getItemRange(item));

  let candidates = inRange.length > 0 ? inRange : allAttacks;

  if (inMelee && prefMelee) {
    // A thrown weapon (dagger, handaxe) counts as melee-capable here — it is
    // swung, not hurled, when the target is adjacent.
    const meleeCapable = candidates.filter(isMeleeItem);
    if (meleeCapable.length > 0) candidates = meleeCapable;
  } else if (!inMelee && prefRanged) {
    const rangedCapable = candidates.filter(isRangedItem);
    if (rangedCapable.length > 0) candidates = rangedCapable;
  }

  candidates.sort((a, b) => {
    const bonusDiff = extractAttackBonus(b) - extractAttackBonus(a);
    if (bonusDiff !== 0) return bonusDiff;
    const dmgDiff = extractAverageDamage(b) - extractAverageDamage(a);
    if (dmgDiff !== 0) return dmgDiff;
    // Activities-aware tiebreak. Object.keys/values on a Foundry Collection
    // (dnd5e v3+) returns [], so the legacy check silently treated all v3
    // items as having no activities. getActivities() resolves both v2 and v3.
    const aAct = getActivities(a).length > 0;
    const bAct = getActivities(b).length > 0;
    if (bAct && !aAct) return 1;
    if (aAct && !bAct) return -1;
    return 0;
  });

  return candidates[0] ?? null;
}

/**
 * Estimate the maximum useful attack range (in feet) of an NPC by scanning
 * its usable attack items. Used by the target-aware behavior re-score to
 * decide the "in-range bonus" in scoreAttack — a ranged NPC with a 120ft
 * spell should still feel "in range" at 60ft, while a melee-only NPC at
 * 60ft should not.
 *
 * Returns the largest range found across usable attacks, or 5 (standard
 * melee reach) if no item declares a longer range. Cheap to call — the
 * underlying getAttackItems call is already cached by the per-turn flow.
 *
 * @param {Actor5e} actor
 * @returns {number} range in feet, minimum 5
 */
function _estimateAttackRange(actor) {
  if (!actor) return 5;
  try {
    let max = 5;
    for (const item of getAttackItems(actor)) {
      const range = Number(getItemRange(item) ?? 0);
      if (range > max) max = range;
    }
    return max;
  } catch {
    return 5;
  }
}

/**
 * Collect an actor's available bonus-action items.
 *
 * An item qualifies when its activation type (v2/v3-safe) is "bonus", it has
 * uses remaining, and it wasn't already spent this turn.
 *
 * @param {Actor5e} actor
 * @param {Set<string>} usedItemIds  item ids already spent this turn
 * @returns {Item5e[]}
 */
function _getBonusActionOptions(actor, usedItemIds) {
  if (!actor?.items) return [];
  const out = [];
  for (const item of actor.items) {
    if (usedItemIds.has(item.id)) continue;
    // Skip passive/structural item types. Feats are intentionally NOT skipped —
    // many bonus actions live on feats (Second Wind, Cunning Action features).
    if (["class", "subclass", "background", "species", "loot", "container"].includes(item.type)) continue;
    let activation;
    try { activation = getActivationType(item); } catch { activation = ""; }
    if (activation !== "bonus") continue;
    try { if (!hasUsesRemaining(item)) continue; } catch { /* allow */ }
    out.push(item);
  }
  return out;
}

/**
 * Score and execute one bonus action. Priority:
 *   bonus heal (self/ally hurt) = 40
 *   bonus attack (deals damage)  = 30
 *   bonus self-buff spell        = 25
 *   bonus utility                = 10
 *
 * Beneficial bonus spells route through disposition-aware ally/self targeting.
 * Spells are gated behind SPELL_ENABLED; bonus attacks always allowed.
 */
async function _runBonusActionPhase(actor, npcToken, primaryTarget, usedItemIds, behaviorCtx) {
  const options = _getBonusActionOptions(actor, usedItemIds);
  if (options.length === 0) return;

  const spellsEnabled = getSetting(SETTINGS.SPELL_ENABLED);

  // Self HP ratio — used to gate bonus heals.
  const hp     = actor.system?.attributes?.hp;
  const selfRatio = Math.max(0, Number(hp?.value ?? 0)) / Math.max(1, Number(hp?.max ?? 1));

  let best = null;
  let bestScore = 0;
  let bestTarget = null;     // resolved cast target (token) or null for self/enemy
  let bestMode = "enemy";    // "enemy" | "self" | "ally"

  for (const item of options) {
    const isSpell = item.type === "spell";
    if (isSpell && !spellsEnabled) continue;

    const category = isSpell ? classifySpell(item) : null;
    const dealsDamage = (() => { try { return hasDamageFormula(item); } catch { return false; } })();
    const range = (() => { try { return getSpellRange(item); } catch { return 5; } })();

    let score = 0;
    let mode = "enemy";
    let castTarget = primaryTarget;

    // Bonus heal — only if self or an ally is actually hurt.
    if (category === SPELL_CATEGORIES.HEAL) {
      const ally = selectAllyTarget(npcToken, { purpose: "heal", maxRangeFt: range });
      if (!ally) continue;                       // no one to heal — skip
      score = 40;
      if (ally.id === npcToken.id) { mode = "self"; castTarget = null; }
      else                         { mode = "ally"; castTarget = ally; }
    }
    // Bonus self-buff (Shield of Faith on self, etc.)
    else if (category === SPELL_CATEGORIES.BUFF_SELF) {
      score = 25; mode = "self"; castTarget = null;
    }
    // Bonus ally buff — route to a friendly target (self counts).
    else if (category === SPELL_CATEGORIES.BUFF_ALLY) {
      const ally = selectAllyTarget(npcToken, { purpose: "buff", maxRangeFt: range });
      if (!ally) continue;
      score = 25;
      if (ally.id === npcToken.id) { mode = "self"; castTarget = null; }
      else                         { mode = "ally"; castTarget = ally; }
    }
    // Other beneficial categories (movement/summon/utility) → self.
    else if (isSpell && [SPELL_CATEGORIES.MOVEMENT, SPELL_CATEGORIES.SUMMON,
                         SPELL_CATEGORIES.UTILITY, SPELL_CATEGORIES.CANTRIP_UTILITY].includes(category)) {
      score = 10; mode = "self"; castTarget = null;
    }
    // Bonus attack (off-hand, Polearm butt, bonus-action weapon).
    else if (dealsDamage) {
      score = 30; mode = "enemy"; castTarget = primaryTarget;
      if (!castTarget) continue;                 // no enemy to hit
    }
    // Generic utility fallback.
    else {
      score = 10; mode = "self"; castTarget = null;
    }

    if (score > bestScore) {
      bestScore = score; best = item; bestTarget = castTarget; bestMode = mode;
    }
  }

  if (!best || bestScore <= 0) return;

  log(`${actor.name}: Bonus action → ${best.name} (mode=${bestMode}, score=${bestScore}).`);

  const execTarget = bestMode === "self" ? npcToken : (bestTarget ?? primaryTarget);
  if (execTarget) execTarget.setTarget(true, { user: game.user, releaseOthers: true });

  try {
    await executeMidiItem(best, execTarget, npcToken, {});
    trace.annotate(actor.id, {
      bonusAction: { item: best.name, mode: bestMode, score: bestScore,
                     target: execTarget?.name ?? null },
    });
  } catch (err) {
    log(`${actor.name}: Bonus action "${best.name}" failed: ${err.message}`, "warn");
    trace.annotate(actor.id, { bonusAction: { item: best.name, error: String(err?.message ?? err) } });
  }
}

function extractAverageDamage(item) {
  // v2 / legacy path — top-level damage.parts is an array of [formula, type] tuples.
  let parts = item.system?.damage?.parts ?? [];

  // v3 path — damage now lives on the first activity that defines damage.
  // Shape: activity.damage.parts = [{ formula: "1d6+2", types: {slashing:true} }, ...]
  // Without this, every v3 stat block scores 0 and weapon selection falls
  // through to broken tiebreakers.
  if (parts.length === 0) {
    for (const a of getActivities(item)) {
      const aparts = a?.damage?.parts;
      if (Array.isArray(aparts) && aparts.length > 0) { parts = aparts; break; }
    }
  }
  if (parts.length === 0) return 0;

  try {
    // First part of either shape: tuple [formula, type] or object { formula, types }.
    const first = parts[0];
    const formula = Array.isArray(first) ? (first[0] ?? "") : (first?.formula ?? "");
    if (!formula) return 0;
    const avg = String(formula).replace(/(\d+)d(\d+)/g, (_, n, m) =>
      String(Number(n) * (Number(m) + 1) / 2)
    );
    // eslint-disable-next-line no-new-func
    return Function(`"use strict"; return (${avg.replace(/[^0-9+\-*/.() ]/g, "")})`)() || 0;
  } catch {
    return 0;
  }
}

function findBestMatchingItem(name, items) {
  const n = normalize(name);

  const exact = items.find(i => normalize(i.name) === n);
  if (exact) return exact;

  const partial = items.find(i =>
    normalize(i.name).includes(n) || n.includes(normalize(i.name))
  );
  if (partial) return partial;

  const nStem = n.replace(/s$/, "");
  const stemMatch = items.find(i => {
    const iStem = normalize(i.name).replace(/s$/, "");
    return iStem === nStem || iStem.includes(nStem) || nStem.includes(iStem);
  });
  if (stemMatch) return stemMatch;

  if (n.includes("melee"))  return items.find(isMeleeItem)  ?? null;
  if (n.includes("ranged")) return items.find(isRangedItem) ?? null;

  return null;
}

function extractAttackBonus(item) {
  const label = item.labels?.toHit;
  if (label) {
    const n = parseInt(label.replace(/[^-\d]/g, ""), 10);
    if (!isNaN(n)) return n;
  }
  const bonus = item.system?.attackBonus;
  if (typeof bonus === "number") return bonus;
  return 0;
}

// ─── Utility helpers ──────────────────────────────────────────────────────────

function _getTokenForCombatant(combatant) {
  return canvas.tokens.get(combatant.tokenId) ?? null;
}

/**
 * Refresh a target token — returns null if gone, defeated, dead, hidden, or invisible.
 */
function _refreshTarget(token) {
  const t = canvas.tokens.get(token.id);
  if (!t) return null;
  if (t.document.defeated) return null;
  const hp = t.actor?.system?.attributes?.hp;
  if (hp && hp.value <= 0) return null;

  // Apply the same isValidTarget checks used during initial selection
  if (t.document.hidden) return null;
  if (t.document.getFlag("core", "hidden")) return null;
  if (t.actor?.statuses?.has("invisible")) return null;

  return t;
}

/**
 * Move the NPC one step in a random direction (Confusion result 1 — random wander).
 * Picks a random cardinal/diagonal direction, moves one grid cell if unobstructed.
 */
async function _wanderRandomly(npcToken) {
  const directions = [
    { dr: -1, dc:  0 }, { dr:  1, dc:  0 },
    { dr:  0, dc: -1 }, { dr:  0, dc:  1 },
    { dr: -1, dc: -1 }, { dr: -1, dc:  1 },
    { dr:  1, dc: -1 }, { dr:  1, dc:  1 },
  ];
  const dir = directions[Math.floor(Math.random() * directions.length)];
  try {
    const { i: row, j: col } = canvas.grid.getOffset({ x: npcToken.document.x, y: npcToken.document.y });
    const destRow = row + dir.dr;
    const destCol = col + dir.dc;
    const destPx  = canvas.grid.getTopLeftPoint({ i: destRow, j: destCol });
    if (
      destPx.x >= 0 && destPx.y >= 0 &&
      destPx.x < canvas.dimensions.width &&
      destPx.y < canvas.dimensions.height
    ) {
      await npcToken.document.update({ x: destPx.x, y: destPx.y }, { animate: true });
      log(`${npcToken.name}: Confusion wander → [${destRow},${destCol}]`);
    }
  } catch (err) {
    log(`${npcToken.name}: Confusion wander failed: ${err.message}`, "warn");
  }
}

/**
 * Get the HP ratio [0..1] for a token. Returns 1 if HP data is unavailable.
 */
function _getHpRatio(token) {
  const hp = token?.actor?.system?.attributes?.hp;
  if (!hp) return 1;
  const max = Number(hp.max ?? 0);
  if (max <= 0) return 1;
  return Math.max(0, Math.min(1, Number(hp.value ?? 0) / max));
}

async function _checkIfLethal(item, target) {
  const hpRemaining = target.system?.attributes?.hp?.value ?? 999;
  const dmgParts    = item.system?.damage?.parts ?? [];
  if (dmgParts.length === 0) return false;
  try {
    const formula = dmgParts[0][0];
    const roll    = new Roll(formula, item.getRollData ? item.getRollData() : {});
    await roll.evaluate({ maximize: true });
    return roll.total >= hpRemaining;
  } catch {
    return false;
  }
}
