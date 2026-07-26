// This module handles the rendering and initialization of the DCI Case Board.

/**
 * Renders the HTML structure for the DCI Case Board.
 * @returns {string} HTML for the system.
 */
export function renderDCISystem() {
    return `
        <p class="system-description">The DCI operates on active cases. Their current focus is the sprawling criminal enterprise of Wario and his associates. Evidence is gathered, leads are followed, and a network of suspects is slowly drawn together on the case board.</p>
        <div class="system-content">
            <div class="case-board" id="dci-case-board">
                <div class="case-item person"><strong>SUSPECT:</strong> Wario</div>
                <div class="case-item evidence1"><strong>EVIDENCE:</strong> Recovered Stolen Artifact</div>
                <div class="case-item evidence2"><strong>EVIDENCE:</strong> Ghostly energy readings in Cargo Bay 3</div>
                <div class="case-item lead"><strong>LEAD:</strong> Connection to Lario's Workshop</div>
            </div>
        </div>
    `;
}

/**
 * Initializes the case board by drawing lines between connected items.
 */
export function initDCISystem() {
    const board = document.getElementById('dci-case-board');
    if(!board) return;

    const items = Array.from(board.children);
    if(items.length < 2) return;
    
    // Defines which items to connect by their index in the `items` array.
    const connections = [ [0,1], [0,2], [0,3] ];

    connections.forEach(([startIndex, endIndex]) => {
        const start = items[startIndex];
        const end = items[endIndex];
        
        const x1 = start.offsetLeft + start.offsetWidth / 2;
        const y1 = start.offsetTop + start.offsetHeight / 2;
        const x2 = end.offsetLeft + end.offsetWidth / 2;
        const y2 = end.offsetTop + end.offsetHeight / 2;

        const length = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
        const angle = Math.atan2(y2-y1, x2-x1) * 180 / Math.PI;

        const line = document.createElement('div');
        line.className = 'case-board-line';
        line.style.width = `${length}px`;
        line.style.transform = `rotate(${angle}deg)`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        board.appendChild(line);
    });
}