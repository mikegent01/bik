import { BackroomsLocationNode, BackroomsConnection } from './types';

// Outside world journey (post-Backrooms escape)
export const OUTSIDE_WORLD_MAP_DATA: BackroomsLocationNode[] = [
  // Season 1
  { id: 'castle', label: 'Warzone Ruins (Castle)', x: 150, y: 250, episode: 32 },
  { id: 'church', label: 'Church', x: 380, y: 240, episode: 32 },
  { id: 'sky_highway', label: 'Sky Highway', x: 640, y: 200, episode: 32 },
  { id: 'target_village', label: 'Target Village', x: 900, y: 220, episode: 32 },
  // Season 2
  { id: 'snowy_city', label: 'Snowy City', x: 1150, y: 180, episode: 33 },
  { id: 'the_crater', label: 'The Crater', x: 1150, y: 350, episode: 34 },
  { id: 'secret_facility_location', label: 'Secret Facility', x: 1400, y: 350, episode: 34 },
];

export const OUTSIDE_WORLD_CONNECTIONS_DATA: BackroomsConnection[] = [
  // Season 1
  { from: 'castle', to: 'church' },
  { from: 'church', to: 'sky_highway' },
  { from: 'sky_highway', to: 'target_village' },
  // Transition to Season 2
  { from: 'target_village', to: 'snowy_city' },
  // Season 2
  { from: 'snowy_city', to: 'the_crater' },
  { from: 'the_crater', to: 'secret_facility_location' },
];