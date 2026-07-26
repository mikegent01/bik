// crafting.js - Spell Scroll & Item Crafting System
import { CURRENT_GAME_DATE, CURRENT_GAME_TIME, CALENDAR_DATA } from './calendar-data.js';
import {
    CRAFTING_CATEGORIES,
    CRAFTING_CONFIG,
    SPELL_SCHOOLS,
    MATERIALS,
    MATERIAL_SHOP_CONFIG,
    MATERIAL_SHOP_STOCK,
    MATERIAL_BUNDLES,
    SCROLL_RECIPES,
    getMaterialData, // <-- Add this
    POTION_RECIPES,
    GOLD_TO_XP_RATIO,
    getBulkDiscount,
    getBulkDiscountLabel,
    getMaterialXPPrice,
    getMaterialAvailability,
    ensureAllRecipeMaterialsInShop,
    ENCHANTING_RECIPES ,
    SMITHING_RECIPES , 
    getShopMaterialsByCategory,
    getBundleXPPrices,
    getSpellSchool 
} from './crafting-data.js';
import { initMarket, getMarketState, reduceMarketStock } from './crafting-data.js';
import { REWARDS_DATA } from '../../quests/quests-main.js';
// ============================================
// === CATALYST SUBSTITUTION SYSTEM ===
// ============================================
let recipeSearchQuery = ''; // ✅ NEW: Recipe search state
function renderRecipes() {
    const container = document.getElementById('recipes-list');
    if (!container) return;
    
    // Get recipes for current category
    let recipes;
    switch(currentCategory) {
        case CRAFTING_CATEGORIES.SCROLLS: recipes = SCROLL_RECIPES; break;
        case CRAFTING_CATEGORIES.POTIONS: recipes = POTION_RECIPES; break;
        case CRAFTING_CATEGORIES.ENCHANTING: recipes = ENCHANTING_RECIPES; break;
        case CRAFTING_CATEGORIES.SMITHING: recipes = SMITHING_RECIPES; break;
        default: recipes = {};
    }

    // Convert to array
    let recipeList = Object.values(recipes);
    
    // ✅ Apply Search Filter
    if (recipeSearchQuery && recipeSearchQuery.trim() !== '') {
        const query = recipeSearchQuery.toLowerCase().trim();
        recipeList = recipeList.filter(recipe => {
            // Search by name
            if (recipe.name && recipe.name.toLowerCase().includes(query)) return true;
            
            // Search by spell name
            if (recipe.spellName && recipe.spellName.toLowerCase().includes(query)) return true;
            
            // Search by description
            if (recipe.description && recipe.description.toLowerCase().includes(query)) return true;
            
            // Search by effect
            if (recipe.effect && recipe.effect.toLowerCase().includes(query)) return true;
            
            // Search by school
            if (recipe.school && recipe.school.toLowerCase().includes(query)) return true;
            
            // Search by level (e.g., "level 2" or "2nd")
            if (recipe.spellLevel !== undefined) {
                const levelStr = `level ${recipe.spellLevel}`;
                const ordinalStr = `${getOrdinal(recipe.spellLevel)}`;
                if (levelStr.includes(query) || ordinalStr.toLowerCase().includes(query)) return true;
                if (recipe.spellLevel === 0 && 'cantrip'.includes(query)) return true;
            }
            
            // Search by material names
            if (recipe.materials && Array.isArray(recipe.materials)) {
                for (const mat of recipe.materials) {
                    const material = getMaterialData(mat.id);
                    if (material.name && material.name.toLowerCase().includes(query)) return true;
                }
            }
            
            return false;
        });
    }
    
    // Sort recipes
    recipeList.sort((a, b) => {
        const levelA = a.spellLevel ?? a.levelRequirement ?? 0;
        const levelB = b.spellLevel ?? b.levelRequirement ?? 0;
        if (levelA !== levelB) return levelA - levelB;
        return a.name.localeCompare(b.name);
    });
    
    // Build HTML
    container.innerHTML = `
        <!-- ✅ Search Box -->
        <div class="recipe-search-container">
            <div class="recipe-search-box">
                <span class="search-icon">🔍</span>
                <input type="text" 
                       id="recipe-search-input" 
                       class="recipe-search-input"
                       placeholder="Search recipes, spells, materials..." 
                       value="${recipeSearchQuery}">
                ${recipeSearchQuery ? `
                    <button class="search-clear-btn" id="clear-recipe-search">✕</button>
                ` : ''}
            </div>
            ${recipeSearchQuery ? `
                <div class="search-results-count">
                    Found ${recipeList.length} result${recipeList.length !== 1 ? 's' : ''}
                </div>
            ` : ''}
        </div>
        
        <!-- Recipe Grid -->
        ${recipeList.length === 0 ? `
            <div class="no-recipes-found">
                <span class="no-recipes-icon">📭</span>
                <p class="no-recipes-title">No Recipes Found</p>
                <p class="no-recipes-text">
                    ${recipeSearchQuery 
                        ? `No recipes match "${recipeSearchQuery}". Try a different search.`
                        : 'No recipes available in this category.'}
                </p>
                ${recipeSearchQuery ? `
                    <button class="clear-search-btn" id="clear-search-btn">Clear Search</button>
                ` : ''}
            </div>
        ` : `
            <div class="recipes-grid">
                ${recipeList.map(recipe => {
                    const canCraft = hasEnoughMaterials(recipe);
                    const meetsLevel = (recipe.levelRequirement || 1) <= CRAFTING_CONFIG.partyLevel;
                    const school = recipe.school ? SPELL_SCHOOLS[recipe.school] : null;
                    const envMods = calculateEnvironmentModifiers(recipe, currentCategory);
                    const hasBuff = envMods.activeEffects.length > 0;
                    
                    return `
                        <div class="recipe-card ${selectedRecipe?.id === recipe.id ? 'selected' : ''} 
                                                ${!canCraft ? 'unavailable' : ''} 
                                                ${!meetsLevel ? 'locked' : ''}
                                                ${hasBuff ? 'buffed' : ''}"
                             data-recipe-id="${recipe.id}">
                            <div class="recipe-card-header">
                                <span class="recipe-icon">${recipe.icon}</span>
                                <div class="recipe-title-group">
                                    <span class="recipe-name">${recipe.name}</span>
                                    ${recipe.spellLevel !== undefined ? `
                                        <span class="recipe-level">
                                            ${recipe.spellLevel === 0 ? 'Cantrip' : `Level ${recipe.spellLevel}`}
                                        </span>
                                    ` : ''}
                                </div>
                                ${school ? `
                                    <span class="recipe-school" style="color: ${school.color}" title="${school.name}">
                                        ${school.icon}
                                    </span>
                                ` : ''}
                                ${hasBuff ? `
                                    <span class="recipe-buff-indicator" title="Seasonal/Time Bonus Active">✨</span>
                                ` : ''}
                            </div>
                            <div class="recipe-card-body">
                                <p class="recipe-description">${recipe.description || recipe.effect || ''}</p>
                            </div>
                            <div class="recipe-card-footer">
                                <span class="recipe-cost">
                                    <span class="cost-time">⏱️ ${formatCraftTime(recipe.craftTime)}</span>
                                </span>
                                <span class="recipe-success ${hasBuff ? 'boosted' : ''}">
                                    🎯 ${calculateSuccessChance(recipe)}%
                                </span>
                            </div>
                            ${!meetsLevel ? `
                                <div class="recipe-locked-overlay" style="pointer-events: none;">
                                    <span class="locked-icon">🔒</span>
                                    <span class="locked-text">Requires Level ${recipe.levelRequirement}</span>
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        `}
    `;
    
    // === EVENT LISTENERS ===
    
    // Search Input
    const searchInput = document.getElementById('recipe-search-input');
    if (searchInput) {
        // Handle typing
        searchInput.addEventListener('input', (e) => {
            recipeSearchQuery = e.target.value;
            renderRecipes();
            
            // Re-focus the input and restore cursor position
            const newInput = document.getElementById('recipe-search-input');
            if (newInput) {
                newInput.focus();
                newInput.setSelectionRange(newInput.value.length, newInput.value.length);
            }
        });
        
        // Handle Enter key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                recipeSearchQuery = '';
                renderRecipes();
            }
        });
    }
    
    // Clear Search Button (X inside input)
    document.getElementById('clear-recipe-search')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        recipeSearchQuery = '';
        renderRecipes();
    });
    
    // Clear Search Button (in empty state)
    document.getElementById('clear-search-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        recipeSearchQuery = '';
        renderRecipes();
    });
    
    // Recipe Card Clicks
    container.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeId = card.dataset.recipeId;
            
            let recipes;
            switch(currentCategory) {
                case CRAFTING_CATEGORIES.SCROLLS: recipes = SCROLL_RECIPES; break;
                case CRAFTING_CATEGORIES.POTIONS: recipes = POTION_RECIPES; break;
                case CRAFTING_CATEGORIES.ENCHANTING: recipes = ENCHANTING_RECIPES; break;
                case CRAFTING_CATEGORIES.SMITHING: recipes = SMITHING_RECIPES; break;
                default: recipes = {};
            }
            
            selectedRecipe = getRecipeWithWildcard(recipes[recipeId]);
            activeCatalyst = null;
            isSelectingCatalyst = false;
            
            renderRecipes();
            renderRecipeDetail();
        });
    });
}

export const SEASONAL_BONUSES = {
    // Verdant Spring: Life, Nature, Growth
    'Spr': {
        name: "Verdant Spring",
        description: "Life blooms. Potions and Transmutation are potent.",
        buffs: {
            categories: ['potions'], // +10% Success
            schools: ['transmutation', 'conjuration'], // +10% Success
            timeMod: 0.9 // 10% Faster crafting for these
        }
    },
    // Golden Summer: Fire, Energy, Smithing
    'Sum': {
        name: "Golden Summer",
        description: "High energy. Smithing and Evocation thrive.",
        buffs: {
            categories: ['smithing'],
            schools: ['evocation', 'enchantment'],
            timeMod: 0.9
        }
    },
    // Crimson Fall: Decay, Spirit, Harvest
    'Fal': {
        name: "Crimson Fall",
        description: "The veil thins. Enchanting and Necromancy are stronger.",
        buffs: {
            categories: ['enchanting'],
            schools: ['necromancy', 'illusion'],
            timeMod: 0.9
        }
    },
    // Hoarfrost Winter: Preservation, Study, Ice
    'Win': {
        name: "Hoarfrost Winter",
        description: "Clear minds. Scroll Scribing and Abjuration excel.",
        buffs: {
            categories: ['scrolls'],
            schools: ['abjuration', 'divination'],
            timeMod: 0.9
        }
    }
};

// ============================================
// === TIME & ENVIRONMENT FUNCTIONS ===
// ============================================

function getGameTimePeriod() {
    const hour = CURRENT_GAME_TIME.hour;
    if (hour >= 5 && hour < 8) return 'dawn';
    if (hour >= 8 && hour < 18) return 'day';
    if (hour >= 18 && hour < 21) return 'dusk';
    return 'night';
}

function getTimePeriodIcon(period) {
    const icons = { 
        dawn: '🌅', 
        day: '☀️', 
        dusk: '🌆', 
        night: '🌙' 
    };
    return icons[period] || '🕐';
}

function getActiveSeasonBuffs() {
    const season = getCurrentSeason();
    if (!season) return null;
    const bonus = SEASONAL_BONUSES[season.abbreviation];
    return bonus || null;
}

function getSeasonIcon(abbreviation) {
    const icons = {
        'Spr': '🌸',
        'Sum': '☀️',
        'Fal': '🍂',
        'Win': '❄️'
    };
    return icons[abbreviation] || '🍃';
}

function calculateEnvironmentModifiers(recipe, category) {
    let successBonus = 0;
    let timeMultiplier = 1.0;
    const activeEffects = [];

    // --- 1. Season Check ---
    const season = getCurrentSeason();
    const seasonData = SEASONAL_BONUSES[season?.abbreviation];
    
    if (seasonData) {
        const buffs = seasonData.buffs;
        let isBuffed = false;

        // Check Category
        if (buffs.categories && buffs.categories.includes(category)) {
            isBuffed = true;
        }
        
        // Check School
        if (recipe.school && buffs.schools && buffs.schools.includes(recipe.school.toLowerCase())) {
            isBuffed = true;
        }

        if (isBuffed) {
            successBonus += 10;
            timeMultiplier *= buffs.timeMod || 0.9;
            activeEffects.push({
                source: seasonData.name,
                icon: getSeasonIcon(season.abbreviation),
                text: "+10% Success, 10% Faster",
                type: 'season'
            });
        }
    }

    // --- 2. Time of Day Check ---
    const period = getGameTimePeriod();
    const timeMods = TIME_OF_DAY_MODIFIERS[period];
    
    if (timeMods) {
        // Dawn bonus for potions/alchemy
        if (period === 'dawn' && (category === 'potions' || category === CRAFTING_CATEGORIES.POTIONS)) {
            successBonus += 5;
            timeMultiplier *= 0.95;
            activeEffects.push({ 
                source: "Dawn Light", 
                icon: "🌅", 
                text: "+5% Alchemy Success",
                type: 'time'
            });
        }
        
        // Dusk bonus for enchanting
        if (period === 'dusk' && (category === 'enchanting' || category === CRAFTING_CATEGORIES.ENCHANTING)) {
            successBonus += 5;
            timeMultiplier *= 0.95;
            activeEffects.push({ 
                source: "Twilight Magic", 
                icon: "🌆", 
                text: "+5% Enchanting Success",
                type: 'time'
            });
        }
        
        // Night bonus for scrolls
        if (period === 'night' && (category === 'scrolls' || category === CRAFTING_CATEGORIES.SCROLLS)) {
            successBonus += 5;
            timeMultiplier *= 0.8;
            activeEffects.push({ 
                source: "Quiet Night", 
                icon: "🌙", 
                text: "+5% Success, 20% Faster Scribing",
                type: 'time'
            });
        }
        
        // Day bonus for smithing
        if (period === 'day' && (category === 'smithing' || category === CRAFTING_CATEGORIES.SMITHING)) {
            successBonus += 3;
            activeEffects.push({ 
                source: "Full Light", 
                icon: "☀️", 
                text: "+3% Smithing Precision",
                type: 'time'
            });
        }
    }

    // --- 3. Holiday Check ---
    const holiday = getTodaysHoliday();
    if (holiday) {
        // Special bonuses for certain holidays
        if (holiday.name.toLowerCase().includes('flame') || holiday.name.toLowerCase().includes('fire')) {
            if (recipe.school === 'EVOCATION' || category === 'smithing') {
                successBonus += 15;
                activeEffects.push({
                    source: holiday.name,
                    icon: "🎉",
                    text: "+15% Fire/Smithing Bonus",
                    type: 'holiday'
                });
            }
        }
        
        if (holiday.name.toLowerCase().includes('starfall')) {
            if (category === 'scrolls' || category === 'enchanting') {
                successBonus += 10;
                timeMultiplier *= 0.85;
                activeEffects.push({
                    source: holiday.name,
                    icon: "⭐",
                    text: "+10% Success, 15% Faster",
                    type: 'holiday'
                });
            }
        }
    }

    return { successBonus, timeMultiplier, activeEffects };
}



// Override standard time modifiers to use Game Time logic
export const TIME_OF_DAY_MODIFIERS = {
    dawn: { crafting: 1.0, enchanting: 0.9, alchemy: 1.15, text: "Dawn: Good for Alchemy" },
    day: { crafting: 1.0, enchanting: 1.0, alchemy: 1.0, text: "Day: Standard" },
    dusk: { crafting: 1.0, enchanting: 1.15, alchemy: 0.9, text: "Dusk: Good for Enchanting" },
    night: { crafting: 1.2, enchanting: 0.8, alchemy: 1.0, scrolls: 0.8, text: "Night: Quiet study (Scrolls faster)" }
};
// ============================================
// === GAME DATE FUNCTIONS ===
// ============================================



// ============================================
// === GAME DATE FUNCTIONS ===
// ============================================


// ============================================
// === GAME DATE FUNCTIONS ===
// ============================================

function getMonthName(monthIndex) {
    const months = CALENDAR_DATA.months.values;
    if (monthIndex >= 0 && monthIndex < months.length) {
        return months[monthIndex].name;
    }
    return 'Unknown';
}

function getMonthDays(monthIndex) {
    const months = CALENDAR_DATA.months.values;
    if (monthIndex >= 0 && monthIndex < months.length) {
        return months[monthIndex].days;
    }
    return 30;
}

function getDayName(dayOfWeek) {
    const days = CALENDAR_DATA.days.values;
    if (dayOfWeek >= 0 && dayOfWeek < days.length) {
        return days[dayOfWeek].name;
    }
    return 'Unknown';
}

function getDayOfWeek(year, monthIndex, day) {
    let totalDays = 0;
    totalDays += (year - 1) * 365;
    for (let i = 0; i < monthIndex; i++) {
        totalDays += getMonthDays(i);
    }
    totalDays += day;
    return totalDays % 7;
}

function getOrdinalSuffix(n) {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function getGameDateString() {
    const month = getMonthName(CURRENT_GAME_DATE.monthIndex);
    const day = CURRENT_GAME_DATE.day;
    const year = CURRENT_GAME_DATE.year;
    const dayOfWeek = getDayOfWeek(year, CURRENT_GAME_DATE.monthIndex, day);
    const dayName = getDayName(dayOfWeek);
    return `${dayName}, ${getOrdinalSuffix(day)} of ${month}, ${year}`;
}

function getGameDateShort() {
    const month = getMonthName(CURRENT_GAME_DATE.monthIndex);
    const day = CURRENT_GAME_DATE.day;
    const year = CURRENT_GAME_DATE.year;
    return `${day} ${month}, ${year}`;
}

function getGameTimeString() {
    const hour = CURRENT_GAME_TIME.hour;
    const minute = CURRENT_GAME_TIME.minute;
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    const displayMinute = minute.toString().padStart(2, '0');
    return `${displayHour}:${displayMinute} ${period}`;
}

function getGameDateTimeString() {
    return `${getGameDateShort()} at ${getGameTimeString()}`;
}

function getEstimatedDeliveryString(hoursFromNow) {
    if (!hoursFromNow || isNaN(hoursFromNow)) {
        hoursFromNow = 1;
    }
    
    let futureHour = CURRENT_GAME_TIME.hour + hoursFromNow;
    let futureDays = Math.floor(futureHour / 24);
    futureHour = futureHour % 24;
    
    let futureDay = CURRENT_GAME_DATE.day + futureDays;
    let futureMonthIndex = CURRENT_GAME_DATE.monthIndex;
    let futureYear = CURRENT_GAME_DATE.year;
    
    let monthDays = getMonthDays(futureMonthIndex);
    while (futureDay > monthDays) {
        futureDay -= monthDays;
        futureMonthIndex++;
        
        if (futureMonthIndex >= CALENDAR_DATA.months.values.length) {
            futureMonthIndex = 0;
            futureYear++;
        }
        
        monthDays = getMonthDays(futureMonthIndex);
    }
    
    const month = getMonthName(futureMonthIndex);
    const period = futureHour >= 12 ? 'PM' : 'AM';
    const displayHour = futureHour % 12 || 12;
    
    return `${getOrdinalSuffix(futureDay)} of ${month}, ${futureYear} around ${displayHour}:00 ${period}`;
}

function getCurrentSeason() {
    const currentMonth = CURRENT_GAME_DATE.monthIndex + 1;
    const seasons = CALENDAR_DATA.seasons.values;
    
    for (const season of seasons) {
        if (season.monthStart > season.monthEnd) {
            if (currentMonth >= season.monthStart || currentMonth <= season.monthEnd) {
                return season;
            }
        } else {
            if (currentMonth >= season.monthStart && currentMonth <= season.monthEnd) {
                return season;
            }
        }
    }
    
    return seasons[0];
}

function getTodaysHoliday() {
    const holidays = CALENDAR_DATA.holidays.values;
    const currentMonth = CURRENT_GAME_DATE.monthIndex + 1;
    const currentDay = CURRENT_GAME_DATE.day;
    return holidays.find(h => h.month === currentMonth && h.day === currentDay) || null;
}

function getTodaysBirthday() {
    const birthdays = CALENDAR_DATA.birthdays;
    const currentMonth = CURRENT_GAME_DATE.monthIndex + 1;
    const currentDay = CURRENT_GAME_DATE.day;
    return birthdays.find(b => b.month === currentMonth && b.day === currentDay) || null;
}

export function getCatalystSubstitutes(originalItemId) {
    // 1. Generate a seed based on the original ID so the substitutes are always the same for that item
    let hash = 0;
    for (let i = 0; i < originalItemId.length; i++) {
        hash = originalItemId.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);

    const allMaterials = Object.keys(MATERIALS);
    const substitutes = [];
    
    // 2. Pick 3 distinct items
    let attempts = 0;
    while (substitutes.length < 3 && attempts < 100) {
        // Pseudo-random index based on hash + attempts
        const index = (hash + attempts * 7) % allMaterials.length;
        const potentialId = allMaterials[index];
        
        // Don't pick the original item and don't pick duplicates
        if (potentialId !== originalItemId && !substitutes.find(s => s.id === potentialId)) {
            // Calculate Penalty: -10% to -30% Success Chance
            // We base this on the rarity difference or just random for now
            const penalty = 10 + ((hash + attempts) % 21); // 10 to 30
            
            substitutes.push({
                id: potentialId,
                penalty: penalty
            });
        }
        attempts++;
    }
    
    return substitutes;
}
let activeCatalyst = null; // <--- NEW: Tracks the currently chosen wildcard (original or sub)
let isSelectingCatalyst = false; // <--- NEW: Toggles the UI to show the 3 buttons
// ============================================
// === STATE ===
// ============================================

let currentCategory = CRAFTING_CATEGORIES.SCROLLS;
let selectedRecipe = null;
let craftingQueue = [];
let completedProjects = [];
let playerInventory = {};
let craftingSkills = {
    scrollScribing: 1,
    alchemy: 0,
    enchanting: 0,
    smithing: 0
};

// Shop State
let shopOpen = false;
let shopCategory = 'all';
let shopCart = [];
let shopSearch = '';

// ============================================
// === XP FUNCTIONS ===
// ============================================

function getPlayerXPStatus() {
    const allRewards = REWARDS_DATA.extractAll();
    const earnedPlayerXP = allRewards
        .filter(r => r.earned && r.type === 'xp')
        .reduce((sum, r) => sum + (r.amount || 0), 0);
    
    const craftingSpent = parseInt(localStorage.getItem('crafting_xp_spent') || '0');
    
    // Calculate pending from active shipments
    const pendingXP = pendingShipments
        .filter(s => s.status !== 'collected')
        .reduce((sum, s) => sum + (s.totalCost || 0), 0);

    return {
        total: earnedPlayerXP,
        spent: craftingSpent,
        pending: pendingXP,
        available: earnedPlayerXP - craftingSpent - pendingXP
    };
}

function getAvailableXP() {
    return getPlayerXPStatus().available;
}

function spendXP(amount) {
    const current = parseInt(localStorage.getItem('crafting_xp_spent') || '0');
    localStorage.setItem('crafting_xp_spent', (current + amount).toString());
}
function refundShipmentXP(shipmentId) {
    const shipment = pendingShipments.find(s => s.id === shipmentId);
    if (!shipment || shipment.status === 'collected') return false;
    
    // Remove from spent (refund)
    const currentSpent = parseInt(localStorage.getItem('crafting_xp_spent') || '0');
    const newSpent = Math.max(0, currentSpent - shipment.totalCost);
    localStorage.setItem('crafting_xp_spent', newSpent.toString());
    
    // Remove shipment
    pendingShipments = pendingShipments.filter(s => s.id !== shipmentId);
    saveShipments();
    
    return true;
}


// ============================================
// === REAL TIME FUNCTIONS ===
// ============================================

function getRealTimePeriod() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 7) return 'dawn';
    if (hour >= 7 && hour < 18) return 'day';
    if (hour >= 18 && hour < 20) return 'dusk';
    return 'night';
}

function formatRealTime() {
    return new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

function formatRealDate() {
    return new Date().toLocaleDateString('en-US', { 
        weekday: 'short',
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
    });
}




// ============================================
// === STATE MANAGEMENT ===
// ============================================

function loadCraftingState() {
    try {
        const saved = localStorage.getItem('crafting_state');
        if (saved) {
            const data = JSON.parse(saved);
            craftingQueue = data.craftingQueue || [];
            completedProjects = data.completedProjects || [];
            playerInventory = data.playerInventory || {};
            craftingSkills = data.craftingSkills || craftingSkills;
            
            // ✅ LOAD MARKET STATE
            if (data.marketState) {
                initMarket(data.marketState);
            }
        }
    } catch (e) {
        console.error('Failed to load crafting state:', e);
    }
}
function saveCraftingState() {
    const data = {
        craftingQueue,
        completedProjects,
        playerInventory,
        craftingSkills
    };
    localStorage.setItem('crafting_state', JSON.stringify(data));
}

// ============================================
// === INVENTORY FUNCTIONS ===
// ============================================

function getInventoryCount(materialId) {
    return playerInventory[materialId] || 0;
}

function hasEnoughMaterials(recipe) {
    return recipe.materials.every(mat => 
        getInventoryCount(mat.id) >= mat.quantity
    );
}

function addMaterial(materialId, quantity = 1) {
    playerInventory[materialId] = (playerInventory[materialId] || 0) + quantity;
    saveCraftingState();
}

function consumeMaterials(recipe) {
    recipe.materials.forEach(mat => {
        playerInventory[mat.id] = (playerInventory[mat.id] || 0) - mat.quantity;
        if (playerInventory[mat.id] <= 0) delete playerInventory[mat.id];
    });
    saveCraftingState();
}

function getMissingMaterials(recipe, inventory) {
    const missing = [];
    recipe.materials.forEach(mat => {
        const owned = inventory[mat.id] || 0;
        if (owned < mat.quantity) {
            const toBuy = mat.quantity - owned;
            missing.push({
                ...getMaterialData(mat.id),
                id: mat.id,
                needed: mat.quantity,
                owned: owned,
                toBuy: toBuy,
                cost: getMaterialXPPrice(mat.id, toBuy)
            });
        }
    });
    return missing;
}

function addTestMaterials() {
    const testMaterials = {
        blank_parchment: 10,
        enchanted_ink: 15,
        arcane_quill: 2,
        spell_focus_dust: 10,
        empty_vial: 10,
        moonwell_water: 8,
        healing_herbs: 12,
        fire_essence: 3,
        frost_essence: 3,
        arcane_crystal: 2,
        runestone: 5,
        fine_parchment: 5,
        arcane_ink: 5,
        arcane_powder: 5
    };
    
    Object.entries(testMaterials).forEach(([id, qty]) => {
        addMaterial(id, qty);
    });
    
    saveCraftingState();
}

// ============================================
// === CRAFTING FUNCTIONS ===
// ============================================

// Update in crafting.js
function calculateSuccessChance(recipe) {
    let chance = recipe.successChance || 85;
    
    // 1. Skill Bonus
    let skillType = 'scrollScribing';
    if (recipe.type === 'potions' || currentCategory === CRAFTING_CATEGORIES.POTIONS) {
        skillType = 'alchemy';
    } else if (recipe.type === 'enchanting' || currentCategory === CRAFTING_CATEGORIES.ENCHANTING) {
        skillType = 'enchanting';
    } else if (recipe.type === 'smithing' || currentCategory === CRAFTING_CATEGORIES.SMITHING) {
        skillType = 'smithing';
    }
    
    const skill = craftingSkills[skillType] || 0;
    chance += skill * CRAFTING_CONFIG.successPerProficiencyLevel;
    
    // 2. Catalyst Penalty (from substitution system)
    if (activeCatalyst && activeCatalyst.penalty) {
        chance -= activeCatalyst.penalty;
    }
    
    // 3. Environment Bonus (Season/Time/Holiday)
    const envMods = calculateEnvironmentModifiers(recipe, currentCategory);
    chance += envMods.successBonus;

    // 4. Clamp to valid range
    return Math.max(5, Math.min(99, chance));
}
function formatCraftTime(hours) {
    if (hours < 1) return `${Math.round(hours * 60)} min`;
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    if (remainingHours === 0) return `${days}d`;
    return `${days}d ${remainingHours}h`;
}

function getOrdinal(n) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

function startCrafting(recipeId, category) {
    // Get the base recipe
    const recipes = getRecipesForCategory(category);
    const baseRecipe = getRecipeWithWildcard(recipes[recipeId]);
    
    if (!baseRecipe) {
        showNotification('Recipe not found!', 'error');
        return false;
    }
    
    // Create effective materials with substitutions applied
    const effectiveMaterials = baseRecipe.materials.map(mat => {
        if (mat.isWildcard && activeCatalyst) {
            return { 
                ...mat, 
                id: activeCatalyst.id,
                originalId: mat.id
            };
        }
        return mat;
    });
    
    // Create effective recipe
    const recipe = { ...baseRecipe, materials: effectiveMaterials };
    
    // Check if we have enough materials
    if (!hasEnoughMaterials(recipe)) {
        showNotification('Not enough materials!', 'error');
        return false;
    }
    
    // Check queue limit
    if (craftingQueue.length >= CRAFTING_CONFIG.maxQueueSlots) {
        showNotification('Crafting queue is full!', 'error');
        return false;
    }
    
    // Consume materials (using effective materials)
    consumeMaterials(recipe);
    
    // Calculate Environment Modifiers
    const envMods = calculateEnvironmentModifiers(recipe, category);
    
    // Calculate time with modifiers
    const baseCraftTime = recipe.craftTime || 1;
    const actualTime = Math.max(0.5, Math.ceil(baseCraftTime * envMods.timeMultiplier * 10) / 10);
    
    // Calculate success chance (includes penalty from activeCatalyst and environment bonuses)
    const successChance = calculateSuccessChance(recipe);
    
    // Create project object
    const project = {
        id: `project_${Date.now()}`,
        recipeId: recipe.id,
        recipeName: recipe.name,
        category: category,
        icon: recipe.icon,
        startTime: new Date().toISOString(),
        gameStartDate: getGameDateShort(),
        gameStartTime: getGameTimeString(),
        craftTime: actualTime,
        remainingTime: actualTime,
        successChance: successChance,
        status: 'in-progress',
        spellLevel: recipe.spellLevel,
        spellName: recipe.spellName,
        school: recipe.school,
        usedSubstitute: !!activeCatalyst,
        substitutePenalty: activeCatalyst?.penalty || 0,
        environmentBonuses: envMods.activeEffects.map(e => e.source)
    };
    
    craftingQueue.push(project);
    saveCraftingState();
    
    // Build notification message
    let notifMessage = `Started crafting ${recipe.name}!`;
    if (envMods.activeEffects.length > 0) {
        notifMessage += ` (${envMods.activeEffects.map(e => e.source).join(', ')} active)`;
    }
    
    showNotification(notifMessage, 'success');
    
    // Reset catalyst state after crafting starts
    activeCatalyst = null;
    isSelectingCatalyst = false;
    
    renderCraftingQueue();
    renderRecipeDetail();
    renderInventory();
    
    return true;
}

function completeProject(projectId) {
    const projectIndex = craftingQueue.findIndex(p => p.id === projectId);
    if (projectIndex === -1) return;
    
    const project = craftingQueue[projectIndex];
    const roll = Math.random() * 100;
    const success = roll < project.successChance;
    
    if (success) {
        project.status = 'completed';
        completedProjects.push({
            ...project,
            completedAt: new Date().toISOString()
        });
        showSuccessAnimation(project);
    } else {
        project.status = 'failed';
        showFailureAnimation(project);
    }
    
    craftingQueue.splice(projectIndex, 1);
    saveCraftingState();
    renderCraftingQueue();
}

function cancelProject(projectId) {
    const projectIndex = craftingQueue.findIndex(p => p.id === projectId);
    if (projectIndex === -1) return;
    
    if (!confirm('Cancel this project? Materials will be lost!')) return;
    
    craftingQueue.splice(projectIndex, 1);
    saveCraftingState();
    
    showNotification('Project cancelled.', 'warning');
    renderCraftingQueue();
}

// ============================================
// === SHOP FUNCTIONS ===
// ============================================

// ============================================
// === SHOP OPEN/CLOSE FUNCTIONS ===
// ============================================

function openMaterialShop(preSelectCategory = null) {
    console.log('🏪 Opening Material Shop...');
    shopOpen = true;
    if (preSelectCategory) {
        shopCategory = preSelectCategory;
    }
    shopCart = [];
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('material-shop-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'material-shop-modal';
        modal.className = 'shop-modal';
        document.body.appendChild(modal);
    }
    
    // Force display
    modal.style.display = 'flex';
    
    // Render content
    renderMaterialShop();
    
    console.log('✅ Shop opened');
}

function closeMaterialShop() {
    console.log('🏪 Closing Material Shop...');
    shopOpen = false;
    const modal = document.getElementById('material-shop-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}
function addToShopCart(materialId, quantity = 1) {
    const existing = shopCart.find(item => item.id === materialId);
    const material = getMaterialData(mat.id);
    const availability = getMaterialAvailability(materialId);
    
    if (!material || !availability.available) return;
    
    const maxCanBuy = availability.stock;
    
    if (existing) {
        existing.quantity = Math.min(existing.quantity + quantity, maxCanBuy);
    } else {
        shopCart.push({
            id: materialId,
            quantity: Math.min(quantity, maxCanBuy),
            material: material
        });
    }
    
    renderMaterialShop();
}

function removeFromShopCart(materialId) {
    shopCart = shopCart.filter(item => item.id !== materialId);
    renderMaterialShop();
}

function updateCartQuantity(materialId, newQuantity) {
    const item = shopCart.find(i => i.id === materialId);
    if (!item) return;
    
    const availability = getMaterialAvailability(materialId);
    
    if (newQuantity <= 0) {
        removeFromShopCart(materialId);
    } else {
        item.quantity = Math.min(newQuantity, availability.stock);
        renderMaterialShop();
    }
}

function getShopCartTotal() {
    return shopCart.reduce((total, item) => {
        return total + getMaterialXPPrice(item.id, item.quantity);
    }, 0);
}

function getShopCartItemCount() {
    return shopCart.reduce((count, item) => count + item.quantity, 0);
}





// ============================================
// === NOTIFICATION ===
// ============================================

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.craft-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `craft-notification ${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️'}</span>
        <span class="notification-message">${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// === RENDER FUNCTIONS ===
// ============================================
function renderHeader() {
    const container = document.getElementById('crafting-header');
    if (!container) return;
    
    const timePeriod = getGameTimePeriod();
    const xpStatus = getPlayerXPStatus();
    const season = getCurrentSeason();
    const seasonBuffs = getActiveSeasonBuffs();
    const holiday = getTodaysHoliday();
    const birthday = getTodaysBirthday();
    
    container.innerHTML = `
        <div class="header-content">
            <div class="crafting-title">
                <span class="crafting-logo">⚗️</span>
                <div>
                    <h1>Arcane Workshop</h1>
                    <p class="crafting-subtitle">Scrolls • Potions • Enchanting • Smithing</p>
                </div>
            </div>
            
            <div class="time-display">
                <span class="time-icon">${getTimePeriodIcon(timePeriod)}</span>
                <div class="time-info">
                    <span class="time-current">${getGameTimeString()}</span>
                    <span class="time-date">${getGameDateShort()}</span>
                    ${season ? `
                        <span class="time-season" style="color: ${season.color};">
                            ${getSeasonIcon(season.abbreviation)} ${season.name}
                        </span>
                    ` : ''}
                </div>
                <span class="time-period ${timePeriod}">${timePeriod.toUpperCase()}</span>
            </div>
            
            ${seasonBuffs ? `
                <div class="header-season-buff" title="${seasonBuffs.description}">
                    <span class="buff-icon">${getSeasonIcon(season.abbreviation)}</span>
                    <span class="buff-text">${seasonBuffs.description}</span>
                </div>
            ` : ''}
            
            ${holiday ? `
                <div class="header-holiday">
                    <span class="holiday-icon">🎉</span>
                    <span class="holiday-name">${holiday.name}</span>
                </div>
            ` : ''}
            
            ${birthday ? `
                <div class="header-birthday">
                    <span class="birthday-icon">🎂</span>
                    <span class="birthday-name">${birthday.name}'s Birthday!</span>
                </div>
            ` : ''}
            
            <div class="crafting-stats">
                <div class="stat-item xp-available">
                    <span class="stat-icon">💎</span>
                    <span class="stat-value">${xpStatus.available.toLocaleString()}</span>
                    <span class="stat-label">Available XP</span>
                </div>
                ${xpStatus.pending > 0 ? `
                    <div class="stat-item xp-pending">
                        <span class="stat-icon">📦</span>
                        <span class="stat-value">${xpStatus.pending.toLocaleString()}</span>
                        <span class="stat-label">Pending</span>
                    </div>
                ` : ''}
                <div class="stat-item xp-spent">
                    <span class="stat-icon">📉</span>
                    <span class="stat-value">${xpStatus.spent.toLocaleString()}</span>
                    <span class="stat-label">Spent</span>
                </div>
                <div class="stat-item queue">
                    <span class="stat-icon">📋</span>
                    <span class="stat-value">${craftingQueue.length}/${CRAFTING_CONFIG.maxQueueSlots}</span>
                    <span class="stat-label">Queue</span>
                </div>
                <div class="stat-item level">
                    <span class="stat-icon">⭐</span>
                    <span class="stat-value">Lvl ${CRAFTING_CONFIG.partyLevel}</span>
                    <span class="stat-label">Party</span>
                </div>
            </div>
        </div>
    `;
}
// ============================================
// === GAME DATE FUNCTIONS ===
// ============================================

function renderCategoryTabs() {
    const container = document.getElementById('category-tabs');
    if (!container) return;
    const scrollCount = Object.keys(SCROLL_RECIPES || {}).length;
    const potionCount = Object.keys(POTION_RECIPES || {}).length;
    const enchantCount = Object.keys(ENCHANTING_RECIPES || {}).length;
    const smithCount = Object.keys(SMITHING_RECIPES || {}).length;    
    const categories = [
        { id: CRAFTING_CATEGORIES.SCROLLS, name: 'Spell Scrolls', icon: '📜', count: scrollCount },
        { id: CRAFTING_CATEGORIES.POTIONS, name: 'Potions', icon: '🧪', count: potionCount },
        { id: CRAFTING_CATEGORIES.ENCHANTING, name: 'Enchanting', icon: '✨', count: enchantCount },
        { id: CRAFTING_CATEGORIES.SMITHING, name: 'Smithing', icon: '🔨', count: smithCount }    ];
    
    container.innerHTML = categories.map(cat => `
        <button class="category-tab ${currentCategory === cat.id ? 'active' : ''} ${cat.locked ? 'locked' : ''}"
                data-category="${cat.id}"
                ${cat.locked ? 'disabled' : ''}>
            <span class="tab-icon">${cat.icon}</span>
            <span class="tab-name">${cat.name}</span>
            <span class="tab-count">${cat.locked ? '🔒' : `(${cat.count})`}</span>
        </button>
    `).join('');
    
    container.querySelectorAll('.category-tab:not(.locked)').forEach(tab => {
        tab.addEventListener('click', () => {
            currentCategory = tab.dataset.category;
            selectedRecipe = null;
            recipeSearchQuery = ''; // ✅ Clear search when changing categories
            activeCatalyst = null;
            isSelectingCatalyst = false;
            renderCategoryTabs();
            renderRecipes();
            renderRecipeDetail();
        });
    });
}


// Add this near the top of crafting.js after imports
function getRecipesForCategory(category) {
    switch(category) {
        case CRAFTING_CATEGORIES.SCROLLS: 
            return SCROLL_RECIPES;
        case CRAFTING_CATEGORIES.POTIONS: 
            return POTION_RECIPES;
        case CRAFTING_CATEGORIES.ENCHANTING: 
            return ENCHANTING_RECIPES;
        case CRAFTING_CATEGORIES.SMITHING: 
            return SMITHING_RECIPES;
        default: 
            return {};
    }
}
function renderRecipeDetail() {
    const container = document.getElementById('recipe-detail');
    if (!container) return;
    
    // Save scroll position
    const scrollPanel = container.querySelector('.recipe-detail-panel');
    const savedScrollTop = scrollPanel ? scrollPanel.scrollTop : 0;
    
    if (!selectedRecipe) {
        container.innerHTML = `
            <div class="no-selection">
                <span class="no-selection-icon">👆</span>
                <p class="no-selection-title">Select a Recipe</p>
                <p class="no-selection-text">Choose a recipe from the list to view details.</p>
            </div>
        `;
        return;
    }
    
    const recipe = selectedRecipe;
    
    // Create effective materials with substitutions applied
    const effectiveMaterials = recipe.materials.map(mat => {
        if (mat.isWildcard && activeCatalyst) {
            return { 
                ...mat, 
                id: activeCatalyst.id,
                originalId: mat.id,
                penalty: activeCatalyst.penalty || 0,
                isSubstituted: activeCatalyst.isSubstitute || false
            };
        }
        return mat;
    });
    
    // Create effective recipe for calculations
    const effectiveRecipe = { ...recipe, materials: effectiveMaterials };
    
    // Calculate Environment Modifiers
    const envMods = calculateEnvironmentModifiers(recipe, currentCategory);
    
    // Use effective recipe for all calculations
    const canCraft = hasEnoughMaterials(effectiveRecipe);
    const meetsLevel = (recipe.levelRequirement || 1) <= CRAFTING_CONFIG.partyLevel;
    const successChance = calculateSuccessChance(recipe);
    const baseCraftTime = recipe.craftTime || 1;
    const finalCraftTime = Math.max(0.5, baseCraftTime * envMods.timeMultiplier);
    const missing = getMissingMaterials(effectiveRecipe, playerInventory);
    const missingCost = missing.reduce((sum, m) => sum + m.cost, 0);
    
    // Get recipe type info
    const recipeType = recipe.type || currentCategory;
    const isScroll = recipeType === 'scrolls' || recipe.spellLevel !== undefined;
    const isPotion = recipeType === 'potions';
    const isEnchanting = recipeType === 'enchanting';
    const isSmithing = recipeType === 'smithing';
    
    // Get school info only for scrolls
    const school = (isScroll && recipe.school) ? SPELL_SCHOOLS[recipe.school] : null;
    
    // Badge Text
    let typeBadge = '';
    let typeColor = '#6366f1';

    if (isScroll) {
        typeBadge = recipe.spellLevel === 0 ? 'Cantrip' : `${getOrdinal(recipe.spellLevel)} Level`;
    } else if (isPotion) {
        typeBadge = 'Potion';
        typeColor = '#10b981';
    } else if (isEnchanting) {
        typeBadge = 'Enchantment';
        typeColor = '#f59e0b';
    } else if (isSmithing) {
        typeBadge = 'Smithing';
        typeColor = '#ef4444';
    }
    
    // Check if time is boosted
    const timeIsBoosted = envMods.timeMultiplier < 1;
    const successIsBoosted = envMods.successBonus > 0;
    
    container.innerHTML = `
        <div class="recipe-detail-panel">
            <div class="detail-header">
                <div class="detail-title-row">
                    <span class="detail-icon">${recipe.icon}</span>
                    <div class="detail-title-group">
                        <h2 class="detail-name">${recipe.name}</h2>
                        <div class="detail-type-info">
                            <span class="type-badge" style="background: ${typeColor}20; color: ${typeColor}; border: 1px solid ${typeColor}40; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">
                                ${typeBadge}
                            </span>
                            ${school ? `
                                <span class="spell-school-badge" style="background: ${school.color}20; color: ${school.color}; border: 1px solid ${school.color}40; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">
                                    ${school.icon} ${school.name}
                                </span>
                            ` : ''}
                        </div>
                    </div>
                </div>
                <button class="detail-close-btn" id="close-detail">✕</button>
            </div>
            
            <p class="recipe-description-full">${recipe.description || recipe.effect || 'No description available.'}</p>
            
            <!-- Active Environment Effects -->
            ${envMods.activeEffects.length > 0 ? `
                <div class="active-effects-container">
                    <div class="effects-header">
                        <span class="effects-title">✨ Active Bonuses</span>
                    </div>
                    <div class="effects-list">
                        ${envMods.activeEffects.map(eff => `
                            <div class="effect-badge effect-${eff.type}">
                                <span class="effect-icon">${eff.icon}</span>
                                <span class="effect-source">${eff.source}:</span>
                                <span class="effect-text">${eff.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="detail-stats-grid">
                <div class="detail-stat">
                    <span class="detail-stat-label">Success Chance</span>
                    <span class="detail-stat-value ${successIsBoosted ? 'boosted' : ''} ${activeCatalyst?.penalty ? 'penalized' : ''}">
                        ${successChance}%
                        ${successIsBoosted ? `<small class="stat-bonus">(+${envMods.successBonus}%)</small>` : ''}
                    </span>
                </div>
                <div class="detail-stat">
                    <span class="detail-stat-label">Craft Time</span>
                    <span class="detail-stat-value ${timeIsBoosted ? 'boosted' : ''}">
                        ${formatCraftTime(finalCraftTime)}
                        ${timeIsBoosted ? `<small class="stat-bonus">(${Math.round((1 - envMods.timeMultiplier) * 100)}% faster)</small>` : ''}
                    </span>
                </div>
                <div class="detail-stat">
                    <span class="detail-stat-label">Level Req.</span>
                    <span class="detail-stat-value ${meetsLevel ? '' : 'unmet'}">
                        ${meetsLevel ? '✅' : '🔒'} Lvl ${recipe.levelRequirement || 1}
                    </span>
                </div>
                <div class="detail-stat">
                    <span class="detail-stat-label">Category</span>
                    <span class="detail-stat-value" style="color: ${typeColor}">
                        ${isScroll ? '📜' : isPotion ? '🧪' : isEnchanting ? '✨' : '🔨'} 
                        ${recipeType.charAt(0).toUpperCase() + recipeType.slice(1)}
                    </span>
                </div>
            </div>
            
            <div class="recipe-requirements">
                <h3 class="requirements-title">📦 Required Materials</h3>
                ${effectiveMaterials && effectiveMaterials.length > 0 ? effectiveMaterials.map(mat => {
                    const material = getMaterialData(mat.id);
                    const owned = getInventoryCount(mat.id);
                    const hasEnough = owned >= mat.quantity;
                    const penalty = mat.penalty || 0;
                    const isSubstituted = mat.isSubstituted || false;
                    
                    // Build Substitution UI
                    let substitutionUI = '';
                    
                    if (mat.isWildcard) {
                        if (isSelectingCatalyst) {
                            const originalId = mat.originalId || mat.id;
                            const subs = getCatalystSubstitutes(originalId);
                            const originalMat = getMaterialData(originalId);
                            
                            substitutionUI = `
                                <div class="catalyst-selector">
                                    <p class="selector-title">Select Alternative (Reduces Success Chance):</p>
                                    <div class="selector-options">
                                        <button class="sub-btn ${!isSubstituted ? 'active' : ''}" data-sub-id="original" data-original-id="${originalId}">
                                            <span class="sub-icon">${originalMat.icon}</span>
                                            <span class="sub-name">${originalMat.name}</span>
                                            <span class="sub-penalty-ok">+0% Penalty</span>
                                            <span class="sub-price">💎 ${getMaterialXPPrice(originalId, mat.quantity).toLocaleString()} XP</span>
                                        </button>
                                        
                                        ${subs.map(sub => {
                                            const subMat = getMaterialData(sub.id);
                                            const subOwned = getInventoryCount(sub.id);
                                            const subPrice = getMaterialXPPrice(sub.id, mat.quantity);
                                            return `
                                                <button class="sub-btn ${mat.id === sub.id ? 'active' : ''}" 
                                                        data-sub-id="${sub.id}" 
                                                        data-penalty="${sub.penalty}"
                                                        data-original-id="${originalId}">
                                                    <span class="sub-icon">${subMat.icon}</span>
                                                    <span class="sub-name">${subMat.name}</span>
                                                    <span class="sub-penalty">-${sub.penalty}% Success</span>
                                                    <span class="sub-price">💎 ${subPrice.toLocaleString()} XP</span>
                                                    ${subOwned > 0 ? '<span class="sub-owned">✓ Owned</span>' : ''}
                                                </button>
                                            `;
                                        }).join('')}
                                    </div>
                                    <button class="cancel-sub-btn">Cancel</button>
                                </div>
                            `;
                        } else {
                            substitutionUI = `
                                <button class="swap-catalyst-btn">
                                    🔄 Substitute
                                </button>
                            `;
                        }
                    }

                    return `
                        <div class="requirement-item ${hasEnough ? 'met' : 'unmet'} ${mat.isWildcard ? 'wildcard-req' : ''}">
                            <div class="req-main-row">
                                <div class="requirement-info">
                                    <span class="requirement-icon">${material.icon}</span>
                                    <div class="req-text-col">
                                        <span class="requirement-name" style="text-transform: capitalize;">
                                            ${mat.isWildcard ? `<span class="wildcard-tag">✨ ${mat.wildcardLabel || 'Catalyst'}:</span>` : ''} 
                                            ${material.name}
                                        </span>
                                        ${penalty > 0 ? `<span class="penalty-text">⚠️ -${penalty}% Success Chance</span>` : ''}
                                    </div>
                                </div>
                                <div class="requirement-count">
                                    <span class="${hasEnough ? 'count-ok' : 'count-missing'}">
                                        ${owned}/${mat.quantity}
                                    </span>
                                </div>
                                <span class="requirement-status">${hasEnough ? '✅' : '❌'}</span>
                            </div>
                            ${substitutionUI}
                        </div>
                    `;
                }).join('') : '<p class="no-materials">No materials required.</p>'}
            </div>
            
            ${missing.length > 0 ? `
                <button class="buy-missing-btn" id="buy-missing-btn">
                    🛒 Buy Missing Materials (${missingCost.toLocaleString()} XP)
                </button>
            ` : ''}
            
            <button class="craft-button ${canCraft && meetsLevel ? 'ready' : 'disabled'}" 
                    id="start-craft-btn"
                    ${!canCraft || !meetsLevel || craftingQueue.length >= CRAFTING_CONFIG.maxQueueSlots ? 'disabled' : ''}>
                <span class="button-icon">🔨</span>
                ${!meetsLevel ? 'Level Too Low' : 
                  !canCraft ? 'Missing Materials' : 
                  craftingQueue.length >= CRAFTING_CONFIG.maxQueueSlots ? 'Queue Full' :
                  'Begin Crafting'}
            </button>
        </div>
    `;
    
    // === EVENT LISTENERS ===
    
    // Close button
    document.getElementById('close-detail')?.addEventListener('click', () => {
        selectedRecipe = null;
        activeCatalyst = null;
        isSelectingCatalyst = false;
        renderRecipes();
        renderRecipeDetail();
    });
    
    // Start Craft button
    document.getElementById('start-craft-btn')?.addEventListener('click', () => {
        if (selectedRecipe) {
            startCrafting(selectedRecipe.id, currentCategory);
        }
    });
    
    // Buy Missing button
    document.getElementById('buy-missing-btn')?.addEventListener('click', buyMissingMaterials);
    
    // Open Catalyst Selector
    container.querySelector('.swap-catalyst-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        isSelectingCatalyst = true;
        renderRecipeDetail();
    });

    // Close Catalyst Selector
    container.querySelector('.cancel-sub-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        isSelectingCatalyst = false;
        renderRecipeDetail();
    });

    // Pick a Substitute Option
    container.querySelectorAll('.sub-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const subId = btn.dataset.subId;
            const originalId = btn.dataset.originalId;
            
            if (subId === 'original') {
                activeCatalyst = null;
            } else {
                activeCatalyst = {
                    id: subId,
                    originalId: originalId,
                    penalty: parseInt(btn.dataset.penalty) || 0,
                    isSubstitute: true
                };
            }
            
            isSelectingCatalyst = false;
            renderRecipeDetail();
        });
    });
    
    // Restore scroll position
    const newScrollPanel = container.querySelector('.recipe-detail-panel');
    if (newScrollPanel) {
        newScrollPanel.scrollTop = savedScrollTop;
    }
}
function renderCraftingQueue() {
    const container = document.getElementById('crafting-queue');
    if (!container) return;
    
    const maxSlots = CRAFTING_CONFIG.maxQueueSlots;
    
    container.innerHTML = `
        <div class="crafting-queue">
            <div class="queue-header">
                <span class="queue-title">⚒️ Crafting Queue</span>
                <div class="queue-slots">
                    ${Array.from({ length: maxSlots }, (_, i) => {
                        const hasProject = craftingQueue[i];
                        const isActive = i === 0 && hasProject;
                        return `<span class="queue-slot ${hasProject ? 'filled' : ''} ${isActive ? 'active' : ''}"></span>`;
                    }).join('')}
                </div>
            </div>
            
            ${craftingQueue.length === 0 ? `
                <div class="queue-empty">
                    <span class="empty-icon">📭</span>
                    <p>No active projects</p>
                </div>
            ` : `
                <div class="queue-list">
                    ${craftingQueue.map((project, index) => {
                        const isActive = index === 0;
                        const isReady = project.remainingTime <= 0;
                        const progressPercent = Math.max(0, 100 - (project.remainingTime / project.craftTime) * 100);
                        const school = project.school ? SPELL_SCHOOLS[project.school] : null;
                        
                        return `
                            <div class="project-card ${isReady ? 'ready' : ''} ${project.status}">
                                <div class="project-header">
                                    <div class="project-info">
                                        <span class="project-icon">${project.icon}</span>
                                        <div>
                                            <span class="project-title">${project.recipeName}</span>
                                            <span class="project-type">
                                                ${project.spellLevel !== undefined ? 
                                                    `${project.spellLevel === 0 ? 'Cantrip' : `Lvl ${project.spellLevel}`} ${school?.icon || ''}` :
                                                    'Potion'}
                                            </span>
                                        </div>
                                    </div>
                                    <span class="project-status ${isReady ? 'ready' : 'in-progress'}">
                                        ${isReady ? '✨ READY' : isActive ? '⚒️ CRAFTING' : '⏳ QUEUED'}
                                    </span>
                                </div>
                                
                                <div class="project-progress">
                                    <div class="progress-bar-container">
                                        <div class="progress-bar-fill ${isReady ? 'success' : 'crafting'}" 
                                             style="width: ${progressPercent}%"></div>
                                        <span class="progress-label">${Math.round(progressPercent)}%</span>
                                    </div>
                                    <div class="progress-time">
                                        <span>Success: ${project.successChance}%</span>
                                        <span>${isReady ? 'Complete!' : formatCraftTime(project.remainingTime) + ' remaining'}</span>
                                    </div>
                                </div>
                                
                                <div class="project-actions">
                                    ${isReady ? `
                                        <button class="project-action-btn collect" data-project-id="${project.id}">
                                            ✨ Collect Result
                                        </button>
                                    ` : `
                                        <button class="project-action-btn simulate" data-project-id="${project.id}">
                                            ⏩ Simulate Complete
                                        </button>
                                        <button class="project-action-btn cancel" data-project-id="${project.id}">
                                            ❌ Cancel
                                        </button>
                                    `}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `}
        </div>
    `;
    
    // Attach event listeners
    container.querySelectorAll('.project-action-btn.collect').forEach(btn => {
        btn.addEventListener('click', () => {
            completeProject(btn.dataset.projectId);
        });
    });
    
    container.querySelectorAll('.project-action-btn.cancel').forEach(btn => {
        btn.addEventListener('click', () => {
            cancelProject(btn.dataset.projectId);
        });
    });
    
    // Simulate button for testing
    container.querySelectorAll('.project-action-btn.simulate').forEach(btn => {
        btn.addEventListener('click', () => {
            const project = craftingQueue.find(p => p.id === btn.dataset.projectId);
            if (project) {
                project.remainingTime = 0;
                renderCraftingQueue();
            }
        });
    });
}
function renderInventory() {
    const container = document.getElementById('materials-inventory');
    if (!container) return;
    
    const materialsList = Object.entries(playerInventory)
        .map(([id, count]) => ({
            ...getMaterialData(id),
            id,
            count
        }))
        .filter(m => m.name)
        .sort((a, b) => a.name.localeCompare(b.name));
    
    container.innerHTML = `
        <div class="materials-panel">
            <div class="materials-header">
                <span class="materials-title">🎒 Materials</span>
                <button class="open-shop-btn" id="open-material-shop">
                    🏪 Shop
                </button>
            </div>
            
            ${materialsList.length === 0 ? `
                <div class="empty-state">
                    <span class="empty-icon">📦</span>
                    <p class="empty-title">No materials</p>
                    <button class="shop-link-btn" id="shop-link-btn">
                        Visit the Shop →
                    </button>
                </div>
            ` : `
                <div class="materials-grid">
                    ${materialsList.map(mat => `
                        <div class="material-item ${mat.rarity}" title="${mat.description || mat.name}">
                            <span class="material-icon">${mat.icon}</span>
                            <span class="material-name">${mat.name}</span>
                            <span class="material-count ${mat.count <= 2 ? 'low' : ''}">${mat.count}</span>
                        </div>
                    `).join('')}
                </div>
                
                <button class="clear-inventory-btn" id="clear-inventory-btn">
                    🗑️ Clear Inventory
                </button>
            `}
        </div>
    `;
    
    // Attach event listeners AFTER innerHTML is set
    const shopBtn = document.getElementById('open-material-shop');
    if (shopBtn) {
        shopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Shop button clicked!');
            openMaterialShop();
        });
    }
    
    const shopLinkBtn = document.getElementById('shop-link-btn');
    if (shopLinkBtn) {
        shopLinkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Shop link clicked!');
            openMaterialShop();
        });
    }
    
    const clearBtn = document.getElementById('clear-inventory-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete ALL materials? This cannot be undone.')) {
                clearInventory();
            }
        });
    }
}
function generateDynamicBundles() {
    const bundles = {};
    
    // 1. Analyze all recipes to find material usage patterns
    const materialUsage = analyzeMaterialUsage();
    
    // 2. Generate different bundle types
    const starterBundle = generateStarterBundle(materialUsage);
    if (starterBundle) bundles[starterBundle.id] = starterBundle;
    
    const schoolBundles = generateSchoolBundles();
    Object.assign(bundles, schoolBundles);
    
    const levelBundles = generateLevelBundles();
    Object.assign(bundles, levelBundles);
    
    const frequentBundle = generateFrequentMaterialsBundle(materialUsage);
    if (frequentBundle) bundles[frequentBundle.id] = frequentBundle;
    
    const rarityBundles = generateRarityBundles();
    Object.assign(bundles, rarityBundles);
    
    console.log(`📦 Generated ${Object.keys(bundles).length} dynamic bundles`);
    
    return bundles;
}

function analyzeMaterialUsage() {
    const usage = {};
    const coOccurrence = {};
    
    // Combine all recipes
    const allRecipes = [
        ...Object.values(SCROLL_RECIPES || {}),
        ...Object.values(POTION_RECIPES || {})
    ];
    
    allRecipes.forEach(recipe => {
        if (!recipe.materials) return;
        
        const materialIds = recipe.materials.map(m => m.id);
        
        // Count individual usage
        recipe.materials.forEach(mat => {
            if (!usage[mat.id]) {
                usage[mat.id] = {
                    count: 0,
                    totalQuantity: 0,
                    recipes: [],
                    schools: new Set(),
                    levels: new Set()
                };
            }
            usage[mat.id].count++;
            usage[mat.id].totalQuantity += mat.quantity;
            usage[mat.id].recipes.push(recipe.id);
            if (recipe.school) usage[mat.id].schools.add(recipe.school);
            if (recipe.spellLevel !== undefined) usage[mat.id].levels.add(recipe.spellLevel);
        });
        
        // Track co-occurrence (materials used together)
        for (let i = 0; i < materialIds.length; i++) {
            for (let j = i + 1; j < materialIds.length; j++) {
                const key = [materialIds[i], materialIds[j]].sort().join('|');
                coOccurrence[key] = (coOccurrence[key] || 0) + 1;
            }
        }
    });
    
    return { usage, coOccurrence, recipeCount: allRecipes.length };
}

function generateStarterBundle(analysis) {
    const { usage } = analysis;
    
    // Find the most commonly used materials across all recipes
    const sorted = Object.entries(usage)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 6);
    
    if (sorted.length < 3) return null;
    
    const contents = sorted.map(([id, data]) => {
        const avgQty = Math.ceil(data.totalQuantity / data.count);
        return {
            id,
            quantity: Math.max(3, avgQty * 2) // Give a decent starting amount
        };
    });
    
    return {
        id: 'starter_essentials',
        name: '🌟 Starter Essentials',
        icon: '🎒',
        description: 'The most commonly used materials for beginners. Perfect for your first crafting projects!',
        discount: 25,
        contents,
        generated: true,
        priority: 1
    };
}

function generateSchoolBundles() {
    const bundles = {};
    const schoolMaterials = {};
    
    // Group materials by spell school
    Object.values(SCROLL_RECIPES || {}).forEach(recipe => {
        if (!recipe.school || !recipe.materials) return;
        
        if (!schoolMaterials[recipe.school]) {
            schoolMaterials[recipe.school] = {};
        }
        
        recipe.materials.forEach(mat => {
            if (!schoolMaterials[recipe.school][mat.id]) {
                schoolMaterials[recipe.school][mat.id] = 0;
            }
            schoolMaterials[recipe.school][mat.id] += mat.quantity;
        });
    });
    
    // Create a bundle for each school with enough materials
    Object.entries(schoolMaterials).forEach(([school, materials]) => {
        const materialList = Object.entries(materials);
        if (materialList.length < 2) return;
        
        const schoolInfo = SPELL_SCHOOLS[school] || { name: school, icon: '✨', color: '#888' };
        
        const contents = materialList
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([id, qty]) => ({
                id,
                quantity: Math.max(2, Math.ceil(qty / 2))
            }));
        
        if (contents.length < 2) return;
        
        const bundleId = `school_${school.toLowerCase()}`;
        bundles[bundleId] = {
            id: bundleId,
            name: `${schoolInfo.icon} ${schoolInfo.name} Kit`,
            icon: schoolInfo.icon,
            description: `Essential materials for crafting ${schoolInfo.name.toLowerCase()} spells and scrolls.`,
            discount: 20,
            contents,
            generated: true,
            school: school,
            priority: 2
        };
    });
    
    return bundles;
}

function generateLevelBundles() {
    const bundles = {};
    const levelMaterials = {
        cantrip: {},
        low: {},    // 1-2
        mid: {},    // 3-4
        high: {}    // 5+
    };
    
    Object.values(SCROLL_RECIPES || {}).forEach(recipe => {
        if (recipe.spellLevel === undefined || !recipe.materials) return;
        
        let tier;
        if (recipe.spellLevel === 0) tier = 'cantrip';
        else if (recipe.spellLevel <= 2) tier = 'low';
        else if (recipe.spellLevel <= 4) tier = 'mid';
        else tier = 'high';
        
        recipe.materials.forEach(mat => {
            if (!levelMaterials[tier][mat.id]) {
                levelMaterials[tier][mat.id] = 0;
            }
            levelMaterials[tier][mat.id] += mat.quantity;
        });
    });
    
    const tierInfo = {
        cantrip: { name: 'Cantrip Crafter', icon: '📜', desc: 'Basic materials for simple cantrip scrolls.', discount: 15 },
        low: { name: 'Apprentice Bundle', icon: '📚', desc: 'Materials for 1st and 2nd level spell scrolls.', discount: 18 },
        mid: { name: 'Journeyman Pack', icon: '⚔️', desc: 'Quality materials for 3rd and 4th level spells.', discount: 20 },
        high: { name: 'Master\'s Collection', icon: '👑', desc: 'Rare materials for powerful 5th+ level scrolls.', discount: 22 }
    };
    
    Object.entries(levelMaterials).forEach(([tier, materials]) => {
        const materialList = Object.entries(materials);
        if (materialList.length < 2) return;
        
        const info = tierInfo[tier];
        
        const contents = materialList
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([id, qty]) => ({
                id,
                quantity: Math.max(2, Math.ceil(qty / 3))
            }));
        
        if (contents.length < 2) return;
        
        const bundleId = `level_${tier}`;
        bundles[bundleId] = {
            id: bundleId,
            name: info.name,
            icon: info.icon,
            description: info.desc,
            discount: info.discount,
            contents,
            generated: true,
            tier: tier,
            priority: 3
        };
    });
    
    return bundles;
}

function generateFrequentMaterialsBundle(analysis) {
    const { coOccurrence } = analysis;
    
    // Find materials that are frequently used together
    const pairs = Object.entries(coOccurrence)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    if (pairs.length < 2) return null;
    
    // Extract unique materials from top pairs
    const frequentMaterials = new Set();
    pairs.forEach(([pair]) => {
        const [m1, m2] = pair.split('|');
        frequentMaterials.add(m1);
        frequentMaterials.add(m2);
    });
    
    const contents = Array.from(frequentMaterials).slice(0, 6).map(id => ({
        id,
        quantity: 3
    }));
    
    if (contents.length < 3) return null;
    
    return {
        id: 'synergy_pack',
        name: '🔗 Synergy Pack',
        icon: '🔗',
        description: 'Materials that are commonly used together in recipes. Great value for active crafters!',
        discount: 22,
        contents,
        generated: true,
        priority: 2
    };
}

function generateRarityBundles() {
    const bundles = {};
    const rarityGroups = {
        common: [],
        uncommon: [],
        rare: []
    };
    
    // Group materials by rarity
    Object.entries(MATERIALS || {}).forEach(([id, mat]) => {
        if (mat.rarity && rarityGroups[mat.rarity]) {
            rarityGroups[mat.rarity].push(id);
        }
    });
    
    // Common materials bulk pack
    if (rarityGroups.common.length >= 4) {
        bundles['bulk_common'] = {
            id: 'bulk_common',
            name: '📦 Bulk Basics',
            icon: '📦',
            description: 'Stock up on common materials at a great discount!',
            discount: 30,
            contents: rarityGroups.common.slice(0, 6).map(id => ({
                id,
                quantity: 10
            })),
            generated: true,
            priority: 4
        };
    }
    
    // Rare materials sampler
    if (rarityGroups.rare.length >= 2) {
        bundles['rare_sampler'] = {
            id: 'rare_sampler',
            name: '💎 Rare Sampler',
            icon: '💎',
            description: 'A curated selection of rare and exotic materials for advanced crafting.',
            discount: 15,
            contents: rarityGroups.rare.slice(0, 4).map(id => ({
                id,
                quantity: 2
            })),
            generated: true,
            priority: 3
        };
    }
    
    return bundles;
}

// ============================================
// === BUNDLE PRICE CALCULATION ===
// ============================================

function calculateBundlePrice(bundle) {
    if (!bundle || !bundle.contents) {
        return { original: 0, price: 0, savings: 0 };
    }
    
    let originalPrice = 0;
    
    bundle.contents.forEach(item => {
        try {
            const itemPrice = getMaterialXPPrice(item.id, item.quantity);
            originalPrice += itemPrice;
        } catch (e) {
            console.warn(`Failed to get price for ${item.id}`, e);
        }
    });
    
    const discountPercent = bundle.discount || 20;
    const price = Math.floor(originalPrice * (1 - discountPercent / 100));
    
    return {
        original: originalPrice,
        price: price,
        savings: originalPrice - price,
        discount: discountPercent
    };
}

// ============================================
// === GET DYNAMIC BUNDLES (CACHED) ===
// ============================================

let cachedBundles = null;
let bundleCacheTime = 0;
const BUNDLE_CACHE_DURATION = 60000; // 1 minute

function getDynamicBundles() {
    const now = Date.now();
    
    // Return cached if still valid
    if (cachedBundles && (now - bundleCacheTime) < BUNDLE_CACHE_DURATION) {
        return cachedBundles;
    }
    
    // Generate fresh bundles
    cachedBundles = generateDynamicBundles();
    bundleCacheTime = now;
    
    return cachedBundles;
}

// Force refresh bundles
function refreshBundles() {
    cachedBundles = null;
    bundleCacheTime = 0;
    return getDynamicBundles();
}
function clearInventory() {
    playerInventory = {};
    saveCraftingState();
    renderInventory();
    renderRecipeDetail();
    showNotification('Inventory cleared.', 'warning');
    playSound('click.mp3');
}

function renderSkillsPanel() {
    const container = document.getElementById('skills-panel');
    if (!container) return;
    
    const skills = [
        { id: 'scrollScribing', name: 'Scroll Scribing', icon: '📜', level: craftingSkills.scrollScribing, maxLevel: 5 },
        { id: 'alchemy', name: 'Alchemy', icon: '🧪', level: craftingSkills.alchemy, maxLevel: 5 },
        { id: 'enchanting', name: 'Enchanting', icon: '✨', level: craftingSkills.enchanting, maxLevel: 5 },
        { id: 'smithing', name: 'Smithing', icon: '🔨', level: craftingSkills.smithing, maxLevel: 5 }
    ];
    
    container.innerHTML = `
        <div class="skills-panel">
            <h3 class="skills-title">📊 Crafting Skills</h3>
            <div class="skills-list">
                ${skills.map(skill => {
                    const percent = (skill.level / skill.maxLevel) * 100;
                    return `
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-icon">${skill.icon}</span>
                                <span class="skill-name">${skill.name}</span>
                                <span class="skill-level">${skill.level}/${skill.maxLevel}</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="width: ${percent}%"></div>
                            </div>
                            <div class="skill-bonus">
                                +${skill.level * CRAFTING_CONFIG.successPerProficiencyLevel}% success
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// ============================================
// === ANIMATION FUNCTIONS ===
// ============================================

function showSuccessAnimation(project) {
    const overlay = document.createElement('div');
    overlay.className = 'craft-success-overlay';
    overlay.innerHTML = `
        <div class="craft-success-content">
            <div class="success-icon">${project.icon}</div>
            <div class="success-title">CRAFTING SUCCESS!</div>
            <div class="success-item-name">${project.recipeName}</div>
            <div class="success-stats">
                <div class="success-stat">
                    <span class="success-stat-value">${project.successChance}%</span>
                    <span class="success-stat-label">Success Rate</span>
                </div>
                <div class="success-stat">
                    <span class="success-stat-value">${formatCraftTime(project.craftTime)}</span>
                    <span class="success-stat-label">Craft Time</span>
                </div>
            </div>
            <button class="success-close-btn">Collect Item</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    overlay.querySelector('.success-close-btn').addEventListener('click', () => {
        overlay.remove();
        showNotification(`${project.recipeName} added to inventory!`, 'success');
    });
}

function showFailureAnimation(project) {
    const overlay = document.createElement('div');
    overlay.className = 'craft-success-overlay';
    overlay.innerHTML = `
        <div class="craft-failure-content">
            <div class="failure-icon">💥</div>
            <div class="failure-title">CRAFTING FAILED!</div>
            <div class="failure-message">The magical energies destabilized...</div>
            <div class="failure-lost">
                <div class="failure-lost-title">Materials Lost:</div>
                <div class="failure-lost-items">All materials consumed in the attempt.</div>
            </div>
            <button class="success-close-btn" style="background: var(--craft-danger);">Continue</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    overlay.querySelector('.success-close-btn').addEventListener('click', () => {
        overlay.remove();
    });
}

// ============================================
// === TIME UPDATE ===
// ============================================

function startTimeUpdates() {
    setInterval(() => {
        const timeDisplay = document.querySelector('.time-display');
        if (timeDisplay) {
            const timePeriod = getRealTimePeriod();
            timeDisplay.innerHTML = `
                <span class="time-icon">${getTimePeriodIcon(timePeriod)}</span>
                <div class="time-info">
                    <span class="time-current">${formatRealTime()}</span>
                    <span class="time-date">${formatRealDate()}</span>
                </div>
                <span class="time-period ${timePeriod}">${timePeriod.toUpperCase()}</span>
            `;
        }
    }, 60000);
}

// ============================================
// === INITIALIZATION ===
// ============================================
// ============================================
// === SHIPPING STATE ===
// ============================================

let pendingShipments = [];

function loadShipments() {
    try {
        const saved = localStorage.getItem('crafting_shipments');
        if (saved) {
            pendingShipments = JSON.parse(saved);
        }
    } catch (e) {
        console.error('Failed to load shipments:', e);
    }
}

function saveShipments() {
    localStorage.setItem('crafting_shipments', JSON.stringify(pendingShipments));
}

// ============================================
// === SHIPPING FUNCTIONS ===
// ============================================

function getShippingTime(itemCount, hasRare = false) {
    // Base: 1-3 hours depending on item count
    let baseHours = Math.min(1 + Math.floor(itemCount / 5), 3);
    if (hasRare) baseHours += 1; // Rare items take longer
    return baseHours;
}
function createShipment(items, totalCost, type = 'purchase') {
    const itemCount = items.reduce((sum, i) => sum + (i.quantity || 1), 0);
    const hasRare = items.some(i => {
        const m = MATERIALS[i.id] || getMaterialData(i.id);
        return m && (m.rarity === 'rare' || m.rarity === 'exotic' || m.rarity === 'legendary');
    });
    
    const shippingHours = getShippingTime(itemCount, hasRare);
    
    const shipment = {
        id: `order_${Date.now()}`,
        items: items.map(item => ({
            id: item.id,
            quantity: item.quantity,
            name: MATERIALS[item.id]?.name || getMaterialData(item.id).name || item.id,
            icon: MATERIALS[item.id]?.icon || getMaterialData(item.id).icon || '📦'
        })),
        totalCost,
        type,
        createdAt: new Date().toISOString(),
        shippingHours: shippingHours,
        gameOrderDate: getGameDateShort(),
        gameOrderTime: getGameTimeString(),
        estimatedDelivery: getEstimatedDeliveryString(shippingHours),
        status: 'pending_approval',
        collected: false
    };
    
    pendingShipments.push(shipment);
    saveShipments();
    
    return shipment;
}

function collectShipment(shipmentId) {
    const shipment = pendingShipments.find(s => s.id === shipmentId);
    if (!shipment || shipment.status !== 'arrived') return;
    
    // Add items to inventory
    shipment.items.forEach(item => {
        addMaterial(item.id, item.quantity);
    });
    
    shipment.status = 'collected';
    shipment.collected = true;
    shipment.collectedAt = new Date().toISOString();
    
    // Remove from pending after a delay (keep for history)
    setTimeout(() => {
        pendingShipments = pendingShipments.filter(s => s.id !== shipmentId);
        saveShipments();
    }, 1000);
    
    saveShipments();
    saveCraftingState();
    
    const itemCount = shipment.items.reduce((sum, i) => sum + i.quantity, 0);
    showNotification(`📬 Collected ${itemCount} items from shipment!`, 'success');
    
    renderInventory();
    renderShipmentsPanel();
    renderRecipeDetail();
}

function getShipmentTimeRemaining(shipment) {
    const now = new Date();
    const arrival = new Date(shipment.arrivalTime);
    const diffMs = arrival - now;
    
    if (diffMs <= 0) return 'Arrived!';
    
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
}

// ============================================
// === RECEIPT MODAL ===
// ============================================

function showReceipt(shipment) {
    const existingReceipt = document.getElementById('receipt-modal');
    if (existingReceipt) existingReceipt.remove();
    
    const modal = document.createElement('div');
    modal.id = 'receipt-modal';
    modal.className = 'receipt-modal';
    
    const itemCount = shipment.items.reduce((sum, i) => sum + i.quantity, 0);
    const shippingHours = shipment.shippingHours || 1;
    
    modal.innerHTML = `
        <div class="receipt-content">
            <div class="receipt-header">
                <div class="receipt-logo">🏪</div>
                <h2>Arcane Material Shop</h2>
                <p class="receipt-subtitle">Order Confirmation</p>
            </div>
            
            <div class="receipt-divider">═══════════════════════════</div>
            
            <div class="receipt-order-info">
                <div class="receipt-row">
                    <span>Order #:</span>
                    <span>${shipment.id.split('_')[1]}</span>
                </div>
                <div class="receipt-row">
                    <span>Order Date:</span>
                    <span>${shipment.gameOrderDate || getGameDateShort()}</span>
                </div>
                <div class="receipt-row">
                    <span>Order Time:</span>
                    <span>${shipment.gameOrderTime || getGameTimeString()}</span>
                </div>
                <div class="receipt-row">
                    <span>Status:</span>
                    <span class="status-transit">📦 Awaiting Dispatch</span>
                </div>
            </div>
            
            <div class="receipt-divider">───────────────────────────</div>
            
            <div class="receipt-items">
                <h3>Items Ordered (${itemCount}):</h3>
                ${shipment.items.map(item => `
                    <div class="receipt-item-row">
                        <span class="receipt-item-icon">${item.icon}</span>
                        <span class="receipt-item-name">${item.name}</span>
                        <span class="receipt-item-qty">x${item.quantity}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="receipt-divider">───────────────────────────</div>
            
            <div class="receipt-totals">
                <div class="receipt-row total">
                    <span>Total Paid:</span>
                    <span>💎 ${shipment.totalCost.toLocaleString()} XP</span>
                </div>
            </div>
            
            <div class="receipt-divider">═══════════════════════════</div>
            
            <div class="receipt-shipping">
                <div class="shipping-icon">🚚</div>
                <div class="shipping-info">
                    <p class="shipping-title">Estimated Delivery:</p>
                    <p class="shipping-time">${shipment.estimatedDelivery || getEstimatedDeliveryString(shippingHours)}</p>
                    <p class="shipping-eta">(~${shippingHours} hour${shippingHours !== 1 ? 's' : ''} from order)</p>
                </div>
            </div>
            
            <div class="receipt-footer">
                <p>✨ Thank you for your purchase! ✨</p>
                <p class="receipt-note">Items will appear in your inventory when the courier arrives.</p>
                <p class="receipt-note-small">Delivery requires GM approval.</p>
            </div>
            
            <button class="receipt-close-btn" id="close-receipt-btn">
                Close Receipt
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('close-receipt-btn').addEventListener('click', () => {
        modal.classList.add('fade-out');
        setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('fade-out');
            setTimeout(() => modal.remove(), 300);
        }
    });
}
// ============================================
// === UPDATED PURCHASE FUNCTIONS ===
// ============================================

function purchaseCart() {
    const total = getShopCartTotal();
    const available = getAvailableXP();
    
    if (available < total) {
        showNotification('Not enough XP!', 'error');
        return;
    }
    
    if (shopCart.length === 0) {
        showNotification('Cart is empty!', 'error');
        return;
    }
    
    // Spend XP
    spendXP(total);
    
    // Update shop stock
    shopCart.forEach(item => {
        if (MATERIAL_SHOP_STOCK[item.id]) {
            MATERIAL_SHOP_STOCK[item.id].stock -= item.quantity;
        }
    });
    
    // Create shipment instead of instant delivery
    const shipment = createShipment(
        shopCart.map(item => ({ id: item.id, quantity: item.quantity })),
        total,
        'purchase'
    );
    
    // Clear cart
    shopCart = [];
    
    saveCraftingState();
    
    // Close shop and show receipt
    closeMaterialShop();
    showReceipt(shipment);
    
    renderHeader();
    renderShipmentsPanel();
}

function purchaseBundle(bundleId) {
    // Get from dynamic bundles instead of static
    const dynamicBundles = getDynamicBundles();
    const bundle = dynamicBundles[bundleId];
    
    if (!bundle) {
        showNotification('Bundle not found!', 'error');
        return;
    }
    
    const prices = calculateBundlePrice(bundle);
    
    if (!prices || prices.price === 0) {
        showNotification('Bundle price error!', 'error');
        return;
    }
    
    const available = getAvailableXP();
    
    if (available < prices.price) {
        showNotification('Not enough XP!', 'error');
        return;
    }
    
    spendXP(prices.price);
    
    // Create shipment for bundle
    const shipment = createShipment(
        bundle.contents.map(item => ({ id: item.id, quantity: item.quantity })),
        prices.price,
        'bundle'
    );
    
    saveCraftingState();
    
    closeMaterialShop();
    showReceipt(shipment);
    
    showNotification(`Ordered ${bundle.name}! Saved ${prices.savings.toLocaleString()} XP!`, 'success');
    
    renderHeader();
    renderShipmentsPanel();
}
function buyMissingMaterials() {
    if (!selectedRecipe) return;
    
    // ✅ FIX: Create effective materials with substitutions applied
    const effectiveMaterials = selectedRecipe.materials.map(mat => {
        if (mat.isWildcard && activeCatalyst) {
            return { 
                ...mat, 
                id: activeCatalyst.id,
                originalId: mat.id
            };
        }
        return mat;
    });
    
    // Create effective recipe for calculations
    const effectiveRecipe = { ...selectedRecipe, materials: effectiveMaterials };
    
    // Get missing materials using effective recipe
    const missing = getMissingMaterials(effectiveRecipe, playerInventory);
    
    if (missing.length === 0) {
        showNotification('You have all required materials!', 'info');
        return;
    }
    
    const totalCost = missing.reduce((sum, m) => sum + m.cost, 0);
    const available = getAvailableXP();
    
    if (available < totalCost) {
        showNotification(`Not enough XP! Need ${totalCost.toLocaleString()} XP.`, 'error');
        return;
    }
    
    // Check stock availability
    const unavailable = missing.filter(m => {
        const avail = getMaterialAvailability(m.id);
        return !avail.available || avail.stock < m.toBuy;
    });
    
    if (unavailable.length > 0) {
        showNotification(`Some materials are out of stock!`, 'error');
        openMaterialShop();
        return;
    }
    
    // Spend XP
    spendXP(totalCost);
    
    // Reduce stock for each material
    missing.forEach(m => {
        reduceMarketStock(m.id, m.toBuy);
    });
    
    // Create shipment
    const shipment = createShipment(
        missing.map(m => ({ id: m.id, quantity: m.toBuy })),
        totalCost,
        'quick-buy'
    );
    
    saveCraftingState();
    
    showReceipt(shipment);
    
    renderRecipeDetail();
    renderHeader();
    renderShipmentsPanel();
}

// ============================================
// === SHIPMENTS PANEL RENDER ===
// ============================================
function renderShipmentsPanel() {
    let container = document.getElementById('shipments-panel');
    
    if (!container) {
        const inventoryPanel = document.getElementById('materials-inventory');
        if (inventoryPanel && inventoryPanel.parentNode) {
            container = document.createElement('div');
            container.id = 'shipments-panel';
            inventoryPanel.parentNode.insertBefore(container, inventoryPanel.nextSibling);
        } else {
            return;
        }
    }
    
    const activeShipments = pendingShipments.filter(s => s.status !== 'collected');
    
    if (activeShipments.length === 0) {
        container.innerHTML = '';
        return;
    }
    
    container.innerHTML = `
        <div class="shipments-panel">
            <div class="shipments-header">
                <span class="shipments-title">📦 Order History</span>
                <span class="shipments-count">${activeShipments.length}</span>
            </div>
            
            <div class="shipments-list">
                ${activeShipments.map(shipment => {
                    const isReady = shipment.status === 'delivered';
                    const itemCount = shipment.items.reduce((sum, i) => sum + i.quantity, 0);
                    
                    return `
                        <div class="shipment-card ${isReady ? 'arrived' : 'pending-gm'}">
                            <div class="shipment-header">
                                <span class="shipment-icon">${isReady ? '📬' : '🕒'}</span>
                                <div class="shipment-info">
                                    <span class="shipment-id">Order #${shipment.id.split('_')[1]}</span>
                                    <span class="shipment-items">${itemCount} item${itemCount > 1 ? 's' : ''}</span>
                                </div>
                                <span class="shipment-status ${isReady ? 'ready' : 'waiting'}">
                                    ${isReady ? '✨ Delivered!' : 'Processing...'}
                                </span>
                            </div>
                            
                            <div class="shipment-preview">
                                ${shipment.items.slice(0, 4).map(item => `
                                    <span class="preview-item" title="${item.name} x${item.quantity}">
                                        ${item.icon}
                                    </span>
                                `).join('')}
                            </div>
                            
                            ${isReady ? `
                                <button class="collect-shipment-btn" data-shipment-id="${shipment.id}">
                                    📬 Open Package
                                </button>
                            ` : `
                                <div class="shipment-note">
                                    <small>Awaiting Courier Dispatch (GM)</small>
                                </div>
                            `}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    container.querySelectorAll('.collect-shipment-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            collectShipment(btn.dataset.shipmentId);
        });
    });
}
function cancelShipment(shipmentId) {
    const shipment = pendingShipments.find(s => s.id === shipmentId);
    if (!shipment) return;
    
    if (shipment.status === 'arrived') {
        showNotification('Cannot cancel - shipment already arrived!', 'error');
        return;
    }
    
    if (!confirm(`Cancel this order and refund ${shipment.totalCost.toLocaleString()} XP?`)) {
        return;
    }
    
    if (refundShipmentXP(shipmentId)) {
        showNotification(`Order cancelled. ${shipment.totalCost.toLocaleString()} XP refunded!`, 'success');
        renderShipmentsPanel();
        renderHeader();
    }
}

function getShipmentProgress(shipment) {
    const created = new Date(shipment.createdAt);
    const arrival = new Date(shipment.arrivalTime);
    const now = new Date();
    
    const totalTime = arrival - created;
    const elapsed = now - created;
    
    return Math.min(100, Math.max(0, (elapsed / totalTime) * 100));
}

// ============================================
// === UPDATED MATERIAL SHOP RENDER ===
// ============================================
// ============================================
// === FIXED MATERIAL SHOP RENDER ===
// ============================================
function getDailyWildcardId(recipeId) {
    const today = new Date().toDateString(); // e.g. "Mon Oct 02 2023"
    const seedString = recipeId + today;
    
    // Simple hash to get a number from the string
    let hash = 0;
    for (let i = 0; i < seedString.length; i++) {
        hash = seedString.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);

    // Get all possible material keys
    const allMaterials = Object.keys(MATERIALS);
    
    // Pick one
    const index = hash % allMaterials.length;
    return allMaterials[index];
}

// 2. Wrapper to get a recipe with the Wildcard added
export function getRecipeWithWildcard(recipe) {
    if (!recipe) return null;

    // Create a SAFE copy of the recipe and materials array
    // (So we don't permanently add items to the original object)
    const dynamicRecipe = {
        ...recipe,
        materials: [...(recipe.materials || [])]
    };

    // If the recipe has the 'wildcard' flag
    if (recipe.wildcard) {
        const wildcardId = getDailyWildcardId(recipe.id);
        
        dynamicRecipe.materials.push({
            id: wildcardId,
            quantity: 1,
            isWildcard: true, // Flag for UI styling
            wildcardLabel: recipe.wildcardLabel || "Catalyst" // Custom label
        });
    }

    return dynamicRecipe;
}
function renderMaterialShop() {
    let modal = document.getElementById('material-shop-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'material-shop-modal';
        modal.className = 'shop-modal';
        document.body.appendChild(modal);
    }
    
    if (!shopOpen) {
        modal.style.display = 'none';
        return;
    }
    
    modal.style.display = 'flex';
    
    // Safety check for XP status
    let xpStatus;
    try {
        xpStatus = getPlayerXPStatus();
    } catch(e) {
        xpStatus = { available: 0 };
    }

    const cartTotal = getShopCartTotal();
    const cartCount = getShopCartItemCount();
    
    // Get materials by category
    const categories = ['common', 'uncommon', 'rare'];
    const allMaterials = Object.entries(MATERIALS).map(([id, mat]) => ({
        ...mat,
        id,
        availability: getMaterialAvailability(id),
        xpPrice: getMaterialXPPrice(id, 1)
    }));
    
    const filteredMaterials = shopCategory === 'all' 
        ? allMaterials 
        : allMaterials.filter(m => m.rarity === shopCategory);
    
    const searchFiltered = shopSearch 
        ? filteredMaterials.filter(m => 
            m.name.toLowerCase().includes(shopSearch.toLowerCase()) ||
            m.description?.toLowerCase().includes(shopSearch.toLowerCase())
          )
        : filteredMaterials;
    
    // --- FIX: Safely calculate Bundle Prices ---
    const dynamicBundles = getDynamicBundles();
    
    const bundleEntries = Object.entries(dynamicBundles).map(([id, bundle]) => {
        // 1. Try calculation
        let prices = calculateBundlePrice(bundle);

        // 2. Fallback calculation if function returned bad data
        if (!prices || typeof prices.original === 'undefined' || typeof prices.price === 'undefined') {
            let originalPrice = 0;
            if (bundle.contents) {
                bundle.contents.forEach(item => {
                    // Safe access to material price
                    try {
                        originalPrice += getMaterialXPPrice(item.id, item.quantity);
                    } catch (err) { originalPrice += 0; }
                });
            }
            const discountPercent = bundle.discount || 20;
            const price = Math.floor(originalPrice * (1 - discountPercent / 100));
            
            prices = {
                original: originalPrice,
                price: price,
                savings: originalPrice - price,
                discount: discountPercent
            };
        }

        return { id, bundle, prices };
    })
    .filter(b => b.prices.price > 0 && b.bundle.contents.length >= 2)
    .sort((a, b) => (a.bundle.priority || 99) - (b.bundle.priority || 99));

    
    // Render Modal
    modal.innerHTML = `
        <div class="shop-modal-content">
            <div class="shop-header">
                <div class="shop-title-row">
                    <span class="shop-icon">🏪</span>
                    <h2>Arcane Material Shop</h2>
                </div>
                <button class="shop-close-btn" id="close-shop-btn">✕</button>
            </div>
            
            <div class="shop-xp-bar">
                <span class="xp-label">💎 Available XP:</span>
                <span class="xp-value">${(xpStatus.available || 0).toLocaleString()}</span>
                ${cartTotal > 0 ? `
                    <span class="xp-after">→ ${((xpStatus.available || 0) - cartTotal).toLocaleString()} after purchase</span>
                ` : ''}
            </div>
            
            <div class="shop-shipping-notice">
                <span class="shipping-notice-icon">🚚</span>
                <span>All orders require shipping time based on item rarity.</span>
            </div>
            
            <div class="shop-controls">
                <div class="shop-categories">
                    <button class="shop-cat-btn ${shopCategory === 'all' ? 'active' : ''}" data-cat="all">All</button>
                    ${categories.map(cat => `
                        <button class="shop-cat-btn ${shopCategory === cat ? 'active' : ''}" data-cat="${cat}">
                            ${cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    `).join('')}
                </div>
                <div class="shop-search">
                    <input type="text" 
                           id="shop-search-input" 
                           placeholder="Search materials..." 
                           value="${shopSearch}">
                </div>
            </div>
            
            <div class="shop-body">
                <div class="shop-materials-grid">
                    ${searchFiltered.length === 0 ? `
                        <div class="shop-empty">
                            <span>📭</span>
                            <p>No materials found</p>
                        </div>
                    ` : searchFiltered.map(mat => {
                        const inCart = shopCart.find(c => c.id === mat.id);
                        const cartQty = inCart?.quantity || 0;
                        const canBuy = mat.availability.available && xpStatus.available >= mat.xpPrice;
                        
                        return `
<div class="shop-material-card ${mat.rarity} ${!mat.availability.available ? 'out-of-stock' : ''} ${mat.generated ? 'generated' : ''}">
    <div class="shop-mat-header">
        <span class="shop-mat-icon">${mat.icon}</span>
        <div class="shop-mat-info">
            <span class="shop-mat-name">${mat.name}</span>
            <div class="shop-mat-tags">
                <span class="shop-mat-rarity ${mat.rarity}">${mat.rarity}</span>
                ${mat.generated ? '<span class="shop-mat-generated"></span>' : ''}
            </div>
        </div>
    </div>
                                <p class="shop-mat-desc">${mat.description || 'A crafting material.'}</p>
                                <div class="shop-mat-footer">
                                    <div class="shop-mat-price">
                                        <span class="price-xp">💎 ${mat.xpPrice.toLocaleString()}</span>
                                        <span class="price-stock">
                                            📦 ${mat.availability.stock} in stock
                                        </span>
                                    </div>
                                    <div class="shop-mat-actions">
                                        ${cartQty > 0 ? `
                                            <div class="cart-qty-controls">
                                                <button class="qty-btn minus" data-id="${mat.id}">-</button>
                                                <span class="qty-display">${cartQty}</span>
                                                <button class="qty-btn plus" data-id="${mat.id}" 
                                                        ${cartQty >= mat.availability.stock ? 'disabled' : ''}>+</button>
                                            </div>
                                        ` : `
                                            <button class="add-to-cart-btn" 
                                                    data-id="${mat.id}"
                                                    ${!canBuy ? 'disabled' : ''}>
                                                ${!mat.availability.available ? 'Out of Stock' : 
                                                  xpStatus.available < mat.xpPrice ? 'Not Enough XP' : 
                                                  '+ Add'}
                                            </button>
                                        `}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="shop-cart-panel">
                    <h3 class="cart-title">🛒 Cart (${cartCount} items)</h3>
                    ${shopCart.length === 0 ? `
                        <div class="cart-empty">
                            <span>🛒</span>
                            <p>Cart is empty</p>
                        </div>
                    ` : `
                        <div class="cart-items">
                            ${shopCart.map(item => `
                                <div class="cart-item">
                                    <span class="cart-item-icon">${item.material.icon}</span>
                                    <span class="cart-item-name">${item.material.name}</span>
                                    <span class="cart-item-qty">x${item.quantity}</span>
                                    <span class="cart-item-price">${getMaterialXPPrice(item.id, item.quantity).toLocaleString()} XP</span>
                                    <button class="cart-remove-btn" data-id="${item.id}">✕</button>
                                </div>
                            `).join('')}
                        </div>
                        <div class="cart-total">
                            <span>Total:</span>
                            <span class="cart-total-value">💎 ${cartTotal.toLocaleString()} XP</span>
                        </div>
                        <div class="cart-shipping-estimate">
                            <span>🚚 Est. delivery: ~${getShippingTime(cartCount, shopCart.some(i => {
                                const m = MATERIALS[i.id];
                                return m && (m.rarity === 'rare' || m.rarity === 'exotic');
                            }))} hours</span>
                        </div>
                        <button class="cart-purchase-btn" 
                                id="purchase-cart-btn"
                                ${xpStatus.available < cartTotal ? 'disabled' : ''}>
                            ${xpStatus.available < cartTotal ? 'Not Enough XP' : '💰 Place Order'}
                        </button>
                    `}
                </div>
            </div>
            
            ${bundleEntries.length > 0 ? `
                <div class="shop-bundles">
                    <h3>📦 Smart Bundles <span class="bundle-auto-tag">Auto-Generated</span></h3>
                    <p class="bundles-subtitle">Bundles are dynamically created based on recipe patterns!</p>
                    <div class="bundles-grid">
                        ${bundleEntries.map(({ id, bundle, prices }) => {
                            const canAfford = xpStatus.available >= prices.price;
                            
                            return `
                                <div class="bundle-card ${bundle.school ? 'school-' + bundle.school.toLowerCase() : ''}">
                                    <div class="bundle-header">
                                        <span class="bundle-icon">${bundle.icon}</span>
                                        <span class="bundle-name">${bundle.name}</span>
                                        ${bundle.generated ? '<span class="auto-badge">AUTO</span>' : ''}
                                    </div>
                                    <p class="bundle-desc">${bundle.description}</p>
                                    <div class="bundle-contents">
                                        ${bundle.contents.slice(0, 4).map(item => {
                                            const mat = MATERIALS[item.id];
                                            return `
                                                <span class="bundle-item" title="${mat?.name || item.id}">
                                                    ${mat?.icon || '?'} x${item.quantity}
                                                </span>
                                            `;
                                        }).join('')}
                                        ${bundle.contents.length > 4 ? `
                                            <span class="bundle-more">+${bundle.contents.length - 4} more</span>
                                        ` : ''}
                                    </div>
                                    <div class="bundle-price">
                                        <span class="bundle-original">${prices.original.toLocaleString()} XP</span>
                                        <span class="bundle-sale">💎 ${prices.price.toLocaleString()} XP</span>
                                        <span class="bundle-savings">-${prices.discount}%</span>
                                    </div>
                                    <button class="bundle-buy-btn" 
                                            data-bundle="${id}"
                                            ${!canAfford ? 'disabled' : ''}>
                                        ${canAfford ? '🛒 Buy Bundle' : 'Not Enough XP'}
                                    </button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;

    // Re-attach event listeners...
    // Close button
    document.getElementById('close-shop-btn')?.addEventListener('click', closeMaterialShop);
    
    // Category buttons
    modal.querySelectorAll('.shop-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            shopCategory = btn.dataset.cat;
            renderMaterialShop();
        });
    });
    
    // Search input
    document.getElementById('shop-search-input')?.addEventListener('input', (e) => {
        shopSearch = e.target.value;
        renderMaterialShop();
    });
    
    // Add to cart buttons
    modal.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            addToShopCart(btn.dataset.id, 1);
            playSound('click.mp3');
        });
    });
    
    // Quantity +
    modal.querySelectorAll('.qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = shopCart.find(c => c.id === btn.dataset.id);
            if (item) {
                updateCartQuantity(btn.dataset.id, item.quantity + 1);
                playSound('click.mp3');
            }
        });
    });
    
    // Quantity -
    modal.querySelectorAll('.qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = shopCart.find(c => c.id === btn.dataset.id);
            if (item) {
                updateCartQuantity(btn.dataset.id, item.quantity - 1);
                playSound('click.mp3');
            }
        });
    });
    
    // Remove from cart
    modal.querySelectorAll('.cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            removeFromShopCart(btn.dataset.id);
            playSound('click.mp3');
        });
    });
    
    // Purchase Cart
    document.getElementById('purchase-cart-btn')?.addEventListener('click', () => {
        purchaseCart();
        playSound('purchase.mp3');
    });
    
    // Buy Bundle
    modal.querySelectorAll('.bundle-buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            purchaseBundle(btn.dataset.bundle);
            playSound('purchase.mp3');
        });
    });
    
    // Close on backdrop click
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeMaterialShop();
        }
    };
}
// ============================================
// === UPDATED INIT ===
// ============================================
function init() {
    console.log('⚗️ Initializing Arcane Workshop...');
    
    try {
        loadCraftingState();
        loadShipments();
        ensureAllRecipeMaterialsInShop();
        
        // Render in order, with safety checks
        const header = document.getElementById('crafting-header');
        if (header) renderHeader();
        
        const tabs = document.getElementById('category-tabs');
        if (tabs) renderCategoryTabs();
        
        const recipes = document.getElementById('recipes-list');
        if (recipes) renderRecipes();
        
        const detail = document.getElementById('recipe-detail');
        if (detail) renderRecipeDetail();
        
        const queue = document.getElementById('crafting-queue');
        if (queue) renderCraftingQueue();
        
        const inventory = document.getElementById('materials-inventory');
        if (inventory) {
            renderInventory();
            renderShipmentsPanel();
        }
        
        const skills = document.getElementById('skills-panel');
        if (skills) renderSkillsPanel();
        
        startTimeUpdates();
        

        
        // Process crafting queue every 6 seconds
        setInterval(() => {
            let updated = false;
            craftingQueue.forEach((project, index) => {
                if (index === 0 && project.remainingTime > 0) {
                    project.remainingTime = Math.max(0, project.remainingTime - 0.1);
                    updated = true;
                }
            });
            if (updated) {
                saveCraftingState();
                renderCraftingQueue();
            }
        }, 6000);
        
        // Hide loading screen if exists
        const loading = document.getElementById('loading-screen');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => loading.remove(), 300);
        }
        
        console.log('✅ Arcane Workshop initialized');
        console.log('💎 XP Status:', getPlayerXPStatus());
        console.log('🕐 Time Period:', getRealTimePeriod());
        console.log('📦 Pending Shipments:', pendingShipments.length);
        
    } catch (error) {
        console.error('❌ Failed to initialize Arcane Workshop:', error);
        
        // Show error state
        const main = document.querySelector('main') || document.body;
        main.innerHTML = `
            <div class="init-error">
                <h2>⚠️ Failed to Load</h2>
                <p>Error: ${error.message}</p>
                <button onclick="location.reload()">🔄 Retry</button>
            </div>
        `;
    }
}

window.resetSpentXP = function() {
    // 1. Reset the LocalStorage key
    localStorage.setItem('crafting_xp_spent', '0');
    
    // 2. Re-calculate status
    const status = getPlayerXPStatus();
    
    // 3. Update UI
    renderHeader();
    if (typeof renderMaterialShop === 'function' && shopOpen) {
        renderMaterialShop();
    }
    
    // 4. Log result
    console.log('%c ✨ XP SPENT RESET TO 0', 'color: #00ff00; font-weight: bold; font-size: 14px;');
    console.log(`💎 Total Earned: ${status.total}`);
    console.log(`💎 Available:    ${status.available}`);
    
    return "Done";
};

window.hardResetCrafting = function() {
    if(!confirm("⚠️ WARNING: This will wipe ALL crafting progress, inventory, and XP history. Continue?")) return;
    
    localStorage.removeItem('crafting_state');
    localStorage.removeItem('crafting_xp_spent');
    localStorage.removeItem('crafting_shipments');
    
    location.reload();
};
// Make sure DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
// ============================================
// === SOUND FUNCTION ===
// ============================================

function playSound(soundFile) {
    try {
        const audio = new Audio(`./sounds/${soundFile}`);
        audio.volume = 0.3;
        audio.play().catch(e => {
            // Silently fail if sound can't play (no user interaction yet, etc.)
            console.log('Sound play failed:', e.message);
        });
    } catch (e) {
        console.log('Sound not available:', soundFile);
    }
    return;
}

// ============================================
// === MATERIAL SHOP RENDER ===
// ============================================

// Export for external use
export {
    startCrafting,
    addMaterial,
    getInventoryCount,
    craftingQueue,
    openMaterialShop
};