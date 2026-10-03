#!/usr/bin/env node
/**
 * Render every Discovered Technology recipe to PNG with the site's own software
 * rasteriser (assets/technology/tech-gl.js) — the same geometry, matrices and
 * shading the browser uses — so the models can be looked at without a browser.
 *
 *   node tools/render-tech-models.mjs                 # all entries -> /tmp/techpng/<id>.png + sheet.png
 *   node tools/render-tech-models.mjs --out dir       # choose the output directory
 *   node tools/render-tech-models.mjs --only pistol   # one recipe (by recipe name or entry id)
 *   node tools/render-tech-models.mjs --views         # four angles per model instead of one
 *   node tools/render-tech-models.mjs --sheet docs/images/technology-models.png   # also write the contact sheet there
 *
 * Nothing here is generated into the repo unless --sheet points inside it.
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf(name); return i >= 0 ? (args[i+1] || true) : dflt; };
const OUT = String(opt('--out', '/tmp/techpng'));
const ONLY = opt('--only', null);
const VIEWS = args.includes('--views');
const SHEET = opt('--sheet', null);
const W = +opt('--width', 360), H = +opt('--height', 270);

const win = {};
for (const f of ['assets/technology/tech-gl.js', 'assets/technology/tech-models.js']) {
  new Function('window', fs.readFileSync(path.join(ROOT, f), 'utf8'))(win);
}
const { TECH_GL, TECH_MODELS } = win;
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'Reputation-Matrix2/data/technology.json'), 'utf8'));

/* ---- minimal PNG writer (RGBA8, filter 0) ---- */
const CRC = (() => { const t = new Int32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1); t[n] = c; } return t; })();
const crc32 = (buf) => { let c = -1; for (let i = 0; i < buf.length; i++) c = CRC[(c ^ buf[i]) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; };
function chunk(type, body) { const len = Buffer.alloc(4); len.writeUInt32BE(body.length); const tb = Buffer.concat([Buffer.from(type, 'ascii'), body]); const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(tb)); return Buffer.concat([len, tb, crc]); }
export function encodePNG(width, height, rgba) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) { raw[y * (width * 4 + 1)] = 0; Buffer.from(rgba.buffer, rgba.byteOffset + y * width * 4, width * 4).copy(raw, y * (width * 4 + 1) + 1); }
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4); ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw, { level: 6 })), chunk('IEND', Buffer.alloc(0))]);
}

/* ---- render ---- */
const BG = [26, 20, 44, 255];                       // the site's panel colour, opaque, so the PNG reads on any viewer
const entries = data.entries.filter(e => !ONLY || e.id === ONLY || (e.model && e.model.recipe === ONLY));
if (!entries.length) { console.error('no entry matches', ONLY); process.exit(2); }
fs.mkdirSync(OUT, { recursive: true });

const angles = VIEWS ? [[0.65, 0.3], [2.2, 0.25], [3.9, 0.5], [0.0, -0.35]] : [[0.65, 0.3]];
const tiles = [];
let totalTris = 0;
for (const e of entries) {
  const model = TECH_MODELS.build(e.model.recipe, e.model.palette);
  const row = [];
  for (const [yaw, pitch] of angles) {
    const img = TECH_GL.renderSoft(model, { width: W, height: H, yaw, pitch, ss: 2, bg: BG, time: 0.37 });
    totalTris = Math.max(totalTris, img.triangles);
    row.push(img);
  }
  const combined = VIEWS ? hstack(row) : row[0];
  fs.writeFileSync(path.join(OUT, `${e.id}.png`), encodePNG(combined.width, combined.height, combined.data));
  tiles.push(row[0]);
  const tri = model.leaves.reduce((n, l) => n + l.leaf.geo.count / 3, 0);
  console.log(`${e.id.padEnd(44)} ${String(e.model.recipe).padEnd(16)} parts ${String(model.leaves.length).padStart(3)}  tris ${String(tri | 0).padStart(6)}  r ${model.radius.toFixed(2)}`);
}
/* contact sheet: 4 columns */
if (tiles.length > 1 || SHEET) {
  const cols = Math.min(4, tiles.length), rows = Math.ceil(tiles.length / cols);
  const sheet = new Uint8ClampedArray(cols * W * rows * H * 4);
  for (let i = 0; i < cols * W * rows * H; i++) { sheet[i * 4] = BG[0]; sheet[i * 4 + 1] = BG[1]; sheet[i * 4 + 2] = BG[2]; sheet[i * 4 + 3] = 255; }
  tiles.forEach((img, i) => { const cx = (i % cols) * W, cy = Math.floor(i / cols) * H; for (let y = 0; y < H; y++) { const src = img.data.subarray(y * W * 4, (y + 1) * W * 4); sheet.set(src, ((cy + y) * cols * W + cx) * 4); } });
  const png = encodePNG(cols * W, rows * H, sheet);
  fs.writeFileSync(path.join(OUT, 'sheet.png'), png);
  if (SHEET && SHEET !== true) { fs.mkdirSync(path.dirname(path.resolve(ROOT, String(SHEET))), { recursive: true }); fs.writeFileSync(path.resolve(ROOT, String(SHEET)), png); console.log('sheet ->', SHEET); }
}
console.log(`wrote ${entries.length} model(s) to ${OUT}`);

function hstack(imgs) {
  const w = imgs.reduce((n, i) => n + i.width, 0), h = imgs[0].height; const out = new Uint8ClampedArray(w * h * 4); let x0 = 0;
  for (const img of imgs) { for (let y = 0; y < h; y++) out.set(img.data.subarray(y * img.width * 4, (y + 1) * img.width * 4), (y * w + x0) * 4); x0 += img.width; }
  return { width: w, height: h, data: out };
}
