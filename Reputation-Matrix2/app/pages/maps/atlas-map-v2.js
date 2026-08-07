// Atlas Map v2 — standalone, modular map mounted directly by the Waluipedia Atlas.
import { MAP_DATA } from '../../../data/maps/map-data.js';
import { getFaction, getFactionColor } from '../../../systems/faction-registry.js';

const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const format = value => Math.round(value || 0).toLocaleString();

function model(mapId) {
  const map = MAP_DATA[mapId];
  if (!map) return null;
  const pois = map.pointsOfInterest || [];
  return { map, pois, population: pois.reduce((n, poi) => n + (Number(poi.population) || 0), 0) };
}
function marker(poi) {
  const faction = getFaction(poi.factionId);
  const color = getFactionColor(poi.factionId) || '#7c8aa5';
  return `<button class="atlas-v2-marker" data-poi="${esc(poi.id)}" style="left:${poi.x || 0}%;top:${poi.y || 0}%;--marker:${esc(color)}" title="${esc(poi.name)}"><span>${faction?.icon || '●'}</span></button>`;
}
function detail(poi) {
  if (!poi) return `<div class="atlas-v2-empty"><span>◎</span><b>Select a location</b><p>Choose a marker to inspect its population, influence, and controlling faction.</p></div>`;
  const faction = getFaction(poi.factionId);
  return `<article class="atlas-v2-detail"><span class="atlas-v2-kicker">${esc(poi.type || 'location')}</span><h3>${esc(poi.name)}</h3><p>${esc(poi.description || 'No field report filed.')}</p><div class="atlas-v2-faction"><i style="background:${esc(getFactionColor(poi.factionId) || '#7c8aa5')}"></i>${esc(faction?.name || poi.factionId || 'Unaligned')}</div><dl><div><dt>Population</dt><dd>${format(poi.population)}</dd></div><div><dt>Military</dt><dd>${format(poi.military_strength)}</dd></div><div><dt>Economy</dt><dd>${format(poi.economic_value)}</dd></div><div><dt>Influence</dt><dd>${format(poi.political_influence)}</dd></div></dl></article>`;
}
function render(host, mapId) {
  const data = model(mapId);
  if (!data) { host.innerHTML = '<div class="atlas-v2-error">This map record is unavailable.</div>'; return; }
  const { map, pois, population } = data;
  host.innerHTML = `<section class="atlas-v2" aria-label="${esc(map.name)} tactical map"><header><div><span class="atlas-v2-eyebrow">WORLD ATLAS · LIVE MAP</span><h2>${esc((map.name || map.id).replace(' (Full)', ''))}</h2><p>${pois.length} surveyed locations · ${format(population)} mapped residents</p></div><div class="atlas-v2-actions"><button data-action="fit">Reset view</button><button data-action="labels">Labels</button></div></header><div class="atlas-v2-layout"><main class="atlas-v2-stage"><div class="atlas-v2-image"><img src="${new URL(`../../../${map.imageSrc}`, import.meta.url).href}" alt="${esc(map.name)} map"> <div class="atlas-v2-markers">${pois.map(marker).join('')}</div></div><div class="atlas-v2-legend"><span><i></i>POI markers</span><span>${esc(map.group || 'Unclassified')}</span></div></main><aside class="atlas-v2-sidebar">${detail(null)}</aside></div></section>`;
  const sidebar = host.querySelector('.atlas-v2-sidebar');
  host.querySelectorAll('[data-poi]').forEach(button => button.addEventListener('click', () => {
    host.querySelectorAll('[data-poi]').forEach(item => item.classList.toggle('selected', item === button));
    sidebar.innerHTML = detail(pois.find(poi => poi.id === button.dataset.poi));
  }));
  host.querySelector('[data-action="labels"]').addEventListener('click', event => { host.classList.toggle('atlas-v2-labels'); event.currentTarget.classList.toggle('active'); });
  host.querySelector('[data-action="fit"]').addEventListener('click', () => { host.querySelectorAll('[data-poi]').forEach(item => item.classList.remove('selected')); sidebar.innerHTML = detail(null); });
}
export function mountAtlasMapV2(host, mapId) { render(host, mapId); }
