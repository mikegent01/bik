// Waluipedia: export EVERY actor to one JSON, folders included.
// Script macro. Uses the Mass Import module when it is enabled; otherwise the
// inline fallback below produces the same payload (format waluipedia-actors/1).
const MODULE_ID = "waluipedia-mass-import";
const api = game.modules.get(MODULE_ID)?.api;
if (api) return api.exportAllActors();

const folders = game.folders.filter((f) => f.type === "Actor");
const pathOf = (folder) => {
  const path = [];
  for (let f = folder; f; f = f.folder ?? null) path.unshift(f.name);
  return path;
};
const actors = game.actors.contents.map((a) => {
  const data = a.toObject();
  data.flags = data.flags ?? {};
  data.flags[MODULE_ID] = { ...(data.flags[MODULE_ID] ?? {}), folderPath: pathOf(a.folder) };
  return data;
});
const payload = {
  format: "waluipedia-actors/1",
  exportedFrom: game.world.id,
  exportedAt: new Date().toISOString(),
  system: game.system.id,
  systemVersion: game.system.version,
  coreVersion: game.version,
  actorCount: actors.length,
  folderCount: folders.length,
  folders: folders.map((f) => ({ _id: f.id, name: f.name, type: "Actor", folder: f.folder?.id ?? null, sorting: f.sorting, sort: f.sort, color: f.color?.css ?? null, path: pathOf(f) })),
  actors,
};
const json = JSON.stringify(payload, null, 2);
const save = foundry.utils.saveDataToFile ?? globalThis.saveDataToFile;
if (save) save(json, "application/json", `${game.world.id}-all-actors.json`);
else {
  const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url; link.download = `${game.world.id}-all-actors.json`; link.click();
  URL.revokeObjectURL(url);
}
ui.notifications.info(`Exported ${actors.length} actors (${folders.length} folders) to JSON.`);
