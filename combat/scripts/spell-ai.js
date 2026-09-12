/**
 * spell-ai.js
 * Pure spell selection logic for 5e NPC Combat Automation.
 * No midi-qol dependency — works in any world; midi.js stays as the execution
 * layer only.
 *
 * Primary exports
 * ───────────────
 *  selectBestSpell(actor, npcToken, targetToken, situationCtx, options)
 *    → SpellDecision | null
 *
 *  buildSituationContext(actor, npcToken, targetToken, behaviorCtx)
 *    → situationCtx object ready to pass into selectBestSpell
 *
 *  findAOEOrigin(npcToken, spellItem, allCanvasTokens)
 *    → { origin: {x,y}, hits: Token[], alliesHit: Token[] } | null
 *
 *  getSpellMovementPreference(decision)
 *    → movementHints object for movement.js
 *
 * SpellDecision shape (the return type of selectBestSpell):
 * {
 *   item:             Item5e,
 *   slotLevel:        number,      // 0 = cantrip / innate
 *   castingType:      "action" | "bonus" | "reaction",
 *   targeting: {
 *     mode:           "single" | "aoe" | "self" | "ally",
 *     primaryTarget:  Token | null,
 *     aoeOrigin:      {x, y} | null,
 *     affectedTokens: Token[],
 *   },
 *   concentrationBreak: boolean,   // true → caller must breakConcentration first
 *   score:            number,
 * }
 */

import { log, distanceBetweenTokens, normalize }     from "./utils.js";
import { MODULE_ID, getSetting, SETTINGS }            from "./settings.js";
import { selectAllyTarget }                           from "./targeting.js";
import {
  getLowestAvailableSlotLevel,
  getHighestAvailableSlotLevel,
  isConcentrating,
  actorHasNoSlotInfrastructure,
} from "./midi.js";

// ─── Spell category constants ─────────────────────────────────────────────────

export const SPELL_CATEGORIES = {
  AOE_CONTROL:     "AOE_CONTROL",
  AOE_DAMAGE:      "AOE_DAMAGE",
  SINGLE_CONTROL:  "SINGLE_CONTROL",
  SINGLE_DAMAGE:   "SINGLE_DAMAGE",
  BUFF_SELF:       "BUFF_SELF",
  BUFF_ALLY:       "BUFF_ALLY",
  HEAL:            "HEAL",
  CANTRIP_DAMAGE:  "CANTRIP_DAMAGE",
  CANTRIP_UTILITY: "CANTRIP_UTILITY",
  SUMMON:          "SUMMON",
  MOVEMENT:        "MOVEMENT",
  UTILITY:         "UTILITY",
};

/**
 * Return true when the category should NEVER be aimed at a hostile token.
 * Used by targeting construction and by the filter rejection layer.
 *
 * Hostile categories (NOT in this set):
 *   AOE_CONTROL, AOE_DAMAGE — placed at AOE origin near enemies
 *   SINGLE_CONTROL, SINGLE_DAMAGE, CANTRIP_DAMAGE — aimed at the enemy
 *
 * Beneficial / self-affecting categories (in this set):
 *   BUFF_SELF      — self-only buffs (Mage Armor, Shield, etc.)
 *   BUFF_ALLY      — buffs for friendlies (Bless, Aid); routed to self in V1
 *                    because no ally-targeting logic exists yet
 *   HEAL           — Cure Wounds and friends
 *   MOVEMENT       — Misty Step, Dimension Door (caster moves)
 *   CANTRIP_UTILITY — Light, Friends, Minor Illusion etc.; not aimed at enemy
 *   SUMMON         — places creatures, no enemy targeting
 *   UTILITY        — catch-all for non-aggressive utility
 */
function _isBeneficialCategory(category) {
  return category === SPELL_CATEGORIES.BUFF_SELF
      || category === SPELL_CATEGORIES.BUFF_ALLY
      || category === SPELL_CATEGORIES.HEAL
      || category === SPELL_CATEGORIES.MOVEMENT
      || category === SPELL_CATEGORIES.CANTRIP_UTILITY
      || category === SPELL_CATEGORIES.SUMMON
      || category === SPELL_CATEGORIES.UTILITY;
}

// INT score thresholds — mirrors behavior.js (not imported to avoid circular dep)
const INT_THRESHOLD = { ANIMAL: 3, LOW: 7, AVERAGE: 10, SMART: 14, GENIUS: 18 };

// Base scores per category
const CATEGORY_BASE = {
  AOE_CONTROL:     85,
  AOE_DAMAGE:      75,
  SINGLE_CONTROL:  65,
  SINGLE_DAMAGE:   50,
  BUFF_SELF:       45,
  BUFF_ALLY:       40,
  HEAL:            35,
  CANTRIP_DAMAGE:  25,
  SUMMON:          55,
  MOVEMENT:        20,
  // Negative: non-combat spells must never beat the "return null → attack" threshold.
  // A score < 0 causes selectBestSpell to return null, falling through to the
  // weapon attack. Light, Prestidigitation, Mage Hand, Detect Magic etc. are
  // correctly ignored in combat this way.
  UTILITY:         -60,
  CANTRIP_UTILITY: -60,
};

// Minimum score improvement to break concentration
const CONC_BREAK_THRESHOLD = 20;

// ─── Spell variety tracking ───────────────────────────────────────────────────
// Keeps a short per-actor history of recently chosen spells so the scorer can
// penalise repetition.  Stored as a module-level Map; entries are pruned by
// combat ID and round number so stale data from a previous encounter never bleeds in.

/** @type {Map<string, Array<{name:string, round:number, combatId:string}>>} */
const _recentSpells = new Map();

// ─── Slotless-actor per-combat spend tracker ──────────────────────────────────
// Slotless NPCs have no spell-slot infrastructure, so Foundry never decrements
// a slot counter when they cast.  If the spell also has no item-level uses
// (usesMax === 0), Tier 5 can never fire and the spell stays available forever.
// We track those casts here — key: `${combatId}:${actorId}`, value: Set<normalizedName>.
// Entries belonging to finished combats are pruned lazily on each insert.

/** @type {Map<string, Set<string>>} */
const _slotlessSpent = new Map();

// ─── General per-combat cast counter ──────────────────────────────────────────
// Backstop for the "longstanding bug" where dnd5e/midi-qol does not reliably
// decrement uses.value after a cast — especially for NPC stat blocks that
// annotate spells with "X/day each" via uses.max / uses.spent.
//
// We count casts independently of the system's own bookkeeping. When the filter
// runs next turn, it compares this counter against the item's declared max and
// rejects when the count has met or exceeded it. This DOES NOT rely on the
// system correctly decrementing — it counts what we, the AI, told it to cast.
//
// Key: `${combatId}:${actorId}` → Map<itemKey, castCount>
// itemKey: item.id if available, else normalised name.

/** @type {Map<string, Map<string, number>>} */
const _castCounts = new Map();

/**
 * Return the composite key used by _slotlessSpent.
 * @param {string} combatId
 * @param {string} actorId
 * @returns {string}
 */
function _spentKey(combatId, actorId) {
  return `${combatId}:${actorId}`;
}

/**
 * Return a stable key for an item across the filter / record cycle.
 * Prefers the Foundry item id; falls back to normalised name.
 * @param {Item5e} item
 * @returns {string}
 */
function _itemKey(item) {
  return item?.id ?? normalize(item?.name ?? "");
}

/**
 * Record a slotless-actor spell as spent for this combat.
 * Only called when the spell has no uses infrastructure (usesMax === 0)
 * and the actor is on the slotless-actor path.
 *
 * @param {string} actorId
 * @param {string} spellName
 */
function _recordSlotlessSpent(actorId, spellName) {
  const combatId = game?.combat?.id ?? "__none__";
  // Prune entries for combats that are no longer active.
  for (const key of _slotlessSpent.keys()) {
    const [kid] = key.split(":");
    if (kid !== combatId && kid !== "__none__") _slotlessSpent.delete(key);
  }
  const key = _spentKey(combatId, actorId);
  if (!_slotlessSpent.has(key)) _slotlessSpent.set(key, new Set());
  _slotlessSpent.get(key).add(normalize(spellName));
}

/**
 * Return true if this slotless-actor spell has already been cast in the
 * current combat and has no uses infrastructure to track the depletion.
 *
 * @param {string} actorId
 * @param {string} spellName
 * @returns {boolean}
 */
function _isSlotlessSpent(actorId, spellName) {
  const combatId = game?.combat?.id ?? "__none__";
  const set = _slotlessSpent.get(_spentKey(combatId, actorId));
  return set?.has(normalize(spellName)) ?? false;
}

/**
 * Increment the per-combat cast counter for an item. Called after the AI
 * commits to casting it. Backstops the case where the system fails to
 * decrement uses.value / uses.spent after the cast.
 *
 * @param {string} actorId
 * @param {Item5e} item
 */
function _recordCastCount(actorId, item) {
  if (!item) return;
  const combatId = game?.combat?.id ?? "__none__";
  // Lazy prune
  for (const key of _castCounts.keys()) {
    const [kid] = key.split(":");
    if (kid !== combatId && kid !== "__none__") _castCounts.delete(key);
  }
  const key = _spentKey(combatId, actorId);
  if (!_castCounts.has(key)) _castCounts.set(key, new Map());
  const map  = _castCounts.get(key);
  const ikey = _itemKey(item);
  map.set(ikey, (map.get(ikey) ?? 0) + 1);
}

/**
 * Return how many times we've recorded a cast of this item this combat.
 * @param {string} actorId
 * @param {Item5e} item
 * @returns {number}
 */
function _getCastCount(actorId, item) {
  if (!item) return 0;
  const combatId = game?.combat?.id ?? "__none__";
  const map = _castCounts.get(_spentKey(combatId, actorId));
  return map?.get(_itemKey(item)) ?? 0;
}

/**
 * Resolve the effective remaining uses for an item, handling all the dnd5e
 * variants that have shipped over recent versions:
 *   - dnd5e ≤ 5.0:  uses.value is the source of truth
 *   - dnd5e 5.1+:   uses.spent is the source; uses.value is a derived getter
 *                   but isn't always populated correctly on freshly-loaded items
 *   - formula max:  uses.max may be a string formula; the system usually
 *                   derives the integer onto uses.max somehow, but if not we
 *                   try Number() and fall back to NaN-safe handling.
 *
 * Returns an object { max, remaining, hasFiniteMax } so callers don't have to
 * juggle the variant fields themselves.
 *
 * @param {Item5e} item
 * @returns {{max:number, remaining:number, hasFiniteMax:boolean}}
 */
function _resolveUses(item) {
  const uses = item?.system?.uses;
  if (!uses) return { max: 0, remaining: Infinity, hasFiniteMax: false };

  // Max can be a number, a numeric string, or a formula. Number() of a non-
  // numeric formula yields NaN — treat NaN as "unknown max, no gating".
  const rawMax = uses.max;
  let max = typeof rawMax === "number" ? rawMax : Number(rawMax ?? 0);
  if (!Number.isFinite(max) || max <= 0) {
    return { max: 0, remaining: Infinity, hasFiniteMax: false };
  }

  // Prefer spent (5.1+) when present; else fall back to value (legacy).
  let remaining;
  if (typeof uses.spent === "number") {
    remaining = max - uses.spent;
  } else if (typeof uses.value === "number") {
    remaining = uses.value;
  } else {
    remaining = max;
  }

  return { max, remaining, hasFiniteMax: true };
}

/**
 * Public wrapper: true if the item has uses left (or no finite max).
 * Used by the bonus-action phase in automation.js to skip depleted items.
 * Note: this does NOT consult the per-combat cast-counter backstop — that's
 * internal to the spell filter. For bonus actions the system-state check is
 * sufficient since bonus items are usually at-will weapons.
 */
export function hasUsesRemaining(item) {
  const u = _resolveUses(item);
  return !u.hasFiniteMax || u.remaining > 0;
}



// Variety penalty table: how many points to subtract after 1 or 2 rounds.
// BUFF_SELF is 0/0 because the _isAlreadyActive gate already prevents recasting.
const VARIETY_PENALTY = {
  AOE_CONTROL:     { age1: -30, age2: -15 },
  AOE_DAMAGE:      { age1: -28, age2: -12 },
  SINGLE_CONTROL:  { age1: -22, age2: -10 },
  SINGLE_DAMAGE:   { age1: -18, age2:  -8 },
  BUFF_SELF:       { age1:   0, age2:   0 },
  BUFF_ALLY:       { age1:  -8, age2:  -4 },
  HEAL:            { age1:  -5, age2:  -2 },
  CANTRIP_DAMAGE:  { age1: -10, age2:  -4 },
  CANTRIP_UTILITY: { age1:   0, age2:   0 },
  SUMMON:          { age1: -35, age2: -20 },
  MOVEMENT:        { age1: -15, age2:  -8 },
  UTILITY:         { age1:   0, age2:   0 },
};

/**
 * Record that an actor just committed to casting a spell.
 * Called by selectBestSpell immediately after a spell is chosen.
 * @param {string} actorId
 * @param {string} spellName
 * @param {Item5e} [item]  If supplied, also records slotless-spent when appropriate.
 * @param {Actor5e} [actor]
 */
function _recordSpellUsed(actorId, spellName, item = null, actor = null) {
  const combat  = game?.combat;
  const round   = combat?.round   ?? 0;
  const combId  = combat?.id      ?? "__none__";
  const history = _recentSpells.get(actorId) ?? [];
  // Prune entries that belong to a different combat or are more than 3 rounds stale.
  const valid   = history.filter(e => e.combatId === combId && round - e.round <= 3);
  valid.push({ name: normalize(spellName), round, combatId: combId });
  _recentSpells.set(actorId, valid.slice(-3));  // keep at most 3 entries

  // Always increment the AI's own per-combat cast counter. The Tier 6 backstop
  // in _getUsableItems reads this so spells with declared max but unreliable
  // system tracking still get rejected once we've committed enough casts.
  if (item) _recordCastCount(actorId, item);

  // For slotless-actor spells with no item-level uses tracking, record them as
  // spent so the filter can reject them on subsequent turns.
  if (item && actor) {
    const usesMax = Number(item.system?.uses?.max ?? 0);
    const isSlotless = actorHasNoSlotInfrastructure(actor) &&
      !(Number(actor.system?.spells?.pact?.max ?? 0) > 0);
    if (isSlotless && usesMax === 0 && !_hasAvailableInnateUses(item)) {
      _recordSlotlessSpent(actorId, spellName);
    }
  }
}

/**
 * Return a negative score penalty for a recently-used spell (0 if not recent).
 * @param {string} actorId
 * @param {string} spellName
 * @param {string} category  SPELL_CATEGORIES value
 * @returns {number}  0 or negative
 */
function _varietyPenalty(actorId, spellName, category) {
  const combat  = game?.combat;
  const round   = combat?.round ?? 0;
  const combId  = combat?.id    ?? "__none__";
  const history = _recentSpells.get(actorId) ?? [];
  const normed  = normalize(spellName);
  const table   = VARIETY_PENALTY[category] ?? { age1: -15, age2: -8 };

  for (const entry of history) {
    if (entry.combatId !== combId) continue;
    if (entry.name !== normed) continue;
    const age = round - entry.round;
    if (age <= 1) return table.age1;
    if (age === 2) return table.age2;
  }
  return 0;
}

// ─── Archetype spell intent ───────────────────────────────────────────────────
// Maps a merged archetype profile's preferredSpellCategory signature to a short
// human-readable description of the AI's tactical intent.  Shown in verbose logs.

const _INTENT_PATTERNS = [
  { match: ["AOE_DAMAGE",    "SINGLE_DAMAGE"],   desc: "blasting at range — spending slots freely"                       },
  { match: ["AOE_CONTROL",   "SINGLE_CONTROL"],  desc: "maximising crowd-control — saving high slots for lockdown"      },
  { match: ["AOE_CONTROL",   "AOE_DAMAGE"],      desc: "locking down groups then punishing with area damage"            },
  { match: ["BUFF_SELF",     "HEAL"],            desc: "melee spellcasting — self-buffing first, preserving slots for heals" },
  { match: ["SUMMON",        "BUFF_ALLY"],       desc: "summoning minions then buffing and controlling from safety"      },
  { match: ["CANTRIP_DAMAGE"],                   desc: "cantrip-focused — conserving limited uses for high-value moments"},
];

/**
 * Return a one-line intent string derived from the archetype profile.
 * @param {object|null} ap  merged archetype profile
 * @returns {string}
 */
function _archetypeIntentLine(ap) {
  if (!ap) return "";
  const prefCats = ap.preferredSpellCategory;
  if (!prefCats?.length) return "";
  const catSet = new Set(prefCats);
  for (const { match, desc } of _INTENT_PATTERNS) {
    if (match.every(c => catSet.has(c))) return desc;
  }
  return `prefers ${prefCats.join(", ")}`;
}

// ─── Classification cache ─────────────────────────────────────────────────────

const _classCache = new WeakMap(); // Item5e → SPELL_CATEGORIES value

/**
 * Classify a spell/feature item into a SPELL_CATEGORIES bucket.
 * Result is cached per item instance via WeakMap.
 *
 * @param {Item5e} item
 * @returns {string} one of SPELL_CATEGORIES values
 */
export function classifySpell(item) {
  if (_classCache.has(item)) return _classCache.get(item);
  const cat = _classifyUncached(item);
  _classCache.set(item, cat);
  return cat;
}

function _classifyUncached(item) {
  const level      = Number(item.system?.level ?? 0);
  const targetType = _getTargetType(item);           // v2/v3 safe
  const activation = _getActivationType(item);       // v2/v3 safe

  const isAOE        = _isAOETarget(targetType);
  const isDamage     = _hasDamageFormula(item);
  const isHeal       = _isHealingSpell(item);
  const isSave       = _hasSave(item);               // v2/v3 safe
  const isSummon     = _isSummonSpell(item);
  const isMovement   = _isMovementSpell(item);

  // "Self" means the spell targets/affects only the caster — either explicitly
  // (targetType "self", range "self") or because it targets a willing/friendly
  // creature with no offensive intent (no damage, no hostile save).
  const isExplicitSelf = targetType === "self" ||
                         (item.system?.range?.units === "self" && !isAOE);
  const isWillingTarget = _isWillingOrFriendlyTarget(targetType);
  const isSelf = isExplicitSelf || (isWillingTarget && !isDamage && !isSave);

  // "creature" is the dnd5e target type for most beneficial spells —
  // "willing" only appears in description text, not the target.type field.
  // A creature-targeted spell is treated as beneficial if it is in the
  // known-buff list OR has no hostile signals whatsoever (no damage, no save,
  // no hostile condition keyword). This catches Mage Armor, Mind Blank, etc.
  const isCreatureTarget = targetType === "creature" || targetType === "";
  const isCreatureTargetedBuff = isCreatureTarget && !isDamage &&
    (_hasBeneficialEffect(item) || (!isSave && !_hasHostileConditionEffect(item)));

  // A condition effect is only "hostile" when the spell can be aimed at an enemy:
  // i.e. not self-targeted, not willing-only, and not a pure buff.
  // We also require at least one of: a save, an attack, or a hostile AE/keyword.
  const isHostileTarget = !isSelf && !isWillingTarget && !isCreatureTargetedBuff;
  const hasHostileCondition = isHostileTarget && _hasHostileConditionEffect(item);
  const hasBeneficialEffect = _hasBeneficialEffect(item);

  // Reaction: handled by a separate system — never selected in main turn flow
  if (activation === "reaction") return SPELL_CATEGORIES.UTILITY;

  // ── Non-spell features (feats) ────────────────────────────────────────────
  // Breath weapons, Mind Blasts, Frightful Presence, etc. are feat-type items
  // with no spell level — the `level === 0` cantrip branch below would
  // mis-classify a dragon's breath as a weak cantrip and score it near zero.
  // Classify these by their actual shape instead: a save-or-damage feature
  // that hits an area is AOE damage/control; single-target save/damage is the
  // single-target equivalent; everything else falls through to the normal
  // beneficial/utility logic.
  if (item.type === "feat") {
    if (isHeal && !isDamage) return SPELL_CATEGORIES.HEAL;
    if (isSummon)            return SPELL_CATEGORIES.SUMMON;
    if (isAOE) {
      // Damage-dealing area feature (breath weapon) → AOE_DAMAGE; pure
      // condition/save area (e.g. Frightful Presence) → AOE_CONTROL.
      return isDamage ? SPELL_CATEGORIES.AOE_DAMAGE : SPELL_CATEGORIES.AOE_CONTROL;
    }
    if (isDamage || isSave) {
      return (isSave && !isDamage)
        ? SPELL_CATEGORIES.SINGLE_CONTROL
        : SPELL_CATEGORIES.SINGLE_DAMAGE;
    }
    if (isSelf || hasBeneficialEffect) return SPELL_CATEGORIES.BUFF_SELF;
    return SPELL_CATEGORIES.UTILITY;
  }

  // Cantrips (level 0)
  if (level === 0) {
    return isDamage ? SPELL_CATEGORIES.CANTRIP_DAMAGE : SPELL_CATEGORIES.CANTRIP_UTILITY;
  }

  // Summon
  if (isSummon) return SPELL_CATEGORIES.SUMMON;

  // Healing — check before damage so cure wounds isn't double-counted
  if (isHeal && !isDamage) return SPELL_CATEGORIES.HEAL;

  // Movement spell (Misty Step, Fly, Blink, etc.)
  if (isMovement) return SPELL_CATEGORIES.MOVEMENT;

  // ── AOE spells ────────────────────────────────────────────────────────────
  if (isAOE) {
    if (isDamage) return SPELL_CATEGORIES.AOE_DAMAGE;
    if (hasHostileCondition || isSave) return SPELL_CATEGORIES.AOE_CONTROL;
    return SPELL_CATEGORIES.AOE_DAMAGE; // AOE without condition: treat as damage
  }

  // ── Beneficial spells (self / willing targets) ────────────────────────────
  // Checked BEFORE hostile categories so a spell that has condition keywords in
  // its description (e.g. "the target is invisible") is not mis-labelled as
  // SINGLE_CONTROL just because it mentions a status word.
  // BUFF_SELF is also used for creature-targeted buffs (isCreatureTargetedBuff) because
  // in NPC combat there are no allies — the NPC always casts on itself, and the
  // BUFF_SELF path (targeting npcToken, _isAlreadyActive gate, "self" mode) is correct.
  if ((isSelf || isCreatureTargetedBuff) && !isDamage) return SPELL_CATEGORIES.BUFF_SELF;

  // Ally buff — targets a willing/friendly creature, grants a benefit, no damage
  if ((isWillingTarget || isCreatureTargetedBuff) && hasBeneficialEffect && !isDamage && !isSave) {
    return SPELL_CATEGORIES.BUFF_ALLY;
  }

  // ── Hostile single-target spells ──────────────────────────────────────────
  // Only reaches here for spells aimed at enemies (hostile or unspecified target).
  // SINGLE_CONTROL requires genuine hostile intent — a save alone is not enough
  // because buff spells (Mind Blank, etc.) can have actionType:"save" in dnd5e data.
  const isGenuinelyHostile = (isSave && hasHostileCondition) ||
    (isHostileTarget && (isSave || hasHostileCondition));
  if (isGenuinelyHostile && !isDamage) return SPELL_CATEGORIES.SINGLE_CONTROL;
  if (isDamage) return SPELL_CATEGORIES.SINGLE_DAMAGE;

  return SPELL_CATEGORIES.UTILITY;
}

// ─── dnd5e v2/v3 compatibility helpers ───────────────────────────────────────

/**
 * Return an iterable array of activity objects from an item.
 * dnd5e v3 stores activities in a Foundry Collection (extends Map).
 * Object.values() on a Map returns [] because entries aren't enumerable
 * own-properties — use .contents (Collection) or spread .values() (Map).
 */
function _getActivities(item) {
  const acts = item.system?.activities;
  if (!acts) return [];
  if (Array.isArray(acts)) return acts;                         // plain array (unlikely)
  if (typeof acts.contents !== "undefined") return acts.contents; // Foundry Collection
  try { return [...acts.values()]; } catch (_) { return []; }   // Map fallback
}

/**
 * Get the activation type of an item, checking both the v2 top-level field
 * and the v3 first-activity field.  Defaults to "action" for spells when
 * neither source has data (avoids incorrectly filtering out all spells).
 */
// Exported wrapper — bonus-action economy in automation.js needs the v2/v3-safe
// activation type without re-implementing the activity walk.
export function getActivationType(item) { return _getActivationType(item); }

function _getActivationType(item) {
  const top = item.system?.activation?.type;
  if (top && top !== "none" && top !== "") return top;
  for (const a of _getActivities(item)) {
    const t = a.activation?.type ?? "";
    if (t && t !== "none") return t;
  }
  return item.type === "spell" ? "action" : "";
}

/**
 * Get the target type for AOE detection, checking top-level (v2/compat) then
 * activity-level target.template.type (v3 native).
 */
function _getTargetType(item) {
  const top = item.system?.target?.type ?? "";
  if (top) return top;
  for (const a of _getActivities(item)) {
    const t = a.target?.template?.type ?? a.target?.type ?? "";
    if (t) return t;
  }
  return "";
}

/**
 * Detect a saving throw on the item, including v3 activity-level saves.
 */
function _hasSave(item) {
  const actionType = item.system?.actionType ?? "";
  if (["save", "msak", "rsak", "mwak", "rwak"].includes(actionType)) return true;
  if (item.system?.save?.dc) return true;
  for (const a of _getActivities(item)) {
    if (a.type === "save" || a.save?.ability || a.save?.dc) return true;
  }
  return false;
}

// ─── Classification helpers ───────────────────────────────────────────────────

function _isAOETarget(targetType) {
  return ["cone", "cube", "cylinder", "line", "sphere", "square", "wall"].includes(targetType);
}

// Exported wrapper — bonus-action scoring needs to know if an item deals damage.
export function hasDamageFormula(item) { return _hasDamageFormula(item); }

function _hasDamageFormula(item) {
  // v2: item.system.damage.parts — array of [formula, type] tuples
  const v2parts = item.system?.damage?.parts ?? [];
  if (v2parts.some(p => {
    const type = String(p[1] ?? "").toLowerCase();
    return type && type !== "healing";
  })) return true;

  // v3: activity.damage.parts — array of {formula, types:{fire:true}} objects
  for (const a of _getActivities(item)) {
    const parts = a.damage?.parts ?? [];
    if (parts.some(p => {
      // v3 object format
      if (p && typeof p === "object" && p.types) {
        return Object.keys(p.types).some(t => t !== "healing");
      }
      // v2 tuple format stored inside activities
      const type = String(p?.[1] ?? p?.type ?? "").toLowerCase();
      return type && type !== "healing";
    })) return true;
  }

  return false;
}

function _isHealingSpell(item) {
  if (item.system?.actionType === "heal") return true;

  const v2parts = item.system?.damage?.parts ?? [];
  if (v2parts.some(p => String(p[1] ?? "").toLowerCase() === "healing")) return true;

  for (const a of _getActivities(item)) {
    if (a.type === "heal") return true;
    const parts = a.damage?.parts ?? [];
    if (parts.some(p => {
      if (p?.types) return Object.keys(p.types).includes("healing");
      return String(p?.[1] ?? p?.type ?? "").toLowerCase() === "healing";
    })) return true;
  }

  return false;
}

/**
 * Returns true when the target type indicates a willing or friendly recipient —
 * i.e. the spell is designed to be cast on an ally, not an enemy.
 * "creature" alone is ambiguous (could be enemy or ally), but "willing",
 * "ally", "friendly", and "yourself" are unambiguous beneficial targets.
 */
function _isWillingOrFriendlyTarget(targetType) {
  const t = String(targetType ?? "").toLowerCase();
  return t === "willing" || t === "ally" || t === "friendly" ||
         t === "yourself" || t === "self";
}

/**
 * Returns true only for conditions that are unambiguously hostile — i.e. the
 * spell inflicts a debilitating status on an enemy.  This explicitly excludes
 * conditions that also appear as buff descriptions (e.g. "invisible" granted to
 * an ally).
 *
 * We gate this on `isHostileTarget` in the caller, so by the time this runs we
 * already know the spell is aimed at an enemy, not a willing/self target.
 *
 * AEs are NOT used as a hostile signal here — many buff spells (Mage Armor,
 * Shield of Faith, Bless, Haste) apply AEs to help an ally, and counting those
 * as "hostile conditions" was the root cause of the mis-classification.
 */
function _hasHostileConditionEffect(item) {
  const desc = String(item.system?.description?.value ?? "").toLowerCase();

  // Unambiguously hostile conditions — these only appear in a hostile context
  const HOSTILE_CONDITIONS = [
    "blinded", "charmed", "deafened", "exhaustion", "frightened", "grappled",
    "incapacitated", "paralyzed", "petrified", "poisoned",
    "prone", "restrained", "stunned", "unconscious",
    "can't move", "cannot move", "speed is reduced", "speed becomes 0",
    "must succeed on", "must make a", "takes a penalty",
  ];

  return HOSTILE_CONDITIONS.some(c => desc.includes(c));
}

/**
 * Returns true when the spell clearly grants a beneficial effect to a target —
 * used to distinguish BUFF_ALLY from SINGLE_CONTROL for willing-target spells.
 *
 * Checks for explicit buff language and well-known buff spell names.
 * Does NOT rely on the presence of AEs (too many buff spells have AEs).
 */
function _hasBeneficialEffect(item) {
  const desc = String(item.system?.description?.value ?? "").toLowerCase();
  const name = normalize(item.name ?? "");

  const BENEFICIAL_KEYWORDS = [
    "gain", "gains", "bonus", "advantage on", "resistance to",
    "immune", "can't be", "cannot be", "invisible", "protected",
    "increases", "adds", "improved", "enhanced", "blessed",
  ];
  const KNOWN_BUFF_NAMES = new Set([
    "mage armor", "shield of faith", "bless", "haste", "aid",
    "invisibility", "greater invisibility", "blur", "mirror image",
    "protection from evil", "protection from good", "resistance",
    "heroism", "enhance ability", "longstrider", "pass without trace",
    "sanctuary", "death ward", "stoneskin", "mind blank",
    "foresight", "true seeing", "see invisibility",
  ]);

  return KNOWN_BUFF_NAMES.has(name) ||
         BENEFICIAL_KEYWORDS.some(kw => desc.includes(kw));
}

function _isSummonSpell(item) {
  for (const a of _getActivities(item)) {
    if (a.type === "summon") return true;
  }
  const desc = String(item.system?.description?.value ?? "").toLowerCase();
  return desc.includes("summon") && !desc.includes("unsummon");
}

/**
 * Check whether a self-buff spell is already applied to the actor.
 * Prevents recasting Mirror Image, Mage Armor, Fly, etc. each turn.
 */
function _isAlreadyActive(item, actor) {
  if (!actor) return false;
  const spellName = normalize(item.name ?? "");
  return (actor.effects ?? []).some(e =>
    !e.disabled && normalize(e.name ?? e.label ?? "") === spellName
  );
}

const MOVEMENT_SPELL_NAMES = new Set([
  "misty step", "thunder step", "dimension door", "teleport", "word of recall",
  "plane shift", "blink", "etherealness", "expeditious retreat",
  "freedom of movement", "fly", "gaseous form",
]);

function _isMovementSpell(item) {
  const name = normalize(item.name ?? "");
  if (MOVEMENT_SPELL_NAMES.has(name)) return true;
  // Self-range + no damage + no save → probably movement/utility
  const isSelf = item.system?.range?.units === "self" ||
                 item.system?.target?.type === "self";
  const isDmg  = _hasDamageFormula(item);
  const isSave = Boolean(item.system?.save?.dc);
  const desc   = String(item.system?.description?.value ?? "").toLowerCase();
  // Explicit parens around the disjunction: the previous version relied on
  // && binding tighter than || (correct, but fragile to maintenance edits).
  return isSelf && !isDmg && !isSave && (
    desc.includes("teleport") ||
    (desc.includes("move") && desc.includes("without provok"))
  );
}

// ─── Innate / limited-use availability helper ─────────────────────────────────

/**
 * Return true if the spell can be cast without a spell slot because it uses
 * innate / at-will / limited-use tracking on the item itself.
 *
 * Modern 5e monster stat blocks do NOT give NPCs spell slots.  Instead they
 * annotate spells with "At will", "3/day each", "1/day each", etc., stored in
 * item.system.preparation.mode and item.system.uses.
 *
 * Covered cases:
 *   preparation.mode === "atwill"   → unlimited; always castable
 *   preparation.mode === "innate"   → X/day etc.; check uses.value
 *   preparation.mode === "utility"  → same as innate
 *   any spell with uses.per set     → legacy X/day format (no prep mode needed)
 *
 * @param {Item5e} item
 * @returns {boolean}
 */
function _hasAvailableInnateUses(item) {
  // ── Step 1: resolve the preparation/casting method ──────────────────────
  // dnd5e 5.1+ uses item.system.method.  The old item.system.preparation.mode
  // is deprecated and triggers a Foundry compatibility warning.  Accessing the
  // deprecated path can also have a DataModel side-effect that silently corrupts
  // the proxy for other items in the same filter pass.  Always prefer the new
  // field; only fall back to the old one when method is absent (pre-5.1 data).
  const method = item.system?.method                   // dnd5e 5.1+  (preferred)
    ?? item.system?.preparation?.mode                  // dnd5e < 5.1 (deprecated fallback)
    ?? "";

  const uses = item.system?.uses;

  // ── Step 2: at-will mode — unlimited, never gated ───────────────────────
  if (method === "atwill") return true;

  // Use the multi-variant resolver below for any uses check so dnd5e 5.1+
  // uses.spent and formula maxes are handled correctly.
  const resolved = _resolveUses(item);

  // ── Step 3: innate / utility mode — unlimited or X/day ──────────────────
  if (method === "innate" || method === "utility") {
    if (!resolved.hasFiniteMax) return true;  // no limit configured
    return resolved.remaining > 0;
  }

  // ── Step 4: limited-use detection (any method) ──────────────────────────
  // dnd5e < 5.1: recovery period in uses.per (flat string: "day", "sr", …)
  // dnd5e 5.1+:  recovery period in uses.recovery[] (array of objects)
  const hasRecovery =
    (typeof uses?.per === "string" && uses.per !== "")
    || (Array.isArray(uses?.recovery) && uses.recovery.length > 0);

  if (hasRecovery && resolved.hasFiniteMax) {
    return resolved.remaining > 0;
  }

  return false;
}

// ─── Spell range helper ───────────────────────────────────────────────────────

export function getSpellRange(item) {
  const range = item.system?.range;
  if (!range) return 30;
  if (range.units === "self")  return 0;
  if (range.units === "touch") return 5;
  if (range.units === "special") return 999;
  if (typeof range.value === "number" && range.value > 0) return range.value;
  return 30;
}

// ─── AOE shape and radius ─────────────────────────────────────────────────────

function _getAOEShape(item) {
  const targetType = _getTargetType(item);
  if (!_isAOETarget(targetType)) return null;
  // Radius: check top-level target, then first matching activity template
  let radius = Number(item.system?.target?.value ?? 0);
  if (!radius) {
    for (const a of _getActivities(item)) {
      const r = Number(a.target?.template?.size ?? a.target?.value ?? 0);
      if (r) { radius = r; break; }
    }
  }
  return {
    type:   targetType,
    radius: radius || 20,   // fall back to 20ft if nothing found
    units:  item.system?.target?.units ?? "ft",
  };
}

/**
 * Check whether a test point (pixels) is inside an AOE shape centered at origin (pixels).
 * @param {"sphere"|"cube"|"cone"|"cylinder"|"line"|"square"|"wall"} shapeType
 * @param {{x,y}} origin   pixel coords of AOE center / cone apex
 * @param {{x,y}} test     pixel coord to test
 * @param {number} radiusFt  radius in feet
 * @param {{dx,dy}|null} dir  normalised direction (for cones/lines)
 * @returns {boolean}
 */
function _aoeContains(shapeType, origin, test, radiusFt, dir = null) {
  const gridScale  = canvas?.grid?.distance ?? 5;   // ft per grid unit
  const gridSize   = canvas?.grid?.size ?? 100;     // pixels per grid unit
  const ftPerPixel = gridScale / gridSize;

  const dx = test.x - origin.x;
  const dy = test.y - origin.y;
  const distFt = Math.hypot(dx, dy) * ftPerPixel;

  switch (shapeType) {
    case "sphere":
    case "cylinder":
      return distFt <= radiusFt;

    case "square":
    case "cube": {
      // Chebyshev distance (axis-aligned square)
      const cdx = Math.abs(dx) * ftPerPixel;
      const cdy = Math.abs(dy) * ftPerPixel;
      return Math.max(cdx, cdy) <= radiusFt;
    }

    case "cone": {
      if (distFt > radiusFt) return false;
      if (!dir) return distFt <= radiusFt; // fallback: treat as sphere
      // 53.13° half-angle = cos(53.13/2) ≈ 0.866 ... actually PHB cone is 53.13° wide,
      // so half-angle is 26.57°, cos ≈ 0.894.
      const len = Math.hypot(dx, dy);
      if (len === 0) return true;
      const dot = (dx * dir.dx + dy * dir.dy) / len;
      return dot >= 0.894; // half-angle ≈ 26.57°
    }

    case "line":
    case "wall": {
      if (!dir) return distFt <= radiusFt;
      // Distance from ray: perpendicular component must be ≤ 2.5ft (half-cell)
      const along = dx * dir.dx + dy * dir.dy;
      if (along < 0 || along * ftPerPixel > radiusFt) return false;
      const perpPx = Math.abs(dx * dir.dy - dy * dir.dx);
      return perpPx * ftPerPixel <= 2.5;
    }

    default:
      return distFt <= radiusFt;
  }
}

// ─── AOE origin finder ────────────────────────────────────────────────────────

/**
 * Find the best canvas origin point for placing an AOE spell.
 *
 * @param {Token}   npcToken
 * @param {Item5e}  spellItem
 * @param {Token[]} allCanvasTokens   all tokens currently on canvas
 * @returns {{ origin:{x,y}, hits:Token[], alliesHit:Token[] } | null}
 */
export function findAOEOrigin(npcToken, spellItem, allCanvasTokens) {
  const shape = _getAOEShape(spellItem);
  if (!shape) return null;

  const spellRangeFt   = getSpellRange(spellItem);
  const npcCenter      = { x: npcToken.x + (npcToken.w ?? 0) / 2, y: npcToken.y + (npcToken.h ?? 0) / 2 };
  const gridSize       = canvas?.grid?.size ?? 100;
  const gridScale      = canvas?.grid?.distance ?? 5;
  const friendlyFire   = getSetting(SETTINGS.SPELL_FRIENDLY_FIRE) ?? false;
  const minAOETargets  = _getMinAOETargets(npcToken.actor);

  // Classify tokens
  const npcDisp   = npcToken.document?.disposition ?? 0;
  const hostiles  = allCanvasTokens.filter(t =>
    t !== npcToken &&
    (t.actor?.system?.attributes?.hp?.value ?? 0) > 0 &&
    !t.document?.hidden &&
    t.document?.disposition !== npcDisp
  );
  const allies    = allCanvasTokens.filter(t =>
    t !== npcToken &&
    (t.actor?.system?.attributes?.hp?.value ?? 0) > 0 &&
    t.document?.disposition === npcDisp
  );

  if (hostiles.length === 0) return null;

  // Build candidate origin set
  // For sphere/cube/cylinder: sample grid cells within (npcMovementBudget + spellRangeFt)
  // For cone/line: directions toward enemy clusters
  const candidates = _buildCandidateOrigins(npcToken, npcCenter, spellRangeFt, shape, hostiles, gridSize, gridScale);
  if (candidates.length === 0) return null;

  // Score each candidate
  let best = null;
  let bestScore = -Infinity;

  for (const origin of candidates) {
    // Determine cone direction (toward densest cluster from origin, not from NPC)
    let dir = null;
    if (shape.type === "cone" || shape.type === "line" || shape.type === "wall") {
      const dominated = hostiles.slice().sort((a, b) => {
        const ac = { x: a.x + (a.w ?? 0) / 2, y: a.y + (a.h ?? 0) / 2 };
        const bc = { x: b.x + (b.w ?? 0) / 2, y: b.y + (b.h ?? 0) / 2 };
        return Math.hypot(ac.x - origin.x, ac.y - origin.y) - Math.hypot(bc.x - origin.x, bc.y - origin.y);
      });
      if (dominated.length > 0) {
        const tc = { x: dominated[0].x + (dominated[0].w ?? 0) / 2, y: dominated[0].y + (dominated[0].h ?? 0) / 2 };
        const len = Math.hypot(tc.x - origin.x, tc.y - origin.y);
        if (len > 0) dir = { dx: (tc.x - origin.x) / len, dy: (tc.y - origin.y) / len };
      }
    }

    const enemiesHit = hostiles.filter(t => {
      const tc = { x: t.x + (t.w ?? 0) / 2, y: t.y + (t.h ?? 0) / 2 };
      return _aoeContains(shape.type, origin, tc, shape.radius, dir);
    });
    const alliesHit = allies.filter(t => {
      const tc = { x: t.x + (t.w ?? 0) / 2, y: t.y + (t.h ?? 0) / 2 };
      return _aoeContains(shape.type, origin, tc, shape.radius, dir);
    });

    if (enemiesHit.length === 0) continue;
    if (enemiesHit.length < minAOETargets && !friendlyFire) continue;

    const allyPenalty = friendlyFire ? 0 : alliesHit.length * 25;
    const originScore = (enemiesHit.length * 10) - allyPenalty;

    // Tiebreak: closer to NPC = less movement required
    const moveCost = Math.hypot(origin.x - npcCenter.x, origin.y - npcCenter.y);
    const finalScore = originScore - moveCost * 0.0001; // tiny movement weight

    if (finalScore > bestScore) {
      bestScore = finalScore;
      best = { origin, hits: enemiesHit, alliesHit };
    }
  }

  return bestScore >= 10 ? best : null;
}

/**
 * Generate candidate origin points for AOE placement.
 * Samples grid cells within spell range (+ NPC movement budget) of the NPC.
 */
function _buildCandidateOrigins(npcToken, npcCenter, spellRangeFt, shape, hostiles, gridSize, gridScale) {
  const maxReachFt = spellRangeFt + (npcToken.actor?.system?.attributes?.movement?.walk ?? 30);
  const maxReachPx = (maxReachFt / gridScale) * gridSize;
  const candidates = [];

  // Sample grid cells within range as potential AOE centers
  const cellRadius = Math.ceil(maxReachPx / gridSize);
  const npcGridI   = Math.floor(npcCenter.y / gridSize);
  const npcGridJ   = Math.floor(npcCenter.x / gridSize);

  for (let di = -cellRadius; di <= cellRadius; di++) {
    for (let dj = -cellRadius; dj <= cellRadius; dj++) {
      const cx = (npcGridJ + dj + 0.5) * gridSize;
      const cy = (npcGridI + di + 0.5) * gridSize;
      const distFromNpc = Math.hypot(cx - npcCenter.x, cy - npcCenter.y);
      if (distFromNpc > maxReachPx) continue;
      candidates.push({ x: cx, y: cy });
    }
  }

  // Also try centroids of hostile clusters (highest-density targets)
  for (const t of hostiles) {
    const tc = { x: t.x + (t.w ?? 0) / 2, y: t.y + (t.h ?? 0) / 2 };
    const distFromNpc = Math.hypot(tc.x - npcCenter.x, tc.y - npcCenter.y);
    if (distFromNpc <= maxReachPx) candidates.push(tc);
  }

  return candidates;
}

// ─── Slot selection helpers ───────────────────────────────────────────────────

/**
 * Pick the slot level to use for a spell given slot conservation setting.
 * @param {Actor5e} actor
 * @param {Item5e}  item
 * @param {string}  conservation  "none"|"moderate"|"strong"
 * @param {string}  category      SPELL_CATEGORIES value
 * @returns {number} slot level (0 = cantrip/innate)
 */
function _pickSlotLevel(actor, item, conservation, category) {
  const minLevel = Number(item.system?.level ?? 0);
  if (minLevel === 0) return 0; // cantrip

  // Warlock pact magic: always use pact slot
  const pact = actor.system?.spells?.pact;
  if (pact && Number(pact.value ?? 0) > 0 && item.type === "spell") {
    const pactLevel = Number(pact.level ?? 1);
    if (pactLevel >= minLevel) return pactLevel;
  }

  const lowestSlot  = getLowestAvailableSlotLevel(actor, minLevel);
  if (lowestSlot === 0) return 0; // no slot

  const highestSlot = getHighestAvailableSlotLevel(actor);

  switch (conservation) {
    case "strong":
      // Don't spend more than 1 level above minimum unless critical situation
      return Math.min(lowestSlot + 1, highestSlot);

    case "moderate":
      // Don't spend more than 2 levels above minimum unless AOE_DAMAGE
      if (category === SPELL_CATEGORIES.AOE_DAMAGE) return highestSlot;
      return Math.min(lowestSlot + 2, highestSlot);

    case "none":
    default:
      return highestSlot; // spend highest available
  }
}

// ─── Situation context builder ────────────────────────────────────────────────

/**
 * Build the situationCtx object used by selectBestSpell.
 * Can be called from behavior.js / automation.js.
 *
 * @param {Actor5e}   actor
 * @param {Token}     npcToken
 * @param {Token}     targetToken
 * @param {object}    behaviorCtx   from buildBehaviorContext — may be null
 * @returns {object}  situationCtx
 */
export function buildSituationContext(actor, npcToken, targetToken, behaviorCtx) {
  const hp           = actor.system?.attributes?.hp;
  const hpVal        = Number(hp?.value ?? 0);
  const hpMax        = Number(hp?.max ?? 1);
  const hpRatio      = hpMax > 0 ? hpVal / hpMax : 1;
  const distFt       = targetToken ? distanceBetweenTokens(npcToken, targetToken) : 999;
  const intScore     = Number(actor.system?.abilities?.int?.value ?? 10);

  return {
    distanceFt:            distFt,
    inMeleeRange:          distFt <= 10,
    targetHpRatio:         targetToken ? _getHpRatio(targetToken) : 1,
    enemyCount:            behaviorCtx?.enemyCount ?? 1,
    nearbyEnemyCount:      behaviorCtx?.nearbyEnemyCount ?? 1,
    allyCount:             behaviorCtx?.allyCount ?? 0,
    targetIsConcentrating: targetToken ? isConcentrating(targetToken.actor) : false,
    selfIsBloodied:        hpRatio <= 0.5,
    selfIsCritical:        hpRatio <= 0.25,
    intScore,
    allCanvasTokens:       canvas?.tokens?.placeables ?? [],
    // Archetype
    archetypeProfile:      behaviorCtx?.archetypeProfile ?? null,
    // Per-actor spell overrides (GM-set via the NPC sheet). When present and
    // enabled, conservation/min-AOE values here win over the world settings.
    spellOverrides:        _getSpellOverrides(actor),
  };
}

/**
 * Read the per-actor spellOverrides flag. Returns null unless the flag exists
 * AND its enabled gate is on — so a half-filled, disabled override section
 * never silently changes behavior.
 * Shape: { enabled, conservation: "none"|"conservative"|"aggressive"|...,
 *          minAOETargets: number }
 */
function _getSpellOverrides(actor) {
  try {
    const o = actor?.getFlag?.(MODULE_ID, "spellOverrides");
    if (!o || o.enabled !== true) return null;
    return o;
  } catch { return null; }
}

/** Resolve the effective min-AOE-targets for this NPC: flag → world setting. */
function _getMinAOETargets(actor) {
  const o = _getSpellOverrides(actor);
  const local = Number(o?.minAOETargets);
  if (Number.isFinite(local) && local >= 1) return local;
  return getSetting(SETTINGS.SPELL_MIN_AOE_TARGETS) ?? 2;
}

function _getHpRatio(token) {
  const hp  = token?.actor?.system?.attributes?.hp;
  const val = Number(hp?.value ?? 0);
  const max = Number(hp?.max ?? 1);
  return max > 0 ? val / max : 1;
}

// ─── Usable items collector ───────────────────────────────────────────────────

function _getUsableItems(actor, castingTypeFilter = null) {
  const debugFilter = getSetting(SETTINGS.SPELL_DEBUG_SCORING) ?? false;
  const _reject = (item, reason) => {
    if (debugFilter) log(`[FILTER] ${item.name} (${item.type}): REJECTED — ${reason}`);
    return false;
  };
  const _accept = (item, reason) => {
    if (debugFilter) log(`[FILTER] ${item.name} (${item.type}): accepted — ${reason}`);
    return true;
  };

  return actor.items.filter(item => {
    if (!["spell", "feat"].includes(item.type)) return false;

    // Resolve activation type through v2/v3 compatibility layer.
    const actType = _getActivationType(item);

    // Items with no resolvable activation are non-castable (passive abilities, etc.)
    if (!actType || actType === "none") return _reject(item, `actType="${actType}"`);

    // Hard-reject reactions — separate system
    if (actType === "reaction") return _reject(item, "reaction");

    // Hard-reject rituals (long cast time)
    if (item.system?.components?.ritual === true) return _reject(item, "ritual");

    // Filter to the requested casting type (action / bonus)
    if (castingTypeFilter && actType !== castingTypeFilter)
      return _reject(item, `actType="${actType}" != filter="${castingTypeFilter}"`);

    // Spells: verify slot availability OR innate/limited-use availability.
    //
    // Modern 5e monster stat blocks deliberately omit spell slots.  All of the
    // monster's spells are intended to be cast, constrained only by "At will" /
    // "X/day each" annotations stored on each spell item's uses data.
    //
    // Three-tier check:
    //   Tier 1 — traditional spell slot (spell1…spell9): pass if any slot
    //             at or above this spell's level still has value > 0.
    //   Tier 2 — pact magic slot: pass if pact level is high enough.
    //   Tier 3 — innate/at-will/limited-use item: pass if the item itself
    //             signals it is self-contained (at-will, innate mode, or
    //             has a uses.recovery / uses.per cadence with value > 0).
    //   Tier 4 — "slotless actor" bypass: if the actor has NO slots at ANY
    //             level and NO pact slots, they are a pure innate caster.
    //             Treat ALL their leveled spells as available, deferring to
    //             item-level uses tracking (Tier 5) to enforce daily limits.
    if (item.type === "spell") {
      const level = Number(item.system?.level ?? 0);
      if (level > 0) {
        const pact     = actor.system?.spells?.pact;
        const hasPact  = pact && Number(pact.value ?? 0) > 0 &&
                         Number(pact.level ?? 0) >= level;
        const hasSlot  = getLowestAvailableSlotLevel(actor, level) > 0;
        const isInnate = _hasAvailableInnateUses(item);

        // Tier 4: actor has no spell infrastructure at all → innate caster
        const actorIsSlotless = actorHasNoSlotInfrastructure(actor) &&
          !(Number(actor.system?.spells?.pact?.max ?? 0) > 0);

        if (!hasPact && !hasSlot && !isInnate && !actorIsSlotless)
          return _reject(item, `lv${level}: no slot, no pact, not innate, actor not slotless`);

        // Tier 4b: slotless-actor spell with no uses infrastructure — reject once
        // already cast this combat (Foundry won't auto-decrement anything for these).
        if (actorIsSlotless && !isInnate && Number(item.system?.uses?.max ?? 0) === 0) {
          if (_isSlotlessSpent(actor.id, item.name))
            return _reject(item, `slotless-spent: already cast this combat`);
        }
        if (debugFilter) {
          const why = hasSlot ? `slot${level}` : hasPact ? "pact" : isInnate ? "innate" : "slotless-actor";
          log(`[FILTER] ${item.name}: level=${level} accepted via ${why}`);
        }
      }
    }

    // Tier 5 — depleted uses gate (multi-version safe).
    // Uses the central resolver so dnd5e ≤5.0 (uses.value), dnd5e 5.1+
    // (uses.spent), and formula-string maxes are all handled correctly.
    const usesInfo = _resolveUses(item);
    if (usesInfo.hasFiniteMax && usesInfo.remaining <= 0) {
      return _reject(item, `uses depleted (${usesInfo.max - usesInfo.remaining}/${usesInfo.max} spent)`);
    }

    // Tier 6 — independent cast-counter backstop.
    // The user-reported "longstanding bug": dnd5e or midi-qol sometimes fails
    // to decrement uses.value / uses.spent after a cast, leaving Tier 5
    // permanently happy and the spell castable forever.
    //
    // We sidestep system state entirely by counting casts ourselves. If we
    // know the item has a finite max AND we've already recorded that many
    // casts this combat, reject regardless of what the system says.
    //
    // This does not fire for items with no declared max (cantrips, at-will
    // features) — those genuinely are unlimited.
    if (usesInfo.hasFiniteMax) {
      const myCount = _getCastCount(actor.id, item);
      if (myCount >= usesInfo.max) {
        return _reject(item, `cast counter backstop: AI-recorded ${myCount}/${usesInfo.max} casts this combat`);
      }
    }

    // Tier 7 — beneficial-spell sanity gate.
    // Now disposition-aware: we have selectAllyTarget which uses the same
    // ally rules as the existing hostile-target logic (matching dispositions,
    // excluding SECRET). A beneficial spell is sensible if there's at least
    // one valid friendly target in range that actually benefits.
    //
    // Spells only (not feats). Range is checked at selectAllyTarget time so
    // we don't bother computing it here — the search is bounded by the
    // overall canvas token count anyway.
    if (item.type === "spell") {
      const category = classifySpell(item);

      // HEAL: at least one ally (incl. self) must be below the heal threshold.
      // Healing the enemy never happens (targeting routes to allies); healing
      // at full HP is a wasted slot.
      if (category === SPELL_CATEGORIES.HEAL) {
        const token = actor.getActiveTokens?.()[0] ?? null;
        const hurtAlly = token ? selectAllyTarget(token, { purpose: "heal" }) : null;
        if (!hurtAlly) {
          return _reject(item, "HEAL: no ally needs healing (incl. self)");
        }
      }

      // BUFF_ALLY: at least one friendly target must exist (self counts).
      // With disposition-based targeting, this is almost always true for an
      // NPC with allies in the encounter; only rejects when the NPC is
      // genuinely solo and the buff doesn't apply to self.
      if (category === SPELL_CATEGORIES.BUFF_ALLY) {
        const token = actor.getActiveTokens?.()[0] ?? null;
        const buffTarget = token ? selectAllyTarget(token, { purpose: "buff" }) : null;
        if (!buffTarget) {
          return _reject(item, "BUFF_ALLY: no friendly target available");
        }
      }
    }

    return _accept(item, `actType=${actType}`);
  });
}

// ─── Score a single spell ─────────────────────────────────────────────────────

/**
 * Score a spell/feature item 0–100+ in the current situation.
 * Returns -Infinity for hard rejects, negative for "worse than attacking".
 *
 * @param {Item5e}  item
 * @param {Actor5e} actor
 * @param {Token}   npcToken
 * @param {Token}   targetToken
 * @param {object}  ctx            situationCtx from buildSituationContext
 * @param {object}  overrides      GM spellPriority overrides
 * @param {object}  options
 * @param {string}  options.castingType   "action"|"bonus"|"reaction"
 * @param {object}  options.aoeResult     findAOEOrigin result (pre-computed) or null
 * @returns {number}
 */
export function scoreSpell(item, actor, npcToken, targetToken, ctx, overrides, options = {}) {
  const castingType = options.castingType ?? "action";

  // ── Step 4: GM priority override ──────────────────────────────────────────
  const gmScore = overrides?.[item.name] ?? overrides?.[normalize(item.name ?? "")];
  if (typeof gmScore === "number") return gmScore;

  const category   = classifySpell(item);
  const activation = item.system?.activation?.type ?? "action";
  const level      = Number(item.system?.level ?? 0);
  const reqConc    = _requiresConcentration(item);
  const range      = getSpellRange(item);
  const intScore   = ctx.intScore ?? 10;

  // ── Step 1: Castability gate ──────────────────────────────────────────────

  // Wrong casting type
  if (activation !== castingType &&
      !(activation === "action" && castingType === "action") &&
      !(activation === "bonus" && castingType === "bonus")) {
    if (castingType !== activation) return -Infinity;
  }

  // Slot / uses safety gate (mirrors the four-tier check in _getUsableItems).
  if (item.type === "spell" && level > 0) {
    const pact         = actor.system?.spells?.pact;
    const hasPact      = pact && Number(pact.value ?? 0) > 0 && Number(pact.level ?? 0) >= level;
    const hasSlot      = getLowestAvailableSlotLevel(actor, level) > 0;
    const isInnate     = _hasAvailableInnateUses(item);
    const actorSlotless = actorHasNoSlotInfrastructure(actor) &&
      !(Number(actor.system?.spells?.pact?.max ?? 0) > 0);
    if (!hasPact && !hasSlot && !isInnate && !actorSlotless) return -Infinity;
  }

  // Out of range — hard reject only if target exists and we're not AOE
  if (targetToken && range < ctx.distanceFt && category !== SPELL_CATEGORIES.BUFF_SELF) {
    // Check if we can move in range (rough check: movement budget)
    const moveBudget = actor.system?.attributes?.movement?.walk ?? 30;
    if (range + moveBudget < ctx.distanceFt) return -Infinity;
  }

  // Concentration: gated with nuance (see Step 1 of plan)
  // AOE_CONTROL or SINGLE_CONTROL: may be worth breaking concentration
  // Handled in the caller after we compute the score

  // ── Step 2: Base score by category ───────────────────────────────────────

  let score = CATEGORY_BASE[category] ?? -60;

  // Hard-reject: self-buff already active (Mage Armor, Fly, Mirror Image, etc.)
  if (category === SPELL_CATEGORIES.BUFF_SELF && _isAlreadyActive(item, actor)) {
    return -Infinity;
  }

  // Archetype preferred-category bonus (+10)
  const ap = ctx.archetypeProfile;
  if (ap?.preferredSpellCategory?.includes(category)) score += 10;

  // ── Step 3: Situational modifiers ────────────────────────────────────────

  // ── AOE modifiers ────────────────────────────────────────────────────────
  if (category === SPELL_CATEGORIES.AOE_CONTROL || category === SPELL_CATEGORIES.AOE_DAMAGE) {
    const aoe = options.aoeResult;
    if (aoe) {
      // Confirmed hit count from findAOEOrigin
      const n      = aoe.hits.length;
      const allies = aoe.alliesHit.length;
      const ffOn   = getSetting(SETTINGS.SPELL_FRIENDLY_FIRE) ?? false;

      if      (n >= 4) score += 35;
      else if (n === 3) score += 20;
      else if (n === 2) score += 8;
      else if (n === 1) score -= 30;
      else              return -Infinity; // no enemies hit

      if (!ffOn) score -= allies * 25;
    } else {
      // No AOE geometry result: use total enemy count heuristic.
      // Use enemyCount (total visible enemies) not nearbyEnemyCount (which can
      // be 0 when all enemies are at ranged distance — exactly the case where
      // Fireball is most appropriate).
      const ec = ctx.enemyCount ?? 1;
      if      (ec >= 4) score += 20;
      else if (ec >= 3) score += 10;
      else if (ec >= 2) score += 5;
      else              score -= 20; // single enemy: AOE wasteful
    }
  }

  // ── Target HP modifiers ───────────────────────────────────────────────────
  const thr = ctx.targetHpRatio ?? 1;
  if (category === SPELL_CATEGORIES.SINGLE_DAMAGE || category === SPELL_CATEGORIES.AOE_DAMAGE ||
      category === SPELL_CATEGORIES.CANTRIP_DAMAGE) {
    if (thr < 0.25)      score += 20; // secure the kill
    else if (thr < 0.5)  score += 10;
  }
  if (category === SPELL_CATEGORIES.SINGLE_CONTROL || category === SPELL_CATEGORIES.AOE_CONTROL) {
    if (thr > 0.75) score += 10; // control lasts longer on fresh targets
  }

  // ── Self HP modifiers ─────────────────────────────────────────────────────
  if (category === SPELL_CATEGORIES.HEAL) {
    if      (ctx.selfIsCritical) score += 40;
    else if (ctx.selfIsBloodied) score += 20;
    else                         score -= 20; // wasteful when healthy
  }
  if (ctx.selfIsCritical && category === SPELL_CATEGORIES.BUFF_SELF) score += 10;

  // ── Range / positioning ───────────────────────────────────────────────────
  if (ctx.inMeleeRange) {
    if (range > 5 && range <= 30) score -= 20; // provokes OA
    if (range <= 5)               score += 10; // touch spells ideal in melee
    if (category === SPELL_CATEGORIES.MOVEMENT) score += 15; // escape when surrounded
  } else if (ctx.distanceFt > 60) {
    if (range >= 60)  score += 10;
    if (range < 30)   score -= 25;
  }

  // ── Intelligence modifiers ────────────────────────────────────────────────
  if (intScore <= INT_THRESHOLD.ANIMAL) {
    // Pure chaos — large random noise
    score += (Math.random() - 0.5) * 100;
  } else if (intScore <= INT_THRESHOLD.LOW) {
    score += (Math.random() - 0.5) * 40;
  } else if (intScore <= INT_THRESHOLD.AVERAGE) {
    score += (Math.random() - 0.5) * 20;
  } else if (intScore <= INT_THRESHOLD.SMART) {
    score += (Math.random() - 0.5) * 10;
  }
  // GENIUS: no noise

  // ── Upcasting bonus (INT >= SMART only) ──────────────────────────────────
  if (intScore >= INT_THRESHOLD.SMART && item.type === "spell" && level > 0) {
    const lowestSlot  = getLowestAvailableSlotLevel(actor, level);
    const highestSlot = getHighestAvailableSlotLevel(actor);
    if (highestSlot > level && _benefitsFromUpcasting(item)) {
      score += Math.min(12, (highestSlot - level) * 3);
    }
  }

  // ── Target is concentrating → bonus for control/damage spells that could break it ──
  if (ctx.targetIsConcentrating && intScore >= INT_THRESHOLD.SMART) {
    if (category === SPELL_CATEGORIES.SINGLE_CONTROL ||
        category === SPELL_CATEGORIES.SINGLE_DAMAGE) score += 8;
  }

  // ── Variety: penalise spells used in recent rounds ────────────────────────
  // This prevents NPCs from casting the same spell every turn.  The penalty is
  // proportional to the spell category so powerful AOE spells are discouraged
  // more aggressively than cantrips (which may be the only available option).
  score += _varietyPenalty(actor.id, item.name, category);

  return score;
}

// ─── Concentration helpers ────────────────────────────────────────────────────

function _requiresConcentration(item) {
  return item.system?.components?.concentration === true ||
    item.system?.concentration === true ||
    (item.flags?.["midi-qol"]?.concentration ?? false);
}

function _benefitsFromUpcasting(item) {
  // Strip HTML first — "for each slot level <em>above</em>" must still match.
  const desc = String(item.system?.description?.value ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();
  return desc.includes("per slot level") ||
    desc.includes("for each slot level above") ||
    desc.includes("for each additional spell level") ||
    desc.includes("at higher levels") ||
    desc.includes("using a higher-level spell slot") ||
    (item.system?.scaling?.mode != null && item.system.scaling.mode !== "none");
}

/**
 * Rounds remaining on the actor's held concentration effect, or null when it
 * cannot be determined. Reads the concentration ActiveEffect's duration
 * (rounds/seconds against combat elapsed time) v2/v3-safely.
 */
function _concentrationRoundsRemaining(actor) {
  try {
    const effects = actor?.effects ?? [];
    for (const effect of effects) {
      if (effect.disabled) continue;
      const isConc =
        effect.statuses?.has?.("concentrating") ||
        /^concentrating/i.test(effect.name ?? effect.label ?? "") ||
        effect.flags?.dnd5e?.type === "concentration";
      if (!isConc) continue;

      const dur = effect.duration ?? {};
      // Preferred: Foundry's computed remaining (in rounds) when in combat
      if (Number.isFinite(dur.remaining)) return Math.max(0, Math.ceil(dur.remaining));
      if (Number.isFinite(dur.rounds) && Number.isFinite(dur.startRound)) {
        const round = game.combat?.round ?? dur.startRound;
        return Math.max(0, dur.rounds - (round - dur.startRound));
      }
      if (Number.isFinite(dur.seconds) && Number.isFinite(dur.startTime)) {
        const elapsed = (game.time?.worldTime ?? dur.startTime) - dur.startTime;
        return Math.max(0, Math.ceil((dur.seconds - elapsed) / 6));
      }
      return null; // concentration found but duration unreadable
    }
  } catch { /* fall through */ }
  return null;
}

// ─── Main selection function ──────────────────────────────────────────────────

/**
 * Select the best spell/feature for the NPC to use this turn.
 *
 * @param {Actor5e}   actor
 * @param {Token}     npcToken
 * @param {Token}     targetToken
 * @param {object}    situationCtx     from buildSituationContext
 * @param {object}    [options]
 * @param {string}    [options.castingType]  "action"|"bonus" (default "action")
 * @param {object}    [options.behaviorCtx]  full behavior context (for logging)
 * @returns {SpellDecision | null}
 */
export function selectBestSpell(actor, npcToken, targetToken, situationCtx, options = {}) {
  if (!getSetting(SETTINGS.SPELL_ENABLED)) return null;

  const castingType = options.castingType ?? "action";
  let allItems      = _getUsableItems(actor, castingType);
  if (allItems.length === 0) return null;

  // 2014 one-leveled-spell-per-turn: when a slot was already spent this turn,
  // restrict to cantrips (and at-will/innate features that don't consume a
  // slot). Feats/features are kept (they aren't spell-slot spells); only
  // level ≥ 1 spell items are dropped.
  if (options.cantripOnly) {
    allItems = allItems.filter(it =>
      it.type !== "spell" || Number(it.system?.level ?? 0) === 0 || _hasAvailableInnateUses(it));
    if (allItems.length === 0) return null;
  }

  const priorityOverrides = actor.getFlag?.(MODULE_ID, "spellPriority") ?? {};
  const archetypeProfile  = situationCtx.archetypeProfile ?? null;
  // Conservation resolution order: per-actor flag → archetype → world setting.
  const conservation =
    situationCtx.spellOverrides?.conservation ??
    archetypeProfile?.cognitiveOverrides?.slotConservation ??
    (getSetting(SETTINGS.SPELL_SLOT_CONSERVATION) === "archetype"
      ? (archetypeProfile?.cognitiveOverrides?.slotConservation ?? "none")
      : (getSetting(SETTINGS.SPELL_SLOT_CONSERVATION) ?? "none"));

  const allCanvasTokens = situationCtx.allCanvasTokens ?? canvas?.tokens?.placeables ?? [];

  // Pre-compute AOE origins for AOE items
  const aoeCache = new Map();
  for (const item of allItems) {
    const cat = classifySpell(item);
    if (cat === SPELL_CATEGORIES.AOE_CONTROL || cat === SPELL_CATEGORIES.AOE_DAMAGE) {
      aoeCache.set(item, findAOEOrigin(npcToken, item, allCanvasTokens));
    }
  }

  // Score all candidates
  const scored = allItems.map(item => {
    const aoeResult = aoeCache.get(item) ?? null;
    const raw = scoreSpell(item, actor, npcToken, targetToken, situationCtx,
                           priorityOverrides, { castingType, aoeResult });
    return { item, raw, aoeResult };
  });

  // Concentration comparison
  const heldConcScore = (() => {
    if (!isConcentrating(actor)) return -Infinity;
    const heldItem = actor.concentration?.item;
    if (!heldItem) return 0;
    return scoreSpell(heldItem, actor, npcToken, targetToken, situationCtx,
                      priorityOverrides, { castingType });
  })();

  // Apply concentration penalty/reject.
  // Expiry awareness: a held spell with ≤1 round left is nearly worthless —
  // breaking it costs almost nothing, so the threshold collapses to ~0. A
  // spell with many rounds left keeps the full threshold.
  const concRoundsLeft = isConcentrating(actor)
    ? _concentrationRoundsRemaining(actor)
    : null;
  const effectiveBreakThreshold =
    concRoundsLeft !== null && concRoundsLeft <= 1
      ? 1  // expiring this turn — break is near-free
      : CONC_BREAK_THRESHOLD;

  const withConc = scored.map(entry => {
    const { item, raw, aoeResult } = entry;
    const reqConc = _requiresConcentration(item);
    let finalScore = raw;
    let concBreak  = false;

    if (reqConc && isConcentrating(actor)) {
      if (raw >= heldConcScore + effectiveBreakThreshold) {
        concBreak = true; // worth breaking
      } else {
        finalScore = -Infinity; // not worth it
      }
    }

    return { item, score: finalScore, aoeResult, concBreak };
  });

  // Sort descending
  withConc.sort((a, b) => b.score - a.score);

  // ── Always-on transparency log ──────────────────────────────────────────
  // Full table (with intent header + preferred markers) when SPELL_DEBUG_SCORING
  // is on.  Compact version always shown so the GM can follow spell decisions
  // without enabling verbose mode.
  const debugScoring = getSetting(SETTINGS.SPELL_DEBUG_SCORING) ?? false;
  if (debugScoring) {
    _logScoreTable(actor.name, withConc, archetypeProfile);
  } else {
    // Compact always-on log: archetype intent header + top 5 candidates
    const prefCats  = archetypeProfile?.preferredSpellCategory ?? [];
    const intentStr = _archetypeIntentLine(archetypeProfile);
    const visible   = withConc.filter(e => e.score > -Infinity).slice(0, 5);
    if (visible.length > 0) {
      const lines = visible.map(e => {
        const cat       = classifySpell(e.item);
        const preferred = prefCats.includes(cat) ? " ★" : "";
        const reason    = e.score <= 0 ? ` [rejected: score=${e.score.toFixed(0)}]` : "";
        return `  ${e.item.name} (${cat})${preferred} → ${e.score.toFixed(1)}${reason}`;
      });
      const header = `${actor.name}: [SPELL] ${castingType} candidates` +
        (intentStr ? ` | ${intentStr}` : "");
      log(header + ":\n" + lines.join("\n"));
    } else {
      log(`${actor.name}: [SPELL] No usable ${castingType} spells passed scoring.`);
    }
  }

  const best = withConc[0];
  if (!best || best.score < 0) {
    if (best) log(`${actor.name}: Best ${castingType} spell "${best.item.name}" score ${best.score.toFixed(1)} — below threshold.`);
    return null;
  }

  // If two spells are within 5pts at LOW/AVERAGE INT, pick randomly between them
  const intScore = situationCtx.intScore ?? 10;
  let chosen = best;
  if (intScore <= INT_THRESHOLD.AVERAGE) {
    const near = withConc.filter(e => e.score > -Infinity && (best.score - e.score) <= 5);
    if (near.length > 1) chosen = near[Math.floor(Math.random() * near.length)];
  }

  const category  = classifySpell(chosen.item);
  const slotLevel = _pickSlotLevel(actor, chosen.item, conservation, category);
  const aoeResult = chosen.aoeResult;

  // ── Targeting resolution ─────────────────────────────────────────────────
  // Per-category routing. Hostile categories aim at the chosen enemy; AOEs
  // place at the computed origin; beneficial categories route to allies.
  //
  // HEAL and BUFF_ALLY use selectAllyTarget (disposition-aware) so they hit
  // the wounded ally / a friendly token rather than the enemy. If no valid
  // ally is found at this point, fall back to self for buffs (no harm done)
  // or skip the cast for heals (Tier 7 should have caught this, but defend
  // anyway — a slot is too valuable to spend on a no-op).
  //
  // Pure self-affecting categories (BUFF_SELF, MOVEMENT, SUMMON,
  // CANTRIP_UTILITY, UTILITY) stay routed to mode "self".
  let targeting;
  if (aoeResult) {
    targeting = {
      mode:           "aoe",
      primaryTarget:  null,
      aoeOrigin:      aoeResult.origin ?? null,
      affectedTokens: aoeResult.hits   ?? [],
    };
  } else if (category === SPELL_CATEGORIES.HEAL) {
    // Heal range — Cure Wounds is touch (5ft), Mass Cure Wounds is 60ft.
    const range = getSpellRange(chosen.item);
    const ally  = selectAllyTarget(npcToken, { purpose: "heal", maxRangeFt: range });
    if (ally && ally.id === npcToken.id) {
      targeting = { mode: "self",   primaryTarget: null, aoeOrigin: null, affectedTokens: [] };
    } else if (ally) {
      targeting = { mode: "single", primaryTarget: ally, aoeOrigin: null, affectedTokens: [] };
    } else {
      // Defend: HEAL passed Tier 7 but nothing in range needs healing.
      // Don't burn the slot — return null so the caller falls through to
      // a weapon attack or the next-best spell.
      log(`${actor.name}: Heal "${chosen.item.name}" — no ally in range to heal. Skipping.`);
      return null;
    }
  } else if (category === SPELL_CATEGORIES.BUFF_ALLY) {
    const range = getSpellRange(chosen.item);
    const ally  = selectAllyTarget(npcToken, { purpose: "buff", maxRangeFt: range });
    if (ally && ally.id === npcToken.id) {
      targeting = { mode: "self",   primaryTarget: null, aoeOrigin: null, affectedTokens: [] };
    } else if (ally) {
      targeting = { mode: "single", primaryTarget: ally, aoeOrigin: null, affectedTokens: [] };
    } else {
      // Tier 7 should have rejected; this is the defensive backstop.
      log(`${actor.name}: Buff "${chosen.item.name}" — no friendly target. Skipping.`);
      return null;
    }
  } else if (_isBeneficialCategory(category)) {
    // Pure self-affecting categories: BUFF_SELF, MOVEMENT, SUMMON,
    // CANTRIP_UTILITY, UTILITY. Always cast on the caster.
    targeting = {
      mode:           "self",
      primaryTarget:  null,
      aoeOrigin:      null,
      affectedTokens: [],
    };
  } else {
    // Hostile single-target — aim at the enemy chosen upstream.
    targeting = {
      mode:           "single",
      primaryTarget:  targetToken,
      aoeOrigin:      null,
      affectedTokens: [],
    };
  }

  log(`${actor.name}: Selected ${castingType} spell "${chosen.item.name}" (score=${chosen.score.toFixed(1)}, cat=${category})`);

  // NOTE: cast recording moved OUT of selection. selectBestSpell may run twice
  // per turn (pre-movement hint pass + post-movement execution), and the
  // pre-move pass might pick a different spell than is finally cast. Recording
  // here corrupted the per-combat cast counter and prematurely "spent" innate
  // uses, causing the AI to either skip available spells or keep trying spent
  // ones. The executor now calls recordSpellCast() after a SUCCESSFUL cast.

  return {
    item:               chosen.item,
    slotLevel,
    castingType,
    targeting,
    concentrationBreak: chosen.concBreak,
    score:              chosen.score,
    category,
  };
}

/**
 * Record that a spell was actually cast (call AFTER successful execution).
 * Updates the variety tracker, the per-combat cast counter (Tier 6 backstop),
 * and slotless-spent tracking. Idempotency is the caller's responsibility:
 * call exactly once per resolved cast.
 *
 * @param {Actor5e} actor
 * @param {Item5e}  item
 */
export function recordSpellCast(actor, item) {
  if (!actor || !item) return;
  _recordSpellUsed(actor.id, item.name, item, actor);
}

// ─── Movement preference derivation ──────────────────────────────────────────

/**
 * Derive movement hints from a SpellDecision so moveTowardTarget knows
 * how to position the caster before the spell fires.
 *
 * @param {SpellDecision} decision
 * @returns {object} movementHints
 */
export function getSpellMovementPreference(decision) {
  if (!decision) return {};

  const category = classifySpell(decision.item);
  const range    = getSpellRange(decision.item);

  const hints = {};

  if (decision.targeting?.mode === "aoe" && decision.targeting.aoeOrigin) {
    hints.moveTowardPoint = decision.targeting.aoeOrigin;
  } else if (category === SPELL_CATEGORIES.CANTRIP_DAMAGE ||
             category === SPELL_CATEGORIES.SINGLE_DAMAGE  ||
             category === SPELL_CATEGORIES.AOE_DAMAGE) {
    // Ranged blaster — stay at spell range, don't close to melee
    if (range > 30) {
      hints.stayAtRange      = Math.min(range, 60);
      hints.dontCloseToMelee = true;
    }
  } else if (category === SPELL_CATEGORIES.BUFF_SELF) {
    // Self-buff: don't move at all, cast first
    hints.stayInPlace = true;
  } else if (category === SPELL_CATEGORIES.SINGLE_CONTROL ||
             category === SPELL_CATEGORIES.AOE_CONTROL) {
    if (range > 30) {
      hints.stayAtRange      = Math.min(range, 45);
      hints.dontCloseToMelee = true;
    }
  }

  return hints;
}

// ─── Debug logging ────────────────────────────────────────────────────────────

function _logScoreTable(npcName, scored, archetypeProfile) {
  const prefCats = archetypeProfile?.preferredSpellCategory ?? [];
  const intent   = _archetypeIntentLine(archetypeProfile);

  const lines = scored
    .filter(e => e.score !== -Infinity)
    .map(e => {
      const cat       = classifySpell(e.item);
      const preferred = prefCats.includes(cat) ? " ★" : "";
      return `  ${e.item.name.padEnd(28)} : ${e.score.toFixed(1).padStart(6)}  (${cat})${preferred}`;
    });

  const selected = scored.find(e => e.score > 0);
  log(
    `[NCA|VERBOSE] ${npcName} | SPELL_SCORES |` +
    (intent ? ` ${intent}\n` : "\n") +
    lines.join("\n") +
    (selected
      ? `\n  → Selected: ${selected.item.name} (${selected.score.toFixed(1)})`
      : "\n  → No spell selected")
  );
}
