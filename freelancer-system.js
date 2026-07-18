// This module handles the rendering and animation of the Freelancer Underworld network graph.

import { LORE_DATA } from '../lore.js';

/**
 * Renders the static HTML structure for the Freelancer network.
 * @returns {string} HTML for the canvas and tooltip container.
 */
export function renderFreelancerNetwork() {
    return `
        <p class="system-description">The Underworld is not a monolith, but a web of competing and cooperating interests. Influence and resources flow constantly between the major players. This is a live representation of that network.</p>
        <div class="freelancer-network-container">
            <canvas id="freelancer-network-canvas"></canvas>
            <div id="freelancer-tooltip"></div>
        </div>
    `;
}

/**
 * Initializes the canvas, nodes, and animation loop for the network graph.
 */
export function initFreelancerNetwork() {
    const canvas = document.getElementById('freelancer-network-canvas');
    const tooltip = document.getElementById('freelancer-tooltip');
    if (!canvas || !tooltip) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    
    // Resize canvas to fit container
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const subFactions = LORE_DATA.factions.freelancer_underworld.internal_politics.sub_factions;
    
    const nodes = {
        syndicates: { x: canvas.width * 0.5, y: canvas.height * 0.2, data: subFactions.syndicates },
        independents: { x: canvas.width * 0.2, y: canvas.height * 0.75, data: subFactions.independents },
        brokers: { x: canvas.width * 0.8, y: canvas.height * 0.75, data: subFactions.information_brokers },
        cleaners: { x: canvas.width * 0.25, y: canvas.height * 0.45, data: subFactions.the_cleaners },
    };

    const connections = [
        { from: 'syndicates', to: 'independents' },
        { from: 'syndicates', to: 'brokers' },
        { from: 'syndicates', to: 'cleaners' },
        { from: 'independents', to: 'brokers' },
        { from: 'brokers', to: 'cleaners' }
    ];

    let particles = [];
    let hoveredNode = null;
    
    // Particle creation
    const particleInterval = setInterval(() => {
        if (!document.getElementById('freelancer-network-canvas')) {
            clearInterval(particleInterval);
            return;
        }
        connections.forEach(conn => {
            const startNode = nodes[conn.from];
            const endNode = nodes[conn.to];
            const angle = Math.atan2(endNode.y - startNode.y, endNode.x - startNode.x);
            const speed = 1;
            particles.push({
                x: startNode.x,
                y: startNode.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: Math.hypot(endNode.x - startNode.x, endNode.y - startNode.y) / speed,
            });
        });
    }, 250);

    canvas.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        const mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };

        hoveredNode = null;
        for (const key in nodes) {
            const node = nodes[key];
            const radius = node.data.influence / 2 + 10;
            const dist = Math.hypot(mouse.x - node.x, mouse.y - node.y);
            if (dist < radius) {
                hoveredNode = key;
                break;
            }
        }
        
        if (hoveredNode) {
            const nodeData = nodes[hoveredNode].data;
            tooltip.style.display = 'block';
            tooltip.style.left = `${mouse.x + 15}px`;
            tooltip.style.top = `${mouse.y}px`;
            tooltip.innerHTML = `<strong>${nodeData.name}</strong><em>Influence: ${nodeData.influence}%</em>`;
        } else {
            tooltip.style.display = 'none';
        }
    });
    
    canvas.addEventListener('mouseout', () => {
        hoveredNode = null;
        tooltip.style.display = 'none';
    });

    let animationFrameId;
    function animate() {
        if (!document.getElementById('freelancer-network-canvas')) {
             if (animationFrameId) cancelAnimationFrame(animationFrameId);
             return;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles = particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life--;
            return p.life > 0;
        });
        
        ctx.fillStyle = 'rgba(240, 185, 11, 0.6)'; // neutral-color
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw connections and nodes
        connections.forEach(conn => {
            const startNode = nodes[conn.from];
            const endNode = nodes[conn.to];
            const isHovered = hoveredNode && (conn.from === hoveredNode || conn.to === hoveredNode);
            ctx.beginPath();
            ctx.moveTo(startNode.x, startNode.y);
            ctx.lineTo(endNode.x, endNode.y);
            ctx.strokeStyle = isHovered ? 'var(--accent-color)' : 'var(--border-color)';
            ctx.lineWidth = isHovered ? 1.5 : 1;
            ctx.stroke();
        });

        for (const key in nodes) {
            const node = nodes[key];
            const radius = node.data.influence / 2 + 10;
            const isHovered = key === hoveredNode;

            ctx.beginPath();
            ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = 'var(--main-bg)';
            ctx.fill();
            ctx.strokeStyle = isHovered ? 'var(--accent-color)' : 'var(--underworld-fringe-color)';
            ctx.lineWidth = isHovered ? 2.5 : 1.5;
            ctx.stroke();

            ctx.fillStyle = 'var(--text-color)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = 'bold 11px "Roboto Mono"';
            ctx.fillText(node.data.name, node.x, node.y);
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}