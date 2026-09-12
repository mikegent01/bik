/**
 * debrief.js — headless post-combat recap.
 *
 * Aggregates the AI-trace rows from one combat into a structured recap. Pure and
 * Node-testable. Damage-dealt data is OPTIONAL: when the caller supplies a
 * {actorId → total} map (captured live from the midi damage hook), the recap
 * includes a damage MVP; without it, the recap is built from decision activity
 * alone (turns, focus-fire, retreats, spells) so it degrades gracefully on
 * tables without midi-qol.
 *
 * The HTML formatter is separated from the aggregator so the aggregation logic
 * can be tested without any DOM/i18n.
 */

/**
 * @param {object[]} rows           trace rows for one combat (turn + event rows)
 * @param {object}   [opts]
 * @param {Object<string,number>} [opts.damageByActor]  actorId → damage dealt
 * @param {Object<string,string>} [opts.nameByActor]    actorId → display name
 * @returns {object} recap
 */
export function buildRecap(rows = [], { damageByActor = null, nameByActor = {} } = {}) {
  const turnRows = rows.filter(r => !r.event); // event rows (legendary/lair) excluded from per-actor turn tallies
  const byActor = new Map();

  const nameOf = (id, fallback) => nameByActor[id] ?? fallback ?? id;

  for (const r of turnRows) {
    if (!r.actorId) continue;
    let a = byActor.get(r.actorId);
    if (!a) {
      a = {
        actorId: r.actorId, name: nameOf(r.actorId, r.actorName),
        turns: 0, attacks: 0, multiattacks: 0, spells: 0, retreats: 0,
        targets: new Map(), losRecoveries: 0,
      };
      byActor.set(r.actorId, a);
    }
    a.turns++;
    switch (r.actionType) {
      case "attack":      a.attacks++; break;
      case "multiattack": a.multiattacks++; break;
      case "spell":       a.spells++; break;
      case "retreat":     a.retreats++; break;
    }
    if (r.targetName) a.targets.set(r.targetName, (a.targets.get(r.targetName) ?? 0) + 1);
    if (r.noLosRetry) a.losRecoveries++;
  }

  const actors = [...byActor.values()].map(a => ({
    ...a,
    topTarget: _topKey(a.targets),
    targets: undefined,
    _targets: a.targets, // kept internal for focus-fire calc below
  }));

  // Focus-fire: the target most-frequently chosen across ALL npcs.
  const globalTargets = new Map();
  for (const a of byActor.values()) {
    for (const [t, n] of a.targets) globalTargets.set(t, (globalTargets.get(t) ?? 0) + n);
  }

  // Damage MVP (optional).
  let damageMvp = null;
  if (damageByActor && Object.keys(damageByActor).length) {
    let bestId = null, best = -1;
    for (const [id, dmg] of Object.entries(damageByActor)) {
      if (dmg > best) { best = dmg; bestId = id; }
    }
    if (bestId) damageMvp = { actorId: bestId, name: nameOf(bestId), damage: best };
  }

  // Activity MVP (fallback / always computed): most weighted actions.
  const activityScore = (a) => a.multiattacks * 2 + a.attacks + a.spells * 2;
  let activityMvp = null;
  for (const a of actors) {
    if (!activityMvp || activityScore(a) > activityScore(activityMvp)) activityMvp = a;
  }

  const totals = actors.reduce((t, a) => ({
    turns: t.turns + a.turns,
    attacks: t.attacks + a.attacks,
    multiattacks: t.multiattacks + a.multiattacks,
    spells: t.spells + a.spells,
    retreats: t.retreats + a.retreats,
  }), { turns: 0, attacks: 0, multiattacks: 0, spells: 0, retreats: 0 });

  // strip internal field
  for (const a of actors) delete a._targets;

  return {
    npcCount: actors.length,
    rounds: rows.reduce((m, r) => Math.max(m, r.round ?? 0), 0),
    totals,
    actors: actors.sort((x, y) => activityScore(y) - activityScore(x)),
    focusTarget: _topKey(globalTargets),
    damageMvp,
    activityMvp: activityMvp ? { actorId: activityMvp.actorId, name: activityMvp.name } : null,
  };
}

function _topKey(map) {
  let bestK = null, best = -1;
  for (const [k, v] of map) if (v > best) { best = v; bestK = k; }
  return bestK;
}

// ─── Live per-combat collection ───────────────────────────────────────────────
// buildRecap() above is pure and tested. The collector below feeds it live
// turn rows regardless of whether observability tracing is enabled.

const _TURNS = [];

/** Store one finished turn row (compact subset is fine). */
export function collectTurn(row) {
  if (!row || !row.actorId) return;
  _TURNS.push({
    actorId: row.actorId, actorName: row.actorName, round: row.round ?? 0,
    actionType: row.actionType ?? null, actionItems: row.actionItems ?? null,
    targetName: row.targetName ?? null, multiattackCount: row.multiattackCount ?? null,
    noLosRetry: row.noLosRetry ?? null, event: row.event ?? null,
  });
}

/** Return collected rows for a combat (all if no id filter matches). */
export function drainTurns() {
  return _TURNS.slice();
}

export function clearTurns() { _TURNS.length = 0; }

// Reset alongside the other per-combat stores.
if (typeof Hooks !== "undefined") Hooks?.on?.("deleteCombat", clearTurns);

/**
 * Render a recap to HTML for a chat card. Kept dependency-free (no i18n) so it
 * is trivially testable; the live caller may localize the heading separately.
 */
export function formatRecapHTML(recap, { heading = "Combat Debrief" } = {}) {
  if (!recap || recap.npcCount === 0) {
    return `<div class="nca-debrief"><h3>${heading}</h3><p>No automated NPC activity to report.</p></div>`;
  }
  const t = recap.totals;
  const rows = recap.actors.map(a => {
    const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
    const bits = [];
    if (a.multiattacks) bits.push(plural(a.multiattacks, "multiattack"));
    if (a.attacks)      bits.push(plural(a.attacks, "attack"));
    if (a.spells)       bits.push(plural(a.spells, "spell"));
    if (a.retreats)     bits.push(plural(a.retreats, "retreat"));
    const focus = a.topTarget ? `, focused ${a.topTarget}` : "";
    return `<li><strong>${a.name}</strong>: ${bits.join(", ") || "no actions"}${focus}</li>`;
  }).join("");

  const mvpLine = recap.damageMvp
    ? `<p class="nca-debrief-mvp">Deadliest: <strong>${recap.damageMvp.name}</strong> (${recap.damageMvp.damage} damage)</p>`
    : (recap.activityMvp
        ? `<p class="nca-debrief-mvp">Busiest: <strong>${recap.activityMvp.name}</strong></p>`
        : "");

  const focusLine = recap.focusTarget
    ? `<p class="nca-debrief-focus">Most-targeted: <strong>${recap.focusTarget}</strong></p>`
    : "";

  return `<div class="nca-debrief">
    <h3>${heading}</h3>
    ${mvpLine}${focusLine}
    <p class="nca-debrief-totals">${recap.rounds} rounds, ${t.turns} NPC turns,
      ${t.attacks + t.multiattacks} attack actions, ${t.spells} spells.</p>
    <ul class="nca-debrief-list">${rows}</ul>
  </div>`;
}
