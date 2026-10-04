// Waluipedia: import every actor JSON under a directory inside your Foundry
// Data folder — subfolders become Actors folders. Edit DIR, or leave it and
// pick the folder in the dialog. Script macro — needs the Mass Import module.
const DIR = "npc/waluipedia/actors/cast";   // the repo's actors/ tree, linked into Data by `python3 tools/foundry-studio.py link`
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
return api.openImportDialog({ url: DIR, folderMode: "dirs" });
