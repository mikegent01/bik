// map-lenses.js — pure categorical-lens helpers for the world atlas.
// Deterministic category colors, legend chips, and logo guards. Zero imports,
// zero DOM: node tests load this file directly.
function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[ch]));
}

/* Stable pastel-ish color per category label, so a faith group or culture
   reads the same on every sheet without a filed palette. */
export function hashColor(label) {
  const s = String(label || '?');
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return `hsl(${h % 360} 62% 58%)`;
}

/* Pin glyph where no icon or image is filed: first letter or digit. */
export function initial(label) {
  const m = String(label || '').match(/[A-Za-z0-9]/);
  return m ? m[0].toUpperCase() : '●';
}

/* Registry logos are relative asset paths; refuse anything that could climb
   out of the assets tree or smuggle a scheme. Missing files still 404, and
   the renderer swaps those pins to the letter fallback on error. */
export function isSafeLogo(path) {
  return typeof path === 'string'
    && /^assets\/[\w][\w\-./]*\.(png|jpe?g|svg|webp)$/i.test(path)
    && path.indexOf('..') < 0;
}

/* Group rendered items by category: [{...cat, pins}] plus the hidden count. */
export function topCats(items, catOf, limit = 8) {
  const byKey = new Map();
  (items || []).forEach(item => {
    let cat = null;
    try { cat = catOf(item); } catch (e) { cat = null; }
    if (!cat || !cat.key) return;
    const entry = byKey.get(cat.key) || Object.assign({}, cat, { pins: 0 });
    entry.pins += 1;
    byKey.set(cat.key, entry);
  });
  const ranked = [...byKey.values()].sort((a, b) => b.pins - a.pins);
  return { cats: ranked.slice(0, limit), more: Math.max(0, ranked.length - limit) };
}

/* Legend chips: icon (faith groups) or swatch, label, pin count. */
export function legendChips(cats, more = 0) {
  if (!cats || !cats.length) return 'no pins filed yet';
  const chips = cats.map(c => {
    const mark = c.icon && !/^[A-Z0-9●]$/.test(c.icon)
      ? esc(c.icon)
      : `<i style="background:${esc(c.color || '#7c8aa5')}"></i>`;
    return `${mark} ${esc(c.label || c.key)} ×${c.pins}`;
  }).join(' · ');
  return more > 0 ? `${chips} · +${more} more` : chips;
}
