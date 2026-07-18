
// species-workforce.js

import { SPECIES_DATA } from './species-data.js';
import { RESEARCH_CATEGORIES, RESEARCH_TO_ESTATE_MAPPING } from './research-constants.js';

// Define Labor Categories
export const LABOR_CATEGORIES = [
    { id: 'military', name: 'Military & Security', color: '#f85149' },
    { id: 'agriculture', name: 'Agriculture & Farming', color: '#3fb950' },
    { id: 'industry', name: 'Industry & Crafting', color: '#d29922' },
    { id: 'magic', name: 'Arcane & Research', color: '#a371f7' },
    { id: 'service', name: 'Service & Trade', color: '#58a6ff' },
    { id: 'ruling', name: 'Ruling & Admin', color: '#e3b341' }
];

// Define labor bias for species categories (simplifies mapping)
const LABOR_BIAS = {
    // Fantasy Base
    'dnd_human': { military: 20, agriculture: 30, industry: 20, magic: 5, service: 20, ruling: 5 },
    'dnd_elf_high': { military: 20, agriculture: 10, industry: 10, magic: 40, service: 10, ruling: 10 },
    'dnd_elf_wood': { military: 30, agriculture: 40, industry: 5, magic: 15, service: 5, ruling: 5 },
    'dnd_dwarf': { military: 30, agriculture: 5, industry: 50, magic: 5, service: 5, ruling: 5 },
    'dnd_orc': { military: 60, agriculture: 10, industry: 20, magic: 5, service: 0, ruling: 5 },
    
    // Mario World
    'toad_citizen': { military: 5, agriculture: 20, industry: 10, magic: 5, service: 55, ruling: 5 },
    'koopa': { military: 60, agriculture: 5, industry: 10, magic: 5, service: 15, ruling: 5 },
    'goomba': { military: 70, agriculture: 5, industry: 5, magic: 0, service: 15, ruling: 5 },
    
    // Modern/Sci-Fi
    'kivotos': { military: 40, agriculture: 0, industry: 10, magic: 10, service: 30, ruling: 10 }, // Students fight & study
    'internet': { military: 10, agriculture: 0, industry: 0, magic: 0, service: 80, ruling: 10 }, // Info trade
    
    // Default fallback
    'default': { military: 10, agriculture: 40, industry: 20, magic: 5, service: 20, ruling: 5 }
};

export function getBiasForSpecies(key) {
    if (key.includes('human') && !key.includes('warhammer')) return LABOR_BIAS.dnd_human;
    if (key.includes('elf')) return key.includes('high') ? LABOR_BIAS.dnd_elf_high : LABOR_BIAS.dnd_elf_wood;
    if (key.includes('dwarf')) return LABOR_BIAS.dnd_dwarf;
    if (key.includes('orc') || key.includes('greenskin')) return LABOR_BIAS.dnd_orc;
    if (key.includes('toad')) return LABOR_BIAS.toad_citizen;
    if (key.includes('koopa')) return LABOR_BIAS.koopa;
    if (key.includes('goomba')) return LABOR_BIAS.goomba;
    if (key.includes('kivotos')) return LABOR_BIAS.kivotos;
    if (key.includes('netizen') || key.includes('bot')) return LABOR_BIAS.internet;
    return LABOR_BIAS.default;
}

/**
 * Calculates tech access scores. If specificCategory is null/undefined/aggregate, averages all.
 * Otherwise, returns score for that specific category.
 */
export function calculateTechAccessByEstate(globalTechAverages, specificCategory = 'aggregate') {
    const estateAccess = {
        nobility: 0, clergy: 0, burghers: 0, commoners: 0, indentured: 0, slaves: 0
    };

    // Specific Category Calculation
    if (specificCategory !== 'aggregate' && RESEARCH_CATEGORIES.includes(specificCategory)) {
        const techLevel = globalTechAverages[specificCategory]; // 1 to 10
        
        Object.keys(estateAccess).forEach(estateKey => {
            const accessFactor = RESEARCH_TO_ESTATE_MAPPING[specificCategory]?.[estateKey] || 0.1;
            // Direct score for this category
            // Scaling: Level (1-10) * Factor (0-1) * 10 to get a 0-100 scale feel on chart
            estateAccess[estateKey] = techLevel * accessFactor * 2; 
        });
        
        return estateAccess;
    }

    // Aggregate Calculation (Average of all)
    Object.keys(estateAccess).forEach(estateKey => {
        let totalScore = 0;
        let count = 0;

        RESEARCH_CATEGORIES.forEach(cat => {
            const techLevel = globalTechAverages[cat]; // 1 to 10
            const accessFactor = RESEARCH_TO_ESTATE_MAPPING[cat]?.[estateKey] || 0.1; // Default low access

            totalScore += (techLevel * accessFactor);
            count++;
        });
        
        // Normalize to approx 0-10 scale for display
        estateAccess[estateKey] = (totalScore / count) * 2; 
    });

    return estateAccess;
}

export function renderWorkforceData(data) {
    const container = document.getElementById('workforce-container');
    if (!container) return;

    container.innerHTML = ''; // Clear previous

    // Aggregate total workforce numbers
    const workforceTotals = {
        military: 0, agriculture: 0, industry: 0, magic: 0, service: 0, ruling: 0
    };

    Object.entries(data.totalBySpecies).forEach(([key, count]) => {
        if (count <= 0) return;
        const bias = getBiasForSpecies(key);
        
        // Normalize bias to 100% just in case
        const totalBias = Object.values(bias).reduce((a, b) => a + b, 0);
        
        for (const cat of LABOR_CATEGORIES) {
            const share = (bias[cat.id] / totalBias) * count;
            workforceTotals[cat.id] += share;
        }
    });

    // Find max for scaling
    const maxVal = Math.max(...Object.values(workforceTotals));

    // Create the bars
    LABOR_CATEGORIES.forEach(cat => {
        const val = Math.round(workforceTotals[cat.id]);
        const percentage = data.grandTotal > 0 ? ((val / data.grandTotal) * 100).toFixed(1) : 0;
        const widthPercent = maxVal > 0 ? (val / maxVal) * 100 : 0;

        const row = document.createElement('div');
        row.className = 'workforce-row';
        row.innerHTML = `
            <div class="workforce-label">
                <span>${cat.name}</span>
                <span class="workforce-count">${val.toLocaleString()} (${percentage}%)</span>
            </div>
            <div class="workforce-bar-bg">
                <div class="workforce-bar-fill" style="width: ${widthPercent}%; background-color: ${cat.color};"></div>
            </div>
        `;
        container.appendChild(row);
    });
}
