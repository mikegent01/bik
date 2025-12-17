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
import { renderIntelAndRumors } from './assembly-intel-system.js';
import { calculateRumorMetrics } from './research-data.js'; 
import { getDynamicTimestamp } from './calendar-data.js'; 
import { CURRENT_GAME_DATE, CURRENT_GAME_TIME } from './calendar-data.js'; 
import { renderRakashaNews } from './rakasha-news.js'; 

const tabsContainer = document.getElementById('wahbook-tabs-container');
const contentContainer = document.getElementById('wahbook-content');
const feedContainer = document.getElementById('feed-content');

// ... (Modal Elements) ...
const dossierModal = document.getElementById('dossier-modal');
const dossierModalBody = document.getElementById('dossier-modal-body');
const dossierModalClose = document.querySelector('.dossier-modal-close');
const createPostModal = document.getElementById('create-post-modal');
const newPostTextarea = document.getElementById('new-post-textarea');
const submitPostBtn = document.getElementById('submit-post-btn');
const shareModal = document.getElementById('share-modal');
const shareCodeTextarea = document.getElementById('share-code-textarea');
const copyShareBtn = document.getElementById('copy-share-btn');
const waluigiWarningModal = document.getElementById('waluigi-warning-modal');

let currentEventSort = 'newest';
let activeChannelId = 'all';
let currentPage = 1;
const POSTS_PER_PAGE = 20;

let WAHBOOK_POSTS = [];
let WAHBOOK_EVENTS = [];

// ... (Data Loading functions) ...
async function loadDynamicData() {
    const dataModule = await import('./assembly-data.js');
    WAHBOOK_POSTS = dataModule.WAHBOOK_POSTS;
    
    const eventsModule = await import('./assembly-events-data.js');
    const eventPosts = await eventsModule.loadEventPosts();
    WAHBOOK_POSTS.push(...eventPosts);
}

// ... (Helper functions) ...

/**
 * Checks if content should be visible based on CURRENT_GAME_DATE.
 * STRICTLY compares Year, Month, and Day. Ignores Time.
 * 
 * Logic:
 * - If post date is in a future year/month/day -> Hidden.
 * - If post date is today or earlier -> Visible.
 */

function isContentVisible(dateObj) {
    if (!dateObj) return true; // Assume visible if no date structure provided

    let isFuture = false;

    // 1. Check Year
    if (dateObj.year > CURRENT_GAME_DATE.year) {
        isFuture = true;
    } else if (dateObj.year === CURRENT_GAME_DATE.year) {
        // 2. Year is equal, Check Month (0-11 index)
        if (dateObj.monthIndex > CURRENT_GAME_DATE.monthIndex) {
            isFuture = true;
        } else if (dateObj.monthIndex === CURRENT_GAME_DATE.monthIndex) {
            // 3. Month is equal, Check Day
            if (dateObj.day > CURRENT_GAME_DATE.day) {
                isFuture = true;
            }
        }
    }

    // If it's in the future, check for Debug Mode
    if (isFuture) {
        // Check both window.debugMode (global) and state.debugMode (imported)
        return window.debugMode === true || state.debugMode === true;
    }

    return true;
}

/**
 * Helper to identify future events for debug styling purposes.
**/


function getPostTimeValue(post) {
    // Priority 1: Use explicit order field if it exists
    if (post.order !== undefined) return post.order;
    
    // Priority 2: Calculate from date
    if (!post.date) return 0; 
    
    return new Date(
        post.date.year, 
        post.date.monthIndex, 
        post.date.day, 
        post.date.hour !== undefined ? post.date.hour : 12, 
        post.date.minute !== undefined ? post.date.minute : 0
    ).getTime();
}

function formatCharacterKey(key) {
    if (!key) return '';
    return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
/**
 * Try to find a working portrait path
 * Tries multiple variations to handle case sensitivity issues
 */
function findPortraitPath(characterKey) {
    // Base path
    const basePath = `portraits/${characterKey}.png`;
    
    // We can't synchronously check if images exist, so we'll just return the expected path
    // The onerror handler on the img tag will handle missing images
    return basePath;
}

/**
 * Get character data - works for both defined and undefined characters
 */
function getCharacterData(characterKey) {
    if (!characterKey) {
        return { 
            name: 'Unknown', 
            portrait: FALLBACK_PORTRAIT, 
            faction: null, 
            characterKey: 'unknown',
            isDefined: false,
            isUnknown: true 
        };
    }

    // Check main characters
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
        
        // Use character's portrait if defined, otherwise construct path
        let portrait = char.portrait;
        if (!portrait || portrait === '') {
            portrait = `portraits/${characterKey}.png`;
        }
        
        return {
            name: char.name,
            portrait: portrait,
            faction,
            characterKey,
            bio: char.bio || char.description || null,
            role: char.role || char.title || null,
            isDefined: true
        };
    }

    // Check if it's a faction
    if (LORE_DATA?.factions?.[characterKey]) {
        const fac = LORE_DATA.factions[characterKey];
        return {
            name: fac.name,
            portrait: fac.logo || FALLBACK_PORTRAIT,
            faction: { key: characterKey, name: fac.name, logo: fac.logo },
            characterKey,
            bio: fac.description || null,
            isDefined: true
        };
    }

    // Check notable people in factions
    for (const fKey in LORE_DATA?.factions || {}) {
        const fac = LORE_DATA.factions[fKey];
        const notablePerson = fac.notable_people?.find(p =>
            p.name?.toLowerCase().replace(/[\s-]/g, '_') === characterKey
        );
        if (notablePerson) {
            return {
                name: notablePerson.name,
                portrait: `portraits/${characterKey}.png`,
                faction: { key: fKey, name: fac.name, logo: fac.logo },
                characterKey,
                role: notablePerson.role || null,
                bio: notablePerson.description || null,
                isDefined: true
            };
        }
    }

    // Special cases
    const specialCases = {
        'wah_media_collective': { 
            name: "WAH Media Collective", 
            portrait: 'icon_newspaper.png', 
            faction: { name: "The Daily Paradox" }, 
            bio: "Official news network.", 
            isDefined: true 
        },
        'delfino_reporter': { 
            name: "Delfino Daily Reporter", 
            portrait: 'portraits/delfino_reporter.png', 
            faction: { name: "Delfino Press" }, 
            bio: "Independent journalist.", 
            isDefined: true 
        },
        // Add more special cases as needed
        'speaker_l': {
            name: "Speaker L",
            portrait: 'portraits/speaker_l.png',
            faction: null,
            bio: null,
            isDefined: true
        }
    };
    
    if (specialCases[characterKey]) {
        return { ...specialCases[characterKey], characterKey };
    }

    // Undefined character - log warning but don't crash
    console.warn(`[WAHbook] Undefined character: "${characterKey}"`);
    console.warn(`[WAHbook] Expected portrait at: portraits/${characterKey}.png`);
    
    return {
        name: formatCharacterKey(characterKey),
        portrait: `portraits/${characterKey}.png`,
        faction: null,
        characterKey,
        bio: null,
        role: null,
        isDefined: false,
        isGenerated: true
    };
}

function renderFeedPost(post, options = {}) {
    // Safety check: Filter out future posts at render time (unless debug mode)
    if (!isContentVisible(post.date)) return '';

    const author = getCharacterData(post.characterKey);
    let timeString = post.timestamp;
    if (post.date) {
        timeString = getDynamicTimestamp(post.date);
    }

    const factionHTML = author.faction ? `<span class="post-meta">${author.faction.name} · ${timeString}</span>` : `<span class="post-meta">${timeString}</span>`;
    
    const isNew = state.userState.seenPostIds && !state.userState.seenPostIds.includes(post.id);
    const newBadgeHTML = isNew ? `<div class="new-post-badge">NEW</div>` : '';

    const isHiddenFuture = isFutureEvent(post.date);
    const debugBadgeHTML = isHiddenFuture 
        ? `<div class="debug-future-badge" style="background: repeating-linear-gradient(45deg, #aa0000, #aa0000 10px, #660000 10px, #660000 20px); color: #fff; padding: 4px 8px; font-weight: bold; font-size: 0.75em; text-align: center; margin-bottom: 8px; border: 1px solid #ff4444; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px;">⚠️ DEBUG: FUTURE POST ⚠️</div>` 
        : '';
    const debugStyle = isHiddenFuture ? 'style="opacity: 0.7; border: 2px dashed #ff4444;"' : '';

    // Generate comments with dynamic profile links
    const commentsHTML = (post.comments || []).map(comment => {
        const commenter = getCharacterData(comment.characterKey);
        return `
            <div class="comment">
                <a href="profile.html?user=${comment.characterKey}" class="profile-link">
                    <img src="${commenter.portrait}" 
                         alt="${commenter.name}" 
                         class="comment-pfp"
                         onerror="this.onerror=null; this.src='portraits/unknown.png'; this.style.border='2px dashed #ff4444'; console.error('[WAHbook] Portrait missing: ${comment.characterKey}');">
                </a>
                <div class="comment-body">
                    <a href="profile.html?user=${comment.characterKey}" class="profile-link comment-author">${commenter.name}</a>
                    <span class="comment-text">${comment.text}</span>
                </div>
            </div>
        `;
    }).join('');

    const imageHTML = post.image ? `<img src="${post.image}" alt="${post.image_alt}" class="post-image">` : '';
    
    let videoHTML = '';
    if (post.videoSrc) {
        videoHTML = `<div class="post-video-container"><video src="${post.videoSrc}" controls autoplay muted loop playsinline></video></div>`;
    }

    let audioHTML = '';
    if (post.audioSrc) {
        audioHTML = `<div class="post-audio-container"><audio controls src="${post.audioSrc}"></audio></div>`;
    }

    const trendingBadgeHTML = options.showTrendingScore ? `<div class="trending-badge" title="Trending Score: ${options.trendingScore}">🔥</div>` : '';
    const loggedInUser = state.loggedInUser !== 'generic' ? getCharacterData(state.loggedInUser) : null;
    const replyInputHTML = loggedInUser ? `<div class="reply-input-container" style="display: none;"><img src="${loggedInUser.portrait}" alt="Your profile picture" class="reply-pfp"><input type="text" class="reply-input" placeholder="Write a comment..."></div>` : '';

    return `
        <div class="feed-post" id="post-${post.id}" ${debugStyle}>
            ${debugBadgeHTML}
            ${newBadgeHTML}${trendingBadgeHTML}
            <div class="post-header">
                <a href="profile.html?user=${post.characterKey}" class="profile-link">
                    <img src="${author.portrait}" 
                         alt="${author.name}" 
                         class="post-pfp"
                         onerror="this.onerror=null; this.src='portraits/unknown.png'; this.style.border='2px dashed #ff4444'; console.error('[WAHbook] Portrait missing: ${post.characterKey}');">
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
            ${videoHTML}
            ${audioHTML} 
            <div class="post-interactions">
                <div class="interaction-btn like-btn" data-likes="${post.likes || 0}"><span class="interaction-btn-icon">👍</span> Like (${post.likes || 0})</div>
                <div class="interaction-btn comment-btn"><span class="interaction-btn-icon">💬</span> Comment (${(post.comments || []).length})</div>
                <div class="interaction-btn share-btn"><span class="interaction-btn-icon">↪️</span> Share</div>
            </div>
            <div class="post-comments-section"><div class="post-comments">${commentsHTML}</div>${replyInputHTML}</div>
        </div>
    `;
}
/**
 * Helper to identify future events for debug styling purposes.
 * Returns true if the event is in the future relative to CURRENT_GAME_DATE.
 */
function isFutureEvent(dateObj) {
    if (!dateObj) return false;
    if (dateObj.year > CURRENT_GAME_DATE.year) return true;
    if (dateObj.year === CURRENT_GAME_DATE.year && dateObj.monthIndex > CURRENT_GAME_DATE.monthIndex) return true;
    if (dateObj.year === CURRENT_GAME_DATE.year && dateObj.monthIndex === CURRENT_GAME_DATE.monthIndex && dateObj.day > CURRENT_GAME_DATE.day) return true;
    return false;
}

function renderChatMessage(post) {
    const author = getCharacterData(post.characterKey);
    const isPlayer = post.characterKey === state.loggedInUser;
    const bubbleClass = isPlayer ? 'outgoing' : 'incoming';
    let timeString = post.timestamp;
    if (post.date) {
        timeString = getDynamicTimestamp(post.date);
    }
    return `<div class="chat-bubble ${bubbleClass}" id="msg-${post.id}"><div class="chat-meta"><span class="chat-author">${author.name}</span><span class="chat-time">${timeString}</span></div><div class="chat-text">${post.content}</div></div>`;
}

function renderCreatePostBox() {
    if (state.loggedInUser === 'generic') return '';
    const user = getCharacterData(state.loggedInUser);
    return `<div class="create-post-container"><div class="create-post-header"><img src="${user.portrait}" alt="Your profile picture" class="create-post-pfp"><button class="create-post-input">What's on your mind, ${user.name.split(' ')[0]}?</button></div></div>`;
}

// Updated Sidebar Widget with Date Filtering
function renderTrendingRumorsWidget() {
    const rumors = LORE_DATA.rumors || [];
    const trendingList = [];
    const decayingList = [];

    rumors.forEach(rumor => {
        // FILTER: Rumors from future dates are ignored
        if (!isContentVisible(rumor.date)) return;

        // FILTER: Only count posts that are visible by date
        const chatterCount = WAHBOOK_POSTS.filter(post => post.rumorId === rumor.id && isContentVisible(post.date)).length;
        
        // FILTER: Only pass visible posts to metrics
        const relatedPosts = WAHBOOK_POSTS.filter(post => post.rumorId === rumor.id && isContentVisible(post.date));
        
        const metrics = calculateRumorMetrics(rumor, relatedPosts);
        const item = { ...rumor, metrics, count: chatterCount };
        
        if (metrics.status === 'Viral' || metrics.status === 'Trending') {
            trendingList.push(item);
        } else if (metrics.decayFactor >= 2.0 || metrics.status === 'Fading' || metrics.status === 'Old News') {
            if (Math.abs(metrics.finalScore) > 0.05) {
                decayingList.push(item);
            }
        }
    });

    trendingList.sort((a, b) => b.metrics.finalScore - a.metrics.finalScore);
    decayingList.sort((a, b) => b.metrics.daysPassed - a.metrics.daysPassed);

    const renderList = (items, emptyMsg) => {
        if (items.length === 0) return `<li style="font-style:italic; color:var(--text-secondary); padding:8px;">${emptyMsg}</li>`;
        return items.slice(0, 3).map(r => `<li class="trending-rumor-item"><div class="rumor-header"><div class="rumor-name" title="${r.title}">${r.title}</div><span class="rumor-badge ${r.metrics.status.toLowerCase().replace(' ','-')}">${r.metrics.status}</span></div><div class="rumor-metrics"><span>Posts: ${r.count}</span><span class="${r.metrics.finalScore > 0 ? 'metric-up' : 'metric-down'}">Imp: ${r.metrics.finalScore.toFixed(1)}</span></div></li>`).join('');
    };

    return `<div class="profile-sidebar-widget"><h4>Network Trends</h4><div style="margin-bottom: 16px;"><h6 style="color: var(--positive-color); font-size: 0.8rem; margin-bottom: 8px;">🔥 VIRAL TARGETS</h6><ul class="trending-rumor-list">${renderList(trendingList, "No viral topics currently.")}</ul></div><div><h6 style="color: var(--text-secondary); font-size: 0.8rem; margin-bottom: 8px;">📉 FADING SIGNALS</h6><ul class="trending-rumor-list">${renderList(decayingList, "No fading signals detected.")}</ul></div><a href="assembly.html#intel" class="intel-link-btn" style="margin-top:16px; font-size:0.8rem; width:100%;">View Full Intel Report</a></div>`;
}

function renderMainFeed() {
    if (!feedContainer) return;
    
    // FILTER: Only show posts that are currently visible (Today or Past)
    const visiblePosts = WAHBOOK_POSTS.filter(p => isContentVisible(p.date));

    const sortedPosts = [...visiblePosts].sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
    
    // Clamp currentPage
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
    
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = sortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
    
    const postsHTML = renderCreatePostBox() + currentPosts.map(p => renderFeedPost(p)).join('');
    
    const paginationHTML = `
        <div class="wahbook-pagination">
            <button id="prev-page-btn" class="control-btn" ${currentPage === 1 ? 'disabled' : ''}>&laquo; Previous</button>
            <span class="page-info">Page ${currentPage} of ${totalPages}</span>
            <button id="next-page-btn" class="control-btn" ${currentPage === totalPages ? 'disabled' : ''}>Next &raquo;</button>
        </div>
    `;

    feedContainer.innerHTML = `<div id="feed-content-layout"><div class="wahbook-feed-container">${postsHTML}${paginationHTML}</div><aside id="feed-sidebar">${renderTrendingRumorsWidget()}</aside></div>`;

    document.getElementById('prev-page-btn')?.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderMainFeed();
            const layout = document.getElementById('feed-content-layout');
            if (layout) layout.scrollIntoView({ behavior: 'smooth' });
        }
    });

    document.getElementById('next-page-btn')?.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderMainFeed();
             const layout = document.getElementById('feed-content-layout');
            if (layout) layout.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function renderEvent(rumor) {
    const allTargets = new Set();
    (rumor.targets || []).forEach(t => {
        if (t === 'party') { state.party.forEach(p => allTargets.add(p)); } 
        else { allTargets.add(t); }
    });
    const attendeesHTML = Array.from(allTargets).map(targetKey => {
        const character = getCharacterData(targetKey);
        return `<div class="attendee-card"><img src="${character.portrait}" alt="${character.name}" class="attendee-pfp"><div class="attendee-info"><span class="attendee-name">${character.name}</span></div></div>`;
    }).join('');

    // FILTER: Only show posts for this event that are visible by date
    const allPostsForEvent = WAHBOOK_POSTS.filter(p => p.rumorId === rumor.id && isContentVisible(p.date));
    
    const newsPosts = allPostsForEvent.filter(p => p.characterKey === 'wah_media_collective');
    const regularPosts = allPostsForEvent.filter(p => p.characterKey !== 'wah_media_collective');
    newsPosts.sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
    regularPosts.sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
    const newsHTML = newsPosts.length > 0 ? newsPosts.map(p => renderFeedPost(p)).join('') : '';
    const postsHTML = regularPosts.length > 0 ? regularPosts.map(p => renderFeedPost(p)).join('') : '';
    const attendeesSectionHTML = attendeesHTML ? `<div class="attendees-list-container"><h4>Key Figures Involved</h4><div class="attendees-list">${attendeesHTML}</div></div>` : '';
    const hasCollapsibleContent = attendeesSectionHTML || newsHTML || postsHTML;
    return `<div class="event-container" data-event-id="${rumor.id}"><div class="event-main-header"><h3>${rumor.title || 'Untitled Event'}</h3><p>${rumor.description || 'No description available.'}</p>${hasCollapsibleContent ? '<span class="event-toggle-icon">▼</span>' : ''}</div>${hasCollapsibleContent ? `<div class="event-collapsible-body"><div class="event-details-grid">${attendeesSectionHTML}<div class="related-content-container">${newsHTML ? `<div class="related-news"><h4>News Coverage</h4>${newsHTML}</div>` : ''}${postsHTML ? `<div class="related-posts"><h4>Public Reactions</h4>${postsHTML}</div>` : ''}</div></div></div>` : ''}</div>`;
}

function renderEventsFeed() {
    const container = document.getElementById('events-feed-container');
    if (!container) return;
    
    // FILTER: Only render events that have happened (date <= today)
    const eventsToRender = LORE_DATA.rumors.filter(rumor => rumor.isEvent && isContentVisible(rumor.date));
    
    eventsToRender.sort((a, b) => {
        const dateA = a.date ? new Date(a.date.year, a.date.monthIndex, a.date.day) : 0;
        const dateB = b.date ? new Date(b.date.year, b.date.monthIndex, b.date.day) : 0;
        return (currentEventSort === 'newest') ? dateB - dateA : dateA - dateB;
    });
    container.innerHTML = eventsToRender.map(renderEvent).join('');
}

function openDossierModal(rumorId) {
    const rumor = LORE_DATA.rumors.find(r => r.id === rumorId);
    
    // FILTER: Security check - if rumor date is in future, do not open. Effects do not apply yet.
    if (!rumor || !isContentVisible(rumor.date)) return;

    // FILTER: Only show intel chatter that is currently visible
    const intelPosts = WAHBOOK_POSTS.filter(p => p.rumorId === rumorId && isContentVisible(p.date)).sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
    
    const chatterHTML = intelPosts.length > 0 ? intelPosts.map(post => renderFeedPost(post)).join('') : `<p class="page-subtitle">No network chatter detected for this rumor yet.</p>`;
    const allTargets = new Set();
    rumor.targets.forEach(t => {
        if (t === 'party') { state.party.forEach(p => allTargets.add(p)); } 
        else if (LORE_DATA.characters[t] || LORE_DATA.auxiliary_party[t] || LORE_DATA.factions[t]) { allTargets.add(t); }
    });
    const affectedPartiesHTML = Array.from(allTargets).map(targetKey => {
        const targetData = getCharacterData(targetKey);
        if (targetKey === 'liberated_toads') { targetData.name = "The Liberated Toads"; targetData.portrait = LORE_DATA.factions.liberated_toads.logo; }
        if (!targetData.name) return '';
        return `<div class="affected-party-chip"><img src="${targetData.portrait}" alt="${targetData.name}" title="${targetData.name}"><span>${targetData.name}</span></div>`;
    }).join('');

    // Generate Reputation Changes HTML
    const repChangesHTML = Object.entries(rumor.effects).map(([factionKey, repChange]) => {
        const factionData = LORE_DATA.factions[factionKey];
        if (!factionData) return '';
        
        let specificsHTML = '';
        if (rumor.personal_impact) {
            const specificImpacts = [];
            for (const charKey in rumor.personal_impact) {
                const charImpact = rumor.personal_impact[charKey];
                if (charImpact[factionKey] !== undefined) {
                    const charData = getCharacterData(charKey);
                    const val = charImpact[factionKey];
                    const sClass = val > 0 ? 'positive' : 'negative';
                    specificImpacts.push(`<span style="font-size:0.8em; color:var(--text-secondary); margin-left:5px;">${charData.name}: <span class="${sClass}">${val > 0 ? '+' : ''}${val}</span></span>`);
                }
            }
            if (specificImpacts.length > 0) {
                specificsHTML = `<div style="margin-top:4px;">${specificImpacts.join(', ')}</div>`;
            }
        }

        const repClass = repChange > 0 ? 'positive' : 'negative';
        const sign = repChange > 0 ? '+' : '';
        return `
            <li class="rep-change-item">
                <div class="faction-info">
                    <img src="${factionData.logo}" alt="${factionData.name}">
                    <span>${factionData.name}</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:flex-end;">
                    <span class="rep-change-value ${repClass}">${sign}${repChange} Rep (General)</span>
                    ${specificsHTML}
                </div>
            </li>
        `;
    }).join('');

    dossierModalBody.innerHTML = `<div class="dossier-header"><h2>${rumor.title}</h2><p>Timeline: ${rumor.time_ago || 'Ongoing'}</p></div><p>${rumor.description}</p><div class="dossier-analysis-grid"><div class="dossier-affected-parties"><h4>Primary Targets Involved</h4><div class="affected-list">${affectedPartiesHTML}</div><h4>Reputation Impact</h4><ul class="rep-change-list">${repChangesHTML}</ul></div><div class="dossier-network-feed"><h4>Related Network Chatter</h4>${chatterHTML}</div></div>`;
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
    // FILTER: Exclude future posts
    const followedPosts = WAHBOOK_POSTS.filter(p => state.userState.following.includes(p.characterKey) && isContentVisible(p.date)).sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
    container.innerHTML = followedPosts.length > 0 ? followedPosts.map(p => renderFeedPost(p)).join('') : `<p class="page-subtitle">The accounts you follow haven't posted anything visible yet.</p>`;
}

// NEW: Trending Feed based on Dynamic Intel
function renderTrendingFeed() {
    const container = document.getElementById('trending-feed-container');
    if (!container) return;

    // 1. Get Viral & Trending Rumor IDs
    const activeRumors = LORE_DATA.rumors || [];
    let trendingRumorIds = [];

    activeRumors.forEach(rumor => {
        // FILTER: Rumor must be visible by date
        if (!isContentVisible(rumor.date)) return;

        // FILTER: Metrics only use visible posts
        const relatedPosts = WAHBOOK_POSTS.filter(post => post.rumorId === rumor.id && isContentVisible(post.date));
        const metrics = calculateRumorMetrics(rumor, relatedPosts);
        
        if (['Viral', 'Trending', 'Active'].includes(metrics.status)) {
            trendingRumorIds.push(rumor.id);
        }
    });

    // 2. Filter posts that belong to these "Hot" rumors AND are visible
    let trendingPosts = WAHBOOK_POSTS.filter(p => p.rumorId && trendingRumorIds.includes(p.rumorId) && isContentVisible(p.date));

    // 3. Fallback: If not enough rumor posts, grab the highest liked posts overall (that are visible)
    if (trendingPosts.length < 5) {
        const otherPosts = WAHBOOK_POSTS.filter(p => !p.rumorId && isContentVisible(p.date))
            .sort((a, b) => (b.likes || 0) - (a.likes || 0))
            .slice(0, 5);
        trendingPosts = [...trendingPosts, ...otherPosts];
    }

    // 4. Sort final feed by Likes (Popularity)
    trendingPosts.sort((a, b) => (b.likes || 0) - (a.likes || 0));

    // 5. Render
    container.innerHTML = trendingPosts.map(p => {
        const score = (p.likes || 0) + ((p.comments?.length || 0) * 2);
        return renderFeedPost(p, { showTrendingScore: true, trendingScore: score });
    }).join('');
}


function handleShare(button) {
    const postElement = button.closest('.feed-post');
    if (!postElement || !shareModal) return;
    const postId = postElement.id.replace('post-', '');
    const embedUrl = `${window.location.origin}${window.location.pathname}?embed=${postId}`;
    const iframeCode = `<iframe src="${embedUrl}" width="550" height="450" style="border:1px solid #ccc; border-radius: 8px;" title="WAHbook Post" loading="lazy"></iframe>`;
    const directLink = `${window.location.href.split('?')[0].split('#')[0]}#post-${postId}`;
    shareModal.dataset.iframe = iframeCode;
    shareModal.dataset.link = directLink;
    shareCodeTextarea.value = iframeCode;
    const tabs = shareModal.querySelectorAll('.share-tab-btn');
    tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.format === 'iframe'));
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
        } catch (e) { console.warn("Invalid hash for scrolling:", window.location.hash); }
    }
}
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
function generateSpecialKeywords(text) {
    const lowerText = text.toLowerCase();
    const keywords = [];
    const curseWords = ['fuck', 'damn', 'hell', 'crap', 'bastard', 'curse'];
    const characterNames = { 'bowser': 'bowser', 'waluigi': 'waluigi', 'kamek': 'kamek', 'lario': 'lario', 'toadette': 'toadette', 'fawful': 'fawful' };
    if (curseWords.some(word => lowerText.includes(word))) {
        for (const name in characterNames) {
            if (lowerText.includes(name)) {
                keywords.push(`curse_${characterNames[name]}`);
            }
        }
    }
    return keywords;
}
function findNpcResponse(sourceText, sourceAuthorKey, targetPost, threadHistory, responseType) {
    const lowerText = sourceText.toLowerCase();
    const sourceTone = getPostTone(sourceText);
    const respondingNpcs = new Set(threadHistory.map(c => c.characterKey));
    let bestMatches = [];
    let bestMatchLength = 0;
    for (const response of NPC_RESPONSES) {
        if (response.type !== responseType || respondingNpcs.has(response.characterKey) || response.characterKey === sourceAuthorKey || response.characterKey === targetPost.characterKey) continue;
        const trigger = response.trigger;
        if ((trigger.reply_to_author && !trigger.reply_to_author.includes(sourceAuthorKey)) || (trigger.tone && trigger.tone !== sourceTone)) continue;
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
    return bestMatches.length > 0 ? bestMatches[Math.floor(Math.random() * bestMatches.length)] : null;
}
function triggerNpcInteraction(targetPost, initialText = null, initialAuthor = null) {
    let conversationChain = [];
    let lastCommentText = initialText || targetPost.content;
    let lastCommentAuthor = initialAuthor || targetPost.characterKey;
    const specialKeywords = (initialText) ? generateSpecialKeywords(initialText) : [];
    for (let depth = 0; depth < 3; depth++) {
        const responseType = (depth === 0) ? 'initial' : 'reply';
        const textToSearch = (depth === 0) ? `${lastCommentText} ${specialKeywords.join(' ')}` : lastCommentText;
        const response = findNpcResponse(textToSearch, lastCommentAuthor, targetPost, conversationChain, responseType);
        if (response && Math.random() < 0.65) {
            const newComment = { characterKey: response.characterKey, text: response.response };
            conversationChain.push(newComment);
            lastCommentText = newComment.text;
            lastCommentAuthor = newComment.characterKey;
        } else {
            break;
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
                    newCommentElement.innerHTML = `<a href="profile.html?user=${comment.characterKey}" class="profile-link"><img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp"></a><div class="comment-body"><a href="profile.html?user=${comment.characterKey}" class="profile-link comment-author">${commenter.name}</a><span class="comment-text">${comment.text}</span></div>`;
                    commentsContainer.appendChild(newCommentElement);
                    newCommentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
                const commentBtn = postElement.querySelector('.comment-btn');
                if(commentBtn) commentBtn.innerHTML = `<span class="interaction-btn-icon">💬</span> Comment (${targetPost.comments.length})`;
            }
        }, (index * 6000) + (Math.random() * 4000));
    });
}
function handleNewPost() {
    const text = newPostTextarea.value.trim();
    if (!text) return;
    const newPost = { 
        id: `player_post_${Date.now()}`, 
        characterKey: state.loggedInUser, 
        timestamp: 'Just now', 
        date: { ...CURRENT_GAME_DATE, ...CURRENT_GAME_TIME }, 
        content: text, 
        likes: 0, 
        comments: [] 
    };
    WAHBOOK_POSTS.push(newPost);
    renderMainFeed(); 
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
        postElement.querySelector('.post-comments')?.insertAdjacentHTML('beforeend', `<div class="comment"><a href="profile.html?user=${newComment.characterKey}" class="profile-link"><img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp"></a><div class="comment-body"><a href="profile.html?user=${newComment.characterKey}" class="profile-link comment-author">${commenter.name}</a><span class="comment-text">${newComment.text}</span></div></div>`);
        inputElement.value = '';
        const commentBtn = postElement.querySelector('.comment-btn');
        commentBtn.innerHTML = `<span class="interaction-btn-icon">💬</span> Comment (${post.comments.length})`;
        triggerNpcInteraction(post, text, state.loggedInUser);
    }
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
        if(activeContent) activeContent.classList.add('active');
        
        const feedContainer = activeContent.querySelector('.wahbook-feed-container');

        if (tabName === 'groups') {
             // REPLACED: Now renders Rakasha News instead of the chat feed
             renderRakashaNews();
        } else if (feedContainer && feedContainer.childElementCount === 0) {
            switch(tabName) {
                case 'followed': renderFollowedFeed(); break;
                case 'trending': renderTrendingFeed(); break;
            }
        }
        
        const intelRumorsContainer = document.getElementById('intel-rumors-container');
        if (tabName === 'intel' && intelRumorsContainer) {
            renderIntelAndRumors();
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
        const dossierCard = e.target.closest('.intel-card, .dossier-trigger');
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
            if (replyContainer && replyContainer.style.display !== 'flex') {
                replyContainer.style.display = 'flex';
                replyContainer.querySelector('.reply-input').focus();
            }
        }
    });
    
    dossierModalClose?.addEventListener('click', () => dossierModal.style.display = 'none');
    dossierModal?.addEventListener('click', (e) => { if (e.target === dossierModal) dossierModal.style.display = 'none'; });
    createPostModal.querySelector('.modal-close').addEventListener('click', () => createPostModal.style.display = 'none');
    createPostModal.addEventListener('click', e => { if (e.target === createPostModal) createPostModal.style.display = 'none'; });
    submitPostBtn.addEventListener('click', handleNewPost);
    if (shareModal) {
        shareModal.querySelector('.modal-close').addEventListener('click', () => shareModal.style.display = 'none');
        shareModal.addEventListener('click', e => { if (e.target === shareModal) shareModal.style.display = 'none'; });
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
            if(e.target === waluigiWarningModal) waluigiWarningModal.style.display = 'none';
        });
    }
    document.body.addEventListener('keypress', e => {
        if (e.key === 'Enter' && e.target.classList.contains('reply-input')) {
            handleNewReply(e.target);
        }
    });
}
function updateSeenPosts() {
    loadState();
    const allPostIds = WAHBOOK_POSTS.map(p => {
        // FILTER: Only mark as seen if it is actually visible today (NOT debug mode future posts)
        // We use a stricter check here - only mark as "seen" if it's genuinely past/present
        if (!isFutureEvent(p.date)) return p.id;
        return null;
    }).filter(id => id !== null);

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
            if (likeBtn && !likeBtn.classList.contains('liked')) {
                likeBtn.dataset.likes = postData.likes;
                likeBtn.innerHTML = `<span class="interaction-btn-icon">👍</span> Like (${postData.likes})`;
            }
        }
    }, 8000 + Math.random() * 6000);
}
async function init() {
    const params = new URLSearchParams(window.location.search);
    const embedPostId = params.get('embed');
    loadState();
    await loadDynamicData();
    if (embedPostId) { 
        return; 
    }
    if (!feedContainer) return;
    if (state.loggedInUser === 'archie' && !state.userState.waluigiWarningShown) {
        setTimeout(() => {
            state.userState.waluigiWarningShown = true;
            saveState();
        }, 1500);
    }
    renderMainFeed();
    renderEventsFeed();
    // Render Intel and Rumors immediately after loading dynamic data
    renderIntelAndRumors(); 
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