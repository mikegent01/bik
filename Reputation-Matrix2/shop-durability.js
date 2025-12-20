// shop-durability.js - Item Durability & Renewal System

// ============================================
// === DURABILITY CONFIGURATION ===
// ============================================

export const DURABILITY_CONFIG = {
    // Base uses per 100 XP spent
    BASE_USES_PER_100_XP: 1,
        // Level scaling
    MIN_LEVEL_MODIFIER: 0.1,      // Minimum 10% durability at very high levels
    LEVEL_SCALE_FACTOR: 0.45,     // How aggressively levels reduce durability
    // Minimum/Maximum uses
    MIN_USES: 1,
    MAX_USES: 50,
    
    // Rarity multipliers (rarer = fewer uses, more precious)
    RARITY_MODIFIERS: {
        common: 1.0,
        uncommon: 0.75,
        rare: 0.5,
        epic: 0.35,
        legendary: 0.25,
        mythic: 0.15,
        godly: 0.005 
    },
    
    // Category modifiers
    CATEGORY_MODIFIERS: {
        consumables: 0.8,
        equipment: 1.2,
        curiosities: 1.0,
        services: 0,        // Services handled separately
        faction: 1.5,
        forbidden: 0.6,
        premium: 2.0
    },
    
    // Keywords that indicate single-use
    SINGLE_USE_KEYWORDS: [
        'single use', 'single-use', 'one use', 'one-use',
        'one time', 'one-time', 'consumed', 'consumable',
        'disappears', 'vanishes', 'disintegrates',
        'potion', 'elixir', 'scroll', 'voucher',
        'ticket', 'pass', 'token', 'coupon',
        'installation', 'service', 'hired'
    ],
    
    // Keywords that indicate permanent/unlimited
    PERMANENT_KEYWORDS: [
        'permanent', 'unlimited', 'infinite', 'eternal',
        'indestructible', 'unbreakable', 'everlasting',
        'forever', 'lifetime', 'never breaks'
    ],
    
    // Renewal cost as percentage of original price
    RENEWAL_COST_PERCENT: 0.25,
    MIN_RENEWAL_COST: 10
};

// ============================================
// === DURABILITY CALCULATION ===
// ============================================

/**
 * Check if item is single use based on text
 */
export function isSingleUse(item) {
    const textToCheck = `${item.name || ''} ${item.description || ''} ${item.flavorText || ''}`.toLowerCase();
    
    // Check category first - services are usually single use
    if (item.category === 'services') {
        return true;
    }
    
    return DURABILITY_CONFIG.SINGLE_USE_KEYWORDS.some(keyword => 
        textToCheck.includes(keyword.toLowerCase())
    );
}

/**
 * Check if item is permanent
 */
export function isPermanent(item) {
    const textToCheck = `${item.name || ''} ${item.description || ''} ${item.flavorText || ''}`.toLowerCase();
    
    return DURABILITY_CONFIG.PERMANENT_KEYWORDS.some(keyword => 
        textToCheck.includes(keyword.toLowerCase())
    );
}

/**
 * Get durability tier name
 */
export function getDurabilityTier(uses) {
    if (uses === Infinity) return 'permanent';
    if (uses === 1) return 'single';
    if (uses >= 50) return 'excellent';
    if (uses >= 25) return 'good';
    if (uses >= 10) return 'moderate';
    if (uses >= 5) return 'low';
    return 'fragile';
}


/**
 * Calculate durability for an item
 * @param {Object} item - Shop item object from SHOP_ITEMS
 * @returns {Object} Durability info
 */
export function calculateDurability(item) {
    if (!item) {
        return {
            maxUses: 1,
            displayText: '? Unknown',
            isPermanent: false,
            isSingleUse: true,
            renewalCost: 0,
            durabilityTier: 'single'
        };
    }

    // Check for permanent items first
    if (isPermanent(item)) {
        return {
            maxUses: Infinity,
            currentUses: Infinity,
            isPermanent: true,
            isSingleUse: false,
            renewalCost: 0,
            durabilityTier: 'permanent',
            displayText: '∞ Permanent',
            icon: '♾️',
            color: '#00ffcc'
        };
    }
    
    // Check for single-use items
    if (isSingleUse(item)) {
        return {
            maxUses: 1,
            currentUses: 1,
            isPermanent: false,
            isSingleUse: true,
            renewalCost: item.price, // Must rebuy
            durabilityTier: 'single',
            displayText: '1 Single Use',
            icon: '💨',
            color: '#ff6b6b'
        };
    }
    
    // Calculate based on price and rarity
    const price = item.price || 100;
    const rarity = item.rarity || 'common';
    const category = item.category || 'curiosities';
    const levelReq = item.levelRequirement || 1;
    
    // Base calculation: more expensive = more uses
    // Every 100 XP gives BASE_USES_PER_100_XP uses
    let baseUses = Math.floor((price / 1000) * DURABILITY_CONFIG.BASE_USES_PER_100_XP);
    
    // Apply rarity modifier (rarer items = fewer uses, they're special)
    const rarityMod = DURABILITY_CONFIG.RARITY_MODIFIERS[rarity] || 1.0;
    let modifiedUses = Math.floor(baseUses * rarityMod);
    
    // Apply category modifier
    const categoryMod = DURABILITY_CONFIG.CATEGORY_MODIFIERS[category] || 1.0;
    modifiedUses = Math.floor(modifiedUses * categoryMod);
    
    // Apply level requirement modifier (higher level = fewer uses, more powerful items)
    // Uses logarithmic scaling so high levels don't go to zero
    // Level 1 = 1.0x, Level 10 = ~0.6x, Level 30 = ~0.35x, Level 60 = ~0.25x
    const levelMod = calculateLevelModifier(levelReq);
    modifiedUses = Math.floor(modifiedUses * levelMod);
    
    // Clamp to min/max
    const finalUses = Math.max(
        DURABILITY_CONFIG.MIN_USES,
        Math.min(DURABILITY_CONFIG.MAX_USES, modifiedUses)
    );
    
    // Calculate renewal cost (25% of original price)
    const renewalCost = Math.max(
        DURABILITY_CONFIG.MIN_RENEWAL_COST,
        Math.floor(price * DURABILITY_CONFIG.RENEWAL_COST_PERCENT)
    );
    
    // Get tier and styling
    const tier = getDurabilityTier(finalUses);
    const { icon, color } = getDurabilityStyle(tier, finalUses, finalUses);
    
    return {
        maxUses: finalUses,
        currentUses: finalUses,
        isPermanent: false,
        isSingleUse: false,
        renewalCost: renewalCost,
        durabilityTier: tier,
        displayText: `${finalUses} Uses`,
        icon: icon,
        color: color,
        breakdown: {
            baseUses: baseUses,
            rarityMod: rarityMod,
            categoryMod: categoryMod,
            levelMod: levelMod,
            levelReq: levelReq,
            price: price,
            rarity: rarity,
            category: category
        }
    };
}

/**
 * Calculate level modifier using logarithmic scaling
 * Higher levels = lower modifier = fewer uses
 * @param {number} level - Item level requirement
 * @returns {number} Modifier between MIN_LEVEL_MODIFIER and 1.0
 */
function calculateLevelModifier(level) {
    if (level <= 1) return 1.0;
    
    const minModifier = DURABILITY_CONFIG.MIN_LEVEL_MODIFIER || 0.1;
    const scaleFactor = DURABILITY_CONFIG.LEVEL_SCALE_FACTOR || 0.25;
    
    // Logarithmic decay: 1 / (1 + scaleFactor * ln(level))
    // This gives a smooth curve that never reaches zero
    const modifier = 1 / (1 + scaleFactor * Math.log(level));
    
    return Math.max(minModifier, modifier);
}


/**
 * Get icon and color for durability display
 */
function getDurabilityStyle(tier, currentUses, maxUses) {
    const percentage = maxUses > 0 ? (currentUses / maxUses) * 100 : 0;
    
    const styles = {
        permanent: { icon: '♾️', color: '#00ffcc' },
        single: { icon: '💨', color: '#ff6b6b' },
        excellent: { icon: '🛡️', color: '#00ff88' },
        good: { icon: '✨', color: '#88ff00' },
        moderate: { icon: '⚡', color: '#ffaa00' },
        low: { icon: '⚠️', color: '#ff6600' },
        fragile: { icon: '💔', color: '#ff3333' }
    };
    
    return styles[tier] || styles.moderate;
}

// ============================================
// === HTML RENDER FUNCTIONS ===
// ============================================

/**
 * Render durability badge HTML for shop item card
 * @param {Object} item - Shop item from SHOP_ITEMS
 * @returns {string} HTML string
 */
export function renderDurabilityBadge(item) {
    const durability = calculateDurability(item);
    
    return `
        <div class="durability-badge" 
             style="color: ${durability.color}; border-color: ${durability.color};"
             title="${getDurabilityTooltip(item, durability)}">
            <span class="durability-icon">${durability.icon}</span>
            <span class="durability-text">${durability.displayText}</span>
        </div>
    `;
}

/**
 * Render level requirement badge
 * @param {Object} item - Shop item
 * @returns {string} HTML string
 */
export function renderLevelRequirement(item) {
    if (!item.levelRequirement) return '';
    
    return `
        <div class="level-requirement-badge">
            <span class="level-icon">⭐</span>
            <span class="level-text">Lvl ${item.levelRequirement}+</span>
        </div>
    `;
}

/**
 * Generate tooltip text for durability
 *//**
 * Generate tooltip text for durability
 *//**
 * Generate tooltip text for durability
 */
function getDurabilityTooltip(item, durability) {
    if (durability.isPermanent) {
        return 'Permanent item - never needs renewal!';
    }
    
    if (durability.isSingleUse) {
        return 'Single-use item - consumed after one use. Must repurchase.';
    }
    
    const { breakdown } = durability;
    if (!breakdown) return `${durability.maxUses} uses before renewal needed`;
    
    const levelPercent = Math.round(breakdown.levelMod * 100);
    
    return `Durability: ${durability.maxUses} uses
━━━━━━━━━━━━━━━━━━
Price: ${breakdown.price.toLocaleString()} XP → ${breakdown.baseUses} base uses
Rarity (${breakdown.rarity}): ×${breakdown.rarityMod}
Category (${breakdown.category}): ×${breakdown.categoryMod}
Level ${breakdown.levelReq} Required: ×${breakdown.levelMod.toFixed(2)} (${levelPercent}%)
━━━━━━━━━━━━━━━━━━
Renewal Cost: ${durability.renewalCost.toLocaleString()} XP`;
}

// ============================================
// === OWNED ITEMS TRACKING ===
// ============================================

const OWNED_ITEMS_KEY = 'shop_owned_items_durability';

/**
 * Get all owned items with their durability state
 */
export function getOwnedItems() {
    try {
        return JSON.parse(localStorage.getItem(OWNED_ITEMS_KEY) || '{}');
    } catch {
        return {};
    }
}

/**
 * Save owned items to localStorage
 */
function saveOwnedItems(items) {
    localStorage.setItem(OWNED_ITEMS_KEY, JSON.stringify(items));
}

/**
 * Add a purchased item to owned items
 */
export function addOwnedItem(item, purchaseId) {
    const owned = getOwnedItems();
    const durability = calculateDurability(item);
    
    const ownedItemKey = `${item.id}_${purchaseId || Date.now()}`;
    
    owned[ownedItemKey] = {
        itemId: item.id,
        purchaseId: purchaseId,
        name: item.name,
        icon: item.icon,
        category: item.category,
        rarity: item.rarity,
        originalPrice: item.price,
        purchaseDate: new Date().toISOString(),
        currentUses: durability.maxUses,
        maxUses: durability.maxUses,
        isPermanent: durability.isPermanent,
        isSingleUse: durability.isSingleUse,
        renewalCost: durability.renewalCost,
        isExpired: false,
        renewalCount: 0
    };
    
    saveOwnedItems(owned);
    console.log(`✅ Added owned item: ${item.name} with ${durability.maxUses} uses`);
    return owned[ownedItemKey];
}

/**
 * Use an item (decrease durability by 1)
 */
export function useItem(ownedItemKey) {
    const owned = getOwnedItems();
    const item = owned[ownedItemKey];
    
    if (!item) {
        return { success: false, error: 'Item not found in inventory' };
    }
    
    if (item.isPermanent) {
        return { 
            success: true, 
            remaining: Infinity, 
            message: `Used ${item.name} (permanent item)` 
        };
    }
    
    if (item.isExpired || item.currentUses <= 0) {
        return { 
            success: false, 
            error: `${item.name} needs renewal!`, 
            needsRenewal: true,
            renewalCost: item.renewalCost
        };
    }
    
    item.currentUses--;
    item.lastUsed = new Date().toISOString();
    
    if (item.currentUses <= 0) {
        item.isExpired = true;
    }
    
    saveOwnedItems(owned);
    
    return {
        success: true,
        remaining: item.currentUses,
        maxUses: item.maxUses,
        isExpired: item.isExpired,
        message: item.isExpired 
            ? `${item.name} is depleted! Renewal: ${item.renewalCost} XP`
            : `${item.name}: ${item.currentUses}/${item.maxUses} uses left`
    };
}

/**
 * Renew an expired item
 */
export function renewItem(ownedItemKey, availableXP) {
    const owned = getOwnedItems();
    const item = owned[ownedItemKey];
    
    if (!item) {
        return { success: false, error: 'Item not found' };
    }
    
    if (item.isPermanent) {
        return { success: false, error: 'Permanent items don\'t need renewal' };
    }
    
    if (item.isSingleUse) {
        return { success: false, error: 'Single-use items cannot be renewed. Purchase a new one.' };
    }
    
    if (availableXP < item.renewalCost) {
        return { 
            success: false, 
            error: `Not enough XP! Need ${item.renewalCost}, have ${availableXP}` 
        };
    }
    
    // Renew the item
    item.currentUses = item.maxUses;
    item.isExpired = false;
    item.renewalCount++;
    item.lastRenewed = new Date().toISOString();
    
    saveOwnedItems(owned);
    
    return {
        success: true,
        cost: item.renewalCost,
        message: `${item.name} renewed! ${item.maxUses} uses restored.`,
        newDurability: item.currentUses
    };
}

/**
 * Get items that need renewal
 */
export function getItemsNeedingRenewal() {
    const owned = getOwnedItems();
    return Object.entries(owned)
        .filter(([key, item]) => item.isExpired && !item.isSingleUse && !item.isPermanent)
        .map(([key, item]) => ({ key, ...item }));
}

// ============================================
// === CSS STYLES (inject into page) ===
// ============================================

export const DURABILITY_CSS = `
/* === DURABILITY BADGE === */
.durability-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid currentColor;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    cursor: help;
}

.durability-icon {
    font-size: 0.9em;
}

.durability-text {
    font-family: 'Orbitron', monospace;
    letter-spacing: 0.5px;
}

/* === LEVEL REQUIREMENT BADGE === */
.level-requirement-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 10px;
    background: rgba(139, 92, 246, 0.3);
    border: 1px solid rgba(139, 92, 246, 0.6);
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #c4b5fd;
}

.level-icon {
    font-size: 0.9em;
}

/* === ITEM INFO BADGES CONTAINER === */
.item-info-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 10px 0;
}

/* === DURABILITY SPECIFIC COLORS === */
.durability-badge[data-tier="permanent"] {
    background: rgba(0, 255, 200, 0.15);
    animation: permanentGlow 2s ease-in-out infinite;
}

.durability-badge[data-tier="single"] {
    background: rgba(255, 107, 107, 0.2);
}

.durability-badge[data-tier="excellent"] {
    background: rgba(0, 255, 136, 0.15);
}

.durability-badge[data-tier="fragile"] {
    background: rgba(255, 51, 51, 0.2);
    animation: fragileWarning 1s ease-in-out infinite;
}

@keyframes permanentGlow {
    0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 200, 0.3); }
    50% { box-shadow: 0 0 15px rgba(0, 255, 200, 0.6); }
}

@keyframes fragileWarning {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* === OWNED ITEM DURABILITY BAR === */
.owned-item-durability {
    margin-top: 8px;
}

.durability-bar-container {
    position: relative;
    width: 100%;
    height: 18px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 9px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.durability-bar-fill {
    height: 100%;
    border-radius: 9px;
    transition: width 0.3s ease, background 0.3s ease;
}

.durability-bar-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.65rem;
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
    white-space: nowrap;
    font-family: 'Orbitron', monospace;
}

.durability-bar-container.expired {
    border-color: #ff6b6b;
    animation: expiredPulse 1.5s infinite;
}

@keyframes expiredPulse {
    0%, 100% { box-shadow: 0 0 5px rgba(255, 107, 107, 0.3); }
    50% { box-shadow: 0 0 15px rgba(255, 107, 107, 0.7); }
}

/* === RENEWAL BUTTON === */
.renewal-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: linear-gradient(135deg, #4a90d9, #357abd);
    border: none;
    border-radius: 6px;
    color: white;
    font-weight: 600;
    font-size: 0.85em;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Orbitron', sans-serif;
}

.renewal-btn:hover:not(:disabled) {
    background: linear-gradient(135deg, #5aa0e9, #4a90d9);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 144, 217, 0.4);
}

.renewal-btn:disabled {
    background: #555;
    cursor: not-allowed;
    opacity: 0.5;
}

/* === TOOLTIP STYLING === */
.durability-badge[title] {
    position: relative;
}

.durability-badge:hover::after {
    content: attr(title);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 12px;
    background: rgba(0, 0, 0, 0.95);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 6px;
    font-size: 0.7rem;
    white-space: pre-line;
    z-index: 100;
    min-width: 200px;
    max-width: 280px;
    margin-bottom: 8px;
    color: #e8e8e8;
    text-align: left;
    line-height: 1.4;
}
`;

/**
 * Inject durability CSS into the page
 */
export function injectDurabilityStyles() {
    if (document.getElementById('durability-styles')) return;
    
    const styleElement = document.createElement('style');
    styleElement.id = 'durability-styles';
    styleElement.textContent = DURABILITY_CSS;
    document.head.appendChild(styleElement);
    console.log('✅ Durability styles injected');
}

// Auto-inject styles when module loads
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectDurabilityStyles);
    } else {
        injectDurabilityStyles();
    }
}