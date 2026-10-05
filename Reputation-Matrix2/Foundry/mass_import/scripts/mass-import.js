/**
 * Waluipedia Mass Import — the entry Foundry loads (module.json → esmodules).
 *
 * It stays tiny and never needs to change: the module proper lives in
 * mass-import-core.js and is imported here with a fresh query string on
 * every world load, so the copy tools/sheets-suite.py puts under
 * modules/waluipedia-mass-import/ runs after a plain reload (F5) — Foundry
 * only re-reads module.json when the world is relaunched, and the browser
 * keeps a script it cached under the old "?v=" for as long as it likes;
 * neither can hold an old core back any more. (The GM's world ran module
 * 1.2.0 through three installs of 1.3, 1.4 and 1.5 that way.)
 *
 * The hooks are registered synchronously, here, before "init" can fire; each
 * one waits for the core and hands over. Nothing else lives in this file.
 */
const MODULE_ID = "waluipedia-mass-import";
const core = import(`./mass-import-core.js?v=${Date.now()}`);
core.catch((err) => console.error(`[${MODULE_ID}] could not load scripts/mass-import-core.js — reinstall the module (python3 tools/sheets-suite.py)`, err));
const hand = (name) => (...args) => core.then((m) => m[name](...args)).catch((err) => console.error(`[${MODULE_ID}] ${name}:`, err));
Hooks.once("init", hand("onInit"));
Hooks.once("ready", hand("onReady"));
Hooks.on("renderActorDirectory", hand("onRenderActorDirectory"));
