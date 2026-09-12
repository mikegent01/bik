/**
 * targeting.js
 * Selects valid hostile targets for an NPC combatant.
 *
 * v2 — integrated with behavior.js tactical AI layer.
 *
 * Changes from v1:
 *  - selectTarget() now accepts an optional BehaviorContext (from behavior.js)
 *    to apply INT/WIS/archetype-driven target hints.
 *  - Without a BehaviorContext, behaviour is identical to v1 (fully backwards-compatible).
 */

import { getSetting, SETTINGS, MODULE_ID } from "./settings.js";
import { log, distanceBetweenTokens, normalize }  from "./utils.js";
import * as trace from "./ai-trace.js";

// ─── Persistent target memory (Task 4) ────────────────────────────────────────
// Per-combat sticky targets: an NPC prefers last turn's target with a bonus
// that decays over 2–3 turns, preventing ping-pong between equidistant PCs.
// Key: npc token id → { targetTokenId, turnsHeld, lastRound }.
const TARGET_MEMORY = new Map();

export function clearTargetMemory() {
  TARGET_MEMORY.clear();
}

function _stickyBonusFor(npcTokenId, candidateTokenId, hints) {
  if (!getSetting(SETTINGS.TARGET_PERSISTENCE)) return 0;
  const mem = TARGET_MEMORY.get(npcTokenId);
  if (!mem || mem.targetTokenId !== candidateTokenId) return 0;
  // Decay: 1 prior turn → 15, 2 → 8, 3+ → 0. Focus-fire archetypes hold on
  // harder (×1.5) — pack hunters do not get bored.
  let bonus = mem.turnsHeld <= 1 ? 15 : mem.turnsHeld === 2 ? 8 : 0;
  if ((hints?.focusFireBonus ?? 0) > 5) bonus *= 1.5;
  return bonus;
}

function _recordTargetChoice(npcTokenId, chosenTokenId) {
  const round = game.combat?.round ?? 0;
  const mem = TARGET_MEMORY.get(npcTokenId);
  if (mem && mem.targetTokenId === chosenTokenId) {
    // Off-turn callers (legendary actions) must not inflate the decay clock:
    // turnsHeld only advances once per round. assignedCount tracks THIS NPC's
    // own focus-fire pressure contributions within the current round so they
    // can be discounted when re-scoring its own held target (see below).
    if (round > mem.lastRound) {
      mem.turnsHeld++;
      mem.lastRound = round;
      mem.assignedCount = 1;
    } else {
      mem.assignedCount = (mem.assignedCount ?? 0) + 1;
    }
  } else {
    TARGET_MEMORY.set(npcTokenId, {
      targetTokenId: chosenTokenId, turnsHeld: 1, lastRound: round, assignedCount: 1,
    });
  }
}

// ─── Damage ledger / grudge memory (Task 5) ───────────────────────────────────
// Who has hurt whom this combat. Written from the midi-qol.damageApplied hook
// in main.js; consumed here (targeting bonus) and by morale (heavy-hit shock).
// Key: victim actor id → Map<attacker token id, { total, lastRound }>.
const DAMAGE_LEDGER = new Map();

export function clearDamageLedger() {
  DAMAGE_LEDGER.clear();
}

export function recordDamageTaken(victimActorId, attackerTokenId, amount) {
  if (!victimActorId || !attackerTokenId || !(amount > 0)) return;
  if (!DAMAGE_LEDGER.has(victimActorId)) DAMAGE_LEDGER.set(victimActorId, new Map());
  const byAttacker = DAMAGE_LEDGER.get(victimActorId);
  const entry = byAttacker.get(attackerTokenId) ?? { total: 0, lastRound: 0 };
  entry.total    += amount;
  entry.lastRound = game.combat?.round ?? 0;
  byAttacker.set(attackerTokenId, entry);
}

/**
 * Grudge bonus: proportional to damage taken from this candidate, capped at
 * 12 — deliberately below the finishing-blow range (up to 24) and the sticky
 * bonus, so revenge flavours targeting without overriding tactics.
 */
function _grudgeBonusFor(npcActorId, candidateTokenId) {
  if (!getSetting(SETTINGS.TARGET_GRUDGE_MEMORY)) return 0;
  const entry = DAMAGE_LEDGER.get(npcActorId)?.get(candidateTokenId);
  if (!entry) return 0;
  return Math.min(12, entry.total * 0.4);
}

/** True if a candidate target is warded by Sanctuary (de-prioritise it). */
function _targetHasSanctuary(token) {
  try {
    if (!getSetting(SETTINGS.ENABLE_CONDITION_BEHAVIORS)) return false;
    if (!getSetting(SETTINGS.COND_SANCTUARY)) return false;
    const actor = token.actor;
    if (actor?.statuses?.has?.("sanctuary")) return true;
    for (const e of (actor?.effects ?? [])) {
      if (e.disabled || e.suppressed) continue;
      if (/sanctuary/i.test(e.name ?? e.label ?? "")) return true;
    }
  } catch { /* ignore */ }
  return false;
}

// ─── Per-actor targeting flags (set via the NPC sheet's Automated NPCs tab) ───

/**
 * Read the comma-separated target blacklist flag into a Set of normalised
 * names. Empty set when the flag is absent — back-compat safe.
 */
function _getTargetBlacklist(actor) {
  try {
    const raw = actor?.getFlag?.(MODULE_ID, "targetBlacklist");
    if (!raw || typeof raw !== "string") return null;
    const names = raw.split(",").map(s => normalize(s.trim())).filter(Boolean);
    return names.length ? new Set(names) : null;
  } catch { return null; }
}

/** True if this token's name is on the NPC's blacklist. */
function _isBlacklisted(blacklist, token) {
  if (!blacklist) return false;
  return blacklist.has(normalize(token?.name ?? token?.document?.name ?? ""));
}

/**
 * Resolve the priorityTargetName flag to a live, valid, hostile-eligible
 * token — or null. The match is case-insensitive on token name.
 */
function _resolvePriorityTarget(actor, npcToken, excludeIds, validate) {
  try {
    const raw = actor?.getFlag?.(MODULE_ID, "priorityTargetName");
    if (!raw || typeof raw !== "string" || !raw.trim()) return null;
    const wanted = normalize(raw.trim());
    for (const token of canvas.tokens.placeables) {
      if (token.id === npcToken.id) continue;
      if (excludeIds?.has(token.id)) continue;
      if (normalize(token.name ?? "") !== wanted) continue;
      if (!validate(token)) continue;
      return token;
    }
  } catch { /* fall through to scoring */ }
  return null;
}

// ─── Per-round target assignment cache ────────────────────────────────────────
const CURRENT_TARGET_ASSIGNMENTS = {};

Hooks.on("combatRound", () => {
  const keys = Object.keys(CURRENT_TARGET_ASSIGNMENTS);
  keys.forEach(k => delete CURRENT_TARGET_ASSIGNMENTS[k]);
  log("combatRound: target assignment cache cleared.");
});

// ─── Neutral retaliation tracker ──────────────────────────────────────────────
// Maps a victimTokenId → attackerTokenId for NEUTRAL tokens that have been hit.
// Cleared at combat end. Populated from automation.js via recordAttacker().
const _lastAttackerMap = new Map();

Hooks.on("combatEnd", () => _lastAttackerMap.clear());

/**
 * Record that a NEUTRAL token was attacked by another token.
 * Call this from automation.js when a NEUTRAL token takes damage.
 *
 * @param {string} victimTokenId
 * @param {string} attackerTokenId
 */
export function recordAttacker(victimTokenId, attackerTokenId) {
  _lastAttackerMap.set(victimTokenId, attackerTokenId);
  log(`recordAttacker: ${victimTokenId} → retaliate against ${attackerTokenId}`);
}

// ─── Target validity ───────────────────────────────────────────────────────────

// Elevation sentinel: tokens at or below this depth are treated as "off-canvas /
// removed from play". Used by some modules to bury tokens out of reach without
// fully deleting them. Anything reasonable (mining tunnels, dungeon shafts)
// won't approach -10000 ft, so this is a safe sentinel.
const REMOVED_ELEVATION_SENTINEL = -9000;

function isValidTarget(token) {
  if (!token) return false;
  if (token.document.hidden) return false;
  if (token.document.getFlag("core", "hidden")) return false;
  if (token.actor?.statuses?.has("invisible")) return false;
  if (token.document.elevation < REMOVED_ELEVATION_SENTINEL) return false;
  return true;
}

function _isSpellcaster(actor) {
  if (!actor) return false;
  try {
    const spells = actor.system?.spells;
    if (spells) {
      for (const key of Object.keys(spells)) {
        if (Number(spells[key]?.max ?? 0) > 0) return true;
      }
    }
    return actor.items?.some(i =>
      i.type === "feat" &&
      String(i.name ?? "").toLowerCase().includes("spellcast")
    ) ?? false;
  } catch {
    return false;
  }
}

function _getMostTargetedTokenId() {
  let best = null;
  let bestCount = 0;
  for (const [id, count] of Object.entries(CURRENT_TARGET_ASSIGNMENTS)) {
    if (count > bestCount) { bestCount = count; best = id; }
  }
  return best;
}

// ─── Main export ──────────────────────────────────────────────────────────────

/**
 * @param {Token}           npcToken
 * @param {BehaviorContext} [behaviorCtx]
 * @param {object}          [opts]
 * @param {Set<string>|string[]} [opts.excludeIds]  token IDs to exclude (e.g. failed-LOS targets)
 * @returns {Token|null}
 */
export function selectTarget(npcToken, behaviorCtx = null, opts = {}) {
  const scene = npcToken.scene ?? canvas.scene;
  if (!scene) return null;

  const ignoreUnconscious = getSetting(SETTINGS.IGNORE_UNCONSCIOUS);
  const useDispositionTargeting = getSetting(SETTINGS.DISPOSITION_TARGETING) ?? true;
  const npcDisposition    = npcToken.document.disposition;
  const hints             = behaviorCtx?.targetHints ?? null;
  const focusTokenId      = (hints?.focusFire) ? _getMostTargetedTokenId() : null;

  // Caller-supplied exclusion set — used by the no-LOS retry path so a token
  // we've already proven unreachable this turn is removed from consideration.
  const excludeIds = opts.excludeIds
    ? (opts.excludeIds instanceof Set ? opts.excludeIds : new Set(opts.excludeIds))
    : null;

  // ── Per-actor priority target short-circuit ───────────────────────────
  // A GM-set "always target token named X" flag wins over all scoring when a
  // valid matching token exists. The no-LOS retry's excludeIds still applies
  // so an unreachable priority target falls back to normal scoring.
  const npcActor = npcToken.actor;
  const blacklist = _getTargetBlacklist(npcActor);
  const priorityToken = _resolvePriorityTarget(npcActor, npcToken, excludeIds, (token) => {
    if (!token.actor) return false;
    if (!isValidTarget(token)) return false;
    if (token.document.defeated) return false;
    if ((token.actor.system?.attributes?.hp?.value ?? 0) <= 0) return false;
    if (ignoreUnconscious && isUnconscious(token.actor)) return false;
    return true;
  });
  if (priorityToken) {
    log(`${npcToken.name}: priority target flag → ${priorityToken.name}`);
    CURRENT_TARGET_ASSIGNMENTS[priorityToken.id] =
      (CURRENT_TARGET_ASSIGNMENTS[priorityToken.id] ?? 0) + 1;
    return priorityToken;
  }

  // ── NEUTRAL retaliation short-circuit ─────────────────────────────────
  // A NEUTRAL token that was attacked skips scoring and retaliates directly.
  if (useDispositionTargeting && npcDisposition === CONST.TOKEN_DISPOSITIONS.NEUTRAL) {
    const lastAttackerId = _lastAttackerMap.get(npcToken.id);
    if (lastAttackerId && !excludeIds?.has(lastAttackerId)) {
      const retaliationToken = canvas.tokens.placeables.find(t =>
        t.id === lastAttackerId && isValidTarget(t) && !t.document.defeated
      );
      if (retaliationToken) {
        log(`${npcToken.name}: NEUTRAL retaliation → ${retaliationToken.name}`);
        CURRENT_TARGET_ASSIGNMENTS[retaliationToken.id] =
          (CURRENT_TARGET_ASSIGNMENTS[retaliationToken.id] ?? 0) + 1;
        return retaliationToken;
      }
    }
  }

  const candidates = [];

  for (const token of canvas.tokens.placeables) {
    if (token.id === npcToken.id) continue;
    if (!token.actor) continue;
    if (excludeIds?.has(token.id)) continue;
    if (opts.forbidTargetId && token.id === opts.forbidTargetId) continue; // charm: can't target source
    if (_isBlacklisted(blacklist, token)) continue;
    if (!isValidTarget(token)) continue;

    // Vision limit (Blinded / heavily obscured): only acquire targets within
    // the given range; the NPC literally can't perceive anyone farther.
    if (opts.maxRangeFt != null && distanceBetweenTokens(npcToken, token) > opts.maxRangeFt) continue;

    // Disposition filtering. When invertDisposition is set (Dominate), the NPC
    // attacks creatures that SHARE its disposition (its former allies) and
    // spares true enemies — the dominator turns it against its own side.
    if (opts.invertDisposition) {
      const sharesSide = token.document.disposition === npcDisposition &&
                         npcDisposition !== CONST.TOKEN_DISPOSITIONS.SECRET;
      if (!sharesSide) continue;
    } else if (useDispositionTargeting) {
      if (!isHostileToward(npcDisposition, token.document.disposition)) continue;
    } else {
      // Legacy v1 behaviour: only HOSTILE attacks FRIENDLY and vice versa
      if (!_legacyHostileCheck(npcDisposition, token.document.disposition)) continue;
    }

    if (token.document.defeated) continue;
    if (ignoreUnconscious && isUnconscious(token.actor)) continue;

    const hp = token.actor.system?.attributes?.hp;
    if (hp && hp.value <= 0) continue;

    candidates.push(token);
  }

  if (candidates.length === 0) {
    log(`No valid targets found for ${npcToken.name}.`);
    return null;
  }

  // ── AI v1 reachability gating ────────────────────────────────────────────
  // Compute the NPC's one-turn reach distance once. Used to penalise targets
  // the NPC has no plausible way of engaging this turn.
  const reachabilityPenaltyEnabled = !!getSetting(SETTINGS.AI_REACHABILITY_PENALTY);
  const finishingBlowEnabled       = !!getSetting(SETTINGS.AI_FINISHING_BLOW_BIAS);

  // Speed (ft) — walk is the baseline; with Dash an NPC can cover 2× speed.
  // We add a generous 10ft slack for melee reach / weapon range.
  const npcSpeed = Number(npcToken.actor?.system?.attributes?.movement?.walk ?? 30);
  const oneTurnReachFt = (npcSpeed * 2) + 10;

  const _persistMem = getSetting(SETTINGS.TARGET_PERSISTENCE)
    ? TARGET_MEMORY.get(npcToken.id) : null;

  const scored = candidates.map(token => {
    const dist     = distanceBetweenTokens(npcToken, token);
    let pressure = CURRENT_TARGET_ASSIGNMENTS[token.id] ?? 0;
    // Own-pressure discount: an NPC's prior selections of its held target
    // must not repel it from that same target (harness regression test 6).
    if (_persistMem?.targetTokenId === token.id) {
      pressure = Math.max(0, pressure - (_persistMem.assignedCount ?? 0));
    }
    const hp       = token.actor.system?.attributes?.hp?.value ?? 999;
    const hpMax    = token.actor.system?.attributes?.hp?.max   ?? 999;
    const hpRatio  = hpMax > 0 ? hp / hpMax : 1;

    let score = dist + (pressure * 10);

    // ── Sanctuary (conditions): a warded target forces a Wis save to even be
    // targeted, so a smart NPC prefers anyone else. Heavy penalty rather than
    // hard exclusion (the save can fail, and a lone sanctuary'd target must
    // still be attackable). Gated by the condition-behaviour master switch.
    if (_targetHasSanctuary(token)) {
      score += 1000; // pushed to the back unless it's the only option
    }

    // ── Persistence + grudge (Tasks 4–5) ────────────────────────────────────
    const stickyBonus = _stickyBonusFor(npcToken.id, token.id, hints);
    const grudgeBonus = _grudgeBonusFor(npcToken.actor?.id, token.id);
    score -= stickyBonus + grudgeBonus;

    // ── Wounded preference (linear vs finishing-blow exponential) ──────────
    // Linear (legacy):   bonus = (1 - hpRatio) × 20
    //   50% HP → -10,  10% HP → -18,  diff ≈ 8
    // Exponential (v1):  bonus = (1 - hpRatio)² × 30
    //   50% HP → -7.5, 10% HP → -24,  diff ≈ 17
    // The exponential curve sharply preferences "one hit from dropping" without
    // penalising healthy-but-vulnerable targets that have other tactical value.
    const woundDeficit = hpMax > 0 ? (1 - hpRatio) : 0;
    const woundBonus   = finishingBlowEnabled
      ? (woundDeficit * woundDeficit) * 30
      : woundDeficit * 20;

    if (hints) {
      if (hints.preferWounded && hpRatio < 1) {
        // preferWounded hint stacks an additional opportunism bonus on top
        // of the base wound preference — characterful predators chase blood.
        score -= woundDeficit * (hints.opportunismBonus || 20);
      } else {
        score -= woundBonus;
      }

      if (hints.preferSpellcasters && _isSpellcaster(token.actor)) {
        score -= (hints.spellcasterFocusBonus || 15);
      }

      if (hints.focusFire && focusTokenId && token.id === focusTokenId) {
        score -= (hints.focusFireBonus || 15);
      }

      if (hints.packActive && focusTokenId && token.id === focusTokenId) {
        score -= (hints.packFocusBonus || 20);
      }
    } else {
      score -= woundBonus;
    }

    // ── Reachability penalty ──────────────────────────────────────────────
    // A target outside one-turn-with-Dash range is implausible to engage this
    // turn. Apply a large penalty so the NPC commits to nearer targets unless
    // a tactical hint (focus-fire, pack, spellcaster-focus) overrides.
    // Override-aware: any of those hints already applied -50 to -20; the +50
    // unreachable penalty cancels them only when they don't agree on this token.
    if (reachabilityPenaltyEnabled && dist > oneTurnReachFt) {
      const overrideActive =
        (hints?.focusFire       && focusTokenId && token.id === focusTokenId) ||
        (hints?.packActive      && focusTokenId && token.id === focusTokenId) ||
        (hints?.preferSpellcasters && _isSpellcaster(token.actor));
      if (!overrideActive) {
        score += 50;
      }
    }

    return { token, score };
  });

  // Primary sort by score; secondary tiebreak by disposition priority
  scored.sort((a, b) => {
    if (Math.abs(a.score - b.score) < 0.5) {
      return _tieBreakPriority(a.token, npcDisposition) -
             _tieBreakPriority(b.token, npcDisposition);
    }
    return a.score - b.score;
  });

  const chosen = scored[0].token;

  // Persistence bookkeeping + observability
  try {
    const prev = TARGET_MEMORY.get(npcToken.id);
    const switched = !!prev && prev.targetTokenId !== chosen.id;
    _recordTargetChoice(npcToken.id, chosen.id);
    trace.annotate(npcToken.actor?.id, {
      targeting: {
        held:     prev?.targetTokenId === chosen.id,
        switched,
        turnsHeld: TARGET_MEMORY.get(npcToken.id)?.turnsHeld ?? 1,
        grudge:    Number(_grudgeBonusFor(npcToken.actor?.id, chosen.id).toFixed(1)),
      },
    });
  } catch { /* trace off */ }

  CURRENT_TARGET_ASSIGNMENTS[chosen.id] = (CURRENT_TARGET_ASSIGNMENTS[chosen.id] ?? 0) + 1;

  log(
    `Target [${npcToken.name}] → ${chosen.name} ` +
    `(dist=${Math.round(distanceBetweenTokens(npcToken, chosen))}ft ` +
    `pressure=${CURRENT_TARGET_ASSIGNMENTS[chosen.id]}` +
    (hints?.focusFire       ? " focusFire"    : "") +
    (hints?.preferSpellcasters ? " spellFocus" : "") +
    (hints?.packActive      ? " pack"          : "") +
    ")"
  );

  return chosen;
}

/**
 * Full faction hostility matrix.
 *
 * HOSTILE  → attacks FRIENDLY and NEUTRAL (standard monster/player aggression)
 * FRIENDLY → attacks HOSTILE and SECRET   (players attack monsters and hidden foes)
 * NEUTRAL  → attacks FRIENDLY and HOSTILE (mercenaries, wild animals — both sides)
 * SECRET   → attacks everyone             (hidden agents, double agents)
 *
 * Same-faction tokens never attack each other (except SECRET vs SECRET).
 */
function isHostileToward(attackerDisp, defenderDisp) {
  const D = CONST.TOKEN_DISPOSITIONS;

  // Same-faction: never attack own side (SECRET is the exception — attacks all)
  if (attackerDisp === defenderDisp && attackerDisp !== D.SECRET) return false;

  switch (attackerDisp) {
    case D.HOSTILE:
      return defenderDisp === D.FRIENDLY || defenderDisp === D.NEUTRAL;
    case D.FRIENDLY:
      return defenderDisp === D.HOSTILE || defenderDisp === D.SECRET;
    case D.NEUTRAL:
      return defenderDisp === D.FRIENDLY || defenderDisp === D.HOSTILE;
    case D.SECRET:
      return true;   // attacks everyone including other SECRET tokens
    default:
      return false;
  }
}

/**
 * Legacy v1 check (used when DISPOSITION_TARGETING setting is false).
 * Only hostile↔friendly attacks, nothing else.
 */
function _legacyHostileCheck(attackerDisp, defenderDisp) {
  const D = CONST.TOKEN_DISPOSITIONS;
  return (
    (attackerDisp === D.HOSTILE   && defenderDisp === D.FRIENDLY) ||
    (attackerDisp === D.FRIENDLY  && defenderDisp === D.HOSTILE)
  );
}

/**
 * Tiebreak priority: when two targets score equally, prefer the primary enemy
 * disposition for the attacker's faction.
 *
 * Returns a lower number for higher-priority targets.
 */
function _tieBreakPriority(token, attackerDisp) {
  const D = CONST.TOKEN_DISPOSITIONS;
  const def = token.document.disposition;
  if (attackerDisp === D.HOSTILE) {
    // HOSTILE attackers: prefer FRIENDLY over NEUTRAL
    if (def === D.FRIENDLY) return 0;
    if (def === D.NEUTRAL)  return 1;
  }
  if (attackerDisp === D.FRIENDLY) {
    // FRIENDLY attackers: prefer HOSTILE over SECRET
    if (def === D.HOSTILE) return 0;
    if (def === D.SECRET)  return 1;
  }
  if (attackerDisp === D.SECRET) {
    if (def === D.FRIENDLY) return 0;
    if (def === D.HOSTILE)  return 1;
    if (def === D.NEUTRAL)  return 2;
  }
  return 3;
}

function isUnconscious(actor) {
  const hp = actor.system?.attributes?.hp;
  if (hp && hp.value <= 0) return true;
  return actor.statuses?.has("unconscious") ?? false;
}

// ─── Ally targeting (for beneficial spells) ──────────────────────────────────

/**
 * Return true when defender is an ally of attacker (same faction, not SECRET).
 *
 * SECRET-disposition tokens are intentionally excluded — per isHostileToward,
 * SECRET attacks everyone, so it has no allies by definition.
 *
 * Same-disposition NPCs are allies (HOSTILE↔HOSTILE, FRIENDLY↔FRIENDLY,
 * NEUTRAL↔NEUTRAL). This is the inverse-symmetric counterpart of
 * isHostileToward and uses the same disposition matrix.
 */
function isAllyToward(attackerDisp, defenderDisp) {
  const D = CONST.TOKEN_DISPOSITIONS;
  if (attackerDisp === D.SECRET || defenderDisp === D.SECRET) return false;
  return attackerDisp === defenderDisp;
}

/**
 * Select the best ally token for a beneficial spell (heal / buff).
 *
 * "Ally" = same disposition as the caster (excluding SECRET). The caster
 * itself is included as a candidate unless opts.excludeSelf is set.
 *
 * @param {Token}  npcToken
 * @param {object} [opts]
 * @param {"heal"|"buff"} [opts.purpose="buff"]   scoring objective
 * @param {boolean}       [opts.excludeSelf=false] skip the caster as a candidate
 * @param {number}        [opts.maxRangeFt=Infinity] only return allies within this distance
 * @param {number}        [opts.healThreshold=0.8] for purpose="heal": only allies below this HP ratio
 * @param {(token:Token)=>boolean} [opts.filter]   extra predicate applied to each candidate
 * @returns {Token|null}
 */
export function selectAllyTarget(npcToken, opts = {}) {
  if (!npcToken?.document || !canvas?.tokens) return null;

  const purpose       = opts.purpose       ?? "buff";
  const excludeSelf   = !!opts.excludeSelf;
  const maxRangeFt    = Number.isFinite(opts.maxRangeFt) ? opts.maxRangeFt : Infinity;
  const healThreshold = opts.healThreshold ?? 0.8;
  const extraFilter   = typeof opts.filter === "function" ? opts.filter : null;

  const npcDisp = npcToken.document.disposition;
  // SECRET-disposition NPCs have no allies — skip the search entirely.
  if (npcDisp === CONST.TOKEN_DISPOSITIONS.SECRET) return null;

  const candidates = [];
  const allyBlacklist = _getTargetBlacklist(npcToken.actor);

  // The caster itself is an ally for its own beneficial spells (most common
  // case for solo NPCs). Included by default; gated by excludeSelf when the
  // caller specifically wants to target someone else (e.g. a touch-range heal
  // that the caster has cast on self already).
  if (!excludeSelf) candidates.push(npcToken);

  for (const token of canvas.tokens.placeables) {
    if (token.id === npcToken.id) continue;
    if (!token.actor) continue;
    if (token.document.hidden) continue;
    if (_isBlacklisted(allyBlacklist, token)) continue;
    if (!isAllyToward(npcDisp, token.document.disposition)) continue;

    const hp = token.actor.system?.attributes?.hp;
    if (hp && Number(hp.value ?? 0) <= 0) continue;     // dead/dying — no benefit

    if (maxRangeFt !== Infinity) {
      const d = distanceBetweenTokens(npcToken, token);
      if (d > maxRangeFt) continue;
    }

    if (extraFilter && !extraFilter(token)) continue;

    candidates.push(token);
  }

  if (candidates.length === 0) return null;

  // Score per purpose
  if (purpose === "heal") {
    // Pick the ally with the lowest HP ratio below the threshold.
    let best = null;
    let bestRatio = Infinity;
    for (const t of candidates) {
      const hp = t.actor?.system?.attributes?.hp;
      const r  = Math.max(0, Number(hp?.value ?? 0)) / Math.max(1, Number(hp?.max ?? 1));
      if (r >= healThreshold) continue;
      if (r < bestRatio) { bestRatio = r; best = t; }
    }
    return best;  // null if no one is hurt enough — caller decides what to do
  }

  // purpose === "buff" — prefer the caster (most common pattern), else nearest
  if (!excludeSelf) {
    // If self is in the list, prefer self by default. Buffs on yourself are
    // the lowest-risk choice — no chance of an ally moving out of range, no
    // wasted slot on a dying ally.
    return npcToken;
  }
  // Excluded self — pick nearest. The caller may rescore after this.
  let nearest = null;
  let nearestDist = Infinity;
  for (const t of candidates) {
    const d = distanceBetweenTokens(npcToken, t);
    if (d < nearestDist) { nearestDist = d; nearest = t; }
  }
  return nearest;
}
