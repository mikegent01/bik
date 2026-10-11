// map-province-arcs.js — shared-border topology for the province tiling.
//
// map-provinces.js tiles the sheet with one Voronoi cell per POI anchor and a
// province is the union of its pins' cells. Drawn cell by cell, a frontier is a
// chain of bisectors between different pin pairs, so it saws back and forth
// wherever two provinces' pins interleave. This module does the display work
// the model deliberately does not:
//
//   1. dissolve the seams between cells of the same province,
//   2. chain what is left into ARCS that run between junctions (points where
//      three or more provinces, or the sheet rim, meet),
//   3. simplify and smooth each arc ONCE, with its junctions pinned,
//   4. rebuild every province outline from those arcs.
//
// A frontier is one arc shared by both neighbours — one of them walks it
// backwards — so the two outlines cannot gap or overlap. The census arithmetic
// (cells, area, pins) is untouched: this layer is additive and display-only.
//
// Smoothing may never push a pin out of its province. After smoothing, every
// pin that sat inside its raw cells is re-tested against the smoothed outline;
// a pin that fell out sends the nearest arcs of its province back one level
// (strong → mild → raw) until nothing moves side.
//
// Zero DOM, zero imports, zero randomness: the browser and the node tests must
// draw the same border from the same cells.

const DEFAULTS = {
  /* Vertices closer than this (percent of the sheet) are one vertex. Cells are
     rounded to 3 decimals; independently clipped neighbours can disagree in the
     last digit, never by this much. */
  snap: 0.02,
  /* Per level: Douglas–Peucker tolerance, then Chaikin passes. Level 0 is the
     raw cell edge. Tolerances are percent of the sheet. */
  levels: [
    { simplify: 0, chaikin: 0 },
    { simplify: 0.35, chaikin: 2 },
    { simplify: 0.9, chaikin: 3 },
  ],
  /* How many arcs near a displaced pin are pulled back per guard pass. */
  guardArcs: 3,
  maxGuardPasses: 6,
};

const finite = n => Number.isFinite(Number(n));

function signedArea(poly) {
  let a = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    a += (poly[j][0] + poly[i][0]) * (poly[j][1] - poly[i][1]);
  }
  return a / 2;
}

/* ---------------- polyline smoothing ---------------- */

function segDist(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const len2 = dx * dx + dy * dy;
  const t = len2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / len2)) : 0;
  return Math.hypot(p[0] - (a[0] + dx * t), p[1] - (a[1] + dy * t));
}

/** Douglas–Peucker; both end points are always kept. */
function simplify(pts, tol) {
  if (tol <= 0 || pts.length < 3) return pts.slice();
  const keep = new Array(pts.length).fill(false);
  keep[0] = keep[pts.length - 1] = true;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [lo, hi] = stack.pop();
    let worst = -1, at = -1;
    for (let i = lo + 1; i < hi; i++) {
      const d = segDist(pts[i], pts[lo], pts[hi]);
      if (d > worst) { worst = d; at = i; }
    }
    if (worst > tol) { keep[at] = true; stack.push([lo, at], [at, hi]); }
  }
  return pts.filter((_, i) => keep[i]);
}

/** Chaikin corner cutting. Open curves keep their two end points exactly. */
function chaikin(pts, passes, closed) {
  let cur = pts.slice();
  for (let n = 0; n < passes && cur.length >= 3; n++) {
    const out = [];
    if (closed) {
      for (let i = 0; i < cur.length; i++) {
        const a = cur[i], b = cur[(i + 1) % cur.length];
        out.push([0.75 * a[0] + 0.25 * b[0], 0.75 * a[1] + 0.25 * b[1]],
          [0.25 * a[0] + 0.75 * b[0], 0.25 * a[1] + 0.75 * b[1]]);
      }
    } else {
      out.push(cur[0]);
      for (let i = 0; i < cur.length - 1; i++) {
        const a = cur[i], b = cur[i + 1];
        out.push([0.75 * a[0] + 0.25 * b[0], 0.75 * a[1] + 0.25 * b[1]],
          [0.25 * a[0] + 0.75 * b[0], 0.25 * a[1] + 0.75 * b[1]]);
      }
      out.push(cur[cur.length - 1]);
    }
    cur = out;
  }
  return cur;
}

function smoothPoints(raw, closed, level) {
  if (!level || raw.length < 3) return raw;
  if (closed) {
    /* A loop with no junction has no pinned point; drop the repeat, smooth it
       as a ring, and close it again. */
    const ring = raw.slice(0, -1);
    const pass = simplify(ring.concat([ring[0]]), level.simplify).slice(0, -1);
    const out = chaikin(pass.length >= 3 ? pass : ring, level.chaikin, true);
    return out.concat([out[0]]);
  }
  return chaikin(simplify(raw, level.simplify), level.chaikin, false);
}

/* ---------------- point in region (even-odd, handles enclaves) ---------------- */

function insideRings(pt, rings) {
  let hit = false;
  for (const ring of rings) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i], [xj, yj] = ring[j];
      if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) hit = !hit;
    }
  }
  return hit;
}

/* ---------------- the topology ---------------- */

/**
 * @param {Array} provinces  census provinces carrying `cells` (non-vacant only
 *                           are used; vacant claims keep their own polygon)
 * @param {object} [opts]    overrides for DEFAULTS
 * @returns {{arcs: Array, rings: Map<string, number[][][]>, islands: Array, stats: object}}
 *   arcs  — { id, sides:[provId, provId|null], rim, closed, points, level }
 *   rings — province id → closed rings (outer + enclave loops), smoothed
 *   islands — { province, host, ring, smoothed }: a province's own outer loop
 *             that a single other province encircles completely (no rim
 *             contact); `ring` is the RAW loop, so a pin on a smoothed edge
 *             is still found
 */
export function buildProvinceOutlines(provinces, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const solid = (provinces || []).filter(p => p && !p.vacant && Array.isArray(p.cells) && p.cells.length);
  const stats = { vertices: 0, arcs: 0, guardPasses: 0, pulledBack: 0 };
  const rings = new Map();
  if (!solid.length) return { arcs: [], rings, islands: [], stats };

  /* --- vertices, snapped through a grid with a 3×3 neighbourhood lookup --- */
  const verts = [];
  const grid = new Map();
  const cellKey = (gx, gy) => gx + ',' + gy;
  const vid = pt => {
    const gx = Math.round(pt[0] / o.snap), gy = Math.round(pt[1] / o.snap);
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const hits = grid.get(cellKey(gx + dx, gy + dy));
        if (!hits) continue;
        for (const id of hits) {
          if (Math.hypot(verts[id][0] - pt[0], verts[id][1] - pt[1]) <= o.snap) return id;
        }
      }
    }
    const id = verts.length;
    verts.push([pt[0], pt[1]]);
    const k = cellKey(gx, gy);
    if (!grid.has(k)) grid.set(k, []);
    grid.get(k).push(id);
    return id;
  };

  /* --- directed edges, every cell wound the same way --- */
  const directed = new Map(); // "a>b" -> province id
  solid.forEach(prov => prov.cells.forEach(cell => {
    const clean = (cell || []).filter(pt => pt && finite(pt[0]) && finite(pt[1]));
    if (clean.length < 3) return;
    const ordered = signedArea(clean) > 0 ? clean.slice().reverse() : clean;
    const ids = [];
    ordered.forEach(pt => {
      const id = vid(pt);
      if (ids[ids.length - 1] !== id) ids.push(id);
    });
    if (ids.length > 1 && ids[0] === ids[ids.length - 1]) ids.pop();
    if (ids.length < 3) return;
    for (let i = 0; i < ids.length; i++) {
      const a = ids[i], b = ids[(i + 1) % ids.length];
      if (a !== b && !directed.has(a + '>' + b)) directed.set(a + '>' + b, prov.id);
    }
  }));
  stats.vertices = verts.length;

  /* --- boundary edges: drop seams inside one province --- */
  const edges = new Map(); // "lo~hi" -> { u, v, key, sides, sig }
  const adj = new Map();   // vertex -> [edge]
  directed.forEach((owner, key) => {
    const [a, b] = key.split('>').map(Number);
    const other = directed.get(b + '>' + a);
    if (other === owner) return; // seam
    const lo = Math.min(a, b), hi = Math.max(a, b);
    const ek = lo + '~' + hi;
    if (edges.has(ek)) return;
    const sides = other === undefined ? [owner, null] : [owner, other].sort();
    const e = { u: lo, v: hi, key: ek, sides, sig: sides.map(s => s === null ? '~' : s).join('|') };
    edges.set(ek, e);
    [lo, hi].forEach(v => { if (!adj.has(v)) adj.set(v, []); adj.get(v).push(e); });
  });

  const isJunction = v => {
    const list = adj.get(v) || [];
    return list.length !== 2 || list[0].sig !== list[1].sig;
  };

  /* --- trace arcs between junctions --- */
  const used = new Set();
  const arcs = [];
  const walk = (start, first) => {
    const path = [start];
    let cur = start, edge = first;
    for (;;) {
      used.add(edge.key);
      const next = edge.u === cur ? edge.v : edge.u;
      path.push(next);
      cur = next;
      if (cur === start || isJunction(cur)) break;
      const nextEdge = (adj.get(cur) || []).find(e => e !== edge);
      if (!nextEdge || used.has(nextEdge.key)) break;
      edge = nextEdge;
    }
    return { path, first };
  };
  const addArc = ({ path, first }) => {
    const raw = path.map(id => verts[id]);
    const closed = path.length > 3 && path[0] === path[path.length - 1];
    const rim = first.sides[1] === null;
    arcs.push({
      id: 'arc' + arcs.length,
      sides: first.sides.slice(),
      rim,
      closed,
      from: path[0],
      to: path[path.length - 1],
      firstEdge: [path[0], path[1]],
      raw,
      cache: [raw],
      level: 0,
      points: raw,
    });
  };
  const junctionVerts = [...adj.keys()].filter(isJunction).sort((a, b) => a - b);
  junctionVerts.forEach(v => (adj.get(v) || []).forEach(e => { if (!used.has(e.key)) addArc(walk(v, e)); }));
  [...edges.values()].sort((a, b) => a.u - b.u || a.v - b.v).forEach(e => {
    if (!used.has(e.key)) addArc(walk(e.u, e));
  });
  stats.arcs = arcs.length;

  /* --- levels --- */
  const maxLevel = o.levels.length - 1;
  const pointsAt = (arc, level) => {
    if (arc.rim) return arc.raw; // the sheet's own rim is never softened
    if (!arc.cache[level]) arc.cache[level] = smoothPoints(arc.raw, arc.closed, o.levels[level]);
    return arc.cache[level];
  };
  const setLevel = (arc, level) => { arc.level = arc.rim ? 0 : level; arc.points = pointsAt(arc, arc.level); };
  arcs.forEach(arc => setLevel(arc, maxLevel));

  /* --- province outlines walked from the shared arcs --- */
  const arcsOf = new Map(); // province id -> arcs it borders
  arcs.forEach(arc => arc.sides.forEach(s => {
    if (s === null) return;
    if (!arcsOf.has(s)) arcsOf.set(s, []);
    arcsOf.get(s).push(arc);
  }));
  /* The arc is stored once in trace direction. A province walks it forward when
     its own directed cell edge runs the same way, backward otherwise. */
  const forwardFor = (arc, provId) => {
    const [a, b] = arc.firstEdge;
    if (directed.get(a + '>' + b) === provId) return true;
    if (directed.get(b + '>' + a) === provId) return false;
    return true;
  };
  const outlineOf = provId => {
    const list = arcsOf.get(provId) || [];
    const oriented = list.map(arc => {
      const fwd = forwardFor(arc, provId);
      return { arc, fwd, from: fwd ? arc.from : arc.to, to: fwd ? arc.to : arc.from, taken: false };
    });
    const byStart = new Map();
    oriented.forEach(it => {
      if (!byStart.has(it.from)) byStart.set(it.from, []);
      byStart.get(it.from).push(it);
    });
    const out = [];
    oriented.forEach(seed => {
      if (seed.taken) return;
      const ring = [];
      const rawRing = [];
      const hosts = new Set();
      let touchesRim = false;
      let it = seed;
      while (it && !it.taken) {
        it.taken = true;
        it.arc.sides.forEach(side => {
          if (side === null) touchesRim = true;
          else if (side !== provId) hosts.add(side);
        });
        const pts = it.fwd ? it.arc.points : it.arc.points.slice().reverse();
        pts.forEach((pt, i) => { if (ring.length === 0 || i > 0) ring.push(pt); });
        const rawPts = it.fwd ? it.arc.raw : it.arc.raw.slice().reverse();
        rawPts.forEach((pt, i) => { if (rawRing.length === 0 || i > 0) rawRing.push(pt); });
        if (it.to === seed.from) break;
        it = (byStart.get(it.to) || []).find(n => !n.taken);
      }
      const first = ring[0], last = ring[ring.length - 1];
      if (ring.length > 1 && first[0] === last[0] && first[1] === last[1]) ring.pop();
      const rf = rawRing[0], rl = rawRing[rawRing.length - 1];
      if (rawRing.length > 1 && rf[0] === rl[0] && rf[1] === rl[1]) rawRing.pop();
      if (ring.length >= 3) {
        out.push(ring);
        ringMeta.set(ring, { hosts, rim: touchesRim, raw: rawRing });
      }
    });
    return out;
  };
  const rebuild = () => solid.forEach(prov => rings.set(prov.id, outlineOf(prov.id)));
  const ringMeta = new Map(); // ring -> { hosts: Set<provId>, rim: boolean }

  /* --- the guard: smoothing must never move a pin across a border --- */
  rebuild();
  const pinsOf = prov => (prov.pois || [])
    .filter(p => p && finite(p.x) && finite(p.y)).map(p => [Number(p.x), Number(p.y)]);
  const rawRings = new Map();
  solid.forEach(prov => rawRings.set(prov.id, prov.cells.map(c => c.map(pt => [pt[0], pt[1]]))));
  /* A pin already outside its raw cells (clamped, or sitting on an edge) is not
     smoothing's fault; only pins that were inside and fell out count. */
  const tracked = solid.map(prov => ({
    prov,
    pins: pinsOf(prov).filter(pt => rawRings.get(prov.id).some(c => insideRings(pt, [c]))),
  }));
  const distToArc = (pt, arc) => {
    let d = Infinity;
    for (let i = 0; i < arc.raw.length - 1; i++) d = Math.min(d, segDist(pt, arc.raw[i], arc.raw[i + 1]));
    return d;
  };
  for (let pass = 0; pass < o.maxGuardPasses; pass++) {
    const displaced = [];
    tracked.forEach(({ prov, pins }) => {
      const region = rings.get(prov.id) || [];
      pins.forEach(pt => { if (!insideRings(pt, region)) displaced.push({ prov, pt }); });
    });
    if (!displaced.length) break;
    stats.guardPasses = pass + 1;
    let moved = 0;
    displaced.forEach(({ prov, pt }) => {
      (arcsOf.get(prov.id) || [])
        .filter(arc => arc.level > 0)
        .map(arc => ({ arc, d: distToArc(pt, arc) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, o.guardArcs)
        .forEach(({ arc }) => { setLevel(arc, arc.level - 1); moved++; });
    });
    stats.pulledBack += moved;
    if (!moved) break;
    rebuild();
  }

  /* Islands: a province's own outer loop that touches no rim and borders
     exactly one other province — a piece of land the surrounding province
     encircles completely. (Cells are wound so an outer loop has NEGATIVE signed
     area and an enclave's hole loop positive.) Reported on the RAW loop, so the
     smoothing level cannot hide one. */
  const islands = [];
  solid.forEach(prov => {
    (rings.get(prov.id) || []).forEach(ring => {
      const meta = ringMeta.get(ring);
      if (!meta || meta.rim || meta.hosts.size !== 1 || signedArea(meta.raw) >= 0) return;
      islands.push({ province: prov.id, host: [...meta.hosts][0], ring: meta.raw, smoothed: ring });
    });
  });

  return {
    arcs: arcs.map(a => ({ id: a.id, sides: a.sides, rim: a.rim, closed: a.closed, level: a.level, points: a.points })),
    rings,
    islands,
    stats,
  };
}

/** SVG path data for one polyline: "M x y L x y …" (no close). */
export function polylineD(points, digits = 3) {
  const pts = (points || []).filter(pt => pt && finite(pt[0]) && finite(pt[1]));
  if (pts.length < 2) return '';
  const f = n => String(Math.round(n * 10 ** digits) / 10 ** digits);
  return 'M ' + pts.map(pt => f(pt[0]) + ' ' + f(pt[1])).join(' L ');
}

/** SVG path data for a province's rings, one closed subpath per ring. */
export function ringsD(ringList, digits = 3) {
  return (ringList || []).map(r => {
    const d = polylineD(r, digits);
    return d ? d + ' Z' : '';
  }).filter(Boolean).join(' ');
}
