import { GUILD_DATA, CHARTER_DATA } from './guilds-data.js';
import { LORE_DATA } from './lore.js';
import { playSound } from './common.js';

function renderCard(data, key, type = 'guild') {
    const cardData = data;
    const sponsor = cardData.sponsoring_faction ? LORE_DATA.factions[cardData.sponsoring_faction] : null;
    
    // --- Prepare Tab Content ---
    const goalsHTML = cardData.goals.map(goal => `<li>${goal}</li>`).join('');
    const ranksHTML = cardData.ranks.map(rank => `<li><strong>${rank.title}:</strong> ${rank.description}</li>`).join('');
    const rulesHTML = cardData.rules.map(rule => `<li>${rule}</li>`).join('');
    const hasSubGuilds = cardData.sub_guilds && cardData.sub_guilds.length > 0;
    const subGuildsHTML = hasSubGuilds ? cardData.sub_guilds.map(sub => `
        <div class="sub-guild-card">
            <h6>${sub.name}</h6>
            <p><strong>Leader:</strong> ${sub.leader}</p>
            <p><em>${sub.description}</em></p>
        </div>
    `).join('') : '';

    // --- Build Tabs ---
    let tabsHTML = `
        <button class="guild-tab-btn active" data-tab="goals">Goals</button>
        <button class="guild-tab-btn" data-tab="ranks">Ranks</button>
        <button class="guild-tab-btn" data-tab="rules">Rules</button>
        <button class="guild-tab-btn" data-tab="recruitment">Recruitment</button>
    `;
    if (hasSubGuilds) {
        tabsHTML += `<button class="guild-tab-btn" data-tab="subguilds">Sub-Guilds</button>`;
    }

    // --- Build Content Panes ---
    let contentHTML = `
        <div class="guild-tab-content active" data-tab-content="goals">
            <h5>Primary Goals</h5>
            <ul>${goalsHTML}</ul>
        </div>
        <div class="guild-tab-content" data-tab-content="ranks">
            <h5>Ranks & Hierarchy</h5>
            <ul>${ranksHTML}</ul>
        </div>
        <div class="guild-tab-content" data-tab-content="rules">
            <h5>Code of Conduct</h5>
            <ul>${rulesHTML}</ul>
        </div>
        <div class="guild-tab-content" data-tab-content="recruitment">
            <h5>Joining</h5>
            <p>${cardData.recruitment}</p>
        </div>
    `;
    if (hasSubGuilds) {
        contentHTML += `
            <div class="guild-tab-content" data-tab-content="subguilds">
                <h5>Sub-Groups</h5>
                ${subGuildsHTML}
            </div>
        `;
    }
    const cardClass = type === 'guild' ? 'guild-card' : 'guild-card charter-card';
    return `
        <div class="${cardClass}" id="${type}-${key}">
            <div class="guild-header">
                <img src="${sponsor ? sponsor.logo : 'icon_focus.png'}" alt="${cardData.name} Logo" class="guild-logo">
                <div class="guild-title-group">
                    <h3>${cardData.name}</h3>
                    <p>Sponsored by: ${sponsor ? sponsor.name : 'Independent'}</p>
                </div>
            </div>
            <div class="guild-body">
                <p>${cardData.description}</p>
                <div class="guild-info-block">
                    <ul>
                        <li><strong>Leader:</strong> ${cardData.leader}</li>
                        <li><strong>HQ:</strong> ${cardData.headquarters}</li>
                    </ul>
                </div>
                <div class="guild-details-tabs">${tabsHTML}</div>
                <div class="guild-details-content">${contentHTML}</div>
            </div>
        </div>
    `;
}


function renderPageContent() {
    const guildsContainer = document.getElementById('guilds-container');
    const chartersContainer = document.getElementById('charters-container');

    if (!guildsContainer || !chartersContainer) return;

    let guildsHTML = '';
    for (const guildKey in GUILD_DATA) {
        guildsHTML += renderCard(GUILD_DATA[guildKey], guildKey, 'guild');
    }
    guildsContainer.innerHTML = guildsHTML;

    let chartersHTML = '';
    for (const charterKey in CHARTER_DATA) {
        chartersHTML += renderCard(CHARTER_DATA[charterKey], charterKey, 'charter');
    }
    chartersContainer.innerHTML = chartersHTML;
}

function setupEventListeners() {
    const app = document.getElementById('app');
    if (!app) return;

    app.addEventListener('click', e => {
        const tabBtn = e.target.closest('.guild-tab-btn');
        if (tabBtn) {
            playSound('click.mp3', 0.6);
            const card = tabBtn.closest('.guild-card, .charter-card');
            const tabName = tabBtn.dataset.tab;

            card.querySelectorAll('.guild-tab-btn').forEach(btn => btn.classList.remove('active'));
            card.querySelectorAll('.guild-tab-content').forEach(content => content.classList.remove('active'));

            tabBtn.classList.add('active');
            const activeContent = card.querySelector(`.guild-tab-content[data-tab-content="${tabName}"]`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        }
    });
}


function init() {
    if (!document.getElementById('guilds-container')) return;
    renderPageContent();
    setupEventListeners();
}

init();