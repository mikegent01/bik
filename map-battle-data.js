// This file aggregates all battle data from modular files to provide a complete tactical overview.

import { BASE_BATTLE_DATA } from './map-battle-data-base.js';
import { MUSHROOM_KINGDOM_TROOPS } from './map-battle-data-mk.js';
import { MIDLANDS_TROOPS } from './map-battle-data-midlands.js';
import { WIDESPREAD_TROOPS } from './map-battle-data-widespread.js';
import { MIDDLE_EARTH_TROOPS } from './map-battle-data-middle-earth.js';
import { INTERNET_TROOPS } from './map-battle-data-internet.js';
import { WARHAMMER_TROOPS } from './map-battle-data-warhammer.js';
import { KIVOTOS_TROOPS } from './map-battle-data-kivotos.js';
import { POKEMON_TROOPS } from './map-battle-data-pokemon.js';

export const BATTLE_MAP_DATA = {
    // Front lines and the Vigilance journey are defined in the base file.
    front_lines: BASE_BATTLE_DATA.front_lines,
    vigilance_journey: BASE_BATTLE_DATA.vigilance_journey,

    // Troop deployments are a combination of the base data and all new regional data.
    troop_deployments: [
        ...BASE_BATTLE_DATA.troop_deployments,
        ...MUSHROOM_KINGDOM_TROOPS,
        ...MIDLANDS_TROOPS,
        ...WIDESPREAD_TROOPS,
        ...MIDDLE_EARTH_TROOPS,
        ...INTERNET_TROOPS,
        ...WARHAMMER_TROOPS,
        ...KIVOTOS_TROOPS,
        ...POKEMON_TROOPS,
    ]
};