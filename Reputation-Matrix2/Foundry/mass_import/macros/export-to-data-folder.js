// Waluipedia: write every actor into your Foundry Data folder as a tree —
// npc/waluipedia/<world>/<Folder>/<Subfolder>/fvtt-Actor-<name>-<id>.json plus
// import.json with everything. Re-import the directory, or let
// tools/foundry-bridge.py read it. Script macro — needs the Mass Import module.
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
const out = await api.exportToDataFolder({ dir: `npc/waluipedia/${game.world.id}`, tree: true, combined: true });
ui.notifications.info(`Wrote ${out.files.length} files under ${out.dir}`);
return out;
