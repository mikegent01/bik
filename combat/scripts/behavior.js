/**
 * behavior.js
 * Core tactical AI behavior layer for 5e NPC Combat Automation.
 *
 * This module is the decision engine. It runs once per NPC turn and produces:
 *   - A BehaviorContext object with all pre-computed state
 *   - Target selection modifiers fed back into targeting.js
 *   - A retreat/aggression decision that overrides or extends the existing
 *     retreat logic in automation.js
 *   - Positioning hints fed as a preferred destination to movement.js
 *
 * Architecture:
 *   1. buildBehaviorContext()   — assemble all state (INT, WIS, archetype, morale)
 *   2. scoreBehaviors()         — compute utility scores for each action category
 *   3. resolveBehaviorDecision() — collapse scores into a named decision
 *   4. applyDecisionOverrides() — patch the turn execution plan
 *
 * All computation is turn-local. No persistent state except morale (in morale.js)
 * and last-known-positions (in movement.js). No canvas scans beyond combat
 * participants. No repeated LOS checks.
 *
 * Performance budget:
 *   - buildBehaviorContext: ~0.3ms typical
 *   - scoreBehaviors: ~0.1ms
 *   - Total: well under 1ms per NPC turn
 */

import { log }                           from "./utils.js";
import { MODULE_ID, getSetting, SETTINGS } from "./settings.js";
import { resolveArchetypes, mergeArchetypes } from "./archetypes.js";
import {
  getMorale, evaluateMorale, getMoraleBracket, MORALE,
} from "./morale.js";

// ─── Score categories ─────────────────────────────────────────────────────────
export const BEHAVIOR = {
  ATTACK:       "attack",
  RETREAT:      "retreat",
  REPOSITION:   "reposition",
  DISENGAGE:    "disengage",
  HOLD:         "hold",
};

// ─── INT/WIS ability score thresholds ────────────────────────────────────────
const INT = { ANIMAL: 3, LOW: 7, AVERAGE: 10, SMART: 14, GENIUS: 18 };
const WIS = { RECKLESS: 6, LOW: 8, AVERAGE: 11, SHARP: 14, SAGE: 18 };

// ─── Cognitive profile ────────────────────────────────────────────────────────

/**
 * Builds a CognitiveProfile that controls movement imperfection and survival
 * instinct quality. Based on INT/WIS stats, then overridden by archetype flags.
 *
 * All float fields are [0..1] unless documented otherwise.
 *
 * @param {number} intScore
 * @param {number} wisScore
 * @param {object} ap        merged archetype profile (from mergeArchetypes)
 * @returns {CognitiveProfile}
 */
export function buildCognitiveProfile(intScore, wisScore, ap) {
  // ── Intelligence axes ────────────────────────────────────────────────────

  // Probability of choosing an alternate route when the direct path is blocked.
  const rerouteChance =
    intScore <= 3  ? 0.00 :
    intScore <= 7  ? 0.10 :
    intScore <= 10 ? 0.40 :
    intScore <= 14 ? 0.70 :
    intScore <= 18 ? 0.90 : 1.00;

  // How much the creature ignores allied crowding in the path.
  // 1.0 = fully ignores (zombie presses through), 0.0 = avoids entirely.
  const congestionTolerance =
    intScore <= 3  ? 1.00 :
    intScore <= 7  ? 0.80 :
    intScore <= 10 ? 0.50 :
    intScore <= 14 ? 0.20 : 0.05;

  // Minimum movement steps before reconsidering a stuck path.
  // Higher = more stubborn commitment to a blocked route.
  const reevalInterval =
    intScore <= 3  ? 99 :
    intScore <= 7  ? 5  :
    intScore <= 10 ? 3  :
    intScore <= 14 ? 2  : 1;

  // Multiplier on A* maxSearchCells. Lower = dumber pathfinding, almost direct-line.
  const pathSearchMultiplier =
    intScore <= 3  ? 0.10 :
    intScore <= 7  ? 0.30 :
    intScore <= 10 ? 0.70 :
    intScore <= 14 ? 1.00 : 1.20;

  // ── Wisdom axes ──────────────────────────────────────────────────────────

  // Multiplier on the WIS-driven retreat score bonus.
  const retreatSensitivity =
    wisScore <= 6  ? 0.00 :
    wisScore <= 8  ? 0.30 :
    wisScore <= 11 ? 0.70 :
    wisScore <= 14 ? 1.10 : 1.40;

  // Chance [0..1] the creature accepts OA exposure instead of Disengaging.
  const oaTolerance =
    wisScore <= 6  ? 0.95 :
    wisScore <= 8  ? 0.75 :
    wisScore <= 11 ? 0.50 :
    wisScore <= 14 ? 0.20 : 0.05;

  const profile = {
    rerouteChance,
    congestionTolerance,
    reevalInterval,
    pathSearchMultiplier,
    retreatSensitivity,
    oaTolerance,
    stubbornness: 0.0,   // base; archetypes may raise it
  };

  // Apply archetype cognitive overrides — they win over INT/WIS for lore-driven creatures.
  _applyCognitiveArchetypeOverrides(profile, ap);

  return profile;
}

/**
 * Apply archetype cognitiveOverrides onto a profile object in-place.
 * Only defined fields in the override object are written; others remain.
 */
function _applyCognitiveArchetypeOverrides(profile, ap) {
  const ov = ap?.cognitiveOverrides;
  if (!ov) return;
  if (ov.rerouteChance        !== undefined) profile.rerouteChance        = ov.rerouteChance;
  if (ov.congestionTolerance  !== undefined) profile.congestionTolerance  = ov.congestionTolerance;
  if (ov.reevalInterval       !== undefined) profile.reevalInterval       = ov.reevalInterval;
  if (ov.pathSearchMultiplier !== undefined) profile.pathSearchMultiplier = ov.pathSearchMultiplier;
  if (ov.retreatSensitivity   !== undefined) profile.retreatSensitivity   = ov.retreatSensitivity;
  if (ov.oaTolerance          !== undefined) profile.oaTolerance          = ov.oaTolerance;
  if (ov.stubbornness         !== undefined) profile.stubbornness         = ov.stubbornness;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Build a complete behavior context for an NPC at the start of their turn.
 * This is the primary entry point called from automation.js before targeting.
 *
 * @param {Combatant} combatant
 * @param {Combat}    combat
 * @returns {BehaviorContext}
 */
export function buildBehaviorContext(combatant, combat) {
  const actor = combatant.actor;
  if (!actor) return _nullContext(combatant);

  // ── Ability scores ──────────────────────────────────────────────────────
  const intScore = Number(actor.system?.abilities?.int?.value ?? 10);
  const wisScore = Number(actor.system?.abilities?.wis?.value ?? 10);

  // ── HP state ────────────────────────────────────────────────────────────
  const hp      = actor.system?.attributes?.hp;
  const hpVal   = Number(hp?.value ?? 0);
  const hpMax   = Number(hp?.max ?? 0);
  const hpRatio = hpMax > 0 ? hpVal / hpMax : 1;
  const bloodied = hpRatio <= 0.5;
  const critical = hpRatio <= 0.25;

  // ── Archetypes ──────────────────────────────────────────────────────────
  const archetypeKeys    = resolveArchetypes(actor);
  const archetypeProfile = mergeArchetypes(archetypeKeys);

  // ── Cognitive profile (movement imperfection + survival instincts) ───────
  const cognitiveProfile = buildCognitiveProfile(intScore, wisScore, archetypeProfile);

  // ── Morale ──────────────────────────────────────────────────────────────
  const prevBracket = globalThis.__NCA_PREV_MORALE_BRACKET__?.get(combatant.id);
  const morale  = getSetting(SETTINGS.ENABLE_BEHAVIOR_AI)
    ? evaluateMorale(combatant, archetypeProfile)
    : getMorale(combatant.id);
  const bracket = getMoraleBracket(morale);

  // Emit dialogue events when morale bracket worsens
  if (bracket !== prevBracket) {
    globalThis.__NCA_PREV_MORALE_BRACKET__ ??= new Map();
    globalThis.__NCA_PREV_MORALE_BRACKET__.set(combatant.id, bracket);
    if (bracket === "rout") {
      globalThis.__NCA_DIALOGUE_BUS__?.emit("morale-rout", { combatant });
    } else if (bracket === "shaken" && prevBracket !== "rout") {
      globalThis.__NCA_DIALOGUE_BUS__?.emit("morale-shaken", { combatant });
    }
  }

  // ── Battlefield scan (combat participants only) ─────────────────────────
  const { allyCount, nearbyAllyCount, enemyCount, nearbyEnemyCount }
    = _scanBattlefield(combatant, combat);

  // ── Movement / role ─────────────────────────────────────────────────────
  const speed    = Number(actor.system?.attributes?.movement?.walk ?? 30);
  const cr       = Number(actor.system?.details?.cr ?? 0);

  // ── Spellcaster detection ───────────────────────────────────────────────
  const hasSpells = _hasSpellcasting(actor);

  const ctx = {
    combatant,
    actor,
    intScore,
    wisScore,
    hpRatio,
    bloodied,
    critical,
    archetypeKeys,
    archetypeProfile,
    cognitiveProfile,
    morale,
    bracket,
    allyCount,
    nearbyAllyCount,
    enemyCount,
    nearbyEnemyCount,
    speed,
    cr,
    hasSpells,
  };

  log(
    `BehaviorContext [${actor.name}]: ` +
    `INT=${intScore} WIS=${wisScore} HP=${Math.round(hpRatio * 100)}% ` +
    `morale=${Math.round(morale)}(${bracket}) ` +
    `archetypes=[${archetypeKeys.join(",")}] ` +
    `allies=${allyCount}(near:${nearbyAllyCount}) enemies=${enemyCount}(near:${nearbyEnemyCount})`
  );

  return ctx;
}

/**
 * Score all behavior categories and return the best action decision.
 *
 * @param {BehaviorContext} ctx
 * @param {object}          situation   { targetToken, distanceFt, inMeleeRange, targetHpRatio }
 * @returns {BehaviorDecision}
 */
export function scoreBehaviors(ctx, situation) {
  const scores = {
    [BEHAVIOR.ATTACK]:     _scoreAttack(ctx, situation),
    [BEHAVIOR.RETREAT]:    _scoreRetreat(ctx, situation),
    [BEHAVIOR.REPOSITION]: _scoreReposition(ctx, situation),
    [BEHAVIOR.DISENGAGE]:  _scoreDisengage(ctx, situation),
    [BEHAVIOR.HOLD]:       _scoreHold(ctx, situation),
  };

  // Find winner
  let best = BEHAVIOR.ATTACK;
  let bestScore = -Infinity;
  for (const [key, score] of Object.entries(scores)) {
    if (score > bestScore) { bestScore = score; best = key; }
  }

  log(
    `BehaviorScores [${ctx.actor.name}]: ` +
    Object.entries(scores).map(([k, v]) => `${k}=${Math.round(v)}`).join(" ") +
    ` → ${best}`
  );

  return {
    decision:     best,
    scores,
    forceRetreat: best === BEHAVIOR.RETREAT && scores[BEHAVIOR.RETREAT] > 60,
    preferRanged: ctx.archetypeProfile.rangedPreference > ctx.archetypeProfile.meleePreference,
    targetHints:  _buildTargetHints(ctx, situation),
    chatHint:     ctx.archetypeProfile.chatHint || _defaultChatHint(ctx, best),
  };
}

/**
 * Build target selection modifiers from the behavior context.
 * Returns an object with numeric bonuses/penalties for targeting.js to apply.
 *
 * @param {BehaviorContext} ctx
 * @returns {TargetHints}
 */
export function buildTargetHints(ctx) {
  return _buildTargetHints(ctx, {});
}

// ─── Score functions ──────────────────────────────────────────────────────────

function _scoreAttack(ctx, situation) {
  let score = 50; // baseline

  const { archetypeProfile: ap, intScore, wisScore, morale, bracket, hpRatio,
          bloodied, critical, nearbyEnemyCount, allyCount } = ctx;

  // Morale
  if (bracket === "bold")   score += 15;
  if (bracket === "shaken") score -= 15;
  if (bracket === "rout")   score -= 30;

  // Archetype aggression
  score += ap.aggressionBonus;

  // INT: smarter creatures are better attackers (know when to press advantage)
  if (intScore >= INT.SMART)  score += 10;
  if (intScore >= INT.GENIUS) score += 10;

  // HP pressure (damaged creatures hesitate)
  if (critical)           score -= 20;
  else if (bloodied)      score -= 10;

  // Numerical advantage boosts attack confidence
  if (allyCount > ctx.enemyCount) score += 8;

  // In-range bonus (already positioned)
  if (situation.inMeleeRange || situation.distanceFt <= (situation.attackRange ?? 60)) {
    score += 10;
  }

  return score;
}

function _scoreRetreat(ctx, situation) {
  let score = 0;

  const { archetypeProfile: ap, wisScore, morale, bracket, hpRatio,
          bloodied, critical, nearbyEnemyCount, allyCount, enemyCount,
          cognitiveProfile: cp } = ctx;

  // Morale is the primary driver
  if (bracket === "rout")   score += 60;
  if (bracket === "shaken") score += 25;

  // Archetype
  score += ap.retreatBonus;
  score -= ap.retreatPenalty;

  // WIS survival instinct — scaled by retreatSensitivity from cognitive profile.
  // retreatSensitivity=0 (zombie, berserker) contributes nothing.
  // retreatSensitivity=2+ (coward) massively amplifies the retreat drive.
  const wisRetreatBonus = cp.retreatSensitivity * (bloodied ? 20 : 8);
  score += wisRetreatBonus;

  // HP
  if (critical)       score += 35;
  else if (bloodied)  score += 15;

  // Isolated and outnumbered
  if (allyCount === 0 && enemyCount >= 2) score += 20;
  if (allyCount === 0 && critical)        score += 20;

  return score;
}

function _scoreReposition(ctx, situation) {
  let score = 10; // always a baseline option

  const { archetypeProfile: ap, intScore, morale, bracket, hasSpells } = ctx;

  score += ap.repositionBonus;

  // Smarter creatures reposition more often
  if (intScore >= INT.SMART)  score += 10;
  if (intScore >= INT.GENIUS) score += 8;

  // Spellcasters want to reposition out of melee
  if (hasSpells && situation.inMeleeRange) score += 20;

  // Ranged creatures want distance
  if (ap.rangedPreference > 15 && situation.inMeleeRange) score += 20;

  // Bold morale → less repositioning (press the attack)
  if (bracket === "bold") score -= 10;

  return score;
}

function _scoreDisengage(ctx, situation) {
  let score = 5;

  const { archetypeProfile: ap, wisScore, intScore, hpRatio, bloodied, critical,
          cognitiveProfile: cp } = ctx;

  score += ap.disengage;

  // OA tolerance from cognitive profile:
  // High tolerance (reckless) = low disengage desire.
  // Low tolerance (cautious)  = strong desire to disengage safely.
  const oaAvoidance = (1.0 - cp.oaTolerance) * 30;
  score += oaAvoidance;

  // INT: tactical creatures know to disengage when retreating
  if (intScore >= INT.SMART) score += 8;

  // Injured + ranged preference = disengage and kite
  if (bloodied && ap.rangedPreference > 10) score += 15;
  if (critical && ap.rangedPreference > 10) score += 20;

  // Only relevant if actually in melee range
  if (!situation.inMeleeRange) score -= 20;

  return score;
}

function _scoreHold(ctx, situation) {
  let score = 5;

  const { archetypeProfile: ap, wisScore, allyCount, nearbyAllyCount } = ctx;

  // Formation creatures hold position with allies nearby
  score += ap.allyProximityBonus * (nearbyAllyCount > 0 ? 1 : 0);

  // High WIS territorial/guardian types prefer holding
  if (wisScore >= WIS.SHARP && ap.allyProximityBonus > 10) score += 10;

  return score;
}

// ─── Target hints ─────────────────────────────────────────────────────────────

function _buildTargetHints(ctx, situation) {
  const { archetypeProfile: ap, intScore, wisScore, morale } = ctx;

  const hints = {
    // Bonuses applied to target scoring in targeting.js
    focusFireBonus:          ap.focusFireBonus,
    opportunismBonus:        ap.opportunismBonus,
    spellcasterFocusBonus:   ap.spellcasterFocusBonus,
    packFocusBonus:          0,

    // Whether this NPC should prioritize wounded targets
    preferWounded:           ap.opportunismBonus > 10 || intScore >= INT.SMART,

    // Whether this NPC should target spellcasters/healers first
    preferSpellcasters:      ap.spellcasterFocusBonus > 10 || intScore >= INT.GENIUS,

    // Focus fire (same target as nearby allies)
    focusFire:               ap.focusFireBonus > 15 || intScore >= INT.SMART,

    // Pack bonus
    packActive:              false,
  };

  // Pack hunters get bonus when allies nearby
  if (ap.packFocusBonus > 0 && ctx.nearbyAllyCount >= (ap.packThreshold ?? 1)) {
    hints.packActive    = true;
    hints.packFocusBonus = ap.packFocusBonus;
    hints.focusFire     = true;
  }

  // Low INT: no target intelligence — pure distance/proximity
  if (intScore <= INT.ANIMAL) {
    hints.preferWounded      = false;
    hints.preferSpellcasters = false;
    hints.focusFire          = false;
    hints.focusFireBonus     = 0;
    hints.opportunismBonus   = 0;
    hints.spellcasterFocusBonus = 0;
  }

  return hints;
}

// ─── Chat hint helper ─────────────────────────────────────────────────────────

function _defaultChatHint(ctx, decision) {
  if (decision === BEHAVIOR.RETREAT) return "retreat";
  if (ctx.bracket === "bold")        return "bold";
  if (ctx.bracket === "rout")        return "rout";
  return "";
}

// ─── Battlefield scan ─────────────────────────────────────────────────────────

/**
 * Count allies and enemies from the combat participant list.
 * O(combatants) — no canvas iteration.
 */
function _scanBattlefield(combatant, combat) {
  let allyCount      = 0;
  let nearbyAllyCount = 0;
  let enemyCount     = 0;
  let nearbyEnemyCount = 0;

  const myToken = combatant.token;
  if (!myToken || !combat?.combatants) {
    return { allyCount: 0, nearbyAllyCount: 0, enemyCount: 0, nearbyEnemyCount: 0 };
  }

  const myDisp = myToken.disposition;
  const NEAR_FT = 30;
  const gs = canvas?.grid?.size ?? 100;
  const gd = canvas?.grid?.distance ?? 5;
  const myCenter = _tokenDocCenter(myToken, gs);

  for (const c of combat.combatants) {
    if (c.id === combatant.id) continue;
    if (!c.token || !c.actor) continue;

    const hp = c.actor.system?.attributes?.hp;
    if (hp && Number(hp.value ?? 0) <= 0) continue;

    const disp = c.token.disposition;
    // Grid-aware distance between token centers. The previous implementation
    // measured top-left to top-left and used straight Pythagoras in feet, which
    // is wrong for multi-cell tokens AND ignores 5e's diagonal-cost rules
    // (Chebyshev / 5-5-5 vs Euclidean). canvas.grid.measurePath handles both.
    const dist = _gridDistance(myCenter, _tokenDocCenter(c.token, gs), gs, gd);
    const near = dist <= NEAR_FT;

    if (disp === myDisp) {
      allyCount++;
      if (near) nearbyAllyCount++;
    } else {
      const hostile = (myDisp === CONST.TOKEN_DISPOSITIONS.HOSTILE && disp === CONST.TOKEN_DISPOSITIONS.FRIENDLY)
                   || (myDisp === CONST.TOKEN_DISPOSITIONS.FRIENDLY && disp === CONST.TOKEN_DISPOSITIONS.HOSTILE);
      if (hostile) {
        enemyCount++;
        if (near) nearbyEnemyCount++;
      }
    }
  }

  return { allyCount, nearbyAllyCount, enemyCount, nearbyEnemyCount };
}

/**
 * Compute the pixel center of a TokenDocument. Document.width/height are in
 * grid units, not pixels — multiplying by gridSize gives the footprint.
 */
function _tokenDocCenter(tokenDoc, gridSize) {
  const w = Number(tokenDoc.width  ?? 1);
  const h = Number(tokenDoc.height ?? 1);
  return {
    x: tokenDoc.x + (w * gridSize) / 2,
    y: tokenDoc.y + (h * gridSize) / 2,
  };
}

/**
 * Grid-aware distance between two pixel points in feet. Falls back to
 * straight-line if measurePath is unavailable (older canvas state).
 */
function _gridDistance(a, b, gridSize, gridScale) {
  try {
    const result = canvas?.grid?.measurePath?.([a, b]);
    if (typeof result?.distance === "number") return result.distance;
  } catch { /* fall through to fallback */ }
  return (Math.hypot(a.x - b.x, a.y - b.y) / gridSize) * gridScale;
}

// ─── Spellcaster detection ────────────────────────────────────────────────────

function _hasSpellcasting(actor) {
  try {
    // Has spell slots defined?
    const spells = actor.system?.spells;
    if (spells) {
      for (const key of Object.keys(spells)) {
        const slot = spells[key];
        if (slot && Number(slot.max ?? 0) > 0) return true;
      }
    }
    // Has innate spellcasting feature?
    return actor.items?.some(i =>
      i.type === "feat" &&
      String(i.name ?? "").toLowerCase().includes("spellcast")
    ) ?? false;
  } catch {
    return false;
  }
}

// ─── Null context fallback ────────────────────────────────────────────────────

function _nullContext(combatant) {
  return {
    combatant,
    actor: null,
    intScore: 10,
    wisScore: 10,
    hpRatio: 1,
    bloodied: false,
    critical: false,
    archetypeKeys: [],
    archetypeProfile: mergeArchetypes([]),
    morale: MORALE.BASE,
    bracket: "normal",
    allyCount: 0,
    nearbyAllyCount: 0,
    enemyCount: 0,
    nearbyEnemyCount: 0,
    speed: 30,
    cr: 0,
    hasSpells: false,
  };
}
