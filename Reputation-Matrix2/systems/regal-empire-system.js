// holy-midlands-diet.js
// Enhanced with Iron Legion Integration - COMPLETE

import { LORE_DATA, CHARACTER_RELATIONS } from '../lore.js';
import { state } from '../app/core/state.js';
import { CURRENT_GAME_DATE, CALENDAR_DATA } from '../data/world/calendar.js';
import { IRON_LEGION_DATA, LEGION_QUOTES, THREAT_ASSESSMENT } from '../data/factions/iron-legion-data.js';
// ============================================
// DIET CONFIGURATION DATA
// ============================================
// ============================================
// LEGION INTEGRATION EXPORT FUNCTIONS
// Add these to iron-legion-controller.js
// ============================================

// Legion-Diet Connection Data (add this near the top of the file)
const LEGION_DIET_CONNECTIONS = {
    operationVoteLinks: {
        'iron_mandate': {
            operationCodename: 'ORDER 120 / IRON SKY', // Updated
            legionUnit: 'Iron Crown Brigade & High Command',
            dietImpact: 'Vindication for the Hawk faction; immediate use of lethal force authority',
            militaryResponse: 'Execution order for prisoners at Aegis Command; Seizure of Vigilance',
            commanderInvolved: 'General Marcus Ironhand'
        },
        'supernatural_sovereignty_act': {
            operationCodename: 'IRON GATE',
            legionUnit: 'Royal Service Division',
            dietImpact: 'Legal basis for all anti-supernatural operations',
            militaryResponse: 'Expulsion of Onyx Hand and Moonfang representatives',
            commanderInvolved: 'Tribune Aldric Stone'
        },
        'refugee_containment_act': {
            operationCodename: 'IRON CAGE',
            legionUnit: 'Forge Engineers',
            dietImpact: 'Authorization for detention facility construction',
            militaryResponse: 'Site selection and fortification planning underway',
            commanderInvolved: 'Tribune Gearwright'
        },
        'emergency_conscription': {
            operationCodename: 'IRON HARVEST',
            legionUnit: 'Training Command',
            dietImpact: 'Massive expansion of Legion manpower',
            militaryResponse: 'Recruitment centers being established',
            commanderInvolved: 'Hammer Lord Draven'
        },
        'mage_registry_amendment': {
            operationCodename: null,
            legionUnit: null,
            dietImpact: 'Potential exemption of mages from supernatural classification',
            militaryResponse: 'Hammer Lord Brennan recommends opposition',
            commanderInvolved: 'Hammer Lord Brennan (Intelligence)'
        },
        'arcane_oversight_act': {
            operationCodename: 'IRON WAND',
            legionUnit: 'Intelligence Division',
            dietImpact: 'Legion oversight of Mages Guild facilities',
            militaryResponse: 'Surveillance protocols being drafted',
            commanderInvolved: 'Hammer Lord Brennan'
        }
    },

    deploymentsByVote: {
        'iron_mandate': {
            troops: 6500, 
            units: ['Royal Service Division', 'Shadow Hammers'],
            locations: ['Autumnwood', 'Dulgra', 'Dark Valley', 'Gehnsha Glade'],
            status: 'ACTIVE DEPLOYMENT'
        },
        'supernatural_sovereignty_act': {
            troops: 2000,
            units: ['Iron Crown Brigade'],
            locations: ['Border Provinces', 'Mushroom Kingdom Theater'],
            status: 'ONGOING OPERATIONS'
        },
        'refugee_containment_act': {
            troops: 1500,
            units: ['Forge Engineers', 'Royal Service Division'],
            locations: ['TBD - Pending vote'],
            status: 'STANDBY'
        },
        'emergency_conscription': {
            troops: 500,
            units: ['Training Command'],
            locations: ['All border provinces'],
            status: 'PLANNING'
        }
    },

    dualRolePersonnel: [
        {
            name: 'Lord Chancellor Aldric Stonehand',
            politicalRole: 'Leader of Imperial Concordat in Diet',
            militaryRole: 'Civilian oversight of Legion operations',
            currentFocus: 'Pushing Iron Mandate enforcement',
            loyaltyRating: 'ABSOLUTE'
        },
        {
            name: 'Hammer Lord Brennan',
            politicalRole: 'Intelligence liaison to Diet Security Committee',
            militaryRole: 'Council of Hammers - Intelligence & Counter-ops',
            currentFocus: 'Coordinating with Diet on supernatural tracking',
            loyaltyRating: 'ABSOLUTE'
        },
        {
            name: 'General Marcus Steelgrave',
            politicalRole: 'Diet Military Advisor',
            militaryRole: 'Legion Strategic Command',
            currentFocus: 'Emergency Conscription Act advocacy',
            loyaltyRating: 'ABSOLUTE'
        },
        {
            name: 'Tribune Aldric Stone',
            politicalRole: 'None (Military only)',
            militaryRole: 'Royal Service Division Commander',
            currentFocus: 'Vigilance security operations',
            loyaltyRating: 'HIGH'
        },
        {
            name: 'Viceroy Hammer Forgeheart',
            politicalRole: 'Shadow Ambassador to foreign territories',
            militaryRole: 'Iron Crown Brigade Commander',
            currentFocus: 'Mushroom Kingdom destabilization',
            loyaltyRating: 'ABSOLUTE'
        }
    ],

    coordinatedTimeline: [
        {
            date: { year: 1040, monthIndex: 6, day: 12 },
            dietAction: 'Toad Town Recognition vote tabled',
            legionResponse: 'Intelligence assets monitoring Captain Toadette',
            strategicGoal: 'Assess potential ally in Mushroom Kingdom'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 18 },
            dietAction: 'Supernatural Sovereignty Act passed',
            legionResponse: 'Iron Crown Brigade activated for Kingdom operations',
            strategicGoal: 'Legal foundation for expansion'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 20 },
            dietAction: 'Diet debates Iron Mandate',
            legionResponse: 'Operation IRON SKY - Vigilance captured',
            strategicGoal: 'Demonstrate Legion capability to wavering Diet members'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 21, phase: 'morning' },
            dietAction: 'Iron Mandate passed (28-8-3)',
            legionResponse: 'Order 120 issued; mass executions authorized at Aegis Command',
            strategicGoal: 'Vindication for Hawk faction; elimination of Toad leadership'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 21, phase: 'night' },
            dietAction: 'Emergency session called re: planar fracture',
            legionResponse: 'Operation SHATTERED GLASS initiated; Raventree secured',
            strategicGoal: 'Contain dimensional crisis; capture scattered insurgents'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 21, phase: 'night' },
            dietAction: 'Arcane Congress demands fracture site access',
            legionResponse: 'Access denied pending security review; Agent Malissia assumes command',
            strategicGoal: 'Maintain Legion control of supernatural assets'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 21, phase: 'night' },
            dietAction: 'Onyx Hand offers "diplomatic channels"',
            legionResponse: 'Operation SHADOW PARLEY proposed for Shadowfell negotiation',
            strategicGoal: 'Possible asset recovery via vampire cooperation'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 24 },
            dietAction: 'Refugee Containment Act vote scheduled',
            legionResponse: 'Forge Engineers on standby for facility construction',
            strategicGoal: 'Infrastructure for long-term supernatural detention'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 24 },
            dietAction: 'Operation BUTTERFLY NET deadline',
            legionResponse: 'Coerced agent must deliver Oracle or face Entropy Ring consequences',
            strategicGoal: 'Capture primary intelligence target from Feywild'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 28 },
            dietAction: 'Mage Registry Amendment vote scheduled',
            legionResponse: 'Intelligence gathering on Guild-Vampire contacts',
            strategicGoal: 'Maintain pressure on Mages Guild'
        },
        {
            date: { year: 1040, monthIndex: 7, day: 7 },
            dietAction: 'Emergency Conscription vote scheduled',
            legionResponse: 'Training Command preparing accelerated programs',
            strategicGoal: 'Massive manpower expansion for supernatural war'
        },        
      {
            date: { year: 1040, monthIndex: 6, day: 21 },
            dietAction: 'Iron Mandate passed',
            legionResponse: 'Vigilance captured; Order 120 issued at Aegis Command',
            strategicGoal: 'Total decapitation of the Toad insurgency'
        },   
        {
            date: { year: 1040, monthIndex: 6, day: 12 },
            dietAction: 'Toad Town Recognition vote tabled',
            legionResponse: 'Intelligence assets monitoring Captain Toadette',
            strategicGoal: 'Assess potential ally in Mushroom Kingdom'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 18 },
            dietAction: 'Supernatural Sovereignty Act passed',
            legionResponse: 'Iron Crown Brigade activated for Kingdom operations',
            strategicGoal: 'Legal foundation for expansion'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 20 },
            dietAction: 'Diet debates Iron Mandate',
            legionResponse: 'Operation IRON SKY - Vigilance captured',
            strategicGoal: 'Demonstrate Legion capability to wavering Diet members'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 21 },
            dietAction: 'Iron Mandate passed',
            legionResponse: 'Immediate deployment to border provinces',
            strategicGoal: 'Rapid consolidation of emergency powers'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 24 },
            dietAction: 'Refugee Containment Act vote scheduled',
            legionResponse: 'Forge Engineers on standby for facility construction',
            strategicGoal: 'Infrastructure for long-term supernatural detention'
        },
        {
            date: { year: 1040, monthIndex: 6, day: 28 },
            dietAction: 'Mage Registry Amendment vote scheduled',
            legionResponse: 'Intelligence gathering on Guild-Vampire contacts',
            strategicGoal: 'Maintain pressure on Mages Guild'
        },
        {
            date: { year: 1040, monthIndex: 7, day: 7 },
            dietAction: 'Emergency Conscription vote scheduled',
            legionResponse: 'Training Command preparing accelerated programs',
            strategicGoal: 'Massive manpower expansion for supernatural war'
        }
    ]
};

// Enhanced Legion Data with political integration
   const ENHANCED_LEGION_DATA = {
    politicalIntegration: {
        title: "Diet Integration Status",
        description: "The Iron Legion operates as the military enforcement arm of the Imperial Concordat coalition within the Holy Midlands Diet.",
        
        dietInfluence: {
            directSeats: 0,
            alignedSeats: 28,
            influenceMethods: [
                "Military advisors attend all security committee sessions",
                "Hammer Lord Brennan provides intelligence briefings to aligned representatives",
                "Legion 'security details' protect key Diet members",
                "Strategic timing of military operations to influence votes"
            ]
        },
        
        currentLegislativePriorities: [
            {
                bill: "Iron Mandate",
                status: "ENFORCED",
                legionBenefit: "Legal cover for Aegis Command executions and Raventree seizure",
                deploymentAuthorized: true
            },
            {
                bill: "Refugee Containment Act",
                status: "PENDING",
                legionBenefit: "Detention infrastructure and expanded jurisdiction",
                deploymentAuthorized: false
            },
            {
                bill: "Emergency Conscription Act",
                status: "DRAFTED",
                legionBenefit: "Massive manpower increase",
                deploymentAuthorized: false
            },
            {
                bill: "Planar Containment Protocol",
                status: "EMERGENCY DRAFTING",
                legionBenefit: "Authority over dimensional breach sites",
                deploymentAuthorized: false
            }
        ],
        
        oppositionTracking: {
            arcaneCongressThreat: "CRITICAL - Demanding access to planar fracture site",
            heartlandAllianceStatus: "NEUTRALIZED - Leadership resigned",
            chaosCaucusUtility: "USEFUL - Votes with chaos, often aligns with disruption",
            liberatedToads: "FRAGMENTED - Scattered across three dimensions",
            onyxHandStatus: "OPPORTUNISTIC - Holding insurgents in Shadowfell"
        }
    },

    activeDeployments: {
        title: "Current Deployment Status",
        lastUpdated: "Day 21, 1040 BF (04:30 - Post-Fracture)", 
        deployments: [
            {
                region: "Aegis Command HQ",
                troops: 5000,
                commander: "General Marcus Ironhand",
                mission: "Internal Security / Prisoner Execution",
                authority: "Iron Mandate (Self-Defense Clause)",
                status: "LOCKDOWN / COMBAT"
            },
            {
                region: "Vigilance (Captured Airship)",
                troops: 200,
                commander: "Tribune Aldric Stone",
                mission: "Asset Secured / Prisoner Processing",
                authority: "Operation IRON SKY",
                status: "SECURED"
            },
            {
                region: "Raventree Manor - Physical Plane",
                troops: 150,
                commander: "Agent Malissia (Intelligence)",
                mission: "Planar Fracture Containment / Prisoner Interrogation",
                authority: "Iron Mandate / Operation SHATTERED GLASS",
                status: "ACTIVE - DIMENSIONAL HAZARD"
            },
            {
                region: "Raventree Manor - Feywild Insertion",
                troops: 1,
                commander: "Asset Toadburt (Coerced)",
                mission: "Capture The Oracle",
                authority: "Operation BUTTERFLY NET",
                status: "DEPLOYED - 72HR DEADLINE"
            },            
            {
                region: "Rogueport (Trade Ward)",
                troops: 300,
                commander: "The Executioner",
                mission: "Urban Pacification & Asset Seizure",
                authority: "Iron Mandate (Extended Interpretation)",
                status: "CONTESTED"
            },            
            {
                region: "Autumnwood",
                troops: 1200,
                commander: "Tribune Vasquez",
                mission: "Supernatural containment and civilian control",
                authority: "Iron Mandate",
                status: "DEPLOYING"
            },
            {
                region: "Dulgra",
                troops: 800,
                commander: "Tribune Ironside",
                mission: "Werewolf territory pacification",
                authority: "Iron Mandate",
                status: "DEPLOYING"
            },
            {
                region: "Dark Valley",
                troops: 600,
                commander: "Tribune Graves",
                mission: "Border security and refugee interception",
                authority: "Iron Mandate",
                status: "DEPLOYING"
            },
            {
                region: "Gehnsha Glade",
                troops: 400,
                commander: "Tribune Ashworth",
                mission: "Vampire coven surveillance",
                authority: "Iron Mandate",
                status: "DEPLOYING"
            },
            {
                region: "Mushroom Kingdom Theater",
                troops: 2000,
                commander: "Viceroy Hammer Forgeheart",
                mission: "Destabilization and pre-annexation operations",
                authority: "Supernatural Sovereignty Act",
                status: "ACTIVE"
            }
        ],
        
        planarOperations: {
            title: "Cross-Dimensional Operations",
            description: "Following the Raventree Planar Fracture, Legion has initiated limited cross-dimensional protocols.",
            operations: [
                {
                    codename: "SHATTERED GLASS",
                    plane: "Physical - Raventree",
                    objective: "Contain dimensional breach, secure physical assets",
                    status: "ACTIVE",
                    assets: 150
                },
                {
                    codename: "BUTTERFLY NET",
                    plane: "Feywild",
                    objective: "Capture The Oracle via coerced agent",
                    status: "IN PROGRESS",
                    assets: 1,
                    deadline: "72 hours from 03:00 Day 21"
                },
                {
                    codename: "SHADOW PARLEY",
                    plane: "Shadowfell",
                    objective: "Negotiate with Onyx Hand for insurgent handover",
                    status: "PROPOSED",
                    assets: 0,
                    notes: "Requires diplomatic authorization"
                },
                {
                    codename: "DEEP DIVE",
                    plane: "Deep Mirror",
                    objective: "Locate and extract/eliminate Oracle",
                    status: "IMPOSSIBLE - NO INSERTION CAPABILITY",
                    assets: 0
                }
            ]
        }
    }
};

// ============================================
// EXPORT FUNCTIONS
// ============================================

/**
 * Gets Legion deployments filtered by legislative authority
 * @param {string} authority - The legislative act authorizing deployment
 * @returns {Array} Array of deployment objects
 */
export function getLegionDeploymentsByAuthority(authority) {
    if (!authority) {
        return ENHANCED_LEGION_DATA.activeDeployments.deployments;
    }
    
    return ENHANCED_LEGION_DATA.activeDeployments.deployments.filter(
        d => d.authority.toLowerCase().includes(authority.toLowerCase())
    );
}

/**
 * Gets the Legion's current political status and Diet influence
 * @returns {Object} Political status object
 */
export function getLegionPoliticalStatus() {
    return {
        alignedSeats: ENHANCED_LEGION_DATA.politicalIntegration.dietInfluence.alignedSeats,
        directSeats: ENHANCED_LEGION_DATA.politicalIntegration.dietInfluence.directSeats,
        totalInfluence: ENHANCED_LEGION_DATA.politicalIntegration.dietInfluence.alignedSeats,
        influenceMethods: ENHANCED_LEGION_DATA.politicalIntegration.dietInfluence.influenceMethods,
        currentPriorities: ENHANCED_LEGION_DATA.politicalIntegration.currentLegislativePriorities,
        oppositionStatus: ENHANCED_LEGION_DATA.politicalIntegration.oppositionTracking
    };
}

/**
 * Gets the Legion operation linked to a specific Diet vote
 * @param {string} voteId - The vote identifier
 * @returns {Object|null} Operation details or null if none linked
 */
export function getOperationForVote(voteId) {
    const link = LEGION_DIET_CONNECTIONS.operationVoteLinks[voteId];
    if (!link) return null;
    
    return {
        codename: link.operationCodename,
        unit: link.legionUnit,
        dietImpact: link.dietImpact,
        militaryResponse: link.militaryResponse,
        commander: link.commanderInvolved
    };
}

/**
 * Gets deployment details for a specific Diet vote
 * @param {string} voteId - The vote identifier
 * @returns {Object|null} Deployment details or null if none linked
 */
export function getDeploymentForVote(voteId) {
    const deployment = LEGION_DIET_CONNECTIONS.deploymentsByVote[voteId];
    if (!deployment) return null;
    
    return {
        troops: deployment.troops,
        units: deployment.units,
        locations: deployment.locations,
        status: deployment.status
    };
}

/**
 * Gets personnel who serve dual political-military roles
 * @returns {Array} Array of personnel objects
 */
export function getDualRolePersonnel() {
    return LEGION_DIET_CONNECTIONS.dualRolePersonnel.map(person => ({
        name: person.name,
        politicalRole: person.politicalRole,
        militaryRole: person.militaryRole,
        currentFocus: person.currentFocus,
        loyaltyRating: person.loyaltyRating
    }));
}

/**
 * Gets the coordinated Legion-Diet timeline of actions
 * @returns {Array} Array of timeline events
 */
export function getCoordinatedTimeline() {
    return LEGION_DIET_CONNECTIONS.coordinatedTimeline.map(event => ({
        date: event.date,
        dietAction: event.dietAction,
        legionResponse: event.legionResponse,
        strategicGoal: event.strategicGoal
    }));
}

/**
 * Gets the Legion's threat assessment data
 * @returns {Object} Threat assessment object
 */
export function getLegionThreatAssessment() {
    return {
        overall: "CRITICAL",
        military: "EXTREME",
        political: "HIGH",
        intelligence: "COMPROMISED",
        planar: "UNPRECEDENTED",
        immediateThreats: [
            "Planar fracture at Raventree Manor - reality unstable in 200m radius",
            "Insurgents scattered across THREE dimensions - cannot pursue all simultaneously",
            "Onyx Hand hosting hostiles in Shadowfell - potential alliance forming",
            "The Oracle in unreachable 'Deep Mirror' dimension - primary target inaccessible",
            "Archie Miser's unstable magic signature - caused dimensional catastrophe",
            "Coerced agent Toadburt may defect or fail - 72-hour deadline critical",
            "Mages' Guild demanding access to fracture - political pressure mounting",
            "Unknown Archfey involvement in Feywild reflection",
            "Asset 'Green T' held by vampires - possible leverage or lost asset"
        ],
        recommendedActions: [
            "Maintain physical perimeter at Raventree - NO personnel in fracture zone",
            "Monitor Agent Malissia's Feywild operation - prepare contingencies",
            "Open backchannel to Onyx Hand for Shadowfell extraction possibilities",
            "Accelerate Order 120 executions before dimensional rescue attempts",
            "Request Mages' Guild planar expertise under STRICT Legion supervision",
            "Prepare contingency for Archie Miser's return - treat as WMD-level threat",
            "Develop Deep Mirror insertion capability - consult captured mages",
            "Consider leveraging vampire 'hospitality' - Green T may be extraction point"
        ],
        planarSituation: {
            physicalPlane: "SECURED - Legion control",
            shadowfell: "HOSTILE - Onyx Hand territory, two insurgents present",
            feywild: "CONTESTED - Coerced agent deployed, Guardian entities active",
            deepMirror: "INACCESSIBLE - Oracle and two others beyond reach"
        }
    };
}
/**
 * Gets the current status of all planar operations
 * @returns {Object} Planar operations status
 */
export function getPlanarOperationsStatus() {
    return {
        lastUpdate: "Day 21, 04:30",
        fractureSite: {
            location: "Raventree Manor",
            status: "CONTAINED BUT UNSTABLE",
            radius: "200 meters",
            legionControl: true
        },
        operations: ENHANCED_LEGION_DATA.activeDeployments.planarOperations.operations,
        insurgentLocations: {
            shadowfell: ['Archie Miser', 'Bowser'],
            feywild: ['Waluigi', 'Toad Lee'],
            deepMirror: ['Markop', 'Remi', 'The Oracle'],
            physical: ['Captured: Various Toad insurgents']
        },
        legionAssets: {
            feywild: {
                agent: 'Toadburt',
                status: 'Coerced (Entropy Ring)',
                mission: 'Capture Oracle',
                deadline: '72 hours from 03:00 Day 21'
            }
        },
        onyxHandContact: {
            location: 'Shadow Estate (Shadowfell)',
            host: 'Orangus Cornelius',
            guests: ['Archie Miser', 'Bowser', 'Green T (captive)'],
            legionStance: 'Potential negotiation'
        }
    };
}
/**
 * Gets all Legion data combined for external systems
 * @returns {Object} Complete Legion data object
 */
export function getAllLegionData() {
    // Return only the data defined in this file
    return {
        enhanced: ENHANCED_LEGION_DATA,
        connections: LEGION_DIET_CONNECTIONS,
        threat: getLegionThreatAssessment()
    };
}

/**
 * Gets Legion presence information for a specific province
 * @param {string} provinceName - Name of the province
 * @returns {Object} Legion presence details
 */
export function getLegionPresenceForProvince(provinceName) {
    const deployments = ENHANCED_LEGION_DATA.activeDeployments.deployments;
    
    const provinceDeployment = deployments.find(d => 
        d.region.toLowerCase().includes(provinceName.toLowerCase()) ||
        provinceName.toLowerCase().includes(d.region.toLowerCase())
    );
    
    if (provinceDeployment) {
        return {
            presence: provinceDeployment.status,
            troops: provinceDeployment.troops,
            commander: provinceDeployment.commander,
            mission: provinceDeployment.mission,
            authority: provinceDeployment.authority,
            status: provinceDeployment.status
        };
    }
    
    // Check for provinces with known Legion presence but no active deployment
    const knownPresence = {
        'Capital Province': 'HIGH',
        'Ironwood & Isle of Burbary': 'HIGH',
        'Yal Belanor': 'MEDIUM',
        'Yal Central': 'MEDIUM',
        'Vemilia': 'LOW',
        'Jungle de Thorn': 'LOW'
    };
    
    const presence = knownPresence[provinceName] || 'NONE';
    
    return {
        presence: presence,
        troops: 0,
        commander: null,
        mission: null,
        authority: null,
        status: presence
    };
}

/**
 * Gets all active Legion operations
 * @returns {Array} Array of active operations
 */
export function getActiveLegionOperations() {
    const operations = [];
    
    Object.entries(LEGION_DIET_CONNECTIONS.operationVoteLinks).forEach(([voteId, link]) => {
        if (link.operationCodename) {
            const deployment = LEGION_DIET_CONNECTIONS.deploymentsByVote[voteId];
            operations.push({
                codename: link.operationCodename,
                voteId: voteId,
                unit: link.legionUnit,
                status: deployment?.status || 'UNKNOWN',
                troops: deployment?.troops || 0,
                locations: deployment?.locations || []
            });
        }
    });
    
    return operations;
}

/**
 * Checks if a specific vote has Legion involvement
 * @param {string} voteId - The vote identifier
 * @returns {boolean} True if Legion is involved
 */
export function hasLegionInvolvement(voteId) {
    return !!LEGION_DIET_CONNECTIONS.operationVoteLinks[voteId];
}

/**
 * Gets summary statistics for Legion-Diet integration
 * @returns {Object} Summary statistics
 */
export function getLegionDietSummary() {
    const deployments = ENHANCED_LEGION_DATA.activeDeployments.deployments;
    const totalTroops = deployments.reduce((sum, d) => sum + d.troops, 0);
    const activeOperations = Object.values(LEGION_DIET_CONNECTIONS.operationVoteLinks)
        .filter(link => link.operationCodename).length;
    
    return {
        totalDeployedTroops: totalTroops,
        activeDeployments: deployments.length,
        activeOperations: activeOperations,
        alignedDietSeats: ENHANCED_LEGION_DATA.politicalIntegration.dietInfluence.alignedSeats,
        dualRolePersonnel: LEGION_DIET_CONNECTIONS.dualRolePersonnel.length,
        pendingLegislation: ENHANCED_LEGION_DATA.politicalIntegration.currentLegislativePriorities
            .filter(p => p.status !== 'PASSED').length,
        passedLegislation: ENHANCED_LEGION_DATA.politicalIntegration.currentLegislativePriorities
            .filter(p => p.status === 'PASSED').length
    };
}

// ============================================
// EVENT EMITTERS FOR CROSS-SYSTEM COMMUNICATION
// ============================================

/**
 * Emits a Legion status update event for other systems to consume
 */
export function emitLegionStatusUpdate() {
    const summary = getLegionDietSummary();
    const threat = getLegionThreatAssessment();
    
    window.dispatchEvent(new CustomEvent('legionStatusUpdate', {
        detail: {
            summary,
            threat,
            deployments: ENHANCED_LEGION_DATA.activeDeployments.deployments,
            timestamp: new Date().toISOString()
        }
    }));
}

/**
 * Emits a Legion-Diet sync event
 */
export function emitLegionDietSync() {
    window.dispatchEvent(new CustomEvent('legionDietSync', {
        detail: {
            legionStatus: 'ACTIVE',
            currentDeployments: ENHANCED_LEGION_DATA.activeDeployments,
            politicalPriorities: ENHANCED_LEGION_DATA.politicalIntegration.currentLegislativePriorities,
            timestamp: new Date().toISOString()
        }
    }));
}
const MIDLANDS_DIET_DATA = {
    name: "Holy Midlands Diet",
    status: "Crisis Session",
    currentSession: 47,
    sessionStartDate: { year: 1040, monthIndex: 6, day: 15 },
    description: "The Midlands are governed by a parliamentary body where provincial representatives vote on state matters. The Diet is currently in emergency session following the passage of the Supernatural Sovereignty Act. The traditional Imperial Concordat faces open revolt from the supernatural blocs, while the pragmatic Heartland Alliance desperately seeks de-escalation.",
    
    legionIntegration: {
        status: 'ACTIVE',
        militaryAdvisorPresent: true,
        securityLevel: 'ELEVATED',
        lastMilitaryBriefing: { year: 1040, monthIndex: 6, day: 21 }
    },
    
    provinces: [
        { name: 'Capital Province', votes: 15, faction: 'regal_empire', wealth: 'high', militarized: true, legionPresence: 'HIGH' },
        { name: 'Yal Belanor', votes: 4, faction: 'regal_empire', wealth: 'medium', militarized: false, legionPresence: 'MEDIUM' },
        { name: 'Vemilia', votes: 3, faction: 'regal_empire', wealth: 'medium', militarized: false, legionPresence: 'LOW' },
        { name: 'Ironwood & Isle of Burbary', votes: 4, faction: 'regal_empire', wealth: 'high', militarized: true, legionPresence: 'HIGH' },
        { name: 'Lockerwood', votes: 3, faction: 'unaligned', wealth: 'low', militarized: false, legionPresence: 'NONE' },
        { name: 'Yal Central', votes: 3, faction: 'regal_empire', wealth: 'medium', militarized: false, legionPresence: 'MEDIUM' },
        { name: 'Dark Shores', votes: 2, faction: 'unaligned', wealth: 'low', militarized: false, legionPresence: 'NONE' },
        { name: 'Autumnwood', votes: 5, faction: 'onyx_hand', wealth: 'high', militarized: true, legionPresence: 'DEPLOYING' },
        { name: 'Dry County', votes: 1, faction: 'cosmic_jesters', wealth: 'low', militarized: false, legionPresence: 'NONE' },
        { name: 'Dulgra', votes: 3, faction: 'moonfang_pack', wealth: 'medium', militarized: true, legionPresence: 'DEPLOYING' },
        { name: 'Dark Valley', votes: 3, faction: 'moonfang_pack', wealth: 'low', militarized: true, legionPresence: 'DEPLOYING' },
        { name: 'Gehnsha Glade', votes: 3, faction: 'onyx_hand', wealth: 'medium', militarized: false, legionPresence: 'DEPLOYING' },
        { name: 'Jungle de Thorn', votes: 2, faction: 'regal_empire', wealth: 'low', militarized: false, legionPresence: 'LOW' },
        { name: 'Yale Shores', votes: 2, faction: 'mages_guild', wealth: 'high', militarized: false, legionPresence: 'NONE' }
    ],
    
    coalitions: {
        imperial_concordat: { 
            name: 'The Imperial Concordat', 
            color: 'var(--faction-regal_empire)', 
            factions: ['regal_empire', 'iron_legion'], 
            description: "The old guard of the Regal Empire, pushing for order through strength.",
            stance: 'hawkish',
            leader: 'Lord Chancellor Aldric Stonehand',
            legionAlignment: 'FULL SUPPORT'
        },
        sanguine_covenant: { 
            name: 'The Sanguine Covenant', 
            color: 'var(--faction-onyx_hand)', 
            factions: ['onyx_hand'], 
            description: "The political arm of the vampire covens, now fighting for survival.",
            stance: 'defensive',
            leader: 'Countess Isolde Blackwood',
            legionAlignment: 'HOSTILE - TARGET'
        },
        territorial_pact: { 
            name: 'The Territorial Pact', 
            color: 'var(--faction-moonfang_pack)', 
            factions: ['moonfang_pack'], 
            description: "The werewolf clans, preparing for total war.",
            stance: 'aggressive',
            leader: 'Alpha Fenris Greycastle',
            legionAlignment: 'HOSTILE - TARGET'
        },
        arcane_congress: { 
            name: 'The Arcane Congress', 
            color: 'var(--faction-mages_guild)', 
            factions: ['mages_guild'], 
            description: "The Mages' Guild, viewing this as mundane overreach into arcane matters.",
            stance: 'isolationist',
            leader: 'Archmage Quintus Brightwater',
            legionAlignment: 'CAUTIOUS - MONITORING'
        },
        heartland_alliance: { 
            name: 'The Heartland Alliance', 
            color: 'var(--faction-unaligned)', 
            factions: ['unaligned'], 
            description: "Common folk caught between empires and monsters.",
            stance: 'neutral',
            leader: 'Speaker Wren Rivers (RESIGNED)',
            legionAlignment: 'NEUTRAL - SWAYABLE'
        },
        chaos_caucus: { 
            name: 'The Chaos Caucus', 
            color: 'var(--faction-cosmic_jesters)', 
            factions: ['cosmic_jesters', 'freelancer_underworld'], 
            description: "Pure disruption made manifest.",
            stance: 'chaotic',
            leader: 'The Laughing Representative',
            legionAlignment: 'UNPREDICTABLE - USEFUL'
        }
    }
};

// ============================================
// LEGISLATIVE CALENDAR WITH LEGION LINKS
// ============================================

const VOTE_HISTORY = [
    {
        id: 'supernatural_sovereignty_act',
        title: "The Supernatural Sovereignty Act",
        proposer: 'Tavian Hawkwind',
        proposerFaction: 'regal_empire',
        date: { year: 1040, monthIndex: 6, day: 18 },
        status: 'passed',
        description: "Declares organized supernatural entities—specifically the Onyx Hand and Moonfang Pack—illegal within Imperial borders and mandates military containment.",
        arguments: {
            for: "Necessary for security. These factions do not recognize mortal law; their nature is predatory.",
            against: "This is a declaration of war the Empire cannot afford. It will unite ancient enemies against us."
        },
        results: { yes: 81, no: 30, abstain: 4 },
        consequences: [
            "Onyx Hand and Moonfang Pack representatives expelled from Diet",
            "Iron Legion authorized for 'containment operations'",
            "Border provinces placed under martial law"
        ],
        legionOperation: 'IRON GATE',
        legionResponse: 'Iron Crown Brigade activated for Kingdom operations',
        icon: '⚔️'
    },
    {
        id: 'toad_town_recognition',
        title: "Recognition of the Toad Town Provisional Government",
        proposer: 'Merek Oakhaven',
        proposerFaction: 'unaligned',
        date: { year: 1040, monthIndex: 6, day: 12 },
        status: 'tabled',
        description: "Motion to formally recognize Captain Toadette's martial government as legitimate successor to the Mushroom Regency in Toad Town.",
        arguments: {
            for: "The Regency has failed. Captain Toadette brings order and effective governance.",
            against: "Legitimizing a military coup sets dangerous precedent for all provinces."
        },
        results: { yes: 35, no: 42, abstain: 38 },
        consequences: ["Vote tabled for 30 days pending investigation"],
        legionOperation: null,
        legionResponse: 'Legion monitoring situation; potential asset in Captain Toadette',
        icon: '🍄'
    },
    {
        id: 'iron_mandate',
        title: "The Iron Mandate",
        proposer: 'Lord Chancellor Aldric Stonehand',
        proposerFaction: 'regal_empire',
        date: { year: 1040, monthIndex: 6, day: 21 },
        status: 'passed',
        description: "Emergency authorization granting the Iron Legion expanded powers to enforce the Supernatural Sovereignty Act, including: warrantless searches in border provinces, requisition of civilian assets, and summary detention of 'supernatural sympathizers'.",
        arguments: {
            for: "The Sovereignty Act is meaningless without enforcement. The Legion needs these tools to protect citizens from supernatural retaliation. Half-measures invite annihilation.",
            against: "This grants the Legion powers not seen since the Tyrant Wars. Today it's supernaturals—tomorrow, anyone who opposes the Chancellor. The border provinces will become military fiefdoms."
        },
        results: { 
            yes: 28, 
            no: 8, 
            abstain: 3,
            notable_votes: [
                { name: 'Archmage Quintus Brightwater', province: 'Yale Shores', vote: 'no', reason: 'Warned this would push the Guild toward the supernatural factions' },
                { name: 'Speaker Wren Rivers', province: 'Lockerwood', vote: 'abstain', reason: 'Walked out in protest, calling it "the death of liberty"' },
                { name: 'The Laughing Representative', province: 'Dry County', vote: 'yes', reason: 'Cackled "Let it burn!" before voting' },
                { name: 'Lord Valerius Ironford', province: 'Capital Province', vote: 'yes', reason: 'Gave impassioned speech about "necessary sacrifices"' }
            ]
        },
        consequences: [
            "Iron Legion granted emergency powers effective immediately",
            "Warrantless searches authorized in Autumnwood, Dulgra, Dark Valley, and Gehnsha Glade",
            "Speaker Wren Rivers resigned from Heartland Alliance leadership",
            "Mages' Guild recalled all members from border provinces",
            "Reports of supernatural refugees fleeing toward the Doughnut Hole",
            "Underground resistance networks beginning to form"
        ],
        aftermath: {
            immediate: "Legion patrols deployed within hours of the vote. First arrests reported in Autumnwood by nightfall.",
            tensions: "Archmage Brightwater was seen in heated discussion with vampire emissaries outside the Diet chambers.",
            rumors: "Whispers that Alpha Fenris has called a Grand Moot of all werewolf clans—something not seen in 200 years."
        },
        legionOperation: 'MANDATE',
        legionResponse: 'Immediate deployment of 5,000+ troops to border provinces',
        icon: '🛡️'
    }
];

const UPCOMING_VOTES = [
    {
        id: 'refugee_containment_act',
        title: "The Displaced Persons Containment Act",
        proposer: 'Countess Nerys Thorne',
        proposerFaction: 'unaligned',
        date: { year: 1040, monthIndex: 6, day: 24 },
        status: 'proposed',
        description: "Establishes 'temporary processing facilities' for supernatural refugees fleeing the border provinces. Proponents call it humanitarian; critics call it concentration camps.",
        arguments: {
            for: "These beings need somewhere to go. Controlled facilities protect both them and citizens.",
            against: "We're building prisons for people whose only crime is existing. This is how atrocities begin."
        },
        projectedResults: null,
        icon: '🏚️',
        urgency: 'critical',
        legionOperation: 'IRON CAGE',
        legionResponse: 'Forge Engineers on standby for facility construction',
        relatedEvents: [
            "Iron Mandate (Passed - Day 21)",
            "Mass exodus from border provinces reported",
            "Vigilance captured by Iron Sky forces (Day 20)"
        ]
    },
    {
        id: 'mage_registry_amendment',
        title: "Amendment to the Arcane Registration Act",
        proposer: 'Archmage Quintus Brightwater',
        proposerFaction: 'mages_guild',
        date: { year: 1040, monthIndex: 6, day: 28 },
        status: 'proposed',
        description: "Exempts licensed Mages' Guild members from supernatural categorization under the Sovereignty Act. The Guild is playing hardball—cooperate and we stay useful; lump us with vampires and we withdraw all services.",
        arguments: {
            for: "Mages are not supernatural creatures—they are trained scholars. The Empire needs our services.",
            against: "Special exemptions create a two-tiered system. Why should wealth and education buy immunity?"
        },
        projectedResults: null,
        icon: '📜',
        urgency: 'high',
        legionOperation: null,
        legionResponse: 'Hammer Lord Brennan recommends opposition; maintain pressure on Guild',
        relatedEvents: [
            "Mages' Guild recalled members from border provinces (Day 21)",
            "Archmage seen meeting with vampire emissaries"
        ]
    },
    {
        id: 'kong_kremling_neutrality',
        title: "The Neutral Waters Resolution",
        proposer: 'Admiral Corbin Westbrook',
        proposerFaction: 'regal_empire',
        date: { year: 1040, monthIndex: 7, day: 3 },
        status: 'proposed',
        description: "Declares Imperial neutrality in the rekindled Kong-Kremling conflict and establishes a 'free passage corridor' through Imperial waters. Economic opportunism disguised as diplomacy.",
        arguments: {
            for: "Let the apes and lizards exhaust each other. We profit from both sides and emerge stronger.",
            against: "Neutrality is cowardice. The Kremlings are monsters. Supporting this resolution is complicity in their atrocities."
        },
        projectedResults: null,
        icon: '🌊',
        urgency: 'medium',
        legionOperation: null,
        legionResponse: 'Iron Fleet monitoring situation; no direct involvement recommended',
        relatedEvents: []
    },
    {
        id: 'emergency_conscription',
        title: "The Realm Defense Mobilization Act",
        proposer: 'General Marcus Steelgrave',
        proposerFaction: 'iron_legion',
        date: { year: 1040, monthIndex: 7, day: 7 },
        status: 'drafted',
        description: "Authorizes emergency conscription of all able-bodied citizens ages 16-45 in border provinces. The Legion claims it's for defense; critics say it's to replace casualties from the coming supernatural war.",
        arguments: {
            for: "The supernatural threat is existential. Every citizen must contribute to the realm's defense.",
            against: "You're drafting children to fight immortal monsters. This is a death sentence disguised as patriotism."
        },
        projectedResults: null,
        icon: '⚔️',
        urgency: 'high',
        legionOperation: 'IRON HARVEST',
        legionResponse: 'Training Command preparing accelerated conscript programs',
        relatedEvents: [
            "Iron Mandate granted emergency powers",
            "Werewolf Grand Moot rumors",
            "Supernatural refugee crisis intensifying"
        ]
    },
    {
        id: 'arcane_oversight_act',
        title: "The Arcane Oversight & Regulation Act",
        proposer: 'Lord Valerius Ironford',
        proposerFaction: 'regal_empire',
        date: { year: 1040, monthIndex: 7, day: 12 },
        status: 'drafted',
        description: "Establishes Imperial oversight of all magical practitioners, including mandatory registration, activity reporting, and Legion 'liaisons' assigned to major Guild facilities.",
        arguments: {
            for: "Magic is power, and power must be regulated. The Guild has operated without accountability for too long.",
            against: "This is the first step toward disbanding the Guild entirely. The Empire cannot function without our services."
        },
        projectedResults: null,
        icon: '🔮',
        urgency: 'medium',
        legionOperation: 'IRON WAND',
        legionResponse: 'Hammer Lord Brennan drafting intelligence requirements for Guild surveillance',
        relatedEvents: [
            "Mage Registry Amendment (Pending)",
            "Guild-Vampire diplomatic contacts observed"
        ]
    }
];

const TODAYS_DIET_EVENTS = {
    date: { year: 1040, monthIndex: 6, day: 21 },
    headline: "PLANAR CATASTROPHE AT RAVENTREE MANOR - REALITY FRACTURED",
    summary: "What began as a political triumph with the Iron Mandate's passage has spiraled into a multidimensional crisis. An attempted ritual at Raventree Manor has shattered local reality into three planar shards, scattering insurgents across the Shadowfell, Feywild, and a mysterious 'Deep Mirror.' Legion forces have seized the physical site, but the supernatural implications are staggering.",
    keyMoments: [
        {
            time: "Morning",
            event: "Iron Mandate Passes",
            description: "28-8-3 Vote. Emergency powers granted to the Iron Legion."
        },
        {
            time: "Afternoon (14:30)",
            event: "Aegis Infiltration Thwarted",
            description: "General Ironhand unmasks infiltrators within the fortress. One insurgent stabbed. Acid attacks reported against Legionnaires."
        },
        {
            time: "Afternoon (14:45)",
            event: "Order 120 Issued",
            description: "General Ironhand declares all Toad prisoners 'unlawful combatants' and orders immediate execution. Diet hawks applaud the 'decisive action.'"
        },
        {
            time: "Evening",
            event: "Vigilance Secured",
            description: "The rogue airship is fully under Legion control. The skies are declared secure."
        },
        {
            time: "Night (01:30)",
            event: "The Shattered Ritual",
            description: "A synchronization rite at Raventree Manor catastrophically fails, shattering local reality into three distinct planar shards. Massive magical discharge detected across the province."
        },
        {
            time: "Night (01:45)",
            event: "The Planar Fracture",
            description: "Insurgents violently separated across dimensions. Physical antechamber seized by Iron Legion. Targets scattered to Shadowfell, Feywild, and unknown 'Deep Mirror' dimension."
        },
        {
            time: "Night (03:00)",
            event: "Sleeper Agent Deployed",
            description: "Agent Malissia interrogates captured Toad insurgent. Subject fitted with Entropy Ring and deployed into Feywild as coerced operative. 72-hour deadline to capture the Oracle."
        },
        {
            time: "Night (03:30)",
            event: "Shadowfell Contact",
            description: "Intelligence suggests two insurgents (designated 'Archie' and 'Bowser') have made contact with Onyx Hand vampires in the Shadowfell reflection. Asset 'Green T' confirmed present as vampire 'guest.'"
        },
        {
            time: "Night (04:15)",
            event: "Feywild Activity",
            description: "Remaining insurgents detected in Feywild reflection of manor. Possible Archfey involvement. Guardian entities active. Legion cannot pursue across planar boundaries."
        }
    ],
    reactions: {
        imperial_concordat: {
            mood: 'vindicated',
            statement: "The supernatural threat is even greater than we feared. This planar catastrophe proves why the Mandate was necessary. We must accelerate all containment protocols.",
            speaker: "Lord Chancellor Aldric Stonehand"
        },
        heartland_alliance: {
            mood: 'horrified',
            statement: "Order 120 was a massacre, and now we're dealing with tears in reality itself. This is beyond the Diet's competence. We need the Mages' Guild.",
            speaker: "Acting Representative Merek Oakhaven"
        },
        chaos_caucus: {
            mood: 'ecstatic',
            statement: "THREE REALITIES! Vampires! Fey courts! This is the BEST Diet session in centuries!",
            speaker: "The Laughing Representative"
        },
        arcane_congress: {
            mood: 'alarmed',
            statement: "A synchronization rite of that magnitude... whoever attempted it was either a genius or a madman. The planar boundaries will be unstable for weeks. The Legion's 'containment' is like putting a bandage on a volcano.",
            speaker: "Archmage Quintus Brightwater"
        },
        sanguine_covenant: {
            mood: 'opportunistic',
            statement: "Our brethren in the Shadow Estate have acquired... guests. Perhaps there is value in negotiation after all.",
            speaker: "Countess Isolde Blackwood (via intermediary)"
        }
    },
    legionBriefing: {
        classification: 'EYES ONLY - HAMMER LORD LEVEL',
        preparedBy: 'General Marcus Ironhand / Agent Malissia',
        keyPoints: [
            "RAVENTREE MANOR: Physical site secured. Planar fracture contained but not closed. Reality unstable in 200-meter radius.",
            "INFILTRATION CONFIRMED: Toad insurgency possesses shapeshifting/disguise capabilities. Unknown magical support.",
            "PRISONER STATUS: 'Speaker L' confirmed as decoy. 'Bones' critically wounded, slated for execution. Dragon asset 'Ignis-Major' secured.",
            "SLEEPER AGENT DEPLOYED: Asset 'Toadburt' fitted with Entropy Ring, inserted into Feywild. 72-hour window to capture 'The Oracle.'",
            "PLANAR DISTRIBUTION: Two hostiles in Shadowfell (Onyx Hand contact). Two hostiles in Feywild. Three+ hostiles in unknown 'Deep Mirror' dimension including primary target 'The Oracle.'",
            "PRIORITY TARGET: 'Archie Miser' - unstable magic signature. Likely cause of ritual failure. EXTREME CAUTION.",
            "ONYX HAND CONTACT: Vampires hosting insurgents in Shadowfell. Recommend leveraging for extraction or elimination.",
            "MAGES GUILD: Archmage Brightwater requesting access to fracture site. RECOMMEND DENIAL pending security review."
        ],
        operationalRecommendations: [
            "Maintain physical perimeter at Raventree. No Legion personnel to approach fracture zone.",
            "Coordinate with Agent Malissia for Feywild insertion updates.",
            "Prepare negotiation framework for Onyx Hand - possible asset recovery opportunity.",
            "Accelerate Order 120 executions before any rescue attempts can be organized.",
            "Request Mages' Guild planar expertise under strict Legion supervision."
        ]
    },
    planarStatus: {
        physicalPlane: {
            status: 'LEGION CONTROLLED',
            description: 'Antechamber secured. Reality fracture contained but unstable.',
            legionPresence: 150,
            commander: 'Tribune Aldric Stone (acting)'
        },
        shadowfell: {
            status: 'ONYX HAND TERRITORY',
            description: 'Shadow Estate under vampire control. Two insurgents present. Asset Green T held as "guest."',
            hostiles: ['Archie Miser', 'Bowser'],
            onyxHandContact: 'Orangus Cornelius (host)'
        },
        feywild: {
            status: 'ARCHFEY DOMAIN',
            description: 'Overgrown manor reflection. Guardian entities active. Archfey absent but hoard present.',
            hostiles: ['Waluigi', 'Toad Lee'],
            legionAsset: 'Toadburt (coerced agent, Entropy Ring equipped)'
        },
        deepMirror: {
            status: 'UNKNOWN',
            description: 'Uncharted dimensional space. No Legion capability for insertion or extraction.',
            hostiles: ['Markop', 'Remi', 'The Oracle'],
            threat: 'CANNOT ASSESS'
        }
    }
};

// ============================================
// REPRESENTATIVE GENERATION
// ============================================

const NAME_PARTS = {
    first: ['Alden', 'Brant', 'Corbin', 'Darian', 'Elias', 'Finnian', 'Gareth', 'Hadrian', 'Isolde', 'Joric', 'Kael', 'Liana', 'Merek', 'Nerys', 'Orin', 'Perrin', 'Quintus', 'Rowan', 'Seraphina', 'Tavian', 'Uriel', 'Valerius', 'Wren', 'Xanthe', 'Ysolde', 'Zarek', 'Aldric', 'Fenris', 'Magnus', 'Helena', 'Viktor', 'Celeste', 'Brennan', 'Draven', 'Kessler', 'Thresh'],
    last: ['Stonehand', 'Blackwood', 'Ironford', 'Silverstream', 'Goldcrest', 'Hawkwind', 'Oakhaven', 'Brightwater', 'Stormcaller', 'Ashworth', 'Vale', 'Thorne', 'Westbrook', 'Northgate', 'Rivers', 'Marsh', 'Fell', 'Crestwood', 'Greycastle', 'Sunstrider', 'Nighthollow', 'Duskwood', 'Ravencroft', 'Bloodmoon', 'Steelgrave', 'Ironside', 'Forgeheart']
};

const PERSONALITIES = [
    { type: 'Stoic Traditionalist', bias: { imperial: 0.3, supernatural: -0.2, legion: 0.2 } },
    { type: 'Fiery Firebrand', bias: { imperial: 0.4, supernatural: -0.4, legion: 0.3 } },
    { type: 'Cunning Diplomat', bias: { imperial: 0, supernatural: 0, legion: 0 } },
    { type: 'Pragmatic Bureaucrat', bias: { imperial: 0.1, supernatural: -0.1, legion: 0.1 } },
    { type: 'Ambitious Schemer', bias: { imperial: 0.2, supernatural: 0.1, legion: 0.2 } },
    { type: 'Honorable Zealot', bias: { imperial: 0.5, supernatural: -0.5, legion: 0.4 } },
    { type: 'Jaded Cynic', bias: { imperial: -0.2, supernatural: 0, legion: -0.1 } },
    { type: 'Reformist Idealist', bias: { imperial: -0.3, supernatural: 0.2, legion: -0.3 } },
    { type: 'Corrupt Opportunist', bias: { imperial: 0, supernatural: 0.3, legion: 0.1 } },
    { type: 'Military Hardliner', bias: { imperial: 0.4, supernatural: -0.4, legion: 0.5 } }
];

let representatives = [];
let selectedSeat = null;
let currentVoteIndex = 0;
let legionDataCache = null;

function generateSeededRandom(seed) {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function generateUniqueName(existingNames, seed) {
    let name;
    let attempts = 0;
    do {
        const firstIndex = Math.floor(generateSeededRandom(seed + attempts) * NAME_PARTS.first.length);
        const lastIndex = Math.floor(generateSeededRandom(seed + attempts + 1000) * NAME_PARTS.last.length);
        name = `${NAME_PARTS.first[firstIndex]} ${NAME_PARTS.last[lastIndex]}`;
        attempts++;
    } while (existingNames.has(name) && attempts < 100);
    existingNames.add(name);
    return name;
}

function generateRepresentatives() {
    const reps = [];
    let idCounter = 0;
    const existingNames = new Set();
    const baseSeed = 42069;

    MIDLANDS_DIET_DATA.provinces.forEach((province, provIndex) => {
        for (let i = 0; i < province.votes; i++) {
            const repSeed = baseSeed + provIndex * 100 + i;
            const personalityIndex = Math.floor(generateSeededRandom(repSeed + 500) * PERSONALITIES.length);
            
            reps.push({
                id: `rep-${idCounter++}`,
                name: generateUniqueName(existingNames, repSeed),
                province: province.name,
                factionId: province.faction,
                legionPresence: province.legionPresence,
                personality: PERSONALITIES[personalityIndex],
                influence: 20 + Math.floor(generateSeededRandom(repSeed + 600) * 51),
                corruptible: generateSeededRandom(repSeed + 700) < 0.3,
                legionContact: generateSeededRandom(repSeed + 800) < 0.2,
                relationships: {},
                voteHistory: []
            });
        }
    });
    return reps;
}

// ============================================
// LEGION INTEGRATION FUNCTIONS
// ============================================

function getLegionDataCached() {
    if (!legionDataCache) {
        try {
            legionDataCache = {
                enhanced: ENHANCED_LEGION_DATA,
                connections: LEGION_DIET_CONNECTIONS,
                threat: getLegionThreatAssessment()
            };
        } catch (e) {
            console.warn('Legion data initialization error:', e);
            // Return minimal fallback data
            legionDataCache = {
                enhanced: {
                    activeDeployments: { deployments: [] },
                    politicalIntegration: {
                        dietInfluence: { alignedSeats: 28 },
                        currentLegislativePriorities: [],
                        oppositionTracking: {}
                    }
                },
                connections: {
                    operationVoteLinks: {},
                    deploymentsByVote: {},
                    dualRolePersonnel: [],
                    coordinatedTimeline: []
                },
                threat: {
                    overall: "CRITICAL",
                    military: "EXTREME", 
                    political: "HIGH",
                    intelligence: "EXTREME",
                    immediateThreats: [],
                    recommendedActions: []
                }
            };
        }
    }
    return legionDataCache;
}

function getLegionOperationForVote(voteId) {
    const legionData = getLegionDataCached();
    if (!legionData) return null;
    
    const vote = [...VOTE_HISTORY, ...UPCOMING_VOTES].find(v => v.id === voteId);
    if (!vote || !vote.legionOperation) return null;
    
    return {
        codename: vote.legionOperation,
        response: vote.legionResponse,
        deployment: getDeploymentForVote(voteId),
        operation: getOperationForVote(voteId)
    };
}


function getCoalitionLegionStatus(coalitionKey) {
    const coalition = MIDLANDS_DIET_DATA.coalitions[coalitionKey];
    if (!coalition) return null;
    
    return {
        alignment: coalition.legionAlignment,
        isTarget: coalition.legionAlignment?.includes('TARGET'),
        isAlly: coalition.legionAlignment?.includes('SUPPORT'),
        isMonitored: coalition.legionAlignment?.includes('MONITORING')
    };
}

// ============================================
// VOTE SIMULATION ENGINE WITH LEGION INFLUENCE
// ============================================

function getCurrentVote() {
    const currentAbsDay = CURRENT_GAME_DATE.year * 365 + CURRENT_GAME_DATE.monthIndex * 30 + CURRENT_GAME_DATE.day;
    
    const ironMandate = VOTE_HISTORY.find(v => v.id === 'iron_mandate');
    if (ironMandate) {
        const mandateDay = ironMandate.date.year * 365 + ironMandate.date.monthIndex * 30 + ironMandate.date.day;
        if (currentAbsDay - mandateDay <= 1) {
            return { ...ironMandate, isTodaysFocus: true };
        }
    }
    
    for (const vote of UPCOMING_VOTES) {
        const voteAbsDay = vote.date.year * 365 + vote.date.monthIndex * 30 + vote.date.day;
        if (voteAbsDay >= currentAbsDay) {
            return vote;
        }
    }
    return UPCOMING_VOTES[0];
}

function getVoteStatus(vote) {
    const currentAbsDay = CURRENT_GAME_DATE.year * 365 + CURRENT_GAME_DATE.monthIndex * 30 + CURRENT_GAME_DATE.day;
    const voteAbsDay = vote.date.year * 365 + vote.date.monthIndex * 30 + vote.date.day;
    
    if (vote.status === 'passed' || vote.status === 'failed' || vote.status === 'tabled') {
        if (vote.isTodaysFocus) {
            return 'just_passed';
        }
        return vote.status;
    }
    
    const diff = voteAbsDay - currentAbsDay;
    if (diff < 0) return 'missed';
    if (diff === 0) return 'voting_today';
    if (diff === 1) return 'voting_tomorrow';
    if (diff <= 3) return 'imminent';
    return 'scheduled';
}

function simulateVote(vote) {
    if (vote.results && !vote.results.projected) {
        return vote.results;
    }
    
    if (vote.status === 'passed' || vote.status === 'failed' || vote.status === 'tabled') {
        return vote.results;
    }
    
    return projectVoteResults(vote);
}

function projectVoteResults(vote) {
    const results = { yes: 0, no: 0, abstain: 0, votes: [], projected: true };
    const voteSeed = vote.id.length * 1000 + vote.date.day;
    
    const legionOperation = getLegionOperationForVote(vote.id);
    const legionPoliticalStatus = getLegionPoliticalStatus();

    const postMandateShifts = {
        'mages_guild': { towardNo: 0.2, towardAbstain: 0.3 },
        'unaligned': { towardNo: 0.15, towardAbstain: 0.25 },
        'regal_empire': { towardYes: 0.1 }
    };

    representatives.forEach((rep, idx) => {
        let voteDecision = 'abstain';
        let reason = 'Position unclear.';
        let confidence = 0.5;
        let legionInfluence = false;

        const coalition = Object.values(MIDLANDS_DIET_DATA.coalitions).find(c => 
            c.factions.includes(rep.factionId)
        );
        
        const coalitionLegionStatus = getCoalitionLegionStatus(
            Object.keys(MIDLANDS_DIET_DATA.coalitions).find(k => 
                MIDLANDS_DIET_DATA.coalitions[k].factions.includes(rep.factionId)
            )
        );

        // Expelled factions
        if (rep.factionId === 'onyx_hand' || rep.factionId === 'moonfang_pack') {
            voteDecision = 'expelled';
            reason = 'Expelled from Diet following Supernatural Sovereignty Act.';
            confidence = 1.0;
        } 
        // Legion-influenced representatives
        else if (rep.legionContact && coalitionLegionStatus?.isAlly) {
            if (vote.legionOperation) {
                voteDecision = 'yes';
                reason = 'Following Legion guidance on this matter.';
                confidence = 0.95;
                legionInfluence = true;
            }
        }
        // Mages
        else if (rep.factionId === 'mages_guild') {
            if (vote.id === 'mage_registry_amendment') {
                voteDecision = 'yes';
                reason = 'Voting to protect Guild interests - our survival depends on it.';
                confidence = 0.98;
            } else if (vote.id === 'arcane_oversight_act') {
                voteDecision = 'no';
                reason = 'This is an existential threat to Guild autonomy.';
                confidence = 0.99;
            } else if (vote.id === 'refugee_containment_act') {
                voteDecision = 'no';
                reason = 'After the Mandate, we cannot support further persecution.';
                confidence = 0.8;
            } else if (vote.id === 'emergency_conscription') {
                voteDecision = 'no';
                reason = 'The Guild will not see its apprentices conscripted.';
                confidence = 0.9;
            } else {
                voteDecision = 'abstain';
                reason = 'The Guild is reassessing all political positions.';
                confidence = 0.7;
            }
        } 
        // Imperial Concordat
        else if (coalition?.name === 'The Imperial Concordat') {
            if (vote.legionOperation) {
                voteDecision = 'yes';
                reason = `Supporting Legion operation ${vote.legionOperation}.`;
                confidence = 0.9;
                legionInfluence = true;
            } else if (vote.id === 'refugee_containment_act' || vote.id === 'emergency_conscription') {
                voteDecision = 'yes';
                reason = 'The Iron Mandate proves strength works. Continue the momentum.';
                confidence = 0.9;
            } else {
                voteDecision = 'yes';
                reason = 'Supporting the Chancellor\'s agenda.';
                confidence = 0.85;
            }
        } 
        // Heartland - demoralized
        else if (rep.factionId === 'unaligned') {
            const swingRoll = generateSeededRandom(voteSeed + idx);
            const legionPresence = getLegionPresenceForProvince(rep.province);
            
            // Legion presence in province affects vote
            if (legionPresence?.presence === 'HIGH' || legionPresence?.presence === 'DEPLOYING') {
                if (swingRoll < 0.6) {
                    voteDecision = 'yes';
                    reason = 'Legion presence in our province makes opposition... unwise.';
                    legionInfluence = true;
                } else {
                    voteDecision = 'abstain';
                    reason = 'Staying out of the crossfire.';
                }
                confidence = 0.6;
            } else if (vote.id === 'refugee_containment_act') {
                if (swingRoll < 0.5) {
                    voteDecision = 'no';
                    reason = 'We failed to stop the Mandate. We cannot fail these refugees too.';
                } else if (swingRoll < 0.8) {
                    voteDecision = 'abstain';
                    reason = 'Without Speaker Rivers, we have no unified position.';
                } else {
                    voteDecision = 'yes';
                    reason = 'Perhaps controlled facilities are better than the alternative.';
                }
                confidence = 0.5;
            } else {
                if (swingRoll < 0.4) {
                    voteDecision = 'abstain';
                    reason = 'The Heartland Alliance is in disarray.';
                } else if (swingRoll < 0.6) {
                    voteDecision = 'no';
                    reason = 'Following the spirit of what Rivers stood for.';
                } else {
                    voteDecision = 'yes';
                    reason = 'Siding with the winning faction for protection.';
                }
                confidence = 0.4;
            }
        } 
        // Chaos Caucus
        else if (rep.factionId === 'cosmic_jesters' || rep.factionId === 'freelancer_underworld') {
            const chaosRoll = generateSeededRandom(voteSeed + idx + 9999);
            if (vote.id === 'refugee_containment_act' || vote.id === 'emergency_conscription') {
                voteDecision = chaosRoll < 0.6 ? 'yes' : (chaosRoll < 0.8 ? 'no' : 'abstain');
                reason = 'Chaos feeds on conflict.';
            } else {
                if (chaosRoll < 0.33) voteDecision = 'yes';
                else if (chaosRoll < 0.66) voteDecision = 'no';
                else voteDecision = 'abstain';
                reason = 'The Laughing Representative flipped a coin.';
            }
            confidence = 0.1;
        }

        // Apply personality modifiers
        if (rep.personality.type === 'Reformist Idealist') {
            if (vote.id === 'refugee_containment_act') {
                voteDecision = 'no';
                reason = 'This is unconscionable. I will not be party to it.';
                confidence = 0.95;
            }
        } else if (rep.personality.type === 'Honorable Zealot' || rep.personality.type === 'Military Hardliner') {
            if (vote.id === 'emergency_conscription') {
                voteDecision = 'yes';
                reason = 'All must serve in the defense of the realm.';
                confidence = 0.9;
                legionInfluence = rep.personality.type === 'Military Hardliner';
            }
        } else if (rep.personality.type === 'Jaded Cynic') {
            if (generateSeededRandom(voteSeed + idx + 5000) < 0.5) {
                voteDecision = 'abstain';
                reason = 'It doesn\'t matter. The outcome is predetermined.';
                confidence = 0.6;
            }
        } else if (rep.personality.type === 'Corrupt Opportunist') {
            voteDecision = 'yes';
            reason = 'Aligning with the ascendant power.';
            confidence = 0.7;
        }

        if (voteDecision !== 'expelled') {
            results.votes.push({
                repId: rep.id,
                name: rep.name,
                province: rep.province,
                vote: voteDecision,
                reason,
                confidence,
                legionInfluence
            });

            if (voteDecision === 'yes') results.yes++;
            else if (voteDecision === 'no') results.no++;
            else results.abstain++;
        }
    });

    return results;
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderTodaysAftermath() {
    const events = TODAYS_DIET_EVENTS;
    const ironMandate = VOTE_HISTORY.find(v => v.id === 'iron_mandate');
    
    if (!ironMandate) return '';

    const notableVotesHTML = ironMandate.results.notable_votes ? `
        <div class="notable-votes-section">
            <h4>📋 Notable Votes</h4>
            <div class="notable-votes-grid">
                ${ironMandate.results.notable_votes.map(nv => `
                    <div class="notable-vote-card vote-${nv.vote}">
                        <div class="nv-header">
                            <span class="nv-name">${nv.name}</span>
                            <span class="nv-vote-badge">${nv.vote.toUpperCase()}</span>
                        </div>
                        <span class="nv-province">${nv.province}</span>
                        <p class="nv-reason">"${nv.reason}"</p>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    const consequencesHTML = `
        <div class="consequences-section">
            <h4>⚡ Immediate Consequences</h4>
            <ul class="consequences-list">
                ${ironMandate.consequences.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
    `;

    const legionBriefingHTML = events.legionBriefing ? `
        <div class="legion-briefing-section">
            <h4>⚔️ Legion Intelligence Briefing</h4>
            <div class="briefing-header">
                <span class="classification-badge classification-${events.legionBriefing.classification.replace(/\s+/g, '-').toLowerCase()}">${events.legionBriefing.classification}</span>
                <span class="briefing-author">Prepared by: ${events.legionBriefing.preparedBy}</span>
            </div>
            <ul class="briefing-points">
                ${events.legionBriefing.keyPoints.map(p => `<li>${p}</li>`).join('')}
            </ul>
            ${events.legionBriefing.operationalRecommendations ? `
                <div class="operational-recommendations">
                    <h5>Operational Recommendations:</h5>
                    <ul>
                        ${events.legionBriefing.operationalRecommendations.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    ` : '';

    // New planar status section
    const planarStatusHTML = events.planarStatus ? `
        <div class="planar-status-section">
            <h4>🌀 Planar Fracture Status</h4>
            <div class="planar-grid">
                ${Object.entries(events.planarStatus).map(([plane, data]) => `
                    <div class="planar-card plane-${plane.toLowerCase().replace(/\s+/g, '-')}">
                        <div class="planar-header">
                            <span class="plane-name">${plane.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span class="plane-status status-${data.status.toLowerCase().replace(/\s+/g, '-')}">${data.status}</span>
                        </div>
                        <p class="plane-description">${data.description}</p>
                        ${data.hostiles ? `
                            <div class="plane-hostiles">
                                <strong>Hostiles:</strong> ${data.hostiles.join(', ')}
                            </div>
                        ` : ''}
                        ${data.legionPresence ? `
                            <div class="plane-legion">
                                <strong>Legion Presence:</strong> ${data.legionPresence} troops
                            </div>
                        ` : ''}
                        ${data.legionAsset ? `
                            <div class="plane-asset">
                                <strong>Legion Asset:</strong> ${data.legionAsset}
                            </div>
                        ` : ''}
                        ${data.onyxHandContact ? `
                            <div class="plane-contact">
                                <strong>Onyx Hand Contact:</strong> ${data.onyxHandContact}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    const timelineHTML = `
        <div class="todays-timeline">
            <h4>📅 Today's Events</h4>
            <div class="timeline-items">
                ${events.keyMoments.map(moment => `
                    <div class="timeline-item">
                        <div class="timeline-time">${moment.time}</div>
                        <div class="timeline-content">
                            <strong>${moment.event}</strong>
                            <p>${moment.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const reactionsHTML = `
        <div class="reactions-section">
            <h4>💬 Faction Reactions</h4>
            <div class="reactions-grid">
                ${Object.entries(events.reactions).map(([key, reaction]) => {
                    const coalition = MIDLANDS_DIET_DATA.coalitions[key];
                    const moodIcons = {
                        'triumphant': '🎉',
                        'defiant': '😤',
                        'enraged': '🔥',
                        'calculating': '🧮',
                        'despairing': '😔',
                        'gleeful': '😈'
                    };
                    return `
                        <div class="reaction-card mood-${reaction.mood}" style="border-left-color: ${coalition?.color || 'var(--border-color)'}">
                            <div class="reaction-header">
                                <span class="reaction-faction">${coalition?.name || key}</span>
                                <span class="reaction-mood">${moodIcons[reaction.mood] || '❓'}</span>
                            </div>
                            <blockquote class="reaction-quote">"${reaction.statement}"</blockquote>
                            <cite class="reaction-speaker">— ${reaction.speaker}</cite>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    const aftermathHTML = ironMandate.aftermath ? `
        <div class="aftermath-section">
            <h4>🌙 As Night Falls...</h4>
            <div class="aftermath-items">
                <div class="aftermath-item">
                    <strong>Immediate:</strong> ${ironMandate.aftermath.immediate}
                </div>
                <div class="aftermath-item">
                    <strong>Tensions:</strong> ${ironMandate.aftermath.tensions}
                </div>
                <div class="aftermath-item aftermath-rumor">
                    <strong>Rumors:</strong> ${ironMandate.aftermath.rumors}
                </div>
            </div>
        </div>
    ` : '';

    return `
        <div class="todays-aftermath-container">
            <div class="aftermath-header">
                <span class="breaking-badge">⚡ BREAKING - PLANAR CRISIS</span>
                <h3>${events.headline}</h3>
                <p class="aftermath-summary">${events.summary}</p>
            </div>
            
            ${timelineHTML}
            ${planarStatusHTML}
            ${notableVotesHTML}
            ${consequencesHTML}
            ${legionBriefingHTML}
            ${reactionsHTML}
            ${aftermathHTML}
        </div>
    `;
}

function renderLegionIntegrationBanner() {
    const integration = MIDLANDS_DIET_DATA.legionIntegration;
    const legionStatus = getLegionPoliticalStatus();
    
    return `
        <div class="legion-integration-banner">
            <div class="integration-header">
                <span class="legion-icon">⚔️</span>
                <h4>Iron Legion Integration Status</h4>
                <span class="integration-status status-${integration.status.toLowerCase()}">${integration.status}</span>
            </div>
            <div class="integration-details">
                <div class="integration-stat">
                    <span class="stat-label">Military Advisor</span>
                    <span class="stat-value">${integration.militaryAdvisorPresent ? 'Present' : 'Absent'}</span>
                </div>
                <div class="integration-stat">
                    <span class="stat-label">Security Level</span>
                    <span class="stat-value security-${integration.securityLevel.toLowerCase()}">${integration.securityLevel}</span>
                </div>
                <div class="integration-stat">
                    <span class="stat-label">Aligned Seats</span>
                    <span class="stat-value">${legionStatus?.alignedSeats || 28}</span>
                </div>
                <div class="integration-stat">
                    <span class="stat-label">Last Briefing</span>
                    <span class="stat-value">Day ${integration.lastMilitaryBriefing.day}</span>
                </div>
            </div>
        </div>
    `;
}

function renderLegionOperationLink(vote) {
    if (!vote.legionOperation) return '';
    
    const operation = getLegionOperationForVote(vote.id);
    
    return `
        <div class="legion-operation-link">
            <div class="operation-header">
                <span class="operation-icon">⚔️</span>
                <span class="operation-label">Legion Operation</span>
                <span class="operation-codename">${vote.legionOperation}</span>
            </div>
            <p class="operation-response">${vote.legionResponse}</p>
            ${operation?.deployment ? `
                <div class="operation-deployment">
                    <span class="deployment-label">Deployment:</span>
                    <span class="deployment-troops">${operation.deployment.troops?.toLocaleString() || 'TBD'} troops</span>
                    <span class="deployment-status">${operation.deployment.status || 'PENDING'}</span>
                </div>
            ` : ''}
        </div>
    `;
}

function renderStandardVoteDisplay(vote, results, statusInfo, totalVotes, expelled, daysUntil) {
    return `
        <div class="vote-display-card urgency-${vote.urgency || 'medium'}">
            <div class="vote-header">
                <span class="vote-icon">${vote.icon || '🏛️'}</span>
                <div class="vote-title-block">
                    <h3 class="section-title">${vote.title}</h3>
                    <p class="vote-proposer">Proposed by: <strong>${vote.proposer}</strong></p>
                </div>
                <div class="vote-status-block">
                    <span class="vote-status-badge ${statusInfo.class}">
                        ${statusInfo.icon} ${statusInfo.label}
                    </span>
                    <span class="vote-date">${formatDate(vote.date)}</span>
                    ${daysUntil > 0 ? `<span class="days-until">(in ${daysUntil} day${daysUntil > 1 ? 's' : ''})</span>` : ''}
                </div>
            </div>
            
            <p class="vote-description">${vote.description}</p>
            
            ${renderLegionOperationLink(vote)}
            
            <div class="vote-arguments">
                <div class="argument argument-for">
                    <h5>✅ Argument FOR:</h5>
                    <p>${vote.arguments.for}</p>
                </div>
                <div class="argument argument-against">
                    <h5>❌ Argument AGAINST:</h5>
                    <p>${vote.arguments.against}</p>
                </div>
            </div>

            ${vote.relatedEvents ? `
                <div class="related-events">
                    <h5>📌 Related Events:</h5>
                    <ul>
                        ${vote.relatedEvents.map(e => `<li>${e}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <div class="vote-results ${results.projected ? 'projected' : 'final'}">
                <h4>${results.projected ? '📊 Projected Outcome' : '📊 Final Tally'}</h4>
                ${results.projected ? '<p class="projection-warning">⚠️ Projections based on current faction alignments and Legion influence. Actual votes may vary.</p>' : ''}
                <div class="vote-tally-bar">
                    <div class="tally-segment vote-yes" 
                         style="width: ${(results.yes / totalVotes) * 100}%" 
                         title="${results.yes} Yes votes">
                        <span class="tally-label">YES</span>
                        <span class="tally-count">${results.yes}</span>
                    </div>
                    <div class="tally-segment vote-no" 
                         style="width: ${(results.no / totalVotes) * 100}%" 
                         title="${results.no} No votes">
                        <span class="tally-label">NO</span>
                        <span class="tally-count">${results.no}</span>
                    </div>
                    <div class="tally-segment vote-abstain" 
                         style="width: ${(results.abstain / totalVotes) * 100}%" 
                         title="${results.abstain} Abstain votes">
                        <span class="tally-label">ABSTAIN</span>
                        <span class="tally-count">${results.abstain}</span>
                    </div>
                </div>
                <p class="expelled-note">Note: ${expelled} seats vacant (supernatural representatives expelled)</p>
            </div>
        </div>
    `;
}

function formatDate(date) {
    const month = CALENDAR_DATA?.months?.values?.[date.monthIndex];
    return `${month?.name || 'Month'} ${date.day}, ${date.year}`;
}

function getDaysUntil(date) {
    const currentAbs = CURRENT_GAME_DATE.year * 365 + CURRENT_GAME_DATE.monthIndex * 30 + CURRENT_GAME_DATE.day;
    const targetAbs = date.year * 365 + date.monthIndex * 30 + date.day;
    return targetAbs - currentAbs;
}

// ============================================
// CALENDAR INTEGRATION
// ============================================

export function getLegislativeEventsForDay(year, monthIndex, day) {
    const events = [];
    
    VOTE_HISTORY.forEach(vote => {
        if (vote.date.year === year && vote.date.monthIndex === monthIndex && vote.date.day === day) {
            events.push({
                type: 'legislation',
                name: `Diet Vote: ${vote.title}`,
                description: `Result: ${vote.status.toUpperCase()}. ${vote.description.substring(0, 100)}...`,
                icon: vote.icon || '🏛️',
                voteId: vote.id,
                status: vote.status,
                legionOperation: vote.legionOperation
            });
        }
    });

    UPCOMING_VOTES.forEach(vote => {
        if (vote.date.year === year && vote.date.monthIndex === monthIndex && vote.date.day === day) {
            const status = getVoteStatus(vote);
            events.push({
                type: 'legislation',
                name: `Scheduled Vote: ${vote.title}`,
                description: `${vote.description.substring(0, 100)}...`,
                icon: vote.icon || '🏛️',
                voteId: vote.id,
                status: status,
                urgency: vote.urgency,
                legionOperation: vote.legionOperation
            });
        }
    });

    return events;
}

export function getAllLegislativeEvents() {
    const allEvents = [];
    
    VOTE_HISTORY.forEach(vote => {
        allEvents.push({
            ...vote,
            eventType: 'historical'
        });
    });

    UPCOMING_VOTES.forEach(vote => {
        allEvents.push({
            ...vote,
            eventType: 'upcoming',
            computedStatus: getVoteStatus(vote)
        });
    });

    return allEvents.sort((a, b) => {
        const aDay = a.date.year * 365 + a.date.monthIndex * 30 + a.date.day;
        const bDay = b.date.year * 365 + b.date.monthIndex * 30 + b.date.day;
        return aDay - bDay;
    });
}

// ============================================
// UI FUNCTIONS
// ============================================

function showDietDetailPanel(repData, seatElement) {
    const appContainer = document.getElementById('app');
    const detailPanel = document.getElementById('detail-panel');
    const detailPanelContent = document.getElementById('detail-panel-content');
    
    let overlay = document.querySelector('.detail-panel-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'detail-panel-overlay';
        overlay.addEventListener('click', hideDietDetailPanel);
        document.body.appendChild(overlay);
    }
    
    if (!detailPanel || !detailPanelContent) return;

    if (selectedSeat) selectedSeat.classList.remove('selected');
    selectedSeat = seatElement;
    selectedSeat.classList.add('selected');

    const faction = LORE_DATA?.factions?.[repData.factionId] || { name: 'Unaligned', logo: '' };
    const coalition = Object.values(MIDLANDS_DIET_DATA.coalitions).find(c => 
        c.factions.includes(repData.factionId)
    );
    
    const legionPresence = getLegionPresenceForProvince(repData.province);
    const coalitionLegionStatus = getCoalitionLegionStatus(
        Object.keys(MIDLANDS_DIET_DATA.coalitions).find(k => 
            MIDLANDS_DIET_DATA.coalitions[k].factions.includes(repData.factionId)
        )
    );

    const currentVote = getCurrentVote();
    const voteResults = simulateVote(currentVote);
    const repVote = voteResults.votes?.find(v => v.repId === repData.id);

    const isExpelled = repData.factionId === 'onyx_hand' || repData.factionId === 'moonfang_pack';

    detailPanelContent.innerHTML = `
        <div class="panel-header">
            ${faction.logo ? `<img src="${faction.logo}" alt="${faction.name} Logo">` : ''}
            <h3>${repData.name}</h3>
            ${isExpelled ? '<span class="expelled-badge">EXPELLED</span>' : ''}
        </div>
        <div class="panel-section">
            <p><strong>Province:</strong> ${repData.province}</p>
            <p><strong>Affiliation:</strong> ${faction.name}</p>
            <p><strong>Coalition:</strong> ${coalition ? coalition.name : 'Independent'}</p>
            <p><strong>Personality:</strong> <span class="personality">${repData.personality.type}</span></p>
            <p><strong>Influence:</strong> ${repData.influence}/100</p>
            ${repData.corruptible ? '<p class="corruptible-tag">⚠️ Susceptible to... persuasion</p>' : ''}
        </div>
        
        <div class="panel-section legion-status-section">
            <h4>⚔️ Legion Status</h4>
            <p><strong>Province Presence:</strong> 
                <span class="presence-badge presence-${legionPresence?.presence?.toLowerCase() || 'none'}">
                    ${legionPresence?.presence || 'NONE'}
                </span>
            </p>
            ${legionPresence?.troops ? `<p><strong>Deployed Troops:</strong> ${legionPresence.troops.toLocaleString()}</p>` : ''}
            ${legionPresence?.commander ? `<p><strong>Commander:</strong> ${legionPresence.commander}</p>` : ''}
            <p><strong>Coalition Alignment:</strong> 
                <span class="alignment-badge ${coalitionLegionStatus?.isAlly ? 'ally' : coalitionLegionStatus?.isTarget ? 'target' : 'neutral'}">
                    ${coalition?.legionAlignment || 'UNKNOWN'}
                </span>
            </p>
            ${repData.legionContact ? '<p class="legion-contact-tag">🔗 Known Legion Contact</p>' : ''}
        </div>
        
        ${!isExpelled && repVote ? `
            <div class="panel-section vote-prediction">
                <h4>Predicted Vote on "${currentVote.title}"</h4>
                <p class="vote-stance vote-${repVote.vote}">${repVote.vote.toUpperCase()}</p>
                <p class="vote-reason">${repVote.reason}</p>
                <p class="vote-confidence">Confidence: ${Math.round(repVote.confidence * 100)}%</p>
                ${repVote.legionInfluence ? '<p class="legion-influence-tag">⚔️ Legion Influenced</p>' : ''}
            </div>
        ` : ''}
        ${isExpelled ? `
            <div class="panel-section expelled-notice">
                <h4>⛔ Expelled Representative</h4>
                <p>Following the passage of the Supernatural Sovereignty Act, this representative has been forcibly removed from the Diet.</p>
                <p class="legion-note">Iron Legion enforcement pending in their home province.</p>
            </div>
        ` : ''}
    `;

    detailPanel.classList.add('visible');
    overlay.classList.add('visible');
    appContainer?.classList.add('panel-visible');
    document.body.classList.add('panel-open');
    
    detailPanelContent.scrollTop = 0;
}

function hideDietDetailPanel() {
    const appContainer = document.getElementById('app');
    const detailPanel = document.getElementById('detail-panel');
    const overlay = document.querySelector('.detail-panel-overlay');
    
    if (detailPanel) detailPanel.classList.remove('visible');
    if (overlay) overlay.classList.remove('visible');
    if (appContainer) appContainer.classList.remove('panel-visible');
    document.body.classList.remove('panel-open');
    
    if (selectedSeat) {
        selectedSeat.classList.remove('selected');
        selectedSeat = null;
    }
}

// ============================================
// MAIN RENDER FUNCTION
// ============================================

export function renderHolyMidlandsDiet() {
    if (representatives.length === 0) {
        representatives = generateRepresentatives();
    }

    const data = MIDLANDS_DIET_DATA;
    const currentVote = getCurrentVote();
    const voteStatus = getVoteStatus(currentVote);
    const voteResults = simulateVote(currentVote);
    
    const showTodaysAftermath = currentVote.isTodaysFocus && currentVote.id === 'iron_mandate';
    
    const activeReps = representatives.filter(r => 
        r.factionId !== 'onyx_hand' && r.factionId !== 'moonfang_pack'
    );
    const totalActiveVotes = activeReps.length;
    const expelledCount = representatives.length - activeReps.length;

    const groupedByCoalition = representatives.reduce((acc, rep) => {
        const coalitionKey = Object.keys(data.coalitions).find(key => 
            data.coalitions[key].factions.includes(rep.factionId)
        ) || 'independent';
        if (!acc[coalitionKey]) acc[coalitionKey] = [];
        acc[coalitionKey].push(rep);
        return acc;
    }, {});

    const speakerRep = activeReps[0];

    const statusConfig = {
        'voting_today': { label: 'VOTING TODAY', class: 'status-urgent', icon: '🗳️' },
        'voting_tomorrow': { label: 'VOTING TOMORROW', class: 'status-warning', icon: '⏰' },
        'imminent': { label: 'IMMINENT', class: 'status-warning', icon: '⚠️' },
        'scheduled': { label: 'SCHEDULED', class: 'status-info', icon: '📅' },
        'passed': { label: 'PASSED', class: 'status-success', icon: '✅' },
        'just_passed': { label: 'JUST PASSED', class: 'status-breaking', icon: '⚡' },
        'failed': { label: 'FAILED', class: 'status-danger', icon: '❌' },
        'tabled': { label: 'TABLED', class: 'status-muted', icon: '📋' }
    };
    const statusInfo = statusConfig[voteStatus] || statusConfig['scheduled'];
    const daysUntil = getDaysUntil(currentVote.date);

    const nextVote = UPCOMING_VOTES[0];
    const nextVoteResults = projectVoteResults(nextVote);
    
    const coalitionsHTML = Object.entries(data.coalitions).map(([key, coalition]) => {
        const reps = groupedByCoalition[key] || [];
        if (reps.length === 0) return '';
        
        const isExpelled = coalition.factions.includes('onyx_hand') || coalition.factions.includes('moonfang_pack');
        const legionStatus = getCoalitionLegionStatus(key);
        
        return `
            <div class="coalition-block ${isExpelled ? 'expelled-coalition' : ''} ${legionStatus?.isTarget ? 'legion-target' : ''} ${legionStatus?.isAlly ? 'legion-ally' : ''}">
                <h4 class="coalition-header" style="border-left-color: ${coalition.color};">
                    ${coalition.name} 
                    <span class="seat-count">(${reps.length} seats${isExpelled ? ' - EXPELLED' : ''})</span>
                    ${legionStatus?.isAlly ? '<span class="legion-ally-badge">⚔️</span>' : ''}
                    ${legionStatus?.isTarget ? '<span class="legion-target-badge">🎯</span>' : ''}
                </h4>
                <p class="coalition-stance">
                    Stance: <strong>${coalition.stance}</strong> | 
                    Leader: ${coalition.leader}
                    ${coalition.legionAlignment ? ` | Legion: <span class="legion-alignment">${coalition.legionAlignment}</span>` : ''}
                </p>
                <div class="seat-container">
                    ${reps.map(rep => {
                        const repVote = nextVoteResults.votes?.find(v => v.repId === rep.id);
                        const voteClass = repVote ? `vote-${repVote.vote}` : '';
                        const expelledClass = isExpelled ? 'expelled' : '';
                        const legionInfluenceClass = repVote?.legionInfluence ? 'legion-influenced' : '';
                        const legionContactClass = rep.legionContact ? 'legion-contact' : '';
                        return `
                            <div class="parliament-seat seat-${rep.factionId} ${voteClass} ${expelledClass} ${legionInfluenceClass} ${legionContactClass}" 
                                 data-rep-id="${rep.id}" 
                                 title="${rep.name}${isExpelled ? ' (Expelled)' : ''}${rep.legionContact ? ' [Legion Contact]' : ''}">
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    const voteDisplayHTML = showTodaysAftermath ? `
        <div class="vote-display-card urgency-breaking just-passed">
            <div class="vote-header">
                <span class="vote-icon">${currentVote.icon || '🏛️'}</span>
                <div class="vote-title-block">
                    <h3 class="section-title">${currentVote.title}</h3>
                    <p class="vote-proposer">Proposed by: <strong>${currentVote.proposer}</strong></p>
                </div>
                <div class="vote-status-block">
                    <span class="vote-status-badge ${statusInfo.class}">
                        ${statusInfo.icon} ${statusInfo.label}
                    </span>
                    <span class="vote-date">${formatDate(currentVote.date)} - TODAY</span>
                </div>
            </div>
            
            <p class="vote-description">${currentVote.description}</p>
            
            ${renderLegionOperationLink(currentVote)}
            
            <div class="vote-results final">
                <h4>📊 Final Tally</h4>
                <div class="vote-tally-bar">
                    <div class="tally-segment vote-yes" 
                         style="width: ${(voteResults.yes / totalActiveVotes) * 100}%" 
                         title="${voteResults.yes} Yes votes">
                        <span class="tally-label">YES</span>
                        <span class="tally-count">${voteResults.yes}</span>
                    </div>
                    <div class="tally-segment vote-no" 
                         style="width: ${(voteResults.no / totalActiveVotes) * 100}%" 
                         title="${voteResults.no} No votes">
                        <span class="tally-label">NO</span>
                        <span class="tally-count">${voteResults.no}</span>
                    </div>
                    <div class="tally-segment vote-abstain" 
                         style="width: ${(voteResults.abstain / totalActiveVotes) * 100}%" 
                         title="${voteResults.abstain} Abstain votes">
                        <span class="tally-label">ABSTAIN</span>
                        <span class="tally-count">${voteResults.abstain}</span>
                    </div>
                </div>
                <p class="expelled-note">Note: ${expelledCount} seats vacant (supernatural representatives expelled)</p>
                <p class="result-declaration">THE IRON MANDATE HAS PASSED</p>
            </div>
        </div>
        
        ${renderTodaysAftermath()}
    ` : renderStandardVoteDisplay(currentVote, voteResults, statusInfo, totalActiveVotes, expelledCount, daysUntil);

    const calendarHTML = `
        <div class="legislative-calendar">
            <h4>📅 Legislative Calendar</h4>
            <div class="calendar-items">
                ${VOTE_HISTORY.slice(-3).map(vote => {
                    const isToday = vote.id === 'iron_mandate';
                    return `
                        <div class="calendar-item historical ${isToday ? 'today-vote' : ''} ${vote.legionOperation ? 'has-legion-op' : ''}">
                            <span class="cal-date">${formatDate(vote.date)}${isToday ? ' (TODAY)' : ''}</span>
                            <span class="cal-title">${vote.title}</span>
                            <span class="cal-status status-${vote.status}">${vote.status.toUpperCase()}</span>
                            ${vote.legionOperation ? `<span class="cal-legion-op">⚔️ ${vote.legionOperation}</span>` : ''}
                        </div>
                    `;
                }).join('')}
                <div class="calendar-divider">— Upcoming Votes —</div>
                ${UPCOMING_VOTES.map(vote => {
                    const status = getVoteStatus(vote);
                    const days = getDaysUntil(vote.date);
                    return `
                        <div class="calendar-item upcoming ${status === 'imminent' ? 'imminent' : ''} ${vote.legionOperation ? 'has-legion-op' : ''}">
                            <span class="cal-date">${formatDate(vote.date)}</span>
                            <span class="cal-title">${vote.title}</span>
                            <span class="cal-days">${days === 0 ? 'TODAY' : days === 1 ? 'TOMORROW' : `+${days} days`}</span>
                            ${vote.legionOperation ? `<span class="cal-legion-op">⚔️ ${vote.legionOperation}</span>` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    const nextVotePreviewHTML = `
        <div class="next-vote-preview">
            <h4>⏭️ Next Vote: ${nextVote.title}</h4>
            <p class="next-vote-date">${formatDate(nextVote.date)} (in ${getDaysUntil(nextVote.date)} days)</p>
            <p class="next-vote-desc">${nextVote.description.substring(0, 150)}...</p>
            ${nextVote.legionOperation ? `
                <div class="next-vote-legion">
                    <span class="legion-op-label">⚔️ Legion Operation:</span>
                    <span class="legion-op-name">${nextVote.legionOperation}</span>
                </div>
            ` : ''}
            <div class="next-vote-projection">
                <span class="projection-label">Current Projection:</span>
                <span class="projection-yes">YES: ${nextVoteResults.yes}</span>
                <span class="projection-no">NO: ${nextVoteResults.no}</span>
                <span class="projection-abstain">ABSTAIN: ${nextVoteResults.abstain}</span>
            </div>
        </div>
    `;

    const speakerVote = nextVoteResults.votes?.find(v => v.repId === speakerRep?.id)?.vote || 'abstain';

    const legionInfluenceStats = nextVoteResults.votes?.filter(v => v.legionInfluence).length || 0;

    return `
        <div class="diet-header">
            <h2>${data.name}</h2>
            <span class="diet-status status-${data.status.toLowerCase().replace(' ', '-')}">${data.status}</span>
            <span class="session-info">Session ${data.currentSession}</span>
        </div>
        
        <p class="system-description">${data.description}</p>
        
        ${renderLegionIntegrationBanner()}
        
        <div class="system-content">
            ${voteDisplayHTML}
            
            ${showTodaysAftermath ? nextVotePreviewHTML : ''}
            
            ${calendarHTML}
            
            <div class="legion-influence-summary">
                <h4>⚔️ Legion Influence on Upcoming Votes</h4>
                <div class="influence-stats">
                    <div class="influence-stat">
                        <span class="stat-value">${legionInfluenceStats}</span>
                        <span class="stat-label">Legion-Influenced Votes</span>
                    </div>
                    <div class="influence-stat">
                        <span class="stat-value">${representatives.filter(r => r.legionContact).length}</span>
                        <span class="stat-label">Known Legion Contacts</span>
                    </div>
                    <div class="influence-stat">
                        <span class="stat-value">${MIDLANDS_DIET_DATA.provinces.filter(p => p.legionPresence === 'DEPLOYING').length}</span>
                        <span class="stat-label">Provinces Under Deployment</span>
                    </div>
                </div>
            </div>
            
            <h3 class="section-title" style="margin-top: 32px;">Diet Seating Chart</h3>
            <p class="seating-subtitle">Showing predicted votes for: <strong>${nextVote.title}</strong></p>
            
            <div class="parliament-container">
                <div class="speaker-section">
                    <h4>Speaker of the Diet</h4>
                    <div class="speaker-seat seat-${speakerRep?.factionId || 'unaligned'} vote-${speakerVote}" 
                         data-rep-id="${speakerRep?.id}" 
                         title="${speakerRep?.name || 'Unknown'}">
                    </div>
                    <p class="speaker-name">${speakerRep?.name || 'Unknown'}</p>
                </div>
                <div class="coalition-grid">${coalitionsHTML}</div>
            </div>
            
            <div class="legend-section">
                <h4>Vote Legend (Next Vote Prediction)</h4>
                <div class="vote-legend">
                    <span class="legend-item"><span class="legend-dot vote-yes"></span> Likely YES</span>
                    <span class="legend-item"><span class="legend-dot vote-no"></span> Likely NO</span>
                    <span class="legend-item"><span class="legend-dot vote-abstain"></span> Likely Abstain</span>
                    <span class="legend-item"><span class="legend-dot expelled"></span> Expelled</span>
                    <span class="legend-item"><span class="legend-dot legion-influenced"></span> Legion Influenced</span>
                    <span class="legend-item"><span class="legend-dot legion-contact"></span> Legion Contact</span>
                </div>
            </div>
            
            <div class="coordinated-timeline-section">
                <h4>📅 Legion-Diet Coordinated Timeline</h4>
                <div class="coordinated-timeline">
                    ${getCoordinatedTimeline().map(event => {
                        const isToday = event.date.day === CURRENT_GAME_DATE.day && 
                                       event.date.monthIndex === CURRENT_GAME_DATE.monthIndex;
                        const isPast = (event.date.year * 365 + event.date.monthIndex * 30 + event.date.day) < 
                                      (CURRENT_GAME_DATE.year * 365 + CURRENT_GAME_DATE.monthIndex * 30 + CURRENT_GAME_DATE.day);
                        return `
                            <div class="timeline-event ${isToday ? 'today' : ''} ${isPast ? 'past' : 'future'}">
                                <div class="timeline-date">
                                    Day ${event.date.day}
                                    ${isToday ? '<span class="today-badge">TODAY</span>' : ''}
                                </div>
                                <div class="timeline-dual">
                                    <div class="timeline-diet">
                                        <span class="timeline-label">🏛️ Diet Action:</span>
                                        <span class="timeline-value">${event.dietAction}</span>
                                    </div>
                                    <div class="timeline-legion">
                                        <span class="timeline-label">⚔️ Legion Response:</span>
                                        <span class="timeline-value">${event.legionResponse}</span>
                                    </div>
                                </div>
                                <div class="timeline-goal">
                                    <span class="goal-label">Strategic Goal:</span>
                                    <span class="goal-value">${event.strategicGoal}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div class="dual-role-personnel-section">
                <h4>🔗 Political-Military Liaisons</h4>
                <div class="personnel-cards">
                    ${getDualRolePersonnel().map(person => `
                        <div class="liaison-card">
                            <div class="liaison-header">
                                <span class="liaison-name">${person.name}</span>
                                <span class="loyalty-badge loyalty-${person.loyaltyRating.toLowerCase().replace(' ', '-')}">${person.loyaltyRating}</span>
                            </div>
                            <div class="liaison-roles">
                                <div class="role-row">
                                    <span class="role-icon">🏛️</span>
                                    <span class="role-text">${person.politicalRole}</span>
                                </div>
                                <div class="role-row">
                                    <span class="role-icon">⚔️</span>
                                    <span class="role-text">${person.militaryRole}</span>
                                </div>
                            </div>
                            <div class="liaison-focus">
                                <strong>Current Focus:</strong> ${person.currentFocus}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="threat-assessment-summary">
                <h4>⚠️ Legion Threat Assessment Summary</h4>
                ${(() => {
                    const threat = getLegionThreatAssessment();
                    return `
                        <div class="threat-metrics-row">
                            <div class="threat-metric overall">
                                <span class="metric-label">Overall</span>
                                <span class="metric-value threat-${threat.overall.toLowerCase()}">${threat.overall}</span>
                            </div>
                            <div class="threat-metric">
                                <span class="metric-label">Military</span>
                                <span class="metric-value threat-${threat.military.toLowerCase()}">${threat.military}</span>
                            </div>
                            <div class="threat-metric">
                                <span class="metric-label">Political</span>
                                <span class="metric-value threat-${threat.political.toLowerCase()}">${threat.political}</span>
                            </div>
                            <div class="threat-metric">
                                <span class="metric-label">Intelligence</span>
                                <span class="metric-value threat-${threat.intelligence.toLowerCase()}">${threat.intelligence}</span>
                            </div>
                        </div>
                        <div class="threat-details">
                            <div class="threat-column">
                                <h5>Immediate Threats</h5>
                                <ul>
                                    ${threat.immediateThreats.map(t => `<li>${t}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="threat-column">
                                <h5>Recommended Actions</h5>
                                <ul>
                                    ${threat.recommendedActions.map(a => `<li>${a}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `;
                })()}
            </div>
        </div>
    `;
}

// ============================================
// EVENT LISTENERS
// ============================================

export function initHolyMidlandsDietListeners() {
    const tooltip = document.getElementById('parliament-tooltip');
    const dietContainer = document.querySelector('.unique-system-container');
    const detailPanelClose = document.getElementById('detail-panel-close');

    if (!dietContainer) return;

    // Tooltip on hover
    dietContainer.addEventListener('mouseover', (e) => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat && tooltip) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            const currentVote = getCurrentVote();
            const voteResults = simulateVote(currentVote);
            const voteData = voteResults.votes?.find(v => v.repId === repId);
            const legionPresence = repData ? getLegionPresenceForProvince(repData.province) : null;
            
            if (repData) {
                const isExpelled = repData.factionId === 'onyx_hand' || repData.factionId === 'moonfang_pack';
                tooltip.innerHTML = `
                    <h4>${repData.name}</h4>
                    <p><strong>Province:</strong> ${repData.province}</p>
                    <p><strong>Personality:</strong> ${repData.personality.type}</p>
                    ${legionPresence?.presence && legionPresence.presence !== 'NONE' ? 
                        `<p><strong>Legion Presence:</strong> <span class="presence-${legionPresence.presence.toLowerCase()}">${legionPresence.presence}</span></p>` : ''}
                    ${repData.legionContact ? '<p class="legion-contact-indicator">🔗 Legion Contact</p>' : ''}
                    ${isExpelled ? 
                        '<p class="vote-expelled"><strong>STATUS: EXPELLED</strong></p>' :
                        voteData ? `
                            <p class="vote-${voteData.vote}"><strong>Predicted: ${voteData.vote.toUpperCase()}</strong></p>
                            <p class="tooltip-reason">${voteData.reason}</p>
                            ${voteData.legionInfluence ? '<p class="legion-influence-indicator">⚔️ Legion Influenced</p>' : ''}
                        ` : ''
                    }
                `;
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            }
        }
    });

    dietContainer.addEventListener('mousemove', (e) => {
        if (tooltip && tooltip.style.visibility === 'visible') {
            const containerRect = dietContainer.getBoundingClientRect();
            tooltip.style.left = `${e.clientX - containerRect.left + 15}px`;
            tooltip.style.top = `${e.clientY - containerRect.top + 15}px`;
        }
    });

    dietContainer.addEventListener('mouseout', (e) => {
        if (e.target.closest('.parliament-seat, .speaker-seat') && tooltip) {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    });

    // Click for detail panel
    dietContainer.addEventListener('click', e => {
        const seat = e.target.closest('.parliament-seat, .speaker-seat');
        if (seat) {
            const repId = seat.dataset.repId;
            const repData = representatives.find(r => r.id === repId);
            if (repData) showDietDetailPanel(repData, seat);
        }
    });

    if (detailPanelClose) {
        detailPanelClose.addEventListener('click', hideDietDetailPanel);
    }

    // Listen for Legion system events
    window.addEventListener('legionDietSync', (e) => {
        console.log('Legion-Diet sync received:', e.detail);
        legionDataCache = null; // Clear cache to force refresh
    });

    // Listen for navigation requests from Legion dossier
    window.addEventListener('navigateToVote', (e) => {
        const { voteId, source } = e.detail;
        console.log(`Navigation to vote ${voteId} requested from ${source}`);
        // Could scroll to vote or highlight it
        const voteCard = document.querySelector(`[data-vote-id="${voteId}"]`);
        if (voteCard) {
            voteCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            voteCard.classList.add('highlighted');
            setTimeout(() => voteCard.classList.remove('highlighted'), 3000);
        }
    });
}

// ============================================
// CROSS-SYSTEM EVENT EMITTERS
// ============================================

export function emitVotePassed(voteId, results) {
    window.dispatchEvent(new CustomEvent('dietVotePassed', {
        detail: {
            voteId,
            results,
            timestamp: new Date().toISOString(),
            legionOperation: VOTE_HISTORY.find(v => v.id === voteId)?.legionOperation || 
                            UPCOMING_VOTES.find(v => v.id === voteId)?.legionOperation
        }
    }));
}

export function emitDietStatusUpdate() {
    const currentVote = getCurrentVote();
    const voteResults = simulateVote(currentVote);
    
    window.dispatchEvent(new CustomEvent('dietStatusUpdate', {
        detail: {
            currentSession: MIDLANDS_DIET_DATA.currentSession,
            status: MIDLANDS_DIET_DATA.status,
            currentVote: {
                id: currentVote.id,
                title: currentVote.title,
                status: getVoteStatus(currentVote)
            },
            projectedResults: voteResults.projected ? voteResults : null,
            legionIntegration: MIDLANDS_DIET_DATA.legionIntegration,
            expelledFactions: ['onyx_hand', 'moonfang_pack'],
            timestamp: new Date().toISOString()
        }
    }));
}

// ============================================
// EXPORTS
// ============================================

export {
    MIDLANDS_DIET_DATA,
    VOTE_HISTORY,
    UPCOMING_VOTES,
    TODAYS_DIET_EVENTS,
    representatives,
    getCurrentVote,
    getVoteStatus,
    simulateVote,
    projectVoteResults,
    getCoalitionLegionStatus,
    formatDate,
    getDaysUntil
};                                    