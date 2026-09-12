// map-provinces.js — the Province Census.
//
// One authority for "which pins are one province, and who holds it", shared by
// the World Atlas, the Cartography Desk and the Power Projection monitor. It
// answers three questions and nothing else:
//
//   1. merging  — which POIs belong to the same province
//   2. census   — who controls it, and by how much
//   3. borders  — where that province's edge sits on the painted sheet
//
// The merge is seeded from what is ALREADY DEFINED, in both places the archive
// files it: PROVINCE_POLITICS (data/support/politics-data.js) names provinces
// per full map with a seed point and a hand-filed control ledger, and every map
// group files sub-region sheets whose POI lists are literal surveys of a
// province. Filed claims win; only the pins nobody filed are merged by
// proximity plus flag. So the census never overwrites the archive — it does the
// archive's arithmetic and reports where the two disagree.
//
// The weight on each pin follows the three pillars the canon dossier files in
// `national_power_projection`: military might, economic influence, political
// stability — with population as a logged fourth, so a 40,000-toad city does
// not outvote the castle that actually commands it.
//
// Zero DOM, zero imports, zero randomness: the browser and the node tests must
// derive the same province from the same pins, forever.

const PROVINCE_CENSUS = {
  /* A leftover pin joins a province if a seed is this close (percent of the
     painted sheet) and the flags agree. 13 spreads a realm's unfiled pins
     across its neighbours without welding the whole sheet into one blob. */
  mergeRadius: 13,
  /* A pin may be pulled from a farther province only when it is almost inside
     the nearer one — that is how a mixed town stays in a single province. */
  nearInside: 5.5,
  /* To be crowned at all a flag needs this share of the province — below it the
     ledger is too thin to read and the province is simply unclaimed. */
  holdFloor: 12,
  /* A crown needs either a majority of the province… */
  holdShare: 45,
  /* …or a lead big enough that nobody is filing a protest: 14 points over the
     runner-up is a government; 28 points over a runner-up is a government no
     matter how many third parties survived the survey. Below both lines the
     province is a march: several flags, no crowned census. */
  holdMargin: 14,
  holdLead: 28,
  /* A rival only counts when it is worth mentioning. */
  rivalShare: 8,
  /* Weights per pillar (see the canon dossier above). Mirrors the per-POI
     power the Cartography Desk sums, so the two surfaces agree. */
  wPolitics: 2, wMilitary: 1.5, wEconomy: 1, wPopulation: 1.2,
  /* Vacant hand-filed claims (a ledger row with no pins left on the sheet)
     are still shown as a small claim box, but they no longer cut holes out of
     the real province tessellation. */
  claimPad: 3.2,
  /* Smallest filed sheet worth calling a province, and smallest pile a
     leftover pin can start. One stray pin is an annotation, not a territory. */
  minFiledPins: 3,
  minMergedPins: 1,
  /* A cap on one merged pile, so a sprawling realm's leftovers do not all fall
     into the first province that had room. Filed provinces are never capped:
     the archive filed that extent, the archive keeps it. */
  maxPoisPerProvince: 40,
};

const PROVINCE_SUFFIX = ['Province', 'Canton', 'Shire', 'County', 'Prefecture', 'Duchy', 'Palatinate', 'Margraviate'];
const MARCH_SUFFIX = 'March';

/* ---------------- small pure helpers ---------------- */

function hash32(text) {
  let h = 2166136261;
  const s = String(text == null ? '' : text);
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619) >>> 0;
  return h >>> 0;
}

function round(value, digits = 2) {
  const p = 10 ** digits;
  return Math.round((Number(value) || 0) * p) / p;
}

function cleanName(value) {
  return String(value || '').replace(/\s*\(Full\)\s*/i, '').replace(/\s+regions?$/i, '').trim();
}

const idOf = poi => String(poi && poi.id != null ? poi.id : '');
const finite = poi => !!(poi && Number.isFinite(Number(poi.x)) && Number.isFinite(Number(poi.y)));
const flagOf = poi => {
  const f = poi && poi.factionId;
  return (typeof f === 'string' && f && f !== 'unaligned') ? f : 'unaligned';
};

/* ---------------- the census weight on one pin ---------------- */

/** The power a single POI contributes to whoever flies its flag. */
export function poiPower(poi) {
  if (!poi) return 0;
  const c = PROVINCE_CENSUS;
  /* A pin with nothing filed still stands on the ground: an uncounted presence
     is how a hamlet becomes a claim, so stability floors at 1 (as it does in
     the Cartography Desk's own per-POI power). */
  return (Number(poi.political_influence) || 1) * c.wPolitics
    + (Number(poi.military_strength) || 0) * c.wMilitary
    + (Number(poi.economic_value) || 0) * c.wEconomy
    + Math.log10(Math.max(1, Number(poi.population) || 1)) * c.wPopulation;
}

/* ---------------- counting who is actually there ---------------- */

/**
 * Tally a pile of pins into a control table.
 *
 * `controller` is the census verdict and is null when the province is contested;
 * `claimant` is always the biggest pile, for the reader who wants to know who is
 * biggest even when it is not enough. The `unaligned` pile is counted — it is
 * where nobody filed a flag — but never crowned.
 */
export function censusOf(pois, opts = {}) {
  const c = Object.assign({}, PROVINCE_CENSUS, opts && opts.census);
  const list = (pois || []).filter(finite);
  const powerByFlag = {};
  const pinsByFlag = {};
  let population = 0, military = 0, economic = 0, political = 0, power = 0;
  let seat = null, seatPower = -Infinity;

  list.forEach(poi => {
    const fid = flagOf(poi);
    const w = poiPower(poi);
    powerByFlag[fid] = (powerByFlag[fid] || 0) + w;
    pinsByFlag[fid] = (pinsByFlag[fid] || 0) + 1;
    population += Number(poi.population) || 0;
    military += Number(poi.military_strength) || 0;
    economic += Number(poi.economic_value) || 0;
    political += Number(poi.political_influence) || 0;
    power += w;
    /* The seat is the pin a province governs from: the most powerful one, with
       a stable tie-break so the same province always answers the same door. */
    const tie = w === seatPower && seat ? hash32(idOf(poi)) < hash32(idOf(seat)) : false;
    if (w > seatPower || tie) { seat = poi; seatPower = w; }
  });

  const shares = {};
  Object.entries(powerByFlag).forEach(([fid, w]) => {
    shares[fid] = power > 0 ? (w / power) * 100 : (list.length ? 100 / list.length : 0);
  });

  const ranked = Object.entries(shares)
    .map(([factionId, share]) => ({ factionId, share, power: powerByFlag[factionId] || 0, pins: pinsByFlag[factionId] || 0 }))
    .sort((a, b) => (b.share - a.share) || (a.factionId < b.factionId ? -1 : 1));
  const held = ranked.filter(r => r.factionId !== 'unaligned');
  const top = held[0] || null;
  const next = held[1] || null;
  const rivals = held.slice(1).filter(r => r.share >= c.rivalShare);
  const margin = top && next ? top.share - next.share : (top ? 100 : 0);
  /* The crown test, in words: worth mentioning, and either the province's
     majority or a lead nobody can call a tie. */
  const holds = !!top && top.share >= c.holdFloor
    && (rivals.length === 0 || margin >= c.holdMargin)
    && (top.share >= c.holdShare || margin >= c.holdLead);
  const contested = !holds && !!top && rivals.length > 0;
  /* Fragmented past reading: flags present, no rival worth naming, no crown. */
  const noLead = !holds && !contested && !!top;

  return {
    pins: list.length,
    population, military, economic, political,
    power: round(power),
    control: Object.fromEntries(Object.entries(powerByFlag).map(([k, v]) => [k, round(v)])),
    pinCount: pinsByFlag,
    shares: Object.fromEntries(Object.entries(shares).map(([k, v]) => [k, round(v, 1)])),
    ranked: ranked.map(r => ({ ...r, share: round(r.share, 1), power: round(r.power) })),
    controller: holds ? top.factionId : null,
    claimant: top ? top.factionId : 'unaligned',
    claimantShare: top ? round(top.share, 1) : 0,
    margin: round(margin, 1),
    rivals: rivals.map(r => ({ factionId: r.factionId, share: round(r.share, 1), pins: r.pins })),
    holds,
    contested,
    noLead,
    neutral: !top,
    seatPoiId: seat ? idOf(seat) : null,
    unalignedShare: round(shares.unaligned || 0, 1),
    filedPins: list.filter(p => p.articleId || p.locationId).length,
  };
}

/* ---------------- matching a filed claim to its survey ---------------- */

const STOP_TOKENS = new Set(['the', 'and', 'of', 'a', 'an', 'at', 'region', 'regions', 'province',
  'provinces', 'kingdom', 'realms', 'district', 'districts', 'county', 'counties', 'isles',
  'island', 'islands', 'territory', 'area', 'sector', 'zone', 'march', 'lands', 'greater', 'new']);

function nameTokens(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(/\s+/)
    .filter(t => t.length >= 3 && !STOP_TOKENS.has(t));
}

/**
 * Is this filed ledger the same place as that surveyed sheet? Ids first — the
 * ledger and the sheet usually carry the same stem — then a conservative name
 * test: an exact token run, a containment of six characters or more, or at least
 * two shared significant tokens with most of the vocabulary in common. Two
 * provinces that merely rhyme stay separate; a province filed twice gets one row.
 */
export function sameProvince(claimA, claimB) {
  const idA = String((claimA && (claimA.sourceProvinceId || claimA.sourceMapId || claimA.key)) || '')
    .replace(/^(filed|sheet):/, '').replace(/^msh?_/, '');
  const idB = String((claimB && (claimB.sourceProvinceId || claimB.sourceMapId || claimB.key)) || '')
    .replace(/^(filed|sheet):/, '');
  if (idA && idB && idA === idB) return true;
  const a = nameTokens(claimA && claimA.name), b = nameTokens(claimB && claimB.name);
  if (!a.length || !b.length) return false;
  const ja = a.join(''), jb = b.join('');
  if (ja === jb) return true;
  if (ja.length >= 6 && jb.includes(ja)) return true;
  if (jb.length >= 6 && ja.includes(jb)) return true;
  const setA = new Set(a), setB = new Set(b);
  let shared = 0;
  setA.forEach(t => { if (setB.has(t)) shared++; });
  const union = new Set([...setA, ...setB]).size;
  return shared >= 2 && union > 0 && shared / union >= 0.5;
}

/** One pin per filed id: a place listed twice is still one place to govern. */
export function uniquePins(pois) {
  const seen = new Set();
  const out = [];
  (pois || []).forEach(poi => {
    if (!poi) return;
    const id = idOf(poi) || `__idx_${seen.size}`;
    if (seen.has(id)) return;
    seen.add(id);
    out.push(poi);
  });
  return out;
}

/* ---------------- what is already defined ---------------- */

/**
 * The provinces already filed for a sheet, from both authorities:
 *
 *  · `politics[map.id]` — a named province, a seed point, and a hand-filed
 *    control ledger. No pins are attached to a ledger, so the census attaches
 *    them below (which is the whole point: the ledger is a claim, the pins are
 *    the evidence).
 *  · sibling map sheets painted on the SAME artwork — their POI list is a
 *    literal survey of a province, so those pins arrive pre-sorted. A sibling
 *    that covers the target almost entirely is a second overview of the same
 *    sheet, not a province, and is skipped.
 */
export function filedProvincesFor(map, allMaps, politics, opts = {}) {
  if (!map || !Array.isArray(map.pointsOfInterest)) return [];
  const c = Object.assign({}, PROVINCE_CENSUS, opts && opts.census);
  const here = map.pointsOfInterest.filter(finite);
  const onSheet = new Set(here.map(idOf));
  const out = new Map();

  Object.entries(politics || {}).forEach(([provinceId, prov]) => {
    if (!prov || !prov.name) return;
    out.set(`filed:${provinceId}`, {
      key: `filed:${provinceId}`,
      kind: 'filed',
      name: String(prov.name),
      seed: { x: Number(prov.x), y: Number(prov.y) },
      filedControl: prov.control ? { ...prov.control } : null,
      sourceMapId: map.id,
      sourceProvinceId: provinceId,
      poiIds: [],
    });
  });

  Object.values(allMaps || {}).forEach(sib => {
    if (!sib || sib.id === map.id || !Array.isArray(sib.pointsOfInterest)) return;
    if (sib.imageSrc && map.imageSrc && sib.imageSrc !== map.imageSrc) return;
    const own = sib.pointsOfInterest.filter(p => onSheet.has(idOf(p)));
    const ownEvery = sib.pointsOfInterest.filter(finite);
    if (own.length < c.minFiledPins) return;
    if (own.length >= onSheet.size * 0.9) return;    // another overview, not a province
    if (own.length < ownEvery.length * 0.5) return;   // surveyed somewhere else, pins just shared
    const key = `sheet:${sib.id}`;
    if (out.has(key)) return;
    out.set(key, {
      key,
      kind: 'sheet',
      name: cleanName(sib.name || sib.id),
      seed: {
        x: own.reduce((n, p) => n + Number(p.x), 0) / own.length,
        y: own.reduce((n, p) => n + Number(p.y), 0) / own.length,
      },
      filedControl: null,
      sourceMapId: sib.id,
      sourceProvinceId: null,
      poiIds: own.map(idOf),
    });
  });

  const list = [...out.values()];

  /* A ledger row and a survey sheet that name the same province are one
     province: keep the survey's pins, keep the ledger's name and its filed
     control table, and the census can then judge them against each other. */
  const ledgers = list.filter(f => f.kind === 'filed');
  const surveys = list.filter(f => f.kind === 'sheet');
  const absorbed = new Set();
  ledgers.forEach(led => {
    const hit = surveys.find(sv => !absorbed.has(sv.key) && sameProvince(led, sv));
    if (!hit) return;
    absorbed.add(hit.key);
    const mergedIds = [...new Set([...led.poiIds, ...hit.poiIds])];
    led.poiIds = mergedIds;
    led.surveyMapId = hit.sourceMapId;
    led.sourceMapId = hit.sourceMapId || led.sourceMapId;
    if (!Number.isFinite(led.seed.x) || !Number.isFinite(led.seed.y)) led.seed = hit.seed;
  });

  return list.filter(f => !absorbed.has(f.key))
    .sort((a, b) => (a.poiIds.length - b.poiIds.length) || (a.key < b.key ? -1 : 1));
}

/**
 * Attach every pin on the sheet to exactly one province. Filed surveys come
 * first; leftovers merge into the nearest compatible province, or open one.
 *
 * A pin claimed by two filed sheets goes to the smaller survey, because the
 * sheet that filed fewer places is the one that was actually looking at it.
 * `opts.allied(a, b)` may be injected by a caller that owns alliance data; the
 * module itself never reaches for it, which keeps it testable in isolation.
 */
export function assignPois(here, filed, opts = {}) {
  const c = Object.assign({}, PROVINCE_CENSUS, opts && opts.census);
  const pins = (here || []).filter(finite);
  const byId = new Map(pins.map(p => [idOf(p), p]));
  const claim = new Map();

  (filed || []).forEach(prov => {
    prov.poiIds.forEach(id => {
      if (!byId.has(id)) return;
      const current = claim.get(id);
      if (!current || prov.poiIds.length < current.len) claim.set(id, { key: prov.key, len: prov.poiIds.length });
    });
  });

  const groups = new Map();
  (filed || []).forEach(prov => {
    groups.set(prov.key, {
      key: prov.key,
      name: prov.name,
      kind: prov.kind,
      seed: prov.seed,
      sourceMapId: prov.sourceMapId || null,
      sourceProvinceId: prov.sourceProvinceId || null,
      filedControl: prov.filedControl || null,
      pois: (prov.poiIds || []).filter(id => claim.get(id) && claim.get(id).key === prov.key && byId.has(id)).map(id => byId.get(id)),
    });
  });

  const taken = new Set();
  groups.forEach(g => g.pois.forEach(p => taken.add(idOf(p))));
  const leftover = pins.filter(p => !taken.has(idOf(p)));

  const centroid = g => {
    let x = 0, y = 0, w = 0;
    g.pois.forEach(p => {
      const weight = 1 + poiPower(p);
      x += Number(p.x) * weight; y += Number(p.y) * weight; w += weight;
    });
    if (!g.pois.length) return { x: Number(g.seed && g.seed.x) || 0, y: Number(g.seed && g.seed.y) || 0 };
    return { x: x / w, y: y / w };
  };
  const leadFlag = g => {
    if (!g.pois.length) return null;
    return flagOf(g.pois.slice().sort((a, b) => (poiPower(b) - poiPower(a)) || (idOf(a) < idOf(b) ? -1 : 1))[0]);
  };

  [...leftover]
    .sort((a, b) => (poiPower(b) - poiPower(a)) || (idOf(a) < idOf(b) ? -1 : 1))
    .forEach(poi => {
      const px = Number(poi.x), py = Number(poi.y), pf = flagOf(poi);
      let best = null, bestD = Infinity;
      groups.forEach(g => {
        if (g.kind === 'merged' && g.pois.length >= c.maxPoisPerProvince) return;
        const ctr = centroid(g);
        const d = Math.hypot(px - ctr.x, py - ctr.y);
        if (d > c.mergeRadius) return;
        const dominant = leadFlag(g);
        const compatible = !dominant || pf === dominant || pf === 'unaligned' || dominant === 'unaligned'
          || d <= c.nearInside
          || (opts.allied ? !!opts.allied(pf, dominant) : false);
        if (!compatible) return;
        if (d < bestD) { best = g; bestD = d; }
      });
      if (best) { best.pois.push(poi); return; }
      const key = `merged:${idOf(poi)}`;
      groups.set(key, {
        key, name: '', kind: 'merged', seed: { x: px, y: py },
        sourceMapId: null, sourceProvinceId: null, filedControl: null, pois: [poi],
      });
    });

  return [...groups.values()].filter(g => g.pois.length >= c.minMergedPins || g.kind !== 'merged');
}

/* ---------------- naming ---------------- */

/**
 * A province is named for the pin it governs from. A contested province is a
 * march — a border province nobody holds outright is precisely that, so the
 * suffix carries the verdict without needing a legend.
 */
export function provinceName(group, census, seatPoi) {
  if (group && group.kind !== 'merged' && group.name) return group.name;
  const raw = cleanName((seatPoi && seatPoi.name) || 'Unsurveyed');
  const stem = raw
    .replace(/\b(Castle|Town|City|Village|Fort|Keep|Tower|Temple|Academy|Region|Province|Territory|District|State|Harbor|Harbour|Port|Ruins|Outpost)\b/gi, '')
    .replace(/[“”"'’]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const root = stem.length >= 3 ? stem : (raw || 'Unsurveyed');
  if (census && census.contested) return `${root} ${MARCH_SUFFIX}`;
  return `${root} ${PROVINCE_SUFFIX[hash32((group && group.key) || root) % PROVINCE_SUFFIX.length]}`;
}

/* ---------------- geometry: hull, area, and POI-anchor Voronoi ---------------- */

function convexHull(points) {
  const pts = (points || []).map(p => Array.isArray(p) ? [Number(p[0]), Number(p[1])] : [Number(p.x), Number(p.y)])
    .filter(p => Number.isFinite(p[0]) && Number.isFinite(p[1]))
    .sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));
  if (pts.length < 3) return pts;
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [];
  pts.forEach(p => { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop(); lower.push(p); });
  const upper = [];
  pts.slice().reverse().forEach(p => { while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop(); upper.push(p); });
  upper.pop(); lower.pop();
  const hull = lower.concat(upper);
  return hull.length >= 3 ? hull : pts;
}

function polygonArea(poly) {
  if (!poly || poly.length < 3) return 0;
  let a = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    a += (poly[j][0] + poly[i][0]) * (poly[j][1] - poly[i][1]);
  }
  return a / 2;
}

/* Every clip in this file keeps the (-dy, dx) side of each edge, so every
   polygon must be clipped in the same winding. Under the convention above that
   winding has NEGATIVE signed area — normalise first, or the clip keeps the
   outside and the province collapses to a sliver of duplicate vertices. */
function orientForClip(poly) {
  return polygonArea(poly) > 0 ? poly.slice().reverse() : poly;
}

/**
 * Keep the half-plane a·x + b·y <= c (Sutherland–Hodgman).
 *
 * Order matters as much as the test: entering the half-plane, the crossing point
 * has to be emitted BEFORE the vertex that came in, or the ring zig-zags, the
 * signed areas cancel, and a province renders as a bowtie instead of a border.
 * Consecutive duplicates are dropped — a clip that lands exactly on a corner
 * would otherwise leave a zero-length edge for the next clip to misread.
 */
function clipHalfPlane(poly, a, b, c) {
  if (!poly || !poly.length) return [];
  const out = [];
  const side = p => a * p[0] + b * p[1] - c;
  const push = pt => {
    const last = out[out.length - 1];
    if (last && Math.abs(last[0] - pt[0]) < 1e-9 && Math.abs(last[1] - pt[1]) < 1e-9) return;
    out.push(pt);
  };
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const cur = poly[i], prev = poly[j];
    const sc = side(cur), sp = side(prev);
    const inCur = sc <= 0, inPrev = sp <= 0;
    if (!inCur && !inPrev) continue;
    if (inCur !== inPrev) {
      const t = sp / (sp - sc);
      push([prev[0] + (cur[0] - prev[0]) * t, prev[1] + (cur[1] - prev[1]) * t]);
    }
    if (inCur) push(cur);
  }
  if (out.length > 2) {
    const first = out[0], last = out[out.length - 1];
    if (Math.abs(first[0] - last[0]) < 1e-9 && Math.abs(first[1] - last[1]) < 1e-9) out.pop();
  }
  return out;
}

/** Convex ∩ convex, by clipping one polygon with each edge of the other. */
function intersectConvex(subject, clipPoly) {
  if (!clipPoly || clipPoly.length < 3 || !subject || subject.length < 3) return subject;
  const ccw = orientForClip(clipPoly);
  let poly = subject;
  for (let i = 0, j = ccw.length - 1; i < ccw.length; j = i++) {
    const p1 = ccw[j], p2 = ccw[i];
    const dx = p2[0] - p1[0], dy = p2[1] - p1[1];
    poly = clipHalfPlane(poly, -dy, dx, (-dy) * p1[0] + dx * p1[1]);
    if (poly.length < 3) return null;
  }
  return poly;
}

function rectPolygon(box) {
  const { minX, minY, maxX, maxY } = box;
  return [[minX, minY], [maxX, minY], [maxX, maxY], [minX, maxY]];
}

/**
 * Province borders as one contiguous tile map.
 *
 * The old renderer made one power-weighted cell per province center. That was
 * tidy math, but it could put a province's own POI on the wrong side of the
 * visible border and it left clipped no-man's-land holes between hulls. The
 * atlas now tiles the sheet from the actual POI evidence: every filed pin is an
 * anchor, anchors of the same province are merged visually, and blank ground is
 * awarded to the nearest anchor. Unaligned or unreadable control is expressed
 * as grey/claimant colour by the renderer, never as an empty gap.
 */
function clampToBox(n, lo, hi) {
  return Math.max(lo, Math.min(hi, Number(n) || 0));
}

function boxAround(seed, box, pad) {
  const x = clampToBox(seed && seed.x, box.minX, box.maxX);
  const y = clampToBox(seed && seed.y, box.minY, box.maxY);
  const r = Math.max(0.8, Number(pad) || 2.5);
  const minX = clampToBox(x - r, box.minX, box.maxX);
  const maxX = clampToBox(x + r, box.minX, box.maxX);
  const minY = clampToBox(y - r, box.minY, box.maxY);
  const maxY = clampToBox(y + r, box.minY, box.maxY);
  if (maxX - minX < 0.4 || maxY - minY < 0.4) return rectPolygon(box);
  return [[minX, minY], [maxX, minY], [maxX, maxY], [minX, maxY]];
}

function provinceAnchors(provinces, box) {
  const raw = [];
  const add = (prov, x, y, key) => {
    if (!Number.isFinite(Number(x)) || !Number.isFinite(Number(y))) return;
    raw.push({
      prov,
      key,
      x: clampToBox(x, box.minX, box.maxX),
      y: clampToBox(y, box.minY, box.maxY),
    });
  };

  (provinces || []).forEach(prov => {
    const pins = uniquePins(prov.pois || []).filter(finite);
    pins.forEach(poi => add(prov, poi.x, poi.y, `${prov.id}|${idOf(poi)}`));
    /* A center anchor stitches a multi-pin province into one territory instead
       of leaving only detached POI islands. */
    if (pins.length > 1) add(prov, prov.x, prov.y, `${prov.id}|center`);
  });

  const seen = new Set();
  const anchors = raw.filter(a => {
    const k = `${a.prov.id}|${round(a.x, 4)}|${round(a.y, 4)}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  /* Exact coordinate collisions happen on shared towns. Split them by a tiny,
     deterministic amount so the Voronoi math does not give two provinces the
     same infinite claim. The offset is far below marker size. */
  const byCoord = new Map();
  anchors.forEach(a => {
    const k = `${round(a.x, 4)}|${round(a.y, 4)}`;
    if (!byCoord.has(k)) byCoord.set(k, []);
    byCoord.get(k).push(a);
  });
  byCoord.forEach(group => {
    if (group.length < 2) return;
    group.sort((a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0);
    const r = 0.06;
    group.forEach((a, i) => {
      const theta = (Math.PI * 2 * i) / group.length;
      a.x = clampToBox(a.x + Math.cos(theta) * r, box.minX, box.maxX);
      a.y = clampToBox(a.y + Math.sin(theta) * r, box.minY, box.maxY);
    });
  });
  return anchors;
}

function anchorCells(anchors, box) {
  const bounds = rectPolygon(box);
  return (anchors || []).map((anchor, i) => {
    let cell = bounds;
    for (let j = 0; j < anchors.length; j++) {
      if (i === j || cell.length < 3) continue;
      const other = anchors[j];
      const a = other.x - anchor.x, b = other.y - anchor.y;
      if (Math.abs(a) < 1e-9 && Math.abs(b) < 1e-9) continue;
      /* nearest-anchor Voronoi: p·(sj-si) <= (|sj|²-|si|²)/2 */
      const k = (other.x ** 2 + other.y ** 2 - anchor.x ** 2 - anchor.y ** 2) / 2;
      cell = clipHalfPlane(cell, a, b, k);
    }
    return { anchor, polygon: cell && cell.length >= 3 ? cell : [] };
  }).filter(c => c.polygon.length >= 3 && Math.abs(polygonArea(c.polygon)) > 0.0001);
}

export function provinceBorders(provinces, opts = {}) {
  const c = Object.assign({}, PROVINCE_CENSUS, opts && opts.census);
  const list = (provinces || []).filter(p => p && Number.isFinite(p.x) && Number.isFinite(p.y));
  if (!list.length) return [];
  const box = opts.box || { minX: 0, minY: 0, maxX: 100, maxY: 100 };
  const solid = list.filter(p => !p.vacant && (p.pois || []).length);
  const cellsByProvince = new Map();
  anchorCells(provinceAnchors(solid, box), box).forEach(cell => {
    const id = cell.anchor.prov.id;
    if (!cellsByProvince.has(id)) cellsByProvince.set(id, []);
    cellsByProvince.get(id).push(cell.polygon);
  });

  return list.map(prov => {
    if (prov.vacant || !(prov.pois || []).length) {
      const polygon = boxAround({ x: prov.x, y: prov.y }, box, c.claimPad);
      return { ...prov, shape: 'claim', cells: [], polygon: polygon.map(pt => [round(pt[0], 3), round(pt[1], 3)]), area: round(Math.abs(polygonArea(polygon))) };
    }

    let cells = (cellsByProvince.get(prov.id) || []).filter(poly => poly && poly.length >= 3);
    if (!cells.length) cells = [boxAround({ x: prov.x, y: prov.y }, box, c.claimPad)];
    const roundedCells = cells.map(poly => poly.map(pt => [round(pt[0], 3), round(pt[1], 3)]));
    const hull = convexHull(roundedCells.flat());
    const polygon = (hull.length >= 3 ? hull : roundedCells[0]).map(pt => [round(pt[0], 3), round(pt[1], 3)]);
    const area = roundedCells.reduce((sum, poly) => sum + Math.abs(polygonArea(poly)), 0);
    return { ...prov, shape: roundedCells.length > 1 ? 'network' : 'tile', cells: roundedCells, polygon, area: round(area) };
  });
}


/* ---------------- filed ledger vs. census ---------------- */

/**
 * Compare the hand-filed control table with what the pins add up to. The delta
 * is the point: a province whose ledger is off by a third is a filing waiting
 * to be amended, and the atlas should say so out loud rather than quietly
 * preferring one number.
 */
export function filedDelta(filedControl, census) {
  if (!filedControl) return null;
  const rows = [];
  const seen = new Set();
  Object.entries(filedControl).forEach(([fid, share]) => {
    seen.add(fid);
    const actual = census && Number.isFinite(census.shares[fid]) ? census.shares[fid] : 0;
    const filed = Number(share) || 0;
    rows.push({ factionId: fid, filed: round(filed, 1), census: round(actual, 1), delta: round(actual - filed, 1) });
  });
  Object.entries((census && census.shares) || {}).forEach(([fid, share]) => {
    if (seen.has(fid) || (Number(share) || 0) < 1) return;
    rows.push({ factionId: fid, filed: 0, census: round(share, 1), delta: round(share, 1) });
  });
  rows.sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
  const filedTop = Object.entries(filedControl).sort((a, b) => ((Number(b[1]) || 0) - (Number(a[1]) || 0)))[0];
  return {
    rows: rows.slice().sort((a, b) => b.census - a.census),
    worst: rows[0] || null,
    drift: rows.length ? round(Math.abs(rows[0].delta), 1) : 0,
    agrees: !!(filedTop && census && filedTop[0] === census.claimant),
    filedController: filedTop ? filedTop[0] : null,
    filedShare: filedTop ? round(Number(filedTop[1]) || 0, 1) : 0,
  };
}

/* ---------------- the whole build ---------------- */

/**
 * Build the province census for one map sheet.
 *
 * @param {object} map      the MAP_DATA record being rendered
 * @param {object} allMaps  MAP_DATA, for same-artwork sibling surveys
 * @param {object} [opts]   {pois, politics, allied, census, box, pad}
 *                          `politics` is the whole PROVINCE_POLITICS table; the
 *                          entry for this sheet is looked up by map id.
 */
export function buildProvinceCensus(map, allMaps, opts = {}) {
  const raw = (opts && opts.pois) || (map && map.pointsOfInterest) || [];
  const here = uniquePins(raw).filter(finite);
  const table = (opts && opts.politics) || null;
  const mine = table && map ? (table[map.id] || null) : null;
  const filed = filedProvincesFor(map, allMaps, mine, opts);
  const groups = assignPois(here, filed, opts);

  const provinces = groups
    .map(g => {
      const census = censusOf(g.pois, opts);
      const seatPoi = g.pois.find(p => idOf(p) === census.seatPoiId) || g.pois[0] || null;
      const cx = g.pois.length ? g.pois.reduce((n, p) => n + Number(p.x), 0) / g.pois.length : (Number(g.seed && g.seed.x) || 0);
      const cy = g.pois.length ? g.pois.reduce((n, p) => n + Number(p.y), 0) / g.pois.length : (Number(g.seed && g.seed.y) || 0);
      /* `spread` is the radius a province's own pins reach: how big the survey
         is, as opposed to how big the claim (below, the border) is. */
      const spread = g.pois.length ? Math.max(...g.pois.map(p => Math.hypot(Number(p.x) - cx, Number(p.y) - cy))) : 0;
      return {
        id: g.key,
        kind: g.kind,
        origin: g.kind === 'merged' ? 'merged' : 'filed',
        sourceMapId: g.sourceMapId,
        sourceProvinceId: g.sourceProvinceId,
        name: provinceName(g, census, seatPoi),
        pois: g.pois,
        poiIds: g.pois.map(idOf),
        x: round(cx),
        y: round(cy),
        spread: round(spread),
        census,
        vacant: g.pois.length === 0,
        seat: seatPoi ? { id: idOf(seatPoi), name: seatPoi.name, articleId: seatPoi.articleId || seatPoi.locationId || null } : null,
        delta: filedDelta(g.filedControl, census),
      };
    })
    .sort((a, b) => (b.census.power - a.census.power) || (a.name < b.name ? -1 : 1))
    .map((prov, i) => ({ ...prov, rank: i + 1 }));

  const withGeometry = provinceBorders(provinces, opts);
  const sheet = censusOf(here, opts);

  return {
    mapId: (map && map.id) || '',
    mapName: cleanName((map && map.name) || (map && map.id) || ''),
    group: (map && map.group) || '',
    pins: here.length,
    duplicatePins: Math.max(0, raw.filter(finite).length - here.length),
    filedProvinces: filed.length,
    provinces: withGeometry,
    census: sheet,
    rollup: nationRollup(withGeometry, sheet),
    config: Object.assign({}, PROVINCE_CENSUS, (opts && opts.census) || {}),
  };
}

/**
 * Provinces make up the nation: who holds how many, what the realm is worth,
 * and where its weight actually sits.
 */
export function nationRollup(provinces, sheetCensus) {
  const list = provinces || [];
  const byFaction = {};
  let contested = 0, filedOnes = 0, mergedOnes = 0, vacant = 0, unclaimed = 0, noLead = 0;
  list.forEach(p => {
    if (p.vacant) vacant++;
    if (p.kind === 'merged') mergedOnes++; else filedOnes++;
    if (p.census.contested) contested++;
    if (p.census.noLead) noLead++;
    const crowned = p.census.controller;
    if (!crowned || crowned === 'unaligned') { unclaimed++; return; }
    const row = byFaction[crowned] || (byFaction[crowned] = {
      factionId: crowned, provinces: 0, population: 0, power: 0, pins: 0, seats: [], contested: 0, area: 0,
    });
    row.provinces += 1;
    row.population += p.census.population || 0;
    row.power += p.census.power || 0;
    row.pins += p.census.pins || 0;
    row.area += p.area || 0;
    if (p.seat) row.seats.push({ provinceId: p.id, province: p.name, poiId: p.seat.id, name: p.seat.name });
  });
  const totalArea = list.reduce((n, p) => n + (p.area || 0), 0) || 1;
  const ranked = Object.values(byFaction)
    .map(r => ({
      ...r,
      power: round(r.power),
      shareOfProvinces: round((r.provinces / Math.max(1, list.length)) * 100, 1),
      shareOfArea: round((r.area / totalArea) * 100, 1),
      shareOfPopulation: sheetCensus && sheetCensus.population ? round((r.population / sheetCensus.population) * 100, 1) : 0,
    }))
    .sort((a, b) => (b.provinces - a.provinces) || (b.power - a.power) || (a.factionId < b.factionId ? -1 : 1));
  const crown = ranked[0] || null;
  const capital = list.slice().sort((a, b) => (b.census.power - a.census.power))[0] || null;
  return {
    provinceCount: list.length,
    filedProvinces: filedOnes,
    mergedProvinces: mergedOnes,
    contestedProvinces: contested,
    unreadableProvinces: noLead,
    vacantProvinces: vacant,
    unclaimedProvinces: unclaimed,
    population: sheetCensus ? sheetCensus.population : 0,
    power: sheetCensus ? sheetCensus.power : 0,
    byFaction: ranked,
    sovereign: crown ? crown.factionId : null,
    sovereignProvinces: crown ? crown.provinces : 0,
    sovereignShare: crown ? crown.shareOfProvinces : 0,
    /* No province holds a majority of the realm's provinces: the "nation" is a
       coalition, a claim, or a mess — the census says which by refusing to say. */
    fragmented: !!crown && crown.shareOfProvinces < PROVINCE_CENSUS.holdShare,
    capitalProvince: capital ? { id: capital.id, name: capital.name, seatPoiId: capital.seat ? capital.seat.id : null } : null,
  };
}

/* ---------------- the shortlist: something to actually choose ---------------- */

/**
 * Rank the sheet's pins into a shortlist a player can pick from.
 *
 * The answer to seven hundred pins is not more pins, it is "here are six that
 * matter tonight, and why each one does". Every score line is a reason the
 * reader can check against the map, and the order follows whatever lens they
 * already have open, so the board is never fighting the view.
 */
export function shortlist(pois, provinces, opts = {}) {
  const o = Object.assign({ top: 6, nonce: 0, lensValue: p => Number(p.population) || 0, lensLabel: 'population' }, opts);
  const list = uniquePins(pois).filter(finite);
  const byProvince = new Map();
  (provinces || []).forEach(p => (p.poiIds || []).forEach(id => byProvince.set(id, p)));
  const flagCount = {};
  list.forEach(p => { const f = flagOf(p); flagCount[f] = (flagCount[f] || 0) + 1; });
  const denom = Math.log1p(Math.max(1, ...list.map(p => Math.max(0, Number(o.lensValue(p)) || 0)))) || 1;

  const rows = list.map(poi => {
    const id = idOf(poi);
    const prov = byProvince.get(id);
    const value = Math.max(0, Number(o.lensValue(poi)) || 0);
    const share = Math.min(1, Math.log1p(value) / denom);
    const reasons = [];
    let score = share * 0.42;
    if (share > 0.72) reasons.push(`top of the sheet by ${o.lensLabel}`);
    if (prov) {
      if (prov.seat && prov.seat.id === id) { score += 0.2; reasons.push(`seat of ${prov.name}`); }
      if (prov.census.contested) { score += 0.14; reasons.push(`${prov.name} is a contested march`); }
      else if (prov.census.controller) { score += 0.05; reasons.push(`${prov.name}, held by ${prov.census.controller}`); }
    }
    if (poi.articleId || poi.locationId) { score += 0.16; reasons.push('wiki article filed'); }
    const f = flagOf(poi);
    if (f !== 'unaligned' && (flagCount[f] || 0) <= 2) { score += 0.12; reasons.push('one of at most two pins flying that flag'); }
    if (Number.isFinite(Number(poi.crime_rate)) && Number(poi.crime_rate) >= 7) { score += 0.08; reasons.push(`unrest ${Number(poi.crime_rate)}/10`); }
    if (poi.intelReq !== undefined && poi.intelReq !== null && poi.intelReq !== '') { score += 0.05; reasons.push('intel-gated: clearance first'); }
    if (f === 'unaligned') { score += 0.04; reasons.push('nobody has filed a flag here'); }
    const stack = list.filter(other => other !== poi && Math.hypot((Number(other.x) || 0) - Number(poi.x), (Number(other.y) || 0) - Number(poi.y)) < 1.2).length;
    if (stack) { score += 0.07; reasons.push(`${stack + 1} pins share this mark`); }
    if (!reasons.length) reasons.push('on the sheet, nothing filed against it');
    return {
      id, name: poi.name, poi,
      provinceId: prov ? prov.id : null,
      province: prov ? prov.name : null,
      controller: prov ? (prov.census.controller || prov.census.claimant) : null,
      value: round(value),
      score: round(score, 4),
      reasons,
    };
  });

  const ranked = rows.slice().sort((a, b) => (b.score - a.score) || (a.id < b.id ? -1 : 1));
  /* A re-roll is a shuffle of the same shortlist, not a new argument: the desk
     can hand you a different pin without inventing a reason it likes you. */
  const reroll = nonce => rows.slice()
    .map(r => ({ ...r, jitter: hash32(`${r.id}|${nonce || 0}`) / 4294967295 }))
    .sort((a, b) => (b.score + b.jitter * 0.35) - (a.score + a.jitter * 0.35) || (a.id < b.id ? -1 : 1))
    .slice(0, o.top);
  return { total: rows.length, picks: ranked.slice(0, o.top), ranked, reroll };
}

export { PROVINCE_CENSUS };
