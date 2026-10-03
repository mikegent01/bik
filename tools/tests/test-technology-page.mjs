/**
 * Discovered Technology — the ledger, the entry page, the tension board.
 *
 * The section replaces the old procedural research tree with a ledger of
 * technology the filings describe. These tests pin the contract:
 *
 *   data      every entry cites a real article, carries a verbatim quote
 *             (check-technology.py proves the words; this proves the shape),
 *             and names a recipe tech-models.js can build
 *   tension   derived, not authored: pressure × recency, capped per entry,
 *             summed per territory, banded with the old wheel's vocabulary;
 *             the board for 955 BF cannot see the 1035 BF helicopter
 *   views     ledger / entry / tension / territory render against the real
 *             JSON with the same stub globals index.html provides, and the
 *             Rot-Zone event page gets a Technology tab naming the pistol
 *   wiring    index.html loads the scripts, carries the data key, the route,
 *             the sidebar link, the apparatus tab and the search kind
 *
 * Run: node tools/tests/test-technology-page.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const DATA = path.join(ROOT, 'Reputation-Matrix2', 'data');
const load = n => JSON.parse(fs.readFileSync(path.join(DATA, `${n}.json`), 'utf8'));

let pass = 0, fail = 0;
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};

/* ---------- boot the two scripts against a stub window ---------- */
const content = { innerHTML: '' };
const sidebar = { last: null };
const router = { last: null, go(h) { this.last = h; } };
const esc = s => (s == null ? '' : String(s)).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const win = {
  DATA: {
    technology: load('technology'), events: load('events'), nations: load('nations'),
    locations: load('locations'), characters: load('characters'), factions: load('factions'),
  },
  CUR: { year: 1040 },
  esc, el: id => (id === 'content' ? content : { innerHTML: '' }),
  Router: router, renderSidebar: k => { sidebar.last = k; },
  scrollTo() {}, location: { hash: '#/technology' },
};
win.window = win;
new Function('window', fs.readFileSync(path.join(ROOT, 'assets/technology/tech-models.js'), 'utf8'))(win);
new Function('window', fs.readFileSync(path.join(ROOT, 'assets/technology/technology.js'), 'utf8'))(win);
const TECH = win.TECH, MODELS = win.TECH_MODELS;

console.log('\n# data');
const entries = TECH.entries();
check('ledger has at least 20 entries', entries.length >= 20, String(entries.length));
check('every entry names a recipe tech-models.js defines', entries.every(e => MODELS.recipes[e.model.recipe]));
check('every entry carries at least one quote with a source event', entries.every(e => (e.quotes || []).length && e.quotes.every(q => q.event && q.text)));
const evIds = new Set(win.DATA.events.map(e => e.id));
check('every firstSeen event exists', entries.every(e => evIds.has(e.firstSeen.event)));
check('Debt Siege arc is on the ledger (helicopter, claw, pistol)',
  ['tech_wario_transport_helicopter', 'tech_w_stamped_mechanical_claw', 'tech_paulos_courier_pistol'].every(id => TECH.byId(id)));
check('forEvent(rot-zone) lists the pistol first-seen and the helicopter seen-again',
  TECH.forEvent('the_rot_zone_at_star_hill').map(e => e.id).includes('tech_paulos_courier_pistol')
  && TECH.forEvent('the_rot_zone_at_star_hill').map(e => e.id).includes('tech_wario_transport_helicopter'));
check('territoryKey: nation, then region, then plane',
  TECH.territoryKey({ territory: { nation: 'mushroom_kingdom', region: 'x', plane: 'shadow' } }) === 'mushroom_kingdom'
  && TECH.territoryKey({ territory: { region: 'eastern_midlands', plane: 'material' } }) === 'region:eastern_midlands'
  && TECH.territoryKey({ territory: { plane: 'shadow' } }) === 'plane:shadow');
check('territoryName resolves nations, regions and planes',
  TECH.territoryName('mushroom_kingdom') === 'The Mushroom Kingdom'
  && /Eastern Midlands/.test(TECH.territoryName('region:eastern_midlands'))
  && /Shadowfell/.test(TECH.territoryName('plane:shadow')));

console.log('\n# models');
for (const name of MODELS.names) {
  const parts = MODELS.recipes[name]({});
  const okParts = Array.isArray(parts) && parts.length >= 3 && parts.every(p => ['box', 'cyl', 'sph', 'cone', 'torus'].includes(p.s) && Array.isArray(p.d) && Array.isArray(p.p) && p.p.length === 3);
  if (!okParts) check(`recipe ${name} is well-formed`, false);
}
check(`all ${MODELS.names.length} recipes are well-formed primitive lists`, true);
/* a tiny THREE stand-in proves build() only needs the documented surface */
class V3 { constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; } set(x, y, z) { this.x = x; this.y = y; this.z = z; return this; } sub(v) { this.x -= v.x; this.y -= v.y; this.z -= v.z; return this; } }
class Obj { constructor() { this.position = new V3(); this.rotation = new V3(); this.scale = new V3(1, 1, 1); this.children = []; } add(c) { this.children.push(c); } }
const FakeTHREE = {
  Group: class extends Obj {}, Mesh: class extends Obj { constructor(g, m) { super(); this.geometry = g; this.material = m; } },
  BoxGeometry: class {}, CylinderGeometry: class {}, SphereGeometry: class {}, ConeGeometry: class {}, TorusGeometry: class {},
  MeshStandardMaterial: class { constructor(o) { Object.assign(this, o); } },
  Vector3: V3,
  Box3: class { setFromObject() { return this; } getCenter(v) { return v.set(0.1, 0.2, 0.3); } getSize(v) { return v.set(2, 1, 1); } },
};
const built = MODELS.build(FakeTHREE, 'helicopter', { body: '#e0b400' });
check('build() returns a centred group with a radius and an animate()', built.group.children.length > 5 && built.radius === 1 && typeof built.animate === 'function');
check('build() falls back to a default recipe for an unknown name', MODELS.build(FakeTHREE, 'no_such_recipe', {}).group.children.length > 0);
built.animate(0.1);
check('rotor parts spin when animated', built.group.children.some(m => m.rotation.y > 0 || m.rotation.x > 0));

console.log('\n# tension');
const W = win.DATA.technology.meta.recencyWeights;
check('recency weights fall with distance and vanish for the future',
  TECH.recencyWeight(1040, 1040) === W.sameYear && TECH.recencyWeight(1039, 1040) === W.oneYear
  && TECH.recencyWeight(1036, 1040) === W.withinFiveYears && TECH.recencyWeight(955, 1040) === W.older
  && TECH.recencyWeight(1045, 1040) === 0 && TECH.recencyWeight(null, 1040) === W.older);
check('bands are ordered Calm → Discovery → Tension → Conflict → Crisis',
  TECH.bandFor(-5).id === 'calm' && TECH.bandFor(0).id === 'discovery' && TECH.bandFor(2).id === 'tension'
  && TECH.bandFor(5).id === 'conflict' && TECH.bandFor(9).id === 'crisis');
const t1035 = TECH.computeTension({ asOfYear: 1035 });
const mk1035 = t1035.territories.find(t => t.key === 'mushroom_kingdom');
check('1035 BF: the Debt Siege night puts the Mushroom Kingdom at Crisis', mk1035 && mk1035.band.id === 'crisis', mk1035 && `${mk1035.score} ${mk1035.band.id}`);
check('1035 BF: the claw is the top driver and links to its filing',
  mk1035 && mk1035.drivers[0].id === 'tech_w_stamped_mechanical_claw' && mk1035.drivers[0].event === 'the_debt_siege_and_the_sixty_thirty_split');
const heli = mk1035 && mk1035.drivers.find(d => d.id === 'tech_wario_transport_helicopter');
check('a thing seen twice in one year is capped at 1.5 × pressure', heli && heli.contribution === 3 && heli.weight === 2);
const t955 = TECH.computeTension({ asOfYear: 955 });
const mk955 = t955.territories.find(t => t.key === 'mushroom_kingdom');
check('955 BF: the board cannot see the 1035 helicopter', mk955 && !mk955.drivers.some(d => d.id === 'tech_wario_transport_helicopter'));
check('955 BF: the press and the Maglev pull the Kingdom below zero', mk955 && mk955.score < 0 && mk955.band.id !== 'crisis', mk955 && String(mk955.score));
const now = TECH.computeTension({});
check('default year is the archive clock (1040 BF)', now.asOfYear === 1040);
check('territories sort by score, highest first', now.territories.every((t, i, a) => i === 0 || a[i - 1].score >= t.score));
check('the contested Eastern Midlands is its own territory, not the whole material plane', now.territories.some(t => t.key === 'region:eastern_midlands'));
check('pairs aggregate faction strain with reasons that name the entry',
  now.pairs.length > 0 && now.pairs.every(p => p.a && p.b && p.reasons.length && p.reasons.every(r => r.entry && r.why)) && now.pairs.every((p, i, a) => i === 0 || a[i - 1].weight >= p.weight));
const wm = now.pairs.find(p => [p.a, p.b].sort().join('|') === 'mushroom_regency|wario_enterprise');
check('Wario Enterprise ↔ the Regency strain comes from the Debt Siege arc', wm && wm.reasons.some(r => r.entry === 'tech_w_stamped_mechanical_claw'));
check('world reading carries a band, a score and counts', now.world && now.world.band && typeof now.world.score === 'number' && now.world.entries > 0);
check('years on record include every filed year and the clock', now.years.includes(955) && now.years.includes(1035) && now.years.includes(1040) && now.years.every((y, i, a) => i === 0 || a[i - 1] < y));
check('computeTensionForTerritory returns null for ground with nothing filed', TECH.computeTensionForTerritory('nowhere', 1040) === null);

console.log('\n# views');
TECH.view_technology('');
let html = content.innerHTML;
check('ledger renders with the sidebar key technology', sidebar.last === 'technology');
check('ledger shows the hero, the pressure strip, the filters and a tile per entry',
  html.includes('Discovered Technology') && html.includes('Where the pressure is') && html.includes('tech-filters') && (html.match(/class="techtile"/g) || []).length === entries.length);
check('tiles name the first-seen article and the territory', html.includes('The Debt Siege and the Sixty-Thirty Split') && html.includes('📍 The Mushroom Kingdom'));
check('ledger mounts a featured viewer host with a fallback (no WebGL here)', html.includes('id="tech-viewer-featured"') && html.includes('tech-viewer-fallback'));
TECH.setFilter('kind', 'weapon');
html = content.innerHTML;
check('kind filter narrows the grid to weapons only', (html.match(/class="techtile"/g) || []).length === entries.filter(e => e.kind === 'weapon').length && html.includes('tech-chip is-on'));
TECH.setFilter('kind', '');
TECH.setFilter('q', 'parapet');
check('search filter matches on the record text', (content.innerHTML.match(/class="techtile"/g) || []).length >= 1);
TECH.setFilter('q', '');

TECH.view_technology('tech_paulos_courier_pistol');
html = content.innerHTML;
check('entry page: title, metabar, viewer host and the verbatim quote', html.includes("A Courier&#39;s Cheap Pistol") && html.includes('id="tech-viewer-entry"') && html.includes('The pistol clicked.'));
check('entry page: links the source article and the nation', html.includes("#/article/the_rot_zone_at_star_hill") && html.includes('#/atlas/mushroom_kingdom'));
check('entry page: shows the holder by name and the pressure', html.includes('Paulo') && html.includes('+2'));
check('entry page: files nearby entries from the same ground or filing', html.includes('Wario&#39;s Transport Helicopter'));
check('entry page: band chip for the territory as of the clock', html.includes('tech-band'));

TECH.view_technology('no_such_thing');
check('unknown id gets a not-found card that links back', content.innerHTML.includes('No such piece of technology') && content.innerHTML.includes("#/technology"));

TECH.view_technology('tension');
html = content.innerHTML;
check('tension board: headline carries the clock year and a year strip', html.includes('as of 1040 BF') && html.includes('1035 BF') && html.includes('955 BF'));
check('tension board: a row per territory with a band and drivers', (html.match(/class="tech-trow"/g) || []).length === now.territories.length && html.includes('tech-trow-drivers'));
check('tension board: strain pairs name both factions', html.includes('Who is strained with whom') && html.includes('tech-pair-head'));
TECH.view_technology('tension/1035');
check('tension board for 1035 BF reads Crisis for the Kingdom', content.innerHTML.includes('as of 1035 BF') && content.innerHTML.includes('Cycle of Crisis'));

TECH.view_technology('territory/mushroom_kingdom');
html = content.innerHTML;
check('territory page: driver table with contribution and source filing columns', html.includes('tech-table') && html.includes('Contribution') && html.includes('the_debt_siege_and_the_sixty_thirty_split'));
check('territory page: by-year strip and the atlas link', html.includes('By year') && html.includes('#/atlas/mushroom_kingdom'));
TECH.view_technology('territory/nowhere');
check('territory page: empty ground says so', content.innerHTML.includes('No technology filed'));

const panel = TECH.eventPanel('the_rot_zone_at_star_hill');
check('event apparatus tab names the pistol as first seen and the helicopter as seen again',
  panel.includes("A Courier&#39;s Cheap Pistol") && panel.includes('first seen here') && panel.includes('seen again here'));
check('event apparatus tab is empty for a filing with no technology', TECH.eventPanel('no_such_event') === '');
const docs = TECH.searchDocs();
check('search docs: one per entry, kind technology, haystack mentions the source article', docs.length === entries.length && docs.every(d => d.kind === 'technology' && d.hay.length > 40) && docs[0].hay.includes('debt siege'));

console.log('\n# wiring');
const index = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
check('index.html loads tech-models.js then technology.js', index.indexOf('assets/technology/tech-models.js') > 0 && index.indexOf('assets/technology/tech-models.js') < index.indexOf('assets/technology/technology.js'));
check('index.html links technology.css', index.includes('assets/technology/technology.css'));
check('DATA_FILES fetches technology.json', index.includes("'filing-updates','technology']"));
check('Router sends #/technology, #/tech and the old #/research to the ledger', index.includes("route==='technology'||route==='tech'||route==='research'"));
check('sidebar carries a Discovered Technology link with a count', index.includes("label:'Discovered Technology'") && index.includes('DATA.technology.entries'));
check('event apparatus band adds the Technology tab', index.includes("add('tech','🔬','Technology'"));
check('Research Bureau indexes and routes the technology kind', index.includes('TECH.searchDocs()') && index.includes("d.kind==='technology')Router.go('#/technology/'"));
check('SITE_UPDATES announces the section as a route after the newest filing', /let SITE_UPDATES=\[\{"id": "the_rot_zone_at_star_hill"[^\n]*"id": "technology", "kind": "route", "route": "#\/technology"/.test(index));

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
