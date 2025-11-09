/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LORE_DATA, CHARACTER_RELATIONS } from './lore.js';
import { playSound } from './common.js';
import { state, saveState, loadState } from './state.js';
import { NPC_RESPONSES } from './npc-responses.js';
import { GUILD_DATA, CHARTER_DATA } from './guilds-data.js';
import { CHARACTER_MECHANICS } from './character-special-systems.js';
import { renderIntelAndRumors } from './assembly-intel-system.js';

const tabsContainer = document.getElementById('wahbook-tabs-container');
const contentContainer = document.getElementById('wahbook-content');
const feedContainer = document.getElementById('feed-content');

// Modal Elements
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
let activeGroupFilter = 'all';

let WAHBOOK_POSTS = [];
let WAHBOOK_EVENTS = [];

// In assembly.js, find and replace the loadDynamicData function

async function loadDynamicData() {
    const dataModule = await import('./assembly-data.js');
    WAHBOOK_POSTS = dataModule.WAHBOOK_POSTS;
    
    // This part is simplified, its main job is to get any extra posts
    const eventsModule = await import('./assembly-events-data.js');
    const eventPosts = await eventsModule.loadEventPosts();
    WAHBOOK_POSTS.push(...eventPosts);
}
function formatCharacterKey(key) {
    if (!key) return '';
    return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getCharacterData(characterKey) {
    if (!characterKey) return { name: 'Unknown', portrait: 'portraits/unknown.png', faction: null };
    const char = LORE_DATA.characters[characterKey] || LORE_DATA.auxiliary_party[characterKey];
    if (char && char.portrait) {
        let faction = null;
        for (const fKey in LORE_DATA.factions) {
            const fac = LORE_DATA.factions[fKey];
            if (fac.leader === characterKey || fac.notable_people?.some(p => p.name === char.name)) {
                faction = { name: fac.name, logo: fac.logo };
                break;
            }
        }
        return { name: char.name, portrait: char.portrait, faction };
    }
    if (LORE_DATA.factions[characterKey]) {
        const fac = LORE_DATA.factions[characterKey];
        return { name: fac.name, portrait: fac.logo, faction: { name: fac.name, logo: fac.logo } };
    }
    for (const fKey in LORE_DATA.factions) {
        const fac = LORE_DATA.factions[fKey];
        const notablePerson = fac.notable_people?.find(p => p.name.toLowerCase().replace(/[\s-]/g, '_') === characterKey);
        if (notablePerson) {
            const portrait = `portraits/${characterKey}.png`;
            return { name: notablePerson.name, portrait: portrait, faction: { name: fac.name, logo: fac.logo } };
        }
    }
    const specialCases = {
        'wah_media_collective': { name: "WAH Media Collective", portrait: 'icon_newspaper.png', faction: { name: "The Daily Paradox", logo: 'icon_newspaper.png' } },
    };
    if (specialCases[characterKey]) return { ...specialCases[characterKey] };
    return { name: formatCharacterKey(characterKey), portrait: 'portraits/unknown.png', faction: null };
}

function renderFeedPost(post, options = {}) {
    const author = getCharacterData(post.characterKey);
    const factionHTML = author.faction ? `<span class="post-meta">${author.faction.name} · ${post.timestamp}</span>` : `<span class="post-meta">${post.timestamp}</span>`;
    const isNew = state.userState.seenPostIds && !state.userState.seenPostIds.includes(post.id);
    const newBadgeHTML = isNew ? `<div class="new-post-badge">NEW</div>` : '';

    const commentsHTML = (post.comments || []).map(comment => {
        const commenter = getCharacterData(comment.characterKey);
        return `<div class="comment"><a href="profile.html?user=${comment.characterKey}" class="profile-link"><img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp"></a><div class="comment-body"><a href="profile.html?user=${comment.characterKey}" class="profile-link comment-author">${commenter.name}</a><span class="comment-text">${comment.text}</span></div></div>`;
    }).join('');

    const imageHTML = post.image ? `<img src="${post.image}" alt="${post.image_alt}" class="post-image">` : '';
    
    // Logic for local video embeds
    let videoHTML = '';
    if (post.videoSrc) {
        videoHTML = `<div class="post-video-container"><video src="${post.videoSrc}" controls autoplay muted loop playsinline></video></div>`;
    }

    // --- NEW: LOGIC FOR AUDIO EMBEDS ---
    let audioHTML = '';
    if (post.audioSrc) {
        audioHTML = `
            <div class="post-audio-container">
                <audio controls src="${post.audioSrc}"></audio>
            </div>
        `;
    }
    // --- END OF NEW LOGIC ---

    const trendingBadgeHTML = options.showTrendingScore ? `<div class="trending-badge" title="Trending Score: ${options.trendingScore}">🔥</div>` : '';
    const loggedInUser = state.loggedInUser !== 'generic' ? getCharacterData(state.loggedInUser) : null;
    const replyInputHTML = loggedInUser ? `<div class="reply-input-container" style="display: none;"><img src="${loggedInUser.portrait}" alt="Your profile picture" class="reply-pfp"><input type="text" class="reply-input" placeholder="Write a comment..."></div>` : '';

    return `
        <div class="feed-post" id="post-${post.id}">
            ${newBadgeHTML}${trendingBadgeHTML}
            <div class="post-header">
                <a href="profile.html?user=${post.characterKey}" class="profile-link"><img src="${author.portrait}" alt="${author.name}" class="post-pfp"></a>
                <div class="post-author-info">
                    <a href="profile.html?user=${post.characterKey}" class="profile-link"><span class="post-author-name">${author.name}</span></a>
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

function renderCreatePostBox() {
    if (state.loggedInUser === 'generic') return '';
    const user = getCharacterData(state.loggedInUser);
    return `<div class="create-post-container"><div class="create-post-header"><img src="${user.portrait}" alt="Your profile picture" class="create-post-pfp"><button class="create-post-input">What's on your mind, ${user.name.split(' ')[0]}?</button></div></div>`;
}

// THIS IS THE CORRECTED FUNCTION
function renderChaosAgentWidget() {
    const characterKey = 'archie';
    // Access the data through the imported CHARACTER_MECHANICS object
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
    if (!feedContainer) return;
    const sortedPosts = [...WAHBOOK_POSTS].sort((a, b) => (b.order || 0) - (a.order || 0));
    const postsHTML = renderCreatePostBox() + sortedPosts.map(p => renderFeedPost(p)).join('');
    feedContainer.innerHTML = `<div id="feed-content-layout"><div class="wahbook-feed-container">${postsHTML}</div><aside id="feed-sidebar">${renderChaosAgentWidget()}</aside></div>`;
}

function renderEvent(rumor) {
    // Dynamically build the attendees list from the rumor's 'targets'
    const allTargets = new Set();
    (rumor.targets || []).forEach(t => {
        if (t === 'party') { state.party.forEach(p => allTargets.add(p)); } 
        else { allTargets.add(t); }
    });

    const attendeesHTML = Array.from(allTargets).map(targetKey => {
        const character = getCharacterData(targetKey);
        // We don't have justifications here, but we can add them to the rumor data if needed.
        return `
            <div class="attendee-card">
                <img src="${character.portrait}" alt="${character.name}" class="attendee-pfp">
                <div class="attendee-info">
                    <span class="attendee-name">${character.name}</span>
                </div>
            </div>
        `;
    }).join('');

    // Dynamically find all posts related to this event via rumorId
    const allPostsForEvent = WAHBOOK_POSTS.filter(p => p.rumorId === rumor.id);
    const newsPosts = allPostsForEvent.filter(p => p.characterKey === 'wah_media_collective');
    const regularPosts = allPostsForEvent.filter(p => p.characterKey !== 'wah_media_collective');

    const newsHTML = newsPosts.length > 0 ? newsPosts.map(p => renderFeedPost(p)).join('') : '';
    const postsHTML = regularPosts.length > 0 ? regularPosts.map(p => renderFeedPost(p)).join('') : '';
    
    const attendeesSectionHTML = attendeesHTML ? `<div class="attendees-list-container"><h4>Key Figures Involved</h4><div class="attendees-list">${attendeesHTML}</div></div>` : '';
    const hasCollapsibleContent = attendeesSectionHTML || newsHTML || postsHTML;

    return `
        <div class="event-container" data-event-id="${rumor.id}">
            <div class="event-main-header">
                <h3>${rumor.title || 'Untitled Event'}</h3>
                <p>${rumor.description || 'No description available.'}</p>
                ${hasCollapsibleContent ? '<span class="event-toggle-icon">▼</span>' : ''}
            </div>
            ${hasCollapsibleContent ? `
            <div class="event-collapsible-body">
                <div class="event-details-grid">
                    ${attendeesSectionHTML}
                    <div class="related-content-container">
                        ${newsHTML ? `<div class="related-news"><h4>News Coverage</h4>${newsHTML}</div>` : ''}
                        ${postsHTML ? `<div class="related-posts"><h4>Public Reactions</h4>${postsHTML}</div>` : ''}
                    </div>
                </div>
            </div>` : ''}
        </div>
    `;
}



function renderEventsFeed() {
    const container = document.getElementById('events-feed-container');
    if (!container) return;

    // The new source of truth: filter rumors that are marked as events.
    const eventsToRender = LORE_DATA.rumors.filter(rumor => rumor.isEvent);
    
    // Sort by date object if it exists
    eventsToRender.sort((a, b) => {
        const dateA = a.date ? new Date(a.date.year, a.date.monthIndex, a.date.day) : 0;
        const dateB = b.date ? new Date(b.date.year, b.date.monthIndex, b.date.day) : 0;
        return (currentEventSort === 'newest') ? dateB - dateA : dateA - dateB;
    });

    container.innerHTML = eventsToRender.map(renderEvent).join('');
}



function openDossierModal(rumorId) {
    const rumor = LORE_DATA.rumors.find(r => r.id === rumorId);
    if (!rumor) return;
    const intelPosts = WAHBOOK_POSTS.filter(p => p.rumorId === rumorId).sort((a, b) => (b.order || 0) - (a.order || 0));
    const chatterHTML = intelPosts.length > 0 ? intelPosts.map(post => renderFeedPost(post)).join('') : `<p class="page-subtitle">No network chatter detected for this rumor.</p>`;
    const allTargets = new Set();
    rumor.targets.forEach(t => {
        if (t === 'party') { state.party.forEach(p => allTargets.add(p)); } 
        else if (LORE_DATA.characters[t] || LORE_DATA.auxiliary_party[t] || LORE_DATA.factions[t]) { allTargets.add(t); }
    });
    const affectedPartiesHTML = Array.from(allTargets).map(targetKey => {
        const targetData = getCharacterData(targetKey);
        if (targetKey === 'liberated_toads') {
            targetData.name = "The Liberated Toads";
            targetData.portrait = LORE_DATA.factions.liberated_toads.logo;
        }
        if (!targetData.name) return '';
        return `<div class="affected-party-chip"><img src="${targetData.portrait}" alt="${targetData.name}" title="${targetData.name}"><span>${targetData.name}</span></div>`;
    }).join('');
    const repChangesHTML = Object.entries(rumor.effects).map(([factionKey, repChange]) => {
        const factionData = LORE_DATA.factions[factionKey];
        if (!factionData) return '';
        const repClass = repChange > 0 ? 'positive' : 'negative';
        const sign = repChange > 0 ? '+' : '';
        return `<li class="rep-change-item"><div class="faction-info"><img src="${factionData.logo}" alt="${factionData.name}"><span>${factionData.name}</span></div><span class="rep-change-value ${repClass}">${sign}${repChange} Rep</span></li>`;
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
    const followedPosts = WAHBOOK_POSTS.filter(p => state.userState.following.includes(p.characterKey)).sort((a, b) => (b.order || 0) - (a.order || 0));
    container.innerHTML = followedPosts.length > 0 ? followedPosts.map(p => renderFeedPost(p)).join('') : `<p class="page-subtitle">The accounts you follow haven't posted anything yet.</p>`;
}

function renderTrendingFeed() {
    const container = document.getElementById('trending-feed-container');
    if (!container) return;
    const recentPosts = WAHBOOK_POSTS.filter(p => !p.timestamp.includes('month') && !p.timestamp.includes('year'));
    const scoredPosts = recentPosts.map(post => ({ ...post, trendingScore: (post.likes || 0) + ((post.comments?.length || 0) * 2) })).sort((a, b) => b.trendingScore - a.trendingScore).slice(0, 15);
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
    const filteredPosts = (activeGroupFilter === 'all') ? groupPosts : groupPosts.filter(p => p.groupId === activeGroupFilter);
    filteredPosts.sort((a, b) => (b.order || 0) - (a.order || 0));
    feedContainer.innerHTML = filteredPosts.length > 0 ? filteredPosts.map(p => renderFeedPost(p)).join('') : `<p class="page-subtitle">No posts found for this group.</p>`;
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
    const highestOrder = Math.max(...WAHBOOK_POSTS.map(p => p.order || 0));
    const newPost = { id: `player_post_${Date.now()}`, order: highestOrder + 1, characterKey: state.loggedInUser, timestamp: 'Just now', content: text, likes: 0, comments: [] };
    WAHBOOK_POSTS.unshift(newPost);
    const feed = feedContainer.querySelector('.wahbook-feed-container');
    const createPostBox = feed.querySelector('.create-post-container');
    feed.insertAdjacentHTML('afterbegin', renderFeedPost(newPost));
    if (createPostBox) feed.prepend(createPostBox);
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
        postElement.querySelector('.post-comments')?.insertAdjacentHTML('beforeend', `<div class="comment"><a href="profile.html?user=${newComment.characterKey}" class="profile-link"><img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp"></a><div class="comment-body"><a href="profile.html?user=${newComment.characterKey}" class="profile-link comment-author">${commenter.name}</a><span class="comment-text">${newComment.text}</span></div></div>`);
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
        const intelRumorsContainer = document.getElementById('intel-rumors-container');
        if (tabName === 'intel' && intelRumorsContainer && intelRumorsContainer.childElementCount === 0) {
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
        const dossierCard = e.target.closest('.intel-card');
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
    if (embedPostId) { /* ... embed logic is correct ... */ return; }
    if (!feedContainer) return;
    if (state.loggedInUser === 'archie' && !state.userState.waluigiWarningShown) {
        setTimeout(() => {
            showWaluigiWarning();
            state.userState.waluigiWarningShown = true;
            saveState();
        }, 1500);
    }
    renderMainFeed();
    renderEventsFeed();
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