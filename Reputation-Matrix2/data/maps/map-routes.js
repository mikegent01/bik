// map-routes.js — the transport layer for the Cartography Desk.
//
// Routes are travel suggestions, not province borders. The source data may file
// important links explicitly; smaller maps fall back to a bounded nearest-hub
// network so a new survey gets useful paths without another hand-drawn system.
// The builder is pure and deterministic: it never mutates a POI or grows state
// during a render.

const CITY_TYPES = new Set([
    'capital_city', 'major_city', 'town', 'village', 'trade_post', 'market',
    'port', 'castle', 'fortress', 'workshop', 'mine', 'academy', 'barracks'
]);
const PORT_TYPES = new Set(['port', 'shipwreck']);
const INDUSTRIAL_TYPES = new Set([
    'capital_city', 'major_city', 'workshop', 'mine', 'factory', 'plant',
    'academy', 'barracks', 'trade_post', 'market'
]);

export const TRANSPORT_MODES = Object.freeze({
    rail: { label: 'Train', icon: '🚆', color: '#f5c451', dash: 'none' },
    road: { label: 'Road', icon: '🛣️', color: '#d9e2f2', dash: '5 3' },
    trail: { label: 'Trail', icon: '🥾', color: '#b79470', dash: '2 4' },
    boat: { label: 'Boat', icon: '⛵', color: '#62d7e8', dash: '8 4' },
});

const DEFAULT_OPTIONS = Object.freeze({
    maxHubs: 12,
    maxRoutes: 18,
    maxDistance: 42,
    extraLinks: 2,
});

const cleanMode = mode => {
    const value = String(mode || '').toLowerCase();
    if (value === 'train' || value === 'rail') return 'rail';
    if (value === 'boat' || value === 'ferry' || value === 'water') return 'boat';
    if (value === 'road' || value === 'highway') return 'road';
    if (value === 'trail' || value === 'path') return 'trail';
    return '';
};

const finite = value => Number.isFinite(Number(value));
const distance = (a, b) => Math.hypot((Number(a.x) || 0) - (Number(b.x) || 0), (Number(a.y) || 0) - (Number(b.y) || 0));
const poiId = poi => String(poi && poi.id || '');
const typeOf = poi => String(poi && poi.type || '').toLowerCase();
const populationOf = poi => Math.max(0, Number(poi && poi.population) || 0);
const economyOf = poi => Math.max(0, Number(poi && poi.economic_value) || 0);

/**
 * A compact, explainable development score. It intentionally uses fields that
 * are already required by the POI contract; industrialisation is not a second
 * hidden census or a random generated stat.
 */
export function industrializationScore(poi) {
    if (!poi) return 0;
    const population = Math.log10(Math.max(1, populationOf(poi))) * 1.7;
    const economy = economyOf(poi) * 1.35;
    const typeBonus = INDUSTRIAL_TYPES.has(typeOf(poi)) ? 3.5 : 0;
    const explicit = Math.max(0, Number(poi.industrialization) || 0);
    return Math.round((population + economy + typeBonus + explicit) * 10) / 10;
}

function isPort(poi) {
    return PORT_TYPES.has(typeOf(poi)) || poi && poi.transportRole === 'port';
}

function isIndustrialHub(poi) {
    if (INDUSTRIAL_TYPES.has(typeOf(poi)) || poi && poi.transportRole === 'industrial') return true;
    /* A large city or town can earn a rail head from its filed population and
       economy even when its type is not literally `workshop` or `mine`. */
    return CITY_TYPES.has(typeOf(poi)) && industrializationScore(poi) >= 14;
}

/** Infer the appropriate symbol from the filed POI facts. */
export function inferTransportMode(from, to, options = {}) {
    const explicit = cleanMode(options.mode || from && from.transportMode || to && to.transportMode);
    if (explicit) return explicit;

    // Two ports are a water connection even when the surrounding sheet is not
    // tagged as an island. This keeps ferries from becoming implausible roads.
    if (isPort(from) && isPort(to)) return 'boat';

    const a = industrializationScore(from);
    const b = industrializationScore(to);
    const average = (a + b) / 2;
    const length = distance(from, to);

    // Rail needs two developed endpoints and a practical overland distance.
    // A very long connection remains a road/ship leg rather than a magical
    // straight railway across the entire painted world.
    if (isIndustrialHub(from) && isIndustrialHub(to) && average >= 12 && length <= 30) return 'rail';
    if (average >= 7 || (isIndustrialHub(from) && isIndustrialHub(to))) return 'road';
    return 'trail';
}

function routeKey(a, b) {
    return [poiId(a), poiId(b)].sort().join('~');
}

function lookupPois(map) {
    const byId = new Map();
    (map && map.pointsOfInterest || []).forEach(poi => {
        if (!poi || !poiId(poi) || !finite(poi.x) || !finite(poi.y)) return;
        byId.set(poiId(poi), poi);
    });
    return byId;
}

function hubsFor(map, options) {
    const opts = { ...DEFAULT_OPTIONS, ...(options || {}) };
    return [...(map && map.pointsOfInterest || [])]
        .filter(poi => poi && poiId(poi) && finite(poi.x) && finite(poi.y))
        .filter(poi => CITY_TYPES.has(typeOf(poi)) || poi.transportRole === 'hub')
        .sort((a, b) => industrializationScore(b) - industrializationScore(a)
            || populationOf(b) - populationOf(a)
            || poiId(a).localeCompare(poiId(b)))
        .slice(0, Math.max(2, opts.maxHubs));
}

function routeRecord(from, to, options = {}) {
    if (!from || !to || poiId(from) === poiId(to)) return null;
    const mode = inferTransportMode(from, to, options);
    const meta = TRANSPORT_MODES[mode];
    return {
        id: options.id || `route_${poiId(from)}_${poiId(to)}`,
        from: poiId(from),
        to: poiId(to),
        mode,
        label: options.label || `${meta.icon} ${meta.label}`,
        distance: Math.round(distance(from, to) * 10) / 10,
        industrialization: Math.round(((industrializationScore(from) + industrializationScore(to)) / 2) * 10) / 10,
        via: Array.isArray(options.via) ? options.via.filter(point => finite(point && point.x) && finite(point && point.y)) : [],
    };
}

function explicitRoutes(map, links, byId) {
    return (links || []).map((link, index) => {
        const from = byId.get(link && (link.from || link.start));
        const to = byId.get(link && (link.to || link.end));
        if (!from || !to) return null;
        return routeRecord(from, to, {
            ...link,
            id: link.id || `filed_route_${index + 1}`,
        });
    }).filter(Boolean);
}

function fallbackRoutes(map, options, existing) {
    const opts = { ...DEFAULT_OPTIONS, ...(options || {}) };
    const hubs = hubsFor(map, opts);
    const routes = [];
    const seen = new Set(existing.map(route => `${route.from}~${route.to}`));
    const add = (from, to) => {
        if (!from || !to || routes.length + existing.length >= opts.maxRoutes) return false;
        const key = routeKey(from, to);
        if (seen.has(key) || distance(from, to) > opts.maxDistance) return false;
        const route = routeRecord(from, to);
        if (!route) return false;
        seen.add(key);
        routes.push(route);
        return true;
    };

    // Start with the most developed hub, then attach every other hub to the
    // closest node already in the network. This makes one connected network
    // instead of a collection of unconnected spokes.
    const network = hubs.length ? [hubs[0]] : [];
    hubs.slice(1).forEach(hub => {
        const nearest = network.slice().sort((a, b) => distance(hub, a) - distance(hub, b))[0];
        if (nearest && add(hub, nearest)) network.push(hub);
    });

    // A very small number of short cross-links makes a city triangle readable
    // without drawing a web over the whole painting.
    const candidates = [];
    for (let i = 0; i < hubs.length; i += 1) {
        for (let j = i + 1; j < hubs.length; j += 1) {
            const a = hubs[i], b = hubs[j];
            candidates.push({ a, b, d: distance(a, b) });
        }
    }
    candidates.sort((a, b) => a.d - b.d || routeKey(a.a, a.b).localeCompare(routeKey(b.a, b.b)));
    candidates.slice(0, Math.max(0, opts.extraLinks)).forEach(pair => add(pair.a, pair.b));
    return routes;
}

/**
 * Build a bounded route layer for any map. `config.links` is the optional
 * hand-filed backbone; the fallback is used only for maps without enough
 * explicit links to be useful.
 */
export function buildTransportNetwork(map, config = {}) {
    const opts = { ...DEFAULT_OPTIONS, ...(config.options || {}) };
    const byId = lookupPois(map);
    const filed = explicitRoutes(map, config.links || [], byId);
    const fallback = filed.length ? [] : fallbackRoutes(map, opts, filed);
    const routes = [...filed, ...fallback].slice(0, opts.maxRoutes);
    const routePois = new Set(routes.flatMap(route => [route.from, route.to]));
    return {
        mapId: map && map.id || '',
        routes,
        hubs: hubsFor(map, opts).map(poi => poiId(poi)),
        routePois,
        count: routes.length,
    };
}

/** Explicit, low-clutter links for the Mushroom Kingdom overview. */
export const MUSHROOM_KINGDOM_ROUTES = Object.freeze([
    { id: 'mk_rail_regency_to_toad_town', from: 'poi_mc_regency_parliament', to: 'poi_mk_toadtown' },
    { id: 'mk_road_toad_town_to_castle', from: 'poi_mk_toadtown', to: 'poi_mk_castle' },
    { id: 'mk_road_toad_town_to_bramblehaven', from: 'poi_mk_toadtown', to: 'poi_mk_bramblehaven' },
    { id: 'mk_road_bramblehaven_to_pleasant_hill', from: 'poi_mk_bramblehaven', to: 'poi_mp_pleasant_hill' },
    { id: 'mk_road_pleasant_hill_to_wario_city', from: 'poi_mp_pleasant_hill', to: 'poi_ww_wariocity' },
    { id: 'mk_rail_wario_city_to_diamond_crossing', from: 'poi_ww_wariocity', to: 'poi_ww_diamondcitypath' },
    { id: 'mk_road_wario_city_to_dry_dry_outpost', from: 'poi_ww_wariocity', to: 'poi_ddd_outpost' },
    { id: 'mk_road_dry_dry_outpost_to_bowser_castle', from: 'poi_ddd_outpost', to: 'poi_bw_bowsers_castle' },
    { id: 'mk_road_bowser_castle_to_lava_ferry', from: 'poi_bw_bowsers_castle', to: 'poi_bw_lava_lake_ferry' },
    { id: 'mk_rail_regency_to_clockwork', from: 'poi_mc_regency_parliament', to: 'poi_mc_clockwork_quarter' },
    { id: 'mk_rail_clockwork_to_airship_docks', from: 'poi_mc_clockwork_quarter', to: 'poi_mc_airship_docks' },
    { id: 'mk_boat_airship_docks_to_forgotten_cove', from: 'poi_mc_airship_docks', to: 'poi_bv_forgotten_cove', mode: 'boat' },
    { id: 'mk_boat_forgotten_cove_to_lava_lagoon', from: 'poi_bv_forgotten_cove', to: 'poi_bv_lava_lagoon', mode: 'boat' },
    { id: 'mk_boat_syrup_cove_to_port_prisma', from: 'poi_ww_syrupscove', to: 'poi_ps_port_prisma', mode: 'boat' },
    { id: 'mk_boat_port_prisma_to_port_yale', from: 'poi_ps_port_prisma', to: 'poi_ys_port_yale', mode: 'boat' },
    { id: 'mk_boat_port_yale_to_ricco_harbor', from: 'poi_ys_port_yale', to: 'poi_si_ricco_harbor', mode: 'boat' },
    { id: 'mk_boat_ricco_harbor_to_delfino', from: 'poi_si_ricco_harbor', to: 'poi_si_delfino_plaza', mode: 'boat' },
    { id: 'mk_rail_bowser_city_to_bullet_station', from: 'poi_nbc_bowser_tower', to: 'poi_nbc_bullet_bill_station' },
    { id: 'mk_rail_bullet_station_to_power_plant', from: 'poi_nbc_bullet_bill_station', to: 'poi_nbc_power_plant' },
    { id: 'mk_road_yoshi_to_dk_treehouse', from: 'poi_ydi_yoshivillage', to: 'poi_ydi_dk_treehouse' },
    { id: 'mk_road_dk_treehouse_to_kremkroc', from: 'poi_ydi_dk_treehouse', to: 'poi_ydi_kremkroc' },
]);

export const TRANSPORT_NETWORKS = Object.freeze({
    mushroom_kingdom_full: Object.freeze({
        links: MUSHROOM_KINGDOM_ROUTES,
        options: Object.freeze({ maxRoutes: 24, maxHubs: 18, extraLinks: 0 }),
    }),
});

export function buildTransportForMap(map) {
    const config = TRANSPORT_NETWORKS[map && map.id] || {};
    return buildTransportNetwork(map, config);
}
