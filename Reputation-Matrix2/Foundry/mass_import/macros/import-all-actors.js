// Waluipedia: open the Mass Import dialog (file upload, URL, or Data path).
// Script macro — needs the Mass Import module enabled.
const api = game.modules.get("waluipedia-mass-import")?.api;
if (!api) return ui.notifications.error("Enable the module “Waluipedia Mass Import / Export” first.");
return api.openImportDialog();
