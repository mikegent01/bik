/**
 * utils.js
 * Shared utility functions used throughout the module.
 */

import { getSetting, SETTINGS, MODULE_ID } from "./settings.js";

// ─── Logging ─────────────────────────────────────────────────────────────────

/**
 * Legacy log helper — still used by non-movement scripts.
 * Respects the new pathfindingDebugLevel setting (minimal or above = enabled).
 * Always logs errors/warnings regardless of setting.
 * @param {string} msg
 * @param {"log"|"warn"|"error"} [level="log"]
 */
export function log(msg, level = "log") {
  if (level === "error" || level === "warn") {
    console[level](`[NCA] ${msg}`);
    return;
  }
  let enabled = false;
  try {
    const dlevel = getSetting(SETTINGS.PATHFINDING_DEBUG_LEVEL) ?? "minimal";
    enabled = dlevel !== "off";
    if (!enabled) {
      // Fallback: honour legacy verboseLogging boolean if set
      enabled = getSetting(SETTINGS.VERBOSE_LOGGING) ?? false;
    }
  } catch {
    enabled = true; // before settings registered
  }
  if (enabled) console.log(`[NCA] ${msg}`);
}

// ─── Timing ──────────────────────────────────────────────────────────────────

/**
 * Async delay helper.
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Distance ────────────────────────────────────────────────────────────────

/**
 * Measure the distance in feet between two tokens using Foundry's v13 grid API.
 * Uses token.center for accurate centre-point measurement.
 * Falls back to a pixel-based estimate if canvas measurement is unavailable.
 *
 * @param {Token} tokenA
 * @param {Token} tokenB
 * @returns {number} distance in feet
 */
export function distanceBetweenTokens(tokenA, tokenB) {
  if (!tokenA || !tokenB) return Infinity;
  try {
    const a = tokenA.center ?? { x: tokenA.x + (tokenA.w ?? 0) / 2, y: tokenA.y + (tokenA.h ?? 0) / 2 };
    const b = tokenB.center ?? { x: tokenB.x + (tokenB.w ?? 0) / 2, y: tokenB.y + (tokenB.h ?? 0) / 2 };
    // canvas.grid.measurePath is the v13-canonical distance API; no Ray needed.
    const result = canvas.grid.measurePath([a, b]);
    if (typeof result?.distance === "number") return result.distance;
    return _pixelDistance(tokenA, tokenB);
  } catch {
    return _pixelDistance(tokenA, tokenB);
  }
}

function _pixelDistance(tokenA, tokenB) {
  const gridSize  = canvas.grid.size;
  const gridScale = canvas.grid.distance; // feet per grid unit
  const ax = tokenA.center?.x ?? tokenA.x + (tokenA.w ?? 0) / 2;
  const ay = tokenA.center?.y ?? tokenA.y + (tokenA.h ?? 0) / 2;
  const bx = tokenB.center?.x ?? tokenB.x + (tokenB.w ?? 0) / 2;
  const by = tokenB.center?.y ?? tokenB.y + (tokenB.h ?? 0) / 2;
  const pixels = Math.hypot(ax - bx, ay - by);
  return (pixels / gridSize) * gridScale;
}

// ─── Item helpers ─────────────────────────────────────────────────────────────

/**
 * Resolve which attack flavours an item is capable of.
 *
 * dnd5e 4.0 deleted `Item5e#system.actionType`. It survives ONLY as a getter on
 * individual activities. Verified against dnd5e 5.3.3 source:
 *   - module/data/activity/attack-data.mjs   attack.type.{value,classification}
 *                                            get actionType()  (composite)
 *   - module/data/item/weapon.mjs:214        get attackType() -> "melee"|"ranged"|null
 *   - module/data/item/weapon.mjs:488-490    prepared data fills range.reach with
 *                                            10 (with the "rch" property) else 5
 *                                            for melee, and nulls it for ranged.
 *
 * Reference data (packs/_source/monsters/humanoid/bandit.yml, dnd5e 5.3.3):
 *   Scimitar        system.actionType absent  range {value:null, reach:null}
 *                   activity.attack.type = { value:"melee",  classification:"weapon" }
 *   Light Crossbow  system.actionType absent  range {value:80,  long:320}
 *                   activity.attack.type = { value:"ranged", classification:"weapon" }
 *
 * An item may be BOTH — a thrown melee weapon (dagger, handaxe) can be swung or
 * hurled, so callers must not assume the two are mutually exclusive.
 *
 * @param {Item5e} item
 * @returns {{melee: boolean, ranged: boolean}}
 */
function getAttackFlavours(item) {
  const out = { melee: false, ranged: false };
  if (!item) return out;

  // 1. Activities — authoritative on dnd5e 4.0+.
  for (const activity of getActivities(item)) {
    const value = activity?.attack?.type?.value;
    if (value === "melee")  out.melee  = true;
    if (value === "ranged") out.ranged = true;

    // Composite getter, for activity shapes that expose it instead.
    const at = activity?.actionType;
    if (at === "mwak" || at === "msak") out.melee  = true;
    if (at === "rwak" || at === "rsak") out.ranged = true;
  }

  // 2. Weapon-level classification — catches weapons with no attack activity.
  //    Note: weaponTypeMap has no entry for "natural"/"improv", so this returns
  //    null for claws and bites; step 1 covers those.
  if (!out.melee && !out.ranged) {
    const attackType = item.system?.attackType;
    if (attackType === "melee")  out.melee  = true;
    if (attackType === "ranged") out.ranged = true;
  }

  // 3. Legacy dnd5e <= 3.x worlds.
  if (!out.melee && !out.ranged) {
    const legacy = item.system?.actionType;
    if (legacy === "mwak" || legacy === "msak") out.melee  = true;
    if (legacy === "rwak" || legacy === "rsak") out.ranged = true;
  }

  // 4. Last resort — infer from the range block (spells, homebrew features).
  if (!out.melee && !out.ranged) {
    const range = item.system?.range ?? {};
    if (Number(range.value) > 0) out.ranged = true;
    if (Number(range.reach) > 0) out.melee  = true;
    if (range.units === "touch")  out.melee  = true;
  }

  // Thrown melee weapons can also be used at range.
  if (out.melee && item.system?.properties?.has?.("thr") && Number(item.system?.range?.value) > 0) {
    out.ranged = true;
  }

  return out;
}

/**
 * Get the effective MAXIMUM attack range (in feet) for an item — i.e. "can this
 * item reach a target at distance N". For a thrown melee weapon this is the
 * throw range, not the reach; use getItemReach() when you specifically need the
 * melee reach (opportunity attacks, reach checks).
 *
 * @param {Item5e} item
 * @returns {number} range in feet
 */
export function getItemRange(item) {
  if (!item) return 5;
  const range = item.system?.range ?? {};
  const flav  = getAttackFlavours(item);

  // Ranged (including thrown melee weapons) — the shot/throw range.
  if (flav.ranged && Number(range.value) > 0) return Number(range.value);

  // Melee — prepared data populates reach; fall back to the "rch" property.
  // NOTE: the property key is "rch", NOT "reach". The previous code tested
  // properties.has("reach"), which never matched, so every reach weapon
  // (glaive, whip, halberd, pike) reported 5ft instead of 10ft.
  if (flav.melee) return getItemReach(item);

  // Non-attack items (utility/save spells, features): honour a declared range.
  if (Number(range.value) > 0) return Number(range.value);
  if (range.units === "touch") return 5;

  // Fall back to the longest activity range before giving up.
  let best = 0;
  for (const activity of getActivities(item)) {
    const v = Number(activity?.range?.value);
    if (Number.isFinite(v) && v > best) best = v;
  }
  return best > 0 ? best : 5;
}

/**
 * Get the melee reach (in feet) of an item. Ignores thrown ranges.
 *
 * @param {Item5e} item
 * @returns {number} reach in feet, minimum 5
 */
export function getItemReach(item) {
  const reach = Number(item?.system?.range?.reach);
  if (Number.isFinite(reach) && reach > 0) return reach;
  return item?.system?.properties?.has?.("rch") ? 10 : 5;
}

/**
 * Determine if an item can make a melee attack.
 * A thrown weapon reports true here AND from isRangedItem().
 * @param {Item5e} item
 * @returns {boolean}
 */
export function isMeleeItem(item) {
  return getAttackFlavours(item).melee;
}

/**
 * Determine if an item can make a ranged attack.
 * A thrown weapon reports true here AND from isMeleeItem().
 * @param {Item5e} item
 * @returns {boolean}
 */
export function isRangedItem(item) {
  return getAttackFlavours(item).ranged;
}

/**
 * True only for items that can ONLY attack at range (bow, crossbow, fire bolt) —
 * i.e. ranged and not also usable in melee. Use this where a thrown dagger
 * should still count as a melee option.
 * @param {Item5e} item
 * @returns {boolean}
 */
export function isRangedOnlyItem(item) {
  const flav = getAttackFlavours(item);
  return flav.ranged && !flav.melee;
}

/**
 * Normalise a string for fuzzy name matching.
 * @param {string} str
 * @returns {string}
 */
/**
 * True when a token's name should be treated as a PROPER NOUN — i.e. narrated
 * as "Kaelen" rather than "the Kaelen".
 *
 * Signals, in order:
 *   1. Player characters and player-owned actors are always proper.
 *   2. Linked tokens (actorLink === true) are proper. This is the standard
 *      Foundry convention: generic monsters are unlinked copies ("Goblin 2"),
 *      while named/important NPCs are linked to a single actor.
 *
 * Anything else is treated as a generic creature and keeps its article.
 *
 * @param {Token|TokenDocument|null} token
 * @returns {boolean}
 */
export function isProperName(token) {
  try {
    if (!token) return false;
    const doc   = token.document ?? token;
    const actor = token.actor ?? doc?.actor ?? null;

    if (actor?.type === "character") return true;
    if (actor?.hasPlayerOwner) return true;
    if (doc?.actorLink === true) return true;

    return false;
  } catch {
    return false;   // never let narration flavour break a turn
  }
}

export function normalize(str) {
  return String(str).toLowerCase().trim();
}

/**
 * Return the activities of an item as a plain array.
 *
 * dnd5e v3+ stores activities in a Foundry Collection (extends Map). Calling
 * Object.values()/Object.keys() on a Map returns [] because the Map's entries
 * are NOT own-enumerable properties — only the inherited Map prototype methods
 * are. This is the single source of truth helper used by every file that needs
 * to iterate activities; without it, v3 stat blocks silently fail capability
 * detection.
 *
 * Supported shapes:
 *   - Plain array            (unusual but legal)
 *   - Foundry Collection     (.contents array property — dnd5e v3+)
 *   - Plain Map              (fallback)
 *   - Plain object           (legacy / migrated worlds — entries are values)
 *
 * @param {Item5e} item
 * @returns {object[]}
 */
export function getActivities(item) {
  const acts = item?.system?.activities;
  if (!acts) return [];
  if (Array.isArray(acts)) return acts;
  // Foundry Collection — .contents is a defined array of values
  if (Array.isArray(acts.contents)) return acts.contents;
  // Plain Map — spread its values
  if (typeof acts.values === "function") {
    try { return [...acts.values()]; } catch (_) { /* fall through */ }
  }
  // Plain object — last resort (also handles migrated v2 → v3 worlds)
  try { return Object.values(acts).filter(v => v && typeof v === "object"); }
  catch (_) { return []; }
}

/**
 * Determine if an item/feature/spell has any offensive capability.
 * Detection is capability-based and system-agnostic:
 *   1. Explicit dnd5e actionType values
 *   2. item.hasAttack flag (computed by dnd5e)
 *   3. v13 Activities with attack/damage/activation data
 *   4. Generic damage formula / attackBonus fields
 *
 * @param {Item5e} item
 * @returns {boolean}
 */
function isOffensiveItem(item) {
  // 1. Explicit attack action types (dnd5e legacy + current)
  const actionType = item.system?.actionType;
  if (["mwak", "rwak", "msak", "rsak"].includes(actionType)) return true;

  // 2. dnd5e computed flag
  if (item.hasAttack) return true;

  // 3. v13 Activity-based attack detection
  for (const activity of getActivities(item)) {
    if (activity?.type === "attack" || activity?.attack) return true;
  }

  // 4. Stable attack bonus fallback for spells/features with attack rolls.
  if (item.system?.attackBonus !== undefined && item.system?.attackBonus !== null &&
      item.system?.attackBonus !== "" && item.system?.attackBonus !== 0) return true;

  return false;
}

function isUsableActionItem(item) {
  if (!item) return false;
  if (["class", "subclass", "background", "species", "container", "loot", "equipment"].includes(item.type)) return false;
  if (isOffensiveItem(item)) return true;

  const activities = getActivities(item);
  if (activities.length > 0 && activities.some(a => {
    if (!a) return false;
    if (["attack", "damage", "save", "heal", "utility", "summon"].includes(a.type)) return true;
    return !!(a.activation || a.damage || a.save || a.consumption);
  })) return true;

  const activation = item.system?.activation;
  if (activation?.type && activation.type !== "none") return true;

  const uses = item.system?.uses;
  if (uses && (typeof uses.max !== "undefined" || typeof uses.value !== "undefined")) return true;

  return false;
}

/**
 * Get all items on an actor that are capable of making an offensive action.
 * Covers weapons, features, spells, feats, and activity-based items.
 *
 * @param {Actor5e} actor
 * @returns {Item5e[]}
 */
export function getAttackItems(actor) {
  // Heavy introspection log — only build it if a verbose-or-higher debug level
  // is active. The previous unconditional JSON.stringify happened on every NPC
  // turn at "minimal" level, which is the default — measurable cost on actors
  // with 30+ items (compendium dragons, demigods, etc.).
  if (_verboseLoggingEnabled()) {
    log("Scanning offensive items: " + JSON.stringify(actor.items.map(i => ({
      name: i.name,
      type: i.type,
      actionType: i.system?.actionType,
      hasAttack: i.hasAttack,
    }))));
  }

  return actor.items.filter(isOffensiveItem);
}

export function getUsableActionItems(actor) {
  if (_verboseLoggingEnabled()) {
    log("Scanning usable action items: " + JSON.stringify(actor.items.map(i => ({
      name: i.name,
      type: i.type,
      actionType: i.system?.actionType,
      hasAttack: i.hasAttack,
      activities: getActivities(i).map(a => a?.type).filter(Boolean),
    }))));
  }

  return actor.items.filter(isUsableActionItem);
}

/**
 * Returns true when the pathfinding debug level is "verbose" or "trace".
 * Used to gate expensive per-actor JSON introspection in hot paths.
 */
function _verboseLoggingEnabled() {
  try {
    const dlevel = getSetting(SETTINGS.PATHFINDING_DEBUG_LEVEL);
    return dlevel === "verbose" || dlevel === "trace";
  } catch {
    return false;
  }
}

// ─── Chat ────────────────────────────────────────────────────────────────────

/**
 * Post a styled automation chat message.
 * Only posts if chat logging is enabled.
 *
 * @param {string} body   - Message body text.
 * @param {object} [opts] - Optional overrides.
 */
export async function postChatMessage(body, opts = {}) {
  if (!getSetting(SETTINGS.ENABLE_CHAT_LOG)) return;

  const content = `
    <div class="nca-msg-header">⚔ NPC Automation</div>
    <div class="nca-msg-body">${body}</div>
  `;

  // NOTE: `type` is a DocumentTypeField (subtype string) as of V12; the numeric
  // presentation value lives on `style`. V13 shimmed numeric `type` with a
  // deprecation warning — V14 removed the shim and now throws on validation.
  await ChatMessage.create({
    content,
    speaker: opts.speaker ?? ChatMessage.getSpeaker(),
    flags: { [MODULE_ID]: { automated: true } },
    style: CONST.CHAT_MESSAGE_STYLES?.OTHER ?? 0,
    ...opts,
  });
}
