// map-transform.js - Handles map panning and zooming using D3.js
import * as map from './maps.js';

let d3Zoom = null;
let svg = null;
let interactionGuardsInitialized = false;

// Anything matching this selector will NOT cause pan/zoom when clicked/dragged/scrolled.
const INTERACTIVE_SELECTOR = [
    '.poi-marker',
    '.troop-marker',
    '.vigilance-marker',
    '.party-marker',
    '.control-btn',
    'button',
    'a',
    'input',
    'select',
    'textarea',
    '[data-no-pan-zoom]'
].join(', ');

/**
 * Stop events that start on interactive elements from ever reaching
 * the SVG zoom handlers. This is done in the capture phase so it
 * reliably runs before D3's listeners.
 */
function setupInteractionGuards() {
    if (interactionGuardsInitialized) return;
    interactionGuardsInitialized = true;

    const types = ['mousedown', 'wheel', 'touchstart', 'touchmove'];

    types.forEach((type) => {
        document.addEventListener(
            type,
            (event) => {
                const target = event.target;
                if (!(target instanceof Element)) return;

                if (target.closest(INTERACTIVE_SELECTOR)) {
                    // Let the element do its normal behavior,
                    // but stop the event from bubbling to the map's zoom listener.
                    event.stopPropagation();
                }
            },
            { capture: true }
        );
    });
}

function zoomed(event) {
    const { transform } = event;
    const wrapper = document.getElementById('map-zoom-wrapper');
    if (!wrapper) return;

    wrapper.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`;
}

export function initPanAndZoom() {
    const svgElement = document.getElementById('map-display-area');
    if (!svgElement || typeof d3 === 'undefined') return;

    svg = d3.select(svgElement);
    if (svg.empty()) return;

    // Ensure click/drag/scroll on markers/buttons don't reach D3 zoom
    setupInteractionGuards();

    d3Zoom = d3.zoom()
        .scaleExtent([0.5, 8]) // Min/max zoom levels
        .filter((event) => {
            // Ignore events already cancelled elsewhere
            if (event.defaultPrevented) return false;

            const target = event.target;
            if (target instanceof Element && target.closest(INTERACTIVE_SELECTOR)) {
                // Extra safety: don't start zoom from interactive elements
                return false;
            }

            // Allow wheel zoom on the map background
            if (event.type === 'wheel') {
                return true;
            }

            // Allow left mouse button drag to pan
            if (event.type === 'mousedown') {
                return event.button === 0;
            }

            // Allow touch gestures (D3 will turn these into pan/zoom)
            if (event.type === 'touchstart' || event.type === 'touchmove') {
                return true;
            }

            return false;
        })
        .on('zoom', zoomed);

    svg.call(d3Zoom);
}

// Backwards-compat shim; no longer used.
export function wasDragged() {
    return false;
}

export function resetTransform() {
    if (!svg || svg.empty() || !d3Zoom) return;

    svg
        .transition()
        .duration(500)
        .call(d3Zoom.transform, d3.zoomIdentity);
}

export function panAndZoomToPoi(poi) {
    if (!svg || svg.empty() || !d3Zoom || !map.renderedMapDimensions) return;

    const displayArea = document.getElementById('map-display-area');
    if (!displayArea) return;

    const containerWidth = displayArea.clientWidth;
    const containerHeight = displayArea.clientHeight;

    const { width: renderedWidth, height: renderedHeight } = map.renderedMapDimensions;

    const scale = 4; // Desired zoom level

    // Center the POI at the chosen zoom level
    const tx = containerWidth / 2 - (poi.x / 100) * renderedWidth * scale;
    const ty = containerHeight / 2 - (poi.y / 100) * renderedHeight * scale;

    const transform = d3.zoomIdentity
        .translate(tx, ty)
        .scale(scale);

    svg
        .transition()
        .duration(750)
        .call(d3Zoom.transform, transform);
}