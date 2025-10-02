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
  { id: 'ruined_city', label: 'Ruined City', x: 1650, y: 350, episode: 35 },
  { id: 'flooded_tunnel', label: 'Flooded Tunnel', x: 1850, y: 300, episode: 37 },
  { id: 'monolith_bluff', label: 'Monolith Bluff', x: 2000, y: 350, episode: 37 },
  { id: 'ambushed_village', label: 'Ambushed Village', x: 2150, y: 300, episode: 37 },
  { id: 'golden_cave', label: 'Golden Cave System', x: 2350, y: 350, episode: 38 },
  { id: 'waterfront_city', label: 'Waterfront City', x: 2550, y: 300, episode: 41 },
  { id: 'jungle_outpost', label: 'Jungle Outpost', x: 2750, y: 350, episode: 42 },
  { id: 'skeletal_bridge', label: 'Skeletal Bridge', x: 2850, y: 325, episode: 52 },
  { id: 'sids_town', label: "Sid's Town", x: 2950, y: 300, episode: 47 },
  { id: 'raid_cave', label: "Raid Cave", x: 3050, y: 350, episode: 53 },
  { id: 'flotilla_shore', label: "Flotilla Shore", x: 3150, y: 300, episode: 53 },
  { id: 'four_towns', label: "The Four Towns", x: 3250, y: 350, episode: 55 },
  { id: 'red_brick_courtyard', label: "Courtyard", x: 3350, y: 300, episode: 56 },
  { id: 'tank_crash_site', label: 'Tank Crash Site', x: 3450, y: 350, episode: 57 },
  { id: 'overpass_crash_site', label: 'Overpass Crash Site', x: 3550, y: 300, episode: 59 },
  { id: 'crater_town', label: 'Crater Town', x: 3650, y: 350, episode: 59 },
  { id: 'canadian_border', label: 'Canadian Border', x: 3800, y: 300, episode: 61 },
  { id: 'black_wall', label: 'The Great Wall', x: 3950, y: 350, episode: 64 },
  { id: 'frozen_wilderness', label: 'Frozen Wilderness', x: 3950, y: 150, episode: 66 },
  { id: 'the_mad_ship', label: 'The Mad Ship', x: 4100, y: 150, episode: 67 },
  { id: 'ss_titanic', label: 'S.S. Titanic', x: 4250, y: 150, episode: 68 },
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
  { from: 'secret_facility_location', to: 'ruined_city' },
  { from: 'ruined_city', to: 'flooded_tunnel' },
  { from: 'flooded_tunnel', to: 'monolith_bluff' },
  { from: 'monolith_bluff', to: 'ambushed_village' },
  { from: 'ambushed_village', to: 'golden_cave' },
  { from: 'golden_cave', to: 'waterfront_city' },
  { from: 'waterfront_city', to: 'jungle_outpost' },
  { from: 'jungle_outpost', to: 'skeletal_bridge' },
  { from: 'skeletal_bridge', to: 'sids_town' },
  { from: 'sids_town', to: 'raid_cave' },
  { from: 'raid_cave', to: 'flotilla_shore' },
  { from: 'flotilla_shore', to: 'four_towns' },
  { from: 'four_towns', to: 'red_brick_courtyard' },
  { from: 'red_brick_courtyard', to: 'tank_crash_site' },
  { from: 'tank_crash_site', to: 'overpass_crash_site' },
  { from: 'overpass_crash_site', to: 'crater_town' },
  { from: 'crater_town', to: 'canadian_border' },
  { from: 'canadian_border', to: 'black_wall' },
  { from: 'black_wall', to: 'frozen_wilderness' },
  { from: 'frozen_wilderness', to: 'the_mad_ship' },
  { from: 'the_mad_ship', to: 'ss_titanic' },
];