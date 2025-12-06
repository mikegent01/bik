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

async function getPageUpdatesFromGitHub() {
    console.log('🔍 Fetching page updates from GitHub...');
    console.log(`📦 Repository: ${GITHUB_REPO}`);
    
    try {
        const cached = localStorage.getItem('githubPageUpdates');
        const cacheTime = localStorage.getItem('githubPageUpdatesTime');
        
        // ✅ CHANGED: Cache for 30 minutes (1,800,000 ms)
        if (cached && cacheTime && (Date.now() - parseInt(cacheTime)) < 1800000) {
            console.log('📋 Using cached GitHub data (less than 30 min old)');
            return JSON.parse(cached);
        }

        console.log('🌐 Making fresh API request to GitHub...');
        
        // Fetch last 5 commits for the specific folder
        const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/commits?path=${REPO_FOLDER}&per_page=5`);
        
        if (!response.ok) {
            if (response.status === 403 && cached) {
                console.warn('⚠️ Rate limit hit. Using old cache.');
                return JSON.parse(cached);
            }
            throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }
        
        const commits = await response.json();
        console.log(`📝 Found ${commits.length} commits`);
        
        const updates = {};

        // Process the commits
        for (const commit of commits) {
            const commitDate = commit.commit.author.date;
            const detailResponse = await fetch(commit.url);
            
            if (detailResponse.ok) {
                const detail = await detailResponse.json();
                if (detail.files) {
                    detail.files.forEach(file => {
                        // Check if file is in our folder and is HTML
                        if (file.filename.startsWith(REPO_FOLDER) && file.filename.endsWith('.html')) {
                            // Strip folder name so it matches local links
                            const cleanName = file.filename.replace(REPO_FOLDER, '');
                            if (!updates[cleanName]) {
                                updates[cleanName] = commitDate;
                            }
                        }
                    });
                }
            }
        }

        // Merge with existing cache to preserve older dates
        const existingCache = cached ? JSON.parse(cached) : {};
        const mergedUpdates = { ...existingCache, ...updates };

        localStorage.setItem('githubPageUpdates', JSON.stringify(mergedUpdates));
        localStorage.setItem('githubPageUpdatesTime', Date.now().toString());

        return mergedUpdates;
    } catch (error) {
        console.error('❌ GitHub fetch error:', error);
        const cached = localStorage.getItem('githubPageUpdates');
        if (cached) return JSON.parse(cached);
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