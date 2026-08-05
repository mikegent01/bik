// ============================================
// KOOPA TROOP WAR ROOM INTERFACE
// Fixed Version - Working Layout
// ============================================

import { state, loadState } from './app/core/state.js';
import { getIntelBreakdown } from './systems/common.js';
import { MAP_DATA } from './data/maps/map-data.js';
import { playSound } from './app/core/common.js';

// ============================================
// COMPLETE LORE & DATA
// ============================================

const KOOPA_DATA = {
    identity: {
        name: 'The Koopa Troop',
        fullName: 'The Royal Koopa Troop Imperial Forces',
        icon: '🐢',
        crown: '👑',
        motto: 'Showtime!',
        altMotto: 'Might Makes Right',
        founded: 'Pre-Mushroom Dynasty Era',
        headquarters: 'Valley of Bowser, Dark Lands',
        government: 'Absolute Monarchy (Under Regency)',
        population: '2-3 Million',
        alignment: 'Imperial Expansionist'
    },

    crisis: {
        level: 'CRITICAL',
        stability: 'UNSTABLE',
        alertCode: 'DEFCON 1',
        headline: 'IRON MANDATE ACTIVE • KING IN FIELD • FLEET SCATTERED • SUCCESSION UNCERTAIN',
        lastUpdate: '1040-06-21',
        
        summary: `The Koopa Troop faces a perfect storm of crises. King Bowser operates independently within Raventree Manor while Regent Kamek maintains a desperate deception. The Iron Legion's "Iron Mandate" has declared war on all magic users, forcing the Magikoopa Order underground. The Koopalings grow restless, and civil war looms.`,
        
        keyMetrics: [
            { label: 'King Status', value: 'FIELD OPS', status: 'critical' },
            { label: 'Regency', value: 'KAMEK', status: 'warning' },
            { label: 'Fleet Status', value: '65%', status: 'warning' },
            { label: 'Ground Forces', value: '90%', status: 'stable' },
            { label: 'Magic Ops', value: 'SUSPENDED', status: 'critical' },
            { label: 'Koopaling Unity', value: 'FRACTURED', status: 'danger' }
        ]
    },

    priorities: [
        {
            id: 'kings_shadow',
            title: "Operation: King's Shadow",
            priority: 'maximum',
            status: 'critical',
            intelRequired: 20,
            secretIntelRequired: 90,
            summary: 'Maintain the "Strategic Meditation" cover story regarding King Bowser\'s true location.',
            briefing: `Following the Vigilance incident, King Bowser has entered a period of "Deep Strategic Meditation" to plan the counter-offensive against the Iron Legion. Regent Kamek has issued strict orders: The King is not to be disturbed by anyone, including the Koopalings or Bowser Jr., until war plans are finalized.`,
            classifiedBriefing: `EYES ONLY - KAMEK: The King is NOT in the Dark Lands. He is currently operating as an independent adventurer within Raventree Manor, investigating time distortions alongside freelancers.

A hard-light illusion ("Shadow Bowser") has been established in the Throne Room, but it cannot speak or leave the dais. If the troops discover their King is playing haunted house investigator while the Iron Legion seizes our borders, the army will fracture immediately.`,
            objectives: [
                { text: 'Maintain "Strategic Meditation" cover story', complete: true },
                { text: 'Restrict Throne Room access', complete: true },
                { text: 'Establish magical link to Raventree Manor', complete: false },
                { text: 'Extract the King before illusion fails', complete: false }
            ]
        },
        {
            id: 'iron_mandate',
            title: 'Protocol Omega (Iron Mandate Defense)',
            priority: 'critical',
            status: 'active',
            intelRequired: 30,
            secretIntelRequired: 70,
            summary: 'Implementation of the Geometry Shield to counter Iron Legion anti-magic detection.',
            briefing: `The Regal Empire's "Iron Mandate" authorizes Iron Legion "Witch-Finder" units to purge magical threats. This is a direct declaration of war against the Magikoopa Order. All field casters have been recalled to the Valley of Bowser for Protocol Omega.`,
            classifiedBriefing: `The ritual requires the World 8 Leyline at full capacity. Power has been diverted from airship manufactories. Estimated completion: 14 days. Kamek has authorized "forbidden geometry" to accelerate the process.`,
            objectives: [
                { text: 'Recall all Magikoopas to Valley', complete: true },
                { text: 'Power down Airship Factory Alpha', complete: true },
                { text: 'Stabilize Geometry Shield', complete: false },
                { text: 'Repel Legion scouting probes', complete: false }
            ]
        },
        {
            id: 'vigilance_loss',
            title: 'The Lost Flagship',
            priority: 'high',
            status: 'failed',
            intelRequired: 25,
            secretIntelRequired: 65,
            summary: 'Super-Dreadnought "Vigilance" captured by Iron Legion forces.',
            briefing: `The pride of the Doomship Armada has fallen. Following Tea Leaf Syndicate infiltration and the Capital Standoff, the Vigilance was boarded and captured. The Legion is currently broadcasting propaganda from the vessel.`,
            classifiedBriefing: `The loss is catastrophic. The Vigilance contained the prototype "Dark Star" engine core. If the Legion reverse-engineers this, they could develop null-magic bombs. Iggy has been placed on suicide watch.`,
            objectives: [
                { text: 'Assess intelligence compromise', complete: true },
                { text: 'Monitor Legion movements', complete: true },
                { text: 'Develop Dark Star countermeasures', complete: false },
                { text: 'Plan scuttle or recapture mission', complete: false }
            ]
        },
        {
            id: 'succession',
            title: 'The Succession Vacuum',
            priority: 'maximum',
            status: 'critical',
            intelRequired: 40,
            secretIntelRequired: 85,
            summary: 'Internal stability threatened by the King\'s prolonged isolation.',
            briefing: `Tensions rise in the ranks. Bowser Jr. has been denied access to his father. The Koopalings demand audience with the King to discuss Iron Mandate strategy.`,
            classifiedBriefing: `Ludwig von Koopa knows something is wrong. He has withdrawn forces from Sky Land without authorization. If Ludwig or Jr. storm the Throne Room and find only a hologram, civil war is immediate.`,
            objectives: [
                { text: 'Blockade Throne Room access', complete: true },
                { text: 'Monitor Ludwig communications', complete: true },
                { text: 'Placate Bowser Jr.', complete: false },
                { text: 'Prevent Jr.-Ludwig alliance', complete: false }
            ]
        },
        {
            id: 'northern_front',
            title: 'The Northern Front',
            priority: 'medium',
            status: 'monitoring',
            intelRequired: 25,
            secretIntelRequired: 50,
            summary: 'Peach Loyalists have captured Bramblehaven from Fawful.',
            briefing: `Captain Toadette's Loyalists captured Bramblehaven on Day 17. Fawful's northern flank is collapsing.`,
            classifiedBriefing: `Let Fawful and the Loyalists bleed each other dry. Once the winner emerges exhausted, we launch Operation Eviction to retake Peach's Castle.`,
            objectives: [
                { text: 'Monitor the conflict', complete: true },
                { text: 'Withdraw scouts from area', complete: true },
                { text: 'Update Castle siege plans', complete: false }
            ]
        }
    ],

    leadership: {
        supreme: [
            {
                id: 'bowser',
                name: 'King Bowser Koopa',
                title: 'The Koopa King',
                icon: '👑',
                status: 'field_ops',
                statusLabel: 'ACTIVE - RAVENTREE MANOR',
                location: 'Raventree Manor (Covert)',
                publicLocation: 'Throne Room - Strategic Meditation',
                intelRequired: 10,
                secretIntelRequired: 75,
                bio: `Supreme Ruler of the Dark Lands. King Bowser has led the Koopa Troop for over three decades, combining devastating physical power with surprising political acumen.`,
                currentState: `Following rescue from the Vigilance, Bowser has NOT returned to the Dark Lands. He is currently operating independently within Raventree Manor.`,
                classifiedInfo: `The King is operating without Royal Guard or logistical support. If the Troop learns their King is "adventuring" in a haunted house, morale could collapse entirely.`,
                stats: { might: 'S+', magic: 'B+', cunning: 'B', charisma: 'A', command: 'A' },
                threatLevel: null
            },
            {
                id: 'kamek',
                name: 'Kamek',
                title: 'High Magus / Acting Regent',
                icon: '🪄',
                status: 'active',
                statusLabel: 'ACTIVE - REGENT AUTHORITY',
                location: 'Valley of Bowser - Throne Complex',
                intelRequired: 15,
                secretIntelRequired: 70,
                bio: `Bowser's childhood caretaker, chief advisor, and the most powerful Magikoopa in recorded history.`,
                currentState: `Following return to the Dark Lands on 1040-06-18, Kamek has assumed emergency Regent powers.`,
                classifiedInfo: `Kamek maintains a "Shadow Bowser" illusion in the Throne Room. If the Geometry Shield fails, the Magikoopa Order faces extinction.`,
                stats: { might: 'D', magic: 'S+', cunning: 'A+', charisma: 'C', command: 'A' },
                threatLevel: null
            }
        ],
        heir: {
            id: 'bowser_jr',
            name: 'Bowser Jr.',
            title: 'Crown Prince / Heir Apparent',
            icon: '🖌️',
            status: 'restricted',
            statusLabel: 'ACTIVE - ACCESS RESTRICTED',
            location: 'Dark Land - Personal Workshop',
            intelRequired: 20,
            secretIntelRequired: 60,
            bio: `The only legitimate heir to the Koopa throne. Junior combines his father's ferocity with surprising technical aptitude.`,
            currentState: `Bowser Jr. has been denied access to his father by the Regent. He refuses Kamek's orders to deploy his fleet.`,
            classifiedInfo: `Jr. suspects Kamek is lying. He is rushing completion of "MECHAZILLA II" using forbidden chaotic energy.`,
            stats: { might: 'B+', magic: 'C+', cunning: 'B+', charisma: 'A-', command: 'B' },
            threatLevel: 'MEDIUM'
        },
        advisors: [
            {
                id: 'kammy',
                name: 'Kammy Koopa',
                title: 'Elder Magikoopa / Council Voice',
                icon: '🔮',
                status: 'active',
                statusLabel: 'ACTIVE - ADVISORY',
                location: 'Valley of Bowser - Magikoopa Sanctum',
                intelRequired: 30,
                secretIntelRequired: 65,
                bio: `The second-most powerful Magikoopa and Kamek's occasional rival.`,
                currentState: `Kammy publicly supports Kamek's regency but privately questions his methods.`,
                classifiedInfo: `Kammy believes Kamek's loyalty purges are counterproductive. She may position herself as kingmaker.`,
                stats: { might: 'D', magic: 'A+', cunning: 'A', charisma: 'B', command: 'B+' },
                threatLevel: 'LOW'
            }
        ]
    },

    koopalings: [
        {
            id: 'ludwig',
            name: 'Ludwig von Koopa',
            title: 'Strategic Commander / Eldest',
            icon: '🎹',
            status: 'unknown',
            statusLabel: 'UNKNOWN - LEFT SKY LAND',
            location: 'Unknown',
            intelRequired: 25,
            secretIntelRequired: 55,
            threatLevel: 'HIGH',
            personality: 'Arrogant genius. Views warfare as art.',
            bio: `The eldest and most intelligent Koopaling. Ludwig is a tactical genius who composes symphonies in his spare time.`,
            currentState: `Ludwig has withdrawn forces from Sky Land without authorization. Has not responded to communications in 48 hours.`,
            classifiedInfo: `Ludwig believes HE should be heir, not Jr. He is preparing to make a move. Kamek has assassination protocols ready.`,
            stats: { combat: 'A', magic: 'A', command: 'A+', loyalty: 'C' },
            forces: 'Elite Doomship Squadron, Personal Guard, Sky Land Garrison'
        },
        {
            id: 'roy',
            name: 'Roy Koopa',
            title: 'Heavy Assault Commander',
            icon: '😎',
            status: 'deployed',
            statusLabel: 'DEPLOYED - BORDER GARRISON',
            location: 'Dark Lands Eastern Border',
            intelRequired: 25,
            secretIntelRequired: 50,
            threatLevel: 'MEDIUM',
            personality: 'Brutal pragmatist. Respects only strength.',
            bio: `The muscle of the Koopalings. Roy commands the heaviest armored divisions.`,
            currentState: `Roy holds the eastern border but demands "hazard pay." Relationship with Kamek has deteriorated.`,
            classifiedInfo: `Roy has been approached by Wario Inc. about "private security contracts." ~2,000 elite troops at risk.`,
            stats: { combat: 'S', magic: 'D', command: 'B', loyalty: 'D+' },
            forces: 'Heavy Armor Division, Chain Chomp Cavalry'
        },
        {
            id: 'wendy',
            name: 'Wendy O. Koopa',
            title: 'Naval Operations / Diplomatic Liaison',
            icon: '💋',
            status: 'active',
            statusLabel: 'ACTIVE - WATER LAND',
            location: 'Water Land Naval Command',
            intelRequired: 25,
            secretIntelRequired: 60,
            threatLevel: 'HIGH (COVERT)',
            personality: 'Manipulative socialite.',
            bio: `The only female Koopaling commands naval forces with surprising competence.`,
            currentState: `Wendy has been making diplomatic overtures to Sarasaland.`,
            classifiedInfo: `Wendy is establishing personal asylum negotiations with Princess Daisy. No loyalty to the Troop.`,
            stats: { combat: 'B', magic: 'B+', command: 'A-', loyalty: 'D' },
            forces: 'Naval Fleet, Diplomatic Corps'
        },
        {
            id: 'iggy',
            name: 'Iggy Koopa',
            title: 'R&D Division / Chief Artificer',
            icon: '🔬',
            status: 'unstable',
            statusLabel: 'UNSTABLE - ISOLATED',
            location: 'Dark Land Research Complex',
            intelRequired: 25,
            secretIntelRequired: 70,
            threatLevel: 'CRITICAL (UNINTENTIONAL)',
            personality: 'Manic genius. Genuinely unhinged.',
            bio: `The mad scientist of the family. Iggy's inventions range from brilliant to apocalyptic.`,
            currentState: `The loss of prototypes aboard the Vigilance has sent Iggy into a dangerous spiral.`,
            classifiedInfo: `CRITICAL THREAT: Iggy is attempting to recreate Dark Star energy synthesis. He is an EXISTENTIAL threat.`,
            stats: { combat: 'C', magic: 'C', command: 'D', loyalty: 'B', science: 'S+' },
            forces: 'Research Staff, Prototype Weapons Division'
        },
        {
            id: 'lemmy',
            name: 'Lemmy Koopa',
            title: 'Ice Land Governor / Entertainment',
            icon: '🎪',
            status: 'active',
            statusLabel: 'ACTIVE - ICE LAND',
            location: 'Ice Land - Crystal Palace',
            intelRequired: 20,
            secretIntelRequired: 40,
            threatLevel: 'LOW',
            personality: 'Childlike, genuinely kind.',
            bio: `The smallest Koopaling prefers circus performance to warfare.`,
            currentState: `Lemmy has declared Ice Land "neutral territory" during succession uncertainty.`,
            classifiedInfo: `Lemmy genuinely loves Bowser Jr. His "neutrality" is quiet resistance to Kamek's regency.`,
            stats: { combat: 'C+', magic: 'B', command: 'C', loyalty: 'A-' },
            forces: 'Ice Land Garrison, Circus Troupe'
        },
        {
            id: 'morton',
            name: 'Morton Koopa Jr.',
            title: 'Desert Operations / Ground Forces',
            icon: '🏜️',
            status: 'active',
            statusLabel: 'ACTIVE - DESERT LAND',
            location: 'Desert Land - Fort Sandstorm',
            intelRequired: 20,
            secretIntelRequired: 45,
            threatLevel: 'LOW',
            personality: 'Loud but surprisingly thoughtful.',
            bio: `The loudest Koopaling commands desert operations with an iron fist.`,
            currentState: `Morton remains publicly loyal. High morale in his sector.`,
            classifiedInfo: `Morton's loyalty is to the INSTITUTION. He feeds information to Kammy.`,
            stats: { combat: 'A', magic: 'C', command: 'B', loyalty: 'A' },
            forces: 'Desert Garrison, Ground Artillery Corps'
        },
        {
            id: 'larry',
            name: 'Larry Koopa',
            title: 'Frontline Commander / Youngest',
            icon: '⚡',
            status: 'deployed',
            statusLabel: 'DEPLOYED - GRASS LAND BORDER',
            location: 'Grass Land Border FOB',
            intelRequired: 20,
            secretIntelRequired: 35,
            threatLevel: 'LOW (EXPLOITABLE)',
            personality: 'Eager to prove himself.',
            bio: `The youngest Koopaling leads frontline operations with enthusiasm.`,
            currentState: `Larry holds the Grass Land border. Follows Kamek's orders without question.`,
            classifiedInfo: `Larry is in over his head. He's taken 30% casualties but falsifies reports. Ludwig knows.`,
            stats: { combat: 'B+', magic: 'C+', command: 'C+', loyalty: 'A' },
            forces: 'Frontline Infantry Division, Border Patrol'
        }
    ],

    military: {
        overview: {
            totalTroops: '50,000+',
            territories: 8,
            fortresses: 12,
            airships: 24
        },
        divisions: [
            {
                id: 'doomship_armada',
                name: 'The Doomship Armada',
                icon: '🚁',
                type: 'Aerial',
                commander: 'Admiral Lakithunder (Acting)',
                strength: 65,
                status: 'compromised',
                description: 'Once undisputed masters of the skies.',
                details: `The loss of the Vigilance has devastated fleet readiness. Most vessels grounded for security sweeps.`,
                classifiedDetails: `12 vessels remain grounded. Air superiority maintained but offensive ops suspended.`,
                assets: ['Doomship Omega (Drydock)', '8 Battle Cruisers', '18 Patrol Craft', 'Vigilance - CAPTURED']
            },
            {
                id: 'green_tide',
                name: 'The Green Tide',
                icon: '🐢',
                type: 'Ground',
                commander: 'General Shellshock',
                strength: 90,
                status: 'ready',
                description: 'The endless legions of Goombas, Koopa Troopas, and Hammer Bros.',
                details: `Ground forces at near-full strength. Morale high.`,
                classifiedDetails: `Recruitment continues. Main concern is officer loyalty across Koopaling allegiances.`,
                assets: ['15,000+ Goomba Infantry', '8,000 Koopa Troopas', '2,500 Hammer Bros', '5,000 Dry Bones']
            },
            {
                id: 'magikoopa_coven',
                name: 'The Geometry Coven',
                icon: '✨',
                type: 'Magic',
                commander: 'Kamek (Direct)',
                strength: 100,
                status: 'withdrawn',
                description: 'Elite spellcasters who bend reality through geometric formulae.',
                details: `Due to Iron Mandate, all Magikoopa units ordered to retreat to shielded territories.`,
                classifiedDetails: `Full strength but cannot operate freely. All resources directed toward Geometry Shield.`,
                assets: ['500 Battle Magikoopas', '50 Senior Practitioners', '12 Geometry Masters']
            },
            {
                id: 'phantom_ops',
                name: 'Phantom Operations',
                icon: '👻',
                type: 'Special',
                commander: 'King Boo (Allied)',
                strength: 100,
                status: 'active',
                description: 'Infiltration and psychological warfare provided through Boo Court alliance.',
                details: `Unaffected by Iron Mandate. King Boo has increased support.`,
                classifiedDetails: `Cooperation at all-time high. Reliable but comes with King Boo's agenda.`,
                assets: ['1,000+ Boo Agents', 'Portrait Ghost Specialists', 'Haunted Object Network']
            }
        ],
        notableAssets: [
            { name: 'Royal Clown Car', icon: '🚗', status: 'Operational', location: 'Valley of Bowser' },
            { name: 'Vigilance', icon: '💀', status: 'CAPTURED', location: 'Iron Legion Control' },
            { name: 'Doomship Omega', icon: '🔧', status: 'Drydock', location: 'Dark Land Shipyard' },
            { name: 'Dark Star Fragment', icon: '⚫', status: 'SECURED', location: 'Iggy\'s Lab' }
        ]
    },

    diplomacy: [
        {
            id: 'mushroom_regency',
            name: 'Mushroom Kingdom (Regency)',
            icon: '🍄',
            stance: 'war',
            stanceLabel: 'AT WAR',
            color: '#E53935',
            description: `The Eternal Enemy. With Princess Peach dead for 85 years, what was once kidnapping games is now simply war.`,
            assessment: `The Regency is weaker than projected. Mario Brothers remain critical threat.`,
            classifiedAssessment: `Let them exhaust themselves against Fawful. Strike when broken.`,
            strategicValue: 'Primary Conquest Target'
        },
        {
            id: 'iron_legion',
            name: 'The Iron Legion',
            icon: '⚔️',
            stance: 'hostile',
            stanceLabel: 'PRIMARY THREAT',
            color: '#757575',
            description: `They captured the Vigilance. They passed the Iron Mandate. They are the greatest threat.`,
            assessment: `Anti-magic technology is revolutionary. Industrial capacity rivals our own.`,
            classifiedAssessment: `Greater long-term threat than Mushroom Kingdom. Their ideology is incompatible with Koopa civilization.`,
            strategicValue: 'Existential Threat'
        },
        {
            id: 'king_boo',
            name: "King Boo's Court",
            icon: '👻',
            stance: 'allied',
            stanceLabel: 'STRONG ALLIANCE',
            color: '#4CAF50',
            description: `Reliable supernatural allies. King Boo hates the Mario Brothers personally.`,
            assessment: `Iron Mandate has strengthened alliance significantly.`,
            classifiedAssessment: `True ally - rare. Personal obsession with Luigi sometimes distorts priorities.`,
            strategicValue: 'Key Strategic Partner'
        },
        {
            id: 'wario_inc',
            name: 'Wario Incorporated',
            icon: '💰',
            stance: 'neutral',
            stanceLabel: 'TRANSACTIONAL',
            color: '#FFC107',
            description: `Wario sells to anyone with coin.`,
            assessment: `Making overtures to Roy about "private security contracts."`,
            classifiedAssessment: `Waluigi was instrumental in Bowser's rescue. Monitor Roy's contacts.`,
            strategicValue: 'Arms Supplier / Risk'
        }
    ],

    timeline: [
        { era: 'Ancient Era', events: [
            { date: '955-07-01', title: 'The Princess is Dead', description: 'Princess Peach is assassinated, plunging the Mushroom Kingdom into civil war.', category: 'Political', critical: true }
        ]},
        { era: 'Current Era: 1040', events: [
            { date: '1040-06-04', title: 'Airship Hijacked', description: 'X.O. betrays the party. Warlord Bowser is taken captive.', category: 'Recent', critical: true },
            { date: '1040-06-18', title: 'Kamek\'s Return', description: 'Kamek assumes emergency Regent powers.', category: 'Political', critical: true },
            { date: '1040-06-20', title: 'Iron Sky Breach', description: 'Iron Legion captures the Vigilance.', category: 'Military', critical: true },
            { date: '1040-06-21', title: 'Iron Mandate Enacted', description: 'Legion granted emergency powers to purge supernatural threats.', category: 'Political', critical: true }
        ]}
    ],

    intelFeed: [
        { id: 1, date: '1040-06-21', priority: 'critical', title: 'Iron Mandate Active', text: 'Witch-Finder units now have legal authority to detain magical threats.' },
        { id: 2, date: '1040-06-20', priority: 'critical', title: 'Vigilance Captured', text: 'Super-Dreadnought under Iron Legion control.' },
        { id: 3, date: '1040-06-18', priority: 'high', title: 'Kamek Assumes Regency', text: 'High Magus has assumed emergency powers.' },
        { id: 4, date: '1040-06-17', priority: 'high', title: 'Ludwig Withdraws', text: 'Forces withdrawn from Sky Land without authorization.' },
        { id: 5, date: '1040-06-17', priority: 'medium', title: 'Bramblehaven Falls', text: 'Peach Loyalists capture the town from Fawful.' }
    ],

    codex: [
        { id: 'might', title: 'Might Makes Right', text: 'If you can take it, it is yours.', status: 'active' },
        { id: 'king', title: 'The King is Ultimate', text: 'Bowser\'s word is law.', status: 'active', note: 'Complicated by regency.' },
        { id: 'persistence', title: 'Never Give Up', text: 'True Koopas get back up.', status: 'active' },
        { id: 'style', title: 'Villainy Requires Style', text: 'Every castle needs chandeliers.', status: 'active' },
        { id: 'princess', title: 'The Princess Clause', text: 'Traditional kidnapping protocols.', status: 'suspended', note: 'SUSPENDED following Peach\'s death.' },
        { id: 'loyalty', title: 'Loyalty is Rewarded', text: 'Those who serve faithfully rise.', status: 'active' }
    ]
};

// ============================================
// INTEL SYSTEM
// ============================================

class KoopaIntelSystem {
    constructor() {
        this.factionKey = 'koopa_troop';
        this.cache = null;
        this.cacheTime = 0;
    }

    getBreakdown() {
        const now = Date.now();
        if (this.cache && (now - this.cacheTime) < 5000) return this.cache;

        let breakdown = null;
        if (typeof getIntelBreakdown === 'function') {
            breakdown = getIntelBreakdown(this.factionKey);
        }

        if (!breakdown || breakdown.total === 0) {
            breakdown = this.fallbackIntel();
        }

        this.cache = breakdown;
        this.cacheTime = now;
        return breakdown;
    }

    fallbackIntel() {
        if (state?.debugMode) return { base: 100, history: 0, active: 0, total: 100 };
        const base = state?.intelLevels?.[state?.loggedInUser || 'generic']?.koopa_troop ?? 15;
        return { base, history: 0, active: 0, total: Math.min(100, base) };
    }

    getLevel() { return this.getBreakdown().total; }
    
    canView(required = 0) {
        return state?.debugMode || this.getLevel() >= required;
    }

    getTier() {
        const level = this.getLevel();
        if (level >= 90) return { name: 'REGENT ACCESS', class: 'tier-regent' };
        if (level >= 75) return { name: 'HIGH COMMAND', class: 'tier-high' };
        if (level >= 50) return { name: 'OFFICER', class: 'tier-officer' };
        if (level >= 30) return { name: 'TROOPER', class: 'tier-trooper' };
        if (level >= 15) return { name: 'LIMITED', class: 'tier-limited' };
        return { name: 'OUTSIDER', class: 'tier-outsider' };
    }

    clearCache() { this.cache = null; }
}

// ============================================
// TERRITORY SYSTEM
// ============================================

class KoopaTerritorySystem {
    constructor() {
        this.pois = [];
        this.territories = [];
        this.stats = { controlled: 0, contested: 0, presence: 0, totalPOIs: 0, military: 0, economic: 0 };
    }

    init() {
        if (!MAP_DATA) return this;

        const factionKeys = ['koopa_troop', 'koopa', 'bowser'];

        Object.entries(MAP_DATA).forEach(([regionId, regionData]) => {
            if (!regionId.endsWith('_full')) return;

            const pois = regionData.pointsOfInterest || [];
            const factionPOIs = pois.filter(poi => {
                const faction = (poi.factionId || poi.faction || '').toLowerCase();
                return factionKeys.some(k => faction.includes(k));
            });

            if (factionPOIs.length === 0) return;

            const cleanName = (regionData.name || regionId).replace(' (Full)', '');
            const ratio = factionPOIs.length / pois.length;
            const status = ratio >= 0.5 ? 'controlled' : ratio > 0 ? 'contested' : 'presence';

            factionPOIs.forEach(poi => {
                this.pois.push({ ...poi, regionId, regionName: cleanName });
                this.stats.military += poi.military_strength || 0;
                this.stats.economic += poi.economic_value || 0;
            });

            this.territories.push({
                id: regionId,
                name: cleanName,
                status,
                controlPercent: Math.round(ratio * 100),
                poiCount: factionPOIs.length,
                totalPOIs: pois.length
            });

            this.stats[status]++;
            this.stats.totalPOIs += factionPOIs.length;
        });

        return this;
    }
}

// ============================================
// WAR ROOM UI - FIXED VERSION WITH TABS
// ============================================

class KoopaWarRoom {
    constructor(intel, territory) {
        this.intel = intel;
        this.territory = territory;
        this.data = KOOPA_DATA;
        this.container = null;
        this.currentSection = 'overview';
        this.expandedCards = new Set();
    }

    init() {
        this.container = document.getElementById('main-content') || document.querySelector('.faction-page');
        if (!this.container) return;

        this.render();
        this.attachEvents();
    }

    render() {
        this.container.innerHTML = `
            <div class="war-room-container">
                ${this.renderHeader()}
                ${this.renderCrisisBar()}
                ${this.renderNavTabs()}
                
                <div class="war-room-content">
                    <div class="content-main">
                        ${this.renderSection('overview', this.renderOverview())}
                        ${this.renderSection('priorities', this.renderPriorities())}
                        ${this.renderSection('leadership', this.renderLeadership())}
                        ${this.renderSection('koopalings', this.renderKoopalings())}
                        ${this.renderSection('military', this.renderMilitary())}
                        ${this.renderSection('diplomacy', this.renderDiplomacy())}
                        ${this.renderSection('timeline', this.renderTimeline())}
                        ${this.renderSection('codex', this.renderCodex())}
                    </div>
                    
                    <aside class="content-sidebar">
                        ${this.renderIntelPanel()}
                        ${this.renderIntelFeed()}
                    </aside>
                </div>
            </div>
        `;
    }

    renderSection(id, content) {
        const isActive = this.currentSection === id;
        return `<section id="section-${id}" class="war-section ${isActive ? 'active' : ''}">${content}</section>`;
    }

    // ============================================
    // HEADER
    // ============================================
    renderHeader() {
        const { identity, crisis } = this.data;
        
        return `
            <header class="war-header">
                <div class="header-emblem">
                    <span class="emblem-icon">${identity.icon}</span>
                    <span class="emblem-crown">${identity.crown}</span>
                </div>
                
                <div class="header-title">
                    <span class="header-category">DARK LANDS MILITARY COMMAND</span>
                    <h1 class="header-name">${identity.name}</h1>
                    <p class="header-motto">"${identity.motto}" • "${identity.altMotto}"</p>
                </div>
                
                <div class="header-status">
                    <div class="status-block threat">
                        <span class="status-label">Threat Level</span>
                        <span class="status-value">${crisis.level}</span>
                    </div>
                    <div class="status-block stability">
                        <span class="status-label">Stability</span>
                        <span class="status-value">${crisis.stability}</span>
                    </div>
                    <div class="status-block alert">
                        <span class="status-label">Alert</span>
                        <span class="status-value">${crisis.alertCode}</span>
                    </div>
                </div>
            </header>
        `;
    }

    // ============================================
    // CRISIS BAR
    // ============================================
    renderCrisisBar() {
        const { crisis } = this.data;
        
        return `
            <div class="crisis-bar">
                <span class="crisis-icon">🚨</span>
                <span class="crisis-text">${crisis.headline}</span>
                <span class="crisis-date">Updated: ${crisis.lastUpdate}</span>
            </div>
        `;
    }

    // ============================================
    // NAVIGATION TABS
    // ============================================
    renderNavTabs() {
        const tabs = [
            { id: 'overview', icon: '📋', label: 'Overview' },
            { id: 'priorities', icon: '🎯', label: 'War Room' },
            { id: 'leadership', icon: '👑', label: 'Command' },
            { id: 'koopalings', icon: '🎹', label: 'Koopalings' },
            { id: 'military', icon: '⚔️', label: 'Forces' },
            { id: 'diplomacy', icon: '🤝', label: 'Diplomacy' },
            { id: 'timeline', icon: '📜', label: 'Timeline' },
            { id: 'codex', icon: '📖', label: 'Codex' }
        ];

        return `
            <nav class="war-nav">
                ${tabs.map(tab => `
                    <button class="nav-tab ${this.currentSection === tab.id ? 'active' : ''}" data-section="${tab.id}">
                        <span class="tab-icon">${tab.icon}</span>
                        <span class="tab-label">${tab.label}</span>
                    </button>
                `).join('')}
            </nav>
        `;
    }

    // ============================================
    // INTEL SIDEBAR
    // ============================================
    renderIntelPanel() {
        const breakdown = this.intel.getBreakdown();
        const tier = this.intel.getTier();

        return `
            <div class="intel-panel">
                <h3 class="panel-title">🔐 Intel Clearance</h3>
                
                <div class="intel-gauge">
                    <div class="gauge-track">
                        <div class="gauge-fill" style="width: ${breakdown.total}%"></div>
                    </div>
                    <span class="gauge-value">${breakdown.total}%</span>
                </div>
                
                <div class="intel-tier ${tier.class}">${tier.name}</div>
                
                <div class="intel-breakdown">
                    <div class="breakdown-item">
                        <span>Base Intel</span>
                        <span>${breakdown.base}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>History Bonus</span>
                        <span>+${breakdown.history}</span>
                    </div>
                    <div class="breakdown-item">
                        <span>Active Ops</span>
                        <span>+${breakdown.active}</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderIntelFeed() {
        const feed = this.data.intelFeed;

        return `
            <div class="intel-feed-panel">
                <h3 class="panel-title">📡 Intel Feed</h3>
                
                <div class="feed-list">
                    ${feed.map(item => `
                        <div class="feed-item ${item.priority}">
                            <div class="feed-header">
                                <span class="feed-date">${item.date}</span>
                                <span class="feed-priority">${item.priority.toUpperCase()}</span>
                            </div>
                            <div class="feed-title">${item.title}</div>
                            <div class="feed-text">${item.text}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // ============================================
    // OVERVIEW SECTION
    // ============================================
    renderOverview() {
        const { identity, crisis } = this.data;

        return `
            <div class="section-header">
                <h2>🏰 Empire Overview</h2>
                <span class="section-classification">OPERATIONAL SUMMARY</span>
            </div>
            
            <div class="overview-grid">
                <div class="overview-card crisis-summary">
                    <h3>⚠️ Current Crisis</h3>
                    <p>${crisis.summary}</p>
                    
                    <div class="metrics-grid">
                        ${crisis.keyMetrics.map(m => `
                            <div class="metric ${m.status}">
                                <span class="metric-label">${m.label}</span>
                                <span class="metric-value">${m.value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="overview-card">
                    <h3>📊 Quick Stats</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-value">${this.data.military.overview.totalTroops}</span>
                            <span class="stat-label">Total Troops</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${this.data.military.overview.territories}</span>
                            <span class="stat-label">Territories</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${this.data.military.overview.fortresses}</span>
                            <span class="stat-label">Fortresses</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-value">${this.data.military.overview.airships}</span>
                            <span class="stat-label">Airships</span>
                        </div>
                    </div>
                </div>
                
                <div class="overview-card full-width">
                    <h3>🏛️ Background</h3>
                    <p>The Koopa Troop stands as the dominant military force in the Darklands and surrounding territories. For generations, the Kingdom has been ruled by the Koopa dynasty, with King Bowser being the current—and most aggressive—ruler in recorded history.</p>
                    <p>What began as a territorial dispute with the Mushroom Kingdom has evolved into a multi-generational conflict. With Princess Peach's assassination 85 years ago, the conflict has transformed from theatrical kidnappings into total war.</p>
                </div>
            </div>
        `;
    }

    // ============================================
    // PRIORITIES (WAR ROOM)
    // ============================================
    renderPriorities() {
        const { priorities } = this.data;

        return `
            <div class="section-header">
                <h2>🎯 Strategic Priorities</h2>
                <span class="section-classification critical">CLASSIFIED</span>
            </div>
            
            <div class="priorities-grid">
                ${priorities.map(p => this.renderPriorityCard(p)).join('')}
            </div>
        `;
    }

    renderPriorityCard(priority) {
        const canView = this.intel.canView(priority.intelRequired);
        const canViewSecret = this.intel.canView(priority.secretIntelRequired);
        const isExpanded = this.expandedCards.has(priority.id);
        const completedCount = priority.objectives.filter(o => o.complete).length;
        const progress = Math.round((completedCount / priority.objectives.length) * 100);

        if (!canView) {
            return `
                <div class="priority-card locked">
                    <div class="locked-content">
                        <span class="lock-icon">🔒</span>
                        <span class="lock-text">CLASSIFIED</span>
                        <span class="lock-req">Intel Level ${priority.intelRequired}+ Required</span>
                    </div>
                </div>
            `;
        }

        return `
            <div class="priority-card ${priority.status} ${isExpanded ? 'expanded' : ''}" data-id="${priority.id}">
                <div class="priority-header">
                    <span class="priority-badge ${priority.priority}">${priority.priority.toUpperCase()}</span>
                    <h4 class="priority-title">${priority.title}</h4>
                    <span class="priority-status">${priority.status.toUpperCase()}</span>
                </div>
                
                <div class="priority-body">
                    <p class="priority-summary">${priority.summary}</p>
                    
                    <div class="priority-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <span class="progress-text">${completedCount}/${priority.objectives.length} Complete</span>
                    </div>
                </div>
                
                <div class="priority-details">
                    <div class="details-section">
                        <h5>Situation Brief</h5>
                        <p>${priority.briefing}</p>
                    </div>
                    
                    ${canViewSecret ? `
                        <div class="details-section classified">
                            <h5>🔒 Classified Assessment</h5>
                            <p>${priority.classifiedBriefing}</p>
                        </div>
                    ` : `
                        <div class="details-locked">
                            🔒 Additional intel requires Level ${priority.secretIntelRequired}+
                        </div>
                    `}
                    
                    <div class="details-section">
                        <h5>Objectives</h5>
                        <ul class="objectives-list">
                            ${priority.objectives.map(obj => `
                                <li class="${obj.complete ? 'complete' : ''}">
                                    <span class="obj-check">${obj.complete ? '✓' : '○'}</span>
                                    <span class="obj-text">${obj.text}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                
                <button class="priority-expand-btn" data-target="${priority.id}">
                    ${isExpanded ? '▲ Hide Details' : '▼ View Full Brief'}
                </button>
            </div>
        `;
    }

    // ============================================
    // LEADERSHIP
    // ============================================
    renderLeadership() {
        const { leadership } = this.data;

        return `
            <div class="section-header">
                <h2>👑 Chain of Command</h2>
            </div>
            
            <div class="leadership-grid">
                ${leadership.supreme.map(l => this.renderLeaderCard(l)).join('')}
                ${this.renderLeaderCard(leadership.heir)}
                ${leadership.advisors.map(a => this.renderLeaderCard(a)).join('')}
            </div>
        `;
    }

    renderLeaderCard(person) {
        const canView = this.intel.canView(person.intelRequired);
        const canViewSecret = this.intel.canView(person.secretIntelRequired);
        const isExpanded = this.expandedCards.has(person.id);
        
        const statusClass = {
            'field_ops': 'danger',
            'active': 'active',
            'restricted': 'warning',
            'unknown': 'warning',
            'unstable': 'danger'
        }[person.status] || 'active';

        return `
            <div class="leader-card ${isExpanded ? 'expanded' : ''}" data-id="${person.id}">
                <div class="leader-header">
                    <div class="leader-portrait ${statusClass}">
                        ${person.icon}
                        <span class="status-dot ${statusClass}"></span>
                    </div>
                    <div class="leader-info">
                        <h4 class="leader-name">${person.name}</h4>
                        <span class="leader-title">${person.title}</span>
                        <span class="leader-status">${person.statusLabel}</span>
                    </div>
                    ${person.threatLevel ? `<span class="threat-badge ${person.threatLevel.toLowerCase()}">${person.threatLevel}</span>` : ''}
                </div>
                
                ${canView ? `
                    <div class="leader-body">
                        <p class="leader-bio">${person.bio}</p>
                        <div class="leader-location">📍 ${person.publicLocation || person.location}</div>
                        
                        <div class="leader-stats">
                            ${Object.entries(person.stats).map(([k, v]) => `
                                <span class="stat-chip">${k.toUpperCase()}: ${v}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="leader-details">
                        <div class="detail-block">
                            <h5>Current Status</h5>
                            <p>${person.currentState}</p>
                        </div>
                        
                        ${canViewSecret && person.classifiedInfo ? `
                            <div class="detail-block classified">
                                <h5>🔒 Classified</h5>
                                <p>${person.classifiedInfo}</p>
                            </div>
                        ` : ''}
                    </div>
                ` : `
                    <div class="leader-locked">
                        <span class="lock-icon">🔒</span>
                        <p>Intel Level ${person.intelRequired}+ Required</p>
                    </div>
                `}
            </div>
        `;
    }

    // ============================================
    // KOOPALINGS
    // ============================================
    renderKoopalings() {
        const { koopalings } = this.data;

        return `
            <div class="section-header">
                <h2>🎹 The Koopalings</h2>
            </div>
            
            <div class="koopaling-intro">
                <p>Seven elite commanders, each leading divisions of the Koopa Troop. With King Bowser in the field, their loyalties have become critical factors in the succession crisis.</p>
            </div>
            
            <div class="koopalings-grid">
                ${koopalings.map(k => this.renderKoopalingCard(k)).join('')}
            </div>
        `;
    }

    renderKoopalingCard(koopaling) {
        const canView = this.intel.canView(koopaling.intelRequired);
        const canViewSecret = this.intel.canView(koopaling.secretIntelRequired);
        const isExpanded = this.expandedCards.has(koopaling.id);
        const threatClass = koopaling.threatLevel.toLowerCase().split(' ')[0];

        const statusClass = {
            'active': 'active',
            'deployed': 'active',
            'unknown': 'warning',
            'unstable': 'danger'
        }[koopaling.status] || 'active';

        return `
            <div class="koopaling-card ${isExpanded ? 'expanded' : ''}" data-id="${koopaling.id}">
                <div class="koopaling-header">
                    <div class="koopaling-portrait ${statusClass}">
                        ${koopaling.icon}
                        <span class="status-dot ${statusClass}"></span>
                    </div>
                    <div class="koopaling-info">
                        <h4>${koopaling.name}</h4>
                        <span class="koopaling-title">${koopaling.title}</span>
                    </div>
                    <span class="threat-badge ${threatClass}">${koopaling.threatLevel}</span>
                </div>
                
                ${canView ? `
                    <div class="koopaling-body">
                        <div class="personality">"${koopaling.personality}"</div>
                        <p>${koopaling.bio}</p>
                        <div class="koopaling-location">📍 ${koopaling.location}</div>
                        
                        <div class="koopaling-stats">
                            ${Object.entries(koopaling.stats).map(([k, v]) => `
                                <span class="stat-chip">${k}: ${v}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="koopaling-details">
                        <div class="detail-block">
                            <h5>Current Activity</h5>
                            <p>${koopaling.currentState}</p>
                        </div>
                        
                        ${canViewSecret ? `
                            <div class="detail-block classified">
                                <h5>🔒 Classified</h5>
                                <p>${koopaling.classifiedInfo}</p>
                            </div>
                        ` : ''}
                        
                        <div class="detail-block">
                            <h5>Forces</h5>
                            <p>${koopaling.forces}</p>
                        </div>
                    </div>
                ` : `
                    <div class="koopaling-locked">
                        <span class="lock-icon">🔒</span>
                        <p>Intel Level ${koopaling.intelRequired}+ Required</p>
                    </div>
                `}
            </div>
        `;
    }

    // ============================================
    // MILITARY
    // ============================================
    renderMilitary() {
        const { military } = this.data;

        return `
            <div class="section-header">
                <h2>⚔️ Military Forces</h2>
            </div>
            
            <div class="military-stats">
                <div class="mil-stat">
                    <span class="mil-stat-icon">🐢</span>
                    <span class="mil-stat-value">${military.overview.totalTroops}</span>
                    <span class="mil-stat-label">Troops</span>
                </div>
                <div class="mil-stat">
                    <span class="mil-stat-icon">🏰</span>
                    <span class="mil-stat-value">${military.overview.fortresses}</span>
                    <span class="mil-stat-label">Fortresses</span>
                </div>
                <div class="mil-stat">
                    <span class="mil-stat-icon">🚁</span>
                    <span class="mil-stat-value">${military.overview.airships}</span>
                    <span class="mil-stat-label">Airships</span>
                </div>
            </div>
            
            <h3 class="subsection-title">Combat Divisions</h3>
            <div class="divisions-grid">
                ${military.divisions.map(div => this.renderDivisionCard(div)).join('')}
            </div>
            
            <h3 class="subsection-title">Notable Assets</h3>
            <div class="assets-grid">
                ${military.notableAssets.map(asset => `
                    <div class="asset-card ${asset.status.includes('CAPTURED') ? 'lost' : ''}">
                        <span class="asset-icon">${asset.icon}</span>
                        <div class="asset-info">
                            <span class="asset-name">${asset.name}</span>
                            <span class="asset-location">${asset.location}</span>
                        </div>
                        <span class="asset-status">${asset.status}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderDivisionCard(division) {
        const strengthClass = division.strength >= 80 ? 'high' : division.strength >= 50 ? 'medium' : 'low';
        const isExpanded = this.expandedCards.has(division.id);

        return `
            <div class="division-card ${isExpanded ? 'expanded' : ''}" data-id="${division.id}">
                <div class="division-header">
                    <span class="division-icon">${division.icon}</span>
                    <div class="division-info">
                        <h4>${division.name}</h4>
                        <span class="division-type">${division.type} • ${division.commander}</span>
                    </div>
                    <div class="division-strength ${strengthClass}">
                        <span class="strength-value">${division.strength}%</span>
                        <span class="strength-label">Ready</span>
                    </div>
                </div>
                
                <div class="strength-bar">
                    <div class="strength-fill ${strengthClass}" style="width: ${division.strength}%"></div>
                </div>
                
                <div class="division-body">
                    <p>${division.description}</p>
                    <p class="division-details">${division.details}</p>
                    
                    ${this.intel.canView(30) && division.classifiedDetails ? `
                        <div class="classified-block">
                            <h5>🔒 Intel Assessment</h5>
                            <p>${division.classifiedDetails}</p>
                        </div>
                    ` : ''}
                    
                    <div class="division-assets">
                        <h5>Assets</h5>
                        <div class="asset-tags">
                            ${division.assets.map(a => `<span class="asset-tag">${a}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // ============================================
    // DIPLOMACY
    // ============================================
    renderDiplomacy() {
        const { diplomacy } = this.data;

        return `
            <div class="section-header">
                <h2>🤝 Foreign Relations</h2>
            </div>
            
            <div class="diplomacy-grid">
                ${diplomacy.map(rel => `
                    <div class="diplomacy-card ${rel.stance}">
                        <div class="diplomacy-header" style="border-color: ${rel.color}">
                            <span class="diplomacy-icon">${rel.icon}</span>
                            <div class="diplomacy-info">
                                <h4>${rel.name}</h4>
                                <span class="diplomacy-stance" style="background: ${rel.color}">${rel.stanceLabel}</span>
                            </div>
                        </div>
                        
                        <div class="diplomacy-body">
                            <p>${rel.description}</p>
                            
                            ${this.intel.canView(25) ? `
                                <div class="diplomacy-assessment">
                                    <h5>Assessment</h5>
                                    <p>${rel.assessment}</p>
                                    
                                    ${this.intel.canView(50) && rel.classifiedAssessment ? `
                                        <div class="classified-note">
                                            <span>👁️</span> ${rel.classifiedAssessment}
                                        </div>
                                    ` : ''}
                                </div>
                                
                                <div class="diplomacy-value">
                                    <strong>Strategic Value:</strong> ${rel.strategicValue}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // ============================================
    // TIMELINE
    // ============================================
    renderTimeline() {
        const { timeline } = this.data;

        return `
            <div class="section-header">
                <h2>📜 Historical Timeline</h2>
            </div>
            
            <div class="timeline-container">
                ${timeline.map(era => `
                    <div class="timeline-era">
                        <div class="era-header">
                            <span class="era-marker"></span>
                            <h3>${era.era}</h3>
                        </div>
                        
                        <div class="era-events">
                            ${era.events.map(event => `
                                <div class="timeline-event ${event.critical ? 'critical' : ''}">
                                    <span class="event-date">${event.date}</span>
                                    <div class="event-content">
                                        <h4>${event.title}</h4>
                                        <p>${event.description}</p>
                                        <span class="event-category">${event.category}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // ============================================
    // CODEX
    // ============================================
    renderCodex() {
        const { codex } = this.data;

        return `
            <div class="section-header">
                <h2>📖 The Koopa Codex</h2>
            </div>
            
            <div class="codex-intro">
                <p>The sacred tenets that guide all true servants of the Koopa crown.</p>
            </div>
            
            <div class="codex-grid">
                ${codex.map((tenet, i) => `
                    <div class="codex-card ${tenet.status === 'suspended' ? 'suspended' : ''}">
                        <span class="codex-number">${i + 1}</span>
                        <h4 class="codex-title">${tenet.title}</h4>
                        <p class="codex-text">${tenet.text}</p>
                        ${tenet.note ? `<p class="codex-note">${tenet.note}</p>` : ''}
                        ${tenet.status === 'suspended' ? `<span class="suspended-stamp">SUSPENDED</span>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    // ============================================
    // EVENT HANDLERS
    // ============================================
    attachEvents() {
        const container = this.container;
        if (!container) return;

        // Tab navigation
        container.addEventListener('click', (e) => {
            const tab = e.target.closest('.nav-tab');
            if (tab) {
                const section = tab.dataset.section;
                this.switchSection(section);
                return;
            }

            // Expand buttons
            const expandBtn = e.target.closest('.priority-expand-btn');
            if (expandBtn) {
                const targetId = expandBtn.dataset.target;
                this.toggleExpand(targetId);
                return;
            }

            // Clickable cards
            const card = e.target.closest('.leader-card, .koopaling-card, .division-card');
            if (card && !e.target.closest('button')) {
                const id = card.dataset.id;
                if (id) this.toggleExpand(id);
            }
        });
    }

    switchSection(sectionId) {
        this.currentSection = sectionId;
        
        // Update tabs
        this.container.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.section === sectionId);
        });
        
        // Update sections
        this.container.querySelectorAll('.war-section').forEach(section => {
            section.classList.toggle('active', section.id === `section-${sectionId}`);
        });
    }

    toggleExpand(id) {
        if (this.expandedCards.has(id)) {
            this.expandedCards.delete(id);
        } else {
            this.expandedCards.add(id);
        }
        this.render();
        this.attachEvents();
        this.switchSection(this.currentSection);
    }
}

// ============================================
// INITIALIZATION
// ============================================

let warRoomInstance = null;

function initKoopaWarRoom() {
    if (typeof loadState === 'function') {
        try { loadState(); } catch (e) { console.warn('[KoopaWarRoom] Could not load state'); }
    }

    const intelSystem = new KoopaIntelSystem();
    const territorySystem = new KoopaTerritorySystem();
    
    try { territorySystem.init(); } catch (e) { console.warn('[KoopaWarRoom] Territory init failed'); }

    const warRoom = new KoopaWarRoom(intelSystem, territorySystem);
    warRoom.init();

    warRoomInstance = warRoom;
    window.koopaWarRoom = {
        instance: warRoom,
        intel: intelSystem,
        territory: territorySystem,
        data: KOOPA_DATA,
        toggleDebug: () => {
            if (state) {
                state.debugMode = !state.debugMode;
                intelSystem.clearCache();
                warRoom.render();
                warRoom.attachEvents();
            }
        }
    };

    console.log('[KoopaWarRoom] Initialized. Intel:', intelSystem.getLevel());
    return warRoom;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKoopaWarRoom);
} else {
    initKoopaWarRoom();
}

export { KoopaIntelSystem, KoopaTerritorySystem, KoopaWarRoom, KOOPA_DATA, initKoopaWarRoom };