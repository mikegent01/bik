// map-tiers.js — settlement tiering and proximity grouping for the atlas.
//
// The problem this solves: a lot of filed POIs sit on top of each other. A
// palace, its barracks, its foundry and three shrines all land inside one
// percent of the sheet, so the overland map renders a pile of overlapping
// pins and nobody can read it. Flat distance clustering does not fix that on
// its own, because it treats a capital city and a roadside shrine as equals
// and picks whichever it met first as the centre.
//
// So groups are TIERED. Every POI is sorted into City → Town → Village →
// Site. The highest tier present anchors the group, names it, and sets the
// catchment radius: a capital gathers its whole district, a village gathers
// only what is practically in the same spot. Nothing is dropped — every
// member stays in the model and is shown in the group's own zoom window.
//
// Pure functions, zero imports, zero DOM, so node tests load this directly:
//   node tools/tests/test-map-tiers.mjs

/* ---------------- the tiers ---------------- */

/* rank: higher wins the anchor seat. radius: catchment in map-percent units,
   i.e. how far a settlement of this tier reaches to pull neighbours in. */
export const TIERS = [
  { key: 'city',    label: 'City',    plural: 'Cities',  icon: '🏙️', rank: 4, radius: 3.2 },
  { key: 'town',    label: 'Town',    plural: 'Towns',   icon: '🏡', rank: 3, radius: 2.1 },
  { key: 'village', label: 'Village', plural: 'Villages', icon: '🏘️', rank: 2, radius: 1.3 },
  { key: 'site',    label: 'Site',    plural: 'Sites',   icon: '📍', rank: 1, radius: 0.9 },
];

const BY_KEY = TIERS.reduce((acc, t) => (acc[t.key] = t, acc), {});

/* Building types that are settlements outright, regardless of headcount. */
const TYPE_TIER = {
  capital_city: 'city',
  major_city: 'city',
  town: 'town',
  village: 'village',
  hamlet: 'village',
};

/* Types that are seats of power: they read as a city even when the filed
   population is small, because a palace or a grand fortress anchors the
   district around it rather than hanging off a neighbour. */
const SEAT_TYPES = new Set(['castle', 'fortress', 'academy', 'mages_tower', 'port']);

/* Population bands, used when the type alone does not settle it. */
const CITY_POP = 20000;
const TOWN_POP = 4000;
const VILLAGE_POP = 250;

export function tierOf(poi) {
  if (!poi) return BY_KEY.site;

  const filed = poi.tier;
  if (filed && BY_KEY[filed]) return BY_KEY[filed];

  const byType = TYPE_TIER[poi.type];
  if (byType) return BY_KEY[byType];

  const pop = Number(poi.population) || 0;
  const clout = (Number(poi.political_influence) || 0) + (Number(poi.economic_value) || 0);

  if (SEAT_TYPES.has(poi.type)) return BY_KEY[pop >= TOWN_POP || clout >= 12 ? 'city' : 'town'];
  if (pop >= CITY_POP) return BY_KEY.city;
  if (pop >= TOWN_POP) return BY_KEY.town;
  if (pop >= VILLAGE_POP) return BY_KEY.village;
  return BY_KEY.site;
}

export function tierRank(poi) {
  return tierOf(poi).rank;
}

/* ---------------- grouping ---------------- */

/* Deterministic order: rank first, then filed weight, then id. Distance
   clustering that depends on array order produces a different map every time
   a POI is appended, so the sort has to be total. */
function anchorOrder(a, b) {
  const rank = tierRank(b) - tierRank(a);
  if (rank) return rank;
  const weight = poiWeight(b) - poiWeight(a);
  if (weight) return weight;
  return String(a.id || '').localeCompare(String(b.id || ''));
}

export function poiWeight(poi) {
  if (!poi) return 0;
  return (Number(poi.political_influence) || 0)
    + (Number(poi.military_strength) || 0)
    + (Number(poi.economic_value) || 0)
    + Math.log10(Math.max(1, Number(poi.population) || 0));
}

/* One record per filed id. Mirrors map-provinces.uniquePins: the atlas has
   pins filed twice on several sheets, and a duplicate would otherwise be
   grouped against its own twin. Unfiled rows stay separate. */
export function uniquePins(pois) {
  const seen = new Set();
  const out = [];
  (pois || []).forEach((poi, i) => {
    if (!poi) return;
    const id = poi.id || `__idx_${i}`;
    if (seen.has(id)) return;
    seen.add(id);
    out.push(poi);
  });
  return out;
}

/**
 * Group POIs that sit on top of each other under the highest tier present.
 *
 * @param {Array} pois       filed points of interest
 * @param {Object} opts
 *   scale   {number} multiplies every tier radius (zoom compensation: the
 *           further in the reader is, the less the pile needs collapsing)
 *   max     {number} cap on members per group
 *   minSize {number} a group needs this many members, else members stand alone
 * @returns {Array} groups, each {id,x,y,tier,anchor,members,isGroup}
 */
export function groupPois(pois, opts = {}) {
  const scale = opts.scale > 0 ? opts.scale : 1;
  const max = opts.max > 1 ? opts.max : 12;
  const minSize = opts.minSize > 1 ? opts.minSize : 2;

  // Some sheets file the same pin twice (Middle-earth does it a lot). One
  // record per id, or a POI would be grouped against itself.
  const ordered = uniquePins(pois).sort(anchorOrder);
  const taken = new Set();
  const groups = [];

  ordered.forEach(anchor => {
    if (taken.has(anchor.id)) return;
    taken.add(anchor.id);

    const tier = tierOf(anchor);
    const reach = tier.radius * scale;
    const members = [anchor];

    ordered.forEach(other => {
      if (members.length >= max) return;
      if (taken.has(other.id)) return;
      // An equal-or-lower tier neighbour inside the anchor's catchment joins
      // it. A peer city never gets swallowed: two cities stay two pins.
      if (tierRank(other) >= tier.rank) return;
      if (Math.hypot(other.x - anchor.x, other.y - anchor.y) > reach) return;
      members.push(other);
      taken.add(other.id);
    });

    groups.push(makeGroup(anchor, members, tier));
  });

  // A "group" of one is just a pin. Below the floor, unroll it again.
  const unrolled = [];
  groups.forEach(group => {
    if (group.members.length >= minSize) { unrolled.push(group); return; }
    group.members.forEach(poi => unrolled.push(makeGroup(poi, [poi], tierOf(poi))));
  });

  return unrolled.sort((a, b) => anchorOrder(a.anchor, b.anchor));
}

function makeGroup(anchor, members, tier) {
  return {
    id: `tier_${tier.key}_${anchor.id}`,
    x: anchor.x,
    y: anchor.y,
    tier: tier.key,
    tierLabel: tier.label,
    tierIcon: tier.icon,
    anchor,
    members,
    pois: members,               // alias: the renderer's cluster shape
    isGroup: members.length > 1,
    isCluster: members.length > 1,
  };
}

/* Reading label for a group marker or panel heading. */
export function groupLabel(group) {
  if (!group) return '';
  if (!group.isGroup) return group.anchor.name || group.anchor.id;
  const rest = group.members.length - 1;
  return `${group.anchor.name || group.anchor.id} +${rest}`;
}

/* Breakdown of what is inside, highest tier first: "1 City · 3 Sites". */
export function groupBreakdown(group) {
  if (!group) return '';
  const counts = new Map();
  group.members.forEach(poi => {
    const t = tierOf(poi);
    counts.set(t.key, (counts.get(t.key) || 0) + 1);
  });
  return TIERS
    .filter(t => counts.get(t.key))
    .map(t => {
      const n = counts.get(t.key);
      return `${n} ${n === 1 ? t.label : t.plural}`;
    })
    .join(' · ');
}

/* ---------------- the hyper-zoom window ---------------- */

/* The bounding box of a group in map-percent, padded so the outermost pin is
   not flush against the frame, and floored so a group whose members are
   genuinely at the same coordinate still gets a window with area. */
export function groupWindow(group, opts = {}) {
  const pad = opts.pad >= 0 ? opts.pad : 0.6;
  const min = opts.min > 0 ? opts.min : 1.6;

  const xs = group.members.map(p => p.x);
  const ys = group.members.map(p => p.y);
  let x0 = Math.min(...xs) - pad, x1 = Math.max(...xs) + pad;
  let y0 = Math.min(...ys) - pad, y1 = Math.max(...ys) + pad;

  if (x1 - x0 < min) { const c = (x0 + x1) / 2; x0 = c - min / 2; x1 = c + min / 2; }
  if (y1 - y0 < min) { const c = (y0 + y1) / 2; y0 = c - min / 2; y1 = c + min / 2; }

  // Keep the window on the sheet, sliding rather than squashing it.
  const w = x1 - x0, h = y1 - y0;
  if (w <= 100) { if (x0 < 0) { x1 -= x0; x0 = 0; } if (x1 > 100) { x0 -= x1 - 100; x1 = 100; } }
  else { x0 = 0; x1 = 100; }
  if (h <= 100) { if (y0 < 0) { y1 -= y0; y0 = 0; } if (y1 > 100) { y0 -= y1 - 100; y1 = 100; } }
  else { y0 = 0; y1 = 100; }

  return { x0, y0, x1, y1, width: x1 - x0, height: y1 - y0 };
}

/* How much the base image is magnified inside that window. */
export function windowScale(win) {
  return 100 / Math.max(win.width, win.height);
}

/**
 * Member positions inside the zoom window, expressed 0–100 of the window, with
 * overlapping pins nudged apart so all of them stay clickable. The nudge is a
 * fixed-iteration relaxation, so the layout is stable between renders.
 */
export function windowLayout(group, win, opts = {}) {
  const gap = opts.gap > 0 ? opts.gap : 9;
  const passes = opts.passes >= 0 ? opts.passes : 24;

  const pts = group.members.map(poi => ({
    poi,
    id: poi.id,
    x: win.width ? ((poi.x - win.x0) / win.width) * 100 : 50,
    y: win.height ? ((poi.y - win.y0) / win.height) * 100 : 50,
  }));

  // Co-located pins share an exact coordinate and would never separate, so
  // seed them onto a small deterministic ring first.
  const seen = new Map();
  pts.forEach(pt => {
    const key = `${pt.x.toFixed(3)}:${pt.y.toFixed(3)}`;
    const n = seen.get(key) || 0;
    seen.set(key, n + 1);
    if (n) {
      const angle = (n * 2 * Math.PI) / 6;
      pt.x += Math.cos(angle) * gap * 0.7;
      pt.y += Math.sin(angle) * gap * 0.7;
    }
  });

  for (let pass = 0; pass < passes; pass++) {
    let moved = false;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j];
        let dx = b.x - a.x, dy = b.y - a.y;
        let dist = Math.hypot(dx, dy);
        if (dist >= gap) continue;
        if (dist < 1e-6) { dx = 1; dy = 0; dist = 1; }
        const push = (gap - dist) / 2 / dist;
        a.x -= dx * push; a.y -= dy * push;
        b.x += dx * push; b.y += dy * push;
        moved = true;
      }
    }
    if (!moved) break;
  }

  const edge = gap / 2;
  pts.forEach(pt => {
    pt.x = Math.max(edge, Math.min(100 - edge, pt.x));
    pt.y = Math.max(edge, Math.min(100 - edge, pt.y));
  });

  return pts;
}

/* Members sorted the way a reader wants to scan them: biggest place first. */
export function sortedMembers(group) {
  return [...group.members].sort(anchorOrder);
}

/* ---------------- territory marker stacking ---------------- */
//
// Territory markers (states/provinces/regions) are generated PER FACTION and
// then drawn independently, so a contested district produces one fat circle
// per faction all sitting on the same few percent of the sheet. Around the
// Capital Province that is 19 markers inside a 12% radius: a smudge, not a
// map. The POI tiering above cannot help, because the territory path never
// reaches it.
//
// So overlapping territory markers are stacked: they keep their own data, but
// they are drawn as ONE marker that reports what is underneath it.

/* Marker footprint in map-percent. Markers are sized in px and the sheet is
   sized in %, so this is the practical overlap distance rather than a
   geometric one: two markers closer than this cannot both be read. */
export const MARKER_GAP = 5.0;

/**
 * Collapse markers that overlap into stacks.
 *
 * Greedy, seeded by the heaviest marker, so the stack sits on the most
 * significant territory rather than on whichever was generated first. Sorted
 * totally (weight, then id) so the map does not reshuffle between renders.
 *
 * @param {Array} markers each needs {x, y}; weight read from weightOf
 * @param {Object} opts  gap {number}, weightOf {fn}, idOf {fn}, max {number}
 * @returns {Array} stacks {x, y, members, isStack, lead}
 */
export function stackMarkers(markers, opts = {}) {
  const gap = opts.gap > 0 ? opts.gap : MARKER_GAP;
  const max = opts.max > 1 ? opts.max : 24;
  const weightOf = opts.weightOf || (m => m.weight || 0);
  const idOf = opts.idOf || (m => m.id || '');

  const ordered = [...(markers || [])].sort((a, b) => {
    const w = weightOf(b) - weightOf(a);
    if (w) return w;
    return String(idOf(a)).localeCompare(String(idOf(b)));
  });

  const taken = new Set();
  const stacks = [];

  ordered.forEach((lead, i) => {
    if (taken.has(i)) return;
    taken.add(i);
    const members = [lead];

    ordered.forEach((other, j) => {
      if (taken.has(j) || members.length >= max) return;
      if (Math.hypot(other.x - lead.x, other.y - lead.y) > gap) return;
      members.push(other);
      taken.add(j);
    });

    stacks.push({
      x: lead.x,
      y: lead.y,
      lead,
      members,
      isStack: members.length > 1,
    });
  });

  return stacks;
}
