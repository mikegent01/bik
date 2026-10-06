// Functional test for the Waluipedia Mass Import / Export Foundry module.
// A small fake Foundry (game, Actor, Folder, Hooks, fetch) is installed on
// globalThis, then the real module is imported and driven through export,
// import, re-import (update in place), embedded sync, dry run, image checks,
// the accepted payload shapes and the sidebar button injection.
//
//   node tools/tests/test-mass-import-module.mjs
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const MOD_DIR = path.resolve('Reputation-Matrix2/Foundry/mass_import');
const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra && !cond ? ` — ${extra}` : ''));

// ---------------------------------------------------------------- manifest
const manifest = JSON.parse(fs.readFileSync(path.join(MOD_DIR, 'module.json'), 'utf8'));
check('module id is stable', manifest.id === 'waluipedia-mass-import', manifest.id);
check('version 1.7 (check-first sync, export back, swaps; on top of automatic everything-sync + folder tidy + invalid-document repair, diff updates, identifier repair, folder colours, tags, Data folders, review table, replace on type change)', /^1\.([7-9]|\d{2,})/.test(manifest.version) && /dry run first/.test(manifest.description) && /swap/.test(manifest.description) && /diffs/.test(manifest.description) && /chips/.test(manifest.description) && /Data/.test(manifest.description) && /same id/.test(manifest.description) && /by itself/.test(manifest.description) && /merges duplicate folders/.test(manifest.description) && /could not validate/.test(manifest.description), manifest.version);
check('manifest loads the script and stylesheet', manifest.esmodules?.includes('scripts/mass-import.js') && manifest.styles?.includes('styles/mass-import.css'));
const loaderText = fs.readFileSync(path.join(MOD_DIR, 'scripts/mass-import.js'), 'utf8');
check('v1.6: the entry Foundry loads is a tiny loader — it imports mass-import-core.js with a fresh query string (a newer install runs after a plain F5) and registers the three hooks synchronously', loaderText.split('\n').length < 40 && loaderText.includes('import(`./mass-import-core.js?v=${Date.now()}`)') && ['Hooks.once("init"', 'Hooks.once("ready"', 'Hooks.on("renderActorDirectory"'].every((h) => loaderText.includes(h)) && !/^import\s/m.test(loaderText) && fs.existsSync(path.join(MOD_DIR, 'scripts/mass-import-core.js')));
check('every manifest file exists', [...manifest.esmodules, ...manifest.styles].every((f) => fs.existsSync(path.join(MOD_DIR, f))));
check('compatibility spans v12..v14', Number(manifest.compatibility.minimum) <= 12 && Number(manifest.compatibility.verified) >= 14);
check('manifest + download URLs point at the module folder / zip', manifest.manifest.endsWith('/mass_import/module.json') && manifest.download.endsWith('/mass_import.zip'));
for (const m of ['export-all-actors.js', 'import-all-actors.js', 'import-peachs-castle-955.js', 'import-bowsers-castle-1035.js', 'import-liberated-toads.js', 'import-fawfuls-forces.js', 'import-from-data-folder.js', 'export-to-data-folder.js', 'sync-from-waluipedia.js']) {
  const src = fs.readFileSync(path.join(MOD_DIR, 'macros', m), 'utf8');
  const wrapped = spawnSync(process.execPath, ['-e', 'new Function("game","ui","foundry", "return (async()=>{" + process.argv[1] + "})()")', src], { encoding: 'utf8' });
  check(`macro ${m} parses as a script macro body`, wrapped.status === 0, wrapped.stderr.trim());
}

// ------------------------------------------------------------ fake Foundry
let idCounter = 0;
const newId = () => `id${String(++idCounter).padStart(14, '0')}`;
class Coll extends Map {
  get contents() { return [...this.values()]; }
  find(fn) { return this.contents.find(fn); }
  filter(fn) { return this.contents.filter(fn); }
}
const hooks = {};
globalThis.Hooks = {
  on: (name, fn) => (hooks[name] = hooks[name] || []).push(fn),
  once: (name, fn) => (hooks[name] = hooks[name] || []).push(fn),
  call: (name, ...args) => (hooks[name] || []).forEach((fn) => fn(...args)),
};
const settings = new Map();
const modules = new Map([['waluipedia-mass-import', {}]]);
class Folder {
  constructor(data) {
    const { folder, ...rest } = data;
    Object.assign(this, rest);
    this.id = data._id;
    this.parentId = folder ?? null;
  }
  // mimic Foundry v11+: `folder` is the parent Folder document (or null)
  get folder() { return this.parentId ? game.folders.get(this.parentId) : null; }
  static async create(data) {
    const f = new Folder({ ...data, _id: newId() });
    game.folders.set(f.id, f);
    return f;
  }
  async update(data) { const { folder, ...rest } = data; Object.assign(this, rest); if (folder !== undefined) this.parentId = folder; return this; }
  async delete(opts = {}) {
    // Foundry: without deleteContents / deleteSubfolders the contents move to the parent
    for (const a of game.actors.contents) if (a.folderId === this.id) a.folderId = this.parentId;
    for (const f of game.folders.contents) if (f.parentId === this.id) f.parentId = this.parentId;
    game.folders.delete(this.id);
    return this;
  }
}
// Foundry's update semantics: partial, recursive merge; "-=key": null deletes.
function applyUpdate(target, changes) {
  for (const [k, v] of Object.entries(changes ?? {})) {
    if (k.startsWith('-=')) { delete target[k.slice(2)]; continue; }
    const plain = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
    if (plain(v) && plain(target[k])) applyUpdate(target[k], v);
    else target[k] = structuredClone(v);
  }
  return target;
}
class Item {
  constructor(data) { this._data = structuredClone(data); this.id = data._id; this.name = data.name; this.type = data.type; }
  get flags() { return this._data.flags ?? {}; }
  toObject() { return structuredClone(this._data); }
}
// dnd5e's IdentifierField: an item whose identifier fails this never reaches the collection (Foundry keeps it as an invalid document)
const validItem = (d) => !(typeof d?.system?.identifier === 'string' && d.system.identifier && !/^[a-z0-9_-]+$/i.test(d.system.identifier));
const singletonTypes = new Set(['race', 'background']);
const refusedSingletons = [];
class Actor {
  constructor(data) {
    this._data = structuredClone(data);
    this.id = data._id; this.name = data.name; this.type = data.type; this.flags = structuredClone(data.flags ?? {});
    this._source = { items: structuredClone(data.items ?? []), effects: structuredClone(data.effects ?? []) };
    this.items = new Coll((data.items ?? []).filter(validItem).map((i) => [i._id, new Item(i)]));
    this.items.invalidDocumentIds = new Set((data.items ?? []).filter((i) => !validItem(i)).map((i) => i._id));
    this.items.getInvalid = (id) => { const src = this._source.items.find((i) => i._id === id); return src ? { _source: structuredClone(src) } : undefined; };
    this.effects = new Coll((data.effects ?? []).map((e) => [e._id, e]));
    this.folderId = data.folder ?? null;
    this.updates = 0;
  }
  get itemTypes() { const by = {}; for (const i of this.items.contents) (by[i.type] ??= []).push(i); return by; }
  get folder() { return this.folderId ? game.folders.get(this.folderId) : null; }
  get img() { return this._data.img; }
  get prototypeToken() { return this._data.prototypeToken; }
  get ownership() { return this._data.ownership; }
  async delete() { game.actors.delete(this.id); return this; }
  toObject() { return { ...structuredClone(this._data), folder: this.folderId, items: this.items.contents.map((i) => i.toObject()), effects: this.effects.contents.map((e) => structuredClone(e)) }; }
  static async create(data, opts = {}) {
    const d = structuredClone(data);
    if (!(opts.keepId && d._id)) d._id = newId();
    for (const it of d.items ?? []) if (!(opts.keepEmbeddedIds !== false && it._id)) it._id = newId();
    const a = new Actor(d);
    game.actors.set(a.id, a);
    return a;
  }
  async update(data, opts) {
    this.updates++;
    this.lastUpdate = structuredClone(data);
    this.lastUpdateOptions = opts;
    const { folder, items, effects, ...rest } = data;
    applyUpdate(this._data, rest);
    if (rest.name) this.name = rest.name;
    if (rest.flags) this.flags = structuredClone(this._data.flags);
    if (folder !== undefined) this.folderId = folder;
    // Foundry: an embedded array in a parent update merges by _id on the SOURCE
    // (an invalid document included); the collection is rebuilt from it
    if (Array.isArray(items)) {
      (this.parentItemUpdates ??= []).push(structuredClone(items));
      for (const partial of items) {
        if (!partial?._id) throw new Error('You must provide an _id for every object in the update data Array.');
        const src = this._source.items.find((i) => i._id === partial._id);
        if (!src) { this._source.items.push(structuredClone(partial)); continue; }
        applyUpdate(src, partial);
        const live = this.items.get(partial._id);
        if (live) { applyUpdate(live._data, partial); live.name = live._data.name; continue; }
        if (validItem(src)) { this.items.invalidDocumentIds.delete(partial._id); this.items.set(partial._id, new Item(structuredClone(src))); }
      }
    }
    return this;
  }
  async createEmbeddedDocuments(type, arr, opts = {}) {
    (this.embeddedCreates ??= []).push({ type, arr: structuredClone(arr), opts });
    const made = [];
    for (const d of arr) {
      const id = (opts.keepId && d._id) ? d._id : newId();
      if (type === 'Item') {
        // Foundry: an id already in the collection — valid or invalid — is a hard error
        if (opts.keepId && d._id && (this.items.has(d._id) || this.items.invalidDocumentIds.has(d._id))) throw new Error(`The _id [${d._id}] already exists within the parent collection: Actor [${this.id}] items`);
        // dnd5e: a second species / background on a character is refused in _preCreate (an error notification, no document)
        if (this.type === 'character' && singletonTypes.has(d.type) && this.items.contents.some((i) => i.type === d.type)) { refusedSingletons.push(`${this.name}: ${d.name}`); continue; }
        const item = new Item({ ...d, _id: id });
        this._source.items.push(item.toObject());
        if (validItem(d)) this.items.set(id, item); else this.items.invalidDocumentIds.add(id);
        made.push(item);
      } else { const e = { ...d, _id: id }; this.effects.set(id, e); made.push(e); }
    }
    return made;
  }
  async updateEmbeddedDocuments(type, arr, opts = {}) {
    (this.embeddedUpdates ??= []).push({ type, arr: structuredClone(arr), opts });
    for (const d of arr) {
      if (type === 'Item') {
        const it = this.items.get(d._id);
        if (it) { applyUpdate(it._data, d); it.name = it._data.name; const src = this._source.items.find((i) => i._id === d._id); if (src) applyUpdate(src, d); continue; }
        // Foundry 14 (the GM's console, 1.6.0 run): the embedded route looks the document up in the live
        // collection, where an invalid one is not, and dies — the 1.5/1.6 "repair by update" never worked
        if (this.items.invalidDocumentIds.has(d._id)) throw new TypeError("Cannot read properties of undefined (reading '_source')");
        throw new Error(`Item ${d._id} does not exist!`);
      }
      else { const e = this.effects.get(d._id); if (!e) throw new Error(`ActiveEffect ${d._id} does not exist!`); applyUpdate(e, d); }
    }
  }
  async deleteEmbeddedDocuments(type, ids) {
    (this.embeddedDeletes ??= []).push({ type, ids: [...ids] });
    for (const id of ids) {
      const coll = type === 'Item' ? this.items : this.effects;
      if (type === 'Item' && this.items.invalidDocumentIds.has(id)) { this.items.invalidDocumentIds.delete(id); this._source.items = this._source.items.filter((i) => i._id !== id); continue; }
      if (!coll.has(id)) throw new Error(`${type} ${id} does not exist!`);
      coll.delete(id);
      if (type === 'Item') this._source.items = this._source.items.filter((i) => i._id !== id);
    }
  }
}
const game = {
  world: { id: 'test-world' }, system: { id: 'dnd5e', version: '5.3.3' }, version: '13.346',
  user: { isGM: true },
  actors: new Coll(), folders: new Coll(), modules,
  settings: { register: (scope, key, cfg) => settings.set(`${scope}.${key}`, cfg.default), get: (scope, key) => settings.get(`${scope}.${key}`), set: async (scope, key, v) => settings.set(`${scope}.${key}`, v) },
};
globalThis.game = game;
globalThis.Actor = Actor;
globalThis.Folder = Folder;
globalThis.ui = { notifications: { info() {}, warn() {}, error() {} } };
globalThis.foundry = { utils: { deepClone: (v) => structuredClone(v) } };
const serverFiles = new Set(['portraits/peachs-castle-955/foe-boo.png', 'icons/svg/mystery-man.svg', 'icons/svg/item-bag.svg', 'icons/weapons/swords/sword-guard-brass-worn.webp']);
const fetched = [];
globalThis.fetch = async (url, init = {}) => {
  fetched.push([url, init.method ?? 'GET']);
  if (url.startsWith('https://example.test/')) return { ok: true, status: 200, json: async () => remotePayload };
  const file = decodeURIComponent(url); // a real server decodes %2B too
  return { ok: serverFiles.has(file), status: serverFiles.has(file) ? 200 : 404 };
};
let remotePayload = null;

// --------------------------------------------------------------- load it
const mod = await import(pathToFileURL(path.join(MOD_DIR, 'scripts/mass-import-core.js')).href);
check('the core registers nothing by itself (the loader decides when); register() wires init/ready/renderActorDirectory', !Object.keys(hooks).length && mod.register() === true && ['init', 'ready', 'renderActorDirectory'].every((h) => hooks[h]?.length === 1));
globalThis.Hooks.call('init');
check('init registers the defaultSource world setting', settings.has('waluipedia-mass-import.defaultSource'));
check('init registers the sync settings with the documented defaults — automatic OFF (1.9.3), no scope, folder tidy on, a hidden last-stamp', settings.get('waluipedia-mass-import.syncWorld') === 'midlands' && !settings.has('waluipedia-mass-import.syncScope') && settings.get('waluipedia-mass-import.syncAuto') === false && settings.get('waluipedia-mass-import.syncWritten') === '' && settings.get('waluipedia-mass-import.syncAutoRetired') === false && settings.get('waluipedia-mass-import.syncMergeFolders') === true && settings.get('waluipedia-mass-import.syncPruneFolders') === true && settings.get('waluipedia-mass-import.syncPacketDir') === 'npc/waluipedia' && settings.get('waluipedia-mass-import.syncLauncher') === 'http://127.0.0.1:8765/' && settings.get('waluipedia-mass-import.syncBranch') === 'gh-pages' && settings.get('waluipedia-mass-import.syncReview') === false && settings.get('waluipedia-mass-import.syncLastStamp') === '');
check('MODULE_VERSION in the script matches module.json (Sync compares the two to catch a world running old code)', mod.MODULE_VERSION === manifest.version, `${mod.MODULE_VERSION} vs ${manifest.version}`);
settings.set('waluipedia-mass-import.syncAuto', false); // the automatic sync is exercised on its own below, not mid-test
globalThis.Hooks.call('ready');
check('ready exposes the api on the module', modules.get('waluipedia-mass-import').api?.importPayload === mod.importPayload);

// ---------------------------------------------------- seed a world + export
const root = await Folder.create({ name: "Peach's Castle 955 BF", type: 'Actor', folder: null });
const court = await Folder.create({ name: 'The Court', type: 'Actor', folder: root.id });
await Actor.create({ _id: 'A1aaaaaaaaaaaaaa', name: 'Castle Page', type: 'npc', img: 'icons/svg/mystery-man.svg', folder: court.id,
  prototypeToken: { texture: { src: 'icons/svg/mystery-man.svg' } }, items: [{ _id: 'I1aaaaaaaaaaaaaa', name: 'Scroll Case', type: 'feat', img: 'icons/svg/item-bag.svg' }], flags: { other: { keep: true } } }, { keepId: true });
await Actor.create({ _id: 'A2aaaaaaaaaaaaaa', name: 'Remi', type: 'character', img: 'icons/svg/mystery-man.svg', folder: null, prototypeToken: { texture: { src: 'icons/svg/mystery-man.svg' } }, items: [] }, { keepId: true });

const payload = await mod.exportAllActors({ download: false, now: '2026-10-03T00:00:00Z' });
check('export carries the format tag and meta', payload.format === 'waluipedia-actors/1' && payload.exportedFrom === 'test-world' && payload.system === 'dnd5e' && payload.coreVersion === '13.346');
check('export lists folders with resolved paths', payload.folders.length === 2 && payload.folders.find((f) => f.name === 'The Court').path.join('/') === "Peach's Castle 955 BF/The Court");
const pageExport = payload.actors.find((a) => a.name === 'Castle Page');
check('export stamps folderPath on each actor', pageExport.flags['waluipedia-mass-import'].folderPath.join('/') === "Peach's Castle 955 BF/The Court");
check('export keeps other flags', pageExport.flags.other?.keep === true);
check('export of a root actor has an empty folderPath', payload.actors.find((a) => a.name === 'Remi').flags['waluipedia-mass-import'].folderPath.length === 0);
const sub = await mod.exportAllActors({ download: false, folderId: court.id });
check('export can be limited to a folder subtree', sub.actors.length === 1 && sub.actors[0].name === 'Castle Page');
check('export can be limited by type', (await mod.exportAllActors({ download: false, types: ['character'] })).actors.map((a) => a.name).join() === 'Remi');

// ------------------------------------------------- import into a fresh world
game.actors.clear(); game.folders.clear();
const incoming = structuredClone(payload);
incoming.actors.find((a) => a.name === 'Castle Page').img = 'portraits/peachs-castle-955/foe-boo.png';
const r1 = await mod.importPayload(incoming);
check('import creates every actor', r1.created.length === 2 && r1.updated.length === 0 && r1.failed.length === 0, JSON.stringify(r1.failed));
check('import rebuilds the folder chain', r1.foldersCreated.join('|') === "Peach's Castle 955 BF|Peach's Castle 955 BF / The Court" && game.folders.size === 2);
const page = game.actors.get('A1aaaaaaaaaaaaaa');
check('import keeps actor ids', !!page);
check('import files the actor in the leaf folder', page.folder?.name === 'The Court' && page.folder.folder?.name === "Peach's Castle 955 BF");
check('import keeps embedded item ids', page.items.get('I1aaaaaaaaaaaaaa')?.name === 'Scroll Case');
check('import HEAD-checks images and finds the existing one', fetched.some(([u, m]) => u === 'portraits/peachs-castle-955/foe-boo.png' && m === 'HEAD') && r1.missingImages.length === 0);

// ---------------------------------------------------- re-import = update
const again = structuredClone(payload);
const p2 = again.actors.find((a) => a.name === 'Castle Page');
p2.name = 'Castle Page (renamed)';
p2.items = [{ _id: 'I1aaaaaaaaaaaaaa', name: 'Scroll Case', type: 'feat', img: 'icons/svg/item-bag.svg', changed: true }, { name: 'Candle', type: 'loot', img: 'icons/svg/item-bag.svg' }];
const r2 = await mod.importPayload(again);
check('re-import updates in place instead of duplicating', r2.created.length === 0 && r2.updated.length === 2 && game.actors.size === 2);
check('re-import creates no duplicate folders', game.folders.size === 2 && r2.foldersCreated.length === 0);
check('update applies top-level changes', game.actors.get('A1aaaaaaaaaaaaaa').name === 'Castle Page (renamed)');
const items = game.actors.get('A1aaaaaaaaaaaaaa').items.contents.map((i) => i.name).sort();
check('update syncs embedded items (update + create)', items.join() === 'Candle,Scroll Case', items.join());
check('update merges flags instead of wiping other modules', game.actors.get('A1aaaaaaaaaaaaaa').flags.other?.keep === true);
const third = structuredClone(again);
third.actors.find((a) => a.name === 'Castle Page (renamed)').items = [];
await mod.importPayload(third);
check('replaceEmbedded removes items the import no longer has', game.actors.get('A1aaaaaaaaaaaaaa').items.size === 0);
await mod.importPayload(again, { replaceEmbedded: false });
const keep = structuredClone(again);
keep.actors.find((a) => a.name === 'Castle Page (renamed)').items = [];
await mod.importPayload(keep, { replaceEmbedded: false });
check('replaceEmbedded=false keeps existing items', game.actors.get('A1aaaaaaaaaaaaaa').items.size === 2);

// ------------------------------------------------------ match by name
const noId = structuredClone(payload);
const remi = noId.actors.find((a) => a.name === 'Remi');
delete remi._id; remi.img = 'icons/svg/mystery-man.svg';
noId.actors = [remi];
const r3 = await mod.importPayload(noId);
check('an actor without an id is matched by name + type', r3.updated.length === 1 && game.actors.size === 2);
const r3b = await mod.importPayload(noId, { matchByName: false, checkImages: false });
check('matchByName=false creates a new actor instead', r3b.created.length === 1 && game.actors.size === 3);
const stray = game.actors.contents.find((a) => a.name === 'Remi' && a.id !== 'A2aaaaaaaaaaaaaa');
game.actors.delete(stray.id);

// two different statblocks with the same name in one export stay two actors
const twins = { actors: [
  { ...structuredClone(payload.actors[0]), _id: 'G1aaaaaaaaaaaaaa', name: 'Guard', items: [] },
  { ...structuredClone(payload.actors[0]), _id: 'G2aaaaaaaaaaaaaa', name: 'Guard', items: [] },
] };
const rt = await mod.importPayload(twins, { checkImages: false });
check('same-name actors inside one import are never merged into each other', rt.created.length === 2 && game.actors.get('G2aaaaaaaaaaaaaa')?.name === 'Guard');
const rt2 = await mod.importPayload(twins, { checkImages: false });
check('…and re-importing them updates both', rt2.updated.length === 2 && rt2.created.length === 0);
// but an id-less copy of an existing actor still merges by name
const rt3 = await mod.importPayload({ actors: [{ ...twins.actors[0], _id: undefined }] }, { checkImages: false });
check('an id-less actor still matches an existing one by name', rt3.updated.length === 1 && rt3.created.length === 0);
game.actors.delete('G1aaaaaaaaaaaaaa'); game.actors.delete('G2aaaaaaaaaaaaaa');

// ------------------------------------------------------- modes + options
const before = game.actors.size;
const rc = await mod.importPayload(payload, { mode: 'create' });
check('mode=create skips existing actors', rc.skipped.length === 2 && rc.created.length === 0 && game.actors.size === before);
const fresh = structuredClone(payload); fresh.actors = [{ ...fresh.actors[0], _id: 'A9aaaaaaaaaaaaaa', name: 'Newcomer' }];
const ru = await mod.importPayload(fresh, { mode: 'update' });
check('mode=update never creates', ru.skipped.length === 1 && game.actors.size === before);
const rs = await mod.importPayload(payload, { skipPlayerCharacters: true });
check('skipPlayerCharacters leaves type character alone', rs.skipped.some((s) => s.actor.startsWith('Remi')) && rs.updated.length === 1);
const rd = await mod.importPayload(fresh, { dryRun: true });
check('dry run reports creations without creating', rd.dryRun && rd.created.length === 1 && game.actors.size === before && !game.actors.get('A9aaaaaaaaaaaaaa'));
const rr = await mod.importPayload(fresh, { rootFolder: 'Imports / Session 42', dryRun: true });
check('rootFolder prefixes the folder path', rr.created[0].folder === "Imports / Session 42 / Peach's Castle 955 BF / The Court");

// --------------------------------------------------------- image handling
const bad = structuredClone(payload); bad.actors = [{ ...bad.actors[0], _id: 'B1aaaaaaaaaaaaaa', name: 'Ghost', img: 'portraits/nope.png', prototypeToken: { texture: { src: 'portraits/nope.png' } }, items: [{ _id: 'I2aaaaaaaaaaaaaa', name: 'Thing', type: 'loot', img: 'icons/missing.webp' }] }];
const rb = await mod.importPayload(bad, { dryRun: true });
check('missing images are reported with where + path', rb.missingImages.length === 3 && rb.missingImages.some((m) => m.where === 'token' && m.path === 'portraits/nope.png'));
const rf = await mod.importPayload(bad, { fixMissingImages: true });
const ghost = game.actors.get('B1aaaaaaaaaaaaaa');
check('fixMissingImages swaps in placeholders', ghost.img === 'icons/svg/mystery-man.svg' && ghost._data.prototypeToken.texture.src === 'icons/svg/mystery-man.svg' && ghost.items.get('I2aaaaaaaaaaaaaa').toObject().img === 'icons/svg/item-bag.svg' && rf.missingImages.length === 3);
const rn = await mod.importPayload(bad, { checkImages: false, dryRun: true });
check('checkImages=false skips the HEAD requests', rn.missingImages.length === 0);

// ------------------------------------------------------ accepted shapes
const one = structuredClone(payload.actors[0]); one._id = 'C1aaaaaaaaaaaaaa'; one.name = 'Solo';
check('a single actor imports', (await mod.importPayload(one, { dryRun: true })).created.length === 1);
check('a bare array imports', (await mod.importPayload([one], { dryRun: true })).created.length === 1);
check('the old { actors } macro shape imports', (await mod.importPayload({ actors: [one] }, { dryRun: true })).created.length === 1);
const legacy = { actors: [{ ...one, folder: 'LF2', flags: {} }], folders: [{ _id: 'LF1', name: 'Legacy', folder: null }, { _id: 'LF2', name: 'Inner', folder: 'LF1' }] };
check('legacy exports resolve folders through the folders list', (await mod.importPayload(legacy, { dryRun: true })).created[0].folder === 'Legacy / Inner');
// The old macro export: folder ids but no names. Existing actors must keep
// their folder; new ones land in that folder when this world has it.
const keepFolder = game.actors.get('A1aaaaaaaaaaaaaa').folderId;
const oldMacro = { exportedFrom: 'midlands', system: 'dnd5e', exportedAt: 'x', actors: [
  { ...structuredClone(game.actors.get('A1aaaaaaaaaaaaaa').toObject()), folder: 'J8DnjiUveS1FZZ6n', flags: {} },
  { ...one, _id: 'E1aaaaaaaaaaaaaa', name: 'Same-world newcomer', folder: keepFolder, flags: {} },
  { ...one, _id: 'E2aaaaaaaaaaaaaa', name: 'Foreign newcomer', folder: 'J8DnjiUveS1FZZ6n', flags: {} },
] };
const rOld = await mod.importPayload(oldMacro, { checkImages: false });
check('old macro export: existing actor keeps its folder (not moved to root)', game.actors.get('A1aaaaaaaaaaaaaa').folderId === keepFolder && rOld.updated[0].folder === '(kept)');
check('old macro export: new actor uses the folder id when this world has it', game.actors.get('E1aaaaaaaaaaaaaa').folderId === keepFolder);
check('old macro export: unknown folder id on a new actor falls back to the root', game.actors.get('E2aaaaaaaaaaaaaa').folderId === null && game.folders.size === 2);
const rOldPrefix = await mod.importPayload({ actors: [{ ...one, _id: 'E3aaaaaaaaaaaaaa', name: 'Prefixed', folder: 'J8DnjiUveS1FZZ6n', flags: {} }] }, { checkImages: false, rootFolder: 'Imports' });
check('old macro export + rootFolder: new actor goes under the prefix', game.actors.get('E3aaaaaaaaaaaaaa').folder?.name === 'Imports' && rOldPrefix.created[0].folder === 'Imports');
game.actors.delete('E1aaaaaaaaaaaaaa'); game.actors.delete('E2aaaaaaaaaaaaaa'); game.actors.delete('E3aaaaaaaaaaaaaa');
game.folders.delete([...game.folders.values()].find((f) => f.name === 'Imports').id);
let threw = false; try { mod.normalizeImport({ nope: 1 }); } catch (e) { threw = true; }
check('garbage is rejected with a clear error', threw);

// ----------------------------------------------------------- URL import
remotePayload = { actors: [{ ...one, _id: 'D1aaaaaaaaaaaaaa', name: 'From GitHub' }] };
const rurl = await mod.importFromUrl('https://example.test/import.json', { dryRun: true });
check('importFromUrl fetches and imports', rurl.created.length === 1 && rurl.created[0].actor.startsWith('From GitHub'));

// ------------------------------------------------------ sidebar buttons
const clicks = [];
const fakeHeader = {
  html: '', children: new Map(),
  querySelector(sel) { if (sel === '.wmi-buttons') return this.html.includes('wmi-buttons') ? {} : null; return this.children.get(sel) ?? (this.html.includes(sel.slice(1)) ? this.children.set(sel, { addEventListener: (ev, fn) => clicks.push(sel) }).get(sel) : null); },
  insertAdjacentHTML(where, html) { this.html += html; },
};
const fakeRoot = { querySelector: (sel) => (sel.includes('.header-actions') ? fakeHeader : null) };
check('injectButtons adds sync + import + export buttons once', mod.injectButtons(fakeRoot) === true && clicks.sort().join() === '.wmi-export,.wmi-import,.wmi-sync' && mod.injectButtons(fakeRoot) === false);
game.user.isGM = false;
const playerHeader = { html: '', querySelector: () => null, insertAdjacentHTML(w, h) { this.html += h; } };
globalThis.Hooks.call('renderActorDirectory', {}, { querySelector: () => playerHeader });
check('players never see the buttons', playerHeader.html === '');
game.user.isGM = true;

// ----------------------------------------------------------- report html
const html = mod.reportHtml(rb);
check('report HTML escapes and lists missing images', html.includes('portraits/nope.png') && html.includes('Missing images (3)'));
check('summarize reads well (and says what was left alone)', /^0 created, [0-2] changed( \(\d unchanged\))?$/.test(mod.summarize(r2)), mod.summarize(r2));

// ------------------------------------------------- the Data folder (v1.1)
// A fake FilePicker over an in-memory Data tree: browse / createDirectory /
// upload, plus fetch() answering the files it holds.
const dataTree = new Map(); // path -> text
const dataDirs = new Set(['npc', 'npc/waluipedia', 'npc/waluipedia/cast', 'npc/waluipedia/cast/Dark Shores', 'npc/waluipedia/cast/Dark Shores/Court', 'npc/waluipedia/packets']);
const seedActor = (id, name, extra = {}) => JSON.stringify({ ...one, _id: id, name, folder: null, flags: {}, ...extra });
dataTree.set('npc/waluipedia/cast/fvtt-Actor-root-guard.json', seedActor('F1aaaaaaaaaaaaaa', 'Root Guard'));
dataTree.set('npc/waluipedia/cast/Dark Shores/fvtt-Actor-king-boo.json', seedActor('F2aaaaaaaaaaaaaa', 'King Boo', { flags: { 'waluipedia-mass-import': { folderPath: ['Somewhere', 'Else'] } } }));
dataTree.set('npc/waluipedia/cast/Dark Shores/Court/fvtt-Actor-courtier.json', seedActor('F3aaaaaaaaaaaaaa', 'Courtier'));
dataTree.set('npc/waluipedia/cast/Dark Shores/Court/notes.txt', 'not json');
dataTree.set('npc/waluipedia/cast/manifest.json', JSON.stringify({ format: 'waluipedia-actors/1', note: 'no actors here' }));
dataTree.set('npc/waluipedia/packets/import.json', JSON.stringify({ actors: [{ ...one, _id: 'F4aaaaaaaaaaaaaa', name: 'Packed One', flags: { 'waluipedia-mass-import': { folderPath: ['Packet Folder'] } } }] }));
const fpCalls = [];
class FakeFilePicker {
  constructor(opts) { this.opts = opts; fpCalls.push(['new', opts.type, opts.current]); }
  render() { this.opts.callback?.('npc/waluipedia/picked'); return this; }
  static async browse(source, target) {
    fpCalls.push(['browse', target]);
    if (!dataDirs.has(target)) throw new Error(`${target} does not exist`);
    const dirs = [...dataDirs].filter((d) => d.startsWith(target + '/') && !d.slice(target.length + 1).includes('/'));
    const files = [...dataTree.keys()].filter((f) => f.startsWith(target + '/') && !f.slice(target.length + 1).includes('/'));
    return { target, dirs, files };
  }
  static async createDirectory(source, target) {
    fpCalls.push(['mkdir', target]);
    if (dataDirs.has(target)) throw new Error(`EEXIST: file already exists, mkdir '${target}'`);
    dataDirs.add(target);
    return { path: target };
  }
  static async upload(source, dir, file, body, options) {
    fpCalls.push(['upload', dir, file.name, options?.notify]);
    dataTree.set(`${dir}/${file.name}`, await file.text());
    return { path: `${dir}/${file.name}`, status: 'success' };
  }
}
globalThis.foundry.applications = { apps: { FilePicker: { implementation: FakeFilePicker } } };
const baseFetch = globalThis.fetch;
globalThis.fetch = async (url, init = {}) => {
  const key = decodeURI(url);
  if (dataTree.has(key) && (init.method ?? 'GET') === 'GET') return { ok: true, status: 200, json: async () => JSON.parse(dataTree.get(key)) };
  return baseFetch(url, init);
};

check('KNOWN_PACKETS point at files that exist in the repo', mod.KNOWN_PACKETS.length >= 2 && mod.KNOWN_PACKETS.every((p) => fs.existsSync(path.resolve(p.path)) && mod.packetUrl(p).startsWith('https://raw.githubusercontent.com/mikegent01/bik/gh-pages/')));
check('relativeDirs walks from the chosen directory to the file', JSON.stringify(mod.relativeDirs('npc/waluipedia/cast', 'npc/waluipedia/cast/Dark Shores/Court/x.json')) === '["Dark Shores","Court"]' && mod.relativeDirs('a/b', 'a/b/x.json').length === 0 && mod.relativeDirs('/a/b/', 'a/b/c/x.json').join() === 'c');
const walked = await mod.walkData('npc/waluipedia/cast');
check('walkData detects subfolders and lists only .json files', walked.length === 4 && walked.every((f) => f.endsWith('.json')) && walked.some((f) => f.includes('/Court/')));
const assembled = mod.assembleDirectory(walked.map((p) => ({ path: p, raw: JSON.parse(dataTree.get(p)) })), { base: 'npc/waluipedia/cast' });
const pathsOf = (payload) => Object.fromEntries(payload.actors.map((a) => [a.name, a.flags['waluipedia-mass-import'].folderPath.join('/')]));
const dirPaths = pathsOf(assembled.payload);
check('assembleDirectory (dirs mode): subfolders ARE the folders, root files go to the root, the file own flag loses', dirPaths['King Boo'] === 'Dark Shores' && dirPaths.Courtier === 'Dark Shores/Court' && dirPaths['Root Guard'] === '');
check('assembleDirectory ignores non-actor JSON with a reason and records the source file', assembled.ignored.length === 1 && assembled.ignored[0].path.endsWith('manifest.json') && assembled.payload.actors.every((a) => a.flags['waluipedia-mass-import'].sourceFile));
const assembledFlags = mod.assembleDirectory(walked.map((p) => ({ path: p, raw: JSON.parse(dataTree.get(p)) })), { base: 'npc/waluipedia/cast', folderMode: 'flags' });
check('assembleDirectory (flags mode): the file\'s own path wins, directories fill the gaps', pathsOf(assembledFlags.payload)['King Boo'] === 'Somewhere/Else' && pathsOf(assembledFlags.payload).Courtier === 'Dark Shores/Court');
const packetDir = await mod.loadDataPath('npc/waluipedia/packets');
check('a combined packet inside a subdirectory keeps its own paths under that directory', packetDir.raw.actors.length === 1 && packetDir.raw.actors[0].flags['waluipedia-mass-import'].folderPath.join('/') === 'Packet Folder' && packetDir.files.length === 1);
const viaSource = await mod.loadSourceDetailed({ url: 'npc/waluipedia/cast' });
check('loadSource treats a Data path without .json as a directory', viaSource.kind === 'data-directory' && viaSource.raw.actors.length === 3 && viaSource.files.length === 4);
const viaFile = await mod.loadSourceDetailed({ url: 'npc/waluipedia/cast/fvtt-Actor-root-guard.json' });
check('loadSource still reads a single Data file', viaFile.kind === 'data-file' && viaFile.raw.name === 'Root Guard');
let missingThrew = '';
try { await mod.loadDataPath('npc/waluipedia/nothing-here'); } catch (e) { missingThrew = e.message; }
check('a Data path that is neither file nor directory fails with a readable error', /does not exist|no \.json/.test(missingThrew));

const sizeBefore = game.actors.size;
const rdir = await mod.importFromDataPath('npc/waluipedia/cast', { checkImages: false });
check('importFromDataPath creates the three actors in folders mirroring the directories', rdir.created.length === 3 && game.actors.size === sizeBefore + 3 && game.actors.get('F3aaaaaaaaaaaaaa').folder?.name === 'Court' && game.actors.get('F3aaaaaaaaaaaaaa').folder?.folder?.name === 'Dark Shores' && game.actors.get('F1aaaaaaaaaaaaaa').folderId === null && rdir.files.length === 4);
const rdir2 = await mod.importFromDataPath('npc/waluipedia/cast', { checkImages: false });
check('importing the same directory again updates in place, creates nothing', rdir2.created.length === 0 && rdir2.updated.length === 3 && game.actors.size === sizeBefore + 3);

// the review (visualizer) model
const plan = mod.buildPlan(viaSource.raw, { actors: game.actors.contents, rootFolder: 'Imports' });
check('buildPlan marks existing actors as updates and prefixes the root folder', plan.length === 3 && plan.every((r) => r.status === 'update' && r.folderPath[0] === 'Imports') && plan.find((r) => r.name === 'Courtier').folderPath.join('/') === 'Imports/Dark Shores/Court');
const planNew = mod.buildPlan({ actors: [{ ...one, _id: 'Z9aaaaaaaaaaaaaa', name: 'Nobody Yet' }] }, { actors: game.actors.contents });
check('buildPlan marks unknown actors as new', planNew[0].status === 'new' && planNew[0].existingId === null);
const keyOf = (name) => plan.find((r) => r.name === name).key;
const formFields = { other: 'x' };
for (const r of plan) { formFields[`inc:${r.key}`] = r.name !== 'King Boo'; formFields[`name:${r.key}`] = r.name; formFields[`folder:${r.key}`] = r.folderPath.join(' / '); }
formFields[`name:${keyOf('Root Guard')}`] = 'Root Guard (renamed)';
formFields[`folder:${keyOf('Root Guard')}`] = 'Moved / Here';
formFields[`folder:${keyOf('Courtier')}`] = '';
const edits = mod.editsFromForm(formFields);
check('editsFromForm reads the inc/name/folder fields', edits.include.length === 2 && !edits.include.includes(keyOf('King Boo')) && edits.names[keyOf('Root Guard')] === 'Root Guard (renamed)' && edits.folders[keyOf('Courtier')] === '');
const edited = mod.applyPlanEdits(viaSource.raw, plan, edits);
const byName = Object.fromEntries(edited.actors.map((a) => [a._id, a]));
check('applyPlanEdits drops unticked rows, renames and re-folders the rest', edited.actors.length === 2 && !byName.F2aaaaaaaaaaaaaa && byName.F1aaaaaaaaaaaaaa.name === 'Root Guard (renamed)' && byName.F1aaaaaaaaaaaaaa.flags['waluipedia-mass-import'].folderPath.join('/') === 'Moved/Here' && byName.F3aaaaaaaaaaaaaa.flags['waluipedia-mass-import'].folderPath.length === 0);
const redit = await mod.importPayload(edited, { checkImages: false });
check('the edited payload imports: renamed in place, moved to the new folder, root row at the root', redit.updated.length === 2 && game.actors.get('F1aaaaaaaaaaaaaa').name === 'Root Guard (renamed)' && game.actors.get('F1aaaaaaaaaaaaaa').folder?.name === 'Here' && game.actors.get('F3aaaaaaaaaaaaaa').folderId === null && game.actors.get('F2aaaaaaaaaaaaaa').folder?.name === 'Dark Shores');
const phtml = mod.planHtml(plan, { source: 'npc/waluipedia/cast', ignored: assembled.ignored });
check('planHtml renders a row per actor with checkbox, name and folder inputs, the tools and the ignored list', (phtml.match(/class="wmi-row/g) || []).length === 3 && phtml.includes('name="inc:0"') && phtml.includes('name="folder:2"') && phtml.includes('only new') && phtml.includes('manifest.json') && !phtml.includes('<script'));
check('planHtml escapes names', mod.planHtml([{ key: '0', name: '<img src=x onerror=alert(1)>', type: 'npc', folderPath: [], status: 'new', include: true }]).includes('&lt;img'));

// export into the Data folder
const treeFiles = mod.exportTree({ actors: [
  { _id: 'T1aaaaaaaaaaaaaa', name: "Peach's Page", type: 'npc', flags: { 'waluipedia-mass-import': { folderPath: ["Peach's Castle 955 BF", 'The Court'] } } },
  { _id: 'T2aaaaaaaaaaaaaa', name: 'Loose', type: 'npc', flags: {} },
  { _id: 'T2aaaaaaaaaaaaaa', name: 'Loose', type: 'npc', flags: {} },
] }, { dir: 'npc/waluipedia/out' });
check('exportTree writes one file per actor under its folder path, a combined import.json, and never collides', treeFiles.map((f) => f.path).join('|') === "npc/waluipedia/out/Peach's Castle 955 BF/The Court/fvtt-Actor-peachs-page-T1aaaaaaaaaaaaaa.json|npc/waluipedia/out/fvtt-Actor-loose-T2aaaaaaaaaaaaaa.json|npc/waluipedia/out/fvtt-Actor-loose-T2aaaaaaaaaaaaaa-dup.json|npc/waluipedia/out/import.json");
check('exportTree sanitises folder names that cannot be directories', mod.exportTree({ actors: [{ _id: 'T3aaaaaaaaaaaaaa', name: 'X', flags: { 'waluipedia-mass-import': { folderPath: ['A:B/C?'] } } }] }, { dir: 'd', combined: false })[0].path === 'd/A-B-C-/fvtt-Actor-x-T3aaaaaaaaaaaaaa.json');
fpCalls.length = 0;
const written = await mod.writeDataFiles(treeFiles.slice(0, 2));
check('writeDataFiles creates the directory chain once (EEXIST ignored) and uploads without per-file notifications', written.length === 2 && fpCalls.filter((c) => c[0] === 'mkdir').map((c) => c[1]).join('|') === "npc|npc/waluipedia|npc/waluipedia/out|npc/waluipedia/out/Peach's Castle 955 BF|npc/waluipedia/out/Peach's Castle 955 BF/The Court" && fpCalls.filter((c) => c[0] === 'upload').every((c) => c[3] === false) && dataTree.has("npc/waluipedia/out/Peach's Castle 955 BF/The Court/fvtt-Actor-peachs-page-T1aaaaaaaaaaaaaa.json"));
const rexp = await mod.exportToDataFolder({ dir: 'npc/waluipedia/roundtrip', folderId: null, types: [] });
check('exportToDataFolder writes the whole world as a tree + import.json', rexp.files.length === game.actors.size + 1 && dataTree.has('npc/waluipedia/roundtrip/import.json'));
const roundtrip = await mod.loadDataPath('npc/waluipedia/roundtrip');
check('…and the tree imports back with the same actors (import.json inside is ignored as a duplicate source? no — it is read too, so the count doubles and ids coincide)', roundtrip.raw.actors.length === game.actors.size * 2 && new Set(roundtrip.raw.actors.map((a) => a._id)).size === game.actors.size);
const rrt = await mod.importFromDataPath('npc/waluipedia/roundtrip', { checkImages: false, dryRun: true });
check('a dry run of the round trip updates everything and creates nothing', rrt.created.length === 0 && rrt.failed.length === 0);
fpCalls.length = 0;
const fakeForm = { elements: { url: { value: 'https://x/y.json' } } };
mod.pickDataPath(fakeForm, 'folder');
check('pickDataPath opens a folder picker and writes the choice into the url box', fpCalls[0]?.[0] === 'new' && fpCalls[0][1] === 'folder' && fpCalls[0][2] === '' && fakeForm.elements.url.value === 'npc/waluipedia/picked');

// ------------------------------------- replace on type change (npc -> character)
// A player character that sat in the world as an NPC statblock: the import
// carries the same id with type "character". Foundry cannot update a
// document's type, so the module deletes and recreates under the same id,
// keeping the world's folder and ownership.
{
  game.actors.clear(); game.folders.clear();
  const playersFolder = await Folder.create({ name: 'Players', type: 'Actor', folder: null });
  await Actor.create({ _id: 'S1aaaaaaaaaaaaaa', name: 'Salam', type: 'npc', folder: playersFolder.id, img: 'icons/svg/mystery-man.svg',
    ownership: { default: 0, GMaaaaaaaaaaaaaa: 3, P1aaaaaaaaaaaaaa: 3 }, flags: { 'scene-packer': { hash: 'abc' } },
    items: [{ _id: 'I9aaaaaaaaaaaaaa', name: 'Light Crossbow', type: 'weapon' }] }, { keepId: true });
  const promoted = { actors: [{ _id: 'S1aaaaaaaaaaaaaa', name: 'Salam', type: 'character', img: 'icons/svg/mystery-man.svg', ownership: { default: 0 },
    flags: { 'waluipedia-sheets': { promoted: { mode: 'convert' } }, 'waluipedia-mass-import': { folderPath: ['Players'] } },
    items: [{ _id: 'I9aaaaaaaaaaaaaa', name: 'Light Crossbow', type: 'weapon' }, { _id: 'I8aaaaaaaaaaaaaa', name: 'Ranger', type: 'class', system: { levels: 3 } }] }] };
  const plan = mod.buildPlan(promoted, { actors: game.actors.contents });
  check('buildPlan marks a same-id, different-type row as "replace" with the world type', plan[0].status === 'replace' && plan[0].existingType === 'npc' && plan[0].existingId === 'S1aaaaaaaaaaaaaa');
  check('planHtml shows the replace row with the type change', mod.planHtml(plan).includes('replace <small>(npc → character)</small>'));
  const dry = await mod.importPayload(promoted, { dryRun: true, checkImages: false, replaceOnTypeChange: true });
  check('dry run reports the replacement without touching the actor', dry.replaced.length === 1 && dry.replaced[0].from === 'npc' && dry.replaced[0].to === 'character' && game.actors.get('S1aaaaaaaaaaaaaa').type === 'npc');
  const off = await mod.importPayload(promoted, { replaceOnTypeChange: false, checkImages: false });
  check('replaceOnTypeChange=false skips with the reason', off.skipped.length === 1 && /type differs/.test(off.skipped[0].reason) && game.actors.get('S1aaaaaaaaaaaaaa').type === 'npc');
  const byDefault = await mod.importPayload(promoted, { checkImages: false });
  check('v1.9: replace on type change is OFF by default — the sheet being played is never deleted and recreated unless the GM ticks it; the skip names both types', mod.DEFAULTS.replaceOnTypeChange === false && byDefault.replaced.length === 0 && byDefault.skipped.length === 1 && /world npc, import character/.test(byDefault.skipped[0].reason) && game.actors.get('S1aaaaaaaaaaaaaa').type === 'npc', JSON.stringify(byDefault.skipped));
  const rep = await mod.importPayload(promoted, { checkImages: false, replaceOnTypeChange: true });
  const salam = game.actors.get('S1aaaaaaaaaaaaaa');
  check('the actor is recreated under the same id as a character', rep.replaced.length === 1 && rep.created.length === 0 && rep.updated.length === 0 && salam?.type === 'character' && game.actors.size === 1);
  check('…keeping the world folder and ownership (the players keep access)', salam.folderId === playersFolder.id && game.folders.size === 1 && salam.ownership.P1aaaaaaaaaaaaaa === 3 && salam.ownership.GMaaaaaaaaaaaaaa === 3, JSON.stringify({ folder: salam.folderId, want: playersFolder.id, own: salam.ownership }));
  check('…merging flags instead of wiping other modules', salam.flags['scene-packer']?.hash === 'abc' && salam.flags['waluipedia-sheets']?.promoted?.mode === 'convert');
  check('…with the new class item on board', salam.items.get('I8aaaaaaaaaaaaaa')?.name === 'Ranger' && salam.items.size === 2);
  check('summarize counts replacements', mod.summarize(rep) === '0 created, 0 changed, 1 replaced');
  check('report HTML lists the replacement', mod.reportHtml(rep).includes('Replaced — same id, new type (1)') && mod.reportHtml(rep).includes('npc → character'));
  const again = await mod.importPayload(promoted, { checkImages: false });
  check('a second import of the same packet is a plain update', again.replaced.length === 0 && again.updated.length === 1 && game.actors.size === 1);
  const own = await mod.importPayload({ actors: [{ ...promoted.actors[0], type: 'npc' }] }, { checkImages: false, overwriteOwnership: true, replaceOnTypeChange: true });
  check('overwriteOwnership applies the import ownership on a replacement', own.replaced.length === 1 && game.actors.get('S1aaaaaaaaaaaaaa').ownership.P1aaaaaaaaaaaaaa === undefined);
  const legacy = structuredClone(promoted.actors[0]); delete legacy.flags['waluipedia-mass-import']; legacy.folder = 'nope000000000000';
  const rl = await mod.importPayload({ actors: [legacy] }, { checkImages: false, replaceOnTypeChange: true });
  check('an entry with only an unresolvable folder id keeps the world folder on replacement', rl.replaced.length === 1 && game.actors.get('S1aaaaaaaaaaaaaa').type === 'character' && game.actors.get('S1aaaaaaaaaaaaaa').folderId === playersFolder.id);
  game.actors.clear(); game.folders.clear();
}

// ------------------------------------------------- one click: Sync (v1.3)
// The GM pressed Mass import on data/sheets.json and got an uncaught
// promise; then wanted "a single click: find the file, import, folders,
// changes, summary". The packet is looked for in the Data folder (where the
// suite publishes it), then on the launcher, then on GitHub via the committed
// manifest + actor files.

// ------------------------------------------------------------------ 1.9.3
{
  const W = 'waluipedia-mass-import';
  check('1.9.3: worldNewer — the world stamp the sync itself wrote (writtenMs) is not "newer than the packet"; a change after it is; unknown everywhere → the packet applies',
    mod.worldNewer({ _stats: { modifiedTime: 5000 } }, { _stats: { modifiedTime: 1000 } }) === true
    && mod.worldNewer({ _stats: { modifiedTime: 5000 } }, { _stats: { modifiedTime: 1000 } }, null, 5000) === false
    && mod.worldNewer({ _stats: { modifiedTime: 7000 } }, { _stats: { modifiedTime: 1000 } }, null, 5000) === true
    && mod.worldNewer({ _stats: { modifiedTime: 7000 } }, {}, null, 5000) === true
    && mod.worldNewer({ _stats: { modifiedTime: 7000 } }, {}, null, null) === false
    && mod.worldNewer({ _stats: { modifiedTime: 7000 } }, {}, null, 'x') === false);
  settings.set(`${W}.syncWritten`, '{not json');
  check('1.9.3: readWritten survives a broken setting (an empty map), saveWritten keeps only actors still in the world', JSON.stringify(mod.readWritten()) === '{}' && JSON.stringify(await mod.saveWritten({ Zz9zzzzzzzzzzzzz: 5, Wa1aaaaaaaaaaaaa: 0 })) === '{}', settings.get(`${W}.syncWritten`));
  const existingObj = { flags: { 'waluipedia-sheets': { tags: ['pc'], folderPath: ['Players'] }, dnd5e: { x: 1 }, other: { keep: true } } };
  const incomingFlags = { 'waluipedia-sheets': { tags: ['pc', 'disaster-inc'], folderPath: ['Disaster Inc.'] }, dnd5e: { x: 2 }, [W]: { folderPath: ['Disaster Inc.'] } };
  const org = mod.organisationUpdate(existingObj, incomingFlags, 'F0lder0000000000');
  check('1.9.3: organisationUpdate is pure — the folder and the suite\'s own flags (tags, folderPath), never dnd5e\'s or anything on the sheet; null when the world agrees',
    org.folder === 'F0lder0000000000' && JSON.stringify(org.flags['waluipedia-sheets']) === JSON.stringify({ tags: ['pc', 'disaster-inc'], folderPath: ['Disaster Inc.'] }) && JSON.stringify(org.flags[W]) === JSON.stringify({ folderPath: ['Disaster Inc.'] }) && !('dnd5e' in org.flags) && !('other' in org.flags)
    && mod.organisationUpdate({ flags: { 'waluipedia-sheets': { tags: ['pc'] } } }, { 'waluipedia-sheets': { tags: ['pc'] }, dnd5e: { x: 9 } }) === null
    && JSON.stringify(mod.organisationUpdate({ flags: {} }, {}, 'F0lder0000000000')) === '{"folder":"F0lder0000000000"}', JSON.stringify(org));

  // the world after a session: Eager (Grung applied, the archive's broken Toad beside it) filed under Players, edited at the table AFTER the packet's copy
  game.actors.clear(); game.folders.clear(); refusedSingletons.length = 0;
  const playersF = await Folder.create({ name: 'Players', type: 'Actor', folder: null });
  const T_PACKET = Date.parse('2026-10-05T12:00:00Z'), T_SESSION = Date.parse('2026-10-05T20:00:00Z');
  const eagerWorld = {
    _id: 'Eg1aaaaaaaaaaaaa', name: 'Eager', type: 'character', folder: playersF.id, img: 'icons/svg/mystery-man.svg',
    system: { details: { race: 'Gr1aaaaaaaaaaaaa', background: 'Bg1aaaaaaaaaaaaa', xp: { value: 300 } }, attributes: { hp: { max: 24, value: 24 } } },
    flags: { 'waluipedia-sheets': { tags: ['pc'], folderPath: ['Players'] }, dnd5e: { sheet: 'x' } },
    items: [
      { _id: 'Gr1aaaaaaaaaaaaa', name: 'Grung', type: 'race', system: { identifier: 'grung', advancement: [{ type: 'Size' }] } },
      { _id: 'Td1aaaaaaaaaaaaa', name: 'Toad — Eager Variant', type: 'race', system: { identifier: 'toad-—-eager-variant' } },
      { _id: 'Bg1aaaaaaaaaaaaa', name: 'Slave', type: 'background', system: { identifier: 'slave' } },
      { _id: 'Bg2aaaaaaaaaaaaa', name: 'Disaster Inc. Catastrophe Scout', type: 'background', system: { identifier: 'disaster-inc.-catastrophe-scout' } },
    ],
  };
  const eager = await Actor.create(eagerWorld, { keepId: true, keepEmbeddedIds: true });
  eager._data._stats = { modifiedTime: T_SESSION };
  check('1.9.3: fixture — the world holds the Grung (applied) and two broken leftovers Foundry could not validate', eager.items.has('Gr1aaaaaaaaaaaaa') && eager.items.invalidDocumentIds.has('Td1aaaaaaaaaaaaa') && eager.items.invalidDocumentIds.has('Bg2aaaaaaaaaaaaa') && mod.appliedSingletonId(eager, 'race') === 'Gr1aaaaaaaaaaaaa' && mod.singletonLeftover(eager, eagerWorld.items[1])?.name === 'Grung' && mod.singletonLeftover(eager, eagerWorld.items[0]) === null && mod.singletonLeftover(eager, eagerWorld.items[3])?.name === 'Slave');
  // the packet: an OLDER copy (HP 20, exported at noon) that still carries the broken Toad, filed under Disaster Inc. with the website tags
  const packetEager = structuredClone(eagerWorld);
  delete packetEager.folder;
  packetEager.system.attributes.hp = { max: 20, value: 20 };
  packetEager.flags = { 'waluipedia-sheets': { tags: ['pc', 'disaster-inc'], folderPath: ['Disaster Inc.'] }, dnd5e: { sheet: 'x' }, [W]: { folderPath: ['Disaster Inc.'] } };
  packetEager.items = packetEager.items.filter((i) => i._id !== 'Bg2aaaaaaaaaaaaa');  // the healed mirror dropped the background; the Toad is still in this older copy
  packetEager._stats = { modifiedTime: T_PACKET };
  const payload193 = { format: 'waluipedia-actors/1', exportedAt: '2026-10-05T12:00:00Z', actors: [packetEager] };
  const pre = await mod.importPayload(structuredClone(payload193), { dryRun: true, checkImages: false });
  const preRow = pre.kept[0];
  check('1.9.3: preview — the world is newer (the session): KEPT, the HP roll-back shown, the refile (folder + tags) announced, both leftovers listed as going, no swap, nothing written',
    pre.kept.length === 1 && preRow.fields.join() === 'system.attributes.hp.max,system.attributes.hp.value' && preRow.refile?.folder === 'Disaster Inc.' && preRow.refile.fields.some((f) => f.startsWith('flags.waluipedia-sheets.tags')) && !preRow.refile.fields.includes('system.attributes.hp.max')
    && preRow.embedded.filter((c) => /broken leftover/.test(c)).length === 2 && pre.swaps.length === 0 && eager.updates === 0 && eager.items.invalidDocumentIds.size === 2 && game.folders.contents.every((f) => f.name !== 'Disaster Inc.'), JSON.stringify([pre.kept, pre.swaps, pre.notes]));
  check('1.9.4: syncPending counts the refile of a kept actor (it is a write) — the question is asked', mod.syncPending(pre).some((l) => /kept but refiled/.test(l)), JSON.stringify(mod.syncPending(pre)));
  const before193 = mod.snapshotWorld(game.actors.contents);
  const run = await mod.importPayload(structuredClone(payload193), { checkImages: false });
  const after193 = mod.snapshotWorld(game.actors.contents);
  const dinc = game.folders.contents.find((f) => f.name === 'Disaster Inc.');
  const eagerObj = eager.toObject();
  check('1.9.3: apply — the sheet is left alone (HP 24, world newer) but the actor is REFILED: Disaster Inc. folder, the website tags, the folder path; dnd5e\'s flags untouched',
    run.kept.length === 1 && eager.folderId === dinc?.id && eagerObj.system.attributes.hp.max === 24 && JSON.stringify(eagerObj.flags['waluipedia-sheets'].tags) === '["pc","disaster-inc"]' && eagerObj.flags['waluipedia-sheets'].folderPath.join() === 'Disaster Inc.' && eagerObj.flags[W].folderPath.join() === 'Disaster Inc.' && eagerObj.flags.dnd5e.sheet === 'x'
    && eager.updates === 1 && eager.lastUpdate.folder === dinc?.id && !('system' in eager.lastUpdate) && eager.lastUpdateOptions?.render === false, JSON.stringify([eager.lastUpdate, run.kept]));
  check('1.9.3: apply — both broken leftovers are DELETED from the kept actor (the Toad the old packet still carries, the background it no longer does), the Grung and Slave stay, no swap, two notes',
    eager.items.invalidDocumentIds.size === 0 && eager.items.has('Gr1aaaaaaaaaaaaa') && eager.items.has('Bg1aaaaaaaaaaaaa') && eager._source.items.length === 2 && run.swaps.length === 0 && run.notes.filter((n) => /removed — a broken copy the sheet never applied/.test(n.note)).length === 2 && run.notes.some((n) => /species is Grung/.test(n.note)) && run.notes.some((n) => /background is Slave/.test(n.note)) && refusedSingletons.length === 0, JSON.stringify([run.notes, eager.embeddedDeletes]));
  check('1.9.3: a kept actor is not stamped as "written by the sync" (its sheet was not written); the stamp map is empty', !(await mod.readWritten())['Eg1aaaaaaaaaaaaa'] && run.written.length === 0, JSON.stringify([mod.readWritten(), run.written]));
  const changes = mod.syncChanges([{ data: packetEager, folderPath: ['Disaster Inc.'] }], before193, after193, run);
  check('1.9.3: the summary row says kept AND refiled → Disaster Inc. (tags)', changes[0]?.status === 'kept' && changes[0].notes.some((n) => /refiled → Disaster Inc\. \(tags\)/.test(n)), JSON.stringify(changes));
  check('1.9.3: the kept section of the summary explains that only the organisation follows the packet', /Only the organisation follows the packet/.test(mod.syncSummaryHtml(run)));

  // the export loop ran: the packet carries the session's sheet (HP 24, stamp 20:00). Applies, and the sync remembers its own write stamp
  const packet2 = structuredClone(packetEager);
  packet2.system.attributes.hp = { max: 24, value: 24 };
  packet2.items = packet2.items.filter((i) => i._id !== 'Td1aaaaaaaaaaaaa');
  packet2.system.details.xp.value = 450;  // the ledger moved on
  packet2._stats = { modifiedTime: T_SESSION };
  const T_WRITE = T_SESSION + 3600000;
  const origUpdate = eager.update.bind(eager);
  eager.update = async (d, o) => { const r = await origUpdate(d, o); eager._data._stats = { modifiedTime: T_WRITE }; return r; };  // Foundry stamps every write
  const run2 = await mod.importPayload({ ...payload193, exportedAt: '2026-10-05T20:00:00Z', actors: [structuredClone(packet2)] }, { checkImages: false });
  check('1.9.3: once the packet carries the world\'s stamp the ledger applies (XP 450) — and the world stamp of that write is remembered under the actor id',
    run2.kept.length === 0 && run2.updated.length === 1 && eager.toObject().system.details.xp.value === 450 && mod.readWritten()['Eg1aaaaaaaaaaaaa'] === T_WRITE && run2.written.join() === 'Eg1aaaaaaaaaaaaa', JSON.stringify([run2.kept, run2.updated.map((u) => u.fields), mod.readWritten()]));
  // the next packet (XP 500, same world copy otherwise): the world stamp is the sync's own → NOT "newer than the packet" (1.9.2 kept it forever here)
  const packet3 = structuredClone(packet2); packet3.system.details.xp.value = 500;
  const run3 = await mod.importPayload({ ...payload193, exportedAt: '2026-10-05T20:00:00Z', actors: [structuredClone(packet3)] }, { checkImages: false });
  check('1.9.3: the next packet is not held back by the sync\'s own write stamp — XP 500 applies, nothing kept', run3.kept.length === 0 && eager.toObject().system.details.xp.value === 500 && mod.readWritten()['Eg1aaaaaaaaaaaaa'] === T_WRITE, JSON.stringify([run3.kept, mod.readWritten()]));
  // a real edit at the table after that write → kept again (the sheet), refiled only if the organisation moved
  await eager.update({ system: { attributes: { hp: { value: 11 } } } });
  eager._data._stats = { modifiedTime: T_WRITE + 7200000 };
  const packet4 = structuredClone(packet3); packet4.system.details.xp.value = 550;
  const run4 = await mod.importPayload({ ...payload193, exportedAt: '2026-10-05T20:00:00Z', actors: [structuredClone(packet4)] }, { checkImages: false });
  check('1.9.3: an edit at the table after the sync\'s write is kept again (XP stays 500, HP 11 untouched), no refile because the organisation agrees', run4.kept.length === 1 && run4.kept[0].refile === null && eager.toObject().system.details.xp.value === 500 && eager.toObject().system.attributes.hp.value === 11, JSON.stringify(run4.kept));
  // an actor the world dropped: its stamp is pruned on the next save
  const stale = mod.readWritten(); stale.Gone000000000000 = 123;
  check('1.9.3: saveWritten prunes actors no longer in the world', !('Gone000000000000' in (await mod.saveWritten(stale))) && (await mod.saveWritten(stale)).Eg1aaaaaaaaaaaaa === T_WRITE);
  // stampWritten after the folder tidy: a merged folder moved the actor → the new stamp is the sync's too
  eager._data._stats = { modifiedTime: T_WRITE + 9000000 };
  await mod.stampWritten(['Eg1aaaaaaaaaaaaa', 'Nope000000000000']);
  check('1.9.3: stampWritten re-reads the world stamps of the ids it is given (after the folder tidy moved actors), unknown ids ignored', mod.readWritten().Eg1aaaaaaaaaaaaa === T_WRITE + 9000000 && !('Nope000000000000' in mod.readWritten()));

  // a packet copy of a leftover with NO advancements beside the applied one: left out, no swap; a real alternative WITH advancements still gets the swap
  const fresh = await Actor.create({ _id: 'Eg2aaaaaaaaaaaaa', name: 'Feyward Dan', type: 'character', system: { details: { race: 'Gr2aaaaaaaaaaaaa' } }, items: [{ _id: 'Gr2aaaaaaaaaaaaa', name: 'Grung', type: 'race', system: { identifier: 'grung' } }] }, { keepId: true, keepEmbeddedIds: true });
  const danPacket = { _id: 'Eg2aaaaaaaaaaaaa', name: 'Feyward Dan', type: 'character', system: { details: { race: 'Gr2aaaaaaaaaaaaa' } }, items: [
    { _id: 'Gr2aaaaaaaaaaaaa', name: 'Grung', type: 'race', system: { identifier: 'grung' } },
    { _id: 'Td2aaaaaaaaaaaaa', name: 'Toad — Feyward Variant', type: 'race', system: { identifier: 'toad-feyward-variant', advancement: [] } },
  ] };
  const runDan = await mod.importPayload({ format: 'waluipedia-actors/1', actors: [danPacket] }, { checkImages: false });
  check('1.9.3: a packet species without advancements beside the one the sheet applies is left out — no refusal, no swap, a note', runDan.swaps.length === 0 && runDan.notes.some((n) => /left out — the packet's copy carries no advancements and the sheet applies Grung/.test(n.note)) && !fresh.items.has('Td2aaaaaaaaaaaaa') && refusedSingletons.length === 0 && !runDan.updated[0].items.changes.some((c) => c.startsWith('+ Toad')), JSON.stringify([runDan.notes, runDan.swaps, runDan.updated[0]?.items.changes]));
  danPacket.items[1].system.advancement = [{ type: 'Size' }];
  const runDan2 = await mod.importPayload({ format: 'waluipedia-actors/1', actors: [danPacket] }, { checkImages: false });
  check('1.9.3: a packet species WITH advancements beside the applied one is still the 1.9.2 swap (the GM decides)', runDan2.swaps.length === 1 && runDan2.swaps[0].label === 'Toad — Feyward Variant [race]' && refusedSingletons.length === 0, JSON.stringify(runDan2.swaps));

  // the sync on load: off by default, a world that had it on is switched off once, on again by hand stays
  settings.set(`${W}.syncAutoRetired`, false); settings.set(`${W}.syncAuto`, true);
  const infos193 = []; const prevInfo = ui.notifications.info; ui.notifications.info = (m) => infos193.push(m);
  try {
    const first = await mod.retireAutoSync();
    const offAfterFirst = settings.get(`${W}.syncAuto`) === false && settings.get(`${W}.syncAutoRetired`) === true;
    const second = await mod.retireAutoSync();
    settings.set(`${W}.syncAuto`, true);
    const third = await mod.retireAutoSync();
    check('1.9.3: retireAutoSync switches a world\'s automatic sync off ONCE (a toast says why), never again — turned on by hand it stays on', first === true && offAfterFirst && second === false && third === false && settings.get(`${W}.syncAuto`) === true && infos193.length === 1 && /no longer runs by itself/.test(infos193[0]), JSON.stringify([first, offAfterFirst, second, third, infos193]));
    settings.set(`${W}.syncAuto`, false);
    check('1.9.3: SYNC_DEFAULTS.auto is false and the Sync button no longer promises a sync on load', mod.SYNC_DEFAULTS.auto === false && !/Runs by itself when the world loads/.test(fs.readFileSync(path.join(MOD_DIR, 'scripts/mass-import-core.js'), 'utf8').split('injectButtons')[1] ?? ''));
    check('1.9.3: autoSync with the setting off does nothing', (await mod.autoSync({ delay: 0 })) === null);
  } finally { ui.notifications.info = prevInfo; }
}

// ------------------------------------------------- 1.9.4: who may open which sheet
{
  const W = 'waluipedia-mass-import';
  const GM = 'GM00000000000000', HJ = 'Hj00000000000000', KE = 'Ke00000000000000', MA = 'Ma00000000000000', OS = 'Os00000000000000', OLD = 'Old0000000000000';
  const users = [{ id: GM, name: 'Mike', role: 4, isGM: true }, { id: HJ, name: 'Hjumpik', role: 1 }, { id: KE, name: 'keaneu', role: 1 }, { id: MA, name: 'Martir', role: 1 }, { id: OLD, name: 'Oldplayer', role: 1 }];
  const r1 = mod.resolveUsers(['Hjumpik', 'KEANEU ', 'Oscar'], users);
  check('1.9.4: resolveUsers matches Foundry user names case-insensitively and trimmed, lists the rest', r1.matched.get('hjumpik')?.id === HJ && r1.matched.get('keaneu')?.id === KE && r1.unmatched.join() === 'Oscar');
  const gm = new Set([GM]);
  check('1.9.4: ownershipUpdate is pure — sets the wanted grants, removes a stale player grant with -=id, puts default at 0, never touches a GM, writes nothing when the world agrees',
    JSON.stringify(mod.ownershipUpdate({ default: 1, [GM]: 3, [OLD]: 3, [HJ]: 2 }, { [HJ]: 3 }, { gmIds: gm })) === JSON.stringify({ default: 0, [`-=${OLD}`]: null, [HJ]: 3 })
    && mod.ownershipUpdate({ default: 0, [GM]: 3, [HJ]: 3 }, { [HJ]: 3 }, { gmIds: gm }) === null
    && JSON.stringify(mod.ownershipUpdate({ default: 0 }, { [KE]: 3, [MA]: 2 }, { gmIds: gm })) === JSON.stringify({ [KE]: 3, [MA]: 2 })
    && mod.ownershipUpdate({ default: 0, 'not-an-id': 3, [OLD]: 0 }, {}, { gmIds: gm }) === null
    && JSON.stringify(mod.ownershipUpdate({}, { [GM]: 3 }, { gmIds: gm })) === 'null', JSON.stringify(mod.ownershipUpdate({ default: 1, [GM]: 3, [OLD]: 3, [HJ]: 2 }, { [HJ]: 3 }, { gmIds: gm })));

  // the world: Bowser (owned by Hjumpik already, plus an old player), Eager (nobody), the Steel Defender, and an NPC with a player grant
  game.actors.clear(); game.folders.clear();
  game.users = new Coll(users.map((u) => [u.id, u]));
  const mk = (id, name, type, ownership) => Actor.create({ _id: id, name, type, img: 'icons/svg/mystery-man.svg', ownership, system: {}, items: [] }, { keepId: true });
  const bowser = await mk('9u5pnP0zaqw8AQQv', 'Bowser', 'character', { default: 0, [GM]: 3, [HJ]: 3, [OLD]: 3 });
  const eagerP = await mk('VudZ3W313Y4FILs0', 'Eager', 'character', { default: 0, [GM]: 3 });
  const defender = await mk('Q8InPZPmhqhpOY7g', 'Steel Defender', 'npc', { default: 0 });
  const goomba = await mk('Go00000000000000', 'Goomba', 'npc', { default: 0, [OLD]: 2 });
  const players = { folder: 'Players', default: 0, users: ['Hjumpik', 'Keaneu', 'Martir', 'Oscar'],
    roster: [{ actor: '9u5pnP0zaqw8AQQv', name: 'Bowser' }, { actor: 'VudZ3W313Y4FILs0', name: 'Eager' }, { actor: 'wBy4aV2AGHNqT4l1', name: 'Remi' }],
    companions: [{ actor: 'Q8InPZPmhqhpOY7g', name: 'Steel Defender' }],
    permissions: { '9u5pnP0zaqw8AQQv': { Hjumpik: 3 }, VudZ3W313Y4FILs0: { Keaneu: 3, Martir: 2 }, wBy4aV2AGHNqT4l1: { Oscar: 3 }, Q8InPZPmhqhpOY7g: { Oscar: 3 } } };
  const dry = await mod.applyPermissions(players, { dryRun: true });
  check('1.9.4: applyPermissions (dry run) — Bowser loses the old player\'s grant, Eager gets Keaneu owner + Martir observer, the Steel Defender nothing (Oscar is not in this world → reported, with the names the world has), Remi is not in the world yet, the Goomba\'s player grant is listed, nothing written',
    dry.changed.map((c) => c.actor).join() === 'Bowser,Eager' && JSON.stringify(dry.changed[0].update) === JSON.stringify({ [`-=${OLD}`]: null }) && dry.changed[0].labels.join() === 'Oldplayer → none'
    && JSON.stringify(dry.changed[1].update) === JSON.stringify({ [KE]: 3, [MA]: 2 }) && dry.changed[1].labels.join(', ') === 'keaneu → owner, Martir → observer'
    && dry.unmatched.join() === 'Oscar' && dry.worldUsers.includes('Mike') && dry.missing.map((m) => m.name).join() === 'Remi' && dry.stray.length === 1 && dry.stray[0].actor === 'Goomba' && /Oldplayer \(observer\)/.test(dry.stray[0].users[0])
    && bowser.updates === 0 && eagerP.updates === 0 && dry.written.length === 0 && dry.dryRun === true, JSON.stringify(dry));
  const applied = await mod.applyPermissions(players);
  check('1.9.4: applyPermissions writes exactly that (ownership diffs, render:false), the GM\'s own grant and the Goomba untouched, and a second pass finds nothing to do',
    applied.written.join() === '9u5pnP0zaqw8AQQv,VudZ3W313Y4FILs0' && bowser.updates === 1 && JSON.stringify(bowser.lastUpdate) === JSON.stringify({ ownership: { [`-=${OLD}`]: null } }) && bowser.lastUpdateOptions?.render === false
    && eagerP.toObject().ownership[KE] === 3 && eagerP.toObject().ownership[MA] === 2 && eagerP.toObject().ownership[GM] === 3 && goomba.updates === 0
    && (await mod.applyPermissions(players)).changed.length === 0, JSON.stringify([applied, bowser.toObject().ownership, eagerP.toObject().ownership]));
  check('1.9.4: applyPermissions without a players block (an old packet, a plain import) is skipped', (await mod.applyPermissions(null)).skipped === true && (await mod.applyPermissions({ roster: [] })).skipped === true);
  const html = mod.permissionsHtml(dry);
  check('1.9.4: the summary section lists the changes, the user the world lacks (with the names it has) and the stray grants', /Who may open which sheet \(2 to set\)/.test(html) && /No user named <b>Oscar<\/b>/.test(html) && /Mike, Hjumpik, keaneu, Martir, Oldplayer/.test(html) && /Goomba — Oldplayer \(observer\)/.test(html) && mod.permissionsHtml(null) === '' && mod.permissionsHtml({ skipped: true }) === '');
  check('1.9.4: syncPending counts the permissions as a pending write', mod.syncPending({ permissions: dry }).join() === '2 sheet permission(s) to set' && mod.syncPending({ permissions: { changed: [] } }).length === 0 && mod.syncPending({}).length === 0);
  // the packet carries the block: normalizeImport / mergePackets pass it through; the GitHub manifest route too
  const withPlayers = { format: 'waluipedia-actors/1', actors: [], players };
  check('1.9.4: normalizeImport keeps the packet\'s players block (and ignores a malformed one); mergePackets takes the first packet that has one', mod.normalizeImport(withPlayers).players === players && mod.normalizeImport({ format: 'waluipedia-actors/1', actors: [], players: { nope: 1 } }).players === null
    && mod.mergePackets([{ label: 'cast', raw: { format: 'waluipedia-actors/1', actors: [] } }, { label: 'world', raw: withPlayers }]).players === players);
  // the whole sync: a Data packet with the block → the question counts the permissions, Apply sets them, a kept actor gets them too
  game.actors.clear(); game.folders.clear();
  const bowser2 = await mk('9u5pnP0zaqw8AQQv', 'Bowser', 'character', { default: 0, [GM]: 3 });
  bowser2._data._stats = { modifiedTime: Date.parse('2026-10-06T20:00:00Z') };  // edited at the table after the packet: kept
  const syncPacket = { format: 'waluipedia-actors/1', exportedFrom: 'midlands', exportedAt: '2026-10-06T12:00:00Z', players,
    folders: [{ _id: 'Fp1aaaaaaaaaaaaa', name: 'Players', type: 'Actor', folder: null, path: ['Players'] }],
    actors: [{ _id: '9u5pnP0zaqw8AQQv', name: 'Bowser', type: 'character', img: 'icons/svg/mystery-man.svg', ownership: { default: 0 }, folder: 'Fp1aaaaaaaaaaaaa', _stats: { modifiedTime: Date.parse('2026-10-06T12:00:00Z') },
      flags: { [W]: { folderPath: ['Players'] } }, system: { attributes: { hp: { max: 99 } } }, items: [] }] };
  const syncPackets = { format: 'waluipedia-packets/2', world: 'midlands', exportedAt: '2026-10-06T12:00:00Z', publishedAt: '2026-10-06T12:30:00+0000', digest: 'd1gestperms0000000000000000000000000001', packets: { everything: 'import.json', players: 'players-import.json', manifest: 'manifest.json' } };
  const prevFetchP = globalThis.fetch;
  globalThis.fetch = async (url, init = {}) => {
    const key = decodeURI(String(url)).split('?')[0];
    if ((init.method ?? 'GET') === 'HEAD') return prevFetchP(url, init);
    if (key === 'npc/waluipedia/midlands/import.json') return { ok: true, status: 200, json: async () => structuredClone(syncPacket) };
    if (key === 'npc/waluipedia/midlands/packets.json') return { ok: true, status: 200, json: async () => structuredClone(syncPackets) };
    if (key.startsWith('modules/waluipedia-mass-import/module.json')) return { ok: true, status: 200, json: async () => ({ version: mod.MODULE_VERSION }) };
    return { ok: false, status: 404 };
  };
  const askedP = [];
  const prevDialog = globalThis.foundry.applications.api;
  globalThis.foundry.applications.api = { DialogV2: { wait: async (cfg) => {
    const entry = { title: cfg.window?.title ?? '', content: cfg.content ?? '', actions: (cfg.buttons ?? []).map((b) => b.action) };
    if (entry.actions.includes('apply')) askedP.push(entry);
    const b = (cfg.buttons ?? []).find((x) => x.action === 'apply') ?? (cfg.buttons ?? [])[0];
    return b?.callback ? b.callback({}, { form: null }) : (b?.action ?? null);
  } } };
  globalThis.ChatMessage = { create: async (d) => d, getWhisperRecipients: () => [{ id: GM }] };
  settings.set(`${W}.syncConfirm`, true);
  try {
    const rs = await mod.syncFromWaluipedia({ options: { checkImages: false } });
    check('1.9.4: the sync asks about the permissions alone (Bowser is kept — the world is newer) and Apply sets Hjumpik owner on the kept actor; the permissions are in the report and the summary',
      askedP.length === 1 && /1 sheet permission\(s\) to set/.test(askedP[0].title) && /Who may open which sheet/.test(askedP[0].content)
      && rs?.permissions?.written?.join() === '9u5pnP0zaqw8AQQv' && bowser2.toObject().ownership[HJ] === 3 && bowser2.toObject().system.attributes?.hp?.max === undefined
      && rs.kept.length === 1 && /Who may open which sheet \(1 set\)/.test(mod.syncSummaryHtml(rs)), JSON.stringify([askedP.map((a) => a.title), rs?.permissions, rs?.kept?.length, bowser2.toObject().ownership]));
    check('1.9.3: a kept actor\'s permission write is not stamped as the sync\'s (its sheet stays the table\'s)', !(mod.readWritten()['9u5pnP0zaqw8AQQv']));
    const rs2 = await mod.syncFromWaluipedia({ options: { checkImages: false } });
    check('1.9.4: the next sync finds the permissions in place — identical, no question', rs2?.identical === true && askedP.length === 1, JSON.stringify([rs2?.identical, askedP.length]));
  } finally {
    globalThis.fetch = prevFetchP;
    globalThis.foundry.applications.api = prevDialog;
    delete game.users;
  }
}
{
  const sheetIndex = JSON.parse(fs.readFileSync(path.resolve('Reputation-Matrix2/data/sheets.json'), 'utf8'));
  let msg = ''; try { mod.normalizeImport(sheetIndex); } catch (e) { msg = e.message; }
  check('the site\'s sheets.json is refused with a message that names Sync and the right file', /sheet index/.test(msg) && /Sync/.test(msg) && /<world>\/import\.json/.test(msg), msg);
  check('isSheetIndex / isManifest tell the two apart from packets', mod.isSheetIndex(sheetIndex) && !mod.isManifest(sheetIndex) && mod.isManifest({ actors: [{ name: 'X', type: 'npc', _id: 'A', file: 'Players/x.json' }] }) && !mod.isManifest({ actors: [{ name: 'X', type: 'npc', _id: 'A', system: {} }] }));
  let mmsg = ''; try { mod.normalizeImport({ format: 'waluipedia-actors/1', actors: [{ name: 'X', type: 'npc', _id: 'A', file: 'Players/x.json' }] }); } catch (e) { mmsg = e.message; }
  check('a manifest uploaded as a file explains itself instead of importing empty actors', /manifest/.test(mmsg) && /next to it/.test(mmsg), mmsg);

  const cands = mod.syncCandidates({ world: 'midlands', packetDir: 'npc/waluipedia', launcher: 'http://127.0.0.1:8765', branch: 'gh-pages' });
  check('sync looks in Data, then the launcher, then GitHub — in that order, always for everything (the one import.json; on GitHub the manifest + cast + era packets)', cands.map((c) => c.source).join() === 'data,launcher,github'
    && cands[0].url === 'npc/waluipedia/midlands/import.json' && cands[0].info === 'npc/waluipedia/midlands/packets.json'
    && cands[1].url === 'http://127.0.0.1:8765/Reputation-Matrix2/actors/worlds/midlands/import.json'
    && cands[2].url === 'https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/worlds/midlands/manifest.json' && cands[2].manifest === true
    && cands[2].extras.map((x) => x.label).join() === 'cast,era,era,packet,packet' && cands[2].extras[1].url.endsWith('/peachs-castle-955/import.json') && cands[2].extras[2].url.endsWith('/bowsers-castle-1035/import.json') && cands[2].extras[3].url.endsWith('/liberated-toads/import.json') && cands[2].extras[4].url.endsWith('/fawfuls-forces/import.json') && !('scope' in mod.SYNC_DEFAULTS), JSON.stringify(cands));
  const cc = mod.syncCandidates({ branch: 'main' });
  check('the branch is honoured on every GitHub URL', cc[2].url.includes('/bik/main/') && cc[2].extras.every((x) => x.url.includes('/bik/main/')));

  // a fake world: Bowser as the GM's NPC statblock in Players/, Eager already a character, Waluigi untouched
  game.actors.clear(); game.folders.clear();
  const players = await Folder.create({ name: 'Players', type: 'Actor', folder: null });
  await Actor.create({ _id: 'Bo1aaaaaaaaaaaaa', name: 'Bowser', type: 'npc', folder: players.id, img: 'icons/svg/mystery-man.svg', ownership: { default: 0, P1aaaaaaaaaaaaaa: 3 },
    system: { details: { cr: 9 }, attributes: { hp: { max: 150 } } }, items: [{ _id: 'Ib1aaaaaaaaaaaaa', name: 'Claws', type: 'weapon' }] }, { keepId: true });
  await Actor.create({ _id: 'Ea1aaaaaaaaaaaaa', name: 'Eager', type: 'character', folder: null, img: 'icons/svg/mystery-man.svg',
    system: { details: { xp: { value: 4860 } }, attributes: { hp: { max: 25 } } }, items: [{ _id: 'Ie1aaaaaaaaaaaaa', name: 'Rogue', type: 'class', system: { levels: 4 } }] }, { keepId: true });
  await Actor.create({ _id: 'Wa1aaaaaaaaaaaaa', name: 'Waluigi', type: 'character', folder: players.id, img: 'icons/svg/mystery-man.svg',
    system: { details: { xp: { value: 11911 } }, attributes: { hp: { max: 30 } } }, items: [{ _id: 'Iw1aaaaaaaaaaaaa', name: 'Wizard', type: 'class', system: { levels: 5 } }] }, { keepId: true });
  const pf = { 'waluipedia-mass-import': { folderPath: ['Players'] } };
  const packet = { format: 'waluipedia-actors/1', exportedFrom: 'midlands', actors: [
    { _id: 'Bo1aaaaaaaaaaaaa', name: 'Bowser', type: 'character', img: 'icons/svg/mystery-man.svg', ownership: { default: 0 },
      flags: { ...pf, 'waluipedia-sheets': { promoted: { mode: 'replace' }, ledger: { xpKey: 'bowser', xp: 35292, level: 8 } } },
      system: { details: { xp: { value: 35292 } }, attributes: { hp: { max: 92 } } },
      items: [{ _id: 'Ib1aaaaaaaaaaaaa', name: 'Claws', type: 'weapon' }, { _id: 'Ib2aaaaaaaaaaaaa', name: 'Fighter', type: 'class', system: { levels: 8 } }] },
    { _id: 'Ea1aaaaaaaaaaaaa', name: 'Eager', type: 'character', img: 'icons/svg/mystery-man.svg', flags: { ...pf, 'waluipedia-sheets': { ledger: { xpKey: 'eager', xp: 4860, level: 4 } } },
      system: { details: { xp: { value: 4860 } }, attributes: { hp: { max: 25 } } },
      items: [{ _id: 'Ie1aaaaaaaaaaaaa', name: 'Rogue', type: 'class', system: { levels: 4 } }, { _id: 'Ie2aaaaaaaaaaaaa', name: 'The Electric Sphere', type: 'loot', img: 'icons/svg/item-bag.svg' }] },
    { _id: 'Wa1aaaaaaaaaaaaa', name: 'Waluigi', type: 'character', img: 'icons/svg/mystery-man.svg', flags: { ...pf, 'waluipedia-sheets': { ledger: { xpKey: 'waluigi', xp: 11911, level: 5 } } },
      system: { details: { xp: { value: 11911 } }, attributes: { hp: { max: 30 } } },
      items: [{ _id: 'Iw1aaaaaaaaaaaaa', name: 'Wizard', type: 'class', system: { levels: 5 } }] },
    { _id: 'Hj1aaaaaaaaaaaaa', name: 'Hjumpik Deldkur', type: 'character', img: 'icons/svg/mystery-man.svg', flags: { ...pf, 'waluipedia-sheets': { ledger: { xpKey: 'hjumpik', xp: 25342, level: 7 } } },
      system: { details: { xp: { value: 25342 } }, attributes: { hp: { max: 60 } } },
      items: [{ _id: 'Ih1aaaaaaaaaaaaa', name: 'Fighter', type: 'class', system: { levels: 6 } }] },
  ] };
  const packetsJson = { format: 'waluipedia-packets/2', world: 'midlands', exportedAt: '2026-10-04T17:21:43.770Z', publishedAt: '2026-10-04T18:00:00+0000', digest: 'd1gest000000000000000000000000000000001', packets: { everything: 'import.json', players: 'players-import.json', manifest: 'manifest.json' } };

  // Data has nothing, the launcher is down, GitHub has the manifest + files
  const ghBase = 'https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/worlds/midlands/';
  const ghFiles = new Map([[`${ghBase}manifest.json`, { format: 'waluipedia-actors/1', exportedFrom: 'midlands', exportedAt: '2026-10-04T17:21:43.770Z',
    actors: [...packet.actors.map((a) => ({ name: a.name, type: a.type, _id: a._id, file: `Players/fvtt-Actor-${a.name.toLowerCase().replace(/[^a-z]+/g, '-')}-${a._id}.json` })),
      { name: 'Aemenor Evenflight', type: 'npc', _id: 'Ae1aaaaaaaaaaaaa', file: 'A House Divided/Characters of the Ruined Manor/fvtt-Actor-aemenor.json' }] }]]);
  for (const a of packet.actors) ghFiles.set(`${ghBase}Players/fvtt-Actor-${a.name.toLowerCase().replace(/[^a-z]+/g, '-')}-${a._id}.json`, { ...a, flags: { 'waluipedia-sheets': a.flags['waluipedia-sheets'] } });
  ghFiles.set(`${ghBase}A House Divided/Characters of the Ruined Manor/fvtt-Actor-aemenor.json`, { _id: 'Ae1aaaaaaaaaaaaa', name: 'Aemenor Evenflight', type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [] });
  // the committed cast packet: a generated Koopa and a generated Bowser the world already has by name + type (left out)
  ghFiles.set('https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/cast/import.json', { format: 'waluipedia-actors/1', exportedFrom: 'waluipedia-cast', folderStyles: { 'Koopa Troop': { color: '#006400' } }, actors: [
    { _id: 'Ca1aaaaaaaaaaaaa', name: 'Koopa Commander', type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: { 'waluipedia-mass-import': { folderPath: ['Koopa Troop'] }, 'waluipedia-sheets': { tags: ['Koopa Troop', 'npc', 'generated'] } }, items: [] },
    { _id: 'Cb1aaaaaaaaaaaaa', name: 'Bowser', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: { 'waluipedia-mass-import': { folderPath: ['Koopa Troop'] } }, items: [] },
  ] });
  const prevFetch = globalThis.fetch;
  const log = [];
  let dataHas = false;
  let onDiskVersion = mod.MODULE_VERSION;
  globalThis.fetch = async (url, init = {}) => {
    const key = decodeURI(url);
    log.push(key);
    if ((init.method ?? 'GET') === 'HEAD') return prevFetch(url, init);
    if (key === 'npc/waluipedia/midlands/import.json' && dataHas) return { ok: true, status: 200, json: async () => structuredClone(packet) };
    if (key === 'npc/waluipedia/midlands/packets.json' && dataHas) return { ok: true, status: 200, json: async () => structuredClone(packetsJson) };
    if (key.startsWith('modules/waluipedia-mass-import/module.json')) return { ok: true, status: 200, json: async () => ({ version: onDiskVersion }) };
    if (key.startsWith('http://127.0.0.1:8765/')) throw new TypeError('Failed to fetch');
    const bare = key.split('?')[0];
    if (ghFiles.has(bare)) return { ok: true, status: 200, json: async () => structuredClone(ghFiles.get(bare)) };
    return { ok: false, status: 404 };
  };
  const chats = [];
  globalThis.ChatMessage = { create: async (d) => { chats.push(d); return d; }, getWhisperRecipients: () => [{ id: 'GMaaaaaaaaaaaaaa' }] };
  // v1.7: every sync is checked first and asks before applying — a DialogV2 stand-in answers
  const asked = [];
  let answer = 'apply';
  const shown = [];
  globalThis.foundry.applications.api = { DialogV2: { wait: async (cfg) => {
    const entry = { title: cfg.window?.title ?? '', content: cfg.content ?? '', actions: (cfg.buttons ?? []).map((b) => b.action) };
    (entry.actions.includes('apply') ? asked : shown).push(entry);
    const b = (cfg.buttons ?? []).find((x) => x.action === answer) ?? (cfg.buttons ?? []).find((x) => x.default) ?? (cfg.buttons ?? [])[0];
    return b?.callback ? b.callback({}, { form: null }) : (b?.action ?? null);
  } } };

  const r = await mod.syncFromWaluipedia({ options: { checkImages: false, replaceOnTypeChange: true } });
  check('v1.7: the button sync checked first and asked — the question names what waits, the preview is the summary, three answers', asked.length >= 1 && /^Sync — .*apply\?$/.test(asked[0].title) && /3 new/.test(asked[0].title) && /1 replaced/.test(asked[0].title) && /2 changed/.test(asked[0].title) && asked[0].actions.join() === 'apply,later,skip' && asked[0].content.includes('WAITING FOR YOUR OK') && asked[0].content.includes('Nothing has been written yet'), JSON.stringify(asked.map((a) => [a.title, a.actions])));
  check('sync falls through Data and the launcher to GitHub', r && r.sync.used.source === 'github' && r.sync.attempts.map((a) => `${a.source}:${a.ok}`).join() === 'data:false,launcher:false,github:true', JSON.stringify(r?.sync?.attempts));
  check('the GitHub route fetches every file the manifest lists, then the cast and era packets, and merges them (the era packet 404s → ignored, not fatal)', r.files.length === 5 && log.some((u) => u.includes('aemenor')) && r.sync.merged?.map((m) => `${m.label}:${m.actors}/${m.omitted}`).join() === 'world:5/0,cast:1/1' && r.ignored.some((i) => i.path.endsWith('peachs-castle-955/import.json')), JSON.stringify([r.files, r.sync.merged, r.ignored]));
  check('…and imports them into their folders (players in Players, the manor NPC in its directory, the generated Koopa in a coloured Koopa Troop; the cast\'s Bowser left out for the world\'s)', ['Bowser', 'Eager', 'Waluigi', 'Hjumpik Deldkur'].every((n) => game.actors.contents.find((a) => a.name === n)?.folder?.name === 'Players')
    && game.actors.contents.find((a) => a.name === 'Aemenor Evenflight')?.folder?.name === 'Characters of the Ruined Manor' && game.actors.contents.find((a) => a.name === 'Koopa Commander')?.folder?.color === '#006400'
    && game.actors.contents.filter((a) => a.name === 'Bowser').length === 1 && game.actors.get('Bo1aaaaaaaaaaaaa'), game.actors.contents.map((a) => `${a.name}:${a.folder?.name}`).join());
  check('Bowser: NPC statblock replaced by the character sheet under the same id, ownership kept', r.replaced.length === 1 && game.actors.get('Bo1aaaaaaaaaaaaa').type === 'character' && game.actors.get('Bo1aaaaaaaaaaaaa').ownership.P1aaaaaaaaaaaaaa === 3);
  const rows = Object.fromEntries(r.changes.map((c) => [c.name, c]));
  check('summary row: Bowser replaced — type, XP, class line', rows.Bowser.status === 'replaced' && rows.Bowser.notes.includes('npc → character') && rows.Bowser.notes.includes('XP — → 35,292') && rows.Bowser.notes.includes('Fighter 8'), JSON.stringify(rows.Bowser));
  check('summary row: Eager — the spoil arrived (the plan\'s words) and she moved into Players; the flags she gains are named', rows.Eager.status === 'updated' && rows.Eager.notes.includes('+ The Electric Sphere [loot]') && rows.Eager.notes.includes('moved to Players') && rows.Eager.notes.some((n) => /^fields: flags\./.test(n) && !/, folder$/.test(n)), JSON.stringify(rows.Eager));
  check('summary row: Waluigi — nothing visible moved, but the packet brings flags the sheet lacks (the ledger key, the folder path): a real write, named', rows.Waluigi.status === 'updated' && rows.Waluigi.notes.length === 1 && /^fields: flags\.waluipedia-sheets\.ledger\.xpKey/.test(rows.Waluigi.notes[0]) && rows.Waluigi.fields.includes('flags.waluipedia-mass-import.folderPath'), JSON.stringify(rows.Waluigi));
  check('summary row: Hjumpik new, with the level-up the ledger allows (a hint, not a change)', rows['Hjumpik Deldkur'].status === 'new' && rows['Hjumpik Deldkur'].levelUp === 'ledger level 7 — level up (sheet is level 6)' && !rows['Hjumpik Deldkur'].notes.some((n) => n.startsWith('ledger')), JSON.stringify(rows['Hjumpik Deldkur']));
  const sh = mod.syncSummaryHtml(r);
  check('summary HTML: counts (only real changes count), the level-up demoted to "pending at the table", the source, what each packet contributed, the module version, where it looked', sh.includes('3 created, 2 changed, 1 replaced') && !sh.includes('unchanged)') && !sh.includes('Level up at the table') && sh.includes('Pending at the table — level-ups the ledger allows (1)') && sh.includes('never applied by the sync') && sh.includes('Hjumpik Deldkur') && sh.includes('GitHub (gh-pages)') && sh.includes('export 2026-10-04T17:21:43.770Z') && sh.includes('✘ Foundry Data folder') && sh.includes('✔ GitHub') && sh.includes('cast 1 (1 already in an earlier part)') && sh.includes(`module ${mod.MODULE_VERSION}`) && !sh.includes('wmi-stale'), sh.slice(0, 400));
  check('the sync remembers the packet it synced (world setting)', settings.get('waluipedia-mass-import.syncLastStamp') === r.sync.stamp && r.sync.stamp.startsWith('github:'));
  check('the summary is whispered to the GMs as a chat message', chats.length === 1 && chats[0].whisper.join() === 'GMaaaaaaaaaaaaaa' && chats[0].content.includes('Replaced'));

  // second click: Data now has the packet (the suite ran) — nothing changes, Data wins, the stamps show
  dataHas = true; log.length = 0;
  asked.length = 0;
  const infos = [];
  const prevInfo = ui.notifications.info;
  ui.notifications.info = (m) => infos.push(m);
  const r2 = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  ui.notifications.info = prevInfo;
  check('with the packet published, Sync reads the Data folder first and never touches the network (the module.json version check is same-origin)', r2.report.sync.used.source === 'data' && !log.some((u) => u.startsWith('http')) && r2.report.sync.info?.publishedAt === '2026-10-04T18:00:00+0000' && r2.stamp === `data:${packetsJson.digest}`, JSON.stringify(log.filter((u) => u.startsWith('http'))));
  check('v1.7: a second sync of the same actors is IDENTICAL — nothing written, no question, no chat, one toast, the stamp remembered (the ledger hint stays)', r2.identical === true && r2.skipped === true && asked.length === 0 && r2.report.changes.every((c) => c.status === 'unchanged') && r2.report.replaced.length === 0 && r2.report.created.length === 0 && game.actors.size === 6 && r2.report.changes.find((c) => c.name === 'Hjumpik Deldkur').levelUp !== null && chats.length === 1 && infos.some((m) => /already matches/.test(m)) && settings.get('waluipedia-mass-import.syncLastStamp') === r2.stamp, JSON.stringify([r2.identical, asked.length, infos, r2.report.changes.map((c) => [c.name, c.status, c.notes])]));
  check('dry run syncs report without writing or chatting (and without the question)', (await mod.syncFromWaluipedia({ options: { checkImages: false, dryRun: true } })).dryRun === true && chats.length === 1 && asked.length === 0);

  // the automatic sync (world load): once per published packet
  settings.set('waluipedia-mass-import.syncAuto', true);
  const dialogs = [];
  const prevDialog = globalThis.Dialog;
  const auto1 = await mod.autoSync({ delay: 0 });
  check('automatic sync of a packet already synced does nothing (same digest) and opens nothing', auto1?.skipped === true && auto1.stamp === `data:${packetsJson.digest}`, JSON.stringify(auto1));
  packetsJson.digest = 'd1gest000000000000000000000000000000002';
  const auto2 = await mod.autoSync({ delay: 0 });
  check('v1.7: a newly published packet (new digest) is CHECKED on load — identical world → nothing written, no dialog, the stamp remembered', auto2?.identical === true && auto2.stamp.endsWith('0002') && asked.length === 0 && settings.get('waluipedia-mass-import.syncLastStamp') === auto2.stamp, JSON.stringify([auto2?.identical, auto2?.stamp, asked.length]));
  // a session happened: Waluigi took damage and found a dagger; the packet (GitHub side) still has the old sheet — the automatic sync must ASK, never apply blind
  const wal = game.actors.get('Wa1aaaaaaaaaaaaa');
  await wal.update({ system: { attributes: { hp: { max: 31 } } } });
  await wal.createEmbeddedDocuments('Item', [{ _id: 'Dg1aaaaaaaaaaaaa', name: 'Dagger', type: 'weapon' }], { keepId: true });
  packetsJson.digest = 'd1gest000000000000000000000000000000003';
  answer = 'later';
  const auto3 = await mod.autoSync({ delay: 0 });
  const walRow = auto3?.report?.changes?.find((c) => c.name === 'Waluigi');
  check('v1.7: a world that drifted from the packet gets a question — the preview names the HP roll-back AND the dagger the packet would remove; "Not now" writes nothing and forgets nothing', auto3?.skipped === true && auto3.declined === true && auto3.later === true && asked.length === 1 && /^Sync — 1 changed: apply\?$/.test(asked[0].title) && walRow?.status === 'updated' && walRow.notes.join(' | ') === 'HP 31 → 30 | − Dagger [weapon]' && walRow.fields.join() === 'system.attributes.hp.max' && game.actors.get('Wa1aaaaaaaaaaaaa').toObject().system.attributes.hp.max === 31 && game.actors.get('Wa1aaaaaaaaaaaaa').items.has('Dg1aaaaaaaaaaaaa') && settings.get('waluipedia-mass-import.syncLastStamp') !== auto3.stamp, JSON.stringify([auto3?.skipped, auto3?.later, asked.map((a) => a.title), walRow]));
  // the real guard: Foundry stamps every change (_stats.modifiedTime). A sheet changed AFTER the packet's copy was exported is KEPT — no roll-back, no question
  const walNewer = game.actors.get('Wa1aaaaaaaaaaaaa');
  walNewer._data._stats = { modifiedTime: Date.parse('2026-10-04T20:00:00Z') };
  packet.actors.find((a) => a._id === 'Wa1aaaaaaaaaaaaa')._stats = { modifiedTime: Date.parse('2026-10-04T17:21:43Z') };
  asked.length = 0;
  const keptRun = await mod.autoSync({ delay: 0 });
  const keptRow = keptRun?.report?.changes?.find((c) => c.name === 'Waluigi');
  check('v1.7: preferNewer — the world\'s Waluigi (changed 20:00) is newer than the packet\'s copy (exported 17:21): kept as is, the difference shown, nothing pending, no question, the stamp remembered', keptRun?.identical === true && asked.length === 0 && keptRow?.status === 'kept' && keptRow.notes.join(' | ') === 'HP 31 → 30 | − Dagger [weapon]' && keptRun.report.kept.length === 1 && /1 kept \(world newer\)/.test(mod.summarize(keptRun.report)) && mod.syncSummaryHtml(keptRun.report).includes('Kept — the world is newer than the packet (1)') && walNewer.toObject().system.attributes.hp.max === 31 && walNewer.items.has('Dg1aaaaaaaaaaaaa'), JSON.stringify([keptRun?.identical, asked.length, keptRow, mod.summarize(keptRun?.report ?? { created: [], updated: [], skipped: [], failed: [], foldersCreated: [], missingImages: [] })]));
  check('worldNewer / statsTime / packetTime are pure (a second of slack for the import\'s own writes; unknown on either side → the packet applies)', mod.worldNewer({ _stats: { modifiedTime: 2000 } }, { _stats: { modifiedTime: 1000 } }) === false && mod.worldNewer({ _stats: { modifiedTime: 3001 } }, { _stats: { modifiedTime: 1000 } }) === true && mod.worldNewer({ _stats: { modifiedTime: 3001 } }, {}, 1000) === true && mod.worldNewer({ _stats: { modifiedTime: 3001 } }, {}) === false && mod.worldNewer({}, { _stats: { modifiedTime: 1 } }) === false && mod.statsTime({ _stats: { modifiedTime: '5' } }) === 5 && mod.packetTime({}, 7) === 7);
  // the export loop ran: the packet's copy is the world's (same stamp) — the packet applies again
  packet.actors.find((a) => a._id === 'Wa1aaaaaaaaaaaaa')._stats = { modifiedTime: Date.parse('2026-10-04T20:00:00Z') };
  packetsJson.digest = 'd1gest000000000000000000000000000000003b';
  asked.length = 0; answer = 'later';
  const afterLoop = await mod.autoSync({ delay: 0 });
  check('v1.7: once the packet\'s copy carries the world\'s stamp (the export loop ran) the difference is a question again', afterLoop?.later === true && asked.length === 1 && afterLoop.report.kept.length === 0, JSON.stringify([afterLoop?.later, asked.length]));
  asked.length = 0; answer = 'skip';
  const auto4 = await mod.autoSync({ delay: 0 });
  check('v1.7: "Skip this packet" writes nothing but remembers the stamp — quiet until the packet changes', auto4?.declined === true && !auto4.later && settings.get('waluipedia-mass-import.syncLastStamp') === auto4.stamp && game.actors.get('Wa1aaaaaaaaaaaaa').toObject().system.attributes.hp.max === 31 && (await mod.autoSync({ delay: 0 }))?.skipped === true && asked.length === 1, JSON.stringify([auto4, asked.length]));
  asked.length = 0; answer = 'apply';
  packetsJson.digest = 'd1gest000000000000000000000000000000004';
  const auto5 = await mod.autoSync({ delay: 0 });
  check('v1.7: "Apply" writes exactly what the preview showed (HP back to the packet, the dagger removed), marked automatic, remembered', auto5?.sync?.trigger === 'auto' && auto5.sync.stamp.endsWith('0004') && settings.get('waluipedia-mass-import.syncLastStamp') === auto5.sync.stamp && game.actors.get('Wa1aaaaaaaaaaaaa').toObject().system.attributes.hp.max === 30 && !game.actors.get('Wa1aaaaaaaaaaaaa').items.has('Dg1aaaaaaaaaaaaa') && auto5.updated.find((u) => u.actor === 'Waluigi [character]').fields.join() === 'system.attributes.hp.max' && auto5.updated.find((u) => u.actor === 'Waluigi [character]').embedded.join() === '− Dagger [weapon]', JSON.stringify([auto5?.sync?.stamp, auto5?.updated?.find((u) => u.actor === 'Waluigi [character]')]));
  settings.set('waluipedia-mass-import.syncConfirm', false);
  asked.length = 0;
  await wal.update({ system: { attributes: { hp: { max: 33 } } } });
  const direct = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  check('v1.7: with "check first" off the button applies at once (no question) — the automatic sync still asks', direct?.sync?.trigger === 'button' && asked.length === 0 && game.actors.get('Wa1aaaaaaaaaaaaa').toObject().system.attributes.hp.max === 30, JSON.stringify([direct?.sync?.trigger, asked.length]));
  settings.set('waluipedia-mass-import.syncConfirm', true);
  // v1.7.1: the world remembers which packet it last APPLIED (not merely saw) and the export back says so —
  // tools/spoils-to-changes.py tells "the table removed this item after seeing it" from "the packet never arrived" by it
  const appliedRaw = settings.get('waluipedia-mass-import.syncLastApplied');
  const applied = appliedRaw ? JSON.parse(appliedRaw) : null;
  check('v1.7.1: an apply records {stamp, at, exportedAt} in syncLastApplied; lastSyncFacts() reads it back with the last stamp seen', applied?.stamp === direct.sync.stamp && /^\d{4}-\d{2}-\d{2}T/.test(applied.at) && mod.lastSyncFacts().applied?.stamp === direct.sync.stamp && mod.lastSyncFacts().seen === settings.get('waluipedia-mass-import.syncLastStamp'), JSON.stringify([applied, mod.lastSyncFacts()]));
  const day = 86400000, t0 = Date.parse('2026-10-10T12:00:00Z');
  check('v1.7.1: unreadExport is pure — nothing without an export, nothing once the archive read it, a gap inside a day is not overdue, older is', mod.unreadExport(null, '2026-10-04T17:21:43.770Z') === null && mod.unreadExport('2026-10-04T17:21:43.770Z', '2026-10-04T17:21:43.770Z') === null && mod.unreadExport('2026-10-04T17:00:00Z', '2026-10-04T17:21:43.770Z') === null && mod.unreadExport('2026-10-10T06:00:00Z', '2026-10-04T17:21:43.770Z', { now: t0 }).overdue === false && mod.unreadExport('2026-10-08T06:00:00Z', '2026-10-04T17:21:43.770Z', { now: t0 }).overdue === true && mod.unreadExport('2026-10-08T06:00:00Z', null, { now: t0 }).ageMs === t0 - Date.parse('2026-10-08T06:00:00Z'), JSON.stringify(mod.unreadExport('2026-10-08T06:00:00Z', '2026-10-04T17:21:43.770Z', { now: t0 })));
  // the Foundry-only GM: the world exported itself back long ago, the packet in Data was built from an older export — a warning at load, once
  const prevExportedAt = packetsJson.exportedAt;
  packetsJson.exportedAt = '2020-01-01T00:00:00Z';
  settings.set('waluipedia-mass-import.syncLastExport', '2020-02-01T00:00:00Z');
  const unreadWarned = []; const prevWarnU = ui.notifications.warn; ui.notifications.warn = (m) => unreadWarned.push(m);
  settings.set('waluipedia-mass-import.syncAuto', true);
  const unreadRun = await mod.autoSync({ delay: 0 });
  check('v1.7.1: at load, an export back the archive never read (newer than the export the packet was built from, older than a day) is said out loud — run start.py / the suite — and the sync itself still runs', unreadWarned.length === 1 && /unread by Waluipedia/.test(unreadWarned[0]) && /start\.py/.test(unreadWarned[0]) && unreadRun?.skipped === true, JSON.stringify([unreadWarned, unreadRun?.skipped]));
  unreadWarned.length = 0;
  settings.set('waluipedia-mass-import.syncLastExport', '2019-12-01T00:00:00Z');
  await mod.autoSync({ delay: 0 });
  check('v1.7.1: …and nothing when the archive has read it (the packet was built from an export at least as new as the last export back)', unreadWarned.length === 0, JSON.stringify(unreadWarned));
  ui.notifications.warn = prevWarnU; packetsJson.exportedAt = prevExportedAt; settings.set('waluipedia-mass-import.syncLastExport', '');
  // the export back carries what was applied, so the suite's manifest (and the spoils tool) can read it
  const backed = await mod.exportBack({ reason: 'test' });
  const backedText = backed ? [...dataTree.entries()].find(([k]) => k === backed.path)?.[1] : null;
  const backedJson = backedText ? JSON.parse(typeof backedText === 'string' ? backedText : backedText.text ?? '{}') : null;
  check('v1.7.1: the export back names the last packet applied (lastSync.applied.stamp) beside exportedBy', !!backed && backedJson?.lastSync?.applied?.stamp === direct.sync.stamp && new RegExp(`waluipedia-mass-import ${mod.MODULE_VERSION.replace(/\./g, '\\.')} \\(test\\)`).test(backedJson?.exportedBy ?? ''), JSON.stringify([backed, backedJson?.lastSync, backedJson?.exportedBy]));
  // ---- 1.8: art by URL on the archive's server -------------------------------
  const base = 'http://100.64.0.9:8765/';
  const url = (rel) => base + 'Reputation-Matrix2/' + rel;
  // a scene with placed tokens: two of Remi's still on the Data path, one already moved, one of someone else
  const remiA = game.actors.contents.find((a) => a.name === 'Remi') ?? game.actors.contents[0];
  const remiBefore = structuredClone(remiA._data);
  const prevExportStamp = settings.get('waluipedia-mass-import.syncLastExport');
  const sceneUpdates = [];
  const scene = { id: 'S1', background: { src: 'scenes/town.webp' }, foreground: null, thumb: 'scenes/thumb.webp',
    tokens: new Coll([
      ['T1', { id: 'T1', actorId: remiA.id, texture: { src: 'portraits/player/remi.png' } }],
      ['T2', { id: 'T2', actorId: remiA.id, texture: { src: 'portraits/player/remi.png' } }],
      ['T3', { id: 'T3', actorId: remiA.id, texture: { src: url('portraits/player/remi.png') } }],
      ['T4', { id: 'T4', actorId: 'other', texture: { src: 'portraits/player/remi.png' } }],
    ]),
    tiles: new Coll([['L1', { id: 'L1', texture: { src: 'portraits/tiles/banner.png' } }]]),
    async updateEmbeddedDocuments(type, rows) { sceneUpdates.push({ type, rows: structuredClone(rows) }); for (const r of rows) { const t = this.tokens.get(r._id); if (t) t.texture.src = r['texture.src']; } return rows; },
  };
  game.scenes = new Coll([['S1', scene]]);
  game.journal = new Coll([['J1', { pages: new Coll([['P1', { src: 'portraits/journal/map.png' }], ['P2', { text: { content: '<p>look <img src="portraits/journal/inline.png" alt=""> and <a href="https://x.test/not-an-image">x</a></p>' } }]]) }]]);
  game.items = new Coll([['W1', { img: 'icons/weapons/swords/sword-guard-brass-worn.webp' }]]);
  game.macros = new Coll([['M1', { img: 'icons/svg/dice-target.svg' }]]);
  const inUse = mod.imagesInUse();
  check('v1.8: imagesInUse lists scene backgrounds + thumbs, placed tokens (URLs included), tiles, journal image pages and <img> in text, world items, macros and actors — unique, sorted, no data: URIs',
        ['scenes/town.webp', 'scenes/thumb.webp', 'portraits/player/remi.png', url('portraits/player/remi.png'), 'portraits/tiles/banner.png', 'portraits/journal/map.png', 'portraits/journal/inline.png', 'icons/weapons/swords/sword-guard-brass-worn.webp', 'icons/svg/dice-target.svg'].every((p) => inUse.includes(p))
        && !inUse.includes('https://x.test/not-an-image') && new Set(inUse).size === inUse.length && JSON.stringify(inUse) === JSON.stringify([...inUse].sort()), JSON.stringify(inUse));
  const backed2 = await mod.exportBack({ reason: 'test' });
  const backed2Json = backed2 ? JSON.parse([...dataTree.entries()].find(([k]) => k === backed2.path)?.[1] ?? '{}') : null;
  check('v1.8: the export back carries imagesInUse (the suite proves a Data copy unneeded with it before deleting)', Array.isArray(backed2Json?.imagesInUse) && backed2Json.imagesInUse.includes('portraits/tiles/banner.png'), JSON.stringify(backed2Json?.imagesInUse));
  // placed tokens follow the prototype token when an update moves it
  remiA._data.prototypeToken = { texture: { src: 'portraits/player/remi.png' } };
  const moved = { ...remiA.toObject(), prototypeToken: { texture: { src: url('portraits/player/remi.png') } }, img: url('portraits/player/remi.png') };
  delete moved.folder;
  const dry = await mod.importPayload({ format: 'waluipedia-actors/1', actors: [moved] }, { checkImages: false, dryRun: true });
  check('v1.8: a dry run counts the placed tokens that would move and moves none', dry.tokensRelinked === 2 && sceneUpdates.length === 0 && scene.tokens.get('T1').texture.src === 'portraits/player/remi.png', JSON.stringify([dry.tokensRelinked, sceneUpdates]));
  const wet = await mod.importPayload({ format: 'waluipedia-actors/1', actors: [moved] }, { checkImages: false });
  check('v1.8: the real update re-points the placed tokens of that actor still on the old path (one scene call, two tokens), leaves the moved one and other actors\' tokens alone, and says so in the summary',
        wet.tokensRelinked === 2 && sceneUpdates.length === 1 && sceneUpdates[0].type === 'Token' && sceneUpdates[0].rows.map((r) => r._id).join() === 'T1,T2' && sceneUpdates[0].rows.every((r) => r['texture.src'] === url('portraits/player/remi.png'))
        && scene.tokens.get('T4').texture.src === 'portraits/player/remi.png' && /2 placed tokens re-pointed/.test(mod.summarize(wet)), JSON.stringify([wet.tokensRelinked, sceneUpdates, mod.summarize(wet)]));
  check('…and relinkPlacedTokens is idempotent (nothing left on the old path)', (await mod.relinkPlacedTokens(remiA, 'portraits/player/remi.png', url('portraits/player/remi.png'))) === 0);
  // the art-server notice: HEAD the probe from packets.json; one toast per load, wording by who and where
  const artWarned = []; const prevWarnA = ui.notifications.warn; ui.notifications.warn = (m) => artWarned.push(m);
  const prevFetchA = globalThis.fetch;
  let artUp = true;
  globalThis.fetch = async (u, init = {}) => { if (String(u).startsWith(base)) { if (!artUp) throw new TypeError('Failed to fetch'); return { ok: true, status: 200 }; } return prevFetchA(u, init); };
  check('v1.8: noticeArtServer is null when the packets carry no artBase (pre-1.8 suite: Data copies)', (await mod.noticeArtServer({ digest: 'x' })) === null && artWarned.length === 0);
  const up = await mod.noticeArtServer({ artBase: base, artProbe: base + 'favicon.ico' });
  check('…ok and silent when the probe answers', up?.ok === true && up.base === base && artWarned.length === 0, JSON.stringify(up));
  artUp = false;
  const down = await mod.noticeArtServer({ artBase: base, artProbe: base + 'favicon.ico' });
  await mod.noticeArtServer({ artBase: base, artProbe: base + 'favicon.ico' });
  check('…a dead server: the GM is told to start start.py (start.bat) and keep it open — once per load, not once per sync', down?.ok === false && artWarned.length === 1 && /start\.py is not answering at http:\/\/100\.64\.0\.9:8765\//.test(artWarned[0]) && /start\.bat/.test(artWarned[0]), JSON.stringify(artWarned));
  artUp = true; await mod.noticeArtServer({ artBase: base, artProbe: base + 'favicon.ico' }); artUp = false; artWarned.length = 0;
  game.user.isGM = false;
  const player = await mod.noticeArtServer({ artBase: base, artProbe: base + 'favicon.ico' });
  check('…a player is told to ask the GM', player?.ok === false && artWarned.length === 1 && /ask the GM/.test(artWarned[0]), JSON.stringify(artWarned));
  artUp = true; await mod.noticeArtServer({ artBase: base }); artUp = false; artWarned.length = 0;
  globalThis.location = { hostname: 'gm-desktop.tail1234.ts.net' };
  const loop = await mod.noticeArtServer({ artBase: 'http://127.0.0.1:8765/', artProbe: 'http://127.0.0.1:8765/favicon.ico' });
  check('…packets pointing at 127.0.0.1 seen from another machine: the fix is the launcher\'s "reachable from other machines" tick / --art-base', loop?.ok === false && artWarned.length === 1 && /reachable from other machines/.test(artWarned[0]) && /--art-base/.test(artWarned[0]), JSON.stringify(artWarned));
  delete globalThis.location; game.user.isGM = true;
  // with no info passed it reads packets.json from Data (the player path at ready)
  const prevArt = packetsJson.artBase; packetsJson.artBase = base; packetsJson.artProbe = base + 'favicon.ico'; artUp = true;
  check('…and with no info it reads artBase from the Data packets.json by itself', (await mod.noticeArtServer())?.ok === true, JSON.stringify(packetsJson));
  packetsJson.artBase = prevArt; delete packetsJson.artProbe;
  globalThis.fetch = prevFetchA; ui.notifications.warn = prevWarnA;
  delete game.scenes; delete game.journal; delete game.items; delete game.macros;
  remiA._data = remiBefore; settings.set('waluipedia-mass-import.syncLastExport', prevExportStamp);

  settings.set('waluipedia-mass-import.syncAuto', false);
  settings.set('waluipedia-mass-import.syncAuto', false);
  check('automatic sync respects the setting (off → nothing)', (await mod.autoSync({ delay: 0 })) === null);
  game.user.isGM = false;
  settings.set('waluipedia-mass-import.syncAuto', true);
  check('…and never runs for a player', (await mod.autoSync({ delay: 0 })) === null);
  game.user.isGM = true; settings.set('waluipedia-mass-import.syncAuto', false);
  globalThis.Dialog = prevDialog;

  // stale code: the suite installed a newer module while this world still runs the old one
  onDiskVersion = '9.9.9';
  await mod.checkModuleVersion({ fresh: true });
  const warned = [];
  const prevWarn = ui.notifications.warn;
  ui.notifications.warn = (m) => warned.push(m);
  const stale = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  const staleAgain = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  ui.notifications.warn = prevWarn;
  const staleHtml = mod.syncSummaryHtml(stale.report);
  check('a newer module.json on disk than the running code is called out ONCE per session (notification + summary banner: Setup → Launch World, Ctrl+F5)', stale.report.sync.version.stale === true && stale.report.sync.version.onDisk === '9.9.9' && warned.length === 1 && /Launch World/.test(warned[0]) && /9\.9\.9/.test(warned[0]) && staleAgain.report.sync.version.stale === true && staleHtml.includes('wmi-stale') && /relaunch the world/.test(staleHtml), JSON.stringify(warned));
  // the GM's 1.6.0 run: module.json served 1.5.0 while the code running was 1.6.0 — the old text said "1.5.0 is installed but this world still runs 1.6.0"
  onDiskVersion = '1.5.0'; modules.get('waluipedia-mass-import').version = '1.5.0';
  await mod.checkModuleVersion({ fresh: true });
  warned.length = 0; ui.notifications.warn = (m) => warned.push(m);
  const behind = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  ui.notifications.warn = prevWarn;
  check('v1.7: a served manifest OLDER than the running code is "behind" — half-updated install or another Data folder — never "still runs" (the 1.6 wording was wrong)', behind.report.sync.version.behind === true && behind.report.sync.version.stale === false && warned.length === 1 && /half-updated|different Data folder/.test(warned[0]) && !/still runs/.test(warned[0]) && mod.syncSummaryHtml(behind.report).includes('half-updated install'), JSON.stringify(warned));
  onDiskVersion = mod.MODULE_VERSION; modules.get('waluipedia-mass-import').version = mod.MODULE_VERSION;
  check('checkModuleVersion is quiet when they match', (await mod.checkModuleVersion({ fresh: true })).stale === false && (await mod.checkModuleVersion()).behind === false && (await mod.checkModuleVersion()).message === null);
  check('versionVerdict is pure: stale / behind / mismatch (launch-time manifest lags → console only) / quiet', mod.versionVerdict({ running: '1.7.0', onDisk: '1.8.0' }).stale === true && mod.versionVerdict({ running: '1.7.0', onDisk: '1.6.0' }).behind === true && mod.versionVerdict({ running: '1.7.0', onDisk: '1.7.0', loaded: '1.6.0' }).mismatch === true && mod.versionVerdict({ running: '1.7.0', onDisk: '1.7.0', loaded: '1.6.0' }).level === 'info' && mod.versionVerdict({ running: '1.7.0', onDisk: '1.7.0', loaded: '1.7.0' }).message === null && mod.versionVerdict({ running: '1.10.0', onDisk: '1.9.0' }).behind === true);
  check('compareVersions is numeric per part', mod.compareVersions('1.10.0', '1.9.0') === 1 && mod.compareVersions('1.6.0', '1.6.0') === 0 && mod.compareVersions('1.5.0', '1.6.0') === -1 && mod.compareVersions('2', '1.99.99') === 1);
  // GitHub ahead: the branch's module.json is newer than this install
  ghFiles.set(`https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/Foundry/mass_import/module.json`, { version: '9.0.0' });
  const ghv = await mod.checkGitHubVersion('gh-pages');
  check('v1.7: checkGitHubVersion reads the branch manifest (cross-origin raw) and says when GitHub is ahead; the summary carries the hint', ghv.github === '9.0.0' && ghv.ahead === true && mod.syncSummaryHtml({ ...stale.report, sync: { ...stale.report.sync, github: ghv } }).includes('GitHub (gh-pages) has module <b>9.0.0</b>'), JSON.stringify(ghv));
  ghFiles.delete(`https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/Foundry/mass_import/module.json`);
  check('…and is quiet when the branch has none (gh-pages before the PR merges)', (await mod.checkGitHubVersion('gh-pages')).ahead === false);

  // nothing anywhere: a help dialog, no exception, nothing changed
  dataHas = false; ghFiles.clear();
  const none = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  check('with no packet anywhere Sync returns null, changes nothing and names every place it looked', none === null && game.actors.size === 6);
  check('…and an automatic sync with no packet is silent (null, no dialog)', (await mod.syncFromWaluipedia({ trigger: 'auto', options: { checkImages: false } })) === null);
  check('syncHelpHtml tells the GM what to run', /start\.py/.test(mod.syncHelpHtml([{ label: 'Foundry Data folder', url: 'x', error: 'HTTP 404' }], mod.syncSettings())) && /--foundry-data/.test(mod.syncHelpHtml([], mod.syncSettings())) && /import\.json/.test(mod.syncHelpHtml([], mod.syncSettings())));

  // pure helpers of the merge
  const merged = mod.mergePackets([
    { label: 'world', raw: { actors: [{ _id: 'X1', name: 'Guard', type: 'npc' }, { _id: 'X2', name: 'Guard', type: 'npc' }], folders: [{ _id: 'F', name: 'A', path: ['A'], color: '#111111' }] } },
    { label: 'cast', raw: { actors: [{ _id: 'Y1', name: 'guard', type: 'npc' }, { _id: 'X1', name: 'Other', type: 'npc' }, { _id: 'Y2', name: 'Mage', type: 'npc' }], folderStyles: { A: { color: '#222222' }, B: { color: '#333333' } } } },
  ]);
  check('mergePackets: the first packet wins by _id and by name + type (case-insensitive); two same-named actors within one packet both stay; folder styles union with the first winning', merged.actors.map((a) => a._id).join() === 'X1,X2,Y2' && merged.merged.map((m) => `${m.label}:${m.actors}/${m.omitted}`).join() === 'world:2/0,cast:1/2' && merged.folderStyles.A.color === '#111111' && merged.folderStyles.B.color === '#333333' && merged.actorCount === 3, JSON.stringify(merged.merged));
  check('syncStamp: the suite digest, else publishedAt, else the payload shape', mod.syncStamp({ digest: 'abc' }, {}, 'data') === 'data:abc' && mod.syncStamp({ publishedAt: 'p' }, {}, 'data') === 'data:p' && /^launcher:2026:2:\d+$/.test(mod.syncStamp(null, { exportedAt: '2026', actors: [{}, {}] }, 'launcher')));
  globalThis.fetch = prevFetch;
  delete globalThis.ChatMessage;
  game.actors.clear(); game.folders.clear();
}

// ------------------------------------------------------------- v1.4
// Diff updates, dnd5e's cached spells, identifier repair, folder colours,
// once-only URL encoding, tag chips, the v13 progress notification.
{
  const d = mod.docDiff;
  check('docDiff: identical documents give an empty update', Object.keys(d({ a: 1, system: { x: [1, 2], y: { z: 'q' } } }, { a: 1, system: { x: [1, 2], y: { z: 'q' } } })).length === 0);
  check('docDiff: only the changed leaf is sent', JSON.stringify(d({ system: { hp: { value: 3, max: 9 }, ac: 12 } }, { system: { hp: { value: 5, max: 9 }, ac: 12 } })) === '{"system":{"hp":{"value":5}}}');
  check('docDiff: schema keys the import lacks are left alone (no deletions)', Object.keys(d({ system: { identifier: 'toad', hp: 1 } }, { system: { hp: 1 } })).length === 0);
  check('docDiff: flags, ownership and the activities map get -=key deletions', JSON.stringify(d({ flags: { x: { a: 1, b: 2 } }, ownership: { U1aaaaaaaaaaaaaa: 3 }, system: { activities: { A1: { t: 1 }, A2: { t: 2 } } } }, { flags: { x: { a: 1 } }, ownership: {}, system: { activities: { A1: { t: 1 } } } })) === '{"flags":{"x":{"-=b":null}},"ownership":{"-=U1aaaaaaaaaaaaaa":null},"system":{"activities":{"-=A2":null}}}');
  check('v1.9: docDiff never emits an ownership deletion DocumentOwnershipField refuses (-=default, a non-id key) — the rest of the update survives', JSON.stringify(d({ ownership: { default: 0, u1: 3, U1aaaaaaaaaaaaaa: 3 }, name: 'a' }, { ownership: {}, name: 'b' })) === '{"ownership":{"-=U1aaaaaaaaaaaaaa":null},"name":"b"}');
  check('v1.9: withoutOwnership / stripEmbeddedOwnership drop ownership from embedded items and effects (and an item\'s own effects), touch nothing else', (() => {
    const a = { name: 'x', ownership: { default: 0 }, items: [{ _id: 'I1', name: 'i', ownership: { default: 0, U1aaaaaaaaaaaaaa: 3 }, effects: [{ _id: 'E1', ownership: { default: 0 } }] }], effects: [{ _id: 'E2', ownership: { '-=default': null } }] };
    mod.stripEmbeddedOwnership(a);
    return a.ownership.default === 0 && !('ownership' in a.items[0]) && !('ownership' in a.items[0].effects[0]) && !('ownership' in a.effects[0]) && a.items[0].name === 'i' && mod.withoutOwnership(null) === null && mod.withoutOwnership({ n: 1 }).n === 1;
  })());
  check('docDiff: arrays are replaced whole, _id never moves', JSON.stringify(d({ _id: 'a', list: [1, 2] }, { _id: 'b', list: [1, 3] })) === '{"list":[1,3]}');

  game.actors.clear(); game.folders.clear();
  const spellbook = { _id: 'S1aaaaaaaaaaaaaa', name: 'Fire Bolt', type: 'spell', img: 'icons/svg/item-bag.svg', system: { level: 0 }, flags: { dnd5e: { cachedFor: '.Item.F1aaaaaaaaaaaaaa.Activity.ACT1aaaaaaaaaaaa' } } };
  const castFeat = { _id: 'F1aaaaaaaaaaaaaa', name: 'Innate Casting', type: 'feat', img: 'icons/svg/item-bag.svg', system: { activities: { ACT1aaaaaaaaaaaa: { type: 'cast', spell: { uuid: 'Compendium.x.y' } } } }, flags: {} };
  const sword = { _id: 'W1aaaaaaaaaaaaaa', name: 'Sword', type: 'weapon', img: 'icons/svg/item-bag.svg', system: { activities: { ATK1aaaaaaaaaaaa: { type: 'attack' } }, quantity: 1 }, flags: {} };
  const mage = { _id: 'M1aaaaaaaaaaaaaa', name: 'Court Mage', type: 'npc', img: 'icons/svg/mystery-man.svg', system: { attributes: { hp: { value: 20, max: 20 } }, details: { cr: 2 } }, flags: {}, items: [castFeat, spellbook, sword], effects: [] };
  const packet = { format: 'waluipedia-actors/1', folders: [{ _id: 'FO1', name: 'Mages', type: 'Actor', folder: null, color: '#8a2be2', path: ['Mages'] }], actors: [{ ...mage, flags: { 'waluipedia-mass-import': { folderPath: ['Mages'] } } }] };
  const first = await mod.importPayload(packet, { checkImages: false, progress: false });
  const live = game.actors.get(mage._id);
  check('v1.4: a new folder is created in the colour the packet carries', game.folders.contents.find((f) => f.name === 'Mages')?.color === '#8a2be2' && first.foldersStyled.length === 1);
  const second = await mod.importPayload(packet, { checkImages: false, progress: false });
  check('v1.4: re-importing the same actor writes nothing (no actor update, no embedded calls; the cached spell is not even compared)', live.updates === 0 && !live.embeddedUpdates && !live.embeddedDeletes && second.unchanged === 1 && second.updated[0].changed === false && second.updated[0].items.unchanged === 2, JSON.stringify(second.updated[0]));
  check('v1.4: summarize says so', /\(1 unchanged\)/.test(mod.summarize(second)), mod.summarize(second));
  // HP changed on the actor, the sword's quantity changed, the feat's activity changed
  const edited = structuredClone(packet);
  edited.actors[0].system.attributes.hp.value = 7;
  edited.actors[0].items[2].system.quantity = 2;
  edited.actors[0].items[0].system.activities.ACT1aaaaaaaaaaaa.spell.uuid = 'Compendium.x.z';
  const third = await mod.importPayload(edited, { checkImages: false, progress: false });
  check('v1.4: the actor update is the diff alone', live.updates === 1 && JSON.stringify(live.lastUpdate) === '{"system":{"attributes":{"hp":{"value":7}}}}' && live.lastUpdateOptions === undefined, JSON.stringify(live.lastUpdate));
  const calls = live.embeddedUpdates ?? [];
  check('v1.4: plain item changes go in one batch, an activity change in a call of its own', calls.length === 2 && calls[0].arr.length === 1 && calls[0].arr[0]._id === sword._id && JSON.stringify(calls[0].arr[0].system) === '{"quantity":2}' && calls[1].arr.length === 1 && calls[1].arr[0]._id === castFeat._id && calls[1].arr[0].system.activities.ACT1aaaaaaaaaaaa.spell.uuid === 'Compendium.x.z' && third.updated[0].items.updated === 2 && third.updated[0].items.unchanged === 0, JSON.stringify(calls));
  // the Cast feat goes away: its cached spell is dnd5e's to delete, not ours
  const pruned = structuredClone(packet);
  pruned.actors[0].items = [sword];
  const fourth = await mod.importPayload(pruned, { checkImages: false, progress: false });
  check('v1.4: deleting a Cast item leaves its cached spell to the system (no double delete)', fourth.failed.length === 0 && live.embeddedDeletes.at(-1).ids.join() === castFeat._id && fourth.updated[0].items.deleted === 1, JSON.stringify(live.embeddedDeletes));
  // v1.5: cached spells are dnd5e's, full stop — never deleted, created or updated by the sync, whatever the packet says
  live.items.set(spellbook._id, new Item(spellbook));
  live.embeddedDeletes = []; live.embeddedCreates = [];
  const stale = structuredClone(packet);
  stale.actors[0].items = [sword, { ...spellbook, _id: 'S9aaaaaaaaaaaaaa', name: 'Fire Bolt (older copy)' }];
  const fifth = await mod.importPayload(stale, { checkImages: false, progress: false });
  check('v1.5: a cached spell in the world is left alone even when the packet lacks it, and a cached spell in the packet is never created (dnd5e makes its own)', fifth.failed.length === 0 && live.items.has(spellbook._id) && !live.items.has('S9aaaaaaaaaaaaaa') && live.embeddedDeletes.length === 0 && live.embeddedCreates.length === 0 && fifth.updated[0].items.deleted === 0 && fifth.updated[0].items.created === 0 && fifth.updated[0].changed === false, JSON.stringify([live.embeddedDeletes, live.embeddedCreates]));
  check('isCachedSpell', mod.isCachedSpell(spellbook) && !mod.isCachedSpell(sword) && !mod.isCachedSpell({ flags: { dnd5e: { cachedFor: '' } } }));

  // identifiers
  const eager = { _id: 'E1aaaaaaaaaaaaaa', name: 'Eager', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'R1aaaaaaaaaaaaaa', name: 'Toad — Eager Variant', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'toad-—-eager-variant' } },
    { _id: 'B1aaaaaaaaaaaaaa', name: 'Disaster Inc. Catastrophe Scout', type: 'background', img: 'icons/svg/item-bag.svg', system: { identifier: 'disaster-inc.-catastrophe-scout' } },
    { _id: 'Q1aaaaaaaaaaaaaa', name: "Dead Person's Shoes", type: 'equipment', img: 'icons/svg/item-bag.svg', system: { identifier: "dead-person's-shoes" } },
    { _id: 'C1aaaaaaaaaaaaaa', name: 'Fighter', type: 'class', img: 'icons/svg/item-bag.svg', system: { identifier: 'fighter' } },
    { _id: 'U1aaaaaaaaaaaaaa', name: 'Champion', type: 'subclass', img: 'icons/svg/item-bag.svg', system: { identifier: 'champion', classIdentifier: 'fighter (2014)' } },
  ] };
  check('slugifyIdentifier matches what dnd5e derives from a name', mod.slugifyIdentifier('Toad — Eager Variant') === 'toad-eager-variant' && mod.slugifyIdentifier("Dead Person's Shoes") === 'dead-persons-shoes' && mod.slugifyIdentifier('Disaster Inc. Catastrophe Scout') === 'disaster-inc-catastrophe-scout' && mod.slugifyIdentifier('Wild Surge — Unstable Aura') === 'wild-surge-unstable-aura' && mod.slugifyIdentifier('Éclair à la crème') === 'eclair-a-la-creme');
  const rep = await mod.importPayload({ actors: [eager] }, { checkImages: false, progress: false });
  const liveEager = game.actors.get(eager._id);
  const ids = liveEager.items.contents.map((i) => i.toObject().system.identifier);
  check('v1.4: invalid identifiers are repaired on import, valid ones untouched', ids.join() === 'toad-eager-variant,disaster-inc-catastrophe-scout,dead-persons-shoes,fighter,champion' && liveEager.items.get('U1aaaaaaaaaaaaaa').toObject().system.classIdentifier === 'fighter-2014', ids.join());
  check('v1.4: the repairs are reported and summarised', rep.repaired.length === 1 && rep.repaired[0].repairs.length === 4 && /4 identifiers repaired/.test(mod.summarize(rep)) && mod.reportHtml(rep).includes('Repaired identifiers (4)') && mod.reportHtml(rep).includes('toad-eager-variant'), mod.summarize(rep));
  const noRepair = await mod.importPayload({ actors: [structuredClone(eager)] }, { checkImages: false, progress: false, repairIdentifiers: false });
  check('v1.4: repairIdentifiers:false leaves them as they came (and the update is then a real diff)', noRepair.repaired.length === 0 && liveEager.items.get('R1aaaaaaaaaaaaaa').toObject().system.identifier === 'toad-—-eager-variant');

  // folder colours on existing colourless folders + explicit folderStyles map
  const plain = await Folder.create({ name: 'Bestiary', type: 'Actor', folder: null });
  const beast = { _id: 'A9aaaaaaaaaaaaaa', name: 'Black Bear', type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: { 'waluipedia-mass-import': { folderPath: ['Bestiary', 'Beast'] } }, items: [], effects: [] };
  const styled = await mod.importPayload({ actors: [beast], folderStyles: { 'Bestiary': { color: '#6c757d' }, 'Bestiary / Beast': { color: '#556b2f', description: 'Animals' } } }, { checkImages: false, progress: false });
  check('v1.4: a colourless existing folder is painted, the new child born coloured with its description', game.folders.get(plain.id).color === '#6c757d' && game.folders.contents.find((f) => f.name === 'Beast')?.color === '#556b2f' && game.folders.contents.find((f) => f.name === 'Beast')?.description === 'Animals' && styled.foldersStyled.length === 2, JSON.stringify(styled.foldersStyled));
  await game.folders.get(plain.id).update({ color: '#000000' });
  await mod.importPayload({ actors: [beast], folderStyles: { 'Bestiary': { color: '#ffffff' } } }, { checkImages: false, progress: false });
  check("v1.4: a folder the GM coloured keeps the GM's colour", game.folders.get(plain.id).color === '#000000');
  const dry = await mod.importPayload({ actors: [{ ...beast, _id: 'A8aaaaaaaaaaaaaa', name: 'Brown Bear', flags: { 'waluipedia-mass-import': { folderPath: ['Zoo'] } } }], folderStyles: { Zoo: { color: '#123456' } } }, { checkImages: false, progress: false, dryRun: true });
  check('v1.4: dry run paints nothing', dry.foldersStyled.length === 0 && !game.folders.contents.find((f) => f.name === 'Zoo'));

  // image URLs: encode once; wildcards skipped
  fetched.length = 0;
  serverFiles.add('npc/MLSS+BM_Art_-_Fawful.png');
  const fawful = { _id: 'A7aaaaaaaaaaaaaa', name: 'Fawful', type: 'npc', img: 'npc/MLSS%2BBM_Art_-_Fawful.png', prototypeToken: { texture: { src: 'modules/x/tokens/guard*.webp' } }, system: {}, flags: {}, items: [{ _id: 'I7aaaaaaaaaaaaaa', name: 'Hat', type: 'equipment', img: 'portraits/with space.png', system: {} }], effects: [] };
  const img = await mod.importPayload({ actors: [fawful] }, { progress: false });
  const heads = fetched.filter(([, m]) => m === 'HEAD').map(([u]) => u);
  check('v1.4: an already-encoded path is fetched as is (no %252B), a raw one encoded once, wildcards not at all', heads.includes('npc/MLSS%2BBM_Art_-_Fawful.png') && heads.includes('portraits/with%20space.png') && !heads.some((u) => u.includes('guard')) && img.missingImages.length === 1 && img.missingImages[0].path === 'portraits/with space.png', JSON.stringify(heads));
  check('isWildcardPath', mod.isWildcardPath('a/b*.webp') && mod.isWildcardPath('a/{x,y}.webp') && !mod.isWildcardPath('a/b.webp'));

  // tag chips
  const tagged = await Actor.create({ _id: 'T1aaaaaaaaaaaaaa', name: 'Tagged', type: 'npc', system: {}, flags: { 'waluipedia-sheets': { tags: ['Iron Legion', 'npc', 'soldier', 'humanoid'], color: '#adb5bd' } }, items: [] }, { keepId: true });
  check('tagsOf reads the suite flag', mod.tagsOf(tagged).join() === 'Iron Legion,npc,soldier,humanoid' && mod.tagsOf(live).length === 0);
  const mkEl = (tag) => ({ tag, className: '', children: [], style: { vars: {}, setProperty(k, v) { this.vars[k] = v; } }, set textContent(v) { this._t = v; }, get textContent() { return this._t; }, appendChild(c) { this.children.push(c); return c; } });
  const doc = { createElement: mkEl };
  const mkLi = (id, cls = 'directory-item entry actor', name = true) => ({
    classList: { contains: (c) => cls.split(' ').includes(c) }, dataset: { entryId: id }, ownerDocument: doc, children: [], decorated: null,
    querySelector(sel) { if (sel === '.wmi-tags') return this.decorated; return name ? { appendChild: (c) => { this.decorated = c; } } : null; },
    appendChild(c) { this.decorated = c; },
  });
  const lis = [mkLi('T1aaaaaaaaaaaaaa'), mkLi(live.id), mkLi('nope', 'directory-item folder')];
  const root = { querySelectorAll: (sel) => (sel === 'li.directory-item' ? lis : []) };
  const n = mod.decorateDirectory(root, game.actors);
  const chips = lis[0].decorated;
  check('decorateDirectory adds up to three chips (+N) only to tagged entries, once', n === 1 && chips.className === 'wmi-tags' && chips.children.map((c) => c.textContent).join('|') === 'Iron Legion|npc|soldier|+1' && chips.style.vars['--wmi-tag'] === '#adb5bd' && lis[1].decorated === null && mod.decorateDirectory(root, game.actors) === 0, JSON.stringify(chips?.children?.map((c) => c.textContent)));
  settings.set('waluipedia-mass-import.showTags', false);
  const lis2 = [mkLi('T1aaaaaaaaaaaaaa')];
  globalThis.Hooks.call('renderActorDirectory', {}, { querySelectorAll: () => lis2, querySelector: () => null });
  check('the showTags client setting switches the chips off', lis2[0].decorated === null);
  settings.set('waluipedia-mass-import.showTags', true);
  globalThis.Hooks.call('renderActorDirectory', {}, { querySelectorAll: () => lis2, querySelector: () => null });
  check('…and on (players see chips too, buttons stay GM-only)', lis2[0].decorated?.className === 'wmi-tags');

  // progress: the v13 notification, never the deprecated scene-navigation bar
  const notes = [];
  let navCalls = 0;
  globalThis.SceneNavigation = { displayProgressBar: () => { navCalls++; } };
  ui.notifications.info = (msg, opts) => { const note = { msg, opts, updates: [], update(u) { this.updates.push(u); } }; notes.push(note); return note; };
  const many = { actors: Array.from({ length: 6 }, (_, i) => ({ _id: `P${String(i).padStart(15, '0')}`, name: `Pawn ${i}`, type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [] })) };
  await mod.importPayload(many, { checkImages: false });
  check('v1.4: progress uses ui.notifications.info({progress:true}).update with pct 0..1 — SceneNavigation.displayProgressBar is never called', navCalls === 0 && notes.length === 1 && notes[0].opts?.progress === true && notes[0].updates.length === 7 && notes[0].updates.every((u) => u.pct >= 0 && u.pct <= 1) && notes[0].updates.at(-1).pct === 1, JSON.stringify(notes.map((n) => n.updates.length)));
  ui.notifications.info = (msg) => 1; // v12: info() returns an id, no update()
  await mod.importPayload(many, { checkImages: false });
  check('v1.4: on v12 it falls back to the scene-navigation bar', navCalls > 0);
  delete globalThis.SceneNavigation;
  ui.notifications.info = () => {};
  check('v1.4: folderCounts groups the summary rows by folder', JSON.stringify(mod.folderCounts([{ folder: 'B' }, { folder: 'A' }, { folder: 'B' }, { folder: '' }])) === '[["A",1],["B",2],["root",1]]');
}

// ------------------------------------------------------------- v1.5
// The GM's second sync: "Item X does not exist!" ×N, "Only a single Species
// can be added to a Player Character", "The _id [...] already exists within
// the parent collection" and two FAILED actors — plus empty duplicate folders
// from the first import. Here the same world shape, repaired.
{
  game.actors.clear(); game.folders.clear(); refusedSingletons.length = 0;
  // Eager as the world holds her: the Toad species and the background the
  // players made are INVALID (em dash / dot in the identifier) — not in
  // items, only in the source — and valid stand-ins sit beside them.
  const worldEager = { _id: 'VudZ3W313Y4FILs0', name: 'Eager', type: 'character', img: 'icons/svg/mystery-man.svg', system: { details: { race: 'd5c6b4b8da1e46c8' } }, flags: {}, items: [
    { _id: 'd5c6b4b8da1e46c8', name: 'Toad — Eager Variant', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'toad-—-eager-variant', movement: { walk: 30 } } },
    { _id: '5f606a64c6bb43f3', name: 'Disaster Inc. Catastrophe Scout', type: 'background', img: 'icons/svg/item-bag.svg', system: { identifier: 'disaster-inc.-catastrophe-scout' } },
    { _id: '218ad632c6e149d9', name: 'Fighting Style — Archery', type: 'feat', img: 'icons/svg/item-bag.svg', system: { identifier: 'fighting-style-—-archery' } },
    { _id: 'sctSWwZ7EHsxJlwW', name: 'Grung', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'grung' } },
    { _id: 'fN1FAHmzHWPx6Ky5', name: 'Slave', type: 'background', img: 'icons/svg/item-bag.svg', system: { identifier: 'slave' } },
    { _id: 'C1aaaaaaaaaaaaaa', name: 'Fighter', type: 'class', img: 'icons/svg/item-bag.svg', system: { identifier: 'fighter', levels: 4 } },
  ] };
  const eagerLive = await Actor.create(worldEager, { keepId: true });
  check('the fake holds the broken items the way Foundry does: out of the collection, in the source, listed as invalid', eagerLive.items.size === 3 && [...eagerLive.items.invalidDocumentIds].join() === 'd5c6b4b8da1e46c8,5f606a64c6bb43f3,218ad632c6e149d9');
  const srcs = mod.embeddedSources(eagerLive, 'items');
  check('embeddedSources sees all six — the invalid ones flagged, with their source data', srcs.size === 6 && srcs.get('d5c6b4b8da1e46c8').invalid === true && srcs.get('d5c6b4b8da1e46c8').obj.name === 'Toad — Eager Variant' && srcs.get('sctSWwZ7EHsxJlwW').invalid === false);
  // the suite's packet: the same actor, identifiers repaired by the bridge, plus a spoil
  const packetEager = structuredClone(worldEager);
  packetEager.items[0].system.identifier = 'toad-eager-variant';
  packetEager.items[1].system.identifier = 'disaster-inc-catastrophe-scout';
  packetEager.items[2].system.identifier = 'fighting-style-archery';
  packetEager.items.push({ _id: 'Sp1aaaaaaaaaaaaa', name: 'The Electric Sphere', type: 'loot', img: 'icons/svg/item-bag.svg', system: {} });
  packetEager.flags = { 'waluipedia-mass-import': { folderPath: ['Players'] } };
  const fixed = await mod.importPayload({ actors: [packetEager] }, { checkImages: false, progress: false });
  const u = fixed.updated[0];
  check('v1.5: the actor no longer FAILS — the invalid species, background and feat are repaired through updates (no create, no "_id already exists")', fixed.failed.length === 0 && u.items.repaired === 3 && u.items.created === 1 && eagerLive.items.size === 7 && eagerLive.items.invalidDocumentIds.size === 0 && eagerLive.items.get('d5c6b4b8da1e46c8').toObject().system.identifier === 'toad-eager-variant' && !eagerLive.embeddedCreates.some((c) => c.arr.some((d) => d._id === 'd5c6b4b8da1e46c8')), JSON.stringify([fixed.failed, u.items]));
  check('v1.7: the repair went THROUGH THE ACTOR (actor.update({items:[{_id, …}]}) — the path dnd5e migrations take), never through updateEmbeddedDocuments, which dies on an invalid id in Foundry 14', (eagerLive.parentItemUpdates ?? []).length === 3 && eagerLive.parentItemUpdates.every((batch) => batch.length === 1 && Object.keys(batch[0]).join() === '_id,system') && !(eagerLive.embeddedUpdates ?? []).some((b) => b.arr.some((d) => ['d5c6b4b8da1e46c8', '5f606a64c6bb43f3', '218ad632c6e149d9'].includes(d._id))) && (eagerLive.embeddedDeletes ?? []).length === 0, JSON.stringify([eagerLive.parentItemUpdates, eagerLive.embeddedDeletes]));
  check('v1.7: the plan said so beforehand (planEmbedded is pure) — three repairs, one addition, in words', (() => { const p = mod.planEmbedded(mod.embeddedSources(new Actor(worldEager), 'items'), packetEager.items, false); return p.invalid.length === 3 && p.toCreate.length === 1 && p.changes.join(' | ') === 'repair Toad — Eager Variant [race] (system.identifier) | repair Disaster Inc. Catastrophe Scout [background] (system.identifier) | repair Fighting Style — Archery [feat] (system.identifier) | + The Electric Sphere [loot]'; })(), JSON.stringify(mod.planEmbedded(mod.embeddedSources(new Actor(worldEager), 'items'), packetEager.items, false).changes));
  check('v1.5: no singleton refusal was provoked (the species went in as an update, not a creation)', refusedSingletons.length === 0, refusedSingletons.join('; '));
  check('v1.5: the GM gets a note — two species, two backgrounds, keep one — instead of a failure', fixed.notes.length === 2 && fixed.notes.every((n) => n.actor === 'Eager [character]') && fixed.notes.some((n) => /2 species items — /.test(n.note) && /Toad — Eager Variant/.test(n.note) && /Grung/.test(n.note)) && fixed.notes.some((n) => /2 background items/.test(n.note)) && /3 broken items repaired, 2 notes/.test(mod.summarize(fixed)) && mod.syncSummaryHtml({ ...fixed, changes: [], sync: {} }).includes('Notes for the GM (2)'), JSON.stringify(fixed.notes) + ' ' + mod.summarize(fixed));
  const again = await mod.importPayload({ actors: [packetEager] }, { checkImages: false, progress: false });
  check('v1.5: the next sync of the same packet writes nothing (and the notes persist until the GM acts)', again.unchanged === 1 && again.updated[0].items.repaired === 0 && again.embeddedRepaired === 0 && again.notes.length === 2);
  check('singletonNotes is pure', mod.singletonNotes({ type: 'character', items: [{ type: 'race', name: 'A' }, { type: 'race', name: 'B' }] }).length === 1 && mod.singletonNotes({ type: 'npc', items: [{ type: 'race', name: 'A' }, { type: 'race', name: 'B' }] }).length === 0 && mod.singletonNotes({ type: 'character', items: [{ type: 'race', name: 'A' }] }).length === 0);

  // a packet that brings a NEW species while the sheet already has one: dnd5e refuses it — a note, not a FAILED actor
  const dan = await Actor.create({ _id: 'IlzuThuR8upTtqtF', name: 'Feyward Dan', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'sCxUWoCkQo9o7KeU', name: 'Grung', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'grung' } }] }, { keepId: true });
  const danPacket = { _id: 'IlzuThuR8upTtqtF', name: 'Feyward Dan', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'sCxUWoCkQo9o7KeU', name: 'Grung', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'grung' } },
    { _id: '4b8eb918a8d24833', name: 'Toad — Feyward Variant', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'toad-feyward-variant' } },
    { _id: 'e6cbf8b57a504da9', name: 'Wild Surge — Unstable Aura', type: 'feat', img: 'icons/svg/item-bag.svg', system: { identifier: 'wild-surge-unstable-aura' } }] };
  const danRep = await mod.importPayload({ actors: [danPacket] }, { checkImages: false, progress: false });
  check('v1.5: a creation the system refuses is reported as a note on the actor, the rest of the batch still lands, nothing FAILED', danRep.failed.length === 0 && dan.items.has('e6cbf8b57a504da9') && !dan.items.has('4b8eb918a8d24833') && danRep.updated[0].items.refused.join() === 'Toad — Feyward Variant [race]' && danRep.notes.some((n) => n.actor === 'Feyward Dan [character]' && /refused/.test(n.note)), JSON.stringify([danRep.failed, danRep.notes, danRep.updated[0].items]));
  check('v1.7: …the system was not even asked (no error toast at the table): the sync saw the stand-in and offered a SWAP instead', refusedSingletons.length === 0 && danRep.swaps.length === 1 && danRep.swaps[0].actorId === 'IlzuThuR8upTtqtF' && danRep.swaps[0].data._id === '4b8eb918a8d24833' && danRep.swaps[0].standIns.map((x) => x.name).join() === 'Grung' && /1 swap waiting/.test(mod.summarize(danRep)), JSON.stringify([refusedSingletons, danRep.swaps.map((w) => [w.actorId, w.label, w.standIns])]));
  const swapHtml = mod.syncSummaryHtml({ ...danRep, changes: [], sync: {} });
  check('v1.7: the swap is one button in the summary (and the chat whisper): actor, stand-in, the item data on the button', swapHtml.includes('One of a kind — swap the stand-in? (1)') && swapHtml.includes('class="wmi-swap"') && swapHtml.includes('data-actor="IlzuThuR8upTtqtF"') && swapHtml.includes('Swap: remove Grung, add Toad — Feyward Variant') && swapHtml.includes('&quot;_id&quot;:&quot;4b8eb918a8d24833&quot;') && mod.reportHtml(danRep).includes('wmi-swap'), swapHtml.slice(swapHtml.indexOf('One of a kind'), swapHtml.indexOf('One of a kind') + 300));
  const fakeButton = { disabled: false, textContent: '', dataset: { actor: 'IlzuThuR8upTtqtF', invalid: '', item: JSON.stringify(danRep.swaps[0].data) } };
  const clicked = await mod.onSwapClick({ target: { closest: (sel) => (sel === '.wmi-swap' ? fakeButton : null) }, preventDefault() {} });
  check('v1.7: the click swaps — the Grung stand-in leaves, the packet\'s Toad arrives under its own id, dnd5e points details.race at it itself; the button says so', clicked === true && !dan.items.has('sCxUWoCkQo9o7KeU') && dan.items.get('4b8eb918a8d24833')?.toObject().system.identifier === 'toad-feyward-variant' && dan.items.contents.filter((i) => i.type === 'race').length === 1 && /✔/.test(fakeButton.textContent), JSON.stringify([clicked, dan.items.contents.map((i) => i.name), fakeButton.textContent]));
  // the GM's real packet carries BOTH species for Dan (the export kept the invalid Toad beside the Grung): after the swap
  // the other one is missing — offered as the next swap, never forced, and the actor still counts as unchanged (no question)
  const danAgain = await mod.importPayload({ actors: [danPacket] }, { checkImages: false, progress: false });
  check('v1.7: the same packet again — the other species is only offered (a swap back), nothing written, the actor unchanged, nothing pending', danAgain.swaps.length === 1 && danAgain.swaps[0].data.name === 'Grung' && danAgain.unchanged === 1 && danAgain.updated[0].changed === false && mod.syncPending(danAgain).length === 0, JSON.stringify([danAgain.swaps.map((w) => w.label), danAgain.unchanged, mod.syncPending(danAgain)]));

  // an invalid document that cannot be repaired through the actor either is replaced under its id — unless it is one of a kind
  const stubborn = await Actor.create({ _id: 'St1aaaaaaaaaaaaa', name: 'Stubborn', type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad1aaaaaaaaaaaa', name: 'Odd Thing', type: 'feat', img: 'icons/svg/item-bag.svg', system: { identifier: 'odd—thing' } }] }, { keepId: true });
  const realUpdate = stubborn.update.bind(stubborn);
  stubborn.update = async (data, opts) => { if (data.items?.some((d) => d._id === 'Bad1aaaaaaaaaaaa')) throw new Error('Item [Bad1aaaaaaaaaaaa] validation errors'); return realUpdate(data, opts); };
  const stubbornRep = await mod.importPayload({ actors: [{ _id: 'St1aaaaaaaaaaaaa', name: 'Stubborn', type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad1aaaaaaaaaaaa', name: 'Odd Thing', type: 'feat', img: 'icons/svg/item-bag.svg', system: { identifier: 'odd-thing' } }] }] }, { checkImages: false, progress: false });
  check('v1.5/1.7: when even the actor update is refused, a feat (not one of a kind) is deleted and created again under its own id', stubbornRep.failed.length === 0 && stubborn.items.get('Bad1aaaaaaaaaaaa')?.toObject().system.identifier === 'odd-thing' && stubborn.items.invalidDocumentIds.size === 0 && stubbornRep.updated[0].items.repaired === 1, JSON.stringify([stubbornRep.failed, stubbornRep.updated[0].items]));
  // v14 as the GM saw it: the update through the actor is accepted and changes nothing — the item stays invalid. 1.8 counted that as
  // "repaired (unverified)" and the world logged the same broken items on every load; 1.9 replaces the item instead.
  const silent = await Actor.create({ _id: 'Si1aaaaaaaaaaaaa', name: 'Silent', type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad4aaaaaaaaaaaa', name: 'Quiet Thing', type: 'feat', img: 'icons/svg/item-bag.svg', system: { identifier: 'quiet—thing' } }] }, { keepId: true });
  const silentUpdate = silent.update.bind(silent);
  silent.update = async (data, opts) => { if (data.items?.some((d) => d._id === 'Bad4aaaaaaaaaaaa')) return silent; return silentUpdate(data, opts); };
  const silentRep = await mod.importPayload({ actors: [{ _id: 'Si1aaaaaaaaaaaaa', name: 'Silent', type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad4aaaaaaaaaaaa', name: 'Quiet Thing', type: 'feat', img: 'icons/svg/item-bag.svg', system: { identifier: 'quiet-thing' } }] }] }, { checkImages: false, progress: false });
  check('v1.9: an update the actor accepts without bringing the item back (v14) is not a repair — the item is deleted and created again under its id, valid, nothing "unverified"', silentRep.failed.length === 0 && silent.items.get('Bad4aaaaaaaaaaaa')?.toObject().system.identifier === 'quiet-thing' && silent.items.invalidDocumentIds.size === 0 && silentRep.updated[0].items.repaired === 1 && silentRep.updated[0].items.created === 1 && silentRep.reloadNeeded === 0 && (silent.embeddedDeletes ?? []).some((d) => d.includes?.('Bad4aaaaaaaaaaaa') || d.ids?.includes?.('Bad4aaaaaaaaaaaa') || JSON.stringify(d).includes('Bad4aaaaaaaaaaaa')), JSON.stringify([silentRep.failed, silentRep.updated[0].items, silent.embeddedDeletes]));
  // embedded ownership: the server stamps the creating user on every world copy; the packet copy says {default: 0}.
  // 1.8 diffed that into `-=<user>` / `-=default` and DocumentOwnershipField refused the whole batch (the 14 spoils items).
  const owned = await Actor.create({ _id: 'Ow1aaaaaaaaaaaaa', name: 'Owned', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Sp1aaaaaaaaaaaaa', name: 'Oracle Deck', type: 'loot', img: 'icons/svg/item-bag.svg', ownership: { default: 0, GMaaaaaaaaaaaaaa: 3 }, system: { quantity: 1 } }] }, { keepId: true });
  const ownedRep = await mod.importPayload({ actors: [{ _id: 'Ow1aaaaaaaaaaaaa', name: 'Owned', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Sp1aaaaaaaaaaaaa', name: 'Oracle Deck', type: 'loot', img: 'icons/svg/item-bag.svg', ownership: { default: 0 }, system: { quantity: 1 } },
    { _id: 'Sp2aaaaaaaaaaaaa', name: 'Black Crystal', type: 'loot', img: 'icons/svg/item-bag.svg', ownership: { '-=default': null }, system: { quantity: 1 } }] }] }, { checkImages: false, progress: false });
  const ownedUpdates = (owned.embeddedUpdates ?? []).flatMap((u) => u.arr ?? u.items ?? (Array.isArray(u) ? u : []));
  check('v1.9: an embedded item that differs from the packet only in ownership is UNCHANGED — no update carries ownership, and a created item arrives without it (the world stamps its own)', ownedRep.failed.length === 0 && ownedRep.updated[0].items.unchanged === 1 && ownedRep.updated[0].items.updated === 0 && ownedRep.updated[0].items.created === 1 && !JSON.stringify(ownedUpdates).includes('ownership') && !(owned.embeddedCreates ?? []).some((c) => c.arr.some((d) => 'ownership' in d)) && owned.items.get('Sp2aaaaaaaaaaaaa')?.name === 'Black Crystal', JSON.stringify([ownedRep.failed, ownedRep.updated[0].items, ownedUpdates, owned.embeddedCreates]));
  // the GM's world after 1.6.0: a broken species beside a Grung stand-in, and an actor that refuses the repair — the species is NEVER deleted
  const keeper = await Actor.create({ _id: 'Kp1aaaaaaaaaaaaa', name: 'Keeper', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad2aaaaaaaaaaaa', name: 'Toad — Keeper Variant', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'toad-—-keeper' } },
    { _id: 'Grg2aaaaaaaaaaaa', name: 'Grung', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'grung' } }] }, { keepId: true });
  const keeperUpdate = keeper.update.bind(keeper);
  keeper.update = async (data, opts) => { if (data.items?.some((d) => d._id === 'Bad2aaaaaaaaaaaa')) throw new Error('Item [Bad2aaaaaaaaaaaa] validation errors'); return keeperUpdate(data, opts); };
  const keeperPacket = { _id: 'Kp1aaaaaaaaaaaaa', name: 'Keeper', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad2aaaaaaaaaaaa', name: 'Toad — Keeper Variant', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'toad-keeper' } },
    { _id: 'Grg2aaaaaaaaaaaa', name: 'Grung', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'grung' } }] };
  const keeperRep = await mod.importPayload({ actors: [keeperPacket] }, { checkImages: false, progress: false });
  check('v1.7: a species that cannot be repaired in place is NOT deleted while a stand-in sits on the sheet (1.6 deleted Eager\'s and Dan\'s Toads, then the creation was refused) — a swap is offered, nothing is lost', keeperRep.failed.length === 0 && (keeper.embeddedDeletes ?? []).length === 0 && keeper.items.invalidDocumentIds.has('Bad2aaaaaaaaaaaa') && keeper.items.has('Grg2aaaaaaaaaaaa') && keeperRep.swaps.length === 1 && keeperRep.swaps[0].invalidId === 'Bad2aaaaaaaaaaaa' && keeperRep.swaps[0].standIns[0].id === 'Grg2aaaaaaaaaaaa' && keeperRep.updated[0].items.refused.join() === 'Toad — Keeper Variant [race]', JSON.stringify([keeperRep.failed, keeper.embeddedDeletes, keeperRep.swaps.map((w) => [w.invalidId, w.standIns])]));
  keeper.update = keeperUpdate;
  const swapped = await mod.swapSingleton({ actorId: 'Kp1aaaaaaaaaaaaa', data: keeperPacket.items[0], invalidId: 'Bad2aaaaaaaaaaaa' });
  check('v1.7: that swap removes the stand-in AND the broken copy, then creates the packet\'s species under its id', swapped?.id === 'Bad2aaaaaaaaaaaa' && !keeper.items.has('Grg2aaaaaaaaaaaa') && keeper.items.invalidDocumentIds.size === 0 && keeper.items.get('Bad2aaaaaaaaaaaa')?.toObject().system.identifier === 'toad-keeper', JSON.stringify([swapped?.id, keeper.items.contents.map((i) => i.name)]));
  // a lone broken species (no stand-in) that refuses the repair: a fresh copy first, the broken one last — never a moment without a species
  const lone = await Actor.create({ _id: 'Ln1aaaaaaaaaaaaa', name: 'Lone', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad3aaaaaaaaaaaa', name: 'Toad — Lone Variant', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'toad-—-lone' } }] }, { keepId: true });
  const loneUpdate = lone.update.bind(lone);
  lone.update = async (data, opts) => { if (data.items?.some((d) => d._id === 'Bad3aaaaaaaaaaaa')) throw new Error('Item [Bad3aaaaaaaaaaaa] validation errors'); return loneUpdate(data, opts); };
  const loneRep = await mod.importPayload({ actors: [{ _id: 'Ln1aaaaaaaaaaaaa', name: 'Lone', type: 'character', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad3aaaaaaaaaaaa', name: 'Toad — Lone Variant', type: 'race', img: 'icons/svg/item-bag.svg', system: { identifier: 'toad-lone' } }] }] }, { checkImages: false, progress: false });
  const loneOrder = [...(lone.embeddedCreates ?? []).map(() => 'create'), ...(lone.embeddedDeletes ?? []).map(() => 'delete')];
  check('v1.7: …created first (fresh id), the broken copy deleted after; the sheet ends with exactly one valid species', loneRep.failed.length === 0 && loneOrder.join() === 'create,delete' && lone.items.contents.filter((i) => i.type === 'race').length === 1 && lone.items.invalidDocumentIds.size === 0 && lone.items.contents[0].toObject().system.identifier === 'toad-lone' && loneRep.updated[0].items.repaired === 1, JSON.stringify([loneRep.failed, loneOrder, lone.items.contents.map((i) => i.name)]));

  // ---- folders: case-insensitive matching, duplicate merge, empty prune
  game.actors.clear(); game.folders.clear();
  const kt1 = await Folder.create({ name: 'Koopa Troop', type: 'Actor', folder: null, color: '#006400' });
  const kt2 = await Folder.create({ name: 'Koopa Troop', type: 'Actor', folder: null });
  const kt3 = await Folder.create({ name: 'koopa troop ', type: 'Actor', folder: null });
  const sub = await Folder.create({ name: 'Elites', type: 'Actor', folder: kt2.id });
  const housed = await Folder.create({ name: 'A House Divided', type: 'Actor', folder: null });
  const housedSub = await Folder.create({ name: 'Characters of the Ruined Manor', type: 'Actor', folder: housed.id });
  const important = await Folder.create({ name: 'Important', type: 'Actor', folder: null });
  await Actor.create({ _id: 'K1aaaaaaaaaaaaaa', name: 'Goomba', type: 'npc', folder: kt1.id, system: {}, flags: {}, items: [] }, { keepId: true });
  await Actor.create({ _id: 'K2aaaaaaaaaaaaaa', name: 'Koopatrol', type: 'npc', folder: kt2.id, system: {}, flags: {}, items: [] }, { keepId: true });
  await Actor.create({ _id: 'K3aaaaaaaaaaaaaa', name: 'Elite', type: 'npc', folder: sub.id, system: {}, flags: {}, items: [] }, { keepId: true });
  await Actor.create({ _id: 'K4aaaaaaaaaaaaaa', name: 'Paratroopa', type: 'npc', folder: null, system: {}, flags: {}, items: [] }, { keepId: true });
  const rep = await mod.importPayload({ actors: [{ _id: 'K4aaaaaaaaaaaaaa', name: 'Paratroopa', type: 'npc', system: {}, flags: { 'waluipedia-mass-import': { folderPath: ['KOOPA TROOP'] } }, items: [] }] }, { checkImages: false, progress: false });
  check('v1.5: ensureFolderPath matches trimmed and case-insensitively and, among duplicates, picks the folder with the most below it — no fourth Koopa Troop', rep.foldersCreated.length === 0 && game.folders.contents.filter((f) => mod.folderKey(f.name) === 'koopa troop').length === 3 && game.actors.get('K4aaaaaaaaaaaaaa').folderId === kt2.id, JSON.stringify(rep.foldersCreated));
  const rows = game.folders.contents.map((f) => ({ id: f.id, name: f.name, parent: f.parentId }));
  const groups = mod.duplicateFolderGroups(rows, { [kt1.id]: 1, [kt2.id]: 3 });
  check('duplicateFolderGroups: same parent + same key → one group, the fuller folder kept, the untidy-named empty one last', groups.length === 1 && groups[0].keep.id === kt2.id && groups[0].others.map((o) => o.id).join() === `${kt1.id},${kt3.id}`, JSON.stringify(groups));
  check('…on a tie the cleanly named folder wins', mod.duplicateFolderGroups([{ id: 'a', name: ' Players', parent: null }, { id: 'b', name: 'Players', parent: null }], {})[0].keep.id === 'b');
  check('emptyFolderIds: leaves first, then the parents they empty; occupied folders and their ancestors stay', mod.emptyFolderIds(rows, new Set([kt1.id, kt2.id, sub.id])).join() === [kt3.id, housedSub.id, important.id, housed.id].join(), JSON.stringify(mod.emptyFolderIds(rows, new Set([kt1.id, kt2.id, sub.id]))));
  const dry = await mod.tidyFolders({ dryRun: true });
  check('tidyFolders dry run only lists', dry.foldersMerged.length === 2 && dry.foldersPruned.length === 3 && game.folders.size === 7, JSON.stringify(dry));
  const tidy = await mod.tidyFolders({});
  check('tidyFolders: the duplicate Koopa Troops are merged into the fuller one (actors + sub-folder moved, colour carried over), the GM\'s empty import folders are gone', tidy.foldersMerged.length === 2 && tidy.foldersPruned.length === 3 && game.folders.size === 2 && game.folders.get(kt2.id) && !game.folders.get(kt1.id) && !game.folders.get(kt3.id) && game.folders.get(kt2.id).color === '#006400'
    && game.actors.get('K1aaaaaaaaaaaaaa').folderId === kt2.id && game.folders.get(sub.id).parentId === kt2.id && !game.folders.get(housed.id) && !game.folders.get(important.id), JSON.stringify([tidy, game.folders.contents.map((f) => f.name)]));
  check('…merge and prune can be switched off separately', JSON.stringify(await mod.tidyFolders({ merge: false, prune: false })) === '{"foldersMerged":[],"foldersPruned":[]}');
  check('summarize counts the folder work', /2 duplicate folders merged, 3 empty folders removed/.test(mod.summarize({ created: [], updated: [], skipped: [], failed: [], foldersCreated: [], missingImages: [], ...tidy })));
}

// ------------------------------------------- optional: a real world export
// WMI_EXPORT=/path/to/<world>-all-actors.json node tools/tests/test-mass-import-module.mjs
if (process.env.WMI_EXPORT) {
  const real = JSON.parse(fs.readFileSync(process.env.WMI_EXPORT, 'utf8'));
  game.actors.clear(); game.folders.clear();
  const t0 = Date.now();
  const r1 = await mod.importPayload(real, { checkImages: false, progress: false });
  const r2 = await mod.importPayload(real, { checkImages: false, progress: false });
  const r3 = await mod.importPayload(real, { dryRun: true, progress: false });
  const n = mod.normalizeImport(real).entries.length;
  check(`real export: ${n} actors import without failures`, r1.failed.length === 0 && r1.created.length === n, JSON.stringify(r1.failed.slice(0, 3)));
  check('real export: second import updates everything, creates nothing', r2.created.length === 0 && r2.updated.length === n && game.actors.size === n);
  check('real export: embedded sync is a no-op on an unchanged re-import', r2.updated.every((u) => u.items.created === 0 && u.items.deleted === 0));
  check('real export: a second import writes nothing at all (every actor unchanged, no actor or item update calls)', r2.unchanged === n && r2.updated.every((u) => u.changed === false) && game.actors.contents.every((a) => a.updates === 0 && !a.embeddedUpdates), `${r2.unchanged}/${n} unchanged; ${r2.updated.filter((u) => u.changed).slice(0, 3).map((u) => u.actor).join(', ')}`);
  check('real export: image check runs over every path without throwing', r3.failed.length === 0);
  console.log(`real export: ${n} actors, ${game.folders.size} folders created, ${r3.missingImages.length} image paths not on the (fake) server, ${Date.now() - t0} ms`);
  // WMI_PACKET=Reputation-Matrix2/actors/worlds/midlands/import.json — the suite's organized packet on top of the GM's world
  if (process.env.WMI_PACKET) {
    const packet = JSON.parse(fs.readFileSync(process.env.WMI_PACKET, 'utf8'));
    // seed the world the way Foundry holds it — straight from the export, broken identifiers and all
    // (an import through the module would have repaired them on the way in)
    game.actors.clear(); game.folders.clear();
    for (const f of real.folders ?? []) { const doc = new Folder({ ...f }); game.folders.set(doc.id, doc); }
    for (const a of real.actors) { const doc = new Actor(a); game.actors.set(doc.id, doc); }
    const invalidBefore = game.actors.contents.reduce((n, a) => n + a.items.invalidDocumentIds.size, 0);
    check('real world: the export holds invalid embedded documents (the ones that made two actors FAIL)', invalidBefore === 7, String(invalidBefore));
    // the spoils: what data/inventory.json says the party holds (tools/spoils-to-changes.py → actors/changes/spoils-<world>.json)
    // reaches the table as "changed" rows that name the items, and after the import the items are on the sheets, flagged
    const spoilEntries = mod.normalizeImport(packet).entries;
    const spoilBefore = mod.snapshotWorld(game.actors.contents);
    const spoilDry = await mod.importPayload(packet, { checkImages: false, progress: false, dryRun: true });
    const spoilRows = mod.syncChanges(spoilEntries, spoilBefore, spoilBefore, spoilDry);
    const hjRow = spoilRows.find((r) => r.id === 'Qir5aDX8bkL5lt1c');
    const hjPlan = (hjRow?.embedded ?? []).concat(hjRow?.notes ?? []).join(' | ');
    check('real packet: the Feyward spoils are "changed" rows before anything is written — Hjumpik gains the ring, the key, the book', !!hjRow && hjRow.status !== 'unchanged' && /OC Soul Ring/.test(hjPlan) && /Morel/.test(hjPlan) && /Revised History/.test(hjPlan), `${hjRow?.status}: ${hjPlan.slice(0, 300)}`);
    const r4 = await mod.importPayload(packet, { checkImages: false, progress: false });
    const moved = r4.updated.filter((u) => u.changed).length;
    const hjLive = game.actors.contents.find((a) => a.id === 'Qir5aDX8bkL5lt1c');
    const spoilsOn = (a) => (a ? a.items.contents.map((i) => i.toObject()).filter((i) => i.flags?.waluipedia?.inventoryItem) : []);
    const hjSpoils = spoilsOn(hjLive).map((i) => i.flags.waluipedia.inventoryItem).sort();
    check('real packet: after the import Hjumpik carries the seven registry items, each flagged with its inventory id', hjSpoils.length === 7 && hjSpoils.includes('oc_soul_ring') && hjSpoils.includes('raventree_signet_ring') && hjSpoils.includes('woodfellow_library_card'), hjSpoils.join(', '));
    check('real packet: Waluigi has the Colour Division handcuffs, Toad Lee his diary pages', spoilsOn(game.actors.contents.find((a) => a.id === 'BmWNDwbxPQHU3Bbn')).some((i) => i.flags.waluipedia.inventoryItem === 'colour_division_handcuffs') && spoilsOn(game.actors.contents.find((a) => a.id === 'mEqlzuZoafEdiApl')).some((i) => i.flags.waluipedia.inventoryItem === 'toad_lee_diary_pages'));
    const coloured = game.folders.contents.filter((f) => f.color).length;
    check(`real packet: imports over the real world without failures (${r4.created.length} created, ${r4.updated.length} updated, ${r4.replaced.length} replaced)`, r4.failed.length === 0, JSON.stringify(r4.failed.slice(0, 3)));
    const eagerLive = game.actors.contents.find((a) => a.name === 'Eager');
    const badLeft = eagerLive ? eagerLive.items.contents.map((i) => i.toObject().system?.identifier).filter((v) => typeof v === 'string' && v && !/^[a-z0-9_-]+$/i.test(v)) : ['no Eager'];
    check('real packet: the identifiers the players broke are valid in the world afterwards (the suite repaired the packet; the diff update carried them over)', badLeft.length === 0 && r4.repaired.length === 0, badLeft.join());
    check('real packet: the website folders exist and are coloured', coloured >= 20 && game.folders.contents.some((f) => f.name === 'Bestiary' && f.color) && game.folders.contents.some((f) => f.name === 'Koopa Troop' && f.color === '#006400'), `${coloured} coloured`);
    check('real packet: the seven broken embedded documents (Eager ×5, Feyward Dan ×2) are repaired in place and the GM is told about the stand-ins', r4.embeddedRepaired === 7 && r4.notes.some((n) => n.actor.startsWith('Eager') && /species/.test(n.note)) && r4.notes.some((n) => n.actor.startsWith('Feyward Dan') && /species/.test(n.note)) && game.actors.contents.every((a) => a.items.invalidDocumentIds.size === 0), `${r4.embeddedRepaired} repaired; ${JSON.stringify(r4.notes)}`);
    const r5 = await mod.importPayload(packet, { checkImages: false, progress: false });
    check('real packet: a second import of the same packet changes nothing', r5.unchanged === r5.updated.length && r5.created.length === 0 && r5.failed.length === 0, mod.summarize(r5));
    const tidy = await mod.tidyFolders({});
    const occupiedNow = new Set(game.actors.contents.map((a) => a.folderId).filter(Boolean));
    const emptyLeft = game.folders.contents.filter((f) => !occupiedNow.has(f.id) && !game.folders.contents.some((g) => g.parentId === f.id));
    check(`real packet: the folders the first import left behind are tidied away (${tidy.foldersMerged.length} merged, ${tidy.foldersPruned.length} removed) and no empty folder remains`, tidy.foldersPruned.length >= 10 && emptyLeft.length === 0 && game.actors.size === n + r4.created.length, emptyLeft.map((f) => f.name).join(', '));
    console.log(`real packet: ${r4.created.length} created, ${moved} changed, ${r4.replaced.length} replaced, ${r4.foldersCreated.length} folders, ${coloured} coloured, ${r4.embeddedRepaired} repaired, ${r4.notes.length} notes; tidy: ${tidy.foldersMerged.length} merged, ${tidy.foldersPruned.length} removed → ${game.folders.size} folders; ${mod.summarize(r5)}`);
  }
}

// ------------------------------------------------- v1.6: the loader itself
{
  for (const k of Object.keys(hooks)) delete hooks[k];
  const modEntry = modules.get('waluipedia-mass-import');
  modEntry.api = null;
  modEntry.version = '1.2.0'; // what the GM's server had loaded at launch while 1.5.0 sat on disk
  const head = { links: [], querySelector: (sel) => head.links.find((l) => sel.includes('data-wmi-fresh')) ?? null, appendChild(el) { head.links.push(el); } };
  globalThis.document = { head, createElement: (tag) => ({ tag, dataset: {} }) };
  const warned = [];
  const prevWarn = ui.notifications.warn;
  ui.notifications.warn = (m) => warned.push(m);
  serverFiles.add('modules/waluipedia-mass-import/module.json');
  const prevFetch = globalThis.fetch;
  globalThis.fetch = async (url, init = {}) => (String(url).startsWith('modules/waluipedia-mass-import/module.json') ? { ok: true, status: 200, json: async () => ({ id: 'waluipedia-mass-import', version: '9.9.9' }) } : prevFetch(url, init));
  settings.set('waluipedia-mass-import.syncAuto', false);
  const logs = [];
  const prevLog = console.log;
  console.log = (...a) => { logs.push(a.join(' ')); };
  try {
    await import(pathToFileURL(path.join(MOD_DIR, 'scripts/mass-import.js')).href + '?loader-test');
    check('loader: the three hooks are registered the moment the script runs, before the core has arrived', ['init', 'ready', 'renderActorDirectory'].every((h) => hooks[h]?.length === 1));
    settings.clear();
    globalThis.Hooks.call('init');
    globalThis.Hooks.call('ready');
    const header = { html: '', querySelector: (sel) => (sel === '.wmi-buttons' && header.html ? {} : null), insertAdjacentHTML(w, h) { this.html += h; } };
    const rootEl = { querySelector: (sel) => (sel.includes('header-actions') ? header : null), querySelectorAll: () => [] };
    globalThis.Hooks.call('renderActorDirectory', {}, rootEl);
    await new Promise((r) => setTimeout(r, 50));
    check('loader → core: init registered the settings through the loader', settings.has('waluipedia-mass-import.defaultSource') && settings.get('waluipedia-mass-import.syncWorld') === 'midlands');
    check('loader → core: ready exposed the api and logged the running version', typeof modEntry.api?.importPayload === 'function' && modEntry.api.MODULE_ID === 'waluipedia-mass-import' && logs.some((l) => l.includes(`[waluipedia-mass-import] ${manifest.version} ready`)));
    check('ready: when Foundry loaded an older manifest the log says so and a fresh stylesheet is linked with a cache-busting query', logs.some((l) => l.includes('loaded the manifest of 1.2.0')) && head.links.length === 1 && new RegExp(`styles/mass-import\\.css\\?v=${manifest.version.replace(/\./g, '\\.')}-\\d+`).test(head.links[0].href) && mod.ensureFreshStyles() === false, head.links[0]?.href);
    check('ready: when module.json on disk is newer than the code running, the GM is warned to Setup → Launch World then Ctrl+F5', warned.length === 1 && /9\.9\.9 is installed/.test(warned[0]) && /Launch World/.test(warned[0]) && /Ctrl\+F5/.test(warned[0]), warned.join(' | '));
    check('loader → core: renderActorDirectory injected the Sync / Mass import / Mass export buttons', header.html.includes('wmi-sync') && header.html.includes('wmi-import') && header.html.includes('wmi-export'));
    const v = await mod.checkModuleVersion({ fresh: true });
    check('checkModuleVersion reports running, onDisk and what Foundry loaded', v.running === manifest.version && v.onDisk === '9.9.9' && v.loaded === '1.2.0' && v.stale === true, JSON.stringify(v));
    check('v1.7: the export-back hooks are wired at ready (create/update/delete × Actor/Item/ActiveEffect)', ['createActor', 'updateActor', 'deleteActor', 'createItem', 'updateItem', 'deleteItem', 'createActiveEffect', 'updateActiveEffect', 'deleteActiveEffect'].every((h) => (hooks[h]?.length ?? 0) >= 1), Object.keys(hooks).join());
  } finally {
    console.log = prevLog;
    ui.notifications.warn = prevWarn;
    globalThis.fetch = prevFetch;
    modEntry.version = manifest.version;
  }
}

console.log(`mass import module: ${ok.length} ok, ${fail.length} failed`);
for (const f of fail) console.log('  FAIL ' + f);
for (const o of ok) console.log('  ok   ' + o);
process.exit(fail.length ? 1 : 0);
