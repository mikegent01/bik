/**
 * parsing.js
 * Parses Multiattack feature descriptions to extract attack counts and names.
 *
 * Three-phase strategy:
 *
 *  Phase 1 -- Foundry enricher link extraction (highest fidelity)
 *    Reads [[/item .itemId]] tags directly from the raw description and resolves
 *    them against the actor's item collection. This handles Monster Manual compendium
 *    entries and any stat block using Foundry's inline item link syntax.
 *
 *  Phase 2 -- Plain-English pattern matching
 *    Three regex patterns covering the standard 5e phrasing variants:
 *      A  "<number> <name> attack(s)"
 *      B  "<number> attacks with its <name>"
 *      C  "<number> with its <name>"  (colon-list form)
 *
 *  Phase 3 -- Generic count fallback
 *    Extracts total attack count from "makes N attacks" when no weapon names
 *    are found. Expansion uses the actor's best available weapon N times.
 */

import { log } from "./utils.js";
import { resolveOverride } from "./multiattack-override.js";

// ─── Number word → integer map ───────────────────────────────────────────────
const NUMBER_WORDS = {
  one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
};

// ─── Cache: actor.id → parsed result ─────────────────────────────────────────
const _parseCache = new Map();

export function invalidateParseCache(actorId) { _parseCache.delete(actorId); }
export function clearParseCache()             { _parseCache.clear(); }

// ─── Main exports ─────────────────────────────────────────────────────────────

/**
 * Find the Multiattack item/feature on an actor, if present.
 * @param {Actor5e} actor
 * @returns {Item5e|null}
 */
export function findMultiattackFeature(actor) {
  const items = actor.items ?? [];
  return items.find(i => /^multi.?attack$/i.test(i.name.trim())) ?? null;
}

/**
 * Parse a Multiattack feature description and return structured data.
 * Results are cached per actor.
 *
 * @param {Actor5e} actor
 * @returns {{ count: number, attackNames: string[], counts: Record<string,number>, replacements: Array<{name:string}> }|null}
 */
export function parseMultiattack(actor) {
  if (_parseCache.has(actor.id)) return _parseCache.get(actor.id);

  // ── Manual override short-circuit ──────────────────────────────────────
  // If the GM has configured a manual override for this actor and it is enabled
  // and valid, return it immediately without running any parsing phases.
  // The cache is NOT used for overrides -- they are always resolved fresh so
  // item validation runs against the actor's current item collection.
  const override = resolveOverride(actor);
  if (override !== null) {
    log(`Multiattack override active for ${actor.name} -- bypassing parser.`);
    return override;
  }

  const feature = findMultiattackFeature(actor);
  if (!feature) {
    _parseCache.set(actor.id, null);
    return null;
  }

  const rawDesc = feature.system?.description?.value ?? "";
  log(`Parsing multiattack description for ${actor.name}: "${rawDesc.substring(0, 120)}..."`);

  const counts       = {};
  const attackNames  = [];
  let   totalCount   = 0;

  // Optional once-per-multiattack substitutions.
  // Phrasing: "it can replace one of its attacks with [a use of / its] X"
  // Each entry may only be used ONCE in the expanded attack list, replacing
  // exactly one regular attack.  Multiple distinct replacements may exist.
  const replacements = [];

  // Holds the result from whichever phase succeeds first.
  // Replacement parsing always runs after all phases and is merged in.
  let phaseResult = null;

  // ── Phase 1: Foundry enricher link extraction ────────────────────────────
  // Handles [[/item .itemId]] and [[/item .itemId]]{display} forms.
  // The item ID directly names a weapon on the actor -- no text ambiguity.

  // Sub-case A: number immediately precedes the item link
  //   "2 [[/item .mmclaw0000000000]] attacks"
  //   "one [[/item .mmbite0000000000]] attack and two [[/item .mmclaw0000000000]] attacks"
  // Phase 1A matches both dot-ID form [[/item .itemId]] and name form [[/item Name]]
  // with a leading number. The name form is common in stat blocks that haven't been
  // linked to a compendium entry (e.g. "three [[/item Rend]] attacks").
  const enricherWithLeadingCount =
    /(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+\[\[\/item\s+\.?([a-zA-Z0-9 '\-]+?)\]\](?:\{[^}]*\})?/gi;
  let m;
  while ((m = enricherWithLeadingCount.exec(rawDesc)) !== null) {
    const rawCount = m[1].toLowerCase();
    const itemId   = m[2];
    // Try dot-prefixed ID first, then fall back to name match
    const item = actor.items.get(itemId) ??
                 actor.items.find(i => i.name.toLowerCase() === itemId.toLowerCase().trim());
    if (!item) {
      log(`  Phase 1A: item "${itemId}" not found on actor (tried id + name) -- skipping`);
      continue;
    }
    const n    = NUMBER_WORDS[rawCount] ?? parseInt(rawCount, 10) ?? 1;
    const name = item.name;
    counts[name] = (counts[name] ?? 0) + n;
    totalCount  += n;
    for (let i = 0; i < n; i++) attackNames.push(name);
    log(`  Phase 1A: "${name}" × ${n} (id: ${itemId})`);
  }

  // Sub-case B: item link has no adjacent number -- number appears elsewhere
  //   "makes 2 [[/item .mmclaw0000000000]] attacks"
  //   (number is before the tag but separated by no-count text)
  if (totalCount === 0) {
    const allLinks = [...rawDesc.matchAll(/\[\[\/item\s+\.?([a-zA-Z0-9 '\-]+?)\]\](?:\{[^}]*\})?/gi)];
    for (const link of allLinks) {
      const itemId = link[1];
      const item = actor.items.get(itemId) ??
                   actor.items.find(i => i.name.toLowerCase() === itemId.toLowerCase().trim());
      if (!item) continue;
      if (counts[item.name]) continue;  // already resolved by sub-case A

      // Search backward from the link for the nearest number token.
      // Strip other enricher tags from the preceding text first so intervening
      // [[/item ...]] syntax doesn't break the number lookbehind.
      const rawBefore = rawDesc.slice(0, link.index);
      const before    = _stripAll(rawBefore);
      const numMatch  = before.match(/(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s*$/i);
      const n = numMatch
        ? (NUMBER_WORDS[numMatch[1].toLowerCase()] ?? parseInt(numMatch[1], 10) ?? 1)
        : 1;
      const name = item.name;
      counts[name] = (counts[name] ?? 0) + n;
      totalCount  += n;
      for (let i = 0; i < n; i++) attackNames.push(name);
      log(`  Phase 1B: "${name}" × ${n} (id: ${itemId}, number found via lookbehind)`);
    }
  }

  if (totalCount > 0) {
    // Phase 1 succeeded -- skip directly to replacement parsing then return.
    // We use a labelled block so we can break out of phase parsing early
    // without losing the replacement scan.
    phaseResult = { count: totalCount, attackNames: [...attackNames], counts: { ...counts } };
  }

  // ── Phase 2: Plain-English pattern matching ──────────────────────────────
  // Strips HTML and enricher syntax before running regex patterns.
  const text = _stripAll(rawDesc).toLowerCase();
  log(`  Phase 2 text: "${text.substring(0, 120)}"`);

  // Pattern A: "<number> <name> attack(s)"
  // Character class accepts ASCII apostrophe and Unicode right-single-quote (U+2019)
  // — curly apostrophes are common in published stat blocks (e.g. "ghoul’s claws").
  const patternA = /(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+([a-zA-Z'\u2019-]+(?:\s+[a-zA-Z'\u2019-]+)?)\s+attacks?/gi;
  while ((m = patternA.exec(text)) !== null) {
    const rawCount = m[1];
    const rawName  = m[2].trim();
    if (GENERIC_ATTACK_WORDS.has(rawName.toLowerCase())) continue;
    const n    = NUMBER_WORDS[rawCount] ?? parseInt(rawCount, 10) ?? 1;
    const name = _titleCase(rawName);
    counts[name] = (counts[name] ?? 0) + n;
    totalCount  += n;
    for (let i = 0; i < n; i++) attackNames.push(name);
    log(`  Pattern A: "${name}" × ${n}`);
  }

  // Pattern B: "<number> attacks with its <name>"
  const patternB = /(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+attacks?\s+with\s+(?:its\s+|a\s+|the\s+)?([a-zA-Z'\u2019-]+)/gi;
  while ((m = patternB.exec(text)) !== null) {
    const rawCount = m[1];
    const rawName  = m[2].trim();
    if (GENERIC_ATTACK_WORDS.has(rawName.toLowerCase())) continue;
    const name = _titleCase(rawName);
    if (counts[name]) continue;
    const n = NUMBER_WORDS[rawCount] ?? parseInt(rawCount, 10) ?? 1;
    counts[name] = (counts[name] ?? 0) + n;
    totalCount  += n;
    for (let i = 0; i < n; i++) attackNames.push(name);
    log(`  Pattern B: "${name}" × ${n}`);
  }

  // Pattern C: "<number> with its <name>"  -- colon-list form
  // e.g. "three attacks: one with its bite and two with its claws"
  const patternC = /(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+with\s+(?:its\s+|a\s+|the\s+|his\s+|her\s+)?/gi;
  while ((m = patternC.exec(text)) !== null) {
    const rawCount  = m[1];
    const nameStart = m.index + m[0].length;
    const rawName   = _extractNameUntilStop(text, nameStart);
    if (!rawName || GENERIC_ATTACK_WORDS.has(rawName.toLowerCase())) continue;
    const name = _titleCase(rawName);
    if (counts[name]) continue;
    const n = NUMBER_WORDS[rawCount] ?? parseInt(rawCount, 10) ?? 1;
    counts[name] = (counts[name] ?? 0) + n;
    totalCount  += n;
    for (let i = 0; i < n; i++) attackNames.push(name);
    log(`  Pattern C: "${name}" × ${n}`);
  }

  if (totalCount > 0 && !phaseResult) {
    // Phase 2 succeeded.
    phaseResult = { count: totalCount, attackNames: [...attackNames], counts: { ...counts } };
  }

  // ── Phase 3: Generic count fallback ─────────────────────────────────────
  // No weapon names found -- extract total count only.
  // buildExpandedMultiattack will repeat the best available weapon N times.
  if (!phaseResult) {
    const countMatch = text.match(
      /\b(?:makes?|can\s+make)\s+(?:(one|two|three|four|five|six|seven|eight|nine|ten)|(\d+))\s+(?:\w+\s+){0,3}attacks?/i
    );
    if (countMatch) {
      totalCount = countMatch[2]
        ? parseInt(countMatch[2], 10)
        : (NUMBER_WORDS[countMatch[1]] ?? 1);
    } else {
      totalCount = 1;
    }
  }

  // ── Replacement parsing (all phases) ───────────────────────────────────────
  // Detect phrasing such as:
  //   "It can replace one of its attacks with a use of Dragon's Breath."
  //   "it can replace one attack with its Frightful Presence"
  //   "it can replace one of its Claw attacks with Dragon's Breath"
  // The replacement feature may only be used ONCE per multiattack action.
  // It must NOT be added to the main attack list -- it is an optional swap.

  const replacementPatterns = [
    // "replace one [of its [<weapon>]] attacks with [a use of / its / a / to cast / a use of to cast] <name>"
    // The "to cast" prefix can appear when Foundry enricher links for spells are
    // stripped -- [[/item SpellId]] with no display text becomes "to cast" in some
    // stat block formats, yielding "a use of to cast <Spell Name>".
    // Greedy {1,50} (not lazy) so the full name is captured before a trailing paren
    // e.g. "...to cast Melf's Acid Arrow (level 3 version)." -- the lookahead must
    // accept a space or open-paren as a clause terminator, not just [.,;].
    /replace\s+one(?:\s+of\s+its(?:\s+\w+)?)?\s+attacks?\s+with\s+(?:a\s+use\s+of\s+)?(?:to\s+cast\s+)?(?:its\s+|a\s+)?([A-Za-z][A-Za-z '\-]{1,50})(?=[.,(;\s]|$)/gi,
    // "replace one of its attacks with <name>" (no prefix at all)
    /replace\s+one\s+of\s+its\s+attacks?\s+with\s+([A-Za-z][A-Za-z '\-]{1,50})(?=[.,(;\s]|$)/gi,
  ];

  const strippedForReplacements = _stripAll(rawDesc);
  const seenReplacementNames    = new Set();

  for (const pattern of replacementPatterns) {
    let rm;
    while ((rm = pattern.exec(strippedForReplacements)) !== null) {
      const rawName = rm[1].trim().replace(/\s+/g, " ");
      if (!rawName || seenReplacementNames.has(rawName.toLowerCase())) continue;
      seenReplacementNames.add(rawName.toLowerCase());
      // Only the name is cached. usesLeft is a live value; it must be
      // read from item.system.uses at resolution time in automation.js,
      // never stored here (the parse cache lives forever, uses don't).
      replacements.push({ name: rawName });
      log(`  Replacement found: "${rawName}" (once per multiattack)`);
    }
  }

  if (!phaseResult) {
    if (!totalCount || totalCount < 1 || totalCount > 10) totalCount = 1;
    phaseResult = { count: totalCount, attackNames: [], counts: {} };
  }

  // ── Merge replacement attacks into final result ───────────────────────────
  const finalResult = { ...phaseResult, replacements };
  log(
    `Multiattack parsed for ${actor.name}: count=${finalResult.count}, ` +
    `names=[${finalResult.attackNames.join(", ")}], ` +
    `replacements=[${replacements.map(r => r.name).join(", ")}]`
  );
  _parseCache.set(actor.id, finalResult);
  return finalResult;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Words that appear in "attack" contexts but don't name the weapon/feature */
const GENERIC_ATTACK_WORDS = new Set([
  "melee", "ranged", "weapon", "spell", "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten", "its", "the", "a", "an", "and",
  "or", "with", "using", "attack", "attacks", "make", "makes", "use", "uses",
]);

/** Words that end a weapon name in colon-list phrasing */
const STOP_WORDS = new Set(["and", "or", "but", "then", "also", "as", "while"]);

/**
 * Strip HTML tags AND Foundry enricher syntax from a description string.
 * Preserves {display} text where present, removes bare [[...]] tags entirely.
 */
function _stripAll(html) {
  let text = html;
  // [[...]]{display} → keep display text
  text = text.replace(/\[\[[^\]]*\]\]\{([^}]*)\}/g, "$1");
  // [[...]] with no display → remove
  text = text.replace(/\[\[[^\]]*\]\]/g, " ");
  // @UUID[...]{display} → keep display text
  text = text.replace(/@\w+\[[^\]]*\]\{([^}]*)\}/g, "$1");
  // @UUID[...] with no display → remove
  text = text.replace(/@\w+\[[^\]]*\]/g, " ");
  // HTML tags
  text = text.replace(/<[^>]*>/g, " ");
  return text.replace(/\s+/g, " ").trim();
}

/**
 * Extract a weapon name (up to 3 words) starting at pos in text,
 * stopping at STOP_WORDS, number words, or punctuation.
 */
function _extractNameUntilStop(text, pos) {
  const words  = [];
  const tokens = text.slice(pos).trim().split(/\s+/);
  for (const token of tokens) {
    const clean = token.replace(/[^a-zA-Z'-]/g, "").toLowerCase();
    if (!clean) break;
    if (STOP_WORDS.has(clean)) break;
    if (NUMBER_WORDS[clean] !== undefined) break;
    words.push(clean);
    if (words.length === 3) break;
  }
  return words.join(" ");
}

function _titleCase(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}
