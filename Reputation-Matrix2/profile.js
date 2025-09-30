
import { LORE_DATA } from './lore.js';
import { WAHBOOK_POSTS } from './assembly-data.js';
import { playSound } from './common.js';
import { PROFILE_THEMES } from './profile-themes.js';
import { state, loadState, saveState } from './state.js';
import { CHARACTER_MECHANICS } from './character-special-systems.js';

const pageContainer = document.getElementById('profile-page-container');
const headerContainer = document.getElementById('profile-header-container');
const feedContainer = document.getElementById('profile-feed-container');

const PORTRAIT_MAP = {
    ...Object.fromEntries(
        Object.entries(LORE_DATA.characters).map(([key, char]) => [key, `portraits/${key}.png`])
    ),
    'dan': 'toads/dan.png', 'toad_lee': 'toads/toad_lee.png', 'roger': 'toads/roger.png',
    'captain_toad': 'toads/captain_toad.png', 'chancellor_toadsworth': 'toads/chancellor_toadsworth.png',
    'evil_toad_god': 'toads/evil_toad_god.png', 'generic_toad': 'toads/toad.png',
    'giggling_pete': 'faction_jester.png', 'wah_media_collective': 'icon_newspaper.png',
    'freelancer_spy_1': 'faction_freelancer.png', 'regal_empire_delegate': 'faction_regal_empire.png',
    'chai': 'toads/chai.png', 'green_t': 'toads/green_t.png',
    'remi': 'portraits/remi.png',
    'lady_toriel': 'portraits/toriel.png'
};


function getCharacterData(characterKey) {
    const specialCases = {
        'wah_media_collective': { name: "WAH Media Collective", portrait: PORTRAIT_MAP['wah_media_collective'], role: 'News Outlet', bio: 'Delivering chaotic news.' },
        'freelancer_spy_1': { name: "Anonymous Broker", portrait: 'faction_freelancer.png', role: 'Information Broker', bio: 'Deals in secrets.' },
        'regal_empire_delegate': { name: "Imperial Delegate", portrait: 'faction_regal_empire.png', role: 'Diplomat', bio: 'Represents the Regal Empire.' },
        'generic_toad': { name: "Worried Toad", portrait: 'toads/toad.png', role: 'Civilian', bio: 'Just trying to get by.' },
        'rebel_clans_scout': { name: "Rebel Scout", portrait: 'faction_rebel_clans.png', role: 'Scout', bio: 'A scout for the Rebel Clans, operating in hostile territory.' }
    };
    if(specialCases[characterKey]) return specialCases[characterKey];

    if (LORE_DATA.factions[characterKey]) {
        const fac = LORE_DATA.factions[characterKey];
        return {
            name: fac.name,
            portrait: fac.logo,
            role: fac.category || "Faction",
            bio: fac.description
        };
    }

    if (LORE_DATA.characters[characterKey]) {
        const char = LORE_DATA.characters[characterKey];
        return {
            name: char.name,
            portrait: PORTRAIT_MAP[characterKey] || 'portraits/unknown.png',
            role: char.role || "Operator",
            bio: char.description || "No dossier information available."
        };
    }
    for (const fKey in LORE_DATA.factions) {
        const fac = LORE_DATA.factions[fKey];
        const notablePerson = fac.notable_people?.find(p => p.name.toLowerCase().replace(/\s/g, '_') === characterKey);
        if (notablePerson) {
            return {
                name: notablePerson.name,
                portrait: PORTRAIT_MAP[characterKey] || fac.logo,
                role: notablePerson.role,
                bio: notablePerson.description
            };
        }
    }
    return { name: 'Unknown User', portrait: 'portraits/unknown.png', role: 'Unknown', bio: 'No data found for this user.' };
}

function getProfileKeyFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('user');
}

function applyTheme(characterKey) {
    const theme = PROFILE_THEMES[characterKey] || PROFILE_THEMES.default;
    const root = document.documentElement;
    root.style.setProperty('--profile-banner-image', `url(${theme.bannerImage})`);
    root.style.setProperty('--profile-accent-color', theme.accentColor);
    root.style.setProperty('--profile-bg-color', theme.backgroundColor);
    root.style.setProperty('--profile-font-color', theme.fontColor);
    return theme;
}

function renderProfile(characterKey) {
    if (!pageContainer) return;

    loadState();
    const theme = applyTheme(characterKey);
    const character = getCharacterData(characterKey);
    
    const loggedInUser = state.loggedInUser;
    const isFollowing = loggedInUser !== 'generic' && state.userState.following.includes(characterKey);
    const showFollowButton = loggedInUser !== 'generic' && loggedInUser !== characterKey;

    const followButtonHTML = showFollowButton ? `
        <button class="follow-btn ${isFollowing ? 'following' : ''}" data-user-key="${characterKey}">
            ${isFollowing ? 'Following' : 'Follow'}
        </button>
    ` : '';
    
    let faction = null;
    for (const fKey in LORE_DATA.factions) {
        const fac = LORE_DATA.factions[fKey];
        if (fac.leader === characterKey || fac.notable_people?.some(p => p.name === character.name)) {
            faction = fac;
            break;
        }
    }
    
    const factionHTML = faction ? `
        <div class="profile-sidebar-widget">
            <h4>Affiliation</h4>
            <p><img src="${faction.logo}" style="width: 24px; height: 24px; vertical-align: middle; margin-right: 8px;">${faction.name}</p>
        </div>
    ` : '';

    const headerHTML = `
        <div id="profile-header-container">
            <div class="profile-header-content">
                <img src="${character.portrait}" alt="${character.name}" class="profile-picture-large">
                <div class="profile-info">
                    <div>
                        <h2 class="profile-name">${character.name}</h2>
                        <p class="profile-role">${character.role}</p>
                    </div>
                    <div class="profile-actions">
                       ${followButtonHTML}
                    </div>
                </div>
            </div>
        </div>
    `;

    const userPosts = WAHBOOK_POSTS.filter(p => p.characterKey === characterKey);
    const feedHTML = userPosts.length > 0 ? userPosts.map(post => {
         const commentsHTML = (post.comments || []).map(comment => {
            const commenter = getCharacterData(comment.characterKey);
            return `
                <div class="comment">
                     <a href="profile.html?user=${comment.characterKey}" class="profile-link">
                        <img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp">
                    </a>
                    <div class="comment-body">
                        <a href="profile.html?user=${comment.characterKey}" class="profile-link comment-author">${commenter.name}</a>
                        <span class="comment-text">${comment.text}</span>
                    </div>
                </div>
            `;
        }).join('');
        const imageHTML = post.image ? `<img src="${post.image}" alt="${post.image_alt}" class="post-image">` : '';

        return `
            <div class="feed-post">
                <p class="post-content">${post.content}</p>
                 ${imageHTML}
                <div class="post-meta" style="text-align: right; margin-bottom: 8px;">${post.timestamp}</div>
                <div class="post-interactions">
                    <div class="interaction-btn" data-likes="${post.likes}"><span class="interaction-btn-icon">👍</span> Like (${post.likes})</div>
                    <div class="interaction-btn"><span class="interaction-btn-icon">💬</span> Comment (${(post.comments || []).length})</div>
                    <div class="interaction-btn"><span class="interaction-btn-icon">↪️</span> Share</div>
                </div>
                ${commentsHTML ? `<div class="post-comments">${commentsHTML}</div>` : ''}
            </div>
        `;
    }).join('') : `<p class="page-subtitle">This user hasn't posted anything yet.</p>`;

    const bodyHTML = `
        <div id="profile-body">
            <aside id="profile-sidebar">
                <div class="profile-sidebar-widget">
                    <h4>About</h4>
                    <p>${character.bio}</p>
                </div>
                ${factionHTML}
                 <div id="profile-custom-sections">
                 </div>
            </aside>
            <div id="profile-feed-container">
                ${feedHTML}
            </div>
        </div>
    `;

    pageContainer.innerHTML = headerHTML + bodyHTML;

    // Render Custom Sections from theme
    const customSectionsContainer = document.getElementById('profile-custom-sections');
    if (theme.customSections && theme.customSections.length > 0) {
        customSectionsContainer.innerHTML = theme.customSections.map(section => `
            <div class="profile-sidebar-widget">
                <h4>${section.title}</h4>
                <div class="custom-section-content">${section.content}</div>
            </div>
        `).join('');
    }

    // Render Special Mechanic Section
    const specialMechanic = CHARACTER_MECHANICS[characterKey];
    if (specialMechanic) {
        const levelInfo = specialMechanic.levels.find(l => l.level === specialMechanic.current_level) || specialMechanic.levels[0];
        const nextLevelInfo = specialMechanic.levels.find(l => l.level === specialMechanic.current_level + 1);
        const infamyPercentage = nextLevelInfo ? Math.min(100, (specialMechanic.current_infamy / nextLevelInfo.infamy_threshold) * 100) : 100;

        const infamyLogHTML = specialMechanic.log.slice().reverse().map(entry => 
            `<li>+${entry.infamy} Infamy: <em>${entry.reason}</em></li>`
        ).join('');

        const mechanicHTML = `
            <div class="profile-sidebar-widget special-mechanic-widget">
                <h4>${specialMechanic.icon} ${specialMechanic.title}</h4>
                <div class="infamy-meter" title="${specialMechanic.current_infamy} / ${nextLevelInfo ? nextLevelInfo.infamy_threshold : 'MAX'} Infamy">
                    <div class="infamy-bar" style="width: ${infamyPercentage}%;"></div>
                    <span class="infamy-text">${specialMechanic.current_infamy} Infamy</span>
                </div>
                <p class="infamy-level-title">${levelInfo.name}</p>
                <p class="mechanic-description">${specialMechanic.description}</p>
                <details class="infamy-log-details">
                    <summary>Infamy Log</summary>
                    <ul>${infamyLogHTML}</ul>
                </details>
            </div>
        `;
        customSectionsContainer.insertAdjacentHTML('beforeend', mechanicHTML);
    }
}

function setupEventListeners() {
    pageContainer.addEventListener('click', e => {
        const followBtn = e.target.closest('.follow-btn');
        if (followBtn) {
            playSound('click.mp3');
            const userToFollow = followBtn.dataset.userKey;
            
            loadState(); // Make sure we have the latest state
            const followingList = state.userState.following || [];
            const isFollowing = followingList.includes(userToFollow);

            if (isFollowing) {
                state.userState.following = followingList.filter(u => u !== userToFollow);
                followBtn.textContent = 'Follow';
                followBtn.classList.remove('following');
            } else {
                state.userState.following.push(userToFollow);
                followBtn.textContent = 'Following';
                followBtn.classList.add('following');
            }
            saveState();
        }
    });
}

function init() {
    const characterKey = getProfileKeyFromURL();
    if (characterKey) {
        renderProfile(characterKey);
        setupEventListeners();
    } else {
        pageContainer.innerHTML = `<h2 class="page-title">User Not Found</h2><p class="page-subtitle">No user specified in the URL.</p>`;
    }
}

init();
