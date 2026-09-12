/**
 * legendary.js
 * Legendary action support — cross-turn action economy.
 *
 * Legendary actions fire at the END of OTHER combatants' turns, so this
 * subsystem deliberately lives OUTSIDE the _runTurn pipeline. It hooks
 * combatTurnChange directly:
 *
 *   turn boundary (A → B)
 *     ├─ refresh legact for B if B is a legendary NPC (RAW: refresh at the
 *     │  start of the creature's own turn)
 *     └─ for every legendary NPC that is NOT A and NOT B:
 *          offer one legendary action (RAW: one option per trigger)
 *
 * Design notes:
 *  - All item reads go through the v2/v3-safe helpers (getActivities /
 *    getActivationType) — never raw system.activation paths.
 *  - Uses _resolveUses-equivalent semantics via hasUsesRemaining for
 *    per-item charges (e.g. 1/day legendary options).
 *  - Decisions are recorded into the AI trace as standalone "legendary"
 *    event rows (trace.recordEvent) since no turn row is open off-turn.
 *  - Everything is wrapped defensively: an uncaught error at a turn
 *    boundary would disrupt live play.
 *
 * Setting: ENABLE_LEGENDARY_ACTIONS (world, default true).
 */

import { MODULE_ID, SETTINGS, getSetting } from "./settings.js";
import { log, delay, distanceBetweenTokens, getItemRange, getActivities, postChatMessage } from "./utils.js";
import { getActivationType, hasDamageFormula, hasUsesRemaining } from "./spell-ai.js";
import { selectTarget } from "./targeting.js";
import { executeMidiItem } from "./midi.js";
import * as trace from "./ai-trace.js";

// ─── Constants ────────────────────────────────────────────────────────────────

/** Names that describe the legendary-action POOL rather than an option. */
const POOL_FEATURE_RX = /^legendary actions?$/i;

/** Description fallback when no activity declares activation:"legendary". */
const DESC_LEGENDARY_RX = /legendary action/i;

/** Cost parser: "(Costs 2 Actions)", "costs 3 legendary actions", etc. */
const COST_RX = /costs?\s+(\d+)\s+(?:legendary\s+)?actions?/i;

/** Per-boundary lock so overlapping hook fires never double-spend. */
const _boundaryLocks = new Set();

/** Per-NPC-per-round usage memory (combatId:round:actorId → count). */
const _roundUsage = new Map();

// ─── Hook registration ────────────────────────────────────────────────────────

/**
 * Register the combatTurnChange handler that drives legendary actions.
 * Called once from main.js "ready".
 */
export function registerLegendaryHooks() {
  // NOTE (0.25.1): the combatTurnChange hook is no longer registered here.
  // Legendary boundary handling is invoked SEQUENTIALLY from main.js's single
  // combatTurnChange handler, BEFORE the new turn's automation — two
  // independent hooks raced, so the legendary pause could hold its banner
  // while the next NPC's automated turn ran underneath it.

  Hooks.on("deleteCombat", () => {
    _boundaryLocks.clear();
    _roundUsage.clear();
    _roundOptionUses.clear();
  });

  log("[Legendary] Legendary action hooks registered.");
}

// ─── Boundary handler ─────────────────────────────────────────────────────────

/**
 * Run legendary-action handling for one turn boundary. Called (and awaited)
 * from main.js's combatTurnChange handler so interrupts — and the optional
 * legendary pause — fully resolve before the incoming turn's automation.
 * Never throws.
 */
export async function handleLegendaryTurnBoundary(combat, prior, current) {
  try {
    await _onTurnBoundary(combat, prior, current);
  } catch (err) {
    log(`[Legendary] Unhandled error at turn boundary: ${err.message}`, "warn");
  }
}

async function _onTurnBoundary(combat, prior, current) {
  if (!game.user.isGM) return;
  if (!getSetting(SETTINGS.ENABLE_LEGENDARY_ACTIONS)) return;
  if (game.paused) return;
  if (!combat?.started || (combat.round ?? 0) < 1) return;

  // Respect the global automation toggle — legendary actions are part of the
  // automation suite, not an always-on side channel.
  const active = getSetting(SETTINGS.AUTOMATION_ACTIVE);
  if (!active) return;

  // Resolve the combatant whose turn just ENDED (the trigger) and the one
  // whose turn is STARTING. Foundry V12+ passes CombatHistoryData for both;
  // fall back to deriving the previous combatant from turn order when absent.
  const priorId   = prior?.combatantId ?? _derivePriorCombatantId(combat);
  const currentId = current?.combatantId ?? combat.combatant?.id ?? null;

  // One execution per unique boundary.
  const lockKey = `${combat.id}:${combat.round}:${priorId ?? "?"}→${currentId ?? "?"}`;
  if (_boundaryLocks.has(lockKey)) return;
  _boundaryLocks.add(lockKey);
  // Bounded memory: keep only recent locks.
  if (_boundaryLocks.size > 200) {
    const first = _boundaryLocks.values().next().value;
    _boundaryLocks.delete(first);
  }

  // ── 1. Refresh: a legendary NPC's pool resets at the start of its own turn.
  const currentCombatant = currentId ? combat.combatants.get(currentId) : null;
  if (currentCombatant) await _maybeRefreshPool(currentCombatant);

  // No trigger without a completed turn.
  if (!priorId) return;

  // ── 2. Offer one legendary action to every eligible legendary NPC that is
  //       neither the creature whose turn just ended nor the one starting.
  //       (Acting on the boundary into its own turn would race _runTurn.)
  for (const combatant of combat.combatants) {
    if (combatant.id === priorId || combatant.id === currentId) continue;
    if (!_isEligibleLegendaryNPC(combatant)) continue;

    try {
      await _takeLegendaryAction(combatant, combat);
    } catch (err) {
      log(`[Legendary] ${combatant.name}: legendary action failed: ${err.message}`, "warn");
    }
  }
}

/**
 * Fallback derivation of the previous combatant id when the hook does not
 * supply CombatHistoryData (older cores / unusual call paths).
 */
function _derivePriorCombatantId(combat) {
  try {
    const turns = combat.turns ?? [];
    if (!turns.length) return null;
    const idx  = combat.turn ?? 0;
    const prev = turns[(idx - 1 + turns.length) % turns.length];
    return prev?.id ?? null;
  } catch { return null; }
}

// ─── Eligibility & resources ──────────────────────────────────────────────────

function _isEligibleLegendaryNPC(combatant) {
  const actor = combatant?.actor;
  if (!actor || actor.type !== "npc" || actor.hasPlayerOwner) return false;
  if (combatant.defeated) return false;
  if ((actor.system?.attributes?.hp?.value ?? 0) <= 0) return false;

  // CR automation gate — same contract as executeNPCTurn.
  const maxCR = getSetting(SETTINGS.MAX_AUTOMATED_CR);
  const cr    = Number(actor.system?.details?.cr ?? 0);
  if (cr > maxCR) return false;

  return _getLegendaryPoints(actor).max > 0;
}

/** Read the legendary action pool. dnd5e: system.resources.legact.{value,max}. */
function _getLegendaryPoints(actor) {
  const legact = actor?.system?.resources?.legact ?? {};
  return {
    value: Number(legact.value ?? 0) || 0,
    max:   Number(legact.max ?? 0)   || 0,
  };
}

/** RAW: the pool refreshes at the start of the legendary creature's own turn. */
async function _maybeRefreshPool(combatant) {
  const actor = combatant?.actor;
  if (!actor || actor.type !== "npc" || actor.hasPlayerOwner) return;
  const { value, max } = _getLegendaryPoints(actor);
  if (max <= 0 || value >= max) return;
  try {
    await actor.update({ "system.resources.legact.value": max });
    log(`[Legendary] ${actor.name}: pool refreshed (${value} → ${max}).`);
  } catch (err) {
    log(`[Legendary] ${actor.name}: pool refresh failed: ${err.message}`, "warn");
  }
}

// ─── Option discovery ─────────────────────────────────────────────────────────

/**
 * Collect this actor's usable legendary-action options.
 * An item qualifies when:
 *   - any activity declares activation type "legendary" (v2/v3-safe), OR
 *   - its description mentions "legendary action" (statblock-import fallback)
 * The pool-header feature ("Legendary Actions") is excluded, as are items
 * whose per-item uses are depleted.
 *
 * @param {Actor5e} actor
 * @returns {Array<{item: Item5e, cost: number}>}
 */
export function getLegendaryOptions(actor) {
  const options = [];
  for (const item of (actor?.items ?? [])) {
    try {
      if (POOL_FEATURE_RX.test(item.name ?? "")) continue;

      const viaActivation  = getActivationType(item) === "legendary";
      const viaDescription = !viaActivation && DESC_LEGENDARY_RX.test(_descText(item));
      if (!viaActivation && !viaDescription) continue;

      if (!hasUsesRemaining(item)) continue; // 1/day-style options

      options.push({ item, cost: _getLegendaryCost(item) });
    } catch { /* skip malformed items — never break the boundary */ }
  }
  return options;
}

function _descText(item) {
  const raw = item?.system?.description?.value ?? "";
  return String(raw).replace(/<[^>]*>/g, " ");
}

/**
 * Resolve an option's point cost. Priority:
 *   1. activity activation.value on a "legendary" activity (v3)
 *   2. item.system.activation.cost / .value (v2 shapes)
 *   3. "(Costs N Actions)" in name or description
 *   4. default 1
 */
function _getLegendaryCost(item) {
  try {
    for (const a of getActivities(item)) {
      const type = a?.activation?.type ?? a?.activation;
      if (type !== "legendary") continue;
      const v = Number(a?.activation?.value ?? a?.activation?.cost ?? NaN);
      if (Number.isFinite(v) && v > 0) return v;
    }
  } catch { /* fall through */ }

  const legacy = Number(item?.system?.activation?.cost ?? item?.system?.activation?.value ?? NaN);
  if (Number.isFinite(legacy) && legacy > 0) return legacy;

  const m = COST_RX.exec(item?.name ?? "") ?? COST_RX.exec(_descText(item));
  if (m) {
    const v = Number(m[1]);
    if (Number.isFinite(v) && v > 0) return v;
  }
  return 1;
}

// ─── Scoring ──────────────────────────────────────────────────────────────────

/**
 * Score an affordable option: damage > control > utility, normalised by cost
 * so a 1-point Tail Attack beats a 3-point option of equal raw value early in
 * the round, while big options still win when their raw score dominates.
 *
 * `recentUses` is a Map<itemId, count> of how many times this NPC has already
 * used each option this round. Repeats are penalised so a boss varies its
 * legendary actions instead of spamming the single highest-scoring one — the
 * "stuck on one action" problem. The penalty is multiplicative and steep
 * (each prior use roughly halves the option's appeal) so a clearly dominant
 * option can still repeat when nothing else is viable.
 */
function _scoreOption(option, actor, npcToken, targetToken, recentUses = null) {
  const { item, cost } = option;

  let base = 10; // utility floor
  const isDamage = hasDamageFormula(item);
  const hasSave  = _hasSaveActivity(item);

  if (isDamage)      base = 30;
  else if (hasSave)  base = 20;

  // Range viability: a melee-reach option against a distant target is a
  // wasted trigger. Detect/move-style options (utility) stay viable anywhere.
  if (targetToken && (isDamage || hasSave)) {
    const range = getItemRange(item) || 5;
    const dist  = distanceBetweenTokens(npcToken, targetToken);
    if (dist > range + 5) {
      // Out of reach — heavy penalty, but keep > 0 for AoE/save options whose
      // template may still land (midi resolves templates independently).
      base = hasSave ? 8 : 0;
    }
  }

  // Cost-efficiency: prefer spending the pool across the round rather than
  // dumping it all into one trigger, unless the expensive option is clearly
  // stronger.
  let score = base / Math.sqrt(cost);

  // Variety: penalise options already used this round. 0.55^n means a second
  // use scores ~55%, a third ~30%, so a boss with several options rotates
  // through them. Add a small jitter so genuine ties don't always resolve the
  // same way turn after turn.
  const priorUses = recentUses?.get(item.id) ?? 0;
  if (priorUses > 0) score *= Math.pow(0.55, priorUses);
  score *= (1 + (Math.random() - 0.5) * 0.08); // ±4% jitter

  return score;
}

function _hasSaveActivity(item) {
  try {
    for (const a of getActivities(item)) {
      if (a?.type === "save" || a?.save) return true;
    }
  } catch { /* ignore */ }
  return !!item?.system?.save?.ability;
}

// ─── Execution ────────────────────────────────────────────────────────────────

/** Per-round, per-NPC record of which legendary OPTIONS were used (itemId→count). */
const _roundOptionUses = new Map();

/**
 * Attempt ONE legendary action for this NPC at the current boundary.
 * RAW: only one option may be used per trigger.
 */
async function _takeLegendaryAction(combatant, combat) {
  const actor = combatant.actor;
  const { value: points } = _getLegendaryPoints(actor);
  if (points <= 0) return;

  const npcToken = combatant.token?.object
    ?? canvas.tokens?.placeables?.find(t => t.actor?.id === actor.id);
  if (!npcToken) return;

  // getLegendaryOptions already filters by hasUsesRemaining, but re-filter
  // here so an option whose uses were spent by an EARLIER trigger this same
  // round is dropped (the option list is rebuilt each call, so this is the
  // live check). Cost must also be affordable from the current pool.
  const options = getLegendaryOptions(actor)
    .filter(o => o.cost <= points && hasUsesRemaining(o.item));
  if (options.length === 0) return;

  // Pacing: never spend more triggers than the pool max per round — prevents
  // a long initiative order from feeling like a machine-gun boss.
  const usageKey = `${combat.id}:${combat.round}:${actor.id}`;
  const used     = _roundUsage.get(usageKey) ?? 0;
  const { max }  = _getLegendaryPoints(actor);
  if (used >= max) return;

  const targetToken = selectTarget(npcToken, null, {});
  if (!targetToken) return; // nothing to act against — hold the points

  const recentUses = _roundOptionUses.get(usageKey) ?? new Map();

  let best = null;
  let bestScore = 0;
  for (const option of options) {
    const score = _scoreOption(option, actor, npcToken, targetToken, recentUses);
    if (score > bestScore) { best = option; bestScore = score; }
  }
  if (!best || bestScore <= 0) return;

  log(`[Legendary] ${actor.name}: "${best.item.name}" (cost ${best.cost}, ` +
      `score ${bestScore.toFixed(1)}, ${points} pts available) vs ${targetToken.name}.`);

  // Spend points BEFORE execution — if the roll errors midway the action was
  // still attempted, and never spending on failure would allow infinite retries.
  await actor.update({ "system.resources.legact.value": points - best.cost });
  _roundUsage.set(usageKey, used + 1);
  // Record this option use for the variety penalty.
  recentUses.set(best.item.id, (recentUses.get(best.item.id) ?? 0) + 1);
  _roundOptionUses.set(usageKey, recentUses);
  // Bounded memory.
  if (_roundUsage.size > 100) {
    const first = _roundUsage.keys().next().value;
    _roundUsage.delete(first);
    _roundOptionUses.delete(first);
  }

  // Brief GM whisper so the table sees why the boss is acting off-turn.
  await postChatMessage(
    game.i18n.format("NCA.Chat.LegendaryAction", {
      name:   actor.name,
      action: best.item.name,
      cost:   best.cost,
      left:   points - best.cost,
    }),
    {
      speaker: ChatMessage.getSpeaker({ token: npcToken.document }),
      whisper: ChatMessage.getWhisperRecipients("GM").map(u => u.id),
    }
  );

  // Boss bark (dialogue) + banner cut-in.
  globalThis.__NCA_DIALOGUE_BUS__?.emit("legendary-action", { combatant });
  // Banner cut-in (client-gated) so the whole table notices the interrupt.
  // When LEGENDARY_PAUSE is on, hold the banner with a Continue button and
  // AWAIT the GM before executing — this is what gives off-turn actions
  // (legendary movement especially) time to land and lets the DM intervene.
  const pauseOnLegendary = getSetting(SETTINGS.LEGENDARY_BANNER) && getSetting(SETTINGS.LEGENDARY_PAUSE);
  if (getSetting(SETTINGS.LEGENDARY_BANNER)) {
    try {
      const dui = await import("./dialogue-ui.js");
      if (pauseOnLegendary) {
        // Blocks here until the GM clicks Continue (or the safety timeout).
        await dui.broadcastActionBannerContinue({
          title:    game.i18n.localize("NCA.Banner.Legendary"),
          subtitle: `${actor.name} — ${best.item.name}`,
          kind:     "legendary",
        });
      } else {
        dui.broadcastActionBanner({
          title:    game.i18n.localize("NCA.Banner.Legendary"),
          subtitle: `${actor.name} — ${best.item.name}`,
          kind:     "legendary",
        });
      }
    } catch { /* banner failure never blocks the action */ }
  }

  targetToken.setTarget(true, { user: game.user, releaseOthers: true });
  await delay(Math.max(300, getSetting(SETTINGS.ACTION_DELAY) * 0.5));

  let error = null;
  try {
    await executeMidiItem(best.item, targetToken, npcToken, {});
  } catch (err) {
    error = String(err?.message ?? err);
    log(`[Legendary] ${actor.name}: execution of "${best.item.name}" failed: ${error}`, "warn");
  } finally {
    game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
  }

  // Standalone trace row — no turn row is open off-turn.
  trace.recordEvent("legendary", {
    actorId:    actor.id,
    actorName:  actor.name,
    tokenId:    npcToken.id,
    item:       best.item.name,
    cost:       best.cost,
    score:      Number(bestScore.toFixed(2)),
    pointsLeft: points - best.cost,
    target:     targetToken.name,
    error,
  });
}
