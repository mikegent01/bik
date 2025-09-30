// map-data.js

import { BUILDING_TYPES } from './map-data/building-types.js';
import { mushroomKingdomData } from './map-data/mushroom-kingdom-pois.js';
import { mountainEnclaveData } from './map-data/mountain-enclave-pois.js';
import { dryDryDesertData } from './map-data/dry-dry-desert-pois.js';
import { banditsWayData } from './map-data/bandits-way-pois.js';
import { warioWoodsData } from './map-data/wario-woods-pois.js';
import { aridCoastData } from './map-data/arid-coast-pois.js';
import { boosWoodsData } from './map-data/boos-woods-pois.js';
import { theNorthData } from './map-data/the-north-pois.js';
import { mushroomCityData } from './map-data/mushroom-city-pois.js';
import { beanbeanKingdomData } from './map-data/beanbean-kingdom-pois.js';
import { barrelVolcanoData } from './map-data/barrel-volcano-pois.js';
import { sevenKingdomsData } from './map-data/seven-kingdoms-pois.js';
import { sunshineIslesData } from './map-data/sunshine-isles-pois.js';
import { flowerKingdomData } from './map-data/flower-kingdom-pois.js';
import { yoshiDkIslandsData } from './map-data/yoshi-dk-islands-pois.js';
import { waffleChestnutData } from './map-data/waffle-chestnut-pois.js';
import { neoBowserCityData } from './map-data/neo-bowser-city-pois.js';
import { iceIceOutpostData } from './map-data/ice-ice-outpost-pois.js';
import { chramalotKingdomData } from './map-data/chramalot-kingdom-pois.js';
import { piantaSeaData } from './map-data/pianta-sea-pois.js';
import { yaleShoresData } from './map-data/yale-shores-pois.js';
import midlandsData from './map-data/midlands-pois.js';
import { yalBelanorData } from './map-data/yal-belanor-pois.js';
import { vemilliaData } from './map-data/vemillia-pois.js';
import { ironwoodData } from './map-data/ironwood-pois.js';
import { lockerwoodData } from './map-data/lockerwood-pois.js';
import { dragonMountainData } from './map-data/dragon-mountain-pois.js';
import { autumnwoodData } from './map-data/autumnwood-pois.js';
import { dryCountyData } from './map-data/dry-county-pois.js';
import { ludorIslesData } from './map-data/ludor-isles-pois.js';
import { theghduralData } from './map-data/theghdural-pois.js';
import { jungleOfThornsData } from './map-data/jungle-of-thorns-pois.js';
import { baldoraPlainsData } from './map-data/baldora-plains-pois.js';
import { lowerHillsData } from './map-data/lower-hills-pois.js';
import { yalCentralData } from './map-data/yal-central-pois.js';
import { northernLandsData } from './map-data/northern-lands-pois.js';
import { internetData } from './map-data/internet-pois.js';
import { middleEarthData } from './map-data/middle-earth-pois.js';
import { haradwaithData } from './map-data/middle-earth/Haradwaith.js';
import { umbarData } from './map-data/middle-earth/Umbar.js';
import { gondorData } from './map-data/middle-earth/Gondor.js';
import { rhovanionData } from './map-data/middle-earth/Rhovanion.js';
import { mordorData } from './map-data/middle-earth/Mordor.js';
import { warhammerData } from './map-data/warhammer-pois.js';

import { kivotosData as kivotosMainData } from './map-data/kivotos-pois.js';
import { kivotosData as kivotosCentralData } from './map-data/kivotos/Kivotos.js';
import { grandLatinData } from './map-data/kivotos/GrandLatin.js';
import { austelarassiaData } from './map-data/kivotos/Austelarassia.js';
import { silbaarstadtData } from './map-data/kivotos/Silbaarstadt.js';
import { alhaoungData } from './map-data/kivotos/AL_haoung.js';
import { northernAureanPoleData } from './map-data/kivotos/NorthernAureanPole.js';
import { newCairoData } from './map-data/kivotos/NewCairo.js';
import { newAmericaData } from './map-data/kivotos/NewAmerica.js';
import { southernAureanPoleData } from './map-data/kivotos/SouthernAureanPole.js';
import { doughnutHoleData } from './map-data/doughnut-hole.js';
import { jestersPlaygroundPois } from './map-data/doughnut-hole/jesters_playground.js';
import { causalityChainPois } from './map-data/doughnut-hole/causality_chain.js';
import { driftersDebrisFieldPois } from './map-data/doughnut-hole/drifters_debris_field.js';
import { weaversTapestryPois } from './map-data/doughnut-hole/weavers_tapestry.js';
import { outerAnomalyPois } from './map-data/doughnut-hole/outer_anomaly.js';
import { pokemonData } from './map-data/pokemon-pois.js';
import { unovaPois } from './map-data/pokemon/unova.js';
import { oorePois } from './map-data/pokemon/oore.js';
import { hoennPois } from './map-data/pokemon/hoenn.js';
import { kalosPois } from './map-data/pokemon/kalos.js';
import { johtoPois } from './map-data/pokemon/johto.js';
import { kantoPois } from './map-data/pokemon/kanto.js';
import { paldeaPois } from './map-data/pokemon/paldea.js';
import { fiorePois } from './map-data/pokemon/fiore.js';
import { almiaPois } from './map-data/pokemon/almia.js';
import { mountainSavanaPois } from './map-data/pokemon/mountain_savana.js';


// Re-export BUILDING_TYPES so other modules can access it from this central file
export { BUILDING_TYPES };

export const MAP_DATA = {
    mushroom_kingdom_full: {
        id: 'mushroom_kingdom_full',
        name: 'Mushroom Kingdom (Full)',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 1,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: [
            ...mushroomKingdomData.pointsOfInterest,
            ...mountainEnclaveData.pointsOfInterest,
            ...dryDryDesertData.pointsOfInterest,
            ...banditsWayData.pointsOfInterest,
            ...warioWoodsData.pointsOfInterest,
            ...aridCoastData.pointsOfInterest,
            ...boosWoodsData.pointsOfInterest,
            ...theNorthData.pointsOfInterest,
            ...mushroomCityData.pointsOfInterest,
            ...beanbeanKingdomData.pointsOfInterest,
            ...barrelVolcanoData.pointsOfInterest,
            ...sevenKingdomsData.pointsOfInterest,
            ...sunshineIslesData.pointsOfInterest,
            ...flowerKingdomData.pointsOfInterest,
            ...yoshiDkIslandsData.pointsOfInterest,
            ...waffleChestnutData.pointsOfInterest,
            ...neoBowserCityData.pointsOfInterest,
            ...iceIceOutpostData.pointsOfInterest,
            ...chramalotKingdomData.pointsOfInterest,
            ...piantaSeaData.pointsOfInterest,
            ...yaleShoresData.pointsOfInterest,
        ],
        fogOfWar: [
            ...(mushroomKingdomData.fogOfWar || []),
            ...(mountainEnclaveData.fogOfWar || []),
            ...(dryDryDesertData.fogOfWar || []),
            ...(banditsWayData.fogOfWar || []),
            ...(warioWoodsData.fogOfWar || []),
            ...(aridCoastData.fogOfWar || []),
            ...(boosWoodsData.fogOfWar || []),
            ...(theNorthData.fogOfWar || []),
            ...(mushroomCityData.fogOfWar || []),
            ...(beanbeanKingdomData.fogOfWar || []),
            ...(barrelVolcanoData.fogOfWar || []),
            ...(sevenKingdomsData.fogOfWar || []),
            ...(sunshineIslesData.fogOfWar || []),
            ...(flowerKingdomData.fogOfWar || []),
            ...(yoshiDkIslandsData.fogOfWar || []),
            ...(waffleChestnutData.fogOfWar || []),
            ...(neoBowserCityData.fogOfWar || []),
            ...(iceIceOutpostData.fogOfWar || []),
            ...(chramalotKingdomData.fogOfWar || []),
            ...(piantaSeaData.fogOfWar || []),
            ...(yaleShoresData.fogOfWar || []),
        ],
        poiSourceFile: null 
    },
    mushroom_kingdom: {
        id: 'mushroom_kingdom',
        name: 'Mushroom Plains',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 2,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mushroomKingdomData.pointsOfInterest,
        fogOfWar: mushroomKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/mushroom-kingdom-pois.js'
    },
    the_north: {
        id: 'the_north',
        name: 'The North',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 3,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: theNorthData.pointsOfInterest,
        fogOfWar: theNorthData.fogOfWar || [],
        poiSourceFile: 'map-data/the-north-pois.js'
    },
    mushroom_city: {
        id: 'mushroom_city',
        name: 'Mushroom City',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 4,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mushroomCityData.pointsOfInterest,
        fogOfWar: mushroomCityData.fogOfWar || [],
        poiSourceFile: 'map-data/mushroom-city-pois.js'
    },
     beanbean_kingdom: {
        id: 'beanbean_kingdom',
        name: 'Beanbean Kingdom',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 5,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: beanbeanKingdomData.pointsOfInterest,
        fogOfWar: beanbeanKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/beanbean-kingdom-pois.js'
    },
    mountain_enclave: {
        id: 'mountain_enclave',
        name: 'Mountain Enclave',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 6,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mountainEnclaveData.pointsOfInterest,
        fogOfWar: mountainEnclaveData.fogOfWar || [],
        poiSourceFile: 'map-data/mountain-enclave-pois.js'
    },
    dry_dry_desert: {
        id: 'dry_dry_desert',
        name: 'Dry Dry Desert',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 7,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: dryDryDesertData.pointsOfInterest,
        fogOfWar: dryDryDesertData.fogOfWar || [],
        poiSourceFile: 'map-data/dry-dry-desert-pois.js'
    },
    bandits_way: {
        id: 'bandits_way',
        name: 'Bandits Way',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 8,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: banditsWayData.pointsOfInterest,
        fogOfWar: banditsWayData.fogOfWar || [],
        poiSourceFile: 'map-data/bandits-way-pois.js'
    },
    wario_woods: {
        id: 'wario_woods',
        name: 'Wario Woods',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 9,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: warioWoodsData.pointsOfInterest,
        fogOfWar: warioWoodsData.fogOfWar || [],
        poiSourceFile: 'map-data/wario-woods-pois.js'
    },
    arid_coast: {
        id: 'arid_coast',
        name: 'The Arid Coast',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 10,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: aridCoastData.pointsOfInterest,
        fogOfWar: aridCoastData.fogOfWar || [],
        poiSourceFile: 'map-data/arid-coast-pois.js'
    },
    boos_woods: {
        id: 'boos_woods',
        name: 'Boos Woods',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 11,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: boosWoodsData.pointsOfInterest,
        fogOfWar: boosWoodsData.fogOfWar || [],
        poiSourceFile: 'map-data/boos-woods-pois.js'
    },
     pianta_sea: {
        id: 'pianta_sea',
        name: 'The Pianta Sea',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 12,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: piantaSeaData.pointsOfInterest,
        fogOfWar: piantaSeaData.fogOfWar || [],
        poiSourceFile: 'map-data/pianta-sea-pois.js'
    },
    yale_shores: {
        id: 'yale_shores',
        name: 'Yale Shores',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 13,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: yaleShoresData.pointsOfInterest,
        fogOfWar: yaleShoresData.fogOfWar || [],
        poiSourceFile: 'map-data/yale-shores-pois.js'
    },
    barrel_volcano: {
        id: 'barrel_volcano',
        name: 'Barrel Volcano',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 1,
        group: 'Islands & Outer Realms',
        pointsOfInterest: barrelVolcanoData.pointsOfInterest,
        fogOfWar: barrelVolcanoData.fogOfWar || [],
        poiSourceFile: 'map-data/barrel-volcano-pois.js'
    },
    seven_kingdoms: {
        id: 'seven_kingdoms',
        name: 'The Seven Kingdoms',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 2,
        group: 'Islands & Outer Realms',
        pointsOfInterest: sevenKingdomsData.pointsOfInterest,
        fogOfWar: sevenKingdomsData.fogOfWar || [],
        poiSourceFile: 'map-data/seven-kingdoms-pois.js'
    },
    sunshine_isles: {
        id: 'sunshine_isles',
        name: 'Sunshine Isles',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 3,
        group: 'Islands & Outer Realms',
        pointsOfInterest: sunshineIslesData.pointsOfInterest,
        fogOfWar: sunshineIslesData.fogOfWar || [],
        poiSourceFile: 'map-data/sunshine-isles-pois.js'
    },
    flower_kingdom: {
        id: 'flower_kingdom',
        name: 'Flower Kingdom',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 4,
        group: 'Islands & Outer Realms',
        pointsOfInterest: flowerKingdomData.pointsOfInterest,
        fogOfWar: flowerKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/flower-kingdom-pois.js'
    },
    yoshi_dk_islands: {
        id: 'yoshi_dk_islands',
        name: 'Yoshi & DKs Islands',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 5,
        group: 'Islands & Outer Realms',
        pointsOfInterest: yoshiDkIslandsData.pointsOfInterest,
        fogOfWar: yoshiDkIslandsData.fogOfWar || [],
        poiSourceFile: 'map-data/yoshi-dk-islands-pois.js'
    },
    waffle_chestnut: {
        id: 'waffle_chestnut',
        name: 'Waffle & Chestnut',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 6,
        group: 'Islands & Outer Realms',
        pointsOfInterest: waffleChestnutData.pointsOfInterest,
        fogOfWar: waffleChestnutData.fogOfWar || [],
        poiSourceFile: 'map-data/waffle-chestnut-pois.js'
    },
    neo_bowser_city: {
        id: 'neo_bowser_city',
        name: 'Neo Bowser City',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 7,
        group: 'Islands & Outer Realms',
        pointsOfInterest: neoBowserCityData.pointsOfInterest,
        fogOfWar: neoBowserCityData.fogOfWar || [],
        poiSourceFile: 'map-data/neo-bowser-city-pois.js'
    },
    ice_ice_outpost: {
        id: 'ice_ice_outpost',
        name: 'Ice Ice Outpost',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 8,
        group: 'Islands & Outer Realms',
        pointsOfInterest: iceIceOutpostData.pointsOfInterest,
        fogOfWar: iceIceOutpostData.fogOfWar || [],
        poiSourceFile: 'map-data/ice-ice-outpost-pois.js'
    },
    midlands_full: {
        id: 'midlands_full',
        name: 'The Midlands (Full)',
        imageSrc: 'fullmap.png',
        order: 1,
        group: 'The Midlands',
        pointsOfInterest: [
            ...midlandsData.pointsOfInterest,
            ...yalBelanorData.pointsOfInterest,
            ...vemilliaData.pointsOfInterest,
            ...ironwoodData.pointsOfInterest,
            ...lockerwoodData.pointsOfInterest,
            ...dragonMountainData.pointsOfInterest,
            ...autumnwoodData.pointsOfInterest,
            ...dryCountyData.pointsOfInterest,
            ...ludorIslesData.pointsOfInterest,
            ...theghduralData.pointsOfInterest,
            ...jungleOfThornsData.pointsOfInterest,
            ...baldoraPlainsData.pointsOfInterest,
            ...lowerHillsData.pointsOfInterest,
            ...yalCentralData.pointsOfInterest,
            ...northernLandsData.pointsOfInterest,
        ],
        fogOfWar: [
            ...(midlandsData.fogOfWar || []),
            ...(yalBelanorData.fogOfWar || []),
            ...(vemilliaData.fogOfWar || []),
            ...(ironwoodData.fogOfWar || []),
            ...(lockerwoodData.fogOfWar || []),
            ...(dragonMountainData.fogOfWar || []),
            ...(autumnwoodData.fogOfWar || []),
            ...(dryCountyData.fogOfWar || []),
            ...(ludorIslesData.fogOfWar || []),
            ...(theghduralData.fogOfWar || []),
            ...(jungleOfThornsData.fogOfWar || []),
            ...(baldoraPlainsData.fogOfWar || []),
            ...(lowerHillsData.fogOfWar || []),
            ...(yalCentralData.fogOfWar || []),
            ...(northernLandsData.fogOfWar || []),
        ],
        poiSourceFile: null
    },
    midlands_capital: {
        id: 'midlands_capital',
        name: 'Regal Capital',
        imageSrc: 'fullmap.png',
        order: 2,
        group: 'The Midlands',
        pointsOfInterest: midlandsData.pointsOfInterest,
        fogOfWar: midlandsData.fogOfWar,
        poiSourceFile: 'map-data/midlands-pois.js'
    },
    yal_belanor: {
        id: 'yal_belanor',
        name: 'Yal Belanor',
        imageSrc: 'fullmap.png',
        order: 3,
        group: 'The Midlands',
        pointsOfInterest: yalBelanorData.pointsOfInterest,
        fogOfWar: yalBelanorData.fogOfWar,
        poiSourceFile: 'map-data/yal-belanor-pois.js'
    },
    vemillia: {
        id: 'vemillia',
        name: 'Vemilia',
        imageSrc: 'fullmap.png',
        order: 4,
        group: 'The Midlands',
        pointsOfInterest: vemilliaData.pointsOfInterest,
        fogOfWar: vemilliaData.fogOfWar,
        poiSourceFile: 'map-data/vemillia-pois.js'
    },
    ironwood: {
        id: 'ironwood',
        name: 'Ironwood',
        imageSrc: 'fullmap.png',
        order: 5,
        group: 'The Midlands',
        pointsOfInterest: ironwoodData.pointsOfInterest,
        fogOfWar: ironwoodData.fogOfWar,
        poiSourceFile: 'map-data/ironwood-pois.js'
    },
    lockerwood: {
        id: 'lockerwood',
        name: 'Lockerwood',
        imageSrc: 'fullmap.png',
        order: 6,
        group: 'The Midlands',
        pointsOfInterest: lockerwoodData.pointsOfInterest,
        fogOfWar: lockerwoodData.fogOfWar,
        poiSourceFile: 'map-data/lockerwood-pois.js'
    },
     dragon_mountain: {
        id: 'dragon_mountain',
        name: 'Dragon Mountain',
        imageSrc: 'fullmap.png',
        order: 7,
        group: 'The Midlands',
        pointsOfInterest: dragonMountainData.pointsOfInterest,
        fogOfWar: dragonMountainData.fogOfWar,
        poiSourceFile: 'map-data/dragon-mountain-pois.js'
    },
    autumnwood: {
        id: 'autumnwood',
        name: 'Autumnwood',
        imageSrc: 'fullmap.png',
        order: 8,
        group: 'The Midlands',
        pointsOfInterest: autumnwoodData.pointsOfInterest,
        fogOfWar: autumnwoodData.fogOfWar,
        poiSourceFile: 'map-data/autumnwood-pois.js'
    },
    dry_county: {
        id: 'dry_county',
        name: 'Dry County',
        imageSrc: 'fullmap.png',
        order: 9,
        group: 'The Midlands',
        pointsOfInterest: dryCountyData.pointsOfInterest,
        fogOfWar: dryCountyData.fogOfWar,
        poiSourceFile: 'map-data/dry-county-pois.js'
    },
    theghdural: {
        id: 'theghdural',
        name: 'Theghdural',
        imageSrc: 'fullmap.png',
        order: 10,
        group: 'The Midlands',
        pointsOfInterest: theghduralData.pointsOfInterest,
        fogOfWar: theghduralData.fogOfWar,
        poiSourceFile: 'map-data/theghdural-pois.js'
    },
    jungle_of_thorns: {
        id: 'jungle_of_thorns',
        name: 'Jungle of Thorns',
        imageSrc: 'fullmap.png',
        order: 11,
        group: 'The Midlands',
        pointsOfInterest: jungleOfThornsData.pointsOfInterest,
        fogOfWar: jungleOfThornsData.fogOfWar,
        poiSourceFile: 'map-data/jungle-of-thorns-pois.js'
    },
    ludor_isles: {
        id: 'ludor_isles',
        name: 'Ludor Isles',
        imageSrc: 'fullmap.png',
        order: 12,
        group: 'The Midlands',
        pointsOfInterest: ludorIslesData.pointsOfInterest,
        fogOfWar: ludorIslesData.fogOfWar,
        poiSourceFile: 'map-data/ludor-isles-pois.js'
    },
    baldora_plains: {
        id: 'baldora_plains',
        name: 'Baldora Plains',
        imageSrc: 'fullmap.png',
        order: 13,
        group: 'The Midlands',
        pointsOfInterest: baldoraPlainsData.pointsOfInterest,
        fogOfWar: baldoraPlainsData.fogOfWar,
        poiSourceFile: 'map-data/baldora-plains-pois.js'
    },
    lower_hills: {
        id: 'lower_hills',
        name: 'Lower Hills',
        imageSrc: 'fullmap.png',
        order: 14,
        group: 'The Midlands',
        pointsOfInterest: lowerHillsData.pointsOfInterest,
        fogOfWar: lowerHillsData.fogOfWar,
        poiSourceFile: 'map-data/lower-hills-pois.js'
    },
    yal_central: {
        id: 'yal_central',
        name: 'Yal Central',
        imageSrc: 'fullmap.png',
        order: 15,
        group: 'The Midlands',
        pointsOfInterest: yalCentralData.pointsOfInterest,
        fogOfWar: yalCentralData.fogOfWar,
        poiSourceFile: 'map-data/yal-central-pois.js'
    },
    northern_lands: {
        id: 'northern_lands',
        name: 'The Northern Lands',
        imageSrc: 'fullmap.png',
        order: 16,
        group: 'The Midlands',
        pointsOfInterest: northernLandsData.pointsOfInterest,
        fogOfWar: northernLandsData.fogOfWar,
        poiSourceFile: 'map-data/northern-lands-pois.js'
    },
    chramalot_kingdom: {
        id: 'chramalot_kingdom',
        name: 'Chramalot Kingdom',
        imageSrc: 'mushroom_kingdom.jpg',
        order: 9,
        group: 'Islands & Outer Realms',
        pointsOfInterest: chramalotKingdomData.pointsOfInterest,
        fogOfWar: chramalotKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/chramalot-kingdom-pois.js'
    },
    middle_earth_full: {
        id: 'middle_earth_full',
        name: 'Middle-earth (Full)',
        imageSrc: 'mide.webp',
        order: 1,
        group: 'Middle-earth',
        pointsOfInterest: [
            ...middleEarthData.pointsOfInterest,
            ...umbarData.pointsOfInterest,
            ...gondorData.pointsOfInterest,
            ...rhovanionData.pointsOfInterest,
            ...mordorData.pointsOfInterest,
        ],
        fogOfWar: [
            ...middleEarthData.fogOfWar,
            ...(umbarData.fogOfWar || []),
            ...(gondorData.fogOfWar || []),
            ...(rhovanionData.fogOfWar || []),
            ...(mordorData.fogOfWar || []),
        ],
        poiSourceFile: 'map-data/middle-earth-pois.js'
    },
    forlindon: {
        id: 'forlindon',
        name: 'Forlindon',
        imageSrc: 'mide.webp',
        order: 2,
        group: 'Middle-earth',
        pointsOfInterest: middleEarthData.pointsOfInterest.filter(p => p.subRegion === 'forlindon'),
        fogOfWar: [],
        poiSourceFile: 'map-data/middle-earth/Forlindon.js'
    },
    eriador: {
        id: 'eriador',
        name: 'Eriador',
        imageSrc: 'mide.webp',
        order: 3,
        group: 'Middle-earth',
        pointsOfInterest: middleEarthData.pointsOfInterest.filter(p => p.subRegion === 'eriador'),
        fogOfWar: [],
        poiSourceFile: 'map-data/middle-earth/Eriador.js'
    },
    haradwaith: {
        id: 'haradwaith',
        name: 'Haradwaith',
        imageSrc: 'mide.webp',
        order: 4,
        group: 'Middle-earth',
        pointsOfInterest: haradwaithData.pointsOfInterest,
        fogOfWar: haradwaithData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Haradwaith.js'
    },
    umbar: {
        id: 'umbar',
        name: 'Umbar',
        imageSrc: 'mide.webp',
        order: 5,
        group: 'Middle-earth',
        pointsOfInterest: umbarData.pointsOfInterest,
        fogOfWar: umbarData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Umbar.js'
    },
    gondor: {
        id: 'gondor',
        name: 'Gondor',
        imageSrc: 'mide.webp',
        order: 6,
        group: 'Middle-earth',
        pointsOfInterest: gondorData.pointsOfInterest,
        fogOfWar: gondorData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Gondor.js'
    },
    rhovanion: {
        id: 'rhovanion',
        name: 'Rhovanion',
        imageSrc: 'mide.webp',
        order: 7,
        group: 'Middle-earth',
        pointsOfInterest: rhovanionData.pointsOfInterest,
        fogOfWar: rhovanionData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Rhovanion.js'
    },
    mordor: {
        id: 'mordor',
        name: 'The Land of Mordor',
        imageSrc: 'mide.webp',
        order: 8,
        group: 'Middle-earth',
        pointsOfInterest: mordorData.pointsOfInterest,
        fogOfWar: mordorData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Mordor.js'
    },
    kivotos_full: {
        id: 'kivotos_full',
        name: 'Kivotos (Full)',
        imageSrc: 'archive.png',
        order: 1,
        group: 'Kivotos',
        pointsOfInterest: kivotosMainData.pointsOfInterest,
        fogOfWar: [
            ...(kivotosCentralData.fogOfWar || []),
            ...(grandLatinData.fogOfWar || []),
            ...(austelarassiaData.fogOfWar || []),
            ...(silbaarstadtData.fogOfWar || []),
            ...(alhaoungData.fogOfWar || []),
            ...(northernAureanPoleData.fogOfWar || []),
            ...(newCairoData.fogOfWar || []),
            ...(newAmericaData.fogOfWar || []),
            ...(southernAureanPoleData.fogOfWar || []),
        ],
        poiSourceFile: null
    },
    kivotos_central: {
        id: 'kivotos_central',
        name: 'Kivotos Central',
        imageSrc: 'archive.png',
        order: 2,
        group: 'Kivotos',
        pointsOfInterest: kivotosCentralData.pointsOfInterest,
        fogOfWar: kivotosCentralData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/Kivotos.js'
    },
    grand_latin: {
        id: 'grand_latin',
        name: 'Grand Latin',
        imageSrc: 'archive.png',
        order: 3,
        group: 'Kivotos',
        pointsOfInterest: grandLatinData.pointsOfInterest,
        fogOfWar: grandLatinData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/GrandLatin.js'
    },
    austelarassia: {
        id: 'austelarassia',
        name: 'Austelarassia',
        imageSrc: 'archive.png',
        order: 4,
        group: 'Kivotos',
        pointsOfInterest: austelarassiaData.pointsOfInterest,
        fogOfWar: austelarassiaData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/Austelarassia.js'
    },
    silbaarstadt: {
        id: 'silbaarstadt',
        name: 'Silbaarstadt',
        imageSrc: 'archive.png',
        order: 5,
        group: 'Kivotos',
        pointsOfInterest: silbaarstadtData.pointsOfInterest,
        fogOfWar: silbaarstadtData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/Silbaarstadt.js'
    },
    al_haoung: {
        id: 'al_haoung',
        name: 'AL-haoung',
        imageSrc: 'archive.png',
        order: 6,
        group: 'Kivotos',
        pointsOfInterest: alhaoungData.pointsOfInterest,
        fogOfWar: alhaoungData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/AL_haoung.js'
    },
    northern_aurean_pole: {
        id: 'northern_aurean_pole',
        name: 'Northern Aurean Pole',
        imageSrc: 'archive.png',
        order: 7,
        group: 'Kivotos',
        pointsOfInterest: northernAureanPoleData.pointsOfInterest,
        fogOfWar: northernAureanPoleData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/NorthernAureanPole.js'
    },
    new_cairo: {
        id: 'new_cairo',
        name: 'New Cairo',
        imageSrc: 'archive.png',
        order: 8,
        group: 'Kivotos',
        pointsOfInterest: newCairoData.pointsOfInterest,
        fogOfWar: newCairoData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/NewCairo.js'
    },
    new_america: {
        id: 'new_america',
        name: 'New America',
        imageSrc: 'archive.png',
        order: 9,
        group: 'Kivotos',
        pointsOfInterest: newAmericaData.pointsOfInterest,
        fogOfWar: newAmericaData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/NewAmerica.js'
    },
    southern_aurean_pole: {
        id: 'southern_aurean_pole',
        name: 'Southern Aurean Pole',
        imageSrc: 'archive.png',
        order: 10,
        group: 'Kivotos',
        pointsOfInterest: southernAureanPoleData.pointsOfInterest,
        fogOfWar: southernAureanPoleData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/SouthernAureanPole.js'
    },
    internet_full: {
        id: 'internet_full',
        name: 'The Internet (Full)',
        imageSrc: 'intermap.jpg',
        order: 1,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest,
        fogOfWar: internetData.fogOfWar || [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_border: {
        id: 'internet_border',
        name: 'The Border',
        imageSrc: 'intermap.jpg',
        order: 2,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'border'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_surface_web: {
        id: 'internet_surface_web',
        name: 'The Surface Web',
        imageSrc: 'intermap.jpg',
        order: 3,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'surface_web'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_sea_of_archives: {
        id: 'internet_sea_of_archives',
        name: 'Sea of Archives',
        imageSrc: 'intermap.jpg',
        order: 4,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'sea_of_archives'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_big_tech: {
        id: 'internet_big_tech',
        name: 'Big Tech Region',
        imageSrc: 'intermap.jpg',
        order: 5,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'big_tech'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_apple_island: {
        id: 'internet_apple_island',
        name: 'Apple Island',
        imageSrc: 'intermap.jpg',
        order: 6,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'apple_island'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_intel_corp: {
        id: 'internet_intel_corp',
        name: 'Intel Corp. Zone',
        imageSrc: 'intermap.jpg',
        order: 7,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'intel_corp'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_deviant_web: {
        id: 'internet_deviant_web',
        name: 'The Deviant Web',
        imageSrc: 'intermap.jpg',
        order: 8,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'deviant_web'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_criminal_web: {
        id: 'internet_criminal_web',
        name: 'The Criminal Web',
        imageSrc: 'intermap.jpg',
        order: 9,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'criminal_web'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_deep_web: {
        id: 'internet_deep_web',
        name: 'The Deep Web',
        imageSrc: 'intermap.jpg',
        order: 10,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'deep_web'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_capitol: {
        id: 'internet_capitol',
        name: 'The Capitol',
        imageSrc: 'intermap.jpg',
        order: 11,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'capitol'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_wastefill: {
        id: 'internet_wastefill',
        name: 'Great Southern Wastefill',
        imageSrc: 'intermap.jpg',
        order: 12,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'wastefill'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    warhammer_full: {
        id: 'warhammer_full',
        name: 'The Old World (Full)',
        imageSrc: 'wa.jpg',
        order: 1,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest,
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_empire: {
        id: 'warhammer_empire',
        name: 'The Empire',
        imageSrc: 'wa.jpg',
        order: 2,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'the_empire'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_worlds_edge: {
        id: 'warhammer_worlds_edge',
        name: 'Worlds Edge Mtns.',
        imageSrc: 'wa.jpg',
        order: 3,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'worlds_edge'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_sylvania: {
        id: 'warhammer_sylvania',
        name: 'Sylvania',
        imageSrc: 'wa.jpg',
        order: 4,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'sylvania'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_badlands: {
        id: 'warhammer_badlands',
        name: 'The Badlands',
        imageSrc: 'wa.jpg',
        order: 5,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'badlands'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_ulthuan: {
        id: 'warhammer_ulthuan',
        name: 'Ulthuan',
        imageSrc: 'wa.jpg',
        order: 6,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'ulthuan'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_naggaroth: {
        id: 'warhammer_naggaroth',
        name: 'Naggaroth',
        imageSrc: 'wa.jpg',
        order: 7,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'naggaroth'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_lustria: {
        id: 'warhammer_lustria',
        name: 'Lustria',
        imageSrc: 'wa.jpg',
        order: 8,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'lustria'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_land_of_the_dead: {
        id: 'warhammer_land_of_the_dead',
        name: 'Land of the Dead',
        imageSrc: 'wa.jpg',
        order: 9,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'land_of_the_dead'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_araby: {
        id: 'warhammer_araby',
        name: 'Araby',
        imageSrc: 'wa.jpg',
        order: 10,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'araby'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_southlands: {
        id: 'warhammer_southlands',
        name: 'The Southlands',
        imageSrc: 'wa.jpg',
        order: 11,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'southlands'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_bretonnia: {
        id: 'warhammer_bretonnia',
        name: 'Bretonnia',
        imageSrc: 'wa.jpg',
        order: 12,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'bretonnia'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_darklands: {
        id: 'warhammer_darklands',
        name: 'The Darklands',
        imageSrc: 'wa.jpg',
        order: 13,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'darklands'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_ancient_giant_land: {
        id: 'warhammer_ancient_giant_land',
        name: 'Ancient Giant Land',
        imageSrc: 'wa.jpg',
        order: 14,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'ancient_giant_land'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_grand_cathay: {
        id: 'warhammer_grand_cathay',
        name: 'Grand Cathay',
        imageSrc: 'wa.jpg',
        order: 15,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'grand_cathay'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_eastern_steppes: {
        id: 'warhammer_eastern_steppes',
        name: 'Eastern Steppes',
        imageSrc: 'wa.jpg',
        order: 16,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'eastern_steppes'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_great_bastion: {
        id: 'warhammer_great_bastion',
        name: 'The Great Bastion',
        imageSrc: 'wa.jpg',
        order: 17,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'great_bastion'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    doughnut_hole_full: {
        id: 'doughnut_hole_full',
        name: 'The Doughnut Hole (Full)',
        imageSrc: 'qaevyh08hsx51.webp',
        order: 1,
        group: 'The Doughnut Hole',
        pointsOfInterest: doughnutHoleData.pointsOfInterest,
        fogOfWar: doughnutHoleData.fogOfWar || [],
        poiSourceFile: 'map-data/doughnut-hole.js'
    },
    jesters_playground: {
        id: 'jesters_playground',
        name: "The Jester's Playground",
        imageSrc: 'qaevyh08hsx51.webp',
        order: 2,
        group: 'The Doughnut Hole',
        pointsOfInterest: jestersPlaygroundPois,
        poiSourceFile: 'map-data/doughnut-hole/jesters_playground.js'
    },
    causality_chain: {
        id: 'causality_chain',
        name: "The Causality Chain",
        imageSrc: 'qaevyh08hsx51.webp',
        order: 3,
        group: 'The Doughnut Hole',
        pointsOfInterest: causalityChainPois,
        poiSourceFile: 'map-data/doughnut-hole/causality_chain.js'
    },
    drifters_debris_field: {
        id: 'drifters_debris_field',
        name: "Drifter's Debris Field",
        imageSrc: 'qaevyh08hsx51.webp',
        order: 4,
        group: 'The Doughnut Hole',
        pointsOfInterest: driftersDebrisFieldPois,
        poiSourceFile: 'map-data/doughnut-hole/drifters_debris_field.js'
    },
    weavers_tapestry: {
        id: 'weavers_tapestry',
        name: "The Weaver's Tapestry",
        imageSrc: 'qaevyh08hsx51.webp',
        order: 5,
        group: 'The Doughnut Hole',
        pointsOfInterest: weaversTapestryPois,
        poiSourceFile: 'map-data/doughnut-hole/weavers_tapestry.js'
    },
    outer_anomaly: {
        id: 'outer_anomaly',
        name: "The Outer Anomaly",
        imageSrc: 'qaevyh08hsx51.webp',
        order: 6,
        group: 'The Doughnut Hole',
        pointsOfInterest: outerAnomalyPois,
        poiSourceFile: 'map-data/doughnut-hole/outer_anomaly.js'
    },
    pokemon_full: {
        id: 'pokemon_full',
        name: 'Pokémon Regions (Full)',
        imageSrc: 'pokemon.png',
        order: 1,
        group: 'Pokémon Regions',
        pointsOfInterest: pokemonData.pointsOfInterest,
        fogOfWar: [], 
        poiSourceFile: null
    },
    unova: {
        id: 'unova',
        name: 'Unova Region',
        imageSrc: 'pokemon.png',
        order: 2,
        group: 'Pokémon Regions',
        pointsOfInterest: unovaPois,
        fogOfWar: [],
        poiSourceFile: 'map-data/pokemon/unova.js'
    },
    oore: {
        id: 'oore',
        name: 'Oore Region',
        imageSrc: 'pokemon.png',
        order: 3,
        group: 'Pokémon Regions',
        pointsOfInterest: oorePois,
        fogOfWar: [],
        poiSourceFile: 'map-data/pokemon/oore.js'
    },
    kalos_johto_kanto_paldea: {
        id: 'kalos_johto_kanto_paldea',
        name: 'Kalos, Johto, Kanto, & Paldea',
        imageSrc: 'pokemon.png',
        order: 4,
        group: 'Pokémon Regions',
        pointsOfInterest: [
            ...kalosPois,
            ...johtoPois,
            ...kantoPois,
            ...paldeaPois
        ],
        fogOfWar: [],
        poiSourceFile: null
    },
    hoenn: {
        id: 'hoenn',
        name: 'Hoenn Region',
        imageSrc: 'pokemon.png',
        order: 5,
        group: 'Pokémon Regions',
        pointsOfInterest: hoennPois,
        fogOfWar: [],
        poiSourceFile: 'map-data/pokemon/hoenn.js'
    },
    fiore_almia: {
        id: 'fiore_almia',
        name: 'Fiore & Almia',
        imageSrc: 'pokemon.png',
        order: 6,
        group: 'Pokémon Regions',
        pointsOfInterest: [ ...fiorePois, ...almiaPois ],
        fogOfWar: [],
        poiSourceFile: null
    },
    mountain_savana: {
        id: 'mountain_savana',
        name: 'Mountain Savana',
        imageSrc: 'pokemon.png',
        order: 7,
        group: 'Pokémon Regions',
        pointsOfInterest: mountainSavanaPois,
        fogOfWar: [],
        poiSourceFile: 'map-data/pokemon/mountain_savana.js'
    }
};