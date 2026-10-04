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
check('version 1.3 (Data folders + review table + replace on type change + one-click Sync)', /^1\.([3-9]|\d{2,})/.test(manifest.version) && /Data/.test(manifest.description) && /same id/.test(manifest.description) && /[Ss]ync/.test(manifest.description), manifest.version);
check('manifest loads the script and stylesheet', manifest.esmodules?.includes('scripts/mass-import.js') && manifest.styles?.includes('styles/mass-import.css'));
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
}
class Item {
  constructor(data) { this._data = structuredClone(data); this.id = data._id; this.name = data.name; }
  toObject() { return structuredClone(this._data); }
}
class Actor {
  constructor(data) {
    this._data = structuredClone(data);
    this.id = data._id; this.name = data.name; this.type = data.type; this.flags = structuredClone(data.flags ?? {});
    this.items = new Coll((data.items ?? []).map((i) => [i._id, new Item(i)]));
    this.effects = new Coll((data.effects ?? []).map((e) => [e._id, e]));
    this.folderId = data.folder ?? null;
    this.updates = 0;
  }
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
    const { folder, items, effects, ...rest } = data;
    Object.assign(this._data, rest);
    if (rest.name) this.name = rest.name;
    if (rest.flags) this.flags = structuredClone(rest.flags);
    if (folder !== undefined) this.folderId = folder;
    return this;
  }
  async createEmbeddedDocuments(type, arr, opts = {}) {
    for (const d of arr) {
      const id = (opts.keepId && d._id) ? d._id : newId();
      if (type === 'Item') this.items.set(id, new Item({ ...d, _id: id })); else this.effects.set(id, { ...d, _id: id });
    }
  }
  async updateEmbeddedDocuments(type, arr) {
    for (const d of arr) {
      if (type === 'Item') this.items.set(d._id, new Item(d)); else this.effects.set(d._id, structuredClone(d));
    }
  }
  async deleteEmbeddedDocuments(type, ids) { for (const id of ids) (type === 'Item' ? this.items : this.effects).delete(id); }
}
const game = {
  world: { id: 'test-world' }, system: { id: 'dnd5e', version: '5.3.3' }, version: '13.346',
  user: { isGM: true },
  actors: new Coll(), folders: new Coll(), modules,
  settings: { register: (scope, key, cfg) => settings.set(`${scope}.${key}`, cfg.default), get: (scope, key) => settings.get(`${scope}.${key}`) },
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
  return { ok: serverFiles.has(decodeURI(url)), status: serverFiles.has(decodeURI(url)) ? 200 : 404 };
};
let remotePayload = null;

// --------------------------------------------------------------- load it
const mod = await import(pathToFileURL(path.join(MOD_DIR, 'scripts/mass-import.js')).href);
check('module registers init/ready/renderActorDirectory hooks', ['init', 'ready', 'renderActorDirectory'].every((h) => hooks[h]?.length));
globalThis.Hooks.call('init');
check('init registers the defaultSource world setting', settings.has('waluipedia-mass-import.defaultSource'));
check('init registers the sync settings with the documented defaults', settings.get('waluipedia-mass-import.syncWorld') === 'midlands' && settings.get('waluipedia-mass-import.syncScope') === 'players' && settings.get('waluipedia-mass-import.syncPacketDir') === 'npc/waluipedia' && settings.get('waluipedia-mass-import.syncLauncher') === 'http://127.0.0.1:8765/' && settings.get('waluipedia-mass-import.syncBranch') === 'gh-pages' && settings.get('waluipedia-mass-import.syncReview') === false);
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
check('summarize reads well', mod.summarize(r2) === '0 created, 2 updated');

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
  check('the site\'s sheets.json is refused with a message that names Sync and the right file', /sheet index/.test(msg) && /Sync/.test(msg) && /players-import\.json/.test(msg), msg);
  check('isSheetIndex / isManifest tell the two apart from packets', mod.isSheetIndex(sheetIndex) && !mod.isManifest(sheetIndex) && mod.isManifest({ actors: [{ name: 'X', type: 'npc', _id: 'A', file: 'Players/x.json' }] }) && !mod.isManifest({ actors: [{ name: 'X', type: 'npc', _id: 'A', system: {} }] }));
  let mmsg = ''; try { mod.normalizeImport({ format: 'waluipedia-actors/1', actors: [{ name: 'X', type: 'npc', _id: 'A', file: 'Players/x.json' }] }); } catch (e) { mmsg = e.message; }
  check('a manifest uploaded as a file explains itself instead of importing empty actors', /manifest/.test(mmsg) && /next to it/.test(mmsg), mmsg);

  const cands = mod.syncCandidates({ world: 'midlands', scope: 'players', packetDir: 'npc/waluipedia', launcher: 'http://127.0.0.1:8765', branch: 'gh-pages' });
  check('sync looks in Data, then the launcher, then GitHub — in that order', cands.map((c) => c.source).join() === 'data,launcher,github'
    && cands[0].url === 'npc/waluipedia/midlands/players-import.json' && cands[0].info === 'npc/waluipedia/midlands/packets.json'
    && cands[1].url === 'http://127.0.0.1:8765/Reputation-Matrix2/actors/worlds/midlands/players-import.json'
    && cands[2].url === 'https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/worlds/midlands/manifest.json' && cands[2].manifest === true && cands[2].folder === 'Players', JSON.stringify(cands));
  const wc = mod.syncCandidates({ scope: 'world' });
  check('scope=world takes the whole import.json and the whole manifest', wc[0].url === 'npc/waluipedia/midlands/import.json' && wc[2].folder === null);
  const cc = mod.syncCandidates({ scope: 'cast', branch: 'main' });
  check('scope=cast takes the committed cast packet (branch honoured)', cc[0].url === 'npc/waluipedia/cast/import.json' && cc[2].url === 'https://raw.githubusercontent.com/mikegent01/bik/main/Reputation-Matrix2/actors/cast/import.json' && !cc[2].manifest);

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
  const packetsJson = { format: 'waluipedia-packets/1', world: 'midlands', exportedAt: '2026-10-04T17:21:43.770Z', publishedAt: '2026-10-04T18:00:00+0000' };

  // Data has nothing, the launcher is down, GitHub has the manifest + files
  const ghBase = 'https://raw.githubusercontent.com/mikegent01/bik/gh-pages/Reputation-Matrix2/actors/worlds/midlands/';
  const ghFiles = new Map([[`${ghBase}manifest.json`, { format: 'waluipedia-actors/1', exportedFrom: 'midlands', exportedAt: '2026-10-04T17:21:43.770Z',
    actors: [...packet.actors.map((a) => ({ name: a.name, type: a.type, _id: a._id, file: `Players/fvtt-Actor-${a.name.toLowerCase().replace(/[^a-z]+/g, '-')}-${a._id}.json` })),
      { name: 'Aemenor Evenflight', type: 'npc', _id: 'Ae1aaaaaaaaaaaaa', file: 'A House Divided/Characters of the Ruined Manor/fvtt-Actor-aemenor.json' }] }]]);
  for (const a of packet.actors) ghFiles.set(`${ghBase}Players/fvtt-Actor-${a.name.toLowerCase().replace(/[^a-z]+/g, '-')}-${a._id}.json`, { ...a, flags: { 'waluipedia-sheets': a.flags['waluipedia-sheets'] } });
  const prevFetch = globalThis.fetch;
  const log = [];
  let dataHas = false;
  globalThis.fetch = async (url, init = {}) => {
    const key = decodeURI(url);
    log.push(key);
    if ((init.method ?? 'GET') === 'HEAD') return prevFetch(url, init);
    if (key === 'npc/waluipedia/midlands/players-import.json' && dataHas) return { ok: true, status: 200, json: async () => structuredClone(packet) };
    if (key === 'npc/waluipedia/midlands/packets.json' && dataHas) return { ok: true, status: 200, json: async () => packetsJson };
    if (key.startsWith('http://127.0.0.1:8765/')) throw new TypeError('Failed to fetch');
    if (ghFiles.has(key)) return { ok: true, status: 200, json: async () => structuredClone(ghFiles.get(key)) };
    return { ok: false, status: 404 };
  };
  const chats = [];
  globalThis.ChatMessage = { create: async (d) => { chats.push(d); return d; }, getWhisperRecipients: () => [{ id: 'GMaaaaaaaaaaaaaa' }] };

  const r = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  check('sync falls through Data and the launcher to GitHub', r && r.sync.used.source === 'github' && r.sync.attempts.map((a) => `${a.source}:${a.ok}`).join() === 'data:false,launcher:false,github:true', JSON.stringify(r?.sync?.attempts));
  check('the GitHub route fetches only the Players files the manifest lists', r.files.length === 4 && r.files.every((f) => f.startsWith('Players/')) && !log.some((u) => u.includes('aemenor')));
  check('…and imports them into the Players folder (no root dump)', game.actors.contents.every((a) => a.folder?.name === 'Players') && game.folders.size === 1, game.actors.contents.map((a) => `${a.name}:${a.folder?.name}`).join());
  check('Bowser: NPC statblock replaced by the character sheet under the same id, ownership kept', r.replaced.length === 1 && game.actors.get('Bo1aaaaaaaaaaaaa').type === 'character' && game.actors.get('Bo1aaaaaaaaaaaaa').ownership.P1aaaaaaaaaaaaaa === 3);
  const rows = Object.fromEntries(r.changes.map((c) => [c.name, c]));
  check('summary row: Bowser replaced — type, XP, class line', rows.Bowser.status === 'replaced' && rows.Bowser.notes.includes('npc → character') && rows.Bowser.notes.includes('XP — → 35,292') && rows.Bowser.notes.includes('Fighter 8'), JSON.stringify(rows.Bowser));
  check('summary row: Eager — the spoil arrived and she moved into Players', rows.Eager.status === 'updated' && rows.Eager.notes.includes('+ The Electric Sphere') && rows.Eager.notes.includes('moved to Players'), JSON.stringify(rows.Eager));
  check('summary row: Waluigi unchanged', rows.Waluigi.status === 'unchanged' && rows.Waluigi.notes.length === 0, JSON.stringify(rows.Waluigi));
  check('summary row: Hjumpik new, with the level-up the ledger allows (a hint, not a change)', rows['Hjumpik Deldkur'].status === 'new' && rows['Hjumpik Deldkur'].levelUp === 'ledger level 7 — level up (sheet is level 6)' && !rows['Hjumpik Deldkur'].notes.some((n) => n.startsWith('ledger')), JSON.stringify(rows['Hjumpik Deldkur']));
  const sh = mod.syncSummaryHtml(r);
  check('summary HTML: counts, level-up banner, the source, where it looked', sh.includes('1 created, 2 updated, 1 replaced') && sh.includes('Level up at the table') && sh.includes('Hjumpik Deldkur') && sh.includes('GitHub (gh-pages)') && sh.includes('export 2026-10-04T17:21:43.770Z') && sh.includes('✘ Foundry Data folder') && sh.includes('✔ GitHub'));
  check('the summary is whispered to the GMs as a chat message', chats.length === 1 && chats[0].whisper.join() === 'GMaaaaaaaaaaaaaa' && chats[0].content.includes('Replaced'));

  // second click: Data now has the packet (the suite ran) — nothing changes, Data wins, the stamps show
  dataHas = true; log.length = 0;
  const r2 = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  check('with the packet published, Sync reads the Data folder first and never touches the network', r2.sync.used.source === 'data' && !log.some((u) => u.startsWith('http')) && r2.sync.info?.publishedAt === '2026-10-04T18:00:00+0000');
  check('a second sync of the same packet changes nothing and says so (the ledger hint stays)', r2.changes.every((c) => c.status === 'unchanged') && r2.replaced.length === 0 && r2.created.length === 0 && game.actors.size === 4 && r2.changes.find((c) => c.name === 'Hjumpik Deldkur').levelUp !== null, JSON.stringify(r2.changes.map((c) => [c.name, c.status, c.notes])));
  check('dry run syncs report without writing or chatting', (await mod.syncFromWaluipedia({ options: { checkImages: false, dryRun: true } })).dryRun === true && chats.length === 2);

  // nothing anywhere: a help dialog, no exception, nothing changed
  dataHas = false; ghFiles.clear();
  const none = await mod.syncFromWaluipedia({ options: { checkImages: false } });
  check('with no packet anywhere Sync returns null, changes nothing and names every place it looked', none === null && game.actors.size === 4);
  check('syncHelpHtml tells the GM what to run', /start\.py/.test(mod.syncHelpHtml([{ label: 'Foundry Data folder', url: 'x', error: 'HTTP 404' }], mod.syncSettings())) && /--foundry-data/.test(mod.syncHelpHtml([], mod.syncSettings())));
  globalThis.fetch = prevFetch;
  delete globalThis.ChatMessage;
  game.actors.clear(); game.folders.clear();
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
  check('real export: image check runs over every path without throwing', r3.failed.length === 0);
  console.log(`real export: ${n} actors, ${game.folders.size} folders created, ${r3.missingImages.length} image paths not on the (fake) server, ${Date.now() - t0} ms`);
}

console.log(`mass import module: ${ok.length} ok, ${fail.length} failed`);
for (const f of fail) console.log('  FAIL ' + f);
for (const o of ok) console.log('  ok   ' + o);
process.exit(fail.length ? 1 : 0);
