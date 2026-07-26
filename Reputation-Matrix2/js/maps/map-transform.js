// map-transform.js - Handles map panning and zooming using D3.js

/**
 * @typedef {Object} TransformState
 * @property {number} x - Translation X
 * @property {number} y - Translation Y
 * @property {number} k - Scale factor
 */
let currentZoom = 1;
let currentPanX = 0;
let currentPanY = 0;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 8;
const ZOOM_STEP = 0.25;
export function zoomIn() {
    const newZoom = Math.min(MAX_ZOOM, currentZoom + ZOOM_STEP);
    setZoom(newZoom);
}

export function zoomOut() {
    const newZoom = Math.max(MIN_ZOOM, currentZoom - ZOOM_STEP);
    setZoom(newZoom);
}

export function setZoom(level, centerX = null, centerY = null) {
    const zoomWrapper = document.getElementById('map-zoom-wrapper');
    if (!zoomWrapper) return;

    const oldZoom = currentZoom;
    currentZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, level));

    // If center point provided, zoom towards it
    if (centerX !== null && centerY !== null) {
        const zoomRatio = currentZoom / oldZoom;
        currentPanX = centerX - (centerX - currentPanX) * zoomRatio;
        currentPanY = centerY - (centerY - currentPanY) * zoomRatio;
    }

    applyTransform();
    updateZoomDisplay();
    
    // Notify renderer of zoom change for clustering
    if (typeof window.onMapZoomChange === 'function') {
        window.onMapZoomChange(currentZoom);
    }
}

export function getZoomLevel() {
    return currentZoom;
}

export function resetTransform() {
    currentZoom = 1;
    currentPanX = 0;
    currentPanY = 0;
    applyTransform();
    updateZoomDisplay();
}

function applyTransform() {
    const zoomWrapper = document.getElementById('map-zoom-wrapper');
    if (!zoomWrapper) return;

    zoomWrapper.style.transform = `translate(${currentPanX}px, ${currentPanY}px) scale(${currentZoom})`;
    zoomWrapper.style.transformOrigin = 'center center';
}

function updateZoomDisplay() {
    const zoomDisplay = document.getElementById('zoom-level-display');
    if (zoomDisplay) {
        zoomDisplay.textContent = `${Math.round(currentZoom * 100)}%`;
    }

    // Update button states
    const zoomInBtn = document.getElementById('zoom-in-btn');
    const zoomOutBtn = document.getElementById('zoom-out-btn');
    
    if (zoomInBtn) {
        zoomInBtn.disabled = currentZoom >= MAX_ZOOM;
        zoomInBtn.classList.toggle('disabled', currentZoom >= MAX_ZOOM);
    }
    if (zoomOutBtn) {
        zoomOutBtn.disabled = currentZoom <= MIN_ZOOM;
        zoomOutBtn.classList.toggle('disabled', currentZoom <= MIN_ZOOM);
    }
}

// ============================================================================
// PAN TO POI FUNCTION
// ============================================================================

export function panAndZoomToPoi(poi, targetZoom = 3) {
    const displayArea = document.getElementById('map-display-area');
    const interactiveLayer = document.getElementById('interactive-map-layer');
    
    if (!displayArea || !interactiveLayer) return;

    const displayRect = displayArea.getBoundingClientRect();
    const layerRect = interactiveLayer.getBoundingClientRect();

    // Calculate POI position in pixels
    const poiPixelX = (poi.x / 100) * layerRect.width;
    const poiPixelY = (poi.y / 100) * layerRect.height;

    // Calculate pan to center the POI
    const centerX = displayRect.width / 2;
    const centerY = displayRect.height / 2;

    currentZoom = targetZoom;
    currentPanX = centerX - poiPixelX * currentZoom;
    currentPanY = centerY - poiPixelY * currentZoom;

    applyTransform();
    updateZoomDisplay();
}

// ============================================================================
// MOUSE WHEEL ZOOM
// ============================================================================

export function initZoomControls() {
    const displayArea = document.getElementById('map-display-area');
    if (!displayArea) return;

    // Mouse wheel zoom
    displayArea.addEventListener('wheel', (e) => {
        e.preventDefault();
        
        const rect = displayArea.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const zoomDelta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
        const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, currentZoom + zoomDelta));

        if (newZoom !== currentZoom) {
            // Zoom towards mouse position
            const zoomRatio = newZoom / currentZoom;
            currentPanX = mouseX - (mouseX - currentPanX) * zoomRatio;
            currentPanY = mouseY - (mouseY - currentPanY) * zoomRatio;
            currentZoom = newZoom;

            applyTransform();
            updateZoomDisplay();
        }
    }, { passive: false });

    // Pan with mouse drag
    let isDragging = false;
    let startX, startY;
    let startPanX, startPanY;

    displayArea.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return; // Only left click
        if (e.target.closest('.poi-marker, .state-marker, .province-marker, .party-marker, .troop-marker')) return;
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startPanX = currentPanX;
        startPanY = currentPanY;
        displayArea.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        currentPanX = startPanX + dx;
        currentPanY = startPanY + dy;
        
        applyTransform();
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            displayArea.style.cursor = 'grab';
        }
    });

    // Set initial cursor
    displayArea.style.cursor = 'grab';
}

// ============================================================================
// CREATE ZOOM CONTROLS UI
// ============================================================================

export function createZoomControls() {
    const displayArea = document.getElementById('map-display-area');
    if (!displayArea) return;

    // Remove existing controls if any
    const existingControls = document.getElementById('map-zoom-controls');
    if (existingControls) {
        existingControls.remove();
    }

    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'map-zoom-controls';
    controlsContainer.innerHTML = `
        <button id="zoom-in-btn" class="zoom-btn" title="Zoom In (Scroll Up)">
            <span>+</span>
        </button>
        <div id="zoom-level-display" title="Current Zoom Level">100%</div>
        <button id="zoom-out-btn" class="zoom-btn" title="Zoom Out (Scroll Down)">
            <span>−</span>
        </button>
        <button id="zoom-reset-btn" class="zoom-btn" title="Reset View">
            <span>⟲</span>
        </button>
        <button id="zoom-fit-btn" class="zoom-btn" title="Fit to Screen">
            <span>⛶</span>
        </button>
    `;

    displayArea.appendChild(controlsContainer);

    // Add event listeners
    document.getElementById('zoom-in-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        zoomIn();
    });

    document.getElementById('zoom-out-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        zoomOut();
    });

    document.getElementById('zoom-reset-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        resetTransform();
    });

    document.getElementById('zoom-fit-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        fitToScreen();
    });

    updateZoomDisplay();
}

function fitToScreen() {
    currentZoom = 1;
    currentPanX = 0;
    currentPanY = 0;
    applyTransform();
    updateZoomDisplay();
}

// ============================================================================
// KEYBOARD SHORTCUTS
// ============================================================================

export function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Only handle if map is focused/visible
        const displayArea = document.getElementById('map-display-area');
        if (!displayArea || displayArea.offsetParent === null) return;

        // Don't handle if typing in input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.key) {
            case '+':
            case '=':
                e.preventDefault();
                zoomIn();
                break;
            case '-':
            case '_':
                e.preventDefault();
                zoomOut();
                break;
            case '0':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    resetTransform();
                }
                break;
            case 'Home':
                e.preventDefault();
                resetTransform();
                break;
        }
    });
}
const INTERACTIVE_SELECTOR = [
    '.poi-marker',
    '.poi-cluster-marker',
    '.troop-marker',
    '.vigilance-marker',
    '.party-marker',
    '.province-marker',
    '.control-btn',
    'button',
    'a',
    'input',
    'select',
    'textarea',
    '[data-no-pan-zoom]'
].join(', ');

const ZOOM_CONFIG = {
    minScale: 0.5,
    maxScale: 8,
    transitionDuration: 500,
    poiZoomLevel: 4,
    poiTransitionDuration: 750
};

class MapTransformController {
    constructor() {
        this.d3Zoom = null;
        this.svg = null;
        this.wrapper = null;
        this.isLocked = false;
        this.currentTransform = { x: 0, y: 0, k: 1 };
        this.zoomChangeCallbacks = [];
        this.interactionGuardsInitialized = false;
    }

    /**
     * Initialize pan and zoom functionality
     */
    init() {
        const svgElement = document.getElementById('map-display-area');
        if (!svgElement || typeof d3 === 'undefined') {
            console.warn('MapTransformController: D3 or SVG element not available');
            return false;
        }

        this.svg = d3.select(svgElement);
        if (this.svg.empty()) return false;

        this.wrapper = document.getElementById('map-zoom-wrapper');
        this.setupInteractionGuards();
        this.createZoomBehavior();
        this.svg.call(this.d3Zoom);

        return true;
    }

    /**
     * Block events on interactive elements from reaching D3 zoom
     */
    setupInteractionGuards() {
        if (this.interactionGuardsInitialized) return;
        this.interactionGuardsInitialized = true;

        const eventTypes = ['mousedown', 'wheel', 'touchstart', 'touchmove'];

        eventTypes.forEach(type => {
            document.addEventListener(type, (event) => {
                const target = event.target;
                if (!(target instanceof Element)) return;

                if (target.closest(INTERACTIVE_SELECTOR)) {
                    event.stopPropagation();
                }
            }, { capture: true });
        });
    }

    /**
     * Create the D3 zoom behavior
     */
    createZoomBehavior() {
        this.d3Zoom = d3.zoom()
            .scaleExtent([ZOOM_CONFIG.minScale, ZOOM_CONFIG.maxScale])
            .filter((event) => this.shouldAllowZoom(event))
            .on('zoom', (event) => this.handleZoom(event));
    }

    /**
     * Determine if a zoom event should be processed
     * @param {Event} event
     * @returns {boolean}
     */
    shouldAllowZoom(event) {
        if (this.isLocked) return false;
        if (event.defaultPrevented) return false;

        const target = event.target;
        if (target instanceof Element && target.closest(INTERACTIVE_SELECTOR)) {
            return false;
        }

        switch (event.type) {
            case 'wheel':
                return true;
            case 'mousedown':
                return event.button === 0;
            case 'touchstart':
            case 'touchmove':
                return true;
            default:
                return false;
        }
    }

    /**
     * Handle zoom events
     * @param {Object} event - D3 zoom event
     */
    handleZoom(event) {
        const { transform } = event;
        
        if (!this.wrapper) {
            this.wrapper = document.getElementById('map-zoom-wrapper');
        }
        
        if (!this.wrapper) return;

        this.wrapper.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`;
        
        const prevScale = this.currentTransform.k;
        this.currentTransform = { x: transform.x, y: transform.y, k: transform.k };

        // Notify listeners if scale changed significantly
        if (Math.abs(prevScale - transform.k) > 0.1) {
            this.notifyZoomChange(transform.k);
        }
    }

    /**
     * Lock/unlock map interactions
     * @param {boolean} locked
     */
    setLock(locked) {
        this.isLocked = locked;
    }

    /**
     * Get current zoom level
     * @returns {number}
     */
    getZoomLevel() {
        return this.currentTransform.k;
    }

    /**
     * Get current transform state
     * @returns {TransformState}
     */
    getTransform() {
        return { ...this.currentTransform };
    }

    /**
     * Reset to default view
     * @param {number} [duration=500]
     */
    reset(duration = ZOOM_CONFIG.transitionDuration) {
        if (!this.svg || this.svg.empty() || !this.d3Zoom) return;

        this.svg
            .transition()
            .duration(duration)
            .call(this.d3Zoom.transform, d3.zoomIdentity);
    }

    /**
     * Pan and zoom to a specific POI
     * @param {Object} poi - POI with x, y coordinates (percentages)
     * @param {Object} mapDimensions - { width, height } of rendered map
     * @param {number} [scale=4]
     * @param {number} [duration=750]
     */
    focusOnPoi(poi, mapDimensions, scale = ZOOM_CONFIG.poiZoomLevel, duration = ZOOM_CONFIG.poiTransitionDuration) {
        if (!this.svg || this.svg.empty() || !this.d3Zoom || !mapDimensions) return;

        const displayArea = document.getElementById('map-display-area');
        if (!displayArea) return;

        const containerWidth = displayArea.clientWidth;
        const containerHeight = displayArea.clientHeight;
        const { width: renderedWidth, height: renderedHeight } = mapDimensions;

        const tx = containerWidth / 2 - (poi.x / 100) * renderedWidth * scale;
        const ty = containerHeight / 2 - (poi.y / 100) * renderedHeight * scale;

        const transform = d3.zoomIdentity
            .translate(tx, ty)
            .scale(scale);

        this.svg
            .transition()
            .duration(duration)
            .call(this.d3Zoom.transform, transform);
    }

    /**
     * Pan to a specific coordinate without changing zoom
     * @param {number} x - Percentage X
     * @param {number} y - Percentage Y
     * @param {Object} mapDimensions
     * @param {number} [duration=500]
     */
    panTo(x, y, mapDimensions, duration = ZOOM_CONFIG.transitionDuration) {
        if (!this.svg || this.svg.empty() || !this.d3Zoom || !mapDimensions) return;

        const displayArea = document.getElementById('map-display-area');
        if (!displayArea) return;

        const containerWidth = displayArea.clientWidth;
        const containerHeight = displayArea.clientHeight;
        const { width: renderedWidth, height: renderedHeight } = mapDimensions;
        const currentScale = this.currentTransform.k;

        const tx = containerWidth / 2 - (x / 100) * renderedWidth * currentScale;
        const ty = containerHeight / 2 - (y / 100) * renderedHeight * currentScale;

        const transform = d3.zoomIdentity
            .translate(tx, ty)
            .scale(currentScale);

        this.svg
            .transition()
            .duration(duration)
            .call(this.d3Zoom.transform, transform);
    }

    /**
     * Set zoom level
     * @param {number} scale
     * @param {number} [duration=300]
     */
    setZoom(scale, duration = 300) {
        if (!this.svg || this.svg.empty() || !this.d3Zoom) return;

        const clampedScale = Math.max(ZOOM_CONFIG.minScale, Math.min(ZOOM_CONFIG.maxScale, scale));

        const transform = d3.zoomIdentity
            .translate(this.currentTransform.x, this.currentTransform.y)
            .scale(clampedScale);

        this.svg
            .transition()
            .duration(duration)
            .call(this.d3Zoom.transform, transform);
    }

    /**
     * Register callback for zoom changes
     * @param {Function} callback
     */
    onZoomChange(callback) {
        if (typeof callback === 'function') {
            this.zoomChangeCallbacks.push(callback);
        }
    }

    /**
     * Remove zoom change callback
     * @param {Function} callback
     */
    offZoomChange(callback) {
        const index = this.zoomChangeCallbacks.indexOf(callback);
        if (index > -1) {
            this.zoomChangeCallbacks.splice(index, 1);
        }
    }

    /**
     * Notify all zoom change listeners
     * @param {number} newZoom
     */
    notifyZoomChange(newZoom) {
        this.zoomChangeCallbacks.forEach(cb => {
            try {
                cb(newZoom);
            } catch (e) {
                console.error('Zoom change callback error:', e);
            }
        });
    }

    /**
     * Clean up resources
     */
    destroy() {
        if (this.svg && this.d3Zoom) {
            this.svg.on('.zoom', null);
        }
        this.zoomChangeCallbacks = [];
        this.d3Zoom = null;
        this.svg = null;
        this.wrapper = null;
    }
}

// Singleton instance
const transformController = new MapTransformController();

// Public API (maintains backward compatibility)
export function initPanAndZoom() {
    return transformController.init();
}

export function setMapLock(locked) {
    transformController.setLock(locked);
}


export function getTransform() {
    return transformController.getTransform();
}

export function panTo(x, y, mapDimensions, duration) {
    transformController.panTo(x, y, mapDimensions, duration);
}

export function onZoomChange(callback) {
    transformController.onZoomChange(callback);
}

export function offZoomChange(callback) {
    transformController.offZoomChange(callback);
}

// For testing/advanced usage
export function getController() {
    return transformController;
}

// Legacy compatibility
export function wasDragged() {
    return false;
}