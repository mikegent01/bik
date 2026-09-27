// map-transit.js — Transit, Railways, Trade Roads, Sea Lanes, and Logistics Networks.
//
// Pure model for the maps system:
//   1. station selection    — identifying settlements, ports, markets, mines, and industrial hubs
//   2. network topology     — computing Gabriel graph + MST to connect settlements without crossings
//   3. modal classification — determining whether a connection is Train (Railway), Boat (Sea Lane),
//                             Road (Paved Highway), Path (Wilderness Trail), or Arcane (Warp Pipe)
//                             based on industrialization, settlement tier, economic value, and terrain
//   4. logistics metrics    — distances, travel times, industrial ratings, and freight profiles
//   5. svg & dossier ink    — pure SVG layer generation and sidebar dossier templates
//
// Zero DOM, zero external dependencies, deterministic across browsers and Node.js:
//   node tools/tests/test-map-transit.mjs

import { tierOf, groupPois } from './map-tiers.js';

/* ---------------- transit modes & metadata ---------------- */

export const TRANSIT_MODES = {
  train: {
    id: 'train',
    label: 'Industrial Railway',
    shortLabel: 'Railway',
    icon: '🚂',
    glyph: '🚆',
    color: '#38bdf8',
    secondaryColor: '#0284c7',
    speedMph: 65,
    speedLabel: '65 mph (Express Rail)',
    strokeClass: 'route-train',
    tieClass: 'route-ties',
    description: 'Heavy industrial rail line for high-speed passenger transit and bulk freight haulage.',
  },
  boat: {
    id: 'boat',
    label: 'Maritime Ferry / Sea Lane',
    shortLabel: 'Sea Lane',
    icon: '⛵',
    glyph: '🚢',
    color: '#0ea5e9',
    secondaryColor: '#0369a1',
    speedMph: 18,
    speedLabel: '18 knots (Naval Transit)',
    strokeClass: 'route-boat',
    waveClass: 'route-waves',
    description: 'Coastal shipping lane and naval ferry route connecting harbors, ports, and islands.',
  },
  road: {
    id: 'road',
    label: 'Paved Trade Highway',
    shortLabel: 'Highway',
    icon: '🛣️',
    glyph: '🛤️',
    color: '#fbbf24',
    secondaryColor: '#d97706',
    speedMph: 15,
    speedLabel: '15 mph (Stagecoach & Caravan)',
    strokeClass: 'route-road',
    description: 'Engineered cobblestone thoroughfare connecting provincial centers, fortresses, and markets.',
  },
  path: {
    id: 'path',
    label: 'Wilderness Trail',
    shortLabel: 'Trail',
    icon: '🥾',
    glyph: '👣',
    color: '#a3e635',
    secondaryColor: '#65a30d',
    speedMph: 3.5,
    speedLabel: '3.5 mph (Overland Footpath)',
    strokeClass: 'route-path',
    description: 'Unpaved dirt trail, mountain pass, or forest track between rural hamlets and frontier outposts.',
  },
  arcane: {
    id: 'arcane',
    label: 'Warp Pipe / Arcane Conduit',
    shortLabel: 'Conduit',
    icon: '🌀',
    glyph: '⚡',
    color: '#c084fc',
    secondaryColor: '#9333ea',
    speedMph: 1200,
    speedLabel: 'Instant (Sub-Space Warp)',
    strokeClass: 'route-arcane',
    description: 'Sub-space warp pipe system or magical leyline conduit linking arcane academies and gateways.',
  },
};

export const TRANSIT_MODES_ORDER = ['train', 'boat', 'road', 'path', 'arcane'];

/* ---------------- pure utility helpers ---------------- */

const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));
const round = (val, d = 1) => { const p = 10 ** d; return Math.round((Number(val) || 0) * p) / p; };
const humanize = val => String(val || '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

export function euclideanDistance(a, b) {
  if (!a || !b) return 0;
  const dx = (Number(a.x) || 0) - (Number(b.x) || 0);
  const dy = (Number(a.y) || 0) - (Number(b.y) || 0);
  return Math.hypot(dx, dy);
}

export function distanceInMiles(dPct, map) {
  // Scale factor: 1% of the sheet is roughly 6.5 to 8.5 miles depending on full vs regional sheet
  const isFull = map && (/_full$/.test(map.id || '') || /\(Full\)/i.test(map.name || ''));
  const mileScale = isFull ? 8.2 : 4.5;
  return round(Math.max(1, dPct * mileScale), 0);
}

export function formatTravelTime(miles, speedMph, modeKey) {
  if (modeKey === 'arcane') return 'Instant (Sub-Space Warp)';
  const totalHours = miles / Math.max(1, speedMph);
  if (totalHours < 1) {
    const mins = Math.max(5, Math.round(totalHours * 60));
    return `${mins} mins`;
  }
  if (totalHours < 24) {
    const h = Math.floor(totalHours);
    const m = Math.round((totalHours - h) * 60);
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  const days = Math.floor(totalHours / 24);
  const remH = Math.round(totalHours % 24);
  return remH > 0 ? `${days}d ${remH}h` : `${days} days`;
}

/* ---------------- industrialization scoring ---------------- */

// High-tech, sci-fi, or industrialized realms receive an industrial baseline boost
const INDUSTRIAL_REALM_IDS = new Set([
  'kivotos_full', 'kivotos', 'kivotos_central', 'kivotos_grand_latin', 'kivotos_austelarassia',
  'animatopia_full', 'animatopia', 'animatopia_downtown', 'animatopia_tundratown',
  'neo_bowser_city', 'internet_full', 'internet', 'earth_land_full', 'weldrhom',
  'connectopia_full', 'connectopia'
]);

export function poiIndustrialization(poi, map) {
  if (!poi) return 0;
  let score = 0;

  // 1. Economic Pillar (0 to 10 filed -> 0 to 32 points)
  const econ = Number(poi.economic_value) || 0;
  score += Math.min(32, econ * 3.2);

  // 2. Population Density (logarithmic scale -> 0 to 24 points)
  const pop = Number(poi.population) || 0;
  if (pop > 0) {
    score += Math.min(24, Math.log10(pop + 1) * 5.2);
  }

  // 3. Settlement Tier
  const tier = tierOf(poi);
  if (tier.key === 'city') score += 24;
  else if (tier.key === 'town') score += 14;
  else if (tier.key === 'village') score += 4;

  // 4. Building / Infrastructure Type modifiers
  const type = String(poi.type || '').toLowerCase();
  const name = String(poi.name || '').toLowerCase();

  if (['workshop', 'mine', 'quarry', 'factory', 'foundry', 'refinery'].includes(type)
      || /mine|foundry|factory|refinery|smelter|industrial|works|foundries/i.test(name)) {
    score += 22;
  } else if (['port', 'market', 'trade_post', 'guild_hall', 'vault', 'bank'].includes(type)
      || /port|harbor|market|bazaar|dock|wharf|exchange/i.test(name)) {
    score += 14;
  } else if (['capital_city', 'major_city'].includes(type)) {
    score += 16;
  } else if (['fortress', 'castle', 'barracks', 'outpost', 'restricted_area', 'listening_post'].includes(type)) {
    score += 8;
  } else if (['ruins', 'lair', 'haunted_place', 'dungeon_entrance', 'swamp', 'graveyard'].includes(type)) {
    score -= 12;
  }

  // 5. Realm Industrial Modifier
  const mapId = (map && map.id) || '';
  if (INDUSTRIAL_REALM_IDS.has(mapId)) {
    score += 15;
  }

  return Math.max(0, Math.min(100, Math.round(score)));
}

export function industrializationTier(score) {
  const n = Number(score) || 0;
  if (n >= 68) {
    return {
      level: 4,
      label: 'Heavy Industrial & Rail Metropolis',
      badge: 'Tier 4 · Heavy Industrial Core',
      icon: '🏭',
      description: 'High-speed rail lines, steam/magitek locomotives, smelters, and electrified transport grid.',
      color: '#38bdf8',
    };
  }
  if (n >= 44) {
    return {
      level: 3,
      label: 'Commercial & Trade Hub',
      badge: 'Tier 3 · Regional Rail & Highways',
      icon: '🏛️',
      description: 'Engineered regional railheads, cobblestone freight routes, and distribution warehouses.',
      color: '#fbbf24',
    };
  }
  if (n >= 22) {
    return {
      level: 2,
      label: 'Developing Township',
      badge: 'Tier 2 · Paved Roads & Waystations',
      icon: '🏡',
      description: 'Paved thoroughfares, staging inns, coaching posts, and regular wagon freight.',
      color: '#f97316',
    };
  }
  return {
    level: 1,
    label: 'Rural & Wilderness Frontier',
    badge: 'Tier 1 · Overland Trails',
    icon: '🌲',
    description: 'Unpaved dirt tracks, pack mule trails, mountain passes, and wilderness footpaths.',
    color: '#a3e635',
  };
}

/* ---------------- maritime, arcane, and modal classification ---------------- */

const WATER_TERMS = /(port|harbor|harbour|docks|wharf|pier|isle|island|beach|shore|shores|bay|cove|coast|coastal|sea|ocean|marina|straits|lagoon|haven)/i;
const ARCANE_TERMS = /(portal|warp|pipe|conduit|sub-space|ley\s*line|astral|rift|planar|teleport)/i;

export function isMaritimeRoute(a, b, dPct) {
  if (!a || !b) return false;
  const typeA = String(a.type || '').toLowerCase();
  const typeB = String(b.type || '').toLowerCase();
  const nameA = String(a.name || '');
  const nameB = String(b.name || '');

  const isPortA = typeA === 'port' || typeA === 'shipwreck' || WATER_TERMS.test(nameA);
  const isPortB = typeB === 'port' || typeB === 'shipwreck' || WATER_TERMS.test(nameB);

  // Direct port connection or crossing water
  if ((typeA === 'port' && typeB === 'port') || (isPortA && isPortB)) return true;
  if ((typeA === 'port' || typeB === 'port') && dPct >= 4) return true;
  if ((isPortA || isPortB) && dPct >= 7.5) return true;
  return false;
}

export function isArcaneRoute(a, b, map) {
  if (!a || !b) return false;
  const typeA = String(a.type || '').toLowerCase();
  const typeB = String(b.type || '').toLowerCase();
  const nameA = String(a.name || '');
  const nameB = String(b.name || '');

  const isArcA = ['portal', 'ancient_circle', 'warp_pipe_junction', 'mages_tower', 'oracle'].includes(typeA) || ARCANE_TERMS.test(nameA);
  const isArcB = ['portal', 'ancient_circle', 'warp_pipe_junction', 'mages_tower', 'oracle'].includes(typeB) || ARCANE_TERMS.test(nameB);

  if (isArcA && isArcB) return true;
  if (nameA.includes('Warp Pipe') || nameB.includes('Warp Pipe')) return true;
  const mapId = (map && map.id) || '';
  if ((mapId === 'doughnut_hole_full' || mapId === 'the_edge_full') && (isArcA || isArcB)) return true;
  return false;
}

export function classifyTransitRoute(a, b, map, dPct) {
  const indA = poiIndustrialization(a, map);
  const indB = poiIndustrialization(b, map);
  const tierA = tierOf(a).key;
  const tierB = tierOf(b).key;
  const typeA = String(a.type || '').toLowerCase();
  const typeB = String(b.type || '').toLowerCase();

  // Combined route industrialization with synergy bonus
  let ind = (indA + indB) / 2;
  if (tierA === 'city' && tierB === 'city') ind = Math.min(100, ind + 10);
  else if ((tierA === 'city' && tierB === 'town') || (tierB === 'city' && tierA === 'town')) ind = Math.min(100, ind + 5);

  const roundedInd = Math.round(ind);
  const dMiles = distanceInMiles(dPct, map);

  // 1. Arcane / Warp Conduit Check
  if (isArcaneRoute(a, b, map)) {
    return {
      mode: 'arcane',
      modeMeta: TRANSIT_MODES.arcane,
      industrialization: roundedInd,
      distancePct: dPct,
      distanceMiles: dMiles,
      travelTime: formatTravelTime(dMiles, TRANSIT_MODES.arcane.speedMph, 'arcane'),
      freight: determineFreight(a, b, 'arcane'),
    };
  }

  // 2. Maritime Sea Lane / Ferry Check
  if (isMaritimeRoute(a, b, dPct)) {
    return {
      mode: 'boat',
      modeMeta: TRANSIT_MODES.boat,
      industrialization: roundedInd,
      distancePct: dPct,
      distanceMiles: dMiles,
      travelTime: formatTravelTime(dMiles, TRANSIT_MODES.boat.speedMph, 'boat'),
      freight: determineFreight(a, b, 'boat'),
    };
  }

  // 3. Industrial Railway Check
  const heavyIndustrialA = ['workshop', 'mine', 'quarry', 'factory', 'foundry'].includes(typeA);
  const heavyIndustrialB = ['workshop', 'mine', 'quarry', 'factory', 'foundry'].includes(typeB);
  const mapId = (map && map.id) || '';
  const isIndustrialRealm = INDUSTRIAL_REALM_IDS.has(mapId);

  const qualifiesForRail = roundedInd >= 46
    || (tierA === 'city' && tierB === 'city')
    || (heavyIndustrialA && (tierB === 'city' || tierB === 'town' || typeB === 'port'))
    || (heavyIndustrialB && (tierA === 'city' || tierA === 'town' || typeA === 'port'))
    || (isIndustrialRealm && roundedInd >= 36 && (tierA !== 'site' || tierB !== 'site'));

  if (qualifiesForRail) {
    return {
      mode: 'train',
      modeMeta: TRANSIT_MODES.train,
      industrialization: roundedInd,
      distancePct: dPct,
      distanceMiles: dMiles,
      travelTime: formatTravelTime(dMiles, TRANSIT_MODES.train.speedMph, 'train'),
      freight: determineFreight(a, b, 'train'),
    };
  }

  // 4. Paved Trade Highway Check
  const qualifiesForRoad = roundedInd >= 20
    || tierA === 'city' || tierB === 'city'
    || tierA === 'town' || tierB === 'town'
    || ['market', 'trade_post', 'fortress', 'castle', 'barracks'].includes(typeA)
    || ['market', 'trade_post', 'fortress', 'castle', 'barracks'].includes(typeB);

  if (qualifiesForRoad) {
    return {
      mode: 'road',
      modeMeta: TRANSIT_MODES.road,
      industrialization: roundedInd,
      distancePct: dPct,
      distanceMiles: dMiles,
      travelTime: formatTravelTime(dMiles, TRANSIT_MODES.road.speedMph, 'road'),
      freight: determineFreight(a, b, 'road'),
    };
  }

  // 5. Wilderness Trail
  return {
    mode: 'path',
    modeMeta: TRANSIT_MODES.path,
    industrialization: roundedInd,
    distancePct: dPct,
    distanceMiles: dMiles,
    travelTime: formatTravelTime(dMiles, TRANSIT_MODES.path.speedMph, 'path'),
    freight: determineFreight(a, b, 'path'),
  };
}

/* ---------------- freight & line naming ---------------- */

export function determineFreight(a, b, mode) {
  const typeA = String(a.type || '').toLowerCase();
  const typeB = String(b.type || '').toLowerCase();
  const nameA = String(a.name || '');
  const nameB = String(b.name || '');

  if (mode === 'arcane') {
    return 'Arcane Reagents, Soul Echoes & Sub-Space Transmissions';
  }
  if (['workshop', 'mine', 'quarry', 'factory'].includes(typeA) || ['workshop', 'mine', 'quarry', 'factory'].includes(typeB)) {
    return 'Smelted Ore, Refined Alloy & Heavy Magitek Machinery';
  }
  if (typeA === 'port' || typeB === 'port' || mode === 'boat') {
    return 'Maritime Cargo, Deepwater Spices & Naval Timber';
  }
  if (['market', 'trade_post', 'vault'].includes(typeA) || ['market', 'trade_post', 'vault'].includes(typeB)) {
    return 'Commercial Merchandise, Gold Coinage & Fine Textiles';
  }
  if (['farm', 'resource'].includes(typeA) || ['farm', 'resource'].includes(typeB)) {
    return 'Harvest Grain, Fresh Agricultural Produce & Livestock';
  }
  if (['fortress', 'castle', 'barracks', 'outpost'].includes(typeA) || ['fortress', 'castle', 'barracks', 'outpost'].includes(typeB)) {
    return 'Military Armaments, Heavy Ballistas & Troop Provisions';
  }
  if (mode === 'train') {
    return 'High-Priority Passenger Express, Mail & Bulk Freight';
  }
  if (mode === 'road') {
    return 'Merchant Wagon Goods, Salt, Tools & Travel Supplies';
  }
  return 'Local Foraged Rations, Pack Freight & Pilgrim Supplies';
}

export function generateRouteName(a, b, mode) {
  const nameA = a.name || 'Station A';
  const nameB = b.name || 'Station B';

  switch (mode) {
    case 'train':
      return `${nameA} – ${nameB} Rail Link`;
    case 'boat':
      return `${nameA} – ${nameB} Sea Ferry`;
    case 'road':
      return `${nameA} – ${nameB} Highway`;
    case 'arcane':
      return `${nameA} – ${nameB} Warp Conduit`;
    case 'path':
    default:
      return `${nameA} – ${nameB} Trail`;
  }
}

/* ---------------- topology & network construction ---------------- */

export function selectTransitStations(pois, map, opts = {}) {
  const list = (pois || []).filter(p => p && Number.isFinite(p.x) && Number.isFinite(p.y));
  if (list.length <= 2) return list;

  // Filter for transit-relevant places
  const relevantTypes = new Set([
    'capital_city', 'major_city', 'town', 'village', 'hamlet', 'district', 'palace',
    'port', 'market', 'trade_post', 'workshop', 'mine', 'quarry', 'factory',
    'fortress', 'castle', 'barracks', 'outpost', 'guild_hall', 'vault', 'portal',
    'mages_tower', 'ancient_circle', 'warp_pipe_junction', 'academy', 'inn',
  ]);

  let candidates = list.filter(p => {
    const t = tierOf(p);
    return t.key !== 'site' || relevantTypes.has(String(p.type || '').toLowerCase());
  });

  // Fallback if sheet is sparse
  if (candidates.length < 2) {
    candidates = list.slice();
  }

  // Use settlement grouping to consolidate co-located city pins into unified station anchors
  const groups = groupPois(candidates);
  return groups.map(g => {
    const anchor = g.anchor || g[0];
    return {
      ...anchor,
      clusterPois: g,
      memberCount: g.length,
    };
  });
}

function computeGabrielEdges(nodes) {
  const n = nodes.length;
  const edges = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const u = nodes[i], v = nodes[j];
      const d2 = (u.x - v.x) ** 2 + (u.y - v.y) ** 2;
      let isGabriel = true;
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        const w = nodes[k];
        if ((u.x - w.x) ** 2 + (u.y - w.y) ** 2 + (v.x - w.x) ** 2 + (v.y - w.y) ** 2 < d2 - 1e-5) {
          isGabriel = false;
          break;
        }
      }
      if (isGabriel) {
        edges.push({ u, v, dPct: Math.sqrt(d2), i, j });
      }
    }
  }
  return edges;
}

function computeMstEdges(nodes) {
  const n = nodes.length;
  if (n < 2) return [];
  const parent = Array.from({ length: n }, (_, i) => i);
  function find(i) {
    let root = i;
    while (root !== parent[root]) root = parent[root];
    let curr = i;
    while (curr !== root) {
      const nxt = parent[curr];
      parent[curr] = root;
      curr = nxt;
    }
    return root;
  }
  function union(i, j) {
    const rootI = find(i), rootJ = find(j);
    if (rootI !== rootJ) {
      parent[rootI] = rootJ;
      return true;
    }
    return false;
  }

  const allPairs = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      allPairs.push({ u: nodes[i], v: nodes[j], dPct: euclideanDistance(nodes[i], nodes[j]), i, j });
    }
  }
  allPairs.sort((a, b) => a.dPct - b.dPct);

  const mst = [];
  for (const edge of allPairs) {
    if (union(edge.i, edge.j)) {
      mst.push(edge);
      if (mst.length === n - 1) break;
    }
  }
  return mst;
}

export function buildTransitNetwork(map, pois, opts = {}) {
  const rawPois = (pois || []).filter(p => p && Number.isFinite(p.x) && Number.isFinite(p.y));
  if (!rawPois.length) {
    return {
      mapId: (map && map.id) || '',
      stations: [],
      routes: [],
      stationById: new Map(),
      routesByStation: new Map(),
      summary: { totalRoutes: 0, totalStations: 0, totalMiles: 0, byMode: {}, avgIndustrialization: 0, topHub: null, primaryMode: 'path' },
    };
  }

  const stations = selectTransitStations(rawPois, map, opts);
  if (stations.length < 2) {
    return {
      mapId: (map && map.id) || '',
      stations,
      routes: [],
      stationById: new Map(stations.map(s => [s.id, s])),
      routesByStation: new Map(),
      summary: { totalRoutes: 0, totalStations: stations.length, totalMiles: 0, byMode: {}, avgIndustrialization: 0, topHub: null, primaryMode: 'path' },
    };
  }

  // Combine Gabriel graph edges with MST to ensure seamless connectivity and zero edge crossings
  const gabrielEdges = computeGabrielEdges(stations);
  const mstEdges = computeMstEdges(stations);

  const edgeSet = new Set();
  const combinedEdges = [];

  const addEdge = e => {
    const idKey = e.u.id < e.v.id ? `${e.u.id}__${e.v.id}` : `${e.v.id}__${e.u.id}`;
    if (!edgeSet.has(idKey)) {
      edgeSet.add(idKey);
      combinedEdges.push(e);
    }
  };

  mstEdges.forEach(addEdge);
  gabrielEdges.forEach(addEdge);

  // Classify each edge into a transit route
  const routes = combinedEdges.map((e, idx) => {
    const classification = classifyTransitRoute(e.u, e.v, map, e.dPct);
    const id = `transit_${(map && map.id) || 'map'}_${idx}_${e.u.id.replace(/^poi_/, '')}_${e.v.id.replace(/^poi_/, '')}`;
    const name = generateRouteName(e.u, e.v, classification.mode);

    return {
      id,
      index: idx,
      u: e.u,
      v: e.v,
      from: e.u,
      to: e.v,
      name,
      ...classification,
    };
  });

  // Build station lookup & station connection degrees
  const stationById = new Map();
  const routesByStation = new Map();

  stations.forEach(st => {
    stationById.set(st.id, st);
    routesByStation.set(st.id, []);
  });

  routes.forEach(r => {
    if (routesByStation.has(r.u.id)) routesByStation.get(r.u.id).push(r);
    if (routesByStation.has(r.v.id)) routesByStation.get(r.v.id).push(r);
  });

  // Enrich stations with metrics
  stations.forEach(st => {
    const conn = routesByStation.get(st.id) || [];
    st.connections = conn;
    st.degree = conn.length;
    st.industrialScore = poiIndustrialization(st, map);
    st.industrialTier = industrializationTier(st.industrialScore);

    // Primary station type based on predominant connected mode
    const modeCounts = {};
    conn.forEach(r => { modeCounts[r.mode] = (modeCounts[r.mode] || 0) + 1; });
    const leadMode = Object.entries(modeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'road';

    switch (leadMode) {
      case 'train':
        st.stationRole = st.degree >= 3 ? 'Central Railway Terminal' : 'Regional Railhead';
        st.stationIcon = '🚆';
        break;
      case 'boat':
        st.stationRole = 'Harbor Docks & Ferry Port';
        st.stationIcon = '⚓';
        break;
      case 'arcane':
        st.stationRole = 'Warp Conduit Node';
        st.stationIcon = '🌀';
        break;
      case 'road':
        st.stationRole = st.degree >= 3 ? 'Major Highway Junction' : 'Coaching Post & Waystation';
        st.stationIcon = '🛣️';
        break;
      case 'path':
      default:
        st.stationRole = 'Overland Trailhead';
        st.stationIcon = '🥾';
        break;
    }
  });

  // Calculate network summary
  const byMode = {};
  let totalMiles = 0;
  let totalIndSum = 0;

  routes.forEach(r => {
    totalMiles += r.distanceMiles;
    totalIndSum += r.industrialization;
    if (!byMode[r.mode]) {
      byMode[r.mode] = { count: 0, miles: 0, meta: r.modeMeta };
    }
    byMode[r.mode].count += 1;
    byMode[r.mode].miles += r.distanceMiles;
  });

  const sortedHubs = [...stations].sort((a, b) => (b.degree || 0) - (a.degree || 0) || (b.industrialScore || 0) - (a.industrialScore || 0));
  const topHub = sortedHubs[0] || null;
  const primaryModeEntry = Object.entries(byMode).sort((a, b) => b[1].count - a[1].count)[0];
  const primaryMode = primaryModeEntry ? primaryModeEntry[0] : 'road';

  return {
    mapId: (map && map.id) || '',
    stations,
    routes,
    stationById,
    routesByStation,
    summary: {
      totalRoutes: routes.length,
      totalStations: stations.length,
      totalMiles: Math.round(totalMiles),
      byMode,
      avgIndustrialization: routes.length ? Math.round(totalIndSum / routes.length) : 0,
      topHub,
      primaryMode,
    },
  };
}

/* ---------------- svg rendering ---------------- */

export function routeSvgD(route) {
  if (!route || !route.u || !route.v) return '';
  const x1 = Number(route.u.x) || 0;
  const y1 = Number(route.u.y) || 0;
  const x2 = Number(route.v.x) || 0;
  const y2 = Number(route.v.y) || 0;

  if (route.mode === 'boat') {
    // Gentle nautical curve
    const mx = (x1 + x2) / 2 + (y2 - y1) * 0.08;
    const my = (y1 + y2) / 2 - (x2 - x1) * 0.08;
    return `M ${x1.toFixed(2)},${y1.toFixed(2)} Q ${mx.toFixed(2)},${my.toFixed(2)} ${x2.toFixed(2)},${y2.toFixed(2)}`;
  }

  return `M ${x1.toFixed(2)},${y1.toFixed(2)} L ${x2.toFixed(2)},${y2.toFixed(2)}`;
}

export function transitSvg(network, selectedRouteId, opts = {}) {
  if (!network || !network.routes || !network.routes.length) return '';

  const paths = network.routes.map(r => {
    const d = routeSvgD(r);
    const isSelected = selectedRouteId === r.id;
    const mode = r.mode;
    const dur = mode === 'train' ? Math.max(3, Math.min(12, r.distancePct * 0.4)) : Math.max(5, Math.min(18, r.distancePct * 0.6));

    let trackMarkup = '';
    if (mode === 'train') {
      trackMarkup = `<path class="atlas-v2-transit-track-bed" d="${d}"/>`
        + `<path class="atlas-v2-transit-rail-ties" d="${d}"/>`
        + `<path class="atlas-v2-transit-rail-line" d="${d}"/>`
        + `<circle class="atlas-v2-transit-pulse train" r="0.65"><animateMotion path="${d}" dur="${dur.toFixed(1)}s" repeatCount="indefinite"/></circle>`;
    } else if (mode === 'boat') {
      trackMarkup = `<path class="atlas-v2-transit-sea" d="${d}"/>`
        + `<circle class="atlas-v2-transit-pulse boat" r="0.65"><animateMotion path="${d}" dur="${dur.toFixed(1)}s" repeatCount="indefinite"/></circle>`;
    } else if (mode === 'road') {
      trackMarkup = `<path class="atlas-v2-transit-road-bed" d="${d}"/>`
        + `<path class="atlas-v2-transit-road" d="${d}"/>`;
    } else if (mode === 'arcane') {
      trackMarkup = `<path class="atlas-v2-transit-arcane-glow" d="${d}"/>`
        + `<path class="atlas-v2-transit-arcane" d="${d}"/>`
        + `<circle class="atlas-v2-transit-pulse arcane" r="0.8"><animateMotion path="${d}" dur="${(dur * 0.4).toFixed(1)}s" repeatCount="indefinite"/></circle>`;
    } else {
      trackMarkup = `<path class="atlas-v2-transit-trail" d="${d}"/>`;
    }

    const hit = `<path class="atlas-v2-transit-hit" data-route-id="${esc(r.id)}" d="${d}"><title>${esc(r.name)} (${esc(r.modeMeta.label)}) · ${r.distanceMiles} mi · ${r.travelTime}</title></path>`;

    return `<g class="atlas-v2-route route-${mode}${isSelected ? ' selected' : ''}" data-route="${esc(r.id)}">${trackMarkup}${hit}</g>`;
  }).join('');

  const stationsMarkup = (network.stations || []).map(st => {
    const isMajor = st.degree >= 3 || tierOf(st).key === 'city';
    const r = isMajor ? 1.4 : 1.0;
    return `<circle class="atlas-v2-transit-node${isMajor ? ' hub' : ''}" cx="${Number(st.x).toFixed(2)}" cy="${Number(st.y).toFixed(2)}" r="${r}"><title>${esc(st.name)} · ${esc(st.stationRole || 'Station')}</title></circle>`;
  }).join('');

  return `<svg class="atlas-v2-transit-layer" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${paths}${stationsMarkup}</svg>`;
}

/* ---------------- sidebar dossiers & UI components ---------------- */

export function transitRouteDossierHtml(route, network) {
  if (!route) return '';
  const meta = route.modeMeta || TRANSIT_MODES[route.mode] || TRANSIT_MODES.road;
  const indTier = industrializationTier(route.industrialization);

  return `<article class="atlas-v2-detail atlas-v2-transit-dossier">
    <span class="atlas-v2-kicker">🚆 LOGISTICS & TRANSIT ARTERY · ${esc(meta.label.toUpperCase())}</span>
    <div class="atlas-v2-transit-header">
      <div class="atlas-v2-transit-badge" style="--mode-color:${meta.color}">
        <i>${meta.icon}</i>
        <div>
          <h3>${esc(route.name)}</h3>
          <b>${esc(meta.label)} · ${esc(meta.speedLabel)}</b>
        </div>
      </div>
    </div>

    <div class="atlas-v2-transit-stat-grid">
      <div class="atlas-v2-transit-stat">
        <span>Distance</span>
        <b>${route.distanceMiles} miles</b>
      </div>
      <div class="atlas-v2-transit-stat">
        <span>Transit Time</span>
        <b>${esc(route.travelTime)}</b>
      </div>
      <div class="atlas-v2-transit-stat">
        <span>Industrial Index</span>
        <b style="color:${indTier.color}">${route.industrialization}/100</b>
      </div>
      <div class="atlas-v2-transit-stat">
        <span>Classification</span>
        <b>${esc(indTier.label)}</b>
      </div>
    </div>

    <div class="atlas-v2-transit-meter">
      <div class="atlas-v2-transit-meter-label">
        <span>Corridor Industrialization</span>
        <b>${route.industrialization}%</b>
      </div>
      <div class="atlas-v2-transit-meter-bar">
        <div class="atlas-v2-transit-meter-fill" style="width:${route.industrialization}%;background:${indTier.color}"></div>
      </div>
      <p class="atlas-v2-transit-meter-desc">${esc(indTier.description)}</p>
    </div>

    <div class="atlas-v2-transit-endpoints">
      <h4>Connected Terminals</h4>
      <div class="atlas-v2-transit-station-card">
        <div>
          <span class="atlas-v2-transit-node-tag">ORIGIN</span>
          <b>${esc(route.u.name)}</b>
          <small>${esc(humanize(route.u.type || 'settlement'))} · ${Number(route.u.population || 0).toLocaleString()} residents</small>
        </div>
        <button type="button" class="atlas-v2-transit-jump-btn" data-jump-poi="${esc(route.u.id)}" title="Focus ${esc(route.u.name)}">📍 Focus</button>
      </div>
      <div class="atlas-v2-transit-station-card">
        <div>
          <span class="atlas-v2-transit-node-tag">DESTINATION</span>
          <b>${esc(route.v.name)}</b>
          <small>${esc(humanize(route.v.type || 'settlement'))} · ${Number(route.v.population || 0).toLocaleString()} residents</small>
        </div>
        <button type="button" class="atlas-v2-transit-jump-btn" data-jump-poi="${esc(route.v.id)}" title="Focus ${esc(route.v.name)}">📍 Focus</button>
      </div>
    </div>

    <div class="atlas-v2-transit-freight-card">
      <h4>📦 Freight & Cargo Manifest</h4>
      <p>${esc(route.freight)}</p>
    </div>

    <div class="atlas-v2-transit-actions">
      <button type="button" class="atlas-v2-transit-action-btn" data-transit-frame-route="${esc(route.id)}">🔍 Frame Route</button>
      <button type="button" class="atlas-v2-transit-action-btn secondary" data-transit-back>↩ Route Overview</button>
    </div>
  </article>`;
}

export function transitNetworkOverviewHtml(network) {
  if (!network) return '';
  const sum = network.summary;
  const modes = sum.byMode || {};

  const modeRows = TRANSIT_MODES_ORDER.filter(k => modes[k] && modes[k].count > 0).map(k => {
    const row = modes[k];
    const m = row.meta;
    return `<div class="atlas-v2-transit-mode-row" style="--row-color:${m.color}">
      <i>${m.icon}</i>
      <div class="atlas-v2-transit-mode-info">
        <b>${esc(m.label)}</b>
        <small>${row.count} line${row.count === 1 ? '' : 's'} · ${row.miles} miles total</small>
      </div>
      <span class="atlas-v2-transit-mode-count">${row.count}</span>
    </div>`;
  }).join('');

  const topHub = sum.topHub;
  const hubHtml = topHub ? `<div class="atlas-v2-transit-hub-highlight">
    <span class="atlas-v2-kicker">CENTRAL LOGISTICS HUB</span>
    <div class="atlas-v2-transit-station-card">
      <div>
        <b>${topHub.stationIcon || '🚆'} ${esc(topHub.name)}</b>
        <small>${topHub.degree} connected lines · Industrial Score ${topHub.industrialScore}/100</small>
      </div>
      <button type="button" class="atlas-v2-transit-jump-btn" data-jump-poi="${esc(topHub.id)}">📍 Focus Hub</button>
    </div>
  </div>` : '';

  return `<article class="atlas-v2-detail atlas-v2-transit-overview">
    <span class="atlas-v2-kicker">🚆 REALM TRANSIT & LOGISTICS NETWORK</span>
    <h3>Wayfinding & Industrial Infrastructure</h3>
    <p>Comprehensive transit grid linking settlements, mining pits, ship harbors, and industrial districts across the realm.</p>

    <div class="atlas-v2-transit-stat-grid">
      <div class="atlas-v2-transit-stat">
        <span>Total Lines</span>
        <b>${sum.totalRoutes} routes</b>
      </div>
      <div class="atlas-v2-transit-stat">
        <span>Network Extent</span>
        <b>${sum.totalMiles} miles</b>
      </div>
      <div class="atlas-v2-transit-stat">
        <span>Active Terminals</span>
        <b>${sum.totalStations} stations</b>
      </div>
      <div class="atlas-v2-transit-stat">
        <span>Avg Industrialization</span>
        <b>${sum.avgIndustrialization}/100</b>
      </div>
    </div>

    <h4>Transit Modes Breakdown</h4>
    <div class="atlas-v2-transit-modes-list">
      ${modeRows || '<p class="text-muted">No active transit lines charted on this sheet.</p>'}
    </div>

    ${hubHtml}
  </article>`;
}

export function stationTransitDetailHtml(poi, network) {
  if (!poi || !network) return '';
  const routes = (network.routesByStation && network.routesByStation.get(poi.id)) || [];
  const indScore = poiIndustrialization(poi, null);
  const indTier = industrializationTier(indScore);

  if (!routes.length) {
    return `<div class="atlas-v2-poi-transit-card">
      <span class="atlas-v2-kicker">🚆 TRANSIT & LOGISTICS</span>
      <p class="text-muted">No direct major transit lines mapped to this location.</p>
    </div>`;
  }

  const linesList = routes.map(r => {
    const isOrigin = r.u.id === poi.id;
    const dest = isOrigin ? r.v : r.u;
    const meta = r.modeMeta || TRANSIT_MODES[r.mode];
    return `<div class="atlas-v2-poi-transit-line" data-select-route="${esc(r.id)}">
      <i>${meta.icon}</i>
      <div>
        <b>${esc(r.name)}</b>
        <small>To ${esc(dest.name)} · ${r.distanceMiles} mi · ${r.travelTime}</small>
      </div>
      <button type="button" class="atlas-v2-transit-jump-btn" data-select-route="${esc(r.id)}">Inspect</button>
    </div>`;
  }).join('');

  return `<div class="atlas-v2-poi-transit-card">
    <span class="atlas-v2-kicker">🚆 TRANSIT HUB & CONNECTIONS (${routes.length})</span>
    <div class="atlas-v2-poi-transit-header">
      <b style="color:${indTier.color}">${indTier.icon} ${esc(indTier.label)} (${indScore}/100)</b>
    </div>
    <div class="atlas-v2-poi-transit-list">
      ${linesList}
    </div>
  </div>`;
}
