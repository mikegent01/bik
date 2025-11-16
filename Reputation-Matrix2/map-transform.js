// map-transform.js - Handles map panning and zooming using D3.js
import * as map from './maps.js';

let d3Zoom;
let svg;

function zoomed({ transform }) {
    const wrapper = document.getElementById('map-zoom-wrapper');
    if (wrapper) {
        wrapper.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`;
    }
}

export function initPanAndZoom() {
    svg = d3.select("#map-display-area");
    if (svg.empty()) return;

    d3Zoom = d3.zoom()
        .scaleExtent([0.5, 8]) // Min/max zoom levels
        .filter(event => {
            // Prevent zoom/pan from starting on any interactive marker, button, or while drawing.
            // This cleanly separates click actions from pan/zoom gestures.
            if (event.target.closest('.poi-marker, .troop-marker, .vigilance-marker, .party-marker, .control-btn, button')) {
                return false;
            }
            // Allow default behavior (pan on drag, zoom on scroll) for the map background.
            // On touch devices, we need to allow two-finger gestures for zooming.
            if (event.type === 'touchstart' && event.touches.length > 1) {
                return true;
            }
            // Allow single-touch drag to pan the map.
            if (event.type === 'touchmove' && event.touches.length === 1) {
                return true;
            }
            // Allow mouse drag and wheel zoom.
            return event.type === 'wheel' || event.type === 'mousedown';
        })
        .on("zoom", zoomed);

    svg.call(d3Zoom);
}


export function wasDragged() {
    // This function is obsolete with the new filter logic but kept to avoid breaking existing calls.
    // It will be removed in a future cleanup.
    return false; 
}


export function resetTransform() {
    if (svg.empty() || !d3Zoom) return;

    svg.transition()
        .duration(500)
        .call(d3Zoom.transform, d3.zoomIdentity);
}

export function panAndZoomToPoi(poi) {
    if (!svg || !d3Zoom || !map.renderedMapDimensions) return;
    
    const displayArea = document.getElementById('map-display-area');
    const containerWidth = displayArea.clientWidth;
    const containerHeight = displayArea.clientHeight;
    
    const renderedWidth = map.renderedMapDimensions.width;
    const renderedHeight = map.renderedMapDimensions.height;
    
    const scale = 4; // Desired zoom level

    // Calculate the translation needed to center the POI
    const tx = containerWidth / 2 - (poi.x / 100 * renderedWidth * scale);
    const ty = containerHeight / 2 - (poi.y / 100 * renderedHeight * scale);

    const transform = d3.zoomIdentity
        .translate(tx, ty)
        .scale(scale);

    svg.transition()
        .duration(750) // Animation duration
        .call(d3Zoom.transform, transform);
}