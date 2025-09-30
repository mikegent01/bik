// map-data/internet-pois.js
import { borderPois } from './internet/border.js';
import { surfaceWebPois } from './internet/surface-web.js';
import { deviantWebPois } from './internet/deviant-web.js';
import { criminalWebPois } from './internet/criminal-web.js';
import { deepWebPois } from './internet/deep-web.js';
import { seaOfArchivesPois } from './internet/sea-of-archives.js';
import { capitolPois } from './internet/capitol.js';
import { bigTechPois } from './internet/big-tech.js';
import { appleIslandPois } from './internet/apple-island.js';
import { intelCorpPois } from './internet/intel-corp.js';
import { wastefillPois } from './internet/wastefill.js';


export const internetData = {
    pointsOfInterest: [
        ...borderPois,
        ...surfaceWebPois,
        ...deviantWebPois,
        ...criminalWebPois,
        ...deepWebPois,
        ...seaOfArchivesPois,
        ...capitolPois,
        ...bigTechPois,
        ...appleIslandPois,
        ...intelCorpPois,
        ...wastefillPois,
    ],
    fogOfWar: []
};