// Waluipedia: EVERYTHING, one call — find the newest packet (your Foundry
// Data folder → the start.py launcher → GitHub), import the world mirror, the
// generated cast and the 955 BF court into their coloured folders, merge
// duplicate folders, remove empty ones, show a summary. Same as the Sync
// button in the Actors sidebar (the sync on load is off since 1.9.3).
// Script macro — needs the module. REVIEW = true shows the table first.
const REVIEW = false;
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
return api.syncFromWaluipedia({ review: REVIEW, trigger: "macro" });
