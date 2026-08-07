// Demographic summary for the unified tactical-map and atlas views.
// Estimates use each map's POI population and its configured regional species mix.

import { MAP_DATA } from '../../../data/maps/map-data.js';
import { REGIONAL_DEMOGRAPHICS, SPECIES_DATA } from '../../../data/support/species-data.js';
import { getFactionColor, getFaction } from '../../../systems/faction-registry.js';

const FALLBACK_COLOR = '#718096';

function formatPopulation(value) {
    return Math.round(value).toLocaleString();
}

function topEntries(values, limit = 6) {
    const entries = Object.entries(values).filter(([, value]) => value > 0)
        .sort(([, left], [, right]) => right - left);
    if (entries.length <= limit) return entries;
    const visible = entries.slice(0, limit);
    const other = entries.slice(limit).reduce((sum, [, value]) => sum + value, 0);
    return other ? [...visible, ['other', other]] : visible;
}

function pie(entries, total, colorFor) {
    if (!total || !entries.length) return '<div class="demographic-empty">No population records.</div>';
    let cursor = 0;
    const stops = entries.map(([key, value]) => {
        const start = cursor;
        cursor += (value / total) * 100;
        return `${colorFor(key)} ${start.toFixed(2)}% ${cursor.toFixed(2)}%`;
    });
    return `<div class="demographic-pie" style="background:conic-gradient(${stops.join(', ')})" aria-label="Population distribution chart"></div>`;
}

function legend(entries, total, labelFor, colorFor) {
    return `<ul class="demographic-legend">${entries.map(([key, value]) => `
        <li><span class="demographic-swatch" style="background:${colorFor(key)}"></span>
        <span title="${labelFor(key)}">${labelFor(key)}</span><b>${((value / total) * 100).toFixed(1)}%</b></li>`).join('')}</ul>`;
}

/** Render species and political population estimates for the selected world map. */
export function renderMapDemographics(mapId) {
    const container = document.getElementById('map-demographics-panel');
    const map = MAP_DATA[mapId];
    if (!container || !map) return;

    const totalPopulation = (map.pointsOfInterest || []).reduce((sum, poi) => sum + (Number(poi.population) || 0), 0);
    const regionalMix = REGIONAL_DEMOGRAPHICS[map.group] || { dnd_human: 1 };
    const species = {};
    const factions = {};

    // Some legacy regional profiles are incomplete; normalize their declared
    // shares so every mapped resident is represented in the chart.
    const mixTotal = Object.values(regionalMix).reduce((sum, share) => sum + share, 0) || 1;
    Object.entries(regionalMix).forEach(([speciesId, share]) => {
        species[speciesId] = totalPopulation * (share / mixTotal);
    });
    (map.pointsOfInterest || []).forEach(poi => {
        const population = Number(poi.population) || 0;
        factions[poi.factionId || 'unaligned'] = (factions[poi.factionId || 'unaligned'] || 0) + population;
    });

    const speciesEntries = topEntries(species);
    const factionEntries = topEntries(factions);
    const speciesName = id => id === 'other' ? 'Other species' : (SPECIES_DATA[id]?.name || id);
    const speciesColor = id => id === 'other' ? FALLBACK_COLOR : (SPECIES_DATA[id]?.color || FALLBACK_COLOR);
    const factionName = id => id === 'other' ? 'Other nations' : (getFaction(id)?.name || (id === 'unaligned' ? 'Unaligned' : id));
    const factionColor = id => id === 'other' ? FALLBACK_COLOR : getFactionColor(id);

    container.innerHTML = `
        <section class="map-demographics" aria-label="Map demographics">
            <div class="demographic-heading"><span>👥 Demographics</span><b>${formatPopulation(totalPopulation)}</b></div>
            <p class="demographic-note">Estimated residents from mapped POIs · ${map.group || 'Unclassified region'}</p>
            <div class="demographic-chart-row">
                ${pie(speciesEntries, totalPopulation, speciesColor)}
                <div><h4>Species share</h4>${legend(speciesEntries, totalPopulation, speciesName, speciesColor)}</div>
            </div>
            <div class="demographic-chart-row">
                ${pie(factionEntries, totalPopulation, factionColor)}
                <div><h4>Nation / faction share</h4>${legend(factionEntries, totalPopulation, factionName, factionColor)}</div>
            </div>
        </section>`;
}
