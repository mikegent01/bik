/**
 * constants.js
 * Single source of truth for module identity. Import MODULE_ID from here —
 * never redeclare it. settings.js re-exports these for back-compat with
 * older import sites.
 */

export const MODULE_ID = "5e-npc-combat-automation";

/**
 * Pre-rename module id. Read-only fallback for flags written before 0.18.
 * Never write to it.
 */
export const LEGACY_MODULE_ID = "5e-npc-combat-automation";

/** Socket namespace — requires `"socket": true` in module.json to relay. */
export const SOCKET_EVENT = `module.${MODULE_ID}`;
