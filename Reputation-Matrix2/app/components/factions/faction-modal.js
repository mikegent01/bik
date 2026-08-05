// faction-modal.js - Dynamic Faction Detail Modal

import { getFaction, getAllFactions, getFactionColor, getFactionIcon } from '../../../systems/faction-registry.js';
import { VALUE_AXES, getFactionValues } from '../../pages/societal-values/societal-values.js';
import { MAP_DATA } from '../../../map-data.js';

// ============================================
// STATE
// ============================================

let currentFactionId = null;
let modalVisible = false;
let activeTab = 'overview';
function shouldExcludeFaction(factionId, faction) {
    if (!factionId) return true;
    
    const idLower = String(factionId).toLowerCase().trim();
    
    // Excluded IDs
    const excludedPatterns = [
        'unaligned',
        'independent',
        'none',
        'neutral',
        'unknown',
        'n/a',
        'na',
        'null',
        'undefined'
    ];
    
    // Check if ID matches or contains excluded patterns
    for (const pattern of excludedPatterns) {
        if (idLower === pattern || idLower.includes(pattern)) {
            return true;
        }
    }
    
    // Check faction name
    if (faction) {
        const name = String(faction.name || '').toLowerCase();
        for (const pattern of excludedPatterns) {
            if (name.includes(pattern)) {
                return true;
            }
        }
        
        // Also exclude "no faction" type names
        if (name === 'none' || name.includes('no faction')) {
            return true;
        }
    }
    
    return false;
}

// ============================================
// DATA FUNCTIONS
// ============================================

/**
 * Get all POIs controlled by a faction
 */
function getFactionPOIs(factionId) {
    if (!MAP_DATA) return [];
    
    const pois = [];
    Object.entries(MAP_DATA).forEach(([regionId, region]) => {
        // Only process _full regions to avoid double-counting
        if (!regionId.endsWith('_full')) return;
        
        const regionPois = region.pointsOfInterest || [];
        const cleanRegionName = (region.name || regionId).replace(' (Full)', '');
        
        regionPois.forEach(poi => {
            if (poi.factionId === factionId) {
                pois.push({
                    ...poi,
                    regionId,
                    regionName: cleanRegionName
                });
            }
        });
    });
    
    return pois.sort((a, b) => 
        (b.military_strength || b.militaryStrength || 0) - 
        (a.military_strength || a.militaryStrength || 0)
    );
}
/**
 * Get regions where faction has presence
 */
function getFactionRegions(factionId) {
    if (!MAP_DATA) return [];
    
    const regions = [];
    Object.entries(MAP_DATA).forEach(([regionId, region]) => {
        // Only process _full regions
        if (!regionId.endsWith('_full')) return;
        
        const regionPois = region.pointsOfInterest || [];
        const factionPois = regionPois.filter(poi => poi.factionId === factionId);
        
        if (factionPois.length > 0) {
            const totalMilitary = factionPois.reduce((sum, p) => 
                sum + (p.military_strength || p.militaryStrength || 0), 0);
            const totalEconomic = factionPois.reduce((sum, p) => 
                sum + (p.economic_value || p.economicValue || 0), 0);
            const totalPopulation = factionPois.reduce((sum, p) => 
                sum + (p.population || 0), 0);
            
            // Clean the name - remove "(Full)" suffix
            const cleanName = (region.name || regionId).replace(' (Full)', '');
            
            regions.push({
                id: regionId,
                name: cleanName,
                terrain: region.terrain,
                poiCount: factionPois.length,
                totalPois: regionPois.length,
                military: totalMilitary,
                economic: totalEconomic,
                population: totalPopulation,
                controlPercent: Math.round((factionPois.length / regionPois.length) * 100)
            });
        }
    });
    
    return regions.sort((a, b) => b.controlPercent - a.controlPercent);
}
/**
 * Get faction aggregate stats
 */
function getFactionStats(factionId) {
    const pois = getFactionPOIs(factionId);
    const regions = getFactionRegions(factionId);
    
    // Calculate totals from POIs
    const totalMilitary = pois.reduce((sum, p) => 
        sum + (p.military_strength || p.militaryStrength || 0), 0);
    const totalEconomic = pois.reduce((sum, p) => 
        sum + (p.economic_value || p.economicValue || 0), 0);
    const totalPolitical = pois.reduce((sum, p) => 
        sum + (p.political_influence || p.politicalInfluence || 0), 0);
    const totalPopulation = pois.reduce((sum, p) => 
        sum + (p.population || 0), 0);
    
    return {
        totalPOIs: pois.length,
        totalRegions: regions.length,
        totalMilitary,
        totalEconomic,
        totalPolitical,
        totalPopulation,
        dominatedRegions: regions.filter(r => r.controlPercent > 50).length,
        capitalCity: pois.find(p => 
            p.type === 'capital' || 
            p.type === 'capital_city' || 
            p.isCapital
        ),
        strongestPOI: pois[0],
        pois,
        regions
    };
}
/**
 * Find allied and rival factions based on values
 */
/**
 * Find allied and rival factions based on values
 */
function getFactionRelations(factionId) {
    const targetValues = getFactionValues(factionId);
    if (!targetValues) return { allies: [], rivals: [], neutral: [] };
    
    const allFactions = getAllFactions();
    const relations = [];
    
    Object.entries(allFactions).forEach(([id, faction]) => {
        // Skip self and excluded factions
        if (id === factionId) return;
        if (shouldExcludeFaction(id, faction)) return;
        
        const values = getFactionValues(id);
        if (!values) return;
        
        let totalDiff = 0;
        let count = 0;
        let extremeConflicts = 0;      // Count of major disagreements (50+ diff)
        let strongConflicts = 0;        // Count of significant disagreements (35+ diff)
        let strongAgreements = 0;       // Count of strong agreements (15 or less diff)
        let biggestDifferences = [];
        let biggestAgreements = [];
        let maxSingleDiff = 0;          // Track the worst single disagreement
        
        Object.entries(VALUE_AXES).forEach(([axisId, axis]) => {
            const targetVal = targetValues[axisId] || 50;
            const otherVal = values[axisId] || 50;
            const diff = Math.abs(targetVal - otherVal);
            
            totalDiff += diff;
            count++;
            maxSingleDiff = Math.max(maxSingleDiff, diff);
            
            // Count conflict/agreement levels
            if (diff >= 50) {
                extremeConflicts++;
                biggestDifferences.push({ axis, diff, targetVal, otherVal });
            } else if (diff >= 35) {
                strongConflicts++;
                biggestDifferences.push({ axis, diff, targetVal, otherVal });
            }
            
            if (diff <= 15) {
                strongAgreements++;
                biggestAgreements.push({ axis, diff, targetVal, otherVal });
            }
        });
        
        const avgDiff = count > 0 ? totalDiff / count : 50;
        
        // Calculate base compatibility
        let compatibility = Math.round(100 - avgDiff);
        
        // Apply penalties for extreme conflicts
        // Even one extreme conflict (50+ diff) should heavily impact relations
        if (extremeConflicts >= 3) {
            compatibility -= 30;  // Fundamental opposition
        } else if (extremeConflicts >= 2) {
            compatibility -= 20;  // Major opposition
        } else if (extremeConflicts >= 1) {
            compatibility -= 12;  // Significant tension
        }
        
        // Apply smaller penalties for strong conflicts
        if (strongConflicts >= 3) {
            compatibility -= 10;
        } else if (strongConflicts >= 2) {
            compatibility -= 5;
        }
        
        // Bonus for strong agreements (but smaller than penalties)
        if (strongAgreements >= 4) {
            compatibility += 8;
        } else if (strongAgreements >= 3) {
            compatibility += 4;
        }
        
        // If there's one massive disagreement (70+), it dominates the relationship
        if (maxSingleDiff >= 70) {
            compatibility = Math.min(compatibility, 35);  // Cap at rivalry
        } else if (maxSingleDiff >= 60) {
            compatibility = Math.min(compatibility, 45);  // Cap at tension
        }
        
        // Clamp compatibility to 0-100
        compatibility = Math.max(0, Math.min(100, compatibility));
        
        relations.push({
            id,
            faction,
            compatibility,
            avgDiff,
            extremeConflicts,
            strongConflicts,
            strongAgreements,
            maxSingleDiff,
            biggestDifferences: biggestDifferences.sort((a, b) => b.diff - a.diff).slice(0, 3),
            biggestAgreements: biggestAgreements.sort((a, b) => a.diff - b.diff).slice(0, 3)
        });
    });
    
    // Sort by compatibility
    relations.sort((a, b) => b.compatibility - a.compatibility);
    
    // Stricter thresholds:
    // Allies: >= 70% compatibility (was 55%)
    // Rivals: <= 35% compatibility (was 45%)
    // Neutral: everything in between (35-70%)
    
    const allies = relations.filter(r => r.compatibility >= 70);
    const rivals = relations.filter(r => r.compatibility <= 35);
    const neutral = relations.filter(r => r.compatibility > 35 && r.compatibility < 70);
    
    return {
        allies: allies.slice(0, 5),      // Fewer, more meaningful allies
        rivals: rivals.slice(0, 6),      // Show more rivals
        neutral: neutral.slice(0, 5)     // Some neutral
    };
}
// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Render modal header
 */
function renderModalHeader(faction) {
    return `
        <div class="fm-header" style="--faction-color: ${faction.color || '#666'};">
            <div class="fm-header-bg" style="background: linear-gradient(135deg, ${faction.color || '#666'}40, transparent);"></div>
            <div class="fm-header-content">
                <div class="fm-icon-wrapper">
                    <span class="fm-icon" style="background: ${faction.color || '#666'};">
                        ${faction.icon || '🏴'}
                    </span>
                </div>
                <div class="fm-title-section">
                    <h2 class="fm-title">${faction.name || 'Unknown Faction'}</h2>
                    <p class="fm-subtitle">${faction.type || 'Organization'} ${faction.region ? `• ${faction.region}` : ''}</p>
                </div>
                <button class="fm-close-btn" data-action="close">✕</button>
            </div>
        </div>
    `;
}

/**
 * Render tab navigation
 */
function renderModalTabs() {
    const tabs = [
        { id: 'overview', label: '📋 Overview', icon: '📋' },
        { id: 'values', label: '⚖️ Values', icon: '⚖️' },
        { id: 'territory', label: '🗺️ Territory', icon: '🗺️' },
        { id: 'relations', label: '🤝 Relations', icon: '🤝' },
        { id: 'military', label: '⚔️ Military', icon: '⚔️' }
    ];
    
    return `
        <div class="fm-tabs">
            ${tabs.map(tab => `
                <button class="fm-tab ${activeTab === tab.id ? 'active' : ''}" data-tab="${tab.id}">
                    <span class="fm-tab-icon">${tab.icon}</span>
                    <span class="fm-tab-label">${tab.label.split(' ')[1]}</span>
                </button>
            `).join('')}
        </div>
    `;
}

/**
 * Render overview tab
 */
function renderOverviewTab(faction, stats) {
    return `
        <div class="fm-tab-content" data-content="overview">
            <!-- Quick Stats -->
            <div class="fm-stats-grid">
                <div class="fm-stat-card">
                    <span class="fm-stat-icon">📍</span>
                    <span class="fm-stat-value">${stats.totalPOIs}</span>
                    <span class="fm-stat-label">Locations</span>
                </div>
                <div class="fm-stat-card">
                    <span class="fm-stat-icon">🗺️</span>
                    <span class="fm-stat-value">${stats.totalRegions}</span>
                    <span class="fm-stat-label">Regions</span>
                </div>
                <div class="fm-stat-card">
                    <span class="fm-stat-icon">⚔️</span>
                    <span class="fm-stat-value">${stats.totalMilitary.toLocaleString()}</span>
                    <span class="fm-stat-label">Military</span>
                </div>
                <div class="fm-stat-card">
                    <span class="fm-stat-icon">💰</span>
                    <span class="fm-stat-value">${stats.totalEconomic.toLocaleString()}</span>
                    <span class="fm-stat-label">Economic</span>
                </div>
                <div class="fm-stat-card">
                    <span class="fm-stat-icon">🏛️</span>
                    <span class="fm-stat-value">${stats.totalPolitical.toLocaleString()}</span>
                    <span class="fm-stat-label">Political</span>
                </div>
                <div class="fm-stat-card">
                    <span class="fm-stat-icon">👥</span>
                    <span class="fm-stat-value">${stats.totalPopulation.toLocaleString()}</span>
                    <span class="fm-stat-label">Population</span>
                </div>
            </div>
            
            <!-- Description -->
            <div class="fm-section">
                <h3 class="fm-section-title">📜 Description</h3>
                <p class="fm-description">${faction.description || faction.lore || 'No detailed information available for this faction.'}</p>
            </div>
            
            <!-- Key Info Grid -->
            <div class="fm-info-grid">
                ${faction.leader ? `
                    <div class="fm-info-item">
                        <span class="fm-info-label">👤 Leader</span>
                        <span class="fm-info-value">${faction.leader}</span>
                    </div>
                ` : ''}
                ${faction.capital || stats.capitalCity ? `
                    <div class="fm-info-item">
                        <span class="fm-info-label">🏰 Capital</span>
                        <span class="fm-info-value">${faction.capital || stats.capitalCity?.name || 'Unknown'}</span>
                    </div>
                ` : ''}
                ${faction.government ? `
                    <div class="fm-info-item">
                        <span class="fm-info-label">🏛️ Government</span>
                        <span class="fm-info-value">${faction.government}</span>
                    </div>
                ` : ''}
                ${faction.religion ? `
                    <div class="fm-info-item">
                        <span class="fm-info-label">⛪ Religion</span>
                        <span class="fm-info-value">${faction.religion}</span>
                    </div>
                ` : ''}
                ${faction.culture ? `
                    <div class="fm-info-item">
                        <span class="fm-info-label">🎭 Culture</span>
                        <span class="fm-info-value">${faction.culture}</span>
                    </div>
                ` : ''}
                ${faction.primaryRace || faction.species ? `
                    <div class="fm-info-item">
                        <span class="fm-info-label">👥 Primary Race</span>
                        <span class="fm-info-value">${faction.primaryRace || faction.species}</span>
                    </div>
                ` : ''}
                ${faction.founded ? `
                    <div class="fm-info-item">
                        <span class="fm-info-label">📅 Founded</span>
                        <span class="fm-info-value">${faction.founded}</span>
                    </div>
                ` : ''}
                ${faction.motto ? `
                    <div class="fm-info-item full-width">
                        <span class="fm-info-label">📜 Motto</span>
                        <span class="fm-info-value italic">"${faction.motto}"</span>
                    </div>
                ` : ''}
            </div>
            
            <!-- Tags -->
            ${faction.tags && faction.tags.length > 0 ? `
                <div class="fm-section">
                    <h3 class="fm-section-title">🏷️ Traits</h3>
                    <div class="fm-tags">
                        ${faction.tags.map(tag => `
                            <span class="fm-tag">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

/**
 * Render values tab
 */
function renderValuesTab(faction, factionId) {
    const values = getFactionValues(factionId);
    if (!values) {
        return `
            <div class="fm-tab-content" data-content="values">
                <p class="fm-no-data">No value data available for this faction.</p>
            </div>
        `;
    }
    
    return `
        <div class="fm-tab-content" data-content="values">
            <div class="fm-section">
                <h3 class="fm-section-title">⚖️ Ideological Profile</h3>
                <p class="fm-section-desc">This faction's position on key societal values and beliefs.</p>
            </div>
            
            <div class="fm-values-list">
                ${Object.values(VALUE_AXES).map(axis => {
                    const value = values[axis.id] || 50;
                    const isLeft = value < 40;
                    const isRight = value > 60;
                    const stance = isLeft ? axis.leftLabel : isRight ? axis.rightLabel : 'Balanced';
                    const stanceColor = value < 50 ? axis.leftColor : axis.rightColor;
                    
                    return `
                        <div class="fm-value-row">
                            <div class="fm-value-header">
                                <span class="fm-value-name">${axis.name}</span>
                                <span class="fm-value-stance" style="color: ${stanceColor};">${stance}</span>
                            </div>
                            <div class="fm-value-bar-container">
                                <div class="fm-value-label left" style="color: ${axis.leftColor};">
                                    ${axis.leftIcon} ${axis.leftLabel}
                                </div>
                                <div class="fm-value-bar">
                                    <div class="fm-value-track" style="
                                        background: linear-gradient(to right, ${axis.leftColor}, #374151, ${axis.rightColor});
                                    ">
                                        <div class="fm-value-center-line"></div>
                                        <div class="fm-value-marker" style="
                                            left: ${value}%;
                                            background: ${stanceColor};
                                            box-shadow: 0 0 10px ${stanceColor};
                                        ">
                                            <span class="fm-value-number">${value}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="fm-value-label right" style="color: ${axis.rightColor};">
                                    ${axis.rightLabel} ${axis.rightIcon}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            
            <!-- Value Summary -->
            <div class="fm-value-summary">
                <h4>📊 Value Summary</h4>
                <div class="fm-value-summary-grid">
                    ${generateValueSummary(values)}
                </div>
            </div>
        </div>
    `;
}

/**
 * Generate value summary text
 */
function generateValueSummary(values) {
    const summaries = [];
    
    // Find extreme values
    Object.entries(VALUE_AXES).forEach(([axisId, axis]) => {
        const value = values[axisId] || 50;
        if (value <= 20) {
            summaries.push({
                icon: axis.leftIcon,
                text: `Strongly ${axis.leftLabel}`,
                color: axis.leftColor
            });
        } else if (value >= 80) {
            summaries.push({
                icon: axis.rightIcon,
                text: `Strongly ${axis.rightLabel}`,
                color: axis.rightColor
            });
        }
    });
    
    if (summaries.length === 0) {
        return '<p class="fm-moderate">This faction holds relatively moderate positions across all value axes.</p>';
    }
    
    return summaries.map(s => `
        <div class="fm-summary-chip" style="border-color: ${s.color}; color: ${s.color};">
            <span>${s.icon}</span>
            <span>${s.text}</span>
        </div>
    `).join('');
}

/**
 * Render territory tab
 */
function renderTerritoryTab(faction, stats) {
    const { regions, pois } = stats;
    
    return `
        <div class="fm-tab-content" data-content="territory">
            <!-- Territory Overview -->
            <div class="fm-section">
                <h3 class="fm-section-title">🗺️ Territorial Holdings</h3>
                <div class="fm-territory-summary">
                    <div class="fm-territory-stat">
                        <span class="fm-territory-value">${regions.length}</span>
                        <span class="fm-territory-label">Regions with Presence</span>
                    </div>
                    <div class="fm-territory-stat">
                        <span class="fm-territory-value">${stats.dominatedRegions}</span>
                        <span class="fm-territory-label">Regions Dominated (>50%)</span>
                    </div>
                    <div class="fm-territory-stat">
                        <span class="fm-territory-value">${pois.length}</span>
                        <span class="fm-territory-label">Total Locations</span>
                    </div>
                </div>
            </div>
            
            <!-- Regions List -->
            <div class="fm-section">
                <h3 class="fm-section-title">📍 Regions</h3>
                ${regions.length > 0 ? `
                    <div class="fm-regions-list">
                        ${regions.map(region => `
                            <div class="fm-region-card ${region.controlPercent > 50 ? 'dominated' : ''}">
                                <div class="fm-region-header">
                                    <span class="fm-region-name">${region.name}</span>
                                    <span class="fm-region-control ${region.controlPercent > 50 ? 'high' : region.controlPercent > 25 ? 'medium' : 'low'}">
                                        ${region.controlPercent}% control
                                    </span>
                                </div>
                                <div class="fm-region-bar">
                                    <div class="fm-region-fill" style="width: ${region.controlPercent}%; background: ${faction.color || '#3b82f6'};"></div>
                                </div>
                                <div class="fm-region-stats">
                                    <span>📍 ${region.poiCount}/${region.totalPois} locations</span>
                                    <span>⚔️ ${region.military}</span>
                                    <span>💰 ${region.economic}</span>
                                    <span>👥 ${region.population.toLocaleString()}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : '<p class="fm-no-data">No territorial data available.</p>'}
            </div>
            
            <!-- Key Locations -->
            <div class="fm-section">
                <h3 class="fm-section-title">🏰 Key Locations</h3>
                ${pois.length > 0 ? `
                    <div class="fm-pois-list">
                        ${pois.slice(0, 10).map(poi => `
                            <div class="fm-poi-card">
                                <span class="fm-poi-icon">${getPoiIcon(poi.type)}</span>
                                <div class="fm-poi-info">
                                    <span class="fm-poi-name">${poi.name}</span>
                                    <span class="fm-poi-meta">${poi.type || 'Location'} • ${poi.regionName}</span>
                                </div>
                                <div class="fm-poi-stats">
                                    <span title="Military">⚔️ ${poi.military_strength || 0}</span>
                                    <span title="Economic">💰 ${poi.economic_value || 0}</span>
                                    <span title="Population">👥 ${(poi.population || 0).toLocaleString()}</span>
                                </div>
                            </div>
                        `).join('')}
                        ${pois.length > 10 ? `
                            <p class="fm-more-items">+ ${pois.length - 10} more locations</p>
                        ` : ''}
                    </div>
                ` : '<p class="fm-no-data">No locations recorded.</p>'}
            </div>
        </div>
    `;
}

/**
 * Render relations tab
 */
/**
 * Render relations tab
 */
function renderRelationsTab(faction, factionId) {
    const relations = getFactionRelations(factionId);
    
    // Calculate relationship summary
    const allyCount = relations.allies.length;
    const rivalCount = relations.rivals.length;
    const neutralCount = relations.neutral.length;
    
    return `
        <div class="fm-tab-content" data-content="relations">
            <!-- Relations Summary -->
            <div class="fm-relations-summary">
                <div class="fm-rel-stat allies">
                    <span class="fm-rel-count">${allyCount}</span>
                    <span class="fm-rel-label">Allies</span>
                </div>
                <div class="fm-rel-stat neutral">
                    <span class="fm-rel-count">${neutralCount}</span>
                    <span class="fm-rel-label">Neutral</span>
                </div>
                <div class="fm-rel-stat rivals">
                    <span class="fm-rel-count">${rivalCount}</span>
                    <span class="fm-rel-label">Rivals</span>
                </div>
            </div>
            
            <!-- Allies -->
            <div class="fm-section">
                <h3 class="fm-section-title">🤝 Allies</h3>
                <p class="fm-section-desc">Factions with strongly aligned values (70%+ compatibility)</p>
                ${relations.allies.length > 0 ? `
                    <div class="fm-relations-list">
                        ${relations.allies.map(r => renderRelationCard(r, 'ally')).join('')}
                    </div>
                ` : '<p class="fm-no-data">No true allies. This faction\'s values are too distinct for close partnerships.</p>'}
            </div>
            
            <!-- Neutral -->
            <div class="fm-section">
                <h3 class="fm-section-title">😐 Neutral Relations</h3>
                <p class="fm-section-desc">Factions with mixed compatibility (35-70%)</p>
                ${relations.neutral.length > 0 ? `
                    <div class="fm-relations-list">
                        ${relations.neutral.map(r => renderRelationCard(r, 'neutral')).join('')}
                    </div>
                ` : '<p class="fm-no-data">Relations tend to be clearly aligned or opposed.</p>'}
            </div>
            
            <!-- Rivals -->
            <div class="fm-section">
                <h3 class="fm-section-title">⚔️ Rivals & Enemies</h3>
                <p class="fm-section-desc">Factions with opposing values (35% or less compatibility)</p>
                ${relations.rivals.length > 0 ? `
                    <div class="fm-relations-list">
                        ${relations.rivals.map(r => renderRelationCard(r, 'rival')).join('')}
                    </div>
                ` : '<p class="fm-no-data">No major rivals identified.</p>'}
            </div>
        </div>
    `;
}
/**
 * Render a relation card
 */

/**
 * Render a relation card with more detail
 */
function renderRelationCard(relation, type) {
    const statusColors = {
        ally: '#22c55e',
        neutral: '#f59e0b',
        rival: '#ef4444'
    };
    
    // Determine relationship strength label based on new metrics
    let strengthLabel = '';
    if (type === 'ally') {
        if (relation.compatibility >= 85) strengthLabel = 'Natural Allies';
        else if (relation.compatibility >= 77) strengthLabel = 'Strong Partners';
        else strengthLabel = 'Friendly Relations';
    } else if (type === 'rival') {
        if (relation.compatibility <= 15) strengthLabel = 'Mortal Enemies';
        else if (relation.compatibility <= 25) strengthLabel = 'Bitter Rivals';
        else strengthLabel = 'Opposed';
    } else {
        if (relation.extremeConflicts > 0) strengthLabel = 'Tense Neutrality';
        else if (relation.strongAgreements >= 2) strengthLabel = 'Cordial';
        else strengthLabel = 'Indifferent';
    }
    
    // Show key differences or agreements
    let detailHTML = '';
    if (type === 'rival' && relation.biggestDifferences && relation.biggestDifferences.length > 0) {
        const conflictText = relation.extremeConflicts >= 2 ? 'Fundamental conflicts:' : 'Key conflicts:';
        detailHTML = `
            <div class="fm-relation-details">
                <span class="fm-relation-detail-label">${conflictText}</span>
                ${relation.biggestDifferences.slice(0, 2).map(d => `
                    <span class="fm-relation-conflict" title="${d.axis.name}: ${d.diff} point difference">
                        ${d.axis.leftIcon}↔${d.axis.rightIcon}
                    </span>
                `).join('')}
            </div>
        `;
    } else if (type === 'ally' && relation.biggestAgreements && relation.biggestAgreements.length > 0) {
        detailHTML = `
            <div class="fm-relation-details">
                <span class="fm-relation-detail-label">Shared values:</span>
                ${relation.biggestAgreements.slice(0, 2).map(a => `
                    <span class="fm-relation-agreement" title="${a.axis.name}: Only ${a.diff} point difference">
                        ${a.axis.leftIcon}${a.axis.rightIcon}
                    </span>
                `).join('')}
            </div>
        `;
    } else if (type === 'neutral') {
        // Show why they're neutral
        if (relation.extremeConflicts > 0 && relation.strongAgreements > 0) {
            detailHTML = `
                <div class="fm-relation-details">
                    <span class="fm-relation-detail-label">Mixed: agrees on some, conflicts on others</span>
                </div>
            `;
        }
    }
    
    return `
        <div class="fm-relation-card ${type}" data-faction="${relation.id}">
            <div class="fm-relation-icon" style="background: ${relation.faction?.color || '#666'};">
                ${relation.faction?.icon || '❓'}
            </div>
            <div class="fm-relation-info">
                <span class="fm-relation-name">${relation.faction?.name || relation.id}</span>
                <span class="fm-relation-type">${relation.faction?.type || 'Faction'}</span>
                ${detailHTML}
            </div>
            <div class="fm-relation-compat">
                <div class="fm-compat-bar">
                    <div class="fm-compat-fill" style="
                        width: ${relation.compatibility}%;
                        background: ${statusColors[type]};
                    "></div>
                </div>
                <span class="fm-compat-value" style="color: ${statusColors[type]};">
                    ${relation.compatibility}%
                </span>
                <span class="fm-relation-strength">${strengthLabel}</span>
            </div>
            <button class="fm-relation-view" data-faction="${relation.id}">View →</button>
        </div>
    `;
}/**
 * Render military tab
 */
function renderMilitaryTab(faction, stats) {
    const { pois } = stats;
    
    // Military building type categories
    const militaryTypes = ['fortress', 'castle', 'watchtower', 'barracks', 'siege_camp'];
    const campTypes = ['outpost', 'bandit_camp', 'siege_camp', 'listening_post'];
    const cityTypes = ['capital_city', 'major_city', 'town', 'city', 'capital'];
    const navalTypes = ['port', 'shipwreck', 'space_station', 'generation_ship'];
    const magicTypes = ['mages_tower', 'ley_line', 'ancient_circle', 'portal'];
    
    // Count by type (check both 'type' and 'buildingType' fields)
    const getPoiType = (poi) => (poi.type || poi.buildingType || '').toLowerCase().replace(/[\s-]/g, '_');
    
    const fortresses = pois.filter(p => {
        const type = getPoiType(p);
        return militaryTypes.some(t => type.includes(t));
    });
    
    const camps = pois.filter(p => {
        const type = getPoiType(p);
        return campTypes.some(t => type.includes(t));
    });
    
    const garrisonedCities = pois.filter(p => {
        const type = getPoiType(p);
        const isCityType = cityTypes.some(t => type.includes(t));
        const hasMilitary = (p.military_strength || p.militaryStrength || 0) > 0;
        return isCityType && hasMilitary;
    });
    
    const navalBases = pois.filter(p => {
        const type = getPoiType(p);
        return navalTypes.some(t => type.includes(t));
    });
    
    const magicSites = pois.filter(p => {
        const type = getPoiType(p);
        return magicTypes.some(t => type.includes(t));
    });
    
    // Get POIs with military strength, sorted
    const militaryPois = pois
        .filter(p => (p.military_strength || p.militaryStrength || 0) > 0)
        .sort((a, b) => (b.military_strength || b.militaryStrength || 0) - (a.military_strength || a.militaryStrength || 0));
    
    // Calculate total military
    const totalMilitary = pois.reduce((sum, p) => sum + (p.military_strength || p.militaryStrength || 0), 0);
    
    return `
        <div class="fm-tab-content" data-content="military">
            <!-- Military Overview -->
            <div class="fm-section">
                <h3 class="fm-section-title">⚔️ Military Overview</h3>
                <div class="fm-military-summary">
                    <div class="fm-military-stat main">
                        <span class="fm-military-value">${totalMilitary.toLocaleString()}</span>
                        <span class="fm-military-label">Total Military Strength</span>
                    </div>
                    <div class="fm-military-stat">
                        <span class="fm-military-icon">🏰</span>
                        <span class="fm-military-value">${fortresses.length}</span>
                        <span class="fm-military-label">Fortresses & Castles</span>
                    </div>
                    <div class="fm-military-stat">
                        <span class="fm-military-icon">🏕️</span>
                        <span class="fm-military-value">${camps.length}</span>
                        <span class="fm-military-label">Outposts & Camps</span>
                    </div>
                    <div class="fm-military-stat">
                        <span class="fm-military-icon">🏙️</span>
                        <span class="fm-military-value">${garrisonedCities.length}</span>
                        <span class="fm-military-label">Garrisoned Cities</span>
                    </div>
                    ${navalBases.length > 0 ? `
                        <div class="fm-military-stat">
                            <span class="fm-military-icon">⚓</span>
                            <span class="fm-military-value">${navalBases.length}</span>
                            <span class="fm-military-label">Naval Bases</span>
                        </div>
                    ` : ''}
                    ${magicSites.length > 0 ? `
                        <div class="fm-military-stat">
                            <span class="fm-military-icon">🧙</span>
                            <span class="fm-military-value">${magicSites.length}</span>
                            <span class="fm-military-label">Magic Sites</span>
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <!-- Military Installations Breakdown -->
            ${fortresses.length > 0 || camps.length > 0 ? `
                <div class="fm-section">
                    <h3 class="fm-section-title">🏰 Military Installations</h3>
                    <div class="fm-installations-grid">
                        ${fortresses.slice(0, 6).map(poi => `
                            <div class="fm-installation-card fortress">
                                <span class="fm-install-icon">${getPoiIcon(getPoiType(poi))}</span>
                                <div class="fm-install-info">
                                    <span class="fm-install-name">${poi.name}</span>
                                    <span class="fm-install-type">${poi.type || poi.buildingType || 'Fortress'}</span>
                                </div>
                                <span class="fm-install-strength">⚔️ ${poi.military_strength || poi.militaryStrength || 0}</span>
                            </div>
                        `).join('')}
                        ${camps.slice(0, 4).map(poi => `
                            <div class="fm-installation-card outpost">
                                <span class="fm-install-icon">${getPoiIcon(getPoiType(poi))}</span>
                                <div class="fm-install-info">
                                    <span class="fm-install-name">${poi.name}</span>
                                    <span class="fm-install-type">${poi.type || poi.buildingType || 'Outpost'}</span>
                                </div>
                                <span class="fm-install-strength">⚔️ ${poi.military_strength || poi.militaryStrength || 0}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- Military Power Distribution -->
            <div class="fm-section">
                <h3 class="fm-section-title">💪 Power Distribution</h3>
                ${militaryPois.length > 0 ? `
                    <div class="fm-power-chart">
                        ${militaryPois.slice(0, 8).map((poi, index) => {
                            const maxMil = militaryPois[0]?.military_strength || militaryPois[0]?.militaryStrength || 1;
                            const poiMil = poi.military_strength || poi.militaryStrength || 0;
                            const percent = (poiMil / maxMil) * 100;
                            return `
                                <div class="fm-power-bar">
                                    <div class="fm-power-label">
                                        <span class="fm-power-rank">#${index + 1}</span>
                                        <span class="fm-power-icon">${getPoiIcon(getPoiType(poi))}</span>
                                        <span class="fm-power-name">${poi.name}</span>
                                    </div>
                                    <div class="fm-power-track">
                                        <div class="fm-power-fill" style="
                                            width: ${percent}%;
                                            background: ${faction.color || '#ef4444'};
                                        "></div>
                                    </div>
                                    <span class="fm-power-value">${poiMil.toLocaleString()}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : '<p class="fm-no-data">No military installations recorded.</p>'}
            </div>
            
            <!-- Force Composition -->
            <div class="fm-section">
                <h3 class="fm-section-title">📊 Force Composition</h3>
                <div class="fm-composition">
                    ${renderForceComposition(pois)}
                </div>
            </div>
            
            <!-- Strategic Assessment -->
            <div class="fm-section">
                <h3 class="fm-section-title">🎯 Strategic Assessment</h3>
                <div class="fm-assessment">
                    ${generateStrategicAssessment(faction, stats, { fortresses, camps, garrisonedCities, navalBases, magicSites })}
                </div>
            </div>
        </div>
    `;
}
function renderForceComposition(pois) {
    const composition = {};
    
    pois.forEach(poi => {
        const type = (poi.type || poi.buildingType || 'unknown').toLowerCase().replace(/[\s-]/g, '_');
        const mil = poi.military_strength || poi.militaryStrength || 0;
        
        if (!composition[type]) {
            composition[type] = { count: 0, military: 0, type };
        }
        composition[type].count++;
        composition[type].military += mil;
    });
    
    const sorted = Object.values(composition)
        .filter(c => c.military > 0)
        .sort((a, b) => b.military - a.military)
        .slice(0, 6);
    
    if (sorted.length === 0) {
        return '<p class="fm-no-data">No force composition data available.</p>';
    }
    
    const totalMil = sorted.reduce((sum, c) => sum + c.military, 0);
    
    return `
        <div class="fm-composition-bars">
            ${sorted.map(comp => {
                const percent = (comp.military / totalMil) * 100;
                return `
                    <div class="fm-comp-row">
                        <div class="fm-comp-label">
                            <span class="fm-comp-icon">${getPoiIcon(comp.type)}</span>
                            <span class="fm-comp-name">${formatTypeName(comp.type)}</span>
                            <span class="fm-comp-count">(${comp.count})</span>
                        </div>
                        <div class="fm-comp-bar">
                            <div class="fm-comp-fill" style="width: ${percent}%;"></div>
                        </div>
                        <span class="fm-comp-value">${comp.military.toLocaleString()} (${Math.round(percent)}%)</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}
function formatTypeName(type) {
    return type
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
/**
 * Generate strategic assessment text
 */
/**
 * Generate strategic assessment text
 */
function generateStrategicAssessment(faction, stats, installations) {
    const assessments = [];
    const { fortresses, camps, garrisonedCities, navalBases, magicSites } = installations;
    const totalMilitary = stats.totalMilitary;
    const totalPOIs = stats.totalPOIs;
    const totalRegions = stats.totalRegions;
    
    // Military strength assessment - scaled to your game's values
    // Adjust these thresholds based on your world's power scale
    if (totalMilitary >= 500) {
        assessments.push({
            icon: '👑',
            title: 'Dominant Superpower',
            text: 'Possesses overwhelming military capabilities. Uncontested dominance across multiple regions.',
            type: 'positive'
        });
    } else if (totalMilitary >= 300) {
        assessments.push({
            icon: '💪',
            title: 'Major Military Power',
            text: 'Significant military capabilities with strong offensive and defensive capacity. A force to be reckoned with.',
            type: 'positive'
        });
    } else if (totalMilitary >= 150) {
        assessments.push({
            icon: '⚔️',
            title: 'Regional Power',
            text: 'Capable military force with solid territorial defense and moderate power projection.',
            type: 'positive'
        });
    } else if (totalMilitary >= 75) {
        assessments.push({
            icon: '🛡️',
            title: 'Moderate Military',
            text: 'Adequate defensive capabilities. Can hold territory but limited offensive reach.',
            type: 'neutral'
        });
    } else if (totalMilitary >= 25) {
        assessments.push({
            icon: '⚠️',
            title: 'Limited Military',
            text: 'Primarily defensive capabilities. May rely on diplomacy, alliances, or unconventional tactics.',
            type: 'warning'
        });
    } else {
        assessments.push({
            icon: '🕊️',
            title: 'Minimal Military',
            text: 'Little to no standing military forces. Relies on other means for security.',
            type: 'warning'
        });
    }
    
    // Fortress network
    if (fortresses.length >= 5) {
        assessments.push({
            icon: '🏰',
            title: 'Heavily Fortified',
            text: `Extensive network of ${fortresses.length} fortifications ensures exceptional territorial defense.`,
            type: 'positive'
        });
    } else if (fortresses.length >= 3) {
        assessments.push({
            icon: '🏰',
            title: 'Fortified Territory',
            text: `Network of ${fortresses.length} fortifications provides strong territorial defense.`,
            type: 'positive'
        });
    } else if (fortresses.length >= 1) {
        assessments.push({
            icon: '🏰',
            title: 'Some Fortifications',
            text: `${fortresses.length} fortress${fortresses.length > 1 ? 'es' : ''} anchor${fortresses.length === 1 ? 's' : ''} key defensive positions.`,
            type: 'neutral'
        });
    }
    
    // Naval power
    if (navalBases.length >= 3) {
        assessments.push({
            icon: '⚓',
            title: 'Naval Dominance',
            text: `Controls ${navalBases.length} ports/naval bases enabling major maritime operations.`,
            type: 'positive'
        });
    } else if (navalBases.length >= 1) {
        assessments.push({
            icon: '⚓',
            title: 'Naval Presence',
            text: `Access to ${navalBases.length} port${navalBases.length > 1 ? 's' : ''} enables maritime operations.`,
            type: 'neutral'
        });
    }
    
    // Magic capability
    if (magicSites.length >= 3) {
        assessments.push({
            icon: '✨',
            title: 'Arcane Powerhouse',
            text: `Control of ${magicSites.length} magical sites provides significant supernatural advantages.`,
            type: 'positive'
        });
    } else if (magicSites.length >= 1) {
        assessments.push({
            icon: '✨',
            title: 'Arcane Assets',
            text: `Access to ${magicSites.length} magical site${magicSites.length > 1 ? 's' : ''} provides supernatural advantages.`,
            type: 'neutral'
        });
    }
    
    // Garrisoned cities
    if (garrisonedCities.length >= 5) {
        assessments.push({
            icon: '🏙️',
            title: 'Urban Military Network',
            text: `${garrisonedCities.length} garrisoned cities provide manpower reserves and defensive depth.`,
            type: 'positive'
        });
    } else if (garrisonedCities.length >= 3) {
        assessments.push({
            icon: '🏙️',
            title: 'Urban Garrisons',
            text: `${garrisonedCities.length} cities maintain active garrisons for regional defense.`,
            type: 'neutral'
        });
    }
    
    // Outposts and camps
    if (camps.length >= 5) {
        assessments.push({
            icon: '🏕️',
            title: 'Extended Reach',
            text: `Network of ${camps.length} outposts enables rapid deployment and border control.`,
            type: 'positive'
        });
    }
    
    // Territorial spread assessment
    if (totalRegions >= 5) {
        assessments.push({
            icon: '🌍',
            title: 'Wide Territorial Spread',
            text: `Presence across ${totalRegions} regions provides strategic flexibility but may strain logistics.`,
            type: 'neutral'
        });
    } else if (totalRegions >= 3) {
        assessments.push({
            icon: '🗺️',
            title: 'Multi-Regional Presence',
            text: `Active in ${totalRegions} regions with room for expansion.`,
            type: 'neutral'
        });
    } else if (totalRegions === 1 && totalPOIs >= 10) {
        assessments.push({
            icon: '🎯',
            title: 'Concentrated Power',
            text: 'Forces concentrated in single region. Strong local defense but limited reach.',
            type: 'neutral'
        });
    }
    
    // Economic vs Military balance
    if (stats.totalEconomic > stats.totalMilitary * 2) {
        assessments.push({
            icon: '💰',
            title: 'Economic Superpower',
            text: 'Vast economic base could fund rapid military expansion if threatened.',
            type: 'positive'
        });
    } else if (stats.totalEconomic > stats.totalMilitary * 1.5) {
        assessments.push({
            icon: '💰',
            title: 'Economic Focus',
            text: 'Strong economic base could fund military expansion if needed.',
            type: 'neutral'
        });
    } else if (stats.totalMilitary > stats.totalEconomic * 2) {
        assessments.push({
            icon: '⚔️',
            title: 'Militarized Society',
            text: 'Military capabilities outpace economic development. Aggressive posture.',
            type: 'neutral'
        });
    }
    
    // Political influence
    if (stats.totalPolitical >= 300) {
        assessments.push({
            icon: '🏛️',
            title: 'Political Hegemon',
            text: 'Enormous political influence shapes regional and global affairs.',
            type: 'positive'
        });
    } else if (stats.totalPolitical >= 150) {
        assessments.push({
            icon: '🏛️',
            title: 'Political Powerhouse',
            text: 'Significant political influence extends beyond territorial borders.',
            type: 'positive'
        });
    }
    
    // Population base
    if (stats.totalPopulation >= 500000) {
        assessments.push({
            icon: '👥',
            title: 'Massive Population',
            text: `Population of ${stats.totalPopulation.toLocaleString()} provides vast manpower reserves.`,
            type: 'positive'
        });
    } else if (stats.totalPopulation >= 100000) {
        assessments.push({
            icon: '👥',
            title: 'Large Population',
            text: `Population of ${stats.totalPopulation.toLocaleString()} supports sustained military efforts.`,
            type: 'neutral'
        });
    }
    
    // Vulnerability checks
    if (fortresses.length === 0 && totalMilitary >= 100) {
        assessments.push({
            icon: '⚠️',
            title: 'Lacking Fortifications',
            text: 'No major fortresses detected. Territory may be vulnerable to invasion.',
            type: 'warning'
        });
    }
    
    if (totalRegions >= 3 && camps.length === 0 && fortresses.length <= 1) {
        assessments.push({
            icon: '⚠️',
            title: 'Overextended',
            text: 'Spread across multiple regions with minimal defensive infrastructure.',
            type: 'warning'
        });
    }
    
    // Fallback if no assessments
    if (assessments.length === 0) {
        assessments.push({
            icon: '❓',
            title: 'Insufficient Data',
            text: 'Not enough information to generate strategic assessment.',
            type: 'neutral'
        });
    }
    
    return assessments.map(a => `
        <div class="fm-assess-item ${a.type}">
            <span class="fm-assess-icon">${a.icon}</span>
            <div class="fm-assess-content">
                <strong>${a.title}</strong>
                <p>${a.text}</p>
            </div>
        </div>
    `).join('');
}/**
 * Get POI type icon
 */
function getPoiIcon(type) {
    const icons = {
        // Cities & Settlements
        'capital_city': '👑',
        'capital': '👑',
        'major_city': '🏙️',
        'city': '🏙️',
        'town': '🏡',
        'village': '🏘️',
        'hamlet': '🏠',
        'outpost': '🏕️',
        'ruins': '🏛️',
        
        // Military
        'fortress': '🏰',
        'castle': '🏯',
        'watchtower': '🗼',
        'barracks': '🛡️',
        'siege_camp': '⚔️',
        
        // Economy & Trade
        'port': '⚓',
        'market': '🛒',
        'marketplace': '🛒',
        'mine': '⛏️',
        'farm': '🌾',
        'workshop': '🛠️',
        'trade_post': '🏪',
        'quarry': '🪨',
        
        // Religion & Magic
        'temple': '⛪',
        'shrine': '⛩️',
        'monastery': '🛕',
        'mages_tower': '🧙',
        'mage_tower': '🧙',
        'ley_line': '✨',
        'ancient_circle': '⭕',
        
        // Nature & Geography
        'forest': '🌲',
        'mountain_pass': '⛰️',
        'mountain': '⛰️',
        'bridge': '🌉',
        'cave_entrance': '🦇',
        'cave': '🦇',
        'oasis': '🌴',
        'waterfall': '🌊',
        'volcano': '🌋',
        'swamp': '🐊',
        
        // Underworld & Danger
        'dungeon_entrance': '💀',
        'dungeon': '💀',
        'lair': '🐉',
        'bandit_camp': '🏴',
        'haunted_place': '👻',
        'battlefield': '⚔️',
        
        // Misc
        'inn': '🍺',
        'tavern': '🍺',
        'library': '📚',
        'shipwreck': '🚢',
        'landmark': '📍',
        'portal': '🌀',
        'prison': '⛓️',
        'academy': '🎓',
        'observatory': '🔭',
        
        // Space Types
        'space_station': '🛰️',
        'asteroid_field': '☄️',
        'nebula': '🌌',
        'black_hole': '⚫',
        'wormhole': '🌀',
        'comet': '💫',
        'generation_ship': '🚀',
        'listening_post': '📡',
        'cosmic_anomaly': '❓',
        'crystal_entity': '💎',
        'star_nursery': '✨'
    };
    
    // Try exact match first
    if (icons[type]) return icons[type];
    
    // Try partial match
    for (const [key, icon] of Object.entries(icons)) {
        if (type.includes(key) || key.includes(type)) {
            return icon;
        }
    }
    
    return '📍';
}

// ============================================
// MAIN MODAL RENDER
// ============================================

/**
 * Render the complete modal
 */
function renderFactionModal(factionId) {
    const faction = getFaction(factionId) || getAllFactions()[factionId];
    
    if (!faction) {
        return `
            <div class="faction-modal-overlay" data-action="close-overlay">
                <div class="faction-modal">
                    <div class="fm-error">
                        <span>❌</span>
                        <h3>Faction Not Found</h3>
                        <p>No data available for faction: ${factionId}</p>
                        <button class="fm-close-error" data-action="close">Close</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    const stats = getFactionStats(factionId);
    
    const header = renderModalHeader(faction);
    const tabs = renderModalTabs();
    
    let content = '';
    switch (activeTab) {
        case 'overview':
            content = renderOverviewTab(faction, stats);
            break;
        case 'values':
            content = renderValuesTab(faction, factionId);
            break;
        case 'territory':
            content = renderTerritoryTab(faction, stats);
            break;
        case 'relations':
            content = renderRelationsTab(faction, factionId);
            break;
        case 'military':
            content = renderMilitaryTab(faction, stats);
            break;
        default:
            content = renderOverviewTab(faction, stats);
    }
    
    return `
        <div class="faction-modal-overlay" data-action="close-overlay">
            <div class="faction-modal" data-faction="${factionId}">
                ${header}
                ${tabs}
                <div class="fm-body">
                    ${content}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// MODAL CONTROL FUNCTIONS
// ============================================

/**
 * Show the faction modal
 */
function showFactionModal(factionId) {
    currentFactionId = factionId;
    activeTab = 'overview';
    modalVisible = true;
    
    // Remove existing modal if any
    const existing = document.querySelector('.faction-modal-overlay');
    if (existing) existing.remove();
    
    // Add new modal
    document.body.insertAdjacentHTML('beforeend', renderFactionModal(factionId));
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Initialize listeners
    initModalListeners();
    
    // Animate in
    requestAnimationFrame(() => {
        const overlay = document.querySelector('.faction-modal-overlay');
        const modal = document.querySelector('.faction-modal');
        if (overlay) overlay.classList.add('visible');
        if (modal) modal.classList.add('visible');
    });
}

/**
 * Close the modal
 */
function closeFactionModal() {
    const overlay = document.querySelector('.faction-modal-overlay');
    const modal = document.querySelector('.faction-modal');
    
    if (overlay) overlay.classList.remove('visible');
    if (modal) modal.classList.remove('visible');
    
    setTimeout(() => {
        if (overlay) overlay.remove();
        document.body.style.overflow = '';
        modalVisible = false;
        currentFactionId = null;
    }, 300);
}

/**
 * Switch to a different faction
 */
function switchFaction(factionId) {
    currentFactionId = factionId;
    activeTab = 'overview';
    rerenderModal();
}

/**
 * Rerender the modal content
 */
function rerenderModal() {
    const overlay = document.querySelector('.faction-modal-overlay');
    if (!overlay || !currentFactionId) return;
    
    overlay.outerHTML = renderFactionModal(currentFactionId);
    
    requestAnimationFrame(() => {
        const newOverlay = document.querySelector('.faction-modal-overlay');
        const newModal = document.querySelector('.faction-modal');
        if (newOverlay) newOverlay.classList.add('visible');
        if (newModal) newModal.classList.add('visible');
        initModalListeners();
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

function initModalListeners() {
    const overlay = document.querySelector('.faction-modal-overlay');
    if (!overlay) return;
    
    overlay.addEventListener('click', (e) => {
        // Close on overlay click
        if (e.target.dataset.action === 'close-overlay') {
            closeFactionModal();
            return;
        }
        
        // Close button
        if (e.target.closest('[data-action="close"]')) {
            closeFactionModal();
            return;
        }
        
        // Tab switching
        const tab = e.target.closest('.fm-tab');
        if (tab) {
            activeTab = tab.dataset.tab;
            rerenderModal();
            return;
        }
        
        // View another faction
        const viewBtn = e.target.closest('.fm-relation-view');
        if (viewBtn) {
            const factionId = viewBtn.dataset.faction;
            switchFaction(factionId);
            return;
        }
        
        // Click on relation card
        const relationCard = e.target.closest('.fm-relation-card');
        if (relationCard && !e.target.closest('button')) {
            const factionId = relationCard.dataset.faction;
            switchFaction(factionId);
            return;
        }
    });
    
    // Close on Escape key
    const escHandler = (e) => {
        if (e.key === 'Escape' && modalVisible) {
            closeFactionModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// ============================================
// GLOBAL REGISTRATION
// ============================================

// Make showFactionModal available globally
window.showFactionModal = showFactionModal;
window.closeFactionModal = closeFactionModal;

// ============================================
// EXPORTS
// ============================================

export {
    showFactionModal,
    closeFactionModal,
    getFactionStats,
    getFactionPOIs,
    getFactionRegions,
    getFactionRelations
};