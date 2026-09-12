/**
 * snapshot.js
 * Snapshot & restore engine for the "Undo NPC Block" feature.
 *
 * Strategy (V1): snapshot token position + current HP for every combatant
 * at the moment the last player/friendly turn ends and the first NPC turn
 * is about to begin. The GM can then restore all combatants to that state
 * via the "Undo NPC Block" button in the combat tracker.
 *
 * What this DOES restore:
 *   - Token x / y / elevation
 *   - Actor current HP (system.attributes.hp.value)
 *
 * What this DOES NOT restore (documented in the confirmation dialog):
 *   - Chat log messages (rolls, damage notifications)
 *   - Turn order / combat tracker position
 *   - Spell slots, item charges, action economy resources
 *   - Conditions and active effects
 *   - Changes made by other modules (midi-qol, DAE, etc.)
 *
 * The snapshot is keyed per-combat and per-round so it is never stale
 * across combat resets. Only one snapshot is held at a time: the most
 * recent player→NPC boundary.
 */

import { log } from "./utils.js";
import { MODULE_ID, SETTINGS, getSetting } from "./settings.js";

// ─── In-memory snapshot store ─────────────────────────────────────────────────
// Shape: { combatId, round, turn, takenAt, includesResources, entries: CombatantSnapshot[] }
// where CombatantSnapshot = {
//   combatantId, tokenId, actorId, x, y, elevation, hp,
//   spellSlots:  { spellN: {value}, pact: {value} }   (levels with max>0)
//   itemCharges: [ {itemId, value, spent} ]           (items with finite uses.max)
//   effectIds:   [ effectId ]                          (non-disabled effects)
// }

let _snapshot = null;

/**
 * _resolveUses semantics (mirrors spell-ai.js): dnd5e ≤5.0 tracks uses.value,
 * 5.1+ tracks uses.spent with value as a derived getter. Capture BOTH raw
 * fields so restore can write back whichever one this system version owns.
 */
function _captureUses(item) {
  const uses = item?.system?.uses;
  if (!uses) return null;
  const max = Number(uses.max ?? 0);
  if (!Number.isFinite(max) || max <= 0) return null; // formula/unbounded — skip
  return {
    itemId: item.id,
    value:  typeof uses.value === "number" ? uses.value : null,
    spent:  typeof uses.spent === "number" ? uses.spent : null,
  };
}

/**
 * Take a snapshot of every non-defeated combatant's position, HP, and (when
 * SNAPSHOT_INCLUDE_RESOURCES is on) spell slots, item charges, and the set of
 * active effects present at capture time.
 *
 * @param {Combat} combat
 */
export function takeSnapshot(combat) {
  if (!combat) return;

  const includeResources = getSetting(SETTINGS.SNAPSHOT_INCLUDE_RESOURCES) ?? true;
  const entries = [];

  for (const combatant of combat.combatants) {
    if (combatant.defeated) continue;

    const token = combatant.token; // TokenDocument
    if (!token) continue;

    const actor = combatant.actor;
    const hp    = Number(actor?.system?.attributes?.hp?.value ?? -1);

    const entry = {
      combatantId: combatant.id,
      tokenId:     token.id,
      actorId:     actor?.id ?? null,
      x:           token.x,
      y:           token.y,
      elevation:   token.elevation ?? 0,
      hp,
    };

    if (includeResources && actor) {
      try {
        // ── Spell slots ──────────────────────────────────────────────────
        const slots  = {};
        const spells = actor.system?.spells ?? {};
        for (let lvl = 1; lvl <= 9; lvl++) {
          const s = spells[`spell${lvl}`];
          if (s && Number(s.max ?? 0) > 0) slots[`spell${lvl}`] = { value: Number(s.value ?? 0) };
        }
        if (spells.pact && Number(spells.pact.max ?? 0) > 0) {
          slots.pact = { value: Number(spells.pact.value ?? 0) };
        }
        if (Object.keys(slots).length) entry.spellSlots = slots;

        // ── Item charges ─────────────────────────────────────────────────
        const charges = [];
        for (const item of actor.items) {
          const c = _captureUses(item);
          if (c) charges.push(c);
        }
        if (charges.length) entry.itemCharges = charges;

        // ── Active effects (ids only — delete-added-after on restore) ────
        entry.effectIds = actor.effects
          .filter(e => !e.disabled)
          .map(e => e.id);
      } catch (err) {
        log(`[Snapshot] Resource capture failed for ${actor.name}: ${err.message}`, "warn");
      }
    }

    entries.push(entry);
  }

  _snapshot = {
    combatId: combat.id,
    round:    combat.round,
    turn:     combat.turn,
    takenAt:  Date.now(),
    includesResources: includeResources,
    entries,
  };

  log(`[Snapshot] Captured ${entries.length} combatants at round ${combat.round}, turn ${combat.turn}` +
      `${includeResources ? " (incl. slots/charges/effects)" : ""}.`);
}

/**
 * Returns true if a valid snapshot exists for the given combat.
 * @param {Combat} combat
 * @returns {boolean}
 */
export function hasSnapshot(combat) {
  return !!_snapshot && _snapshot.combatId === combat?.id;
}

/**
 * Discard the current snapshot (e.g. when combat ends or a new encounter starts).
 */
export function clearSnapshot() {
  if (_snapshot) {
    log("[Snapshot] Cleared.");
    _snapshot = null;
  }
}

/**
 * Restore all combatants to their snapshotted position and HP.
 * Shows a confirmation dialog before proceeding.
 *
 * @param {Combat} combat
 * @returns {Promise<boolean>} true if restore was performed, false if cancelled.
 */
export async function restoreSnapshot(combat) {
  if (!_snapshot || _snapshot.combatId !== combat?.id) {
    ui.notifications.warn(game.i18n.localize("NCA.Notify.SnapshotNone"));
    return false;
  }

  const snap = _snapshot;
  const withResources = !!snap.includesResources;

  // ── Confirmation dialog ──────────────────────────────────────────────────
  const restoredList = withResources
    ? game.i18n.localize("NCA.Dialog.UndoRestoredFull")
    : game.i18n.localize("NCA.Dialog.UndoRestoredBasic");
  const notRestoredList = withResources
    ? game.i18n.localize("NCA.Dialog.UndoNotRestoredFull")
    : game.i18n.localize("NCA.Dialog.UndoNotRestoredBasic");

  const confirmed = await Dialog.confirm({
    title:      game.i18n.localize("NCA.Dialog.UndoTitle"),
    content: `
      <p><strong>${game.i18n.localize("NCA.Dialog.UndoHeading")}</strong></p>
      <p>${game.i18n.format("NCA.Dialog.UndoTakenAt", { round: snap.round, turn: snap.turn, count: snap.entries.length })}</p>
      <hr>
      <p class="dialog-subtext" style="color:var(--color-text-dark-secondary,#555);font-size:0.85em">
        <strong>${game.i18n.localize("NCA.Dialog.UndoWillRestore")}</strong> ${restoredList}<br>
        <strong>${game.i18n.localize("NCA.Dialog.UndoWillNot")}</strong> ${notRestoredList}<br>
        ${game.i18n.localize("NCA.Dialog.UndoManualStep")}
      </p>
    `,
    defaultYes: false,
    options:    { width: 460 },
  });

  if (!confirmed) {
    log("[Snapshot] Restore cancelled by GM.");
    return false;
  }

  log(`[Snapshot] Restoring ${snap.entries.length} combatants to round ${snap.round}, turn ${snap.turn}…`);

  let restored = 0;
  let failed   = 0;

  for (const entry of snap.entries) {
    try {
      // ── Restore token position + elevation ────────────────────────────
      const tokenDoc = canvas.tokens.get(entry.tokenId)?.document
                    ?? game.scenes.active?.tokens.get(entry.tokenId);

      if (tokenDoc) {
        // animate: false suppresses the visual tween.
        // teleport: true skips Foundry's _preUpdateMovement collision/wall check,
        // which is exactly what we want — a direct positional restore that
        // ignores walls and creatures, equivalent to a GM drag-teleport.
        await tokenDoc.update({
          x:         entry.x,
          y:         entry.y,
          elevation: entry.elevation,
        }, { animate: false, teleport: true });
      } else {
        log(`[Snapshot] Token ${entry.tokenId} not found — skipping position restore.`, "warn");
      }

      // ── Resolve the live actor once (linked OR unlinked synthetic) ─────
      const actor = (entry.actorId ? game.actors.get(entry.actorId) : null)
                 ?? tokenDoc?.actor ?? null;

      // ── Restore HP ────────────────────────────────────────────────────
      if (entry.hp >= 0 && actor) {
        await actor.update({ "system.attributes.hp.value": entry.hp });
      }

      // ── Restore spell slots (diff-update changed levels only) ─────────
      if (actor && entry.spellSlots) {
        const update = {};
        for (const [key, snapSlot] of Object.entries(entry.spellSlots)) {
          const live = actor.system?.spells?.[key];
          if (!live) continue;
          if (Number(live.value ?? 0) !== snapSlot.value) {
            update[`system.spells.${key}.value`] = snapSlot.value;
          }
        }
        if (Object.keys(update).length) await actor.update(update);
      }

      // ── Restore item charges (write whichever field the system owns) ──
      if (actor && Array.isArray(entry.itemCharges)) {
        for (const charge of entry.itemCharges) {
          const item = actor.items.get(charge.itemId);
          if (!item) continue; // item deleted mid-block — nothing to restore
          const uses = item.system?.uses;
          if (!uses) continue;
          try {
            if (charge.spent !== null && typeof uses.spent === "number") {
              if (uses.spent !== charge.spent) {
                await item.update({ "system.uses.spent": charge.spent });
              }
            } else if (charge.value !== null && typeof uses.value === "number") {
              if (uses.value !== charge.value) {
                await item.update({ "system.uses.value": charge.value });
              }
            }
          } catch (err) {
            log(`[Snapshot] Charge restore failed for "${item.name}": ${err.message}`, "warn");
          }
        }
      }

      // ── Delete effects added after the snapshot (delete-only — full AE
      //    re-creation is out of scope; removed effects stay removed) ─────
      if (actor && Array.isArray(entry.effectIds)) {
        const known = new Set(entry.effectIds);
        const added = actor.effects
          .filter(e => !known.has(e.id))
          // Belt & braces: when createdTime is available, only delete effects
          // genuinely created after capture — protects pre-existing disabled
          // effects that were merely toggled on during the block.
          .filter(e => {
            const created = e._stats?.createdTime;
            return !Number.isFinite(created) || created >= snap.takenAt;
          })
          .map(e => e.id);
        if (added.length) {
          try {
            await actor.deleteEmbeddedDocuments("ActiveEffect", added);
          } catch (err) {
            log(`[Snapshot] Effect cleanup failed for ${actor.name}: ${err.message}`, "warn");
          }
        }
      }

      restored++;
    } catch (err) {
      failed++;
      log(`[Snapshot] Failed to restore combatant ${entry.combatantId}: ${err.message}`, "warn");
    }
  }

  const msg = failed === 0
    ? game.i18n.format("NCA.Notify.SnapshotRestored", { restored })
    : game.i18n.format("NCA.Notify.SnapshotPartial", { restored, failed });

  if (failed === 0) {
    ui.notifications.info(msg);
  } else {
    ui.notifications.warn(msg);
  }
  log(`[Snapshot] Restore complete — ${restored} ok, ${failed} failed.`);

  // Discard the snapshot after a successful restore so the button disappears.
  clearSnapshot();
  ui.combat?.render(false);

  return true;
}

/**
 * Inspect the internal snapshot (for macros / debugging).
 * @returns {object|null}
 */
export function getSnapshot() {
  return _snapshot ? { ..._snapshot } : null;
}
