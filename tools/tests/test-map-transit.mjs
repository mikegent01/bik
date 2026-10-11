// Test suite for map-transit.js: pure models, modal classification, industrialization,
// topology generation, travel times, SVG rendering, and real MAP_DATA executions.
//
//   node tools/tests/test-map-transit.mjs
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';
import {
  TRANSIT_MODES, TRANSIT_MODES_ORDER, euclideanDistance, distanceInMiles, formatTravelTime,
  poiIndustrialization, industrializationTier, isMaritimeRoute, isArcaneRoute,
  classifyTransitRoute, determineFreight, generateRouteName, selectTransitStations,
  buildTransitNetwork, routeSvgD, transitSvg, transitRouteDossierHtml,
  transitNetworkOverviewHtml, stationTransitDetailHtml,
  waypointPathD, networkFromRoutes, ROUTE_MODE_ALIAS, TRANSIT_MODE_TO_ROUTE,
} from '../../Reputation-Matrix2/app/pages/maps/map-transit.js';

const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra !== '' ? ' — ' + extra : ''));

/* ---------------- 1. transit modes metadata ---------------- */
check('all 6 transit modes defined', Object.keys(TRANSIT_MODES).length === 6);
check('transit modes order covers every key', TRANSIT_MODES_ORDER.length === 6 && TRANSIT_MODES_ORDER.every(k => TRANSIT_MODES[k]));
check('train mode has speed and icon', TRANSIT_MODES.train.speedMph === 65 && TRANSIT_MODES.train.icon === '🚂');
check('boat mode has naval speed and icon', TRANSIT_MODES.boat.speedMph === 18 && TRANSIT_MODES.boat.icon === '⛵');
check('road mode has stagecoach speed and icon', TRANSIT_MODES.road.speedMph === 15 && TRANSIT_MODES.road.icon === '🛣️');
check('path mode has walking speed and icon', TRANSIT_MODES.path.speedMph === 3.5 && TRANSIT_MODES.path.icon === '🥾');
check('arcane mode has instant speed and icon', TRANSIT_MODES.arcane.icon === '🌀');

/* ---------------- 2. pure distance and time calculations ---------------- */
check('euclidean distance calculates correctly', Math.abs(euclideanDistance({ x: 0, y: 0 }, { x: 30, y: 40 }) - 50) < 1e-5);
check('euclidean distance handles null or missing coords', euclideanDistance(null, { x: 10, y: 10 }) === 0);
check('distance in miles scales full sheets', distanceInMiles(10, { id: 'midlands_full' }) === 82);
check('distance in miles scales regional sheets', distanceInMiles(10, { id: 'dry_dry_desert' }) === 45);

check('format travel time handles minutes', formatTravelTime(20, 60, 'train') === '20 mins');
check('format travel time handles hours and minutes', formatTravelTime(90, 60, 'train') === '1h 30m');
check('format travel time handles multi-day expeditions', formatTravelTime(240, 3.5, 'path').includes('d'));
check('format travel time handles arcane instant warp', formatTravelTime(500, 1000, 'arcane').includes('Instant'));

/* ---------------- 3. POI industrialization & tier classification ---------------- */
const industrialPoi = {
  id: 'poi_test_foundry',
  name: 'Grand Magitek Foundry',
  type: 'workshop',
  tier: 'city',
  economic_value: 10,
  population: 50000,
};
const ruralPoi = {
  id: 'poi_test_shrine',
  name: 'Forgotten Forest Shrine',
  type: 'shrine',
  tier: 'site',
  economic_value: 0,
  population: 10,
};

const indHigh = poiIndustrialization(industrialPoi, { id: 'midlands_full' });
const indLow = poiIndustrialization(ruralPoi, { id: 'midlands_full' });

check('industrial workshop scores high', indHigh >= 70, `score ${indHigh}`);
check('rural shrine scores low', indLow <= 20, `score ${indLow}`);
check('scores are clamped to 0..100', poiIndustrialization({}, {}) >= 0 && poiIndustrialization({}, {}) <= 100);

const tier4 = industrializationTier(85);
const tier1 = industrializationTier(12);
check('tier 4 is heavy industrial', tier4.level === 4 && tier4.badge.includes('Tier 4'));
check('tier 1 is rural wilderness', tier1.level === 1 && tier1.badge.includes('Tier 1'));

/* ---------------- 4. maritime and arcane route detection ---------------- */
const portA = { id: 'poi_p1', name: 'South Harbor Docks', type: 'port', x: 10, y: 10 };
const portB = { id: 'poi_p2', name: 'Isle Haven Wharf', type: 'port', x: 20, y: 25 };
const townA = { id: 'poi_t1', name: 'Inland Town', type: 'town', x: 50, y: 50 };
const arcA = { id: 'poi_arc1', name: 'Warp Pipe Junction South', type: 'warp_pipe_junction', x: 40, y: 40 };
const arcB = { id: 'poi_arc2', name: 'Mages Tower Portal Gate', type: 'portal', x: 60, y: 60 };

check('port to port is maritime', isMaritimeRoute(portA, portB, 18) === true);
check('coastal water name over distance is maritime', isMaritimeRoute(portA, { id: 'poi_c', name: 'Coral Bay Shores', type: 'village', x: 15, y: 20 }, 10) === true);
check('inland towns are not maritime', isMaritimeRoute(townA, { id: 'poi_t2', name: 'Mountain Fortress', type: 'fortress', x: 55, y: 55 }, 5) === false);

check('warp pipe to portal is arcane', isArcaneRoute(arcA, arcB, { id: 'mushroom_kingdom_full' }) === true);
check('normal towns are not arcane', isArcaneRoute(townA, portA, { id: 'midlands_full' }) === false);

/* ---------------- 5. modal classification & freight profiles ---------------- */
const classRail = classifyTransitRoute(industrialPoi, { id: 'poi_cap', name: 'Capital City', type: 'capital_city', tier: 'city', economic_value: 9, population: 40000, x: 15, y: 15 }, { id: 'midlands_full' }, 12);
check('high-industrial city-to-foundry qualifies as railway', classRail.mode === 'train', classRail.mode);
check('train freight names heavy metals / machinery', classRail.freight.includes('Smelted Ore') || classRail.freight.includes('Machinery'), classRail.freight);

const classSea = classifyTransitRoute(portA, portB, { id: 'midlands_full' }, 15);
check('port connection classifies as boat', classSea.mode === 'boat', classSea.mode);
check('sea freight names maritime goods', classSea.freight.includes('Maritime Cargo'), classSea.freight);

const classRoad = classifyTransitRoute(townA, { id: 'poi_t3', name: 'Market Crossroads', type: 'market', tier: 'town', economic_value: 4, population: 2500, x: 55, y: 52 }, { id: 'midlands_full' }, 6);
check('town to market classifies as road', classRoad.mode === 'road', classRoad.mode);

const classTrail = classifyTransitRoute(ruralPoi, { id: 'poi_h', name: 'Deepwood Hamlet', type: 'hamlet', tier: 'village', economic_value: 1, population: 40, x: 80, y: 82 }, { id: 'midlands_full' }, 4);
check('rural shrine to hamlet classifies as wilderness trail', classTrail.mode === 'path', classTrail.mode);

/* ---------------- 6. route naming & freight ---------------- */
check('route naming handles train', generateRouteName({ name: 'Weldrhom' }, { name: 'Mighdural' }, 'train') === 'Weldrhom – Mighdural Rail Link');
check('route naming handles boat', generateRouteName({ name: 'Yale Shores' }, { name: 'Pianta Bay' }, 'boat') === 'Yale Shores – Pianta Bay Sea Ferry');
check('route naming handles road', generateRouteName({ name: 'Oakhaven' }, { name: 'Ravencreek' }, 'road') === 'Oakhaven – Ravencreek Highway');

/* ---------------- 7. edge-case handling ---------------- */
const emptyNet = buildTransitNetwork({ id: 'empty' }, []);
check('empty POIs produces empty network', emptyNet.routes.length === 0 && emptyNet.stations.length === 0);

const singleNet = buildTransitNetwork({ id: 'single' }, [{ id: 'p1', name: 'Lone Outpost', x: 10, y: 10, type: 'outpost' }]);
check('single POI produces valid station without crashing', singleNet.stations.length === 1 && singleNet.routes.length === 0);

/* ---------------- 8. full realm executions against real MAP_DATA ---------------- */
const realmsToTest = [
  'midlands_full',
  'mushroom_kingdom_full',
  'animatopia_full',
  'kivotos_full',
  'middle_earth_full',
  'pokemon_full',
  'equestria_full',
  'earth_land_full',
  'doughnut_hole_full',
];

for (const mapId of realmsToTest) {
  const map = MAP_DATA[mapId];
  if (!map) continue;
  const net = buildTransitNetwork(map, map.pointsOfInterest || []);
  const sum = net.summary;

  check(`${mapId} builds connected network`, net.routes.length > 0 && net.stations.length > 0,
    `${net.stations.length} stations, ${net.routes.length} routes, ${sum.totalMiles} mi`);

  check(`${mapId} has stations indexed in lookup`, net.stationById.size === net.stations.length);
  check(`${mapId} has routes indexed by station`, net.routesByStation.size === net.stations.length);

  const hasTrainOrRoad = (sum.byMode.train?.count || 0) + (sum.byMode.road?.count || 0) > 0;
  check(`${mapId} includes industrial rail or trade highway arteries`, hasTrainOrRoad,
    JSON.stringify(Object.fromEntries(Object.entries(sum.byMode).map(([k, v]) => [k, v.count]))));

  check(`${mapId} top hub is identified`, !!sum.topHub && sum.topHub.degree > 0, sum.topHub?.name);
}

/* ---------------- 9. Midlands Network Deep Inspection ---------------- */
const midlandsMap = MAP_DATA.midlands_full;
const midNet = buildTransitNetwork(midlandsMap, midlandsMap.pointsOfInterest);

check('Midlands network has over 50 transit lines', midNet.routes.length >= 50, `${midNet.routes.length} routes`);
check('Midlands network has railway lines connecting major industrial hubs', (midNet.summary.byMode.train?.count || 0) > 10,
  `${midNet.summary.byMode.train?.count} train routes`);
check('Midlands network has maritime shipping lanes', (midNet.summary.byMode.boat?.count || 0) > 0,
  `${midNet.summary.byMode.boat?.count} boat routes`);
check('Midlands network has paved highways', (midNet.summary.byMode.road?.count || 0) > 10,
  `${midNet.summary.byMode.road?.count} road routes`);

/* ---------------- 10. Mushroom Kingdom Deep Inspection ---------------- */
const mkMap = MAP_DATA.mushroom_kingdom_full;
const mkNet = buildTransitNetwork(mkMap, mkMap.pointsOfInterest);
const peachStation = mkNet.stations.find(s => s.name?.includes("Peach's Castle") || s.id === 'poi_mk_castle');
check('Peach Castle is a major transit station', !!peachStation && peachStation.degree >= 3,
  `Peach Castle degree: ${peachStation?.degree}`);

/* ---------------- 11. SVG and HTML Dossier Generation ---------------- */
const svgD = routeSvgD(midNet.routes[0]);
check('routeSvgD generates valid path d string', svgD.startsWith('M ') && (svgD.includes(' L ') || svgD.includes(' Q ')), svgD);

const fullSvg = transitSvg(midNet, midNet.routes[0].id);
check('transitSvg renders SVG layer with routes and nodes',
  fullSvg.includes('<svg class="atlas-v2-transit-layer"') && fullSvg.includes('atlas-v2-transit-hit'),
  `${fullSvg.length} chars of SVG`);

const dossierHtml = transitRouteDossierHtml(midNet.routes[0], midNet);
check('transitRouteDossierHtml renders full route panel',
  dossierHtml.includes('atlas-v2-transit-dossier') && dossierHtml.includes('Freight & Cargo Manifest') && dossierHtml.includes('Connected Terminals'),
  dossierHtml.slice(0, 100));

const overviewHtml = transitNetworkOverviewHtml(midNet);
check('transitNetworkOverviewHtml renders network statistics and mode breakdown',
  overviewHtml.includes('atlas-v2-transit-overview') && overviewHtml.includes('Transit Modes Breakdown'),
  overviewHtml.slice(0, 100));

const stationHtml = stationTransitDetailHtml(midNet.stations[0], midNet);
check('stationTransitDetailHtml renders connected lines for POI',
  stationHtml.includes('TRANSIT HUB & CONNECTIONS') && stationHtml.includes('atlas-v2-poi-transit-line'),
  stationHtml.slice(0, 100));

/* ---------------- 12. Determinism test ---------------- */
const netRun1 = buildTransitNetwork(midlandsMap, midlandsMap.pointsOfInterest);
const netRun2 = buildTransitNetwork(midlandsMap, midlandsMap.pointsOfInterest);
check('transit network generation is deterministic',
  netRun1.routes.length === netRun2.routes.length &&
  netRun1.summary.totalMiles === netRun2.summary.totalMiles &&
  netRun1.routes[0].id === netRun2.routes[0].id);

/* ---- filed routes -> engine network, waypoints, air ---- */
check('air mode is a typed line with an airship speed', TRANSIT_MODES.air && TRANSIT_MODES.air.icon === '🎈' && TRANSIT_MODES.air.speedMph > TRANSIT_MODES.boat.speedMph);
check('route vocabulary maps both ways', Object.entries(ROUTE_MODE_ALIAS).every(([k, v]) => TRANSIT_MODES[v] && TRANSIT_MODE_TO_ROUTE[v] === k));
check('a two-point path is a straight line', waypointPathD([{ x: 0, y: 0 }, { x: 10, y: 10 }]) === 'M 0.00,0.00 L 10.00,10.00');
{
  const d = waypointPathD([{ x: 0, y: 0 }, { x: 10, y: 20 }, { x: 30, y: 20 }]);
  check('a waypoint path runs through every filed waypoint', d.startsWith('M 0.00,0.00') && d.includes('10.00,20.00') && d.trim().endsWith('30.00,20.00') && (d.match(/C /g) || []).length === 2, d);
  check('invalid waypoints are dropped, not drawn to NaN', !/NaN/.test(waypointPathD([{ x: 1, y: 1 }, { x: 'x', y: 2 }, { x: 5, y: 5 }])));
}
{
  const mk = MAP_DATA.mushroom_kingdom_full;
  const a = mk.pointsOfInterest[0], b = mk.pointsOfInterest[1];
  const net = networkFromRoutes(mk, mk.pointsOfInterest, [
    { id: 'r1', from: a.id, to: b.id, mode: 'rail', status: 'closed', capacity: 3, via: [{ x: 50, y: 50 }], name: 'Test Express' },
    { id: 'r2', from: a.id, to: 'missing', mode: 'road' },
  ], { statusOf: r => r.status });
  check('filed routes become engine routes; dangling ones are dropped', net.routes.length === 1 && net.routes[0].id === 'r1');
  check('the filed mode, name, status and capacity are kept', net.routes[0].mode === 'train' && net.routes[0].name === 'Test Express' && net.routes[0].status === 'closed' && net.routes[0].capacity === 3);
  check('the engine adds distance, time and freight to a filed route', net.routes[0].distanceMiles > 0 && !!net.routes[0].travelTime && !!net.routes[0].freight);
  check('a filed via drives the drawn path', routeSvgD(net.routes[0]).includes(' C '));
  const dossier = transitRouteDossierHtml(net.routes[0], net);
  check('the dossier shows status and capacity', /Closed/.test(dossier) && /Heavy/.test(dossier));
  check('stations carry a role', net.stations.every(st => st.stationRole));
}

console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
