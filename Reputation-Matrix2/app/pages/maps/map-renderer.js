// map-renderer.js - Handles all map rendering logic

import { state } from '../../../state.js';
import { MAP_DATA, BUILDING_TYPES } from '../../../data/maps/map-data.js';
import { LORE_DATA } from '../../../lore.js';
import { getIntelForFaction } from '../../../systems/common.js';
import { playSound } from '../../../common.js';
import * as map from './maps.js';
import { resetTransform, getZoomLevel } from './map-transform.js';
import { QUEST_DATA } from '../../../data/quest-system/index.js';
import { FACTION_COLORS } from '../../../factions/faction-colors.js';
import { BATTLE_MAP_DATA } from '../../../data/maps/map-battle-data.js';
import { LEGAL_DATA } from '../../../legal_data.js';
import { ALL_LEGAL_CODES } from '../../../laws-data.js';
import { CULTURE_DATA } from '../../../data/support/culture-data.js';
import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS, SPECIES_ESTATE_BIAS } from '../../../data/support/species-data.js';
import { PARTY_LOCATIONS } from '../../../data/support/party-data.js';
import { PROVINCE_POLITICS } from '../../../data/support/politics-data.js';
import { NATIONS, getTechTree, RESEARCH_CATEGORIES } from '../../../data/support/research-data.js';
import { calculateAllAlliances } from '../../../alliances-page.js';
// ============================================================================
// DOM REFERENCES
// ============================================================================
let partyPoiAssociations = {};
let displayArea = null;
let detailPanel = null;
let tooltip = null;
function calculatePartyPoiAssociations(mapId) {
    partyPoiAssociations = {};
    
    const compatibleIds = getCompatibleMapIds(mapId);
    const allPois = MAP_DATA[mapId]?.pointsOfInterest || [];
    
    if (allPois.length === 0) return;

    // Gather all party members on compatible maps
    let allPartyMembers = [];
    compatibleIds.forEach(id => {
        if (PARTY_LOCATIONS[id]) {
            PARTY_LOCATIONS[id].forEach(member => {
                allPartyMembers.push({
                    ...member,
                    sourceMapId: id
                });
            });
        }
    });

    if (allPartyMembers.length === 0) return;

    // Associate each party member with nearest POI
    allPartyMembers.forEach(member => {
        let nearestPoi = null;
        let minDist = Infinity;

        allPois.forEach(poi => {
            const dist = Math.hypot(member.x - poi.x, member.y - poi.y);
            if (dist < minDist) {
                minDist = dist;
                nearestPoi = poi;
            }
        });

        if (nearestPoi) {
            if (!partyPoiAssociations[nearestPoi.id]) {
                partyPoiAssociations[nearestPoi.id] = [];
            }
            
            const charData = getPartyCharacterData(member.charKey);
            partyPoiAssociations[nearestPoi.id].push({
                charKey: member.charKey,
                name: charData.name,
                portrait: charData.portrait,
                role: charData.role,
                status: member.status,
                description: charData.description
            });
        }
    });

    return partyPoiAssociations;
}

function getPartyMembersAtPoi(poiId) {
    return partyPoiAssociations[poiId] || [];
}

function hasPartyMembers(poiId) {
    return partyPoiAssociations[poiId] && partyPoiAssociations[poiId].length > 0;
}
function initDOMReferences() {
    displayArea = document.getElementById('map-display-area');
    if (displayArea) {
        createTooltip();
    }
}



// ============================================================================
// CONFIGURATION
// ============================================================================
let cachedAllianceData = null;
let allianceCacheTimestamp = 0;
const ALLIANCE_CACHE_DURATION = 30000; // 30 seconds
function getAllianceData() {
    const now = Date.now();
    if (!cachedAllianceData || (now - allianceCacheTimestamp) > ALLIANCE_CACHE_DURATION) {
        try {
            cachedAllianceData = calculateAllAlliances();
            allianceCacheTimestamp = now;
        } catch (e) {
            console.warn('Could not load alliance data:', e);
            cachedAllianceData = { alliances: [], factionToAlliance: {} };
        }
    }
    return cachedAllianceData;
}

function areFactionsAllied(factionId1, factionId2) {
    if (factionId1 === factionId2) return true;
    if (!factionId1 || !factionId2) return false;
    if (factionId1 === 'unaligned' || factionId2 === 'unaligned') return false;
    
    const allianceData = getAllianceData();
    if (!allianceData.factionToAlliance) return false;
    
    const alliance1 = allianceData.factionToAlliance[factionId1];
    const alliance2 = allianceData.factionToAlliance[factionId2];
    
    if (!alliance1 || !alliance2) return false;
    
    return alliance1.id === alliance2.id;
}

function getAllianceForFaction(factionId) {
    if (!factionId || factionId === 'unaligned') return null;
    
    const allianceData = getAllianceData();
    return allianceData.factionToAlliance?.[factionId] || null;
}

const CLUSTER_CONFIG = {
    enabled: true,
    threshold: 2.5,
    minZoomToExpand: 2.0,
    maxClusterSize: 12,
    showCountBadge: true
};

const TERRITORY_CONFIG = {
    // State settings (smallest unit - contains POIs)
    state: {
        enabled: true,
        minPoiDistance: 5,
        defaultRadius: 6,
        maxStates: 300,
        minPoisPerState: 1
    },
    // Province settings (groups of states)
    province: {
        enabled: true,
        minStatesPerProvince: 1, // Changed from 2 to 1 - no orphan states
        maxStatesPerProvince: 100,
        mergeDistance: 20,
        mergeThreshold: 0.20 // Lowered to group more states together
    },
    // Region settings (groups of provinces) - NEW
    region: {
        enabled: true,
        minProvincesPerRegion: 1,
        maxProvincesPerRegion: 8,
        mergeDistance: 35
    },
    renderMode: 'state', // 'state', 'province', or 'region'
    showAllTerritories: true,
    enableMerging: true
};


function isTerritoryContested(control, threshold = 60) {
    const sortedFactions = Object.entries(control)
        .filter(([fid]) => fid !== 'unaligned')
        .sort(([, a], [, b]) => b - a);
    
    // Single faction or no factions - not contested
    if (sortedFactions.length <= 1) return false;
    
    // Check if dominant faction has clear control
    const dominantPercent = sortedFactions[0]?.[1] || 0;
    if (dominantPercent >= threshold) return false;
    
    // Multiple factions present - check if they're allied
    const dominantFaction = sortedFactions[0]?.[0];
    const significantFactions = sortedFactions.filter(([, pct]) => pct >= 10);
    
    // If all significant factions are allied with dominant, not contested
    const allAllied = significantFactions.every(([fid]) => 
        areFactionsAllied(dominantFaction, fid)
    );
    
    return !allAllied;
}

function getControllingAlliance(control) {
    const sortedFactions = Object.entries(control)
        .filter(([fid]) => fid !== 'unaligned')
        .sort(([, a], [, b]) => b - a);
    
    if (sortedFactions.length === 0) return null;
    
    const dominantFaction = sortedFactions[0][0];
    return getAllianceForFaction(dominantFaction);
}
function generateStatesFromPois(allPois, existingStateData) {
    const states = [];
    const assignedPoiIds = new Set();
    const usedPositions = [];

    const isTooClose = (x, y, minDist) => {
        return usedPositions.some(pos =>
            Math.hypot(x - pos.x, y - pos.y) < minDist
        );
    };

    // First, add any predefined states
    if (existingStateData) {
        Object.entries(existingStateData).forEach(([id, state]) => {
            states.push({
                id,
                ...state,
                isDefined: true,
                type: 'state',
                poiIds: []
            });
            usedPositions.push({ x: state.x, y: state.y });
        });
    }

    // Get all non-unaligned POIs first
    const alignedPois = allPois.filter(poi => poi.factionId && poi.factionId !== 'unaligned');
    const unalignedPois = allPois.filter(poi => !poi.factionId || poi.factionId === 'unaligned');

    // Group aligned POIs by faction
    const factionGroups = {};
    alignedPois.forEach(poi => {
        const factionId = poi.factionId;
        if (!factionGroups[factionId]) {
            factionGroups[factionId] = [];
        }
        factionGroups[factionId].push(poi);
    });

    // For each faction, cluster their POIs into states
    Object.entries(factionGroups).forEach(([factionId, pois]) => {
        if (pois.length === 0) return;

        const clusters = clusterPoisForStates(pois, TERRITORY_CONFIG.state.minPoiDistance);

        clusters.forEach((cluster, index) => {
            // Skip if too close to existing state (but still assign POIs later)
            const tooClose = isTooClose(cluster.x, cluster.y, TERRITORY_CONFIG.state.minPoiDistance * 0.4);
            
            if (!tooClose && states.length < TERRITORY_CONFIG.state.maxStates) {
                const factionData = getFactionData(factionId);
                const stateName = generateStateName(cluster, factionData, index);

                const newState = {
                    id: `state_${factionId}_${index}_${Math.random().toString(36).substr(2, 5)}`,
                    name: stateName,
                    x: cluster.x,
                    y: cluster.y,
                    radius: cluster.radius || TERRITORY_CONFIG.state.defaultRadius,
                    isDefined: false,
                    type: 'state',
                    generatedFrom: factionId,
                    poiIds: cluster.pois.map(p => p.id)
                };

                states.push(newState);
                usedPositions.push({ x: cluster.x, y: cluster.y });
                
                // Mark POIs as assigned
                cluster.pois.forEach(p => assignedPoiIds.add(p.id));
            } else {
                // Still mark POIs as needing assignment
                cluster.pois.forEach(p => {
                    if (!assignedPoiIds.has(p.id)) {
                        // Find nearest existing state and add to it
                        const nearestState = findNearestState(p, states);
                        if (nearestState) {
                            nearestState.poiIds = nearestState.poiIds || [];
                            nearestState.poiIds.push(p.id);
                            assignedPoiIds.add(p.id);
                        }
                    }
                });
            }
        });
    });

    // CRITICAL: Ensure ALL aligned POIs are assigned to a state
    alignedPois.forEach(poi => {
        if (!assignedPoiIds.has(poi.id)) {
            // Find nearest state or create new one
            const nearestState = findNearestState(poi, states);
            
            if (nearestState && Math.hypot(poi.x - nearestState.x, poi.y - nearestState.y) < TERRITORY_CONFIG.state.defaultRadius * 2) {
                nearestState.poiIds = nearestState.poiIds || [];
                nearestState.poiIds.push(poi.id);
                // Expand radius if needed
                const dist = Math.hypot(poi.x - nearestState.x, poi.y - nearestState.y);
                nearestState.radius = Math.max(nearestState.radius, dist + 2);
            } else {
                // Create new state for this POI
                const factionData = getFactionData(poi.factionId);
                const newState = {
                    id: `state_orphan_${poi.id}`,
                    name: `${poi.name} State`,
                    x: poi.x,
                    y: poi.y,
                    radius: TERRITORY_CONFIG.state.defaultRadius,
                    isDefined: false,
                    type: 'state',
                    generatedFrom: poi.factionId,
                    poiIds: [poi.id]
                };
                states.push(newState);
            }
            assignedPoiIds.add(poi.id);
        }
    });

    // Handle unaligned POIs - create "Neutral Zone" states or add to nearest
    if (unalignedPois.length > 0) {
        const unalignedClusters = clusterPoisForStates(unalignedPois, TERRITORY_CONFIG.state.minPoiDistance * 1.5);
        
        unalignedClusters.forEach((cluster, index) => {
            // Try to add to nearest aligned state first
            let addedToExisting = false;
            
            cluster.pois.forEach(poi => {
                if (assignedPoiIds.has(poi.id)) return;
                
                const nearestState = findNearestState(poi, states);
                if (nearestState && Math.hypot(poi.x - nearestState.x, poi.y - nearestState.y) < TERRITORY_CONFIG.state.defaultRadius * 1.5) {
                    nearestState.poiIds = nearestState.poiIds || [];
                    nearestState.poiIds.push(poi.id);
                    assignedPoiIds.add(poi.id);
                    addedToExisting = true;
                }
            });

            // If not all added, create neutral state
            const remainingPois = cluster.pois.filter(p => !assignedPoiIds.has(p.id));
            if (remainingPois.length > 0) {
                const newState = {
                    id: `state_neutral_${index}_${Math.random().toString(36).substr(2, 5)}`,
                    name: `Neutral Zone ${index + 1}`,
                    x: cluster.x,
                    y: cluster.y,
                    radius: cluster.radius || TERRITORY_CONFIG.state.defaultRadius,
                    isDefined: false,
                    type: 'state',
                    generatedFrom: 'unaligned',
                    isNeutral: true,
                    poiIds: remainingPois.map(p => p.id)
                };
                states.push(newState);
                remainingPois.forEach(p => assignedPoiIds.add(p.id));
            }
        });
    }

    // Final check - any POI still not assigned?
    allPois.forEach(poi => {
        if (!assignedPoiIds.has(poi.id)) {
            console.warn(`POI ${poi.name} (${poi.id}) was not assigned to any state - forcing assignment`);
            const nearestState = findNearestState(poi, states);
            if (nearestState) {
                nearestState.poiIds = nearestState.poiIds || [];
                nearestState.poiIds.push(poi.id);
            } else if (states.length > 0) {
                // Add to first state as last resort
                states[0].poiIds = states[0].poiIds || [];
                states[0].poiIds.push(poi.id);
            }
        }
    });

    return states;
}

function findNearestState(poi, states) {
    if (states.length === 0) return null;
    
    let nearest = null;
    let minDist = Infinity;
    
    states.forEach(state => {
        const dist = Math.hypot(poi.x - state.x, poi.y - state.y);
        if (dist < minDist) {
            minDist = dist;
            nearest = state;
        }
    });
    
    return nearest;
}

function clusterPoisForStates(pois, minDistance) {
    if (pois.length === 0) return [];

    if (pois.length === 1) {
        return [{
            x: pois[0].x,
            y: pois[0].y,
            pois: pois,
            radius: TERRITORY_CONFIG.state.defaultRadius
        }];
    }

    const clusters = [];
    const assigned = new Set();

    // Sort by importance (political influence + population)
    const sortedPois = [...pois].sort((a, b) => {
        const aScore = (a.political_influence || 0) * 3 + 
                       (a.military_strength || 0) * 2 + 
                       (a.population || 0) / 500;
        const bScore = (b.political_influence || 0) * 3 + 
                       (b.military_strength || 0) * 2 + 
                       (b.population || 0) / 500;
        return bScore - aScore;
    });

    sortedPois.forEach(poi => {
        if (assigned.has(poi.id)) return;

        // Check if can join existing cluster
        let foundCluster = null;
        let minDist = Infinity;

        for (const cluster of clusters) {
            const distance = Math.hypot(poi.x - cluster.x, poi.y - cluster.y);
            if (distance < minDistance && distance < minDist) {
                foundCluster = cluster;
                minDist = distance;
            }
        }

        if (foundCluster) {
            foundCluster.pois.push(poi);

            // Recalculate center weighted by influence
            let totalWeight = 0;
            let weightedX = 0;
            let weightedY = 0;

            foundCluster.pois.forEach(p => {
                const weight = 1 + (p.political_influence || 0) * 2 + (p.military_strength || 0);
                weightedX += p.x * weight;
                weightedY += p.y * weight;
                totalWeight += weight;
            });

            foundCluster.x = weightedX / totalWeight;
            foundCluster.y = weightedY / totalWeight;

            // Expand radius based on POI spread
            const maxDist = foundCluster.pois.reduce((max, p) => {
                return Math.max(max, Math.hypot(p.x - foundCluster.x, p.y - foundCluster.y));
            }, 0);
            foundCluster.radius = Math.max(TERRITORY_CONFIG.state.defaultRadius, maxDist + 2);
        } else {
            clusters.push({
                x: poi.x,
                y: poi.y,
                pois: [poi],
                radius: TERRITORY_CONFIG.state.defaultRadius
            });
        }

        assigned.add(poi.id);
    });

    return clusters;
}

function generateStateName(cluster, factionData, index) {
    if (cluster.pois && cluster.pois.length > 0) {
        const sortedPois = [...cluster.pois].sort((a, b) => {
            const aScore = (a.political_influence || 0) * 2 + 
                           (a.economic_value || 0) + 
                           (a.population || 0) / 1000;
            const bScore = (b.political_influence || 0) * 2 + 
                           (b.economic_value || 0) + 
                           (b.population || 0) / 1000;
            return bScore - aScore;
        });

        const mainPoi = sortedPois[0];

        const suffixes = ['State', 'Canton', 'District', 'Prefecture', 'County', 'Shire', 'Region', 'Zone'];
        const suffixIndex = Math.abs(simpleHash(mainPoi.id)) % suffixes.length;
        const suffix = suffixes[suffixIndex];

        let baseName = mainPoi.name;

        if (baseName.length > 15) {
            const words = baseName.split(' ');
            baseName = words.slice(0, 2).join(' ');
        }

        const removeWords = ['City', 'Town', 'Village', 'Castle', 'Fort', 'Keep', 'Tower', 'Temple', 'Academy', 'Region', 'Province', 'Territory', 'District', 'State'];
        removeWords.forEach(word => {
            baseName = baseName.replace(new RegExp(`\\s*${word}\\s*`, 'gi'), ' ').trim();
        });

        if (baseName.length < 2) {
            baseName = mainPoi.name.split(' ')[0];
        }

        return `${baseName} ${suffix}`;
    }

    const ordinals = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'];
    const ordinal = ordinals[index] || `${index + 1}th`;
    return `${factionData.name} ${ordinal} State`;
}

// ============================================================================
// PROVINCE GENERATION (groups of states)
// ============================================================================


function generateProvincesFromStates(states, allPois) {
    if (!TERRITORY_CONFIG.province.enabled || states.length === 0) {
        // If provinces disabled, create one province per state
        return states.map(state => ({
            id: `province_${state.id}`,
            name: state.name.replace(' State', ' Province').replace(' County', ' Province'),
            x: state.x,
            y: state.y,
            radius: state.radius + 2,
            type: 'province',
            stateIds: [state.id],
            states: [state],
            stateCount: 1,
            control: calculateStateControl(state, allPois)
        }));
    }

    const provinces = [];
    const assignedStateIds = new Set();

    // Calculate control for each state
    const statesWithControl = states.map(state => {
        const control = calculateStateControl(state, allPois);
        const dominant = getDominantFactionFromControl(control);
        return {
            ...state,
            control,
            dominant
        };
    });

    // Sort states by power (to seed provinces from strongest states)
    const sortedStates = [...statesWithControl].sort((a, b) => {
        const aPower = getTotalControlPower(a.control);
        const bPower = getTotalControlPower(b.control);
        return bPower - aPower;
    });

    // Group states into provinces
    sortedStates.forEach(seedState => {
        if (assignedStateIds.has(seedState.id)) return;

        const compatibleStates = [seedState];
        assignedStateIds.add(seedState.id);

        // Look for states to add to this province
        for (const candidateState of sortedStates) {
            if (assignedStateIds.has(candidateState.id)) continue;

            // Check distance
            const distance = Math.hypot(
                candidateState.x - seedState.x,
                candidateState.y - seedState.y
            );

            if (distance > TERRITORY_CONFIG.province.mergeDistance) continue;

            // Check faction compatibility
            const sameFaction = candidateState.dominant.factionId === seedState.dominant.factionId;
            const bothNeutral = seedState.isNeutral && candidateState.isNeutral;
            const highControl = candidateState.dominant.percentage >= TERRITORY_CONFIG.province.mergeThreshold * 100;
            
            // Check if factions are allied
            let areAllied = false;
            try {
                areAllied = areFactionsAllied(seedState.dominant.factionId, candidateState.dominant.factionId);
            } catch (e) { /* ignore */ }

            if (sameFaction || bothNeutral || areAllied || (highControl && compatibleStates.length < TERRITORY_CONFIG.province.maxStatesPerProvince)) {
                // Check if adding this state keeps the province cohesive
                const avgX = compatibleStates.reduce((sum, s) => sum + s.x, 0) / compatibleStates.length;
                const avgY = compatibleStates.reduce((sum, s) => sum + s.y, 0) / compatibleStates.length;
                const distToCenter = Math.hypot(candidateState.x - avgX, candidateState.y - avgY);

                if (distToCenter <= TERRITORY_CONFIG.province.mergeDistance * 1.3) {
                    compatibleStates.push(candidateState);
                    assignedStateIds.add(candidateState.id);
                }
            }

            if (compatibleStates.length >= TERRITORY_CONFIG.province.maxStatesPerProvince) break;
        }

        // Create province from compatible states (even if just 1 state)
        const province = createProvinceFromStates(compatibleStates, allPois);
        provinces.push(province);
    });

    // CRITICAL: Ensure ALL states are in a province
    statesWithControl.forEach(state => {
        if (!assignedStateIds.has(state.id)) {
            console.warn(`State ${state.name} was not assigned to any province - creating solo province`);
            
            // Try to add to nearest province first
            let addedToExisting = false;
            let nearestProvince = null;
            let minDist = Infinity;
            
            provinces.forEach(prov => {
                const dist = Math.hypot(state.x - prov.x, state.y - prov.y);
                if (dist < minDist) {
                    minDist = dist;
                    nearestProvince = prov;
                }
            });
            
            if (nearestProvince && minDist < TERRITORY_CONFIG.province.mergeDistance * 1.5 && 
                nearestProvince.stateCount < TERRITORY_CONFIG.province.maxStatesPerProvince) {
                nearestProvince.stateIds.push(state.id);
                nearestProvince.states.push(state);
                nearestProvince.stateCount++;
                recalculateProvinceCenter(nearestProvince);
                nearestProvince.control = calculateProvinceControlFromStates(nearestProvince.states, allPois);
                addedToExisting = true;
            }
            
            if (!addedToExisting) {
                // Create solo province
                const soloProvince = createProvinceFromStates([state], allPois);
                provinces.push(soloProvince);
            }
            
            assignedStateIds.add(state.id);
        }
    });

    return provinces;
}
function generateRegionsFromProvinces(provinces, allPois) {
    if (!TERRITORY_CONFIG.region.enabled || provinces.length === 0) {
        return [];
    }

    const regions = [];
    const assignedProvinceIds = new Set();

    // Sort provinces by size/power
    const sortedProvinces = [...provinces].sort((a, b) => {
        const aPower = getTotalControlPower(a.control || {});
        const bPower = getTotalControlPower(b.control || {});
        return bPower - aPower;
    });

    // Group provinces into regions
    sortedProvinces.forEach(seedProvince => {
        if (assignedProvinceIds.has(seedProvince.id)) return;

        const compatibleProvinces = [seedProvince];
        assignedProvinceIds.add(seedProvince.id);

        const seedDominant = getDominantFactionFromControl(seedProvince.control || {});

        // Look for provinces to add to this region
        for (const candidateProvince of sortedProvinces) {
            if (assignedProvinceIds.has(candidateProvince.id)) continue;

            const distance = Math.hypot(
                candidateProvince.x - seedProvince.x,
                candidateProvince.y - seedProvince.y
            );

            if (distance > TERRITORY_CONFIG.region.mergeDistance) continue;

            const candidateDominant = getDominantFactionFromControl(candidateProvince.control || {});
            
            // Check faction compatibility
            const sameFaction = candidateDominant.factionId === seedDominant.factionId;
            
            let areAllied = false;
            try {
                areAllied = areFactionsAllied(seedDominant.factionId, candidateDominant.factionId);
            } catch (e) { /* ignore */ }

            if (sameFaction || areAllied) {
                if (compatibleProvinces.length < TERRITORY_CONFIG.region.maxProvincesPerRegion) {
                    compatibleProvinces.push(candidateProvince);
                    assignedProvinceIds.add(candidateProvince.id);
                }
            }

            if (compatibleProvinces.length >= TERRITORY_CONFIG.region.maxProvincesPerRegion) break;
        }

        // Create region
        const region = createRegionFromProvinces(compatibleProvinces, allPois);
        regions.push(region);
    });

    // Ensure all provinces are in a region
    sortedProvinces.forEach(province => {
        if (!assignedProvinceIds.has(province.id)) {
            // Add to nearest region or create solo region
            let nearestRegion = null;
            let minDist = Infinity;
            
            regions.forEach(reg => {
                const dist = Math.hypot(province.x - reg.x, province.y - reg.y);
                if (dist < minDist) {
                    minDist = dist;
                    nearestRegion = reg;
                }
            });
            
            if (nearestRegion && minDist < TERRITORY_CONFIG.region.mergeDistance * 1.5 &&
                nearestRegion.provinceCount < TERRITORY_CONFIG.region.maxProvincesPerRegion) {
                nearestRegion.provinceIds.push(province.id);
                nearestRegion.provinces.push(province);
                nearestRegion.provinceCount++;
                recalculateRegionCenter(nearestRegion);
                nearestRegion.control = calculateRegionControlFromProvinces(nearestRegion.provinces);
            } else {
                const soloRegion = createRegionFromProvinces([province], allPois);
                regions.push(soloRegion);
            }
            
            assignedProvinceIds.add(province.id);
        }
    });

    return regions;
}
function recalculateRegionCenter(region) {
    let totalWeight = 0;
    let weightedX = 0;
    let weightedY = 0;

    region.provinces.forEach(province => {
        const power = getTotalControlPower(province.control || {});
        const weight = 1 + power / 10;
        weightedX += province.x * weight;
        weightedY += province.y * weight;
        totalWeight += weight;
    });

    region.x = totalWeight > 0 ? weightedX / totalWeight : region.x;
    region.y = totalWeight > 0 ? weightedY / totalWeight : region.y;

    region.radius = region.provinces.reduce((max, province) => {
        return Math.max(max, Math.hypot(province.x - region.x, province.y - region.y) + (province.radius || 10));
    }, 0) + 5;
}
function calculateRegionControlFromProvinces(provinces) {
    const control = {};

    provinces.forEach(province => {
        const provControl = province.control || {};
        for (const [factionId, percentage] of Object.entries(provControl)) {
            control[factionId] = (control[factionId] || 0) + percentage;
        }
    });

    // Normalize to 100%
    const total = Object.values(control).reduce((a, b) => a + b, 0);
    if (total > 0) {
        for (const factionId of Object.keys(control)) {
            control[factionId] = Math.round((control[factionId] / total) * 100);
        }
    }

    return control;
}
function generateRegionName(provinces, dominantFactionId, allPois) {
    // Find most important POI across all provinces
    let allRegionPois = [];
    provinces.forEach(province => {
        (province.states || []).forEach(state => {
            const statePois = allPois.filter(poi => {
                const distance = Math.hypot(poi.x - state.x, poi.y - state.y);
                return distance <= (state.radius || TERRITORY_CONFIG.state.defaultRadius);
            });
            allRegionPois = allRegionPois.concat(statePois);
        });
    });

    // Remove duplicates
    const uniquePois = [...new Map(allRegionPois.map(p => [p.id, p])).values()];

    if (uniquePois.length > 0) {
        const sortedPois = uniquePois.sort((a, b) => {
            const aScore = (a.political_influence || 0) * 3 + 
                           (a.military_strength || 0) * 2 + 
                           (a.population || 0) / 500;
            const bScore = (b.political_influence || 0) * 3 + 
                           (b.military_strength || 0) * 2 + 
                           (b.population || 0) / 500;
            return bScore - aScore;
        });

        const mainPoi = sortedPois[0];
        
        const grandSuffixes = [
            'Region', 'Realm', 'Domain', 'Expanse', 'Territories', 
            'Dominion', 'Heartland', 'Frontier', 'Reaches'
        ];
        const suffixIndex = Math.abs(simpleHash(mainPoi.id + dominantFactionId)) % grandSuffixes.length;
        const suffix = grandSuffixes[suffixIndex];

        let baseName = mainPoi.name;
        
        if (baseName.length > 12) {
            baseName = baseName.split(' ')[0];
        }

        const removeWords = ['City', 'Town', 'Village', 'Castle', 'Fort', 'Keep', 'Tower', 'Temple', 'Academy', 'State', 'Province', 'County', 'District'];
        removeWords.forEach(word => {
            baseName = baseName.replace(new RegExp(`\\s*${word}\\s*`, 'gi'), ' ').trim();
        });

        if (baseName.length < 2) {
            baseName = mainPoi.name.split(' ')[0];
        }

        return `${baseName} ${suffix}`;
    }

    const factionData = getFactionData(dominantFactionId);
    return `${factionData.name} Territories`;
}

function createRegionFromProvinces(provinces, allPois) {
    // Calculate weighted center
    let totalWeight = 0;
    let weightedX = 0;
    let weightedY = 0;

    provinces.forEach(province => {
        const power = getTotalControlPower(province.control || {});
        const weight = 1 + power / 10 + (province.stateCount || 1);
        weightedX += province.x * weight;
        weightedY += province.y * weight;
        totalWeight += weight;
    });

    const centerX = totalWeight > 0 ? weightedX / totalWeight : provinces[0].x;
    const centerY = totalWeight > 0 ? weightedY / totalWeight : provinces[0].y;

    // Calculate radius
    const maxDist = provinces.reduce((max, province) => {
        return Math.max(max, Math.hypot(province.x - centerX, province.y - centerY) + (province.radius || 10));
    }, 0);

    // Calculate combined control
    const combinedControl = calculateRegionControlFromProvinces(provinces);
    const dominant = getDominantFactionFromControl(combinedControl);

    // Generate region name
    const regionName = generateRegionName(provinces, dominant.factionId, allPois);

    // Count total states
    const totalStates = provinces.reduce((sum, p) => sum + (p.stateCount || 1), 0);

    return {
        id: `region_${provinces[0].id}_${Math.random().toString(36).substr(2, 5)}`,
        name: regionName,
        x: centerX,
        y: centerY,
        radius: maxDist + 5,
        type: 'region',
        provinceIds: provinces.map(p => p.id),
        provinces: provinces,
        provinceCount: provinces.length,
        stateCount: totalStates,
        control: combinedControl
    };
}


function createProvinceFromStates(states, allPois) {
    // Calculate weighted center
    let totalWeight = 0;
    let weightedX = 0;
    let weightedY = 0;

    states.forEach(state => {
        const power = getTotalControlPower(state.control);
        const weight = 1 + power / 10;
        weightedX += state.x * weight;
        weightedY += state.y * weight;
        totalWeight += weight;
    });

    const centerX = totalWeight > 0 ? weightedX / totalWeight : states[0].x;
    const centerY = totalWeight > 0 ? weightedY / totalWeight : states[0].y;

    // Calculate radius to encompass all states
    const maxDist = states.reduce((max, state) => {
        return Math.max(max, Math.hypot(state.x - centerX, state.y - centerY) + (state.radius || 4));
    }, 0);

    // Determine dominant faction across all states
    const combinedControl = calculateProvinceControlFromStates(states, allPois);
    const dominant = getDominantFactionFromControl(combinedControl);

    // Generate province name
    const provinceName = generateProvinceName(states, dominant.factionId, allPois);

    return {
        id: `province_${states[0].id}_${Math.random().toString(36).substr(2, 5)}`,
        name: provinceName,
        x: centerX,
        y: centerY,
        radius: maxDist + 3,
        type: 'province',
        stateIds: states.map(s => s.id),
        states: states,
        control: combinedControl,
        stateCount: states.length
    };
}

function recalculateProvinceCenter(province) {
    let totalWeight = 0;
    let weightedX = 0;
    let weightedY = 0;

    province.states.forEach(state => {
        const power = getTotalControlPower(state.control);
        const weight = 1 + power / 10;
        weightedX += state.x * weight;
        weightedY += state.y * weight;
        totalWeight += weight;
    });

    province.x = totalWeight > 0 ? weightedX / totalWeight : province.x;
    province.y = totalWeight > 0 ? weightedY / totalWeight : province.y;

    // Recalculate radius
    province.radius = province.states.reduce((max, state) => {
        return Math.max(max, Math.hypot(state.x - province.x, state.y - province.y) + (state.radius || 4));
    }, 0) + 3;
}

function calculateProvinceControlFromStates(states, allPois) {
    const control = {};

    states.forEach(state => {
        const stateControl = state.control || calculateStateControl(state, allPois);
        
        for (const [factionId, percentage] of Object.entries(stateControl)) {
            control[factionId] = (control[factionId] || 0) + percentage;
        }
    });

    // Normalize to 100%
    const total = Object.values(control).reduce((a, b) => a + b, 0);
    if (total > 0) {
        for (const factionId of Object.keys(control)) {
            control[factionId] = Math.round((control[factionId] / total) * 100);
        }
    }

    return control;
}

function generateProvinceName(states, dominantFactionId, allPois) {
    // Find most important POI across all states
    let allProvincePois = [];
    states.forEach(state => {
        const statePois = allPois.filter(poi => {
            const distance = Math.hypot(poi.x - state.x, poi.y - state.y);
            return distance <= (state.radius || TERRITORY_CONFIG.state.defaultRadius);
        });
        allProvincePois = allProvincePois.concat(statePois);
    });

    // Remove duplicates
    const uniquePois = [...new Map(allProvincePois.map(p => [p.id, p])).values()];

    if (uniquePois.length > 0) {
        const sortedPois = uniquePois.sort((a, b) => {
            const aScore = (a.political_influence || 0) * 3 + 
                           (a.military_strength || 0) * 2 + 
                           (a.population || 0) / 500;
            const bScore = (b.political_influence || 0) * 3 + 
                           (b.military_strength || 0) * 2 + 
                           (b.population || 0) / 500;
            return bScore - aScore;
        });

        const mainPoi = sortedPois[0];
        
        const grandSuffixes = [
            'Province', 'Dominion', 'Territory', 'March', 'Realm', 
            'Protectorate', 'Commonwealth', 'Federation', 'Union'
        ];
        const suffixIndex = Math.abs(simpleHash(mainPoi.id + dominantFactionId)) % grandSuffixes.length;
        const suffix = grandSuffixes[suffixIndex];

        let baseName = mainPoi.name;
        
        if (baseName.length > 12) {
            baseName = baseName.split(' ')[0];
        }

        const removeWords = ['City', 'Town', 'Village', 'Castle', 'Fort', 'Keep', 'Tower', 'Temple', 'Academy', 'Region', 'State', 'County', 'District'];
        removeWords.forEach(word => {
            baseName = baseName.replace(new RegExp(`\\s*${word}\\s*`, 'gi'), ' ').trim();
        });

        if (baseName.length < 2) {
            baseName = mainPoi.name.split(' ')[0];
        }

        return `${baseName} ${suffix}`;
    }

    const factionData = getFactionData(dominantFactionId);
    return `Greater ${factionData.name} Province`;
}

function getTotalControlPower(control) {
    return Object.entries(control)
        .filter(([fid]) => fid !== 'unaligned')
        .reduce((sum, [, pct]) => sum + pct, 0);
}

// ============================================================================
// STATE CONTROL CALCULATION (renamed from province)
// ============================================================================

function calculateStateControl(state, allPois) {
    const control = {};
    const radius = state.radius || TERRITORY_CONFIG.state.defaultRadius;

    const statePois = allPois.filter(poi => {
        const distance = Math.hypot(poi.x - state.x, poi.y - state.y);
        return distance <= radius;
    });

    if (statePois.length === 0) {
        const nearbyPois = allPois.filter(poi => {
            const distance = Math.hypot(poi.x - state.x, poi.y - state.y);
            return distance <= radius * 1.5;
        });

        if (nearbyPois.length === 0) {
            return { unaligned: 100 };
        }

        nearbyPois.forEach(poi => {
            const factionId = poi.factionId || 'unaligned';
            const distance = Math.hypot(poi.x - state.x, poi.y - state.y);
            const distancePenalty = 1 - (distance - radius) / (radius * 0.5);

            const power = (
                (poi.political_influence || 1) * 2 +
                (poi.military_strength || 0) * 1.5 +
                (poi.economic_value || 0) +
                Math.log10(Math.max(1, poi.population || 1))
            ) * Math.max(0.3, distancePenalty);

            control[factionId] = (control[factionId] || 0) + power;
        });
    } else {
        statePois.forEach(poi => {
            const factionId = poi.factionId || 'unaligned';

            const power =
                (poi.political_influence || 1) * 2 +
                (poi.military_strength || 0) * 1.5 +
                (poi.economic_value || 0) +
                Math.log10(Math.max(1, poi.population || 1));

            control[factionId] = (control[factionId] || 0) + power;
        });
    }

    const nonUnalignedFactions = Object.keys(control).filter(k => k !== 'unaligned');
    if (nonUnalignedFactions.length === 0) {
        return { unaligned: 100 };
    }

    const totalPower = Object.values(control).reduce((a, b) => a + b, 0);

    if (totalPower === 0) {
        return { unaligned: 100 };
    }

    const percentControl = {};
    for (const [factionId, power] of Object.entries(control)) {
        percentControl[factionId] = Math.round((power / totalPower) * 100);
    }

    const sum = Object.values(percentControl).reduce((a, b) => a + b, 0);
    if (sum !== 100 && Object.keys(percentControl).length > 0) {
        const diff = 100 - sum;
        const largestFaction = Object.entries(percentControl)
            .sort(([, a], [, b]) => b - a)[0][0];
        percentControl[largestFaction] += diff;
    }

    return percentControl;
}

function countPoisInState(state, allPois) {
    const radius = state.radius || TERRITORY_CONFIG.state.defaultRadius;
    return allPois.filter(poi => {
        const distance = Math.hypot(poi.x - state.x, poi.y - state.y);
        return distance <= radius;
    }).length;
}

// ============================================================================
// RENDER TERRITORIES (states and provinces)
// ============================================================================

function renderTerritories(container, stateData) {
    container.querySelectorAll('.state-marker, .province-marker, .region-marker').forEach(el => el.remove());

    const allPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];

    if (allPois.length === 0) {
        console.warn('No POIs available for territory generation');
        return;
    }

    // Generate states (ensures all POIs are included)
    let states = generateStatesFromPois(allPois, stateData);

    // Generate provinces (ensures all states are included)
    const provinces = generateProvincesFromStates(states, allPois);

    // Generate regions (ensures all provinces are included)
    const regions = generateRegionsFromProvinces(provinces, allPois);

    const fragment = document.createDocumentFragment();

    // Render based on current submode
    if (map.activePoliticalSubmode === 'region') {
        renderRegionMarkers(fragment, regions, allPois);
    } else if (map.activePoliticalSubmode === 'province') {
        renderProvinceMarkers(fragment, provinces, allPois);
    } else {
        renderStateMarkers(fragment, states, allPois);
    }

    container.appendChild(fragment);
}
function renderRegionMarkers(fragment, regions, allPois) {
    regions.forEach(region => {
        const control = region.control || {};
        const totalControl = Object.values(control).reduce((a, b) => a + b, 0);
        if (totalControl === 0) return;

        const dominant = getDominantFactionFromControl(control);
        const isContested = isTerritoryContested(control);

        let controllingAlliance = null;
        try {
            controllingAlliance = getControllingAlliance(control);
        } catch (e) { /* ignore */ }

        const baseSize = 50;
        const provinceBonus = (region.provinceCount || 1) * 5;
        const size = Math.min(100, baseSize + provinceBonus);

        const marker = document.createElement('div');
        marker.className = 'region-marker';
        if (isContested) marker.classList.add('contested');
        if (controllingAlliance && !isContested) marker.classList.add('alliance-controlled');
        
        marker.style.left = `${region.x}%`;
        marker.style.top = `${region.y}%`;
        marker.style.width = `${size}px`;
        marker.style.height = `${size}px`;
        marker.dataset.regionId = region.id;

        const pieChartSVG = createPieChartSVG(control, size);
        
        const provinceBadge = `<div class="region-province-count">${region.provinceCount}</div>`;
        
        let allianceBadge = '';
        if (controllingAlliance && !isContested) {
            allianceBadge = `<div class="alliance-badge" style="background:${controllingAlliance.color || '#4CAF50'};" title="${controllingAlliance.name}">🤝</div>`;
        }
        
        marker.innerHTML = pieChartSVG + provinceBadge + allianceBadge + `<div class="region-label">${region.name}</div>`;
        marker.dataset.control = JSON.stringify(control);
        marker.dataset.provinceCount = region.provinceCount;

        const regionCopy = {
            id: region.id,
            name: region.name,
            x: region.x,
            y: region.y,
            radius: region.radius,
            provinceCount: region.provinceCount,
            stateCount: region.stateCount,
            provinces: region.provinces ? region.provinces.map(p => ({
                id: p.id,
                name: p.name,
                x: p.x,
                y: p.y,
                stateCount: p.stateCount,
                states: p.states,
                control: p.control
            })) : [],
            control: { ...control }
        };

        marker.onmouseenter = function(e) {
            showRegionTooltip(e, regionCopy, regionCopy.control);
        };
        
        marker.onmousemove = function(e) {
            updateTooltipPosition(e);
        };
        
        marker.onmouseleave = function() {
            hideTooltip();
        };

        marker.onclick = function(e) {
            e.stopPropagation();
            playSound('click.mp3');
            renderRegionDetailPanel(regionCopy);
        };

        fragment.appendChild(marker);
    });
}

// ============================================================================
// REGION TOOLTIP (NEW)
// ============================================================================

function showRegionTooltip(event, region, control) {
    if (!region || !control) return;

    // Filter out undefined keys and 'unaligned', then sort by percentage
    const sortedFactions = Object.entries(control)
        .filter(([fid]) => fid && fid !== 'unaligned')
        .sort(([, a], [, b]) => (b || 0) - (a || 0));

    // Handle case with no faction data
    if (sortedFactions.length === 0) {
        showTooltip(event, `
            <div style="border-bottom: 1px solid #30363d; padding-bottom: 6px; margin-bottom: 8px;">
                <strong style="font-size: 0.95rem;">${region.name || 'Unknown Region'}</strong>
            </div>
            <div>
                <p style="margin: 4px 0; font-size: 0.8rem; color: #6e7681;">Region</p>
                <p style="margin: 4px 0;">No faction control established</p>
            </div>
        `);
        return;
    }

    // Build Factions List HTML
    let factionsHTML = '';
    sortedFactions.slice(0, 4).forEach(([factionId, percent]) => {
        const factionData = getFactionData(factionId);
        let allianceTag = '';
        try {
            const alliance = getAllianceForFaction(factionId);
            if (alliance) {
                allianceTag = `<span style="color:${alliance.color || '#888'}; font-size: 0.7rem; margin-left: 4px;">[${alliance.shortName || alliance.name.substring(0,3)}]</span>`;
            }
        } catch (e) { /* ignore */ }
        
        factionsHTML += `
            <div style="display: flex; align-items: center; gap: 6px; margin: 3px 0;">
                <div style="width: 10px; height: 10px; background: ${factionData.color}; border-radius: 2px; flex-shrink: 0;"></div>
                <span style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${factionData.name}</span>
                ${allianceTag}
                <span style="flex-shrink: 0; font-weight: 600;">${percent}%</span>
            </div>
        `;
    });

    // Get Dominant Faction Data
    const dominantEntry = sortedFactions[0];
    const dominantFaction = getFactionData(dominantEntry[0]);
    const isContested = isTerritoryContested(control);

    // Alliance Info
    let allianceHTML = '';
    try {
        const controllingAlliance = getControllingAlliance(control);
        if (controllingAlliance && !isContested) {
            allianceHTML = `<p style="color: ${controllingAlliance.color || '#4CAF50'}; font-size: 0.85rem; margin: 4px 0;">🤝 <strong>${controllingAlliance.name}</strong> Territory</p>`;
        }
    } catch (e) { /* ignore */ }

    // Province Info String
    const provinceNames = region.provinces && region.provinces.length > 0
        ? region.provinces.slice(0, 3).map(p => p.name).join(', ')
        : 'No provinces';
    const moreProvinces = (region.provinceCount || 0) > 3 ? ` +${region.provinceCount - 3} more` : '';

    // Construct Final HTML
    const content = `
        <div style="border-bottom: 1px solid #30363d; padding-bottom: 6px; margin-bottom: 8px;">
            <strong style="font-size: 0.95rem;">${region.name || 'Unknown Region'}</strong>
        </div>
        <div>
            <p style="margin: 0 0 4px 0; font-size: 0.8rem; color: #6e7681;">Region (${region.provinceCount || 0} provinces)</p>
            ${isContested ? '<p style="color: #f85149; font-weight: 600; margin: 4px 0;">⚔️ Contested Region</p>' : ''}
            ${allianceHTML}
            <p style="margin: 4px 0;"><strong>Dominant:</strong> <span style="color: ${dominantFaction.color}">${dominantFaction.name}</span> (${dominantEntry[1]}%)</p>
            <p style="margin: 4px 0; font-size: 0.85rem; color: #8b949e;">${provinceNames}${moreProvinces}</p>
            <div style="margin-top: 8px; border-top: 1px dashed #30363d; padding-top: 6px;">
                ${factionsHTML}
            </div>
        </div>
        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed #30363d; font-size: 0.75rem; color: #6e7681; text-align: center; font-style: italic;">Click for details</div>
    `;

    showTooltip(event, content);
}
function renderRegionDetailPanel(region) {
    if (!detailPanel) {
        initDOMReferences();
    }
    if (!detailPanel) {
        detailPanel = document.getElementById('map-detail-content');
    }
    if (!detailPanel) {
        console.warn('renderRegionDetailPanel: detailPanel not found');
        return;
    }

    const control = region.control || {};
    const sortedFactions = Object.entries(control)
        .filter(([fid]) => fid && fid !== 'unaligned')
        .sort(([, a], [, b]) => (b || 0) - (a || 0));

    const dominantFactionId = sortedFactions[0]?.[0];
    const dominantFaction = dominantFactionId ? getFactionData(dominantFactionId) : null;
    const dominantPercent = sortedFactions[0]?.[1] || 0;
    const isContested = isTerritoryContested(control);

    let controllingAlliance = null;
    try {
        controllingAlliance = getControllingAlliance(control);
    } catch (e) { /* ignore */ }

    // Get all POIs in this region
    const allPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    let regionPois = [];
    
    (region.provinces || []).forEach(province => {
        (province.states || []).forEach(state => {
            const radius = state.radius || TERRITORY_CONFIG.state.defaultRadius;
            const statePois = allPois.filter(poi => {
                const distance = Math.hypot(poi.x - state.x, poi.y - state.y);
                return distance <= radius;
            });
            regionPois = regionPois.concat(statePois);
        });
    });
    
    regionPois = [...new Map(regionPois.map(p => [p.id, p])).values()];

    const totalPop = regionPois.reduce((sum, p) => sum + (p.population || 0), 0);
    const totalMilitary = regionPois.reduce((sum, p) => sum + (p.military_strength || 0), 0);
    const totalEconomic = regionPois.reduce((sum, p) => sum + (p.economic_value || 0), 0);

    // Alliance info section
    let allianceInfoHTML = '';
    if (controllingAlliance && !isContested) {
        const allianceMembers = controllingAlliance.members || [];
        const presentMembers = sortedFactions
            .filter(([fid]) => allianceMembers.includes(fid))
            .map(([fid]) => getFactionData(fid));
        
        const combinedControl = sortedFactions
            .filter(([fid]) => allianceMembers.includes(fid))
            .reduce((sum, [, pct]) => sum + pct, 0);
        
        allianceInfoHTML = `
            <div class="alliance-control-box" style="border-left: 4px solid ${controllingAlliance.color || '#4CAF50'}; background: rgba(76, 175, 80, 0.1); padding: 10px; border-radius: 4px; margin-bottom: 12px;">
                <p style="margin: 0 0 6px 0;"><strong>🤝 Alliance Territory</strong></p>
                <p style="margin: 0; color: ${controllingAlliance.color || '#4CAF50'}; font-weight: 600;">${controllingAlliance.name}</p>
                <p style="margin: 6px 0 0 0; font-size: 0.9rem;">Combined Alliance Control: <strong>${combinedControl}%</strong></p>
            </div>
        `;
    }

    const factionsHTML = sortedFactions.map(([factionId, percent]) => {
        const factionData = getFactionData(factionId);
        let alliance = null;
        try {
            alliance = getAllianceForFaction(factionId);
        } catch (e) { /* ignore */ }
        const barWidth = Math.max(5, percent);
        
        return `
            <div class="province-faction-row">
                <div class="faction-info">
                    ${factionData.logo ? `<img src="${factionData.logo}" class="faction-mini-logo">` :
                      `<div class="legend-color-box" style="background-color: ${factionData.color};"></div>`}
                    <span style="color: ${factionData.color}">${factionData.name}</span>
                    ${alliance ? `<span class="faction-alliance-tag" style="color:${alliance.color || '#888'}; font-size:0.75rem;">[${alliance.shortName || alliance.name.substring(0,3)}]</span>` : ''}
                </div>
                <div class="faction-control-bar-container">
                    <div class="faction-control-bar" style="width: ${barWidth}%; background-color: ${factionData.color};"></div>
                    <span class="faction-percent">${percent}%</span>
                </div>
            </div>
        `;
    }).join('');

    const provincesHTML = (region.provinces || []).map(province => {
        const provDominant = getDominantFactionFromControl(province.control || {});
        const provFaction = getFactionData(provDominant.factionId);
        const provContested = isTerritoryContested(province.control || {});
        
        let statusIcon = '';
        if (provContested) {
            statusIcon = '<span class="state-status contested">⚔️</span>';
        }
        
        return `
            <div class="province-list-item" data-province-id="${province.id}" style="border-left-color: ${provFaction.color}">
                <span class="province-name">${province.name} ${statusIcon}</span>
                <span class="province-meta">${province.stateCount || 0} states</span>
            </div>
        `;
    }).join('');

    detailPanel.innerHTML = `
        <div class="poi-detail region-detail">
            <div class="province-header ${isContested ? 'contested' : ''}">
                <div>
                    <h3>${region.name}</h3>
                    <span class="province-type">🌍 Region (${region.provinceCount || 0} provinces)</span>
                </div>
                ${isContested ? '<span class="contested-badge">⚔️ Contested</span>' : ''}
                ${controllingAlliance && !isContested ? `<span class="alliance-badge-inline" style="background:${controllingAlliance.color || '#4CAF50'};">🤝 Allied</span>` : ''}
            </div>

            ${allianceInfoHTML}

            ${dominantFaction ? `
                <div class="province-dominant" style="border-left: 4px solid ${dominantFaction.color};">
                    <p><strong>Controlling Power:</strong></p>
                    <div style="display:flex; align-items:center; gap:8px;">
                        ${dominantFaction.logo ? `<img src="${dominantFaction.logo}" style="width:28px;height:28px;border-radius:4px;">` : ''}
                        <span style="color: ${dominantFaction.color}; font-size: 1.1rem; font-weight: 600;">${dominantFaction.name}</span>
                        <span style="color: var(--map-text-secondary); font-size: 0.9rem;">(${dominantPercent}% control)</span>
                    </div>
                </div>
            ` : ''}

            <div class="province-stats">
                <div class="stat-item">
                    <span class="stat-icon">🗺️</span>
                    <span class="stat-value">${region.provinceCount || 0}</span>
                    <span class="stat-label">Provinces</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">🏛️</span>
                    <span class="stat-value">${region.stateCount || 0}</span>
                    <span class="stat-label">States</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">📍</span>
                    <span class="stat-value">${regionPois.length}</span>
                    <span class="stat-label">Locations</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">👥</span>
                    <span class="stat-value">${formatPopulation(totalPop)}</span>
                    <span class="stat-label">Population</span>
                </div>
            </div>

            <h4>Faction Influence</h4>
            <div class="province-factions-list">
                ${factionsHTML.length > 0 ? factionsHTML : '<p class="panel-placeholder">No aligned factions</p>'}
            </div>

            <h4>Constituent Provinces (${region.provinceCount || 0})</h4>
            <div class="provinces-list">
                ${provincesHTML || '<p class="panel-placeholder">No provinces</p>'}
            </div>
        </div>
    `;

    // Add click handlers for province items
    detailPanel.querySelectorAll('.province-list-item').forEach(item => {
        item.addEventListener('click', () => {
            playSound('click.mp3');
            const provinceId = item.dataset.provinceId;
            const foundProvince = (region.provinces || []).find(p => p.id === provinceId);
            if (foundProvince) {
                renderProvinceDetailPanel(foundProvince);
            }
        });
    });
}
function renderStateMarkers(fragment, states, allPois) {
    states.forEach(state => {
        const control = calculateStateControl(state, allPois);
        const totalControl = Object.values(control).reduce((a, b) => a + b, 0);
        if (totalControl === 0) return;

        const dominant = getDominantFactionFromControl(control);
        if (dominant.factionId === 'unaligned') return;

        const poiCount = countPoisInState(state, allPois);
        const isContested = isTerritoryContested(control);
        
        let controllingAlliance = null;
        try {
            controllingAlliance = getControllingAlliance(control);
        } catch (e) { /* ignore */ }

        const baseSize = 24;
        const influenceBonus = Math.log2(Math.max(1, totalControl)) * 1.5;
        const poiBonus = Math.min(poiCount * 1.5, 10);
        const size = Math.max(baseSize, baseSize + influenceBonus + poiBonus);

        const marker = document.createElement('div');
        marker.className = 'state-marker';
        if (state.isDefined) marker.classList.add('defined-state');
        if (isContested) marker.classList.add('contested');
        if (controllingAlliance && !isContested) marker.classList.add('alliance-controlled');
        
        marker.style.left = `${state.x}%`;
        marker.style.top = `${state.y}%`;
        marker.style.width = `${size}px`;
        marker.style.height = `${size}px`;
        marker.dataset.stateId = state.id;

        const pieChartSVG = createPieChartSVG(control, size);
        
        let allianceBadge = '';
        if (controllingAlliance && !isContested) {
            allianceBadge = `<div class="alliance-badge" style="background:${controllingAlliance.color || '#4CAF50'};" title="${controllingAlliance.name}">🤝</div>`;
        }
        
        marker.innerHTML = pieChartSVG + allianceBadge + `<div class="state-label">${state.name}</div>`;
        marker.dataset.control = JSON.stringify(control);

        // Create closure-safe copies
        const stateCopy = {
            id: state.id,
            name: state.name,
            x: state.x,
            y: state.y,
            radius: state.radius,
            isDefined: state.isDefined
        };
        const controlCopy = { ...control };
        const poiCountCopy = poiCount;

        marker.onmouseenter = function(e) {
            showStateTooltip(e, stateCopy, controlCopy, poiCountCopy);
        };
        
        marker.onmousemove = function(e) {
            updateTooltipPosition(e);
        };
        
        marker.onmouseleave = function() {
            hideTooltip();
        };

        marker.onclick = function(e) {
            e.stopPropagation();
            playSound('click.mp3');
            renderStateDetailPanel({ ...stateCopy, control: controlCopy });
        };

        fragment.appendChild(marker);
    });
}
function renderProvinceMarkers(fragment, provinces, allPois) {
    provinces.forEach(province => {
        const control = province.control || {};
        const totalControl = Object.values(control).reduce((a, b) => a + b, 0);
        if (totalControl === 0) return;

        const dominant = getDominantFactionFromControl(control);
        if (dominant.factionId === 'unaligned') return;

        const isContested = isTerritoryContested(control);
        
        let controllingAlliance = null;
        try {
            controllingAlliance = getControllingAlliance(control);
        } catch (e) { /* ignore */ }

        const baseSize = 40;
        const stateBonus = (province.stateCount || 0) * 4;
        const size = Math.min(80, baseSize + stateBonus);

        const marker = document.createElement('div');
        marker.className = 'province-marker';
        if (isContested) marker.classList.add('contested');
        if (controllingAlliance && !isContested) marker.classList.add('alliance-controlled');
        
        marker.style.left = `${province.x}%`;
        marker.style.top = `${province.y}%`;
        marker.style.width = `${size}px`;
        marker.style.height = `${size}px`;
        marker.dataset.provinceId = province.id;

        const pieChartSVG = createPieChartSVG(control, size);
        const stateBadge = `<div class="province-state-count">${province.stateCount || 0}</div>`;
        
        let allianceBadge = '';
        if (controllingAlliance && !isContested) {
            allianceBadge = `<div class="alliance-badge" style="background:${controllingAlliance.color || '#4CAF50'};" title="${controllingAlliance.name}">🤝</div>`;
        }
        
        marker.innerHTML = pieChartSVG + stateBadge + allianceBadge + `<div class="province-label">${province.name}</div>`;
        marker.dataset.control = JSON.stringify(control);
        marker.dataset.stateCount = province.stateCount || 0;

        // Create closure-safe copy
        const provinceCopy = {
            id: province.id,
            name: province.name,
            x: province.x,
            y: province.y,
            radius: province.radius,
            stateCount: province.stateCount || (province.states ? province.states.length : 0),
            states: province.states ? province.states.map(s => ({
                id: s.id,
                name: s.name,
                x: s.x,
                y: s.y,
                radius: s.radius,
                control: s.control
            })) : [],
            control: { ...control }
        };

        marker.onmouseenter = function(e) {
            showProvinceTooltip(e, provinceCopy, provinceCopy.control);
        };
        
        marker.onmousemove = function(e) {
            updateTooltipPosition(e);
        };
        
        marker.onmouseleave = function() {
            hideTooltip();
        };

        marker.onclick = function(e) {
            e.stopPropagation();
            playSound('click.mp3');
            renderProvinceDetailPanel(provinceCopy);
        };

        fragment.appendChild(marker);
    });
}
// ============================================================================
// TOOLTIP FUNCTIONS
// ============================================================================



// ============================================================================
// DETAIL PANEL RENDERERS
// ============================================================================


function updateTooltipPosition(event) {
    if (!tooltip || !displayArea) return;
    
    const rect = displayArea.getBoundingClientRect();
    
    let x = event.clientX - rect.left + 15;
    let y = event.clientY - rect.top + 15;

    // Measure tooltip size
    const tooltipWidth = tooltip.offsetWidth || 200;
    const tooltipHeight = tooltip.offsetHeight || 100;

    // Keep tooltip in bounds
    if (x + tooltipWidth > rect.width - 10) {
        x = event.clientX - rect.left - tooltipWidth - 15;
    }
    if (y + tooltipHeight > rect.height - 10) {
        y = event.clientY - rect.top - tooltipHeight - 15;
    }
    if (x < 10) x = 10;
    if (y < 10) y = 10;

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function showProvinceTooltip(event, province, control) {
    const sortedFactions = Object.entries(control || {})
        .filter(([fid]) => fid && fid !== 'unaligned')
        .sort(([, a], [, b]) => (b || 0) - (a || 0));

    if (sortedFactions.length === 0) {
        showTooltip(event, `
            <div style="border-bottom: 1px solid #30363d; padding-bottom: 6px; margin-bottom: 8px;">
                <strong style="font-size: 0.95rem;">${province.name || 'Unknown Province'}</strong>
            </div>
            <div>
                <p style="margin: 4px 0; font-size: 0.8rem; color: #6e7681;">Province (${province.stateCount || 0} states)</p>
                <p style="margin: 4px 0;">No faction data available</p>
            </div>
        `);
        return;
    }

    let factionsHTML = '';
    sortedFactions.slice(0, 4).forEach(([factionId, percent]) => {
        const factionData = getFactionData(factionId);
        let allianceTag = '';
        try {
            const alliance = getAllianceForFaction(factionId);
            if (alliance) {
                allianceTag = `<span style="color:${alliance.color || '#888'}; font-size: 0.7rem; margin-left: 4px;">[${alliance.shortName || alliance.name.substring(0,3)}]</span>`;
            }
        } catch (e) { /* ignore alliance errors */ }
        
        factionsHTML += `
            <div style="display: flex; align-items: center; gap: 6px; margin: 3px 0;">
                <div style="width: 10px; height: 10px; background: ${factionData.color}; border-radius: 2px; flex-shrink: 0;"></div>
                <span style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${factionData.name}</span>
                ${allianceTag}
                <span style="flex-shrink: 0; font-weight: 600;">${percent}%</span>
            </div>
        `;
    });

    const dominant = sortedFactions[0];
    const dominantFaction = getFactionData(dominant[0]);
    const isContested = isTerritoryContested(control);

    let allianceHTML = '';
    try {
        const controllingAlliance = getControllingAlliance(control);
        if (controllingAlliance && !isContested) {
            allianceHTML = `<p style="color: ${controllingAlliance.color || '#4CAF50'}; font-size: 0.85rem; margin: 4px 0;">🤝 <strong>${controllingAlliance.name}</strong> Territory</p>`;
        }
    } catch (e) { /* ignore alliance errors */ }

    const stateCount = province.stateCount || (province.states ? province.states.length : 0);
    let stateNames = 'No states';
    if (province.states && province.states.length > 0) {
        stateNames = province.states.slice(0, 3).map(s => s.name).join(', ');
        if (province.states.length > 3) {
            stateNames += ` +${province.states.length - 3} more`;
        }
    }

    const content = `
        <div style="border-bottom: 1px solid #30363d; padding-bottom: 6px; margin-bottom: 8px;">
            <strong style="font-size: 0.95rem;">${province.name || 'Unknown Province'}</strong>
        </div>
        <div>
            <p style="margin: 0 0 4px 0; font-size: 0.8rem; color: #6e7681;">Province (${stateCount} states)</p>
            ${isContested ? '<p style="color: #f85149; font-weight: 600; margin: 4px 0;">⚔️ Contested Province</p>' : ''}
            ${allianceHTML}
            <p style="margin: 4px 0;"><strong>Dominant:</strong> <span style="color: ${dominantFaction.color}">${dominantFaction.name}</span> (${dominant[1]}%)</p>
            <p style="margin: 4px 0;"><strong>States:</strong> ${stateNames}</p>
            <div style="margin-top: 8px; border-top: 1px dashed #30363d; padding-top: 6px;">
                ${factionsHTML}
            </div>
        </div>
        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed #30363d; font-size: 0.75rem; color: #6e7681; text-align: center; font-style: italic;">Click for details</div>
    `;

    showTooltip(event, content);
}

// ============================================================================
// UPDATED: showStateTooltip - Works for single and multi-faction states
// ============================================================================

function showStateTooltip(event, state, control, poiCount) {
    const sortedFactions = Object.entries(control || {})
        .filter(([fid]) => fid && fid !== 'unaligned')
        .sort(([, a], [, b]) => (b || 0) - (a || 0));

    if (sortedFactions.length === 0) {
        showTooltip(event, `
            <div style="border-bottom: 1px solid #30363d; padding-bottom: 6px; margin-bottom: 8px;">
                <strong style="font-size: 0.95rem;">${state.name || 'Unknown State'}</strong>
            </div>
            <div>
                <p style="margin: 4px 0; font-size: 0.8rem; color: #6e7681;">State</p>
                <p style="margin: 4px 0;">No faction data available</p>
            </div>
        `);
        return;
    }

    let factionsHTML = '';
    sortedFactions.slice(0, 4).forEach(([factionId, percent]) => {
        const factionData = getFactionData(factionId);
        let allianceTag = '';
        try {
            const alliance = getAllianceForFaction(factionId);
            if (alliance) {
                allianceTag = `<span style="color:${alliance.color || '#888'}; font-size: 0.7rem; margin-left: 4px;">[${alliance.shortName || alliance.name.substring(0,3)}]</span>`;
            }
        } catch (e) { /* ignore alliance errors */ }
        
        factionsHTML += `
            <div style="display: flex; align-items: center; gap: 6px; margin: 3px 0;">
                <div style="width: 10px; height: 10px; background: ${factionData.color}; border-radius: 2px; flex-shrink: 0;"></div>
                <span style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${factionData.name}</span>
                ${allianceTag}
                <span style="flex-shrink: 0; font-weight: 600;">${percent}%</span>
            </div>
        `;
    });

    const dominant = sortedFactions[0];
    const dominantFaction = getFactionData(dominant[0]);
    const isContested = isTerritoryContested(control);
    
    let allianceHTML = '';
    try {
        const controllingAlliance = getControllingAlliance(control);
        if (controllingAlliance && !isContested) {
            allianceHTML = `<p style="color: ${controllingAlliance.color || '#4CAF50'}; font-size: 0.85rem; margin: 4px 0;">🤝 <strong>${controllingAlliance.name}</strong> Territory</p>`;
        }
    } catch (e) { /* ignore alliance errors */ }

    const stateType = state.isDefined ? 'Defined State' : 'Generated State';

    const content = `
        <div style="border-bottom: 1px solid #30363d; padding-bottom: 6px; margin-bottom: 8px;">
            <strong style="font-size: 0.95rem;">${state.name || 'Unknown State'}</strong>
        </div>
        <div>
            <p style="margin: 0 0 4px 0; font-size: 0.8rem; color: #6e7681;">${stateType}</p>
            ${isContested ? '<p style="color: #f85149; font-weight: 600; margin: 4px 0;">⚔️ Contested State</p>' : ''}
            ${allianceHTML}
            <p style="margin: 4px 0;"><strong>Dominant:</strong> <span style="color: ${dominantFaction.color}">${dominantFaction.name}</span> (${dominant[1]}%)</p>
            <p style="margin: 4px 0;"><strong>Locations:</strong> ${poiCount}</p>
            <div style="margin-top: 8px; border-top: 1px dashed #30363d; padding-top: 6px;">
                ${factionsHTML}
            </div>
        </div>
        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed #30363d; font-size: 0.75rem; color: #6e7681; text-align: center; font-style: italic;">Click for details</div>
    `;

    showTooltip(event, content);
}



function renderStateDetailPanel(state) {
    if (!detailPanel) {
        initDOMReferences();
    }
    if (!detailPanel) {
        detailPanel = document.getElementById('map-detail-content');
    }
    if (!detailPanel) {
        console.warn('renderStateDetailPanel: detailPanel not found');
        return;
    }

    const control = state.control || {};
    const sortedFactions = Object.entries(control)
        .filter(([fid]) => fid && fid !== 'unaligned')
        .sort(([, a], [, b]) => (b || 0) - (a || 0));

    const dominantFactionId = sortedFactions[0]?.[0];
    const dominantFaction = dominantFactionId ? getFactionData(dominantFactionId) : null;
    const dominantPercent = sortedFactions[0]?.[1] || 0;
    const isContested = isTerritoryContested(control);
    
    let controllingAlliance = null;
    try {
        controllingAlliance = getControllingAlliance(control);
    } catch (e) { /* ignore */ }

    const allPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    const radius = state.radius || TERRITORY_CONFIG.state.defaultRadius;
    const statePois = allPois.filter(poi => {
        const distance = Math.hypot(poi.x - state.x, poi.y - state.y);
        return distance <= radius;
    });

    const totalPop = statePois.reduce((sum, p) => sum + (p.population || 0), 0);
    const totalMilitary = statePois.reduce((sum, p) => sum + (p.military_strength || 0), 0);
    const totalEconomic = statePois.reduce((sum, p) => sum + (p.economic_value || 0), 0);

    let stateTypeClass = 'generated';
    let stateTypeLabel = '🔄 Auto-Generated State';
    if (state.isDefined) {
        stateTypeClass = 'defined';
        stateTypeLabel = '📍 Defined State';
    }

    // Alliance info section
    let allianceInfoHTML = '';
    if (controllingAlliance && !isContested) {
        const allianceMembers = controllingAlliance.members || [];
        const presentMembers = sortedFactions
            .filter(([fid]) => allianceMembers.includes(fid))
            .map(([fid]) => getFactionData(fid));
        
        allianceInfoHTML = `
            <div class="alliance-control-box" style="border-left: 4px solid ${controllingAlliance.color || '#4CAF50'}; background: rgba(76, 175, 80, 0.1); padding: 10px; border-radius: 4px; margin-bottom: 12px;">
                <p style="margin: 0 0 6px 0;"><strong>🤝 Alliance Territory</strong></p>
                <p style="margin: 0; color: ${controllingAlliance.color || '#4CAF50'}; font-weight: 600;">${controllingAlliance.name}</p>
                ${presentMembers.length > 1 ? `
                    <p style="margin: 6px 0 0 0; font-size: 0.85rem; color: var(--map-text-secondary);">
                        Members present: ${presentMembers.map(f => `<span style="color:${f.color}">${f.shortName || f.name}</span>`).join(', ')}
                    </p>
                ` : ''}
            </div>
        `;
    }

    const factionsHTML = sortedFactions.map(([factionId, percent]) => {
        const factionData = getFactionData(factionId);
        let alliance = null;
        try {
            alliance = getAllianceForFaction(factionId);
        } catch (e) { /* ignore */ }
        const barWidth = Math.max(5, percent);
        
        return `
            <div class="province-faction-row">
                <div class="faction-info">
                    ${factionData.logo ? `<img src="${factionData.logo}" class="faction-mini-logo">` :
                      `<div class="legend-color-box" style="background-color: ${factionData.color};"></div>`}
                    <span style="color: ${factionData.color}">${factionData.name}</span>
                    ${alliance ? `<span class="faction-alliance-tag" style="color:${alliance.color || '#888'}; font-size:0.75rem;">[${alliance.shortName || alliance.name.substring(0,3)}]</span>` : ''}
                </div>
                <div class="faction-control-bar-container">
                    <div class="faction-control-bar" style="width: ${barWidth}%; background-color: ${factionData.color};"></div>
                    <span class="faction-percent">${percent}%</span>
                </div>
            </div>
        `;
    }).join('');

    detailPanel.innerHTML = `
        <div class="poi-detail state-detail">
            <div class="province-header ${isContested ? 'contested' : ''}">
                <div>
                    <h3>${state.name}</h3>
                    <span class="province-type ${stateTypeClass}">${stateTypeLabel}</span>
                </div>
                ${isContested ? '<span class="contested-badge">⚔️ Contested</span>' : ''}
                ${controllingAlliance && !isContested ? `<span class="alliance-badge-inline" style="background:${controllingAlliance.color || '#4CAF50'};">🤝 Allied</span>` : ''}
            </div>

            ${allianceInfoHTML}

            ${dominantFaction ? `
                <div class="province-dominant" style="border-left: 4px solid ${dominantFaction.color};">
                    <p><strong>Controlling Power:</strong></p>
                    <div style="display:flex; align-items:center; gap:8px;">
                        ${dominantFaction.logo ? `<img src="${dominantFaction.logo}" style="width:28px;height:28px;border-radius:4px;">` : ''}
                        <span style="color: ${dominantFaction.color}; font-size: 1.1rem; font-weight: 600;">${dominantFaction.name}</span>
                        <span style="color: var(--map-text-secondary); font-size: 0.9rem;">(${dominantPercent}% control)</span>
                    </div>
                </div>
            ` : ''}

            <div class="province-stats">
                <div class="stat-item">
                    <span class="stat-icon">📍</span>
                    <span class="stat-value">${statePois.length}</span>
                    <span class="stat-label">Locations</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">👥</span>
                    <span class="stat-value">${formatPopulation(totalPop)}</span>
                    <span class="stat-label">Population</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">⚔️</span>
                    <span class="stat-value">${totalMilitary}</span>
                    <span class="stat-label">Military</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">💰</span>
                    <span class="stat-value">${totalEconomic}</span>
                    <span class="stat-label">Economic</span>
                </div>
            </div>

            <h4>Faction Influence</h4>
            <div class="province-factions-list">
                ${factionsHTML.length > 0 ? factionsHTML : '<p class="panel-placeholder">No aligned factions</p>'}
            </div>

            ${statePois.length > 0 ? `
                <h4>Locations (${statePois.length})</h4>
                <div class="province-poi-list">
                    ${statePois.slice(0, 8).map(poi => {
                        const poiFaction = getFactionData(poi.factionId);
                        const typeInfo = BUILDING_TYPES[poi.type] || { icon: '📍' };
                        return `
                            <div class="province-poi-item" data-poi-id="${poi.id}" style="border-left-color: ${poiFaction.color}">
                                <span class="poi-icon">${typeInfo.icon}</span>
                                <span class="poi-name">${poi.name}</span>
                            </div>
                        `;
                    }).join('')}
                    ${statePois.length > 8 ? `<p class="more-locations">+${statePois.length - 8} more locations</p>` : ''}
                </div>
            ` : '<p class="panel-placeholder">No locations in this state</p>'}
        </div>
    `;

    // Add click handlers for POI items
    detailPanel.querySelectorAll('.province-poi-item').forEach(item => {
        item.addEventListener('click', () => {
            playSound('click.mp3');
            showDetailPanel(item.dataset.poiId);
        });
    });
}

function renderProvinceDetailPanel(province) {
    if (!detailPanel) {
        initDOMReferences();
    }
    if (!detailPanel) {
        detailPanel = document.getElementById('map-detail-content');
    }
    if (!detailPanel) {
        console.warn('renderProvinceDetailPanel: detailPanel not found');
        return;
    }

    const control = province.control || {};
    const sortedFactions = Object.entries(control)
        .filter(([fid]) => fid && fid !== 'unaligned')
        .sort(([, a], [, b]) => (b || 0) - (a || 0));

    const dominantFactionId = sortedFactions[0]?.[0];
    const dominantFaction = dominantFactionId ? getFactionData(dominantFactionId) : null;
    const dominantPercent = sortedFactions[0]?.[1] || 0;
    const isContested = isTerritoryContested(control);
    
    let controllingAlliance = null;
    try {
        controllingAlliance = getControllingAlliance(control);
    } catch (e) { /* ignore */ }

    const allPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    
    // Get all POIs from all states in this province
    let provincePois = [];
    if (province.states && province.states.length > 0) {
        province.states.forEach(pState => {
            const radius = pState.radius || TERRITORY_CONFIG.state.defaultRadius;
            const statePois = allPois.filter(poi => {
                const distance = Math.hypot(poi.x - pState.x, poi.y - pState.y);
                return distance <= radius;
            });
            provincePois = provincePois.concat(statePois);
        });
    }
    
    // Remove duplicates
    provincePois = [...new Map(provincePois.map(p => [p.id, p])).values()];

    const totalPop = provincePois.reduce((sum, p) => sum + (p.population || 0), 0);
    const totalMilitary = provincePois.reduce((sum, p) => sum + (p.military_strength || 0), 0);
    const totalEconomic = provincePois.reduce((sum, p) => sum + (p.economic_value || 0), 0);

    // Alliance info section
    let allianceInfoHTML = '';
    if (controllingAlliance && !isContested) {
        const allianceMembers = controllingAlliance.members || [];
        const presentMembers = sortedFactions
            .filter(([fid]) => allianceMembers.includes(fid))
            .map(([fid]) => getFactionData(fid));
        
        const combinedControl = sortedFactions
            .filter(([fid]) => allianceMembers.includes(fid))
            .reduce((sum, [, pct]) => sum + pct, 0);
        
        allianceInfoHTML = `
            <div class="alliance-control-box" style="border-left: 4px solid ${controllingAlliance.color || '#4CAF50'}; background: rgba(76, 175, 80, 0.1); padding: 10px; border-radius: 4px; margin-bottom: 12px;">
                <p style="margin: 0 0 6px 0;"><strong>🤝 Alliance Territory</strong></p>
                <p style="margin: 0; color: ${controllingAlliance.color || '#4CAF50'}; font-weight: 600;">${controllingAlliance.name}</p>
                <p style="margin: 6px 0 0 0; font-size: 0.9rem;">Combined Alliance Control: <strong>${combinedControl}%</strong></p>
                ${presentMembers.length > 1 ? `
                    <p style="margin: 6px 0 0 0; font-size: 0.85rem; color: var(--map-text-secondary);">
                        Members present: ${presentMembers.map(f => `<span style="color:${f.color}">${f.shortName || f.name}</span>`).join(', ')}
                    </p>
                ` : ''}
            </div>
        `;
    }

    const factionsHTML = sortedFactions.map(([factionId, percent]) => {
        const factionData = getFactionData(factionId);
        let alliance = null;
        try {
            alliance = getAllianceForFaction(factionId);
        } catch (e) { /* ignore */ }
        const barWidth = Math.max(5, percent);
        
        return `
            <div class="province-faction-row">
                <div class="faction-info">
                    ${factionData.logo ? `<img src="${factionData.logo}" class="faction-mini-logo">` :
                      `<div class="legend-color-box" style="background-color: ${factionData.color};"></div>`}
                    <span style="color: ${factionData.color}">${factionData.name}</span>
                    ${alliance ? `<span class="faction-alliance-tag" style="color:${alliance.color || '#888'}; font-size:0.75rem;">[${alliance.shortName || alliance.name.substring(0,3)}]</span>` : ''}
                </div>
                <div class="faction-control-bar-container">
                    <div class="faction-control-bar" style="width: ${barWidth}%; background-color: ${factionData.color};"></div>
                    <span class="faction-percent">${percent}%</span>
                </div>
            </div>
        `;
    }).join('');

    const stateCount = province.stateCount || (province.states ? province.states.length : 0);
    
    const statesHTML = (province.states || []).map(pState => {
        const stateControl = pState.control || calculateStateControl(pState, allPois);
        const stateDominant = getDominantFactionFromControl(stateControl);
        const stateFaction = getFactionData(stateDominant.factionId);
        const stateContested = isTerritoryContested(stateControl);
        
        let stateAlliance = null;
        try {
            stateAlliance = getControllingAlliance(stateControl);
        } catch (e) { /* ignore */ }
        
        let statusIcon = '';
        if (stateContested) {
            statusIcon = '<span class="state-status contested">⚔️</span>';
        } else if (stateAlliance) {
            statusIcon = `<span class="state-status allied" style="color:${stateAlliance.color || '#4CAF50'};">🤝</span>`;
        }
        
        return `
            <div class="state-list-item" data-state-id="${pState.id}" style="border-left-color: ${stateFaction.color}">
                <span class="state-name">${pState.name} ${statusIcon}</span>
                <span class="state-control" style="color: ${stateFaction.color}">${stateDominant.percentage}%</span>
            </div>
        `;
    }).join('');

    detailPanel.innerHTML = `
        <div class="poi-detail province-detail">
            <div class="province-header ${isContested ? 'contested' : ''}">
                <div>
                    <h3>${province.name}</h3>
                    <span class="province-type">🗺️ Province (${stateCount} states)</span>
                </div>
                ${isContested ? '<span class="contested-badge">⚔️ Contested</span>' : ''}
                ${controllingAlliance && !isContested ? `<span class="alliance-badge-inline" style="background:${controllingAlliance.color || '#4CAF50'};">🤝 Allied</span>` : ''}
            </div>

            ${allianceInfoHTML}

            ${dominantFaction ? `
                <div class="province-dominant" style="border-left: 4px solid ${dominantFaction.color};">
                    <p><strong>Controlling Power:</strong></p>
                    <div style="display:flex; align-items:center; gap:8px;">
                        ${dominantFaction.logo ? `<img src="${dominantFaction.logo}" style="width:28px;height:28px;border-radius:4px;">` : ''}
                        <span style="color: ${dominantFaction.color}; font-size: 1.1rem; font-weight: 600;">${dominantFaction.name}</span>
                        <span style="color: var(--map-text-secondary); font-size: 0.9rem;">(${dominantPercent}% control)</span>
                    </div>
                </div>
            ` : ''}

            <div class="province-stats">
                <div class="stat-item">
                    <span class="stat-icon">🏛️</span>
                    <span class="stat-value">${stateCount}</span>
                    <span class="stat-label">States</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">📍</span>
                    <span class="stat-value">${provincePois.length}</span>
                    <span class="stat-label">Locations</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">👥</span>
                    <span class="stat-value">${formatPopulation(totalPop)}</span>
                    <span class="stat-label">Population</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">⚔️</span>
                    <span class="stat-value">${totalMilitary}</span>
                    <span class="stat-label">Military</span>
                </div>
            </div>

            <h4>Faction Influence</h4>
            <div class="province-factions-list">
                ${factionsHTML.length > 0 ? factionsHTML : '<p class="panel-placeholder">No aligned factions</p>'}
            </div>

            ${statesHTML ? `
                <h4>Constituent States (${stateCount})</h4>
                <div class="states-list">
                    ${statesHTML}
                </div>
            ` : ''}

            ${provincePois.length > 0 ? `
                <h4>Key Locations (${provincePois.length})</h4>
                <div class="province-poi-list">
                    ${provincePois.slice(0, 6).map(poi => {
                        const poiFaction = getFactionData(poi.factionId);
                        const typeInfo = BUILDING_TYPES[poi.type] || { icon: '📍' };
                        return `
                            <div class="province-poi-item" data-poi-id="${poi.id}" style="border-left-color: ${poiFaction.color}">
                                <span class="poi-icon">${typeInfo.icon}</span>
                                <span class="poi-name">${poi.name}</span>
                            </div>
                        `;
                    }).join('')}
                    ${provincePois.length > 6 ? `<p class="more-locations">+${provincePois.length - 6} more locations</p>` : ''}
                </div>
            ` : ''}
        </div>
    `;

    // Add click handlers for POI items
    detailPanel.querySelectorAll('.province-poi-item').forEach(item => {
        item.addEventListener('click', () => {
            playSound('click.mp3');
            showDetailPanel(item.dataset.poiId);
        });
    });

    // Add click handlers for state items
    detailPanel.querySelectorAll('.state-list-item').forEach(item => {
        item.addEventListener('click', () => {
            playSound('click.mp3');
            const stateId = item.dataset.stateId;
            const foundState = (province.states || []).find(s => s.id === stateId);
            if (foundState) {
                const stateControl = foundState.control || calculateStateControl(foundState, allPois);
                renderStateDetailPanel({ ...foundState, control: stateControl });
            }
        });
    });
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function hexToRgba(hex, alpha) {
    if (!hex || !/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        return `rgba(128,128,128,${alpha})`;
    }
    
    let c = hex.substring(1).split('');
    if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    
    const r = parseInt(c.slice(0, 2).join(''), 16);
    const g = parseInt(c.slice(2, 4).join(''), 16);
    const b = parseInt(c.slice(4, 6).join(''), 16);
    
    return `rgba(${r},${g},${b},${alpha})`;
}

function valueToColor(value, min, max, colors) {
    const ratio = Math.max(0, Math.min(1, (value - min) / (max - min)));
    const colorIndex = Math.floor(ratio * (colors.length - 1));
    const lowerColor = colors[colorIndex];
    const upperColor = colors[Math.min(colors.length - 1, colorIndex + 1)];
    const segmentRatio = (ratio * (colors.length - 1)) - colorIndex;

    const hexToRgb = (hex) => ({
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16),
    });
    
    const c1 = hexToRgb(lowerColor);
    const c2 = hexToRgb(upperColor);
    
    const r = Math.round(c1.r + (c2.r - c1.r) * segmentRatio);
    const g = Math.round(c1.g + (c2.g - c1.g) * segmentRatio);
    const b = Math.round(c1.b + (c2.b - c1.b) * segmentRatio);
    
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

function getPopulationColor(population) {
    const thresholds = [
        { max: 50, color: '#4575b4' },
        { max: 500, color: '#91bfdb' },
        { max: 2000, color: '#e0f3f8' },
        { max: 5000, color: '#fee090' },
        { max: 10000, color: '#fdae61' },
        { max: Infinity, color: '#f46d43' }
    ];
    
    return thresholds.find(t => population <= t.max)?.color || '#4575b4';
}

// ============================================================================
// FACTION HELPERS
// ============================================================================

export function getFactionData(factionId) {
    if (!factionId) {
        return {
            id: 'unaligned',
            name: 'Unaligned',
            shortName: 'UNA',
            color: '#888888',
            logo: null,
            icon: '❓',
            description: 'No faction affiliation'
        };
    }

    const faction = LORE_DATA.factions?.[factionId];
    const color = FACTION_COLORS[factionId] || faction?.color || '#888888';

    if (!faction) {
        return {
            id: factionId,
            name: factionId.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            shortName: factionId.substring(0, 3).toUpperCase(),
            color,
            logo: null,
            icon: '🏴',
            description: 'Unknown faction'
        };
    }

    return {
        id: factionId,
        name: faction.name || factionId,
        shortName: faction.shortName || faction.name?.substring(0, 3).toUpperCase() || 'UNK',
        color,
        logo: faction.logo || null,
        icon: faction.icon || '🏴',
        description: faction.description || ''
    };
}

export function getDominantFaction(pois) {
    const factionPower = {};
    const factionCounts = {};

    pois.forEach(poi => {
        const fid = poi.factionId || 'unaligned';
        factionCounts[fid] = (factionCounts[fid] || 0) + 1;
        
        const power = (poi.political_influence || 1) + 
                      (poi.military_strength || 0) + 
                      (poi.economic_value || 0);
        factionPower[fid] = (factionPower[fid] || 0) + power;
    });

    let dominant = 'unaligned';
    let maxPower = 0;

    for (const [fid, power] of Object.entries(factionPower)) {
        if (power > maxPower) {
            maxPower = power;
            dominant = fid;
        }
    }

    return {
        factionId: dominant,
        count: factionCounts[dominant] || 0,
        totalFactions: Object.keys(factionCounts).length,
        isContested: Object.keys(factionCounts).length > 1
    };
}

export function getRegionFactionStats(pois) {
    const stats = {};

    pois.forEach(poi => {
        const fid = poi.factionId || 'unaligned';
        
        if (!stats[fid]) {
            stats[fid] = {
                poiCount: 0,
                totalMilitary: 0,
                totalEconomic: 0,
                totalPolitical: 0,
                totalPopulation: 0
            };
        }
        
        stats[fid].poiCount++;
        stats[fid].totalMilitary += poi.military_strength || 0;
        stats[fid].totalEconomic += poi.economic_value || 0;
        stats[fid].totalPolitical += poi.political_influence || 0;
        stats[fid].totalPopulation += poi.population || 0;
    });

    return stats;
}

// ============================================================================
// INTEL CHECK
// ============================================================================

function hasSufficientIntel(requirement) {
    if (!requirement) return true;
    if (state.debugMode) return true;
    
    if (typeof requirement === 'number') {
        return true;
    }
    
    if (typeof requirement === 'object' && requirement.faction && typeof requirement.level === 'number') {
        return getIntelForFaction(requirement.faction) >= requirement.level;
    }
    
    return true;
}

// ============================================================================
// TOOLTIP
// ============================================================================

function createTooltip() {
    if (!displayArea) {
        displayArea = document.getElementById('map-display-area');
    }
    if (!displayArea) return;

    // Remove any existing tooltip
    const existing = document.getElementById('map-tooltip');
    if (existing) {
        existing.remove();
    }
    
    tooltip = document.createElement('div');
    tooltip.id = 'map-tooltip';
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(13, 17, 23, 0.95);
        border: 1px solid #30363d;
        border-radius: 8px;
        padding: 10px 12px;
        max-width: 300px;
        z-index: 9999;
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.15s ease;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
        font-size: 0.85rem;
        color: #c9d1d9;
    `;
    displayArea.appendChild(tooltip);
}
function showTooltip(event, content) {
    if (!displayArea) {
        displayArea = document.getElementById('map-display-area');
    }
    if (!tooltip) {
        createTooltip();
    }
    if (!tooltip || !displayArea) return;
    
    tooltip.innerHTML = content;
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
    
    updateTooltipPosition(event);
}
function assignPartyMembersToPois(pois, mapId) {
    // 1. Reset existing assignments
    pois.forEach(p => p.partyMembers = []);

    // 2. Get compatible map IDs (in case party is on a shared map layer)
    // We reuse the logic from the existing party layer
    const currentData = MAP_DATA[mapId];
    if (!currentData) return;

    // 3. Find all party members on this map (or compatible layers)
    let allMembers = [];
    const compatibleIds = Object.keys(MAP_DATA).filter(k => 
        MAP_DATA[k].imageSrc === currentData.imageSrc
    );
    
    compatibleIds.forEach(id => {
        if (PARTY_LOCATIONS[id]) {
            allMembers = allMembers.concat(PARTY_LOCATIONS[id]);
        }
    });

    if (allMembers.length === 0) return;

    // 4. Assign each member to the mathematically closest POI
    allMembers.forEach(member => {
        let nearestPoi = null;
        let minDistance = Infinity;

        pois.forEach(poi => {
            const dist = Math.hypot(member.x - poi.x, member.y - poi.y);
            if (dist < minDistance) {
                minDistance = dist;
                nearestPoi = poi;
            }
        });

        // Optional: Only snap if within reasonable distance (e.g. 20% of map width)
        // If you want them ALWAYS in a POI, remove the (minDistance < 20) check
        if (nearestPoi && minDistance < 20) {
            nearestPoi.partyMembers.push(member);
        }
    });
}
function hideTooltip() {
    if (tooltip) {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    }
}



// ============================================================================
// CLUSTERING
// ============================================================================

function clusterPois(pois, threshold) {
    if (!CLUSTER_CONFIG.enabled || pois.length === 0) {
        return pois.map(poi => ({
            x: poi.x,
            y: poi.y,
            pois: [poi],
            isCluster: false
        }));
    }

    const clusters = [];
    const assigned = new Set();

    // Sort by importance (larger POIs anchor clusters)
    const sortedPois = [...pois].sort((a, b) => {
        const aScore = (a.political_influence || 0) + (a.military_strength || 0) + (a.economic_value || 0);
        const bScore = (b.political_influence || 0) + (b.military_strength || 0) + (b.economic_value || 0);
        return bScore - aScore;
    });

    sortedPois.forEach(poi => {
        if (assigned.has(poi.id)) return;

        // Find nearby cluster
        let foundCluster = null;
        for (const cluster of clusters) {
            const distance = Math.hypot(poi.x - cluster.x, poi.y - cluster.y);
            
            if (distance < threshold && cluster.pois.length < CLUSTER_CONFIG.maxClusterSize) {
                foundCluster = cluster;
                break;
            }
        }

        if (foundCluster) {
            foundCluster.pois.push(poi);
            
            // Recalculate weighted center
            let totalWeight = 0;
            let weightedX = 0;
            let weightedY = 0;
            
            foundCluster.pois.forEach(p => {
                const weight = 1 + (p.political_influence || 0) + (p.military_strength || 0);
                weightedX += p.x * weight;
                weightedY += p.y * weight;
                totalWeight += weight;
            });
            
            foundCluster.x = weightedX / totalWeight;
            foundCluster.y = weightedY / totalWeight;
        } else {
            clusters.push({
                x: poi.x,
                y: poi.y,
                pois: [poi],
                isCluster: false
            });
        }
        
        assigned.add(poi.id);
    });

    // Mark clusters
    clusters.forEach(c => {
        c.isCluster = c.pois.length > 1;
    });

    return clusters;
}

// ============================================================================
// MARKER FACTORIES
// ============================================================================

function createPoiMarker(poi) {
    const marker = document.createElement('div');
    marker.className = 'poi-marker';
    marker.style.left = `${poi.x}%`;
    marker.style.top = `${poi.y}%`;
    marker.dataset.poiId = poi.id;

    applyPoiStyle(marker, poi);

    // Edit mode
    if (map.isEditMode) {
        marker.draggable = true;
        marker.classList.add('draggable-poi');
    }

    // Request indicator
    const hasRequest = Object.values(QUEST_DATA).some(
        q => q.locationId === poi.id && q.status === 'available'
    );
    
    if (hasRequest && !map.isEditMode) {
        const indicator = document.createElement('div');
        indicator.className = 'poi-request-indicator';
        indicator.textContent = '!';
        marker.appendChild(indicator);
    }

    // PARTY MEMBER INDICATOR
    const partyMembers = getPartyMembersAtPoi(poi.id);
    if (partyMembers.length > 0 && !map.isEditMode) {
        marker.classList.add('has-party-members');
        
        const partyIndicator = document.createElement('div');
        partyIndicator.className = 'poi-party-indicator';
        
        if (partyMembers.length === 1) {
            // Single member - show portrait
            partyIndicator.style.backgroundImage = `url('${partyMembers[0].portrait}')`;
            partyIndicator.title = partyMembers[0].name;
        } else {
            // Multiple members - show count
            partyIndicator.textContent = partyMembers.length;
            partyIndicator.title = partyMembers.map(m => m.name).join(', ');
        }
        
        // Add status indicator
        const hasAlert = partyMembers.some(m => 
            m.status.toLowerCase().includes('danger') || 
            m.status.toLowerCase().includes('combat') ||
            m.status.toLowerCase().includes('mia') ||
            m.status.toLowerCase().includes('missing')
        );
        
        if (hasAlert) {
            partyIndicator.classList.add('party-alert');
        }
        
        marker.appendChild(partyIndicator);
    }

    // Add tooltip events
    marker.addEventListener('mouseenter', (e) => showPoiTooltip(e, poi));
    marker.addEventListener('mousemove', (e) => updateTooltipPosition(e));
    marker.addEventListener('mouseleave', hideTooltip);
    marker.addEventListener('click', (e) => {
        e.stopPropagation();
        playSound('click.mp3');
        showDetailPanel(poi.id);
    });

    return marker;
}
function showPoiTooltip(event, poi) {
    const factionData = getFactionData(poi.factionId);
    const typeInfo = BUILDING_TYPES[poi.type] || { name: 'Location', icon: '📍' };
    const partyMembers = getPartyMembersAtPoi(poi.id);

    let partyHTML = '';
    if (partyMembers.length > 0) {
        const membersList = partyMembers.slice(0, 4).map(member => {
            const statusClass = member.status.toLowerCase().includes('danger') || 
                               member.status.toLowerCase().includes('combat') ? 'status-danger' : 
                               member.status.toLowerCase().includes('mia') ? 'status-mia' : '';
            
            return `
                <div style="display: flex; align-items: center; gap: 6px; margin: 3px 0;">
                    <img src="${member.portrait}" style="width: 20px; height: 20px; border-radius: 50%; object-fit: cover; border: 1px solid #444;">
                    <span style="flex: 1;">${member.name}</span>
                    <span class="${statusClass}" style="font-size: 0.7rem; color: #888;">${member.status}</span>
                </div>
            `;
        }).join('');

        const moreText = partyMembers.length > 4 ? `<p style="font-size: 0.75rem; color: #6e7681; margin: 4px 0 0 0;">+${partyMembers.length - 4} more</p>` : '';

        partyHTML = `
            <div style="margin-top: 8px; padding-top: 8px; border-top: 1px dashed #30363d;">
                <p style="margin: 0 0 6px 0; font-weight: 600; color: #58a6ff;">👥 Party Members Here</p>
                ${membersList}
                ${moreText}
            </div>
        `;
    }

    const content = `
        <div style="border-bottom: 1px solid #30363d; padding-bottom: 6px; margin-bottom: 8px;">
            <strong style="font-size: 0.95rem;">${poi.name}</strong>
        </div>
        <div>
            <p style="margin: 0 0 4px 0; font-size: 0.85rem;">${typeInfo.icon} ${typeInfo.name}</p>
            <p style="margin: 4px 0; color: ${factionData.color};">${factionData.name}</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px; margin-top: 8px; font-size: 0.8rem;">
                <span>⚔️ ${poi.military_strength || 0}</span>
                <span>💰 ${poi.economic_value || 0}</span>
                <span>🏛️ ${poi.political_influence || 0}</span>
                <span>👥 ${formatPopulation(poi.population || 0)}</span>
            </div>
            ${partyHTML}
        </div>
        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed #30363d; font-size: 0.75rem; color: #6e7681; text-align: center; font-style: italic;">Click for details</div>
    `;

    showTooltip(event, content);
}
function createClusterMarker(cluster) {
    const marker = document.createElement('div');
    marker.className = 'poi-cluster-marker';
    marker.style.left = `${cluster.x}%`;
    marker.style.top = `${cluster.y}%`;
    marker.dataset.clusterSize = cluster.pois.length;

    const dominantInfo = getDominantFaction(cluster.pois);
    const factionData = getFactionData(dominantInfo.factionId);

    // Calculate size based on cluster content
    const baseSize = 28;
    const sizeBonus = Math.min(cluster.pois.length * 2, 20);
    const size = baseSize + sizeBonus;

    marker.style.width = `${size}px`;
    marker.style.height = `${size}px`;

    // Apply mode-specific styling
    applyClusterStyle(marker, cluster, factionData, dominantInfo);

    // Count badge
    if (CLUSTER_CONFIG.showCountBadge) {
        const badge = document.createElement('div');
        badge.className = 'cluster-count-badge';
        badge.textContent = cluster.pois.length;
        marker.appendChild(badge);
    }

    // Contested indicator
    if (dominantInfo.totalFactions > 1) {
        const badge = document.createElement('div');
        badge.className = 'cluster-contested-badge';
        badge.textContent = '⚔️';
        badge.title = `${dominantInfo.totalFactions} factions present`;
        marker.appendChild(badge);
    }

    // Events
    marker.addEventListener('mouseenter', (e) => showClusterTooltip(e, cluster, factionData, dominantInfo));
    marker.addEventListener('mouseleave', hideTooltip);
    marker.addEventListener('click', (e) => {
        e.stopPropagation();
        playSound('click.mp3');
        showClusterDetailPanel(cluster);
    });

    return marker;
}


function applyClusterStyle(marker, cluster, factionData, dominantInfo) {
    const totalMilitary = cluster.pois.reduce((sum, p) => sum + (p.military_strength || 0), 0);
    const totalEconomic = cluster.pois.reduce((sum, p) => sum + (p.economic_value || 0), 0);
    const totalPop = cluster.pois.reduce((sum, p) => sum + (p.population || 0), 0);
    const avgMilitary = Math.round(totalMilitary / cluster.pois.length);
    const avgEconomic = Math.round(totalEconomic / cluster.pois.length);
    const avgPop = Math.round(totalPop / cluster.pois.length);

    // Create icon wrapper for cluster content
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'cluster-icon-wrapper';
    marker.appendChild(iconWrapper);

    switch (map.activeMapMode) {
        case 'political':
            if (factionData.logo) {
                marker.style.backgroundImage = `url(${factionData.logo})`;
                marker.style.backgroundSize = '70%';
                marker.style.backgroundRepeat = 'no-repeat';
                marker.style.backgroundPosition = 'center';
                marker.style.backgroundColor = hexToRgba(factionData.color, 0.85);
            } else {
                marker.style.backgroundColor = factionData.color;
                iconWrapper.innerHTML = factionData.icon || '🏴';
                iconWrapper.style.fontSize = '16px';
            }
            marker.style.borderColor = factionData.color;
            marker.style.borderWidth = '3px';
            if (dominantInfo.isContested) {
                marker.classList.add('contested-cluster');
                // Show pie chart for contested clusters
                const pieSize = parseInt(marker.style.width) || 32;
                const controlData = calculateClusterFactionControl(cluster);
                iconWrapper.innerHTML = createMiniPieChart(controlData, pieSize - 8);
            }
            break;

        case 'military':
            marker.style.backgroundColor = valueToColor(avgMilitary, 0, 10, ['#4575b4', '#fee090', '#d73027']);
            marker.style.borderColor = '#fff';
            marker.style.borderWidth = '2px';
            iconWrapper.innerHTML = `<span class="cluster-stat-value">${avgMilitary}</span>`;
            iconWrapper.style.color = avgMilitary > 5 ? '#fff' : '#000';
            iconWrapper.style.fontWeight = 'bold';
            iconWrapper.style.fontSize = '14px';
            break;

        case 'economic':
            const tierColor = avgEconomic >= 7 ? '#FFD700' : (avgEconomic >= 4 ? '#C0C0C0' : '#cd7f32');
            marker.style.borderColor = tierColor;
            marker.style.borderWidth = '3px';
            marker.style.backgroundColor = hexToRgba(tierColor, 0.7);
            
            // Show dominant trade good
            const dominantTrade = getDominantTradeGood(cluster);
            iconWrapper.innerHTML = dominantTrade.icon;
            iconWrapper.style.fontSize = '16px';
            break;

        case 'population':
            marker.style.backgroundColor = getPopulationColor(avgPop);
            marker.style.borderColor = '#fff';
            marker.style.borderWidth = '2px';
            
            // Show formatted population
            const popLabel = formatPopulation(totalPop);
            iconWrapper.innerHTML = `<span class="cluster-pop-value">${popLabel}</span>`;
            iconWrapper.style.fontSize = '11px';
            iconWrapper.style.fontWeight = 'bold';
            iconWrapper.style.color = avgPop > 2000 ? '#000' : '#fff';
            break;

        case 'laws':
            const dominantCulture = getDominantCulture(cluster);
            marker.style.backgroundColor = hexToRgba(dominantCulture.color, 0.85);
            marker.style.borderColor = dominantCulture.color;
            marker.style.borderWidth = '2px';
            iconWrapper.innerHTML = dominantCulture.icon;
            iconWrapper.style.fontSize = '16px';
            break;

        case 'age_of_antiquity':
            const avgAge = Math.round(cluster.pois.reduce((sum, p) => sum + (p.age_of_antiquity || 1), 0) / cluster.pois.length);
            let ageIcon = '🏠';
            let ageColor = '#a8d8ea';
            if (avgAge >= 9) {
                ageIcon = '🏺';
                ageColor = '#f9f871';
            } else if (avgAge >= 5) {
                ageIcon = '🏰';
                ageColor = '#d4eac8';
            }
            marker.style.backgroundColor = ageColor;
            marker.style.borderColor = '#fff';
            marker.style.borderWidth = '2px';
            iconWrapper.innerHTML = ageIcon;
            iconWrapper.style.fontSize = '16px';
            break;

        case 'crime_rate':
            const avgCrime = Math.round(cluster.pois.reduce((sum, p) => sum + (p.crime_rate || 1), 0) / cluster.pois.length);
            let crimeIcon = '🛡️';
            let crimeColor = '#4575b4';
            if (avgCrime >= 8) {
                crimeIcon = '💀';
                crimeColor = '#d73027';
            } else if (avgCrime >= 4) {
                crimeIcon = '⚠️';
                crimeColor = '#fee090';
            }
            marker.style.backgroundColor = crimeColor;
            marker.style.borderColor = '#fff';
            marker.style.borderWidth = '2px';
            iconWrapper.innerHTML = crimeIcon;
            iconWrapper.style.fontSize = '16px';
            break;

        default:
            // Standard view - show building type breakdown
            marker.style.backgroundColor = hexToRgba(factionData.color, 0.85);
            marker.style.borderColor = factionData.color;
            marker.style.borderWidth = '2px';
            const dominantType = getDominantBuildingType(cluster);
            iconWrapper.innerHTML = dominantType.icon;
            iconWrapper.style.fontSize = '14px';
    }
}
function calculateClusterFactionControl(cluster) {
    const factionPower = {};
    let totalPower = 0;

    cluster.pois.forEach(poi => {
        const fid = poi.factionId || 'unaligned';
        const power = (poi.political_influence || 1) + (poi.military_strength || 0) + (poi.economic_value || 0);
        factionPower[fid] = (factionPower[fid] || 0) + power;
        totalPower += power;
    });

    const control = {};
    for (const [fid, power] of Object.entries(factionPower)) {
        control[fid] = Math.round((power / totalPower) * 100);
    }

    return control;
}

function createMiniPieChart(controlData, size) {
    const radius = size / 2;
    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block;">`;
    let cumulativePercent = 0;
    
    const sortedData = Object.entries(controlData).sort(([, a], [, b]) => b - a);

    for (const [factionId, percent] of sortedData) {
        if (percent === 0) continue;

        const factionData = getFactionData(factionId);
        const color = factionData.color;

        if (percent >= 100) {
            svg += `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />`;
            continue;
        }

        const startAngle = (cumulativePercent / 100 * 2 * Math.PI) - (Math.PI / 2);
        cumulativePercent += percent;
        const endAngle = (cumulativePercent / 100 * 2 * Math.PI) - (Math.PI / 2);

        const x1 = radius + radius * Math.cos(startAngle);
        const y1 = radius + radius * Math.sin(startAngle);
        const x2 = radius + radius * Math.cos(endAngle);
        const y2 = radius + radius * Math.sin(endAngle);
        const largeArc = percent > 50 ? 1 : 0;

        svg += `<path d="M ${radius},${radius} L ${x1},${y1} A ${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z" fill="${color}" />`;
    }

    svg += '</svg>';
    return svg;
}
function getDominantTradeGood(cluster) {
    const tradeCounts = {};

    cluster.pois.forEach(poi => {
        const trade = getTradeInfo(poi);
        const key = trade.name;
        if (!tradeCounts[key]) {
            tradeCounts[key] = { count: 0, icon: trade.icon, value: 0 };
        }
        tradeCounts[key].count++;
        tradeCounts[key].value += poi.economic_value || 1;
    });

    let dominant = { name: 'Mixed Goods', icon: '📦', count: 0, value: 0 };
    for (const [name, data] of Object.entries(tradeCounts)) {
        if (data.value > dominant.value) {
            dominant = { name, ...data };
        }
    }

    return dominant;
}
function getDominantCulture(cluster) {
    const cultureCounts = {};

    cluster.pois.forEach(poi => {
        const culture = getCultureForPoi(poi, map.activeMapId);
        const key = culture.id || culture.name;
        if (!cultureCounts[key]) {
            cultureCounts[key] = { count: 0, culture };
        }
        cultureCounts[key].count++;
    });

    let dominant = { 
        id: 'mixed', 
        name: 'Mixed', 
        icon: '🌍', 
        color: '#888888',
        description: 'Multiple cultures present'
    };
    let maxCount = 0;

    for (const [, data] of Object.entries(cultureCounts)) {
        if (data.count > maxCount) {
            maxCount = data.count;
            dominant = data.culture;
        }
    }

    return dominant;
}

// ============================================================================
// NEW HELPER: Get dominant building type from cluster
// ============================================================================

function getDominantBuildingType(cluster) {
    const typeCounts = {};

    cluster.pois.forEach(poi => {
        const type = poi.type || 'unknown';
        typeCounts[type] = (typeCounts[type] || 0) + 1;
    });

    let dominantType = 'unknown';
    let maxCount = 0;

    for (const [type, count] of Object.entries(typeCounts)) {
        if (count > maxCount) {
            maxCount = count;
            dominantType = type;
        }
    }

    return BUILDING_TYPES[dominantType] || { name: 'Location', icon: '📍' };
}

// ============================================================================
// NEW HELPER: Format population for display
// ============================================================================

function formatPopulation(pop) {
    if (pop >= 1000000) return `${(pop / 1000000).toFixed(1)}M`;
    if (pop >= 1000) return `${(pop / 1000).toFixed(1)}K`;
    return pop.toString();
}

function showClusterTooltip(event, cluster, factionData, dominantInfo) {
    const totalMilitary = cluster.pois.reduce((sum, p) => sum + (p.military_strength || 0), 0);
    const totalEconomic = cluster.pois.reduce((sum, p) => sum + (p.economic_value || 0), 0);
    const totalPop = cluster.pois.reduce((sum, p) => sum + (p.population || 0), 0);
    
    const avgMilitary = (totalMilitary / cluster.pois.length).toFixed(1);
    const avgEconomic = (totalEconomic / cluster.pois.length).toFixed(1);
    
    const poiNames = cluster.pois.slice(0, 4).map(p => p.name).join(', ');
    const moreText = cluster.pois.length > 4 ? ` +${cluster.pois.length - 4} more` : '';

    const factionStats = getRegionFactionStats(cluster.pois);
    const topFactions = Object.entries(factionStats)
        .sort(([, a], [, b]) => b.poiCount - a.poiCount)
        .slice(0, 3);

    const factionsHTML = topFactions.map(([fid, stats]) => {
        const fd = getFactionData(fid);
        return `<span style="color:${fd.color}">${fd.shortName}: ${stats.poiCount}</span>`;
    }).join(' · ');

    const content = `
        <div style="border-bottom: 1px solid #30363d; padding-bottom: 6px; margin-bottom: 8px;">
            <strong style="font-size: 0.95rem;">Region (${cluster.pois.length} locations)</strong>
        </div>
        <div>
            <p style="margin: 4px 0;"><strong>Dominant:</strong> <span style="color:${factionData.color}">${factionData.name}</span></p>
            ${dominantInfo.isContested ? `<p style="color: #f85149; font-weight: 600; margin: 4px 0;">⚔️ ${dominantInfo.totalFactions} factions competing</p>` : ''}
            <p style="font-size: 0.85rem; margin: 4px 0;">${factionsHTML}</p>
            <div style="margin-top: 6px; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 0.85rem;">
                <span>⚔️ Avg: ${avgMilitary}</span>
                <span>💰 Avg: ${avgEconomic}</span>
                <span>👥 Total: ${formatPopulation(totalPop)}</span>
                <span>📍 POIs: ${cluster.pois.length}</span>
            </div>
            <p style="font-size: 0.8rem; color: #6e7681; margin-top: 6px;">${poiNames}${moreText}</p>
        </div>
        <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed #30363d; font-size: 0.75rem; color: #6e7681; text-align: center; font-style: italic;">Click to expand</div>
    `;

    showTooltip(event, content);
}

// ============================================================================
// POI STYLING
// ============================================================================

function applyPoiStyle(marker, poi) {
    marker.className = 'poi-marker';
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon-wrapper';
    marker.innerHTML = '';
    marker.appendChild(iconWrapper);

    const factionData = getFactionData(poi.factionId);

    if (map.activeMapMode === 'tactical') {
        marker.style.opacity = '0.5';
        marker.style.width = '14px';
        marker.style.height = '14px';
        iconWrapper.innerHTML = '';
        return;
    }

    marker.style.opacity = '1';

    const styleHandlers = {
        political: () => applyPoliticalStyle(marker, iconWrapper, poi, factionData),
        economic: () => applyEconomicStyle(marker, iconWrapper, poi, factionData),
        military: () => applyMilitaryStyle(marker, iconWrapper, poi, factionData),
        population: () => applyPopulationStyle(marker, iconWrapper, poi, factionData),
        laws: () => applyLawsStyle(marker, iconWrapper, poi, factionData),
        age_of_antiquity: () => applyAgeStyle(marker, iconWrapper, poi, factionData),
        crime_rate: () => applyCrimeStyle(marker, iconWrapper, poi, factionData)
    };

    const handler = styleHandlers[map.activeMapMode];
    if (handler) {
        handler();
    } else {
        // Default style
        iconWrapper.innerHTML = BUILDING_TYPES[poi.type]?.icon || '❓';
        marker.style.width = '20px';
        marker.style.height = '20px';
        marker.style.borderColor = factionData.color;
    }
}

function applyPoliticalStyle(marker, iconWrapper, poi, factionData) {
    marker.classList.add('political-view');
    if (factionData.logo) {
        marker.style.backgroundImage = `url(${factionData.logo})`;
        marker.style.backgroundSize = 'cover';
    } else {
        marker.style.backgroundColor = factionData.color;
    }
    const size = 16 + (poi.political_influence || 1) * 2;
    marker.style.width = `${size}px`;
    marker.style.height = `${size}px`;
}

function applyEconomicStyle(marker, iconWrapper, poi, factionData) {
    marker.classList.add('economic-view');
    const trade = getTradeInfo(poi);
    const ecoVal = poi.economic_value || 1;
    const size = 18 + ecoVal * 1.5;
    
    marker.style.width = `${size}px`;
    marker.style.height = `${size}px`;
    iconWrapper.innerHTML = trade.icon;
    marker.style.borderColor = ecoVal >= 7 ? '#FFD700' : (ecoVal >= 4 ? '#C0C0C0' : '#cd7f32');

    marker.addEventListener('mouseenter', (e) => {
        const guilds = getAssociatedGuilds(trade.name, poi.factionId);
        showTooltip(e, `
            <div class="tooltip-header"><h5>${poi.name}</h5></div>
            <div class="tooltip-section">
                <p><strong>Controller:</strong> ${factionData.name}</p>
                <p><strong>Primary Export:</strong> ${trade.icon} ${trade.name}</p>
                <p><strong>Status:</strong> ${trade.tier}</p>
                <p><strong>Daily Production:</strong> ${trade.production} units</p>
                <p><strong>Daily Export:</strong> ${trade.exportAmt} units</p>
                <p><strong>Needs Import:</strong> ${trade.importName} (${trade.importAmt})</p>
                <p><strong>Guilds:</strong> ${guilds}</p>
            </div>
        `);
    });
    marker.addEventListener('mouseleave', hideTooltip);
}

function applyMilitaryStyle(marker, iconWrapper, poi, factionData) {
    marker.classList.add('military-view');
    const size = 16 + (poi.military_strength || 1) * 2;
    marker.style.width = `${size}px`;
    marker.style.height = `${size}px`;
    iconWrapper.innerHTML = poi.military_strength || '?';

    marker.addEventListener('mouseenter', (e) => {
        showTooltip(e, `
            <div class="tooltip-header"><h5>${poi.name}</h5></div>
            <div class="tooltip-section">
                <p><strong>Controller:</strong> ${factionData.name}</p>
                <p><strong>Strength:</strong> ${poi.military_strength}/10</p>
                <p><strong>Defensibility:</strong> High</p>
            </div>
        `);
    });
    marker.addEventListener('mouseleave', hideTooltip);
}

function applyPopulationStyle(marker, iconWrapper, poi, factionData) {
    marker.classList.add('population-view');
    const popSize = 12 + Math.log2(Math.max(1, poi.population || 1)) * 2.5;
    marker.style.width = `${popSize}px`;
    marker.style.height = `${popSize}px`;
    marker.style.backgroundColor = getPopulationColor(poi.population || 0);

    marker.addEventListener('mouseenter', (e) => {
        showTooltip(e, `
            <div class="tooltip-header"><h5>${poi.name}</h5></div>
            <div class="tooltip-section">
                <p><strong>Controller:</strong> ${factionData.name}</p>
                <p><strong>Pop:</strong> ${(poi.population || 0).toLocaleString()}</p>
            </div>
        `);
    });
    marker.addEventListener('mouseleave', hideTooltip);
}

function applyLawsStyle(marker, iconWrapper, poi, factionData) {
    marker.classList.add('laws-view');
    const culture = getCultureForPoi(poi, map.activeMapId);

    let lawIcon = culture.icon || '⚖️';
    let lawColor = culture.color || '#fff';
    let lawName = culture.name;
    let lawDesc = culture.description;

    if (LEGAL_DATA.poi_traditions?.[poi.id]) {
        lawIcon = '📍';
        lawColor = '#ffcc00';
        lawName = "Local Customs";
        lawDesc = LEGAL_DATA.poi_traditions[poi.id].summary;
    } else if (poi.factionId && ALL_LEGAL_CODES[poi.factionId]) {
        lawName = ALL_LEGAL_CODES[poi.factionId].name;
    }

    iconWrapper.innerHTML = lawIcon;
    Object.assign(marker.style, {
        borderColor: lawColor,
        color: lawColor,
        width: '26px',
        height: '26px',
        backgroundColor: 'rgba(13, 17, 23, 0.8)',
        fontSize: '14px',
        borderRadius: '50%'
    });

    marker.addEventListener('mouseenter', (e) => {
        showTooltip(e, `
            <div class="tooltip-header">
                <span style="font-size:1.5rem; margin-right:8px;">${lawIcon}</span>
                <h5 style="color:${lawColor}">${lawName}</h5>
            </div>
            <div class="tooltip-section">
                <p style="font-size:0.85rem; font-style:italic;">"${lawDesc}"</p>
                <p><strong>Controller:</strong> ${factionData.name}</p>
                <p><strong>Underlying Culture:</strong> ${culture.name}</p>
            </div>
        `);
    });
    marker.addEventListener('mouseleave', hideTooltip);
}

function applyAgeStyle(marker, iconWrapper, poi, factionData) {
    marker.classList.add('age-view');
    const age = poi.age_of_antiquity || 1;
    
    let ageIcon = '🏠';
    let ageColor = '#a8d8ea';
    let ageLabel = "Modern";

    if (age >= 9) {
        ageIcon = '🏺';
        ageColor = '#f9f871';
        ageLabel = "Mythic Era";
    } else if (age >= 5) {
        ageIcon = '🏰';
        ageColor = '#d4eac8';
        ageLabel = "Historical";
    }

    iconWrapper.innerHTML = ageIcon;
    Object.assign(marker.style, {
        backgroundColor: ageColor,
        borderColor: '#fff',
        width: '24px',
        height: '24px',
        fontSize: '14px',
        color: '#000',
        borderRadius: '6px'
    });

    marker.addEventListener('mouseenter', (e) => {
        showTooltip(e, `
            <div class="tooltip-header"><h5>${poi.name}</h5></div>
            <div class="tooltip-section">
                <p><strong>Controller:</strong> ${factionData.name}</p>
                <p><strong>Age Rating:</strong> ${age}/10 (${ageLabel})</p>
            </div>
        `);
    });
    marker.addEventListener('mouseleave', hideTooltip);
}

function applyCrimeStyle(marker, iconWrapper, poi, factionData) {
    marker.classList.add('crime-view');
    const crime = poi.crime_rate || 1;
    
    let crimeIcon = '🛡️';
    let crimeColor = '#4575b4';
    let crimeLabel = "Safe";

    if (crime >= 8) {
        crimeIcon = '💀';
        crimeColor = '#d73027';
        crimeLabel = "Lawless";
    } else if (crime >= 4) {
        crimeIcon = '⚠️';
        crimeColor = '#fee090';
        crimeLabel = "Moderate Danger";
    }

    iconWrapper.innerHTML = crimeIcon;
    Object.assign(marker.style, {
        backgroundColor: crimeColor,
        width: '24px',
        height: '24px',
        fontSize: '14px',
        borderRadius: '50%',
        border: '2px solid white'
    });

    marker.addEventListener('mouseenter', (e) => {
        showTooltip(e, `
            <div class="tooltip-header"><h5>${poi.name}</h5></div>
            <div class="tooltip-section">
                <p><strong>Controller:</strong> ${factionData.name}</p>
                <p><strong>Security Status:</strong> ${crime}/10 (${crimeLabel})</p>
            </div>
        `);
    });
    marker.addEventListener('mouseleave', hideTooltip);
}

// ============================================================================
// TRADE DATA
// ============================================================================

const TRADE_GOODS = {
    mine: [{ n: 'Iron Ore', i: '🔩' }, { n: 'Gold', i: '⚱️' }, { n: 'Coal', i: '⚫' }, { n: 'Gems', i: '💎' }, { n: 'Mithril', i: '✨' }],
    quarry: [{ n: 'Stone', i: '🪨' }, { n: 'Marble', i: '🏛️' }, { n: 'Obsidian', i: '⬛' }],
    forest: [{ n: 'Timber', i: '🪵' }, { n: 'Rare Herbs', i: '🌿' }, { n: 'Furs', i: '🦊' }, { n: 'Wild Game', i: '🍖' }],
    farm: [{ n: 'Grain', i: '🌾' }, { n: 'Livestock', i: '🐄' }, { n: 'Cotton', i: '☁️' }, { n: 'Produce', i: '🍎' }],
    oasis: [{ n: 'Fresh Water', i: '💧' }, { n: 'Dates', i: '🌴' }],
    swamp: [{ n: 'Peat', i: '🟫' }, { n: 'Alchemical Slime', i: '🧪' }, { n: 'Rare Fungi', i: '🍄' }],
    volcano: [{ n: 'Sulfur', i: '🌋' }, { n: 'Obsidian', i: '⬛' }, { n: 'Fire Salts', i: '🔥' }],
    workshop: [{ n: 'Tools', i: '🔨' }, { n: 'Weapons', i: '⚔️' }, { n: 'Magitek Parts', i: '⚙️' }, { n: 'Armor', i: '🛡️' }],
    forge: [{ n: 'Steel', i: '⛓️' }, { n: 'Weapons', i: '⚔️' }],
    mill: [{ n: 'Flour', i: '🍞' }, { n: 'Lumber', i: '🪵' }],
    port: [{ n: 'Spices', i: '🌶️' }, { n: 'Silk', i: '🧣' }, { n: 'Exotic Goods', i: '🏺' }, { n: 'Seafood', i: '🐟' }],
    market: [{ n: 'Luxury Goods', i: '💍' }, { n: 'Textiles', i: '🧵' }, { n: 'Pottery', i: '🏺' }],
    trade_post: [{ n: 'Supplies', i: '📦' }, { n: 'Maps', i: '🗺️' }],
    capital_city: [{ n: 'Banking', i: '💰' }, { n: 'Fine Art', i: '🖼️' }, { n: 'Jewelry', i: '👑' }],
    major_city: [{ n: 'Finance', i: '🪙' }, { n: 'Manufacturing', i: '🏭' }],
    academy: [{ n: 'Books', i: '📚' }, { n: 'Scrolls', i: '📜' }, { n: 'Artifacts', i: '🏺' }],
    mages_tower: [{ n: 'Potions', i: '⚗️' }, { n: 'Enchantments', i: '✨' }, { n: 'Mana Crystals', i: '💎' }],
    temple: [{ n: 'Incense', i: '🕯️' }, { n: 'Holy Water', i: '💧' }, { n: 'Relics', i: '⚱️' }],
    default: [{ n: 'Supplies', i: '📦' }, { n: 'Labor', i: '💪' }]
};

function getTradeInfo(poi) {
    const econScore = poi.economic_value || 1;
    const pop = poi.population || 0;

    const weights = getEstateWeights(poi);
    const estate = pickWeightedEstate(weights, poi);
    const techExport = getResearchBasedExport(poi, estate);

    let exportItem = { n: 'Raw Materials', i: '🪵' };
    let exportCategory = 'ECONOMIC';

    if (techExport) {
        exportItem = techExport;
        exportCategory = techExport.source;
    } else {
        const hash = simpleHash(poi.id);
        const typeKey = TRADE_GOODS[poi.type] ? poi.type : 'default';
        const goodsList = TRADE_GOODS[typeKey];
        exportItem = goodsList[Math.abs(hash) % goodsList.length];
    }

    const dailyProduction = Math.floor((econScore * 100) + (pop / 50));
    const exportRatio = 0.1 + (econScore * 0.05);
    const dailyExport = Math.floor(dailyProduction * exportRatio);
    const dailyImport = Math.floor(dailyProduction * 0.5);
    const importName = getImportNeeds(exportCategory, poi);

    let statusTier = "Local Producer";
    if (econScore >= 9) statusTier = "Global Trade Hub";
    else if (econScore >= 7) statusTier = "Regional Center";
    else if (econScore >= 4) statusTier = "Major Producer";

    return {
        name: exportItem.n,
        icon: exportItem.i,
        tier: statusTier,
        production: dailyProduction,
        exportAmt: dailyExport,
        importAmt: dailyImport,
        importName
    };
}

function getEstateWeights(poi) {
    const mapInfo = MAP_DATA[map.activeMapId];
    const regionGroup = mapInfo?.group || 'Other';
    const demographics = REGIONAL_DEMOGRAPHICS[regionGroup] || { 'dnd_human': 1.0 };

    const estateWeights = { nobility: 0, clergy: 0, burghers: 0, commoners: 0 };

    for (const [speciesKey, pct] of Object.entries(demographics)) {
        const bias = SPECIES_ESTATE_BIAS[speciesKey] || SPECIES_ESTATE_BIAS.default;
        estateWeights.nobility += (bias.nobility || 0) * pct;
        estateWeights.clergy += (bias.clergy || 0) * pct;
        estateWeights.burghers += (bias.burghers || 0) * pct;
        estateWeights.commoners += (bias.commoners || 0) * pct;
    }
    
    return estateWeights;
}

function pickWeightedEstate(weights, poi) {
    const pool = [
        { id: 'nobility', w: weights.nobility },
        { id: 'burghers', w: weights.burghers },
        { id: 'clergy', w: weights.clergy },
        { id: 'commoners', w: weights.commoners }
    ];

    const total = pool.reduce((acc, item) => acc + item.w, 0);
    const seed = simpleHash(poi.id);
    let random = seededRandom(seed) * total;

    for (const item of pool) {
        if (random < item.w) return item.id;
        random -= item.w;
    }
    return 'commoners';
}

function getResearchBasedExport(poi, estate) {
    const factionToNation = {
        'regal_empire': 'midlands',
        'iron_legion': 'midlands',
        'mushroom_regency': 'mushroom_kingdom',
        'toad_gang': 'mushroom_kingdom',
        'peach_loyalists': 'mushroom_kingdom',
        'kingdom_of_gondor': 'middle_earth',
        'mordor': 'middle_earth',
        'isengard': 'middle_earth',
        'general_student_union': 'kivotos',
        'millennium_science_school': 'kivotos',
        'gehenna_academy': 'kivotos',
        'internet_federation': 'internet',
        'hacktivist_collectives': 'internet',
        'the_empire': 'warhammer',
        'greenskins': 'warhammer',
        'pokemon_league': 'pokemon',
        'team_rocket': 'pokemon',
        'equestrian_regime': 'equestria',
        'changeling_hive': 'equestria',
        'animatopia_prey_congress': 'animatopia',
        'animatopia_predator_alliance': 'animatopia',
        'leclaire_democracy': 'leclaire_isle',
        'teyvat_hegemony': 'teyvat',
        'void_drifters': 'doughnut_hole',
        'connectopia_pioneers_guild': 'grand_country'
    };

    const mapNation = getNationFromMapId(map.activeMapId);
    const nationKey = mapNation || factionToNation[poi.factionId] || 'midlands';

    const preferredCategories = {
        nobility: ['WEAPONS', 'POLITICAL'],
        burghers: ['TECH', 'ECONOMIC'],
        clergy: ['MAGIC', 'MEDICAL'],
        commoners: ['ECONOMIC', 'MEDICAL']
    }[estate] || ['ECONOMIC', 'MEDICAL'];

    let candidateTechs = [];
    let highestTier = -1;

    preferredCategories.forEach(cat => {
        const tree = getTechTree(nationKey, cat, state.researchState, null);
        const completedNodes = Object.values(tree).filter(n => n.status === 'completed');

        completedNodes.forEach(node => {
            if (node.tier > highestTier) highestTier = node.tier;
            candidateTechs.push(node);
        });
    });

    if (candidateTechs.length > 0) {
        const tierThreshold = 3;
        const filteredCandidates = candidateTechs.filter(tech => highestTier - tech.tier <= tierThreshold);

        if (filteredCandidates.length > 0) {
            const seed = simpleHash(poi.id + estate);
            const bestTech = filteredCandidates[Math.floor(seededRandom(seed) * filteredCandidates.length)];

            const icons = {
                WEAPONS: '⚔️',
                MAGIC: '✨',
                TECH: '⚙️',
                MEDICAL: '💊',
                ECONOMIC: '💰',
                POLITICAL: '📜'
            };

            return {
                n: bestTech.name,
                i: icons[bestTech.category] || '📦',
                source: bestTech.category,
                tierVal: bestTech.tier
            };
        }
    }

    return null;
}

function getImportNeeds(exportCategory, poi) {
    const cats = RESEARCH_CATEGORIES.filter(c => c !== exportCategory);
    const seed = simpleHash(poi.id + exportCategory);
    const importCat = cats[Math.floor(seededRandom(seed) * cats.length)];

    const names = {
        WEAPONS: "Arms & Armor",
        MAGIC: "Arcane Reagents",
        TECH: "Machinery",
        MEDICAL: "Medicine",
        ECONOMIC: "Luxury Goods",
        POLITICAL: "Diplomatic Favors"
    };

    return names[importCat] || "General Supplies";
}

function getAssociatedGuilds(tradeGoodName, factionId) {
    const guilds = [];
    const good = tradeGoodName.toLowerCase();

    const guildMappings = [
        { keywords: ['iron', 'steel', 'weapon', 'armament'], guild: "Iron Legion Quartermasters" },
        { keywords: ['magitek', 'crystal', 'potion', 'spell'], guild: "Mages' Guild" },
        { keywords: ['spice', 'silk', 'luxury'], guild: "Merchant Princes" },
        { keywords: ['herb', 'fungi', 'medicine'], guild: "Alchemists' Union" },
        { keywords: ['machinery', 'tech'], guild: "Geargrinder's Union" }
    ];

    guildMappings.forEach(({ keywords, guild }) => {
        if (keywords.some(k => good.includes(k))) {
            guilds.push(guild);
        }
    });

    if (factionId === 'freelancer_underworld') {
        guilds.push("The Shadow Syndicate");
    }

    return guilds.length > 0 ? guilds.join(", ") : "Local Merchants";
}

// ============================================================================
// CULTURE/LAW HELPERS
// ============================================================================

function getNationFromMapId(mapId) {
    const mapInfo = MAP_DATA[mapId];
    if (!mapInfo?.group) return null;

    const groupMappings = {
        'Midlands': 'midlands',
        'Mushroom Kingdom': 'mushroom_kingdom',
        'Middle-earth': 'middle_earth',
        'Kivotos': 'kivotos',
        'Internet': 'internet',
        'Fated Place': 'warhammer',
        'Pokémon': 'pokemon',
        'Equestria': 'equestria',
        'Animatopia': 'animatopia',
        "L'Eclaire Isle": 'leclaire_isle',
        'Teyvat': 'teyvat',
        'Doughnut Hole': 'doughnut_hole',
        'Grand Country': 'grand_country',
        'Connectopia': 'grand_country'
    };

    for (const [key, nation] of Object.entries(groupMappings)) {
        if (mapInfo.group.includes(key)) return nation;
    }

    return null;
}

function getLandmassKey(mapId) {
    const mapInfo = MAP_DATA[mapId];
    if (!mapInfo?.group) return null;

    const groupMappings = {
        'Mushroom Kingdom': 'mushroom_kingdom_full',
        'Islands': 'mushroom_kingdom_full',
        'The Midlands': 'midlands_full',
        'The Internet': 'internet_full',
        'Middle-earth': 'middle_earth_full',
        'The Fated Place': 'warhammer_full',
        'Kivotos': 'kivotos_full',
        'The Doughnut Hole': 'doughnut_hole_full',
        'Equestria': 'equestria_full',
        'Animatopia': 'animatopia_full',
        "L'Eclaire Isle": 'leclaire_isle_full',
        'Teyvat': 'teyvat_full',
        'Edge': 'the_edge_full'
    };

    for (const [key, landmass] of Object.entries(groupMappings)) {
        if (mapInfo.group.includes(key)) return landmass;
    }

    return null;
}

function getCultureForPoi(poi, mapId) {
    const mapInfo = MAP_DATA[mapId];
    const group = mapInfo?.group || 'Other';
    const regionalSpecies = REGIONAL_DEMOGRAPHICS[group] || {};

    let dominantSpecies = 'dnd_human';
    let maxPct = 0;

    for (const [sKey, sPct] of Object.entries(regionalSpecies)) {
        if (sPct > maxPct) {
            maxPct = sPct;
            dominantSpecies = sKey;
        }
    }

    for (const [cultKey, cultData] of Object.entries(CULTURE_DATA)) {
        if (cultData.primary_species?.includes(dominantSpecies)) {
            return cultData;
        }
    }

    return {
        id: 'unaligned',
        name: 'Local Custom',
        color: '#6c757d',
        icon: '🛖',
        description: 'Local traditions not aligned with a major cultural sphere.',
        art_style: "Varied / Rustic",
        traditions: []
    };
}

// ============================================================================
// MAIN RENDER FUNCTIONS
// ============================================================================

export function renderMap(mapId) {
    initDOMReferences();
    
    if (!displayArea) {
        displayArea = document.getElementById('map-display-area');
    }
    
    if (!displayArea) {
        console.error('renderMap: map-display-area not found in DOM');
        return;
    }

    map.setActiveMapId(mapId);
    const mapData = MAP_DATA[mapId];

    if (!mapData) {
        console.error(`Map data not found for ID: ${mapId}`);
        return;
    }

    // Calculate party-POI associations
    calculatePartyPoiAssociations(mapId);

    displayArea.innerHTML = '';
    displayArea.classList.toggle('edit-mode', map.isEditMode);
    createTooltip();

    const zoomWrapper = document.createElement('div');
    zoomWrapper.id = 'map-zoom-wrapper';

    const mapImage = document.createElement('img');
    mapImage.id = 'map-image';
    mapImage.src = mapData.imageSrc;
    zoomWrapper.appendChild(mapImage);
    displayArea.appendChild(zoomWrapper);

    mapImage.onload = () => handleMapImageLoad(mapImage, zoomWrapper, mapId);

    if (!detailPanel) {
        detailPanel = document.getElementById('map-detail-content');
    }
    
    if (detailPanel) {
        renderMapModeLegend();
    }
    
    import('./map-transform.js').then(transform => {
        transform.resetTransform();
        transform.createZoomControls();
        transform.initZoomControls();
        transform.initKeyboardShortcuts();
    }).catch(err => {
        console.warn('Could not load map-transform module:', err);
    });
}


function handleMapImageLoad(mapImage, zoomWrapper, mapId) {
    const container = displayArea;
    const containerRatio = container.clientWidth / container.clientHeight;
    const imgRatio = mapImage.naturalWidth / mapImage.naturalHeight;

    let renderedWidth, renderedHeight, top, left;

    if (containerRatio > imgRatio) {
        renderedHeight = container.clientHeight;
        renderedWidth = renderedHeight * imgRatio;
        top = 0;
        left = (container.clientWidth - renderedWidth) / 2;
    } else {
        renderedWidth = container.clientWidth;
        renderedHeight = renderedWidth / imgRatio;
        top = (container.clientHeight - renderedHeight) / 2;
        left = 0;
    }

    const interactiveLayer = document.createElement('div');
    interactiveLayer.id = 'interactive-map-layer';
    Object.assign(interactiveLayer.style, {
        position: 'absolute',
        width: `${renderedWidth}px`,
        height: `${renderedHeight}px`,
        top: `${top}px`,
        left: `${left}px`
    });
    zoomWrapper.appendChild(interactiveLayer);

    map.setRenderedMapDimensions({ width: renderedWidth, height: renderedHeight });

    const svgLayer = createSVGLayer();
    interactiveLayer.appendChild(svgLayer);

    renderFogLayer(svgLayer);

    if (map.activeMapMode === 'tactical') {
        renderTacticalLayer(mapId, interactiveLayer, svgLayer);
    }

    renderPoisLayer(interactiveLayer);
   // renderPartyLayer(mapId, interactiveLayer, svgLayer);

    if (map.isEditMode) {
        const drawingSvg = createSVGLayer('map-drawing-svg');
        drawingSvg.style.zIndex = '50';
        interactiveLayer.appendChild(drawingSvg);
    }
}

function createSVGLayer(id = 'map-vector-layer') {
    const svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgLayer.id = id;
    svgLayer.setAttribute('viewBox', '0 0 100 100');
    svgLayer.setAttribute('preserveAspectRatio', 'none');
    Object.assign(svgLayer.style, {
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '1'
    });
    return svgLayer;
}

function renderFogLayer(svgContainer) {
    const fogSource = map.isEditMode
        ? map.editSessionData.fogs
        : (MAP_DATA[map.activeMapId]?.fogOfWar || []);

    const fragment = document.createDocumentFragment();

    fogSource.forEach(fog => {
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', fog.points);
        polygon.id = fog.id;
        polygon.style.pointerEvents = map.isEditMode ? 'all' : 'none';

        if (state.mapState.discoveredFogs.includes(fog.id)) {
            polygon.classList.add('discovered');
        }
        fragment.appendChild(polygon);
    });

    svgContainer.appendChild(fragment);
}
function renderProvinces(container, provinceData) {
    container.querySelectorAll('.province-marker').forEach(el => el.remove());

    const fragment = document.createDocumentFragment();
    const allPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];

    if (allPois.length === 0) {
        console.warn('No POIs available for province generation');
        return;
    }

    let provincesToRender = [];

    if (PROVINCE_CONFIG.showAllProvinces || !provinceData) {
        provincesToRender = generateProvincesFromPois(allPois, provinceData);
    } else if (provinceData) {
        provincesToRender = Object.entries(provinceData).map(([id, province]) => ({
            id,
            ...province,
            isDefined: true
        }));
    }

    if (provincesToRender.length === 0) {
        provincesToRender = generateProvincesFromPois(allPois, null);
    }

    // MERGE adjacent provinces with same dominant faction (>= 80% control)
    provincesToRender = mergeAdjacentProvinces(provincesToRender, allPois);

    provincesToRender.forEach(province => {
        const dynamicControl = calculateProvinceControl(province, allPois);

        const totalControl = Object.values(dynamicControl).reduce((a, b) => a + b, 0);
        if (totalControl === 0) return;

        // Get dominant faction
        const dominant = getDominantFactionFromControl(dynamicControl);

        // SKIP if dominant faction is unaligned
        if (dominant.factionId === 'unaligned') {
            return;
        }

        const poiCount = countPoisInProvince(province, allPois);

        // Size calculation - larger for merged provinces
        const baseSize = province.isMerged ? 36 : 30;
        const influenceBonus = Math.log2(Math.max(1, totalControl)) * 2;
        const poiBonus = Math.min(poiCount * 2, province.isMerged ? 20 : 14);
        const size = Math.max(baseSize, baseSize + influenceBonus + poiBonus);

        const marker = document.createElement('div');
        marker.className = 'province-marker';
        if (province.isDefined) marker.classList.add('defined-province');
        if (province.isMerged) marker.classList.add('merged-province');
        marker.style.left = `${province.x}%`;
        marker.style.top = `${province.y}%`;
        marker.style.width = `${size}px`;
        marker.style.height = `${size}px`;
        marker.dataset.provinceId = province.id;

        const pieChartSVG = createPieChartSVG(dynamicControl, size);
        marker.innerHTML = pieChartSVG + `<div class="province-label">${province.name}</div>`;

        marker.dataset.control = JSON.stringify(dynamicControl);
        marker.dataset.isMerged = province.isMerged ? 'true' : 'false';

        marker.addEventListener('mouseenter', (e) => {
            showProvinceTooltip(e, province, dynamicControl, poiCount);
        });
        marker.addEventListener('mouseleave', hideTooltip);

        marker.addEventListener('click', (e) => {
            e.stopPropagation();
            playSound('click.mp3');
            renderProvinceDetailPanel({ ...province, control: dynamicControl });
        });

        fragment.appendChild(marker);
    });

    container.appendChild(fragment);
}
function renderPoisLayer(container) {
    container.querySelectorAll('.poi-marker, .state-marker, .province-marker, .region-marker, .poi-cluster-marker').forEach(el => el.remove());

    // Check if in political mode with territory view
    if (map.activeMapMode === 'political' && 
        (map.activePoliticalSubmode === 'state' || map.activePoliticalSubmode === 'province' || map.activePoliticalSubmode === 'region') && 
        !map.isEditMode) {
        const stateData = PROVINCE_POLITICS?.[map.activeMapId] || null;
        renderTerritories(container, stateData);
        return;
    }

    // Standard POI rendering...
    const poiSource = map.isEditMode
        ? map.editSessionData.pois
        : (MAP_DATA[map.activeMapId]?.pointsOfInterest || []);

    const visiblePois = poiSource.filter(poi => map.isEditMode || hasSufficientIntel(poi));

    const currentZoom = typeof getZoomLevel === 'function' ? getZoomLevel() : 1;
    const shouldCluster = !map.isEditMode && CLUSTER_CONFIG.enabled && currentZoom < CLUSTER_CONFIG.minZoomToExpand;

    const clusters = shouldCluster
        ? clusterPois(visiblePois, CLUSTER_CONFIG.threshold / Math.max(currentZoom, 0.5))
        : visiblePois.map(poi => ({ x: poi.x, y: poi.y, pois: [poi], isCluster: false }));

    const fragment = document.createDocumentFragment();

    clusters.forEach(cluster => {
        if (cluster.isCluster && cluster.pois.length > 1) {
            fragment.appendChild(createClusterMarker(cluster));
        } else if (cluster.pois[0]) {
            fragment.appendChild(createPoiMarker(cluster.pois[0]));
        }
    });

    container.appendChild(fragment);
}

function calculateProvinceControl(province, allPois) {
    const control = {};
    const radius = province.radius || PROVINCE_CONFIG.defaultRadius;

    const provincePois = allPois.filter(poi => {
        const distance = Math.hypot(poi.x - province.x, poi.y - province.y);
        return distance <= radius;
    });

    if (provincePois.length === 0) {
        const nearbyPois = allPois.filter(poi => {
            const distance = Math.hypot(poi.x - province.x, poi.y - province.y);
            return distance <= radius * 1.5;
        });

        if (nearbyPois.length === 0) {
            return { unaligned: 100 };
        }

        nearbyPois.forEach(poi => {
            const factionId = poi.factionId || 'unaligned';
            const distance = Math.hypot(poi.x - province.x, poi.y - province.y);
            const distancePenalty = 1 - (distance - radius) / (radius * 0.5);

            const power = (
                (poi.political_influence || 1) * 2 +
                (poi.military_strength || 0) * 1.5 +
                (poi.economic_value || 0) +
                Math.log10(Math.max(1, poi.population || 1))
            ) * Math.max(0.3, distancePenalty);

            control[factionId] = (control[factionId] || 0) + power;
        });
    } else {
        provincePois.forEach(poi => {
            const factionId = poi.factionId || 'unaligned';

            const power =
                (poi.political_influence || 1) * 2 +
                (poi.military_strength || 0) * 1.5 +
                (poi.economic_value || 0) +
                Math.log10(Math.max(1, poi.population || 1));

            control[factionId] = (control[factionId] || 0) + power;
        });
    }

    // Check if result would be only unaligned
    const nonUnalignedFactions = Object.keys(control).filter(k => k !== 'unaligned');
    if (nonUnalignedFactions.length === 0) {
        // All unaligned - return as-is (will be filtered out in renderProvinces)
        return { unaligned: 100 };
    }

    // Convert to percentages
    const totalPower = Object.values(control).reduce((a, b) => a + b, 0);

    if (totalPower === 0) {
        return { unaligned: 100 };
    }

    const percentControl = {};
    for (const [factionId, power] of Object.entries(control)) {
        percentControl[factionId] = Math.round((power / totalPower) * 100);
    }

    // Ensure percentages sum to 100
    const sum = Object.values(percentControl).reduce((a, b) => a + b, 0);
    if (sum !== 100 && Object.keys(percentControl).length > 0) {
        const diff = 100 - sum;
        const largestFaction = Object.entries(percentControl)
            .sort(([, a], [, b]) => b - a)[0][0];
        percentControl[largestFaction] += diff;
    }

    return percentControl;
}




function generateProvincesFromPois(allPois, existingProvinceData) {
    const provinces = [];
    const usedPositions = [];

    const isTooClose = (x, y, minDist) => {
        return usedPositions.some(pos =>
            Math.hypot(x - pos.x, y - pos.y) < minDist
        );
    };

    // First, add any predefined provinces
    if (existingProvinceData) {
        Object.entries(existingProvinceData).forEach(([id, province]) => {
            provinces.push({
                id,
                ...province,
                isDefined: true
            });
            usedPositions.push({ x: province.x, y: province.y });
        });
    }

    // Group POIs by faction - EXCLUDE unaligned from province generation
    const factionGroups = {};

    allPois.forEach(poi => {
        const factionId = poi.factionId || 'unaligned';
        
        // Skip unaligned POIs for province generation
        if (factionId === 'unaligned') return;
        
        if (!factionGroups[factionId]) {
            factionGroups[factionId] = [];
        }
        factionGroups[factionId].push(poi);
    });

    // For each faction, cluster their POIs into provinces
    Object.entries(factionGroups).forEach(([factionId, pois]) => {
        if (pois.length === 0) return;

        const clusters = clusterPoisForProvinces(pois, PROVINCE_CONFIG.minPoiDistance);

        clusters.forEach((cluster, index) => {
            if (isTooClose(cluster.x, cluster.y, PROVINCE_CONFIG.minPoiDistance * 0.6)) {
                return;
            }

            const factionData = getFactionData(factionId);
            const provinceName = generateProvinceName(cluster, factionData, index);

            provinces.push({
                id: `gen_${factionId}_${index}_${Math.random().toString(36).substr(2, 5)}`,
                name: provinceName,
                x: cluster.x,
                y: cluster.y,
                radius: cluster.radius || PROVINCE_CONFIG.defaultRadius,
                isDefined: false,
                generatedFrom: factionId
            });

            usedPositions.push({ x: cluster.x, y: cluster.y });
        });
    });

    return provinces;
}

// ============================================================================
// NEW: Cluster POIs for province generation
// ============================================================================
function clusterPoisForProvinces(pois, minDistance) {
    if (pois.length === 0) return [];

    if (pois.length === 1) {
        return [{
            x: pois[0].x,
            y: pois[0].y,
            pois: pois,
            radius: PROVINCE_CONFIG.defaultRadius
        }];
    }

    const clusters = [];
    const assigned = new Set();

    // Sort by importance (political influence + population)
    const sortedPois = [...pois].sort((a, b) => {
        const aScore = (a.political_influence || 0) * 3 + 
                       (a.military_strength || 0) * 2 + 
                       (a.population || 0) / 500;
        const bScore = (b.political_influence || 0) * 3 + 
                       (b.military_strength || 0) * 2 + 
                       (b.population || 0) / 500;
        return bScore - aScore;
    });

    sortedPois.forEach(poi => {
        if (assigned.has(poi.id)) return;

        // Check if can join existing cluster
        let foundCluster = null;
        let minDist = Infinity;

        for (const cluster of clusters) {
            const distance = Math.hypot(poi.x - cluster.x, poi.y - cluster.y);
            if (distance < minDistance && distance < minDist) {
                foundCluster = cluster;
                minDist = distance;
            }
        }

        if (foundCluster) {
            foundCluster.pois.push(poi);

            // Recalculate center weighted by influence
            let totalWeight = 0;
            let weightedX = 0;
            let weightedY = 0;

            foundCluster.pois.forEach(p => {
                const weight = 1 + (p.political_influence || 0) * 2 + (p.military_strength || 0);
                weightedX += p.x * weight;
                weightedY += p.y * weight;
                totalWeight += weight;
            });

            foundCluster.x = weightedX / totalWeight;
            foundCluster.y = weightedY / totalWeight;

            // Expand radius based on POI spread
            const maxDist = foundCluster.pois.reduce((max, p) => {
                return Math.max(max, Math.hypot(p.x - foundCluster.x, p.y - foundCluster.y));
            }, 0);
            foundCluster.radius = Math.max(PROVINCE_CONFIG.defaultRadius, maxDist + 3);
        } else {
            clusters.push({
                x: poi.x,
                y: poi.y,
                pois: [poi],
                radius: PROVINCE_CONFIG.defaultRadius
            });
        }

        assigned.add(poi.id);
    });

    return clusters;
}

// ============================================================================
// NEW: Generate province name from cluster data
// ============================================================================



// ============================================================================
// NEW: Count POIs within a province
// ============================================================================

function countPoisInProvince(province, allPois) {
    const radius = province.radius || PROVINCE_CONFIG.defaultRadius;
    return allPois.filter(poi => {
        const distance = Math.hypot(poi.x - province.x, poi.y - province.y);
        return distance <= radius;
    }).length;
}
function createPieChartSVG(controlData, size) {
    const radius = size / 2;
    
    // Filter out unaligned for display purposes
    const filteredData = Object.entries(controlData).filter(([factionId]) => factionId !== 'unaligned');
    
    // If all control is unaligned, return a neutral circle
    if (filteredData.length === 0) {
        return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
            <circle cx="${radius}" cy="${radius}" r="${radius}" fill="#555" opacity="0.5"/>
        </svg>`;
    }
    
    // Recalculate percentages without unaligned
    const totalFiltered = filteredData.reduce((sum, [, pct]) => sum + pct, 0);
    const normalizedData = filteredData.map(([factionId, pct]) => [
        factionId, 
        totalFiltered > 0 ? (pct / totalFiltered) * 100 : 0
    ]);

    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
    let cumulativePercent = 0;
    
    const sortedData = normalizedData.sort(([, a], [, b]) => b - a);

    for (const [factionId, percent] of sortedData) {
        if (percent === 0) continue;

        const factionData = getFactionData(factionId);
        const color = factionData.color;

        if (percent >= 100 || sortedData.length === 1) {
            svg += `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />`;
            continue;
        }

        const startAngle = (cumulativePercent / 100 * 2 * Math.PI) - (Math.PI / 2);
        cumulativePercent += percent;
        const endAngle = (cumulativePercent / 100 * 2 * Math.PI) - (Math.PI / 2);

        const x1 = radius + radius * Math.cos(startAngle);
        const y1 = radius + radius * Math.sin(startAngle);
        const x2 = radius + radius * Math.cos(endAngle);
        const y2 = radius + radius * Math.sin(endAngle);
        const largeArc = percent > 50 ? 1 : 0;

        svg += `<path d="M ${radius},${radius} L ${x1},${y1} A ${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z" fill="${color}" />`;
    }

    svg += '</svg>';
    return svg;
}

// ============================================================================
// TACTICAL & PARTY LAYERS
// ============================================================================

function getCompatibleMapIds(mapId) {
    const currentData = MAP_DATA[mapId];
    if (!currentData?.imageSrc) return [mapId];

    return Object.keys(MAP_DATA).filter(k =>
        MAP_DATA[k].imageSrc === currentData.imageSrc
    );
}

function getUnitIcon(unitType) {
    const icons = {
        garrison: '⛫',
        patrol: '⬦',
        main_force: '●',
        special_ops: '★',
        siege_unit: '⌖',
        ambush: 'X'
    };
    return icons[unitType] || '?';
}

function renderTacticalLayer(mapId, domContainer, svgContainer) {
    const compatibleIds = getCompatibleMapIds(mapId);

    // Front lines
    const frontLines = BATTLE_MAP_DATA.front_lines.filter(fl => compatibleIds.includes(fl.mapId));
    const svgFragment = document.createDocumentFragment();

    frontLines.forEach(fl => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        line.setAttribute('points', fl.points);
        line.classList.add('front-line', 'clickable-tactical');
        line.style.pointerEvents = 'stroke';
        line.addEventListener('click', () => {
            playSound('click.mp3');
            renderTacticalDetailPanel(fl.id, 'frontline');
        });
        svgFragment.appendChild(line);
    });

    // Troops
    const troops = BATTLE_MAP_DATA.troop_deployments.filter(t => compatibleIds.includes(t.mapId));

    troops.forEach(troop => {
        // Patrol paths
        if (troop.unitType === 'patrol' && troop.path) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', troop.path);
            path.classList.add('patrol-path');
            path.style.stroke = getFactionData(troop.factionId).color;
            svgFragment.appendChild(path);
        }

        // Zone of control
        if (troop.strength_val && ['main_force', 'garrison'].includes(troop.unitType)) {
            const zone = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            zone.setAttribute('cx', troop.x);
            zone.setAttribute('cy', troop.y);
            zone.setAttribute('r', `${troop.strength_val / 50}%`);
            zone.classList.add('zone-of-control');
            zone.style.fill = getFactionData(troop.factionId).color;
            svgFragment.appendChild(zone);
        }
    });

    svgContainer.appendChild(svgFragment);

    // Troop markers
    const domFragment = document.createDocumentFragment();

    troops.forEach(troop => {
        const factionData = getFactionData(troop.factionId);
        const marker = document.createElement('div');
        marker.className = `troop-marker unit-type-${troop.unitType}`;
        if (troop.battlefront) marker.classList.add('battlefront');

        marker.style.left = `${troop.x}%`;
        marker.style.top = `${troop.y}%`;
        marker.dataset.troopId = troop.id;
        marker.style.borderColor = factionData.color;
        marker.style.backgroundColor = hexToRgba(factionData.color, 0.4);

        const icon = document.createElement('div');
        icon.className = 'unit-type-icon';
        icon.textContent = getUnitIcon(troop.unitType);
        if (troop.unitType === 'patrol') {
            icon.style.transform = 'rotate(-45deg)';
        }
        marker.appendChild(icon);

        marker.addEventListener('click', (e) => {
            e.stopPropagation();
            playSound('click.mp3');
            renderTacticalDetailPanel(troop.id, 'troop');
        });

        domFragment.appendChild(marker);
    });

    domContainer.appendChild(domFragment);
}


const PROVINCE_CONFIG = {
    renderMode: 'dynamic',
    showAllProvinces: true,
    minPoiDistance: 7,
    defaultRadius: 5,
    // Merge settings
    enableMerging: true,
    mergeThreshold: 0.80,        // 80% - if faction controls this much, consider merging
    mergeDistance: 12,           // Max distance between provinces to merge (in %)
    minMergePoiCount: 2,         // Minimum POIs to consider a province for merging
};
function mergeAdjacentProvinces(provinces, allPois) {
    if (!PROVINCE_CONFIG.enableMerging || provinces.length < 2) {
        return provinces;
    }

    let mergedProvinces = [...provinces];
    let mergeOccurred = true;
    let iterations = 0;
    const maxIterations = 10; // Prevent infinite loops

    while (mergeOccurred && iterations < maxIterations) {
        mergeOccurred = false;
        iterations++;

        const newMergedList = [];
        const mergedIndices = new Set();

        for (let i = 0; i < mergedProvinces.length; i++) {
            if (mergedIndices.has(i)) continue;

            const provinceA = mergedProvinces[i];
            const controlA = calculateProvinceControl(provinceA, allPois);
            const dominantA = getDominantFactionFromControl(controlA);

            // Skip unaligned provinces
            if (dominantA.factionId === 'unaligned') {
                newMergedList.push(provinceA);
                continue;
            }

            // Check if this province qualifies for merging (dominant faction >= threshold)
            if (dominantA.percentage < PROVINCE_CONFIG.mergeThreshold * 100) {
                newMergedList.push(provinceA);
                continue;
            }

            // Find adjacent provinces with same dominant faction that also qualify
            let bestMergeCandidate = null;
            let bestMergeIndex = -1;
            let bestMergeScore = 0;

            for (let j = i + 1; j < mergedProvinces.length; j++) {
                if (mergedIndices.has(j)) continue;

                const provinceB = mergedProvinces[j];
                const controlB = calculateProvinceControl(provinceB, allPois);
                const dominantB = getDominantFactionFromControl(controlB);

                // Must have same dominant faction
                if (dominantB.factionId !== dominantA.factionId) continue;

                // Dominant faction must also control >= threshold in province B
                if (dominantB.percentage < PROVINCE_CONFIG.mergeThreshold * 100) continue;

                // Check distance between provinces
                const distance = Math.hypot(provinceA.x - provinceB.x, provinceA.y - provinceB.y);
                if (distance > PROVINCE_CONFIG.mergeDistance) continue;

                // Calculate merge score (higher = better merge candidate)
                // Prefer: closer provinces, higher control percentages
                const proximityScore = 1 - (distance / PROVINCE_CONFIG.mergeDistance);
                const controlScore = (dominantA.percentage + dominantB.percentage) / 200;
                const mergeScore = proximityScore * 0.6 + controlScore * 0.4;

                if (mergeScore > bestMergeScore) {
                    bestMergeScore = mergeScore;
                    bestMergeCandidate = provinceB;
                    bestMergeIndex = j;
                }
            }

            if (bestMergeCandidate) {
                // Merge the two provinces
                const mergedProvince = createMergedProvince(provinceA, bestMergeCandidate, allPois, dominantA.factionId);
                newMergedList.push(mergedProvince);
                mergedIndices.add(i);
                mergedIndices.add(bestMergeIndex);
                mergeOccurred = true;
            } else {
                newMergedList.push(provinceA);
            }
        }

        // Add any provinces that weren't merged
        for (let i = 0; i < mergedProvinces.length; i++) {
            if (!mergedIndices.has(i) && !newMergedList.includes(mergedProvinces[i])) {
                newMergedList.push(mergedProvinces[i]);
            }
        }

        mergedProvinces = newMergedList;
    }

    return mergedProvinces;
}

// ============================================================================
// NEW: Get dominant faction from control data
// ============================================================================

function getDominantFactionFromControl(control) {
    const entries = Object.entries(control).filter(([fid]) => fid !== 'unaligned');
    
    if (entries.length === 0) {
        return { factionId: 'unaligned', percentage: 100 };
    }

    entries.sort(([, a], [, b]) => b - a);
    return {
        factionId: entries[0][0],
        percentage: entries[0][1]
    };
}

// ============================================================================
// NEW: Create a merged province from two provinces
// ============================================================================

function createMergedProvince(provinceA, provinceB, allPois, dominantFactionId) {
    // Get all POIs from both provinces
    const radiusA = provinceA.radius || PROVINCE_CONFIG.defaultRadius;
    const radiusB = provinceB.radius || PROVINCE_CONFIG.defaultRadius;

    const poisA = allPois.filter(poi => 
        Math.hypot(poi.x - provinceA.x, poi.y - provinceA.y) <= radiusA
    );
    const poisB = allPois.filter(poi => 
        Math.hypot(poi.x - provinceB.x, poi.y - provinceB.y) <= radiusB
    );

    // Combine unique POIs
    const allProvincePois = [...poisA];
    poisB.forEach(poi => {
        if (!allProvincePois.find(p => p.id === poi.id)) {
            allProvincePois.push(poi);
        }
    });

    // Calculate weighted center based on POI importance
    let totalWeight = 0;
    let weightedX = 0;
    let weightedY = 0;

    allProvincePois.forEach(poi => {
        const weight = 1 + 
            (poi.political_influence || 0) * 2 + 
            (poi.military_strength || 0) + 
            (poi.population || 0) / 1000;
        weightedX += poi.x * weight;
        weightedY += poi.y * weight;
        totalWeight += weight;
    });

    const centerX = totalWeight > 0 ? weightedX / totalWeight : (provinceA.x + provinceB.x) / 2;
    const centerY = totalWeight > 0 ? weightedY / totalWeight : (provinceA.y + provinceB.y) / 2;

    // Calculate new radius to encompass both provinces
    const maxDistFromCenter = allProvincePois.reduce((max, poi) => {
        return Math.max(max, Math.hypot(poi.x - centerX, poi.y - centerY));
    }, 0);

    const newRadius = Math.max(
        PROVINCE_CONFIG.defaultRadius,
        maxDistFromCenter + 2,
        radiusA,
        radiusB
    );

    // Generate merged name
    const mergedName = generateMergedProvinceName(provinceA, provinceB, dominantFactionId, allProvincePois);

    // Determine if merged province should be marked as defined
    const isDefined = provinceA.isDefined || provinceB.isDefined;

    return {
        id: `merged_${provinceA.id}_${provinceB.id}`,
        name: mergedName,
        x: centerX,
        y: centerY,
        radius: newRadius,
        isDefined: isDefined,
        isMerged: true,
        mergedFrom: [provinceA.id, provinceB.id],
        generatedFrom: dominantFactionId
    };
}

// ============================================================================
// NEW: Generate name for merged province
// ============================================================================

function generateMergedProvinceName(provinceA, provinceB, dominantFactionId, allPois) {
    // Find the most important POI in the merged area
    const sortedPois = [...allPois].sort((a, b) => {
        const aScore = (a.political_influence || 0) * 3 + 
                       (a.military_strength || 0) * 2 + 
                       (a.population || 0) / 500;
        const bScore = (b.political_influence || 0) * 3 + 
                       (b.military_strength || 0) * 2 + 
                       (b.population || 0) / 500;
        return bScore - aScore;
    });

    if (sortedPois.length > 0) {
        const mainPoi = sortedPois[0];
        
        // Use grander suffixes for merged territories
        const grandSuffixes = [
            'Dominion', 'Empire', 'Realm', 'Kingdom', 'Grand Province', 
            'Hegemony', 'Sovereignty', 'Territories', 'Expanse'
        ];
        const suffixIndex = Math.abs(simpleHash(mainPoi.id + dominantFactionId)) % grandSuffixes.length;
        const suffix = grandSuffixes[suffixIndex];

        let baseName = mainPoi.name;
        
        // Clean up the name
        if (baseName.length > 15) {
            baseName = baseName.split(' ')[0];
        }

        const removeWords = ['City', 'Town', 'Village', 'Castle', 'Fort', 'Keep', 'Tower', 'Temple', 'Academy', 'Region', 'Province', 'Territory', 'District'];
        removeWords.forEach(word => {
            baseName = baseName.replace(new RegExp(`\\s*${word}\\s*`, 'gi'), ' ').trim();
        });

        if (baseName.length < 2) {
            baseName = mainPoi.name.split(' ')[0];
        }

        return `${baseName} ${suffix}`;
    }

    // Fallback: use faction name
    const factionData = getFactionData(dominantFactionId);
    return `Greater ${factionData.name} Territory`;
}

export function setProvinceRenderMode(mode) {
    PROVINCE_CONFIG.renderMode = mode;
    renderPois();
}
export function renderPoliticalSubmodeSelector() {
    const container = document.getElementById('political-submode-selector');
    if (!container) return;

    if (map.activeMapMode !== 'political' || map.isEditMode) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';

    container.innerHTML = `
        <span>View:</span>
        <button class="mode-btn ${map.activePoliticalSubmode === 'poi' ? 'active' : ''}" data-submode="poi">
            POIs
        </button>
        <button class="mode-btn ${map.activePoliticalSubmode === 'state' ? 'active' : ''}" data-submode="state">
            States
        </button>
        <button class="mode-btn ${map.activePoliticalSubmode === 'province' ? 'active' : ''}" data-submode="province">
            Provinces
        </button>
        <button class="mode-btn ${map.activePoliticalSubmode === 'region' ? 'active' : ''}" data-submode="region">
            Regions
        </button>
    `;

    container.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const submode = btn.dataset.submode;
            map.setActivePoliticalSubmode(submode);
            playSound('click.mp3');

            container.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            renderPois();
            renderMapModeLegend();
        });
    });
}


export function setTerritoryRenderMode(mode) {
    TERRITORY_CONFIG.renderMode = mode;
    renderPois();
}

export function setShowAllTerritories(show) {
    TERRITORY_CONFIG.showAllTerritories = show;
    renderPois();
}

export function getTerritoryConfig() {
    return { ...TERRITORY_CONFIG };
}

export function updateTerritoryConfig(updates) {
    if (updates.state) Object.assign(TERRITORY_CONFIG.state, updates.state);
    if (updates.province) Object.assign(TERRITORY_CONFIG.province, updates.province);
    renderPois();
}
export function setShowAllProvinces(show) {
    PROVINCE_CONFIG.showAllProvinces = show;
    renderPois();
}

export function getProvinceConfig() {
    return { ...PROVINCE_CONFIG };
}


function getPartyCharacterData(charKey) {
    return LORE_DATA.characters[charKey]
        || LORE_DATA.auxiliary_party[charKey]
        || { name: charKey.replace(/_/g, ' '), portrait: `portraits/${charKey}.png`, role: 'Unknown' };
}

// ============================================================================
// DETAIL PANEL RENDERERS
// ============================================================================

export function renderTacticalDetailPanel(itemId, itemType) {
    if (!detailPanel) initDOMReferences();

    let html = '';

    switch (itemType) {
        case 'troop': {
            const troop = BATTLE_MAP_DATA.troop_deployments.find(t => t.id === itemId);
            if (!troop) return;

            const factionData = getFactionData(troop.factionId);
            const hasIntel = hasSufficientIntel(troop.details?.intelReq);

            const statusHTML = hasIntel ? `
                <p><strong>Status:</strong> ${troop.details.status}</p>
                <p><strong>Objective:</strong> ${troop.details.objective}</p>
                <p><strong>Morale:</strong> ${troop.details.morale}%</p>
            ` : '<p class="redacted">[Intel Required]</p>';

            html = `
                <div class="tactical-detail-panel">
                    <h3>${troop.name}</h3>
                    <p class="tactical-faction">
                        ${factionData.logo ? `<img src="${factionData.logo}">` : ''}
                        <span style="color: ${factionData.color}">${factionData.name}</span>
                    </p>
                    <p><strong>Strength:</strong> ${troop.strength}</p>
                    ${statusHTML}
                </div>
            `;
            break;
        }

        case 'vigilance': {
            const journey = BATTLE_MAP_DATA.vigilance_journey;
            html = `
                <div class="tactical-detail-panel">
                    <h3>The 'Vigilance'</h3>
                    <p><strong>Status:</strong> ${journey.status}</p>
                    <p><strong>Position:</strong> Holding at Capital</p>
                </div>
            `;
            break;
        }

        case 'frontline': {
            const line = BATTLE_MAP_DATA.front_lines.find(l => l.id === itemId);
            html = `
                <div class="tactical-detail-panel">
                    <h3>Active Frontline</h3>
                    <p>${line?.description || 'No description available.'}</p>
                </div>
            `;
            break;
        }
    }

    detailPanel.innerHTML = html;
}



function showClusterDetailPanel(cluster) {
    if (!detailPanel) initDOMReferences();

    const dominantInfo = getDominantFaction(cluster.pois);
    const factionStats = getRegionFactionStats(cluster.pois);

    // Faction breakdown
    const factionBreakdownHTML = Object.entries(factionStats)
        .sort(([, a], [, b]) => b.poiCount - a.poiCount)
        .map(([factionId, stats]) => {
            const fData = getFactionData(factionId);
            const percentage = Math.round((stats.poiCount / cluster.pois.length) * 100);
            return `
                <div class="faction-breakdown-row">
                    <div class="faction-info">
                        ${fData.logo ? `<img src="${fData.logo}" class="faction-mini-logo">` : ''}
                        <span style="color: ${fData.color}">${fData.name}</span>
                    </div>
                    <div class="faction-stats-mini">
                        <span class="poi-count">${stats.poiCount} POIs (${percentage}%)</span>
                        <span class="stat-mini">⚔️${stats.totalMilitary}</span>
                        <span class="stat-mini">💰${stats.totalEconomic}</span>
                    </div>
                </div>
            `;
        }).join('');

    // POI list
    const poisListHTML = cluster.pois.map(poi => {
        const pFaction = getFactionData(poi.factionId);
        const typeInfo = BUILDING_TYPES[poi.type] || { name: 'Location', icon: '📍' };
        return `
            <div class="cluster-poi-item" data-poi-id="${poi.id}" style="border-left-color: ${pFaction.color}">
                <div class="poi-item-header">
                    <span class="poi-item-icon">${typeInfo.icon}</span>
                    <span class="poi-item-name">${poi.name}</span>
                </div>
                <div class="poi-item-stats">
                    <span>⚔️${poi.military_strength || 0}</span>
                    <span>💰${poi.economic_value || 0}</span>
                    <span>👥${(poi.population || 0).toLocaleString()}</span>
                </div>
            </div>
        `;
    }).join('');

    const totalMilitary = cluster.pois.reduce((s, p) => s + (p.military_strength || 0), 0);
    const totalEconomic = cluster.pois.reduce((s, p) => s + (p.economic_value || 0), 0);
    const totalPop = cluster.pois.reduce((s, p) => s + (p.population || 0), 0);

    detailPanel.innerHTML = `
        <div class="cluster-detail-panel">
            <div class="cluster-header">
                <h3>Regional Cluster</h3>
                <p class="cluster-subtitle">${cluster.pois.length} Locations</p>
            </div>

            <div class="cluster-summary">
                <div class="summary-stat">
                    <span class="stat-value">${totalMilitary}</span>
                    <span class="stat-label">Total Military</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${totalEconomic}</span>
                    <span class="stat-label">Total Economic</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${totalPop.toLocaleString()}</span>
                    <span class="stat-label">Total Population</span>
                </div>
            </div>

            <h4>Faction Control</h4>
            <div class="cluster-faction-breakdown">${factionBreakdownHTML}</div>

            <h4>Locations</h4>
            <div class="cluster-poi-list">${poisListHTML}</div>
        </div>
    `;

    // Add click handlers
    detailPanel.querySelectorAll('.cluster-poi-item').forEach(item => {
        item.addEventListener('click', () => {
            playSound('click.mp3');
            showDetailPanel(item.dataset.poiId);
        });
    });
}

export function showDetailPanel(poiId) {
    if (!detailPanel) {
        initDOMReferences();
    }
    if (!detailPanel) {
        detailPanel = document.getElementById('map-detail-content');
    }
    if (!detailPanel) {
        console.warn('showDetailPanel: detailPanel not found');
        return;
    }

    const poi = MAP_DATA[map.activeMapId]?.pointsOfInterest.find(p => p.id === poiId);
    if (!poi) return;

    const factionData = getFactionData(poi.factionId);
    const typeInfo = BUILDING_TYPES[poi.type] || { name: 'Unknown Location', icon: '❓' };
    const partyMembers = getPartyMembersAtPoi(poi.id);

    let content = `
        <div class="poi-detail">
            <h3>${poi.name}</h3>
            <p class="poi-type">${typeInfo.icon} ${typeInfo.name}</p>
            <p class="poi-faction" style="color: ${factionData.color}">
                ${factionData.logo ? `<img src="${factionData.logo}" style="width:20px;height:20px;vertical-align:middle;margin-right:5px;">` : ''}
                ${factionData.name}
            </p>
            <p class="poi-description">${poi.description || ''}</p>
    `;

    // Intel requirement check
    if (poi.intelReq && !state.debugMode) {
        const hasIntel = hasSufficientIntel(poi.intelReq);
        const reqFaction = typeof poi.intelReq === 'object' ? getFactionData(poi.intelReq.faction) : null;
        const reqText = typeof poi.intelReq === 'object'
            ? `${reqFaction?.name || 'Faction'} (Lvl ${poi.intelReq.level})`
            : `Intel Level ${poi.intelReq}`;

        content += `
            <div class="poi-intel-req ${hasIntel ? 'positive' : 'negative'}">
                <strong>Intel Required:</strong> ${reqText}<br>
                ${hasIntel ? 'Access Granted' : 'Access Denied'}
            </div>
        `;

        if (!hasIntel) {
            content += `</div>`;
            detailPanel.innerHTML = content;
            return;
        }
    }

    // Stats
    content += `
        <div class="poi-stats">
            <p><strong>Influence:</strong> ${poi.political_influence || 0}/10</p>
            <p><strong>Wealth:</strong> ${poi.economic_value || 0}/10</p>
            <p><strong>Military:</strong> ${poi.military_strength || 0}/10</p>
            <p><strong>Population:</strong> ${(poi.population || 0).toLocaleString()}</p>
        </div>
    `;

    // PARTY MEMBERS SECTION
    if (partyMembers.length > 0) {
        content += `
            <div class="poi-party-section">
                <h4>👥 Party Members Present (${partyMembers.length})</h4>
                <div class="party-members-list">
                    ${partyMembers.map(member => {
                        const statusClass = 
                            member.status.toLowerCase().includes('danger') || 
                            member.status.toLowerCase().includes('combat') ? 'status-danger' : 
                            member.status.toLowerCase().includes('mia') || 
                            member.status.toLowerCase().includes('missing') ? 'status-mia' : 
                            'status-normal';
                        
                        return `
                            <div class="party-member-card" data-char-key="${member.charKey}">
                                <img src="${member.portrait}" class="party-member-portrait" alt="${member.name}">
                                <div class="party-member-info">
                                    <span class="party-member-name">${member.name}</span>
                                    <span class="party-member-role">${member.role || 'Party Member'}</span>
                                </div>
                                <div class="party-member-status ${statusClass}">
                                    ${member.status}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    // Requests
    const requests = Object.values(QUEST_DATA).filter(q => q.locationId === poi.id && q.status === 'available');
    if (requests.length > 0) {
        content += `
            <div class="poi-requests-section">
                <h4>Active Requests</h4>
                ${requests.map(r => `
                    <div class="poi-request-item">
                        <strong>${r.title}</strong>
                        <p>${r.objective}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Trade info
    const trade = getTradeInfo(poi);
    if (trade) {
        content += `
            <div class="poi-trade-section" style="margin-top:16px; padding-top:12px; border-top:1px dashed var(--border-color);">
                <h4>Economic Output</h4>
                <p><strong>Primary Export:</strong> ${trade.icon} ${trade.name}</p>
                <p><strong>Status:</strong> ${trade.tier}</p>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin-top:8px; font-size:0.9rem;">
                    <div><strong>Production:</strong> ${trade.production} / day</div>
                    <div><strong>Export:</strong> ${trade.exportAmt} / day</div>
                </div>
                <p style="margin-top:8px;"><strong>Primary Import Need:</strong> ${trade.importName} (${trade.importAmt})</p>
                <p class="small" style="color:var(--text-secondary); margin-top:8px;">
                    <em>Controlled by: ${getAssociatedGuilds(trade.name, poi.factionId)}</em>
                </p>
            </div>
        `;
    }

    content += `</div>`;
    detailPanel.innerHTML = content;

    // Add click handlers for party member cards
    detailPanel.querySelectorAll('.party-member-card').forEach(card => {
        card.addEventListener('click', () => {
            playSound('click.mp3');
            const charKey = card.dataset.charKey;
            showPartyMemberModal(charKey);
        });
    });
}
function showPartyMemberModal(charKey) {
    const charData = getPartyCharacterData(charKey);
    
    // Find member's current status from party locations
    let memberStatus = 'Unknown';
    let memberLocation = null;
    
    const compatibleIds = getCompatibleMapIds(map.activeMapId);
    compatibleIds.forEach(mapId => {
        if (PARTY_LOCATIONS[mapId]) {
            const member = PARTY_LOCATIONS[mapId].find(m => m.charKey === charKey);
            if (member) {
                memberStatus = member.status;
            }
        }
    });

    // Find which POI they're at
    for (const [poiId, members] of Object.entries(partyPoiAssociations)) {
        if (members.some(m => m.charKey === charKey)) {
            const poi = MAP_DATA[map.activeMapId]?.pointsOfInterest.find(p => p.id === poiId);
            if (poi) {
                memberLocation = poi.name;
            }
            break;
        }
    }

    const statusClass = 
        memberStatus.toLowerCase().includes('danger') || 
        memberStatus.toLowerCase().includes('combat') ? 'status-danger' : 
        memberStatus.toLowerCase().includes('mia') || 
        memberStatus.toLowerCase().includes('missing') ? 'status-mia' : 
        'status-normal';

    const modalHTML = `
        <div class="party-member-modal-overlay" id="party-modal-${charKey}">
            <div class="party-member-modal">
                <button class="modal-close" onclick="this.closest('.party-member-modal-overlay').remove()">✕</button>
                
                <div class="party-modal-header">
                    <img src="${charData.portrait}" class="party-modal-portrait" alt="${charData.name}">
                    <div class="party-modal-title">
                        <h2>${charData.name}</h2>
                        <p class="party-modal-role">${charData.role || 'Party Member'}</p>
                    </div>
                </div>
                
                <div class="party-modal-body">
                    <div class="party-modal-status ${statusClass}">
                        <span class="status-label">Current Status:</span>
                        <span class="status-value">${memberStatus}</span>
                    </div>
                    
                    ${memberLocation ? `
                        <div class="party-modal-location">
                            <span class="location-label">📍 Location:</span>
                            <span class="location-value">${memberLocation}</span>
                        </div>
                    ` : ''}
                    
                    ${charData.description ? `
                        <div class="party-modal-description">
                            <p>${charData.description}</p>
                        </div>
                    ` : ''}
                    
                    <div class="party-modal-actions">
                        <a href="profile.html?user=${charKey}" class="party-modal-btn primary">View Full Profile</a>
                        <button class="party-modal-btn secondary" onclick="this.closest('.party-member-modal-overlay').remove()">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Animate in
    requestAnimationFrame(() => {
        const modal = document.getElementById(`party-modal-${charKey}`);
        if (modal) modal.classList.add('visible');
    });

    // Close on backdrop click
    const overlay = document.getElementById(`party-modal-${charKey}`);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// ============================================================================
// LEGEND RENDERER
// ============================================================================


export function setProvinceMergeThreshold(threshold) {
    PROVINCE_CONFIG.mergeThreshold = Math.max(0.5, Math.min(1, threshold));
    renderPois();
}

export function setProvinceMergeDistance(distance) {
    PROVINCE_CONFIG.mergeDistance = Math.max(5, Math.min(30, distance));
    renderPois();
}

export function setProvinceMergingEnabled(enabled) {
    PROVINCE_CONFIG.enableMerging = enabled;
    renderPois();
}
export function renderMapModeLegend() {
    if (!detailPanel) {
        initDOMReferences();
    }
    if (!detailPanel) {
        detailPanel = document.getElementById('map-detail-content');
    }
    if (!detailPanel) {
        console.warn('renderMapModeLegend: detailPanel not found in DOM');
        return;
    }

    const clusterToggleHTML = !map.isEditMode ? `
        <div class="cluster-toggle-control">
            <label>
                <input type="checkbox" id="cluster-toggle" ${CLUSTER_CONFIG.enabled ? 'checked' : ''}>
                <span>Group nearby locations</span>
            </label>
        </div>
    ` : '';

    const legendRenderers = {
        political: renderPoliticalLegend,
        economic: renderEconomicLegend,
        military: renderMilitaryLegend,
        population: renderPopulationLegend,
        laws: renderLawsLegend,
        age_of_antiquity: renderAgeLegend,
        crime_rate: renderCrimeLegend,
        tactical: renderTacticalLegend
    };

    const renderer = legendRenderers[map.activeMapMode];
    let legendHTML = renderer ? renderer(clusterToggleHTML) : `
        <div class="map-mode-legend">
            ${clusterToggleHTML}
            <p class="panel-placeholder">Select a point of interest for details.</p>
        </div>
    `;

    // Party members legend (if any are on this map)
    const partyCount = Object.values(partyPoiAssociations).reduce((sum, members) => sum + members.length, 0);
    if (partyCount > 0 && !map.isEditMode) {
        legendHTML += renderPartyPresenceLegend();
    }

    if (CLUSTER_CONFIG.enabled && !map.isEditMode && map.activeMapMode !== 'tactical') {
        legendHTML += renderClusterLegend();
    }

    detailPanel.innerHTML = legendHTML;

    // Event Listeners
    const clusterToggle = document.getElementById('cluster-toggle');
    if (clusterToggle) {
        clusterToggle.addEventListener('change', (e) => {
            CLUSTER_CONFIG.enabled = e.target.checked;
            playSound('click.mp3');
            renderPois();
        });
    }

    const territoryToggle = document.getElementById('show-all-territories');
    if (territoryToggle) {
        territoryToggle.addEventListener('change', (e) => {
            playSound('click.mp3');
            TERRITORY_CONFIG.showAllTerritories = e.target.checked;
            renderPois();
        });
    }
}
function renderPartyPresenceLegend() {
    const allMembers = [];
    const poisWithParty = [];

    for (const [poiId, members] of Object.entries(partyPoiAssociations)) {
        if (members.length > 0) {
            const poi = MAP_DATA[map.activeMapId]?.pointsOfInterest.find(p => p.id === poiId);
            if (poi) {
                poisWithParty.push({
                    poi,
                    members
                });
                allMembers.push(...members);
            }
        }
    }

    if (allMembers.length === 0) return '';

    const hasAlerts = allMembers.some(m => 
        m.status.toLowerCase().includes('danger') || 
        m.status.toLowerCase().includes('combat') ||
        m.status.toLowerCase().includes('mia')
    );

    const memberListHTML = allMembers.slice(0, 6).map(member => {
        const statusClass = 
            member.status.toLowerCase().includes('danger') || 
            member.status.toLowerCase().includes('combat') ? 'status-danger' : 
            member.status.toLowerCase().includes('mia') ? 'status-mia' : '';
        
        return `
            <div class="party-legend-member ${statusClass}" data-char-key="${member.charKey}">
                <img src="${member.portrait}" alt="${member.name}">
                <span class="member-name">${member.name}</span>
            </div>
        `;
    }).join('');

    const moreHTML = allMembers.length > 6 ? `<p class="party-legend-more">+${allMembers.length - 6} more</p>` : '';

    return `
        <div class="map-mode-legend party-presence-legend" style="border-top: 1px dashed var(--border-color); margin-top: 10px; padding-top: 10px;">
            <h4>👥 Party Locations ${hasAlerts ? '<span class="party-alert-badge">⚠️</span>' : ''}</h4>
            <p class="legend-note">${allMembers.length} member${allMembers.length !== 1 ? 's' : ''} at ${poisWithParty.length} location${poisWithParty.length !== 1 ? 's' : ''}</p>
            <div class="party-legend-grid">
                ${memberListHTML}
            </div>
            ${moreHTML}
            <div class="party-legend-key">
                <span class="key-item"><span class="key-dot party-indicator"></span> Party present</span>
                <span class="key-item"><span class="key-dot party-alert"></span> Alert status</span>
            </div>
        </div>
    `;
}

function renderPoliticalLegend(clusterToggleHTML) {
    const stateData = PROVINCE_POLITICS?.[map.activeMapId];
    const isStateMode = map.activePoliticalSubmode === 'state' && !map.isEditMode;
    const isProvinceMode = map.activePoliticalSubmode === 'province' && !map.isEditMode;
    const hasPredefinedStates = !!stateData;

    if (isStateMode || isProvinceMode) {
        const territoryControlsHTML = `
            <div class="territory-controls">
                <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; cursor: pointer;">
                    <input type="checkbox" id="show-all-territories" ${TERRITORY_CONFIG.showAllTerritories ? 'checked' : ''}>
                    <span>Generate All Territories</span>
                </label>
                <p class="legend-note">
                    ${isProvinceMode 
                        ? 'Provinces are formed from groups of nearby states with compatible faction control.'
                        : 'States are administrative units generated from location clusters.'}
                </p>
            </div>
        `;

        const allPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
        const visibleFactions = new Set();

        allPois.forEach(poi => {
            if (poi.factionId && poi.factionId !== 'unaligned') {
                visibleFactions.add(poi.factionId);
            }
        });

        // Get alliances present
        const allianceData = getAllianceData();
        const presentAlliances = new Map();
        
        visibleFactions.forEach(fid => {
            const alliance = allianceData.factionToAlliance?.[fid];
            if (alliance && !presentAlliances.has(alliance.id)) {
                presentAlliances.set(alliance.id, alliance);
            }
        });

        const factionsHTML = [...visibleFactions]
            .sort((a, b) => getFactionData(a).name.localeCompare(getFactionData(b).name))
            .map(factionId => {
                const factionData = getFactionData(factionId);
                const alliance = getAllianceForFaction(factionId);
                
                return `
                    <li class="legend-item">
                        <div class="legend-color-box" style="background-color: ${factionData.color};"></div>
                        <span>${factionData.name}</span>
                        ${alliance ? `<span class="legend-alliance-tag" style="color:${alliance.color || '#888'};">[${alliance.shortName || alliance.name.substring(0,3)}]</span>` : ''}
                    </li>
                `;
            }).join('');

        // Alliance legend section
        let allianceLegendHTML = '';
        if (presentAlliances.size > 0) {
            const allianceItems = [...presentAlliances.values()].map(alliance => `
                <li class="legend-item alliance-legend-item">
                    <div class="legend-color-box" style="background-color: ${alliance.color || '#4CAF50'};">🤝</div>
                    <span>${alliance.name}</span>
                    <span class="legend-member-count">(${alliance.members?.length || 0} members)</span>
                </li>
            `).join('');
            
            allianceLegendHTML = `
                <h5 style="margin-top: 12px;">Active Alliances</h5>
                <ul class="legend-list alliance-legend">
                    ${allianceItems}
                </ul>
                <p class="legend-note" style="margin-top: 8px;">
                    <span style="color: #4CAF50;">🤝</span> Allied territories are not marked as contested
                </p>
            `;
        }

        const viewTitle = isProvinceMode ? 'Provincial Control' : 'State Control';
        const viewDesc = isProvinceMode 
            ? 'Provinces group multiple states. Badge shows state count.'
            : 'Pie charts show faction influence within each state.';

        return `
            <div class="map-mode-legend">
                ${clusterToggleHTML}
                <h4>${viewTitle}</h4>
                <p>${viewDesc}</p>
                ${territoryControlsHTML}
                ${factionsHTML ? `<h5>Active Factions</h5><ul class="legend-list">${factionsHTML}</ul>` : '<p class="panel-placeholder">No aligned factions found.</p>'}
                ${allianceLegendHTML}
            </div>
        `;
    }

    // Standard POI political view (unchanged from before)
    const currentPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    const visibleFactions = [...new Set(
        currentPois
            .map(p => p.factionId)
            .filter(fid => fid && fid !== 'unaligned')
    )];

    const factionsHTML = visibleFactions
        .sort((a, b) => getFactionData(a).name.localeCompare(getFactionData(b).name))
        .map(factionId => {
            const factionData = getFactionData(factionId);
            return `
                <li class="legend-item">
                    <div class="legend-color-box" style="${factionData.logo
                        ? `background-image: url(${factionData.logo}); background-size: cover;`
                        : `background-color: ${factionData.color};`}"></div>
                    <span>${factionData.name}</span>
                </li>
            `;
        }).join('');

    return `
        <div class="map-mode-legend">
            ${clusterToggleHTML}
            <h4>Political View</h4>
            <p>Locations colored by controlling faction. Size indicates political influence.</p>
            ${factionsHTML
                ? `<ul class="legend-list">${factionsHTML}</ul>`
                : '<p class="panel-placeholder">No aligned factions in current view.</p>'}
        </div>
    `;
}
function renderEconomicLegend(clusterToggleHTML) {
    return `
        <div class="map-mode-legend">
            ${clusterToggleHTML}
            <h4>Economic View</h4>
            <p>Locations show primary exports. Size indicates wealth.</p>
            <ul class="legend-list">
                <li class="legend-item"><div class="legend-color-box" style="background:transparent; border: 2px solid #FFD700;">💰</div><span>Global Hub</span></li>
                <li class="legend-item"><div class="legend-color-box" style="background:transparent; border: 2px solid #C0C0C0;">⚒️</div><span>Major Producer</span></li>
                <li class="legend-item"><div class="legend-color-box" style="background:transparent; border: 2px solid #cd7f32;">🌾</div><span>Local</span></li>
            </ul>
        </div>
    `;
}

function renderMilitaryLegend(clusterToggleHTML) {
    return `
        <div class="map-mode-legend">
            ${clusterToggleHTML}
            <h4>Military View</h4>
            <p>Locations sized by military strength.</p>
        </div>
    `;
}

function renderPopulationLegend(clusterToggleHTML) {
    return `
        <div class="map-mode-legend">
            ${clusterToggleHTML}
            <h4>Population Density</h4>
            <p>Locations colored by population size.</p>
            <ul class="legend-list">
                <li class="legend-item"><div class="legend-color-box" style="background-color: #f46d43;"></div><span>Very High (>10k)</span></li>
                <li class="legend-item"><div class="legend-color-box" style="background-color: #fdae61;"></div><span>High (5k-10k)</span></li>
                <li class="legend-item"><div class="legend-color-box" style="background-color: #fee090;"></div><span>Medium (2k-5k)</span></li>
                <li class="legend-item"><div class="legend-color-box" style="background-color: #e0f3f8;"></div><span>Low (500-2k)</span></li>
                <li class="legend-item"><div class="legend-color-box" style="background-color: #91bfdb;"></div><span>Very Low (50-500)</span></li>
                <li class="legend-item"><div class="legend-color-box" style="background-color: #4575b4;"></div><span>Sparse (1-50)</span></li>
            </ul>
        </div>
    `;
}

function renderLawsLegend(clusterToggleHTML) {
    return `
        <div class="map-mode-legend">
            ${clusterToggleHTML}
            <h4>Laws & Customs</h4>
            <p>Click POIs for law details. Click map background for regional customs.</p>
            <button class="control-btn" onclick="renderer.showTraditionsPopup(null)">View Regional Customs</button>
        </div>
    `;
}

function renderAgeLegend(clusterToggleHTML) {
    return `
        <div class="map-mode-legend">
            ${clusterToggleHTML}
            <h4>Age of Antiquity</h4>
            <p>Yellow icons = ancient/mythic locations.</p>
            <ul class="legend-list">
                <li class="legend-item"><span>🏺 Mythic</span></li>
                <li class="legend-item"><span>🏰 Historical</span></li>
                <li class="legend-item"><span>🏠 Modern</span></li>
            </ul>
        </div>
    `;
}

function renderCrimeLegend(clusterToggleHTML) {
    return `
        <div class="map-mode-legend">
            ${clusterToggleHTML}
            <h4>Security Assessment</h4>
            <p>Red = lawless, Blue = safe.</p>
            <ul class="legend-list">
                <li class="legend-item"><span>💀 Lawless</span></li>
                <li class="legend-item"><span>⚠️ Caution</span></li>
                <li class="legend-item"><span>🛡️ Safe</span></li>
            </ul>
        </div>
    `;
}

function renderTacticalLegend() {
    return `
        <div class="map-mode-legend">
            <h4>Tactical Overview</h4>
            <p>Click units for status reports.</p>
            <h5>Unit Types</h5>
            <ul class="legend-list">
                <li class="legend-item"><div class="troop-marker-legend unit-type-main_force"><div class="unit-type-icon">${getUnitIcon('main_force')}</div></div><span>Main Force</span></li>
                <li class="legend-item"><div class="troop-marker-legend unit-type-garrison"><div class="unit-type-icon">${getUnitIcon('garrison')}</div></div><span>Garrison</span></li>
                <li class="legend-item"><div class="troop-marker-legend unit-type-patrol"><div class="unit-type-icon">${getUnitIcon('patrol')}</div></div><span>Patrol</span></li>
                <li class="legend-item"><div class="troop-marker-legend unit-type-special_ops"><div class="unit-type-icon">${getUnitIcon('special_ops')}</div></div><span>Special Ops</span></li>
            </ul>
            <h5>Features</h5>
            <ul class="legend-list">
                <li class="legend-item"><div class="front-line-legend"></div><span>Front Line</span></li>
                <li class="legend-item"><div class="patrol-path-legend"></div><span>Patrol Route</span></li>
            </ul>
        </div>
    `;
}



function renderClusterLegend() {
    return `
        <div class="map-mode-legend cluster-legend" style="border-top: 1px dashed var(--border-color); margin-top: 10px; padding-top: 10px;">
            <h4>Clusters</h4>
            <ul class="legend-list">
                <li class="legend-item"><div class="cluster-marker-legend"></div><span>Grouped Locations</span></li>
                <li class="legend-item"><div class="cluster-marker-legend contested"></div><span>Contested</span></li>
            </ul>
            <p class="legend-note">Zoom in to expand</p>
        </div>
    `;
}

// ============================================================================
// LAW/TRADITION POPUPS
// ============================================================================

function renderTraditionItems(traditionKeys) {
    if (!traditionKeys?.length) return '';

    return traditionKeys.map(tradKey => {
        for (const category in LEGAL_DATA.traditions) {
            const tradition = LEGAL_DATA.traditions[category].find(t => t.id === tradKey);
            if (tradition) {
                return `
                    <div class="law-popup-item">
                        <h5>${tradition.icon} ${tradition.name}</h5>
                        <p>${tradition.description}</p>
                    </div>
                `;
            }
        }
        return '';
    }).join('');
}

function renderCodexLaws(lawData) {
    const categories = ['political', 'military', 'economic', 'social', 'penal'];
    const icons = { political: '🏛️', military: '⚔️', economic: '💰', social: '❤️‍🩹', penal: '⚖️' };

    return categories.map(category => {
        if (!lawData[category]?.length) return '';

        return `
            <h4 style="margin-top:15px; border-bottom:1px solid #444;">${icons[category]} ${category.charAt(0).toUpperCase() + category.slice(1)} Laws</h4>
            ${lawData[category].map(law => `
                <div class="law-popup-item" style="margin-bottom:8px;">
                    <h5 style="font-size:0.95rem;">${law.name}</h5>
                    <p style="font-size:0.85rem;">${law.description}</p>
                </div>
            `).join('')}
        `;
    }).join('');
}

export function showLawCodexModal(lawKey) {
    const lawData = ALL_LEGAL_CODES[lawKey];
    if (!lawData) return;

    const content = `<div class="law-popup-content">${renderCodexLaws(lawData)}</div>`;
    map.showMapModal(`Codex: ${lawData.name}`, content);
}

export async function showLibraryPopup(poi) {
    const { LIBRARY_STOCKS } = await import('./books/library_stocks.js');
    const { BOOK_DESCRIPTIONS } = await import('./books/book_descriptions.js');

    const bookKeys = LIBRARY_STOCKS[poi.libraryStockKey] || [];

    const booksHTML = bookKeys.length > 0
        ? bookKeys.map(key => {
            const book = BOOK_DESCRIPTIONS[key];
            return book ? `
                <div class="library-popup-book">
                    <strong>${key}</strong>
                    <p>${book.summary}</p>
                </div>
            ` : '';
        }).join('')
        : '<p class="panel-placeholder">No books catalogued.</p>';

    const summaryHTML = poi.library_summary
        ? `<p class="library-popup-summary">${poi.library_summary}</p>`
        : '';

    map.showMapModal(`Books: ${poi.name}`, `${summaryHTML}<div class="library-popup-list">${booksHTML}</div>`);
}

// Continuing from showTraditionsPopup...

export function showTraditionsPopup(poi) {
    const mapId = map.activeMapId;
    const landmassKey = getLandmassKey(mapId);
    const regionName = MAP_DATA[landmassKey]?.group || MAP_DATA[landmassKey]?.name || MAP_DATA[mapId]?.group || MAP_DATA[mapId]?.name;

    if (!poi) {
        // Regional traditions (no specific POI selected)
        const regionalKeys = LEGAL_DATA.regional_traditions?.[landmassKey] || [];
        const content = `
            <div class="law-popup-content">
                <p>Overarching traditions governing unaligned territories in this region.</p>
                <div class="law-popup-list">${renderTraditionItems(regionalKeys)}</div>
            </div>
        `;
        map.showMapModal(`Traditions of ${regionName}`, content);
        return;
    }

    // POI-specific traditions and laws
    const culture = getCultureForPoi(poi, mapId);
    const factionId = poi.factionId || 'unaligned';
    const factionData = getFactionData(factionId);
    const factionLegalCode = ALL_LEGAL_CODES[factionId];

    // Build faction laws section
    let factionLawsHTML = '';
    if (factionLegalCode) {
        factionLawsHTML = `
            <div class="law-popup-section" style="background: rgba(0,0,0,0.2); padding:10px; border-radius:6px; margin-bottom:15px; border-left: 4px solid ${factionData.color};">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                    ${factionLegalCode.logo ? `<img src="${factionLegalCode.logo}" style="width:32px; height:32px;">` : ''}
                    <h3 style="margin:0; font-size:1.2rem; color:${factionData.color};">Governing Laws: ${factionData.name}</h3>
                </div>
                <p><em>${factionLegalCode.description || ''}</em></p>
                ${renderCodexLaws(factionLegalCode)}
            </div>
        `;
    } else {
        factionLawsHTML = `
            <div class="law-popup-section" style="padding:10px; margin-bottom:15px; border-left: 4px solid var(--text-secondary);">
                <h3 style="margin:0; font-size:1.1rem; color:var(--text-secondary);">Governing Power: ${factionData.name}</h3>
                <p><em>No codified legal system recorded. Rulership is likely informal, based on might, or adheres strictly to local tradition.</em></p>
            </div>
        `;
    }

    // Build cultural traditions section
    const cultureTraditionsHTML = renderTraditionItems(culture.traditions);

    // Build local traditions section (POI-specific)
    let localTraditionsHTML = '';
    if (LEGAL_DATA.poi_traditions?.[poi.id]) {
        const localData = LEGAL_DATA.poi_traditions[poi.id];
        localTraditionsHTML = `
            <div class="law-popup-item" style="border-left: 3px solid #ffcc00; background: rgba(255, 204, 0, 0.1);">
                <h5>📍 Local Custom</h5>
                <p>${localData.summary}</p>
            </div>
            ${renderTraditionItems(localData.traditions)}
        `;
    }

    // Build culture section
    const cultureHTML = `
        <div class="law-popup-section">
            <div class="law-popup-header" style="border-bottom: 2px solid ${culture.color}; padding-bottom: 10px; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <div style="font-size: 1.8rem;">${culture.icon}</div>
                    <div>
                        <h4 style="color:${culture.color}; margin: 0;">Underlying Culture: ${culture.name}</h4>
                        <span style="font-size:0.8rem; color:var(--text-secondary);">Art Style: ${culture.art_style || 'Varied'}</span>
                    </div>
                </div>
                <p style="margin-top:5px;"><em>${culture.description}</em></p>
            </div>
            
            <div class="law-popup-list">
                ${localTraditionsHTML}
                ${cultureTraditionsHTML ? `<h5 style="margin-top:10px;">Cultural Traditions</h5>${cultureTraditionsHTML}` : ''}
            </div>
        </div>
    `;

    const content = `<div class="law-popup-content">${factionLawsHTML}${cultureHTML}</div>`;
    map.showMapModal(`Laws & Customs: ${poi.name}`, content);
}

// ============================================================================
// PUBLIC RENDER HELPERS
// ============================================================================

export function renderPois() {
    const container = document.getElementById('interactive-map-layer');
    if (container) {
        renderPoisLayer(container);
    }
}

export function renderFog() {
    const svgLayer = document.getElementById('map-vector-layer');
    if (svgLayer) {
        svgLayer.innerHTML = '';
        renderFogLayer(svgLayer);
    }
}

export function renderDrawingPreview(points) {
    const drawingSvg = document.getElementById('map-drawing-svg');
    if (!drawingSvg) return;

    drawingSvg.innerHTML = '';

    if (points.length > 1) {
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('points', points.map(p => `${p.x},${p.y}`).join(' '));
        polyline.classList.add('draw-line');
        drawingSvg.appendChild(polyline);
    }

    points.forEach(p => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', p.x);
        circle.setAttribute('cy', p.y);
        circle.setAttribute('r', 1.5);
        circle.classList.add('draw-point');
        drawingSvg.appendChild(circle);
    });
}

// ============================================================================
// ZOOM CHANGE HANDLER
// ============================================================================

export function onZoomChange(newZoom) {
    if (!CLUSTER_CONFIG.enabled || map.isEditMode) return;

    // Re-render POIs when zoom crosses clustering threshold
    const container = document.getElementById('interactive-map-layer');
    if (container) {
        renderPoisLayer(container);
    }
}

// ============================================================================
// FACTION ANALYSIS
// ============================================================================

export function getMapFactionAnalysis() {
    const mapData = MAP_DATA[map.activeMapId];
    if (!mapData?.pointsOfInterest) return null;

    const pois = mapData.pointsOfInterest;
    const factionStats = getRegionFactionStats(pois);

    // Calculate totals
    const totals = {
        poiCount: pois.length,
        totalMilitary: 0,
        totalEconomic: 0,
        totalPolitical: 0,
        totalPopulation: 0
    };

    Object.values(factionStats).forEach(stats => {
        totals.totalMilitary += stats.totalMilitary;
        totals.totalEconomic += stats.totalEconomic;
        totals.totalPolitical += stats.totalPolitical;
        totals.totalPopulation += stats.totalPopulation;
    });

    // Calculate rankings
    const factionRankings = Object.entries(factionStats)
        .map(([factionId, stats]) => {
            const factionData = getFactionData(factionId);
            const powerScore = stats.totalMilitary + stats.totalEconomic + (stats.poiCount * 5);
            const controlPercent = (stats.poiCount / totals.poiCount) * 100;

            return {
                factionId,
                factionData,
                stats,
                powerScore,
                controlPercent,
                militaryPercent: totals.totalMilitary > 0 ? (stats.totalMilitary / totals.totalMilitary) * 100 : 0,
                economicPercent: totals.totalEconomic > 0 ? (stats.totalEconomic / totals.totalEconomic) * 100 : 0
            };
        })
        .sort((a, b) => b.powerScore - a.powerScore);

    return {
        mapId: map.activeMapId,
        mapName: mapData.name,
        totals,
        factionRankings,
        dominantFaction: factionRankings[0] || null,
        isContested: factionRankings.length > 1 && factionRankings[0]?.controlPercent < 60
    };
}

export function renderFactionAnalysisPanel() {
    if (!detailPanel) initDOMReferences();

    const analysis = getMapFactionAnalysis();
    if (!analysis) {
        detailPanel.innerHTML = '<p class="panel-placeholder">No data available for analysis.</p>';
        return;
    }

    const dominantFaction = analysis.dominantFaction;
    const contestedClass = analysis.isContested ? 'contested' : '';

    const factionListHTML = analysis.factionRankings.map((faction, index) => {
        const rankIcon = index === 0 ? '👑' : (index === 1 ? '🥈' : (index === 2 ? '🥉' : `#${index + 1}`));

        return `
            <div class="faction-analysis-row" style="border-left: 4px solid ${faction.factionData.color}">
                <div class="faction-rank">${rankIcon}</div>
                <div class="faction-info">
                    ${faction.factionData.logo ? `<img src="${faction.factionData.logo}" class="faction-mini-logo">` : ''}
                    <span class="faction-name">${faction.factionData.name}</span>
                </div>
                <div class="faction-metrics">
                    <div class="metric">
                        <span class="metric-value">${faction.stats.poiCount}</span>
                        <span class="metric-label">POIs</span>
                    </div>
                    <div class="metric">
                        <span class="metric-value">${faction.controlPercent.toFixed(1)}%</span>
                        <span class="metric-label">Control</span>
                    </div>
                    <div class="metric">
                        <span class="metric-value">⚔️${faction.stats.totalMilitary}</span>
                        <span class="metric-label">Military</span>
                    </div>
                    <div class="metric">
                        <span class="metric-value">💰${faction.stats.totalEconomic}</span>
                        <span class="metric-label">Economic</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    detailPanel.innerHTML = `
        <div class="faction-analysis-panel">
            <div class="analysis-header ${contestedClass}">
                <h3>${analysis.mapName}</h3>
                <p class="analysis-subtitle">
                    ${analysis.isContested
                        ? '⚔️ Contested Region - Multiple factions vying for control'
                        : `Dominated by ${dominantFaction?.factionData.name || 'Unknown'}`}
                </p>
            </div>

            <div class="analysis-summary">
                <div class="summary-stat">
                    <span class="stat-value">${analysis.totals.poiCount}</span>
                    <span class="stat-label">Total Locations</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${analysis.factionRankings.length}</span>
                    <span class="stat-label">Active Factions</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${analysis.totals.totalPopulation.toLocaleString()}</span>
                    <span class="stat-label">Total Population</span>
                </div>
            </div>

            <h4>Faction Control Rankings</h4>
            <div class="faction-analysis-list">
                ${factionListHTML}
            </div>

            <div class="analysis-actions">
                <button class="control-btn" onclick="renderer.exportFactionData()">Export Data</button>
            </div>
        </div>
    `;
}
export function exportFactionData() {
    const analysis = getMapFactionAnalysis();
    if (!analysis) return;

    const dataStr = JSON.stringify(analysis, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `faction-analysis-${map.activeMapId}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ============================================================================
// CLUSTER CONFIG MANAGEMENT
// ============================================================================

export function setClusterEnabled(enabled) {
    CLUSTER_CONFIG.enabled = enabled;
    renderPois();
}

export function getClusterConfig() {
    return { ...CLUSTER_CONFIG };
}

export function updateClusterConfig(updates) {
    Object.assign(CLUSTER_CONFIG, updates);
    renderPois();
}

// ============================================================================
// INITIALIZATION
// ============================================================================

export function initMapRenderer() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initDOMReferences();
        });
    } else {
        initDOMReferences();
    }

    // Listen for window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (map.activeMapId) {
                renderMap(map.activeMapId);
            }
        }, 250);
    });
}

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMapRenderer);
} else {
    initMapRenderer();
}

