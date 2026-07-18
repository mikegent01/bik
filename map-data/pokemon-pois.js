// map-data/pokemon-pois.js
import { unovaPois } from './pokemon/unova.js';
import { oorePois } from './pokemon/oore.js';
import { kalosPois } from './pokemon/kalos.js';
import { johtoPois } from './pokemon/johto.js';
import { kantoPois } from './pokemon/kanto.js';
import { hoennPois } from './pokemon/hoenn.js';
import { paldeaPois } from './pokemon/paldea.js';
import { fiorePois } from './pokemon/fiore.js';
import { almiaPois } from './pokemon/almia.js';
import { mountainSavanaPois } from './pokemon/mountain_savana.js';

export const pokemonData = {
    pointsOfInterest: [
        ...unovaPois,
        ...oorePois,
        ...kalosPois,
        ...johtoPois,
        ...kantoPois,
        ...hoennPois,
        ...paldeaPois,
        ...fiorePois,
        ...almiaPois,
        ...mountainSavanaPois,
    ]
};