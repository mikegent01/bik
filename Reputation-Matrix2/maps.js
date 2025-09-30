import { state, loadState, saveState } from './state.js';
import * as ui from './map-ui.js';
import * as renderer from './map-renderer.js';
import * as editor from './map-editor.js';
import * as transform from './map-transform.js';
import { playSound } from './common.js';
import { MAP_DATA } from './map-data.js';
import { BATTLE_MAP_DATA } from './map-battle-data.js';

// --- STATE ---
export let activeMapId = 'mushroom_kingdom_full'; // Default value
export let activeMapMode = 'standard';
export let isEditMode = false;
export let editSessionData = null; // Holds cloned data for an edit session
export let renderedMapDimensions = { width: 0, height: 0 }; // Authoritative dimensions

// --- DOM ELEMENTS ---
const mapModal = document.getElementById('map-modal');
const mapModalTitle = document.getElementById('map-modal-title');
const mapModalContent = document.getElementById('map-modal-content');
const mapModalClose = document.getElementById('map-modal-close');


// --- STATE MUTATORS ---
export function setActiveMapId(mapId) {
    activeMapId = mapId;
}
export function setActiveMapMode(mode) {
    activeMapMode = mode;
}
export function setEditMode(mode) {
    isEditMode = mode;
}
export function setEditSessionData(data) {
    editSessionData = data;
}
export function setRenderedMapDimensions(dimensions) {
    renderedMapDimensions = dimensions;
}


// --- MODAL LOGIC ---
export function showMapModal(title, content) {
    if (!mapModal) return;
    mapModalTitle.innerHTML = title;
    mapModalContent.innerHTML = content;
    mapModal.style.display = 'flex';
}

export function hideMapModal() {
    if (mapModal) {
        mapModal.style.display = 'none';
    }
}


// --- INITIALIZATION ---
function init() {
    const pathname = window.location.pathname;
    if (pathname.includes('warhammer-maps.html')) {
        activeMapId = 'warhammer_full';
    } else if (pathname.includes('midlands-maps.html')) {
        activeMapId = 'midlands_full';
    } else if (pathname.includes('internet-maps.html')) {
        activeMapId = 'internet_full';
    } else if (pathname.includes('middle-earth-maps.html')) {
        activeMapId = 'middle_earth_full';
    } else if (pathname.includes('kivotos-maps.html')) {
        activeMapId = 'kivotos_full';
    } else if (pathname.includes('doughnut-hole-maps.html')) {
        activeMapId = 'doughnut_hole_full';
    } else if (pathname.includes('pokemon-maps.html')) {
        activeMapId = 'pokemon_full';
    } else {
        activeMapId = 'mushroom_kingdom_full';
    }

    loadState();
    checkAndDiscoverFogs();
    
    ui.renderTabs();
    transform.initPanAndZoom(); // Initialize pan and zoom BEFORE the first render
    renderer.renderMap(activeMapId);
    
    setupEventListeners();
    
    // Restore the Edit Map button if in debug mode
    const editMapBtn = document.getElementById('edit-map-btn');
    if (editMapBtn && state.debugMode) {
        editMapBtn.style.display = 'block';
    }
}

// --- CORE LOGIC ---
function checkAndDiscoverFogs() {
    // This logic can remain here as it modifies global state on load.
    // In a larger app, this might be part of a 'gameState' service.
    // For now, this is fine.
    // ... (logic remains the same)
}

function findPoiById(poiId) {
    if (!activeMapId) return null;
    const poiSource = MAP_DATA[activeMapId]?.pointsOfInterest || [];
    const userPois = state.mapState.userPois[activeMapId] || [];
    return [...poiSource, ...userPois].find(p => p.id === poiId);
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    ui.setupTabEventListeners();
    editor.setupEditorEventListeners();

    if (mapModalClose) {
        mapModalClose.addEventListener('click', hideMapModal);
    }
    if (mapModal) {
        mapModal.addEventListener('click', (e) => {
            if (e.target === mapModal) {
                hideMapModal();
            }
            // Handle clicks on law links within the modal
            const lawLink = e.target.closest('.law-link');
            if (lawLink) {
                e.preventDefault();
                playSound('click.mp3');
                const lawKey = lawLink.dataset.lawKey;
                renderer.showLawCodexModal(lawKey);
            }
        });
    }

    const displayArea = document.getElementById('map-display-area');
    if (displayArea) {
        displayArea.addEventListener('click', e => {
            if (isEditMode || transform.wasDragged()) return;
            
            const poiMarker = e.target.closest('.poi-marker');
            const troopMarker = e.target.closest('.troop-marker');
            const vigilanceMarker = e.target.closest('.vigilance-marker');

            if (poiMarker) {
                e.preventDefault();
                e.stopPropagation();
                playSound('click.mp3');
                const poi = findPoiById(poiMarker.dataset.poiId);
                if (poi) {
                    if (poi.libraryStockKey) {
                        renderer.showLibraryPopup(poi);
                    } else if (activeMapMode === 'laws') {
                        renderer.showTraditionsPopup(poi);
                    } else {
                        renderer.showDetailPanel(poi.id);
                    }
                }
            } else if (troopMarker) {
                e.preventDefault();
                e.stopPropagation();
                playSound('click.mp3');
                renderer.renderTacticalDetailPanel(troopMarker.dataset.troopId, 'troop');
            } else if (vigilanceMarker) {
                e.preventDefault();
                e.stopPropagation();
                 playSound('click.mp3');
                renderer.renderTacticalDetailPanel(vigilanceMarker.dataset.vigilanceId, 'vigilance');
            } else if (!e.target.closest('.clickable-tactical')) {
                // Clicked on map background
                if(activeMapMode === 'laws') {
                    renderer.showTraditionsPopup(null); // Show base traditions for the region
                } else {
                    renderer.renderMapModeLegend();
                    transform.resetTransform();
                }
            }
        });
    }
}

// Run the application
const currentPage = window.location.pathname.split('/').pop();
if (['mushroom-kingdom-maps.html', 'midlands-maps.html', 'internet-maps.html', 'middle-earth-maps.html', 'warhammer-maps.html', 'kivotos-maps.html', 'doughnut-hole-maps.html', 'pokemon-maps.html'].includes(currentPage)) {
    init();
}
