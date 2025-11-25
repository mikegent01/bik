
import { state, loadState } from './state.js';
import { playSound } from './common.js';
import { BOOK_DESCRIPTIONS } from './books/book_descriptions.js';
import { LIBRARY_STOCKS } from './books/library_stocks.js';

// Import all full book content data
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
import { BOOK_DATA as warhammerHistories } from './books/warhammer_histories.js';
import { BOOK_DATA as codexPunchline } from './books/codex_punchline.js';
import { BOOK_DATA as mayorsLedger } from './books/mayors_ledger.js';


const libraryCollectionsContainer = document.getElementById('library-collections-container');

// --- MODAL ELEMENTS ---
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

// A map to associate inventory item names with their full book data modules.
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
    "The Liber Maleficus: A Study of the Ruinous Powers": warhammerHistories,
    "Codex: The Punchline": codexPunchline,
    "Mayor's Ledger & Spellbook": mayorsLedger,
};

const LIBRARIES = [
    { name: "The Royal Archives - Mushroom Kingdom", stockKey: 'mushroom_kingdom' },
    { name: "Grand Library of Mighdural - Midlands", stockKey: 'midlands' },
    { name: "The Conservator's Archive - Mages' Guild", stockKey: 'conservator_archive' },
    { name: "The Unseen Library - Deep Web, The Internet", stockKey: 'unseen_library' },
    { name: "Provincial Archives - Yal Belanor, Midlands", stockKey: 'provincial_archives' },
    { name: "The Knowledge Garden (Wikipedia) - The Internet", stockKey: 'internet' },
    { name: "The Fan-Fiction Scriptorium - Deep Web, The Internet", stockKey: 'fanfic_scriptorium' },
    { name: "The Imgurian Archives - The Internet", stockKey: 'imgurian_archives' },
    { name: "The Library of Zero - The Internet", stockKey: 'library_of_zero' },
    { name: "The Bureau of Lost Socks - Dry County, Midlands", stockKey: 'lost_socks' }
];

function getBookCoverUrl(bookTitle) {
    const covers = {
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
        "The Liber Maleficus: A Study of the Ruinous Powers": 'book_cover_chaos.png',
        "Codex: The Punchline": 'book_cover_jester.png',
        "Mayor's Ledger & Spellbook": 'book_cover_conspiracy.png',
    };
    return covers[bookTitle] || 'book_cover_history.png'; // Fallback
}

function getAllPlayerItems() {
    const allItems = new Set();
    if (state.inventories) {
        for (const owner in state.inventories) {
            state.inventories[owner].items.forEach(item => allItems.add(item));
        }
    }
    return allItems;
}

function renderLibraries() {
    if (!libraryCollectionsContainer) return;
    const playerItems = getAllPlayerItems();

    libraryCollectionsContainer.innerHTML = LIBRARIES.map(library => {
        const stock = LIBRARY_STOCKS[library.stockKey] || [];
        const bookCardsHTML = stock.map(bookKey => {
            const book = BOOK_DESCRIPTIONS[bookKey];
            if (!book) return ''; 

            const isUnlocked = playerItems.has(bookKey) || state.debugMode;
            const cardClass = isUnlocked ? 'unlocked' : 'locked';
            
            let title = `Find at: ${library.name}`;
            if (isUnlocked) {
                if (playerItems.has(bookKey)) {
                    title = 'Click to read (In Party Inventory)';
                } else if (state.debugMode) {
                    title = 'Click to read (Debug Mode)';
                }
            }

            return `
                <div class="library-book-card ${cardClass}" data-book-key="${bookKey}" data-location="${library.name}" title="${title}">
                    <img src="${getBookCoverUrl(bookKey)}" alt="${bookKey} cover">
                    <div class="book-title">${bookKey}</div>
                </div>
            `;
        }).join('');

        return `
            <section class="library-section">
                <h3>${library.name}</h3>
                <div class="library-book-grid">
                    ${bookCardsHTML}
                </div>
            </section>
        `;
    }).join('');
}


// --- MODAL AND READER LOGIC ---

function renderCurrentView() {
    if (!currentBook) return;

    const hasFullText = !!bookDataMap[currentBook.title];
    openBookBtn.style.display = hasFullText ? 'block' : 'none';

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

        const fullBookData = bookDataMap[currentBook.title];
        const totalPages = fullBookData.pages.length;
        const leftPageIndex = currentPage;
        const rightPageIndex = currentPage + 1;

        pageLeft.textContent = fullBookData.pages[leftPageIndex] || '';
        pageRight.textContent = fullBookData.pages[rightPageIndex] || '';

        prevPageBtn.disabled = false;
        nextPageBtn.disabled = (rightPageIndex >= totalPages -1);

        pageIndicator.textContent = `Page ${leftPageIndex + 1}${totalPages > leftPageIndex + 1 ? ` - ${rightPageIndex + 1}` : ''} of ${totalPages}`;
    }
}

function showBookModal(bookKey) {
    const summaryData = BOOK_DESCRIPTIONS[bookKey];
    if (!bookModal || !summaryData) return;

    currentBook = { title: bookKey };
    
    bookDescriptionContainer.innerHTML = `
        <h5>Summary</h5>
        <p>${summaryData.summary}</p>
        <h5>Details</h5>
        <p><strong>Reading Time:</strong> ${summaryData.reading_time}</p>
        <p><strong>Pages:</strong> ${summaryData.pages}</p>
        <p><strong>Effect:</strong> <em>${summaryData.effect}</em></p>
    `;

    currentPage = -1;
    bookModalTitle.textContent = bookKey;
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
    
    if (direction === -1) {
        currentPage = Math.max(-1, currentPage - 2);
    } else {
        const fullBookData = bookDataMap[currentBook.title];
        if (currentPage === -1) {
             currentPage = 0;
        } else {
            currentPage = Math.min(fullBookData.pages.length - 2, currentPage + 2);
        }
    }
    renderCurrentView();
}


function setupEventListeners() {
    libraryCollectionsContainer.addEventListener('click', e => {
        const card = e.target.closest('.library-book-card');
        if (card) {
            const bookKey = card.dataset.bookKey;
            const playerItems = getAllPlayerItems();
            const hasBook = playerItems.has(bookKey);

            if (hasBook || state.debugMode) {
                playSound('click.mp3');
                showBookModal(bookKey);
            } else {
                playSound('wah.mp3', 0.5);
                alert(`This book is available at: ${card.dataset.location}`);
            }
        }
    });

    if (bookModal) {
        bookModal.addEventListener('click', (e) => {
            if (e.target === bookModal) hideBookModal();
        });
    }

    if (openBookBtn) {
        openBookBtn.addEventListener('click', () => {
            if (bookDataMap[currentBook.title]) {
                playSound('click.mp3');
                currentPage = 0;
                renderCurrentView();
            }
        });
    }

    if (bookModalClose) bookModalClose.addEventListener('click', hideBookModal);
    if (prevPageBtn) prevPageBtn.addEventListener('click', () => changePage(-1));
    if (nextPageBtn) nextPageBtn.addEventListener('click', () => changePage(1));
}

function init() {
    if (!libraryCollectionsContainer) return;
    loadState();
    renderLibraries();
    setupEventListeners();
}

init();