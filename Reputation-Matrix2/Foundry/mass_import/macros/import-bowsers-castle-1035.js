// Waluipedia: pull the Bowser's Castle 1035 BF session kit straight from the repo
// (Session III of the coup chain — Bowser's line, Fawthful's forces, the
// remnant at the track; Omega Bowser is in it).
// Script macro — needs the Mass Import module enabled and the token folders
// Reputation-Matrix2/portraits/bowsers-castle-1035/ and portraits/peachs-castle-955/
// copied into Data/portraits/ (or the launcher's art URL set in the module).
// Re-running updates the 27 actors in place (ids are stable) — no duplicates.
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
const url = "https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/bowsers-castle-1035/import.json";
return api.openImportDialog({ url });
