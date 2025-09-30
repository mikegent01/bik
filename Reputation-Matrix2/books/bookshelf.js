
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
import { BOOK_DATA as greatLibraries } from './books/great_libraries.js';
import { BOOK_DATA as warhammerHistories } from './books/warhammer_histories.js';
import { BOOK_DATA as codexPunchline } from './books/codex_punchline.js';
import { BOOK_DATA as mayorsLedger } from './books/mayors_ledger.js';


import { BOOK_DESCRIPTIONS } from './books/book_descriptions.js';

const bookshelfContainer = document.getElementById('bookshelf-main');
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
    "A Guide to the Great Libraries": greatLibraries,
    "The Liber Maleficus: A Study of the Ruinous Powers": warhammerHistories,
    "Codex: The Punchline": codexPunchline,
    "Mayor's Ledger & Spellbook": mayorsLedger,
};

function getBookCoverUrl(bookTitle) {
    if (bookTitle.includes("Diary")) return 'book_cover_diary.png';
    if (bookTitle.includes("History")) return 'book_cover_history.png';
    if (bookTitle.includes("Alchemy")) return 'book_cover_alchemy.png';
    if (bookTitle.includes("Tactics")) return 'book_cover_tactics.png';
    if (bookTitle.includes("Libraries")) return 'book_cover_library.png';
    if (bookTitle.includes("Liber Maleficus")) return 'book_cover_chaos.png';
    if (bookTitle.includes("Punchline")) return 'book_cover_jester.png';
    if (bookTitle.includes("Ledger")) return 'book_cover_conspiracy.png';
    return 'book_cover_history.png'; // default/fallback
}


loadState();

function init() {
    renderBookshelf();
    setupEventListeners();
}

function renderBookshelf() {
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
        if (!inventory) continue;

        const currentShelf = shelves[shelfIndex % shelves.length];
        
        const label = document.createElement('div');
        label.className = 'shelf-label';
        label.textContent = inventory.name;
        currentShelf.appendChild(label);

        if (inventory.items && inventory.items.length > 0) {
            inventory.items.forEach(item => {
                const bookData = bookDataMap[item];
                const bookEl = document.createElement('div');
                bookEl.className = 'book';
                bookEl.dataset.item = item;

                if (bookData) {
                    const userIsOwner = state.loggedInUser === ownerKey || ownerKey === 'shared';
                    const isGenericOrDebug = state.loggedInUser === 'generic' || state.debugMode;
                    
                    const ownerFactionMap = { 'bowser': 'koopa_troop', 'humpik': 'koopa_troop' };
                    const ownerFactionKey = ownerFactionMap[ownerKey];

                    let isLocked = false;
                    let lockMessage = '';

                    if (!userIsOwner && !isGenericOrDebug && ownerFactionKey) {
                        const reputation = state.finalReputations[state.loggedInUser]?.reputation[ownerFactionKey] || 0;
                        if (reputation < 25) {
                            isLocked = true;
                            let ownerName = LORE_DATA.characters[ownerKey]?.name || 'The owner';
                            lockMessage = `${ownerName} does not trust you enough to share this.`;
                        }
                    }

                    if (isLocked) {
                        bookEl.classList.add('locked');
                        bookEl.title = lockMessage;
                    } else {
                        bookEl.classList.add('interactive');
                        bookEl.dataset.bookKey = item;
                        bookEl.title = item;
                    }
                } else {
                    bookEl.title = item;
                }
                
                // Set background image based on title
                const coverUrl = getBookCoverUrl(item);
                if(coverUrl) {
                    bookEl.style.backgroundImage = `url('${coverUrl}')`;
                } else {
                    bookEl.style.backgroundImage = `url('book_cover_history.png')`; // Fallback
                }


                currentShelf.appendChild(bookEl);
            });
        } else {
            const noItems = document.createElement('p');
            noItems.className = 'no-items-text';
            noItems.textContent = '[Empty]';
            currentShelf.appendChild(noItems);
        }
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