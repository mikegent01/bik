// =============================================
// MUSHROOM KINGDOM CIVIL WAR - STRATEGIC COMMAND
// War Room Interface with Dynamic Data Integration
// =============================================

import { state, loadState } from './state.js';
import { getIntelBreakdown } from './systems/common.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from './calendar-data.js';
import { MAP_DATA } from './map-data.js';
import { getAllFactions, getFaction, getFactionStats } from './systems/faction-registry.js';
import { getRealTimeMapStats, getDetailedFactionStats } from '../global-map-analysis.js';

// =============================================
// DYNAMIC DATA AGGREGATION
// =============================================

class WarDataAggregator {
    constructor() {
        this.cachedStats = null;
        this.cacheTime = 0;
        this.cacheDuration = 10000; // 10 seconds
    }

    getMapStats() {
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
            console.warn('[WarRoom] Could not get real-time stats:', e);
        }

        return this.buildFallbackStats();
    }

    buildFallbackStats() {
        const stats = { global: {}, regions: [] };
        
        if (!MAP_DATA) return stats;

        Object.entries(MAP_DATA).forEach(([regionId, regionData]) => {
            if (!regionId.endsWith('_full')) return;
            
            const pois = regionData.pointsOfInterest || [];
            pois.forEach(poi => {
                const factionId = (poi.factionId || poi.faction || 'unaligned').toLowerCase();
                if (!stats.global[factionId]) {
                    stats.global[factionId] = {
                        military: 0,
                        economic: 0,
                        political: 0,
                        population: 0,
                        poiCount: 0,
                        activeRegions: new Set()
                    };
                }
                
                stats.global[factionId].military += poi.military_strength || 0;
                stats.global[factionId].economic += poi.economic_value || 0;
                stats.global[factionId].political += poi.political_influence || 0;
                stats.global[factionId].population += poi.population || 0;
                stats.global[factionId].poiCount++;
                stats.global[factionId].activeRegions.add(regionId);
            });
        });

        // Convert Sets to counts
        Object.values(stats.global).forEach(faction => {
            faction.activeRegions = faction.activeRegions.size;
        });

        return stats;
    }

    getFactionPower(factionId) {
        const stats = this.getMapStats();
        const factionStats = stats.global[factionId] || {};
        
        return {
            military: factionStats.military || 0,
            economic: factionStats.economic || 0,
            political: factionStats.political || 0,
            population: factionStats.population || 0,
            poiCount: factionStats.poiCount || 0,
            activeRegions: factionStats.activeRegions || 0,
            totalPower: (factionStats.military || 0) + (factionStats.economic || 0) + (factionStats.political || 0)
        };
    }

    getTerritoryControl() {
        const stats = this.getMapStats();
        const territories = [];
        
        if (!MAP_DATA) return territories;

        Object.entries(MAP_DATA).forEach(([regionId, regionData]) => {
            if (!regionId.endsWith('_full')) return;
            
            const pois = regionData.pointsOfInterest || [];
            const factionCounts = {};
            
            pois.forEach(poi => {
                const fid = (poi.factionId || poi.faction || 'unaligned').toLowerCase();
                factionCounts[fid] = (factionCounts[fid] || 0) + 1;
            });

            const sorted = Object.entries(factionCounts).sort((a, b) => b[1] - a[1]);
            const controller = sorted[0]?.[0] || 'unaligned';
            const isContested = sorted.length > 1 && sorted[0][1] - sorted[1][1] < 3;

            territories.push({
                id: regionId,
                name: (regionData.name || regionId).replace(' (Full)', ''),
                controller,
                isContested,
                poiCount: pois.length,
                factionPresence: factionCounts
            });
        });

        return territories;
    }
}

const dataAggregator = new WarDataAggregator();

// =============================================
// EXPANDED CIVIL WAR LORE DATABASE
// =============================================

const WAR_DATA = {
    meta: {
        codename: 'OPERATION: CROWN FRACTURE',
        classification: 'EYES ONLY - MULTI-FACTION INTELLIGENCE',
        lastUpdate: CURRENT_GAME_DATE,
        analyst: 'JOINT STRATEGIC COMMAND',
        warDuration: 85,
        status: 'ACTIVE MULTI-FRONT CONFLICT',
        primaryTheaters: ['Mushroom Heartlands', 'Dark Land Border', 'Sky Territories', 'Underground Networks']
    },

    // =========================================
    // THE VICTIM - PRINCESS PEACH
    // =========================================
    victim: {
        name: 'Princess Peach Toadstool',
        title: 'Crown Princess of the Mushroom Kingdom',
        fullTitle: 'Her Royal Highness Princess Peach Toadstool, Heir to the Mushroom Throne, Keeper of the Star Covenant',
        born: 915,
        died: 955,
        age: 40,
        icon: '👸',
        status: 'ASSASSINATED',
        lastKnownLocation: 'Royal Chambers, Peach\'s Castle',
        causeOfDeath: 'CLASSIFIED - UNDER ACTIVE INVESTIGATION',
        bloodType: 'Royal Toadstool (Pure)',
        
        profile: `The last direct heir of House Toadstool. A beloved figure whose rule was perpetually delayed by crisis—first her father's declining health, then Bowser's endless campaigns, then political maneuvering by the Regency Council. She was assassinated in her private chambers before her formal coronation, an event that shattered the kingdom and ignited an 85-year civil war.
        
Those who knew her described a woman of surprising steel beneath the gentle exterior. She personally negotiated three ceasefires with the Koopa Troop, established the Underground Railroad for escaped prisoners, and secretly funded resistance movements in occupied territories.`,
        
        personalityProfile: {
            intel: 35,
            content: `PSYCHOLOGICAL ASSESSMENT (Reconstructed from journals and witness accounts):
            
Subject displayed remarkable diplomatic acumen combined with genuine compassion. Unlike her father, she showed willingness to negotiate with traditional enemies. Her journal entries reveal frustration with the Regency Council's "endless delays" and suspicion that "powerful forces benefit from my remaining uncrowned."

Notable quote from recovered correspondence: "They think me naive because I speak of peace. They do not understand that I have simply calculated the cost of eternal war, and found it too high to pay."`
        },

        // Tiered secrets - more intel = more revelation
        secrets: [
            { 
                intel: 25, 
                title: 'The Delayed Coronation',
                text: 'Her coronation was postponed 7 times over 15 years. Official reasons varied, but pattern analysis suggests deliberate obstruction.',
                source: 'Loyalist Archives'
            },
            { 
                intel: 40, 
                title: 'The Reform Agenda',
                text: 'Recovered documents show she planned sweeping reforms: dismantling the Regency Council, establishing a constitutional monarchy, and opening formal peace negotiations with the Dark Lands.',
                source: 'Hidden Royal Archives'
            },
            { 
                intel: 50, 
                title: 'The Secret Hatch',
                text: 'A hidden passage exists behind the royal portrait in her chambers. Chief Thornpaw revealed she showed it to him personally as her "escape route if the worst ever happened." The assassin likely used this entrance.',
                source: 'Chief Thornpaw (Fawful Gala, 1040-06-10)'
            },
            { 
                intel: 65, 
                title: 'The Thornpaw Connection',
                text: 'Princess Peach maintained a secret romantic relationship with Chief Thornpaw of the Rakasha Clans for approximately 5 years before her death. They met during diplomatic negotiations and corresponded through encrypted spirit-messages.',
                source: 'Rakasha Tribal Records'
            },
            { 
                intel: 75, 
                title: 'The Beanbean Contract',
                text: 'Fragments of a marriage contract dated 953 suggest a secret betrothal to Prince Peasley of the Beanbean Kingdom. If authentic, this was a political alliance to counter Regency power. Prince Peasley has refused to confirm or deny.',
                source: 'Loyalist Intelligence (Recovered Document)'
            },
            { 
                intel: 85, 
                title: 'The Missing Months',
                text: 'Royal physician records show Princess Peach was "indisposed" for 8 months in 952-953, officially due to "diplomatic travel." No diplomatic records exist for this period. Lady Bloomia, her handmaiden, accompanied her and has never been found.',
                source: 'Royal Medical Archives (Sealed)'
            },
            { 
                intel: 95, 
                title: 'The Thornpaw Heir Theory',
                text: 'Combined analysis of the missing months, Thornpaw relationship, and Lady Bloomia\'s disappearance suggests a possible pregnancy. If a child exists, they would be approximately 87 years old—and the legitimate heir to the Mushroom Throne. The Rakasha are known for their longevity and discretion.',
                source: 'Multi-Source Intelligence Synthesis'
            },
            {
                intel: 100,
                title: 'OMEGA CLEARANCE: The Spirit-Walker Vision',
                text: 'During the 1040 Xeos Ritual, Rakasha Spirit-Walker Elder Moon-Eye reported witnessing fragmentary visions of the assassination night. Her account: "Three shadows, not one. The blade came from behind. She knew the face. She spoke a name before dying, but the spirits will not let me hear it." Moon-Eye has refused further questioning, stating "the dead princess guards her own secrets."',
                source: 'Elder Moon-Eye, Rakasha Spirit Conclave'
            }
        ],

        lastDays: {
            intel: 55,
            content: `TIMELINE RECONSTRUCTION - FINAL 72 HOURS:

Day -3: Princess cancels public appearance citing "security concerns." Sends encrypted message to unknown recipient (content unrecovered).

Day -2: Private meeting with Toadsworth Sr. (Royal Chamberlain). Meeting lasted 4 hours. Toadsworth Sr. noted as "visibly distressed" afterward.

Day -1: Princess dismisses her regular guard rotation, requesting only Captain Silvercap for protection. Silvercap would later disappear and is presumed dead.

Day 0 (Morning): Princess seen entering her chambers at 0600. Did not emerge for breakfast or lunch.

Day 0 (1847): Guard discovers Princess deceased in her chambers. Alarm raised. Scene immediately secured by Regency forces.

Day 0 (2100): Regency Council assumes emergency powers. Investigation begins.

Day +5: Koopa Troop officially blamed for assassination.

CRITICAL NOTE: The 47-minute gap in guard rotations occurred between 1400-1447 on Day 0. This "scheduling error" has never been adequately explained.`
        }
    },

    // =========================================
    // THE TOADSTOOL DYNASTY
    // =========================================
    dynasty: {
        name: 'House Toadstool',
        founded: 412,
        founder: 'King Toadstool I "The Unifier"',
        motto: 'Grace in Sovereignty',
        altMotto: 'From the Soil, the Crown',
        symbol: '🍑',
        status: 'EXTINCT (Main Line)',
        ancestralSeat: 'Peach\'s Castle, Toad Town',
        
        sigils: {
            primary: 'Golden peach on pink field',
            secondary: 'Crown of mushrooms',
            warBanner: 'Crossed scepters beneath the peach'
        },

        royalLine: [
            {
                id: 'king_i',
                name: 'King Toadstool I "The Unifier"',
                reign: '412-461',
                status: 'deceased',
                icon: '👑',
                intel: 30,
                summary: 'United the Mushroom Tribes. Established the dynasty. Repelled the first Koopa invasion.',
                legacy: 'Founded the kingdom. His tactical genius is still studied. Died peacefully after 49-year reign.'
            },
            {
                id: 'king_ii',
                name: 'King Toadstool II "The Builder"',
                reign: '461-512',
                status: 'deceased',
                icon: '👑',
                intel: 30,
                summary: 'Constructed the original Peach\'s Castle. Established trade routes. Era of prosperity.',
                legacy: 'Infrastructure that still stands today. Some say he made pacts with underground powers for building materials.'
            },
            {
                id: 'queen_lily',
                name: 'Queen Lily (Regent)',
                reign: '512-534',
                status: 'deceased',
                icon: '👸',
                intel: 35,
                summary: 'Ruled as regent for her young son. Known as "The Iron Flower." Crushed three rebellions.',
                legacy: 'Proved women could rule. Some Loyalist texts name her as inspiration for Toadette.',
                classified: {
                    intel: 60,
                    text: 'Secret correspondence suggests she ordered the assassination of two noble rivals. The precedent troubles historians.'
                }
            },
            {
                id: 'king_iii',
                name: 'King Toadstool III "The Peacemaker"',
                reign: '534-602',
                status: 'deceased',
                icon: '👑',
                intel: 25,
                summary: 'Longest reign in history. Signed the First Koopa Treaty. Era of relative peace.',
                legacy: 'The peace he built would last 300 years. His descendants grew complacent.',
                classified: {
                    intel: 50,
                    text: 'The First Koopa Treaty contained secret provisions never made public. The original document is missing.'
                }
            },
            {
                id: 'king_iv',
                name: 'King Toadstool IV "The Beloved"',
                relation: 'Peach\'s Father',
                reign: '905-940',
                status: 'deceased',
                icon: '👑',
                intel: 15,
                summary: 'Popular ruler who expanded trade. Married Queen Dahlia of the Flower Kingdom. Peach\'s father.',
                legacy: 'Last stable ruler. His death began the decline. Some say he was too trusting of his advisors.',
                classified: {
                    intel: 55,
                    text: 'The King was known to be "sociable" in his youth. At least three potential illegitimate children have been rumored. None have been confirmed or found.'
                }
            },
            {
                id: 'queen_dahlia',
                name: 'Queen Dahlia',
                relation: 'Peach\'s Mother',
                reign: '905-935 (Consort)',
                status: 'deceased',
                icon: '🌺',
                intel: 20,
                summary: 'Princess of the Flower Kingdom. Renowned diplomat. Established the Flower Festival tradition.',
                legacy: 'Her diplomatic skills kept peace during turbulent times. Peach inherited her grace.',
                classified: {
                    intel: 65,
                    text: 'Queen Dahlia\'s younger sister married into the Sarasaland royal family—making Princess Daisy a blood relative of the Toadstools through the maternal line. This connection is rarely discussed publicly.'
                }
            },
            {
                id: 'peach',
                name: 'Princess Peach Toadstool',
                relation: 'THE VICTIM',
                reign: 'Never Crowned',
                status: 'ASSASSINATED',
                icon: '👸',
                intel: 10,
                summary: 'The last direct heir. Assassinated in 955. Her death shattered the kingdom.',
                legacy: 'Martyred princess. Her memory drives the Loyalist cause. The mystery of her death may yet reshape the world.'
            }
        ],

        cadetBranches: [
            {
                id: 'rosewood',
                name: 'House Rosewood',
                relationship: 'Descended from King Toadstool II\'s younger brother',
                separation: '3 generations from main line',
                currentHead: 'Lord Crimson Rosewood',
                headAge: 67,
                status: 'active',
                claimStrength: 2,
                territory: 'Eastern Mushroom Marches',
                forces: 200,
                stance: 'Nominally supports Regency',
                intel: 40,
                summary: 'Weak claim, few resources. Lord Crimson prefers gardening to politics.',
                members: [
                    { name: 'Lord Crimson Rosewood', role: 'Head of House', age: 67, notes: 'Elderly, disinterested in power' },
                    { name: 'Lady Petal Rosewood', role: 'Heir Apparent', age: 41, notes: 'Ambitious. Quietly gathering allies.' },
                    { name: 'Sir Thorn Rosewood', role: 'Military Commander', age: 38, notes: 'Petal\'s younger brother. Competent soldier.' }
                ],
                classified: {
                    intel: 70,
                    text: 'Lady Petal has been in secret communication with both the Loyalists AND the Koopa Troop. She plays all sides, waiting to see who wins before committing. Her ambition exceeds her family\'s means.'
                }
            },
            {
                id: 'goldcap',
                name: 'House Goldcap',
                relationship: 'Descended from Princess Lily (King III\'s aunt)',
                separation: '2 generations from main line',
                currentHead: 'EXTINCT',
                status: 'DESTROYED',
                claimStrength: 0,
                territory: 'Former: Northern Highlands',
                forces: 0,
                stance: 'N/A',
                intel: 50,
                summary: 'Massacred in 982 during the Night of Falling Stars. Blamed on Koopa forces.',
                extinctionEvent: {
                    name: 'Night of Falling Stars',
                    date: { year: 982, monthIndex: 8, day: 15 },
                    casualties: 47,
                    survivors: 'Unknown - 1 body never recovered',
                    officialCause: 'Koopa raid',
                    suspectedCause: 'Inside job'
                },
                classified: {
                    intel: 75,
                    text: `CRITICAL INTELLIGENCE: Evidence recovered by Loyalist archivists suggests the Night of Falling Stars was NOT a Koopa attack.

Analysis:
- Guard rotations were altered 3 days prior to the attack
- Warning systems were disabled "for maintenance"
- The attack occurred during a rare alignment when backup forces were deployed elsewhere
- Koopa Troop records (captured during the Vigilance operation) show no orders for any raid that night

The massacre bears hallmarks of an inside job. If the Regency eliminated House Goldcap, it explains their desperation to maintain power—they cannot allow legitimate heirs to investigate.

UNCONFIRMED: Young Lord Jasper Goldcap, age 12, was never found among the dead. His body was reported "consumed by fire" but no remains were recovered. If he escaped, he would be 70 years old today and the strongest living claimant to the throne.`
                }
            },
            {
                id: 'fernshade',
                name: 'House Fernshade',
                relationship: 'Descended from legitimized natural child of King Toadstool I',
                separation: '6 generations from main line',
                currentHead: 'Baron Moss Fernshade',
                headAge: 54,
                status: 'active',
                claimStrength: 1,
                territory: 'Darkwood Forest estates',
                forces: 50,
                stance: 'Strictly neutral',
                intel: 35,
                summary: 'Illegitimate origin disputed. Maintain isolation. Rumored to have "forest allies."',
                classified: {
                    intel: 60,
                    text: 'The Fernshade estates border Rakasha territory. They have maintained cordial relations with the clans for generations. If anyone knows the truth about Thornpaw and Peach, it may be them—but they guard their secrets well.'
                }
            },
            {
                id: 'morel',
                name: 'House Morel',
                relationship: 'Descended from King Toadstool III\'s second son',
                separation: '4 generations from main line',
                currentHead: 'Countess Portia Morel',
                headAge: 45,
                status: 'active',
                claimStrength: 2,
                territory: 'Underground Holdings (location classified)',
                forces: 'Unknown',
                stance: 'Unknown',
                intel: 65,
                summary: 'Went underground—literally—after the assassination. Control mushroom trade networks.',
                classified: {
                    intel: 80,
                    text: `House Morel vanished from public life in 956, one year after the assassination. They relocated to extensive underground holdings and have operated in shadow ever since.

Current intelligence suggests:
- They control 40% of the kingdom's mushroom trade through intermediaries
- They have agents in all major factions
- Countess Portia is described as "patient, calculating, and waiting"

Their claim to the throne is legally valid but never pressed. The question is: why are they waiting? And for what?`
                }
            }
        ],

        foreignClaimants: [
            {
                id: 'sarasaland',
                name: 'Princess Daisy of Sarasaland',
                kingdom: 'Sarasaland',
                relationship: 'Second cousin through maternal line',
                claimStrength: 4,
                stance: 'Publicly refuses claim',
                intel: 30,
                summary: 'Closest living blood relative. Could unite the kingdom but consistently refuses.',
                profile: {
                    age: 'Approximately 90 (appears younger due to Flower Kingdom heritage)',
                    title: 'Crown Princess of Sarasaland',
                    military: 'Commands the Sarasaland Defense Force (~5,000 troops)',
                    personality: 'Athletic, direct, impatient with politics'
                },
                classified: {
                    intel: 65,
                    text: `Daisy's public refusal may not be permanent. Intelligence suggests:
                    
1. She privately grieves Peach deeply—they were close as children
2. She has stated she would "rather die than rule murderers"
3. If the true killer is revealed, her stance may change
4. Sarasaland's military could tip the balance if deployed

The Regency fears her more than any other claimant because she cannot be controlled.`
                }
            },
            {
                id: 'beanbean',
                name: 'Prince Peasley of Beanbean',
                kingdom: 'Beanbean Kingdom',
                relationship: 'Alleged secret betrothal',
                claimStrength: 3,
                stance: 'Denies claim publicly',
                intel: 55,
                summary: 'If the betrothal contract is authentic, he has a legal claim through intended marriage.',
                profile: {
                    age: 'Approximately 95',
                    title: 'Prince of the Beanbean Throne',
                    military: 'Commands the Bean Knights (~2,000 elite troops)',
                    personality: 'Flamboyant, secretly cunning, holds grudges'
                },
                classified: {
                    intel: 80,
                    text: `The betrothal contract fragments recovered by Loyalist intelligence appear authentic. Full document has never been found.

Prince Peasley's recent movements are concerning:
- Three secret meetings near the Mushroom-Beanbean border
- Hired investigators searching royal archives
- Increased military exercises near the frontier

Assessment: Peasley knows more than he admits. He may be searching for proof of the betrothal—or proof of who killed his intended bride. His involvement could either save or shatter the peace between kingdoms.`
                }
            },
            {
                id: 'bowser',
                name: 'King Bowser Koopa',
                kingdom: 'Dark Lands',
                relationship: 'Conquest claim / Ancient territorial rights',
                claimStrength: 5,
                stance: 'Active military threat (Currently incapacitated)',
                intel: 15,
                summary: 'Claims the entire Mushroom Kingdom based on pre-Toadstool era Koopa settlements.',
                profile: {
                    age: 'Unknown (Koopa royalty are long-lived)',
                    title: 'King of the Koopa, Lord of the Dark Lands, Supreme Commander of the Koopa Troop',
                    military: 'The largest standing army in the known world',
                    personality: 'Bombastic, surprisingly cunning, obsessive'
                },
                classified: {
                    intel: 50,
                    text: `Bowser's claim has historical merit that is deliberately suppressed:
                    
Pre-Toadstool era maps (recovered from Dark Land archives) show Koopa settlements throughout what is now the Mushroom Kingdom. The Koopa were displaced when the Mushroom Tribes unified.

More controversially: Bowser's obsession with Princess Peach may have had legal grounding. Ancient Koopa law recognizes "bride-right" claims over contested territories. If he had married Peach (with or without consent), his claim would have been technically valid under both legal systems.

This does NOT excuse his methods. But it explains why the Regency works so hard to paint him as simply a monster.`
                },
                koopaTroopIntel: {
                    intel: 70,
                    text: `KOOPA INTELLIGENCE SYNTHESIS:
                    
Bowser's current status complicates everything. Per Koopa Troop internal intelligence (source: Vigilance capture aftermath):

1. King Bowser is NOT in the Dark Lands. He is operating independently at Raventree Manor, investigating supernatural anomalies alongside a party of adventurers.

2. Regent Kamek maintains a "Shadow Bowser" illusion on the throne to prevent morale collapse.

3. The succession is unstable: Bowser Jr. and Ludwig von Koopa are maneuvering against each other. Civil war within the Troop is possible.

4. Protocol Omega (massive defensive shielding) is active to counter the Iron Legion's anti-magic technology.

CRITICAL: If Bowser's absence becomes known, the Koopa Troop may fracture. This could end them as a threat—or create multiple unpredictable successor warlords.`
                }
            }
        ],

        successionAnalysis: {
            intel: 45,
            title: 'Theoretical Succession Order',
            note: 'If traditional laws were enforced:',
            order: [
                { position: 1, name: 'Princess Daisy of Sarasaland', basis: 'Closest blood relative', likelihood: 'LOW - Refuses claim', notes: 'Would need to renounce Sarasaland' },
                { position: 2, name: 'Lady Petal Rosewood', basis: 'Senior cadet branch', likelihood: 'VERY LOW - No support', notes: 'Technically valid, politically impossible' },
                { position: 3, name: 'Prince Peasley (Disputed)', basis: 'Betrothal contract', likelihood: 'UNKNOWN - Depends on proof', notes: 'Would trigger international incident' },
                { position: 4, name: 'Countess Portia Morel', basis: 'Valid cadet line', likelihood: 'UNKNOWN - Never pressed', notes: 'The silent player' },
                { position: 5, name: 'Baron Moss Fernshade', basis: 'Legitimized natural line', likelihood: 'NEGLIGIBLE', notes: 'Most consider line disqualified' },
                { position: 'X', name: 'Regency Selection', basis: 'Emergency powers', likelihood: 'CURRENT STATUS', notes: 'The Regency claims right to choose' }
            ],
            wildcards: [
                { name: 'Jasper Goldcap (If alive)', basis: 'Strongest cadet claim', notes: 'Would supersede all others if found' },
                { name: 'Peach-Thornpaw Heir (If exists)', basis: 'Direct descendant', notes: 'Would be legitimate heir. Would also be half-Rakasha—unprecedented.' },
                { name: 'Legitimized Royal Bastard (If found)', basis: 'King IV\'s potential offspring', notes: 'Would outrank cadet branches if legitimized' }
            ]
        }
    },

    // =========================================
    // FACTIONS - DYNAMICALLY ENHANCED
    // =========================================
    factions: {
        getAll: function() {
            return [
                this.loyalists,
                this.regency,
                this.fawful,
                this.ironLegion,
                this.koopaTroop
            ];
        },

        loyalists: {
            id: 'peach_loyalists',
            name: 'Peach Loyalists',
            shortName: 'LOYALISTS',
            icon: '🌸',
            color: '#E91E63',
            leader: 'Captain Toadette',
            leaderTitle: 'Supreme Commander',
            hq: 'Toad Town (Occupied)',
            founded: 980,
            
            getPower: () => dataAggregator.getFactionPower('peach_loyalists'),
            
            status: 'DOMINANT - ASCENDING',
            trend: 'ASCENDING',
            
            summary: `Fanatical avengers dedicated to uncovering the truth of Princess Peach's assassination. What began as a small group of true believers has grown into the dominant military force in the civil war. Their recent victories—Toad Town, Bramblehaven, the Rakasha alliance—have shifted the balance of power decisively in their favor.`,
            
            ideology: 'The Crown Endures. Those who killed the Princess must face justice. The Regency covers up the truth. The truth will set the kingdom free.',
            
            strengths: [
                'Fanatical ideological commitment',
                'Recent major military victories',
                'Control of the capital city',
                'Alliance with Rakasha clans',
                'Possession of Chancellor Toadsworth',
                'Popular support among common Toads'
            ],
            
            weaknesses: [
                'No legal governmental authority',
                'War crimes at Bramblehaven create international liability',
                'No clear heir to champion',
                'Regal Empire investigation pending',
                'Methods alienate moderates'
            ],
            
            keyFigures: [
                { name: 'Captain Toadette', role: 'Supreme Commander', status: 'ACTIVE', notes: 'Ruthless, effective, utterly devoted' },
                { name: 'Commander Redcap', role: 'Military Operations', status: 'ACTIVE', notes: 'Former Regency defector. Professional soldier.' },
                { name: 'Spymaster Shade', role: 'Intelligence Director', status: 'ACTIVE', notes: 'Identity unknown. Runs all intel operations.' },
                { name: 'Mystivil', role: 'Diplomatic Envoy', status: 'ACTIVE', notes: 'Completed the Xeos Ritual. Rakasha liaison.' }
            ],
            
            recentOperations: [
                { date: '1040-06-21', codename: 'SPIRIT BOND', result: 'SUCCESS', summary: 'Rakasha alliance secured via Xeos Ritual' },
                { date: '1040-06-17', codename: 'IRON ROSE', result: 'SUCCESS (WAR CRIME)', summary: 'Bramblehaven captured. All prisoners executed.' },
                { date: '1040-06-12', codename: 'DAWN CHORUS', result: 'SUCCESS', summary: 'Toad Town seized. Chancellor captured.' },
                { date: '1040-06-10', codename: 'MASQUERADE', result: 'PARTIAL', summary: 'Gala infiltration. Thornpaw intel obtained. 1 KIA.' }
            ],
            
            intel: 10,
            
            classified: {
                intel: 60,
                text: `LOYALIST INTERNAL ASSESSMENT:

Captain Toadette's grip on power is absolute but potentially fragile. Her willingness to commit war crimes (Bramblehaven) has strengthened her position among hardliners but created dissent:

- Commander Redcap reportedly argued against the massacre and was overruled
- Several cell leaders have privately expressed concern about "losing our way"
- The Regal Empire's investigation could lead to sanctions or intervention

More critically: the Loyalists have no succession plan. If Toadette dies, the movement may fracture between moderates and extremists.

The Rakasha alliance is genuine but conditional. Thornpaw demanded "protection of Rakasha interests in Rogueport" in exchange for cooperation. The Loyalists have committed troops to this—stretching their forces.

CRITICAL INTELLIGENCE: Spymaster Shade has operatives embedded in Fawful's servant staff. Operation HOMECOMING is active—they are attempting to access the secret hatch in Peach's chambers. If they recover evidence from behind that hidden door, everything changes.`
            }
        },

        regency: {
            id: 'mushroom_regency',
            name: 'The Mushroom Regency',
            shortName: 'REGENCY',
            icon: '🍄',
            color: '#E53935',
            leader: 'Chancellor Toadsworth',
            leaderStatus: 'CAPTURED',
            actingLeader: 'Vice-Chancellor Shroomsworth',
            actingStatus: 'IN HIDING',
            hq: 'LOST - Government in Exile',
            founded: 955,
            
            getPower: () => dataAggregator.getFactionPower('mushroom_regency'),
            
            status: 'CRITICAL - COLLAPSED',
            trend: 'COLLAPSING',
            
            summary: `The "legitimate" government established after the assassination to rule until a suitable heir could be found. Eighty-five years later, they still haven't found one—leading many to question whether they ever intended to. The loss of the capital and capture of the Chancellor has reduced them to a government in exile.`,
            
            ideology: 'Order must be maintained. The transition must be orderly. Trust the institutions. The truth is whatever maintains stability.',
            
            strengths: [
                'International diplomatic recognition',
                'Established bureaucratic systems',
                'Historical control of treasury',
                'Support from conservative nobles',
                'Legal legitimacy (disputed but official)'
            ],
            
            weaknesses: [
                'Chancellor captured by Loyalists',
                'Lost control of the capital',
                'Military forces severely depleted',
                'Credibility destroyed by Loyalist propaganda',
                'Suspected of assassination cover-up'
            ],
            
            keyFigures: [
                { name: 'Chancellor Toadsworth', role: 'Head of Government', status: 'CAPTURED', notes: 'Currently under Loyalist interrogation' },
                { name: 'Vice-Chancellor Shroomsworth', role: 'Acting Leader', status: 'IN HIDING', notes: 'Attempting to rally loyalists' },
                { name: 'General Portobello', role: 'Military Commander', status: 'ACTIVE', notes: 'Leading remaining forces' },
                { name: 'Treasurer Coinsworth', role: 'Finance', status: 'UNKNOWN', notes: 'Controls remaining treasury access' }
            ],
            
            intel: 15,
            
            classified: {
                intel: 55,
                text: `REGENCY CRISIS ASSESSMENT:

The Regency is functionally dead. Chancellor Toadsworth's capture was a decapitation strike from which they may not recover.

Current Toadsworth interrogation intelligence (Operation CONFESSION, Day 9):
- Subject claims ignorance of assassination details
- Under enhanced questioning, admitted his father "knew things that haunted him until death"
- Location of additional Toadsworth Sr. journals suspected but unconfirmed
- Assessment: The son may be innocent of direct knowledge. The father was not.

The cover-up theory gains credibility:
1. The 47-minute guard gap was never explained
2. Evidence was sealed within hours of the murder
3. The Koopa Troop was blamed before any real investigation
4. House Goldcap—the strongest rival claimants—was massacred 27 years later

If the Regency orchestrated or covered up the assassination, their 85-year rule has been built on a lie. The Loyalists smell blood.`
            }
        },

        fawful: {
            id: 'fawful_forces',
            name: 'Fawful\'s Dominion',
            shortName: 'FAWFUL',
            icon: '😈',
            color: '#7B1FA2',
            leader: 'Lord Fawful',
            hq: 'Peach\'s Castle',
            founded: 1039,
            
            getPower: () => dataAggregator.getFactionPower('fawful_forces'),
            
            status: 'DECLINING - PRESSURED',
            trend: 'DECLINING',
            
            summary: `The mad usurper who seized Peach's Castle during the chaos. Fawful has no blood claim and no allies—only the power he has taken through technological superiority and sheer insanity. His grip is weakening, but he may possess the most dangerous weapon of all: the truth.`,
            
            ideology: 'I HAVE FURY! The mustard of your doom! (Translator\'s note: Fawful\'s ideology is largely incoherent but centers on personal revenge and power accumulation)',
            
            strengths: [
                'Controls Peach\'s Castle (massive symbolic power)',
                'Technological superiority in robotics',
                'Unpredictable genius',
                'May possess assassination evidence from royal archives',
                'No external loyalties to exploit'
            ],
            
            weaknesses: [
                'Universally hated by all factions',
                'Lost Bramblehaven fortress',
                'No allies whatsoever',
                'Overextended and isolated',
                'Sanity questionable'
            ],
            
            intel: 15,
            
            classified: {
                intel: 55,
                text: `FAWFUL STRATEGIC ASSESSMENT:

Fawful's seizure of Peach's Castle gave him access to the royal archives and private chambers. Intelligence suggests he has discovered something significant.

Evidence:
1. He hosted the Victory Gala specifically to display his control of royal spaces
2. His behavior has shifted from triumphant to paranoid since taking the castle
3. Servants report he spends hours in the sealed royal wing
4. He has been observed carrying ancient documents

CRITICAL QUESTION: Does Fawful know who killed Princess Peach?

If he possesses proof of the assassination conspiracy, he holds leverage over the Regency, potential alliance value to the Loyalists, and a bargaining chip against everyone.

His silence suggests he is either:
a) Still analyzing what he found
b) Waiting for the optimal moment to reveal it
c) Using it as insurance against his inevitable fall

Loyalist Operation HOMECOMING aims to infiltrate the castle and access the secret hatch. If they reach it before Fawful realizes its significance, they may obtain evidence he has overlooked.`
            },
            
            fawfulDiscoveries: {
                intel: 75,
                text: `INTELLIGENCE SYNTHESIS - FAWFUL'S FINDINGS:

Based on servant testimony, intercepted communications, and behavioral analysis:

CONFIRMED DISCOVERIES:
- Royal correspondence archive (partially decoded)
- Financial records showing unusual payments pre-assassination
- Secret passage network maps (including the hatch)

SUSPECTED DISCOVERIES:
- Toadsworth Sr.'s personal journals
- Sealed testimony from the original investigation  
- Documents related to House Goldcap massacre

UNKNOWN:
- Whether Fawful understands what he has
- Whether he has decoded encrypted materials
- His intended use of the information

Assessment: Fawful is sitting on a powder keg. He may not even realize how explosive his archives are. If the Loyalists or any other faction obtains this material, the entire political landscape changes overnight.`
            }
        },

        ironLegion: {
            id: 'iron_legion',
            name: 'The Iron Legion',
            shortName: 'LEGION',
            icon: '⚔️',
            color: '#757575',
            leader: 'General Marcus Ironhand',
            hq: 'Iron Citadel (Regal Empire)',
            founded: 1015,
            
            getPower: () => dataAggregator.getFactionPower('iron_legion'),
            
            status: 'EXPANDING - AGGRESSIVE',
            trend: 'EXPANDING',
            
            summary: `Originally a Regal Empire military force, the Iron Legion has evolved into an anti-magic crusade. Their "Iron Mandate" authorizes the hunting of all magical beings. They represent external intervention in the civil war—and a threat to all supernatural factions.`,
            
            ideology: 'Magic is a threat to civilization. Technology is the future. All supernatural entities must be controlled or eliminated. Order through iron.',
            
            strengths: [
                'Superior conventional military technology',
                'Anti-magic weapons and countermeasures',
                'External resource base immune to local politics',
                'Currently holds the captured Vigilance airship',
                'Ideological certainty'
            ],
            
            weaknesses: [
                'Foreign invaders with no local support',
                'Ideology creates enemies among all magical factions',
                'Overextended across multiple theaters',
                'Technology can be overwhelmed by sufficient magic',
                'Dependent on Regal Empire support'
            ],
            
            intel: 25,
            
            classified: {
                intel: 60,
                text: `IRON LEGION THREAT ASSESSMENT:

The Iron Mandate (enacted 1040-06-21) represents a fundamental shift in the conflict. This is no longer just about the Mushroom succession—it is about the survival of magic itself.

Current Legion operations:
- "Witch-Finder" units active along Mushroom-Dark Land border
- Captured Vigilance airship being used for propaganda broadcasts
- Anti-magic detection grid expanding
- Magikoopa hunting operations underway

Unintended consequences:
1. The Koopa Troop has activated "Protocol Omega" (massive defensive shielding)
2. The Rakasha are now allied with the Loyalists specifically to counter this threat
3. King Boo's Court has increased cooperation with the Koopa Troop
4. Even the Regency is uncomfortable with Legion methods

CRITICAL: The Iron Mandate may force an alliance of convenience between traditional enemies. If the Koopa Troop, Loyalists, Rakasha, and supernatural factions coordinate against the Legion, the balance shifts dramatically.

General Ironhand does not seem to understand that by threatening everyone's magic, he is uniting everyone against him.`
            }
        },

        koopaTroop: {
            id: 'koopa_troop',
            name: 'The Koopa Troop',
            shortName: 'KOOPA',
            icon: '🐢',
            color: '#2E7D32',
            leader: 'King Bowser',
            leaderStatus: 'INCAPACITATED',
            actingLeader: 'Regent Kamek',
            hq: 'Valley of Bowser, Dark Lands',
            founded: 'Pre-Mushroom Era',
            
            getPower: () => dataAggregator.getFactionPower('koopa_troop'),
            
            status: 'REORGANIZING - INTERNAL CRISIS',
            trend: 'HOLDING',
            
            summary: `The eternal enemy of the Mushroom Kingdom—and possibly innocent of the crime that started this war. With King Bowser operating independently and Regent Kamek struggling to maintain control, the Troop faces internal succession tensions while watching the civil war with calculating patience.`,
            
            ideology: 'Might makes right. The King is ultimate. The Mushroom Kingdom is rightfully Koopa territory. Never give up.',
            
            strengths: [
                'Largest standing army in the known world',
                'Advanced airship technology',
                'Powerful magical resources (Magikoopa corps)',
                'Patient, calculating leadership under Kamek',
                'May be innocent of assassination—potential diplomatic advantage'
            ],
            
            weaknesses: [
                'King Bowser incapacitated/absent',
                'Succession crisis between Bowser Jr. and Ludwig',
                'Iron Mandate threatens Magikoopa operations',
                'Fleet compromised after Vigilance capture',
                'Internal tensions approaching breaking point'
            ],
            
            intel: 20,
            
            classified: {
                intel: 70,
                text: `KOOPA TROOP INTERNAL INTELLIGENCE (Multi-Source Synthesis):

CRITICAL REVELATION: King Bowser is NOT in the Dark Lands.

Per intelligence obtained during the Vigilance incident and subsequent analysis:
- Bowser was captured by Tea Leaf Syndicate traffickers
- He was rescued during the Vigilance incident
- He did NOT return to the Dark Lands
- He is currently operating at Raventree Manor, investigating supernatural anomalies alongside a party of adventurers

Regent Kamek has instituted an elaborate deception:
- "Shadow Bowser" illusion maintained on the throne
- All access to the King restricted under guise of "Strategic Meditation"
- Only Kamek knows the full truth

Succession Crisis:
- Bowser Jr. suspects deception, demanding access to his father
- Ludwig von Koopa has withdrawn forces from Sky Land without authorization
- Encrypted communications between Jr. and Ludwig suggest coordination
- Roy Koopa being approached by Wario Inc. about mercenary contracts
- Wendy O. Koopa establishing escape routes to Sarasaland

If the Troop discovers their King is "adventuring in a haunted house" while the Iron Legion mobilizes, morale will collapse and civil war is likely.

Kamek's strategy: Let the Mushroom factions destroy each other. When the victor emerges—exhausted—launch Operation Eviction and claim the ruins. The wildcard is Bowser's return. If he comes back with evidence or allies from Raventree, the calculus changes entirely.`
            },
            
            innocenceEvidence: {
                intel: 45,
                text: `WAS BOWSER FRAMED? - Evidence Analysis:

The official narrative blamed the Koopa Troop within 5 days of the assassination. But the evidence has never been solid:

Anomalies in the official investigation:
1. No Koopa DNA or scale evidence found at the scene
2. The murder weapon was a ceremonial dagger—not a Koopa weapon
3. The secret hatch suggests inside knowledge no Koopa operative would have
4. Koopa Troop records show no assassination orders that night
5. Bowser's documented obsession was CAPTURING Peach, not killing her

Counter-arguments:
- Bowser had motive (she repeatedly rejected him)
- The Troop had capability
- They were the obvious enemy

Assessment: The framing of Bowser was politically convenient. It gave the Regency an external enemy to unite against and justify emergency powers. Whether they actively framed him or simply accepted a convenient lie remains unclear.

If Bowser is proven innocent, the entire political landscape shifts. The Loyalists might find common cause with the Troop against the true killers. The Regency's legitimacy collapses entirely.`
            }
        }
    },

    // =========================================
    // INVESTIGATION - COMPREHENSIVE
    // =========================================
    investigation: {
        caseNumber: '955-001',
        status: 'ACTIVE - 85 YEARS OPEN',
        classification: 'MAXIMUM PRIORITY',
        
        physicalEvidence: [
            {
                id: 'secret_hatch',
                name: 'The Secret Hatch',
                status: 'CRITICAL',
                discovered: { year: 1040, monthIndex: 5, day: 10 },
                source: 'Chief Thornpaw via Scout Mistveil',
                intel: 50,
                summary: 'Hidden passage behind the royal portrait in Peach\'s chambers. She personally showed it to Thornpaw as her "escape route if the worst ever happened."',
                analysis: 'The assassin almost certainly used this entrance. Only someone with intimate knowledge of the Princess could have known about it.',
                implications: [
                    'Inside job is virtually confirmed',
                    'The assassin knew Peach personally',
                    'The official investigation either missed or concealed this'
                ],
                followUp: 'Operation HOMECOMING - Loyalist infiltrators attempting to access the hatch from inside Fawful-controlled castle.'
            },
            {
                id: 'timeline_gaps',
                name: 'The 47-Minute Gap',
                status: 'VERIFIED',
                discovered: { year: 998, monthIndex: 2, day: 15 },
                source: 'Loyalist Archivist Inkwell',
                intel: 45,
                summary: 'Guard rotation logs show no guards stationed near the royal chambers for 47 minutes on the day of assassination. Officially attributed to "scheduling error."',
                analysis: 'A 47-minute gap does not happen by accident. Someone with authority over guard assignments deliberately created this window.',
                implications: [
                    'Guards were deliberately withdrawn',
                    'Someone in the military command structure was involved',
                    'The "scheduling error" excuse is absurd'
                ]
            },
            {
                id: 'murder_weapon',
                name: 'The Ceremonial Dagger',
                status: 'DISPUTED',
                discovered: { year: 955, monthIndex: 5, day: 1 },
                source: 'Official Investigation',
                intel: 30,
                summary: 'A Toadstool ceremonial dagger found at the scene. Official murder weapon.',
                analysis: 'The wounds described in sealed medical reports are inconsistent with a single weapon. Some witnesses described "burns" that a dagger could not cause.',
                implications: [
                    'The dagger may have been planted',
                    'Multiple weapons/attackers possible',
                    'Magical involvement cannot be ruled out'
                ],
                classified: {
                    intel: 65,
                    text: 'Recovered medical examiner notes (heavily redacted) mention "cauterization inconsistent with blade wounds" and "secondary trauma pattern." The full autopsy report has never been released.'
                }
            },
            {
                id: 'blood_evidence',
                name: 'Crime Scene Blood Analysis',
                status: 'SUPPRESSED',
                discovered: { year: 955, monthIndex: 5, day: 2 },
                source: 'Original Investigation (Sealed)',
                intel: 70,
                summary: 'The original blood analysis report was sealed immediately and has never been released.',
                analysis: 'Why seal blood evidence unless it contradicts the official narrative?',
                implications: [
                    'There may have been blood from the attacker',
                    'DNA evidence could identify the killer',
                    'The Regency is actively suppressing this'
                ]
            }
        ],
        
        witnessTestimony: [
            {
                id: 'thornpaw',
                name: 'Chief Thornpaw',
                role: 'Romantic Partner / Key Witness',
                status: 'COOPERATIVE (LIMITED)',
                intel: 65,
                summary: 'Revealed his relationship with Peach and the secret hatch. Has been helpful but clearly holding back.',
                credibility: 'HIGH',
                concerns: 'Why did he wait 85 years? What else does he know?',
                classified: {
                    intel: 85,
                    text: `Thornpaw's full debrief suggests he knows more than he's sharing:
                    
- He knew Peach was afraid in her final weeks
- She told him "powerful forces" wanted her to remain uncrowned
- She gave him something to keep safe—he has not revealed what
- He believes the Regency was involved but lacks proof

Assessment: Thornpaw loved Peach. He wants justice. But Rakasha politics prevent full disclosure. He is protecting someone or something. The Xeos Ritual connection may provide leverage for further information.`
                }
            },
            {
                id: 'toadsworth_sr',
                name: 'Toadsworth Sr. (Deceased)',
                role: 'Royal Chamberlain',
                status: 'DECEASED - Journals Partially Recovered',
                intel: 55,
                summary: 'Served as Royal Chamberlain. His private journals contain cryptic references to "the arrangement" and "those who benefit from chaos."',
                credibility: 'HIGH (if journals are authentic)',
                concerns: 'Current Chancellor is his son. The son claims ignorance.',
                classified: {
                    intel: 75,
                    text: `Toadsworth Sr. Journal Fragments (Recovered 1010):
                    
"...she suspects, I think. The Council grows nervous. If she is crowned, she will investigate her father's death more closely, and then..."
                    
"...the arrangement must hold. Too much has been built on it. But I cannot look at her without seeing..."
                    
"...they promise it will be bloodless. A quiet retirement to a country estate. I do not believe them but what choice remains?"
                    
These fragments suggest:
1. A conspiracy existed before the assassination
2. King Toadstool IV's death may not have been natural
3. Toadsworth Sr. was involved but reluctant
4. The plan was supposedly "bloodless"—it wasn't

Current Chancellor Toadsworth's interrogation suggests he inherited the cover-up but may not know the full truth. His father's complete journals remain unfound.`
                }
            },
            {
                id: 'ryan_vision',
                name: 'Ryan (Liberated Toad)',
                role: 'Spirit-Walker Witness',
                status: 'NEW INTELLIGENCE',
                intel: 80,
                summary: 'During Rakasha spirit-walking rites, Ryan witnessed fragmentary visions of the assassination. Claims to have glimpsed the killer\'s face.',
                credibility: 'UNCERTAIN (supernatural source)',
                concerns: 'Visions were unclear. Spirit testimony is not legally admissible.',
                classified: {
                    intel: 90,
                    text: `Ryan's Debrief (Post-Xeos Ritual):
                    
"I saw... it was dark. The room. Candlelight. She was at her desk, writing something. The portrait... it moved. No. Behind it. A shadow.
                    
The shadow spoke. I couldn't hear words but she... she KNEW them. She wasn't afraid. She was angry. Betrayed.
                    
Then the light. Not fire. Colder. And she fell.
                    
The face... I saw... it was... familiar. Someone important. Not a Koopa. Not a stranger. Someone she trusted.
                    
The spirits won't show me more. They say she guards her own death. She's not ready for the truth to be known."
                    
Assessment: If accurate, this confirms:
1. Peach knew her killer
2. The attack came through the secret hatch
3. Magic was involved (the "cold light")
4. The killer was "someone important"

The spirits blocking further revelation is concerning. Either Ryan's psychic abilities are limited, or there is supernatural interference in this investigation.`
                }
            },
            {
                id: 'silvercap',
                name: 'Captain Silvercap',
                role: 'Personal Guard (Night of Assassination)',
                status: 'MISSING - PRESUMED DEAD',
                intel: 40,
                summary: 'The only guard Peach requested for her final night. Disappeared within a week of the assassination. Never found.',
                credibility: 'UNKNOWN',
                concerns: 'Was he silenced? Did he flee? Is he still alive?',
                classified: {
                    intel: 60,
                    text: `Silvercap Investigation File:
                    
Captain Silvercap was a 15-year veteran of the Royal Guard with an impeccable record. Princess Peach personally requested him—and ONLY him—for protection on her final night.
                    
Events:
- 1847: Guard discovers Princess deceased. Silvercap not at post.
- 1900: Silvercap found unconscious in servant quarters. Claims memory loss.
- 1905: Silvercap taken for "medical treatment." Never seen publicly again.
- 1912: Officially declared "deceased from wounds sustained."
- No body ever produced. No funeral held.

Theories:
1. He was the assassin (or accomplice) and was silenced
2. He witnessed something and was silenced
3. He fled and is in hiding
4. He was memory-wiped and disposed of

Loyalist search operations have never located remains. The possibility that Silvercap is alive—and knows the truth—remains.`
                }
            },
            {
                id: 'lady_bloomia',
                name: 'Lady Bloomia',
                role: 'Princess\'s Handmaiden',
                status: 'MISSING - 87 YEARS',
                intel: 55,
                summary: 'Peach\'s closest confidante and handmaiden. Accompanied the Princess during her mysterious "indisposed" period. Disappeared the night of the assassination.',
                credibility: 'UNKNOWN',
                concerns: 'Only person who would know about a potential pregnancy.',
                classified: {
                    intel: 85,
                    text: `Lady Bloomia File:
                    
Bloomia served Princess Peach for 20 years. She knew all the Princess's secrets.

The "Missing Months" (952-953):
- Peach was "indisposed" for 8 months
- Official explanation: "Diplomatic travel"
- No diplomatic records exist
- Bloomia accompanied her the entire time
- Their destination was never recorded

Disappearance:
- Last seen: Day of assassination, 1600 hours
- She was supposed to attend the Princess that evening
- She never arrived
- Her quarters were found empty, personal items missing
- No signs of struggle

Assessment: Bloomia left deliberately. She knew what was coming—or she took something with her that she was protecting.

THEORY: If Peach had a child during those missing months, Lady Bloomia would know. If she is still alive, she may be protecting that secret—and possibly that child—somewhere.

Loyalist search priority: MAXIMUM`
                }
            }
        ],
        
        theories: [
            {
                id: 'koopa_official',
                name: 'Koopa Troop Assassination',
                type: 'OFFICIAL NARRATIVE',
                probability: 15,
                trend: 'DECLINING',
                intel: 25,
                summary: 'The Koopa Troop, under Bowser\'s orders, assassinated Princess Peach to destabilize the kingdom for conquest.',
                supporting: [
                    'Bowser had publicly demanded Peach as his bride',
                    'The Koopa Troop was the obvious enemy',
                    'They had the capability'
                ],
                contradicting: [
                    'No Koopa evidence at the scene',
                    'The secret hatch suggests inside knowledge',
                    'Bowser\'s goal was capture, not killing',
                    'Koopa records show no orders for assassination'
                ],
                assessment: 'Increasingly viewed as a convenient lie. The Regency needed an external enemy to justify emergency powers.'
            },
            {
                id: 'regency_conspiracy',
                name: 'Regency Conspiracy',
                type: 'PRIMARY ALTERNATIVE',
                probability: 40,
                trend: 'INCREASING',
                intel: 50,
                summary: 'Elements within what became the Regency Council arranged the assassination to prevent Peach\'s coronation and seize power.',
                supporting: [
                    'The Regency gained power directly from her death',
                    'The 47-minute guard gap required inside authority',
                    'Evidence was sealed/suppressed immediately',
                    'Toadsworth Sr.\'s journals suggest involvement',
                    'House Goldcap (rival claimants) later massacred'
                ],
                contradicting: [
                    'No direct evidence of orders',
                    'Current Chancellor seems genuinely ignorant',
                    'Conspiracy would require many participants to stay silent for 85 years'
                ],
                assessment: 'The most credible theory. The cover-up is proven; the question is whether they also arranged the murder or merely exploited it.',
                classified: {
                    intel: 70,
                    text: `Regency Conspiracy - Deep Analysis:
                    
If the Regency orchestrated the assassination, the conspiracy likely involved:
- Toadsworth Sr. (arranged the guard gap, handled cover-up)
- General Shroomsworth (grandfather of current Vice-Chancellor, commanded guards)
- Unknown financial backers (someone funded this)
- Possibly foreign involvement (who benefits externally?)

The Goldcap Massacre (982) may be connected. House Goldcap was investigating the assassination independently. Then they were all killed in a "Koopa raid" that shows signs of being an inside job.

Pattern: Anyone who gets close to the truth dies.`
                }
            },
            {
                id: 'foreign_power',
                name: 'Foreign Involvement',
                type: 'SECONDARY ALTERNATIVE',
                probability: 20,
                trend: 'STABLE',
                intel: 55,
                summary: 'A foreign power (Beanbean Kingdom, unknown actor) arranged the assassination for geopolitical reasons.',
                supporting: [
                    'The betrothal to Prince Peasley would have threatened someone\'s interests',
                    'Foreign agents could access Mushroom resources through the Regency',
                    'The "cold light" in Ryan\'s vision suggests unfamiliar magic'
                ],
                contradicting: [
                    'No known motive strong enough',
                    'Would require inside collaboration anyway',
                    'Prince Peasley seems to genuinely grieve Peach'
                ],
                assessment: 'Possible but requires a co-conspiracy with internal actors. Cannot be ruled out.'
            },
            {
                id: 'unknown_actor',
                name: 'Unknown Mastermind',
                type: 'WILD CARD',
                probability: 25,
                trend: 'INCREASING',
                intel: 65,
                summary: 'An unidentified party—possibly someone we haven\'t considered—orchestrated everything.',
                supporting: [
                    'The sophistication suggests professional planning',
                    'All known factions have been played against each other',
                    'Someone is benefiting from 85 years of chaos—who?',
                    'House Morel vanished into hiding immediately after—what do they know?'
                ],
                contradicting: [
                    'Speculation without evidence',
                    'Occam\'s Razor favors simpler explanations'
                ],
                assessment: 'The longer this war continues, the more it seems designed. Someone is profiting from endless conflict. Finding them is paramount.',
                classified: {
                    intel: 80,
                    text: `Unknown Actor Analysis:
                    
Consider who benefits from 85 years of war:
- Arms dealers (Wario Inc. has grown massively)
- Underground economies (House Morel controls mushroom trade)
- External powers (the Iron Legion's rise was enabled by weakened kingdoms)
- Supernatural entities (King Boo has expanded during the chaos)

The assassination may not have been about succession at all. It may have been about creating permanent instability.

THEORY: What if the "unknown actor" is not a person but an organization? A secret society that profits from eternal war?

Insufficient evidence. But the pattern is disturbing.`
                }
            }
        ],
        
        breakthroughs: [
            {
                date: { year: 1040, monthIndex: 5, day: 21 },
                title: 'The Xeos Connection',
                summary: 'Mystivil completed the Xeos Ritual, establishing a psychic link with the Rakasha. This opens access to spirit-sight testimony and Thornpaw\'s deeper knowledge.',
                significance: 'CRITICAL',
                intel: 60
            },
            {
                date: { year: 1040, monthIndex: 5, day: 10 },
                title: 'The Thornpaw Revelation',
                summary: 'Chief Thornpaw reveals his relationship with Princess Peach and the existence of the secret hatch. Most significant breakthrough in decades.',
                significance: 'CRITICAL',
                intel: 50
            },
            {
                date: { year: 1040, monthIndex: 5, day: 20 },
                title: 'Ryan\'s Spirit Vision',
                summary: 'Toad operative Ryan witnesses fragments of the assassination through spirit-sight. Confirms inside job, magical involvement, and that Peach knew her killer.',
                significance: 'HIGH',
                intel: 75
            },
            {
                date: { year: 1040, monthIndex: 5, day: 17 },
                title: 'Bramblehaven Intelligence',
                summary: 'Documents recovered during the assault include references to "pre-war arrangements" and unusual financial transfers.',
                significance: 'MEDIUM',
                intel: 40
            },
            {
                date: { year: 1040, monthIndex: 5, day: 12 },
                title: 'Toadsworth Captured',
                summary: 'Chancellor Toadsworth taken alive. Interrogation ongoing. Has revealed his father\'s guilt but claims personal ignorance.',
                significance: 'HIGH',
                intel: 55
            }
        ]
    },

    // =========================================
    // PROJECTIONS
    // =========================================

            projections: {
        analysisDate: CURRENT_GAME_DATE,
        analyst: 'Joint Strategic Command',
        confidence: 75,
        frontrunner: 'Peach Loyalists',
        
        // Dynamic odds calculation would pull from faction stats
        getOdds: function(factionStats) {
            // Base odds modified by current power levels
            const baseOdds = [
                { id: 'loyalists', faction: 'Peach Loyalists', base: 30, icon: '🌸' },
                { id: 'koopa', faction: 'Koopa Troop', base: 25, icon: '🐢' },
                { id: 'legion', faction: 'Iron Legion', base: 15, icon: '⚔️' },
                { id: 'regency', faction: 'Mushroom Regency', base: 12, icon: '🍄' },
                { id: 'fawful', faction: 'Fawful\'s Dominion', base: 8, icon: '😈' },
                { id: 'stalemate', faction: 'Prolonged Stalemate', base: 10, icon: '⚠️' }
            ];
            
            // Would modify based on real faction data
            return baseOdds.map(o => ({
                ...o,
                chance: o.base,
                trend: o.id === 'loyalists' ? '+12%' : 
                       o.id === 'regency' ? '-15%' : 
                       o.id === 'fawful' ? '-8%' : 
                       o.id === 'koopa' ? '-5%' : '+3%'
            }));
        },
        
        keyFactors: [
            {
                id: 'evidence',
                name: 'Assassination Evidence',
                impact: 'CRITICAL',
                description: 'Discovery of definitive proof would reshape all alliances instantly.',
                probability: 35,
                intel: 40
            },
            {
                id: 'bowser_return',
                name: 'King Bowser\'s Return',
                impact: 'HIGH',
                description: 'The Koopa King\'s return to active command would trigger immediate offensive operations.',
                probability: 60,
                intel: 50
            },
            {
                id: 'hidden_heir',
                name: 'Hidden Heir Emergence',
                impact: 'CRITICAL',
                description: 'A legitimate Toadstool heir would become the most valuable person in the kingdom.',
                probability: 25,
                intel: 70
            },
            {
                id: 'iron_escalation',
                name: 'Iron Mandate Escalation',
                impact: 'HIGH',
                description: 'Full anti-magic enforcement would force unlikely alliances.',
                probability: 70,
                intel: 35
            },
            {
                id: 'international',
                name: 'International Intervention',
                impact: 'MODERATE',
                description: 'Sarasaland or Beanbean committing forces would tip the balance.',
                probability: 20,
                intel: 45
            },
            {
                id: 'fawful_secret',
                name: 'Fawful\'s Discovery',
                impact: 'UNKNOWN',
                description: 'Whatever Fawful found in the castle archives could change everything.',
                probability: 50,
                intel: 55
            }
        ],
        
        scenarios: [
            {
                id: 'loyalist_victory',
                name: 'Loyalist Triumph',
                probability: 35,
                intel: 40,
                description: 'The Loyalists uncover proof of conspiracy, install a chosen heir.',
                consequences: [
                    'War crimes tribunals for Regency officials',
                    'Rakasha gain unprecedented influence',
                    'Koopa relations depend on exoneration',
                    'Iron Legion becomes primary threat'
                ]
            },
            {
                id: 'koopa_conquest',
                name: 'Koopa Dominion',
                probability: 25,
                intel: 40,
                description: 'Civil war exhausts all parties. Operation Eviction succeeds.',
                consequences: [
                    'Mushroom Kingdom becomes Koopa territory',
                    'Resistance movements persist for decades',
                    'Iron Legion-Koopa war inevitable',
                    'Refugee crisis destabilizes neighbors'
                ]
            },
            {
                id: 'negotiated_peace',
                name: 'Exhausted Peace',
                probability: 15,
                intel: 45,
                description: 'War exhaustion forces compromise. Daisy accepts regency.',
                consequences: [
                    'Weak central government',
                    'Regional warlords retain power',
                    'Justice permanently delayed',
                    'Next war within 20 years'
                ]
            },
            {
                id: 'iron_hegemony',
                name: 'Iron Dominion',
                probability: 15,
                intel: 50,
                description: 'The Legion uses chaos to impose technological order.',
                consequences: [
                    'Magic outlawed across the kingdom',
                    'Magikoopa order destroyed',
                    'Underground magical resistance',
                    'Koopa-Loyalist alliance forms'
                ]
            },
            {
                id: 'fragmentation',
                name: 'Kingdom Dissolution',
                probability: 10,
                intel: 35,
                description: 'No victor emerges. The kingdom fragments permanently.',
                consequences: [
                    'Multiple successor states',
                    'Trade networks collapse',
                    'Mass civilian suffering',
                    'Eventual reunification war'
                ]
            }
        ]
    },

    // =========================================
    // INVESTIGATION DEEP DIVE
    // =========================================
    investigation: {
        caseNumber: '955-ALPHA-001',
        status: 'ACTIVE - 85 YEARS',
        classification: 'MAXIMUM',
        
        physicalEvidence: [
            {
                id: 'secret_hatch',
                name: 'The Secret Hatch',
                status: 'CRITICAL',
                discovered: { year: 1040, month: 6, day: 10 },
                source: 'Chief Thornpaw via Scout Mistveil',
                intel: 60,
                summary: 'A hidden passage behind the royal portrait in Peach\'s private chambers. Access mechanism requires a specific sequence known only to a handful of people.',
                details: 'The hatch leads to a network of servant passages that connect to the castle\'s lower levels. These passages were supposedly sealed after the assassination, but Thornpaw claims Peach showed him personally - meaning she trusted him with her escape route.',
                implications: [
                    'Assassin had intimate knowledge of castle layout',
                    'Inside job is now virtually certain',
                    'Official investigation was deliberately misdirected',
                    'Someone in the royal household betrayed the Princess'
                ],
                classified: {
                    intel: 80,
                    content: 'Analysis of the hatch mechanism indicates it was opened from INSIDE the chambers on the night of the murder. The assassin did not enter through the hatch - they LEFT through it. Peach may have been killed by someone already in her chambers.'
                }
            },
            {
                id: 'timeline_gaps',
                name: 'Guard Rotation Anomaly',
                status: 'VERIFIED',
                discovered: { year: 998, month: 3, day: 15 },
                source: 'Loyalist Archivist Inkwell',
                intel: 45,
                summary: 'A 47-minute gap in guard rotations where no guards were stationed near the royal chambers. Officially attributed to "scheduling error."',
                details: 'Cross-referencing with duty rosters shows the gap was not random. Three specific guards who should have been on duty were reassigned to the kitchens that night. All three died within two years of the assassination under "accidental" circumstances.',
                implications: [
                    'Guards were deliberately withdrawn',
                    'Someone with command authority arranged it',
                    'Witnesses were subsequently eliminated'
                ],
                classified: {
                    intel: 75,
                    content: 'The order to reassign the guards was signed by Toadsworth Sr. himself. Either he was complicit, or his seal was forged. The original document has "disappeared" from the archives.'
                }
            },
            {
                id: 'murder_weapon',
                name: 'The Ceremonial Dagger',
                status: 'DISPUTED',
                discovered: { year: 955, month: 6, day: 2 },
                source: 'Official Investigation',
                intel: 30,
                summary: 'A ceremonial dagger with Koopa Troop insignia found at the scene. Used to blame Bowser\'s forces.',
                details: 'The dagger was a diplomatic gift from the Koopa Kingdom dating back to the Treaty of Giant Land. It had been displayed in the royal armory for decades. Wound analysis is inconsistent with the dagger being the sole weapon used.',
                implications: [
                    'Weapon may have been planted',
                    'Multiple wounds suggest multiple attackers or weapons',
                    'Koopa insignia too convenient'
                ],
                classified: {
                    intel: 65,
                    content: 'Loyalist forensic analysis suggests the fatal wounds were caused by MAGIC, not a physical blade. The dagger wounds were inflicted post-mortem to create a false trail. This implicates a magic user - possibly a Magikoopa, but also possibly a palace mage.'
                }
            },
            {
                id: 'blood_evidence',
                name: 'The Second Blood Type',
                status: 'SUPPRESSED',
                discovered: { year: 955, month: 6, day: 3 },
                source: 'Royal Physician (deceased)',
                intel: 70,
                summary: 'Two distinct blood types were found at the scene. One was Peach\'s. The other was never identified.',
                details: 'The Royal Physician noted this in his initial report, which was subsequently "lost." A copy was preserved by a junior assistant who later joined the Loyalists.',
                implications: [
                    'The assassin was wounded during the attack',
                    'Peach fought back - she did not die easily',
                    'DNA analysis could identify the killer'
                ],
                classified: {
                    intel: 90,
                    content: 'Blood type analysis matches the rare "Star-Touched" variant found only in three bloodlines: Toadstool, Beanbean Royal Family, and... the Rakasha shamanic caste. Chief Thornpaw is Star-Touched. So was Peach. If they had a child, that child would be Star-Touched as well. The second blood could be: the killer, a hidden child, or Thornpaw himself.'
                }
            },
            {
                id: 'torn_letter',
                name: 'Fragment 7-Alpha',
                status: 'NEW',
                discovered: { year: 1040, month: 6, day: 17 },
                source: 'Bramblehaven Document Recovery',
                intel: 55,
                summary: 'A torn piece of correspondence found in Fawful\'s captured archives. Appears to be from Peach\'s personal correspondence.',
                details: 'The fragment reads: "...cannot trust [torn] anymore. If something happens to me, find the [torn] in the old grove. My child must never [torn]..." The date is partially visible: 955.',
                implications: [
                    'Peach knew she was in danger',
                    'She hid something in an "old grove"',
                    'She explicitly mentions "my child"'
                ],
                classified: {
                    intel: 85,
                    content: 'Handwriting analysis confirms this is Peach\'s writing. The "old grove" likely refers to the Ancient Toadstool Grove in the Darkwood Forest - the sacred burial ground of the royal family. The Fernshade family controls access to this area. They may be protecting more than they admit.'
                }
            }
        ],
        
        witnessTestimony: [
            {
                id: 'thornpaw',
                name: 'Chief Thornpaw',
                status: 'CRITICAL WITNESS',
                reliability: 'UNCERTAIN',
                intel: 70,
                summary: 'Revealed romantic relationship with Peach and knowledge of the secret hatch. His 85-year silence raises questions.',
                testimony: {
                    public: 'Thornpaw claims Peach showed him the hatch as her "escape route if things went wrong." He says she was increasingly paranoid in her final months, speaking of "shadows in the court."',
                    classified: {
                        intel: 85,
                        content: 'Under the Xeos ritual mind-link, Thornpaw\'s emotional imprint suggests GUILT. Not guilt of commission - but guilt of absence. He believes he could have saved her if he had been there that night. He was not there because she SENT HIM AWAY. Why? What did she know was coming?'
                    }
                },
                questions: [
                    'Why did he wait 85 years to reveal this?',
                    'What else does he know that he hasn\'t shared?',
                    'Is he protecting someone?',
                    'Did their relationship produce children?'
                ]
            },
            {
                id: 'toadsworth_sr_journals',
                name: 'Toadsworth Sr. Private Journals',
                status: 'VERIFIED',
                reliability: 'HIGH',
                intel: 55,
                summary: 'Private journals of the Royal Chamberlain recovered from the family vault. Cryptic references suggest foreknowledge.',
                testimony: {
                    public: 'Journal entries from 954 reference "the arrangement" and "those who benefit from chaos." He wrote of being "bound by oaths older than my loyalty to the crown."',
                    classified: {
                        intel: 75,
                        content: 'A sealed entry dated one week before the assassination reads: "May the Stars forgive me. I have been told what must happen. They say it is for the good of the kingdom. I do not believe them, but I am too afraid to act. The Princess suspects. She looks at me differently now. If she flees to HIM, perhaps she will survive. I have done what I can."'
                    }
                },
                questions: [
                    'Who are "they"?',
                    'What "arrangement" bound him?',
                    'Who is "HIM" - Thornpaw? Someone else?',
                    'What did he do to help her?'
                ]
            },
            {
                id: 'ryan_vision',
                name: 'Ryan\'s Spirit Vision',
                status: 'NEW - UNVERIFIED',
                reliability: 'SUPERNATURAL',
                intel: 80,
                summary: 'The liberated Toad Ryan experienced fragmentary visions during Rakasha spirit-walking rites. Claims to have glimpsed the assassination.',
                testimony: {
                    public: 'Ryan describes seeing "a figure in white robes, their face hidden by hood and shadow. Peach stood defiant, not afraid. She KNEW this person. She said something - I couldn\'t hear the words - and then golden light, and then darkness."',
                    classified: {
                        intel: 95,
                        content: 'Under deeper trance, Ryan provided additional detail: "The killer removed their hood before the strike. Peach\'s expression changed - not to fear, but to SORROW. She said one word that sounded like a name. It began with \'M\' or \'Ma\'... The vision fractured. But I saw something else - a CHILD, hidden in shadows, WATCHING. A witness who escaped."'
                    }
                },
                questions: [
                    'Who wears white robes with authority in the castle?',
                    'A name beginning with "Ma" - Magikoopa? Marcus? Margrave?',
                    'Was there a child witness? Are they still alive?',
                    'Can the vision be clarified through deeper rituals?'
                ]
            },
            {
                id: 'silvercap',
                name: 'Captain Silvercap',
                status: 'MISSING - PRESUMED ALIVE',
                reliability: 'UNKNOWN',
                intel: 65,
                summary: 'The captain of Peach\'s personal guard. Disappeared three months after the assassination. Body never found.',
                testimony: {
                    public: 'Silvercap\'s last known statement was to a tavern keeper: "They\'re going to kill me like they killed her. But I won\'t make it easy. I know where the evidence is buried."',
                    classified: {
                        intel: 80,
                        content: 'Loyalist intelligence tracked Silvercap to Rogueport in 956, then lost him. Recent reports suggest someone matching his description - now elderly - has been seen in the company of the Pianta Syndicate. He may have traded his knowledge for protection. Operation SILVERHUNT is being planned.'
                    }
                },
                questions: [
                    'Is he still alive after 85 years?',
                    'What evidence did he bury?',
                    'Why hasn\'t he come forward?',
                    'Can he be extracted from Pianta protection?'
                ]
            }
        ],
        
        suspectProfiles: [
            {
                id: 'regency_council',
                name: 'The Regency Council',
                suspicion: 45,
                intel: 50,
                motive: 'They have held power for 85 years. They had the most to gain and the means to arrange it.',
                evidence_for: [
                    'Toadsworth Sr.\'s journal admissions',
                    'Guard rotation manipulation',
                    'Subsequent suppression of investigation',
                    'Elimination of House Goldcap'
                ],
                evidence_against: [
                    'Many current members were children in 955',
                    'Regency life has been constant warfare - hardly a benefit',
                    'No direct evidence of specific individuals'
                ],
                classified: {
                    intel: 80,
                    content: 'The original Regency Council of 955 included seven members. All are now dead. Three died of natural causes. Three died in "accidents." One - Lord Portobello - was assassinated by unknown parties in 980. Before his death, he tried to contact the nascent Loyalist movement. He was silenced before he could speak.'
                }
            },
            {
                id: 'koopa_troop',
                name: 'Koopa Troop',
                suspicion: 15,
                intel: 25,
                motive: 'Official narrative: eliminate the beloved princess to destabilize the kingdom for conquest.',
                evidence_for: [
                    'Koopa dagger at the scene',
                    'History of conflict with the kingdom',
                    'Bowser\'s obsession with Peach'
                ],
                evidence_against: [
                    'Bowser consistently denies involvement',
                    'Dagger was too convenient - likely planted',
                    'No strategic benefit - the war has been HARDER since',
                    'Bowser\'s obsession suggests he wanted Peach alive'
                ],
                classified: {
                    intel: 70,
                    content: 'Kamek\'s private assessments, obtained through Boo Court intelligence sharing, confirm that Bowser was DEVASTATED by Peach\'s death. He launched three separate investigations to find the true killer. All three investigation teams were killed before reporting back - by unknown parties. Bowser believes he was framed by the same faction that killed Peach.'
                }
            },
            {
                id: 'beanbean',
                name: 'Beanbean Kingdom',
                suspicion: 25,
                intel: 55,
                motive: 'If the secret betrothal existed, breaking it could prevent a powerful alliance. Or claiming the throne through it could be the goal.',
                evidence_for: [
                    'Rumored secret betrothal contract',
                    'Prince Peasley\'s suspicious movements',
                    'Bean diplomats were in the castle that month'
                ],
                evidence_against: [
                    'No obvious motive for murder over diplomacy',
                    'Beanbean and Mushroom have been historical allies',
                    'Queen Bean has cooperated with investigations'
                ],
                classified: {
                    intel: 85,
                    content: 'The betrothal contract fragment recovered mentions a THIRD PARTY as witness and guarantor. The name is partially legible: "...archduke of the Eternal..." There is no Archduke in either kingdom. This suggests involvement of a power we have not yet identified - possibly supernatural, possibly from another realm entirely.'
                }
            },
            {
                id: 'unknown_faction',
                name: 'Unknown Mastermind',
                suspicion: 40,
                intel: 65,
                motive: 'Unknown. Someone operating behind all visible factions.',
                evidence_for: [
                    'Multiple factions have been manipulated',
                    'Evidence of long-term planning',
                    'Convenient elimination of witnesses across all groups',
                    'Ryan\'s vision of an unidentified killer'
                ],
                evidence_against: [
                    'No direct evidence of such a figure',
                    'Could be paranoid pattern-matching'
                ],
                classified: {
                    intel: 95,
                    content: 'Pattern analysis across 85 years reveals a disturbing consistency: every time a faction gets close to the truth, they suffer a catastrophic setback. The Loyalists lose key operatives. Koopa investigations are wiped out. Regency members who show signs of conscience die. Someone is MAINTAINING the war. Someone BENEFITS from endless conflict. Who gains from a kingdom in perpetual chaos? Who has operated unseen for nearly a century? The only faction with confirmed supernatural longevity and unknown motivations is... the Star Spirits. But they are supposed to be benevolent. Aren\'t they?'
                }
            }
        ],
        
        openQuestions: [
            {
                id: 'killer_identity',
                question: 'Who killed Princess Peach?',
                priority: 'CRITICAL',
                status: 'UNRESOLVED',
                intel: 30,
                theories: [
                    { theory: 'Regency Council conspiracy', probability: 35, intel: 50 },
                    { theory: 'Unknown third party', probability: 30, intel: 65 },
                    { theory: 'Beanbean political assassination', probability: 15, intel: 55 },
                    { theory: 'Koopa Troop (official)', probability: 10, intel: 15 },
                    { theory: 'Supernatural entity', probability: 10, intel: 90 }
                ],
                latestLead: 'Ryan\'s vision suggests the killer was known to Peach and wore white robes.'
            },
            {
                id: 'peach_child',
                question: 'Did Princess Peach have a child?',
                priority: 'CRITICAL',
                status: 'UNCONFIRMED',
                intel: 75,
                theories: [
                    { theory: 'No child - relationships were barren', probability: 40, intel: 50 },
                    { theory: 'Child with Thornpaw, hidden among Rakasha', probability: 30, intel: 85 },
                    { theory: 'Child exists, identity unknown', probability: 20, intel: 80 },
                    { theory: 'Child witnessed the murder (Ryan\'s vision)', probability: 10, intel: 95 }
                ],
                latestLead: 'Fragment 7-Alpha explicitly mentions "my child." The "Star-Touched" blood type found at the scene could belong to offspring.'
            },
            {
                id: 'goldcap_survivor',
                question: 'Did Lord Jasper Goldcap survive?',
                priority: 'HIGH',
                status: 'POSSIBLE',
                intel: 60,
                theories: [
                    { theory: 'Died in the massacre, body lost', probability: 50, intel: 40 },
                    { theory: 'Escaped, living under false identity', probability: 35, intel: 70 },
                    { theory: 'Rescued by unknown party', probability: 15, intel: 75 }
                ],
                latestLead: 'Jasper was 12 at the time. He would be 70 now. A man matching his aged appearance was reportedly seen in Sarasaland court circles.'
            },
            {
                id: 'fawful_discovery',
                question: 'What did Fawful find in Peach\'s Castle?',
                priority: 'CRITICAL',
                status: 'UNKNOWN',
                intel: 55,
                theories: [
                    { theory: 'Royal treasury and artifacts only', probability: 30, intel: 40 },
                    { theory: 'Secret correspondence archive', probability: 35, intel: 55 },
                    { theory: 'Evidence related to the assassination', probability: 25, intel: 70 },
                    { theory: 'Something supernatural and dangerous', probability: 10, intel: 80 }
                ],
                latestLead: 'Fawful\'s behavior has changed since taking the castle. He has become more secretive, more defensive. He is protecting something.'
            },
            {
                id: 'bowser_innocence',
                question: 'Was Bowser framed?',
                priority: 'HIGH',
                status: 'INCREASINGLY LIKELY',
                intel: 45,
                theories: [
                    { theory: 'Bowser ordered it (official narrative)', probability: 15, intel: 15 },
                    { theory: 'Completely framed, no involvement', probability: 55, intel: 50 },
                    { theory: 'Knows who did it, staying silent', probability: 20, intel: 65 },
                    { theory: 'Was manipulated by a third party', probability: 10, intel: 75 }
                ],
                latestLead: 'Kamek\'s private files confirm Bowser launched his own investigations. All investigators were killed by unknown parties - not by Bowser.'
            },
            {
                id: 'the_arrangement',
                question: 'What was "the arrangement" Toadsworth Sr. mentioned?',
                priority: 'HIGH',
                status: 'UNKNOWN',
                intel: 75,
                theories: [
                    { theory: 'Regency power-sharing deal', probability: 30, intel: 60 },
                    { theory: 'Secret society or cabal', probability: 35, intel: 80 },
                    { theory: 'Foreign power influence agreement', probability: 20, intel: 70 },
                    { theory: 'Supernatural pact', probability: 15, intel: 90 }
                ],
                latestLead: 'The journals mention "oaths older than my loyalty to the crown" - suggesting something predating Toadsworth\'s service, possibly hereditary.'
            }
        ]
    },

    // =========================================
    // DETAILED TIMELINE
    // =========================================
    timeline: {
        eras: [
            { id: 'founding', name: 'Dynasty Founding', start: 400, end: 500 },
            { id: 'golden', name: 'Golden Age', start: 500, end: 900 },
            { id: 'decline', name: 'The Decline', start: 900, end: 955 },
            { id: 'war', name: 'Civil War Era', start: 955, end: 1040 },
            { id: 'crisis', name: 'Current Crisis', start: 1040, end: 1041 }
        ],
        
        events: [
            // Founding Era
            {
                year: 412,
                title: 'House Toadstool Founded',
                category: 'political',
                critical: true,
                intel: 30,
                description: 'The first Toadstool monarch unifies the Mushroom tribes.',
                details: 'King Toadstool I, originally a tribal chieftain, united seven warring Toad clans through a combination of diplomacy and force. He established the capital at what would become Toad Town.'
            },
            {
                year: 450,
                title: 'The Star Spirit Compact',
                category: 'supernatural',
                critical: true,
                intel: 60,
                description: 'The Toadstool dynasty forms a sacred pact with the Star Spirits.',
                details: 'In exchange for the Star Spirits\' blessing and protection, the Toadstool line agreed to serve as "Guardians of the Worldly Realm." The exact terms of this compact have been lost to history.',
                classified: {
                    intel: 90,
                    content: 'The compact included a clause about "maintaining the balance between realms." Some scholars believe breaking this balance would void the Star Spirits\' protection. Did Peach\'s relationship with a Rakasha - a being from the spirit realm - violate this compact?'
                }
            },
            
            // Golden Age
            {
                year: 650,
                title: 'The Koopa Treaties',
                category: 'diplomatic',
                critical: false,
                intel: 35,
                description: 'First formal peace treaties between Mushroom Kingdom and Koopa clans.',
                details: 'A period of relative peace lasting nearly 200 years. The ceremonial dagger later used to frame Bowser was a gift from this era.'
            },
            
            // Decline
            {
                year: 905,
                title: 'King Toadstool IV Crowned',
                category: 'political',
                critical: false,
                intel: 20,
                description: 'Peach\'s father takes the throne.',
                details: 'His reign was marked by expansion and prosperity, but also the seeds of future conflict.'
            },
            {
                year: 915,
                title: 'Princess Peach Born',
                category: 'political',
                critical: true,
                intel: 10,
                description: 'The heir to the Toadstool dynasty is born.',
                details: 'Celebrations lasted a week. The Star Spirits themselves are said to have blessed her cradle.'
            },
            {
                year: 935,
                title: 'Queen Dahlia Dies',
                category: 'political',
                critical: false,
                intel: 25,
                description: 'Peach\'s mother succumbs to Wilting Fever.',
                details: 'Some historians note the disease was unusually aggressive. Poisoning was suspected but never proven.'
            },
            {
                year: 940,
                title: 'King Toadstool IV Dies',
                category: 'political',
                critical: true,
                intel: 20,
                description: 'The King dies. Peach should be crowned.',
                details: 'Coronation is scheduled but repeatedly delayed due to "security concerns" and emerging Koopa threats.'
            },
            {
                year: 942,
                title: 'First Bowser War',
                category: 'military',
                critical: true,
                intel: 15,
                description: 'Bowser launches his first major campaign.',
                details: 'The beginning of the kidnapping attempts. Peach\'s coronation indefinitely postponed.'
            },
            {
                year: 950,
                title: 'Peach Meets Thornpaw',
                category: 'classified',
                critical: true,
                intel: 70,
                description: 'The Princess begins a secret relationship with the Rakasha chief.',
                details: 'According to Thornpaw, they met during diplomatic negotiations regarding Rakasha hunting rights in the Darkwood Forest.',
                classified: {
                    intel: 85,
                    content: 'Thornpaw claims their relationship was more than romantic - it was spiritual. The Rakasha recognized Peach as a "Bridge-Walker" - someone capable of perceiving both the physical and spirit realms. This is extraordinarily rare in non-Rakasha.'
                }
            },
            {
                year: 953,
                title: 'The Secret Betrothal?',
                category: 'classified',
                critical: true,
                intel: 80,
                description: 'Alleged betrothal contract signed with Beanbean Kingdom.',
                details: 'If authentic, this would have united two kingdoms and potentially ended the Koopa conflicts through combined strength.',
                classified: {
                    intel: 90,
                    content: 'The contract fragment mentions a third party guarantor - the "Archduke of the Eternal." This title does not exist in any known kingdom. Who or what was guaranteeing this marriage?'
                }
            },
            
            // The Assassination and Aftermath
            {
                year: 955, month: 5, day: 15,
                title: 'Peach Sends Thornpaw Away',
                category: 'classified',
                critical: true,
                intel: 85,
                description: 'Two weeks before her death, Peach sends Thornpaw back to his people.',
                details: 'Thornpaw says she was acting strangely - giving away personal items, writing extensively, meeting with people in secret.',
                classified: {
                    intel: 95,
                    content: 'Thornpaw believes Peach knew she was going to die. She gave him a locket containing a lock of hair - not hers, but a child\'s. She said: "If I do not survive what is coming, find the old grove. Protect what I have hidden there."'
                }
            },
            {
                year: 955, month: 6, day: 1,
                title: 'PRINCESS PEACH ASSASSINATED',
                category: 'assassination',
                critical: true,
                intel: 10,
                description: 'The Princess is found dead in her chambers. The kingdom fractures.',
                details: 'Official cause of death: stabbing. Reality: likely magical attack with post-mortem blade wounds to create false evidence.'
            },
            {
                year: 955, month: 6, day: 5,
                title: 'Koopa Troop Officially Blamed',
                category: 'political',
                critical: true,
                intel: 15,
                description: 'The Regency Council announces Bowser\'s guilt.',
                details: 'No trial, no investigation. Just declaration and war.'
            },
            {
                year: 955, month: 6, day: 30,
                title: 'Mushroom Regency Established',
                category: 'political',
                critical: true,
                intel: 15,
                description: 'Council of nobles assumes emergency power.',
                details: 'Temporary measure that has lasted 85 years.'
            },
            {
                year: 956, month: 3,
                title: 'Captain Silvercap Disappears',
                category: 'classified',
                critical: false,
                intel: 65,
                description: 'The captain of Peach\'s guard vanishes.',
                details: 'Last seen heading toward Rogueport. Declared dead but body never found.'
            },
            {
                year: 980,
                title: 'Peach Loyalists Founded',
                category: 'political',
                critical: true,
                intel: 20,
                description: 'Resistance movement forms around survivors who doubt the official story.',
                details: 'Captain Toadette\'s grandmother was among the founders.'
            },
            {
                year: 982, month: 8, day: 15,
                title: 'Night of Falling Stars',
                category: 'assassination',
                critical: true,
                intel: 50,
                description: 'House Goldcap is massacred. Blamed on Koopa raiders.',
                details: 'The strongest cadet branch with the best claim to the throne is eliminated in a single night.',
                classified: {
                    intel: 75,
                    content: 'Evidence suggests the attack came from INSIDE the Goldcap estate. Guards were drugged. Warning systems disabled. The "Koopa raiders" were never identified or captured. Young Lord Jasper\'s body was never found.'
                }
            },
            
            // Current Crisis
            {
                year: 1040, month: 5, day: 1,
                title: 'Fawful Seizes Peach\'s Castle',
                category: 'military',
                critical: true,
                intel: 15,
                description: 'The usurper takes the symbolic heart of the kingdom.',
                details: 'Regency forces routed. Fawful gains access to royal archives.'
            },
            {
                year: 1040, month: 6, day: 10,
                title: 'The Thornpaw Revelation',
                category: 'investigation',
                critical: true,
                intel: 50,
                description: 'At Fawful\'s gala, Chief Thornpaw reveals his relationship with Peach and the secret hatch.',
                details: 'The biggest breakthrough in the investigation in decades. But why now? What prompted Thornpaw to finally speak?'
            },
            {
                year: 1040, month: 6, day: 12,
                title: 'Loyalists Seize Toad Town',
                category: 'military',
                critical: true,
                intel: 15,
                description: 'Captain Toadette captures the capital and Chancellor Toadsworth.',
                details: 'The Regency collapses. Loyalist martial law declared.'
            },
            {
                year: 1040, month: 6, day: 17,
                title: 'Bramblehaven Massacre',
                category: 'military',
                critical: true,
                intel: 20,
                description: 'Loyalists capture Fawful\'s fortress. All prisoners executed.',
                details: 'War crimes investigation opened by Regal Empire. Fragment 7-Alpha recovered from Fawful\'s archives.'
            },
            {
                year: 1040, month: 6, day: 20,
                title: 'Ryan\'s Vision',
                category: 'investigation',
                critical: true,
                intel: 80,
                description: 'Liberated Toad experiences spirit vision of the assassination.',
                details: 'Describes a killer in white robes known to Peach, and a child witness who escaped.'
            },
            {
                year: 1040, month: 6, day: 21,
                title: 'Iron Mandate Enacted',
                category: 'political',
                critical: true,
                intel: 25,
                description: 'The Iron Legion\'s anti-magic directive becomes official.',
                details: 'All magical beings now subject to Legion authority. Magikoopas go underground.'
            },
            {
                year: 1040, month: 6, day: 21,
                title: 'Loyalist-Rakasha Alliance',
                category: 'diplomatic',
                critical: true,
                intel: 40,
                description: 'Mystivil completes the Xeos Ritual. Formal alliance sealed.',
                details: 'The Loyalists gain access to Rakasha spiritual resources and intelligence.'
            },
            {
                year: 1040, month: 6, day: 22,
                title: 'Operation HOMECOMING Active',
                category: 'classified',
                critical: true,
                intel: 75,
                description: 'Loyalist operatives infiltrate Peach\'s Castle.',
                details: 'Mission: locate the secret hatch and recover any hidden evidence.',
                classified: {
                    intel: 90,
                    content: 'Simultaneously, Operation SILVERHUNT is preparing to extract Captain Silvercap from Rogueport. Operation GROVE WALKER is being planned to investigate the Ancient Toadstool Grove. The Loyalists are closing in on multiple fronts.'
                }
            }
        ]
    }
};

// =============================================
// MAIN WAR ROOM CLASS
// =============================================

class WarRoomInterface {
    constructor() {
        this.container = null;
        this.activePanel = 'situation';
        this.intel = 50;
        this.factionStats = null;
    }

    // =========================================
    // INTEL & DATA METHODS
    // =========================================
closeModal() {
        const modal = this.container.querySelector('#war-room-modal');
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('active');
        }
    }

    openDetailModal(type, id) {
        let data = null;
        let color = '#00ff00'; // Default terminal green
        
        // Find the data based on type and ID
        if (type === 'royal') {
            data = WAR_DATA.dynasty.royalLine.find(x => x.id === id);
            color = '#E91E63';
        } else if (type === 'cadet') {
            data = WAR_DATA.dynasty.cadetBranches.find(x => x.id === id);
            color = '#FFC107';
        } else if (type === 'foreign') {
            data = WAR_DATA.dynasty.foreignClaimants.find(x => x.id === id);
            color = '#2196F3';
        }
        
        if (!data) return;

        // Build the Modal HTML
        const modalBody = this.container.querySelector('.modal-body');
        const modal = this.container.querySelector('#war-room-modal');
        
        if (modal && modalBody) {
            modalBody.innerHTML = `
                <div class="dossier-full-view" style="border-left: 4px solid ${color}">
                    <div class="dossier-header-full">
                        <h2>${data.name}</h2>
                        <span class="classification-stamp">CONFIDENTIAL</span>
                    </div>
                    
                    <div class="dossier-grid">
                        <div class="dossier-row">
                            <strong>Status:</strong> ${data.status || 'Unknown'}
                        </div>
                        ${data.reign ? `<div class="dossier-row"><strong>Reign:</strong> ${data.reign}</div>` : ''}
                        ${data.relationship ? `<div class="dossier-row"><strong>Relation:</strong> ${data.relationship}</div>` : ''}
                        
                        <hr class="dossier-divider">
                        
                        <div class="dossier-content">
                            <h3>SUMMARY</h3>
                            <p>${data.summary || data.notes || 'No summary available.'}</p>
                        </div>

                        ${data.legacy ? `
                        <div class="dossier-content">
                            <h3>LEGACY</h3>
                            <p>${data.legacy}</p>
                        </div>` : ''}

                        ${data.classified ? `
                        <div class="dossier-classified-section">
                            <div class="redacted-bar">CLASSIFIED INTELLIGENCE [L${data.classified.intel}]</div>
                            ${this.canAccess(data.classified.intel) 
                                ? `<p class="classified-text">${data.classified.text}</p>` 
                                : `<p class="locked-text">❌ INSUFFICIENT CLEARANCE. ACCESS DENIED.</p>`
                            }
                        </div>` : ''}
                    </div>
                </div>
            `;
            
            modal.classList.remove('hidden');
            modal.classList.add('active');
        }
    }
    getIntel() {
        if (state?.debugMode) return 100;
        
        // Try to get combined intel from multiple faction sources
        const sources = ['peach_loyalists', 'koopa_troop', 'mushroom_regency', 'fawful', 'civil_war'];
        let total = 0;
        let count = 0;
        
        if (typeof getIntelBreakdown === 'function') {
            sources.forEach(key => {
                const breakdown = getIntelBreakdown(key);
                if (breakdown?.total) {
                    total += breakdown.total;
                    count++;
                }
            });
        }
        
        if (count > 0) {
            return Math.round(total / count);
        }
        
        // Fallback
        return state?.intelLevels?.civil_war ?? 50;
    }

    canAccess(required) {
        return this.intel >= (required || 0);
    }

    loadFactionStats() {
        // Try to get real stats from the faction system
        if (typeof getRealTimeMapStats === 'function') {
            try {
                const stats = getRealTimeMapStats();
                this.factionStats = stats?.global || {};
            } catch (e) {
                console.warn('[WarRoom] Could not load faction stats:', e);
                this.factionStats = {};
            }
        }
    }

    getFactionPower(factionId) {
        if (!this.factionStats) return null;
        
        const aliases = {
            'loyalists': ['peach_loyalists', 'loyalists', 'peach-loyalists'],
            'regency': ['mushroom_regency', 'regency', 'mushroom-kingdom'],
            'fawful': ['fawful', 'fawful_forces', 'fawfuls_dominion'],
            'legion': ['iron_legion', 'legion', 'regal_empire'],
            'koopa': ['koopa_troop', 'koopa', 'bowser', 'dark_lands']
        };
        
        const keys = aliases[factionId] || [factionId];
        
        for (const key of keys) {
            if (this.factionStats[key]) {
                return this.factionStats[key];
            }
        }
        
        return null;
    }

    // =========================================
    // INITIALIZATION
    // =========================================

    init() {
        if (typeof loadState === 'function') {
            loadState();
        }
        
        this.intel = this.getIntel();
        this.loadFactionStats();
        
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

    // =========================================
    // MAIN RENDER
    // =========================================

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
                
                <!-- NEW: Detail Modal Container -->
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
        const { meta, victim } = WAR_DATA;
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
            { id: 'investigation', label: 'CASE FILE', icon: '🔍' },
            { id: 'evidence', label: 'EVIDENCE', icon: '📁' },
            { id: 'suspects', label: 'SUSPECTS', icon: '🎯' },
            { id: 'territory', label: 'TERRITORY', icon: '🗺️' },
            { id: 'projections', label: 'FORECASTS', icon: '📈' },
            { id: 'timeline', label: 'CHRONO', icon: '⏱️' }
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
        const odds = projections.getOdds(this.factionStats);
        
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
                        <p class="victim-summary">${victim.profile.substring(0, 150)}...</p>
                    </div>
                    
                    ${this.renderVictimSecrets()}
                </div>
                
                <div class="sidebar-section momentum-tracker">
                    <h4>MOMENTUM</h4>
                    <div class="momentum-leader">
                        <span class="leader-icon">🌸</span>
                        <span class="leader-name">${projections.frontrunner}</span>
                    </div>
                    <div class="momentum-bar">
                        <div class="momentum-fill" style="width: ${projections.confidence}%"></div>
                    </div>
                    <span class="momentum-confidence">${projections.confidence}% confidence</span>
                </div>
                
                <div class="sidebar-section quick-odds">
                    <h4>VICTORY ODDS</h4>
                    ${odds.slice(0, 5).map(o => `
                        <div class="odds-row">
                            <span class="odds-faction">${o.icon} ${o.faction.split(' ')[0]}</span>
                            <span class="odds-value">${o.chance}%</span>
                            <span class="odds-trend ${o.trend.includes('+') ? 'up' : o.trend.includes('-') ? 'down' : ''}">${o.trend}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="sidebar-section alert-feed">
                    <h4>PRIORITY ALERTS</h4>
                    <div class="alert-item critical">
                        <span class="alert-icon">🚨</span>
                        <span class="alert-text">Chancellor captured - Day 10</span>
                    </div>
                    <div class="alert-item warning">
                        <span class="alert-icon">⚠️</span>
                        <span class="alert-text">Iron Mandate active</span>
                    </div>
                    <div class="alert-item info">
                        <span class="alert-icon">📡</span>
                        <span class="alert-text">Op HOMECOMING active</span>
                    </div>
                    ${this.canAccess(75) ? `
                        <div class="alert-item classified">
                            <span class="alert-icon">🔒</span>
                            <span class="alert-text">Op SILVERHUNT planning</span>
                        </div>
                    ` : ''}
                </div>
            </aside>
        `;
    }

    renderVictimSecrets() {
        const { victim } = WAR_DATA;
        const accessibleSecrets = victim.secrets.filter(s => this.canAccess(s.intel));
        
        if (accessibleSecrets.length === 0) {
            return `
                <div class="victim-secrets locked">
                    <span class="secrets-lock">🔒</span>
                    <span class="secrets-text">Classified intel locked</span>
                </div>
            `;
        }
        
        return `
            <div class="victim-secrets">
                <h4>CLASSIFIED INTEL</h4>
                ${accessibleSecrets.map(s => `
                    <div class="secret-item" data-intel="${s.intel}">
                        <span class="secret-level">L${s.intel}</span>
                        <span class="secret-text">${s.text}</span>
                    </div>
                `).join('')}
                ${victim.secrets.length > accessibleSecrets.length ? `
                    <div class="secrets-more">
                        +${victim.secrets.length - accessibleSecrets.length} more at higher clearance
                    </div>
                ` : ''}
            </div>
        `;
    }

    renderPanel() {
        switch (this.activePanel) {
            case 'situation': return this.renderSituation();
            case 'factions': return this.renderFactions();
            case 'dynasty': return this.renderDynasty();
            case 'investigation': return this.renderInvestigation();
            case 'evidence': return this.renderEvidence();
            case 'suspects': return this.renderSuspects();
            case 'territory': return this.renderTerritory();
            case 'projections': return this.renderProjections();
            case 'timeline': return this.renderTimeline();
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
    // PANEL: SITUATION
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
                        <p>The 85-year civil war has entered its most critical phase. The assassination of Princess Peach in 955 remains unsolved, but new evidence is emerging faster than at any point in history.</p>
                        <p><strong>Key Development:</strong> Chief Thornpaw's revelation of the secret hatch has opened new investigative avenues. Combined with Fragment 7-Alpha's mention of "my child" and Ryan's spirit vision of a child witness, we may be approaching a breakthrough.</p>
                        <p class="sitrep-warning">⚠️ The central question remains: <strong>Who killed Princess Peach, and why?</strong></p>
                    </div>
                    
                    <div class="sitrep-block faction-status">
                        <h3>FACTION STATUS</h3>
                        <div class="status-grid">
                            ${factions.map(f => this.renderFactionStatusCard(f)).join('')}
                        </div>
                    </div>
                    
                    <div class="sitrep-block power-balance">
                        <h3>POWER PROJECTION</h3>
                        ${this.renderPowerBars()}
                    </div>
                    
                    <div class="sitrep-block recent-events">
                        <h3>RECENT EVENTS</h3>
                        <div class="events-list">
                            ${this.renderRecentEvents()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderFactionStatusCard(faction) {
        // Try to get real stats
        const realStats = this.getFactionPower(faction.id);
        const military = realStats?.military || faction.power.military;
        const territory = realStats?.activeRegions ? realStats.activeRegions * 5 : faction.power.territory;
        
        return `
            <div class="faction-status-card" style="--faction-color: ${faction.color}">
                <span class="fsc-icon">${faction.icon}</span>
                <div class="fsc-info">
                    <span class="fsc-name">${faction.shortName}</span>
                    <span class="fsc-status">${faction.status}</span>
                </div>
                <div class="fsc-stats">
                    <span class="fsc-stat">⚔️${military}</span>
                    <span class="fsc-stat">🌍${territory}%</span>
                </div>
                <span class="fsc-trend ${faction.trend.toLowerCase()}">${faction.trend}</span>
            </div>
        `;
    }

    renderPowerBars() {
        const { factions } = WAR_DATA;
        
        return `
            <div class="power-bars">
                ${factions.map(f => {
                    const realStats = this.getFactionPower(f.id);
                    const military = realStats?.military || f.power.military;
                    const maxMilitary = 100;
                    
                    return `
                        <div class="power-row">
                            <span class="power-label">${f.icon} ${f.shortName}</span>
                            <div class="power-bar-container">
                                <div class="power-bar" style="width: ${(military / maxMilitary) * 100}%; background: ${f.color}"></div>
                            </div>
                            <span class="power-value">${military}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    renderRecentEvents() {
        const { factions } = WAR_DATA;
        const allEvents = factions.flatMap(f => 
            f.recentActions.map(a => ({...a, faction: f}))
        ).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 8);
        
        return allEvents.map(e => `
            <div class="event-item">
                <span class="event-icon" style="color: ${e.faction.color}">${e.faction.icon}</span>
                <span class="event-text">${e.action}</span>
                <span class="event-date">${e.date}</span>
            </div>
        `).join('');
    }

    // =========================================
    // PANEL: FACTIONS
    // =========================================

    renderFactions() {
        const { factions } = WAR_DATA;
        
        return `
            <div class="panel factions-panel">
                <div class="panel-header">
                    <h2>FACTION ANALYSIS</h2>
                </div>
                
                <div class="factions-grid">
                    ${factions.filter(f => this.canAccess(f.intel)).map(f => this.renderFactionDossier(f)).join('')}
                </div>
            </div>
        `;
    }

    renderFactionDossier(faction) {
        const realStats = this.getFactionPower(faction.id);
        
        return `
            <article class="faction-dossier" style="--faction-color: ${faction.color}">
                <div class="dossier-header">
                    <div class="dossier-icon">${faction.icon}</div>
                    <div class="dossier-title">
                        <h3>${faction.name}</h3>
                        <span class="dossier-leader">${faction.leader}</span>
                    </div>
                    <div class="dossier-status ${faction.trend.toLowerCase()}">${faction.status}</div>
                </div>
                
                <p class="dossier-summary">${faction.summary}</p>
                
                <div class="dossier-metrics">
                    <div class="metric">
                        <span class="metric-label">Territory</span>
                        <div class="metric-bar"><div class="metric-fill" style="width: ${realStats?.activeRegions ? realStats.activeRegions * 5 : faction.power.territory}%"></div></div>
                        <span class="metric-value">${realStats?.activeRegions ? realStats.activeRegions * 5 : faction.power.territory}%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Military</span>
                        <div class="metric-bar"><div class="metric-fill" style="width: ${realStats?.military || faction.power.military}%"></div></div>
                        <span class="metric-value">${realStats?.military || faction.power.military}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Political</span>
                        <div class="metric-bar"><div class="metric-fill" style="width: ${realStats?.political || faction.power.political}%"></div></div>
                        <span class="metric-value">${realStats?.political || faction.power.political}</span>
                    </div>
                </div>
                
                <div class="dossier-analysis">
                    <div class="analysis-col">
                        <h4>STRENGTHS</h4>
                        <ul>${faction.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
                    </div>
                    <div class="analysis-col">
                        <h4>WEAKNESSES</h4>
                        <ul>${faction.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>
                    </div>
                </div>
            </article>
        `;
    }

    // =========================================
    // PANEL: DYNASTY
    // =========================================

    renderDynasty() {
        const { dynasty } = WAR_DATA;
        
        return `
            <div class="panel dynasty-panel">
                <div class="panel-header">
                    <h2>BLOODLINE ANALYSIS</h2>
                    <span class="dynasty-motto">"${dynasty.motto}"</span>
                </div>
                
                <div class="dynasty-overview">
                    <div class="dynasty-crest">
                        <span class="crest-icon">${dynasty.symbol}</span>
                        <h3>${dynasty.name}</h3>
                        <span class="dynasty-status">${dynasty.status}</span>
                    </div>
                </div>
                
                <section class="bloodline-section">
                    <h3>DIRECT ROYAL LINE</h3>
                    <div class="royal-line">
                        ${dynasty.royalLine.map(r => `
                            <!-- ADDED: interactive class and data-id -->
                            <div class="royal-member interactive ${r.status}" data-type="royal" data-id="${r.id}">
                                <span class="member-icon">${r.icon}</span>
                                <div class="member-info">
                                    <span class="member-name">${r.name}</span>
                                    <span class="member-title">${r.relation || r.reign}</span>
                                </div>
                                <span class="member-status">${r.status.toUpperCase()}</span>
                                <span class="click-hint">UNKNOWN DETECTED // CLICK FOR DETAILS</span>
                            </div>
                        `).join('')}
                    </div>
                </section>
                
                <section class="bloodline-section">
                    <h3>CADET BRANCHES</h3>
                    <div class="branches-grid">
                        ${dynasty.cadetBranches.filter(b => this.canAccess(b.intel)).map(b => `
                            <!-- ADDED: interactive class and data-id -->
                            <div class="branch-card interactive ${b.status.toLowerCase()}" data-type="cadet" data-id="${b.id}">
                                <div class="branch-header">
                                    <span class="branch-name">${b.name}</span>
                                    <span class="branch-status">${b.status}</span>
                                </div>
                                <div class="branch-claim">
                                    <span>Claim Strength:</span>
                                    <div class="claim-dots">
                                        ${[1,2,3,4,5].map(i => `<span class="claim-dot ${i <= b.claimStrength ? 'filled' : ''}"></span>`).join('')}
                                    </div>
                                </div>
                                <p class="branch-head">Head: ${b.currentHead}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
                
                <!-- Keep Foreign Claimants and Hidden Heirs logic here (omitted for brevity, similar pattern) -->
                ${this.renderForeignClaimants(dynasty)}
            </div>
        `;
    }

    // Helper for above to keep code clean
    renderForeignClaimants(dynasty) {
         return `
            <section class="bloodline-section">
                <h3>FOREIGN CLAIMANTS</h3>
                <div class="claimants-grid">
                    ${dynasty.foreignClaimants.filter(c => this.canAccess(c.intel)).map(c => `
                        <div class="claimant-card interactive" data-type="foreign" data-id="${c.id}">
                            <div class="claimant-header">
                                <span class="claimant-name">${c.name}</span>
                                <span class="claimant-kingdom">${c.kingdom}</span>
                            </div>
                            <div class="claimant-details">
                                <span><strong>Relation:</strong> ${c.relationship}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
         `;
    }

    renderHiddenHeirs() {
        return `
            <section class="bloodline-section classified">
                <h3>🔒 CLASSIFIED: HIDDEN HEIR ANALYSIS</h3>
                
                <div class="hidden-heirs-grid">
                    <div class="heir-theory">
                        <h4>Theory: Peach-Thornpaw Child</h4>
                        <div class="theory-probability">
                            <span class="prob-label">Probability:</span>
                            <div class="prob-bar"><div class="prob-fill" style="width: 35%"></div></div>
                            <span class="prob-value">35%</span>
                        </div>
                        <p>Fragment 7-Alpha explicitly mentions "my child." The Star-Touched blood at the scene could belong to offspring of Peach and Thornpaw.</p>
                        ${this.canAccess(85) ? `
                            <div class="theory-classified">
                                <span class="classified-badge">L85</span>
                                <p>Thornpaw gave Peach a locket containing a child's hair before she died. He was told to "find the old grove" and "protect what I have hidden there."</p>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="heir-theory">
                        <h4>Theory: Goldcap Survivor</h4>
                        <div class="theory-probability">
                            <span class="prob-label">Probability:</span>
                            <div class="prob-bar"><div class="prob-fill" style="width: 30%"></div></div>
                            <span class="prob-value">30%</span>
                        </div>
                        <p>Lord Jasper Goldcap was 12 during the Night of Falling Stars. His body was never recovered. He would be 70 now.</p>
                        ${this.canAccess(80) ? `
                            <div class="theory-classified">
                                <span class="classified-badge">L80</span>
                                <p>A man matching Jasper's aged appearance was spotted in Sarasaland court circles. Princess Daisy may be sheltering a legitimate Toadstool heir.</p>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="heir-theory">
                        <h4>Theory: Child Witness</h4>
                        <div class="theory-probability">
                            <span class="prob-label">Probability:</span>
                            <div class="prob-bar"><div class="prob-fill" style="width: 25%"></div></div>
                            <span class="prob-value">25%</span>
                        </div>
                        <p>Ryan's spirit vision described a child watching the assassination from the shadows - and escaping. Could this child still be alive?</p>
                        ${this.canAccess(95) ? `
                            <div class="theory-classified">
                                <span class="classified-badge">L95</span>
                                <p>If the child witness was Peach's own child, they would be the legitimate heir AND the only direct witness to the murder. Finding them is the highest priority.</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </section>
        `;
    }

    // =========================================
    // PANEL: INVESTIGATION
    // =========================================

    renderInvestigation() {
        const { investigation } = WAR_DATA;
        
        return `
            <div class="panel investigation-panel">
                <div class="panel-header">
                    <h2>CASE FILE: ASSASSINATION OF PRINCESS PEACH</h2>
                    <span class="case-number">${investigation.caseNumber} | ${investigation.status}</span>
                </div>
                
                <div class="case-summary">
                    <div class="case-stat">
                        <span class="case-stat-value">85</span>
                        <span class="case-stat-label">Years Open</span>
                    </div>
                    <div class="case-stat">
                        <span class="case-stat-value">${investigation.physicalEvidence.length}</span>
                        <span class="case-stat-label">Evidence Items</span>
                    </div>
                    <div class="case-stat">
                        <span class="case-stat-value">${investigation.witnessTestimony.length}</span>
                        <span class="case-stat-label">Witnesses</span>
                    </div>
                    <div class="case-stat">
                        <span class="case-stat-value">${investigation.openQuestions.length}</span>
                        <span class="case-stat-label">Open Questions</span>
                    </div>
                </div>
                
                <div class="investigation-grid">
                    <section class="case-section">
                        <h3>OPEN QUESTIONS</h3>
                        <div class="questions-list">
                            ${investigation.openQuestions.filter(q => this.canAccess(q.intel)).map(q => `
                                <div class="question-card ${q.priority.toLowerCase()}">
                                    <div class="question-header">
                                        <span class="question-priority">${q.priority}</span>
                                        <span class="question-status">${q.status}</span>
                                    </div>
                                    <h4 class="question-text">${q.question}</h4>
                                    <div class="question-theories">
                                        ${q.theories.filter(t => this.canAccess(t.intel)).map(t => `
                                            <div class="theory-row">
                                                <span class="theory-name">${t.theory}</span>
                                                <div class="theory-prob-mini">
                                                    <div class="prob-fill-mini" style="width: ${t.probability}%"></div>
                                                </div>
                                                <span class="theory-percent">${t.probability}%</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                    <p class="question-lead"><strong>Latest:</strong> ${q.latestLead}</p>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                </div>
            </div>
        `;
    }

    // =========================================
    // PANEL: EVIDENCE
    // =========================================

    renderEvidence() {
        const { investigation } = WAR_DATA;
        
        return `
            <div class="panel evidence-panel">
                <div class="panel-header">
                    <h2>EVIDENCE REPOSITORY</h2>
                </div>
                
                <section class="evidence-section">
                    <h3>PHYSICAL EVIDENCE</h3>
                    <div class="evidence-cards">
                        ${investigation.physicalEvidence.filter(e => this.canAccess(e.intel)).map(e => this.renderEvidenceCard(e)).join('')}
                    </div>
                </section>
                
                <section class="evidence-section">
                    <h3>WITNESS TESTIMONY</h3>
                    <div class="testimony-cards">
                        ${investigation.witnessTestimony.filter(t => this.canAccess(t.intel)).map(t => this.renderTestimonyCard(t)).join('')}
                    </div>
                </section>
            </div>
        `;
    }

    renderEvidenceCard(evidence) {
        return `
            <div class="evidence-card ${evidence.status.toLowerCase().replace(/\s/g, '-')}">
                <div class="evidence-header">
                    <span class="evidence-status">${evidence.status}</span>
                    <span class="evidence-date">${this.formatDate(evidence.discovered)}</span>
                </div>
                <h4>${evidence.name}</h4>
                <p class="evidence-summary">${evidence.summary}</p>
                <p class="evidence-details">${evidence.details}</p>
                <div class="evidence-implications">
                    <strong>Implications:</strong>
                    <ul>${evidence.implications.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
                ${evidence.classified && this.canAccess(evidence.classified.intel) ? `
                    <div class="evidence-classified">
                        <span class="classified-badge">L${evidence.classified.intel}</span>
                        <p>${evidence.classified.content}</p>
                    </div>
                ` : evidence.classified ? `
                    <div class="evidence-locked">
                        🔒 Classified analysis requires L${evidence.classified.intel}
                    </div>
                ` : ''}
                <span class="evidence-source">Source: ${evidence.source}</span>
            </div>
        `;
    }

    renderTestimonyCard(testimony) {
        return `
            <div class="testimony-card ${testimony.status.toLowerCase().replace(/\s/g, '-')}">
                <div class="testimony-header">
                    <h4>${testimony.name}</h4>
                    <span class="testimony-status">${testimony.status}</span>
                </div>
                <span class="testimony-reliability">Reliability: ${testimony.reliability}</span>
                <p class="testimony-summary">${testimony.summary}</p>
                
                <div class="testimony-content">
                    <p>${testimony.testimony.public}</p>
                </div>
                
                ${testimony.testimony.classified && this.canAccess(testimony.testimony.classified.intel) ? `
                    <div class="testimony-classified">
                        <span class="classified-badge">L${testimony.testimony.classified.intel}</span>
                        <p>${testimony.testimony.classified.content}</p>
                    </div>
                ` : ''}
                
                <div class="testimony-questions">
                    <strong>Outstanding Questions:</strong>
                    <ul>${testimony.questions.map(q => `<li>${q}</li>`).join('')}</ul>
                </div>
            </div>
        `;
    }

    // =========================================
    // PANEL: SUSPECTS
    // =========================================

    renderSuspects() {
        const { investigation } = WAR_DATA;
        
        return `
            <div class="panel suspects-panel">
                <div class="panel-header">
                    <h2>SUSPECT ANALYSIS</h2>
                </div>
                
                <div class="suspects-grid">
                    ${investigation.suspectProfiles.filter(s => this.canAccess(s.intel)).map(s => `
                        <div class="suspect-card">
                            <div class="suspect-header">
                                <h4>${s.name}</h4>
                                <div class="suspicion-meter">
                                    <span class="suspicion-label">Suspicion:</span>
                                    <div class="suspicion-bar">
                                        <div class="suspicion-fill" style="width: ${s.suspicion}%"></div>
                                    </div>
                                    <span class="suspicion-value">${s.suspicion}%</span>
                                </div>
                            </div>
                            
                            <p class="suspect-motive"><strong>Motive:</strong> ${s.motive}</p>
                            
                            <div class="suspect-evidence">
                                <div class="evidence-col for">
                                    <h5>Evidence For</h5>
                                    <ul>${s.evidence_for.map(e => `<li>${e}</li>`).join('')}</ul>
                                </div>
                                <div class="evidence-col against">
                                    <h5>Evidence Against</h5>
                                    <ul>${s.evidence_against.map(e => `<li>${e}</li>`).join('')}</ul>
                                </div>
                            </div>
                            
                            ${s.classified && this.canAccess(s.classified.intel) ? `
                                <div class="suspect-classified">
                                    <span class="classified-badge">L${s.classified.intel}</span>
                                    <p>${s.classified.content}</p>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // =========================================
    // PANEL: TERRITORY
    // =========================================

    renderTerritory() {
        const { territories, factions } = WAR_DATA;
        
        const getController = (id) => {
            if (id === 'contested') return { name: 'CONTESTED', color: '#FFA500', icon: '⚡', shortName: 'CONTESTED' };
            if (id === 'neutral') return { name: 'NEUTRAL', color: '#888', icon: '⚖️', shortName: 'NEUTRAL' };
            return factions.find(f => f.id === id) || { name: 'Unknown', color: '#333', icon: '?', shortName: '?' };
        };
        
        return `
            <div class="panel territory-panel">
                <div class="panel-header">
                    <h2>TERRITORIAL CONTROL</h2>
                </div>
                
                <div class="territory-grid">
                    ${territories.map(t => {
                        const ctrl = getController(t.controller);
                        return `                            <div class="territory-tile" style="--ctrl-color: ${ctrl.color}">
                                <span class="tile-icon">${t.icon}</span>
                                <div class="tile-info">
                                    <span class="tile-name">${t.name}</span>
                                    <span class="tile-type">${t.type}</span>
                                </div>
                                <div class="tile-control">
                                    <span class="ctrl-badge">${ctrl.icon} ${ctrl.shortName}</span>
                                </div>
                                <span class="tile-value">${t.value} pts</span>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="territory-summary">
                    <h3>CONTROL BREAKDOWN</h3>
                    <div class="control-stats">
                        ${this.calculateTerritoryControl(territories, factions)}
                    </div>
                </div>
            </div>
        `;
    }

    calculateTerritoryControl(territories, factions) {
        const control = {};
        let totalValue = 0;
        
        territories.forEach(t => {
            totalValue += t.value;
            if (!control[t.controller]) {
                control[t.controller] = { count: 0, value: 0 };
            }
            control[t.controller].count++;
            control[t.controller].value += t.value;
        });
        
        return Object.entries(control).map(([id, data]) => {
            const faction = factions.find(f => f.id === id) || 
                           (id === 'contested' ? { icon: '⚡', shortName: 'CONTESTED', color: '#FFA500' } :
                            id === 'neutral' ? { icon: '⚖️', shortName: 'NEUTRAL', color: '#888' } :
                            { icon: '?', shortName: id, color: '#333' });
            
            const percent = Math.round((data.value / totalValue) * 100);
            
            return `
                <div class="control-stat-row" style="--faction-color: ${faction.color}">
                    <span class="ctrl-faction">${faction.icon} ${faction.shortName}</span>
                    <div class="ctrl-bar-container">
                        <div class="ctrl-bar" style="width: ${percent}%"></div>
                    </div>
                    <span class="ctrl-percent">${percent}%</span>
                    <span class="ctrl-details">${data.count} regions, ${data.value} pts</span>
                </div>
            `;
        }).join('');
    }

    // =========================================
    // PANEL: PROJECTIONS
    // =========================================

    renderProjections() {
        const { projections } = WAR_DATA;
        const odds = projections.getOdds(this.factionStats);
        
        return `
            <div class="panel projections-panel">
                <div class="panel-header">
                    <h2>WAR PROJECTIONS</h2>
                    <span class="analysis-date">Analysis: ${this.formatDate(projections.analysisDate)}</span>
                </div>
                
                <div class="projections-content">
                    <section class="projection-section leader">
                        <h3>CURRENT FRONTRUNNER</h3>
                        <div class="frontrunner-display">
                            <span class="fr-icon">🌸</span>
                            <span class="fr-name">${projections.frontrunner}</span>
                            <span class="fr-confidence">${projections.confidence}% confidence</span>
                        </div>
                        <p class="fr-analysis">The Loyalists have won every major engagement in the past month. Their alliance with the Rakasha provides spiritual resources and intelligence unavailable to other factions. However, their war crimes at Bramblehaven and lack of a legitimate heir to champion remain critical vulnerabilities.</p>
                    </section>
                    
                    <section class="projection-section odds">
                        <h3>VICTORY PROBABILITIES</h3>
                        <div class="odds-chart">
                            ${odds.map(o => `
                                <div class="odds-bar">
                                    <span class="odds-label">${o.icon} ${o.faction}</span>
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
                        <div class="factors-grid">
                            ${projections.keyFactors.filter(f => this.canAccess(f.intel)).map(f => `
                                <div class="factor-card ${f.impact.toLowerCase()}">
                                    <div class="factor-header">
                                        <span class="factor-name">${f.name}</span>
                                        <span class="factor-impact">${f.impact}</span>
                                    </div>
                                    <p class="factor-desc">${f.description}</p>
                                    <div class="factor-prob">
                                        <span class="prob-label">Likelihood:</span>
                                        <div class="prob-bar"><div class="prob-fill" style="width: ${f.probability}%"></div></div>
                                        <span class="prob-value">${f.probability}%</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                    
                    <section class="projection-section scenarios">
                        <h3>POSSIBLE OUTCOMES</h3>
                        <div class="scenarios-grid">
                            ${projections.scenarios.filter(s => this.canAccess(s.intel)).map(s => `
                                <div class="scenario-card">
                                    <div class="scenario-header">
                                        <span class="scenario-name">${s.name}</span>
                                        <span class="scenario-prob">${s.probability}%</span>
                                    </div>
                                    <p class="scenario-desc">${s.description}</p>
                                    <div class="scenario-consequences">
                                        <strong>Consequences:</strong>
                                        <ul>${s.consequences.map(c => `<li>${c}</li>`).join('')}</ul>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </section>
                </div>
            </div>
        `;
    }

    // =========================================
    // PANEL: TIMELINE
    // =========================================

    renderTimeline() {
        const { timeline } = WAR_DATA;
        
        // Sort events chronologically (most recent first)
        const sortedEvents = [...timeline.events].sort((a, b) => {
            if (a.year !== b.year) return b.year - a.year;
            if ((a.month || 0) !== (b.month || 0)) return (b.month || 0) - (a.month || 0);
            return (b.day || 0) - (a.day || 0);
        });
        
        // Group by era
        const eventsByEra = {};
        timeline.eras.forEach(era => {
            eventsByEra[era.id] = {
                ...era,
                events: sortedEvents.filter(e => e.year >= era.start && e.year <= era.end)
            };
        });
        
        return `
            <div class="panel timeline-panel">
                <div class="panel-header">
                    <h2>CHRONOLOGICAL RECORD</h2>
                </div>
                
                <div class="era-tabs">
                    ${timeline.eras.map(era => `
                        <button class="era-tab" data-era="${era.id}">${era.name}</button>
                    `).join('')}
                </div>
                
                <div class="chrono-timeline">
                    ${sortedEvents.filter(e => this.canAccess(e.intel)).slice(0, 30).map(e => `
                        <div class="chrono-event ${e.critical ? 'critical' : ''} ${e.category}">
                            <div class="chrono-marker">
                                <span class="chrono-year">${e.year}</span>
                                ${e.month ? `<span class="chrono-date">${e.month}/${e.day || 1}</span>` : ''}
                            </div>
                            <div class="chrono-content">
                                <span class="chrono-category">${e.category}</span>
                                <span class="chrono-title">${e.title}</span>
                                <p class="chrono-desc">${e.description}</p>
                                ${e.details ? `<p class="chrono-details">${e.details}</p>` : ''}
                                ${e.classified && this.canAccess(e.classified.intel) ? `
                                    <div class="chrono-classified">
                                        <span class="classified-badge">L${e.classified.intel}</span>
                                        <p>${e.classified.content}</p>
                                    </div>
                                ` : ''}
                            </div>
                            ${e.critical ? '<span class="chrono-critical">CRITICAL</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // =========================================
    // UTILITY METHODS
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
        
        // Handle different date formats
        if (typeof dateObj === 'object') {
            if (dateObj.monthIndex !== undefined && CALENDAR_DATA?.months?.values) {
                const month = CALENDAR_DATA.months.values[dateObj.monthIndex];
                return `${month?.name || 'Month ' + dateObj.monthIndex} ${dateObj.day || 1}, ${dateObj.year}`;
            }
            if (dateObj.month !== undefined) {
                return `${dateObj.month}/${dateObj.day || 1}/${dateObj.year}`;
            }
            if (dateObj.year) {
                return `Year ${dateObj.year}`;
            }
        }
        
        if (typeof dateObj === 'number') {
            return `Year ${dateObj}`;
        }
        
        return String(dateObj);
    }

    // =========================================
    // EVENT HANDLING
    // =========================================

bindEvents() {
        if (!this.container) return;
        
        this.container.addEventListener('click', (e) => {
            // 1. Handle Navigation Tabs
            const navBtn = e.target.closest('.nav-sector');
            if (navBtn) {
                const panel = navBtn.dataset.panel;
                if (panel !== this.activePanel) {
                    this.activePanel = panel;
                    this.render();
                    this.bindEvents(); // Rebind after render
                    this.startDataStream();
                }
                return;
            }

            // 2. Handle Modal Close
            if (e.target.closest('.modal-close') || e.target.classList.contains('war-modal-overlay')) {
                this.closeModal();
                return;
            }

            // 3. Handle Interactive Data Items (The fix for your issue)
            const interactiveItem = e.target.closest('.interactive');
            if (interactiveItem) {
                const type = interactiveItem.dataset.type;
                const id = interactiveItem.dataset.id;
                this.openDetailModal(type, id);
                return;
            }
            
            // 4. Handle Expandable Cards (Generic)
            const expandable = e.target.closest('.expandable');
            if (expandable) {
                expandable.classList.toggle('expanded');
                return;
            }
        });
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }
    // =========================================
    // DATA STREAM ANIMATION
    // =========================================

    startDataStream() {
        const messages = [
            'SCANNING INTELLIGENCE NETWORKS...',
            'MONITORING FACTION COMMUNICATIONS...',
            'ANALYZING TERRITORIAL SHIFTS...',
            'PROCESSING ASSASSINATION EVIDENCE...',
            'TRACKING OPERATION HOMECOMING...',
            'CORRELATING WITNESS TESTIMONY...',
            'EVALUATING HIDDEN HEIR THEORIES...',
            'DECRYPTING REGENCY ARCHIVES...',
            'MONITORING RAKASHA SPIRIT-LINKS...',
            'ANALYZING THORNPAW INTEL...',
            'TRACKING SILVERCAP LEADS...',
            'PROCESSING FRAGMENT 7-ALPHA...',
            'SCANNING FOR GOLDCAP SURVIVORS...',
            'EVALUATING BEANBEAN CONNECTIONS...',
            'MONITORING IRON MANDATE ENFORCEMENT...',
            'ANALYZING FAWFUL BEHAVIORAL PATTERNS...',
            'CORRELATING STAR-TOUCHED BLOODLINES...',
            'TRACKING ANCIENT GROVE ACTIVITY...',
            'PROCESSING RYAN VISION DATA...',
            'EVALUATING KOOPA EXONERATION EVIDENCE...'
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
        
        // Clear any existing interval
        if (this.streamInterval) {
            clearInterval(this.streamInterval);
        }
        
        this.streamInterval = setInterval(updateStream, 3500);
    }

    // =========================================
    // CLEANUP
    // =========================================

    destroy() {
        if (this.streamInterval) {
            clearInterval(this.streamInterval);
        }
    }
}

// =============================================
// INITIALIZATION
// =============================================

let warRoomInstance = null;

function initWarRoom() {
    // Cleanup previous instance
    if (warRoomInstance) {
        warRoomInstance.destroy();
    }
    
    const warRoom = new WarRoomInterface();
    warRoom.init();
    warRoomInstance = warRoom;
    
    // Expose for debugging
    window.warRoomDebug = { 
        instance: warRoom, 
        data: WAR_DATA,
        getIntel: () => warRoom.intel,
        setIntel: (level) => {
            warRoom.intel = Math.max(0, Math.min(100, level));
            warRoom.render();
            warRoom.bindEvents();
            warRoom.startDataStream();
        }
    };
    
    return warRoom;
}

// Auto-initialize when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWarRoom);
} else {
    initWarRoom();
}

// =============================================
// EXPORTS
// =============================================

export { 
    WarRoomInterface, 
    WAR_DATA, 
    initWarRoom 
};
