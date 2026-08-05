import { LORE_DATA, CHARACTER_RELATIONS } from '../../../lore.js';
import { state } from '../../../state.js';
import { FACTION_COLORS } from '../../../factions/faction-colors.js';

// ============================================
// RELATIONSHIP MANAGER - Central Data Handler
// ============================================

class RelationshipManager {
    constructor() {
        this.entities = new Map();
        this.relationships = [];
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        this.processEntities();
        this.processRelationships();
        this.initialized = true;
    }

    getIntelLevel(factionKey) {
        if (state.debugMode) return 10;
        if (!state.intelLevels || !factionKey) return 0;
        
        const user = state.loggedInUser || 'generic';
        const userIntel = state.intelLevels[user] || state.intelLevels.generic || {};
        return userIntel[factionKey] ?? userIntel.default ?? 0;
    }

    processEntities() {
        // Process Factions
        Object.entries(LORE_DATA.factions || {}).forEach(([key, faction]) => {
            if (this.getIntelLevel(key) > 0) {
                this.entities.set(key, {
                    id: key,
                    type: 'faction',
                    name: faction.name,
                    category: faction.category || 'Unknown',
                    power: faction.power_level || 3,
                    image: faction.logo || 'images/factions/default.png',
                    description: faction.description,
                    factionRelations: faction.relations || {}
                });
            }
        });

        // Process Main Characters
        Object.entries(LORE_DATA.characters || {}).forEach(([key, char]) => {
            const faction = this.findCharacterFaction(key, char.name);
            const isParty = char.isParty;
            
            // Include if party member, or if their faction is known
            if (isParty || (faction && this.entities.has(faction))) {
                this.entities.set(key, {
                    id: key,
                    type: isParty ? 'party' : 'character',
                    name: char.name,
                    role: char.role || (isParty ? 'Party Member' : 'Notable Figure'),
                    image: char.portrait || 'portraits/unknown.png',
                    faction: faction,
                    isParty: isParty
                });
            }
        });

        // Process Auxiliary Party Members
        Object.entries(LORE_DATA.auxiliary_party || {}).forEach(([key, char]) => {
            this.entities.set(key, {
                id: key,
                type: 'auxiliary',
                name: char.name,
                role: char.role || 'Ally',
                image: char.portrait || 'portraits/unknown.png',
                isParty: true
            });
        });
    }

    findCharacterFaction(charKey, charName) {
        for (const [factionKey, faction] of Object.entries(LORE_DATA.factions || {})) {
            if (faction.leader === charKey) return factionKey;
            if (faction.notable_people?.some(p => p.key === charKey || p.name === charName)) {
                return factionKey;
            }
        }
        return null;
    }

    processRelationships() {
        const addedPairs = new Set();

        // Faction-to-Faction relationships
        this.entities.forEach((entity, key) => {
            if (entity.type !== 'faction') return;

            const addFactionLink = (targetKey, type, category) => {
                if (!this.entities.has(targetKey)) return;
                const pairKey = [key, targetKey].sort().join('|');
                if (addedPairs.has(pairKey)) return;
                addedPairs.add(pairKey);
                
                this.relationships.push({
                    source: key,
                    target: targetKey,
                    type,
                    category,
                    bidirectional: true
                });
            };

            entity.factionRelations.allies?.forEach(t => addFactionLink(t, 'ally', 'positive'));
            entity.factionRelations.enemies?.forEach(t => addFactionLink(t, 'enemy', 'negative'));
        });

        // Character-to-Character relationships
        Object.entries(CHARACTER_RELATIONS || {}).forEach(([sourceKey, relations]) => {
            if (!this.entities.has(sourceKey)) return;

            Object.entries(relations).forEach(([targetKey, rel]) => {
                if (!this.entities.has(targetKey)) return;

                this.relationships.push({
                    source: sourceKey,
                    target: targetKey,
                    type: rel.type,
                    category: this.categorize(rel.type),
                    text: rel.text,
                    bidirectional: false
                });
            });
        });

        // Character-to-Faction tethers
        this.entities.forEach((entity, key) => {
            if (entity.faction && this.entities.has(entity.faction)) {
                this.relationships.push({
                    source: key,
                    target: entity.faction,
                    type: 'member',
                    category: 'tether',
                    bidirectional: false
                });
            }
        });
    }

    categorize(type) {
        const map = {
            ally: 'positive', loyalty: 'positive', friendship: 'positive', trust: 'positive',
            enemy: 'negative', hostile: 'negative', hatred: 'negative',
            rivalry: 'complicated', distrust: 'complicated', volatile: 'complicated', 
            suspicious: 'complicated', tension: 'complicated',
            neutral: 'neutral', transactional: 'neutral', professional: 'neutral'
        };
        return map[type?.toLowerCase()] || 'neutral';
    }

    extractQuote(text) {
        if (!text) return null;
        const parts = text.split(':');
        const quote = parts.length > 1 ? parts.slice(1).join(':').trim() : text.trim();
        return quote.length > 0 ? quote : null;
    }

    // --- PUBLIC API ---

    getEntity(id) {
        return this.entities.get(id);
    }

    getAllEntities(filter = null) {
        let results = Array.from(this.entities.values());
        
        if (filter) {
            results = results.filter(e => {
                switch (filter) {
                    case 'faction': return e.type === 'faction';
                    case 'party': return e.isParty;
                    case 'character': return e.type === 'character' || e.type === 'party' || e.type === 'auxiliary';
                    default: return true;
                }
            });
        }
        
        return results.sort((a, b) => a.name.localeCompare(b.name));
    }

    getEntitiesWithRelationships() {
        const hasRelations = new Set();
        
        this.relationships.forEach(r => {
            if (r.text) {
                hasRelations.add(r.source);
                hasRelations.add(r.target);
            }
        });

        // Add factions with allies/enemies
        this.entities.forEach((e, key) => {
            if (e.type === 'faction' && e.factionRelations) {
                if (e.factionRelations.allies?.length || e.factionRelations.enemies?.length) {
                    hasRelations.add(key);
                }
            }
        });

        return this.getAllEntities().filter(e => hasRelations.has(e.id));
    }

    getRelationshipsFor(entityId) {
        const result = {
            positive: [],
            negative: [],
            complicated: [],
            neutral: []
        };

        // Outgoing (opinions BY this entity)
        this.relationships
            .filter(r => r.source === entityId && r.text)
            .forEach(r => {
                const target = this.entities.get(r.target);
                const quote = this.extractQuote(r.text);
                if (target && quote) {
                    result[r.category].push({
                        entity: target,
                        type: r.type,
                        quote,
                        direction: 'outgoing'
                    });
                }
            });

        // Incoming (opinions OF this entity)
        this.relationships
            .filter(r => r.target === entityId && r.text)
            .forEach(r => {
                const source = this.entities.get(r.source);
                const quote = this.extractQuote(r.text);
                if (source && quote) {
                    result[r.category].push({
                        entity: source,
                        type: r.type,
                        quote,
                        direction: 'incoming'
                    });
                }
            });

        // For factions, also include allies/enemies
        const entity = this.entities.get(entityId);
        if (entity?.type === 'faction' && entity.factionRelations) {
            entity.factionRelations.allies?.forEach(targetKey => {
                const target = this.entities.get(targetKey);
                if (target) {
                    result.positive.push({
                        entity: target,
                        type: 'ally',
                        quote: `Allied faction`,
                        direction: 'mutual'
                    });
                }
            });
            entity.factionRelations.enemies?.forEach(targetKey => {
                const target = this.entities.get(targetKey);
                if (target) {
                    result.negative.push({
                        entity: target,
                        type: 'enemy',
                        quote: `Hostile faction`,
                        direction: 'mutual'
                    });
                }
            });
        }

        return result;
    }

    getGraphData(filter = 'all') {
        let nodes = Array.from(this.entities.values());
        const partyIds = new Set(nodes.filter(n => n.isParty).map(n => n.id));

        switch (filter) {
            case 'factions':
                nodes = nodes.filter(n => n.type === 'faction' || n.isParty);
                break;
            case 'characters':
                nodes = nodes.filter(n => n.type !== 'faction');
                break;
            case 'party':
                nodes = nodes.filter(n => n.isParty);
                break;
            case 'major':
                nodes = nodes.filter(n => 
                    n.isParty || n.category === 'Major Powers' ||
                    (n.faction && this.entities.get(n.faction)?.category === 'Major Powers')
                );
                break;
            case 'underworld':
                nodes = nodes.filter(n => 
                    n.isParty || n.category === 'Underworld & Fringe' ||
                    (n.faction && this.entities.get(n.faction)?.category === 'Underworld & Fringe')
                );
                break;
        }

        const nodeIds = new Set(nodes.map(n => n.id));
        const links = this.relationships
            .filter(r => nodeIds.has(r.source) && nodeIds.has(r.target))
            .map(r => ({ ...r })); // Clone to avoid D3 mutation issues

        return { nodes, links };
    }
}

// ============================================
// GRAPH RENDERER - D3 Visualization
// ============================================

class GraphRenderer {
    constructor(containerId, manager) {
        this.container = document.getElementById(containerId);
        this.manager = manager;
        this.svg = null;
        this.graphGroup = null;
        this.tooltip = null;
        this.simulation = null;
        this.selectedNode = null;
        this.currentFilter = 'all';
        
        this.onNodeSelect = null; // Callback for node selection
    }

    init() {
        if (!this.container) return;
        this.setupCanvas();
        this.render();
        this.setupControls();
    }

    setupCanvas() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        // Clear existing
        this.container.innerHTML = '';

        this.svg = d3.select(this.container)
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', [0, 0, width, height]);

        this.graphGroup = this.svg.append('g').attr('class', 'graph-layer');

        this.tooltip = d3.select(this.container)
            .append('div')
            .attr('class', 'graph-tooltip');

        // Zoom behavior
        const zoom = d3.zoom()
            .scaleExtent([0.2, 4])
            .on('zoom', (event) => {
                this.graphGroup.attr('transform', event.transform);
            });

        this.svg.call(zoom);

        // Click background to deselect
        this.svg.on('click', (event) => {
            if (event.target === this.svg.node()) {
                this.deselectNode();
            }
        });

        // Setup simulation
        this.simulation = d3.forceSimulation()
            .force('link', d3.forceLink()
                .id(d => d.id)
                .distance(d => {
                    if (d.category === 'tether') return 50;
                    if (d.category === 'positive') return 100;
                    return 150;
                })
                .strength(d => d.category === 'tether' ? 0.3 : 0.15))
            .force('charge', d3.forceManyBody()
                .strength(d => d.type === 'faction' ? -350 : -80))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('x', d3.forceX(width / 2).strength(0.03))
            .force('y', d3.forceY(height / 2).strength(0.03))
            .force('collide', d3.forceCollide()
                .radius(d => this.getNodeRadius(d) + 8));
    }

    getNodeRadius(d) {
        if (d.type === 'faction') return 12 + (d.power || 3) * 2;
        if (d.isParty) return 14;
        return 10;
    }

    getNodeColor(d) {
        if (d.type === 'faction') {
            return FACTION_COLORS[d.id] || 'var(--text-secondary)';
        }
        if (d.isParty) return 'var(--accent-color)';
        return 'var(--sidebar-bg)';
    }

    render() {
        const { nodes, links } = this.manager.getGraphData(this.currentFilter);
        this.graphGroup.selectAll('*').remove();

        this.simulation.nodes(nodes);
        this.simulation.force('link').links(links);

        // Links
        const link = this.graphGroup.append('g')
            .attr('class', 'links-layer')
            .selectAll('line')
            .data(links)
            .join('line')
            .attr('class', d => `link ${d.type} ${d.category}`);

        // Nodes
        const node = this.graphGroup.append('g')
            .attr('class', 'nodes-layer')
            .selectAll('g')
            .data(nodes)
            .join('g')
            .attr('class', d => `node type-${d.type}${d.isParty ? ' is-party' : ''}`);

        // Node circles
        node.append('circle')
            .attr('r', d => this.getNodeRadius(d))
            .style('fill', d => this.getNodeColor(d))
            .classed('logged-in-user', d => d.id === state.loggedInUser);

        // Faction logos
        node.filter(d => d.type === 'faction')
            .append('image')
            .attr('xlink:href', d => d.image)
            .attr('x', d => -this.getNodeRadius(d) * 0.65)
            .attr('y', d => -this.getNodeRadius(d) * 0.65)
            .attr('width', d => this.getNodeRadius(d) * 1.3)
            .attr('height', d => this.getNodeRadius(d) * 1.3)
            .style('pointer-events', 'none');

        // Character labels
        node.filter(d => d.type !== 'faction')
            .append('text')
            .attr('dy', d => this.getNodeRadius(d) + 12)
            .attr('text-anchor', 'middle')
            .text(d => d.name);

        // Simulation tick
        this.simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node.attr('transform', d => `translate(${d.x},${d.y})`);
        });

        // Interactions
        this.setupInteractions(node, link, links);

        // Restart simulation
        this.simulation.alpha(1).restart();
    }

    setupInteractions(node, link, links) {
        // Build connectivity index
        const linkedById = {};
        links.forEach(l => {
            const sId = l.source.id || l.source;
            const tId = l.target.id || l.target;
            linkedById[`${sId},${tId}`] = true;
            linkedById[`${tId},${sId}`] = true;
        });

        const isConnected = (a, b) => {
            return linkedById[`${a.id},${b.id}`] || a.id === b.id;
        };

        // Node hover
        node
            .on('mouseenter', (event, d) => {
                if (this.selectedNode) return;

                this.tooltip
                    .html(`
                        <strong>${d.name}</strong>
                        <span class="tooltip-type">${d.category || d.role || d.type}</span>
                    `)
                    .classed('visible', true);

                // Highlight connected
                node.classed('dimmed', o => !isConnected(d, o));
                link.classed('dimmed', l => l.source.id !== d.id && l.target.id !== d.id);
            })
            .on('mousemove', (event) => {
                const rect = this.container.getBoundingClientRect();
                this.tooltip
                    .style('left', `${event.clientX - rect.left + 15}px`)
                    .style('top', `${event.clientY - rect.top - 10}px`);
            })
            .on('mouseleave', () => {
                this.tooltip.classed('visible', false);
                if (!this.selectedNode) {
                    node.classed('dimmed', false);
                    link.classed('dimmed', false);
                }
            })
            .on('click', (event, d) => {
                event.stopPropagation();
                this.selectNode(d, event.currentTarget);
            });

        // Link hover (for relationship text)
        link
            .on('mouseenter', (event, d) => {
                if (d.text) {
                    const quote = this.manager.extractQuote(d.text);
                    this.tooltip
                        .html(`<em>"${quote}"</em>`)
                        .classed('visible', true);
                }
            })
            .on('mousemove', (event) => {
                const rect = this.container.getBoundingClientRect();
                this.tooltip
                    .style('left', `${event.clientX - rect.left + 15}px`)
                    .style('top', `${event.clientY - rect.top - 10}px`);
            })
            .on('mouseleave', () => {
                this.tooltip.classed('visible', false);
            });

        // Drag behavior
        node.call(d3.drag()
            .on('start', (event, d) => {
                if (!event.active) this.simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            })
            .on('drag', (event, d) => {
                d.fx = event.x;
                d.fy = event.y;
            })
            .on('end', (event, d) => {
                if (!event.active) this.simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }));
    }

    selectNode(data, element) {
        this.deselectNode();
        
        this.selectedNode = element;
        d3.select(element).classed('selected', true);

        if (this.onNodeSelect) {
            this.onNodeSelect(data);
        }
    }

    deselectNode() {
        if (this.selectedNode) {
            d3.select(this.selectedNode).classed('selected', false);
            this.selectedNode = null;
        }
        
        this.graphGroup.selectAll('.node').classed('dimmed', false);
        this.graphGroup.selectAll('.link').classed('dimmed', false);
    }

    setFilter(filter) {
        this.currentFilter = filter;
        this.render();
    }

    setupControls() {
        const controls = document.getElementById('graph-controls');
        if (!controls) return;

        controls.querySelectorAll('.control-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                controls.querySelectorAll('.control-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.setFilter(btn.dataset.filter);
            });
        });
    }
}

// ============================================
// DOSSIER BROWSER - Entity Selection & Details
// ============================================

class DossierBrowser {
    constructor(manager) {
        this.manager = manager;
        this.selectorGrid = document.getElementById('dossier-selector');
        this.detailPanel = document.getElementById('dossier-detail');
        this.selectedId = null;
    }

    init() {
        this.renderSelector();
        this.setupSearch();
    }

    renderSelector() {
        if (!this.selectorGrid) return;

        const entities = this.manager.getEntitiesWithRelationships();

        const html = entities.map(entity => `
            <button class="dossier-btn" data-id="${entity.id}">
                <img src="${entity.image}" alt="${entity.name}" loading="lazy">
                <span class="dossier-btn-name">${entity.name}</span>
                <span class="dossier-btn-type">${entity.type}</span>
            </button>
        `).join('');

        this.selectorGrid.innerHTML = html;

        // Event delegation
        this.selectorGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.dossier-btn');
            if (!btn) return;

            this.selectorGrid.querySelectorAll('.dossier-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.showDossier(btn.dataset.id);
        });
    }

    setupSearch() {
        const searchInput = document.getElementById('dossier-search');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            this.selectorGrid.querySelectorAll('.dossier-btn').forEach(btn => {
                const name = btn.querySelector('.dossier-btn-name').textContent.toLowerCase();
                btn.style.display = name.includes(query) ? '' : 'none';
            });
        });
    }

    showDossier(entityId) {
        if (!this.detailPanel) return;

        const entity = this.manager.getEntity(entityId);
        if (!entity) return;

        this.selectedId = entityId;
        const relations = this.manager.getRelationshipsFor(entityId);

        const createSection = (items, title, category) => {
            if (!items.length) return '';

            const itemsHtml = items.map(item => `
                <div class="relation-card category-${category}">
                    <img src="${item.entity.image}" alt="${item.entity.name}" class="relation-card-img">
                    <div class="relation-card-content">
                        <div class="relation-card-header">
                            <span class="relation-card-name">
                                ${item.direction === 'outgoing' ? '→' : item.direction === 'incoming' ? '←' : '↔'}
                                ${item.entity.name}
                            </span>
                            <span class="relation-card-type">${item.type}</span>
                        </div>
                        <p class="relation-card-quote">"${item.quote}"</p>
                    </div>
                </div>
            `).join('');

            return `
                <div class="dossier-section">
                    <h4 class="section-title category-${category}">${title}</h4>
                    ${itemsHtml}
                </div>
            `;
        };

        const hasRelations = Object.values(relations).some(arr => arr.length > 0);

        this.detailPanel.innerHTML = `
            <div class="dossier-header">
                <img src="${entity.image}" alt="${entity.name}" class="dossier-portrait">
                <div class="dossier-info">
                    <h3>${entity.name}</h3>
                    <span class="dossier-meta">${entity.category || entity.role || entity.type}</span>
                </div>
            </div>
            
            <div class="dossier-body">
                ${hasRelations ? `
                    ${createSection(relations.positive, 'Allies & Loyalties', 'positive')}
                    ${createSection(relations.negative, 'Enemies & Hostilities', 'negative')}
                    ${createSection(relations.complicated, 'Rivalries & Complications', 'complicated')}
                    ${createSection(relations.neutral, 'Neutral & Professional', 'neutral')}
                ` : `
                    <div class="dossier-empty">
                        <p>No recorded relationships for this entity.</p>
                    </div>
                `}
            </div>
        `;

        this.detailPanel.classList.add('active');
        
        // Scroll into view on mobile
        if (window.innerWidth <= 768) {
            this.detailPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    selectById(entityId) {
        const btn = this.selectorGrid?.querySelector(`[data-id="${entityId}"]`);
        if (btn) {
            this.selectorGrid.querySelectorAll('.dossier-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            this.showDossier(entityId);
        }
    }
}

// ============================================
// DETAIL PANEL - Slide-out for Graph Nodes
// ============================================
// ============================================
// DETAIL PANEL - Slide-out for Graph Nodes
// ============================================

class DetailPanel {
    constructor(manager) {
        this.manager = manager;
        this.panel = document.getElementById('node-detail-panel');
        this.content = document.getElementById('node-detail-content');
        
        // Close panel when clicking outside (on the graph)
        document.getElementById('graph-container')?.addEventListener('click', (e) => {
            if (e.target.tagName === 'svg' || e.target.closest('svg')?.parentElement?.id === 'graph-container') {
                // Only hide if clicking the background, not a node
                if (!e.target.closest('.node')) {
                    this.hide();
                }
            }
        });
    }

    show(entity) {
        if (!this.panel || !this.content) return;

        const relations = this.manager.getRelationshipsFor(entity.id);

        let relationsHtml = '';
        
        ['positive', 'negative', 'complicated', 'neutral'].forEach(category => {
            if (relations[category].length) {
                relationsHtml += `
                    <div class="panel-relation-group">
                        <h5 class="category-${category}">${this.getCategoryLabel(category)}</h5>
                        <ul>
                            ${relations[category].map(r => `
                                <li class="category-${category}">
                                    ${r.direction === 'outgoing' ? '→' : '←'} ${r.entity.name}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            }
        });

        this.content.innerHTML = `
            <div class="panel-entity-header">
                <img src="${entity.image}" alt="${entity.name}">
                <div>
                    <h3>${entity.name}</h3>
                    <span>${entity.category || entity.role || entity.type}</span>
                </div>
            </div>
            ${entity.description ? `<p class="panel-description">${entity.description}</p>` : ''}
            ${relationsHtml || '<p class="panel-empty">No detailed relationships recorded.</p>'}
        `;

        this.panel.classList.add('visible');
        document.getElementById('app')?.classList.add('panel-open');
    }

    hide() {
        this.panel?.classList.remove('visible');
        document.getElementById('app')?.classList.remove('panel-open');
    }

    getCategoryLabel(category) {
        const labels = {
            positive: 'Allies',
            negative: 'Enemies',
            complicated: 'Complicated',
            neutral: 'Neutral'
        };
        return labels[category] || category;
    }
}


// ============================================
// VIEW SWITCHER - Tabs
// ============================================

class ViewSwitcher {
    constructor() {
        this.tabs = document.querySelectorAll('.view-tab');
        this.panels = document.querySelectorAll('.view-panel');
        
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => this.switchTo(tab.dataset.view));
        });
    }

    switchTo(viewId) {
        this.tabs.forEach(t => t.classList.toggle('active', t.dataset.view === viewId));
        this.panels.forEach(p => p.classList.toggle('active', p.id === viewId));
    }
}

// ============================================
// INITIALIZATION
// ============================================

function initRelationsPage() {
    const manager = new RelationshipManager();
    manager.init();

    const graph = new GraphRenderer('graph-container', manager);
    const dossier = new DossierBrowser(manager);
    const detailPanel = new DetailPanel(manager);
    const viewSwitcher = new ViewSwitcher();

    graph.init();
    dossier.init();

    // Connect graph selection to dossier
    graph.onNodeSelect = (entity) => {
        detailPanel.show(entity);
    };

    // Expose for debugging
    window.relationsDebug = { manager, graph, dossier };
}

// Wait for DOM and state
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRelationsPage);
} else {
    initRelationsPage();
}

export { RelationshipManager, GraphRenderer, DossierBrowser };