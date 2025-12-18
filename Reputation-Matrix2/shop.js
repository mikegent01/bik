import { 
    SHOP_ITEMS, 
    SHOP_CATEGORIES, 
    VENDORS, 
    SHIPPING_METHODS, 
    getShopStats, 
    getFactionUpgrades, 
    calculateFactionBonuses,
} from './shop-data.js';
import { REWARDS_DATA } from './quests/quests-main.js';
import { playSound } from './common.js';
import { getAllToadsData, getPreCalculatedFactionStats } from './liberated-toads-system.js';
import { 
    renderDurabilityBadge, 
    renderLevelRequirement, 
    calculateDurability, 
    addOwnedItem, 
    injectDurabilityStyles 
} from './shop-durability.js';
let currentCategory = 'all';
let currentTab = 'shop';
let cart = [];
let selectedShipping = 'standard';
let cartQuantities = {}; // Track quantities for bulk orders
const PARTY_MAX_LEVEL = 6;
let pendingOrders = JSON.parse(localStorage.getItem('xp_pending_orders') || '[]');
let approvedPurchases = [];
let spentFactionXP = parseInt(localStorage.getItem('faction_xp_spent') || '0');

// Faction data - loaded once on init
let factionStats = null;
let allToads = [];
function canPurchaseAtLevel(item, partyLevel = PARTY_MAX_LEVEL) {
    if (!item.levelRequirement) return true;
    return partyLevel >= item.levelRequirement;
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

function renderBulkControls(item, currentQty, maxQty, canAfford) {
    if (!canBulkOrder(item) || maxQty <= 1) {
        return `
            <button class="add-to-cart-btn" 
                    ${(!canAfford || maxQty <= 0) ? 'disabled' : ''}
                    data-id="${item.id}">
                ${currentQty > 0 ? '✓ In Cart' : '🛒 Add to Cart'}
            </button>
        `;
    }
    
    const breakdown = getBulkPriceBreakdown(item, Math.max(1, currentQty));
    const nextUnitPrice = currentQty < maxQty ? 
        Math.ceil(item.price * (1 + (currentQty * (BULK_PRICING.priceIncreasePerUnit[item.rarity] || 0.05)))) : 0;
    
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
                    <span>Total: ${calculateBulkPrice(item, currentQty).toLocaleString()} XP</span>
                    ${currentQty > 1 ? `<span class="bulk-savings-note">(${currentQty} × ~${Math.ceil(calculateBulkPrice(item, currentQty) / currentQty)} avg)</span>` : ''}
                </div>
            ` : `
                <div class="bulk-next-price">
                    <span>First unit: ${item.price.toLocaleString()} XP</span>
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
// --- Fetch Data ---
async function loadApprovedPurchases() {
    try {
        const response = await fetch(`./shop-purchases.json?t=${Date.now()}`);
        if (response.ok) {
            approvedPurchases = await response.json();
            console.log('✅ Loaded approved purchases:', approvedPurchases.length);
        }
    } catch (error) {
        console.log('ℹ️ No approved purchases file found');
        approvedPurchases = [];
    }
}
export const BULK_PRICING = {
    enabled: true,
    allowedRarities: ['common', 'uncommon'], // Only these can be bulk ordered
    maxQuantity: 10,
    priceIncreasePerUnit: {
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

// --- Render Functions ---
function renderShopHeader() {
    const status = getXPStatus();
    const container = document.getElementById('shop-header');
    if (!container) return;
    
    const themeClass = currentTab === 'faction' ? 'faction-theme' : 'shop-theme';
    const totalCartItems = cart.reduce((sum, c) => sum + (c.quantity || 1), 0);
    const cartTotalPrice = cart.reduce((sum, c) => sum + (c.totalPrice || c.price), 0);
    
    container.className = `shop-header ${themeClass}`;
    
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
            
            <div class="party-level-display">
                <span class="party-level-icon">⭐</span>
                <div class="party-level-info">
                    <span class="party-level-value">Level ${PARTY_MAX_LEVEL}</span>
                    <span class="party-level-label">Party Max</span>
                </div>
            </div>
            
            <div class="xp-wallet">
                <div class="wallet-stat total">
                    <span class="wallet-value">${status.total.toLocaleString()}</span>
                    <span class="wallet-label">${status.type} Total</span>
                </div>
                <div class="wallet-stat spent">
                    <span class="wallet-value">${status.spent.toLocaleString()}</span>
                    <span class="wallet-label">Spent</span>
                </div>
                <div class="wallet-stat pending">
                    <span class="wallet-value">${status.pending.toLocaleString()}</span>
                    <span class="wallet-label">Pending</span>
                </div>
                <div class="wallet-stat available">
                    <span class="wallet-value">${status.icon} ${status.available.toLocaleString()}</span>
                    <span class="wallet-label">Available</span>
                </div>
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
        </div>
    `;
    
    container.querySelectorAll('.main-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const newTab = tab.dataset.tab;
            if (newTab === currentTab) return;
            
            if (cart.length > 0) {
                if (!confirm('Switching tabs will clear your cart. Continue?')) return;
                cart = [];
                cartQuantities = {};
            }
            
            currentTab = newTab;
            renderShopHeader();
            renderMainContent();
            playSound('click.mp3');
        });
    });
}
function renderMainContent() {
    const shopGrid = document.getElementById('shop-items');
    const factionContent = document.getElementById('faction-content');
    const sidebar = document.querySelector('.shop-sidebar');
    
    if (currentTab === 'shop') {
        if (shopGrid) shopGrid.style.display = 'grid';
        if (factionContent) factionContent.style.display = 'none';
        if (sidebar) sidebar.style.display = 'flex';
        
        renderCategoryTabs();
        renderShopItems();
    } else {
        if (shopGrid) shopGrid.style.display = 'none';
        if (factionContent) factionContent.style.display = 'block';
        if (sidebar) sidebar.style.display = 'none';
        
        renderFactionTab();
    }
    
    renderCart();
    renderPurchaseHistory();
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
    
    container.innerHTML = categories.map(cat => `
        <button class="category-tab ${currentCategory === cat.id ? 'active' : ''}" 
                data-category="${cat.id}">
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-name">${cat.name}</span>
            <span class="cat-count">(${cat.count})</span>
        </button>
    `).join('');
    
    container.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            currentCategory = tab.dataset.category;
            renderCategoryTabs();
            renderShopItems();
            playSound('click.mp3');
        });
    });
}


function renderShopItems() {
    const container = document.getElementById('shop-items');
    if (!container) return;
    
    const status = getXPStatus();
    
    let items = Object.values(SHOP_ITEMS).filter(item => item.category !== SHOP_CATEGORIES.FACTION);
    
    if (currentCategory !== 'all') {
        items = items.filter(item => item.category === currentCategory);
    }
    
    items.sort((a, b) => a.price - b.price);
    
    if (items.length === 0) {
        container.innerHTML = `
            <div class="no-items">
                <span class="empty-icon">🚫</span>
                <p>No items in this category</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = items.map(item => {
        const currentQty = getCartQuantity(item.id);
        const currentItemCost = currentQty > 0 ? calculateBulkPrice(item, currentQty) : 0;
        
        // Calculate what's already committed in cart (excluding this item)
        const otherCartCost = cart
            .filter(c => c.id !== item.id)
            .reduce((sum, c) => sum + (c.totalPrice || c.price), 0);
        
        const canAffordOne = status.available - otherCartCost - currentItemCost >= item.price;
        const inCart = currentQty > 0;
        
        const approvedCount = approvedPurchases.filter(p => p.itemId === item.id).length;
        const pendingCount = pendingOrders.reduce((sum, o) => 
            sum + o.items.filter(i => i.id === item.id).reduce((s, i) => s + (i.quantity || 1), 0), 0);
        const remainingStock = item.stock - approvedCount - pendingCount - currentQty;
        
        const outOfStock = remainingStock <= 0 && currentQty === 0;
        const rarityClass = item.rarity || 'common';
        const canUseAtLevel = canPurchaseAtLevel(item);
        const levelLockedClass = !canUseAtLevel ? 'level-locked' : '';
        const disabledClass = (!canAffordOne && !inCart) || outOfStock ? 'disabled' : '';
        const inCartClass = inCart ? 'in-cart' : '';
        
        const vendor = getVendorDisplay(item.vendor);
        const maxBulkQty = getMaxBulkQuantity(item);
        const isBulkable = canBulkOrder(item);
        
        return `
            <div class="shop-item ${rarityClass} ${disabledClass} ${inCartClass} ${levelLockedClass}" 
                 data-id="${item.id}"
                 data-bulkable="${isBulkable}">
                <div class="item-header">
                    <span class="item-icon">${item.icon}</span>
                    <div class="item-title-group">
                        <span class="item-name">${item.name}</span>
                        <span class="item-rarity ${rarityClass}">${rarityClass}</span>
                    </div>
                    <span class="item-price ${canAffordOne || inCart ? '' : 'unaffordable'}">
                        ${item.price.toLocaleString()} XP
                    </span>
                </div>
                
                <div class="item-badges">
                    ${renderDurabilityBadge(item)}
                    ${renderLevelBadge(item)}
                </div>
                
                <p class="item-description">${item.description}</p>
                
                <div class="item-effects">
                    ${item.effects.map(e => `<span class="effect-tag">✦ ${e}</span>`).join('')}
                </div>
                
                ${item.warning ? `<div class="item-warning">⚠️ ${item.warning}</div>` : ''}
                ${item.requirement ? `<div class="item-requirement">🔒 ${item.requirement}</div>` : ''}
                ${!canUseAtLevel ? `
                    <div class="item-level-warning">
                        ⚠️ Party Level ${PARTY_MAX_LEVEL} - Need Level ${item.levelRequirement} to use
                    </div>
                ` : ''}
                
                <div class="item-footer">
                    <div class="vendor-info">
                        <span class="vendor-icon">${vendor.icon}</span>
                        <span class="vendor-name">${vendor.name}</span>
                    </div>
                    <span class="item-stock ${remainingStock <= 3 ? 'low' : ''}">
                        ${outOfStock ? '❌ SOLD OUT' : `📦 ${remainingStock} left`}
                    </span>
                </div>
                
                <div class="item-shipping">
                    <span class="shipping-label">📬 Shipped by:</span>
                    <span class="shipping-info">${item.shippedBy || 'Standard Courier'}</span>
                </div>
                
                ${renderBulkControls(item, currentQty, maxBulkQty, canAffordOne)}
            </div>
        `;
    }).join('');
    
    // Event listeners for non-bulk items
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = btn.dataset.id;
            toggleCartItem(itemId);
        });
    });
    
    // Event listeners for bulk controls
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
            playSound('click.mp3');
            renderShopHeader();
            renderShopItems();
            renderCart();
        });
        
        plusBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentQty = getCartQuantity(itemId);
            const maxQty = getMaxBulkQuantity(item);
            if (currentQty < maxQty) {
                setCartQuantity(itemId, currentQty + 1);
                playSound('confirm.mp3');
                renderShopHeader();
                renderShopItems();
                renderCart();
            }
        });
    });
}

function toggleCartItem(itemId) {
    const item = SHOP_ITEMS[itemId];
    if (!item) return;
    
    // For bulk items, use the bulk system
    if (canBulkOrder(item)) {
        const currentQty = getCartQuantity(itemId);
        if (currentQty > 0) {
            setCartQuantity(itemId, 0);
            playSound('click.mp3');
        } else {
            setCartQuantity(itemId, 1);
            playSound('confirm.mp3');
        }
    } else {
        // Non-bulk items: simple toggle
        const existingIndex = cart.findIndex(c => c.id === itemId);
        
        if (existingIndex >= 0) {
            cart.splice(existingIndex, 1);
            delete cartQuantities[itemId];
            playSound('click.mp3');
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
            playSound('confirm.mp3');
        }
    }
    
    renderShopHeader();
    if (currentTab === 'shop') renderShopItems();
    if (currentTab === 'faction') renderFactionTab();
    renderCart();
}
function renderCart() {
    const container = document.getElementById('shop-cart');
    if (!container) return;
    
    const status = getXPStatus();
    const isFaction = currentTab === 'faction';
    const shippingCost = isFaction ? 0 : (cart.length > 0 ? (SHIPPING_METHODS[selectedShipping.toUpperCase()]?.cost || 0) : 0);
    const cartSubtotal = cart.reduce((sum, c) => sum + (c.totalPrice || c.price), 0);
    const cartTotal = cartSubtotal + shippingCost;
    const canCheckout = status.available >= cartTotal && cart.length > 0;
    
    const totalItems = cart.reduce((sum, c) => sum + (c.quantity || 1), 0);
    
    let cartHtml = `<h3>${isFaction ? '🍄 Faction Cart' : '🛒 Shopping Cart'} ${totalItems > 0 ? `(${totalItems} items)` : ''}</h3>`;
    
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
                ${cart.map(item => `
                    <div class="cart-item" data-id="${item.id}">
                        <span class="cart-item-icon">${item.icon}</span>
                        <div class="cart-item-details">
                            <span class="cart-item-name">${item.name}</span>
                            ${item.quantity > 1 ? `
                                <span class="cart-item-qty">×${item.quantity}</span>
                                <span class="cart-item-unit-price">(~${Math.ceil(item.totalPrice / item.quantity).toLocaleString()} ea)</span>
                            ` : ''}
                        </div>
                        <span class="cart-item-price">${(item.totalPrice || item.price).toLocaleString()}</span>
                        <button class="remove-btn" data-id="${item.id}">✕</button>
                    </div>
                `).join('')}
            </div>
        `;
        
        if (!isFaction) {
            cartHtml += `
                <div class="shipping-selector">
                    <label>📬 Shipping Method:</label>
                    <select id="shipping-select">
                        ${Object.values(SHIPPING_METHODS).map(method => `
                            <option value="${method.id}" ${selectedShipping === method.id ? 'selected' : ''}>
                                ${method.icon} ${method.name} - ${method.cost === 0 ? 'FREE' : method.cost.toLocaleString() + ' XP'} (${method.deliveryTime})
                            </option>
                        `).join('')}
                    </select>
                </div>
            `;
        }
        
        cartHtml += `
            <div class="cart-total-section">
                <div class="cart-subtotal-row">
                    <span>Subtotal (${totalItems} items):</span>
                    <span>${cartSubtotal.toLocaleString()} XP</span>
                </div>
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
    
    // Pending Orders Section
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
    
    // Event listeners
    container.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = btn.dataset.id;
            setCartQuantity(itemId, 0);
            playSound('click.mp3');
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
        playSound('click.mp3');
    });
    
    container.querySelectorAll('.cancel-order-btn').forEach(btn => {
        btn.addEventListener('click', () => cancelOrder(btn.dataset.orderId));
    });
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
    
    playSound('click.mp3');
    showNotification(`Order ${orderId} cancelled. ${order.total.toLocaleString()} XP refunded.`, 'success');
    
    renderShopHeader();
    if (currentTab === 'shop') renderShopItems();
    if (currentTab === 'faction') renderFactionTab();
    renderCart();
}

function completePurchase() {
    if (cart.length === 0) return;
    
    const status = getXPStatus();
    const isFaction = currentTab === 'faction';
    const shippingCost = isFaction ? 0 : (SHIPPING_METHODS[selectedShipping.toUpperCase()]?.cost || 0);
    const cartTotal = cart.reduce((sum, c) => sum + (c.totalPrice || c.price), 0) + shippingCost;
    
    if (status.available < cartTotal) {
        showNotification('Insufficient XP!', 'error');
        return;
    }
    
    const totalItems = cart.reduce((sum, c) => sum + (c.quantity || 1), 0);
    
    if (isFaction) {
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
            
            playSound('confirm.mp3');
            showNotification('Faction upgrades acquired!', 'success');
            
            cart = [];
            cartQuantities = {};
            renderShopHeader();
            renderFactionTab();
            renderCart();
        }
    } else {
        const shippingInfo = SHIPPING_METHODS[selectedShipping.toUpperCase()];
        const orderId = generateOrderId();
        
        const order = {
            orderId: orderId,
            items: cart.map(item => {
                const durability = calculateDurability(item);
                return {
                    id: item.id,
                    name: item.name,
                    basePrice: item.price,
                    quantity: item.quantity || 1,
                    totalPrice: item.totalPrice || item.price,
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
            subtotal: cart.reduce((sum, c) => sum + (c.totalPrice || c.price), 0),
            shippingMethod: shippingInfo.name,
            shippingCost: shippingCost,
            total: cartTotal,
            isFactionOrder: false,
            submittedAt: new Date().toISOString(),
            status: 'pending'
        };
        
        pendingOrders.push(order);
        localStorage.setItem('xp_pending_orders', JSON.stringify(pendingOrders));
        
        showReceipt(order, status.available - cartTotal);
        
        cart = [];
        cartQuantities = {};
        playSound('confirm.mp3');
        
        renderShopHeader();
        renderShopItems();
        renderCart();
    }
}
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
                        <span class="receipt-item-price">${item.totalPrice.toLocaleString()} XP</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="receipt-shipping">
                <span>📬 ${order.shippingMethod}</span>
                <span>${order.shippingCost === 0 ? 'FREE' : order.shippingCost.toLocaleString() + ' XP'}</span>
            </div>
            
            <div class="receipt-summary">
                <div class="receipt-summary-row">
                    <span>Items:</span>
                    <span>${order.itemCount}</span>
                </div>
                <div class="receipt-summary-row">
                    <span>Subtotal:</span>
                    <span>${order.subtotal.toLocaleString()} XP</span>
                </div>
            </div>
            
            <div class="receipt-total">
                <span>TOTAL</span>
                <span>${order.total.toLocaleString()} XP</span>
            </div>
            
            <div class="receipt-balance">
                <div class="receipt-balance-label">Remaining Balance</div>
                <div class="receipt-balance-value">${remainingXP.toLocaleString()} XP</div>
            </div>
            
            <div class="receipt-footer">
                <p><strong>⏳ ORDER STATUS: PENDING APPROVAL</strong></p>
                <p>Your order has been submitted and is awaiting</p>
                <p>manual approval by Wario himself.</p>
                <p style="margin-top: 8px; font-size: 0.9em;">You can cancel this order from your cart.</p>
                <div class="receipt-barcode">||||| ${order.orderId} |||||</div>
            </div>
        </div>
        <button class="receipt-close-btn">Close Receipt</button>
    `;
    
    modal.style.display = 'flex';
    
    content.querySelector('.receipt-close-btn').addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}
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

// --- Initialize ---
async function init() {
    console.log('🏪 Initializing Wario\'s Warehouse...');
    localStorage.setItem('faction_xp_spent', '30500');
localStorage.setItem('faction_items_owned', JSON.stringify([
    'faction_uno_deck',
    'faction_banners', 
    'faction_memorial',
    'faction_ink_supplies',
    'faction_training_dummies'
]));
    
    // Inject durability styles
    injectDurabilityStyles();
    
    // Load approved purchases
    await loadApprovedPurchases();
    
    // Load faction data
    loadFactionData();
    
    // Render UI
    renderShopHeader();
    renderMainContent();
    
    console.log('✅ Shop initialized');
    console.log('💎 Player XP:', getPlayerXPStatus());
    console.log('🍄 Faction XP:', getFactionXPStatus());
}
document.addEventListener('DOMContentLoaded', init);