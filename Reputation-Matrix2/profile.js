/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Profile Page Handler - Vigilance Terminal
 */

import { LORE_DATA } from './lore.js';
import { CURRENT_GAME_DATE } from './calendar-data.js';

// Try to import state, but don't fail if it doesn't work
let state = { userState: { following: [] }, party: [], debugMode: false };
try {
    const stateModule = await import('./state.js');
    if (stateModule.state) state = stateModule.state;
    if (stateModule.loadState) stateModule.loadState();
} catch (e) {
    console.warn('[Profile] State module not available:', e.message);
}

let WAHBOOK_POSTS = [];

// ============================================================================
// FALLBACK ASSETS - Always available, no network needed
// ============================================================================

const FALLBACK_PORTRAIT = 'data:image/svg+xml;base64,' + btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
  <rect width="150" height="150" fill="#1a1a2e"/>
  <circle cx="75" cy="55" r="30" fill="#2d2d44"/>
  <ellipse cx="75" cy="130" rx="45" ry="40" fill="#2d2d44"/>
  <text x="75" y="145" text-anchor="middle" fill="#666" font-size="10" font-family="sans-serif">No Image</text>
</svg>
`);

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function formatCharacterKey(key) {
    if (!key) return 'Unknown';
    return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function isContentVisible(dateObj) {
    if (!dateObj) return true;
    if (!CURRENT_GAME_DATE) return true;
    
    let isFuture = false;
    if (dateObj.year > CURRENT_GAME_DATE.year) isFuture = true;
    else if (dateObj.year === CURRENT_GAME_DATE.year) {
        if (dateObj.monthIndex > CURRENT_GAME_DATE.monthIndex) isFuture = true;
        else if (dateObj.monthIndex === CURRENT_GAME_DATE.monthIndex) {
            if (dateObj.day > CURRENT_GAME_DATE.day) isFuture = true;
        }
    }
    if (isFuture) return window.debugMode === true || state?.debugMode === true;
    return true;
}

function isFutureEvent(dateObj) {
    if (!dateObj || !CURRENT_GAME_DATE) return false;
    if (dateObj.year > CURRENT_GAME_DATE.year) return true;
    if (dateObj.year === CURRENT_GAME_DATE.year && dateObj.monthIndex > CURRENT_GAME_DATE.monthIndex) return true;
    if (dateObj.year === CURRENT_GAME_DATE.year && dateObj.monthIndex === CURRENT_GAME_DATE.monthIndex && dateObj.day > CURRENT_GAME_DATE.day) return true;
    return false;
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

function getDynamicTimestamp(dateObj) {
    if (!dateObj) return 'Unknown';
    try {
        const { getDynamicTimestamp: getTs } = import('./calendar-data.js');
        return getTs(dateObj);
    } catch (e) {
        // Fallback timestamp
        return `${dateObj.day}/${dateObj.monthIndex + 1}/${dateObj.year}`;
    }
}

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
function findPortraitPath(characterKey) {
    // Base path
    const basePath = `portraits/${characterKey}.png`;
    
    // We can't synchronously check if images exist, so we'll just return the expected path
    // The onerror handler on the img tag will handle missing images
    return basePath;
}
function getPostsByCharacter(characterKey) {
    if (!Array.isArray(WAHBOOK_POSTS)) return [];
    return WAHBOOK_POSTS
        .filter(post => post?.characterKey === characterKey && isContentVisible(post.date))
        .sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
}

function getPostsWithCharacterComments(characterKey) {
    if (!Array.isArray(WAHBOOK_POSTS)) return [];
    return WAHBOOK_POSTS
        .filter(post => {
            if (!post || !isContentVisible(post.date)) return false;
            return post.comments?.some(c => c?.characterKey === characterKey);
        })
        .sort((a, b) => getPostTimeValue(b) - getPostTimeValue(a));
}

function getRelatedRumors(characterKey) {
    if (!LORE_DATA?.rumors) return [];
    return LORE_DATA.rumors.filter(rumor => {
        if (!isContentVisible(rumor.date)) return false;
        const isTarget = rumor.targets?.includes(characterKey) || rumor.targets?.includes('party');
        const isInstigator = rumor.instigator === characterKey;
        return isTarget || isInstigator;
    });
}

function getTotalLikes(posts) {
    return posts.reduce((sum, post) => sum + (post?.likes || 0), 0);
}

function countMentions(characterKey) {
    if (!Array.isArray(WAHBOOK_POSTS)) return 0;
    let count = 0;
    const searchName = characterKey.replace(/_/g, ' ').toLowerCase();
    WAHBOOK_POSTS.forEach(post => {
        if (!isContentVisible(post?.date)) return;
        if (post?.content?.toLowerCase().includes(searchName)) count++;
        post?.comments?.forEach(c => {
            if (c?.text?.toLowerCase().includes(searchName)) count++;
        });
    });
    return count;
}

function countComments(characterKey) {
    if (!Array.isArray(WAHBOOK_POSTS)) return 0;
    let count = 0;
    WAHBOOK_POSTS.forEach(post => {
        if (!isContentVisible(post?.date)) return;
        post?.comments?.forEach(c => {
            if (c?.characterKey === characterKey) count++;
        });
    });
    return count;
}

// ============================================================================
// GLOBAL ERROR HANDLERS
// ============================================================================

window.handleImageError = function(img) {
    if (img.dataset.errorHandled) return;
    img.dataset.errorHandled = 'true';
    img.src = FALLBACK_PORTRAIT;
    img.style.border = '2px dashed #ff6b35';
};

window.handleMainPortraitError = function(img, characterKey) {
    if (img.dataset.errorHandled) return;
    img.dataset.errorHandled = 'true';
    console.warn(`[Profile] Portrait missing for: ${characterKey}`);
    img.src = FALLBACK_PORTRAIT;
    img.style.border = '3px dashed #ff6b35';
};

// ============================================================================
// RENDER FUNCTIONS
// ============================================================================

function getSimpleTimestamp(dateObj) {
    if (!dateObj) return 'Unknown';
    return `Day ${dateObj.day}, Month ${dateObj.monthIndex + 1}, ${dateObj.year}`;
}

function renderPost(post) {
    if (!post) return '';
    const author = getCharacterData(post.characterKey);
    const timeString = post.timestamp || getSimpleTimestamp(post.date);

    const isHiddenFuture = isFutureEvent(post.date);
    const debugBadge = isHiddenFuture ? `<div class="debug-future-badge">⚠️ FUTURE POST</div>` : '';
    const debugStyle = isHiddenFuture ? 'opacity: 0.7; border: 2px dashed #ff4444;' : '';

    const commentsHTML = (post.comments || []).slice(0, 3).map(c => {
        if (!c) return '';
        const commenter = getCharacterData(c.characterKey);
        return `
            <div class="comment">
                <a href="profile.html?user=${encodeURIComponent(c.characterKey || 'unknown')}">
                    <img src="${commenter.portrait}" alt="${commenter.name}" class="comment-pfp" onerror="handleImageError(this)">
                </a>
                <div class="comment-body">
                    <a href="profile.html?user=${encodeURIComponent(c.characterKey || 'unknown')}" class="comment-author">${commenter.name}</a>
                    <span class="comment-text">${c.text || ''}</span>
                </div>
            </div>`;
    }).join('');

    return `
        <article class="feed-post" style="${debugStyle}">
            ${debugBadge}
            <div class="post-header">
                <a href="profile.html?user=${encodeURIComponent(post.characterKey || 'unknown')}">
                    <img src="${author.portrait}" alt="${author.name}" class="post-pfp" onerror="handleImageError(this)">
                </a>
                <div class="post-author-info">
                    <a href="profile.html?user=${encodeURIComponent(post.characterKey || 'unknown')}">
                        <span class="post-author-name">${author.name}</span>
                    </a>
                    <span class="post-meta">${author.faction?.name ? author.faction.name + ' · ' : ''}${timeString}</span>
                </div>
            </div>
            <p class="post-content">${post.content || ''}</p>
            ${post.image ? `<img src="${post.image}" alt="${post.image_alt || ''}" class="post-image" onerror="this.style.display='none'">` : ''}
            <div class="post-interactions">
                <span class="interaction-btn">👍 ${post.likes || 0}</span>
                <span class="interaction-btn">💬 ${(post.comments || []).length}</span>
            </div>
            ${commentsHTML ? `<div class="post-comments">${commentsHTML}</div>` : ''}
        </article>`;
}

function renderIntelItem(rumor) {
    const type = rumor.isEvent ? 'event' : 'rumor';
    return `
        <div class="intel-item">
            <div class="intel-header">
                <span class="intel-badge ${type}">${type.toUpperCase()}</span>
                <span class="intel-title">${rumor.title}</span>
            </div>
            <p class="intel-description">${rumor.description}</p>
            <div class="intel-meta">
                <span>📅 ${rumor.time_ago || 'Recent'}</span>
                ${rumor.arc ? `<span>📂 ${rumor.arc}</span>` : ''}
            </div>
        </div>`;
}

// ============================================================================
// MAIN RENDER FUNCTION
// ============================================================================

function showContent() {
    const loadingEl = document.getElementById('profile-loading');
    const contentEl = document.getElementById('profile-content');
    if (loadingEl) loadingEl.style.display = 'none';
    if (contentEl) contentEl.style.display = 'block';
}

function showError(message = 'Profile could not be loaded') {
    const loadingEl = document.getElementById('profile-loading');
    const errorEl = document.getElementById('profile-error');
    const contentEl = document.getElementById('profile-content');
    
    if (loadingEl) loadingEl.style.display = 'none';
    if (contentEl) contentEl.style.display = 'none';
    if (errorEl) {
        errorEl.style.display = 'flex';
        errorEl.innerHTML = `
            <div class="error-icon">⚠️</div>
            <h2>Error</h2>
            <p>${message}</p>
            <a href="assembly.html" class="btn-primary" style="margin-top: 20px; padding: 12px 24px; background: var(--accent-color, #6c5ce7); color: white; text-decoration: none; border-radius: 8px;">Back to WAHbook</a>
        `;
    }
}

function renderProfile(characterKey) {
    try {
        const charData = getCharacterData(characterKey);
        const posts = getPostsByCharacter(characterKey);
        const postsWithComments = getPostsWithCharacterComments(characterKey);
        const commentCount = countComments(characterKey);
        const totalLikes = getTotalLikes(posts);
        const mentionCount = countMentions(characterKey);
        const relatedRumors = getRelatedRumors(characterKey);
        const mediaPosts = posts.filter(p => p.image || p.videoSrc);

        // Always show content
        showContent();

        // Update header elements safely
        const pictureEl = document.getElementById('profile-picture');
        if (pictureEl) {
            pictureEl.src = charData.portrait;
            pictureEl.alt = charData.name;
            pictureEl.onerror = function() { handleMainPortraitError(this, characterKey); };
        }

        const nameEl = document.getElementById('profile-name');
        if (nameEl) nameEl.textContent = charData.name;

        const handleEl = document.getElementById('profile-handle');
        if (handleEl) handleEl.textContent = `@${characterKey}`;

        const roleEl = document.getElementById('profile-role');
        if (roleEl) roleEl.textContent = charData.role || '';

        // Badges
        const badgesEl = document.getElementById('profile-badges');
        if (badgesEl) {
            let badges = '';
            if (!charData.isDefined) badges += `<span class="profile-badge undefined">⚠️ Undefined</span>`;
            if (state?.party?.includes(characterKey)) badges += `<span class="profile-badge vip">⭐ Party</span>`;
            badgesEl.innerHTML = badges;
        }

        // Faction badge
        const factionEl = document.getElementById('profile-faction-badge');
        if (factionEl) {
            if (charData.faction) {
                factionEl.innerHTML = `
                    <img src="${charData.faction.logo || FALLBACK_PORTRAIT}" alt="${charData.faction.name}" onerror="handleImageError(this)">
                    <span>${charData.faction.name}</span>`;
                factionEl.style.display = 'inline-flex';
            } else {
                factionEl.style.display = 'none';
            }
        }

        // Stats - update safely
        const updateStat = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        };
        updateStat('stat-posts', posts.length);
        updateStat('stat-comments', commentCount);
        updateStat('stat-likes', totalLikes);
        updateStat('stat-mentions', mentionCount);
        updateStat('tab-count-posts', posts.length);
        updateStat('tab-count-comments', postsWithComments.length);
        updateStat('tab-count-media', mediaPosts.length);

        // Bio
        const bioEl = document.getElementById('profile-bio');
        if (bioEl) bioEl.textContent = charData.bio || 'No dossier information available for this individual.';

        // Affiliations
        const affiliationsEl = document.getElementById('profile-affiliations');
        const noConnectionsEl = document.getElementById('no-connections');
        if (affiliationsEl) {
            if (charData.faction) {
                affiliationsEl.innerHTML = `
                    <li class="affiliation-item">
                        <img src="${charData.faction.logo || FALLBACK_PORTRAIT}" alt="${charData.faction.name}" onerror="handleImageError(this)">
                        <span>${charData.faction.name}</span>
                        ${charData.role ? `<span class="affiliation-role">${charData.role}</span>` : ''}
                    </li>`;
                if (noConnectionsEl) noConnectionsEl.style.display = 'none';
            } else {
                affiliationsEl.innerHTML = '<li class="affiliation-item" style="color: var(--text-secondary);">No known affiliations</li>';
            }
        }

        // Connections
        const connectionsEl = document.getElementById('profile-connections');
        if (connectionsEl) {
            const connections = new Map();
            posts.forEach(p => p.comments?.forEach(c => {
                if (c?.characterKey && c.characterKey !== characterKey) {
                    connections.set(c.characterKey, (connections.get(c.characterKey) || 0) + 1);
                }
            }));
            postsWithComments.forEach(p => {
                if (p?.characterKey && p.characterKey !== characterKey) {
                    connections.set(p.characterKey, (connections.get(p.characterKey) || 0) + 1);
                }
            });

            const sorted = [...connections.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
            if (sorted.length > 0) {
                connectionsEl.innerHTML = sorted.map(([key]) => {
                    const conn = getCharacterData(key);
                    return `<a href="profile.html?user=${encodeURIComponent(key)}" class="connection-item" title="${conn.name}">
                        <img src="${conn.portrait}" alt="${conn.name}" onerror="handleImageError(this)">
                    </a>`;
                }).join('');
                if (noConnectionsEl) noConnectionsEl.style.display = 'none';
            } else {
                connectionsEl.innerHTML = '';
                if (noConnectionsEl) noConnectionsEl.style.display = 'block';
            }
        }

        // Activity bars
        const activityBars = document.querySelectorAll('.activity-bar');
        activityBars.forEach((bar, i) => {
            const base = Math.min(90, 20 + posts.length * 5 + Math.random() * 30);
            bar.style.setProperty('--height', `${base}%`);
        });

        // Posts tab
        const feedEl = document.getElementById('profile-feed-container');
        if (feedEl) {
            feedEl.innerHTML = posts.length > 0
                ? posts.map(renderPost).join('')
                : `<div class="no-content-message"><span class="empty-icon">📭</span><h3>No Posts Yet</h3><p>${charData.name} hasn't posted anything visible.</p></div>`;
        }

        // Comments tab
        const commentsEl = document.getElementById('profile-comments-container');
        if (commentsEl) {
            commentsEl.innerHTML = postsWithComments.length > 0
                ? `<p style="color: var(--text-secondary); margin-bottom: 16px;">${charData.name} commented on these posts:</p>` + postsWithComments.slice(0, 10).map(renderPost).join('')
                : `<div class="no-content-message"><span class="empty-icon">💬</span><h3>No Comments</h3><p>No visible comments from ${charData.name}.</p></div>`;
        }

        // Media tab
        const mediaEl = document.getElementById('profile-media-container');
        if (mediaEl) {
            mediaEl.innerHTML = mediaPosts.length > 0
                ? `<div class="media-grid">${mediaPosts.map(p => `<div class="media-item"><img src="${p.image || ''}" alt="Media" onerror="this.parentElement.style.display='none'"></div>`).join('')}</div>`
                : `<div class="no-content-message"><span class="empty-icon">🖼️</span><h3>No Media</h3><p>No images or videos shared by ${charData.name}.</p></div>`;
        }

        // Intel tab
        const intelEl = document.getElementById('profile-intel-container');
        if (intelEl) {
            intelEl.innerHTML = relatedRumors.length > 0
                ? relatedRumors.map(renderIntelItem).join('')
                : `<div class="no-content-message"><span class="empty-icon">🔍</span><h3>No Intel</h3><p>No rumors or events associated with ${charData.name}.</p></div>`;
        }

        // Follow button
        // Follow button
    const followBtn = document.getElementById('follow-btn');
    if (followBtn) {
        const updateFollowButtonState = () => {
            const isFollowing = state?.userState?.following?.includes(characterKey);
            followBtn.classList.toggle('following', isFollowing);
            
            // Explicitly set content based on state
            if (isFollowing) {
                followBtn.innerHTML = `<span class="follow-icon">✓</span> <span class="follow-text"></span>`;
            } else {
                followBtn.innerHTML = `<span class="follow-icon">+</span> <span class="follow-text"></span>`;
            }
        };

        // Set initial state
        updateFollowButtonState();

        // Remove old listeners to prevent duplicates (cloning trick)
        const newBtn = followBtn.cloneNode(true);
        followBtn.parentNode.replaceChild(newBtn, followBtn);

        newBtn.onclick = () => {
            if (!state.userState) state.userState = { following: [] };
            if (!state.userState.following) state.userState.following = [];
            
            const idx = state.userState.following.indexOf(characterKey);
            if (idx > -1) {
                state.userState.following.splice(idx, 1);
            } else {
                state.userState.following.push(characterKey);
            }
            
            try { 
                localStorage.setItem('vigilanceTerminalState', JSON.stringify(state)); 
                // Update UI immediately
                const isFollowing = state.userState.following.includes(characterKey);
                newBtn.classList.toggle('following', isFollowing);
                if (isFollowing) {
                    newBtn.innerHTML = `<span class="follow-icon">✓</span> <span class="follow-text"></span>`;
                } else {
                    newBtn.innerHTML = `<span class="follow-icon">+</span> <span class="follow-text">Follow</span>`;
                }
            } catch (e) { console.error(e); }
        };
    }

        // Setup tabs
        document.querySelectorAll('.profile-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                const target = tab.dataset.tab;
                const content = document.querySelector(`.profile-tab-content[data-content="${target}"]`);
                if (content) content.classList.add('active');
            });
        });

        // Show undefined warning if needed
        if (!charData.isDefined) {
            const headerContainer = document.getElementById('profile-header-container');
            if (headerContainer && !document.querySelector('.profile-undefined-warning')) {
                headerContainer.insertAdjacentHTML('afterend', `
                    <div class="profile-undefined-warning">
                        <span class="warning-icon">⚠️</span>
                        <div>
                            <h4>Undefined Character</h4>
                            <p>This character is not in the database. Their posts are shown if available.</p>
                        </div>
                    </div>`);
            }
        }

        console.log('[Profile] Rendered successfully:', characterKey);

    } catch (error) {
        console.error('[Profile] Render error:', error);
        // Still show content even on error
        showContent();
    }
}

// ============================================================================
// DATA LOADING - Won't block page rendering
// ============================================================================

async function loadData() {
    try {
        const data = await import('./assembly-data.js');
        WAHBOOK_POSTS = data.WAHBOOK_POSTS || [];
        console.log('[Profile] Loaded posts:', WAHBOOK_POSTS.length);
    } catch (e) {
        console.warn('[Profile] Could not load assembly-data:', e.message);
        WAHBOOK_POSTS = [];
    }

    try {
        const events = await import('./assembly-events-data.js');
        if (events.loadEventPosts) {
            const eventPosts = await events.loadEventPosts();
            if (Array.isArray(eventPosts)) {
                WAHBOOK_POSTS.push(...eventPosts);
                console.log('[Profile] Added event posts, total:', WAHBOOK_POSTS.length);
            }
        }
    } catch (e) {
        console.log('[Profile] No event posts module (this is OK)');
    }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

async function init() {
    console.log('[Profile] Initializing...');

    // Set debug mode
    try {
        window.debugMode = localStorage.getItem('vigilanceDebugMode') === 'true';
    } catch (e) {
        window.debugMode = false;
    }

    // Get character key from URL FIRST
    const params = new URLSearchParams(window.location.search);
    const characterKey = params.get('user');

    // If no user specified, show error immediately
    if (!characterKey) {
        const loadingEl = document.getElementById('profile-loading');
        const errorEl = document.getElementById('profile-error');
        if (loadingEl) loadingEl.style.display = 'none';
        if (errorEl) {
            errorEl.style.display = 'flex';
            errorEl.innerHTML = `
                <div class="error-icon">🔍</div>
                <h2>No User Specified</h2>
                <p>Add <code style="background: #333; padding: 4px 8px; border-radius: 4px;">?user=character_key</code> to the URL</p>
                <a href="assembly.html" class="btn-primary" style="margin-top: 20px; padding: 12px 24px; background: var(--accent-color, #6c5ce7); color: white; text-decoration: none; border-radius: 8px;">Back to WAHbook</a>
            `;
        }
        return;
    }

    // Update page title immediately
    document.title = `${formatCharacterKey(characterKey)} - WAHbook Profile`;

    // Set a timeout to show content even if data loading takes too long
    const loadingTimeout = setTimeout(() => {
        console.warn('[Profile] Loading timeout - showing content anyway');
        renderProfile(characterKey);
    }, 3000); // 3 second timeout

    // Try to load data
    await loadData();

    // Clear timeout since we loaded successfully
    clearTimeout(loadingTimeout);

    // Render profile
    renderProfile(characterKey);

    console.log('[Profile] Initialization complete');
}

// Run initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}