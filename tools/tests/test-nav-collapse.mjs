#!/usr/bin/env node
/* Sidebar section collapse test (pure node, no browser needed).
 *
 * The sidebar drawers (World Systems, Encyclopedia, …) collapse through a
 * `grid-template-rows: 0fr` trick that only works when `.navbody` has exactly
 * ONE grid child. Every link used to be a direct child, so only the first row
 * ever collapsed and no section could actually be minimized. This lifts the
 * real `navSection` / `toggleNavSection` out of index.html (same technique as
 * test-location-map-preview.mjs) and pins the contract: one wrapper child,
 * all links inside it, collapsed flags honored, toggle round-trips through
 * localStorage.
 *
 * Usage: node tools/tests/test-nav-collapse.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(resolve(HERE, '../../index.html'), 'utf8');

let pass = 0, fail = 0;
const ok = (cond, label) => { if (cond) { pass++; console.log('  ok   ' + label); } else { fail++; console.log('  FAIL ' + label); } };

function sliceFn(start, end, label) {
  const a = html.indexOf(start);
  const b = html.indexOf(end);
  if (a < 0 || b < 0 || b < a || html.indexOf(start, a + 1) !== -1) {
    console.log('  FAIL could not uniquely locate ' + label + ' in index.html');
    process.exit(1);
  }
  return html.slice(a, b);
}

const esc = v => String(v ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));

/* ---- navSection: the collapse contract ---- */
console.log('navSection — collapse contract');
const navSectionSrc = sliceFn('function navSection(id,title,links,opts={}){', '\nlet NAV_ACTIVE=null;', 'navSection');
const navSection = new Function('esc', 'NAV_COLLAPSED', 'NAV_USER_SET', navSectionSrc + '\nreturn navSection;')(esc, new Set(), new Set());

const links = [
  '<div class="navlink"><span><span class="emoji">🏛️</span> Congress</span><span class="cnt">16</span></div>',
  '<div class="navlink"><span><span class="emoji">💱</span> Currencies</span></div>',
  '<div class="navlink"><span><span class="emoji">🏦</span> Bank</span></div>',
];

/* Count top-level <div> children inside .navbody with a depth scan: the
   regression this file exists for is "every link a direct child". */
function navBodyChildCount(sectionHtml) {
  const open = '<div class="navbody">';
  const start = sectionHtml.indexOf(open);
  if (start < 0) return -1;
  const body = sectionHtml.slice(start + open.length);
  let depth = 0, kids = 0;
  const re = /<\/?div[\s>]/g;
  let m;
  while ((m = re.exec(body))) {
    if (m[0][1] === '/') { if (depth === 0) break; depth--; }
    else { if (depth === 0) kids++; depth++; }
  }
  return kids;
}

const rendered = navSection('nav-systems-world', 'World Systems', links, { count: 3 });
ok(navBodyChildCount(rendered) === 1, '.navbody carries exactly one wrapper child (the 0fr trick collapses)');
ok(links.every(l => rendered.includes(l)), 'all three links render inside the wrapper');
ok(!rendered.includes('navsec collapsed'), 'open by default when nothing is stored collapsed');

const collapsedSet = new Set(['nav-systems-world']);
const navSectionCollapsed = new Function('esc', 'NAV_COLLAPSED', 'NAV_USER_SET', navSectionSrc + '\nreturn navSection;')(esc, collapsedSet, new Set());
ok(navSectionCollapsed('nav-systems-world', 'World Systems', links, {}).includes('navsec collapsed'),
  'stored collapse renders the collapsed class');
ok(!navSectionCollapsed('nav-other', 'Other', links, {}).includes('navsec collapsed'),
  'other sections stay open when only one id is stored');
ok(!navSectionCollapsed('nav-systems-world', 'World Systems', links, { forceOpen: true }).includes('navsec collapsed'),
  'forceOpen expands a default-collapsed section holding the active page');
const userSet = new Set(['nav-systems-world']);
const navSectionUser = new Function('esc', 'NAV_COLLAPSED', 'NAV_USER_SET', navSectionSrc + '\nreturn navSection;')(esc, collapsedSet, userSet);
ok(navSectionUser('nav-systems-world', 'World Systems', links, { forceOpen: true }).includes('navsec collapsed'),
  'an explicit user collapse wins over forceOpen on re-render');
const staticHead = navSection('nav-top', 'Pinned', links, { alwaysOpen: true });
ok(staticHead.includes('navhead static') && !staticHead.includes('toggleNavSection('),
  'alwaysOpen sections render a static header with no toggle');
ok(navSection('nav-top', '', links, { alwaysOpen: true }).includes('<div class="navbody">'),
  'the pinned Home/Search block renders links with no header at all');
ok(rendered.includes("onclick=\"toggleNavSection('nav-systems-world')\""),
  'normal headers wire the header click to the toggle');
ok(navSection('nav-empty', 'Empty', [], {}) === '', 'a section with no links renders nothing');

/* Sections start minimized on a first visit (no stored state). */
const defM = html.match(/const NAV_DEFAULT_COLLAPSED=\[([^\]]*)\]/);
const defIds = defM ? defM[1] : '';
for (const id of ['nav-systems', 'nav-world', 'nav-encyclopedia', 'nav-progression', 'nav-systems-world', 'nav-account']) {
  ok(defIds.includes(id), `first-visit default collapses ${id}`);
}

/* ---- toggleNavSection: the click round-trip ---- */
console.log('toggleNavSection — click round-trip');
const toggleSrc = sliceFn('function toggleNavSection(id){', '\nfunction navLink(o){', 'toggleNavSection');

function fakeNode(collapsed) {
  const s = new Set(collapsed ? ['collapsed'] : []);
  return { classList: { contains: c => s.has(c), toggle: (c, f) => { f ? s.add(c) : s.delete(c); } }, _s: s };
}
function harness(nodes) {
  const store = {};
  const fakeDoc = { querySelectorAll: () => nodes };
  const fakeLS = { getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); } };
  const collapsed = new Set(), user = new Set();
  const fn = new Function('document', 'localStorage', 'NAV_COLLAPSED', 'NAV_USER_SET', 'NAV_COLLAPSE_KEY',
    toggleSrc + '\nreturn toggleNavSection;')(fakeDoc, fakeLS, collapsed, user, 'test-key');
  return { fn, collapsed, user, store };
}

{
  const n = fakeNode(false);
  const h = harness([n]);
  h.fn('nav-systems-world');
  ok(n._s.has('collapsed'), 'clicking an open section collapses it in the DOM');
  ok(h.collapsed.has('nav-systems-world') && h.user.has('nav-systems-world'), 'the collapse is remembered + marked user-set');
  ok((h.store['test-key'] || '').includes('nav-systems-world'), 'the collapse persists to localStorage');
}
{
  const n = fakeNode(true);
  const h = harness([n]);
  h.collapsed.add('nav-systems-world');
  h.fn('nav-systems-world');
  ok(!n._s.has('collapsed'), 'clicking a collapsed section re-opens it in the DOM');
  ok(!h.collapsed.has('nav-systems-world'), 're-opening clears the stored collapse');
}
{
  /* The pre-fix two-click bug: stored flag says collapsed while forceOpen has
     the drawer visibly open — the toggle must read the DOM, not the flag. */
  const n = fakeNode(false);
  const h = harness([n]);
  h.collapsed.add('nav-systems-world');
  h.fn('nav-systems-world');
  ok(n._s.has('collapsed'), 'first click on a visibly-open drawer closes it (no dead click)');
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
