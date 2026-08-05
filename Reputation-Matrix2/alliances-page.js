// alliances-page.js - Alliance Monitor Page

import { getAllFactions, getFaction } from './systems/faction-registry.js';
import { MAP_DATA } from './data/maps/map-data.js';
import { CURRENT_GAME_DATE } from './data/world/calendar.js';
import { 
    calculateFactionCompatibility, 
    getFactionValues, 
    VALUE_AXES 
} from './societal-values.js';

// ============================================
// ALLIANCE CONFIGURATION
// ============================================
function checkHasCoastalTerritory(memberId) {
    // Simplified check - look for ports or coastal keywords
    let hasCoast = false;
    Object.entries(MAP_DATA || {}).forEach(([regionId, region]) => {
        if (!regionId.endsWith('_full')) return;
        const pois = region.pointsOfInterest || [];
        pois.forEach(poi => {
            if (poi.factionId === memberId) {
                const type = (poi.type || '').toLowerCase();
                if (type.includes('port') || type.includes('harbor') || type.includes('coast')) {
                    hasCoast = true;
                }
            }
        });
    });
    return hasCoast;
}
function renderAllianceTypeSection(alliance) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    const features = allianceType.features.map(f => ALLIANCE_FEATURES[f]).filter(Boolean);
    const restrictions = allianceType.restrictions.map(r => ALLIANCE_RESTRICTIONS[r]).filter(Boolean);
    
    // Group features by category
    const featuresByCategory = {};
    features.forEach(f => {
        if (!featuresByCategory[f.category]) {
            featuresByCategory[f.category] = [];
        }
        featuresByCategory[f.category].push(f);
    });
    
    const categoryIcons = {
        military: '⚔️',
        economic: '💰',
        naval: '⚓',
        technology: '🔬',
        intelligence: '🕵️',
        cultural: '🎭',
        governance: '🏛️',
        diplomatic: '🕊️'
    };
    
    return `
        <div class="alliance-type-section">
            <div class="alliance-type-header" style="border-color: ${allianceType.color};">
                <span class="type-icon" style="background: ${allianceType.color};">${allianceType.icon}</span>
                <div class="type-info">
                    <h4 class="type-name">${allianceType.name}</h4>
                    <p class="type-desc">${allianceType.description}</p>
                </div>
            </div>
            
            <div class="features-grid">
                ${Object.entries(featuresByCategory).map(([category, catFeatures]) => `
                    <div class="feature-category">
                        <h5 class="category-title">
                            <span class="category-icon">${categoryIcons[category] || '📋'}</span>
                            ${category.charAt(0).toUpperCase() + category.slice(1)}
                        </h5>
                        <div class="feature-list">
                            ${catFeatures.map(f => `
                                <div class="feature-item enabled">
                                    <span class="feature-icon">${f.icon}</span>
                                    <div class="feature-info">
                                        <span class="feature-name">${f.name}</span>
                                        <span class="feature-effect">${f.effect}</span>
                                    </div>
                                    <span class="feature-status">✓</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            ${restrictions.length > 0 ? `
                <div class="restrictions-section">
                    <h5 class="restrictions-title">⚠️ Restrictions</h5>
                    <div class="restrictions-list">
                        ${restrictions.map(r => `
                            <div class="restriction-item">
                                <span class="restriction-icon">${r.icon}</span>
                                <div class="restriction-info">
                                    <span class="restriction-name">${r.name}</span>
                                    <span class="restriction-desc">${r.description}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}
function renderMemberFeaturesTable(alliance) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    const allFeatures = allianceType.features.map(f => ALLIANCE_FEATURES[f]).filter(Boolean);
    
    return `
        <div class="member-features-section">
            <h4>👥 Member Feature Access</h4>
            <div class="features-table-container">
                <table class="features-table">
                    <thead>
                        <tr>
                            <th class="col-feature">Feature</th>
                            ${alliance.members.map(memberId => {
                                const member = getFaction(memberId);
                                const role = alliance.memberRoles?.[memberId] || 'full_member';
                                const roleInfo = MEMBER_ROLES[role] || MEMBER_ROLES.full_member;
                                return `
                                    <th class="col-member" style="border-bottom-color: ${member?.color || '#666'};">
                                        <span class="member-icon" style="background: ${member?.color || '#666'};">${member?.icon || '?'}</span>
                                        <span class="member-name">${member?.shortName || memberId}</span>
                                        <span class="role-badge" style="background: ${roleInfo.color};">${roleInfo.icon}</span>
                                    </th>
                                `;
                            }).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${allFeatures.map(feature => `
                            <tr>
                                <td class="col-feature">
                                    <span class="feature-icon">${feature.icon}</span>
                                    <span class="feature-name">${feature.name}</span>
                                </td>
                                ${alliance.members.map(memberId => {
                                    const memberFeatures = getMemberFeatures(alliance, memberId);
                                    const mf = memberFeatures.find(f => f.id === feature.id);
                                    const enabled = mf?.enabled ?? true;
                                    return `
                                        <td class="col-member ${enabled ? 'enabled' : 'disabled'}" 
                                            title="${mf?.reason || (enabled ? 'Active' : 'Disabled')}">
                                            ${enabled 
                                                ? '<span class="status-icon enabled">✓</span>' 
                                                : '<span class="status-icon disabled">✗</span>'
                                            }
                                        </td>
                                    `;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
function renderCohesionBreakdown(alliance, compatMatrix) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    const modifiers = allianceType.cohesionModifiers;
    const regions = getAllianceRegions(alliance);
    
    // Calculate each modifier
    const breakdown = [];
    
    // Base compatibility
    let totalCompat = 0;
    let compatCount = 0;
    alliance.members.forEach(m1 => {
        alliance.members.forEach(m2 => {
            if (m1 < m2 && compatMatrix[m1]?.[m2]) {
                totalCompat += compatMatrix[m1][m2].compatibility;
                compatCount++;
            }
        });
    });
    const baseCompat = compatCount > 0 ? Math.round(totalCompat / compatCount) : 70;
    breakdown.push({
        name: 'Base Ideological Compatibility',
        value: baseCompat,
        icon: '⚖️',
        type: 'base'
    });
    
    // Regional spread
    if (modifiers.perRegion && regions.length > 1) {
        const penalty = (regions.length - 1) * modifiers.perRegion;
        breakdown.push({
            name: `Regional Spread (${regions.length} regions)`,
            value: penalty,
            icon: '🗺️',
            type: penalty < 0 ? 'penalty' : 'bonus'
        });
    }
    
    // Member count
    if (modifiers.perMember && alliance.members.length > 3) {
        const penalty = (alliance.members.length - 3) * modifiers.perMember;
        breakdown.push({
            name: `Member Count (${alliance.members.length} members)`,
            value: penalty,
            icon: '👥',
            type: penalty < 0 ? 'penalty' : 'bonus'
        });
    }
    
    // Shared borders
    if (modifiers.sharedBorders) {
        const sharedCount = countSharedBorders(alliance.members);
        if (sharedCount > 0) {
            const bonus = sharedCount * modifiers.sharedBorders;
            breakdown.push({
                name: `Shared Borders (${sharedCount} pairs)`,
                value: bonus,
                icon: '🤝',
                type: 'bonus'
            });
        }
    }
    
    // At war penalty
    if (modifiers.atWar) {
        const atWar = alliance.members.some(m => isFactionAtWar(m));
        if (atWar) {
            breakdown.push({
                name: 'Alliance Member at War',
                value: modifiers.atWar,
                icon: '⚔️',
                type: 'penalty'
            });
        }
    }
    
    const finalCohesion = breakdown.reduce((sum, b) => sum + (b.type === 'base' ? b.value : b.value), 0);
    
    return `
        <div class="cohesion-breakdown">
            <h4>🤝 Cohesion Breakdown</h4>
            <div class="breakdown-list">
                ${breakdown.map(b => `
                    <div class="breakdown-item ${b.type}">
                        <span class="breakdown-icon">${b.icon}</span>
                        <span class="breakdown-name">${b.name}</span>
                        <span class="breakdown-value ${b.type}">
                            ${b.type === 'base' ? '' : (b.value >= 0 ? '+' : '')}${b.value}%
                        </span>
                    </div>
                `).join('')}
                <div class="breakdown-total">
                    <span class="total-label">Total Cohesion</span>
                    <span class="total-value">${Math.max(0, Math.min(100, finalCohesion))}%</span>
                </div>
            </div>
        </div>
    `;
}
const ALLIANCE_TYPES = {
    military_pact: {
        id: 'military_pact',
        name: 'Military Pact',
        icon: '⚔️',
        color: '#ef4444',
        description: 'Mutual defense agreement. Members defend each other from external threats.',
        features: ['mutual_defense', 'military_access', 'joint_training'],
        restrictions: ['regional_defense_only'],
        cohesionModifiers: {
            perRegion: -2,        // -2% per additional region
            perMember: -1,        // -1% per member over 3
            atWar: -10            // -10% if any member at war
        }
    },
    economic_union: {
        id: 'economic_union',
        name: 'Economic Union',
        icon: '💰',
        color: '#eab308',
        description: 'Trade and economic cooperation. Reduced tariffs and shared markets.',
        features: ['trade_agreement', 'market_access', 'resource_sharing', 'joint_ventures'],
        restrictions: ['no_military_access'],
        cohesionModifiers: {
            perRegion: -1,
            perMember: 0,
            tradeDifference: -5   // -5% if economy types differ greatly
        }
    },
    naval_league: {
        id: 'naval_league',
        name: 'Naval League',
        icon: '⚓',
        color: '#3b82f6',
        description: 'Maritime cooperation to protect sea lanes and trade routes.',
        features: ['naval_protection', 'port_access', 'trade_route_security', 'joint_patrols'],
        restrictions: ['coastal_only', 'no_land_military'],
        cohesionModifiers: {
            perRegion: -3,        // Naval alliances suffer more from distance
            noCoast: -15,         // -15% for landlocked members
            perMember: -1
        }
    },
    technology_pact: {
        id: 'technology_pact',
        name: 'Technology Pact',
        icon: '🔬',
        color: '#8b5cf6',
        description: 'Shared research and technological advancement.',
        features: ['tech_sharing', 'research_cooperation', 'scholar_exchange', 'innovation_bonus'],
        restrictions: ['knowledge_required'],
        cohesionModifiers: {
            techGap: -3,          // -3% per major tech difference
            perMember: -2,        // Harder to share with more members
            perRegion: 0
        }
    },
    cultural_alliance: {
        id: 'cultural_alliance',
        name: 'Cultural Alliance',
        icon: '🎭',
        color: '#ec4899',
        description: 'Cultural exchange and preservation of shared heritage.',
        features: ['cultural_exchange', 'population_movement', 'festival_rights', 'heritage_protection'],
        restrictions: ['cultural_compatibility'],
        cohesionModifiers: {
            cultureDifference: -5,
            perRegion: 0,
            perMember: 0,
            religionMismatch: -10
        }
    },
    intelligence_network: {
        id: 'intelligence_network',
        name: 'Intelligence Network',
        icon: '🕵️',
        color: '#6366f1',
        description: 'Shared intelligence and espionage cooperation.',
        features: ['map_sharing', 'intel_sharing', 'spy_network', 'counter_intelligence'],
        restrictions: ['secrecy_required', 'limited_members'],
        cohesionModifiers: {
            perMember: -5,        // Very hard with many members
            perRegion: -1,
            betrayalRisk: -20     // If any member has low loyalty
        }
    },
    defensive_coalition: {
        id: 'defensive_coalition',
        name: 'Defensive Coalition',
        icon: '🛡️',
        color: '#22c55e',
        description: 'Regional defensive alliance. Members only defend within shared regions.',
        features: ['regional_defense', 'fortress_sharing', 'garrison_support'],
        restrictions: ['defense_only', 'regional_scope'],
        cohesionModifiers: {
            perRegion: -1,
            sharedBorders: +5,    // Bonus for adjacent territories
            perMember: 0
        }
    },
    hegemonic_bloc: {
        id: 'hegemonic_bloc',
        name: 'Hegemonic Bloc',
        icon: '👑',
        color: '#dc2626',
        description: 'Dominant power with subordinate members. Leader controls foreign policy.',
        features: ['leader_control', 'puppet_states', 'tribute_system', 'forced_military'],
        restrictions: ['leader_approval_required', 'no_independent_diplomacy'],
        cohesionModifiers: {
            perMember: -3,
            powerImbalance: +10,  // Actually more stable with clear leader
            perRegion: -2,
            resistance: -15       // If members have high independence values
        }
    },
    federation: {
        id: 'federation',
        name: 'Federation',
        icon: '🏛️',
        color: '#14b8a6',
        description: 'Equal partnership with shared governance and collective decision-making.',
        features: ['shared_governance', 'equal_voting', 'common_laws', 'unified_foreign_policy'],
        restrictions: ['consensus_required', 'sovereignty_shared'],
        cohesionModifiers: {
            perMember: -2,
            valueDifference: -5,
            perRegion: -1,
            governmentMismatch: -10
        }
    },
    non_aggression: {
        id: 'non_aggression',
        name: 'Non-Aggression Pact',
        icon: '🕊️',
        color: '#94a3b8',
        description: 'Agreement not to attack each other. Minimal cooperation.',
        features: ['peace_guarantee', 'border_recognition'],
        restrictions: ['no_active_cooperation', 'easily_broken'],
        cohesionModifiers: {
            perMember: 0,
            perRegion: 0,
            conflict: -30         // Massive penalty if interests conflict
        }
    },
    vassal_system: {
        id: 'vassal_system',
        name: 'Vassal System',
        icon: '⛓️',
        color: '#78716c',
        description: 'Subordinate members pay tribute and provide military service to overlord.',
        features: ['tribute_collection', 'military_levy', 'overlord_protection', 'autonomy_limited'],
        restrictions: ['overlord_commands', 'tribute_required', 'no_independent_war'],
        cohesionModifiers: {
            perMember: -1,
            resistanceLevel: -20,
            perRegion: -3,
            oppression: -10
        }
    }
};
const ALLIANCE_FEATURES = {
    // Military Features
    mutual_defense: {
        id: 'mutual_defense',
        name: 'Mutual Defense',
        icon: '🛡️',
        category: 'military',
        description: 'All members must defend any member under attack.',
        effect: 'When attacked, all alliance members join the war.'
    },
    military_access: {
        id: 'military_access',
        name: 'Military Access',
        icon: '🚩',
        category: 'military',
        description: 'Armies can move through allied territory.',
        effect: 'Units can traverse allied regions without penalty.'
    },
    joint_training: {
        id: 'joint_training',
        name: 'Joint Training',
        icon: '⚔️',
        category: 'military',
        description: 'Shared military exercises and training.',
        effect: '+10% military effectiveness when fighting together.'
    },
    regional_defense: {
        id: 'regional_defense',
        name: 'Regional Defense',
        icon: '🏰',
        category: 'military',
        description: 'Defense obligations only apply within shared regions.',
        effect: 'Members only assist in regions where both have presence.'
    },
    fortress_sharing: {
        id: 'fortress_sharing',
        name: 'Fortress Sharing',
        icon: '🏯',
        category: 'military',
        description: 'Allied forces can garrison each other\'s fortifications.',
        effect: 'Fortresses provide bonuses to all alliance members.'
    },
    garrison_support: {
        id: 'garrison_support',
        name: 'Garrison Support',
        icon: '👥',
        category: 'military',
        description: 'Members can request garrison reinforcements.',
        effect: 'Can request up to 20% of ally\'s military for defense.'
    },
    forced_military: {
        id: 'forced_military',
        name: 'Forced Conscription',
        icon: '⚔️',
        category: 'military',
        description: 'Leader can demand military service from members.',
        effect: 'Subordinates must provide troops when demanded.'
    },
    military_levy: {
        id: 'military_levy',
        name: 'Military Levy',
        icon: '🎖️',
        category: 'military',
        description: 'Vassals provide soldiers to overlord.',
        effect: 'Overlord gains 15% of vassal military strength.'
    },
    
    // Economic Features
    trade_agreement: {
        id: 'trade_agreement',
        name: 'Trade Agreement',
        icon: '📜',
        category: 'economic',
        description: 'Reduced tariffs and trade barriers.',
        effect: '+20% trade income between members.'
    },
    market_access: {
        id: 'market_access',
        name: 'Market Access',
        icon: '🏪',
        category: 'economic',
        description: 'Full access to allied markets.',
        effect: 'Can sell goods in allied territories at local prices.'
    },
    resource_sharing: {
        id: 'resource_sharing',
        name: 'Resource Sharing',
        icon: '⛏️',
        category: 'economic',
        description: 'Strategic resources are shared among members.',
        effect: 'Access to allied resources at reduced cost.'
    },
    joint_ventures: {
        id: 'joint_ventures',
        name: 'Joint Ventures',
        icon: '🤝',
        category: 'economic',
        description: 'Collaborative economic projects.',
        effect: 'Major projects cost 25% less when shared.'
    },
    tribute_system: {
        id: 'tribute_system',
        name: 'Tribute System',
        icon: '💎',
        category: 'economic',
        description: 'Subordinates pay regular tribute to leader.',
        effect: 'Leader receives 10% of subordinate income.'
    },
    tribute_collection: {
        id: 'tribute_collection',
        name: 'Tribute Collection',
        icon: '👑',
        category: 'economic',
        description: 'Overlord collects taxes from vassals.',
        effect: 'Regular economic contributions from vassals.'
    },
    
    // Naval Features
    naval_protection: {
        id: 'naval_protection',
        name: 'Naval Protection',
        icon: '🚢',
        category: 'naval',
        description: 'Fleets protect allied merchant ships.',
        effect: 'Trade ships receive escort in allied waters.'
    },
    port_access: {
        id: 'port_access',
        name: 'Port Access',
        icon: '⚓',
        category: 'naval',
        description: 'Ships can dock at allied ports.',
        effect: 'Can resupply and repair at any allied port.'
    },
    trade_route_security: {
        id: 'trade_route_security',
        name: 'Trade Route Security',
        icon: '🗺️',
        category: 'naval',
        description: 'Joint patrols protect trade routes.',
        effect: 'Reduced piracy and trade disruption.'
    },
    joint_patrols: {
        id: 'joint_patrols',
        name: 'Joint Patrols',
        icon: '🔭',
        category: 'naval',
        description: 'Coordinated naval patrols.',
        effect: 'Better sea coverage and threat detection.'
    },
    
    // Technology Features
    tech_sharing: {
        id: 'tech_sharing',
        name: 'Technology Sharing',
        icon: '🔬',
        category: 'technology',
        description: 'Members share technological advancements.',
        effect: 'Automatically receive ally tech after delay.'
    },
    research_cooperation: {
        id: 'research_cooperation',
        name: 'Research Cooperation',
        icon: '📚',
        category: 'technology',
        description: 'Joint research projects.',
        effect: '+15% research speed for shared projects.'
    },
    scholar_exchange: {
        id: 'scholar_exchange',
        name: 'Scholar Exchange',
        icon: '🎓',
        category: 'technology',
        description: 'Scholars and experts move between members.',
        effect: 'Knowledge spreads faster between allies.'
    },
    innovation_bonus: {
        id: 'innovation_bonus',
        name: 'Innovation Bonus',
        icon: '💡',
        category: 'technology',
        description: 'Combined knowledge leads to breakthroughs.',
        effect: 'Chance for bonus discoveries.'
    },
    
    // Intelligence Features
    map_sharing: {
        id: 'map_sharing',
        name: 'Map Sharing',
        icon: '🗺️',
        category: 'intelligence',
        description: 'Share explored territory information.',
        effect: 'See allied territories and surroundings.'
    },
    intel_sharing: {
        id: 'intel_sharing',
        name: 'Intelligence Sharing',
        icon: '🔍',
        category: 'intelligence',
        description: 'Share spy reports and intelligence.',
        effect: 'Receive allied intelligence on enemies.'
    },
    spy_network: {
        id: 'spy_network',
        name: 'Spy Network',
        icon: '🕵️',
        category: 'intelligence',
        description: 'Coordinated espionage operations.',
        effect: 'Combined spy effectiveness +25%.'
    },
    counter_intelligence: {
        id: 'counter_intelligence',
        name: 'Counter-Intelligence',
        icon: '🛡️',
        category: 'intelligence',
        description: 'Shared defense against espionage.',
        effect: 'Harder for enemies to spy on alliance.'
    },
    
    // Cultural Features
    cultural_exchange: {
        id: 'cultural_exchange',
        name: 'Cultural Exchange',
        icon: '🎭',
        category: 'cultural',
        description: 'Artists and traditions shared between nations.',
        effect: 'Cultural influence spreads between members.'
    },
    population_movement: {
        id: 'population_movement',
        name: 'Free Movement',
        icon: '🚶',
        category: 'cultural',
        description: 'Citizens can move freely between nations.',
        effect: 'Population can migrate within alliance.'
    },
    festival_rights: {
        id: 'festival_rights',
        name: 'Festival Rights',
        icon: '🎉',
        category: 'cultural',
        description: 'Shared celebration of cultural events.',
        effect: 'Joint festivals boost relations.'
    },
    heritage_protection: {
        id: 'heritage_protection',
        name: 'Heritage Protection',
        icon: '🏛️',
        category: 'cultural',
        description: 'Mutual protection of cultural sites.',
        effect: 'Cultural sites protected by all members.'
    },
    
    // Governance Features
    leader_control: {
        id: 'leader_control',
        name: 'Leader Control',
        icon: '👑',
        category: 'governance',
        description: 'Alliance leader makes major decisions.',
        effect: 'Leader faction controls alliance policy.'
    },
    puppet_states: {
        id: 'puppet_states',
        name: 'Puppet States',
        icon: '🎭',
        category: 'governance',
        description: 'Members are effectively controlled by leader.',
        effect: 'Subordinates follow leader\'s commands.'
    },
    shared_governance: {
        id: 'shared_governance',
        name: 'Shared Governance',
        icon: '🏛️',
        category: 'governance',
        description: 'All members participate in decisions.',
        effect: 'Democratic decision-making process.'
    },
    equal_voting: {
        id: 'equal_voting',
        name: 'Equal Voting',
        icon: '🗳️',
        category: 'governance',
        description: 'Each member has equal vote.',
        effect: 'One nation, one vote on alliance matters.'
    },
    common_laws: {
        id: 'common_laws',
        name: 'Common Laws',
        icon: '⚖️',
        category: 'governance',
        description: 'Shared legal framework.',
        effect: 'Unified laws across alliance territory.'
    },
    unified_foreign_policy: {
        id: 'unified_foreign_policy',
        name: 'Unified Foreign Policy',
        icon: '🌍',
        category: 'governance',
        description: 'Alliance speaks with one voice.',
        effect: 'Coordinated diplomacy with outside powers.'
    },
    overlord_protection: {
        id: 'overlord_protection',
        name: 'Overlord Protection',
        icon: '🛡️',
        category: 'governance',
        description: 'Overlord defends vassals from threats.',
        effect: 'Vassals receive full military protection.'
    },
    autonomy_limited: {
        id: 'autonomy_limited',
        name: 'Limited Autonomy',
        icon: '⛓️',
        category: 'governance',
        description: 'Vassals have restricted independence.',
        effect: 'Cannot make major decisions without approval.'
    },
    
    // Passive Features
    peace_guarantee: {
        id: 'peace_guarantee',
        name: 'Peace Guarantee',
        icon: '🕊️',
        category: 'diplomatic',
        description: 'Promise not to attack each other.',
        effect: 'War between signatories breaks the pact.'
    },
    border_recognition: {
        id: 'border_recognition',
        name: 'Border Recognition',
        icon: '🗺️',
        category: 'diplomatic',
        description: 'Mutual recognition of territorial claims.',
        effect: 'No territorial disputes between members.'
    }
};
const ALLIANCE_RESTRICTIONS = {
    regional_defense_only: {
        id: 'regional_defense_only',
        name: 'Regional Scope',
        description: 'Military obligations only apply in regions where both members have presence.',
        icon: '🗺️'
    },
    no_military_access: {
        id: 'no_military_access',
        name: 'No Military Access',
        description: 'This alliance does not grant military passage rights.',
        icon: '🚫'
    },
    coastal_only: {
        id: 'coastal_only',
        name: 'Coastal Nations Only',
        description: 'Full benefits require coastal territory.',
        icon: '🏝️'
    },
    no_land_military: {
        id: 'no_land_military',
        name: 'Naval Only',
        description: 'Land military cooperation is not included.',
        icon: '⚓'
    },
    knowledge_required: {
        id: 'knowledge_required',
        name: 'Knowledge Focus',
        description: 'Members must prioritize research and knowledge.',
        icon: '📚'
    },
    cultural_compatibility: {
        id: 'cultural_compatibility',
        name: 'Cultural Compatibility',
        description: 'Members must share cultural values.',
        icon: '🎭'
    },
    secrecy_required: {
        id: 'secrecy_required',
        name: 'Secrecy Required',
        description: 'Alliance activities are confidential.',
        icon: '🤫'
    },
    limited_members: {
        id: 'limited_members',
        name: 'Limited Membership',
        description: 'Maximum of 4 members for operational security.',
        icon: '🔒'
    },
    defense_only: {
        id: 'defense_only',
        name: 'Defensive Only',
        description: 'Cannot be used for offensive wars.',
        icon: '🛡️'
    },
    regional_scope: {
        id: 'regional_scope',
        name: 'Regional Scope',
        description: 'Only applies within specific regions.',
        icon: '📍'
    },
    leader_approval_required: {
        id: 'leader_approval_required',
        name: 'Leader Approval Required',
        description: 'Major actions need leader consent.',
        icon: '👑'
    },
    no_independent_diplomacy: {
        id: 'no_independent_diplomacy',
        name: 'No Independent Diplomacy',
        description: 'Members cannot conduct foreign policy alone.',
        icon: '🚫'
    },
    consensus_required: {
        id: 'consensus_required',
        name: 'Consensus Required',
        description: 'Major decisions need unanimous approval.',
        icon: '🤝'
    },
    sovereignty_shared: {
        id: 'sovereignty_shared',
        name: 'Shared Sovereignty',
        description: 'Members give up some independence.',
        icon: '🏛️'
    },
    no_active_cooperation: {
        id: 'no_active_cooperation',
        name: 'No Active Cooperation',
        description: 'Only guarantees peace, no other benefits.',
        icon: '😐'
    },
    easily_broken: {
        id: 'easily_broken',
        name: 'Easily Broken',
        description: 'Can be dissolved with minimal consequences.',
        icon: '💔'
    },
    overlord_commands: {
        id: 'overlord_commands',
        name: 'Overlord Commands',
        description: 'Overlord can issue binding orders.',
        icon: '📜'
    },
    tribute_required: {
        id: 'tribute_required',
        name: 'Tribute Required',
        description: 'Regular payments to overlord are mandatory.',
        icon: '💰'
    },
    no_independent_war: {
        id: 'no_independent_war',
        name: 'No Independent Wars',
        description: 'Cannot declare war without overlord permission.',
        icon: '⚔️'
    }
};

// ============================================
// MEMBER STATUS IN ALLIANCE
// ============================================

const MEMBER_ROLES = {
    leader: {
        id: 'leader',
        name: 'Alliance Leader',
        icon: '👑',
        color: '#eab308',
        privileges: ['set_policy', 'invite_members', 'expel_members', 'declare_war', 'make_peace'],
        description: 'Controls alliance policy and makes major decisions.'
    },
    full_member: {
        id: 'full_member',
        name: 'Full Member',
        icon: '⭐',
        color: '#22c55e',
        privileges: ['vote', 'propose', 'veto_partial'],
        description: 'Full rights and obligations within the alliance.'
    },
    associate: {
        id: 'associate',
        name: 'Associate Member',
        icon: '🤝',
        color: '#60a5fa',
        privileges: ['partial_benefits', 'observer_vote'],
        description: 'Limited participation and reduced benefits.'
    },
    vassal: {
        id: 'vassal',
        name: 'Vassal State',
        icon: '⛓️',
        color: '#78716c',
        privileges: ['protection', 'limited_autonomy'],
        description: 'Subordinate to the leader with limited independence.'
    },
    puppet: {
        id: 'puppet',
        name: 'Puppet State',
        icon: '🎭',
        color: '#dc2626',
        privileges: ['none'],
        description: 'Fully controlled by the alliance leader.'
    },
    observer: {
        id: 'observer',
        name: 'Observer',
        icon: '👁️',
        color: '#9ca3af',
        privileges: ['attend_meetings', 'no_vote'],
        description: 'Can observe but not participate in decisions.'
    }
};

export const ALLIANCE_SIZE_LIMITS = {
    BASE_THRESHOLD: 80,           // LOWERED: Factions only need to be neutral/friendly (was 70)
    SIZE_PENALTY_PER_MEMBER: 25,   // INCREASED: Harder to make massive blobs
    MAX_ALLIANCE_SIZE: 15,         // LOWERED: Encourages more, smaller alliances
    MIN_POI_FOR_ALLIANCE: 3,      // LOWERED: Now small factions (3 POIs) can form pacts (was 10)
    MIN_POI_REGIONAL: 15           // LOWERED: Easier to calculate regional power
};
function calculateAllianceType(members) {
    if (!members || members.length === 0) return 'military_pact';
    
    // Count building types across all members
    const buildingCounts = {
        military: 0,      // fortress, castle, barracks, watchtower
        economic: 0,      // market, mine, farm, port, trade_post
        naval: 0,         // port, shipyard, harbor
        research: 0,      // academy, library, mages_tower, laboratory
        cultural: 0,      // temple, shrine, monument, theater
        political: 0      // capital, palace, embassy, court
    };
    
    const buildingTypeMap = {
        // Military
        'fortress': 'military', 'castle': 'military', 'barracks': 'military',
        'watchtower': 'military', 'fort': 'military', 'outpost': 'military',
        'siege_camp': 'military', 'garrison': 'military', 'stronghold': 'military',
        
        // Economic
        'market': 'economic', 'mine': 'economic', 'farm': 'economic',
        'trade_post': 'economic', 'warehouse': 'economic', 'bank': 'economic',
        'workshop': 'economic', 'factory': 'economic', 'quarry': 'economic',
        
        // Naval
        'port': 'naval', 'shipyard': 'naval', 'harbor': 'naval',
        'dock': 'naval', 'lighthouse': 'naval', 'naval_base': 'naval',
        
        // Research
        'academy': 'research', 'library': 'research', 'mages_tower': 'research',
        'laboratory': 'research', 'university': 'research', 'observatory': 'research',
        'school': 'research', 'archive': 'research',
        
        // Cultural
        'temple': 'cultural', 'shrine': 'cultural', 'monument': 'cultural',
        'theater': 'cultural', 'monastery': 'cultural', 'cathedral': 'cultural',
        'arena': 'cultural', 'colosseum': 'cultural',
        
        // Political
        'capital': 'political', 'capital_city': 'political', 'palace': 'political',
        'embassy': 'political', 'court': 'political', 'senate': 'political',
        'throne_room': 'political'
    };
    
    // Count POIs by type for all members
    members.forEach(memberId => {
        if (!MAP_DATA) return;
        
        Object.entries(MAP_DATA).forEach(([regionId, region]) => {
            if (!regionId.endsWith('_full')) return;
            const pois = region.pointsOfInterest || [];
            
            pois.forEach(poi => {
                if (poi.factionId !== memberId) return;
                
                const poiType = (poi.type || '').toLowerCase().replace(/[\s-]/g, '_');
                const category = buildingTypeMap[poiType];
                
                if (category) {
                    buildingCounts[category]++;
                } else {
                    // Default categorization based on stats
                    if ((poi.military_strength || 0) > (poi.economic_value || 0)) {
                        buildingCounts.military++;
                    } else if ((poi.economic_value || 0) > 0) {
                        buildingCounts.economic++;
                    }
                }
            });
        });
    });
    
    // Calculate total and percentages
    const total = Object.values(buildingCounts).reduce((a, b) => a + b, 0) || 1;
    const percentages = {};
    Object.entries(buildingCounts).forEach(([key, val]) => {
        percentages[key] = (val / total) * 100;
    });
    
    // Determine alliance type based on dominant categories
    const dominant = Object.entries(percentages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2);
    
    const [primary, secondary] = dominant;
    
    // Decision tree for alliance type
    if (primary[0] === 'military' && primary[1] >= 40) {
        if (secondary && secondary[0] === 'political' && secondary[1] >= 20) {
            return 'hegemonic_bloc';
        }
        return 'military_pact';
    }
    
    if (primary[0] === 'economic' && primary[1] >= 35) {
        return 'economic_union';
    }
    
    if (primary[0] === 'naval' && primary[1] >= 25) {
        return 'naval_league';
    }
    
    if (primary[0] === 'research' && primary[1] >= 25) {
        return 'technology_pact';
    }
    
    if (primary[0] === 'cultural' && primary[1] >= 25) {
        return 'cultural_alliance';
    }
    
    if (primary[0] === 'political' && primary[1] >= 30) {
        return 'federation';
    }
    
    // Mixed - default to defensive coalition
    if (primary[1] < 30) {
        return 'defensive_coalition';
    }
    
    // Fallback
    return 'military_pact';
}
function calculateMemberRoles(alliance) {
    const memberPowers = {};
    let maxPower = 0;
    let leaderId = null;
    
    alliance.members.forEach(memberId => {
        const stats = getFactionStats(memberId);
        const pois = getFactionTotalPOIs(memberId);
        const power = (stats.military * 2) + (stats.economic * 1.5) + (stats.political) + (pois * 5);
        memberPowers[memberId] = power;
        
        if (power > maxPower) {
            maxPower = power;
            leaderId = memberId;
        }
    });
    
    const roles = {};
    const avgPower = Object.values(memberPowers).reduce((a, b) => a + b, 0) / alliance.members.length;
    
    alliance.members.forEach(memberId => {
        const power = memberPowers[memberId];
        const ratio = power / maxPower;
        
        if (memberId === leaderId) {
            roles[memberId] = 'leader';
        } else if (ratio >= 0.7) {
            roles[memberId] = 'full_member';
        } else if (ratio >= 0.4) {
            roles[memberId] = 'full_member';
        } else if (ratio >= 0.2) {
            roles[memberId] = 'associate';
        } else if (ratio >= 0.1) {
            roles[memberId] = 'vassal';
        } else {
            roles[memberId] = 'puppet';
        }
    });
    
    return { roles, leaderId, memberPowers };
}
function seededRandom(seed) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
function stringToSeed(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}
function generateFactionValuesWithSeed(faction) {
    const values = {};
    const factionId = faction.id || faction.name || 'unknown';
    const baseSeed = stringToSeed(factionId);
    
    // Start with neutral values
    Object.keys(VALUE_AXES).forEach((axisId, index) => {
        values[axisId] = 50;
    });
    
    if (!faction) return values;
    
    // Gather text to analyze
    const textsToAnalyze = [
        faction.id || '',
        faction.name || '',
        faction.type || '',
        faction.description || '',
        faction.lore || '',
        faction.government || '',
        faction.culture || '',
        faction.religion || '',
        faction.primaryRace || '',
        faction.species || '',
        ...(faction.tags || [])
    ].join(' ').toLowerCase();
    
    // Track applied modifiers
    const appliedModifiers = {};
    Object.keys(VALUE_AXES).forEach(axisId => {
        appliedModifiers[axisId] = [];
    });
    
    // Check keywords and apply modifiers
    Object.entries(KEYWORD_VALUE_MODIFIERS).forEach(([keyword, modifiers]) => {
        const regex = new RegExp(`\\b${keyword}`, 'i');
        if (regex.test(textsToAnalyze)) {
            Object.entries(modifiers).forEach(([axisId, modifier]) => {
                if (VALUE_AXES[axisId]) {
                    appliedModifiers[axisId].push(modifier);
                }
            });
        }
    });
    
    // Calculate final values with randomization
    Object.entries(appliedModifiers).forEach(([axisId, mods], index) => {
        // Generate random offset for this faction/axis combination
        const axisSeed = baseSeed + index * 7919; // Use prime multiplier for variety
        const randomOffset = (seededRandom(axisSeed) - 0.5) * 20; // -10 to +10 random offset
        
        if (mods.length > 0) {
            const avgMod = mods.reduce((sum, m) => sum + m, 0) / mods.length;
            values[axisId] = Math.max(5, Math.min(95, Math.round(50 + avgMod + randomOffset)));
        } else {
            // No keywords - use larger random variance
            const noKeywordSeed = baseSeed + index * 3571;
            const variance = (seededRandom(noKeywordSeed) - 0.5) * 40; // -20 to +20
            values[axisId] = Math.max(10, Math.min(90, Math.round(50 + variance)));
        }
    });
    
    // Ensure minimum differentiation - check against other factions
    // Add faction-specific quirks based on name hash
    const quirks = Math.floor(seededRandom(baseSeed + 999) * 3) + 1; // 1-3 quirks
    const axisKeys = Object.keys(VALUE_AXES);
    
    for (let i = 0; i < quirks; i++) {
        const quirkSeed = baseSeed + i * 1337;
        const axisIndex = Math.floor(seededRandom(quirkSeed) * axisKeys.length);
        const axisId = axisKeys[axisIndex];
        const quirkAmount = (seededRandom(quirkSeed + 1) - 0.5) * 30; // -15 to +15 quirk
        
        values[axisId] = Math.max(5, Math.min(95, Math.round(values[axisId] + quirkAmount)));
    }
    
    return values;
}

function getFactionsAtWar() {
    const atWar = new Map();
    
    // Check if MAJOR_BATTLES exists
    if (typeof MAJOR_BATTLES === 'undefined' || !MAJOR_BATTLES || !Array.isArray(MAJOR_BATTLES)) {
        console.log('[Alliances] No battle data available');
        return atWar;
    }
    
    const ongoingBattles = MAJOR_BATTLES.filter(battle => {
        const outcome = (battle.outcome || '').toLowerCase();
        return outcome.includes('ongoing');
    });
    
    console.log('[Alliances] Ongoing battles:', ongoingBattles.length);
    
    ongoingBattles.forEach(battle => {
        const belligerents = battle.belligerents || {};
        const sides = ['side_a', 'side_b', 'side_c', 'side_d'];
        
        const sidesFactions = sides
            .filter(s => belligerents[s])
            .map(s => belligerents[s].factions || []);
        
        for (let i = 0; i < sidesFactions.length; i++) {
            for (let j = i + 1; j < sidesFactions.length; j++) {
                sidesFactions[i].forEach(f1 => {
                    sidesFactions[j].forEach(f2 => {
                        if (!f1 || !f2 || f1 === 'unaligned' || f2 === 'unaligned') return;
                        
                        if (!atWar.has(f1)) atWar.set(f1, new Set());
                        if (!atWar.has(f2)) atWar.set(f2, new Set());
                        
                        atWar.get(f1).add(f2);
                        atWar.get(f2).add(f1);
                    });
                });
            }
        }
    });
    
    return atWar;
}

function areFactionsAtWar(factionId1, factionId2) {
    const atWar = getFactionsAtWar();
    return atWar.has(factionId1) && atWar.get(factionId1).has(factionId2);
}
function isFactionAtWar(factionId) {
    const atWar = getFactionsAtWar();
    return atWar.has(factionId) && atWar.get(factionId).size > 0;
}
function getFactionEnemies(factionId) {
    const atWar = getFactionsAtWar();
    return atWar.has(factionId) ? Array.from(atWar.get(factionId)) : [];
}
// ============================================
// SCRIPTED ALLIANCES
// ============================================
function calculateAllianceCohesion(alliance, compatMatrix) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    const modifiers = allianceType.cohesionModifiers;
    
    // Base cohesion from ideological compatibility
    let totalCompat = 0;
    let compatCount = 0;
    alliance.members.forEach(m1 => {
        alliance.members.forEach(m2 => {
            if (m1 < m2 && compatMatrix[m1]?.[m2]) {
                totalCompat += compatMatrix[m1][m2].compatibility;
                compatCount++;
            }
        });
    });
    let baseCohesion = compatCount > 0 ? totalCompat / compatCount : 70;
    
    // Apply type-specific modifiers
    let cohesion = baseCohesion;
    
    // Per region penalty
    const regions = getAllianceRegions(alliance);
    if (modifiers.perRegion) {
        const regionPenalty = Math.max(0, regions.length - 1) * modifiers.perRegion;
        cohesion += regionPenalty;
    }
    
    // Shared borders bonus
    if (modifiers.sharedBorders) {
        const sharedCount = countSharedBorders(alliance.members);
        cohesion += sharedCount * modifiers.sharedBorders;
    }
    
    // Per member penalty (over 3)
    if (modifiers.perMember) {
        const memberPenalty = Math.max(0, alliance.members.length - 3) * modifiers.perMember;
        cohesion += memberPenalty;
    }
    
    // Power imbalance (for hegemonic)
    if (modifiers.powerImbalance) {
        const powers = alliance.members.map(m => getFactionTotalPOIs(m));
        const maxPower = Math.max(...powers);
        const avgPower = powers.reduce((a, b) => a + b, 0) / powers.length;
        if (maxPower > avgPower * 2) {
            cohesion += modifiers.powerImbalance;
        }
    }
    
    // Check for at war penalty
    if (modifiers.atWar) {
        const atWar = alliance.members.some(m => isFactionAtWar(m));
        if (atWar) {
            cohesion += modifiers.atWar;
        }
    }
    
    // Clamp to 0-100
    return Math.max(0, Math.min(100, Math.round(cohesion)));
}
function countSharedBorders(memberIds) {
    // Simplified: count how many members share regions
    const memberRegions = {};
    memberIds.forEach(m => {
        memberRegions[m] = new Set();
        Object.entries(MAP_DATA || {}).forEach(([regionId, region]) => {
            if (!regionId.endsWith('_full')) return;
            const pois = region.pointsOfInterest || [];
            if (pois.some(p => p.factionId === m)) {
                memberRegions[m].add(regionId);
            }
        });
    });
    
    let sharedCount = 0;
    for (let i = 0; i < memberIds.length; i++) {
        for (let j = i + 1; j < memberIds.length; j++) {
            const regions1 = memberRegions[memberIds[i]];
            const regions2 = memberRegions[memberIds[j]];
            const shared = [...regions1].filter(r => regions2.has(r));
            if (shared.length > 0) sharedCount++;
        }
    }
    
    return sharedCount;
}
function getMemberFeatures(alliance, memberId) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    const allFeatures = allianceType.features || [];
    const restrictions = allianceType.restrictions || [];
    const memberRole = alliance.memberRoles?.[memberId] || 'full_member';
    
    const memberFeatures = [];
    
    allFeatures.forEach(featureId => {
        const feature = ALLIANCE_FEATURES[featureId];
        if (!feature) return;
        
        let enabled = true;
        let reason = null;
        
        // Check role-based restrictions
        if (memberRole === 'observer') {
            enabled = false;
            reason = 'Observer status - no active participation';
        } else if (memberRole === 'puppet' && feature.category !== 'governance') {
            // Puppets get protection but no active features
            if (!['overlord_protection', 'peace_guarantee'].includes(featureId)) {
                enabled = false;
                reason = 'Puppet state - limited to protection only';
            }
        } else if (memberRole === 'associate') {
            // Associates get partial features
            if (['military_access', 'forced_military', 'leader_control'].includes(featureId)) {
                enabled = false;
                reason = 'Associate member - limited military integration';
            }
        }
        
        // Check regional restrictions for military features
        if (feature.category === 'military' && restrictions.includes('regional_defense_only')) {
            // Check if member shares region with any ally
            const memberRegions = getMemberRegions(memberId);
            const allyRegions = alliance.members
                .filter(m => m !== memberId)
                .flatMap(m => getMemberRegions(m));
            const sharedRegions = memberRegions.filter(r => allyRegions.includes(r));
            
            if (sharedRegions.length === 0) {
                enabled = false;
                reason = 'No shared regions with allies';
            }
        }
        
        // Check naval restrictions
        if (feature.category === 'naval' && restrictions.includes('coastal_only')) {
            const hasCoast = checkHasCoastalTerritory(memberId);
            if (!hasCoast) {
                enabled = false;
                reason = 'No coastal territory';
            }
        }
        
        memberFeatures.push({
            ...feature,
            enabled,
            reason
        });
    });
    
    return memberFeatures;
}
function getMemberRegions(memberId) {
    const regions = [];
    Object.entries(MAP_DATA || {}).forEach(([regionId, region]) => {
        if (!regionId.endsWith('_full')) return;
        const pois = region.pointsOfInterest || [];
        if (pois.some(p => p.factionId === memberId)) {
            regions.push(regionId);
        }
    });
    return regions;
}

const SCRIPTED_ALLIANCES = [
    {
        id: 'iron_pact',
        name: 'The Iron Pact',
        allianceType: 'military_pact',
        members: ['regal_empire', 'iron_legion', 'iron_fists'],
        leader: 'regal_empire',
        memberRoles: {
            'regal_empire': 'leader',
            'iron_legion': 'full_member',
            'iron_fists': 'full_member'
        },
        description: 'A military alliance forged between the Regal Empire and its iron-fisted allies.',
        motto: 'Strength Through Unity',
        founded: 'Year 1038',
        isScripted: true
    },
    {
        id: 'koopa_alliance',
        name: 'Koopa Dominion',
        allianceType: 'hegemonic_bloc',
        members: ['koopa_troop', 'kremling_krew'],
        leader: 'koopa_troop',
        memberRoles: {
            'koopa_troop': 'leader',
            'kremling_krew': 'vassal'
        },
        description: 'The Koopa Troop dominates with the Kremlings as subordinate allies.',
        motto: 'Scale and Claw',
        founded: 'Year 1035',
        isScripted: true
    },
    {
        id: 'liberation_front',
        name: 'Liberation Front',
        allianceType: 'defensive_coalition',
        members: ['liberated_toads', 'the_unchained', 'peach_loyalists'],
        leader: 'liberated_toads',
        memberRoles: {
            'liberated_toads': 'leader',
            'the_unchained': 'full_member',
            'peach_loyalists': 'full_member'
        },
        description: 'Freedom fighters united against tyranny.',
        motto: 'Free the Chains',
        founded: 'Year 1040',
        isScripted: true
    },
    {
        id: 'arcane_council',
        name: 'Arcane Council',
        allianceType: 'technology_pact',
        members: ['mages_guild', 'cosmic_jesters'],
        leader: 'mages_guild',
        memberRoles: {
            'mages_guild': 'leader',
            'cosmic_jesters': 'full_member'
        },
        description: 'Magical factions united in pursuit of arcane knowledge.',
        motto: 'Knowledge is Power',
        founded: 'Year 1020',
        isScripted: true
    },
    {
        id: 'merchant_accord',
        name: 'Merchant Accord',
        allianceType: 'economic_union',
        members: ['beanbean_kingdom', 'diamond_city_investigators', 'goodstyle_artisans'],
        leader: 'beanbean_kingdom',
        memberRoles: {
            'beanbean_kingdom': 'leader',
            'diamond_city_investigators': 'full_member',
            'goodstyle_artisans': 'associate'
        },
        description: 'A trade alliance focused on economic cooperation.',
        motto: 'Prosperity Through Trade',
        founded: 'Year 1025',
        isScripted: true
    },
    {
        id: 'maritime_league',
        name: 'Maritime League',
        allianceType: 'naval_league',
        members: ['dk_crew', 'yoshi_clans'],
        leader: 'dk_crew',
        memberRoles: {
            'dk_crew': 'leader',
            'yoshi_clans': 'full_member'
        },
        description: 'Island nations protecting their waters and trade routes.',
        motto: 'Masters of the Waves',
        founded: 'Year 1030',
        isScripted: true
    }
];

// ============================================
// EXCLUDED FACTIONS
// ============================================

const ALLIANCE_EXCLUDED_FACTIONS = [
    'freelancer_underworld',
    'unaligned',
    'independent',
    'tea_leaf_syndicate',
    'crimson_fleet',
    'onyx_hand',
    'neutral',
    'none'
];

// ============================================
// STATE
// ============================================

let currentView = 'grid'; // 'grid', 'list', 'comparison'
let currentSort = 'power'; // 'power', 'members', 'cohesion', 'name'
let selectedAlliances = []; // For comparison view
let allianceData = null;

// ============================================
// HELPER FUNCTIONS
// ============================================

export function isExcludedFromAlliances(factionId) {
    if (!factionId) return true;
    
    const idLower = factionId.toLowerCase();
    if (ALLIANCE_EXCLUDED_FACTIONS.includes(idLower)) return true;
    if (ALLIANCE_EXCLUDED_FACTIONS.includes(factionId)) return true;
    
    const faction = getFaction(factionId);
    if (faction) {
        const name = (faction.name || '').toLowerCase();
        const type = (faction.type || '').toLowerCase();
        
        if (name.includes('freelancer') || name.includes('mercenary') || 
            name.includes('underworld') || name.includes('criminal') ||
            type.includes('criminal') || type.includes('mercenary')) {
            return true;
        }
    }
    
    return false;
}

function getFactionTotalPOIs(factionId) {
    if (!MAP_DATA) return 0;
    
    let count = 0;
    Object.entries(MAP_DATA).forEach(([regionId, region]) => {
        if (!regionId.endsWith('_full')) return;
        const pois = region.pointsOfInterest || [];
        pois.forEach(poi => {
            if (poi.factionId === factionId) count++;
        });
    });
    
    return count;
}

function getFactionStats(factionId) {
    if (!MAP_DATA) return { military: 0, economic: 0, political: 0, population: 0 };
    
    let military = 0, economic = 0, political = 0, population = 0;
    
    Object.entries(MAP_DATA).forEach(([regionId, region]) => {
        if (!regionId.endsWith('_full')) return;
        const pois = region.pointsOfInterest || [];
        pois.forEach(poi => {
            if (poi.factionId === factionId) {
                military += poi.military_strength || 0;
                economic += poi.economic_value || 0;
                political += poi.political_influence || 0;
                population += poi.population || 0;
            }
        });
    });
    
    return { military, economic, political, population };
}

function getAllianceThreshold(currentAllianceSize) {
    const base = ALLIANCE_SIZE_LIMITS.BASE_THRESHOLD;
    const penalty = currentAllianceSize * ALLIANCE_SIZE_LIMITS.SIZE_PENALTY_PER_MEMBER;
    return Math.min(95, base + penalty);
}

function getAlliancePOIs(alliance) {
    if (!MAP_DATA) return [];
    
    const pois = [];
    const seenPois = new Set(); // Track POIs we've already added
    const memberSet = new Set(alliance.members);
    
    Object.entries(MAP_DATA).forEach(([regionId, region]) => {
        if (!regionId.endsWith('_full')) return;
        const regionName = (region.name || regionId).replace(' (Full)', '');
        const regionPois = region.pointsOfInterest || [];
        
        regionPois.forEach(poi => {
            if (memberSet.has(poi.factionId)) {
                // Create a unique key for this POI
                const poiKey = `${poi.name}_${poi.factionId}_${regionId}`;
                
                // Only add if we haven't seen this POI before
                if (!seenPois.has(poiKey)) {
                    seenPois.add(poiKey);
                    pois.push({
                        ...poi,
                        regionId,
                        regionName,
                        ownerFaction: getFaction(poi.factionId)
                    });
                }
            }
        });
    });
    
    // Sort by combined value
    return pois.sort((a, b) => {
        const aVal = (a.military_strength || 0) + (a.economic_value || 0);
        const bVal = (b.military_strength || 0) + (b.economic_value || 0);
        return bVal - aVal;
    });
}

function getAllianceRegions(alliance) {
    if (!MAP_DATA) return [];
    
    const regionStats = {};
    const memberSet = new Set(alliance.members);
    
    Object.entries(MAP_DATA).forEach(([regionId, region]) => {
        if (!regionId.endsWith('_full')) return;
        const regionName = (region.name || regionId).replace(' (Full)', '');
        const pois = region.pointsOfInterest || [];
        
        let alliancePois = 0;
        let allianceMilitary = 0;
        let allianceEconomic = 0;
        
        pois.forEach(poi => {
            if (memberSet.has(poi.factionId)) {
                alliancePois++;
                allianceMilitary += poi.military_strength || 0;
                allianceEconomic += poi.economic_value || 0;
            }
        });
        
        if (alliancePois > 0) {
            regionStats[regionId] = {
                id: regionId,
                name: regionName,
                poiCount: alliancePois,
                totalPois: pois.length,
                military: allianceMilitary,
                economic: allianceEconomic,
                controlPercent: Math.round((alliancePois / pois.length) * 100)
            };
        }
    });
    
    return Object.values(regionStats).sort((a, b) => b.controlPercent - a.controlPercent);
}

// ============================================
// ALLIANCE CALCULATION
// ============================================

export function calculateAllAlliances() {
    const allFactions = getAllFactions();
    const factionIds = Object.keys(allFactions).filter(id => 
        id !== 'unaligned' && !isExcludedFromAlliances(id)
    );
    
    // Build compatibility matrix
    const compatMatrix = {};
    factionIds.forEach(id1 => {
        compatMatrix[id1] = {};
        factionIds.forEach(id2 => {
            if (id1 === id2) {
                compatMatrix[id1][id2] = { compatibility: 100 };
            } else if (compatMatrix[id2]?.[id1]) {
                compatMatrix[id1][id2] = compatMatrix[id2][id1];
            } else {
                compatMatrix[id1][id2] = calculateFactionCompatibility(id1, id2) || { compatibility: 50 };
            }
        });
    });
    
    const alliances = [];
    const factionToAlliance = {};
    
    // Step 1: Apply scripted alliances
    SCRIPTED_ALLIANCES.forEach(scripted => {
        const validMembers = scripted.members.filter(id => {
            const exists = getFaction(id);
            return exists && !isExcludedFromAlliances(id);
        });
        
        if (validMembers.length < 2) return;
        
        // Calculate roles dynamically if not specified
        const { roles, leaderId, memberPowers } = calculateMemberRoles({
            members: validMembers,
            leader: scripted.leader
        });
        
        const leader = validMembers.includes(scripted.leader) ? scripted.leader : leaderId;
        const leaderFaction = getFaction(leader);
        
        // Use scripted type or calculate dynamically
        const allianceType = scripted.allianceType || calculateAllianceType(validMembers);
        
        const alliance = {
            id: scripted.id,
            name: scripted.name,
            allianceType: allianceType,
            members: validMembers,
            leader,
            leaderFaction,
            memberRoles: scripted.memberRoles || roles,
            memberPowers,
            description: scripted.description,
            motto: scripted.motto,
            founded: scripted.founded,
            isScripted: true
        };
        
        alliances.push(alliance);
        validMembers.forEach(m => {
            factionToAlliance[m] = alliance;
        });
    });
    
    // Step 2: Form organic alliances
    const sortedFactions = factionIds
        .filter(id => !factionToAlliance[id])
        .filter(id => getFactionTotalPOIs(id) >= ALLIANCE_SIZE_LIMITS.MIN_POI_FOR_ALLIANCE)
        .sort((a, b) => getFactionTotalPOIs(b) - getFactionTotalPOIs(a));
    
    const processedPairs = new Set();
    
    sortedFactions.forEach(id1 => {
        sortedFactions.forEach(id2 => {
            if (id1 >= id2) return;
            
            const pairKey = [id1, id2].sort().join('|');
            if (processedPairs.has(pairKey)) return;
            processedPairs.add(pairKey);
            
            const compat = compatMatrix[id1][id2];
            let threshold = ALLIANCE_SIZE_LIMITS.BASE_THRESHOLD;
            
            // Regional bonus
            const regions1 = getMemberRegions(id1);
            const regions2 = getMemberRegions(id2);
            const sharedRegions = regions1.filter(r => regions2.includes(r));
            if (sharedRegions.length > 0) {
                threshold -= Math.min(15, sharedRegions.length * 5);
            }
            
            if (compat.compatibility >= threshold) {
                const existing1 = factionToAlliance[id1];
                const existing2 = factionToAlliance[id2];
                
                if (!existing1 && !existing2) {
                    // Create new organic alliance
                    const members = [id1, id2];
                    const { roles, leaderId, memberPowers } = calculateMemberRoles({ members });
                    const allianceType = calculateAllianceType(members);
                    const leaderFaction = getFaction(leaderId);
                    
                    const newAlliance = {
                        id: `organic_${alliances.length + 1}`,
                        name: `${leaderFaction.shortName} Pact`,
                        allianceType,
                        members,
                        leader: leaderId,
                        leaderFaction,
                        memberRoles: roles,
                        memberPowers,
                        isScripted: false
                    };
                    
                    alliances.push(newAlliance);
                    factionToAlliance[id1] = newAlliance;
                    factionToAlliance[id2] = newAlliance;
                } else if (existing1 && !existing1.isScripted && !existing2) {
                    if (existing1.members.length < ALLIANCE_SIZE_LIMITS.MAX_ALLIANCE_SIZE) {
                        existing1.members.push(id2);
                        factionToAlliance[id2] = existing1;
                        // Recalculate roles and type
                        const { roles, leaderId, memberPowers } = calculateMemberRoles(existing1);
                        existing1.memberRoles = roles;
                        existing1.memberPowers = memberPowers;
                        existing1.allianceType = calculateAllianceType(existing1.members);
                    }
                } else if (existing2 && !existing2.isScripted && !existing1) {
                    if (existing2.members.length < ALLIANCE_SIZE_LIMITS.MAX_ALLIANCE_SIZE) {
                        existing2.members.push(id1);
                        factionToAlliance[id1] = existing2;
                        const { roles, leaderId, memberPowers } = calculateMemberRoles(existing2);
                        existing2.memberRoles = roles;
                        existing2.memberPowers = memberPowers;
                        existing2.allianceType = calculateAllianceType(existing2.members);
                    }
                }
            }
        });
    });
    
    // Step 3: Calculate alliance metadata
    alliances.forEach(alliance => {
        // Ensure we have roles
        if (!alliance.memberRoles) {
            const { roles, leaderId, memberPowers } = calculateMemberRoles(alliance);
            alliance.memberRoles = roles;
            alliance.memberPowers = memberPowers;
            alliance.leader = leaderId;
            alliance.leaderFaction = getFaction(leaderId);
        }
        
        // Calculate totals
        let totalMilitary = 0;
        let totalEconomic = 0;
        let totalPolitical = 0;
        let totalPopulation = 0;
        let totalPOIs = 0;
        
        alliance.members.forEach(memberId => {
            const stats = getFactionStats(memberId);
            totalMilitary += stats.military;
            totalEconomic += stats.economic;
            totalPolitical += stats.political;
            totalPopulation += stats.population;
            totalPOIs += getFactionTotalPOIs(memberId);
        });
        
        alliance.totalMilitary = totalMilitary;
        alliance.totalEconomic = totalEconomic;
        alliance.totalPolitical = totalPolitical;
        alliance.totalPopulation = totalPopulation;
        alliance.totalPOIs = totalPOIs;
        alliance.totalPower = totalMilitary * 2 + totalEconomic * 1.5 + totalPolitical + (totalPOIs * 5);
        
        // Update name for organic alliances
        if (!alliance.isScripted) {
            const leaderFaction = alliance.leaderFaction || getFaction(alliance.leader);
            if (alliance.members.length >= 6) {
                alliance.name = `${leaderFaction.shortName} Grand Coalition`;
                alliance.type = 'grand_coalition';
            } else if (alliance.members.length >= 4) {
                alliance.name = `${leaderFaction.shortName} Coalition`;
                alliance.type = 'coalition';
            } else if (alliance.members.length >= 3) {
                alliance.name = `${leaderFaction.shortName} Alliance`;
                alliance.type = 'alliance';
            } else {
                alliance.name = `${leaderFaction.shortName} Pact`;
                alliance.type = 'pact';
            }
        }
        
        // Calculate cohesion with type modifiers
        alliance.cohesion = calculateAllianceCohesion(alliance, compatMatrix);
        
        // Set color/icon
        alliance.color = alliance.leaderFaction?.color || '#666';
        alliance.icon = alliance.leaderFaction?.icon || '🏴';
        
        // Get regions
        alliance.regions = getAllianceRegions(alliance);
        alliance.dominatedRegions = alliance.regions.filter(r => r.controlPercent > 50).length;
    });
    
    // Sort by power
    alliances.sort((a, b) => b.totalPower - a.totalPower);
    
    // Calculate independents
    const independentFactions = factionIds
        .filter(id => !factionToAlliance[id])
        .map(id => {
            const faction = getFaction(id);
            const stats = getFactionStats(id);
            const pois = getFactionTotalPOIs(id);
            return {
                id,
                faction,
                ...stats,
                poiCount: pois,
                totalPower: stats.military * 2 + stats.economic * 1.5 + stats.political + (pois * 5)
            };
        })
        .filter(f => f.poiCount > 0)
        .sort((a, b) => b.totalPower - a.totalPower);
    
    return {
        alliances,
        factionToAlliance,
        compatMatrix,
        independentFactions,
        totalAlliances: alliances.length,
        totalScripted: alliances.filter(a => a.isScripted).length,
        totalOrganic: alliances.filter(a => !a.isScripted).length,
        totalIndependent: independentFactions.length
    };
}
function renderAllianceMemberChip(memberId, alliance, showStats = false) {
    const member = getFaction(memberId);
    const role = alliance.memberRoles?.[memberId] || 'full_member';
    const roleInfo = MEMBER_ROLES[role] || MEMBER_ROLES.full_member;
    const isLeader = memberId === alliance.leader;
    const power = alliance.memberPowers?.[memberId] || 0;
    const stats = showStats ? getFactionStats(memberId) : null;
    
    return `
        <div class="member-chip ${role}" 
             data-faction="${memberId}"
             style="--member-color: ${member?.color || '#666'};"
             title="${member?.name || memberId} - ${roleInfo.name}">
            <span class="member-icon" style="background: ${member?.color || '#666'};">
                ${member?.icon || '❓'}
            </span>
            <span class="member-name">${member?.shortName || memberId}</span>
            ${isLeader ? '<span class="leader-crown">👑</span>' : ''}
            <span class="role-indicator" style="color: ${roleInfo.color};" title="${roleInfo.name}">
                ${roleInfo.icon}
            </span>
            ${showStats && stats ? `
                <span class="member-stats-inline">⚔️${stats.military}</span>
            ` : ''}
        </div>
    `;
}
function renderAllianceHeader(alliance, showPower = true) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    
    return `
        <div class="alliance-header-unified" style="--alliance-color: ${alliance.color};">
            <span class="alliance-icon-unified" style="background: ${alliance.color};">
                ${alliance.icon}
            </span>
            <div class="alliance-info-unified">
                <h4 class="alliance-name-unified">${alliance.name}</h4>
                <div class="alliance-meta-unified">
                    <span class="alliance-type-badge ${alliance.allianceType}">
                        ${allianceType.icon} ${allianceType.name}
                    </span>
                    <span class="alliance-size">${alliance.members.length} members</span>
                    <span class="alliance-cohesion-inline">${alliance.cohesion}% cohesion</span>
                </div>
            </div>
            ${showPower ? `
                <div class="alliance-power-badge">
                    <span class="power-value">${Math.round(alliance.totalPower)}</span>
                    <span class="power-label">Power</span>
                </div>
            ` : ''}
        </div>
    `;
}
function renderAllianceSectionCompact(alliance) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    
    return `
        <div class="alliance-section-compact" style="border-color: ${alliance.color};">
            ${renderAllianceHeader(alliance, false)}
            
            <div class="alliance-members-compact">
                <span class="members-label">Members:</span>
                <div class="members-list-compact">
                    ${alliance.members.map(m => renderAllianceMemberChip(m, alliance, true)).join('')}
                </div>
            </div>
            
            <div class="alliance-features-compact">
                ${allianceType.features.slice(0, 5).map(fId => {
                    const f = ALLIANCE_FEATURES[fId];
                    return f ? `<span class="feature-dot" title="${f.name}">${f.icon}</span>` : '';
                }).join('')}
            </div>
        </div>
    `;
}
function renderTerritoryAllianceSection(control) {
    if (!control.alliance) return '';
    
    const alliance = control.alliance;
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    
    return `
        <div class="modal-section alliance-section">
            <h4>🤝 Controlling Alliance</h4>
            <div class="alliance-card-unified" style="border-color: ${alliance.color};">
                <div class="alliance-card-header-unified">
                    <span class="alliance-icon" style="background: ${alliance.color};">
                        ${alliance.icon}
                    </span>
                    <div class="alliance-info">
                        <span class="alliance-name">${alliance.name}</span>
                        <span class="alliance-type-line">
                            <span class="alliance-type-badge ${alliance.allianceType}">
                                ${allianceType.icon} ${allianceType.name}
                            </span>
                            <span class="alliance-stats-mini">
                                ${alliance.members.length} members • ${alliance.cohesion}% cohesion
                            </span>
                        </span>
                    </div>
                    <div class="alliance-power">
                        <span class="power-value">${control.controlPercent}%</span>
                        <span class="power-label">control</span>
                    </div>
                </div>
                
                <div class="alliance-members">
                    <span class="members-label">Member Factions:</span>
                    <div class="members-list">
                        ${alliance.members.map(memberId => {
                            const member = getFaction(memberId);
                            const isLeader = memberId === alliance.leader;
                            const role = alliance.memberRoles?.[memberId] || 'full_member';
                            const roleInfo = MEMBER_ROLES[role] || MEMBER_ROLES.full_member;
                            const memberStats = control.dominantBloc?.members?.find(m => m.factionId === memberId);
                            
                            return `
                                <div class="member-chip ${role}" 
                                     style="border-color: ${member?.color || '#666'};"
                                     onclick="window.showFactionModal('${memberId}'); document.getElementById('terr-modal')?.remove();">
                                    <span class="member-icon" style="background: ${member?.color || '#666'};">
                                        ${member?.icon || '?'}
                                    </span>
                                    <span class="member-name">${member?.shortName || memberId}</span>
                                    ${isLeader ? '<span class="leader-badge">👑</span>' : `<span class="role-badge" style="color: ${roleInfo.color};">${roleInfo.icon}</span>`}
                                    ${memberStats ? `<span class="member-power">⚔️${memberStats.stats?.military || 0}</span>` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="alliance-features-row">
                    <span class="features-label">Features:</span>
                    <div class="features-icons">
                        ${allianceType.features.slice(0, 6).map(fId => {
                            const f = ALLIANCE_FEATURES[fId];
                            return f ? `<span class="feature-icon-mini" title="${f.name}: ${f.effect}">${f.icon}</span>` : '';
                        }).join('')}
                    </div>
                </div>
            </div>
            
            <p class="control-explanation">
                <strong>De Facto</strong> control - This territory is governed by an alliance of ideologically aligned factions.
                As a <strong>${allianceType.name}</strong>, members share ${allianceType.features.slice(0, 2).map(f => ALLIANCE_FEATURES[f]?.name || f).join(' and ')}.
            </p>
        </div>
    `;
}
// ============================================
// RENDER FUNCTIONS
// ============================================

function renderStatsBar(data) {
    const totalFactions = data.alliances.reduce((sum, a) => sum + a.members.length, 0) + data.independentFactions.length;
    const totalPower = data.alliances.reduce((sum, a) => sum + a.totalPower, 0);
    
    return `
        <div class="stats-bar">
            <div class="stat-card">
                <span class="stat-icon">🤝</span>
                <div class="stat-info">
                    <span class="stat-value">${data.totalAlliances}</span>
                    <span class="stat-label">Active Alliances</span>
                </div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">📜</span>
                <div class="stat-info">
                    <span class="stat-value">${data.totalScripted}</span>
                    <span class="stat-label">Treaty Alliances</span>
                </div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">🌱</span>
                <div class="stat-info">
                    <span class="stat-value">${data.totalOrganic}</span>
                    <span class="stat-label">Organic Pacts</span>
                </div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">🏴</span>
                <div class="stat-info">
                    <span class="stat-value">${data.totalIndependent}</span>
                    <span class="stat-label">Independent</span>
                </div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">⚡</span>
                <div class="stat-info">
                    <span class="stat-value">${Math.round(totalPower).toLocaleString()}</span>
                    <span class="stat-label">Combined Power</span>
                </div>
            </div>
        </div>
    `;
}

function renderControls() {
    return `
        <div class="alliance-controls">
            <div class="view-toggle">
                <button class="view-btn ${currentView === 'grid' ? 'active' : ''}" data-view="grid">
                    <span>📊</span> Grid View
                </button>
                <button class="view-btn ${currentView === 'list' ? 'active' : ''}" data-view="list">
                    <span>📋</span> List View
                </button>
                <button class="view-btn ${currentView === 'comparison' ? 'active' : ''}" data-view="comparison">
                    <span>⚖️</span> Compare
                </button>
            </div>
            
            <div class="sort-controls">
                <label>Sort by:</label>
                <select id="alliance-sort">
                    <option value="power" ${currentSort === 'power' ? 'selected' : ''}>Total Power</option>
                    <option value="members" ${currentSort === 'members' ? 'selected' : ''}>Member Count</option>
                    <option value="cohesion" ${currentSort === 'cohesion' ? 'selected' : ''}>Cohesion</option>
                    <option value="pois" ${currentSort === 'pois' ? 'selected' : ''}>Territory (POIs)</option>
                    <option value="name" ${currentSort === 'name' ? 'selected' : ''}>Name</option>
                </select>
            </div>
            
            <div class="filter-controls">
                <label>
                    <input type="checkbox" id="filter-scripted" checked> Treaty
                </label>
                <label>
                    <input type="checkbox" id="filter-organic" checked> Organic
                </label>
            </div>
        </div>
    `;
}

function renderAllianceCard(alliance, rank) {
    const allianceType = ALLIANCE_TYPES[alliance.allianceType] || ALLIANCE_TYPES.military_pact;
    const topPois = getAlliancePOIs(alliance).slice(0, 3);
    
    return `
        <div class="alliance-card ${alliance.isScripted ? 'scripted' : 'organic'}" 
             data-alliance="${alliance.id}"
             style="--alliance-color: ${alliance.color};">
            
            <div class="alliance-card-header">
                <div class="alliance-rank">#${rank}</div>
                <div class="alliance-icon" style="background: ${alliance.color};">
                    ${alliance.icon}
                </div>
                <div class="alliance-title">
                    <h3 class="alliance-name">${alliance.name}</h3>
                    <div class="alliance-meta">
                        <span class="alliance-type-badge ${alliance.allianceType}">
                            ${allianceType.icon} ${allianceType.name}
                        </span>
                        ${alliance.isScripted ? '<span class="scripted-badge">📜 Treaty</span>' : ''}
                    </div>
                </div>
                <div class="alliance-cohesion">
                    <div class="cohesion-ring" style="--cohesion: ${alliance.cohesion}%;">
                        <span class="cohesion-value">${alliance.cohesion}%</span>
                    </div>
                    <span class="cohesion-label">Cohesion</span>
                </div>
            </div>
            
            <!-- Alliance Type Features Preview -->
            <div class="alliance-type-preview">
                <span class="preview-label">Features:</span>
                <div class="preview-features">
                    ${allianceType.features.slice(0, 4).map(fId => {
                        const f = ALLIANCE_FEATURES[fId];
                        return f ? `<span class="feature-mini" title="${f.name}">${f.icon}</span>` : '';
                    }).join('')}
                    ${allianceType.features.length > 4 ? `<span class="feature-more">+${allianceType.features.length - 4}</span>` : ''}
                </div>
            </div>
            
            <div class="alliance-card-body">
                <!-- Members with roles -->
                <div class="alliance-members-section">
                    <h4>Member Factions</h4>
                    <div class="members-list">
                        ${alliance.members.map(memberId => {
                            const member = getFaction(memberId);
                            const role = alliance.memberRoles?.[memberId] || 'full_member';
                            const roleInfo = MEMBER_ROLES[role];
                            return `
                                <div class="member-chip ${role}" 
                                     data-faction="${memberId}"
                                     style="--member-color: ${member?.color || '#666'};">
                                    <span class="member-icon" style="background: ${member?.color || '#666'};">
                                        ${member?.icon || '❓'}
                                    </span>
                                    <span class="member-name">${member?.shortName || memberId}</span>
                                    <span class="member-role-badge ${role}" title="${roleInfo?.name}">
                                        ${roleInfo?.icon || ''}
                                    </span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <!-- Rest of card body... -->
                ${alliance.description ? `
                    <div class="alliance-description">
                        <p>${alliance.description}</p>
                    </div>
                ` : ''}
                
                <!-- Stats grid -->
                <div class="alliance-stats-grid">
                    <div class="alliance-stat">
                        <span class="stat-icon">👥</span>
                        <span class="stat-value">${alliance.members.length}</span>
                        <span class="stat-label">Members</span>
                    </div>
                    <div class="alliance-stat">
                        <span class="stat-icon">⚔️</span>
                        <span class="stat-value">${alliance.totalMilitary}</span>
                        <span class="stat-label">Military</span>
                    </div>
                    <div class="alliance-stat">
                        <span class="stat-icon">💰</span>
                        <span class="stat-value">${alliance.totalEconomic}</span>
                        <span class="stat-label">Economic</span>
                    </div>
                    <div class="alliance-stat">
                        <span class="stat-icon">📍</span>
                        <span class="stat-value">${alliance.totalPOIs}</span>
                        <span class="stat-label">POIs</span>
                    </div>
                    <div class="alliance-stat">
                        <span class="stat-icon">🗺️</span>
                        <span class="stat-value">${alliance.dominatedRegions}</span>
                        <span class="stat-label">Regions</span>
                    </div>
                    <div class="alliance-stat highlight">
                        <span class="stat-icon">⚡</span>
                        <span class="stat-value">${Math.round(alliance.totalPower)}</span>
                        <span class="stat-label">Power</span>
                    </div>
                </div>
            </div>
            
            <div class="alliance-card-footer">
                <button class="btn-details" data-alliance="${alliance.id}">
                    View Details
                </button>
            </div>
        </div>
    `;
}

function renderListView(alliances) {
    return `
        <div class="alliance-list">
            <div class="list-header">
                <span class="col-rank">#</span>
                <span class="col-name">Alliance</span>
                <span class="col-type">Type</span>
                <span class="col-members">Members</span>
                <span class="col-cohesion">Cohesion</span>
                <span class="col-military">Military</span>
                <span class="col-economic">Economic</span>
                <span class="col-pois">POIs</span>
                <span class="col-power">Power</span>
                <span class="col-actions">Actions</span>
            </div>
            ${alliances.map((alliance, index) => `
                <div class="list-row" data-alliance="${alliance.id}" style="--alliance-color: ${alliance.color};">
                    <span class="col-rank">${index + 1}</span>
                    <span class="col-name">
                        <span class="row-icon" style="background: ${alliance.color};">${alliance.icon}</span>
                        <span class="row-name">${alliance.name}</span>
                        ${alliance.isScripted ? '<span class="mini-badge scripted">📜</span>' : ''}
                    </span>
                    <span class="col-type">${alliance.type}</span>
                    <span class="col-members">${alliance.members.length}</span>
                    <span class="col-cohesion">
                        <span class="cohesion-bar" style="--cohesion: ${alliance.cohesion}%;"></span>
                        ${alliance.cohesion}%
                    </span>
                    <span class="col-military">⚔️ ${alliance.totalMilitary}</span>
                    <span class="col-economic">💰 ${alliance.totalEconomic}</span>
                    <span class="col-pois">📍 ${alliance.totalPOIs}</span>
                    <span class="col-power highlight">${Math.round(alliance.totalPower)}</span>
                    <span class="col-actions">
                        <button class="btn-view" data-alliance="${alliance.id}">View</button>
                    </span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderComparisonView(alliances) {
    const selected = alliances.filter(a => selectedAlliances.includes(a.id));
    
    if (selected.length < 2) {
        return `
            <div class="comparison-prompt">
                <div class="prompt-icon">⚖️</div>
                <h3>Select Alliances to Compare</h3>
                <p>Click "Compare" on at least 2 alliance cards below to see a side-by-side comparison.</p>
                <p class="selected-count">${selectedAlliances.length}/2+ selected</p>
            </div>
            <div class="alliance-grid">
                ${alliances.map((a, i) => renderAllianceCard(a, i + 1)).join('')}
            </div>
        `;
    }
    
    const maxMilitary = Math.max(...selected.map(a => a.totalMilitary), 1);
    const maxEconomic = Math.max(...selected.map(a => a.totalEconomic), 1);
    const maxPower = Math.max(...selected.map(a => a.totalPower), 1);
    
    return `
        <div class="comparison-container">
            <div class="comparison-header">
                <h3>Alliance Comparison</h3>
                <button class="btn-clear-comparison">Clear Selection</button>
            </div>
            
            <div class="comparison-table">
                <div class="comparison-row header">
                    <div class="comparison-cell label">Metric</div>
                    ${selected.map(a => `
                        <div class="comparison-cell alliance-header" style="border-top-color: ${a.color};">
                            <span class="compare-icon" style="background: ${a.color};">${a.icon}</span>
                            <span class="compare-name">${a.name}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="comparison-row">
                    <div class="comparison-cell label">Type</div>
                    ${selected.map(a => `
                        <div class="comparison-cell">${a.type} ${a.isScripted ? '📜' : '🌱'}</div>
                    `).join('')}
                </div>
                
                <div class="comparison-row">
                    <div class="comparison-cell label">👥 Members</div>
                    ${selected.map(a => `
                        <div class="comparison-cell">${a.members.length}</div>
                    `).join('')}
                </div>
                
                <div class="comparison-row">
                    <div class="comparison-cell label">🤝 Cohesion</div>
                    ${selected.map(a => `
                        <div class="comparison-cell">
                            <div class="compare-bar">
                                <div class="compare-fill" style="width: ${a.cohesion}%; background: ${a.color};"></div>
                            </div>
                            <span>${a.cohesion}%</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="comparison-row">
                    <div class="comparison-cell label">⚔️ Military</div>
                    ${selected.map(a => `
                        <div class="comparison-cell">
                            <div class="compare-bar">
                                <div class="compare-fill" style="width: ${(a.totalMilitary / maxMilitary) * 100}%; background: #ef4444;"></div>
                            </div>
                            <span>${a.totalMilitary}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="comparison-row">
                    <div class="comparison-cell label">💰 Economic</div>
                    ${selected.map(a => `
                        <div class="comparison-cell">
                            <div class="compare-bar">
                                <div class="compare-fill" style="width: ${(a.totalEconomic / maxEconomic) * 100}%; background: #eab308;"></div>
                            </div>
                            <span>${a.totalEconomic}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="comparison-row">
                    <div class="comparison-cell label">📍 POIs</div>
                    ${selected.map(a => `
                        <div class="comparison-cell">${a.totalPOIs}</div>
                    `).join('')}
                </div>
                
                <div class="comparison-row">
                    <div class="comparison-cell label">🗺️ Regions Dominated</div>
                    ${selected.map(a => `
                        <div class="comparison-cell">${a.dominatedRegions}</div>
                    `).join('')}
                </div>
                
                <div class="comparison-row highlight">
                    <div class="comparison-cell label">⚡ Total Power</div>
                    ${selected.map(a => `
                        <div class="comparison-cell">
                            <div class="compare-bar">
                                <div class="compare-fill" style="width: ${(a.totalPower / maxPower) * 100}%; background: ${a.color};"></div>
                            </div>
                            <span class="power-value">${Math.round(a.totalPower)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="comparison-members">
                <h4>Member Factions Comparison</h4>
                <div class="members-comparison">
                    ${selected.map(a => `
                        <div class="members-column" style="border-top-color: ${a.color};">
                            <h5>${a.name}</h5>
                            <div class="member-list">
                                ${a.members.map(m => {
                                    const faction = getFaction(m);
                                    return `
                                        <div class="member-row" data-faction="${m}">
                                            <span class="m-icon" style="background: ${faction?.color || '#666'};">${faction?.icon || '?'}</span>
                                            <span class="m-name">${faction?.shortName || m}</span>
                                            ${m === a.leader ? '<span class="m-leader">👑</span>' : ''}
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <h3 class="section-divider">All Alliances</h3>
        <div class="alliance-grid">
            ${alliances.map((a, i) => renderAllianceCard(a, i + 1)).join('')}
        </div>
    `;
}

function renderIndependentFactions(factions) {
    if (factions.length === 0) return '';
    
    return `
        <div class="independent-section">
            <h3 class="section-title">🏴 Independent Factions</h3>
            <p class="section-desc">Factions not currently part of any alliance</p>
            <div class="independent-grid">
                ${factions.slice(0, 12).map(f => `
                    <div class="independent-card" data-faction="${f.id}" style="border-color: ${f.faction?.color || '#666'};">
                        <span class="ind-icon" style="background: ${f.faction?.color || '#666'};">
                            ${f.faction?.icon || '❓'}
                        </span>
                        <div class="ind-info">
                            <span class="ind-name">${f.faction?.name || f.id}</span>
                            <span class="ind-stats">⚔️${f.military} 💰${f.economic} 📍${f.poiCount}</span>
                        </div>
                        <span class="ind-power">${Math.round(f.totalPower)}</span>
                    </div>
                `).join('')}
            </div>
            ${factions.length > 12 ? `<p class="more-count">+ ${factions.length - 12} more independent factions</p>` : ''}
        </div>
    `;
}

function getPoiIcon(type) {
    const icons = {
        'capital_city': '👑', 'capital': '👑', 'major_city': '🏙️', 'city': '🏙️',
        'town': '🏡', 'village': '🏘️', 'fortress': '🏰', 'castle': '🏯',
        'port': '⚓', 'mine': '⛏️', 'temple': '⛪', 'tower': '🗼',
        'outpost': '🏕️', 'market': '🛒', 'farm': '🌾'
    };
    return icons[type] || '📍';
}

function sortAlliances(alliances, sortBy) {
    return [...alliances].sort((a, b) => {
        switch (sortBy) {
            case 'members': return b.members.length - a.members.length;
            case 'cohesion': return b.cohesion - a.cohesion;
            case 'pois': return b.totalPOIs - a.totalPOIs;
            case 'name': return a.name.localeCompare(b.name);
            case 'power':
            default: return b.totalPower - a.totalPower;
        }
    });
}

// ============================================
// ALLIANCE DETAIL MODAL
// ============================================

function renderAllianceDetailModal(alliance) {
    const allPois = getAlliancePOIs(alliance);
    const regions = alliance.regions || [];
    
    return `
        <div class="alliance-modal-overlay" id="alliance-modal-${alliance.id}">
            <div class="alliance-modal">
                <button class="modal-close" onclick="this.closest('.alliance-modal-overlay').remove()">✕</button>
                
                <div class="modal-header" style="border-bottom-color: ${alliance.color};">
                    <div class="modal-icon" style="background: ${alliance.color};">${alliance.icon}</div>
                    <div class="modal-title-block">
                        <h2>${alliance.name}</h2>
                        <p class="modal-subtitle">
                            ${alliance.type} • ${alliance.members.length} members
                            ${alliance.isScripted ? '• 📜 Treaty Alliance' : '• 🌱 Organic Pact'}
                        </p>
                    </div>
                    <div class="modal-cohesion" style="background: ${alliance.color}20; border-color: ${alliance.color};">
                        <span class="cohesion-value">${alliance.cohesion}%</span>
                        <span class="cohesion-label">Cohesion</span>
                    </div>
                </div>
                
                <div class="modal-body modal-body-scrollable">
                    <!-- Description -->
                    ${alliance.description ? `
                        <div class="modal-section">
                            <p class="alliance-description-text">${alliance.description}</p>
                            ${alliance.motto ? `<p class="alliance-motto">"${alliance.motto}"</p>` : ''}
                            ${alliance.founded ? `<p class="alliance-founded">Founded: ${alliance.founded}</p>` : ''}
                        </div>
                    ` : ''}
                    
                    <!-- Stats -->
                    <div class="modal-section">
                        <h4>📊 Alliance Statistics</h4>
                        <div class="stats-grid-modal">
                            <div class="stat-box">
                                <span class="stat-icon">⚔️</span>
                                <span class="stat-value">${alliance.totalMilitary}</span>
                                <span class="stat-label">Military Power</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-icon">💰</span>
                                <span class="stat-value">${alliance.totalEconomic}</span>
                                <span class="stat-label">Economic Power</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-icon">🏛️</span>
                                <span class="stat-value">${alliance.totalPolitical}</span>
                                <span class="stat-label">Political Influence</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-icon">👥</span>
                                <span class="stat-value">${alliance.totalPopulation.toLocaleString()}</span>
                                <span class="stat-label">Population</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-icon">📍</span>
                                <span class="stat-value">${alliance.totalPOIs}</span>
                                <span class="stat-label">Controlled POIs</span>
                            </div>
                            <div class="stat-box highlight">
                                <span class="stat-icon">⚡</span>
                                <span class="stat-value">${Math.round(alliance.totalPower)}</span>
                                <span class="stat-label">Total Power</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Members -->
                    <div class="modal-section">
                        <h4>👥 Member Factions (${alliance.members.length})</h4>
                        <div class="members-detail-list">
                            ${alliance.members.map(memberId => {
                                const member = getFaction(memberId);
                                const stats = getFactionStats(memberId);
                                const pois = getFactionTotalPOIs(memberId);
                                const isLeader = memberId === alliance.leader;
                                
                                return `
                                    <div class="member-detail-card ${isLeader ? 'leader' : ''}" 
                                         data-faction="${memberId}"
                                         style="border-color: ${member?.color || '#666'};">
                                        <div class="member-header">
                                            <span class="member-icon" style="background: ${member?.color || '#666'};">
                                                ${member?.icon || '❓'}
                                            </span>
                                            <div class="member-info">
                                                <span class="member-name">${member?.name || memberId}</span>
                                                <span class="member-type">${member?.type || 'Faction'}</span>
                                            </div>
                                            ${isLeader ? '<span class="leader-badge">👑 Leader</span>' : ''}
                                        </div>
                                        <div class="member-stats">
                                            <span>⚔️ ${stats.military}</span>
                                            <span>💰 ${stats.economic}</span>
                                            <span>📍 ${pois}</span>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    
                    <!-- Regions -->
                    ${regions.length > 0 ? `
                        <div class="modal-section">
                            <h4>🗺️ Controlled Regions (${alliance.dominatedRegions} dominated)</h4>
                            <div class="regions-list">
                                ${regions.slice(0, 6).map(r => `
                                    <div class="region-bar-item">
                                        <div class="region-info">
                                            <span class="region-name">${r.name}</span>
                                            <span class="region-stats">📍 ${r.poiCount}/${r.totalPois} • ⚔️${r.military} 💰${r.economic}</span>
                                        </div>
                                        <div class="region-control-bar">
                                            <div class="control-fill" style="width: ${r.controlPercent}%; background: ${alliance.color};"></div>
                                        </div>
                                        <span class="control-percent">${r.controlPercent}%</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Top Holdings -->
                    ${allPois.length > 0 ? `
                        <div class="modal-section">
                            <h4>🏰 Top Holdings (${allPois.length} total)</h4>
                            <div class="holdings-list-modal">
                                ${allPois.slice(0, 8).map(poi => `
                                    <div class="holding-item-modal" style="border-left-color: ${poi.ownerFaction?.color || '#666'};">
                                        <span class="holding-icon">${getPoiIcon(poi.type)}</span>
                                        <div class="holding-info">
                                            <span class="holding-name">${poi.name}</span>
                                            <span class="holding-meta">
                                                ${poi.type} • ${poi.regionName} • 
                                                <span style="color: ${poi.ownerFaction?.color || '#666'};">${poi.ownerFaction?.icon || ''} ${poi.ownerFaction?.shortName || ''}</span>
                                            </span>
                                        </div>
                                        <div class="holding-stats">
                                            <span>⚔️${poi.military_strength || 0}</span>
                                            <span>💰${poi.economic_value || 0}</span>
                                            <span>👥${(poi.population || 0).toLocaleString()}</span>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// MAIN RENDER
// ============================================

function renderAlliancePage() {
    allianceData = calculateAllAlliances();
    
    let alliances = [...allianceData.alliances];
    
    // Apply filters
    const showScripted = document.getElementById('filter-scripted')?.checked ?? true;
    const showOrganic = document.getElementById('filter-organic')?.checked ?? true;
    
    alliances = alliances.filter(a => {
        if (a.isScripted && !showScripted) return false;
        if (!a.isScripted && !showOrganic) return false;
        return true;
    });
    
    // Apply sort
    alliances = sortAlliances(alliances, currentSort);
    
    // Render stats bar
    const statsContainer = document.getElementById('alliance-stats-bar');
    if (statsContainer) {
        statsContainer.innerHTML = renderStatsBar(allianceData);
    }
    
    // Render controls
    const controlsContainer = document.getElementById('alliance-controls');
    if (controlsContainer) {
        controlsContainer.innerHTML = renderControls();
    }
    
    // Render main content
    const container = document.getElementById('alliance-container');
    if (!container) return;
    
    let content = '';
    
    switch (currentView) {
        case 'list':
            content = renderListView(alliances);
            break;
        case 'comparison':
            content = renderComparisonView(alliances);
            break;
        case 'grid':
        default:
            content = `
                <div class="alliance-grid">
                    ${alliances.map((a, i) => renderAllianceCard(a, i + 1)).join('')}
                </div>
            `;
    }
    
    content += renderIndependentFactions(allianceData.independentFactions);
    
    container.innerHTML = content;
    
    // Initialize listeners
    initAllianceListeners();
}

// ============================================
// EVENT LISTENERS
// ============================================

function initAllianceListeners() {
    const container = document.getElementById('alliance-container');
    const controlsContainer = document.getElementById('alliance-controls');
    
    if (controlsContainer) {
        // View toggle
        controlsContainer.addEventListener('click', (e) => {
            const viewBtn = e.target.closest('.view-btn');
            if (viewBtn) {
                currentView = viewBtn.dataset.view;
                renderAlliancePage();
            }
        });
        
        // Sort change
        const sortSelect = document.getElementById('alliance-sort');
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                currentSort = sortSelect.value;
                renderAlliancePage();
            });
        }
        
        // Filters
        ['filter-scripted', 'filter-organic'].forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.addEventListener('change', () => renderAlliancePage());
            }
        });
    }
    
    if (container) {
        container.addEventListener('click', (e) => {
            // View alliance details
            const detailBtn = e.target.closest('.btn-details, .btn-view');
            if (detailBtn) {
                const allianceId = detailBtn.dataset.alliance;
                const alliance = allianceData.alliances.find(a => a.id === allianceId);
                if (alliance) {
                    showAllianceModal(alliance);
                }
                return;
            }
            
            // Compare button
            const compareBtn = e.target.closest('.btn-compare');
            if (compareBtn) {
                const allianceId = compareBtn.dataset.alliance;
                if (selectedAlliances.includes(allianceId)) {
                    selectedAlliances = selectedAlliances.filter(id => id !== allianceId);
                } else if (selectedAlliances.length < 4) {
                    selectedAlliances.push(allianceId);
                }
                renderAlliancePage();
                return;
            }
            
            // Clear comparison
            const clearBtn = e.target.closest('.btn-clear-comparison');
            if (clearBtn) {
                selectedAlliances = [];
                renderAlliancePage();
                return;
            }
            
            // Click on member faction
            const memberChip = e.target.closest('.member-chip, .member-detail-card, .member-row');
            if (memberChip) {
                const factionId = memberChip.dataset.faction;
                if (window.showFactionModal) {
                    window.showFactionModal(factionId);
                }
                return;
            }
            
            // Click on independent faction
            const indCard = e.target.closest('.independent-card');
            if (indCard) {
                const factionId = indCard.dataset.faction;
                if (window.showFactionModal) {
                    window.showFactionModal(factionId);
                }
                return;
            }
            
            // Click on alliance card (not buttons)
            const allianceCard = e.target.closest('.alliance-card');
            if (allianceCard && !e.target.closest('button')) {
                const allianceId = allianceCard.dataset.alliance;
                const alliance = allianceData.alliances.find(a => a.id === allianceId);
                if (alliance) {
                    showAllianceModal(alliance);
                }
            }
        });
    }
}

function showAllianceModal(alliance) {
    // Remove existing modal
    const existing = document.querySelector('.alliance-modal-overlay');
    if (existing) existing.remove();
    
    // Add new modal
    document.body.insertAdjacentHTML('beforeend', renderAllianceDetailModal(alliance));
    
    // Animate in
    requestAnimationFrame(() => {
        const overlay = document.querySelector(`#alliance-modal-${alliance.id}`);
        if (overlay) overlay.classList.add('visible');
    });
    
    // Close on overlay click
    const overlay = document.querySelector(`#alliance-modal-${alliance.id}`);
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
            
            // Handle faction clicks in modal
            const memberCard = e.target.closest('.member-detail-card');
            if (memberCard) {
                const factionId = memberCard.dataset.faction;
                if (window.showFactionModal) {
                    overlay.remove();
                    window.showFactionModal(factionId);
                }
            }
        });
    }
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    renderAlliancePage();
});

// Export for other modules
export {
    ALLIANCE_TYPES,
    ALLIANCE_FEATURES,
    ALLIANCE_RESTRICTIONS,
    MEMBER_ROLES,
    calculateAllianceCohesion,
    getMemberFeatures,
    renderAllianceTypeSection,
    renderMemberFeaturesTable,
    renderCohesionBreakdown,
    SCRIPTED_ALLIANCES
};