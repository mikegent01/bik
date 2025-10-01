import { BackroomsLocationNode, BackroomsConnection } from './types';

export const FACILITY_MAP_DATA: BackroomsLocationNode[] = [
  { id: 'facility_entrance', label: 'Entrance', x: 100, y: 200, episode: 34 },
  { id: 'facility_hallway', label: 'Main Hallway', x: 250, y: 200, episode: 34 },
  { id: 'facility_computer_room', label: 'Computer Room', x: 400, y: 100, episode: 34 },
  { id: 'facility_storage', label: 'Storage Room', x: 400, y: 300, episode: 34 },
];

export const FACILITY_CONNECTIONS_DATA: BackroomsConnection[] = [
  { from: 'facility_entrance', to: 'facility_hallway' },
  { from: 'facility_hallway', to: 'facility_computer_room' },
  { from: 'facility_hallway', to: 'facility_storage' },
];
