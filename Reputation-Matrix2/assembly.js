/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LORE_DATA } from './lore.js';
import { playSound } from './common.js';
import { state, saveState, loadState } from './state.js';
import { NPC_RESPONSES } from './npc-responses.js';
import { GUILD_DATA, CHARTER_DATA } from './guilds-data.js';
import { CHARACTER_MECHANICS } from './character-special-systems.js';

const tabsContainer = document.getElementById('wahbook-tabs-container');
const contentContainer = document.getElementById('wahbook-content');

const feedContainer = document.getElementById('feed-content');
const eventsContainer = document.getElementById('events-content');
const intelContainer = document.getElementById('intel-content');
const followedContainer = document.getElementById('followed-content');
const trendingContainer = document.getElementById('trending-content');
const groupsContainer = document.getElementById('groups-content');

const eventControls = document.getElementById('event-controls');

// Intel Modal
const dossierModal = document.getElementById('dossier-modal');
const dossierModalBody = document.getElementById('dossier-modal-body');
const dossierModalClose = document.querySelector('.dossier-modal-close');

// Create Post Modal
const createPostModal = document.getElementById('create-post-modal');
const newPostTextarea = document.getElementById('new-post-textarea');
const submitPostBtn = document.getElementById('submit-post-btn');

// Share Modal
const shareModal = document.getElementById('share-modal');
const shareCodeTextarea = document.getElementById('share-code-textarea');
const copyShareBtn = document.getElementById('copy-share-btn');

// Waluigi Warning Modal
const waluigiWarningModal = document.getElementById('waluigi-warning-modal');


let currentEventSort = 'newest';
let activeGroupFilter = 'all';

// --- DYNAMIC DATA LOADING ---
let WAHBOOK_POSTS = [];
let WAHBOOK_EVENTS = [];

async function loadDynamicData() {
    const dataModule = await import('./assembly-data.js');
    WAHBOOK_POSTS = dataModule.WAHBOOK_POSTS;
    
    // This now handles both loading the base events and conditionally adding new ones
    const eventsModule = await import('./assembly-events-data.js');
    WAHBOOK_EVENTS = eventsModule.WAHBOOK_EVENTS;
    
    // This loads posts from any active events
    const eventPosts = await eventsModule.loadEventPosts();
    WAHBOOK_POSTS.push(...eventPosts);
}


function getPortrait(characterKey) {
    const knownPortraits = {
        'dan': 'toads/dan.png', 'toad_lee': 'toads/toad_lee.png', 'roger': 'toads/roger.png',
        'captain_toad': 'toads/captain_toad.png', 'chancellor_toadsworth': 'toads/chancellor_toadsworth.png',
        'evil_toad_god': 'toads/evil_toad_god.png', 'generic_toad': 'toads/toad.png',
        'giggling_pete': 'faction_jester.png', 'wah_media_collective': 'icon_newspaper.png',
        'freelancer_spy_1': 'faction_freelancer.png', 'regal_empire_delegate': 'faction_regal_empire.png',
        'chai': 'toads/chai.png', 'green_t': 'toads/green_t.png',
        'lady_toriel': 'portraits/toriel.png'
    };

    if (knownPortraits[characterKey]) {
        return knownPortraits[characterKey];
    }
    
    // Check main characters
    if (LORE_DATA.characters[characterKey]) {
        return `portraits/${characterKey}.png`;
    }

    // Fallback to faction logo
    for (const fKey in LORE_DATA.factions) {
        const fac = LORE_DATA.factions[fKey];
        if (fac.leader === characterKey || fac.notable_people?.some(p => p.name.toLowerCase().replace(/[\s-]/g, '_') === characterKey)) {
            return fac.logo;
        }
    }

    if (LORE_DATA.factions[characterKey]) {
        return LORE_DATA.factions[characterKey].logo;
    }

    return 'portraits/unknown.png';
}

function getPortraitForEntity(key) {
    const char = LORE_DATA.characters[key];
    const faction = LORE_DATA.factions[key];
    const aux = LORE_DATA.auxiliary_party[key];

    if (char) return `portraits/${key}.png`;
    if (faction) return faction.logo;
    if (aux) return `toads/${key}.png`; // Assuming all aux are toads for now
    
    // Special cases not in main data files
    const specialPortraits = {
        'waluigi': 'portraits/waluigi.png',
        'wah_media_collective': 'icon_newspaper.png'
    };
    if (specialPortraits[key]) return specialPortraits[key];

    return 'portraits/unknown.png';
}


function formatCharacterKey(key) {
    if (!key) return '';
    return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getCharacterData(characterKey) {
    // Special cases for entities without formal character entries
    const specialCases = {
        'wah_media_collective': { name: "WAH Media Collective", portrait: getPortrait('wah_media_collective'), faction: { name: "The Daily Paradox", logo: 'icon_newspaper.png' } },
        'freelancer_spy_1': { name: "Anonymous Broker", portrait: getPortrait('freelancer_spy_1'), faction: { name: "Freelancer Underworld" } },
        'regal_empire_delegate': { name: "Imperial Delegate", portrait: getPortrait('regal_empire_delegate'), faction: { name: "The Regal Empire" } },
        'generic_toad': { name: "Worried Toad", portrait: getPortrait('generic_toad'), faction: { name: "Mushroom Kingdom Civilian" } },
        'rebel_clans_scout': { name: "Rebel Scout", portrait: 'faction_rebel_clans.png', faction: { name: "The Rebel Clans" } }
    };

    if (specialCases[characterKey]) {
        return specialCases[characterKey];
    }

    if (LORE_DATA.factions[characterKey]) {
        const fac = LORE_DATA.factions[characterKey];
        return { name: fac.name, portrait: getPortrait(characterKey), faction: { name: fac.name, logo: fac.logo } };
    }

    if (LORE_DATA.characters[characterKey]) {
        const char = LORE_DATA.characters[characterKey];
        let faction = null;
        for (const fKey in LORE_DATA.factions) {
            const fac = LORE_DATA.factions[fKey];
            if (fac.leader === characterKey || fac.notable_people?.some(p => p.name === char.name)) {
                faction = fac;
                break;
            }
        }
        return {
            name: char.name,
            portrait: getPortrait(characterKey),
            faction: faction ? { name: faction.name, logo: faction.logo } : null
        };
    }

    for (const fKey in LORE_DATA.factions) {
        const fac = LORE_DATA.factions[fKey];
        // Fix: handle hyphens in names like "Free-Name Sarah" when creating a key
        const notablePerson = fac.notable_people?.find(p => p.name.toLowerCase().replace(/[\s-]/g, '_') === characterKey);
        if (notablePerson) {
            return {
                name: notablePerson.name,
                portrait: getPortrait(characterKey),
                faction: { name: fac.name, logo: fac.logo }
            };
        }
    }

    return { name: formatCharacterKey(characterKey), portrait: getPortrait('unknown'), faction: null };
}

function renderFeedPost(post, options = {}) {
    const author = getCharacterData(post.characterKey);
    const factionHTML = author.faction ? `<span class="post-meta">${author.faction.name} · ${post.timestamp}</span>` : `<span class="post-meta">${post.timestamp}</span>`;
    
    const isNew = state.userState.seenPostIds && !state.userState.seenPostIds.includes(post.id);
    const newBadgeHTML = isNew ? `<div class="new-post-badge">NEW</div>` : '';

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
    const trendingBadgeHTML = options.showTrendingScore ? `<div class="trending-badge" title="Trending Score: ${options.trendingScore}">🔥</div>` : '';

    const loggedInUser = state.loggedInUser ? getCharacterData(state.loggedInUser) : null;
    const replyInputHTML = loggedInUser ? `
        <div class="reply-input-container">
            <img src="${loggedInUser.portrait}" alt="Your profile picture" class="reply-pfp">
            <input type="text" class="reply-input" placeholder="Write a comment...">
        </div>
    ` : '';

    return `
        <div class="feed-post" id="post-${post.id}">
            ${newBadgeHTML}
            ${trendingBadgeHTML}
            <div class="post-header">
                 <a href="profile.html?user=${post.characterKey}" class="profile-link">
                    <img src="${author.portrait}" alt="${author.name}" class="post-pfp">
                </a>
                <div class="post-author-info">
                     <a href="profile.html?user=${post.characterKey}" class="profile-link">
                        <span class="post-author-name">${author.name}</span>
                    </a>
                    ${factionHTML}
                </div>
            </div>
            <p class="post-content">${post.content}</p>
            ${imageHTML}
            <div class="post-interactions">
                <div class="interaction-btn like-btn" data-likes="${post.likes}"><span class="interaction-btn-icon">👍</span> Like (${post.likes})</div>
                <div class="interaction-btn comment-btn"><span class="interaction-btn-icon">💬</span> Comment (${(post.comments || []).length})</div>
                <div class="interaction-btn share-btn"><span class="interaction-btn-icon">↪️</span> Share</div>
            </div>
            <div class="post-comments-section">
                <div class="post-comments">${commentsHTML}</div>
                ${replyInputHTML}
            </div>
        </div>
    `;
}

function renderCreatePostBox() {
    const loggedInUserKey = state.loggedInUser === 'generic' ? 'waluigi' : state.loggedInUser;
    const user = getCharacterData(loggedInUserKey);
    return `
        <div class="create-post-container">
            <div class="create-post-header">
                <img src="${user.portrait}" alt="Your profile picture" class="create-post-pfp">
                <button class="create-post-input">What's on your mind, ${user.name.split(' ')[0]}?</button>
            </div>
        </div>
    `;
}

function renderChaosAgentWidget() {
    const characterKey = 'archie';
    const specialMechanic = CHARACTER_MECHANICS[characterKey];
    if (!specialMechanic) return '';

    const levelInfo = specialMechanic.levels.find(l => l.level === specialMechanic.current_level) || specialMechanic.levels[0];
    const nextLevelInfo = specialMechanic.levels.find(l => l.level === specialMechanic.current_level + 1);
    const infamyPercentage = nextLevelInfo ? Math.min(100, (specialMechanic.current_infamy / nextLevelInfo.infamy_threshold) * 100) : 100;

    const infamyLogHTML = specialMechanic.log.slice().reverse().map(entry => 
        `<li>+${entry.infamy} Infamy: <em>${entry.reason}</em></li>`
    ).join('');

    return `
        <div class="profile-sidebar-widget special-mechanic-widget">
            <h4>${specialMechanic.icon} ${specialMechanic.title}</h4>
            <h5 class="mechanic-subtitle">Operator: Archie Miser</h5>
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
}

function renderMainFeed() {
    const container = document.getElementById('feed-content');
    if (!container) return;
    
    // Freshness boost so "Just Now" posts reliably float to the top
    const sortedPosts = [...WAHBOOK_POSTS].sort((a, b) => {
        const boost = (p) => {
            const t = (p.timestamp || '').toLowerCase();
            return t.includes('just now') ? 1000000 : 0;
        };
        const aScore = (a.order || 0) + boost(a);
        const bScore = (b.order || 0) + boost(b);
        return bScore - aScore;
    });

    const postsHTML = renderCreatePostBox() + sortedPosts.map(p => renderFeedPost(p)).join('');
    
    container.innerHTML = `
        <div id="feed-content-layout">
            <div class="wahbook-feed-container">${postsHTML}</div>
            <aside id="feed-sidebar">
                ${renderChaosAgentWidget()}
            </aside>
        </div>
    `;
}

function renderEvent(event) {
    const attendeesHTML = event.attendees.map(attendee => {
        const character = getCharacterData(attendee.characterKey);
        const hostClass = attendee.host ? 'event-host' : '';
        return `
            <div class="attendee-card ${hostClass}">
                <img src="${character.portrait}" alt="${character.name}" class="attendee-pfp">
                <div class="attendee-info">
                    <span class="attendee-name">${character.name}</span>
                    <p class="attendee-justification">${attendee.justification}</p>
                </div>
            </div>
        `;
    }).join('');

    const newsPosts = (event.news_ids || []).map(id => WAHBOOK_POSTS.find(p => p.id === id)).filter(Boolean);
    const regularPosts = (event.post_ids || []).map(id => WAHBOOK_POSTS.find(p => p.id === id)).filter(Boolean);
    
    // Fallback for dynamically added events where posts are linked by eventId
    const dynamicPosts = WAHBOOK_POSTS.filter(p => p.eventId === event.id && !(event.news_ids || []).includes(p.id));
    const allPostsForEvent = [...newsPosts, ...regularPosts, ...dynamicPosts];

    const newsHTML = newsPosts.length > 0 ? newsPosts.map(p => renderFeedPost(p)).join('') : '';
    const postsHTML = [...regularPosts, ...dynamicPosts].length > 0 ? [...regularPosts, ...dynamicPosts].map(p => renderFeedPost(p)).join('') : '';
    
    return `
        <div class="event-container" data-event-id="${event.id}">
            <div class="event-main-header">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <span class="event-toggle-icon">▼</span>
            </div>
            <div class="event-collapsible-body">
                <div class="event-details-grid">
                    <div class="attendees-list-container">
                        <h4>Key Attendees</h4>
                        <div class="attendees-list">${attendeesHTML}</div>
                    </div>
                    <div class="related-content-container">
                        ${newsHTML ? `<div class="related-news"><h4>News Coverage</h4>${newsHTML}</div>` : ''}
                        ${postsHTML ? `<div class="related-posts"><h4>Public Reactions</h4>${postsHTML}</div>` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderEventsFeed() {
    const container = document.getElementById('events-feed-container');
    if (!container) return;
    
    const sortedEvents = [...WAHBOOK_EVENTS].sort((a, b) => {
        if (currentEventSort === 'newest') {
            return (a.order || 99) - (b.order || 99);
        } else {
            return (b.order || 0) - (a.order || 0);
        }
    });
    container.innerHTML = sortedEvents.map(renderEvent).join('');
}

function renderIntelFeed() {
    const container = document.getElementById('intel-board-grid');
    if (!container) return;

    const allRumors = LORE_DATA.rumors || [];
    const activeRumorIds = state.activeRumors || [];
    
    const rumorData = allRumors
        .filter(rumor => activeRumorIds.includes(rumor.id))
        .map(rumor => {
            const relatedPostCount = WAHBOOK_POSTS.filter(p => p.rumorId === rumor.id).length;
            
            const allTargets = new Set();
            rumor.targets.forEach(t => {
                if (t === 'party') {
                    state.party.forEach(p => allTargets.add(p));
                } else {
                    allTargets.add(t);
                }
            });
            
            const affectedPfps = Array.from(allTargets).slice(0, 4).map(key => 
                `<img src="${getPortraitForEntity(key)}" class="dossier-pfp" title="${LORE_DATA.characters[key]?.name || LORE_DATA.factions[key]?.name || 'Unknown'}">`
            ).join('');

            return `
                <div class="dossier-card" data-rumor-id="${rumor.id}">
                    <h3>${rumor.title}</h3>
                    <p>${rumor.description.substring(0, 120)}...</p>
                    <div class="dossier-footer">
                        <div class="dossier-pfp-container">${affectedPfps}</div>
                        <span class="chatter-count">💬 ${relatedPostCount} Chatter reports</span>
                    </div>
                </div>
            `;
        }).join('');
    
    container.innerHTML = rumorData || `<p class="page-subtitle" style="grid-column: 1 / -1;">No active intelligence reports found.</p>`;
}


function openDossierModal(rumorId) {
    const rumor = LORE_DATA.rumors.find(r => r.id === rumorId);
    if (!rumor) return;
    
    const intelPosts = WAHBOOK_POSTS.filter(p => p.rumorId === rumorId)
        .sort((a, b) => (b.order || 0) - (a.order || 0));

    const allTargets = new Set();
    rumor.targets.forEach(t => {
        if (t === 'party') {
            state.party.forEach(p => allTargets.add(p));
        } else {
            allTargets.add(t);
        }
    });

    const affectedPartiesHTML = Array.from(allTargets).map(targetKey => {
        const targetData = getCharacterData(targetKey);
        if (!targetData.name || targetData.name === 'Unknown User') {
            const factionData = LORE_DATA.factions[targetKey];
            if (factionData) {
                targetData.name = factionData.name;
                targetData.portrait = factionData.logo;
            } else {
                 return ''; // Skip if we can't identify the target
            }
        }

        const repChangesHTML = Object.entries(rumor.effects).map(([factionKey, repChange]) => {
            const factionData = LORE_DATA.factions[factionKey];
            if (!factionData) return '';

            const repClass = repChange > 0 ? 'positive' : 'negative';
            const sign = repChange > 0 ? '+' : '';
            
            return `
                <li class="rep-change-item">
                    <div class="faction-info">
                        <img src="${factionData.logo}" alt="${factionData.name}">
                        <span>${factionData.name}</span>
                    </div>
                    <span class="rep-change-value ${repClass}">${sign}${repChange} Rep</span>
                </li>
            `;
        }).join('');

        return `
            <div class="affected-character-card">
                <h4><img src="${targetData.portrait}" alt="${targetData.name}"> ${targetData.name}</h4>
                <ul class="rep-change-list">
                    ${repChangesHTML}
                </ul>
            </div>
        `;
    }).join('');


    const chatterHTML = intelPosts.length > 0
        ? intelPosts.map(post => renderFeedPost(post)).join('')
        : `<p class="page-subtitle">No network chatter detected for this rumor.</p>`;
    
    dossierModalBody.innerHTML = `
        <div class="dossier-header">
            <h2>${rumor.title}</h2>
            <p>Timeline: ${rumor.time_ago || 'Ongoing'}</p>
        </div>
        <p>${rumor.description}</p>
        <div class="dossier-analysis-grid">
            <div class="dossier-affected-parties">
                <h4>Affected Parties & Reputation Impact</h4>
                <div class="affected-list">
                    ${affectedPartiesHTML}
                </div>
            </div>
            <div class="dossier-network-feed">
                <h4>Related Network Chatter</h4>
                ${chatterHTML}
            </div>
        </div>
    `;

    dossierModal.style.display = 'flex';
}

function renderFollowedFeed() {
    const container = document.getElementById('followed-feed-container');
    if (!container) return;
    loadState();
    
    if (state.loggedInUser === 'generic' || !state.userState.following || state.userState.following.length === 0) {
        container.innerHTML = `<p class="page-subtitle">You are not following anyone yet. Visit a user's profile to follow them!</p>`;
        return;
    }

    const followedPosts = WAHBOOK_POSTS.filter(p => state.userState.following.includes(p.characterKey))
                                      .sort((a, b) => (b.order || 0) - (a.order || 0));

    if (followedPosts.length === 0) {
        container.innerHTML = `<p class="page-subtitle">The accounts you follow haven't posted anything yet.</p>`;
        return;
    }
    
    container.innerHTML = followedPosts.map(p => renderFeedPost(p)).join('');
}

function renderTrendingFeed() {
    const container = document.getElementById('trending-feed-container');
    if (!container) return;

    const recentPosts = WAHBOOK_POSTS.filter(p => 
        !p.timestamp.includes('month') && !p.timestamp.includes('year')
    );

    const scoredPosts = recentPosts.map(post => {
        const score = (post.likes || 0) + ((post.comments?.length || 0) * 2);
        return { ...post, trendingScore: score };
    })
    .sort((a, b) => b.trendingScore - a.trendingScore)
    .slice(0, 15);

    container.innerHTML = scoredPosts.map(p => renderFeedPost(p, { showTrendingScore: true, trendingScore: p.trendingScore })).join('');
}

function renderGroupsFeed() {
    const container = document.getElementById('groups-content');
    if (!container) return;

    const filterBar = container.querySelector('#groups-filter-bar');
    const feedContainer = container.querySelector('#groups-feed-container');

    const groupPosts = WAHBOOK_POSTS.filter(p => p.groupId);
    const uniqueGroupIds = ['all', ...new Set(groupPosts.map(p => p.groupId))];
    
    const allGuildsAndCharters = { ...GUILD_DATA, ...CHARTER_DATA };

    filterBar.innerHTML = uniqueGroupIds.map(groupId => {
        const name = (groupId === 'all') ? 'All Groups' : (allGuildsAndCharters[groupId]?.name.replace(/#\d+\s/, '') || groupId);
        return `<button class="control-btn ${activeGroupFilter === groupId ? 'active' : ''}" data-group-id="${groupId}">${name}</button>`;
    }).join('');

    const filteredPosts = (activeGroupFilter === 'all')
        ? groupPosts
        : groupPosts.filter(p => p.groupId === activeGroupFilter);

    filteredPosts.sort((a, b) => (b.order || 0) - (a.order || 0));

    if (filteredPosts.length === 0) {
        feedContainer.innerHTML = `<p class="page-subtitle">No posts found for this group.</p>`;
    } else {
        feedContainer.innerHTML = filteredPosts.map(p => renderFeedPost(p)).join('');
    }
}


function handleShare(button) {
    const postElement = button.closest('.feed-post');
    if (!postElement || !shareModal) return;

    const postId = postElement.id.replace('post-', '');
    
    // Generate both formats
    const embedUrl = `${window.location.origin}${window.location.pathname}?embed=${postId}`;
    const iframeCode = `<iframe src="${embedUrl}" width="550" height="450" style="border:1px solid #ccc; border-radius: 8px;" title="WAHbook Post" loading="lazy"></iframe>`;
    
    const pageUrl = window.location.href.split('?')[0].split('#')[0];
    const directLink = `${pageUrl}#post-${postId}`;
    
    // Store content in data attributes for easy access
    shareModal.dataset.iframe = iframeCode;
    shareModal.dataset.link = directLink;

    // Set default view to 'iframe'
    shareCodeTextarea.value = iframeCode;
    const tabs = shareModal.querySelectorAll('.share-tab-btn');
    tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.format === 'iframe');
    });

    copyShareBtn.textContent = 'Copy Code';
    copyShareBtn.classList.remove('copied');
    shareModal.style.display = 'flex';
}


function scrollToPostFromHash() {
    if (window.location.hash) {
        try {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                element.style.boxShadow = '0 0 20px var(--neutral-color)';
                setTimeout(() => element.style.boxShadow = '', 2000);
            }
        } catch (e) {
            // Invalid selector from hash, do nothing
            console.warn("Invalid hash for scrolling:", window.location.hash);
        }
    }
}

// --- NEW POSTING & INTERACTION LOGIC ---

function getPostTone(text) {
    const lowerText = text.toLowerCase();
    const positiveWords = ['good', 'great', 'love', 'magnificent', 'hope', 'happy', 'agree', 'support', 'victory'];
    const negativeWords = ['hate', 'bad', 'disgrace', 'damn', 'curse', 'lame', 'boring', 'weak', 'pathetic', 'fail', 'fuck'];
    const inquisitiveWords = ['why', 'how', 'what', 'who', '?', 'question', 'theory'];

    if (negativeWords.some(word => lowerText.includes(word))) return 'negative';
    if (positiveWords.some(word => lowerText.includes(word))) return 'positive';
    if (inquisitiveWords.some(word => lowerText.includes(word))) return 'inquisitive';
    return 'neutral';
}

/**
 * Creates special, high-priority keywords based on post content.
 * e.g., "fuck you bowser" -> creates "curse_bowser" keyword.
 */
function generateSpecialKeywords(text) {
    const lowerText = text.toLowerCase();
    const keywords = [];
    const curseWords = ['fuck', 'damn', 'hell', 'crap', 'bastard', 'curse'];
    const characterNames = {
        'bowser': 'bowser', 'waluigi': 'waluigi', 'kamek': 'kamek',
        'lario': 'lario', 'toadette': 'toadette', 'fawful': 'fawful',
    };

    const hasCurse = curseWords.some(word => lowerText.includes(word));

    if (hasCurse) {
        for (const name in characterNames) {
            if (lowerText.includes(name)) {
                keywords.push(`curse_${characterNames[name]}`);
            }
        }
    }
    
    return keywords;
}

/**
 * Finds the best NPC response, prioritizing longer, more specific keywords.
 */
function findNpcResponse(sourceText, sourceAuthorKey, targetPost, threadHistory, responseType) {
    const lowerText = sourceText.toLowerCase();
    const sourceTone = getPostTone(sourceText);
    const respondingNpcs = new Set(threadHistory.map(c => c.characterKey));

    let bestMatches = [];
    let bestMatchLength = 0;

    for (const response of NPC_RESPONSES) {
        if (response.type !== responseType) continue;
        if (respondingNpcs.has(response.characterKey)) continue;
        if (response.characterKey === sourceAuthorKey || response.characterKey === targetPost.characterKey) continue;

        const trigger = response.trigger;
        if (trigger.reply_to_author && !trigger.reply_to_author.includes(sourceAuthorKey)) continue;
        if (trigger.tone && trigger.tone !== sourceTone) continue;

        for (const kw of trigger.keywords) {
            if (lowerText.includes(kw)) {
                if (kw.length > bestMatchLength) {
                    bestMatches = [response];
                    bestMatchLength = kw.length;
                } else if (kw.length === bestMatchLength) {
                    bestMatches.push(response);
                }
            }
        }
    }

    if (bestMatches.length > 0) {
        return bestMatches[Math.floor(Math.random() * bestMatches.length)];
    }
    return null;
}

function triggerNpcInteraction(targetPost, initialText = null, initialAuthor = null) {
    let conversationChain = [];
    let lastCommentText = initialText || targetPost.content;
    let lastCommentAuthor = initialAuthor || targetPost.characterKey;
    const MAX_DEPTH = 3;

    const specialKeywords = (initialText) ? generateSpecialKeywords(initialText) : [];
    
    for (let depth = 0; depth < MAX_DEPTH; depth++) {
        const responseType = (depth === 0) ? 'initial' : 'reply';
        
        // For the first interaction, combine original text with special keywords for better matching.
        // For subsequent replies, just use the text of the last comment in the chain.
        const textToSearch = (depth === 0) ? `${lastCommentText} ${specialKeywords.join(' ')}` : lastCommentText;
        const response = findNpcResponse(textToSearch, lastCommentAuthor, targetPost, conversationChain, responseType);
        
        if (response && Math.random() < 0.65) { // 65% chance to continue the chain
            const newComment = {
                characterKey: response.characterKey,
                text: response.response
            };
            conversationChain.push(newComment);
            lastCommentText = newComment.text;
            lastCommentAuthor = newComment.characterKey;
        } else {
            break; // End of chain
        }
    }

    conversationChain.forEach((comment, index) => {
        setTimeout(() => {
            if (!targetPost.comments) targetPost.comments = [];
            targetPost.comments.push(comment);

            const postElement = document.getElementById(`post-${targetPost.id}`);
            if (postElement) {
                const commenter = getCharacterData(comment.characterKey);
                const commentsContainer = postElement.querySelector('.post-comments');
                if (commentsContainer) {
                    const newCommentElement = document.createElement('div');
                    newCommentElement.className = 'comment';
                    newCommentElement.innerHTML = `
                        <a href="profile.html?user=${comment.characterKey}" class="profile-link">
                            <img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp">
                        </a>
                        <div class="comment-body">
                            <a href="profile.html?user=${comment.characterKey}" class="profile-link comment-author">${commenter.name}</a>
                            <span class="comment-text">${comment.text}</span>
                        </div>
                    `;
                    commentsContainer.appendChild(newCommentElement);
                    newCommentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
                
                const commentBtn = postElement.querySelector('.comment-btn');
                if(commentBtn) commentBtn.innerHTML = `<span class="interaction-btn-icon">💬</span> Comment (${targetPost.comments.length})`;
            }
        }, (index * 6000) + (Math.random() * 4000)); // Stagger replies
    });
}


function handleNewPost() {
    const text = newPostTextarea.value.trim();
    if (!text) return;

    const highestOrder = Math.max(...WAHBOOK_POSTS.map(p => p.order || 0));
    const newPost = {
        id: `player_post_${Date.now()}`,
        order: highestOrder + 1,
        characterKey: state.loggedInUser,
        timestamp: 'Just now',
        content: text,
        likes: 0,
        comments: []
    };

    WAHBOOK_POSTS.unshift(newPost);
    
    // Insert the new post at the top of the feed instead of re-rendering everything
    const feed = feedContainer.querySelector('.wahbook-feed-container');
    const createPostBox = feed.querySelector('.create-post-container');
    feed.insertAdjacentHTML('afterbegin', renderFeedPost(newPost));
    if (createPostBox) feed.prepend(createPostBox); // Move create box back to top

    const newPostElement = document.getElementById(`post-${newPost.id}`);
    if (newPostElement) {
        newPostElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    createPostModal.style.display = 'none';
    newPostTextarea.value = '';

    triggerNpcInteraction(newPost, text, state.loggedInUser);
}

function handleNewReply(inputElement) {
    const text = inputElement.value.trim();
    if (!text) return;
    
    const postElement = inputElement.closest('.feed-post');
    const postId = postElement.id.replace('post-', '');
    const post = WAHBOOK_POSTS.find(p => p.id === postId);

    if (post) {
        const newComment = { characterKey: state.loggedInUser, text: text };
        if (!post.comments) post.comments = [];
        post.comments.push(newComment);

        const commenter = getCharacterData(newComment.characterKey);
        postElement.querySelector('.post-comments')?.insertAdjacentHTML('beforeend', `
            <div class="comment">
                <a href="profile.html?user=${newComment.characterKey}" class="profile-link"><img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp"></a>
                <div class="comment-body"><a href="profile.html?user=${newComment.characterKey}" class="profile-link comment-author">${commenter.name}</a><span class="comment-text">${newComment.text}</span></div>
            </div>
        `);
        inputElement.value = '';
        
        const commentBtn = postElement.querySelector('.comment-btn');
        commentBtn.innerHTML = `<span class="interaction-btn-icon">💬</span> Comment (${post.comments.length})`;

        triggerNpcInteraction(post, text, state.loggedInUser);
    }
}

function showWaluigiWarning() {
    if (!waluigiWarningModal) return;
    playSound('wah.mp3');
    const textElement = document.getElementById('waluigi-warning-text');
    if(textElement) {
        textElement.textContent = "WAH! HEY! YOU! Three-eyes! A little birdy told me you've been playing with magic. Very stylish! But the boring killjoys at the Mages' Guild have rules... something called the 'Autumnwood Accords'. Apparently, unsanctioned magic is a big no-no in their territory. They're watching you. Don't get caught! Or if you do, make it spectacular! WAH-HA-HA!";
    }
    waluigiWarningModal.style.display = 'flex';
}

function setupEventListeners() {
    tabsContainer.addEventListener('click', (e) => {
        const tab = e.target.closest('.tab-btn');
        if (!tab) return;
        
        playSound('click.mp3');

        const tabName = tab.dataset.tab;

        tabsContainer.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contentContainer.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        const activeContent = document.getElementById(`${tabName}-content`);
        activeContent.classList.add('active');

        const feedContainer = activeContent.querySelector('.wahbook-feed-container');
        if (feedContainer && feedContainer.childElementCount === 0) {
            switch(tabName) {
                case 'followed': renderFollowedFeed(); break;
                case 'trending': renderTrendingFeed(); break;
                case 'groups': renderGroupsFeed(); break;
            }
        }
        
        const intelBoard = document.getElementById('intel-board-grid');
        if(tabName === 'intel' && intelBoard.childElementCount === 0) {
            renderIntelFeed();
        }
    });

    document.body.addEventListener('click', e => {
        const likeBtn = e.target.closest('.like-btn');
        if (likeBtn) {
            playSound('click.mp3', 0.5);
            likeBtn.classList.toggle('liked');
            let likes = parseInt(likeBtn.dataset.likes, 10);
            likes += likeBtn.classList.contains('liked') ? 1 : -1;
            likeBtn.dataset.likes = likes;
            likeBtn.innerHTML = `<span class="interaction-btn-icon">👍</span> Like (${likes})`;
        }
        
        const shareBtn = e.target.closest('.share-btn');
        if (shareBtn) handleShare(shareBtn);

        const eventHeader = e.target.closest('.event-main-header');
        if (eventHeader) {
            playSound('click.mp3');
            eventHeader.parentElement.classList.toggle('expanded');
        }
        
        const dossierCard = e.target.closest('.dossier-card');
        if (dossierCard) {
            playSound('confirm.mp3', 0.6);
            openDossierModal(dossierCard.dataset.rumorId);
        }

        const sortBtn = e.target.closest('#event-controls .control-btn');
        if (sortBtn && !sortBtn.classList.contains('active')) {
            playSound('confirm.mp3', 0.6);
            currentEventSort = sortBtn.dataset.sort;
            document.querySelectorAll('#event-controls .control-btn').forEach(btn => btn.classList.remove('active'));
            sortBtn.classList.add('active');
            renderEventsFeed();
        }

        const createPostInput = e.target.closest('.create-post-input');
        if (createPostInput) {
            playSound('click.mp3');
            createPostModal.style.display = 'flex';
            newPostTextarea.focus();
        }

        const commentBtn = e.target.closest('.comment-btn');
        if (commentBtn) {
            const post = commentBtn.closest('.feed-post');
            const replyContainer = post.querySelector('.reply-input-container');
            if (replyContainer.style.display !== 'flex') {
                replyContainer.style.display = 'flex';
                replyContainer.querySelector('.reply-input').focus();
            }
        }
    });
    
    const groupsContent = document.getElementById('groups-content');
    if (groupsContent) {
        const filterBar = groupsContent.querySelector('#groups-filter-bar');
        filterBar.addEventListener('click', e => {
            const btn = e.target.closest('.control-btn');
            if (btn) {
                playSound('click.mp3');
                activeGroupFilter = btn.dataset.groupId;
                renderGroupsFeed();
            }
        });
    }

    // Modal close listeners
    dossierModalClose?.addEventListener('click', () => dossierModal.style.display = 'none');
    dossierModal?.addEventListener('click', (e) => { if (e.target === dossierModal) dossierModal.style.display = 'none'; });
    
    createPostModal.querySelector('.modal-close').addEventListener('click', () => createPostModal.style.display = 'none');
    createPostModal.addEventListener('click', e => { if (e.target === createPostModal) createPostModal.style.display = 'none'; });
    submitPostBtn.addEventListener('click', handleNewPost);

    if (shareModal) {
        // Close button
        shareModal.querySelector('.modal-close').addEventListener('click', () => shareModal.style.display = 'none');
        shareModal.addEventListener('click', e => { if (e.target === shareModal) shareModal.style.display = 'none'; });

        // Tab switching
        const tabs = shareModal.querySelectorAll('.share-tab-btn');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                if (tab.classList.contains('active')) return;
                playSound('click.mp3');
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const format = tab.dataset.format;
                shareCodeTextarea.value = shareModal.dataset[format];
                copyShareBtn.textContent = 'Copy Code';
                copyShareBtn.classList.remove('copied');
            });
        });
        
        // Copy button with auto-copy
        copyShareBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(shareCodeTextarea.value).then(() => {
                copyShareBtn.textContent = 'Copied!';
                copyShareBtn.classList.add('copied');
                playSound('confirm.mp3');
            }).catch(err => {
                console.error('Failed to copy code: ', err);
                copyShareBtn.textContent = 'Error!';
            });
        });
    }

    if(waluigiWarningModal) {
        const closeBtn = waluigiWarningModal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => waluigiWarningModal.style.display = 'none');
        waluigiWarningModal.addEventListener('click', (e) => {
            if(e.target === waluigiWarningModal) {
                waluigiWarningModal.style.display = 'none';
            }
        });
    }

    // Reply input listener
    document.body.addEventListener('keypress', e => {
        if (e.key === 'Enter' && e.target.classList.contains('reply-input')) {
            handleNewReply(e.target);
        }
    });
}

function updateSeenPosts() {
    loadState();
    const allPostIds = WAHBOOK_POSTS.map(p => p.id);
    const seenIds = new Set(state.userState.seenPostIds);
    allPostIds.forEach(id => seenIds.add(id));
    state.userState.seenPostIds = [...seenIds];
    saveState();
}

function simulateLikes() {
    setInterval(() => {
        const visiblePosts = document.querySelectorAll('.feed-post');
        if (visiblePosts.length === 0) return;

        const randomPostElement = visiblePosts[Math.floor(Math.random() * visiblePosts.length)];
        const postId = randomPostElement.id.replace('post-', '');
        const postData = WAHBOOK_POSTS.find(p => p.id === postId);

        if (postData) {
            if(postData.likes === undefined) postData.likes = 0;
            postData.likes++;
            const likeBtn = randomPostElement.querySelector('.like-btn');
            if (likeBtn && !likeBtn.classList.contains('liked')) { // Don't update if the player has manually liked/unliked
                likeBtn.dataset.likes = postData.likes;
                likeBtn.innerHTML = `<span class="interaction-btn-icon">👍</span> Like (${postData.likes})`;
            }
        }
    }, 8000 + Math.random() * 6000); // Random interval between 8-14 seconds
}


async function init() {
    const params = new URLSearchParams(window.location.search);
    const embedPostId = params.get('embed');

    loadState();
    await loadDynamicData();

    if (embedPostId) {
        document.body.classList.add('embed-mode');
        const mainContent = document.getElementById('main-content');
        const postData = WAHBOOK_POSTS.find(p => p.id === embedPostId);
        
        if (postData && mainContent) {
            mainContent.innerHTML = `<div id="wahbook-content"><div class="wahbook-feed-container">${renderFeedPost(postData)}</div></div>`;
            
            // Remove interactive elements from the embedded post
            const postElement = mainContent.querySelector('.feed-post');
            if (postElement) {
                postElement.querySelector('.post-interactions')?.remove();
                postElement.querySelector('.reply-input-container')?.remove();
            }
        } else if (mainContent) {
            mainContent.innerHTML = `<p class="page-subtitle">Post not found.</p>`;
        }
        return; // Stop further initialization for embed view
    }
    
    if (!feedContainer || !eventsContainer) return;

    if (state.loggedInUser === 'archie' && !state.userState.waluigiWarningShown) {
        setTimeout(() => {
            showWaluigiWarning();
            state.userState.waluigiWarningShown = true;
            saveState();
        }, 1500);
    }
    
    renderMainFeed();
    renderEventsFeed();
    renderIntelFeed();
    setupEventListeners();
    updateSeenPosts();
    simulateLikes();
    
    setTimeout(() => {
        if (window.location.hash === '#intel') {
            const intelTab = document.querySelector('.tab-btn[data-tab="intel"]');
            if(intelTab) intelTab.click();
        } else {
            scrollToPostFromHash();
        }
    }, 100);
}

init();