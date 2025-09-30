import { LORE_DATA, CHARACTER_RELATIONS } from './lore.js';
import { state } from './state.js';
import { FACTION_COLORS } from './factions/faction-colors.js';

// --- Detail Panel Logic ---
const appContainer = document.getElementById('app');
const detailPanel = document.getElementById('detail-panel');
const detailPanelContent = document.getElementById('detail-panel-content');
const detailPanelClose = document.getElementById('detail-panel-close');
let selectedNode = null;

function getIntelForFaction(factionKey) {
    if (!state.intelLevels || !factionKey) return 0;
    const loggedInUser = state.loggedInUser || 'generic';
    const userIntel = state.intelLevels[loggedInUser] || state.intelLevels.generic;
    if (!userIntel) return 0;
    const defaultIntel = userIntel.default ?? (state.intelLevels.generic ? state.intelLevels.generic[factionKey] : 0) ?? 0;
    return userIntel[factionKey] ?? defaultIntel;
}

function hideDetailPanel() {
    detailPanel.classList.remove('visible');
    appContainer.classList.remove('panel-visible');
    if (selectedNode) {
        d3.select(selectedNode).classed('selected', false);
        selectedNode = null;
    }
}

function showDetailPanel(data, nodeElement) {
    if (selectedNode) {
        d3.select(selectedNode).classed('selected', false);
    }
    selectedNode = nodeElement;
    d3.select(selectedNode).classed('selected', true);

    let contentHTML = '';

    if (data.type === 'faction') {
        const faction = LORE_DATA.factions[data.id];
        let alliesHTML = faction.relations?.allies?.map(key => LORE_DATA.factions[key] ? `<li class="ally">${LORE_DATA.factions[key].name}</li>` : '').join('') || '<li>None</li>';
        let enemiesHTML = faction.relations?.enemies?.map(key => LORE_DATA.factions[key] ? `<li class="enemy">${LORE_DATA.factions[key].name}</li>` : '').join('') || '<li>None</li>';

        contentHTML = `
            <div class="panel-header">
                <img src="${faction.logo}" alt="${faction.name} Logo">
                <h3>${faction.name}</h3>
            </div>
            <div class="panel-section">
                <p>${faction.description}</p>
            </div>
            <div class="panel-section">
                <h4>Allies</h4>
                <ul>${alliesHTML}</ul>
            </div>
            <div class="panel-section">
                <h4>Enemies</h4>
                <ul>${enemiesHTML}</ul>
            </div>
        `;
    } else { // Character or Party
        const character = LORE_DATA.characters[data.id];
        
        // Opinions BY this character
        let opinionsByHTML = '';
        if (CHARACTER_RELATIONS[data.id]) {
            opinionsByHTML = Object.entries(CHARACTER_RELATIONS[data.id]).map(([targetKey, relation]) => {
                const targetChar = LORE_DATA.characters[targetKey];
                if (!targetChar) return '';
                const opinionText = relation.text.split(':').slice(1).join(':').trim();
                return `<div class="opinion-quote"><strong>On ${targetChar.name}:</strong><p>"${opinionText}"</p></div>`;
            }).join('');
        }

        // Opinions OF this character
        let opinionsOfHTML = '';
        Object.entries(CHARACTER_RELATIONS).forEach(([sourceKey, relations]) => {
            if (relations[data.id]) {
                const sourceChar = LORE_DATA.characters[sourceKey];
                const opinionText = relations[data.id].text.split(':').slice(1).join(':').trim();
                opinionsOfHTML += `<div class="opinion-quote"><strong>${sourceChar.name}:</strong><p>"${opinionText}"</p></div>`;
            }
        });

        contentHTML = `
            <div class="panel-header">
                <h3>${character.name}</h3>
            </div>
            <div class="panel-section">
                 <p>${data.role}</p>
            </div>
            <div class="panel-section">
                <h4>Dossier: Personal Opinions</h4>
                ${opinionsByHTML || opinionsOfHTML ? '' : '<p>No specific recorded opinions.</p>'}
                ${opinionsByHTML}
                ${opinionsOfHTML}
            </div>
        `;
    }

    detailPanelContent.innerHTML = contentHTML;
    detailPanel.classList.add('visible');
    appContainer.classList.add('panel-visible');
}

if(detailPanelClose) detailPanelClose.addEventListener('click', hideDetailPanel);

// --- D3 Force-Directed Graph ---

let masterNodes = [];
let masterLinks = [];
let svg, graphGroup, tooltip, simulation;

function processGraphData() {
    const allFactions = LORE_DATA.factions;
    const allCharacters = LORE_DATA.characters;
    const isDebug = state.debugMode;

    const knownFactionKeys = new Set(Object.keys(LORE_DATA.factions).filter(key => isDebug || getIntelForFaction(key) > 0));

    const nodes = [];
    const links = [];
    const characterNodeIds = new Set();
    
    // Process Factions
    knownFactionKeys.forEach(key => {
        const faction = allFactions[key];
        nodes.push({ id: key, type: 'faction', name: faction.name, category: faction.category, power: faction.power_level, logo: faction.logo });
    });

    // Process Characters (Leaders & Party)
    Object.keys(allCharacters).forEach(key => {
        const char = allCharacters[key];
        const isParty = char.isParty;
        const leaderFactionKey = Object.keys(allFactions).find(fKey => allFactions[fKey].leader === key || allFactions[fKey].notable_people?.some(p => p.name === char.name));

        if (isParty || (leaderFactionKey && knownFactionKeys.has(leaderFactionKey))) {
            nodes.push({ id: key, type: isParty ? 'party' : 'leader', name: char.name, role: char.role || (isParty ? "Main Party" : "Key Figure") });
            characterNodeIds.add(key);
        }
    });

    const knownNodeIds = new Set(nodes.map(n => n.id));

    // Process Links
    knownFactionKeys.forEach(sourceKey => {
        const faction = allFactions[sourceKey];
        if (faction.relations?.allies) {
            faction.relations.allies.forEach(targetKey => { if (knownFactionKeys.has(targetKey)) links.push({ source: sourceKey, target: targetKey, type: 'ally' }); });
        }
        if (faction.relations?.enemies) {
            faction.relations.enemies.forEach(targetKey => { if (knownFactionKeys.has(targetKey)) links.push({ source: sourceKey, target: targetKey, type: 'enemy' }); });
        }
    });

    // Add tethers for known leaders to their known factions
    nodes.forEach(node => {
        if (node.type === 'leader') {
            const leaderFactionKey = Object.keys(allFactions).find(fKey => allFactions[fKey].leader === node.id || allFactions[fKey].notable_people?.some(p => p.name === node.name));
            if (leaderFactionKey && knownNodeIds.has(leaderFactionKey)) {
                links.push({ source: node.id, target: leaderFactionKey, type: 'tether' });
            }
        }
    });

    Object.keys(CHARACTER_RELATIONS).forEach(sourceKey => {
        Object.keys(CHARACTER_RELATIONS[sourceKey]).forEach(targetKey => {
            if (knownNodeIds.has(sourceKey) && knownNodeIds.has(targetKey)) {
                const relation = CHARACTER_RELATIONS[sourceKey][targetKey];
                links.push({ source: sourceKey, target: targetKey, type: relation.type, text: relation.text });
            }
        });
    });

    masterNodes = nodes;
    masterLinks = links;
}

function setupGraphCanvas(container) {
    const width = container.clientWidth;
    const height = container.clientHeight;

    svg = d3.select(container)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", [0, 0, width, height]);

    svg.on('click', (event) => {
        if (event.target === svg.node()) {
            hideDetailPanel();
        }
    });

    graphGroup = svg.append("g");
    tooltip = d3.select(container).append("div").attr("class", "graph-tooltip");

    simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(d => d.id).distance(d => {
            if (d.type === 'tether') return 60;
            if (d.type === 'ally') return 120;
            return 180;
        }).strength(d => d.type === 'tether' ? 0.2 : 0.1))
        .force("charge", d3.forceManyBody().strength(d => d.type === 'faction' ? -400 : -100))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(0.04)) // A gentle pull to the horizontal center
        .force("y", d3.forceY(height / 2).strength(0.04)) // A gentle pull to the vertical center
        .force("collide", d3.forceCollide().radius(d => (d.type === 'faction' ? 10 + d.power * 2.5 : d.type === 'party' ? 15 : 12) + 5));
    
    const zoom = d3.zoom().scaleExtent([0.1, 4]).on('zoom', (event) => {
        graphGroup.attr('transform', event.transform);
    });
    svg.call(zoom);
}

function updateGraphVisualization(nodes, links) {
    graphGroup.selectAll("*").remove();
    const loggedInUser = localStorage.getItem('vigilanceTerminalUser') || 'generic';

    simulation.nodes(nodes);
    simulation.force("link").links(links);
    
    const link = graphGroup.append("g")
        .selectAll("line").data(links).join("line").attr("class", d => `link ${d.type}`);

    const node = graphGroup.append("g")
        .selectAll("g").data(nodes).join("g").attr("class", d => `node ${d.type}`);

    node.append("circle")
        .attr("r", d => d.type === 'faction' ? 10 + d.power * 2.5 : d.type === 'party' ? 14 : 10)
        .style("fill", d => d.type === 'faction' ? (FACTION_COLORS[d.id] || "var(--text-secondary)") : "var(--sidebar-bg)")
        .classed("logged-in-player", d => d.id === loggedInUser);

    node.filter(d => d.type === 'faction').append("image")
        .attr("xlink:href", d => d.logo)
        .attr("x", d => -(10 + d.power * 2.5) * 0.7).attr("y", d => -(10 + d.power * 2.5) * 0.7)
        .attr("width", d => (10 + d.power * 2.5) * 1.4).attr("height", d => (10 + d.power * 2.5) * 1.4);
        
    node.filter(d => d.type !== 'faction').append("text")
        .text(d => d.name).attr("dy", d => d.type === 'party' ? "26px" : "22px");

    simulation.on("tick", () => {
        link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
        node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    const linkedByIndex = {};
    links.forEach(d => { 
        linkedByIndex[`${d.source.id || d.source},${d.target.id || d.target}`] = 1; 
    });
    function isConnected(a, b) { return linkedByIndex[`${a.id},${b.id}`] || linkedByIndex[`${b.id},${a.id}`] || a.id === b.id; }

    node.on("mouseover", function (event, d) {
        if (detailPanel.classList.contains('visible')) return;
        tooltip.html(`<h4>${d.name}</h4><p><strong>Role:</strong> ${d.role || d.category}</p>`).style("opacity", .9);
        node.style("opacity", o => isConnected(d, o) ? 1 : 0.2);
        link.style("stroke-opacity", o => (o.source === d || o.target === d || o.source.id === d.id || o.target.id === d.id) ? 1 : 0.1);
    })
    .on("mousemove", (event) => {
        const containerRect = event.currentTarget.closest('#relations-graph-container').getBoundingClientRect();
        tooltip.style("left", (event.clientX - containerRect.left + 15) + "px")
               .style("top", (event.clientY - containerRect.top - 28) + "px");
    })
    .on("mouseout", function () {
        tooltip.style("opacity", 0);
        node.style("opacity", 1);
        link.style("stroke-opacity", d => d.type === 'tether' ? 0.4 : 0.6);
    })
    .on('click', function(event, d) {
        event.stopPropagation();
        showDetailPanel(d, this);
    });

    link.on('mouseover', function(event, d) { if(d.text) tooltip.html(`<p>${d.text}</p>`).style("opacity", .9); })
    .on("mousemove", (event) => { 
        const containerRect = event.currentTarget.closest('#relations-graph-container').getBoundingClientRect();
        tooltip.style("left", (event.clientX - containerRect.left + 15) + "px")
               .style("top", (event.clientY - containerRect.top - 28) + "px");
    })
    .on('mouseout', function() { tooltip.style("opacity", 0); });

    node.call(d3.drag()
        .on("start", (event, d) => { if (!event.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
        .on("drag", (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on("end", (event, d) => { if (!event.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; }));
    
    simulation.alpha(1).restart();
}

function filterAndRedraw(filter) {
    let filteredNodes;
    const nodeIds = new Set();
    const partyIds = new Set(masterNodes.filter(n => n.type === 'party').map(n => n.id));

    switch (filter) {
        case 'party_factions':
            filteredNodes = masterNodes.filter(n => n.type === 'party' || n.type === 'faction');
            break;
        case 'party_leaders':
            filteredNodes = masterNodes.filter(n => n.type === 'party' || n.type === 'leader');
            break;
        case 'major_powers':
            filteredNodes = masterNodes.filter(n => partyIds.has(n.id) || (n.type === 'faction' && n.category === 'Major Powers') || (n.type === 'leader' && masterLinks.some(l => l.source === n.id && masterNodes.find(t => t.id === l.target)?.category === 'Major Powers')));
            break;
        case 'underworld':
            filteredNodes = masterNodes.filter(n => partyIds.has(n.id) || (n.type === 'faction' && n.category === 'Underworld & Fringe') || (n.type === 'leader' && masterLinks.some(l => l.source === n.id && masterNodes.find(t => t.id === l.target)?.category === 'Underworld & Fringe')));
            break;
        case 'all':
        default:
            filteredNodes = [...masterNodes];
            break;
    }

    filteredNodes.forEach(n => nodeIds.add(n.id));
    const filteredLinks = masterLinks.filter(l => nodeIds.has(l.source.id || l.source) && nodeIds.has(l.target.id || l.target));

    updateGraphVisualization(filteredNodes, filteredLinks);
}

function setupFilterControls() {
    const controlButtons = document.querySelectorAll('#graph-controls .control-button');
    controlButtons.forEach(button => {
        button.addEventListener('click', () => {
            controlButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter;
            filterAndRedraw(filter);
        });
    });
}


function initializeGraph() {
    const container = document.getElementById('relations-graph-container');
    if (!container) return;
    
    processGraphData();
    setupGraphCanvas(container);
    updateGraphVisualization(masterNodes, masterLinks); // Initial draw with all data
    setupFilterControls();
}


function createRelationsMatrix() {
    const container = document.getElementById('relations-container');
    if (!container) return;

    const isDebug = state.debugMode;
    const knownFactionKeys = Object.keys(LORE_DATA.factions).filter(key => isDebug || getIntelForFaction(key) > 0);

    const factions = LORE_DATA.factions;
    const categoryOrder = ['Major Powers', 'Regional Powers', 'Mystical & Ancient', 'Underworld & Fringe', 'Interdimensional Threats'];
    const sortedFactionKeys = knownFactionKeys.sort((a, b) => {
        const indexA = categoryOrder.indexOf(factions[a].category);
        const indexB = categoryOrder.indexOf(factions[b].category);
        if (indexA !== indexB) return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
        return factions[a].name.localeCompare(factions[b].name);
    });

    const table = document.createElement('table');
    table.className = 'relations-matrix';
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th></th>'; // Corner
    sortedFactionKeys.forEach(key => { headerRow.innerHTML += `<th><div>${factions[key].name}</div></th>`; });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    sortedFactionKeys.forEach(rowKey => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${factions[rowKey].name}</th>`;
        sortedFactionKeys.forEach(colKey => {
            if (rowKey === colKey) {
                tr.innerHTML += '<td class="self">—</td>';
            } else {
                const rowFaction = factions[rowKey];
                let relation = 'neutral', symbol = 'o', title = `${rowFaction.name} considers ${factions[colKey].name} Neutral.`;
                if (rowFaction.relations?.allies?.includes(colKey)) {
                    relation = 'ally'; symbol = '+'; title = `${rowFaction.name} considers ${factions[colKey].name} an Ally.`;
                } else if (rowFaction.relations?.enemies?.includes(colKey)) {
                    relation = 'enemy'; symbol = '-'; title = `${rowFaction.name} considers ${factions[colKey].name} an Enemy.`;
                }
                tr.innerHTML += `<td class="${relation}" title="${title}">${symbol}</td>`;
            }
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.innerHTML = '';
    container.appendChild(table);
}

// Main execution
initializeGraph();
createRelationsMatrix();