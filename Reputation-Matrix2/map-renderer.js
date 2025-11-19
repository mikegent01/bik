
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

// --- CONSTANTS & HELPERS ---

const TRADE_GOODS = {
    mine: [ {n:'Iron Ore', i:'🔩'}, {n:'Gold', i:'⚱️'}, {n:'Coal', i:'⚫'}, {n:'Gems', i:'💎'}, {n:'Mithril', i:'✨'} ],
    quarry: [ {n:'Stone', i:'🪨'}, {n:'Marble', i:'🏛️'}, {n:'Obsidian', i:'⬛'} ],
    forest: [ {n:'Timber', i:'🪵'}, {n:'Rare Herbs', i:'🌿'}, {n:'Furs', i:'🦊'}, {n:'Wild Game', i:'🍖'} ],
    farm: [ {n:'Grain', i:'🌾'}, {n:'Livestock', i:'🐄'}, {n:'Cotton', i:'☁️'}, {n:'Produce', i:'🍎'} ],
    oasis: [ {n:'Fresh Water', i:'💧'}, {n:'Dates', i:'🌴'} ],
    swamp: [ {n:'Peat', i:'🟫'}, {n:'Alchemical Slime', i:'🧪'}, {n:'Rare Fungi', i:'🍄'} ],
    volcano: [ {n:'Sulfur', i:'🌋'}, {n:'Obsidian', i:'⬛'}, {n:'Fire Salts', i:'🔥'} ],
    workshop: [ {n:'Tools', i:'🔨'}, {n:'Weapons', i:'⚔️'}, {n:'Magitek Parts', i:'⚙️'}, {n:'Armor', i:'🛡️'} ],
    forge: [ {n:'Steel', i:'⛓️'}, {n:'Weapons', i:'⚔️'} ],
    mill: [ {n:'Flour', i:'🍞'}, {n:'Lumber', i:'🪵'} ],
    port: [ {n:'Spices', i:'🌶️'}, {n:'Silk', i:'🧣'}, {n:'Exotic Goods', i:'🏺'}, {n:'Seafood', i:'🐟'} ],
    market: [ {n:'Luxury Goods', i:'💍'}, {n:'Textiles', i:'🧵'}, {n:'Pottery', i:'🏺'} ],
    trade_post: [ {n:'Supplies', i:'📦'}, {n:'Maps', i:'🗺️'} ],
    capital_city: [ {n:'Banking', i:'💰'}, {n:'Fine Art', i:'🖼️'}, {n:'Jewelry', i:'👑'} ],
    major_city: [ {n:'Finance', i:'🪙'}, {n:'Manufacturing', i:'🏭'} ],
    academy: [ {n:'Books', i:'📚'}, {n:'Scrolls', i:'📜'}, {n:'Artifacts', i:'🏺'} ],
    mages_tower: [ {n:'Potions', i:'⚗️'}, {n:'Enchantments', i:'✨'}, {n:'Mana Crystals', i:'💎'} ],
    temple: [ {n:'Incense', i:'🕯️'}, {n:'Holy Water', i:'💧'}, {n:'Relics', i:'⚱️'} ],
    default: [ {n:'Supplies', i:'📦'}, {n:'Labor', i:'💪'} ]
};

function getTradeInfo(poi) {
    let hash = 0;
    for (let i = 0; i < poi.id.length; i++) {
        hash = poi.id.charCodeAt(i) + ((hash << 5) - hash);
    }
    const typeKey = TRADE_GOODS[poi.type] ? poi.type : 'default';
    const goodsList = TRADE_GOODS[typeKey];
    const good = goodsList[Math.abs(hash) % goodsList.length];
    const econScore = poi.economic_value || 1;
    let tier = "Local Producer";
    if (econScore >= 9) tier = "Global Trade Hub";
    else if (econScore >= 7) tier = "Regional Center";
    else if (econScore >= 4) tier = "Major Producer";
    return { ...good, tier };
}

function getAssociatedGuilds(tradeGoodName, factionId) {
    const guilds = [];
    const good = tradeGoodName.toLowerCase();
    if (good.includes('iron') || good.includes('steel') || good.includes('weapon')) guilds.push("Iron Legion Quartermasters");
    if (good.includes('magitek') || good.includes('crystal') || good.includes('potion')) guilds.push("Mages' Guild");
    if (good.includes('spice') || good.includes('silk') || good.includes('luxury')) guilds.push("Merchant Princes");
    if (good.includes('herb') || good.includes('fungi')) guilds.push("Alchemists' Union");
    if (factionId === 'freelancer_underworld') guilds.push("The Shadow Syndicate");
    if (guilds.length === 0) guilds.push("Local Merchants");
    return guilds.join(", ");
}

function getPartyCharacterData(charKey) {
    return LORE_DATA.characters[charKey] 
        || LORE_DATA.auxiliary_party[charKey] 
        || { name: charKey.replace(/_/g, ' '), portrait: `portraits/${charKey}.png`, role: 'Unknown' };
}

function hasSufficientIntel(requirement) {
    if (!requirement) return true;
    if (state.debugMode) return true;
    if (typeof requirement === 'number') {
        return true; // Simplified for brevity, ideally check regional intel
    }
    if (typeof requirement === 'object' && requirement.faction && typeof requirement.level === 'number') {
        return getIntelForFaction(requirement.faction) >= requirement.level;
    }
    return true;
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

function getCompatibleMapIds(mapId) {
    const currentData = MAP_DATA[mapId];
    if (!currentData) return [mapId];
    if (!currentData.imageSrc) return [mapId];
    return Object.keys(MAP_DATA).filter(k => 
        MAP_DATA[k].imageSrc === currentData.imageSrc
    );
}

function getPopulationColor(population) {
    if (population <= 50) return '#4575b4';
    if (population <= 500) return '#91bfdb';
    if (population <= 2000) return '#e0f3f8';
    if (population <= 5000) return '#fee090';
    if (population <= 10000) return '#fdae61';
    return '#f46d43';
}

// --- TOOLTIP LOGIC ---

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
    
    // Ensure coordinates are relative to the display area
    let x = e.clientX - rect.left + 15;
    let y = e.clientY - rect.top + 15;

    // Boundary checks
    if (x + tooltip.offsetWidth > rect.width) x -= (tooltip.offsetWidth + 30);
    if (y + tooltip.offsetHeight > rect.height) y -= (tooltip.offsetHeight + 30);

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function hideTooltip() {
    if (tooltip) tooltip.classList.remove('visible');
}


// --- MAIN RENDERER ---

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

    // Create Zoom Wrapper
    const zoomWrapper = document.createElement('div');
    zoomWrapper.id = 'map-zoom-wrapper';

    // Create Image
    const mapImage = document.createElement('img');
    mapImage.id = 'map-image';
    mapImage.src = mapData.imageSrc;
    zoomWrapper.appendChild(mapImage);
    
    displayArea.appendChild(zoomWrapper);

    // Wait for image to load to set up overlay dimensions
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

        // Unified Interactive Layer
        const interactiveLayer = document.createElement('div');
        interactiveLayer.id = 'interactive-map-layer';
        interactiveLayer.style.position = 'absolute';
        interactiveLayer.style.width = `${renderedWidth}px`;
        interactiveLayer.style.height = `${renderedHeight}px`;
        interactiveLayer.style.top = `${top}px`;
        interactiveLayer.style.left = `${left}px`;
        zoomWrapper.appendChild(interactiveLayer);

        map.setRenderedMapDimensions({ width: renderedWidth, height: renderedHeight });

        // Create Unified SVG Layer for vector graphics (Fog, Lines, Paths)
        const svgLayer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgLayer.id = 'map-vector-layer';
        svgLayer.setAttribute('viewBox', '0 0 100 100');
        svgLayer.setAttribute('preserveAspectRatio', 'none');
        svgLayer.style.position = 'absolute';
        svgLayer.style.width = '100%';
        svgLayer.style.height = '100%';
        svgLayer.style.pointerEvents = 'none'; // Allow clicks to pass through empty areas
        svgLayer.style.zIndex = '1'; 
        interactiveLayer.appendChild(svgLayer);

        // --- Render Layers ---
        renderFogLayer(svgLayer);
        
        // Tactical mode renders lines into SVG and markers into DOM
        if (map.activeMapMode === 'tactical') {
            renderTacticalLayer(mapId, interactiveLayer, svgLayer);
        }

        renderPoisLayer(interactiveLayer);
        renderPartyLayer(mapId, interactiveLayer, svgLayer);

        if (map.isEditMode) {
            // Dedicated drawing layer for editor to prevent clearing game elements
            const drawingSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            drawingSvg.id = 'map-drawing-svg';
            drawingSvg.setAttribute('viewBox', '0 0 100 100');
            drawingSvg.setAttribute('preserveAspectRatio', 'none');
            drawingSvg.style.zIndex = '50';
            interactiveLayer.appendChild(drawingSvg);
        }
    };

    renderMapModeLegend();
    resetTransform();
}

// --- LAYER RENDERERS ---

function renderFogLayer(svgContainer) {
    const fogSource = map.isEditMode ? map.editSessionData.fogs : (MAP_DATA[map.activeMapId]?.fogOfWar || []);
    
    const fragment = document.createDocumentFragment();
    fogSource.forEach(fog => {
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', fog.points);
        polygon.id = fog.id;
        polygon.style.pointerEvents = map.isEditMode ? 'all' : 'none'; // Only clickable in edit mode
        
        if (state.mapState.discoveredFogs.includes(fog.id)) {
            polygon.classList.add('discovered');
        }
        fragment.appendChild(polygon);
    });
    svgContainer.appendChild(fragment);
}

function renderPoisLayer(container) {
    // Clear existing markers (but not the SVG layer)
    container.querySelectorAll('.poi-marker, .province-marker').forEach(el => el.remove());

    // Political - Province View
    const provinceData = PROVINCE_POLITICS[map.activeMapId];
    if (map.activeMapMode === 'political' && provinceData && map.activePoliticalSubmode === 'province' && !map.isEditMode) {
        renderProvinces(container, provinceData);
        return;
    }

    // Standard POI View
    const poiSource = map.isEditMode ? map.editSessionData.pois : (MAP_DATA[map.activeMapId]?.pointsOfInterest || []);
    const visiblePois = poiSource.filter(poi => map.isEditMode || hasSufficientIntel(poi));
    
    const fragment = document.createDocumentFragment();
    
    visiblePois.forEach(poi => {
        const marker = document.createElement('div');
        marker.className = 'poi-marker';
        marker.style.left = `${poi.x}%`;
        marker.style.top = `${poi.y}%`;
        marker.dataset.poiId = poi.id;
        
        // Apply Mode Styling
        applyPoiStyle(marker, poi);
        
        // Edit Mode
        if (map.isEditMode) {
            marker.draggable = true;
            marker.classList.add('draggable-poi');
        }

        // Request Indicator
        const hasRequest = Object.values(QUEST_DATA).some(q => q.locationId === poi.id && q.status === 'available');
        if (hasRequest && !map.isEditMode) {
            const ind = document.createElement('div');
            ind.className = 'poi-request-indicator';
            ind.textContent = '!';
            marker.appendChild(ind);
        }

        fragment.appendChild(marker);
    });
    
    container.appendChild(fragment);
}

function applyPoiStyle(marker, poi) {
    marker.className = 'poi-marker'; // Reset
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'icon-wrapper';
    marker.innerHTML = '';
    marker.appendChild(iconWrapper);

    if (map.activeMapMode === 'tactical') {
        marker.style.opacity = '0.5';
        marker.style.width = '14px';
        marker.style.height = '14px';
        iconWrapper.innerHTML = ''; // Minimalist in tactical mode
        return;
    }

    marker.style.opacity = '1';
    
    switch (map.activeMapMode) {
        case 'political':
            marker.classList.add('political-view');
            const faction = LORE_DATA.factions[poi.factionId];
            if (faction?.logo) {
                marker.style.backgroundImage = `url(${faction.logo})`;
                marker.style.backgroundSize = 'cover';
            } else {
                marker.style.backgroundColor = '#555';
            }
            const pSize = 16 + (poi.political_influence || 1) * 2;
            marker.style.width = `${pSize}px`;
            marker.style.height = `${pSize}px`;
            break;
            
        case 'economic':
            marker.classList.add('economic-view');
            const trade = getTradeInfo(poi);
            const ecoVal = poi.economic_value || 1;
            const eSize = 18 + ecoVal * 1.5;
            marker.style.width = `${eSize}px`;
            marker.style.height = `${eSize}px`;
            iconWrapper.innerHTML = trade.i;
            marker.style.borderColor = ecoVal >= 7 ? '#FFD700' : (ecoVal >= 4 ? '#C0C0C0' : '#cd7f32');
            
            marker.addEventListener('mouseenter', (e) => {
                 const guilds = getAssociatedGuilds(trade.n, poi.factionId);
                 showTooltip(e, `<div class="tooltip-header"><h5>${poi.name}</h5></div><div class="tooltip-section"><p><strong>Export:</strong> ${trade.i} ${trade.n}</p><p><strong>Wealth:</strong> ${ecoVal}/10</p><p><strong>Guilds:</strong> ${guilds}</p></div>`);
            });
            marker.addEventListener('mouseleave', hideTooltip);
            break;
            
        case 'military':
            marker.classList.add('military-view');
            const mSize = 16 + (poi.military_strength || 1) * 2;
            marker.style.width = `${mSize}px`;
            marker.style.height = `${mSize}px`;
            iconWrapper.innerHTML = poi.military_strength || '?';
            
            marker.addEventListener('mouseenter', (e) => {
                showTooltip(e, `<div class="tooltip-header"><h5>${poi.name}</h5></div><div class="tooltip-section"><p><strong>Strength:</strong> ${poi.military_strength}/10</p><p><strong>Defensibility:</strong> High</p></div>`);
            });
            marker.addEventListener('mouseleave', hideTooltip);
            break;
            
        case 'population':
            marker.classList.add('population-view');
            const popSize = 12 + Math.log2(Math.max(1, poi.population || 1)) * 2.5;
            marker.style.width = `${popSize}px`;
            marker.style.height = `${popSize}px`;
            marker.style.backgroundColor = getPopulationColor(poi.population || 0);
            
            marker.addEventListener('mouseenter', (e) => {
                 showTooltip(e, `<div class="tooltip-header"><h5>${poi.name}</h5></div><div class="tooltip-section"><p><strong>Pop:</strong> ${(poi.population || 0).toLocaleString()}</p></div>`);
            });
            marker.addEventListener('mouseleave', hideTooltip);
            break;

        case 'laws':
            marker.classList.add('laws-view');
            const culture = getCultureForPoi(poi, map.activeMapId);
            
            let lawIcon = culture.icon || '⚖️';
            let lawColor = culture.color || '#fff';
            let lawName = culture.name;
            let lawDesc = culture.description;

            // Check for specific POI traditions (High Priority)
            if (LEGAL_DATA.poi_traditions && LEGAL_DATA.poi_traditions[poi.id]) {
                lawIcon = '📍'; 
                lawColor = '#ffcc00'; // distinct highlight
                lawName = "Local Customs";
                lawDesc = LEGAL_DATA.poi_traditions[poi.id].summary;
            } 
            // Check for Faction-Specific Legal Codes (Medium Priority)
            else if (poi.factionId && ALL_LEGAL_CODES[poi.factionId]) {
                 // Use Culture Icon but with Faction Color to denote influence
                 lawName = ALL_LEGAL_CODES[poi.factionId].name;
                 // Try to find a matching color in CSS variables or default
                 // Using culture icon preserves the "underlying culture" visual while tooltip shows law
            }

            iconWrapper.innerHTML = lawIcon;
            marker.style.borderColor = lawColor;
            marker.style.color = lawColor;
            marker.style.width = '26px';
            marker.style.height = '26px';
            marker.style.backgroundColor = 'rgba(13, 17, 23, 0.8)';
            marker.style.fontSize = '14px';
            marker.style.borderRadius = '50%';
            
            marker.addEventListener('mouseenter', (e) => {
                showTooltip(e, `
                    <div class="tooltip-header">
                        <span style="font-size:1.5rem; margin-right:8px;">${lawIcon}</span> 
                        <h5 style="color:${lawColor}">${lawName}</h5>
                    </div>
                    <div class="tooltip-section">
                         <p style="font-size:0.85rem; font-style:italic;">"${lawDesc}"</p>
                        <p><strong>Underlying Culture:</strong> ${culture.name}</p>
                    </div>
                `);
            });
            marker.addEventListener('mouseleave', hideTooltip);
            break;

        case 'age_of_antiquity':
            marker.classList.add('age-view');
            const age = poi.age_of_antiquity || 1;
            let ageIcon = '🏠'; 
            let ageColor = '#a8d8ea'; 
            let ageLabel = "Modern";

            if (age >= 9) {
                ageIcon = '🏺'; // Ancient/Mythic
                ageColor = '#f9f871'; 
                ageLabel = "Mythic Era";
            } else if (age >= 5) {
                ageIcon = '🏰'; // Historical
                ageColor = '#d4eac8'; 
                ageLabel = "Historical";
            }

            iconWrapper.innerHTML = ageIcon;
            marker.style.backgroundColor = ageColor;
            marker.style.borderColor = '#fff';
            marker.style.width = '24px';
            marker.style.height = '24px';
            marker.style.fontSize = '14px';
            marker.style.color = '#000'; 
            marker.style.borderRadius = '6px';

             marker.addEventListener('mouseenter', (e) => {
                 showTooltip(e, `<div class="tooltip-header"><h5>${poi.name}</h5></div><div class="tooltip-section"><p><strong>Age Rating:</strong> ${age}/10 (${ageLabel})</p></div>`);
            });
            marker.addEventListener('mouseleave', hideTooltip);
            break;

        case 'crime_rate':
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
            marker.style.backgroundColor = crimeColor;
            marker.style.width = '24px';
            marker.style.height = '24px';
            marker.style.fontSize = '14px';
            marker.style.borderRadius = '50%';
            marker.style.border = '2px solid white';
            
             marker.addEventListener('mouseenter', (e) => {
                 showTooltip(e, `<div class="tooltip-header"><h5>${poi.name}</h5></div><div class="tooltip-section"><p><strong>Security Status:</strong> ${crime}/10 (${crimeLabel})</p></div>`);
            });
            marker.addEventListener('mouseleave', hideTooltip);
            break;

        default: // Standard
            iconWrapper.innerHTML = BUILDING_TYPES[poi.type]?.icon || '❓';
            marker.style.width = '20px';
            marker.style.height = '20px';
            break;
    }
}

function renderProvinces(container, provinceData) {
    const fragment = document.createDocumentFragment();
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
        
        fragment.appendChild(marker);
    });
    container.appendChild(fragment);
}


function renderTacticalLayer(mapId, domContainer, svgContainer) {
    // 1. Get Compatible Maps (same image source)
    const compatibleIds = getCompatibleMapIds(mapId);
    
    // 2. Render Front Lines (SVG)
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

    // 3. Render Patrol Paths (SVG)
    const troops = BATTLE_MAP_DATA.troop_deployments.filter(t => compatibleIds.includes(t.mapId));
    troops.forEach(troop => {
        if (troop.unitType === 'patrol' && troop.path) {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', troop.path);
            path.classList.add('patrol-path');
            const faction = LORE_DATA.factions[troop.factionId];
            if (faction) path.style.stroke = FACTION_COLORS[troop.factionId] || 'white';
            svgFragment.appendChild(path);
        }
        // Zone of Control
        if (troop.strength_val && (troop.unitType === 'main_force' || troop.unitType === 'garrison')) {
            const zone = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            zone.setAttribute('cx', troop.x);
            zone.setAttribute('cy', troop.y);
            zone.setAttribute('r', `${troop.strength_val / 50}%`);
            zone.classList.add('zone-of-control');
            zone.style.fill = FACTION_COLORS[troop.factionId] || 'white';
            svgFragment.appendChild(zone);
        }
    });
    svgContainer.appendChild(svgFragment);

    // 4. Render Troop Markers (DOM)
    const domFragment = document.createDocumentFragment();
    troops.forEach(troop => {
        const faction = LORE_DATA.factions[troop.factionId];
        const marker = document.createElement('div');
        marker.className = `troop-marker unit-type-${troop.unitType}`;
        if (troop.battlefront) marker.classList.add('battlefront');
        marker.style.left = `${troop.x}%`;
        marker.style.top = `${troop.y}%`;
        marker.dataset.troopId = troop.id;
        
        const color = faction ? (FACTION_COLORS[troop.factionId] || 'white') : 'grey';
        marker.style.borderColor = color;
        marker.style.backgroundColor = faction ? hexToRgba(color, 0.4) : 'rgba(100,100,100,0.4)';
        
        marker.innerHTML = `<div class="unit-type-icon">${getUnitIcon(troop.unitType)}</div>`;
        if (troop.unitType === 'patrol') {
             marker.querySelector('.unit-type-icon').style.transform = 'rotate(-45deg)';
        }

        marker.addEventListener('click', (e) => {
            e.stopPropagation();
            playSound('click.mp3');
            renderTacticalDetailPanel(troop.id, 'troop');
        });
        
        domFragment.appendChild(marker);
    });
    
    domContainer.appendChild(domFragment);
}

function renderPartyLayer(mapId, domContainer, svgContainer) {
    if (map.isEditMode || !map.showPartyMarkers) return;

    const compatibleIds = getCompatibleMapIds(mapId);
    
    // 1. Render Vigilance (if present)
    if (compatibleIds.includes(BATTLE_MAP_DATA.vigilance_journey.mapId)) {
        const journey = BATTLE_MAP_DATA.vigilance_journey;
        // Path in SVG
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', journey.path || ""); // Added fallback
        path.classList.add('vigilance-path');
        svgContainer.appendChild(path);

        // Marker in DOM
        const marker = document.createElement('div');
        marker.className = 'vigilance-marker';
        marker.style.left = `${journey.x}%`;
        marker.style.top = `${journey.y}%`;
        marker.dataset.vigilanceId = 'vigilance';
        marker.addEventListener('click', (e) => {
            e.stopPropagation();
            renderTacticalDetailPanel('vigilance', 'vigilance');
        });
        domContainer.appendChild(marker);
    }

    // 2. Render Party Members
    let members = [];
    compatibleIds.forEach(id => {
        if (PARTY_LOCATIONS[id]) members = members.concat(PARTY_LOCATIONS[id]);
    });

    if (members.length === 0) return;

    // Cluster logic
    const clusters = [];
    const threshold = 2.0; 
    members.forEach(member => {
        let added = false;
        for (let c of clusters) {
            if (Math.hypot(member.x - c.x, member.y - c.y) < threshold) {
                c.members.push(member);
                added = true;
                break;
            }
        }
        if (!added) clusters.push({ x: member.x, y: member.y, members: [member] });
    });

    const fragment = document.createDocumentFragment();
    clusters.forEach(cluster => {
        const marker = document.createElement('div');
        marker.className = 'party-marker';
        marker.style.left = `${cluster.x}%`;
        marker.style.top = `${cluster.y}%`;
        marker.style.zIndex = '100';

        if (cluster.members.length > 1) {
            marker.classList.add('party-group-marker');
            marker.textContent = cluster.members.length;
            marker.title = `${cluster.members.length} Characters`;
            marker.addEventListener('click', (e) => {
                e.stopPropagation();
                renderPartyGroupDetail(cluster.members);
            });
        } else {
            const member = cluster.members[0];
            const charData = getPartyCharacterData(member.charKey);
            marker.dataset.charKey = member.charKey;
            marker.classList.add(`status-${member.status.toLowerCase().replace(/ /g, '-')}`);
            marker.style.backgroundImage = `url('${charData.portrait}')`;
            marker.addEventListener('click', (e) => {
                e.stopPropagation();
                renderPartyMemberDetail(member.charKey, member.status);
            });
        }
        fragment.appendChild(marker);
    });
    domContainer.appendChild(fragment);
}


// --- DETAIL PANEL RENDERERS ---

export function renderTacticalDetailPanel(itemId, itemType) {
    let html = '';
    if (itemType === 'troop') {
        const troop = BATTLE_MAP_DATA.troop_deployments.find(t => t.id === itemId);
        if (!troop) return;
        const faction = LORE_DATA.factions[troop.factionId];
        
        // Check intel
        const hasIntel = hasSufficientIntel(troop.details.intelReq);
        
        let statusHTML = '<p class="redacted">[Intel Required]</p>';
        if (hasIntel) {
             statusHTML = `
                <p><strong>Status:</strong> ${troop.details.status}</p>
                <p><strong>Objective:</strong> ${troop.details.objective}</p>
                <p><strong>Morale:</strong> ${troop.details.morale}%</p>
             `;
        }

        html = `
            <div class="tactical-detail-panel">
                <h3>${troop.name}</h3>
                <p class="tactical-faction"><img src="${faction?.logo || ''}"> ${faction?.name}</p>
                <p><strong>Strength:</strong> ${troop.strength}</p>
                ${statusHTML}
            </div>
        `;
    } else if (itemType === 'vigilance') {
        const journey = BATTLE_MAP_DATA.vigilance_journey;
        html = `
            <div class="tactical-detail-panel">
                <h3>The 'Vigilance'</h3>
                <p><strong>Status:</strong> ${journey.status}</p>
                <p><strong>Position:</strong> Holding at Capital</p>
            </div>
        `;
    } else if (itemType === 'frontline') {
        const line = BATTLE_MAP_DATA.front_lines.find(l => l.id === itemId);
        html = `
             <div class="tactical-detail-panel">
                <h3>Active Frontline</h3>
                <p>${line.description}</p>
            </div>
        `;
    }
    detailPanel.innerHTML = html;
}

export function renderPartyMemberDetail(charKey, status) {
    const charData = getPartyCharacterData(charKey);
    detailPanel.innerHTML = `
        <div class="poi-detail">
            <div class="party-detail-header">
                <img src="${charData.portrait}" class="party-detail-portrait">
                <div><h3>${charData.name}</h3><p>${charData.role}</p></div>
            </div>
            <div class="party-status-box"><strong>Status:</strong> ${status}</div>
            <p>${charData.description}</p>
            <div class="party-actions"><a href="profile.html?user=${charKey}" class="control-btn">Profile</a></div>
        </div>
    `;
}

function renderPartyGroupDetail(members) {
    const list = members.map(m => {
        const d = getPartyCharacterData(m.charKey);
        return `<div class="party-group-item" onclick="window.location.href='profile.html?user=${m.charKey}'">
            <img src="${d.portrait}" style="width:30px;height:30px;border-radius:50%;">
            <span>${d.name}</span> <small>(${m.status})</small>
        </div>`;
    }).join('');
    detailPanel.innerHTML = `<div class="poi-detail"><h3>Group (${members.length})</h3>${list}</div>`;
}

function renderProvinceDetailPanel(province) {
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

// --- UTILS ---

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
        
        if (percent >= 100) {
            svg += `<circle cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" />`;
            continue;
        }

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

function hexToRgba(hex, alpha) {
    if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) return `rgba(128,128,128,${alpha})`;
    let c = hex.substring(1).split('');
    if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    const r = parseInt(c.slice(0,2).join(''), 16);
    const g = parseInt(c.slice(2,4).join(''), 16);
    const b = parseInt(c.slice(4,6).join(''), 16);
    return `rgba(${r},${g},${b},${alpha})`;
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
        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', p.x); c.setAttribute('cy', p.y); c.setAttribute('r', 1.5);
        c.classList.add('draw-point');
        drawingSvg.appendChild(c);
    });
}

export function renderPois() {
    const container = document.getElementById('interactive-map-layer');
    if (container) renderPoisLayer(container);
}

export function renderFog() {
    const svgLayer = document.getElementById('map-vector-layer');
    if (svgLayer) {
        svgLayer.innerHTML = ''; // Clear old fog
        renderFogLayer(svgLayer);
    }
}


export function showDetailPanel(poiId) {
    const poi = MAP_DATA[map.activeMapId]?.pointsOfInterest.find(p => p.id === poiId);
    if (!poi) return;
    
    const faction = LORE_DATA.factions[poi.factionId];
    const typeInfo = BUILDING_TYPES[poi.type];
    
    // Basic Info
    let content = `
        <div class="poi-detail">
            <h3>${poi.name}</h3>
            <p class="poi-type">${typeInfo.icon} ${typeInfo.name} - ${faction ? faction.name : 'Unaligned'}</p>
            <p class="poi-description">${poi.description}</p>
    `;

    // Intel Requirement
    if (poi.intelReq && !state.debugMode) {
        const hasIntel = hasSufficientIntel(poi.intelReq);
        const reqText = typeof poi.intelReq === 'object' 
            ? `${LORE_DATA.factions[poi.intelReq.faction]?.name || 'Faction'} (Lvl ${poi.intelReq.level})`
            : `Intel Level ${poi.intelReq}`;
        
        content += `
            <div class="poi-intel-req ${hasIntel ? 'positive' : 'negative'}">
                <strong>Intel Required:</strong> ${reqText} <br>
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
    
    // Active Requests
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

    content += `</div>`;
    detailPanel.innerHTML = content;
}


export function renderMapModeLegend() {
    const panel = document.getElementById('map-detail-content');
    if(!panel) return;
    
    let legendHTML = '';
    
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
                const currentPois = MAP_DATA[map.activeMapId]?.pointsOfInterest || [];
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
                    <p>Locations show primary exports. Size indicates wealth.</p>
                    <ul class="legend-list">
                        <li class="legend-item"><div class="legend-color-box" style="background:transparent; border: 2px solid #FFD700; color: #FFD700; text-align:center;">💰</div><span>Trade Hub (High Wealth)</span></li>
                        <li class="legend-item"><div class="legend-color-box" style="background:transparent; border: 2px solid #C0C0C0; color: #C0C0C0; text-align:center;">⚒️</div><span>Producer (Medium Wealth)</span></li>
                        <li class="legend-item"><div class="legend-color-box" style="background:transparent; border: 2px solid #cd7f32; color: #cd7f32; text-align:center;">🌾</div><span>Small Settlement (Low Wealth)</span></li>
                    </ul>
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
        default:
             legendHTML = `<p class="panel-placeholder">Select a point of interest for details.</p>`;
            break;
    }

    // Append Party Legend if active and not in edit mode
    if (map.showPartyMarkers && !map.isEditMode) {
        legendHTML += `
            <div class="map-mode-legend" style="border-top: 1px dashed var(--border-color); margin-top: 10px; padding-top: 10px;">
                <h4>Party Locations (Active)</h4>
                <ul class="legend-list">
                    <li class="legend-item"><div class="party-marker-legend" style="border-color: var(--accent-color);"></div><span>Standard</span></li>
                    <li class="legend-item"><div class="party-marker-legend" style="border-color: var(--negative-color);"></div><span>Trapped / In Combat</span></li>
                    <li class="legend-item"><div class="party-marker-legend" style="border-color: var(--text-secondary); filter: grayscale(0.8);"></div><span>Captured / MIA</span></li>
                    <li class="legend-item"><div class="party-group-marker" style="width: 24px; height: 24px; font-size: 12px; background-color: var(--accent-color); color: white; display:flex; align-items:center; justify-content:center;">#</div><span>Grouped Characters</span></li>
                </ul>
            </div>
        `;
    }
    
    panel.innerHTML = legendHTML;
}


export function showLawCodexModal(lawKey) {
    const lawData = ALL_LEGAL_CODES[lawKey];
    if (!lawData) return;

    const content = `<div class="law-popup-content">${renderCodexLaws(lawData)}</div>`;
    map.showMapModal(`Codex: ${lawData.name}`, content);
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
