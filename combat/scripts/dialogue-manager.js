/**
 * dialogue-manager.js
 * Core phrase selection, anti-spam, and language resolution for NPC combat dialogue.
 *
 * Responsibilities:
 *  - Select contextually appropriate phrases from the registry
 *  - Enforce per-token cooldowns and global encounter throttles
 *  - Deduplicate recent phrases
 *  - Resolve language visibility for players
 *  - Provide weighted random selection across blended archetype pools
 *
 * Performance:
 *  - All state is in-memory Maps; cleared on combat end
 *  - No DOM, canvas, or Foundry calls — pure data logic
 *  - O(1) per-token lookups, O(archetypes) phrase pool construction
 */

import { MODULE_ID, getSetting, SETTINGS } from "./settings.js";
import {
  PHRASE_REGISTRY,
  EFFORT_NOISES,
  ARCHETYPE_EFFORT_MAP,
  LANGUAGE_DESCRIPTORS,
  UNIVERSAL_LANGUAGES,
} from "./dialogue-registry.js";
import { getCustomPhrases } from "./dialogue-journal.js";
import { log } from "./utils.js";

// ─── Speech state store ───────────────────────────────────────────────────────
// Keyed by tokenId → SpeechState
const _speechState = new Map();

// Global encounter cap: max total speeches across all NPCs per combat
let _encounterSpeechCount = 0;
const MAX_ENCOUNTER_SPEECH = 60; // absolute ceiling per combat

Hooks.on("deleteCombat", () => {
  _speechState.clear();
  _encounterSpeechCount = 0;
  log("[Dialogue] Combat ended — speech state cleared.");
});

Hooks.on("combatRoundChange", () => {
  // Ease off round-level counters slightly so later rounds don't go completely silent
  for (const [, state] of _speechState) {
    state.combatSpeechCount = Math.max(0, state.combatSpeechCount - 1);
  }
});

// ─── SpeechState shape ────────────────────────────────────────────────────────
function _makeSpeechState() {
  return {
    lastPhraseTime:   0,
    recentPhrases:    [],  // last N phrase strings (deduplication window)
    combatSpeechCount: 0,  // total times this token has spoken this combat
    currentCooldown:  0,   // dynamically set after each speech
  };
}

function _getState(tokenId) {
  if (!_speechState.has(tokenId)) {
    _speechState.set(tokenId, _makeSpeechState());
  }
  return _speechState.get(tokenId);
}

// ─── Constants ────────────────────────────────────────────────────────────────

const COOLDOWN = {
  MIN_MS:        8_000,   // shortest possible gap between speeches (8s)
  DEFAULT_MS:    12_000,  // default cooldown
  MAJOR_MS:      0,       // guaranteed events override cooldown
  DEDUP_WINDOW:  6,       // how many recent phrases to track for deduplication
  PER_TOKEN_MAX: 20,      // max speeches per token per combat
};

// Context proc chance — 0 = never, 1 = always
const PROC_CHANCE = {
  engagement:  1.00,  // guaranteed on first combat action
  attack:      0.15,  // ~15% on each attack
  damaged:     0.25,  // ~25% on taking damage
  kill:        0.80,  // very likely on defeating an enemy
  panic:       1.00,  // guaranteed on morale break
  retreat:     1.00,  // guaranteed on fleeing
  tactical:    0.20,
  taunt:       0.12,
  death:       1.00,  // guaranteed on creature death
  movement:    0.08,  // rare during movement
  effort:      0.30,  // effort noises on attack swings
  spell:       0.35,  // ~35% on casting a spell
  boss:        0.45,  // ~45% when acting outside its turn (dramatic beat)
};

// Context → fallback context when an archetype lacks a dedicated pool
const CONTEXT_FALLBACK = {
  spell: "tactical",
  boss:  "taunt",     // boss bark → taunt → tactical
  taunt: "tactical",
};

// Per-token max speeches per context per combat
const CONTEXT_CAP = {
  engagement:  1,
  attack:      10,
  damaged:     6,
  kill:        5,
  panic:       2,
  retreat:     4,
  tactical:    6,
  taunt:       4,
  death:       1,
  movement:    4,
  effort:      15,
  spell:       3,
  boss:        4,
};

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Attempt to get a speech phrase for a given token and context.
 * Returns null if:
 *  - Dialogue is disabled
 *  - The creature has INT ≤ 4 or no known languages (effort noises only)
 *  - Spam filters, cooldowns, or proc chance blocks the speech
 *
 * @param {TokenDocument} tokenDoc
 * @param {string[]}      archetypes   resolved archetype keys
 * @param {string}        context      phrase context key (see PROC_CHANCE)
 * @param {object}        [opts]
 * @param {boolean}       [opts.guaranteed]  bypass proc chance (not cooldown)
 * @param {boolean}       [opts.forceMajor]  bypass both proc chance AND cooldown
 * @returns {{ phrase: string, languageDisplay: string | null } | null}
 */
export function getSpeechPhrase(tokenDoc, archetypes, context, opts = {}) {
  if (!_dialogueEnabled()) return null;

  // ── INT / language gate ────────────────────────────────────────────────────
  // Creatures with INT ≤ 4 or no spoken languages communicate only through
  // effort noises (handled by getEffortNoise) and animalistic sounds.
  // They never produce readable speech phrases.
  if (_isAnimalIntelligence(tokenDoc)) return null;

  const tokenId = tokenDoc?.id ?? tokenDoc?._id ?? "unknown";
  const state   = _getState(tokenId);
  const now     = Date.now();

  // ── Global encounter cap ──────────────────────────────────────────────────
  if (_encounterSpeechCount >= MAX_ENCOUNTER_SPEECH) return null;

  // ── Per-token combat speech cap ───────────────────────────────────────────
  const capForContext = CONTEXT_CAP[context] ?? 5;
  const contextKey    = `ctx_${context}`;
  if ((state[contextKey] ?? 0) >= capForContext) return null;

  // ── Major event bypass (death, panic, etc.) ───────────────────────────────
  const isMajor = opts.forceMajor === true;
  const isGuaranteed = opts.guaranteed === true || isMajor;

  // ── Cooldown check (major events bypass, others don't) ───────────────────
  if (!isMajor) {
    const cooldown = state.currentCooldown || COOLDOWN.DEFAULT_MS;
    if (now - state.lastPhraseTime < cooldown) return null;
  } else {
    // Even major events need a very short gap to avoid simultaneous fires
    if (now - state.lastPhraseTime < 500) return null;
  }

  // ── Proc chance ───────────────────────────────────────────────────────────
  const baseChance = PROC_CHANCE[context] ?? 0.15;
  // Major guaranteed contexts are not scaled by frequency
  const isMajorContext = baseChance >= 1.0;
  const procChance = isMajorContext
    ? baseChance
    : Math.min(1.0, baseChance * _frequencyMultiplier());
  if (!isGuaranteed && Math.random() > procChance) return null;

  // ── Phrase selection ──────────────────────────────────────────────────────
  const phrase = _selectPhrase(archetypes, context, state.recentPhrases, tokenDoc?.actor ?? null);
  if (!phrase) return null;

  // ── Language resolution ───────────────────────────────────────────────────
  const languageDisplay = _resolveLanguageDisplay(tokenDoc, phrase);

  // ── Update state ──────────────────────────────────────────────────────────
  state.lastPhraseTime    = now;
  state.combatSpeechCount += 1;
  state.currentCooldown   = _computeCooldown(context);
  state[contextKey]       = (state[contextKey] ?? 0) + 1;

  // Deduplication window: keep last N phrases
  state.recentPhrases.push(phrase);
  if (state.recentPhrases.length > COOLDOWN.DEDUP_WINDOW) {
    state.recentPhrases.shift();
  }

  _encounterSpeechCount += 1;

  log(`[Dialogue] ${tokenDoc?.name ?? tokenId} (${context}): "${phrase}"`);

  return { phrase, languageDisplay };
}

/**
 * Returns true when a creature has INT ≤ 4 OR speaks no languages.
 * Such creatures produce only effort noises — never readable speech.
 *
 * INT 1–4 covers: Mindless (1), animal (2–3), very low animal-like (4).
 * dnd5e 5e RAW: INT 1 = mindless, INT 2–3 = animal, INT 4 = barely sapient.
 */
function _isAnimalIntelligence(tokenDoc) {
  try {
    const actor = tokenDoc?.actor;
    if (!actor) return false;

    const intScore = Number(actor.system?.abilities?.int?.value ?? 10);
    if (intScore <= 4) return true;

    // Also gate on language list — creatures with no languages are non-verbal
    const langs = actor.system?.traits?.languages?.value;
    const langArr = Array.isArray(langs) ? langs : [...(langs ?? [])];
    if (langArr.length === 0) return true;

    return false;
  } catch {
    return false;
  }
}

/**
 * Get an effort noise for a given token.
 * Lighter weight than a full speech — short proc chance, short cooldown.
 * Low-INT / no-language creatures ALWAYS go through this path (never phrases).
 *
 * @param {TokenDocument} tokenDoc
 * @param {string[]}      archetypes
 * @param {boolean}       [forceAttempt]  bypass proc chance for low-INT creatures
 * @returns {string | null}
 */
export function getEffortNoise(tokenDoc, archetypes, forceAttempt = false) {
  if (!_dialogueEnabled()) return null;
  if (!getSetting(SETTINGS.DIALOGUE_EFFORT_NOISES)) return null;

  const tokenId = tokenDoc?.id ?? tokenDoc?._id ?? "unknown";
  const state   = _getState(tokenId);
  const now     = Date.now();

  // Low-INT / no-language creatures: use a shorter cooldown (4s) and higher proc
  const isAnimal    = _isAnimalIntelligence(tokenDoc);
  const cooldownMs  = isAnimal ? 4_000 : 2_000;
  const procChance  = isAnimal ? 0.55 : PROC_CHANCE.effort;

  if (now - (state.lastEffortTime ?? 0) < cooldownMs) return null;
  if (!forceAttempt && !isAnimal && Math.random() > procChance) return null;
  if (forceAttempt || isAnimal) {
    // Animal intelligence: always fire if cooldown allows
    if (Math.random() > procChance) return null;
  }

  const category = _effortCategoryForArchetypes(archetypes);
  const pool     = EFFORT_NOISES[category] ?? EFFORT_NOISES.generic;
  const noise    = pool[Math.floor(Math.random() * pool.length)];

  state.lastEffortTime = now;
  return noise;
}

/**
 * Mark a token as having entered combat for the first time this encounter.
 * Clears any stale speech state from a previous combat.
 */
export function markFirstEngagement(tokenId) {
  _speechState.delete(tokenId);
  _speechState.set(tokenId, _makeSpeechState());
}

// ─── Phrase selection helpers ─────────────────────────────────────────────────

/**
 * Build a phrase pool for a given context from:
 *  1. Journal custom phrases for the specific actor (if any) — these REPLACE archetypes
 *  2. Archetype phrase registry (fallback)
 * Then select a non-recently-used phrase.
 *
 * @param {string[]}   archetypes
 * @param {string}     context
 * @param {string[]}   recentPhrases
 * @param {Actor|null} actor
 * @returns {string | null}
 */
function _selectPhrase(archetypes, context, recentPhrases, actor = null) {
  let pool = [];

  // 1. Journal override — replaces archetype pool entirely for this context
  if (actor) {
    try {
      const customPool = getCustomPhrases(actor, context);
      if (customPool && customPool.length > 0) {
        pool = customPool;
      }
    } catch { /* non-fatal */ }
  }

  // 2. Archetype registry fallback
  if (pool.length === 0) {
    for (const key of archetypes) {
      const archDef = PHRASE_REGISTRY[key];
      if (!archDef) continue;
      const contextPool = archDef[context];
      if (Array.isArray(contextPool) && contextPool.length > 0) {
        pool.push(...contextPool);
      }
    }
  }

  // 2b. Context fallback — most archetypes have no dedicated "spell" pool;
  // their tactical lines read naturally for spellcasting moments.
  if (pool.length === 0 && CONTEXT_FALLBACK[context]) {
    // Follow the fallback chain (e.g. boss → taunt → tactical) until a hop
    // yields phrases or the chain ends. Guards against cycles.
    let fbContext = CONTEXT_FALLBACK[context];
    const seen = new Set([context]);
    while (fbContext && !seen.has(fbContext) && pool.length === 0) {
      seen.add(fbContext);
      for (const key of archetypes) {
        const fallbackPool = PHRASE_REGISTRY[key]?.[fbContext];
        if (Array.isArray(fallbackPool) && fallbackPool.length > 0) {
          pool.push(...fallbackPool);
        }
      }
      fbContext = CONTEXT_FALLBACK[fbContext];
    }
  }

  if (pool.length === 0) return null;

  // Filter out recently used phrases (deduplication)
  const fresh      = pool.filter(p => !recentPhrases.includes(p));
  const candidates = fresh.length > 0 ? fresh : pool;

  return candidates[Math.floor(Math.random() * candidates.length)];
}

function _effortCategoryForArchetypes(archetypes) {
  for (const key of archetypes) {
    const cat = ARCHETYPE_EFFORT_MAP[key];
    if (cat) return cat;
  }
  return "generic";
}

// ─── Cooldown calculation ─────────────────────────────────────────────────────

function _computeCooldown(context) {
  switch (context) {
    case "engagement":
    case "panic":
    case "death":
    case "retreat":
      return COOLDOWN.MIN_MS;       // allow follow-up after major events sooner
    case "attack":
    case "effort":
      return COOLDOWN.MIN_MS + 2_000;
    case "kill":
      return COOLDOWN.MIN_MS;
    default:
      return COOLDOWN.DEFAULT_MS + Math.random() * 4_000; // randomise a bit
  }
}

// ─── Language resolution ──────────────────────────────────────────────────────

/**
 * Determine how a phrase should be displayed based on language comprehension.
 *
 * Returns:
 *   null                  → show the phrase as-is (understood by players)
 *   string                → replace phrase with this descriptor
 *
 * @param {TokenDocument} tokenDoc
 * @param {string}        _phrase   (unused — kept for future phonetic mode)
 * @returns {string | null}
 */
function _resolveLanguageDisplay(tokenDoc, _phrase) {
  if (!getSetting(SETTINGS.DIALOGUE_TRANSLATE_LANGUAGES)) return null;

  const actor = tokenDoc?.actor;
  if (!actor) return null;

  // Get NPC's spoken languages
  const npcLangs = _getActorLanguages(actor);

  // If the NPC speaks Common (or no languages listed), phrase is always understood
  if (npcLangs.length === 0) return null;
  if (npcLangs.some(l => UNIVERSAL_LANGUAGES.has(l))) return null;

  // Get player-character languages (union across all player-owned actors in scene)
  const pcLangs = _getPCLanguages();

  // If any NPC language overlaps with PC languages, phrase is understood
  if (npcLangs.some(l => pcLangs.has(l))) return null;

  // Not understood — pick the most specific descriptor available
  for (const lang of npcLangs) {
    if (LANGUAGE_DESCRIPTORS[lang]) {
      return LANGUAGE_DESCRIPTORS[lang];
    }
  }

  // Generic fallback
  const langName = _prettifyLang(npcLangs[0]);
  return `growls something in ${langName}`;
}

function _getActorLanguages(actor) {
  try {
    const langs = actor.system?.traits?.languages?.value;
    if (!langs) return [];
    // dnd5e stores as a Set-like object or array
    const arr = Array.isArray(langs) ? langs : [...(langs ?? [])];
    return arr.map(l => String(l).toLowerCase().trim()).filter(Boolean);
  } catch {
    return [];
  }
}

function _getPCLanguages() {
  const langs = new Set();
  try {
    if (!canvas?.tokens?.placeables) return langs;
    for (const token of canvas.tokens.placeables) {
      if (!token.actor?.hasPlayerOwner) continue;
      if (token.actor.type !== "character") continue;
      const actorLangs = _getActorLanguages(token.actor);
      for (const l of actorLangs) langs.add(l);
    }
  } catch { /* non-fatal */ }
  return langs;
}

function _prettifyLang(lang) {
  if (!lang) return "an unknown language";
  return lang.charAt(0).toUpperCase() + lang.slice(1);
}

// ─── Settings guard ───────────────────────────────────────────────────────────

function _dialogueEnabled() {
  try {
    return getSetting(SETTINGS.DIALOGUE_ENABLED) === true;
  } catch {
    return false;
  }
}

/**
 * Frequency multiplier: scales chance-based proc rates linearly.
 * Setting 1  → ×0.10 (nearly silent — major events only)
 * Setting 5  → ×0.50 (default — moderate)
 * Setting 10 → ×1.00 (full proc chances as defined in PROC_CHANCE)
 *
 * Major events (engagement, panic, retreat, death) are always 1.0 regardless.
 */
function _frequencyMultiplier() {
  try {
    const freq = Number(getSetting(SETTINGS.DIALOGUE_FREQUENCY) ?? 5);
    const clamped = Math.max(1, Math.min(10, freq));
    // Linear: 1→0.10, 5→0.50, 10→1.00
    return clamped / 10;
  } catch {
    return 0.5;
  }
}
