// map-transform.js - Handles map panning and zooming using D3.js
import * as map from './maps.js';

let d3Zoom;
let wasDraggedFlag = false;

function zoomed({ transform }) {
    const wrapper = document.getElementById('map-zoom-wrapper');
    if (wrapper) {
        wrapper.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`;
    }
}

export function initPanAndZoom() {
    const svg = d3.select("#map-display-area");
    if (svg.empty()) return;

    d3Zoom = d3.zoom()
        .scaleExtent([0.5, 8]) // Min/max zoom levels
        .on("start", () => {
            wasDraggedFlag = false;
        })
        .on("zoom", (event) => {
            wasDraggedFlag = true;
            zoomed(event);
        })
        .on("end", () => {
            // Use a short timeout to reset the flag, allowing the click event to check it first
            setTimeout(() => { wasDraggedFlag = false; }, 10);
        });

    svg.call(d3Zoom);
}

export function wasDragged() {
    return wasDraggedFlag;
}

export function resetTransform() {
    const svg = d3.select("#map-display-area");
    if (svg.empty() || !d3Zoom) return;

    svg.transition()
        .duration(500)
        .call(d3Zoom.transform, d3.zoomIdentity);
}