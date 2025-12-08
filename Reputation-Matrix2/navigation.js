import { state, loadState } from './state.js';
import { WAHBOOK_POSTS } from './assembly-data.js';

// 🗑️ REMOVED: GITHUB_REPO and REPO_FOLDER (No longer needed!)

function checkForNewPosts() {
    loadState();
    const notificationDot = document.getElementById('wahbook-notification');
    if (!notificationDot) return;

    if (state.loggedInUser === 'generic' || !state.userState.following || state.userState.following.length === 0) {
        notificationDot.style.display = 'none';
        return;
    }

    const followedPosts = WAHBOOK_POSTS.filter(p => state.userState.following.includes(p.characterKey));
    const seenIds = new Set(state.userState.seenPostIds);

    const hasNewPosts = followedPosts.some(p => !seenIds.has(p.id));

    if (hasNewPosts) {
        notificationDot.style.display = 'inline-block';
    } else {
        notificationDot.style.display = 'none';
    }
}

// ✅ NEW FUNCTION: Fetches the local JSON file
async function getPageUpdates() {
    try {
        // CHANGED: Removed "Reputation-Matrix2/" from the path
        // Since index.html and the json file are in the same folder
        const response = await fetch(`./site-updates.json?t=${Date.now()}`);
        
        if (!response.ok) {
            console.warn('⚠️ Could not find site-updates.json');
            return {};
        }
        
        const updates = await response.json();
        console.log('📊 Loaded site updates manifest:', updates);
        return updates;
    } catch (error) {
        console.error('❌ Error loading updates:', error);
        return {};
    }
}
function markPageAsVisited() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const lastVisits = JSON.parse(localStorage.getItem('pageLastVisits') || '{}');
    const now = new Date().toISOString();
    lastVisits[currentPage] = now;
    localStorage.setItem('pageLastVisits', JSON.stringify(lastVisits));
}
async function markUpdatedPages(sidebar) {
    const links = sidebar.querySelectorAll('a.nav-button');
    const pageUpdates = await getPageUpdates();

    // 1. Get all dates from the file
    const allDates = Object.values(pageUpdates).map(d => new Date(d).getTime());

    // 2. Find the absolute latest update time across the whole site
    if (allDates.length === 0) return;
    const latestUpdateTimestamp = Math.max(...allDates);

    // 3. Set the "Recent" window (5 hours in milliseconds)
    // 5 hours * 60 mins * 60 secs * 1000 ms
    const RECENT_WINDOW = 5 * 60 * 60 * 1000; 
    const cutoffTime = latestUpdateTimestamp - RECENT_WINDOW;

    let updatedCount = 0;

    links.forEach(link => {
        const href = link.getAttribute('href');
        const pageUpdateTimeString = pageUpdates[href];

        if (pageUpdateTimeString) {
            const pageTime = new Date(pageUpdateTimeString).getTime();

            // 4. Compare: Is this page's update time newer than the cutoff?
            if (pageTime > cutoffTime) {
                if (!link.querySelector('.nav-badge.updated')) {
                    const badge = document.createElement('span');
                    badge.className = 'nav-badge updated pulse';
                    badge.textContent = 'NEW'; // Changed text to NEW since it's fresh
                    badge.style.marginLeft = 'auto';
                    badge.style.backgroundColor = 'var(--accent-color)';
                    link.appendChild(badge);
                    updatedCount++;
                }
            }
        }
    });

    console.log(`🏷️ Found ${updatedCount} pages updated in the last 5 hours relative to the latest post.`);
}

async function initializeSidebar() {
    console.log('🚀 Initializing sidebar...');
    
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        console.error('❌ Sidebar container not found.');
        return;
    }

    try {
        const navScriptElement = document.querySelector('script[src*="navigation.js"]');
        if (!navScriptElement) throw new Error("Could not find navigation.js script tag");
        
        const scriptSrc = navScriptElement.src;
        const navHtmlUrl = new URL('navigation.html', scriptSrc);

        const response = await fetch(navHtmlUrl.href);
        if (!response.ok) throw new Error(`Failed to fetch navigation`);
        
        sidebar.innerHTML = await response.text();

        const subtitle = document.title.split('|')[1]?.trim() || 'Directory';
        const sidebarSubtitle = document.getElementById('sidebar-subtitle');
        if (sidebarSubtitle) sidebarSubtitle.textContent = subtitle;

        const currentPage = window.location.pathname.split('/').pop();
        
        const mapPages = ['maps.html', 'mushroom-kingdom-maps.html', 'midlands-maps.html', 'internet-maps.html', 'middle-earth-maps.html', 'warhammer-maps.html', 'kivotos-maps.html', 'doughnut-hole-maps.html'];
        const navLinks = sidebar.querySelectorAll('.nav-button');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) link.style.display = 'none';
            if (mapPages.includes(currentPage) && linkHref === 'maps.html') link.style.display = 'none';
        });

        markPageAsVisited();
        checkForNewPosts();
        await markUpdatedPages(sidebar);

    } catch (error) {
        console.error('❌ Failed to load sidebar navigation:', error);
        sidebar.innerHTML = '<p style="color: var(--negative-color);">Error: Could not load navigation.</p>';
    }
}

initializeSidebar();