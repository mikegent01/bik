
// Update imports
import './shop-effect-details.css';
import { WALLETS, CURRENCIES } from './currency.js';

function getConnectedWallet(){
    const id=state?.loggedInUser||'generic';
    return WALLETS[id]||WALLETS[id.replace('_miser','')]||null;
}
function walletSummary(){
    const w=getConnectedWallet();
    if(!w) return {label:'No connected wallet',details:'Log in through Waluipedia to load actual holdings'};
    const entries=Object.entries(w.currencies||{});
    return {label:entries.length?entries.map(([k,v])=>`${CURRENCIES[k]?.icon||'🪙'} ${Number(v).toLocaleString()} ${CURRENCIES[k]?.name||k}`).join(' · '):'Empty wallet',details:`${w.name||state.loggedInUser} · recorded holdings only`};
}

import {
    STOCK_TYPES,
    TIME_PERIODS,
    getCurrentTimePeriod,
    isNightTime,
    getDailyCrazes,
    getDailyTopSellers,
    getItemAvailability,
    getWarioStatus,
    getFormattedGameDateTime,
    getItemCrazeMultiplier
} from '../../../shop-stock.js';

import { CURRENT_GAME_DATE, CURRENT_GAME_TIME, CALENDAR_DATA } from '../../../data/world/calendar.js';
import {state } from '../../core/state.js'
<<<<<<< HEAD
import { LORE_DATA } from '../../../lore.js';
=======
import { LORE_DATA } from '../../core/lore.js';
>>>>>>> 0357b6f (Move remaining shared modules into core)
import { REWARDS_DATA } from './quests/quests-main.js';
import { playSound } from '../../core/common.js';
import { getAllToadsData, getPreCalculatedFactionStats } from './liberated-toads-system.js';
import {
    renderDurabilityBadge,
    renderLevelRequirement,
    calculateDurability,
    addOwnedItem,
    injectDurabilityStyles
} from './shop-durability.js';

import {calculateFactionBonuses ,SHIPPING_METHODS,getFactionUpgrades ,BASE_MEMBERSHIP_TIERS,getAvailableShipping ,SHOP_CATEGORIES,SHOP_ITEMS,VENDORS ,getFreeShipping  ,getNextTier,getRequiredTierForItem  ,getAllShopItems,getShopStats,  } from '../../../data/commerce/index.js'
// === NEW: Per-player membership tracking ===
let searchQuery = '';
let showAllItems = false;

let activePlayer = null; // Current player using the shop
let partyPlayers = []; // All party member keys

let currentCategory = 'all';
let currentTab = 'shop';
let cart = [];
let selectedShipping = 'standard';
let cartQuantities = {}; // Track quantities for bulk orders
const PARTY_MAX_LEVEL = 6;
let pendingOrders = JSON.parse(localStorage.getItem('xp_pending_orders') || '[]');
let approvedPurchases = [];
let spentFactionXP = parseInt(localStorage.getItem('faction_xp_spent') || '0');
// Add new state variables after existing ones

let lifetimeSpent = parseInt(localStorage.getItem('xp_lifetime_spent') || '0');

// Add lazy loading configuration
const ITEMS_PER_PAGE = 20;
let currentPage = 0;
let filteredItems = [];
let isLoadingMore = false;

// Faction data - loaded once on init
let factionStats = null;
let allToads = [];
function canPurchaseAtLevel(item, partyLevel = PARTY_MAX_LEVEL) {
    if (!item.levelRequirement) return true;
    return partyLevel >= item.levelRequirement;
}
// Get active player from state.js



// === PREDEFINED MEMBERSHIPS FOR MAIN CHARACTERS ===
// These are the canonical party members from state.js

const DEFAULT_PLAYER_MEMBERSHIPS = {
    archie: { lifetimeSpent: 0, pendingSpent: 0 },
    markop: { lifetimeSpent: 0, pendingSpent: 0 },
    hjumpik: { lifetimeSpent: 0, pendingSpent: 0 },
    bowser: { lifetimeSpent: 0, pendingSpent: 0 },
    remi: { lifetimeSpent: 0, pendingSpent: 0 },
    generic: { lifetimeSpent: 0, pendingSpent: 0 }
};

// Initialize with defaults, then load saved data on top
let playerMemberships = structuredClone(DEFAULT_PLAYER_MEMBERSHIPS);


function getActivePlayer() {
    const player = state?.loggedInUser || 'generic';
    return DEFAULT_PLAYER_MEMBERSHIPS[player] ? player : 'generic';
}

function getPartyMembers() {
    return ['archie', 'markop', 'hjumpik', 'bowser', 'remi'];
}

function formatPlayerName(playerKey) {
    const names = {
        archie: 'Archie Miser',
        markop: 'Markop Judi',
        hjumpik: 'hjumpik',
        bowser: 'Bowser',
        remi: 'FNG Remi',
        generic: 'Guest'
    };
    return names[playerKey] || playerKey;
}

// THIS IS THE KEY FUNCTION - Calculate spending from approvedPurchases
function recalculateAllMemberships() {
    console.log('🔄 Recalculating all memberships...');
    console.log('📦 approvedPurchases count:', approvedPurchases?.length || 0);

    // Reset all to 0
    for (const playerKey in playerMemberships) {
        playerMemberships[playerKey].lifetimeSpent = 0;
    }

    // If no purchases, just set tiers and return
    if (!approvedPurchases || approvedPurchases.length === 0) {
        console.log('⚠️ No approved purchases found');
        for (const playerKey in playerMemberships) {
            playerMemberships[playerKey].tier = createDefaultTier();
        }
        return;
    }

    // Log each purchase for debugging
    console.log('📋 Processing purchases:');
    approvedPurchases.forEach((purchase, index) => {
        console.log(`  [${index}] ${purchase.itemName || purchase.itemId}:`);
        console.log(`      playerKey: "${purchase.playerKey}"`);
        console.log(`      isFaction: ${purchase.isFaction}`);
        console.log(`      price: ${purchase.price}`);
        console.log(`      quantity: ${purchase.quantity || 1}`);

        // Skip faction purchases
        if (purchase.isFaction === true) {
            console.log(`      ❌ SKIPPED (faction purchase)`);
            return;
        }

        // Must have playerKey
        const playerKey = purchase.playerKey;
        if (!playerKey) {
            console.log(`      ❌ SKIPPED (no playerKey)`);
            return;
        }

        // Must be a known player
        if (!playerMemberships[playerKey]) {
            console.log(`      ❌ SKIPPED (unknown player: ${playerKey})`);
            return;
        }

        // Calculate amount
        const quantity = parseInt(purchase.quantity) || 1;
        const price = parseInt(purchase.price) || 0;
        const amount = price * quantity;

        // Add to player
        playerMemberships[playerKey].lifetimeSpent += amount;
        console.log(`      ✅ ADDED ${amount} XP to ${playerKey} (total: ${playerMemberships[playerKey].lifetimeSpent})`);
    });

    // Now calculate tiers for everyone
    console.log('📊 Final membership levels:');
    for (const playerKey in playerMemberships) {
        const spent = playerMemberships[playerKey].lifetimeSpent;
        const tier = getTierFromXP(spent) || createDefaultTier();
        playerMemberships[playerKey].tier = tier;
        console.log(`  ${playerKey}: ${spent} XP → ${tier.name}`);
    }
}



// Format player name using LORE_

// Create a guaranteed valid bronze tier
function createDefaultTier() {
    return {
        id: 'bronze',
        name: 'Bronze Bargain Hunter',
        icon: '🥉',
        color: '#cd7f32',
        threshold: 0,
        discount: 0,
        maxPrice: 50000,
        maxLevel: 6,
        index: 0,
        perks: ['Access to basic items', 'Standard shipping only']
    };
}

// Load per-player membership data
function loadPlayerMemberships() {
    // Start with defaults for all known players
    playerMemberships = structuredClone(DEFAULT_PLAYER_MEMBERSHIPS);

    // Try to load saved data
    try {
        const saved = localStorage.getItem('player_memberships');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Merge saved data with defaults
            for (const playerKey in parsed) {
                if (playerMemberships[playerKey]) {
                    playerMemberships[playerKey].lifetimeSpent = parsed[playerKey].lifetimeSpent || 0;
                    playerMemberships[playerKey].pendingSpent = parsed[playerKey].pendingSpent || 0;
                }
            }
        }
    } catch (e) {
        console.warn('Could not load saved memberships:', e);
    }

    // Calculate and assign tiers for ALL players
    for (const playerKey in playerMemberships) {
        const spent = playerMemberships[playerKey].lifetimeSpent || 0;
        const tier = getTierFromXP(spent);
        playerMemberships[playerKey].tier = tier || createDefaultTier();
    }

    console.log('👑 Memberships initialized:', Object.keys(playerMemberships).map(k =>
        `${k}: ${playerMemberships[k].tier?.name || 'Bronze'}`
    ));
}

function savePlayerMemberships() {
    try {
        // Only save the data, not the tier objects (those are calculated)
        const toSave = {};
        for (const playerKey in playerMemberships) {
            toSave[playerKey] = {
                lifetimeSpent: playerMemberships[playerKey].lifetimeSpent || 0,
                pendingSpent: playerMemberships[playerKey].pendingSpent || 0
            };
        }
        localStorage.setItem('player_memberships', JSON.stringify(toSave));
    } catch (e) {
        console.warn('Could not save memberships:', e);
    }
}

// Get active player's membership - GUARANTEED to return valid tier


function calculatePlayerSpendingFromPurchases() {
    const playerSpending = {};

    // Initialize all known players to 0
    Object.keys(DEFAULT_PLAYER_MEMBERSHIPS).forEach(key => {
        playerSpending[key] = 0;
    });

    // Sum up approved purchases per player
    approvedPurchases.forEach(purchase => {
        // Skip faction purchases - they don't count toward individual membership
        if (purchase.isFaction) {
            console.log(`  ⏭️ Skipping faction purchase: ${purchase.itemName}`);
            return;
        }

        const playerKey = purchase.playerKey;
        if (!playerKey) {
            console.log(`  ⚠️ Purchase missing playerKey: ${purchase.itemName}`);
            return;
        }

        const quantity = purchase.quantity || 1;
        const amount = purchase.price * quantity;

        if (playerSpending[playerKey] === undefined) {
            playerSpending[playerKey] = 0;
        }
        playerSpending[playerKey] += amount;

        console.log(`  💰 ${playerKey}: +${amount} XP (${purchase.itemName} x${quantity})`);
    });

    console.log('📊 Final player spending:', playerSpending);
    return playerSpending;
}
function initializePlayerMemberships() {
    console.log('🔧 Initializing player memberships...');

    // Start with defaults
    playerMemberships = structuredClone(DEFAULT_PLAYER_MEMBERSHIPS);

    // Calculate spending from approved purchases
    const playerSpending = calculatePlayerSpendingFromPurchases();

    // Apply spending and calculate tiers
    for (const playerKey in playerMemberships) {
        const spent = playerSpending[playerKey] || 0;
        playerMemberships[playerKey].lifetimeSpent = spent;

        // Calculate tier from spending
        const tier = getTierFromXP(spent);
        playerMemberships[playerKey].tier = tier || createDefaultTier();

        console.log(`  👤 ${playerKey}: ${spent} XP spent → ${playerMemberships[playerKey].tier.name}`);
    }

    console.log('✅ Player memberships initialized');
}





function getActiveMembership() {
    const activePlayer = getActivePlayer();

    // Ensure player exists
    if (!playerMemberships[activePlayer]) {
        console.warn(`Player ${activePlayer} not found in memberships, creating default`);
        playerMemberships[activePlayer] = {
            lifetimeSpent: 0,
            pendingSpent: 0,
            tier: createDefaultTier()
        };
    }

    // Ensure tier exists
    if (!playerMemberships[activePlayer].tier) {
        const spent = playerMemberships[activePlayer].lifetimeSpent || 0;
        playerMemberships[activePlayer].tier = getTierFromXP(spent) || createDefaultTier();
    }

    return playerMemberships[activePlayer].tier;
}

// Get player's lifetime spent
function getPlayerLifetimeSpent(playerKey) {
    return playerMemberships[playerKey]?.lifetimeSpent || 0;
}


// Add XP spent to a player's membership
function addPlayerSpending(playerKey, amount) {
    if (!playerMemberships[playerKey]) {
        playerMemberships[playerKey] = { lifetimeSpent: 0, pendingSpent: 0 };
    }

    const oldTier = getTierFromXP(playerMemberships[playerKey].lifetimeSpent || 0);
    playerMemberships[playerKey].lifetimeSpent = (playerMemberships[playerKey].lifetimeSpent || 0) + amount;
    const newTier = getTierFromXP(playerMemberships[playerKey].lifetimeSpent);

    playerMemberships[playerKey].tier = newTier;
    savePlayerMemberships();

    if (newTier.index > oldTier.index) {
        return { tierUp: true, oldTier, newTier };
    }
    return { tierUp: false };
}


function renderLevelBadge(item) {
    if (!item.levelRequirement) return '';

    const canUse = canPurchaseAtLevel(item);
    const levelClass = canUse ? 'level-ok' : 'level-locked';
    const icon = canUse ? '⭐' : '🔒';

    return `
        <div class="level-badge ${levelClass}"
             title="${canUse ? 'Your party can use this!' : `Requires Level ${item.levelRequirement}. Party is Level ${PARTY_MAX_LEVEL}`}">
            <span class="level-icon">${icon}</span>
            <span class="level-text">Lvl ${item.levelRequirement}+</span>
            ${!canUse ? `<span class="level-current">(Party: ${PARTY_MAX_LEVEL})</span>` : ''}
        </div>
    `;
}

// --- Bulk Order Helpers ---

function getCartQuantity(itemId) {
    return cartQuantities[itemId] || 0;
}

function setCartQuantity(itemId, quantity) {
    if (quantity <= 0) {
        delete cartQuantities[itemId];
        cart = cart.filter(c => c.id !== itemId);
    } else {
        cartQuantities[itemId] = quantity;
        // Update cart entry
        const existingIndex = cart.findIndex(c => c.id === itemId);
        const item = SHOP_ITEMS[itemId];
        if (item) {
            const bulkPrice = calculateBulkPrice(item, quantity);
            const cartEntry = {
                ...item,
                quantity: quantity,
                totalPrice: bulkPrice,
                pricePerUnit: Math.ceil(bulkPrice / quantity)
            };
            if (existingIndex >= 0) {
                cart[existingIndex] = cartEntry;
            } else {
                cart.push(cartEntry);
            }
        }
    }
}

function getMaxBulkQuantity(item) {
    if (!canBulkOrder(item)) return 1;

    // Check remaining stock
    const approvedCount = approvedPurchases.filter(p => p.itemId === item.id).length;
    const pendingCount = pendingOrders.reduce((sum, o) =>
        sum + o.items.filter(i => i.id === item.id).reduce((s, i) => s + (i.quantity || 1), 0), 0);
    const remainingStock = item.stock - approvedCount - pendingCount;

    return Math.min(BULK_PRICING.maxQuantity, remainingStock);
}


function injectShopControlStyles() {
    if (document.getElementById('shop-control-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'shop-control-styles';
    styles.textContent = `
        /* Shop Controls Container */
        .shop-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            padding: 15px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 12px;
            margin-bottom: 15px;
            flex-wrap: wrap;
        }

        /* Search Container */
        .search-container {
            position: relative;
            flex: 1;
            min-width: 200px;
            max-width: 400px;
        }

        .shop-search-input {
            width: 100%;
            padding: 12px 40px 12px 16px;
            font-size: 14px;
            border: 2px solid #444;
            border-radius: 25px;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            transition: all 0.3s ease;
        }

        .shop-search-input:focus {
            outline: none;
            border-color: #ffd700;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
        }

        .shop-search-input::placeholder {
            color: #888;
        }

        .search-clear-btn {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            background: #666;
            border: none;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
        }

        .search-clear-btn:hover {
            background: #ff4444;
        }

        /* Load Controls */
        .load-controls {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .load-all-btn {
            padding: 10px 20px;
            font-size: 14px;
            font-weight: bold;
            border: 2px solid #ffd700;
            border-radius: 20px;
            background: transparent;
            color: #ffd700;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .load-all-btn:hover {
            background: rgba(255, 215, 0, 0.2);
        }

        .load-all-btn.active {
            background: #ffd700;
            color: black;
        }

        .item-count-display {
            font-size: 14px;
            color: #aaa;
            padding: 8px 12px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
        }

        /* Category Tabs */
        .category-tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        /* No Items State */
        .no-items {
            grid-column: 1 / -1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
            text-align: center;
        }

        .no-items .empty-icon {
            font-size: 64px;
            margin-bottom: 15px;
            opacity: 0.5;
        }

        .no-items p {
            font-size: 18px;
            color: #888;
            margin-bottom: 15px;
        }

        .clear-search-btn {
            padding: 10px 20px;
            font-size: 14px;
            border: 2px solid #ffd700;
            border-radius: 20px;
            background: transparent;
            color: #ffd700;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .clear-search-btn:hover {
            background: rgba(255, 215, 0, 0.2);
        }

        /* Search Highlight */
        .item-name mark {
            background: #ffd700;
            color: black;
            padding: 0 2px;
            border-radius: 2px;
        }

        /* Load More Indicator */
        .load-more-indicator {
            grid-column: 1 / -1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px;
            gap: 8px;
        }

        .load-more-indicator .loading-text {
            color: #888;
            font-size: 14px;
        }

        .load-more-indicator .items-remaining {
            color: #666;
            font-size: 12px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .shop-controls {
                flex-direction: column;
                align-items: stretch;
            }

            .search-container {
                max-width: none;
            }

            .load-controls {
                justify-content: space-between;
            }
        }
    `;

    document.head.appendChild(styles);
}
function renderMembershipRequirementBadge(item, requiredTier) {
    if (!requiredTier || requiredTier.id === 'bronze') return '';

    const membership = getActiveMembership();
    const hasAccess = canPurchaseWithMembership(item, membership).allowed;

    return `
        <div class="membership-badge ${hasAccess ? 'unlocked' : 'locked'}"
             style="--tier-color: ${requiredTier.color}"
             title="${hasAccess ? 'You can purchase this!' : `Requires ${requiredTier.name}`}">
            <span class="tier-icon">${requiredTier.icon}</span>
            <span class="tier-text">${hasAccess ? '✓' : requiredTier.name}</span>
        </div>
    `;
}
function calculateBulkPriceWithDiscount(item, quantity) {
    const baseTotal = calculateBulkPrice(item, quantity);
    const discountedTotal = Math.ceil(baseTotal * (1 - getActiveMembership().discount / 100));
    return discountedTotal;
}

// Update renderBulkControls to accept effective price
function renderBulkControls(item, currentQty, maxQty, canAfford, effectivePrice = null) {
    const price = effectivePrice || item.price;

    if (!canBulkOrder(item) || maxQty <= 1) {
        return `
            <button class="add-to-cart-btn"
                    ${(!canAfford || maxQty <= 0) ? 'disabled' : ''}
                    data-id="${item.id}">
                ${currentQty > 0 ? '✓ In Cart' : '🛒 Add to Cart'}
            </button>
        `;
    }

    const nextUnitPrice = currentQty < maxQty ?
        Math.ceil(price * (1 + (currentQty * (BULK_PRICING.priceIncreasePerUnit[item.rarity] || 0.05)))) : 0;

    return `
        <div class="bulk-controls" data-id="${item.id}">
            <div class="bulk-info">
                <span class="bulk-label">📦 Bulk Order Available</span>
                <span class="bulk-hint">+${Math.round((BULK_PRICING.priceIncreasePerUnit[item.rarity] || 0.05) * 100)}% per extra unit</span>
            </div>
            <div class="bulk-quantity-row">
                <button class="qty-btn minus" ${currentQty <= 0 ? 'disabled' : ''}>−</button>
                <span class="qty-display">${currentQty}</span>
                <button class="qty-btn plus" ${currentQty >= maxQty || !canAfford ? 'disabled' : ''}>+</button>
                <span class="qty-max">/ ${maxQty}</span>
            </div>
            ${currentQty > 0 ? `
                <div class="bulk-total">
                    <span>Total: ${calculateBulkPriceWithDiscount(item, currentQty).toLocaleString()} XP</span>
                    ${currentQty > 1 ? `<span class="bulk-savings-note">(${currentQty} × ~${Math.ceil(calculateBulkPriceWithDiscount(item, currentQty) / currentQty)} avg)</span>` : ''}
                </div>
            ` : `
                <div class="bulk-next-price">
                    <span>First unit: ${price.toLocaleString()} XP</span>
                </div>
            `}
            ${currentQty < maxQty && currentQty > 0 ? `
                <div class="bulk-next-unit">
                    <span class="next-label">Next unit:</span>
                    <span class="next-price">${nextUnitPrice.toLocaleString()} XP (+${Math.round(currentQty * (BULK_PRICING.priceIncreasePerUnit[item.rarity] || 0.05) * 100)}%)</span>
                </div>
            ` : ''}
        </div>
    `;
}



// Load party data - adapt this to your player system
function loadPartyData() {
    // Example: Load from your existing state/data system
    // Adapt these to match your actual player data source
    try {
        // Try to get from your existing system
        if (typeof window.getPartyMembers === 'function') {
            partyPlayers = window.getPartyMembers();
        } else {
            // Fallback: check localStorage or use defaults
            partyPlayers = JSON.parse(localStorage.getItem('party_members') || '[]');

            // If still empty, create default party
            if (partyPlayers.length === 0) {
                partyPlayers = ['player_1']; // At minimum, one player
            }
        }

        activePlayer = partyPlayers[0];
        console.log('👥 Party loaded:', partyPlayers);
    } catch (e) {
        console.warn('Could not load party data, using defaults');
        partyPlayers = ['player_1'];
        activePlayer = 'player_1';
    }
}


// Replace old getActiveMembership()references with getActiveMembership()
// REMOVE these old variables:
// let getActiveMembership()= null;
// let lifetimeSpent = parseInt(localStorage.getItem('xp_lifetime_spent') || '0');

// === Up
function renderShopHeader() {
    const status = getXPStatus();
    const container = document.getElementById('shop-header');
    if (!container) return;

    const activePlayer = getActivePlayer();
    const membership = getActiveMembership();
    const playerSpent = getPlayerLifetimeSpent(activePlayer);
    const nextTier = getNextTier(membership.index);
    const party = getPartyMembers();

    const themeClass = currentTab === 'faction' ? 'faction-theme' : 'shop-theme';
    const totalCartItems = cart.reduce((sum, c) => sum + (c.quantity || 1), 0);
    const cartTotalPrice = cart.reduce((sum, c) => sum + (c.totalPrice || c.price), 0);

    // Calculate progress to next tier
    const currentThreshold = membership.threshold || 0;
    const nextThreshold = nextTier?.threshold || currentThreshold + 1;
    const progress = playerSpent - currentThreshold;
    const needed = Math.max(1, nextThreshold - currentThreshold);
    const progressPercent = Math.min(100, Math.floor((progress / needed) * 100));
    const xpToNext = Math.max(0, nextThreshold - playerSpent);

    container.className = `shop-header ${themeClass}`;

    // Check if generic user (no player selector needed)
    const isGeneric = activePlayer === 'generic';

    container.innerHTML = `
        <div class="header-content">
            <div class="shop-title">
                <span class="shop-logo">${currentTab === 'faction' ? '🏰' : '🏪'}</span>
                <div>
                    <h1>${currentTab === 'faction' ? 'FACTION ARMORY' : "WARIO'S WAREHOUSE"}</h1>
                    <p class="shop-subtitle">
                        ${currentTab === 'faction'
                            ? `Liberated Toads HQ • ${factionStats?.total || 0} Members`
                            : '"If it\'s shiny, I\'m selling it!" - Wario'}
                    </p>
                </div>
            </div>

            ${!isGeneric ? `
                <!-- Current Player Display -->
                <div class="current-player-display">
                    <span class="player-label">Logged in as:</span>
                    <span class="player-name">${formatPlayerName(activePlayer)}</span>
                </div>
            ` : `
                <div class="current-player-display generic">
                    <span class="player-name">👤 Guest Mode · <a href="battlefield.html#/login">Log in to load wallet</a></span>
                </div>
            `}

            <div class="membership-display" id="membership-badge"
                 style="--tier-color: ${membership.color || '#cd7f32'}">
                <span class="membership-icon">${membership.icon || '🥉'}</span>
                <div class="membership-info">
                    <span class="membership-name">${membership.name || 'Bronze'}</span>
                    <span class="membership-discount">
                        ${(membership.discount || 0) > 0 ? `${membership.discount}% OFF` : 'No Discount'}
                    </span>
                    <span class="membership-spent">${playerSpent.toLocaleString()} XP spent</span>
                </div>
                <div class="tier-progress-mini">
                    <div class="tier-progress-bar" style="width: ${progressPercent}%"></div>
                </div>
                <span class="tier-progress-text">${xpToNext.toLocaleString()} to ${nextTier?.icon || '🥈'}</span>
            </div>

            <div class="party-level-display">
                <span class="party-level-icon">⭐</span>
                <div class="party-level-info">
                    <span class="party-level-value">Level ${PARTY_MAX_LEVEL}</span>
                    <span class="party-level-label">Party Max</span>
                </div>
            </div>

            <div class="xp-wallet actual-wallet-display">
                <div class="wallet-stat total">
                    <span class="wallet-value">💳</span>
                    <span class="wallet-label">Actual Wallet</span>
                </div>
                <div class="wallet-stat available wallet-holdings-stat">
                    <span class="wallet-value">${walletSummary().label}</span>
                    <span class="wallet-label">Recorded Holdings</span>
                </div>
                <div class="wallet-wallet-note">${walletSummary().details}</div>
            </div>

            <div class="cart-summary" id="cart-summary-btn">
                <span class="cart-icon">🛒</span>
                <span class="cart-count">${totalCartItems}</span>
                <span class="cart-total">${cartTotalPrice.toLocaleString()} XP</span>
            </div>
        </div>

        <div class="main-tabs">
            <button class="main-tab ${currentTab === 'shop' ? 'active' : ''}" data-tab="shop">
                💎 Player Shop
            </button>
            <button class="main-tab ${currentTab === 'faction' ? 'active' : ''}" data-tab="faction">
                🍄 Faction Armory
            </button>
            <button class="main-tab ${currentTab === 'membership' ? 'active' : ''}" data-tab="membership">
                ${membership.icon || '🥉'} Membership
            </button>
        </div>
    `;

    // Membership badge click
    container.querySelector('#membership-badge')?.addEventListener('click', () => {
        currentTab = 'membership';
        renderShopHeader();
        renderMainContent();
        playSound('../../../assets/audio/ui/click.mp3');
    });

    // Tab handlers
    container.querySelectorAll('.main-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const newTab = tab.dataset.tab;
            if (newTab === currentTab) return;

            if (cart.length > 0 && newTab !== 'membership') {
                if (!confirm('Switching tabs will clear your cart. Continue?')) return;
                cart = [];
                cartQuantities = {};
            }

            currentTab = newTab;
            currentPage = 0;
            renderShopHeader();
            renderMainContent();
            playSound('../../../assets/audio/ui/click.mp3');
        });
    });
}

// Helper to format player key into display name
function renderMembershipTab() {
    const container = document.getElementById('membership-content');
    if (!container) return;

    const activePlayer = getActivePlayer();
    const membership = getActiveMembership();
    const playerSpent = getPlayerLifetimeSpent(activePlayer);
    const nextTier = getNextTier(membership.index);
    const party = getPartyMembers();

    const currentThreshold = membership.threshold || 0;
    const nextThreshold = nextTier?.threshold || currentThreshold + 1;
    const progress = playerSpent - currentThreshold;
    const needed = Math.max(1, nextThreshold - currentThreshold);
    const progressPercent = Math.min(100, Math.floor((progress / needed) * 100));
    const xpToNext = Math.max(0, nextThreshold - playerSpent);

    // Generate preview of next few tiers
    const upcomingTiers = [];
    for (let i = membership.index + 1; i <= membership.index + 5 && i < 50; i++) {
        upcomingTiers.push(generateTier(i));
    }

    const isGeneric = activePlayer === 'generic';

    container.innerHTML = `
        <div class="membership-tab-content">
            <!-- Active Player Section -->
            <div class="membership-hero" style="--tier-color: ${membership.color || '#cd7f32'}">
                <div class="membership-player-name">
                    ${isGeneric ? '👤 Guest Account' : formatPlayerName(activePlayer)}
                </div>
                <div class="membership-hero-icon">${membership.icon || '🥉'}</div>
                <h2>${membership.name || 'Bronze Bargain Hunter'}</h2>

                <div class="membership-stats">
                    <div class="membership-stat">
                        <span class="stat-value">${playerSpent.toLocaleString()}</span>
                        <span class="stat-label">XP Lifetime Spent</span>
                    </div>
                    <div class="membership-stat">
                        <span class="stat-value">${membership.discount || 0}%</span>
                        <span class="stat-label">Discount</span>
                    </div>
                    <div class="membership-stat">
                        <span class="stat-value">${membership.maxPrice === Infinity ? '∞' : (membership.maxPrice || 50000).toLocaleString()}</span>
                        <span class="stat-label">Max Item Price</span>
                    </div>
                    <div class="membership-stat">
                        <span class="stat-value">Lv ${membership.maxLevel || 6}</span>
                        <span class="stat-label">Max Item Level</span>
                    </div>
                </div>

                <div class="tier-progress-large">
                    <div class="progress-header">
                        <span>Progress to ${nextTier?.icon || '🥈'} ${nextTier?.name || 'Silver'}</span>
                        <span>${progressPercent}%</span>
                    </div>
                    <div class="progress-bar-large">
                        <div class="progress-fill" style="width: ${progressPercent}%; background: ${nextTier?.color || '#c0c0c0'}"></div>
                    </div>
                    <div class="progress-footer">
                        <span>${playerSpent.toLocaleString()} / ${nextThreshold.toLocaleString()} XP</span>
                        <span>${xpToNext.toLocaleString()} XP to go</span>
                    </div>
                </div>
            </div>

            ${!isGeneric ? `
                <!-- All Party Members -->
                <div class="membership-section">
                    <h3>👥 Party Memberships</h3>
                    <div class="party-memberships-grid">
                        ${party.map(playerKey => {
                            const pMem = playerMemberships[playerKey] || { lifetimeSpent: 0 };
                            const pTier = pMem.tier || getTierFromXP(0);
                            const pNextTier = getNextTier(pTier.index);
                            const pSpent = pMem.lifetimeSpent || 0;
                            const pThreshold = pTier.threshold || 0;
                            const pNextThreshold = pNextTier?.threshold || pThreshold + 1;
                            const pProgress = Math.min(100, Math.floor(
                                ((pSpent - pThreshold) / Math.max(1, pNextThreshold - pThreshold)) * 100
                            ));
                            const isActive = playerKey === activePlayer;

                            return `
                                <div class="party-member-card ${isActive ? 'active' : ''}"
                                     style="--tier-color: ${pTier.color || '#cd7f32'}">
                                    <div class="member-header">
                                        <span class="member-icon">${pTier.icon || '🥉'}</span>
                                        <div class="member-info">
                                            <span class="member-name">${formatPlayerName(playerKey)}</span>
                                            <span class="member-tier">${pTier.name || 'Bronze'}</span>
                                        </div>
                                        ${isActive ? '<span class="active-badge">YOU</span>' : ''}
                                    </div>
                                    <div class="member-stats">
                                        <span>${pSpent.toLocaleString()} XP spent</span>
                                        <span>${pTier.discount || 0}% discount</span>
                                    </div>
                                    <div class="member-progress">
                                        <div class="member-progress-bar" style="width: ${pProgress}%"></div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            <!-- Your Perks -->
            <div class="membership-section">
                <h3>🎁 ${isGeneric ? 'Current' : formatPlayerName(activePlayer) + "'s"} Perks</h3>
                <div class="perks-grid">
                    ${(membership.perks || ['Access to basic items', 'Standard shipping only']).map(perk => `
                        <div class="perk-item active">
                            <span class="perk-check">✅</span>
                            <span class="perk-text">${perk}</span>
                        </div>
                    `).join('')}
                </div>
                ${membership.warioNote ? `
                    <div class="wario-note">
                        <span class="wario-face">😈</span>
                        <p>"${membership.warioNote}"</p>
                    </div>
                ` : ''}
            </div>

            <!-- Base Tiers -->
            <div class="membership-section">
                <h3>📊 Named Tiers</h3>
                <div class="tiers-grid">
                    ${BASE_MEMBERSHIP_TIERS.map((tier, idx) => {
                        const isCurrent = membership.index === idx;
                        const isUnlocked = membership.index >= idx;

                        return `
                            <div class="tier-card ${isCurrent ? 'current' : ''} ${isUnlocked ? 'unlocked' : 'locked'}"
                                 style="--tier-color: ${tier.color}">
                                <div class="tier-header">
                                    <span class="tier-icon">${tier.icon}</span>
                                    <span class="tier-name">${tier.name}</span>
                                    ${isCurrent ? '<span class="current-badge">YOU</span>' : ''}
                                    ${!isUnlocked ? '<span class="locked-badge">🔒</span>' : ''}
                                </div>
                                <div class="tier-requirements">
                                    <span>${tier.threshold.toLocaleString()} XP spent</span>
                                </div>
                                <div class="tier-limits">
                                    <div class="limit-item">
                                        <span class="limit-label">Discount:</span>
                                        <span class="limit-value">${tier.discount}%</span>
                                    </div>
                                    <div class="limit-item">
                                        <span class="limit-label">Max Price:</span>
                                        <span class="limit-value">${tier.maxPrice === Infinity ? '∞' : tier.maxPrice.toLocaleString()}</span>
                                    </div>
                                    <div class="limit-item">
                                        <span class="limit-label">Max Level:</span>
                                        <span class="limit-value">${tier.maxLevel}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- Upcoming Letter Tiers (if VIP+) -->
            ${membership.index >= 4 ? `
                <div class="membership-section">
                    <h3>🔤 Upcoming Letter Tiers</h3>
                    <p class="tier-info-text">After Wario's Inner Circle, tiers continue infinitely: A, B, C... Z, AA, AB...</p>
                    <div class="tiers-grid letter-tiers">
                        ${upcomingTiers.map(tier => `
                            <div class="tier-card upcoming" style="--tier-color: ${tier.color}">
                                <div class="tier-header">
                                    <span class="tier-icon">${tier.icon}</span>
                                    <span class="tier-name">${tier.name}</span>
                                </div>
                                <div class="tier-requirements">
                                    <span>${tier.threshold.toLocaleString()} XP</span>
                                </div>
                                <div class="tier-limits">
                                    <span>Discount: ${tier.discount}%</span>
                                    <span>Max Lv: ${tier.maxLevel}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <p class="wario-warning-text">
                        ⚠️ Wario's Warning: "Discount caps at 25%! I ALWAYS make money! WAH HA HA!"
                    </p>
                </div>
            ` : `
                <div class="membership-section">
                    <h3>🔮 Beyond Wario's Inner Circle</h3>
                    <p class="tier-info-text">
                        Reach 1,000,000 XP spent to unlock infinite letter tiers!
                    </p>
                </div>
            `}
        </div>
    `;
}


// === Update completePurchase to track per-player spending ===
function completePurchase() {
    if (cart.length === 0) return;

    const status = getXPStatus();
    const isFaction = currentTab === 'faction';
    const membership = getActiveMembership();

    // Calculate cart with membership discount
    let cartSubtotal = 0;
    cart.forEach(item => {
        const basePrice = item.totalPrice || item.price;
        const discountedPrice = Math.ceil(basePrice * (1 - membership.discount / 100));
        cartSubtotal += discountedPrice;
    });

    const freeShippingMethods = getFreeShipping(membership);
    const shippingCost = isFaction ? 0 : (
        freeShippingMethods.includes(selectedShipping) ? 0 :
        (SHIPPING_METHODS[selectedShipping.toUpperCase()]?.cost || 0)
    );

    const cartTotal = cartSubtotal + shippingCost;

    if (status.available < cartTotal) {
        showNotification('Insufficient XP!', 'error');
        return;
    }

    const totalItems = cart.reduce((sum, c) => sum + (c.quantity || 1), 0);

    if (isFaction) {
        // Faction purchase - doesn't count toward individual membership
        if (confirm(`Confirm spending ${cartTotal.toLocaleString()} Faction XP on upgrades?`)) {
            spentFactionXP += cartTotal;
            localStorage.setItem('faction_xp_spent', spentFactionXP.toString());

            const owned = getPurchasedFactionUpgrades();
            cart.forEach(item => {
                if (!owned.includes(item.id)) {
                    owned.push(item.id);
                    addOwnedItem(item, generateOrderId());
                }
            });
            localStorage.setItem('faction_items_owned', JSON.stringify(owned));

            playSound('../../../assets/audio/ui/confirm.mp3');
            showNotification('Faction upgrades acquired!', 'success');

            cart = [];
            cartQuantities = {};
            renderShopHeader();
            renderFactionTab();
            renderCart();
        }
    } else {
        // Player purchase - track for membership
        const shippingInfo = SHIPPING_METHODS[selectedShipping.toUpperCase()];
        const orderId = generateOrderId();

        const order = {
            orderId: orderId,
            playerKey: activePlayer, // Track which player made the order
            items: cart.map(item => {
                const durability = calculateDurability(item);
                const basePrice = item.totalPrice || item.price;
                const discountedPrice = Math.ceil(basePrice * (1 - membership.discount / 100));

                return {
                    id: item.id,
                    name: item.name,
                    basePrice: item.price,
                    quantity: item.quantity || 1,
                    totalPrice: discountedPrice,
                    membershipDiscount: membership.discount,
                    icon: item.icon,
                    vendor: item.vendor,
                    category: item.category,
                    rarity: item.rarity,
                    durability: {
                        maxUses: durability.maxUses,
                        isPermanent: durability.isPermanent,
                        isSingleUse: durability.isSingleUse,
                        renewalCost: durability.renewalCost
                    }
                };
            }),
            itemCount: totalItems,
            subtotal: cartSubtotal,
            membershipTier: membership.name,
            membershipDiscount: membership.discount,
            shippingMethod: shippingInfo.name,
            shippingCost: shippingCost,
            shippingWasFree: freeShippingMethods.includes(selectedShipping),
            total: cartTotal,
            isFactionOrder: false,
            submittedAt: new Date().toISOString(),
            status: 'pending'
        };

        pendingOrders.push(order);
        localStorage.setItem('xp_pending_orders', JSON.stringify(pendingOrders));

        // Update player's pending spending (for display purposes)
        if (playerMemberships[activePlayer]) {
            playerMemberships[activePlayer].pendingSpent =
                (playerMemberships[activePlayer].pendingSpent || 0) + cartTotal;
            savePlayerMemberships();
        }

        showReceipt(order, status.available - cartTotal);

        cart = [];
        cartQuantities = {};
        playSound('../../../assets/audio/ui/confirm.mp3');

        renderShopHeader();
        renderShopItems();
        renderCart();
    }
}

// === Add function to process approved orders (call when orders are approved) ===
export function processApprovedOrder(orderId) {
    const order = pendingOrders.find(o => o.orderId === orderId);
    if (!order || order.isFactionOrder) return;

    const playerKey = order.playerKey || activePlayer;
    const result = addPlayerSpending(playerKey, order.total);

    // Remove pending amount
    if (playerMemberships[playerKey]) {
        playerMemberships[playerKey].pendingSpent =
            Math.max(0, (playerMemberships[playerKey].pendingSpent || 0) - order.total);
        savePlayerMemberships();
    }

    if (result.tierUp) {
        showNotification(
            `🎉 ${formatPlayerName(playerKey)} ranked up to ${result.newTier.icon} ${result.newTier.name}!`,
            'success'
        );
    }

    return result;
}

// Update renderCart to show membership benefits
// At the start of renderCart function in shop.js
function renderCart() {
    const container = document.getElementById('shop-cart');
    if (!container) return;

    const status = getXPStatus();
    const isFaction = currentTab === 'faction';

    // Ensure we have a valid membership - get it safely
    const membership = getActiveMembership();
    if (!membership) {
        console.warn('renderCart: No membership loaded yet');
        container.innerHTML = '<p>Loading...</p>';
        return;
    }

    // Calculate with membership discount
    let cartSubtotal = 0;
    let totalSavings = 0;

    cart.forEach(item => {
        const basePrice = item.totalPrice || item.price;
        const discountedPrice = Math.ceil(basePrice * (1 - (membership.discount || 0) / 100));
        cartSubtotal += discountedPrice;
        totalSavings += basePrice - discountedPrice;
    });

    // Shipping with membership benefits - use safe functions
    const freeShippingMethods = getFreeShipping(membership);
    const availableShipping = getAvailableShipping(membership);


    let shippingCost = 0;
    if (!isFaction && cart.length > 0) {
        if (freeShippingMethods.includes(selectedShipping)) {
            shippingCost = 0;
        } else {
            shippingCost = SHIPPING_METHODS[selectedShipping.toUpperCase()]?.cost || 0;
        }
    }

    const cartTotal = cartSubtotal + shippingCost;
    const canCheckout = status.available >= cartTotal && cart.length > 0;

    const totalItems = cart.reduce((sum, c) => sum + (c.quantity || 1), 0);

    let cartHtml = `
        <h3>${isFaction ? '🍄 Faction Cart' : '🛒 Shopping Cart'} ${totalItems > 0 ? `(${totalItems} items)` : ''}</h3>

        <div class="cart-membership-badge" style="--tier-color: ${getActiveMembership().color}">
            <span>${getActiveMembership().icon}</span>
            <span>${getActiveMembership().name}</span>
            ${getActiveMembership().discount > 0 ? `<span class="discount-active">-${getActiveMembership().discount}%</span>` : ''}
        </div>
    `;

    if (cart.length === 0) {
        cartHtml += `
            <div class="cart-empty">
                <span class="empty-icon">🛒</span>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartHtml += `
            <div class="cart-items">
                ${cart.map(item => {
                    const basePrice = item.totalPrice || item.price;
                    const discountedPrice = Math.ceil(basePrice * (1 - getActiveMembership().discount / 100));
                    const itemSavings = basePrice - discountedPrice;

                    return `
                        <div class="cart-item" data-id="${item.id}">
                            <span class="cart-item-icon">${item.icon}</span>
                            <div class="cart-item-details">
                                <span class="cart-item-name">${item.name}</span>
                                ${item.quantity > 1 ? `
                                    <span class="cart-item-qty">×${item.quantity}</span>
                                ` : ''}
                            </div>
                            <div class="cart-item-prices">
                                ${itemSavings > 0 ? `
                                    <span class="cart-item-original">${basePrice.toLocaleString()}</span>
                                ` : ''}
                                <span class="cart-item-price">${discountedPrice.toLocaleString()}</span>
                            </div>
                            <button class="remove-btn" data-id="${item.id}">✕</button>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        if (!isFaction) {
            cartHtml += `
                <div class="shipping-selector">
                    <label>📬 Shipping Method:</label>
                    <select id="shipping-select">
                        ${Object.values(SHIPPING_METHODS)
                            .filter(method => availableShipping.includes(method.id))
                            .map(method => {
                                const isFree = freeShippingMethods.includes(method.id);
                                const displayCost = isFree ? 'FREE' : method.cost.toLocaleString() + ' XP';
                                const freeLabel = isFree && method.cost > 0 ? ' (Member Perk!)' : '';

                                return `
                                    <option value="${method.id}" ${selectedShipping === method.id ? 'selected' : ''}>
                                        ${method.icon} ${method.name} - ${displayCost}${freeLabel} (${method.deliveryTime})
                                    </option>
                                `;
                            }).join('')}
                    </select>
                    ${!availableShipping.includes('military') ? `
                        <div class="shipping-locked-hint">
                            🔒 More options at higher tiers
                        </div>
                    ` : ''}
                </div>
            `;
        }

        cartHtml += `
            <div class="cart-total-section">
                <div class="cart-subtotal-row">
                    <span>Subtotal (${totalItems} items):</span>
                    <span>${cartSubtotal.toLocaleString()} XP</span>
                </div>
                ${totalSavings > 0 ? `
                    <div class="cart-savings-row">
                        <span>${getActiveMembership().icon} Member Savings:</span>
                        <span class="savings-value">-${totalSavings.toLocaleString()} XP</span>
                    </div>
                ` : ''}
                ${!isFaction ? `
                    <div class="cart-shipping-row">
                        <span>Shipping:</span>
                        <span>${shippingCost === 0 ? 'FREE' : shippingCost.toLocaleString() + ' XP'}</span>
                    </div>
                ` : ''}
                <div class="cart-total-row">
                    <span>Total:</span>
                    <span class="cart-total-value">${cartTotal.toLocaleString()} ${status.icon}</span>
                </div>
                <div class="cart-remaining-row ${status.available >= cartTotal ? '' : 'negative'}">
                    <span>After purchase:</span>
                    <span>${(status.available - cartTotal).toLocaleString()} XP</span>
                </div>
            </div>
            <button class="checkout-btn" ${canCheckout ? '' : 'disabled'}>
                ${canCheckout
                    ? (isFaction ? '🍄 Approve Upgrade' : '💰 Place Order')
                    : '❌ Insufficient XP'}
            </button>
            <button class="clear-cart-btn">Clear Cart</button>
        `;
    }

    // Pending Orders Section (same as before)
    const relevantOrders = pendingOrders.filter(o =>
        isFaction ? o.isFactionOrder : !o.isFactionOrder
    );

    if (relevantOrders.length > 0) {
        cartHtml += `
            <div class="pending-orders">
                <h4>⏳ Pending Orders</h4>
                ${relevantOrders.map(order => {
                    const orderItemCount = order.items.reduce((sum, i) => sum + (i.quantity || 1), 0);
                    return `
                        <div class="pending-order-item" data-order-id="${order.orderId}">
                            <div class="pending-order-header">
                                <span class="order-id">${order.orderId}</span>
                                <span class="pending-status awaiting">Awaiting</span>
                            </div>
                            <div class="pending-order-details">
                                <span class="order-items-count">${orderItemCount} item${orderItemCount > 1 ? 's' : ''}</span>
                                <span class="order-total">${order.total.toLocaleString()} XP</span>
                            </div>
                            <div class="pending-order-date">
                                ${new Date(order.submittedAt).toLocaleDateString()}
                            </div>
                            <button class="cancel-order-btn" data-order-id="${order.orderId}">
                                ❌ Cancel
                            </button>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    container.innerHTML = cartHtml;

    // Event listeners (same as before)
    container.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = btn.dataset.id;
            setCartQuantity(itemId, 0);
            playSound('../../../assets/audio/ui/click.mp3');
            renderShopHeader();
            if (currentTab === 'shop') renderShopItems();
            if (currentTab === 'faction') renderFactionTab();
            renderCart();
        });
    });

    const shippingSelect = container.querySelector('#shipping-select');
    if (shippingSelect) {
        shippingSelect.addEventListener('change', (e) => {
            selectedShipping = e.target.value;
            renderCart();
        });
    }

    container.querySelector('.checkout-btn')?.addEventListener('click', completePurchase);

    container.querySelector('.clear-cart-btn')?.addEventListener('click', () => {
        cart = [];
        cartQuantities = {};
        renderShopHeader();
        if (currentTab === 'shop') renderShopItems();
        if (currentTab === 'faction') renderFactionTab();
        renderCart();
        playSound('../../../assets/audio/ui/click.mp3');
    });

    container.querySelectorAll('.cancel-order-btn').forEach(btn => {
        btn.addEventListener('click', () => cancelOrder(btn.dataset.orderId));
    });
}
function escapeShopHtml(value = '') {
    return String(value).replace(/[&<>'"]/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[character]));
}

function getShopItemById(itemId) {
    return SHOP_ITEMS[itemId] || Object.values(getAllShopItems()).find(item => item.id === itemId);
}

function getEffectDetail(item, index) {
    const effect = item.effects?.[index] || 'No effect details available.';
    const supplied = item.effectDetails?.[index];
    if (supplied?.rules) return { title: supplied.title || effect, rules: supplied.rules };
    // Older records remain useful while the local enrichment pass is still running.
    return {
        title: effect,
        rules: `5e-inspired shop rule: ${effect}. Unless this item says otherwise, using a consumable requires an action, and a listed duration ends early if the DM determines its source is removed. Ask the DM how this homebrew effect interacts with a specific spell, feature, or creature.`
    };
}

function renderInlineEffectRules(item) {
    const effects = item.effects || [];
    if (!effects.length) return '';
    const usage = item.usage;
    return `
        <section class="inline-effect-rules" aria-label="Full effect rules">
            <div class="inline-effect-rules-heading">📖 WHAT THESE EFFECTS DO</div>
            ${effects.map((_, index) => {
                const detail = getEffectDetail(item, index);
                return `<article class="inline-effect-rule">
                    <strong>${escapeShopHtml(detail.title)}</strong>
                    <p>${escapeShopHtml(detail.rules)}</p>
                </article>`;
            }).join('')}
            ${usage ? `<div class="inline-effect-usage"><strong>USAGE & INVENTORY</strong><br><strong>Use:</strong> ${escapeShopHtml(usage.activation)} · <strong>Duration:</strong> ${escapeShopHtml(usage.duration)} · <strong>Ends / removal:</strong> ${escapeShopHtml(usage.endsWhen)} · <strong>Charges:</strong> ${escapeShopHtml(usage.charges)}</div>` : ''}
        </section>`;
}

function openEffectDetails(itemId, index) {
    const item = getShopItemById(itemId);
    if (!item) return;
    const detail = getEffectDetail(item, Number(index));
    const usage = item.usage || { activation: 'Use as described', duration: 'See effect rules', endsWhen: 'As determined by the item or DM', charges: 'Not yet reviewed' };
    document.querySelector('.effect-details-modal')?.remove();
    const modal = document.createElement('div');
    modal.className = 'effect-details-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
        <div class="effect-details-panel">
            <button class="effect-details-close" type="button" aria-label="Close effect details">×</button>
            <div class="effect-details-kicker">⚡ EFFECT DETAILS · 5E-INSPIRED HOMEBREW</div>
            <h3>${escapeShopHtml(detail.title)}</h3>
            <p class="effect-details-item">${escapeShopHtml(item.icon)} ${escapeShopHtml(item.name)}</p>
            <p>${escapeShopHtml(detail.rules)}</p>
            <dl class="effect-usage-grid">
                <dt>Activation</dt><dd>${escapeShopHtml(usage.activation)}</dd>
                <dt>Duration</dt><dd>${escapeShopHtml(usage.duration)}</dd>
                <dt>Ends when</dt><dd>${escapeShopHtml(usage.endsWhen)}</dd>
                <dt>Uses / charges</dt><dd>${escapeShopHtml(usage.charges)}</dd>
            </dl>
            <p class="effect-details-note">Rules text is a table-ready interpretation, not official D&D 5e material. Your DM has final say.</p>
        </div>`;
    modal.addEventListener('click', event => {
        if (event.target === modal || event.target.closest('.effect-details-close')) modal.remove();
    });
    document.body.appendChild(modal);
    modal.querySelector('.effect-details-close').focus();
}

// Attach event listeners to item elements
function attachItemEventListeners(container, startIndex = 0) {
    container.querySelectorAll('.effect-detail-trigger').forEach(button => {
        button.addEventListener('click', event => {
            event.stopPropagation();
            openEffectDetails(button.dataset.itemId, button.dataset.effectIndex);
        });
    });

    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = btn.dataset.id;
            const item = SHOP_ITEMS[itemId];

            // Check membership before adding
            const check = canPurchaseWithMembership(item, getActiveMembership());
            if (!check.allowed) {
                showNotification(check.reason, 'error');
                return;
            }

            toggleCartItem(itemId);
        });
    });

    container.querySelectorAll('.bulk-controls').forEach(controls => {
        const itemId = controls.dataset.id;
        const item = SHOP_ITEMS[itemId];
        if (!item) return;

        const minusBtn = controls.querySelector('.qty-btn.minus');
        const plusBtn = controls.querySelector('.qty-btn.plus');

        minusBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentQty = getCartQuantity(itemId);
            setCartQuantity(itemId, currentQty - 1);
            playSound('../../../assets/audio/ui/click.mp3');
            renderShopHeader();
            renderShopItems();
            renderCart();
        });

        plusBtn?.addEventListener('click', (e) => {
            e.stopPropagation();

            // Check membership
            const check = canPurchaseWithMembership(item, getActiveMembership());
            if (!check.allowed) {
                showNotification(check.reason, 'error');
                return;
            }

            const currentQty = getCartQuantity(itemId);
            const maxQty = getMaxBulkQuantity(item);
            if (currentQty < maxQty) {
                setCartQuantity(itemId, currentQty + 1);
                playSound('../../../assets/audio/ui/confirm.mp3');
                renderShopHeader();
                renderShopItems();
                renderCart();
            }
        });
    });
}

// Setup infinite scroll
function setupInfiniteScroll() {
    let scrollTimeout;

    window.addEventListener('scroll', () => {
        if (showAllItems || isLoadingMore) return;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const container = document.getElementById('shop-items');
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const bottomVisible = rect.bottom <= window.innerHeight + 300;
            const hasMore = (currentPage + 1) * ITEMS_PER_PAGE < filteredItems.length;

            if (bottomVisible && hasMore) {
                isLoadingMore = true;
                currentPage++;

                renderShopItems(true);
                isLoadingMore = false;
            }
        }, 30);
    });
}

function handleInfiniteScroll() {
    if (isLoadingMore) return;

    const container = document.getElementById('shop-items');
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const bottomVisible = rect.bottom <= window.innerHeight + 500;

    const hasMore = (currentPage + 1) * ITEMS_PER_PAGE < filteredItems.length;

    if (bottomVisible && hasMore) {
        isLoadingMore = true;
        currentPage++;

        setTimeout(() => {
            renderShopItems(true);
            isLoadingMore = false;
        }, 20);
    }
}
function renderWarioStatusBar() {
    let container = document.getElementById('wario-status-bar');
    if (!container) {
        container = document.createElement('div');
        container.id = 'wario-status-bar';
        container.className = 'wario-status-bar';
        document.querySelector('.shop-header')?.after(container);
    }

    const status = getWarioStatus();
    const dateTime = getFormattedGameDateTime();
    const allItems = getAllShopItems();
    const topSellers = getDailyTopSellers(allItems);

    container.className = `wario-status-bar ${status.isNight ? 'night-mode' : ''}`;

    container.innerHTML = `
        <!-- Time Display -->
        <div class="time-display">
            <span class="time-icon">${status.period.icon}</span>
            <div class="time-info">
                <span class="time-period-name">${status.period.name}</span>
                <span class="time-actual">${status.time.formatted}</span>
                <span class="game-date">${dateTime.full}</span>
            </div>
        </div>

        <!-- Stock Meter -->
        <div class="stock-meter">
            <div class="stock-meter-label">
                <span>📦 Daily Stock</span>
                <span>${Math.round(status.stockPercent)}%</span>
            </div>
            <div class="stock-meter-bar">
                <div class="stock-meter-fill" style="width: ${status.stockPercent}%"></div>
            </div>
        </div>

        <!-- Weather -->
        <div class="weather-display ${status.weather.isMagical ? 'magical' : ''}">
            <span class="weather-icon">${status.weather.icon}</span>
            <div class="weather-info">
                <span class="weather-temp">${status.weather.temp}</span>
                <span class="weather-desc">${status.weather.desc}</span>
            </div>
        </div>

        <!-- Wario Mood -->
        <div class="wario-mood">
            <span class="mood-icon">${status.moodIcon}</span>
            <span class="mood-quote">"${status.quote}"</span>
        </div>

        ${status.holiday ? `
            <div class="holiday-banner">
                🎉 ${status.holiday.name}
            </div>
        ` : ''}

        ${status.isNight ? `
            <div class="night-special-banner">
                🌙 NIGHT MARKET OPEN - Special Items Available! 🌙
            </div>
        ` : ''}
    `;

    return container;
}

// Render Crazes
function renderCrazesBar() {
    const crazes = getDailyCrazes();

    let container = document.getElementById('crazes-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'crazes-container';
        // Insert after wario status bar OR before shop-layout
        const insertPoint = document.getElementById('wario-status-bar') ||
                           document.querySelector('.shop-layout');
        if (insertPoint) {
            insertPoint.after(container);
        }
    }

    if (!crazes || crazes.length === 0) {
        container.className = 'crazes-container empty';
        container.innerHTML = '';
        return;
    }

    container.className = 'crazes-container';
    container.innerHTML = `
        <div class="crazes-label">
            <span>🔥</span>
            <span>TODAY'S CRAZES:</span>
        </div>
        ${crazes.map(craze => `
            <div class="craze-badge" title="${craze.reason}">
                <span class="craze-icon">${craze.icon}</span>
                <div class="craze-info">
                    <span class="craze-name">${craze.name}</span>
                    <span class="craze-desc">${craze.description}</span>
                </div>
                <div class="craze-meta">
                    <span class="craze-duration">${craze.duration}d left</span>
                    <span class="craze-intensity">${craze.intensity.toFixed(1)}x demand</span>
                </div>
            </div>
        `).join('')}
    `;
}
// Render Top Sellers
function renderTopSellers() {
    const allItems = getAllShopItems();
    const topSellers = getDailyTopSellers(allItems);

    let container = document.getElementById('top-sellers-section');
    if (!container) {
        container = document.createElement('div');
        container.id = 'top-sellers-section';
        container.className = 'top-sellers-section';
        document.getElementById('crazes-container')?.after(container) ||
        document.getElementById('wario-status-bar')?.after(container);
    }

    container.innerHTML = `
        <div class="top-sellers-header">
            <span>🏆</span>
            <h3>Today's Hot Sellers</h3>
            <span style="color: #888; font-size: 12px;">(Selling fast!)</span>
        </div>
        <div class="top-sellers-grid">
            ${topSellers.map((ts, index) => {
                const availability = getItemAvailability(ts.item, allItems);
                return `
                    <div class="top-seller-card" data-id="${ts.item.id}">
                        <span class="top-seller-rank">#${index + 1}</span>
                        <span class="top-seller-icon">${ts.item.icon}</span>
                        <div class="top-seller-info">
                            <span class="top-seller-name">${ts.item.name}</span>
                            <span class="top-seller-stock">
                                ${availability.stockInfo.currentStock > 0
                                    ? `⚡ ${availability.stockInfo.currentStock} left!`
                                    : '❌ SOLD OUT'}
                            </span>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    // Click to scroll to item
    container.querySelectorAll('.top-seller-card').forEach(card => {
        card.addEventListener('click', () => {
            const itemId = card.dataset.id;
            const itemEl = document.querySelector(`.shop-item[data-id="${itemId}"]`);
            if (itemEl) {
                itemEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                itemEl.classList.add('highlight');
                setTimeout(() => itemEl.classList.remove('highlight'), 2000);
            }
        });
    });
}

// Update renderShopItems to use dynamic stock
function renderShopItems(append = false) {
    const container = document.getElementById('shop-items');
    if (!container) return;

    const status = getXPStatus();
    const membership = getActiveMembership();
    const isNight = isNightTime();
    const allItems = getAllShopItems();
    const topSellers = getDailyTopSellers(allItems);
    const topSellerIds = topSellers.map(ts => ts.item.id);

    let itemsToRender;
    if (showAllItems) {
        itemsToRender = filteredItems;
    } else {
        const startIndex = currentPage * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        itemsToRender = filteredItems.slice(startIndex, endIndex);
    }

    if (itemsToRender.length === 0 && !append) {
        container.innerHTML = `
            <div class="no-items">
                <span class="empty-icon">${searchQuery ? '🔍' : '🚫'}</span>
                <p>${searchQuery ? `No items matching "${searchQuery}"` : 'No items in this category'}</p>
            </div>
        `;
        return;
    }

    const itemsHtml = itemsToRender.map(item => {
        // Get dynamic availability
        const availability = getItemAvailability(item, allItems);
        const stockInfo = availability.stockInfo;

        // Skip night-only during day (unless showing all)
        if (stockInfo.stockType === STOCK_TYPES.NIGHT_ONLY && !isNight && !showAllItems) {
            return '';
        }

        const currentQty = getCartQuantity(item.id);
        const priceInfo = applyMembershipDiscount(item.price, membership);
        const effectivePrice = priceInfo.discounted;

        const otherCartCost = cart.filter(c => c.id !== item.id)
            .reduce((sum, c) => sum + (c.totalPrice || c.price), 0);
        const canAffordOne = status.available - otherCartCost >= effectivePrice;
        const inCart = currentQty > 0;

        const membershipCheck = canPurchaseWithMembership(item, membership);
        const requiredTier = getRequiredTierForItem(item);
        const isMembershipLocked = !membershipCheck.allowed;

        const remainingStock = item.stock - (approvedPurchases.filter(p => p.itemId === item.id).length);
        const outOfStock = remainingStock <= 0;

        const rarityClass = item.rarity || 'common';
        const canUseAtLevel = canPurchaseAtLevel(item);

        // Dynamic classes
        const isTopSeller = topSellerIds.includes(item.id);
        const inCraze = stockInfo.crazeInfo.multiplier > 1;
        const isNightSpecial = availability.isNightSpecial;
    const classes = [
        'shop-item',
        rarityClass,
        !availability.available ? 'time-locked' : '',
        isMembershipLocked ? 'membership-restricted' : '', // Changed from membership-locked
        !canUseAtLevel ? 'level-locked' : '',
        outOfStock ? 'sold-out' : '',
        inCart ? 'in-cart' : '',
        isTopSeller ? 'top-seller' : '',
        inCraze ? 'in-craze' : '',
        isNightSpecial ? 'night-special' : '',
        // Only disable for time-locked or sold out, NOT membership
        ((!canAffordOne && !inCart) || outOfStock || !availability.available) ? 'disabled' : ''
    ].filter(Boolean).join(' ');
        const vendor = getVendorDisplay(item.vendor);
                const highlightedName = searchQuery ?
            item.name.replace(new RegExp(`(${escapeRegex(searchQuery)})`, 'gi'), '<mark>$1</mark>') :
            item.name;
    return `
        <div class="${classes}" data-id="${item.id}">
            ${isNightSpecial ? '<div class="night-special-tag">🌙 NIGHT SPECIAL</div>' : ''}
            ${isTopSeller ? '<div class="item-top-seller-badge">🔥 TOP SELLER</div>' : ''}

            ${!availability.available ? `
                <div class="time-lock-overlay">
                    <span class="lock-icon">${availability.icon}</span>
                    <span class="lock-reason">${availability.reason}</span>
                    ${availability.hoursUntilAvailable ? `
                        <span class="lock-timer">${availability.hoursUntilAvailable}h</span>
                        <span class="lock-timer-label">until available</span>
                    ` : ''}
                </div>
            ` : ''}


${isWarioScam(item) ? (() => {
    // Determine which scam text to show
    // We only need to check price here because isWarioScam has already returned true
    const isCheapScam = item.price < 1500;

    const title = isCheapScam ? "TOO GOOD TO BE TRUE?" : "BUYER BEWARE";

    const description = isCheapScam
        ? `At only ${item.price.toLocaleString()} XP, this deal smells fishy. Wario isn't known for charity. You might receive a cardboard cutout, a broken replica, or he might just take the money and run.`
        : `At ${item.price.toLocaleString()} XP, Wario may be scamming you. There is <strong>no guarantee</strong> you will actually receive this item. Wario has been known to "lose" orders or claim "shipping accidents."`;

    const footer = isCheapScam ? "🚫 No Refunds. Ever. 🚫" : "💀 Purchase at your own risk 💀";

    return `
    <div class="item-scam-warning">
        <div class="scam-header">
            <span class="scam-icon">🚨</span>
            <span class="scam-title">${title}</span>
            <span class="scam-icon">🚨</span>
        </div>
        <p class="scam-text">
            ${description}
        </p>
        <div class="scam-footer">
            <span class="scam-disclaimer">${footer}</span>
        </div>
    </div>
    `;
})() : ''}
            <div class="item-header">
                <span class="item-icon">${item.icon}</span>
                <div class="item-title-group">
                    <span class="item-name">${highlightedName}</span>
                    <span class="item-rarity ${rarityClass}">${rarityClass}</span>
                </div>
                <div class="item-price-group">
                    ${priceInfo.savings > 0 ? `
                        <span class="item-price original-price">${item.price.toLocaleString()}</span>
                        <span class="item-price discounted-price">${effectivePrice.toLocaleString()} XP</span>
                        <span class="discount-badge">-${membership.discount}%</span>
                    ` : `
                        <span class="item-price">${effectivePrice.toLocaleString()} XP</span>
                    `}
                </div>
            </div>
            ${item.priceOriginal && item.priceOriginal !== item.price ? `
                <div class="price-review ${item.price > item.priceOriginal ? 'price-raised' : 'price-lowered'}" title="${item.priceReason || 'Price reviewed for rarity and mechanical impact.'}">
                    ⚖️ Price reviewed: ${item.price > item.priceOriginal ? 'raised' : 'lowered'} from ${item.priceOriginal.toLocaleString()} XP
                </div>
            ` : ''}

            <!-- Membership requirement badge (subtle, in badges area) -->
            ${isMembershipLocked ? `
                <div class="membership-requirement-notice">
                    <span class="notice-icon">🔒</span>
                    <span class="notice-text">Requires ${requiredTier.icon} ${requiredTier.name}</span>
                </div>
            ` : ''}

            <div class="availability-badge ${getAvailabilityClass(availability, stockInfo, inCraze, isTopSeller)}">
                <span class="avail-icon">${availability.icon}</span>
                <span class="avail-text">${availability.reason}</span>
                ${availability.instant && !availability.shippingRequired ?
                    '<span class="pickup-badge">🏃 Pickup!</span>' : ''}
            </div>

            ${stockInfo.currentStock > 0 && stockInfo.depletionRate > 0 ? `
                <div class="stock-depletion">
                    <span>📉</span>
                    <div class="depletion-bar">
                        <div class="depletion-fill" style="width: ${(stockInfo.currentStock / stockInfo.baseStock) * 100}%"></div>
                    </div>
                    <span class="depletion-text">~${stockInfo.soldOutTime || '?'}h left</span>
                </div>
            ` : ''}

            <div class="item-badges">
                ${renderDurabilityBadge(item)}
                ${renderLevelBadge(item)}
            </div>

            <p class="item-description">${item.description}</p>

            <div class="item-effects" aria-label="Item effects">
                ${(item.effects || []).map((effect, index) => `
                    <button class="effect-tag effect-detail-trigger" type="button" data-item-id="${item.id}" data-effect-index="${index}" aria-label="Read rules for ${effect}">
                        ⚡ ${effect}<span class="effect-more">Details</span>
                    </button>
                `).join('')}
            </div>
            ${renderInlineEffectRules(item)}

            ${item.warning ? `<div class="item-warning">⚠️ ${item.warning}</div>` : ''}

            <div class="item-footer">
                <div class="vendor-info">
                    <span class="vendor-icon">${vendor.icon}</span>
                    <span class="vendor-name">${vendor.name}</span>
                </div>
                <span class="item-stock ${remainingStock <= 3 ? 'low' : ''}">
                    ${outOfStock ? '❌ SOLD OUT' : `📦 ${remainingStock} in world`}
                </span>
            </div>

            <div class="item-shipping ${availability.instant ? 'instant' : ''}">
                ${availability.instant ? `
                    <span class="shipping-label">🏃 Pickup:</span>
                    <span class="shipping-info">Available at Wario's counter!</span>
                ` : `
                    <span class="shipping-label">📬 Delivery:</span>
                    <span class="shipping-info">${item.shippedBy || 'Standard Courier'}</span>
                    ${item.shippingDetail ? `<span class="shipping-detail" title="${item.shippingDetail}">ⓘ shipping details</span>` : ''}
                `}
            </div>

            <!-- Purchase controls - locked if membership restricted -->
            ${availability.available ? (
                isMembershipLocked ? `
                    <div class="purchase-locked">
                        <button class="add-to-cart-btn locked" disabled>
                            🔒 ${requiredTier.icon} Membership Required
                        </button>
                        <span class="locked-hint">Upgrade to ${requiredTier.name} to purchase</span>
                    </div>
                ` : renderBulkControls(item, currentQty, getMaxBulkQuantity(item), canAffordOne, effectivePrice)
            ) : ''}
            <!-- Craze badge at bottom -->
            ${inCraze ? `
                <div class="item-craze-badge">
                    <span class="craze-badge-icon">${stockInfo.crazeInfo.crazes[0].icon}</span>
                    <span class="craze-badge-text">${stockInfo.crazeInfo.crazes[0].name}</span>
                    <span class="craze-badge-multiplier">${stockInfo.crazeInfo.multiplier.toFixed(1)}x demand</span>
                </div>
            ` : ''}
        </div>
    `;
}).filter(html => html !== '').join('');
    if (append) {
        container.querySelector('.load-more-indicator')?.remove();
        container.insertAdjacentHTML('beforeend', itemsHtml);
    } else {
        container.innerHTML = itemsHtml;
    }

    attachItemEventListeners(container);
}
function getAvailabilityClass(availability, stockInfo, inCraze, isTopSeller) {
    if (inCraze || isTopSeller) return 'trending';
    if (availability.instant && stockInfo.currentStock > 10) return 'in-stock';
    if (availability.instant && stockInfo.currentStock > 3) return 'limited';
    if (availability.instant && stockInfo.currentStock > 0) return 'low-stock';
    if (stockInfo.stockType === STOCK_TYPES.NIGHT_ONLY) return 'night-only';
    if (stockInfo.stockType === STOCK_TYPES.SPECIAL_ORDER) return 'special-order';
    return 'delivery';
}
function injectStockStyles() {
    if (document.getElementById('stock-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'stock-styles';
    styles.textContent = `
        /* Wario Status Display */
        .wario-status {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 12px 16px;
            background: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2));
            border-radius: 12px;
            border: 2px solid #ffd700;
            min-width: 200px;
        }

        .wario-status.night, .wario-status.midnight {
            border-color: #9b59b6;
            background: linear-gradient(135deg, rgba(75,0,130,0.3), rgba(0,0,0,0.4));
        }

        .time-display {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .time-icon {
            font-size: 24px;
        }

        .time-info {
            display: flex;
            flex-direction: column;
        }

        .time-name {
            font-weight: bold;
            color: #ffd700;
        }

        .time-actual {
            font-size: 12px;
            color: #aaa;
        }

        .stock-display {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .stock-bar {
            height: 8px;
            background: rgba(255,255,255,0.1);
            border-radius: 4px;
            overflow: hidden;
        }

        .stock-fill {
            height: 100%;
            background: linear-gradient(90deg, #ff4444, #ffaa00, #44ff44);
            transition: width 1s ease;
        }

        .stock-text {
            font-size: 11px;
            color: #aaa;
        }

        .wario-mood {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
            color: #888;
            font-style: italic;
        }

        .mood-icon {
            font-size: 20px;
        }

        .mood-quote {
            flex: 1;
        }

        .night-special-banner {
            background: linear-gradient(90deg, #9b59b6, #3498db, #9b59b6);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
            color: white;
            text-align: center;
            padding: 6px 12px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 12px;
        }

        @keyframes shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* Night mode header */
        .shop-header.night-mode {
            background: linear-gradient(180deg, #1a1a2e, #16213e);
        }

        .shop-header.night-mode .shop-title h1 {
            text-shadow: 0 0 20px #9b59b6;
        }

        /* Item availability badge */
        .availability-badge {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 12px;
            margin: 8px 0;
        }

        .availability-badge.instant {
            background: linear-gradient(135deg, rgba(46,204,113,0.2), rgba(39,174,96,0.1));
            border: 1px solid #2ecc71;
            color: #2ecc71;
        }

        .availability-badge.delivery {
            background: linear-gradient(135deg, rgba(52,152,219,0.2), rgba(41,128,185,0.1));
            border: 1px solid #3498db;
            color: #3498db;
        }

        .pickup-badge {
            background: #2ecc71;
            color: white;
            padding: 2px 8px;
            border-radius: 10px;
            font-weight: bold;
            font-size: 10px;
            margin-left: auto;
        }

        /* Time locked overlay */
        .time-lock-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            z-index: 10;
            border-radius: inherit;
        }

        .time-lock-overlay .lock-icon {
            font-size: 48px;
        }

        .time-lock-overlay .lock-reason {
            font-size: 14px;
            color: #aaa;
        }

        .time-lock-overlay .lock-timer {
            font-size: 18px;
            color: #9b59b6;
            font-weight: bold;
        }

        /* Night special items */
        .shop-item.night-special {
            border: 2px solid #9b59b6;
            box-shadow: 0 0 20px rgba(155, 89, 182, 0.3);
            animation: nightGlow 2s infinite alternate;
        }

        @keyframes nightGlow {
            from { box-shadow: 0 0 10px rgba(155, 89, 182, 0.3); }
            to { box-shadow: 0 0 25px rgba(155, 89, 182, 0.5); }
        }

        .night-special-badge {
            position: absolute;
            top: -10px;
            right: 10px;
            background: linear-gradient(135deg, #9b59b6, #8e44ad);
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 10px;
            font-weight: bold;
            z-index: 5;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        /* Instant shipping highlight */
        .item-shipping.instant {
            background: linear-gradient(135deg, rgba(46,204,113,0.2), rgba(39,174,96,0.1));
            border: 1px solid #2ecc71;
            border-radius: 8px;
            padding: 8px;
        }

        .item-shipping.instant .shipping-info {
            color: #2ecc71;
            font-weight: bold;
        }
    `;

    document.head.appendChild(styles);
}
// Update init
async function init() {
    console.log('🏪 Initializing Wario\'s Warehouse...');
    console.log('📅 Game Date:', getFormattedGameDateTime().full);
    console.log('🕐 Time Period:', getCurrentTimePeriod().name);
    console.log('🌙 Night Mode:', isNightTime());

    // Note: Add <link rel="stylesheet" href="shop-stock.css"> to your HTML instead of injecting
    injectStockStyles();
    await loadApprovedPurchases();
    recalculateAllMemberships();
    loadFactionData();
    prepareFilteredItems();

    // Render order matters!
    renderShopHeader();
    renderWarioStatusBar();
    renderCrazesBar();
    renderTopSellers();
    renderMainContent();

    setupInfiniteScroll();

    // Auto-refresh every minute
    setInterval(() => {
        if (currentTab === 'shop') {
            renderWarioStatusBar();
            renderCrazesBar();
            // Don't refresh items constantly - too expensive
        }
    }, 60000);

    console.log('✅ Shop initialized');
    console.log('🔥 Today\'s crazes:', getDailyCrazes().map(c => c.name));
}// Add these styles to injectMembershipStyles()
function injectMembershipStyles() {
    if (document.getElementById('membership-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'membership-styles';
    styles.textContent = `
        /* Player selector */
        .player-selector {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 12px;
            background: rgba(0,0,0,0.3);
            border-radius: 8px;
        }

        .player-selector label {
            font-size: 12px;
            color: #aaa;
        }

        .player-selector select {
            background: rgba(0,0,0,0.5);
            border: 1px solid #444;
            color: white;
            padding: 6px 10px;
            border-radius: 6px;
            cursor: pointer;
        }

        /* Party memberships grid */
        .party-memberships-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }

        .party-member-card {
            background: rgba(0,0,0,0.4);
            border: 2px solid var(--tier-color, #666);
            border-radius: 12px;
            padding: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .party-member-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .party-member-card.active {
            box-shadow: 0 0 20px var(--tier-color, #666);
            border-width: 3px;
        }

        .member-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .member-icon {
            font-size: 24px;
        }

        .member-info {
            flex: 1;
        }

        .member-name {
            font-weight: bold;
            display: block;
        }

        .member-tier {
            font-size: 12px;
            color: var(--tier-color, #aaa);
        }

        .active-badge {
            background: #4ade80;
            color: black;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 10px;
            font-weight: bold;
        }

        .member-stats {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #aaa;
            margin-bottom: 8px;
        }

        .member-progress {
            height: 4px;
            background: rgba(255,255,255,0.1);
            border-radius: 2px;
            overflow: hidden;
        }

        .member-progress-bar {
            height: 100%;
            background: var(--tier-color, #666);
            transition: width 0.3s ease;
        }

        /* Membership hero updates */
        .membership-player-name {
            font-size: 14px;
            color: #aaa;
            margin-bottom: 5px;
        }

        .membership-spent {
            font-size: 11px;
            color: #888;
        }

        .tier-progress-mini {
            width: 80px;
            height: 4px;
            background: rgba(255,255,255,0.2);
            border-radius: 2px;
            overflow: hidden;
            margin-top: 4px;
        }

        .tier-progress-mini .tier-progress-bar {
            height: 100%;
            background: var(--tier-color, #666);
        }

        /* Letter tiers section */
        .letter-tiers .tier-card {
            background: linear-gradient(135deg, rgba(0,0,0,0.5), rgba(50,50,50,0.3));
        }

        .tier-card.upcoming {
            opacity: 0.8;
            border-style: dashed;
        }

        .tier-info-text {
            color: #aaa;
            font-size: 14px;
            margin-bottom: 15px;
        }

        .wario-warning-text {
            color: #ff9800;
            font-size: 14px;
            margin-top: 15px;
            padding: 10px;
            background: rgba(255,152,0,0.1);
            border-radius: 8px;
            border-left: 3px solid #ff9800;
        }

        /* Keep all previous membership styles... */
        ${getPreviousMembershipStyles()}
    `;

    document.head.appendChild(styles);
}

function getPreviousMembershipStyles() {
    return `
        .membership-display {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            padding: 8px 16px;
            background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1));
            border: 2px solid var(--tier-color, #666);
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .membership-display:hover {
            transform: scale(1.02);
            box-shadow: 0 0 15px var(--tier-color, #666);
        }

        .membership-icon { font-size: 24px; }
        .membership-info { display: flex; flex-direction: column; align-items: center; }
        .membership-name { font-weight: bold; color: var(--tier-color, #fff); font-size: 12px; }
        .membership-discount { font-size: 11px; color: #4ade80; }

        .shop-item.membership-locked { position: relative; }

        .membership-lock-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            z-index: 10;
            border-radius: inherit;
        }

        .membership-lock-overlay .lock-icon { font-size: 32px; }
        .membership-lock-overlay .lock-tier { font-size: 16px; font-weight: bold; color: var(--tier-color, #fff); }
        .membership-lock-overlay .lock-reason { font-size: 12px; color: #aaa; }

        .membership-badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 2px 8px;
            background: rgba(0,0,0,0.3);
            border: 1px solid var(--tier-color, #666);
            border-radius: 12px;
            font-size: 11px;
        }

        .membership-badge.unlocked { border-color: #4ade80; color: #4ade80; }
        .membership-badge.locked { opacity: 0.7; }

        .item-price-group { display: flex; flex-direction: column; align-items: flex-end; }
        .original-price { text-decoration: line-through; color: #888; font-size: 12px; }
        .discounted-price { color: #4ade80; }
        .discount-badge { background: #4ade80; color: black; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: bold; }

        .membership-tab-content { padding: 20px; max-width: 1200px; margin: 0 auto; }

        .membership-hero {
            background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3));
            border: 3px solid var(--tier-color, #666);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            margin-bottom: 30px;
        }

        .membership-hero-icon { font-size: 64px; margin-bottom: 10px; }
        .membership-hero h2 { color: var(--tier-color, #fff); margin-bottom: 5px; }

        .membership-stats { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin: 20px 0; }
        .membership-stat { text-align: center; }
        .membership-stat .stat-value { font-size: 24px; font-weight: bold; color: var(--tier-color, #fff); display: block; }
        .membership-stat .stat-label { font-size: 12px; color: #aaa; }

        .tier-progress-large { max-width: 400px; margin: 0 auto; }
        .progress-header { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .progress-bar-large { height: 12px; background: rgba(255,255,255,0.1); border-radius: 6px; overflow: hidden; }
        .progress-fill { height: 100%; transition: width 0.5s ease; }
        .progress-footer { display: flex; justify-content: space-between; font-size: 12px; color: #aaa; margin-top: 8px; }

        .membership-section { background: rgba(0,0,0,0.3); border-radius: 15px; padding: 20px; margin-bottom: 20px; }
        .membership-section h3 { margin-bottom: 15px; }

        .perks-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 10px; }
        .perk-item { display: flex; align-items: center; gap: 10px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 8px; }
        .perk-item.active .perk-check { color: #4ade80; }

        .wario-note {
            display: flex; align-items: center; gap: 15px; margin-top: 20px; padding: 15px;
            background: linear-gradient(135deg, #4a1c7a, #2d1a47);
            border-radius: 10px; border: 2px solid #9b59b6;
        }
        .wario-face { font-size: 40px; }

        .tiers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; }

        .tier-card {
            background: rgba(0,0,0,0.4);
            border: 2px solid var(--tier-color, #666);
            border-radius: 12px;
            padding: 15px;
            transition: all 0.3s ease;
        }

        .tier-card.current { box-shadow: 0 0 20px var(--tier-color, #666); }
        .tier-card.locked { opacity: 0.5; }

        .tier-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .tier-header .tier-icon { font-size: 24px; }
        .tier-header .tier-name { font-weight: bold; color: var(--tier-color, #fff); }
        .current-badge { background: #4ade80; color: black; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; }
        .locked-badge { margin-left: auto; }

        .tier-requirements { font-size: 12px; color: #aaa; margin-bottom: 10px; }
        .tier-limits { display: flex; flex-direction: column; gap: 4px; font-size: 12px; }
        .limit-item { display: flex; justify-content: space-between; }
        .limit-label { color: #888; }

        .faq .faq-item { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .faq .faq-item:last-child { border-bottom: none; }
        .faq .faq-item strong { color: #fff; }
        .faq .faq-item p { color: #aaa; margin-top: 5px; }
        .faq .faq-item.wario-warning { background: linear-gradient(135deg, rgba(255,0,0,0.1), rgba(255,100,0,0.1)); padding: 15px; border-radius: 10px; border: 1px solid #ff6600; }
    `;
}

document.addEventListener('DOMContentLoaded', init);
// --- Fetch Data ---
async function loadApprovedPurchases() {
    try {
        const response = await fetch(`../../data/commerce/shop-purchases.json?t=${Date.now()}`);
        if (response.ok) {
            approvedPurchases = await response.json();
            console.log('✅ Loaded approved purchases:', approvedPurchases.length);
        }
    } catch (error) {
        console.log('ℹ️ No approved purchases file found');
        approvedPurchases = [];
    }
}


// NEW: Process approved purchases to calculate player lifetime spent
function processApprovedPurchasesForMembership() {
    // Reset lifetime spent for all players based on approved purchases
    const playerSpending = {};

    approvedPurchases.forEach(purchase => {
        // Skip faction purchases - they don't count toward individual membership
        if (purchase.isFaction) return;

        const playerKey = purchase.playerKey;
        if (!playerKey) return;

        const amount = purchase.price * (purchase.quantity || 1);

        if (!playerSpending[playerKey]) {
            playerSpending[playerKey] = 0;
        }
        playerSpending[playerKey] += amount;
    });

    // Update playerMemberships with calculated spending
    for (const playerKey in playerSpending) {
        if (!playerMemberships[playerKey]) {
            playerMemberships[playerKey] = {
                lifetimeSpent: 0,
                pendingSpent: 0
            };
        }

        // Set lifetime spent from approved purchases
        playerMemberships[playerKey].lifetimeSpent = playerSpending[playerKey];

        // Recalculate tier
        const tier = getTierFromXP(playerSpending[playerKey]);
        playerMemberships[playerKey].tier = tier || createDefaultTier();
    }

    // Log what we found
    console.log('💰 Player spending from approved purchases:', playerSpending);

    // Save updated memberships
    savePlayerMemberships();
}
export const BULK_PRICING = {
    enabled: true,
    allowedRarities: ['junk', 'common', 'uncommon'], // Only these can be bulk ordered
    maxQuantity: 10,
    priceIncreasePerUnit: {
        junk: 0.02,
        common: 0.05,      // 5% increase per additional unit
        uncommon: 0.10     // 10% increase per additional unit
    },
    // Price formula: basePrice * (1 + (quantity-1) * increaseRate) * quantity
    // Example: 100 XP common, qty 3 = 100 * (1 + 0.10) * 3 = 330 XP (not 300)
};
export function calculateBulkPrice(item, quantity) {
    if (quantity <= 1) return item.price;

    const rarity = item.rarity || 'common';
    const increaseRate = BULK_PRICING.priceIncreasePerUnit[rarity] || 0.05;

    // Each additional unit costs more
    let total = 0;
    for (let i = 0; i < quantity; i++) {
        const unitPrice = Math.ceil(item.price * (1 + (i * increaseRate)));
        total += unitPrice;
    }

    return total;
}
export function getBulkPriceBreakdown(item, quantity) {
    if (quantity <= 1) {
        return [{
            unit: 1,
            unitPrice: item.price,
            cumulative: item.price
        }];
    }

    const rarity = item.rarity || 'common';
    const increaseRate = BULK_PRICING.priceIncreasePerUnit[rarity] || 0.05;

    const breakdown = [];
    let cumulative = 0;

    for (let i = 0; i < quantity; i++) {
        const unitPrice = Math.ceil(item.price * (1 + (i * increaseRate)));
        cumulative += unitPrice;
        breakdown.push({
            unit: i + 1,
            unitPrice: unitPrice,
            cumulative: cumulative,
            increase: i > 0 ? Math.round(i * increaseRate * 100) : 0
        });
    }

    return breakdown;
}

export function canBulkOrder(item) {
    return BULK_PRICING.enabled &&
           BULK_PRICING.allowedRarities.includes(item.rarity || 'common');
}
// --- Load Faction Data ---
function loadFactionData() {
    console.log('🍄 Loading faction data...');

    // Get all toads from the data file
    allToads = getAllToadsData();

    // Get pre-calculated stats
    factionStats = getPreCalculatedFactionStats();

    console.log('🍄 Faction data loaded:', {
        totalToads: allToads.length,
        totalXP: factionStats.totalXP,
        morale: factionStats.morale,
        loyalty: factionStats.loyalty,
        combatReadiness: factionStats.combatReadiness
    });
}

// --- XP Calculation Functions ---

function getPlayerXPStatus() {
    const allRewards = REWARDS_DATA.extractAll();
    const earnedPlayerXP = allRewards
        .filter(r => r.earned && r.type === 'xp')
        .reduce((sum, r) => sum + (r.amount || 0), 0);

    const personalPurchases = approvedPurchases.filter(p => {
        const item = SHOP_ITEMS[p.itemId];
        return item && item.category !== SHOP_CATEGORIES.FACTION;
    });

    const spentPlayerXP = personalPurchases.reduce((sum, p) => sum + p.price, 0);
    const pendingPlayerXP = pendingOrders
        .filter(o => !o.isFactionOrder)
        .reduce((sum, o) => sum + o.total, 0);

    return {
        type: 'Player XP',
        icon: '💎',
        total: earnedPlayerXP,
        spent: spentPlayerXP,
        pending: pendingPlayerXP,
        available: earnedPlayerXP - spentPlayerXP - pendingPlayerXP
    };
}

function getFactionXPStatus() {
    const factionTotalXP = factionStats?.totalXP || 0;

    const pendingFactionXP = pendingOrders
        .filter(o => o.isFactionOrder)
        .reduce((sum, o) => sum + o.total, 0);

    return {
        type: 'Faction XP',
        icon: '🍄',
        total: factionTotalXP,
        spent: spentFactionXP,
        pending: pendingFactionXP,
        available: factionTotalXP - spentFactionXP - pendingFactionXP
    };
}

function getXPStatus() {
    return currentTab === 'faction' ? getFactionXPStatus() : getPlayerXPStatus();
}

// --- Helper Functions ---

function getVendorDisplay(vendorId) {
    const vendor = VENDORS[vendorId];
    if (!vendor) {
        const formatted = vendorId
            .replace(/_/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase());
        return { name: formatted, icon: '🏪', location: 'Unknown' };
    }
    return vendor;
}

function generateOrderId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = 'WW-';
    for (let i = 0; i < 8; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

function getPurchasedFactionUpgrades() {
    return JSON.parse(localStorage.getItem('faction_items_owned') || '[]');
}

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.shop-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `shop-notification ${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span class="notification-message">${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// --- Render Functions -




// Update renderMainContent to include membership tab
function renderMainContent() {
    const shopGrid = document.getElementById('shop-items');
    const factionContent = document.getElementById('faction-content');
    const membershipContent = document.getElementById('membership-content') || createMembershipContainer();
    const sidebar = document.querySelector('.shop-sidebar');

    // Hide all first
    if (shopGrid) shopGrid.style.display = 'none';
    if (factionContent) factionContent.style.display = 'none';
    if (membershipContent) membershipContent.style.display = 'none';
    if (sidebar) sidebar.style.display = 'none';

    if (currentTab === 'shop') {
        if (shopGrid) shopGrid.style.display = 'grid';
        if (sidebar) sidebar.style.display = 'flex';

        renderCategoryTabs();
        prepareFilteredItems();
        renderShopItems();
        setupInfiniteScroll();
    } else if (currentTab === 'faction') {
        if (factionContent) factionContent.style.display = 'block';
        renderFactionTab();
    } else if (currentTab === 'membership') {
        if (membershipContent) membershipContent.style.display = 'block';
        renderMembershipTab();
    }

    renderCart();
    renderPurchaseHistory();
}

function createMembershipContainer() {
    const existing = document.getElementById('membership-content');
    if (existing) return existing;

    const container = document.createElement('div');
    container.id = 'membership-content';
    container.className = 'membership-content';

    const mainContainer = document.querySelector('.shop-main') || document.querySelector('.shop-container');
    if (mainContainer) {
        mainContainer.appendChild(container);
    }

    return container;
}





// New: Prepare filtered items for lazy loading
function prepareFilteredItems() {
    let items = Object.values(getAllShopItems()).filter(item => item && item.category !== SHOP_CATEGORIES.FACTION);

    // Filter by category
    if (currentCategory !== 'all') {
        items = items.filter(item => item.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery) {
        items = items.filter(item => {
            const searchFields = [
                item.name,
                item.description,
                item.category,
                item.rarity,
                item.vendor,
                ...(item.effects || []),
                item.shippedBy
            ].filter(Boolean).join(' ').toLowerCase();

            return searchFields.includes(searchQuery);
        });
    }

    // Sort by price
    items.sort((a, b) => a.price - b.price);

    filteredItems = items;
    currentPage = 0;
}

function renderCategoryTabs() {
    const container = document.getElementById('shop-categories');
    if (!container) return;

    const stats = getShopStats();

    const categories = [
        { id: 'all', name: 'All Items', icon: '🏪', count: stats.totalItems - (stats.byCategory[SHOP_CATEGORIES.FACTION] || 0) },
        { id: SHOP_CATEGORIES.CONSUMABLES, name: 'Consumables', icon: '🍄', count: stats.byCategory[SHOP_CATEGORIES.CONSUMABLES] || 0 },
        { id: SHOP_CATEGORIES.EQUIPMENT, name: 'Equipment', icon: '⚔️', count: stats.byCategory[SHOP_CATEGORIES.EQUIPMENT] || 0 },
        { id: SHOP_CATEGORIES.CURIOSITIES, name: 'Curiosities', icon: '❓', count: stats.byCategory[SHOP_CATEGORIES.CURIOSITIES] || 0 },
        { id: SHOP_CATEGORIES.SERVICES, name: 'Services', icon: '🏠', count: stats.byCategory[SHOP_CATEGORIES.SERVICES] || 0 },
        { id: SHOP_CATEGORIES.PREMIUM, name: 'Premium', icon: '✨', count: stats.byCategory[SHOP_CATEGORIES.PREMIUM] || 0 },
        { id: SHOP_CATEGORIES.FORBIDDEN, name: 'Forbidden', icon: '☠️', count: stats.byCategory[SHOP_CATEGORIES.FORBIDDEN] || 0 }
    ];

    container.innerHTML = `
        <div class="shop-controls">
            <div class="search-container">
                <input type="text"
                       id="shop-search"
                       class="shop-search-input"
                       placeholder="🔍 Search items..."
                       value="${searchQuery}">
                ${searchQuery ? `<button class="search-clear-btn" id="clear-search">✕</button>` : ''}
            </div>

            <div class="load-controls">
                <button class="load-all-btn ${showAllItems ? 'active' : ''}" id="load-all-btn">
                    ${showAllItems ? '📄 Paginated' : '📜 Load All'}
                </button>
                <span class="item-count-display">
                    ${filteredItems.length} items
                </span>
            </div>
        </div>

        <div class="category-tabs">
            ${categories.map(cat => `
                <button class="category-tab ${currentCategory === cat.id ? 'active' : ''}"
                        data-category="${cat.id}">
                    <span class="cat-icon">${cat.icon}</span>
                    <span class="cat-name">${cat.name}</span>
                    <span class="cat-count">(${cat.count})</span>
                </button>
            `).join('')}
        </div>
    `;

    // Search input handler
    const searchInput = container.querySelector('#shop-search');
    let searchTimeout;
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value.trim().toLowerCase();
            currentPage = 0;
            prepareFilteredItems();
            renderCategoryTabs(); // Re-render to update count
            renderShopItems();
        }, 300); // Debounce 300ms
    });

    // Clear search button
    container.querySelector('#clear-search')?.addEventListener('click', () => {
        searchQuery = '';
        currentPage = 0;
        prepareFilteredItems();
        renderCategoryTabs();
        renderShopItems();
        playSound('../../../assets/audio/ui/click.mp3');
    });

    // Load all toggle
    container.querySelector('#load-all-btn')?.addEventListener('click', () => {
        showAllItems = !showAllItems;
        currentPage = 0;
        renderCategoryTabs();
        renderShopItems();
        playSound('../../../assets/audio/ui/click.mp3');
    });

    // Category tabs
    container.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            currentCategory = tab.dataset.category;
            currentPage = 0;
            prepareFilteredItems();
            renderCategoryTabs();
            renderShopItems();
            playSound('../../../assets/audio/ui/click.mp3');
        });
    });
}

// Helper to escape regex special characters
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
// REPLACE getTierFromXP with this safer version
export function getTierFromXP(xpSpent) {
    // Ensure xpSpent is a valid number
    const spent = Number(xpSpent) || 0;

    let tierIndex = 0;

    // Find the highest tier the player qualifies for
    while (tierIndex < 200) { // Safety limit
        const nextTier = generateTier(tierIndex + 1);
        if (!nextTier || spent < nextTier.threshold) break;
        tierIndex++;
    }

    const tier = generateTier(tierIndex);

    // Safety: if somehow null, return bronze
    if (!tier) {
        console.warn('getTierFromXP returned null, defaulting to bronze');
        return { ...BASE_MEMBERSHIP_TIERS[0], index: 0 };
    }

    return tier;
}

// Also fix generateTier to always return valid tier
export function generateTier(tierIndex) {
    // Ensure tierIndex is valid
    const idx = Math.max(0, Math.floor(Number(tierIndex) || 0));

    if (idx < BASE_MEMBERSHIP_TIERS.length) {
        return { ...BASE_MEMBERSHIP_TIERS[idx], index: idx };
    }

    // Letter tiers (after Wario VIP)
    const letterIndex = idx - BASE_MEMBERSHIP_TIERS.length;
    const letterName = getLetterTierName(letterIndex);

    const baseThreshold = BASE_MEMBERSHIP_TIERS[4].threshold; // 1,000,000
    const threshold = baseThreshold * Math.pow(2, letterIndex + 1);

    const discount = Math.min(25, 20 + Math.floor(letterIndex / 5));
    const maxLevel = 20 + Math.floor(letterIndex / 2);

    const hue = (letterIndex * 30) % 360;
    const color = `hsl(${hue}, 70%, 50%)`;

    let icon = '🔷';
    if (letterIndex >= 26) icon = '💠';
    if (letterIndex >= 52) icon = '🌟';
    if (letterIndex >= 78) icon = '✨';

    return {
        id: `tier_${letterName.toLowerCase()}`,
        name: `Tier ${letterName}`,
        icon: icon,
        color: color,
        threshold: threshold,
        discount: discount,
        maxPrice: Infinity,
        maxLevel: maxLevel,
        index: idx,
        isLetterTier: true,
        perks: [
            `${discount}% discount on all items`,
            'All shipping methods free',
            `Items up to Level ${maxLevel}`,
            letterIndex >= 10 ? 'Wario sends you holiday cards' : null,
            letterIndex >= 25 ? 'Wario knows your name' : null,
            letterIndex >= 50 ? 'Wario fears you slightly' : null
        ].filter(Boolean)
    };
}

// Fix applyMembershipDiscount to handle null tier
export function applyMembershipDiscount(basePrice, tier) {
    // Safety check - if tier is null/undefined, no discount
    if (!tier) {
        console.warn('applyMembershipDiscount called with null tier');
        return {
            original: basePrice,
            discounted: basePrice,
            savings: 0,
            discountPercent: 0
        };
    }

    const discount = tier.discount || 0;
    const discounted = Math.ceil(basePrice * (1 - discount / 100));
    return {
        original: basePrice,
        discounted: discounted,
        savings: basePrice - discounted,
        discountPercent: discount
    };
}

// Fix canPurchaseWithMembership to handle null tier
export function canPurchaseWithMembership(item, tier) {
    // Safety check
    if (!tier) {
        return { allowed: false, reason: 'Membership data not loaded' };
    }

    if (item.price > tier.maxPrice) {
        const requiredTier = getRequiredTierForItem(item);
        return {
            allowed: false,
            reason: `Requires ${requiredTier.name} (item costs ${item.price.toLocaleString()} XP)`
        };
    }

    if (item.levelRequirement && item.levelRequirement > tier.maxLevel) {
        const requiredTier = getRequiredTierForItem(item);
        return {
            allowed: false,
            reason: `Requires ${requiredTier.name} (item is Level ${item.levelRequirement})`
        };
    }

    if (item.category === SHOP_CATEGORIES.FORBIDDEN && tier.index < 4) {
        return {
            allowed: false,
            reason: "Forbidden items require Wario's Inner Circle"
        };
    }

    return { allowed: true };
}
function toggleCartItem(itemId) {
    const item = SHOP_ITEMS[itemId];
    if (!item) return;

    // For bulk items, use the bulk system
    if (canBulkOrder(item)) {
        const currentQty = getCartQuantity(itemId);
        if (currentQty > 0) {
            setCartQuantity(itemId, 0);
            playSound('../../../assets/audio/ui/click.mp3');
        } else {
            setCartQuantity(itemId, 1);
            playSound('../../../assets/audio/ui/confirm.mp3');
        }
    } else {
        // Non-bulk items: simple toggle
        const existingIndex = cart.findIndex(c => c.id === itemId);

        if (existingIndex >= 0) {
            cart.splice(existingIndex, 1);
            delete cartQuantities[itemId];
            playSound('../../../assets/audio/ui/click.mp3');
        } else {
            const isFactionItem = item.category === SHOP_CATEGORIES.FACTION;
            const isFactionTab = currentTab === 'faction';

            if (isFactionItem !== isFactionTab) {
                showNotification('Switch tabs to buy this item type.', 'error');
                return;
            }

            cart.push({
                ...item,
                quantity: 1,
                totalPrice: item.price
            });
            cartQuantities[itemId] = 1;
            playSound('../../../assets/audio/ui/confirm.mp3');
        }
    }

    renderShopHeader();
    if (currentTab === 'shop') renderShopItems();
    if (currentTab === 'faction') renderFactionTab();
    renderCart();
}

function cancelOrder(orderId) {
    const orderIndex = pendingOrders.findIndex(o => o.orderId === orderId);
    if (orderIndex === -1) return;

    const order = pendingOrders[orderIndex];

    if (!confirm(`Cancel order ${orderId}?\n\nThis will refund ${order.total.toLocaleString()} XP.`)) {
        return;
    }

    pendingOrders.splice(orderIndex, 1);
    localStorage.setItem('xp_pending_orders', JSON.stringify(pendingOrders));

    playSound('../../../assets/audio/ui/click.mp3');
    showNotification(`Order ${orderId} cancelled. ${order.total.toLocaleString()} XP refunded.`, 'success');

    renderShopHeader();
    if (currentTab === 'shop') renderShopItems();
    if (currentTab === 'faction') renderFactionTab();
    renderCart();
}

// ... [Previous parts of shop.js you provided remain the same] ...

function showReceipt(order, remainingXP) {
    const modal = document.getElementById('receipt-modal');
    const content = document.getElementById('receipt-content');

    if (!modal || !content) return;

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit'
    });

    content.innerHTML = `
        <div class="receipt">
            <div class="receipt-header">
                <div class="receipt-logo">🏪</div>
                <h2 class="receipt-title">Wario's Warehouse</h2>
                <p class="receipt-subtitle">Official Purchase Receipt</p>
            </div>

            <div class="receipt-meta">
                <span>Order: ${order.orderId}</span>
                <span>${dateStr} ${timeStr}</span>
            </div>

            <div class="receipt-party-level">
                ⭐ Party Level: ${PARTY_MAX_LEVEL}
            </div>
            <div class="receipt-items">
                ${order.items.map(item => `
                    <div class="receipt-item">
                        <div class="receipt-item-info">
                            <span class="receipt-item-name">${item.icon} ${item.name}</span>
                            <div class="receipt-item-meta">
                                ${item.quantity > 1 ? `
                                    <span class="receipt-qty">×${item.quantity}</span>
                                    <span class="receipt-bulk-note">(Bulk: ~${Math.ceil(item.totalPrice / item.quantity).toLocaleString()} ea)</span>
                                ` : ''}
                                <span class="receipt-item-durability">
                                    ${item.durability?.isPermanent ? '♾️ Permanent' :
                                      item.durability?.isSingleUse ? '💨 Single Use' :
                                      `🛡️ ${item.durability?.maxUses || '?'} Uses`}
                                </span>
                            </div>
                        </div>
                        <div class="receipt-item-price">
                            ${item.totalPrice.toLocaleString()} XP
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="receipt-summary">
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>${order.subtotal.toLocaleString()} XP</span>
                </div>
                ${order.membershipDiscount > 0 ? `
                    <div class="summary-row discount">
                        <span>${order.membershipTier} Discount:</span>
                        <span>-${order.membershipDiscount}%</span>
                    </div>
                ` : ''}
                <div class="summary-row">
                    <span>Shipping (${order.shippingMethod}):</span>
                    <span>${order.shippingCost === 0 ? 'FREE' : order.shippingCost.toLocaleString() + ' XP'}</span>
                </div>
                <div class="summary-row total">
                    <span>TOTAL PAID:</span>
                    <span>${order.total.toLocaleString()} XP</span>
                </div>
            </div>

            <div class="receipt-footer">
                <p>Remaining Balance: ${remainingXP.toLocaleString()} XP</p>
                <p class="wario-sig">"NO REFUNDS! WAH HA HA!" - Wario</p>
            </div>

            <div class="receipt-actions">
                <button class="close-receipt-btn">Close Receipt</button>
                <button class="print-receipt-btn">🖨️ Print</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';

    // Modal actions
    const closeBtn = content.querySelector('.close-receipt-btn');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        playSound('../../../assets/audio/ui/click.mp3');
    });

    const printBtn = content.querySelector('.print-receipt-btn');
    printBtn.addEventListener('click', () => {
        window.print();
    });

    // Close on click outside
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
}

// Helper function for Letter Tiers (A, B, C... Z, AA...)
function getLetterTierName(index) {
    let name = '';
    // 0 -> A, 25 -> Z, 26 -> AA
    let n = index;

    do {
        const remainder = n % 26;
        name = String.fromCharCode(65 + remainder) + name;
        n = Math.floor(n / 26) - 1;
    } while (n >= 0);

    return name;
}
function isWarioScam(item) {
    const isOverpriced = item.price >= 1000000 && item.id !== 'warios_franchise';
    const isSuspicious = item.rarity === 'common' && item.price < 1500;

    return isOverpriced || isSuspicious;
}

// 2. Text Helper: Call this to get the specific text to display
function getScamWarningText(item) {
    // Condition 1: Cheap Common Item
    if (item.rarity === 'common' && item.price < 1500) {
        return "Too good to be true...";
    }

    // Condition 2: High Price (Default Scam)
    if (item.price >= 1000000 && item.id !== 'warios_franchise') {
        return "TOTAL SCAM!";
    }

    return ""; // No warning text
}



// Export functions that might be needed by other modules
export {
    init,
    completePurchase,
    cancelOrder,
    toggleCartItem,
    showReceipt,
    getLetterTierName
};
// ============================================
// === FACTION TAB ===
// ============================================
function renderFactionTab() {
    const container = document.getElementById('faction-content');
    if (!container) return;

    const purchasedUpgrades = getPurchasedFactionUpgrades();
    const bonuses = calculateFactionBonuses(purchasedUpgrades);
    const status = getFactionXPStatus();

    const stats = factionStats || {
        total: 0, active: 0, injured: 0, critical: 0, mia: 0, special: 0, deceased: 0,
        totalXP: 0, averageLevel: 0, morale: 50, loyalty: 50, combatReadiness: 50,
        levelDistribution: {}, cohortBreakdown: {}, classBreakdown: {}
    };

    const modifiedStats = {
        morale: Math.min(100, stats.morale + (bonuses.morale || 0)),
        loyalty: Math.min(100, stats.loyalty + (bonuses.loyalty || 0)),
        combatReadiness: Math.min(100, stats.combatReadiness + (bonuses.combatReadiness || 0))
    };

    const factionUpgrades = getFactionUpgrades();

    factionUpgrades.sort((a, b) => {
        const aOwned = purchasedUpgrades.includes(a.id);
        const bOwned = purchasedUpgrades.includes(b.id);
        if (aOwned && !bOwned) return -1;
        if (!aOwned && bOwned) return 1;
        return a.price - b.price;
    });

    container.innerHTML = `
        <div class="faction-tab-content">
            <div class="faction-overview">
                <div class="faction-header">
                    <span class="faction-logo">🍄</span>
                    <div>
                        <h2>Liberated Toads</h2>
                        <p class="faction-subtitle">Faction Headquarters • ${purchasedUpgrades.length} Upgrades Active</p>
                    </div>
                    <div class="faction-xp-display">
                        <span class="xp-value">${status.available.toLocaleString()}</span>
                        <span class="xp-label">Available XP</span>
                    </div>
                </div>

                <div class="faction-stats-grid">
                    <div class="faction-stat-card members">
                        <span class="stat-icon">👥</span>
                        <div class="stat-info">
                            <span class="stat-value">${stats.total}</span>
                            <span class="stat-label">Total Members</span>
                        </div>
                        <div class="stat-breakdown">
                            <span class="active">✅ ${stats.active} Active</span>
                            <span class="injured">🩹 ${stats.injured} Injured</span>
                            <span class="critical">🚨 ${stats.critical} Critical</span>
                            <span class="mia">❓ ${stats.mia} MIA</span>
                            ${stats.special > 0 ? `<span class="special">⭐ ${stats.special} Special</span>` : ''}
                        </div>
                    </div>

                    <div class="faction-stat-card">
                        <span class="stat-icon">💪</span>
                        <div class="stat-info">
                            <span class="stat-value">${modifiedStats.morale}%</span>
                            <span class="stat-label">Morale</span>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-bar-fill morale" style="width: ${modifiedStats.morale}%"></div>
                        </div>
                        ${bonuses.morale > 0 ? `<span class="bonus-indicator">+${bonuses.morale}% from upgrades</span>` : ''}
                    </div>

                    <div class="faction-stat-card">
                        <span class="stat-icon">❤️</span>
                        <div class="stat-info">
                            <span class="stat-value">${modifiedStats.loyalty}%</span>
                            <span class="stat-label">Loyalty</span>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-bar-fill loyalty" style="width: ${modifiedStats.loyalty}%"></div>
                        </div>
                        ${bonuses.loyalty > 0 ? `<span class="bonus-indicator">+${bonuses.loyalty}% from upgrades</span>` : ''}
                    </div>

                    <div class="faction-stat-card">
                        <span class="stat-icon">⚔️</span>
                        <div class="stat-info">
                            <span class="stat-value">${modifiedStats.combatReadiness}%</span>
                            <span class="stat-label">Combat Readiness</span>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-bar-fill combat" style="width: ${modifiedStats.combatReadiness}%"></div>
                        </div>
                        ${bonuses.combatReadiness > 0 ? `<span class="bonus-indicator">+${bonuses.combatReadiness}% from upgrades</span>` : ''}
                    </div>

                    <div class="faction-stat-card">
                        <span class="stat-icon">⭐</span>
                        <div class="stat-info">
                            <span class="stat-value">${stats.totalXP.toLocaleString()}</span>
                            <span class="stat-label">Total Faction XP</span>
                        </div>
                    </div>

                    <div class="faction-stat-card">
                        <span class="stat-icon">📊</span>
                        <div class="stat-info">
                            <span class="stat-value">Lvl ${stats.averageLevel}</span>
                            <span class="stat-label">Average Level</span>
                        </div>
                        <div class="level-distribution">
                            ${Object.entries(stats.levelDistribution || {}).sort((a,b) => parseInt(b[0]) - parseInt(a[0])).slice(0, 5).map(([lvl, count]) =>
                                `<span class="level-tag">Lv${lvl}: ${count}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>

            ${purchasedUpgrades.length > 0 ? `
                <div class="faction-section">
                    <h3>✅ Active Upgrades</h3>
                    <div class="purchased-upgrades-grid">
                        ${purchasedUpgrades.map(itemId => {
                            const item = SHOP_ITEMS[itemId];
                            if (!item) return '';
                            return `
                                <div class="purchased-upgrade-card">
                                    <span class="upgrade-icon">${item.icon}</span>
                                    <div class="upgrade-info">
                                        <span class="upgrade-name">${item.name}</span>
                                        <div class="upgrade-bonuses">
                                            ${Object.entries(item.factionBonus || {}).map(([key, val]) =>
                                                `<span class="bonus-tag active">+${val}% ${key}</span>`
                                            ).join('')}
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="faction-section">
                <h3>🛒 Available Faction Upgrades</h3>
                <div class="faction-upgrades-grid">
                    ${factionUpgrades.map(item => {
                        const isPurchased = purchasedUpgrades.includes(item.id);
                        const canAfford = status.available >= item.price;
                        const inCart = cart.some(c => c.id === item.id);
                        const durability = calculateDurability(item);

                        return `
                            <div class="faction-upgrade-card ${isPurchased ? 'purchased' : ''} ${!canAfford && !isPurchased ? 'unaffordable' : ''} ${inCart ? 'in-cart' : ''}"
                                 data-id="${item.id}">
                                <div class="upgrade-header">
                                    <span class="upgrade-icon">${item.icon}</span>
                                    <div class="upgrade-title">
                                        <span class="upgrade-name">${item.name}</span>
                                        <span class="upgrade-price ${isPurchased ? 'owned' : (canAfford ? '' : 'unaffordable')}">
                                            ${isPurchased ? '✅ OWNED' : item.price.toLocaleString() + ' XP'}
                                        </span>
                                    </div>
                                </div>

                                <div class="upgrade-badges">
                                    ${renderDurabilityBadge(item)}
                                    ${renderLevelRequirement(item)}
                                </div>

                                <p class="upgrade-description">${item.description}</p>
                                <div class="upgrade-effects">
                                    ${item.effects.map(e => `<span class="effect-tag">✦ ${e}</span>`).join('')}
                                </div>
                                <div class="upgrade-bonuses">
                                    ${Object.entries(item.factionBonus || {}).map(([key, val]) =>
                                        `<span class="bonus-tag">+${val}% ${key}</span>`
                                    ).join('')}
                                </div>
                                ${!isPurchased ? `
                                    <button class="faction-add-btn"
                                            ${!canAfford ? 'disabled' : ''}
                                            data-id="${item.id}">
                                        ${inCart ? '✓ In Cart' : '🛒 Add to Cart'}
                                    </button>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div class="faction-section bonus-summary">
                <h3>📊 Total Upgrade Bonuses</h3>
                <div class="bonus-summary-grid">
                    ${Object.entries(bonuses).filter(([_, val]) => val > 0).length > 0
                        ? Object.entries(bonuses).filter(([_, val]) => val > 0).map(([key, val]) => `
                            <div class="bonus-summary-item">
                                <span class="bonus-key">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                <span class="bonus-value">+${val}%</span>
                            </div>
                        `).join('')
                        : '<p class="no-bonuses">No bonuses active. Purchase faction upgrades to improve your faction!</p>'
                    }
                </div>
            </div>
        </div>
    `;

    container.querySelectorAll('.faction-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = btn.dataset.id;
            toggleCartItem(itemId);
        });
    });
}

function renderPurchaseHistory() {
    const container = document.getElementById('purchase-history');
    if (!container) return;

    if (approvedPurchases.length === 0) {
        container.innerHTML = `
            <h3>📜 Order History</h3>
            <div class="history-empty">
                <p>No approved orders yet</p>
            </div>
        `;
        return;
    }

    const grouped = {};
    approvedPurchases.forEach(p => {
        const date = p.approvedAt?.split('T')[0] || 'Unknown';
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push(p);
    });

    const dates = Object.keys(grouped).sort().reverse();

    container.innerHTML = `
        <h3>📜 Order History</h3>
        <div class="history-list">
            ${dates.map(date => `
                <div class="history-date-group">
                    <div class="history-date">${new Date(date).toLocaleDateString()}</div>
                    ${grouped[date].map(p => {
                        const item = SHOP_ITEMS[p.itemId];
                        return `
                            <div class="history-item">
                                <span class="history-icon">${item?.icon || '📦'}</span>
                                <span class="history-name">${p.itemName || item?.name || 'Unknown'}</span>
                                <span class="history-price">-${p.price.toLocaleString()}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            `).join('')}
        </div>
        <div class="history-total">
            <span>Total Spent:</span>
            <span>${approvedPurchases.reduce((sum, p) => sum + p.price, 0).toLocaleString()} XP</span>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', init);
