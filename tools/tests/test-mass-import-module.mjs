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
check('version 1.5 (automatic everything-sync + folder tidy + invalid-document repair, on top of diff updates, identifier repair, folder colours, tags, Data folders, review table, replace on type change)', /^1\.([5-9]|\d{2,})/.test(manifest.version) && /diffs/.test(manifest.description) && /chips/.test(manifest.description) && /Data/.test(manifest.description) && /same id/.test(manifest.description) && /by itself/.test(manifest.description) && /merges duplicate folders/.test(manifest.description) && /could not validate/.test(manifest.description), manifest.version);
check('manifest loads the script and stylesheet', manifest.esmodules?.includes('scripts/mass-import.js') && manifest.styles?.includes('styles/mass-import.css'));
const loaderText = fs.readFileSync(path.join(MOD_DIR, 'scripts/mass-import.js'), 'utf8');
check('v1.6: the entry Foundry loads is a tiny loader — it imports mass-import-core.js with a fresh query string (a newer install runs after a plain F5) and registers the three hooks synchronously', loaderText.split('\n').length < 40 && loaderText.includes('import(`./mass-import-core.js?v=${Date.now()}`)') && ['Hooks.once("init"', 'Hooks.once("ready"', 'Hooks.on("renderActorDirectory"'].every((h) => loaderText.includes(h)) && !/^import\s/m.test(loaderText) && fs.existsSync(path.join(MOD_DIR, 'scripts/mass-import-core.js')));
check('every manifest file exists', [...manifest.esmodules, ...manifest.styles].every((f) => fs.existsSync(path.join(MOD_DIR, f))));
check('compatibility spans v12..v14', Number(manifest.compatibility.minimum) <= 12 && Number(manifest.compatibility.verified) >= 14);
check('manifest + download URLs point at the module folder / zip', manifest.manifest.endsWith('/mass_import/module.json') && manifest.download.endsWith('/mass_import.zip'));
for (const m of ['export-all-actors.js', 'import-all-actors.js', 'import-peachs-castle-955.js', 'import-from-data-folder.js', 'export-to-data-folder.js', 'sync-from-waluipedia.js']) {
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
        // an invalid document can be updated (Foundry fetches it with {invalid: true}); once valid it joins the collection
        if (this.items.invalidDocumentIds.has(d._id)) {
          const src = this._source.items.find((i) => i._id === d._id);
          applyUpdate(src, d);
          if (!validItem(src)) throw new Error(`Item [${d._id}] validation errors: system.identifier`);
          this.items.invalidDocumentIds.delete(d._id);
          this.items.set(d._id, new Item(src));
          continue;
        }
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
check('init registers the sync settings with the documented defaults — automatic on, no scope, folder tidy on, a hidden last-stamp', settings.get('waluipedia-mass-import.syncWorld') === 'midlands' && !settings.has('waluipedia-mass-import.syncScope') && settings.get('waluipedia-mass-import.syncAuto') === true && settings.get('waluipedia-mass-import.syncMergeFolders') === true && settings.get('waluipedia-mass-import.syncPruneFolders') === true && settings.get('waluipedia-mass-import.syncPacketDir') === 'npc/waluipedia' && settings.get('waluipedia-mass-import.syncLauncher') === 'http://127.0.0.1:8765/' && settings.get('waluipedia-mass-import.syncBranch') === 'gh-pages' && settings.get('waluipedia-mass-import.syncReview') === false && settings.get('waluipedia-mass-import.syncLastStamp') === '');
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
check('summarize reads well (and says what was left alone)', /^0 created, 2 updated( \(\d unchanged\))?$/.test(mod.summarize(r2)), mod.summarize(r2));

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
  const dry = await mod.importPayload(promoted, { dryRun: true, checkImages: false });
  check('dry run reports the replacement without touching the actor', dry.replaced.length === 1 && dry.replaced[0].from === 'npc' && dry.replaced[0].to === 'character' && game.actors.get('S1aaaaaaaaaaaaaa').type === 'npc');
  const off = await mod.importPayload(promoted, { replaceOnTypeChange: false, checkImages: false });
  check('replaceOnTypeChange=false skips with the reason', off.skipped.length === 1 && /type differs/.test(off.skipped[0].reason) && game.actors.get('S1aaaaaaaaaaaaaa').type === 'npc');
  const rep = await mod.importPayload(promoted, { checkImages: false });
  const salam = game.actors.get('S1aaaaaaaaaaaaaa');
  check('the actor is recreated under the same id as a character', rep.replaced.length === 1 && rep.created.length === 0 && rep.updated.length === 0 && salam?.type === 'character' && game.actors.size === 1);
  check('…keeping the world folder and ownership (the players keep access)', salam.folderId === playersFolder.id && game.folders.size === 1 && salam.ownership.P1aaaaaaaaaaaaaa === 3 && salam.ownership.GMaaaaaaaaaaaaaa === 3, JSON.stringify({ folder: salam.folderId, want: playersFolder.id, own: salam.ownership }));
  check('…merging flags instead of wiping other modules', salam.flags['scene-packer']?.hash === 'abc' && salam.flags['waluipedia-sheets']?.promoted?.mode === 'convert');
  check('…with the new class item on board', salam.items.get('I8aaaaaaaaaaaaaa')?.name === 'Ranger' && salam.items.size === 2);
  check('summarize counts replacements', mod.summarize(rep) === '0 created, 0 updated, 1 replaced');
  check('report HTML lists the replacement', mod.reportHtml(rep).includes('Replaced — same id, new type (1)') && mod.reportHtml(rep).includes('npc → character'));
  const again = await mod.importPayload(promoted, { checkImages: false });
  check('a second import of the same packet is a plain update', again.replaced.length === 0 && again.updated.length === 1 && game.actors.size === 1);
  const own = await mod.importPayload({ actors: [{ ...promoted.actors[0], type: 'npc' }] }, { checkImages: false, overwriteOwnership: true });
  check('overwriteOwnership applies the import ownership on a replacement', own.replaced.length === 1 && game.actors.get('S1aaaaaaaaaaaaaa').ownership.P1aaaaaaaaaaaaaa === undefined);
  const legacy = structuredClone(promoted.actors[0]); delete legacy.flags['waluipedia-mass-import']; legacy.folder = 'nope000000000000';
  const rl = await mod.importPayload({ actors: [legacy] }, { checkImages: false });
  check('an entry with only an unresolvable folder id keeps the world folder on replacement', rl.replaced.length === 1 && game.actors.get('S1aaaaaaaaaaaaaa').type === 'character' && game.actors.get('S1aaaaaaaaaaaaaa').folderId === playersFolder.id);
  game.actors.clear(); game.folders.clear();
}

// ------------------------------------------------- one click: Sync (v1.3)
// The GM pressed Mass import on data/sheets.json and got an uncaught
// promise; then wanted "a single click: find the file, import, folders,
// changes, summary". The packet is looked for in the Data folder (where the
// suite publishes it), then on the launcher, then on GitHub via the committed
// manifest + actor files.
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
    && cands[2].extras.map((x) => x.label).join() === 'cast,era' && cands[2].extras[1].url.endsWith('/peachs-castle-955/import.json') && !('scope' in mod.SYNC_DEFAULTS), JSON.stringify(cands));
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
    if (ghFiles.has(key)) return { ok: true, status: 200, json: async () => structuredClone(ghFiles.get(key)) };
    return { ok: false, status: 404 };
  };
  const chats = [];
  globalThis.ChatMessage = { create: async (d) => { chats.push(d); return d; }, getWhisperRecipients: () => [{ id: 'GMaaaaaaaaaaaaaa' }] };

  const r = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  check('sync falls through Data and the launcher to GitHub', r && r.sync.used.source === 'github' && r.sync.attempts.map((a) => `${a.source}:${a.ok}`).join() === 'data:false,launcher:false,github:true', JSON.stringify(r?.sync?.attempts));
  check('the GitHub route fetches every file the manifest lists, then the cast and era packets, and merges them (the era packet 404s → ignored, not fatal)', r.files.length === 5 && log.some((u) => u.includes('aemenor')) && r.sync.merged?.map((m) => `${m.label}:${m.actors}/${m.omitted}`).join() === 'world:5/0,cast:1/1' && r.ignored.some((i) => i.path.endsWith('peachs-castle-955/import.json')), JSON.stringify([r.files, r.sync.merged, r.ignored]));
  check('…and imports them into their folders (players in Players, the manor NPC in its directory, the generated Koopa in a coloured Koopa Troop; the cast\'s Bowser left out for the world\'s)', ['Bowser', 'Eager', 'Waluigi', 'Hjumpik Deldkur'].every((n) => game.actors.contents.find((a) => a.name === n)?.folder?.name === 'Players')
    && game.actors.contents.find((a) => a.name === 'Aemenor Evenflight')?.folder?.name === 'Characters of the Ruined Manor' && game.actors.contents.find((a) => a.name === 'Koopa Commander')?.folder?.color === '#006400'
    && game.actors.contents.filter((a) => a.name === 'Bowser').length === 1 && game.actors.get('Bo1aaaaaaaaaaaaa'), game.actors.contents.map((a) => `${a.name}:${a.folder?.name}`).join());
  check('Bowser: NPC statblock replaced by the character sheet under the same id, ownership kept', r.replaced.length === 1 && game.actors.get('Bo1aaaaaaaaaaaaa').type === 'character' && game.actors.get('Bo1aaaaaaaaaaaaa').ownership.P1aaaaaaaaaaaaaa === 3);
  const rows = Object.fromEntries(r.changes.map((c) => [c.name, c]));
  check('summary row: Bowser replaced — type, XP, class line', rows.Bowser.status === 'replaced' && rows.Bowser.notes.includes('npc → character') && rows.Bowser.notes.includes('XP — → 35,292') && rows.Bowser.notes.includes('Fighter 8'), JSON.stringify(rows.Bowser));
  check('summary row: Eager — the spoil arrived and she moved into Players', rows.Eager.status === 'updated' && rows.Eager.notes.includes('+ The Electric Sphere') && rows.Eager.notes.includes('moved to Players'), JSON.stringify(rows.Eager));
  check('summary row: Waluigi unchanged', rows.Waluigi.status === 'unchanged' && rows.Waluigi.notes.length === 0, JSON.stringify(rows.Waluigi));
  check('summary row: Hjumpik new, with the level-up the ledger allows (a hint, not a change)', rows['Hjumpik Deldkur'].status === 'new' && rows['Hjumpik Deldkur'].levelUp === 'ledger level 7 — level up (sheet is level 6)' && !rows['Hjumpik Deldkur'].notes.some((n) => n.startsWith('ledger')), JSON.stringify(rows['Hjumpik Deldkur']));
  const sh = mod.syncSummaryHtml(r);
  check('summary HTML: counts, level-up banner, the source, what each packet contributed, the module version, where it looked', sh.includes('3 created, 2 updated, 1 replaced') && sh.includes('Level up at the table') && sh.includes('Hjumpik Deldkur') && sh.includes('GitHub (gh-pages)') && sh.includes('export 2026-10-04T17:21:43.770Z') && sh.includes('✘ Foundry Data folder') && sh.includes('✔ GitHub') && sh.includes('cast 1 (1 already in an earlier part)') && sh.includes(`module ${mod.MODULE_VERSION}`) && !sh.includes('wmi-stale'), sh.slice(0, 400));
  check('the sync remembers the packet it synced (world setting)', settings.get('waluipedia-mass-import.syncLastStamp') === r.sync.stamp && r.sync.stamp.startsWith('github:'));
  check('the summary is whispered to the GMs as a chat message', chats.length === 1 && chats[0].whisper.join() === 'GMaaaaaaaaaaaaaa' && chats[0].content.includes('Replaced'));

  // second click: Data now has the packet (the suite ran) — nothing changes, Data wins, the stamps show
  dataHas = true; log.length = 0;
  const r2 = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  check('with the packet published, Sync reads the Data folder first and never touches the network (the module.json version check is same-origin)', r2.sync.used.source === 'data' && !log.some((u) => u.startsWith('http')) && r2.sync.info?.publishedAt === '2026-10-04T18:00:00+0000' && r2.sync.stamp === `data:${packetsJson.digest}`, JSON.stringify(log.filter((u) => u.startsWith('http'))));
  check('a second sync of the same actors changes nothing and says so (the ledger hint stays)', r2.changes.every((c) => c.status === 'unchanged') && r2.replaced.length === 0 && r2.created.length === 0 && game.actors.size === 6 && r2.changes.find((c) => c.name === 'Hjumpik Deldkur').levelUp !== null, JSON.stringify(r2.changes.map((c) => [c.name, c.status, c.notes])));
  check('dry run syncs report without writing or chatting', (await mod.syncFromWaluipedia({ options: { checkImages: false, dryRun: true } })).dryRun === true && chats.length === 2);

  // the automatic sync (world load): once per published packet
  settings.set('waluipedia-mass-import.syncAuto', true);
  const dialogs = [];
  const prevDialog = globalThis.Dialog;
  const auto1 = await mod.autoSync({ delay: 0 });
  check('automatic sync of a packet already synced does nothing (same digest) and opens nothing', auto1?.skipped === true && auto1.stamp === `data:${packetsJson.digest}`, JSON.stringify(auto1));
  packetsJson.digest = 'd1gest000000000000000000000000000000002';
  const auto2 = await mod.autoSync({ delay: 0 });
  check('a newly published packet (new digest) is synced on load, marked automatic, and remembered', auto2?.sync?.trigger === 'auto' && auto2.sync.stamp.endsWith('0002') && settings.get('waluipedia-mass-import.syncLastStamp') === auto2.sync.stamp, JSON.stringify(auto2?.sync?.stamp));
  settings.set('waluipedia-mass-import.syncAuto', false);
  check('automatic sync respects the setting (off → nothing)', (await mod.autoSync({ delay: 0 })) === null);
  game.user.isGM = false;
  settings.set('waluipedia-mass-import.syncAuto', true);
  check('…and never runs for a player', (await mod.autoSync({ delay: 0 })) === null);
  game.user.isGM = true; settings.set('waluipedia-mass-import.syncAuto', false);
  globalThis.Dialog = prevDialog;

  // stale code: the suite installed a newer module while this world still runs the old one
  onDiskVersion = '9.9.9';
  const warned = [];
  const prevWarn = ui.notifications.warn;
  ui.notifications.warn = (m) => warned.push(m);
  const stale = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  ui.notifications.warn = prevWarn;
  check('a newer module.json on disk than the running code is called out (notification + summary banner: Setup → relaunch, Ctrl+F5)', stale.sync.version.stale === true && stale.sync.version.onDisk === '9.9.9' && warned.some((m) => /relaunch/.test(m) && /9\.9\.9/.test(m)) && mod.syncSummaryHtml(stale).includes('wmi-stale') && /relaunch the world/.test(mod.syncSummaryHtml(stale)), JSON.stringify(warned));
  onDiskVersion = mod.MODULE_VERSION;
  check('checkModuleVersion is quiet when they match', (await mod.checkModuleVersion()).stale === false);

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
  check('docDiff: flags, ownership and the activities map get -=key deletions', JSON.stringify(d({ flags: { x: { a: 1, b: 2 } }, ownership: { u1: 3 }, system: { activities: { A1: { t: 1 }, A2: { t: 2 } } } }, { flags: { x: { a: 1 } }, ownership: {}, system: { activities: { A1: { t: 1 } } } })) === '{"flags":{"x":{"-=b":null}},"ownership":{"-=u1":null},"system":{"activities":{"-=A2":null}}}');
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

  // an invalid document that cannot be updated into shape is replaced under its id
  const stubborn = await Actor.create({ _id: 'St1aaaaaaaaaaaaa', name: 'Stubborn', type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad1aaaaaaaaaaaa', name: 'Odd Thing', type: 'feat', img: 'icons/svg/item-bag.svg', system: { identifier: 'odd—thing' } }] }, { keepId: true });
  const realUpdate = stubborn.updateEmbeddedDocuments.bind(stubborn);
  stubborn.updateEmbeddedDocuments = async (type, arr, opts) => { if (arr.some((d) => d._id === 'Bad1aaaaaaaaaaaa')) throw new Error('Item [Bad1aaaaaaaaaaaa] validation errors'); return realUpdate(type, arr, opts); };
  const stubbornRep = await mod.importPayload({ actors: [{ _id: 'St1aaaaaaaaaaaaa', name: 'Stubborn', type: 'npc', img: 'icons/svg/mystery-man.svg', system: {}, flags: {}, items: [
    { _id: 'Bad1aaaaaaaaaaaa', name: 'Odd Thing', type: 'feat', img: 'icons/svg/item-bag.svg', system: { identifier: 'odd-thing' } }] }] }, { checkImages: false, progress: false });
  check('v1.5: when the update is refused the broken document is deleted and created again under its own id', stubbornRep.failed.length === 0 && stubborn.items.get('Bad1aaaaaaaaaaaa')?.toObject().system.identifier === 'odd-thing' && stubborn.items.invalidDocumentIds.size === 0 && stubbornRep.updated[0].items.repaired === 1, JSON.stringify([stubbornRep.failed, stubbornRep.updated[0].items]));

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
    const r4 = await mod.importPayload(packet, { checkImages: false, progress: false });
    const moved = r4.updated.filter((u) => u.changed).length;
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
    check('ready: when Foundry loaded an older manifest the log says so and a fresh stylesheet is linked with a cache-busting query', logs.some((l) => l.includes('loaded the manifest of 1.2.0')) && head.links.length === 1 && /styles\/mass-import\.css\?v=1\.6\.0-\d+/.test(head.links[0].href) && mod.ensureFreshStyles() === false);
    check('ready: when module.json on disk is newer than the code running, the GM is warned to Setup → Launch World then Ctrl+F5', warned.length === 1 && /9\.9\.9 is installed/.test(warned[0]) && /Launch World/.test(warned[0]) && /Ctrl\+F5/.test(warned[0]), warned.join(' | '));
    check('loader → core: renderActorDirectory injected the Sync / Mass import / Mass export buttons', header.html.includes('wmi-sync') && header.html.includes('wmi-import') && header.html.includes('wmi-export'));
    const v = await mod.checkModuleVersion();
    check('checkModuleVersion reports running, onDisk and what Foundry loaded', v.running === manifest.version && v.onDisk === '9.9.9' && v.loaded === '1.2.0' && v.stale === true, JSON.stringify(v));
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
