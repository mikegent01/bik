/**
 * Waluipedia Mass Import / Export — the Foundry end of the repo bridge.
 *
 *   Export   every actor in the world (or one folder subtree) either to a
 *            single JSON download or INTO THE FOUNDRY DATA FOLDER as a tree:
 *            one file per actor, subdirectories mirroring the Actors sidebar,
 *            plus a combined import.json. Each actor carries
 *            flags["waluipedia-mass-import"].folderPath
 *            (["Peach's Castle 955 BF", "The Court"]) so the folder tree survives
 *            the round trip without depending on folder ids.
 *   Import   from a file, a URL, a known repo packet, or a PATH INSIDE DATA —
 *            a single JSON or a whole directory (subfolders detected and used
 *            as the Foundry folders). Shapes: the module's own export, the old
 *            `{ actors: [...] }` macro export, a bare array, or one actor. A
 *            review table (the visualizer) lists every actor first — untick,
 *            rename, move between folders, set a folder for a whole selection —
 *            then folders are created from folderPath, actors are matched by
 *            _id (falling back to name + type) and UPDATED IN PLACE — embedded
 *            items and effects are synced, so re-importing never duplicates.
 *            Images are HEAD-checked against the server and reported (or
 *            swapped for a placeholder on request). Dry run available.
 *
 * Buttons appear in the Actors sidebar header for the GM; the same functions
 * are on game.modules.get("waluipedia-mass-import").api for macros. All Foundry
 * globals are looked up at call time so the pure parts can be unit-tested in
 * node (tools/tests/test-mass-import-module.mjs).
 */

export const MODULE_ID = "waluipedia-mass-import";
export const FORMAT = "waluipedia-actors/1";
export const RAW_BASE = "https://raw.githubusercontent.com/mikegent01/bik/gh-pages/";
/** The repo's ready-made import-all files (the Import dialog lists them). */
export const KNOWN_PACKETS = [
  { id: "cast", label: "Waluipedia Cast — every generated character sheet (152)", path: "Reputation-Matrix2/actors/cast/import.json" },
  { id: "peachs-castle-955", label: "Peach's Castle 955 BF — the court + Bowser's incursion (30)", path: "Reputation-Matrix2/actors/peachs-castle-955/import.json" },
];
export const packetUrl = (p) => RAW_BASE + p.path;
const PLACEHOLDER_ACTOR = "icons/svg/mystery-man.svg";
const PLACEHOLDER_ITEM = "icons/svg/item-bag.svg";

/* ----------------------------------------------------------------- utils */

const G = () => globalThis;
const clone = (v) => (G().foundry?.utils?.deepClone ? G().foundry.utils.deepClone(v) : JSON.parse(JSON.stringify(v)));
const notify = (kind, msg) => {
  const n = G().ui?.notifications;
  if (n && typeof n[kind] === "function") n[kind](msg);
  else console.log(`[${MODULE_ID}] ${kind}: ${msg}`);
};
const escapeHtml = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/** "A / B / C" or "A/B/C" -> ["A", "B", "C"] */
export function splitPath(text) {
  return String(text ?? "").split(/\s*\/\s*/).map((s) => s.trim()).filter(Boolean);
}

/** Walk a Folder document (or plain {name, folder}) up to the root. */
export function folderPathOf(folder, foldersById = null) {
  const path = [];
  const seen = new Set();
  let f = folder;
  while (f && !seen.has(f)) {
    seen.add(f);
    path.unshift(f.name);
    const parent = f.folder ?? f.parent ?? null;
    if (parent && typeof parent === "object") f = parent;
    else if (parent && foldersById) f = foldersById.get(parent) ?? null;
    else f = null;
  }
  return path;
}

/* ---------------------------------------------------------------- export */

/**
 * Pure: build the export payload from plain actor objects and folder objects.
 * @param {object[]} actorObjects  results of actor.toObject()
 * @param {object[]} folderObjects {_id, name, folder (parent id), type, sorting, color, sort}
 */
export function buildExportPayload(actorObjects, folderObjects, meta = {}) {
  const byId = new Map(folderObjects.map((f) => [f._id, f]));
  const actors = actorObjects.map((raw) => {
    const a = clone(raw);
    const path = folderPathOf(a.folder ? byId.get(a.folder) : null, byId);
    a.flags = a.flags ?? {};
    a.flags[MODULE_ID] = { ...(a.flags[MODULE_ID] ?? {}), folderPath: path };
    return a;
  });
  return {
    format: FORMAT,
    exportedFrom: meta.world ?? null,
    exportedAt: meta.now ?? new Date().toISOString(),
    system: meta.system ?? null,
    systemVersion: meta.systemVersion ?? null,
    coreVersion: meta.coreVersion ?? null,
    actorCount: actors.length,
    folderCount: folderObjects.length,
    folders: folderObjects.map((f) => ({
      _id: f._id, name: f.name, type: "Actor", folder: f.folder ?? null,
      sorting: f.sorting ?? "a", sort: f.sort ?? 0, color: f.color ?? null,
      path: folderPathOf(f, byId),
    })),
    actors,
  };
}

function worldFolderObjects() {
  const game = G().game;
  return (game?.folders?.contents ?? game?.folders ?? [])
    .filter((f) => f.type === "Actor")
    .map((f) => ({
      _id: f.id ?? f._id, name: f.name, type: "Actor",
      folder: f.folder?.id ?? f.folder?._id ?? (typeof f.folder === "string" ? f.folder : null),
      sorting: f.sorting, sort: f.sort, color: f.color?.css ?? f.color ?? null,
    }));
}

function saveJson(text, filename) {
  const g = G();
  const saver = g.foundry?.utils?.saveDataToFile ?? g.saveDataToFile;
  if (typeof saver === "function") return saver(text, "application/json", filename);
  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Export actors. options.folderId limits the export to one folder subtree;
 * options.download=false returns the payload without saving a file.
 */
export async function exportAllActors(options = {}) {
  const game = G().game;
  const folders = worldFolderObjects();
  const byId = new Map(folders.map((f) => [f._id, f]));
  let actors = game.actors.contents ?? [...game.actors.values()];
  if (options.folderId) {
    const inside = (fid) => {
      let f = byId.get(fid);
      while (f) { if (f._id === options.folderId) return true; f = f.folder ? byId.get(f.folder) : null; }
      return false;
    };
    actors = actors.filter((a) => inside(a.folder?.id ?? a.folder?._id ?? a.folder));
  }
  if (options.types?.length) actors = actors.filter((a) => options.types.includes(a.type));
  const payload = buildExportPayload(actors.map((a) => a.toObject()), folders, {
    world: game.world?.id, system: game.system?.id, systemVersion: game.system?.version,
    coreVersion: game.version, now: options.now,
  });
  if (options.download !== false) {
    const stem = options.folderId ? `${game.world.id}-${slug(byId.get(options.folderId)?.name ?? "folder")}` : `${game.world.id}-all-actors`;
    saveJson(JSON.stringify(payload, null, 2), `${stem}.json`);
    notify("info", `Exported ${payload.actors.length} actors (${payload.folders.length} folders) to ${stem}.json`);
  }
  return payload;
}

const slug = (s) => String(s).toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ---------------------------------------------------------------- import */

/**
 * Accept any of the supported shapes and return {meta, folders, entries}
 * where entries = [{data, folderPath}].
 */
export function normalizeImport(raw) {
  let meta = {}, folders = [], actors = [];
  if (Array.isArray(raw)) actors = raw;
  else if (raw && Array.isArray(raw.actors)) {
    ({ actors } = raw);
    folders = raw.folders ?? [];
    meta = Object.fromEntries(Object.entries(raw).filter(([k]) => k !== "actors" && k !== "folders"));
  }
  else if (raw && raw.name && raw.type) actors = [raw];
  else throw new Error("Not an actor export: expected an actor, an array of actors, or { actors: [...] }");
  const byId = new Map(folders.map((f) => [f._id, f]));
  const entries = actors.filter((a) => a && typeof a === "object").map((a) => {
    const flagged = a.flags?.[MODULE_ID]?.folderPath;
    let folderPath = Array.isArray(flagged) ? flagged.map(String) : null;
    if (!folderPath) {
      const fid = typeof a.folder === "string" ? a.folder : (a.folder?.id ?? a.folder?._id ?? null);
      if (!fid) folderPath = [];                                   // really at the root
      else if (byId.has(fid)) folderPath = folderPathOf(byId.get(fid), byId);
      else folderPath = null;                                      // id without a name: unknown, keep as is
    }
    return { data: a, folderPath };
  });
  return { meta, folders, entries };
}

async function fetchJson(source) {
  const target = /\s/.test(source) ? encodeURI(source) : source;
  const res = await G().fetch(target, { cache: "no-store" });
  if (!res.ok) throw new Error(`${source}: HTTP ${res.status}`);
  return res.json();
}

/**
 * Load the raw JSON from a File, a URL, or a path inside the Data folder — a
 * single .json, or a DIRECTORY (every .json under it, subfolders detected).
 * Returns the raw payload; `loadSourceDetailed` also tells which files it read.
 */
export async function loadSource(opts = {}) {
  return (await loadSourceDetailed(opts)).raw;
}
export async function loadSourceDetailed({ file, url, folderMode = "dirs", source = "data" } = {}) {
  if (file) return { raw: JSON.parse(await file.text()), files: [file.name], ignored: [], kind: "file" };
  const src = String(url ?? "").trim();
  if (!src) throw new Error("Choose a file, pick a Data path, or give a URL");
  if (/^https?:\/\//i.test(src) || isJsonName(src)) return { raw: await fetchJson(src), files: [src], ignored: [], kind: /^https?:/i.test(src) ? "url" : "data-file" };
  const loaded = await loadDataPath(src, { folderMode, source });
  return { ...loaded, kind: "data-directory" };
}

/* ------------------------------------------------------ the Data folder */

/** The FilePicker class for this core version (v13 moved it under foundry.applications.apps). */
function filePicker() {
  const g = G();
  return g.foundry?.applications?.apps?.FilePicker?.implementation ?? g.foundry?.applications?.apps?.FilePicker ?? g.FilePicker ?? null;
}
export const isJsonName = (name) => /\.json$/i.test(String(name ?? ""));
const trimSlashes = (p) => String(p ?? "").trim().replace(/^\/+|\/+$/g, "");
const safeSegment = (s) => String(s).replace(/[\\/:*?"<>|]+/g, "-").replace(/^\.+/, "").trim() || "_";

/** Directory names between `base` and `file` (the file's own name excluded). */
export function relativeDirs(base, file) {
  const b = trimSlashes(base).split("/").filter(Boolean);
  const f = trimSlashes(file).split("/").filter(Boolean);
  f.pop();
  let i = 0;
  while (i < b.length && i < f.length && b[i] === f[i]) i++;
  return f.slice(i);
}

/** Browse one Data directory → { dirs: [paths], files: [paths] } (relative to Data). */
export async function browseData(path, source = "data") {
  const FP = filePicker();
  if (!FP?.browse) throw new Error("FilePicker is not available");
  const res = await FP.browse(source, trimSlashes(path));
  return { dirs: res?.dirs ?? [], files: res?.files ?? [] };
}

/** Every *.json under `path`, recursively (subfolders detected). */
export async function walkData(path, source = "data", { maxDepth = 12, maxFiles = 5000 } = {}) {
  const out = [];
  const seen = new Set();
  const walk = async (dir, depth) => {
    if (depth > maxDepth || seen.has(dir)) return;
    seen.add(dir);
    const { dirs, files } = await browseData(dir, source);
    for (const f of files) if (isJsonName(f) && out.length < maxFiles) out.push(f);
    for (const d of dirs) await walk(d, depth + 1);
  };
  await walk(trimSlashes(path), 0);
  return out.sort();
}

/**
 * Pure: assemble one payload from many JSON files found under a directory.
 *   files       [{ path, raw }] — raw is the parsed JSON (actor | array | packet | other)
 *   base        the directory the user chose; paths are relative to it
 *   folderMode  "dirs"  — the subdirectories ARE the Foundry folders: moving a file
 *                         to another directory moves the actor. A combined packet
 *                         inside a subdirectory keeps its own paths under it.
 *               "flags" — each file's own folderPath flag wins; the directory
 *                         fills in only when a file has none (the Python bridge's rule).
 * Returns { payload, ignored: [{path, reason}], fileCount }.
 */
export function assembleDirectory(files, { base = "", folderMode = "dirs", world = null } = {}) {
  const actors = [];
  const ignored = [];
  for (const { path, raw } of files) {
    let norm;
    try { norm = normalizeImport(raw); }
    catch (err) { ignored.push({ path, reason: err.message }); continue; }
    const dirs = relativeDirs(base, path);
    const packet = Array.isArray(raw) || (raw && Array.isArray(raw.actors));
    for (const entry of norm.entries) {
      const a = clone(entry.data);
      const own = Array.isArray(entry.folderPath) ? entry.folderPath : [];
      const folderPath = folderMode === "flags" ? (own.length ? own : dirs) : (packet ? [...dirs, ...own] : dirs);
      a.flags = a.flags ?? {};
      a.flags[MODULE_ID] = { ...(a.flags[MODULE_ID] ?? {}), folderPath, sourceFile: path };
      actors.push(a);
    }
  }
  const payload = {
    format: FORMAT, exportedFrom: world, assembledFrom: trimSlashes(base) || null, folderMode,
    actorCount: actors.length, folderCount: 0, folders: [], actors,
  };
  return { payload, ignored, fileCount: files.length };
}

/** Load a Data path: one .json file, or a directory assembled from every .json under it. */
export async function loadDataPath(path, { source = "data", folderMode = "dirs" } = {}) {
  const p = trimSlashes(path);
  if (isJsonName(p)) return { raw: await fetchJson(p), files: [p], ignored: [] };
  const paths = await walkData(p, source);
  if (!paths.length) throw new Error(`${p}: no .json files found — is it a directory inside your Data folder?`);
  const files = [];
  const ignored = [];
  for (const fp of paths) {
    try { files.push({ path: fp, raw: await fetchJson(fp) }); }
    catch (err) { ignored.push({ path: fp, reason: err.message }); }
  }
  const assembled = assembleDirectory(files, { base: p, folderMode });
  return { raw: assembled.payload, files: paths, ignored: [...ignored, ...assembled.ignored] };
}

/** Open Foundry's file picker on a form's Data-path box (type "folder" or "any"). */
export function pickDataPath(form, type = "folder") {
  const FP = filePicker();
  const input = form?.elements?.url ?? form?.querySelector?.("[name=url]");
  if (!FP || !input) return notify("warn", "The file picker is not available here");
  const current = trimSlashes(input.value && !/^https?:/i.test(input.value) ? input.value : "");
  const picker = new FP({ type, current, callback: (chosen) => { input.value = trimSlashes(chosen); } });
  return picker.render(true);
}

/**
 * Pure: the files an export writes under `dir` — one per actor in
 * subdirectories mirroring the folder paths (tree), plus import.json (combined).
 */
export function exportTree(payload, { dir = "", combined = true, tree = true } = {}) {
  const files = [];
  const base = trimSlashes(dir);
  const used = new Set();
  if (tree) {
    for (const a of payload.actors ?? []) {
      const parts = (a.flags?.[MODULE_ID]?.folderPath ?? []).map(safeSegment);
      let stem = `fvtt-Actor-${slug(a.name || "actor")}${a._id ? `-${a._id}` : ""}`;
      while (used.has([...parts, stem].join("/"))) stem += "-dup";
      used.add([...parts, stem].join("/"));
      files.push({ path: [base, ...parts, `${stem}.json`].filter(Boolean).join("/"), text: JSON.stringify(a, null, 2) });
    }
  }
  if (combined) files.push({ path: [base, "import.json"].filter(Boolean).join("/"), text: JSON.stringify(payload, null, 2) });
  return files;
}

/** mkdir -p inside Data (createDirectory per segment, "already exists" ignored). */
export async function ensureDataDir(path, source = "data", made = new Set()) {
  const FP = filePicker();
  if (!FP?.createDirectory) throw new Error("FilePicker.createDirectory is not available");
  const parts = trimSlashes(path).split("/").filter(Boolean);
  let cur = "";
  for (const seg of parts) {
    cur = cur ? `${cur}/${seg}` : seg;
    if (made.has(cur)) continue;
    try { await FP.createDirectory(source, cur); }
    catch (err) { if (!/EEXIST|exists/i.test(err?.message ?? String(err))) throw err; }
    made.add(cur);
  }
  return cur;
}

/** Upload [{path, text}] into Data, creating directories on the way. */
export async function writeDataFiles(files, { source = "data", onProgress } = {}) {
  const FP = filePicker();
  if (!FP?.upload) throw new Error("FilePicker.upload is not available");
  const made = new Set();
  const written = [];
  let n = 0;
  for (const { path, text } of files) {
    const parts = path.split("/");
    const name = parts.pop();
    const dir = parts.join("/");
    if (dir && !made.has(dir)) await ensureDataDir(dir, source, made);
    const file = new (G().File)([text], name, { type: "application/json" });
    const res = await FP.upload(source, dir, file, {}, { notify: false });
    if (res === false) throw new Error(`upload refused: ${path}`);
    written.push(res?.path ?? path);
    n++;
    onProgress?.(n, files.length);
  }
  return written;
}

/**
 * Export INTO the Data folder: a tree of one file per actor under
 * options.dir (default npc/waluipedia/<world>), subdirectories = folders,
 * plus import.json. Import the directory back, or let the Python bridge read it.
 */
export async function exportToDataFolder(options = {}) {
  const game = G().game;
  const payload = await exportAllActors({ ...options, download: false });
  const dir = trimSlashes(options.dir || `npc/waluipedia/${game?.world?.id ?? "world"}`);
  const files = exportTree(payload, { dir, combined: options.combined !== false, tree: options.tree !== false });
  const written = await writeDataFiles(files, { source: options.source ?? "data", onProgress: (n, t) => progress(`${MODULE_ID}: writing ${n}/${t}`, (100 * n) / t) });
  progress(`${MODULE_ID}: done`, 100);
  notify("info", `Wrote ${written.length} files under ${dir} (${payload.actors.length} actors)`);
  return { payload, dir, files: written };
}

/* ------------------------------------------------------------ the review */

/** Pure: what an import would do, row by row — the review table's model. */
export function buildPlan(raw, { actors = [], rootFolder = "", keepIds = true, matchByName = true } = {}) {
  const { entries } = normalizeImport(raw);
  const prefix = splitPath(rootFolder);
  const byId = new Map(actors.map((a) => [a.id ?? a._id, a]));
  const batchIds = new Set(entries.map((e) => e.data?._id).filter(Boolean));
  return entries.map((e, i) => {
    const d = e.data;
    let existing = (keepIds && d._id && byId.get(d._id)) || null;
    if (!existing && matchByName) existing = actors.find((a) => a.name === d.name && a.type === d.type && !batchIds.has(a.id ?? a._id)) ?? null;
    const known = Array.isArray(e.folderPath);
    return {
      key: String(i), name: d.name ?? "(unnamed)", type: d.type ?? "?", id: d._id ?? null,
      folderPath: known ? [...prefix, ...e.folderPath] : [...prefix], folderKnown: known,
      status: existing ? "update" : "new", existingId: existing ? (existing.id ?? existing._id) : null,
      existingName: existing?.name ?? null, include: true, items: (d.items ?? []).length,
      img: d.img ?? null, sourceFile: d.flags?.[MODULE_ID]?.sourceFile ?? null,
    };
  });
}

/**
 * Pure: apply the review table's edits — include (keys), names {key: name},
 * folders {key: "A / B"} — and return the payload to import. Folder paths are
 * final here (the root-folder prefix is already in them), so import with rootFolder "".
 */
export function applyPlanEdits(raw, plan, edits = {}) {
  const { entries, meta, folders } = normalizeImport(raw);
  const actors = [];
  plan.forEach((row, i) => {
    const inc = edits.include ? edits.include.includes(row.key) : row.include;
    if (!inc) return;
    const a = clone(entries[i].data);
    const name = edits.names?.[row.key];
    if (typeof name === "string" && name.trim()) a.name = name.trim();
    const folderText = edits.folders?.[row.key];
    const folderPath = folderText !== undefined ? splitPath(folderText) : row.folderPath;
    a.flags = a.flags ?? {};
    a.flags[MODULE_ID] = { ...(a.flags[MODULE_ID] ?? {}), folderPath };
    actors.push(a);
  });
  return { ...meta, format: FORMAT, folders, actorCount: actors.length, actors };
}

/** Turn the review form's fields (inc:key, name:key, folder:key) into edits. */
export function editsFromForm(form) {
  const edits = { include: [], names: {}, folders: {} };
  for (const [k, v] of Object.entries(form ?? {})) {
    const m = /^(inc|name|folder):(.+)$/.exec(k);
    if (!m) continue;
    if (m[1] === "inc") { if (v) edits.include.push(m[2]); }
    else if (m[1] === "name") edits.names[m[2]] = v;
    else edits.folders[m[2]] = v;
  }
  return edits;
}

export function planHtml(plan, { source = "", ignored = [] } = {}) {
  const counts = { new: 0, update: 0 };
  plan.forEach((r) => { counts[r.status] = (counts[r.status] ?? 0) + 1; });
  const rows = plan.map((r) => `<tr class="wmi-row wmi-${r.status}" data-key="${escapeHtml(r.key)}" data-status="${r.status}">
      <td><input type="checkbox" name="inc:${escapeHtml(r.key)}" ${r.include ? "checked" : ""}></td>
      <td><input type="text" name="name:${escapeHtml(r.key)}" value="${escapeHtml(r.name)}" title="${escapeHtml(r.sourceFile ?? (r.id ?? ""))}"></td>
      <td>${escapeHtml(r.type)}</td>
      <td><input type="text" name="folder:${escapeHtml(r.key)}" value="${escapeHtml(r.folderPath.join(" / "))}" placeholder="root"></td>
      <td class="wmi-status">${r.status === "update" ? `update${r.existingName && r.existingName !== r.name ? ` <small>(${escapeHtml(r.existingName)})</small>` : ""}` : "new"}</td>
    </tr>`).join("");
  const F = "const f=this.closest('form');";
  const vis = "[...f.querySelectorAll('tr.wmi-row')].filter(tr=>tr.style.display!=='none')";
  const tool = (label, js, title = "") => `<button type="button" class="wmi-tool" title="${escapeHtml(title)}" onclick="${escapeHtml(js)}">${label}</button>`;
  const ign = ignored.length ? `<details class="wmi-ignored"><summary>${ignored.length} file(s) ignored</summary><ul>${ignored.map((x) => `<li><code>${escapeHtml(x.path)}</code> — ${escapeHtml(x.reason)}</li>`).join("")}</ul></details>` : "";
  return `<div class="wmi-plan">
    <p class="notes"><strong>${plan.length}</strong> actors from <code>${escapeHtml(source || "the chosen source")}</code>: ${counts.new} new, ${counts.update} to update. Untick a row to leave it out; edit names and folders in place (<code>A / B</code> nests). The tools act on the visible rows.</p>
    ${ign}
    <div class="wmi-tools">
      <input type="text" class="wmi-filter" placeholder="filter by name / folder…" oninput="${escapeHtml(`${F}const q=this.value.toLowerCase();for(const tr of f.querySelectorAll('tr.wmi-row')){const t=[...tr.querySelectorAll('input[type=text]')].map(i=>i.value).join(' ').toLowerCase()+' '+tr.dataset.status;tr.style.display=t.includes(q)?'':'none';}`)}">
      ${tool("all", `${F}for(const tr of ${vis})tr.querySelector('input[type=checkbox]').checked=true;`, "tick every visible row")}
      ${tool("none", `${F}for(const tr of ${vis})tr.querySelector('input[type=checkbox]').checked=false;`, "untick every visible row")}
      ${tool("only new", `${F}for(const tr of ${vis})tr.querySelector('input[type=checkbox]').checked=tr.dataset.status==='new';`, "tick the actors this world does not have yet")}
      ${tool("only updates", `${F}for(const tr of ${vis})tr.querySelector('input[type=checkbox]').checked=tr.dataset.status==='update';`, "tick the actors that already exist here")}
      <input type="text" class="wmi-setfolder" placeholder="folder for the ticked rows, e.g. Imports / Cast">
      ${tool("set folder", `${F}const v=f.querySelector('.wmi-setfolder').value;for(const tr of ${vis}){if(tr.querySelector('input[type=checkbox]').checked)tr.querySelector('input[name^=folder]').value=v;}`, "replace the folder of every ticked visible row")}
      ${tool("prefix", `${F}const v=f.querySelector('.wmi-setfolder').value;for(const tr of ${vis}){if(!tr.querySelector('input[type=checkbox]').checked)continue;const i=tr.querySelector('input[name^=folder]');i.value=[v,i.value].filter(Boolean).join(' / ');}`, "put the ticked rows' folders under this one")}
    </div>
    <div class="wmi-table-wrap"><table class="wmi-table"><thead><tr><th></th><th>Name</th><th>Type</th><th>Folder</th><th>Action</th></tr></thead><tbody>${rows}</tbody></table></div>
  </div>`;
}

const imageCache = new Map();
async function imageExists(path) {
  if (!path || typeof path !== "string") return false;
  if (/^(https?:)?\/\//i.test(path) || path.startsWith("data:")) return true; // not ours to check
  if (imageCache.has(path)) return imageCache.get(path);
  let ok = false;
  try {
    const res = await G().fetch(encodeURI(path), { method: "HEAD", cache: "no-store" });
    ok = !!res?.ok;
  } catch (err) { ok = false; }
  imageCache.set(path, ok);
  return ok;
}

export function imagePathsOf(data) {
  const out = [];
  if (data.img) out.push({ where: "img", path: data.img });
  const token = data.prototypeToken?.texture?.src;
  if (token) out.push({ where: "token", path: token });
  for (const it of data.items ?? []) if (it?.img) out.push({ where: `item:${it.name}`, path: it.img });
  return out;
}

async function checkImages(data, fix, report, label) {
  const missing = [];
  for (const { where, path } of imagePathsOf(data)) {
    if (await imageExists(path)) continue;
    missing.push({ actor: label, where, path });
    if (!fix) continue;
    if (where === "img") data.img = PLACEHOLDER_ACTOR;
    else if (where === "token") data.prototypeToken.texture.src = PLACEHOLDER_ACTOR;
    else { const it = (data.items ?? []).find((i) => i?.img === path); if (it) it.img = PLACEHOLDER_ITEM; }
  }
  report.missingImages.push(...missing);
  return missing;
}

/** Create the folder chain for `path`, reusing existing folders by name. */
export async function ensureFolderPath(path, { cache, dryRun, report }) {
  const game = G().game, Folder = G().Folder;
  let parentId = null;
  for (let i = 0; i < path.length; i++) {
    const key = path.slice(0, i + 1).join(" / ");
    if (cache.has(key)) { parentId = cache.get(key); continue; }
    const name = path[i];
    const all = game.folders.contents ?? [...game.folders.values()];
    const existing = all.find((f) => f.type === "Actor" && f.name === name
      && ((f.folder?.id ?? f.folder?._id ?? f.folder ?? null) === parentId));
    let id;
    if (existing) id = existing.id ?? existing._id;
    else if (dryRun) { id = `dry:${key}`; report.foldersCreated.push(key); }
    else {
      const created = await Folder.create({ name, type: "Actor", folder: parentId, sorting: "a" });
      id = created.id ?? created._id;
      report.foldersCreated.push(key);
    }
    cache.set(key, id);
    parentId = id;
  }
  return parentId;
}

function sameFolder(actor, folderId) {
  const current = actor.folder?.id ?? actor.folder?._id ?? actor.folder ?? null;
  return current === folderId;
}

/**
 * Find the world actor an incoming document stands for.
 *  1. same _id (when ids are kept);
 *  2. otherwise, with matchByName, an actor of the same name + type — but never
 *     one that is itself part of this import (`batchIds`): two different
 *     "Guard" statblocks in one export must stay two actors.
 */
function findExisting(data, folderId, o, batchIds = new Set()) {
  const game = G().game;
  const all = game.actors.contents ?? [...game.actors.values()];
  if (o.keepIds && data._id) {
    const byId = game.actors.get ? game.actors.get(data._id) : all.find((a) => (a.id ?? a._id) === data._id);
    if (byId) return byId;
  }
  if (!o.matchByName) return null;
  const candidates = all.filter((a) => a.name === data.name && a.type === data.type && !batchIds.has(a.id ?? a._id));
  if (!candidates.length) return null;
  return candidates.find((a) => sameFolder(a, folderId)) ?? candidates[0];
}

async function syncEmbedded(actor, collection, docName, incoming, replace) {
  const existing = actor[collection]?.contents ?? [...(actor[collection]?.values?.() ?? [])];
  const existingIds = new Set(existing.map((d) => d.id ?? d._id));
  const incomingIds = new Set(incoming.filter((d) => d._id).map((d) => d._id));
  const toDelete = replace ? existing.map((d) => d.id ?? d._id).filter((id) => !incomingIds.has(id)) : [];
  const toUpdate = incoming.filter((d) => d._id && existingIds.has(d._id));
  const toCreate = incoming.filter((d) => !d._id || !existingIds.has(d._id));
  if (toDelete.length) await actor.deleteEmbeddedDocuments(docName, toDelete);
  if (toUpdate.length) await actor.updateEmbeddedDocuments(docName, toUpdate, { diff: false, recursive: false });
  if (toCreate.length) await actor.createEmbeddedDocuments(docName, toCreate, { keepId: true });
  return { deleted: toDelete.length, updated: toUpdate.length, created: toCreate.length };
}

function mergeFlags(existingFlags, incomingFlags) {
  const out = clone(existingFlags ?? {});
  for (const [scope, value] of Object.entries(incomingFlags ?? {})) {
    out[scope] = (value && typeof value === "object" && !Array.isArray(value)) ? { ...(out[scope] ?? {}), ...value } : value;
  }
  return out;
}

const DEFAULTS = {
  mode: "upsert",            // upsert | create | update
  keepIds: true,             // keep _id on create and match on it
  matchByName: true,         // fall back to name + type when no id matches
  rootFolder: "",            // prefix every folderPath with this ("A / B")
  dryRun: false,
  checkImages: true,
  fixMissingImages: false,   // swap missing images for Foundry placeholders
  skipPlayerCharacters: false,
  overwriteOwnership: false, // keep the world's ownership on updates
  replaceEmbedded: true,     // delete items/effects that the import no longer has
  progress: true,
};

function progress(label, pct) {
  const g = G();
  const nav = g.SceneNavigation ?? g.foundry?.applications?.ui?.SceneNavigation;
  try { nav?.displayProgressBar?.({ label, pct: Math.round(pct) }); } catch (err) { /* cosmetic */ }
}

/**
 * Import a payload. Returns the report:
 * { created:[], updated:[], skipped:[], failed:[], foldersCreated:[], missingImages:[], dryRun }
 */
export async function importPayload(raw, options = {}) {
  const o = { ...DEFAULTS, ...options };
  const Actor = G().Actor;
  const { entries, meta } = normalizeImport(raw);
  const report = { created: [], updated: [], skipped: [], failed: [], foldersCreated: [], missingImages: [], dryRun: o.dryRun, meta };
  const folderCache = new Map();
  const prefix = splitPath(o.rootFolder);
  const batchIds = new Set(entries.map((e) => e.data?._id).filter(Boolean));
  const total = entries.length;
  let n = 0;
  for (const entry of entries) {
    n++;
    if (o.progress && total > 5) progress(`${MODULE_ID}: ${n}/${total}`, (100 * n) / total);
    const data = clone(entry.data);
    const label = `${data.name} [${data.type}]`;
    try {
      if (o.skipPlayerCharacters && data.type === "character") { report.skipped.push({ actor: label, reason: "player character" }); continue; }
      // folderPath null = the file only has a folder id we cannot name (old macro
      // export). Existing actors then keep their folder; new ones go into that
      // folder if this world has it (same-world re-import), else the root/prefix.
      const known = Array.isArray(entry.folderPath);
      const path = known ? [...prefix, ...entry.folderPath] : [...prefix];
      let folderId = path.length ? await ensureFolderPath(path, { cache: folderCache, dryRun: o.dryRun, report }) : null;
      const hintId = typeof data.folder === "string" ? data.folder : (data.folder?.id ?? null);
      if (!known && !path.length && hintId && game.folders?.get?.(hintId)) folderId = hintId;
      const existing = findExisting(data, folderId, o, batchIds);
      const folderLabel = known ? path.join(" / ") : (existing ? "(kept)" : (folderId ? (game.folders.get(folderId)?.name ?? folderId) : path.join(" / ")));
      if (existing && o.mode === "create") { report.skipped.push({ actor: label, reason: "exists (create-only)" }); continue; }
      if (!existing && o.mode === "update") { report.skipped.push({ actor: label, reason: "not found (update-only)" }); continue; }
      if (o.checkImages) await checkImages(data, o.fixMissingImages, report, label);

      if (existing) {
        if (!o.dryRun) {
          const { _id, items = [], effects = [], _stats, ownership, folder, ...rest } = data;
          const update = { ...rest, flags: mergeFlags(existing.flags, rest.flags) };
          if (known || path.length) update.folder = folderId;
          if (o.overwriteOwnership && ownership) update.ownership = ownership;
          await existing.update(update, { diff: false, recursive: false });
          const items_ = await syncEmbedded(existing, "items", "Item", items, o.replaceEmbedded);
          const effects_ = await syncEmbedded(existing, "effects", "ActiveEffect", effects, o.replaceEmbedded);
          report.updated.push({ actor: label, id: existing.id ?? existing._id, folder: folderLabel, items: items_, effects: effects_ });
        } else report.updated.push({ actor: label, id: existing.id ?? existing._id, folder: folderLabel });
      } else {
        const createData = { ...data, folder: folderId };
        if (!o.keepIds) delete createData._id;
        if (!o.dryRun) {
          const created = await Actor.create(createData, { keepId: !!(o.keepIds && createData._id), keepEmbeddedIds: true });
          report.created.push({ actor: label, id: created?.id ?? created?._id ?? createData._id ?? null, folder: folderLabel });
        } else report.created.push({ actor: label, id: createData._id ?? null, folder: folderLabel });
      }
    } catch (err) {
      console.error(`[${MODULE_ID}] ${label}:`, err);
      report.failed.push({ actor: label, error: err?.message ?? String(err) });
    }
  }
  if (o.progress && total > 5) progress(`${MODULE_ID}: done`, 100);
  return report;
}

export async function importFromUrl(url, options = {}) {
  const raw = await loadSource({ url });
  const report = await importPayload(raw, options);
  announce(report);
  return report;
}

export function summarize(report) {
  const parts = [`${report.created.length} created`, `${report.updated.length} updated`];
  if (report.skipped.length) parts.push(`${report.skipped.length} skipped`);
  if (report.failed.length) parts.push(`${report.failed.length} FAILED`);
  if (report.foldersCreated.length) parts.push(`${report.foldersCreated.length} folders`);
  if (report.missingImages.length) parts.push(`${report.missingImages.length} missing images`);
  return (report.dryRun ? "DRY RUN — " : "") + parts.join(", ");
}

function announce(report) {
  const text = summarize(report);
  notify(report.failed.length ? "warn" : "info", `Mass import: ${text}`);
  console.log(`[${MODULE_ID}] ${text}`, report);
}

/* ---------------------------------------------------------------- dialogs */

async function showForm({ title, content, okLabel, okIcon, width = 540 }) {
  const g = G();
  const readForm = (form) => {
    const out = {};
    for (const el of Array.from(form?.elements ?? [])) {
      if (!el.name) continue;
      if (el.type === "checkbox") out[el.name] = !!el.checked;
      else if (el.type === "file") out[el.name] = el.files?.[0] ?? null;
      else out[el.name] = el.value;
    }
    return out;
  };
  const DialogV2 = g.foundry?.applications?.api?.DialogV2;
  if (DialogV2) {
    return DialogV2.wait({
      window: { title }, content, rejectClose: false, position: { width },
      buttons: [
        { action: "ok", label: okLabel, icon: okIcon, default: true, callback: (event, button) => readForm(button.form) },
        { action: "cancel", label: "Cancel", icon: "fas fa-times", callback: () => null },
      ],
    });
  }
  return new Promise((resolve) => {
    new g.Dialog({
      title, content,
      buttons: {
        ok: { label: okLabel, icon: `<i class="${okIcon}"></i>`, callback: (html) => resolve(readForm((html[0] ?? html).querySelector("form") ?? (html[0] ?? html))) },
        cancel: { label: "Cancel", callback: () => resolve(null) },
      },
      default: "ok", close: () => resolve(null),
    }, { width }).render(true);
  });
}

function folderOptionsHtml(selected = "") {
  const folders = worldFolderObjects();
  const byId = new Map(folders.map((f) => [f._id, f]));
  const rows = folders.map((f) => ({ f, path: folderPathOf(f, byId) })).sort((a, b) => a.path.join("/").localeCompare(b.path.join("/")));
  return [`<option value="">— whole world —</option>`]
    .concat(rows.map(({ f, path }) => `<option value="${escapeHtml(f._id)}" ${f._id === selected ? "selected" : ""}>${escapeHtml("\u00a0\u00a0".repeat(path.length - 1) + path[path.length - 1])}</option>`))
    .join("");
}

export async function openExportDialog() {
  const g = G();
  const world = g.game?.world?.id ?? "world";
  const content = `<form class="wmi-form">
    <p class="notes">Every actor goes out with its folder path (<code>flags.${MODULE_ID}.folderPath</code>). <b>Download</b> gives one JSON for the repo (<code>tools/foundry-bridge.py split</code> takes it from there). <b>Data folder</b> writes a tree inside your Foundry Data — one file per actor, subfolders = your Actors sidebar folders, plus <code>import.json</code> — that <i>Import</i> reads straight back.</p>
    <div class="form-group"><label>Folder</label><select name="folderId">${folderOptionsHtml()}</select></div>
    <div class="form-group"><label>Types</label><input type="text" name="types" value="" placeholder="all — or e.g. character, npc"></div>
    <div class="form-group"><label>Destination</label><select name="destination" onchange="this.form.querySelector('.wmi-dest').style.display=this.value==='data'?'':'none'">
      <option value="download">Download one JSON file</option>
      <option value="data">Write into the Foundry Data folder (tree + import.json)</option>
    </select></div>
    <div class="wmi-dest" style="display:none">
      <div class="form-group"><label>Data folder</label><input type="text" name="dir" value="${escapeHtml(`npc/waluipedia/${world}`)}" placeholder="npc/waluipedia/${escapeHtml(world)}"><button type="button" class="wmi-pick" title="browse" onclick="waluipedia_mass_import.pickDataPath(this.form,'folder')"><i class="fas fa-folder-open"></i></button></div>
      <div class="form-group wmi-checks">
        <label><input type="checkbox" name="tree" checked> one file per actor, in subfolders mirroring the sidebar</label>
        <label><input type="checkbox" name="combined" checked> also write <code>import.json</code> with everything</label>
      </div>
    </div>
  </form>`;
  const form = await showForm({ title: "Mass export actors", content, okLabel: "Export", okIcon: "fas fa-file-export" });
  if (!form) return null;
  const types = splitPath(String(form.types ?? "").replace(/,/g, "/"));
  if (form.destination === "data") {
    try { return await exportToDataFolder({ folderId: form.folderId || null, types, dir: form.dir, tree: form.tree !== false, combined: form.combined !== false }); }
    catch (err) { notify("error", `Mass export: ${err.message}`); console.error(`[${MODULE_ID}]`, err); return null; }
  }
  return exportAllActors({ folderId: form.folderId || null, types });
}

function packetOptionsHtml(selected = "") {
  return [`<option value="">— pick a repo packet —</option>`]
    .concat(KNOWN_PACKETS.map((p) => `<option value="${escapeHtml(packetUrl(p))}" ${packetUrl(p) === selected ? "selected" : ""}>${escapeHtml(p.label)}</option>`))
    .join("");
}

export async function openImportDialog(preset = {}) {
  const g = G();
  const defaultUrl = (() => { try { return g.game.settings.get(MODULE_ID, "defaultSource") || ""; } catch (err) { return ""; } })();
  const checked = (k) => (preset[k] ?? DEFAULTS[k]) ? "checked" : "";
  const content = `<form class="wmi-form">
    <p class="notes">Source: a JSON file from disk, a repo packet, a URL, or a path inside your Foundry <b>Data</b> folder — one <code>.json</code> <i>or a whole directory</i> (every <code>.json</code> under it, subfolders become Actors folders).</p>
    <div class="form-group"><label>JSON file</label><input type="file" name="file" accept=".json,application/json"></div>
    <div class="form-group"><label>Repo packet</label><select name="packet" onchange="if(this.value)this.form.url.value=this.value">${packetOptionsHtml(preset.url ?? "")}</select></div>
    <div class="form-group"><label>URL / Data path</label><input type="text" name="url" value="${escapeHtml(preset.url ?? defaultUrl)}" placeholder="npc/waluipedia/cast  ·  imports/x.json  ·  https://raw.githubusercontent.com/…/import.json"><button type="button" class="wmi-pick" title="pick a Data folder" onclick="waluipedia_mass_import.pickDataPath(this.form,'folder')"><i class="fas fa-folder-open"></i></button><button type="button" class="wmi-pick" title="pick a Data file" onclick="waluipedia_mass_import.pickDataPath(this.form,'any')"><i class="fas fa-file"></i></button></div>
    <div class="form-group"><label>Directory folders</label><select name="folderMode">
      <option value="dirs" ${(preset.folderMode ?? "dirs") === "dirs" ? "selected" : ""}>subfolders are the Actors folders (move a file = move the actor)</option>
      <option value="flags" ${preset.folderMode === "flags" ? "selected" : ""}>trust each file's own folder path; subfolders only fill gaps</option>
    </select></div>
    <div class="form-group"><label>Put everything under</label><input type="text" name="rootFolder" value="${escapeHtml(preset.rootFolder ?? "")}" placeholder="optional folder, e.g. Imports / Session 42"></div>
    <div class="form-group"><label>Mode</label><select name="mode">
      <option value="upsert" ${(preset.mode ?? "upsert") === "upsert" ? "selected" : ""}>Create new, update existing (upsert)</option>
      <option value="create" ${preset.mode === "create" ? "selected" : ""}>Create only — never touch existing</option>
      <option value="update" ${preset.mode === "update" ? "selected" : ""}>Update only — never create</option>
    </select></div>
    <div class="form-group wmi-checks">
      <label><input type="checkbox" name="review" ${(preset.review ?? true) ? "checked" : ""}> <b>review first</b> — list every actor; untick, rename, move folders before anything changes</label>
      <label><input type="checkbox" name="matchByName" ${checked("matchByName")}> match by name + type when no id matches</label>
      <label><input type="checkbox" name="replaceEmbedded" ${checked("replaceEmbedded")}> remove items/effects the import no longer has</label>
      <label><input type="checkbox" name="overwriteOwnership" ${checked("overwriteOwnership")}> overwrite ownership (off = keep the world's)</label>
      <label><input type="checkbox" name="skipPlayerCharacters" ${checked("skipPlayerCharacters")}> skip player characters</label>
      <label><input type="checkbox" name="checkImages" ${checked("checkImages")}> check that every image exists on the server</label>
      <label><input type="checkbox" name="fixMissingImages" ${checked("fixMissingImages")}> swap missing images for placeholders</label>
      <label><input type="checkbox" name="dryRun" ${checked("dryRun")}> dry run — report only, change nothing</label>
    </div>
  </form>`;
  const form = await showForm({ title: "Mass import actors", content, okLabel: "Load", okIcon: "fas fa-file-import", width: 620 });
  if (!form) return null;
  let loaded;
  try { loaded = await loadSourceDetailed({ file: form.file, url: form.url, folderMode: form.folderMode }); }
  catch (err) { notify("error", `Mass import: ${err.message}`); return null; }
  let raw = loaded.raw;
  const options = { ...form, file: undefined, url: undefined, packet: undefined, folderMode: undefined, review: undefined };
  const sourceLabel = form.file?.name ?? form.url;
  if (form.review !== false) {
    const actors = g.game?.actors?.contents ?? [...(g.game?.actors?.values?.() ?? [])];
    let plan;
    try { plan = buildPlan(raw, { actors, rootFolder: form.rootFolder, keepIds: options.keepIds ?? DEFAULTS.keepIds, matchByName: form.matchByName }); }
    catch (err) { notify("error", `Mass import: ${err.message}`); return null; }
    const picked = await showForm({ title: `Mass import — review (${plan.length})`, content: planHtml(plan, { source: sourceLabel, ignored: loaded.ignored }), okLabel: form.dryRun ? "Dry run" : "Import ticked", okIcon: "fas fa-check", width: 900 });
    if (!picked) return null;
    raw = applyPlanEdits(raw, plan, editsFromForm(picked));
    options.rootFolder = "";
    if (!raw.actors.length) { notify("warn", "Mass import: nothing ticked"); return null; }
  }
  const report = await importPayload(raw, options);
  report.source = sourceLabel;
  report.files = loaded.files;
  report.ignored = loaded.ignored;
  announce(report);
  await showReport(report);
  return report;
}

export async function importFile(file, options = {}) {
  const raw = await loadSource({ file });
  const report = await importPayload(raw, options);
  announce(report);
  return report;
}

/** Import a Data path — a .json file or a whole directory (subfolders → folders). */
export async function importFromDataPath(path, options = {}) {
  const { folderMode = "dirs", ...rest } = options;
  const loaded = await loadDataPath(path, { folderMode });
  const report = await importPayload(loaded.raw, rest);
  report.files = loaded.files;
  report.ignored = loaded.ignored;
  announce(report);
  return report;
}

export function reportHtml(report) {
  const li = (rows, fmt) => rows.length ? `<ul>${rows.map((r) => `<li>${fmt(r)}</li>`).join("")}</ul>` : "<p class='notes'>none</p>";
  return `<div class="wmi-report">
    <p><strong>${escapeHtml(summarize(report))}</strong>${report.source ? `<br><small>from <code>${escapeHtml(report.source)}</code>${report.files?.length > 1 ? ` · ${report.files.length} files` : ""}${report.ignored?.length ? ` · ${report.ignored.length} ignored` : ""}</small>` : ""}</p>
    <details ${report.failed.length ? "open" : ""}><summary>Failed (${report.failed.length})</summary>${li(report.failed, (r) => `${escapeHtml(r.actor)} — ${escapeHtml(r.error)}`)}</details>
    <details ${report.missingImages.length ? "open" : ""}><summary>Missing images (${report.missingImages.length})</summary>${li(report.missingImages, (r) => `${escapeHtml(r.actor)} · ${escapeHtml(r.where)} · <code>${escapeHtml(r.path)}</code>`)}</details>
    <details><summary>Created (${report.created.length})</summary>${li(report.created, (r) => `${escapeHtml(r.actor)} → ${escapeHtml(r.folder || "root")}`)}</details>
    <details><summary>Updated (${report.updated.length})</summary>${li(report.updated, (r) => `${escapeHtml(r.actor)} → ${escapeHtml(r.folder || "root")}`)}</details>
    <details><summary>Skipped (${report.skipped.length})</summary>${li(report.skipped, (r) => `${escapeHtml(r.actor)} — ${escapeHtml(r.reason)}`)}</details>
    <details><summary>Folders created (${report.foldersCreated.length})</summary>${li(report.foldersCreated, (r) => escapeHtml(r))}</details>
  </div>`;
}

async function showReport(report) {
  const g = G();
  const DialogV2 = g.foundry?.applications?.api?.DialogV2;
  const title = report.dryRun ? "Mass import — dry run" : "Mass import — report";
  if (DialogV2) {
    return DialogV2.wait({ window: { title }, content: reportHtml(report), rejectClose: false, position: { width: 600 },
      buttons: [{ action: "ok", label: "Close", icon: "fas fa-check", default: true }] });
  }
  if (g.Dialog) return new g.Dialog({ title, content: reportHtml(report), buttons: { ok: { label: "Close" } } }, { width: 600 }).render(true);
  return null;
}

/* ----------------------------------------------------------------- hooks */

export function injectButtons(root) {
  if (!root?.querySelector) return false;
  const header = root.querySelector(".header-actions, .action-buttons, .directory-header");
  if (!header || header.querySelector(".wmi-buttons")) return false;
  header.insertAdjacentHTML("beforeend", `<div class="wmi-buttons">
      <button type="button" class="wmi-import" title="Import many actors — a JSON, a repo packet, a URL, or a Data directory (subfolders → folders); review table first; existing actors updated in place"><i class="fas fa-file-import"></i> Mass import</button>
      <button type="button" class="wmi-export" title="Export every actor with its folder path — one JSON download, or a tree inside your Data folder"><i class="fas fa-file-export"></i> Mass export</button>
    </div>`);
  header.querySelector(".wmi-import")?.addEventListener("click", () => openImportDialog());
  header.querySelector(".wmi-export")?.addEventListener("click", () => openExportDialog());
  return true;
}

export const api = {
  MODULE_ID, FORMAT, RAW_BASE, KNOWN_PACKETS, packetUrl,
  exportAllActors, exportToDataFolder, exportTree, openExportDialog, buildExportPayload,
  importPayload, importFile, importFromUrl, importFromDataPath, openImportDialog,
  loadSource, loadSourceDetailed, loadDataPath, assembleDirectory, walkData, browseData, pickDataPath,
  buildPlan, applyPlanEdits, planHtml, normalizeImport, summarize,
};

export function register() {
  const g = G();
  if (!g.Hooks) return;
  g.Hooks.once("init", () => {
    try {
      g.game.settings.register(MODULE_ID, "defaultSource", {
        name: "Default import source",
        hint: "URL or Data path pre-filled in the import dialog — e.g. the raw GitHub URL of the repo's import.json.",
        scope: "world", config: true, type: String, default: "",
      });
    } catch (err) { console.warn(`[${MODULE_ID}] settings`, err); }
  });
  g.Hooks.once("ready", () => {
    const mod = g.game?.modules?.get?.(MODULE_ID);
    if (mod) mod.api = api;
    g[MODULE_ID.replace(/-/g, "_")] = api;
    console.log(`[${MODULE_ID}] ready — game.modules.get("${MODULE_ID}").api`);
  });
  g.Hooks.on("renderActorDirectory", (app, html) => {
    if (!g.game?.user?.isGM) return;
    const root = (typeof g.HTMLElement === "function" && html instanceof g.HTMLElement) ? html : (html?.[0] ?? html);
    injectButtons(root);
  });
}

register();
