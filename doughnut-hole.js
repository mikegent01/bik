// map-data/doughnut-hole.js
import { jestersPlaygroundPois } from './doughnut-hole/jesters_playground.js';
import { causalityChainPois } from './doughnut-hole/causality_chain.js';
import { driftersDebrisFieldPois } from './doughnut-hole/drifters_debris_field.js';
import { weaversTapestryPois } from './doughnut-hole/weavers_tapestry.js';
import { outerAnomalyPois } from './doughnut-hole/outer_anomaly.js';


export const doughnutHoleData = {
    pointsOfInterest: [
        ...jestersPlaygroundPois,
        ...causalityChainPois,
        ...driftersDebrisFieldPois,
        ...weaversTapestryPois,
        ...outerAnomalyPois,
    ],
    fogOfWar: []
};