import { state, loadState } from './state.js';
import { WAHBOOK_POSTS } from './assembly-data.js';

// ============================================
// TABLET STATE
// ============================================

let tabletOpen = false;
let bootComplete = false;

// ============================================
// HELPER FUNCTIONS
// ============================================

function checkForNewPosts() {
    loadState();
    const notificationDot = document.getElementById('wahbook-notification');
    const tabletNotification = document.getElementById('tablet-notification');
    
    if (state.loggedInUser === 'generic' || !state.userState.following || state.userState.following.length === 0) {
        if (notificationDot) notificationDot.style.display = 'none';
        if (tabletNotification) tabletNotification.style.display = 'none';
        return;
    }

    const followedPosts = WAHBOOK_POSTS.filter(p => state.userState.following.includes(p.characterKey));
    const seenIds = new Set(state.userState.seenPostIds);
    const hasNewPosts = followedPosts.some(p => !seenIds.has(p.id));

    if (hasNewPosts) {
        if (notificationDot) notificationDot.style.display = 'inline-block';
        if (tabletNotification) tabletNotification.style.display = 'flex';
    } else {
        if (notificationDot) notificationDot.style.display = 'none';
        if (tabletNotification) tabletNotification.style.display = 'none';
    }
}

async function getPageUpdates() {
    try {
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

async function markUpdatedPages(container) {
    const links = container.querySelectorAll('a.nav-button');
    const pageUpdates = await getPageUpdates();
    const allDates = Object.values(pageUpdates).map(d => new Date(d).getTime());

    if (allDates.length === 0) return;
    
    const latestUpdateTimestamp = Math.max(...allDates);
    const RECENT_WINDOW = 19 * 60 * 60 * 1000;
    const cutoffTime = latestUpdateTimestamp - RECENT_WINDOW;

    let updatedCount = 0;

    links.forEach(link => {
        const href = link.getAttribute('href');
        const pageUpdateTimeString = pageUpdates[href];

        if (pageUpdateTimeString) {
            const pageTime = new Date(pageUpdateTimeString).getTime();
            if (pageTime > cutoffTime) {
                if (!link.querySelector('.nav-badge.updated')) {
                    const badge = document.createElement('span');
                    badge.className = 'nav-badge updated pulse';
                    badge.textContent = 'NEW';
                    badge.style.marginLeft = 'auto';
                    link.appendChild(badge);
                    updatedCount++;
                }
            }
        }
    });

    console.log(`🏷️ Found ${updatedCount} pages updated recently.`);
}

// ============================================
// TABLET TIME DISPLAY
// ============================================

function updateTabletTime() {
    const timeEl = document.getElementById('tablet-time');
    if (!timeEl) return;
    
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    
    // Random WAH time format
    const formats = [
        `WAH:${mins}`,
        `${hours}:${mins}`,
        `W${hours}:${mins}`,
        `${hours}:WAH`
    ];
    
    timeEl.textContent = formats[Math.floor(Math.random() * formats.length)];
}

// ============================================
// TABLET TOGGLE FUNCTIONALITY
// ============================================

function openTablet() {
    const overlay = document.getElementById('wah-tablet-overlay');
    const toggleBtn = document.getElementById('tablet-toggle-btn');
    const bootScreen = document.getElementById('boot-screen');
    
    if (!overlay || !toggleBtn) return;
    
    tabletOpen = true;
    toggleBtn.classList.add('hidden');
    document.body.classList.add('tablet-open');
    
    // Show boot screen on first open
    if (!bootComplete && bootScreen) {
        bootScreen.classList.add('active');
        setTimeout(() => {
            bootScreen.classList.remove('active');
            bootComplete = true;
        }, 1800);
    }
    
    overlay.classList.add('open');
    localStorage.setItem('tabletOpen', 'true');
    
    // Play open sound effect (optional)
    playTabletSound('open');
}

function closeTablet() {
    const overlay = document.getElementById('wah-tablet-overlay');
    const toggleBtn = document.getElementById('tablet-toggle-btn');
    
    if (!overlay || !toggleBtn) return;
    
    tabletOpen = false;
    overlay.classList.remove('open');
    document.body.classList.remove('tablet-open');
    
    setTimeout(() => {
        toggleBtn.classList.remove('hidden');
    }, 300);
    
    localStorage.setItem('tabletOpen', 'false');
    
    // Play close sound effect (optional)
    playTabletSound('close');
}

function toggleTablet() {
    if (tabletOpen) {
        closeTablet();
    } else {
        openTablet();
    }
}

// Optional sound effects
function playTabletSound(type) {
    // You can add actual audio files here
    // const audio = new Audio(`sounds/tablet-${type}.mp3`);
    // audio.volume = 0.3;
    // audio.play().catch(() => {});
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function initSearch() {
    const searchBtn = document.getElementById('quick-search');
    const searchOverlay = document.getElementById('tablet-search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('tablet-search-input');
    const searchResults = document.getElementById('tablet-search-results');
    
    if (!searchBtn || !searchOverlay) return;
    
    // Get all nav links for searching
    const navLinks = document.querySelectorAll('.tablet-nav .nav-button');
    const searchableItems = Array.from(navLinks).map(link => ({
        text: link.querySelector('span')?.textContent || '',
        href: link.getAttribute('href'),
        icon: link.querySelector('img')?.src || ''
    }));
    
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        setTimeout(() => searchInput.focus(), 100);
    });
    
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (!query) {
            searchResults.innerHTML = '';
            return;
        }
        
        const matches = searchableItems.filter(item => 
            item.text.toLowerCase().includes(query)
        );
        
        if (matches.length === 0) {
            searchResults.innerHTML = `
                <div class="search-empty">
                    <p>No results for "${query}"</p>
                </div>
            `;
            return;
        }
        
        searchResults.innerHTML = matches.map(item => `
            <a href="${item.href}" class="search-result-item">
                <img src="${item.icon}" alt="" style="width: 24px; height: 24px;">
                <span>${item.text}</span>
            </a>
        `).join('');
    });
    
    // Close on escape
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchOverlay.classList.remove('active');
        }
    });
}

// ============================================
// COLLAPSIBLE NAV GROUPS
// ============================================

function initCollapsibleGroups() {
    const groupTitles = document.querySelectorAll('.tablet-nav .nav-group-title');
    
    // Load saved state
    const collapsedGroups = JSON.parse(localStorage.getItem('collapsedNavGroups') || '[]');
    
    groupTitles.forEach((title, index) => {
        const group = title.parentElement;
        
        // Restore collapsed state
        if (collapsedGroups.includes(index)) {
            group.classList.add('collapsed');
        }
        
        title.addEventListener('click', () => {
            group.classList.toggle('collapsed');
            
            // Save state
            const collapsed = [];
            document.querySelectorAll('.tablet-nav .nav-group').forEach((g, i) => {
                if (g.classList.contains('collapsed')) {
                    collapsed.push(i);
                }
            });
            localStorage.setItem('collapsedNavGroups', JSON.stringify(collapsed));
        });
    });
}

// ============================================
// QUICK ACTION BUTTONS
// ============================================

function initQuickActions() {
    const homeBtn = document.getElementById('quick-home');
    const missionsBtn = document.getElementById('quick-missions');
    const wahbookBtn = document.getElementById('quick-wahbook');
    
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
    
    if (missionsBtn) {
        missionsBtn.addEventListener('click', () => {
            window.location.href = 'quests.html';
        });
    }
    
    if (wahbookBtn) {
        wahbookBtn.addEventListener('click', () => {
            window.location.href = 'assembly.html';
        });
    }
}

// ============================================
// INITIALIZE TABLET
// ============================================

async function initializeTablet() {
    console.log('🎮 Initializing WAH-Tablet...');
    
    // Create container for tablet in body (not in sidebar anymore)
    let tabletContainer = document.getElementById('tablet-container');
    if (!tabletContainer) {
        tabletContainer = document.createElement('div');
        tabletContainer.id = 'tablet-container';
        document.body.appendChild(tabletContainer);
    }

    try {
        // Fetch tablet HTML
        const navScriptElement = document.querySelector('script[src*="navigation.js"]');
        if (!navScriptElement) throw new Error("Could not find navigation.js script tag");
        
        const scriptSrc = navScriptElement.src;
        const navHtmlUrl = new URL('navigation.html', scriptSrc);

        const response = await fetch(navHtmlUrl.href);
        if (!response.ok) throw new Error(`Failed to fetch navigation`);
        
        tabletContainer.innerHTML = await response.text();

        // Update subtitle
        const subtitle = document.title.split('|')[1]?.trim() || 'Directory';
        const sidebarSubtitle = document.getElementById('sidebar-subtitle');
        if (sidebarSubtitle) sidebarSubtitle.textContent = subtitle;

        // Hide current page link
        const currentPage = window.location.pathname.split('/').pop();
        const mapPages = ['maps.html', 'mushroom-kingdom-maps.html', 'midlands-maps.html', 'internet-maps.html', 'middle-earth-maps.html', 'warhammer-maps.html', 'kivotos-maps.html', 'doughnut-hole-maps.html'];
        const navLinks = tabletContainer.querySelectorAll('.nav-button');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) link.style.display = 'none';
            if (mapPages.includes(currentPage) && linkHref === 'maps.html') link.style.display = 'none';
        });

        // Initialize features
        markPageAsVisited();
        checkForNewPosts();
        await markUpdatedPages(tabletContainer);
        
        // Initialize tablet-specific features
        initTabletControls();
        initSearch();
        initCollapsibleGroups();
        initQuickActions();
        
        // Start time updates
        updateTabletTime();
        setInterval(updateTabletTime, 60000);
        
        // Don't auto-open on page load - user must click the button
        // This is cleaner for the overlay experience
        
        console.log('✅ WAH-Tablet initialized successfully!');

    } catch (error) {
        console.error('❌ Failed to load tablet navigation:', error);
        tabletContainer.innerHTML = '<p style="color: red; padding: 20px;">Error: Could not load navigation.</p>';
    }
}

function initTabletControls() {
    // Toggle button (bottom right)
    const toggleBtn = document.getElementById('tablet-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', openTablet);
    }
    
    // Close button (X in top right of tablet)
    const closeBtn = document.getElementById('tablet-close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTablet);
    }
    
    // Home button (close tablet)
    const homeBtn = document.getElementById('tablet-home-button');
    if (homeBtn) {
        homeBtn.addEventListener('click', closeTablet);
    }
    
    // Click outside tablet to close (on the overlay background)
    const overlay = document.getElementById('wah-tablet-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            // Only close if clicking directly on overlay, not on tablet
            if (e.target === overlay) {
                closeTablet();
            }
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Don't trigger if typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        // Press 'T' or 'N' to toggle tablet
        if ((e.key.toLowerCase() === 't' || e.key.toLowerCase() === 'n') && !e.ctrlKey && !e.metaKey && !e.altKey) {
            toggleTablet();
        }
        
        // Escape to close
        if (e.key === 'Escape' && tabletOpen) {
            closeTablet();
        }
    });
}

// Start initialization
initializeTablet();