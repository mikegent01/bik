/**
 * damage-tally.js — combat-scoped record of damage DEALT by automated NPCs.
 *
 * The existing DAMAGE_LEDGER in targeting.js records damage NPCs *take* (for
 * grudge/morale). This module records the opposite direction — damage NPCs
 * *deal* — purely so the post-combat debrief can name a damage MVP.
 *
 * Fed live from the midi-qol damage hook in main.js (so it is only populated on
 * tables running midi-qol). The debrief degrades gracefully to activity-based
 * MVP when this map is empty, so nothing here is load-bearing for automation.
 *
 * Reset on deleteCombat, mirroring every other per-combat store.
 */

const DAMAGE_DEALT = new Map(); // actorId → total damage dealt this combat

export function recordDamageDealt(attackerActorId, amount) {
  if (!attackerActorId || !(amount > 0)) return;
  DAMAGE_DEALT.set(attackerActorId, (DAMAGE_DEALT.get(attackerActorId) ?? 0) + amount);
}

/** Plain object snapshot ({actorId → total}) for the debrief aggregator. */
export function getDamageDealt() {
  return Object.fromEntries(DAMAGE_DEALT);
}

export function clearDamageDealt() {
  DAMAGE_DEALT.clear();
}

// Wipe alongside the other per-combat stores.
Hooks?.on?.("deleteCombat", clearDamageDealt);
