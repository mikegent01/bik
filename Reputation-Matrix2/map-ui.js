
import { playSound } from './common.js';
import { MAP_DATA, BUILDING_TYPES } from './map-data.js';
import * as map from './maps.js';
import * as renderer from './map-renderer.js';
import {getFactionData } from './map-renderer.js';
import { toggleEditMode } from './map-editor.js';
import { resetTransform } from './map-transform.js';
import * as transform from './map-transform.js';
import { PROVINCE_POLITICS } from './politics-data.js';

const mapControls = document.getElementById('dynamic-map-controls');
// ============================================================================
// map-ui.js - FULL renderTabs function
// ============================================================================
export function renderTabs() {
    if (!mapControls) return;
    mapControls.innerHTML = '';

    // Add search bar
    const searchContainer = document.createElement('div');
    searchContainer.id = 'poi-search-container';
    searchContainer.innerHTML = `
        <input type="text" id="poi-search-input" placeholder="Search for a location..." autocomplete="off">
        <div id="poi-search-suggestions" style="display: none;"></div>
    `;
    mapControls.appendChild(searchContainer);

    const currentPage = window.location.pathname.split('/').pop();
    const currentMapData = MAP_DATA[map.activeMapId];
    const urlParams = new URLSearchParams(window.location.search);
    const isUnifiedMapApplet = currentPage === 'maps-view.html' && (urlParams.get('map') || currentMapData?.group);
    
    let relevantGroups;

    if (isUnifiedMapApplet && currentMapData?.group) {
        relevantGroups = [currentMapData.group];
    } else if (currentPage === 'midlands-maps.html') {
        relevantGroups = ['The Midlands'];
    } else if (currentPage === 'internet-maps.html') {
        relevantGroups = ['The Internet'];
    } else if (currentPage === 'middle-earth-maps.html') {
        relevantGroups = ['Middle-earth'];
    } else if (currentPage === 'kivotos-maps.html') {
        relevantGroups = ['Kivotos'];
    } else if (currentPage === 'warhammer-maps.html') {
        relevantGroups = ['The Fated Place'];
    } else if (currentPage === 'doughnut-hole-maps.html') {
        relevantGroups = ['The Doughnut Hole'];
    } else if (currentPage === 'pokemon-maps.html') {
        relevantGroups = ['Pokémon Regions'];
    } else if (currentPage === 'animatopia-maps.html') {
        relevantGroups = ['Animatopia'];
    } else if (currentPage === 'almost-edge-maps.html') {
        relevantGroups = ['The Edge Regions'];
    } else if (currentPage === 'the-edge-maps.html') {
        relevantGroups = ['The Edge Regions'];
    } else if (currentPage === 'connectopia-maps.html') {
        relevantGroups = ['Connectopia'];
    } else if (currentPage === 'earth-land-maps.html') {
        relevantGroups = [
            'Earth Land',
            'Earth Continents',
            'Divine Kingdoms',
            'Lost Continents & Myths',
            'Norse Realms',
            'Outer Realms',
            'Oceanic & Islands'
        ];
    } else if (currentPage === 'faerun-maps.html') {
        relevantGroups = ['Faerûn'];
    } else if (currentPage === 'leclaire-isle-maps.html') {
        relevantGroups = ['L\'Eclaire Isle'];
    } else if (currentPage === 'teyvat-maps.html') {
        relevantGroups = ['Teyvat'];
    } else if (currentPage === 'equestria-maps.html') {
        relevantGroups = ['Equestria'];
    } else if (currentPage === 'grand-country-maps.html') {
        relevantGroups = ['The Grand Country'];
    } else {
        relevantGroups = ['Mushroom Kingdom Regions', 'Islands & Outer Realms'];
    }

    const groupedMaps = Object.values(MAP_DATA).reduce((acc, mapItem) => {
        const group = mapItem.group || 'Other Regions';
        if (!acc[group]) acc[group] = [];
        acc[group].push(mapItem);
        return acc;
    }, {});

    relevantGroups.forEach(groupName => {
        if (!groupedMaps[groupName]) return;

        const groupHeader = document.createElement('h4');
        groupHeader.className = 'map-group-header';
        groupHeader.textContent = groupName;
        mapControls.appendChild(groupHeader);
        
        const tabsDiv = document.createElement('div');
        tabsDiv.className = 'map-tabs';
        
        const mapsInGroup = groupedMaps[groupName].sort((a, b) => (a.order || 99) - (b.order || 99));

        tabsDiv.innerHTML = mapsInGroup.map(m => {
            return `<button class="map-tab-btn ${m.id === map.activeMapId ? 'active' : ''}" data-map-id="${m.id}">${m.name}</button>`;
        }).join('');
        
        mapControls.appendChild(tabsDiv);
    });
    
    // Mode Selector
    const modeSelector = document.createElement('div');
    modeSelector.id = 'map-mode-selector';
    
    modeSelector.innerHTML = `
        <span>Mode:</span>
        <button class="mode-btn ${map.activeMapMode === 'standard' ? 'active' : ''}" data-mode="standard">Standard</button>
        <button class="mode-btn ${map.activeMapMode === 'political' ? 'active' : ''}" data-mode="political">Political</button>
        <button class="mode-btn ${map.activeMapMode === 'economic' ? 'active' : ''}" data-mode="economic">Economic</button>
        <button class="mode-btn ${map.activeMapMode === 'military' ? 'active' : ''}" data-mode="military">Military</button>
        <button class="mode-btn ${map.activeMapMode === 'tactical' ? 'active' : ''}" data-mode="tactical">Tactical</button>
        <button class="mode-btn ${map.activeMapMode === 'population' ? 'active' : ''}" data-mode="population">Population</button>
        <button class="mode-btn ${map.activeMapMode === 'laws' ? 'active' : ''}" data-mode="laws">Laws & Traditions</button>
        <button class="mode-btn ${map.activeMapMode === 'age_of_antiquity' ? 'active' : ''}" data-mode="age_of_antiquity">Age of Antiquity</button>
        <button class="mode-btn ${map.activeMapMode === 'crime_rate' ? 'active' : ''}" data-mode="crime_rate">Crime Rate</button>
    `;
    mapControls.appendChild(modeSelector);
const subModeSelector = document.createElement('div');
subModeSelector.id = 'political-submode-selector';
subModeSelector.style.display = map.activeMapMode === 'political' ? 'flex' : 'none';
subModeSelector.innerHTML = `
    <span>View:</span>
    <button class="mode-btn ${map.activePoliticalSubmode === 'poi' ? 'active' : ''}" data-submode="poi">POIs</button>
    <button class="mode-btn ${map.activePoliticalSubmode === 'state' ? 'active' : ''}" data-submode="state">States</button>
    <button class="mode-btn ${map.activePoliticalSubmode === 'province' ? 'active' : ''}" data-submode="province">Provinces</button>
    <button class="mode-btn ${map.activePoliticalSubmode === 'region' ? 'active' : ''}" data-submode="region">Regions</button>
`;
mapControls.appendChild(subModeSelector);
    // Party Marker Toggle

    setupSearchListeners();
}

const SEARCH_CONFIG = {
    minQueryLength: 2,
    maxSuggestions: 12,
    debounceMs: 150,
    categories: {
        poi: { icon: '📍', label: 'Location', priority: 1 },
        faction: { icon: '🏴', label: 'Faction', priority: 2 },
        building: { icon: '🏛️', label: 'Building Type', priority: 3 },
        province: { icon: '🗺️', label: 'Province', priority: 4 },
        character: { icon: '👤', label: 'Character', priority: 5 },
    }
};

let searchDebounceTimer = null;

// ============================================================================
// SEARCH DATA COLLECTORS
// ============================================================================

function getSearchablePois() {
    const currentMapData = MAP_DATA[map.activeMapId];
    if (!currentMapData?.pointsOfInterest) return [];

    return currentMapData.pointsOfInterest.map(poi => ({
        type: 'poi',
        id: poi.id,
        name: poi.name,
        subtext: BUILDING_TYPES[poi.type]?.name || 'Location',
        icon: BUILDING_TYPES[poi.type]?.icon || '📍',
        factionId: poi.factionId,
        buildingType: poi.type,
        data: poi
    }));
}

function getSearchableFactions() {
    const currentMapData = MAP_DATA[map.activeMapId];
    if (!currentMapData?.pointsOfInterest) return [];

    // Get unique factions from current map
    const factionIds = new Set();
    currentMapData.pointsOfInterest.forEach(poi => {
        if (poi.factionId && poi.factionId !== 'unaligned') {
            factionIds.add(poi.factionId);
        }
    });

    return [...factionIds].map(factionId => {
        const factionData = getFactionData(factionId);
        const poiCount = currentMapData.pointsOfInterest.filter(p => p.factionId === factionId).length;
        
        return {
            type: 'faction',
            id: factionId,
            name: factionData.name,
            subtext: `${poiCount} location${poiCount !== 1 ? 's' : ''} on this map`,
            icon: factionData.icon || '🏴',
            color: factionData.color,
            logo: factionData.logo,
            poiCount,
            data: factionData
        };
    });
}

function getSearchableBuildingTypes() {
    const currentMapData = MAP_DATA[map.activeMapId];
    if (!currentMapData?.pointsOfInterest) return [];

    // Get unique building types from current map
    const typeCount = {};
    currentMapData.pointsOfInterest.forEach(poi => {
        const type = poi.type || 'unknown';
        typeCount[type] = (typeCount[type] || 0) + 1;
    });

    return Object.entries(typeCount).map(([typeId, count]) => {
        const typeInfo = BUILDING_TYPES[typeId] || { name: typeId, icon: '📍' };
        
        return {
            type: 'building',
            id: typeId,
            name: typeInfo.name,
            subtext: `${count} on this map`,
            icon: typeInfo.icon || '🏛️',
            count,
            data: typeInfo
        };
    });
}

function getSearchableProvinces() {
    const allPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    if (allPois.length === 0) return [];

    // Generate provinces (reuse the generation logic)
    const provinceData = PROVINCE_POLITICS?.[map.activeMapId] || null;
    let provinces = [];

    if (provinceData) {
        provinces = Object.entries(provinceData).map(([id, province]) => ({
            id,
            ...province,
            isDefined: true
        }));
    }

    // Add generated provinces
    const generatedProvinces = generateProvincesFromPois(allPois, provinceData);
    
    return generatedProvinces.map(province => {
        const control = calculateProvinceControl(province, allPois);
        const dominant = getDominantFactionFromControl(control);
        const factionData = getFactionData(dominant.factionId);
        const poiCount = countPoisInProvince(province, allPois);

        return {
            type: 'province',
            id: province.id,
            name: province.name,
            subtext: `${factionData.name} (${dominant.percentage}%) • ${poiCount} locations`,
            icon: '🗺️',
            factionId: dominant.factionId,
            color: factionData.color,
            poiCount,
            data: { ...province, control }
        };
    }).filter(p => {
        // Filter out unaligned-dominant provinces
        const dominant = getDominantFactionFromControl(p.data.control);
        return dominant.factionId !== 'unaligned';
    });
}

function getSearchableCharacters() {
    const compatibleIds = getCompatibleMapIds(map.activeMapId);
    const characters = [];

    compatibleIds.forEach(mapId => {
        if (PARTY_LOCATIONS[mapId]) {
            PARTY_LOCATIONS[mapId].forEach(member => {
                const charData = getPartyCharacterData(member.charKey);
                characters.push({
                    type: 'character',
                    id: member.charKey,
                    name: charData.name,
                    subtext: `${charData.role || 'Party Member'} • ${member.status}`,
                    icon: '👤',
                    portrait: charData.portrait,
                    status: member.status,
                    x: member.x,
                    y: member.y,
                    data: { ...charData, ...member }
                });
            });
        }
    });

    return characters;
}

// ============================================================================
// SEARCH MATCHING
// ============================================================================

function fuzzyMatch(query, text) {
    if (!text) return { match: false, score: 0 };
    
    const queryLower = query.toLowerCase();
    const textLower = text.toLowerCase();

    // Exact match
    if (textLower === queryLower) {
        return { match: true, score: 100 };
    }

    // Starts with
    if (textLower.startsWith(queryLower)) {
        return { match: true, score: 90 };
    }

    // Contains
    if (textLower.includes(queryLower)) {
        const index = textLower.indexOf(queryLower);
        const score = 70 - (index * 0.5); // Earlier matches score higher
        return { match: true, score: Math.max(50, score) };
    }

    // Word starts with
    const words = textLower.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(queryLower)) {
            return { match: true, score: 60 - (i * 5) };
        }
    }

    // Fuzzy matching (allows for typos)
    if (queryLower.length >= 3) {
        const distance = levenshteinDistance(queryLower, textLower.substring(0, queryLower.length + 2));
        if (distance <= Math.floor(queryLower.length / 3)) {
            return { match: true, score: 40 - (distance * 10) };
        }
    }

    return { match: false, score: 0 };
}

function levenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

function searchAll(query) {
    if (!query || query.length < SEARCH_CONFIG.minQueryLength) {
        return [];
    }

    const results = [];
    const queryLower = query.toLowerCase();

    // Special prefix searches
    const prefixSearches = {
        'faction:': () => getSearchableFactions(),
        'f:': () => getSearchableFactions(),
        'type:': () => getSearchableBuildingTypes(),
        't:': () => getSearchableBuildingTypes(),
        'building:': () => getSearchableBuildingTypes(),
        'b:': () => getSearchableBuildingTypes(),
        'province:': () => getSearchableProvinces(),
        'p:': () => getSearchableProvinces(),
        'region:': () => getSearchableProvinces(),
        'r:': () => getSearchableProvinces(),
        'character:': () => getSearchableCharacters(),
        'char:': () => getSearchableCharacters(),
        'c:': () => getSearchableCharacters(),
        'party:': () => getSearchableCharacters(),
        'location:': () => getSearchablePois(),
        'loc:': () => getSearchablePois(),
        'l:': () => getSearchablePois(),
    };

    let searchQuery = query;
    let searchItems = null;

    // Check for prefix
    for (const [prefix, getItems] of Object.entries(prefixSearches)) {
        if (queryLower.startsWith(prefix)) {
            searchQuery = query.substring(prefix.length).trim();
            searchItems = getItems();
            break;
        }
    }

    // If no prefix, search everything
    if (searchItems === null) {
        searchItems = [
            ...getSearchablePois(),
            ...getSearchableFactions(),
            ...getSearchableBuildingTypes(),
            ...getSearchableProvinces(),
            ...getSearchableCharacters()
        ];
    }

    // If query is empty after prefix, show all of that type
    if (searchQuery.length < SEARCH_CONFIG.minQueryLength) {
        return searchItems
            .sort((a, b) => {
                // Sort by type priority, then by name
                const priorityA = SEARCH_CONFIG.categories[a.type]?.priority || 99;
                const priorityB = SEARCH_CONFIG.categories[b.type]?.priority || 99;
                if (priorityA !== priorityB) return priorityA - priorityB;
                return a.name.localeCompare(b.name);
            })
            .slice(0, SEARCH_CONFIG.maxSuggestions);
    }

    // Perform matching
    searchItems.forEach(item => {
        // Match against name
        const nameMatch = fuzzyMatch(searchQuery, item.name);
        
        // Match against subtext
        const subtextMatch = fuzzyMatch(searchQuery, item.subtext);
        
        // Match against faction name (for POIs)
        let factionMatch = { match: false, score: 0 };
        if (item.factionId) {
            const factionData = getFactionData(item.factionId);
            factionMatch = fuzzyMatch(searchQuery, factionData.name);
        }

        // Match against building type (for POIs)
        let buildingMatch = { match: false, score: 0 };
        if (item.buildingType) {
            const typeInfo = BUILDING_TYPES[item.buildingType];
            if (typeInfo) {
                buildingMatch = fuzzyMatch(searchQuery, typeInfo.name);
            }
        }

        const bestScore = Math.max(
            nameMatch.score,
            subtextMatch.score * 0.7,
            factionMatch.score * 0.8,
            buildingMatch.score * 0.8
        );

        if (nameMatch.match || subtextMatch.match || factionMatch.match || buildingMatch.match) {
            results.push({
                ...item,
                score: bestScore,
                matchType: nameMatch.match ? 'name' : 
                          factionMatch.match ? 'faction' :
                          buildingMatch.match ? 'building' : 'subtext'
            });
        }
    });

    // Sort by score, then by type priority
    results.sort((a, b) => {
        if (Math.abs(a.score - b.score) > 5) {
            return b.score - a.score;
        }
        const priorityA = SEARCH_CONFIG.categories[a.type]?.priority || 99;
        const priorityB = SEARCH_CONFIG.categories[b.type]?.priority || 99;
        if (priorityA !== priorityB) return priorityA - priorityB;
        return a.name.localeCompare(b.name);
    });

    return results.slice(0, SEARCH_CONFIG.maxSuggestions);
}

// ============================================================================
// SEARCH RESULT ACTIONS
// ============================================================================

function handleSearchResultClick(result) {
    switch (result.type) {
        case 'poi':
            handlePoiSearchResult(result);
            break;
        case 'faction':
            handleFactionSearchResult(result);
            break;
        case 'building':
            handleBuildingSearchResult(result);
            break;
        case 'province':
            handleProvinceSearchResult(result);
            break;
        case 'character':
            handleCharacterSearchResult(result);
            break;
    }
}

function handlePoiSearchResult(result) {
    const poi = result.data;
    
    // Pan and zoom to POI
    transform.panAndZoomToPoi(poi);
    
    // Show detail panel
    showDetailPanel(poi.id);
    
    // Highlight marker
    highlightPoiMarker(poi.id);
}

function handleFactionSearchResult(result) {
    const factionId = result.id;
    const currentMapData = MAP_DATA[map.activeMapId];
    
    // Get all POIs belonging to this faction
    const factionPois = currentMapData.pointsOfInterest.filter(p => p.factionId === factionId);
    
    if (factionPois.length === 0) return;

    // Calculate center of faction's territory
    const centerX = factionPois.reduce((sum, p) => sum + p.x, 0) / factionPois.length;
    const centerY = factionPois.reduce((sum, p) => sum + p.y, 0) / factionPois.length;

    // Pan to center
    transform.panAndZoomToPoi({ x: centerX, y: centerY }, 2);

    // Highlight all faction POIs
    highlightFactionPois(factionId);

    // Show faction summary in detail panel
    renderFactionSearchDetail(result);
}

function handleBuildingSearchResult(result) {
    const buildingType = result.id;
    const currentMapData = MAP_DATA[map.activeMapId];
    
    // Get all POIs of this type
    const typePois = currentMapData.pointsOfInterest.filter(p => p.type === buildingType);
    
    if (typePois.length === 0) return;

    // Calculate center
    const centerX = typePois.reduce((sum, p) => sum + p.x, 0) / typePois.length;
    const centerY = typePois.reduce((sum, p) => sum + p.y, 0) / typePois.length;

    // Pan to center with moderate zoom
    transform.panAndZoomToPoi({ x: centerX, y: centerY }, 1.5);

    // Highlight all POIs of this type
    highlightBuildingTypePois(buildingType);

    // Show building type summary
    renderBuildingTypeSearchDetail(result);
}

function handleProvinceSearchResult(result) {
    const province = result.data;

    // Switch to political mode with province view
    map.setActiveMapMode('political');
    map.setActivePoliticalSubmode('province');

    // Update UI
    document.querySelectorAll('#map-mode-selector .mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === 'political');
    });

    const subModeSelector = document.getElementById('political-submode-selector');
    if (subModeSelector) {
        subModeSelector.style.display = 'flex';
        subModeSelector.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.submode === 'province');
        });
    }

    // Re-render POIs (provinces)
    renderPois();

    // Pan to province
    transform.panAndZoomToPoi({ x: province.x, y: province.y }, 3);

    // Show province detail
    renderProvinceDetailPanel(province);

    // Highlight province marker
    setTimeout(() => {
        highlightProvinceMarker(province.id);
    }, 300);
}

function handleCharacterSearchResult(result) {
    const charData = result.data;

    // Pan to character location
    transform.panAndZoomToPoi({ x: charData.x, y: charData.y }, 4);

    // Show character detail
    renderPartyMemberDetail(charData.charKey, charData.status);

    // Highlight character marker
    setTimeout(() => {
        highlightCharacterMarker(charData.charKey);
    }, 300);
}

// ============================================================================
// HIGHLIGHT FUNCTIONS
// ============================================================================

function clearAllHighlights() {
    document.querySelectorAll('.poi-marker.searched, .poi-marker.faction-highlight, .poi-marker.type-highlight').forEach(m => {
        m.classList.remove('searched', 'faction-highlight', 'type-highlight');
    });
    document.querySelectorAll('.province-marker.searched').forEach(m => {
        m.classList.remove('searched');
    });
    document.querySelectorAll('.party-marker.searched').forEach(m => {
        m.classList.remove('searched');
    });
}

function highlightPoiMarker(poiId) {
    clearAllHighlights();
    
    setTimeout(() => {
        const marker = document.querySelector(`.poi-marker[data-poi-id="${poiId}"]`);
        if (marker) {
            marker.classList.add('searched');
            setTimeout(() => marker.classList.remove('searched'), 4500);
        }
    }, 300);
}

function highlightFactionPois(factionId) {
    clearAllHighlights();
    
    setTimeout(() => {
        const currentMapData = MAP_DATA[map.activeMapId];
        const factionPois = currentMapData.pointsOfInterest.filter(p => p.factionId === factionId);
        
        factionPois.forEach(poi => {
            const marker = document.querySelector(`.poi-marker[data-poi-id="${poi.id}"]`);
            if (marker) {
                marker.classList.add('faction-highlight');
            }
        });

        // Remove highlights after delay
        setTimeout(() => {
            document.querySelectorAll('.poi-marker.faction-highlight').forEach(m => {
                m.classList.remove('faction-highlight');
            });
        }, 5000);
    }, 300);
}

function highlightBuildingTypePois(buildingType) {
    clearAllHighlights();
    
    setTimeout(() => {
        const currentMapData = MAP_DATA[map.activeMapId];
        const typePois = currentMapData.pointsOfInterest.filter(p => p.type === buildingType);
        
        typePois.forEach(poi => {
            const marker = document.querySelector(`.poi-marker[data-poi-id="${poi.id}"]`);
            if (marker) {
                marker.classList.add('type-highlight');
            }
        });

        setTimeout(() => {
            document.querySelectorAll('.poi-marker.type-highlight').forEach(m => {
                m.classList.remove('type-highlight');
            });
        }, 5000);
    }, 300);
}

function highlightProvinceMarker(provinceId) {
    clearAllHighlights();
    
    const marker = document.querySelector(`.province-marker[data-province-id="${provinceId}"]`);
    if (marker) {
        marker.classList.add('searched');
        setTimeout(() => marker.classList.remove('searched'), 4500);
    }
}

function highlightCharacterMarker(charKey) {
    clearAllHighlights();
    
    const marker = document.querySelector(`.party-marker[data-char-key="${charKey}"]`);
    if (marker) {
        marker.classList.add('searched');
        setTimeout(() => marker.classList.remove('searched'), 4500);
    }
}

// ============================================================================
// SEARCH DETAIL RENDERERS
// ============================================================================

function renderFactionSearchDetail(result) {
    if (!detailPanel) initDOMReferences();

    const factionData = result.data;
    const currentMapData = MAP_DATA[map.activeMapId];
    const factionPois = currentMapData.pointsOfInterest.filter(p => p.factionId === result.id);

    // Calculate stats
    const totalPop = factionPois.reduce((sum, p) => sum + (p.population || 0), 0);
    const totalMilitary = factionPois.reduce((sum, p) => sum + (p.military_strength || 0), 0);
    const totalEconomic = factionPois.reduce((sum, p) => sum + (p.economic_value || 0), 0);

    // Group by building type
    const typeBreakdown = {};
    factionPois.forEach(poi => {
        const type = poi.type || 'unknown';
        typeBreakdown[type] = (typeBreakdown[type] || 0) + 1;
    });

    const typeBreakdownHTML = Object.entries(typeBreakdown)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([typeId, count]) => {
            const typeInfo = BUILDING_TYPES[typeId] || { name: typeId, icon: '📍' };
            return `<span class="type-badge">${typeInfo.icon} ${typeInfo.name}: ${count}</span>`;
        }).join('');

    detailPanel.innerHTML = `
        <div class="poi-detail faction-search-detail">
            <div class="faction-search-header" style="border-left: 4px solid ${factionData.color};">
                ${factionData.logo ? `<img src="${factionData.logo}" class="faction-search-logo">` : ''}
                <div>
                    <h3 style="color: ${factionData.color}">${factionData.name}</h3>
                    <p class="faction-search-subtitle">${factionPois.length} locations on this map</p>
                </div>
            </div>

            ${factionData.description ? `<p class="faction-description">${factionData.description}</p>` : ''}

            <div class="province-stats" style="margin-top: 12px;">
                <div class="stat-item">
                    <span class="stat-icon">📍</span>
                    <span class="stat-value">${factionPois.length}</span>
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

            <div class="type-breakdown">
                <h4>Location Types</h4>
                <div class="type-badges">${typeBreakdownHTML}</div>
            </div>

            <h4>Key Locations</h4>
            <div class="province-poi-list">
                ${factionPois.slice(0, 6).map(poi => {
                    const typeInfo = BUILDING_TYPES[poi.type] || { icon: '📍' };
                    return `
                        <div class="province-poi-item" data-poi-id="${poi.id}" style="border-left-color: ${factionData.color}">
                            <span class="poi-icon">${typeInfo.icon}</span>
                            <span class="poi-name">${poi.name}</span>
                        </div>
                    `;
                }).join('')}
                ${factionPois.length > 6 ? `<p class="more-locations">+${factionPois.length - 6} more locations</p>` : ''}
            </div>
        </div>
    `;

    // Add click handlers
    detailPanel.querySelectorAll('.province-poi-item').forEach(item => {
        item.addEventListener('click', () => {
            playSound('click.mp3');
            const poiId = item.dataset.poiId;
            const poi = factionPois.find(p => p.id === poiId);
            if (poi) {
                transform.panAndZoomToPoi(poi);
                showDetailPanel(poiId);
                highlightPoiMarker(poiId);
            }
        });
    });
}

function renderBuildingTypeSearchDetail(result) {
    if (!detailPanel) initDOMReferences();

    const typeInfo = result.data;
    const currentMapData = MAP_DATA[map.activeMapId];
    const typePois = currentMapData.pointsOfInterest.filter(p => p.type === result.id);

    // Group by faction
    const factionBreakdown = {};
    typePois.forEach(poi => {
        const fid = poi.factionId || 'unaligned';
        factionBreakdown[fid] = (factionBreakdown[fid] || 0) + 1;
    });

    const factionBreakdownHTML = Object.entries(factionBreakdown)
        .sort(([, a], [, b]) => b - a)
        .map(([factionId, count]) => {
            const factionData = getFactionData(factionId);
            return `
                <div class="faction-breakdown-mini" style="border-left: 3px solid ${factionData.color};">
                    <span style="color: ${factionData.color}">${factionData.name}</span>
                    <span class="count">${count}</span>
                </div>
            `;
        }).join('');

    detailPanel.innerHTML = `
        <div class="poi-detail building-search-detail">
            <div class="building-search-header">
                <span class="building-icon">${typeInfo.icon || '🏛️'}</span>
                <div>
                    <h3>${typeInfo.name}</h3>
                    <p class="building-search-subtitle">${typePois.length} on this map</p>
                </div>
            </div>

            <h4>Faction Control</h4>
            <div class="faction-breakdown-list">
                ${factionBreakdownHTML}
            </div>

            <h4>All ${typeInfo.name}s</h4>
            <div class="province-poi-list" style="max-height: 300px;">
                ${typePois.map(poi => {
                    const factionData = getFactionData(poi.factionId);
                    return `
                        <div class="province-poi-item" data-poi-id="${poi.id}" style="border-left-color: ${factionData.color}">
                            <span class="poi-icon">${typeInfo.icon}</span>
                            <span class="poi-name">${poi.name}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    // Add click handlers
    detailPanel.querySelectorAll('.province-poi-item').forEach(item => {
        item.addEventListener('click', () => {
            playSound('click.mp3');
            const poiId = item.dataset.poiId;
            const poi = typePois.find(p => p.id === poiId);
            if (poi) {
                transform.panAndZoomToPoi(poi);
                showDetailPanel(poiId);
                highlightPoiMarker(poiId);
            }
        });
    });
}

// ============================================================================
// SEARCH UI RENDERING
// ============================================================================

function renderSearchSuggestion(result) {
    const categoryInfo = SEARCH_CONFIG.categories[result.type] || { icon: '📍', label: 'Item' };
    
    let iconHTML = `<span class="suggestion-icon">${result.icon || categoryInfo.icon}</span>`;
    
    // Special handling for factions with logos
    if (result.type === 'faction' && result.logo) {
        iconHTML = `<img src="${result.logo}" class="suggestion-logo" alt="">`;
    }
    
    // Special handling for characters with portraits
    if (result.type === 'character' && result.portrait) {
        iconHTML = `<img src="${result.portrait}" class="suggestion-portrait" alt="">`;
    }

    const colorStyle = result.color ? `border-left: 3px solid ${result.color};` : '';

    return `
        <div class="suggestion-item" data-result-type="${result.type}" data-result-id="${result.id}" style="${colorStyle}">
            <div class="suggestion-main">
                ${iconHTML}
                <div class="suggestion-text">
                    <span class="suggestion-name">${result.name}</span>
                    <span class="suggestion-subtext">${result.subtext}</span>
                </div>
            </div>
            <span class="suggestion-category">${categoryInfo.label}</span>
        </div>
    `;
}

function renderSearchHints() {
    return `
        <div class="search-hints">
            <p class="search-hint-title">Search Tips:</p>
            <div class="search-hint-list">
                <span class="search-hint"><code>faction:</code> or <code>f:</code> - Search factions</span>
                <span class="search-hint"><code>type:</code> or <code>t:</code> - Search building types</span>
                <span class="search-hint"><code>province:</code> or <code>p:</code> - Search provinces</span>
                <span class="search-hint"><code>char:</code> or <code>c:</code> - Search characters</span>
            </div>
        </div>
    `;
}

function setupSearchListeners() {
    const searchInput = document.getElementById('poi-search-input');
    const suggestionsContainer = document.getElementById('poi-search-suggestions');

    if (!searchInput || !suggestionsContainer) return;

    // Input handler with debounce
    searchInput.addEventListener('input', () => {
        clearTimeout(searchDebounceTimer);
        
        searchDebounceTimer = setTimeout(() => {
            const query = searchInput.value.trim();
            
            if (query.length === 0) {
                suggestionsContainer.innerHTML = renderSearchHints();
                suggestionsContainer.style.display = 'block';
                return;
            }

            if (query.length < SEARCH_CONFIG.minQueryLength && !query.includes(':')) {
                suggestionsContainer.innerHTML = renderSearchHints();
                suggestionsContainer.style.display = 'block';
                return;
            }

            const results = searchAll(query);

            if (results.length > 0) {
                // Group results by type
                const grouped = {};
                results.forEach(result => {
                    if (!grouped[result.type]) grouped[result.type] = [];
                    grouped[result.type].push(result);
                });

                let html = '';
                
                // Render in order of priority
                const typeOrder = ['poi', 'faction', 'building', 'province', 'character'];
                typeOrder.forEach(type => {
                    if (grouped[type] && grouped[type].length > 0) {
                        const categoryInfo = SEARCH_CONFIG.categories[type];
                        html += `<div class="suggestion-group-header">${categoryInfo.icon} ${categoryInfo.label}s</div>`;
                        grouped[type].forEach(result => {
                            html += renderSearchSuggestion(result);
                        });
                    }
                });

                suggestionsContainer.innerHTML = html;
                suggestionsContainer.style.display = 'block';
            } else {
                suggestionsContainer.innerHTML = `
                    <div class="no-results">
                        <p>No results found for "${query}"</p>
                        ${renderSearchHints()}
                    </div>
                `;
                suggestionsContainer.style.display = 'block';
            }
        }, SEARCH_CONFIG.debounceMs);
    });

    // Focus handler - show hints
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length === 0) {
            suggestionsContainer.innerHTML = renderSearchHints();
            suggestionsContainer.style.display = 'block';
        }
    });

    // Click handler for suggestions
    suggestionsContainer.addEventListener('click', e => {
        const suggestionItem = e.target.closest('.suggestion-item');
        if (!suggestionItem) return;

        const resultType = suggestionItem.dataset.resultType;
        const resultId = suggestionItem.dataset.resultId;

        // Find the result
        const results = searchAll(searchInput.value.trim());
        const result = results.find(r => r.type === resultType && r.id === resultId);

        if (result) {
            playSound('click.mp3');
            handleSearchResultClick(result);

            // Clear search
            searchInput.value = '';
            suggestionsContainer.innerHTML = '';
            suggestionsContainer.style.display = 'none';
        }
    });

    // Keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        const suggestions = suggestionsContainer.querySelectorAll('.suggestion-item');
        const activeSuggestion = suggestionsContainer.querySelector('.suggestion-item.active');
        let activeIndex = -1;

        suggestions.forEach((s, i) => {
            if (s.classList.contains('active')) activeIndex = i;
        });

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (activeIndex < suggestions.length - 1) {
                    if (activeSuggestion) activeSuggestion.classList.remove('active');
                    suggestions[activeIndex + 1].classList.add('active');
                    suggestions[activeIndex + 1].scrollIntoView({ block: 'nearest' });
                }
                break;

            case 'ArrowUp':
                e.preventDefault();
                if (activeIndex > 0) {
                    if (activeSuggestion) activeSuggestion.classList.remove('active');
                    suggestions[activeIndex - 1].classList.add('active');
                    suggestions[activeIndex - 1].scrollIntoView({ block: 'nearest' });
                }
                break;

            case 'Enter':
                e.preventDefault();
                if (activeSuggestion) {
                    activeSuggestion.click();
                } else if (suggestions.length > 0) {
                    suggestions[0].click();
                }
                break;

            case 'Escape':
                searchInput.blur();
                suggestionsContainer.style.display = 'none';
                break;
        }
    });

    // Hide on click outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
}


export function setupTabEventListeners() {
    const mapControlsContainer = document.getElementById('dynamic-map-controls');
    if (!mapControlsContainer) return;

    mapControlsContainer.addEventListener('click', e => {
        const tabButton = e.target.closest('.map-tab-btn');
        if (tabButton && tabButton.dataset.mapId) {
            playSound('click.mp3');
            const mapId = tabButton.dataset.mapId;
            
            resetTransform();

            if (mapId !== map.activeMapId) {
                map.setActiveMapId(mapId);
                if (map.isEditMode) toggleEditMode(false);
                renderer.renderMap(mapId);
                renderTabs();
            }
            return;
        }

        // Handle Party Toggle
        if (e.target.id === 'toggle-party-btn') {
            playSound('click.mp3');
            const newState = !map.showPartyMarkers;
            map.setShowPartyMarkers(newState);
            
            e.target.textContent = newState ? 'Hide Party Markers' : 'Show Party Markers';
            e.target.classList.toggle('active', newState);
            
            renderer.refreshPartyMarkers();
            renderer.renderMapModeLegend();
            return;
        }

        const modeButton = e.target.closest('#map-mode-selector .mode-btn');
        if (modeButton && !modeButton.classList.contains('active')) {
            playSound('confirm.mp3', 0.5);
            const newMode = modeButton.dataset.mode;
            map.setActiveMapMode(newMode);
            
            document.querySelectorAll('#map-mode-selector .mode-btn').forEach(btn => btn.classList.remove('active'));
            modeButton.classList.add('active');

            const subModeSelector = document.getElementById('political-submode-selector');
            
            if (newMode === 'political') {
                subModeSelector.style.display = 'flex';
                subModeSelector.querySelectorAll('.mode-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.submode === map.activePoliticalSubmode);
                });
            } else {
                subModeSelector.style.display = 'none';
            }
            
            renderer.renderPois();
            renderer.renderMapModeLegend();
            renderer.renderMap(map.activeMapId);
        }
    });

    const subModeSelector = document.getElementById('political-submode-selector');
    if (subModeSelector) {
        subModeSelector.addEventListener('click', e => {
            const subModeBtn = e.target.closest('.mode-btn');
            if (subModeBtn && !subModeBtn.classList.contains('active')) {
                playSound('click.mp3');
                map.setActivePoliticalSubmode(subModeBtn.dataset.submode);
                subModeSelector.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
                subModeBtn.classList.add('active');
                renderer.renderPois();
                renderer.renderMapModeLegend();
            }
        });
    }
}

// ============================================================================
// map-ui.js - UPDATED renderTabs
// Always show the submode selector, not hidden by default
// ============================================================================
