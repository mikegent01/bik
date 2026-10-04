/**
 * Waluipedia Mass Import / Export — the Foundry end of the repo bridge.
 *
 *   Export   every actor in the world (or one folder subtree) to a single JSON
 *            file. Each actor carries flags["waluipedia-mass-import"].folderPath
 *            (["Peach's Castle 955 BF", "The Court"]) so the folder tree survives
 *            the round trip without depending on folder ids.
 *   Import   a JSON of many actors: the module's own export, the old
 *            `{ actors: [...] }` macro export, a bare array, or one actor.
 *            Folders are created from folderPath, actors are matched by _id
 *            (falling back to name + type) and UPDATED IN PLACE — embedded items
 *            and effects are synced, so re-importing never duplicates. Images are
 *            HEAD-checked against the server and reported (or swapped for a
 *            placeholder on request). Dry run available.
 *
 * Buttons appear in the Actors sidebar header for the GM; the same functions
 * are on game.modules.get("waluipedia-mass-import").api for macros. All Foundry
 * globals are looked up at call time so the pure parts can be unit-tested in
 * node (tools/tests/test-mass-import-module.mjs).
 */

export const MODULE_ID = "waluipedia-mass-import";
export const FORMAT = "waluipedia-actors/1";
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
  const res = await G().fetch(source, { cache: "no-store" });
  if (!res.ok) throw new Error(`${source}: HTTP ${res.status}`);
  return res.json();
}

/** Load the raw JSON from a File, a URL, or a path inside the Data folder. */
export async function loadSource({ file, url } = {}) {
  if (file) return JSON.parse(await file.text());
  if (url) return fetchJson(url.trim());
  throw new Error("Choose a file or give a URL / Data path");
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
  const content = `<form class="wmi-form">
    <p class="notes">Writes one JSON with every actor and its folder path (<code>flags.${MODULE_ID}.folderPath</code>). Commit it to the repo; <code>tools/foundry-bridge.py split</code> takes it from there.</p>
    <div class="form-group"><label>Folder</label><select name="folderId">${folderOptionsHtml()}</select></div>
    <div class="form-group"><label>Types</label><input type="text" name="types" value="" placeholder="all — or e.g. character, npc"></div>
  </form>`;
  const form = await showForm({ title: "Mass export actors", content, okLabel: "Export", okIcon: "fas fa-file-export" });
  if (!form) return null;
  const types = splitPath(form.types.replace(/,/g, "/"));
  return exportAllActors({ folderId: form.folderId || null, types });
}

export async function openImportDialog(preset = {}) {
  const g = G();
  const defaultUrl = (() => { try { return g.game.settings.get(MODULE_ID, "defaultSource") || ""; } catch (err) { return ""; } })();
  const checked = (k) => (preset[k] ?? DEFAULTS[k]) ? "checked" : "";
  const content = `<form class="wmi-form">
    <div class="form-group"><label>JSON file</label><input type="file" name="file" accept=".json,application/json"></div>
    <div class="form-group"><label>…or URL / Data path</label><input type="text" name="url" value="${escapeHtml(preset.url ?? defaultUrl)}" placeholder="https://raw.githubusercontent.com/…/import.json or imports/world.json"></div>
    <div class="form-group"><label>Put everything under</label><input type="text" name="rootFolder" value="${escapeHtml(preset.rootFolder ?? "")}" placeholder="optional folder, e.g. Imports / Session 42"></div>
    <div class="form-group"><label>Mode</label><select name="mode">
      <option value="upsert" ${(preset.mode ?? "upsert") === "upsert" ? "selected" : ""}>Create new, update existing (upsert)</option>
      <option value="create" ${preset.mode === "create" ? "selected" : ""}>Create only — never touch existing</option>
      <option value="update" ${preset.mode === "update" ? "selected" : ""}>Update only — never create</option>
    </select></div>
    <div class="form-group wmi-checks">
      <label><input type="checkbox" name="matchByName" ${checked("matchByName")}> match by name + type when no id matches</label>
      <label><input type="checkbox" name="replaceEmbedded" ${checked("replaceEmbedded")}> remove items/effects the import no longer has</label>
      <label><input type="checkbox" name="overwriteOwnership" ${checked("overwriteOwnership")}> overwrite ownership (off = keep the world's)</label>
      <label><input type="checkbox" name="skipPlayerCharacters" ${checked("skipPlayerCharacters")}> skip player characters</label>
      <label><input type="checkbox" name="checkImages" ${checked("checkImages")}> check that every image exists on the server</label>
      <label><input type="checkbox" name="fixMissingImages" ${checked("fixMissingImages")}> swap missing images for placeholders</label>
      <label><input type="checkbox" name="dryRun" ${checked("dryRun")}> dry run — report only, change nothing</label>
    </div>
  </form>`;
  const form = await showForm({ title: "Mass import actors", content, okLabel: "Import", okIcon: "fas fa-file-import" });
  if (!form) return null;
  let raw;
  try { raw = await loadSource({ file: form.file, url: form.url }); }
  catch (err) { notify("error", `Mass import: ${err.message}`); return null; }
  const report = await importPayload(raw, { ...form, file: undefined, url: undefined });
  announce(report);
  await showReport(report);
  return report;
}

export function reportHtml(report) {
  const li = (rows, fmt) => rows.length ? `<ul>${rows.map((r) => `<li>${fmt(r)}</li>`).join("")}</ul>` : "<p class='notes'>none</p>";
  return `<div class="wmi-report">
    <p><strong>${escapeHtml(summarize(report))}</strong></p>
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
      <button type="button" class="wmi-import" title="Import many actors from one JSON (folders rebuilt, existing updated in place)"><i class="fas fa-file-import"></i> Mass import</button>
      <button type="button" class="wmi-export" title="Export every actor with its folder path to one JSON"><i class="fas fa-file-export"></i> Mass export</button>
    </div>`);
  header.querySelector(".wmi-import")?.addEventListener("click", () => openImportDialog());
  header.querySelector(".wmi-export")?.addEventListener("click", () => openExportDialog());
  return true;
}

export const api = {
  MODULE_ID, FORMAT,
  exportAllActors, openExportDialog, buildExportPayload,
  importPayload, importFromUrl, openImportDialog, loadSource, normalizeImport, summarize,
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
