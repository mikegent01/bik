/**
 * ai-inference.js
 * Automatic AI profile inference for NPC actors.
 *
 * Analyses an actor's stats, creature type, features, weapons, and name to
 * produce a list of archetype keys and a human-readable reasoning trace.
 *
 * Pipeline (in priority order — earlier sources win):
 *   1. GM override flag   — manual profile, returned immediately
 *   2. Creature type      — dragon, undead, construct, ooze, etc.
 *   3. Feature scanning   — Pack Tactics, Sneak Attack, Undead Fortitude, etc.
 *   4. Weapon/spell role  — melee heavy → frontliner, ranged/spells → artillery
 *   5. Name/biography     — keyword scan against ARCHETYPE_ALIASES
 *   6. Fallback pool      — weighted random by type when confidence is still low
 *
 * The output InferenceResult is cached to actor flags and re-used each turn
 * unless the GM manually rebuilds it.
 *
 * @module ai-inference
 */

import { MODULE_ID }                          from "./settings.js";
import { ARCHETYPES, ARCHETYPE_ALIASES, _norm } from "./archetypes.js";
import { log }                                from "./utils.js";
import { classifySpell, SPELL_CATEGORIES }    from "./spell-ai.js";

// ─── Public constants ─────────────────────────────────────────────────────────

export const INFERENCE_VERSION = 3; // bump when pipeline changes to bust cache (3: deep spell-list scan)

// ─── Creature type → base archetype mapping ───────────────────────────────────
// Maps actor.system.details.type.value to one or more archetype keys.

const CREATURE_TYPE_MAP = {
  undead:       ["undead-mindless"],   // refined by INT later
  beast:        ["beast-instinctive"],
  construct:    ["disciplined", "fearless"],
  humanoid:     [],                    // too generic — rely on other signals
  dragon:       ["fearless", "tactician"],
  ooze:         ["mob-walker"],
  fiend:        ["berserker", "fearless"],
  celestial:    ["disciplined", "guardian"],
  monstrosity:  ["predator"],
  giant:        ["brute", "fearless"],
  fey:          ["skirmisher", "tactician"],
  elemental:    ["fearless"],
  plant:        ["territorial", "fearless"],
  aberration:   ["predator", "tactician"],
  swarm:        ["hive-minded"],
};

// Higher-INT undead get a smarter profile
const UNDEAD_INT_THRESHOLD = 8; // INT >= 8 → disciplined instead of mindless

// ─── Feature name → archetype ─────────────────────────────────────────────────
// Matched case-insensitively against item names. First match wins per group.

const FEATURE_ARCHETYPE_MAP = [
  // Pack / cooperative
  { pattern: /pack tactics/i,          archetypes: ["pack-hunter"],         reason: "Pack Tactics detected" },
  { pattern: /mob rule/i,              archetypes: ["pack-hunter"],         reason: "Mob Rule detected" },
  { pattern: /coordinated strike/i,    archetypes: ["pack-flanker"],        reason: "Coordinated Strike detected" },
  // Undead
  { pattern: /undead fortitude/i,      archetypes: ["fearless", "undead-mindless"], reason: "Undead Fortitude detected" },
  { pattern: /turn resistance/i,       archetypes: ["undead-disciplined"],  reason: "Turn Resistance detected" },
  // Stealth / ambush
  { pattern: /sneak attack/i,          archetypes: ["assassin"],            reason: "Sneak Attack detected" },
  { pattern: /assassinate/i,           archetypes: ["assassin", "ambusher"], reason: "Assassinate detected" },
  { pattern: /shadow stealth/i,        archetypes: ["ambusher"],            reason: "Shadow Stealth detected" },
  { pattern: /ambush/i,                archetypes: ["ambusher"],            reason: "Ambush feature detected" },
  // Tactical
  { pattern: /martial advantage/i,     archetypes: ["tactician"],           reason: "Martial Advantage detected" },
  { pattern: /battle tactics/i,        archetypes: ["tactician"],           reason: "Battle Tactics detected" },
  { pattern: /leadership/i,            archetypes: ["disciplined"],         reason: "Leadership detected" },
  { pattern: /tactical genius/i,       archetypes: ["tactician", "disciplined"], reason: "Tactical Genius detected" },
  // Berserk
  { pattern: /rampage/i,               archetypes: ["berserker"],           reason: "Rampage detected" },
  { pattern: /reckless attack/i,       archetypes: ["berserker"],           reason: "Reckless Attack detected" },
  { pattern: /berserk/i,               archetypes: ["berserker"],           reason: "Berserk feature detected" },
  { pattern: /blood frenzy/i,          archetypes: ["berserker", "predator"], reason: "Blood Frenzy detected" },
  // Predatory
  { pattern: /pounce/i,                archetypes: ["predator"],            reason: "Pounce detected" },
  { pattern: /keen (smell|sight|hearing)/i, archetypes: ["hunter"],         reason: "Keen Senses detected" },
  // NOTE: /relentless/i -> fearless removed. It over-matched "Relentless
  // Endurance" (survive-at-1HP) and bugbear "Relentless", neither of which is a
  // no-retreat doctrine. fearless hard-vetoes retreat, so it must come from a
  // strong signal only (see /legendary resistance/i below and capabilities.js).
  { pattern: /spider climb|web sense/i, archetypes: ["ambusher"],           reason: "Spider abilities detected" },
  // Defensive / protective
  { pattern: /shield bash/i,           archetypes: ["guardian"],            reason: "Shield Bash detected" },
  { pattern: /protector/i,             archetypes: ["guardian"],            reason: "Protector feature detected" },
  // "Brave" (halfling adv-vs-frightened) is much weaker than "never retreats".
  // Anchored to a word boundary AND remapped off the retreat-veto archetype.
  { pattern: /\bbrave\b/i,             archetypes: ["disciplined"],         reason: "Brave detected (frightened resistance)" },
  { pattern: /legendary resistance/i,  archetypes: ["fearless"],            reason: "Legendary Resistance detected" },
  // Spellcaster repositioning
  { pattern: /spellcasting/i,          archetypes: ["skirmisher"],          reason: "Spellcasting detected" },
  { pattern: /innate spellcasting/i,   archetypes: ["skirmisher"],          reason: "Innate Spellcasting detected" },
  // Frightful presence
  { pattern: /frightful presence/i,    archetypes: ["territorial"],         reason: "Frightful Presence detected" },
  // Swarm
  { pattern: /swarm/i,                 archetypes: ["hive-minded"],         reason: "Swarm feature detected" },
];

// ─── Weapon / item analysis ───────────────────────────────────────────────────
// Infer combat role from equipped weapons and spells.

function _inferCombatRole(actor, reasons) {
  const keys = [];

  const items   = actor.items ?? [];
  const weapons = items.filter(i => i.type === "weapon");
  const spells  = items.filter(i => i.type === "spell" && _itemHasAttack(i));

  const hp    = Number(actor.system?.attributes?.hp?.max ?? 0);
  const ac    = Number(actor.system?.attributes?.ac?.value ?? 10);
  const speed = Number(actor.system?.attributes?.movement?.walk ?? 30);
  const cr    = Number(actor.system?.details?.cr ?? 0);

  // Max weapon range across all attack weapons
  let maxRange = 0;
  let hasMelee = false;
  let hasReach = false;
  let hasShield = false;
  let hasFinesse = false;
  let hasPolearm = false;
  let hasLongRange = false;

  for (const w of weapons) {
    const range = _getWeaponRange(w);
    if (range > maxRange) maxRange = range;
    if (range <= 10)  hasMelee = true;
    if (range >= 60)  hasLongRange = true;
    if (range === 10 && w.name?.toLowerCase().includes("reach")) hasReach = true;

    const props = w.system?.properties;
    const propSet = props instanceof Set ? props : new Set(Object.keys(props ?? {}));
    if (propSet.has("fin") || propSet.has("finesse")) hasFinesse = true;
    if (propSet.has("two") || w.name?.toLowerCase().match(/halberd|glaive|pike|spear|polearm/)) hasPolearm = true;

    // Shield detection via item name
    if (w.name?.toLowerCase().includes("shield")) hasShield = true;
  }

  // Also check equipment for shields
  for (const i of items.filter(it => it.type === "equipment")) {
    if (i.name?.toLowerCase().includes("shield") || i.system?.type?.value === "shield") {
      hasShield = true;
    }
  }

  const hasRangedSpells = spells.length > 0;
  const hasAoeSpells = spells.some(s => _isAoeSpell(s));

  // ── Assign roles ────────────────────────────────────────────────────────

  // Artillery: primarily ranged, avoids melee
  if (hasLongRange && !hasMelee) {
    keys.push("sniper");
    reasons.push("Long-range weapon with no melee option → sniper");
  } else if (hasLongRange && hasMelee) {
    keys.push("hunter");
    reasons.push("Mixed melee/ranged weapons → hunter");
  }

  // AOE controller
  if (hasAoeSpells) {
    keys.push("artillery");
    reasons.push("AOE spells detected → artillery tendency");
  }

  // Polearm: reach-aware, chokepoint
  if (hasPolearm && hasReach) {
    keys.push("territorial");
    reasons.push("Reach weapon detected → territorial/chokepoint preference");
  }

  // Finesse/fast: skirmisher tendency
  if (hasFinesse && speed >= 35) {
    keys.push("skirmisher");
    reasons.push(`Finesse weapon + high speed (${speed}ft) → skirmisher`);
  }

  // Tank: high HP + high AC + shield
  if (hasMelee && hasShield && hp > 60 && ac >= 16) {
    keys.push("guardian");
    reasons.push(`High HP (${hp}) + AC (${ac}) + shield → guardian`);
  } else if (hasMelee && hp > 80 && ac >= 14) {
    keys.push("brute");
    reasons.push(`High HP (${hp}) melee combatant → brute/frontliner`);
  }

  // Glass cannon ranged spellcaster
  if (hasRangedSpells && !hasMelee && hp < 40) {
    keys.push("skirmisher");
    reasons.push("Spellcaster with low HP and no melee → skirmisher repositioning");
  }

  return keys;
}

// ─── Name / biography keyword scan ───────────────────────────────────────────

function _inferFromNameAndBio(actor, reasons) {
  const keys = [];

  const searchText = [
    actor.name ?? "",
    actor.system?.details?.biography?.value ?? "",
    actor.system?.details?.notes ?? "",
  ].join(" ").toLowerCase().replace(/<[^>]*>/g, " ");

  // Sort aliases longest-first so multi-word entries ("mind flayer") match before
  // their constituent words ("mind", "flayer")
  const sortedAliases = Object.entries(ARCHETYPE_ALIASES)
    .filter(([, canonical]) => canonical && ARCHETYPES[canonical])
    .sort(([a], [b]) => b.length - a.length);

  for (const [alias, canonical] of sortedAliases) {
    if (!keys.includes(canonical)) {
      // Use word-boundary matching for single-word aliases; substring for multi-word
      const aliaslc = alias.toLowerCase();
      const matched = aliaslc.includes(" ")
        ? searchText.includes(aliaslc)
        : new RegExp(`(?:^|[\\s\\-])${_escapeRegex(aliaslc)}(?:$|[\\s\\-,])`)
            .test(searchText);

      if (matched) {
        keys.push(canonical);
        reasons.push(`Keyword "${alias}" in name/biography → ${canonical}`);
      }
    }
  }

  return keys;
}

function _escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ─── INT/WIS enrichment ───────────────────────────────────────────────────────
// After all archetypes are collected, optionally refine undead intelligence
// and add tactical overlay for high-INT creatures.

function _enrichByAbilityScores(actor, keys, reasons) {
  const int = Number(actor.system?.abilities?.int?.value ?? 10);
  const wis = Number(actor.system?.abilities?.wis?.value ?? 10);

  // High-INT undead are disciplined, not mindless
  if (keys.includes("undead-mindless") && int >= UNDEAD_INT_THRESHOLD) {
    const idx = keys.indexOf("undead-mindless");
    keys.splice(idx, 1, "undead-disciplined");
    reasons.push(`INT ${int} ≥ ${UNDEAD_INT_THRESHOLD} → upgraded undead to undead-disciplined`);
  }

  // Very high INT: always gets tactician overlay if not already there
  if (int >= 16 && !keys.includes("tactician") && !keys.includes("berserker")) {
    keys.push("tactician");
    reasons.push(`INT ${int} ≥ 16 → tactician overlay`);
  }

  // Very low WIS: impulsive — remove cautious/guardian if present
  if (wis <= 5) {
    for (const toRemove of ["cautious", "guardian", "disciplined"]) {
      const idx = keys.indexOf(toRemove);
      if (idx !== -1) {
        keys.splice(idx, 1);
        reasons.push(`WIS ${wis} ≤ 5 → removed ${toRemove} (impulsive creature)`);
      }
    }
  }
}

// ─── Fallback randomization ───────────────────────────────────────────────────
// When confidence is still zero after all inference passes, pick flavour from
// a weighted pool keyed by creature type. Uses a seeded deterministic draw so
// the same actor always gets the same fallback.

const FALLBACK_POOLS = {
  humanoid:    [["skirmisher", 3], ["disciplined", 2], ["coward", 2], ["brute", 1], ["assassin", 1]],
  beast:       [["beast-instinctive", 4], ["predator", 3], ["hunter", 2], ["territorial", 1]],
  undead:      [["undead-mindless", 3], ["undead-disciplined", 1], ["zealot", 1]],
  fiend:       [["berserker", 3], ["sadistic", 2], ["tactician", 1]],
  fey:         [["skirmisher", 2], ["tactician", 2], ["coward", 1]],
  aberration:  [["predator", 3], ["tactician", 2], ["sadistic", 1]],
  default:     [["brute", 2], ["skirmisher", 2], ["disciplined", 1], ["coward", 1]],
};

function _fallbackArchetype(actor, reasons) {
  const typeVal = _getCreatureTypeValue(actor);
  const pool    = FALLBACK_POOLS[typeVal] ?? FALLBACK_POOLS.default;

  // Deterministic seeded pick from actor ID
  const seed  = _hashStr(actor.id ?? actor.name ?? "npc");
  const total = pool.reduce((s, [, w]) => s + w, 0);
  let roll    = seed % total;
  for (const [key, weight] of pool) {
    roll -= weight;
    if (roll < 0) {
      reasons.push(`No inference signals — fallback pool pick for "${typeVal}": ${key}`);
      return key;
    }
  }
  return pool[0][0];
}

function _hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

// ─── Main inference entry point ───────────────────────────────────────────────

/**
 * Infer an AI profile for the given actor.
 *
 * @param {Actor5e} actor
 * @returns {InferenceResult}  { archetypes: string[], reasons: string[], confidence: number, version: number }
 */

// ─── Deep spell-list inference (Pass 3b) ──────────────────────────────────────

/** Category-tally → archetype mapping for the deep spell scan. */
const SPELL_LIST_ARCHETYPE_MAP = [
  { category: "AOE_DAMAGE",  min: 2, archetype: "blaster",    label: "AOE damage spells" },
  { category: "AOE_CONTROL", min: 2, archetype: "controller", label: "AOE control spells" },
  { category: "HEAL",        min: 2, archetype: "warpriest",  label: "healing spells" },
  { category: "SUMMON",      min: 1, archetype: "summoner",   label: "summoning spells" },
  { category: "BUFF_SELF",   min: 2, archetype: "tactician",  label: "self-buff spells" },
];

/**
 * Classify every spell item on the actor via the spell AI's own classifier and
 * map category tallies to caster archetypes. Replaces the old shallow
 * "has spells → blaster/controller" heuristic with the real list.
 *
 * @param {Actor5e}  actor
 * @param {string[]} reasons  — appended with explanation lines
 * @param {Function} addKey   — archetype-key adder from inferAiProfile
 * @returns {number} confidence bonus (+0.10 per mapped archetype)
 */
function _inferFromSpellList(actor, reasons, addKey) {
  let bonus = 0;
  try {
    const tally = {};
    for (const item of (actor.items ?? [])) {
      if (item.type !== "spell") continue;
      let cat;
      try { cat = classifySpell(item); } catch { continue; }
      if (!cat) continue;
      tally[cat] = (tally[cat] ?? 0) + 1;
    }
    if (Object.keys(tally).length === 0) return 0;

    for (const { category, min, archetype, label } of SPELL_LIST_ARCHETYPE_MAP) {
      const key   = SPELL_CATEGORIES[category] ?? category;
      const count = tally[key] ?? tally[category] ?? 0;
      if (count >= min) {
        addKey(archetype);
        reasons.push(`Spell list: ${count}× ${label} → ${archetype}`);
        bonus += 0.10;
      }
    }
  } catch (err) {
    log(`[AI Inference] Spell-list scan failed for "${actor?.name}": ${err.message}`, "warn");
  }
  return bonus;
}

export function inferAiProfile(actor) {
  if (!actor) return _emptyResult();

  const reasons = [];
  const keys    = [];

  const addKey = (k) => { if (k && ARCHETYPES[k] && !keys.includes(k)) keys.push(k); };

  // ── Pass 1: Creature type ────────────────────────────────────────────────
  const typeVal  = _getCreatureTypeValue(actor);
  const typeKeys = CREATURE_TYPE_MAP[typeVal] ?? [];
  for (const k of typeKeys) {
    addKey(k);
    if (k) reasons.push(`Creature type "${typeVal}" → ${k}`);
  }

  // ── Pass 2: Feature/ability scanning ────────────────────────────────────
  const itemNames = (actor.items ?? []).map(i => String(i.name ?? ""));
  for (const { pattern, archetypes: aKeys, reason } of FEATURE_ARCHETYPE_MAP) {
    if (itemNames.some(n => pattern.test(n))) {
      for (const k of aKeys) addKey(k);
      reasons.push(reason);
    }
  }

  // ── Pass 3: Weapon/spell combat role ────────────────────────────────────
  const roleKeys = _inferCombatRole(actor, reasons);
  for (const k of roleKeys) addKey(k);

  // ── Pass 3b: Deep spell-list scan ────────────────────────────────────────
  // Classify every actual spell on the actor (not just "has spells") and map
  // category tallies to caster archetypes. Each mapped archetype also adds a
  // flat confidence bonus — a real spell list is a much stronger signal than
  // a name keyword.
  const spellBonus = _inferFromSpellList(actor, reasons, addKey);

  // ── Pass 4: Name/bio keyword scan ───────────────────────────────────────
  const bioKeys = _inferFromNameAndBio(actor, reasons);
  for (const k of bioKeys) addKey(k);

  // ── Pass 5: INT/WIS enrichment ───────────────────────────────────────────
  _enrichByAbilityScores(actor, keys, reasons);

  // ── Pass 6: Fallback if still empty ─────────────────────────────────────
  if (keys.length === 0) {
    addKey(_fallbackArchetype(actor, reasons));
  }

  const confidence = Math.min(
    1,
    reasons.filter(r => !r.startsWith("No inference")).length / 3 + spellBonus
  );

  log(`AI inference for "${actor.name}": [${keys.join(", ")}] (confidence=${(confidence * 100).toFixed(0)}%)`);

  return {
    archetypes:  keys,
    reasons,
    confidence,
    version:     INFERENCE_VERSION,
    timestamp:   Date.now(),
  };
}

/**
 * Run inference and cache the result to actor flags.
 * Skips if a manually-overridden profile exists and force=false.
 *
 * @param {Actor5e} actor
 * @param {boolean} force  — ignore existing flag, always rebuild
 * @returns {Promise<InferenceResult>}
 */
export async function inferAndCacheAiProfile(actor, force = false) {
  if (!actor) return _emptyResult();

  // Respect manual GM override unless forced
  if (!force) {
    const existing = actor.getFlag?.(MODULE_ID, "aiProfile");
    if (existing?.manuallyOverridden) {
      log(`AI profile for "${actor.name}" is manually overridden — skipping inference.`);
      return existing;
    }
    // Re-use cached if version matches
    if (existing?.version === INFERENCE_VERSION) {
      return existing;
    }
  }

  const profile = inferAiProfile(actor);
  profile.manuallyOverridden = false;

  try {
    await actor.setFlag(MODULE_ID, "aiProfile", profile);
  } catch (err) {
    log(`Failed to cache AI profile for "${actor.name}": ${err.message}`, "warn");
  }

  return profile;
}

/**
 * Read an actor's cached AI profile, or run inference if none exists.
 * Synchronous — returns null if flag read fails.
 *
 * @param {Actor5e} actor
 * @returns {InferenceResult|null}
 */
export function getCachedAiProfile(actor) {
  try {
    return actor?.getFlag?.(MODULE_ID, "aiProfile") ?? null;
  } catch {
    return null;
  }
}

/**
 * Returns just the archetype keys from an actor's cached profile,
 * or runs inference synchronously as a fallback.
 *
 * @param {Actor5e} actor
 * @returns {string[]}
 */
export function getInferredArchetypes(actor) {
  const cached = getCachedAiProfile(actor);
  if (cached?.archetypes?.length) return cached.archetypes;
  return inferAiProfile(actor).archetypes;
}

// ─── Helper functions ─────────────────────────────────────────────────────────

function _getCreatureTypeValue(actor) {
  const t = actor.system?.details?.type;
  if (!t) return "humanoid";
  if (typeof t === "string") return t.toLowerCase();
  return String(t.value ?? "humanoid").toLowerCase();
}

function _getWeaponRange(weapon) {
  const range = weapon.system?.range;
  if (!range) return 5;
  const val = Number(range.value ?? range.normal ?? 0);
  return val > 0 ? val : 5;
}

function _itemHasAttack(item) {
  return item.system?.actionType === "rsak"
    || item.system?.actionType === "msak"
    || item.system?.actionType === "rwak"
    || item.system?.actionType === "mwak"
    || (item.system?.activities ?? []).some(a => a.type === "attack")
    || Boolean(item.system?.attack?.flat);
}

function _isAoeSpell(spell) {
  const target = spell.system?.target;
  if (!target) return false;
  return ["sphere", "cone", "line", "cube", "cylinder", "radius"].includes(target.type);
}

function _emptyResult() {
  return { archetypes: [], reasons: ["No actor data available"], confidence: 0, version: INFERENCE_VERSION };
}
