/**
 * midi.js
 * midi-qol execution layer for 5e NPC Combat Automation.
 *
 * Responsibilities (post-refactor to spell-ai.js):
 *
 *  1. DETECTION — hasMidiQol() returns true when midi-qol is active.
 *
 *  2. EXECUTION — executeMidiItem(item, targetToken, npcToken) fires the item
 *     through midi-qol's workflow so all midi hooks (auto-roll damage, saving
 *     throws, on-hit effects, concentration, etc.) fire correctly.
 *
 *  3. SPELL SLOT MANAGEMENT — spendSpellSlot(actor, level) / getHighestSlot(actor).
 *
 *  4. CONCENTRATION GUARD — isConcentrating(actor) / breakConcentration(actor).
 *
 *  5. BACKWARDS-COMPAT RE-EXPORT — selectBestSpell is re-exported from spell-ai.js
 *     so any external callers that imported it from midi.js continue to work.
 *
 * Architecture notes:
 *  - midi-qol is accessed exclusively through game.modules.get("midi-qol")?.api
 *    and globalThis.MidiQOL. We never import midi files directly.
 *  - Spell *selection* logic lives in spell-ai.js. This file is execution only.
 */

import { log }       from "./utils.js";
import { MODULE_ID } from "./settings.js";

// Re-export selection helpers so callers that imported from midi.js keep working.
export { selectBestSpell, buildSituationContext } from "./spell-ai.js";

// ─── midi-qol detection ───────────────────────────────────────────────────────

/** @returns {boolean} */
export function hasMidiQol() {
  return game.modules.get("midi-qol")?.active === true;
}

/** @returns {object|null} midi-qol public API, or null */
function _midiApi() {
  if (!hasMidiQol()) return null;
  return globalThis.MidiQOL ?? game.modules.get("midi-qol")?.api ?? null;
}

// ─── Concentration helpers ────────────────────────────────────────────────────

/**
 * Check if the actor is currently concentrating on a spell.
 *
 * @param {Actor5e} actor
 * @returns {boolean}
 */
export function isConcentrating(actor) {
  if (!actor) return false;

  // dnd5e v3+ exposes concentration directly.
  if (typeof actor.concentration?.item !== "undefined") {
    return actor.concentration.item != null;
  }

  // midi-qol sets a "concentrating" status or an AE named "Concentrating".
  if (actor.statuses?.has("concentrating")) return true;

  return actor.effects?.some(e =>
    !e.disabled &&
    (String(e.name ?? "").toLowerCase() === "concentrating" ||
     e.flags?.["midi-qol"]?.isConcentration === true)
  ) ?? false;
}

/**
 * Remove the concentration effect from the actor.
 *
 * @param {Actor5e} actor
 */
export async function breakConcentration(actor) {
  if (!actor) return;
  const api = _midiApi();
  if (api?.removeConcentration) {
    await api.removeConcentration(actor);
    log(`${actor.name}: concentration broken via midi-qol API.`);
    return;
  }

  // Manual fallback.
  const concEffect = actor.effects?.find(e =>
    !e.disabled &&
    (String(e.name ?? "").toLowerCase() === "concentrating" ||
     e.flags?.["midi-qol"]?.isConcentration === true)
  );
  if (concEffect) {
    await concEffect.delete();
    log(`${actor.name}: concentration AE deleted manually.`);
  }
}

// ─── Spell slot helpers ───────────────────────────────────────────────────────

/**
 * Return the highest available (non-zero) spell slot level for an actor.
 * Returns 0 if no slots remain.
 *
 * @param {Actor5e} actor
 * @returns {number}
 */
export function getHighestAvailableSlotLevel(actor) {
  const spells = actor.system?.spells;
  if (!spells) return 0;

  let highest = 0;
  for (let level = 9; level >= 1; level--) {
    const slot = spells[`spell${level}`];
    if (slot && Number(slot.value ?? 0) > 0) {
      highest = level;
      break;
    }
  }
  return highest;
}

/**
 * Return the lowest available slot level at or above minLevel.
 * @param {Actor5e} actor
 * @param {number}  minLevel
 * @returns {number}  0 if none
 */
export function getLowestAvailableSlotLevel(actor, minLevel = 1) {
  const spells = actor.system?.spells;
  if (!spells) return 0;

  for (let level = minLevel; level <= 9; level++) {
    const slot = spells[`spell${level}`];
    if (slot && Number(slot.value ?? 0) > 0) return level;
  }
  return 0;
}

/**
 * Returns true only when the actor genuinely has no spell-slot infrastructure —
 * i.e. every slot level has max === 0 (or is absent). This correctly
 * distinguishes innate-only casters from slot-casters who have simply spent
 * all their slots for the day.
 *
 * @param {Actor5e} actor
 * @returns {boolean}
 */
export function actorHasNoSlotInfrastructure(actor) {
  const spells = actor.system?.spells;
  if (!spells) return true;
  for (let level = 1; level <= 9; level++) {
    const slot = spells[`spell${level}`];
    if (slot && Number(slot.max ?? 0) > 0) return false; // has real slots at this level
  }
  return true;
}

// ─── Spell execution via midi-qol ────────────────────────────────────────────

/**
 * Execute a spell, weapon, or feature and RESOLVE ONLY WHEN IT IS FINISHED.
 *
 * This is the single execution chokepoint for the module. The distinction that
 * matters:
 *
 *   item.use()                  — resolves once the workflow is handed off.
 *                                 With midi-qol active, the attack roll, damage
 *                                 roll, saves and effect application are all
 *                                 still pending when the promise settles.
 *   MidiQOL.completeItemUse()   — documented by midi as returning "a promise you
 *                                 can await, which will do the entire midi-qol
 *                                 workflow for the item before resolving".
 *
 * Awaiting item.use() therefore does NOT pace the turn, and lets the caller
 * mutate game.user.targets while the previous swing is still resolving.
 *
 * @param {Item5e} item
 * @param {Token}  targetToken
 * @param {Token}  npcToken
 * @param {object} [options]
 * @param {number} [options.slotLevel]        slot level to use (0 = cantrip)
 * @param {object} [options.workflowOptions]  extra midi workflow overrides
 * @returns {Promise<void>}
 */
export async function executeMidiItem(item, targetToken, npcToken, options = {}) {
  const targetUuids = targetToken ? [targetToken.document.uuid] : [];

  // dnd5e 5.x takes the slot as a KEY ("spell3"), not a level number.
  // Verified: module/documents/activity/mixin.mjs:461 -> `spell${level}`.
  const slotLevel = Number(options.slotLevel ?? 0);
  const spellConfig = slotLevel >= 1 ? { spell: { slot: `spell${slotLevel}` } } : {};

  if (hasMidiQol()) {
    const api = _midiApi();
    if (api?.completeItemUse) {
      log(`${npcToken?.name}: Executing "${item.name}" via midi-qol completeItemUse.`);
      try {
        // Signature: completeItemUse(item, config, options)
        //   config  — item.roll-style flags (configureDialog, createMessage, …)
        //   options — targetUuids, workflowOptions, checkGMStatus, asUser, …
        // targetUuids belongs in OPTIONS. The previous code passed
        // `{ target: <TokenDocument> }`, which midi does not read, so every call
        // silently fell back to whatever game.user.targets happened to hold.
        await api.completeItemUse(
          item,
          { configureDialog: false, createMessage: true, ...spellConfig },
          {
            targetUuids,
            workflowOptions: {
              autoRollAttack:  true,
              autoFastAttack:  true,
              autoRollDamage:  "onHit",
              autoFastDamage:  true,
              ...(options.workflowOptions ?? {}),
            },
          }
        );
        return;
      } catch (err) {
        log(`${npcToken?.name}: midi-qol completeItemUse failed, falling back to item.use(): ${err.message}`, "warn");
      }
    }
  }

  // ── Fallback: dnd5e's own item use (no midi installed, or midi threw) ──────
  // dnd5e 4.0+ signature is use(config, dialog, message). The old two-argument
  // call passed dnd5e 3.x keys (configureDialog / createMessage) in `config`,
  // where they are ignored, and `{event, legacy}` as the DIALOG config — which
  // left dialog.configure at its default of true, so any activity that wanted
  // configuration would pop a window mid-automation.
  await item.use(
    { ...spellConfig },
    { configure: false },
    { create: true }
  );
}
