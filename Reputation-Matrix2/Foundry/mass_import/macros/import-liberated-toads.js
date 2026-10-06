// Waluipedia: pull the Liberated Toads cohort statblocks straight from the repo
// (the Pond Patrol docket's rosters — Pond Patrol, Chroniclers, Crafters,
// Wardens, Menders, Scouts toad by toad, plus generic Barrel Survivors and
// Unassigned; 89 actors filed as Liberated Toads / <cohort>).
// Script macro — needs the Mass Import module enabled and the role plates
// Reputation-Matrix2/portraits/liberated-toads/ copied into Data/portraits/
// (the sheets suite's install-images does it).
// Re-running updates the actors in place (ids are stable) — no duplicates.
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
const url = "https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/liberated-toads/import.json";
return api.openImportDialog({ url });
