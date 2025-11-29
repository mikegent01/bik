

import { GUILD_DATA, CHARTER_DATA } from './guilds-data.js';
import { state, loadState } from './state.js';
import { playSound } from './common.js';
import { SPECIES_DATA } from './species-data.js';

const grid = document.getElementById('guilds-grid');
const membershipContainer = document.getElementById('my-membership-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('guild-modal');
const modalBody = document.getElementById('guild-modal-body');
const modalClose = document.querySelector('.guild-modal-close');

let currentFilter = 'all';

function init() {
    loadState();
    setupEventListeners();
    renderDashboard();
}

function renderDashboard() {
    renderMembership();
    renderGrid();
}

function renderMembership() {
    if (!membershipContainer) return;
    
    const user = state.loggedInUser;
    if (!user || user === 'generic') {
        membershipContainer.innerHTML = '';
        return;
    }

    // Find guilds the player is a member of
    let myGuilds = [];
    
    // Check standard guilds
    Object.entries(GUILD_DATA).forEach(([key, guild]) => {
        if (guild.isPlayerMember === user) {
            myGuilds.push({ key, ...guild, type: 'Guild' });
        }
    });
    
    // Check charters
    Object.entries(CHARTER_DATA).forEach(([key, charter]) => {
        if (charter.isPlayerMember === user) {
            myGuilds.push({ key, ...charter, type: 'Charter' });
        }
    });

    if (myGuilds.length === 0) {
        membershipContainer.innerHTML = '';
        return;
    }

    const html = myGuilds.map(guild => {
        const dutiesHTML = (guild.duties || []).map(d => `
            <div class="duty-item">
                <div class="duty-info">
                    <strong>${d.task}</strong>
                    <span class="duty-reward">Reward: ${d.reward}</span>
                </div>
                <span class="duty-status status-${d.status.toLowerCase()}">${d.status}</span>
            </div>
        `).join('');

        // Find user's rank info if available (simplified assumption here)
        const rankInfo = guild.ranks ? guild.ranks.find(r => r.title.includes("Stonecarver") || r.title.includes("Member")) : { title: "Member" };
        const userRank = user === 'humpik' && guild.key === 'stonecarvers_brethren' ? "Stonecarver" : "Initiate";

        return `
            <div class="section-label">My Active Membership</div>
            <div class="membership-card">
                <div class="membership-header">
                    <div class="membership-badge">⚒️</div>
                    <h3 class="membership-title">${guild.name}</h3>
                    <span class="membership-rank">${userRank}</span>
                    <p style="font-size:0.85rem; color:var(--text-secondary);">${guild.headquarters}</p>
                </div>
                <div class="membership-duties">
                    <h4 style="font-family:var(--font-display); color:var(--text-color); margin:0;">Active Duties</h4>
                    ${dutiesHTML || '<p style="font-style:italic; color:var(--text-secondary);">No active duties.</p>'}
                </div>
            </div>
        `;
    }).join('');

    membershipContainer.innerHTML = html;
}

function renderGrid() {
    if (!grid) return;
    
    grid.innerHTML = '';
    
    let items = [];
    
    if (currentFilter === 'all' || currentFilter === 'guild') {
        Object.entries(GUILD_DATA).forEach(([k, v]) => items.push({ id: k, ...v, type: 'Guild' }));
    }
    if (currentFilter === 'all' || currentFilter === 'charter') {
        Object.entries(CHARTER_DATA).forEach(([k, v]) => items.push({ id: k, ...v, type: 'Charter' }));
    }
    
    if (currentFilter === 'my-guilds') {
         const user = state.loggedInUser;
         items = items.filter(i => i.isPlayerMember === user);
    }

    items.forEach(item => {
        const isMember = item.isPlayerMember === state.loggedInUser;
        const card = document.createElement('div');
        card.className = 'guild-card';
        
        if (isMember) {
            card.innerHTML += `<div class="member-ribbon">MEMBER</div>`;
            card.style.borderColor = 'var(--positive-color)';
        }
        
        // Calculate member count based on species affinity (Mock logic for now, using static data mostly)
        // In a real scenario, we'd sum up population from state.simulation.adjusted.bySpecies
        let memberCountDisplay = item.member_count;
        let speciesIcons = '';
        
        if (item.primary_species) {
             speciesIcons = item.primary_species.slice(0, 3).map(sKey => {
                 const species = SPECIES_DATA[sKey];
                 return species ? `<span title="${species.name}" style="font-size:1.2rem; margin-right:4px;">${species.icon}</span>` : '';
             }).join('');
        }

        card.innerHTML += `
            <div class="guild-card-header">
                <div>
                    <h4 class="guild-name">${item.name}</h4>
                    <span class="guild-type">${item.type}</span>
                </div>
                <div class="guild-icon">📜</div>
            </div>
            <div class="guild-stats">
                <div class="stat-box">👥 ${memberCountDisplay}</div>
                <div class="stat-box">💰 Res: ${item.resources ? 'High' : 'Low'}</div>
            </div>
             <div class="guild-species" style="margin-bottom:12px;">
                ${speciesIcons}
            </div>
            <p class="guild-desc">${item.description.substring(0, 100)}...</p>
        `;
        
        card.addEventListener('click', () => openModal(item));
        grid.appendChild(card);
    });
    
    if (items.length === 0) {
        grid.innerHTML = `<p style="color:var(--text-secondary); grid-column: 1/-1; text-align:center;">No organizations found.</p>`;
    }
}

function openModal(data) {
    playSound('click.mp3');
    
    const rulesHTML = data.rules.map(r => `<li>${r}</li>`).join('');
    const ranksHTML = data.ranks.map(r => `<li><strong>${r.title}:</strong> ${r.description}</li>`).join('');
    
    let resourceHTML = '';
    if (data.resources) {
        resourceHTML = `
            <div class="resource-group">
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
                    <span>Gold Reserves</span><span>${data.resources.gold}%</span>
                </div>
                <div class="resource-bar"><div class="resource-fill" style="width:${data.resources.gold}%; background: gold;"></div></div>
                
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:4px;">
                    <span>Influence</span><span>${data.resources.stone || 50}%</span>
                </div>
                <div class="resource-bar"><div class="resource-fill" style="width:${data.resources.stone || 50}%; background: grey;"></div></div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="guild-modal-header">
            <h2 class="guild-modal-title">${data.name}</h2>
            <p style="color:var(--text-secondary); margin-top:8px;">Leader: ${data.leader}</p>
            <span class="status-tag status-active" style="font-size:0.8rem; margin-top:8px; display:inline-block;">Active Contracts: ${data.active_contracts || 0}</span>
        </div>
        <div class="guild-modal-body">
            <div class="modal-section">
                <h4>Description</h4>
                <p>${data.description}</p>
                
                <h4 style="margin-top:16px;">Resources & Status</h4>
                ${resourceHTML}
                
                <h4 style="margin-top:16px;">Research Bonus</h4>
                <p class="text-accent">+${(data.research_bonus.amount * 100).toFixed(0)}% to ${data.research_bonus.category}</p>
            </div>
            <div class="modal-section">
                <h4>Hierarchy</h4>
                <ul style="list-style:none; padding:0; font-size:0.9rem;">${ranksHTML}</ul>
                
                <h4 style="margin-top:16px;">Core Rules</h4>
                <ul style="padding-left:20px; font-size:0.9rem;">${rulesHTML}</ul>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

function setupEventListeners() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            playSound('click.mp3');
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderGrid();
        });
    });
    
    if (modalClose) {
        modalClose.addEventListener('click', () => modal.style.display = 'none');
    }
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

init();
