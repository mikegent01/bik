/**
 * narrate.js — headless intent narration.
 *
 * Turns a single AI-trace row (the decision record produced per NPC turn) into
 * a short, human-readable line describing what the NPC is about to do. Pure and
 * Node-testable: no Foundry API, no i18n lookups (callers may localize verbs via
 * the key map exported here if they wish; the default output is plain English).
 *
 * Used by:
 *   - the Turn Spotlight card (on-canvas, presentation layer)
 *   - the combat debrief (per-turn recap lines)
 *   - optional chat mirroring
 */

/** Archetype key → short adjective/noun used to colour the line. */
export const ARCHETYPE_FLAVOR = {
  berserker: "Reckless", brute: "Brutish", zealot: "Fanatical", fearless: "Fearless",
  sadistic: "Cruel", coward: "Wary", cautious: "Cautious", defensive: "Guarded",
  disciplined: "Disciplined", tactician: "Calculating", guardian: "Protective",
  bodyguard: "Shielding", skirmisher: "Nimble", sniper: "Patient", artillery: "Ranged",
  predator: "Hunting", hunter: "Relentless", opportunist: "Opportunistic",
  assassin: "Lethal", ambusher: "Ambushing",
};

/** Pick the single most characterful archetype to name (first match wins). */
function primaryFlavor(archetypeKeys = []) {
  for (const k of archetypeKeys) {
    if (ARCHETYPE_FLAVOR[k]) return ARCHETYPE_FLAVOR[k];
  }
  return null;
}

/** Human phrase for a movement descriptor, if the trace carried one. */
function movementPhrase(movement) {
  if (!movement || typeof movement !== "object") return null;
  const kind = movement.kind ?? movement.mode ?? null;
  switch (kind) {
    case "approach": return "closes in on";
    case "kite":
    case "kite-back": return "kites and fires at";
    case "flank":     return "flanks";
    case "reposition":return "repositions toward";
    case "retreat":
    case "flee":      return "breaks away from";
    default:          return null;
  }
}

/**
 * Compose the intent line.
 *
 * @param {object} row  a trace row (or partial) with any of:
 *   actorName, archetypeKeys[], actionType, actionItems[], targetName,
 *   targetHp, targetHpMax, movement{kind}, multiattackCount
 * @param {object} [opts]
 * @param {boolean} [opts.includeName=true]  prefix with the NPC's name
 * @returns {string} e.g. "Fanatical Orc charges the bloodied Cleric"
 */
export function narrateIntent(row = {}, { includeName = true } = {}) {
  const name = row.actorName ?? "The NPC";

  // Proper nouns (player characters, player-owned actors, and linked/named NPCs)
  // take no article and no archetype epithet: "Kaelen", never "the Kaelen" or
  // "Fanatical Strahd". Generic creatures keep both: "Fanatical Orc".
  const actorProper = row.actorIsProper === true;
  const flavor = actorProper ? null : primaryFlavor(row.archetypeKeys);
  const subject = includeName
    ? (flavor ? `${flavor} ${name}` : name)
    : (flavor ? flavor : "It");

  const target = row.targetName ?? null;
  const targetProper = row.targetIsProper === true;
  const wounded = _isWounded(row.targetHp, row.targetHpMax);
  const targetPhrase = target
    ? (targetProper
        ? (wounded ? `bloodied ${target}` : target)
        : (wounded ? `the bloodied ${target}` : `the ${target}`))
    : null;

  const move = movementPhrase(row.movement);
  const action = row.actionType ?? null;

  // No target and no action → generic hold.
  if (!target && (!action || action === "none")) {
    if (row.targetReason === "no-valid-targets") return `${subject} finds no one to strike and holds.`;
    return `${subject} holds position.`;
  }

  // Retreat/flee dominate the line.
  if (action === "retreat") {
    return target ? `${subject} disengages from ${targetPhrase}.` : `${subject} falls back.`;
  }

  // Verb selection by action type.
  let verb;
  switch (action) {
    case "multiattack": {
      const n = row.multiattackCount ?? (row.actionItems?.length ?? 0);
      verb = n > 1 ? `unleashes a ${n}-strike flurry on` : "strikes";
      break;
    }
    case "attack":  verb = "attacks"; break;
    case "spell": {
      const spell = row.actionItems?.[0];
      verb = spell ? `casts ${spell} at` : "casts at";
      break;
    }
    default:        verb = move ?? "advances on"; break;
  }

  // Prefer an explicit movement lead-in when the NPC both moved and acted.
  if (move && action && action !== "spell" && action !== "multiattack") {
    return targetPhrase
      ? `${subject} ${move} ${targetPhrase}.`
      : `${subject} ${move}.`;
  }

  if (!targetPhrase) return `${subject} ${verb}.`.replace(/\s+\./, ".");
  // "strikes" already reads without a preposition; others take the target directly.
  const needsAt = verb === "strikes";
  return needsAt ? `${subject} ${verb} ${targetPhrase}.` : `${subject} ${verb} ${targetPhrase}.`;
}

function _isWounded(hp, hpMax) {
  const v = Number(hp), m = Number(hpMax);
  if (!Number.isFinite(v) || !Number.isFinite(m) || m <= 0) return false;
  return v / m <= 0.5;
}
