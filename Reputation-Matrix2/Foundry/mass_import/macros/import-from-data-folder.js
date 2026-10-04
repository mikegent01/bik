// Waluipedia: import every actor JSON under a directory inside your Foundry
// Data folder — subfolders become Actors folders. Edit DIR, or leave it and
// pick the folder in the dialog. Script macro — needs the Mass Import module.
const DIR = "npc/waluipedia/cast";   // e.g. the repo's actors/cast linked by tools/foundry-studio.py
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
return api.openImportDialog({ url: DIR, folderMode: "dirs" });
