const scanBtn = document.getElementById('scan-btn');
const resultsContainer = document.getElementById('results-container');

// List of all HTML files in the project
const PROJECT_PAGES = [
    'index.html',
    'directory.html',
    'assembly.html',
    'relations.html',
    'rumors.html',
    'calendar.html',
    'timeline.html',
    'focus.html',
    'quests.html',
    'guilds.html',
    'bookshelf.html',
    'artifacts.html',
    'currency.html',
    'fawfuls-party.html',
    'battlefield.html',
    'status.html',
    'developer.html'
];

async function checkImage(src) {
    return new Promise(resolve => {
        // Skip absolute URLs or data URIs as they are not local assets
        if (!src || src.startsWith('http') || src.startsWith('data:')) {
            resolve({ src, status: 'skipped' });
            return;
        }
        const img = new Image();
        img.onload = () => resolve({ src, status: 'ok' });
        img.onerror = () => resolve({ src, status: 'missing' });
        img.src = src;
    });
}

async function scanProject() {
    scanBtn.disabled = true;
    resultsContainer.innerHTML = '<p class="results-summary">Scanning project files...</p>';
    
    const missingImages = [];
    const fetchPromises = PROJECT_PAGES.map(async (pageUrl) => {
        try {
            const response = await fetch(pageUrl);
            if (!response.ok) {
                console.warn(`Could not fetch ${pageUrl}. Skipping.`);
                return;
            }
            const htmlText = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const images = doc.querySelectorAll('img');

            const imageCheckPromises = Array.from(images).map(img => {
                const src = img.getAttribute('src');
                if (src) { // Only check images with a src attribute
                    return checkImage(src);
                }
                return Promise.resolve(null);
            });
            
            const results = await Promise.all(imageCheckPromises);
            results.forEach(result => {
                if (result && result.status === 'missing') {
                    // Avoid duplicates
                    const existing = missingImages.find(item => item.src === result.src);
                    if (!existing) {
                         missingImages.push({ src: result.src, foundOn: [pageUrl] });
                    } else {
                        if (!existing.foundOn.includes(pageUrl)) {
                            existing.foundOn.push(pageUrl);
                        }
                    }
                }
            });
        } catch (error) {
            console.error(`Error scanning page ${pageUrl}:`, error);
        }
    });

    await Promise.all(fetchPromises);
    
    renderResults(missingImages);
    scanBtn.disabled = false;
}

function renderResults(missingImages) {
    if (missingImages.length === 0) {
        resultsContainer.innerHTML = '<p class="results-summary positive">WAA-HAA-HAA! No missing images found!</p>';
        return;
    }

    const listItems = missingImages.map(item => `
        <li>
            Missing asset: <code>${item.src}</code>
            <span class="found-on">Found on: ${item.foundOn.join(', ')}</span>
        </li>
    `).join('');

    resultsContainer.innerHTML = `
        <h3 class="results-summary negative">Scan Complete: Found ${missingImages.length} Missing Image(s)</h3>
        <ul id="results-list">${listItems}</ul>
    `;
}


function init() {
    if (scanBtn) {
        scanBtn.addEventListener('click', scanProject);
    }
}

init();