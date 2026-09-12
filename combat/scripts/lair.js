/**
 * lair.js
 * Lair action support.
 *
 * In 5e a creature with a lair takes a lair action on initiative count 20
 * (losing ties), once per round, while fighting inside its lair. Like
 * legendary actions this runs OUTSIDE the normal _runTurn pipeline — it fires
 * on the initiative-20 boundary at the top of each round.
 *
 * Foundry has no native "initiative count 20" event, so we approximate it: at
 * the start of each round (combatRound hook, or the first turn boundary of a
 * round) we let each eligible lair owner take one lair action before the first
 * combatant acts. This matches the practical table experience — the lair acts
 * at the top of the round.
 *
 * Detection: an NPC has lair actions when it has a feature whose name/type
 * marks it as a lair action (activation "lair", or an item named "Lair
 * Action(s)" with sub-options in its description), OR the GM sets the
 * `hasLairActions` flag. Because lair-action items are frequently authored as
 * a single descriptive feature with several bulleted options rather than
 * discrete activatable items, we support BOTH: discrete items tagged as lair
 * actions, and a single grouping feature (in which case we execute it and let
 * the GM resolve the narrative options, with a chat prompt).
 *
 * Setting: ENABLE_LAIR_ACTIONS (world, default true).
 */

import { MODULE_ID, SETTINGS, getSetting } from "./settings.js";
import { log, delay, distanceBetweenTokens, getItemRange, getActivities, postChatMessage } from "./utils.js";
import { getActivationType, hasDamageFormula, hasUsesRemaining } from "./spell-ai.js";
import { selectTarget } from "./targeting.js";
import { executeMidiItem } from "./midi.js";
import * as trace from "./ai-trace.js";

const LAIR_NAME_RX = /lair action/i;
const LAIR_POOL_RX = /^lair actions?$/i;

/** Rounds already processed (combatId:round) so we fire once per round. */
const _processedRounds = new Set();
/** Per-round option-variety memory (combatId:round:actorId → Map<itemId,count>). */
const _roundOptionUses = new Map();

export function registerLairHooks() {
  // NOTE: the combatRound hook is no longer registered here. Lair actions are
  // invoked SEQUENTIALLY from main.js's serialized boundary chain, ahead of
  // legendary actions and turn automation.
  //
  // Previously lair ran on its own combatRound hook while legendary ran on
  // combatTurnChange. Both fire from the SAME combat update and Foundry does not
  // await async hook handlers, so at the top of a round the two interleaved:
  // they raced on the same actor (concurrent item.use / setTarget) and the lair
  // action could be lost entirely whenever a legendary action fired alongside it.

  Hooks.on("deleteCombat", () => {
    _processedRounds.clear();
    _roundOptionUses.clear();
  });

  log("[Lair] Lair action hooks registered.");
}

/**
 * Run this round's lair actions. Idempotent: guarded once per combat+round, so
 * it is safe to call from every turn boundary as well as the round boundary.
 * Never throws.
 */
export async function handleLairRound(combat) {
  try {
    await _onRound(combat);
  } catch (err) {
    log(`[Lair] Round handler error: ${err.message}`, "warn");
  }
}

async function _onRound(combat) {
  if (!game.user.isGM) return;
  if (!getSetting(SETTINGS.ENABLE_LAIR_ACTIONS)) return;
  if (!getSetting(SETTINGS.AUTOMATION_ACTIVE)) return;
  if (game.paused) return;
  if (!combat?.started || (combat.round ?? 0) < 1) return;

  const key = `${combat.id}:${combat.round}`;
  if (_processedRounds.has(key)) return;
  _processedRounds.add(key);
  if (_processedRounds.size > 200) _processedRounds.delete(_processedRounds.values().next().value);

  const maxCR = getSetting(SETTINGS.MAX_AUTOMATED_CR);

  for (const combatant of combat.combatants) {
    try {
      const actor = combatant.actor;
      if (!actor || actor.type !== "npc" || actor.hasPlayerOwner) continue;
      if (combatant.defeated) continue;
      if ((actor.system?.attributes?.hp?.value ?? 0) <= 0) continue;
      if (Number(actor.system?.details?.cr ?? 0) > maxCR) continue;
      if (!_hasLairActions(actor)) continue;

      await _takeLairAction(combatant, combat);
    } catch (err) {
      log(`[Lair] ${combatant.name}: ${err.message}`, "warn");
    }
  }
}

// ─── Detection ────────────────────────────────────────────────────────────────

function _hasLairActions(actor) {
  if (actor.getFlag?.(MODULE_ID, "hasLairActions") === true) return true;
  for (const item of (actor.items ?? [])) {
    try {
      if (getActivationType(item) === "lair") return true;
      if (LAIR_NAME_RX.test(item.name ?? "")) return true;
      if (LAIR_NAME_RX.test(_descText(item))) return true;
    } catch { /* skip */ }
  }
  return false;
}

function _descText(item) {
  return String(item?.system?.description?.value ?? "").replace(/<[^>]*>/g, " ");
}

/**
 * Collect executable lair-action options. Discrete items (activation "lair" or
 * named individually) are returned for automated execution. A single grouping
 * feature ("Lair Actions") with no discrete sub-items is returned with
 * `grouped: true` so the executor prompts the GM rather than firing a
 * non-mechanical descriptor.
 */
export function getLairOptions(actor) {
  const discrete = [];
  let groupingFeature = null;

  for (const item of (actor?.items ?? [])) {
    try {
      const viaActivation = getActivationType(item) === "lair";
      const isPoolHeader  = LAIR_POOL_RX.test(item.name ?? "");
      const mentionsLair  = LAIR_NAME_RX.test(item.name ?? "") || LAIR_NAME_RX.test(_descText(item));

      if (isPoolHeader) { groupingFeature = item; continue; }
      if (viaActivation || mentionsLair) {
        if (!hasUsesRemaining(item)) continue;
        discrete.push(item);
      }
    } catch { /* skip malformed */ }
  }

  if (discrete.length) return { items: discrete, grouped: false, groupingFeature };
  if (groupingFeature) return { items: [], grouped: true, groupingFeature };
  return { items: [], grouped: false, groupingFeature: null };
}

// ─── Scoring (mirrors legendary: damage > control > utility, with variety) ────

function _scoreLairOption(item, npcToken, targetToken, recentUses) {
  let base = 10;
  const isDamage = hasDamageFormula(item);
  const hasSave  = _hasSaveActivity(item);
  if (isDamage)      base = 30;
  else if (hasSave)  base = 20;

  if (targetToken && (isDamage || hasSave)) {
    const range = getItemRange(item) || 30; // lair effects usually have range
    const dist  = distanceBetweenTokens(npcToken, targetToken);
    if (dist > range + 5) base = hasSave ? 12 : 4; // many lair effects are zone-wide
  }

  let score = base;
  const prior = recentUses?.get(item.id) ?? 0;
  if (prior > 0) score *= Math.pow(0.5, prior);
  score *= (1 + (Math.random() - 0.5) * 0.08);
  return score;
}

function _hasSaveActivity(item) {
  try {
    for (const a of getActivities(item)) if (a?.type === "save" || a?.save) return true;
  } catch { /* ignore */ }
  return !!item?.system?.save?.ability;
}

// ─── Execution ────────────────────────────────────────────────────────────────

async function _takeLairAction(combatant, combat) {
  const actor    = combatant.actor;
  const npcToken = combatant.token?.object
    ?? canvas.tokens?.placeables?.find(t => t.actor?.id === actor.id);
  if (!npcToken) return;

  const { items, grouped, groupingFeature } = getLairOptions(actor);

  // Grouped descriptor only → prompt the GM to resolve narratively. We don't
  // auto-fire a non-mechanical feature, but we surface it so it's never
  // forgotten (the #1 thing GMs miss in long initiative orders).
  if (grouped || (!items.length && groupingFeature)) {
    await postChatMessage(
      game.i18n.format("NCA.Chat.LairActionPrompt", { name: actor.name }),
      {
        speaker: ChatMessage.getSpeaker({ token: npcToken.document }),
        whisper: ChatMessage.getWhisperRecipients("GM").map(u => u.id),
      }
    );
    trace.recordEvent("lair", { actorId: actor.id, actorName: actor.name, mode: "gm-prompt" });
    return;
  }
  if (!items.length) return;

  const targetToken = selectTarget(npcToken, null, {});
  const usageKey = `${combat.id}:${combat.round}:${actor.id}`;
  const recentUses = _roundOptionUses.get(usageKey) ?? new Map();

  let best = null, bestScore = 0;
  for (const item of items) {
    const score = _scoreLairOption(item, npcToken, targetToken, recentUses);
    if (score > bestScore) { best = item; bestScore = score; }
  }
  if (!best) return;

  recentUses.set(best.id, (recentUses.get(best.id) ?? 0) + 1);
  _roundOptionUses.set(usageKey, recentUses);

  log(`[Lair] ${actor.name}: lair action "${best.name}" (score ${bestScore.toFixed(1)}).`);

  await postChatMessage(
    game.i18n.format("NCA.Chat.LairAction", { name: actor.name, action: best.name }),
    { speaker: ChatMessage.getSpeaker({ token: npcToken.document }) }
  );

  globalThis.__NCA_DIALOGUE_BUS__?.emit("legendary-action", { combatant });
  if (getSetting(SETTINGS.LEGENDARY_BANNER)) {
    import("./dialogue-ui.js").then(({ broadcastActionBanner }) => {
      broadcastActionBanner({
        title:    game.i18n.localize("NCA.Banner.Lair"),
        subtitle: `${actor.name} — ${best.name}`,
        kind:     "lair",
      });
    }).catch(() => {});
  }

  const effTarget = targetToken ?? npcToken;
  if (targetToken) targetToken.setTarget(true, { user: game.user, releaseOthers: true });
  await delay(Math.max(300, getSetting(SETTINGS.ACTION_DELAY) * 0.5));

  let error = null;
  try {
    await executeMidiItem(best, effTarget, npcToken, {});
  } catch (err) {
    error = String(err?.message ?? err);
    log(`[Lair] ${actor.name}: "${best.name}" failed: ${error}`, "warn");
  } finally {
    game.user.targets.forEach(t => t.setTarget(false, { user: game.user, releaseOthers: false }));
  }

  trace.recordEvent("lair", {
    actorId: actor.id, actorName: actor.name, item: best.name,
    target: targetToken?.name ?? null, mode: "auto", error,
  });
}
