// ============================================
// KOOPA TROOP FACTION PAGE
// Complete Rewrite with Working Intel System
// ============================================

import { state, loadState } from './state.js';
import { getIntelBreakdown } from './systems/common.js';
import { MAP_DATA } from './map-data.js';
import { playSound } from './common.js';

// ============================================
// KOOPA TROOP LORE & NARRATIVE DATA
// ============================================

const KOOPA_LORE = {
    // Core Faction Identity
    identity: {
        name: 'The Koopa Troop',
        factionKey: 'koopa_troop', // Key for intel system lookup
        altKeys: ['koopa', 'bowser', 'dark_lands'], // Alternative lookup keys
        motto: 'Showtime!',
        altMotto: 'Might Makes Right', 
        icon: '🐢',
        bannerIcon: '👑',
        colors: {
            primary: '#2E7D32',
            secondary: '#FDD835',
            accent: '#FF5722',
            dark: '#1B5E20',
            danger: '#D32F2F'
        },
        founded: 'Pre-Mushroom Dynasty Era',
        headquarters: 'Valley of Bowser, Dark Lands',
        territory: 'Dark Lands, Sky Land (partial), Various Frontier Holdings',
        government: 'Absolute Monarchy (Currently Under Regency)',
        population: 'Estimated 2-3 Million (Including vassal species)',
        alignment: 'Lawful Evil / Imperial Expansionist',
        
    description: `The Koopa Troop represents one of the most formidable military powers in the known world - a massive, militarized empire united under the iron rule of King Bowser. Far from the disorganized horde portrayed by Mushroom Kingdom propaganda, the Troop maintains advanced airship technology, sophisticated magical infrastructure, and professional standing armies.

The Koopa civilization predates the Mushroom Kingdom by centuries. Their ancestral claims to the Mushroom territories - backed by ancient treaties and conquest rights - fuel an eternal conflict that has shaped the political landscape for generations.`,
    currentCrisis: `DUAL CRISIS: The "Iron Mandate" has officially passed (1040-06-21), authorizing Iron Legion "Witch-Finder" units to purge all magical threats, putting Magikoopas in immediate danger. Simultaneously, the Empire faces a dangerous leadership vacuum: Kamek has returned to the Valley of Bowser to consolidate the scattered army remnants, while King Bowser remains separated from his forces behind enemy lines.`,    },

    // Current Strategic Situation
    situation: {
        status: 'CRISIS REORGANIZATION',
        threatLevel: 'CRITICAL',
        stability: 'UNSTABLE',
        alertLevel: 'DEFCON 1',
        alertMessage: 'KING SECURED - FLEET SCATTERED - IRON MANDATE ACTIVE',
        lastUpdate: '1040-06-20',
        
        // Key strategic facts
        keyFacts: [
            { label: 'King Status', value: 'Incapacitated (Recovering)', severity: 'critical' },
            { label: 'Acting Authority', value: 'Regent Kamek', severity: 'warning' },
            { label: 'Fleet Status', value: '65% Operational', severity: 'warning' },
            { label: 'Ground Forces', value: '90% Ready', severity: 'good' },
            { label: 'Magic Ops', value: 'SUSPENDED (Iron Mandate)', severity: 'critical' },
            { label: 'Koopaling Loyalty', value: 'UNCERTAIN', severity: 'danger' }
        ]
    },

    // Strategic Priorities (War Room)
 priorities: [
        {
            id: 'king_shadow',
            title: "Operation: King's Shadow",
            status: 'critical',
            priority: 'maximum',
            intelRequired: 20,
            secretIntelRequired: 90,
            summary: 'Maintenance of the "Strategic Meditation" cover story regarding King Bowser\'s status.',
            
            briefing: `Following the Vigilance incident, King Bowser has returned to the Dark Lands and entered a period of "Deep Strategic Meditation" to plan the counter-offensive against the Iron Legion. 

Regent Kamek has issued a strict decree: The King is not to be disturbed by anyone, including the Koopalings or Bowser Jr., until the war plans are finalized. All royal decrees are currently being issued through the Regent.`,
            
            classifiedBriefing: `EYES ONLY - KAMEK: The King is NOT in the Dark Lands. He is currently operating as an independent adventurer within the Raventree Manor anomaly, investigating time distortions alongside a group of freelancers.

I have established a hard-light illusion ("Shadow Bowser") in the Throne Room to deter suspicion, but it cannot speak or leave the dais. If the troops discover their King is playing haunted house investigator while the Iron Legion seizes our borders, the army will fracture immediately. We must maintain the charade until I can retrieve him.`,
            
            objectives: [
                { text: 'Maintain "Strategic Meditation" cover story', complete: true },
                { text: 'Restrict access to the Throne Room', complete: true },
                { text: 'Establish magical communication with Raventree Manor', complete: false },
                { text: 'Extract the King before the illusion fails', complete: false }
            ]
        },
        {
            id: 'iron_mandate_defense',
            title: 'Protocol Omega (Iron Mandate)',
            status: 'active',
            priority: 'critical',
            intelRequired: 30,
            secretIntelRequired: 70,
            summary: 'Implementation of the Geometry Shield to counter the Iron Mandate.',
            
            briefing: `The Regal Empire's passing of the "Iron Mandate" (Day 21) authorizes Iron Legion "Witch-Finder" units to purge magical threats. This is a direct declaration of war against the Magikoopa Order.

In response, Regent Kamek has initiated Protocol Omega. All field casters have been recalled to the Valley of Bowser. We are preparing a massive defensive ritual to cloak our territories from the Legion's anti-magic detection grid.`,
            
            classifiedBriefing: `The ritual requires the "World 8 Leyline" to be fully active. However, the energy draw is immense. We are diverting power from the airship manufactories to fuel the shield.

Estimated completion: 14 days. Until then, the Dark Lands are vulnerable to Legion orbital scans. Kamek has authorized the use of "forbidden geometry" to accelerate the process, despite the risks of dimensional tearing.`,
            
            objectives: [
                { text: 'Recall all Magikoopas to the Valley', complete: true },
                { text: 'Power down Airship Factory Alpha', complete: true },
                { text: 'Stabilize the Geometry Shield', complete: false },
                { text: 'Repel Legion scouting probes', complete: false }
            ]
        },
        {
            id: 'vigilance_loss',
            title: 'The Lost Flagship',
            status: 'failed',
            priority: 'high',
            intelRequired: 25,
            secretIntelRequired: 65,
            summary: 'Super-Dreadnought "Vigilance" captured by Iron Legion forces.',
            
            briefing: `The pride of the Doomship Armada has fallen. Following the chaotic events involving the Tea Leaf Syndicate infiltration and the party's interference, the Vigilance was boarded and captured by Iron Legion forces during the Capital Standoff.

The Legion is currently using the vessel for propaganda broadcasts over the Raventree sector. This is a humiliation that cannot stand.`,
            
            classifiedBriefing: `The loss is worse than a PR disaster. The Vigilance contained the prototype "Dark Star" engine core developed by Iggy Koopa. If the Iron Legion reverse-engineers this technology, they could develop null-magic bombs capable of breaching our castle wards.

Iggy has been placed on suicide watch. He is currently manic, designing "counter-measures" that look suspiciously like doomsday devices.`,
            
            objectives: [
                { text: 'Assess intelligence compromise', complete: true },
                { text: 'Monitor Legion movements of the vessel', complete: true },
                { text: 'Develop countermeasures for Dark Star tech', complete: false },
                { text: 'Plan scuttle or recapture mission', complete: false }
            ]
        },
        {
            id: 'succession_crisis',
            title: 'The Succession Vacuum',
            status: 'critical',
            priority: 'maximum',
            intelRequired: 40,
            secretIntelRequired: 85,
            summary: 'Internal stability threatened by the King\'s prolonged isolation.',
            
            briefing: `Tension is rising in the ranks. Bowser Jr. has been denied access to his father for days, leading to public outbursts and a refusal to deploy his personal fleet. The Koopalings are restless, demanding audience with the King to discuss the Iron Mandate strategy.`,
            
            classifiedBriefing: `Ludwig von Koopa knows something is wrong. He has withdrawn his forces from Sky Land to "defensive positions" without authorization and has been intercepted sending encrypted messages to Bowser Jr. 

The Regent fears a "Forceful Audit" of the Throne Room. If Ludwig or Jr. storm the throne and find only a hologram, the resulting civil war will destroy the Troop before the Iron Legion even arrives. Kamek is currently redirecting loyalist Hammer Bros units to guard the throne room under the guise of "Honor Guard" duty.`,
            
            objectives: [
                { text: 'Blockade Throne Room access', complete: true },
                { text: 'Monitor Ludwig\'s communications', complete: true },
                { text: 'Placate Bowser Jr. with busywork', complete: false },
                { text: 'Prevent alliance between Jr. and Ludwig', complete: false }
            ]
        },
        {
            id: 'fawful_opportunity',
            title: 'The Northern Front',
            status: 'monitoring',
            priority: 'medium',
            intelRequired: 25,
            secretIntelRequired: 50,
            summary: 'Peach Loyalists have captured Bramblehaven from Fawful.',
            
            briefing: `While we deal with internal crises, the war for the Mushroom Kingdom continues. The Peach Loyalists, led by the fanatical Captain Toadette, have successfully conquered the Fawful bastion of Bramblehaven (Day 17). 

This weakens Fawful's hold on the northern territories and draws his attention away from our borders.`,
            
            classifiedBriefing: `Strategic Assessment: "Never interrupt your enemy when he is making a mistake." 

Fawful and the Loyalists are bleeding each other dry. Kamek has ordered our scouts to withdraw and let them fight. Once the winner emerges—exhausted and depleted—we will launch Operation: Eviction to retake Peach's Castle. Ideally, the Loyalists kill Fawful for us, and we then crush the Loyalists.`,
            
            objectives: [
                { text: 'Monitor the conflict', complete: true },
                { text: 'Withdraw scouts to avoid collateral damage', complete: true },
                { text: 'Update plans for Castle siege', complete: false }
            ]
        }
    ],

    // Chain of Command
    leadership: {
        supreme: [
            {
                id: 'bowser',
                name: 'King Bowser Koopa',
                title: 'The Koopa King / Supreme Ruler of the Dark Lands',
                icon: '👑',
                status: 'incapacitated',
                statusLabel: 'ACTIVE - WITH PARTY',
                location: 'Valley of Bowser - Royal Medical Wing',
                intelRequired: 10,
                secretIntelRequired: 75,
                
    biography: `Supreme Ruler of the Dark Lands and self-proclaimed rightful conqueror of all he surveys. King Bowser has led the Koopa Troop for over three decades, combining devastating physical power with surprising political acumen. His obsession with Princess Peach - which he insisted was a legitimate sovereignty claim .

Bowser is not merely strong; he is a force of nature. His fire breath can melt castle walls. His shell deflects anti-tank weaponry. He has survived being thrown into lava, launched into the sun, and erased from existence - returning each time through sheer determination.`,

    currentState: `ACTIVE - RAVENTREE MANOR. Following his rescue from the Vigilance, Bowser has not returned to the Dark Lands. He is currently operating as an independent agent alongside the party within Raventree Manor. He was last confirmed navigating the "Maze of Time" with Markop and Green T, personally investigating the manor's supernatural distortions.`,

    classifiedInfo: `The King is operating without his Royal Guard or logistical support for the first time in decades. While physically formidable, his current alliance with the party is born of necessity. Kamek is currently ruling as Regent from the Valley of Bowser (as of 1040-06-18) to mask the King's absence, but if the Troop learns their King is merely "adventuring" in a haunted house while the Iron Legion mobilizes, morale could collapse.`,                stats: {
                    might: 'S+',
                    magic: 'B+',
                    cunning: 'B',
                    charisma: 'A',
                    leadership: 'A'
                }
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
                
                biography: `Bowser's childhood caretaker, chief advisor, and the most powerful Magikoopa in recorded history. Kamek has served the Koopa throne for centuries, his mastery of "Geometry Magic" - a discipline that bends reality through mathematical formulae - making him invaluable for prophecy, mind manipulation, and spatial distortion.

He raised Bowser from an egg after traveling through time to eliminate the threat posed by the infant Mario Brothers (he failed, but his loyalty was proven). Kamek is fanatically devoted to the Koopa royal line and will do anything to preserve it.`,
                
                currentState: `Following his return to the Dark Lands on 1040-06-18, Kamek has assumed emergency powers as Regent. He is enforcing a strict information blackout regarding King Bowser's true whereabouts, publicly claiming the King is in "Deep Strategic Meditation." Kamek is currently mobilizing the Troop's defenses to repel Iron Legion inquisitors enforcing the newly passed Iron Mandate.`,
                
                classifiedInfo: `Kamek is maintaining a sophisticated "Shadow Bowser" illusion in the Throne Room to prevent a morale collapse; only he and the highest-ranking Koopalings know the King is actually adventuring in Raventree Manor.

He is privately furious at Bowser's recklessness but is using the time to enact "Protocol Omega" - a massive magical shielding project designed to cloak the Valley of Bowser from the Iron Legion's anti-magic detection grid. If the Shield fails before the Legion arrives, the Magikoopa order faces total extinction.`,
                
                stats: {
                    might: 'D',
                    magic: 'S+',
                    cunning: 'A+',
                    charisma: 'C',
                    leadership: 'A'
                }
            },
        ],
        heir: {
            id: 'bowser_jr',
            name: 'Bowser Jr.',
            title: 'Crown Prince / Heir Apparent',
            icon: '🖌️',
            status: 'active',
            statusLabel: 'ACTIVE - RESTRICTED ACCESS',
            location: 'Dark Land - Personal Workshop',
            intelRequired: 20,
            secretIntelRequired: 60,
            
            biography: `The only legitimate heir to the Koopa throne. Junior combines his father's ferocity with surprising technical aptitude - his modified Junior Clown Car and custom mecha designs rival professional engineers. He has led his own sub-fleet in multiple campaigns and commands genuine loyalty from younger troops who see him as the future.

Unlike his father, Jr. shows strategic patience (when he's not throwing tantrums). He has proven capable of complex planning and has a talent for inspiring loyalty in his personal forces.`,
            
            currentState: `Bowser Jr. has been denied access to his father (who Kamek claims is in "Deep Strategic Meditation") by the Regent. Sensing deception, Junior has retreated to his private workshop. He is currently refusing Kamek's orders to deploy his fleet, creating significant tension in the capital.`,
            
            classifiedInfo: `Jr. strongly suspects Kamek is lying about his father's condition or location. He has established a secret encrypted channel with Ludwig von Koopa, discussing a potential "Forceful Audit" of the Throne Room.

He is rushing completion of a "Super-Mech" (Codename: MECHAZILLA II) that utilizes forbidden chaotic energy. The project is unstable, and his lack of safety protocols due to his emotional state poses a catastrophic risk to the workshop district.`,
            
            stats: {
                might: 'B+',
                magic: 'C+',
                cunning: 'B+',
                charisma: 'A-',
                leadership: 'B'
            }
        },
        advisors: [
            {
                id: 'kammy',
                name: 'Kammy Koopa',
                title: 'Elder Magikoopa / Council Voice',
                icon: '🔮',
                status: 'active',
                statusLabel: 'ACTIVE - ADVISORY ROLE',
                location: 'Valley of Bowser - Magikoopa Sanctum',
                intelRequired: 30,
                secretIntelRequired: 65,
                
                biography: `The second-most powerful Magikoopa and Kamek's occasional rival. Kammy served as Bowser's field advisor during numerous campaigns and maintains her own network of informants and loyalists. Where Kamek is coldly strategic, Kammy retains genuine affection for her charges.`,
                
                currentState: `Kammy has publicly supported Kamek's regency but privately questions his methods. She maintains communication with the Koopalings, particularly the younger ones, and may serve as a moderating influence on the Regent's harsher measures.`,
                
                classifiedInfo: `Kammy believes Kamek's "loyalty purges" are counterproductive and risk fracturing the Troop. She has been quietly protecting certain officers from his scrutiny and feeding information to Lemmy and Morton.

She does not want power for herself but may position herself as kingmaker if the succession crisis escalates. Her preference: Bowser Jr. with herself and Ludwig as co-regents until he matures.`,
                
                stats: {
                    might: 'D',
                    magic: 'A+',
                    cunning: 'A',
                    charisma: 'B',
                    leadership: 'B+'
                }
            }
        ]
    },

    // The Koopalings
    koopalings: [
        {
            id: 'ludwig',
            name: 'Ludwig von Koopa',
            title: 'Strategic Commander / Eldest Koopaling',
            icon: '🎹',
            status: 'unknown',
            statusLabel: 'UNKNOWN - LEFT SKY LAND',
            location: 'Unknown (Last seen departing Sky Land)',
            intelRequired: 25,
            secretIntelRequired: 55,
            threatLevel: 'HIGH',
            
            personality: 'Arrogant genius. Views warfare as art. Believes himself the natural heir.',
            
            biography: `The eldest and most intelligent of the Koopalings. Ludwig is a tactical genius who composes symphonies in his spare time and views military campaigns as aesthetic experiences. He commands the largest Koopaling force and has the respect of senior officers who remember when he was leading armies while Jr. was still in diapers.`,
            
            currentState: `Ludwig has withdrawn his forces from Sky Land to "defensive positions" without authorization. His current location is unknown, which has Kamek deeply concerned. He has not responded to official communications in 48 hours.`,
            
            classifiedInfo: `Ludwig is testing Kamek's authority. He believes he - not Bowser Jr. - should be heir. His legal argument: the Koopalings were adopted before Jr. was born, making him senior heir by adoption date. This is legally questionable but politically potent.

He has been meeting with loyalist captains, gauging support for a "proper succession" that would sideline both Kamek and Jr. Current assessment: he is preparing to make a move if Bowser's recovery takes too long.

Kamek has assassination protocols prepared. Ludwig knows this and has counter-protocols prepared. Neither can move openly without risking civil war.`,
            
            stats: { combat: 'A', magic: 'A', leadership: 'A+', loyalty: 'C' },
            forces: 'Elite Doomship Squadron, Personal Guard Battalion, Sky Land Garrison (relocated)'
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
            
            personality: 'Brutal pragmatist. Respects only strength and payment.',
            
            biography: `The muscle of the Koopalings. Roy commands the heaviest armored divisions and has a reputation for brutal efficiency. He cares nothing for politics or legitimacy - only results. His loyalty is entirely transactional: he serves because the Koopa Troop pays well and provides things to hit.`,
            
            currentState: `Roy has been holding the eastern border but demanding "hazard pay" for extended deployment. His relationship with Kamek has deteriorated significantly after the Regent denied his bonus request.`,
            
            classifiedInfo: `Roy has been approached by Wario Inc. about "private security contracts." He's considering splitting off his personal forces as a mercenary company if the succession crisis drags on. This represents approximately 2,000 elite heavy troops.

He has no interest in ruling - but he would sell his support to whoever offers the best contract. Current assessment: if the civil war begins, Roy's allegiance will go to the highest bidder.`,
            
            stats: { combat: 'S', magic: 'D', leadership: 'B', loyalty: 'D+' },
            forces: 'Heavy Armor Division, Chain Chomp Cavalry, Personal "Sunglasses Squad"'
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
            
            personality: 'Manipulative socialite playing a longer game than anyone realizes.',
            
            biography: `The only female Koopaling commands the Troop's naval forces with surprising competence beneath her diva exterior. Wendy has a talent for diplomacy and manipulation that her brothers lack. She maintains extensive social connections across multiple kingdoms.`,
            
            currentState: `Wendy has been making diplomatic overtures to Sarasaland, ostensibly about trade routes. She has also been hosting unusual numbers of foreign dignitaries at Water Land.`,
            
            classifiedInfo: `Wendy is the most dangerous Koopaling precisely because no one takes her seriously. She has established a private communication channel with Princess Daisy of Sarasaland - her goal is securing personal asylum and support if the Troop collapses.

She is also systematically gathering blackmail material on her brothers, Kamek, and senior officers. Her dossier is extensive.

Assessment: Wendy has no loyalty to the Troop itself - only to her own survival and comfort. She will abandon ship at the first sign of genuine collapse. However, she may also sell her intelligence to the highest bidder before leaving.`,
            
            stats: { combat: 'B', magic: 'B+', leadership: 'A-', loyalty: 'D' },
            forces: 'Naval Fleet, Diplomatic Corps, Personal Intelligence Network'
        },
        {
            id: 'iggy',
            name: 'Iggy Koopa',
            title: 'Research & Development / Chief Artificer',
            icon: '🔬',
            status: 'unstable',
            statusLabel: 'UNSTABLE - ISOLATED',
            location: 'Dark Land Research Complex',
            intelRequired: 25,
            secretIntelRequired: 70,
            threatLevel: 'CRITICAL (UNINTENTIONAL)',
            
            personality: 'Manic genius. Obsessive. Genuinely unhinged.',
            
            biography: `The mad scientist of the family. Iggy's inventions range from brilliant to apocalyptic, often in the same device. He cares nothing for power or politics - only for his experiments. His laboratory has been responsible for the Troop's most advanced (and unstable) weapons systems.`,
            
            currentState: `The loss of his prototypes aboard the Vigilance has sent Iggy into a dangerous spiral. He has locked himself in his laboratory, working on "something to make up for it." His assistants report he has not slept in 72 hours.`,
            
            classifiedInfo: `CRITICAL THREAT: Iggy is attempting to recreate "Dark Star" energy synthesis - the power source of an ancient weapon that nearly destroyed the world in a previous era. He has fragments recovered from past incidents and believes he can stabilize the process.

Kamek does not know. No one does except his most trusted lab assistants, who are too afraid of him to report it.

If Iggy succeeds, he will have created a weapon of mass destruction. If he fails, the explosion could destroy the entire research complex and potentially trigger a magical catastrophe across the Dark Lands.

Assessment: Iggy is not a political threat. He is an existential threat. Someone needs to stop him before he kills us all.`,
            
            stats: { combat: 'C', magic: 'C', leadership: 'D', loyalty: 'B', science: 'S+' },
            forces: 'Research Staff, Prototype Weapons Division, Experimental Units'
        },
        {
            id: 'lemmy',
            name: 'Lemmy Koopa',
            title: 'Ice Land Governor / Entertainment Division',
            icon: '🎪',
            status: 'active',
            statusLabel: 'ACTIVE - ICE LAND',
            location: 'Ice Land - Crystal Palace',
            intelRequired: 20,
            secretIntelRequired: 40,
            threatLevel: 'LOW',
            
            personality: 'Childlike, genuinely kind by Koopa standards. Wants no part of succession.',
            
            biography: `The smallest Koopaling prefers circus performance to warfare. Lemmy governs Ice Land with surprising compassion - his subjects genuinely like him, which is unusual for Koopa governance. He has no interest in political maneuvering and avoids conflict when possible.`,
            
            currentState: `Lemmy has declared Ice Land "neutral territory" during the succession uncertainty, much to Kamek's irritation. He continues to host his traveling circus despite the military crisis.`,
            
            classifiedInfo: `Lemmy just wants to be left alone to juggle and perform. He is the only Koopaling who genuinely loves Bowser Jr. as a brother - they played together as children and remain close.

If forced to choose sides in a succession conflict, Lemmy would support Jr. without hesitation. This makes his "neutrality" declaration a quiet form of resistance to Kamek's regency.

Assessment: No threat. May be useful as a mediator if tensions escalate. Could also be used as leverage against Jr. if necessary (Kamek has noted this possibility but not acted on it).`,
            
            stats: { combat: 'C+', magic: 'B', leadership: 'C', loyalty: 'A-' },
            forces: 'Ice Land Garrison, Circus Troupe (surprisingly effective scouts)'
        },
        {
            id: 'morton',
            name: 'Morton Koopa Jr.',
            title: 'Desert Operations / Ground Forces Commander',
            icon: '🏜️',
            status: 'active',
            statusLabel: 'ACTIVE - DESERT LAND',
            location: 'Desert Land - Fort Sandstorm',
            intelRequired: 20,
            secretIntelRequired: 45,
            threatLevel: 'LOW',
            
            personality: 'Loud, never stops talking. Surprisingly thoughtful under the verbal barrage.',
            
            biography: `The loudest Koopaling commands desert operations and ground forces with an iron fist. Morton talks constantly about everything and nothing, which makes most people tune him out - but those who listen discover he's actually quite perceptive.`,
            
            currentState: `Morton remains publicly loyal to the chain of command and has been one of Kamek's most reliable supporters. He maintains strong communication with his troops and has high morale in his sector.`,
            
            classifiedInfo: `Morton's loyalty is to the INSTITUTION of the Koopa Troop, not to individuals. He will support whoever maintains order and continuity. He has been privately documenting everything during the crisis "just in case" - meetings, communications, troop movements.

He is concerned about Ludwig's movements and has quietly reinforced positions on his Sky Land-facing borders. He has also been feeding information to Kammy, who he trusts more than Kamek.

Assessment: Reliable but not blind. If Kamek's regency becomes openly tyrannical, Morton may shift allegiance to protect the institution he serves.`,
            
            stats: { combat: 'A', magic: 'C', leadership: 'B', loyalty: 'A' },
            forces: 'Desert Garrison, Ground Artillery Corps, Defensive Fortifications'
        },
        {
            id: 'larry',
            name: 'Larry Koopa',
            title: 'Frontline Commander / Youngest Koopaling',
            icon: '⚡',
            status: 'deployed',
            statusLabel: 'DEPLOYED - GRASS LAND BORDER',
            location: 'Grass Land Border FOB',
            intelRequired: 20,
            secretIntelRequired: 35,
            threatLevel: 'LOW (EXPLOITABLE)',
            
            personality: 'Eager to prove himself. Classic youngest child syndrome.',
            
            biography: `The youngest Koopaling leads frontline operations with enthusiasm that sometimes outpaces wisdom. Larry desperately wants approval from his older siblings and father, which makes him work twice as hard but also makes him vulnerable to manipulation.`,
            
            currentState: `Larry is holding the Grass Land border against Mushroom Loyalist incursions. He follows Kamek's orders without question and sends regular positive reports.`,
            
            classifiedInfo: `Larry is in over his head on the border. He's taken 30% casualties in the last month but has been falsifying reports to avoid seeming weak. His positions are held together by the competence of his NCOs, not his leadership.

Ludwig knows about the falsified reports and is using this as leverage. He has offered to "help cover" Larry's failures in exchange for future considerations.

Assessment: Larry is loyal but compromised. If his real performance becomes public, it will damage him severely. Ludwig controls this information and will use it at the optimal moment.`,
            
            stats: { combat: 'B+', magic: 'C+', leadership: 'C+', loyalty: 'A' },
            forces: 'Frontline Infantry Division, Border Patrol Units'
        }
    ],

    // Military Divisions
    military: {
        divisions: [
            {
                id: 'doomship_armada',
                name: 'The Doomship Armada',
                icon: '🚁',
                type: 'air',
                strength: 65,
                maxStrength: 100,
                status: 'compromised',
                commander: 'Admiral Lakithunder (Acting)',
                intelRequired: 30,
                
                description: 'Once the undisputed masters of the skies. The Armada represented Koopa air superiority across all contested territories.',
                
                details: `The loss of the flagship Vigilance and the Tea Leaf Syndicate infiltration has devastated fleet readiness. Most vessels are grounded for security sweeps and crew verification. Only essential patrols remain operational.`,
                
                classifiedDetails: `12 vessels remain grounded pending complete crew replacement. Admiral Lakithunder suspects additional infiltrators but lacks resources for comprehensive screening.

Air superiority over Dark Lands is maintained, but offensive operations are suspended indefinitely. The sight of the captured Vigilance broadcasting Iron Legion propaganda has severely damaged morale.`,
                
                assets: [
                    'Doomship Omega (Drydock - Repairs)',
                    '12 Battle Cruisers (8 Operational)',
                    '24 Patrol Craft (18 Operational)',
                    'Vigilance - LOST TO IRON LEGION'
                ]
            },
            {
                id: 'green_tide',
                name: 'The Green Tide',
                icon: '🐢',
                type: 'ground',
                strength: 90,
                maxStrength: 100,
                status: 'ready',
                commander: 'General Shellshock',
                intelRequired: 15,
                
                description: 'The endless legions of Goombas, Koopa Troopas, Hammer Bros, and Bob-ombs. Quantity has a quality all its own.',
                
                details: `Ground forces remain at near-full strength. Morale is surprisingly high - most rank-and-file believe Bowser is planning a "surprise offensive" rather than being incapacitated. The propaganda has been effective.`,
                
                classifiedDetails: `Recruitment continues unabated. New Goomba cohorts complete basic training weekly. The lack of major offensive operations has actually improved readiness - troops are rested and well-supplied.

The main concern is officer loyalty. General Shellshock is loyal to Kamek, but divisional commanders have varying allegiances among the Koopalings.`,
                
                assets: [
                    '15,000+ Goomba Infantry',
                    '8,000 Koopa Troopa Regulars',
                    '2,500 Hammer Bros Elite',
                    '5,000 Dry Bones Legion (Undead)',
                    '800 Chain Chomp Units',
                    '1,200 Bullet Bill Artillery'
                ]
            },
            {
                id: 'magikoopa_coven',
                name: 'The Geometry Coven',
                icon: '✨',
                type: 'magic',
                strength: 100,
                maxStrength: 100,
                status: 'withdrawn',
                commander: 'Kamek (Direct)',
                intelRequired: 40,
                
                description: 'Elite spellcasters who bend reality through geometric formulae. The magical backbone of Koopa military superiority.',
                
                details: `Due to the Iron Mandate, all Magikoopa units have been ordered to cloak their magical signatures or retreat to shielded territories. Offensive operations suspended.`,
                
                classifiedDetails: `The Coven is at full strength but cannot operate freely. Kamek is personally directing all resources toward the Geometry Shield ritual.

Underground magical networks remain active but severely limited. Communication with allied magical factions (Boo Court, various covens) is maintained through dead drops and mundane couriers.`,
                
                assets: [
                    '500 Battle Magikoopas',
                    '50 Senior Practitioners',
                    '12 Geometry Masters',
                    'Kamek (Archmagus - S+ Tier)',
                    'Kammy (Elder Mage - A+ Tier)'
                ]
            },
            {
                id: 'naval_forces',
                name: 'The Deep Shell Fleet',
                icon: '⚓',
                type: 'naval',
                strength: 75,
                maxStrength: 100,
                status: 'active',
                commander: 'Wendy O. Koopa',
                intelRequired: 35,
                
                description: 'Underwater and surface naval capabilities controlling Water Land and coastal territories.',
                
                details: `The naval fleet maintains control of territorial waters and operates independently under Wendy's command. Recent engagements with Cheep-Cheep pirates have been successful.`,
                
                classifiedDetails: `Wendy has been using naval assets for unauthorized diplomatic missions. Two destroyers made port in Sarasaland waters without clearance, ostensibly for "resupply."

The fleet is operationally competent but its commander's loyalty is suspect. Kamek is considering replacing Wendy but lacks a competent alternative.`,
                
                assets: [
                    '3 Submersible Fortresses',
                    '8 Surface Cruisers',
                    '20 Patrol Boats',
                    'Blooper Cavalry Division',
                    'Cheep-Cheep Conscripts'
                ]
            },
            {
                id: 'boo_division',
                name: 'Phantom Operations',
                icon: '👻',
                type: 'special',
                strength: 100,
                maxStrength: 100,
                status: 'active',
                commander: 'King Boo (Allied)',
                intelRequired: 25,
                
                description: 'Infiltration, reconnaissance, and psychological warfare specialists provided through alliance with the Boo Court.',
                
                details: `The Boo alliance provides invaluable intelligence and terror capabilities. King Boo's forces are unaffected by the Iron Mandate and continue operations freely.`,
                
                classifiedDetails: `King Boo has actually increased support following the Iron Mandate - he views anti-magic legislation as a threat to all supernatural entities. Cooperation is at an all-time high.

The Boos have reported on Iron Legion troop movements, Loyalist positions, and the internal politics of multiple factions. Their intelligence is reliable but comes with King Boo's personal agenda attached.`,
                
                assets: [
                    'Unknown number of Boo agents (estimates: 1,000+)',
                    'Portrait Ghost specialists',
                    'Luigi psychological warfare units',
                    'Haunted object infiltration network'
                ]
            }
        ],
        
        notableAssets: [
            { name: 'The Royal Clown Car', status: 'Operational', location: 'Valley of Bowser', icon: '🚗', notes: 'King\'s personal transport. Currently unused.' },
            { name: 'Vigilance (Flagship)', status: 'LOST - CAPTURED', location: 'Iron Legion Control', icon: '💀', notes: 'Pride of the fleet. Now enemy propaganda platform.' },
            { name: 'Doomship Omega', status: 'Drydock - Repairs', location: 'Dark Land Shipyard', icon: '🔧', notes: 'Secondary flagship. 2 weeks from operational.' },
            { name: 'Dark Star Fragment Alpha', status: 'SECURED', location: 'Iggy\'s Lab', icon: '⚫', notes: 'DANGER - Weapons research. Minimal oversight.' },
            { name: 'Koopa Clown Car Fleet', status: 'Operational', location: 'Various', icon: '🎈', notes: 'Personal transports for Koopalings and elites.' },
            { name: 'Thwomp Defense Grid', status: 'Active', location: 'Dark Lands Borders', icon: '🪨', notes: 'Automated defensive installations.' }
        ]
    },

    // Diplomatic Relations
    diplomacy: [
        {
            id: 'mushroom_regency',
            name: 'Mushroom Kingdom (Regency)',
            icon: '🍄',
            status: 'war',
            statusLabel: 'AT WAR',
            color: '#E53935',
            intelRequired: 15,
            
            description: `The Eternal Enemy. With Princess Peach dead for 45 years and the Regency struggling to maintain control, the "game" has changed. What was once a strange dance of kidnapping and rescue is now simply war.`,
            
            assessment: `The Regency is weaker than they project. The Toad Town incidents and Fawful's occupation of the castle have fractured their legitimacy. However, the Mario Brothers remain a critical threat - their intervention capability is undiminished.`,
            
            classifiedAssessment: `Kamek views the current Regency as terminally weak. However, attacking now would unite their factions. Better strategy: let them exhaust themselves against Fawful and each other. Strike when they are broken.`,
            
            strategicValue: 'Primary Conquest Target (Deferred)'
        },
        {
            id: 'iron_legion',
            name: 'The Iron Legion',
            icon: '⚔️',
            status: 'hostile',
            statusLabel: 'PRIMARY THREAT',
            color: '#757575',
            intelRequired: 30,
            
            description: `They captured the Vigilance. They passed the Iron Mandate. They represent everything magic-wielding civilizations fear - industrial power united against the supernatural. And they're winning.`,
            
            assessment: `The Iron Legion's anti-magic technology is revolutionary. Their industrial capacity rivals our own. General Marcus Ironhand has proven himself a capable commander and ruthless politician.`,
            
            classifiedAssessment: `Kamek considers the Iron Legion a greater long-term threat than the Mushroom Kingdom. Their ideology - that magic itself should be controlled and suppressed - is incompatible with Koopa civilization.

Once the Geometry Shield is complete, we must develop strategies to counter their anti-magic capabilities. Conventional military pressure may be necessary.`,
            
            strategicValue: 'Existential Threat'
        },
        {
            id: 'fawful_forces',
            name: "Fawful's Forces",
            icon: '😈',
            status: 'hostile',
            statusLabel: 'HOSTILE - MONITORING',
            color: '#7B1FA2',
            intelRequired: 20,
            
            description: `The Bean usurper controls Peach's Castle - OUR rightful conquest target. The insult demands blood. However, letting Fawful fight the Loyalists serves our interests.`,
            
            assessment: `Fawful's forces are overextended following the Bramblehaven loss. Captain Toadette's Loyalists are pressing hard. His collapse appears imminent.`,
            
            classifiedAssessment: `Let them fight. Operation Eviction remains on standby - we'll take the castle once Fawful and the Loyalists have exhausted each other. Estimated window: 30-60 days.`,
            
            strategicValue: 'Useful Conflict (Monitoring)'
        },
        {
            id: 'peach_loyalists',
            name: 'Peach Loyalists',
            icon: '🌹',
            status: 'tolerated',
            statusLabel: 'USEFUL FANATICS',
            color: '#E91E63',
            intelRequired: 25,
            
            description: `Fanatics who worship the dead princess and hate Fawful as much as we do. Captain Toadette leads them with brutal efficiency.`,
            
            assessment: `Toadette's forces have proven surprisingly capable - Bramblehaven's fall was militarily impressive. They serve our interests by weakening Fawful.`,
            
            classifiedAssessment: `Morton's assessment: "Too crazy, even for us." Let them exhaust themselves against Fawful. They will be easier to deal with after.`,
            
            strategicValue: 'Proxy Forces (Unwitting)'
        },
        {
            id: 'king_boo',
            name: "King Boo's Court",
            icon: '👻',
            status: 'allied',
            statusLabel: 'STRONG ALLIANCE',
            color: '#4CAF50',
            intelRequired: 15,
            
            description: `Reliable supernatural allies. King Boo hates the Mario Brothers personally and provides invaluable infiltration capabilities.`,
            
            assessment: `The Iron Mandate has strengthened this alliance significantly. King Boo views anti-magic legislation as an existential threat to all supernatural entities.`,
            
            classifiedAssessment: `King Boo is a true ally - rare for the Koopa Troop. However, his personal obsession with Luigi sometimes distorts his priorities. Maintain the alliance but verify his intelligence.`,
            
            strategicValue: 'Key Strategic Partner'
        },
        {
            id: 'wario_inc',
            name: 'Wario Incorporated',
            icon: '💰',
            status: 'neutral',
            statusLabel: 'TRANSACTIONAL',
            color: '#FFC107',
            intelRequired: 30,
            
            description: `Wario sells to anyone with coin. His mercenary network and black market connections make him valuable despite his unreliability.`,
            
            assessment: `Wario has been making overtures to Roy Koopa about "private security contracts." This may represent an attempt to poach elite forces during our weakness.`,
            
            classifiedAssessment: `Waluigi - Wario's brother - was instrumental in rescuing King Bowser from the Vigilance. The relationship is complex. Wario serves money, but Waluigi may have deeper loyalties.

Monitor Roy's contacts with Wario Inc. carefully.`,
            
            strategicValue: 'Arms Supplier / Potential Risk'
        },
        {
            id: 'sarasaland',
            name: 'Kingdom of Sarasaland',
            icon: '🌸',
            status: 'neutral',
            statusLabel: 'NEUTRAL - TRADING',
            color: '#FF9800',
            intelRequired: 30,
            
            description: `Princess Daisy maintains strict neutrality despite her friendship with the late Princess Peach. Trade continues, providing resources otherwise unavailable.`,
            
            assessment: `Wendy has been conducting unauthorized diplomatic missions to Sarasaland. Two naval vessels made port there without clearance.`,
            
            classifiedAssessment: `Wendy is establishing personal escape routes. Her communications with Daisy suggest she's negotiating asylum terms.

This is a security concern but also leverage - if Wendy knows we know, she may moderate her behavior. For now, observe and document.`,
            
            strategicValue: 'Trade Partner / Wendy Escape Route'
        }
    ],

    // Intel Feed Events
    intelFeed: [
        {
            id: 'feed_1',
            date: '1040-06-20',
            priority: 'critical',
            type: 'leadership',
            title: 'Kamek Returns to Valley',
            text: 'High Magus Kamek has returned to the Valley of Bowser. Magical barriers erected around the Throne Complex. All non-essential personnel evacuated from the royal wing.',
            tags: ['Kamek', 'Succession', 'Magic']
        },
        {
            id: 'feed_2',
            date: '1040-06-19',
            priority: 'high',
            type: 'political',
            title: 'Jr. Access Denied',
            text: 'Bowser Jr. requested permission to visit his father. Request denied by Kamek citing "recovery protocols." Jr. reportedly threw a tantrum that damaged three walls.',
            tags: ['Bowser Jr.', 'Succession', 'Tension']
        },
        {
            id: 'feed_3',
            date: '1040-06-18',
            priority: 'critical',
            type: 'military',
            title: 'Iron Mandate Enforcement',
            text: 'Iron Mandate enforcement begins across Midlands. Three Magikoopa scouts captured in Toad Town ruins. Legion "Witch-Finder" units active.',
            tags: ['Iron Legion', 'Magic', 'Captures']
        },
        {
            id: 'feed_4',
            date: '1040-06-17',
            priority: 'high',
            type: 'suspicious',
            title: 'Ludwig Withdraws',
            text: 'Ludwig von Koopa withdraws all forces from Sky Land to "defensive positions." True destination unknown. Has not responded to official communications.',
            tags: ['Ludwig', 'Succession', 'Unknown']
        },
        {
            id: 'feed_5',
            date: '1040-06-17',
            priority: 'medium',
            type: 'military',
            title: 'Bramblehaven Falls',
            text: 'Peach Loyalist forces under Captain Toadette capture Bramblehaven from Fawful. Brutal fighting reported. Fawful northern flank collapsing.',
            tags: ['Loyalists', 'Fawful', 'Territory']
        },
        {
            id: 'feed_6',
            date: '1040-06-16',
            priority: 'medium',
            type: 'political',
            title: 'Roy Demands Payment',
            text: 'Roy Koopa formally demands "hazard pay" for extended border garrison duty. Kamek denies request. Relations deteriorating.',
            tags: ['Roy', 'Finance', 'Tension']
        },
        {
            id: 'feed_7',
            date: '1040-06-14',
            priority: 'critical',
            type: 'failure',
            title: 'Vigilance Compromise Confirmed',
            text: 'Full intelligence audit of Vigilance loss completed. Tea Leaf Syndicate infiltration confirmed. 150+ trafficked Toads discovered in cargo barrels. King was among them.',
            tags: ['Vigilance', 'Syndicate', 'Intelligence']
        },
        {
            id: 'feed_8',
            date: '1040-06-12',
            priority: 'high',
            type: 'security',
            title: 'Fleet Security Purge',
            text: 'Tea Leaf Syndicate agents identified aboard multiple Doomship vessels. Fleet-wide security purge ordered. 12 ships grounded for crew verification.',
            tags: ['Syndicate', 'Fleet', 'Security']
        },
        {
            id: 'feed_9',
            date: '1040-06-10',
            priority: 'medium',
            type: 'diplomatic',
            title: 'Wendy\'s Naval Detour',
            text: 'Two destroyers from Wendy\'s fleet made unscheduled port call in Sarasaland. Official reason: "Resupply." Duration: 18 hours.',
            tags: ['Wendy', 'Sarasaland', 'Suspicious']
        },
        {
            id: 'feed_10',
            date: '1040-06-08',
            priority: 'low',
            type: 'internal',
            title: 'Lemmy Declares Neutrality',
            text: 'Lemmy Koopa announces Ice Land is "neutral territory" during succession uncertainty. Continues hosting circus performances. Kamek annoyed but not acting.',
            tags: ['Lemmy', 'Ice Land', 'Succession']
        }
    ],

    // The Koopa Codex - Cultural Tenets
    codex: [
        {
            id: 'might',
            title: 'Might Makes Right',
            text: 'If you can take it, it is yours. If you cannot hold it, you never deserved it. Strength is the only true law.',
            status: 'active'
        },
        {
            id: 'king',
            title: 'The King is Ultimate',
            text: 'Bowser\'s word is law. His will shapes reality. Even when wrong, he is right - for the alternative is chaos.',
            status: 'active',
            note: 'Currently complicated by regency situation.'
        },
        {
            id: 'persistence',
            title: 'Never Give Up',
            text: 'You can be stomped, flattened, burned, or thrown into lava. True Koopas get back up. There is always another level.',
            status: 'active'
        },
        {
            id: 'style',
            title: 'Villainy Requires Style',
            text: 'Presentation matters. Every castle needs chandeliers. Every trap needs flair. We are conquerors, not barbarians.',
            status: 'active'
        },
        {
            id: 'princess',
            title: 'The Princess Clause',
            text: 'Traditional doctrine regarding Princess-acquisition operations and associated ceremonial kidnapping protocols.',
            status: 'suspended',
            note: 'SUSPENDED following Princess Peach\'s death. Under review.'
        },
        {
            id: 'loyalty',
            title: 'Loyalty is Rewarded',
            text: 'Those who serve faithfully rise. Those who betray are made examples. The Troop remembers both.',
            status: 'active'
        }
    ]
};


// ============================================
// INTEL SYSTEM MANAGER
// Properly integrates with common.js getIntelBreakdown
// ============================================

class KoopaIntelManager {
    constructor() {
        this.factionKey = 'koopa_troop';
        this.altKeys = ['koopa', 'bowser', 'dark_lands'];
        this.cachedIntel = null;
        this.cacheTime = 0;
        this.cacheDuration = 5000; // 5 second cache
    }

    /**
     * Get the intel breakdown for Koopa Troop
     * Uses the common.js getIntelBreakdown function
     */
    getIntelBreakdown() {
        const now = Date.now();
        
        // Return cached value if fresh
        if (this.cachedIntel && (now - this.cacheTime) < this.cacheDuration) {
            return this.cachedIntel;
        }

        // Try primary key first
        let breakdown = null;
        
        if (typeof getIntelBreakdown === 'function') {
            breakdown = getIntelBreakdown(this.factionKey);
            
            // If primary key returns 0, try alt keys
            if (!breakdown || breakdown.total === 0) {
                for (const altKey of this.altKeys) {
                    const altBreakdown = getIntelBreakdown(altKey);
                    if (altBreakdown && altBreakdown.total > 0) {
                        breakdown = altBreakdown;
                        break;
                    }
                }
            }
        }

        // Fallback if getIntelBreakdown not available or returns nothing
        if (!breakdown) {
            breakdown = this.getFallbackIntel();
        }

        this.cachedIntel = breakdown;
        this.cacheTime = now;
        
        return breakdown;
    }

    /**
     * Fallback intel calculation when common.js function unavailable
     */
    getFallbackIntel() {
        // Check for debug mode first
        if (state?.debugMode) {
            return { base: 100, history: 0, active: 0, total: 100 };
        }

        const loggedInUser = state?.loggedInUser || 'generic';
        let base = 0;

        // Try to get from state.intelLevels
        if (state?.intelLevels) {
            const userIntel = state.intelLevels[loggedInUser] || state.intelLevels.generic || {};
            
            // Check multiple possible keys
            base = userIntel[this.factionKey] ?? 
                   userIntel['koopa'] ?? 
                   userIntel['bowser'] ??
                   userIntel['dark_lands'] ??
                   15; // Default baseline
        }

        // Try to get history from finalIntel
        let history = 0;
        if (state?.finalIntel?.[loggedInUser]) {
            const finalVal = state.finalIntel[loggedInUser][this.factionKey] ?? 
                            state.finalIntel[loggedInUser]['koopa'] ?? 0;
            history = Math.max(0, finalVal - base);
        }

        return {
            base: base,
            history: history,
            active: 0,
            total: Math.min(100, base + history)
        };
    }

    /**
     * Get current total intel level (0-100)
     */
    getLevel() {
        return this.getIntelBreakdown().total;
    }

    /**
     * Check if user can view content at specified intel requirement
     */
    canView(requiredIntel = 0) {
        if (state?.debugMode) return true;
        return this.getLevel() >= requiredIntel;
    }

    /**
     * Get intel tier label based on current level
     */
    getTier() {
        const level = this.getLevel();
        
        if (level >= 90) return { name: 'REGENT ACCESS', class: 'tier-regent', description: 'Full classified access' };
        if (level >= 75) return { name: 'HIGH COMMAND', class: 'tier-high', description: 'Senior officer briefings' };
        if (level >= 50) return { name: 'OFFICER GRADE', class: 'tier-officer', description: 'Standard intelligence access' };
        if (level >= 30) return { name: 'TROOPER LEVEL', class: 'tier-trooper', description: 'Basic operational intel' };
        if (level >= 15) return { name: 'LIMITED ACCESS', class: 'tier-limited', description: 'Public knowledge only' };
        return { name: 'OUTSIDER', class: 'tier-outsider', description: 'Minimal intelligence' };
    }

    /**
     * Redact text based on intel level
     */
    redact(text, requiredLevel) {
        if (this.canView(requiredLevel)) return text;
        
        // Partial redaction for close levels
        const level = this.getLevel();
        const gap = requiredLevel - level;
        
        if (gap <= 10) {
            // Close - redact ~50% of words
            return text.split(' ').map((word, i) => {
                if (i % 2 === 0 || word.length < 3) return word;
                return '█'.repeat(Math.min(word.length, 6));
            }).join(' ');
        }
        
        // Far - heavy redaction
        return text.split(' ').map(word => {
            if (word.length < 3 && Math.random() > 0.5) return word;
            return '█'.repeat(Math.min(word.length, 8));
        }).join(' ');
    }

    /**
     * Clear the intel cache (call when state changes)
     */
    clearCache() {
        this.cachedIntel = null;
        this.cacheTime = 0;
    }
}


// ============================================
// POI & TERRITORY DATA MANAGER
// ============================================

class KoopaTerritoryManager {
    constructor() {
        this.pois = [];
        this.territories = [];
        this.stats = this.getEmptyStats();
        this.initialized = false;
    }

    getEmptyStats() {
        return {
            totalMilitary: 0,
            totalEconomic: 0,
            totalPolitical: 0,
            totalPopulation: 0,
            poiCount: 0,
            controlledRegions: 0,
            contestedRegions: 0,
            presenceRegions: 0,
            activeRegions: new Set()
        };
    }

    /**
     * Process MAP_DATA to extract Koopa holdings
     */
    init() {
        if (this.initialized) return this;
        
        this.pois = [];
        this.territories = [];
        this.stats = this.getEmptyStats();

        if (!MAP_DATA) {
            console.warn('[KoopaTerritory] MAP_DATA not available');
            this.initialized = true;
            return this;
        }

        const factionKeys = ['koopa_troop', 'koopa', 'bowser', 'dark_lands', 'koopalings'];

        Object.entries(MAP_DATA).forEach(([regionId, regionData]) => {
            // Skip non-full entries
            if (!regionId.endsWith('_full')) return;

            const regionPOIs = regionData.pointsOfInterest || [];
            
            // Find POIs controlled by Koopa faction
            const factionPOIs = regionPOIs.filter(poi => {
                const poiFaction = (poi.factionId || poi.faction || poi.controlledBy || '').toLowerCase();
                return factionKeys.some(key => poiFaction.includes(key));
            });

            if (factionPOIs.length === 0) return;

            // Process this region
            this.stats.activeRegions.add(regionId);
            const cleanRegionName = (regionData.name || regionId).replace(' (Full)', '').replace('_full', '');

            // Add individual POIs
            factionPOIs.forEach(poi => {
                this.pois.push({
                    ...poi,
                    regionId,
                    regionName: cleanRegionName
                });

                this.stats.totalMilitary += poi.military_strength || poi.militaryStrength || 0;
                this.stats.totalEconomic += poi.economic_value || poi.economicValue || 0;
                this.stats.totalPolitical += poi.political_influence || poi.politicalInfluence || 0;
                this.stats.totalPopulation += poi.population || 0;
                this.stats.poiCount++;
            });

            // Calculate territory status
            const totalPOIs = regionPOIs.length;
            const ownershipRatio = totalPOIs > 0 ? factionPOIs.length / totalPOIs : 0;
            const isController = ownershipRatio >= 0.5;
            
            // Check for contested status
            const otherFactionPOIs = regionPOIs.filter(p => {
                const pFaction = (p.factionId || p.faction || '').toLowerCase();
                return !factionKeys.some(key => pFaction.includes(key)) && 
                       pFaction !== 'neutral' && 
                       pFaction !== 'unaligned' &&
                       pFaction !== '';
            });
            const isContested = otherFactionPOIs.length > 0 && factionPOIs.length > 0;

            // Determine status
            let status = 'presence';
            if (isController) {
                status = isContested ? 'contested' : 'controlled';
            }

            this.territories.push({
                id: regionId,
                name: cleanRegionName,
                status,
                controlPercent: Math.round(ownershipRatio * 100),
                poiCount: factionPOIs.length,
                totalPOIs: totalPOIs,
                military: factionPOIs.reduce((sum, p) => sum + (p.military_strength || p.militaryStrength || 0), 0),
                economic: factionPOIs.reduce((sum, p) => sum + (p.economic_value || p.economicValue || 0), 0),
                political: factionPOIs.reduce((sum, p) => sum + (p.political_influence || p.politicalInfluence || 0), 0),
                isContested,
                pois: factionPOIs
            });

            // Update stats
            if (status === 'controlled') this.stats.controlledRegions++;
            else if (status === 'contested') this.stats.contestedRegions++;
            else this.stats.presenceRegions++;
        });

        this.initialized = true;
        console.log(`[KoopaTerritory] Initialized: ${this.pois.length} POIs, ${this.territories.length} territories`);
        
        return this;
    }

    /**
     * Get territories filtered by status
     */
    getFiltered(filter = 'all') {
        if (filter === 'all') return this.territories;
        return this.territories.filter(t => t.status === filter);
    }

    /**
     * Get military assets broken down by type
     */
    getMilitaryBreakdown() {
        const categories = {
            ground: [],
            air: [],
            naval: [],
            magic: [],
            special: []
        };

        this.pois.forEach(poi => {
            const hasMilitary = (poi.military_strength || poi.militaryStrength || 0) > 0;
            const poiType = (poi.type || poi.subtype || '').toLowerCase();
            const poiName = (poi.name || '').toLowerCase();

            if (!hasMilitary && poiType !== 'military') return;

            let category = 'ground';
            
            if (poiName.includes('air') || poiName.includes('sky') || poiName.includes('doomship') || poiType.includes('air')) {
                category = 'air';
            } else if (poiName.includes('naval') || poiName.includes('water') || poiName.includes('sea') || poiType.includes('naval')) {
                category = 'naval';
            } else if (poiName.includes('magic') || poiName.includes('magikoopa') || poiType.includes('magic')) {
                category = 'magic';
            } else if (poiName.includes('boo') || poiName.includes('phantom') || poiType.includes('special')) {
                category = 'special';
            }

            categories[category].push(poi);
        });

        return categories;
    }
}


// ============================================
// UI RENDERER
// ============================================

class KoopaFactionUI {
    constructor(intelManager, territoryManager) {
        this.intel = intelManager;
        this.territory = territoryManager;
        this.lore = KOOPA_LORE;
        
        this.currentSection = 'overview';
        this.filters = {
            territory: 'all',
            intel: 'all',
            military: 'all'
        };
        
        this.container = null;
    }

    /**
     * Initialize the UI
     */
    init() {
        this.container = document.querySelector('.faction-page') || 
                        document.getElementById('main-content') ||
                        document.getElementById('content');
        
        if (!this.container) {
            console.error('[KoopaUI] No container element found');
            return this;
        }

        this.render();
        this.attachEventListeners();
        this.handleHashNavigation();
        
        return this;
    }

    /**
     * Full page render
     */
    render() {
        if (!this.container) return;
        
        this.container.innerHTML = this.renderPage();
        this.attachEventListeners();
        
        // Restore current section after re-render
        requestAnimationFrame(() => {
            this.switchSection(this.currentSection, false);
        });
    }

    /**
     * Attach all event listeners
     */
    attachEventListeners() {
        const container = this.container;
        if (!container) return;

        // Use event delegation
        container.addEventListener('click', (e) => {
            // Navigation tabs
            const navTab = e.target.closest('.faction-nav-tab');
            if (navTab) {
                e.preventDefault();
                this.switchSection(navTab.dataset.section);
                if (typeof playSound === 'function') playSound('click.mp3');
                return;
            }

            // Expandable items
            const expandBtn = e.target.closest('.expand-btn');
            if (expandBtn) {
                const expandable = expandBtn.closest('.expandable-item');
                if (expandable) {
                    expandable.classList.toggle('expanded');
                    expandBtn.textContent = expandable.classList.contains('expanded') ? 'Hide ▲' : 'Details ▼';
                }
                return;
            }

            // Collapsible cards
            const collapsibleHeader = e.target.closest('.collapsible-header');
            if (collapsibleHeader) {
                const card = collapsibleHeader.closest('.collapsible-card');
                if (card) card.classList.toggle('expanded');
                return;
            }

            // Intel feed items
            const intelItem = e.target.closest('.intel-feed-item');
            if (intelItem) {
                intelItem.classList.toggle('expanded');
                return;
            }

            // Leader/Koopaling cards
            const personCard = e.target.closest('.person-card');
            if (personCard && !e.target.closest('.expand-btn')) {
                personCard.classList.toggle('detail-view');
                return;
            }

            // Debug toggle
            if (e.target.id === 'debug-intel-toggle') {
                if (state) {
                    state.debugMode = !state.debugMode;
                    this.intel.clearCache();
                    this.render();
                }
                return;
            }
        });

        // Filter changes
        container.addEventListener('change', (e) => {
            if (e.target.classList.contains('filter-select')) {
                const filterType = e.target.dataset.filterType;
                if (filterType) {
                    this.filters[filterType] = e.target.value;
                    this.render();
                }
            }
        });
    }

    /**
     * Handle URL hash navigation
     */
    handleHashNavigation() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            this.switchSection(hash, false);
        }
    }

    /**
     * Switch between page sections
     */
    switchSection(sectionId, updateHash = true) {
        this.currentSection = sectionId;

        // Update tab states
        document.querySelectorAll('.faction-nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.section === sectionId);
        });

        // Update section visibility
        document.querySelectorAll('.faction-section').forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });

        // Scroll to top
        const content = document.querySelector('.faction-content');
        if (content) content.scrollTop = 0;

        // Update URL hash
        if (updateHash) {
            history.replaceState(null, null, `#${sectionId}`);
        }
    }

    // ============================================
    // RENDER HELPERS
    // ============================================

    /**
     * Wrap content in intel gate
     */
    renderIntelGate(requiredIntel, content, options = {}) {
        const {
            altMessage = 'CLASSIFIED',
            showLevel = true,
            showProgress = true
        } = options;

        if (this.intel.canView(requiredIntel)) {
            return content;
        }

        const currentLevel = this.intel.getLevel();
        const progress = Math.round((currentLevel / requiredIntel) * 100);

        return `
            <div class="intel-gated-content">
                <div class="classified-overlay">
                    <div class="classified-stamp">🔒 ${altMessage}</div>
                    ${showLevel ? `
                        <p class="intel-requirement">Requires Intel Level ${requiredIntel}+</p>
                        <p class="current-intel">Your Level: ${currentLevel}</p>
                    ` : ''}
                    ${showProgress ? `
                        <div class="intel-progress-bar">
                            <div                             class="intel-progress-fill" 
                                style="width: ${Math.min(progress, 100)}%"
                            ></div>
                        </div>
                        <p class="intel-gap">${requiredIntel - currentLevel} more intel needed</p>
                    ` : ''}
                </div>
            </div>
        `;
    }

    /**
     * Get status CSS class
     */
    getStatusClass(status) {
        const statusMap = {
            'active': 'status-active',
            'ready': 'status-active',
            'allied': 'status-allied',
            'operational': 'status-active',
            'deployed': 'status-deployed',
            'recovering': 'status-warning',
            'incapacitated': 'status-danger',
            'compromised': 'status-danger',
            'withdrawn': 'status-warning',
            'unstable': 'status-danger',
            'unknown': 'status-unknown',
            'failed': 'status-failed',
            'critical': 'status-critical',
            'monitoring': 'status-info',
            'planning': 'status-info',
            'war': 'status-war',
            'hostile': 'status-hostile',
            'neutral': 'status-neutral',
            'tolerated': 'status-neutral'
        };
        return statusMap[status?.toLowerCase()] || 'status-default';
    }

    /**
     * Format large numbers
     */
    formatNumber(num) {
        if (!num) return '0';
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toString();
    }

    /**
     * Get icon for intel type
     */
    getIntelIcon(type) {
        const icons = {
            leadership: '👑',
            political: '🏛️',
            military: '⚔️',
            security: '🔒',
            suspicious: '👁️',
            failure: '💀',
            diplomatic: '🤝',
            internal: '📋',
            critical: '🚨',
            magic: '✨'
        };
        return icons[type] || '📄';
    }

    // ============================================
    // PAGE STRUCTURE
    // ============================================

    renderPage() {
        const { identity, situation } = this.lore;
        const intelBreakdown = this.intel.getIntelBreakdown();
        const stats = this.territory.stats;

        return `
            <div class="faction-page koopa-theme" data-faction="koopa_troop">
                ${this.renderHeader(identity, intelBreakdown)}
                ${this.renderAlertBanner(situation)}
                ${this.renderQuickStats(stats, intelBreakdown)}
                ${this.renderNavigation()}
                
                <div class="faction-content">
                    ${this.renderOverviewSection()}
                    ${this.renderWarRoomSection()}
                    ${this.renderLeadershipSection()}
                    ${this.renderKoopalingsSection()}
                    ${this.renderMilitarySection()}
                    ${this.renderTerritorySection()}
                    ${this.renderDiplomacySection()}
                    ${this.renderIntelFeedSection()}
                    ${this.renderCodexSection()}
                </div>
                
                ${this.renderDebugPanel()}
            </div>
        `;
    }

    renderHeader(identity, intelBreakdown) {
        const tier = this.intel.getTier();
        
        return `
            <header class="faction-header">
                <div class="faction-banner">
                    <div class="faction-emblem">
                        <span class="emblem-icon">${identity.icon}</span>
                        <span class="emblem-crown">${identity.bannerIcon}</span>
                    </div>
                    
                    <div class="faction-title-block">
                        <span class="faction-category">Major Power - Dark Lands Empire</span>
                        <h1 class="faction-name">${identity.name}</h1>
                        <p class="faction-motto">"${identity.motto}" / "${identity.altMotto}"</p>
                    </div>
                    
                    <div class="faction-intel-block">
                        <div class="intel-display">
                            <div class="intel-meter">
                                <div class="intel-fill" style="width: ${intelBreakdown.total}%"></div>
                                <span class="intel-value">${intelBreakdown.total}%</span>
                            </div>
                            <span class="intel-tier ${tier.class}">${tier.name}</span>
                        </div>
                        
                        <div class="intel-breakdown" title="Base: ${intelBreakdown.base} | History: ${intelBreakdown.history} | Active: ${intelBreakdown.active}">
                            <span class="breakdown-item">📊 ${intelBreakdown.base}</span>
                            <span class="breakdown-item">📜 +${intelBreakdown.history}</span>
                            <span class="breakdown-item">📡 +${intelBreakdown.active}</span>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }

    renderAlertBanner(situation) {
        return `
            <div class="alert-banner ${situation.stability.toLowerCase()}">
                <div class="alert-content">
                    <span class="alert-icon">🚨</span>
                    <span class="alert-level">${situation.alertLevel}</span>
                    <span class="alert-message">${situation.alertMessage}</span>
                    <span class="alert-date">Updated: ${situation.lastUpdate}</span>
                </div>
            </div>
        `;
    }

    renderQuickStats(stats, intelBreakdown) {
        const { situation } = this.lore;
        
        return `
            <div class="quick-stats-bar">
                <div class="stat-group primary-stats">
                    <div class="qstat threat-level ${situation.threatLevel.toLowerCase()}">
                        <span class="qstat-label">Threat</span>
                        <span class="qstat-value">${situation.threatLevel}</span>
                    </div>
                    <div class="qstat stability ${situation.stability.toLowerCase()}">
                        <span class="qstat-label">Stability</span>
                        <span class="qstat-value">${situation.stability}</span>
                    </div>
                </div>
                
                <div class="stat-group territory-stats">
                    <div class="qstat">
                        <span class="qstat-value">${stats.controlledRegions}</span>
                        <span class="qstat-label">Controlled</span>
                    </div>
                    <div class="qstat ${stats.contestedRegions > 0 ? 'contested-highlight' : ''}">
                        <span class="qstat-value">${stats.contestedRegions}</span>
                        <span class="qstat-label">Contested</span>
                    </div>
                    <div class="qstat">
                        <span class="qstat-value">${stats.poiCount}</span>
                        <span class="qstat-label">Holdings</span>
                    </div>
                </div>
                
                <div class="stat-group power-stats">
                    <div class="qstat">
                        <span class="qstat-value">${this.formatNumber(stats.totalMilitary)}</span>
                        <span class="qstat-label">⚔️ Military</span>
                    </div>
                    <div class="qstat">
                        <span class="qstat-value">${this.formatNumber(stats.totalEconomic)}</span>
                        <span class="qstat-label">💰 Economic</span>
                    </div>
                </div>
            </div>
        `;
    }

    renderNavigation() {
        const tabs = [
            { id: 'overview', label: 'Overview', icon: '📋' },
            { id: 'war-room', label: 'War Room', icon: '🚨' },
            { id: 'leadership', label: 'Command', icon: '👑' },
            { id: 'koopalings', label: 'Koopalings', icon: '🎹' },
            { id: 'military', label: 'Military', icon: '⚔️' },
            { id: 'territory', label: 'Territory', icon: '🗺️' },
            { id: 'diplomacy', label: 'Diplomacy', icon: '🤝' },
            { id: 'intel-feed', label: 'Intel Feed', icon: '📡' },
            { id: 'codex', label: 'Codex', icon: '📜' }
        ];

        return `
            <nav class="faction-nav" role="navigation">
                <div class="nav-scroll-container">
                    ${tabs.map(tab => `
                        <button 
                            class="faction-nav-tab ${this.currentSection === tab.id ? 'active' : ''}" 
                            data-section="${tab.id}"
                            aria-label="${tab.label}"
                        >
                            <span class="tab-icon">${tab.icon}</span>
                            <span class="tab-label">${tab.label}</span>
                        </button>
                    `).join('')}
                </div>
            </nav>
        `;
    }

    // ============================================
    // SECTION RENDERERS
    // ============================================

    renderOverviewSection() {
        const { identity, situation } = this.lore;
        const tier = this.intel.getTier();

        return `
            <section id="overview" class="faction-section ${this.currentSection === 'overview' ? 'active' : ''}">
                <h2 class="section-title">Empire Overview</h2>
                
                <div class="overview-layout">
                    <div class="overview-main">
                        <article class="info-card faction-description">
                            <h3>About the Koopa Troop</h3>
                            <div class="card-content">
                                ${identity.description.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')}
                            </div>
                        </article>
                        
                        <article class="info-card current-situation">
                            <h3>Current Crisis</h3>
                            <div class="situation-header">
                                <span class="status-badge ${this.getStatusClass(situation.status)}">${situation.status}</span>
                            </div>
                            <p>${identity.currentCrisis}</p>
                            
                            <div class="situation-factors">
                                ${situation.keyFacts.map(fact => `
                                    <div class="factor-item ${fact.severity}">
                                        <span class="factor-label">${fact.label}</span>
                                        <span class="factor-value">${fact.value}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </article>

                        ${this.renderIntelGate(35, `
                            <article class="info-card threat-assessment classified">
                                <h3>🔒 Internal Threat Assessment</h3>
                                <div class="assessment-grid">
                                    <div class="assessment-item critical">
                                        <span class="assessment-label">Succession Crisis</span>
                                        <div class="assessment-bar"><div class="bar-fill" style="width: 85%"></div></div>
                                        <span class="assessment-level">CRITICAL</span>
                                    </div>
                                    <div class="assessment-item high">
                                        <span class="assessment-label">Koopaling Loyalty</span>
                                        <div class="assessment-bar"><div class="bar-fill" style="width: 70%"></div></div>
                                        <span class="assessment-level">HIGH RISK</span>
                                    </div>
                                    <div class="assessment-item high">
                                        <span class="assessment-label">Iron Mandate Impact</span>
                                        <div class="assessment-bar"><div class="bar-fill" style="width: 75%"></div></div>
                                        <span class="assessment-level">SEVERE</span>
                                    </div>
                                    <div class="assessment-item medium">
                                        <span class="assessment-label">Fleet Readiness</span>
                                        <div class="assessment-bar"><div class="bar-fill" style="width: 45%"></div></div>
                                        <span class="assessment-level">DEGRADED</span>
                                    </div>
                                    <div class="assessment-item low">
                                        <span class="assessment-label">Ground Forces</span>
                                        <div class="assessment-bar"><div class="bar-fill" style="width: 20%"></div></div>
                                        <span class="assessment-level">STABLE</span>
                                    </div>
                                </div>
                            </article>
                        `, { altMessage: 'THREAT ANALYSIS CLASSIFIED' })}
                    </div>
                    
                    <aside class="overview-sidebar">
                        <div class="info-card quick-facts">
                            <h3>Quick Facts</h3>
                            <dl class="fact-list">
                                <dt>Founded</dt>
                                <dd>${identity.founded}</dd>
                                <dt>Headquarters</dt>
                                <dd>${identity.headquarters}</dd>
                                <dt>Government</dt>
                                <dd>${identity.government}</dd>
                                <dt>Population</dt>
                                <dd>${identity.population}</dd>
                                <dt>Alignment</dt>
                                <dd>${identity.alignment}</dd>
                            </dl>
                        </div>
                        
                        <div class="info-card intel-status">
                            <h3>Your Intel Access</h3>
                            <div class="intel-display-large">
                                <div class="intel-ring">
                                    <svg viewBox="0 0 36 36">
                                        <path class="ring-bg"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path class="ring-fill"
                                            stroke-dasharray="${this.intel.getLevel()}, 100"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                    <span class="ring-value">${this.intel.getLevel()}</span>
                                </div>
                                <div class="intel-tier-display ${tier.class}">
                                    <span class="tier-name">${tier.name}</span>
                                    <span class="tier-desc">${tier.description}</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        `;
    }

renderWarRoomSection() {
    const { priorities } = this.lore;

    return `
        <section id="war-room" class="faction-section ${this.currentSection === 'war-room' ? 'active' : ''}">
            <h2 class="section-title">🚨 War Room - Strategic Command</h2>
            
            <div class="war-room-intro">
                <p>Active strategic priorities and ongoing operations. Classification levels vary by intel access.</p>
            </div>

            <div class="priorities-grid">
                ${priorities.map(p => this.renderPriorityCard(p)).join('')}
            </div>
        </section>
    `;
}

renderPriorityCard(priority) {
    const canView = this.intel.canView(priority.intelRequired);
    const canViewSecret = this.intel.canView(priority.secretIntelRequired);
    const completedCount = priority.objectives?.filter(o => o.complete).length || 0;
    const totalCount = priority.objectives?.length || 1;
    const progress = Math.round((completedCount / totalCount) * 100);
    const cardId = `priority-${priority.id}`;

    if (!canView) {
        return `
            <article class="priority-card locked">
                <div class="priority-header">
                    <span class="priority-badge ${priority.priority}">${priority.priority.toUpperCase()}</span>
                    <h3>🔒 [CLASSIFIED PRIORITY]</h3>
                </div>
                <div class="priority-locked-content">
                    <p>Intel Level ${priority.intelRequired}+ Required</p>
                    <div class="intel-progress-mini">
                        <div class="progress-fill" style="width: ${Math.min(100, (this.intel.getLevel() / priority.intelRequired) * 100)}%"></div>
                    </div>
                </div>
            </article>
        `;
    }

    return `
        <article class="priority-card ${priority.status}" data-priority-id="${priority.id}">
            <div class="priority-header">
                <div class="priority-title-row">
                    <span class="priority-badge ${priority.priority}">${priority.priority.toUpperCase()}</span>
                    <h3>${priority.title}</h3>
                </div>
                <span class="priority-status ${this.getStatusClass(priority.status)}">${priority.status.toUpperCase()}</span>
            </div>
            
            <div class="priority-summary">
                <p>${priority.summary}</p>
            </div>
            
            <div class="priority-expand-section">
                <button class="priority-expand-btn" 
                        type="button" 
                        aria-expanded="false" 
                        aria-controls="${cardId}-details"
                        onclick="this.closest('.priority-card').classList.toggle('expanded'); this.setAttribute('aria-expanded', this.closest('.priority-card').classList.contains('expanded')); this.textContent = this.closest('.priority-card').classList.contains('expanded') ? '▲ Hide Details' : '▼ View Full Brief';">
                    ▼ View Full Brief
                </button>
            </div>
            
            <div class="priority-details" id="${cardId}-details">
                <div class="priority-briefing">
                    <h4>Situation Brief</h4>
                    ${priority.briefing.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')}
                </div>
                
                ${canViewSecret ? `
                    <div class="priority-classified">
                        <div class="classified-header">
                            <span class="classified-icon">👁️</span>
                            <span>CLASSIFIED ASSESSMENT</span>
                        </div>
                        ${priority.classifiedBriefing.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')}
                    </div>
                ` : `
                    <div class="classified-locked">
                        <span>🔒 Additional intelligence requires Level ${priority.secretIntelRequired}+</span>
                    </div>
                `}
                
                ${priority.objectives && priority.objectives.length > 0 ? `
                    <div class="priority-objectives">
                        <h4>Objectives (${completedCount}/${totalCount})</h4>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <ul class="objective-list">
                            ${priority.objectives.map(obj => `
                                <li class="${obj.complete ? 'complete' : 'pending'}">
                                    <span class="obj-check">${obj.complete ? '✓' : '○'}</span>
                                    <span class="obj-text">${obj.text}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>
        </article>
    `;
}
    renderLeadershipSection() {
        const { leadership } = this.lore;

        return `
            <section id="leadership" class="faction-section ${this.currentSection === 'leadership' ? 'active' : ''}">
                <h2 class="section-title">👑 Chain of Command</h2>
                
                <div class="leadership-intro">
                    <p>The formal power structure of the Koopa Troop. Current command is complicated by the King's incapacity and the resulting Regency.</p>
                </div>

                <h3 class="subsection-title">Supreme Leadership</h3>
                <div class="leadership-grid supreme">
                    ${leadership.supreme.map(leader => this.renderLeaderCard(leader)).join('')}
                </div>

                <h3 class="subsection-title">Heir Apparent</h3>
                <div class="leadership-grid heir">
                    ${this.renderLeaderCard(leadership.heir)}
                </div>

                <h3 class="subsection-title">Senior Advisors</h3>
                <div class="leadership-grid advisors">
                    ${leadership.advisors.map(advisor => this.renderLeaderCard(advisor)).join('')}
                </div>
            </section>
        `;
    }

    renderLeaderCard(person) {
        const canView = this.intel.canView(person.intelRequired);
        const canViewSecret = this.intel.canView(person.secretIntelRequired);

        return `
            <article class="person-card leader-card ${person.status}" data-person-id="${person.id}">
                <div class="person-header">
                    <span class="person-icon">${person.icon}</span>
                    <div class="person-identity">
                        <h4>${person.name}</h4>
                        <span class="person-title">${person.title}</span>
                    </div>
                </div>
                
                <div class="person-status-bar">
                    <span class="status-indicator ${this.getStatusClass(person.status)}"></span>
                    <span class="status-text">${person.statusLabel}</span>
                </div>
                
                <div class="person-location">
                    <span class="location-icon">📍</span>
                    <span>${canView ? person.location : '???'}</span>
                </div>

                ${canView ? `
                    <div class="person-bio">
                        ${person.biography.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')}
                    </div>
                    
                    <div class="person-current">
                        <h5>Current Status</h5>
                        <p>${person.currentState}</p>
                    </div>

                    ${canViewSecret && person.classifiedInfo ? `
                        <div class="person-classified">
                            <div class="classified-badge">👁️ CLASSIFIED</div>
                            ${person.classifiedInfo.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')}
                        </div>
                    ` : !canViewSecret && person.classifiedInfo ? `
                        <div class="classified-locked-inline">
                            🔒 Classified dossier requires Intel ${person.secretIntelRequired}+
                        </div>
                    ` : ''}

                    <div class="person-stats">
                        ${Object.entries(person.stats).map(([key, val]) => `
                            <span class="stat-chip" title="${key.charAt(0).toUpperCase() + key.slice(1)}">
                                ${key.charAt(0).toUpperCase()}: ${val}
                            </span>
                        `).join('')}
                    </div>
                ` : `
                    <div class="person-locked">
                        <span class="lock-icon">🔒</span>
                        <p>Intel Level ${person.intelRequired}+ required for dossier</p>
                    </div>
                `}
            </article>
        `;
    }

    renderKoopalingsSection() {
        const { koopalings } = this.lore;

        return `
            <section id="koopalings" class="faction-section ${this.currentSection === 'koopalings' ? 'active' : ''}">
                <h2 class="section-title">🎹 The Koopalings - Elite Commanders</h2>
                
                <div class="koopalings-intro">
                    <p>Seven elite commanders, each leading divisions of the Koopa Troop. With King Bowser incapacitated, their loyalties and ambitions have become critical factors in the succession crisis. While technically adopted (not blood heirs), several wield enough power to challenge the legitimate succession.</p>
                </div>

                <div class="koopalings-grid">
                    ${koopalings.map(k => this.renderKoopalingCard(k)).join('')}
                </div>
            </section>
        `;
    }

    renderKoopalingCard(koopaling) {
        const canView = this.intel.canView(koopaling.intelRequired);
        const canViewSecret = this.intel.canView(koopaling.secretIntelRequired);
        const threatClass = koopaling.threatLevel?.toLowerCase().split(' ')[0] || 'unknown';

        return `
            <article class="person-card koopaling-card ${koopaling.status}" data-person-id="${koopaling.id}">
                <div class="person-header">
                    <span class="person-icon">${koopaling.icon}</span>
                    <div class="person-identity">
                        <h4>${koopaling.name}</h4>
                        <span class="person-title">${koopaling.title}</span>
                    </div>
                    <span class="threat-badge threat-${threatClass}" title="Threat Level">
                        ${koopaling.threatLevel || '???'}
                    </span>
                </div>
                
                <div class="person-status-bar">
                    <span class="status-indicator ${this.getStatusClass(koopaling.status)}"></span>
                    <span class="status-text">${koopaling.statusLabel}</span>
                </div>
                
                <div class="person-location">
                    <span class="location-icon">📍</span>
                    <span>${canView ? koopaling.location : '???'}</span>
                </div>

                ${canView ? `
                    <div class="person-personality">
                        <strong>Profile:</strong> ${koopaling.personality}
                    </div>
                    
                    <div class="person-bio">
                        <p>${koopaling.biography}</p>
                    </div>
                    
                    <div class="person-current">
                        <h5>Current Activity</h5>
                        <p>${koopaling.currentState}</p>
                    </div>

                    ${canViewSecret && koopaling.classifiedInfo ? `
                        <div class="person-classified">
                            <div class="classified-badge">👁️ CLASSIFIED</div>
                            ${koopaling.classifiedInfo.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('')}
                        </div>
                    ` : !canViewSecret && koopaling.classifiedInfo ? `
                        <div class="classified-locked-inline">
                            🔒 Deeper analysis requires Intel ${koopaling.secretIntelRequired}+
                        </div>
                    ` : ''}

                    <div class="person-stats">
                        ${Object.entries(koopaling.stats).map(([key, val]) => `
                            <span class="stat-chip">${key}: ${val}</span>
                        `).join('')}
                    </div>
                    
                    ${koopaling.forces ? `
                        <div class="person-forces">
                            <strong>Commands:</strong> ${koopaling.forces}
                        </div>
                    ` : ''}
                ` : `
                    <div class="person-locked">
                        <span class="lock-icon">🔒</span>
                        <p>Intel Level ${koopaling.intelRequired}+ required</p>
                    </div>
                `}
            </article>
        `;
    }

    renderMilitarySection() {
        const { military } = this.lore;
        const poiBreakdown = this.territory.getMilitaryBreakdown();

        return `
            <section id="military" class="faction-section ${this.currentSection === 'military' ? 'active' : ''}">
                <h2 class="section-title">⚔️ Military Forces</h2>
                
                <div class="military-intro">
                    <p>The Koopa Troop maintains one of the largest standing armies in the known world, combining conventional ground forces with advanced airship technology and powerful magical support.</p>
                </div>

                <h3 class="subsection-title">Combat Divisions</h3>
                <div class="divisions-grid">
                    ${military.divisions.map(div => this.renderDivisionCard(div)).join('')}
                </div>

                <h3 class="subsection-title">Notable Assets</h3>
                <div class="assets-grid">
                    ${military.notableAssets.map(asset => `
                        <div class="asset-card ${asset.status.toLowerCase().includes('lost') ? 'lost' : asset.status.toLowerCase().includes('drydock') ? 'repair' : 'active'}">
                            <span class="asset-icon">${asset.icon}</span>
                            <div class="asset-info">
                                <span class="asset-name">${asset.name}</span>
                                <span class="asset-location">${asset.location}</span>
                            </div>
                            <div class="asset-status-info">
                                <span class="asset-status">${asset.status}</span>
                                ${asset.notes ? `<span class="asset-notes">${asset.notes}</span>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>

                ${this.territory.pois.length > 0 ? `
                    <h3 class="subsection-title">Territorial Force Distribution</h3>
                    <div class="poi-military-grid">
                        ${this.renderPOIMilitaryCategory(poiBreakdown.ground, 'Ground Forces', '🛡️')}
                        ${this.renderPOIMilitaryCategory(poiBreakdown.air, 'Aerial Forces', '✈️')}
                        ${this.renderPOIMilitaryCategory(poiBreakdown.naval, 'Naval Forces', '⚓')}
                        ${this.renderPOIMilitaryCategory(poiBreakdown.magic, 'Magical Units', '✨')}
                        ${this.renderPOIMilitaryCategory(poiBreakdown.special, 'Special Ops', '👻')}
                    </div>
                ` : ''}
            </section>
        `;
    }

    renderDivisionCard(division) {
        const canViewIntel = this.intel.canView(division.intelRequired);
        const statusClass = division.status === 'ready' ? 'good' : 
                           division.status === 'active' ? 'good' :
                           division.status === 'compromised' ? 'danger' : 
                           division.status === 'withdrawn' ? 'warning' : 'default';

        return `
            <article class="division-card ${statusClass} collapsible-card">
                <div class="division-header collapsible-header">
                    <span class="division-icon">${division.icon}</span>
                    <div class="division-title">
                        <h4>${division.name}</h4>
                        <span class="division-commander">Commander: ${division.commander}</span>
                    </div>
                    <span class="division-status ${this.getStatusClass(division.status)}">${division.status.toUpperCase()}</span>
                </div>
                
                <div class="division-strength">
                    <div class="strength-bar">
                        <div class="strength-fill ${statusClass}" style="width: ${division.strength}%"></div>
                    </div>
                    <span class="strength-text">${division.strength}% Readiness</span>
                </div>

                <p class="division-description">${division.description}</p>
                
                <div class="division-details collapsible-content">
                    <div class="division-situation">
                        <h5>Current Situation</h5>
                        <p>${division.details}</p>
                    </div>
                    
                    ${canViewIntel && division.classifiedDetails ? `
                        <div class="division-intel">
                            <span class="intel-badge">🕵️ Intel Assessment</span>
                            <p>${division.classifiedDetails}</p>
                        </div>
                    ` : !canViewIntel ? `
                        <div class="intel-locked-inline">
                            🔒 Detailed assessment requires Intel ${division.intelRequired}+
                        </div>
                    ` : ''}
                    
                    <div class="division-assets">
                        <h5>Known Assets</h5>
                        <ul class="asset-list">
                            ${division.assets.map(a => `<li>${a}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </article>
        `;
    }

    renderPOIMilitaryCategory(units, title, icon) {
        if (!units || units.length === 0) return '';
        
        const totalStrength = units.reduce((sum, u) => sum + (u.military_strength || u.militaryStrength || 0), 0);

        return `
            <div class="poi-category-card">
                <h4>${icon} ${title}</h4>
                <div class="category-stats">
                    <span>${units.length} installations</span>
                    <span>⚔️ ${this.formatNumber(totalStrength)} total strength</span>
                </div>
                <ul class="unit-list">
                    ${units.slice(0, 5).map(u => `
                        <li class="unit-item">
                            <span class="unit-name">${u.name || 'Unknown Installation'}</span>
                            <span class="unit-region">${u.regionName}</span>
                            <span class="unit-strength">⚔️${u.military_strength || u.militaryStrength || 0}</span>
                        </li>
                    `).join('')}
                    ${units.length > 5 ? `<li class="unit-more">...and ${units.length - 5} more</li>` : ''}
                </ul>
            </div>
        `;
    }

    renderTerritorySection() {
        const territories = this.territory.getFiltered(this.filters.territory);
        const stats = this.territory.stats;

        return `
            <section id="territory" class="faction-section ${this.currentSection === 'territory' ? 'active' : ''}">
                <h2 class="section-title">🗺️ Territorial Holdings</h2>
                
                <div class="territory-controls">
                    <div class="territory-summary">
                        <div class="terr-stat controlled">
                            <span class="value">${stats.controlledRegions}</span>
                            <span class="label">Controlled</span>
                        </div>
                        <div class="terr-stat contested">
                            <span class="value">${stats.contestedRegions}</span>
                            <span class="label">Contested</span>
                        </div>
                        <div class="terr-stat presence">
                            <span class="value">${stats.presenceRegions}</span>
                            <span class="label">Presence</span>
                        </div>
                        <div class="terr-stat total">
                            <span class="value">${stats.activeRegions.size}</span>
                            <span class="label">Total Regions</span>
                        </div>
                    </div>
                    
                    <div class="territory-filters">
                        <label for="territory-filter">Filter:</label>
                        <select id="territory-filter" class="filter-select" data-filter-type="territory">
                            <option value="all" ${this.filters.territory === 'all' ? 'selected' : ''}>All Territories</option>
                            <option value="controlled" ${this.filters.territory === 'controlled' ? 'selected' : ''}>Controlled</option>
                            <option value="contested" ${this.filters.territory === 'contested' ? 'selected' : ''}>Contested</option>
                            <option value="presence" ${this.filters.territory === 'presence' ? 'selected' : ''}>Presence Only</option>
                        </select>
                    </div>
                </div>

                <div class="territory-grid">
                    ${territories.length > 0 ? territories.map(t => `
                        <article class="territory-card ${t.status}">
                            <div class="territory-header">
                                <h4>${t.name}</h4>
                                <span class="territory-status">${t.status.toUpperCase()}</span>
                            </div>
                            
                            <div class="territory-control">
                                <div class="control-bar">
                                    <div class="control-fill" style="width: ${t.controlPercent}%"></div>
                                </div>
                                <span class="control-text">${t.controlPercent}% Control</span>
                            </div>
                            
                            <div class="territory-stats">
                                <span title="Points of Interest">📍 ${t.poiCount}/${t.totalPOIs} POIs</span>
                                <span title="Military Strength">⚔️ ${this.formatNumber(t.military)}</span>
                                <span title="Economic Value">💰 ${this.formatNumber(t.economic)}</span>
                            </div>
                            
                            ${t.isContested ? `
                                <div class="contested-warning">
                                    <span>🔥 Active conflict zone</span>
                                </div>
                            ` : ''}
                        </article>
                    `).join('') : `
                        <p class="no-data">No territories match the current filter.</p>
                    `}
                </div>
            </section>
        `;
    }

    renderDiplomacySection() {
        const { diplomacy } = this.lore;

        return `
            <section id="diplomacy" class="faction-section ${this.currentSection === 'diplomacy' ? 'active' : ''}">
                <h2 class="section-title">🤝 Diplomatic Relations</h2>
                
                <div class="diplomacy-intro">
                    <p>The Koopa Troop's relationships with major powers and factions. Current strategic assessments and threat levels.</p>
                </div>

                <div class="diplomacy-grid">
                    ${diplomacy.map(rel => this.renderDiplomacyCard(rel)).join('')}
                </div>
            </section>
        `;
    }

    renderDiplomacyCard(relation) {
        const canViewIntel = this.intel.canView(relation.intelRequired);

        return `
            <article class="diplomacy-card ${relation.status}">
                <div class="diplomacy-header" style="border-color: ${relation.color}">
                    <span class="diplomacy-icon">${relation.icon}</span>
                    <div class="diplomacy-identity">
                        <h4>${relation.name}</h4>
                        <span class="diplomacy-status" style="background: ${relation.color}">${relation.statusLabel}</span>
                    </div>
                </div>
                
                <div class="diplomacy-body">
                    <p class="diplomacy-description">${relation.description}</p>
                    
                    ${canViewIntel ? `
                        <div class="diplomacy-assessment">
                            <h5>🕵️ Strategic Assessment</h5>
                            <p>${relation.assessment}</p>
                            
                            ${relation.classifiedAssessment ? `
                                <div class="classified-note">
                                    <span class="classified-icon">👁️</span>
                                    <p>${relation.classifiedAssessment}</p>
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="diplomacy-value">
                            <strong>Strategic Value:</strong> ${relation.strategicValue}
                        </div>
                    ` : `
                        <div class="intel-locked-inline">
                            🔒 Full assessment requires Intel ${relation.intelRequired}+
                        </div>
                    `}
                </div>
            </article>
        `;
    }

    renderIntelFeedSection() {
        const { intelFeed } = this.lore;
        
        const filteredFeed = this.filters.intel === 'all' 
            ? intelFeed 
            : intelFeed.filter(item => item.priority === this.filters.intel);

        return `
            <section id="intel-feed" class="faction-section ${this.currentSection === 'intel-feed' ? 'active' : ''}">
                <h2 class="section-title">📡 Intelligence Feed</h2>
                
                <div class="intel-feed-controls">
                    <div class="feed-summary">
                        <span class="feed-count">${filteredFeed.length} reports</span>
                        <span class="feed-clearance">Clearance: ${this.intel.getTier().name}</span>
                    </div>
                    
                    <div class="feed-filters">
                        <label for="intel-filter">Priority:</label>
                        <select id="intel-filter" class="filter-select" data-filter-type="intel">
                            <option value="all" ${this.filters.intel === 'all' ? 'selected' : ''}>All</option>
                            <option value="critical" ${this.filters.intel === 'critical' ? 'selected' : ''}>Critical</option>
                            <option value="high" ${this.filters.intel === 'high' ? 'selected' : ''}>High</option>
                            <option value="medium" ${this.filters.intel === 'medium' ? 'selected' : ''}>Medium</option>
                            <option value="low" ${this.filters.intel === 'low' ? 'selected' : ''}>Low</option>
                        </select>
                    </div>
                </div>

                <div class="intel-feed-list">
                    ${filteredFeed.length > 0 ? filteredFeed.map(item => `
                        <article class="intel-feed-item priority-${item.priority}" data-item-id="${item.id}">
                            <div class="feed-item-icon">${this.getIntelIcon(item.type)}</div>
                            
                            <div class="feed-item-content">
                                <div class="feed-item-header">
                                    <span class="feed-item-title">${item.title}</span>
                                    <span class="feed-item-date">${item.date}</span>
                                </div>
                                
                                <p class="feed-item-text">${item.text}</p>
                                
                                <div class="feed-item-meta">
                                    <span class="priority-tag ${item.priority}">${item.priority.toUpperCase()}</span>
                                    ${item.tags.map(tag => `<span class="intel-tag">${tag}</span>`).join('')}
                                </div>
                            </div>
                        </article>
                    `).join('') : `
                        <p class="no-data">No intel reports match the current filter.</p>
                    `}
                </div>
            </section>
        `;
    }

    renderCodexSection() {
        const { codex } = this.lore;

        return `
            <section id="codex" class="faction-section ${this.currentSection === 'codex' ? 'active' : ''}">
                <h2 class="section-title">📜 The Koopa Codex</h2>
                
                <div class="codex-intro">
                    <p>The sacred tenets that guide all true servants of the Koopa crown. Passed down through generations, these principles define what it means to be part of the Troop.</p>
                </div>

                <div class="codex-grid">
                    ${codex.map((tenet, idx) => `
                        <article class="codex-card ${tenet.status === 'suspended' ? 'suspended' : ''}">
                            <div class="codex-number">${idx + 1}</div>
                            <div class="codex-content">
                                <h4>${tenet.title}</h4>
                                <p>${tenet.text}</p>
                                ${tenet.note ? `<p class="codex-note"><em>${tenet.note}</em></p>` : ''}
                                ${tenet.status === 'suspended' ? `<span class="suspended-badge">SUSPENDED</span>` : ''}
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>
        `;
    }

    renderDebugPanel() {
        if (!state?.debugMode && this.intel.getLevel() < 100) {
            return `
                <div class="debug-toggle-container">
                    <button id="debug-intel-toggle" class="debug-toggle-btn" title="Toggle Debug Mode">
                        🔧
                    </button>
                </div>
            `;
        }

        const breakdown = this.intel.getIntelBreakdown();
        
        return `
            <div class="debug-panel active">
                <div class="debug-header">
                    <span>🔧 Debug Panel</span>
                    <button id="debug-intel-toggle" class="debug-close">✕</button>
                </div>
                <div class="debug-content">
                    <div class="debug-item">
                        <span>Debug Mode:</span>
                        <span class="debug-value">${state?.debugMode ? 'ON' : 'OFF'}</span>
                    </div>
                    <div class="debug-item">
                        <span>Intel Total:</span>
                        <span class="debug-value">${breakdown.total}</span>
                    </div>
                    <div class="debug-item">
                        <span>Base:</span>
                        <span class="debug-value">${breakdown.base}</span>
                    </div>
                    <div class="debug-item">
                        <span>History:</span>
                        <span class="debug-value">+${breakdown.history}</span>
                    </div>
                    <div class="debug-item">
                        <span>Active:</span>
                        <span class="debug-value">+${breakdown.active}</span>
                    </div>
                    <div class="debug-item">
                        <span>POIs Found:</span>
                        <span class="debug-value">${this.territory.pois.length}</span>
                    </div>
                    <div class="debug-item">
                        <span>Territories:</span>
                        <span class="debug-value">${this.territory.territories.length}</span>
                    </div>
                </div>
            </div>
        `;
    }
}


// ============================================
// INITIALIZATION
// ============================================

let koopaFactionInstance = null;

function initKoopaFactionPage() {
    // Load state if available
    if (typeof loadState === 'function') {
        loadState();
    }

    // Create managers
    const intelManager = new KoopaIntelManager();
    const territoryManager = new KoopaTerritoryManager();
    territoryManager.init();

    // Create and initialize UI
    const ui = new KoopaFactionUI(intelManager, territoryManager);
    ui.init();

    // Store instance for debugging
    koopaFactionInstance = { intelManager, territoryManager, ui, lore: KOOPA_LORE };
    window.koopaFactionDebug = koopaFactionInstance;

    // Log initialization
    console.log('[KoopaFaction] Initialized');
    console.log('[KoopaFaction] Intel Level:', intelManager.getLevel());
    console.log('[KoopaFaction] Intel Breakdown:', intelManager.getIntelBreakdown());
    console.log('[KoopaFaction] POIs:', territoryManager.pois.length);
    console.log('[KoopaFaction] Territories:', territoryManager.territories.length);

    return koopaFactionInstance;
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKoopaFactionPage);
} else {
    initKoopaFactionPage();
}

// Exports
export { 
    KoopaIntelManager, 
    KoopaTerritoryManager, 
    KoopaFactionUI, 
    KOOPA_LORE,
    initKoopaFactionPage 
};