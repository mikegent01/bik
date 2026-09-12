/**
 * dialogue-journal.js
 * Journal Entry-based custom dialogue override system.
 *
 * GMs can create a Journal Entry called "NCA Dialogue" (or any name set in
 * module settings). Each page in that journal entry is named after an NPC
 * actor name, actor ID, or group tag. The page content (Markdown or plain text)
 * defines custom phrase pools for that NPC or group using a simple format:
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ## engagement
 * For the Crown!
 * We die for the King!
 * Hold the gate!
 *
 * ## attack
 * Have at thee!
 * Strike!
 *
 * ## damaged
 * Argh!
 * I'll hold!
 *
 * ## death
 * ...for the Crown...
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Section headers (## engagement, ## attack, etc.) match the dialogue context
 * keys. Lines below each header are individual phrases (one per line, blank
 * lines ignored, lines starting with # ignored as comments).
 *
 * Lookup order:
 *  1. Exact actor ID match
 *  2. Exact actor name match (case-insensitive)
 *  3. Group tag match: actor flag `npcAi.dialogueGroup` → page named that tag
 *
 * If a custom pool is found for a context, it REPLACES the archetype pool for
 * that context. Contexts not defined in the journal fall back to archetypes normally.
 *
 * Cache:
 *  - Parsed journal content is cached per page (invalidated on journal update).
 *  - Cache is a Map<pageId, ParsedDialogue> keyed by Foundry JournalEntryPage ID.
 *  - Hooks on updateJournalEntryPage and deleteJournalEntryPage clear the cache.
 */

import { MODULE_ID, getSetting, SETTINGS } from "./settings.js";
import { log } from "./utils.js";

// ─── Cache ────────────────────────────────────────────────────────────────────

/** @type {Map<string, ParsedDialogue>} */
const _pageCache = new Map();

// Invalidate cache when a journal page is updated or deleted
Hooks.on("updateJournalEntryPage", (page) => {
  _pageCache.delete(page.id);
  log(`[DialogueJournal] Cache invalidated for page "${page.name}" (${page.id})`);
});

Hooks.on("deleteJournalEntryPage", (page) => {
  _pageCache.delete(page.id);
});

// Also invalidate on journal name change (could affect lookup)
Hooks.on("updateJournalEntry", (journal) => {
  const journalName = getSetting(SETTINGS.DIALOGUE_JOURNAL_NAME) ?? "NCA Dialogue";
  if (journal.name === journalName) _pageCache.clear();
});

// ─── Context keys ─────────────────────────────────────────────────────────────

const VALID_CONTEXTS = new Set([
  "engagement", "attack", "damaged", "kill", "panic",
  "retreat", "tactical", "taunt", "death", "movement",
]);

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Look up custom dialogue phrases for a given actor and context.
 * Returns the custom phrase pool if found, or null to fall back to archetypes.
 *
 * @param {Actor}  actor
 * @param {string} context   dialogue context key
 * @returns {string[] | null}
 */
export function getCustomPhrases(actor, context) {
  if (!actor || !context) return null;
  if (!VALID_CONTEXTS.has(context)) return null;

  const page = _findDialoguePage(actor);
  if (!page) return null;

  const parsed = _getOrParsePage(page);
  const pool   = parsed[context];
  return (Array.isArray(pool) && pool.length > 0) ? pool : null;
}

/**
 * Returns true if any custom dialogue is defined for this actor.
 * @param {Actor} actor
 * @returns {boolean}
 */
export function hasCustomDialogue(actor) {
  return _findDialoguePage(actor) !== null;
}

/**
 * Get the configured dialogue journal entry (lazy lookup).
 * @returns {JournalEntry | null}
 */
export function getDialogueJournal() {
  try {
    const name = _journalName();
    return game.journal?.getName(name) ?? null;
  } catch {
    return null;
  }
}

/**
 * Open the dialogue journal for the GM to edit.
 * Creates it with a starter template if it doesn't exist.
 */
export async function openOrCreateDialogueJournal() {
  const name = _journalName();
  let journal = game.journal?.getName(name);

  if (!journal) {
    journal = await JournalEntry.create({
      name,
      pages: [{
        name:  game.i18n.localize("NCA.Journal.SampleName"),
        type:  "text",
        title: { show: true, level: 1 },
        text: {
          format:  1,
          content: _starterTemplate(),
        },
      }],
      flags: { [MODULE_ID]: { dialogueJournal: true } },
    });
    ui.notifications?.info(`NCA: Created dialogue journal "${name}". Add pages named after your NPC actors.`);
  }

  journal?.sheet?.render(true);
}

// ─── Internal lookup ──────────────────────────────────────────────────────────

function _journalName() {
  try {
    return getSetting(SETTINGS.DIALOGUE_JOURNAL_NAME) ?? "NCA Dialogue";
  } catch {
    return "NCA Dialogue";
  }
}

/**
 * Find the JournalEntryPage that matches this actor.
 * Lookup: actor ID → actor name → group tag.
 * @param {Actor} actor
 * @returns {JournalEntryPage | null}
 */
function _findDialoguePage(actor) {
  try {
    const journal = getDialogueJournal();
    if (!journal) return null;

    const pages = journal.pages?.contents ?? [];
    if (pages.length === 0) return null;

    // 1. Exact actor ID match
    const byId = pages.find(p => p.name?.trim() === actor.id);
    if (byId) return byId;

    // 2. Actor name (case-insensitive)
    const actorNameLower = (actor.name ?? "").toLowerCase().trim();
    const byName = pages.find(p => p.name?.toLowerCase().trim() === actorNameLower);
    if (byName) return byName;

    // 3. Group tag from actor flag
    const groupTag = actor.flags?.[MODULE_ID]?.dialogueGroup
      ?? actor.flags?.["5e-npc-combat-automation"]?.dialogueGroup;
    if (groupTag) {
      const byTag = pages.find(p => p.name?.toLowerCase().trim() === groupTag.toLowerCase().trim());
      if (byTag) return byTag;
    }

    return null;
  } catch (err) {
    log(`[DialogueJournal] Page lookup error: ${err.message}`, "warn");
    return null;
  }
}

// ─── Parsing ──────────────────────────────────────────────────────────────────

/**
 * @typedef {{ [context: string]: string[] }} ParsedDialogue
 */

/**
 * Get or build the parsed dialogue map for a page.
 * @param {JournalEntryPage} page
 * @returns {ParsedDialogue}
 */
function _getOrParsePage(page) {
  if (_pageCache.has(page.id)) return _pageCache.get(page.id);

  const raw = _extractTextFromPage(page);
  const parsed = _parseDialogueText(raw);

  _pageCache.set(page.id, parsed);
  log(`[DialogueJournal] Parsed page "${page.name}": ${Object.keys(parsed).join(", ")}`);
  return parsed;
}

/**
 * Extract plain text from a journal page regardless of format.
 * Handles Foundry's HTML prosemirror format and plain text pages.
 * @param {JournalEntryPage} page
 * @returns {string}
 */
function _extractTextFromPage(page) {
  try {
    // Foundry V13 text pages store content as HTML in page.text.content
    const html = page.text?.content ?? page.text?.markdown ?? "";
    if (!html) return "";

    // Strip HTML tags — we only need the text content for parsing
    const div = document.createElement("div");
    div.innerHTML = html;

    // Preserve heading structure: convert <h1-6> to ##-style markers
    for (const el of div.querySelectorAll("h1,h2,h3,h4,h5,h6")) {
      el.textContent = `## ${el.textContent.trim()}`;
    }

    // Each paragraph / list item on its own line
    for (const el of div.querySelectorAll("p,li,br")) {
      el.after(document.createTextNode("\n"));
    }

    return div.textContent ?? "";
  } catch (err) {
    log(`[DialogueJournal] Text extraction error: ${err.message}`, "warn");
    return page.text?.content ?? "";
  }
}

/**
 * Parse the ## header / phrase-list format into a context → phrases map.
 *
 * Rules:
 *  - Lines starting with ## begin a new context section
 *  - The word after ## is the context key (e.g. "engagement", "attack")
 *  - All non-empty, non-comment lines below the header are phrases
 *  - Lines starting with # (single) are comments and are ignored
 *  - Blank lines are ignored
 *  - Unknown context headers are silently ignored (no error)
 *
 * @param {string} text
 * @returns {ParsedDialogue}
 */
function _parseDialogueText(text) {
  const result = {};
  let currentContext = null;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    // Section header: ## contextKey [optional description]
    if (line.startsWith("##")) {
      const parts = line.replace(/^#+/, "").trim().split(/\s+/);
      const key   = parts[0]?.toLowerCase();
      currentContext = VALID_CONTEXTS.has(key) ? key : null;
      continue;
    }

    // Skip comments and bare markdown headings
    if (line.startsWith("#")) continue;

    // Skip Foundry-inserted rich text artifacts
    if (line.startsWith("<") || line.startsWith("@")) continue;

    // Add phrase to current context
    if (currentContext && line.length > 0 && line.length < 300) {
      if (!result[currentContext]) result[currentContext] = [];
      result[currentContext].push(line);
    }
  }

  return result;
}

// ─── Starter template ─────────────────────────────────────────────────────────

function _starterTemplate() {
  return `<p>This is the NCA Custom Dialogue journal. Each page defines custom combat phrases for a specific NPC actor or group.</p>
<p><strong>Page naming:</strong> Name the page after your NPC's exact actor name, actor ID, or a group tag set in the NPC's flags (<code>npcAi.dialogueGroup</code>).</p>
<p><strong>Format:</strong> Use <code>## context</code> headers followed by one phrase per line.</p>
<p><strong>Available contexts:</strong> engagement, attack, damaged, kill, panic, retreat, tactical, taunt, death, movement</p>
<hr />
<h2>engagement</h2>
<p>For the Crown!<br/>Hold the gate!<br/>We die where we stand!</p>
<h2>attack</h2>
<p>Have at thee!<br/>Strike!<br/>Drive them back!</p>
<h2>damaged</h2>
<p>Argh!<br/>I'll hold!<br/>Don't falter!</p>
<h2>kill</h2>
<p>One down!<br/>Hold the line!<br/>Keep moving!</p>
<h2>death</h2>
<p>...for the Crown...<br/>...hold...</p>`;
}
