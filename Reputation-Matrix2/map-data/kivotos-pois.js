// map-data/kivotos-pois.js
import { kivotosPois } from './kivotos/Kivotos.js';
import { grandLatinPois } from './kivotos/GrandLatin.js';
import { austelarassiaPois } from './kivotos/Austelarassia.js';
import { silbaarstadtPois } from './kivotos/Silbaarstadt.js';
import { alhaoungPois } from './kivotos/AL_haoung.js';
import { northernAureanPolePois } from './kivotos/NorthernAureanPole.js';
import { newCairoPois } from './kivotos/NewCairo.js';
import { newAmericaPois } from './kivotos/NewAmerica.js';
import { southernAureanPolePois } from './kivotos/SouthernAureanPole.js';


export const kivotosData = {
    pointsOfInterest: [
        ...kivotosPois,
        ...grandLatinPois,
        ...austelarassiaPois,
        ...silbaarstadtPois,
        ...alhaoungPois,
        ...northernAureanPolePois,
        ...newCairoPois,
        ...newAmericaPois,
        ...southernAureanPolePois,
    ]
};