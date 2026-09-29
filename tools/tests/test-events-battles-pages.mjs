// Headless render tests for the EVENTS SESSION LEDGER (month-subdivided),
// the BATTLES WAR ROOM (wars rail + dossier + skirmish table), and the
// FACTIONS REGISTRY. All three views are extracted straight from index.html
// and run against stubbed data. The contract being pinned:
//
//   events    year groups are subdivided by calendar month (parseMonth's
//             aliasing normalizes the filings' spelling variants); year-only
//             dates get a "month not on the record" drawer; A→Z stays flat
//   battles   wars first, fights second — a rail of wars, an overview with
//             war cards, a dossier per war (root cause, phases, battle
//             records, session records), and a skirmish TABLE; no year
//             groups anywhere; deep links by war slug
//   factions  realm sections, one dossier row per faction, allegiance web
//             (allies green / enemies red), status badges, disposition
//             filters, grudge line
//   distinct  the events page and the battles page share no page-level
//             markup — different mechanics, different classes
//
//   node tools/tests/test-events-battles-pages.mjs
import { readFileSync } from 'node:fs';

const repoRoot = new URL('../../', import.meta.url);
const html = readFileSync(new URL('index.html', repoRoot), 'utf8');
const start = html.indexOf('/* ===================== EVENTS — THE SESSION LEDGER');
const end = html.indexOf('let ATLAS_INDEX={};');   // the atlas index machinery follows; it is not under test here
if (start < 0 || end < 0) { console.error('views block not found'); process.exit(1); }
const block = html.slice(start, end);

// ---------- shared stubs ----------
const esc = s => (s == null ? '' : String(s)).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const content = { innerHTML: '' };
const el = id => (id === 'content' ? content : { innerHTML: '' });
const Router = { last: null, go(r) { this.last = r; } };
const window = { scrollTo() {} };
const renderSidebar = () => {};
const TYPE_BY_KEY = { events: { emoji: '📜', label: 'Events' }, battles: { emoji: '🗡️', label: 'Battles' }, factions: { emoji: '🚩', label: 'Factions' } };
const displayName = i => (i && (i.name || i.title)) || (i && i.id) || '';
const previewText = (it, m) => String((it && (it.summary || it.description)) || '').slice(0, m || 200);
const assetPath = p => String(p || '');
const openHub = () => {}; const openId = () => {};
const factionColor = id => ({ iron_legion: '#ccc', koopa_troop: '#0a0' }[id] || '#8a4bff');
const prettyId = s => String(s).replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
const MONTHS = [
  { ordinal: 7, name: 'Highsun', season: 'High Summer', icon: '☀️', color: '#f5a623' },
  { ordinal: 8, name: 'Harvestide', season: 'Harvest', icon: '🌾', color: '#c9a227' },
  { ordinal: 9, name: 'Aethel', season: 'Fall', icon: '🍂', color: '#b05a2a' },
];
const MONTH_ORD = { highsun: 7, harvestide: 8, harvestside: 8, aethel: 9 };
const parseYear = s => { const m = String(s || '').match(/(\d{3,4})\s*BF/i) || String(s || '').match(/\b(\d{3,4})\b/); return m ? parseInt(m[1], 10) : null; };
const parseMonth = s => {
  const t = String(s || '').toLowerCase();
  for (const k of Object.keys(MONTH_ORD)) if (new RegExp('(^|[^a-z])' + k + '([^a-z]|$)').test(t)) return MONTH_ORD[k];
  return 99;
};
const parseDay = s => { const m = String(s || '').replace(/\b\d{3,4}\s*BF\b/ig, '').match(/\b(\d{1,2})/); return m ? parseInt(m[1], 10) : 99; };
const monthName = o => (MONTHS.find(m => m.ordinal === o) || {}).name || 'Month ' + o;
const eventCampaign = () => null;
const annotationBadge = () => ''; const filingBadge = () => ''; const attachmentTags = () => '';
const plateIsUnlocked = () => false;

// ---------- data ----------
const DATA = {
  calendarMonths: MONTHS,
  events: [
    { id: 'e1', name: 'Aethel Alpha', date: '5 Aethel, 1040 BF', summary: 'First.', image: 'a.png' },
    { id: 'e2', name: 'Aethel Beta', date: '1st-2nd Aethel, 1040 BF', summary: 'Second.' },
    { id: 'e3', name: 'Harvestside Happening', date: '18 Harvestside, 1040 BF', summary: 'Third.' },
    { id: 'e4', name: 'Year Only Filing', date: '1040 BF (Curated)', summary: 'No month on the record.' },
    { id: 'e5', name: 'The Old War', date: 'Highsun 1-30, 955 BF', summary: 'Ancient.' },
    { id: 'e6', name: 'No Date At All', era: 'pre-calendar', summary: 'Timeless.' },
  ],
  battles: [
    { id: 'the_lounge_brawl', name: 'The Lounge Brawl', date: '19 Harvestide, 1040 BF — 05:00', location: 'Ferngrove Manor, Feywild', type: 'Skirmish / Document Retrieval', result: 'Tactical Draw — papers recovered.', image: 'plates/lounge.png', belligerents: { attackers: { name: 'Waluigi and Wario', factionId: 'wario_enterprise' }, defenders: { name: 'Saedia', factionId: 'corvinarus_family' } } },
    { id: 'siege_raventree', name: 'Siege of Raventree', date: '2 Aethel, 1040 BF', result: 'Victory — the gate held.', conflict: 'The Example War', image: 'plates/raventree.png' },
    { id: 'old_scraps', name: 'Old Scraps', date: '955 BF', result: 'Defeat — overrun.', image: 'plates/scraps.png' },
  ],
  majorBattles: [
    { id: 'mb1', name: 'The Opening Clash', conflict: 'The Example War', outcome: 'victory', date: { year: 1040, monthIndex: 8, day: 3 }, location: 'The Gate', image: 'plates/clash.png' },
    { id: 'mb2', name: 'The Counterattack', conflict: 'The Example War', outcome: 'defeat', date: { year: 1040, monthIndex: 9, day: 11 }, location: 'The Field' },
    { id: 'mb3', name: 'The Quiet Ambush', conflict: 'The Unwritten War', outcome: 'stalemate', date: { year: 1040, monthIndex: 7, day: 2 }, location: 'The Woods' },
  ],
  conflicts: {},
  factions: [
    { id: 'iron_legion', name: 'Iron Legion', type: 'Military State / Imperial Power', status: 'Active — expanding', leader: 'Byscilla', headquarters: 'Ironhold, the Midlands', motto: 'The Legion counts.', summary: 'The imperial machine.', allies: ['koopa_troop'], enemies: ['disaster_inc'], keyEvents: [{}, {}] },
    { id: 'mazebounds', name: 'The Mazebounds', type: 'Supernatural Collective', status: 'Extinct — dispersed with the hedge', leader: 'The Maze', summary: 'Former residents, blighted.', allies: null, enemies: null },
    { id: 'koopa_troop', name: 'Koopa Troop', type: 'Faction / Military Force', status: 'Active but fragmented', leader: 'Bowser', headquarters: 'Bowser\u2019s Castle', motto: 'Grills eternally lit.', summary: 'Occasionally competent.', allies: [], enemies: ['mushroom_regency'] },
    { id: 'disaster_inc', name: 'Disaster Inc.', type: 'Adventuring Party', status: 'Active — core roster confirmed', leader: 'Nobody, proudly', summary: 'A walking catastrophe.', allies: ['liberated_toads'], enemies: [] },
  ],
};
const INDEX = { iron_legion: { id: 'iron_legion', name: 'Iron Legion' }, koopa_troop: { id: 'koopa_troop', name: 'Koopa Troop' } };
const ATLAS_INDEX = {
  regal_empire: { nation: { id: 'regal_empire', name: 'The Regal Empire' }, factions: [DATA.factions[0], DATA.factions[1]] },
  mushroom_kingdom: { nation: { id: 'mushroom_kingdom', name: 'The Mushroom Kingdom' }, factions: [DATA.factions[2]] },
};
const buildAtlasIndex = () => {};
const nationThumb = () => '<span class="crest-stub">🛡️</span>';
const battleOutcomeMeta = o => ({ victory: { cls: 'win', label: 'Victory' }, defeat: { cls: 'loss', label: 'Defeat' }, stalemate: { cls: 'draw', label: 'Stalemate' } }[String(o)] || { cls: 'ongoing', label: 'Ongoing' });
const battleFronts = () => ([
  { name: 'The Example War', record: DATA.conflicts.example, battles: [DATA.majorBattles[0], DATA.majorBattles[1]], tally: { win: 1, loss: 1 }, span: '1040 BF', written: true, isUnfiled: false },
  { name: 'The Unwritten War', record: null, battles: [DATA.majorBattles[2]], tally: { draw: 1 }, span: '1040 BF', written: false, isUnfiled: false },
]);
DATA.conflicts.example = { summary: 'A war about nothing small.', rootCause: 'Taxes, mostly.', status: 'active', keyFactions: ['iron_legion'], majorPhases: [{ name: 'Phase One', description: 'It began.' }, { name: 'Phase Two', description: 'It continued.' }] };
const battleTallyChips = t => Object.entries(t).map(([k, v]) => `<span class="front-tally front-tally--${k}">${v} ${k}</span>`).join('');
const battleRowHtml = b => `<a class="front-battle" href="#/mbattle/${encodeURIComponent(b.id)}"><b>${esc(b.name)}</b></a>`;
const combatantChip = id => `<span class="combatant-chip">${esc(prettyId(id))}</span>`;
const statusClass = s => /active/.test(String(s)) ? 'status-active' : 'status-other';

const listState = {};
const PARAMS = ['ATLAS_INDEX', 'DATA', 'INDEX', 'listState', 'el', 'esc', 'Router', 'window', 'renderSidebar', 'TYPE_BY_KEY', 'displayName', 'previewText', 'assetPath', 'openHub', 'openId', 'factionColor', 'prettyId', 'parseYear', 'parseDay', 'parseMonth', 'monthName', 'eventCampaign', 'annotationBadge', 'filingBadge', 'plateIsUnlocked', 'attachmentTags', 'battleFronts', 'battleTallyChips', 'battleRowHtml', 'battleOutcomeMeta', 'combatantChip', 'statusClass', 'buildAtlasIndex', 'nationThumb'];
const ARGS = [ATLAS_INDEX, DATA, INDEX, listState, el, esc, Router, window, renderSidebar, TYPE_BY_KEY, displayName, previewText, assetPath, openHub, openId, factionColor, prettyId, parseYear, parseDay, parseMonth, monthName, eventCampaign, annotationBadge, filingBadge, plateIsUnlocked, attachmentTags, battleFronts, battleTallyChips, battleRowHtml, battleOutcomeMeta, combatantChip, statusClass, buildAtlasIndex, nationThumb];
const loader = new Function(...PARAMS, block + '\nreturn {view_events, view_battles, view_factions, facStatusMeta, wrrSlug};');
const V = loader(...ARGS);

let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };

/* ============================ EVENTS =================================== */
V.view_events();
let out = content.innerHTML;
check('events: year groups render with counts', /1040 BF<\/h3>/.test(out) && /955 BF<\/h3>/.test(out) && /Undated/.test(out));
check('events: 1040 is subdivided by month, not one flat drawer', (out.match(/class="evl-sub[ "]/g) || []).length === 4);
check('events: Aethel sub-header carries icon and season from the calendar', /🍂 Aethel/.test(out) && /Fall/.test(out));
check('events: Harvestside filings normalize into the Harvestide drawer', /🌾 Harvestide/.test(out) && /Harvestside Happening/.test(out) && !/Harvestside<\/b>/.test(out));
check('events: newest-first puts Aethel before Harvestide inside 1040', out.indexOf('🍂 Aethel') < out.indexOf('🌾 Harvestide'));
check('events: year-only filings land in the month-not-on-record drawer', /Month not on the record/.test(out) && /Year Only Filing/.test(out));
check('events: the month drawer comes after the dated months', out.indexOf('Month not on the record') > out.indexOf('🌾 Harvestide'));
check('events: 955 gets its Highsun sub-header', /☀️ Highsun/.test(out));
check('events: lead card is the newest filing on file', /evl-lead/.test(out) && /No Date At All/.test(out.slice(0, out.indexOf('evl-group'))));
check('events: rows carry campaign-free meta without invented campaigns', !/evl-camp/.test(out));

listState.events.sort = 'az';
V.view_events();
check('events: A→Z stays flat — one group, no month drawers', /Every filing, A→Z/.test(content.innerHTML) && !/class="evl-sub[ "]/.test(content.innerHTML));
listState.events.sort = 'newest';

listState.events.query = 'old war';
V.view_events();
check('events: search still filters the ledger', /The Old War/.test(content.innerHTML) && !/Aethel Alpha/.test(content.innerHTML));
listState.events.query = '';

listState.events.view = 'shelf';
V.view_events();
check('events: shelf mode keeps the card wall', /evcard/.test(content.innerHTML));
listState.events.view = 'ledger';
const eventsHtml = content.innerHTML;

/* ============================ BATTLES ================================== */
V.view_battles('');
let b = content.innerHTML;
check('war room: dark band header, not the events hero card', /class="war-band/.test(b) && !/evl-hero/.test(b));
check('war room: rail lists the room, both wars, and the skirmish log', /The war room/.test(b) && /The Example War/.test(b) && /The Unwritten War/.test(b) && /Session skirmishes/.test(b));
check('war room: overview shows one card per war (log card replaced by the band)', (b.match(/class="wrr-war[ "]/g) || []).length === 2);
check('war room: the skirmish band is prominent — plate filmstrip above the wars', /class="wrr-sq"/.test(b) && (b.match(/class="wrr-sqc"/g) || []).length === 3 && b.indexOf('wrr-sq') < b.indexOf('class="wrr-wars"'));
check('war room: the band carries the door to the full log and the no-war count', /Open the full log/.test(b) && /2 of them belonging to no war/.test(b));
check('war room: war cards carry plate art where the records have it', /class="wrr-war-art"/.test(b) && /plates\/clash\.png/.test(b));
check('war room: war cards carry span, battle count, phases, tally', /1040 BF/.test(b) && /2 battles/.test(b) && /2 phases/.test(b) && /front-tally/.test(b));
check('war room: the year strip survives as the shape of the record', /wlr-strip/.test(b) && /wlr-mark/.test(b));
check('war room: no year-grouped sections anywhere', !/class="wlr-group"/.test(b) && !/BF<\/h3>/.test(b));
check('war room: unwritten wars are flagged in the rail and the card', /wrr-rbtn--un/.test(b) && /war unfiled/.test(b));

// deep link to a war dossier
V.view_battles('the-example-war');
b = content.innerHTML;
check('dossier: back link, title, status, span, tallies', /← The war room/.test(b) && /The Example War/.test(b) && /status-tag/.test(b) && /front-tallies/.test(b));
check('dossier: root cause block renders', /Root cause/.test(b) && /Taxes, mostly/.test(b));
check('dossier: a plate banner from the records when one exists', /class="wrr-dart"/.test(b) && /Plate from the records/.test(b));
check('dossier: phases render as the war timeline', /war-front-step/.test(b) && /Phase Two/.test(b));
check('dossier: battle records use the ledger rows', (b.match(/class="front-battle"/g) || []).length === 2);
check('dossier: session records naming the war are surfaced', /Session records naming this war/.test(b) && /Siege of Raventree/.test(b));
check('dossier: key factions chip in', /combatant-chip/.test(b));
check('dossier: links to the full conflict record', /#\/conflict\/The%20Example%20War/.test(b));

V.view_battles('the-unwritten-war');
b = content.innerHTML;
check('dossier: unwritten war gets the honest gap note', /front-gap/.test(b) && /conflicts\.json/.test(content.innerHTML));

V.view_battles('skirmishes');
b = content.innerHTML;
check('skirmishes: a real table — plate / When / engagement / who fought / how it ended', /wrr-tr--head/.test(b) && /wrr-th-plate/.test(b) && /The engagement/.test(b) && /Who fought/.test(b) && /How it ended/.test(b));
check('skirmishes: every row carries its plate thumbnail', (b.match(/class="wrr-thumb"/g) || []).length === 3);
check('skirmishes: all session fights on the log, VS lines and outcome badges included', (b.match(/class="wrr-tr[ "]/g) || []).length === 4 && /wlr-vs/.test(b) && /wlr-ob--draw/.test(b) && /wlr-ob--win/.test(b) && /wlr-ob--loss/.test(b));
check('skirmishes: fights without belligerents say so honestly', /belligerents unrecorded/.test(b));
listState.battles.outcome = 'draw';
V.view_battles('skirmishes');
check('skirmishes: outcome filter narrows the log', (content.innerHTML.match(/class="wrr-tr[ "]/g) || []).length === 2 && /The Lounge Brawl/.test(content.innerHTML) && !/Old Scraps/.test(content.innerHTML));
listState.battles.outcome = 'All';
listState.battles.query = 'raventree';
V.view_battles('skirmishes');
check('skirmishes: search narrows the log', /Siege of Raventree/.test(content.innerHTML) && !/The Lounge Brawl/.test(content.innerHTML));
listState.battles.query = '';

listState.battles.view = 'cards';
V.view_battles('');
check('plates: the illustrated wall is still a toggle away', /evcard/.test(content.innerHTML) && !/wrr-rail/.test(content.innerHTML));
listState.battles.view = 'room';

V.view_battles('not-a-real-war');
check('war room: a bad slug falls back to the overview, not a dead end', /wrr-rail/.test(content.innerHTML) && /The war room/.test(content.innerHTML));

check('distinct: battles page shares no page markup with events page', !/evl-group|evl-sub|evl-lead|evl-row/.test(content.innerHTML));
V.view_events();
check('distinct: events page carries no war-room markup', !/wrr-/.test(content.innerHTML));

/* ============================ FACTIONS ================================= */
V.view_factions();
let f = content.innerHTML;
check('registry: band counts factions, alliances, feuds, and the alone', /4 factions on file/.test(f) && /2 alliances on record/.test(f) && /2 feuds/.test(f) && /1 standing entirely alone/.test(f));
check('registry: the grudge line names the most-enemied faction', /biggest grudge/.test(f));
check('registry: realm sections from the atlas index, independents last', /The Regal Empire/.test(f) && /The Mushroom Kingdom/.test(f) && /Independent &amp; unfiled/.test(f) && f.indexOf('Independent') > f.indexOf('Mushroom Kingdom'));
check('registry: every faction renders a dossier row', (f.match(/class="fac-row"/g) || []).length === 4);
check('registry: status badges classify active / extinct', /fac-status--active/.test(f) && /fac-status--extinct/.test(f));
check('registry: mottos survive as pull-quotes', /The Legion counts\./.test(f));
check('registry: allegiance web — allies green, enemies red', /fac-chip--ally/.test(f) && /fac-chip--enemy/.test(f));
check('registry: known factions get clickable chips, unknown stay plain', /onclick="event.stopPropagation\(\);openId\('koopa_troop'\)"/.test(f) && /fac-chip--enemy" title="Hostile to Mushroom Regency"/.test(f));
check('registry: alone factions say so on both lines', /no allies on file/.test(f) && /no enemies on file/.test(f));
check('registry: faction sections link back to their realm in the atlas', /#\/atlas\/regal_empire/.test(f));

listState.factions.disp = 'alone';
V.view_factions();
check('registry: standing-alone filter keeps only the friendless', (content.innerHTML.match(/class="fac-row"/g) || []).length === 1 && /The Mazebounds/.test(content.innerHTML));
listState.factions.disp = 'ally';
V.view_factions();
check('registry: allied filter keeps the ones with friends', (content.innerHTML.match(/class="fac-row"/g) || []).length === 2 && /Iron Legion/.test(content.innerHTML) && /Disaster Inc\./.test(content.innerHTML));
listState.factions.disp = 'enemy';
V.view_factions();
check('registry: at-war filter keeps the ones with grudges', (content.innerHTML.match(/class="fac-row"/g) || []).length === 2 && !/Mazebounds/.test(content.innerHTML));
listState.factions.disp = 'All';
listState.factions.query = 'legion';
V.view_factions();
check('registry: search finds by name', (content.innerHTML.match(/class="fac-row"/g) || []).length === 1);
listState.factions.query = '';

check('classifier: status meta prefers active, then extinct, then broken',
  V.facStatusMeta('Allegedly extinct; currently active via lone agent').cls === 'active' &&
  V.facStatusMeta('Extinct — destroyed at the siege').cls === 'extinct' &&
  V.facStatusMeta('Dispersed but organized').cls === 'broken' &&
  V.facStatusMeta('').cls === 'other');
check('slugs: war names become stable route slugs', V.wrrSlug('The Example War') === 'the-example-war' && V.wrrSlug('Kong-Kremling Cold War') === 'kong-kremling-cold-war');

console.log(ok ? 'ALL EVENTS+BATTLES+FACTIONS TESTS PASS' : 'TESTS FAILED');
process.exit(ok ? 0 : 1);
