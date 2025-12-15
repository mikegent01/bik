// shop.js - Wario's Warehouse XP Emporium

import { SHOP_ITEMS, SHOP_CATEGORIES, getShopStats } from './shop-data.js';
import { REWARDS_DATA } from './quests//quests-main.js'; 
import { playSound } from './common.js';

// --- State ---
let currentCategory = 'all';
let cart = [];

// Load pending orders from localStorage (these are orders waiting for manual server approval)
let pendingOrders = JSON.parse(localStorage.getItem('xp_pending_orders') || '[]');

// Load approved purchases (manually updated via server-side JSON)
let approvedPurchases = [];

// --- Fetch Server-Side Approved Purchases ---
async function loadApprovedPurchases() {
    try {
        const response = await fetch(`./shop-purchases.json?t=${Date.now()}`);
        if (response.ok) {
            approvedPurchases = await response.json();
            console.log('✅ Loaded approved purchases:', approvedPurchases.length);
        }
    } catch (error) {
        console.log('ℹ️ No approved purchases file found (this is normal for first run)');
        approvedPurchases = [];
    }
}

// --- Calculate Available XP ---
function getAvailableXP() {
    const allRewards = REWARDS_DATA.extractAll();
    const earnedXP = allRewards
        .filter(r => r.earned && r.type === 'xp')
        .reduce((sum, r) => sum + (r.amount || 0), 0);
    
    // Calculate spent from APPROVED purchases only
    const spentXP = approvedPurchases.reduce((sum, p) => sum + p.price, 0);
    
    // Calculate pending XP (not yet approved but reserved)
    const pendingXP = pendingOrders.reduce((sum, o) => 
        sum + o.items.reduce((s, i) => s + i.price, 0), 0);
    
    return {
        total: earnedXP,
        spent: spentXP,
        pending: pendingXP,
        available: earnedXP - spentXP - pendingXP
    };
}

// --- Helper: Get Earned By Display ---
function getEarnedByDisplay(earnedBy) {
    const displayNames = {
        'party': '👥 The Party',
        'archie': '🔥 Archie',
        'humpik': '🪓 Humpik',
        'bowser': '🐢 Bowser',
        'dan': '🍄 Dan',
        'markop': '🐴 Markop',
        'remi': '🔧 Remi',
        'donkey_kong': '🦍 Donkey Kong'
    };
    return displayNames[earnedBy] || `👤 ${earnedBy}`;
}

// --- Generate Order ID ---
function generateOrderId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = 'WW-';
    for (let i = 0; i < 8; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

// --- Render Functions ---
function renderShopHeader() {
    const xpStatus = getAvailableXP();
    const container = document.getElementById('shop-header');
    if (!container) return;
    
    container.innerHTML = `
        <div class="header-content">
            <div class="shop-title">
                <span class="shop-logo">🏪</span>
                <div>
                    <h1>WARIO'S WAREHOUSE</h1>
                    <p class="shop-subtitle">"If it's shiny, I'm selling it!" - Wario</p>
                </div>
            </div>
            <div class="xp-wallet">
                <div class="wallet-stat total">
                    <span class="wallet-value">${xpStatus.total.toLocaleString()}</span>
                    <span class="wallet-label">Total Earned</span>
                </div>
                <div class="wallet-stat spent">
                    <span class="wallet-value">${xpStatus.spent.toLocaleString()}</span>
                    <span class="wallet-label">Spent</span>
                </div>
                <div class="wallet-stat available">
                    <span class="wallet-value">${xpStatus.available.toLocaleString()}</span>
                    <span class="wallet-label">Available</span>
                </div>
            </div>
            <div class="cart-summary" id="cart-summary-btn">
                <span class="cart-icon">🛒</span>
                <span class="cart-count">${cart.length}</span>
                <span class="cart-total">${cart.reduce((sum, c) => sum + c.price, 0).toLocaleString()} XP</span>
            </div>
        </div>
    `;
}

function renderCategoryTabs() {
    const container = document.getElementById('shop-categories');
    if (!container) return;
    
    const stats = getShopStats();
    
    const categories = [
        { id: 'all', name: 'All Items', icon: '🏪', count: stats.totalItems },
        { id: SHOP_CATEGORIES.CONSUMABLES, name: 'Consumables', icon: '🍄', count: stats.byCategory[SHOP_CATEGORIES.CONSUMABLES] },
        { id: SHOP_CATEGORIES.EQUIPMENT, name: 'Equipment', icon: '⚔️', count: stats.byCategory[SHOP_CATEGORIES.EQUIPMENT] },
        { id: SHOP_CATEGORIES.CURIOSITIES, name: 'Curiosities', icon: '❓', count: stats.byCategory[SHOP_CATEGORIES.CURIOSITIES] },
        { id: SHOP_CATEGORIES.SERVICES, name: 'Services', icon: '🏠', count: stats.byCategory[SHOP_CATEGORIES.SERVICES] },
        { id: SHOP_CATEGORIES.PREMIUM, name: 'Premium', icon: '✨', count: stats.byCategory[SHOP_CATEGORIES.PREMIUM] },
        { id: SHOP_CATEGORIES.FORBIDDEN, name: 'Forbidden', icon: '☠️', count: stats.byCategory[SHOP_CATEGORIES.FORBIDDEN] }
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
    
    const xpStatus = getAvailableXP();
    
    let items = Object.values(SHOP_ITEMS);
    if (currentCategory !== 'all') {
        items = items.filter(item => item.category === currentCategory);
    }
    
    // Sort by price
    items.sort((a, b) => a.price - b.price);
    
    if (items.length === 0) {
        container.innerHTML = `
            <div class="no-items">
                <span class="empty-icon">🚫</span>
                <p>No items in this category</p>
                <p style="font-size: 0.85em; margin-top: 8px;">Check back later, Wario's always finding new stuff!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = items.map(item => {
        const canAfford = xpStatus.available >= item.price;
        const inCart = cart.some(c => c.id === item.id);
        
        // Calculate remaining stock (original - approved purchases - pending orders)
        const approvedCount = approvedPurchases.filter(p => p.itemId === item.id).length;
        const pendingCount = pendingOrders.reduce((sum, o) => 
            sum + o.items.filter(i => i.id === item.id).length, 0);
        const remainingStock = item.stock - approvedCount - pendingCount;
        
        const outOfStock = remainingStock <= 0;
        const rarityClass = item.rarity || 'common';
        const disabledClass = (!canAfford || outOfStock) ? 'disabled' : '';
        const inCartClass = inCart ? 'in-cart' : '';
        
        return `
            <div class="shop-item ${rarityClass} ${disabledClass} ${inCartClass}" data-id="${item.id}">
                <div class="item-header">
                    <span class="item-icon">${item.icon}</span>
                    <div class="item-title-group">
                        <span class="item-name">${item.name}</span>
                        <span class="item-rarity ${rarityClass}">${rarityClass}</span>
                    </div>
                    <span class="item-price ${canAfford ? '' : 'unaffordable'}">
                        ${item.price.toLocaleString()} XP
                    </span>
                </div>
                <p class="item-description">${item.description}</p>
                <div class="item-effects">
                    ${item.effects.map(e => `<span class="effect-tag">✦ ${e}</span>`).join('')}
                </div>
                ${item.warning ? `<div class="item-warning">⚠️ ${item.warning}</div>` : ''}
                <div class="item-footer">
                    <span class="item-vendor">📍 ${item.vendor}</span>
                    <span class="item-stock ${remainingStock <= 3 ? 'low' : ''}">
                        ${outOfStock ? '❌ SOLD OUT' : `📦 ${remainingStock} left`}
                    </span>
                </div>
                <button class="add-to-cart-btn" 
                        ${(!canAfford || outOfStock) ? 'disabled' : ''}>
                    ${inCart ? '✓ In Cart' : '🛒 Add to Cart'}
                </button>
            </div>
        `;
    }).join('');
    
    // Add event listeners
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemCard = btn.closest('.shop-item');
            const itemId = itemCard.dataset.id;
            toggleCartItem(itemId);
        });
    });
}

function toggleCartItem(itemId) {
    const existingIndex = cart.findIndex(c => c.id === itemId);
    
    if (existingIndex >= 0) {
        cart.splice(existingIndex, 1);
        playSound('click.mp3');
    } else {
        const item = SHOP_ITEMS[itemId];
        if (item) {
            cart.push({ ...item });
            playSound('confirm.mp3');
        }
    }
    
    renderShopHeader();
    renderShopItems();
    renderCart();
}

function renderCart() {
    const container = document.getElementById('shop-cart');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <h3>🛒 Shopping Cart</h3>
            <div class="cart-empty">
                <span class="empty-icon">🛒</span>
                <p>Your cart is empty</p>
                <p class="subtext" style="font-size: 0.8em; margin-top: 4px;">Wario's watching... buy something!</p>
            </div>
        `;
        renderPendingOrders(container);
        return;
    }
    
    const xpStatus = getAvailableXP();
    const cartTotal = cart.reduce((sum, c) => sum + c.price, 0);
    const canCheckout = xpStatus.available >= cartTotal;
    
    container.innerHTML = `
        <h3>🛒 Shopping Cart</h3>
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <span class="cart-item-icon">${item.icon}</span>
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">${item.price.toLocaleString()}</span>
                    <button class="remove-btn" data-id="${item.id}">✕</button>
                </div>
            `).join('')}
        </div>
        <div class="cart-total-section">
            <div class="cart-total-row">
                <span>Total:</span>
                <span class="cart-total-value">${cartTotal.toLocaleString()} XP</span>
            </div>
            <div class="cart-remaining-row ${canCheckout ? '' : 'negative'}">
                <span>After purchase:</span>
                <span>${(xpStatus.available - cartTotal).toLocaleString()} XP</span>
            </div>
        </div>
        <button class="checkout-btn" ${canCheckout ? '' : 'disabled'}>
            ${canCheckout ? '💰 Place Order' : '❌ Insufficient XP'}
        </button>
        <button class="clear-cart-btn">Clear Cart</button>
    `;
    
    renderPendingOrders(container);
    
    // Event listeners
    container.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            toggleCartItem(btn.dataset.id);
        });
    });
    
    container.querySelector('.checkout-btn')?.addEventListener('click', completePurchase);
    container.querySelector('.clear-cart-btn')?.addEventListener('click', () => {
        cart = [];
        renderShopHeader();
        renderShopItems();
        renderCart();
        playSound('click.mp3');
    });
}

function renderPendingOrders(container) {
    if (pendingOrders.length === 0) return;
    
    const pendingHtml = `
        <div class="pending-orders">
            <h4>⏳ Pending Orders</h4>
            ${pendingOrders.map(order => `
                <div class="pending-order-item">
                    <span>${order.orderId}</span>
                    <span class="pending-status awaiting">Awaiting Approval</span>
                </div>
            `).join('')}
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', pendingHtml);
}

function completePurchase() {
    if (cart.length === 0) return;
    
    const xpStatus = getAvailableXP();
    const cartTotal = cart.reduce((sum, c) => sum + c.price, 0);
    
    if (xpStatus.available < cartTotal) {
        alert('Insufficient XP!');
        return;
    }
    
    // Create pending order
    const order = {
        orderId: generateOrderId(),
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            icon: item.icon
        })),
        total: cartTotal,
        submittedAt: new Date().toISOString(),
        status: 'pending'
    };
    
    // Add to pending orders
    pendingOrders.push(order);
    localStorage.setItem('xp_pending_orders', JSON.stringify(pendingOrders));
    
    // Show receipt
    showReceipt(order, xpStatus.available - cartTotal);
    
    // Clear cart
    cart = [];
    
    playSound('confirm.mp3');
    
    // Re-render
    renderShopHeader();
    renderShopItems();
    renderCart();
    renderPurchaseHistory();
}

function showReceipt(order, remainingXP) {
    const modal = document.getElementById('receipt-modal');
    const content = document.getElementById('receipt-content');
    
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
    const timeStr = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
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
            
            <div class="receipt-items">
                ${order.items.map(item => `
                    <div class="receipt-item">
                        <span class="receipt-item-name">${item.icon} ${item.name}</span>
                        <span class="receipt-item-price">${item.price.toLocaleString()} XP</span>
                    </div>
                `).join('')}
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
                <p style="margin-top: 12px;">Items will be delivered once approved.</p>
                <p>Thank you for shopping at Wario's Warehouse!</p>
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

function renderPurchaseHistory() {
    const container = document.getElementById('purchase-history');
    if (!container) return;
    
    if (approvedPurchases.length === 0 && pendingOrders.length === 0) {
        container.innerHTML = `
            <h3>📜 Order History</h3>
            <div class="history-empty">
                <p>No orders yet</p>
            </div>
        `;
        return;
    }
    
    // Group approved purchases by date
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
            ${dates.length > 0 ? dates.map(date => `
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
            `).join('') : '<div class="history-empty"><p>No approved purchases yet</p></div>'}
        </div>
        ${approvedPurchases.length > 0 ? `
            <div class="history-total">
                <span>Total Spent:</span>
                <span>${approvedPurchases.reduce((sum, p) => sum + p.price, 0).toLocaleString()} XP</span>
            </div>
        ` : ''}
    `;
}

// --- Initialize ---
async function init() {
    await loadApprovedPurchases();
    renderShopHeader();
    renderCategoryTabs();
    renderShopItems();
    renderCart();
    renderPurchaseHistory();
}

document.addEventListener('DOMContentLoaded', init);