// map-data/warhammer-pois.js
import { theEmpirePois } from './warhammer/the_empire.js';
import { worldsEdgeMountainsPois } from './warhammer/worlds_edge_mountains.js';
import { sylvaniaPois } from './warhammer/sylvania.js';
import { badlandsPois } from './warhammer/badlands.js';
import { ulthuanPois } from './warhammer/ulthuan.js';
import { naggarothPois } from './warhammer/naggaroth.js';
import { lustriaPois } from './warhammer/lustria.js';
import { landOfTheDeadPois } from './warhammer/land_of_the_dead.js';
import { arabyPois } from './warhammer/araby.js';
import { southlandsPois } from './warhammer/southlands.js';
import { bretonniaPois } from './warhammer/bretonnia.js';
import { darklandsPois } from './warhammer/darklands.js';
import { ancientGiantLandPois } from './warhammer/ancient_giant_land.js';
import { grandCathayPois } from './warhammer/grand_cathay.js';
import { easternSteppesPois } from './warhammer/eastern_steppes.js';
import { greatBastionPois } from './warhammer/great_bastion.js';


export const warhammerData = {
    pointsOfInterest: [
        ...theEmpirePois,
        ...worldsEdgeMountainsPois,
        ...sylvaniaPois,
        ...badlandsPois,
        ...ulthuanPois,
        ...naggarothPois,
        ...lustriaPois,
        ...landOfTheDeadPois,
        ...arabyPois,
        ...southlandsPois,
        ...bretonniaPois,
        ...darklandsPois,
        ...ancientGiantLandPois,
        ...grandCathayPois,
        ...easternSteppesPois,
        ...greatBastionPois
    ],
    fogOfWar: []
};