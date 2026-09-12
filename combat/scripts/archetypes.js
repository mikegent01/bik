/**
 * archetypes.js
 * Archetype registry for the NPC tactical AI layer.
 *
 * Each archetype is a named bundle of modifier deltas that override or augment
 * the base INT/WIS utility scores computed by behavior.js.
 *
 * Archetypes are read from actor flags at turn start and cached for the turn.
 * Multiple archetypes stack additively; conflicting values are averaged.
 *
 * Design principles:
 *  - Archetypes encode *how* a creature fights, not *how smart* it is.
 *  - They override pure INT/WIS conclusions where lore demands it.
 *    (A high-INT berserker still charges recklessly; a low-WIS guard still holds position.)
 *  - All values are deltas applied AFTER base utility scoring.
 *  - Performance: the registry is a plain object; no iteration at runtime beyond
 *    the 1–3 archetypes a creature typically has.
 */

import { MODULE_ID } from "./constants.js";
import { registry } from "./registry.js";

// ─── Archetype definition schema ─────────────────────────────────────────────
//
// Each entry is keyed by archetype name (lowercase, hyphenated).
// Fields (all optional, default 0 unless noted):
//
//   aggressionBonus      number   ± flat bonus to all attack utility scores
//   retreatPenalty       number   subtracted from retreat utility (makes retreat less likely)
//   retreatBonus         number   added to retreat utility (makes retreat more likely)
//   pursuitBonus         number   bonus to pursuit scoring
//   focusFireBonus       number   bonus toward target-lock (same target as last turn)
//   spreadPressure       number   bonus toward target-spread (different targets)
//   meleePreference      number   ± bonus when scoring melee options
//   rangedPreference     number   ± bonus when scoring ranged options
//   repositionBonus      number   bonus to any movement-without-attack scoring
//   allyProximityBonus   number   bonus when allies are nearby (formation bonus)
//   allyProximityPenalty number   penalty when allies nearby (lone-wolf penalty)
//   ignoresMorale        boolean  true → morale collapses are suppressed for this creature
//   fearless             boolean  true → frightened/terror retreat is blocked
//   packThreshold        number   minimum nearby allies before pack bonuses activate (default 1)
//   packFocusBonus       number   extra focus-fire bonus when pack threshold met
//   opportunismBonus     number   bonus toward wounded/low-HP targets
//   spellcasterFocusBonus number  bonus toward identified spellcaster targets
//   disengage            number   bonus to choosing Disengage over stand-and-fight
//   chatHint             string   optional flavour text category for GM chat log
//
// ─────────────────────────────────────────────────────────────────────────────

export const ARCHETYPES = {

  // ── Aggression / melee ──────────────────────────────────────────────────

  berserker: {
    aggressionBonus:    30,
    retreatPenalty:     40,
    pursuitBonus:       20,
    focusFireBonus:     10,
    meleePreference:    20,
    ignoresMorale:      true,
    fearless:           true,
    chatHint:           "berserker",
    cognitiveOverrides: {
      rerouteChance:         0.10,
      congestionTolerance:   0.80,
      oaTolerance:           0.95,
      retreatSensitivity:    0.00,
      stubbornness:          0.90,
    },
  },

  brute: {
    aggressionBonus:    15,
    retreatPenalty:     20,
    meleePreference:    15,
    focusFireBonus:     5,
  },

  zealot: {
    aggressionBonus:    20,
    retreatPenalty:     35,
    ignoresMorale:      true,
    fearless:           true,
    chatHint:           "zealot",
  },

  fearless: {
    fearless:           true,
    retreatPenalty:     15,
  },

  // ── Cautious / defensive ────────────────────────────────────────────────

  coward: {
    retreatBonus:       35,
    retreatPenalty:     -20,
    pursuitBonus:       -20,
    aggressionBonus:    -20,
    chatHint:           "coward",
    cognitiveOverrides: {
      rerouteChance:         0.95,
      retreatSensitivity:    2.00,
      oaTolerance:           0.05,
      stubbornness:          0.00,
    },
  },

  cautious: {
    retreatBonus:       15,
    repositionBonus:    10,
    aggressionBonus:    -10,
  },

  defensive: {
    allyProximityBonus: 15,
    repositionBonus:    10,
    retreatBonus:       10,
    aggressionBonus:    -5,
  },

  // ── Tactical / disciplined ───────────────────────────────────────────────

  disciplined: {
    allyProximityBonus: 20,
    focusFireBonus:     15,
    retreatPenalty:     5,
    repositionBonus:    5,
    cognitiveOverrides: {
      rerouteChance:         0.75,
      congestionTolerance:   0.15,
      reevalInterval:        1,
      stubbornness:          0.10,
      oaTolerance:           0.25,
    },
  },

  tactician: {
    focusFireBonus:      20,
    spellcasterFocusBonus: 15,
    repositionBonus:    15,
    disengage:          10,
  },

  guardian: {
    allyProximityBonus: 25,
    retreatPenalty:     15,
    meleePreference:    10,
    repositionBonus:    5,
    chatHint:           "guardian",
    cognitiveOverrides: {
      rerouteChance:         0.50,
      stubbornness:          0.80,
      retreatSensitivity:    0.30,
      oaTolerance:           0.40,
    },
  },

  bodyguard: {
    allyProximityBonus: 30,
    retreatPenalty:     20,
    fearless:           true,
    chatHint:           "bodyguard",
  },

  // ── Ranged / skirmishing ─────────────────────────────────────────────────

  skirmisher: {
    rangedPreference:   15,
    repositionBonus:    20,
    disengage:          15,
    meleePreference:    -10,
    retreatBonus:       5,
    kiteEnabled:        true,
    kiteRange:          30,   // ft — preferred minimum distance from melee targets
    cognitiveOverrides: {
      rerouteChance:         0.80,
      congestionTolerance:   0.10,
      oaTolerance:           0.15,
      stubbornness:          0.10,
    },
  },

  sniper: {
    rangedPreference:   25,
    repositionBonus:    10,
    meleePreference:    -20,
    aggressionBonus:    -5,
    disengage:          20,
  },

  artillery: {
    rangedPreference:   30,
    allyProximityPenalty: 10,
    meleePreference:    -25,
    disengage:          25,
    repositionBonus:    15,
    chatHint:           "artillery",
  },

  // ── Predatory / hunting ──────────────────────────────────────────────────

  predator: {
    opportunismBonus:   20,
    pursuitBonus:       15,
    focusFireBonus:     10,
    chatHint:           "predator",
  },

  hunter: {
    pursuitBonus:       20,
    opportunismBonus:   15,
    repositionBonus:    5,
  },

  "beast-instinctive": {
    aggressionBonus:    10,
    pursuitBonus:       15,
    focusFireBonus:     20,
    retreatPenalty:     -5,
    ignoresMorale:      false,
    chatHint:           "beast",
    cognitiveOverrides: {
      rerouteChance:         0.20,
      congestionTolerance:   0.70,
      reevalInterval:        4,
      pathSearchMultiplier:  0.35,
      stubbornness:          0.60,
      oaTolerance:           0.80,
    },
  },

  // ── Pack tactics ─────────────────────────────────────────────────────────

  "pack-hunter": {
    packThreshold:      1,
    packFocusBonus:     20,
    allyProximityBonus: 15,
    focusFireBonus:     15,
    opportunismBonus:   10,
    chatHint:           "pack",
    cognitiveOverrides: {
      rerouteChance:         0.60,
      congestionTolerance:   0.30,
      stubbornness:          0.20,
    },
  },

  "hive-minded": {
    packThreshold:      1,
    packFocusBonus:     25,
    allyProximityBonus: 20,
    focusFireBonus:     20,
    ignoresMorale:      true,
  },

  // ── Opportunist / assassin ───────────────────────────────────────────────

  opportunist: {
    opportunismBonus:   25,
    focusFireBonus:     10,
    disengage:          10,
    retreatBonus:       5,
    chatHint:           "opportunist",
  },

  assassin: {
    opportunismBonus:   20,
    repositionBonus:    15,
    disengage:          20,
    rangedPreference:   5,
    chatHint:           "assassin",
    cognitiveOverrides: {
      rerouteChance:         0.90,
      congestionTolerance:   0.05,
      oaTolerance:           0.10,
      stubbornness:          0.00,
    },
  },

  // ── Ambusher ─────────────────────────────────────────────────────────────

  ambusher: {
    repositionBonus:    20,
    disengage:          15,
    aggressionBonus:    10,
    allyProximityPenalty: 5,
    chatHint:           "ambusher",
  },

  // ── Territorial ──────────────────────────────────────────────────────────

  territorial: {
    aggressionBonus:    15,
    pursuitBonus:       -10,        // won't chase far
    retreatPenalty:     10,
    fearless:           false,
  },

  // ── Undead ───────────────────────────────────────────────────────────────

  "undead-mindless": {
    aggressionBonus:    10,
    retreatPenalty:     50,
    pursuitBonus:       10,
    ignoresMorale:      true,
    fearless:           true,
    focusFireBonus:     -10,        // mindless—no focus
    chatHint:           "undead",
    // Movement personality: direct-vector, ignores crowding, never reroutes
    cognitiveOverrides: {
      rerouteChance:         0.00,
      congestionTolerance:   1.00,
      reevalInterval:        99,
      pathSearchMultiplier:  0.05,
      retreatSensitivity:    0.00,
      oaTolerance:           1.00,
      stubbornness:          1.00,
    },
  },

  "undead-disciplined": {
    aggressionBonus:    10,
    retreatPenalty:     30,
    ignoresMorale:      true,
    fearless:           true,
    focusFireBonus:     10,
    chatHint:           "undead",
    cognitiveOverrides: {
      rerouteChance:         0.45,
      congestionTolerance:   0.60,
      retreatSensitivity:    0.00,
      oaTolerance:           0.70,
      stubbornness:          0.50,
    },
  },

  // ── Sadistic ─────────────────────────────────────────────────────────────

  sadistic: {
    opportunismBonus:   20,
    pursuitBonus:       20,
    retreatPenalty:     10,
    focusFireBonus:     15,
    chatHint:           "sadistic",
  },

  // ── Movement Personality Archetypes ──────────────────────────────────────

  "mob-walker": {
    // Large dumb crowd creature: ooze, swarm-fragment, mindless cultist.
    aggressionBonus:    5,
    retreatPenalty:     40,
    ignoresMorale:      true,
    focusFireBonus:     -15,
    chatHint:           "undead",
    cognitiveOverrides: {
      rerouteChance:         0.05,
      congestionTolerance:   0.95,
      reevalInterval:        99,
      pathSearchMultiplier:  0.08,
      stubbornness:          0.85,
      oaTolerance:           0.90,
    },
  },

  panicked: {
    // Creature in full rout. Chaotic, desperate movement.
    retreatBonus:       60,
    retreatPenalty:     -40,
    aggressionBonus:    -50,
    chatHint:           "retreat",
    cognitiveOverrides: {
      rerouteChance:         0.30,
      retreatSensitivity:    3.00,
      oaTolerance:           0.70,
      stubbornness:          0.00,
    },
  },

  "pack-flanker": {
    // Variant pack hunter: actively seeks to approach from opposite side of allies.
    packThreshold:      1,
    packFocusBonus:     15,
    allyProximityBonus: 10,
    repositionBonus:    20,
    cognitiveOverrides: {
      rerouteChance:         0.80,
      congestionTolerance:   0.10,
      stubbornness:          0.10,
    },
  },

  // ── Combat Role Archetypes (inferred from weapon/spell analysis) ──────────

  brute: {
    // Hard-hitting melee fighter, low tactics, charges in.
    aggressionBonus:    15,
    retreatPenalty:     25,
    focusFireBonus:     -5,
    chatHint:           "berserker",
    cognitiveOverrides: {
      rerouteChance:         0.15,
      stubbornness:          0.75,
      congestionTolerance:   0.70,
    },
  },

  skirmisher: {
    // Mobile hit-and-run fighter. Repositions constantly, avoids clustering.
    repositionBonus:    25,
    retreatBonus:       10,
    aggressionBonus:    -5,
    chatHint:           "coward",
    kiteEnabled:        true,
    kiteRange:          30,   // ft — preferred minimum distance from melee targets
    cognitiveOverrides: {
      rerouteChance:         0.70,
      congestionTolerance:   0.20,
      stubbornness:          0.15,
      oaTolerance:           0.50,
    },
  },

  hunter: {
    // Balanced predator. Tracks targets, prefers ranged but can melee.
    focusFireBonus:     15,
    retreatPenalty:     10,
    aggressionBonus:    5,
    chatHint:           "predator",
    cognitiveOverrides: {
      rerouteChance:         0.50,
      stubbornness:          0.40,
      reevalInterval:        3,
    },
  },

  predator: {
    // Apex hunter. Closes distance, focus-fires wounded targets.
    aggressionBonus:    20,
    focusFireBonus:     25,
    retreatPenalty:     20,
    chatHint:           "predator",
    cognitiveOverrides: {
      rerouteChance:         0.40,
      stubbornness:          0.55,
      congestionTolerance:   0.50,
      reevalInterval:        2,
    },
  },

  sniper: {
    // Pure ranged attacker. Maximises distance, never charges.
    repositionBonus:    30,
    retreatBonus:       20,
    aggressionBonus:    -20,
    chatHint:           "cautious",
    cognitiveOverrides: {
      rerouteChance:         0.80,
      stubbornness:          0.10,
      oaTolerance:           0.20,
      congestionTolerance:   0.05,
    },
  },

  artillery: {
    // AOE spellcaster. Avoids melee, targets clusters.
    repositionBonus:    20,
    retreatBonus:       15,
    aggressionBonus:    -10,
    focusFireBonus:     -10,   // prefers AOE over single-target
    chatHint:           "cautious",
    cognitiveOverrides: {
      rerouteChance:         0.65,
      stubbornness:          0.20,
      oaTolerance:           0.25,
      congestionTolerance:   0.10,
    },
  },

  assassin: {
    // Precision striker. Targets wounded/isolated enemies, repositions after.
    focusFireBonus:     30,
    repositionBonus:    20,
    retreatBonus:       10,
    aggressionBonus:    5,
    chatHint:           "predator",
    cognitiveOverrides: {
      rerouteChance:         0.60,
      stubbornness:          0.25,
      oaTolerance:           0.35,
      reevalInterval:        2,
    },
  },

  ambusher: {
    // Stealth striker. Prefers isolated targets, disengages when exposed.
    focusFireBonus:     20,
    repositionBonus:    25,
    retreatBonus:       15,
    aggressionBonus:    -5,
    chatHint:           "coward",
    cognitiveOverrides: {
      rerouteChance:         0.70,
      stubbornness:          0.15,
      oaTolerance:           0.30,
    },
  },

  cautious: {
    // Careful fighter. Holds ground until favourable, retreats early.
    retreatBonus:       15,
    aggressionBonus:    -10,
    retreatPenalty:     -10,
    chatHint:           "cautious",
    cognitiveOverrides: {
      rerouteChance:         0.45,
      retreatSensitivity:    1.40,
      stubbornness:          0.30,
    },
  },

  defensive: {
    // Holds position, punishes approach.
    retreatPenalty:     30,
    aggressionBonus:    -15,
    focusFireBonus:     -10,
    chatHint:           "cautious",
    cognitiveOverrides: {
      rerouteChance:         0.20,
      stubbornness:          0.80,
      congestionTolerance:   0.60,
    },
  },

  territorial: {
    // Defends an area, aggressive to intruders, retreats only when badly hurt.
    retreatPenalty:     20,
    aggressionBonus:    10,
    chatHint:           "berserker",
    cognitiveOverrides: {
      rerouteChance:         0.25,
      stubbornness:          0.65,
      retreatSensitivity:    0.80,
    },
  },

  opportunist: {
    // Flexible bandit-type. Attacks weakened targets, retreats when odds turn.
    focusFireBonus:     20,
    retreatBonus:       15,
    aggressionBonus:    5,
    chatHint:           "coward",
    cognitiveOverrides: {
      rerouteChance:         0.55,
      retreatSensitivity:    1.30,
      stubbornness:          0.25,
      reevalInterval:        2,
    },
  },

  // ── Spellcaster archetypes ────────────────────────────────────────────────
  // These set spellcastingFocus: true, which enables pre-movement spell check
  // in automation.js and the idealRange-based movement hint system.

  blaster: {
    // Pure damage caster — Evoker, Sorcerer, Fiend warlock. Stays at range,
    // spends slots freely, prefers AOE and single-target damage spells.
    rangedPreference:         20,
    meleePreference:          -15,
    repositionBonus:          10,
    retreatBonus:             5,
    spellcastingFocus:        true,
    preferredSpellCategory:   ["AOE_DAMAGE", "SINGLE_DAMAGE", "CANTRIP_DAMAGE"],
    idealRange:               60,          // ft — tries to stay at this distance
    cognitiveOverrides: {
      rerouteChance:           0.85,
      stubbornness:            0.05,
      slotConservation:        "none",     // spends slots freely
    },
  },

  controller: {
    // Crowd-control caster — Wizard, Diviner, Great Old One Warlock. Maximises
    // lockdown, stays at mid-range, conserves high-level slots for big control spells.
    rangedPreference:         15,
    meleePreference:          -20,
    repositionBonus:          15,
    spellcastingFocus:        true,
    preferredSpellCategory:   ["AOE_CONTROL", "SINGLE_CONTROL", "AOE_DAMAGE"],
    idealRange:               45,
    cognitiveOverrides: {
      rerouteChance:           0.90,
      stubbornness:            0.00,
      slotConservation:        "moderate", // saves highest slots for control
    },
  },

  warpriest: {
    // Melee spellcaster — Paladin, War Cleric, Bladesinger. Gets into melee,
    // self-buffs before engaging, saves higher slots for healing in a pinch.
    rangedPreference:         0,
    meleePreference:          10,
    spellcastingFocus:        true,
    preferredSpellCategory:   ["BUFF_SELF", "HEAL", "SINGLE_DAMAGE"],
    idealRange:               5,
    cognitiveOverrides: {
      slotConservation:        "strong",   // saves high slots for healing
    },
  },

  summoner: {
    // Summon / buff caster — Conjurer, Shepherd Druid, Undead warlock. Summons
    // minions then supports from a safe distance with buffs and control.
    rangedPreference:         10,
    meleePreference:          -10,
    spellcastingFocus:        true,
    preferredSpellCategory:   ["SUMMON", "BUFF_ALLY", "AOE_CONTROL"],
    idealRange:               30,
    cognitiveOverrides: {
      slotConservation:        "strong",
    },
  },
};

// ─── Keyword → archetype alias table ─────────────────────────────────────────
// Maps actor subtype/tag strings to canonical archetype keys.
// Checked with normalized substring matching.

export const ARCHETYPE_ALIASES = {
  "mindless":          "undead-mindless",
  "skeleton":          "undead-mindless",
  "zombie":            "undead-mindless",
  "shadow":            "undead-disciplined",
  "wight":             "undead-disciplined",
  "vampire":           "undead-disciplined",
  "beast":             "beast-instinctive",
  "wolf":              "pack-hunter",
  "kobold":            "pack-hunter",
  "goblin":            "skirmisher",
  "orc":               "berserker",
  "barbarian":         "berserker",
  "archer":            "sniper",
  "ranger":            "hunter",
  "rogue":             "assassin",
  "guard":             "disciplined",
  "soldier":           "disciplined",
  "patrol":            "disciplined",
  "cowardly":          "coward",
  "skittish":          "coward",
  "fearful":           "coward",
  "prey":              "coward",
  "survivalist":       "cautious",
  "bodyguard":         "bodyguard",
  "guardian":          "guardian",
  "pack":              "pack-hunter",
  "swarm":             "hive-minded",
  "artillery":         "artillery",
  "caster":            "controller",
  "spellcaster":       "controller",
  "wizard":            "controller",
  "mage":              "controller",
  "sorcerer":          "blaster",
  "warlock":           "blaster",
  "evoker":            "blaster",
  "diviner":           "controller",
  "conjurer":          "summoner",
  "necromancer":       "controller",
  "enchanter":         "controller",
  "illusionist":       "controller",
  "cleric":            "warpriest",
  "priest":            "warpriest",
  "paladin":           "warpriest",
  "druid":             "controller",
  "bard":              "controller",
  "shaman":            "controller",
  "blaster":           "blaster",
  "controller":        "controller",
  "warpriest":         "warpriest",
  "summoner":          "summoner",
  // Creature names
  "werewolf":          "berserker",
  "gnoll":             "berserker",
  "bugbear":           "predator",
  "hobgoblin":         "disciplined",
  "lizardfolk":        "territorial",
  "yuan-ti":           "tactician",
  "drow":              "assassin",
  "duergar":           "disciplined",
  "banshee":           "territorial",
  "specter":           "ambusher",
  "wraith":            "ambusher",
  "lich":              "tactician",
  "vampire":           "tactician",
  "troll":             "berserker",
  "ogre":              "brute",
  "ettin":             "brute",
  "minotaur":          "berserker",
  "manticore":         "predator",
  "owlbear":           "territorial",
  "displacer":         "predator",
  "bulette":           "predator",
  "basilisk":          "territorial",
  "medusa":            "ambusher",
  "naga":              "tactician",
  "aboleth":           "tactician",
  "mind flayer":       "tactician",
  "beholder":          "territorial",
  "gelatinous":        "mob-walker",
  // Roles / titles
  "bandit":            "opportunist",
  "captain":           "tactician",
  "thug":              "brute",
  "scout":             "skirmisher",
  "spy":               "assassin",
  "berserker":         "berserker",
  "hunter":            "hunter",
  "predator":          "predator",
  "sniper":            "sniper",
  "champion":          "fearless",
  "elite":             "disciplined",
  "veteran":           "disciplined",
  "commander":         "disciplined",
  "assassin":          "assassin",
  "cultist":           "mob-walker",
  "fanatic":           "zealot",
  "zealot":            "zealot",
  "berserker":         "berserker",
  // Behaviours
  "ooze":              "mob-walker",
  "mindless":          "undead-mindless",
  "rout":              "panicked",
  "fleeing":           "panicked",
  "flanker":           "pack-flanker",
};

// ─── Resolve archetypes for an actor ─────────────────────────────────────────

/**
 * Resolve the list of archetype keys for an actor.
 *
 * Sources (in priority order):
 *   1. actor flag: MODULE_ID.archetypes  (manual GM array) — immediate return
 *   2. actor flag: MODULE_ID.aiProfile   (inference cache from createToken hook)
 *   3. actor flag: MODULE_ID.behavior.subtype (single string, alias-resolved)
 *   4. actor.system.details.type.subtype (e.g. "goblinoid") — alias-resolved
 *   5. Live inference via the shared registry if nothing else produced keys
 *
 * Returns an array of canonical archetype keys that exist in ARCHETYPES.
 *
 * @param {Actor5e} actor
 * @returns {string[]}
 */
export function resolveArchetypes(actor) {
  const keys = [];

  // 1. Explicit archetype array flag (manual GM override — highest priority)
  const flagArchetypes = actor.getFlag?.(MODULE_ID, "archetypes");
  if (Array.isArray(flagArchetypes) && flagArchetypes.length > 0) {
    for (const k of flagArchetypes) {
      const canonical = _canonicalize(k);
      if (canonical) keys.push(canonical);
    }
    if (keys.length > 0) return keys;
  }

  // 2. Inference cache (written by inferAndCacheAiProfile on token creation)
  const aiProfile = actor.getFlag?.(MODULE_ID, "aiProfile");
  if (aiProfile?.archetypes?.length > 0) {
    for (const k of aiProfile.archetypes) {
      const canonical = _canonicalize(k);
      if (canonical && !keys.includes(canonical)) keys.push(canonical);
    }
    if (keys.length > 0) return keys;
  }

  // 3. Behavior subtype flag (single string, legacy)
  const subtype1 = actor.getFlag?.(MODULE_ID, "behavior")?.subtype
    ?? actor.getFlag?.(MODULE_ID, "behaviorSubtype")
    ?? "";
  if (subtype1) {
    const canonical = _canonicalize(subtype1);
    if (canonical && !keys.includes(canonical)) keys.push(canonical);
  }

  // 4. Actor type subtype (e.g. "goblinoid")
  const typeObj  = actor.system?.details?.type;
  const subtype2 = typeof typeObj === "object" ? String(typeObj.subtype ?? "") : "";
  if (subtype2) {
    const canonical = _canonicalize(subtype2);
    if (canonical && !keys.includes(canonical)) keys.push(canonical);
  }

  // 5. Live inference fallback (synchronous) when nothing else matched
  if (keys.length === 0) {
    try {
      const mod = registry.inference;
      if (mod?.inferAiProfile) {
        const result = mod.inferAiProfile(actor);
        for (const k of result.archetypes) {
          if (!keys.includes(k)) keys.push(k);
        }
      }
    } catch { /* inference unavailable */ }
  }

  return keys;
}

/**
 * Canonicalize a raw string to a known archetype key.
 * Tries exact match, then alias table, then substring alias scan.
 *
 * Bidirectional `includes` matching uses a min-length guard on the needle to
 * prevent a 1- or 2-character input ("a", "ai") from spuriously matching every
 * alias or archetype key via `alias.includes(needle)` / `key.includes(needle)`.
 *
 * @param {string} raw
 * @returns {string|null}
 */
function _canonicalize(raw) {
  const n = _norm(raw);
  if (!n) return null;

  // Direct key match
  if (ARCHETYPES[n]) return n;

  // Need at least 3 characters before we trust bidirectional substring matching.
  // Shorter strings are too ambiguous (e.g. "an" matches "animal", "guardian", "abjurer").
  const safeForBidir = n.length >= 3;

  // Alias lookup
  for (const [alias, canonical] of Object.entries(ARCHETYPE_ALIASES)) {
    if (n === alias) {
      if (ARCHETYPES[canonical]) return canonical;
    }
    if (safeForBidir && (n.includes(alias) || alias.includes(n))) {
      if (ARCHETYPES[canonical]) return canonical;
    }
  }

  // Substring scan of ARCHETYPES keys (only when needle is long enough)
  if (safeForBidir) {
    for (const key of Object.keys(ARCHETYPES)) {
      if (n.includes(key) || key.includes(n)) return key;
    }
  }

  return null;
}

export function _norm(s) {
  return String(s ?? "").toLowerCase().trim().replace(/\s+/g, "-");
}

// ─── Merged archetype profile ─────────────────────────────────────────────────

/**
 * Merge multiple archetype definitions into a single profile.
 * Numeric fields are summed; boolean fields are OR'd.
 * Non-numeric, non-boolean fields (like chatHint) use the first non-empty value.
 *
 * @param {string[]} keys
 * @returns {object}
 */
export function mergeArchetypes(keys) {
  const merged = {
    aggressionBonus: 0,
    retreatPenalty: 0,
    retreatBonus: 0,
    pursuitBonus: 0,
    focusFireBonus: 0,
    spreadPressure: 0,
    meleePreference: 0,
    rangedPreference: 0,
    repositionBonus: 0,
    allyProximityBonus: 0,
    allyProximityPenalty: 0,
    ignoresMorale: false,
    fearless: false,
    packThreshold: 1,
    packFocusBonus: 0,
    opportunismBonus: 0,
    spellcasterFocusBonus: 0,
    disengage: 0,
    chatHint: "",
    // Spellcaster fields
    spellcastingFocus:       false,
    preferredSpellCategory:  null,   // string[] | null
    idealRange:              null,   // number (ft) | null
    // Cognitive overrides: deep-merged; later archetypes win per-field
    cognitiveOverrides: {},
  };

  for (const key of keys) {
    const def = ARCHETYPES[key];
    if (!def) continue;

    for (const [field, value] of Object.entries(def)) {
      if (field === "ignoresMorale" || field === "fearless" || field === "spellcastingFocus") {
        merged[field] = merged[field] || value;
      } else if (field === "chatHint") {
        if (!merged.chatHint && value) merged.chatHint = value;
      } else if (field === "packThreshold") {
        merged.packThreshold = Math.min(merged.packThreshold, value);
      } else if (field === "preferredSpellCategory") {
        // First non-null wins (primary archetype defines spell category preference)
        if (!merged.preferredSpellCategory && Array.isArray(value)) {
          merged.preferredSpellCategory = value;
        }
      } else if (field === "idealRange") {
        // First non-null wins
        if (merged.idealRange === null && typeof value === "number") {
          merged.idealRange = value;
        }
      } else if (field === "cognitiveOverrides") {
        // Deep merge: later archetypes override earlier ones field-by-field
        Object.assign(merged.cognitiveOverrides, value);
      } else if (typeof value === "number") {
        merged[field] = (merged[field] ?? 0) + value;
      }
    }
  }

  return merged;
}
