// map-data/middle-earth-pois.js
import { forlindonData } from './middle-earth/Forlindon.js';
import { eriadorData } from './middle-earth/Eriador.js';
import { haradwaithData } from './middle-earth/Haradwaith.js';
import { umbarData } from './middle-earth/Umbar.js';
import { gondorData } from './middle-earth/Gondor.js';
import { rhovanionData } from './middle-earth/Rhovanion.js';
import { mordorData } from './middle-earth/Mordor.js';
import { minhiriathData } from './middle-earth/Minhiriath.js';


export const middleEarthData = {
    pointsOfInterest: [
        ...forlindonData.pointsOfInterest,
        ...eriadorData.pointsOfInterest,
        ...haradwaithData.pointsOfInterest,
        ...umbarData.pointsOfInterest,
        ...gondorData.pointsOfInterest,
        ...rhovanionData.pointsOfInterest,
        ...mordorData.pointsOfInterest,
        ...minhiriathData.pointsOfInterest,
    ],
    fogOfWar: [
        ...(forlindonData.fogOfWar || []),
        ...(eriadorData.fogOfWar || []),
        ...(haradwaithData.fogOfWar || []),
        ...(umbarData.fogOfWar || []),
        ...(gondorData.fogOfWar || []),
        ...(rhovanionData.fogOfWar || []),
        ...(mordorData.fogOfWar || []),
        ...(minhiriathData.fogOfWar || []),
    ]
};