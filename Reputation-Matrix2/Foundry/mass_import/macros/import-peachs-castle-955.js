// Waluipedia: pull the Peach's Castle 955 BF scene kit straight from the repo.
// Script macro — needs the Mass Import module enabled and the token folder
// Reputation-Matrix2/portraits/peachs-castle-955/ copied into Data/portraits/.
// Re-running updates the 30 actors in place (ids are stable) — no duplicates.
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
const url = "https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/peachs-castle-955/import.json";
return api.openImportDialog({ url });
