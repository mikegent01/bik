// shop-stock.js - Dynamic Stock System using Calendar Data
import { CURRENT_GAME_DATE, CURRENT_GAME_TIME, CALENDAR_DATA, generateWeatherForDay } from './calendar-data.js';

// === STOCK TYPE DETERMINATION ===

export const STOCK_TYPES = {
    IN_STOCK: 'in_stock',
    LIMITED_DAILY: 'limited_daily',
    NIGHT_ONLY: 'night_only',
    DELIVERY_ONLY: 'delivery_only',
    SPECIAL_ORDER: 'special_order',
    TRENDING: 'trending',
    SOLD_OUT_TODAY: 'sold_out_today'
};

// Keywords that indicate stock availability
const STOCK_KEYWORDS = {
    // Always in stock - common consumables
    always_stock: ['potion', 'mushroom', 'herb', 'bandage', 'ration', 'water', 'bread', 'basic', 'common', 'simple'],
    
    // Limited daily stock
    limited_stock: ['fresh', 'daily', 'handmade', 'crafted', 'brewed', 'baked', 'prepared'],
    
    // Night only - shady/rare
    night_only: ['stolen', 'cursed', 'forbidden', 'black market', 'shadow', 'midnight', 'secret', 'illegal', 'smuggled', 'contraband'],
    
    // Delivery only - large/rare/special
    delivery_only: ['massive', 'huge', 'vehicle', 'mount', 'property', 'deed', 'contract', 'installation', 'construction', 'franchise'],
    
    // Special order - very rare
    special_order: ['artifact', 'legendary', 'ancient', 'mythic', 'one-of-a-kind', 'unique', 'prototype', 'experimental']
};

// Rarity to stock type mapping
const RARITY_STOCK_RULES = {
    common: { type: STOCK_TYPES.LIMITED_DAILY, baseStock: 50, depletionRate: 3 },
    uncommon: { type: STOCK_TYPES.LIMITED_DAILY, baseStock: 30, depletionRate: 2 },
    rare: { type: STOCK_TYPES.LIMITED_DAILY, baseStock: 10, depletionRate: 1 },
    epic: { type: STOCK_TYPES.DELIVERY_ONLY, baseStock: 3, depletionRate: 0.5 },
    legendary: { type: STOCK_TYPES.SPECIAL_ORDER, baseStock: 1, depletionRate: 0.1 },
    mythic: { type: STOCK_TYPES.SPECIAL_ORDER, baseStock: 1, depletionRate: 0 },
    godly: { type: STOCK_TYPES.SPECIAL_ORDER, baseStock: 1, depletionRate: 0 }
};

// Category stock modifiers
const CATEGORY_STOCK_MODIFIERS = {
    consumables: { stockMultiplier: 2.0, depletionMultiplier: 1.5 },  // High turnover
    equipment: { stockMultiplier: 0.5, depletionMultiplier: 0.5 },   // Low turnover
    curiosities: { stockMultiplier: 0.3, depletionMultiplier: 0.8 }, // Rare finds
    services: { stockMultiplier: 1.0, depletionMultiplier: 0 },      // Always available
    premium: { stockMultiplier: 0.2, depletionMultiplier: 0.3 },     // Very limited
    forbidden: { stockMultiplier: 0.1, depletionMultiplier: 0.1 }    // Almost never
};

// === TIME PERIODS ===

export const TIME_PERIODS = {
    DAWN: { id: 'dawn', name: 'Dawn', start: 5, end: 8, icon: '🌅', stockMult: 1.0, mood: 'grumpy', quote: "WAH... too early... coffee first..." },
    MORNING: { id: 'morning', name: 'Morning', start: 8, end: 12, icon: '☀️', stockMult: 0.85, mood: 'energetic', quote: "WAHAHA! Fresh stock! Come spend!" },
    AFTERNOON: { id: 'afternoon', name: 'Afternoon', start: 12, end: 17, icon: '🌤️', stockMult: 0.5, mood: 'busy', quote: "Hurry up! Lots of customers!" },
    EVENING: { id: 'evening', name: 'Evening', start: 17, end: 20, icon: '🌆', stockMult: 0.25, mood: 'tired', quote: "Almost closing time... fine, a deal..." },
    NIGHT: { id: 'night', name: 'Night', start: 20, end: 24, icon: '🌙', stockMult: 0.1, mood: 'shady', quote: "Psst... want the SPECIAL stuff?" },
    MIDNIGHT: { id: 'midnight', name: 'Midnight', start: 0, end: 5, icon: '🌑', stockMult: 0.05, mood: 'suspicious', quote: "You didn't see me, I didn't see you..." }
};

// === CRAZE SYSTEM ===

// Possible craze triggers
const CRAZE_TRIGGERS = {
    keywords: ['fire', 'ice', 'healing', 'speed', 'strength', 'magic', 'gold', 'star', 'mushroom', 'flower', 'shield', 'sword', 'potion', 'scroll', 'ring', 'amulet', 'cloak', 'boots'],
    categories: ['consumables', 'equipment', 'curiosities'],
    rarities: ['common', 'uncommon', 'rare'],
    priceRanges: [
        { name: 'budget', min: 0, max: 5000 },
        { name: 'mid-range', min: 5000, max: 25000 },
        { name: 'premium', min: 25000, max: 100000 }
    ]
};

// Craze flavor text
const CRAZE_REASONS = [
    "A famous adventurer was spotted using these!",
    "Rumor has it these are about to be banned!",
    "A popular bard wrote a song about these!",
    "The Emperor's cousin bought a dozen!",
    "A prophecy mentioned items like these!",
    "These are going viral on WahBook!",
    "A limited edition variant was discovered!",
    "Foreign merchants are buying these up!",
    "A new dungeon was found that requires these!",
    "A celebrity chef recommended these!",
    "The weather is perfect for these!",
    "A holiday is coming that uses these!",
    "A guild just placed a bulk order!",
    "Wario's secret stash was found to contain these!"
];

// Seeded random for consistent daily results
function seededRandom(seed) {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

// Generate daily seed from game date
function getDailySeed() {
    return CURRENT_GAME_DATE.year * 10000 + 
           (CURRENT_GAME_DATE.monthIndex + 1) * 100 + 
           CURRENT_GAME_DATE.day;
}

// === CRAZE GENERATION ===

let cachedCrazes = null;
let cachedCrazesSeed = null;

export function getDailyCrazes() {
    const seed = getDailySeed();
    
    // Return cached if same day
    if (cachedCrazesSeed === seed && cachedCrazes) {
        return cachedCrazes;
    }
    
    const crazes = [];
    const numCrazes = 2 + Math.floor(seededRandom(seed) * 3); // 2-4 crazes per day
    
    for (let i = 0; i < numCrazes; i++) {
        const crazeRand = seededRandom(seed + i * 100);
        const typeRand = seededRandom(seed + i * 100 + 1);
        const durationRand = seededRandom(seed + i * 100 + 2);
        const intensityRand = seededRandom(seed + i * 100 + 3);
        const reasonRand = seededRandom(seed + i * 100 + 4);
        
        let craze = {
            id: `craze_${seed}_${i}`,
            startDay: CURRENT_GAME_DATE.day,
            duration: 1 + Math.floor(durationRand * 3), // 1-3 days
            intensity: 1.5 + (intensityRand * 2), // 1.5x to 3.5x demand
            reason: CRAZE_REASONS[Math.floor(reasonRand * CRAZE_REASONS.length)]
        };
        
        // Determine craze type
        if (typeRand < 0.4) {
            // Keyword craze
            const keyword = CRAZE_TRIGGERS.keywords[Math.floor(crazeRand * CRAZE_TRIGGERS.keywords.length)];
            craze.type = 'keyword';
            craze.target = keyword;
            craze.name = `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} Fever`;
            craze.icon = getKeywordIcon(keyword);
            craze.description = `Everyone wants ${keyword} items!`;
        } else if (typeRand < 0.7) {
            // Category craze
            const category = CRAZE_TRIGGERS.categories[Math.floor(crazeRand * CRAZE_TRIGGERS.categories.length)];
            craze.type = 'category';
            craze.target = category;
            craze.name = `${category.charAt(0).toUpperCase() + category.slice(1)} Rush`;
            craze.icon = getCategoryIcon(category);
            craze.description = `${category} are flying off the shelves!`;
        } else if (typeRand < 0.9) {
            // Rarity craze
            const rarity = CRAZE_TRIGGERS.rarities[Math.floor(crazeRand * CRAZE_TRIGGERS.rarities.length)];
            craze.type = 'rarity';
            craze.target = rarity;
            craze.name = `${rarity.charAt(0).toUpperCase() + rarity.slice(1)} Craze`;
            craze.icon = getRarityIcon(rarity);
            craze.description = `${rarity} items are the hot commodity!`;
        } else {
            // Price range craze
            const range = CRAZE_TRIGGERS.priceRanges[Math.floor(crazeRand * CRAZE_TRIGGERS.priceRanges.length)];
            craze.type = 'price';
            craze.target = range;
            craze.name = `${range.name.charAt(0).toUpperCase() + range.name.slice(1)} Madness`;
            craze.icon = '💰';
            craze.description = `${range.name} items (${range.min}-${range.max} XP) are in demand!`;
        }
        
        crazes.push(craze);
    }
    
    cachedCrazes = crazes;
    cachedCrazesSeed = seed;
    
    return crazes;
}

function getKeywordIcon(keyword) {
    const icons = {
        fire: '🔥', ice: '❄️', healing: '💚', speed: '💨', strength: '💪',
        magic: '✨', gold: '🪙', star: '⭐', mushroom: '🍄', flower: '🌸',
        shield: '🛡️', sword: '⚔️', potion: '🧪', scroll: '📜', ring: '💍',
        amulet: '📿', cloak: '🧥', boots: '👢'
    };
    return icons[keyword] || '🔥';
}

function getCategoryIcon(category) {
    const icons = {
        consumables: '🍄', equipment: '⚔️', curiosities: '❓',
        services: '🏠', premium: '✨', forbidden: '☠️'
    };
    return icons[category] || '📦';
}

function getRarityIcon(rarity) {
    const icons = {
        common: '⚪', uncommon: '🟢', rare: '🔵', epic: '🟣', legendary: '🟡'
    };
    return icons[rarity] || '⚪';
}

// Check if item matches a craze
export function getItemCrazeMultiplier(item) {
    const crazes = getDailyCrazes();
    let totalMultiplier = 1;
    let matchedCrazes = [];
    
    for (const craze of crazes) {
        let matches = false;
        
        switch (craze.type) {
            case 'keyword':
                const searchText = `${item.name} ${item.description} ${(item.effects || []).join(' ')}`.toLowerCase();
                matches = searchText.includes(craze.target.toLowerCase());
                break;
            case 'category':
                matches = item.category === craze.target;
                break;
            case 'rarity':
                matches = item.rarity === craze.target;
                break;
            case 'price':
                matches = item.price >= craze.target.min && item.price <= craze.target.max;
                break;
        }
        
        if (matches) {
            totalMultiplier *= craze.intensity;
            matchedCrazes.push(craze);
        }
    }
    
    return { multiplier: totalMultiplier, crazes: matchedCrazes };
}

// === TOP SELLERS ===

let cachedTopSellers = null;
let cachedTopSellersSeed = null;

export function getDailyTopSellers(allItems, count = 5) {
    const seed = getDailySeed();
    
    if (cachedTopSellersSeed === seed && cachedTopSellers) {
        return cachedTopSellers;
    }
    
    const items = Object.values(allItems);
    
    // Filter to reasonable items (not too expensive, not forbidden)
    const eligibleItems = items.filter(item => 
        item.price <= 50000 && 
        item.category !== 'forbidden' &&
        item.category !== 'faction' &&
        item.rarity !== 'godly' &&
        item.rarity !== 'mythic'
    );
    
    // Score items based on "popularity" (seeded random + some logic)
    const scored = eligibleItems.map((item, index) => {
        const itemSeed = seed + hashString(item.id);
        const baseScore = seededRandom(itemSeed);
        
        // Bonus for craze matches
        const crazeInfo = getItemCrazeMultiplier(item);
        const crazeBonus = crazeInfo.multiplier > 1 ? 0.3 : 0;
        
        // Bonus for consumables (higher turnover)
        const categoryBonus = item.category === 'consumables' ? 0.2 : 0;
        
        // Penalty for expensive items
        const pricePenalty = Math.min(0.3, item.price / 100000);
        
        return {
            item,
            score: baseScore + crazeBonus + categoryBonus - pricePenalty,
            crazeInfo
        };
    });
    
    // Sort by score and take top N
    scored.sort((a, b) => b.score - a.score);
    cachedTopSellers = scored.slice(0, count).map(s => ({
        item: s.item,
        crazes: s.crazeInfo.crazes,
        depletionMultiplier: 3 + (s.score * 5) // Top sellers deplete 3-8x faster
    }));
    cachedTopSellersSeed = seed;
    
    return cachedTopSellers;
}

function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// === DYNAMIC STOCK CALCULATION ===

export function getCurrentTimePeriod() {
    const hour = CURRENT_GAME_TIME.hour;
    
    for (const [key, period] of Object.entries(TIME_PERIODS)) {
        if (period.start <= period.end) {
            if (hour >= period.start && hour < period.end) return period;
        } else {
            if (hour >= period.start || hour < period.end) return period;
        }
    }
    
    return TIME_PERIODS.MORNING;
}

export function isNightTime() {
    const hour = CURRENT_GAME_TIME.hour;
    return hour >= 20 || hour < 5;
}

// Determine stock type for an item
export function determineStockType(item) {
    const name = (item.name || '').toLowerCase();
    const desc = (item.description || '').toLowerCase();
    const combined = `${name} ${desc}`;
    
    // Check keywords first (highest priority)
    for (const keyword of STOCK_KEYWORDS.night_only) {
        if (combined.includes(keyword)) return STOCK_TYPES.NIGHT_ONLY;
    }
    
    for (const keyword of STOCK_KEYWORDS.special_order) {
        if (combined.includes(keyword)) return STOCK_TYPES.SPECIAL_ORDER;
    }
    
    for (const keyword of STOCK_KEYWORDS.delivery_only) {
        if (combined.includes(keyword)) return STOCK_TYPES.DELIVERY_ONLY;
    }
    
    // Check price (very expensive = delivery only)
    if (item.price >= 500000) return STOCK_TYPES.SPECIAL_ORDER;
    if (item.price >= 100000) return STOCK_TYPES.DELIVERY_ONLY;
    
    // Check rarity
    const rarityRule = RARITY_STOCK_RULES[item.rarity];
    if (rarityRule) {
        // Override for epic+ 
        if (['epic', 'legendary', 'mythic', 'godly'].includes(item.rarity)) {
            return rarityRule.type;
        }
    }
    
    // Check for always in stock keywords
    for (const keyword of STOCK_KEYWORDS.always_stock) {
        if (combined.includes(keyword)) return STOCK_TYPES.IN_STOCK;
    }
    
    // Default based on rarity
    return rarityRule?.type || STOCK_TYPES.LIMITED_DAILY;
}

// Calculate current stock for an item
export function calculateItemStock(item, allItems) {
    const stockType = item.stockType || determineStockType(item);
    const period = getCurrentTimePeriod();
    const rarity = item.rarity || 'common';
    const category = item.category || 'consumables';
    
    // Get base values
    const rarityRule = RARITY_STOCK_RULES[rarity] || RARITY_STOCK_RULES.common;
    const categoryMod = CATEGORY_STOCK_MODIFIERS[category] || { stockMultiplier: 1, depletionMultiplier: 1 };
    
    // Calculate base stock
    let baseStock = Math.floor(rarityRule.baseStock * categoryMod.stockMultiplier);
    
    // Check if top seller
    const topSellers = getDailyTopSellers(allItems);
    const isTopSeller = topSellers.some(ts => ts.item.id === item.id);
    const topSellerInfo = topSellers.find(ts => ts.item.id === item.id);
    
    // Check craze multiplier
    const crazeInfo = getItemCrazeMultiplier(item);
    
    // Calculate depletion
    let depletionRate = rarityRule.depletionRate * categoryMod.depletionMultiplier;
    
    // Apply craze depletion (items in craze sell faster)
    if (crazeInfo.multiplier > 1) {
        depletionRate *= crazeInfo.multiplier;
    }
    
    // Apply top seller depletion
    if (isTopSeller && topSellerInfo) {
        depletionRate *= topSellerInfo.depletionMultiplier;
    }
    
    // Calculate hours since dawn (5 AM)
    let hoursSinceDawn = CURRENT_GAME_TIME.hour - 5;
    if (hoursSinceDawn < 0) hoursSinceDawn += 24;
    
    // Add partial hour
    hoursSinceDawn += CURRENT_GAME_TIME.minute / 60;
    
    // Calculate depleted stock
    const depleted = Math.floor(depletionRate * hoursSinceDawn);
    const currentStock = Math.max(0, baseStock - depleted);
    
    // Apply time period multiplier
    const adjustedStock = Math.floor(currentStock * period.stockMult);
    
    return {
        stockType,
        baseStock,
        currentStock: adjustedStock,
        depletionRate,
        isTopSeller,
        crazeInfo,
        period,
        soldOutTime: depletionRate > 0 ? Math.floor(baseStock / depletionRate) : null
    };
}

// Get full availability info for an item
export function getItemAvailability(item, allItems) {
    const stockInfo = calculateItemStock(item, allItems);
    const stockType = stockInfo.stockType;
    const isNight = isNightTime();
    
    let result = {
        available: true,
        instant: false,
        shippingRequired: true,
        stockInfo,
        icon: '📦',
        reason: 'Standard Delivery'
    };
    
    switch (stockType) {
        case STOCK_TYPES.IN_STOCK:
            result = {
                available: true,
                instant: true,
                shippingRequired: false,
                stockInfo,
                icon: '✅',
                reason: 'Always In Stock!'
            };
            break;
            
        case STOCK_TYPES.LIMITED_DAILY:
            if (stockInfo.currentStock > 0) {
                result = {
                    available: true,
                    instant: true,
                    shippingRequired: false,
                    stockInfo,
                    icon: '📦',
                    reason: `${stockInfo.currentStock} left today`,
                    stockWarning: stockInfo.currentStock <= 3
                };
            } else {
                result = {
                    available: true,
                    instant: false,
                    shippingRequired: true,
                    stockInfo,
                    icon: '📭',
                    reason: 'Sold out today - Delivery only'
                };
            }
            break;
            
        case STOCK_TYPES.NIGHT_ONLY:
            if (isNight) {
                result = {
                    available: true,
                    instant: true,
                    shippingRequired: false,
                    stockInfo,
                    icon: '🌙',
                    reason: 'Night Special - Available NOW!',
                    isNightSpecial: true
                };
            } else {
                const hoursUntilNight = (20 - CURRENT_GAME_TIME.hour + 24) % 24;
                result = {
                    available: false,
                    instant: false,
                    shippingRequired: false,
                    stockInfo,
                    icon: '🔒',
                    reason: `Night Only - ${hoursUntilNight}h until available`,
                    hoursUntilAvailable: hoursUntilNight
                };
            }
            break;
            
        case STOCK_TYPES.DELIVERY_ONLY:
            result = {
                available: true,
                instant: false,
                shippingRequired: true,
                stockInfo,
                icon: '🚚',
                reason: 'Delivery Only - Too rare to stock'
            };
            break;
            
        case STOCK_TYPES.SPECIAL_ORDER:
            result = {
                available: true,
                instant: false,
                shippingRequired: true,
                stockInfo,
                icon: '🕵️',
                reason: "Special Order - Wario must 'acquire' this",
                extraDelay: true
            };
            break;
            
        case STOCK_TYPES.TRENDING:
            result = {
                available: stockInfo.currentStock > 0,
                instant: stockInfo.currentStock > 0,
                shippingRequired: stockInfo.currentStock <= 0,
                stockInfo,
                icon: '🔥',
                reason: stockInfo.currentStock > 0 
                    ? `TRENDING! Only ${stockInfo.currentStock} left!`
                    : 'SOLD OUT - So popular!',
                isTrending: true
            };
            break;
    }
    
    // Add craze badge if applicable
    if (stockInfo.crazeInfo.multiplier > 1) {
        result.inCraze = true;
        result.crazes = stockInfo.crazeInfo.crazes;
    }
    
    // Add top seller badge
    if (stockInfo.isTopSeller) {
        result.isTopSeller = true;
    }
    
    return result;
}

// === WARIO'S MOOD & STATUS ===

export function getWarioStatus() {
    const period = getCurrentTimePeriod();
    const weather = generateWeatherForDay(
        CURRENT_GAME_DATE.year,
        CURRENT_GAME_DATE.monthIndex,
        CURRENT_GAME_DATE.day
    );
    const crazes = getDailyCrazes();
    const isNight = isNightTime();
    
    // Check for holidays
    const todayHoliday = CALENDAR_DATA.holidays.values.find(h => 
        h.month === CURRENT_GAME_DATE.monthIndex + 1 && 
        h.day === CURRENT_GAME_DATE.day
    );
    
    // Calculate total daily stock remaining
    // This is an approximation based on time
    const stockPercent = Math.max(0, Math.min(100, period.stockMult * 100));
    
    return {
        period,
        weather,
        crazes,
        isNight,
        holiday: todayHoliday,
        stockPercent,
        date: {
            day: CURRENT_GAME_DATE.day,
            month: CALENDAR_DATA.months.values[CURRENT_GAME_DATE.monthIndex].name,
            year: CURRENT_GAME_DATE.year
        },
        time: {
            hour: CURRENT_GAME_TIME.hour,
            minute: CURRENT_GAME_TIME.minute,
            formatted: `${String(CURRENT_GAME_TIME.hour).padStart(2, '0')}:${String(CURRENT_GAME_TIME.minute).padStart(2, '0')}`
        },
        moodIcon: getWarioMoodIcon(period.mood),
        quote: getWarioQuote(period, weather, todayHoliday, crazes)
    };
}

function getWarioMoodIcon(mood) {
    const icons = {
        grumpy: '😤', energetic: '🤑', busy: '😅', 
        tired: '😩', shady: '😏', suspicious: '🤫'
    };
    return icons[mood] || '💰';
}

function getWarioQuote(period, weather, holiday, crazes) {
    // Special holiday quotes
    if (holiday) {
        const holidayQuotes = {
            "Empire's Founding Day": "WAH! Empire Day! Everything's marked up 20%! ...I mean, PATRIOTIC PRICES!",
            "Wario's Remembrance": "MY death anniversary?! I'M NOT DEAD! ...Wait, that means I can charge for 'resurrection merchandise'!",
            "Winter's Veil Ball": "Fancy parties mean fancy prices! Time to sell overpriced formalwear!",
            "Blood Moon Hunt": "Lock your doors, hide your gold... actually, give your gold to ME for 'safekeeping'!"
        };
        if (holidayQuotes[holiday.name]) return holidayQuotes[holiday.name];
        return `It's ${holiday.name}! Special holiday markup- I mean, DEALS!`;
    }
    
    // Weather-based quotes
    if (weather.isMagical) {
        return `${weather.desc}?! Quick, buy weather protection items before they sell out! WAH HA HA!`;
    }
    
    // Craze quotes
    if (crazes.length > 0 && Math.random() < 0.5) {
        const craze = crazes[Math.floor(Math.random() * crazes.length)];
        return `${craze.name}! ${craze.reason} BUY NOW before I raise prices!`;
    }
    
    // Default period quote
    return period.quote;
}

// === EXPORTS FOR TIME UPDATES ===

export function getFormattedGameDateTime() {
    const month = CALENDAR_DATA.months.values[CURRENT_GAME_DATE.monthIndex];
    const dayOfWeek = CALENDAR_DATA.days.values[(CURRENT_GAME_DATE.day - 1) % 7];
    
    return {
        full: `${dayOfWeek.name}, ${month.name} ${CURRENT_GAME_DATE.day}, ${CURRENT_GAME_DATE.year}`,
        short: `${month.abbreviation} ${CURRENT_GAME_DATE.day}`,
        time: `${String(CURRENT_GAME_TIME.hour).padStart(2, '0')}:${String(CURRENT_GAME_TIME.minute).padStart(2, '0')}`,
        period: getCurrentTimePeriod().name
    };
}