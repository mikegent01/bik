/**
 * capabilities.js
 * Single source of truth for "does this actor/item have capability X?".
 *
 * PURE HEADLESS ENGINE — no Foundry globals (game/canvas/CONST/foundry). Only
 * imports MODULE_ID from constants.js. Node-unit-testable in isolation. Every
 * string-matching site in the module that asks a capability question should ask
 * this resolver instead of hand-rolling `name.includes(...)`.
 *
 * Resolution tiers, in strict priority (highest authority first):
 *   T0  Explicit GM flag override   flags[MODULE_ID].capabilities[key] = true|false
 *   T1  Structured dnd5e data       activity activation type, etc. (see UNVERIFIED)
 *   T2  Exact canonical name        whole-phrase, word-boundary, normalized
 *   T3  Description heuristics       word-boundary regex, carries a confidence tag
 *
 * The resolver never decides policy. It returns { has, tier, confidence, ... }
 * and the CALLER chooses a minimum acceptable tier via meetsTier(). Veto-capable
 * flags (e.g. `fearless`, which hard-blocks retreat) should require T2 or better
 * so a loose description match can never trigger them.
 *
 * @module capabilities
 */

import { MODULE_ID } from "./constants.js";

// ─── Pure local helpers (no imports, so this file stays self-contained) ───────

function _norm(str) {
  return String(str ?? "").toLowerCase().trim();
}

function _stripHtml(str) {
  return String(str ?? "").replace(/<[^>]*>/g, " ").toLowerCase();
}

/** Iterate item activities across dnd5e v3+ Collection / Map / array / object shapes. */
function _getActivities(item) {
  const acts = item?.system?.activities;
  if (!acts) return [];
  if (Array.isArray(acts)) return acts;
  if (Array.isArray(acts.contents)) return acts.contents;
  if (typeof acts.values === "function") {
    try { return [...acts.values()]; } catch (_) { /* fall through */ }
  }
  try { return Object.values(acts).filter(v => v && typeof v === "object"); }
  catch (_) { return []; }
}

const _rxCache = new Map();
/** Whole-phrase, word-boundary matcher for a canonical name fragment. */
function _phraseRx(phrase) {
  const key = _norm(phrase);
  let rx = _rxCache.get(key);
  if (!rx) {
    const esc = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    rx = new RegExp(`\\b${esc}\\b`, "i");
    _rxCache.set(key, rx);
  }
  return rx;
}

// ─── Tier ranking ─────────────────────────────────────────────────────────────

const TIER_RANK = { T0: 4, T1: 3, T2: 2, T3: 1 };
function _rank(tier) { return TIER_RANK[tier] ?? 0; }

function _hit(capability, tier, confidence, matchedOn) {
  return { capability, has: true, tier, confidence, matchedOn };
}
function _miss(capability) {
  return { capability, has: false, tier: null, confidence: null, matchedOn: null };
}

/**
 * Does a resolution result satisfy a minimum tier?
 * @param {object} result  from resolveActorCapability / resolveItemCapability
 * @param {"T0"|"T1"|"T2"|"T3"} minTier
 */
export function meetsTier(result, minTier) {
  return !!result?.has && _rank(result.tier) >= _rank(minTier);
}

// ─── Capability registry ──────────────────────────────────────────────────────
// Declarative. One entry per capability. Tiers are OPTIONAL per entry — a
// capability with no `activity` block simply never resolves at T1, and so on.
//
// UNVERIFIED (dnd5e 5.3 live field paths — verify against real actor data, then
// promote from UNVERIFIED to a source citation like the ones in utils.js):
//   - activity.activation?.type === "bonus" | "reaction" | "action" | "legendary"
//   dnd5e does NOT structurally encode "this activity IS a Dash/Disengage/Hide";
//   those live in feature text. So for the movement capabilities below, T1 only
//   confirms "there is a bonus-action activity here" and still requires a name or
//   description keyword to know WHICH bonus action it is. Reaction/recharge-style
//   capabilities can lean on T1 far more strongly once the paths are confirmed.

export const CAPABILITY_REGISTRY = {
  // Bonus-action Dash. NOTE: "nimble escape" is deliberately ABSENT — Nimble
  // Escape (goblin) grants Disengage/Hide only, never Dash. Including it here was
  // the root cause of the 3x movement over-budget bug (roadmap P0-1).
  bonusDash: {
    flag: "bonusDash",
    activity: { activation: "bonus", nameRx: /\bdash\b/i },   // T1 (UNVERIFIED)
    names: ["cunning action", "step of the wind"],            // T2
    descRules: [{ all: [/\bbonus action\b/i, /\bdash\b/i], confidence: "low" }], // T3
  },

  // Bonus-action Disengage. Nimble Escape belongs HERE.
  bonusDisengage: {
    flag: "bonusDisengage",
    activity: { activation: "bonus", nameRx: /\bdisengage\b/i },
    names: ["cunning action", "step of the wind", "nimble escape"],
    descRules: [{ all: [/\bbonus action\b/i, /\bdisengage\b/i], confidence: "low" }],
  },

  // Bonus-action Hide.
  bonusHide: {
    flag: "bonusHide",
    activity: { activation: "bonus", nameRx: /\bhide\b/i },
    names: ["cunning action", "nimble escape", "skulker"],
    descRules: [{ all: [/\bbonus action\b/i, /\bhide\b/i], confidence: "low" }],
  },

  // Veto-capable. Callers MUST require T2+ (meetsTier(result, "T2")) before letting
  // this suppress retreat, so a stray description keyword can never make a creature
  // suicidally fearless. `legendary resistance` is the canonical strong signal;
  // weak/ambiguous traits (Brave, Relentless Endurance) are intentionally NOT here.
  fearless: {
    flag: "fearless",
    names: ["legendary resistance", "fearless", "unusual nature"], // T2 only
    // no descRules — bio text may hint elsewhere, but must not set the veto flag.
  },
};

// ─── Resolution ───────────────────────────────────────────────────────────────

/**
 * Resolve a capability against a single item/feature/spell.
 * @returns {{capability:string, has:boolean, tier:?string, confidence:?string, matchedOn:?string}}
 */
export function resolveItemCapability(item, key, entry = CAPABILITY_REGISTRY[key]) {
  if (!entry || !item) return _miss(key);

  const name = _norm(item?.name);
  const desc = _stripHtml(item?.system?.description?.value);

  // T1 — structured dnd5e data
  if (entry.activity) {
    for (const act of _getActivities(item)) {
      const activation = _norm(act?.activation?.type); // UNVERIFIED path
      if (activation && activation === entry.activity.activation) {
        const needRx = entry.activity.nameRx;
        if (!needRx || needRx.test(name) || needRx.test(desc)) {
          return _hit(key, "T1", "high", `activity.activation=${activation}`);
        }
      }
    }
  }

  // T2 — exact canonical name (whole-phrase, word-boundary)
  if (entry.names) {
    for (const phrase of entry.names) {
      if (_phraseRx(phrase).test(name)) return _hit(key, "T2", "high", `name~"${phrase}"`);
    }
  }

  // T3 — description heuristics (word-boundary, confidence-tagged)
  if (entry.descRules) {
    for (const rule of entry.descRules) {
      const allOk = (rule.all ?? []).every(rx => rx.test(desc));
      const anyOk = (rule.any ?? []).length ? rule.any.some(rx => rx.test(desc)) : true;
      if (allOk && anyOk) return _hit(key, "T3", rule.confidence ?? "low", "description");
    }
  }

  return _miss(key);
}

/**
 * Resolve a capability against an actor: flag override → actor-level name/type
 * signals → best item match. Returns the highest-authority hit found.
 * @returns {{capability, has, tier, confidence, matchedOn, matchedItem?}}
 */
export function resolveActorCapability(actor, key, registry = CAPABILITY_REGISTRY) {
  const entry = registry[key];
  if (!entry || !actor) return _miss(key);

  // T0 — explicit GM override (true grants, false hard-denies)
  const flagVal = actor?.flags?.[MODULE_ID]?.capabilities?.[entry.flag ?? key];
  if (flagVal === true)  return _hit(key, "T0", "high", "flag:override");
  if (flagVal === false) return { ..._miss(key), tier: "T0", matchedOn: "flag:deny", override: true };

  // T2 — actor-level canonical name signal (e.g. the actor named after a trait).
  // Item scan below is the usual source; this catches trait-on-actor edge shapes.
  let best = _miss(key);
  const actorNameNorm = _norm(actor?.name);
  if (entry.names) {
    for (const phrase of entry.names) {
      // Only match against the actor name if the phrase is multi-word (avoids a
      // creature literally named "Brave" etc. tripping single-word flags).
      if (phrase.includes(" ") && _phraseRx(phrase).test(actorNameNorm)) {
        best = _hit(key, "T2", "high", `actorName~"${phrase}"`);
        break;
      }
    }
  }

  // Item scan — keep the highest-ranked hit.
  let items = [];
  try { items = [...(actor?.items ?? [])]; } catch (_) { items = []; }
  for (const item of items) {
    const r = resolveItemCapability(item, key, entry);
    if (r.has && _rank(r.tier) > _rank(best.tier)) {
      best = { ...r, matchedItem: item?.name ?? null };
    }
  }
  return best;
}

// ─── Boolean convenience wrappers (drop-in for the old helpers) ───────────────

export function actorCanBonusDash(actor)      { return resolveActorCapability(actor, "bonusDash").has; }
export function actorCanBonusDisengage(actor) { return resolveActorCapability(actor, "bonusDisengage").has; }
export function actorCanBonusHide(actor)      { return resolveActorCapability(actor, "bonusHide").has; }

/** Full result — for the retreat veto, which must gate on meetsTier(result, "T2"). */
export function actorFearlessResult(actor)    { return resolveActorCapability(actor, "fearless"); }
