// Headless render test of the redesigned Events (session ledger) and Battles
// (war ledger) pages. The code is extracted straight from index.html and run
// against a minimal stub of the data/DOM layer. The contract being pinned:
//
//   EVENTS   the newest filing leads; rows are dated, grouped by year, and
//            carry campaign spines + plate markers; the Shelf toggle keeps
//            the old card wall; search filters.
//   BATTLES  the war strip renders a mark per battle on its year; rows carry
//            VS lines coloured by faction and outcome badges read from the
//            result line; outcome chips filter; Fronts mode shows the board.
//   DISTINCT the two pages share no markup: the events page renders zero
//            wlr-* classes and the battles page renders zero evl-row rows.
//
//   node tools/tests/test-events-battles-pages.mjs
import { readFileSync } from 'node:fs';

const repoRoot = new URL('../../', import.meta.url);
const html = readFileSync(new URL('index.html', repoRoot), 'utf8');
const start = html.indexOf('/* ===================== EVENTS — THE SESSION LEDGER');
const end = html.indexOf('let ATLAS_INDEX={};');
if (start < 0 || end < 0) { console.error('events/battles block not found'); process.exit(1); }
const block = html.slice(start, end);

// ---------- stubs ----------
const esc = s => (s == null ? '' : String(s)).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const EVENTS = [
  { id: 'e_old', name: 'The Old Business', title: 'The Old Business', date: '12 Highsun, 955 BF', summary: 'A long-ago filing.', location: 'Toad Town', participants: [{ name: 'Peach' }], image: 'assets/x/old.jpg', timeCode: 'TC:0955-06-12/MAT' },
  { id: 'e_mid', name: 'The Middle Business', title: 'The Middle Business', date: '3 Aethel, 1040 BF', summary: 'A middle filing.', location: 'The Grove', participants: [{ name: 'Markop' }, { name: 'Salam' }], image: 'assets/x/mid.jpg', timeCode: 'TC:1040-09-03/SHD' },
  { id: 'e_new', name: 'The Newest Filing', title: 'The Newest Filing', date: '5 Aethel, 1040 BF', summary: 'The one the lead card should show.', location: 'A Studio', participants: [{ name: 'Darian' }], image: 'assets/x/new.jpg', timeCode: 'TC:1040-09-05/MAT' },
  { id: 'e_nodate', name: 'The Undated Thing', title: 'The Undated Thing', summary: 'No date on file at all.', image: 'assets/x/none.jpg' },
];
const BATTLES = [
  { id: 'b1', name: 'The Lounge Brawl', date: '19 Harvestide, 1040 BF — 05:00', location: 'Ferngrove Manor, Feywild', type: 'Intra-Party Skirmish', result: 'Tactical Draw — Papers recovered and returned.', image: 'assets/b/1.jpg',
    belligerents: { attackers: { name: 'Waluigi and Wario (Briefly, Opportunistically)', factionId: 'wario_bros', commander: 'Wario' }, defenders: { name: 'Rakasha', factionId: 'rakasha' } }, casualties: { attackers: 'wounded', defenders: 'none' } },
  { id: 'b2', name: 'Fall of Bramblehaven', date: '4 Verdance, 1036 BF', location: 'Bramblehaven', type: 'Siege', result: 'Decisive Peach Loyalist Victory', image: 'assets/b/2.jpg',
    belligerents: { attackers: { name: 'Peach Loyalists', factionId: 'peach_loyalists' }, defenders: { name: 'Mushroom Regency', factionId: 'mushroom_regency' } } },
  { id: 'b3', name: 'The Quiet Rout', date: '2 Thaw, 1036 BF', location: 'Somewhere', type: 'Ambush', result: 'Complete defeat; supplies destroyed.', image: 'assets/b/3.jpg' },
  { id: 'b4', name: 'The Unwritten End', date: '9 Mistide, 1040 BF', location: 'Elsewhere', type: 'Skirmish', result: 'None', image: 'assets/b/4.jpg' },
];
const DATA = {
  events: EVENTS, battles: BATTLES,
  majorBattles: [{ id: 'mb1', name: 'The Great Onslaught', date: '1040 BF', description: 'A major battle.', conflict: 'The Shadowfell Crisis' }],
  conflicts: { 'The Shadowfell Crisis': { status: 'active', summary: 'A war.', keyFactions: ['iron_legion'] } },
};
const listState = {};
const TYPE_BY_KEY = { events: { emoji: '📜', label: 'Events' }, battles: { emoji: '🗡️', label: 'Battles' } };
const EVENT_CAMPAIGNS = { SHD: { key: 'shd', label: 'Shadeward' }, FEY: { key: 'fey', label: 'Feyward' }, MAT: { key: 'mat', label: 'Mario' }, SUBJ: { key: 'subj', label: 'Subjective' } };
const MONTHS = ['Highsun', 'Verdance', 'Thaw', 'Mistide', 'Aethel', 'Harvestide'];
const MONTH_ORD = {}; MONTHS.forEach((m, i) => MONTH_ORD[m.toLowerCase()] = i + 1);

const el = id => (id === 'content' ? content : { innerHTML: '' });
const content = { innerHTML: '' };
const INDEX = { wario_bros: { id: 'wario_bros' }, peach_loyalists: { id: 'peach_loyalists' }, rakasha: { id: 'rakasha' }, mushroom_regency: { id: 'mushroom_regency' } };
const displayName = i => (i && (i.name || i.title)) || (i && i.id) || '';
const previewText = (it, max) => { const s = String((it && (it.summary || it.description)) || ''); return s.length > (max || 200) ? s.slice(0, max || 200) + '…' : s; };
const eventCampaign = e => { const tc = String((e && e.timeCode) || ''); if (tc.indexOf('/') < 0) return null; return EVENT_CAMPAIGNS[tc.split('/').pop()] || null; };
const plateIsUnlocked = () => false;
const attachmentTags = () => '';
const annotationBadge = () => '';
const filingBadge = () => '';
const assetPath = p => String(p || '');
const openHubCalls = [];
const openHub = id => openHubCalls.push(id);
const openId = id => openHubCalls.push(id);
const renderSidebar = () => {};
const parseYear = s => { const m = String(s || '').match(/(\d{3,4})\s*BF/i) || String(s || '').match(/\b(\d{3,4})\b/); return m ? parseInt(m[1], 10) : null; };
const parseMonth = s => { const t = String(s || '').toLowerCase(); for (const k of Object.keys(MONTH_ORD)) if (t.includes(k)) return MONTH_ORD[k]; return 99; };
const parseDay = s => { const m = String(s || '').match(/\b(\d{1,2})\b/); return m ? parseInt(m[1], 10) : null; };
const monthName = ord => MONTHS[(ord - 1 + MONTHS.length) % MONTHS.length] || 'Month ' + ord;
const battleOutcomeMeta = o => ({ win: { cls: 'win' }, loss: { cls: 'loss' }, draw: { cls: 'draw' } }[String(o).toLowerCase()] || { cls: 'unknown' });
const battleHubPanel = () => '<div class="species-dash battlefield-layer">FRONT BOARD</div>';
const factionColor = id => ({ wario_bros: '#f5d90a', peach_loyalists: '#ff9ad5', rakasha: '#e07be0', mushroom_regency: '#e5484d' }[id] || '#888');
const Router = { last: null, go(r) { this.last = r; } };
const window = { scrollTo() {}, setTimeout: setTimeout, clearTimeout: clearTimeout };

const loader = new Function('DATA','listState','TYPE_BY_KEY','el','esc','document','window','Router','INDEX',
  'displayName','previewText','eventCampaign','plateIsUnlocked','attachmentTags','annotationBadge','filingBadge',
  'assetPath','openHub','openId','renderSidebar','parseYear','parseMonth','parseDay','monthName',
  'battleOutcomeMeta','battleHubPanel','factionColor',
  block + '\nreturn {view_events, view_battles, wlrResultClass};');
const P = loader(DATA, listState, TYPE_BY_KEY, el, esc, { getElementById: () => null }, window, Router, INDEX,
  displayName, previewText, eventCampaign, plateIsUnlocked, attachmentTags, annotationBadge, filingBadge,
  assetPath, openHub, openId, renderSidebar, parseYear, parseMonth, parseDay, monthName,
  battleOutcomeMeta, battleHubPanel, factionColor);

let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };

// ---------- events ----------
P.view_events();
check('events: the newest filing leads', /evl-lead/.test(content.innerHTML) && /The Newest Filing/.test(content.innerHTML) && /newest filing/i.test(content.innerHTML));
check('events: rows are grouped by year with headers', /evl-group/.test(content.innerHTML) && /1040 BF/.test(content.innerHTML) && /955 BF/.test(content.innerHTML));
check('events: the undated filing gets its own bucket, not a broken group', /Undated/.test(content.innerHTML) && /The Undated Thing/.test(content.innerHTML));
check('events: rows carry campaign spines', /evl-row camp-mat/.test(content.innerHTML) && /evl-row camp-shd/.test(content.innerHTML));
check('events: plate markers present and locked until read', (content.innerHTML.match(/ev-plate/g) || []).length >= 3 && /🔒/.test(content.innerHTML));
check('events: the year rail renders jump buttons', /evl-rail/.test(content.innerHTML) && /1040/.test(content.innerHTML));
check('events: NO battles markup on this page', !/wlr-/.test(content.innerHTML));
// search narrows
listState.events.query = 'newest';
P.view_events();
check('events: search narrows the ledger', /The Newest Filing/.test(content.innerHTML) && !/The Old Business/.test(content.innerHTML));
listState.events.query = '';
// shelf mode keeps the card wall
listState.events.view = 'shelf';
P.view_events();
check('events: Shelf mode keeps the illustrated cards', /evcard/.test(content.innerHTML) && /evgrid/.test(content.innerHTML));
listState.events.view = 'ledger';
// A→Z collapses year grouping into one run
listState.events.sort = 'az';
P.view_events();
check('events: A→Z order drops the year groups for one run', /A→Z/.test(content.innerHTML) && !/evl-rail/.test(content.innerHTML));
listState.events.sort = 'newest';

// ---------- battles ----------
P.view_battles();
check('battles: the war strip renders one mark per battle, by year', /wlr-strip/.test(content.innerHTML) && /wlr-mark/.test(content.innerHTML) && /wlr-mark--draw/.test(content.innerHTML));
check('battles: the strip covers every dated year', /<b>1040<\/b>/.test(content.innerHTML) && /<b>1036<\/b>/.test(content.innerHTML));
check('battles: rows carry VS lines with faction colours', /wlr-vs/.test(content.innerHTML) && /Waluigi and Wario/.test(content.innerHTML) && /Rakasha/.test(content.innerHTML) && /#f5d90a/.test(content.innerHTML));
check('battles: outcome badges read the result line', /wlr-ob--draw/.test(content.innerHTML) && /wlr-ob--win/.test(content.innerHTML) && /wlr-ob--loss/.test(content.innerHTML));
check('battles: unrecorded results say so instead of showing "None"', /Result line unrecorded/.test(content.innerHTML) && !/>None</.test(content.innerHTML));
check('battles: casualties flag where filed', /casualties on file/.test(content.innerHTML));
check('battles: NO events ledger markup on this page', !/evl-row/.test(content.innerHTML) && !/evl-lead/.test(content.innerHTML));
// outcome filter
listState.battles.outcome = 'draw';
P.view_battles();
check('battles: outcome chips filter the ledger', /The Lounge Brawl/.test(content.innerHTML) && !/Fall of Bramblehaven/.test(content.innerHTML));
listState.battles.outcome = 'All';
// fronts mode
listState.battles.view = 'fronts';
P.view_battles();
check('battles: Fronts mode shows the war-room board + major battles', /FRONT BOARD/.test(content.innerHTML) && /The Great Onslaught/.test(content.innerHTML));
listState.battles.view = 'cards';
P.view_battles();
check('battles: Cards mode keeps the illustrated wall', /evcard/.test(content.innerHTML) && /evgrid/.test(content.innerHTML));
listState.battles.view = 'ledger';
// search
listState.battles.query = 'bramblehaven';
P.view_battles();
check('battles: search narrows by place', /Fall of Bramblehaven/.test(content.innerHTML) && !/The Lounge Brawl/.test(content.innerHTML));
listState.battles.query = '';

// classifier unit checks
check('classifier: pyrrhic/draw/loss/win ordering', P.wlrResultClass({ result: 'Pyrrhic — all suffered' }) === 'pyrrhic'
  && P.wlrResultClass({ result: 'Tactical Draw' }) === 'draw'
  && P.wlrResultClass({ result: 'Complete defeat' }) === 'loss'
  && P.wlrResultClass({ result: 'Decisive Victory' }) === 'win'
  && P.wlrResultClass({ result: 'None' }) === 'unknown'
  && P.wlrResultClass({ result: '' }) === 'unknown'
  && P.wlrResultClass({ outcome: 'draw' }) === 'draw');

console.log(ok ? 'ALL EVENTS+BATTLES TESTS PASS' : 'EVENTS+BATTLES TESTS FAILED');
process.exit(ok ? 0 : 1);
