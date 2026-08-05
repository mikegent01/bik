// maps.js - Main map module entry point

import { state, loadState, saveState } from '../../../state.js';
import * as ui from './map-ui.js';
import * as renderer from './map-renderer.js';
import * as editor from './map-editor.js';
import * as transform from './map-transform.js';
import { playSound } from '../../../common.js';
import { MAP_DATA } from '../../../map-data.js';

// ============================================================================
// STATE
// ============================================================================

class MapState {
    constructor() {
        this.activeMapId = 'mushroom_kingdom_full';
        this.activeMapMode = 'standard';
        this.activePoliticalSubmode = 'poi';
        this.isEditMode = false;
        this.editSessionData = null;
        this.renderedMapDimensions = { width: 0, height: 0 };
        this.showPartyMarkers = true;
    }
}

const mapState = new MapState();

// Public getters
export const getActiveMapId = () => mapState.activeMapId;
export const getActiveMapMode = () => mapState.activeMapMode;
export const getActivePoliticalSubmode = () => mapState.activePoliticalSubmode;
export const getIsEditMode = () => mapState.isEditMode;
export const getEditSessionData = () => mapState.editSessionData;
export const getRenderedMapDimensions = () => ({ ...mapState.renderedMapDimensions });
export const getShowPartyMarkers = () => mapState.showPartyMarkers;

// Legacy getters (for backward compatibility)
export let activeMapId = mapState.activeMapId;
export let activeMapMode = mapState.activeMapMode;
export let activePoliticalSubmode = mapState.activePoliticalSubmode;
export let isEditMode = mapState.isEditMode;
export let editSessionData = mapState.editSessionData;
export let renderedMapDimensions = mapState.renderedMapDimensions;
export let showPartyMarkers = mapState.showPartyMarkers;

// State mutators
export function setActiveMapId(mapId) {
    mapState.activeMapId = mapId;
    activeMapId = mapId;
}

export function setActiveMapMode(mode) {
    mapState.activeMapMode = mode;
    activeMapMode = mode;
}

export function setActivePoliticalSubmode(mode) {
    mapState.activePoliticalSubmode = mode;
    activePoliticalSubmode = mode;
}

export function setEditMode(mode) {
    mapState.isEditMode = mode;
    isEditMode = mode;
}

export function setEditSessionData(data) {
    mapState.editSessionData = data;
    editSessionData = data;
}

export function setRenderedMapDimensions(dimensions) {
    mapState.renderedMapDimensions = dimensions;
    renderedMapDimensions = dimensions;
}

export function setShowPartyMarkers(visible) {
    mapState.showPartyMarkers = visible;
    showPartyMarkers = visible;
}

// ============================================================================
// MODAL
// ============================================================================

const modalElements = {
    modal: null,
    title: null,
    content: null,
    closeBtn: null
};

function initModalElements() {
    modalElements.modal = document.getElementById('map-modal');
    modalElements.title = document.getElementById('map-modal-title');
    modalElements.content = document.getElementById('map-modal-content');
    modalElements.closeBtn = document.getElementById('map-modal-close');
}

export function showMapModal(title, content) {
    if (!modalElements.modal) initModalElements();
    if (!modalElements.modal) return;

    modalElements.title.innerHTML = title;
    modalElements.content.innerHTML = content;
    modalElements.modal.style.display = 'flex';
    
    // Lock map while modal is open
    transform.setMapLock(true);
}

export function hideMapModal() {
    if (!modalElements.modal) return;
    
    modalElements.modal.style.display = 'none';
    transform.setMapLock(false);
}

// ============================================================================
// PAGE DETECTION
// ============================================================================

const PAGE_MAP_IDS = {
    'warhammer-maps.html': 'warhammer_full',
    'midlands-maps.html': 'midlands_full',
    'internet-maps.html': 'internet_full',
    'middle-earth-maps.html': 'middle_earth_full',
    'kivotos-maps.html': 'kivotos_full',
    'doughnut-hole-maps.html': 'doughnut_hole_full',
    'pokemon-maps.html': 'pokemon_full',
    'animatopia-maps.html': 'animatopia_full',
    'almost-edge-maps.html': 'almost_edge_full',
    'the-edge-maps.html': 'the_edge_full',
    'connectopia-maps.html': 'connectopia_full',
    'earth-land-maps.html': 'earth_land_full',
    'faerun-maps.html': 'faerun_full',
    'leclaire-isle-maps.html': 'leclaire_isle_full',
    'teyvat-maps.html': 'teyvat_full',
    'equestria-maps.html': 'equestria_full',
    'grand-country-maps.html': 'grand_country_full',
    'mushroom-kingdom-maps.html': 'mushroom_kingdom_full'
};

function getMapIdForPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const mapParam = urlParams.get('map');
    if (mapParam) return mapParam;

    const pathname = window.location.pathname;
    const currentPage = pathname.split('/').pop();
    return PAGE_MAP_IDS[currentPage] || 'mushroom_kingdom_full';
}

function isMapPage() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('map')) return true;

    const currentPage = window.location.pathname.split('/').pop();
    return Object.keys(PAGE_MAP_IDS).includes(currentPage) || currentPage === 'maps-view.html';
}

// ============================================================================
// POI LOOKUP
// ============================================================================

export function findPoiById(poiId) {
    if (!mapState.activeMapId) return null;
    
    const mapData = MAP_DATA[mapState.activeMapId];
    if (!mapData) return null;

    const poiSource = mapData.pointsOfInterest || [];
    const userPois = state.mapState?.userPois?.[mapState.activeMapId] || [];
    
    return [...poiSource, ...userPois].find(p => p.id === poiId);
}

// ============================================================================
// EVENT HANDLERS
// ============================================================================
function handleDisplayAreaClick(event) {
    if (mapState.isEditMode) return;

    const target = event.target;
    const poiMarker = target.closest('.poi-marker');
    const clusterMarker = target.closest('.poi-cluster-marker');
    const troopMarker = target.closest('.troop-marker');
    const vigilanceMarker = target.closest('.vigilance-marker');
    const partyMarker = target.closest('.party-marker');

    if (poiMarker) {
        event.preventDefault();
        event.stopPropagation();
        playSound('click.mp3');
        
        const poi = findPoiById(poiMarker.dataset.poiId);
        if (poi) {
            handlePoiClick(poi);
        }
        return;
    }

    if (clusterMarker) {
        // Handled by cluster marker's own click handler
        return;
    }

    if (troopMarker) {
        event.preventDefault();
        event.stopPropagation();
        playSound('click.mp3');
        renderer.renderTacticalDetailPanel(troopMarker.dataset.troopId, 'troop');
        return;
    }

    if (vigilanceMarker) {
        event.preventDefault();
        event.stopPropagation();
        playSound('click.mp3');
        renderer.renderTacticalDetailPanel('vigilance', 'vigilance');
        return;
    }

    if (partyMarker) {
        if (partyMarker.classList.contains('party-group-marker')) return;
        
        event.preventDefault();
        event.stopPropagation();
        playSound('click.mp3');
        
        const charKey = partyMarker.dataset.charKey;
        const status = partyMarker.dataset.status;
        renderer.renderPartyMemberDetail(charKey, status);
        return;
    }

    // Clicked on map background
    if (!target.closest('.clickable-tactical')) {
        if (mapState.activeMapMode === 'laws') {
            renderer.showTraditionsPopup(null);
        } else {
            renderer.renderMapModeLegend();
            transform.resetTransform();
        }
    }
}

function handlePoiClick(poi) {
    if (poi.libraryStockKey) {
        renderer.showLibraryPopup(poi);
    } else if (mapState.activeMapMode === 'laws') {
        renderer.showTraditionsPopup(poi);
    } else {
        renderer.showDetailPanel(poi.id);
    }
}

function handleModalClick(event) {
    // Close modal on backdrop click
    if (event.target === modalElements.modal) {
        hideMapModal();
    }

    // Handle law links within modal
    const lawLink = event.target.closest('.law-link');
    if (lawLink) {
        event.preventDefault();
        playSound('click.mp3');
        const lawKey = lawLink.dataset.lawKey;
        renderer.showLawCodexModal(lawKey);
    }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function setupEventListeners() {
    ui.setupTabEventListeners();
    editor.setupEditorEventListeners();

    // Modal close button
    if (modalElements.closeBtn) {
        modalElements.closeBtn.addEventListener('click', hideMapModal);
    }

    // Modal backdrop and law links
    if (modalElements.modal) {
        modalElements.modal.addEventListener('click', handleModalClick);
    }

    // Map display area clicks
    const displayArea = document.getElementById('map-display-area');
    if (displayArea) {
        displayArea.addEventListener('click', handleDisplayAreaClick);
    }

    // Listen for zoom changes to update clustering
    transform.onZoomChange((newZoom) => {
        renderer.onZoomChange(newZoom);
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (mapState.activeMapId) {
                renderer.renderMap(mapState.activeMapId);
            }
        }, 250);
    });
}

function init() {
    // Set initial map based on page
    setActiveMapId(getMapIdForPage());

    // Dynamically update page header and document titles in unified maps-view.html
    const mapData = MAP_DATA[mapState.activeMapId];
    if (mapData) {
        const titleEl = document.getElementById('unified-header-title');
        const pageTitleEl = document.getElementById('unified-page-title');
        if (titleEl) titleEl.textContent = (mapData.name || '').replace(' (Full)', '') + " Tactical Map";
        if (pageTitleEl) pageTitleEl.textContent = "Tactical Maps: " + (mapData.name || '').replace(' (Full)', '');
        document.title = "Vigilance Terminal | " + (mapData.name || '').replace(' (Full)', '') + " Map";
    }

    // Load saved state
    loadState();

    // Initialize modal elements
    initModalElements();

    // Render UI
    ui.renderTabs();
    
    // Initialize pan/zoom before first render
    transform.initPanAndZoom();
    
    // Render the map
    renderer.renderMap(mapState.activeMapId);

    // Setup event listeners
    setupEventListeners();

    // Show edit button in debug mode
    const editMapBtn = document.getElementById('edit-map-btn');
    if (editMapBtn && state.debugMode) {
        editMapBtn.style.display = 'block';
    }

    console.log(`Map initialized: ${mapState.activeMapId}`);
}

// ============================================================================
// BOOTSTRAP
// ============================================================================

if (isMapPage()) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

// Export for testing/external use
export { init as initMapSystem };