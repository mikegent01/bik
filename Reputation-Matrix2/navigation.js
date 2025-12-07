import { state, loadState } from './state.js';
import { WAHBOOK_POSTS } from './assembly-data.js';

// ✅ FIXED: Correct Repo and Folder path
const GITHUB_REPO = 'mikegent01/bik'; 
const REPO_FOLDER = 'Reputation-Matrix2/'; 

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

// New function: Fetches your local JSON file
async function getPageUpdates() {
    try {
        // Fetch the file we generated with the node script
        // We add a timestamp query (?t=...) to prevent the browser from caching the JSON file itself
        const response = await fetch(`site-updates.json?t=${Date.now()}`);
        
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

async function markUpdatedPages(sidebar) {
    const links = sidebar.querySelectorAll('a.nav-button');
    
    // 1. Get the list of file dates
    const pageUpdates = await getPageUpdates();
    
    // 2. Get the user's history
    const lastVisits = JSON.parse(localStorage.getItem('pageLastVisits') || '{}');
    
    let updatedCount = 0;

    links.forEach(link => {
        const href = link.getAttribute('href'); // e.g., "maps.html"
        const updateTimeStr = pageUpdates[href]; // Check the JSON
        const lastVisitStr = lastVisits[href];

        if (updateTimeStr) {
            const updateDate = new Date(updateTimeStr);
            const visitDate = lastVisitStr ? new Date(lastVisitStr) : null;
            
            // Logic: Is New if (Never Visited) OR (Updated After Visit)
            const isNew = !lastVisitStr || updateDate > visitDate;

            if (isNew) {
                // Check if badge already exists to avoid duplicates
                if (!link.querySelector('.nav-badge.updated')) {
                    const badge = document.createElement('span');
                    badge.className = 'nav-badge updated pulse';
                    badge.textContent = 'UPDATED';
                    badge.style.marginLeft = 'auto';
                    badge.style.backgroundColor = 'var(--accent-color)';
                    link.appendChild(badge);
                    updatedCount++;
                }
            }
        }
    });
    console.log(`🏷️ Added ${updatedCount} "UPDATED" badges`);
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
    const pageUpdates = await getPageUpdatesFromGitHub();
    const lastVisits = JSON.parse(localStorage.getItem('pageLastVisits') || '{}');
    
    let updatedCount = 0;

    links.forEach(link => {
        const href = link.getAttribute('href');
        const pageUpdateTime = pageUpdates[href];
        const lastVisit = lastVisits[href];

        if (pageUpdateTime) {
            const updateDate = new Date(pageUpdateTime);
            const visitDate = lastVisit ? new Date(lastVisit) : null;
            
            // Show badge if never visited OR updated after last visit
            const isNew = !lastVisit || updateDate > visitDate;

            if (isNew) {
                if (!link.querySelector('.nav-badge.updated')) {
                    const badge = document.createElement('span');
                    badge.className = 'nav-badge updated pulse';
                    badge.textContent = 'UPDATED';
                    badge.style.marginLeft = 'auto';
                    badge.style.backgroundColor = 'var(--accent-color)';
                    link.appendChild(badge);
                    updatedCount++;
                }
            }
        }
    });
    console.log(`🏷️ Added ${updatedCount} "UPDATED" badges`);
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