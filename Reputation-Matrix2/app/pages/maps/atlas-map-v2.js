// Atlas Map v3 — keep every existing POI x/y (percent of the painted artwork).
// Pins sit on the letterboxed image, not the empty stage. Region sheets crop
// to their POI hull. Wiki articles open from the sidebar when an articleId is filed.
import { MAP_DATA } from '../../../data/maps/map-data.js';

const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const format = value => Math.round(value || 0).toLocaleString();
const humanize = value => String(value || '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

const WIKI_IDS = {
  poi_mk_castle: 'peachs_castle',
  poi_mk_toadtown: 'toad_town',
  poi_mk_bramblehaven: 'bramblehaven',
  poi_mk_fawful_lab: 'fawful_fortress',
  poi_mp_warp_pipe_junction: 'warp_pipe_junction',
};

const MODES = {
  population: ['Population', 'population'],
  military: ['Military', 'military_strength'],
  economy: ['Economy', 'economic_value'],
  influence: ['Influence', 'political_influence'],
};

function wikiId(poi) {
  return poi.articleId || poi.locationId || WIKI_IDS[poi.id] || null;
}

function factionMeta(factionId) {
  try {
    const g = window.getFactionColor || null;
    const color = (typeof g === 'function' ? g(factionId) : null) || '#7c8aa5';
    return { name: humanize(factionId || 'unaligned'), color, icon: '●' };
  } catch {
    return { name: humanize(factionId || 'unaligned'), color: '#7c8aa5', icon: '●' };
  }
}

function containBox(stage, img) {
  const sw = stage.clientWidth || 1;
  const sh = stage.clientHeight || 1;
  const nw = img.naturalWidth || sw;
  const nh = img.naturalHeight || sh;
  const scale = Math.min(sw / nw, sh / nh);
  const w = nw * scale;
  const h = nh * scale;
  return { left: (sw - w) / 2, top: (sh - h) / 2, w, h };
}

function clusterPois(pois, radius = 1.15) {
  const used = new Set();
  const clusters = [];
  pois.forEach((poi, i) => {
    if (used.has(i)) return;
    const group = [poi];
    used.add(i);
    pois.forEach((other, j) => {
      if (used.has(j)) return;
      if (Math.hypot((other.x || 0) - (poi.x || 0), (other.y || 0) - (poi.y || 0)) < radius) {
        group.push(other);
        used.add(j);
      }
    });
    clusters.push(group);
  });
  return clusters;
}

function model(mapId) {
  const map = MAP_DATA[mapId];
  if (!map) return null;
  const pois = (map.pointsOfInterest || []).filter(p => Number.isFinite(p.x) && Number.isFinite(p.y));
  return { map, pois, population: pois.reduce((n, poi) => n + (Number(poi.population) || 0), 0) };
}

function detailHtml(poi, pois) {
  if (!poi) {
    return `<div class="atlas-v2-empty"><span>◎</span><b>Select a location</b><p>Pins sit on the painted map. Scroll to zoom. Drag to pan. Region sheets start cropped to their surveyed hull so a plains sheet does not look like the whole kingdom.</p></div>`;
  }
  const faction = factionMeta(poi.factionId);
  const nearby = pois.filter(other => other.id !== poi.id)
    .map(other => ({ other, d: Math.hypot((other.x || 0) - (poi.x || 0), (other.y || 0) - (poi.y || 0)) }))
    .filter(x => x.d < 12).sort((a, b) => a.d - b.d).slice(0, 5);
  const article = wikiId(poi);
  return `<article class="atlas-v2-detail">
    <span class="atlas-v2-kicker">${esc(poi.type || 'location')}</span>
    <h3>${esc(poi.name)}</h3>
    <p>${esc(poi.description || 'No field report filed.')}</p>
    <div class="atlas-v2-faction"><i style="background:${esc(faction.color)}"></i>${esc(faction.name)}</div>
    <dl>
      <div><dt>Population</dt><dd>${format(poi.population)}</dd></div>
      <div><dt>Military</dt><dd>${format(poi.military_strength)}</dd></div>
      <div><dt>Economy</dt><dd>${format(poi.economic_value)}</dd></div>
      <div><dt>Influence</dt><dd>${format(poi.political_influence)}</dd></div>
    </dl>
    ${article ? `<button class="atlas-v2-wiki" data-open-article="${esc(article)}">Open wiki article</button>` : ''}
    ${nearby.length ? `<div class="atlas-v2-nearby"><b>Nearby</b>${nearby.map(x => `<button data-jump="${esc(x.other.id)}">${esc(x.other.name)} <span>${x.d.toFixed(1)}</span></button>`).join('')}</div>` : ''}
  </article>`;
}

export function mountAtlasMapV2(host, mapId) {
  const data = model(mapId);
  if (!data) {
    host.innerHTML = '<div class="atlas-v2-error">This map record is unavailable.</div>';
    return;
  }
  const { map, pois, population } = data;
  const isFull = /_full$/.test(map.id) || /\(Full\)/i.test(map.name || '');
  const imgHref = new URL(`../../../${map.imageSrc}`, import.meta.url).href;
  const types = [...new Set(pois.map(p => p.type).filter(Boolean))].sort();
  const clusters = clusterPois(pois);

  host.innerHTML = `<section class="atlas-v2" aria-label="${esc(map.name)} tactical map">
    <header>
      <div>
        <span class="atlas-v2-eyebrow">WORLD ATLAS · PINNED ARTWORK</span>
        <h2>${esc((map.name || map.id).replace(' (Full)', ''))}</h2>
        <p>${pois.length} surveyed pins · ${format(population)} mapped residents · x/y kept as percent of the painting</p>
      </div>
      <div class="atlas-v2-actions">
        <button type="button" data-action="fit">Reset view</button>
        <button type="button" data-action="labels">Labels</button>
      </div>
    </header>
    <div class="atlas-v2-tools">
      <input type="search" data-search placeholder="Search mapped locations…">
      <select data-type><option value="">All types</option>${types.map(t => `<option value="${esc(t)}">${esc(humanize(t))}</option>`).join('')}</select>
      <span data-visible>${pois.length} markers</span>
    </div>
    <div class="atlas-v2-modes">
      ${Object.entries(MODES).map(([id, [label]]) => `<button type="button" class="${id === 'population' ? 'active' : ''}" data-mode="${id}">${label}</button>`).join('')}
      <b data-mode-total>${format(population)} residents</b>
    </div>
    <div class="atlas-v2-layout">
      <main class="atlas-v2-stage">
        <div class="atlas-v2-viewport">
          <div class="atlas-v2-world">
            <img data-map-art alt="${esc(map.name)} map" src="${imgHref}">
            <div class="atlas-v2-overlay" data-overlay></div>
          </div>
        </div>
        <div class="atlas-v2-legend"><span><i></i>Faction-colored pins on the artwork</span><span>${esc(map.group || '')}</span></div>
      </main>
      <aside class="atlas-v2-sidebar">${detailHtml(null, pois)}</aside>
    </div>
  </section>`;

  const img = host.querySelector('[data-map-art]');
  const overlay = host.querySelector('[data-overlay]');
  const world = host.querySelector('.atlas-v2-world');
  const viewport = host.querySelector('.atlas-v2-viewport');
  const sidebar = host.querySelector('.atlas-v2-sidebar');
  const state = { scale: 1, tx: 0, ty: 0, box: { left: 0, top: 0, w: 1, h: 1 }, mode: 'population', selected: null };

  function hull() {
    if (isFull || pois.length < 2) return { minX: 0, minY: 0, maxX: 100, maxY: 100 };
    const xs = pois.map(p => p.x);
    const ys = pois.map(p => p.y);
    const pad = 8;
    return {
      minX: Math.max(0, Math.min(...xs) - pad),
      minY: Math.max(0, Math.min(...ys) - pad),
      maxX: Math.min(100, Math.max(...xs) + pad),
      maxY: Math.min(100, Math.max(...ys) + pad),
    };
  }

  function applyTransform() {
    world.style.transform = `translate(${state.tx}px, ${state.ty}px) scale(${state.scale})`;
  }

  function fitRegion() {
    const h = hull();
    const vw = viewport.clientWidth || 1;
    const vh = viewport.clientHeight || 1;
    const box = state.box;
    const regionW = box.w * (h.maxX - h.minX) / 100;
    const regionH = box.h * (h.maxY - h.minY) / 100;
    const s = Math.min(vw / Math.max(regionW, 1), vh / Math.max(regionH, 1), 4.2);
    state.scale = Math.max(1, s * 0.92);
    const cx = box.left + box.w * ((h.minX + h.maxX) / 200);
    const cy = box.top + box.h * ((h.minY + h.maxY) / 200);
    state.tx = vw / 2 - cx * state.scale;
    state.ty = vh / 2 - cy * state.scale;
    applyTransform();
  }

  function placePins() {
    state.box = containBox(world, img);
    const { left, top, w, h } = state.box;
    overlay.style.left = `${left}px`;
    overlay.style.top = `${top}px`;
    overlay.style.width = `${w}px`;
    overlay.style.height = `${h}px`;
    const max = Math.max(1, ...pois.map(p => Number(p[MODES[state.mode][1]]) || 0));
    overlay.innerHTML = clusters.map(group => {
      const poi = group[0];
      const faction = factionMeta(poi.factionId);
      const intensity = Math.min(1, (Number(poi[MODES[state.mode][1]]) || 0) / max);
      const extra = group.length > 1 ? `<em>${group.length}</em>` : '';
      const ids = group.map(g => g.id).join(',');
      return `<button type="button" class="atlas-v2-marker" data-ids="${esc(ids)}" data-poi="${esc(poi.id)}" style="left:${poi.x}%;top:${poi.y}%;--marker:${esc(faction.color)};--intensity:${intensity}" title="${esc(group.map(g => g.name).join(', '))}"><span>${faction.icon}</span>${extra}</button>`;
    }).join('');
    overlay.querySelectorAll('[data-poi]').forEach(btn => {
      btn.addEventListener('click', ev => {
        ev.stopPropagation();
        const ids = (btn.dataset.ids || '').split(',').filter(Boolean);
        const picked = pois.find(p => p.id === (ids[0] || btn.dataset.poi));
        select(picked, ids);
      });
    });
    applyFilter();
  }

  function select(poi, ids) {
    state.selected = poi;
    overlay.querySelectorAll('[data-poi]').forEach(item => item.classList.toggle('selected', item.dataset.poi === poi.id));
    if (ids && ids.length > 1) {
      const stack = ids.map(id => pois.find(p => p.id === id)).filter(Boolean);
      sidebar.innerHTML = `<article class="atlas-v2-detail"><span class="atlas-v2-kicker">stacked pins</span><h3>${stack.length} locations share this mark</h3><p>Same painted coordinate. Pick one.</p>${stack.map(p => `<button data-jump="${esc(p.id)}">${esc(p.name)}</button>`).join('')}</article>`;
      return;
    }
    sidebar.innerHTML = detailHtml(poi, pois);
  }

  function applyFilter() {
    const query = host.querySelector('[data-search]').value.toLowerCase();
    const type = host.querySelector('[data-type]').value;
    let shown = 0;
    overlay.querySelectorAll('[data-poi]').forEach(pin => {
      const ids = (pin.dataset.ids || pin.dataset.poi).split(',');
      const group = ids.map(id => pois.find(p => p.id === id)).filter(Boolean);
      const visible = group.some(poi => (!query || `${poi.name} ${poi.description || ''}`.toLowerCase().includes(query)) && (!type || poi.type === type));
      pin.hidden = !visible;
      if (visible) shown += group.length;
    });
    host.querySelector('[data-visible]').textContent = `${shown} markers visible`;
  }

  img.addEventListener('load', () => {
    placePins();
    if (!isFull) fitRegion();
    else { state.scale = 1; state.tx = 0; state.ty = 0; applyTransform(); }
  });
  if (img.complete) img.dispatchEvent(new Event('load'));
  window.addEventListener('resize', () => { placePins(); });

  host.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => {
    state.mode = button.dataset.mode;
    host.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('active', b === button));
    const [label, key] = MODES[state.mode];
    host.querySelector('[data-mode-total]').textContent = `${format(pois.reduce((n, p) => n + (Number(p[key]) || 0), 0))} ${label.toLowerCase()}`;
    placePins();
  }));
  host.querySelector('[data-search]').addEventListener('input', applyFilter);
  host.querySelector('[data-type]').addEventListener('change', applyFilter);
  host.querySelector('[data-action="labels"]').addEventListener('click', event => {
    host.classList.toggle('atlas-v2-labels');
    event.currentTarget.classList.toggle('active');
  });
  host.querySelector('[data-action="fit"]').addEventListener('click', () => {
    sidebar.innerHTML = detailHtml(null, pois);
    if (!isFull) fitRegion();
    else { state.scale = 1; state.tx = 0; state.ty = 0; applyTransform(); }
  });
  sidebar.addEventListener('click', event => {
    const jump = event.target.closest('[data-jump]');
    if (jump) {
      const poi = pois.find(p => p.id === jump.dataset.jump);
      if (poi) select(poi);
    }
    const open = event.target.closest('[data-open-article]');
    if (open && typeof window.openId === 'function') window.openId(open.dataset.openArticle);
  });

  viewport.addEventListener('wheel', event => {
    event.preventDefault();
    const rect = viewport.getBoundingClientRect();
    const mx = event.clientX - rect.left;
    const my = event.clientY - rect.top;
    const next = Math.min(6, Math.max(1, state.scale * (event.deltaY < 0 ? 1.12 : 0.89)));
    const k = next / state.scale;
    state.tx = mx - (mx - state.tx) * k;
    state.ty = my - (my - state.ty) * k;
    state.scale = next;
    applyTransform();
  }, { passive: false });

  let drag = null;
  viewport.addEventListener('pointerdown', event => {
    if (event.target.closest('.atlas-v2-marker')) return;
    drag = { x: event.clientX, y: event.clientY, tx: state.tx, ty: state.ty };
    viewport.setPointerCapture(event.pointerId);
  });
  viewport.addEventListener('pointermove', event => {
    if (!drag) return;
    state.tx = drag.tx + (event.clientX - drag.x);
    state.ty = drag.ty + (event.clientY - drag.y);
    applyTransform();
  });
  viewport.addEventListener('pointerup', () => { drag = null; });
}
