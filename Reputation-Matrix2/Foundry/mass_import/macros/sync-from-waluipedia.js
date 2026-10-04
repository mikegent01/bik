// Waluipedia: ONE CLICK — find the newest packet (your Foundry Data folder →
// the start.py launcher → GitHub), import it into its folders, apply the
// changes (player characters replacing their NPC statblocks, XP at the
// ledger, spoils of war), show a summary. Script macro — needs the module.
// Edit SCOPE: "players" (the Players folder), "world", or "cast".
const SCOPE = "players";
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
return api.syncFromWaluipedia({ scope: SCOPE });
