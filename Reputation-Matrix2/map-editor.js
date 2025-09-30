import { playSound } from './common.js';
import * as map from './maps.js';
import * as renderer from './map-renderer.js';
import { MAP_DATA, BUILDING_TYPES } from './map-data.js';
import { LORE_DATA } from './lore.js';

// DOM Elements
const displayArea = document.getElementById('map-display-area');
const editorToolbar = document.getElementById('map-editor-toolbar');
const poiPalette = document.getElementById('poi-palette');
const drawFogBtn = document.getElementById('draw-fog-btn');
const removeItemBtn = document.getElementById('remove-item-btn');
const generateCodeBtn = document.getElementById('generate-code-btn');
const cancelMapBtn = document.getElementById('cancel-map-btn');
const poiEditorModal = document.getElementById('poi-editor-modal');
const closeModalBtn = poiEditorModal.querySelector('.modal-close');
const poiForm = document.getElementById('poi-form');
const codeOutputModal = document.getElementById('code-output-modal');
const codeOutputCloseBtn = codeOutputModal.querySelector('.modal-close');
const detailPanel = document.getElementById('map-detail-content');
const mapControls = document.getElementById('map-controls');

// Editor State
let activeEditorMode = 'idle'; // 'idle', 'drawingFog', 'removing'
let currentFogPoints = [];
let pendingPoiData = null;
let selectedEditableItemId = null;

function renderEditorToolbar() {
    poiPalette.innerHTML = Object.entries(BUILDING_TYPES).map(([key, value]) => `
        <div class="poi-palette-item" title="${value.name}" draggable="true" data-poi-type="${key}">
            ${value.icon}
        </div>
    `).join('');
}

export function toggleEditMode(enable) {
    map.setEditMode(enable);
    const editButton = document.getElementById('edit-map-btn');
    if (enable) {
        const currentMapData = MAP_DATA[map.activeMapId];
        map.setEditSessionData({
            pois: structuredClone(currentMapData.pointsOfInterest),
            fogs: structuredClone(currentMapData.fogOfWar || [])
        });
        editorToolbar.style.display = 'flex';
        if (editButton) editButton.style.display = 'none';
        if(mapControls) mapControls.style.display = 'none';
    } else {
        editorToolbar.style.display = 'none';
        if (editButton) editButton.style.display = 'block';
        if(mapControls) mapControls.style.display = 'flex';
        map.setEditSessionData(null);
        setEditorMode('idle'); // Reset editor mode
    }
    renderer.renderMap(map.activeMapId);
}

function setEditorMode(mode) {
    if (activeEditorMode === 'drawingFog') {
        finalizeFogPolygon(); // Finalize any pending fog before switching
    }
    
    if (activeEditorMode === mode) {
        mode = 'idle'; // Toggle off if the same button is clicked
    }
    activeEditorMode = mode;

    displayArea.classList.toggle('editing-fog', activeEditorMode === 'drawingFog');
    displayArea.classList.toggle('removing-item', activeEditorMode === 'removing');
    
    drawFogBtn.classList.toggle('active', activeEditorMode === 'drawingFog');
    removeItemBtn.classList.toggle('active', activeEditorMode === 'removing');
}

function handleGenerateCode() {
    playSound('confirm.mp3');
    if (activeEditorMode === 'drawingFog') finalizeFogPolygon();
    generateAndShowCode();
    toggleEditMode(false);
}

function generateAndShowCode() {
    const sourceFile = MAP_DATA[map.activeMapId].poiSourceFile;
    if (!sourceFile) {
        alert('This is a composite map view. Please edit one of the individual regional maps to generate code.');
        return;
    }
    
    const poiCodeString = map.editSessionData.pois.map(poi => {
        let poiString = '  {\n';
        Object.entries(poi).forEach(([key, value]) => {
            const keyName = key; // Keep camelCase for JS objects
            if (value !== undefined) {
                 if (typeof value === 'string') {
                    // Escape backslashes and double quotes properly for a string literal
                    const escapedValue = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
                    poiString += `    ${keyName}: "${escapedValue}",\n`;
                 } else if (typeof value === 'number') {
                    poiString += `    ${keyName}: ${key === 'x' || key === 'y' ? value.toFixed(2) : value},\n`;
                 } else {
                    poiString += `    ${keyName}: ${value},\n`;
                 }
            }
        });
        poiString = poiString.trim().slice(0, -1) + '\n  }';
        return poiString;
    }).join(',\n');
    
    const fogCodeString = map.editSessionData.fogs.map(fog => {
         let fogString = '  {\n';
         Object.entries(fog).forEach(([key, value]) => {
             if (value !== undefined) {
                 fogString += `    ${key}: ${JSON.stringify(value)},\n`;
             }
         });
         fogString = fogString.trim().slice(0, -1) + '\n  }';
        return fogString;
    }).join(',\n');

    document.querySelector('label[for="poi-code-output"]').textContent = `pointsOfInterest for ${sourceFile}:`;
    document.getElementById('poi-code-output').value = `[\n${poiCodeString}\n]`;
    
    document.querySelector('label[for="fog-code-output"]').textContent = `fogOfWar for ${sourceFile}:`;
    document.getElementById('fog-code-output').value = `[\n${fogCodeString}\n]`;
    
    codeOutputModal.style.display = 'flex';
}

function showPoiEditor(type) {
    poiForm.reset();
    const typeInfo = BUILDING_TYPES[type];
    document.getElementById('poi-form-type').textContent = `${typeInfo.icon} ${typeInfo.name}`;
    populateFactionSelect('poi-faction');
    poiEditorModal.style.display = 'flex';
}

function handlePoiFormSubmit(e) {
    e.preventDefault();
    if (!pendingPoiData) return;
    const newPoi = {
        id: `user_poi_${Date.now()}`,
        x: pendingPoiData.x,
        y: pendingPoiData.y,
        type: pendingPoiData.type,
        name: document.getElementById('poi-name').value,
        description: document.getElementById('poi-description').value,
        factionId: document.getElementById('poi-faction').value || 'unaligned',
        intelReq: document.getElementById('poi-intel').value ? parseInt(document.getElementById('poi-intel').value, 10) : 0,
        political_influence: 1, economic_value: 1, military_strength: 1, population: 0 // Defaults for new POIs
    };
    if (newPoi.factionId === 'unaligned') delete newPoi.factionId;
    if (isNaN(newPoi.intelReq)) newPoi.intelReq = 0;
    
    map.editSessionData.pois.push(newPoi);
    renderer.renderPois();
    poiEditorModal.style.display = 'none';
    pendingPoiData = null;
}

function populateFactionSelect(selectElementId, selectedValue = '') {
    const select = document.getElementById(selectElementId);
    select.innerHTML = '<option value="">Unaligned</option>';
    const sortedFactions = Object.entries(LORE_DATA.factions).sort(([, a], [, b]) => a.name.localeCompare(b.name));
    sortedFactions.forEach(([key, faction]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = faction.name;
        if (key === selectedValue) option.selected = true;
        select.appendChild(option);
    });
}

function renderItemEditorPanel(item, type) {
    selectedEditableItemId = item.id;
    const formId = "item-editor-form";
    const typeInfo = type === 'poi' ? BUILDING_TYPES[item.type] : null;

    let formContent = `
        <h3>Edit ${type === 'poi' ? 'Point of Interest' : 'Fog Region'}</h3>
        <form id="${formId}">
            ${type === 'poi' ? `
            <div class="form-group"><label>Type:</label><p class="editor-panel-type">${typeInfo.icon} ${typeInfo.name}</p></div>
            <div class="form-group"><label for="editor-name">Name:</label><input type="text" id="editor-name" value="${item.name || ''}" required></div>
            <div class="form-group"><label for="editor-description">Description:</label><textarea id="editor-description">${item.description || ''}</textarea></div>
            <div class="form-group"><label for="editor-political_influence">Political Influence:</label><input type="number" id="editor-political_influence" min="0" value="${item.political_influence || 0}"></div>
            <div class="form-group"><label for="editor-economic_value">Economic Value:</label><input type="number" id="editor-economic_value" min="0" value="${item.economic_value || 0}"></div>
            <div class="form-group"><label for="editor-military_strength">Military Strength:</label><input type="number" id="editor-military_strength" min="0" value="${item.military_strength || 0}"></div>
            <div class="form-group"><label for="editor-population">Population:</label><input type="number" id="editor-population" min="0" value="${item.population || 0}"></div>
            ` : ''}
            <div class="form-group"><label for="editor-faction">Faction:</label><select id="editor-faction"></select></div>
            <div class="form-group"><label for="editor-intel">Intel Req:</label><input type="number" id="editor-intel" min="0" max="100" value="${item.intelReq || ''}"></div>
            <div class="editor-panel-actions"><button type="submit" class="control-btn positive">Save Changes</button></div>
        </form>
    `;
    detailPanel.innerHTML = formContent;
    populateFactionSelect('editor-faction', item.factionId);

    document.getElementById(formId).addEventListener('submit', (e) => {
        e.preventDefault();
        const collection = type === 'poi' ? map.editSessionData.pois : map.editSessionData.fogs;
        const itemIndex = collection.findIndex(i => i.id === selectedEditableItemId);
        if (itemIndex > -1) {
            if (type === 'poi') {
                collection[itemIndex].name = document.getElementById('editor-name').value;
                collection[itemIndex].description = document.getElementById('editor-description').value;
                collection[itemIndex].political_influence = parseInt(document.getElementById('editor-political_influence').value, 10);
                collection[itemIndex].economic_value = parseInt(document.getElementById('editor-economic_value').value, 10);
                collection[itemIndex].military_strength = parseInt(document.getElementById('editor-military_strength').value, 10);
                collection[itemIndex].population = parseInt(document.getElementById('editor-population').value, 10);
            }
            collection[itemIndex].factionId = document.getElementById('editor-faction').value || undefined;
            collection[itemIndex].intelReq = document.getElementById('editor-intel').value ? parseInt(document.getElementById('editor-intel').value, 10) : undefined;
            
            if(!collection[itemIndex].factionId) delete collection[itemIndex].factionId;
            if(!collection[itemIndex].intelReq && collection[itemIndex].intelReq !== 0) delete collection[itemIndex].intelReq;

            playSound('confirm.mp3');
            detailPanel.innerHTML = `<p class="panel-placeholder positive">Changes saved.</p>`;
            renderer.renderPois(); // Re-render to show changes
        }
    });
}

function finalizeFogPolygon() {
    if (currentFogPoints.length < 3) {
        currentFogPoints = []; // Not enough points, just clear
        renderer.renderDrawingPreview(currentFogPoints);
        return;
    }
    const pointsString = currentFogPoints.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');
    const newFog = {
        id: `user_fog_${Date.now()}`,
        points: pointsString
    };
    map.editSessionData.fogs.push(newFog);
    renderer.renderFog();
    currentFogPoints = [];
    renderer.renderDrawingPreview(currentFogPoints);
}

function handleMapDrawClick(e) {
    if (e.button !== 0) return; // Only left click
    if (!map.renderedMapDimensions) return;
    const rect = document.getElementById('interactive-map-layer').getBoundingClientRect();
    const x = ((e.clientX - rect.left) / map.renderedMapDimensions.width) * 100;
    const y = ((e.clientY - rect.top) / map.renderedMapDimensions.height) * 100;
    currentFogPoints.push({ x, y });
    renderer.renderDrawingPreview(currentFogPoints);
}

function handleDrawFinish(e) {
    e.preventDefault(); // Prevent context menu
    finalizeFogPolygon();
}


function handleRemoveClick(e) {
    let removed = false;
    const poiMarker = e.target.closest('.poi-marker');
    if (poiMarker) {
        const poiId = poiMarker.dataset.poiId;
        if (confirm(`Are you sure you want to remove this POI?`)) {
            map.editSessionData.pois = map.editSessionData.pois.filter(p => p.id !== poiId);
            renderer.renderPois();
            removed = true;
        }
    } else {
        const fogPolygon = e.target.closest('polygon');
        if (fogPolygon) {
             if (confirm(`Are you sure you want to remove this fog region?`)) {
                map.editSessionData.fogs = map.editSessionData.fogs.filter(f => f.id !== fogPolygon.id);
                renderer.renderFog();
                removed = true;
            }
        }
    }
    if (removed) playSound('click.mp3');
}

function handleEditSelectClick(e) {
    let itemFound = false;
    const poiMarker = e.target.closest('.poi-marker');
    if (poiMarker) {
        const poiId = poiMarker.dataset.poiId;
        const poi = map.editSessionData.pois.find(p => p.id === poiId);
        if (poi) {
            renderItemEditorPanel(poi, 'poi');
            itemFound = true;
        }
    } else {
        const fogPolygon = e.target.closest('polygon');
        if (fogPolygon) {
            const fogId = fogPolygon.id;
            const fog = map.editSessionData.fogs.find(f => f.id === fogId);
            if (fog) {
                renderItemEditorPanel(fog, 'fog');
                itemFound = true;
            }
        }
    }
    if (itemFound) playSound('click.mp3');
}

export function setupEditorEventListeners() {
    const editMapBtn = document.getElementById('edit-map-btn');
    if (editMapBtn) editMapBtn.addEventListener('click', () => toggleEditMode(true));
    
    renderEditorToolbar();
    
    generateCodeBtn.addEventListener('click', handleGenerateCode);
    cancelMapBtn.addEventListener('click', () => toggleEditMode(false));
    drawFogBtn.addEventListener('click', () => setEditorMode('drawingFog'));
    removeItemBtn.addEventListener('click', () => setEditorMode('removing'));

    poiPalette.addEventListener('dragstart', e => {
        if(activeEditorMode !== 'idle') return;
        displayArea.classList.add('editing-poi');
        e.dataTransfer.setData('text/plain', e.target.dataset.poiType);
    });

    displayArea.addEventListener('dragover', e => e.preventDefault());
    displayArea.addEventListener('drop', e => {
        e.preventDefault();
        displayArea.classList.remove('editing-poi');
        if (!map.renderedMapDimensions) return;
        
        const rect = document.getElementById('interactive-map-layer').getBoundingClientRect();
        const x = ((e.clientX - rect.left) / map.renderedMapDimensions.width) * 100;
        const y = ((e.clientY - rect.top) / map.renderedMapDimensions.height) * 100;

        const type = e.dataTransfer.getData('text/plain');
        if (BUILDING_TYPES[type]) {
            pendingPoiData = { x, y, type };
            showPoiEditor(type);
        }
    });
    
    displayArea.addEventListener('dragleave', () => displayArea.classList.remove('editing-poi'));

    poiForm.addEventListener('submit', handlePoiFormSubmit);
    closeModalBtn.addEventListener('click', () => { poiEditorModal.style.display = 'none'; });
    poiEditorModal.addEventListener('click', e => { if (e.target === poiEditorModal) poiEditorModal.style.display = 'none'; });
    
    codeOutputCloseBtn.addEventListener('click', () => { codeOutputModal.style.display = 'none'; });
    codeOutputModal.addEventListener('click', e => { if (e.target === codeOutputModal) codeOutputModal.style.display = 'none'; });

    displayArea.addEventListener('click', e => {
        if (map.isEditMode) {
            if(activeEditorMode === 'drawingFog') {
                handleMapDrawClick(e);
            } else if (activeEditorMode === 'removing') {
                handleRemoveClick(e);
            } else {
                handleEditSelectClick(e);
            }
        }
    });

    displayArea.addEventListener('contextmenu', e => {
        if (map.isEditMode && activeEditorMode === 'drawingFog') {
            handleDrawFinish(e);
        }
    });
}