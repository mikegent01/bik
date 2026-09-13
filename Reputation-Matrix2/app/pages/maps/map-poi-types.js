// map-poi-types.js — what colour is a dot?
//
// The atlas draws one plain dot per filed location. A dot has no room for a
// glyph, a logo or a label, so the ONLY thing it can carry is colour, and
// colour therefore has to mean the one thing a reader wants at a glance: what
// kind of place is that?
//
// 90 distinct `type` values are filed across the sheets — far too many to tell
// apart by hue. So types are sorted into a handful of families with colours a
// reader can actually name and remember. Anything unfiled falls through to a
// neutral grey rather than inventing a colour, because a made-up hue that
// looks meaningful is worse than one that obviously is not.
//
// Pure functions, zero imports, zero DOM, so node tests load this directly:
//   node tools/tests/test-map-poi-types.mjs

/* Families are ordered: the legend reads in this order, and `FAMILY_ORDER`
   doubles as the tie-break when two families are equally represented. */
export const POI_FAMILIES = [
  { key: 'settlement', label: 'Settlements', color: '#ffd166' },
  { key: 'military',   label: 'Military',    color: '#f87171' },
  { key: 'economic',   label: 'Trade & industry', color: '#fbbf24' },
  { key: 'arcane',     label: 'Arcane',      color: '#a78bfa' },
  { key: 'sacred',     label: 'Sacred',      color: '#f0abfc' },
  { key: 'learning',   label: 'Knowledge',   color: '#38bdf8' },
  { key: 'ruin',       label: 'Ruins & danger', color: '#b45309' },
  { key: 'nature',     label: 'Natural',     color: '#4ade80' },
  { key: 'cosmic',     label: 'Cosmic',      color: '#c4b5fd' },
  { key: 'civic',      label: 'Civic',       color: '#5eead4' },
  { key: 'other',      label: 'Other',       color: '#94a3b8' },
];

const FAMILY_BY_KEY = POI_FAMILIES.reduce((acc, f) => (acc[f.key] = f, acc), {});

/* Every filed type, mapped to its family. Types absent here resolve to
   'other' — the map still draws them, honestly greyed. */
const TYPE_FAMILY = {
  // Settlements
  capital_city: 'settlement', major_city: 'settlement', town: 'settlement',
  village: 'settlement', hamlet: 'settlement', district: 'settlement',
  palace: 'settlement', camp: 'settlement',

  // Military
  fortress: 'military', castle: 'military', barracks: 'military',
  watchtower: 'military', tower: 'military', outpost: 'military',
  siege_camp: 'military', battlefield: 'military', training_grounds: 'military',
  bandit_camp: 'military', ambush: 'military', hideout: 'military',
  listening_post: 'military', restricted_area: 'military', arena: 'military',

  // Trade & industry
  port: 'economic', market: 'economic', trade_post: 'economic',
  workshop: 'economic', mine: 'economic', quarry: 'economic',
  farm: 'economic', resource: 'economic', guild_hall: 'economic',
  inn: 'economic', tavern: 'economic', stable: 'economic',
  vault: 'economic', entertainment: 'economic', festival_grounds: 'economic',

  // Arcane
  mages_tower: 'arcane', ley_line: 'arcane', portal: 'arcane',
  ancient_circle: 'arcane', oracle: 'arcane', observatory: 'arcane',

  // Sacred
  temple: 'sacred', shrine: 'sacred', monastery: 'sacred',
  sanctuary: 'sacred', sacred_grove: 'sacred', garden: 'sacred',

  // Knowledge
  library: 'learning', academy: 'learning', school: 'learning',
  archive: 'learning', museum: 'learning',

  // Ruins & danger
  ruins: 'ruin', lair: 'ruin', dungeon_entrance: 'ruin',
  haunted_place: 'ruin', graveyard: 'ruin', cemetery: 'ruin',
  prison: 'ruin', shipwreck: 'ruin',

  // Natural
  forest: 'nature', mountain_pass: 'nature', cave_entrance: 'nature',
  oasis: 'nature', waterfall: 'nature', river: 'nature', ford: 'nature',
  swamp: 'nature', volcano: 'nature', bridge: 'nature',
  natural_wonder: 'nature', landmark: 'nature', monument: 'nature',

  // Cosmic
  cosmic_anomaly: 'cosmic', nebula: 'cosmic', comet: 'cosmic',
  space_station: 'cosmic', asteroid_field: 'cosmic', crystal_entity: 'cosmic',
  black_hole: 'cosmic', wormhole: 'cosmic', star_nursery: 'cosmic',
  generation_ship: 'cosmic',

  // Civic
  government: 'civic', civic_building: 'civic', embassy: 'civic',
  hospital: 'civic',
};

/* The family a POI belongs to. Always returns a family — never null, so the
   renderer never has to guard. */
export function familyOf(poi) {
  const type = poi && typeof poi === 'object' ? poi.type : poi;
  const key = TYPE_FAMILY[String(type || '').toLowerCase()];
  return FAMILY_BY_KEY[key] || FAMILY_BY_KEY.other;
}

/* The dot colour for a POI. */
export function typeColor(poi) {
  return familyOf(poi).color;
}

/* Human label for a raw filed type: 'mages_tower' -> "Mage's Tower" is beyond
   us, but 'Mages Tower' is honest and needs no lookup table. */
export function typeLabel(type) {
  return String(type || 'location').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

/* Families actually present in a set of pins, in POI_FAMILIES order, with
   counts — so the legend describes THIS sheet rather than the whole schema. */
export function familiesPresent(pois) {
  const counts = new Map();
  (pois || []).forEach(poi => {
    const f = familyOf(poi);
    counts.set(f.key, (counts.get(f.key) || 0) + 1);
  });
  return POI_FAMILIES
    .filter(f => counts.get(f.key))
    .map(f => Object.assign({}, f, { count: counts.get(f.key) }));
}
