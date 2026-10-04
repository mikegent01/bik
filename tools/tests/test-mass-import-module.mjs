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
check('manifest loads the script and stylesheet', manifest.esmodules?.includes('scripts/mass-import.js') && manifest.styles?.includes('styles/mass-import.css'));
check('every manifest file exists', [...manifest.esmodules, ...manifest.styles].every((f) => fs.existsSync(path.join(MOD_DIR, f))));
check('compatibility spans v12..v14', Number(manifest.compatibility.minimum) <= 12 && Number(manifest.compatibility.verified) >= 14);
check('manifest + download URLs point at the module folder / zip', manifest.manifest.endsWith('/mass_import/module.json') && manifest.download.endsWith('/mass_import.zip'));
for (const m of ['export-all-actors.js', 'import-all-actors.js', 'import-peachs-castle-955.js']) {
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
check('injectButtons adds import + export buttons once', mod.injectButtons(fakeRoot) === true && clicks.sort().join() === '.wmi-export,.wmi-import' && mod.injectButtons(fakeRoot) === false);
game.user.isGM = false;
const playerHeader = { html: '', querySelector: () => null, insertAdjacentHTML(w, h) { this.html += h; } };
globalThis.Hooks.call('renderActorDirectory', {}, { querySelector: () => playerHeader });
check('players never see the buttons', playerHeader.html === '');
game.user.isGM = true;

// ----------------------------------------------------------- report html
const html = mod.reportHtml(rb);
check('report HTML escapes and lists missing images', html.includes('portraits/nope.png') && html.includes('Missing images (3)'));
check('summarize reads well', mod.summarize(r2) === '0 created, 2 updated');

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
