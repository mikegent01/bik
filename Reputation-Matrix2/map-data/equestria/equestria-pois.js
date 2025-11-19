
// map-data/equestria-pois.js
import { cenerlotData } from './equestria/Cenerlot.js';
import { mountEverhoofData } from './equestria/MountEverhoof.js';

export const equestriaData = {
    pointsOfInterest: [
        ...(cenerlotData.pointsOfInterest || []),
        ...(mountEverhoofData.pointsOfInterest || [])
    ],
    fogOfWar: [
    ]
};
