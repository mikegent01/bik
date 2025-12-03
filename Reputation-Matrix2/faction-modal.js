// faction-modal.js - Dynamic Faction Detail Modal

import { getFaction, getAllFactions, getFactionColor, getFactionIcon } from './systems/faction-registry.js';
import { VALUE_AXES, getFactionValues } from './societal-values.js';
import { MDATA_F } from '../map-data.js';

// ============================================
// STATE
// ============================================

let currentFactionId = null;
let modalVisible = false;
let activeTab = 'overview';

// ============================================
// DATA FUNCTIONS
// ============================================

/**
 * Get all POIs controlled by a faction
 */
function getFactionPOIs(factionId) {
    if (!MDATA_F) return [];
    
    const pois = [];
    Object.entries(MDATA_F).forEach(([regionId, region]) => {
        const regionPois = region.pointsOfInterest || [];
        regionPois.forEach(poi => {
            if (poi.factionId === factionId) {
                pois.push({
                    ...poi,
                    regionId,
                    regionName: region.name || regionId
                });
            }
        });
    });
    
    return pois.sort((a, b) => (b.military_strength || 0) - (a.military_strength || 0));
}

/**
 * Get regions where faction has presence
 */
function getFactionRegions(factionId) {
    if (!MDATA_F) return [];
    
    const regions = [];
    Object.entries(MDATA_F).forEach(([regionId, region]) => {
        const regionPois = region.pointsOfInterest || [];
        const factionPois = regionPois.filter(poi => poi.factionId === factionId);
        
        if (factionPois.length > 0) {
            const totalMilitary = factionPois.reduce((sum, p) => sum + (p.military_strength || 0), 0);
            const totalEconomic = factionPois.reduce((sum, p) => sum + (p.economic_value || 0), 0);
            const totalPopulation = factionPois.reduce((sum, p) => sum + (p.population || 0), 0);
            
            regions.push({
                id: regionId,
                name: region.name || regionId,
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
    
    return {
        totalPOIs: pois.length,
        totalRegions: regions.length,
        totalMilitary: pois.reduce((sum, p) => sum + (p.military_strength || 0), 0),
        totalEconomic: pois.reduce((sum, p) => sum + (p.economic_value || 0), 0),
        totalPolitical: pois.reduce((sum, p) => sum + (p.political_influence || 0), 0),
        totalPopulation: pois.reduce((sum, p) => sum + (p.population || 0), 0),
        dominatedRegions: regions.filter(r => r.controlPercent > 50).length,
        capitalCity: pois.find(p => p.type === 'capital' || p.isCapital),
        strongestPOI: pois[0],
        pois,
        regions
    };
}

/**
 * Find allied and rival factions based on values
 */
function getFactionRelations(factionId) {
    const targetValues = getFactionValues(factionId);
    if (!targetValues) return { allies: [], rivals: [] };
    
    const allFactions = getAllFactions();
    const relations = [];
    
    Object.entries(allFactions).forEach(([id, faction]) => {
        if (id === factionId) return;
        
        const values = getFactionValues(id);
        if (!values) return;
        
        let totalDiff = 0;
        let count = 0;
        
        Object.keys(VALUE_AXES).forEach(axisId => {
            const diff = Math.abs((targetValues[axisId] || 50) - (values[axisId] || 50));
            totalDiff += diff;
            count++;
        });
        
        const avgDiff = totalDiff / count;
        const compatibility = Math.round(100 - avgDiff);
        
        relations.push({
            id,
            faction,
            compatibility,
            avgDiff,
            isAlly: compatibility >= 65,
            isRival: compatibility <= 35
        });
    });
    
    relations.sort((a, b) => b.compatibility - a.compatibility);
    
    return {
        allies: relations.filter(r => r.isAlly).slice(0, 5),
        rivals: relations.filter(r => r.isRival).slice(0, 5),
        neutral: relations.filter(r => !r.isAlly && !r.isRival).slice(0, 5)
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
function renderRelationsTab(faction, factionId) {
    const relations = getFactionRelations(factionId);
    
    return `
        <div class="fm-tab-content" data-content="relations">
            <!-- Allies -->
            <div class="fm-section">
                <h3 class="fm-section-title">🤝 Potential Allies</h3>
                <p class="fm-section-desc">Factions with similar ideological values</p>
                ${relations.allies.length > 0 ? `
                    <div class="fm-relations-list">
                        ${relations.allies.map(r => renderRelationCard(r, 'ally')).join('')}
                    </div>
                ` : '<p class="fm-no-data">No strong allies identified based on values.</p>'}
            </div>
            
            <!-- Neutral -->
            <div class="fm-section">
                <h3 class="fm-section-title">😐 Neutral Relations</h3>
                <p class="fm-section-desc">Factions with mixed compatibility</p>
                ${relations.neutral.length > 0 ? `
                    <div class="fm-relations-list">
                        ${relations.neutral.map(r => renderRelationCard(r, 'neutral')).join('')}
                    </div>
                ` : '<p class="fm-no-data">No neutral factions identified.</p>'}
            </div>
            
            <!-- Rivals -->
            <div class="fm-section">
                <h3 class="fm-section-title">⚔️ Ideological Rivals</h3>
                <p class="fm-section-desc">Factions with opposing values</p>
                ${relations.rivals.length > 0 ? `
                    <div class="fm-relations-list">
                        ${relations.rivals.map(r => renderRelationCard(r, 'rival')).join('')}
                    </div>
                ` : '<p class="fm-no-data">No major rivals identified based on values.</p>'}
            </div>
        </div>
    `;
}

/**
 * Render a relation card
 */
function renderRelationCard(relation, type) {
    const statusColors = {
        ally: '#22c55e',
        neutral: '#f59e0b',
        rival: '#ef4444'
    };
    const statusLabels = {
        ally: 'Allied Values',
        neutral: 'Mixed Values',
        rival: 'Opposing Values'
    };
    
    return `
        <div class="fm-relation-card ${type}" data-faction="${relation.id}">
            <div class="fm-relation-icon" style="background: ${relation.faction?.color || '#666'};">
                ${relation.faction?.icon || '❓'}
            </div>
            <div class="fm-relation-info">
                <span class="fm-relation-name">${relation.faction?.name || relation.id}</span>
                <span class="fm-relation-type">${relation.faction?.type || 'Faction'}</span>
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
            </div>
            <button class="fm-relation-view" data-faction="${relation.id}">View →</button>
        </div>
    `;
}

/**
 * Render military tab
 */
function renderMilitaryTab(faction, stats) {
    const { pois } = stats;
    const militaryPois = pois.filter(p => (p.military_strength || 0) > 0)
        .sort((a, b) => (b.military_strength || 0) - (a.military_strength || 0));
    
    // Calculate military composition
    const fortresses = pois.filter(p => ['fortress', 'castle', 'fort', 'citadel'].includes(p.type?.toLowerCase())).length;
    const camps = pois.filter(p => ['camp', 'outpost', 'garrison'].includes(p.type?.toLowerCase())).length;
    const cities = pois.filter(p => ['city', 'capital', 'town'].includes(p.type?.toLowerCase())).length;
    
    return `
        <div class="fm-tab-content" data-content="military">
            <!-- Military Overview -->
            <div class="fm-section">
                <h3 class="fm-section-title">⚔️ Military Overview</h3>
                <div class="fm-military-summary">
                    <div class="fm-military-stat main">
                        <span class="fm-military-value">${stats.totalMilitary.toLocaleString()}</span>
                        <span class="fm-military-label">Total Military Strength</span>
                    </div>
                    <div class="fm-military-stat">
                        <span class="fm-military-icon">🏰</span>
                        <span class="fm-military-value">${fortresses}</span>
                        <span class="fm-military-label">Fortresses</span>
                    </div>
                    <div class="fm-military-stat">
                        <span class="fm-military-icon">⛺</span>
                        <span class="fm-military-value">${camps}</span>
                        <span class="fm-military-label">Camps/Outposts</span>
                    </div>
                    <div class="fm-military-stat">
                        <span class="fm-military-icon">🏙️</span>
                        <span class="fm-military-value">${cities}</span>
                        <span class="fm-military-label">Garrisoned Cities</span>
                    </div>
                </div>
            </div>
            
            <!-- Military Power Distribution -->
            <div class="fm-section">
                <h3 class="fm-section-title">💪 Power Distribution</h3>
                ${militaryPois.length > 0 ? `
                    <div class="fm-power-chart">
                        ${militaryPois.slice(0, 8).map((poi, index) => {
                            const maxMil = militaryPois[0]?.military_strength || 1;
                            const percent = ((poi.military_strength || 0) / maxMil) * 100;
                            return `
                                <div class="fm-power-bar">
                                    <div class="fm-power-label">
                                        <span class="fm-power-rank">#${index + 1}</span>
                                        <span class="fm-power-name">${poi.name}</span>
                                    </div>
                                    <div class="fm-power-track">
                                        <div class="fm-power-fill" style="
                                            width: ${percent}%;
                                            background: ${faction.color || '#ef4444'};
                                        "></div>
                                    </div>
                                    <span class="fm-power-value">${poi.military_strength || 0}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : '<p class="fm-no-data">No military installations recorded.</p>'}
            </div>
            
            <!-- Strategic Assessment -->
            <div class="fm-section">
                <h3 class="fm-section-title">🎯 Strategic Assessment</h3>
                <div class="fm-assessment">
                    ${generateStrategicAssessment(faction, stats)}
                </div>
            </div>
        </div>
    `;
}

/**
 * Generate strategic assessment text
 */
function generateStrategicAssessment(faction, stats) {
    const assessments = [];
    
    // Military strength assessment
    if (stats.totalMilitary > 1000) {
        assessments.push({
            icon: '💪',
            title: 'Major Military Power',
            text: 'This faction possesses significant military capabilities and can project force across multiple regions.',
            type: 'positive'
        });
    } else if (stats.totalMilitary > 500) {
        assessments.push({
            icon: '⚔️',
            title: 'Moderate Military',
            text: 'Capable of regional defense and limited offensive operations.',
            type: 'neutral'
        });
    } else {
        assessments.push({
            icon: '🛡️',
            title: 'Limited Military',
            text: 'Primarily defensive capabilities. May rely on diplomacy or alliances.',
            type: 'warning'
        });
    }
    
    // Territorial spread
    if (stats.totalRegions > 5) {
        assessments.push({
            icon: '🌍',
            title: 'Wide Territorial Spread',
            text: 'Presence across many regions provides strategic flexibility but may strain logistics.',
            type: 'neutral'
        });
    }
    
    // Economic base
    if (stats.totalEconomic > stats.totalMilitary) {
        assessments.push({
            icon: '💰',
            title: 'Economic Focus',
            text: 'Strong economic base could fund rapid military expansion if needed.',
            type: 'positive'
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
}

/**
 * Get POI type icon
 */
function getPoiIcon(type) {
    const icons = {
        'village': '🏘️', 'city': '🏙️', 'town': '🏠', 'castle': '🏰',
        'fortress': '🏯', 'fort': '⛫', 'outpost': '🚩', 'mine': '⛏️',
        'farm': '🌾', 'port': '⚓', 'market': '🏪', 'temple': '⛩️',
        'tower': '🗼', 'camp': '⛺', 'ruins': '🏚️', 'cave': '🕳️',
        'forest': '🌲', 'mountain': '⛰️', 'capital': '👑', 'citadel': '🏛️'
    };
    return icons[type?.toLowerCase()] || '📍';
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