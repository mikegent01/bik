
// map-data/equestria-pois.js
import { cenerlotData } from './equestria/Cenerlot.js';
import { mountEverhoofData } from './equestria/MountEverhoof.js';
import { hailbregData } from './equestria/Hailbreg.js';
import { wanderingWoodsData } from './equestria/WanderingWoods.js';
import { jackalopeSlopesData } from './equestria/JackalopeSlopes.js';
import { siresHollowData } from './equestria/SiresHollow.js';
import { farasiData } from './equestria/Farasi.js';
import { zebrabweData } from './equestria/Zebrabwe.js';
import { saddleArabiaData } from './equestria/SaddleArabia.js';

export const equestriaData = {
    pointsOfInterest: [
        ...(cenerlotData.pointsOfInterest || []),
        ...(mountEverhoofData.pointsOfInterest || []),
        ...(hailbregData.pointsOfInterest || []),
        ...(wanderingWoodsData.pointsOfInterest || []),
        ...(jackalopeSlopesData.pointsOfInterest || []),
        ...(siresHollowData.pointsOfInterest || []),
        ...(farasiData.pointsOfInterest || []),
        ...(zebrabweData.pointsOfInterest || []),
        ...(saddleArabiaData.pointsOfInterest || [])
    ],

};
