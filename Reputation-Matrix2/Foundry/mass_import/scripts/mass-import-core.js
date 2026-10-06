/**
 * Waluipedia Mass Import / Export — the Foundry end of the repo bridge.
 * (mass-import.js, the entry Foundry loads, imports this file with a fresh
 * query string on every world load — see the note there.)
 *
 *   Export   every actor in the world (or one folder subtree) either to a
 *            single JSON download or INTO THE FOUNDRY DATA FOLDER as a tree:
 *            one file per actor, subdirectories mirroring the Actors sidebar,
 *            plus a combined import.json. Each actor carries
 *            flags["waluipedia-mass-import"].folderPath
 *            (["Koopa Troop", "955 BF — Peach's Castle"]) so the folder tree survives
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
 *            1.9: art is back in Data (the suite copies it; art by URL is
 *            an opt-in --art-base). Embedded items and effects never carry
 *            ownership in an update or a create (the server stamps the
 *            creating user on a world copy, so packet and world always
 *            disagreed there and a `-=default` took the whole batch down);
 *            an invalid item that an update through the actor does not
 *            bring back is replaced; a type change is reported, not applied,
 *            unless the setting says so.
 *            Updates are DIFFS (v1.4): an actor or item identical to the
 *            import is not written at all; dnd5e's activities map and the
 *            flags get real deletions; item identifiers the system would
 *            reject ("toad-—-eager-variant") are slugified and reported.
 *            Folders take the colour the packet carries; actors tagged by the
 *            suite (flags["waluipedia-sheets"].tags) show chips in the sidebar.
 *
 *   Sync     EVERYTHING, BY ITSELF (v1.5): when the world loads (and on the
 *            button) find the newest Waluipedia packet — in the Foundry Data
 *            folder (where tools/sheets-suite.py publishes it), else on the
 *            start.py launcher, else on GitHub (the committed world manifest
 *            and its actor files + the cast and era packets, merged here) —
 *            and import the lot: the live world mirror, the generated cast,
 *            the 955 BF court, into their coloured folders. No scope, no file
 *            picker. Afterwards duplicate folders are merged and empty ones
 *            removed, and a summary shows what each actor gained, who has a
 *            level-up waiting, where it looked. A packet already synced (same
 *            digest) is not synced again on load. Embedded documents Foundry
 *            could not validate (a broken item identifier) are repaired
 *            through an update instead of failing the actor; dnd5e's cached
 *            spells are left to dnd5e; a document the system refuses (a second
 *            species on a character) is a note, not a failure. Shift-click
 *            reviews first.
 *            1.9.3: the sync on load is OFF by default (the Sync button; a
 *            world that had it on is switched off once — bugs should not run
 *            by themselves). The sync remembers the world stamp of its own
 *            last write per actor (a world setting), so an actor it wrote is
 *            not "newer than the packet" forever after; a kept actor still
 *            takes the packet's folder and the suite's tags (organisation,
 *            not sheet content). A broken species / background the sheet
 *            does not apply (details.race / .background names another, live
 *            one) is a leftover: deleted, never offered as a swap — and a
 *            packet copy of such a leftover is left out instead of refused.
 *
 * Buttons appear in the Actors sidebar header for the GM; the same functions
 * are on game.modules.get("waluipedia-mass-import").api for macros. All Foundry
 * globals are looked up at call time so the pure parts can be unit-tested in
 * node (tools/tests/test-mass-import-module.mjs).
 */

export const MODULE_ID = "waluipedia-mass-import";
/** Must match module.json — Sync compares the two to catch a world still running old code. */
export const MODULE_VERSION = "1.9.3";
export const FORMAT = "waluipedia-actors/1";
export const RAW_BASE = "https://raw.githubusercontent.com/mikegent01/bik/gh-pages/";
/** The repo's ready-made import-all files (the Import dialog lists them). */
export const KNOWN_PACKETS = [
  { id: "cast", label: "Waluipedia cast — every generated character sheet (156, plus the 955 BF past selves), filed into the website group folders", path: "Reputation-Matrix2/actors/cast/import.json" },
  { id: "peachs-castle-955", label: "Peach's Castle 955 BF — the court + Bowser's incursion (30)", path: "Reputation-Matrix2/actors/peachs-castle-955/import.json" },
  { id: "bowsers-castle-1035", label: "Bowser's Castle 1035 BF — the castle comes down: Bowser's line, Fawthful's forces, the remnant at the track (27)", path: "Reputation-Matrix2/actors/bowsers-castle-1035/import.json" },
  { id: "liberated-toads", label: "Liberated Toads cohorts — the Pond Patrol docket's rosters as statblocks: six working cohorts toad by toad, generic survivors (89), filed Liberated Toads / <cohort>", path: "Reputation-Matrix2/actors/liberated-toads/import.json" },
  { id: "fawfuls-forces", label: "Fawful's Forces — the Fury Meter's machines, the Bean Garrison and two lieutenants to fight inside Peach's Castle (12, CR 1/2–7), filed Fawful's Furious Freaks / <tier>", path: "Reputation-Matrix2/actors/fawfuls-forces/import.json" },
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

/* ---------------------------------------------------------- diffs & co */

const isPlain = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
/** Structural equality for JSON-shaped data (what toObject() gives). */
export function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== typeof b || a === null || b === null || typeof a !== "object") return a !== a && b !== b; // NaN
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a)) return a.length === b.length && a.every((v, i) => deepEqual(v, b[i]));
  const ka = Object.keys(a).filter((k) => a[k] !== undefined), kb = Object.keys(b).filter((k) => b[k] !== undefined);
  return ka.length === kb.length && ka.every((k) => k in b && deepEqual(a[k], b[k]));
}
/**
 * Free-form maps, where a key the import does not have means "remove it":
 * flags (any depth), ownership, dnd5e's activities map (an ActivitiesField —
 * removing one is `system.activities.-=id`) and an actor's tool proficiencies.
 * Everything else is schema: keys are only ever set, never deleted.
 */
const FREEFORM = /^(flags(\..*)?|ownership|system\.activities|system\.tools)$/;
/**
 * Pure: the update that turns `before` (a document's toObject()) into `after`
 * — nothing when they agree. Nested plain objects recurse, arrays are
 * compared whole, `_id` never moves, and only FREEFORM maps get `-=key`
 * deletions. Sending this instead of the whole document (the old
 * `{diff: false, recursive: false}`) keeps dnd5e's activity bookkeeping quiet:
 * a full-document update looked like a change to every Cast activity, so the
 * system deleted and recreated every cached spell on every import — and,
 * because it notes those ids on the *shared* operation options, every other
 * item in the batch tried to delete them again ("Item X does not exist!").
 */
export function docDiff(before, after, path = "") {
  const out = {};
  const b = isPlain(before) ? before : {};
  const a = isPlain(after) ? after : {};
  for (const [k, v] of Object.entries(a)) {
    if (k === "_id" || k.startsWith("-=") || v === undefined) continue;
    const here = path ? `${path}.${k}` : k;
    if (isPlain(v) && isPlain(b[k])) {
      const inner = docDiff(b[k], v, here);
      if (Object.keys(inner).length) out[k] = inner;
    } else if (!deepEqual(b[k], v)) out[k] = clone(v);
  }
  if (FREEFORM.test(path)) {
    for (const k of Object.keys(b)) {
      if (k in a || k.startsWith("-=")) continue;
      // DocumentOwnershipField takes a deletion only for a user id (never
      // `-=default`) — anything else fails validation and the whole update
      if (path === "ownership" && !USER_ID.test(k)) continue;
      out[`-=${k}`] = null;
    }
  }
  return out;
}

/** A Foundry document / user id: 16 letters and digits. */
export const USER_ID = /^[A-Za-z0-9]{16}$/;
/**
 * An embedded document without its `ownership`. Embedded Items and effects
 * ignore their own ownership field, yet the server stamps the creating user
 * on every world copy ({"<user>": 3, default: 0}) while a packet copy says
 * {default: 0} — so the two always disagreed, the diff carried an ownership
 * deletion, and DocumentOwnershipField refused the update (and with it the
 * whole batch of that actor's items). Never compared, never sent.
 */
export function withoutOwnership(d) {
  if (!isPlain(d) || !("ownership" in d)) return d;
  const { ownership, ...rest } = d;
  return rest;
}
/** `data` (an actor) with ownership stripped from every embedded item / effect. */
export function stripEmbeddedOwnership(data) {
  if (!isPlain(data)) return data;
  for (const key of ["items", "effects"]) {
    if (!Array.isArray(data[key])) continue;
    data[key] = data[key].map((d) => {
      const out = withoutOwnership(d);
      if (isPlain(out) && Array.isArray(out.effects)) out.effects = out.effects.map(withoutOwnership);
      return out;
    });
  }
  return data;
}

/** dnd5e accepts identifiers matching this and rejects the whole item otherwise. */
export const IDENTIFIER = /^[a-z0-9_-]+$/i;
/** What dnd5e itself would derive from a name: lower-case ASCII, dashes between words. */
export function slugifyIdentifier(text) {
  return String(text ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/['\u2019]/g, "").replace(/[^a-z0-9_]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
/**
 * Fix, in place, every embedded item identifier the system would refuse
 * ("toad-—-eager-variant", "disaster-inc.-catastrophe-scout": players' own
 * exports carry them, and an invalid embedded item is an invisible document
 * that logs an error on every world load). Returns the repairs made.
 */
export function repairIdentifiers(data) {
  const repairs = [];
  for (const it of data?.items ?? []) {
    const sys = it?.system;
    if (!isPlain(sys)) continue;
    for (const key of ["identifier", "classIdentifier", "sourceClass"]) {
      const v = sys[key];
      if (typeof v !== "string" || !v || IDENTIFIER.test(v)) continue;
      const to = slugifyIdentifier(v) || slugifyIdentifier(it.name) || "item";
      sys[key] = to;
      repairs.push({ item: it.name ?? "?", key, from: v, to });
    }
  }
  return repairs;
}

/** The suite's tags on an actor (flags["waluipedia-sheets"].tags), as strings. */
export function tagsOf(actor) {
  const flags = actor?.flags ?? actor?._source?.flags ?? {};
  const t = flags?.["waluipedia-sheets"]?.tags;
  return Array.isArray(t) ? t.map((x) => String(x ?? "").trim()).filter(Boolean) : [];
}

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
/** Waluipedia's site index (data/sheets.json) — the one file people reach for by mistake. */
export const isSheetIndex = (raw) => !!(raw && typeof raw === "object" && Array.isArray(raw.sheets) && raw.meta && !Array.isArray(raw.actors));
/** A world manifest (manifest.json next to split actor files): rows of {name, type, _id, file}. */
export const isManifest = (raw) => !!(raw && typeof raw === "object" && Array.isArray(raw.actors) && raw.actors.length > 0
  && raw.actors.every((a) => a && typeof a === "object" && typeof a.file === "string" && a.system === undefined && a.items === undefined));

export function normalizeImport(raw) {
  let meta = {}, folders = [], actors = [];
  if (isSheetIndex(raw)) throw new Error("This is Waluipedia's sheet index (data/sheets.json), not an actor packet — nothing in it can be imported. Click Sync instead (it finds everything by itself), or import import.json (Data: npc/waluipedia/<world>/import.json · launcher: http://127.0.0.1:8765/Reputation-Matrix2/actors/worlds/<world>/import.json)");
  if (isManifest(raw)) throw new Error("This is a world manifest (manifest.json): the actor files sit next to it. Give its URL or Data path and they are fetched for you — a manifest uploaded on its own cannot be");
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
  // folder colours / descriptions, by path: the module's own export carries
  // them per folder; the suite's packets add an explicit folderStyles map
  const folderStyles = {};
  for (const f of folders) {
    if (!f || typeof f !== "object") continue;
    const p = Array.isArray(f.path) ? f.path.map(String) : (byId.has(f._id) ? folderPathOf(f, byId) : null);
    if (!p?.length || !(f.color || f.description)) continue;
    folderStyles[p.join(" / ")] = { color: f.color ?? null, description: f.description ?? null };
  }
  if (isPlain(raw?.folderStyles)) for (const [k, v] of Object.entries(raw.folderStyles)) if (isPlain(v)) folderStyles[splitPath(k).join(" / ")] = { color: v.color ?? null, description: v.description ?? null };
  return { meta, folders, entries, folderStyles };
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
export async function loadSourceDetailed({ file, url, folderMode = "dirs", source = "data", manifestFolder = null } = {}) {
  if (file) return { raw: JSON.parse(await file.text()), files: [file.name], ignored: [], kind: "file" };
  const src = String(url ?? "").trim();
  if (!src) throw new Error("Choose a file, pick a Data path, or give a URL");
  if (/^https?:\/\//i.test(src) || isJsonName(src)) {
    const kind = /^https?:/i.test(src) ? "url" : "data-file";
    const raw = await fetchJson(src);
    if (isManifest(raw)) return { ...(await loadManifest(src, { folder: manifestFolder })), kind };
    return { raw, files: [src], ignored: [], kind };
  }
  const loaded = await loadDataPath(src, { folderMode, source });
  return { ...loaded, kind: "data-directory" };
}

/**
 * A world manifest (what tools/foundry-bridge.py split writes next to the
 * actor files, and what the repo commits — the packets themselves are not
 * committed): fetch every file it lists, relative to the manifest, and
 * assemble them with the directories as folders. `folder` keeps only the
 * files under one directory ("Players").
 */
export async function loadManifest(url, { folder = null, onProgress } = {}) {
  const raw = await fetchJson(url);
  if (!isManifest(raw)) throw new Error(`${url}: not a world manifest`);
  const base = String(url).replace(/[^/]*$/, "");
  const prefix = folder ? `${trimSlashes(folder)}/` : "";
  const rows = raw.actors.filter((r) => !prefix || r.file.startsWith(prefix));
  if (!rows.length) throw new Error(`${url}: no actor files under ${folder}`);
  const files = [], ignored = [];
  let n = 0;
  for (const r of rows) {
    const target = base + r.file.split("/").map(encodeURIComponent).join("/");
    try { files.push({ path: r.file, raw: await fetchJson(target) }); }
    catch (err) { ignored.push({ path: r.file, reason: err.message }); }
    onProgress?.(++n, rows.length);
  }
  const assembled = assembleDirectory(files, { base: "", folderMode: "dirs", world: raw.exportedFrom ?? null });
  assembled.payload.exportedAt = raw.exportedAt ?? null;
  assembled.payload.assembledFrom = url;
  return { raw: assembled.payload, files: files.map((f) => f.path), ignored: [...ignored, ...assembled.ignored], kind: "manifest", exportedAt: raw.exportedAt ?? null };
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
      status: existing ? (existing.type && d.type && existing.type !== d.type ? "replace" : "update") : "new",
      existingId: existing ? (existing.id ?? existing._id) : null, existingType: existing?.type ?? null,
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
  const counts = { new: 0, update: 0, replace: 0 };
  plan.forEach((r) => { counts[r.status] = (counts[r.status] ?? 0) + 1; });
  const rows = plan.map((r) => `<tr class="wmi-row wmi-${r.status}" data-key="${escapeHtml(r.key)}" data-status="${r.status}">
      <td><input type="checkbox" name="inc:${escapeHtml(r.key)}" ${r.include ? "checked" : ""}></td>
      <td><input type="text" name="name:${escapeHtml(r.key)}" value="${escapeHtml(r.name)}" title="${escapeHtml(r.sourceFile ?? (r.id ?? ""))}"></td>
      <td>${escapeHtml(r.type)}</td>
      <td><input type="text" name="folder:${escapeHtml(r.key)}" value="${escapeHtml(r.folderPath.join(" / "))}" placeholder="root"></td>
      <td class="wmi-status">${r.status === "update" ? `update${r.existingName && r.existingName !== r.name ? ` <small>(${escapeHtml(r.existingName)})</small>` : ""}` : (r.status === "replace" ? `replace <small>(${escapeHtml(r.existingType ?? "?")} → ${escapeHtml(r.type)})</small>` : "new")}</td>
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
      ${tool("only updates", `${F}for(const tr of ${vis})tr.querySelector('input[type=checkbox]').checked=(tr.dataset.status==='update'||tr.dataset.status==='replace');`, "tick the actors that already exist here")}
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
    // Foundry stores paths already URL-encoded ("npc/MLSS%2BBM_Art.png"):
    // encode only when the path has no escapes yet, never twice (%252B).
    const url = /%[0-9A-Fa-f]{2}/.test(path) ? path : encodeURI(path);
    const res = await G().fetch(url, { method: "HEAD", cache: "no-store" });
    ok = !!res?.ok;
  } catch (err) { ok = false; }
  imageCache.set(path, ok);
  return ok;
}

/** A wildcard token image ("tokens/guard*.webp", "{a,b}.webp") — one of many files, not HEAD-checkable. */
export const isWildcardPath = (p) => typeof p === "string" && /[*?{]/.test(p);

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
    if (isWildcardPath(path)) continue;
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

/**
 * Create the folder chain for `path`, reusing existing folders by name. With
 * `styles` ({"A / B": {color, description}}) a new folder is born in its
 * colour and an existing folder that has none is painted (`restyle`).
 */
/** Folder names compare trimmed and case-insensitively ("Koopa troop " is "Koopa Troop"). */
export const folderKey = (name) => String(name ?? "").trim().replace(/\s+/g, " ").toLowerCase();
const parentIdOf = (f) => (f?.folder?.id ?? f?.folder?._id ?? (typeof f?.folder === "string" ? f.folder : null) ?? null);

export async function ensureFolderPath(path, { cache, dryRun, report, styles = null, restyle = true }) {
  const game = G().game, Folder = G().Folder;
  let parentId = null;
  for (let i = 0; i < path.length; i++) {
    const key = path.slice(0, i + 1).join(" / ");
    if (cache.has(key)) { parentId = cache.get(key); continue; }
    const name = path[i];
    const style = styles?.[key] ?? null;
    const all = game.folders.contents ?? [...game.folders.values()];
    const matches = all.filter((f) => f.type === "Actor" && folderKey(f.name) === folderKey(name) && parentIdOf(f) === parentId);
    // several folders of one name (an earlier import's duplicates): the one
    // holding the most actors is the real one; tidyFolders merges the rest
    const existing = matches.length > 1 ? matches.map((f) => [f, countIn(f)]).sort((a, b) => b[1] - a[1])[0][0] : matches[0];
    let id;
    if (existing) {
      id = existing.id ?? existing._id;
      const current = existing.color?.css ?? (typeof existing.color === "string" ? existing.color : null);
      if (restyle && style?.color && !current && !dryRun && typeof existing.update === "function") {
        try { await existing.update({ color: style.color }); report.foldersStyled?.push(key); }
        catch (err) { console.warn(`[${MODULE_ID}] folder colour ${key}:`, err); }
      }
    }
    else if (dryRun) { id = `dry:${key}`; report.foldersCreated.push(key); }
    else {
      const data = { name, type: "Actor", folder: parentId, sorting: "a" };
      if (style?.color) data.color = style.color;
      if (style?.description) data.description = style.description;
      const created = await Folder.create(data);
      id = created.id ?? created._id;
      report.foldersCreated.push(key);
      if (style?.color) report.foldersStyled?.push(key);
    }
    cache.set(key, id);
    parentId = id;
  }
  return parentId;
}

/** {folderId: actors in the folder or anywhere below it} for every Actor folder. */
function subtreeCounts() {
  const game = G().game;
  const folders = game.folders?.contents ?? [...(game.folders?.values?.() ?? [])];
  const parent = new Map(folders.map((f) => [f.id ?? f._id, parentIdOf(f)]));
  const counts = {};
  const actors = game.actors?.contents ?? [...(game.actors?.values?.() ?? [])];
  for (const a of actors) {
    let id = a.folder?.id ?? a.folder?._id ?? a.folder ?? null;
    for (let depth = 0; id && depth < 64; depth++) { counts[id] = (counts[id] ?? 0) + 1; id = parent.get(id) ?? null; }
  }
  return counts;
}

function countIn(folder) {
  return subtreeCounts()[folder.id ?? folder._id] ?? 0;
}

function sameFolder(actor, folderId) {
  const current = actor.folder?.id ?? actor.folder?._id ?? actor.folder ?? null;
  return current === folderId;
}

/** A world document's last change (Foundry's _stats.modifiedTime, ms) or null. */
export function statsTime(doc) {
  const t = doc?._stats?.modifiedTime ?? (doc?.toObject ? doc.toObject()?._stats?.modifiedTime : doc?._stats?.modifiedTime) ?? null;
  return Number.isFinite(Number(t)) && Number(t) > 0 ? Number(t) : null;
}
/** The packet copy's time: its own _stats.modifiedTime (a mirror of the world) or, failing that, the packet's export stamp. */
export function packetTime(data, packetExportMs = null) {
  const own = Number(data?._stats?.modifiedTime);
  if (Number.isFinite(own) && own > 0) return own;
  return packetExportMs ?? null;
}
/**
 * Pure: the world's copy changed after the packet's copy was taken (more than
 * a second later — Foundry stamps the import's own writes too) AND after the
 * sync's own last write of it (`writtenMs`, the world stamp read back after
 * that write — without it every actor the sync ever touched counted as
 * "newer than the packet" until the next export loop: 181 kept, the folder
 * fixes never landing). Unknown on both sides → false (the packet applies).
 */
export function worldNewer(existing, data, packetExportMs = null, writtenMs = null) {
  const w = statsTime(existing), p = packetTime(data, packetExportMs);
  const written = Number(writtenMs);
  const base = Math.max(p ?? 0, Number.isFinite(written) && written > 0 ? written : 0);
  return !!(w && base && w > base + 1000);
}

/** World setting: JSON {actorId: ms} — the world's _stats.modifiedTime right after the sync's own last write of that actor. */
export const SYNC_WRITTEN_SETTING = "syncWritten";
export function readWritten() {
  try {
    const raw = G().game?.settings?.get?.(MODULE_ID, SYNC_WRITTEN_SETTING);
    const obj = raw ? JSON.parse(raw) : {};
    return isPlain(obj) ? obj : {};
  } catch (err) { return {}; }
}
/** Save the map (actors no longer in the world dropped). Quiet where there are no settings (tests, a macro). */
export async function saveWritten(map) {
  const g = G();
  const actors = g.game?.actors;
  const pruned = {};
  for (const [id, t] of Object.entries(map ?? {})) if (Number(t) > 0 && (!actors?.get || actors.get(id))) pruned[id] = Number(t);
  try { await g.game.settings.set(MODULE_ID, SYNC_WRITTEN_SETTING, JSON.stringify(pruned)); } catch (err) { /* no settings here */ }
  return pruned;
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

/** A cached copy dnd5e keeps of a Cast activity's spell (flags.dnd5e.cachedFor = ".Item.<id>.Activity.<id>"). */
export const isCachedSpell = (obj) => typeof obj?.flags?.dnd5e?.cachedFor === "string" && obj.flags.dnd5e.cachedFor.length > 0;

/**
 * An actor's embedded documents as plain objects, by id — INCLUDING the ones
 * Foundry could not validate (a race whose identifier has an em dash): those
 * are not in the collection's contents, only in the actor's source and the
 * collection's invalidDocumentIds. {id: {obj, invalid}}.
 */
export function embeddedSources(actor, collection) {
  const coll = actor[collection];
  const out = new Map();
  const docs = coll?.contents ?? [...(coll?.values?.() ?? [])];
  for (const d of docs) out.set(d.id ?? d._id, { obj: d.toObject ? d.toObject() : clone(d), invalid: false });
  const invalid = coll?.invalidDocumentIds;
  if (invalid && typeof invalid[Symbol.iterator] === "function") {
    const source = Array.isArray(actor._source?.[collection]) ? actor._source[collection] : [];
    for (const id of invalid) {
      if (out.has(id)) continue;
      let src = source.find((d) => d?._id === id) ?? null;
      if (!src) { try { const bad = coll.getInvalid?.(id, { strict: false }); src = bad?._source ?? (bad?.toObject ? bad.toObject() : null); } catch (err) { src = null; } }
      out.set(id, { obj: src ? clone(src) : { _id: id }, invalid: true });
    }
  }
  return out;
}

const itemLabel = (d) => `${d?.name ?? "?"} [${d?.type ?? "?"}]`;

/**
 * Bring an actor's embedded collection to what the import has: delete what it
 * lacks (with `replace`), update only documents that differ — and only the
 * fields that differ (docDiff) — then create the rest with their ids.
 *  - dnd5e's cached spells (flags.dnd5e.cachedFor) are NEVER written: the
 *    system creates, replaces and deletes them itself whenever their Cast item
 *    changes, concurrently with us — touching them is the "Item X does not
 *    exist!" storm and the "_id already exists" failure. Both sides of the
 *    diff ignore them.
 *  - A document Foundry holds as INVALID (it never reached the collection, so
 *    v1.4 tried to create it again and hit "_id already exists") is repaired
 *    through an UPDATE of the differing fields — the system's singleton rule
 *    (one species, one background per character) only guards creation. If
 *    the update is refused it is deleted and created again under its id.
 *  - A creation the system refuses (that singleton rule, with a stand-in
 *    species already on the sheet) is a `refused` note on the stats, not a
 *    failure of the whole actor.
 *  - An item whose activities change is updated in a call of its own: dnd5e
 *    keeps the cached-spell ids it must remove on the shared batch options,
 *    so two such items in one call would trip over each other.
 */
/** dnd5e's one-per-character items (metadata.singleton): a second creation is refused in _preCreate. */
export const SINGLETON_TYPES = new Set(["race", "background"]);
const isSingletonType = (actor, type) => actor?.type === "character" && SINGLETON_TYPES.has(type);
const standInsOf = (coll, type, except = null) => (coll?.contents ?? [...(coll?.values?.() ?? [])])
  .filter((i) => i?.type === type && (i.id ?? i._id) !== except).map((i) => ({ id: i.id ?? i._id, name: i.name }));
/** The item id dnd5e's system.details.race / .background names on a character's SOURCE (null for legacy free text). */
export function appliedSingletonId(actor, type) {
  const src = actor?._source?.system?.details ?? (actor?.toObject ? actor.toObject()?.system?.details : actor?.system?.details) ?? {};
  const v = src?.[type];
  const id = typeof v === "string" ? v : (v?.id ?? v?._id ?? null);
  return id && USER_ID.test(id) ? id : null;
}
/**
 * A species / background on a character that the sheet does not apply:
 * details.race / .background names ANOTHER item of the type, live on the
 * sheet. Returns that applied item ({id, name}) or null. The archive's own
 * "Toad — Eager Variant" sat broken beside the Grung the player applied: a
 * leftover — repairing it would need a swap that removes the Grung; deleting
 * it loses nothing the sheet uses.
 */
export function singletonLeftover(actor, data) {
  if (!isSingletonType(actor, data?.type)) return null;
  const applied = appliedSingletonId(actor, data.type);
  if (!applied || applied === data._id) return null;
  const live = actor.items?.get?.(applied);
  return (live && live.type === data.type) ? { id: applied, name: live.name } : null;
}
/** Pure: the leaf paths of an update object ("system.attributes.hp.value"), arrays and -=keys as leaves. */
export function leafPaths(obj, prefix = "", out = []) {
  for (const [k, v] of Object.entries(obj ?? {})) {
    const here = prefix ? `${prefix}.${k}` : k;
    if (isPlain(v) && Object.keys(v).length && !k.startsWith("-=")) leafPaths(v, here, out);
    else out.push(here);
  }
  return out;
}

/**
 * Pure: what bringing `existing` (embeddedSources, cached spells removed) to
 * `incoming` takes. {batch, solo, invalid, toCreate, toDelete, unchanged,
 * changes[]} — `changes` in words ("~ Toad [race] (system.identifier)").
 */
export function planEmbedded(existing, incoming, replace) {
  const wanted = (incoming ?? []).filter((d) => d && !isCachedSpell(d)).map(withoutOwnership);
  const incomingIds = new Set(wanted.filter((d) => d._id).map((d) => d._id));
  const plan = { batch: [], solo: [], invalid: [], toCreate: [], toDelete: [], unchanged: 0, changes: [] };
  plan.toDelete = replace ? [...existing.keys()].filter((id) => !incomingIds.has(id)) : [];
  for (const id of plan.toDelete) plan.changes.push(`− ${itemLabel(existing.get(id)?.obj)}`);
  for (const d of wanted) {
    if (!d._id || !existing.has(d._id)) { plan.toCreate.push(d); plan.changes.push(`+ ${itemLabel(d)}`); continue; }
    const cur = existing.get(d._id);
    const diff = docDiff(withoutOwnership(cur.obj), d);
    if (!Object.keys(diff).length) { plan.unchanged++; continue; }
    const paths = leafPaths(diff);
    plan.changes.push(`${cur.invalid ? "repair" : "~"} ${itemLabel(d)} (${paths.slice(0, 4).join(", ")}${paths.length > 4 ? ` +${paths.length - 4}` : ""})`);
    if (cur.invalid) { plan.invalid.push({ data: d, update: { _id: d._id, ...diff } }); continue; }
    (isPlain(diff.system) && "activities" in diff.system ? plan.solo : plan.batch).push({ _id: d._id, ...diff });
  }
  return plan;
}

/**
 * Repair ONE document Foundry holds as invalid. Through the parent first:
 * `actor.update({items: [{_id, ...fixes}]})` merges by _id on the actor's
 * SOURCE, where an invalid document still lives — the path dnd5e's own
 * migrations take; the embedded route (updateEmbeddedDocuments) looks the
 * document up in the live collection, where it is not, and dies with
 * "Cannot read properties of undefined (reading '_source')" (v14). That
 * counts as a repair only when the document is live afterwards: on v14 the
 * update went through without bringing the item back (1.8 then reported it
 * "repaired (unverified)" and the world logged the same seven invalid items
 * on every load). Otherwise the document is replaced — deleted and created
 * again from the packet's copy under the same id — but one of a kind (a
 * species, a background) is NEVER deleted while a stand-in sits on the
 * sheet: the creation would be refused and the broken copy was the only one
 * left. The GM gets a swap (one click) instead.
 */
async function repairInvalid(actor, collection, docName, data, update, stats) {
  const coll = actor[collection];
  const id = data._id;
  const label = itemLabel(data);
  try {
    await actor.update({ [collection]: [update] }, { render: false });
    const live = typeof coll?.has === "function" ? coll.has(id) : true;
    if (live) { stats.repaired++; stats.updated++; return; }
    console.warn(`[${MODULE_ID}] ${actor.name}: ${label} is still invalid after the update through the actor — replacing it`);
  } catch (err) { console.warn(`[${MODULE_ID}] ${actor.name}: ${label} could not be repaired through the actor (${err?.message ?? err}) — replacing it`); }
  if (isSingletonType(actor, data.type)) {
    const standIns = standInsOf(coll, data.type, id);
    if (standIns.length) { stats.refused.push(label); stats.swaps.push({ label, data: clone(data), standIns, invalidId: id }); return; }
    // no stand-in: a fresh copy first (under a new id — the old one is taken until the broken copy goes), the broken copy last
    const { _id, ...fresh } = data;
    const made = await actor.createEmbeddedDocuments(docName, [fresh]);
    if (!Array.isArray(made) || made.length === 0) { stats.refused.push(label); return; }
    try { await actor.deleteEmbeddedDocuments(docName, [id]); } catch (err) { console.warn(`[${MODULE_ID}] ${actor.name}: delete broken ${label}:`, err); }
    stats.repaired++; stats.created++;
    return;
  }
  try { await actor.deleteEmbeddedDocuments(docName, [id]); } catch (err) { console.warn(`[${MODULE_ID}] ${actor.name}: delete ${label}:`, err); }
  const made = await actor.createEmbeddedDocuments(docName, [data], { keepId: true });
  if (Array.isArray(made) && made.length === 0) stats.refused.push(label);
  else { stats.repaired++; stats.created++; }
}

/**
 * `dropLeftovers`: delete the broken leftovers even in a dry run — a kept
 * actor (world newer) is not written, but a broken document the sheet never
 * used is not content, and it logs an error on every world load until it goes.
 */
async function syncEmbedded(actor, collection, docName, incoming, replace, { dryRun = false, dropLeftovers = false } = {}) {
  const coll = actor[collection];
  const existing = embeddedSources(actor, collection);
  for (const [id, e] of [...existing]) if (isCachedSpell(e.obj)) existing.delete(id);
  const plan = planEmbedded(existing, incoming, replace);
  const stats = { deleted: 0, updated: 0, created: 0, unchanged: plan.unchanged, repaired: 0, refused: [], swaps: [], leftovers: [], reloadNeeded: 0, changes: plan.changes };
  // a broken species / background the sheet does not apply is a leftover:
  // removed, never repaired (that would need a swap) and never offered as one
  // — whether the packet still carries it (an older mirror) or not (a healed one)
  const leftovers = [];
  const noteLeftover = (data, applied, oldLine) => {
    leftovers.push({ data, applied });
    stats.changes = stats.changes.filter((c) => c !== oldLine);
    stats.changes.push(`− ${itemLabel(data)} (broken leftover; the sheet applies ${applied.name})`);
    stats.leftovers.push({ label: itemLabel(data), applied: applied.name, id: data._id, action: "removed" });
  };
  plan.invalid = plan.invalid.filter(({ data, update }) => {
    const applied = singletonLeftover(actor, data);
    if (!applied) return true;
    const paths = leafPaths(update).filter((k) => k !== "_id");
    noteLeftover(data, applied, `repair ${itemLabel(data)} (${paths.slice(0, 4).join(", ")}${paths.length > 4 ? ` +${paths.length - 4}` : ""})`);
    return false;
  });
  plan.toDelete = plan.toDelete.filter((id) => {
    const cur = existing.get(id);
    const applied = cur?.invalid ? singletonLeftover(actor, cur.obj) : null;
    if (!applied) return true;
    noteLeftover(cur.obj, applied, `− ${itemLabel(cur.obj)}`);
    return false;
  });
  const gone = new Set([...plan.toDelete, ...leftovers.map((l) => l.data._id)]);
  // one of a kind with a stand-in on the sheet (that is staying): the system
  // would refuse the creation — not attempted, offered as a swap instead. A
  // packet copy with no advancements beside the sheet's APPLIED one is the same
  // leftover from the packet's side: left out, no swap (the sheet's wins).
  const creatable = [];
  for (const d of plan.toCreate) {
    const standIns = isSingletonType(actor, d.type) ? standInsOf(coll, d.type).filter((x) => !gone.has(x.id)) : [];
    if (standIns.length) {
      const applied = singletonLeftover(actor, d);
      const adv = d.system?.advancement;
      if (applied && !(Array.isArray(adv) ? adv.length : (isPlain(adv) && Object.keys(adv).length))) {
        stats.changes = stats.changes.filter((c) => c !== `+ ${itemLabel(d)}`);
        stats.leftovers.push({ label: itemLabel(d), applied: applied.name, id: d._id ?? null, action: "left out" });
        continue;
      }
      stats.refused.push(itemLabel(d)); stats.swaps.push({ label: itemLabel(d), data: clone(d), standIns, invalidId: null }); continue;
    }
    creatable.push(d);
  }
  if (leftovers.length && (!dryRun || dropLeftovers)) {
    for (const { data, applied } of leftovers) {
      const src = existing.get(data._id)?.obj ?? data;
      console.info(`[${MODULE_ID}] ${actor.name}: removing the broken ${itemLabel(data)} — the sheet applies ${applied.name}; its data:`, src);
      try { await actor.deleteEmbeddedDocuments(docName, [data._id]); stats.deleted++; }
      catch (err) { console.warn(`[${MODULE_ID}] ${actor.name}: the broken ${itemLabel(data)} could not be deleted:`, err); }
    }
  } else stats.deleted += leftovers.length;  // a preview: they go when it applies
  if (dryRun) {
    stats.deleted += plan.toDelete.length;
    stats.updated = plan.batch.length + plan.solo.length + plan.invalid.length;
    stats.repaired = plan.invalid.length;
    stats.created = creatable.length;
    return stats;
  }
  if (plan.toDelete.length) {
    const live = plan.toDelete.filter((id) => !existing.get(id)?.invalid && (typeof coll?.has === "function" ? coll.has(id) : true));
    if (live.length) await actor.deleteEmbeddedDocuments(docName, live);
    stats.deleted = live.length;
    for (const id of plan.toDelete.filter((bad) => existing.get(bad)?.invalid)) {
      try { await actor.deleteEmbeddedDocuments(docName, [id]); stats.deleted++; }
      catch (err) { console.warn(`[${MODULE_ID}] ${actor.name}: invalid ${docName} ${id} could not be deleted:`, err); }
    }
  }
  if (plan.batch.length) await actor.updateEmbeddedDocuments(docName, plan.batch);
  for (const one of plan.solo) await actor.updateEmbeddedDocuments(docName, [one]);
  stats.updated = plan.batch.length + plan.solo.length;
  for (const { data, update } of plan.invalid) await repairInvalid(actor, collection, docName, data, update, stats);
  if (creatable.length) {
    const made = await actor.createEmbeddedDocuments(docName, creatable, { keepId: true });
    const got = Array.isArray(made) ? made.length : creatable.length;
    stats.created += got;
    if (Array.isArray(made) && got < creatable.length) {
      const ids = new Set(made.map((m) => m?.id ?? m?._id).filter(Boolean));
      for (const d of creatable) if (!(d._id && ids.has(d._id)) && !made.some((m) => m?.name === d.name && m?.type === d.type)) stats.refused.push(itemLabel(d));
    }
  }
  return stats;
}

/**
 * The one click behind a refused species/background: the stand-in(s) of that
 * type leave the sheet (and the broken copy, if one is still held invalid),
 * then the packet's item is created under its own id. dnd5e points
 * system.details.race / .background at it by itself (_onCreate).
 */
export async function swapSingleton({ actorId, data, invalidId = null }) {
  const g = G();
  const actor = g.game?.actors?.get?.(actorId);
  if (!actor) throw new Error(`actor ${actorId} is not in this world any more`);
  if (!data?.type) throw new Error("nothing to swap in");
  const ids = standInsOf(actor.items, data.type, data._id).map((x) => x.id);
  if (invalidId && actor.items?.invalidDocumentIds?.has?.(invalidId)) ids.push(invalidId);
  if (ids.length) await actor.deleteEmbeddedDocuments("Item", ids);
  const made = await actor.createEmbeddedDocuments("Item", [data], { keepId: !!data._id });
  if (!Array.isArray(made) || !made.length) throw new Error(`${itemLabel(data)} was refused even with the stand-in gone — add it from the compendium`);
  return made[0];
}

/** HTML for the swaps a report carries: one button each (works in the dialog and in the chat whisper). */
export function swapsHtml(swaps) {
  if (!swaps?.length) return "";
  const btn = (w) => `<li><b>${escapeHtml(w.actor)}</b> — ${escapeHtml(w.label)} is what the packet has; the sheet carries ${escapeHtml(w.standIns.map((x) => x.name).join(" / "))} <button type="button" class="wmi-swap" data-actor="${escapeHtml(w.actorId)}" data-invalid="${escapeHtml(w.invalidId ?? "")}" data-item="${escapeHtml(JSON.stringify(w.data))}">Swap: remove ${escapeHtml(w.standIns.map((x) => x.name).join(" / "))}, add ${escapeHtml(w.data.name)}</button></li>`;
  return `<details open><summary>One of a kind — swap the stand-in? (${swaps.length})</summary><ul>${swaps.map(btn).join("")}</ul><p class="notes">dnd5e allows one species and one background per character, so the sync never deletes one and never forces the other in. The button removes the stand-in and adds the packet's item under its own id; nothing else on the sheet moves.</p></details>`;
}

/** Click handler for the swap buttons (dialog or chat) — bound once at ready. */
export async function onSwapClick(event) {
  const b = event?.target?.closest?.(".wmi-swap");
  if (!b || b.disabled) return false;
  event.preventDefault?.();
  let data = null;
  try { data = JSON.parse(b.dataset.item); } catch (err) { data = null; }
  if (!data) { notify("error", "Swap: the item data is missing — run Sync again"); return false; }
  b.disabled = true;
  try {
    const made = await swapSingleton({ actorId: b.dataset.actor, data, invalidId: b.dataset.invalid || null });
    b.textContent = `✔ ${made?.name ?? data.name} is on the sheet`;
    notify("info", `${made?.name ?? data.name} swapped in`);
    return true;
  } catch (err) {
    b.disabled = false;
    notify("error", `Swap: ${err?.message ?? err}`);
    console.error(`[${MODULE_ID}] swap`, err);
    return false;
  }
}

/**
 * Pure: a character carrying two of a kind dnd5e means to be unique (the
 * players' broken Toad species next to the Grung stand-in they added while it
 * was invalid) — a note for the GM, who decides which one goes.
 */
export function singletonNotes(actorObj) {
  if (actorObj?.type !== "character") return [];
  const by = {};
  for (const it of actorObj.items ?? []) if (it?.type === "race" || it?.type === "background") (by[it.type] ??= []).push(it.name);
  return Object.entries(by).filter(([, names]) => names.length > 1)
    .map(([type, names]) => `${names.length} ${type === "race" ? "species" : "background"} items — ${names.join(" / ")} — keep one, delete the stand-in`);
}

function mergeFlags(existingFlags, incomingFlags) {
  const out = clone(existingFlags ?? {});
  for (const [scope, value] of Object.entries(incomingFlags ?? {})) {
    out[scope] = (value && typeof value === "object" && !Array.isArray(value)) ? { ...(out[scope] ?? {}), ...value } : value;
  }
  return out;
}

/** The flag namespaces that describe where an actor is filed, not what is on the sheet. */
export const ORGANISATION_FLAGS = ["waluipedia-sheets", MODULE_ID];
/**
 * Pure: the organisation part of an update — the folder and the suite's own
 * flags (website tags, folder path, group colour) — or null when the world
 * already agrees. A kept actor (world newer) takes this and nothing else: the
 * packet's folder and tags say where the sheet belongs, and a sheet edited at
 * the table is no reason to leave it in a stale "Disaster Inc." folder.
 */
export function organisationUpdate(existingObj, incomingFlags, folderId = undefined) {
  const have = existingObj?.flags ?? {};
  const flags = {};
  for (const ns of ORGANISATION_FLAGS) {
    const want = incomingFlags?.[ns];
    if (!isPlain(want)) continue;
    const merged = isPlain(have[ns]) ? { ...have[ns], ...want } : want;
    const d = docDiff({ flags: { [ns]: have[ns] } }, { flags: { [ns]: merged } });
    if (d.flags?.[ns] !== undefined) flags[ns] = d.flags[ns];
  }
  const out = {};
  if (Object.keys(flags).length) out.flags = flags;
  if (folderId !== undefined) out.folder = folderId;
  return Object.keys(out).length ? out : null;
}

export const DEFAULTS = {
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
  preferNewer: true,         // an actor changed in the world AFTER the packet's copy was exported is kept as is (the export loop brings it back; a dry run names the difference)
  replaceOnTypeChange: false, // same id, different type (npc -> character): delete + recreate under the same id — off: reported as skipped, the GM decides (1.9; the sheet in the world is the one being played)
  colorFolders: true,        // paint new folders (and colourless existing ones) in the packet's colours
  repairIdentifiers: true,   // slugify item identifiers dnd5e would reject (reported)
  progress: true,
};

let progressNote = null;
/** v13+: a progress notification (ui.notifications.info(…, {progress: true}).update); v12: the scene-navigation bar. */
function progress(label, pct) {
  const g = G();
  const n = g.ui?.notifications;
  try {
    if (typeof n?.info === "function") {
      if (!progressNote || (progressNote.done && pct < 100)) {
        const note = n.info(label, { progress: true, console: false });
        progressNote = (note && typeof note.update === "function") ? note : null;
      }
      if (progressNote) {
        progressNote.update({ pct: Math.max(0, Math.min(1, pct / 100)), message: label });
        if (pct >= 100) progressNote.done = true;
        return;
      }
    }
    const nav = g.SceneNavigation ?? g.foundry?.applications?.ui?.SceneNavigation;
    nav?.displayProgressBar?.({ label, pct: Math.round(pct) });
  } catch (err) { /* cosmetic */ }
}

/**
 * Import a payload. Returns the report:
 * { created:[], updated:[], skipped:[], failed:[], foldersCreated:[], missingImages:[], dryRun }
 */
export async function importPayload(raw, options = {}) {
  const o = { ...DEFAULTS, ...options };
  const Actor = G().Actor;
  const { entries, meta, folderStyles } = normalizeImport(raw);
  const report = { created: [], updated: [], replaced: [], skipped: [], failed: [], kept: [], foldersCreated: [], foldersStyled: [], foldersMerged: [], foldersPruned: [], missingImages: [], repaired: [], notes: [], swaps: [], embeddedRepaired: 0, reloadNeeded: 0, unchanged: 0, tokensRelinked: 0, dryRun: o.dryRun, meta };
  const packetExportMs = Date.parse(meta?.exportedAt ?? "") || null;
  const folderCache = new Map();
  const prefix = splitPath(o.rootFolder);
  const batchIds = new Set(entries.map((e) => e.data?._id).filter(Boolean));
  const total = entries.length;
  // the sync's own last writes (world stamps) — read for the newer-than check, re-stamped at the end
  const written = readWritten();
  const touched = new Set();
  let n = 0;
  for (const entry of entries) {
    n++;
    if (o.progress && total > 5) progress(`${MODULE_ID}: ${n}/${total}`, (100 * n) / total);
    const data = clone(entry.data);
    const label = `${data.name} [${data.type}]`;
    try {
      if (o.skipPlayerCharacters && data.type === "character") { report.skipped.push({ actor: label, reason: "player character" }); continue; }
      if (o.repairIdentifiers) { const fixes = repairIdentifiers(data); if (fixes.length) report.repaired.push({ actor: label, repairs: fixes }); }
      stripEmbeddedOwnership(data);
      // folderPath null = the file only has a folder id we cannot name (old macro
      // export). Existing actors then keep their folder; new ones go into that
      // folder if this world has it (same-world re-import), else the root/prefix.
      const known = Array.isArray(entry.folderPath);
      const path = known ? [...prefix, ...entry.folderPath] : [...prefix];
      let folderId = path.length ? await ensureFolderPath(path, { cache: folderCache, dryRun: o.dryRun, report, styles: folderStyles, restyle: o.colorFolders }) : null;
      const hintId = typeof data.folder === "string" ? data.folder : (data.folder?.id ?? null);
      if (!known && !path.length && hintId && game.folders?.get?.(hintId)) folderId = hintId;
      const existing = findExisting(data, folderId, o, batchIds);
      const folderLabel = known ? path.join(" / ") : (existing ? "(kept)" : (folderId ? (game.folders.get(folderId)?.name ?? folderId) : path.join(" / ")));
      if (existing && o.mode === "create") { report.skipped.push({ actor: label, reason: "exists (create-only)" }); continue; }
      if (!existing && o.mode === "update") { report.skipped.push({ actor: label, reason: "not found (update-only)" }); continue; }
      if (o.checkImages) await checkImages(data, o.fixMissingImages, report, label);

      // The world moved on after this copy was exported (a session: HP, loot,
      // a level-up at the table): the packet is behind for this actor and must
      // not roll it back. Kept as is — the difference is still computed and
      // shown; the export loop carries the world into the repo, after which
      // the packet agrees and the overlays (XP from the ledger, flags) apply.
      if (existing && o.preferNewer && worldNewer(existing, data, packetExportMs, written[existing.id ?? existing._id])) {
        const items_ = await syncEmbedded(existing, "items", "Item", data.items ?? [], o.replaceEmbedded, { dryRun: true, dropLeftovers: !o.dryRun });
        const effects_ = await syncEmbedded(existing, "effects", "ActiveEffect", data.effects ?? [], o.replaceEmbedded, { dryRun: true });
        const { _id, items = [], effects = [], _stats, ownership, folder, type, ...rest } = data;
        const existingObj = existing.toObject ? existing.toObject() : existing;
        const update = (existing.type === data.type) ? docDiff(existingObj, { ...rest, flags: mergeFlags(existing.flags, rest.flags) }) : { type: data.type };
        if ((known || path.length) && !sameFolder(existing, folderId)) update.folder = folderId;
        // the organisation still follows the packet: folder + the suite's flags, never the sheet
        const refile = (existing.type === data.type) ? organisationUpdate(existingObj, rest.flags, update.folder) : null;
        const refileFields = refile ? leafPaths(refile) : [];
        const fields = leafPaths(update).filter((f) => !refileFields.includes(f));
        const changed = fields.length > 0 || [items_, effects_].some((s) => s.updated || s.created || (s.deleted - (s.leftovers?.filter((l) => l.action === "removed").length ?? 0)));
        if (refile && !o.dryRun) await existing.update(refile, { render: false });
        for (const w of [...items_.swaps, ...effects_.swaps]) report.swaps.push({ ...w, actor: label, actorId: existing.id ?? existing._id });
        for (const l of items_.leftovers) report.notes.push({ actor: label, note: leftoverNote(l) });
        if (!changed) {
          // content agrees (only the organisation moved, if anything): the world stamp is ours to remember
          if (!o.dryRun) touched.add(existing.id ?? existing._id);
          if (!refile) report.unchanged++;
          report.updated.push({ actor: label, id: existing.id ?? existing._id, folder: folderLabel, items: items_, effects: effects_, changed: !!refile, fields: refileFields, embedded: [], refile: refile ? { folder: refile.folder !== undefined ? folderLabel : null, fields: refileFields } : null });
          continue;
        }
        report.kept.push({ actor: label, id: existing.id ?? existing._id, folder: folderLabel, worldTime: statsTime(existing), packetTime: packetTime(data, packetExportMs), fields, embedded: [...items_.changes, ...effects_.changes], items: items_, effects: effects_,
          refile: refile ? { folder: refile.folder !== undefined ? folderLabel : null, fields: refileFields } : null });
        continue;
      }

      if (existing && existing.type && data.type && existing.type !== data.type) {
        // A document's type cannot be updated in place (an NPC statblock that
        // became a player character, say). Recreate it under the same id so
        // every token, journal link and ownership grant keeps resolving.
        if (!o.replaceOnTypeChange) {
          report.skipped.push({ actor: label, reason: `type differs (world ${existing.type}, import ${data.type}) — replace on type change is off` });
          continue;
        }
        const keptFolder = (known || path.length) ? folderId : (existing.folder?.id ?? existing.folder ?? null);
        const keptOwnership = (o.overwriteOwnership && data.ownership) ? data.ownership : clone(existing.ownership ?? data.ownership ?? { default: 0 });
        const createData = { ...data, _id: existing.id ?? existing._id, folder: keptFolder, ownership: keptOwnership };
        createData.flags = mergeFlags(existing.flags, data.flags);
        const row = { actor: label, id: createData._id, from: existing.type, to: data.type, folder: folderLabel };
        if (!o.dryRun) {
          await existing.delete();
          const created = await Actor.create(createData, { keepId: true, keepEmbeddedIds: true });
          row.id = created?.id ?? created?._id ?? createData._id;
          touched.add(row.id);
        }
        report.replaced.push(row);
        continue;
      }

      if (existing) {
        const { _id, items = [], effects = [], _stats, ownership, folder, type, ...rest } = data;
        const want = { ...rest, flags: mergeFlags(existing.flags, rest.flags) };
        if (o.overwriteOwnership && ownership) want.ownership = ownership;
        // only what differs: an untouched actor is not written at all — and a
        // dry run computes the very same difference, so it can say "nothing"
        const update = docDiff(existing.toObject ? existing.toObject() : existing, want);
        if ((known || path.length) && !sameFolder(existing, folderId)) update.folder = folderId;
        const textureBefore = existing.prototypeToken?.texture?.src ?? null;
        if (Object.keys(update).length && !o.dryRun) await existing.update(update);
        // the prototype token's art moved (a Data path ↔ a URL, a renamed file):
        // placed tokens copied the old path when they were dropped — move them too
        const textureAfter = update.prototypeToken?.texture?.src;
        if (typeof textureAfter === "string" && textureBefore && textureAfter !== textureBefore) {
          try { report.tokensRelinked += await relinkPlacedTokens(existing, textureBefore, textureAfter, { dryRun: o.dryRun }); }
          catch (err) { console.warn(`[${MODULE_ID}] placed tokens of ${label}:`, err); }
        }
        const items_ = await syncEmbedded(existing, "items", "Item", items, o.replaceEmbedded, { dryRun: o.dryRun });
        const effects_ = await syncEmbedded(existing, "effects", "ActiveEffect", effects, o.replaceEmbedded, { dryRun: o.dryRun });
        const fields = leafPaths(update);
        const changed = fields.length > 0 || [items_, effects_].some((s) => s.deleted || s.updated || s.created);
        if (!changed) report.unchanged++;
        report.embeddedRepaired += items_.repaired + effects_.repaired;
        report.reloadNeeded += items_.reloadNeeded + effects_.reloadNeeded;
        for (const what of [...items_.refused, ...effects_.refused]) report.notes.push({ actor: label, note: `${what} not added — refused by the system: one of its kind per character, and the sheet already carries one (a swap is offered; the sheet wins until you click it)` });
        for (const w of [...items_.swaps, ...effects_.swaps]) report.swaps.push({ ...w, actor: label, actorId: existing.id ?? existing._id });
        for (const l of items_.leftovers) report.notes.push({ actor: label, note: leftoverNote(l) });
        if (!o.dryRun) for (const note of singletonNotes(existing.toObject ? existing.toObject() : existing)) report.notes.push({ actor: label, note });
        if (!o.dryRun) touched.add(existing.id ?? existing._id);
        report.updated.push({ actor: label, id: existing.id ?? existing._id, folder: folderLabel, items: items_, effects: effects_, changed, fields, embedded: [...items_.changes, ...effects_.changes] });
      } else {
        const createData = { ...data, folder: folderId };
        if (!o.keepIds) delete createData._id;
        if (!o.dryRun) {
          const created = await Actor.create(createData, { keepId: !!(o.keepIds && createData._id), keepEmbeddedIds: true });
          const id = created?.id ?? created?._id ?? createData._id ?? null;
          if (id) touched.add(id);
          report.created.push({ actor: label, id, folder: folderLabel });
        } else report.created.push({ actor: label, id: createData._id ?? null, folder: folderLabel });
      }
    } catch (err) {
      console.error(`[${MODULE_ID}] ${label}:`, err);
      report.failed.push({ actor: label, error: err?.message ?? String(err) });
    }
  }
  if (o.progress && total > 5) progress(`${MODULE_ID}: done`, 100);
  // the stamps, read back after everything (dnd5e's own follow-up writes included)
  report.written = [...touched];
  if (!o.dryRun && touched.size) await stampWritten(report.written);
  return report;
}

/** Remember the world stamps of actors this sync wrote (re-run after the folder tidy, which moves actors too). */
export async function stampWritten(ids) {
  const written = readWritten();
  const actors = G().game?.actors;
  for (const id of ids ?? []) { const t = statsTime(actors?.get?.(id)); if (t) written[id] = t; }
  return saveWritten(written);
}

/** The GM's line for a leftover the sync removed or left out. */
function leftoverNote(l) {
  return l.action === "removed"
    ? `${l.label} removed — a broken copy the sheet never applied (its ${/\[race\]/.test(l.label) ? "species" : "background"} is ${l.applied}); the item's data is in the console (F12)`
    : `${l.label} left out — the packet's copy carries no advancements and the sheet applies ${l.applied} (a leftover, not a swap)`;
}

export async function importFromUrl(url, options = {}) {
  const raw = await loadSource({ url });
  const report = await importPayload(raw, options);
  announce(report);
  return report;
}

/** Matched actors that really differ (a row without a `changed` flag — an old report — counts). */
export const changedRows = (report) => (report.updated ?? []).filter((u) => u.changed !== false);

export function summarize(report) {
  const parts = [`${report.created.length} created`, `${changedRows(report).length} changed`];
  if (report.replaced?.length) parts.push(`${report.replaced.length} replaced`);
  if (report.kept?.length) parts.push(`${report.kept.length} kept (world newer)`);
  if (report.skipped.length) parts.push(`${report.skipped.length} skipped`);
  if (report.failed.length) parts.push(`${report.failed.length} FAILED`);
  if (report.foldersCreated.length) parts.push(`${report.foldersCreated.length} folders`);
  if (report.foldersStyled?.length) parts.push(`${report.foldersStyled.length} coloured`);
  if (report.foldersMerged?.length) parts.push(`${report.foldersMerged.length} duplicate folders merged`);
  if (report.foldersPruned?.length) parts.push(`${report.foldersPruned.length} empty folders removed`);
  if (report.repaired?.length) parts.push(`${report.repaired.reduce((n, r) => n + r.repairs.length, 0)} identifiers repaired`);
  if (report.embeddedRepaired) parts.push(`${report.embeddedRepaired} broken items repaired`);
  if (report.tokensRelinked) parts.push(`${report.tokensRelinked} placed token${report.tokensRelinked === 1 ? "" : "s"} re-pointed`);
  if (report.swaps?.length) parts.push(`${report.swaps.length} swap${report.swaps.length === 1 ? "" : "s"} waiting`);
  if (report.notes?.length) parts.push(`${report.notes.length} note${report.notes.length === 1 ? "" : "s"}`);
  if (report.missingImages.length) parts.push(`${report.missingImages.length} missing images`);
  let text = parts.join(", ");
  if (report.unchanged) text += ` (${report.unchanged} unchanged)`;
  if (report.reloadNeeded) text += ` — ${report.reloadNeeded} repaired in the database: reload (F5) to see them`;
  return (report.preview ? "WAITING FOR YOUR OK — " : report.dryRun ? "DRY RUN — " : "") + text;
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
      <label><input type="checkbox" name="replaceOnTypeChange" ${checked("replaceOnTypeChange")}> replace an actor whose type changed (NPC → character) under the same id</label>
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
  let report;
  try { report = await importPayload(raw, options); }
  catch (err) { notify("error", `Mass import: ${err.message}`); console.error(`[${MODULE_ID}]`, err); return null; }
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
    <details ${report.replaced?.length ? "open" : ""}><summary>Replaced — same id, new type (${report.replaced?.length ?? 0})</summary>${li(report.replaced ?? [], (r) => `${escapeHtml(r.actor)} · ${escapeHtml(r.from)} → ${escapeHtml(r.to)} → ${escapeHtml(r.folder || "root")}`)}</details>
    <details><summary>Skipped (${report.skipped.length})</summary>${li(report.skipped, (r) => `${escapeHtml(r.actor)} — ${escapeHtml(r.reason)}`)}</details>
    ${repairedHtml(report)}
    ${swapsHtml(report.swaps)}
    <details><summary>Folders created (${report.foldersCreated.length})</summary>${li(report.foldersCreated, (r) => escapeHtml(r))}</details>
  </div>`;
}

/** Identifiers slugified on the way in — the item is now valid and visible on the sheet. */
export function repairedHtml(report) {
  const rows = report.repaired ?? [];
  if (!rows.length) return "";
  const n = rows.reduce((t, r) => t + r.repairs.length, 0);
  return `<details open><summary>Repaired identifiers (${n})</summary><ul>${rows.map((r) => r.repairs.map((x) => `<li>${escapeHtml(r.actor)} · ${escapeHtml(x.item)} · <code>${escapeHtml(x.key)}</code> <s>${escapeHtml(x.from)}</s> → <code>${escapeHtml(x.to)}</code></li>`).join("")).join("")}</ul><p class="notes">dnd5e refuses an item whose identifier is not letters, digits, - or _; the players' exports carried these, which is why those items were invisible on the sheets and errored on every world load.</p></details>`;
}

/** The Actors sidebar after a sync: folder → how many of the imported actors live there. */
export function folderCounts(rows) {
  const counts = new Map();
  for (const r of rows ?? []) counts.set(r.folder || "root", (counts.get(r.folder || "root") ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

async function showHtml(title, content, width = 600) {
  const g = G();
  const DialogV2 = g.foundry?.applications?.api?.DialogV2;
  if (DialogV2) {
    return DialogV2.wait({ window: { title }, content, rejectClose: false, position: { width },
      buttons: [{ action: "ok", label: "Close", icon: "fas fa-check", default: true }] });
  }
  if (g.Dialog) return new g.Dialog({ title, content, buttons: { ok: { label: "Close" } } }, { width }).render(true);
  return null;
}

async function showReport(report) {
  return showHtml(report.dryRun ? "Mass import — dry run" : "Mass import — report", reportHtml(report));
}

/* --------------------------------------------------------- folder tidy */

/**
 * Pure. rows: [{id, name, parent}] (Actor folders). Groups of folders that
 * share a parent and a name (trimmed, case-insensitive) — what an earlier
 * import left behind. In each group the folder with the most actors below it
 * (`counts`: {id: n}) is kept — ties to a cleanly named one, then the first;
 * the others are merged into it.
 */
export function duplicateFolderGroups(rows, counts = {}) {
  const groups = new Map();
  for (const r of rows) {
    const key = `${r.parent ?? ""}\u0000${folderKey(r.name)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(r);
  }
  const out = [];
  for (const list of groups.values()) {
    if (list.length < 2) continue;
    const clean = (r) => (String(r.name ?? "") === String(r.name ?? "").trim().replace(/\s+/g, " ") ? 0 : 1);
    const sorted = [...list].sort((a, b) => (counts[b.id] ?? 0) - (counts[a.id] ?? 0) || clean(a) - clean(b));
    out.push({ keep: sorted[0], others: sorted.slice(1) });
  }
  return out;
}

/**
 * Pure. Folders with no actors and no sub-folders, children before parents
 * (deleting the leaf can empty its parent), as ids. rows as above; occupied:
 * the set of folder ids that hold at least one actor.
 */
export function emptyFolderIds(rows, occupied) {
  const alive = new Map(rows.map((r) => [r.id, r]));
  const used = new Set(occupied);
  const out = [];
  for (let pass = 0; pass < 64; pass++) {
    const parents = new Set([...alive.values()].map((r) => r.parent).filter(Boolean));
    const empties = [...alive.values()].filter((r) => !used.has(r.id) && !parents.has(r.id));
    if (!empties.length) break;
    for (const r of empties) { out.push(r.id); alive.delete(r.id); }
  }
  return out;
}

function folderRows() {
  const game = G().game;
  const folders = (game.folders?.contents ?? [...(game.folders?.values?.() ?? [])]).filter((f) => f.type === "Actor");
  return folders.map((f) => ({ id: f.id ?? f._id, name: f.name, parent: parentIdOf(f), doc: f }));
}

function actorFolderIds() {
  const game = G().game;
  const actors = game.actors?.contents ?? [...(game.actors?.values?.() ?? [])];
  return actors.map((a) => [a, a.folder?.id ?? a.folder?._id ?? a.folder ?? null]);
}

/**
 * After an import: merge duplicate Actor folders (same parent, same name) into
 * the fuller one — actors and sub-folders move over, the kept folder takes a
 * colour it lacks — and delete every Actor folder left with nothing in it.
 * Fills report.foldersMerged / foldersPruned. Does nothing on a dry run
 * beyond listing what it would do.
 */
export async function tidyFolders({ merge = true, prune = true, dryRun = false, report = null } = {}) {
  const out = report ?? { foldersMerged: [], foldersPruned: [] };
  out.foldersMerged ??= []; out.foldersPruned ??= [];
  const mergedAway = new Set();
  if (merge) {
    const rows = folderRows();
    const counts = subtreeCounts();
    for (const { keep, others } of duplicateFolderGroups(rows, counts)) {
      for (const other of others) {
        const label = `${pathLabel(other.doc)} → kept the fuller one`;
        out.foldersMerged.push(label);
        mergedAway.add(other.id);
        if (dryRun) continue;
        try {
          for (const [a, fid] of actorFolderIds()) if (fid === other.id) await a.update({ folder: keep.id });
          for (const r of folderRows()) if (r.parent === other.id) await r.doc.update({ folder: keep.id });
          const keepColor = keep.doc.color?.css ?? (typeof keep.doc.color === "string" ? keep.doc.color : null);
          const otherColor = other.doc.color?.css ?? (typeof other.doc.color === "string" ? other.doc.color : null);
          if (!keepColor && otherColor) await keep.doc.update({ color: otherColor });
          await other.doc.delete({ deleteSubfolders: false, deleteContents: false });
        } catch (err) { console.warn(`[${MODULE_ID}] merge folder ${other.name}:`, err); }
      }
    }
  }
  if (prune) {
    const rows = folderRows();
    const occupied = new Set(actorFolderIds().map(([, fid]) => fid).filter(Boolean));
    const byId = new Map(rows.map((r) => [r.id, r]));
    for (const id of emptyFolderIds(rows, occupied)) {
      const r = byId.get(id);
      if (!r || mergedAway.has(id)) continue; // (dry run) already listed under merges
      out.foldersPruned.push(pathLabel(r.doc));
      if (dryRun) continue;
      try { await r.doc.delete({ deleteSubfolders: false, deleteContents: false }); }
      catch (err) { console.warn(`[${MODULE_ID}] remove empty folder ${r.name}:`, err); }
    }
  }
  return out;
}

function pathLabel(folder) {
  const parts = folderPathOf(folder && typeof folder === "object" ? folder : null);
  return parts?.length ? parts.join(" / ") : String(folder?.name ?? "?");
}

/* ------------------------------------------------------------------ sync */

export const SYNC_DEFAULTS = {
  world: "midlands",
  packetDir: "npc/waluipedia",  // inside Data: where tools/sheets-suite.py publishes the packets
  launcher: "http://127.0.0.1:8765/",
  branch: "gh-pages",
  review: false,
  auto: false,                  // 1.9.3: OFF — the Sync button; a sync that runs by itself at startup runs its bugs by itself too
  mergeFolders: true,           // merge duplicate Actor folders after a sync
  pruneFolders: true,           // remove empty Actor folders after a sync
  confirm: true,                // check first, apply only after the GM's OK (identical → nothing, silently)
  exportBack: true,             // the world flows back: an export into Data a while after the last change
  exportDelay: 120,             // seconds of quiet after the last actor change before that export
};
const SYNC_SETTING_KEYS = { world: "syncWorld", packetDir: "syncPacketDir", launcher: "syncLauncher", branch: "syncBranch", review: "syncReview", auto: "syncAuto", mergeFolders: "syncMergeFolders", pruneFolders: "syncPruneFolders", confirm: "syncConfirm", exportBack: "syncExportBack", exportDelay: "syncExportDelay" };
const EXPORT_STAMP_SETTING = "syncLastExport";
const SYNC_APPLIED_SETTING = "syncLastApplied";  // JSON: {stamp, at, exportedAt} of the last packet actually written
const SYNC_STAMP_SETTING = "syncLastStamp";
const AUTO_RETIRED_SETTING = "syncAutoRetired";  // 1.9.3 switched the sync on load off once; set again by hand it stays
/** Everything one sync carries — there is no scope to choose. */
export const SYNC_SCOPE_LABEL = "everything: the world mirror, the generated cast, the 955 BF court";

function syncSetting(key) {
  try {
    const v = G().game.settings.get(MODULE_ID, SYNC_SETTING_KEYS[key]);
    return (v === undefined || v === null || v === "") ? SYNC_DEFAULTS[key] : v;
  } catch (err) { return SYNC_DEFAULTS[key]; }
}

/** The world's sync settings, with explicit overrides on top (macros, shift-click). */
export function syncSettings(overrides = {}) {
  const out = {};
  for (const k of Object.keys(SYNC_DEFAULTS)) out[k] = overrides[k] !== undefined ? overrides[k] : syncSetting(k);
  return out;
}

/**
 * Pure: where the packet can be, in the order Sync tries them.
 *   data      the Foundry Data folder — fetched same-origin, no URL to type;
 *             tools/sheets-suite.py puts import.json (everything) there every
 *             pass, with packets.json beside it (stamps, digest)
 *   launcher  the start.py static server on this machine — the same file
 *   github    the committed world manifest + its actor files, plus the
 *             committed cast and era packets, merged here (the combined
 *             import.json is a build artefact and is not committed)
 */
export function syncCandidates(s = {}) {
  const o = { ...SYNC_DEFAULTS, ...s };
  const dir = trimSlashes(o.packetDir || SYNC_DEFAULTS.packetDir);
  const launcher = String(o.launcher || SYNC_DEFAULTS.launcher).trim().replace(/\/+$/, "") + "/";
  const raw = `https://raw.githubusercontent.com/mikegent01/bik/${o.branch || SYNC_DEFAULTS.branch}/`;
  const rel = `Reputation-Matrix2/actors/worlds/${o.world}/`;
  return [
    { source: "data", label: "Foundry Data folder", url: `${dir}/${o.world}/import.json`, info: `${dir}/${o.world}/packets.json` },
    { source: "launcher", label: "start.py launcher", url: `${launcher}${rel}import.json`, info: `${launcher}${rel}manifest.json` },
    { source: "github", label: `GitHub (${o.branch})`, url: `${raw}${rel}manifest.json`, manifest: true,
      extras: [{ label: "cast", url: `${raw}Reputation-Matrix2/actors/cast/import.json` },
               { label: "era", url: `${raw}Reputation-Matrix2/actors/peachs-castle-955/import.json` },
               { label: "era", url: `${raw}Reputation-Matrix2/actors/bowsers-castle-1035/import.json` },
               { label: "packet", url: `${raw}Reputation-Matrix2/actors/liberated-toads/import.json` },
               { label: "packet", url: `${raw}Reputation-Matrix2/actors/fawfuls-forces/import.json` }] },
  ];
}

const nameKey = (a) => `${String(a?.name ?? "").trim().toLowerCase()}\u0000${a?.type ?? ""}`;

/**
 * Pure: several packets → one, the way tools/foundry-bridge.py combine does
 * it: the first packet wins an actor the next ones repeat by _id or by name +
 * type (the live world's Koopatrol over the era packet's), folders and folder
 * styles are unioned. `merged` lists what each packet contributed.
 */
export function mergePackets(packets) {
  const list = packets.filter((p) => p?.raw);
  if (!list.length) throw new Error("nothing to merge");
  const out = { format: FORMAT, exportedFrom: list[0].raw.exportedFrom ?? null, exportedAt: list[0].raw.exportedAt ?? null, actors: [], folders: [], folderStyles: {}, merged: [] };
  const seenIds = new Set(), seenKeys = new Set(), seenFolders = new Set();
  for (const p of list) {
    const { entries, folders, folderStyles } = normalizeImport(p.raw);
    let took = 0, left = 0;
    const mine = new Set(); // two "Guard" statblocks within ONE packet are two actors
    for (const e of entries) {
      const a = e.data;
      const id = a._id ?? null;
      if ((id && seenIds.has(id)) || seenKeys.has(nameKey(a))) { left++; continue; }
      if (id) seenIds.add(id);
      mine.add(nameKey(a));
      out.actors.push(a);
      took++;
    }
    for (const k of mine) seenKeys.add(k);
    for (const f of folders) {
      const key = Array.isArray(f?.path) ? f.path.join(" / ") : (f?._id ?? "");
      if (!key || seenFolders.has(key)) continue;
      seenFolders.add(key);
      out.folders.push(f);
    }
    for (const [k, v] of Object.entries(folderStyles)) if (!(k in out.folderStyles)) out.folderStyles[k] = v;
    out.merged.push({ label: p.label ?? "?", actors: took, omitted: left });
  }
  out.actorCount = out.actors.length;
  return out;
}

/** Pure: what identifies a published packet — the suite's digest, else its stamps, else the payload's own shape. */
export function syncStamp(info, raw, source = "") {
  if (info?.digest) return `${source}:${info.digest}`;
  if (info?.publishedAt) return `${source}:${info.publishedAt}`;
  const n = raw?.actorCount ?? raw?.actors?.length ?? 0;
  let size = 0;
  try { size = JSON.stringify(raw ?? null).length; } catch (err) { size = 0; }
  return `${source}:${raw?.exportedAt ?? "?"}:${n}:${size}`;
}

/** Pure: dotted versions compared numerically ("1.10.0" > "1.9.0"); -1 / 0 / 1. */
export function compareVersions(a, b) {
  const pa = String(a ?? "").split(/[.+-]/).map((x) => (/^\d+$/.test(x) ? Number(x) : x));
  const pb = String(b ?? "").split(/[.+-]/).map((x) => (/^\d+$/.test(x) ? Number(x) : x));
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const x = pa[i] ?? 0, y = pb[i] ?? 0;
    if (x === y) continue;
    if (typeof x === "number" && typeof y === "number") return x < y ? -1 : 1;
    return String(x) < String(y) ? -1 : 1;
  }
  return 0;
}

/**
 * Pure: the three versions in play and what they mean.
 *   running  this file (MODULE_VERSION)
 *   loaded   the manifest Foundry read when the world was launched (game.modules)
 *   onDisk   the manifest the server serves right now (module.json, uncached)
 * stale: newer code is installed than what runs → Setup → relaunch, Ctrl+F5.
 * behind: the served manifest is OLDER than the running code → a half-updated
 * install or Foundry reads another Data folder than the suite wrote to. The
 * old wording ("X is installed but this world still runs Y") was wrong for
 * that case — the GM ran 1.6.0 and was told 1.5.0 was installed.
 * mismatch: only the launch-time manifest lags (common after an install
 * without a relaunch) — a console note, no toast.
 */
export function versionVerdict({ running, loaded = null, onDisk = null }) {
  const out = { running, loaded, onDisk, stale: false, behind: false, mismatch: false, level: null, message: null };
  const disk = onDisk ? compareVersions(onDisk, running) : 0;
  if (disk > 0) {
    out.stale = true; out.level = "warn";
    out.message = `Waluipedia Mass Import ${onDisk} is installed but this world still runs ${running} — Setup → Launch World (then Ctrl+F5) runs the new code`;
  } else if (disk < 0) {
    out.behind = true; out.level = "warn";
    out.message = `Foundry serves module.json ${onDisk} while the code running is ${running}: the install is half-updated, or Foundry reads a different Data folder than the one the suite wrote to — run tools/sheets-suite.py once more (it names both folders), then Setup → Launch World`;
  } else if (loaded && compareVersions(loaded, running) !== 0) {
    out.mismatch = true; out.level = "info";
    out.message = `Foundry launched this world with the manifest of ${loaded}; the code running is ${running} (what is installed) — Setup → Launch World when convenient, so the module list agrees`;
  }
  return out;
}

let versionCheck = null;
/** The verdict for this session — one fetch, one toast (onReady and Sync share it). */
export async function checkModuleVersion({ fresh = false } = {}) {
  if (versionCheck && !fresh) return versionCheck;
  const loaded = G().game?.modules?.get?.(MODULE_ID)?.version ?? null;
  let onDisk = null;
  try {
    const res = await G().fetch(`modules/${MODULE_ID}/module.json?t=${Date.now()}`, { cache: "no-store" });
    if (res?.ok) onDisk = (await res.json())?.version ?? null;
  } catch (err) { /* offline packaging, tests — not a problem */ }
  versionCheck = { ...versionVerdict({ running: MODULE_VERSION, loaded, onDisk }), announced: false };
  return versionCheck;
}

/** Say the verdict once per session (a toast for warn, the console for info). */
export async function announceVersion() {
  const v = await checkModuleVersion();
  if (v.announced || !v.message) return v;
  v.announced = true;
  if (v.level === "warn") notify("warn", v.message);
  else console.info(`[${MODULE_ID}] ${v.message}`);
  return v;
}

/**
 * GitHub ahead of this install? The branch's module.json (raw.githubusercontent
 * answers cross-origin). {github, ahead} — never throws, never blocks.
 */
export async function checkGitHubVersion(branch = SYNC_DEFAULTS.branch) {
  const out = { github: null, ahead: false, branch };
  try {
    const res = await G().fetch(`https://raw.githubusercontent.com/mikegent01/bik/${branch}/Reputation-Matrix2/Foundry/mass_import/module.json?t=${Date.now()}`, { cache: "no-store" });
    if (res?.ok) { out.github = (await res.json())?.version ?? null; out.ahead = !!(out.github && compareVersions(out.github, MODULE_VERSION) > 0); }
  } catch (err) { /* offline */ }
  return out;
}

/** Pure: the facts the summary compares, from a plain actor object. */
export function actorFacts(data) {
  const sys = data.system ?? {};
  const items = (data.items ?? []).map((i) => ({ name: i?.name, type: i?.type, levels: i?.system?.levels }));
  const classes = items.filter((i) => i.type === "class" && Number(i.levels) > 0);
  const level = classes.length ? classes.reduce((n, c) => n + Number(c.levels), 0) : (sys.details?.level ?? null);
  const cr = sys.details?.cr;
  return {
    id: data._id ?? data.id ?? null, name: data.name, type: data.type,
    xp: sys.details?.xp?.value ?? null, level,
    classLine: classes.map((c) => `${c.name} ${c.levels}`).join(" / ") || (cr !== undefined && cr !== null && data.type === "npc" ? `CR ${cr}` : ""),
    hp: sys.attributes?.hp?.max ?? null,
    items: items.map((i) => i.name).filter(Boolean),
    folderPath: Array.isArray(data.flags?.[MODULE_ID]?.folderPath) ? data.flags[MODULE_ID].folderPath : null,
    ledger: data.flags?.["waluipedia-sheets"]?.ledger ?? null,
    promoted: data.flags?.["waluipedia-sheets"]?.promoted?.mode ?? null,
  };
}

function docFacts(actor) {
  const f = actorFacts(actor.toObject ? actor.toObject() : actor);
  f.id = actor.id ?? actor._id ?? f.id;
  f.folderPath = folderPathOf(actor.folder && typeof actor.folder === "object" ? actor.folder : null);
  return f;
}

/** The world's actors as facts, by id and by name+type. */
export function snapshotWorld(actors) {
  const byId = new Map(), byKey = new Map();
  for (const a of actors ?? []) {
    const f = docFacts(a);
    if (f.id) byId.set(f.id, f);
    byKey.set(`${f.name}\u0000${f.type}`, f);
  }
  return { byId, byKey };
}

const fmtN = (n) => (n === null || n === undefined ? "—" : Number(n).toLocaleString("en-US"));

/**
 * Pure: one row per imported actor — what the sync did to it, in words.
 * `before`/`after` are snapshotWorld() results; `report` is importPayload's.
 */
export function syncChanges(entries, before, after, report) {
  const failed = new Set((report?.failed ?? []).map((f) => f.actor));
  const rowsById = new Map(), rowsByLabel = new Map();
  for (const u of [...(report?.updated ?? []), ...(report?.kept ?? []).map((k) => ({ ...k, kept: true, changed: true }))]) { if (u.id) rowsById.set(u.id, u); rowsByLabel.set(u.actor, u); }
  return entries.map(({ data }) => {
    const want = actorFacts(data);
    const key = `${want.name}\u0000${want.type}`;
    const was = (want.id && before.byId.get(want.id)) || before.byKey.get(key) || null;
    const now = (want.id && after.byId.get(want.id)) || after.byKey.get(key) || null;
    const notes = [];
    let status = failed.has(`${data.name} [${data.type}]`) ? "failed" : (!was ? "new" : (was.type !== want.type ? "replaced" : "updated"));
    if (was && was.type !== want.type) notes.push(`${was.type} → ${want.type}`);
    if (want.xp !== null && (!was || was.xp !== want.xp)) notes.push(`XP ${was ? fmtN(was.xp) : "—"} → ${fmtN(want.xp)}`);
    if (want.classLine && (!was || was.classLine !== want.classLine)) notes.push(want.classLine);
    // a hint, not a change: the ledger (authoritative) is ahead of the sheet
    const levelUp = (want.ledger && want.level !== null && Number(want.ledger.level) > Number(want.level)) ? `ledger level ${want.ledger.level} — level up (sheet is level ${want.level})` : null;
    if (was && want.hp !== null && was.hp !== want.hp) notes.push(`HP ${fmtN(was.hp)} → ${fmtN(want.hp)}`);
    const row = (want.id && rowsById.get(want.id)) || rowsByLabel.get(`${data.name} [${data.type}]`) || null;
    if (row) {
      // what the import itself will do (or did) to the items — a plan, not a guess from the names
      const embedded = row.embedded ?? [];
      if (embedded.length) notes.push(...embedded.slice(0, 4), ...(embedded.length > 4 ? [`… +${embedded.length - 4} more items`] : []));
    } else if (was) {
      const added = want.items.filter((n) => !was.items.includes(n));
      const removed = was.items.filter((n) => !want.items.includes(n));
      if (added.length) notes.push(`+ ${added.join(", ")}`);
      if (removed.length) notes.push(`− ${removed.join(", ")}`);
    }
    const folder = ((now?.folderPath?.length ? now.folderPath : want.folderPath) ?? []).join(" / ") || "root";
    if (was && now && was.folderPath && now.folderPath && was.folderPath.join("/") !== now.folderPath.join("/")) notes.push(`moved to ${folder}`);
    // what the import itself found: the fields that differ (a dry run computes the same) — so "unchanged" means byte-for-byte
    const fields = row?.fields ?? [];
    const embedded = row?.embedded ?? [];
    if (status === "updated" && row && row.changed === false) status = "unchanged";
    else if (status === "updated" && row) {
      // the fields the notes above do not already explain (XP, HP, the move)
      const rest = fields.filter((f) => !/^(folder|system\.details\.xp\.value|system\.attributes\.hp\.)/.test(f));
      if (rest.length) notes.push(`fields: ${rest.slice(0, 6).join(", ")}${rest.length > 6 ? ` +${rest.length - 6}` : ""}`);
      if (row.kept) status = "kept";
    }
    if (row?.refile) notes.push(`refiled${row.refile.folder ? ` → ${row.refile.folder}` : ""}${row.refile.fields.some((f) => f.startsWith("flags.")) ? " (tags)" : ""}`);
    if (status === "updated" && !row && !notes.length) status = "unchanged";
    return { name: data.name, type: data.type, id: want.id, status, folder, notes, levelUp, promoted: want.promoted, ledger: want.ledger, items: want.items.length, fields, embedded };
  });
}

export function syncSummaryHtml(report) {
  const s = report.sync ?? {};
  const rows = report.changes ?? [];
  const by = (st) => rows.filter((r) => r.status === st);
  const li = (list, fmt) => (list.length ? `<ul>${list.map(fmt).join("")}</ul>` : "<p class='notes'>none</p>");
  const row = (r) => `<li><b>${escapeHtml(r.name)}</b> <small>${escapeHtml(r.type)}</small>${r.notes.length ? ` — ${escapeHtml(r.notes.join(" · "))}` : ""}${r.levelUp ? ` <span class="wmi-levelup">⬆ ${escapeHtml(r.levelUp)}</span>` : ""} <small class="wmi-folder">→ ${escapeHtml(r.folder)}</small></li>`;
  const tried = (s.attempts ?? []).map((a) => `<li>${a.ok ? "✔" : "✘"} ${escapeHtml(a.label)} <code>${escapeHtml(a.url)}</code>${a.ok ? "" : ` — ${escapeHtml(a.error ?? "")}`}</li>`).join("");
  const stamps = [s.exportedAt ? `export ${escapeHtml(s.exportedAt)}` : null, s.info?.publishedAt ? `published ${escapeHtml(s.info.publishedAt)}` : null].filter(Boolean).join(" · ");
  const levelUps = rows.filter((r) => r.levelUp);
  const replaced = by("replaced"), changed = by("updated"), fresh = by("new"), same = by("unchanged"), kept = by("kept");
  const merged = (s.merged ?? []).map((m) => `${escapeHtml(m.label)} ${m.actors}${m.omitted ? ` (${m.omitted} already in an earlier part)` : ""}`).join(" · ");
  const version = s.version ?? null;
  const notes = report.notes ?? [];
  const github = s.github ?? null;
  return `<div class="wmi-report wmi-sync">
    ${version?.stale ? `<p class="wmi-stale">⚠ This world is still running module <b>${escapeHtml(version.running)}</b> while <b>${escapeHtml(version.onDisk)}</b> is installed. <b>Setup → relaunch the world</b> (then Ctrl+F5) to run the new code.</p>` : ""}
    ${version?.behind ? `<p class="wmi-stale">⚠ Foundry serves module.json <b>${escapeHtml(version.onDisk)}</b> while the code running is <b>${escapeHtml(version.running)}</b> — a half-updated install, or Foundry reads a different Data folder than the suite wrote to. Run <code>tools/sheets-suite.py</code> once more (it names both folders), then Setup → relaunch the world.</p>` : ""}
    ${github?.ahead ? `<p class="wmi-stale">⬆ GitHub (${escapeHtml(github.branch)}) has module <b>${escapeHtml(github.github)}</b>; this install runs ${escapeHtml(version?.running ?? MODULE_VERSION)}. The suite with <code>--git-sync</code> (or a <code>git pull</code>) installs it; then Setup → relaunch the world.</p>` : ""}
    <p><strong>${escapeHtml(summarize(report))}</strong><br><small>${escapeHtml(SYNC_SCOPE_LABEL)} · from ${escapeHtml(s.used?.label ?? "?")}${stamps ? ` · ${stamps}` : ""}${merged ? ` · ${merged}` : ""} · module ${escapeHtml(version?.running ?? MODULE_VERSION)}${s.trigger === "auto" ? " · automatic" : ""}</small></p>
    ${report.preview ? `<p class="notes">Nothing has been written yet. <b>Apply</b> writes exactly the differences below (an untouched actor is not written at all); <b>Not now</b> asks again next time; <b>Skip this packet</b> stays quiet until the packet changes.</p>` : ""}
    ${swapsHtml(report.swaps)}
    <details ${replaced.length ? "open" : ""}><summary>Replaced — NPC statblock → character sheet, same id (${replaced.length})</summary>${li(replaced, row)}</details>
    <details ${changed.length ? "open" : ""}><summary>Changed (${changed.length})</summary>${li(changed, row)}</details>
    <details ${fresh.length ? "open" : ""}><summary>New (${fresh.length})</summary>${li(fresh, row)}</details>
    <details><summary>Unchanged (${same.length})</summary>${li(same, (r) => `<li>${escapeHtml(r.name)}</li>`)}</details>
    <details ${report.failed.length ? "open" : ""}><summary>Failed (${report.failed.length})</summary>${li(report.failed, (r) => `<li>${escapeHtml(r.actor)} — ${escapeHtml(r.error)}</li>`)}</details>
    <details ${kept.length ? "open" : ""}><summary>Kept — the world is newer than the packet (${kept.length})</summary>${li(kept, row)}<p class="notes">These changed in Foundry after the packet's copy was exported and after the sync's own last write (a session). Nothing on the sheet was written; the difference is what the packet would have rolled back. Only the organisation follows the packet — the folder and the website tags ("refiled"). The export loop (Data → suite → repo) brings the world's version into the packet, after which the ledger's XP and the flags apply on top.</p></details>
    <details ${notes.length ? "open" : ""}><summary>Notes for the GM (${notes.length})</summary>${li(notes, (n) => `<li><b>${escapeHtml(n.actor)}</b> — ${escapeHtml(n.note)}</li>`)}</details>
    <details><summary>Pending at the table — level-ups the ledger allows (${levelUps.length})</summary>${li(levelUps, (r) => `<li><b>${escapeHtml(r.name)}</b> — ${escapeHtml(r.levelUp)}</li>`)}<p class="notes">Not a change and never applied by the sync: the XP is on the sheet, the level-up happens in dnd5e's own advancement when the player levels up at the table; the export loop then carries it back.</p></details>
    ${repairedHtml(report)}
    <details ${report.missingImages.length ? "open" : ""}><summary>Missing images (${report.missingImages.length})</summary>${li(report.missingImages, (r) => `<li>${escapeHtml(r.actor)} · ${escapeHtml(r.where)} · <code>${escapeHtml(r.path)}</code></li>`)}<p class="notes">Paths the server answered 404 for. Bare file names and <code>modules/…</code> paths come from someone else's Data folder; set the portrait on the sheet or tick <i>fix missing images</i> in Mass import.</p></details>
    <details><summary>Folders (${folderCounts(rows).length}${report.foldersCreated.length ? `, ${report.foldersCreated.length} new` : ""}${report.foldersStyled?.length ? `, ${report.foldersStyled.length} coloured` : ""}${report.foldersMerged?.length ? `, ${report.foldersMerged.length} merged` : ""}${report.foldersPruned?.length ? `, ${report.foldersPruned.length} empty removed` : ""})</summary><ul>${folderCounts(rows).map(([f, n]) => `<li>${escapeHtml(f)} <small>${n}</small>${report.foldersCreated.includes(f) ? " <small>(new)</small>" : ""}</li>`).join("")}</ul>${report.foldersMerged?.length ? `<p class="notes">Merged duplicates: ${report.foldersMerged.map(escapeHtml).join("; ")}</p>` : ""}${report.foldersPruned?.length ? `<p class="notes">Removed empty folders: ${report.foldersPruned.map(escapeHtml).join("; ")}</p>` : ""}</details>
    <details><summary>Where it looked</summary><ul>${tried}</ul></details>
  </div>`;
}

export function syncHelpHtml(attempts, s = {}) {
  const tried = attempts.map((a) => `<li>✘ ${escapeHtml(a.label)} <code>${escapeHtml(a.url)}</code> — ${escapeHtml(a.error ?? "")}</li>`).join("");
  return `<div class="wmi-report wmi-sync">
    <p><strong>No Waluipedia packet found</strong> (world <code>${escapeHtml(s.world ?? "")}</code>). Nothing was changed.</p>
    <ul>${tried}</ul>
    <p class="notes">Fixes, in order: <b>run <code>start.py</code></b> with <i>Character sheets</i> ticked — it publishes the packet into your Foundry Data folder (<code>${escapeHtml(s.packetDir ?? "")}/${escapeHtml(s.world ?? "")}/import.json</code>) and serves it at the launcher URL; if Foundry's Data lives somewhere unusual, start it with <code>--foundry-data &lt;path&gt;</code> or set <code>WALUIPEDIA_FOUNDRY_DATA</code>; the GitHub source only has what is merged into <code>${escapeHtml(s.branch ?? "")}</code>. Settings: <i>Configure Settings → Waluipedia Mass Import</i>.</p>
  </div>`;
}

async function postSyncChat(report) {
  const g = G();
  const CM = g.ChatMessage;
  if (!CM?.create) return null;
  let whisper = [];
  try { whisper = CM.getWhisperRecipients ? CM.getWhisperRecipients("GM").map((u) => u.id) : []; } catch (err) { whisper = []; }
  try { return await CM.create({ content: syncSummaryHtml(report), whisper, speaker: { alias: "Waluipedia sync" } }); }
  catch (err) { console.warn(`[${MODULE_ID}] chat summary`, err); return null; }
}

/**
 * Load one candidate: the packet itself, or (GitHub) the world manifest + the
 * cast and era packets merged. Returns {raw, files, ignored, exportedAt, merged}.
 */
async function loadCandidate(c) {
  if (!c.manifest) {
    const l = await loadSourceDetailed({ url: c.url });
    normalizeImport(l.raw);
    return { ...l, merged: null };
  }
  const world = await loadManifest(c.url, { folder: null });
  const parts = [{ label: "world", raw: world.raw }];
  const ignored = [...(world.ignored ?? [])];
  for (const x of c.extras ?? []) {
    try { parts.push({ label: x.label, raw: await fetchJson(x.url) }); }
    catch (err) { ignored.push({ path: x.url, reason: err?.message ?? String(err) }); }
  }
  const raw = mergePackets(parts);
  return { raw, files: world.files, ignored, exportedAt: world.exportedAt ?? null, kind: "github", merged: raw.merged };
}

/**
 * EVERYTHING, one call. Find the packet (Data → launcher → GitHub), import it
 * into its folders, tidy the folders, show the summary (and whisper it to the
 * GMs so it stays in the chat log). overrides: any SYNC_DEFAULTS key, plus
 * `options` for importPayload (dryRun, checkImages, ...) and `trigger`
 * ("button" | "auto" | "macro"): an automatic sync of a packet already synced
 * (same digest) does nothing and says so only in the console.
 */
export async function syncFromWaluipedia(overrides = {}) {
  const g = G();
  const s = syncSettings(overrides);
  const trigger = overrides.trigger ?? "button";
  const attempts = [];
  let loaded = null, used = null;
  for (const c of syncCandidates(s)) {
    try {
      const l = await loadCandidate(c);
      loaded = l; used = c; attempts.push({ ...c, ok: true });
      break;
    } catch (err) { attempts.push({ ...c, ok: false, error: err?.message ?? String(err) }); }
  }
  if (!used) {
    if (trigger === "auto") { console.log(`[${MODULE_ID}] automatic sync: no packet found`, attempts); return null; }
    notify("error", "Sync: no Waluipedia packet found — nothing changed (see the dialog)");
    await showHtml("Sync — nothing to import", syncHelpHtml(attempts, s), 620);
    return null;
  }
  let info = null;
  if (used.info && !used.manifest) { try { info = await fetchJson(used.info); } catch (err) { info = null; } }
  if (info && isManifest(info)) info = { exportedAt: info.exportedAt ?? null };
  const stamp = syncStamp(info, loaded.raw, used.source);
  let lastStamp = null;
  try { lastStamp = g.game.settings.get(MODULE_ID, SYNC_STAMP_SETTING) || null; } catch (err) { lastStamp = null; }
  if (trigger === "auto") { await noticeUnreadExport(info, used); try { await noticeArtServer(info); } catch (err) { /* cosmetic */ } }
  if (trigger === "auto" && lastStamp === stamp) {
    console.log(`[${MODULE_ID}] automatic sync: packet unchanged since the last sync (${stamp}) — nothing to do`);
    return { skipped: true, stamp };
  }
  const version = await announceVersion();
  const exportedAt = info?.exportedAt ?? loaded.exportedAt ?? loaded.raw?.exportedAt ?? null;
  const worldActors = () => g.game?.actors?.contents ?? [...(g.game?.actors?.values?.() ?? [])];
  let raw = loaded.raw;
  const options = { ...DEFAULTS, ...(overrides.options ?? {}) };
  if (s.review) {
    const plan = buildPlan(raw, { actors: worldActors(), rootFolder: "", keepIds: options.keepIds, matchByName: options.matchByName });
    const picked = await showForm({ title: `Sync — review (${plan.length})`, content: planHtml(plan, { source: used.url, ignored: loaded.ignored }), okLabel: options.dryRun ? "Dry run" : "Sync ticked", okIcon: "fas fa-sync-alt", width: 900 });
    if (!picked) return null;
    raw = applyPlanEdits(raw, plan, editsFromForm(picked));
    if (!raw.actors.length) { notify("warn", "Sync: nothing ticked"); return null; }
  }
  const entries = normalizeImport(raw).entries;
  const syncMeta = (extra = {}) => ({ used, attempts, info, exportedAt, world: s.world, trigger, stamp, merged: loaded.merged ?? raw.merged ?? null, version, ...extra });
  const remember = async () => { try { await g.game.settings.set(MODULE_ID, SYNC_STAMP_SETTING, stamp); } catch (err) { /* no settings in tests */ } };
  // 1. check first: the same import as a dry run — nothing is written, the
  //    differences are exact (a session changes the world; a packet applied
  //    blind over it would be the danger). Identical → nothing to do.
  const asks = !options.dryRun && !s.review && (trigger === "auto" || s.confirm !== false);
  if (asks) {
    const before = snapshotWorld(worldActors());
    let preview;
    try { preview = await importPayload(raw, { ...options, dryRun: true }); }
    catch (err) { notify("error", `Sync: ${err.message}`); console.error(`[${MODULE_ID}]`, err); return null; }
    try { await tidyFolders({ merge: s.mergeFolders !== false, prune: s.pruneFolders !== false, dryRun: true, report: preview }); }
    catch (err) { console.warn(`[${MODULE_ID}] folder tidy:`, err); }
    preview.preview = true;
    preview.source = used.url; preview.files = loaded.files; preview.ignored = loaded.ignored;
    preview.changes = syncChanges(entries, before, before, preview);
    preview.sync = syncMeta({ github: overrides.github ?? null });
    const pending = syncPending(preview);
    if (!pending.length) {
      const fresh = lastStamp !== stamp;
      await remember();
      console.log(`[${MODULE_ID}] sync: the world already matches the packet (${stamp}) — nothing written`, preview);
      // the notes and swaps (a stand-in to choose) are not changes — a whisper in the chat log, once per packet
      if (fresh && (preview.swaps.length || preview.notes.length)) await postSyncChat(preview);
      if (trigger !== "auto") notify("info", `Sync: the world already matches the packet — nothing to do (${summarize({ ...preview, preview: false, dryRun: false })})`);
      return { skipped: true, identical: true, stamp, report: preview };
    }
    const answer = await askToApply(preview, pending);
    if (answer === "skip") { await remember(); console.log(`[${MODULE_ID}] sync: packet ${stamp} skipped by the GM — quiet until it changes`); return { skipped: true, declined: true, stamp, report: preview }; }
    if (answer !== "apply") { console.log(`[${MODULE_ID}] sync: not now (${pending.length} pending)`); return { skipped: true, declined: true, later: true, stamp, report: preview }; }
  }
  // 2. apply (or the explicit dry run)
  const before = snapshotWorld(worldActors());
  let report;
  try { report = await importPayload(raw, options); }
  catch (err) { notify("error", `Sync: ${err.message}`); console.error(`[${MODULE_ID}]`, err); return null; }
  try { await tidyFolders({ merge: s.mergeFolders !== false, prune: s.pruneFolders !== false, dryRun: !!options.dryRun, report }); }
  catch (err) { console.warn(`[${MODULE_ID}] folder tidy:`, err); }
  if (!options.dryRun && report.written?.length) { try { await stampWritten(report.written); } catch (err) { /* settings */ } }
  const after = snapshotWorld(worldActors());
  report.source = used.url;
  report.files = loaded.files;
  report.ignored = loaded.ignored;
  report.changes = syncChanges(entries, before, after, report);
  report.sync = syncMeta({ github: overrides.github ?? null });
  if (!report.dryRun && !s.review) await remember();
  if (!report.dryRun) {
    // what the export back will say was applied — tools/spoils-to-changes.py reads it to tell "the table removed
    // this item after seeing it" from "the packet never got there"
    try { await g.game.settings.set(MODULE_ID, SYNC_APPLIED_SETTING, JSON.stringify({ stamp, at: new Date().toISOString(), exportedAt: exportedAt ?? null })); } catch (err) { /* tests */ }
  }
  announce(report);
  if (!report.dryRun) await postSyncChat(report);
  const quiet = trigger === "auto" && !asks && !report.failed.length && !report.created.length && !report.replaced.length && !report.notes.length
    && report.updated.every((u) => u.changed === false) && !report.foldersMerged.length && !report.foldersPruned.length;
  if (!quiet) await showHtml(report.dryRun ? "Sync — dry run" : "Sync — summary", syncSummaryHtml(report), 660);
  return report;
}

/** Pure: what a preview would write or wants from the GM — the reasons to ask. */
export function syncPending(preview) {
  const out = [];
  const n = (k, list) => { if (list?.length) out.push(`${list.length} ${k}`); };
  n("new", preview.created); n("replaced", preview.replaced); n("changed", changedRows(preview)); n("failed", preview.failed);
  n("kept but refiled (folder / tags only)", (preview.kept ?? []).filter((k) => k.refile));
  n("duplicate folders to merge", preview.foldersMerged); n("empty folders to remove", preview.foldersPruned);
  // swaps and notes are the GM's call, not pending writes: they never raise the question by themselves
  return out;
}

/** The question: the preview as the summary, three answers. "apply" | "later" | "skip". */
async function askToApply(preview, pending) {
  const g = G();
  const title = `Sync — ${pending.join(", ")}: apply?`;
  const content = syncSummaryHtml(preview);
  const DialogV2 = g.foundry?.applications?.api?.DialogV2;
  if (DialogV2) {
    const r = await DialogV2.wait({
      window: { title }, content, rejectClose: false, position: { width: 700 },
      buttons: [
        { action: "apply", label: "Apply", icon: "fas fa-sync-alt", default: true },
        { action: "later", label: "Not now", icon: "fas fa-clock" },
        { action: "skip", label: "Skip this packet", icon: "fas fa-forward" },
      ],
    });
    return r ?? "later";
  }
  if (g.Dialog) {
    return new Promise((resolve) => {
      new g.Dialog({ title, content, buttons: {
        apply: { label: "Apply", callback: () => resolve("apply") },
        later: { label: "Not now", callback: () => resolve("later") },
        skip: { label: "Skip this packet", callback: () => resolve("skip") },
      }, default: "apply", close: () => resolve("later") }, { width: 700 }).render(true);
    });
  }
  return "later";
}

/** What the world last took from a packet, for the export back: {applied: {stamp, at, exportedAt} | null, seen: stamp | null}. */
export function lastSyncFacts() {
  const g = G();
  let applied = null, seen = null;
  try { const raw = g.game?.settings?.get(MODULE_ID, SYNC_APPLIED_SETTING); applied = raw ? JSON.parse(raw) : null; } catch (err) { applied = null; }
  try { seen = g.game?.settings?.get(MODULE_ID, SYNC_STAMP_SETTING) || null; } catch (err) { seen = null; }
  return { applied, seen };
}

/**
 * Pure: has the archive read what the table did? `exportStamp` is this world's
 * last export back; `readStamp` is the export the packet in front of us was
 * built from (packets.json / manifest.json `exportedAt` — what the suite split
 * last). Null when there is nothing to say; otherwise {exportedAt, readAt,
 * ageMs, overdue} — overdue once the unread export is older than `graceMs`
 * (a day: the suite's --watch reads within minutes, a GM who never runs it
 * hears about it at the next session, not mid-session).
 */
export function unreadExport(exportStamp, readStamp, { now = Date.now(), graceMs = 86400000 } = {}) {
  const ex = Date.parse(exportStamp ?? "") || null;
  if (!ex) return null;
  const rd = Date.parse(readStamp ?? "") || null;
  if (rd && rd >= ex) return null;
  const ageMs = Math.max(0, now - ex);
  return { exportedAt: exportStamp, readAt: readStamp ?? null, ageMs, overdue: ageMs > graceMs };
}

/** The Foundry-only GM: the world exported itself back, nothing on the archive side has read it — say so, once per load. */
async function noticeUnreadExport(info, used) {
  const g = G();
  let exportStamp = null;
  try { exportStamp = g.game.settings.get(MODULE_ID, EXPORT_STAMP_SETTING) || null; } catch (err) { exportStamp = null; }
  const gap = unreadExport(exportStamp, info?.exportedAt ?? null);
  if (!gap) return null;
  const s = syncSettings();
  const where = exportBackPath(s.packetDir, g.game?.world?.id ?? s.world);
  const days = Math.floor(gap.ageMs / 86400000);
  const line = `the archive has not read this world's export back from ${gap.exportedAt}${gap.readAt ? ` (the packet here was built from the export of ${gap.readAt})` : " (no packet of this world has been built from it)"} — it waits in ${where}; run start.py or tools/sheets-suite.py so the sheets, the ledger and the record learn what the table did`;
  console.log(`[${MODULE_ID}] ${line}`);
  if (gap.overdue) notify("warn", `Sync: ${days ? `${days} day(s)` : "a while"} of table changes unread by Waluipedia — run start.py (or tools/sheets-suite.py) on the archive side`);
  return gap;
}

/* ---------------------------------------------- art on the archive's server */
// Art by URL is an OPT-IN (the suite's --art-base; packets.json then names
// artBase). The default since 1.9 is the art copied into Data again, and
// artBase is null — nothing below runs then. With a base set: placed tokens
// that copied the old Data path are re-pointed when their actor's prototype
// token moves; the export back lists every image the world still uses (so
// the suite can prove a Data copy is unneeded before it deletes it); and a
// client that cannot reach the server is told so once per load.

/** Placed tokens of `actor` (every scene) still showing `oldSrc` → `newSrc`. Returns how many. */
export async function relinkPlacedTokens(actor, oldSrc, newSrc, { dryRun = false } = {}) {
  const g = G();
  const scenes = g.game?.scenes?.contents ?? [...(g.game?.scenes?.values?.() ?? [])];
  const actorId = actor?.id ?? actor?._id;
  let n = 0;
  for (const scene of scenes) {
    const tokens = scene?.tokens?.contents ?? [...(scene?.tokens?.values?.() ?? [])];
    const rows = tokens.filter((t) => (t?.actorId ?? t?.actor?.id) === actorId && t?.texture?.src === oldSrc).map((t) => ({ _id: t.id ?? t._id, "texture.src": newSrc }));
    if (!rows.length) continue;
    if (!dryRun) await scene.updateEmbeddedDocuments("Token", rows);
    n += rows.length;
  }
  return n;
}

const IMG_ATTR = /\b(?:src|href)=["']([^"']+\.(?:png|webp|jpe?g|gif|svg|avif))["']/gi;

/** Every image path the world uses, beyond the actors themselves: scene backgrounds and foregrounds, placed tokens, tiles, journal pages (image pages and <img> in text), world items, macros. Sorted, unique. */
export function imagesInUse() {
  const g = G();
  const out = new Set();
  const add = (p) => { if (typeof p === "string" && p && !p.startsWith("data:")) out.add(p); };
  const list = (coll) => coll?.contents ?? [...(coll?.values?.() ?? [])];
  for (const scene of list(g.game?.scenes)) {
    add(scene.background?.src); add(scene.foreground?.src ?? scene.foreground); add(scene.thumb);
    for (const t of list(scene.tokens)) add(t.texture?.src);
    for (const t of list(scene.tiles)) add(t.texture?.src);
  }
  for (const j of list(g.game?.journal)) for (const page of list(j.pages)) {
    add(page.src);
    const text = page.text?.content ?? page.text?.markdown ?? "";
    if (typeof text === "string") for (const m of text.matchAll(IMG_ATTR)) add(m[1]);
  }
  for (const it of list(g.game?.items)) add(it.img);
  for (const m of list(g.game?.macros)) add(m.img);
  for (const a of list(g.game?.actors)) {
    add(a.img); add(a.prototypeToken?.texture?.src);
    for (const it of list(a.items)) add(it.img);
  }
  return [...out].sort();
}

let artNoticed = false;
/**
 * packets.json names `artBase` (and `artProbe`) when the packets carry art
 * URLs. HEAD the probe; when it fails, say so — once per load — with the
 * fix: the GM's start.py must run (and, for a player, be exposed on an
 * address they can reach). Returns {base, ok} or null when art is not by URL.
 */
export async function noticeArtServer(info = null) {
  const g = G();
  let i = info;
  if (!i?.artBase) {
    try { i = await fetchJson(syncCandidates(syncSettings())[0].info); } catch (err) { i = null; }
  }
  const base = i?.artBase;
  if (!base) return null;
  const probe = i.artProbe || base;
  let ok = false;
  try { const res = await g.fetch(probe, { method: "HEAD", cache: "no-store", mode: "cors" }); ok = !!res?.ok; } catch (err) { ok = false; }
  if (ok) { artNoticed = false; return { base, ok }; }
  const here = String(g.location?.hostname ?? "127.0.0.1").toLowerCase();
  const local = /^(127\.0\.0\.1|localhost|::1|\[::1\])$/.test(here);
  const loopbackBase = /^https?:\/\/(127\.0\.0\.1|localhost|\[::1\])(:|\/)/i.test(base);
  const isGM = !!g.game?.user?.isGM;
  let why;
  if (loopbackBase && !local) why = `the packets point at ${base}, which is the GM's machine only — on the archive side tick "reachable from other machines" in start.py (or pass --art-base http://<tailnet-or-LAN-host>:<port>/) and let the suite republish`;
  else if (isGM) why = `start.py is not answering at ${base} — start it (start.bat) and keep it open whenever Foundry is; the sheets' portraits, tokens and item icons from the archive are blank until then`;
  else why = `the archive's server is not answering at ${base} — ask the GM to start start.py; portraits and tokens from the archive are blank until then`;
  if (!artNoticed) notify("warn", `Waluipedia art: ${why}`);
  artNoticed = true;
  console.warn(`[${MODULE_ID}] art server ${base}: ${why}`);
  return { base, ok: false, why };
}

/* ------------------------------------------------- the world flows back */

let exportTimer = null;
const exportState = { pending: false, lastAt: null, lastPath: null, running: false };
/** Pure: the Data path the world export goes to. */
export const exportBackPath = (packetDir, world) => `${trimSlashes(packetDir || SYNC_DEFAULTS.packetDir)}/${world}/export/${world}-all-actors.json`;

/**
 * The other direction: the whole world as one export file inside Data, where
 * tools/sheets-suite.py --watch finds it (next to the packet it publishes).
 * Quiet: a console line, a stamp in a hidden setting; the file is JSON, which
 * FilePicker.upload accepts.
 */
export async function exportBack({ reason = "manual" } = {}) {
  const g = G();
  const s = syncSettings();
  const world = g.game?.world?.id ?? s.world;
  const path = exportBackPath(s.packetDir, world);
  if (exportState.running) { exportState.pending = true; return null; }
  exportState.running = true;
  try {
    const payload = await exportAllActors({ download: false });
    payload.exportedBy = `${MODULE_ID} ${MODULE_VERSION} (${reason})`;
    payload.lastSync = lastSyncFacts();
    try { payload.imagesInUse = imagesInUse(); } catch (err) { payload.imagesInUse = []; console.warn(`[${MODULE_ID}] images in use:`, err); }
    const written = await writeDataFiles([{ path, text: JSON.stringify(payload, null, 2) }]);
    exportState.lastAt = payload.exportedAt; exportState.lastPath = written[0] ?? path; exportState.pending = false;
    try { await g.game.settings.set(MODULE_ID, EXPORT_STAMP_SETTING, payload.exportedAt); } catch (err) { /* tests */ }
    console.log(`[${MODULE_ID}] world exported back (${reason}): ${payload.actors.length} actors → ${exportState.lastPath}`);
    return { path: exportState.lastPath, actors: payload.actors.length, exportedAt: payload.exportedAt };
  } catch (err) {
    console.warn(`[${MODULE_ID}] export back failed (${reason}):`, err);
    return null;
  } finally {
    exportState.running = false;
    if (exportState.pending) { exportState.pending = false; scheduleExportBack("changes during the export"); }
  }
}

/** A change to an actor (or its items/effects) by anyone: export after `exportDelay` quiet seconds — the active GM's client does it. */
export function scheduleExportBack(reason = "actor changed", { delayMs = null } = {}) {
  const g = G();
  if (!g.game?.user?.isGM) return false;
  const activeGM = g.game.users?.activeGM;
  if (activeGM && activeGM.id !== g.game.user.id) return false;
  const s = syncSettings();
  if (s.exportBack === false) return false;
  const ms = delayMs ?? Math.max(1, Number(s.exportDelay) || SYNC_DEFAULTS.exportDelay) * 1000;
  if (exportTimer) clearTimeout(exportTimer);
  exportTimer = setTimeout(() => { exportTimer = null; exportBack({ reason }); }, ms);
  return true;
}

/** The document hooks that mean "the world changed" (world actors only — not tokens' synthetic actors, not compendia). */
export function exportBackHooks() {
  const g = G();
  if (!g.Hooks?.on) return 0;
  const isWorldActor = (doc) => !!doc && !doc.pack && (doc.documentName === "Actor" ? !doc.isToken : (doc.parent?.documentName === "Actor" && !doc.parent.isToken && !doc.parent.pack));
  let n = 0;
  for (const doc of ["Actor", "Item", "ActiveEffect"]) for (const verb of ["create", "update", "delete"]) {
    g.Hooks.on(`${verb}${doc}`, (d) => { if (isWorldActor(d)) scheduleExportBack(`${verb} ${doc}`); });
    n++;
  }
  return n;
}

/** The `ready` hook's part: a GM's world syncs itself once per published packet (setting syncAuto). */
/**
 * 1.9.3: the sync on load is off by default, and a world that had it on is
 * switched off ONCE (a bug in a sync that runs by itself runs by itself).
 * Turned on again by hand it stays on — the retired flag remembers.
 */
export async function retireAutoSync() {
  const g = G();
  const settings = g.game?.settings;
  if (!settings?.get) return false;
  if (settings.get(MODULE_ID, AUTO_RETIRED_SETTING) === true) return false;
  const wasOn = settings.get(MODULE_ID, SYNC_SETTING_KEYS.auto) === true;
  if (wasOn) {
    await settings.set(MODULE_ID, SYNC_SETTING_KEYS.auto, false);
    notify("info", "Waluipedia Mass Import 1.9.3: the sync no longer runs by itself when the world loads — use Sync in the Actors sidebar (Settings → Sync: automatic turns it back on)");
    console.log(`[${MODULE_ID}] sync on load switched off (1.9.3); the Sync button is the way`);
  }
  await settings.set(MODULE_ID, AUTO_RETIRED_SETTING, true);
  return wasOn;
}

export async function autoSync({ delay = 2500, github = null } = {}) {
  const g = G();
  if (!g.game?.user?.isGM) return null;
  // two GMs logged in: only the active one (Foundry's pick) syncs — the stamp is a world setting
  const activeGM = g.game.users?.activeGM;
  if (activeGM && activeGM.id !== g.game.user.id) return null;
  let on = true;
  try { on = g.game.settings.get(MODULE_ID, SYNC_SETTING_KEYS.auto) !== false; } catch (err) { on = true; }
  if (!on) return null;
  if (delay) await new Promise((resolve) => setTimeout(resolve, delay));
  try { return await syncFromWaluipedia({ trigger: "auto", github }); }
  catch (err) { console.warn(`[${MODULE_ID}] automatic sync:`, err); return null; }
}

/* ----------------------------------------------------------------- hooks */

export function injectButtons(root) {
  if (!root?.querySelector) return false;
  const header = root.querySelector(".header-actions, .action-buttons, .directory-header");
  if (!header || header.querySelector(".wmi-buttons")) return false;
  header.insertAdjacentHTML("beforeend", `<div class="wmi-buttons">
      <button type="button" class="wmi-sync" title="Everything, one click: find the newest Waluipedia packet (your Foundry Data folder → the start.py launcher → GitHub), check it against the world first, show the differences and apply them on your OK — the world mirror, the generated cast and the era packets into their coloured folders; duplicate folders merged, empty ones removed. Shift-click to review the list first."><i class="fas fa-sync-alt"></i> Sync</button>
      <button type="button" class="wmi-import" title="Import many actors — a JSON, a repo packet, a URL, or a Data directory (subfolders → folders); review table first; existing actors updated in place"><i class="fas fa-file-import"></i> Mass import</button>
      <button type="button" class="wmi-export" title="Export every actor with its folder path — one JSON download, or a tree inside your Data folder"><i class="fas fa-file-export"></i> Mass export</button>
    </div>`);
  header.querySelector(".wmi-sync")?.addEventListener("click", (ev) => syncFromWaluipedia(ev?.shiftKey ? { review: true } : {}));
  header.querySelector(".wmi-import")?.addEventListener("click", () => openImportDialog());
  header.querySelector(".wmi-export")?.addEventListener("click", () => openExportDialog());
  return true;
}

/**
 * Tag chips in the Actors sidebar: flags["waluipedia-sheets"].tags (the suite's
 * organizer writes them — the website group, pc/npc, role, creature type, …),
 * tinted with flags["waluipedia-sheets"].color when the actor has one.
 */
export function decorateDirectory(root, actors, { max = 3 } = {}) {
  if (!root?.querySelectorAll || !actors) return 0;
  let n = 0;
  const get = (id) => (typeof actors.get === "function" ? actors.get(id) : null);
  for (const li of root.querySelectorAll("li.directory-item")) {
    if (li.classList.contains("folder") || li.querySelector(".wmi-tags")) continue;
    const id = li.dataset?.entryId ?? li.dataset?.documentId ?? li.getAttribute?.("data-entry-id") ?? li.getAttribute?.("data-document-id");
    const actor = id ? get(id) : null;
    const tags = tagsOf(actor);
    if (!tags.length) continue;
    const doc = li.ownerDocument ?? G().document;
    const wrap = doc.createElement("span");
    wrap.className = "wmi-tags";
    wrap.title = tags.join(" · ");
    const color = actor?.flags?.["waluipedia-sheets"]?.color;
    if (typeof color === "string" && /^#[0-9a-f]{6}$/i.test(color)) wrap.style.setProperty("--wmi-tag", color);
    for (const t of tags.slice(0, max)) {
      const chip = doc.createElement("span");
      chip.className = "wmi-tag";
      chip.textContent = t;
      wrap.appendChild(chip);
    }
    if (tags.length > max) { const more = doc.createElement("span"); more.className = "wmi-tag wmi-more"; more.textContent = `+${tags.length - max}`; wrap.appendChild(more); }
    (li.querySelector(".entry-name, .document-name, h4") ?? li).appendChild(wrap);
    n++;
  }
  return n;
}

export const api = {
  onInit, onReady, onRenderActorDirectory, ensureFreshStyles,
  MODULE_ID, FORMAT, RAW_BASE, KNOWN_PACKETS, packetUrl,
  docDiff, deepEqual, repairIdentifiers, slugifyIdentifier, tagsOf, decorateDirectory, folderCounts,
  exportAllActors, exportToDataFolder, exportTree, openExportDialog, buildExportPayload,
  importPayload, importFile, importFromUrl, importFromDataPath, openImportDialog,
  loadSource, loadSourceDetailed, loadDataPath, assembleDirectory, walkData, browseData, pickDataPath,
  buildPlan, applyPlanEdits, planHtml, normalizeImport, summarize,
  syncFromWaluipedia, autoSync, syncCandidates, syncSettings, syncChanges, syncSummaryHtml, snapshotWorld, actorFacts,
  mergePackets, syncStamp, checkModuleVersion, checkGitHubVersion, versionVerdict, compareVersions, tidyFolders, duplicateFolderGroups, emptyFolderIds, folderKey,
  lastSyncFacts, unreadExport,
  embeddedSources, isCachedSpell, singletonNotes, planEmbedded, leafPaths, swapSingleton, swapsHtml, syncPending, changedRows,
  exportBack, scheduleExportBack, exportBackPath, SINGLETON_TYPES,
  relinkPlacedTokens, imagesInUse, noticeArtServer, withoutOwnership, stripEmbeddedOwnership, USER_ID,
  loadManifest, isManifest, isSheetIndex, SYNC_DEFAULTS, SYNC_SCOPE_LABEL, MODULE_VERSION,
  worldNewer, statsTime, packetTime, readWritten, saveWritten, stampWritten, SYNC_WRITTEN_SETTING, organisationUpdate, ORGANISATION_FLAGS,
  singletonLeftover, appliedSingletonId, retireAutoSync,
};

/** "init": the settings. (Called by the loader once the core has arrived — a
 *  moment after Foundry's own init at the very worst; settings may be
 *  registered any time before they are read, and they are read at ready.) */
export function onInit() {
  const g = G();
  if (!g.game?.settings?.register) return;
  try {
    g.game.settings.register(MODULE_ID, "defaultSource", {
      name: "Default import source",
      hint: "URL or Data path pre-filled in the import dialog — e.g. the raw GitHub URL of the repo's import.json.",
      scope: "world", config: true, type: String, default: "",
    });
    const reg = (key, name, hint, extra) => g.game.settings.register(MODULE_ID, key, { name, hint, scope: "world", config: true, ...extra });
    reg("syncAuto", "Sync: automatic", "Check the newest packet by itself when the world loads and ask before applying — once per published packet. Off (the default since 1.9.3): only the Sync button in the Actors sidebar.", { type: Boolean, default: SYNC_DEFAULTS.auto });
    reg("syncWorld", "Sync: world id", "The world the Waluipedia mirror is split from (actors/worlds/<world>/).", { type: String, default: SYNC_DEFAULTS.world });
    reg("syncPacketDir", "Sync: packet folder inside Data", "Where tools/sheets-suite.py publishes the packet (default npc/waluipedia — Sync looks here first, no URL needed).", { type: String, default: SYNC_DEFAULTS.packetDir });
    reg("syncLauncher", "Sync: launcher URL", "The start.py static server — tried when the Data folder has no packet.", { type: String, default: SYNC_DEFAULTS.launcher });
    reg("syncBranch", "Sync: GitHub branch", "Last resort: the committed world manifest and actor files, the cast and the era packets on this branch of mikegent01/bik, merged here.", { type: String, default: SYNC_DEFAULTS.branch });
    reg("syncMergeFolders", "Sync: merge duplicate folders", "After a sync, two Actor folders with one name under one parent (what an earlier import left) become one — the fuller one.", { type: Boolean, default: SYNC_DEFAULTS.mergeFolders });
    reg("syncPruneFolders", "Sync: remove empty folders", "After a sync, Actor folders holding no actor and no sub-folder are deleted.", { type: Boolean, default: SYNC_DEFAULTS.pruneFolders });
    reg("syncReview", "Sync: review first", "Show the review table before every sync (shift-click the button does it once).", { type: Boolean, default: SYNC_DEFAULTS.review });
    reg("syncConfirm", "Sync: check first, ask before applying", "Every sync (automatic or the button) is computed as a dry run first. Identical world: nothing happens, a line in the console. Differences: a summary with Apply / Not now / Skip this packet. Off: the button applies at once (the automatic sync always asks).", { type: Boolean, default: SYNC_DEFAULTS.confirm });
    reg("syncExportBack", "Sync: export the world back into Data", "The other direction: a while after the last change to any actor (a session's edits, a level-up), the GM's client writes the whole world to <packet folder>/<world>/export/<world>-all-actors.json inside Data — tools/sheets-suite.py --watch picks it up, mirrors it into the repo and (with --git-sync) commits it.", { type: Boolean, default: SYNC_DEFAULTS.exportBack });
    reg("syncExportDelay", "Sync: quiet seconds before that export", "How long after the last actor change the export runs (default 120).", { type: Number, default: SYNC_DEFAULTS.exportDelay, range: { min: 10, max: 3600, step: 10 } });
    g.game.settings.register(MODULE_ID, SYNC_STAMP_SETTING, { scope: "world", config: false, type: String, default: "" });
    g.game.settings.register(MODULE_ID, EXPORT_STAMP_SETTING, { scope: "world", config: false, type: String, default: "" });
    g.game.settings.register(MODULE_ID, SYNC_APPLIED_SETTING, { scope: "world", config: false, type: String, default: "" });
    g.game.settings.register(MODULE_ID, SYNC_WRITTEN_SETTING, { scope: "world", config: false, type: String, default: "" });
    g.game.settings.register(MODULE_ID, AUTO_RETIRED_SETTING, { scope: "world", config: false, type: Boolean, default: false });
    g.game.settings.register(MODULE_ID, "showTags", { name: "Tag chips in the Actors sidebar", hint: "Show the Waluipedia tags (website group, pc/npc, role, creature type) next to each actor's name.", scope: "client", config: true, type: Boolean, default: true });
  } catch (err) { console.warn(`[${MODULE_ID}] settings`, err); }
}

/**
 * The stylesheet Foundry linked carries the "?v=" of the manifest it loaded
 * at world launch; when that is not this core's version the CSS may be as
 * stale as the manifest — link a fresh copy (later link wins).
 */
export function ensureFreshStyles() {
  const g = G();
  const loaded = g.game?.modules?.get?.(MODULE_ID)?.version ?? null;
  if (!loaded || loaded === MODULE_VERSION || !g.document?.head) return false;
  if (g.document.head.querySelector(`link[data-wmi-fresh]`)) return false;
  const link = g.document.createElement("link");
  link.rel = "stylesheet";
  link.href = `modules/${MODULE_ID}/styles/mass-import.css?v=${MODULE_VERSION}-${Date.now()}`;
  link.dataset.wmiFresh = MODULE_VERSION;
  g.document.head.appendChild(link);
  return true;
}

/** "ready": the API, a word about versions, then the automatic sync. */
export async function onReady() {
  const g = G();
  const mod = g.game?.modules?.get?.(MODULE_ID);
  if (mod) mod.api = api;
  g[MODULE_ID.replace(/-/g, "_")] = api;
  const loaded = mod?.version ?? null;
  console.log(`[${MODULE_ID}] ${MODULE_VERSION} ready — game.modules.get("${MODULE_ID}").api${loaded && loaded !== MODULE_VERSION ? ` (Foundry loaded the manifest of ${loaded} — Setup → Launch World refreshes it; the code running is ${MODULE_VERSION})` : ""}`);
  try { ensureFreshStyles(); } catch (err) { /* cosmetic */ }
  let github = null;
  if (g.game?.user?.isGM) {
    try { await retireAutoSync(); } catch (err) { /* no settings in tests */ }
    try { await announceVersion(); } catch (err) { /* offline packaging, tests */ }
    try { if (g.document?.body?.addEventListener && !g.document.body.dataset.wmiSwap) { g.document.body.addEventListener("click", onSwapClick); g.document.body.dataset.wmiSwap = "1"; } } catch (err) { /* no DOM in tests */ }
    try { exportBackHooks(); } catch (err) { console.warn(`[${MODULE_ID}] export-back hooks`, err); }
    try {
      github = await checkGitHubVersion(syncSettings().branch);
      if (github.ahead) notify("info", `Waluipedia Mass Import ${github.github} is on GitHub (${github.branch}); this install runs ${MODULE_VERSION} — the suite with --git-sync (or git pull) installs it, then Setup → Launch World`);
    } catch (err) { github = null; }
  } else if (g.game?.user) {
    // a player's browser must reach the art server too — the GM's sync cannot test that for them
    try { await noticeArtServer(); } catch (err) { /* cosmetic */ }
  }
  return autoSync({ github });
}

/** "renderActorDirectory": the tag chips and, for GMs, the three buttons. */
export function onRenderActorDirectory(app, html) {
  const g = G();
  const root = (typeof g.HTMLElement === "function" && html instanceof g.HTMLElement) ? html : (html?.[0] ?? html);
  let showTags = true;
  try { showTags = g.game.settings.get(MODULE_ID, "showTags") !== false; } catch (err) { showTags = true; }
  if (showTags) { try { decorateDirectory(root, g.game?.actors); } catch (err) { console.warn(`[${MODULE_ID}] tags`, err); } }
  if (!g.game?.user?.isGM) return false;
  return injectButtons(root);
}

/** Wire the three hooks directly (what the loader does with a wait in between;
 *  tests and a core loaded by hand use this). */
export function register() {
  const g = G();
  if (!g.Hooks) return false;
  g.Hooks.once("init", onInit);
  g.Hooks.once("ready", onReady);
  g.Hooks.on("renderActorDirectory", onRenderActorDirectory);
  return true;
}
