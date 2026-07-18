import { state, loadState } from './state.js';
import { LORE_DATA } from './lore.js';
// Import book data from separate files
import { BOOK_DATA as peachDiary } from './books/peach_diary.js';
import { BOOK_DATA as mkHistory } from './books/mk_history.js';
import { BOOK_DATA as fungalAlchemy } from './books/fungal_alchemy.js';
import { BOOK_DATA as koopaTactics } from './books/koopa_tactics.js';
import { BOOK_DATA as silentService } from './books/silent_service.js';
import { BOOK_DATA as bloodVines } from './books/blood_vines.js';
import { BOOK_DATA as waluigiCheating } from './books/waluigi_cheating.js';
import { BOOK_DATA as krumperzKode } from './books/krumperz_kode.js';
import { BOOK_DATA as rebelCookbook } from './books/rebel_cookbook.js';
import { BOOK_DATA as scrappingForDummies } from './books/scrapping_for_dummies.js';
import { BOOK_DATA as fawfulJournal } from './books/fawful_journal.js';
import { BOOK_DATA as datastreamVol2 } from './books/datastream_vol_2.js';
import { BOOK_DATA as codeOfTheBlade } from './books/code_of_the_blade.js';
import { BOOK_DATA as hammerCode } from './books/hammer_code.js';
import { BOOK_DATA as magitekTheory } from './books/magitek_theory.js';
import { BOOK_DATA as starSprites } from './books/star_sprites.js';
import { BOOK_DATA as toadstoolArchitecture } from './books/toadstool_architecture.js';
import { BOOK_DATA as culinaryConquest } from './books/culinary_conquest.js';
import { BOOK_DATA as edictsEbonVeil } from './books/edicts_ebon_veil.js';
import { BOOK_DATA as vampireEtiquette } from './books/vampire_etiquette.js';
import { BOOK_DATA as fundamentalsAbjuration } from './books/fundamentals_abjuration.js';
import { BOOK_DATA as veinsOfTheTapestry } from './books/veins_of_the_tapestry.js';
import { BOOK_DATA as kirbyIncident } from './books/kirby_incident.js';
import { BOOK_DATA as monetizeDatastream } from './books/monetize_datastream.js';
import { BOOK_DATA as guideDigitalSea } from './books/guide_digital_sea.js';
import { BOOK_DATA as freelancerManifesto } from './books/freelancer_manifesto.js';
import { BOOK_DATA as warioGreedStudy } from './books/wario_greed_study.js';
import { BOOK_DATA as bananaWar } from './books/banana_war.js';
import { BOOK_DATA as kremlingShips } from './books/kremling_ships.js';
import { BOOK_DATA as ascendedProphecies } from './books/ascended_prophecies.js';
import { BOOK_DATA as yoshiAccords } from './books/yoshi_accords.js';
import { BOOK_DATA as guideWonderFlowers } from './books/guide_wonder_flowers.js';
import { BOOK_DATA as azureBladeTrials } from './books/azure_blade_trials.js';
import { BOOK_DATA as beanbeanTales } from './books/beanbean_tales.js';
import { BOOK_DATA as philosophyWah } from './books/philosophy_wah.js';
import { BOOK_DATA as wastelandsGuide } from './books/wastelands_guide.js';
import { BOOK_DATA as artOfTheWah } from './books/art_of_the_wah.js';
import { BOOK_DATA as rootkitGrimoire } from './books/rootkit_grimoire.js';
import { BOOK_DATA as navigatingDatastream } from './books/navigating_datastream.js';
import { BOOK_DATA as studyInMemetics } from './books/study_in_memetics.js';
import { BOOK_DATA as ironLegionManual } from './books/iron_legion_manual.js';
import { BOOK_DATA as protocolSix } from './books/protocol_six.js';
import { BOOK_DATA as greatLibraries } from './books/great_libraries.js';
import { BOOK_DATA as warhammerHistories } from './books/warhammer_histories.js';
import { BOOK_DATA as codexPunchline } from './books/codex_punchline.js';
import { BOOK_DATA as mayorsLedger } from './books/mayors_ledger.js';


import { BOOK_DESCRIPTIONS } from './books/book_descriptions.js';

const bookModal = document.getElementById('book-reader-modal');
const bookModalClose = document.getElementById('book-modal-close');
const bookModalTitle = document.getElementById('book-modal-title');
const bookCoverView = document.getElementById('book-cover-view');
const bookCoverImage = document.getElementById('book-cover-image');
const bookDescriptionContainer = document.getElementById('book-description-container');
const openBookBtn = document.getElementById('open-book-btn');
const bookPagesView = document.getElementById('book-pages-view');
const bookNavigation = document.querySelector('.book-navigation');
const pageLeft = document.getElementById('book-page-left');
const pageRight = document.getElementById('book-page-right');
const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');
const pageIndicator = document.getElementById('page-indicator');

let currentBook = null;
let currentPage = -1; // -1 for cover, 0 for pg 1-2, 2 for 3-4 etc.

// A map to associate inventory item names with their book data modules.
const bookDataMap = {
    "Princess Peach's Diary": peachDiary,
    "Mushroom Kingdom History, Vol. III": mkHistory,
    "A Field Guide to Fungal Alchemy": fungalAlchemy,
    "Koopa Troop Tactics": koopaTactics,
    "The Silent Service: A Primer": silentService,
    "Blood & Vines: An Onyx Hand Manifesto": bloodVines,
    "Waluigi's Guide to Graceful Cheating": waluigiCheating,
    "Da Krumperz Kode": krumperzKode,
    "A Rebel's Cookbook": rebelCookbook,
    "Scrapping for Dummies": scrappingForDummies,
    "Fawful's Furious Feelings Journal": fawfulJournal,
    "Navigating the Datastream, Vol II: The Deep Web": datastreamVol2,
    "The Code of the Blade": codeOfTheBlade,
    "The Hammer Code: An Iron Legion Treatise": hammerCode,
    "Magitek Theory Vol. IV: Arcane Capacitors": magitekTheory,
    "A History of the Star Sprites": starSprites,
    "Toadstool Architecture: A Study in Fungal Forms": toadstoolArchitecture,
    "The Culinary Arts of Conquest": culinaryConquest,
    "Edicts of the Ebon Veil": edictsEbonVeil,
    "A Mortal's Guide to Vampire Etiquette": vampireEtiquette,
    "Fundamentals of Abjuration": fundamentalsAbjuration,
    "Veins of the Tapestry: A Record of Threads Severed and Mended": veinsOfTheTapestry,
    "The Kirby Incident: A Conservator's Report": kirbyIncident,
    "How to Monetize Your Data-Stream": monetizeDatastream,
    "A Tourist's Guide to the Digital Sea": guideDigitalSea,
    "The Art of the Deal: A Freelancer's Manifesto": freelancerManifesto,
    "A Study of Wario's Greed: A Psychological Profile": warioGreedStudy,
    "The Great Banana War: A Kong History": bananaWar,
    "Kremling Ship Designs, Vol. II": kremlingShips,
    "The Prophecies of the Ascended One": ascendedProphecies,
    "The Yoshi's Island Accords": yoshiAccords,
    "A Field Guide to Wonder Flowers": guideWonderFlowers,
    "The Trials of the Azure Blade": azureBladeTrials,
    "Beanbean Folk Tales": beanbeanTales,
    "The Philosophy of WAH": philosophyWah,
    "Surviving the Wastelands: A Raider's Guide": wastelandsGuide,
    "The Art of the WAH": artOfTheWah,
    "The Rootkit Grimoire": rootkitGrimoire,
    "Navigating the Datastream": navigatingDatastream,
    "A Study in Memetics": studyInMemetics,
    "Iron Legion Field Manual": ironLegionManual,
    "Protocol Six: Retreat If You Must": protocolSix,
    "A Guide to the Great Libraries": greatLibraries,
    "The Liber Maleficus: A Study of the Ruinous Powers": warhammerHistories,
    "Codex: The Punchline": codexPunchline,
    "Mayor's Ledger & Spellbook": mayorsLedger,
};

// Define which books have been read and are therefore unlocked
const READ_BOOKS = new Set([
    "Magitek Theory Vol. IV: Arcane Capacitors", // Read by Dan
    "The Hammer Code: An Iron Legion Treatise", // Read by Markop
    "The Silent Service: A Primer", // Read by Remi
    "Fundamentals of Abjuration", // Stolen and read by Bones
    "Veins of the Tapestry: A Record of Threads Severed and Mended" // Found and read by Bones in Planar Sanctum
]);


const COVERS = {
    "Princess Peach's Diary": 'book_cover_diary.png',
    "Mushroom Kingdom History, Vol. III": 'book_cover_history.png',
    "A Field Guide to Fungal Alchemy": 'book_cover_alchemy.png',
    "Koopa Troop Tactics": 'book_cover_tactics.png',
    "The Silent Service: A Primer": 'book_cover_silent_service.png',
    "Blood & Vines: An Onyx Hand Manifesto": 'book_cover_blood_vines.png',
    "Waluigi's Guide to Graceful Cheating": 'book_cover_waluigi_cheating.png',
    "Da Krumperz Kode": 'book_cover_krumperz_kode.png',
    "A Rebel's Cookbook": 'book_cover_rebel_cookbook.png',
    "Scrapping for Dummies": 'book_cover_scrapping.png',
    "Fawful's Furious Feelings Journal": 'book_cover_fawful.png',
    "Navigating the Datastream, Vol II: The Deep Web": 'book_cover_datastream_v2.png',
    "The Code of the Blade": 'book_cover_azure_blade.png',
    "The Hammer Code: An Iron Legion Treatise": 'book_cover_hammer_code.png',
    "Magitek Theory Vol. IV: Arcane Capacitors": 'book_cover_magitek.png',
    "A History of the Star Sprites": 'book_cover_star_sprites.png',
    "Toadstool Architecture: A Study in Fungal Forms": 'book_cover_toadstool_architecture.png',
    "The Culinary Arts of Conquest": 'book_cover_culinary_conquest.png',
    "Edicts of the Ebon Veil": 'book_cover_ebon_veil.png',
    "A Mortal's Guide to Vampire Etiquette": 'book_cover_vampire_etiquette.png',
    "Fundamentals of Abjuration": 'book_cover_abjuration.png',
    "Veins of the Tapestry: A Record of Threads Severed and Mended": 'book_cover_ebon_veil.png',
    "The Kirby Incident: A Conservator's Report": 'book_cover_kirby.png',
    "How to Monetize Your Data-Stream": 'book_cover_monetize_datastream.png',
    "A Tourist's Guide to the Digital Sea": 'book_cover_guide_digital_sea.png',
    "The Art of the Deal: A Freelancer's Manifesto": 'book_cover_freelancer_manifesto.png',
    "A Study of Wario's Greed: A Psychological Profile": 'book_cover_wario_greed.png',
    "The Great Banana War: A Kong History": 'book_cover_banana_war.png',
    "Kremling Ship Designs, Vol. II": 'book_cover_kremling_ships.png',
    "The Prophecies of the Ascended One": 'book_cover_ascended_prophecies.png',
    "The Yoshi's Island Accords": 'book_cover_yoshi_accords.png',
    "A Field Guide to Wonder Flowers": 'book_cover_wonder_flowers.png',
    "The Trials of the Azure Blade": 'book_cover_azure_trials.png',
    "Beanbean Folk Tales": 'book_cover_beanbean_tales.png',
    "The Philosophy of WAH": 'book_cover_wah_philosophy.png',
    "Surviving the Wastelands: A Raider's Guide": 'book_cover_wastelands_guide.png',
    "The Art of the WAH": 'book_cover_wah_art.png',
    "The Rootkit Grimoire": 'book_cover_rootkit.png',
    "Navigating the Datastream": 'book_cover_datastream.png',
    "A Study in Memetics": 'book_cover_memetics.png',
    "Iron Legion Field Manual": 'book_cover_iron_legion.png',
    "Protocol Six: Retreat If You Must": 'book_cover_iron_legion.png',
    "A Guide to the Great Libraries": 'book_cover_library.png',
    "The Liber Maleficus: A Study of the Ruinous Powers": 'book_cover_chaos.png',
    "Codex: The Punchline": 'book_cover_jester.png',
    "Mayor's Ledger & Spellbook": 'book_cover_conspiracy.png',
};

const fallbackCoverSvg = 'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22400%22%20viewBox%3D%220%200%20300%20400%22%3E%3Crect%20width%3D%22300%22%20height%3D%22400%22%20fill%3D%22%232d0f42%22%20rx%3D%2212%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2210%22%20width%3D%22280%22%20height%3D%22380%22%20fill%3D%22none%22%20stroke%3D%22%23ffd700%22%20stroke-width%3D%223%22%20rx%3D%228%22%20stroke-dasharray%3D%226%2C3%22%2F%3E%3Ctext%20x%3D%22150%22%20y%3D%22200%22%20font-size%3D%2272%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E%F0%9F%93%9C%3C%2Ftext%3E%3C%2Fsvg%3E';

function getBookCoverUrl(bookTitle) {
    return COVERS[bookTitle] || fallbackCoverSvg;
}


loadState();

function init() {
    renderInventory();
    renderBookshelf();
    setupEventListeners();
}

function renderInventory() {
    const inventoryContainer = document.getElementById('inventory-grid-container');
    if (!inventoryContainer) return;

    const allItems = [];
    for (const ownerKey in state.inventories) {
        const inventory = state.inventories[ownerKey];
        if (!inventory || !inventory.items) continue;

        inventory.items.forEach(item => {
            if (!bookDataMap[item]) { // Only include non-book items
                allItems.push({
                    name: item,
                    owner: inventory.name
                });
            }
        });
    }

    if (allItems.length === 0) {
        inventoryContainer.innerHTML = '<p class="page-subtitle" style="grid-column: 1 / -1;">No non-book items found in party inventory.</p>';
        return;
    }

    inventoryContainer.innerHTML = allItems.map(item => `
        <div class="inventory-item-card">
            <div class="item-icon">🎒</div>
            <p class="item-name">${item.name}</p>
            <p class="item-owner">Held by: ${item.owner}</p>
        </div>
    `).join('');
}

function renderBookshelf() {
    const bookshelfContainer = document.getElementById('bookshelf-main');
    if (!bookshelfContainer) return;

    bookshelfContainer.innerHTML = `
        <div class="shelf" id="shelf-1"></div>
        <div class="shelf" id="shelf-2"></div>
        <div class="shelf" id="shelf-3"></div>
    `;

    const shelves = [
        document.getElementById('shelf-1'),
        document.getElementById('shelf-2'),
        document.getElementById('shelf-3')
    ];
    let shelfIndex = 0;

    for (const ownerKey in state.inventories) {
        const inventory = state.inventories[ownerKey];
        if (!inventory || !inventory.items) continue;

        const booksInInventory = inventory.items.filter(item => bookDataMap[item]);

        if (booksInInventory.length === 0) {
            continue; // Skip rendering a shelf if there are no books
        }

        const currentShelf = shelves[shelfIndex % shelves.length];
        
        const label = document.createElement('div');
        label.className = 'shelf-label';
        label.textContent = inventory.name;
        currentShelf.appendChild(label);

        booksInInventory.forEach(item => {
            const bookData = bookDataMap[item];
            const bookEl = document.createElement('div');
            bookEl.className = 'book';
            bookEl.dataset.item = item;

            const isUnlocked = READ_BOOKS.has(item) || state.debugMode;
            
            if (isUnlocked) {
                bookEl.classList.add('interactive');
                bookEl.dataset.bookKey = item;
                bookEl.title = item;
            } else {
                bookEl.classList.add('locked');
                bookEl.title = "This book has not been read by the party yet.";
            }
            
            const coverUrl = getBookCoverUrl(item);
            bookEl.style.backgroundImage = `url('${coverUrl}'), url('${fallbackCoverSvg}')`;

            currentShelf.appendChild(bookEl);
        });
        
        shelfIndex++;
    }
}


function renderCurrentView() {
    if (!currentBook) return;

    if (currentPage === -1) { // Cover view
        bookCoverView.style.display = 'flex';
        bookPagesView.style.display = 'none';
        bookNavigation.style.display = 'none';
        bookCoverImage.src = getBookCoverUrl(currentBook.title);
        bookCoverImage.alt = currentBook.title;
    } else { // Pages view
        bookCoverView.style.display = 'none';
        bookPagesView.style.display = 'grid';
        bookNavigation.style.display = 'flex';

        const totalPages = currentBook.pages.length;
        const leftPageIndex = currentPage;
        const rightPageIndex = currentPage + 1;

        pageLeft.textContent = currentBook.pages[leftPageIndex] || '';
        pageRight.textContent = currentBook.pages[rightPageIndex] || '';

        prevPageBtn.disabled = false; // Always enabled on pages view to return to cover
        nextPageBtn.disabled = (rightPageIndex >= totalPages);

        pageIndicator.textContent = `Page ${leftPageIndex + 1}${totalPages > leftPageIndex + 1 ? ` - ${rightPageIndex + 1}` : ''} of ${totalPages}`;
    }
}

function showBookModal(bookKey) {
    currentBook = bookDataMap[bookKey];
    if (!bookModal || !currentBook) return;

    // Reset description container
    bookDescriptionContainer.innerHTML = '';
    bookDescriptionContainer.style.display = 'none';

    // Check for and render detailed description
    const detailedDescription = BOOK_DESCRIPTIONS[bookKey];
    if (detailedDescription) {
        let descriptionHTML = `
            <h5>Summary</h5>
            <p>${detailedDescription.summary}</p>
            
            <h5>Details</h5>
            <p><strong>Reading Time:</strong> ${detailedDescription.reading_time}</p>
            <p><strong>Pages:</strong> ${detailedDescription.pages}</p>
            <p><strong>Effect:</strong> <em>${detailedDescription.effect}</em></p>
        `;

        bookDescriptionContainer.innerHTML = descriptionHTML;
        bookDescriptionContainer.style.display = 'block';
    }


    currentPage = -1; // Start at cover view
    bookModalTitle.textContent = currentBook.title;
    renderCurrentView();

    bookModal.style.display = 'flex';
}

function hideBookModal() {
    if (bookModal) {
        bookModal.style.display = 'none';
        currentBook = null;
    }
}

function changePage(direction) {
    if (!currentBook) return;
    
    if (direction === -1 && currentPage <= 0) {
        // Go back to cover from the first page
        currentPage = -1;
    } else {
        const newPage = currentPage + (2 * direction);
        // Ensure new page is within valid range
        if (newPage >= 0 && newPage < currentBook.pages.length) {
            currentPage = newPage;
        }
    }
    renderCurrentView();
}

function setupEventListeners() {
    const bookshelfContainer = document.getElementById('bookshelf-main');
    if (bookshelfContainer) {
        bookshelfContainer.addEventListener('click', (e) => {
            const interactiveBook = e.target.closest('.book.interactive');
            if (interactiveBook) {
                const bookKey = interactiveBook.dataset.bookKey;
                if (bookKey) {
                    showBookModal(bookKey);
                }
            }
        });
    }

    if (bookModal) {
        bookModal.addEventListener('click', (e) => {
            if (e.target === bookModal) hideBookModal();
        });
    }

    if (openBookBtn) {
        openBookBtn.addEventListener('click', () => {
            currentPage = 0;
            renderCurrentView();
        });
    }

    if (bookModalClose) bookModalClose.addEventListener('click', hideBookModal);
    if (prevPageBtn) prevPageBtn.addEventListener('click', () => changePage(-1));
    if (nextPageBtn) nextPageBtn.addEventListener('click', () => changePage(1));
}

init();
// Image List:
// artifacts/the_star_fragment.png
// artifacts/the_fireflower.png
// artifacts/the_mushroom.png
// artifacts/fire_flower_petal.png
// bearers/rebellion.png
// bearers/charismatic.png
// bearers/beauty.png
// bearers/refrain.png
// bearers/might.png
// bearers/justice.png
// bearers/self_reflection.png
// bearers/unknown.png
// bearers/god_toad.png
// bearers/unknown_bearer.png