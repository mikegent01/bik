import { state } from './state.js';
import { MAP_DATA, BUILDING_TYPES } from './map-data.js';
import { LORE_DATA } from './lore.js';
import { getIntelForFaction } from './systems/common.js';
import { playSound } from './common.js';
import * as map from './maps.js';
import { resetTransform } from './map-transform.js';
import { QUEST_DATA } from './quests-data.js';
import { FACTION_COLORS } from './factions/faction-colors.js';
import { BATTLE_MAP_DATA } from './map-battle-data.js';
import { LEGAL_DATA } from './legal_data.js';
import { ALL_LEGAL_CODES } from './laws-data.js';


const displayArea = document.getElementById('map-display-area');
const detailPanel = document.getElementById('map-detail-content');
let tooltip;

function createTooltip() {
    if (document.getElementById('map-tooltip')) return;
    tooltip = document.createElement('div');
    tooltip.id = 'map-tooltip';
    displayArea.appendChild(tooltip);
}

function showTooltip(e, content) {
    if (!tooltip) return;
    tooltip.innerHTML = content;
    tooltip.classList.add('visible');
    const rect = displayArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    tooltip.style.left = `${x + 15}px`;
    tooltip.style.top = `${y + 15}px`;
}

function hideTooltip() {
    if (tooltip) tooltip.classList.remove('visible');
}

function hasSufficientIntel(poi) {
    if (!poi.intelReq) return true;
    if (state.debugMode) return true;

    if (typeof poi.intelReq === 'number') {
        const factionKey = poi.factionId || 'unaligned';
        return getIntelForFaction(factionKey) >= poi.intelReq;
    }

    if (typeof poi.intelReq === 'object' && poi.intelReq.faction && typeof poi.intelReq.level === 'number') {
        return getIntelForFaction(poi.intelReq.faction) >= poi.intelReq.level;
    }
    
    return true; // Fail open for malformed data
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

    const rgbToHex = (r, g, b) => `#${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('')}`;

    const c1 = hexToRgb(lowerColor);
    const c2 = hexToRgb(upperColor);

    const r = Math.round(c1.r + (c2.r - c1.r) * segmentRatio);
    const g = Math.round(c1.g + (c2.g - c1.g) * segmentRatio);
    const b = Math.round(c1.b + (c2.b - c1.b) * segmentRatio);

    return rgbToHex(r, g, b);
}


export function renderMap(mapId) {
    map.setActiveMapId(mapId);
    const mapData = MAP_DATA[mapId];
    if (!mapData) {
        console.error(`Map data not found for ID: ${mapId}`);
        return;
    }

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

    mapImage.onload = () => {
        const container = displayArea;
        const img = mapImage;
        const containerRatio = container.clientWidth / container.clientHeight;
        const imgRatio = img.naturalWidth / img.naturalHeight;
        
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
        interactiveLayer.style.position = 'absolute';
        interactiveLayer.style.width = `${renderedWidth}px`;
        interactiveLayer.style.height = `${renderedHeight}px`;
        interactiveLayer.style.top = `${top}px`;
        interactiveLayer.style.left = `${left}px`;
        zoomWrapper.appendChild(interactiveLayer);

        map.setRenderedMapDimensions({ width: renderedWidth, height: renderedHeight });

        renderPois();
        renderFog();
        
        if (map.activeMapMode === 'tactical') {
            renderBattleElements(mapId);
        }

        if (map.isEditMode) {
            const drawingSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            drawingSvg.id = 'map-drawing-svg';
            drawingSvg.setAttribute('viewBox', '0 0 100 100');
            drawingSvg.setAttribute('preserveAspectRatio', 'none');
            interactiveLayer.appendChild(drawingSvg);
        }
    };

    renderMapModeLegend();
    resetTransform();
}

function getUnitIcon(unitType) {
    switch(unitType) {
        case 'garrison': return '⛫';
        case 'patrol': return '⬦';
        case 'main_force': return '●';
        case 'special_ops': return '★';
        case 'siege_unit': return '⌖';
        case 'ambush': return 'X';
        default: return '?';
    }
}

function renderBattleElements(mapId) {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '3';
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    interactiveLayer.appendChild(svg);

    const frontLines = BATTLE_MAP_DATA.front_lines.filter(fl => fl.mapId === mapId);
    frontLines.forEach(fl => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        line.setAttribute('points', fl.points);
        line.classList.add('front-line', 'clickable-tactical');
        line.addEventListener('click', () => {
            playSound('click.mp3');
            renderTacticalDetailPanel(fl.id, 'frontline');
        });
        svg.appendChild(line);
    });

    if (BATTLE_MAP_DATA.vigilance_journey.mapId === mapId) {
        renderVigilance(interactiveLayer, svg);
    }

    const troopsOnThisMap = BATTLE_MAP_DATA.troop_deployments.filter(t => t.mapId === mapId);
    troopsOnThisMap.forEach(troop => {
        const faction = LORE_DATA.factions[troop.factionId];
        
        if (troop.unitType === 'patrol' && troop.path) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', troop.path);
            path.classList.add('patrol-path');
            if (faction) {
                path.style.stroke = FACTION_COLORS[troop.factionId] || 'white';
            }
            svg.appendChild(path);
        }

        const troopMarker = document.createElement('div');
        troopMarker.className = `troop-marker unit-type-${troop.unitType}`;
        if (troop.battlefront) troopMarker.classList.add('battlefront');
        troopMarker.style.left = `${troop.x}%`;
        troopMarker.style.top = `${troop.y}%`;
        troopMarker.dataset.troopId = troop.id;
        
        if (faction) {
            troopMarker.style.borderColor = FACTION_COLORS[troop.factionId] || 'white';
        } else {
            troopMarker.style.borderColor = 'grey';
        }
        troopMarker.innerHTML = `<div class="unit-type-icon">${getUnitIcon(troop.unitType)}</div>`;
        if (troop.unitType === 'patrol') {
            troopMarker.querySelector('.unit-type-icon').style.transform = 'rotate(-45deg)';
        }

        troopMarker.addEventListener('mouseover', e => {
            const hasIntel = hasSufficientIntel(troop.details.intelReq);
            
            let intelGatedHTML = '<p class="redacted" style="text-align:center;">[Further intel required]</p>';
            if (hasIntel) {
                const supplyStatus = troop.details.supply_level > 70 ? 'high' : troop.details.supply_level > 30 ? 'medium' : 'low';
                const moraleStatus = troop.details.morale > 70 ? 'high' : troop.details.morale > 30 ? 'medium' : 'low';
                const orgStatus = troop.details.organization > 70 ? 'high' : troop.details.organization > 30 ? 'medium' : 'low';

                intelGatedHTML = `
                    <p><strong>Status:</strong> ${troop.details.status}</p>
                    <p><strong>Supply Level:</strong></p>
                    <div class="tooltip-bar-container">
                        <div class="tooltip-bar status-bar-${supplyStatus}" style="width: ${troop.details.supply_level}%"></div>
                    </div>
                    <p><strong>Morale:</strong></p>
                    <div class="tooltip-bar-container">
                        <div class="tooltip-bar status-bar-${moraleStatus}" style="width: ${troop.details.morale}%"></div>
                    </div>
                    <p><strong>Organization:</strong></p>
                    <div class="tooltip-bar-container">
                        <div class="tooltip-bar status-bar-${orgStatus}" style="width: ${troop.details.organization}%"></div>
                    </div>
                    <p class="tooltip-objective"><strong>Objective:</strong> ${troop.details.objective}</p>
                `;
            }

            const factionLogo = faction ? `<img src="${faction.logo}" alt="${faction.name}"/>` : '';
            
            const tooltipContent = `
                <div class="tooltip-header">
                    ${factionLogo}
                    <h5>${troop.name}</h5>
                </div>
                <div class="tooltip-section">
                    <p><strong>Strength:</strong> ${troop.strength}</p>
                    ${intelGatedHTML}
                </div>
            `;
            showTooltip(e, tooltipContent);
        });
        troopMarker.addEventListener('mouseout', hideTooltip);
        
        interactiveLayer.appendChild(troopMarker);
    });
}


function renderVigilance(container, svg) {
    const journey = BATTLE_MAP_DATA.vigilance_journey;
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', journey.path);
    path.classList.add('vigilance-path');
    svg.appendChild(path);

    const pathElForLength = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElForLength.setAttribute('d', journey.path);
    const pathLength = pathElForLength.getTotalLength();
    const progress = Math.min(journey.currentDay / journey.totalDays, 1);
    const currentPoint = pathElForLength.getPointAtLength(pathLength * progress);

    const marker = document.createElement('div');
    marker.className = 'vigilance-marker';
    marker.style.left = `${currentPoint.x}%`;
    marker.style.top = `${currentPoint.y}%`;
    marker.title = "The 'Vigilance'";
    marker.dataset.vigilanceId = 'vigilance';
    
    const label = document.createElement('div');
    label.className = 'vigilance-label';
    
    if (journey.status && (journey.status.includes('Arrived') || journey.daysRemaining <= 0)) {
        label.textContent = journey.status;
    } else {
        label.textContent = `${journey.daysRemaining} days to Capital`;
    }
    
    marker.appendChild(label);
    
    container.appendChild(marker);
}

export function renderPois() {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;
    
    interactiveLayer.querySelectorAll('.poi-marker').forEach(el => el.remove());

    const poiSource = map.isEditMode ? map.editSessionData.pois : (MAP_DATA[map.activeMapId]?.pointsOfInterest || []);
    
    let allPois = poiSource.filter(poi => {
        if (map.isEditMode) return true;
        return hasSufficientIntel(poi);
    });

    allPois.forEach(poi => {
        const marker = document.createElement('div');
        marker.className = 'poi-marker';
        marker.style.left = `${poi.x}%`;
        marker.style.top = `${poi.y}%`;
        marker.dataset.poiId = poi.id;
        marker.title = poi.name;

        marker.classList.remove('political-view', 'economic-view', 'military-view', 'population-view', 'laws-view');
        
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-wrapper';
        marker.appendChild(iconWrapper);

        const hasRequest = Object.values(QUEST_DATA).some(q => q.locationId === poi.id && q.status === 'available');
        if (hasRequest && !map.isEditMode) {
            const requestIndicator = document.createElement('div');
            requestIndicator.className = 'poi-request-indicator';
            requestIndicator.textContent = '!';
            marker.appendChild(requestIndicator);
        }

        if (map.activeMapMode === 'tactical') {
            marker.style.opacity = '0.5';
            marker.style.width = '16px';
            marker.style.height = '16px';
            iconWrapper.innerHTML = BUILDING_TYPES[poi.type]?.icon || '❓';
            iconWrapper.style.fontSize = '10px';
        } else {
             marker.style.opacity = '1';
             marker.style.width = '20px';
             marker.style.height = '20px';
             iconWrapper.style.fontSize = '12px';
            switch (map.activeMapMode) {
                case 'political':
                    marker.classList.add('political-view');
                    marker.style.backgroundColor = FACTION_COLORS[poi.factionId] || 'var(--text-secondary)';
                    const politicalSize = 16 + (poi.political_influence || 1) * 2;
                    marker.style.width = `${politicalSize}px`;
                    marker.style.height = `${politicalSize}px`;
                    iconWrapper.innerHTML = '';
                    break;
                case 'economic':
                    marker.classList.add('economic-view');
                    const economicSize = 16 + (poi.economic_value || 1) * 2;
                    marker.style.width = `${economicSize}px`;
                    marker.style.height = `${economicSize}px`;
                    iconWrapper.innerHTML = poi.economic_value || '?';
                    break;
                case 'military':
                    marker.classList.add('military-view');
                    const militarySize = 16 + (poi.military_strength || 1) * 2;
                    marker.style.width = `${militarySize}px`;
                    marker.style.height = `${militarySize}px`;
                    iconWrapper.innerHTML = poi.military_strength || '?';
                    break;
                case 'population':
                    marker.classList.add('population-view');
                    const popSize = 12 + Math.log2(Math.max(1, poi.population || 1)) * 2.5;
                    marker.style.width = `${popSize}px`;
                    marker.style.height = `${popSize}px`;
                    marker.style.backgroundColor = getPopulationColor(poi.population || 0);
                    marker.style.opacity = poi.population > 0 ? '0.9' : '0.5';
                    break;
                case 'laws':
                    marker.classList.add('laws-view');
                    marker.style.backgroundColor = FACTION_COLORS[poi.factionId] || 'var(--underworld-fringe-color)';
                    iconWrapper.innerHTML = '📜';
                    if (LEGAL_DATA.poi_traditions[poi.id]) {
                        marker.style.borderColor = 'var(--accent-color)';
                        marker.style.boxShadow = '0 0 8px var(--accent-color)';
                    } else {
                        marker.style.borderColor = 'var(--border-color)';
                        marker.style.boxShadow = 'none';
                    }
                    break;
                case 'age_of_antiquity':
                    marker.classList.add('age-of-antiquity-view');
                    const age = poi.age_of_antiquity || 1;
                    const ageSize = 16 + age * 1.5;
                    marker.style.width = `${ageSize}px`;
                    marker.style.height = `${ageSize}px`;
                    marker.style.backgroundColor = valueToColor(age, 1, 10, ['#a8d8ea', '#f9f871']); // light blue to yellow
                    iconWrapper.innerHTML = `📜`;
                    break;
                 case 'crime_rate':
                    marker.classList.add('crime-rate-view');
                    const crime = poi.crime_rate || 1;
                    const crimeSize = 16 + crime * 1.5;
                    marker.style.width = `${crimeSize}px`;
                    marker.style.height = `${crimeSize}px`;
                    marker.style.backgroundColor = valueToColor(crime, 1, 10, ['#4575b4', '#fee090', '#d73027']); // blue (low) to red (high)
                    iconWrapper.innerHTML = `⚖️`;
                    break;
                case 'standard':
                default:
                    iconWrapper.innerHTML = BUILDING_TYPES[poi.type]?.icon || '❓';
                    break;
            }
        }

        if (map.isEditMode) {
            marker.draggable = true;
            marker.classList.add('draggable-poi');
        }

        interactiveLayer.appendChild(marker);
    });
}

export function renderFog() {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;

    const existingFog = document.getElementById('map-fog-overlay');
    if (existingFog) existingFog.remove();

    const fogSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    fogSvg.id = 'map-fog-overlay';
    fogSvg.setAttribute('viewBox', '0 0 100 100');
    fogSvg.setAttribute('preserveAspectRatio', 'none');

    const fogSource = map.isEditMode ? map.editSessionData.fogs : (MAP_DATA[map.activeMapId]?.fogOfWar || []);
    
    const allFogs = [...fogSource]; 

    allFogs.forEach(fog => {
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', fog.points);
        polygon.id = fog.id;

        if (state.mapState.discoveredFogs.includes(fog.id)) {
            polygon.classList.add('discovered');
        }
        fogSvg.appendChild(polygon);
    });

    interactiveLayer.appendChild(fogSvg);
}


function getPopulationColor(population) {
    if (population <= 50) return '#4575b4';
    if (population <= 500) return '#91bfdb';
    if (population <= 2000) return '#e0f3f8';
    if (population <= 5000) return '#fee090';
    if (population <= 10000) return '#fdae61';
    return '#f46d43';
}

function getLandmassKey(mapId) {
    const mapInfo = MAP_DATA[mapId];
    if (!mapInfo || !mapInfo.group) return null;
    const group = mapInfo.group;

    if (group.includes('Mushroom Kingdom') || group.includes('Islands')) return 'mushroom_kingdom_full';
    if (group.includes('The Midlands')) return 'midlands_full';
    if (group.includes('The Internet')) return 'internet_full';
    if (group.includes('Middle-earth')) return 'middle_earth_full';
    if (group.includes('The Fated Place')) return 'warhammer_full';
    if (group.includes('Kivotos')) return 'kivotos_full';
    if (group.includes('The Doughnut Hole')) return 'doughnut_hole_full';
    
    return null;
}


function renderTraditionItems(traditionKeys) {
    if (!traditionKeys || traditionKeys.length === 0) return '';
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

export function showTraditionsPopup(poi) {
    const mapId = map.activeMapId;
    const landmassKey = getLandmassKey(mapId);
    
    // Use the landmassKey to look up the group name, ensuring we always get the general region name
    // instead of a sub-region name or the '(Full)' name.
    const regionDisplayName = MAP_DATA[landmassKey]?.group || MAP_DATA[landmassKey]?.name || MAP_DATA[mapId]?.group || MAP_DATA[mapId]?.name;

    let title = '';
    let summaryHTML = '';
    let traditionsHTML = '';
    
    if (poi) {
        title = `Laws & Customs of ${poi.name}`;
        const factionId = poi.factionId || 'unaligned';
        const governingCode = ALL_LEGAL_CODES[factionId];
        const faction = LORE_DATA.factions[factionId];
        
        if (governingCode) {
            const lawLink = `<a href="#" class="law-link" data-law-key="${factionId}">${governingCode.name}</a>`;
            summaryHTML = `<p>This location is controlled by <strong>${faction.name}</strong> and is governed by <strong>"${lawLink}"</strong>: <em>${governingCode.description}</em></p>`;
        } else {
            const introText = (factionId === 'unaligned' || !faction) 
                ? 'This location is unaligned and' 
                : `This location is controlled by <strong>${faction.name}</strong>, which has no formal codified laws, and`;
             
            summaryHTML = `<p>${introText} follows the general traditions of <strong>${regionDisplayName}</strong>.</p>`;
        }
        
        const regionalKeys = LEGAL_DATA.regional_traditions[landmassKey] || [];
        if(regionalKeys.length > 0) {
            traditionsHTML += `<h4>Regional Traditions</h4>${renderTraditionItems(regionalKeys)}`;
        }

        const poiTraditionsData = LEGAL_DATA.poi_traditions[poi.id];
        if (poiTraditionsData) {
            summaryHTML += `<hr style="border-color: var(--border-color); margin: 12px 0;">`;
            summaryHTML += `<p><strong>Specific Local Customs:</strong> ${poiTraditionsData.summary}</p>`;
            traditionsHTML += `<h4>Local Customs</h4>${renderTraditionItems(poiTraditionsData.traditions)}`;
        }

    } else {
        title = `General Traditions of ${regionDisplayName}`;
        summaryHTML = `<p>These are the overarching traditions that govern unaligned territories in this region.</p>`;
        const regionalKeys = LEGAL_DATA.regional_traditions[landmassKey] || [];
        traditionsHTML += renderTraditionItems(regionalKeys);
    }

    const content = `
        <div class="law-popup-content">
            <div class="law-popup-header">${summaryHTML}</div>
            <div class="law-popup-list">${traditionsHTML}</div>
        </div>`;

    map.showMapModal(title, content);
}


export async function showLibraryPopup(poi) {
    const { LIBRARY_STOCKS } = await import('./books/library_stocks.js');
    const { BOOK_DESCRIPTIONS } = await import('./books/book_descriptions.js');
    
    const bookKeys = LIBRARY_STOCKS[poi.libraryStockKey] || [];
    let booksHTML = '';

    if (bookKeys.length > 0) {
        booksHTML = bookKeys.map(key => {
            const book = BOOK_DESCRIPTIONS[key];
            return book ? `
                <div class="library-popup-book">
                    <strong>${key}</strong>
                    <p>${book.summary}</p>
                </div>
            ` : '';
        }).join('');
    } else {
        booksHTML = `<p class="panel-placeholder">No books are currently catalogued for this library.</p>`;
    }

    const summaryHTML = poi.library_summary 
        ? `<p class="library-popup-summary">${poi.library_summary}</p>` 
        : '';
    
    const content = `${summaryHTML}<div class="library-popup-list">${booksHTML}</div>`;
    map.showMapModal(`Books in Stock: ${poi.name}`, content);
}

export function showLawCodexModal(lawKey) {
    const lawData = ALL_LEGAL_CODES[lawKey];
    if (!lawData) return;

    const ICONS = { political: '🏛️', military: '⚔️', economic: '💰', social: '❤️‍🩹', penal: '⚖️' };
    let content = '';
    
    ['political', 'military', 'economic', 'social', 'penal'].forEach(category => {
        if (lawData[category] && lawData[category].length > 0) {
            content += `<h4>${ICONS[category]} ${category.charAt(0).toUpperCase() + category.slice(1)} Laws</h4>`;
            content += `<div class="law-popup-list">`;
            lawData[category].forEach(law => {
                content += `
                    <div class="law-popup-item">
                        <h5>${law.name}</h5>
                        <p>${law.description}</p>
                    </div>
                `;
            });
            content += `</div>`;
        }
    });

    map.showMapModal(`Codex: ${lawData.name}`, `<div class="law-popup-content">${content}</div>`);
}


export async function showDetailPanel(poiId) {
    const poiSource = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    const userPois = state.mapState.userPois[map.activeMapId] || [];
    const poi = [...poiSource, ...userPois].find(p => p.id === poiId);

    if (!poi) return;
    
    const typeInfo = BUILDING_TYPES[poi.type] || { name: 'Unknown' };
    
    let intelReqHTML = '';
    if (poi.intelReq) {
        if (typeof poi.intelReq === 'number') {
            const factionName = LORE_DATA.factions[poi.factionId || 'unaligned']?.name || 'Unaligned';
            intelReqHTML = `<p class="poi-intel-req"><strong>Intel Source:</strong> Requires Intel Level ${poi.intelReq} with ${factionName}.</p>`;
        } else if (typeof poi.intelReq === 'object') {
            const faction = LORE_DATA.factions[poi.intelReq.faction];
            if (faction) {
                intelReqHTML = `<p class="poi-intel-req"><strong>Intel Source:</strong> Requires ${poi.intelReq.level} Intel with ${faction.name}.</p>`;
            }
        }
    }


    const availableRequests = Object.values(QUEST_DATA).filter(q => q.locationId === poiId && q.status === 'available');
    let requestsHTML = '';
    if (availableRequests.length > 0) {
        requestsHTML = `
            <div class="poi-requests-section">
                <h4>Available Requests</h4>
                ${availableRequests.map(req => `
                    <div class="poi-request-item">
                        <strong>${req.title}</strong>
                        <p>${req.objective}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    detailPanel.innerHTML = `
        <div class="poi-detail">
            <h3>${poi.name}</h3>
            <p class="poi-type">${typeInfo.name}</p>
            <p class="poi-description">${poi.description || 'No further details available.'}</p>
            ${intelReqHTML}
        </div>
        ${requestsHTML}
    `;
}

export function renderTacticalDetailPanel(itemId, itemType) {
    let html = '';
    
    if (itemType === 'troop') {
        const troop = BATTLE_MAP_DATA.troop_deployments.find(t => t.id === itemId);
        if (!troop) return;
        const faction = LORE_DATA.factions[troop.factionId];
        const hasIntel = hasSufficientIntel(troop.details.intelReq);

        const supplyStatus = troop.details.supply_level > 70 ? 'high' : troop.details.supply_level > 30 ? 'medium' : 'low';
        const moraleStatus = troop.details.morale > 70 ? 'high' : troop.details.morale > 30 ? 'medium' : 'low';
        const orgStatus = troop.details.organization > 70 ? 'high' : troop.details.organization > 30 ? 'medium' : 'low';
        
        let intelGatedHTML;
        if (hasIntel) {
            intelGatedHTML = `
                <div class="tactical-stat"><strong>Status:</strong> ${troop.details.status}</div>
                <div class="tactical-stat"><strong>Supply:</strong>
                    <div class="tooltip-bar-container"><div class="tooltip-bar status-bar-${supplyStatus}" style="width: ${troop.details.supply_level}%"></div></div>
                </div>
                <div class="tactical-stat"><strong>Morale:</strong>
                    <div class="tooltip-bar-container"><div class="tooltip-bar status-bar-${moraleStatus}" style="width: ${troop.details.morale}%"></div></div>
                </div>
                <div class="tactical-stat"><strong>Organization:</strong>
                    <div class="tooltip-bar-container"><div class="tooltip-bar status-bar-${orgStatus}" style="width: ${troop.details.organization}%"></div></div>
                </div>
                <div class="tactical-objective">
                    <h5>Current Objective</h5>
                    <p>${troop.details.objective}</p>
                </div>
            `;
        } else {
             const req = troop.details.intelReq;
             const reqFaction = LORE_DATA.factions[req.faction]?.name || 'a relevant faction';
             intelGatedHTML = `<p class="poi-intel-req"><strong>Intel Required:</strong> Requires Level ${req.level} with ${reqFaction} to view detailed operational status.</p>`;
        }
        
        html = `
            <div class="tactical-detail-panel">
                <h3>${troop.name}</h3>
                <p class="tactical-faction">
                    <img src="${faction?.logo || 'icon_focus.png'}" alt="Faction Logo">
                    ${faction?.name || 'Unknown Faction'}
                </p>
                <div class="tactical-info">
                    <p><strong>Unit Type:</strong> ${troop.unitType.replace(/_/g, ' ')}</p>
                    <p><strong>Strength:</strong> ${troop.strength}</p>
                </div>
                ${intelGatedHTML}
            </div>
        `;
    } else if (itemType === 'vigilance') {
        const journey = BATTLE_MAP_DATA.vigilance_journey;
        const statusText = journey.status || 'En route to Imperial Capital';
        const timeRemainingText = journey.daysRemaining > 0 ? `${journey.daysRemaining} days` : 'Arrived';
        html = `
            <div class="tactical-detail-panel">
                <h3>The 'Vigilance'</h3>
                <p class="tactical-faction">
                    <img src="newspaper_airship.png" alt="Vigilance">
                    Unaligned (Party Controlled)
                </p>
                <div class="tactical-info">
                    <p><strong>Status:</strong> ${statusText}</p>
                    <p><strong>Journey Progress:</strong> Day ${journey.currentDay} of ${journey.totalDays}</p>
                    <p><strong>Time Remaining:</strong> ${timeRemainingText}</p>
                </div>
                <div class="tactical-objective">
                    <h5>Mission</h5>
                    <p>Travel to the heart of the Regal Empire to confront Emperor Elagabalus.</p>
                </div>
            </div>
        `;
    } else if (itemType === 'frontline') {
        const line = BATTLE_MAP_DATA.front_lines.find(l => l.id === itemId);
        if(!line) return;
         html = `
            <div class="tactical-detail-panel">
                <h3>Contested Front Line</h3>
                <p class="tactical-faction">
                    <img src="icon_focus.png" alt="Conflict">
                    Active War Zone
                </p>
                <div class="tactical-objective">
                    <h5>Situation</h5>
                    <p>${line.description}</p>
                </div>
            </div>
        `;
    }

    detailPanel.innerHTML = html;
}

export function renderMapModeLegend() {
    let legendHTML = '';
    let currentPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    
    switch (map.activeMapMode) {
        case 'political':
            const visibleFactions = [...new Set(currentPois
                .map(p => p.factionId)
                .filter(id => id && FACTION_COLORS[id]))];

            const sortedFactions = visibleFactions.sort((a, b) => {
                const factionA = LORE_DATA.factions[a];
                const factionB = LORE_DATA.factions[b];
                const nameA = factionA?.name || '';
                const nameB = factionB?.name || '';
                return nameA.localeCompare(nameB);
            });

            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Political View</h4>
                    <p>Locations are colored by their controlling faction. Size indicates political influence.</p>
                    ${sortedFactions.length > 0 ? `
                    <ul class="legend-list">
                        ${sortedFactions.map(factionId => {
                            const faction = LORE_DATA.factions[factionId];
                            return `
                                <li class="legend-item">
                                    <div class="legend-color-box" style="background-color: ${FACTION_COLORS[factionId]};"></div>
                                    <span>${faction?.name || 'Unknown Faction'}</span>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                    ` : `<p class="panel-placeholder">No politically aligned factions in current view.</p>`}
                </div>
            `;
            break;
        case 'economic':
             legendHTML = `...`; // Omitted for brevity
            break;
        // ... other cases omitted for brevity
        default:
             legendHTML = `<p class="panel-placeholder">Select a point of interest for details.</p>`;
            break;
    }
    detailPanel.innerHTML = legendHTML;
}

export function renderDrawingPreview(points) {
    // ... code omitted for brevity
}