/**
 * main.js
 * Module entry point for "5e NPC Combat Automation".
 *
 * Responsibilities:
 *  - Register settings
 *  - Register UI hooks (combat tracker button)
 *  - Hook into combat turn changes
 *  - Guard against non-NPC combatants
 *  - Delegate to automation.js for turn execution
 *
 * This file is intentionally lean. Core logic lives in the sub-modules.
 */

import { MODULE_ID } from "./constants.js";
import { registry } from "./registry.js";
import { registerSettings, registerExtendedSettings, getSetting, setSetting, SETTINGS } from "./settings.js";
import "./effects.js";    // side-effect: registers effect resolution
import "./elevation.js";  // side-effect: provides elevation helpers
import "./midi.js";       // side-effect: provides midi-qol integration
import { registerUIHooks, isAutomationActive, setAutomationActive, takeSnapshot, hasSnapshot, clearSnapshot, restoreSnapshot } from "./ui.js";
import { executeNPCTurn, forceAutomateTurn, attemptNPCReaction } from "./automation.js";
import { clearParseCache } from "./parsing.js";
import { clearPathCache, clearLastKnownPositions, expireLKPForHiddenTarget,
         clearLOSCache, registerMovementCacheHooks,
         clearAoeThreatZones, registerAoeThreatHooks } from "./movement.js";
import { clearTargetMemory, clearDamageLedger, recordDamageTaken } from "./targeting.js";
import { recordDamageDealt, getDamageDealt } from "./damage-tally.js";
import { log } from "./utils.js";
import { registerOverrideHooks } from "./multiattack-override.js";
import { broadcastDeathShock, isLeaderActor, applyMoraleEvents } from "./morale.js";
import { inferAndCacheAiProfile, inferAiProfile, getCachedAiProfile, INFERENCE_VERSION } from "./ai-inference.js";
import { registerDialogueTriggers } from "./dialogue-triggers.js";
import { registerBubbleSocket, registerBubbleReanchor, awaitBannerGate, isBannerHeld } from "./dialogue-ui.js";
import { registerLegendaryHooks, handleLegendaryTurnBoundary, getLegendaryOptions } from "./legendary.js";
import { registerLairHooks, handleLairRound, getLairOptions } from "./lair.js";
import { registerOpportunityAttackHooks } from "./opportunity.js";
import { registerSettingsMenu, hideNativeSettings, NCASettingsApp } from "./settings-ui.js";
import { registerWelcomeSettings, maybeShowWelcome } from "./welcome.js";
import { registerKeybindings } from "./keybindings.js";
import * as trace from "./ai-trace.js";

// ─── Module initialisation ────────────────────────────────────────────────────

Hooks.once("init", () => {
  registerSettings();
  registerExtendedSettings();
  // Tabbed settings app: register the menu button, then route everything
  // except the master toggle out of the native panel and into the app.
  registerSettingsMenu();
  hideNativeSettings();
  registerWelcomeSettings();
  registerKeybindings();
  log("Initialising 5e NPC Combat Automation...");
  registerUIHooks();
  log("Settings and UI hooks registered.");
  registerOverrideHooks();
  log("Multiattack override hooks registered.");
  registerDialogueTriggers();
  log("Dialogue triggers registered.");

  // Publish inference into the shared registry so archetypes.js can reach it
  // at call time without a circular import (replaces the globalThis handshake).
  registry.inference = { inferAiProfile, getCachedAiProfile, INFERENCE_VERSION };

  // Cinematic layer: every completed NPC turn feeds the Turn Spotlight card and
  // the debrief collector. Both are independent of observability tracing.
  trace.onTurnComplete((row) => {
    try {
      import("./debrief.js").then(({ collectTurn }) => collectTurn(row));
    } catch { /* non-fatal */ }
    try {
      if (getSetting(SETTINGS.CINEMATIC_MODE) !== "off") {
        const token = row.tokenId ? canvas?.tokens?.get?.(row.tokenId) : null;
        import("./spotlight.js").then(({ showTurnSpotlight }) => showTurnSpotlight(token, row));
      }
    } catch { /* non-fatal */ }
  });
});

Hooks.once("ready", async () => {
  // Register the speech bubble socket so all clients can receive and display bubbles.
  registerBubbleSocket();
  registerBubbleReanchor();

  // Apply the "enabled by default" preference on world load
  if (getSetting(SETTINGS.ENABLED_BY_DEFAULT)) {
    // Only set if not already set to avoid overwriting mid-session state
    const current = getSetting(SETTINGS.AUTOMATION_ACTIVE);
    if (!current) {
      setSetting(SETTINGS.AUTOMATION_ACTIVE, true).catch(() => {});
    }
  }

  log("Module ready.");

  // First-run welcome / per-version release notes (GM only, gated inside).
  maybeShowWelcome();

  // ── Reaction hooks ─────────────────────────────────────────────────────────
  // All reaction hooks require midi-qol. Register them lazily after ready so
  // midi-qol is guaranteed to have initialised its own hooks first.
  _registerReactionHooks();

  // ── Movement caches ────────────────────────────────────────────────────────
  registerMovementCacheHooks();

  // ── Opportunity attacks (Task 7; gated, default off) ───────────────────────
  registerOpportunityAttackHooks();

  // ── AOE threat memory (Task 9; gated, default off) ─────────────────────────
  registerAoeThreatHooks();

  // ── Lair actions (top of round / initiative 20) ────────────────────────────
  registerLairHooks();

  // ── Legendary actions ──────────────────────────────────────────────────────
  // Cross-turn action economy: fires at the END of other combatants' turns,
  // entirely outside the _runTurn pipeline. Gated internally on
  // ENABLE_LEGENDARY_ACTIONS + the global automation toggle.
  registerLegendaryHooks();
});

// ─── AI inference hooks ───────────────────────────────────────────────────────

/**
 * Run AI profile inference when a token is placed on the canvas.
 * Skips player-owned tokens and actors that already have a manually-overridden profile.
 * The result is cached to the actor flag so resolveArchetypes() finds it instantly.
 */
Hooks.on("createToken", async (tokenDoc) => {
  if (!game.user.isGM) return;
  if (!getSetting(SETTINGS.ENABLE_BEHAVIOR_AI)) return;
  if (!getSetting(SETTINGS.ENABLE_AI_INFERENCE)) return;
  const actor = tokenDoc.actor;
  if (!actor || actor.type !== "npc") return;
  if (actor.hasPlayerOwner) return;

  // Short delay so the token is fully initialized
  await _delay(100);

  const profile = await inferAndCacheAiProfile(actor, false);
  log(
    `[AI Inference] ${actor.name}: [${profile.archetypes.join(", ")}] ` +
    `confidence=${(profile.confidence * 100).toFixed(0)}%`
  );
});

// ─── Combat turn hook ─────────────────────────────────────────────────────────

/**
 * combatTurnChange fires whenever the active combatant changes.
 * This is the safest hook for automation — it fires once per turn advance.
 *
 * We also use this hook to trigger snapshot capture: whenever the turn
 * crosses from a player/friendly combatant to an NPC, we snapshot all
 * combatants' positions and HP so the GM can undo the NPC block.
 *
 * @param {Combat}    combat
 * @param {object}    updateData   - The update data applied to the combat doc.
 * @param {object}    options      - Hook options.
 */
/**
 * Legendary pause: HALT COMBAT ITSELF while the banner is held (0.26.0).
 *
 * Awaiting the gate inside our own automation was not enough — the combat
 * tracker still let anyone (or another module) advance the turn while the
 * legendary action was mid-resolution. The pause is supposed to behave like a
 * player's turn: nothing proceeds until the GM clicks Continue.
 *
 * preUpdateCombat returning false cancels the update outright, so Next Turn /
 * Next Round / initiative reordering are all refused for the duration of the
 * hold. The Continue button (or the safety timeout) releases it.
 */
Hooks.on("preUpdateCombat", (combat, changes) => {
  try {
    if (!isBannerHeld()) return true;
    // Only block turn/round advancement — allow unrelated combat edits through.
    const advancing = ("turn" in changes) || ("round" in changes);
    if (!advancing) return true;

    log("[Legendary] Turn advance blocked — legendary pause is held. Click Continue.");
    if (game.user.isGM) {
      ui.notifications.info(game.i18n.localize("NCA.Notify.LegendaryHold"));
    }
    return false;   // cancels the combat update entirely
  } catch (err) {
    log(`[Legendary] advance guard error: ${err.message}`, "warn");
    return true;    // never trap the table in a broken guard
  }
});

/**
 * Serialized combat-boundary chain.
 *
 * Foundry fires combatRound and combatTurnChange from the SAME combat update and
 * does NOT await async hook handlers. Anything registered on them independently
 * runs concurrently. That is what let lair actions and legendary actions race on
 * the same actor at the top of a round, losing the lair action whenever a
 * legendary action fired alongside it.
 *
 * Everything boundary-driven now queues here and executes strictly in order:
 *   lair (initiative 20) → legendary interrupts → the incoming turn's automation
 */
let _boundaryChain = Promise.resolve();

function _enqueueBoundaryWork(label, fn) {
  _boundaryChain = _boundaryChain
    .then(fn)
    .catch(err => log(`[Boundary] ${label} failed: ${err.message}`, "warn"));
  return _boundaryChain;
}

// Round boundary: covers combat start (round 1) and every round advance.
// handleLairRound is guarded once-per-round, so the duplicate call from the turn
// chain below is a no-op — this hook only guarantees round 1 is never missed.
Hooks.on("combatRound", (combat) => {
  _enqueueBoundaryWork("lair (round hook)", () => handleLairRound(combat));
});

Hooks.on("combatTurnChange", (combat, prior, current) => {
  _enqueueBoundaryWork("turn boundary", async () => {
    // ── Snapshot gate: player→NPC boundary ────────────────────────────────
    // Only the GM captures snapshots (prevents duplicate writes in multiplayer).
    if (game.user.isGM) {
      _maybeCaptureSnapshot(combat, prior);
    }

    // ── Lair actions (initiative count 20, top of round) ───────────────────
    // Self-guarded to once per round; runs here so it is ordered ahead of
    // legendary actions instead of racing them on a separate hook.
    await handleLairRound(combat);

    // ── Legendary interrupts, sequentially (0.25.1 fix) ────────────────────
    // Legendary actions (and the optional "Pause on Legendary Actions" hold)
    // must fully resolve before the incoming turn's automation.
    await handleLegendaryTurnBoundary(combat, prior, current);

    await maybeAutomateCurrentTurn(combat, "combatTurnChange");
  });
});

/**
 * Detect when the active combatant transitions from a friendly/player-owned
 * combatant to an NPC. At that boundary, snapshot all combatants so the GM
 * can undo the upcoming NPC block.
 *
 * Logic: compare the PREVIOUS active combatant (derived from the previous turn
 * index stored in updateData) with the NEW active combatant (combat.combatant).
 * If old was player-friendly and new is NPC, take the snapshot.
 *
 * @param {Combat} combat
 * @param {object} updateData
 */
function _maybeCaptureSnapshot(combat, updateData) {
  try {
    // The "previous" state is available via updateData's prior values, but
    // Foundry doesn't expose it directly. Instead we use the fact that
    // combatTurnChange fires after the document has been updated, so we can
    // look at the CURRENT combatant (new) and infer the previous one.
    //
    // Reliable approach: compare the new active combatant against every
    // combatant. If the new active combatant is an NPC and there IS at least
    // one player/friendly combatant who was most recently active (i.e. the
    // new turn index is > 0, or the round just incremented), capture.
    //
    // Simpler heuristic that covers 99% of cases:
    //   - The previous turn was a PLAYER turn if combatant at (turn-1) (within
    //     the same round) or (last in previous round) is player-owned/character.
    //   - The current combatant is an NPC.
    //
    // We use updateData.turn and updateData.round if available to derive the
    // previous state; otherwise fall back to a one-step lookback.

    const combatants  = [...(combat.combatants ?? [])];
    const totalTurns  = combatants.length;
    if (totalTurns === 0) return;

    const currentCombatant = combat.combatant;
    if (!currentCombatant) return;

    const currentIsNPC = currentCombatant.actor?.type === "npc"
                      && !currentCombatant.actor?.hasPlayerOwner;
    if (!currentIsNPC) return; // Only care when an NPC turn is starting

    // Determine the previous combatant using turn order
    const sorted = combatants.slice().sort((a, b) =>
      (a.initiative ?? -Infinity) - (b.initiative ?? -Infinity)
    );
    const currentIdx = sorted.findIndex(c => c.id === currentCombatant.id);
    const prevIdx    = currentIdx > 0 ? currentIdx - 1 : sorted.length - 1;
    const prevCombatant = sorted[prevIdx];

    if (!prevCombatant) return;

    const prevWasPlayer =
      prevCombatant.actor?.type === "character" ||
      prevCombatant.actor?.hasPlayerOwner ||
      (prevCombatant.players?.length ?? 0) > 0;

    if (!prevWasPlayer) return;

    // Player → NPC boundary detected — capture snapshot
    log(`[Snapshot] Player→NPC boundary: ${prevCombatant.name} → ${currentCombatant.name}. Capturing snapshot.`);
    takeSnapshot(combat);
    // Re-render the tracker to show the Undo button
    ui.combat?.render(false);
  } catch (err) {
    log(`[Snapshot] Failed to capture snapshot: ${err.message}`, "warn");
  }
}

Hooks.on("pauseGame", async (paused) => {
  if (paused) {
    log("pauseGame: automation suspended while game is paused.");
    return;
  }
  await _delay(250);
  await maybeAutomateCurrentTurn(game.combat, "unpause resume");
});


function _activeTimeBattleApi(combat) {
  try {
    const api = game.modules?.get("active-time-battle")?.api;
    return api?.isRunning?.(combat) ? api : null;
  } catch {
    return null;
  }
}

async function maybeAutomateCurrentTurn(combat, reason = "turn check") {
  // Never begin a turn while a persistent banner (legendary pause) is held —
  // covers every entry point, including the unpause-resume path.
  await awaitBannerGate();

  // Only the GM should trigger automation (prevents double-execution in multiplayer)
  if (!game.user.isGM) return;

  // If Active Time Battle owns initiative, let its elected primary GM be the
  // only client that runs the NPC automation handoff. This keeps multi-GM
  // sessions from double-running an NPC when ATB calls the turn over.
  const atbApi = _activeTimeBattleApi(combat);
  if (atbApi?.isPrimaryGM && !atbApi.isPrimaryGM()) {
    log(`${reason}: ATB primary GM owns NPC automation handoff — skipping this GM.`);
    return;
  }

  // Automation must be toggled on
  if (!isAutomationActive()) return;

  // Never automate while the game is paused
  if (game.paused) {
    log(`${reason}: game paused — skipping automation until unpaused.`);
    return;
  }

  if (!combat) return;

  // Get the current active combatant
  const combatant = combat.combatant;
  if (!combatant) return;

  // Skip defeated combatants (defensive check)
  if (combatant.defeated) return;

  const actor = combatant.actor;
  if (!actor) return;

  // Only automate NPC actors.
  if (actor.type === "character" || actor.hasPlayerOwner) {
    log(`Skipping player character / player-owned combatant: ${combatant.name}`);
    return;
  }

  log(`NPC turn detected: ${combatant.name} (${reason})`);

  // Small initial delay so the combat tracker visually updates first
  const actionDelay = getSetting(SETTINGS.ACTION_DELAY);
  await _delay(Math.max(300, actionDelay * 0.5));

  // Delegate to the automation engine
  await executeNPCTurn(combatant, combat);
}

// ─── Combat lifecycle hooks ───────────────────────────────────────────────────

/**
 * Clear path cache at the start of each new round so paths are never stale.
 * Tokens may have moved and walls may have changed since the last calculation.
 */
Hooks.on("combatRoundChange", () => {
  // Clear the path cache so stale routes are never reused after tokens move.
  // Do NOT clear LAST_KNOWN_POSITIONS here — LKP memory must survive round
  // boundaries so NPCs can continue pursuing a target that broke LOS last round.
  clearPathCache();
  log("New combat round — path cache cleared.");
});

/**
 * Clear parse cache when combat ends (actors may be updated between encounters).
 */
Hooks.on("deleteCombat", () => {
  clearParseCache();
  clearPathCache();
  clearLastKnownPositions();
  clearSnapshot();
  clearTargetMemory();
  clearDamageLedger();
  clearLOSCache();
  clearAoeThreatZones();
  log("Combat ended — all caches, target/grudge memory, LOS memory, and snapshots cleared.");
});

/**
 * Post-combat debrief. Runs on preDeleteCombat (BEFORE deleteCombat handlers
 * wipe the trace buffer and damage tally) so the recap sees intact data.
 * GM-only, gated on the COMBAT_DEBRIEF world setting.
 *
 * LIVE VERIFICATION: chat rendering is Foundry-layer; the recap aggregation it
 * calls is covered by the Node harness, but the card itself needs a live world.
 */
Hooks.on("preDeleteCombat", (combat) => {
  try {
    if (!game.user?.isGM) return;
    if (!getSetting(SETTINGS.COMBAT_DEBRIEF)) return;

    Promise.all([import("./debrief.js"), import("./damage-tally.js")])
      .then(([{ buildRecap, formatRecapHTML, drainTurns }, { getDamageDealt }]) => {
        const rows = drainTurns();
        if (rows.length === 0) return;
        const nameByActor = {};
        for (const r of rows) if (r.actorId && r.actorName) nameByActor[r.actorId] = r.actorName;
        const recap = buildRecap(rows, { damageByActor: getDamageDealt(), nameByActor });
        if (recap.npcCount === 0) return;
        const html = formatRecapHTML(recap, { heading: game.i18n.localize("NCA.Debrief.Heading") });
        ChatMessage.create({
          content: html,
          whisper: ChatMessage.getWhisperRecipients("GM"),
          flags: { [MODULE_ID]: { debrief: true } },
        });
      })
      .catch(err => log(`[Debrief] failed: ${err.message}`, "warn"));
  } catch (err) {
    log(`[Debrief] hook error: ${err.message}`, "warn");
  }
});

/**
 * Broadcast morale death shock when an NPC combatant is defeated.
 * Allies within range suffer a morale penalty.
 */
Hooks.on("updateCombatant", (combatant, changes) => {
  if (!changes.defeated) return;
  if (!combatant.actor) return;
  if (combatant.actor.type !== "npc") return;
  if (!getSetting(SETTINGS.ENABLE_MORALE)) return;

  const combat = combatant.parent;
  if (!combat) return;

  // Leader detection: authoritative signals (flag / leadership item / leader
  // archetype) first; the CR-vs-average heuristic is only a last resort.
  const isLeader = isLeaderActor(combatant.actor)
    || _isEncounterLeader(combatant, combat);

  log(`${combatant.actor.name} defeated — broadcasting death shock (leader=${isLeader}).`);
  broadcastDeathShock(combatant, combat, isLeader);
});

/**
 * REINFORCED morale recovery: when a new combatant joins an in-progress combat,
 * existing same-disposition NPCs take heart. Only fires after round 1 (a fresh
 * encounter's initial roster isn't "reinforcement").
 */
Hooks.on("createCombatant", (combatant) => {
  if (!game.user.isGM) return;
  if (!getSetting(SETTINGS.ENABLE_MORALE)) return;
  const combat = combatant.parent;
  if (!combat || (combat.round ?? 0) < 1) return;
  const newDisp = combatant.token?.disposition;
  if (newDisp === undefined) return;

  for (const c of combat.combatants) {
    if (c.id === combatant.id) continue;
    if (c.actor?.type !== "npc") continue;
    if (c.token?.disposition !== newDisp) continue;
    applyMoraleEvents(c, [{ type: "REINFORCED" }]);
  }
});

function _isEncounterLeader(combatant, combat) {
  const cr = Number(combatant.actor?.system?.details?.cr ?? 0);
  if (cr === 0) return false;
  let totalCr = 0;
  let count = 0;
  for (const c of combat.combatants) {
    if (!c.actor || c.actor.type !== "npc") continue;
    totalCr += Number(c.actor.system?.details?.cr ?? 0);
    count++;
  }
  const avg = count > 1 ? totalCr / count : cr;
  return cr >= avg * 1.5; // leader if CR >= 150% of average
}

/**
 * Expire Last Known Position memory for a target that goes hidden or invisible.
 * A hidden target should not be pursued using stale positional memory.
 */
Hooks.on("updateToken", (tokenDoc, changes) => {
  const newEffects = changes?.actorData?.effects ?? changes?.delta?.effects ?? null;
  if (!newEffects && !changes.hidden) return;

  // Check the hidden flag directly on the document
  const isNowHidden =
    changes.hidden === true ||
    tokenDoc.hidden === true;

  // Check active effects for invisible/hidden status
  const statusIds = tokenDoc.actor?.statuses ?? new Set();
  const isNowInvisible = statusIds.has("invisible") || statusIds.has("hidden");

  if (isNowHidden || isNowInvisible) {
    log(`Token "${tokenDoc.name}" hidden/invisible — expiring LKP memory.`);
    expireLKPForHiddenTarget(tokenDoc.id);
  }
});

/**
 * Clear parse cache when an actor's items change mid-combat.
 * This ensures stale multiattack parses aren't used.
 *
 * Note: `foundry.utils.deferImport` does NOT exist in Foundry — the previous
 * destructure-and-discard line was dead code. The dynamic import below caches
 * the module after the first call, so this is cheap on subsequent invocations.
 */
Hooks.on("updateActor", (actor) => {
  // Dynamic import in case this hook fires before the module is fully loaded.
  import("./parsing.js").then(({ invalidateParseCache }) => {
    invalidateParseCache(actor.id);
  }).catch(() => {});
});

// ─── Neutral retaliation tracking ────────────────────────────────────────────
// When a NEUTRAL token takes HP damage, record who attacked it so targeting.js
// can route retaliation back at the aggressor.
Hooks.on("preUpdateActor", (actor, changes) => {
  try {
    const newHp  = changes?.system?.attributes?.hp?.value;
    if (newHp === undefined) return;                       // no HP change

    const oldHp = actor.system?.attributes?.hp?.value ?? newHp;
    if (newHp >= oldHp) return;                            // healing, not damage

    // Only care about NEUTRAL tokens currently in combat
    const token = canvas?.tokens?.placeables?.find(t => t.actor?.id === actor.id);
    if (!token) return;
    if (token.document.disposition !== CONST.TOKEN_DISPOSITIONS.NEUTRAL) return;
    if (!game.combat?.combatants?.find(c => c.tokenId === token.id)) return;

    // The active combatant (if any) is the most likely attacker
    const activeCombatant = game.combat?.combatant;
    if (!activeCombatant || activeCombatant.tokenId === token.id) return;

    import("./targeting.js").then(({ recordAttacker }) => {
      recordAttacker(token.id, activeCombatant.tokenId);
    }).catch(() => {});
  } catch { /* non-fatal */ }
});

Hooks.on("createItem", (item) => {
  if (item.parent?.id) {
    import("./parsing.js").then(({ invalidateParseCache }) => {
      invalidateParseCache(item.parent.id);
    }).catch(() => {});
  }
  _invalidateAiProfileForSpellChange(item);
});

Hooks.on("deleteItem", (item) => {
  if (item.parent?.id) {
    import("./parsing.js").then(({ invalidateParseCache }) => {
      invalidateParseCache(item.parent.id);
    }).catch(() => {});
  }
  _invalidateAiProfileForSpellChange(item);
});

/**
 * Deep spell-list inference (Pass 3b) reads the actual spell list, so any
 * spell add/remove/edit on an NPC must bust the cached aiProfile flag to
 * force re-inference on next resolution. Manual GM overrides are preserved.
 *
 * Note on linked vs unlinked tokens: the flag lives on the actor, so linked
 * tokens share one profile (correct — they share one spell list) and each
 * unlinked token's synthetic actor carries its own (also correct).
 */
Hooks.on("updateItem", (item) => {
  _invalidateAiProfileForSpellChange(item);
});

function _invalidateAiProfileForSpellChange(item) {
  try {
    if (!game.user.isGM) return;
    if (item?.type !== "spell") return;
    const actor = item.parent;
    if (!actor || actor.type !== "npc" || actor.hasPlayerOwner) return;
    const profile = actor.getFlag?.(MODULE_ID, "aiProfile");
    if (!profile) return;
    if (profile.manuallyOverridden) return; // never clobber a GM override
    actor.unsetFlag(MODULE_ID, "aiProfile").catch(() => {});
    log(`[AI Inference] Spell list changed on ${actor.name} — profile cache invalidated.`);
  } catch { /* non-fatal */ }
}

// ─── Reaction hook registration ───────────────────────────────────────────────

/**
 * Register the three midi-qol hooks that drive NPC reaction support.
 * Called once from the "ready" hook so midi-qol is fully initialised first.
 *
 * If ENABLE_REACTIONS is false, or midi-qol is absent, a single log line is
 * emitted and no hooks are registered.
 */
function _registerReactionHooks() {
  // Lazy import of hasMidiQol avoids a circular reference at module load time
  import("./midi.js").then(({ hasMidiQol }) => {
    if (!getSetting(SETTINGS.ENABLE_REACTIONS)) {
      log("[Reactions] Reaction support disabled via settings.");
      return;
    }
    if (!hasMidiQol()) {
      log("[Reactions] midi-qol not found — reaction hooks not registered. Enable midi-qol to use NPC reactions.");
      return;
    }

    // ── Hook 1: Shield / Silvery Barbs / Parry ────────────────────────────
    // midi-qol fires "midi-qol.preCheckHits" just before it resolves whether
    // each target was hit.  The workflow object carries the targets list and
    // the item being used, so we can identify NPC targets and offer a reaction.
    Hooks.on("midi-qol.preCheckHits", async (workflow) => {
      if (!game.user.isGM) return;
      if (!getSetting(SETTINGS.ENABLE_REACTIONS)) return;

      // Iterate every target of this attack; if any is an automated NPC, react
      for (const targetToken of (workflow.targets ?? [])) {
        const actor = targetToken.actor;
        if (!actor || actor.type !== "npc" || actor.hasPlayerOwner) continue;
        if ((actor.system?.attributes?.hp?.value ?? 0) <= 0) continue;

        // Identify attacker token from the workflow
        const attackerToken = workflow.token ?? null;

        await attemptNPCReaction(actor.id, "attackTargetsMe", {
          npcToken:      targetToken,
          attackerToken: attackerToken,
        });
      }
    });

    log("[Reactions] Hook registered: midi-qol.preCheckHits (Shield / attack reactions).");

    // ── Hook 2: Counterspell ──────────────────────────────────────────────
    // midi-qol fires "midi-qol.preItemRoll" at the very start of any item use.
    // If the item is a spell being cast by a non-NPC (i.e. a player or enemy),
    // nearby automated NPCs with Counterspell can react.
    Hooks.on("midi-qol.preItemRoll", async (workflow) => {
      if (!game.user.isGM) return;
      if (!getSetting(SETTINGS.ENABLE_REACTIONS)) return;

      const spellItem  = workflow.item;
      if (!spellItem || spellItem.type !== "spell") return;

      const casterToken = workflow.token;
      if (!casterToken) return;

      // Only react to enemy / neutral casters (not other NPCs on the same side)
      const casterDisposition = casterToken.document?.disposition ?? 0;

      if (!game.combat) return;
      for (const combatant of game.combat.combatants) {
        const actor = combatant.actor;
        if (!actor || actor.type !== "npc" || actor.hasPlayerOwner) continue;
        if ((actor.system?.attributes?.hp?.value ?? 0) <= 0) continue;

        // Only react if the caster is hostile or neutral to this NPC
        const npcToken = combatant.token?.object ?? canvas.tokens.placeables.find(t => t.actor?.id === actor.id);
        if (!npcToken) continue;

        // Don't Counterspell your own side: skip if caster disposition matches NPC disposition
        const npcDisposition = npcToken.document?.disposition ?? 0;
        if (casterDisposition === npcDisposition) continue;

        await attemptNPCReaction(actor.id, "enemySpellCast", {
          npcToken:        npcToken,
          casterToken:     casterToken,
          enemySpellItem:  spellItem,
        });
      }
    });

    log("[Reactions] Hook registered: midi-qol.preItemRoll (Counterspell).");

    // ── Hook 3: Hellish Rebuke / Absorb Elements / damage reactions ────────
    // midi-qol fires "midi-qol.damageApplied" after damage is written to the
    // target's HP. The workflow carries the targets and the damage total.
    Hooks.on("midi-qol.damageApplied", async (workflow) => {
      if (!game.user.isGM) return;

      // Identify the attacker token from the workflow
      const attackerToken = workflow.token ?? null;

      // ── Damage ledger (grudge memory) + heavy-hit morale shock ────────────
      // Recorded regardless of ENABLE_REACTIONS — the ledger feeds targeting
      // and morale, not reactions.
      try {
        if (attackerToken && game.combat?.started) {
          const damageList = workflow.damageList ?? [];
          for (const dmg of damageList) {
            const victimActor = dmg.actorId ? game.actors.get(dmg.actorId) : null;
            const victimUuid  = dmg.actorUuid ?? dmg.tokenUuid ?? null;
            const resolved    = victimActor
              ?? (victimUuid ? fromUuidSync(victimUuid)?.actor ?? fromUuidSync(victimUuid) : null);
            if (!resolved || resolved.type !== "npc" || resolved.hasPlayerOwner) continue;

            const applied = Number(dmg.appliedDamage ?? dmg.hpDamage ?? 0);
            if (applied <= 0) continue;

            recordDamageTaken(resolved.id, attackerToken.id, applied);

            // Cinematic debrief: tally damage DEALT by an automated NPC
            // attacker (opposite direction to the grudge ledger above).
            const atkActor = attackerToken.actor;
            if (atkActor && atkActor.type === "npc" && !atkActor.hasPlayerOwner) {
              recordDamageDealt(atkActor.id, applied);
            }

            // Heavy single hit (>25% max HP) registers as a morale shock via
            // the existing morale-event channel.
            const hpMax = Number(resolved.system?.attributes?.hp?.max ?? 0);
            if (getSetting(SETTINGS.ENABLE_MORALE) && hpMax > 0 && applied / hpMax > 0.25) {
              const combatant = game.combat.combatants.find(c => c.actor?.id === resolved.id);
              if (combatant) {
                applyMoraleEvents(combatant, [{ type: "HEAVY_HIT", value: -8 }]);
                log(`[Morale] ${resolved.name} took a heavy hit (${applied}/${hpMax}) — shock applied.`);
              }
            }
          }
        }
      } catch (err) {
        log(`[Grudge] Ledger recording failed: ${err.message}`, "warn");
      }

      if (!getSetting(SETTINGS.ENABLE_REACTIONS)) return;

      for (const targetToken of (workflow.targets ?? [])) {
        const actor = targetToken.actor;
        if (!actor || actor.type !== "npc" || actor.hasPlayerOwner) continue;
        if ((actor.system?.attributes?.hp?.value ?? 0) <= 0) continue;  // already down

        await attemptNPCReaction(actor.id, "takeDamage", {
          npcToken:      targetToken,
          attackerToken: attackerToken,
        });
      }
    });

    log("[Reactions] Hook registered: midi-qol.damageApplied (Hellish Rebuke / damage reactions).");
    log("[Reactions] All reaction hooks registered successfully.");
  }).catch(err => {
    log(`[Reactions] Failed to register reaction hooks: ${err.message}`, "warn");
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function _delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Global API (optional — for macros / other modules) ──────────────────────

/**
 * Expose a small public API on the global `game.modules` entry.
 * Example usage from a macro:
 *   game.modules.get("5e-npc-combat-automation").api.setAutomationActive(true);
 */
Hooks.once("ready", () => {
  const mod = game.modules.get(MODULE_ID);
  if (mod) {
    mod.api = {
      isAutomationActive,
      setAutomationActive,
      executeNPCTurn,
      forceAutomateTurn,
      // Snapshot / undo
      takeSnapshot,
      hasSnapshot,
      clearSnapshot,
      restoreSnapshot,
      // AI inference
      inferAndCacheAiProfile,
      getCachedAiProfile,
      rebuildAiProfile: (actor) => inferAndCacheAiProfile(actor, true),
      // Legendary actions — inspect what the automation sees on an actor.
      getLegendaryOptions,
      getLairOptions,
      // Tabbed settings app — open programmatically / from macros.
      openSettings: () => new NCASettingsApp().render(true),
      // AI trace — observability for iterating on decision quality.
      //   .trace.summary()            → pretty-print last 10 turns
      //   .trace.summary({limit:20})  → last 20 turns
      //   .trace.summary({actorId})   → filter to one actor
      //   .trace.last()               → most recent row as JS object
      //   .trace.list({round:3})      → all rows from round 3
      //   .trace.download()           → save buffer as .jsonl file
      //   .trace.postSummaryToChat()  → write summary as GM whisper
      //   .trace.clear()              → empty buffer
      trace: {
        list:              trace.list,
        last:              trace.last,
        size:              trace.size,
        summary:           trace.summary,
        postSummaryToChat: trace.postSummaryToChat,
        download:          trace.download,
        clear:             trace.clear,
      },
    };
  }
});
