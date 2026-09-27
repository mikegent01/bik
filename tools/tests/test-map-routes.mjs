#!/usr/bin/env node
/* Deterministic transport-network checks. */
import { MAP_DATA } from '../../Reputation-Matrix2/data/maps/map-data.js';
import {
  buildTransportForMap,
  buildTransportNetwork,
  industrializationScore,
  inferTransportMode,
  TRANSPORT_MODES,
} from '../../Reputation-Matrix2/data/maps/map-routes.js';

let pass = 0;
let fail = 0;
const ok = (condition, label) => {
  if (condition) { pass += 1; console.log(`  ok   ${label}`); }
  else { fail += 1; console.log(`  FAIL ${label}`); }
};

console.log('transport routes — deterministic builder');
const mk = MAP_DATA.mushroom_kingdom_full;
const network = buildTransportForMap(mk);
const repeat = buildTransportForMap(mk);
ok(network.routes.length > 0 && network.routes.length <= 24, `Mushroom Kingdom network is bounded (${network.routes.length} routes)`);
ok(JSON.stringify(network.routes) === JSON.stringify(repeat.routes), 'same map produces the same routes on every build');
ok(network.routes.every(route => route.from && route.to && TRANSPORT_MODES[route.mode]), 'every route has two endpoints and a known mode');
ok(network.routes.some(route => route.mode === 'rail'), 'industrialized city links can become rail');
ok(network.routes.some(route => route.mode === 'boat'), 'port links can become boat routes');
ok(network.routes.some(route => route.mode === 'road' || route.mode === 'trail'), 'lower-development links remain roads or trails');

const city = { id: 'city', type: 'town', population: 12000, economic_value: 10, x: 10, y: 10 };
const factory = { id: 'factory', type: 'workshop', population: 500, economic_value: 10, x: 18, y: 12 };
const village = { id: 'village', type: 'village', population: 40, economic_value: 1, x: 25, y: 25 };
const portA = { id: 'port_a', type: 'port', population: 200, economic_value: 7, x: 0, y: 0 };
const portB = { id: 'port_b', type: 'port', population: 300, economic_value: 7, x: 20, y: 10 };
ok(industrializationScore(city) > industrializationScore(village), 'industrialization score uses filed economy and population');
ok(inferTransportMode(city, factory) === 'rail', 'two developed industrial hubs infer rail');
ok(inferTransportMode(portA, portB) === 'boat', 'two ports infer boat');
ok(inferTransportMode(village, { ...village, id: 'village_2', x: 30, y: 30 }) === 'trail', 'low-development links infer trail');

const tiny = {
  id: 'tiny',
  pointsOfInterest: [city, factory, village, portA, portB],
};
const custom = buildTransportNetwork(tiny, { links: [{ id: 'filed_boat', from: 'port_a', to: 'port_b', mode: 'boat' }] });
ok(custom.routes.length === 1 && custom.routes[0].id === 'filed_boat', 'explicit links remain the authoritative backbone');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
