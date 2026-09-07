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

/* Stat lenses: each mode tints its buttons AND its pins, so Population, */
/* Military, Economy, and Influence read as four different maps. Faction  */
/* identity moves to the detail panel, where it was always listed anyway. */
const MODES = {
  population: { label: 'Population', key: 'population', color: '#4ade80', unit: 'residents' },
  military: { label: 'Military', key: 'military_strength', color: '#f87171', unit: 'garrison' },
  economy: { label: 'Economy', key: 'economic_value', color: '#fbbf24', unit: 'trade value' },
  influence: { label: 'Influence', key: 'political_influence', color: '#a78bfa', unit: 'influence' },
};

/* Planar layers (cartography desk): a POI's `plane` tag decides which layer
   shows it. Absent = material, so older sheets need no edits. */
const PLANE_LABELS = {
  material: 'Material',
  shadow: 'Shadeward',
  fey: 'Feyward',
  mirror: 'Deep Mirror',
};
const planeOf = poi => (poi && poi.plane) || 'material';

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

function model(mapId, plane, onlyIds) {
  const map = MAP_DATA[mapId];
  if (!map) return null;
  let pois = (map.pointsOfInterest || []).filter(p => Number.isFinite(p.x) && Number.isFinite(p.y));
  if (plane && plane !== 'all') pois = pois.filter(p => planeOf(p) === plane);
  /* Journey mode: hide every surveyed pin except the stops that connect. */
  if (onlyIds) pois = pois.filter(p => onlyIds.has(p.id));
  return { map, pois, population: pois.reduce((n, poi) => n + (Number(poi.population) || 0), 0) };
}

function stopBannerHtml(stop) {
  if (!stop) return '';
  const plane = PLANE_LABELS[stop.plane] || PLANE_LABELS.material;
  return `<div class="atlas-v2-stopbanner"><span class="atlas-v2-stopnum">${esc(stop.n)}</span>`
    + `<div><span class="atlas-v2-kicker">journey stop ${esc(stop.n)} · ${esc(plane)} layer</span>`
    + `<h3>${esc(stop.name)}</h3><p>${esc(stop.date || 'undated')}</p>`
    + (stop.eventId ? `<button class="atlas-v2-wiki" data-open-article="${esc(stop.eventId)}">Open event record</button>` : '')
    + `</div></div>`;
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
  /* Filed extras surface only where the POI record files them: unrest and */
  /* antiquity are /10 ratings, intelReq is a clearance number or a        */
  /* {faction, level} posting, and library_summary is the archive note.    */
  const extras = [];
  if (Number.isFinite(poi.crime_rate)) extras.push(['Unrest', `${poi.crime_rate}/10`]);
  if (Number.isFinite(poi.age_of_antiquity)) extras.push(['Antiquity', `${poi.age_of_antiquity}/10`]);
  if (poi.intelReq !== undefined && poi.intelReq !== null && poi.intelReq !== '') {
    const req = poi.intelReq;
    const reqText = (req && typeof req === 'object')
      ? `clearance ${req.level ?? '?'}${req.faction ? ` · ${humanize(req.faction)}` : ''}`
      : `clearance ${req}`;
    extras.push(['Intel req.', esc(reqText)]);
  }
  const planeTag = planeOf(poi) === 'material' ? '' : ` · ${PLANE_LABELS[planeOf(poi)] || planeOf(poi)}`;
  return `<article class="atlas-v2-detail">
    <span class="atlas-v2-kicker">${esc(poi.type || 'location')}${esc(planeTag)}</span>
    <h3>${esc(poi.name)}</h3>
    <p>${esc(poi.description || 'No field report filed.')}</p>
    <div class="atlas-v2-faction"><i style="background:${esc(faction.color)}"></i>${esc(faction.name)}</div>
    <dl>
      <div><dt>Population</dt><dd>${format(poi.population)}</dd></div>
      <div><dt>Military</dt><dd>${format(poi.military_strength)}</dd></div>
      <div><dt>Economy</dt><dd>${format(poi.economic_value)}</dd></div>
      <div><dt>Influence</dt><dd>${format(poi.political_influence)}</dd></div>
      ${extras.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join('')}
    </dl>
    ${poi.library_summary ? `<p class="atlas-v2-library">📚 ${esc(poi.library_summary)}</p>` : ''}
    ${article ? `<button class="atlas-v2-wiki" data-open-article="${esc(article)}">Open wiki article</button>` : ''}
    ${nearby.length ? `<div class="atlas-v2-nearby"><b>Nearby</b>${nearby.map(x => `<button data-jump="${esc(x.other.id)}">${esc(x.other.name)} <span>${x.d.toFixed(1)}</span></button>`).join('')}</div>` : ''}
  </article>`;
}

export function mountAtlasMapV2(host, mapId, opts = {}) {
  const plane = (opts.plane && opts.plane !== 'all') ? opts.plane : '';
  /* Journey mode mounts trail-only: every surveyed pin that is not a stop */
  /* stays out of the model, so clusters, counts, and filters all agree.  */
  /* With no stops on this sheet the filter would blank the map, so an    */
  /* empty trail falls back to the full survey.                           */
  const stopIds = new Set((opts.journey || []).filter(s => s && s.poiId).map(s => s.poiId));
  const journeyOnly = !!opts.journeyOnly && stopIds.size > 0;
  const data = model(mapId, plane, journeyOnly ? stopIds : null);
  if (!data) {
    host.innerHTML = '<div class="atlas-v2-error">This map record is unavailable.</div>';
    return null;
  }
  const { map, pois, population } = data;
  /* Journey stops: [{poiId, n, eventId, name, date, plane}]. Stops whose pin
     is not on this layer keep their numbers but render no marker or path. */
  const poiIds = new Set(pois.map(p => p.id));
  const stops = (opts.journey || []).filter(s => s && poiIds.has(s.poiId));
  const stopByPoi = new Map();
  stops.forEach(s => { if (!stopByPoi.has(s.poiId)) stopByPoi.set(s.poiId, s); });
  const isFull = /_full$/.test(map.id) || /\(Full\)/i.test(map.name || '');
  const imgHref = new URL(`../../../${map.imageSrc}`, import.meta.url).href;
  const types = [...new Set(pois.map(p => p.type).filter(Boolean))].sort();
  /* A filtered layer holds a handful of pins that sit close together (the
     Raventree reflections are ~0.5 apart); the full-sheet radius would fuse
     the whole Feyward layer into one dot, so cluster tightly instead. */
  const clusters = clusterPois(pois, plane ? 0.3 : 1.15);
  const pinWord = journeyOnly ? 'journey stops · Survey holds the full survey'
    : plane ? `${PLANE_LABELS[plane] || plane} pins` : 'surveyed pins';

  host.innerHTML = `<section class="atlas-v2" aria-label="${esc(map.name)} tactical map">
    <header>
      <div>
        <span class="atlas-v2-eyebrow">WORLD ATLAS · PINNED ARTWORK</span>
        <h2>${esc((map.name || map.id).replace(' (Full)', ''))}</h2>
        <p>${pois.length} ${pinWord} · ${format(population)} mapped residents · x/y kept as percent of the painting</p>
      </div>
      <div class="atlas-v2-actions">
        <button type="button" data-action="fit">Reset view</button>
        <button type="button" data-action="labels">Labels</button>
        <button type="button" data-action="expand">⛶ Full screen</button>
      </div>
    </header>
    <div class="atlas-v2-tools">
      <input type="search" data-search placeholder="Search mapped locations…">
      <select data-type><option value="">All types</option>${types.map(t => `<option value="${esc(t)}">${esc(humanize(t))}</option>`).join('')}</select>
      <button type="button" data-action="wiki" title="Show only pins that open a wiki article">📖 Wiki</button>
      <span data-visible>${pois.length} markers</span>
    </div>
    <div class="atlas-v2-modes">
      ${Object.entries(MODES).map(([id, m]) => `<button type="button" class="${id === 'population' ? 'active' : ''}" data-mode="${id}" style="--mode:${m.color}">${m.label}</button>`).join('')}
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
        <div class="atlas-v2-legend"><span data-legend-lens></span><span>${esc(map.group || '')}</span></div>
      </main>
      <aside class="atlas-v2-sidebar">${detailHtml(null, pois)}</aside>
    </div>
  </section>`;

  const img = host.querySelector('[data-map-art]');
  const overlay = host.querySelector('[data-overlay]');
  const world = host.querySelector('.atlas-v2-world');
  const viewport = host.querySelector('.atlas-v2-viewport');
  const sidebar = host.querySelector('.atlas-v2-sidebar');
  const state = { scale: 1, tx: 0, ty: 0, box: { left: 0, top: 0, w: 1, h: 1 }, mode: 'population', selected: null, wikiOnly: false };

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

  function journeyPathSvg() {
    if (stops.length < 2) return '';
    const pts = stops.map(s => {
      const p = pois.find(q => q.id === s.poiId);
      return p ? `${p.x},${p.y}` : null;
    }).filter(Boolean);
    if (pts.length < 2) return '';
    return `<svg class="atlas-v2-path" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">`
      + `<polyline points="${pts.join(' ')}" vector-effect="non-scaling-stroke"/></svg>`;
  }

  function placePins() {
    state.box = containBox(world, img);
    const { left, top, w, h } = state.box;
    overlay.style.left = `${left}px`;
    overlay.style.top = `${top}px`;
    overlay.style.width = `${w}px`;
    overlay.style.height = `${h}px`;
    const lens = MODES[state.mode];
    const lensEl = host.querySelector('[data-legend-lens]');
    /* Lens weight on a log scale: sheet values run 0..60,000 with a median
       near 50, so a linear share of max flattens 95% of pins to one dot.
       log(1+v)/log(1+max) spreads hamlets, towns, and cities across the
       whole size range; the top 5 pins earn a ring so the giants pop at
       thumbnail scale. Stacked pins size by their largest member. */
    const values = pois.map(p => Number(p[lens.key]) || 0);
    const max = Math.max(0, ...values);
    const denom = Math.log1p(max) || 1;
    const weight = v => Math.min(1, Math.log1p(Math.max(0, v)) / denom);
    const ranked = [...pois].sort((a, b) => (Number(b[lens.key]) || 0) - (Number(a[lens.key]) || 0)).slice(0, 5);
    const major = new Set(ranked.filter(p => (Number(p[lens.key]) || 0) > 0).map(p => p.id));
    const min = values.length ? Math.min(...values) : 0;
    if (lensEl) lensEl.innerHTML = `<i style="background:${lens.color}"></i>${format(min)} – ${format(max)} ${esc(lens.unit)} · pin size = ${esc(lens.label)}${major.size ? ' · ◎ top 5 ringed' : ''}`;
    overlay.innerHTML = journeyPathSvg() + clusters.map(group => {
      const poi = group[0];
      const faction = factionMeta(poi.factionId);
      const top = Math.max(0, ...group.map(g => Number(g[lens.key]) || 0));
      const w = weight(top);
      const diameter = Math.round(12 + w * 20);
      const isMajor = group.some(g => major.has(g.id));
      const extra = group.length > 1 ? `<em>${group.length}</em>` : '';
      const groupStops = group.map(g => stopByPoi.get(g.id)).filter(Boolean);
      const badge = groupStops.length === 1 ? `<b class="atlas-v2-stop">${esc(groupStops[0].n)}</b>`
        : groupStops.length > 1 ? `<b class="atlas-v2-stop atlas-v2-stop-multi">${groupStops.length}</b>` : '';
      const ids = group.map(g => g.id).join(',');
      return `<button type="button" class="atlas-v2-marker${groupStops.length ? ' journey' : ''}${isMajor ? ' atlas-v2-major' : ''}" data-ids="${esc(ids)}" data-poi="${esc(poi.id)}" style="left:${poi.x}%;top:${poi.y}%;width:${diameter}px;height:${diameter}px;--marker:${lens.color};--intensity:${(0.45 + w * 0.55).toFixed(2)}" title="${esc(group.map(g => g.name).join(', '))}"><span>${faction.icon}</span>${extra}${badge}</button>`;
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

  /* Deep-link focus: a location article's "Open in the World Atlas" chip lands the
     reader on this sheet with the matching pin already selected and centred.
     The journey stepper drives the same path through the returned handle. */
  let ready = false;
  let pendingFocus = null;
  function centerOn(x, y, z) {
    const vw = viewport.clientWidth || 1;
    const vh = viewport.clientHeight || 1;
    const box = state.box;
    const px = box.left + box.w * x / 100;
    const py = box.top + box.h * y / 100;
    state.scale = z;
    state.tx = vw / 2 - px * z;
    state.ty = vh / 2 - py * z;
    applyTransform();
  }
  function focusOn(id, z, stop) {
    const poi = pois.find(p => p.id === id);
    if (!poi) return false;
    select(poi, null, stop);
    if (!ready) { pendingFocus = { id, z: z || 3.2, stop: stop || null }; return true; }
    centerOn(poi.x, poi.y, z || 3.2);
    return true;
  }

  function select(poi, ids, stopOverride) {
    state.selected = poi;
    /* A clustered pin lights its cluster marker even when it is not the
       representative: match the whole id stack, not just data-poi. */
    overlay.querySelectorAll('[data-poi]').forEach(item => {
      const stack = (item.dataset.ids || item.dataset.poi || '').split(',');
      item.classList.toggle('selected', stack.includes(poi.id));
    });
    if (ids && ids.length > 1) {
      const stack = ids.map(id => pois.find(p => p.id === id)).filter(Boolean);
      const rows = stack.map(p => {
        const st = stopByPoi.get(p.id);
        return `<button data-jump="${esc(p.id)}">${st ? `<b class="atlas-v2-stopinline">${esc(st.n)}</b>` : ''}${esc(p.name)}</button>`;
      }).join('');
      sidebar.innerHTML = `<article class="atlas-v2-detail"><span class="atlas-v2-kicker">stacked pins</span><h3>${stack.length} locations share this mark</h3><p>Same painted coordinate. Pick one.</p>${rows}</article>`;
      return;
    }
    sidebar.innerHTML = stopBannerHtml(stopOverride || stopByPoi.get(poi.id)) + detailHtml(poi, pois);
  }

  function applyFilter() {
    const query = host.querySelector('[data-search]').value.toLowerCase();
    const type = host.querySelector('[data-type]').value;
    let shown = 0;
    overlay.querySelectorAll('[data-poi]').forEach(pin => {
      const ids = (pin.dataset.ids || pin.dataset.poi).split(',');
      const group = ids.map(id => pois.find(p => p.id === id)).filter(Boolean);
      const visible = group.some(poi => (!query || `${poi.name} ${poi.description || ''}`.toLowerCase().includes(query)) && (!type || poi.type === type) && (!state.wikiOnly || wikiId(poi)));
      pin.hidden = !visible;
      if (visible) shown += group.length;
    });
    host.querySelector('[data-visible]').textContent = `${shown} markers visible`;
  }

  img.addEventListener('load', () => {
    placePins();
    ready = true;
    if (pendingFocus) { focusOn(pendingFocus.id, pendingFocus.z, pendingFocus.stop); pendingFocus = null; }
    else if (opts.focusPoi) focusOn(opts.focusPoi);
    else if (opts.focus && Number.isFinite(opts.focus.x) && Number.isFinite(opts.focus.y)) {
      centerOn(opts.focus.x, opts.focus.y, opts.focus.scale || 2.6);
    }
    else if (!isFull) fitRegion();
    else { state.scale = 1; state.tx = 0; state.ty = 0; applyTransform(); }
  });
  if (img.complete) img.dispatchEvent(new Event('load'));
  window.addEventListener('resize', () => { placePins(); });

  host.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => {
    state.mode = button.dataset.mode;
    host.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('active', b === button));
    const lens = MODES[state.mode];
    host.querySelector('[data-mode-total]').textContent = `${format(pois.reduce((n, p) => n + (Number(p[lens.key]) || 0), 0))} ${lens.unit}`;
    placePins();
  }));
  host.querySelector('[data-action="wiki"]').addEventListener('click', event => {
    state.wikiOnly = !state.wikiOnly;
    event.currentTarget.classList.toggle('active', state.wikiOnly);
    applyFilter();
  });
  host.querySelector('[data-search]').addEventListener('input', applyFilter);
  host.querySelector('[data-type]').addEventListener('change', applyFilter);
  host.querySelector('[data-action="labels"]').addEventListener('click', event => {
    host.classList.toggle('atlas-v2-labels');
    event.currentTarget.classList.toggle('active');
  });
  function reframe() {
    if (!isFull) fitRegion();
    else { state.scale = 1; state.tx = 0; state.ty = 0; applyTransform(); }
  }
  host.querySelector('[data-action="fit"]').addEventListener('click', () => {
    sidebar.innerHTML = detailHtml(null, pois);
    reframe();
  });
  /* Full screen: the host becomes a fixed overlay so the painted sheet fills
     the viewport instead of a card column. Both the atlas page and the
     cartography desk mount through here, so both inherit the button. */
  const expandBtn = host.querySelector('[data-action="expand"]');
  function setExpanded(on) {
    host.classList.toggle('atlas-v2-full', on);
    expandBtn.classList.toggle('active', on);
    expandBtn.textContent = on ? '✕ Exit full screen' : '⛶ Full screen';
    /* Lock the page scroll behind the overlay; the overlay itself scrolls. */
    document.body.style.overflow = on ? 'hidden' : '';
    placePins();
    reframe();
  }
  expandBtn.addEventListener('click', () => setExpanded(!host.classList.contains('atlas-v2-full')));
  /* Wired once per page, not once per mount: region switches re-mount the
     renderer into the same host, and stacked document listeners would all fire. */
  if (!window.__atlasV2ChromeWired) {
    window.__atlasV2ChromeWired = true;
    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      document.querySelectorAll('.atlas-v2-full [data-action="expand"].active').forEach(b => b.click());
    });
    /* Navigating away destroys the host; never leave the page scroll-locked. */
    window.addEventListener('hashchange', () => {
      if (!document.querySelector('.atlas-v2-full')) document.body.style.overflow = '';
    });
  }
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

  /* Control handle for the cartography desk's journey stepper. Existing
     callers ignore the return value; their behaviour is unchanged. */
  return {
    focus: (poiId, z, stop) => focusOn(poiId, z, stop),
    center: (x, y, z) => { if (ready) centerOn(x, y, z || 2.6); },
    select: (poiId, stop) => { const p = pois.find(q => q.id === poiId); if (p) select(p, null, stop); },
    getPois: () => pois.slice(),
    getStops: () => stops.slice(),
  };
}
