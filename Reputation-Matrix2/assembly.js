/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * WAHbook Assembly Page - Complete Redesign
 */

import { LORE_DATA, STORY_ARCS, getRumorsByArc } from './lore.js';
import { playSound } from './common.js';
import { state, saveState, loadState } from './state.js';
import { CURRENT_GAME_DATE, getDynamicTimestamp, CALENDAR_DATA } from './calendar-data.js';
import { calculateRumorMetrics, calculateGlobalCycle } from './research-data.js';

// ============================================================================
// CONSTANTS & STATE
// ============================================================================

const POSTS_PER_PAGE = 15;
const FALLBACK_PORTRAIT = 'data:image/svg+xml;base64,' + btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#21262d"/>
  <circle cx="50" cy="35" r="20" fill="#30363d"/>
  <ellipse cx="50" cy="85" rx="30" ry="25" fill="#30363d"/>
</svg>
`);

let WAHBOOK_POSTS = [];
let currentTab = 'foryou';
let currentPage = 1;
let currentSort = 'recommended';
let activeFactionFilter = null;
let searchQuery = '';
let globalCycleState = null;

// ============================================================================
// DATA LOADING
// ============================================================================

async function loadDynamicData() {
    try {
        const dataModule = await import('./assembly-data.js');
        WAHBOOK_POSTS = dataModule.WAHBOOK_POSTS || [];
    } catch (e) {
        console.warn('[WAHbook] Could not load assembly-data:', e.message);
        WAHBOOK_POSTS = [];
    }

    try {
        const eventsModule = await import('./assembly-events-data.js');
        if (eventsModule.loadEventPosts) {
            const eventPosts = await eventsModule.loadEventPosts();
            if (Array.isArray(eventPosts)) {
                WAHBOOK_POSTS.push(...eventPosts);
            }
        }
    } catch (e) {
        console.log('[WAHbook] No event posts module');
    }

    // Calculate global cycle
    globalCycleState = calculateGlobalCycle(WAHBOOK_POSTS);
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function formatCharacterKey(key) {
    if (!key) return 'Unknown';
    return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function isFutureEvent(dateObj) {
    if (!dateObj || !CURRENT_GAME_DATE) return false;
    if (dateObj.year > CURRENT_GAME_DATE.year) return true;
    if (dateObj.year === CURRENT_GAME_DATE.year) {
        if (dateObj.monthIndex > CURRENT_GAME_DATE.monthIndex) return true;
        if (dateObj.monthIndex === CURRENT_GAME_DATE.monthIndex) {
            if (dateObj.day > CURRENT_GAME_DATE.day) return true;
        }
    }
    return false;
}

function isContentVisible(dateObj) {
    if (!dateObj) return true;
    const isFuture = isFutureEvent(dateObj);
    if (isFuture) {
        return window.debugMode === true || state?.debugMode === true;
    }
    return true;
}

function getPostTimeValue(post) {
    if (post?.order !== undefined) return post.order;
    if (!post?.date) return 0;
    return new Date(
        post.date.year,
        post.date.monthIndex,
        post.date.day,
        post.date.hour ?? 12,
        post.date.minute ?? 0
    ).getTime();
}

function getCharacterData(characterKey) {
    if (!characterKey) {
        return { name: 'Unknown', portrait: FALLBACK_PORTRAIT, faction: null, characterKey: 'unknown', isDefined: false };
    }

    const char = LORE_DATA?.characters?.[characterKey] || LORE_DATA?.auxiliary_party?.[characterKey];
    if (char) {
        let faction = null;
        for (const fKey in LORE_DATA.factions || {}) {
            const fac = LORE_DATA.factions[fKey];
            if (fac.leader === characterKey || fac.notable_people?.some(p => p.name === char.name)) {
                faction = { key: fKey, name: fac.name, logo: fac.logo };
                break;
            }
        }
        return {
            name: char.name,
            portrait: char.portrait || `portraits/${characterKey}.png`,
            faction,
            characterKey,
            bio: char.bio || char.description || null,
            isDefined: true
        };
    }

    if (LORE_DATA?.factions?.[characterKey]) {
        const fac = LORE_DATA.factions[characterKey];
        return {
            name: fac.name,
            portrait: fac.logo || FALLBACK_PORTRAIT,
            faction: { key: characterKey, name: fac.name, logo: fac.logo },
            characterKey,
            isDefined: true
        };
    }

    // Check notable people
    for (const fKey in LORE_DATA?.factions || {}) {
        const fac = LORE_DATA.factions[fKey];
        const notable = fac.notable_people?.find(p =>
            p.name?.toLowerCase().replace(/[\s-]/g, '_') === characterKey
        );
        if (notable) {
            return {
                name: notable.name,
                portrait: `portraits/${characterKey}.png`,
                faction: { key: fKey, name: fac.name, logo: fac.logo },
                characterKey,
                isDefined: true
            };
        }
    }

    // Special cases
    const specialCases = {
        'wah_media_collective': { name: "WAH Media Collective", portrait: 'icon_newspaper.png', faction: { name: "The Daily Paradox" }, isDefined: true },
        'delfino_reporter': { name: "Delfino Reporter", portrait: 'portraits/delfino_reporter.png', faction: { name: "Delfino Press" }, isDefined: true }
    };
    if (specialCases[characterKey]) return { ...specialCases[characterKey], characterKey };

    return {
        name: formatCharacterKey(characterKey),
        portrait: `portraits/${characterKey}.png`,
        faction: null,
        characterKey,
        isDefined: false
    };
}

function getVisiblePosts() {
    return WAHBOOK_POSTS.filter(p => isContentVisible(p?.date));
}

function getTrendingScore(post) {
    const likes = post.likes || 0;
    const comments = (post.comments || []).length;
    
    // Safety check for date
    let daysSince = 0;
    if (post.date) {
        // Calculate days since post (simple approximation)
        const postDayVal = (post.date.year * 365) + (post.date.monthIndex * 30) + post.date.day;
        const currentDayVal = (CURRENT_GAME_DATE.year * 365) + (CURRENT_GAME_DATE.monthIndex * 30) + CURRENT_GAME_DATE.day;
        daysSince = Math.max(0, currentDayVal - postDayVal);
    } else {
        daysSince = 30; // Treat undated as old
    }

    // Recency decay: score drops by 10% every day
    const recencyMultiplier = Math.max(0.1, 1 - (daysSince * 0.1));
    
    // Base score: Comments weighted higher than likes
    const engagementScore = (likes * 1) + (comments * 3);
    
    return engagementScore * recencyMultiplier;
}

function getDaysSincePost(post) {
    if (!post.date) return 999;
    const postDate = new Date(post.date.year, post.date.monthIndex, post.date.day);
    const currentDate = new Date(CURRENT_GAME_DATE.year, CURRENT_GAME_DATE.monthIndex, CURRENT_GAME_DATE.day);
    const diffTime = currentDate - postDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// ============================================================================
// IMAGE ERROR HANDLING
// ============================================================================

window.handleImageError = function(img) {
    if (img.dataset.errorHandled) return;
    img.dataset.errorHandled = 'true';
    img.src = FALLBACK_PORTRAIT;
    img.style.border = '2px dashed #ff6b35';
};

// ============================================================================
// RENDER: USER PROFILE CARD
// ============================================================================

function renderUserProfileCard() {
    const container = document.getElementById('user-profile-card');
    if (!container) return;

    if (state.loggedInUser === 'generic') {
        container.innerHTML = `
            <div class="user-avatar-placeholder" style="width:80px;height:80px;border-radius:50%;background:var(--wahbook-bg-tertiary);margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:2rem;">👤</div>
            <div class="user-name">Guest User</div>
            <div class="user-handle">@guest</div>
            <a href="index.html" class="btn-primary" style="margin-top:16px;display:inline-block;text-decoration:none;font-size:0.85rem;">Login</a>
        `;
        return;
    }

    const user = getCharacterData(state.loggedInUser);
    const userPosts = getVisiblePosts().filter(p => p.characterKey === state.loggedInUser);
    const following = state.userState?.following?.length || 0;

    container.innerHTML = `
        <a href="profile.html?user=${state.loggedInUser}">
            <img src="${user.portrait}" alt="${user.name}" class="user-avatar" onerror="handleImageError(this)">
        </a>
        <a href="profile.html?user=${state.loggedInUser}" class="user-name" style="text-decoration:none;color:inherit;">${user.name}</a>
        <div class="user-handle">@${state.loggedInUser}</div>
        <div class="user-stats">
            <div class="stat">
                <span class="stat-value">${userPosts.length}</span>
                <span class="stat-label">Posts</span>
            </div>
            <div class="stat">
                <span class="stat-value">${following}</span>
                <span class="stat-label">Following</span>
            </div>
        </div>
    `;
}

// ============================================================================
// RENDER: STORIES BAR
// ============================================================================

function renderStoriesBar() {
    const container = document.getElementById('stories-bar');
    if (!container) return;

    // Get active characters (those who posted recently)
    const recentPosters = new Map();
    const visiblePosts = getVisiblePosts();
    
    visiblePosts
        .filter(p => getDaysSincePost(p) <= 7)
        .forEach(post => {
            if (!recentPosters.has(post.characterKey)) {
                recentPosters.set(post.characterKey, {
                    characterKey: post.characterKey,
                    latestPost: post
                });
            }
        });

    const stories = Array.from(recentPosters.values()).slice(0, 12);

    if (stories.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.innerHTML = stories.map(story => {
        const char = getCharacterData(story.characterKey);
        const hasNewStory = getDaysSincePost(story.latestPost) === 0;
        
        return `
            <div class="story-item" data-user="${story.characterKey}">
                <div class="story-avatar-wrapper ${hasNewStory ? '' : 'no-story'}">
                    <img src="${char.portrait}" alt="${char.name}" class="story-avatar" onerror="handleImageError(this)">
                </div>
                <span class="story-name">${char.name.split(' ')[0]}</span>
            </div>
        `;
    }).join('');

    // Add click handlers
    container.querySelectorAll('.story-item').forEach(item => {
        item.addEventListener('click', () => {
            const user = item.dataset.user;
            window.location.href = `profile.html?user=${user}`;
        });
    });
}

// ============================================================================
// RENDER: CREATE POST BOX
// ============================================================================

function renderCreatePostBox() {
    const container = document.getElementById('create-post-box');
    if (!container) return;

    if (state.loggedInUser === 'generic') {
        container.innerHTML = `
            <div style="text-align:center;padding:20px;color:var(--wahbook-text-secondary);">
                <p>Login to create posts</p>
                <a href="index.html" class="btn-primary" style="margin-top:12px;display:inline-block;text-decoration:none;">Login</a>
            </div>
        `;
        return;
    }

    const user = getCharacterData(state.loggedInUser);

    container.innerHTML = `
        <img src="${user.portrait}" alt="${user.name}" class="user-avatar" style="width:48px;height:48px;border-radius:50%;" onerror="handleImageError(this)">
        <div class="create-post-input-wrapper">
            <button class="create-post-trigger" id="open-composer">
                What's happening in the realm, ${user.name.split(' ')[0]}?
            </button>
            <div class="create-post-actions">
                <button class="create-action-btn" data-action="image">🖼️ Image</button>
                <button class="create-action-btn" data-action="poll">📊 Poll</button>
                <button class="create-action-btn" data-action="event">📅 Event</button>
            </div>
        </div>
    `;

    // Open composer modal
    document.getElementById('open-composer')?.addEventListener('click', () => {
        openCreatePostModal();
    });
}

// ============================================================================
// RENDER: TRENDING TOPICS
// ============================================================================

function renderTrendingTopics() {
    const container = document.getElementById('trending-topics');
    if (!container) return;

    // Calculate trending based on rumors and posts
    const rumors = LORE_DATA?.rumors || [];
    const trendingList = [];

    rumors.forEach(rumor => {
        if (!isContentVisible(rumor.date)) return;
        const relatedPosts = getVisiblePosts().filter(p => p.rumorId === rumor.id);
        const metrics = calculateRumorMetrics(rumor, relatedPosts);
        
        if (metrics.status === 'Viral' || metrics.status === 'Trending' || metrics.status === 'Active') {
            trendingList.push({
                ...rumor,
                metrics,
                postCount: relatedPosts.length
            });
        }
    });

    trendingList.sort((a, b) => Math.abs(b.metrics.finalScore) - Math.abs(a.metrics.finalScore));

    if (trendingList.length === 0) {
        container.innerHTML = '<p style="color:var(--wahbook-text-muted);font-size:0.85rem;">No trending topics right now.</p>';
        return;
    }

    container.innerHTML = trendingList.slice(0, 5).map((topic, index) => `
        <div class="trending-topic" data-rumor-id="${topic.id}">
            <span class="trending-category">${topic.cycle_impact?.type || 'General'} · Trending</span>
            <span class="trending-name">${topic.title}</span>
            <span class="trending-posts">${topic.postCount} posts · ${topic.metrics.status}</span>
        </div>
    `).join('');

    // Add click handlers
    container.querySelectorAll('.trending-topic').forEach(item => {
        item.addEventListener('click', () => {
            openDossierModal(item.dataset.rumorId);
        });
    });
}

// ============================================================================
// RENDER: FOLLOW SUGGESTIONS
// ============================================================================

function renderFollowSuggestions() {
    const container = document.getElementById('follow-suggestions');
    if (!container) return;

    const following = state.userState?.following || [];
    const visiblePosts = getVisiblePosts();

    // Get active posters not already followed
    const posterCounts = new Map();
    visiblePosts.forEach(post => {
        if (!following.includes(post.characterKey) && post.characterKey !== state.loggedInUser) {
            posterCounts.set(post.characterKey, (posterCounts.get(post.characterKey) || 0) + 1);
        }
    });

    const suggestions = Array.from(posterCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([key, count]) => ({ characterKey: key, postCount: count }));

    if (suggestions.length === 0) {
        container.innerHTML = '<p style="color:var(--wahbook-text-muted);font-size:0.85rem;">No suggestions right now.</p>';
        return;
    }

    container.innerHTML = suggestions.map(sug => {
        const char = getCharacterData(sug.characterKey);
        return `
            <div class="follow-suggestion">
                <a href="profile.html?user=${sug.characterKey}">
                    <img src="${char.portrait}" alt="${char.name}" class="suggestion-avatar" onerror="handleImageError(this)">
                </a>
                <div class="suggestion-info">
                    <a href="profile.html?user=${sug.characterKey}" class="suggestion-name" style="text-decoration:none;color:inherit;">${char.name}</a>
                    <span class="suggestion-reason">${sug.postCount} posts</span>
                </div>
                <button class="follow-suggestion-btn" data-user="${sug.characterKey}">Follow</button>
            </div>
        `;
    }).join('');

    // Add follow handlers
    container.querySelectorAll('.follow-suggestion-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const user = btn.dataset.user;
            toggleFollow(user);
            btn.textContent = 'Following';
            btn.disabled = true;
            playSound('confirm.mp3');
        });
    });
}

// ============================================================================
// RENDER: ACTIVE ARCS
// ============================================================================

function renderActiveArcs() {
    const container = document.getElementById('active-arcs');
    if (!container) return;

    const arcs = Object.values(STORY_ARCS || {}).filter(arc => arc.status === 'active');

    if (arcs.length === 0) {
        container.innerHTML = '<p style="color:var(--wahbook-text-muted);font-size:0.85rem;">No active story arcs.</p>';
        return;
    }

    container.innerHTML = arcs.slice(0, 4).map(arc => `
        <div class="arc-item" data-arc="${arc.id}">
            <span class="arc-icon">${arc.icon}</span>
            <div class="arc-info">
                <span class="arc-name">${arc.name}</span>
            </div>
            <span class="arc-status-badge ${arc.status}">${arc.status}</span>
        </div>
    `).join('');

    // Add click handlers
    container.querySelectorAll('.arc-item').forEach(item => {
        item.addEventListener('click', () => {
            // Could navigate to a dedicated arc page
            playSound('click.mp3');
        });
    });
}

// ============================================================================
// RENDER: CYCLE STATUS
// ============================================================================

function renderCycleStatus() {
    const container = document.getElementById('cycle-status');
    if (!container) return;

    if (!globalCycleState) {
        container.innerHTML = '<p style="color:var(--wahbook-text-muted);">Loading...</p>';
        return;
    }

    const phase = globalCycleState.phase;
    const momentum = globalCycleState.momentum;
    const momentumClass = momentum > 0 ? 'positive' : 'negative';

    container.innerHTML = `
        <div class="cycle-status-display">
            <div class="cycle-phase-name" style="color:${phase.color}">${phase.name}</div>
            <div class="cycle-momentum ${momentumClass}">${momentum > 0 ? '+' : ''}${momentum.toFixed(1)}</div>
            <p class="cycle-description">${phase.description}</p>
        </div>
    `;
}

// ============================================================================
// RENDER: FACTION FILTERS
// ============================================================================

function renderFactionFilters() {
    const container = document.getElementById('faction-filters');
    if (!container) return;

    const factions = Object.entries(LORE_DATA?.factions || {}).slice(0, 8);

    container.innerHTML = `
        <div class="faction-filter ${!activeFactionFilter ? 'active' : ''}" data-faction="">
            All Factions
        </div>
        ${factions.map(([key, faction]) => `
            <div class="faction-filter ${activeFactionFilter === key ? 'active' : ''}" data-faction="${key}">
                <img src="${faction.logo}" alt="${faction.name}" onerror="handleImageError(this)">
                <span>${faction.name}</span>
            </div>
        `).join('')}
    `;

    // Add click handlers
    container.querySelectorAll('.faction-filter').forEach(filter => {
        filter.addEventListener('click', () => {
            activeFactionFilter = filter.dataset.faction || null;
            currentPage = 1;
            renderFactionFilters();
            renderCurrentFeed();
            playSound('click.mp3');
        });
    });
}

// ============================================================================
// RENDER: SINGLE POST
// ============================================================================

function renderPost(post, options = {}) {
    if (!post) return '';

    const author = getCharacterData(post.characterKey);
    const isFuture = isFutureEvent(post.date);
    const isNew = state.userState?.seenPostIds && !state.userState.seenPostIds.includes(post.id);
    const isBookmarked = state.userState?.bookmarks?.includes(post.id);
    const isLiked = state.userState?.likedPosts?.includes(post.id);

    let timeString = 'Unknown';
    try {
        timeString = post.date ? getDynamicTimestamp(post.date) : (post.timestamp || 'Unknown');
    } catch (e) {
        timeString = post.timestamp || 'Unknown';
    }

    // Debug styling for future posts
    const debugClass = isFuture ? 'debug-future' : '';
    const debugBadge = isFuture ? '<div class="debug-future-badge">⚠️ FUTURE (Debug)</div>' : '';

    // Badges
    let badgesHTML = '';
    if (isNew || options.showTrendingScore || isFuture) {
        badgesHTML = '<div class="post-badges">';
        if (isFuture) badgesHTML += debugBadge;
        if (isNew && !isFuture) badgesHTML += '<span class="new-post-badge">NEW</span>';
        if (options.showTrendingScore) badgesHTML += `<span class="trending-badge">🔥 Trending</span>`;
        badgesHTML += '</div>';
    }

    // Faction tag
    const factionTag = author.faction ? `
        <span class="post-faction-tag">
            <img src="${author.faction.logo}" alt="${author.faction.name}" onerror="handleImageError(this)">
            ${author.faction.name}
        </span>
    ` : '';

    // Comments
    const commentsHTML = (post.comments || []).slice(0, 3).map(comment => {
        const commenter = getCharacterData(comment.characterKey);
        return `
            <div class="comment">
                <a href="profile.html?user=${encodeURIComponent(comment.characterKey)}">
                    <img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp" onerror="handleImageError(this)">
                </a>
                <div class="comment-body">
                    <a href="profile.html?user=${encodeURIComponent(comment.characterKey)}" class="comment-author">${commenter.name}</a>
                    <span class="comment-text">${comment.text || ''}</span>
                </div>
            </div>
        `;
    }).join('');

    const moreComments = (post.comments || []).length > 3 
        ? `<button class="view-more-comments">View ${post.comments.length - 3} more comments</button>` 
        : '';

    // Media
    let mediaHTML = '';
    if (post.image) {
        mediaHTML = `<div class="post-media"><img src="${post.image}" alt="${post.image_alt || ''}" class="post-image" onerror="this.parentElement.style.display='none'"></div>`;
    }
    if (post.videoSrc) {
        mediaHTML = `<div class="post-media post-video-container"><video src="${post.videoSrc}" controls muted loop playsinline></video></div>`;
    }

    // Reply input
    const replyHTML = state.loggedInUser !== 'generic' ? `
        <div class="reply-input-container">
            <img src="${getCharacterData(state.loggedInUser).portrait}" alt="You" class="reply-pfp" onerror="handleImageError(this)">
            <input type="text" class="reply-input" placeholder="Write a comment..." data-post-id="${post.id}">
        </div>
    ` : '';

    return `
        <article class="feed-post ${debugClass}" data-post-id="${post.id}" ${isFuture ? 'style="opacity:0.7;border:2px dashed #ff4444;"' : ''}>
            ${badgesHTML}
            <div class="post-header">
                <a href="profile.html?user=${encodeURIComponent(post.characterKey)}">
                    <img src="${author.portrait}" alt="${author.name}" class="post-pfp" onerror="handleImageError(this)">
                </a>
                <div class="post-author-info">
                    <div class="post-author-row">
                        <a href="profile.html?user=${encodeURIComponent(post.characterKey)}" class="post-author-name">${author.name}</a>
                        ${factionTag}
                    </div>
                    <div class="post-meta">
                        <span>${timeString}</span>
                        ${post.rumorId ? `<span>·</span><a href="#" class="rumor-link" data-rumor="${post.rumorId}">Related Event</a>` : ''}
                    </div>
                </div>
                <button class="post-menu-btn" data-post-id="${post.id}">⋯</button>
            </div>
            
            <div class="post-body">
                <p class="post-content">${formatPostContent(post.content || '')}</p>
                ${mediaHTML}
            </div>
            
            <div class="post-interactions">
                <button class="interaction-btn like-btn ${isLiked ? 'liked' : ''}" data-post-id="${post.id}" data-likes="${post.likes || 0}">
                    <span class="interaction-btn-icon">${isLiked ? '❤️' : '🤍'}</span>
                    <span class="like-count">${post.likes || 0}</span>
                </button>
                <button class="interaction-btn comment-btn" data-post-id="${post.id}">
                    <span class="interaction-btn-icon">💬</span>
                    <span>${(post.comments || []).length}</span>
                </button>
                <button class="interaction-btn share-btn" data-post-id="${post.id}">
                    <span class="interaction-btn-icon">↗️</span>
                    <span>Share</span>
                </button>
                <button class="interaction-btn bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-post-id="${post.id}">
                    <span class="interaction-btn-icon">${isBookmarked ? '🔖' : '📑'}</span>
                </button>
            </div>
            
            ${(post.comments?.length || state.loggedInUser !== 'generic') ? `
                <div class="post-comments-section">
                    <div class="post-comments">${commentsHTML}</div>
                    ${moreComments}
                    ${replyHTML}
                </div>
            ` : ''}
        </article>
    `;
}

function formatPostContent(content) {
    if (!content) return '';
    
    // Convert hashtags
    content = content.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
    
    // Convert mentions
    content = content.replace(/@(\w+)/g, '<a href="profile.html?user=$1" class="mention">@$1</a>');
    
    // Convert URLs
    content = content.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    
    return content;
}

// ============================================================================
// RENDER: FEED CONTENT
// ============================================================================

function getFilteredPosts() {
    let posts = getVisiblePosts();

    // Apply faction filter
    if (activeFactionFilter) {
        posts = posts.filter(post => {
            const author = getCharacterData(post.characterKey);
            return author.faction?.key === activeFactionFilter;
        });
    }

    // Apply search
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        posts = posts.filter(post => {
            const author = getCharacterData(post.characterKey);
            return (
                (post.content || '').toLowerCase().includes(query) ||
                author.name.toLowerCase().includes(query) ||
                (post.characterKey || '').toLowerCase().includes(query)
            );
        });
    }

    return posts;
}
function renderForYouFeed() {
    const container = document.getElementById('foryou-posts');
    if (!container) return;

    // Get a fresh copy of filtered posts
    let posts = [...getFilteredPosts()];

    // Sort by algorithm
    if (currentSort === 'trending') {
        posts.sort((a, b) => getTrendingScore(b) - getTrendingScore(a));
    } else if (currentSort === 'controversial') {
        posts.sort((a, b) => {
            const aComm = (a.comments || []).length;
            const bComm = (b.comments || []).length;
            // Ratio of comments to likes (high comments + low likes = controversial)
            const aRatio = aComm / (Math.max(1, a.likes || 1));
            const bRatio = bComm / (Math.max(1, b.likes || 1));
            return bRatio - aRatio;
        });
    } else {
        // Recommended (Default): Freshness + Trending
        posts.sort((a, b) => {
            const scoreA = getTrendingScore(a) + (getPostTimeValue(a) / 1000000000); 
            const scoreB = getTrendingScore(b) + (getPostTimeValue(b) / 1000000000);
            return scoreB - scoreA;
        });
    }

    renderPaginatedPosts(posts, container);
}
function updateNotificationBadge() {
    // Logic to determine real notifications (placeholder for now)
    const notificationCount = 0; // Set to 0 to hide, or calculate real count
    
    const badge = document.getElementById('notif-count');
    if (badge) {
        if (notificationCount > 0) {
            badge.style.display = 'flex';
            badge.textContent = notificationCount;
        } else {
            badge.style.display = 'none';
        }
    }
}

// Call this inside your init() function
// updateNotificationBadge();
function renderFollowingFeed() {
    const container = document.getElementById('following-posts');
    if (!container) return;

    const following = state.userState?.following || [];

    if (following.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-state-icon">👥</span>
                <h3>No Following Yet</h3>
                <p>Follow some accounts to see their posts here!</p>
            </div>
        `;
        return;
    }

    let posts = getFilteredPosts().filter(p => following.includes(p.characterKey));
    posts.sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));

    if (posts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-state-icon">📭</span>
                <h3>No Posts Yet</h3>
                <p>The accounts you follow haven't posted anything recently.</p>
            </div>
        `;
        return;
    }

    renderPaginatedPosts(posts, container);
}

function renderLatestFeed() {
    const container = document.getElementById('latest-posts');
    if (!container) return;

    let posts = getFilteredPosts();
    posts.sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));

    renderPaginatedPosts(posts, container);
}
function renderPaginatedPosts(posts, container) {
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    // Ensure currentPage is valid
    if (currentPage > totalPages && totalPages > 0) currentPage = 1;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    if (currentPosts.length === 0 && posts.length > 0) {
        // Fallback if slicing failed logic
        currentPage = 1;
        renderPaginatedPosts(posts, container);
        return;
    }

    if (posts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-state-icon">📭</span>
                <h3>No Posts Found</h3>
                <p>Try adjusting your filters.</p>
            </div>
        `;
        renderPagination(0, 0);
        return;
    }

    container.innerHTML = currentPosts.map(post => renderPost(post)).join('');
    renderPagination(currentPage, totalPages);
    attachPostEventListeners(container);
}

function renderPagination(current, total) {
    const container = document.getElementById('feed-pagination');
    if (!container) return;

    if (total <= 1) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';
    container.innerHTML = `
        <button id="prev-page" ${current <= 1 ? 'disabled' : ''}>← Previous</button>
        <span class="page-info">Page ${current} of ${total}</span>
        <button id="next-page" ${current >= total ? 'disabled' : ''}>Next →</button>
    `;

    document.getElementById('prev-page')?.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderCurrentFeed();
            scrollToTop();
            playSound('click.mp3');
        }
    });

    document.getElementById('next-page')?.addEventListener('click', () => {
        if (currentPage < total) {
            currentPage++;
            renderCurrentFeed();
            scrollToTop();
            playSound('click.mp3');
        }
    });
}

function scrollToTop() {
    document.querySelector('.wahbook-feed-area')?.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// RENDER: EVENTS TAB
// ============================================================================

function renderEventsFeed() {
    const container = document.getElementById('events-container');
    if (!container) return;

    const events = (LORE_DATA?.rumors || []).filter(r => r.isEvent && isContentVisible(r.date));
    
    events.sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));

    if (events.length === 0) {
        container.innerHTML = `<div class="empty-state"><h3>No Events</h3><p>No major events recorded.</p></div>`;
        return;
    }

    container.innerHTML = events.map(event => {
        const isFuture = isFutureEvent(event.date);
        const relatedPosts = getVisiblePosts().filter(p => p.rumorId === event.id);
        const arc = event.arc && STORY_ARCS[event.arc] ? STORY_ARCS[event.arc] : null;
        let dateStr = event.time_ago || 'Unknown Date';

        return `
            <div class="event-card ${isFuture ? 'debug-future' : ''}" id="event-${event.id}">
                ${isFuture ? '<div class="debug-future-badge">🔮 FUTURE EVENT</div>' : ''}
                <div class="event-header">
                    <div class="event-content-wrapper">
                        <h4 class="event-title">${event.title}</h4>
                        <p class="event-description">${event.description}</p>
                        <div class="event-meta">
                            <span>📅 ${dateStr}</span>
                            <span>💬 ${relatedPosts.length} posts</span>
                            ${arc ? `<span>${arc.icon} ${arc.name}</span>` : ''}
                        </div>
                    </div>
                    <button class="event-toggle-btn">▼</button>
                </div>
                <div class="event-body hidden">
                    <div class="event-effects">
                        <h5>Faction Effects</h5>
                        <div class="effects-list">
                        ${Object.entries(event.effects || {}).map(([faction, value]) => {
                            const name = LORE_DATA.factions?.[faction]?.name || faction;
                            const color = value > 0 ? 'var(--wahbook-positive)' : 'var(--wahbook-negative)';
                            return `<span style="color:${color}">${name}: ${value > 0 ? '+' : ''}${value}</span>`;
                        }).join('') || '<span style="color:#888">No reputation changes.</span>'}
                        </div>
                    </div>
                    ${relatedPosts.length > 0 ? `
                        <div class="event-posts">
                            <h5>Related Chatter</h5>
                            ${relatedPosts.slice(0, 3).map(p => renderPost(p)).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');

    // Re-attach event listeners explicitly
    container.querySelectorAll('.event-header').forEach(header => {
        header.addEventListener('click', (e) => {
            const card = header.closest('.event-card');
            const body = card.querySelector('.event-body');
            const btn = card.querySelector('.event-toggle-btn');
            
            const isHidden = body.classList.contains('hidden');
            if (isHidden) {
                body.classList.remove('hidden');
                btn.style.transform = 'rotate(180deg)';
                card.classList.add('expanded');
            } else {
                body.classList.add('hidden');
                btn.style.transform = 'rotate(0deg)';
                card.classList.remove('expanded');
            }
        });
    });
}
// ============================================================================
// QUICK LINKS HANDLER
// ============================================================================
function handleQuickLink(action) {
    // Ensure we switch to a visible feed container first
    // We'll use the 'foryou' container as a generic dynamic container
    document.querySelectorAll('.feed-content').forEach(el => el.classList.add('hidden'));
    const feedContainer = document.getElementById('feed-foryou');
    const postsContainer = document.getElementById('foryou-posts');
    const headerTitle = feedContainer.querySelector('h3');
    
    feedContainer.classList.remove('hidden');
    
    // Update navigation tabs visual state (deselect all to show we are in a custom view)
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

    switch (action) {
        case 'my-posts':
            headerTitle.textContent = 'My Posts';
            // Filter: Posts where characterKey matches loggedInUser
            let myPosts = getVisiblePosts().filter(p => p.characterKey === state.loggedInUser);
            myPosts.sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
            
            if (myPosts.length === 0) {
                postsContainer.innerHTML = `<div class="empty-state"><h3>No Posts Yet</h3><p>You haven't posted anything.</p></div>`;
                // Hide pagination for empty state
                document.getElementById('feed-pagination').style.display = 'none';
            } else {
                // Reset page to 1 for new view
                currentPage = 1;
                // Render the posts
                renderPaginatedPosts(myPosts, postsContainer);
            }
            break;

        case 'bookmarks':
            // Re-use the existing modal logic for bookmarks as it's better suited there
            const bookmarksBtn = document.getElementById('bookmarks-btn');
            if (bookmarksBtn) bookmarksBtn.click();
            // Restore the previous view since we opened a modal
            renderNavTabs();
            renderCurrentFeed();
            break;

        case 'mentions':
            headerTitle.textContent = 'Mentions & Replies';
            let mentions = getVisiblePosts().filter(p => {
                const username = state.loggedInUser;
                const inContent = (p.content || '').includes(`@${username}`);
                // Check if user is mentioned in comments OR if someone replied to user's post
                const inComments = (p.comments || []).some(c => (c.text || '').includes(`@${username}`));
                const isReplyToMe = p.characterKey === username && (p.comments || []).length > 0;
                
                return inContent || inComments || isReplyToMe;
            });
            mentions.sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
            
            if (mentions.length === 0) {
                postsContainer.innerHTML = `<div class="empty-state"><h3>No Mentions</h3><p>You haven't been mentioned yet.</p></div>`;
                document.getElementById('feed-pagination').style.display = 'none';
            } else {
                currentPage = 1;
                renderPaginatedPosts(mentions, postsContainer);
            }
            break;

        case 'liked':
            headerTitle.textContent = 'Liked Posts';
            const likedIds = state.userState.likedPosts || [];
            let likedPosts = getVisiblePosts().filter(p => likedIds.includes(p.id));
            likedPosts.sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
            
            if (likedPosts.length === 0) {
                postsContainer.innerHTML = `<div class="empty-state"><h3>No Liked Posts</h3><p>Go like something!</p></div>`;
                document.getElementById('feed-pagination').style.display = 'none';
            } else {
                currentPage = 1;
                renderPaginatedPosts(likedPosts, postsContainer);
            }
            break;
    }
}
// ============================================================================
// RENDER: INTEL TAB
// ============================================================================

function renderIntelFeed() {
    const container = document.getElementById('intel-container');
    if (!container) return;

    const rumors = (LORE_DATA?.rumors || []).filter(r => isContentVisible(r.date));

    // Calculate metrics for each
    const rumorData = rumors.map(rumor => {
        const relatedPosts = getVisiblePosts().filter(p => p.rumorId === rumor.id);
        const metrics = calculateRumorMetrics(rumor, relatedPosts);
        return { ...rumor, metrics, postCount: relatedPosts.length };
    });

    // Sort by impact
    rumorData.sort((a, b) => Math.abs(b.metrics.finalScore) - Math.abs(a.metrics.finalScore));

    container.innerHTML = `
        <div class="intel-grid">
            ${rumorData.slice(0, 12).map(rumor => {
                const isFuture = isFutureEvent(rumor.date);
                const typeBadge = rumor.isEvent ? 'event' : 'rumor';
                
                return `
                    <div class="intel-card ${isFuture ? 'debug-future' : ''}" data-rumor-id="${rumor.id}" ${isFuture ? 'style="border:2px dashed #ff4444;"' : ''}>
                        <div class="intel-card-header">
                            <span class="intel-title">${rumor.title}</span>
                            <span class="intel-type-badge ${typeBadge}">${typeBadge}</span>
                        </div>
                        <p class="intel-description">${rumor.description.substring(0, 120)}${rumor.description.length > 120 ? '...' : ''}</p>
                        <div class="intel-effects">
                            ${Object.entries(rumor.effects || {}).slice(0, 3).map(([faction, value]) => {
                                const sign = value > 0 ? '+' : '';
                                const className = value > 0 ? 'positive' : 'negative';
                                return `<span class="intel-effect ${className}">${sign}${value}</span>`;
                            }).join('')}
                        </div>
                        <div style="margin-top:12px;font-size:0.8rem;color:var(--wahbook-text-muted);">
                            ${rumor.metrics.status} · ${rumor.postCount} posts
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // Click handlers
    container.querySelectorAll('.intel-card').forEach(card => {
        card.addEventListener('click', () => {
            openDossierModal(card.dataset.rumorId);
        });
    });
}

// ============================================================================
// RENDER: EXPLORE TAB
// ============================================================================

function renderExploreFeed() {
    const container = document.getElementById('explore-container');
    if (!container) return;

    // Get top people by post count
    const posterCounts = new Map();
    getVisiblePosts().forEach(post => {
        posterCounts.set(post.characterKey, (posterCounts.get(post.characterKey) || 0) + 1);
    });

    const topPeople = Array.from(posterCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([key]) => getCharacterData(key));

    // Get popular topics from rumors
    const topics = (LORE_DATA?.rumors || [])
        .filter(r => isContentVisible(r.date) && r.cycle_impact?.label)
        .map(r => r.cycle_impact.label)
        .filter((v, i, a) => a.indexOf(v) === i)
        .slice(0, 12);

    // Get factions
    const factions = Object.entries(LORE_DATA?.factions || {}).slice(0, 6);

    container.innerHTML = `
        <div class="explore-section">
            <h4>👥 Popular Accounts</h4>
            <div class="explore-people-grid">
                ${topPeople.map(person => `
                    <a href="profile.html?user=${person.characterKey}" class="explore-person-card" style="text-decoration:none;">
                        <img src="${person.portrait}" alt="${person.name}" class="explore-person-avatar" onerror="handleImageError(this)">
                        <div class="explore-person-name">${person.name}</div>
                        <div class="explore-person-faction">${person.faction?.name || 'Independent'}</div>
                    </a>
                `).join('')}
            </div>
        </div>

        <div class="explore-section">
            <h4>🔥 Hot Topics</h4>
            <div class="explore-topics-list">
                ${topics.map(topic => `
                    <span class="explore-topic-tag">${topic}</span>
                `).join('')}
            </div>
        </div>

        <div class="explore-section">
            <h4>🏛️ Factions</h4>
            <div class="explore-people-grid">
                ${factions.map(([key, faction]) => `
                    <div class="explore-person-card faction-card" data-faction="${key}" style="cursor:pointer;">
                        <img src="${faction.logo}" alt="${faction.name}" class="explore-person-avatar" style="border-radius:8px;" onerror="handleImageError(this)">
                        <div class="explore-person-name">${faction.name}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Faction filter clicks
    container.querySelectorAll('.faction-card').forEach(card => {
        card.addEventListener('click', () => {
            activeFactionFilter = card.dataset.faction;
            currentTab = 'foryou';
            renderNavTabs();
            renderFactionFilters();
            renderCurrentFeed();
            playSound('click.mp3');
        });
    });
}

// ============================================================================
// RENDER CURRENT FEED
// ============================================================================

function renderCurrentFeed() {
    // Hide all feeds
    document.querySelectorAll('.feed-content').forEach(el => el.classList.add('hidden'));

    // Show current feed
    const currentFeedEl = document.getElementById(`feed-${currentTab}`);
    if (currentFeedEl) {
        currentFeedEl.classList.remove('hidden');
    }

    // Render appropriate content
    switch (currentTab) {
        case 'foryou':
            renderForYouFeed();
            break;
        case 'following':
            renderFollowingFeed();
            break;
        case 'latest':
            renderLatestFeed();
            break;
        case 'events':
            renderEventsFeed();
            break;
        case 'intel':
            renderIntelFeed();
            break;
        case 'explore':
            renderExploreFeed();
            break;
    }
}

// ============================================================================
// RENDER NAV TABS
// ============================================================================

function renderNavTabs() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === currentTab);
    });
}

// ============================================================================
// MODALS
// ============================================================================

function openCreatePostModal() {
    const modal = document.getElementById('create-post-modal');
    if (!modal) return;

    const user = getCharacterData(state.loggedInUser);
    document.getElementById('composer-avatar').src = user.portrait;
    document.getElementById('composer-name').textContent = user.name;
    document.getElementById('new-post-textarea').value = '';
    document.getElementById('char-count').textContent = '0';

    modal.classList.add('active');
    playSound('click.mp3');
}

function closeModal(modal) {
    if (modal) {
        modal.classList.remove('active');
    }
}

function openDossierModal(rumorId) {
    const modal = document.getElementById('dossier-modal');
    const body = document.getElementById('dossier-modal-body');
    if (!modal || !body) return;

    const rumor = LORE_DATA?.rumors?.find(r => r.id === rumorId);
    if (!rumor) return;

    const relatedPosts = getVisiblePosts().filter(p => p.rumorId === rumorId);
    const metrics = calculateRumorMetrics(rumor, relatedPosts);

    let dateStr = rumor.time_ago || 'Unknown';
    if (rumor.date) {
        const month = CALENDAR_DATA?.months?.values?.[rumor.date.monthIndex];
        dateStr = `${month?.name || 'Month'} ${rumor.date.day}, ${rumor.date.year}`;
    }

    body.innerHTML = `
        <div class="dossier-header" style="margin-bottom:20px;">
            <h2 style="margin:0 0 8px 0;">${rumor.title}</h2>
            <div style="display:flex;gap:12px;flex-wrap:wrap;font-size:0.9rem;color:var(--wahbook-text-secondary);">
                <span>📅 ${dateStr}</span>
                <span>📊 ${metrics.status}</span>
                <span>💬 ${relatedPosts.length} posts</span>
            </div>
        </div>
        
        <p style="line-height:1.6;margin-bottom:20px;">${rumor.description}</p>
        
        <div style="margin-bottom:20px;">
            <h4 style="margin-bottom:12px;">Reputation Effects</h4>
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
                ${Object.entries(rumor.effects || {}).map(([faction, value]) => {
                    const factionData = LORE_DATA.factions?.[faction];
                    const sign = value > 0 ? '+' : '';
                    const className = value > 0 ? 'positive' : 'negative';
                    return `<span class="intel-effect ${className}" style="padding:6px 12px;">${factionData?.name || faction}: ${sign}${value}</span>`;
                }).join('')}
            </div>
        </div>
        
        ${relatedPosts.length > 0 ? `
            <div>
                <h4 style="margin-bottom:12px;">Related Posts</h4>
                <div style="display:flex;flex-direction:column;gap:12px;max-height:400px;overflow-y:auto;">
                    ${relatedPosts.slice(0, 5).map(p => renderPost(p)).join('')}
                </div>
            </div>
        ` : '<p style="color:var(--wahbook-text-muted);">No related posts yet.</p>'}
    `;

    modal.classList.add('active');
    attachPostEventListeners(body);
    playSound('click.mp3');
}

function openShareModal(postId) {
    const modal = document.getElementById('share-modal');
    if (!modal) return;

    const directLink = `${window.location.origin}${window.location.pathname}#post-${postId}`;
    const embedCode = `<iframe src="${window.location.origin}${window.location.pathname}?embed=${postId}" width="550" height="400" style="border:1px solid #ccc;border-radius:12px;"></iframe>`;

    document.getElementById('share-code-textarea').value = directLink;
    modal.dataset.link = directLink;
    modal.dataset.iframe = embedCode;

    modal.classList.add('active');
    playSound('click.mp3');
}

// ============================================================================
// EVENT HANDLERS
// ============================================================================

function attachPostEventListeners(container) {
    // Like buttons
    container.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const postId = btn.dataset.postId;
            toggleLike(postId, btn);
            playSound('click.mp3');
        });
    });

    // Comment buttons
    container.querySelectorAll('.comment-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const postId = btn.dataset.postId;
            const postEl = btn.closest('.feed-post');
            const replyInput = postEl?.querySelector('.reply-input');
            if (replyInput) {
                replyInput.focus();
            }
        });
    });

    // Share buttons
    container.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            openShareModal(btn.dataset.postId);
        });
    });

    // Bookmark buttons
    container.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const postId = btn.dataset.postId;
            toggleBookmark(postId, btn);
            playSound('click.mp3');
        });
    });

    // Reply inputs
    container.querySelectorAll('.reply-input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                submitReply(input.dataset.postId, input.value.trim(), input);
            }
        });
    });

    // Rumor links
    container.querySelectorAll('.rumor-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openDossierModal(link.dataset.rumor);
        });
    });
}

function toggleLike(postId, btn) {
    if (!state.userState.likedPosts) state.userState.likedPosts = [];
    
    const post = WAHBOOK_POSTS.find(p => p.id === postId);
    if (!post) return;

    const isLiked = state.userState.likedPosts.includes(postId);
    
    if (isLiked) {
        state.userState.likedPosts = state.userState.likedPosts.filter(id => id !== postId);
        post.likes = Math.max(0, (post.likes || 1) - 1);
        btn.classList.remove('liked');
        btn.querySelector('.interaction-btn-icon').textContent = '🤍';
    } else {
        state.userState.likedPosts.push(postId);
        post.likes = (post.likes || 0) + 1;
        btn.classList.add('liked');
        btn.querySelector('.interaction-btn-icon').textContent = '❤️';
    }

    btn.querySelector('.like-count').textContent = post.likes;
    saveState();
}

function toggleBookmark(postId, btn) {
    if (!state.userState.bookmarks) state.userState.bookmarks = [];
    
    const isBookmarked = state.userState.bookmarks.includes(postId);
    
    if (isBookmarked) {
        state.userState.bookmarks = state.userState.bookmarks.filter(id => id !== postId);
        btn.classList.remove('bookmarked');
        btn.querySelector('.interaction-btn-icon').textContent = '📑';
    } else {
        state.userState.bookmarks.push(postId);
        btn.classList.add('bookmarked');
        btn.querySelector('.interaction-btn-icon').textContent = '🔖';
    }

    saveState();
}

function toggleFollow(characterKey) {
    if (!state.userState.following) state.userState.following = [];
    
    const isFollowing = state.userState.following.includes(characterKey);
    
    if (isFollowing) {
        state.userState.following = state.userState.following.filter(k => k !== characterKey);
    } else {
        state.userState.following.push(characterKey);
    }

    saveState();
}

function submitReply(postId, text, inputEl) {
    const post = WAHBOOK_POSTS.find(p => p.id === postId);
    if (!post) return;

    if (!post.comments) post.comments = [];
    
    const newComment = {
        characterKey: state.loggedInUser,
        text: text
    };
    
    post.comments.push(newComment);
    
    // Re-render the post's comments section
    const postEl = inputEl.closest('.feed-post');
    if (postEl) {
        const commentsContainer = postEl.querySelector('.post-comments');
        const commenter = getCharacterData(state.loggedInUser);
        
        const commentHTML = `
            <div class="comment">
                <a href="profile.html?user=${state.loggedInUser}">
                    <img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp" onerror="handleImageError(this)">
                </a>
                <div class="comment-body">
                    <a href="profile.html?user=${state.loggedInUser}" class="comment-author">${commenter.name}</a>
                    <span class="comment-text">${text}</span>
                </div>
            </div>
        `;
        
        commentsContainer.insertAdjacentHTML('beforeend', commentHTML);
        
        // Update comment count
        const commentBtn = postEl.querySelector('.comment-btn span:last-child');
        if (commentBtn) {
            commentBtn.textContent = post.comments.length;
        }
    }
    
    inputEl.value = '';
    playSound('confirm.mp3');
}

function submitNewPost() {
    const textarea = document.getElementById('new-post-textarea');
    const text = textarea?.value?.trim();
    
    if (!text) return;

    const newPost = {
        id: `user_post_${Date.now()}`,
        characterKey: state.loggedInUser,
        content: text,
        date: { ...CURRENT_GAME_DATE },
        timestamp: 'Just now',
        likes: 0,
        comments: []
    };

    WAHBOOK_POSTS.unshift(newPost);
    
    closeModal(document.getElementById('create-post-modal'));
    currentPage = 1;
    renderCurrentFeed();
    renderStoriesBar();
    
    playSound('confirm.mp3');
}

// ============================================================================
// SEARCH
// ============================================================================

function handleSearch(query) {
    searchQuery = query.toLowerCase().trim();
    currentPage = 1;
    renderCurrentFeed();
}

// ============================================================================
// SETUP EVENT LISTENERS
// ============================================================================

function setupEventListeners() {
    // Nav tabs
    document.querySelectorAll('.quick-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const action = link.dataset.action;
            handleQuickLink(action);
            playSound('click.mp3');
        });
    });
    
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            currentTab = tab.dataset.tab;
            currentPage = 1;
            renderNavTabs();
            renderCurrentFeed();
            playSound('click.mp3');
        });
    });

    // Sort dropdown
    document.getElementById('foryou-sort')?.addEventListener('change', (e) => {
        currentSort = e.target.value;
        currentPage = 1;
        renderForYouFeed();
        playSound('click.mp3');
    });

    // Search
    const searchInput = document.getElementById('global-search');
    let searchTimeout;
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(e.target.value);
        }, 300);
    });

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.closest('.modal'));
        });
    });

    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Submit post button
    document.getElementById('submit-post-btn')?.addEventListener('click', submitNewPost);

    // Textarea character count
    document.getElementById('new-post-textarea')?.addEventListener('input', (e) => {
        const count = e.target.value.length;
        document.getElementById('char-count').textContent = count;
        document.getElementById('submit-post-btn').disabled = count === 0 || count > 500;
    });

    // Share modal tabs
    document.querySelectorAll('.share-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const format = btn.dataset.format;
            const modal = document.getElementById('share-modal');
            const textarea = document.getElementById('share-code-textarea');
            
            document.querySelectorAll('.share-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            textarea.value = modal.dataset[format];
            playSound('click.mp3');
        });
    });

    // Copy share code
    document.getElementById('copy-share-btn')?.addEventListener('click', () => {
        const textarea = document.getElementById('share-code-textarea');
        navigator.clipboard.writeText(textarea.value).then(() => {
            const btn = document.getElementById('copy-share-btn');
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'Copy', 2000);
            playSound('confirm.mp3');
        });
    });

    // Notifications button
    document.getElementById('notifications-btn')?.addEventListener('click', () => {
        const modal = document.getElementById('notifications-modal');
        const list = document.getElementById('notifications-list');
        
        if (list) {
            list.innerHTML = `
                <div style="padding:20px;text-align:center;color:var(--wahbook-text-muted);">
                    <p>No new notifications</p>
                </div>
            `;
        }
        
        modal?.classList.add('active');
        playSound('click.mp3');
    });

    // Bookmarks button
    document.getElementById('bookmarks-btn')?.addEventListener('click', () => {
        const modal = document.getElementById('bookmarks-modal');
        const list = document.getElementById('bookmarks-list');
        
        if (list) {
            const bookmarks = state.userState?.bookmarks || [];
            const bookmarkedPosts = WAHBOOK_POSTS.filter(p => bookmarks.includes(p.id));
            
            if (bookmarkedPosts.length === 0) {
                list.innerHTML = `
                    <div style="text-align:center;color:var(--wahbook-text-muted);padding:40px;">
                        <span style="font-size:2rem;">🔖</span>
                        <p>No bookmarked posts yet</p>
                    </div>
                `;
            } else {
                list.innerHTML = bookmarkedPosts.map(p => renderPost(p)).join('');
                attachPostEventListeners(list);
            }
        }
        
        modal?.classList.add('active');
        playSound('click.mp3');
    });

    // Event sort controls
    document.querySelectorAll('#feed-events .control-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#feed-events .control-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Re-render with new sort
            renderEventsFeed();
            playSound('click.mp3');
        });
    });
}

// ============================================================================
// UPDATE SEEN POSTS
// ============================================================================

function updateSeenPosts() {
    if (!state.userState.seenPostIds) state.userState.seenPostIds = [];
    
    const visiblePostIds = getVisiblePosts().map(p => p.id);
    const newIds = new Set([...state.userState.seenPostIds, ...visiblePostIds]);
    state.userState.seenPostIds = Array.from(newIds);
    
    saveState();
}

// ============================================================================
// INITIALIZATION
// ============================================================================

async function init() {
    console.log('[WAHbook] Initializing...');

    // Sync debug mode
    try {
        window.debugMode = localStorage.getItem('vigilanceDebugMode') === 'true';
    } catch (e) {
        window.debugMode = false;
    }

    // Load state
    try {
        loadState();
    } catch (e) {
        console.warn('[WAHbook] Could not load state');
    }

    // Initialize user state if needed
    if (!state.userState) {
        state.userState = { following: [], seenPostIds: [], bookmarks: [], likedPosts: [] };
    }
    if (!state.userState.bookmarks) state.userState.bookmarks = [];
    if (!state.userState.likedPosts) state.userState.likedPosts = [];

    // Load dynamic data
    await loadDynamicData();

    // Render all components
    renderUserProfileCard();
    renderStoriesBar();
    renderCreatePostBox();
    renderFactionFilters();
    renderTrendingTopics();
    renderFollowSuggestions();
    renderActiveArcs();
    renderCycleStatus();
    renderNavTabs();
    renderCurrentFeed();
    updateNotificationBadge();
    // Setup event listeners
    setupEventListeners();

    // Update seen posts
    updateSeenPosts();

    // Handle hash navigation
    if (window.location.hash) {
        const postId = window.location.hash.replace('#post-', '');
        setTimeout(() => {
            const postEl = document.querySelector(`[data-post-id="${postId}"]`);
            if (postEl) {
                postEl.scrollIntoView({ behavior: 'smooth' });
                postEl.style.boxShadow = '0 0 20px var(--wahbook-accent)';
                setTimeout(() => postEl.style.boxShadow = '', 2000);
            }
        }, 500);
    }

    console.log('[WAHbook] Initialization complete');
}

// Run
init();