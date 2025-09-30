import { state, loadState } from './state.js';
import { WAHBOOK_POSTS } from './assembly-data.js';

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


async function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        console.error('Sidebar container not found.');
        return;
    }

    try {
        const navScriptElement = document.querySelector('script[src*="navigation.js"]');
        if (!navScriptElement) {
            throw new Error("Could not find navigation.js script tag to determine base path.");
        }
        const scriptSrc = navScriptElement.src;
        const navHtmlUrl = new URL('navigation.html', scriptSrc);

        const response = await fetch(navHtmlUrl.href);
        if (!response.ok) {
            throw new Error(`Failed to fetch navigation: ${response.statusText}`);
        }
        const sidebarHTML = await response.text();
        sidebar.innerHTML = sidebarHTML;

        // Set the subtitle based on the page's title
        const subtitle = document.title.split('|')[1]?.trim() || 'Directory';
        const sidebarSubtitle = document.getElementById('sidebar-subtitle');
        if (sidebarSubtitle) {
            sidebarSubtitle.textContent = subtitle;
        }

        // Hide the navigation button for the current page
        const currentPage = window.location.pathname.split('/').pop();
        const mapPages = ['maps.html', 'mushroom-kingdom-maps.html', 'midlands-maps.html', 'internet-maps.html', 'middle-earth-maps.html', 'warhammer-maps.html', 'kivotos-maps.html', 'doughnut-hole-maps.html'];
        const navLinks = sidebar.querySelectorAll('.nav-button');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage) {
                link.style.display = 'none';
            }
            // If we are on any map page, hide the main "Tactical Maps" link
            if (mapPages.includes(currentPage) && linkHref === 'maps.html') {
                link.style.display = 'none';
            }
        });

        // After sidebar is rendered, check for notifications
        checkForNewPosts();

    } catch (error) {
        console.error('Failed to load sidebar navigation:', error);
        sidebar.innerHTML = '<p style="color: var(--negative-color);">Error: Could not load navigation.</p>';
    }
}

// Run the sidebar initialization when the script is loaded.
initializeSidebar();