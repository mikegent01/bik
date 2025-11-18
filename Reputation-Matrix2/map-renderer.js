





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
import { CULTURE_DATA } from './culture-data.js'; 
import { SPECIES_DATA, REGIONAL_DEMOGRAPHICS } from './species-data.js'; 
import { PARTY_LOCATIONS } from './party-data.js';
import { PROVINCE_POLITICS } from './politics-data.js';


const displayArea = document.getElementById('map-display-area');
const detailPanel = document.getElementById('map-detail-content');
let tooltip;

/**
 * Retrieves character data from all available sources.
 * @param {string} charKey - The character's unique key.
 * @returns {object} The character's data object.
 */
function getPartyCharacterData(charKey) {
    return LORE_DATA.characters[charKey] 
        || LORE_DATA.auxiliary_party[charKey] 
        || { name: charKey.replace(/_/g, ' '), portrait: `portraits/${charKey}.png`, role: 'Unknown' };
}


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
        
        if (map.activeMapMode === 'party') {
            renderPartyMembers(mapId);
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

    const troopsOnThisMap = BATTLE_MAP_DATA.troop_deployments.filter(t => t.mapId === mapId);

    // Render Zones of Control first, so they are behind other elements
    troopsOnThisMap.forEach(troop => {
        if (troop.strength_val && (troop.unitType === 'main_force' || troop.unitType === 'garrison')) {
            const zone = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            zone.setAttribute('cx', troop.x);
            zone.setAttribute('cy', troop.y);
            const radius = troop.strength_val / 50; // Scaling factor for influence radius
            zone.setAttribute('r', `${radius}%`);
            zone.classList.add('zone-of-control');
            const faction = LORE_DATA.factions[troop.factionId];
            if (faction) {
                const color = FACTION_COLORS[troop.factionId] || 'white';
                zone.style.fill = color;
                zone.style.stroke = color;
            }
            svg.appendChild(zone);
        }
    });

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
            const factionColor = FACTION_COLORS[troop.factionId] || 'white';
            troopMarker.style.borderColor = factionColor;
            
            // Convert hex to rgba for background
            const hexToRgba = (hex, alpha) => {
                if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) return `rgba(100, 100, 100, ${alpha})`;
                let c = hex.substring(1).split('');
                if (c.length === 3) {
                    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c = '0x' + c.join('');
                return `rgba(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255}, ${alpha})`;
            };
            troopMarker.style.backgroundColor = hexToRgba(factionColor, 0.4); // Add semi-transparent bg

        } else {
            troopMarker.style.borderColor = 'grey';
            troopMarker.style.backgroundColor = 'rgba(100, 100, 100, 0.4)';
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

function renderPartyMembers(mapId) {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;

    // Create SVG layer for paths (for Vigilance)
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '3';
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('preserveAspectRatio', 'none');
    interactiveLayer.appendChild(svg);
    
    // Render Vigilance
    if (BATTLE_MAP_DATA.vigilance_journey.mapId === mapId) {
        renderVigilance(interactiveLayer, svg);
    }

    // Clear existing party markers to avoid duplicates
    interactiveLayer.querySelectorAll('.party-marker').forEach(el => el.remove());

    let members = PARTY_LOCATIONS[mapId];
    
    // If no members on sub-map, check for group's main map data
    if (!members) {
        const currentMapInfo = MAP_DATA[mapId];
        if (currentMapInfo && currentMapInfo.group) {
            // Find the main map for the group (assuming it ends with '_full')
            const groupKey = Object.keys(MAP_DATA).find(key => 
                MAP_DATA[key].group === currentMapInfo.group && key.endsWith('_full')
            );
            if (groupKey && PARTY_LOCATIONS[groupKey]) {
                members = PARTY_LOCATIONS[groupKey];
            }
        }
    }

    if (!members) return;

    // Cluster Logic: Group members if they are too close
    const clusters = [];
    const threshold = 2.0; // Distance threshold percentage

    members.forEach(member => {
        let added = false;
        for (let c of clusters) {
            const dist = Math.hypot(member.x - c.x, member.y - c.y);
            if (dist < threshold) {
                c.members.push(member);
                // Don't average the position, stick to the first one to prevent drifting
                added = true;
                break;
            }
        }
        if (!added) {
            clusters.push({ x: member.x, y: member.y, members: [member] });
        }
    });

    clusters.forEach(cluster => {
        const marker = document.createElement('div');
        marker.className = 'party-marker';
        marker.style.left = `${cluster.x}%`;
        marker.style.top = `${cluster.y}%`;

        if (cluster.members.length > 1) {
            // Group Marker
            marker.classList.add('party-group-marker');
            marker.textContent = cluster.members.length;
            marker.style.backgroundImage = 'none';
            marker.style.backgroundColor = 'var(--accent-color)'; // Purple
            marker.style.color = '#fff';
            marker.style.display = 'flex';
            marker.style.alignItems = 'center';
            marker.style.justifyContent = 'center';
            marker.style.fontWeight = 'bold';
            marker.style.fontSize = '14px';
            marker.title = `${cluster.members.length} Characters`;

            marker.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                playSound('click.mp3');
                renderPartyGroupDetail(cluster.members);
            });
        } else {
            // Single Member Marker
            const member = cluster.members[0];
            const charData = getPartyCharacterData(member.charKey);
            
            marker.dataset.charKey = member.charKey;
            marker.dataset.status = member.status;
            const statusClass = member.status.toLowerCase().replace(/ /g, '-');
            marker.classList.add(`status-${statusClass}`);
            
            marker.style.backgroundImage = `url('${charData.portrait}')`;

            marker.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                playSound('click.mp3');
                renderPartyMemberDetail(member.charKey, member.status);
            });
            
            // Hover Tooltip
            marker.addEventListener('mouseover', e => {
                const tooltipContent = `
                    <div class="tooltip-header">
                        <h5>${charData.name}</h5>
                    </div>
                    <div class="tooltip-section">
                        <p><strong>Status:</strong> <span style="color:var(--accent-color)">${member.status}</span></p>
                    </div>
                `;
                showTooltip(e, tooltipContent);
            });
            marker.addEventListener('mouseout', hideTooltip);
        }
        interactiveLayer.appendChild(marker);
    });
}

function renderPartyGroupDetail(members) {
    let html = `
        <div class="poi-detail">
            <h3>Group Status (${members.length})</h3>
            <div class="party-group-list" style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
    `;

    members.forEach(member => {
        const charData = getPartyCharacterData(member.charKey);
        let portraitUrl = charData.portrait;

        html += `
            <div class="party-group-item" onclick="window.location.href='profile.html?user=${member.charKey}'" 
                 style="cursor:pointer; padding: 8px; background: var(--sidebar-bg); border: 1px solid var(--border-color); border-radius: 4px; display: flex; gap: 12px; align-items: center; transition: background 0.2s;">
                <img src="${portraitUrl}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 1px solid var(--accent-color);">
                <div>
                    <div style="font-weight: bold; color: var(--text-color); font-size: 0.95rem;">${charData.name}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary); font-style: italic;">${member.status}</div>
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;
    detailPanel.innerHTML = html;
}

export function renderPartyMemberDetail(charKey, status) {
    const charData = getPartyCharacterData(charKey);
    if (!charData) return;

    const html = `
        <div class="poi-detail">
            <div class="party-detail-header">
                <img src="${charData.portrait}" class="party-detail-portrait" alt="${charData.name}">
                <div>
                    <h3>${charData.name}</h3>
                    <p class="party-role">${charData.role}</p>
                </div>
            </div>
            
            <div class="party-status-box status-${status.toLowerCase().replace(/ /g, '-')}">
                <strong>Current Status:</strong> ${status}
            </div>

            <p class="poi-description">${charData.description || 'No description available.'}</p>
            
            <div class="party-actions">
                <a href="profile.html?user=${charKey}" class="control-btn">View Full Profile</a>
            </div>
        </div>
    `;
    detailPanel.innerHTML = html;
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
    
    container.appendChild(marker);
}

function createPieChartSVG(data, size) {
    const radius = size / 2;
    let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
    let cumulativePercent = 0;

    const sortedData = Object.entries(data).sort(([,a],[,b]) => b - a);

    for (const [key, percent] of sortedData) {
        if (percent === 0) continue;
        const color = FACTION_COLORS[key] || '#ccc';
        
        const startAngle = (cumulativePercent * 2 * Math.PI) - (Math.PI / 2);
        cumulativePercent += percent / 100;
        const endAngle = (cumulativePercent * 2 * Math.PI) - (Math.PI / 2);
        
        // if the slice is 100%, draw a full circle to avoid arc glitches
        if (percent >= 100) {
            svg += `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" stroke="var(--sidebar-bg)" stroke-width="1"/>`;
            continue;
        }

        const startX = radius + radius * Math.cos(startAngle);
        const startY = radius + radius * Math.sin(startAngle);
        const endX = radius + radius * Math.cos(endAngle);
        const endY = radius + radius * Math.sin(endAngle);
        
        const largeArcFlag = (percent > 50) ? 1 : 0;
        
        const pathData = [
            `M ${radius},${radius}`, // Move to center
            `L ${startX},${startY}`, // Line to start of arc
            `A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}`, // Arc to end
            'Z' // Close path
        ].join(' ');

        svg += `<path d="${pathData}" fill="${color}" stroke="var(--sidebar-bg)" stroke-width="1"/>`;
    }

    svg += '</svg>';
    return svg;
}

export function renderProvinceDetailPanel(province) {
    let factionsHTML = '<ul class="legend-list">';
    Object.entries(province.control).sort(([,a],[,b]) => b - a).forEach(([factionId, percent]) => {
        const faction = LORE_DATA.factions[factionId];
        factionsHTML += `<li class="legend-item">
            <div class="legend-color-box" style="background-color: ${FACTION_COLORS[factionId] || '#ccc'};"></div>
            <span>${faction?.name || 'Unknown'}: <strong>${percent}%</strong></span>
        </li>`;
    });
    factionsHTML += '</ul>';

    const html = `
        <div class="poi-detail">
            <h3>${province.name}</h3>
            <p class="poi-type">Provincial Influence Breakdown</p>
            ${factionsHTML}
        </div>
    `;
    detailPanel.innerHTML = html;
}

export function renderPois() {
    const interactiveLayer = document.getElementById('interactive-map-layer');
    if (!interactiveLayer) return;
    
    interactiveLayer.querySelectorAll('.poi-marker, .province-marker').forEach(el => el.remove());

    const provinceData = PROVINCE_POLITICS[map.activeMapId];

    if (map.activeMapMode === 'political' && provinceData && map.activePoliticalSubmode === 'province' && !map.isEditMode) {
        Object.values(provinceData).forEach(province => {
            const totalInfluence = Object.values(province.control).reduce((a, b) => a + b, 0);
            const size = 30 + Math.log2(totalInfluence > 1 ? totalInfluence : 1) * 5; 
            
            const marker = document.createElement('div');
            marker.className = 'province-marker';
            marker.style.left = `${province.x}%`;
            marker.style.top = `${province.y}%`;
            marker.style.width = `${size}px`;
            marker.style.height = `${size}px`;

            const pieChartSVG = createPieChartSVG(province.control, size);
            marker.innerHTML = pieChartSVG + `<div class="province-label">${province.name}</div>`;

            marker.addEventListener('click', (e) => {
                e.stopPropagation();
                playSound('click.mp3');
                renderProvinceDetailPanel(province);
            });

            marker.addEventListener('mouseover', e => {
                let tooltipContent = `<div class="tooltip-header"><h5>${province.name}</h5></div>`;
                tooltipContent += '<ul class="legend-list">';
                Object.entries(province.control).sort(([,a],[,b]) => b - a).forEach(([factionId, percent]) => {
                    const faction = LORE_DATA.factions[factionId];
                    tooltipContent += `<li class="legend-item">
                        <div class="legend-color-box" style="background-color: ${FACTION_COLORS[factionId] || '#ccc'};"></div>
                        <span>${faction?.name || 'Unknown'}: ${percent}%</span>
                    </li>`;
                });
                tooltipContent += '</ul>';
                showTooltip(e, tooltipContent);
            });
            marker.addEventListener('mouseout', hideTooltip);

            interactiveLayer.appendChild(marker);
        });
        return;
    }

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

        marker.classList.remove('political-view', 'economic-view', 'military-view', 'population-view', 'laws-view', 'age-view', 'crime-view');
        
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
        } else if (map.activeMapMode === 'party') {
            // Fade out POIs slightly in party mode to highlight characters
            marker.style.opacity = '0.4';
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
                case 'political': {
                    marker.classList.add('political-view');
                    iconWrapper.innerHTML = ''; // Clear any default icon

                    const faction = LORE_DATA.factions[poi.factionId];

                    if (faction && faction.logo) {
                        marker.style.backgroundImage = `url(${faction.logo})`;
                        marker.style.backgroundSize = 'cover';
                        marker.style.backgroundPosition = 'center';
                        marker.style.backgroundColor = 'transparent'; 
                    } else {
                        const unalignedLogo = LORE_DATA.factions['unaligned']?.logo;
                        if (unalignedLogo) {
                             marker.style.backgroundImage = `url(${unalignedLogo})`;
                             marker.style.backgroundSize = 'cover';
                             marker.style.backgroundPosition = 'center';
                             marker.style.backgroundColor = 'transparent';
                        } else {
                            marker.style.backgroundColor = 'var(--text-secondary)';
                            marker.style.backgroundImage = 'none';
                        }
                    }
                    
                    const politicalSize = 16 + (poi.political_influence || 1) * 2;
                    marker.style.width = `${politicalSize}px`;
                    marker.style.height = `${politicalSize}px`;
                    break;
                }
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
                    
                    const factionKey = poi.factionId || 'unaligned';
                    const legalCode = ALL_LEGAL_CODES[factionKey];
                    const cultureInfo = getCultureForPoi(poi, map.activeMapId);

                    if (legalCode && legalCode.logo) {
                        marker.style.backgroundColor = FACTION_COLORS[factionKey] || '#444';
                        marker.style.borderColor = 'var(--accent-color)';
                        marker.style.boxShadow = '0 0 8px var(--accent-color)';
                        iconWrapper.innerHTML = ''; 
                        const logoImg = document.createElement('img');
                        logoImg.src = legalCode.logo;
                        logoImg.style.width = '100%';
                        logoImg.style.height = '100%';
                        logoImg.style.borderRadius = '50%';
                        iconWrapper.appendChild(logoImg);
                    } else {
                        marker.style.backgroundColor = cultureInfo.color;
                        iconWrapper.innerHTML = cultureInfo.icon;
                        marker.style.borderColor = 'var(--border-color)';
                        marker.style.boxShadow = 'none';
                    }
                    break;
                case 'age_of_antiquity':
                    marker.classList.add('age-view');
                    const age = poi.age_of_antiquity || 1;
                    const ageSize = 18 + age * 1.5;
                    marker.style.width = `${ageSize}px`;
                    marker.style.height = `${ageSize}px`;
                    marker.style.backgroundColor = valueToColor(age, 1, 10, ['#a8d8ea', '#f9f871']); 
                    
                    if (age <= 3) iconWrapper.innerHTML = `🏠`; 
                    else if (age <= 7) iconWrapper.innerHTML = `🏰`; 
                    else iconWrapper.innerHTML = `🏺`; 
                    
                    if (age >= 9) {
                        marker.style.boxShadow = '0 0 10px #f9f871';
                        marker.style.border = '2px solid gold';
                    }
                    break;
                 case 'crime_rate':
                    marker.classList.add('crime-view');
                    const crime = poi.crime_rate || 1;
                    const crimeSize = 16 + crime * 1.5;
                    marker.style.width = `${crimeSize}px`;
                    marker.style.height = `${crimeSize}px`;
                    marker.style.backgroundColor = valueToColor(crime, 1, 10, ['#4575b4', '#fee090', '#d73027']); 
                    
                    if (crime <= 3) iconWrapper.innerHTML = `🛡️`; 
                    else if (crime <= 7) iconWrapper.innerHTML = `⚠️`; 
                    else iconWrapper.innerHTML = `💀`; 
                    
                    if (crime >= 8) {
                        marker.style.animation = 'pulse-red-border 2s infinite';
                    }
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

function renderCodexLaws(lawData) {
    const ICONS = { political: '🏛️', military: '⚔️', economic: '💰', social: '❤️‍🩹', penal: '⚖️' };
    let html = '';
    
    ['political', 'military', 'economic', 'social', 'penal'].forEach(category => {
        if (lawData[category] && lawData[category].length > 0) {
            html += `<h4 style="margin-top:15px; border-bottom:1px solid #444;">${ICONS[category]} ${category.charAt(0).toUpperCase() + category.slice(1)} Laws</h4>`;
            lawData[category].forEach(law => {
                html += `
                    <div class="law-popup-item" style="margin-bottom:8px;">
                        <h5 style="font-size:0.95rem; color: var(--text-color);">${law.name}</h5>
                        <p style="font-size:0.85rem;">${law.description}</p>
                    </div>
                `;
            });
        }
    });
    return html;
}

function getCultureForPoi(poi, mapId) {
    const mapInfo = MAP_DATA[mapId];
    const group = mapInfo ? (mapInfo.group || 'Other') : 'Other';
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
        if (cultData.primary_species.includes(dominantSpecies)) {
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

export function showTraditionsPopup(poi) {
    const mapId = map.activeMapId;
    const landmassKey = getLandmassKey(mapId);
    const regionDisplayName = MAP_DATA[landmassKey]?.group || MAP_DATA[landmassKey]?.name || MAP_DATA[mapId]?.group || MAP_DATA[mapId]?.name;

    let title = '';
    let content = '';

    if (poi) {
        const culture = getCultureForPoi(poi, mapId);
        
        const factionId = poi.factionId || 'unaligned';
        const factionName = LORE_DATA.factions[factionId]?.name || 'Independent';
        const factionLegalCode = ALL_LEGAL_CODES[factionId];

        title = `Laws & Customs: ${poi.name}`;
        
        let factionLawsHTML = '';
        if (factionLegalCode) {
            factionLawsHTML = `
                <div class="law-popup-section" style="background: rgba(0,0,0,0.2); padding:10px; border-radius:6px; margin-bottom:15px; border-left: 4px solid var(--accent-color);">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                        <img src="${factionLegalCode.logo}" style="width:32px; height:32px;">
                        <h3 style="margin:0; font-size:1.2rem; color:var(--accent-color);">Governing Laws: ${factionName}</h3>
                    </div>
                    <p><em>${factionLegalCode.description}</em></p>
                    ${renderCodexLaws(factionLegalCode)}
                </div>
            `;
        } else {
            factionLawsHTML = `
                <div class="law-popup-section" style="padding:10px; margin-bottom:15px; border-left: 4px solid var(--text-secondary);">
                    <h3 style="margin:0; font-size:1.1rem; color:var(--text-secondary);">Governing Power: ${factionName}</h3>
                    <p><em>No codified legal system recorded. Rulership is likely informal, based on might, or adheres strictly to local tradition.</em></p>
                </div>
            `;
        }

        const cultureTraditionsHTML = renderTraditionItems(culture.traditions);
        
        let localTraditionsHTML = '';
        if (LEGAL_DATA.poi_traditions[poi.id]) {
            localTraditionsHTML = `
                <div class="law-popup-item" style="border-left: 3px solid #ffcc00; background: rgba(255, 204, 0, 0.1);">
                    <h5>📍 Local Custom</h5>
                    <p>${LEGAL_DATA.poi_traditions[poi.id].summary}</p>
                </div>
                ${renderTraditionItems(LEGAL_DATA.poi_traditions[poi.id].traditions)}
            `;
        }

        const cultureHTML = `
            <div class="law-popup-section">
                <div class="law-popup-header" style="border-bottom: 2px solid ${culture.color}; padding-bottom: 10px; margin-bottom:10px;">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div style="font-size: 1.8rem;">${culture.icon}</div>
                        <div>
                            <h4 style="color:${culture.color}; margin: 0;">Underlying Culture: ${culture.name}</h4>
                            <span style="font-size:0.8rem; color:var(--text-secondary);">Art Style: ${culture.art_style}</span>
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

        content = `<div class="law-popup-content">${factionLawsHTML}${cultureHTML}</div>`;

    } else {
        title = `General Traditions of ${regionDisplayName}`;
        const regionalKeys = LEGAL_DATA.regional_traditions[landmassKey] || [];
        content = `
            <div class="law-popup-content">
                <p>These are the overarching traditions that govern unaligned territories in this region.</p>
                <div class="law-popup-list">${renderTraditionItems(regionalKeys)}</div>
            </div>
        `;
    }

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

    const content = `<div class="law-popup-content">${renderCodexLaws(lawData)}</div>`;
    map.showMapModal(`Codex: ${lawData.name}`, content);
}


export async function showDetailPanel(poiId) {
    const poiSource = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
    const userPois = state.mapState.userPois[map.activeMapId] || [];
    const poi = [...poiSource, ...userPois].find(p => p.id === poiId);

    if (!poi) return;

    if (map.activeMapMode === 'age_of_antiquity') {
        renderHistoricalAnalysis(poi);
        return;
    }
    if (map.activeMapMode === 'crime_rate') {
        renderSecurityReport(poi);
        return;
    }
    
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

function renderHistoricalAnalysis(poi) {
    const age = poi.age_of_antiquity || 1;
    let eraName = "Modern / Recent";
    let description = "Structures built within the last century. Common architectural styles.";
    let icon = "🏠";
    
    if (age >= 4 && age <= 7) {
        eraName = "Historical / Medieval";
        description = "Dating back several centuries. Stone foundations, older dialects in inscriptions.";
        icon = "🏰";
    } else if (age >= 8) {
        eraName = "Mythic / Pre-Collapse";
        description = "Ancient ruins from a forgotten age. High magical resonance and lost technology.";
        icon = "🏺";
    }

    const discoveryChance = Math.min(100, age * 10);

    detailPanel.innerHTML = `
        <div class="poi-detail age-analysis-panel">
            <div class="age-header">
                <div class="age-icon">${icon}</div>
                <div>
                    <h3>${poi.name}</h3>
                    <span class="age-badge age-${age >= 8 ? 'mythic' : age >= 4 ? 'historical' : 'modern'}">Era: ${eraName}</span>
                </div>
            </div>
            
            <div class="age-stats">
                <p><strong>Antiquity Index:</strong> ${age}/10</p>
                <p><strong>Preservation:</strong> ${(10 - (poi.ruin_level || 0)) * 10}%</p>
                <p><strong>Artifact Potential:</strong> ${discoveryChance}%</p>
            </div>

            <p class="poi-description"><em>${description}</em></p>
            
            <div class="age-actions">
                <a href="bookshelf.html" class="control-btn">Search Archives</a>
            </div>
        </div>
    `;
}

function renderSecurityReport(poi) {
    const crime = poi.crime_rate || 1;
    let threatLevel = "Low / Safe";
    let statusColor = "var(--positive-color)";
    let advice = "Standard vigilance is sufficient.";
    let icon = "🛡️";

    if (crime >= 4 && crime <= 7) {
        threatLevel = "Medium / Caution";
        statusColor = "var(--neutral-color)";
        advice = "Travel in groups. Avoid unlit areas. Watch for pickpockets.";
        icon = "⚠️";
    } else if (crime >= 8) {
        threatLevel = "Extreme / Lawless";
        statusColor = "var(--negative-color)";
        advice = "Do not travel alone. Weapons free. Expect ambush.";
        icon = "💀";
    }

    const bountyHTML = crime >= 6 ? 
        `<div class="bounty-alert">
            <strong>WANTED:</strong> Local syndicates active. Bounties available for high-value targets.
            <a href="quests.html" class="control-btn negative">View Bounties</a>
         </div>` : '';

    detailPanel.innerHTML = `
        <div class="poi-detail security-report-panel">
            <div class="security-header" style="border-left: 4px solid ${statusColor};">
                <h3>${poi.name}</h3>
                <p class="security-status" style="color:${statusColor}">${icon} Threat Level: ${threatLevel}</p>
            </div>

            <div class="security-stats">
                <p><strong>Crime Index:</strong> ${crime}/10</p>
                <p><strong>Law Enforcement:</strong> ${10 - crime}/10</p>
            </div>

            <p class="poi-description"><strong>Advisory:</strong> ${advice}</p>
            
            ${bountyHTML}
        </div>
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
        const statusText = journey.status || 'Arrived at Imperial Capital';
        const progressPercent = Math.min(100, Math.round((journey.currentDay / journey.totalDays) * 100));
        
        let journeyInfoHTML;
        if (progressPercent >= 100) {
            journeyInfoHTML = `<div class="tactical-stat"><strong>Journey Progress:</strong> Complete</div>`;
        } else {
            const timeRemainingText = journey.daysRemaining > 0 ? `${journey.daysRemaining} days` : 'Arriving soon';
            journeyInfoHTML = `
                <div class="tactical-stat"><strong>Journey Progress:</strong> Day ${journey.currentDay} of ${journey.totalDays}
                    <div class="tooltip-bar-container"><div class="tooltip-bar status-bar-medium" style="width: ${progressPercent}%"></div></div>
                </div>
                <p><strong>Time Remaining:</strong> ${timeRemainingText}</p>
            `;
        }

        html = `
            <div class="tactical-detail-panel">
                <h3>The 'Vigilance'</h3>
                <p class="tactical-faction">
                    <img src="newspaper_airship.png" alt="Vigilance">
                    Unaligned (Party Controlled)
                </p>
                <div class="tactical-info">
                    <p><strong>Status:</strong> ${statusText}</p>
                    ${journeyInfoHTML}
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
            const provinceDataForLegend = PROVINCE_POLITICS[map.activeMapId];
            if (provinceDataForLegend && map.activePoliticalSubmode === 'province' && !map.isEditMode) {
                const visibleFactions = new Set();
                Object.values(provinceDataForLegend).forEach(province => {
                    Object.keys(province.control).forEach(factionId => visibleFactions.add(factionId));
                });
                const sortedFactions = [...visibleFactions].sort((a, b) => {
                    const nameA = LORE_DATA.factions[a]?.name || a;
                    const nameB = LORE_DATA.factions[b]?.name || b;
                    return nameA.localeCompare(nameB);
                });

                legendHTML = `
                    <div class="map-mode-legend">
                        <h4>Provincial Control</h4>
                        <p>Pie charts represent faction control over a province. Size indicates total influence. Click a chart for details.</p>
                        ${sortedFactions.length > 0 ? `
                        <ul class="legend-list">
                            ${sortedFactions.map(factionId => {
                                const faction = LORE_DATA.factions[factionId];
                                return `
                                    <li class="legend-item">
                                        <div class="legend-color-box" style="background-color: ${FACTION_COLORS[factionId] || '#ccc'};"></div>
                                        <span>${faction?.name || 'Unknown Faction'}</span>
                                    </li>
                                `;
                            }).join('')}
                        </ul>
                        ` : ''}
                    </div>
                `;
            } else {
                 const visibleFactions = [...new Set(currentPois.map(p => p.factionId).filter(id => id && FACTION_COLORS[id]))];
                const sortedFactions = visibleFactions.sort((a, b) => (LORE_DATA.factions[a]?.name || '').localeCompare(LORE_DATA.factions[b]?.name || ''));
                legendHTML = `
                    <div class="map-mode-legend">
                        <h4>Political View</h4>
                        <p>Locations are colored by their controlling faction. Size indicates political influence.</p>
                        ${sortedFactions.length > 0 ? `<ul class="legend-list">${sortedFactions.map(factionId => `<li class="legend-item"><div class="legend-color-box" style="background-image: url(${LORE_DATA.factions[factionId]?.logo}); background-size: cover;"></div><span>${LORE_DATA.factions[factionId]?.name || 'Unknown'}</span></li>`).join('')}</ul>` : `<p class="panel-placeholder">No politically aligned factions in current view.</p>`}
                    </div>
                `;
            }
            break;
        case 'economic':
            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Economic View</h4>
                    <p>Locations are sized by their relative economic value. Higher numbers and larger icons indicate greater economic importance, such as major trade hubs, resource-rich areas, or centers of production.</p>
                </div>
            `;
            break;
        case 'military':
             legendHTML = `
                <div class="map-mode-legend">
                    <h4>Military View</h4>
                    <p>Locations are sized by their relative military strength. Higher numbers and larger icons indicate significant strategic value, such as fortresses, garrisons, or major chokepoints.</p>
                </div>
            `;
            break;
        case 'population':
            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Population Density</h4>
                    <p>Locations are colored and sized based on estimated population. Larger, warmer-colored circles indicate major population centers.</p>
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
            break;
        case 'laws':
            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Laws & Customs</h4>
                    <p>Locations are marked with icons representing their dominant cultural sphere. Click any POI for a detailed breakdown of its governing laws and local traditions. Click the map background for regional customs.</p>
                    <button class="control-btn" onclick="renderer.showTraditionsPopup(null)">View Regional Customs</button>
                </div>
            `;
            break;
        case 'age_of_antiquity':
            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Age of Antiquity</h4>
                    <p>Locations are colored and sized by their historical age. Yellow, larger icons represent ancient or mythic locations, which have a higher chance of containing rare artifacts or secrets.</p>
                    <ul class="legend-list">
                        <li class="legend-item"><div class="legend-color-box" style="background: linear-gradient(to right, #a8d8ea, #f9f871);"></div><span>Modern to Mythic</span></li>
                    </ul>
                    <h5>Icons</h5>
                    <ul class="legend-list">
                        <li class="legend-item"><span>🏺 Mythic / Pre-Collapse</span></li>
                        <li class="legend-item"><span>🏰 Historical / Medieval</span></li>
                        <li class="legend-item"><span>🏠 Modern / Recent</span></li>
                    </ul>
                </div>
            `;
            break;
        case 'crime_rate':
            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Security Assessment</h4>
                    <p>Locations are colored by their crime index. Red, larger icons indicate lawless areas with active criminal elements, while blue, smaller icons are safe, well-policed regions.</p>
                    <ul class="legend-list">
                        <li class="legend-item"><div class="legend-color-box" style="background: linear-gradient(to right, #4575b4, #fee090, #d73027);"></div><span>Safe to Lawless</span></li>
                    </ul>
                    <h5>Icons</h5>
                    <ul class="legend-list">
                        <li class="legend-item"><span>💀 Extreme / Lawless</span></li>
                        <li class="legend-item"><span>⚠️ Medium / Caution</span></li>
                        <li class="legend-item"><span>🛡️ Low / Safe</span></li>
                    </ul>
                </div>
            `;
            break;
        case 'tactical':
            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Tactical Overview</h4>
                    <p>Displays active military units and fronts. Click any unit for a detailed status report.</p>
                    <h5>Unit Types</h5>
                    <ul class="legend-list">
                        <li class="legend-item"><div class="troop-marker-legend unit-type-main_force"><div class="unit-type-icon">${getUnitIcon('main_force')}</div></div><span>Main Force</span></li>
                        <li class="legend-item"><div class="troop-marker-legend unit-type-garrison"><div class="unit-type-icon">${getUnitIcon('garrison')}</div></div><span>Garrison</span></li>
                        <li class="legend-item"><div class="troop-marker-legend unit-type-patrol" style="transform: rotate(45deg);"><div class="unit-type-icon" style="transform: rotate(-45deg);">${getUnitIcon('patrol')}</div></div><span>Patrol</span></li>
                        <li class="legend-item"><div class="troop-marker-legend unit-type-special_ops"><div class="unit-type-icon">${getUnitIcon('special_ops')}</div></div><span>Special Ops</span></li>
                        <li class="legend-item"><div class="troop-marker-legend unit-type-ambush"><div class="unit-type-icon">${getUnitIcon('ambush')}</div></div><span>Ambush / Hidden</span></li>
                    </ul>
                    <h5>Map Features</h5>
                    <ul class="legend-list">
                        <li class="legend-item"><div class="front-line-legend"></div><span>Contested Front Line</span></li>
                        <li class="legend-item"><div class="patrol-path-legend"></div><span>Patrol Route</span></li>
                        <li class="legend-item"><div class="vigilance-marker-legend"></div><span>The 'Vigilance'</span></li>
                        <li class="legend-item"><div class="vigilance-path-legend"></div><span>Vigilance's Path</span></li>
                    </ul>
                </div>
            `;
            break;
        case 'party':
            legendHTML = `
                <div class="map-mode-legend">
                    <h4>Party Locations</h4>
                    <p>Shows the last known location of key party members and allies. Click a marker for status.</p>
                    <h5>Legend</h5>
                    <ul class="legend-list">
                        <li class="legend-item"><div class="party-marker-legend" style="border-color: var(--accent-color);"></div><span>Standard</span></li>
                        <li class="legend-item"><div class="party-marker-legend" style="border-color: var(--negative-color);"></div><span>Trapped / In Combat</span></li>
                        <li class="legend-item"><div class="party-marker-legend" style="border-color: var(--text-secondary); filter: grayscale(0.8);"></div><span>Captured / MIA</span></li>
                        <li class="legend-item"><div class="party-group-marker" style="width: 24px; height: 24px; font-size: 12px; background-color: var(--accent-color); color: white; display:flex; align-items:center; justify-content:center;">#</div><span>Grouped Characters</span></li>
                    </ul>
                </div>
            `;
            break;
        default:
             legendHTML = `<p class="panel-placeholder">Select a point of interest for details.</p>`;
            break;
    }
    
    detailPanel.innerHTML = legendHTML;
}

export function renderDrawingPreview(points) {
    const drawingSvg = document.getElementById('map-drawing-svg');
    if (!drawingSvg) return;
    drawingSvg.innerHTML = ''; // Clear

    // Render lines
    if (points.length > 1) {
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        const pointsString = points.map(p => `${p.x},${p.y}`).join(' ');
        polyline.setAttribute('points', pointsString);
        polyline.classList.add('draw-line');
        drawingSvg.appendChild(polyline);
    }

    // Render points
    points.forEach(p => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', p.x);
        circle.setAttribute('cy', p.y);
        circle.setAttribute('r', 1.5);
        circle.classList.add('draw-point');
        drawingSvg.appendChild(circle);
    });
    
    // Close loop preview
    if (points.length > 2) {
        const closingLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        closingLine.setAttribute('x1', points[points.length - 1].x);
        closingLine.setAttribute('y1', points[points.length - 1].y);
        closingLine.setAttribute('x2', points[0].x);
        closingLine.setAttribute('y2', points[0].y);
        closingLine.classList.add('draw-line');
        closingLine.style.strokeDasharray = "2, 2";
        drawingSvg.appendChild(closingLine);
    }
}