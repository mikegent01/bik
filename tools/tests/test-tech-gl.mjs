/**
 * Discovered Technology — the 3D side: tech-gl.js (renderer) + tech-models.js (recipes).
 *
 * There is no browser here, so the software rasteriser is the witness: every
 * recipe technology.json names is built, measured and rendered to pixels, and
 * the maths the WebGL path shares with it is checked directly.
 *
 *   geometry   every primitive is closed, indexed in range, unit normals,
 *              and orientation-proof (a lathe profile listed either way, a
 *              prism outline wound either way, comes out facing outward)
 *   maths      column-major m4: rotations map axes as documented, lookAt
 *              puts the eye where it says, normal matrix of a rotation is it
 *   models     26 ledger entries → 26 models: parts resolve palette keys,
 *              bounds and radius are finite, triangle budget holds, the
 *              render covers a sane share of the frame, front/back winding
 *              is consistent (culling changes almost nothing)
 *   mount      no canvas → null (the page shows the icon); a 2D context →
 *              software mode, frames drawn, destroy() stops the loop
 *
 * Run: node tools/tests/test-tech-gl.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');

let pass = 0, fail = 0;
const check = (name, cond, extra = '') => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${extra}`); }
};
const near = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps;
const nearV = (a, b, eps = 1e-6) => a.length === b.length && a.every((v, i) => near(v, b[i], eps));

/* ---------- boot both classic scripts against a bare window ---------- */
const win = {};
win.window = win;
new Function('window', read('assets/technology/tech-gl.js'))(win);
new Function('window', read('assets/technology/tech-models.js'))(win);
const GL = win.TECH_GL, MODELS = win.TECH_MODELS;
const ledger = JSON.parse(read('Reputation-Matrix2/data/technology.json'));

console.log('\n# surface');
check('TECH_GL exposes compile / renderSoft / mount / GLRenderer and the shader sources',
  GL && ['compile', 'renderSoft', 'mount', 'GLRenderer', 'camera', 'shade', 'updateWorld'].every(k => typeof GL[k] === 'function')
  && typeof GL.VS === 'string' && typeof GL.FS === 'string');
check('shaders are WebGL 1 (gl_Position / gl_FragColor, precision set, premultiplied output)',
  GL.VS.includes('gl_Position') && GL.FS.includes('gl_FragColor') && /precision\s+(medium|high)p\s+float/.test(GL.FS) && /\*\s*u?alpha|alpha\s*\*|\*\s*uAlpha|vAlpha/i.test(GL.FS));
check('TECH_MODELS exposes recipes / names / parts / build and no THREE anything',
  MODELS && typeof MODELS.build === 'function' && typeof MODELS.parts === 'function' && Array.isArray(MODELS.names) && MODELS.names.length >= 25
  && !/THREE/.test(read('assets/technology/tech-models.js')) && !/THREE|jsdelivr|import\(/.test(read('assets/technology/technology.js')));
check('neither script touches document at load time (they booted against {})', true);

console.log('\n# maths');
const { m4, v3 } = GL;
const PI = Math.PI;
check('rotX(π/2) maps +y to +z', nearV(m4.point(m4.rotX(PI / 2), [0, 1, 0]), [0, 0, 1]));
check('rotY(π/2) maps +z to +x', nearV(m4.point(m4.rotY(PI / 2), [0, 0, 1]), [1, 0, 0]));
check('rotZ(−π/2) maps +y to +x (the muzzle-forward trick the recipes use)', nearV(m4.point(m4.rotZ(-PI / 2), [0, 1, 0]), [1, 0, 0]));
check('mul(A,B) applies B first (column-major, like WebGL)',
  nearV(m4.point(m4.mul(m4.translate([1, 0, 0]), m4.rotZ(PI / 2)), [1, 0, 0]), [1, 1, 0]));
check('trs = translate · rotate · scale', nearV(m4.point(m4.trs([1, 2, 3], [0, 0, PI / 2], [2, 2, 2]), [1, 0, 0]), [1, 4, 3]));
const V = m4.lookAt([0, 0, 5], [0, 0, 0], [0, 1, 0]);
check('lookAt moves the eye to the origin looking down −z', nearV(m4.point(V, [0, 0, 5]), [0, 0, 0]) && nearV(m4.point(V, [0, 0, 0]), [0, 0, -5]));
const R = m4.rotY(0.7);
check('normal matrix of a pure rotation is the rotation', nearV(m4.normal(m4.normal3(R), [1, 0, 0]), m4.point(R, [1, 0, 0]).map(x => x)));
check('normal matrix of a non-uniform scale keeps normals perpendicular',
  near(v3.dot(m4.normal(m4.normal3(m4.scale([1, 3, 1])), v3.norm([1, 1, 0])), m4.point(m4.scale([1, 3, 1]), [1, -1, 0])), 0, 1e-6));
const P = m4.perspective(1, 1, 0.1, 100);
check('perspective maps near to −1 and far to +1', near(m4.clip(P, [0, 0, -0.1])[2] / m4.clip(P, [0, 0, -0.1])[3], -1, 1e-6) && near(m4.clip(P, [0, 0, -100])[2] / m4.clip(P, [0, 0, -100])[3], 1, 1e-6));

console.log('\n# geometry');
const geo = GL.geometry;
const closed = g => {
  /* every edge used by exactly two triangles in opposite directions = a watertight, consistently wound mesh */
  const e = new Map(); let bad = 0;
  const key = (a, b) => `${a}|${b}`;
  const pos = g.pos; const r5 = v => (Math.round(v * 1e5) / 1e5) + 0; const vkey = i => `${r5(pos[i * 3])},${r5(pos[i * 3 + 1])},${r5(pos[i * 3 + 2])}`;
  const vid = new Map(); const canon = i => { const k = vkey(i); if (!vid.has(k)) vid.set(k, vid.size); return vid.get(k); };
  for (let i = 0; i < g.idx.length; i += 3) {
    const t = [canon(g.idx[i]), canon(g.idx[i + 1]), canon(g.idx[i + 2])];
    if (t[0] === t[1] || t[1] === t[2] || t[0] === t[2]) continue;   /* pole / cap-centre fans collapse to degenerate strips */
    for (let k = 0; k < 3; k++) { const a = t[k], b = t[(k + 1) % 3]; e.set(key(a, b), (e.get(key(a, b)) || 0) + 1); }
  }
  for (const [k, n] of e) { const [a, b] = k.split('|'); if (n !== 1 || e.get(key(b, a)) !== 1) bad++; }
  return bad === 0;
};
const sane = g => {
  const nv = g.pos.length / 3;
  if (g.nrm.length !== g.pos.length || g.idx.length % 3) return false;
  for (let i = 0; i < g.idx.length; i++) if (!(g.idx[i] >= 0 && g.idx[i] < nv)) return false;
  for (let i = 0; i < g.nrm.length; i += 3) if (!near(Math.hypot(g.nrm[i], g.nrm[i + 1], g.nrm[i + 2]), 1, 1e-3)) return false;
  return true;
};
const facesOut = g => { /* every triangle's winding agrees with its stored normal (what back-face culling and gl_FrontFacing rely on) */
  for (let i = 0; i < g.idx.length; i += 3) {
    const [a, b, c] = [g.idx[i], g.idx[i + 1], g.idx[i + 2]].map(k => [g.pos[k * 3], g.pos[k * 3 + 1], g.pos[k * 3 + 2]]);
    const f = v3.cross(v3.sub(b, a), v3.sub(c, a)); const k = g.idx[i] * 3;
    if (f[0] * g.nrm[k] + f[1] * g.nrm[k + 1] + f[2] * g.nrm[k + 2] < -1e-9) return false;
  }
  return true;
};
const box = geo.box(1, 2, 3);
check('box: 12 triangles, in range, unit normals, watertight', box.idx.length === 36 && sane(box) && closed(box));
const cyl = geo.cylinder(0.5, 0.7, 2, 16, true);
check('cylinder with caps is watertight and sane', sane(cyl) && closed(cyl));
check('cylinder without caps is open (the light beams rely on it)', !closed(geo.cylinder(0.5, 0.7, 2, 16, false)));
check('sphere / torus are sane and watertight', [geo.sphere(1, 16, 10), geo.torus(1, 0.3, 8, 24)].every(g => sane(g) && closed(g)));
check('every primitive winds the way its normals point (box, cylinder, cone, sphere, torus, lathe, prism)',
  [box, cyl, geo.cylinder(0, 0.7, 2, 16, true), geo.sphere(1, 16, 10), geo.torus(1, 0.3, 8, 24), geo.lathe([[0.2, 0], [0.5, 0.5], [0.2, 1]], 12), geo.prism([[-1, -1], [1, -1], [0, 1]], 1)].every(facesOut));
const outward = g => { let s = 0; for (let i = 0; i < g.pos.length; i += 3) s += g.nrm[i] * g.pos[i] + g.nrm[i + 2] * g.pos[i + 2]; return s; };
const up = geo.lathe([[0.2, 0], [0.5, 0.5], [0.2, 1]], 12), down = geo.lathe([[0.2, 1], [0.5, 0.5], [0.2, 0]], 12);
check('lathe: a profile listed top-to-bottom still faces outward', sane(up) && sane(down) && outward(up) > 0 && outward(down) > 0 && near(outward(up), outward(down), 1e-6));
const faceZ = g => { const [a, b, c] = [g.idx[0], g.idx[1], g.idx[2]].map(i => [g.pos[i * 3], g.pos[i * 3 + 1], g.pos[i * 3 + 2]]); return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]); };
const ccw = geo.prism([[-1, -1], [1, -1], [0, 1]], 1), cw = geo.prism([[0, 1], [1, -1], [-1, -1]], 1);
check('prism: a clockwise outline is reversed so the +z face winds outward', sane(ccw) && sane(cw) && faceZ(ccw) > 0 && faceZ(cw) > 0 && closed(ccw) && closed(cw));
check('hexToRgb reads #rgb, #rrggbb and falls back to grey', nearV(GL.hexToRgb('#ff0000'), [1, 0, 0]) && nearV(GL.hexToRgb('#0f0'), [0, 1, 0]) && GL.hexToRgb('nonsense').every(c => c > 0.3 && c < 0.7));

console.log('\n# recipes');
check('every recipe technology.json names exists', ledger.entries.every(e => MODELS.names.includes(e.model.recipe)), ledger.entries.filter(e => !MODELS.names.includes(e.model.recipe)).map(e => e.model.recipe).join(','));
const flat = (parts, out = []) => { for (const p of parts) { if (p.parts) flat(p.parts, out); else out.push(p); } return out; };
const wellFormed = p => ['box', 'cyl', 'cone', 'sph', 'torus', 'lathe', 'prism'].includes(p.s) && Array.isArray(p.d) && /^#[0-9a-f]{6}$/i.test(p.c)
  && (p.m ? (Array.isArray(p.m) && p.m.length === 16) : (Array.isArray(p.p) && p.p.length === 3));
let allFormed = true;
for (const name of MODELS.names) {
  const parts = MODELS.parts(name, {});
  const leaves = flat(parts);
  if (!(Array.isArray(parts) && leaves.length >= 5 && leaves.every(wellFormed))) { allFormed = false; check(`recipe ${name} is a well-formed part tree`, false); }
}
check(`all ${MODELS.names.length} recipes are well-formed part trees (every leaf a known shape with a resolved #rrggbb colour)`, allFormed);
check('palette keys resolve, unknown keys fall back to grey, literal hex passes through',
  flat(MODELS.parts('pistol', { metal: '#123456' })).some(p => p.c === '#123456')
  && flat(MODELS.parts('pistol', {})).some(p => p.c === '#8d8d99')
  && flat(MODELS.parts('radio', { body: '#abcdef' })).some(p => p.c === '#abcdef'));
check('an unknown recipe name builds the default instead of throwing', MODELS.build('no_such_thing', {}).leaves.length > 3);
check('the ghost helicopter is the helicopter with every leaf translucent',
  MODELS.build('helicopter_ghost', {}).leaves.filter(l => !l.leaf.shadow).every(l => l.leaf.alpha < 1)
  && MODELS.build('helicopter_ghost', {}).leaves.length === MODELS.build('helicopter', {}).leaves.length);
check('recipes carry a preferred view that compile() keeps on the model',
  MODELS.names.filter(n => MODELS.recipes[n].view).length >= 20 && MODELS.build('pistol', {}).view && typeof MODELS.build('pistol', {}).view.yaw === 'number');
check('animated parts exist (rotors spin, cores bob) and move between frames', (() => {
  const m = MODELS.build('helicopter', {});
  const before = m.leaves.map(l => l.world.slice());
  GL.updateWorld(m.root, null, 0.37);
  const moved = m.leaves.filter((l, i) => !nearV(l.world, before[i], 1e-9)).length;
  return moved >= 2 && moved < m.leaves.length;
})());

console.log('\n# render every ledger entry');
const W = 120, H = 90, BG = [26, 20, 44, 255];
const coverage = img => { let n = 0; for (let i = 0; i < img.data.length; i += 4) if (img.data[i] !== BG[0] || img.data[i + 1] !== BG[1] || img.data[i + 2] !== BG[2]) n++; return n / (img.data.length / 4); };
const centred = img => { /* the model's pixels should straddle the frame's centre column and row */
  let minx = W, maxx = -1, miny = H, maxy = -1;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const o = (y * W + x) * 4; if (img.data[o] !== BG[0] || img.data[o + 1] !== BG[1] || img.data[o + 2] !== BG[2]) { if (x < minx) minx = x; if (x > maxx) maxx = x; if (y < miny) miny = y; if (y > maxy) maxy = y; } }
  return minx < W / 2 && maxx > W / 2 && miny < H / 2 && maxy > H / 2;
};
let rendered = 0, worst = { diff: 0, id: '' }, maxTris = { n: 0, id: '' };
for (const e of ledger.entries) {
  const model = MODELS.build(e.model.recipe, e.model.palette || {});
  const tris = model.leaves.reduce((n, l) => n + l.leaf.geo.idx.length / 3, 0);
  if (tris > maxTris.n) maxTris = { n: tris, id: e.id };
  const img = GL.renderSoft(model, { width: W, height: H, bg: BG, ss: 1, time: 0.2 });
  const cov = coverage(img);
  const okRender = Number.isFinite(model.radius) && model.radius > 0.2 && model.radius < 5 && tris > 200 && tris < 9000 && cov > 0.04 && cov < 0.9 && centred(img);
  if (!okRender) check(`${e.id} (${e.model.recipe}) renders sanely`, false, `radius ${model.radius.toFixed(2)} tris ${tris} coverage ${(cov * 100).toFixed(1)}%`);
  else rendered++;
  /* winding: with every leaf opaque, culling back faces should barely change the picture */
  const solid = MODELS.build(e.model.recipe, e.model.palette || {}, { shadow: false });
  for (const l of solid.leaves) l.leaf.alpha = 1;
  const a = GL.renderSoft(solid, { width: W, height: H, bg: BG, ss: 1, cull: false }), b = GL.renderSoft(solid, { width: W, height: H, bg: BG, ss: 1, cull: true });
  let diff = 0; for (let i = 0; i < a.data.length; i += 4) if (Math.abs(a.data[i] - b.data[i]) + Math.abs(a.data[i + 1] - b.data[i + 1]) + Math.abs(a.data[i + 2] - b.data[i + 2]) > 24) diff++;
  diff /= (W * H);
  if (diff > worst.diff) worst = { diff, id: e.id };
}
check(`all ${ledger.entries.length} ledger entries render: finite bounds, 200 < tris < 9000, 4–90 % coverage, centred`, rendered === ledger.entries.length, `${rendered}/${ledger.entries.length}`);
check('triangle budget: the heaviest model stays under 8 000 triangles', maxTris.n < 8000, `${maxTris.id} ${maxTris.n}`);
check('winding is consistent everywhere: back-face culling changes under 1.5 % of pixels for every model', worst.diff < 0.015, `${worst.id} ${(worst.diff * 100).toFixed(2)}%`);
check('a model renders differently from two yaws (the camera really orbits)', (() => {
  const m = MODELS.build('cannon', {}); const a = GL.renderSoft(m, { width: 60, height: 45, bg: BG, yaw: 0 }), b = GL.renderSoft(m, { width: 60, height: 45, bg: BG, yaw: 2 });
  let d = 0; for (let i = 0; i < a.data.length; i += 4) if (a.data[i] !== b.data[i]) d++; return d > 50;
})());
check('renderSoft writes into a supplied target buffer and respects supersampling', (() => {
  const m = MODELS.build('radio', {}); const target = new Uint8ClampedArray(40 * 30 * 4); const out = GL.renderSoft(m, { width: 40, height: 30, bg: BG, ss: 2, target });
  return out.data === target && target.some((v, i) => i % 4 === 0 && v !== BG[0]);
})());
check('emissive parts come out brighter than the same part unlit', (() => {
  const dark = GL.compile([{ s: 'sph', d: [1, 16, 10], p: [0, 0, 0], c: '#404040' }], { shadow: false });
  const lit = GL.compile([{ s: 'sph', d: [1, 16, 10], p: [0, 0, 0], c: '#404040', e: 1 }], { shadow: false });
  const lum = img => { let s = 0; for (let i = 0; i < img.data.length; i += 4) s += img.data[i]; return s; };
  return lum(GL.renderSoft(lit, { width: 40, height: 30, bg: BG })) > lum(GL.renderSoft(dark, { width: 40, height: 30, bg: BG })) * 1.2;
})());

console.log('\n# mount');
const fakeDoc = (ctx2d) => {
  const doc = { hidden: false, defaultView: null };
  const mk = (tag) => ({ tag, ownerDocument: doc, attrs: {}, listeners: {}, style: {}, children: [], isConnected: true, innerHTML: '',
    appendChild(c) { this.children.push(c); c.parentNode = this; return c; },
    setAttribute(k, v) { this.attrs[k] = v; }, addEventListener(k, f) { (this.listeners[k] = this.listeners[k] || []).push(f); },
    getContext(kind) { return kind === '2d' ? ctx2d : null; }, setPointerCapture() {} });
  doc.createElement = mk;
  const raf = []; let clock = 0; const w = { document: doc, devicePixelRatio: 1, performance: { now: () => (clock += 45) }, requestAnimationFrame: f => (raf.push(f), raf.length), cancelAnimationFrame: () => { raf.length = 0; } };
  doc.defaultView = w; w.__raf = raf;
  return { doc, win: w, host: Object.assign(mk('div'), { clientWidth: 240, clientHeight: 180 }) };
};
{
  const { host } = fakeDoc(null);
  check('mount() returns null when the canvas cannot draw at all (the page then shows the icon)', GL.mount(host, MODELS.build('radio', {}), {}) === null);
}
{
  let puts = 0; const ctx = { createImageData: (w, h) => ({ width: w, height: h, data: new Uint8ClampedArray(w * h * 4) }), putImageData: () => { puts++; } };
  const { host, win: w } = fakeDoc(ctx);
  let mode = null;
  const api = GL.mount(host, MODELS.build('pistol', {}), { onMode: m => { mode = m; } });
  check('mount() falls back to the software renderer on a 2D context', api && api.mode === 'soft' && mode === 'soft');
  check('a canvas with role=img and the label went into the host', host.children.length === 1 && host.children[0].tag === 'canvas' && host.children[0].attrs.role === 'img');
  check('the first frame was drawn synchronously', puts === 1);
  const yaw0 = api.view.yaw;
  for (let i = 0; i < 40 && w.__raf.length; i++) { const f = w.__raf.shift(); f(); }
  check('the loop keeps drawing (throttled) and auto-rotates', puts > 5 && api.view.yaw > yaw0);
  const before = puts; api.destroy(); const f = w.__raf.shift(); if (f) f();
  check('destroy() stops the loop', puts === before && w.__raf.length === 0);
  const h2 = fakeDoc(ctx).host; h2.isConnected = false;
  const api2 = GL.mount(h2, MODELS.build('radio', {}), {});
  const raf2 = h2.ownerDocument.defaultView.__raf; const f2 = raf2.shift(); f2();
  check('a viewer whose host left the DOM tears itself down on the next frame', api2 && raf2.length === 0);
}

console.log('\n# webgl path (mocked context)');
/* no GPU here: a recording WebGL stand-in proves the GL renderer calls a real
   WebGL 1 surface with well-typed arguments and sets every uniform the shaders declare */
{
  const calls = {}; const set = new Set(); const consts = {};
  ['COMPILE_STATUS', 'LINK_STATUS', 'VERTEX_SHADER', 'FRAGMENT_SHADER', 'ARRAY_BUFFER', 'ELEMENT_ARRAY_BUFFER', 'STATIC_DRAW', 'UNSIGNED_INT', 'UNSIGNED_SHORT', 'COLOR_BUFFER_BIT', 'DEPTH_BUFFER_BIT', 'DEPTH_TEST', 'LEQUAL', 'CULL_FACE', 'BLEND', 'ONE', 'ONE_MINUS_SRC_ALPHA', 'FLOAT', 'TRIANGLES'].forEach((k, i) => { consts[k] = 1000 + i; });
  let typed = true;
  const gl = new Proxy(consts, { get(t, k) { if (k in t) return t[k]; return (...a) => { calls[k] = (calls[k] || 0) + 1;
    switch (k) {
      case 'createShader': case 'createProgram': case 'createBuffer': return { k };
      case 'getShaderParameter': case 'getProgramParameter': return true;
      case 'getUniformLocation': return { u: a[1] };
      case 'getAttribLocation': return a[1] === 'aPos' ? 0 : 1;
      case 'getExtension': return null;
      case 'bufferData': if (!(a[1] instanceof Float32Array || a[1] instanceof Uint16Array || a[1] instanceof Uint32Array)) typed = false; return;
      case 'uniformMatrix4fv': if (!(a[2] instanceof Float32Array && a[2].length === 16)) typed = false; set.add(a[0].u); return;
      case 'uniformMatrix3fv': if (!(a[2] instanceof Float32Array && a[2].length === 9)) typed = false; set.add(a[0].u); return;
      case 'uniform3fv': if (!(a[1].length === 3 && [...a[1]].every(Number.isFinite))) typed = false; set.add(a[0].u); return;
      case 'uniform1f': if (!Number.isFinite(a[1])) typed = false; set.add(a[0].u); return;
      case 'drawElements': if (!(a[1] > 0 && a[1] % 3 === 0)) typed = false; return;
      default: return undefined;
    } }; } });
  let threw = null, draws = 0;
  try {
    const R = new GL.GLRenderer(gl);
    for (const name of MODELS.names) { const m = MODELS.build(name, {}); const before = calls.drawElements || 0; R.render(m, { yaw: 0.5, pitch: 0.3, dist: 1, time: 0.4 }, 300, 200); draws += (calls.drawElements || 0) - before; }
    R.dispose();
  } catch (e) { threw = e; }
  const declared = [...(GL.VS + GL.FS).matchAll(/uniform\s+\w+\s+(\w+)/g)].map(m => m[1]);
  check('GLRenderer compiles, links and renders every recipe against a WebGL 1 surface without throwing', !threw && draws >= MODELS.names.length * 5, threw ? String(threw.message) : `${draws} draws`);
  check('every uniform the shaders declare is set, and every buffer/uniform argument is typed', typed && declared.length >= 8 && declared.every(u => set.has(u)), declared.filter(u => !set.has(u)).join(','));
  check('dispose() frees every buffer and the program', calls.deleteBuffer === calls.createBuffer && calls.deleteProgram === 1);
  check('shaders declare matching varyings and write premultiplied colour', /varying vec3 vN; varying vec3 vP;/.test(GL.VS) && /varying vec3 vN; varying vec3 vP;/.test(GL.FS) && /gl_FragColor = vec4\(clamp\(c,0\.0,1\.0\)\*uAlpha, uAlpha\)/.test(GL.FS));
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
