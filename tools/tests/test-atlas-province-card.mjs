// The atlas nation page's Province Census card, rendered from the REAL function
// extracted out of index.html over the REAL census. jsdom cannot run the page's
// dynamic imports, so the card is proved here (markup + roll-up + ledger badges)
// and the map itself is proved in atlas-provinces-smoke.mjs.
//
//   node tools/tests/test-atlas-province-card.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';
import { PROVINCE_POLITICS } from '../../Reputation-Matrix2/data/support/politics-data.js';
import { buildProvinceCensus } from '../../Reputation-Matrix2/app/pages/maps/map-provinces.js';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const main = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
  .map(m => m[1]).sort((a, b) => b.length - a.length)[0];

function extractBlock(sig, open = '{', close = '}') {
  const i = main.indexOf(sig);
  if (i < 0) throw new Error(`not found in index.html: ${sig}`);
  let depth = 0, started = false;
  for (let j = i; j < main.length; j++) {
    const c = main[j];
    if (c === open) { depth++; started = true; }
    else if (c === close) { depth--; if (started && depth === 0) return main.slice(i, j + 1); }
  }
  throw new Error(`unbalanced: ${sig}`);
}

const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

const sandbox = { INDEX: {}, FCOLORS: { empire: '#ff0000', horde: '#00ff00' } };
const src = [
  extractBlock('function prettyId(id)'),
  extractBlock('function atlasProvinceShareBar(fid,share)'),
  extractBlock('function atlasProvinceCensusHtml(census)'),
].join('\n');
new Function('INDEX', 'FCOLORS', 'esc', 'displayName',
  `${src}; this.atlasProvinceCensusHtml=atlasProvinceCensusHtml; this.atlasProvinceShareBar=atlasProvinceShareBar;`)
  .call(sandbox, sandbox.INDEX, sandbox.FCOLORS, esc, item => (item && item.name) || '');

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

/* ---------------- the card, over a real realm ---------------- */
const census = buildProvinceCensus(MAP_DATA.mushroom_kingdom_full, MAP_DATA, { politics: PROVINCE_POLITICS });
const out = sandbox.atlasProvinceCensusHtml(census);
const rows = (out.match(/<tr data-province=/g) || []).length;
check('one row per province', rows === census.provinces.length, `${rows} of ${census.provinces.length}`);
check('the card is titled and explained', /Province Census/.test(out) && /Counting/.test(out) === false);
check('the roll-up reads as a nation', /provinces make [\d,]+ mapped residents/.test(out), out.slice(out.indexOf('provinces make'), out.indexOf('provinces make') + 80));
check('filed and merged provinces are counted separately', /from provinces already filed in the atlas or a sub-region sheet/.test(out));
check('contested marches are counted', /contested marches/.test(out));
check('vacant filed claims are counted', /filed claims with no pins on them/.test(out));
check('a share bar renders', /width:\d+(\.\d+)?%;background:/.test(out));
check('rows carry the province id for the map to open', /data-province="(filed|sheet|merged):/.test(out));
check('the seat is named on the row', /seat: /.test(out));
check('the ledger verdict is shown where a ledger exists', /ledger (holds|broken)/.test(out));
check('a province without a ledger says so', /no ledger filed/.test(out));
check('the card cites the canon pillars', /military might, economic influence, political stability/.test(out));
check('the card tells the reader rows move the map', /Click a row to open that province on the map/.test(out));
check('no undefined leaks into the card', !/undefined|NaN|\[object/.test(out), (out.match(/.{0,40}(undefined|NaN).{0,40}/) || [''])[0]);
check('every row is HTML-escaped where names are', !/<script/i.test(out));

/* a name the archive files resolves through INDEX; an id it does not, is prettied */
sandbox.INDEX.empire = { item: { name: 'The Empire' } };
const out2 = sandbox.atlasProvinceCensusHtml(buildProvinceCensus(MAP_DATA.midlands_full, MAP_DATA, { politics: PROVINCE_POLITICS }));
check('the Midlands card renders too', (out2.match(/<tr data-province=/g) || []).length > 6, `${(out2.match(/<tr data-province=/g) || []).length} rows`);
check('an unfiled faction id still reads as a name', !/_/.test(out2.replace(/data-province="[^"]*"|_[a-z_]+_/g, '')) || /regal empire|Regal Empire/.test(out2));

/* ---------------- escaping is real, not assumed ---------------- */
const evil = {
  mapId: 'x', mapName: 'X', group: 'G', pins: 2, rollup: { provinceCount: 2, population: 1, filedProvinces: 1, mergedProvinces: 1, contestedProvinces: 0, vacantProvinces: 0, unclaimedProvinces: 0, sovereign: 'empire', sovereignProvinces: 1, sovereignShare: 50, fragmented: false, byFaction: [] },
  provinces: [{
    id: 'p"<img src=x>', name: 'On<label>', origin: 'filed', sourceMapId: 'other_map', seat: { name: 'Seat<script>alert(1)</script>' },
    delta: { agrees: false, filedController: 'empire', filedShare: 10, drift: 5, rows: [] },
    census: { pins: 1, population: 10, controller: 'empire', claimant: 'empire', claimantShare: 60, contested: false, noLead: false, military: 1, economic: 1, political: 1 },
  }],
};
const evilOut = sandbox.atlasProvinceCensusHtml(evil);
check('a hostile province name cannot inject markup', !/<script>alert/.test(evilOut) && !/<img src=x>/.test(evilOut), (evilOut.match(/<img[^>]*>/) || [''])[0]);

/* ---------------- the page wires the card in ---------------- */
check('the nation route renders the census panel', /\$\{mapIframe\}\$\{atlasProvinceCensusPanel\(\)\}/.test(main));
check('the nation route counts the sheet it mounted', /atlasRenderProvinceCensus\(mountedId\)/.test(main));
check('switching region recounts the census', /censusHost\)atlasRenderProvinceCensus\(mapId\)/.test(main));
check('the map handle is kept so a row can drive it', /window\.__atlasMapHandle=handle/.test(main));
check('a province deep link is passed to the renderer', /focusProvince:ATLAS_MOUNT_FOCUS&&ATLAS_MOUNT_FOCUS\.provinceId/.test(main));
check('the faction power panel imports the real analysis module', /import\(pathPrefix \+ 'app\/systems\/global-map-analysis\.js'\)/.test(main));

console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
