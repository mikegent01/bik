import { BATTLE_MAP_DATA } from './map-battle-data.js';
import { LORE_DATA } from './lore.js';
import { FACTION_COLORS } from './factions/faction-colors.js';
import * as map from './maps.js';
import * as ui from './map-ui.js';
import { hasSufficientIntel } from './map-utils.js';

export function getUnitIcon(unitType) {
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

function renderVigilance(container, svg) {
    const journey = BATTLE_MAP_DATA.vigilance_journey;
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', journey.path);
    path.classList.add('vigilance-path');
    svg.appendChild(path);

    // Calculate position
    const pathElForLength = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElForLength.setAttribute('d', journey.path);
    const pathLength = pathElForLength.getTotalLength();
    const progress = journey.currentDay / journey.totalDays;
    const currentPoint = pathElForLength.getPointAtLength(pathLength * progress);

    const marker = document.createElement('div');
    marker.className = 'vigilance-marker';
    marker.style.left = `${currentPoint.x}%`;
    marker.style.top = `${currentPoint.y}%`;
    marker.title = "The 'Vigilance'";
    marker.dataset.vigilanceId = 'vigilance';
    
    const label = document.createElement('div');
    label.className = 'vigilance-label';
    label.textContent = `${journey.daysRemaining} days to Capital`;
    marker.appendChild(label);
    
    container.appendChild(marker);
}

export function renderBattleElements(mapId) {
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

    // Render Front Lines
    const frontLines = BATTLE_MAP_DATA.front_lines.filter(fl => fl.mapId === mapId);
    frontLines.forEach(fl => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        line.setAttribute('points', fl.points);
        line.classList.add('front-line', 'clickable-tactical');
        line.addEventListener('click', () => {
            map.playSound('click.mp3');
            ui.renderTacticalDetailPanel(fl.id, 'frontline');
        });
        svg.appendChild(line);
    });

    // Render Vigilance Journey
    if (BATTLE_MAP_DATA.vigilance_journey.mapId === mapId) {
        renderVigilance(interactiveLayer, svg);
    }

    // Render Troop Deployments
    const troopsOnThisMap = BATTLE_MAP_DATA.troop_deployments.filter(t => t.mapId === mapId);
    troopsOnThisMap.forEach(troop => {
        const faction = LORE_DATA.factions[troop.factionId];
        
        // Render Patrol Path
        if (troop.unitType === 'patrol' && troop.path) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', troop.path);
            path.classList.add('patrol-path');
            if (faction) {
                path.style.stroke = FACTION_COLORS[troop.factionId] || 'white';
            }
            svg.appendChild(path);
        }

        // Render Troop Marker
        const troopMarker = document.createElement('div');
        troopMarker.className = `troop-marker unit-type-${troop.unitType}`;
        if (troop.battlefront) troopMarker.classList.add('battlefront');
        troopMarker.style.left = `${troop.x}%`;
        troopMarker.style.top = `${troop.y}%`;
        troopMarker.dataset.troopId = troop.id;
        
        if (faction) {
            troopMarker.style.borderColor = FACTION_COLORS[troop.factionId] || 'white';
        } else {
            troopMarker.style.borderColor = 'grey'; // Fallback for unknown factions
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
            ui.showTooltip(e, tooltipContent);
        });
        troopMarker.addEventListener('mouseout', ui.hideTooltip);
        
        interactiveLayer.appendChild(troopMarker);
    });
}
