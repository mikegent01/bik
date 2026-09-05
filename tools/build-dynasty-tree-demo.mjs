// Prototype an SVG family tree for the dynasty data and emit a standalone demo
// page. Reads DYNASTY_SYSTEM straight out of index.html so the demo always
// reflects real data, never a hand-copied sample.
//
//   node tools/build-dynasty-tree-demo.mjs
//
// Writes docs/prototypes/dynasty-tree-demo.html
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'docs', 'prototypes', 'dynasty-tree-demo.html');

function loadDynasties() {
  const s = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const key = 'const DYNASTY_SYSTEM=';
  const i = s.indexOf(key);
  if (i < 0) throw new Error('DYNASTY_SYSTEM not found in index.html');
  const j = s.indexOf('};', i);
  return JSON.parse(s.slice(i + key.length, j + 1));
}

const NODE_W = 190, NODE_H = 56, H_GAP = 26, V_GAP = 86, PAD = 30;

export function layout(house) {
  const members = (house.members || []).slice();
  if (!members.length) return null;
  const byId = new Map(members.map((m) => [m.id, m]));

  // Authored `generation` is unreliable: 8 members carry "Unknown" and cadet
  // branches omit parents entirely. Prefer derived depth, fall back to the
  // authored number, and guard against cycles.
  const depth = new Map(), seen = new Set();
  const resolve = (m) => {
    if (depth.has(m.id)) return depth.get(m.id);
    if (seen.has(m.id)) return 0;
    seen.add(m.id);
    const ps = (m.parents || []).filter((p) => byId.has(p));
    let d;
    if (ps.length) d = Math.max(...ps.map((p) => resolve(byId.get(p)))) + 1;
    else { const n = Number(m.generation); d = Number.isFinite(n) ? n - 1 : 0; }
    depth.set(m.id, d);
    return d;
  };
  members.forEach(resolve);

  const rows = new Map();
  for (const m of members) {
    const d = depth.get(m.id);
    if (!rows.has(d)) rows.set(d, []);
    rows.get(d).push(m);
  }
  // Generations are sparse (Rosewood jumps 2 -> 6, Sarasa starts at 7), so rows
  // are packed by rank; drawing at raw generation number leaves dead canvas.
  const order = [...rows.keys()].sort((a, b) => a - b);
  const rank = new Map(order.map((d, i) => [d, i]));

  const pos = new Map();

  // A house with no blood links is a roster, not a tree. Laying 28 Bone-Line
  // members in one row produced a 4818px canvas nobody can read, so wrap flat
  // rosters into a grid and report them honestly rather than pretending depth.
  const hasLinks = members.some((m) =>
    (m.parents || []).some((p) => byId.has(p)) || (m.children || []).some((c) => byId.has(c)));
  if (!hasLinks) {
    const cols = Math.min(members.length, Math.max(3, Math.ceil(Math.sqrt(members.length * 1.9))));
    members.forEach((m, i) => pos.set(m.id, {
      x: PAD + (i % cols) * (NODE_W + H_GAP),
      y: PAD + Math.floor(i / cols) * (NODE_H + 18),
    }));
    const rowsUsed = Math.ceil(members.length / cols);
    return {
      pos, edges: [], spouses: [], roster: true,
      W: PAD * 2 + cols * NODE_W + (cols - 1) * H_GAP,
      H: PAD * 2 + rowsUsed * NODE_H + (rowsUsed - 1) * 18,
      depth: new Map(members.map((m) => [m.id, 0])), rowCount: order.length, members,
    };
  }

  const widest = Math.max(...order.map((d) => rows.get(d).length));
  const provW = PAD * 2 + widest * NODE_W + (widest - 1) * H_GAP;

  for (const d of order) {
    const row = rows.get(d);
    const span = row.length * NODE_W + (row.length - 1) * H_GAP;
    let cursor = (provW - span) / 2;
    row.forEach((m) => {
      const ps = (m.parents || []).filter((p) => pos.has(p));
      const want = ps.length ? ps.reduce((s, p) => s + pos.get(p).x, 0) / ps.length : null;
      pos.set(m.id, { x: want == null ? cursor : want, y: PAD + rank.get(d) * (NODE_H + V_GAP) });
      cursor += NODE_W + H_GAP;
    });
    const sorted = row.slice().sort((a, b) => pos.get(a.id).x - pos.get(b.id).x);
    for (let i = 1; i < sorted.length; i++) {
      const prev = pos.get(sorted[i - 1].id), cur = pos.get(sorted[i].id);
      if (cur.x - prev.x < NODE_W + H_GAP) cur.x = prev.x + NODE_W + H_GAP;
    }
  }
  const minAll = Math.min(...members.map((m) => pos.get(m.id).x));
  if (minAll !== PAD) for (const m of members) pos.get(m.id).x += PAD - minAll;

  const W = Math.max(...members.map((m) => pos.get(m.id).x)) + NODE_W + PAD;
  const H = PAD * 2 + (order.length - 1) * (NODE_H + V_GAP) + NODE_H;

  const edges = [];
  const push = (a, b) => { if (pos.has(a) && pos.has(b) && !edges.some((e) => e[0] === a && e[1] === b)) edges.push([a, b]); };
  for (const m of members) {
    for (const c of m.children || []) push(m.id, c);
    for (const p of m.parents || []) push(p, m.id);
  }
  const spouses = [];
  for (const m of members) {
    const sp = m.spouse;
    if (sp && pos.has(sp) && m.id < sp) spouses.push([m.id, sp]);
  }
  return { pos, edges, spouses, W, H, depth, rowCount: order.length, members };
}

const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function svg(house, L) {
  const [c0, c1] = house.colors || ['#c9a227', '#8a4bff'];
  const uid = Math.random().toString(36).slice(2, 8);
  const maxDepth = Math.max(1, L.rowCount - 1);

  // Branches: cubic beziers that leave the parent downward and arrive at the
  // child from above, tapering with depth so the trunk reads heavier than twigs.
  const branches = L.edges.map(([a, b]) => {
    const p = L.pos.get(a), c = L.pos.get(b);
    const x1 = p.x + NODE_W / 2, y1 = p.y + NODE_H;
    const x2 = c.x + NODE_W / 2, y2 = c.y;
    const mid = y1 + (y2 - y1) * 0.55;
    const w = Math.max(1.1, 4.2 - (L.depth.get(a) / maxDepth) * 2.6);
    return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} C ${x1.toFixed(1)} ${mid.toFixed(1)}, ${x2.toFixed(1)} ${(y2 - (y2 - y1) * 0.45).toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}"
      fill="none" stroke="url(#g${uid})" stroke-width="${w.toFixed(2)}" stroke-linecap="round" opacity=".85"/>`;
  }).join('');

  const marriages = L.spouses.map(([a, b]) => {
    const p = L.pos.get(a), q = L.pos.get(b);
    const y = Math.min(p.y, q.y) + NODE_H / 2;
    const x1 = Math.min(p.x, q.x) + NODE_W, x2 = Math.max(p.x, q.x);
    if (x2 - x1 < 4) return '';
    return `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${esc(c1)}" stroke-width="1.4" stroke-dasharray="3 4" opacity=".7"/>`;
  }).join('');

  const nodes = L.members.map((m) => {
    const p = L.pos.get(m.id);
    const dead = String(m.status || '').toLowerCase() === 'deceased';
    const glyph = m.icon || m.portrait || '👤';
    const name = m.name || m.id;
    // textLength + lengthAdjust lets long names compress to fit the card
    // instead of being cut mid-word ("Lady Petra Stoneshe...").
    const AVAIL = NODE_W - 44;
    const fits = name.length * 6.6 <= AVAIL;
    const meta = [m.born ? `b. ${m.born}` : '', m.died ? `d. ${m.died}` : ''].filter(Boolean).join(' · ');
    return `<g class="n${dead ? ' dead' : ''}" transform="translate(${p.x.toFixed(1)},${p.y.toFixed(1)})">
      <rect width="${NODE_W}" height="${NODE_H}" rx="9" class="box"/>
      <rect width="3.5" height="${NODE_H}" rx="2" fill="${esc(dead ? '#6b7280' : c1)}"/>
      <text x="14" y="21" class="glyph">${esc(glyph)}</text>
      <text x="34" y="22" class="nm"${fits ? '' : ` textLength="${AVAIL}" lengthAdjust="spacingAndGlyphs"`}>${esc(name)}</text>
      <text x="34" y="38" class="mt">${esc(meta || m.epithet || '')}</text>
      <title>${esc(name)}${m.epithet ? ' — ' + esc(m.epithet) : ''}</title>
    </g>`;
  }).join('');

  // Natural size in CSS pixels. width="100%" rescaled every tree to its
  // container: a 402px-wide house blew up ~3.7x and the 4818px Bone-Line shrank
  // to unreadable. One SVG unit must stay one pixel; .scroll pans the wide ones.
  return `<svg viewBox="0 0 ${Math.ceil(L.W)} ${Math.ceil(L.H)}" width="${Math.ceil(L.W)}" height="${Math.ceil(L.H)}" class="tree">
    <defs><linearGradient id="g${uid}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${esc(c0)}" stop-opacity=".95"/>
      <stop offset="100%" stop-color="${esc(c1)}" stop-opacity=".55"/>
    </linearGradient></defs>
    <g class="branches">${branches}</g>${marriages}${nodes}</svg>`;
}

const D = loadDynasties();
const houses = [];
for (const [id, h] of Object.entries(D.houses)) {
  houses.push([id, h]);
  for (const cb of h.cadetBranches || []) if ((cb.members || []).length) houses.push([cb.id || '', { ...cb, _cadet: true }]);
}

const blocks = houses.map(([id, h]) => {
  const L = layout(h);
  if (!L) return '';
  const flat = L.edges.length === 0;
  return `<section class="house${h._cadet ? ' cadet' : ''}">
    <h2>${esc(h.sigil || '🏰')} ${esc(h.name || id)} ${h._cadet ? '<em>cadet branch</em>' : ''}</h2>
    <p class="stat">${L.members.length} members · ${L.edges.length} blood links · ${L.rowCount} generations · canvas ${Math.round(L.W)}×${Math.round(L.H)}
    ${flat ? '<b class="warn">— no parent/child data, drawn as a roster grid</b>' : ''}</p>
    <div class="scroll">${svg(h, L)}</div>
  </section>`;
}).join('\n');

const totals = houses.reduce((a, [, h]) => {
  const L = layout(h); if (!L) return a;
  a.n += L.members.length; a.e += L.edges.length; a.flat += L.edges.length ? 0 : 1; a.h += 1; return a;
}, { n: 0, e: 0, flat: 0, h: 0 });

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `<!doctype html><meta charset="utf-8">
<title>Dynasty tree — SVG prototype</title>
<style>
 body{background:#0e0b13;color:#e8e4ef;font:14px/1.6 system-ui,sans-serif;margin:0;padding:28px 22px 60px}
 h1{font-size:22px;margin:0 0 4px} .lede{color:#a99fc0;max-width:70ch;margin:0 0 22px}
 .house{background:#161320;border:1px solid #2a2438;border-radius:12px;padding:16px 18px;margin:0 0 18px}
 .house.cadet{margin-left:28px;background:#131020;border-style:dashed}
 h2{font-size:16px;margin:0 0 2px;font-weight:600} h2 em{font-size:11px;color:#8b7fa8;font-style:normal;text-transform:uppercase;letter-spacing:.08em}
 .stat{color:#8b7fa8;font-size:12px;margin:0 0 12px} .warn{color:#e0a458}
 .scroll{overflow-x:auto;padding-bottom:6px}
 .tree{display:block}
 .box{fill:#1e1a2b;stroke:#392f50;stroke-width:1}
 .n:hover .box{fill:#282136;stroke:#6f5ca8}
 .n.dead .box{fill:#171520;stroke:#2c2740} .n.dead .nm{fill:#9a92ad}
 .nm{fill:#efeaf8;font:600 12.5px system-ui,sans-serif}
 .mt{fill:#8b7fa8;font:11px system-ui,sans-serif}
 .glyph{font-size:15px}
 .sum{background:#161320;border:1px solid #2a2438;border-radius:12px;padding:14px 18px;margin:0 0 22px}
 code{background:#221c33;padding:1px 5px;border-radius:4px}
</style>
<h1>Dynasty family tree — SVG prototype</h1>
<p class="lede">Generated from the live <code>DYNASTY_SYSTEM</code> in <code>index.html</code> by
<code>tools/build-dynasty-tree-demo.mjs</code>. Curves are real parent→child links, tapering with
depth; dashed horizontals are marriages; greyed cards are deceased. Nothing here is hand-placed.</p>
<div class="sum"><b>${totals.h} houses with members · ${totals.n} nodes · ${totals.e} blood links drawn.</b><br>
<span style="color:#e0a458">${totals.flat} of ${totals.h} houses have no parent/child data at all</span> — those are
laid out as wrapped roster grids rather than fake trees, which is the real finding.</div>
${blocks}
`, 'utf8');

console.log(`wrote ${path.relative(ROOT, OUT)}`);
console.log(`${totals.h} houses · ${totals.n} nodes · ${totals.e} edges · ${totals.flat} flat (no links)`);
