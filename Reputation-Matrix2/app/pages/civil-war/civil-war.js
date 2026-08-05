// =============================================
// MUSHROOM KINGDOM CIVIL WAR - STRATEGIC COMMAND
// War Room Style Interface
// =============================================

import { state, loadState } from '../../../state.js';
import { getIntelBreakdown } from '../../../systems/common.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from '../../../data/world/calendar.js';

// =============================================
// DYNAMIC DATA INTEGRATION
// =============================================
import { getRealTimeMapStats, getDetailedFactionStats, getDetailedRegionStats } from '../../../global-map-analysis.js';
import { getAllFactions, getFaction, toSystemId } from '../../../systems/faction-registry.js';

// =============================================
// DYNAMIC FACTION MAPPING
// Maps WAR_DATA faction IDs to system registry IDs
// =============================================

const FACTION_SYSTEM_MAP = {
    'loyalists': ['peach_loyalists', 'loyalists', 'peach-loyalists', 'loyalist'],
    'regency': ['mushroom_regency', 'regency', 'mushroom_kingdom', 'mushroom-kingdom', 'toad_town'],
    'fawful': ['fawful', 'fawful_forces', 'fawfuls_dominion', 'fawful_dominion'],
    'legion': ['iron_legion', 'legion', 'regal_empire', 'regal-empire', 'iron-legion'],
    'koopa': ['koopa_troop', 'koopa', 'bowser', 'dark_lands', 'koopa-troop', 'dark-lands']
};

// =============================================
// DYNAMIC STATS LOADER
// =============================================

class DynamicWarStats {
    constructor() {
        this.cachedStats = null;
        this.cacheTime = 0;
        this.cacheDuration = 10000; // 10 second cache
    }

    /**
     * Get fresh stats from the map analysis system
     */
    getGlobalStats() {
        const now = Date.now();
        
        if (this.cachedStats && (now - this.cacheTime) < this.cacheDuration) {
            return this.cachedStats;
        }

        try {
            if (typeof getRealTimeMapStats === 'function') {
                this.cachedStats = getRealTimeMapStats();
                this.cacheTime = now;
                return this.cachedStats;
            }
        } catch (e) {
            console.warn('[DynamicWarStats] Failed to get real-time stats:', e);
        }

        return { global: {}, regions: [] };
    }

    /**
     * Get stats for a specific faction using multiple possible keys
     */
    getFactionStats(warDataId) {
        const stats = this.getGlobalStats();
        const possibleKeys = FACTION_SYSTEM_MAP[warDataId] || [warDataId];
        
        for (const key of possibleKeys) {
            // Try direct match
            if (stats.global[key]) {
                return stats.global[key];
            }
            
            // Try with toSystemId conversion
            const sysId = toSystemId ? toSystemId(key) : key;
            if (stats.global[sysId]) {
                return stats.global[sysId];
            }
        }

        // Return empty stats if not found
        return {
            military: 0,
            economic: 0,
            political: 0,
            population: 0,
            poiCount: 0,
            activeRegions: 0,
            controlledRegions: 0
        };
    }

    /**
     * Get detailed faction stats including POI list
     */
    getDetailedFactionStats(warDataId) {
        const possibleKeys = FACTION_SYSTEM_MAP[warDataId] || [warDataId];
        
        for (const key of possibleKeys) {
            try {
                const sysId = toSystemId ? toSystemId(key) : key;
                const detailed = getDetailedFactionStats(sysId);
                if (detailed && (detailed.poiCount > 0 || detailed.military > 0)) {
                    return detailed;
                }
            } catch (e) {
                continue;
            }
        }

        return {
            military: 0,
            economic: 0,
            political: 0,
            population: 0,
            poiCount: 0,
            activeRegions: 0,
            controlledRegions: 0,
            regions: [],
            pois: []
        };
    }

    /**
     * Get all faction power levels for comparison charts
     */
    getAllFactionPower() {
        const stats = this.getGlobalStats();
        const result = {};

        Object.entries(FACTION_SYSTEM_MAP).forEach(([warDataId, systemKeys]) => {
            for (const key of systemKeys) {
                const sysId = toSystemId ? toSystemId(key) : key;
                if (stats.global[sysId]) {
                    result[warDataId] = stats.global[sysId];
                    break;
                }
            }
            
            // Ensure every faction has stats (even if empty)
            if (!result[warDataId]) {
                result[warDataId] = {
                    military: 0,
                    economic: 0,
                    political: 0,
                    population: 0,
                    poiCount: 0,
                    activeRegions: 0
                };
            }
        });

        return result;
    }

    /**
     * Calculate dynamic victory odds based on real faction power
     */
    calculateVictoryOdds() {
        const factionPower = this.getAllFactionPower();
        
        // Calculate total power for each faction
        const powerScores = {};
        let totalPower = 0;

        Object.entries(factionPower).forEach(([id, stats]) => {
            // Weight different stats for victory likelihood
            const score = (stats.military * 2) + 
                         (stats.economic * 1.5) + 
                         (stats.political * 1) +
                         (stats.activeRegions * 5) +
                         (stats.poiCount * 0.5);
            powerScores[id] = score;
            totalPower += score;
        });

        // Add stalemate possibility
        const stalemateScore = totalPower * 0.1;
        totalPower += stalemateScore;
        powerScores['stalemate'] = stalemateScore;

        // Convert to percentages
        const odds = [];
        const factionMeta = {
            'loyalists': { name: 'Peach Loyalists', icon: '🌸', baseTrend: 12 },
            'koopa': { name: 'Koopa Troop', icon: '🐢', baseTrend: -5 },
            'legion': { name: 'Iron Legion', icon: '⚔️', baseTrend: 3 },
            'regency': { name: 'Mushroom Regency', icon: '🍄', baseTrend: -15 },
            'fawful': { name: 'Fawful\'s Dominion', icon: '😈', baseTrend: -8 },
            'stalemate': { name: 'Prolonged Stalemate', icon: '⚠️', baseTrend: 0 }
        };

        Object.entries(powerScores).forEach(([id, score]) => {
            const percent = totalPower > 0 ? Math.round((score / totalPower) * 100) : 0;
            const meta = factionMeta[id] || { name: id, icon: '?', baseTrend: 0 };
            
            odds.push({
                id,
                faction: meta.name,
                icon: meta.icon,
                chance: Math.max(1, Math.min(50, percent)), // Clamp between 1-50%
                trend: meta.baseTrend > 0 ? `+${meta.baseTrend}%` : 
                       meta.baseTrend < 0 ? `${meta.baseTrend}%` : '0%',
                rawPower: score
            });
        });

        // Sort by chance descending
        odds.sort((a, b) => b.chance - a.chance);

        return odds;
    }

    /**
     * Determine current frontrunner based on real data
     */
    getFrontrunner() {
        const odds = this.calculateVictoryOdds();
        const leader = odds.find(o => o.id !== 'stalemate') || odds[0];
        
        return {
            id: leader.id,
            name: leader.faction,
            icon: leader.icon,
            confidence: leader.chance + 25, // Boost confidence display
            chance: leader.chance
        };
    }

    /**
     * Clear the cache to force refresh
     */
    clearCache() {
        this.cachedStats = null;
        this.cacheTime = 0;
    }
}

// Create singleton instance
const dynamicStats = new DynamicWarStats();

// =============================================
// DATA GENERATORS
// =============================================

function generateDynamicFactions() {
    const baseFactions = [
        {
            id: 'loyalists',
            name: 'Peach Loyalists',
            shortName: 'LOYALISTS',
            icon: '🌸',
            color: '#E91E63',
            leader: 'Captain Toadette',
            hq: 'Toad Town (Captured)',
            summary: 'Fanatical avengers seeking the truth about Peach\'s assassination.',
            strengths: ['Ideological fervor', 'Recent victories', 'Rakasha alliance', 'Hold the capital'],
            weaknesses: ['War crimes liability', 'No legal authority', 'No heir to champion'],
            intel: 10,
            recentActions: [
                { date: '1040-06-21', action: 'Sealed Rakasha alliance' },
                { date: '1040-06-17', action: 'Bramblehaven massacre' },
                { date: '1040-06-12', action: 'Seized Toad Town' }
            ]
        },
        {
            id: 'regency',
            name: 'Mushroom Regency',
            shortName: 'REGENCY',
            icon: '🍄',
            color: '#E53935',
            leader: 'Chancellor Toadsworth (CAPTURED)',
            hq: 'Government in Exile',
            summary: 'The "legitimate" government that has ruled for 85 years without finding an heir.',
            strengths: ['International recognition', 'Bureaucratic infrastructure'],
            weaknesses: ['Leader captured', 'Lost the capital', 'Credibility destroyed'],
            intel: 15,
            recentActions: [
                { date: '1040-06-12', action: 'Lost Toad Town' },
                { date: '1040-06-12', action: 'Toadsworth captured' }
            ]
        },
        {
            id: 'fawful',
            name: 'Fawful\'s Dominion',
            shortName: 'FAWFUL',
            icon: '😈',
            color: '#7B1FA2',
            leader: 'Lord Fawful',
            hq: 'Peach\'s Castle',
            summary: 'Mad usurper holding the royal castle. Universally hated but potentially holding key evidence.',
            strengths: ['Controls the castle', 'Tech superiority', 'May have assassination evidence'],
            weaknesses: ['No allies', 'Universally despised', 'Overextended'],
            intel: 15,
            recentActions: [
                { date: '1040-06-17', action: 'Lost Bramblehaven' },
                { date: '1040-05-01', action: 'Seized Peach\'s Castle' }
            ]
        },
        {
            id: 'legion',
            name: 'Iron Legion',
            shortName: 'LEGION',
            icon: '⚔️',
            color: '#757575',
            leader: 'General Marcus Ironhand',
            hq: 'Iron Citadel (External)',
            summary: 'Anti-magic crusaders enforcing the Iron Mandate. Foreign intervention force.',
            strengths: ['Superior military', 'Anti-magic tech', 'External resources'],
            weaknesses: ['Foreign invaders', 'Ideology creates enemies', 'Overextended'],
            intel: 25,
            recentActions: [
                { date: '1040-06-21', action: 'Iron Mandate enacted' },
                { date: '1040-06-14', action: 'Captured the Vigilance' }
            ]
        },
        {
            id: 'koopa',
            name: 'Koopa Troop',
            shortName: 'KOOPA',
            icon: '🐢',
            color: '#2E7D32',
            leader: 'King Bowser (INCAPACITATED)',
            hq: 'Valley of Bowser',
            summary: 'The eternal enemy - but possibly innocent of the assassination. Waiting for their moment.',
            strengths: ['Massive army', 'Airship fleet', 'Magical resources', 'Patient strategy'],
            weaknesses: ['King incapacitated', 'Succession crisis', 'Iron Mandate threat'],
            intel: 20,
            recentActions: [
                { date: '1040-06-20', action: 'Protocol Omega activated' },
                { date: '1040-06-18', action: 'Kamek assumes regency' }
            ]
        }
    ];

    // Enhance with dynamic stats
    return baseFactions.map(faction => {
        const stats = dynamicStats.getFactionStats(faction.id);
        const detailed = dynamicStats.getDetailedFactionStats(faction.id);
        
        // Calculate status based on power trends
        let status = 'STABLE';
        let trend = 'HOLDING';
        
        if (stats.military > 50 || stats.activeRegions > 3) {
            status = 'STRONG';
            trend = 'ASCENDING';
        } else if (stats.military < 20 && stats.activeRegions < 2) {
            status = 'CRITICAL';
            trend = 'DECLINING';
        }

        // Faction-specific overrides based on lore defaults if stats are empty
        if (stats.military === 0 && stats.activeRegions === 0) {
            if (faction.id === 'loyalists') { status = 'DOMINANT'; trend = 'ASCENDING'; }
            if (faction.id === 'regency') { status = 'CRITICAL'; trend = 'COLLAPSING'; }
            if (faction.id === 'fawful') { status = 'PRESSURED'; trend = 'DECLINING'; }
            if (faction.id === 'legion') { status = 'AGGRESSIVE'; trend = 'EXPANDING'; }
            if (faction.id === 'koopa') { status = 'REORGANIZING'; trend = 'HOLDING'; }
        }

        return {
            ...faction,
            status,
            trend,
            power: {
                territory: Math.min(100, (stats.activeRegions || 0) * 10),
                military: Math.min(100, stats.military || 0),
                political: Math.min(100, stats.political || 0)
            },
            stats: {
                military: stats.military || 0,
                economic: stats.economic || 0,
                political: stats.political || 0,
                population: stats.population || 0,
                poiCount: stats.poiCount || 0,
                activeRegions: stats.activeRegions || 0
            },
            detailedStats: detailed
        };
    });
}

function generateDynamicTerritories() {
    const stats = dynamicStats.getGlobalStats();
    
    // Fallback to static data if no regions found
    if (!stats.regions || stats.regions.length === 0) {
        return [
            { id: 'toad_town', name: 'Toad Town', type: 'Capital', controller: 'loyalists', value: 10, icon: '🏛️' },
            { id: 'castle', name: 'Peach\'s Castle', type: 'Royal Seat', controller: 'fawful', value: 8, icon: '🏰' },
            { id: 'bramble', name: 'Bramblehaven', type: 'Fortress', controller: 'loyalists', value: 6, icon: '🏴' },
            { id: 'grass', name: 'Grass Land', type: 'Agricultural', controller: 'contested', value: 5, icon: '🌾' },
            { id: 'desert', name: 'Desert Land', type: 'Strategic', controller: 'koopa', value: 4, icon: '🏜️' },
            { id: 'water', name: 'Water Land', type: 'Naval', controller: 'koopa', value: 6, icon: '🌊' },
            { id: 'sky', name: 'Sky Land', type: 'Aerial', controller: 'contested', value: 7, icon: '☁️' },
            { id: 'ice', name: 'Ice Land', type: 'Neutral', controller: 'koopa', value: 2, icon: '❄️' },
            { id: 'dark', name: 'Dark Land', type: 'Enemy Core', controller: 'koopa', value: 9, icon: '🌑' },
            { id: 'rogueport', name: 'Rogueport', type: 'Criminal', controller: 'neutral', value: 4, icon: '⚓' }
        ];
    }

    return stats.regions.map(region => {
        // Map controller to WAR_DATA faction ID
        let controller = region.controller || 'neutral';
        
        for (const [wdId, sysKeys] of Object.entries(FACTION_SYSTEM_MAP)) {
            if (sysKeys.includes(controller)) {
                controller = wdId;
                break;
            }
        }

        // Determine icon based on region name
        let icon = '🌍';
        const nameLower = region.name.toLowerCase();
        if (nameLower.includes('castle')) icon = '🏰';
        else if (nameLower.includes('town')) icon = '🏛️';
        else if (nameLower.includes('desert')) icon = '🏜️';
        else if (nameLower.includes('water') || nameLower.includes('sea')) icon = '🌊';
        else if (nameLower.includes('sky') || nameLower.includes('cloud')) icon = '☁️';
        else if (nameLower.includes('ice') || nameLower.includes('snow')) icon = '❄️';
        else if (nameLower.includes('dark') || nameLower.includes('shadow')) icon = '🌑';
        else if (nameLower.includes('forest') || nameLower.includes('wood')) icon = '🌲';
        else if (nameLower.includes('grass') || nameLower.includes('plain')) icon = '🌾';
        else if (nameLower.includes('port') || nameLower.includes('harbor')) icon = '⚓';
        else if (nameLower.includes('mountain') || nameLower.includes('peak')) icon = '⛰️';
        else if (nameLower.includes('fortress') || nameLower.includes('fort')) icon = '🏴';

        return {
            id: region.id,
            name: region.name,
            type: region.type || 'Region',
            controller: controller,
            value: Math.round((region.militarySum + region.economicSum) / 10) || 1,
            icon: icon,
            isContested: region.isContested || false,
            stats: {
                military: region.militarySum || 0,
                economic: region.economicSum || 0,
                political: region.politicalSum || 0,
                population: region.populationSum || 0,
                poiCount: region.poiCount || 0
            }
        };
    }).sort((a, b) => b.value - a.value);
}

// =============================================
// CIVIL WAR DATA REPOSITORY (HYBRID)
// =============================================


const WAR_DATA = {
    meta: {
        codename: 'OPERATION: CROWN FRACTURE',
        classification: 'EYES ONLY - LEVEL 5 CLEARANCE',
        lastUpdate: CURRENT_GAME_DATE,
        analyst: 'STRATEGIC COMMAND / ARCHIVIST INKWELL',
        warDuration: 85,
        status: 'ACTIVE MULTI-FRONT CONFLICT / CONSTITUTIONAL CRISIS'
    },

    // The murdered princess - central to everything
    victim: {
        name: 'Princess Peach Toadstool',
        title: 'Crown Princess of the Mushroom Kingdom',
        born: 915,
        died: 955,
        icon: '👸',
        status: 'ASSASSINATED',
        lastKnownLocation: 'Royal Chambers, Peach\'s Castle',
        causeOfDeath: 'CLASSIFIED - MULTIPLE TRAUMA',
        
        profile: `The last direct heir of the Toadstool main line. Historically portrayed as a benevolent but passive figure prone to kidnapping.`,
        
        secrets: [
            { intel: 10, text: 'Died in her chambers. Officially blamed on Bowser.' },
            { intel: 30, text: 'The Rose-Shell Accords: A draft treaty with Bowser was found burned in her fireplace.' },
            { intel: 50, text: 'A secret hatch exists in her chambers, leading to the sewers. It was locked *from the outside*.' },
            { intel: 70, text: 'The "Wild Heart" Affair: She spent summers in the Forever Forest with Chief Thornpaw. It was more than diplomacy.' },
            { intel: 85, text: 'Medical records from 954 indicate a pregnancy hidden from the court. The child was never officially born.' },
            { intel: 95, text: 'Lady Bloomia (her handmaiden) vanished the same night with a "bundle" wrapped in royal silk. Destination: Sarasaland border.' }
        ]
    },

    // =========================================
    // THE TOADSTOOL DYNASTY (EXPANDED LORE)
    // =========================================
    dynasty: {
        name: 'House Toadstool',
        founded: 412,
        founder: 'King Toadstool I "The Spore-Father"',
        motto: 'Grace in Sovereignty',
        altMotto: 'Mycelium Binds All',
        symbol: '🍑',
        status: 'EXTINCT (Main Line) / DORMANT (Bloodline)',
        ancestralSeat: 'Peach\'s Castle',
        
        sigils: {
            primary: 'Golden peach on pink field',
            secondary: 'The Star Rod rampant',
            warBanner: 'A Crown of Thorns and Spores'
        },

        // 1. The Direct Ancestors
        royalLine: [
            {
                id: 'king_toadstool_iv',
                name: 'King Toadstool IV',
                relation: 'The Last King (Peach\'s Father)',
                reign: '905-940',
                status: 'deceased',
                icon: '👑',
                intel: 15,
                summary: 'A benevolent but weary ruler. He expanded the Kingdom\'s borders but struggled to control the rising power of the Merchant Guilds.',
                notes: 'Died of "Heart Failure" in his sleep. Loyalist exhumations (Intel 60) revealed traces of Midnight Shade poison in his bone marrow. He was likely murdered to pave the way for a weaker Regent or an easily manipulated Queen.',
                legacy: 'His death left Peach isolated at age 20, surrounded by advisors who would eventually form the Regency Council.'
            },
            {
                id: 'queen_dahlia',
                name: 'Queen Dahlia of Sarasaland',
                relation: 'The Flower Consort (Peach\'s Mother)',
                reign: '905-935',
                status: 'deceased',
                icon: '🌺',
                intel: 20,
                summary: 'A Sarasaland Princess who married into House Toadstool. She brought the "Flower Power" magic into the bloodline.',
                notes: 'Died of "Wilting Fever." Magikoopa analysis suggests a cursing ritual. Her sister, Queen Orchid, is Princess Daisy\'s grandmother. This blood tie is why Daisy has the strongest legal claim to the Mushroom Throne, though she refuses to press it.',
                legacy: 'Established the secret "Garden Network" of spies, which eventually evolved into the Peach Loyalists\' intelligence wing.'
            },
            {
                id: 'peach',
                name: 'Princess Peach',
                relation: 'The Lost Sovereign',
                reign: 'Never Crowned',
                status: 'ASSASSINATED',
                icon: '👸',
                intel: 10,
                summary: 'The assassination of Princess Peach is the Year Zero of the current era. Everything is defined as BF (Before Fall) or AF (After Fall).',
                notes: 'She was preparing to dissolve the Nobility Council the week she died. Her "kidnappings" by Bowser were increasingly becoming diplomatic summits. She realized the Regency needed an external enemy (Bowser) to maintain power, and she intended to end that dynamic.'
            }
        ],

        // 2. The Cadet Branches (Rivals and Survivors)
        cadetBranches: [
            {
                id: 'rosewood',
                name: 'House Rosewood',
                relationship: 'The "Gardener" Branch (3rd Cousins)',
                separation: 'Split during the War of the Spores (750)',
                currentHead: 'Lady Petal Rosewood',
                headAge: 32,
                status: 'active',
                claimStrength: 2,
                territory: 'Eastern Mushroom Marches',
                forces: 200,
                stance: 'Opportunistic / Regency Support',
                intel: 40,
                summary: 'Descended from a younger brother who chose botany over politics. Now wealthy landowners controlling the food supply.',
                notes: 'Lady Petal is financing the Regency but secretly meeting with Iron Legion envoys. She believes the Toadstools are done and wants to be the first "Prime Minister" of a Constitutional Republic. Ruthless, pragmatic, and hates magic.'
            },
            {
                id: 'goldcap',
                name: 'House Goldcap',
                relationship: 'The "Merchant" Branch',
                separation: 'Split in 880 (Recent)',
                currentHead: 'EXTINCT (Officially)',
                status: 'DESTROYED',
                claimStrength: 0,
                territory: 'Northern Highlands (Ruined)',
                forces: 0,
                stance: 'N/A',
                intel: 50,
                summary: 'Massacred in 982 during the "Night of Falling Stars." They were preparing to release evidence implicating the Regency in Peach\'s death.',
                notes: 'One body was never found: Jasper Goldcap, age 4. Rumors persist of a "Beggar Prince" in the rogueport slums who bears the Goldcap birthmark. If alive, he has a strong claim.',
                classified: { intel: 80, text: 'Jasper Goldcap is alive. He is "Big J," a crime lord in Rogueport who hates the monarchy and refuses to reclaim his title.' }
            },
            {
                id: 'fernshade',
                name: 'House Fernshade',
                relationship: 'The "Bastard" Branch',
                separation: 'Illegitimate line of King Toadstool II',
                currentHead: 'Baron Moss Fernshade',
                headAge: 54,
                status: 'active',
                claimStrength: 1,
                territory: 'Darkwood Forest',
                forces: 50,
                stance: 'Neutral / Isolationist',
                intel: 35,
                summary: 'Recluses who live deep in the woods. Rumored to practice druidic magic and intermarry with Dryads.',
                notes: 'They hold the "Emerald Key," required to open the Royal Crypts. The Regency has tried to seize it three times; every tax collector sent to Darkwood vanishes. They are waiting for a "Sign from the Stars" to choose a side.'
            },
            {
                id: 'morel',
                name: 'House Morel',
                relationship: 'The "Scholar" Branch',
                separation: '4 generations removed',
                currentHead: 'Countess Portia Morel',
                headAge: 45,
                status: 'active',
                claimStrength: 2,
                territory: 'Underground / Archives',
                forces: 'Mercenaries',
                stance: 'Profiteering',
                intel: 65,
                summary: 'Controls the underground mushroom trade. Wealthier than the Regency itself.',
                notes: 'Portia Morel knows who killed Peach. She sold the poison. She keeps the receipt in a vault as insurance against the Regency. She plays all sides to maximize profit.'
            }
        ],

        // 3. Foreign Claimants (The International Threat)
        foreignClaimants: [
            {
                id: 'sarasaland',
                name: 'Princess Daisy',
                kingdom: 'Sarasaland',
                relationship: 'First Cousin (Maternal)',
                claimStrength: 5, // Strongest legal claim
                stance: 'Mobilizing for War',
                intel: 30,
                summary: 'The "Iron Flower." Following Peach\'s death, she militarized Sarasaland. She views the Regency as illegitimate usurpers.',
                notes: 'Daisy possesses the "Lockets of Union," giving her magical command over the Mushroom Kingdom\'s defensive wards—if she can reach the castle throne room. She is holding back her armies only because she fears a full invasion would hurt the civilians Peach loved.',
                profile: {
                    age: 'Ageless',
                    military: '5,000 Sarasaland Dragoons',
                    strategy: 'Total War if Regency collapses'
                }
            },
            {
                id: 'beanbean',
                name: 'Prince Peasley',
                kingdom: 'Beanbean Kingdom',
                relationship: 'Betrothed (Disputed)',
                claimStrength: 3,
                stance: 'Political Intrigue',
                intel: 55,
                summary: 'Claims a secret betrothal contract signed 3 days before Peach died. If valid, he is Prince Consort.',
                notes: 'The contract is likely a forgery created by the Regency to block Daisy\'s claim, but Peasley has gone rogue. He wants the Mushroom Kingdom as a vassal state. He uses his charm to mask a ruthless imperialism.',
                profile: {
                    military: 'Bean Knights (Elite)',
                    strategy: 'Diplomatic Annexation'
                }
            },
            {
                id: 'bowser',
                name: 'King Bowser Koopa',
                kingdom: 'Dark Lands',
                relationship: 'Right of Conquest / Ancient Treaty',
                claimStrength: 4,
                stance: 'Incapacitated / Claiming Protection',
                intel: 20,
                summary: 'Claims the Mushroom Kingdom is a "Breakaway Province" of the ancient Koopa Empire.',
                notes: 'Bowser\'s obsession isn\'t just lust; it\'s legalism. He holds the "Obsidian Tablets" from 400 years ago that technically make the Toadstools vassals of the Koopas. Peach was negotiating a way to annul this when she died. He wants to rule legally.',
                classified: { intel: 75, text: 'Bowser arrived at the castle 10 minutes after the murder, found the body, and roared in grief. He invaded to *avenge* her, but the narrative was twisted.' }
            }
        ]
        },

    // Dynamic Faction Data
    get factions() {
        return generateDynamicFactions().map(f => {
            // Enrich dynamic factions with static lore
            switch(f.id) {
                case 'loyalists':
                    f.lore = {
                        origin: 'Founded by the Royal Guard Captain Silvercap (presumed dead) and Lady Bloomia\'s brother.',
                        ideology: 'The "Cult of the Rose." They believe Peach will return (messianic) or that her true heir lives.',
                        darkSecret: { intel: 80, text: 'The Loyalists possess a vial of Peach\'s blood. They are attempting a forbidden "Resurrection Spore" ritual in the deep sewers. It requires a massive sacrifice.' }
                    };
                    break;
                case 'regency':
                    f.lore = {
                        origin: 'The Emergency Council formed 1 hour after the death. They declared a "Temporary State of Exception" that has lasted 85 years.',
                        ideology: 'Stability at any cost. Bureaucratic authoritarianism.',
                        darkSecret: { intel: 60, text: 'Chancellor Toadsworth is a puppet. The true ruler is the "Council of Seven," a cabal of merchant lords who profit from the eternal war economy.' }
                    };
                    break;
                case 'legion':
                    f.lore = {
                        origin: 'Exiles from a distant land destroyed by uncontrolled magic. They view the Mushroom Kingdom as a radioactive hazard.',
                        ideology: 'The Iron Mandate: "Magic is Chaos. Steel is Order."',
                        darkSecret: { intel: 70, text: 'Their "Anti-Magic" field generators are actually fueled by grinding up Pixies and Star Sprites. It is hypocrisy of the highest order.' }
                    };
                    break;
            }
            return f;
        });
    },

    // Dynamic Territory Data
    get territories() {
        return generateDynamicTerritories();
    },

    // Investigation evidence
    evidence: {
       physical: [

            {
                id: 'the_burnt_treaty',
                name: 'The Rose-Shell Draft',
                status: 'RECOVERED',
                discovered: '955-06-03 (Suppressed)',
                source: 'Recovered from Ash',
                intel: 80,
                summary: 'Fragments of a treaty ending the Koopa War forever. It granted Bowser trade rights in exchange for sovereignty recognition.',
                implications: ['Peace would destroy the Regency\'s military funding', 'Motive for the Military']
            },
            {
                id: 'locket',
                name: 'The Locket of Hair',
                status: 'MISSING',
                discovered: '955',
                source: 'Coroner Report (Redacted)',
                intel: 90,
                summary: 'Peach died clutching a locket. It contained a lock of hair that matched neither her nor Bowser.',
                implications: ['Magi analysis suggests a child', 'The child was likely half-human, half-Rakasha']
            },
                    {
                id: 'secret_hatch',
                name: 'The Royal Escape Hatch',
                status: 'CRITICAL',
                discovered: '1040-06-10',
                source: 'Chief Thornpaw',
                intel: 60,
                summary: 'A mechanism hidden behind the portrait of King Toadstool IV. It was locked from the OUTSIDE.',
                implications: ['The killer had a key', 'Peach was trapped deliberately', 'Regency maintenance logs show the lock was changed 2 days prior']
            },
            {
                id: 'the_burnt_treaty',
                name: 'The Rose-Shell Draft',
                status: 'RECOVERED',
                discovered: '955-06-03 (Suppressed)',
                source: 'Recovered from Ash',
                intel: 80,
                summary: 'Fragments of a treaty ending the Koopa War forever. It granted Bowser trade rights in exchange for sovereignty recognition.',
                implications: ['Peace would destroy the Regency\'s military funding', 'Motive for the Military']
            },
            {
                id: 'locket',
                name: 'The Locket of Hair',
                status: 'MISSING',
                discovered: '955',
                source: 'Coroner Report (Redacted)',
                intel: 90,
                summary: 'Peach died clutching a locket. It contained a lock of hair that matched neither her nor Bowser.',
                implications: ['Magi analysis suggests a child', 'The child was likely half-human, half-Rakasha']
            },
            // NEW PHYSICAL EVIDENCE
            {
                id: 'blue_residue',
                name: 'Viscous Blue Fluid',
                status: 'UNIDENTIFIED',
                discovered: '955-06-02',
                source: 'Carpet Sample #404',
                intel: 20,
                summary: 'Strange, paint-like bioluminescent goo found on the window sill. Archives label it "Ectoplasm."',
                implications: ['Suggests supernatural intruder', 'Possibly a shapeshifter tool', 'Red Herring: Mimics Shadow Mario signature (anachronistic?)']
            },
            {
                id: 'royal_calendar',
                name: 'The Private Calendar',
                status: 'ARCHIVED',
                discovered: '955-06-05',
                source: 'Royal Desk',
                intel: 45,
                summary: 'Her personal scheduler. The dates for "Diplomatic Retreats" perfectly align with the gestations of the forest moon cycles.',
                implications: ['She was absent from the castle for 9 months in 954', 'Cover story: "Spore Sickness" quarantine']
            },
            {
                id: 'invoice_772',
                name: 'Invoice #772-B',
                status: 'VERIFIED',
                discovered: '1020-01-15',
                source: 'Merchant Guild Leak',
                intel: 65,
                summary: 'A bill for "Reinforced Crib - Vibranium/Star Iron Alloy." Delivered to a safehouse in the Forever Forest, not the Castle.',
                implications: ['Preparation for a powerful infant', 'The child inherited immense strength (Koopa/Rakasha traits?)']
            },
            {
                id: 'shattered_glass',
                name: 'The Obsidian Shard',
                status: 'ANALYZING',
                discovered: '955-06-02',
                source: 'Under the Bed',
                intel: 35,
                summary: 'A fragment of black glass not native to the Mushroom Kingdom. Matches the material used in Beanbean monocles.',
                implications: ['Prince Peasley was in the room', 'Beanbean espionage', 'Likely planted to frame a rival power']
            },
            {
                id: 'guard_rota_log',
                name: 'The Altered Rota',
                status: 'CRITICAL',
                discovered: '960-11-00',
                source: 'Defected Guard Captain',
                intel: 55,
                summary: 'The original guard schedule for the Night of Tears. The names were erased and replaced with "Squad 0" in Chancellor Toadsworth\'s handwriting.',
                implications: ['Premeditated removal of loyal guards', 'Squad 0 does not exist in official records']
            },
            {
                id: 'withered_flower',
                name: 'The Fire Flower Stem',
                status: 'DECAYED',
                discovered: '955-06-02',
                source: 'Vase near the Door',
                intel: 75,
                summary: 'A Fire Flower that was drained of all energy *without* being used. The drain pattern suggests a dark magic siphon, not a power-up absorption.',
                implications: ['The killer used anti-magic', 'Magikoopa involvement (Kamek?) or Shroob technology']
            },
            {
                id: 'wet_nurse_letter',
                name: 'The Unsent Letter',
                status: 'RECOVERED',
                discovered: '956-02-14',
                source: 'Found in a well in Toad Town',
                intel: 85,
                summary: 'Written by a maid named "Tippi." Mentions "The little one has her eyes, but his claws. We must move him tonight."',
                implications: ['Confirmation of the child', 'The child has claws (Rakasha or Koopa trait)', 'Tippi vanished the next day']
            },
            {
                id: 'poison_receipt',
                name: 'Apothecary Ledger',
                status: 'VERIFIED',
                discovered: '990-05-05',
                source: 'House Morel Vault',
                intel: 50,
                summary: 'Purchase order for "Midnight Shade" (a paralytic) and "Memory Dust." Buyer listed as "The Gardener."',
                implications: ['Links House Rosewood to the crime', 'Peach was likely paralyzed before the blow was struck']
            },
            {
                id: 'sewer_grate',
                name: 'The Bent Grate',
                status: 'IGNORED',
                discovered: '955-06-03',
                source: 'Sewer Maintenance Log',
                intel: 40,
                summary: 'The iron bars of the sewer outflow below the royal suite were bent *outward* with superhuman force.',
                implications: ['Escape route used', 'The escapee possessed immense physical strength (Thornpaw? Or Bowser?)']
            },
            {
                id: 'hidden_will',
                name: 'The Draft Will',
                status: 'FRAGMENTARY',
                discovered: '1005-08-20',
                source: 'Restored from Shredder',
                intel: 95,
                summary: 'Reconstituted parchment. "...crown to pass not to the Council, but to the fruit of the forest... stewardship of Sarasaland until majority..."',
                implications: ['She legally disinherited the Regency', 'Daisy knows about the child', 'The child is the legal King/Queen']
            },
            {
                id: 'statue_dust',
                name: 'Petrified Residue',
                status: 'ANOMALY',
                discovered: '955-06-02',
                source: 'Carpet Analysis',
                intel: 30,
                summary: 'Dust consistent with the statue-magic used by the Basilisk of the Deep. Or a Cockatrice.',
                implications: ['Killer used petrification magic', 'Possibly intended to freeze her, but the spell shattered?']
            },
            {
                id: 'tea_cup',
                name: 'The Second Cup',
                status: 'ARCHIVED',
                discovered: '955-06-02',
                source: 'Crime Scene Photo #12',
                intel: 25,
                summary: 'There were two tea cups on the table. One had lipstick. The other had trace amounts of tree sap and bourbon.',
                implications: ['She knew her killer', 'They sat and drank together before the end', 'Tree sap points to Thornpaw or a Rosewood']
            },
            {
                id: 'bloomy_shawl',
                name: 'Bloodied Shawl',
                status: 'MISSING',
                discovered: '955-06-02',
                source: 'Witness description only',
                intel: 60,
                summary: 'Lady Bloomia was seen wearing a white shawl. A similar shawl, stained red, was found in the Laundry chutes, then "lost" by evidence handling.',
                implications: ['Bloomia was wounded during the escape', 'Or Bloomia was the killer (unlikely)']
            },
            {
                id: 'cryptic_painting',
                name: 'The Modified Portrait',
                status: 'OBSERVATION',
                discovered: '970-03-01',
                source: 'Art Historian Toad',
                intel: 70,
                summary: 'The portrait of Peach in the West Hall was repainted AF 2. X-rays show she was originally holding a baby. It was painted over with a bouquet of Fire Flowers.',
                implications: ['The Regency actively erased the child from history', 'Artistic censorship']
            },
            {
                id: 'fawful_drone',
                name: 'Ancient Surveillance Bot',
                status: 'DECRYPTING',
                discovered: '1040-05-05',
                source: 'Fawful\'s Castle Raid',
                intel: 90,
                summary: 'Fawful found a microscopic bug in the molding. It belongs to an advanced civilization (Shroob? Or Future Tech?). It recorded audio of the murder.',
                implications: ['Fawful knows the truth', 'The killer\'s voice is on tape', 'Audio reveals the killer apologized']
            }
        ],
        
        testimony: [

            {
                id: 'toadsworth_sr',
                name: 'Toadsworth Sr. Journals',
                status: 'VERIFIED',
                intel: 55,
                summary: 'The old steward died of "grief" a week after Peach. His journals mention "The terrible necessity" and "Saving the Kingdom from her naive heart."',
                implications: ['Toadsworth Sr. may have allowed the assassination to save the Monarchy from Peach\'s reforms']
            },
            // NEW TESTIMONY
            {
                id: 'maid_5',
                name: 'Chambermaid Toadette #5',
                status: 'SILENCED',
                intel: 25,
                summary: 'Claimed she heard "arguments about a treaty" the night before. Found dead in the moat a week later (Ruled accidental drowning).',
                quote: '"She was yelling at the Chancellor. She said \'I will sign it, and you cannot stop the ink from drying.\'"'
            },
            {
                id: 'lakitu_camera',
                name: 'Lakitu News Footage',
                status: 'REDACTED',
                intel: 40,
                summary: 'A Lakitu cameraman was filming the castle exterior for the weather report. He claimed he saw a "Shadow" climbing the North Tower—not Bowser.',
                quote: '"It moved like water. It didn\'t have a shell. It looked... like a plumber? But wrong. All wrong."'
            },
            {
                id: 'boo_snitch',
                name: 'Peekaboo the Ghost',
                status: 'UNRELIABLE',
                intel: 30,
                summary: 'A Boo haunting the chandeliers. Claims to have seen the murder but is too scared of "The Vacuum" to speak openly.',
                quote: '"It wasn\'t the big turtle! The big turtle came later and cried! The bad man smelled like old paper and ink!"'
            },
            {
                id: 'royal_alchemist',
                name: 'E. Gadd\'s Mentor',
                status: 'DISAPPEARED',
                intel: 65,
                summary: 'The previous Royal Scientist. Disappeared BF 1. Left a note about "Genetic anomalies" and "Hybrid vigor."',
                quote: '"The combination of human and beast blood creates a mana signature I have never seen. We must hide it from the Star Spirits."'
            },
            {
                id: 'luigi_diary',
                name: 'The Green Brother\'s Note',
                status: 'OVERLOOKED',
                intel: 45,
                summary: 'An entry from the day of the murder. He mentions Mario was "acting strange" and "washing his gloves repeatedly."',
                implications: ['Doppelganger theory', 'Possession', 'Or Luigi misunderstood a mundane event?']
            },
            {
                id: 'banker_toad',
                name: 'Gringott T.',
                status: 'COOPERATIVE',
                intel: 60,
                summary: 'Senior Clerk at the Mushroom Bank. Testified that the Regency Council transferred 50% of the Royal Treasury to private accounts the morning AFTER the death.',
                quote: '"They didn\'t mourn. They liquidated. You don\'t liquidate assets unless you know the owner isn\'t coming back."'
            },
            {
                id: 'daisy_letter',
                name: 'Intercepted Sarasaland Missive',
                status: 'DECRYPTED',
                intel: 80,
                summary: 'A letter from Daisy to Peach, dated 3 days BF. Urging her to "Send the package to the desert. I will raise it as my own."',
                implications: ['"Package" = Child', 'Daisy is part of the cover-up to protect the heir']
            },
            {
                id: 'koopa_cook',
                name: 'Sizzlebrot the Chef',
                status: 'CAPTURED',
                intel: 35,
                summary: 'Bowser\'s personal chef. Claims Bowser was planning a wedding banquet, not an assassination.',
                quote: '"He was practicing his proposal speech in the mirror for weeks! He had a ring! Why would he stab her? He wanted to marry her!"'
            },
            {
                id: 'shroob_survivor',
                name: 'Old Man Shroob',
                status: 'INSANE',
                intel: 95,
                summary: 'Found raving in the Vim Factory ruins. Claims "The Princess is the Key... the baby is the Lock... the Time is the Door."',
                implications: ['Time travel paradox involvement', 'The child has temporal powers']
            },
            {
                id: 'guard_captain',
                name: 'Captain Ironhelm\'s Confession',
                status: 'POSTHUMOUS',
                intel: 85,
                summary: 'Found sewn into his uniform after he "committed suicide." States he was ordered to unlock the balcony door by Lord Rosewood.',
                quote: '"I thought it was for a lover. I didn\'t know it was for an executioner. May the Stars forgive me."'
            },
            {
                id: 'yoshi_elder',
                name: 'Village Elder',
                status: 'TRANSLATED',
                intel: 50,
                summary: 'Claims a stork was shot down over the castle that night. Not delivering a baby, but *retrieving* one.',
                implications: ['Kamek shot down the extraction transport?', 'The baby fell into the sewers/forest?']
            },
            {
                id: 'dry_bones',
                name: 'The Eternal Witness',
                status: 'IGNORED',
                intel: 75,
                summary: 'A Dry Bones that was "alive" in the dungeon below. Heard the body hit the floor, then heard TWO voices arguing in the Royal tongue.',
                quote: '"One voice was crying. The other voice was counting coins."'
            },
            {
                id: 'fashion_designer',
                name: 'Style T.',
                status: 'RETIRED',
                intel: 15,
                summary: 'Noticed Peach\'s dress measurements changed drastically in 954, then went back to normal.',
                implications: ['Pregnancy confirmation via mundane means', 'Regency claimed it was "Winter Weight"']
            },            
            {
                id: 'thornpaw',
                name: 'Chief Thornpaw',
                status: 'CRITICAL',
                intel: 70,
                summary: 'Privately admitted to a 3-year romance with Peach. Claims they were wed in secret under "The Old Laws" of the forest.',
                quote: '"She did not belong to your stone castles. She belonged to the wild. And she gave me something to keep safe."'
            },
            {
                id: 'toadsworth_sr',
                name: 'Toadsworth Sr. Journals',
                status: 'VERIFIED',
                intel: 55,
                summary: 'The old steward died of "grief" a week after Peach. His journals mention "The terrible necessity" and "Saving the Kingdom from her naive heart."',
                implications: ['Toadsworth Sr. may have allowed the assassination to save the Monarchy from Peach\'s reforms']
            }
        ],
        
        theories: [
            {
                id: 'child_theory',
                name: 'The Hidden Heir',
                probability: 65,
                intel: 85,
                summary: 'Peach had a child with Thornpaw. The child was smuggled out by Lady Bloomia. This child is now 85 years old (or ageless due to magic).',
                candidates: ['Rosalina (Unlikely)', 'A Forest Spirit', 'Unknown Rogueport Beggar']
            },
            {
                id: 'regency_coup',
                name: 'The Administrative Coup',
                probability: 90,
                intel: 50,
                summary: 'The Nobility killed her to prevent the Constitution that would strip their power.'
            }
        ]
    },

    // Dynamic War Projections
    projections: {
        get analysisDate() { return CURRENT_GAME_DATE; },
        analyst: 'Joint Strategic Command',
        get confidence() { return dynamicStats.getFrontrunner().confidence; },
        get frontrunner() { return dynamicStats.getFrontrunner().name; },
        get odds() { return dynamicStats.calculateVictoryOdds(); },
        keyFactors: [
            'Discovery of the Heir',
            'Bowser\'s Return from the Void',
            'Sarasaland Intervention',
            'The Iron Mandate Backlash'
        ]
    },
    // Critical timeline
    timeline: [
        { year: 955, event: 'PRINCESS PEACH ASSASSINATED', critical: true, category: 'assassination' },
        { year: 955, event: 'Koopa Troop blamed', critical: false, category: 'political' },
        { year: 955, event: 'Mushroom Regency established', critical: true, category: 'political' },
        { year: 982, event: 'House Goldcap massacred', critical: true, category: 'assassination' },
        { year: 980, event: 'Peach Loyalists founded', critical: true, category: 'political' },
        { year: 1040, month: 5, day: 1, event: 'Fawful seizes the castle', critical: true, category: 'military' },
        { year: 1040, month: 6, day: 10, event: 'Thornpaw revelation at gala', critical: true, category: 'investigation' },
        { year: 1040, month: 6, day: 12, event: 'Loyalists seize Toad Town', critical: true, category: 'military' },
        { year: 1040, month: 6, day: 17, event: 'Bramblehaven massacre', critical: true, category: 'military' },
        { year: 1040, month: 6, day: 21, event: 'Iron Mandate enacted', critical: true, category: 'political' },
        { year: 1040, month: 6, day: 21, event: 'Loyalist-Rakasha alliance', critical: true, category: 'diplomatic' }
    ],    timeline: [
        { year: 955, month: 6, day: 1, event: 'ASSASSINATION OF PRINCESS PEACH', critical: true, category: 'tragedy' },
        { year: 955, month: 6, day: 2, event: 'Toadsworth Sr. declares Emergency Regency', critical: true, category: 'political' },
        { year: 955, month: 6, day: 5, event: 'Bowser Invades (Claiming Vengeance)', critical: true, category: 'war' },
        { year: 955, month: 6, day: 10, event: 'Lady Bloomia declared "Missing"', critical: true, category: 'mystery' },
        { year: 956, event: 'The "Iron Wall" erected around Toad Town', critical: false, category: 'infrastructure' },
        { year: 960, event: 'The Great Purge of Pro-Peach Loyalists from the Guard', critical: true, category: 'political' },
        { year: 982, event: 'House Goldcap Massacre (Night of Falling Stars)', critical: true, category: 'assassination' },
        { year: 1000, event: 'The Iron Legion arrives from the West', critical: true, category: 'foreign' },
        { year: 1025, event: 'Fawful establishes base in the Beanbean borderlands', critical: false, category: 'military' },
        { year: 1040, month: 5, day: 1, event: 'Fawful seizes Peach\'s Castle', critical: true, category: 'military' },
        { year: 1040, month: 6, day: 10, event: 'Gala Incident: Thornpaw Speaks', critical: true, category: 'investigation' },
        { year: 1040, month: 6, day: 21, event: 'Loyalist-Rakasha "Spirit Bond" Alliance', critical: true, category: 'diplomatic' }
    ],

    // =========================================
    // UNANSWERED QUESTIONS
    // =========================================
    questions: [
        {
            id: 'killer',
            question: 'Who struck the final blow?',
            priority: 'CRITICAL',
            status: 'UNRESOLVED',
            intel: 30,
            leads: ['A Royal Guard?', 'A Shroob Assassin?', 'Toadsworth Sr. himself?']
        },
        {
            id: 'heir',
            question: 'Where is the Child of the Rose?',
            priority: 'MAXIMUM',
            status: 'ACTIVE SEARCH',
            intel: 85,
            leads: ['Deep Woods Sanctuary', 'Sarasaland Orphanage records from 956']
        },
        {
            id: 'bowser_truth',
            question: 'What did Bowser find when he entered the room?',
            priority: 'HIGH',
            status: 'UNKNOWN',
            intel: 40,
            leads: ['He saw the killer', 'He took something from the body']
        }
    ]
};

// =============================================
// WAR ROOM INTERFACE
// =============================================

class WarRoomInterface {
    constructor() {
        this.container = null;
        this.activePanel = 'situation';
        this.intel = 50;
        this.animationFrame = null;
    }

    // Get intel level (Dynamic)
    getIntel() {
        if (state?.debugMode) return 100;
        const breakdown = getIntelBreakdown('civil_war');
        return breakdown?.total ?? 50;
    }

    canAccess(required) {
        return this.intel >= (required || 0);
    }

    init() {
        loadState?.();
        this.intel = this.getIntel();
        dynamicStats.clearCache();
        
        this.container = document.querySelector('.civil-war-page') ||
                        document.getElementById('main-content');
        
        if (!this.container) return;

        this.render();
        this.bindEvents();
        this.startDataStream();
    }

    // Get intel level
    getIntel() {
        if (state?.debugMode) return 100;
        
        const sources = ['peach_loyalists', 'koopa_troop', 'mushroom_regency', 'civil_war'];
        let total = 0;
        let count = 0;
        
        sources.forEach(key => {
            if (typeof getIntelBreakdown === 'function') {
                const breakdown = getIntelBreakdown(key);
                if (breakdown?.total) {
                    total += breakdown.total;
                    count++;
                }
            }
        });
        
        return count > 0 ? Math.round(total / count) : (state?.intelLevels?.civil_war ?? 50);
    }

    // Helper to get fresh faction power
    getFactionPower(factionId) {
        return dynamicStats.getFactionStats(factionId);
    }

    canAccess(required) {
        return this.intel >= (required || 0);
    }

    // Initialize
    init() {
        loadState?.();
        this.intel = this.getIntel();
        dynamicStats.clearCache(); // Ensure fresh data on open
        
        this.container = document.querySelector('.civil-war-page') ||
                        document.getElementById('main-content');
        
        if (!this.container) {
            console.error('[WarRoom] No container found');
            return;
        }

        this.render();
        this.bindEvents();
        this.startDataStream();
        
        console.log(`[WarRoom] Initialized | Intel: ${this.intel}%`);
    }

    // Main render
    render() {
        this.container.innerHTML = `
            <div class="war-room" data-intel="${this.intel}">
                ${this.renderCommandHeader()}
                ${this.renderTacticalNav()}
                <div class="war-room-body">
                    ${this.renderSidebar()}
                    <div class="war-room-main">
                        ${this.renderPanel()}
                    </div>
                </div>
                ${this.renderDataStream()}
                
                <!-- DETAIL MODAL -->
                <div id="war-room-modal" class="war-modal-overlay hidden">
                    <div class="war-modal-content">
                        <button class="modal-close">×</button>
                        <div class="modal-body"></div>
                    </div>
                </div>
            </div>
        `;
    }
    renderCommandHeader() {
        const { meta } = WAR_DATA;
        const accessLevel = this.getAccessLevel();
        
        return `
            <header class="command-header">
                <div class="header-left">
                    <div class="command-emblem">
                        <span class="emblem-glyph">⚔️</span>
                        <div class="emblem-pulse"></div>
                    </div>
                    <div class="command-title">
                        <span class="classification">${meta.classification}</span>
                        <h1>${meta.codename}</h1>
                        <span class="subtitle">MUSHROOM SUCCESSION CRISIS - YEAR ${meta.warDuration}</span>
                    </div>
                </div>
                
                <div class="header-center">
                    <div class="status-display">
                        <span class="status-label">THEATER STATUS</span>
                        <span class="status-value critical">${meta.status}</span>
                    </div>
                </div>
                
                <div class="header-right">
                    <div class="intel-gauge">
                        <svg viewBox="0 0 100 50" class="gauge-svg">
                            <path d="M 10 45 A 40 40 0 0 1 90 45" class="gauge-bg"/>
                            <path d="M 10 45 A 40 40 0 0 1 90 45" class="gauge-fill" 
                                  style="stroke-dasharray: ${this.intel * 1.26}, 126"/>
                        </svg>
                        <div class="gauge-value">${this.intel}%</div>
                        <div class="gauge-label">INTEL</div>
                    </div>
                    <div class="access-badge ${accessLevel.class}">
                        <span class="access-icon">🔐</span>
                        <span class="access-text">${accessLevel.name}</span>
                    </div>
                </div>
            </header>
        `;
    }

    renderTacticalNav() {
        const panels = [
            { id: 'situation', label: 'SITREP', icon: '📊' },
            { id: 'factions', label: 'FACTIONS', icon: '⚔️' },
            { id: 'dynasty', label: 'BLOODLINES', icon: '👑' },
            { id: 'investigation', label: 'INTEL', icon: '🔍' },
            { id: 'territory', label: 'TERRITORY', icon: '🗺️' },
            { id: 'projections', label: 'FORECASTS', icon: '📈' },
            { id: 'timeline', label: 'CHRONO', icon: '⏱️' },
            { id: 'questions', label: 'UNKNOWNS', icon: '❓' }
        ];

        return `
            <nav class="tactical-nav">
                ${panels.map(p => `
                    <button class="nav-sector ${this.activePanel === p.id ? 'active' : ''}" 
                            data-panel="${p.id}">
                        <span class="sector-icon">${p.icon}</span>
                        <span class="sector-label">${p.label}</span>
                        <span class="sector-indicator"></span>
                    </button>
                `).join('')}
            </nav>
        `;
    }

    renderSidebar() {
        const { victim, projections } = WAR_DATA;
        const frontrunner = dynamicStats.getFrontrunner();
        
        return `
            <aside class="war-room-sidebar">
                <div class="sidebar-section victim-card">
                    <div class="victim-portrait">
                        <span class="portrait-icon">${victim.icon}</span>
                        <span class="portrait-status">${victim.status}</span>
                    </div>
                    <div class="victim-info">
                        <h3>${victim.name}</h3>
                        <span class="victim-dates">${victim.born} - ${victim.died}</span>
                        <p class="victim-summary">${victim.profile}</p>
                    </div>
                </div>
                
                <div class="sidebar-section momentum-tracker">
                    <h4>MOMENTUM</h4>
                    <div class="momentum-leader">
                        <span class="leader-icon">${frontrunner.icon}</span>
                        <span class="leader-name">${frontrunner.name}</span>
                    </div>
                    <div class="momentum-bar">
                        <div class="momentum-fill" style="width: ${frontrunner.confidence}%"></div>
                    </div>
                    <span class="momentum-confidence">${frontrunner.confidence}% confidence</span>
                </div>
                
                <div class="sidebar-section quick-odds">
                    <h4>VICTORY ODDS</h4>
                    ${projections.odds.slice(0, 4).map(o => `
                        <div class="odds-row">
                            <span class="odds-faction">${o.faction}</span>
                            <span class="odds-value">${o.chance}%</span>
                            <span class="odds-trend ${o.trend.includes('+') ? 'up' : o.trend.includes('-') ? 'down' : ''}">${o.trend}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="sidebar-section alert-feed">
                    <h4>PRIORITY ALERTS</h4>
                    <div class="alert-item critical">
                        <span class="alert-icon">🚨</span>
                        <span class="alert-text">Chancellor captured</span>
                    </div>
                    <div class="alert-item warning">
                        <span class="alert-icon">⚠️</span>
                        <span class="alert-text">Iron Mandate active</span>
                    </div>
                    <div class="alert-item info">
                        <span class="alert-icon">📡</span>
                        <span class="alert-text">Rakasha alliance confirmed</span>
                    </div>
                </div>
            </aside>
        `;
    }

    renderPanel() {
        switch (this.activePanel) {
            case 'situation': return this.renderSituation();
            case 'factions': return this.renderFactions();
            case 'dynasty': return this.renderDynasty();
            case 'investigation': return this.renderInvestigation();
            case 'territory': return this.renderTerritory();
            case 'projections': return this.renderProjections();
            case 'timeline': return this.renderTimeline();
            case 'questions': return this.renderQuestions();
            default: return this.renderSituation();
        }
    }

    renderDataStream() {
        return `
            <div class="data-stream">
                <div class="stream-content">
                    <span class="stream-text"></span>
                </div>
            </div>
        `;
    }

    // =========================================
    // PANEL RENDERERS
    // =========================================

    renderSituation() {
        const { meta, factions } = WAR_DATA;
        
        return `
            <div class="panel situation-panel">
                <div class="panel-header">
                    <h2>SITUATION REPORT</h2>
                    <span class="panel-timestamp">UPDATED: ${this.formatDate(CURRENT_GAME_DATE)}</span>
                </div>
                
                <div class="sitrep-grid">
                    <div class="sitrep-block overview">
                        <h3>EXECUTIVE SUMMARY</h3>
                        <p>The 85-year civil war has entered a critical new phase. The Peach Loyalists have seized the capital and captured the Chancellor. Fawful holds the royal castle. The Iron Legion enforces its anti-magic crusade. The Koopa Troop waits in the shadows.</p>
                        <p>The central question remains unanswered: <strong>Who killed Princess Peach?</strong></p>
                    </div>
                    
                    <div class="sitrep-block faction-status">
                        <h3>FACTION STATUS</h3>
                        <div class="status-grid">
                            ${factions.map(f => `
                                <div class="faction-status-card" style="--faction-color: ${f.color}">
                                    <span class="fsc-icon">${f.icon}</span>
                                    <div class="fsc-info">
                                        <span class="fsc-name">${f.shortName}</span>
                                        <span class="fsc-status">${f.status}</span>
                                    </div>
                                    <span class="fsc-trend ${f.trend.toLowerCase()}">${f.trend}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="sitrep-block power-balance">
                        <h3>POWER BALANCE</h3>
                        <div class="power-bars">
                            ${factions.map(f => `
                                <div class="power-row">
                                    <span class="power-label">${f.icon} ${f.shortName}</span>
                                    <div class="power-bar-container">
                                        <div class="power-bar military" style="width: ${f.power.military}%; background: ${f.color}"></div>
                                    </div>
                                    <span class="power-value">${f.power.military}%</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="sitrep-block recent-events">
                        <h3>RECENT EVENTS</h3>
                        <div class="events-list">
                            ${factions.flatMap(f => (f.recentActions || []).map(a => ({...a, faction: f}))).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6).map(e => `
                                <div class="event-item">
                                    <span class="event-icon" style="color: ${e.faction.color}">${e.faction.icon}</span>
                                    <span class="event-text">${e.action}</span>
                                    <span class="event-date">${e.date}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderFactions() {
        const { factions } = WAR_DATA;
        
        return `
            <div class="panel factions-panel">
                <div class="panel-header">
                    <h2>FACTION ANALYSIS</h2>
                </div>
                
                <div class="factions-grid">
                    ${factions.filter(f => this.canAccess(f.intel)).map(f => `
                        <article class="faction-dossier" style="--faction-color: ${f.color}">
                            <div class="dossier-header">
                                <div class="dossier-icon">${f.icon}</div>
                                <div class="dossier-title">
                                    <h3>${f.name}</h3>
                                    <span class="dossier-leader">${f.leader}</span>
                                </div>
                                <div class="dossier-status ${f.trend.toLowerCase()}">${f.status}</div>
                            </div>
                            
                            <p class="dossier-summary">${f.summary}</p>
                            
                            <div class="dossier-metrics">
                                <div class="metric">
                                    <span class="metric-label">Territory</span>
                                    <div class="metric-bar"><div class="metric-fill" style="width: ${f.power.territory}%"></div></div>
                                    <span class="metric-value">${f.power.territory}%</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-label">Military</span>
                                    <div class="metric-bar"><div class="metric-fill" style="width: ${f.power.military}%"></div></div>
                                    <span class="metric-value">${f.power.military}%</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-label">Political</span>
                                    <div class="metric-bar"><div class="metric-fill" style="width: ${f.power.political}%"></div></div>
                                    <span class="metric-value">${f.power.political}%</span>
                                </div>
                            </div>
                            
                            <div class="dossier-analysis">
                                <div class="analysis-col">
                                    <h4>STRENGTHS</h4>
                                    <ul>${f.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                                </div>
                                <div class="analysis-col">
                                    <h4>WEAKNESSES</h4>
                                    <ul>${f.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>
                                </div>
                            </div>
                            
                            <div class="dossier-actions">
                                <h4>RECENT ACTIONS</h4>
                                ${f.recentActions ? f.recentActions.map(a => `
                                    <div class="action-entry">
                                        <span class="action-date">${a.date}</span>
                                        <span class="action-text">${a.action}</span>
                                    </div>
                                `).join('') : ''}
                            </div>
                        </article>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderDynasty() {
        const { dynasty } = WAR_DATA;
        
        return `
            <div class="panel dynasty-panel">
                <div class="panel-header">
                    <h2>THE TOADSTOOL BLOODLINE</h2>
                    <span class="dynasty-motto">"${dynasty.motto}"</span>
                </div>
                
                <div class="dynasty-tree-container">
                    <!-- Royal Line -->
                    <div class="bloodline-column main-line">
                        <h3>THE MAIN LINE</h3>
                        ${dynasty.royalLine.map(r => `
                            <div class="royal-card interactive ${r.status}" data-type="royal" data-id="${r.id}">
                                <div class="royal-icon">${r.icon}</div>
                                <div class="royal-details">
                                    <div class="royal-name">${r.name}</div>
                                    <div class="royal-reign">${r.reign}</div>
                                </div>
                                <div class="click-indicator">?</div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Cadet Branches -->
                    <div class="bloodline-column cadet-line">
                        <h3>CADET BRANCHES</h3>
                        ${dynasty.cadetBranches.filter(b => this.canAccess(b.intel)).map(b => `
                            <div class="cadet-card interactive ${b.status.toLowerCase()}" data-type="cadet" data-id="${b.id}">
                                <div class="cadet-header">
                                    <span class="cadet-name">${b.name}</span>
                                    <span class="cadet-status ${b.status}">${b.status}</span>
                                </div>
                                <div class="cadet-claim">Claim: ${'★'.repeat(b.claimStrength)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Foreign Claims -->
                <div class="foreign-claims-section">
                    <h3>FOREIGN CLAIMANTS</h3>
                    <div class="claimants-grid">
                        ${dynasty.foreignClaimants.filter(c => this.canAccess(c.intel)).map(c => `
                            <div class="claimant-card interactive" data-type="foreign" data-id="${c.id}">
                                <div class="card-top">
                                    <span class="claimant-name">${c.name}</span>
                                    <span class="claimant-kingdom">${c.kingdom}</span>
                                </div>
                                <div class="card-stats">
                                    <span>Claim: ${c.claimStrength}/5</span>
                                    <span>Stance: ${c.stance}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    renderInvestigation() {
        const { evidence } = WAR_DATA;
        
        return `
            <div class="panel investigation-panel">
                <div class="panel-header">
                    <h2>ASSASSINATION INVESTIGATION</h2>
                    <span class="case-number">CASE #955-001 | 85 YEARS OPEN</span>
                </div>
                
                <div class="investigation-grid">
                    <section class="evidence-section">
                        <h3>PHYSICAL EVIDENCE</h3>
                        <div class="evidence-cards">
                            ${evidence.physical.filter(e => this.canAccess(e.intel)).map(e => `
                                <div class="evidence-card ${e.status.toLowerCase()}">
                                    <div class="evidence-header">
                                        <span class="evidence-status">${e.status}</span>
                                        <span class="evidence-date">${e.discovered}</span>
                                    </div>
                                    <h4>${e.name}</h4>
                                    <p class="evidence-summary">${e.summary}</p>
                                    <div class="evidence-implications">
                                        <strong>Implications:</strong>
                                        <ul>${e.implications.map(i => `<li>${i}</li>`).join('')}</ul>
                                    </div>
                                    <span class="evidence-source">Source: ${e.source}</span>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    
                    <section class="evidence-section">
                        <h3>TESTIMONY & WITNESSES</h3>
                        <div class="testimony-cards">
                            ${evidence.testimony.filter(t => this.canAccess(t.intel)).map(t => `
                                <div class="testimony-card ${t.status.toLowerCase()}">
                                    <div class="testimony-header">
                                        <h4>${t.name}</h4>
                                        <span class="testimony-status">${t.status}</span>
                                    </div>
                                    <p>${t.summary}</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    
                    <section class="evidence-section theories">
                        <h3>SUSPECT THEORIES</h3>
                        <div class="theory-chart">
                            ${evidence.theories.filter(t => this.canAccess(t.intel)).map(t => `
                                <div class="theory-bar">
                                    <div class="theory-label">${t.name}</div>
                                    <div class="theory-track">
                                        <div class="theory-fill" style="width: ${t.probability}%"></div>
                                    </div>
                                    <div class="theory-prob">${t.probability}%</div>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                </div>
            </div>
        `;
    }

    renderTerritory() {
        const territories = WAR_DATA.territories; // Uses dynamic getter
        const factions = WAR_DATA.factions;     // Uses dynamic getter
        
        const getController = (id) => {
            if (id === 'contested') return { name: 'CONTESTED', color: '#FFA500', icon: '⚡' };
            if (id === 'neutral') return { name: 'NEUTRAL', color: '#888', icon: '⚖️' };
            const faction = factions.find(f => f.id === id);
            return faction || { name: 'Unknown', color: '#333', icon: '?' };
        };
        
        const controlTotals = {};
        territories.forEach(t => {
            controlTotals[t.controller] = (controlTotals[t.controller] || 0) + t.value;
        });
        
        return `
            <div class="panel territory-panel">
                <div class="panel-header">
                    <h2>TERRITORIAL CONTROL</h2>
                </div>
                
                <div class="territory-overview">
                    <div class="control-summary">
                        ${Object.entries(controlTotals).map(([id, value]) => {
                            const ctrl = getController(id);
                            return `
                                <div class="control-stat" style="--ctrl-color: ${ctrl.color}">
                                    <span class="ctrl-icon">${ctrl.icon}</span>
                                    <span class="ctrl-name">${ctrl.name || id.toUpperCase()}</span>
                                    <span class="ctrl-value">${value} pts</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="territory-grid">
                    ${territories.map(t => {
                        const ctrl = getController(t.controller);
                        return `
                            <div class="territory-tile" style="--ctrl-color: ${ctrl.color}">
                                <span class="tile-icon">${t.icon}</span>
                                <div class="tile-info">
                                    <span class="tile-name">${t.name}</span>
                                    <span class="tile-type">${t.type}</span>
                                </div>
                                <div class="tile-control">
                                    <span class="ctrl-badge">${ctrl.icon} ${ctrl.shortName || ctrl.name}</span>
                                </div>
                                <span class="tile-value">${t.value} pts</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    renderProjections() {
        const { projections } = WAR_DATA;
        
        return `
            <div class="panel projections-panel">
                <div class="panel-header">
                    <h2>WAR PROJECTIONS</h2>
                    <span class="analysis-date">Analysis Date: ${this.formatDate(CURRENT_GAME_DATE)}</span>
                </div>
                
                <div class="projections-content">
                    <section class="projection-section leader">
                        <h3>CURRENT FRONTRUNNER</h3>
                        <div class="frontrunner-display">
                            <span class="fr-icon">🌸</span>
                            <span class="fr-name">${projections.frontrunner}</span>
                            <span class="fr-confidence">${projections.confidence}% confidence</span>
                        </div>
                    </section>
                    
                    <section class="projection-section odds">
                        <h3>VICTORY PROBABILITIES</h3>
                        <div class="odds-chart">
                            ${projections.odds.map(o => `
                                <div class="odds-bar">
                                    <span class="odds-label">${o.faction}</span>
                                    <div class="odds-track">
                                        <div class="odds-fill" style="width: ${o.chance}%"></div>
                                    </div>
                                    <span class="odds-percent">${o.chance}%</span>
                                    <span class="odds-trend ${o.trend.includes('+') ? 'up' : o.trend.includes('-') ? 'down' : 'flat'}">${o.trend}</span>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    
                    <section class="projection-section factors">
                        <h3>KEY VARIABLES</h3>
                        <div class="factors-list">
                            ${projections.keyFactors.map((f, i) => `
                                <div class="factor-item">
                                    <span class="factor-num">${i + 1}</span>
                                    <span class="factor-text">${f}</span>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                </div>
            </div>
        `;
    }

    renderTimeline() {
        const { timeline } = WAR_DATA;
        const sorted = [...timeline].sort((a, b) => {
            if (a.year !== b.year) return b.year - a.year;
            return (b.month || 0) - (a.month || 0);
        });
        
        return `
            <div class="panel timeline-panel">
                <div class="panel-header">
                    <h2>CHRONOLOGICAL RECORD</h2>
                </div>
                
                <div class="chrono-timeline">
                    ${sorted.map(e => `
                        <div class="chrono-event ${e.critical ? 'critical' : ''} ${e.category}">
                            <div class="chrono-marker">
                                <span class="chrono-year">${e.year}</span>
                                ${e.month ? `<span class="chrono-date">${e.month}/${e.day || 1}</span>` : ''}
                            </div>
                            <div class="chrono-content">
                                <span class="chrono-category">${e.category}</span>
                                <span class="chrono-text">${e.event}</span>
                            </div>
                            ${e.critical ? '<span class="chrono-critical">CRITICAL</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderQuestions() {
        const { questions } = WAR_DATA;
        
        return `
            <div class="panel questions-panel">
                <div class="panel-header">
                    <h2>UNRESOLVED QUESTIONS</h2>
                    <span class="questions-count">${questions.length} critical unknowns</span>
                </div>
                
                <div class="questions-grid">
                    ${questions.filter(q => this.canAccess(q.intel)).map(q => `
                        <div class="question-card ${q.priority.toLowerCase()}">
                            <div class="question-priority">${q.priority}</div>
                            <h3 class="question-text">${q.question}</h3>
                            <div class="question-status">
                                <span class="status-label">Status:</span>
                                <span class="status-value">${q.status}</span>
                            </div>
                            <div class="question-intel">
                                <span class="intel-req">Intel ${q.intel}+ required</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                ${questions.filter(q => !this.canAccess(q.intel)).length > 0 ? `
                    <div class="questions-locked">
                        <span class="locked-icon">🔒</span>
                        <span class="locked-text">${questions.filter(q => !this.canAccess(q.intel)).length} questions require higher intel clearance</span>
                    </div>
                ` : ''}
            </div>
        `;
    }

    // =========================================
    // UTILITIES
    // =========================================

    getAccessLevel() {
        const level = this.intel;
        if (level >= 90) return { name: 'SUPREME COMMAND', class: 'supreme' };
        if (level >= 75) return { name: 'HIGH COMMAND', class: 'high' };
        if (level >= 50) return { name: 'OFFICER', class: 'officer' };
        if (level >= 30) return { name: 'OPERATIVE', class: 'operative' };
        if (level >= 15) return { name: 'INFORMANT', class: 'informant' };
        return { name: 'OUTSIDER', class: 'outsider' };
    }

    formatDate(dateObj) {
        if (!dateObj) return 'UNKNOWN';
        
        if (dateObj.monthIndex !== undefined && CALENDAR_DATA?.months?.values) {
            const month = CALENDAR_DATA.months.values[dateObj.monthIndex];
            return `${month?.name || 'Month ' + dateObj.monthIndex} ${dateObj.day}, ${dateObj.year}`;
        }
        
        return `Year ${dateObj.year || dateObj}`;
    }

    // =========================================
    // EVENT HANDLING
    // =========================================

    bindEvents() {
        if (!this.container) return;
        
        // Use a single listener for the whole container
        this.container.addEventListener('click', (e) => {
            
            // 1. Navigation
            const navBtn = e.target.closest('.nav-sector');
            if (navBtn) {
                const panel = navBtn.dataset.panel;
                if (panel !== this.activePanel) {
                    this.activePanel = panel;
                    this.render();
                    this.bindEvents(); 
                    this.startDataStream();
                }
                return;
            }
            
            // 2. Modal Closing (X button or background click)
            if (e.target.closest('.modal-close') || e.target.classList.contains('war-modal-overlay')) {
                this.closeModal();
                return;
            }

            // 3. CHECKING FOR INTERACTIVE CLICKS (The Royal Line items)
            const interactiveItem = e.target.closest('.interactive');
            if (interactiveItem) {
                const type = interactiveItem.dataset.type;
                const id = interactiveItem.dataset.id;
                this.openDetailModal(type, id); // Call the popup function
                return;
            }
            
            // 4. Generic Expandables
            const expandable = e.target.closest('.expandable');
            if (expandable) {
                expandable.classList.toggle('expanded');
                return;
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }

    closeModal() {
        const modal = this.container.querySelector('#war-room-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    openDetailModal(type, id) {
        // Look up the data
        let data = null;
        
        if (type === 'royal') data = WAR_DATA.dynasty.royalLine.find(x => x.id === id);
        if (type === 'cadet') data = WAR_DATA.dynasty.cadetBranches.find(x => x.id === id);
        if (type === 'foreign') data = WAR_DATA.dynasty.foreignClaimants.find(x => x.id === id);

        if (!data) return;

        // Populate Modal
        const modal = this.container.querySelector('#war-room-modal');
        const modalBody = modal.querySelector('.modal-body');
        
        if (modal && modalBody) {
            modalBody.innerHTML = `
                <h2 style="color: var(--wr-accent); border-bottom: 1px solid #333; padding-bottom: 10px;">${data.name}</h2>
                <div style="margin-top: 15px; line-height: 1.6;">
                    <p><strong>Status:</strong> ${data.status || 'Unknown'}</p>
                    <p><strong>Role:</strong> ${data.relation || data.title || 'N/A'}</p>
                    <br>
                    <p style="color: var(--wr-text-bright);">${data.summary || data.notes || 'No description available.'}</p>
                    <br>
                    ${data.legacy ? `<p><strong>Legacy:</strong> ${data.legacy}</p>` : ''}
                    ${data.classified ? `
                        <div style="margin-top: 15px; padding: 10px; background: rgba(255,0,0,0.1); border-left: 3px solid red;">
                            <strong style="color:red;">CLASSIFIED INTEL:</strong>
                            <p>${this.canAccess(data.classified.intel) ? data.classified.text : 'ACCESS DENIED'}</p>
                        </div>
                    ` : ''}
                </div>
            `;
            modal.classList.remove('hidden');
        }
    }

    // =========================================
    // DATA STREAM ANIMATION
    // =========================================

    startDataStream() {
        const messages = [
            'SCANNING INTELLIGENCE NETWORKS...',
            'MONITORING FACTION COMMUNICATIONS...',
            'ANALYZING TERRITORIAL SHIFTS...',
            'TRACKING TROOP MOVEMENTS...',
            'PROCESSING ASSASSINATION EVIDENCE...',
            'UPDATING PROBABILITY MATRICES...',
            'DECRYPTING REGENCY TRANSMISSIONS...',
            'CORRELATING WITNESS TESTIMONY...',
            'MAPPING BLOODLINE CONNECTIONS...',
            'EVALUATING FOREIGN INTERVENTIONS...'
        ];
        
        let messageIndex = 0;
        
        const updateStream = () => {
            const streamEl = this.container?.querySelector('.stream-text');
            if (streamEl) {
                streamEl.textContent = messages[messageIndex];
                messageIndex = (messageIndex + 1) % messages.length;
            }
        };
        
        updateStream();
        setInterval(updateStream, 4000);
    }
}

// =============================================
// INITIALIZATION
// =============================================

let warRoomInstance = null;

function initWarRoom() {
    const warRoom = new WarRoomInterface();
    warRoom.init();
    warRoomInstance = warRoom;
    window.warRoomDebug = { instance: warRoom, data: WAR_DATA };
    return warRoom;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWarRoom);
} else {
    initWarRoom();
}

export { WarRoomInterface, WAR_DATA, initWarRoom };