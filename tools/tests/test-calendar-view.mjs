// Headless render test of the redesigned calendar (calx-*) — the code is
// extracted straight out of index.html and run against a minimal stub of the
// data/DOM layer. The render contract being pinned down:
//
//   one screen   month grid AND day panel render together (no tab hunting)
//   in place     clicking a day answers beside the grid — Router untouched,
//                URL updated silently, panel re-rendered
//   keyboard     arrow keys step days in place; month edges route out
//   deep links   timeline tab carries the year rail; years/year tabs render
//   voice        the read-aloud chip and .cal-voice hooks are present
//
//   node tools/tests/test-calendar-view.mjs
import { readFileSync } from 'node:fs';

const repoRoot = new URL('../../', import.meta.url);
const html = readFileSync(new URL('index.html', repoRoot), 'utf8');
const start = html.indexOf('/* ============================ THE CALENDAR');
const end = html.indexOf('function renderMiniCalendar(');
if (start < 0 || end < 0) { console.error('calendar block not found in index.html'); process.exit(1); }
const block = html.slice(start, end);

// ---------- stubs: the data + DOM the calendar leans on ----------
const esc = s => (s == null ? '' : String(s)).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const months = Array.from({ length: 12 }, (_, i) => ({ name: 'Month' + (i + 1), abbr: 'M' + (i + 1), days: 30, ordinal: i + 1, icon: '🗓️', season: i < 3 ? 'Spring' : i < 6 ? 'Summer' : i < 9 ? 'Autumn' : 'Winter' }));
const weekdays = ['Starday', 'Workday', 'Midday', 'Thewsday', 'Freeday', 'Sunsday', 'Restday'].map((name, i) => ({ name, abbr: name.slice(0, 2), isRestDay: i === 6 }));
const imperial = { id: 'imperial', name: 'Imperial', isDefault: true, months, weekdays, intercalaryDays: [], cssTheme: { className: 'cal-imperial', accent: '#8a4bff', accent2: '#e0b400' } };
const feyish = { id: 'feyward', name: 'Feyward Reckoning', months: months.slice(0, 6), weekdays: weekdays.slice(0, 5), intercalaryDays: [{ name: 'The Sweep', days: 2, afterMonth: 9, icon: '✨', color: '#ff66cc', description: 'days outside the count' }], cssTheme: { className: 'cal-fey', accent: '#39c48f', accent2: '#e0b400' } };
const DATA = {
  calendars: { calendars: [imperial, feyish] },
  events: [{ id: 'e1', name: 'The Fall of the Fifth', date: '5 Aethel, 1040 BF', summary: 'A summary worth reading.' }],
  battles: [], trials: [], majorBattles: [], historicalTimeline: [],
  calendarHolidays: { holidays: { imperial: [{ name: 'Harvest', icon: '🌾', month: 9, day: 12, description: 'the bringing in', type: 'Observance', color: '#3fa34d' }] } },
  currentDate: { year: 1040, monthIndex: 8, day: 4 },
};
const CAL_STATE = { year: 1040, monthIndex: 8, day: 5, tab: 'month', calendarId: 'imperial' };
const CUR = { ...DATA.currentDate };

const getActiveCalendar = () => imperial;
const getMonthData = mi => months[mi] || months[0];
const calAbsoluteDay = (cal, y, mi, d) => y * 360 + mi * 30 + d;
const calWeekdayForDate = (cal, y, mi, d) => weekdays[(d - 1) % 7];
const calDateFromAbsolute = (cal, abs) => { const d = ((abs - 1) % 30) + 1; const mi = Math.floor(((abs - 1) % 360) / 30); return { year: Math.floor((abs - 1) / 360), monthIndex: mi, day: d }; };
const calDaysInYear = () => 360;
const calIntercalaryForYear = (cal) => (cal.id === 'imperial' ? [] : feyish.intercalaryDays);
const calSeasonForMonth = (cal, ordinal) => ({ name: 'Autumn', icon: '🍂', description: 'the year leaning over' });
const getHolidaysForCalendar = id => (DATA.calendarHolidays.holidays[id] || []);
const getCalendarThemeCSS = () => '';
const collectEventsForDay = (y, mi, d) => d === 5
  ? [{ kind: 'event', id: 'e1', name: 'The Fall of the Fifth', date: '5 Aethel, 1040 BF', summary: 'A summary worth reading.', route: '#/article/e1' },
     { kind: 'battle', id: 'b1', name: 'The Skirmish', date: '5 Aethel, 1040 BF', summary: '', route: '#/article/b1' }]
  : (d === 12 ? [{ kind: 'holiday', id: 'h1', name: '🌾 Harvest', date: 'Month9 12', summary: 'the bringing in', route: '#/calendar', holiday: { icon: '🌾', type: 'Observance' } }] : []);
const collectEventsForMonth = () => collectEventsForDay(1040, 8, 5).concat(collectEventsForDay(1040, 8, 12));
const allYears = () => [1040, 1039];
const collectYear = () => [{}, {}, {}];
const parseYear = s => (String(s).match(/(\d+)\s*BF/) || [])[1] ? parseInt(String(s).match(/(\d+)\s*BF/)[1], 10) : null;
const parseMonth = () => 9;
const parseDay = () => 5;
const getChronicleIndex = () => ({ all: [] });
const monthName = mo => 'Month' + mo;
const initCalendarState = () => {};
const renderSidebar = () => {};
const readAloudChip = () => '<span class="readaloud-chip">🔊 Read aloud</span><span class="chip ra-pick-chip">🎯 Pick text</span>';
const deadlinePanel = () => '';
const pocketClockPanel = () => '';

const router = { last: null, go(r) { this.last = r; } };
const historyStub = { last: null, replaceState(a, b, u) { this.last = u; } };
const content = { innerHTML: '' };
const el = id => (id === 'content' ? content : { innerHTML: '' });

// a fake grid + panel so calxSelectDay can do its in-place magic
const mkCell = d => ({ dataset: { d: String(d) }, classList: { sel: false, toggle(_c, on) { this.sel = on; } } });
const cells = Array.from({ length: 30 }, (_, i) => mkCell(i + 1));
const gridFake = {
  querySelectorAll: () => cells,
  querySelector: () => ({ scrollIntoView() {} }),
};
const panelFake = { _h: '', set outerHTML(v) { this._h = v; }, get outerHTML() { return this._h; } };
const document = { getElementById: id => (id === 'calx-grid' ? gridFake : id === 'calx-day' ? panelFake : null) };
const location = { hash: '#/calendar' };
const window = { scrollTo() {} };

const loader = new Function(
  'DATA', 'CAL_STATE', 'CUR', 'el', 'esc', 'document', 'location', 'window', 'history', 'Router',
  'getActiveCalendar', 'getMonthData', 'calAbsoluteDay', 'calWeekdayForDate', 'calDateFromAbsolute',
  'calDaysInYear', 'calIntercalaryForYear', 'calSeasonForMonth', 'getHolidaysForCalendar',
  'getCalendarThemeCSS', 'collectEventsForDay', 'collectEventsForMonth', 'allYears', 'collectYear',
  'parseYear', 'parseMonth', 'parseDay', 'getChronicleIndex', 'monthName', 'initCalendarState',
  'renderSidebar', 'readAloudChip', 'deadlinePanel', 'pocketClockPanel',
  block + '\nreturn {view_calendar, calxGridHtml, calxDayPanelHtml, calxSelectDay, calxStepDay, calxMoveMonth, calxKeys};');
const C = loader(DATA, CAL_STATE, CUR, el, esc, document, location, window, historyStub, router,
  getActiveCalendar, getMonthData, calAbsoluteDay, calWeekdayForDate, calDateFromAbsolute,
  calDaysInYear, calIntercalaryForYear, calSeasonForMonth, getHolidaysForCalendar,
  getCalendarThemeCSS, collectEventsForDay, collectEventsForMonth, allYears, collectYear,
  parseYear, parseMonth, parseDay, getChronicleIndex, monthName, initCalendarState,
  renderSidebar, readAloudChip, deadlinePanel, pocketClockPanel);

let ok = true;
const check = (name, cond) => { console.log((cond ? 'OK  ' : 'FAIL'), name); if (!cond) ok = false; };

// ---------- 1. month tab: grid + panel on one screen ----------
location.hash = '#/calendar';
C.view_calendar();
check('month: renders a hero with the read-aloud chip', /calx-hero/.test(content.innerHTML) && /readaloud-chip/.test(content.innerHTML));
check('month: the grid AND the day panel share the screen', /id="calx-grid"/.test(content.innerHTML) && /id="calx-day"/.test(content.innerHTML));
check('month: the selected day carries its events by name', /The Fall of the Fifth/.test(content.innerHTML) && /The Skirmish/.test(content.innerHTML));
check('month: month strip + year box + calendar dropdown all present', /calx-strip/.test(content.innerHTML) && /calx-yearbox/.test(content.innerHTML) && /calx-calsel/.test(content.innerHTML));
check('month: voice hooks are in place for read-aloud', /cal-voice/.test(content.innerHTML));
check('month: the reference shelf is folded, not sprawled', /details class="calx-about card"/.test(content.innerHTML));

// ---------- 2. in-place day selection: no Router, no re-render ----------
router.last = null;
C.calxSelectDay(12);
check('select: the panel re-rendered beside the grid', /Harvest/.test(panelFake._h));
check('select: Router was NOT asked for a page reload', router.last === null);
check('select: the URL updated silently to the day', historyStub.last === '#/calendar/imperial/month/1040/8/12');
check('select: the grid selection flag moved', cells[11].classList.sel === true && cells[4].classList.sel === false);

// ---------- 3. keyboard: arrows step days; month edges route out ----------
const key = k => C.calxKeys({ key: k, preventDefault() {} });
key('ArrowRight');
check('keys: → steps one day in place', CAL_STATE.day === 13 && /quiet day/.test(panelFake._h));
key('Home');
check('keys: Home jumps to the first of the month', CAL_STATE.day === 1);
key('End');
check('keys: End jumps to the last day of the month', CAL_STATE.day === 30);
router.last = null;
C.calxStepDay(1);          // off the month edge
check('keys: stepping past the month routes to the next month (no dead end)', router.last === '#/calendar/imperial/month/1040/9/1');
router.last = null;
C.calxMoveMonth(-1);
check('strip: month jump routes cleanly', router.last === '#/calendar/imperial/month/1040/7/1');

// ---------- 4. the other tabs still render, with the year rail ----------
location.hash = '#/calendar/imperial/timeline/1040/8/5';
C.view_calendar();
check('timeline: the year rail renders with jump buttons', /calx-yrail/.test(content.innerHTML) && /tly-1040/.test(content.innerHTML));
check('timeline: cards deep-link to records', /tl-card/.test(content.innerHTML) && /#\/article\/e1/.test(content.innerHTML));
location.hash = '#/calendar/imperial/years/1040/8/5';
C.view_calendar();
check('years: the year index renders', /All Years/.test(content.innerHTML));
location.hash = '#/calendar/imperial/year/1040/8/5';
C.view_calendar();
check('year: twelve month tiles with entry counts', /Month1/.test(content.innerHTML) && /mini-1040-0/.test(content.innerHTML));

// ---------- 5. out-of-range input clamps instead of breaking ----------
location.hash = '#/calendar/imperial/month/1040/99/99';
C.view_calendar();
check('bounds: impossible month/day clamp to real ones', CAL_STATE.monthIndex <= 11 && CAL_STATE.day <= months[CAL_STATE.monthIndex].days);

console.log(ok ? 'ALL CALENDAR TESTS PASS' : 'CALENDAR TESTS FAILED');
process.exit(ok ? 0 : 1);
