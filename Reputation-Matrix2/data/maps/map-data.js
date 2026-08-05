
// map-data.js

import { BUILDING_TYPES } from '../support/building-types.js';
import { mushroomKingdomData } from '../../map-data/mushroom-kingdom-pois.js';
import { mountainEnclaveData } from '../../map-data/mountain-enclave-pois.js';
import { dryDryDesertData } from '../../map-data/dry-dry-desert-pois.js';
import { banditsWayData } from '../../map-data/bandits-way-pois.js';
import { warioWoodsData } from '../../map-data/wario-woods-pois.js';
import { aridCoastData } from '../../map-data/arid-coast-pois.js';
import { boosWoodsData } from '../../map-data/boos-woods-pois.js';
import { theNorthData } from '../../map-data/the-north-pois.js';
import { mushroomCityData } from '../../map-data/mushroom-city-pois.js';
import { beanbeanKingdomData } from '../../map-data/beanbean-kingdom-pois.js';
import { barrelVolcanoData } from '../../map-data/barrel-volcano-pois.js';
import { sevenKingdomsData } from '../../map-data/seven-kingdoms-pois.js';
import { sunshineIslesData } from '../../map-data/sunshine-isles-pois.js';
import { flowerKingdomData } from '../../map-data/flower-kingdom-pois.js';
import { yoshiDkIslandsData } from '../../map-data/yoshi-dk-islands-pois.js';
import { waffleChestnutData } from '../../map-data/waffle-chestnut-pois.js';
import { neoBowserCityData } from '../../map-data/neo-bowser-city-pois.js';
import { iceIceOutpostData } from '../../map-data/ice-ice-outpost-pois.js';
import { chramalotKingdomData } from '../../map-data/chramalot-kingdom-pois.js';
import { piantaSeaData } from '../../map-data/pianta-sea-pois.js';
import { yaleShoresData } from '../../map-data/yale-shores-pois.js';
import midlandsData from '../../map-data/midlands-pois.js';
import { yalBelanorData } from '../../map-data/yal-belanor-pois.js';
import { vemilliaData } from '../../map-data/vemillia-pois.js';
import { ironwoodData } from '../../map-data/ironwood-pois.js';
import { lockerwoodData } from '../../map-data/lockerwood-pois.js';
import { dragonMountainData } from '../../map-data/dragon-mountain-pois.js';
import { autumnwoodData } from '../../map-data/autumnwood-pois.js';
import {
    earthLandData,
    northAmericaData, southAmericaData, africaData, asiaData, azaniaData, terraNovaData,
    atenData, anubisData, amunRaData, horusData, tothData, apisiaData, minMnevisData,
    muData, greaterLemuriaData, isleOfBlessedData, avalOnsData, scyllaCharybdisData, gardenIslesData, crimisionIsleData,
    xenonesiaData, geminiaData, uData, polybiusData, eiwassData, oraculaData, asclepiaData, minervaData,
    asgardData, jotunheimrData, skycavernsData,
    sirsirianOceanData, pitatiaData, refijiaData, robensoniaData, glarniaData, weldrhomData, formosaUltimaData}from '../../map-data/earth-land-pois.js';
import { dryCountyData } from '../../map-data/dry-county-pois.js';
import { ludorIslesData } from '../../map-data/ludor-isles-pois.js';
import { theghduralData } from '../../map-data/theghdural-pois.js';
import { jungleOfThornsData } from '../../map-data/jungle-of-thorns-pois.js';
import { baldoraPlainsData } from '../../map-data/baldora-plains-pois.js';
import { lowerHillsData } from '../../map-data/lower-hills-pois.js';
import { yalCentralData } from '../../map-data/yal-central-pois.js';
import { northernLandsData } from '../../map-data/northern-lands-pois.js';
import { internetData } from '../../map-data/internet-pois.js';
import { middleEarthData } from '../../map-data/middle-earth-pois.js';
import { haradwaithData } from '../../map-data/middle-earth/Haradwaith.js';
import { umbarData } from '../../map-data/middle-earth/Umbar.js';
import { gondorData } from '../../map-data/middle-earth/Gondor.js';
import { rhovanionData } from '../../map-data/middle-earth/Rhovanion.js';
import { mordorData } from '../../map-data/middle-earth/Mordor.js';
import { warhammerData } from '../../map-data/warhammer-pois.js';

import { kivotosData as kivotosMainData } from '../../map-data/kivotos-pois.js';
import { kivotosData as kivotosCentralData } from '../../map-data/kivotos/Kivotos.js';
import { grandLatinData } from '../../map-data/kivotos/GrandLatin.js';
import { austelarassiaData } from '../../map-data/kivotos/Austelarassia.js';
import { silbaarstadtData } from '../../map-data/kivotos/Silbaarstadt.js';
import { alhaoungData } from '../../map-data/kivotos/AL_haoung.js';
import { northernAureanPoleData } from '../../map-data/kivotos/NorthernAureanPole.js';
import { newCairoData } from '../../map-data/kivotos/NewCairo.js';
import { newAmericaData } from '../../map-data/kivotos/NewAmerica.js';
import { southernAureanPoleData } from '../../map-data/kivotos/SouthernAureanPole.js';
import { doughnutHoleData } from '../../map-data/doughnut-hole.js';
import { jestersPlaygroundPois } from '../../map-data/doughnut-hole/jesters_playground.js';
import { causalityChainPois } from '../../map-data/doughnut-hole/causality_chain.js';
import { driftersDebrisFieldPois } from '../../map-data/doughnut-hole/drifters_debris_field.js';
import { weaversTapestryPois } from '../../map-data/doughnut-hole/weavers_tapestry.js';
import { outerAnomalyPois } from '../../map-data/doughnut-hole/outer_anomaly.js';
import { pokemonData } from '../../map-data/pokemon-pois.js';
import { unovaPois } from '../../map-data/pokemon/unova.js';
import { oorePois } from '../../map-data/pokemon/oore.js';
import { hoennPois } from '../../map-data/pokemon/hoenn.js';
import { kalosPois } from '../../map-data/pokemon/kalos.js';
import { johtoPois } from '../../map-data/pokemon/johto.js';
import { kantoPois } from '../../map-data/pokemon/kanto.js';
import { paldeaPois } from '../../map-data/pokemon/paldea.js';
import { fiorePois } from '../../map-data/pokemon/fiore.js';
import { almiaPois } from '../../map-data/pokemon/almia.js';
import { mountainSavanaPois } from '../../map-data/pokemon/mountain_savana.js';
import { almostEdgeData } from '../../map-data/almost-edge-pois.js';
import { theEdgeData } from '../../map-data/the-edge-pois.js';
import { animatopiaData } from '../../map-data/animatopia-pois.js';
import { connectopiaData } from '../../map-data/connectopia-pois.js';
import { faerunData } from '../../map-data/faerun-pois.js';
import { leclaireIsleData } from '../../map-data/leclaire-isle-pois.js';
import { teyvatData } from '../../map-data/teyvat-pois.js';
import { equestriaData } from '../../map-data/equestria-pois.js';
import { cenerlotData } from '../../map-data/equestria/Cenerlot.js';
import { mountEverhoofData } from '../../map-data/equestria/MountEverhoof.js';
import { grandCountryData } from '../../map-data/grand-country-pois.js';
import { hailbregData } from '../../map-data/equestria/Hailbreg.js';
import { wanderingWoodsData } from '../../map-data/equestria/WanderingWoods.js';
import { jackalopeSlopesData } from '../../map-data/equestria/JackalopeSlopes.js';
import { siresHollowData } from '../../map-data/equestria/SiresHollow.js';
import { farasiData } from '../../map-data/equestria/Farasi.js';
import { zebrabweData } from '../../map-data/equestria/Zebrabwe.js';
import { saddleArabiaData } from '../../map-data/equestria/SaddleArabia.js';
import { boneDryDesertData } from '../../map-data/equestria/BoneDryDesert.js';
import { appledoosaData } from '../../map-data/equestria/Appledoosa.js';
import { seaPalominoDesertData } from '../../map-data/equestria/SeaPalominoDesert.js';
import { badlandsData } from '../../map-data/equestria/Badlands.js';
import { southCentralParkData } from '../../map-data/equestria/SouthCentralPark.js';
import { stormKingsRealmData } from '../../map-data/equestria/StormKingsRealm.js';
import { greatBlizzardBarreaerData } from '../../map-data/equestria/GreatBlizzardBarreaer.js';
import { desolateWastelandData } from '../../map-data/equestria/DesolateWasteland.js';
import { mountMetazoaData } from '../../map-data/equestria/MountMetazoa.js';
import { sugarMapleGroveData } from '../../map-data/equestria/SugarMapleGrove.js';
import { griffinstoneData } from '../../map-data/equestria/Griffonstone.js';
import { thraceData } from '../../map-data/equestria/Thrace.js';
import { greatIcePlatauData } from '../../map-data/equestria/GreatIcePlatau.js';
import { halfingerGroveData } from '../../map-data/equestria/HalfingerGrove.js';
import { trottingTerriansData } from '../../map-data/equestria/TrottingTerrians.js';
import { abyssiniaData } from '../../map-data/equestria/Abyssinia.js';
import { ngAmiaData } from '../../map-data/equestria/NgAmia.js';
import { shireLankaData } from '../../map-data/equestria/ShireLanka.js';
import { riverlandsData } from '../../map-data/equestria/Riverlands.js';


// Re-export BUILDING_TYPES so other modules can access it from this central file
export { BUILDING_TYPES };
export const MDATA_F = {

    mushroom_kingdom_full: {
        id: 'mushroom_kingdom_full',
        name: 'Mushroom Kingdom (Full)',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
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
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 2,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mushroomKingdomData.pointsOfInterest,
        fogOfWar: mushroomKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/mushroom-kingdom-pois.js'
    },
    the_north: {
        id: 'the_north',
        name: 'The North',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 3,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: theNorthData.pointsOfInterest,
        fogOfWar: theNorthData.fogOfWar || [],
        poiSourceFile: 'map-data/the-north-pois.js'
    },
    mushroom_city: {
        id: 'mushroom_city',
        name: 'Mushroom City',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 4,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mushroomCityData.pointsOfInterest,
        fogOfWar: mushroomCityData.fogOfWar || [],
        poiSourceFile: 'map-data/mushroom-city-pois.js'
    },
     beanbean_kingdom: {
        id: 'beanbean_kingdom',
        name: 'Beanbean Kingdom',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 5,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: beanbeanKingdomData.pointsOfInterest,
        fogOfWar: beanbeanKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/beanbean-kingdom-pois.js'
    },
    mountain_enclave: {
        id: 'mountain_enclave',
        name: 'Mountain Enclave',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 6,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mountainEnclaveData.pointsOfInterest,
        fogOfWar: mountainEnclaveData.fogOfWar || [],
        poiSourceFile: 'map-data/mountain-enclave-pois.js'
    },
    dry_dry_desert: {
        id: 'dry_dry_desert',
        name: 'Dry Dry Desert',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 7,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: dryDryDesertData.pointsOfInterest,
        fogOfWar: dryDryDesertData.fogOfWar || [],
        poiSourceFile: 'map-data/dry-dry-desert-pois.js'
    },
    bandits_way: {
        id: 'bandits_way',
        name: 'Bandits Way',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 8,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: banditsWayData.pointsOfInterest,
        fogOfWar: banditsWayData.fogOfWar || [],
        poiSourceFile: 'map-data/bandits-way-pois.js'
    },
    wario_woods: {
        id: 'wario_woods',
        name: 'Wario Woods',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 9,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: warioWoodsData.pointsOfInterest,
        fogOfWar: warioWoodsData.fogOfWar || [],
        poiSourceFile: 'map-data/wario-woods-pois.js'
    },
    arid_coast: {
        id: 'arid_coast',
        name: 'The Arid Coast',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 10,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: aridCoastData.pointsOfInterest,
        fogOfWar: aridCoastData.fogOfWar || [],
        poiSourceFile: 'map-data/arid-coast-pois.js'
    },
    boos_woods: {
        id: 'boos_woods',
        name: 'Boos Woods',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 11,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: boosWoodsData.pointsOfInterest,
        fogOfWar: boosWoodsData.fogOfWar || [],
        poiSourceFile: 'map-data/boos-woods-pois.js'
    },
     pianta_sea: {
        id: 'pianta_sea',
        name: 'The Pianta Sea',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 12,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: piantaSeaData.pointsOfInterest,
        fogOfWar: piantaSeaData.fogOfWar || [],
        poiSourceFile: 'map-data/pianta-sea-pois.js'
    },
    yale_shores: {
        id: 'yale_shores',
        name: 'Yale Shores',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 13,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: yaleShoresData.pointsOfInterest,
        fogOfWar: yaleShoresData.fogOfWar || [],
        poiSourceFile: 'map-data/yale-shores-pois.js'
    },
    barrel_volcano: {
        id: 'barrel_volcano',
        name: 'Barrel Volcano',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 1,
        group: 'Islands & Outer Realms',
        pointsOfInterest: barrelVolcanoData.pointsOfInterest,
        fogOfWar: barrelVolcanoData.fogOfWar || [],
        poiSourceFile: 'map-data/barrel-volcano-pois.js'
    },
    seven_kingdoms: {
        id: 'seven_kingdoms',
        name: 'The Seven Kingdoms',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 2,
        group: 'Islands & Outer Realms',
        pointsOfInterest: sevenKingdomsData.pointsOfInterest,
        fogOfWar: sevenKingdomsData.fogOfWar || [],
        poiSourceFile: 'map-data/seven-kingdoms-pois.js'
    },
    sunshine_isles: {
        id: 'sunshine_isles',
        name: 'Sunshine Isles',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 3,
        group: 'Islands & Outer Realms',
        pointsOfInterest: sunshineIslesData.pointsOfInterest,
        fogOfWar: sunshineIslesData.fogOfWar || [],
        poiSourceFile: 'map-data/sunshine-isles-pois.js'
    },
    flower_kingdom: {
        id: 'flower_kingdom',
        name: 'Flower Kingdom',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 4,
        group: 'Islands & Outer Realms',
        pointsOfInterest: flowerKingdomData.pointsOfInterest,
        fogOfWar: flowerKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/flower-kingdom-pois.js'
    },
    yoshi_dk_islands: {
        id: 'yoshi_dk_islands',
        name: 'Yoshi & DKs Islands',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 5,
        group: 'Islands & Outer Realms',
        pointsOfInterest: yoshiDkIslandsData.pointsOfInterest,
        fogOfWar: yoshiDkIslandsData.fogOfWar || [],
        poiSourceFile: 'map-data/yoshi-dk-islands-pois.js'
    },
    waffle_chestnut: {
        id: 'waffle_chestnut',
        name: 'Waffle & Chestnut',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 6,
        group: 'Islands & Outer Realms',
        pointsOfInterest: waffleChestnutData.pointsOfInterest,
        fogOfWar: waffleChestnutData.fogOfWar || [],
        poiSourceFile: 'map-data/waffle-chestnut-pois.js'
    },
    neo_bowser_city: {
        id: 'neo_bowser_city',
        name: 'Neo Bowser City',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 7,
        group: 'Islands & Outer Realms',
        pointsOfInterest: neoBowserCityData.pointsOfInterest,
        fogOfWar: neoBowserCityData.fogOfWar || [],
        poiSourceFile: 'map-data/neo-bowser-city-pois.js'
    },
    ice_ice_outpost: {
        id: 'ice_ice_outpost',
        name: 'Ice Ice Outpost',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 8,
        group: 'Islands & Outer Realms',
        pointsOfInterest: iceIceOutpostData.pointsOfInterest,
        fogOfWar: iceIceOutpostData.fogOfWar || [],
        poiSourceFile: 'map-data/ice-ice-outpost-pois.js'
    },
}
export const MAP_DATA = {
    animatopia_full: {
        id: 'animatopia_full',
        name: 'Animatopia (Full)',
        imageSrc: 'assets/illustrations/remaining/topia.jpg',
        order: 1,
        group: 'Animatopia',
        pointsOfInterest: animatopiaData.pointsOfInterest,
        fogOfWar: animatopiaData.fogOfWar || [],
        poiSourceFile: 'map-data/animatopia-pois.js'
    },
    animatopia_tundratown: {
        id: 'animatopia_tundratown',
        name: 'Tundratown',
        imageSrc: 'assets/illustrations/remaining/topia.jpg',
        order: 2,
        group: 'Animatopia',
        pointsOfInterest: animatopiaData.pointsOfInterest.filter(p => p.subRegion === 'TUNDRATOWN'),
        fogOfWar: [{ id: 'fog_an_tundratown', points: "64.23,1.52 65.60,9.65 61.94,12.90 60.57,16.56 57.14,22.66 56.23,38.51 61.03,44.61 78.41,48.27 82.29,47.05 83.21,41.76 84.58,33.63 85.50,25.50 80.69,14.53 78.64,13.31 63.77,0.70" }],
        poiSourceFile: 'map-data/animatopia-pois.js'
    },
    animatopia_downtown: {
        id: 'animatopia_downtown',
        name: 'Down Town',
        imageSrc: 'assets/illustrations/remaining/topia.jpg',
        order: 3,
        group: 'Animatopia',
        pointsOfInterest: animatopiaData.pointsOfInterest.filter(p => p.subRegion === 'DOWN TOWN'),
        fogOfWar: [{ id: 'fog_an_downtown', points: "56.46,41.36 59.20,42.17 61.03,45.42 62.17,51.11 59.66,61.27 55.08,60.46 52.80,59.24 48.00,56.40 48.00,45.83 48.68,41.76 56.91,42.57 60.11,44.61 62.40,49.89 61.71,55.58 61.03,60.46 56.00,63.71 53.94,62.90 51.20,61.27 49.82,59.24 48.00,56.80" }],
        poiSourceFile: 'map-data/animatopia-pois.js'
    },
    animatopia_savanna_central: {
        id: 'animatopia_savanna_central',
        name: 'Savanna Central',
        imageSrc: 'assets/illustrations/remaining/topia.jpg',
        order: 4,
        group: 'Animatopia',
        pointsOfInterest: animatopiaData.pointsOfInterest.filter(p => p.subRegion === 'SAVANNA CENTRAL'),
        fogOfWar: [{ id: 'fog_an_savanna', points: "50.51,62.49 55.08,64.93 58.74,61.68 60.11,71.03 57.83,78.75 45.71,78.75 44.79,78.35 49.82,82.41 45.02,92.57 36.56,94.20 27.64,87.29 28.79,70.22 31.30,62.90 38.39,56.40 41.59,51.52 42.74,51.92 53.48,63.31 59.43,64.12" }],
        poiSourceFile: 'map-data/animatopia-pois.js'
    },
    animatopia_rainforest: {
        id: 'animatopia_rainforest',
        name: 'Rainforest District',
        imageSrc: 'assets/illustrations/remaining/topia.jpg',
        order: 5,
        group: 'Animatopia',
        pointsOfInterest: animatopiaData.pointsOfInterest.filter(p => p.subRegion === 'Rainforest District'),
        fogOfWar: [{ id: 'fog_an_rainforest', points: "55.77,38.92 54.86,33.63 52.80,25.50 44.79,20.62 42.51,19.00 38.16,16.96 34.28,16.96 26.27,22.25 29.70,29.16 25.82,48.67 26.04,65.34 36.33,57.62 45.48,47.86 46.17,44.61 54.17,39.73 58.06,32.82 56.46,27.13 53.25,20.62 48.91,19.00 45.25,16.96" }],
        poiSourceFile: 'map-data/animatopia-pois.js'
    },
    animatopia_nocturnal: {
        id: 'animatopia_nocturnal',
        name: 'Nocturnal Ranges',
        imageSrc: 'assets/illustrations/remaining/topia.jpg',
        order: 6,
        group: 'Animatopia',
        pointsOfInterest: animatopiaData.pointsOfInterest.filter(p => p.subRegion === 'Nocturnal ranges'),
        fogOfWar: [{ id: 'fog_an_nocturnal', points: "11.64,40.95 20.56,47.05 18.73,61.27 18.04,94.20 1.96,99.77 3.10,87.17" }],
        poiSourceFile: 'map-data/animatopia-pois.js'
    },
    animatopia_outback: {
        id: 'animatopia_outback',
        name: 'Out Back Isle',
        imageSrc: 'assets/illustrations/remaining/topia.jpg',
        order: 7,
        group: 'Animatopia',
        pointsOfInterest: animatopiaData.pointsOfInterest.filter(p => p.subRegion === 'Out back isle'),
        fogOfWar: [{ id: 'fog_an_outback', points: "92.16,96.90 94.29,96.90 97.23,98.52 98.04,89.51 98.24,83.57 96.93,83.39 94.39,87.35 94.19,91.14 92.87,95.82" }],
        poiSourceFile: 'map-data/animatopia-pois.js'
    },
    animatopia_western: {
        id: 'animatopia_western',
        name: 'Western Border',
        imageSrc: 'assets/illustrations/remaining/topia.jpg',
        order: 8,
        group: 'Animatopia',
        pointsOfInterest: animatopiaData.pointsOfInterest.filter(p => p.subRegion === 'Western Border'),
        fogOfWar: [{ id: 'fog_an_western', points: "39.76,3.39 17.87,17.98 15.84,23.93 10.68,43.03 1.66,52.22 1.35,30.59 24.16,1.23" }],
        poiSourceFile: 'map-data/animatopia-pois.js'
    },
    animatopia_eastern: {
        id: 'animatopia_eastern',
        name: 'Eastern Border',
        imageSrc: 'assets/illustrations/remaining/topia.jpg',
        order: 9,
        group: 'Animatopia',
        pointsOfInterest: animatopiaData.pointsOfInterest.filter(p => p.subRegion === 'Eastern Border'),
        fogOfWar: [{ id: 'fog_an_eastern', points: "72.70,1.59 84.86,14.92 90.14,32.04 96.01,41.95 96.42,52.94 99.16,61.95 100.37,62.49 102.70,38.16 99.97,2.31" }],
        poiSourceFile: 'map-data/animatopia-pois.js'
    },
    mushroom_kingdom_full: {
        id: 'mushroom_kingdom_full',
        name: 'Mushroom Kingdom (Full)',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
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
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 2,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mushroomKingdomData.pointsOfInterest,
        fogOfWar: mushroomKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/mushroom-kingdom-pois.js'
    },
    the_north: {
        id: 'the_north',
        name: 'The North',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 3,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: theNorthData.pointsOfInterest,
        fogOfWar: theNorthData.fogOfWar || [],
        poiSourceFile: 'map-data/the-north-pois.js'
    },
    mushroom_city: {
        id: 'mushroom_city',
        name: 'Mushroom City',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 4,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mushroomCityData.pointsOfInterest,
        fogOfWar: mushroomCityData.fogOfWar || [],
        poiSourceFile: 'map-data/mushroom-city-pois.js'
    },
     beanbean_kingdom: {
        id: 'beanbean_kingdom',
        name: 'Beanbean Kingdom',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 5,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: beanbeanKingdomData.pointsOfInterest,
        fogOfWar: beanbeanKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/beanbean-kingdom-pois.js'
    },
    mountain_enclave: {
        id: 'mountain_enclave',
        name: 'Mountain Enclave',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 6,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: mountainEnclaveData.pointsOfInterest,
        fogOfWar: mountainEnclaveData.fogOfWar || [],
        poiSourceFile: 'map-data/mountain-enclave-pois.js'
    },
    dry_dry_desert: {
        id: 'dry_dry_desert',
        name: 'Dry Dry Desert',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 7,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: dryDryDesertData.pointsOfInterest,
        fogOfWar: dryDryDesertData.fogOfWar || [],
        poiSourceFile: 'map-data/dry-dry-desert-pois.js'
    },
    bandits_way: {
        id: 'bandits_way',
        name: 'Bandits Way',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 8,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: banditsWayData.pointsOfInterest,
        fogOfWar: banditsWayData.fogOfWar || [],
        poiSourceFile: 'map-data/bandits-way-pois.js'
    },
    wario_woods: {
        id: 'wario_woods',
        name: 'Wario Woods',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 9,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: warioWoodsData.pointsOfInterest,
        fogOfWar: warioWoodsData.fogOfWar || [],
        poiSourceFile: 'map-data/wario-woods-pois.js'
    },
    arid_coast: {
        id: 'arid_coast',
        name: 'The Arid Coast',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 10,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: aridCoastData.pointsOfInterest,
        fogOfWar: aridCoastData.fogOfWar || [],
        poiSourceFile: 'map-data/arid-coast-pois.js'
    },
    boos_woods: {
        id: 'boos_woods',
        name: 'Boos Woods',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 11,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: boosWoodsData.pointsOfInterest,
        fogOfWar: boosWoodsData.fogOfWar || [],
        poiSourceFile: 'map-data/boos-woods-pois.js'
    },
     pianta_sea: {
        id: 'pianta_sea',
        name: 'The Pianta Sea',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 12,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: piantaSeaData.pointsOfInterest,
        fogOfWar: piantaSeaData.fogOfWar || [],
        poiSourceFile: 'map-data/pianta-sea-pois.js'
    },
    yale_shores: {
        id: 'yale_shores',
        name: 'Yale Shores',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 13,
        group: 'Mushroom Kingdom Regions',
        pointsOfInterest: yaleShoresData.pointsOfInterest,
        fogOfWar: yaleShoresData.fogOfWar || [],
        poiSourceFile: 'map-data/yale-shores-pois.js'
    },
    barrel_volcano: {
        id: 'barrel_volcano',
        name: 'Barrel Volcano',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 1,
        group: 'Islands & Outer Realms',
        pointsOfInterest: barrelVolcanoData.pointsOfInterest,
        fogOfWar: barrelVolcanoData.fogOfWar || [],
        poiSourceFile: 'map-data/barrel-volcano-pois.js'
    },
    seven_kingdoms: {
        id: 'seven_kingdoms',
        name: 'The Seven Kingdoms',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 2,
        group: 'Islands & Outer Realms',
        pointsOfInterest: sevenKingdomsData.pointsOfInterest,
        fogOfWar: sevenKingdomsData.fogOfWar || [],
        poiSourceFile: 'map-data/seven-kingdoms-pois.js'
    },
    sunshine_isles: {
        id: 'sunshine_isles',
        name: 'Sunshine Isles',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 3,
        group: 'Islands & Outer Realms',
        pointsOfInterest: sunshineIslesData.pointsOfInterest,
        fogOfWar: sunshineIslesData.fogOfWar || [],
        poiSourceFile: 'map-data/sunshine-isles-pois.js'
    },
    flower_kingdom: {
        id: 'flower_kingdom',
        name: 'Flower Kingdom',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 4,
        group: 'Islands & Outer Realms',
        pointsOfInterest: flowerKingdomData.pointsOfInterest,
        fogOfWar: flowerKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/flower-kingdom-pois.js'
    },
    yoshi_dk_islands: {
        id: 'yoshi_dk_islands',
        name: 'Yoshi & DKs Islands',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 5,
        group: 'Islands & Outer Realms',
        pointsOfInterest: yoshiDkIslandsData.pointsOfInterest,
        fogOfWar: yoshiDkIslandsData.fogOfWar || [],
        poiSourceFile: 'map-data/yoshi-dk-islands-pois.js'
    },
    waffle_chestnut: {
        id: 'waffle_chestnut',
        name: 'Waffle & Chestnut',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 6,
        group: 'Islands & Outer Realms',
        pointsOfInterest: waffleChestnutData.pointsOfInterest,
        fogOfWar: waffleChestnutData.fogOfWar || [],
        poiSourceFile: 'map-data/waffle-chestnut-pois.js'
    },
    neo_bowser_city: {
        id: 'neo_bowser_city',
        name: 'Neo Bowser City',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 7,
        group: 'Islands & Outer Realms',
        pointsOfInterest: neoBowserCityData.pointsOfInterest,
        fogOfWar: neoBowserCityData.fogOfWar || [],
        poiSourceFile: 'map-data/neo-bowser-city-pois.js'
    },
    ice_ice_outpost: {
        id: 'ice_ice_outpost',
        name: 'Ice Ice Outpost',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 8,
        group: 'Islands & Outer Realms',
        pointsOfInterest: iceIceOutpostData.pointsOfInterest,
        fogOfWar: iceIceOutpostData.fogOfWar || [],
        poiSourceFile: 'map-data/ice-ice-outpost-pois.js'
    },
    midlands_full: {
        id: 'midlands_full',
        name: 'The Midlands (Full)',
        imageSrc: 'assets/maps/fullmap.png',
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
        imageSrc: 'assets/maps/fullmap.png',
        order: 2,
        group: 'The Midlands',
        pointsOfInterest: midlandsData.pointsOfInterest,
        fogOfWar: midlandsData.fogOfWar,
        poiSourceFile: 'map-data/midlands-pois.js'
    },
    yal_belanor: {
        id: 'yal_belanor',
        name: 'Yal Belanor',
        imageSrc: 'assets/maps/fullmap.png',
        order: 3,
        group: 'The Midlands',
        pointsOfInterest: yalBelanorData.pointsOfInterest,
        fogOfWar: yalBelanorData.fogOfWar,
        poiSourceFile: 'map-data/yal-belanor-pois.js'
    },
    vemillia: {
        id: 'vemillia',
        name: 'Vemilia',
        imageSrc: 'assets/maps/fullmap.png',
        order: 4,
        group: 'The Midlands',
        pointsOfInterest: vemilliaData.pointsOfInterest,
        fogOfWar: vemilliaData.fogOfWar,
        poiSourceFile: 'map-data/vemillia-pois.js'
    },
    ironwood: {
        id: 'ironwood',
        name: 'Ironwood',
        imageSrc: 'assets/maps/fullmap.png',
        order: 5,
        group: 'The Midlands',
        pointsOfInterest: ironwoodData.pointsOfInterest,
        fogOfWar: ironwoodData.fogOfWar,
        poiSourceFile: 'map-data/ironwood-pois.js'
    },
    lockerwood: {
        id: 'lockerwood',
        name: 'Lockerwood',
        imageSrc: 'assets/maps/fullmap.png',
        order: 6,
        group: 'The Midlands',
        pointsOfInterest: lockerwoodData.pointsOfInterest,
        fogOfWar: lockerwoodData.fogOfWar,
        poiSourceFile: 'map-data/lockerwood-pois.js'
    },
     dragon_mountain: {
        id: 'dragon_mountain',
        name: 'Dragon Mountain',
        imageSrc: 'assets/maps/fullmap.png',
        order: 7,
        group: 'The Midlands',
        pointsOfInterest: dragonMountainData.pointsOfInterest,
        fogOfWar: dragonMountainData.fogOfWar,
        poiSourceFile: 'map-data/dragon-mountain-pois.js'
    },
    autumnwood: {
        id: 'autumnwood',
        name: 'Autumnwood',
        imageSrc: 'assets/maps/fullmap.png',
        order: 8,
        group: 'The Midlands',
        pointsOfInterest: autumnwoodData.pointsOfInterest,
        fogOfWar: autumnwoodData.fogOfWar,
        poiSourceFile: 'map-data/autumnwood-pois.js'
    },
    dry_county: {
        id: 'dry_county',
        name: 'Dry County',
        imageSrc: 'assets/maps/fullmap.png',
        order: 9,
        group: 'The Midlands',
        pointsOfInterest: dryCountyData.pointsOfInterest,
        fogOfWar: dryCountyData.fogOfWar,
        poiSourceFile: 'map-data/dry-county-pois.js'
    },
    theghdural: {
        id: 'theghdural',
        name: 'Theghdural',
        imageSrc: 'assets/maps/fullmap.png',
        order: 10,
        group: 'The Midlands',
        pointsOfInterest: theghduralData.pointsOfInterest,
        fogOfWar: theghduralData.fogOfWar,
        poiSourceFile: 'map-data/theghdural-pois.js'
    },
    jungle_of_thorns: {
        id: 'jungle_of_thorns',
        name: 'Jungle of Thorns',
        imageSrc: 'assets/maps/fullmap.png',
        order: 11,
        group: 'The Midlands',
        pointsOfInterest: jungleOfThornsData.pointsOfInterest,
        fogOfWar: jungleOfThornsData.fogOfWar,
        poiSourceFile: 'map-data/jungle-of-thorns-pois.js'
    },
    ludor_isles: {
        id: 'ludor_isles',
        name: 'Ludor Isles',
        imageSrc: 'assets/maps/fullmap.png',
        order: 12,
        group: 'The Midlands',
        pointsOfInterest: ludorIslesData.pointsOfInterest,
        fogOfWar: ludorIslesData.fogOfWar,
        poiSourceFile: 'map-data/ludor-isles-pois.js'
    },
    baldora_plains: {
        id: 'baldora_plains',
        name: 'Baldora Plains',
        imageSrc: 'assets/maps/fullmap.png',
        order: 13,
        group: 'The Midlands',
        pointsOfInterest: baldoraPlainsData.pointsOfInterest,
        fogOfWar: baldoraPlainsData.fogOfWar,
        poiSourceFile: 'map-data/baldora-plains-pois.js'
    },
    lower_hills: {
        id: 'lower_hills',
        name: 'Lower Hills',
        imageSrc: 'assets/maps/fullmap.png',
        order: 14,
        group: 'The Midlands',
        pointsOfInterest: lowerHillsData.pointsOfInterest,
        fogOfWar: lowerHillsData.fogOfWar,
        poiSourceFile: 'map-data/lower-hills-pois.js'
    },
    yal_central: {
        id: 'yal_central',
        name: 'Yal Central',
        imageSrc: 'assets/maps/fullmap.png',
        order: 15,
        group: 'The Midlands',
        pointsOfInterest: yalCentralData.pointsOfInterest,
        fogOfWar: yalCentralData.fogOfWar,
        poiSourceFile: 'map-data/yal-central-pois.js'
    },
    northern_lands: {
        id: 'northern_lands',
        name: 'The Northern Lands',
        imageSrc: 'assets/maps/fullmap.png',
        order: 16,
        group: 'The Midlands',
        pointsOfInterest: northernLandsData.pointsOfInterest,
        fogOfWar: northernLandsData.fogOfWar,
        poiSourceFile: 'map-data/northern-lands-pois.js'
    },
    chramalot_kingdom: {
        id: 'chramalot_kingdom',
        name: 'Chramalot Kingdom',
        imageSrc: 'assets/maps/mushroom_kingdom.jpg',
        order: 9,
        group: 'Islands & Outer Realms',
        pointsOfInterest: chramalotKingdomData.pointsOfInterest,
        fogOfWar: chramalotKingdomData.fogOfWar || [],
        poiSourceFile: 'map-data/chramalot-kingdom-pois.js'
    },
    middle_earth_full: {
        id: 'middle_earth_full',
        name: 'Middle-earth (Full)',
        imageSrc: 'assets/illustrations/remaining/mide.webp',
        order: 1,
        group: 'Middle-earth',
        pointsOfInterest: [
            ...middleEarthData.pointsOfInterest,
            ...umbarData.pointsOfInterest,
            ...gondorData.pointsOfInterest,
            ...rhovanionData.pointsOfInterest,
            ...mordorData.pointsOfInterest,
            ...haradwaithData.pointsOfInterest,
        ],
        fogOfWar: [
            ...middleEarthData.fogOfWar,
            ...(umbarData.fogOfWar || []),
            ...(gondorData.fogOfWar || []),
            ...(rhovanionData.fogOfWar || []),
            ...(mordorData.fogOfWar || []),
            ...(haradwaithData.fogOfWar || []),
        ],
        poiSourceFile: 'map-data/middle-earth-pois.js'
    },
    forlindon: {
        id: 'forlindon',
        name: 'Forlindon',
        imageSrc: 'assets/illustrations/remaining/mide.webp',
        order: 2,
        group: 'Middle-earth',
        pointsOfInterest: middleEarthData.pointsOfInterest.filter(p => p.subRegion === 'forlindon'),
        fogOfWar: [],
        poiSourceFile: 'map-data/middle-earth/Forlindon.js'
    },
    eriador: {
        id: 'eriador',
        name: 'Eriador',
        imageSrc: 'assets/illustrations/remaining/mide.webp',
        order: 3,
        group: 'Middle-earth',
        pointsOfInterest: middleEarthData.pointsOfInterest.filter(p => p.subRegion === 'eriador'),
        fogOfWar: [],
        poiSourceFile: 'map-data/middle-earth/Eriador.js'
    },
    haradwaith: {
        id: 'haradwaith',
        name: 'Haradwaith',
        imageSrc: 'assets/illustrations/remaining/mide.webp',
        order: 4,
        group: 'Middle-earth',
        pointsOfInterest: haradwaithData.pointsOfInterest,
        fogOfWar: haradwaithData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Haradwaith.js'
    },
    umbar: {
        id: 'umbar',
        name: 'Umbar',
        imageSrc: 'assets/illustrations/remaining/mide.webp',
        order: 5,
        group: 'Middle-earth',
        pointsOfInterest: umbarData.pointsOfInterest,
        fogOfWar: umbarData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Umbar.js'
    },
    gondor: {
        id: 'gondor',
        name: 'Gondor',
        imageSrc: 'assets/illustrations/remaining/mide.webp',
        order: 6,
        group: 'Middle-earth',
        pointsOfInterest: gondorData.pointsOfInterest,
        fogOfWar: gondorData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Gondor.js'
    },
    rhovanion: {
        id: 'rhovanion',
        name: 'Rhovanion',
        imageSrc: 'assets/illustrations/remaining/mide.webp',
        order: 7,
        group: 'Middle-earth',
        pointsOfInterest: rhovanionData.pointsOfInterest,
        fogOfWar: rhovanionData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Rhovanion.js'
    },
    mordor: {
        id: 'mordor',
        name: 'The Land of Mordor',
        imageSrc: 'assets/illustrations/remaining/mide.webp',
        order: 8,
        group: 'Middle-earth',
        pointsOfInterest: mordorData.pointsOfInterest,
        fogOfWar: mordorData.fogOfWar,
        poiSourceFile: 'map-data/middle-earth/Mordor.js'
    },
    kivotos_full: {
        id: 'kivotos_full',
        name: 'Kivotos (Full)',
        imageSrc: 'assets/illustrations/remaining/archive.png',
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
        imageSrc: 'assets/illustrations/remaining/archive.png',
        order: 2,
        group: 'Kivotos',
        pointsOfInterest: kivotosCentralData.pointsOfInterest,
        fogOfWar: kivotosCentralData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/Kivotos.js'
    },
    grand_latin: {
        id: 'grand_latin',
        name: 'Grand Latin',
        imageSrc: 'assets/illustrations/remaining/archive.png',
        order: 3,
        group: 'Kivotos',
        pointsOfInterest: grandLatinData.pointsOfInterest,
        fogOfWar: grandLatinData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/GrandLatin.js'
    },
    austelarassia: {
        id: 'austelarassia',
        name: 'Austelarassia',
        imageSrc: 'assets/illustrations/remaining/archive.png',
        order: 4,
        group: 'Kivotos',
        pointsOfInterest: austelarassiaData.pointsOfInterest,
        fogOfWar: austelarassiaData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/Austelarassia.js'
    },
    silbaarstadt: {
        id: 'silbaarstadt',
        name: 'Silbaarstadt',
        imageSrc: 'assets/illustrations/remaining/archive.png',
        order: 5,
        group: 'Kivotos',
        pointsOfInterest: silbaarstadtData.pointsOfInterest,
        fogOfWar: silbaarstadtData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/Silbaarstadt.js'
    },
    al_haoung: {
        id: 'al_haoung',
        name: 'AL-haoung',
        imageSrc: 'assets/illustrations/remaining/archive.png',
        order: 6,
        group: 'Kivotos',
        pointsOfInterest: alhaoungData.pointsOfInterest,
        fogOfWar: alhaoungData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/AL_haoung.js'
    },
    northern_aurean_pole: {
        id: 'northern_aurean_pole',
        name: 'Northern Aurean Pole',
        imageSrc: 'assets/illustrations/remaining/archive.png',
        order: 7,
        group: 'Kivotos',
        pointsOfInterest: northernAureanPoleData.pointsOfInterest,
        fogOfWar: northernAureanPoleData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/NorthernAureanPole.js'
    },
    new_cairo: {
        id: 'new_cairo',
        name: 'New Cairo',
        imageSrc: 'assets/illustrations/remaining/archive.png',
        order: 8,
        group: 'Kivotos',
        pointsOfInterest: newCairoData.pointsOfInterest,
        fogOfWar: newCairoData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/NewCairo.js'
    },
    new_america: {
        id: 'new_america',
        name: 'New America',
        imageSrc: 'assets/illustrations/remaining/archive.png',
        order: 9,
        group: 'Kivotos',
        pointsOfInterest: newAmericaData.pointsOfInterest,
        fogOfWar: newAmericaData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/NewAmerica.js'
    },
    southern_aurean_pole: {
        id: 'southern_aurean_pole',
        name: 'Southern Aurean Pole',
        imageSrc: 'assets/illustrations/remaining/archive.png',
        order: 10,
        group: 'Kivotos',
        pointsOfInterest: southernAureanPoleData.pointsOfInterest,
        fogOfWar: southernAureanPoleData.fogOfWar,
        poiSourceFile: 'map-data/kivotos/SouthernAureanPole.js'
    },
    internet_full: {
        id: 'internet_full',
        name: 'The Internet (Full)',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 1,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest,
        fogOfWar: internetData.fogOfWar || [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_border: {
        id: 'internet_border',
        name: 'The Border',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 2,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'border'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_surface_web: {
        id: 'internet_surface_web',
        name: 'The Surface Web',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 3,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'surface_web'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_sea_of_archives: {
        id: 'internet_sea_of_archives',
        name: 'Sea of Archives',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 4,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'sea_of_archives'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_big_tech: {
        id: 'internet_big_tech',
        name: 'Big Tech Region',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 5,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'big_tech'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_apple_island: {
        id: 'internet_apple_island',
        name: 'Apple Island',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 6,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'apple_island'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_intel_corp: {
        id: 'internet_intel_corp',
        name: 'Intel Corp. Zone',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 7,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'intel_corp'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_deviant_web: {
        id: 'internet_deviant_web',
        name: 'The Deviant Web',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 8,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'deviant_web'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_criminal_web: {
        id: 'internet_criminal_web',
        name: 'The Criminal Web',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 9,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'criminal_web'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_deep_web: {
        id: 'internet_deep_web',
        name: 'The Deep Web',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 10,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'deep_web'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_capitol: {
        id: 'internet_capitol',
        name: 'The Capitol',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 11,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'capitol'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    internet_wastefill: {
        id: 'internet_wastefill',
        name: 'Great Southern Wastefill',
        imageSrc: 'assets/maps/intermap.jpg',
        order: 12,
        group: 'The Internet',
        pointsOfInterest: internetData.pointsOfInterest.filter(p => p.subRegion === 'wastefill'),
        fogOfWar: [],
        poiSourceFile: 'map-data/internet-pois.js'
    },
    warhammer_full: {
        id: 'warhammer_full',
        name: 'The Old World (Full)',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 1,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest,
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_empire: {
        id: 'warhammer_empire',
        name: 'The Empire',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 2,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'the_empire'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_worlds_edge: {
        id: 'warhammer_worlds_edge',
        name: 'Worlds Edge Mtns.',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 3,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'worlds_edge'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_sylvania: {
        id: 'warhammer_sylvania',
        name: 'Sylvania',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 4,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'sylvania'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_badlands: {
        id: 'warhammer_badlands',
        name: 'The Badlands',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 5,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'badlands'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_ulthuan: {
        id: 'warhammer_ulthuan',
        name: 'Ulthuan',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 6,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'ulthuan'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_naggaroth: {
        id: 'warhammer_naggaroth',
        name: 'Naggaroth',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 7,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'naggaroth'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_lustria: {
        id: 'warhammer_lustria',
        name: 'Lustria',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 8,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'lustria'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_land_of_the_dead: {
        id: 'warhammer_land_of_the_dead',
        name: 'Land of the Dead',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 9,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'land_of_the_dead'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_araby: {
        id: 'warhammer_araby',
        name: 'Araby',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 10,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'araby'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_southlands: {
        id: 'warhammer_southlands',
        name: 'The Southlands',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 11,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'southlands'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_bretonnia: {
        id: 'warhammer_bretonnia',
        name: 'Bretonnia',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 12,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'bretonnia'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_darklands: {
        id: 'warhammer_darklands',
        name: 'The Darklands',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 13,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'darklands'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_ancient_giant_land: {
        id: 'warhammer_ancient_giant_land',
        name: 'Ancient Giant Land',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 14,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'ancient_giant_land'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_grand_cathay: {
        id: 'warhammer_grand_cathay',
        name: 'Grand Cathay',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 15,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'grand_cathay'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_eastern_steppes: {
        id: 'warhammer_eastern_steppes',
        name: 'Eastern Steppes',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 16,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'eastern_steppes'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    warhammer_great_bastion: {
        id: 'warhammer_great_bastion',
        name: 'The Great Bastion',
        imageSrc: 'assets/illustrations/remaining/wa.jpg',
        order: 17,
        group: 'The Fated Place',
        pointsOfInterest: warhammerData.pointsOfInterest.filter(p => p.subRegion === 'great_bastion'),
        poiSourceFile: 'map-data/warhammer-pois.js'
    },
    doughnut_hole_full: {
        id: 'doughnut_hole_full',
        name: 'The Doughnut Hole (Full)',
        imageSrc: 'assets/illustrations/remaining/qaevyh08hsx51.webp',
        order: 1,
        group: 'The Doughnut Hole',
        pointsOfInterest: doughnutHoleData.pointsOfInterest,
        fogOfWar: doughnutHoleData.fogOfWar || [],
        poiSourceFile: 'map-data/doughnut-hole.js'
    },
    jesters_playground: {
        id: 'jesters_playground',
        name: "The Jester's Playground",
        imageSrc: 'assets/illustrations/remaining/qaevyh08hsx51.webp',
        order: 2,
        group: 'The Doughnut Hole',
        pointsOfInterest: jestersPlaygroundPois,
        poiSourceFile: 'map-data/doughnut-hole/jesters_playground.js'
    },
    causality_chain: {
        id: 'causality_chain',
        name: "The Causality Chain",
        imageSrc: 'assets/illustrations/remaining/qaevyh08hsx51.webp',
        order: 3,
        group: 'The Doughnut Hole',
        pointsOfInterest: causalityChainPois,
        poiSourceFile: 'map-data/doughnut-hole/causality_chain.js'
    },
    drifters_debris_field: {
        id: 'drifters_debris_field',
        name: "Drifter's Debris Field",
        imageSrc: 'assets/illustrations/remaining/qaevyh08hsx51.webp',
        order: 4,
        group: 'The Doughnut Hole',
        pointsOfInterest: driftersDebrisFieldPois,
        poiSourceFile: 'map-data/doughnut-hole/drifters_debris_field.js'
    },
    weavers_tapestry: {
        id: 'weavers_tapestry',
        name: "The Weaver's Tapestry",
        imageSrc: 'assets/illustrations/remaining/qaevyh08hsx51.webp',
        order: 5,
        group: 'The Doughnut Hole',
        pointsOfInterest: weaversTapestryPois,
        poiSourceFile: 'map-data/doughnut-hole/weavers_tapestry.js'
    },
    outer_anomaly: {
        id: 'outer_anomaly',
        name: "The Outer Anomaly",
        imageSrc: 'assets/illustrations/remaining/qaevyh08hsx51.webp',
        order: 6,
        group: 'The Doughnut Hole',
        pointsOfInterest: outerAnomalyPois,
        poiSourceFile: 'map-data/doughnut-hole/outer_anomaly.js'
    },
    pokemon_full: {
        id: 'pokemon_full',
        name: 'Pokémon Regions (Full)',
        imageSrc: 'assets/maps/pokemon.png',
        order: 1,
        group: 'Pokémon Regions',
        pointsOfInterest: pokemonData.pointsOfInterest,
        fogOfWar: [],
        poiSourceFile: null
    },
    unova: {
        id: 'unova',
        name: 'Unova Region',
        imageSrc: 'assets/maps/pokemon.png',
        order: 2,
        group: 'Pokémon Regions',
        pointsOfInterest: unovaPois,
        fogOfWar: [],
        poiSourceFile: 'map-data/pokemon/unova.js'
    },
    oore: {
        id: 'oore',
        name: 'Oore Region',
        imageSrc: 'assets/maps/pokemon.png',
        order: 3,
        group: 'Pokémon Regions',
        pointsOfInterest: oorePois,
        fogOfWar: [],
        poiSourceFile: 'map-data/pokemon/oore.js'
    },
    kalos_johto_kanto_paldea: {
        id: 'kalos_johto_kanto_paldea',
        name: 'Kalos, Johto, Kanto, & Paldea',
        imageSrc: 'assets/maps/pokemon.png',
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
        imageSrc: 'assets/maps/pokemon.png',
        order: 5,
        group: 'Pokémon Regions',
        pointsOfInterest: hoennPois,
        fogOfWar: [],
        poiSourceFile: 'map-data/pokemon/hoenn.js'
    },
    fiore_almia: {
        id: 'fiore_almia',
        name: 'Fiore & Almia',
        imageSrc: 'assets/maps/pokemon.png',
        order: 6,
        group: 'Pokémon Regions',
        pointsOfInterest: [ ...fiorePois, ...almiaPois ],
        fogOfWar: [],
        poiSourceFile: null
    },
    mountain_savana: {
        id: 'mountain_savana',
        name: 'Mountain Savana',
        imageSrc: 'assets/maps/pokemon.png',
        order: 7,
        group: 'Pokémon Regions',
        pointsOfInterest: mountainSavanaPois,
        fogOfWar: [],
        poiSourceFile: 'map-data/pokemon/mountain_savana.js'
    },
    almost_edge_full: {
        id: 'almost_edge_full',
        name: 'Almost at the Edge',
        imageSrc: 'assets/illustrations/edge.jpg',
        order: 1,
        group: 'The Edge Regions',
        pointsOfInterest: almostEdgeData.pointsOfInterest,
        fogOfWar: almostEdgeData.fogOfWar || [],
        poiSourceFile: 'map-data/almost-edge-pois.js'
    },
    the_edge_full: {
        id: 'the_edge_full',
        name: 'The Edge',
        imageSrc: 'assets/illustrations/remaining/edge.avif',
        order: 2,
        group: 'The Edge Regions',
        pointsOfInterest: theEdgeData.pointsOfInterest,
        fogOfWar: theEdgeData.fogOfWar || [],
        poiSourceFile: 'map-data/the-edge-pois.js'
    },
    connectopia_full: {
        id: 'connectopia_full',
        name: 'Connectopia',
        imageSrc: 'assets/maps/connectopia.png',
        order: 1,
        group: 'Connectopia',
        pointsOfInterest: connectopiaData.pointsOfInterest,
        fogOfWar: connectopiaData.fogOfWar || [],
        poiSourceFile: 'map-data/connectopia-pois.js'
    },
   earth_land_full: {
        id: 'earth_land_full',
        name: 'Earth Land',
        imageSrc: 'assets/illustrations/earth_land.png',
        order: 1,
        group: 'Earth Land',
        pointsOfInterest: [
            ...earthLandData.pointsOfInterest,
            ...northAmericaData.pointsOfInterest,
            ...southAmericaData.pointsOfInterest,
            ...africaData.pointsOfInterest,
            ...asiaData.pointsOfInterest,
            ...azaniaData.pointsOfInterest,
            ...terraNovaData.pointsOfInterest,
            ...atenData.pointsOfInterest,
            ...anubisData.pointsOfInterest,
            ...amunRaData.pointsOfInterest,
            ...horusData.pointsOfInterest,
            ...tothData.pointsOfInterest,
            ...apisiaData.pointsOfInterest,
            ...minMnevisData.pointsOfInterest,
            ...muData.pointsOfInterest,
            ...greaterLemuriaData.pointsOfInterest,
            ...isleOfBlessedData.pointsOfInterest,
            ...avalOnsData.pointsOfInterest,
            ...scyllaCharybdisData.pointsOfInterest,
            ...gardenIslesData.pointsOfInterest,
            ...crimisionIsleData.pointsOfInterest,
            ...xenonesiaData.pointsOfInterest,
            ...geminiaData.pointsOfInterest,
            ...uData.pointsOfInterest,
            ...polybiusData.pointsOfInterest,
            ...eiwassData.pointsOfInterest,
            ...oraculaData.pointsOfInterest,
            ...asclepiaData.pointsOfInterest,
            ...minervaData.pointsOfInterest,
            ...asgardData.pointsOfInterest,
            ...jotunheimrData.pointsOfInterest,
            ...skycavernsData.pointsOfInterest,
            ...sirsirianOceanData.pointsOfInterest,
            ...pitatiaData.pointsOfInterest,
            ...refijiaData.pointsOfInterest,
            ...robensoniaData.pointsOfInterest,
            ...glarniaData.pointsOfInterest,
            ...weldrhomData.pointsOfInterest,
            ...formosaUltimaData.pointsOfInterest
        ],
        fogOfWar: [

        ],
        poiSourceFile: 'map-data/earth-land-pois.js'
    },
    faerun_full: {
        id: 'faerun_full',
        name: 'Faerûn',
        imageSrc: 'assets/maps/faerun.png',
        order: 1,
        group: 'Faerûn',
        pointsOfInterest: faerunData.pointsOfInterest,
        fogOfWar: faerunData.fogOfWar || [],
        poiSourceFile: 'map-data/faerun-pois.js'
    },
    leclaire_isle_full: {
        id: 'leclaire_isle_full',
        name: 'L\'Eclaire Isle',
        imageSrc: 'assets/maps/leclaire_isle.png',
        order: 1,
        group: 'L\'Eclaire Isle',
        pointsOfInterest: leclaireIsleData.pointsOfInterest,
        fogOfWar: leclaireIsleData.fogOfWar || [],
        poiSourceFile: 'map-data/leclaire-isle-pois.js'
    },
    teyvat_full: {
        id: 'teyvat_full',
        name: 'Teyvat',
        imageSrc: 'assets/maps/teyvat.png',
        order: 1,
        group: 'Teyvat',
        pointsOfInterest: teyvatData.pointsOfInterest,
        fogOfWar: teyvatData.fogOfWar || [],
        poiSourceFile: 'map-data/teyvat-pois.js'
    },
    equestria_full: {
        id: 'equestria_full',
        name: 'Equestria',
        imageSrc: 'assets/maps/equestria.png',
        order: 1,
        group: 'Equestria',
    pointsOfInterest: [
        ...(cenerlotData.pointsOfInterest || []),
        ...(mountEverhoofData.pointsOfInterest || []),
        ...(hailbregData.pointsOfInterest || []),
        ...(wanderingWoodsData.pointsOfInterest || []),
        ...(jackalopeSlopesData.pointsOfInterest || []),
        ...(siresHollowData.pointsOfInterest || []),
        ...(farasiData.pointsOfInterest || []),
        ...(zebrabweData.pointsOfInterest || []),
        ...(saddleArabiaData.pointsOfInterest || []),
        ...(boneDryDesertData.pointsOfInterest || []),
        ...(appledoosaData.pointsOfInterest || []),
        ...(seaPalominoDesertData.pointsOfInterest || []),
        ...(badlandsData.pointsOfInterest || []),
        ...(southCentralParkData.pointsOfInterest || []),
        ...(stormKingsRealmData.pointsOfInterest || []),
        ...(greatBlizzardBarreaerData.pointsOfInterest || []),
        ...(desolateWastelandData.pointsOfInterest || []),
        ...(mountMetazoaData.pointsOfInterest || []),
        ...(sugarMapleGroveData.pointsOfInterest || []),
        ...(griffinstoneData.pointsOfInterest || []),
        ...(thraceData.pointsOfInterest || []),
        ...(greatIcePlatauData.pointsOfInterest || []),
        ...(halfingerGroveData.pointsOfInterest || []),
        ...(trottingTerriansData.pointsOfInterest || []),
        ...(abyssiniaData.pointsOfInterest || []),
        ...(ngAmiaData.pointsOfInterest || []),
        ...(shireLankaData.pointsOfInterest || []),
        ...(riverlandsData.pointsOfInterest || [])
        ],
        fogOfWar: [
            ...(cenerlotData.fogOfWar || []),
            ...(mountEverhoofData.fogOfWar || []),
            ...(hailbregData.fogOfWar || []),
            ...(wanderingWoodsData.fogOfWar || []),
            ...(jackalopeSlopesData.fogOfWar || []),
            ...(siresHollowData.fogOfWar || []),
            ...(farasiData.fogOfWar || []),
            ...(zebrabweData.fogOfWar || []),
            ...(saddleArabiaData.fogOfWar || []),
            ...(boneDryDesertData.fogOfWar || []),
            ...(appledoosaData.fogOfWar || []),
            ...(seaPalominoDesertData.fogOfWar || []),
            ...(badlandsData.fogOfWar || []),
            ...(southCentralParkData.fogOfWar || []),
            ...(stormKingsRealmData.fogOfWar || []),
            ...(greatBlizzardBarreaerData.fogOfWar || []),
            ...(desolateWastelandData.fogOfWar || []),
            ...(mountMetazoaData.fogOfWar || []),
            ...(sugarMapleGroveData.fogOfWar || []),
            ...(griffinstoneData.fogOfWar || []),
            ...(thraceData.fogOfWar || []),
            ...(greatIcePlatauData.fogOfWar || [])
        ],
        poiSourceFile: 'map-data/equestria-pois.js'
    },
    equestria_cenerlot: {
        id: 'equestria_cenerlot',
        name: 'Cenerlot (Capital)',
        imageSrc: 'assets/maps/equestria.png',
        order: 2,
        group: 'Equestria',
        pointsOfInterest: cenerlotData.pointsOfInterest,
        fogOfWar: cenerlotData.fogOfWar || [],
        poiSourceFile: 'map-data/equestria/Cenerlot.js'
    },
    equestria_mount_everhoof: {
        id: 'equestria_mount_everhoof',
        name: 'Mount Everhoof',
        imageSrc: 'assets/maps/equestria.png',
        order: 3,
        group: 'Equestria',
        pointsOfInterest: mountEverhoofData.pointsOfInterest,
        fogOfWar: mountEverhoofData.fogOfWar || [],
        poiSourceFile: 'map-data/equestria/MountEverhoof.js'
    },
    equestria_hailbreg: {
        id: 'equestria_hailbreg',
        name: 'Hailbreg',
        imageSrc: 'assets/maps/equestria.png',
        order: 4,
        group: 'Equestria',
        pointsOfInterest: hailbregData.pointsOfInterest,
        fogOfWar: hailbregData.fogOfWar || [],
        poiSourceFile: 'map-data/equestria/Hailbreg.js'
    },
    equestria_wandering_woods: {
        id: 'equestria_wandering_woods',
        name: 'Wandering Woods',
        imageSrc: 'assets/maps/equestria.png',
        order: 5,
        group: 'Equestria',
        pointsOfInterest: wanderingWoodsData.pointsOfInterest,
        fogOfWar: wanderingWoodsData.fogOfWar || [],
        poiSourceFile: 'map-data/equestria/WanderingWoods.js'
    },
    equestria_jackalope_slopes: {
        id: 'equestria_jackalope_slopes',
        name: 'Jackalope Slopes',
        imageSrc: 'assets/maps/equestria.png',
        order: 6,
        group: 'Equestria',
        pointsOfInterest: jackalopeSlopesData.pointsOfInterest,
        fogOfWar: jackalopeSlopesData.fogOfWar || [],
        poiSourceFile: 'map-data/equestria/JackalopeSlopes.js'
    },
    equestria_sires_hollow: {
        id: 'equestria_sires_hollow',
        name: 'Sires Hollow',
        imageSrc: 'assets/maps/equestria.png',
        order: 7,
        group: 'Equestria',
        pointsOfInterest: siresHollowData.pointsOfInterest,
        fogOfWar: siresHollowData.fogOfWar || [],
        poiSourceFile: 'map-data/equestria/SiresHollow.js'
    },
    equestria_farasi: {
        id: 'equestria_farasi',
        name: 'Farasi',
        imageSrc: 'assets/maps/equestria.png',
        order: 8,
        group: 'Equestria',
        pointsOfInterest: farasiData.pointsOfInterest,
        fogOfWar: farasiData.fogOfWar || [],
        poiSourceFile: 'map-data/equestria/Farasi.js'
    },
    equestria_zebrabwe: {
        id: 'equestria_zebrabwe',
        name: 'Zebrabwe',
        imageSrc: 'assets/maps/equestria.png',
        order: 9,
        group: 'Equestria',
        pointsOfInterest: zebrabweData.pointsOfInterest,
        fogOfWar: zebrabweData.fogOfWar || [],
        poiSourceFile: 'map-data/equestria/Zebrabwe.js'
    },
    equestria_saddle_arabia: {
        id: 'equestria_saddle_arabia',
        name: 'Saddle Arabia',
        imageSrc: 'assets/maps/equestria.png',
        order: 10,
        group: 'Equestria',
        pointsOfInterest: saddleArabiaData.pointsOfInterest,
        fogOfWar: saddleArabiaData.fogOfWar || [],
        poiSourceFile: 'map-data/equestria/SaddleArabia.js'
    },
    equestria_bone_dry_desert: {
        id: 'equestria_bone_dry_desert',
        name: 'Bone Dry Desert',
        imageSrc: 'assets/maps/equestria.png',
        order: 11,
        group: 'Equestria',
        pointsOfInterest: boneDryDesertData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_bone_dry_desert', points: "36.82,64.82 40.48,63.30 43.66,63.51 48.78,65.25 51.34,63.95 51.71,70.67 53.78,76.96 50.00,76.75 46.46,75.23 45.12,75.23 41.95,77.40 38.90,79.13 37.07,78.92 35.60,68.07 35.60,64.38" }],
        poiSourceFile: 'map-data/equestria/BoneDryDesert.js'
    },
    equestria_appledoosa: {
        id: 'equestria_appledoosa',
        name: 'Appledoosa',
        imageSrc: 'assets/maps/equestria.png',
        order: 12,
        group: 'Equestria',
        pointsOfInterest: appledoosaData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_appledoosa', points: "41.83,39.22 40.00,44.43 40.24,48.55 43.90,47.90 46.22,43.99 47.32,43.12 42.56,39.00" }],
        poiSourceFile: 'map-data/equestria/Appledoosa.js'
    },
    equestria_sea_palomino_desert: {
        id: 'equestria_sea_palomino_desert',
        name: 'Sea Palomino Desert',
        imageSrc: 'assets/maps/equestria.png',
        order: 13,
        group: 'Equestria',
        pointsOfInterest: seaPalominoDesertData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_sea_palomino_desert', points: "32.80,44.43 36.82,43.34 37.19,47.46 35.11,50.50 32.80,53.10 30.48,52.02 30.84,46.59" }],
        poiSourceFile: 'map-data/equestria/SeaPalominoDesert.js'
    },
    equestria_badlands: {
        id: 'equestria_badlands',
        name: 'Badlands',
        imageSrc: 'assets/maps/equestria.png',
        order: 14,
        group: 'Equestria',
        pointsOfInterest: badlandsData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_badlands', points: "45.73,48.76 49.63,43.12 51.22,48.76 51.10,54.62 48.17,55.49 45.73,50.50" }],
        poiSourceFile: 'map-data/equestria/Badlands.js'
    },
    equestria_south_central_park: {
        id: 'equestria_south_central_park',
        name: 'South Central Park',
        imageSrc: 'assets/maps/equestria.png',
        order: 15,
        group: 'Equestria',
        pointsOfInterest: southCentralParkData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_south_central_park', points: "40.73,80.22 43.41,76.53 48.66,77.40 53.78,76.75 53.66,89.33 47.44,89.76 41.58,82.17" }],
        poiSourceFile: 'map-data/equestria/SouthCentralPark.js'
    },
    equestria_storm_kings_realm: {
        id: 'equestria_storm_kings_realm',
        name: 'Storm Kings Realm',
        imageSrc: 'assets/maps/equestria.png',
        order: 16,
        group: 'Equestria',
        pointsOfInterest: stormKingsRealmData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_storm_kings_realm', points: "31.82,88.68 32.80,92.15 35.48,96.05 37.55,96.70 39.02,93.67 37.07,86.29 32.67,88.89" }],
        poiSourceFile: 'map-data/equestria/StormKingsRealm.js'
    },
    equestria_great_blizzard_barreaer: {
        id: 'equestria_great_blizzard_barreaer',
        name: 'Great Blizzard Barreaer',
        imageSrc: 'assets/maps/equestria.png',
        order: 17,
        group: 'Equestria',
        pointsOfInterest: greatBlizzardBarreaerData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_great_blizzard_barreaer', points: "99.78,90.41 93.07,90.63 87.34,91.93 81.24,95.84 79.04,94.10 73.31,95.18 70.62,85.42 68.67,81.30 64.15,86.72 60.01,93.45 46.58,97.79 44.88,90.63 33.89,98.00 27.18,94.75 19.98,96.27 14.74,95.62 0.46,81.52 -1.00,101.69 100.27,101.69 99.91,95.84 99.91,90.41" }],
        poiSourceFile: 'map-data/equestria/GreatBlizzardBarreaer.js'
    },
    equestria_desolate_wasteland: {
        id: 'equestria_desolate_wasteland',
        name: 'Desolate Wasteland',
        imageSrc: 'assets/maps/equestria.png',
        order: 18,
        group: 'Equestria',
        pointsOfInterest: desolateWastelandData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_desolate_wasteland', points: "80.26,9.50 75.62,10.59 72.57,12.32 75.14,20.56 77.33,24.90 86.36,24.47 87.46,17.09 89.05,9.93 84.90,10.15" }],
        poiSourceFile: 'map-data/equestria/DesolateWasteland.js'
    },
    equestria_mount_metazoa: {
        id: 'equestria_mount_metazoa',
        name: 'Mount Metazoa',
        imageSrc: 'assets/maps/equestria.png',
        order: 19,
        group: 'Equestria',
        pointsOfInterest: mountMetazoaData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_mount_metazoa', points: "81.12,10.15 70.99,11.24 64.28,10.15 61.10,12.54 60.25,7.55 67.08,4.73 72.70,2.56 78.55,4.08 82.21,10.15" }],
        poiSourceFile: 'map-data/equestria/MountMetazoa.js'
    },
    equestria_sugar_maple_grove: {
        id: 'equestria_sugar_maple_grove',
        name: 'Sugar Maple Grove',
        imageSrc: 'assets/maps/equestria.png',
        order: 20,
        group: 'Equestria',
        pointsOfInterest: sugarMapleGroveData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_sugar_maple_grove', points: "67.82,17.09 68.67,25.12 69.65,33.80 69.52,41.17 73.55,42.04 77.70,40.09 77.70,34.23 83.19,39.44 84.29,29.67 83.31,25.12 76.60,18.18 70.74,14.92 68.18,17.09" }],
        poiSourceFile: 'map-data/equestria/SugarMapleGrove.js'
    },
    equestria_griffonstone: {
        id: 'equestria_griffonstone',
        name: 'Griffonstone',
        imageSrc: 'assets/maps/equestria.png',
        order: 21,
        group: 'Equestria',
        pointsOfInterest: griffinstoneData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_griffonstone', points: "64.76,10.15 66.23,27.72 65.62,37.48 61.84,29.89 61.59,19.26 61.59,9.07 63.54,9.50" }],
        poiSourceFile: 'map-data/equestria/Griffonstone.js'
    },
    equestria_thrace: {
        id: 'equestria_thrace',
        name: 'Thrace',
        imageSrc: 'assets/maps/equestria.png',
        order: 22,
        group: 'Equestria',
        pointsOfInterest: thraceData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_thrace', points: "88.92,21.65 91.12,25.77 95.76,27.07 98.20,25.12 99.42,18.61 98.93,12.97 95.64,9.93 92.95,18.18 90.39,20.56" }],
        poiSourceFile: 'map-data/equestria/Thrace.js'
    },
    equestria_great_ice_platau: {
        id: 'equestria_great_ice_platau',
        name: 'Great Ice Plateau',
        imageSrc: 'assets/maps/equestria.png',
        order: 23,
        group: 'Equestria',
        pointsOfInterest: greatIcePlatauData.pointsOfInterest,
        fogOfWar: [{ id: 'fog_eq_great_ice_platau', points: "97.95,11.45 100.64,5.60 98.56,4.95 95.27,4.95 91.73,3.64 96.73,12.97" }],
        poiSourceFile: 'map-data/equestria/GreatIcePlatau.js'
    },
    equestria_halfinger_grove: {
        id: 'equestria_halfinger_grove',
        name: 'Halfinger Grove',
        imageSrc: 'assets/maps/equestria.png',
        order: 24,
        group: 'Equestria',
        pointsOfInterest: halfingerGroveData.pointsOfInterest,
        poiSourceFile: 'map-data/equestria/HalfingerGrove.js'
    },
    equestria_trotting_terrians: {
        id: 'equestria_trotting_terrians',
        name: 'Trotting Terrians',
        imageSrc: 'assets/maps/equestria.png',
        order: 25,
        group: 'Equestria',
        pointsOfInterest: trottingTerriansData.pointsOfInterest,
        poiSourceFile: 'map-data/equestria/TrottingTerrians.js'
    },
    equestria_abyssinia: {
        id: 'equestria_abyssinia',
        name: 'Abyssinia',
        imageSrc: 'assets/maps/equestria.png',
        order: 26,
        group: 'Equestria',
        pointsOfInterest: abyssiniaData.pointsOfInterest,
        poiSourceFile: 'map-data/equestria/Abyssinia.js'
    },
    equestria_ng_amia: {
        id: 'equestria_ng_amia',
        name: "Ng'Amia",
        imageSrc: 'assets/maps/equestria.png',
        order: 27,
        group: 'Equestria',
        pointsOfInterest: ngAmiaData.pointsOfInterest,
        poiSourceFile: 'map-data/equestria/NgAmia.js'
    },
    equestria_shire_lanka: {
        id: 'equestria_shire_lanka',
        name: 'Shire Lanka',
        imageSrc: 'assets/maps/equestria.png',
        order: 28,
        group: 'Equestria',
        pointsOfInterest: shireLankaData.pointsOfInterest,
        poiSourceFile: 'map-data/equestria/ShireLanka.js'
    },
    equestria_riverlands: {
        id: 'equestria_riverlands',
        name: 'Riverlands',
        imageSrc: 'assets/maps/equestria.png',
        order: 29,
        group: 'Equestria',
        pointsOfInterest: riverlandsData.pointsOfInterest,
        poiSourceFile: 'map-data/equestria/Riverlands.js'
    },
    grand_country_full: {
        id: 'grand_country_full',
        name: 'The Grand Country',
        imageSrc: 'assets/maps/grand_country.png',
        order: 1,
        group: 'The Grand Country',
        pointsOfInterest: grandCountryData.pointsOfInterest,
    //    fogOfWar: grandCountryData.fogOfWar || [],
        poiSourceFile: 'map-data/grand-country-pois.js'
    },

    // --- EARTH LAND / REAL WORLD CONTINENTS ---
    north_america: { id: 'north_america', name: 'North America', imageSrc: 'assets/illustrations/earth_land.png', group: 'Earth Continents', pointsOfInterest: northAmericaData.pointsOfInterest, fogOfWar: northAmericaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    south_america: { id: 'south_america', name: 'South America', imageSrc: 'assets/illustrations/earth_land.png', group: 'Earth Continents', pointsOfInterest: southAmericaData.pointsOfInterest, fogOfWar: southAmericaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    africa: { id: 'africa', name: 'Africa', imageSrc: 'assets/illustrations/earth_land.png', group: 'Earth Continents', pointsOfInterest: africaData.pointsOfInterest, fogOfWar: africaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    asia: { id: 'asia', name: 'Asia', imageSrc: 'assets/illustrations/earth_land.png', group: 'Earth Continents', pointsOfInterest: asiaData.pointsOfInterest, fogOfWar: asiaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    azania: { id: 'azania', name: 'Azania', imageSrc: 'assets/illustrations/earth_land.png', group: 'Earth Continents', pointsOfInterest: azaniaData.pointsOfInterest, fogOfWar: azaniaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    terra_nova: { id: 'terra_nova', name: 'Terra Nova', imageSrc: 'assets/illustrations/earth_land.png', group: 'Earth Continents', pointsOfInterest: terraNovaData.pointsOfInterest, fogOfWar: terraNovaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },

    // --- DIVINE REALMS (EGYPTIAN) ---
    aten: { id: 'aten', name: 'Aten', imageSrc: 'assets/illustrations/earth_land.png', group: 'Divine Kingdoms', pointsOfInterest: atenData.pointsOfInterest, fogOfWar: atenData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    anubis: { id: 'anubis', name: 'Anubis', imageSrc: 'assets/illustrations/earth_land.png', group: 'Divine Kingdoms', pointsOfInterest: anubisData.pointsOfInterest, fogOfWar: anubisData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    amun_ra: { id: 'amun_ra', name: 'Amun-Ra', imageSrc: 'assets/illustrations/earth_land.png', group: 'Divine Kingdoms', pointsOfInterest: amunRaData.pointsOfInterest, fogOfWar: amunRaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    horus: { id: 'horus', name: 'Horus', imageSrc: 'assets/illustrations/earth_land.png', group: 'Divine Kingdoms', pointsOfInterest: horusData.pointsOfInterest, fogOfWar: horusData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    toth: { id: 'toth', name: 'Toth', imageSrc: 'assets/illustrations/earth_land.png', group: 'Divine Kingdoms', pointsOfInterest: tothData.pointsOfInterest, fogOfWar: tothData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    apisia: { id: 'apisia', name: 'Apisia', imageSrc: 'assets/illustrations/earth_land.png', group: 'Divine Kingdoms', pointsOfInterest: apisiaData.pointsOfInterest, fogOfWar: apisiaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    min_mnevis: { id: 'min_mnevis', name: 'Min & Mnevis', imageSrc: 'assets/illustrations/earth_land.png', group: 'Divine Kingdoms', pointsOfInterest: minMnevisData.pointsOfInterest, fogOfWar: minMnevisData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },

    // --- MYTHIC ISLES & LOST LANDS ---
    mu: { id: 'mu', name: 'Mu', imageSrc: 'assets/illustrations/earth_land.png', group: 'Lost Continents & Myths', pointsOfInterest: muData.pointsOfInterest, fogOfWar: muData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    greater_lemuria: { id: 'greater_lemuria', name: 'Greater Lemuria', imageSrc: 'assets/illustrations/earth_land.png', group: 'Lost Continents & Myths', pointsOfInterest: greaterLemuriaData.pointsOfInterest, fogOfWar: greaterLemuriaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    isle_of_blessed: { id: 'isle_of_blessed', name: 'Isle of the Blessed', imageSrc: 'assets/illustrations/earth_land.png', group: 'Lost Continents & Myths', pointsOfInterest: isleOfBlessedData.pointsOfInterest, fogOfWar: isleOfBlessedData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    aval_ons: { id: 'aval_ons', name: 'The Aval Ons', imageSrc: 'assets/illustrations/earth_land.png', group: 'Lost Continents & Myths', pointsOfInterest: avalOnsData.pointsOfInterest, fogOfWar: avalOnsData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    scylla_charybdis: { id: 'scylla_charybdis', name: 'Scylla & Chary Bois', imageSrc: 'assets/illustrations/earth_land.png', group: 'Lost Continents & Myths', pointsOfInterest: scyllaCharybdisData.pointsOfInterest, fogOfWar: scyllaCharybdisData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    garden_isles: { id: 'garden_isles', name: 'The Garden Islse', imageSrc: 'assets/illustrations/earth_land.png', group: 'Lost Continents & Myths', pointsOfInterest: gardenIslesData.pointsOfInterest, fogOfWar: gardenIslesData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    crimision_isle: { id: 'crimision_isle', name: 'Crimision Isle', imageSrc: 'assets/illustrations/earth_land.png', group: 'Lost Continents & Myths', pointsOfInterest: crimisionIsleData.pointsOfInterest, fogOfWar: crimisionIsleData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },

    // --- COSMIC & ABSTRACT ---
    xenonesia: { id: 'xenonesia', name: 'Xenonesia', imageSrc: 'assets/illustrations/earth_land.png', group: 'Outer Realms', pointsOfInterest: xenonesiaData.pointsOfInterest, fogOfWar: xenonesiaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    geminia: { id: 'geminia', name: 'Geminia', imageSrc: 'assets/illustrations/earth_land.png', group: 'Outer Realms', pointsOfInterest: geminiaData.pointsOfInterest, fogOfWar: geminiaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    u_realm: { id: 'u_realm', name: 'U', imageSrc: 'assets/illustrations/earth_land.png', group: 'Outer Realms', pointsOfInterest: uData.pointsOfInterest, fogOfWar: uData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    polybius: { id: 'polybius', name: 'Polybius', imageSrc: 'assets/illustrations/earth_land.png', group: 'Outer Realms', pointsOfInterest: polybiusData.pointsOfInterest, fogOfWar: polybiusData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    eiwass: { id: 'eiwass', name: 'Eiwass', imageSrc: 'assets/illustrations/earth_land.png', group: 'Outer Realms', pointsOfInterest: eiwassData.pointsOfInterest, fogOfWar: eiwassData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    oracula: { id: 'oracula', name: 'Oracula', imageSrc: 'assets/illustrations/earth_land.png', group: 'Outer Realms', pointsOfInterest: oraculaData.pointsOfInterest, fogOfWar: oraculaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    asclepia: { id: 'asclepia', name: 'Asclepia', imageSrc: 'assets/illustrations/earth_land.png', group: 'Outer Realms', pointsOfInterest: asclepiaData.pointsOfInterest, fogOfWar: asclepiaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    minerva: { id: 'minerva', name: 'Minerva', imageSrc: 'assets/illustrations/earth_land.png', group: 'Outer Realms', pointsOfInterest: minervaData.pointsOfInterest, fogOfWar: minervaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },

    // --- NORSE / YGGDRASIL REALMS ---
    asgard: { id: 'asgard', name: 'Asgard', imageSrc: 'assets/illustrations/earth_land.png', group: 'Norse Realms', pointsOfInterest: asgardData.pointsOfInterest, fogOfWar: asgardData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    jotunheimr: { id: 'jotunheimr', name: 'Jotunheimr', imageSrc: 'assets/illustrations/earth_land.png', group: 'Norse Realms', pointsOfInterest: jotunheimrData.pointsOfInterest, fogOfWar: jotunheimrData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    skycaverns: { id: 'skycaverns', name: 'The Skycaverns', imageSrc: 'assets/illustrations/earth_land.png', group: 'Norse Realms', pointsOfInterest: skycavernsData.pointsOfInterest, fogOfWar: skycavernsData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },

    // --- UNCHARTED WATERS & STRANGE LANDS ---
    sirsirian_ocean: { id: 'sirsirian_ocean', name: 'The Sirsirian Ocean', imageSrc: 'assets/illustrations/earth_land.png', group: 'Oceanic & Islands', pointsOfInterest: sirsirianOceanData.pointsOfInterest, fogOfWar: sirsirianOceanData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    pitatia: { id: 'pitatia', name: 'Pitatia', imageSrc: 'assets/illustrations/earth_land.png', group: 'Oceanic & Islands', pointsOfInterest: pitatiaData.pointsOfInterest, fogOfWar: pitatiaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    refijia: { id: 'refijia', name: 'Refijia', imageSrc: 'assets/illustrations/earth_land.png', group: 'Oceanic & Islands', pointsOfInterest: refijiaData.pointsOfInterest, fogOfWar: refijiaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    robensonia: { id: 'robensonia', name: 'Robensonia', imageSrc: 'assets/illustrations/earth_land.png', group: 'Oceanic & Islands', pointsOfInterest: robensoniaData.pointsOfInterest, fogOfWar: robensoniaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    glarnia: { id: 'glarnia', name: 'Glarnia', imageSrc: 'assets/illustrations/earth_land.png', group: 'Oceanic & Islands', pointsOfInterest: glarniaData.pointsOfInterest, fogOfWar: glarniaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    weldrhom: { id: 'weldrhom', name: 'Weldrhom', imageSrc: 'assets/illustrations/earth_land.png', group: 'Oceanic & Islands', pointsOfInterest: weldrhomData.pointsOfInterest, fogOfWar: weldrhomData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
    formosa_ultima: { id: 'formosa_ultima', name: 'Formosa Ultima', imageSrc: 'assets/illustrations/earth_land.png', group: 'Oceanic & Islands', pointsOfInterest: formosaUltimaData.pointsOfInterest, fogOfWar: formosaUltimaData.fogOfWar, poiSourceFile: 'map-data/earth-land-pois.js' },
};
