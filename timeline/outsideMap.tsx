import { BackroomsLocationNode, BackroomsConnection } from './types';

// Outside world journey (post-Backrooms escape)
export const OUTSIDE_WORLD_MAP_DATA: BackroomsLocationNode[] = [
  { id: 'castle', label: 'Warzone Ruins (Castle)', x: 150, y: 250, episode: 32 },
  { id: 'church', label: 'Church', x: 380, y: 240, episode: 32 },
  { id: 'sky_highway', label: 'Sky Highway', x: 640, y: 200, episode: 32 },
  { id: 'target_village', label: 'Target Village', x: 900, y: 220, episode: 32 },
];

export const OUTSIDE_WORLD_CONNECTIONS_DATA: BackroomsConnection[] = [
  { from: 'castle', to: 'church' },
  { from: 'church', to: 'sky_highway' },
  { from: 'sky_highway', to: 'target_village' },
];