#!/usr/bin/env node
/*
 * Check the data contract used by the tactical map and atlas route layer.
 * This intentionally imports the live map catalogue instead of maintaining a
 * second list of POIs. Run from the repository root:
 *
 *   node tools/check-map-integrity.mjs
 *   node tools/check-map-integrity.mjs --map mushroom_kingdom_full
 */
import { readFile } from 'node:fs/promises';
import { MAP_DATA } from '../Reputation-Matrix2/data/maps/map-data.js';
import { buildTransportForMap } from '../Reputation-Matrix2/data/maps/map-routes.js';

const args = process.argv.slice(2);
const wanted = args.includes('--map') ? args[args.indexOf('--map') + 1] : '';
const allMaps = args.includes('--all');
const locations = JSON.parse(await readFile(new URL('../Reputation-Matrix2/data/locations.json', import.meta.url), 'utf8'));
const locationIds = new Set((Array.isArray(locations) ? locations : Object.values(locations || {})).flatMap(row => row ? [row.id, ...(Array.isArray(row.aliases) ? row.aliases : [])] : []).filter(Boolean));
const maps = Object.values(MAP_DATA).filter(map => {
    if (wanted) return map.id === wanted;
    if (allMaps) return true;
    return map.group === 'Mushroom Kingdom Regions';
});
const errors = [];
const warnings = [];

if (wanted && !MAP_DATA[wanted]) errors.push(`unknown map id: ${wanted}`);

function error(message) { errors.push(message); }
function warning(message) { warnings.push(message); }
function reviewIssue(message, strict = false) { (strict || allMaps === false) ? error(message) : warning(message); }
function numeric(value) { return Number.isFinite(Number(value)); }
function articleIds(poi) {
    const value = poi && (poi.articleId || poi.locationId);
    return value ? (Array.isArray(value) ? value : [value]) : [];
}

for (const map of maps) {
    const pois = Array.isArray(map.pointsOfInterest) ? map.pointsOfInterest : [];
    const ids = new Set();
    if (!map.id || !map.name || !map.imageSrc) error(`${map.id || '<unnamed map>'}: missing map identity/image`);
    for (const poi of pois) {
        const prefix = `${map.id}:${poi && poi.id || '<unnamed poi>'}`;
        if (!poi || typeof poi !== 'object') { error(`${prefix}: POI is not an object`); continue; }
        if (!poi.id) error(`${prefix}: missing id`);
        if (poi.id && ids.has(poi.id)) reviewIssue(`${prefix}: duplicate id on this sheet`);
        ids.add(poi.id);
        for (const key of ['name', 'type', 'factionId']) if (!poi[key]) error(`${prefix}: missing ${key}`);
        for (const key of ['x', 'y']) {
            if (!numeric(poi[key])) error(`${prefix}: ${key} is not numeric`);
            else if (Number(poi[key]) < 0 || Number(poi[key]) > 100) error(`${prefix}: ${key} is outside 0..100`);
        }
        for (const key of ['political_influence', 'economic_value', 'military_strength', 'population']) {
            if (!numeric(poi[key])) reviewIssue(`${prefix}: ${key} is not numeric`);
            else if (Number(poi[key]) < 0) error(`${prefix}: ${key} is negative`);
        }
        const req = poi.intelReq;
        if (req && typeof req === 'object' && !numeric(req.level)) error(`${prefix}: intelReq.level is not numeric`);
        if (req !== undefined && req !== null && req !== '' && typeof req !== 'object' && !numeric(req)) error(`${prefix}: intelReq is not numeric`);
        for (const articleId of articleIds(poi)) {
            if (!locationIds.has(articleId)) error(`${prefix}: dangling location articleId ${articleId}`);
        }
    }

    const network = buildTransportForMap(map);
    if (network.routes.length > 24) error(`${map.id}: transport network exceeded the 24-route safety cap`);
    for (const route of network.routes) {
        if (!ids.has(route.from) || !ids.has(route.to)) error(`${map.id}: route ${route.id} has a missing endpoint`);
        if (!['rail', 'road', 'trail', 'boat'].includes(route.mode)) error(`${map.id}: route ${route.id} has invalid mode ${route.mode}`);
        if (!numeric(route.distance) || route.distance <= 0) error(`${map.id}: route ${route.id} has invalid distance`);
    }
    if (network.routes.length && network.routes.length !== buildTransportForMap(map).routes.length) {
        error(`${map.id}: transport network is not deterministic`);
    }
}

const full = MAP_DATA.mushroom_kingdom_full;
if (full && full.pointsOfInterest.some(poi => String(poi && poi.id || '').startsWith('poi_nbc_'))) {
    error('mushroom_kingdom_full: Neo Bowser City pins leaked into the Mushroom Kingdom overview');
}
if (full && full.pointsOfInterest.some(poi => String(poi && poi.id || '').startsWith('poi_iio_'))) {
    error('mushroom_kingdom_full: Ice Ice Outpost pins leaked into the Mushroom Kingdom overview');
}
for (const id of ['poi_si_overgrown_cottage', 'poi_bv_forgotten_cove']) {
    if (full && full.pointsOfInterest.some(poi => poi && poi.id === id)) {
        error(`mushroom_kingdom_full: outer-realm POI ${id} leaked into the Mushroom Kingdom overview`);
    }
}
const raventree = maps.find(map => map.id === 'midlands_full')?.pointsOfInterest.find(poi => poi.articleId === 'raventree_manor');
if (raventree && raventree.name !== 'Raventree Manor') warning('midlands_full: Raventree article pin has an unexpected name');

for (const message of warnings) console.warn(`WARN ${message}`);
if (errors.length) {
    for (const message of errors) console.error(`ERROR ${message}`);
    console.error(`Map integrity: ${errors.length} error(s), ${warnings.length} warning(s)`);
    process.exit(1);
}
console.log(`Map integrity: ${maps.length} map(s), ${maps.reduce((n, map) => n + (map.pointsOfInterest || []).length, 0)} POI row(s), ${warnings.length} warning(s)`);
