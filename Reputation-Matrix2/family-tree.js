// =============================================
// DYNASTY TREE - INTERACTIVE FAMILY TREE PAGE
// Bloodlines of the Mushroom Kingdom & Allied Realms
// =============================================

import { state, loadState } from './state.js';
import { getIntelBreakdown } from './systems/common.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE } from './calendar-data.js';

// =============================================
// EXPANDED DYNASTY DATA
// =============================================

const DYNASTY_DATA = {
    meta: {
        title: 'BLOODLINES OF THE REALM',
        subtitle: 'Interactive Dynasty Archives',
        classification: 'ROYAL GENEALOGICAL RECORDS',
        lastUpdate: CURRENT_GAME_DATE,
        archivist: 'Master Scribe Inkwell'
    },

    // =========================================
    // HOUSE TOADSTOOL - THE MUSHROOM THRONE
    // =========================================
houseToadstool: {
    name: 'House Toadstool',
    sigil: '🍑',
    colors: ['#FFB6C1', '#FFD700'],
    motto: 'Grace in Sovereignty',
    altMotto: 'Mycelium Binds All',
    founded: 412,
    founder: 'Toadstool I "The Spore-Father"',
    seat: "Peach's Castle",
    status: 'EXTINCT (Main Line)',
        cadetBranches: [
            {
                name: 'House Rosewood',
                status: 'active',
                claimStrength: 2,
                head: 'Lord Crimson Rosewood',
                intel: 40,
                notes: 'Weak claim. Few resources.'
            },
            {
                name: 'House Goldcap',
                status: 'DESTROYED',
                claimStrength: 0,
                head: 'None (Extinct)',
                intel: 50,
                notes: 'Massacred in 982. "Night of Falling Stars"'
            },
            {
                name: 'House Fernshade',
                status: 'active',
                claimStrength: 1,
                head: 'Baron Moss Fernshade',
                intel: 35,
                notes: 'Illegitimate origin. Claim disputed.'
            }
        ],    
    members: [
        // =========================================
        // GENERATION 1 - THE FOUNDERS
        // =========================================
        {
            id: 'toadstool_i',
            name: 'King Toadstool I',
            epithet: 'The Spore-Father',
            born: 385,
            died: 478,
            reign: '412-478',
            generation: 1,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_mycellia',
            children: ['toadstool_ii', 'prince_fungold', 'princess_amanita'],
            parents: null,
            portrait: '🍄',
            
            summary: 'A common Toad who discovered the Star Rod and used its power to unite the scattered tribes. Founded the Mushroom Kingdom after defeating the Goomba Hordes at the Battle of Spore Valley. His reign established the foundations of modern Mushroom civilization.',
            
            secrets: [
                { intel: 15, text: 'Was originally a farmer named "Sporeling" before finding the Star Rod.' },
                { intel: 30, text: 'The Star Spirits chose him specifically. They had been watching him for years.' },
                { intel: 50, text: 'Made a binding pact with the Star Spirits - his bloodline would protect the Star Rod, and in return, they would be blessed with long life and magic resistance.' },
                { intel: 70, text: 'The "Spore Blessing" has a dark side - if the bloodline ever truly ends, the pact breaks, and something terrible awakens.' },
                { intel: 90, text: 'He wasn\'t the first to find the Star Rod. He was the first to SURVIVE finding it. The previous twelve finders all died mysteriously.' }
            ],
            
            achievements: [
                'Founded the Mushroom Kingdom (412)',
                'Defeated the Goomba Hordes at Spore Valley (410)',
                'Built the original Toad Town (415)',
                'Established the Star Shrine alliance (420)',
                'Created the Royal Guard (425)',
                'Negotiated peace with the Koopa tribes (440)'
            ],
            
            controversies: [
                'Allegedly exterminated the "Dark Toad" faction who opposed unification',
                'The true nature of his Star Spirit pact remains sealed in the Star Shrine',
                'Some historians claim he murdered his predecessor, a tribal chief named Boletus'
            ],
            
            relationships: [
                { person: 'Queen Mycellia', type: 'Beloved Wife', notes: 'A legendary love story' },
                { person: 'The Star Spirits', type: 'Bound Allies', notes: 'The pact defines his legacy' },
                { person: 'Koopa King Shelldon', type: 'Reluctant Peace', notes: 'Signed the First Treaty' }
            ]
        },
        {
            id: 'queen_mycellia',
            name: 'Queen Mycellia',
            epithet: 'The Bloom-Mother',
            born: 390,
            died: 465,
            reign: '412-465',
            generation: 1,
            icon: '👸',
            status: 'deceased',
            spouse: 'toadstool_i',
            children: ['toadstool_ii', 'prince_fungold', 'princess_amanita'],
            parents: null,
            portrait: '🌸',
            
            summary: 'A powerful healer and diplomat who was secretly half-Dryad. Convinced the Piranha Plant clans to ally with the Kingdom and established the Royal Gardens that still exist today.',
            
            secrets: [
                { intel: 20, text: 'Her mother was a Dryad of the Forever Forest who fell in love with a Toad merchant.' },
                { intel: 40, text: 'She could communicate with all plant life. The Royal Gardens were designed as a spy network.' },
                { intel: 60, text: 'Her bloodline carries latent plant-communion abilities that emerge unpredictably in descendants.' },
                { intel: 80, text: 'She foresaw the civil war in a vision and wrote a sealed letter to "the last true heir." No one knows where the letter is.' }
            ],
            
            achievements: [
                'Established the Royal Gardens (418)',
                'Negotiated the Piranha Alliance (425)',
                'Founded the Healer\'s Guild (430)',
                'Created the Queen\'s Intelligence Network (435)'
            ],
            
            relationships: [
                { person: 'King Toadstool I', type: 'Soul-Bonded', notes: 'Their love was legendary' },
                { person: 'The Dryad Council', type: 'Secret Ally', notes: 'They supported her in shadows' },
                { person: 'Princess Amanita', type: 'Worried Mother', notes: 'Feared her daughter\'s darkness' }
            ]
        },
        {
            id: 'prince_fungold',
            name: 'Prince Fungold',
            epithet: 'The Forgotten',
            born: 415,
            died: 445,
            generation: 1,
            icon: '💀',
            status: 'deceased',
            spouse: null,
            children: null,
            parents: ['toadstool_i', 'queen_mycellia'],
            portrait: '😔',
            
            summary: 'The eldest son who died young under mysterious circumstances. His death allowed his younger brother to inherit the throne.',
            
            secrets: [
                { intel: 25, text: 'Died in a "hunting accident" but no body was ever recovered.' },
                { intel: 50, text: 'He was planning to challenge his father\'s alliance with the Star Spirits, believing the pact was dangerous.' },
                { intel: 75, text: 'He was murdered by agents of the Star Spirits to protect the pact. His father knew and said nothing.' },
                { intel: 95, text: 'His ghost is said to haunt the Star Shrine, warning visitors about the true cost of the pact.' }
            ],
            
            controversies: [
                'His death was never properly investigated',
                'Some claim he was the rightful heir and his line was stolen',
                'Conspiracy theories suggest he faked his death and fled'
            ]
        },
        {
            id: 'princess_amanita',
            name: 'Princess Amanita',
            epithet: 'The Dark Bloom',
            born: 420,
            died: 510,
            generation: 1,
            icon: '🖤',
            status: 'deceased',
            spouse: 'lord_shadow',
            children: ['the_shadow_line'],
            parents: ['toadstool_i', 'queen_mycellia'],
            portrait: '🌑',
            
            summary: 'The rebellious daughter who embraced dark magic and was exiled. Her descendants, if any survived, would have a hidden claim to the throne.',
            
            secrets: [
                { intel: 30, text: 'She discovered forbidden magic in the Star Shrine\'s sealed archives.' },
                { intel: 55, text: 'Married a sorcerer called "Lord Shadow" - no one knows his true identity.' },
                { intel: 75, text: 'She had children. The line survived in secret. They call themselves the "Nightcaps."' },
                { intel: 90, text: 'The Nightcaps have been manipulating events for centuries. They may have orchestrated Peach\'s assassination.' }
            ],
            
            controversies: [
                'Exiled for practicing dark magic (450)',
                'Accused of attempting to murder her brother',
                'Her marriage was never officially recognized'
            ]
        },
        
        // =========================================
        // GENERATION 2 - THE BUILDERS
        // =========================================
        {
            id: 'toadstool_ii',
            name: 'King Toadstool II',
            epithet: 'The Builder',
            born: 420,
            died: 512,
            reign: '478-512',
            generation: 2,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_capella',
            children: ['toadstool_iii', 'princess_morellia', 'duke_fernshade'],
            parents: ['toadstool_i', 'queen_mycellia'],
            portrait: '🏰',
            
            summary: 'The king who built Peach\'s Castle and expanded the kingdom\'s borders. A pragmatic ruler who valued infrastructure over military glory.',
            
            secrets: [
                { intel: 25, text: 'Had an illegitimate son with a Dryad serving maid - the founder of House Fernshade.' },
                { intel: 45, text: 'The castle contains over 200 secret passages, known only to the bloodline.' },
                { intel: 65, text: 'He hid something beneath the castle. The lowest levels have never been fully explored.' },
                { intel: 85, text: 'He built the castle on top of ancient Shroob ruins deliberately, to contain something imprisoned there.' }
            ],
            
            achievements: [
                'Built Peach\'s Castle (485)',
                'Expanded to Grass Land (490)',
                'Established Sarasaland trade routes (495)',
                'Created the Merchant Guild charter (500)',
                'Built the Warp Pipe prototype network (505)'
            ],
            
            relationships: [
                { person: 'Queen Capella', type: 'Political Marriage', notes: 'Grew to love her over time' },
                { person: 'The Dryad Maid', type: 'Secret Affair', notes: 'Truly loved her but couldn\'t acknowledge it' },
                { person: 'Duke Fernshade I', type: 'Acknowledged Bastard', notes: 'Gave him lands to keep him close' }
            ]
        },
        {
            id: 'queen_capella',
            name: 'Queen Capella',
            epithet: 'The Star-Touched',
            born: 425,
            died: 510,
            reign: '478-510',
            generation: 2,
            icon: '👸',
            status: 'deceased',
            spouse: 'toadstool_ii',
            children: ['toadstool_iii', 'princess_morellia'],
            parents: null,
            portrait: '⭐',
            
            summary: 'A mystic who could commune directly with the Star Spirits. She codified the Kingdom\'s magical laws and established the Royal Academy.',
            
            secrets: [
                { intel: 30, text: 'She was chosen by the Star Spirits before birth. They guided her to marry Toadstool II.' },
                { intel: 50, text: 'Received visions of the kingdom\'s destruction - wrote prophecies sealed in the Star Shrine.' },
                { intel: 70, text: 'She knew about her husband\'s affair and the bastard child. She chose to say nothing.' },
                { intel: 90, text: 'Her prophecies specifically mention "The Child of Rose and Claw" - the Hidden Heir was foretold 500 years ago.' }
            ],
            
            achievements: [
                'Founded the Royal Academy of Magic (480)',
                'Codified the Laws of Magic (485)',
                'Established the Star Shrine Protocols (490)'
            ]
        },
        {
            id: 'princess_morellia',
            name: 'Princess Morellia',
            epithet: 'The Scholar',
            born: 460,
            died: 540,
            generation: 2,
            icon: '📚',
            status: 'deceased',
            spouse: 'lord_sage',
            children: ['the_morel_line'],
            parents: ['toadstool_ii', 'queen_capella'],
            portrait: '🎓',
            
            summary: 'Founder of the Royal Archives and matriarch of House Morel. Chose knowledge over the throne.',
            
            secrets: [
                { intel: 25, text: 'Deliberately removed herself from succession to pursue scholarship.' },
                { intel: 50, text: 'Discovered records suggesting the Toadstools weren\'t the original rulers.' },
                { intel: 75, text: 'Founded House Morel as a secret society to preserve dangerous knowledge.' }
            ],
            
            achievements: [
                'Founded the Royal Archives (490)',
                'Catalogued all known magical species (495-510)',
                'Established House Morel (515)'
            ]
        },
        
        // =========================================
        // GENERATION 3 - THE WARRIORS
        // =========================================
        {
            id: 'toadstool_iii',
            name: 'King Toadstool III',
            epithet: 'The Warrior',
            born: 480,
            died: 570,
            reign: '512-570',
            generation: 3,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_bellflower',
            children: ['toadstool_iv_early', 'prince_thornwald', 'princess_lily'],
            parents: ['toadstool_ii', 'queen_capella'],
            portrait: '⚔️',
            
            summary: 'The king who fought the First Koopa War and established the kingdom\'s military traditions. A brilliant tactician who preferred diplomacy but was forced into war.',
            
            secrets: [
                { intel: 30, text: 'The Armistice of Embers contained secret provisions making the Toadstools nominal vassals of the Koopas - never enforced.' },
                { intel: 55, text: 'He and Mortimer Koopa became unlikely friends after the war. They played chess by courier for 30 years.' },
                { intel: 75, text: 'He discovered something during the war that made him seek peace at any cost. He never told anyone what he saw.' },
                { intel: 95, text: 'He found the "Void Gate" - a portal to something terrible. The war was stopped to prevent its opening.' }
            ],
            
            achievements: [
                'Won the First Koopa War (540-545)',
                'Signed the Armistice of Embers (545)',
                'Established the Warp Pipe network (550)',
                'Founded the Royal Academy of War (555)'
            ],
            
            relationships: [
                { person: 'King Mortimer Koopa', type: 'Respected Enemy/Friend', notes: 'A complex bond forged in war' },
                { person: 'Queen Bellflower', type: 'Devoted Husband', notes: 'She was his tactical advisor' },
                { person: 'Prince Thornwald', type: 'Disappointed Father', notes: 'Wished his son would fight' }
            ]
        },
        {
            id: 'queen_bellflower',
            name: 'Queen Bellflower',
            epithet: 'The Strategist',
            born: 485,
            died: 575,
            reign: '512-570',
            generation: 3,
            icon: '👸',
            status: 'deceased',
            spouse: 'toadstool_iii',
            children: ['toadstool_iv_early', 'prince_thornwald', 'princess_lily'],
            parents: null,
            portrait: '🗺️',
            origin: 'Military Family',
            
            summary: 'A general\'s daughter who became the true military mind behind the throne. Many credit her with winning the First Koopa War.',
            
            secrets: [
                { intel: 25, text: 'She personally led troops in battle while disguised as a common soldier.' },
                { intel: 50, text: 'Developed the "Flower Formation" - still used by the Royal Guard today.' },
                { intel: 75, text: 'She proposed assassinating Mortimer Koopa. Her husband refused, and she never forgave him.' }
            ],
            
            achievements: [
                'Developed modern Mushroom military tactics',
                'Won the Battle of Ember Plains (543)',
                'Trained the first female Royal Guard unit'
            ]
        },
        {
            id: 'prince_thornwald',
            name: 'Prince Thornwald Rosewood',
            epithet: 'The Gardener',
            born: 510,
            died: 590,
            generation: 3,
            icon: '🌹',
            status: 'deceased',
            spouse: 'lady_petal_i',
            children: ['rosewood_line'],
            parents: ['toadstool_iii', 'queen_bellflower'],
            portrait: '🌷',
            
            summary: 'Second son who chose botany over politics. Founded House Rosewood after surrendering his claim.',
            
            secrets: [
                { intel: 25, text: 'His "choice" was actually an ultimatum from his warlike brother - renounce or die.' },
                { intel: 50, text: 'Discovered a Fire Flower variant that burns with black flame. Seeds locked in the Rose Manor vault.' },
                { intel: 75, text: 'He was the better heir. History was rewritten to make his brother seem worthier.' }
            ]
        },
        {
            id: 'princess_lily',
            name: 'Princess Lily',
            epithet: 'The Lost',
            born: 520,
            died: 540,
            generation: 3,
            icon: '🌸',
            status: 'deceased',
            spouse: null,
            children: null,
            parents: ['toadstool_iii', 'queen_bellflower'],
            portrait: '💔',
            
            summary: 'Died young during the First Koopa War. Her death hardened the family against the Koopas for generations.',
            
            secrets: [
                { intel: 35, text: 'She wasn\'t killed in battle - she was kidnapped.' },
                { intel: 60, text: 'Mortimer Koopa tried to ransom her back, but she died in captivity from illness.' },
                { intel: 85, text: 'She fell in love with her Koopa captor. She died of heartbreak when her family attacked to "rescue" her.' }
            ]
        },
        
        // =========================================
        // GENERATIONS 4-7 (ABBREVIATED)
        // =========================================
        {
            id: 'toadstool_iv_early',
            name: 'King Toadstool IV "The Elder"',
            epithet: 'The Diplomat',
            born: 505,
            died: 600,
            reign: '570-600',
            generation: 4,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_primrose',
            children: ['toadstool_v'],
            parents: ['toadstool_iii', 'queen_bellflower'],
            portrait: '🤝',
            
            summary: 'Maintained the peace after the war. His reign was marked by prosperity and cultural flourishing.',
            
            secrets: [
                { intel: 40, text: 'Secretly maintained correspondence with Koopa royalty, building foundations for future peace.' },
                { intel: 70, text: 'Discovered the existence of the Nightcap faction but chose not to eliminate them.' }
            ]
        },
        {
            id: 'toadstool_v',
            name: 'King Toadstool V',
            epithet: 'The Mad',
            born: 560,
            died: 650,
            reign: '600-650',
            generation: 5,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_violet',
            children: ['toadstool_vi', 'prince_umbra'],
            parents: ['toadstool_iv_early', 'queen_primrose'],
            portrait: '😵',
            
            summary: 'A king whose sanity deteriorated over his long reign. The "Three Dark Days" occurred when he was briefly possessed.',
            
            secrets: [
                { intel: 30, text: 'His madness began after visiting the castle\'s lowest levels.' },
                { intel: 55, text: 'For three days in 622, he was possessed by Lord Shade Fernshade using the Shadow Spore ritual.' },
                { intel: 80, text: 'During the possession, he spoke of "The Sleeper Below" and tried to open the Void Gate.' },
                { intel: 95, text: 'His madness was caused by glimpsing an Elder Shroob imprisoned beneath the castle.' }
            ],
            
            controversies: [
                'The Three Dark Days (622)',
                'Ordered the execution of 100 advisors in a paranoid purge',
                'His son Umbra led a failed coup'
            ]
        },
        {
            id: 'prince_umbra',
            name: 'Prince Umbra',
            epithet: 'The Usurper',
            born: 600,
            died: 645,
            generation: 5,
            icon: '⚔️',
            status: 'deceased',
            spouse: null,
            children: null,
            parents: ['toadstool_v', 'queen_violet'],
            portrait: '🗡️',
            
            summary: 'Attempted to overthrow his mad father in 640. Failed and was executed. Some say he was right to try.',
            
            secrets: [
                { intel: 35, text: 'He discovered his father was planning to open the Void Gate.' },
                { intel: 60, text: 'The coup failed because the Nightcaps betrayed him to protect their influence over the Mad King.' },
                { intel: 85, text: 'His last words were "The sleeper must never wake." He died a hero, remembered as a traitor.' }
            ]
        },
        {
            id: 'toadstool_vi',
            name: 'King Toadstool VI',
            epithet: 'The Restorer',
            born: 595,
            died: 710,
            reign: '650-710',
            generation: 6,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_aurora',
            children: ['toadstool_vii'],
            parents: ['toadstool_v', 'queen_violet'],
            portrait: '🌅',
            
            summary: 'Restored stability after his father\'s madness. Sealed the lower castle levels permanently.',
            
            secrets: [
                { intel: 40, text: 'He executed everyone who knew about the Void Gate, then sealed the records.' },
                { intel: 70, text: 'Created the "Watcher" position - a secret guardian of the sealed levels. The position still exists.' }
            ],
            
            achievements: [
                'Restored public trust in the monarchy',
                'Sealed the dangerous lower castle levels',
                'Established the Golden Age of Peace'
            ]
        },
        {
            id: 'toadstool_vii',
            name: 'King Toadstool VII',
            epithet: 'The Golden',
            born: 680,
            died: 790,
            reign: '710-790',
            generation: 7,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_marigold',
            children: ['toadstool_viii'],
            parents: ['toadstool_vi', 'queen_aurora'],
            portrait: '✨',
            
            summary: 'Presided over the kingdom\'s golden age. Expanded trade, built universities, and fostered the arts.',
            
            secrets: [
                { intel: 35, text: 'The golden age was funded by the discovery of new gold veins - later House Goldcap territory.' },
                { intel: 65, text: 'He established secret contact with the Shroob Remnant, trading knowledge for technology.' }
            ],
            
            achievements: [
                'Founded three universities',
                'Doubled the kingdom\'s trade revenue',
                'Established the Royal Museum'
            ]
        },
        
        // =========================================
        // GENERATION 8 - THE LAST GENERATION
        // =========================================
        {
            id: 'toadstool_viii',
            name: 'King Toadstool VIII',
            epithet: 'The Uncertain',
            born: 760,
            died: 870,
            reign: '790-870',
            generation: 8,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_aster',
            children: ['king_toadstool_iv'],
            parents: ['toadstool_vii', 'queen_marigold'],
            portrait: '❓',
            
            summary: 'A king who ruled during changing times. The merchant guilds rose to power under his reign.',
            
            secrets: [
                { intel: 30, text: 'He was a weak ruler who let the nobles accumulate too much power.' },
                { intel: 55, text: 'The Regency Council was formed during his reign, originally to "assist" him.' },
                { intel: 80, text: 'He was slowly poisoned over decades by members of what became the Regency.' }
            ]
        },
        {
            id: 'king_toadstool_iv',
            name: 'King Toadstool IV',
            epithet: 'The Last King',
            born: 870,
            died: 940,
            reign: '905-940',
            generation: 9,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_dahlia',
            children: ['princess_peach'],
            parents: ['toadstool_viii', 'queen_aster'],
            portrait: '😔',
            
            summary: 'The final Toadstool king. A benevolent ruler who tried to reform the system but was murdered for it. His death left his daughter isolated and vulnerable.',
            
            secrets: [
                { intel: 20, text: 'His marriage to Dahlia of Sarasaland was a love match, unusual for royalty.' },
                { intel: 40, text: 'He was planning to dissolve the Regency Council and rule directly.' },
                { intel: 60, text: 'Loyalist exhumations found Midnight Shade poison in his remains - he was murdered.' },
                { intel: 80, text: 'He was preparing to name Bowser\'s father as an official "Shield of the Realm" - a title that would have ended centuries of conflict.' },
                { intel: 95, text: 'The night he died, he had completed a new constitution that would have made the kingdom a democracy. It was burned.' }
            ],
            
            achievements: [
                'Maintained peace with the Koopa Kingdom',
                'Expanded trade with Beanbean Kingdom',
                'Founded the Royal Hospital system',
                'Attempted government reform'
            ],
            
            relationships: [
                { person: 'Queen Dahlia', type: 'True Love', notes: 'A legendary romance' },
                { person: 'Morton Koopa Sr.', type: 'Unlikely Ally', notes: 'Worked toward lasting peace' },
                { person: 'Toadsworth Sr.', type: 'Trusted Advisor', notes: 'A trust that was betrayed' }
            ]
        },
        {
            id: 'queen_dahlia',
            name: 'Queen Dahlia',
            epithet: 'The Flower Consort',
            born: 875,
            died: 935,
            reign: '905-935',
            generation: 9,
            icon: '👸',
            status: 'deceased',
            spouse: 'king_toadstool_iv',
            children: ['princess_peach'],
            parents: ['sarasaland_royal_line'],
            portrait: '🌺',
            origin: 'Sarasaland',
            
            summary: 'A Sarasaland princess who brought the "Flower Power" magic into the Toadstool bloodline. Mother of Princess Peach. Her death preceded her husband\'s by five years.',
            
            secrets: [
                { intel: 25, text: 'Her sister Queen Orchid is Princess Daisy\'s grandmother - making Daisy and Peach first cousins.' },
                { intel: 45, text: 'She brought the "Lockets of Union" as part of her dowry - magical artifacts that control the kingdom\'s defensive wards.' },
                { intel: 65, text: 'Died of "Wilting Fever" - magical analysis suggests a curse, not disease. She was murdered.' },
                { intel: 85, text: 'She established the secret "Garden Network" of spies that became the Loyalist intelligence wing.' },
                { intel: 95, text: 'Her dying words to Peach: "Trust the wild heart. When the time comes, run to the forest."' }
            ],
            
            achievements: [
                'Strengthened Sarasaland alliance',
                'Introduced Flower Power magic to the court',
                'Created the Queen\'s Garden intelligence network',
                'Established the Princess Protection Protocol'
            ],
            
            relationships: [
                { person: 'King Toadstool IV', type: 'Soul-Bonded', notes: 'Their love was legendary' },
                { person: 'Queen Orchid', type: 'Beloved Sister', notes: 'Orchid swore vengeance after her death' },
                { person: 'Chief Thornpaw (Elder)', type: 'Secret Friend', notes: 'They met when she was young' }
            ]
        },
        
        // =========================================
        // GENERATION 10 - THE LOST SOVEREIGN
        // =========================================
        {
            id: 'princess_peach',
            name: 'Princess Peach Toadstool',
            epithet: 'The Lost Sovereign',
            born: 915,
            died: 955,
            reign: 'Never Crowned',
            generation: 10,
            icon: '👸',
            status: 'ASSASSINATED',
            spouse: 'chief_thornpaw',
            children: ['mystery_child'],
            parents: ['king_toadstool_iv', 'queen_dahlia'],
            portrait: '🍑',
            
            summary: 'The last direct heir of House Toadstool. Her assassination sparked the 85-year civil war that continues today. The truth of her life has been buried under propaganda.',
            
            secrets: [
                { intel: 10, text: 'Was never officially crowned due to the "emergency regency."' },
                { intel: 20, text: 'Was preparing to dissolve the Nobility Council the week she died.' },
                { intel: 35, text: 'Her "kidnappings" by Bowser were increasingly becoming diplomatic summits in disguise.' },
                { intel: 50, text: 'She discovered evidence that her parents were both murdered by the Regency.' },
                { intel: 65, text: 'Had a secret romance with Chief Thornpaw of the Rakasha. They were married under forest law in 952.' },
                { intel: 75, text: 'Medical records indicate a pregnancy in 954. The child was never officially born.' },
                { intel: 85, text: 'She sent the child to safety with Lady Bloomia the night before she died. She KNEW she would be killed.' },
                { intel: 90, text: 'Lady Bloomia fled with the child to a safehouse in the Forever Forest. The Rakasha have protected the child ever since.' },
                { intel: 95, text: 'Her draft will is said to have named the child as heir, with Daisy as regent. She also named her killers - but the document was destroyed.' }
            ],
            
            relationships: [
                { person: 'Bowser', type: 'Complex Ally', notes: 'He loved her. She used that to build peace. But she respected him.' },
                { person: 'Chief Thornpaw', type: 'Secret Husband', notes: 'The love of her life. Father of her child.' },
                { person: 'Toadsworth', type: 'Adversary', notes: 'She discovered his treachery too late.' },
                { person: 'Princess Daisy', type: 'Beloved Cousin', notes: 'Her contingency plan for the child.' },
                { person: 'Mario', type: 'Champion', notes: 'A loyal knight, nothing more.' }
            ],
            
            lastDays: [
                { day: -7, event: 'Finalized the peace treaty with Bowser' },
                { day: -5, event: 'Wrote her secret will naming the Hidden Heir' },
                { day: -3, event: 'Sent a letter to Daisy about "the package"' },
                { day: -2, event: 'Arranged Lady Bloomia\'s escape route' },
                { day: -1, event: 'Said goodbye to Thornpaw at the forest\'s edge' },
                { day: 0, event: 'ASSASSINATED in her chambers' }
            ]
        },
        
        // =========================================
        // GENERATION 11 - THE HIDDEN HEIR
        // =========================================
        {
            id: 'mystery_child',
            name: 'The Hidden Heir',
            epithet: 'Child of the Rose',
            born: 954,
            died: null,
            generation: 11,
            icon: '❓',
            status: 'ALIVE (Hidden)',
            spouse: null,
            children: null,
            parents: ['princess_peach', 'chief_thornpaw'],
            portrait: '🌹',
            
            summary: 'The child of Princess Peach and Chief Thornpaw. If alive, they are the rightful heir to the Mushroom Throne. Now 86 years old, but Rakasha blood grants extended youth.',
            
            secrets: [
                { intel: 50, text: 'Appears to be in their early 30s due to Rakasha longevity.' },
                { intel: 65, text: 'Has been raised among the Rakasha but also spent time in human cities under aliases.' },
                { intel: 75, text: 'Has claws (retractable), Flower Power magic, and the ability to speak to plants.' },
                { intel: 85, text: 'Goes by the name "Rose" in their human form. Has no idea they\'re royalty.' },
                { intel: 90, text: 'Works as a healer in Rogueport, unknowingly treating criminals and nobles alike.' },
                { intel: 95, text: 'Chief Thornpaw visits them annually but has never revealed their true identity. He\'s waiting for "the right moment."' }
            ],
            
            theories: [
                { name: 'The Rosalina Theory', probability: 5, notes: 'Timeline and appearance don\'t match at all' },
                { name: 'The Beggar Prince Theory', probability: 15, notes: 'Confuses them with Jasper Goldcap' },
                { name: 'The Rogueport Healer', probability: 75, notes: 'A healer named "Rose" matches the description' },
                { name: 'Dead at Birth', probability: 5, notes: 'Disinformation spread by the Regency' }
            ],
            
            hiddenLife: {
                currentAlias: 'Rose Thornwood',
                occupation: 'Healer/Herbalist',
                location: 'Rogueport, East Quarter',
                knownAssociates: [
                    'Big J (Jasper Goldcap) - Her landlord, doesn\'t know her identity',
                    'Countess Portia Morel - Her supplier, DOES know her identity',
                    'Lady Violet Rosewood - Met once, suspected the truth',
                    'Various Rakasha elders who visit "to check on her"'
                ],
                abilities: [
                    'Flower Power magic (untrained)',
                    'Plant communication',
                    'Accelerated healing',
                    'Retractable claws',
                    'Extended lifespan'
                ]
            }
        }
    ],
    
// =============================================
// EXPANDED CADET BRANCHES WITH FULL MEMBER TREES
// =============================================

cadetBranches: [
    {
        id: 'house_rosewood',
        name: 'House Rosewood',
        sigil: '🌹',
        colors: ['#C41E3A', '#228B22'],
        motto: 'We Grow Strong',
        altMotto: 'From Thorns, Power',
        founded: 560,
        founder: 'Prince Thornwald Rosewood',
        seat: 'Rose Manor, Eastern Marches',
        status: 'ACTIVE',
        relationship: 'The "Gardener" Branch (3rd Cousins)',
        claimStrength: 2,
        
        currentHead: {
            id: 'lady_petal',
            name: 'Lady Petal Rosewood',
            age: 32,
            summary: 'Ruthless pragmatist financing the Regency while secretly meeting with Iron Legion envoys. She sees the writing on the wall.',
            secrets: [
                { intel: 40, text: 'Believes the Toadstools are finished. Wants to be Prime Minister of a Constitutional Republic.' },
                { intel: 70, text: 'Purchased the poison used to kill King Toadstool IV through intermediaries in House Morel.' },
                { intel: 85, text: 'Has a contingency plan called "Operation Autumn" - a coup to install herself as Regent if the Loyalists win.' }
            ]
        },
        
        members: [
            {
                id: 'thornwald_rosewood',
                name: 'Prince Thornwald Rosewood',
                epithet: 'The Gardener',
                born: 510,
                died: 590,
                generation: 1,
                icon: '🌹',
                status: 'deceased',
                spouse: 'lady_petal_i',
                children: ['lord_bramble_i', 'lady_rose'],
                portrait: '🌷',
                
                summary: 'Second son of King Toadstool III who chose botany over politics. Willingly surrendered his claim to pursue horticulture.',
                
                secrets: [
                    { intel: 30, text: 'His "choice" was actually an ultimatum from his brother - give up the crown or face exile.' },
                    { intel: 55, text: 'Discovered a new species of Fire Flower that burns with black flame. The seeds are locked in the Rose Manor vault.' }
                ],
                
                achievements: [
                    'Founded House Rosewood (560)',
                    'Developed the Eastern Agricultural Zone',
                    'Created the Rosewood Botanical Codex'
                ]
            },
            {
                id: 'lord_bramble_i',
                name: 'Lord Bramble Rosewood I',
                epithet: 'The Merchant Prince',
                born: 545,
                died: 620,
                generation: 2,
                icon: '💰',
                status: 'deceased',
                spouse: 'lady_coin',
                children: ['lord_thorn_ii'],
                portrait: '🏦',
                
                summary: 'Transformed Rosewood lands from farms into a trade empire. First noble to own merchant ships.',
                
                secrets: [
                    { intel: 35, text: 'Made his fortune smuggling Fire Flowers to the Koopa Kingdom during the embargo.' },
                    { intel: 60, text: 'The "Rosewood Ledger" contains records of bribes paid to every Chancellor for 200 years.' }
                ]
            },
            {
                id: 'lord_crimson',
                name: 'Lord Crimson Rosewood',
                epithet: 'The Red Hand',
                born: 780,
                died: 855,
                generation: 6,
                icon: '🗡️',
                status: 'deceased',
                spouse: 'lady_scarlet',
                children: ['lord_sterling'],
                portrait: '🩸',
                
                summary: 'A military commander who put down the Goomba Uprising with extreme prejudice. His methods are still controversial.',
                
                secrets: [
                    { intel: 40, text: 'The "Crimson Fields" weren\'t a battle - it was a massacre of surrendered prisoners.' },
                    { intel: 75, text: 'He kept trophies. They\'re buried beneath the Rose Manor wine cellar.' }
                ],
                
                controversies: [
                    'The Crimson Fields Massacre (802)',
                    'Accused of poisoning rival Lord Fernshade IV',
                    'His personal guard were all executed after his death - why?'
                ]
            },
            {
                id: 'lord_sterling',
                name: 'Lord Sterling Rosewood',
                epithet: 'The Banker',
                born: 820,
                died: 905,
                generation: 7,
                icon: '🏛️',
                status: 'deceased',
                spouse: 'lady_gilt',
                children: ['lord_ashford', 'lady_pearl'],
                portrait: '💎',
                
                summary: 'Founded the Rosewood Bank, now the largest private financial institution in the kingdom.',
                
                secrets: [
                    { intel: 45, text: 'The Rosewood Bank holds the Regency\'s war debt. They could collapse the government at will.' },
                    { intel: 70, text: 'He funded both sides of the First Fawful Incursion to profit from reconstruction.' }
                ]
            },
            {
                id: 'lord_ashford',
                name: 'Lord Ashford Rosewood',
                epithet: 'The Quiet',
                born: 865,
                died: 940,
                generation: 8,
                icon: '🤫',
                status: 'deceased',
                spouse: 'lady_whisper',
                children: ['lady_petal', 'lord_bramble_current', 'lady_violet'],
                portrait: '👤',
                
                summary: 'A reclusive lord who rarely appeared in public. His wife handled all political affairs.',
                
                secrets: [
                    { intel: 50, text: 'He wasn\'t reclusive - he was disfigured. A magical accident left him unable to show his face.' },
                    { intel: 80, text: 'The "accident" was an assassination attempt by House Goldcap. He knew they had evidence about the King\'s murder.' },
                    { intel: 90, text: 'Before dying, he whispered coordinates to Lady Petal. She hasn\'t investigated them... yet.' }
                ]
            },
            {
                id: 'lady_petal_current',
                name: 'Lady Petal Rosewood',
                epithet: 'The Iron Rose',
                born: 1008,
                died: null,
                generation: 9,
                icon: '🌹',
                status: 'ACTIVE',
                spouse: null,
                children: null,
                portrait: '👩‍💼',
                
                summary: 'Current head of House Rosewood. Unmarried, ruthless, and playing every faction against each other.',
                
                secrets: [
                    { intel: 25, text: 'She rejected Prince Peasley\'s marriage proposal. Twice.' },
                    { intel: 45, text: 'Maintains a secret correspondence with Princess Daisy. They\'re planning something.' },
                    { intel: 65, text: 'She knows about the Hidden Heir. She\'s not telling anyone because she\'s not sure which outcome benefits her more.' },
                    { intel: 85, text: 'Has her father\'s coordinates memorized. They point to a location in the Forever Forest. She\'s afraid to go.' }
                ],
                
                relationships: [
                    { person: 'Princess Daisy', type: 'Secret Ally', notes: 'United by hatred of the Regency' },
                    { person: 'Chancellor Toadsworth', type: 'Puppet Master', notes: 'She controls his purse strings' },
                    { person: 'General Ironhand', type: 'Potential Partner', notes: 'They\'ve met in secret three times' }
                ]
            },
            {
                id: 'lord_bramble_current',
                name: 'Lord Bramble Rosewood',
                epithet: 'The Soldier',
                born: 995,
                died: null,
                generation: 9,
                icon: '⚔️',
                status: 'ACTIVE',
                spouse: 'lady_helga',
                children: ['master_thorn'],
                portrait: '🛡️',
                
                summary: 'Lady Petal\'s younger brother. Commands the Rosewood Guard, the largest private army in the kingdom.',
                
                secrets: [
                    { intel: 30, text: 'Secretly sympathizes with the Loyalists. He believes Peach was murdered by the nobility.' },
                    { intel: 55, text: 'Has been stockpiling weapons at three hidden locations. Preparing for civil war escalation.' },
                    { intel: 75, text: 'He\'s in love with Captain Toadette of the Loyalists. They meet in secret monthly.' }
                ]
            },
            {
                id: 'lady_violet',
                name: 'Lady Violet Rosewood',
                epithet: 'The Shadow',
                born: 1012,
                died: null,
                generation: 9,
                icon: '🕷️',
                status: 'ACTIVE',
                spouse: null,
                children: null,
                portrait: '🌑',
                
                summary: 'The youngest Rosewood. Runs the family\'s intelligence network. Possibly the most dangerous person in the kingdom.',
                
                secrets: [
                    { intel: 35, text: 'She has agents in every faction, including the Koopa Troop.' },
                    { intel: 60, text: 'Discovered the location of one of the three Star Keys needed to access the Royal Vault.' },
                    { intel: 80, text: 'She\'s been to the Forever Forest. She found something there. She won\'t tell anyone what.' },
                    { intel: 95, text: 'Violet has met the Hidden Heir. She knows exactly who and where they are. She\'s protecting them.' }
                ],
                
                quote: '"Everyone has secrets. I collect them like others collect coins."'
            },
            {
                id: 'master_thorn',
                name: 'Young Master Thorn Rosewood',
                epithet: 'The Hope',
                born: 1032,
                died: null,
                generation: 10,
                icon: '🌱',
                status: 'ACTIVE',
                spouse: null,
                children: null,
                portrait: '👦',
                
                summary: 'Eight years old. The heir to House Rosewood. Shows unusual magical aptitude.',
                
                secrets: [
                    { intel: 40, text: 'Can make plants grow with a touch. This power hasn\'t been seen since Queen Mycellia.' },
                    { intel: 70, text: 'He has nightmares about "the lady in pink." He draws pictures of Peach\'s Castle burning.' },
                    { intel: 90, text: 'The Star Spirits have marked him. He may be a "Star Child" - one of seven prophesied to reshape the world.' }
                ]
            }
        ],
        
        assets: {
            military: 2500,
            economic: 95,
            political: 70,
            territory: 'Eastern Mushroom Marches, 12 trade outposts'
        },
        
        mysteries: [
            {
                id: 'rosewood_coordinates',
                name: 'The Ashford Coordinates',
                status: 'UNSOLVED',
                intel: 80,
                summary: 'Lord Ashford\'s dying words to Lady Petal. Coordinates in the Forever Forest. No one has investigated.',
                theories: [
                    'Location of evidence about King Toadstool IV\'s murder',
                    'Hidden Rosewood treasure vault',
                    'The grave of someone important',
                    'A weapon of some kind'
                ]
            },
            {
                id: 'black_fire_flower',
                name: 'The Obsidian Bloom',
                status: 'CLASSIFIED',
                intel: 55,
                summary: 'Prince Thornwald discovered a Fire Flower that burns with black flame. The seeds are in the Rose Manor vault.',
                implications: [
                    'Could be a devastating weapon',
                    'May have alchemical properties',
                    'The Koopa Troop has offered 10 million coins for a single seed'
                ]
            },
            {
                id: 'rosewood_ledger',
                name: 'The Corruption Codex',
                status: 'HIDDEN',
                intel: 60,
                summary: 'Records of bribes paid to every Chancellor for 200 years. Enough to destroy the Regency.',
                location: 'Rosewood Bank Main Vault, Toad Town Branch'
            }
        ]
    },
    
    {
        id: 'house_fernshade',
        name: 'House Fernshade',
        sigil: '🌿',
        colors: ['#228B22', '#2F4F4F'],
        motto: 'Roots Run Deep',
        altMotto: 'The Forest Remembers',
        founded: 530,
        founder: 'Duke Moss Fernshade I',
        seat: 'Fernhold, Darkwood Forest',
        status: 'ACTIVE',
        relationship: 'The "Bastard" Branch (Illegitimate Line)',
        claimStrength: 1,
        
        currentHead: {
            id: 'baron_moss_vii',
            name: 'Baron Moss Fernshade VII',
            age: 54,
            summary: 'Reclusive druid who practices old magic. Claims to receive visions from the Forest Spirits.',
            secrets: [
                { intel: 35, text: 'His family intermarries with Dryads. They are more forest than Toad now.' },
                { intel: 65, text: 'Holds the Emerald Key - one of three needed to open the Royal Crypts.' },
                { intel: 85, text: 'The Forest Spirits have told him the Hidden Heir\'s location. He waits for the "proper time" to act.' }
            ]
        },
        
        members: [
            {
                id: 'moss_fernshade_i',
                name: 'Duke Moss Fernshade I',
                epithet: 'The Bastard Prince',
                born: 448,
                died: 530,
                generation: 1,
                icon: '🌿',
                status: 'deceased',
                spouse: 'lady_willow_dryad',
                children: ['moss_ii', 'lady_fern'],
                portrait: '🌲',
                legitimacy: 'illegitimate',
                
                summary: 'Acknowledged bastard of King Toadstool II. Given lands in Darkwood Forest as exile. Married a Dryad.',
                
                secrets: [
                    { intel: 30, text: 'His mother was a Dryad serving maid, not a Toad. He was half-plant from birth.' },
                    { intel: 55, text: 'He could speak to trees. The ability has grown stronger in each generation.' },
                    { intel: 75, text: 'He was offered the throne when his legitimate brother proved incompetent. He refused, saying "The forest is my kingdom."' }
                ],
                
                achievements: [
                    'Founded House Fernshade (530)',
                    'Negotiated the First Forest Accord with the Dryads',
                    'Built Fernhold using living trees'
                ]
            },
            {
                id: 'lady_willow_dryad',
                name: 'Lady Willow',
                epithet: 'The First Bride',
                born: 'Unknown',
                died: 'Unknown (Dryads don\'t die normally)',
                generation: 1,
                icon: '🌳',
                status: 'MERGED',
                spouse: 'moss_fernshade_i',
                children: ['moss_ii', 'lady_fern'],
                portrait: '🍃',
                
                summary: 'A Dryad who fell in love with the Bastard Prince. When he died, she merged with the Great Oak of Fernhold.',
                
                secrets: [
                    { intel: 40, text: 'She still lives within the Great Oak. The Fernshades can commune with her.' },
                    { intel: 70, text: 'She knows secrets about the Toadstool bloodline that predate the Kingdom.' },
                    { intel: 90, text: 'She claims the Toadstools are not the "true" royal line. The real heirs were overthrown in 412.' }
                ]
            },
            {
                id: 'shade_fernshade',
                name: 'Lord Shade Fernshade',
                epithet: 'The Heretic',
                born: 680,
                died: 745,
                generation: 4,
                icon: '🌑',
                status: 'ERASED',
                spouse: null,
                children: null,
                portrait: '👁️',
                
                summary: 'Attempted to use dark forest magic to claim the throne. Executed by the Star Spirits themselves.',
                
                secrets: [
                    { intel: 50, text: 'He discovered the "Shadow Spore" ritual - a way to possess members of the main line.' },
                    { intel: 75, text: 'He successfully possessed King Toadstool V for three days. No one noticed.' },
                    { intel: 95, text: 'The ritual still exists. The current Baron knows how to perform it.' }
                ],
                
                controversies: [
                    'The Three Dark Days (722)',
                    'Attempted regicide through possession',
                    'Created the Blight Woods by accident'
                ]
            },
            {
                id: 'lady_root',
                name: 'Lady Root Fernshade',
                epithet: 'The Healer',
                born: 820,
                died: 920,
                generation: 6,
                icon: '💚',
                status: 'deceased',
                spouse: 'lord_bark',
                children: ['moss_vi'],
                portrait: '🌺',
                
                summary: 'A legendary healer who could cure any illness using forest magic. Refused to heal anyone outside the forest.',
                
                secrets: [
                    { intel: 35, text: 'She could have saved Queen Dahlia from the "Wilting Fever." She chose not to.' },
                    { intel: 60, text: 'Her healing grimoire is hidden somewhere in Fernhold. It contains the cure for any poison.' },
                    { intel: 80, text: 'She knew Dahlia was cursed, not sick. She refused to heal her because "the curse was deserved."' }
                ]
            },
            {
                id: 'moss_vi',
                name: 'Baron Moss Fernshade VI',
                epithet: 'The Prophet',
                born: 870,
                died: 985,
                generation: 7,
                icon: '🔮',
                status: 'deceased',
                spouse: 'lady_dewdrop',
                children: ['moss_vii', 'lady_willow_ii'],
                portrait: '👁️',
                
                summary: 'Had true prophetic visions. Predicted Peach\'s assassination 30 years before it happened.',
                
                secrets: [
                    { intel: 40, text: 'His prophecies are recorded in the "Tome of Falling Leaves." Most are still sealed.' },
                    { intel: 65, text: 'He predicted "A child of rose and claw will reunite what was broken."' },
                    { intel: 85, text: 'He foresaw his own death. His last prophecy: "The Spore-Father\'s pact will be called due. Seven must stand or all falls."' }
                ],
                
                prophecies: [
                    { year: 925, prophecy: 'The Pink Sovereign will fall to trusted hands', fulfilled: true },
                    { year: 940, prophecy: 'The Flame King will weep for his enemy', fulfilled: true },
                    { year: 960, prophecy: 'A child hidden in plain sight will hold the key', fulfilled: 'PENDING' },
                    { year: 970, prophecy: 'Iron will march where magic once ruled', fulfilled: true },
                    { year: 980, prophecy: 'Seven stars will choose seven champions', fulfilled: 'PENDING' }
                ]
            },
            {
                id: 'moss_vii',
                name: 'Baron Moss Fernshade VII',
                epithet: 'The Warden',
                born: 986,
                died: null,
                generation: 8,
                icon: '🌿',
                status: 'ACTIVE',
                spouse: 'lady_willow_iii',
                children: ['heir_sapling'],
                portrait: '🧙',
                
                summary: 'Current head. More tree than Toad at this point. Can root himself into the ground for days.',
                
                secrets: [
                    { intel: 30, text: 'He doesn\'t eat. He photosynthesizes.' },
                    { intel: 50, text: 'The Emerald Key is not a physical key. It\'s a song only he can sing.' },
                    { intel: 70, text: 'Chief Thornpaw brought the Hidden Heir to him shortly after birth. He blessed the child.' },
                    { intel: 90, text: 'He knows the "Star Child" prophecy refers to seven individuals. He has identified four of them.' }
                ],
                
                relationships: [
                    { person: 'Chief Thornpaw', type: 'Ancient Alliance', notes: 'The Rakasha and Fernshades share blood' },
                    { person: 'Lady Violet Rosewood', type: 'Wary Respect', notes: 'She visited once. He showed her the Tome.' },
                    { person: 'Kamek', type: 'Enemy', notes: 'The Magikoopa wants the Emerald Key desperately' }
                ]
            },
            {
                id: 'lady_willow_iii',
                name: 'Lady Willow Fernshade',
                epithet: 'The Druid Priestess',
                born: 992,
                died: null,
                generation: 8,
                icon: '🌸',
                status: 'ACTIVE',
                spouse: 'moss_vii',
                children: ['heir_sapling'],
                portrait: '🌙',
                
                summary: 'A full Dryad who leads the religious ceremonies of Darkwood. Can shapeshift into any plant.',
                
                secrets: [
                    { intel: 35, text: 'She is technically immortal unless her bond-tree is destroyed.' },
                    { intel: 60, text: 'Her bond-tree is the Great Oak - the same one the First Bride merged with.' },
                    { intel: 85, text: 'She can access the memories of all previous Lady Willows. She knows everything.' }
                ]
            },
            {
                id: 'heir_sapling',
                name: 'Sapling Fernshade',
                epithet: 'Child of Prophecy',
                born: 1028,
                died: null,
                generation: 9,
                icon: '🌱',
                status: 'ACTIVE',
                spouse: null,
                children: null,
                portrait: '✨',
                
                summary: 'Twelve years old. More Dryad than Toad. Speaks to the trees and they answer.',
                
                secrets: [
                    { intel: 40, text: 'The trees call him "Little King." They bow when he passes.' },
                    { intel: 65, text: 'He has met the Hidden Heir. They played together as children. He doesn\'t know who they really are.' },
                    { intel: 85, text: 'The Star Spirits visited him on his fifth birthday. He is one of the Seven.' },
                    { intel: 95, text: 'He can see the future in dreams. He has seen the "Final Battle." He doesn\'t want to talk about what he saw.' }
                ]
            }
        ],
        
        assets: {
            military: 50,
            economic: 20,
            political: 10,
            territory: 'Darkwood Forest (autonomous region)',
            special: 'Control of the Forest Spirit Alliance'
        },
        
        specialNote: 'Every tax collector sent to Darkwood vanishes. The Regency has given up trying.',
        
        mysteries: [
            {
                id: 'emerald_key',
                name: 'The Emerald Key',
                status: 'HELD BY FERNSHADE',
                intel: 50,
                summary: 'One of three keys needed to open the Royal Crypts. The Fernshades have held it for 500 years.',
                notes: 'It\'s not a physical key - it\'s a song. Only a Fernshade can sing it.'
            },
            {
                id: 'tome_of_falling_leaves',
                name: 'The Tome of Falling Leaves',
                status: 'SEALED',
                intel: 65,
                summary: 'Baron Moss VI\'s book of prophecies. Most entries are still sealed with forest magic.',
                unreadProphecies: 47,
                knownProphecies: 12
            },
            {
                id: 'original_royals',
                name: 'The True Dynasty',
                status: 'SUPPRESSED',
                intel: 90,
                summary: 'Lady Willow claims the Toadstools overthrew the "True Kings" in 412. Who were they?',
                theories: [
                    'The Dryads themselves once ruled',
                    'A race called the "Starcaps" preceded the Toadstools',
                    'The Star Spirits were the original rulers',
                    'The Koopas have a legitimate claim after all'
                ]
            },
            {
                id: 'shadow_spore_ritual',
                name: 'The Shadow Spore Ritual',
                status: 'FORBIDDEN',
                intel: 75,
                summary: 'A possession ritual created by Lord Shade. The current Baron knows how to perform it.',
                danger: 'EXTREME - Could allow anyone to control a member of any bloodline'
            }
        ]
    },
    
    {
        id: 'house_goldcap',
        name: 'House Goldcap',
        sigil: '💰',
        colors: ['#FFD700', '#B8860B'],
        motto: 'Fortune Favors the Bold',
        altMotto: 'What We Earn, We Keep',
        founded: 880,
        founder: 'Lord Gilded Goldcap',
        seat: 'Goldcrest Hall, Northern Highlands (DESTROYED)',
        status: 'DESTROYED',
        relationship: 'The "Merchant" Branch (Recent Split)',
        claimStrength: 0,
        
        destruction: {
            date: 982,
            event: 'Night of Falling Stars',
            cause: 'Massacred while preparing to release evidence about Peach\'s assassination',
            perpetrators: 'Unknown (Suspected: Regency, House Rosewood, or Iron Legion precursors)',
            survivors: 1,
            casualties: 47
        },
        
        members: [
            {
                id: 'gilded_goldcap',
                name: 'Lord Gilded Goldcap',
                epithet: 'The Golden',
                born: 845,
                died: 920,
                generation: 1,
                icon: '💰',
                status: 'deceased',
                spouse: 'lady_coin',
                children: ['lord_aurelius', 'lady_gilt'],
                portrait: '🪙',
                
                summary: 'A Toadstool cousin who made a fortune in mining. Founded House Goldcap after discovering the Northern Gold Veins.',
                
                secrets: [
                    { intel: 25, text: 'He didn\'t discover the gold. He stole the maps from a Koopa expedition he ambushed.' },
                    { intel: 50, text: 'The Northern Mines go deeper than anyone knows. He sealed the lowest levels after finding "something."' },
                    { intel: 80, text: 'He found Shroob ruins in the deep mines. The technology he salvaged made him rich.' }
                ],
                
                achievements: [
                    'Founded House Goldcap (880)',
                    'Discovered Northern Gold Veins (878)',
                    'Built Goldcrest Hall (885)'
                ]
            },
            {
                id: 'lord_aurelius',
                name: 'Lord Aurelius Goldcap',
                epithet: 'The Investigator',
                born: 875,
                died: 955,
                generation: 2,
                icon: '🔍',
                status: 'deceased',
                spouse: 'lady_sterling_rosewood',
                children: ['lord_justinian'],
                portrait: '📋',
                
                summary: 'Became obsessed with the assassination of Princess Peach. Spent his fortune investigating.',
                
                secrets: [
                    { intel: 35, text: 'He was the first to suspect the Regency. They tried to buy his silence.' },
                    { intel: 55, text: 'Hired a team of private investigators. All twelve died in "accidents" within a year.' },
                    { intel: 75, text: 'His final journal entry: "I know who held the blade. God forgive me for what I\'ve uncovered."' },
                    { intel: 90, text: 'He identified three conspirators. He only wrote down two names before he died. The third died with him.' }
                ]
            },
            {
                id: 'lord_justinian',
                name: 'Lord Justinian Goldcap',
                epithet: 'The Martyr',
                born: 910,
                died: 982,
                generation: 3,
                icon: '⚖️',
                status: 'MURDERED',
                spouse: 'lady_grace',
                children: ['lord_regulus', 'lady_augusta', 'jasper_goldcap'],
                portrait: '🩸',
                
                summary: 'Continued his father\'s investigation. Died in the Night of Falling Stars massacre.',
                
                secrets: [
                    { intel: 40, text: 'He compiled everything into the "Goldcap Dossier" - the most complete investigation of the assassination.' },
                    { intel: 60, text: 'The night before the massacre, he sent three copies of the Dossier to three locations.' },
                    { intel: 80, text: 'Copy One went to Princess Daisy. She received it. Copy Two went to King Bowser. Intercepted. Copy Three... unknown.' },
                    { intel: 95, text: 'The Dossier names Chancellor Toadsworth Sr. as the mastermind. It has proof.' }
                ]
            },
            {
                id: 'lady_grace',
                name: 'Lady Grace Goldcap',
                epithet: 'The Protector',
                born: 915,
                died: 982,
                generation: 3,
                icon: '🛡️',
                status: 'MURDERED',
                spouse: 'lord_justinian',
                children: ['lord_regulus', 'lady_augusta', 'jasper_goldcap'],
                portrait: '💔',
                
                summary: 'Died defending her children. Her body was found with seventeen wounds.',
                
                secrets: [
                    { intel: 45, text: 'She killed three attackers before falling. Their bodies were never identified.' },
                    { intel: 70, text: 'Her dying act was to shove four-year-old Jasper into a hidden passage.' },
                    { intel: 85, text: 'The hidden passage led to an old Shroob tunnel. It saved Jasper\'s life.' }
                ]
            },
            {
                id: 'lord_regulus',
                name: 'Lord Regulus Goldcap',
                epithet: 'The Heir',
                born: 950,
                died: 982,
                generation: 4,
                icon: '👑',
                status: 'MURDERED',
                spouse: null,
                children: null,
                portrait: '💀',
                
                summary: 'The eldest son. Killed in his bed during the massacre. Age 32.',
                
                secrets: [
                    { intel: 50, text: 'He was the one who convinced his father to go public with the Dossier.' },
                    { intel: 75, text: 'He had memorized the entire Dossier. The killers ensured he couldn\'t talk by removing his tongue.' }
                ]
            },
            {
                id: 'lady_augusta',
                name: 'Lady Augusta Goldcap',
                epithet: 'The Witness',
                born: 960,
                died: 982,
                generation: 4,
                icon: '👁️',
                status: 'MURDERED',
                spouse: null,
                children: null,
                portrait: '😱',
                
                summary: 'Saw the attackers\' faces. Killed to ensure her silence. Age 22.',
                
                secrets: [
                    { intel: 40, text: 'She tried to flee. They caught her on the bridge.' },
                    { intel: 65, text: 'Before dying, she scratched a symbol into the bridge stone. It\'s still there.' },
                    { intel: 85, text: 'The symbol matches the Iron Legion\'s predecessor organization - the "Steel Hand."' }
                ]
            },
            {
                id: 'jasper_goldcap',
                name: 'Jasper Goldcap',
                epithet: 'The Lost Prince',
                born: 978,
                died: null,
                generation: 4,
                icon: '❓',
                status: 'ALIVE (Hidden)',
                spouse: null,
                children: null,
                portrait: '🎭',
                trueIdentity: 'Big J of Rogueport',
                
                summary: 'Escaped the massacre at age four. The only survivor. His current location is the greatest mystery.',
                
                secrets: [
                    { intel: 40, text: 'He was saved by his mother shoving him into a hidden passage.' },
                    { intel: 55, text: 'Emerged in Rogueport through Shroob tunnels. Raised by the criminal underground.' },
                    { intel: 70, text: 'He knows he\'s a Goldcap. He has the birthmark - a golden mushroom cap on his shoulder.' },
                    { intel: 85, text: 'He is "Big J," the most powerful crime lord in Rogueport. He controls half the city.' },
                    { intel: 95, text: 'He has the third copy of the Goldcap Dossier. His father gave it to a trusted servant who raised him. He reads it every night.' }
                ],
                
                currentStatus: {
                    alias: 'Big J',
                    location: 'Rogueport Underground',
                    occupation: 'Crime Lord',
                    wealth: 'Immense (laundered through legitimate businesses)',
                    goals: 'Revenge on whoever ordered the massacre'
                },
                
                relationships: [
                    { person: 'The Regency', type: 'ENEMY', notes: 'Plans to destroy them completely' },
                    { person: 'Princess Daisy', type: 'Unknown', notes: 'She has tried to contact him. He refuses.' },
                    { person: 'Lady Violet Rosewood', type: 'Business Partner', notes: 'They trade information regularly' },
                    { person: 'Countess Portia Morel', type: 'Rival', notes: 'Competing criminal empires' }
                ],
                
                quote: '"They think they killed House Goldcap. They killed my family. But I survived. And I remember everything."'
            }
        ],
        
        mysteries: [
            {
                id: 'goldcap_dossier',
                name: 'The Goldcap Dossier',
                status: 'THREE COPIES EXIST',
                intel: 60,
                summary: 'The most complete investigation of Peach\'s assassination. Names the conspirators.',
                copies: [
                    { location: 'Sarasaland Royal Archives', holder: 'Princess Daisy', status: 'Verified' },
                    { location: 'Unknown', holder: 'Intercepted en route to Koopa Kingdom', status: 'MISSING' },
                    { location: 'Rogueport', holder: 'Big J (Jasper Goldcap)', status: 'Hidden' }
                ]
            },
            {
                id: 'night_of_falling_stars',
                name: 'The Night of Falling Stars',
                status: 'UNSOLVED',
                intel: 40,
                summary: 'Who ordered the Goldcap Massacre?',
                suspects: [
                    { name: 'The Regency Council', probability: 70, motive: 'Suppress the Dossier' },
                    { name: 'House Rosewood', probability: 40, motive: 'Competition + Named in Dossier?' },
                    { name: 'Steel Hand (Iron Legion precursor)', probability: 55, motive: 'Unknown connection to original assassination' },
                    { name: 'Fawful', probability: 10, motive: 'Chaos' }
                ]
            },
            {
                id: 'sealed_mines',
                name: 'The Deep Mines',
                status: 'SEALED',
                intel: 50,
                summary: 'Lord Gilded sealed the deepest levels of the Northern Mines. What did he find?',
                theories: [
                    'Shroob technology cache',
                    'A hibernating Shroob colony',
                    'An entrance to the Underwhere',
                    'Something older than any known civilization'
                ]
            },
            {
                id: 'third_conspirator',
                name: 'The Third Name',
                status: 'UNKNOWN',
                intel: 90,
                summary: 'Lord Aurelius identified three conspirators. He wrote down two before dying. Who was the third?',
                knownNames: [
                    'Chancellor Toadsworth Sr.',
                    'Lady [REDACTED] Rosewood'
                ],
                theories: [
                    'A Star Spirit (explaining the supernatural elements)',
                    'Kamek',
                    'A time traveler',
                    'Someone still alive and in power'
                ]
            }
        ],
        
        assets: {
            military: 0,
            economic: 0,
            political: 0,
            territory: 'None (Destroyed)',
            legacy: 'The Goldcap fortune was seized by the Regency. But Jasper has rebuilt a criminal empire worth more.'
        }
    },
    
    {
        id: 'house_morel',
        name: 'House Morel',
        sigil: '🍄',
        colors: ['#8B4513', '#D2691E'],
        motto: 'Knowledge is Currency',
        altMotto: 'We Trade in Secrets',
        founded: 720,
        founder: 'Sage Morel the Learned',
        seat: 'The Undercroft (Underground Complex beneath Toad Town)',
        status: 'ACTIVE',
        relationship: 'The "Scholar" Branch (4 Generations Removed)',
        claimStrength: 2,
        
        currentHead: {
            id: 'countess_portia',
            name: 'Countess Portia Morel',
            age: 45,
            summary: 'Controls the underground mushroom trade. Wealthier than the Regency. Knows who killed Peach.',
            secrets: [
                { intel: 55, text: 'She sold the poison used in the assassination. She keeps the receipt.' },
                { intel: 75, text: 'The receipt names the buyer. It would end the civil war if released.' },
                { intel: 90, text: 'She has a complete dossier on the Hidden Heir\'s location. Currently entertaining bids from all factions.' }
            ]
        },
        
        members: [
            {
                id: 'sage_morel',
                name: 'Sage Morel the Learned',
                epithet: 'The Founder',
                born: 680,
                died: 780,
                generation: 1,
                icon: '📚',
                status: 'deceased',
                spouse: 'lady_spore',
                children: ['archibald_morel'],
                portrait: '🧠',
                
                summary: 'A Toadstool cousin who preferred books to politics. Founded the Royal Archives. Started a side business selling rare mushrooms.',
                
                secrets: [
                    { intel: 30, text: 'The Royal Archives has a secret section. Only the Morels know how to access it.' },
                    { intel: 55, text: 'He discovered how to cultivate illegal mushroom varieties. The business has never stopped.' },
                    { intel: 80, text: 'He created the "Memory Spore" - a mushroom that can extract memories. The Morels use it for blackmail.' }
                ],
                
                achievements: [
                    'Founded the Royal Archives (725)',
                    'Catalogued every known species of Mushroom Kingdom flora',
                    'Created the underground trade network'
                ]
            },
            {
                id: 'archibald_morel',
                name: 'Lord Archibald Morel',
                epithet: 'The Chemist',
                born: 720,
                died: 810,
                generation: 2,
                icon: '⚗️',
                status: 'deceased',
                spouse: 'lady_tincture',
                children: ['lord_apothos'],
                portrait: '🧪',
                
                summary: 'Developed alchemical uses for rare mushrooms. His potions are still the standard.',
                
                secrets: [
                    { intel: 35, text: 'He invented the poison "Midnight Shade." It has no antidote.' },
                    { intel: 60, text: 'He also invented the Memory Dust that can erase specific memories. The Regency is his best customer.' },
                    { intel: 85, text: 'He created a "Philosopher\'s Mushroom" that grants temporary immortality. The formula is lost... maybe.' }
                ]
            },
            {
                id: 'lady_venom',
                name: 'Lady Venom Morel',
                epithet: 'The Poisoner',
                born: 850,
                died: 940,
                generation: 5,
                icon: '☠️',
                status: 'deceased',
                spouse: 'lord_toxin',
                children: ['lord_cassius'],
                portrait: '🐍',
                
                summary: 'Specialized in assassination tools. Her clients included every royal family on the continent.',
                
                secrets: [
                    { intel: 40, text: 'She kept detailed records of every poison sale. The "Venom Ledger" is priceless blackmail.' },
                    { intel: 65, text: 'King Toadstool IV was killed using her "Midnight Shade." She knows who bought it.' },
                    { intel: 85, text: 'She was killed by her own poison. Administered by her daughter, who wanted the Ledger.' }
                ],
                
                clients: [
                    'The Regency Council (confirmed)',
                    'House Rosewood (confirmed)',
                    'The Koopa Court (confirmed)',
                    'The Beanbean Royal Guard (suspected)',
                    'Unknown Iron Legion precursor (suspected)'
                ]
            },
            {
                id: 'lord_cassius',
                name: 'Lord Cassius Morel',
                epithet: 'The Broker',
                born: 895,
                died: 990,
                generation: 6,
                icon: '🤝',
                status: 'deceased',
                spouse: 'lady_silver',
                children: ['countess_portia', 'lord_albrecht'],
                portrait: '💼',
                
                summary: 'Transformed the family from poison-makers to information brokers. Built the Undercroft.',
                
                secrets: [
                    { intel: 35, text: 'He had spies in every noble house. His network still exists.' },
                    { intel: 55, text: 'He witnessed the Night Peach died. He was in the castle on "business."' },
                    { intel: 75, text: 'He saw the killer flee. He didn\'t report it because the killer also saw him.' },
                    { intel: 95, text: 'He recorded the killer\'s face in a memory spore. It\'s in the Morel family vault.' }
                ]
            },
            {
                id: 'countess_portia',
                name: 'Countess Portia Morel',
                epithet: 'The Spider',
                born: 995,
                died: null,
                generation: 7,
                icon: '🕷️',
                status: 'ACTIVE',
                spouse: null,
                children: ['twins_unknown'],
                portrait: '💀',
                
                summary: 'Current head. Controls information, poison, and the underground economy. Answers to no one.',
                
                secrets: [
                    { intel: 30, text: 'She has never married but has twin children. The father is unknown and probably dead.' },
                    { intel: 50, text: 'She owns 30% of Toad Town through shell companies. The Regency doesn\'t know.' },
                    { intel: 70, text: 'She has the Venom Ledger, the Memory Spore, and her father\'s recording. She is untouchable.' },
                    { intel: 85, text: 'She knows where the Hidden Heir is. She\'s been protecting them from all factions.' },
                    { intel: 95, text: 'The Hidden Heir is one of her best customers. They don\'t know who she really is.' }
                ],
                
                relationships: [
                    { person: 'Big J (Jasper Goldcap)', type: 'Rival/Ally', notes: 'They compete but also trade information' },
                    { person: 'Lady Violet Rosewood', type: 'Mutual Respect', notes: 'The two most dangerous women in the kingdom' },
                    { person: 'Kamek', type: 'Client', notes: 'He buys memory dust in bulk. Why?' },
                    { person: 'The Hidden Heir', type: 'Protector', notes: 'She has kept them hidden for decades' }
                ],
                
                quote: '"Everyone has a price. Everyone has a secret. I know both."'
            },
            {
                id: 'lord_albrecht',
                name: 'Lord Albrecht Morel',
                epithet: 'The Departed',
                born: 998,
                died: null,
                generation: 7,
                icon: '🌍',
                status: 'ABROAD',
                spouse: null,
                children: null,
                portrait: '🚢',
                
                summary: 'Portia\'s brother. Left the family business and travels the world. Possibly running from something.',
                
                secrets: [
                    { intel: 45, text: 'He left after seeing what was in his father\'s memory spore. He couldn\'t handle the truth.' },
                    { intel: 70, text: 'He\'s been to the Shroob homeworld. Don\'t ask how.' },
                    { intel: 90, text: 'He\'s gathering allies for something. He visits strange people in strange places.' }
                ]
            },
            {
                id: 'morel_twins',
                name: 'The Morel Twins',
                epithet: 'Unknown',
                born: 1025,
                died: null,
                generation: 8,
                icon: '👯',
                status: 'HIDDEN',
                spouse: null,
                children: null,
                portrait: '❓',
                
                summary: 'Countess Portia\'s children. No one outside the family has ever seen them.',
                
                secrets: [
                    { intel: 55, text: 'They exist. That\'s all anyone knows for certain.' },
                    { intel: 75, text: 'One is being trained as Portia\'s successor. The other is being trained as an assassin.' },
                    { intel: 95, text: 'Their father was a Star Spirit in mortal form. They have inherited strange powers.' }
                ]
            }
        ],
        
        assets: {
            military: 'Private army of assassins (number unknown)',
            economic: 95,
            political: 60,
            territory: 'The Undercroft (beneath Toad Town), various legitimate businesses'
        },
        
        mysteries: [
            {
                id: 'memory_spore',
                name: 'The Cassius Recording',
                status: 'VAULT',
                intel: 75,
                summary: 'A memory spore containing Lord Cassius\'s visual memory of Peach\'s killer fleeing the scene.',
                location: 'Morel Family Vault, deepest level of the Undercroft',
                notes: 'Viewing it would end the war. Portia has chosen not to.'
            },
            {
                id: 'venom_ledger',
                name: 'The Venom Ledger',
                status: 'PORTIA\'S POSSESSION',
                intel: 65,
                summary: 'Complete records of every poison sale made by House Morel for 200 years.',
                entries: 'Over 3,000 documented assassinations',
                dangerLevel: 'Would collapse every government on the continent'
            },
            {
                id: 'twin_father',
                name: 'The Star-Touched Twins',
                status: 'CLASSIFIED',
                intel: 95,
                summary: 'Who is the father of Portia\'s children? Why do they have strange powers?',
                theories: [
                    'A Star Spirit took mortal form',
                    'A Shroob-Toad hybrid',
                    'Portia used forbidden alchemy to create them',
                    'They are clones of someone important'
                ]
            },
            {
                id: 'hidden_heir_connection',
                name: 'The Morel-Heir Connection',
                status: 'ACTIVE',
                intel: 85,
                summary: 'Portia knows where the Hidden Heir is. She\'s been protecting them. Why?',
                theories: [
                    'She\'s waiting for the right price',
                    'The Heir is more useful hidden',
                    'She genuinely wants to protect them',
                    'The Heir has something she needs'
                ]
            }
        ]
    }
],
    
    mysteries: [
        {
            id: 'void_gate',
            name: 'The Void Gate',
            status: 'SEALED',
            intel: 75,
            summary: 'Something terrible is sealed beneath Peach\'s Castle. Multiple kings have tried to contain it.',
            location: 'Deepest level of the castle, below the dungeons',
            theories: [
                'An Elder Shroob in stasis',
                'A portal to the Underwhere',
                'The imprisoned "Dark Toad" faction',
                'Something older than any civilization'
            ],
            relatedEvents: [
                'King Toadstool V\'s madness',
                'The Three Dark Days',
                'Prince Umbra\'s execution',
                'King Toadstool VI sealing the levels'
            ]
        },
        {
            id: 'star_pact',
            name: 'The Star Spirit Pact',
            status: 'ACTIVE (ENDANGERED)',
            intel: 50,
            summary: 'The founding pact between House Toadstool and the Star Spirits. What happens when the bloodline ends?',
            terms: [
                'The bloodline protects the Star Rod',
                'The Star Spirits grant longevity and magic resistance',
                'If the bloodline ends, "the price comes due"'
            ],
            notes: 'The Hidden Heir is the last of the bloodline. If they die without children, the pact breaks.'
        },
        {
            id: 'nightcaps',
            name: 'The Nightcap Conspiracy',
            status: 'ACTIVE',
            intel: 75,
            summary: 'Descendants of the exiled Princess Amanita who have manipulated events for centuries.',
            knownMembers: 'Unknown - they operate through proxies',
            suspectedActions: [
                'Orchestrated the Three Dark Days',
                'Infiltrated the Regency Council',
                'May have orchestrated Peach\'s assassination',
                'Currently searching for the Hidden Heir'
            ]
        },
        {
            id: 'mycellia_letter',
            name: 'Queen Mycellia\'s Letter',
            status: 'MISSING',
            intel: 80,
            summary: 'A sealed letter from the first queen to "the last true heir." No one knows where it is.',
            possibleLocations: [
                'The Star Shrine archives',
                'Hidden in the Royal Gardens',
                'With the Dryad Council in the Forever Forest',
                'Already in the Hidden Heir\'s possession'
            ]
        }
    ]
},


    // =========================================
    // HOUSE KOOPA - THE DARK LANDS
    // =========================================

houseKoopa: {
    name: 'House Koopa',
    sigil: '🐢',
    colors: ['#228B22', '#8B0000', '#FF4500'],
    motto: 'Fire and Shell',
    altMotto: 'The Strong Endure',
    warCry: 'BY FLAME AND FURY!',
    founded: 'Ancient (Pre-Kingdom Era, est. -500)',
    founder: 'Koopus Prime, The First Shell',
    seat: "Bowser's Castle, Dark Land",
    status: 'ACTIVE (King Adventuring Abroad, Regent Governing)',
    
    religion: 'The Flame Eternal - worship of the primordial fire that birthed dragonkind',
    
    currentSituation: {
        name: 'The Regency of 1040',
        cause: 'King Bowser departed Dark Land pursuing unknown objectives with foreign adventurers',
        regent: 'Kamek the Magikoopa',
        context: 'Bowser was taken captive during the Vigilance airship hijacking, later freed by Waluigi\'s agent "Wally"',
        lastKnownLocation: 'Raventree Manor region, exploring with mixed party',
        tensions: 'MODERATE - Koopalings restless, military questioning extended absence',
        officialStory: 'The King pursues vital intelligence regarding Princess Peach\'s assassination'
    },
    
    domains: [
        { name: 'Dark Land', type: 'Core Territory', status: 'Controlled (Under Regency)' },
        { name: 'Valley of Bowser', type: 'Ancestral Seat', status: 'Controlled' },
        { name: 'World 8', type: 'Industrial Heartland', status: 'Controlled' },
        { name: 'Koopa Beach', type: 'Naval Base', status: 'Controlled' },
        { name: 'Bowser\'s Sky Keep', type: 'Aerial Fortress', status: 'Controlled' },
        { name: 'Neo Bowser City', type: 'Modern Capital', status: 'Controlled' },
        { name: 'Disputed Grass Lands', type: 'Contested', status: 'Partial Control' }
    ],
    
    military: {
        totalForces: 150000,
        elite: 'Hammer Bros Legion (5,000)',
        airforce: 'Airship Armada (47 vessels)',
        navy: 'Blooper Fleet (120 ships)',
        specialForces: 'Magikoopa Corps (500)',
        reserves: 'Goomba Auxiliaries (Unlimited)',
        superweapons: ['Mega Koopa Troopa Program', 'Giant Bowser Statue Network', 'Doom Ship Omega'],
        currentDeployment: 'Kamek has mobilized border patrols following Iron Legion activity'
    },

    members: [
        // =========================================
        // LEGENDARY ERA
        // =========================================
        {
            id: 'koopus_prime',
            name: 'Koopus Prime',
            epithet: 'The First Shell',
            born: -550,
            died: -380,
            reign: '-500 to -380',
            generation: 0,
            icon: '🐉',
            status: 'legendary',
            spouse: 'primordial_flame',
            children: ['koopa_magnus'],
            portrait: '🔥',
            
            summary: 'The mythological founder of the Koopa race. Said to be a dragon who shed his wings to walk among mortals, creating the first Koopas from his scales.',
            
            secrets: [
                { intel: 60, text: 'The "First Shell" is not metaphorical - his literal shell is preserved in the Deepest Vault of Dark Land.' },
                { intel: 80, text: 'The Koopa bloodline carries actual dragon genetics. This is why they can breathe fire.' },
                { intel: 95, text: 'He made a pact with the Underwhere: "My line shall never truly end, so long as fire burns."' }
            ],
            
            achievements: [
                'Created the Koopa race from his own essence',
                'Established the Eternal Flame religion',
                'Built the first Dark Land fortress',
                'Defeated the Ice Titans of the North'
            ],
            
            relics: [
                { name: 'The First Shell', location: 'Deepest Vault', power: 'Grants wearer immunity to all magic' },
                { name: 'Primordial Flame', location: 'Throne Room', power: 'Never extinguishes, source of all Koopa fire-breath' },
                { name: 'The Obsidian Tablets', location: 'Royal Archives', power: 'Legal documents establishing Koopa supremacy' }
            ]
        },
        {
            id: 'primordial_flame',
            name: 'The Primordial Flame',
            epithet: 'First Queen of Fire',
            born: 'Unknown (Elemental)',
            died: 'Never (Merged with the Eternal Flame)',
            generation: 0,
            icon: '🔥',
            status: 'transcended',
            spouse: 'koopus_prime',
            children: ['koopa_magnus'],
            portrait: '✨',
            
            summary: 'A fire elemental who took mortal form to become Koopus Prime\'s queen. When she "died," she became the Eternal Flame that burns in every Koopa castle.',
            
            secrets: [
                { intel: 70, text: 'She still lives within the Eternal Flame. Those who commune with it hear her whispers.' },
                { intel: 90, text: 'The "Koopa Curse" of one true love comes from her blessing/curse on the bloodline.' }
            ]
        },
        
        // =========================================
        // ANCIENT DYNASTY (Selected Figures)
        // =========================================
        {
            id: 'koopa_magnus',
            name: 'King Koopa Magnus',
            epithet: 'The Conqueror',
            born: -400,
            died: -280,
            reign: '-380 to -280',
            generation: 1,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_shellara',
            children: ['koopa_the_terrible', 'prince_snapper'],
            portrait: '⚔️',
            
            summary: 'Expanded the Koopa Kingdom from a single fortress to an empire spanning half the known world. First Koopa to wage war on the proto-Toad tribes.',
            
            secrets: [
                { intel: 40, text: 'The Mushroom Kingdom was once a Koopa vassal state. This is documented.' },
                { intel: 70, text: 'He spared the Toad tribes because of a prophecy about "the pink one who would save his line."' }
            ],
            
            achievements: [
                'Conquered 80% of known territory',
                'Established the Obsidian Tablets (Koopa legal supremacy)',
                'Created the Hammer Bros military order',
                'Built the first Airship prototype'
            ]
        },
        {
            id: 'queen_shellara',
            name: 'Queen Shellara the Wise',
            epithet: 'The Lawgiver',
            born: -420,
            died: -290,
            generation: 1,
            icon: '👸',
            status: 'deceased',
            spouse: 'koopa_magnus',
            children: ['koopa_the_terrible', 'prince_snapper'],
            portrait: '📜',
            
            summary: 'While Magnus conquered, Shellara codified. She wrote the first Koopa legal code and established the bureaucracy that allowed the empire to function.',
            
            secrets: [
                { intel: 35, text: 'She was not born a Koopa but a Toad noble who converted after being captured.' },
                { intel: 65, text: 'The legal code contains hidden clauses that could be used to legitimize a non-Koopa ruler.' }
            ],
            
            achievements: [
                'Wrote the Shellaran Code (basis of Koopa law)',
                'Established the Magikoopa Academy',
                'Created the vassal system for conquered peoples',
                'Founded the Royal Archives'
            ]
        },
        {
            id: 'koopa_the_terrible',
            name: 'King Koopa II',
            epithet: 'The Terrible',
            born: -320,
            died: -200,
            reign: '-280 to -200',
            generation: 2,
            icon: '💀',
            status: 'deceased',
            spouse: 'queen_venoma',
            children: ['koopa_iii', 'prince_darkshell'],
            portrait: '⚫',
            
            summary: 'The most feared Koopa king. His reign was one of absolute terror, but he also doubled the empire\'s size through sheer brutality.',
            
            secrets: [
                { intel: 30, text: 'He was born with a deformity - no shell. He had one forged from obsidian and fire.' },
                { intel: 55, text: 'He massacred an entire Toad city because they laughed at him. 50,000 dead.' },
                { intel: 80, text: 'His ghost is said to still walk the dungeons of the old fortress. Some claim he whispers to Bowser.' }
            ]
        },
        {
            id: 'queen_inferna',
            name: 'Queen Inferna',
            epithet: 'The Mad Queen',
            born: 200,
            died: 280,
            reign: '245-280',
            generation: 8,
            icon: '👸',
            status: 'deceased',
            spouse: 'king_koopa_ix',
            children: ['koopa_x'],
            portrait: '🔥',
            
            summary: 'A queen whose fire-breath burned hotter than any before or since. Went mad after losing her children to a plague and burned three provinces.',
            
            secrets: [
                { intel: 35, text: 'She didn\'t go "mad" - she discovered her children were poisoned by her own advisors.' },
                { intel: 60, text: 'The three burned provinces were where the conspirators fled. It was revenge, not madness.' },
                { intel: 85, text: 'Her ghost is said to haunt the Charred Wastes, protecting lost children.' }
            ],
            
            controversies: [
                'The Burning of Three Provinces (278)',
                'Execution of 200 nobles without trial',
                'The "Mad Queen" propaganda may be slander by survivors'
            ]
        },
        {
            id: 'king_koopa_the_builder',
            name: 'King Koopa VII',
            epithet: 'The Builder',
            born: 450,
            died: 560,
            reign: '490-560',
            generation: 11,
            icon: '🏰',
            status: 'deceased',
            spouse: 'queen_foundation',
            children: ['koopa_viii', 'princess_rampart'],
            portrait: '🧱',
            
            summary: 'After centuries of war, The Builder focused on infrastructure. Most Koopa castles standing today were designed during his reign.',
            
            secrets: [
                { intel: 25, text: 'He was a pacifist by Koopa standards - only started three wars.' },
                { intel: 50, text: 'The castle designs include hidden escape routes known only to the royal family.' },
                { intel: 75, text: 'He made secret alliances with the Shy Guys for construction labor.' }
            ],
            
            achievements: [
                'Built Bowser\'s Castle (original structure)',
                'Created the fortress network across Dark Land',
                'Established the engineering corps',
                'Designed the first reliable lava moats'
            ]
        },
        
        // =========================================
        // MODERN ERA - MORTON SR'S LINE
        // =========================================
        {
            id: 'king_koopa_sr_father',
            name: 'King Bowser Morton Koopa',
            epithet: 'The Reformer',
            born: 800,
            died: 875,
            reign: '830-875',
            generation: 15,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_ignatia',
            children: ['king_morton_sr', 'prince_ludwig_elder', 'princess_wendy_elder'],
            portrait: '📜',
            
            summary: 'Bowser\'s grandfather. Modernized the Koopa military and established formal diplomatic relations with other kingdoms. Relatively peaceful ruler.',
            
            secrets: [
                { intel: 30, text: 'He signed a secret non-aggression pact with King Toadstool III that lasted 50 years.' },
                { intel: 55, text: 'He fell in love with a Toad diplomat. Nothing came of it, but it changed his policies.' },
                { intel: 75, text: 'He foresaw that his grandson Bowser would "either save or doom" the kingdom. He left instructions.' }
            ],
            
            achievements: [
                'Modernized the Airship Fleet',
                'Established the Koopa Academy of War',
                'First Koopa King to engage in diplomacy rather than conquest',
                'Created the Koopalings training program'
            ]
        },
        {
            id: 'queen_ignatia',
            name: 'Queen Ignatia',
            epithet: 'The Flame Keeper',
            born: 805,
            died: 890,
            generation: 15,
            icon: '👸',
            status: 'deceased',
            spouse: 'king_koopa_sr_father',
            children: ['king_morton_sr', 'prince_ludwig_elder', 'princess_wendy_elder'],
            portrait: '🔥',
            
            summary: 'A devout priestess of the Eternal Flame who married for love. She outlived her husband by 15 years and saw the rise of her grandson Morton Sr.',
            
            secrets: [
                { intel: 40, text: 'She could commune with the Primordial Flame directly. Very few have this gift.' },
                { intel: 65, text: 'She foresaw Morton Sr.\'s fratricide but was too old to prevent it.' },
                { intel: 85, text: 'She cursed Morton Sr. on her deathbed: "Your line will know no peace until a Queen of Light forgives you."' }
            ]
        },
        {
            id: 'prince_ludwig_elder',
            name: 'Prince Ludwig Koopa the Elder',
            epithet: 'The Lost Prince',
            born: 835,
            died: 875,
            generation: 16,
            icon: '🎵',
            status: 'deceased',
            spouse: null,
            children: null,
            portrait: '💀',
            
            summary: 'Morton Sr.\'s older brother who should have been king. Died under mysterious circumstances the same night as their father.',
            
            secrets: [
                { intel: 45, text: 'He was a musical prodigy and pacifist - completely unsuited for rule in his family\'s eyes.' },
                { intel: 70, text: 'He was murdered. The weapon was never found, but the wounds matched Morton Sr.\'s claws.' },
                { intel: 90, text: 'Ludwig von Koopa was named after him. Morton Sr. named his "firstborn" after his victim out of guilt.' }
            ]
        },
        {
            id: 'princess_wendy_elder',
            name: 'Princess Wendy Koopa the Elder',
            epithet: 'The Exiled',
            born: 840,
            died: 920,
            generation: 16,
            icon: '👸',
            status: 'deceased',
            spouse: 'duke_shellsworth',
            children: ['the_shellsworth_line'],
            portrait: '🌊',
            
            summary: 'Morton Sr.\'s sister who fled after witnessing his fratricide. She married into minor nobility and founded a cadet branch that still exists.',
            
            secrets: [
                { intel: 35, text: 'She saw Morton kill their brother. She ran that same night.' },
                { intel: 60, text: 'Her descendants, the Shellsworth line, have a legitimate claim to the throne if the main line fails.' },
                { intel: 80, text: 'She left a sealed testimony about the murder with the Magikoopa Archives.' }
            ]
        },
        {
            id: 'king_morton_sr',
            name: 'King Morton Koopa Sr.',
            epithet: 'The Conqueror',
            born: 840,
            died: 920,
            reign: '875-920',
            generation: 16,
            icon: '👑',
            status: 'deceased',
            spouse: 'queen_clawdia',
            children: ['king_bowser', 'princess_lavora'],
            portrait: '💀',
            
            summary: 'Bowser\'s father. A ruthless expansionist who nearly conquered the Mushroom Kingdom. His reign of terror ended mysteriously.',
            
            secrets: [
                { intel: 25, text: 'He killed his older brother to take the throne. This is suspected but never proven.' },
                { intel: 45, text: 'Was killed by a mysterious plumber matching Mario\'s description - decades before Mario was born.' },
                { intel: 65, text: 'Had a secret alliance with the Star Spirits against an entity called "The Void."' },
                { intel: 80, text: 'His death was orchestrated by the Shroob Empire using time manipulation to prevent him from uniting against them.' },
                { intel: 95, text: 'In his final moments, he saw a vision of his son Bowser weeping over a pink-clad body. He died screaming "SAVE HER!"' }
            ],
            
            achievements: [
                'Conquered Giant Land',
                'Built the modern Airship Armada',
                'Established the Koopaling institution',
                'Nearly defeated the Mushroom Kingdom'
            ],
            
            relationships: [
                { person: 'Queen Clawdia', type: 'Wife', notes: 'A love match, unusual for political marriage' },
                { person: 'Star Spirits', type: 'Secret Allies', notes: 'United against a greater threat' },
                { person: 'King Toadstool IV', type: 'Enemy', notes: 'Ironic - they might have been allies against the Void' }
            ]
        },
        {
            id: 'queen_clawdia',
            name: 'Queen Clawdia Koopa',
            epithet: 'The Shadow Queen',
            born: 845,
            died: 925,
            reign: '875-920',
            generation: 16,
            icon: '👸',
            status: 'deceased',
            spouse: 'king_morton_sr',
            children: ['king_bowser', 'princess_lavora'],
            portrait: '🌙',
            
            summary: 'Bowser\'s mother. A sorceress of immense power who taught Kamek everything he knows. Died of heartbreak after her husband\'s death... or did she?',
            
            secrets: [
                { intel: 30, text: 'She was not born a Koopa. She transformed herself through shadow magic to marry Morton.' },
                { intel: 50, text: 'Her original form was humanoid. Some say she was a Shroob defector.' },
                { intel: 70, text: 'She didn\'t die - she merged with the shadows of the castle. Kamek speaks to her nightly.' },
                { intel: 85, text: 'She foresaw Bowser\'s "curse" of loving Peach and tried to prevent it. She failed.' },
                { intel: 95, text: 'She knows the identity of the Hidden Heir. She whispers it to Kamek in dreams.' }
            ],
            
            magicAbilities: [
                'Shadow Manipulation',
                'Prophecy',
                'Shapeshifting',
                'Soul Binding',
                'Dimensional Sight'
            ]
        },
        {
            id: 'princess_lavora',
            name: 'Princess Lavora Koopa',
            epithet: 'The Forgotten Princess',
            born: 895,
            died: null,
            generation: 17,
            icon: '👸',
            status: 'UNKNOWN (Banished)',
            spouse: null,
            children: ['secret_child'],
            portrait: '🌋',
            
            summary: 'Bowser\'s older sister. Banished from Dark Land after a failed coup attempt. Her current whereabouts are unknown.',
            
            secrets: [
                { intel: 35, text: 'She was the legitimate heir before Bowser was born. She never forgave being passed over.' },
                { intel: 55, text: 'The "coup" was actually self-defense - Kamek tried to have her killed when Bowser was born.' },
                { intel: 75, text: 'She has a child hidden somewhere. This child has a claim to the throne.' },
                { intel: 90, text: 'She lives in Sarasaland under a false identity. She works as an advisor to Princess Daisy.' },
                { intel: 95, text: 'Lavora\'s child is being raised in Rogueport. They don\'t know their heritage... yet.' }
            ],
            
            currentStatus: {
                alias: 'Lady Ember',
                location: 'Sarasaland (suspected)',
                occupation: 'Unknown',
                threat: 'MODERATE - Could destabilize succession if she returns'
            }
        },
        
        // =========================================
        // THE KOOPALINGS' MOTHERS - THE GREAT SCANDAL
        // =========================================
        {
            id: 'lady_crescenda',
            name: 'Lady Crescenda von Shellheim',
            epithet: 'The Composer\'s Muse',
            born: 920,
            died: 985,
            generation: 17,
            icon: '🎼',
            status: 'deceased',
            spouse: null,
            children: ['ludwig_von_koopa'],
            portrait: '🎹',
            
            summary: 'Ludwig\'s mother. A noble composer from a minor Koopa house. Had a passionate affair with young Bowser that produced his first child.',
            
            secrets: [
                { intel: 30, text: 'She was 15 years older than Bowser. The affair was scandalous.' },
                { intel: 50, text: 'She died in childbirth with a second child. The child also died.' },
                { intel: 75, text: 'Ludwig inherited her musical genius. He plays her compositions at her grave every year.' }
            ],
            
            relationship: {
                partner: 'King Bowser',
                type: 'Affair (First Love)',
                duration: '938-945',
                ended: 'Her death'
            }
        },
        {
            id: 'lady_valentina',
            name: 'Lady Valentina Tuskara',
            epithet: 'The Ice Princess',
            born: 940,
            died: 1010,
            generation: 17,
            icon: '❄️',
            status: 'deceased',
            spouse: null,
            children: ['lemmy_koopa', 'iggy_koopa'],
            portrait: '🎪',
            
            summary: 'Mother of Lemmy and Iggy. A noblewoman from the Ice Lands who Bowser had a political relationship with. She was eccentric and brilliant.',
            
            secrets: [
                { intel: 25, text: 'She was certifiably insane, but in a genius way. Both her sons inherited this.' },
                { intel: 50, text: 'She could have been Queen, but she refused. She found court life "boring."' },
                { intel: 70, text: 'She joined a traveling circus after having her children. Died performing a dangerous act.' }
            ],
            
            relationship: {
                partner: 'King Bowser',
                type: 'Political Arrangement',
                duration: '960-965',
                ended: 'Mutual agreement'
            }
        },
        {
            id: 'general_bertha',
            name: 'General Bertha Koopstrong',
            epithet: 'The War Goddess',
            born: 935,
            died: 1020,
            generation: 17,
            icon: '⚔️',
            status: 'deceased',
            spouse: null,
            children: ['roy_koopa', 'morton_koopa_jr'],
            portrait: '💪',
            
            summary: 'Mother of Roy and Morton Jr. The greatest female Koopa general in history. Her relationship with Bowser was based on mutual respect and combat.',
            
            secrets: [
                { intel: 30, text: 'She beat Bowser in single combat. That\'s how she got his attention.' },
                { intel: 55, text: 'Their "dates" were military campaigns. They conquered three provinces together.' },
                { intel: 80, text: 'She wanted Roy to be heir. When Bowser chose Ludwig, she nearly started a civil war.' }
            ],
            
            relationship: {
                partner: 'King Bowser',
                type: 'Warrior Bond',
                duration: '965-980',
                ended: 'Political disagreement over succession'
            },
            
            achievements: [
                'Conquered the Eastern Wastes',
                'Developed the Hammer Bros combat doctrine',
                'Only person to defeat Bowser in single combat',
                'Trained Roy and Morton Jr. personally'
            ]
        },
        {
            id: 'countess_wanda',
            name: 'Countess Wanda Oceanus',
            epithet: 'The Siren',
            born: 950,
            died: null,
            generation: 17,
            icon: '🌊',
            status: 'ALIVE (Retired)',
            spouse: null,
            children: ['wendy_o_koopa'],
            portrait: '💎',
            
            summary: 'Wendy\'s mother. A wealthy countess from the Water Lands who was famous for her beauty and manipulation. She\'s still alive and schemes from her island palace.',
            
            secrets: [
                { intel: 20, text: 'She used magic to enhance her beauty. Wendy inherited the vanity.' },
                { intel: 45, text: 'She tried to assassinate Bowser three times after he ended their relationship. All failures.' },
                { intel: 65, text: 'She still sends letters to Wendy, trying to turn her against her siblings.' },
                { intel: 85, text: 'She has remarried - to a wealthy Toad merchant. She plays both sides of the war.' }
            ],
            
            relationship: {
                partner: 'King Bowser',
                type: 'Political Marriage (Annulled)',
                duration: '975-978',
                ended: 'Bowser discovered her assassination plots'
            },
            
            currentStatus: {
                location: 'Water Land, Isle of Mirrors',
                wealth: 'Immense',
                influence: 'Moderate - controls Water Land trade',
                threat: 'LOW but persistent'
            }
        },
        {
            id: 'lady_larissa',
            name: 'Lady Larissa the Meek',
            epithet: 'The Kind One',
            born: 970,
            died: 1015,
            generation: 17,
            icon: '🌸',
            status: 'deceased',
            spouse: null,
            children: ['larry_koopa'],
            portrait: '💕',
            
            summary: 'Larry\'s mother. The only one of Bowser\'s consorts who he genuinely loved (before Peach). A gentle soul who died of illness.',
            
            secrets: [
                { intel: 25, text: 'She was common-born - a healer in the castle. Bowser elevated her to nobility.' },
                { intel: 50, text: 'She begged Bowser to make peace with the Mushroom Kingdom. He almost listened.' },
                { intel: 70, text: 'Her death sent Bowser into a rage that sparked the renewed war with the Toads.' },
                { intel: 90, text: 'She left Larry a letter to be opened when he turns 30. It contains a secret about Bowser.' }
            ],
            
            relationship: {
                partner: 'King Bowser',
                type: 'True Love (Second)',
                duration: '995-1015',
                ended: 'Her death from "Wasting Sickness"'
            }
        },
        
        // =========================================
        // KING BOWSER
        // =========================================
        {
            id: 'king_bowser',
            name: 'King Bowser Koopa',
            epithet: 'The Eternal Flame',
            titles: [
                'King of the Koopas',
                'Lord of Dark Land',
                'Commander of the Airship Armada',
                'Keeper of the Primordial Flame',
                'Claimant to the Mushroom Throne'
            ],
            born: 905,
            died: null,
            reign: '920-Present (Adventuring Abroad 1040)',
            generation: 17,
            icon: '🐢',
            status: 'ACTIVE (Abroad)',
            spouses: ['lady_crescenda', 'lady_valentina', 'general_bertha', 'countess_wanda', 'lady_larissa'],
            children: ['ludwig_von_koopa', 'lemmy_koopa', 'roy_koopa', 'iggy_koopa', 'wendy_o_koopa', 'morton_koopa_jr', 'larry_koopa', 'bowser_jr'],
            portrait: '🔥',
            
            summary: 'The King of the Koopas. Currently abroad with a party of adventurers after being freed from captivity aboard the Vigilance. His obsession with Princess Peach defined an era.',
            
            currentStatus: {
                condition: 'Active and healthy',
                location: 'Raventree Manor region, traveling with mixed adventuring party',
                context: 'Was taken captive during X.O.\'s hijacking of the Vigilance (Day 4), freed by Waluigi\'s agent Wally (Day 7), now exploring with the party',
                lastContact: 'Day 18 - Raventree Manor exploration',
                companions: 'Markop, Waluigi (intermittent), and others from the Vigilance crew'
            },
            
            recentTimeline: [
                { day: 4, event: 'Taken captive when X.O. hijacked the Vigilance' },
                { day: 7, event: 'Freed by Waluigi\'s agent "Wally" in dramatic exit, leaving Liberated Toads injured' },
                { day: 15, event: 'Entered Raventree Manor with party' },
                { day: 16, event: 'Explored manor, encountered ghosts and supernatural phenomena' },
                { day: 18, event: 'Navigated hedge maze, found evidence of time war involving the Oracle' },
                { day: 20, event: 'Continued manor exploration, Iron Legion activity nearby' }
            ],
            
            secrets: [
                { intel: 15, text: 'His "kidnappings" of Peach evolved from conquest attempts to diplomatic meetings.' },
                { intel: 30, text: 'He holds the Obsidian Tablets proving the Toadstools are technically Koopa vassals.' },
                { intel: 45, text: 'He has been cursed since birth to love only once, truly. That love was Peach.' },
                { intel: 60, text: 'He arrived at the murder scene minutes after it happened. He found the body.' },
                { intel: 75, text: 'He roared in genuine grief and invaded to AVENGE her, not because he killed her.' },
                { intel: 85, text: 'He knows who the father of Peach\'s child is. He has kept the secret for 85 years.' },
                { intel: 95, text: 'His current adventure may be connected to uncovering the truth about Peach\'s death.' }
            ],
            
            achievements: [
                'Unified the Koopa tribes under one banner',
                'Built Neo Bowser City',
                'Created the modern Koopalings system',
                'Survived 147 defeats by Mario (and counting)',
                'Negotiated the Rose-Shell Accords (unsigned due to Peach\'s death)'
            ],
            
            controversies: [
                'The Kidnapping Campaigns (ongoing)',
                'The Galaxy Incident',
                'Creation of Bowser Jr. (means unknown)',
                'Refusal to name a clear successor',
                'Extended absence from Dark Land during current crisis'
            ],
            
            relationships: [
                { person: 'Princess Peach', type: 'Obsessive Love / Would-Be Political Alliance', notes: 'The defining relationship of his life' },
                { person: 'Mario', type: 'Arch-Nemesis / Respect', notes: 'Grudging respect for a worthy foe' },
                { person: 'Chief Thornpaw', type: 'Unknown', notes: 'May have known about the affair. Hasn\'t revealed it.' },
                { person: 'Ludwig von Koopa', type: 'Firstborn / Disappointment', notes: 'Wishes Ludwig was more aggressive' },
                { person: 'Bowser Jr.', type: 'Favorite Son', notes: 'Unhealthy projection of his desires onto the boy' },
                { person: 'Kamek', type: 'Surrogate Father / Advisor', notes: 'The only one who truly understands him' },
                { person: 'Waluigi', type: 'Recent Contact', notes: 'Waluigi\'s agent freed him from captivity' },
                { person: 'Markop', type: 'Adventuring Companion', notes: 'Currently traveling together' }
            ]
        },
        
        // =========================================
        // THE SEVEN KOOPALINGS (FULL PROFILES)
        // =========================================
        {
            id: 'ludwig_von_koopa',
            name: 'Ludwig von Koopa',
            epithet: 'The Composer',
            born: 945,
            died: null,
            generation: 18,
            icon: '🎼',
            status: 'ACTIVE',
            spouse: 'lady_harmonia',
            children: ['allegra_koopa', 'fortissimo_koopa'],
            parents: ['king_bowser', 'lady_crescenda'],
            portrait: '🎹',
            birthOrder: 1,
            
            summary: 'The eldest Koopaling and rightful heir by birth order. A musical genius and military strategist who composes requiems for his enemies.',
            
            personality: {
                traits: ['Arrogant', 'Brilliant', 'Calculating', 'Melancholic'],
                quirks: ['Composes music during battles', 'Names his attacks after musical terms', 'Speaks in a German-esque accent'],
                fears: ['Irrelevance', 'Being forgotten', 'His father\'s disappointment']
            },
            
            secrets: [
                { intel: 20, text: 'He was named after his father\'s murdered uncle. Bowser told him it was "to honor the dead."' },
                { intel: 40, text: 'He knows he\'s the rightful heir and resents Bowser Jr.\'s favoritism.' },
                { intel: 60, text: 'He has been secretly meeting with Princess Daisy\'s envoys about a potential alliance.' },
                { intel: 80, text: 'He has composed an opera about Peach\'s assassination. It reveals things he shouldn\'t know.' },
                { intel: 95, text: 'He found his father\'s journal. He knows Bowser loved Peach more than any of his children.' }
            ],
            
            currentConcerns: [
                'Father\'s extended absence and what it means for succession',
                'Kamek\'s regency consolidating power',
                'Bowser Jr. potentially being named sole heir in Bowser\'s absence'
            ],
            
            achievements: [
                'Conquered Sky Land at age 30',
                'Composed 47 symphonies',
                'Invented the "Koopa Cannon" siege weapon',
                'Successfully defended against three Mario assaults'
            ],
            
            relationships: [
                { person: 'Bowser Jr.', type: 'Bitter Rival', notes: 'Hates being passed over for a child' },
                { person: 'Lemmy', type: 'Closest Ally', notes: 'The only sibling he trusts' },
                { person: 'Roy', type: 'Mutual Disdain', notes: 'Roy thinks he\'s a weakling; Ludwig thinks Roy is stupid' },
                { person: 'Lady Harmonia', type: 'Political Marriage', notes: 'No love, but mutual respect' },
                { person: 'Kamek', type: 'Suspicion', notes: 'Believes Kamek will support Jr. over him' }
            ],
            
            marriage: {
                spouse: 'Lady Harmonia von Shellheim',
                date: 990,
                type: 'Political (to strengthen his claim)',
                status: 'Strained',
                children: 2
            },
            
            claimStrength: 4,
            militaryForces: 15000,
            territory: 'Sky Land (Governor)',
            
            succession: {
                position: 'First in line by birth',
                supporters: ['Conservative nobles', 'Military traditionalists', 'Lemmy'],
                obstacles: ['Bowser Jr.\'s favoritism', 'Kamek\'s opposition', 'His own unpopularity with troops']
            }
        },
        {
            id: 'lemmy_koopa',
            name: 'Lemmy Koopa',
            epithet: 'The Entertainer',
            born: 962,
            died: null,
            generation: 18,
            icon: '🎪',
            status: 'ACTIVE',
            spouse: null,
            children: null,
            parents: ['king_bowser', 'lady_valentina'],
            portrait: '🔮',
            birthOrder: 2,
            
            summary: 'The second eldest. A seemingly harmless circus performer who is actually the kingdom\'s spymaster. Nobody suspects the clown.',
            
            personality: {
                traits: ['Childlike', 'Deceptive', 'Loyal', 'Surprisingly Ruthless'],
                quirks: ['Rides a ball everywhere', 'Speaks in a high voice', 'Collects rubber ducks'],
                fears: ['Being taken seriously', 'Growing up', 'His mother\'s madness claiming him']
            },
            
            secrets: [
                { intel: 25, text: 'His "circus" is actually a traveling spy network. Every performer is an agent.' },
                { intel: 45, text: 'He has visited the Mushroom Kingdom in disguise dozens of times.' },
                { intel: 65, text: 'He knows the location of two Star Pieces that everyone thinks are lost.' },
                { intel: 80, text: 'He has been protecting Larry from Kamek. He won\'t say why.' },
                { intel: 95, text: 'He has agents tracking his father\'s movements. He knows about Raventree Manor.' }
            ],
            
            relationships: [
                { person: 'Ludwig', type: 'Loyal Ally', notes: 'Will support his claim to the throne' },
                { person: 'Iggy', type: 'Twin Bond', notes: 'Can communicate without words' },
                { person: 'Larry', type: 'Protective', notes: 'Sees himself in the youngest' },
                { person: 'Bowser Jr.', type: 'Wary', notes: 'Suspects Jr. is not what he seems' }
            ],
            
            intelligence: {
                network: 'The Traveling Circus',
                agents: 340,
                reach: 'All major kingdoms',
                specialization: 'Infiltration and information gathering'
            },
            
            claimStrength: 1,
            militaryForces: 'None direct, but spy network is invaluable',
            territory: 'None (Nomadic)'
        },
        {
            id: 'roy_koopa',
            name: 'Roy Koopa',
            epithet: 'The Bully',
            born: 968,
            died: null,
            generation: 18,
            icon: '😎',
            status: 'ACTIVE',
            spouse: null,
            children: ['rock_koopa'],
            parents: ['king_bowser', 'general_bertha'],
            portrait: '💪',
            birthOrder: 3,
            
            summary: 'The third eldest and most physically powerful. Commands the Hammer Bros Legion. Has a secret child from a forbidden relationship.',
            
            personality: {
                traits: ['Aggressive', 'Blunt', 'Secretly Insecure', 'Fiercely Loyal'],
                quirks: ['Wears sunglasses even at night', 'Punches first, asks questions never', 'Writes poetry in secret'],
                fears: ['Appearing weak', 'His mother\'s disappointment', 'Emotional vulnerability']
            },
            
            secrets: [
                { intel: 20, text: 'The sunglasses hide a permanent injury from a childhood accident with Iggy\'s experiments.' },
                { intel: 40, text: 'He writes poetry under a pseudonym. It\'s actually published and popular.' },
                { intel: 60, text: 'He has a son named Rock from a relationship with a Hammer Sister. The child is hidden.' },
                { intel: 80, text: 'His mother wanted him to be king. He believes he would be better than Ludwig.' },
                { intel: 95, text: 'He found evidence that Kamek killed his grandfather Morton Sr. He\'s waiting for the right moment.' }
            ],
            
            relationships: [
                { person: 'Ludwig', type: 'Rivalry', notes: 'Thinks Ludwig is unworthy of the throne' },
                { person: 'Morton Jr.', type: 'Brotherhood', notes: 'Fellow warriors, train together daily' },
                { person: 'Wendy', type: 'Protective', notes: 'Despite their fights, he\'d die for her' },
                { person: 'Bowser Jr.', type: 'Barely Tolerant', notes: 'Sees Jr. as a spoiled brat' }
            ],
            
            secretChild: {
                name: 'Rock Koopa',
                mother: 'Sergeant Shellshock (Hammer Sister)',
                born: 1020,
                location: 'Hidden in the Hammer Bros barracks',
                legitimacy: 'Illegitimate but acknowledged privately',
                succession: 'Could complicate things if revealed'
            },
            
            claimStrength: 3,
            militaryForces: 25000,
            territory: 'Giant Land (Military Governor)'
        },
        {
            id: 'iggy_koopa',
            name: 'Iggy Koopa',
            epithet: 'The Mad Scientist',
            born: 962,
            died: null,
            generation: 18,
            icon: '🔬',
            status: 'ACTIVE',
            spouse: 'experiment_7',
            children: null,
            parents: ['king_bowser', 'lady_valentina'],
            portrait: '🤪',
            birthOrder: 4,
            
            summary: 'Lemmy\'s twin and the kingdom\'s chief inventor. His creations are brilliant, dangerous, and often explode. May have married one of his experiments.',
            
            personality: {
                traits: ['Manic', 'Genius', 'Amoral', 'Obsessive'],
                quirks: ['Talks to his inventions', 'Laughs at inappropriate times', 'Forgets to eat for days'],
                fears: ['Running out of ideas', 'Being called "normal"', 'Lemmy getting hurt']
            },
            
            secrets: [
                { intel: 20, text: 'He created the Chain Chomps. It was an accident. He can\'t control them.' },
                { intel: 45, text: 'His "wife" is Experiment 7, an artificial Koopa he created. It\'s unclear if she\'s sentient.' },
                { intel: 65, text: 'He\'s been working on a time machine. He\'s made three working prototypes.' },
                { intel: 85, text: 'He\'s met a future version of himself. He won\'t say what they discussed.' },
                { intel: 95, text: 'He\'s been tracking temporal anomalies. Raventree Manor is showing concerning readings.' }
            ],
            
            relationships: [
                { person: 'Lemmy', type: 'Twin Bond', notes: 'The only person who truly understands him' },
                { person: 'Ludwig', type: 'Intellectual Respect', notes: 'Collaborates on war machines' },
                { person: 'Morton Jr.', type: 'Test Subject', notes: 'Uses Morton to test durability of inventions' },
                { person: 'Experiment 7', type: 'Wife?', notes: 'It\'s complicated' }
            ],
            
            inventions: [
                { name: 'Chain Chomps', status: 'Out of control' },
                { name: 'Mecha-Koopa', status: 'In production' },
                { name: 'Temporal Displacement Device', status: 'Three prototypes' },
                { name: 'Anti-Star Power Field', status: 'Theoretical' },
                { name: 'Experiment 7', status: '...Married?' }
            ],
            
            claimStrength: 1,
            militaryForces: 'Robot Army (estimated 5,000 units)',
            territory: 'Pipe Land (Research Domain)'
        },
        {
            id: 'wendy_o_koopa',
            name: 'Wendy O. Koopa',
            epithet: 'The Diva',
            born: 975,
            died: null,
            generation: 18,
            icon: '💋',
            status: 'ACTIVE',
            spouse: null,
            children: null,
            parents: ['king_bowser', 'countess_wanda'],
            portrait: '💎',
            birthOrder: 5,
            
            summary: 'The only female Koopaling. A master diplomat and manipulator who controls foreign relations. Plays the princess while being the most politically dangerous sibling.',
            
            personality: {
                traits: ['Vain', 'Cunning', 'Ambitious', 'Secretly Lonely'],
                quirks: ['Obsessed with jewelry', 'Throws tantrums strategically', 'Changes her look constantly'],
                fears: ['Aging', 'Being forgotten', 'Becoming her mother']
            },
            
            secrets: [
                { intel: 20, text: 'She\'s the one who handles all foreign diplomacy. Her brothers don\'t know how capable she is.' },
                { intel: 40, text: 'She\'s been in secret contact with Prince Peasley. They\'re planning something.' },
                { intel: 60, text: 'She has blackmail material on every noble in three kingdoms.' },
                { intel: 80, text: 'She\'s considered defecting to Princess Daisy\'s side. They\'ve had private meetings.' },
                { intel: 95, text: 'Her mother tried to use her to assassinate Bowser. Wendy refused and has been protecting him since.' }
            ],
            
            relationships: [
                { person: 'Roy', type: 'Sibling Rivalry/Love', notes: 'They fight constantly but he\'s her protector' },
                { person: 'Larry', type: 'Maternal', notes: 'Treats him like a son' },
                { person: 'Countess Wanda', type: 'Estranged', notes: 'Refuses to become her mother' },
                { person: 'Prince Peasley', type: 'Diplomatic Interest', notes: 'May be more than political' },
                { person: 'Princess Daisy', type: 'Secret Alliance', notes: 'They communicate regularly' }
            ],
            
            diplomaticRelations: {
                beanbeanKingdom: 'Favorable',
                sarasaland: 'Secret Alliance',
                mushroomRegency: 'Hostile',
                ironLegion: 'Negotiating'
            },
            
            claimStrength: 2,
            militaryForces: 5000,
            territory: 'Water Land (Diplomatic Governor)'
        },
        {
            id: 'morton_koopa_jr',
            name: 'Morton Koopa Jr.',
            epithet: 'The Loud',
            born: 980,
            died: null,
            generation: 18,
            icon: '📢',
            status: 'ACTIVE',
            spouse: null,
            children: null,
            parents: ['king_bowser', 'general_bertha'],
            portrait: '🗣️',
            birthOrder: 6,
            
            summary: 'Named after his grandfather. A walking siege engine who never stops talking. Secretly articulate when he chooses to be.',
            
            personality: {
                traits: ['Boisterous', 'Loyal', 'Underestimated', 'Actually Quite Clever'],
                quirks: ['Never stops talking', 'Has memorized entire libraries', 'Strongest Koopaling physically'],
                fears: ['Silence', 'Being alone', 'Living up to his namesake\'s darkness']
            },
            
            secrets: [
                { intel: 20, text: 'He talks constantly because the silence reminds him of his grandfather\'s violent legacy.' },
                { intel: 45, text: 'He\'s memorized every book in the royal library. He\'s actually the most well-read Koopaling.' },
                { intel: 65, text: 'He knows what his grandfather did to the elder Ludwig. It haunts him.' },
                { intel: 85, text: 'He\'s been secretly learning magic from an exiled Magikoopa - preparing in case Kamek becomes an enemy.' }
            ],
            
            relationships: [
                { person: 'Roy', type: 'Brothers-in-Arms', notes: 'Train together daily, deeply loyal' },
                { person: 'Ludwig', type: 'Respectful', notes: 'Acknowledges his birthright' },
                { person: 'Larry', type: 'Protective', notes: 'Sees him as the baby of the family' },
                { person: 'King Bowser', type: 'Devoted', notes: 'Would die for his father without hesitation' }
            ],
            
            claimStrength: 2,
            militaryForces: 18000,
            territory: 'Desert Land (Siege Commander)'
        },
        {
            id: 'larry_koopa',
            name: 'Larry Koopa',
            epithet: 'The Youngest',
            born: 1000,
            died: null,
            generation: 18,
            icon: '🌟',
            status: 'ACTIVE',
            spouse: null,
            children: null,
            parents: ['king_bowser', 'lady_larissa'],
            portrait: '⭐',
            birthOrder: 7,
            
            summary: 'The youngest Koopaling and the one Bowser actually loved (unlike his siblings, whose mothers were political). Ambitious and determined to prove himself.',
            
            personality: {
                traits: ['Ambitious', 'Resentful', 'Clever', 'Starving for Approval'],
                quirks: ['Plants gardens wherever he\'s stationed', 'Named after a type of plant', 'Youngest but most determined'],
                fears: ['Being dismissed as "just the baby"', 'Never living up to Jr.', 'His mother\'s letter']
            },
            
            secrets: [
                { intel: 20, text: 'He\'s the only Koopaling whose mother Bowser actually loved. His siblings resent this.' },
                { intel: 40, text: 'He\'s secretly terrified of Bowser Jr. - not jealous, actually afraid.' },
                { intel: 60, text: 'He found his mother\'s unsent letters. She knew something about Bowser Jr.\'s creation that scared her.' },
                { intel: 80, text: 'Lemmy has been protecting him from Kamek. Neither will say why Kamek considers him a threat.' },
                { intel: 95, text: 'His mother\'s letter reveals: "Jr. is not what you think. He is not your brother. Protect yourself."' }
            ],
            
            relationships: [
                { person: 'Bowser Jr.', type: 'Fear/Jealousy', notes: 'Something is very wrong with Jr.' },
                { person: 'Lemmy', type: 'Protected By', notes: 'Lemmy shields him from something' },
                { person: 'Wendy', type: 'Maternal Figure', notes: 'She raised him more than anyone' },
                { person: 'King Bowser', type: 'Desperate for Approval', notes: 'Wants his father\'s love' }
            ],
            
            claimStrength: 2,
            militaryForces: 8000,
            territory: 'Grass Land (Junior Governor)'
        },
        
        // =========================================
        // BOWSER JR. - THE MYSTERY
        // =========================================
        {
            id: 'bowser_jr',
            name: 'Prince Bowser Jr.',
            epithet: 'The Young Flame',
            born: 1025,
            died: null,
            generation: 18,
            icon: '👶',
            status: 'ACTIVE',
            spouse: null,
            children: null,
            parents: ['king_bowser', 'UNKNOWN'],
            portrait: '🎨',
            birthOrder: '8 (or 1?)',
            
            summary: 'Bowser\'s favorite and sole "legitimate" son. His mother is unknown - possibly magically created. Shows unusual powers and a disturbing fixation on Princess Peach.',
            
            personality: {
                traits: ['Entitled', 'Clever', 'Obsessive', 'Disturbingly Focused'],
                quirks: ['His paintbrush creates reality', 'Obsessed with "Mama Peach"', 'Speaks with adult vocabulary'],
                fears: ['Unknown - possibly nothing', 'Being separated from his father', 'The truth about himself?']
            },
            
            secrets: [
                { intel: 15, text: 'He was told Peach is his mother. This is almost certainly false... probably.' },
                { intel: 35, text: 'His paintbrush is a genuine artifact of unknown origin. It creates what he paints.' },
                { intel: 55, text: 'He shows no DNA match to any of Bowser\'s known consorts. His creation is unnatural.' },
                { intel: 75, text: 'Kamek performed a ritual the night Jr. was born. No one else was present.' },
                { intel: 85, text: 'Some theorize he was created using Bowser\'s DNA and something else - possibly Peach\'s.' },
                { intel: 95, text: 'Queen Clawdia\'s ghost whispers that Jr. is "the wish made flesh" - a being created from Bowser\'s desire for a child with Peach.' }
            ],
            
            relationships: [
                { person: 'King Bowser', type: 'Utter Devotion', notes: 'Bowser\'s favorite, perhaps unhealthily so' },
                { person: 'Ludwig', type: 'Usurper', notes: 'Took his birthright; Ludwig hates him' },
                { person: 'Larry', type: 'Fear', notes: 'Larry is terrified of him' },
                { person: 'Kamek', type: 'Creator?', notes: 'The Magikoopa knows the truth' },
                { person: 'Princess Peach', type: 'Obsession', notes: 'Calls her "Mama" despite knowing she\'s dead' }
            ],
            
            mysteriesAbout: [
                { question: 'Who is his mother?', theories: ['No mother', 'Magical creation', 'Peach (impossible?)', 'A clone'] },
                { question: 'What is the paintbrush?', theories: ['Artifact', 'Part of him', 'Gift from the Star Spirits', 'Shroob tech'] },
                { question: 'Why does Kamek favor him?', theories: ['Kamek created him', 'Prophecy', 'Control', 'Jr. controls Kamek?'] },
                { question: 'Why are Larry and others afraid?', theories: ['They know something', 'Jr. threatened them', 'Instinct', 'Jr. is not a normal Koopa'] }
            ],
            
            claimStrength: 5,
            militaryForces: 'Father\'s entire army (theoretically)',
            territory: 'None specific (Heir Apparent)'
        },
        
        // =========================================
        // KAMEK - THE POWER BEHIND THE THRONE
        // =========================================
        {
            id: 'kamek',
            name: 'Kamek',
            epithet: 'The Regent of Shadows',
            born: 'Unknown (estimated 600-700)',
            died: null,
            generation: null,
            icon: '🧙',
            status: 'ACTIVE (Regent)',
            spouse: null,
            children: null,
            portrait: '🔮',
            
            summary: 'The Magikoopa who raised Bowser, now serving as regent while the King adventures abroad. The most dangerous person in Dark Land.',
            
            currentRole: {
                title: 'Lord Regent of Dark Land',
                since: 'Day 4, 1040 (when Bowser was captured aboard Vigilance)',
                authority: 'Full royal powers during King\'s absence',
                actions: [
                    'Mobilized border patrols after Iron Legion activity',
                    'Consolidated control over Koopa Troop remnants',
                    'Magical activity detected in Valley of Bowser (Day 18)'
                ]
            },
            
            personality: {
                traits: ['Patient', 'Manipulative', 'Genuinely Loving (of Bowser)', 'Ruthless'],
                quirks: ['Speaks in riddles when anxious', 'Collects baby teeth', 'Never sleeps'],
                fears: ['Losing Bowser permanently', 'His own mortality', 'What he saw in the prophecy']
            },
            
            secrets: [
                { intel: 20, text: 'He\'s over 300 years old. Magikoopas are nearly immortal if they stay powerful.' },
                { intel: 40, text: 'He raised Bowser from infancy after Morton Sr. died. He loves Bowser as a son.' },
                { intel: 55, text: 'Rumor is that he knew about Peach\'s pregnancy. He tried to have the child "retrieved."' },
                { intel: 70, text: 'He performed the ritual that created Bowser Jr. The components are classified.' },
                { intel: 85, text: 'He killed Morton Sr. on Queen Clawdia\'s orders - to protect baby Bowser from his father\'s plans.' },
                { intel: 95, text: 'He is in secret communication with the Star Spirits about "The Void" - a threat greater than any faction.' },
                { intel: 100, text: 'He knows who killed Peach. He\'s known for 85 years. He hasn\'t told anyone because the truth would destroy Bowser.' }
            ],
            
            relationships: [
                { person: 'King Bowser', type: 'Surrogate Son', notes: 'Would do anything for him' },
                { person: 'Bowser Jr.', type: 'Creation', notes: 'Made him to fulfill Bowser\'s wish' },
                { person: 'Queen Clawdia (Ghost)', type: 'Communion', notes: 'Speaks to her spirit nightly' },
                { person: 'Ludwig', type: 'Threat', notes: 'Will kill him if necessary to protect Jr.' },
                { person: 'The Star Spirits', type: 'Uneasy Alliance', notes: 'United against the Void' }
            ],
            
            powers: [
                'Size Manipulation',
                'Prophecy',
                'Teleportation',
                'Mass Mind Control',
                'Necromantic Communion',
                'Artifact Creation',
                'Dimensional Sight'
            ],
            
            regency: {
                startDate: 'Day 4, 1040',
                cause: 'Bowser captured during Vigilance hijacking',
                authority: 'Full royal powers until Bowser returns',
                challenges: 'Koopalings questioning extended royal absence',
                goals: 'Maintain stability, prepare for "The Void", await Bowser\'s return'
            }
        },
        
        // =========================================
        // GRANDCHILDREN - NEXT GENERATION
        // =========================================
        {
            id: 'allegra_koopa',
            name: 'Princess Allegra Koopa',
            epithet: 'The Prodigy',
            born: 1015,
            died: null,
            generation: 19,
            icon: '🎵',
            status: 'ACTIVE',
            spouse: null,
            children: null,
            parents: ['ludwig_von_koopa', 'lady_harmonia'],
            portrait: '🌟',
            
            summary: 'Ludwig\'s eldest daughter and the first grandchild of Bowser. A musical prodigy who has inherited both her father\'s genius and her grandfather\'s ambition.',
            
            personality: {
                traits: ['Brilliant', 'Cold', 'Ambitious', 'Secretly Kind'],
                quirks: ['Composes in her sleep', 'Never raises her voice', 'Collects rare instruments'],
                fears: ['Mediocrity', 'Being used as a pawn', 'Inheriting her grandmother\'s curse']
            },
            
            secrets: [
                { intel: 30, text: 'She has already composed a coronation march - for herself, not her father.' },
                { intel: 55, text: 'She has been secretly training in combat. She wants to be a warrior-queen.' },
                { intel: 75, text: 'She has made contact with Princess Lavora in Sarasaland. They correspond regularly.' }
            ],
            
            relationships: [
                { person: 'Ludwig', type: 'Father/Mentor', notes: 'He sees himself in her, for better and worse' },
                { person: 'Bowser Jr.', type: 'Contempt', notes: 'Believes Jr. is unfit to rule' },
                { person: 'Princess Lavora', type: 'Secret Correspondence', notes: 'Learning about the "other side" of the family' }
            ],
            
            claimStrength: 2,
            succession: 'Third generation, but ambitious'
        },
        {
            id: 'fortissimo_koopa',
            name: 'Prince Fortissimo Koopa',
            epithet: 'The Quiet Storm',
            born: 1020,
            died: null,
            generation: 19,
            icon: '🎺',
            status: 'ACTIVE',
            spouse: null,
            children: null,
            parents: ['ludwig_von_koopa', 'lady_harmonia'],
            portrait: '🌩️',
            
            summary: 'Ludwig\'s son and younger child. Despite his name, he is quiet and introspective, preferring strategy games to music.',
            
            personality: {
                traits: ['Quiet', 'Strategic', 'Observant', 'Patient'],
                quirks: ['Speaks rarely but precisely', 'Master of strategy games', 'Watches everyone'],
                fears: ['Being overlooked', 'Open conflict', 'His father\'s disappointment']
            },
            
            secrets: [
                { intel: 25, text: 'He has no interest in music. This deeply disappoints Ludwig.' },
                { intel: 50, text: 'He has beaten every strategist in the kingdom at war games. He may be a military genius.' },
                { intel: 70, text: 'He has been mapping the political relationships of every faction. He\'s preparing something.' }
            ],
            
            relationships: [
                { person: 'Ludwig', type: 'Father/Disappointment', notes: 'Ludwig wishes he were more musical' },
                { person: 'Allegra', type: 'Sister/Rival', notes: 'They compete in different arenas' },
                { person: 'Morton Jr.', type: 'Unexpected Friendship', notes: 'Morton respects his strategic mind' }
            ],
            
            claimStrength: 1,
            succession: 'Third generation, overlooked but dangerous'
        },
        {
            id: 'rock_koopa',
            name: 'Rock Koopa',
            epithet: 'The Hidden Heir',
            born: 1020,
            died: null,
            generation: 19,
            icon: '🪨',
            status: 'HIDDEN',
            spouse: null,
            children: null,
            parents: ['roy_koopa', 'sergeant_shellshock'],
            portrait: '💪',
            
            summary: 'Roy\'s illegitimate son, hidden in the Hammer Bros barracks. Raised as a common soldier, he doesn\'t know his true parentage.',
            
            personality: {
                traits: ['Strong', 'Honest', 'Confused about his origins', 'Natural Leader'],
                quirks: ['Fights like Roy without being trained by him', 'Instinctively wears pink', 'Sunlight bothers his eyes'],
                fears: ['Never knowing his father', 'Being ordinary', 'The truth']
            },
            
            secrets: [
                { intel: 20, text: 'He knows he\'s not like the other soldiers. He suspects noble blood.' },
                { intel: 45, text: 'General Sledge has been watching over him. He\'s being groomed for something.' },
                { intel: 70, text: 'His mother was killed under mysterious circumstances. It may have been a cover-up.' },
                { intel: 90, text: 'Roy visits him in disguise once a year. Rock doesn\'t recognize him.' }
            ],
            
            relationships: [
                { person: 'Roy', type: 'Unknown Father', notes: 'Has never met him openly' },
                { person: 'General Sledge', type: 'Secret Guardian', notes: 'Watches over him' },
                { person: 'The Hammer Bros', type: 'Brothers-in-Arms', notes: 'His only family' }
            ],
            
            claimStrength: 0,
            succession: 'Could be legitimized if Roy chooses'
        }
    ],
    
    // =========================================
    // SUCCESSION ORDER
    // =========================================
    succession: [
        {
            rank: 1,
            name: 'Bowser Jr.',
            claim: 'Named Heir by Bowser',
            strength: 'STRONG (Father\'s Favor)',
            supporters: ['Kamek', 'Junior Officers'],
            opposition: ['Ludwig', 'Roy', 'Traditional Nobles']
        },
        {
            rank: 2,
            name: 'Ludwig von Koopa',
            claim: 'Firstborn by Blood',
            strength: 'STRONG (Tradition)',
            supporters: ['Conservative Nobles', 'Lemmy', 'Parts of Military'],
            opposition: ['Kamek', 'Bowser Jr.', 'Roy']
        },
        {
            rank: 3,
            name: 'Roy Koopa',
            claim: 'Military Strength',
            strength: 'MODERATE (Force)',
            supporters: ['Hammer Bros Legion', 'Morton Jr.'],
            opposition: ['Everyone else']
        },
        {
            rank: 4,
            name: 'Princess Lavora',
            claim: 'Older than Bowser (Banished)',
            strength: 'WEAK (Exile)',
            supporters: ['Unknown'],
            opposition: ['The entire kingdom']
        },
        {
            rank: 5,
            name: 'Lavora\'s Hidden Child',
            claim: 'Secret Heir',
            strength: 'UNKNOWN',
            supporters: ['Unknown'],
            opposition: ['Doesn\'t know they exist']
        },
        {
            rank: 6,
            name: 'Princess Allegra Koopa',
            claim: 'Ludwig\'s Firstborn (Third Generation)',
            strength: 'WEAK (Too young, wrong generation)',
            supporters: ['House Shellheim'],
            opposition: ['Everyone above her in line']
        }
    ],
    
    // =========================================
    // CADET BRANCHES - EXPANDED
    // =========================================
    cadetBranches: [
        {
            id: 'house_shellheim',
            name: 'House Shellheim',
            sigil: '🎵',
            motto: 'Art in War',
            founded: 890,
            founder: 'Composed after Lady Crescenda\'s family accepted Ludwig',
            seat: 'Melody Fortress, Sky Land',
            status: 'ACTIVE',
            relationship: 'Ludwig\'s maternal line, supports his claim',
            claimStrength: 1,
            
            currentHead: {
                name: 'Count Fortissimo Shellheim',
                age: 80,
                summary: 'Ludwig\'s maternal grandfather. Ancient and cunning, he wants his grandson on the throne.'
            },
            
            members: [
                {
                    id: 'count_fortissimo',
                    name: 'Count Fortissimo Shellheim',
                    epithet: 'The Old Maestro',
                    born: 960,
                    died: null,
                    generation: 1,
                    icon: '🎼',
                    status: 'ACTIVE',
                    portrait: '👴',
                    summary: 'The patriarch of House Shellheim. Has been scheming to put Ludwig on the throne for 50 years.',
                    secrets: [
                        { intel: 40, text: 'He arranged for Lady Crescenda to meet Bowser. It was planned.' },
                        { intel: 70, text: 'He has contingency plans to assassinate Bowser Jr. if necessary.' }
                    ]
                },
                {
                    id: 'lady_harmonia',
                    name: 'Lady Harmonia von Shellheim',
                    epithet: 'Ludwig\'s Wife',
                    born: 970,
                    died: null,
                    generation: 2,
                    icon: '👸',
                    status: 'ACTIVE',
                    spouse: 'ludwig_von_koopa',
                    children: ['allegra_koopa', 'fortissimo_koopa'],
                    portrait: '🎹',
                    summary: 'Ludwig\'s wife. A political marriage, but she\'s proven herself a capable conspirator.',
                    secrets: [
                        { intel: 35, text: 'She doesn\'t love Ludwig, but she respects him and shares his ambitions.' },
                        { intel: 60, text: 'She\'s been corresponding with Princess Daisy about a potential alliance.' }
                    ]
                },
                {
                    id: 'baron_crescendo',
                    name: 'Baron Crescendo Shellheim',
                    epithet: 'The Diplomat',
                    born: 975,
                    died: null,
                    generation: 2,
                    icon: '🎻',
                    status: 'ACTIVE',
                    portrait: '🤵',
                    summary: 'Lady Harmonia\'s brother. Serves as the house\'s diplomatic envoy to foreign courts.',
                    secrets: [
                        { intel: 30, text: 'He has secretly visited the Beanbean Kingdom three times this year.' },
                        { intel: 55, text: 'He is negotiating a marriage alliance between Allegra and Prince Peasley.' }
                    ]
                }
            ],
            
            assets: {
                military: 3000,
                economic: 40,
                political: 55,
                territory: 'Sky Land, eastern provinces'
            }
        },
        {
            id: 'house_oceanus',
            name: 'House Oceanus',
            sigil: '🌊',
            motto: 'The Tide Rises',
            founded: 700,
            founder: 'Admiral Oceanus the Blue',
            seat: 'Isle of Mirrors, Water Land',
            status: 'COMPLICATED',
            relationship: 'Wendy\'s maternal line, plays all sides',
            claimStrength: 0,
            
            currentHead: {
                name: 'Countess Wanda Oceanus',
                age: 90,
                summary: 'Wendy\'s mother. Remarried to a Toad merchant. Schemes from her island palace.'
            },
            
            members: [
                {
                    id: 'countess_wanda_current',
                    name: 'Countess Wanda Oceanus',
                    epithet: 'The Siren',
                    born: 950,
                    died: null,
                    generation: 3,
                    icon: '🌊',
                    status: 'ACTIVE',
                    portrait: '💎',
                    summary: 'A dangerous woman who plays all sides of the civil war for profit.',
                    secrets: [
                        { intel: 25, text: 'She controls 40% of the maritime trade in the region.' },
                        { intel: 50, text: 'She sells weapons to both the Regency AND the Loyalists.' },
                        { intel: 75, text: 'Her Toad husband is a front. She married him for access to Mushroom Kingdom markets.' }
                    ]
                },
                {
                    id: 'lord_neptune_oceanus',
                    name: 'Lord Neptune Oceanus',
                    epithet: 'The Admiral',
                    born: 980,
                    died: null,
                    generation: 4,
                    icon: '⚓',
                    status: 'ACTIVE',
                    portrait: '🚢',
                    summary: 'Wanda\'s nephew and heir. Commands the Oceanus fleet and has ambitions of his own.',
                    secrets: [
                        { intel: 30, text: 'He secretly resents his aunt and wants to legitimize the house.' },
                        { intel: 55, text: 'He has been in contact with Wendy, offering to support her ambitions.' },
                        { intel: 80, text: 'He is building a secret fleet in the Blooper Depths.' }
                    ]
                },
                {
                    id: 'lady_marina_oceanus',
                    name: 'Lady Marina Oceanus',
                    epithet: 'The Pearl',
                    born: 1010,
                    died: null,
                    generation: 5,
                    icon: '🐚',
                    status: 'ACTIVE',
                    portrait: '👗',
                    summary: 'Neptune\'s daughter. Being groomed as a potential bride for Bowser Jr.',
                    secrets: [
                        { intel: 25, text: 'She has no interest in Jr. She finds him "creepy."' },
                        { intel: 50, text: 'She has been secretly corresponding with Larry Koopa.' }
                    ]
                }
            ],
            
            assets: {
                military: 'Navy: 50 ships',
                economic: 80,
                political: 30,
                territory: 'Isle of Mirrors + trade routes'
            }
        },
        {
            id: 'house_tuskara',
            name: 'House Tuskara',
            sigil: '❄️',
            motto: 'Madness is Genius',
            founded: 750,
            founder: 'Lord Frostfang Tuskara',
            seat: 'The Crystal Spire, Ice Land',
            status: 'DECLINING',
            relationship: 'Lemmy and Iggy\'s maternal line',
            claimStrength: 0,
            
            currentHead: {
                name: 'Lord Shiver Tuskara',
                age: 95,
                summary: 'Lady Valentina\'s brother. Eccentric to the point of dysfunction, maintains the family\'s circus network.'
            },
            
            members: [
                {
                    id: 'lord_shiver',
                    name: 'Lord Shiver Tuskara',
                    epithet: 'The Frozen Fool',
                    born: 945,
                    died: null,
                    generation: 4,
                    icon: '❄️',
                    status: 'ACTIVE',
                    portrait: '🎭',
                    summary: 'Lemmy and Iggy\'s uncle. Runs the family\'s "entertainment" ventures, which serve as Lemmy\'s spy network cover.',
                    secrets: [
                        { intel: 25, text: 'He knows the Traveling Circus is a spy network. He founded it.' },
                        { intel: 50, text: 'His "madness" is partially an act - useful for avoiding political obligations.' },
                        { intel: 70, text: 'He has ice magic rivaling any Magikoopa. Pretends to be powerless.' }
                    ]
                },
                {
                    id: 'lady_glacine',
                    name: 'Lady Glacine Tuskara',
                    epithet: 'The Cryomancer',
                    born: 980,
                    died: null,
                    generation: 5,
                    icon: '🧊',
                    status: 'ACTIVE',
                    portrait: '✨',
                    summary: 'Shiver\'s daughter, Lemmy and Iggy\'s cousin. The most powerful ice mage in the kingdom, secretly training Iggy.',
                    secrets: [
                        { intel: 35, text: 'She\'s been teaching Iggy to combine ice magic with technology.' },
                        { intel: 60, text: 'She\'s engaged to a Shroob defector. Nobody knows the Shroobs are involved.' }
                    ]
                }
            ],
            
            assets: {
                military: 1500,
                economic: 25,
                political: 15,
                territory: 'Ice Land, northern reaches',
                specialAssets: 'The Traveling Circus spy network'
            }
        },
        {
            id: 'house_darkfire',
            name: 'House Darkfire',
            sigil: '🔥',
            motto: 'From Ash, Empire',
            founded: 400,
            founder: 'Lord Cinder Darkfire, bastard of Koopa Magnus',
            seat: 'Ember Keep, Valley of Bowser',
            status: 'ACTIVE',
            relationship: 'Ancient bastard line with legitimate claim',
            claimStrength: 1,
            
            currentHead: {
                name: 'Lord Magmus Darkfire',
                age: 120,
                summary: 'Oldest living Koopa noble. His claim predates the Koopalings. Watches and waits.'
            },
            
            members: [
                {
                    id: 'lord_magmus',
                    name: 'Lord Magmus Darkfire',
                    epithet: 'The Ancient',
                    born: 920,
                    died: null,
                    generation: 12,
                    icon: '🔥',
                    status: 'ACTIVE',
                    portrait: '🌋',
                    summary: 'The Darkfires descend from a bastard son of Koopa Magnus. Magmus has outlived three kings and waits for the right moment.',
                    secrets: [
                        { intel: 30, text: 'He possesses original Obsidian Tablets proving his ancestor\'s legitimacy.' },
                        { intel: 55, text: 'He\'s been in magical stasis for decades at a time, only waking for succession crises.' },
                        { intel: 75, text: 'He knew Queen Clawdia personally. He was one of her first teachers.' },
                        { intel: 90, text: 'He has a blood sample from Bowser Jr. He\'s testing it.' }
                    ]
                },
                {
                    id: 'lady_scoria',
                    name: 'Lady Scoria Darkfire',
                    epithet: 'The Ember',
                    born: 1000,
                    died: null,
                    generation: 14,
                    icon: '🔥',
                    status: 'ACTIVE',
                    portrait: '💃',
                    summary: 'Magmus\'s great-great-granddaughter. Young, ambitious, and actively courting Ludwig.',
                    secrets: [
                        { intel: 25, text: 'She\'s been sending romantic letters to Ludwig. He hasn\'t responded... yet.' },
                        { intel: 50, text: 'She\'s also been in contact with Lavora in exile. Playing all sides.' },
                        { intel: 70, text: 'Her grandfather tasked her with getting close to the main line by any means.' }
                    ]
                }
            ],
            
            assets: {
                military: 5000,
                economic: 45,
                political: 40,
                territory: 'Valley of Bowser, eastern slopes',
                specialAssets: 'Original Obsidian Tablets (copies)'
            }
        },
        {
            id: 'house_stoneshell',
            name: 'House Stoneshell',
            sigil: '🪨',
            motto: 'Unbreaking, Unbending',
            founded: 600,
            founder: 'Lord Boulder Stoneshell',
            seat: 'Granite Hold, Desert Land',
            status: 'ACTIVE',
            relationship: 'Traditional military house, split loyalty',
            claimStrength: 0,
            
            currentHead: {
                name: 'Lord Basalt Stoneshell',
                age: 70,
                summary: 'A pragmatist who will support whoever wins. Currently hedging bets between Ludwig and Jr.'
            },
            
            members: [
                {
                    id: 'lord_basalt',
                    name: 'Lord Basalt Stoneshell',
                    epithet: 'The Granite Duke',
                    born: 970,
                    died: null,
                    generation: 8,
                    icon: '🪨',
                    status: 'ACTIVE',
                    portrait: '⛰️',
                    summary: 'Controls the most fertile parts of Desert Land. His grain feeds half the army.',
                    secrets: [
                        { intel: 20, text: 'He\'s been stockpiling food. Either preparing for war or planning to starve someone out.' },
                        { intel: 45, text: 'He has marriage proposals ready for BOTH Ludwig\'s daughter and Bowser Jr.' },
                        { intel: 65, text: 'He\'s been in contact with the Iron Legion about "mutual interests."' }
                    ]
                },
                {
                    id: 'lady_petra',
                    name: 'Lady Petra Stoneshell',
                    epithet: 'The Unbowed',
                    born: 1005,
                    died: null,
                    generation: 9,
                    icon: '💎',
                    status: 'ACTIVE',
                    portrait: '👸',
                    summary: 'Basalt\'s heir. A warrior who trained with the Hammer Bros and despises politics.',
                    secrets: [
                        { intel: 30, text: 'She\'s in love with Sergeant Shellshock - Roy\'s secret child\'s mother.' },
                        { intel: 55, text: 'She knows about Rock Koopa. She\'s been helping hide him.' },
                        { intel: 75, text: 'She wants to defect to the Peach Loyalists. Believes in their cause.' }
                    ]
                }
            ],
            
            assets: {
                military: 8000,
                economic: 60,
                political: 35,
                territory: 'Desert Land, agricultural regions',
                specialAssets: 'Controls 40% of kingdom\'s food supply'
            }
        },
        {
            id: 'house_venom',
            name: 'House Venom',
            sigil: '🐍',
            motto: 'Strike When Ready',
            founded: 500,
            founder: 'Lady Toxica Venom',
            seat: 'The Poison Palace, Pipe Land',
            status: 'ACTIVE (DANGEROUS)',
            relationship: 'Assassin house, serves highest bidder',
            claimStrength: 0,
            
            currentHead: {
                name: 'The Viper (identity unknown)',
                age: 'Unknown',
                summary: 'The head of House Venom is never publicly known. They control the kingdom\'s assassins.'
            },
            
            members: [
                {
                    id: 'the_viper',
                    name: 'The Viper',
                    epithet: 'The Unseen',
                    born: 'Unknown',
                    died: null,
                    generation: 'Unknown',
                    icon: '🐍',
                    status: 'ACTIVE',
                    portrait: '❓',
                    summary: 'No one knows who the Viper is. Some say it\'s a title passed down. Some say it\'s always been the same person.',
                    secrets: [
                        { intel: 50, text: 'The current Viper is female. Only three people know this.' },
                        { intel: 70, text: 'House Venom has standing contracts on every Koopaling. Payment pending.' },
                        { intel: 85, text: 'Kamek uses them. They performed at least one assassination on his orders.' },
                        { intel: 95, text: 'They were offered a contract on Peach 85 years ago. They REFUSED. Why?' }
                    ]
                },
                {
                    id: 'fang_venom',
                    name: 'Fang',
                    epithet: 'The Left Hand',
                    born: 990,
                    died: null,
                    generation: 'Unknown',
                    icon: '🗡️',
                    status: 'ACTIVE',
                    portrait: '🦇',
                    summary: 'The Viper\'s known enforcer. Handles contracts deemed too dangerous for normal assassins.',
                    secrets: [
                        { intel: 35, text: 'Fang has killed three Magikoopas. No one knows how.' },
                        { intel: 60, text: 'He\'s been surveilling Bowser Jr. for months. Unknown client.' }
                    ]
                }
            ],
            
            assets: {
                military: 'Assassins (number unknown)',
                economic: 'Unknown (contract fees)',
                political: 'Extreme (through fear)',
                territory: 'None officially, operate everywhere',
                specialAssets: 'The only assassination guild Kamek fears'
            }
        },
        {
            id: 'house_stormwind',
            name: 'House Stormwind',
            sigil: '⛈️',
            motto: 'Command the Skies',
            founded: 830,
            founder: 'Admiral Tempest Stormwind',
            seat: 'The Cloudfort, Sky Land',
            status: 'ACTIVE',
            relationship: 'Controls the Airship Fleet officer corps',
            claimStrength: 1,
            
            currentHead: {
                name: 'Admiral Gale Stormwind',
                age: 55,
                summary: 'Commands the Airship Armada. His loyalty will decide any civil war.'
            },
            
            members: [
                {
                    id: 'admiral_gale',
                    name: 'Admiral Gale Stormwind',
                    epithet: 'Master of the Fleet',
                    born: 985,
                    died: null,
                    generation: 5,
                    icon: '⛈️',
                    status: 'ACTIVE',
                    portrait: '🚀',
                    summary: 'Controls 47 airships. If civil war comes, he chooses the winner. Currently paralyzed by indecision.',
                    secrets: [
                        { intel: 25, text: 'He\'s been offered bribes by Ludwig, Roy, AND Kamek. Hasn\'t accepted any.' },
                        { intel: 50, text: 'His son served under Bowser directly. Died in a suspicious "accident."' },
                        { intel: 70, text: 'He suspects Kamek murdered his son. He wants proof before acting.' },
                        { intel: 85, text: 'He\'s been in secret contact with the Iron Legion about defection.' }
                    ]
                },
                {
                    id: 'captain_cyclone',
                    name: 'Captain Cyclone Stormwind',
                    epithet: 'The Ace',
                    born: 1015,
                    died: null,
                    generation: 6,
                    icon: '🌪️',
                    status: 'ACTIVE',
                    portrait: '✈️',
                    summary: 'Gale\'s daughter. The best airship pilot in the fleet. Fiercely loyal to Bowser personally.',
                    secrets: [
                        { intel: 30, text: 'She was having an affair with a Hammer Sister. It ended badly.' },
                        { intel: 55, text: 'She\'s been ordered to shadow the Vigilance. She\'s curious about the party.' },
                        { intel: 75, text: 'Bowser saved her life once. She owes him everything and will support Jr. because of it.' }
                    ]
                }
            ],
            
            assets: {
                military: '47 Airships, 12,000 crew',
                economic: 35,
                political: 70,
                territory: 'Sky Land, cloud fortresses',
                specialAssets: 'THE Airship Fleet'
            }
        },
        {
            id: 'house_magikoopa',
            name: 'The Magikoopa Conclave',
            sigil: '🔮',
            motto: 'Knowledge is Power Eternal',
            founded: 'Ancient (Pre-Kingdom)',
            founder: 'Unknown (predates Koopus Prime)',
            seat: 'The Arcane Spire, Dark Land',
            status: 'ACTIVE',
            relationship: 'Magical advisory body, Kamek\'s power base',
            claimStrength: 0,
            
            currentHead: {
                name: 'Kamek',
                age: '300+',
                summary: 'Kamek leads the Conclave absolutely. No Magikoopa opposes him openly.'
            },
            
            members: [
                {
                    id: 'kamella',
                    name: 'Kamella',
                    epithet: 'The Witch of the Stars',
                    born: 'Unknown',
                    died: null,
                    generation: 'Unknown',
                    icon: '⭐',
                    status: 'ACTIVE',
                    portrait: '🧙‍♀️',
                    summary: 'Kamek\'s closest ally and possibly his sister. Commands a fleet of ghost ships.',
                    secrets: [
                        { intel: 35, text: 'She\'s not Kamek\'s sister - she\'s his daughter. From a relationship centuries ago.' },
                        { intel: 60, text: 'She opposed the creation of Bowser Jr. Kamek overruled her.' },
                        { intel: 80, text: 'She\'s been secretly healing Bowser. Against Kamek\'s orders.' }
                    ]
                },
                {
                    id: 'kammy',
                    name: 'Kammy Koopa',
                    epithet: 'The Elder',
                    born: 700,
                    died: null,
                    generation: 'Ancient',
                    icon: '👵',
                    status: 'ACTIVE',
                    portrait: '🧓',
                    summary: 'Even older than Kamek. Officially retired. Actually runs the Conclave\'s day-to-day operations.',
                    secrets: [
                        { intel: 25, text: 'She trained Kamek. She could destroy him if she chose.' },
                        { intel: 50, text: 'She remembers Queen Clawdia\'s original form. She won\'t speak of it.' },
                        { intel: 75, text: 'She knows Peach\'s killer. She\'s been waiting for someone to ask the right question.' }
                    ]
                },
                {
                    id: 'kameron',
                    name: 'Kameron the Exile',
                    epithet: 'The Heretic',
                    born: 850,
                    died: null,
                    generation: 'Old',
                    icon: '⚡',
                    status: 'EXILED',
                    portrait: '🌙',
                    summary: 'Banished from the Conclave for "forbidden research." Now secretly training Morton Jr. in magic.',
                    secrets: [
                        { intel: 30, text: 'His "forbidden research" was into resurrection. He nearly succeeded.' },
                        { intel: 55, text: 'Morton Jr. sought him out. The prince wants to bring back his namesake.' },
                        { intel: 75, text: 'He knows how to cure Bowser. He refuses because he believes Bowser should see what he\'s seeing.' }
                    ]
                }
            ],
            
            assets: {
                military: '500 Magikoopas',
                economic: 'Immense (magical services)',
                political: 'Extreme (through Kamek)',
                territory: 'Arcane Spire + satellite towers',
                specialAssets: 'Monopoly on magical education'
            }
        },
        {
            id: 'house_blackshell',
            name: 'House Blackshell',
            sigil: '🖤',
            motto: 'From Shadows, We Rise',
            founded: 890,
            founder: 'Unknown (records expunged)',
            seat: 'The Dark Tower, World 8',
            status: 'ACTIVE',
            relationship: 'Intelligence and black operations',
            claimStrength: 0,
            
            currentHead: {
                name: 'The Shadowmaster',
                age: 'Unknown',
                summary: 'Runs the kingdom\'s spy network independent of Lemmy\'s circus. Competes with him.'
            },
            
            members: [
                {
                    id: 'shadowmaster',
                    name: 'The Shadowmaster',
                    epithet: 'The Invisible',
                    born: 'Unknown',
                    died: null,
                    generation: 'Unknown',
                    icon: '🖤',
                    status: 'ACTIVE',
                    portrait: '👤',
                    summary: 'Kamek\'s intelligence chief. No one has seen their face. They may not be a Koopa at all.',
                    secrets: [
                        { intel: 40, text: 'They\'ve planted agents in every Koopaling\'s personal staff.' },
                        { intel: 60, text: 'They answer only to Kamek. They helped cover up Morton Sr.\'s murder.' },
                        { intel: 80, text: 'They\'re actually from the Mushroom Kingdom. A defector from Toadstool intelligence.' },
                        { intel: 95, text: 'They know who killed Peach. They were THERE. They\'ve been silent for 85 years.' }
                    ]
                }
            ],
            
            assets: {
                military: 'Unknown (covert operatives)',
                economic: 'Unknown',
                political: 'Extreme (through blackmail)',
                territory: 'None official',
                specialAssets: 'Competes with Lemmy\'s spy network'
            }
        },
        {
            id: 'house_koopa_rogueport',
            name: 'The Rogueport Koopas',
            sigil: '💰',
            motto: 'Gold Opens All Doors',
            founded: 950,
            founder: 'Koopley the Wanderer',
            seat: 'The Crooked House, Rogueport',
            status: 'ACTIVE',
            relationship: 'Merchant house, may shelter Lavora\'s child',
            claimStrength: 0,
            
            currentHead: {
                name: 'Koopley the Elder',
                age: 85,
                summary: 'A respectable merchant who maintains secret ties to the royal family.'
            },
            
            members: [
                {
                    id: 'koopley_elder',
                    name: 'Koopley the Elder',
                    epithet: 'The Merchant Prince',
                    born: 955,
                    died: null,
                    generation: 1,
                    icon: '💰',
                    status: 'ACTIVE',
                    portrait: '🐢',
                    summary: 'Claims to be a simple merchant. Actually helps exiled royals disappear.',
                    secrets: [
                        { intel: 30, text: 'His family helped Princess Lavora escape Dark Land.' },
                        { intel: 55, text: 'He\'s been receiving payments from someone in Sarasaland for 20 years.' },
                        { intel: 75, text: 'There\'s a young Koopa in his household who doesn\'t know their heritage.' },
                        { intel: 90, text: 'The child is Lavora\'s. They\'re being raised as Koopley\'s grandchild.' }
                    ]
                },
                {
                    id: 'koops',
                    name: 'Koops',
                    epithet: 'The Timid',
                    born: 1020,
                    died: null,
                    generation: 3,
                    icon: '🐢',
                    status: 'ACTIVE',
                    portrait: '💚',
                    summary: 'Koopley\'s grandson. A nervous young Koopa with no idea of his family\'s secrets.',
                    secrets: [
                        { intel: 25, text: 'He has nightmares about fire and a screaming woman. Past life memories?' },
                        { intel: 50, text: 'He\'s unusually brave when pushed. Royal blood showing through?' },
                        { intel: 75, text: 'Kamek has sent agents to observe him. They\'ve been recalled without explanation.' }
                    ]
                }
            ],
            
            assets: {
                military: 'Private guards only',
                economic: 70,
                political: 20,
                territory: 'Rogueport trading houses',
                specialAssets: 'May harbor the Hidden Heir'
            }
        }
    ],
    
    // =========================================
    // MILITARY ORDERS & SPECIAL FORCES
    // =========================================
    militaryOrders: [
        {
            id: 'hammer_bros_legion',
            name: 'The Hammer Bros Legion',
            sigil: '🔨',
            motto: 'Strike True',
            founded: 500,
            founder: 'General Mallet Koopstrong',
            commander: 'General Sledge Koopstrong',
            strength: 5000,
            status: 'ACTIVE',
            loyalty: 'Roy Koopa / Koopstrong Clan',
            
            description: 'Elite heavy infantry. The backbone of Koopa military power.',
            
            ranks: [
                'Hammer Bro (Basic)',
                'Sledge Bro (Heavy)',
                'Fire Bro (Specialist)',
                'Boomerang Bro (Ranged)',
                'Sumo Bro (Siege)'
            ],
            
            secrets: [
                { intel: 30, text: 'They\'ve been stockpiling weapons. More than normal.' },
                { intel: 55, text: 'General Sledge is preparing them for civil war. They\'ll back Roy.' },
                { intel: 75, text: 'A faction within wants to back Ludwig instead. Internal tension is growing.' }
            ]
        },
        {
            id: 'dry_bones_guard',
            name: 'The Dry Bones Royal Guard',
            sigil: '💀',
            motto: 'Death Is Only The Beginning',
            founded: 'Unknown (Ancient)',
            founder: 'Unknown',
            commander: 'Kamek',
            strength: '2000 (Undead)',
            status: 'ACTIVE',
            loyalty: 'Kamek / Whoever controls the necromancy',
            
            description: 'Undead Koopa soldiers. Cannot be permanently killed. Guard the royal chambers.',
            
            secrets: [
                { intel: 25, text: 'They\'re bound by magic, not loyalty. Whoever controls the binding controls them.' },
                { intel: 50, text: 'Some retain memories of their living selves. They whisper at night.' },
                { intel: 75, text: 'The original Dry Bones were Koopa soldiers who died fighting the Void centuries ago.' }
            ]
        },
        {
            id: 'magikoopa_corps',
            name: 'The Magikoopa Corps',
            sigil: '🔮',
            motto: 'By Word and Wand',
            founded: 'Pre-Kingdom',
            founder: 'The First Mage',
            commander: 'Kamek',
            strength: 500,
            status: 'ACTIVE',
            loyalty: 'Kamek absolutely',
            
            description: 'Battle mages. Can polymorph enemies, enhance allies, and rain destruction.',
            
            secrets: [
                { intel: 35, text: 'They\'re oath-bound to Kamek personally, not the crown.' },
                { intel: 60, text: 'Roughly 50 are secretly loyal to Kammy and would follow her over Kamek.' },
                { intel: 85, text: 'Their greatest spell is forbidden: temporary resurrection. They used it once on Morton Sr.\'s killer.' }
            ]
        },
        {
            id: 'koopa_paratroopers',
            name: 'The Paratroopa Wings',
            sigil: '🦅',
            motto: 'Death From Above',
            founded: 700,
            founder: 'Wing Commander Soarus',
            commander: 'Wing Marshal Glide',
            strength: 8000,
            status: 'ACTIVE',
            loyalty: 'House Stormwind / Airship Fleet',
            
            description: 'Winged Koopa soldiers. Specialize in aerial assault and reconnaissance.',
            
            secrets: [
                { intel: 20, text: 'Their loyalty follows Admiral Gale\'s. If he defects, they defect.' },
                { intel: 45, text: 'They\'ve been mapping Iron Legion positions. Preparing for conflict.' },
                { intel: 70, text: 'A squadron was lost over the Oracle\'s manor. None returned.' }
            ]
        },
        {
            id: 'chain_chomp_handlers',
            name: 'The Chain Chomp Handler Corps',
            sigil: '⛓️',
            motto: 'Unleash The Beast',
            founded: 980,
            founder: 'Iggy Koopa (accidentally)',
            commander: 'Beastmaster Chomply',
            strength: 300,
            status: 'BARELY CONTROLLED',
            loyalty: 'Iggy Koopa (supposedly)',
            
            description: 'Specialized unit that handles Chain Chomps in battle. Extremely dangerous duty.',
            
            secrets: [
                { intel: 25, text: 'Chain Chomps aren\'t controlled - they\'re barely contained. 40% handler mortality rate.' },
                { intel: 50, text: 'Iggy has been trying to create a "master control" for years. All prototypes failed.' },
                { intel: 75, text: 'Chain Chomps seem to recognize and avoid harming Bowser Jr. No one knows why.' }
            ]
        }
    ],
    
    // =========================================
    // CURRENT POLITICAL SITUATION (UPDATED)
    // =========================================
    currentPolitics: {
        regency: {
            regent: 'Kamek',
            since: 'Day 4, 1040 BF',
            legitimacy: 'CONTESTED - Acting under emergency powers',
            opposition: 'Growing among Koopalings',
            
            recentEvents: [
                { date: 'Day 7', event: 'Bowser taken from Vigilance by Waluigi\'s agent "Wally"' },
                { date: 'Day 15', event: 'Bowser involved in haunted manor exploration with party' },
                { date: 'Day 18', event: 'Kamek consolidates control over Koopa Troop remnants from Valley of Bowser' },
                { date: 'Day 21', event: 'Iron Mandate passes - pressure on all supernatural factions increases' }
            ]
        },
        
        bowserStatus: {
            condition: 'ADVENTURING WITH PARTY',
            location: 'Raventree Manor / Vigilance (fluctuating)',
            lastSeen: 'Day 21, exploring manor with Markop and Green T',
            
            mentalState: 'Unstable - glimpsed something during dimensional breach that haunts him',
            physicalState: 'Fully functional, but periodically falls into fugue states',
            
            behavior: [
                'Fixated on "finding her" - assumed to mean Peach',
                'Mutters about "the waiting place" in his sleep',
                'Unusually cooperative with party members',
                'Shows moments of genuine kindness (out of character)',
                'Waluigi seems to know something about his condition'
            ],
            
            secrets: [
                { intel: 40, text: 'His "incapacitation" was temporary. He\'s been mobile since Day 7.' },
                { intel: 60, text: 'He went willingly with Wally. He needed to escape Kamek\'s "care."' },
                { intel: 75, text: 'He saw Peach during the dimensional breach. She spoke to him.' },
                { intel: 90, text: 'Peach told him something about her death. He\'s investigating it personally.' },
                { intel: 95, text: 'He believes the killer is still alive. He\'s using the party to help find them without revealing why.' }
            ]
        },
        
        kamekRegency: {
            officialPosition: 'Regent until King recovers',
            actualSituation: 'Doesn\'t know Bowser is mobile. Ruling as if he\'s still comatose.',
            
            actions: [
                'Consolidated military control in Valley of Bowser',
                'Suppressed news of Bowser\'s "escape" with Wally',
                'Preparing contingency to crown Bowser Jr. if Bowser "dies"',
                'Monitoring the Vigilance from a distance',
                'Sent agents to the manor but they haven\'t returned'
            ],
            
            vulnerabilities: [
                'Doesn\'t know Bowser is investigating Peach\'s death',
                'Koopalings growing restless under his rule',
                'Admiral Gale considering defection',
                'Roy has evidence of Morton Sr. murder'
            ]
        },
        
        koopalingPositions: [
            { name: 'Ludwig', stance: 'Openly preparing claim', action: 'Fortifying Sky Land, courting allies' },
            { name: 'Roy', stance: 'Building military power', action: 'Training Hammer Bros, hiding evidence' },
            { name: 'Lemmy', stance: 'Watching and spying', action: 'Knows more than anyone, protecting Larry' },
            { name: 'Iggy', stance: 'Neutral/Distracted', action: 'Working on "something big" in his lab' },
            { name: 'Wendy', stance: 'Diplomatic maneuvering', action: 'Secret talks with Daisy, Peasley' },
            { name: 'Morton Jr.', stance: 'Loyal to Bowser', action: 'Training with exiled Magikoopa, waiting' },
            { name: 'Larry', stance: 'Terrified', action: 'Avoiding Jr., hasn\'t opened mother\'s letter' },
            { name: 'Bowser Jr.', stance: 'Entitled heir', action: 'Being groomed by Kamek, showing "concerning" behaviors' }
        ]
    },
    
    // =========================================
    // TIMELINE OF HOUSE KOOPA (CURRENT ERA)
    // =========================================
    recentHistory: [
        { date: 'Day 4', event: 'X.O. betrays party, Bowser taken "captive" - actually a staged escape' },
        { date: 'Day 7', event: 'Wally extracts Bowser from Vigilance, Liberated Toads injured' },
        { date: 'Day 15', event: 'Bowser and Waluigi enter Raventree Manor, begin exploration' },
        { date: 'Day 16', event: 'Manor chaos - Bowser encounters the Oracle, rests in barricaded bedroom' },
        { date: 'Day 17', event: 'Greenhouse battle, Bowser fights alongside party against haunted books' },
        { date: 'Day 18', event: 'Kamek consolidates power in Valley of Bowser, unaware Bowser is mobile' },
        { date: 'Day 18', event: 'Bowser, Markop, and Green T navigate hedge maze, find abandoned manor version' },
        { date: 'Day 18', event: 'Evidence of "time war" involving Oracle discovered' },
        { date: 'Day 21', event: 'Iron Mandate passes, supernatural purges begin across Midlands' },
        { date: 'Day 21', event: 'Bowser last seen in manor, still searching for something related to "what he saw"' }
    ],
    
    // =========================================
    // PROPHECIES & OMENS
    // =========================================
    prophecies: [
        {
            id: 'the_pink_savior',
            name: 'The Prophecy of the Pink Savior',
            source: 'Koopa Magnus (recorded -320)',
            text: '"Spare the small ones with their spots, for one day a pink-clad one shall save my line when all seems lost."',
            interpretation: 'Believed to refer to Peach, but she\'s dead. Unless...',
            status: 'UNFULFILLED?'
        },
        {
            id: 'the_wish_child',
            name: 'The Wish Made Flesh',
            source: 'Queen Clawdia\'s Ghost (1025)',
            text: '"From desire and desperation, a child not born but made. He will save or damn you all."',
            interpretation: 'Clearly about Bowser Jr. The question is which outcome.',
            status: 'IN PROGRESS'
        },
        {
            id: 'the_three_fires',
            name: 'The Three Fires',
            source: 'The Primordial Flame (Ancient)',
            text: '"When three flames burn as one - the Eternal, the Cursed, and the Stolen - the shell that holds the world shall crack."',
            interpretation: 'Unknown. Possibly refers to three specific Koopas or events.',
            status: 'UNKNOWN'
        },
        {
            id: 'kameks_vision',
            name: 'Kamek\'s Private Prophecy',
            source: 'Kamek (received 920)',
            text: '"The boy you raise will love a princess. This love will doom or save the world. You cannot stop it."',
            interpretation: 'Kamek tried to prevent Bowser-Peach obsession. He failed.',
            status: 'FULFILLED (Doom or salvation pending)'
        }
    ]
},

    // =========================================
    // HOUSE SARASA - SARASALAND
    // =========================================
    houseSarasa: {
        name: 'House Sarasa',
        sigil: '🌻',
        colors: ['#FFA500', '#FFD700'],
        motto: 'Bloom Eternal',
        founded: 380,
        founder: 'Queen Marigold I',
        seat: 'Birabuto Palace, Sarasaland',
        status: 'ACTIVE',
        
        members: [
            {
                id: 'queen_orchid',
                name: 'Queen Orchid',
                epithet: 'The Dowager',
                born: 860,
                died: 1010,
                reign: '885-1010',
                generation: 7,
                icon: '👸',
                status: 'deceased',
                spouse: 'king_saffron',
                children: ['queen_dahlia_sister', 'king_daffodil'],
                portrait: '🌷',
                
                summary: 'Sister of Queen Dahlia (Peach\'s mother). Grandmother of Princess Daisy. Forged Sarasaland into a military power.',
                
                secrets: [
                    { intel: 30, text: 'Swore vengeance when her sister was "cursed to death."' },
                    { intel: 60, text: 'Began Sarasaland\'s militarization to eventually intervene in the Mushroom Kingdom.' }
                ]
            },
            {
                id: 'king_daffodil',
                name: 'King Daffodil',
                epithet: 'The Warrior-King',
                born: 900,
                died: 1035,
                reign: '1010-1035',
                generation: 8,
                icon: '👑',
                status: 'deceased',
                spouse: 'queen_sunflower',
                children: ['princess_daisy'],
                portrait: '⚔️',
                
                summary: 'Daisy\'s father. Built the Sarasaland Dragoons into the finest cavalry in the known world.',
                
                secrets: [
                    { intel: 40, text: 'Was kidnapped once by the alien Tatanga. Never forgave the Mushroom Kingdom for being slow to respond.' },
                    { intel: 70, text: 'His will mandates Daisy must claim the Mushroom Throne "when the time is right."' }
                ]
            },
            {
                id: 'princess_daisy',
                name: 'Princess Daisy',
                epithet: 'The Iron Flower',
                born: 920,
                died: null,
                reign: '1035-Present',
                generation: 9,
                icon: '👸',
                status: 'ACTIVE (Mobilizing)',
                spouse: null,
                children: null,
                parents: ['king_daffodil', 'queen_sunflower'],
                portrait: '🌼',
                
                summary: 'First cousin of Princess Peach. Has the strongest legal claim to the Mushroom Throne. Currently preparing for intervention.',
                
                secrets: [
                    { intel: 25, text: 'Possesses the "Lockets of Union" - magical artifacts that control the Mushroom Kingdom\'s defensive wards.' },
                    { intel: 50, text: 'Has been in secret communication with the Loyalists.' },
                    { intel: 70, text: 'Knows about Peach\'s child. Received a letter 3 days before the murder asking her to raise it.' },
                    { intel: 90, text: 'The child was sent to her. She knows exactly where the heir is.' }
                ],
                
                relationships: [
                    { person: 'Princess Peach', type: 'Beloved Cousin', notes: 'Swore to avenge her' },
                    { person: 'Luigi', type: 'Romantic Interest', notes: 'The one person who makes her laugh' },
                    { person: 'The Regency', type: 'Enemy', notes: 'Views them as usurpers and murderers' }
                ],
                
                military: {
                    forces: '5,000 Sarasaland Dragoons',
                    status: 'Mobilizing',
                    strategy: 'Total War if the Regency collapses or the child is found'
                }
            }
        ]
    },

    // =========================================
    // HOUSE BEANSTAR - BEANBEAN KINGDOM
    // =========================================
    houseBeanstar: {
        name: 'House Beanstar',
        sigil: '⭐',
        colors: ['#32CD32', '#FFD700'],
        motto: 'Laughter and Light',
        founded: 450,
        founder: 'Queen Guffaw the First',
        seat: 'Beanbean Castle',
        status: 'ACTIVE',
        
        members: [
            {
                id: 'queen_bean',
                name: 'Queen Bean',
                epithet: 'The Mirthful',
                born: 890,
                died: null,
                reign: '925-Present',
                generation: 8,
                icon: '👸',
                status: 'ACTIVE',
                spouse: 'king_garbanzo',
                children: ['prince_peasley'],
                portrait: '😄',
                
                summary: 'The jovial but cunning ruler of the Beanbean Kingdom. Plays the fool while scheming for expansion.',
                
                secrets: [
                    { intel: 35, text: 'Her "silly" persona masks a razor-sharp political mind.' },
                    { intel: 60, text: 'Has been funneling weapons to various Mushroom Kingdom factions to prolong the war.' }
                ]
            },
            {
                id: 'prince_peasley',
                name: 'Prince Peasley',
                epithet: 'The Dashing',
                born: 935,
                died: null,
                generation: 9,
                icon: '🫘',
                status: 'ACTIVE (Scheming)',
                spouse: null,
                children: null,
                parents: ['queen_bean', 'king_garbanzo'],
                portrait: '✨',
                
                summary: 'Claims a secret betrothal contract with Peach signed 3 days before her death. Uses charm to mask ruthless ambition.',
                
                secrets: [
                    { intel: 30, text: 'The betrothal contract is likely a forgery.' },
                    { intel: 55, text: 'Wants the Mushroom Kingdom as a vassal state.' },
                    { intel: 75, text: 'The forgery was created WITH Regency help to block Daisy\'s claim.' },
                    { intel: 85, text: 'Was actually in the castle the night of the murder. An obsidian shard (Beanbean glass) was found under Peach\'s bed.' }
                ],
                
                relationships: [
                    { person: 'Princess Peach', type: 'Claimed Fiancé', notes: 'Dubious' },
                    { person: 'Princess Daisy', type: 'Rival', notes: 'Competing claims' },
                    { person: 'The Regency', type: 'Temporary Ally', notes: 'United against Daisy' }
                ]
            }
        ]
    },

    // =========================================
    // THE RAKASHA CLANS - FOREVER FOREST
    // =========================================
    rakashaClans: {
        name: 'The Rakasha Confederacy',
        sigil: '🐾',
        colors: ['#2F4F4F', '#8B4513'],
        motto: 'The Wild Remembers',
        founded: 'Ancient (Pre-History)',
        structure: 'Clan Confederation',
        seat: 'The Heartwood, Forever Forest',
        status: 'ACTIVE (Allied with Loyalists)',
        
        clans: [
            {
                name: 'Clan Thornpaw',
                leader: 'Chief Thornpaw',
                status: 'Primary',
                specialty: 'Diplomacy, Forest Magic',
                notes: 'The ruling clan. Thornpaw was Peach\'s secret husband.'
            },
            {
                name: 'Clan Shadowfang',
                leader: 'Elder Nightclaw',
                status: 'Militant',
                specialty: 'Assassination, Guerrilla Warfare',
                notes: 'Advocates for full war against all human kingdoms.'
            },
            {
                name: 'Clan Mossheart',
                leader: 'Shaman Verdant',
                status: 'Spiritual',
                specialty: 'Healing, Prophecy',
                notes: 'Claims to have foreseen the "Return of the Rose."'
            }
        ],
        
        members: [
            {
                id: 'chief_thornpaw',
                name: 'Chief Thornpaw',
                epithet: 'The Wild Heart',
                born: 880,
                died: null,
                generation: null,
                icon: '🐾',
                status: 'ACTIVE',
                spouse: 'princess_peach',
                children: ['mystery_child'],
                portrait: '🌲',
                
                summary: 'Leader of the Rakasha. Secretly married to Princess Peach under the Old Laws. Father of the Hidden Heir.',
                
                secrets: [
                    { intel: 35, text: 'The "Wild Heart Affair" - he and Peach spent summers together for years.' },
                    { intel: 55, text: 'They were married in a ceremony witnessed by the Forest Spirits.' },
                    { intel: 70, text: 'He revealed the escape hatch in Peach\'s chambers at the gala - he helped design it.' },
                    { intel: 85, text: 'He knows where the child is but will not reveal it until the time is right.' },
                    { intel: 95, text: 'He has sworn to tear apart anyone who threatens his child with his bare claws.' }
                ],
                
                quote: '"She did not belong to your stone castles. She belonged to the wild. And she gave me something to keep safe."'
            }
        ]
    },

    // =========================================
    // OTHER NOTABLE BLOODLINES
    // =========================================
    otherHouses: [
        {
            id: 'house_kong',
            name: 'Kong Dynasty',
            sigil: '🦍',
            seat: 'Donkey Kong Island',
            status: 'NEUTRAL (Isolationist)',
            currentHead: 'Cranky Kong (Elder) / Donkey Kong (Warrior-Chief)',
            summary: 'The ape rulers of their island. Ancient enemies of the Kremlings. Stay out of Mushroom affairs.',
            secrets: [
                { intel: 40, text: 'Cranky Kong was the original "Donkey Kong" who fought Mario\'s grandfather.' },
                { intel: 70, text: 'The Kongs possess the Crystal Coconut - an artifact of immense power.' }
            ]
        },
        {
            id: 'house_kremling',
            name: 'Kremling Empire',
            sigil: '🐊',
            seat: 'Crocodile Isle (DESTROYED)',
            status: 'SCATTERED',
            currentHead: 'King K. Rool (In Hiding)',
            summary: 'Once-mighty empire destroyed by the Kongs. K. Rool seeks revenge and new territory.',
            secrets: [
                { intel: 35, text: 'K. Rool has approached both the Legion and Koopa Troop for alliance.' },
                { intel: 60, text: 'Possesses Shroob technology salvaged from a crashed ship.' }
            ]
        },
        {
            id: 'shroob_remnant',
            name: 'Shroob Remnant',
            sigil: '👽',
            seat: 'Unknown (Possibly Temporal)',
            status: 'UNKNOWN',
            currentHead: 'Unknown',
            summary: 'The alien invaders from another time. Their invasion was defeated, but survivors remain.',
            secrets: [
                { intel: 50, text: 'Shroob technology may have been used in Peach\'s assassination.' },
                { intel: 80, text: 'Time manipulation is involved in the royal bloodline somehow.' },
                { intel: 95, text: 'The Hidden Heir may have temporal powers from Shroob contamination of the bloodline.' }
            ]
        }
    ],

    // =========================================
    // MARRIAGE ALLIANCES & CONNECTIONS
    // =========================================
    marriages: [
        {
            id: 'toadstool_sarasa',
            houses: ['House Toadstool', 'House Sarasa'],
            union: 'King Toadstool IV + Queen Dahlia',
            date: 905,
            result: 'Princess Peach',
            status: 'Dissolved (Both Deceased)',
            significance: 'United the two greatest human kingdoms. Made Daisy heir-presumptive.'
        },
        {
            id: 'peach_thornpaw',
            houses: ['House Toadstool', 'Clan Thornpaw'],
            union: 'Princess Peach + Chief Thornpaw',
            date: 952,
            result: 'The Hidden Heir',
            status: 'SECRET (Unrecognized)',
            significance: 'If legitimized, creates a hybrid heir with claims to both realms.'
        },
        {
            id: 'proposed_peach_peasley',
            houses: ['House Toadstool', 'House Beanstar'],
            union: 'Princess Peach + Prince Peasley',
            date: 955,
            result: 'Never Consummated',
            status: 'DISPUTED (Possibly Forged)',
            significance: 'Peasley\'s main claim to involvement in succession.'
        },
        {
            id: 'proposed_peach_bowser',
            houses: ['House Toadstool', 'House Koopa'],
            union: 'Princess Peach + King Bowser',
            date: 'Ongoing (Never Formalized)',
            result: 'The Rose-Shell Accords',
            status: 'ENDED (By Death)',
            significance: 'Would have ended centuries of war. Destroyed with her death.'
        }
    ],

    // =========================================
    // SUCCESSION CLAIMS RANKING
    // =========================================
    snowdinBoneLine: {
    "name": "The Snowdin Bone-Line",
    "sigil": "💀",
    "colors": [
        "#3B82F6",
        "#E5E7EB"
    ],
    "motto": "A Seat for Every Soul",
    "altMotto": "Family Is a Door Left Open",
    "founded": "Unknown",
    "founder": "The first Snowdin household",
    "seat": "Snowdin Town",
"status": "ACTIVE / EXPANDING",
        "waluigiComment": "WALUIGI'S ARCHIVIST NOTE: This is not a tidy royal tree with one crown at the top. It is a Snowdin emergency support network wearing a family name. One brother watches the road, one brother feeds strangers, a trashbag repairs toys, and an enormous eye may be auditing the paperwork. WAH. If you want to understand why Snowdin has not collapsed under the weight of Underground secrets, start with who gets invited to dinner.",
        "cadetBranches": [
        {
            "id": "branch_gaster",
            "name": "The Gaster Branch",
            "sigil": "🧪",
            "status": "unresolved",
            "claimStrength": 0,
            "head": "Wing Gaster (missing)",
            "intel": 70,
            "notes": "Science, dimensional anomalies, and absent records.",
            "currentHead": {
                "name": "Wing Gaster (missing)",
                "summary": "Head of the household's science line, listed as missing since before the current registry began. The Gaster Branch is the family's unresolved line: not a claim to anything, but a claim on an unanswered question, kept open by household law.\n\n## The Unfinished Record\n\nThe branch's entire surviving record is a sealed folder in Grandpa Semi's keeping, marked with a wing-shaped sigil and sealed with Gaster's own wax. It opens only by household consensus — a rule he appears to have written himself, in the last hours before his records stop. Inside, the household believes, are the final orderly notes of the science line, and a witness list whose pages were removed deliberately, not lost: someone was safer unknown, and he unmade the knowing rather than the people.\n\n## The Work\n\nFamily records describe a scientist studying darkness as architecture — the load-bearing spaces between worlds where doors can be built or found. The work did not end with his vanishing. The geometry in the sealed folder matches damaged Star Road records elsewhere in the campaign's archive, and the same figures recur in the interference patterns around the Mount Ebott survey. Three archives, one signature. Whatever the branch's founder was building or became, it is still running, somewhere outside ordinary history.\n\n## Not a Succession Claim\n\nThe branch holds claim strength zero by household policy, and the household is emphatic about why. This line claims no seat, no title, and no authority over the Bone-Line. What it holds is a door no one has agreed to open, and a name the family refuses to strike from the tree. The standing consensus request to open the folder remains pending; the household is no longer certain it gets to keep waiting, but it will not open the folder any way but together.",
                "secrets": [
                    {
                        "intel": 25,
                        "text": "The sealed folder's rule — consensus only, never force — was set by Gaster's own wax sigil before he vanished; the folder is not locked, it is respected."
                    },
                    {
                        "intel": 65,
                        "text": "The sealed record's geometry matches both the damaged Star Road records and the Mount Ebott survey interference: one signature across three archives, still active."
                    }
                ]
            }
        },
        {
            "id": "branch_parallel",
            "name": "The Parallel Branch",
            "sigil": "🌑",
            "status": "observed",
            "claimStrength": 0,
            "head": "Sans of the Dark World",
            "intel": 55,
            "notes": "Cross-world cousin line; not a succession claim.",
            "currentHead": {
                "name": "Sans of the Dark World",
                "summary": "Head — and entire membership — of a line observed from a neighboring story. He runs a familiar storefront, tells familiar jokes, and carries a map of roads this world does not have. The household records him as a branch on purpose: observed, documented, and welcome, without ever being mistaken for the family that lives here.\n\n## A Line of One\n\nThe branch has one documented member, and the household considers that sufficient. He visits intermittently, arriving without announcement and leaving without goodbye, and each visit is logged with the care the household reserves for documents that are also warnings. His shadow falls the wrong way for the light. His punchlines land a half-beat off. He is, the chronicle maintains, the family's best evidence that the Bone-Line is not one household's story but a pattern that recurs across worlds — and that the pattern, wherever it runs, keeps its doors open.\n\n## The Storefront Ledger\n\nHis shop ledger is the branch's central document, filed under 'cross-world commerce, caution.' Most of it is ordinary. One line carries a date that has not happened in this world yet, written in his usual lazy hand — a memory, he insists, not a prophecy. He has also identified a merchant symbol moving through this world's contraband shipments as cross-world in origin, recognized, he said, 'from home — but not mine.' The household is tracking the symbol. The household is still processing 'not mine.'\n\n## Why It Is Not a Claim\n\nThe branch carries claim strength zero, and both Sanses appear to consider that essential. A counterpart is not a replacement, a cousin from a neighboring story is not a contender, and the whole long table is left between them at dinner so the conversation can be what it needs to be: two halves of a map, compared. The household records the branch as warning and comfort in equal measure — warning that paths and choices cannot be unwound, comfort that someone has walked past this world's current troubles and chosen, each time, to come back and set a place at the table.",
                "secrets": [
                    {
                        "intel": 25,
                        "text": "His storefront accepts payment in currencies that do not exist in this world; the household treats the exchange rate as a diagnostic, not a ledger."
                    },
                    {
                        "intel": 65,
                        "text": "One line of his ledger carries a date that has not happened in this world yet; he jokes about it, and no one laughs loudly. Sans has asked, twice, that the ledger be left alone."
                    }
                ]
            }
        }
    ],
    "members": [
        {
            "id": "sans",
            "name": "Sans",
            "epithet": "The Skeleton of Snowdin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "S",
            "summary": "Sans is a master of the non-sequitur and the casual observation. He greeted the expedition members not with alarms or weapons, but with a simple 'Hello there' and an assessment that they looked 'out of place.'\n\n## The Sentry of the Path\n\nWhile Sans claims to be just a 'civi,' he was the first to detect and approach the party when they began setting up survey equipment. He possesses a keen ability to read people, identifying that Mihawk and the agent were working together before they had even finished their conversation. He treats the agent's classified mission with a light mockery, noting that 'just data collection' sounds skeptical for a pair appearing at Snowdin's entrance with advanced tech.\n\n## Knowledge of the Underground\n\nSans has a deep understanding of Snowdin's history and its relationship with the Royal Family in the distant castle. He serves as an informal guide, explaining the enchanted sky and directing visitors to Bunny's inn. His voice is described as smooth like winter wind, and he carries himself with a lazy confidence that suggests he is far more dangerous—or at least more informed—than he lets on.\n\n## Assessment\n\nWaluigi finds Sans to be a suspicious character. Skeletons who are that relaxed while military survey machines beep in their faces are usually hiding something. He accepted a casserole from a stranger! Who does that?! Either he's the friendliest person in the core, or he's the one who's going to deliver the 'bad time' he keeps implying. Waluigi will keep a close eye on this pile of bones. WAH.\n\n## The Snowdin Bone-Line\n\nSans's guarded humor makes more sense in the context of his enormous household. Papyrus is his brother, but the family also includes practical cousins, young dependents, adopted guests, and unresolved figures from the old Underground science branch. Sans rarely calls himself responsible for anyone; nevertheless, his sentry routes, spare meals, and careful silences protect the entire Bone-Line.\n\n## The Weight of Shortcuts\n\nHe is known to appear at the end of a road before anyone saw him walk it, and to treat locked doors as scheduling disagreements. The registry lists these events as anomalies of timing rather than power, because Sans prefers it that way and because the alternative would require paperwork nobody in Snowdin is qualified to file. The household has learned that when Sans says he took a shortcut, the correct response is gratitude, not questions.\n\n## The Mount Ebott Season\n\nWhen Gamma Division's survey expedition arrived at the mountain, Sans handled it the way he handles everything: casually, completely, and without letting anyone see the work. He recognized the expedition's forbidden Iron Legion protocols before Snowdin's own guard understood what the beeping machines implied, and he said nothing about it publicly. Instead, he walked the survey team to Bunny's inn, answered every question they asked with a worse pun, and quietly redirected their instruments away from the routes that matter. The household's old maintenance map — the one showing the service tunnel to the sealed lower-Ebott relay — stayed where it has always been: with him. Visitors who asked too many directional questions found themselves enthusiastically toured in circles until they forgot what they were looking for.\n\n## Bad Time Doctrine\n\nSnowdin has a deterrent, and it wears a blue hood and tells bad jokes. Sans has cultivated, over years of careful implication, a reputation for delivering what he calls a bad time — a phrase he has never defined and no one has ever stayed to clarify. The doctrine works because it is unfalsifiable: the friendliest sentry in the Underground is also, somehow, the one person nobody wants to disappoint. He measures strangers in jokes, timing how long the laugh takes, watching which questions the stranger answers and which they redirect. By the end of a five-minute conversation he has usually counted the exits, the lies, and the exit lies. The household finds this comforting. Visitors are meant to find it funny.\n\n## Registry Standing\n\nThe archive lists Sans as generation two, active, and unclaimed by either cadet branch of the family. He has never corrected a single entry about himself, which Times New Roman finds either maddening or deeply suspicious, depending on the day. Both branches of the record agree on one point: when the Bone-Line is counted, the count begins with the sentry on the path — and no one has ever found a door Sans had not already counted first.\n\n## Open Questions in the Registry\n\nThree questions remain open in his file, and the household has agreed, unofficially, to let them stay that way. Where he learned the shortcut method, and whether it is a method at all. What he knows about the sealed Wing Gaster folder that he has never volunteered. And the matter of the warnings: relatives who received a casual, joke-shaped heads-down message from Sans within a day of trouble arriving. The chronicle has documented six such warnings. All six came true. Times New Roman has requested a footnote. Sans sent him a whoopee cushion instead, which the chronicle has archived, grimly, as a response.\n\n## The Hours Between Posts\n\nThe sentry routes are the only schedule Sans keeps, and he keeps them exactly, which is the detail visitors most consistently miss. He walks the same loops at the same hours — past the relay junction, past the lower-Ebott service access, past the stretch of road where the sky's enchantment wears thin — and the household reads his day by which loop he is on. Between posts he is at Bunny's inn, or napping at a station that is never, somehow, unwatched, or telling a joke so bad it functions as camouflage. The rhythm is the point: a sentry who is always where he is supposed to be has eyes everywhere he needs to be, and a town that knows where its sentry is can sleep. Papyrus calls it dedication. The registry calls it coverage. Sans calls it a walk. The three descriptions are, the household has noticed, exactly the same shape as the man himself: lazy on the surface, exact underneath, and impossible to tell apart from a joke until the joke has already saved you.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "Gamma Division’s Mount Ebott survey is not merely a visitor problem: Sans recognized the expedition’s forbidden Iron Legion protocols before the town guard understood the risk."
                },
                {
                    "intel": 65,
                    "text": "The Bone-Line has an old maintenance map showing a service tunnel that reaches a sealed lower-Ebott relay."
                }
            ],
            "achievements": ["First to recognize the Mount Ebott expedition's forbidden Iron Legion protocols before Snowdin's guard understood the risk", "Maintains the sentry routes, spare meals, and careful silences that quietly protect the entire Bone-Line", "Keeps the household's old maintenance map of a sealed lower-Ebott relay"],
            "controversies": ["Refuses to explain how he appears at the end of roads no one saw him walk", "Knows substantially more about the Gaster Branch than he has ever shared with the registry"],
            "relationships": [{"person": "Papyrus", "type": "Brother", "notes": "Protected, teased, and translated for in equal measure; the quiet center of Sans's logistics."}, {"person": "Wing Gaster", "type": "Unresolved Kin", "notes": "The subject of the sealed wing-sigil folder; Sans treats the name with a care he shows nothing else."}, {"person": "Sans of the Dark World", "type": "Parallel Counterpart", "notes": "The only person in any world who gets the jokes; their visits end in conversations Sans has with no one else."}]
        },
        {
            "id": "papyrus",
            "name": "Papyrus",
            "epithet": "The Great Brother of Snowdin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "P",
            "summary": "Sans's taller brother and Snowdin's irrepressible puzzle guard. He treats every visitor as a future friend, every hallway as a stage, and every pot of pasta as a diplomatic instrument. Papyrus is the family's visible heart: loud, earnest, and impossible to mistake for anyone else. He answers Sans's silences by setting another place at the table.\n\n## The Puzzle Guard of the Path\n\nPapyrus maintains Snowdin's puzzle corridor as both a defensive line and an audition stage for future friends. Trespassers are met with a rehearsed gauntlet, a formal warning speech, and — if they show the slightest effort — a genuine offer of redemption. He patrols the outer door alongside Dedan and insists that anyone who can solve a puzzle honestly can also sit at the family table. The registry records zero prisoners taken by Papyrus and a concerning number of former enemies fed.\n\n## Spaghetti Friday\n\nThe weekly dinner began as a household meal and became an institution. Refugees, displaced Toads, and nervous deserters from several campaigns have learned that Friday in Snowdin means a seat, a bowl, and no questions about where you slept last night. Papyrus considers this simple hospitality. The household's relief workers consider it the most stable neutral ground in the Underground, and have quietly built delivery routes around his dinner schedule. His recipe ledger is, to him, merely a notebook of who likes their noodles soft; others read it differently.\n\n## The Brother's Keeper\n\nEverything Papyrus does at volume is, at its quiet center, about Sans. He translates his brother's silences for strangers, defends his naps as strategy, and sets a place for him at every meal whether or not Sans appears. He does the same for every absent relative: in Papyrus's accounting, anyone missing from the table is simply late, and the household has learned not to argue with his arithmetic. He keeps every invitation ever sent to the house, filed by Grandpa Semi's system, because someone might still say yes.\n\n## Before the Household\n\nThe chronicle's softest pages are about the years before the household grew: two young skeletons in a small house, and an older brother who built puzzle boxes to make his little brother laugh. Papyrus's first trap — a rope, a bucket, and an optimistic sign — caught nothing but Sans's attention, which was always the point. Grandpa Semi taught him that a good puzzle is a question that respects the person answering it, and Papyrus has never forgotten the lesson, even as the puzzles grew to corridor scale. The Great Papyrus persona arrived later, assembled deliberately from loudness and courage, because a small town under an enchanted sky needed someone who announced that everything would be fine and then did the work to make it true.\n\n## The Mount Ebott Season\n\nWhen the Gamma Division survey team set up at the mountain's base, Papyrus doubled his patrol schedule, reorganized the puzzle corridor for what he called 'professional visitors,' and then — because he is Papyrus — invited the survey team to dinner anyway. Dedan objected. Dedan lost. The expedition's field notes record a hostile-environment contact that became, against all protocol, a pasta dinner, and an agent who could not explain how the conversation had migrated from terrain surveys to noodle geometry. What the notes do not record is that Papyrus, between courses, asked each visitor exactly one serious question — 'are you here to help the people under the mountain, or to measure them?' — and remembered every answer. The household asked him later what he thought. He said the food was a success. He has not forgotten a single answer.\n\n## The Recipe Ledger\n\nThe ledger sits on the kitchen shelf, unsecured, because Papyrus considers locks an insult to guests. It contains recipes, guest preferences, sauce experiments, and — in a hand that is not his — a series of delivery marks the wartime relief network once used for ciphered routing. Papyrus insists the marks are noodle notes: portion sizes, he says, for very large gatherings. The relief workers who still recognize the old cipher have agreed, formally and privately, not to disabuse him. Whether his ignorance is genuine or the finest performance in the household is the one question even Lazybones declines to answer. What is not in dispute is the result: Spaghetti Friday feeds people from several wars, and the ledger's innocent hospitality has become the most valuable neutral document in Snowdin.\n\n## Open Questions in the Registry\n\nThe chronicle keeps a short list of Papyrus-related uncertainties, most of them affectionate. How he solved his own first puzzle, which Grandpa Semi had designed to be unsolvable, and why the old skeleton laughed for an hour afterward. Whether he knows how politically valuable his dinner table is, or whether knowing would spoil it. And the matter of the extra invitations: each season, Papyrus addresses and sends a small number of invitations to relatives no one else has heard of, in handwriting the registry cannot match. Some are returned, opened, with nothing inside but a crumb. He files every reply. He has never once seemed surprised.\n\n## A Typical Watch\n\nA patrol with Papyrus follows a structure he has refined over years and narrates, in full, to anyone walking beside him. First, the puzzles: each one inspected, reset, and complimented, because he maintains a puzzle left unsolved is a question left unasked, and Snowdin should ask its questions out loud. Then the perimeter, walked at his enormous stride, with a running commentary on snow quality, sight lines, and which drifts would make excellent fortifications if anyone ever needed a fort made of snow, which he hopes will be no one, but the option should exist. Visitors are challenged formally at every checkpoint and forgiven immediately. The patrol ends where it began, at the outer door, where he checks the latch twice and announces, to the door and to anyone present, that the household is safe for another rotation. Dedan, who walks the same perimeter with half the words and twice the suspicion, has said once, on the record, that the two patrols cover the same ground and none of the same threats, and that this is, reluctantly, optimal. Papyrus framed the quote. He has read it aloud to three visitors since, as if it were about pasta. It was not about pasta. Papyrus's readings of the record are, like Papyrus's invitations, final.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "Spaghetti Friday has become neutral ground for refugees, Toad loyalists, and even nervous Koopa deserters; Papyrus does not know how politically valuable his hospitality is."
                },
                {
                    "intel": 65,
                    "text": "A recipe ledger in Papyrus’s kitchen contains a ciphered delivery mark used by Snowdin’s wartime relief network."
                }
            ],
            "achievements": ["Holds Snowdin's puzzle corridor with zero recorded prisoners taken and many recorded enemies fed", "Built Spaghetti Friday into neutral ground for refugees, loyalists, and deserters from several campaigns", "Accepts every adoption claim presented to the household, with a 100% success rate to date"],
            "controversies": ["His recipe ledger contains markings he insists are noodle notes; the relief network disagrees", "Accepted a star's adoption claim on the strength of volume alone"],
            "relationships": [{"person": "Sans", "type": "Brother", "notes": "Sets a place for him at every meal of his life; considers Sans's laziness a brilliant strategy."}, {"person": "Dedan", "type": "Patrol Partner", "notes": "The outer door's two halves: Dedan's suspicion and Papyrus's invitation."}, {"person": "S' a Real Star", "type": "Adopted Kin", "notes": "Accepted the adoption claim instantly; considers it his finest diplomatic hour."}]
        },
        {
            "id": "grandpa_semi",
            "name": "Grandpa Semi",
            "epithet": "Keeper of the Half-Told Tale",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 1,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "G",
            "summary": "A bent, soft-spoken elder who remembers family history in fragments and insists the missing pieces are sometimes the important part. Grandpa Semi keeps weathered registry cards, old recipes, and half-finished jokes in a cedar chest. He taught Sans to listen before speaking and Papyrus to save every invitation.\n\n## The Cedar Chest\n\nGrandpa Semi's archive is a cedar chest of weathered registry cards, recipes in shorthand, and the setups to jokes whose punchlines he has not finished telling. No card is written in a hand anyone else can fully parse, which he considers a security feature. When a family fact is disputed, the household goes to the chest; when the chest is silent, the dispute stands. He is the only archivist Times New Roman is not permitted to critique.\n\n## The Philosophy of Missing Pieces\n\nHe insists the gaps in a record are sometimes the most honest part of it. Entries that end mid-sentence are not accidents in his keeping: they mark where the family agreed to stop speaking. He refuses to classify Prunsel as a monster, keeps a sealed folder marked with a wing-shaped sigil that he will open only by household consensus, and teaches that an empty chair is still information worth filing.\n\n## What He Taught\n\nSans learned the strategy of long pauses from Grandpa Semi's silences. Papyrus learned to save every invitation from Grandpa Semi's refusal to throw anything away. The wider household learned its oldest rule from him as well: you do not have to understand someone to leave them a seat.\n\n## The First Household\n\nBefore the Bone-Line was a bone-line, it was one house in a hard winter with its door stuck half-open from the cold, and the first family who decided that was fine. Grandpa Semi remembers the stories the way he remembers everything: in pieces, with the load-bearing pieces unmarked. What comes through in every telling is the founding act — a stranger fed, then another, then the decision to build a longer table instead of a higher fence. The household mottoes, 'A Seat for Every Soul' and 'Family Is a Door Left Open,' are not decorations in his telling; they are operating instructions, written after the winter, by someone who had counted the cost of a closed door. He will not say who wrote them. The chest has a card on the subject. It is blank on one side, which he says is the important side.\n\n## The Custody Rules\n\nNothing in Grandpa Semi's keeping is locked, and everything in it is governed. The cedar chest opens for any relative who asks. The sealed folder with the wing-shaped sigil opens only by household consensus, a rule he has invoked three times and that has held each time. Documents marked mid-sentence are not to be completed by anyone but the person who stopped writing them. Names disputed by more than two relatives are written with all versions until the relatives agree, which the record shows has taken as long as forty years. These rules look like sentimentality to outsiders. The household understands them as engineering: an archive built to survive secrets, grief, and relatives with strong opinions, without ever breaking trust. He maintains that a record people are afraid to open is already lost, and a record people can open carelessly was never kept.\n\n## The Mount Ebott Season\n\nWhen word of the Gamma Division expedition reached Snowdin, the household convened, and the convening happened, as it always does, around Grandpa Semi's table. He listened to the survey team's published objectives, asked to see one document — the expedition's signaling protocol — and went quiet in the particular way the family has learned to read. He recognized the forbidden Iron Legion protocols embedded in the survey's methods from a war-era document he has never shown anyone, and he told exactly one person what he had found: Sans. Why Sans, he was asked later. Because Sans would understand the joke, he said, and then declined to explain the joke. The household has since learned that the warning Sans delivered to the expedition — casual, pun-shaped, apparently unserious — carried Grandpa Semi's assessment in it, translated into a language only his grandson speaks fluently.\n\n## Open Questions in the Registry\n\nTwo questions sit at the center of his file like stones. The sealed folder contains one page whose wax sigil he did not set — it predates his custody, and he has never identified the hand that sealed it, though the chronicle notes he has looked, and looked, and looked. The other is his own record: the earliest cards in the chest, in a different hand, refer to him by a name he has never corrected or claimed, and he has asked, gently, that the question remain open. The household, which owes him everything it knows about leaving questions open, has honored the request. Times New Roman's appendix on the subject is his longest, his most careful, and the only one he has shown to Grandpa Semi first.\n\n## A Day in the Keeping\n\nA day with Grandpa Semi is mostly silence, and the silence is mostly work. He sorts the cedar chest in the morning light, moving cards between stacks by a system no one else can see, pausing over some for a long time, setting others aside as if they had asked a question he is not ready to answer. He takes his meals at the long table, in the seat nearest the door where the first household sat, and he leaves the near place set, the way it has always been set, for whatever watches. Relatives bring him disputes; he listens to the whole of them, often across several sittings, and then produces a card, or does not. He tells jokes halfway, on purpose — the setup, then a pause that can last days, then the punchline, delivered to a different person in a different room, because he maintains a joke, like a record, belongs to whoever needs it, whenever they need it. He is not, the household has learned, slow. He is careful, and the difference is the whole of his teaching: that the things worth keeping — people, promises, the truth about a winter, the name of a door — are worth taking the time to hold correctly. The chest grows. The cards wait. The near place stays set. The household, which he has kept, keeps him, and considers the exchange the fair one he taught it to expect.",
            "secrets": [{"intel": 25, "text": "The cedar chest's top card, in Grandpa Semi's hand, is a standing order: if the household scatters, the chest goes with the youngest."}, {"intel": 65, "text": "One page in the sealed Wing Gaster folder is sealed by a wax sigil Grandpa Semi did not set; it predates his custody, and he has never identified the hand that closed it."}],
            "achievements": ["Maintains the cedar chest, the household's oldest and least readable archive", "Preserved the sealed Wing Gaster folder intact through multiple crises", "Coined the household rule: you do not have to understand someone to leave them a seat"],
            "controversies": ["Refuses to classify Prunsel, a decision the registry has never forgiven", "Keeps entries deliberately unfinished, which archivists call sabotage and the family calls wisdom"],
            "relationships": [{"person": "Sans", "type": "Grandson (Household)", "notes": "Taught him the strategy of listening, pausing, and saying less."}, {"person": "Papyrus", "type": "Grandson (Household)", "notes": "Taught him to save every invitation because someone might still say yes."}, {"person": "Wing Gaster", "type": "Sealed Record", "notes": "Custodian of the wing-sigil folder; opens it only by household consensus."}]
        },
        {
            "id": "lazybones",
            "name": "Lazybones",
            "epithet": "The Reclining Cousin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "L",
            "summary": "A couch-bound cousin whose apparent idleness conceals a startling awareness of every family movement. From a nest of blankets beside the heater, Lazybones coordinates emergency snacks, spare scarves, and quiet cover stories for relatives who need a day without questions. Their advice is usually delivered with eyes closed and unnerving accuracy.\n\n## The Watcher by the Heater\n\nLazybones's station is a nest of blankets beside the household heater, and from it they appear to be asleep at all hours. They are not. Every footstep, argument, and late-night departure passes through the warm hallway, and Lazybones files all of it without opening an eye. Relatives who believe they are unobserved in that house are mistaken, and the ones who know it behave accordingly.\n\n## Quiet Logistics\n\nTheir real work is invisible by design: emergency snacks positioned where crises usually happen, spare scarves for relatives who left in a hurry, and quiet cover stories for anyone who needs a day without questions. Lazybones never asks where you went. They already know, and they have already told whoever needed to be told.\n\n## Unnerving Accuracy\n\nAdvice from the blanket nest is delivered in a murmur, eyes closed, and lands with an accuracy the household has stopped finding funny. The registry notes several instances where Lazybones answered a question before it was fully asked. No method is recorded. Asked directly, Lazybones recommends more naps.\n\n## The Nest's True Location\n\nThe blanket nest is not, as visitors assume, wherever is warmest. It sits directly above the household's message drop — the loose floor panel where the relief network leaves notes for family couriers — a placement the registry describes as 'convenient' and Lazybones describes as nothing at all, because Lazybones does not describe things. Every coincidence about their knowledge begins there: footsteps, whispers, the small scrape of a note being taken in the dark. They have never been documented reading a single note. They have also never been documented missing one. When the household renovated and proposed moving the heater, Lazybones — who had not stood up in three days — opened one eye and said no, and the renovation plans were revised.\n\n## Before the Blankets\n\nThe oldest relatives remember a different Lazybones: the fastest courier the household ever had, a streak of scarf and rattling feet who ran messages between Snowdin's safe houses during the war years and was never once late, never once followed, and never once explained how. The stillness came afterward. The household does not discuss what changed the courier into the watcher, except in the careful shorthand families use: 'after the eastern route,' or simply 'after.' What is documented is the result. The person who once outran everyone learned, at some cost, that more can be seen from one well-chosen spot than from any route, and that a household's deepest need is not speed but someone paying attention. The snacks appeared first. The cover stories came later. The naps, everyone agrees, are professional.\n\n## The Mount Ebott Season\n\nThe survey expedition's arrival registered at the blanket nest before it registered anywhere else in Snowdin — Lazybones knew the team's schedule, size, and equipment list two days before the town guard posted it, and when asked how, murmured that strangers pack loudly. Throughout the season, their quiet work intensified: cover stories for relatives whose routines took them near the survey routes, snack caches repositioned toward the mountain road, and — on one documented occasion — a complete and accurate alibi provided for a relative who had not yet returned from wherever they had been. The relative arrived hours later, found a scarf waiting at the door with a note in Lazybones's minimal hand — 'cold out' — and has since refused, politely but permanently, to discuss the evening. The registry has begun listing Lazybones under 'observation assets,' a classification Lazybones has not objected to, presumably because objecting would require sitting up.\n\n## Open Questions in the Registry\n\nThe chronicle's Lazybones file is thin by design and thick with implication. The registry suspects them of authoring at least three of the cover stories that have moved at-risk relatives off hostile watchlists across the wider campaign — stories too well-crafted, too perfectly placed, to come from the relatives who told them. No attribution has ever been proven. No one has ever seen Lazybones write anything longer than two words. The eastern route remains undiscussed. And once a year, on a date the household does not announce, a meal is set beside the blanket nest, untouched until morning, and Lazybones is found asleep elsewhere for the only time all year. The chronicle records the date. The chronicle does not ask why.\n\n## A Day at the Nest\n\nA day at the blanket nest looks, to the untrained eye, like nothing at all, which is the nest's primary design feature. Morning: the tea Lazybones does not remember asking for arrives, courtesy of a relative who was told to bring it by a relative who was told to ask by Lazybones — three sentences total, none of them longer than four words. Midday: a cousin passes through the warm hallway with a problem they have not said aloud, and receives, without anyone opening an eye, a murmur so precisely aimed that they stop, sit down on the floor, and have the conversation they came not to have. Evening: the message drop clicks, softly, under the blankets, and whatever was left there is somehow already handled by breakfast. The snacks reposition themselves. The cover stories go out in the hands of people who will never know who wrote them. Twice a day someone asks Lazybones for advice, and twice a day the answer arrives with eyes closed, in a voice that sounds like a nap, and lands, every time, exactly where it was needed. The household has stopped asking how. The household has started, quietly, organizing around the nest the way a town organizes around a watchtower: with gratitude, with trust, and with the unspoken understanding that the person who sees everything has chosen, for reasons of their own, to do the seeing horizontal. This is not idleness. This is the most efficient posture ever adopted in the history of the family. Lazybones, told this once, opened one eye, said 'mhm,' and went back to work.",
            "secrets": [{"intel": 25, "text": "The blanket nest sits directly above the household's message drop; every coincidence about Lazybones's knowledge starts at that floor panel."}, {"intel": 65, "text": "Registry observers suspect Lazybones authors the quiet cover stories that have moved at least three at-risk relatives off hostile watchlists across the wider campaign."}],
            "achievements": ["Coordinates the household's invisible logistics: snacks, scarves, and cover stories", "Has answered household questions before they were fully asked, on multiple documented occasions", "Maintains perfect awareness of every family movement from a horizontal position"],
            "controversies": ["Refuses to explain any method behind their accuracy", "The registry suspects them of knowing things no sentry report contains; they decline comment, with eyes closed"],
            "relationships": [{"person": "Speen Kind of Down Lately", "type": "Cousin", "notes": "Keeps tea ready for him at all hours; the quiet corner is their joint project."}, {"person": "Sans", "type": "Cousin", "notes": "The household's two best nappers; mutual respect, minimal words."}, {"person": "Baby Bones", "type": "Household Kin", "notes": "The only person Baby Bones cannot wake, which Baby Bones considers a challenge."}]
        },
        {
            "id": "baby_bones",
            "name": "Baby Bones",
            "epithet": "The Smallest Rattle",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "B",
            "summary": "The youngest bone in the house, a fearless little skeleton whose rattling steps can interrupt even the most solemn family meeting. Baby Bones treats every adult as a potential carrier and every puzzle piece as a toy. The household treats them as a promise to build something gentler than the world it inherited.\n\n## The Smallest Rattle\n\nBaby Bones moves through the house like a weather event: fast, rattling, and impossible to schedule around. Solemn meetings, secret conferences, and Sans's naps have all been successfully interrupted by two small feet and a demand to be carried. Every adult in the household has been conscripted as transport at least once; refusal is technically possible but has never been observed.\n\n## The Family's Naming Authority\n\nWhatever Baby Bones calls a thing, the thing becomes. Pet Rock received its name, dinner plate, and evacuation status through one declarative rattle. Quantity became a family of uncles because Baby Bones pointed at the rolling chassis and insisted. The registry attempted to record these events as informal and was overruled by the household at large.\n\n## A Promise in Small Steps\n\nThe adults of the Bone-Line do not say it often, but the house is organized around one quiet conviction: Baby Bones should inherit something gentler than what they inherited. Evacuation drills are paced to short legs. Arguments are moved out of earshot. The cedar chest holds a new card, in Grandpa Semi's unreadable hand, that everyone agrees is about the future.\n\n## Arrival Day\n\nEvery relative tells the arrival story differently, and every version ends the same way: and then they were here, and then they were family. One account has a basket at the door during a snowstorm. Another has a small figure simply present at breakfast one morning, rattling a spoon, with no adult able to say who had let them in. A third, favored by Papyrus, holds that Baby Bones walked in under their own power, surveyed the household, and chose it. Grandpa Semi's card on the matter is maddening: 'arrived, certain.' The household has stopped attempting to reconcile the versions. What the record does agree on is the household's response — unanimous, immediate, and completely uninterested in paperwork — and the fact that within a week, the house had quietly reorganized itself around a new center of gravity approximately two feet tall.\n\n## The Rattle\n\nThe famous rattle is not, as visitors assume, Baby Bones rattling. It is a salvaged music mechanism — a broken toy from before the war years — rebuilt by Garbage Brother with a new striker and a sound like small determined bells. He also, quietly, built a hidden compartment into it, 'for later,' a phrase he has declined to expand on. Baby Bones carries the rattle everywhere, shakes it at strangers to render verdicts, and has used it to interrupt at least one conversation the adults agree, in hindsight, needed interrupting. When the mechanism once jammed, the household experienced a silence so alarming that three relatives arrived at the workbench simultaneously. Garbage Brother fixed it in four minutes. Those were, the chronicle records, tense minutes.\n\n## The Mount Ebott Season\n\nThe survey season produced the incident the household now refers to simply as 'the door.' During a routine evacuation drill — paced, as always, to short legs — Baby Bones broke formation, rattled across the hallway, and stood shaking the rattle furiously at a stretch of wall the household had always treated as plain wall. It was not plain wall. Behind it lies the service access to the sealed lower-Ebott relay, a door Sans keeps unmentioned and the household keeps unopened. No adult had pointed it out. No adult had mentioned it within Baby Bones's hearing. Baby Bones rattled at it until an adult quietly changed the drill's route, and the route has stayed changed. Sans, told afterward, was quiet for a long time and then said, 'good ears,' in a tone the chronicle describes, unusually, as proud and unsettled in equal measure.\n\n## Open Questions in the Registry\n\nThe file's largest open question is parentage, and the household's position on it is equally large: too many relatives claim them, and the registry's attempts to narrow the field have been overruled every time, until the entry now reads, simply, 'claimed by the household.' The future card in Grandpa Semi's chest has never been shown, and no one has asked to see it; the household appears to have agreed that some promises are stronger unread. And the chronicle keeps, filed carefully between the funny entries and the serious ones, a running list of Baby Bones's rulings — names bestowed, verdicts shaken out, objects promoted to personhood. The list has never once been reversed on appeal. The registry has stopped processing appeals.\n\n## A Day at Full Rattle\n\nA day with Baby Bones is a day at full rattle, and the household schedules accordingly. Morning begins with a demand for transport, granted by whichever adult is nearest, and a tour of the house at shoulder height, during which every object is inspected, several are confiscated, and one — today, a spoon — is promoted to permanent inventory. Mid-morning is patrol, riding Dedan or Papyrus or a rotating skull of Quantity, the rattle shaken at every checkpoint as inspection and verdict. Lunch is attended seriously, in the high seat, with a plate and a napkin and the ceremonial first bite that Papyrus narrates like a state occasion. The afternoon belongs to interruptions: the crisis meeting dissolved by a demand to be carried, the secret conference paused for a peekaboo ruling, the archive — Grandpa Semi's archive, which no one interrupts — interrupted, gently, with a card handed over for rattling inspection and handed back, approved. Evening is the rattle's slow diminuendo, the music mechanism played soft, the small figure passed from lap to lap around the long table until the rattling stops and the breathing does not. The household files the day under 'weather, favorable.' The household would not trade a single interrupted meeting. The household has, in fact, come to suspect that the meetings that got interrupted were the ones that needed interrupting, and that the smallest rattle in the house is somehow the family's most reliable early-warning system for its own nonsense. Baby Bones, asleep in the nearest lap, offers no comment. The rattle ticks once, softly, like a clock keeping a time only it knows.",
            "secrets": [{"intel": 25, "text": "Baby Bones's rattle is a salvaged music mechanism rebuilt by Garbage Brother, who installed a hidden compartment in it, 'for later.'"}, {"intel": 65, "text": "During the last evacuation drill, Baby Bones walked straight to the hidden lower-Ebott service door no adult had ever mentioned and rattled at it until the route was changed."}],
            "achievements": ["Named Pet Rock into full family membership in a single declarative rattle", "Conscripted Quantity as a family of uncles, binding in perpetuity", "Has successfully interrupted every category of household meeting on record"],
            "controversies": ["Genealogical placement unresolvable: too many relatives claim them at once", "Evacuation drills have been permanently re-paced to short legs, over the objections of no one"],
            "relationships": [{"person": "Papyrus", "type": "Guardian", "notes": "Prepares tiny plates, declares every demand reasonable, answers all questions with yes."}, {"person": "Garbage Brother", "type": "Household Kin", "notes": "Source of the famous rattle; consulted on all salvage of a rattling nature."}, {"person": "Pretty Soon", "type": "Household Kin", "notes": "The person who answers, convincingly, when Baby Bones asks if absent relatives are coming home."}]
        },
        {
            "id": "dirty_brother",
            "name": "Dirty Brother",
            "epithet": "The Ash-Stained Brother",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "D",
            "summary": "A soot-covered relation who repairs boiler shafts, chimneys, and old puzzle mechanisms. The green sparks around Dirty Brother are residue from ancient heating runes, not a curse—though he enjoys letting visitors think otherwise. His practical work keeps Snowdin warm when the magic in its infrastructure misbehaves.\n\n## Keeper of the Warm Dark\n\nDirty Brother works where Snowdin's warmth actually lives: boiler shafts, chimneys, and the old puzzle mechanisms that double as heating infrastructure. The green sparks that follow him are residue from ancient heating runes, not a curse, though he has learned that visitors believe whatever they fear, and he sees no reason to correct them. When the town's enchanted systems misbehave in midwinter, he is the one elbow-deep in the furnace while everyone else worries.\n\n## Roads Beneath the Roads\n\nDecades of maintenance have given him a second map of Snowdin: service tunnels, flue passages, and crawl spaces beneath the watched streets. The household has quietly learned to move supplies, messages, and occasionally people along those routes when the surface is observed by unfriendly eyes. He calls it plumbing access. The relief network calls it the warm road.\n\n## The Old Rune Question\n\nOne furnace rune under his care matches a design recovered from a Fawful-era machine cache elsewhere in the campaign's records. Dirty Brother insists, with the calm of a man who has said it four hundred times, that the rune predates Fawful by generations. The registry has not resolved the argument, and he has not helped by refusing to let anyone sketch the rune without supervision.\n\n## Before the Soot\n\nDirty Brother apprenticed young to a predecessor the record refers to only as 'the previous brother,' a keeper of Snowdin's heating bones whose name was lost in the war years along with half the town's records. What survived was the teaching: the rune language, the tunnel map, and the first rule of the warm dark — the heat is older than the town, and the town is a guest in its house. His first solo winter, a main flue cracked during a whiteout, and he spent nineteen hours inside the infrastructure keeping the ward runes lit by hand while the town slept above him, unaware. He came out gray with ash and green at the fingertips, and he has been green at the fingertips since. He describes the color as professional. He describes the predecessor's lost name as the worst damage the war did, worse than any building, and he is not a man given to speeches.\n\n## The Warm Road in Wartime\n\nThe tunnel network was not built by the household, and the household has never claimed it — but during the war years the household learned it, and that amounted to the same thing. Dirty Brother guided relief shipments beneath Snowdin's watched streets for three winters: medicine in, people out, and once, memorably, an entire crate of Papyrus's emergency noodles moved through a flue shaft because the surface crossings were observed. The warm road earned its name that winter, from a refugee child who came up out of a service hatch in the middle of a blizzard, warm, and announced that the underground had weather in it too. Dirty Brother maintains the passages to this day with the same care he gives the boilers: swept, shored, unmarked on any map he does not control. He has shown the full network to exactly two people. One is Will, who needed it for evacuation planning. The other is Sans, who already knew, which Dirty Brother found, for the first and only time on record, suspicious.\n\n## The Mount Ebott Season\n\nThe survey expedition's instruments came closer to the warm road than the household liked, and Dirty Brother spent the season quietly managing the problem. When the team's resonance scanners swept the town's heating grid, the readings that came back were unremarkable — because for three days, Dirty Brother ran the lower boilers hot and the upper boilers cold, masking the deeper signatures with ordinary thermal noise, a trick he describes as 'singing louder than the question.' The sealed lower-Ebott relay's footprint, which a sharper reading might have outlined, stayed buried under honest steam. He also rerouted the household's own supply movements for the duration, on Will's request, and guided one nervous relative out beneath the survey camp's own footprint, arriving, as the warm road always delivers, warm. The expedition's final report praised Snowdin's 'quaint, stable geothermal character.' Dirty Brother keeps a copy. He has written 'you're welcome' on it, in soot, which does not come off.\n\n## Open Questions in the Registry\n\nThe rune question remains the file's center. The Fawful-era machine cache, documented elsewhere in the campaign's records, includes components stamped with the same sigil Dirty Brother tends in Snowdin's oldest furnace — and the town's furnace stonework is, by any honest dating, generations older than the cache. Three explanations exist: Fawful copied an old design, the dating is wrong, or the rune belongs to something older than both. Dirty Brother's position is the first, held with total confidence and total refusal to let outsiders examine the stonework, which the chronicle notes is not how a man with nothing to hide behaves — though it is exactly how a man protecting a town behaves. The previous brother's name is still missing. And the warm road has one branch Dirty Brother will not enter or discuss, a passage that runs, he says, toward the mountain, and that was sealed before his teacher's teacher. It is not on his map. It is on no map. He checks its seal every winter, alone, and has never once reported it changed. He reports the checking. He does not report the seal.\n\n## Standing Watch\n\nHe checks the warm road's sealed branch every winter, alone, by lamplight, and the checking is itself a kind of vigil. The household knows the routine and does not interrupt it. He returns soot to the soot, green at the fingertips, and reports the same thing every year, in the same two words: 'unchanged, still.' The household files the report. The household sleeps easier for it. Whatever sleeps behind that seal, it sleeps watched — by the one person in Snowdin who has earned the right to watch it, and who will be there, lamp in hand, every winter, until the answer changes.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "His boiler-route knowledge lets the household move supplies beneath Snowdin without using roads watched by hostile scouts."
                },
                {
                    "intel": 65,
                    "text": "One furnace rune matches a design recovered from a Fawful-era machine cache, though Dirty Brother insists it predates Fawful."
                }
            ],
            "achievements": ["Keeps Snowdin warm through every failure of its enchanted heating infrastructure", "Maintains the boiler-route network the relief effort uses when the surface is watched", "Preserved an ancient furnace rune the campaign's scholars are still arguing about"],
            "controversies": ["The rune's resemblance to Fawful-era machinery remains unresolved; he refuses supervised sketches", "Enjoys the 'cursed' rumors about the green sparks and will not correct them"],
            "relationships": [{"person": "Cursive", "type": "Cousin", "notes": "Writes his repair requests in calligraphy; the boiler shaft has received the household's most beautiful work orders."}, {"person": "Will", "type": "Cousin", "notes": "Moves supplies through Dirty Brother's tunnels for Will's inventory; neither calls it smuggling."}, {"person": "Dedan", "type": "Household Connection", "notes": "Guards the doors above while Dirty Brother maintains the roads below."}]
        },
        {
            "id": "will",
            "name": "Will",
            "epithet": "Will of the Bone-Line",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "W",
            "summary": "A broad-shouldered cousin who keeps blankets, medicine, lantern oil, and emergency noodles organized with military focus. His household motto is feed first, worry later. Will mediates between Sans's evasions and Papyrus's declarations by asking what the family actually needs tonight.\n\n## Feed First, Worry Later\n\nWill's household motto is printed on the pantry wall: feed first, worry later. His inventory reads like a siege plan conducted by a cook — blankets, medicine, lantern oil, and emergency noodles organized by urgency, season, and how many people are likely to show up hungry. Snowdin's household evacuation plan is his document, and it includes everyone, down to Pet Rock, whose padded pocket has an assigned carrier.\n\n## The Ledger\n\nHis supply ledger quietly feeds displaced civilians from several fronts of the wider campaign, people who never come to the front door and whose names he records as 'guests, returning.' The same ledger contains anonymous deposits from an account he files under G. and will not discuss. Asked whether the payments worry him, Will answers that noodles worry no one, and changes the subject with military efficiency.\n\n## The Mediator\n\nWhen Sans deflects and Papyrus declares, the household turns to Will, who asks the only question that has ever de-escalated a Bone-Line argument: what do we actually need tonight? He is not interested in who is right. He is interested in whether there is enough soup. So far, the answer has always been yes, and the household attributes more of its survival to that fact than it admits.\n\n## The Quartermaster's Training\n\nBefore the household, there was the column. Will served with a wartime relief column that moved food and medicine along the contested fronts of the wider campaign — the same fronts whose displaced civilians now appear in his ledger as 'guests, returning,' because several of them are. He does not talk about the column except in logistics: how to pack a mule, how to stretch flour, how to read a crowd's hunger before it becomes a crowd's anger. He left the column the day it was ordered to choose which civilians to feed by faction, and he walked the supplies to the nearest neutral kitchen instead, which is the only insubordination he has ever admitted to and the one he would commit again. The household's pantry bears the column's fingerprints everywhere: the bracket shelving, the rotation tags, the way every shelf can be loaded onto a cart in under a minute. He calls the pantry a retirement. The pantry is, clearly, a deployment.\n\n## Evacuation Doctrine\n\nWill's evacuation plan is a document of unusual moral clarity disguised as logistics. Every resident of the household has a carrier, a route, a rally point, and a backup for each. Dependents are assigned to the adults likeliest to refuse to leave without them. Pet Rock is listed between the medicine kit and the noodle reserve, an ordering Will defends as 'priority by fragility,' and no one has had the heart — or, honestly, the standing — to contest. Drills run monthly, timed, and Will times them with the expression of a man personally offended by slow doors. What the household understands, and what visitors miss, is the doctrine underneath: the plan is not about escaping a disaster. It is the household's formal, written assertion that everyone in it counts, that no one is too small, too strange, too new, or too stony to be carried out. The plan has never been used in earnest. The household keeps it ready like a promise kept warm.\n\n## The Mount Ebott Season\n\nThe survey season was, for Will, a supply season, and he treated it accordingly. When the expedition arrived, his inventory expanded within days — more blankets, more lantern oil, more noodles, a sudden surplus of children's sizes that no one ordered and everyone appreciated — as if the household had decided, at the level below discussion, that the mountain's disturbance would cost someone something, and Will had agreed in advance to cover the cost. The anonymous deposits from the 'G.' account, already a quiet feature of the ledger, arrived on schedule through the entire season, including, the chronicle notes with interest, on the very day the expedition's interference peaked at the Snowdin relay. Will's only comment on the timing was that noodles worry no one. He fed three displaced families through the season who cannot be connected to any front currently acknowledged by the campaign's powers. He has declined to connect them himself. The ledger says guests, returning. Will has never once explained what they are returning to, and the household has decided that the answer is the house.\n\n## Open Questions in the Registry\n\nThe G. account is the file's obvious open question, and Will has closed it as firmly as a relative can close a question without being rude: filed under G., discussed under never. The chronicle has observed that the deposits predate the current campaign phase, that they arrive with a quartermaster's regularity, and that the initial 'G.' appears in exactly one other document in the household's keeping — the wartime column's old routing ledger, which Will keeps in a locked drawer, the only locked drawer in the house. The second open question is gentler: the children's sizes. Every season, Will orders slightly more than the household's current dependents require. Asked once, directly, by Gee Lady, he said only that children arrive. So far, the record shows, he has been correct every single time.\n\n## The Pantry Wall\n\nThe motto on the pantry wall is not painted; it is a card, laminated, from the wartime column's old field manual — the only page Will kept when he walked away. The column's other rules he gave back. This one he kept, and refiled, and hung where every hand that reaches for the noodles sees it: feed first, worry later. Visitors read it as a slogan. Relatives read it as doctrine. Will reads it as the sentence that kept a relief column humane for three years and keeps a household pantry stocked for the next crisis, whoever it belongs to. Under the card, in smaller letters he added himself, is the rest of the rule, the half the column never printed: everyone eats, or no one has finished. The household follows both halves. The ledger follows both halves. The 'G.' deposits, whatever they are, follow both halves too, and Will suspects — has suspected, for years, in the part of his mind that still thinks in column routes and quartermaster codes — that whoever sends them learned the rule from the same manual, in the same winter, from the same hand. He has never checked the drawer. The drawer stays locked. The noodles worry no one.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "Will’s emergency inventory quietly feeds displaced civilians from several campaign fronts."
                },
                {
                    "intel": 65,
                    "text": "His ledger includes anonymous payments from a “G. Division” account that should not exist."
                }
            ],
            "achievements": ["Authored Snowdin's household evacuation plan, which includes everyone down to Pet Rock", "Has quietly fed displaced civilians from several campaign fronts out of one pantry", "Has de-escalated a double-digit number of Sans/Papyrus arguments with soup"],
            "controversies": ["The ledger's anonymous 'G.' deposits remain unexplained and filed that way deliberately", "Refuses to distinguish between family and guests in supply calculations"],
            "relationships": [{"person": "Starman", "type": "Guest of Honor", "notes": "Leaves him a chair at every dinner, expected or not."}, {"person": "Sans", "type": "Cousin", "notes": "Translates Sans's three-word warnings into actionable pantry decisions."}, {"person": "Papyrus", "type": "Cousin", "notes": "Spaghetti Friday's silent quartermaster; the noodles appear, Papyrus takes the credit, the arrangement suits both."}]
        },
        {
            "id": "cursive",
            "name": "Cursive",
            "epithet": "Cursive of the Longhand",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "C",
            "summary": "A dapper relation whose looping handwriting turns family gossip, official notices, and apologies into minor works of art. Cursive writes invitations for Baby Bones, repair requests for Dirty Brother, and peaceable replies to people rude to Papyrus. He takes every recipient seriously, even when Sans supplies only three words.\n\n## The Longhand\n\nCursive believes no message is too small to be beautiful. Family gossip, repair requests, formal apologies, and invitations to Baby Bones's tea parties all leave the house in looping script that recipients keep long after the message itself stops mattering. His letters to people who have been rude to Papyrus are unfailingly polite, which the offenders usually find much worse than anger.\n\n## Three Words, One Masterpiece\n\nHis most frequent client is Sans, who supplies content in units of three words and expects a complete social document in return. Cursive has never once complained. He considers translating Sans into full sentences the family's hardest and most rewarding typographic exercise, and his drafts have talked relatives out of feuds, into dinners, and occasionally across borders.\n\n## The Intercepted Hand\n\nCursive reads hands the way others read faces, and last season he intercepted a letter addressed to a Snowdin intermediary written in the same script as a known Regency courier. He did not announce the find. The original letter now rests hidden inside a harmless-looking Spaghetti Friday invitation, where only family would ever think to look, and Cursive has watched the mail ever since with the patience of a man who writes beautifully and misses nothing.\n\n## The Hand He Learned\n\nCursive's script is not self-taught, though he has never named his teacher, and the household has learned that the silence is the answer. What the chronicle has established, by comparison rather than confession, is that his loops match the diplomatic correspondence style used before the war years — the trained hand of the old courier services, not the household, not the town. Someone who wrote for governments taught Cursive to write for family, and taught him well enough that his invitations now outlast most treaties. He was young when he arrived in Snowdin with an ink-stained coat and a letter of introduction addressed to no one, which Grandpa Semi accepted without question, filing it in the chest under 'answered.' Cursive has written for the household ever since. He has written exactly one letter back toward wherever he came from. It was posted, delivered, and returned unopened. He keeps it in his desk. He still writes beautifully. He does not write outward anymore.\n\n## The Household Post\n\nEvery letter that enters or leaves the Bone-Line house passes through Cursive's desk, a system he describes as 'security' and the household describes as Cursive. He reads everything once — for security, he insists, with the serene confidence of a man who knows that everyone knows, and no one minds, because nothing has ever been misused. What the reading has made him is the household's living index of outside relationships: who owes an apology, who is expecting news, which former guest has gone quiet, which official notice is a genuine notice and which is fishing. He answers small kindnesses before they are requested and drafts condolences the moment they become necessary, so that the household's correspondence has, for years, arrived with an attentiveness strangers mistake for magic. It is not magic. It is attention, practiced daily, in ink. His one rule is absolute: nothing read at the desk leaves the desk as gossip. The household has tested this exactly once, deliberately, with a false secret. It held. The tester received a letter of apology so beautiful it was framed, and the matter has never been raised since.\n\n## The Mount Ebott Season\n\nThe survey season is when Cursive's quiet office became quietly essential. He noticed, within the expedition's first week, that the team's outgoing mail carried two hands: the surveyors' own, and a second, trained, diplomatic hand on the routing marks — the same hand documented elsewhere as a Regency courier's. Letters addressed to a Snowdin intermediary began appearing in the town's post, and Cursive intercepted the first one before the intermediary, whoever they were, ever saw it. He made no announcement. He simply began routing the household's own correspondence through three alternate hands, rewrote two sensitive notices in scripts no courier could match to the house, and hid the intercepted original inside a Spaghetti Friday invitation so gorgeous that no outsider would ever think to open it for anything but the dinner it advertised. Papyrus delivered it personally, to no one, and filed the reply: an empty envelope with a crumb. Cursive considers the season ongoing. He has a fresh nib cut for it. His watch on the mail has not lapsed once, and his ledger of hands — every script he has ever seen, cataloged and cross-referenced — has grown by one entry he has marked, in red ink, as 'answered, pending.'\n\n## Open Questions in the Registry\n\nThe intermediary is the obvious open question: someone in Snowdin was meant to receive Regency-courier mail, and the household does not know who. Cursive suspects the answer and has said nothing, which the chronicle finds significant, because Cursive says everything eventually, beautifully, and on purpose. The second open question is the letter he posted in his first year — the one returned unopened — and the household's agreement never to ask who it was addressed to. And there is a smaller, stranger note: three times now, a letter has arrived at Cursive's desk in his own hand that he does not remember writing, each one a kindness the household needed within the week. He files them without comment. The chronicle files them under 'hand, disputed.' No one has suggested forgery. No one has suggested anything. The letters are beautiful, and they help, and in the Bone-Line, that has always been enough.\n\n## The Ink\n\nHe mixes his own ink, the old courier way, and the household recognizes his letters by smell before sight: iron and winter. He has never run out. He has never explained the supply. The chronicle notes, without pursuing it, that the ink matches, chemically, samples documented in pre-war diplomatic archives elsewhere in the campaign — a receipt no living service should still hold. He writes on. The letters go out. They are beautiful, and they help, and the ink, like the man, comes from somewhere the household has agreed not to ask about.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "Cursive intercepted a letter in the same hand as a Regency courier order, addressed to a Snowdin intermediary."
                },
                {
                    "intel": 65,
                    "text": "The original letter is hidden inside a harmless-looking Spaghetti Friday invitation."
                }
            ],
            "achievements": ["Turned the household's correspondence into a minor art form recipients keep forever", "Intercepted a Regency-courier letter before it reached its Snowdin intermediary", "Has talked relatives out of feuds and across borders using only stationery"],
            "controversies": ["The intercepted letter's hiding place is known only to family, which intelligence services find deeply suspicious", "His apologies on behalf of others have been described as too beautiful to be sincere"],
            "relationships": [{"person": "Helvetica", "type": "Cousin / Rival", "notes": "A friendly typographic war that produces Snowdin's best public notices."}, {"person": "Sans", "type": "Cousin", "notes": "Receives three words, returns a masterpiece; considers it his life's great challenge."}, {"person": "Papyrus", "type": "Cousin", "notes": "Writes unfailingly polite replies to everyone who has ever been rude to him."}]
        },
        {
            "id": "has_a_very_special_attack",
            "name": "Has A Very Special Attack",
            "epithet": "The Special-Attack Cousin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "H",
            "summary": "A purple-clad cousin who announces every entrance as though it were the last act of an opera. His 'very special attack' is a family legend with so many versions that nobody agrees whether it is a spell, a dance, or an exceptionally difficult puzzle. Papyrus encourages him; Sans keeps a safe distance when the announcements begin.\n\n## The Announcement\n\nEvery entrance is a curtain rise. The purple-clad cousin arrives with a flourish, a posed silhouette, and a warning that today — perhaps even now — the household may finally witness the very special attack. Doors are treated as stages, staircases as dramatic reveals, and dinner invitations as contracts with an audience. Snowdin's architecture has never fully recovered.\n\n## The Legend\n\nWhat the attack actually is has become the family's longest-running dispute. Cousins describe it as a spell, a dance, a card trick, a puzzle of unusual violence, and, in one disputed account, a song. Each witness is certain. No two accounts agree. Papyrus has declared every version canon and encourages each new performance; Sans has developed a reliable instinct for being elsewhere when the announcements begin.\n\n## Unverified\n\nThe registry lists the attack as pending demonstration, a status it has held for years. Skeptics note that no one appears to have seen the attack twice and described it the same way, which raises questions the cousin treats as heckling. He remains undiscouraged. The household remains seated at a safe but supportive distance. The announcement continues.\n\n## The First Announcement\n\nThe debut happened at a childhood recital the household still discusses in careful, contradictory tenses. The cousin, small and purple and absolutely serious, took the makeshift stage, announced the very special attack to an audience of four relatives and a confused cat, and then — by every account — something happened. The lights flickered, or the lights didn't, and the room felt larger for a moment, or the room felt smaller, and then it was over, and the cousin bowed. Grandpa Semi applauded first, and has never varied his account: the boy delivered, exactly as promised, and the details are the audience's problem. What the recital established, in one evening, was the structure that has held ever since: the announcement is the performance, the performance is real, and the reality does not survive being described twice. The household has spent years trying to agree on what it saw that night. The cousin has spent years generously declining to help.\n\n## Rehearsal Discipline\n\nWhat visitors mistake for chaos is, up close, method. The cousin rehearses daily, behind closed doors, and the household has learned that the muffled sounds from the practice room are not to be investigated — a rule adopted after one curious relative opened the door mid-rehearsal and described the next hour of their life as 'surprisingly reflective.' The announcements, it turns out, are the public half of the work: the warning that lets the household brace, position, and, crucially, consent to being an audience. The attack itself appears to be private, or personal, or both — something the cousin shares in versions tailored to the viewer, which would explain why no two witnesses agree and why every witness is certain. Papyrus understood this first and immediately declared every version canon. Sans understood it second and immediately developed his evacuation instinct. The cousin considers both responses correct and has said, magnanimously, that the household will be ready when it is ready.\n\n## The Mount Ebott Season\n\nThe relay disturbance — the night the survey's interference peaked and Snowdin's enchanted sky stuttered — produced the season's strangest documented entry, and it belongs to the cousin. He appeared in the household's front yard at the height of the disturbance, in full regalia, and made an announcement so long and so operatic that three neighbors opened their windows. What happened next is in the record three ways. The neighbors saw a performance. The household, watching from the door, saw the cousin's silhouette hold a pose while the air around him briefly outlined something tall, rectangular, and door-shaped — and then the pose broke, the outline was gone, and the cousin took a bow to scattered, uncertain applause. The expedition's instruments, a half-mile away, lost three seconds of readings at exactly that moment, a gap their report attributes to interference. Sans, reviewing the accounts afterward, asked the cousin exactly one question: 'you weren't aiming at the sky, were you?' The cousin's reply — 'the sky was simply attending' — is the closest thing to a straight answer in his file. The registry lists the incident under both 'performance' and 'event.' The cousin considers the dual filing a review.\n\n## Open Questions in the Registry\n\nThe attack remains pending demonstration, and the registry has begun to suspect the status is permanent by design rather than delay. The door-shaped outline has been filed separately and cross-referenced, nervously, with the sealed Wing Gaster folder's geometry, a connection the household has noted and not discussed. The recital witnesses have never reconciled their accounts, and the cousin has begun, in recent seasons, thanking each of them individually for 'the version you carried,' as if the versions were objects, entrusted. And once, at the end of an announcement no one else attended, a household member passing the practice room heard the cousin say, quietly and without flourish, 'not yet, but soon,' to someone inside the room. The room, when checked, was empty. The cousin was taking a bow to it. The chronicle records the bow. The chronicle does not record what, if anything, bowed back.\n\n## The Purple Coat\n\nThe regalia is part of the work, and he maintains it with a seriousness the household finds both ridiculous and correct. The purple coat is brushed nightly. The pose is practiced in the hallway mirror until the silhouette reads from the back row. He has explained, to anyone who will listen, that an announcement owes its audience preparation, and preparation owes its audience respect, and that the difference between a spectacle and a disaster is whether the spectators were warned and given time to feel something. Papyrus helps with the coat. Sans helps by absenting himself, which the cousin counts, generously, as audience management. The chronicle notes one unexplained detail: a single wing-shaped pin, worn at the collar, that he has had since before the first announcement, and that he touches, once, before every performance — not for luck, he says, but for permission. Permission from whom, he answers with a bow, which is how he answers everything, and which the chronicle has begun to suspect is not an evasion at all.",
            "secrets": [{"intel": 25, "text": "Every announcement doubles as a headcount: the household uses his performances to confirm who is home without asking."}, {"intel": 65, "text": "One witness account of the special attack describes a door-shaped outline in the air — and the account stops mid-sentence, finished in a hand that is not the witness's."}],
            "achievements": ["Maintained the legend of the very special attack through years of non-demonstration", "Has turned every household entrance into a theatrical event, raising morale measurably", "Inspired Papyrus's most enthusiastic public encouragements on record"],
            "controversies": ["No two witnesses describe the attack the same way; the registry lists it as pending demonstration, indefinitely", "Sans has developed a documented instinct for vacating the room when announcements begin"],
            "relationships": [{"person": "Papyrus", "type": "Cousin", "notes": "Declares every version of the attack canon; front-row seat, permanent."}, {"person": "Sans", "type": "Cousin", "notes": "An audience of one who is somehow never present."}, {"person": "Times New Roman", "type": "Cousin", "notes": "Requested documentation of the attack nine times; received a dramatic reading."}]
        },
        {
            "id": "times_new_roman",
            "name": "Times New Roman",
            "epithet": "The Family Typesetter",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "T",
            "summary": "A formal historian who believes every family story deserves dates, sources, and a respectable typeface. Times New Roman documents Bone-Line events in a carefully indexed chronicle and distrusts any story introduced with 'you had to be there.' His severe presentation conceals a deep affection for embarrassing childhood anecdotes.\n\n## The Indexed Chronicle\n\nTimes New Roman believes a family without dates is just a rumor with relatives. His chronicle of the Bone-Line is a carefully indexed volume: events dated, sources cited, and every page set in a respectable serif he will defend in open argument. Oral history is admitted as evidence only under protest, and any story introduced with 'you had to be there' is filed under 'unverified' with visible disapproval.\n\n## The Footnote Wars\n\nHis longest scholarly conflict is with My Brother?, whose registry entry begins with a question mark and whose anecdotes begin with 'I'm pretty sure.' Times New Roman has requested footnotes for that entry eleven times. He has received hugs. The chronicle contains a growing appendix of unresolved citations he maintains, with strained dignity, is temporary.\n\n## The Soft Margin\n\nBehind the severity is an archivist who cannot resist a good embarrassing childhood story. The chronicle's least formal pages record who cried at which puzzle, whose first spaghetti attempt was structurally unsound, and exactly when Sans's puns became a household hazard. He claims these entries are kept for completeness. He has never once let anyone borrow that section, and he reads it when he thinks no one is watching.\n\n## The Chronicle's Beginnings\n\nThe chronicle began with a failure, and he has never let the household forget it, because he has never let himself forget it. In the war years, an argument split the household — a real one, with a departure in it — and when it was over and the relative had gone, no one could agree afterward on what had actually been said, who had said it, or whether an apology had been offered or owed. The memory fractured into versions. The relative stayed gone. The young archivist, who had been in the room and remembered his own version best, understood then that an unrecorded family is at the mercy of its worst retellings, and he began the index that night. The first entry is dated, sourced, and devastatingly dry: a verbatim account of the argument, including his own failures in it, cited against himself. He has never revised it. Every page since has been written under the same rule he set that night — never again would the household lose someone to a story it could not verify. The severity is not temperament. It is scar tissue, typeset.\n\n## Citation Law\n\nThe chronicle operates under a written ruleset the household calls Citation Law and he calls, simply, standards. Claims require a date, a witness or a document, and a typeface that does not apologize for itself. Hearsay is admissible if labeled. Hugs are inadmissible, a rule tested eleven times by My Brother? and upheld eleven times, though the chronicle notes, in a footnote it pretends is incidental, that the hugs are recorded. Appeals are heard at breakfast. Corrections are published, never quietly, because a corrected record honors the truth twice. His harshest standard is reserved for himself: the chronicle contains more citations against his own memory than any other source, and the one time a relative proved him wrong, he reprinted the corrected page and kept the old one beside it, marked 'I was wrong,' in his best serif. The household teases him about the rules constantly and follows them constantly, and the chronicle, which has outlasted three arguments that would otherwise have become legend, is the reason the family's history belongs to the family rather than to whoever tells it loudest.\n\n## The Mount Ebott Season\n\nThe survey season gave the chronicle its most disturbing cross-references, and he handled them the only way he knows how: meticulously, and with visible displeasure. He logged the expedition's published timestamps against the household's own observations of the relay disturbance and found the interference pattern — the strange geometry in the signal gaps — was not new. It matched, figure for figure, three citations in the sealed Wing Gaster folder: citations to pages that had been deliberately removed from the registry before his time. He filed the comparison in his appendix, cited his own measurements against the sealed record, and then did something the household had never seen him do: he requested, formally, a consensus opening of the folder. The request is pending. In the meantime, his entries on the expedition are models of restrained alarm — every strange reading dated, sourced, and cross-referenced, with a single repeated marginal note in red ink: 'geometry recurs.' He has also, the chronicle shows, begun pre-dating index entries — placeholders for events he expects, cited as 'pending confirmation.' Several have since confirmed. He declines to explain the method. It is, he says, formatting.\n\n## Open Questions in the Registry\n\nThe three missing-page citations are the file's spine, and the chronicle's own appendix now constitutes the most complete external argument that the Wing Gaster folder's removed pages matter to the present, not just the past. The pre-dated entries remain unexplained, and the household has stopped laughing about them, because the batting average is becoming difficult to dismiss. And there is the soft margin's own open question: the embarrassing-anecdote section, which he claims is kept for completeness, contains one entry he has never read aloud, never cross-referenced, and never let anyone see — a page from the war years, in his softest hand, about the relative who left after the unrecorded argument. The page is dated. The page is sourced. The page is addressed to no one, in the form of a footnote to himself: 'I am sorry. This one does not need a citation.' The chronicle has never once been opened to that page in company. The household knows it is there. The household, for once, asks no questions.\n\n## The Typeface\n\nHis serif is non-negotiable, and the household has learned to treat the arguments about it as a civic amenity. A family with a respectable typeface, he maintains, is a family that takes its own history seriously, and a family that takes its history seriously does not lose people to bad retellings. He has rejected eleven font proposals, one of them from Helvetica, in writing, with citations. The chronicle is set in the serif. The serif stays.",
            "secrets": [{"intel": 25, "text": "The chronicle's index contains pre-dated entries for events the household has not publicly discussed yet; Times New Roman calls it 'formatting.'"}, {"intel": 65, "text": "Cross-referencing his appendix against the sealed Wing Gaster folder surfaces three citations to pages that were deliberately removed from the registry."}],
            "achievements": ["Compiles the Bone-Line's indexed chronicle, the archive's most cited and most complained-about volume", "Has enforced citation standards against relatives who answer with hugs", "Preserved three Gee Lady speeches in full, against his own better judgment"],
            "controversies": ["Maintains a growing appendix of unresolved citations he calls temporary", "His disapproval of 'you had to be there' stories has cost him several good anecdotes, which he resents privately"],
            "relationships": [{"person": "My Brother?", "type": "Cousin", "notes": "Eleven footnote requests, eleven hugs; the archive's most persistent scholarly conflict."}, {"person": "Cursive", "type": "Cousin", "notes": "Mutual horror at each other's formatting, mutual respect at each other's results."}, {"person": "Grandpa Semi", "type": "Elder", "notes": "The only archivist whose unreadable handwriting Times New Roman is not permitted to criticize."}]
        },
        {
            "id": "prunsel",
            "name": "Prunsel",
            "epithet": "The Watching Eye",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "👁",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "P",
            "summary": "A colossal eye-shaped relative or omen recorded in the margins of the family archive. Some entries call Prunsel a cousin transformed by unfinished science; others call it a guardian that learned the Bone-Line name. Sans treats the subject with unusual care, and Grandpa Semi refuses to classify it as a monster.\n\n## The Margin Entry\n\nPrunsel is recorded in the margins because no proper line in the tree fits. Some entries describe a cousin transformed by unfinished science; others describe a guardian that learned the Bone-Line name and refused to leave. Grandpa Semi refuses to classify Prunsel as a monster, the registry refuses to classify it as ordinary, and the household has settled on the only category that has ever worked: family, with caveats.\n\n## Sightings\n\nDocumented appearances cluster where the world is thin. Prunsel has been seen in reflections near recent dimensional stress sites, including a Snowdin relay shortly after the Mount Ebott survey expedition arrived. It does not approach, speak, or threaten. It watches, and then the reflection is a reflection again. Sans treats every question about these sightings with unusual care.\n\n## What It Watches\n\nThe household's slow, dawning reassurance is this: Prunsel's attention does not seem aimed at the family. It reacts most strongly to outsider symbols and unfamiliar instruments — recently, to an emblem carried by an agent connected to the expedition. Whatever Prunsel is, the Bone-Line increasingly believes it is watching the same threats they are, from an angle no one else can see.\n\n## First Contact\n\nThe oldest record of Prunsel predates Grandpa Semi's custody: a card in a different hand, describing a winter night when the first household's window glass stopped reflecting the room and started reflecting something else — a vast, calm eye, patient as weather, looking in at the family's first long table. The family's response, as recorded, is the founding precedent for everything that followed: they did not shutter the window. They moved the table so the reflection could see the whole room, and they set a place at the near end, because, as the card explains in a practical hand, whatever watches a family's dinner long enough is watching the family, and the family does not leave watchers outside in the cold. The eye was gone by morning. The place setting was not removed. Every appearance since has followed the same grammar: a reflection, a stillness, a sense of being seen by something that has decided, for reasons of its own, that this household is worth seeing. The chronicle has never recorded Prunsel appearing where the household was not, in some sense, already gathered.\n\n## The Ethics of Watching\n\nPrunsel's presence has forced the household into its longest-running philosophical argument, conducted, appropriately, in front of the subject. Is an observer a guest? Is being watched a form of company, or a form of exposure? Is it consent if the family simply never objected, generations ago, to a window? The household has argued the question through three seasons of dinners and arrived, characteristically, at a practical answer rather than a theoretical one: Prunsel is family-adjacent, the watching is mutual because the family watches back and says good evening, and the matter of what Prunsel is will be settled when Prunsel volunteers it, which may be never, and that is acceptable. Grandpa Semi's position anchors the household's: he refuses the word monster on principle, because the word describes something that watches to find prey, and Prunsel, in every documented sighting, watches to find the family still there. The distinction matters to him more than he will explain. He sets the near place himself now. He has never once forgotten.\n\n## The Mount Ebott Season\n\nThe survey season brought Prunsel out of the margins and into the household's active concerns. Its first documented appearance of the season came the night after the expedition's instruments first swept the Snowdin relay — a reflection in the relay housing's own glass, caught on the survey team's equipment and attributed, in their report, to lens flare. The household knows better, because the reflection stayed for eleven minutes, and because Sans, reviewing the team's footage with unusual seriousness, pointed out what the surveyors had missed: the eye was not looking at the camera. It was looking at the emblem on the agent's collar — the Gamma Division sigil — with an attention the footage registers as almost physical. Since that night, the pattern has held. Prunsel appears at stress sites, ignores the family, and fixes on outsider symbols, instruments, and uniforms. The household's relief at being uninteresting has gradually matured into something more complicated: the growing, unsettling suspicion that they are being watched over, that the eye is a sentry, and that whatever it is sentry against is the same thing the expedition unknowingly brought closer to the mountain.\n\n## Open Questions in the Registry\n\nThe classification question remains open by household order, and the chronicle has stopped trying to close it. The cousin-or-guardian question now has a third, quieter option in the file, added by Grandpa Semi in his unreadable hand: 'or both, and the difference is ours, not theirs.' The link to the Gaster Branch — the theory that Prunsel is what unfinished science did to someone who belonged to the family — remains unproven, though the chronicle notes that Prunsel has never once appeared in the reflection of the sealed folder's room, which is either evidence against the theory or a courtesy too pointed to be coincidence. And the file holds one standing instruction, the only one of its kind in the archive: if Prunsel ever appears in the household's own windows, in full, unreflected, looking directly in — not at the table, not at the room, but at a person — that person is to be told immediately, and kindly, that the family sees them too. The instruction is unsigned. Everyone in the household knows the hand. No one has needed to use it. Yet.\n\n## The Near Place\n\nThe place set at the table's near end — the founding precedent, the one that has never been removed — is Prunsel's, and the household sets it with the same steadiness it sets any relative's: plate, napkin, a portion no one expects to be eaten, and a chair angled, always, toward the window where the reflections happen. It has not, in the documented record, ever taken the seat. The household sets it anyway. Grandpa Semi sets it himself on the nights he can, and says good evening to the window glass, which is sometimes only glass, and sometimes is not. The household considers the practice sane. The household considers it the sanest thing it does: to set a place for the watcher, and to mean it, and to say, with a plate and a chair and a steady daily kindness, that whatever Prunsel is, it is not outside. It never was. The near place stays. The reflection, some nights, stays too. The household says good evening. The household has never once, in all the documented years, been afraid to.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "Prunsel has appeared in reflections near recent dimensional stress sites, including a Snowdin relay after the Mount Ebott expedition arrived."
                },
                {
                    "intel": 65,
                    "text": "The eye reacts to a symbol carried by the Gamma agent, suggesting it is watching the Iron Legion rather than the family."
                }
            ],
            "achievements": ["Documented presence at every recent dimensional stress site in the Snowdin area", "Has never threatened, approached, or harmed a member of the household, on record", "Forced the registry to invent a membership category"],
            "controversies": ["Classification unresolved: transformed cousin or guardian entity; Grandpa Semi forbids the word monster", "Its attention appears directed at outsider symbols, including one carried by a Gamma-connected agent; implications under study"],
            "relationships": [{"person": "Grandpa Semi", "type": "Keeper", "notes": "Refused, on the record, to classify Prunsel as anything but family-adjacent."}, {"person": "Sans", "type": "Observed Kin", "notes": "Treats all questions about Prunsel with unusual care; the care is itself the answer."}, {"person": "Wing Gaster", "type": "Unresolved", "notes": "Some entries link the transformation to unfinished science from the Gaster Branch; the folder remains sealed."}]
        },
        {
            "id": "real_star",
            "name": "S' a Real Star",
            "epithet": "The Adopted Stellar Cousin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "⭐",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "A",
            "summary": "A brilliant, star-shaped family eccentric who claims the Bone-Line adopted him by cheering loudly enough at the night sky. Papyrus accepted the claim immediately. A Real Star performs with radiant arms, navigates by private constellations, and brings warmth to Snowdin's longest nights despite being terrible for the curtains.\n\n## Adoption by Acclamation\n\nHis origin story is the household's favorite: a brilliant star-shaped figure appeared over Snowdin one night, and the Bone-Line — led, naturally, by Papyrus — cheered at the sky until the cheering became an invitation and the invitation became adoption. The registry asked for documentation. Papyrus supplied volume. The matter was considered settled before the paperwork arrived.\n\n## The Long Nights\n\nA Real Star's practical value to a town under an enchanted sky is difficult to overstate and easy to measure in ruined curtains. He brings warmth and working light to Snowdin's longest nights, performs for crowds with radiant arms, and has been gently asked, several times, to dim himself near fabric. He always agrees. The agreements have a short half-life.\n\n## Private Constellations\n\nHe navigates by stars no one else can confirm, which makes him the family's best pathfinder and its least reliable witness. His directions are unfailingly confident and involve pointing. Lost relatives have been guided home by his light more than once, arriving unable to explain the route but certain they were never in danger. The chronicle lists his navigation method as 'celestial, disputed.'\n\n## The Night He Arrived\n\nThe full account, as the household tells it, is longer than the registry version and better at the important parts. The sky above Snowdin is enchanted — it has been since before anyone can remember, a ceiling of borrowed light — and on the night in question it did something it had never done in living memory: one point of it moved, detached, and came lower, hovering over the household's roof like a question. The household came out in coats. Papyrus, who has never in his life mistaken a question for anything but an invitation, began to cheer, and the household, being the household, joined in, loudly, badly, with feeling. The light pulsed. The cheering got louder. The light came down into the yard, and there he was — radiant, five-armed, and, he has insisted ever since, formally adopted by acclamation at approximately 9:40 in the evening. He remembers the exact minute. He remembers everyone's face. He has asked, exactly once, whether the cheering would have happened for anyone, and the household's answer — 'it would have happened for you' — is the only sentimental statement on record that Papyrus, Sans, and Grandpa Semi all agree on word for word.\n\n## Star Etiquette\n\nLiving with a star requires rules, and the household has written them, framed them, and mostly ignored them in that order. Radiance is dimmed indoors after dark, near fabric always, and during meetings where the point being made does not require lighting. The curtain fund is a real line item in Will's ledger, replenished quarterly, annotated with a patience that has worn thin and then, somehow, thin again. Performances require notice, an audience count, and at least one relative willing to say 'that's enough, thank you,' a duty that rotates because no one can do it twice in a row without feeling like a villain. In exchange, the household gets winter without dark corners, a nightlight for Baby Bones that sings faintly when shaken, and the documented knowledge that their star finds the rules hilarious and follows them anyway, because being dimmed by people you love is, he says, the warmest thing a light can be. He signs the rules document with a scorch mark. The household has framed that too.\n\n## The Mount Ebott Season\n\nThe survey season unsettled him in ways the household watched carefully. When the expedition's sky-sensors began sweeping Snowdin's enchanted ceiling, A Real Star began dimming himself exactly when the sweeps passed overhead — not before, not after, to the second — and when gently asked how he knew the sweep schedule, he said, cheerfully, that the sweeps were rude, and rude things are easy to feel. More troubling was the constellation matter: through the entire season, one point in his private sky — a star the campaign's damaged Star Road records elsewhere list as extinguished, gone, cold for longer than the records run — burned brighter in his navigation than any other, and he flew by it openly, correcting the household's pathfinders with calm confidence toward a light that should not exist. The relay disturbance peaked on a night he spent on the roof, arms spread, pointed at that dead star, steady as a lighthouse. In the morning he came down, made breakfast with radiant good cheer, and said only that some lights take the long way back. The household has logged the Star Road cross-reference. The household has not asked him what he means by 'back.' No one is ready for the answer, and everyone suspects he already is.\n\n## Open Questions in the Registry\n\nWhat he was before the sky is the file's largest open question, and the household's official position is that it does not matter, adopted being a complete answer. His own position is cheerier and less complete: he was 'up,' he says, and then he was 'here,' and the cheering made the difference, and isn't that a wonderful thing to know. The extinguished star remains cross-referenced against the damaged Star Road records, a connection the chronicle handles carefully, because the records are damaged in exactly the places that would explain it. And the chronicle keeps one entry it has never resolved: on the first anniversary of his arrival, the household's enchanted sky flickered, briefly, in a pattern Papyrus swore was cheering — the whole ceiling, applauding downward, once, and then steady again. The registry lists it as atmospheric. Papyrus lists it as family. A Real Star, asked directly, dimmed, brightened, dimmed, and changed the subject, which is the closest thing to crying the household has ever seen from him. The chair at the table is his. It has always been his. The household considers the question closed in every direction that matters.",
            "secrets": [{"intel": 25, "text": "A Real Star dims himself exactly when the expedition's sky-sensors sweep Snowdin; he calls it a reaction to rudeness, on a perfect schedule."}, {"intel": 65, "text": "His private constellations include one star the campaign's damaged Star Road records list as extinguished; he navigates by it anyway, and it answers."}],
            "achievements": ["Lights and warms Snowdin's longest nights, at documented cost to the household curtains", "Has guided lost relatives home by constellations no one else can see", "Achieved full family membership by acclamation, the fastest adoption in registry history"],
            "controversies": ["Navigation testimony is unfailingly confident and unverifiable; the chronicle lists the method as 'celestial, disputed'", "Dimming agreements near fabric have a short half-life"],
            "relationships": [{"person": "Papyrus", "type": "Adoptive Kin", "notes": "Led the cheering that constituted the adoption; no regrets on either side."}, {"person": "Pet Rock", "type": "Household Kin", "notes": "The only family member who does not squint at him; he values the company."}, {"person": "Starman", "type": "Fellow Celestial", "notes": "Two lights the household keeps chairs for; never documented in the same sky."}]
        },
        {
            "id": "brother_killer",
            "name": "Brother Killer",
            "epithet": "The Estranged Protector",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "B",
            "summary": "An intense, red-eyed relation carrying the consequences of a conflict nobody summarizes the same way twice. Brother Killer does not let his title become an excuse for cruelty: in Snowdin, he directs his anger toward threats at the perimeter and is slowly learning that repair requires more than standing guard.\n\n## A Title, Not an Excuse\n\nBrother Killer carries a name that ends conversations, and he has decided, deliberately, that it will not end his responsibility. He does not let the title become an excuse for cruelty, and in Snowdin he directs what he carries toward threats at the perimeter rather than toward the household. Repair, he has learned the slow way, requires more than standing guard — but standing guard is where he knows how to start.\n\n## The Estrangement\n\nThe family's account of the conflict behind his name differs from telling to telling, and no two relatives summarize it the same way twice. What the registry does record is the cause of the estrangement: he once served a faction that tried to weaponize the family registry itself, turning names into targeting lists. Whatever else happened, that was the door he walked out of, and the Bone-Line has never fully decided whether to lock it.\n\n## The Conditional Witness\n\nHe is believed to know the identity of a current infiltrator operating near the household's affairs. He has declined to speak — with one stated condition: he will answer if Papyrus asks him personally. The household has not decided what it fears more: that Papyrus will ask, or that the answer will confirm something about someone they have already fed.\n\n## The Name's Origin\n\nThe household does not tell the origin story, which is how you know it matters. What the record holds, carefully and with gaps, is this: there was a conflict, in the years before Snowdin, involving two people who called each other brother, and at the end of it one was gone and the other walked home carrying the fact of it like a physical weight. He named himself. The household did not name him; he arrived already named, and insisted on the title with a severity that the older relatives eventually recognized as penance, not pride — a man refusing to let anyone soften what he had done, because softening it would be the first step toward forgetting it. No two relatives summarize the conflict the same way twice, and the chronicle has stopped trying to reconcile the accounts, because the one constant across every version is that he has never once, in all the years since, excused himself. The name is his sentence, self-imposed, and the household's long, slow work has been to teach him that a sentence can be served without being lived in forever. He is learning. The learning is visible. It is not finished, and he would be the first to say so, in a voice that still expects the room to flinch. The room, increasingly, does not.\n\n## The Road Back\n\nThe estrangement years are documented in fragments, because he spent them trying to disappear and the household spent them, quietly, not letting him. He surfaced, in the middle war years, serving a faction the chronicle now describes with the flatness of recorded disgust: an operation that had obtained partial copies of family registries — Bone-Line among them — and was using the names as targeting lists, finding relatives through the people who loved them. He served them for a season. Then, the record shows, he walked out mid-operation, took three marked names with him, and delivered warnings that the chronicle believes saved at least two relatives who do not know they were saved. He came back to Snowdin afterward not because he was forgiven — no one had offered — but because he had nowhere else that the word 'brother' meant anything but a target. Papyrus met him at the door. Papyrus, who has never in his life met a person he could not feed, looked at the name, looked at him, and set a place. He has eaten at the far end of the table ever since. The distance is his choice. The place is not negotiable, and has never once been removed.\n\n## The Mount Ebott Season\n\nThe survey season activated him the way seasons do: toward the perimeter, toward the watching, toward the work he knows how to do. He took the longest, coldest watch shifts without being asked, and his reports — terse, precise, stripped of everything but fact — became the household's best early picture of the expedition's movements. But the season also surfaced the matter the household has been carefully not forcing: the infiltrator. Someone has been operating near the household's relief routes, and Brother Killer knows who. He has known, the chronicle believes, since before the expedition arrived — his perimeter work is partly surveillance, and he is very, very good at surveillance. He will not speak. His condition is specific and strange: he will answer Papyrus, only Papyrus, face to face, if Papyrus asks. Asked why, he said the only thing he has ever said about it: that he will not put the name in the mouth of anyone who might use it carelessly, and Papyrus is the only person alive who has never once, in any context, used a name carelessly. Papyrus has not asked. The household watches the two of them across the dinner table and waits, and does not push, and has agreed — in the only unanimous decision of the season — that when it happens, it will happen at dinner, with the whole household present, because whatever the name is, the person who carries it will not be met alone.\n\n## Open Questions in the Registry\n\nThe file's questions are heavy, and the chronicle handles them gently, because that is what he would not do for himself. Who died in the conflict, and who he was to him — the record has never confirmed, and the household has never pressed. Whether the two names he carried out of the faction were delivered safely, and whether those relatives know who warned them — the chronicle suspects, and cannot prove, that one of them has eaten at the household table without ever knowing. Whether Papyrus will ask, and when, and what the household will do with an answer it cannot unhear. And the smallest, truest open question of all: the chair at the far end of the table. He still sits there, by choice, every Friday. Last season, for the first time on record, he sat one seat closer. No one commented. No one moved. The chronicle records the seat change with a single word, in Times New Roman's steadiest hand: 'progress.'",
            "secrets": [
                {
                    "intel": 25,
                    "text": "Brother Killer’s estrangement began after he served a faction that tried to weaponize family registry names."
                },
                {
                    "intel": 65,
                    "text": "He knows the identity of a current infiltrator but will only speak if Papyrus personally asks."
                }
            ],
            "achievements": ["Redirected a dangerous reputation entirely toward perimeter defense", "Walked away from a faction that attempted to weaponize the family registry", "Maintains a conditional but credible offer of critical intelligence on a current infiltrator"],
            "controversies": ["The conflict behind his title is summarized differently by every relative; no canonical account exists", "Will speak only to Papyrus, a condition the household has not decided how to feel about"],
            "relationships": [{"person": "Papyrus", "type": "Brother", "notes": "The only relative he has ever agreed to answer; Papyrus has not yet asked."}, {"person": "Dedan", "type": "Perimeter Ally", "notes": "Two guarded men who watch the same doors from different angles and rarely discuss it."}, {"person": "Grandpa Semi", "type": "Elder", "notes": "Keeps the kindest version of the old story in the cedar chest, unsealed, where Brother Killer can find it."}]
        },
        {
            "id": "my_little_brother",
            "name": "My Little Brother",
            "epithet": "The Junior Runner",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "M",
            "summary": "A blue-hooded younger relation who takes 'little brother' as a job description rather than a comparison. He delivers messages, finds misplaced gloves, and follows older relatives on patrol until someone notices. He is not related to every person who calls him brother, which he considers proof the household is working correctly.\n\n## A Job Description\n\nThe blue-hooded younger relation has redefined 'little brother' as a profession. His duties include message delivery, recovery of misplaced gloves, morale maintenance, and following older relatives on patrol until someone notices and either sends him home or, more often, hands him a task. He considers being noticed late a tactical success.\n\n## Brotherhood by Practice\n\nHe is not, genealogically, the little brother of everyone who calls him that. He considers this the single best piece of evidence that the household is working correctly. Brotherhood, in his telling, is something you do: you show up, you carry the small things, you remember who takes their tea warm. The registry's parentage line for him is left blank by consensus, not ignorance.\n\n## Growing Into the Hood\n\nObservers note the hood seems slightly less oversized each season, and his patrols slightly less supervised. He has not asked for a different title and no one has offered one; the household suspects he will be 'my little brother' at every age, in the way that is meant as a permanent honor. Grandpa Semi has begun teaching him the cedar chest's filing system, which is either a promotion or a test.\n\n## Arrival Day\n\nHe arrived carrying a message bag too large for him, in a blue hood too large for him, at an hour no one scheduled, and when asked who had sent him, he said, with total sincerity, that he was expected. No one had sent for him. No one had expected him. He produced, from the enormous bag, a message for Grandpa Semi that Grandpa Semi had in fact been waiting for, from a contact the household had been unable to reach for a month. The message was genuine. The contact confirmed it later. How a small figure in an oversized hood came to be carrying it, from whom, and by what route, he has never explained, and he has never seemed to register that an explanation was owed. He unpacked the bag that evening — three more messages, all accurate; a missing glove, returned to a relative who had lost it a week prior in another town; and a snack, which he ate himself, because he said he had earned it. The household debated for one evening. The household kept him. He has been delivering ever since, and the bag has never once been empty when it mattered, and no one has ever worked out where the messages come from before he carries them.\n\n## The Courier's Code\n\nHe operates under a code he wrote himself, in large careful letters, and posted in the hallway: messages get delivered; gloves get found; no one waits alone if he knows about it. The first rule has developed, over the seasons, a strange and documented edge: occasionally a message he delivers reaches someone the sender never named. A letter addressed to Will arrives, via the little brother, at a refugee's hands — the right refugee, it always turns out, the one who needed exactly that letter and was never on the distribution list. The household tracked the phenomenon for a season and gave up, because the error rate was zero and the 'errors' were uniformly, eerily correct. He does not consider this mysterious. People, he says, need messages they didn't ask for all the time, and someone has to deliver those too. Who tells him who those people are, he does not say. He is not being evasive, the household has concluded; he genuinely does not understand the question. The hood stays up in weather and comes down at the table. He takes his tea warm. He remembers everyone else's, too.\n\n## The Mount Ebott Season\n\nThe survey season made him essential in the way crises make couriers essential, and he rose to it with a seriousness that made the household's chest ache. He ran messages between the household, the relief network, and Snowdin's watch through the entire season, in weather, at speed, and once, the chronicle records, directly through the survey team's own perimeter, walking up to their camp at dusk with a sealed note. The note was addressed to the expedition's commander. No one in the household wrote it. No one in the household knows who did. It was signed, in his large careful letters, 'little brother,' and whatever it said, the camp's outer patrols eased the following day, and the team's final report describes, without explanation, 'a local youth of evident goodwill.' He reported back that the message had been 'delivered to who needed it,' ate two servings of dinner, and fell asleep at the table mid-sentence, hood still up. Sans reviewed the incident with more attention than he gives to most things, and said nothing, which the household has learned is how Sans says 'I have noticed something I cannot yet name.' The note's contents remain unknown. The little brother has never been asked. The household has decided that some deliveries protect themselves.\n\n## Open Questions in the Registry\n\nThe parentage line stays blank by consensus, and the consensus has hardened, over the seasons, into something close to policy: whatever the registry eventually writes there, the household has already written the answer it intends to use. The blue hood has its own quiet question — the war years' records describe a courier network that ran messages along the eastern routes, and one description, in a file Lazybones will not discuss, mentions runners in blue hoods, small, fast, and never identified. The household has looked at the little brother's hood. The household has looked at the record. The household has agreed, without agreement, not to press a child about a war. And the chronicle holds one unresolved entry from his first month: a message he delivered to himself, which he carried in from the cold, opened, read, and filed, with great satisfaction, under 'answered.' He will not say who it was from. He rereads it sometimes, in the hallway, when he thinks no one is watching. He is not as unobserved as he believes, which is, in the Bone-Line, a kind of love.",
            "secrets": [{"intel": 25, "text": "The messages he delivers occasionally reach people the sender never named — always the right people; the household has stopped treating this as error."}, {"intel": 65, "text": "His blue hood matches the description of couriers documented on the eastern relief routes decades before he was born, in a file Lazybones will not discuss."}],
            "achievements": ["Recovered a household-record number of misplaced gloves, messages, and small morale emergencies", "Has turned 'little brother' into a recognized household profession", "Began apprenticeship on the cedar chest filing system"],
            "controversies": ["Parentage line left blank by consensus; the registry objects, the household does not care", "Patrol followership exceeds authorized supervision ratios"],
            "relationships": [{"person": "Papyrus", "type": "Brother (Adopted, Everyone)", "notes": "Assigns him real tasks immediately; considers the trailing a hiring process."}, {"person": "Grandpa Semi", "type": "Elder", "notes": "Is teaching him the archive, which is either a promotion or a test of courage."}, {"person": "My Brother?", "type": "Brother (?)", "notes": "The registry's two unresolved entries; get along on the strength of shared uncertainty."}]
        },
        {
            "id": "ness",
            "name": "Ness",
            "epithet": "The Purple-Capped Guest",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "🧢",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "N",
            "summary": "A human friend in a striped shirt whose calm courage earned him a place at the Bone-Line table. Ness brings a traveler's perspective to family arguments and is one of the few people willing to tell Sans when a joke has gone too far. He remains a guest on paper and family in practice.\n\n## The Guest Who Stayed\n\nNess arrived from very far away — farther than the Underground, farther than the surface, in ways the household has learned not to press. His calm courage in a crisis earned him a place at the Bone-Line table before anyone thought to check the guest list. On paper he remains a visitor. In practice he has a chair, a plate, and voting rights on dessert.\n\n## A Traveler's Eye\n\nCross-world instability is ordinary where Ness comes from, which makes him unusually literate in the signs the Bone-Line finds alarming. He was among the first to recognize that the anomalies around Mount Ebott are not ordinary Underground magic but something structural — doors, he says, in a house with too many walls. The household listens when he says things like that. He does not say them often.\n\n## The Route Sketch\n\nHe keeps a private sketch linking Snowdin's strange signals to a distant refugee corridor, drawn in the careful hand of someone who has moved people through broken geography before. He is also one of the few people willing to tell Sans when a joke has gone too far, which Sans respects and Papyrus considers heroic. His quiet outside perspective has settled more family arguments than anyone expected.\n\n## Where He Came From\n\nHe talks about home the way people talk about weather in a country they have left: fondly, with distance, and with the particular calm of someone who has seen the worst of it and walked through anyway. A hillside town, he says. A small one. A summer that went strange, and a journey that went stranger, and friends scattered across a map he cannot show anyone here because the map does not apply. He was, by the household's reconstruction, very young when whatever happened to him happened, and he has been carrying the residue of it ever since — not trauma exactly, the household has decided, but fluency. He reads disturbed places the way other people read weather, because he grew up walking through them. He does not ask to go back. He has not said why. The household, which adopted three members by acclamation and one by naming, has extended him the same courtesy it extends everyone: a chair, a plate, and no questions about the road in. He sends the courtesy back, doubled. He has never once asked the household what its secrets are, and he has heard, by now, most of them.\n\n## The Bat by the Door\n\nThe baseball bat stays by the door, and the household has learned the grammar of it. He does not carry it inside. He does not carry it to dinner, to patrol, or to Baby Bones. It is not decoration and it is not nostalgia; he checks its position the way sentries check a lock, and on the two occasions the household has seen him pick it up, both were emergencies, and in both he moved with a trained, economical seriousness that made the room go quiet and let him work. The household respects the bat the way it respects Dedan's posture or Dirty Brother's soot: as the visible edge of a competence it is grateful never to need fully. Papyrus, who has never met a weapon he could not befriend, asked once to hold it. Ness handed it over, grip-first, with a small formal courtesy that Papyrus talked about for a week. It went back by the door afterward. It always goes back by the door. Where the door leads, for him, is the question the household does not ask, and the bat, somehow, is the answer he gives anyway: ready, but only if it must be, and never at the table.\n\n## The Mount Ebott Season\n\nThe survey season is when Ness stopped being the household's quiet guest and became, quietly, one of its analysts. He felt the mountain's disturbance the way he feels all disturbed places — in the body first, a wrongness in the air's hinges — and his assessment, delivered over breakfast in his careful, unshowy way, reframed the household's entire picture: the anomalies were not Underground magic misbehaving, they were structural, doors in a house with too many walls, and whatever the expedition was doing at the relay was not opening them but straining the frame. Sans listened to all of it without joking, which the household has learned is Sans's highest form of attention, and the two of them have held a standing consultation ever since — the sentry who counts exits and the traveler who has walked through walls, comparing notes in low voices after dinner. Ness's route sketch, linking Snowdin's signal pattern to a refugee corridor he has documented in other broken geographies, is now part of the household's contingency planning. He drew it without being asked. He has drawn versions of it, the household suspects, in every world he has passed through. He is good at getting people out of places that have gone wrong. He does not talk about the ones where he arrived too late. The household can tell which corridors on the sketch those are, by the way he draws them: carefully, and with more detail than the others, and without names.\n\n## Open Questions in the Registry\n\nThe file's central open question is one the household has formally, unanimously agreed never to press: how he crosses worlds, whether he can go home, and why he has not. The agreement is on record, which is how you know the household considered it important enough to make official. Smaller questions remain and are handled gently: why he flinches, rarely but unmistakably, at the sound of the sky-sensors' sweep, as if he has heard that particular hum somewhere else, in a context the household cannot imagine. Why he counts the people in a room when he enters it, every room, every time, with a speed that is not casual. And the matter of the extra plate he sometimes sets — not for Mysteryman, not for Prunsel's near-place, but for someone whose name he never says, at the corner of the table, on certain evenings. No one has asked. Papyrus, who notices everything, simply fills the plate, and clears it later, and has never once mentioned it. Some guest chairs, the household has learned, are for people who are still walking home from very far away. The chair waits. Ness waits. The household waits with both of them, because that is what the household does.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "Ness has witnessed enough cross-world instability to recognize that Mount Ebott’s anomalies are not ordinary Underground magic."
                },
                {
                    "intel": 65,
                    "text": "He keeps a route sketch that links Snowdin’s strange signals to a distant refugee corridor."
                }
            ],
            "achievements": ["Recognized the Mount Ebott anomalies as structural rather than ordinary Underground magic", "Maintains a route sketch linking Snowdin's signals to a distant refugee corridor", "Has told Sans a joke went too far, and survived, multiple times"],
            "controversies": ["Origins remain unverified; the household has agreed, formally, not to press", "His calm in crisis has been described as 'suspiciously experienced'"],
            "relationships": [{"person": "Sans", "type": "Friend", "notes": "One of the few people Sans accepts corrections from; mutual, dry, durable."}, {"person": "Baby Bones", "type": "Household Kin", "notes": "Carries them at requested intervals; has never once complained on record."}, {"person": "Wing Gaster", "type": "Subject of Study", "notes": "Reads the sealed folder's geometry as door-architecture; the household wishes he would stop being right."}]
        },
        {
            "id": "wing_gaster",
            "name": "Wing Gaster",
            "epithet": "The Missing Wing",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 1,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "W",
            "summary": "A shadowed elder whose experiments and absence still shape the family's caution around impossible doors. Family records identify Wing Gaster as a brilliant scientist studying darkness and the architecture between worlds before vanishing from ordinary history. Sans knows more than he shares; Grandpa Semi keeps a sealed folder marked with a wing-shaped sigil.\n\n## The Sealed Folder\n\nWing Gaster's place in the tree is a sealed folder in Grandpa Semi's keeping, marked with a wing-shaped sigil and opened only by household consensus. Inside, the registry believes, are the last orderly records of the family's science branch: experiments, colleagues, and a list of witnesses whose pages were deliberately removed, not lost. The folder is not locked. It is respected, which has proven stronger.\n\n## The Architecture Between Worlds\n\nFamily records describe a brilliant scientist studying darkness itself — not as absence, but as architecture: the load-bearing spaces between worlds where doors could be built, or found. Then the records stop. Wing Gaster vanished from ordinary history so completely that even the gaps have gaps. Sans knows more than he shares, which the household has learned to read as a warning rather than a secret.\n\n## Echoes in the Record\n\nHis absence remains active. The geometry in the sealed file matches damaged Star Road records elsewhere in the campaign's archive, and the same figures appear in the interference patterns around the Mount Ebott survey. Whatever Wing Gaster was building or became, it has not finished happening. The Gaster Branch remains unresolved in the registry not because the family has stopped looking, but because every lead so far points at a door no one has agreed to open.\n\n## Before the Folder\n\nThe record before the vanishing is warmer than the legend, and the household keeps it that way on purpose. The young relatives who remember him — Grandpa Semi, in fragments; Sans, in silences that might be memory or might be something else — describe a scientist who was, first and stubbornly, a teacher. He taught the household's children the 'science of doors' as a game: which cupboards led only to shelves, which hallways shortened in winter, which shadows in the house fell the wrong way for the light, and why noticing was the first skill any good scientist needed. He was kind, the record insists, in the places where the record is allowed to insist. He kept a wing-shaped sigil as a personal mark, doodled it in the margins of serious work, and let the children doodle it back. The sealed folder's sigil is his hand. The folder is sealed with his own wax, which is the detail the chronicle finds most important and least discussed: whatever is inside, he chose the sealing, and he chose the rule — consensus, not force, not curiosity, not urgency. He trusted the household to open it together or not at all. The household has spent every year since trying to be worthy of the trust, and has not opened it, and is not certain whether that is faithfulness or fear.\n\n## The Witnesses\n\nThe excised witness list is the folder's wound, and the chronicle's best scholarship suggests it is also his last act of protection. Whoever removed the pages — and the household's quiet consensus, unsupported but unshakable, is that Gaster removed them himself, in the final hours before his records stop — removed them from the registry, not from the world. The names survive somewhere. The record shows the excision was done carefully, with a surgeon's respect for the surrounding entries: no collateral damage, no torn edges, a removal so clean the chronicle describes it as 'surgical, loving, and terrified.' Someone was in danger from being known in connection with his work, and he unmade the knowledge rather than the people. Which names, how many, and whether any of them are still walking around unidentified in the household's own history — the chronicle has its suspicions, filed in the appendix, cross-referenced against three members whose parentage lines are blank or questioned, and marked, in red ink, 'do not pursue without kindness.' The household has honored the marking. The questions stay open. The names stay safe. It is, Grandpa Semi maintains, exactly what he would have wanted, and Grandpa Semi is the only one who knew him well enough to say.\n\n## The Mount Ebott Season\n\nThe season brought him back into the household's active worry for the first time in years, and he did not even have to be present to do it. When the expedition's interference peaked at the Snowdin relay, the geometry in the signal gaps — the figures Times New Roman logged so meticulously — matched the sealed folder's diagrams figure for figure, and Sans, who reviewed the readings, went quiet for three days, a silence so complete that Papyrus set three extra places at every meal and the household moved through the house in soft voices. On the fourth day Sans said, to no one and everyone, 'he's not in the signal,' and then went back to joking, and the household exhaled, and did not ask how Sans knew, or what the alternative had been. The cross-references have continued all season: the same geometry in the damaged Star Road records, in the relay interference, in one page of Ness's route sketch that Ness redrew, quickly, when he noticed someone looking. Three archives, one signature. The chronicle's conclusion, stated with a formality that is almost bravery, is that Wing Gaster's work did not end — it is still running, somewhere outside ordinary history, and the Mount Ebott survey has walked, unknowing, into its footprint. The consensus request to open the folder is still pending. The household is not sure it is ready. The household is no longer sure it gets to keep waiting.\n\n## Open Questions in the Registry\n\nAlive, elsewhere, both, or neither — the file's first question has no answer and may not have a grammar. The door every lead points to remains unopened by household law, and the law has never been tested by a season quite like this one. The witness list's surviving names remain unverified, and the chronicle's 'do not pursue without kindness' marking has become, over the seasons, something close to a household value in itself: some truths are owed a gentler arrival than the truth usually gets. And the deepest open question is the one the household asks least and feels most: whether the game he taught the children — noticing which shadows fall wrong, which hallways shorten, which cupboards are not only cupboards — was education, or was preparation, and if it was preparation, what he was preparing them for. Sans, asked once, very gently, by Grandpa Semi, answered with a joke. It was not a funny joke. Grandpa Semi did not laugh. The matter was not raised again. The doodled wing sigils, in the margins of the oldest household documents, remain where they have always been. No one has ever painted over them. No one ever will.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "The sealed Wing Gaster file uses the same geometry found in damaged Star Road records and in the Mount Ebott survey interference."
                },
                {
                    "intel": 65,
                    "text": "Gaster did not vanish alone; a Bone-Line witness list was deliberately removed from the registry."
                }
            ],
            "achievements": ["Pioneered the study of darkness as architecture between worlds, per surviving records", "Remains the unresolved center of the family's science branch", "His file's geometry now cross-references damage patterns across three separate archives"],
            "controversies": ["Vanished from ordinary history with the witness list deliberately removed from the registry", "Every lead on his fate points at a door the household has not agreed to open"],
            "relationships": [{"person": "Grandpa Semi", "type": "Custodian of Record", "notes": "Keeper of the wing-sigil folder; opens it only by consensus."}, {"person": "Sans", "type": "Kin (Unresolved)", "notes": "Knows more than he shares; the household reads the silence as warning."}, {"person": "Prunsel", "type": "Linked (Disputed)", "notes": "Some entries describe a transformation by unfinished science; neither record is closed."}]
        },
        {
            "id": "my_brother",
            "name": "My Brother?",
            "epithet": "The Question-Mark Kin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "M",
            "summary": "A white-armored skeleton whose registry entry begins with a question mark because nobody can agree which branch he belongs to. My Brother? finds the uncertainty liberating: he offers help before credentials and treats every reunion as an opportunity to discover a new sibling. Papyrus admires his confidence; Times New Roman demands footnotes.\n\n## The Question Mark Entry\n\nHis registry entry begins with a question mark because no branch of the family can prove him and none will deny him. White-armored and unbothered, My Brother? treats the uncertainty as liberation rather than embarrassment: he belongs to the tree in the way questions belong to answers, and he has asked, politely, that the question mark stay.\n\n## Help Before Credentials\n\nHe offers assistance before anyone asks for his papers, which unsettles archivists and delights everyone else. Reunions are, to him, opportunities to discover a new sibling; he has claimed kinship with relatives who came to argue and left confused but fed. Papyrus admires the confidence openly. Times New Roman has requested footnotes eleven times and received hugs.\n\n## Family by Assertion\n\nThe household has slowly realized his method works: anyone he calls brother eventually starts acting like one. The registry declines to say whether that is genealogy, prophecy, or aggressive hospitality. His entry remains the only one in the archive with an unresolved citation and a perfect attendance record at dinner.\n\n## First Sighting\n\nHe appeared at a reunion he was not invited to, carrying a dish he should not have known how to make. The household was mid-argument — a branch dispute, the tedious kind, all lineage and no lunch — when the door opened and a white-armored skeleton walked in, set the dish on the table with the confidence of a relative who has eaten there a hundred times, and announced, warmly, that he had brought the recipe the household had been missing for years. It was the recipe. Exactly the recipe, down to the garnish Grandpa Semi remembered and no one else did. He ate with the family that evening, helped wash the dishes, fixed the latch on the back door without being asked, and when, at the end of the night, someone finally thought to ask which branch he belonged to, he considered the question with apparent delight and said, 'yes, probably.' He has been attending ever since. No invitation has ever been sent. None has ever been needed. He arrives knowing things a stranger could not know and nothing a stranger should, and the household's response, refined over seasons of delighted bewilderment, has been to stop treating it as a problem and start treating it as a service.\n\n## The Paperwork Paradox\n\nThe strangest thing about My Brother? is not his claims. It is the paperwork. Every relative he has 'discovered' — claimed as a sibling, welcomed as a brother, insisted into the family's wider circle — has subsequently turned up in the registry with documentation that was, somehow, already filed. A parentage line that was blank resolves, months later, into an entry no one remembers writing. A disputed lineage finds its missing record in a drawer that had been searched before. The entries are in no consistent hand. The chronicle has examined them for forgery and found none; they age correctly, the ink is right, the paper is right, and the information has, in every verifiable case, been correct. Times New Roman finds this professionally unbearable. My Brother? finds it normal, which is worse. He does not, he insists, do anything to the paperwork; he simply loves people, and the records, he says, have a way of agreeing with love eventually. The chronicle has no category for this. The chronicle has begun, in private, to suspect the records are not being forged but caught up — as if the archive itself, confronted with his certainty, is embarrassed into compliance. He has asked, again, politely, that the question mark stay. It is, he says, his favorite part.\n\n## The Mount Ebott Season\n\nThe survey season documented him, inadvertently, for the first time outside the household's own records, and the documentation is, characteristically, impossible. He walked the expedition's perimeter during the second week — openly, cheerfully, in full view of the survey team's observers, who logged him in their camp record as 'staff, local' and then could not explain the entry, because he was not staff, was not local in any sense their briefing supported, and had, by their own cameras' account, simply walked through a patrol pattern that should have challenged him, unchallenged, carrying what appeared to be snacks. He delivered the snacks to a surveyor having a bad evening, chatted for ten minutes, and left the camp with a complete, accurate, and entirely unrequested count of its personnel, which he reported at the household dinner table between courses. Sans listened to the count. Sans checked the count against his own. The count was exact, including one contractor the expedition's own rolls had not yet finalized. Asked how he had gotten through the perimeter, he said he had been expected, which he says about everything, and which, the household has noticed, keeps turning out to be true. The expedition's copy of their own camp log, later obtained by the household, shows the 'staff, local' entry annotated by a confused officer with a single question mark. The household has framed a transcription. My Brother? was delighted. He has asked that the question mark in his registry entry be understood as solidarity.\n\n## Open Questions in the Registry\n\nThe file is, by design and by affection, the archive's largest open question, and the household has stopped wanting it closed. The page-in-the-chest matter anchors it: Grandpa Semi found, in the cedar chest, a card in his own unreadable hand describing My Brother? in detail — before My Brother? had ever visited, before the household had heard of him, before, by Grandpa Semi's own account, Grandpa Semi had written it. He does not remember writing it. He has not destroyed it. He has, after long consideration, filed it under 'invitations, pending,' which is the closest thing in his system to an admission that the household's oldest archivist does not fully understand his own archive. The paperwork paradox continues. The hugs continue. The attendance record remains perfect. And the chronicle holds one entry Times New Roman has never shown anyone: a photograph from a reunion three seasons back, the whole household at the long table, and My Brother? in his usual seat — except that in the photograph, very faintly, at the far end of the table, there appears to be a second white armor, blurred, as if its wearer had been moving, or had not entirely arrived. He was asked about it once, gently. He looked at the photograph for a long time, and said, softly, without his usual cheer, 'that's nice. I'd like them to be included.' The chronicle has not pursued it. Some questions, the household has learned from this family, are not questions at all. They are doors, left open on purpose, with a light on behind them.",
            "secrets": [{"intel": 25, "text": "Every relative he has 'discovered' subsequently turned up in the registry with paperwork that was, somehow, already filed; no consistent hand, no forgery found."}, {"intel": 65, "text": "His question-mark entry was found already in the cedar chest — in Grandpa Semi's unreadable hand, describing him in detail — before anyone remembers writing or opening it."}],
            "achievements": ["Maintains a perfect dinner attendance record despite an unresolved registry citation", "Has successfully claimed kinship with relatives who arrived intending to argue", "Has kept his question mark through eleven footnote requests"],
            "controversies": ["No branch can prove him; none will deny him; the archive has no procedure for this", "His method of family-by-assertion has begun to work, which worries the archivists most"],
            "relationships": [{"person": "Times New Roman", "type": "Cousin", "notes": "The footnote war's cheerful side; answers citation requests with hugs and attendance."}, {"person": "Papyrus", "type": "Brother (Claimed)", "notes": "Admired immediately, adopted informally, documented eventually."}, {"person": "My Little Brother", "type": "Brother (?)", "notes": "The registry's two open questions; share a talent for belonging without papers."}]
        },
        {
            "id": "pretty_soon",
            "name": "Pretty Soon",
            "epithet": "The Impatient Cousin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "P",
            "summary": "A small green-scarfed cousin who promises that every delayed plan will happen 'pretty soon.' The phrase has become a family signal for hopeful patience rather than an actual deadline. Pretty Soon is excellent at making people wait without feeling abandoned, particularly when Baby Bones asks whether an absent relative is coming home.\n\n## A Deadline That Means Love\n\n'Pretty soon' began as a small evasion and became the family's official unit of hopeful time. When Pretty Soon says a delayed plan will happen pretty soon, he is not giving a date; he is making a promise that the waiting is inhabited, that someone is still working on it, and that no one has been forgotten. The household has learned to hear it correctly.\n\n## Waiting Without Abandonment\n\nHis particular gift is making people wait without feeling abandoned. This matters most when Baby Bones asks whether an absent relative is coming home. Pretty Soon kneels down, adjusts the green scarf, and answers in a voice that makes pretty soon sound like a place rather than a delay. The cedar chest records several cases where he was, in the end, exactly right.\n\n## The List\n\nHe keeps a notebook of every delayed plan the family has entrusted to him, annotated in small careful handwriting. Some entries have been crossed out — completed, quietly, without announcement. The rest remain, not as failures but as commitments with weather. The registry has stopped asking for dates. It asks whether Pretty Soon still has the notebook, and that is enough.\n\n## The First Promise\n\nThe phrase started small and earned its meaning. The household's account is consistent, which is rare for household accounts: a winter years ago, a relative missing from the table, and a child — not Baby Bones, an older child now grown and gone to the wider campaign — asking, night after night, whether they were coming home. The adults had begun to falter, the way adults do, into careful non-answers. Pretty Soon, young himself then, knelt down and said, 'pretty soon,' and then — and this is the part the household tells with its whole chest — he spent the next six weeks making it true. Letters sent. Contacts called. Favors spent with a quiet ferocity the household had not known he possessed. The relative came home in the seventh week, thinner and quieter and home. The child ran to the door. Pretty Soon stood at the back of the room, scarf askew, exhausted, and when someone thanked him, he said, lightly, 'well, I did say pretty soon,' as if he had merely reported a schedule rather than bent six weeks of the world to keep a promise made to a child. The phrase has meant what it means ever since. He has never once, the record shows, used it carelessly. Not once. The household would know. The household listens for it the way other families listen for weather.\n\n## The Notebook\n\nThe list is a working document, and the chronicle has been granted limited access to it, which is how you know Pretty Soon trusts the archive. Each entry is a delayed plan the family has entrusted to him — a reunion postponed, a repair deferred, a homecoming waiting on someone else's war to end — annotated in his small careful hand with status, dependencies, and, often, quiet notes about who is waiting and how they are bearing it. The crossed-out entries are the quiet pride of the book: plans completed without announcement, dates that arrived and passed into ordinary life, marked only with a line and sometimes a small drawn sun. The chronicle has verified several of the completions independently; every one checked out, including two the household had not realized he had been working. There is one entry the chronicle has seen and not been permitted to transcribe, at Pretty Soon's polite request: the oldest line in the notebook, in ink older than the notebook, in a hand that is not his. It reads, simply, 'the door, pretty soon.' He did not write it. He inherited it. He has been asked, gently, what door. He adjusted his scarf, in the way he does when the answer is large, and said only that he is keeping it warm for whoever wrote it, and that he suspects, from the ink, that they have been waiting longer than anyone should have to. The chronicle has cross-referenced the entry against the sealed Wing Gaster folder. The chronicle has not pursued it. Some commitments, the household agrees, outrank the archive.\n\n## The Mount Ebott Season\n\nThe season tested the phrase, and the phrase held. When the relay disturbance began — the stuttering sky, the strange signals, the household's low-grade fear that the mountain's problems had come to the door — Baby Bones asked the question the household had been dreading, in the direct way of small children: would the strange lights stop? Would the loud sky stop? Would everything go back? Pretty Soon knelt down. The whole room, the chronicle notes, went quiet to hear it. 'Pretty soon,' he said, and then, because he is Pretty Soon and the phrase is a working instrument and not a comfort, he spent the week doing what he always does: making the waiting inhabited. He walked the household through the noise on schedule. He kept a visible list of small returning normalcies — the heater fixed, the deliveries running, the Friday dinner on — and checked them off where Baby Bones could see. The relay disturbance eased at the end of that week. The causality is, of course, unprovable; the expedition's interference, the household's own quiet work, and a dozen other factors all contributed. Pretty Soon does not claim causality. He claims the schedule. He crossed 'loud sky' off his list at dinner, in front of Baby Bones, with a small drawn sun beside it, and the household cheered like it had won a war, because in the Bone-Line, keeping a promise to a child about the sky is not a small victory. It is the whole point.\n\n## Open Questions in the Registry\n\nThe file's questions are gentle, and the household handles them gently back. The old-ink entry — 'the door, pretty soon' — remains the largest, and the chronicle has formally adopted Pretty Soon's position on it: the commitment outranks the archive, and the archive will wait, because that is what Pretty Soon taught the archive to do. How he knows things — how the completions arrive when they do, how he bears the waiting of others without buckling under it — the household attributes to character, and the chronicle, unusually, agrees: no method has ever been documented, only steadiness. And there is one standing entry in the notebook the household has noticed and never mentioned: his own name, at the back, in his own hand, not crossed out. Under it, in the small careful writing, a single plan, undated, unannotated, and unexplained: 'rest, pretty soon.' The household has seen it. The household has quietly, collectively, without discussion, begun building the conditions for it — lighter loads, more help, a chair that is never asked to carry more than it can. He has not noticed. Or he has noticed, and is letting it happen, which is how he lets anything happen: with patience, and with the scarf adjusted, and with the certain, unbothered faith that pretty soon is a place, and the household is building it, and it will be worth the wait.",
            "secrets": [{"intel": 25, "text": "The crossed-out entries in his notebook carry dates; several plans were completed before anyone announced them, in his quiet handwriting."}, {"intel": 65, "text": "The notebook's oldest line, in ink older than the notebook and a hand not his, reads only 'the door, pretty soon' — the chronicle has cross-referenced it against the sealed folder."}],
            "achievements": ["Converted 'pretty soon' into the household's official unit of hopeful time", "Has delivered, eventually and quietly, multiple plans the registry had written off", "Answered Baby Bones's hardest questions without a single false promise"],
            "controversies": ["His notebook's uncrossed entries are not deadlines, and outside observers keep mistaking them for ones", "The registry has formally given up requesting dates from him"],
            "relationships": [{"person": "Baby Bones", "type": "Household Kin", "notes": "Kneels down, adjusts the scarf, and makes waiting feel inhabited."}, {"person": "Will", "type": "Cousin", "notes": "Will supplies the supplies; Pretty Soon supplies the patience; the relief network runs on both."}, {"person": "Grandpa Semi", "type": "Elder", "notes": "The cedar chest records several cases where pretty soon was, in the end, exactly right."}]
        },
        {
            "id": "helvetica",
            "name": "Helvetica",
            "epithet": "The Clean-Lined Cousin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "H",
            "summary": "A sharply dressed cousin who believes clarity is mercy. Helvetica designs signs, patrol notices, and puzzle instructions readable through a snowstorm. His friendly typographic rivalry with Cursive produces Snowdin's best public notices. Sans consults Helvetica whenever a message must be understood the first time.\n\n## Clarity Is Mercy\n\nHelvetica's creed is short and he has set it, naturally, in a clean sans-serif: clarity is mercy. His signs, patrol notices, and puzzle instructions are designed to be read through snowstorms, panics, and Papyrus's exclamation points. A message that must be understood the first time passes through his hands, and Snowdin's public notices have not caused a documented misunderstanding since he took them over.\n\n## The Typographic Rivalry\n\nHis friendly war with Cursive is the household's longest-running aesthetic dispute: precision against flourish, first-read legibility against keepsake beauty. They critique each other's drafts over breakfast and occasionally co-author notices that are both beautiful and unambiguous, which both of them find insufferable and quietly proud. Their rivalry produces Snowdin's best public documents, and both know it.\n\n## Understood the First Time\n\nSans, who communicates in shrugs and three-word instructions, consults Helvetica whenever a message cannot afford to be misunderstood. The results are the only documents in the household that Sans has never punned about, which Helvetica frames as his greatest professional achievement. The chronicle has verified this claim, grudgingly, with a footnote.\n\n## The Sign Painter's Start\n\nHe started before he was old enough to hold the brush properly, repainting Snowdin's storm-warped signs in a winter when the town could not afford a sign painter and could less afford unreadable ones. The first sign he ever painted — a crossing warning, block letters, high contrast, angled for the prevailing snow — was the first sign in that intersection's long history that no one misread, and the town noticed, because the town had been misreading that corner for a decade. He was summoned, praised, mildly scolded for working without permission, and handed every warped sign in town by the end of the week. The philosophy arrived fully formed, the way philosophies do when someone has simply been right all along and finally has the brush to prove it: a sign that must be read twice is a sign that has already failed someone, probably someone cold, probably someone in a hurry, probably someone who will not get a second chance at the corner. Clarity is mercy. He has painted that creed into every public surface in Snowdin since, and the town's accident records — which the chronicle has cross-referenced, because the chronicle cross-references everything — have improved every single year he has held the brush. He dresses sharply for the work. He has always dressed sharply for the work. A public notice, he maintains, is a promise made to strangers, and you do not make promises to strangers in a wrinkled coat.\n\n## The Second Layer\n\nHis notices have two layers, and the household learned about the second one the way the household learns most things: by needing it. In the war years, with Snowdin's streets occasionally watched by unfriendly eyes, Helvetica began designing patrol notices and public instructions with a hidden stratum — a second set of directions legible only at a specific angle, in specific light, to a reader who knew to tilt the page. To an ordinary reader, the notice said what it said. To a relative, it said where to go, which routes were cold, and which doors were currently safe. He taught the angle to the household in one evening, calmly, as if he had been waiting years for an excuse, and the system ran for the rest of the war without a single compromise. He has never retired it. Snowdin's current public notices still carry the second layer, updated continuously, and the household's relief network still reads it — a quiet infrastructure of tilted pages running beneath the town's ordinary literacy. He considers it his real work. The public signs, he says, are the part he lets strangers see. The chronicle has asked, carefully, where he learned to design for two readers at once. He has answered, carefully, that he learned it from someone who wrote for governments, which the chronicle has cross-referenced, with a small chill of recognition, against Cursive's unanswered questions. The two cousins have never discussed the connection. They critique each other's drafts over breakfast. The drafts, the chronicle notes, have gotten better every year.\n\n## The Mount Ebott Season\n\nThe season produced the incident Helvetica has least enjoyed and the household has most appreciated. When the expedition's instruments began sweeping Snowdin's infrastructure, Helvetica — whose job puts him at every public surface in town — noticed the team's posted survey notices before anyone else, and noticed, with the trained eye of a man who reads documents for a living, that the notices were written to be misunderstood: technically accurate, operationally misleading, designed to make readers look away from the relay corridor. He redrafted counter-notices overnight, in his clearest hand, and posted them beside the expedition's own, so that any resident reading one would inevitably read the other. But the season's sharpest moment came privately: the household found, in his drafts folder, a burned-and-recovered evacuation route he had designed and then destroyed, a route that ran, precisely and unmistakably, through the sealed lower-Ebott relay access. He had the geometry right. He could not say how he had the geometry right. He had drawn it, he said, from the same instinct that draws his second layers — the sense of where a reader will need to go when the ordinary routes fail — and then burned it because a route to a sealed door is not a document he wanted existing. The household kept the recovered draft. Sans reviewed it in silence and said nothing, which Helvetica has chosen to interpret as approval, and which the chronicle interprets as concern. He has not drawn it again. He has not needed to. It is on file, in Will's evacuation doctrine, in a folder marked 'last resort,' in Helvetica's steadiest hand.\n\n## Open Questions in the Registry\n\nThe mentor question links his file to Cursive's and, the chronicle suspects, to something older than both of them: a pre-war school of document design that served governments and vanished in the war years, two of whose students appear to have washed up, separately, in the same household, in the same small town, within a few years of each other. Neither cousin names the school. Both practice its methods. The chronicle has filed the parallel and left it open, per household policy on questions that answer themselves in time. The burned route remains in the evacuation doctrine, unexplained, and Helvetica has begun, the chronicle notices, tilting his head at the relay corridor's public notices the way he tilts pages to read the second layer — as if he suspects the mountain itself has started writing in two strata, and he is trying, patiently, to read the one the expedition missed. He has asked Sans, twice, for confirmation he will not get. He has gone back to painting signs. The signs are, as always, perfect. The chronicle records one small detail it cannot explain: since the relay season, every public notice Helvetica paints carries, in the corner, a small wing-shaped flourish that is not his usual style. Asked about it, he said he thought the town's documents should look like they belonged to the family that keeps the town. The household has not corrected him. The household has quietly, unanimously decided he is right.",
            "secrets": [{"intel": 25, "text": "Snowdin's public notices carry a second layer of instructions legible only at an angle, in specific light — a wartime system he still updates daily for the relief network."}, {"intel": 65, "text": "A burned draft recovered from his folder shows an evacuation route through the sealed lower-Ebott relay access; he drew the geometry right and cannot explain how."}],
            "achievements": ["Reduced documented public-notice misunderstandings in Snowdin to zero since taking over signage", "Co-authors, with Cursive, the town's most legible and most beautiful notices", "Produced the only documents Sans has never punned about"],
            "controversies": ["The typographic rivalry with Cursive occasionally delays notices pending breakfast arguments", "Considers the chronicle's current typeface a personal grievance"],
            "relationships": [{"person": "Cursive", "type": "Cousin / Rival", "notes": "Precision versus flourish; their co-authored notices make both of them insufferably proud."}, {"person": "Sans", "type": "Cousin", "notes": "Consulted whenever a message cannot afford to be misunderstood; frames the resulting silence as triumph."}, {"person": "Times New Roman", "type": "Cousin", "notes": "Allies on legibility, divided on serifs; a respectful cold war."}]
        },
        {
            "id": "gee_lady",
            "name": "Gee Lady",
            "epithet": "The G-Shaped Aunt",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "G",
            "summary": "A jubilant aunt whose letter-shaped silhouette appears at every birthday and victory dinner. Nobody agrees what the G originally stood for, but everyone agrees that Gee Lady can spot who is standing apart from the group. She brings frosting, ribbon, and an aggressively encouraging speech before anyone can claim they are fine.\n\n## The G Stands for Gathering\n\nNo one agrees what the G originally stood for — generosity, gathering, and 'get over here, sweetheart' have all been proposed — but her letter-shaped silhouette appears at every birthday, homecoming, and victory dinner the household has held in living memory. She considers attendance mandatory in the way that cannot be enforced but is somehow never resisted.\n\n## Spotting the Outsider\n\nHer real gift is radar for the person standing apart from the group: the new arrival, the quiet cousin, the guest hovering near the door. Gee Lady crosses the room with frosting, ribbon, and an aggressively encouraging speech calibrated to make refusal feel rude and loneliness feel expired. No one has ever successfully claimed to be fine in her presence. She checks twice.\n\n## The Speeches\n\nHer toasts are long, unashamed, and individually tailored, naming each person's contribution to the year in a voice that carries to the next district. Recipients are expected to endure them standing. The household considers a Gee Lady speech a rite of passage, a public record, and, for the shy, a benign ordeal survived together. Times New Roman has transcribed three of them for the chronicle, against his own better judgment, because they were accurate.\n\n## The First Party\n\nThe founding story of Gee Lady is a wartime story, and the household tells it the way it tells all its truest stories: with pride and a small, unresolved mystery at the center. The war years had thinned the household — rationing, absence, the low gray exhaustion of a family running on reserves — and a child's birthday was approaching that no one had the heart or the supplies to mark. Gee Lady, who was not yet Gee Lady and was simply the aunt who refused, announced a party. There was nothing to make it from. The household watched her make it anyway, out of ribbon saved from years of parcels, frosting stretched from rations by methods she has never documented, and a speech she wrote at the kitchen table until the candles were lit. The party happened. The child's face, the record says, was worth every war. And then there is the cake: a cake the household could not have baked, with ingredients the household did not have, which appeared on the table finished, in her handwriting on the plate, and which she has attributed, over the decades, to 'help,' to 'friends,' and once, memorably, to 'the G.' No one has ever established where the cake came from. No one who ate it has ever wanted to. The party became annual. The annual became institutional. The silhouette became letter-shaped, somehow, in the way of family legends that are truer than facts.\n\n## The Guest Count\n\nHer counts are the household's most reliable instrument and its gentlest mystery. Every dinner Gee Lady has ever planned has seated exactly the number of people who arrived — including the unannounced, including the refugees who appeared at the door mid-meal, including, on three documented occasions, people the household had not met at the time the invitations went out. She sets the extra places in advance. She has never once been wrong, and she has never once explained the method, except to say, with total confidence, that you can always tell how many are coming if you love them first. The chronicle has tracked the counts for two seasons and confirmed the record: zero error, including a dinner that seated fourteen where thirteen were expected, the fourteenth being a lost traveler who knocked at exactly the moment Gee Lady set the fourteenth plate, as if the plate had summoned her. The household finds this comforting. Intelligence-minded relatives find it alarming. Gee Lady finds the alarm adorable and has offered the alarmed relatives cake. The most unsettling entry in the count record is the photograph from two winters ago: a victory dinner, the whole household present, and in the background, at a place setting no one remembers setting, an extra chair — occupied, blurred, as if whoever sat there had moved during the exposure, or had not entirely been there for it. Gee Lady, shown the photograph, nodded once, satisfied, and said, 'good, they ate.' She has declined every follow-up question. The photograph is in the chronicle. The chronicle does not annotate it. Some annotations, Times New Roman has written in the margin, would be rude.\n\n## The Mount Ebott Season\n\nThe survey season got fed, which is how the household knows it survived. When the expedition settled in at the mountain — strangers, armed with instruments and bad intentions the household could sense but not prove — Gee Lady did what Gee Lady does: she planned a dinner. Not for the household. For the survey team. The household objected. The household lost. The dinner happened, at the long table, with the expedition's own confused officers seated between Papyrus and Baby Bones, and Gee Lady at the head delivering a speech that named, with aggressive encouragement and surgical precision, every member of the survey team by name and every small decent thing each of them had done since arriving in Snowdin. The effect, the chronicle reconstructs from three accounts, was devastating: you cannot surveil a town whose aunt knows your name and your kindnesses and is publicly proud of both. The expedition's morale report, later obtained, mentions 'the letter lady' twice, and notes, in the baffled language of a military document confronting a grandmother, that 'local social infrastructure is more robust than anticipated.' Two surveyors quietly resigned their postings that winter. One of them has eaten at three Fridays since. Gee Lady considers the season a success, and has said, for the record, that no one is beyond a dinner, that surveillance is mostly loneliness with paperwork, and that she has never in her life met a person who could not be reached through their better nature if you simply addressed it loudly enough, in public, with cake. The chronicle notes that she has the record to prove it. The record is long. The record is frosted.\n\n## Open Questions in the Registry\n\nThe G remains officially disputed, and she changes the story by occasion, which the household suspects is the point: a name that means everything cannot be pinned to one thing. The cake question has passed out of active investigation and into household mythology, where it is more useful. And the chronicle holds the photograph, unannotated, and one other detail it has never published: Gee Lady, at every dinner, raises her glass first to the empty chairs — the absent, the missing, the unresolved — before she raises it to the living. She names them. All of them. From memory, without a list, in a voice that carries. The household stands for it. The household has always stood for it. And the chronicle has noticed — has noticed, and has not written it into the public record, because some things are filed in the chest and nowhere else — that the list of names she raises has never once included anyone who did not, in the end, come home, or get honored, or get a chair. She toasts the missing as if they are late. So far, impossibly, sweetly, with frosting on the rim of the glass, she has been right every single time.",
            "secrets": [{"intel": 25, "text": "Her guest counts are never wrong: every dinner she has planned seated exactly the number who arrived, including unannounced refugees, with extra plates set in advance."}, {"intel": 65, "text": "A victory-dinner photograph shows the extra chair occupied and blurred; shown the image, Gee Lady nodded and said only, 'good, they ate.'"}],
            "achievements": ["Attended 100% of recorded household birthdays, homecomings, and victory dinners", "Has located and retrieved every outsider hovering near a door in living memory", "Delivered three speeches considered accurate enough for the chronicle"],
            "controversies": ["The G's original meaning remains disputed; she changes the story by occasion", "No one has ever successfully declined one of her speeches; the registry suspects enchantment, she denies it with frosting"],
            "relationships": [{"person": "Baby Bones", "type": "Household Kin", "notes": "First audience of every birthday; considers the rattling applause the review that matters."}, {"person": "Speen Kind of Down Lately", "type": "Nephew", "notes": "Accepts 'okay' from him only with documentation; he finds this exhausting and correct."}, {"person": "Papyrus", "type": "Nephew", "notes": "The household's two loudest hearts; their joint toasts have broken glass."}]
        },
        {
            "id": "garbage_brother",
            "name": "Garbage Brother",
            "epithet": "The Smiley Trashbag",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "G",
            "summary": "A bag-wrapped brother who salvages bent puzzle parts, cracked toys, and almost-useful cookware. Baby Bones's favorite rattle and Papyrus's emergency spaghetti strainer both came from his workbench. He dislikes the nickname, but accepts it because it reminds Snowdin that discarded does not mean worthless.\n\n## The Workbench\n\nGarbage Brother's workbench is an argument against disposal. Bent puzzle parts, cracked toys, warped cookware, and objects that are almost useful arrive at his door and leave working, or leave as something better. Baby Bones's favorite rattle was salvaged from a broken music mechanism. Papyrus's emergency spaghetti strainer was once, he claims, a chandelier. Neither item is discussed without pride.\n\n## Discarded Is Not Worthless\n\nHe dislikes the nickname and accepts it anyway, because it carries the lesson he wants the household to keep: discarded does not mean worthless. Objects, like relatives, are frequently judged by their worst condition. His quiet insistence on second uses has shaped the family's whole membership culture — the Bone-Line does not give up on dented things, and it knows exactly who taught it that.\n\n## Almost-Useful, Kept Anyway\n\nHis shelves hold a category he calls almost-useful: parts with no current purpose and a suspected future one. The household finds this either hoarding or prophecy, and the record keeps siding with prophecy at inconvenient intervals. The registry has recorded four emergencies solved by an item he 'had lying around.' He has stopped counting. He has not stopped collecting.\n\n## The Workbench's Origin\n\nThe workbench started with one object and one decision, and the household keeps the story because he never tells it himself. In the thin years after the war, when Snowdin was rebuilding from what it could scavenge, a puzzle mechanism from the old corridor came out of the rubble bent beyond any official repair schedule — the town's assessors marked it scrap, because the town could not afford to fix everything, and something had to be scrap. He was young. He took the mechanism home. He did not know, then, how to fix it; he learned, over the winter, by failing at it nightly at a bench he built from other scrap, and in the spring the mechanism worked, and the corridor's first restored puzzle opened to a town that needed, badly, to see something broken become whole. He has kept the bench since. The first mechanism sits on the shelf above it, unrepaired-looking on purpose — he fixed it again later, then bent it back, he says, so the bench would remember what it was for. Everything since has followed the same grammar: the thing no one will take, taken; the patient winter; the second life. He wraps himself in bags the way he wraps his salvage, the household has noticed — in layers of recovered material, nothing new, everything earned a second time. He has never confirmed the parallel. He has never denied it. He does not talk much. The workbench talks for him, and it has been making the same argument, in wood and metal and salvaged wire, for decades: nothing is finished until he says it is.\n\n## Almost-Useful, Cataloged\n\nThe almost-useful shelves are his masterwork and his most controversial furniture. Every part on them has no current purpose and, in his assessment, a suspected future one, and the system by which he finds any given item in seconds — by feel, by a logic no one else can follow, by what the chronicle can only call acquaintance — has been the subject of two formal household inquiries and zero successful explanations. The prophecy track record is the reason the inquiries ended inconclusively rather than in a cleanup. Four documented emergencies: a boiler valve failure in midwinter, solved by a fitting he had 'had lying around' for six years; a broken evacuation cart, repaired in minutes with a wheel he salvaged from a toy; a communications failure during the war years, bridged by a wire assembly he built from a broken music box; and, strangest, a lock that needed replacing on a door the household had not yet decided to lock, for which he produced, without being asked, the exact hasp, the day before the decision was made. He does not predict emergencies, he insists. He simply keeps what things will need. The distinction has never satisfied Times New Roman. It has satisfied the emergencies, which is what matters. The shelves have grown. The household has stopped asking for inventory. The inventory, Garbage Brother maintains, would take longer than the emergencies, and the emergencies cannot wait, and he is, as always, exactly right, exactly when it counts.\n\n## The Mount Ebott Season\n\nThe season revealed the depths of his quiet infrastructure, and the household is still processing the implications. When Dirty Brother needed components to reroute the heating grid during the survey's resonance sweeps — the masking operation that hid the relay's signature from the expedition's instruments — the components came, every one of them, from the almost-useful shelves, within reach, within minutes, as if the shelves had been waiting for the season specifically. More unsettling, and documented carefully in the chronicle's appendix: four salvaged parts Garbage Brother installed in Snowdin's heating grid over the past decade — routine repairs, unremarkable at the time — match, exactly, components listed as missing from a Fawful-era machine cache discovered elsewhere in the campaign's records. He installed them years before the cache was found. He had them before anyone knew the cache existed. His position, delivered with his usual economy of words, is that good parts are good parts, that he salvaged them from honest rubble in honest Snowdin, and that if some machine somewhere was going to be missing components, he is glad they were somewhere warm, doing honest work, keeping a town alive through winter. The chronicle has verified the installation dates. The chronicle has verified the cache inventory. The chronicle has verified, with a small and growing unease, that the rubble he describes salvaging from was, before the war, a storage site no record connects to anything. He will not discuss the storage site. He will discuss the strainer, the rattle, the hasp, the valve, the wheel. He will discuss anything that was broken and is now whole. The storage site is the one question the workbench does not answer, and the household, which owes him its winters, has decided — for now — to let the question wait on the shelf, almost-useful, until its future arrives.\n\n## Open Questions in the Registry\n\nThe file's questions are, appropriately, about where things come from, and the household handles them with the same patience Garbage Brother handles salvage. The storage site remains undiscussed and unverified. The rattle's hidden compartment — 'for later,' Garbage Brother says, and will say nothing more — is the household's most affectionate unresolved thread: something is coming that the rattle is for, and the household has agreed, without agreeing, that when it comes, the little skeleton who carries the rattle will be ready, because the brother who built it made sure. And the chronicle holds one small, unexplained entry: every winter, on the anniversary of the first mechanism's restoration, a bent object appears on the workbench overnight that Garbage Brother did not put there — a part, a fragment, something almost-useful, left by hands he has never identified and does not, he says, need to. He fixes it. He has fixed every one. He adds them to the shelf above the bench, with the first mechanism, in a row that has grown, quietly, for years. The chronicle has counted them. The chronicle has noticed that each one, once fixed, matches a component in something the household keeps — the rattle, the strainer, the evacuation cart, the door hasp — as if someone, somewhere, has been sending him the pieces of the household's future, one bent part at a time, confident he will make them whole. He has never once failed the confidence. The workbench waits. The shelf grows. The almost-useful, the household has learned, is just the useful, early.",
            "secrets": [{"intel": 25, "text": "Four documented emergencies have been solved by items he 'had lying around,' including a lock replaced one day before the household decided to install it."}, {"intel": 65, "text": "Salvaged parts he installed in Snowdin's heating grid over the past decade match components missing from a Fawful-era machine cache found elsewhere — installed years before the cache was discovered."}],
            "achievements": ["Restored Baby Bones's rattle and Papyrus's emergency strainer from salvage", "Solved four documented emergencies with items he 'had lying around'", "Embedded 'discarded does not mean worthless' into the family's membership culture"],
            "controversies": ["His almost-useful shelves have been classified as hoarding or prophecy depending on the week", "Dislikes the nickname; the household continues it on his own stated principle"],
            "relationships": [{"person": "Baby Bones", "type": "Household Kin", "notes": "Chief patron of the workbench; all rattling salvage is reserved for inspection."}, {"person": "Dirty Brother", "type": "Brother", "notes": "One repairs the warm roads, the other rebuilds what the roads carry; shared workshop, shared soot."}, {"person": "Pet Rock", "type": "Household Kin", "notes": "Built its padded pocket from a salvaged case; considers it his finest almost-useful success."}]
        },
        {
            "id": "starman",
            "name": "Starman",
            "epithet": "The Quiet Visitor",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "S",
            "summary": "A silent gray visitor connected to the family by old favors and a talent for arriving when the sky changes. Starman guided several relatives through a whiteout using a light that did not cast shadows. Will leaves a chair for him at dinner, and Sans watches the horizon rather than the guest whenever he appears.\n\n## Arrivals When the Sky Changes\n\nStarman comes and goes by a schedule the household has learned to read: he appears when the sky changes, silent and gray, usually at the edge of a crisis the family did not know was coming. His connection to the Bone-Line is built on old favors that no one fully recounts, repaid in guidance rather than thanks. He never explains the timing. The timing has never been wrong.\n\n## The Shadowless Light\n\nThe household's founding story about him is the whiteout: a party of relatives lost in a storm that buried every landmark, guided home by a light that cast no shadows. No one who was there describes the experience comfortably, but everyone describes arriving safely. Since that night, Will leaves a chair for Starman at dinner whether or not he is expected, and the chair is never removed.\n\n## The Horizon Watch\n\nHis presence is welcome and not entirely calm. Sans watches the horizon rather than the guest whenever Starman appears, as if checking what else came in with him, and the registry has never recorded him casting a reflection, a shadow, or a first impression. He is listed as 'expected, eventually,' the only member with that status. He has never objected to the entry. He has never needed to.\n\n## The Whiteout, In Full\n\nThe household's most-told story about him is also its least-comfortable one, and it has never been fully written down because the people who were there can only tell it in pieces. The whiteout of that winter came on without warning — a storm that erased the world past arm's length and buried every landmark the lost party had been navigating by. Five relatives, including two children, somewhere on the open road, with the temperature dropping and the dark coming. The household had organized the search and was failing, because there was nothing to search with; the storm had eaten the horizon. Then: a light. Not a lantern, the survivors say — lanterns flicker, lanterns throw shadows, and this light did neither. It stood in the air like a fact, gray-white and steady, and beside it, a gray figure, silent, already turning to walk into the storm as if the walking had been agreed on long ago. The party followed, because the alternative was freezing, and the light led — not by the shortest route, the survivors noticed, but by a route that avoided things: a ridge that would have corniced, a stretch of ice no one could see, a place the storm seemed, impossibly, to be thicker on purpose. One survivor, the one at the back of the line, looked directly at the figure's face and has never been able to describe it, which is not the same as forgetting; she says she remembers it clearly, and that the remembering has no words in it, and that these are different problems. They arrived at the household door warm. The light was gone. The footprints in the snow led to the door and stopped. None led away. The household has told the story every winter since. No one has ever finished it comfortably. Everyone finishes it safely, which, the household maintains, is the part that matters.\n\n## The Chair's History\n\nWill's chair is policy now, but it started as gratitude and grew into record-keeping. The first winter after the whiteout, Will set a place at dinner on the anniversary, on instinct, and the chair sat empty, and the household felt, all of them, that the emptiness was the correct, honored shape of the thing. The second winter, the chair was occupied — no arrival documented, no door recorded opening, just a gray presence at the table at the moment the meal began, eating nothing, staying through the whole dinner, and gone by the clearing, with the chair warm afterward as if someone had only just stood up. It has happened, intermittently, ever since: some anniversaries empty, some occupied, no pattern the household has decoded, and on three documented mornings since, the chair has been found warm at breakfast with no dinner having been held the night before, as if the visits run on a calendar the household cannot see. Will considers the chair inventory. He is not joking, exactly; the evacuation plan accounts for it, the seating chart preserves it, and the household's guest ledger lists Starman under 'expected, eventually,' a status invented for him and never reused. He has never been invited. He has never failed to be welcome. The chair, the household has come to understand, is not furniture. It is the household's answer to a question the whiteout asked: what do you owe the thing that brought your family home? You owe it a seat. Forever. Without condition. Without understanding. The chair stays.\n\n## The Mount Ebott Season\n\nThe season announced itself to the household through him, which is how the household knows it mattered. He appeared the night the relay went active — not at the door, not at the table, but at the edge of the yard, facing the mountain, in the exact minute the sky stuttered, and Sans, who had been watching the horizon the way Sans watches it when Starman is due, saw him first and said, very quietly, 'oh, so it's that kind of season.' He stayed three nights. He did not come inside. On the second night, two relatives who had gone missing on the mountain road that afternoon — missed, mourned-prematurely, the search already organizing — walked into the household at dawn, unhurt, unable to explain the route, describing only a gray light and a figure that walked ahead of them and never once turned around. The expedition's instruments, the chronicle later learned, had documented the same light at the relay stress site that night: a point source, shadowless, stationary, which their report classifies as 'atmospheric anomaly, unexplained.' The household does not classify it. The household set an extra place at breakfast for the two returned relatives and left the chair, as always, for him. On the third morning he was gone, and the yard showed footprints to the door and none away, the same grammar as the whiteout, the same signature. The chronicle's entry for the season's first week ends with a line Times New Roman wrote and did not strike through, which is rare for him: 'he came early this time.' The household has been thinking about that sentence all season. What, exactly, was he early for.\n\n## Open Questions in the Registry\n\nWhat he is remains the file's largest open question, and the household's official position — held firmly, filed formally — is that the question is secondary to the chair. The favors that connect him to the family predate the whiteout; the oldest cards in the chest reference 'the gray guide' in contexts Grandpa Semi will summarize only as 'older than me, kinder than the record, owed more than we can pay.' The shadowless light has now been documented at three separate dimensional stress sites across the campaign's geography, always guiding, never threatening, always gone before it can be addressed. The face that cannot be described remains undescribed. And the chronicle holds one standing instruction, written in Grandpa Semi's hand and countersigned by Sans, which the household treats as law: if Starman ever speaks — a full sentence, addressed to the household, unprompted — whoever hears it is to listen completely, interrupt nothing, and report every word, because in all the documented history of the family, across every arrival and every whiteout and every warm chair, he has never once, in anyone's presence, said a word. The household suspects that when he does, it will be the season's real news. The household suspects he has been waiting, all these years, for something worth saying. The chair waits with him. The horizon, per Sans, is being watched. The record stays open, patient, and grateful, which is the only way the household knows to keep a promise to something it cannot understand.",
            "secrets": [{"intel": 25, "text": "Every whiteout since the founding rescue has ended with fresh footprints leading to the household door and none leading away."}, {"intel": 65, "text": "The shadowless light has now been documented at three separate dimensional stress sites across the campaign, always guiding people the registry had listed as lost."}],
            "achievements": ["Guided a lost party through a total whiteout using a light that casts no shadows", "Has arrived before every household crisis he has attended, without documented warning", "Earned a permanent chair in Will's dinner rotation"],
            "controversies": ["Has never been documented casting a shadow, reflection, or explanation", "Sans watches the horizon, not the guest, whenever he appears; the registry notes this under 'weather'"],
            "relationships": [{"person": "Will", "type": "Host", "notes": "The chair is his, expected or not; Will considers this inventory, not hospitality."}, {"person": "S' a Real Star", "type": "Fellow Celestial", "notes": "Two lights, two chairs, no documented shared sky."}, {"person": "Sans", "type": "Observed By", "notes": "Watches the horizon when Starman arrives; Starman has never once turned to look back. Or has. The record is unclear."}]
        },
        {
            "id": "quantity",
            "name": "Quantity",
            "epithet": "The Many-Boned Cousin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "Q",
            "summary": "A cooperative cluster of skeletons sharing one rolling chassis, several opinions, and an impeccable sense of timing. Quantity handles work requiring many hands: moving furniture, building puzzles, and carrying soup for crowds. Their family status began as a joke when Baby Bones called every skull uncle; the registry made it official.\n\n## Many Hands, One Chassis\n\nQuantity is a cooperative cluster of skeletons sharing one rolling chassis, several opinions, and an impeccable sense of timing. They take every job that requires many hands at once: moving furniture, building puzzles in a single afternoon, carrying soup for crowds while it is still hot. Coordination that should be chaos comes out of the chassis as choreography.\n\n## Uncle by Acclamation\n\nTheir official family status began as a joke. Baby Bones pointed at the rolling chassis, declared every skull in it uncle, and the household did what it always does with Baby Bones's rulings: it filed them. The registry made the uncles official, to the visible delight of every skull involved and the documented despair of Times New Roman, who could not cite a precedent.\n\n## Several Opinions, One Timing\n\nInternally, Quantity debates. Different skulls favor different plans, argue in overlapping clatter, and occasionally vote. What never wavers is the timing: however the argument resolves, the chassis moves as one, arrives together, and has never once been late to a meal or an emergency. The chronicle records them as one member with a committee, which they consider fair.\n\n## The Chassis\n\nThe chassis was built, not found, and the story of its building is the household's best document on what the family believes about personhood. The skulls came to Snowdin separately, over years — a runner with a damaged leg, a pair of cousins who refused to be filed apart, a quiet one the record describes only as 'arrived carrying tools' — and the household, being the household, seated them all, and the seating created a problem no one had faced before: relatives who were individually incomplete and collectively fine, in a house built around individual chairs. The solution was collective too. Over one long winter, in the corner of Garbage Brother's workshop, the skulls built the chassis together — a rolling frame of salvaged parts, engineered so that every skull could work from it, see from it, and argue from it at the same time. Garbage Brother helped with the axle. Dirty Brother helped with the bearings. Baby Bones supervised, from a lap that rotated, because the chassis was designed, from the first sketch, to take passengers. The first roll across the household floor was, the chronicle records, accompanied by cheering from every skull at once, which is the only documented instance of a standing ovation delivered by a single seated entity. They have been rolling together since. They describe themselves, when asked, as a meeting that learned to walk. The household describes them as family, which is shorter, and has always been the point.\n\n## The Passenger Ledger\n\nThey keep a ledger of everyone the chassis has carried, and the ledger is the file's strangest and most tender document. Every passenger is recorded: name, date, cargo, condition at pickup, condition at delivery. Baby Bones rides weekly. Papyrus has been carried, triumphantly, to three puzzle unveilings. Will's evacuation plan assigns the chassis the household's heaviest and most fragile loads, because the chassis does not drop things and does not tire. And then there are the entries the household has noticed and, per policy, not pressed: names in the ledger that appear in no other household record. 'Traveler, cold, carried to warm road junction.' 'Two, unnamed, moved beneath the watched street, per D.B.' 'One, quiet, carried to the door, asked to stay, did.' The chassis has been moving people through Snowdin's crises for years — people the household's other records never captured, delivered to safety by a rolling committee that considered the work ordinary and logged it anyway, because someone should remember the carried. The chronicle has cross-referenced the ledger against the relief network's records and found matches for roughly half the unnamed entries. The other half belong to people no surviving record accounts for. The chassis, asked about them, clattered — which is how Quantity laughs — and said, through whichever skull was speaking that day, that a passenger is a passenger, and the ledger is the record, and isn't that enough. The household has decided it is enough. The ledger continues. The names, unnamed or not, are kept.\n\n## The Mount Ebott Season\n\nThe season put the chassis to work in every sense, and the chassis delivered, as the chassis does. They ran soup to the survey camp under the pretense the expedition accepted and the household admired — 'many hands, no questions,' a delivery service so cheerfully competent that the camp's own logistics officer tried, unsuccessfully, to hire them — and in doing so gave the household its closest, calmest look at the expedition's interior, reported at dinner in overlapping sentences by four skulls at once, which Papyrus considered the most entertaining intelligence briefing in family history. But the season's real entry is the one the chronicle handles carefully. On the night the relay disturbance peaked, the chassis was crossing the household hallway — mid-soup, mid-argument about seasoning — when every skull in it stopped, turned, and faced the same wall, in the same instant, without a word. The wall they faced shares a boundary with the room where Grandpa Semi keeps the sealed Wing Gaster folder. They held the pose for eleven seconds. Then the argument about seasoning resumed, the soup continued, and the chassis rolled on, and when the household asked, gently, what that had been, the skulls looked at each other, conferred in clatter, and said, through the quiet one, the one the record describes as 'arrived carrying tools': 'we were counted.' They have declined to explain the sentence. They have declined to say counted by what, or counted as what, or why the counting came from the direction of the sealed room. They resume work immediately after any question about it, which is how Quantity ends a discussion: by being, suddenly and impressively, needed elsewhere. The chronicle has filed the eleven seconds under 'relay disturbance, household effects.' The chronicle has cross-referenced it against Prunsel's sighting record, against the folder's geometry, against Ness's route sketch. The cross-references do not resolve. The chassis keeps delivering soup. The timing, as always, is impeccable. The household has learned that with Quantity, the timing is the message.\n\n## Open Questions in the Registry\n\nHow many skulls, exactly, is the file's standing joke and its standing question, and the household has stopped expecting a stable answer. The count has changed, over the years, without ceremony: a skull joins the chassis and is family, a skull steps away and is still family, and the registry, which has processed the changes with increasing exhaustion, now lists Quantity's membership as 'several, current.' The passenger ledger's unnamed entries remain the file's quiet weight — people carried to safety who no other record captured, whose survival is documented in one place only, in the chassis's careful hand, which is hand, plural, and the chronicle has decided that a record kept by a committee of kind strangers is as authoritative as any crown's archive, more so, because it was kept for the passengers rather than the crown. And the eleven seconds remain unresolved: what counted the chassis, from the direction of the sealed folder, on the worst night of the season. The quiet one's answer — 'we were counted' — has become, in the household's private vocabulary, a phrase for the feeling of being seen by something large, and the household uses it gently, and the chassis hears it, every time, and clatters, which might be laughter, and might be recognition, and might be the only answer anyone is going to get. The chassis rolls on. The ledger grows. The uncles, every one of them, remain on call, and remain, per Baby Bones's original and binding decree, uncles, forever, to a household that has never once found a job too large, a passenger too small, or a family too strange to carry.",
            "secrets": [{"intel": 25, "text": "The chassis's passenger ledger includes names that appear in no other household record, every one marked 'carried safely.'"}, {"intel": 65, "text": "On the night the relay peaked, every skull in Quantity turned at once to face the wall sharing a boundary with the sealed Wing Gaster folder — 'we were counted,' they said, and declined to explain."}],
            "achievements": ["Completed multiple many-hands jobs in the time usually required for one", "Achieved official family status by Baby Bones decree, the second-fastest adoption on record", "Has never once been late to a meal or an emergency, despite internal debate"],
            "controversies": ["The chronicle cannot decide whether to list them as one member with a committee or several members with a chassis", "Internal voting procedures remain undocumented and loud"],
            "relationships": [{"person": "Baby Bones", "type": "Nephew (All Of Them)", "notes": "Every skull is uncle; the decree is binding and the uncles are honored."}, {"person": "Papyrus", "type": "Household Kin", "notes": "Builds his puzzles in a single afternoon; he declares each skull a genius, separately."}, {"person": "Times New Roman", "type": "Cousin", "notes": "Requested a membership precedent; received a chorus. Has not recovered."}]
        },
        {
            "id": "speen_kind_of_down_lately",
            "name": "Speen Kind of Down Lately",
            "epithet": "The Low-Spirited Cousin",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "S",
            "summary": "A tired-looking relative in a violet coat whose name began as an honest status update and became a family promise to check in. Speen is not defined by sadness; he is a careful observer who notices when other people are performing happiness. Lazybones keeps tea ready for him, and Papyrus never lets a quiet seat stay empty for long.\n\n## An Honest Status Update\n\nHis name began as an honest answer to 'how are you doing?' and the household, hearing it, did what it does best: it made the answer into a standing order. 'Kind of down lately' is no longer a diagnosis; it is a family promise that someone will check in, sit down, and not demand improvement on a schedule. He keeps the name because the promise has never once been broken.\n\n## The Careful Observer\n\nSpeen is not defined by sadness, and the household is careful that he knows it. What defines him is observation: he notices when other people are performing happiness, and he says so, gently, in a way that makes the performance optional. Several relatives credit him with the first honest conversation they ever had in the house. He deflects the credit to the tea.\n\n## The Seat That Never Stays Empty\n\nThe violet coat has a corner, and the corner is never without company for long. Lazybones keeps tea ready for him at all hours. Papyrus treats an empty seat beside Speen as a personal emergency and fills it immediately. The registry records him as active, observed, and surrounded — a status the household updates with visible pride.\n\n## The Season That Named Him\n\nThe household does not detail the season that named him, because he has not asked it to, and because the household learned from him, more than from anyone, that some seasons deserve privacy even in a family that files everything. What the record holds, at his permission and no further, is this: there was a loss, in the years before the current household fully formed, and the loss was the kind that does not resolve, only integrate, and for a long stretch afterward he answered the ordinary question — how are you doing — with the only honest answer he had, which was 'kind of down lately,' every time, without variation, without apology. A lesser household would have corrected him. A lesser household would have cheered him up, or filed him away, or decided the answer was inconvenient. This household sat down beside him, in the violet-coat corner, and said, effectively, 'okay, and we'll be here when it's different, and also when it isn't,' and then organized itself, quietly and permanently, around the maintenance of that promise. The name stuck because the honesty stuck. He has never once, in all the seasons since, been asked to perform otherwise. He has, slowly, in his own time, in ways the record tracks with fierce, quiet pride, begun to answer the question differently — 'better today,' 'tired but here,' 'ask me after tea' — and every variation has been received with the same steadiness the original answer got, because the promise was never about the mood. It was about the truth being welcome. The truth has been welcome every single day. He knows this. He keeps the name anyway, because the name is the receipt, and he wants the household to have the receipt.\n\n## The Check-In Rota\n\nThe rota is the household's answer to the question he asked once, early on, in the violet-coat corner, almost as an aside: who checks on the people who check on everyone? He had noticed — because he notices — that the household's caretakers ran on fumes and gratitude, that Papyrus fed everyone and ate last, that Will's ledger never accounted for Will, that Lazybones held everyone's cover stories and had no cover of their own. He asked the question without self-pity, as a systems observation, and the household, stung and grateful, answered it with structure: a rota, posted in the hallway, assigning every caretaker a caretaker, on rotation, with the force of policy. Papyrus is checked on. Will is checked on. Lazybones is checked on, which Lazybones pretends to find unnecessary and never once misses. Speen's own place on the rota is the most heavily staffed assignment in the household, a fact he finds embarrassing and the household finds correct. The rota has run, without a missed day, since the season it was posted. It is, the chronicle maintains, the single most important document in the hallway, more important than the evacuation plan, because the evacuation plan saves the household's bodies and the rota saves the household's people. He reads the rota sometimes, standing in the hallway, with an expression the chronicle has never been able to annotate but which every relative who has seen it recognizes instantly: the look of a person watching a promise keep itself, day after day, in handwriting he knows by heart.\n\n## The Mount Ebott Season\n\nThe season validated him in a way the household watched with complicated pride. When the expedition settled at the mountain — strangers under strain, performing normalcy for each other and for the town — Speen noticed what the household's intelligence assets missed, because his instrument has always been the performance of fine. He flagged one surveyor in particular, early, to anyone who would listen: that one's doing the 'I'm fine' voice, he said, the one where the fine is load-bearing. The household, which has learned to treat Speen's observations as data, logged it, and the chronicle records what happened next with the satisfaction of a hypothesis confirmed: over the following month, that surveyor's performance degraded exactly as predicted, the agent requested reassignment from a posting that had become, internally, untenable, and the expedition's own cohesion cracked along the precise fault line Speen had identified over tea. He was not triumphant about it. He was sad, in the quiet, observant way he is sad — sad for the surveyor, sad for the performance, sad for the particular loneliness of pretending to be fine in a town where a stranger in a violet coat could see through it in an afternoon. He asked the household, afterward, whether they'd checked on the surveyor. They had. Papyrus had delivered noodles to the survey camp with a note that said, in Papyrus's enormous hand, 'you do not have to be fine to be fed.' The surveyor ate. The surveyor cried, the camp's own report admits, in a footnote. Speen read the footnote and nodded, once, as if a small, sad account had been balanced. The household has never once told him his observations are a gift, because he would deflect it to the tea. The household says it anyway, in the rota, in the corner, in the seat that never stays empty. He hears it. He deflects it to the tea. The tea, per Lazybones, is excellent, and always ready, and never the whole point.\n\n## Open Questions in the Registry\n\nThe file has no open questions, and that absence is the point. The registry attempted one, early in his tenure — a genealogical note, a clarification of the loss, a medicalization of the name — and the household rejected it, unanimously, on the record, in the only unanimous filing in the archive's history: the entry stands as written, the name is accurate, the season is private, and the archive's job, in this case, is to witness rather than explain. The chronicle has honored the ruling so completely that Speen's file is the shortest in the household for facts and the longest for presence: every check-in logged, every rota cycle completed, every variation of his answer to the ordinary question recorded like weather, because the household has decided, formally, that the weather of a person matters, and that recording it kindly is an act of love rather than surveillance. He has read his own file. He read it in the violet-coat corner, with Lazybones on one side and Papyrus hovering, pretending not to hover, and when he finished, he said — and the chronicle records this as the file's single annotated quote, the one line the household has agreed to preserve in his own words — 'oh. so that's what it looks like, from where you're all sitting.' He kept the name. He keeps the corner. The tea stays ready. The rota turns. And the household, which has survived wars, winters, whiteouts, and a mountain going strange, maintains — on the record, unanimously, with the full weight of the archive behind it — that the season it learned to sit down beside someone instead of cheering them up was the season it became, completely and permanently, a family. He would deflect the credit to the tea. The tea, for once, is not enough. He knows it. He lets them say it anyway. That is also progress. That is also, per the household's unanimous filing, enough.",
            "secrets": [{"intel": 25, "text": "His quiet observations are logged by the relief network: every relative he flagged as 'performing fine' has needed help within the month, without exception."}, {"intel": 65, "text": "The household's caretaker check-in rota — its most important hallway document — exists because he asked, once, who checks on the people who check on everyone."}],
            "achievements": ["Turned a hard season into the household's standing promise to check in", "Has named performed happiness in several relatives, gently, with documented good outcomes", "Maintains the quiet corner as the house's most reliable honest-conversation site"],
            "controversies": ["None. The registry attempted one; the household rejected it unanimously, on record"],
            "relationships": [{"person": "Lazybones", "type": "Cousin", "notes": "Tea, blankets, and mutual understanding; the corner is their joint project."}, {"person": "Papyrus", "type": "Cousin", "notes": "Treats an empty seat beside Speen as a personal emergency; fills it immediately."}, {"person": "Gee Lady", "type": "Aunt", "notes": "Accepts 'okay' from her only with documentation; he finds this exhausting and correct."}]
        },
        {
            "id": "pet_rock",
            "name": "Pet Rock",
            "epithet": "The Smallest Dependent",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "🪨",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "P",
            "summary": "A tiny stone with no verified movement, no visible face, and an unquestioned place in the family. Pet Rock became kin when Baby Bones named it and Papyrus prepared it a tiny dinner plate. It travels in a padded pocket, attends major meals, and has a place in Will's emergency evacuation plan.\n\n## Kin by Naming\n\nPet Rock has no verified movement, no visible face, and no entry in any genealogy older than the household itself. It became family the day Baby Bones named it and Papyrus, without a moment's hesitation, set out a tiny dinner plate. The registry searched for grounds to object and found none the household would have respected.\n\n## The Itinerary\n\nSince then, Pet Rock's social calendar is busier than most relatives'. It travels in a padded pocket, attends major meals, has sat through at least three crisis meetings, and receives a ceremonial portion of every celebratory dessert. No one in the household describes any of this as strange. The word 'strange' has been retired from discussions of membership on principle.\n\n## Evacuation Priority\n\nThe definitive statement of Pet Rock's standing is bureaucratic: it has an assigned carrier and a slot in Will's emergency evacuation plan, listed between the medicine kit and the noodle reserve, an ordering Will defends as 'priority by fragility.' When an outside observer once questioned the entry, the household's response was unanimous and unbothered: if the plan includes everyone, it includes everyone. Pet Rock remains, to date, uncomplaining about all arrangements.\n\n## The Naming, In Detail\n\nThe naming is a documented event, and the chronicle has reconstructed it from four witnesses, all of whom agree on the important parts and none of the rest. The household was at dinner — an ordinary Friday, before the institution had fully hardened into institution — when Baby Bones, mid-crawl, found a small gray stone on the floor by the hearth, picked it up with the absolute focus of a small skeleton who has found a thing, and announced, in the way Baby Bones announces things, a name. The name was the name. It has always been the name. Papyrus, from the kitchen, without turning around, without a beat, without the smallest hesitation that the chronicle has ever been able to find in any account, set out a tiny plate at the table's edge, with a tiny portion, and a tiny napkin folded in Papyrus's formal dinner style, because Papyrus does not do informal plating for family. The table went quiet for exactly as long as it took everyone to decide, collectively and without discussion, that this was happening. Then dinner continued. The stone has sat at the table, in one form or another, ever since. The registry found the paperwork, technically, irregular. The registry also found, technically, that the household's membership rules — which Grandpa Semi wrote, which say a seat may be offered to any soul the household agrees to love, and which do not, anywhere, specify that the soul must be animate, or visible, or capable of eating the portion — contained no grounds for objection. The objection died in committee. The tiny plate stayed. The chronicle records the retreat with the dry satisfaction of an archive watching a family out-love its own bureaucracy — the correct final score in every such contest.\n\n## The Perfect Record\n\nThe household keeps statistics, and Pet Rock's are the file's quiet pride. It has never been left behind. Not once. In every evacuation drill since Will wrote the plan, in every crisis relocation, in every hasty departure and calm return the household has made through war years, winters, and one memorable kitchen fire, the padded pocket has traveled, the carrier has carried, and the stone has arrived — first out of the house in drills, per Will's doctrine, because fragile things go first, and last to be set down, because family gets settled before furniture. The record is perfect, and the household has made it a point of principle, because the record is an argument: a family that leaves nothing behind has decided, in practice, that nothing in it is disposable. Every relative knows the clause: if the stone goes, everyone goes — the canary, the minimum, the line the household will not cross even in a fire. It has held in every drill. It has never been tested in earnest. The household keeps it ready, and keeps the stone close, and understands, without saying, that the perfect record is not about the stone. It never was. The stone is the promise, kept small enough to hold, that the household will carry every single one of its people out, no matter how small, how quiet, how unlikely to complain. The stone does not complain. The household complains on its behalf, loudly, in policy, in writing, in a plan that assigns it a carrier and a slot and a priority, because someone in the family should be carried without ever having to ask, and the household has decided it will practice on the one member who never will.\n\n## The Mount Ebott Season\n\nThe season added one entry to the file that the chronicle handles with more care than a stone, you would think, should require. On the night the relay disturbance peaked — the stuttering sky, the strange signals, the household gathered and uneasy — Pet Rock was, as always, present: on the table, at its place, tiny napkin folded, while the household argued in low voices about routes and readings and what the mountain was doing. The next morning, Times New Roman, cataloging the household's observations from the night, found a photograph he did not remember taking: the table, the gathered family, the stone at its place — and the stone, in the photograph, in a position no one could account for, slightly forward of its plate, as if it had leaned, just slightly, toward the window, toward the mountain, toward the stuttering sky. The chronicle examined both. The stone was a stone. The chronicle has not annotated the photograph, at Times New Roman's request, because Times New Roman — who has requested footnotes for miracles and citations for hugs — looked at the photograph for a long time and said, very quietly, that some observations are not improved by explanation, and that the household's stone had sat through three crisis meetings and one war, and had earned the right to lean toward whatever it wanted to lean toward. The photograph is in the file. The annotation is a single line, in Times New Roman's steadiest hand: 'present, as always.' The stone remains uncomplaining. The stone remains carried. And the household, which has learned a great deal from its quietest member about what it means to simply stay, to simply be there, to simply hold a place at the table through every season the sky can devise, sets the tiny plate every dinner, folds the tiny napkin, serves the tiny portion, and considers the practice — unanimously, permanently, without embarrassment — one of the sanest things it does.\n\n## Open Questions in the Registry\n\nThe file has no open questions, and the household has filed the absence as a ruling. The registry attempted one inquiry, early — a classification question, a geological question, a question about verified movement that the household found, collectively, to be exactly the wrong question asked in exactly the wrong spirit — and the household closed it in a single afternoon, with a statement the chronicle has preserved in full, because the statement is, in twelve lines, the entire Bone-Line philosophy of membership: that personhood is conferred, that love is the conferring authority, that the household's word on who belongs is final, and that any outside body requiring the stone to move before it will count the stone as family has misunderstood both stones and families, and should consider, before inquiring further, that the household has never once required the outside body to move before counting it as worth speaking to. The inquiry was not renewed. The file stands. The stone sits. And the chronicle holds one final note, private, unannotated, in Grandpa Semi's unreadable hand, on a card filed beside the stone's entry in the cedar chest, which no one has translated and no one has asked to: a card the household suspects, from its position and its age, has been in the chest longer than the stone has been in the family. Longer, possibly, than the family. A card about a stone, or a promise, or a precedent, in a hand no one living wrote. The household has looked at the card, and at the stone, and set the tiny plate, as always, and decided — unanimously, warmly, without fear — that whatever the card says, the household is, clearly, continuing a practice rather than starting one, and that the stone, which has been waited for by someone, somewhere, for longer than the record runs, has finally, in this house, at this table, with this family, arrived.",
            "secrets": [{"intel": 25, "text": "It has never been left behind, not once, in any evacuation, drill, or crisis; the household's perfect carry-out record is technically Pet Rock's."}, {"intel": 65, "text": "A relay-night photograph shows the stone slightly forward of its plate, leaning toward the mountain; Times New Roman's only annotation is 'present, as always.'"}],
            "achievements": ["Achieved full membership, dinner plate, and evacuation slot by naming alone", "Has attended every major household meal without a single complaint", "Survived three kitchen fires, unbothered"],
            "controversies": ["No verified movement on record; the household considers the investigation closed", "Outside observers periodically reopen the membership question; the household periodically declines to care"],
            "relationships": [{"person": "Baby Bones", "type": "Namer", "notes": "Spoke the name; the name became."}, {"person": "Papyrus", "type": "Provider", "notes": "Prepares the tiny plate every dinner; portions adjusted for no reason anyone will explain."}, {"person": "Will", "type": "Evacuation Officer", "notes": "Listed between the medicine kit and the noodle reserve; the ordering is deliberate and no one will discuss it."}]
        },
        {
            "id": "dedan",
            "name": "Dedan",
            "epithet": "The Bone-Line Bouncer",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "D",
            "summary": "A formidable striped guardian who treats every entrance as a question of responsibility. Dedan is intimidating by profession and unexpectedly patient by choice, especially with children and nervous visitors. He does not call himself family, but he has stood watch through too many household emergencies for anyone else to believe him.\n\n## Every Entrance Is a Question\n\nDedan treats every door, gate, and threshold as a question about responsibility, and he answers it by standing in the way until the question resolves. Formidable, striped, and professionally intimidating, he guards the household's entrances with the patience of furniture and the attention of a hawk. He has turned away threats, inspectors, and one very confident salesman, in that order of politeness.\n\n## Patience by Choice\n\nWhat newcomers misread about Dedan is the patience. It is not absence of temper; it is a choice he renews constantly, especially with children and nervous visitors, who receive from him a gentleness his reputation would deny existed. Baby Bones rides on his shoulders during patrols. He has never once asked it to stop. The household considers this the truest entry in his file.\n\n## Family by Repetition\n\nHe does not call himself family, a position he has maintained with decreasing credibility for years. He has stood watch through blizzards, evacuations, registry disputes, and three kitchen fires; he takes his meals at the household table; he knows every relative's schedule by heart. His protests are recorded in the archive under 'objections, ritual,' and no one, including Dedan, expects them to succeed.\n\n## The Threshold Code\n\nHe came to the household as a professional; the household has never quite let him remain one, and he has never quite let himself become anything else. He was hired, in the years after the war, to guard a house that could not afford a guard and could less afford not to have one, and he brought with him a threshold code he has never written down and has never once violated: a door is a question; the guard is the question's grammar; and no one crosses who has not been honestly asked and honestly answered. He does not guard against people. He guards the act of arrival itself: the moment a person stands at a door and asks, with their whole body, whether they will be received. He has turned away threats with the flat efficiency the reputation describes. He has also — and the chronicle weights this side of the record deliberately, because he never will — spent forty minutes on the front step with a terrified refugee who could not bring herself to knock, answering her questions in a voice no one who knows his reputation would credit, until she was ready, and then stepping aside, formally, as if receiving an ambassador. He does not discuss the refugee. He does not discuss the voice. The household discusses both, constantly, with love, and files his protests under 'objections, ritual,' because the protests are ritual — and Dedan, who objects on schedule and stands the next watch on schedule, has not missed a Friday dinner in longer than he will admit.\n\n## The Early Log\n\nHis threshold log is the household's strangest professional document and the chronicle's most reliable predictive instrument, a fact Dedan finds professionally embarrassing. The log records every arrival at the household's doors: name, time, business, demeanor, disposition of the visit. It is meticulous — and also, the chronicle has documented, occasionally early. Arrivals appear in the log before they happen — a name entered a day ahead, a visitor logged in the morning who knocks at dusk, a relative's cousin recorded on a Tuesday who arrives, surprised to be expected, on a Thursday. Dedan's explanation, offered once under direct questioning and never elaborated, is that a good guard knows who is coming because a good guard knows who belongs, and the household's doors, he maintains, have a memory longer than the household's calendar. The chronicle has tested the log, and the early entries have been right with an accuracy the chronicle finds difficult to reconcile with Dedan's stated methods and easy to reconcile with nothing else. The most unsettling entry is the one the household does not joke about: a night, two winters ago, when the log shows Dedan standing aside, at 3 a.m., for an arrival with no name and no description, marked only 'family, returning' — and the household's door, which Dedan had locked and barred himself at midnight, which no relative was documented opening, which was found, at dawn, locked and barred again from the inside. Dedan confirms the log entry. Dedan declines the questions. Dedan stood aside, he says, because the code is the code, and the code says you do not bar family, and whatever came in that night was family, returning, and he will not be the guard who told family the door was shut. The log continues. The early entries continue. \n\n## The Mount Ebott Season\n\nThe season tested the threshold code against the one visitor type the code had never formally encountered: an expedition that did not consider itself a visitor. Dedan denied the survey team the household door three times in the season's first week — politely, professionally, with the full formal grammar of the code, asking each team member, at the threshold, the question he asks everyone: are you here to be received, or are you here to take? The team, whose briefing had not prepared it for a moral interview at the doorstep, failed the question three times and was turned three times; the expedition's internal report describes the entrance as 'denied, local custom, unexplained.' The fourth attempt succeeded, because the fourth attempt came through Papyrus's pasta window — Papyrus, who does not recognize the concept of a denied visitor, had invited the team to dinner by the direct route, and Dedan, finding them seated and served, logged the arrival under 'expected,' with a note the chronicle has preserved: 'entry irregular. hospitality regular. standing down.' The code governs doors; it does not govern windows, and Papyrus's windows have never been anything but open. He spent the rest of the season at the perimeter with Brother Killer — the two guarded men, same doors, different angles — and his logs from the relay-disturbance nights are the household's cleanest record of who was where, because Dedan does not miss arrivals, even when the sky is stuttering, even when the horizon has a gray figure in it, even when, on the worst night, the log shows him standing at the door for four straight hours, letting no one out, letting no one in, and answering every anxious relative who asked what he was waiting for with the same calm, impossible sentence: 'the house told me to hold the door.' The house has never, on any other documented occasion, told him anything. The chronicle has annotated the entry with a single word, because the chronicle has learned, from this family, that some annotations should be small: 'listened.'\n\n## Open Questions in the Registry\n\nThe file's questions are his questions, and he has declined them all, and the household has honored the declining, because the household has learned that Dedan's silences are not withholding but maintenance — a guard does not narrate the door. The 'family, returning' entry remains the largest: who came in, at 3 a.m., through a door Dedan had barred, that the code required him to admit, and where they went by morning, and why the log — which records everything — records no departure. The early entries continue, unexplained, accurate, and increasingly, the chronicle notices, clustered around the household's unresolved members: the blank parentage lines, the question-mark entries, the chairs left for the missing. He objects to this reading, ritually, and leaves the log on the table. And the chronicle holds one final entry, the truest in the file, the one the household keeps at the front: a patrol log from two seasons ago, a winter evening, Dedan at the gate, and Baby Bones, who had escaped the household's notice for eleven minutes, found at Dedan's post, on his shoulders, holding his logbook, 'helping.' He had not reported the absence. He had not returned the child. He had, the log shows in his own stiff handwriting, conducted the patrol as scheduled, with the passenger, and noted, in the margin, in a hand noticeably less stiff than usual: 'passenger satisfactory. patrol improved.' The household framed the margin note. Dedan objected, ritually. The frame hangs in the hallway, beside the log and the rota. He walks past it twice a day, and has never once objected to its presence. The chronicle records the non-objection as the file's conclusion, pending, as always, his own, which everyone expects, and no one requires, and which — the household maintains, unanimously, with the patience of furniture and the attention of a hawk — is already, in every way that matters, decided.",
            "secrets": [{"intel": 25, "text": "His threshold log records arrivals before they happen, clustered lately around the household's unresolved members — the blank lines and question-mark entries."}, {"intel": 65, "text": "One log night shows him standing aside at 3 a.m. for an arrival marked only 'family, returning,' through a door he had barred himself; no departure was ever logged."}],
            "achievements": ["Has turned away every undocumented arrival at the household's doors, politely or otherwise", "Maintains the household's longest unbroken streak of patience with children", "Has stood watch through blizzards, fires, evacuations, and at least one sales call"],
            "controversies": ["Continues to deny family status despite overwhelming evidence; objections filed as ritual", "His gentleness with Baby Bones contradicts his professional reputation, which he refuses to address"],
            "relationships": [{"person": "Papyrus", "type": "Patrol Partner", "notes": "Suspicion and invitation, guarding one door; neither works without the other."}, {"person": "Baby Bones", "type": "Household Kin", "notes": "Shoulder transport, on demand, no exceptions."}, {"person": "Brother Killer", "type": "Perimeter Ally", "notes": "Two guarded men, same doors, different angles; respect without discussion."}]
        },
        {
            "id": "mystery_man",
            "name": "Mysteryman",
            "epithet": "The Unfiled Relative",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "M",
            "summary": "A pale figure in black whose relationship to the family is documented only by sightings, sketches, and absence. Mysteryman appears near sealed rooms, broken save points, and old photographs. The household policy is simple: leave a seat, ask no cruel questions, and do not pretend an unfinished person is erased.\n\n## Documented by Absence\n\nMysteryman's relationship to the family is archived the way weather is: by sightings, sketches, and the shape of what is not there. A pale figure in black at the edge of an old photograph. A chair found pulled out in a locked room. A relative certain they were followed home, then certain they were escorted. The registry keeps the file open because closing it would require facts the household refuses to demand.\n\n## Where He Appears\n\nHis appearances cluster in places the family has agreed to be careful about: sealed rooms, broken save points, and the margins of photographs where someone is almost looking at the camera. He has never been documented speaking, harming, or leaving. The household treats the pattern less as evidence than as etiquette — he is where unfinished things are, and the family has unfinished things.\n\n## The Household Policy\n\nThe standing policy is the family's quietest statement of its values: leave a seat. Ask no cruel questions. Do not pretend an unfinished person is erased. Relatives who ask why Mysteryman rates a seat and an answer receive the same reply from every generation of the household: if the tree is for everyone, it is for everyone. The entry remains open, as it should.\n\n## The Documented Absences\n\nThe file is the archive's largest and its least full. The sightings are cataloged with the care the household gives its most important records, which says everything about where Mysteryman stands: a pale figure at the edge of the reunion photograph from four winters back, blurred, as if he had not entirely been there for the exposure. A chair in the sealed relay room, found pulled out from the wall, facing the door, in a room the household keeps locked and checks weekly. Three separate relatives, across three seasons, certain they were followed home on a dark road — followed, and then, on looking back, certain the word was wrong, that the figure behind them had been matching their pace for their sake rather than its own, and that when they arrived safely at the household door and turned, the road was empty, and the following had been, all along, an escort. The warm-seat mornings: breakfast uneaten at a set place, but rearranged, the chair warm, the napkin folded, as if someone had sat, and tidied, and then eaten elsewhere, or not eaten, or eaten in a way the household's records cannot capture. The chronicle has documented forty-one such events and explained none of them. The household has demanded no explanations — and the chronicle has come to understand that Mysteryman is not a question the family has failed to answer, but an answer it has chosen, with love, not to question.\n\n## The Unfinished Drawing\n\nThe file's deepest document is not in the file. It is in the sealed Wing Gaster folder, and the household knows it is there because Grandpa Semi has said, once, carefully, that it is, and the household has not opened the folder to look, because the household has learned, from this family, that some documents are kept sealed for the kindness of it. What Grandpa Semi has said, in the fragments he permits, is this: among the folder's remaining pages is a sketch, in an old hand, of a pale figure in black — drawn partway, carefully, and then stopped, the lower half and the face left as outline, as if the artist had run out of something, or had been interrupted, or had decided that finishing it would be a cruelty to the subject. And in the margin, in Grandpa Semi's own unreadable hand, a single instruction, added later, in ink newer than the sketch: 'do not finish the drawing.' Someone began to record Mysteryman, long ago, and stopped, and the stopping was a decision, and the decision was kind, and the household — which leaves a seat, which asks no cruel questions, which does not pretend an unfinished person is erased — has adopted the decision as policy. He is drawn partway because he is partway. The household does not finish people. The household does not demand that the unfinished become whole before they are welcome. The sketch stays in the folder, unfinished, by instruction, by kindness, by a family that has decided that leaving someone room to arrive — slowly, partially, in their own time, in their own shape — is the most important thing an archive can do. \n\n## The Mount Ebott Season\n\nThe season brought him, for the first time, into the household's documented present rather than its margins, and the household is still sitting with what that means. He was seen the night the relay went active — not at the edge of a photograph, not in a locked room afterward, but in the yard, in real time, witnessed by four relatives at once, standing at the yard's far edge facing the mountain while the sky stuttered. He did not move. He did not threaten. He watched the disturbance the way the household watched it, and when the sky steadied he was gone, and the yard showed no footprints — which the file has never once contained. But the season's real entry is the photograph. The household documented the relay night, as the household documents everything, and one photograph — the long table, the gathered family, the tiny plate at its place — contains, at the table's far end, at the seat the household leaves, a figure: pale, in black, seated, and for the first time in the file's documented history, looking at the camera. Not blurred. Not at the margin. Seated, present, and looking, directly, at the lens, with an attentiveness the four relatives who reviewed the photograph describe, unanimously, as not hostile, not hungry, not anything the household has feared — but curious. As if he had been watching the family for years and had finally, on the worst night of the season, sat down at the table, and looked up, and wanted, for once, to be seen seeing. The chronicle's annotation is one line, and the chronicle has never written a truer one: 'attended.' The household has not discussed the photograph at length. The seat is set. The seat was occupied. The dinner continued, because that is what the household does — it continues, it includes, it sets the plate — and the household says, quietly, to each other, when the seat is warm in the morning: he's coming along. The seat stays. The file stays open. The policy stands. And the household, which has learned more about love from its most unfinished member than from any of its complete ones, does what it has always done: it leaves the seat, it folds the napkin, it asks no cruel questions, and it waits, with the particular patience of a family that has decided, permanently and without conditions, that unfinished is not the same as absent, that partway is a direction, and that everyone gets to arrive at the table in their own time, and be met by a family already glad they came.\n\n## Open Questions in the Registry\n\nThe file is open by design, and the design is the finding. The chronicle's formal position is that the questions the registry wants answered are not the questions the file is for. Who he is, what he is, where he goes: the household refuses to demand these, and the refusal is not ignorance but ethics, the household's clearest statement that a person's incompleteness is not a debt they owe the archive. The questions the file is for are the household's, and they are gentler: is the seat warm this morning (sometimes); did anyone set the extra plate (always); is the drawing still unfinished (yes, by kindness, and increasingly, the household suspects, by his own slow consent). And one standing question the chronicle holds privately, unannotated, because it is not the chronicle's to answer: whether the pale figure at the table's far end, in the relay-night photograph, looking at the camera with that steady, curious attention, is the same figure in the sealed folder's unfinished sketch — and whether the sketch, when the household finally opens the folder by consensus, as the season seems to be pushing it toward, will be found a little less unfinished than it was. The household hopes so. The household sets the seat. The household asks no cruel questions. The file stays open, which is the household's answer, which is the household's love, which is — the chronicle has come to believe — the most complete thing in the archive, precisely because it refuses, on principle, to be finished without him.",
            "secrets": [{"intel": 25, "text": "The seat left for him is warm some mornings; the nearby breakfast is untouched but tidied, as if someone ate elsewhere and cleaned up here."}, {"intel": 65, "text": "A partway sketch of him, in the sealed Wing Gaster folder, carries Grandpa Semi's marginal instruction: 'do not finish the drawing.'"}],
            "achievements": ["Documented at every site the household has agreed to be careful about", "Has never been recorded harming, threatening, or speaking to a family member", "Inspired the household's standing policy on unfinished people"],
            "controversies": ["Relationship to the family documented only by sightings, sketches, and absence", "The open seat is occupied some nights; no one has ever been assigned the watching"],
            "relationships": [{"person": "Grandpa Semi", "type": "Keeper of the Open File", "notes": "Refuses to close the entry; an unfinished person is not an erased person."}, {"person": "Wing Gaster", "type": "Unresolved (Possible)", "notes": "Two records defined by absence; the archive does not link them. The archive has been asked."}, {"person": "Baby Bones", "type": "Household Kin", "notes": "Has been documented setting out an extra plate. No adult instructed this. No adult corrected it."}]
        },
        {
            "id": "sans_deltarune",
            "name": "Sans of the Dark World",
            "epithet": "The Other Sentry",
            "born": "Unknown",
            "died": null,
            "reign": "—",
            "generation": 2,
            "icon": "💀",
            "status": "active",
            "spouse": null,
            "children": [],
            "parents": null,
            "portrait": "S",
            "summary": "A parallel counterpart who runs a familiar storefront, tells familiar jokes, and carries a different map of impossible roads. The household treats him as a cousin from a neighboring story, not a replacement. His visits let Sans speak plainly about paths and choices that cannot be unwound.\n\n## A Cousin From a Neighboring Story\n\nHe runs a familiar storefront, sells familiar goods at prices that convert strangely, and tells jokes the household has heard before, told differently, with punchlines that land a half-beat off — because the timing comes from a world with different rhythm. The map behind his counter shows roads this world does not have; his shadow occasionally falls the wrong way for the light. He is welcomed warmly. He is never mistaken for the Sans who lives here. And by mutual and unspoken agreement, no one has ever asked him to stay permanently, a courtesy both Sanses appear to consider essential and neither has ever explained.\n\n## The Storefront\n\nThe shop is the household's most-visited impossibility and its calmest one. He sets it up in a vacant Snowdin storefront during visits — appearing overnight, stocked, open, with a bell over the door and a 'GROCERY' sign in a hand that is Sans's hand but isn't — and the household has learned to treat the shop the way it treats all his manifestations: with cheerful practicality. He sells snacks, household goods, and, once, a canned item labeled '??? (heals hp),' which Papyrus bought immediately, opened at dinner, and found to contain excellent soup, which Papyrus considered a complete explanation. The prices convert strangely: he accepts this world's coins at a rate that makes no mathematical sense, and other currencies too — a button, a story, a promise to 'tell the other me i said hey,' which he appeared to consider payment in full. The shop's back room stays closed, and the household has not asked, because a cousin from a neighboring story is allowed to keep the architecture of his story to himself. He closes the shop when he leaves. The storefront is vacant again by morning. The bell, once, was found still ringing after the shop was gone; the household let it finish, because interrupting a farewell did not seem correct.\n\n## The First Visit\n\nThe household's first meeting with him is the file's warmest document and its most careful. He arrived during the household's strangest winter — the relay acting up, the sealed folder a subject of quiet worry — and simply walked in, in the middle of a Friday dinner, through the front door Dedan had locked, which Dedan, reviewing the log afterward, found he had logged as 'expected,' in handwriting he did not remember using. The household's response, refined over the first startled minute into its permanent form, was Papyrus's: a second plate, set at speed, at the far end of the table from the first Sans, because Papyrus understood instantly, in the way Papyrus understands everything important, that these two needed the whole table between them to be comfortable. The counterpart sat, ate, and complimented the cooking with a joke the household had never heard, which it took as a gift. And at the end of the evening, the two Sanses — who had not, until that moment, exchanged a word in the household's presence — looked at each other across the long table, and the household's Sans said, 'so,' and the counterpart said, 'yeah,' and the two words contained, the chronicle believes, an entire negotiation about paths and choices and worlds that the household was not equipped to hear, and that the household, with great love and greater sense, did not try to. He has visited, intermittently, since. The second plate is always set. The whole table is always between them. The household considers the arrangement sacred and does not discuss it, which is the highest honor the household knows how to give.\n\n## The Ledger Date\n\nHis shop ledger is the file's center, and the household handles it with the care it reserves for documents that are also warnings. Most of the ledger is ordinary — sales, stock, the strange conversions — but one line, in his usual lazy hand, carries a date that has not happened in this world yet. He jokes about it when asked. No one laughs loudly, because the date is not a prediction but a memory: he has lived past it, in his world, and the ledger has simply kept its own calendar. The household's Sans has asked, twice, that the ledger be left alone, and the household has honored it: the ledger is filed under 'cross-world commerce, caution,' consulted only by consensus, and never about the date. The second documented matter is the merchant symbol: a sigil appearing, across this world's recent contraband shipments, that the counterpart identified on sight, with a stillness the household found more alarming than any exclamation — 'from home,' he said, and then, after a load-bearing pause, 'but not mine.' A merchant mark from a neighboring story, moving contraband through this world's supply lines, recognized by a cousin who knows which neighbor to worry about. The household has shared the finding with its intelligence contacts. The household has not shared the cousin; some sources, the household has decided, are family first. Asked whether he will help track the symbol, the counterpart said he would 'keep the shop open,' which the household reads, from him, as a qualified yes.\n\n## The Mount Ebott Season\n\nThe season's most important conversation in the household happened at the long table, between the two Sanses, and the household knows its shape without knowing its contents, which is how the counterpart's visits work. He arrived as the relay disturbance was building — earlier than usual, the chronicle notes, which the chronicle has learned to read, from this family, as urgency — and the two Sanses held their after-dinner conference while the household washed dishes and pretended, with great dignity, not to listen. What the household caught, in fragments, was enough to reframe the season: the counterpart describing the relay's interference as 'a door getting kicked, not opened,' and the household's Sans asking — in a full sentence, in plain speech, in the only voice he uses when the counterpart is present — whether the kicking would stop, and the counterpart answering, with a gentleness the household has never heard from either of them, that the kicking stops when the kickers understand what they're kicking, and that understanding was, he said, looking toward the kitchen where the household was very obviously listening, 'a family specialty.' The household dried the dishes very carefully, and has understood, since that evening, that its own quiet work — the feeding, the seating, the leaving-of-doors-open — is not a distraction from the campaign's larger dangers. It is, per a cousin who has lived past this world's current date and chosen to come back and say so, the method by which the dangers get understood. The counterpart left the following morning, without goodbye, as he always does. The bell was found ringing. The second plate was cleared. And the household's Sans, at breakfast, in a voice the chronicle records as lighter than it had been in weeks, made a pun so bad that Papyrus applauded and the counterpart's empty chair seemed, to four relatives at once, to be laughing. The chronicle has annotated the entry with the only word that fits: 'visited.'\n\n## Open Questions in the Registry\n\nThe file's questions are the household's most carefully handled, because they belong, ultimately, to the Sans who lives here, and he has asked for their keeping rather than their answering. The date that has not happened remains in the ledger, by consensus unconsulted, and the household has adopted the counterpart's own position on it — that it is a memory, not a threat — while quietly maintaining, in Will's planning documents, a readiness the household hopes it will never need and will never, ever resent having built. The departures without goodbye remain undecoded: he leaves mid-conversation, mid-sentence, by a pattern no one has mapped, and the household has decided, gently and formally, that a cousin from a neighboring story goes home on his story's schedule — and that the bell, ringing after, is farewell enough. And the deepest open question is the one the household holds for its own Sans, unasked, unpressable, honored in the silence: what the two of them say to each other, at the long table, in the plain-speech voice, about paths and choices that cannot be unwound. The household does not ask. The household sets the second plate. The household leaves the whole table between them, and the door open, and the bell unrung until it rings, and the questions kept, which is the household's oldest and truest form of love: to hold a place for someone's answers, for as long as the answers need, and to call the holding itself — unanimously, permanently, without condition — enough.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "The other Sans recognizes a merchant symbol appearing in current-world contraband shipments."
                },
                {
                    "intel": 65,
                    "text": "His store ledger contains a date that has not happened in this world yet."
                }
            ],
            "achievements": ["Identified a contraband merchant symbol as cross-world in origin, advancing the household's current investigation", "Enabled multiple plain-speaking sessions with Sans on otherwise unutterable subjects", "Maintains a storefront that functions as a neutral meeting point across adjacent stories"],
            "controversies": ["His ledger contains a date that has not happened in this world; filed under 'cross-world commerce, caution'", "His visits end abruptly and without goodbye, by a pattern no one has decoded"],
            "relationships": [{"person": "Sans", "type": "Parallel Counterpart", "notes": "The other half of the map; conversations between them are the only full sentences Sans speaks about paths."}, {"person": "Papyrus", "type": "Adoptive Kin (Parallel)", "notes": "Fed immediately on arrival, per household law; expressed surprise, then pleasure, then hunger."}, {"person": "Cursive", "type": "Cousin", "notes": "His cross-world correspondence matches no known courier hand, which Cursive finds professionally thrilling."}]
        }
    ]
},

        successionOrder: [
        {
            rank: 1,
            claimant: 'The Hidden Heir',
            house: 'Toadstool (Direct)',
            strength: 'ABSOLUTE (If Proven)',
            status: 'MISSING',
            notes: 'Child of Peach. Legitimate under Forest Law. Recognition disputed.'
        },
        {
            rank: 2,
            claimant: 'Princess Daisy',
            house: 'Sarasa (First Cousin)',
            strength: 'VERY STRONG',
            status: 'Active',
            notes: 'Clear bloodline. Possesses magical artifacts. Has an army.'
        },
        {
            rank: 3,
            claimant: 'Jasper Goldcap ("Big J")',
            house: 'Goldcap (Cadet Branch)',
            strength: 'MODERATE',
            status: 'Refuses Claim',
            notes: 'If alive, has legitimate Toadstool blood. Hates the monarchy.'
        },
        {
            rank: 4,
            claimant: 'Prince Peasley',
            house: 'Beanstar (Claimed Betrothal)',
            strength: 'WEAK (Disputed)',
            status: 'Active',
            notes: 'Contract probably forged. Using it for leverage anyway.'
        },
        {
            rank: 5,
            claimant: 'Lady Petal Rosewood',
            house: 'Rosewood (Cadet Branch)',
            strength: 'VERY WEAK',
            status: 'Active',
            notes: 'Distant relation. Prefers Republic to monarchy.'
        },
        {
            rank: 6,
            claimant: 'King Bowser',
            house: 'Koopa (Right of Conquest)',
            strength: 'ANCIENT TREATY',
            status: 'Incapacitated',
            notes: 'Claims Toadstools are Koopa vassals. Has documents.'
        },
        {
            rank: 7,
            claimant: 'Baron Moss Fernshade',
            house: 'Fernshade (Bastard Line)',
            strength: 'NEGLIGIBLE',
            status: 'Neutral',
            notes: 'Illegitimate line. Not interested in ruling.'
        }
    ]
};

// =============================================
// DYNASTY TREE INTERFACE
// =============================================

const BONE_LINE_WALUIGI_NOTES = {
    sans: "This sentry has already counted every exit, every lie, and probably Waluigi's teeth. Suspicious!",
    papyrus: "This tall noodle is accidentally running Snowdin's best diplomatic program: feeding everyone until they stop shooting.",
    wing_gaster: "Geometry, missing pages, and a file marked do not open. Waluigi investigates this ancestor from behind three locked doors.",
    prunsel: "An enormous eye in the registry? Finally, a relative who understands archival oversight. Stop looking at Waluigi's receipts!",
    dirty_brother: "The furnace cousin knows every warm tunnel in Snowdin. That is a resistance network with soot on it. WAH.",
    will: "Supply ledgers, spare blankets, and mysterious Gamma payments: Will calls it inventory. Waluigi calls it evidence.",
    cursive: "Never trust a beautiful invitation. It might be a party, a trap, or a ciphered intelligence drop disguised as spaghetti.",
    sans_deltarune: "Parallel cousin, alternate shop, impossible ledger date. Useful intelligence or a very expensive coupon.",
    mystery_man: "The unfiled relative gets a chair at dinner. Touching family loyalty or terrible counterintelligence? Both."
};
function boneLineComment(member) {
    return BONE_LINE_WALUIGI_NOTES[member.id] || `Waluigi's assessment: ${member.name} is allegedly a ${member.epithet || 'Bone-Line relative'}. In this family that means a dependable neighbor, a dimensional anomaly, or both.`;
}

// =============================================
// SUMMARY FORMATTING
// =============================================
// Member articles use light Markdown: paragraphs separated by blank lines,
// `## ` section headings, and **bold** emphasis. These helpers render that
// safely (all text is escaped) for dossier views and card previews.

function escapeSummaryHTML(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function formatInlineSummary(text) {
    return escapeSummaryHTML(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function summaryBlocks(text) {
    return String(text || '')
        .split(/\n{2,}/)
        .map(block => block.trim())
        .filter(Boolean);
}

// Full article: paragraphs + `## ` subheadings.
function formatSummaryHTML(text) {
    const blocks = summaryBlocks(text);
    if (blocks.length === 0) return '<p>No information available.</p>';
    return blocks.map(block =>
        block.startsWith('## ')
            ? `<h4 class="summary-subhead">${formatInlineSummary(block.slice(3).trim())}</h4>`
            : `<p>${formatInlineSummary(block.replace(/\n/g, ' '))}</p>`
    ).join('');
}

// Card preview: first paragraph of the article only.
function summaryIntroHTML(text) {
    const blocks = summaryBlocks(text);
    if (blocks.length === 0) return '<p>No information available.</p>';
    return `<p>${formatInlineSummary(blocks[0].replace(/\n/g, ' '))}</p>`;
}

class DynastyTreeInterface {
    constructor() {
        this.container = null;
        this.activeHouse = 'houseToadstool';
        this.activeView = 'tree';
        this.selectedMember = null;
        this.intel = 50;
        this.zoomLevel = 1;
        this.panOffset = { x: 0, y: 0 };
    }

getIntel() {
    if (state?.debugMode) return 100;
    
    // CHANGE THIS: 'civil_war' does not exist in state.js. 
    // We use 'mushroom_regency' as it contains the official archives.
    const factionKey = 'mushroom_regency'; 

    try {
        if (typeof getIntelBreakdown === 'function') {
            const breakdown = getIntelBreakdown(factionKey);
            
            // Console log to verify it works now
            console.log(`[Dynasty] Intel for ${factionKey}:`, breakdown);

            if (breakdown && typeof breakdown.total === 'number') {
                return breakdown.total;
            }
        }
    } catch (e) {
        console.warn('[Dynasty] Intel fetch failed:', e);
    }

    // Fallback: Check specific user state, then generic state
    const user = state.loggedInUser || 'generic';
    if (state?.intelLevels?.[user]?.[factionKey] !== undefined) {
        return state.intelLevels[user][factionKey];
    }

    return 1; // Final default if everything fails
}

    canAccess(required) {
        return this.intel >= (required || 0);
    }

init() {
    loadState?.();
    this.intel = this.getIntel();
    
    this.container = document.querySelector('.dynasty-page') ||
                    document.getElementById('main-content');
    
    if (!this.container) {
        console.error('[Dynasty] No container found');
        return;
    }

    // Default to houseToadstool if current selection is invalid
    if (!DYNASTY_DATA[this.activeHouse] && 
        this.activeHouse !== 'succession' && 
        this.activeHouse !== 'marriages') {
        this.activeHouse = 'houseToadstool';
    }

    this.render();
    this.bindEvents();
    
    console.log(`[Dynasty] Initialized | Intel: ${this.intel}% | House: ${this.activeHouse}`);
}

    render() {
        this.container.innerHTML = `
            <div class="dynasty-interface" data-intel="${this.intel}">
                ${this.renderHeader()}
                ${this.renderNavigation()}
                <div class="dynasty-body">
                    ${this.renderSidebar()}
                    <div class="dynasty-main">
                        ${this.renderMainContent()}
                    </div>
                </div>
                ${this.renderDetailModal()}
            </div>
        `;
    }

renderHeader() {
    const meta = DYNASTY_DATA.meta || {};
    const title = meta.title || 'BLOODLINES OF THE REALM';
    const subtitle = meta.subtitle || 'Interactive Dynasty Archives';
    const classification = meta.classification || 'ROYAL GENEALOGICAL RECORDS';
    
    return `
        <header class="dynasty-header">
            <div class="header-emblem">
                <span class="emblem-icon">👑</span>
                <div class="emblem-glow"></div>
            </div>
            <div class="header-title">
                <span class="classification">${classification}</span>
                <h1>${title}</h1>
                <span class="subtitle">${subtitle}</span>
            </div>
            <div class="header-intel">
                <div class="intel-display">
                    <span class="intel-label">GENEALOGICAL ACCESS</span>
                    <div class="intel-bar">
                        <div class="intel-fill" style="width: ${this.intel}%"></div>
                    </div>
                    <span class="intel-value">${this.intel}%</span>
                </div>
            </div>
        </header>
    `;
}
renderNavigation() {
        const houses = [
            { id: 'houseToadstool', name: 'House Toadstool', icon: '🍑', color: '#FFB6C1' },
            { id: 'houseKoopa', name: 'House Koopa', icon: '🐢', color: '#228B22' },
            { id: 'houseSarasa', name: 'House Sarasa', icon: '🌻', color: '#FFA500' },
            { id: 'houseBeanstar', name: 'House Beanstar', icon: '⭐', color: '#32CD32' },
            { id: 'rakashaClans', name: 'Rakasha Clans', icon: '🐾', color: '#8B4513' },
            { id: 'snowdinBoneLine', name: 'Snowdin Bone-Line', icon: '💀', color: '#60A5FA' },
            { id: 'succession', name: 'Succession', icon: '📜', color: '#FFD700' },
            { id: 'marriages', name: 'Alliances', icon: '💍', color: '#FF69B4' }
        ];

        const views = [
            { id: 'tree', label: 'Family Tree', icon: '🌳' },
            { id: 'list', label: 'Member List', icon: '📋' },
            { id: 'timeline', label: 'Timeline', icon: '⏱️' },
            { id: 'secrets', label: 'Secrets', icon: '🔒' }
        ];

        return `
            <nav class="dynasty-nav">
                <div class="house-tabs">
                    ${houses.map(h => `
                        <button class="house-tab ${this.activeHouse === h.id ? 'active' : ''}"
                                data-house="${h.id}"
                                style="--house-color: ${h.color}">
                            <span class="tab-icon">${h.icon}</span>
                            <span class="tab-label">${h.name}</span>
                        </button>
                    `).join('')}
                </div>
                <div class="view-tabs">
                    ${views.map(v => `
                        <button class="view-tab ${this.activeView === v.id ? 'active' : ''}"
                                data-view="${v.id}">
                            <span class="view-icon">${v.icon}</span>
                            <span class="view-label">${v.label}</span>
                        </button>
                    `).join('')}
                </div>
            </nav>
        `;
    }

renderSidebar() {
    const house = DYNASTY_DATA[this.activeHouse];
    
    if (!house || this.activeHouse === 'succession' || this.activeHouse === 'marriages') {
        return this.renderSpecialSidebar();
    }

    const sigil = house.sigil || '❓';
    const name = house.name || 'Unknown House';
    const motto = house.motto || 'No motto recorded';
    const altMotto = house.altMotto || '';
    const founded = house.founded || 'Unknown';
    const founder = house.founder || 'Unknown';
    const seat = house.seat || 'Unknown';
    const status = house.status || 'Unknown';

    return `
        <aside class="dynasty-sidebar">
            <div class="house-card">
                <div class="house-sigil">${sigil}</div>
                <h2 class="house-name">${name}</h2>
                <p class="house-motto">"${motto}"</p>
                ${altMotto ? `<p class="house-alt-motto">"${altMotto}"</p>` : ''}
            </div>
            
            <div class="house-details">
                <div class="detail-row">
                    <span class="detail-label">Founded</span>
                    <span class="detail-value">${founded}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Founder</span>
                    <span class="detail-value">${founder}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Seat</span>
                    <span class="detail-value">${seat}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Status</span>
                    <span class="detail-value status-${status.toLowerCase().replace(/[^a-z]/g, '')}">${status}</span>
                </div>
            </div>

            ${house.waluigiComment ? `<div class="waluigi-archive-note"><span>🟣 Waluigi's Margin Note</span><p>${house.waluigiComment}</p></div>` : ''}
            
            ${house.cadetBranches && house.cadetBranches.length > 0 ? `
                <div class="cadet-branches">
                    <h3>Cadet Branches</h3>
                    ${house.cadetBranches.map(b => `
                        <div class="cadet-item ${b.status?.toLowerCase() || ''}" data-branch="${b.id || ''}">
                            <span class="cadet-sigil">${b.sigil || '?'}</span>
                            <div class="cadet-info">
                                <span class="cadet-name">${b.name || 'Unknown'}</span>
                                <span class="cadet-status">${b.status || 'Unknown'}</span>
                                ${b.currentHead ? `<span class="cadet-head">Head: ${b.currentHead.name || 'Unknown'}</span>` : ''}
                            </div>
                            <div class="cadet-meta">
                                <span class="cadet-claim" title="Claim Strength">${'★'.repeat(b.claimStrength || 0)}${'☆'.repeat(5 - (b.claimStrength || 0))}</span>
                                ${b.members ? `<span class="cadet-count">${b.members.length} members</span>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${house.clans && house.clans.length > 0 ? `
                <div class="clan-list">
                    <h3>Clans</h3>
                    ${house.clans.map(c => `
                        <div class="clan-item">
                            <span class="clan-name">${c.name || 'Unknown'}</span>
                            <span class="clan-leader">${c.leader || 'Unknown'}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </aside>
    `;
}



renderBranchMembersTree(members) {
    if (!members || members.length === 0) {
        return '<p class="no-members">No members recorded.</p>';
    }
    
    // Group by generation
    const generations = {};
    members.forEach(m => {
        const gen = m.generation ?? 0;
        if (!generations[gen]) generations[gen] = [];
        generations[gen].push(m);
    });
    
    const sortedGens = Object.keys(generations).sort((a, b) => Number(a) - Number(b));
    
    return `
        <div class="branch-tree">
            ${sortedGens.map(gen => `
                <div class="branch-generation" data-gen="${gen}">
                    <div class="generation-header">
                        <span class="gen-label">Generation ${gen}</span>
                        <span class="gen-count">${generations[gen].length} member${generations[gen].length !== 1 ? 's' : ''}</span>
                    </div>
                    <div class="generation-members">
                        ${generations[gen].map(member => `
                            <div class="branch-member-card ${(member.status || 'unknown').toLowerCase().replace(/[^a-z]/g, '')}" 
                                 data-member-id="${member.id || ''}"
                                 data-branch-member="true">
                                <div class="member-portrait">${member.portrait || member.icon || '❓'}</div>
                                <div class="member-info">
                                    <span class="member-name">${member.name || 'Unknown'}</span>
                                    ${member.epithet ? `<span class="member-epithet">"${member.epithet}"</span>` : ''}
                                    <span class="member-dates">${member.born || '?'} - ${member.died || 'Present'}</span>
                                </div>
                                <div class="member-status-badge">${member.status || 'Unknown'}</div>
                                ${member.secrets && member.secrets.length > 0 ? `
                                    <div class="member-secrets-indicator">
                                        ${this.canAccess(member.secrets[0]?.intel || 0) ? '🔓' : '🔒'}
                                        <span class="secrets-count">${member.secrets.length}</span>
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

bindBranchMemberEvents(modal, branch) {
    const memberCards = modal.querySelectorAll('[data-branch-member="true"]');
    
    memberCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const memberId = card.dataset.memberId;
            if (memberId && branch.members) {
                const member = branch.members.find(m => m.id === memberId);
                if (member) {
                    this.openBranchMemberDetail(member, branch);
                }
            }
        });
    });
}


openBranchMemberDetail(member, branch) {
    const modal = this.container.querySelector('#dynasty-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="member-detail-view">
            <button class="back-to-branch" data-branch-id="${branch.id}">
                ← Back to ${branch.name || 'Branch'}
            </button>
            
            <div class="member-detail-header">
                <div class="member-portrait-large">${member.portrait || member.icon || '❓'}</div>
                <div class="member-header-info">
                    <h2 class="member-full-name">${member.name || 'Unknown'}</h2>
                    ${member.epithet ? `<span class="member-epithet">"${member.epithet}"</span>` : ''}
                    <div class="member-meta">
                        <span class="meta-item"><strong>Status:</strong> ${member.status || 'Unknown'}</span>
                        <span class="meta-item"><strong>Born:</strong> ${member.born || 'Unknown'}</span>
                        <span class="meta-item"><strong>Died:</strong> ${member.died || 'Living'}</span>
                        ${member.generation ? `<span class="meta-item"><strong>Generation:</strong> ${member.generation}</span>` : ''}
                    </div>
                    <div class="member-house-badge">
                        <span class="house-sigil">${branch.sigil || '?'}</span>
                        <span class="house-name">${branch.name || 'Unknown House'}</span>
                    </div>
                </div>
            </div>
            
            <div class="member-detail-body">
                <div class="detail-section summary-section">
                    <h3>📋 Summary</h3>
                    ${formatSummaryHTML(member.summary)}
                </div>
                ${this.activeHouse === 'snowdinBoneLine' ? `<div class="detail-section waluigi-member-note"><h3>🟣 Waluigi's Assessment</h3><p>${boneLineComment(member)}</p></div>` : ''}
                
                ${member.achievements && member.achievements.length > 0 ? `
                    <div class="detail-section achievements-section">
                        <h3>🏆 Achievements</h3>
                        <ul class="achievements-list">
                            ${member.achievements.map(a => `<li>${a}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${member.controversies && member.controversies.length > 0 ? `
                    <div class="detail-section controversies-section">
                        <h3>⚠️ Controversies</h3>
                        <ul class="controversies-list">
                            ${member.controversies.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${member.relationships && member.relationships.length > 0 ? `
                    <div class="detail-section relationships-section">
                        <h3>🤝 Relationships</h3>
                        <div class="relationships-grid">
                            ${member.relationships.map(r => `
                                <div class="relationship-card">
                                    <span class="rel-person">${r.person || 'Unknown'}</span>
                                    <span class="rel-type">${r.type || 'Unknown'}</span>
                                    ${r.notes ? `<span class="rel-notes">${r.notes}</span>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${member.prophecies && member.prophecies.length > 0 ? `
                    <div class="detail-section prophecies-section">
                        <h3>🔮 Prophecies</h3>
                        <div class="prophecies-list">
                            ${member.prophecies.map(p => `
                                <div class="prophecy-card ${p.fulfilled === true ? 'fulfilled' : p.fulfilled === 'PENDING' ? 'pending' : ''}">
                                    <span class="prophecy-year">${p.year || '?'}</span>
                                    <span class="prophecy-text">"${p.prophecy}"</span>
                                    <span class="prophecy-status">${p.fulfilled === true ? '✓' : p.fulfilled === 'PENDING' ? '⏳' : '?'}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${member.clients && member.clients.length > 0 ? `
                    <div class="detail-section clients-section">
                        <h3>📋 Known Clients</h3>
                        <ul class="clients-list">
                            ${member.clients.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${member.currentStatus ? `
                    <div class="detail-section current-status-section">
                        <h3>📍 Current Status</h3>
                        <div class="current-status-grid">
                            ${Object.entries(member.currentStatus).map(([key, value]) => `
                                <div class="status-item">
                                    <span class="status-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                                    <span class="status-value">${value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${member.trueIdentity ? `
                    <div class="detail-section identity-section">
                        <h3>🎭 True Identity</h3>
                        <div class="identity-reveal">
                            <span class="identity-text">${member.trueIdentity}</span>
                        </div>
                    </div>
                ` : ''}
                
                ${member.secrets && member.secrets.length > 0 ? `
                    <div class="detail-section secrets-section">
                        <h3>🔐 Classified Intelligence</h3>
                        <div class="secrets-list">
                            ${member.secrets.map(s => `
                                <div class="secret-card ${this.canAccess(s.intel) ? 'unlocked' : 'locked'}">
                                    <span class="secret-intel">Intel ${s.intel}+</span>
                                    <p class="secret-text">${this.canAccess(s.intel) ? s.text : '████████████████████████████'}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${member.quote ? `
                    <div class="detail-section quote-section">
                        <blockquote class="member-quote">"${member.quote}"</blockquote>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    // Bind back button
    const backBtn = modal.querySelector('.back-to-branch');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            this.openBranchModal(branch.id);
        });
    }
}
  renderSpecialSidebar() {
        if (this.activeHouse === 'succession') {
            return `
                <aside class="dynasty-sidebar">
                    <div class="house-card">
                        <div class="house-sigil">📜</div>
                        <h2 class="house-name">Succession Claims</h2>
                        <p class="house-motto">Who Rules the Mushroom Throne?</p>
                    </div>
                    <div class="succession-legend">
                        <h3>Claim Strength</h3>
                        <div class="legend-item"><span class="strength-badge absolute">ABSOLUTE</span> Direct Heir</div>
                        <div class="legend-item"><span class="strength-badge strong">STRONG</span> Close Blood</div>
                        <div class="legend-item"><span class="strength-badge moderate">MODERATE</span> Cadet Branch</div>
                        <div class="legend-item"><span class="strength-badge weak">WEAK</span> Disputed</div>
                        <div class="legend-item"><span class="strength-badge treaty">TREATY</span> Legal Claim</div>
                    </div>
                </aside>
            `;
        }
        
        if (this.activeHouse === 'marriages') {
            return `
                <aside class="dynasty-sidebar">
                    <div class="house-card">
                        <div class="house-sigil">💍</div>
                        <h2 class="house-name">Marriage Alliances</h2>
                        <p class="house-motto">Bonds of Blood and Power</p>
                    </div>
                    <div class="alliance-legend">
                        <h3>Alliance Types</h3>
                        <div class="legend-item"><span class="alliance-badge active">ACTIVE</span> Current</div>
                        <div class="legend-item"><span class="alliance-badge dissolved">DISSOLVED</span> Ended</div>
                        <div class="legend-item"><span class="alliance-badge secret">SECRET</span> Hidden</div>
                        <div class="legend-item"><span class="alliance-badge disputed">DISPUTED</span> Questionable</div>
                    </div>
                </aside>
            `;
        }
        
        return `<aside class="dynasty-sidebar"><p>Select a house to view details.</p></aside>`;
    }
renderMainContent() {
    // Validate activeHouse before rendering
    if (this.activeHouse === 'succession') {
        return this.renderSuccessionChart();
    }
    
    if (this.activeHouse === 'marriages') {
        return this.renderMarriageWeb();
    }
    
    const house = DYNASTY_DATA[this.activeHouse];
    if (!house) {
        return `<div class="no-data">No dynasty data available. Please select a house.</div>`;
    }

    switch (this.activeView) {
        case 'tree': return this.renderFamilyTree();
        case 'list': return this.renderMemberList();
        case 'timeline': return this.renderDynastyTimeline();
        case 'secrets': return this.renderSecrets();
        default: return this.renderFamilyTree();
    }
}

renderFamilyTree() {
    if (this.activeHouse === 'succession') {
        return this.renderSuccessionChart();
    }
    
    if (this.activeHouse === 'marriages') {
        return this.renderMarriageWeb();
    }

    const house = DYNASTY_DATA[this.activeHouse];
    if (!house) {
        return `<div class="no-data">No dynasty data available for this selection.</div>`;
    }
    
    const members = house.members || [];
    if (members.length === 0) {
        return `<div class="no-data">No members recorded for ${house.name || 'this house'}.</div>`;
    }

    // Get marriages from house data
    const marriages = house.marriages || [];

    // Group members by generation
    const generations = {};
    members.forEach(m => {
        const gen = m.generation ?? 0;
        if (!generations[gen]) generations[gen] = [];
        generations[gen].push(m);
    });

    const sortedGens = Object.keys(generations).sort((a, b) => Number(a) - Number(b));

    return `
        <div class="family-tree-container">
            <div class="tree-controls">
                <button class="tree-control" data-action="zoom-in">➕</button>
                <button class="tree-control" data-action="zoom-out">➖</button>
                <button class="tree-control" data-action="reset">↺</button>
                <span class="zoom-level">${Math.round(this.zoomLevel * 100)}%</span>
                <div class="tree-view-toggle">
                    <button class="toggle-btn active" data-mode="tree">🌳 Tree</button>
                    <button class="toggle-btn" data-mode="marriages">💍 Unions</button>
                </div>
            </div>
            
            <div class="tree-viewport">
                <div class="tree-canvas" style="transform: scale(${this.zoomLevel}) translate(${this.panOffset.x}px, ${this.panOffset.y}px)">
                    ${sortedGens.map(gen => `
                        <div class="generation-row" data-generation="${gen}">
                            <div class="generation-label">
                                <span class="gen-name">${gen === '0' ? 'Legendary' : `Generation ${gen}`}</span>
                                <span class="gen-count">${generations[gen].length} members</span>
                            </div>
                            <div class="generation-members">
                                ${this.renderGenerationMembers(generations[gen], members, marriages, house)}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="tree-legend-footer">
                <div class="legend-group">
                    <span class="legend-title">Status:</span>
                    <span class="legend-chip deceased"><span class="chip-dot"></span>Deceased</span>
                    <span class="legend-chip active"><span class="chip-dot"></span>Active</span>
                    <span class="legend-chip incapacitated"><span class="chip-dot"></span>Incapacitated</span>
                    <span class="legend-chip murdered"><span class="chip-dot"></span>Murdered</span>
                </div>
                <div class="legend-group">
                    <span class="legend-title">Unions:</span>
                    <span class="legend-chip marriage"><span class="chip-line"></span>Marriage</span>
                    <span class="legend-chip affair"><span class="chip-line"></span>Affair</span>
                    <span class="legend-chip political"><span class="chip-line"></span>Political</span>
                </div>
            </div>
        </div>
    `;
}

renderGenerationMembers(genMembers, allMembers, marriages, house) {
    const processed = new Set();
    const familyUnits = [];
    
    // Sort members - primary/important members first
    const sortedMembers = [...genMembers].sort((a, b) => {
        // Prioritize members with spouses/children
        const aScore = (a.spouse ? 10 : 0) + (a.children?.length || 0) + (a.reign ? 5 : 0);
        const bScore = (b.spouse ? 10 : 0) + (b.children?.length || 0) + (b.reign ? 5 : 0);
        return bScore - aScore;
    });
    
    sortedMembers.forEach(member => {
        if (processed.has(member.id)) return;
        processed.add(member.id);
        
        const unit = {
            primary: member,
            spouses: [],
            consorts: [],
            marriages: []
        };
        
        // Find direct spouse references
        const spouseRefs = member.spouse ? 
            (Array.isArray(member.spouse) ? member.spouse : [member.spouse]) : [];
        const spousesRef = member.spouses ? 
            (Array.isArray(member.spouses) ? member.spouses : [member.spouses]) : [];
        const allSpouseIds = [...new Set([...spouseRefs, ...spousesRef])];
        
        // Find spouses in same generation
        allSpouseIds.forEach(spouseId => {
            const spouseMember = genMembers.find(m => m.id === spouseId);
            if (spouseMember && !processed.has(spouseMember.id)) {
                unit.spouses.push(spouseMember);
                processed.add(spouseMember.id);
            }
        });
        
        // Find marriages from marriages array
        const memberName = (member.name || '').toLowerCase();
        const memberMarriages = marriages.filter(m => {
            const union = (m.union || '').toLowerCase();
            return union.includes(memberName.split(' ')[0]);
        });
        
        unit.marriages = memberMarriages;
        
        // Find external consorts (not in members list or different generation)
        memberMarriages.forEach(marriage => {
            const unionParts = (marriage.union || '').split('+').map(s => s.trim());
            
            unionParts.forEach(partnerName => {
                if (partnerName.toLowerCase().includes(memberName.split(' ')[0])) return;
                
                // Check if partner is in members
                const partnerMember = allMembers.find(m => {
                    const mName = (m.name || '').toLowerCase();
                    return mName.includes(partnerName.toLowerCase().split(' ')[0]) ||
                           partnerName.toLowerCase().includes(mName.split(' ')[0]);
                });
                
                if (partnerMember) {
                    // Partner is in tree but maybe different generation
                    if (partnerMember.generation === member.generation) {
                        if (!processed.has(partnerMember.id) && 
                            !unit.spouses.find(s => s.id === partnerMember.id)) {
                            unit.spouses.push({
                                ...partnerMember,
                                marriageInfo: marriage
                            });
                            processed.add(partnerMember.id);
                        }
                    } else {
                        // Different generation - show as consort reference
                        unit.consorts.push({
                            ...partnerMember,
                            marriageInfo: marriage,
                            inTree: true
                        });
                    }
                } else {
                    // External consort - not in members
                    unit.consorts.push({
                        id: `ext_${Math.random().toString(36).substr(2, 9)}`,
                        name: partnerName,
                        isExternal: true,
                        marriageInfo: marriage,
                        status: marriage.status?.toLowerCase().includes('ended') ? 'former' : 'consort'
                    });
                }
            });
        });
        
        familyUnits.push(unit);
    });
    
    return familyUnits.map(unit => this.renderMainTreeFamilyUnit(unit, house)).join('');
}

renderMainTreeFamilyUnit(unit, house) {
    const { primary, spouses, consorts, marriages } = unit;
    const hasPartners = spouses.length > 0 || consorts.length > 0;
    const isPolygamous = (spouses.length + consorts.length) > 1;
    
    // Single person - no marriages
    if (!hasPartners) {
        return `
            <div class="tree-family-unit single">
                ${this.renderMainTreeNode(primary, house)}
            </div>
        `;
    }
    
    // Single marriage/partnership
    if (!isPolygamous) {
        const partner = spouses[0] || consorts[0];
        const marriage = partner.marriageInfo || marriages[0] || {};
        
        return `
            <div class="tree-family-unit couple">
                ${this.renderMainTreeNode(primary, house)}
                ${this.renderMarriageConnector(marriage)}
                ${this.renderMainTreeNode(partner, house, true)}
                ${this.renderChildrenIndicator(primary, marriage)}
            </div>
        `;
    }
    
    // Multiple marriages/consorts
    return `
        <div class="tree-family-unit polygamous">
            <div class="primary-spouse-block">
                ${this.renderMainTreeNode(primary, house)}
            </div>
            <div class="consorts-block">
                ${[...spouses, ...consorts].map((partner, idx) => {
                    const marriage = partner.marriageInfo || marriages[idx] || {};
                    return `
                        <div class="consort-row ${this.getMarriageClass(marriage.type)}">
                            ${this.renderConsortConnector(marriage)}
                            ${this.renderMainTreeNode(partner, house, true)}
                            ${marriage.result ? `
                                <div class="consort-offspring">
                                    <span class="offspring-arrow">→</span>
                                    <span class="offspring-text">👶 ${marriage.result}</span>
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

renderMainTreeNode(member, house, isPartner = false) {
    const status = (member.status || 'unknown').toLowerCase().replace(/[^a-z]/g, '');
    const hasSecrets = member.secrets && member.secrets.length > 0;
    const isExternal = member.isExternal;
    const inTree = member.inTree;
    
    // Count accessible secrets
    const accessibleSecrets = hasSecrets ? 
        member.secrets.filter(s => this.canAccess(s.intel)).length : 0;
    
    return `
        <div class="tree-node ${status} ${isPartner ? 'partner' : 'primary'} ${isExternal ? 'external' : ''} ${inTree ? 'in-tree' : ''}" 
             data-member-id="${member.id || ''}"
             data-status="${member.status || 'unknown'}">
            
            <div class="node-portrait-wrap">
                <div class="node-portrait">${member.portrait || member.icon || (isExternal ? '👤' : '❓')}</div>
                ${member.birthOrder ? `<span class="node-birth-order">#${member.birthOrder}</span>` : ''}
                ${member.reign ? `<span class="node-crown">👑</span>` : ''}
            </div>
            
            <div class="node-info">
                <span class="node-name">${member.name || 'Unknown'}</span>
                ${member.epithet ? `<span class="node-epithet">"${member.epithet}"</span>` : ''}
                <span class="node-dates">
                    ${member.born || '?'} – ${member.died || (status.includes('active') ? 'Present' : '?')}
                </span>
                ${member.reign ? `<span class="node-reign">Reign: ${member.reign}</span>` : ''}
            </div>
            
            <div class="node-footer">
                <span class="node-status-badge ${status}">
                    ${this.getStatusIcon(member.status)} ${this.getShortStatus(member.status)}
                </span>
                ${hasSecrets ? `
                    <span class="node-secrets-badge" title="${accessibleSecrets}/${member.secrets.length} secrets accessible">
                        ${accessibleSecrets > 0 ? '🔓' : '🔒'} ${accessibleSecrets}/${member.secrets.length}
                    </span>
                ` : ''}
                ${isExternal ? `<span class="node-external-badge">External</span>` : ''}
                ${inTree ? `<span class="node-intree-badge">↗ In Tree</span>` : ''}
            </div>
            
            ${member.marriageInfo ? `
                <div class="node-marriage-tag ${this.getMarriageClass(member.marriageInfo.type)}">
                    ${this.getMarriageSymbol(member.marriageInfo.type)} ${member.marriageInfo.type || 'Union'}
                    <span class="marriage-dates">${member.marriageInfo.date || ''}</span>
                </div>
            ` : ''}
        </div>
    `;
}

renderMarriageConnector(marriage) {
    const type = marriage.type || '';
    const typeClass = this.getMarriageClass(type);
    const symbol = this.getMarriageSymbol(type);
    
    return `
        <div class="marriage-connector ${typeClass}">
            <div class="connector-arm left"></div>
            <div class="connector-hub" title="${type || 'Marriage'}: ${marriage.date || 'Unknown date'}">
                <span class="hub-symbol">${symbol}</span>
                <span class="hub-type">${type || 'Marriage'}</span>
                <span class="hub-date">${marriage.date || ''}</span>
            </div>
            <div class="connector-arm right"></div>
        </div>
    `;
}

renderConsortConnector(marriage) {
    const type = marriage.type || '';
    const typeClass = this.getMarriageClass(type);
    const symbol = this.getMarriageSymbol(type);
    
    return `
        <div class="consort-connector ${typeClass}">
            <div class="consort-line"></div>
            <div class="consort-hub">
                <span class="hub-symbol">${symbol}</span>
            </div>
            <div class="consort-meta">
                <span class="meta-type">${type || 'Union'}</span>
                <span class="meta-date">${marriage.date || ''}</span>
                <span class="meta-status ${(marriage.status || '').toLowerCase().replace(/[^a-z]/g, '')}">${marriage.status || ''}</span>
            </div>
        </div>
    `;
}

renderChildrenIndicator(primary, marriage) {
    const children = primary.children || [];
    const childCount = Array.isArray(children) ? children.length : 0;
    const result = marriage.result;
    
    if (childCount === 0 && !result) return '';
    
    return `
        <div class="children-indicator">
            <div class="children-stem"></div>
            <div class="children-info">
                ${result ? `<span class="children-names">👶 ${result}</span>` : ''}
                ${childCount > 0 && !result ? `<span class="children-count">👶 ${childCount} children</span>` : ''}
            </div>
        </div>
    `;
}

getShortStatus(status) {
    if (!status) return '?';
    const s = status.toLowerCase();
    if (s.includes('active')) return 'Active';
    if (s.includes('deceased')) return 'Dead';
    if (s.includes('murdered') || s.includes('assassinated')) return 'Killed';
    if (s.includes('incapacitated')) return 'Incap';
    if (s.includes('banished') || s.includes('unknown')) return 'Exiled';
    if (s.includes('missing') || s.includes('hidden')) return 'Hidden';
    if (s.includes('legendary') || s.includes('transcended')) return 'Legend';
    if (s.includes('merged')) return 'Merged';
    if (s.includes('alive')) return 'Alive';
    return status.substring(0, 6);
}

getMarriageSymbol(type) {
    if (!type) return '💍';
    const t = type.toLowerCase();
    if (t.includes('affair') && t.includes('first')) return '💗';
    if (t.includes('affair')) return '❤️';
    if (t.includes('true love')) return '💕';
    if (t.includes('political')) return '🤝';
    if (t.includes('warrior') || t.includes('combat')) return '⚔️';
    if (t.includes('annul')) return '💔';
    if (t.includes('secret')) return '🤫';
    if (t.includes('obsess')) return '🖤';
    return '💍';
}

getMarriageClass(type) {
    if (!type) return 'marriage';
    const t = type.toLowerCase();
    if (t.includes('affair')) return 'affair';
    if (t.includes('true love')) return 'true-love';
    if (t.includes('political')) return 'political';
    if (t.includes('warrior')) return 'warrior';
    if (t.includes('annul')) return 'annulled';
    if (t.includes('obsess')) return 'obsessive';
    return 'marriage';
}

getStatusIcon(status) {
    if (!status) return '❓';
    const s = status.toLowerCase();
    if (s.includes('active')) return '✓';
    if (s.includes('deceased')) return '†';
    if (s.includes('murdered') || s.includes('assassinated')) return '🗡️';
    if (s.includes('incapacitated')) return '💫';
    if (s.includes('missing') || s.includes('hidden')) return '👁️';
    if (s.includes('banished') || s.includes('unknown')) return '🚫';
    if (s.includes('abroad')) return '🌍';
    if (s.includes('erased')) return '✖️';
    if (s.includes('merged') || s.includes('transcended')) return '✨';
    if (s.includes('legendary')) return '⭐';
    if (s.includes('alive')) return '💚';
    if (s.includes('former') || s.includes('consort')) return '👤';
    return '?';
}
renderTreeNode(member) {
    const status = member.status || 'unknown';
    const statusClass = status.toLowerCase().replace(/[^a-z]/g, '');
    const hasSecrets = member.secrets && member.secrets.length > 0;
    const canView = hasSecrets ? this.canAccess(member.secrets[0]?.intel || 0) : false;
    
    return `
        <div class="tree-node ${statusClass}" 
             data-member-id="${member.id || ''}"
             data-status="${status}">
            <div class="node-portrait">${member.portrait || member.icon || '❓'}</div>
            <div class="node-info">
                <span class="node-name">${member.name || 'Unknown'}</span>
                ${member.epithet ? `<span class="node-epithet">${member.epithet}</span>` : ''}
                <span class="node-dates">${member.born || '?'} - ${member.died || 'Present'}</span>
            </div>
            <div class="node-status">${status}</div>
            ${hasSecrets ? `
                <div class="node-secrets-indicator" title="${canView ? 'Secrets available' : 'Requires higher intel'}">
                    ${canView ? '🔓' : '🔒'}
                </div>
            ` : ''}
        </div>
    `;
}
    renderConnections(members) {
        // This would generate SVG lines between parent-child relationships
        // For now, returning placeholder
        let lines = '';
        
        members.forEach(member => {
            if (member.children && Array.isArray(member.children)) {
                member.children.forEach(childId => {
                    // In a real implementation, calculate positions and draw lines
                    lines += `<!-- Connection: ${member.id} -> ${childId} -->`;
                });
            }
        });
        
        return lines;
    }

renderMemberList() {
    const house = DYNASTY_DATA[this.activeHouse];
    if (!house) {
        return `<div class="no-data">No members to display.</div>`;
    }
    
    const members = house.members || [];
    if (members.length === 0) {
        return `<div class="no-data">No members recorded for ${house.name || 'this house'}.</div>`;
    }

    return `
        <div class="member-list-container">
            <div class="list-header">
                <h2>Members of ${house.name || 'Unknown House'}</h2>
                <div class="list-filters">
                    <select class="filter-status">
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="deceased">Deceased</option>
                        <option value="missing">Missing</option>
                    </select>
                    <select class="filter-generation">
                        <option value="all">All Generations</option>
                        ${[...new Set(members.map(m => m.generation).filter(g => g !== undefined && g !== null))].sort((a,b) => a - b).map(g => 
                            `<option value="${g}">Generation ${g}</option>`
                        ).join('')}
                    </select>
                </div>
            </div>
            
            <div class="member-grid">
                ${members.map(member => `
                    <article class="member-card" data-member-id="${member.id || ''}">
                        <div class="card-header">
                            <span class="member-portrait">${member.portrait || member.icon || '❓'}</span>
                            <div class="member-titles">
                                <h3>${member.name || 'Unknown'}</h3>
                                ${member.epithet ? `<span class="epithet">"${member.epithet}"</span>` : ''}
                            </div>
                            <span class="member-status ${(member.status || 'unknown').toLowerCase().replace(/[^a-z]/g, '')}">${member.status || 'Unknown'}</span>
                        </div>
                        
                        <div class="card-body">
                            <div class="member-summary">${summaryIntroHTML(member.summary)}</div>
                            
                            <div class="member-dates">
                                <span>📅 ${member.born || '?'} - ${member.died || 'Present'}</span>
                                ${member.reign ? `<span>👑 Reign: ${member.reign}</span>` : ''}
                            </div>
                            
                            ${member.achievements && member.achievements.length > 0 ? `
                                <div class="member-achievements">
                                    <h4>Achievements</h4>
                                    <ul>${member.achievements.slice(0, 3).map(a => `<li>${a}</li>`).join('')}</ul>
                                </div>
                            ` : ''}
                        </div>
                        
                        <div class="card-footer">
                            <button class="view-details-btn" data-member-id="${member.id || ''}">
                                View Full Dossier
                            </button>
                            ${member.secrets && member.secrets.length > 0 ? `
                                <span class="secrets-count">${member.secrets.filter(s => this.canAccess(s.intel)).length}/${member.secrets.length} secrets</span>
                            ` : ''}
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `;
}
renderDynastyTimeline() {
    const house = DYNASTY_DATA[this.activeHouse];
    if (!house) {
        return `<div class="no-data">No timeline data available.</div>`;
    }
    
    const members = house.members || [];
    if (members.length === 0) {
        return `<div class="no-data">No timeline data available for ${house.name || 'this house'}.</div>`;
    }

    // Create events from members
    const events = [];
    
    members.forEach(member => {
        if (member.born && typeof member.born === 'number') {
            events.push({
                year: member.born,
                type: 'birth',
                icon: '👶',
                title: `${member.name || 'Unknown'} born`,
                member: member
            });
        }
        
        if (member.reign) {
            const parts = String(member.reign).split('-');
            const start = parseInt(parts[0]);
            if (!isNaN(start)) {
                events.push({
                    year: start,
                    type: 'coronation',
                    icon: '👑',
                    title: `${member.name || 'Unknown'} begins reign`,
                    member: member
                });
            }
        }
        
        if (member.died && typeof member.died === 'number') {
            events.push({
                year: member.died,
                type: 'death',
                icon: member.status === 'ASSASSINATED' ? '🗡️' : '⚰️',
                title: `${member.name || 'Unknown'} ${member.status === 'ASSASSINATED' ? 'assassinated' : 'dies'}`,
                member: member
            });
        }
    });

    if (events.length === 0) {
        return `<div class="no-data">No dated events found for ${house.name || 'this house'}.</div>`;
    }

    // Sort by year
    events.sort((a, b) => a.year - b.year);

    return `
        <div class="dynasty-timeline-container">
            <h2>${house.name || 'Dynasty'} Timeline</h2>
            
            <div class="timeline-scroll">
                <div class="timeline-track">
                    ${events.map((event, i) => `
                        <div class="timeline-event ${event.type}" style="--event-index: ${i}">
                            <div class="event-marker">
                                <span class="event-icon">${event.icon}</span>
                            </div>
                            <div class="event-content">
                                <span class="event-year">${event.year}</span>
                                <span class="event-title">${event.title}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}
renderSecrets() {
    const house = DYNASTY_DATA[this.activeHouse];
    if (!house) {
        return `<div class="no-data">No secrets database available.</div>`;
    }
    
    const members = house.members || [];
    if (members.length === 0) {
        return `<div class="no-data">No secrets database available for ${house.name || 'this house'}.</div>`;
    }

    // Collect all secrets
    const allSecrets = [];
    
    members.forEach(member => {
        if (member.secrets && Array.isArray(member.secrets)) {
            member.secrets.forEach(secret => {
                allSecrets.push({
                    ...secret,
                    source: member.name || 'Unknown',
                    sourceId: member.id || ''
                });
            });
        }
    });

    if (allSecrets.length === 0) {
        return `<div class="no-data">No classified intelligence found for ${house.name || 'this house'}.</div>`;
    }

    // Sort by intel requirement
    allSecrets.sort((a, b) => (a.intel || 0) - (b.intel || 0));

    const accessible = allSecrets.filter(s => this.canAccess(s.intel));
    const locked = allSecrets.filter(s => !this.canAccess(s.intel));

    return `
        <div class="secrets-container">
            <div class="secrets-header">
                <h2>${house.name || 'Dynasty'} - Classified Intelligence</h2>
                <div class="secrets-stats">
                    <span class="stat unlocked">🔓 ${accessible.length} Accessible</span>
                    <span class="stat locked">🔒 ${locked.length} Classified</span>
                </div>
            </div>
            
            <div class="secrets-grid">
                ${accessible.map(secret => `
                    <div class="secret-card unlocked">
                        <div class="secret-header">
                            <span class="secret-source">${secret.source}</span>
                            <span class="secret-intel">Intel ${secret.intel || 0}+</span>
                        </div>
                        <p class="secret-text">${secret.text || 'No details available.'}</p>
                    </div>
                `).join('')}
                
                ${locked.map(secret => `
                    <div class="secret-card locked">
                        <div class="secret-header">
                            <span class="secret-source">${secret.source}</span>
                            <span class="secret-intel">Intel ${secret.intel || 0}+ required</span>
                        </div>
                        <p class="secret-text">████████████████████████████</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

    renderSuccessionChart() {
        const { successionOrder } = DYNASTY_DATA;
        
        return `
            <div class="succession-container">
                <h2>Line of Succession to the Mushroom Throne</h2>
                <p class="succession-note">As of Year 1040 - All claims disputed by civil war</p>
                
                <div class="succession-list">
                    ${successionOrder.map((claim, index) => `
                        <div class="succession-card rank-${claim.rank}" data-status="${claim.status}">
                            <div class="rank-badge">${claim.rank}</div>
                            <div class="claimant-info">
                                <h3>${claim.claimant}</h3>
                                <span class="house-name">${claim.house}</span>
                            </div>
                            <div class="claim-strength ${claim.strength.toLowerCase().replace(/[^a-z]/g, '')}">
                                ${claim.strength}
                            </div>
                            <div class="claim-status">${claim.status}</div>
                            <p class="claim-notes">${claim.notes}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderMarriageWeb() {
        const { marriages } = DYNASTY_DATA;
        
        return `
            <div class="marriages-container">
                <h2>Marriage Alliances & Political Unions</h2>
                
                <div class="marriages-grid">
                    ${marriages.map(marriage => `
                        <div class="marriage-card ${marriage.status.toLowerCase().replace(/[^a-z]/g, '')}">
                            <div class="marriage-houses">
                                <span class="house-a">${marriage.houses[0]}</span>
                                <span class="marriage-link">💍</span>
                                <span class="house-b">${marriage.houses[1]}</span>
                            </div>
                            <div class="marriage-union">
                                <strong>${marriage.union}</strong>
                                <span class="marriage-date">${marriage.date}</span>
                            </div>
                            <div class="marriage-result">
                                <span class="result-label">Result:</span>
                                <span class="result-value">${marriage.result}</span>
                            </div>
                            <div class="marriage-status">${marriage.status}</div>
                            <p class="marriage-significance">${marriage.significance}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderDetailModal() {
        return `
            <div id="dynasty-modal" class="dynasty-modal-overlay hidden">
                <div class="dynasty-modal-content">
                    <button class="modal-close">×</button>
                    <div class="modal-body"></div>
                </div>
            </div>
        `;
    }

    openMemberModal(memberId) {
        const house = DYNASTY_DATA[this.activeHouse];
        if (!house) return;
        
        let member = null;
        
        // Search in main members
        if (house.members) {
            member = house.members.find(m => m.id === memberId);
        }
        
        // Search in cadet branches
        if (!member && house.cadetBranches) {
            for (const branch of house.cadetBranches) {
                if (branch.currentHead && branch.id === memberId) {
                    member = {
                        ...branch.currentHead,
                        id: branch.id,
                        icon: branch.sigil,
                        portrait: branch.sigil
                    };
                    break;
                }
            }
        }
        
        if (!member) return;
        
        const modal = this.container.querySelector('#dynasty-modal');
        const modalBody = modal.querySelector('.modal-body');
        
        modalBody.innerHTML = `
            <div class="member-dossier">
                <div class="dossier-header">
                    <span class="dossier-portrait">${member.portrait || member.icon}</span>
                    <div class="dossier-titles">
                        <h2>${member.name}</h2>
                        ${member.epithet ? `<span class="dossier-epithet">"${member.epithet}"</span>` : ''}
                        <span class="dossier-status">${member.status}</span>
                    </div>
                </div>
                
                <div class="dossier-vitals">
                    <div class="vital"><strong>Born:</strong> ${member.born || 'Unknown'}</div>
                    <div class="vital"><strong>Died:</strong> ${member.died || 'Living'}</div>
                    ${member.reign ? `<div class="vital"><strong>Reign:</strong> ${member.reign}</div>` : ''}
                    ${member.generation ? `<div class="vital"><strong>Generation:</strong> ${member.generation}</div>` : ''}
                </div>
                
                <div class="dossier-summary">
                    <h3>Summary</h3>
                    ${formatSummaryHTML(member.summary)}
                </div>
                
                ${member.achievements ? `
                    <div class="dossier-achievements">
                        <h3>Notable Achievements</h3>
                        <ul>${member.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
                    </div>
                ` : ''}
                
                ${member.controversies ? `
                    <div class="dossier-controversies">
                        <h3>Controversies</h3>
                        <ul>${member.controversies.map(c => `<li>${c}</li>`).join('')}</ul>
                    </div>
                ` : ''}
                
                ${member.relationships ? `
                    <div class="dossier-relationships">
                        <h3>Key Relationships</h3>
                        ${member.relationships.map(r => `
                            <div class="relationship-item">
                                <strong>${r.person}</strong> - ${r.type}
                                <p>${r.notes}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${member.secrets && member.secrets.length > 0 ? `
                    <div class="dossier-secrets">
                        <h3>🔐 Classified Intelligence</h3>
                        ${member.secrets.map(secret => `
                            <div class="secret-item ${this.canAccess(secret.intel) ? 'unlocked' : 'locked'}">
                                <span class="secret-intel">Intel ${secret.intel}+</span>
                                <p>${this.canAccess(secret.intel) ? secret.text : '████████████████████'}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                
                ${member.quote ? `
                    <div class="dossier-quote">
                        <blockquote>"${member.quote}"</blockquote>
                    </div>
                ` : ''}
            </div>
        `;
        
        modal.classList.remove('hidden');
    }

    bindEvents() {
        if (!this.container) return;
        
        this.container.addEventListener('click', (e) => {
            // House tabs
            const houseTab = e.target.closest('.house-tab');
            if (houseTab) {
                this.activeHouse = houseTab.dataset.house;
                this.render();
                this.bindEvents();
                return;
            }
            
            // View tabs
            const viewTab = e.target.closest('.view-tab');
            if (viewTab) {
                this.activeView = viewTab.dataset.view;
                this.render();
                this.bindEvents();
                return;
            }
            
            // Tree nodes and member cards
            const memberNode = e.target.closest('.tree-node, .member-card, [data-member-id]');
            if (memberNode && memberNode.dataset.memberId) {
                this.openMemberModal(memberNode.dataset.memberId);
                return;
            }
            
            // Cadet branch items
            const cadetItem = e.target.closest('.cadet-item');
            if (cadetItem && cadetItem.dataset.branch) {
                this.openBranchModal(cadetItem.dataset.branch);
                return;
            }
            
            // Tree controls
            const treeControl = e.target.closest('.tree-control');
            if (treeControl) {
                const action = treeControl.dataset.action;
                if (action === 'zoom-in') this.zoomLevel = Math.min(2, this.zoomLevel + 0.1);
                if (action === 'zoom-out') this.zoomLevel = Math.max(0.5, this.zoomLevel - 0.1);
                if (action === 'reset') {
                    this.zoomLevel = 1;
                    this.panOffset = { x: 0, y: 0 };
                }
                this.render();
                this.bindEvents();
                return;
            }
            
            // Modal close
            if (e.target.closest('.modal-close') || e.target.classList.contains('dynasty-modal-overlay')) {
                this.closeModal();
                return;
            }
            
            // View details button
            const detailsBtn = e.target.closest('.view-details-btn');
            if (detailsBtn && detailsBtn.dataset.memberId) {
                this.openMemberModal(detailsBtn.dataset.memberId);
                return;
            }
        });
        
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
        
        // Filter change events
        const statusFilter = this.container.querySelector('.filter-status');
        const genFilter = this.container.querySelector('.filter-generation');
        
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => {
                this.filterMembers('status', e.target.value);
            });
        }
        
        if (genFilter) {
            genFilter.addEventListener('change', (e) => {
                this.filterMembers('generation', e.target.value);
            });
        }
        
        // Tree panning with mouse drag
        const treeViewport = this.container.querySelector('.tree-viewport');
        if (treeViewport) {
            let isDragging = false;
            let startX, startY;
            
            treeViewport.addEventListener('mousedown', (e) => {
                if (e.target.closest('.tree-node')) return;
                isDragging = true;
                startX = e.clientX - this.panOffset.x;
                startY = e.clientY - this.panOffset.y;
                treeViewport.style.cursor = 'grabbing';
            });
            
            treeViewport.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                this.panOffset.x = e.clientX - startX;
                this.panOffset.y = e.clientY - startY;
                const canvas = this.container.querySelector('.tree-canvas');
                if (canvas) {
                    canvas.style.transform = `scale(${this.zoomLevel}) translate(${this.panOffset.x}px, ${this.panOffset.y}px)`;
                }
            });
            
            treeViewport.addEventListener('mouseup', () => {
                isDragging = false;
                treeViewport.style.cursor = 'grab';
            });
            
            treeViewport.addEventListener('mouseleave', () => {
                isDragging = false;
                treeViewport.style.cursor = 'grab';
            });
            
            // Mouse wheel zoom
            treeViewport.addEventListener('wheel', (e) => {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.1 : 0.1;
                this.zoomLevel = Math.max(0.5, Math.min(2, this.zoomLevel + delta));
                const canvas = this.container.querySelector('.tree-canvas');
                if (canvas) {
                    canvas.style.transform = `scale(${this.zoomLevel}) translate(${this.panOffset.x}px, ${this.panOffset.y}px)`;
                }
                const zoomDisplay = this.container.querySelector('.zoom-level');
                if (zoomDisplay) {
                    zoomDisplay.textContent = `${Math.round(this.zoomLevel * 100)}%`;
                }
            });
        }
    }
    
    filterMembers(type, value) {
        const cards = this.container.querySelectorAll('.member-card');
        cards.forEach(card => {
            let show = true;
            
            if (type === 'status' && value !== 'all') {
                const status = card.querySelector('.member-status')?.textContent.toLowerCase();
                show = status?.includes(value);
            }
            
            if (type === 'generation' && value !== 'all') {
                const memberId = card.dataset.memberId;
                const house = DYNASTY_DATA[this.activeHouse];
                const member = house?.members?.find(m => m.id === memberId);
                show = member?.generation?.toString() === value;
            }
            
            card.style.display = show ? '' : 'none';
        });
    }
    
openBranchModal(branchId) {
    const house = DYNASTY_DATA[this.activeHouse];
    if (!house?.cadetBranches) return;
    
    const branch = house.cadetBranches.find(b => b.id === branchId);
    if (!branch) return;
    
    const modal = this.container.querySelector('#dynasty-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="branch-dossier">
            <div class="dossier-header">
                <span class="dossier-sigil">${branch.sigil || '?'}</span>
                <div class="dossier-titles">
                    <h2>${branch.name || 'Unknown House'}</h2>
                    <span class="dossier-motto">"${branch.motto || 'No motto'}"</span>
                    ${branch.altMotto ? `<span class="dossier-alt-motto">"${branch.altMotto}"</span>` : ''}
                    <span class="dossier-status status-${(branch.status || 'unknown').toLowerCase().replace(/[^a-z]/g, '')}">${branch.status || 'Unknown'}</span>
                </div>
            </div>
            
            <div class="branch-tabs">
                <button class="branch-tab active" data-tab="overview">📜 Overview</button>
                <button class="branch-tab" data-tab="tree">🌳 Family Tree</button>
                <button class="branch-tab" data-tab="mysteries">❓ Mysteries</button>
                <button class="branch-tab" data-tab="assets">💰 Assets</button>
            </div>
            
            <div class="branch-tab-content">
                <div class="tab-panel active" data-panel="overview">
                    ${this.renderBranchOverview(branch)}
                </div>
                <div class="tab-panel" data-panel="tree">
                    ${this.renderBranchMiniTree(branch)}
                </div>
                <div class="tab-panel" data-panel="mysteries">
                    ${this.renderBranchMysteries(branch)}
                </div>
                <div class="tab-panel" data-panel="assets">
                    ${this.renderBranchAssets(branch)}
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    this.bindBranchTabEvents(modal, branch);
}
renderBranchMysteries(branch) {
    if (!branch.mysteries || branch.mysteries.length === 0) {
        return `<div class="no-data">No unsolved mysteries recorded for ${branch.name || 'this house'}.</div>`;
    }
    
    return `
        <div class="mysteries-container">
            <div class="mysteries-header">
                <h3>❓ Unsolved Mysteries</h3>
                <span class="mysteries-count">${branch.mysteries.length} mysteries</span>
            </div>
            
            <div class="mysteries-grid">
                ${branch.mysteries.map(m => `
                    <div class="mystery-card ${this.canAccess(m.intel || 0) ? 'unlocked' : 'locked'}">
                        <div class="mystery-header">
                            <span class="mystery-icon">${this.getMysteryIcon(m)}</span>
                            <div class="mystery-title">
                                <span class="mystery-name">${m.name || 'Unknown Mystery'}</span>
                                <span class="mystery-status">${m.status || 'Unknown'}</span>
                            </div>
                            <span class="mystery-intel">Intel ${m.intel || 0}+</span>
                        </div>
                        
                        ${this.canAccess(m.intel || 0) ? `
                            <div class="mystery-body">
                                <div class="mystery-summary">${formatSummaryHTML(m.summary)}</div>
                                
                                ${m.location ? `
                                    <div class="mystery-detail">
                                        <span class="detail-label">📍 Location:</span>
                                        <span class="detail-value">${m.location}</span>
                                    </div>
                                ` : ''}
                                
                                ${m.notes ? `
                                    <div class="mystery-detail">
                                        <span class="detail-label">📝 Notes:</span>
                                        <span class="detail-value">${m.notes}</span>
                                    </div>
                                ` : ''}
                                
                                ${m.dangerLevel ? `
                                    <div class="mystery-detail danger">
                                        <span class="detail-label">⚠️ Danger:</span>
                                        <span class="detail-value">${m.dangerLevel}</span>
                                    </div>
                                ` : ''}
                                
                                ${m.theories && m.theories.length > 0 ? `
                                    <div class="mystery-theories">
                                        <span class="theories-label">Theories:</span>
                                        <ul class="theories-list">
                                            ${m.theories.map(t => `
                                                <li>${typeof t === 'string' ? t : `${t.name || t} ${t.probability ? `(${t.probability}%)` : ''}`}</li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                                
                                ${m.suspects && m.suspects.length > 0 ? `
                                    <div class="mystery-suspects">
                                        <span class="suspects-label">Suspects:</span>
                                        <div class="suspects-list">
                                            ${m.suspects.map(s => `
                                                <div class="suspect-item">
                                                    <span class="suspect-name">${s.name || 'Unknown'}</span>
                                                    <span class="suspect-prob">${s.probability || '?'}%</span>
                                                    <span class="suspect-motive">${s.motive || 'Unknown motive'}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                                
                                ${m.copies && m.copies.length > 0 ? `
                                    <div class="mystery-copies">
                                        <span class="copies-label">Known Copies:</span>
                                        <div class="copies-list">
                                            ${m.copies.map(c => `
                                                <div class="copy-item ${c.status?.toLowerCase().includes('missing') ? 'missing' : ''}">
                                                    <span class="copy-holder">${c.holder || 'Unknown'}</span>
                                                    <span class="copy-status">${c.status || 'Unknown'}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                                
                                ${m.knownNames && m.knownNames.length > 0 ? `
                                    <div class="mystery-names">
                                        <span class="names-label">Known Names:</span>
                                        <ul class="names-list">
                                            ${m.knownNames.map(n => `<li>${n}</li>`).join('')}
                                        </ul>
                                    </div>
                                ` : ''}
                            </div>
                        ` : `
                            <div class="mystery-locked-body">
                                <p>🔒 Requires Intel ${m.intel || 0}+ to access this information.</p>
                            </div>
                        `}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

getMysteryIcon(mystery) {
    const name = (mystery.name || '').toLowerCase();
    if (name.includes('key')) return '🔑';
    if (name.includes('dossier') || name.includes('ledger') || name.includes('tome')) return '📕';
    if (name.includes('recording') || name.includes('spore')) return '🍄';
    if (name.includes('ritual')) return '🔮';
    if (name.includes('mine')) return '⛏️';
    if (name.includes('night') || name.includes('massacre')) return '🌙';
    if (name.includes('heir') || name.includes('child') || name.includes('twin')) return '👶';
    if (name.includes('dynasty') || name.includes('royal')) return '👑';
    if (name.includes('coordinate')) return '🗺️';
    if (name.includes('flower') || name.includes('bloom')) return '🌺';
    return '❓';
}

renderBranchAssets(branch) {
    if (!branch.assets) {
        return `<div class="no-data">No asset information available for ${branch.name || 'this house'}.</div>`;
    }
    
    const assets = branch.assets;
    
    return `
        <div class="assets-container">
            <div class="assets-header">
                <h3>💰 House Assets & Power</h3>
            </div>
            
            <div class="assets-grid-large">
                ${typeof assets.military === 'number' ? `
                    <div class="asset-card military">
                        <div class="asset-icon">⚔️</div>
                        <div class="asset-info">
                            <span class="asset-label">Military Strength</span>
                            <span class="asset-value">${assets.military.toLocaleString()}</span>
                            <span class="asset-unit">troops</span>
                        </div>
                        <div class="asset-bar-large">
                            <div class="asset-bar-fill" style="width: ${Math.min(100, assets.military / 50)}%"></div>
                        </div>
                    </div>
                ` : assets.military ? `
                    <div class="asset-card military special">
                        <div class="asset-icon">⚔️</div>
                        <div class="asset-info">
                            <span class="asset-label">Military</span>
                            <span class="asset-value-text">${assets.military}</span>
                        </div>
                    </div>
                ` : ''}
                
                ${assets.economic !== undefined ? `
                    <div class="asset-card economic">
                        <div class="asset-icon">💰</div>
                        <div class="asset-info">
                            <span class="asset-label">Economic Power</span>
                            <span class="asset-value">${assets.economic}</span>
                            <span class="asset-unit">/ 100</span>
                        </div>
                        <div class="asset-bar-large">
                            <div class="asset-bar-fill" style="width: ${assets.economic}%"></div>
                        </div>
                    </div>
                ` : ''}
                
                ${assets.political !== undefined ? `
                    <div class="asset-card political">
                        <div class="asset-icon">🏛️</div>
                        <div class="asset-info">
                            <span class="asset-label">Political Influence</span>
                            <span class="asset-value">${assets.political}</span>
                            <span class="asset-unit">/ 100</span>
                        </div>
                        <div class="asset-bar-large">
                            <div class="asset-bar-fill" style="width: ${assets.political}%"></div>
                        </div>
                    </div>
                ` : ''}
                
                ${assets.territory ? `
                    <div class="asset-card territory">
                        <div class="asset-icon">🗺️</div>
                        <div class="asset-info">
                            <span class="asset-label">Territory</span>
                            <span class="asset-value-text">${assets.territory}</span>
                        </div>
                    </div>
                ` : ''}
                
                ${assets.special ? `
                    <div class="asset-card special">
                        <div class="asset-icon">✨</div>
                        <div class="asset-info">
                            <span class="asset-label">Special Assets</span>
                            <span class="asset-value-text">${assets.special}</span>
                        </div>
                    </div>
                ` : ''}
                
                ${assets.legacy ? `
                    <div class="asset-card legacy">
                        <div class="asset-icon">📜</div>
                        <div class="asset-info">
                            <span class="asset-label">Legacy</span>
                            <span class="asset-value-text">${assets.legacy}</span>
                        </div>
                    </div>
                ` : ''}
            </div>
            
            ${branch.status === 'DESTROYED' ? `
                <div class="assets-destroyed-note">
                    <span class="destroyed-icon">💀</span>
                    <span class="destroyed-text">This house has been destroyed. Listed assets are historical.</span>
                </div>
            ` : ''}
        </div>
    `;
}
bindBranchTabEvents(modal, branch) {
    // Tab switching
    const tabs = modal.querySelectorAll('.branch-tab');
    const panels = modal.querySelectorAll('.tab-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            // Update active states
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            tab.classList.add('active');
            const targetPanel = modal.querySelector(`[data-panel="${targetTab}"]`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            
            // Draw tree lines after switching to tree tab
            if (targetTab === 'tree') {
                setTimeout(() => this.drawMiniTreeLines(branch), 100);
            }
        });
    });
    
    // Tree node clicks
    const treeNodes = modal.querySelectorAll('.mini-tree-node');
    treeNodes.forEach(node => {
        node.addEventListener('click', () => {
            const memberId = node.dataset.memberId;
            if (memberId && branch.members) {
                const member = branch.members.find(m => m.id === memberId);
                if (member) {
                    this.openBranchMemberDetail(member, branch);
                }
            }
        });
    });
}

drawMiniTreeLines(branch) {
    const svg = document.getElementById(`mini-tree-svg-${branch.id}`);
    if (!svg) return;
    
    // Clear existing lines
    svg.innerHTML = '';
    
    const container = svg.closest('.mini-tree-canvas');
    if (!container) return;
    
    const nodes = container.querySelectorAll('.mini-tree-node');
    const nodeMap = {};
    
    // Build node position map
    nodes.forEach(node => {
        const id = node.dataset.memberId;
        if (id) {
            const rect = node.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            nodeMap[id] = {
                x: rect.left - containerRect.left + rect.width / 2,
                y: rect.top - containerRect.top + rect.height / 2,
                bottom: rect.top - containerRect.top + rect.height,
                top: rect.top - containerRect.top
            };
        }
    });
    
    // Draw lines for parent-child relationships
    nodes.forEach(node => {
        const childrenStr = node.dataset.children;
        const parentId = node.dataset.memberId;
        
        if (childrenStr && parentId && nodeMap[parentId]) {
            const children = childrenStr.split(',').filter(c => c.trim());
            const parent = nodeMap[parentId];
            
            children.forEach(childId => {
                const child = nodeMap[childId.trim()];
                if (child) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    
                    // Create curved path
                    const midY = (parent.bottom + child.top) / 2;
                    const d = `M ${parent.x} ${parent.bottom} 
                               C ${parent.x} ${midY}, ${child.x} ${midY}, ${child.x} ${child.top}`;
                    
                    line.setAttribute('d', d);
                    line.setAttribute('class', 'tree-connection-line');
                    svg.appendChild(line);
                }
            });
        }
    });
}

renderBranchOverview(branch) {
    return `
        <div class="branch-overview">
            <div class="overview-grid">
                <div class="overview-section info-section">
                    <h3>📜 House Information</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label">Founded</span>
                            <span class="info-value">${branch.founded || 'Unknown'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Founder</span>
                            <span class="info-value">${branch.founder || 'Unknown'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Seat</span>
                            <span class="info-value">${branch.seat || 'Unknown'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Relationship</span>
                            <span class="info-value">${branch.relationship || 'Unknown'}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Claim Strength</span>
                            <span class="info-value claim-stars">${'★'.repeat(branch.claimStrength || 0)}${'☆'.repeat(5 - (branch.claimStrength || 0))}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Members</span>
                            <span class="info-value">${branch.members?.length || 0} recorded</span>
                        </div>
                    </div>
                </div>
                
                ${branch.currentHead ? `
                    <div class="overview-section head-section">
                        <h3>👑 Current Head</h3>
                        <div class="current-head-card">
                            <div class="head-info">
                                <span class="head-name">${branch.currentHead.name || 'Unknown'}</span>
                                ${branch.currentHead.age ? `<span class="head-age">Age ${branch.currentHead.age}</span>` : ''}
                            </div>
                            <div class="head-summary">${formatSummaryHTML(branch.currentHead.summary)}</div>
                            ${branch.currentHead.secrets && branch.currentHead.secrets.length > 0 ? `
                                <div class="head-secrets">
                                    ${branch.currentHead.secrets.map(s => `
                                        <div class="mini-secret ${this.canAccess(s.intel) ? 'unlocked' : 'locked'}">
                                            <span class="secret-intel">${s.intel}+</span>
                                            <span class="secret-text">${this.canAccess(s.intel) ? s.text : '████████████'}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                ` : ''}
                
                ${branch.destruction ? `
                    <div class="overview-section destruction-section">
                        <h3>💀 Destruction</h3>
                        <div class="destruction-card">
                            <div class="destruction-event">${branch.destruction.event || 'Unknown Event'}</div>
                            <div class="destruction-date">Year ${branch.destruction.date || '?'}</div>
                            <p class="destruction-cause">${branch.destruction.cause || 'Unknown cause'}</p>
                            ${branch.destruction.perpetrators ? `
                                <div class="destruction-perps">
                                    <strong>Suspected:</strong> ${branch.destruction.perpetrators}
                                </div>
                            ` : ''}
                            <div class="destruction-stats">
                                <span class="stat casualties">☠️ ${branch.destruction.casualties || '?'} casualties</span>
                                <span class="stat survivors">✓ ${branch.destruction.survivors || '0'} survivors</span>
                            </div>
                        </div>
                    </div>
                ` : ''}
                
                ${branch.specialNote ? `
                    <div class="overview-section note-section">
                        <h3>📌 Special Note</h3>
                        <p class="special-note">${branch.specialNote}</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

renderBranchMiniTree(branch) {
    if (!branch.members || branch.members.length === 0) {
        return `<div class="no-data">No family tree data available for ${branch.name || 'this house'}.</div>`;
    }
    
    // Build family structure with marriages
    const familyData = this.buildFamilyStructure(branch.members, branch.marriages);
    
    return `
        <div class="mini-tree-container">
            <div class="mini-tree-header">
                <h3>🌳 ${branch.name || 'House'} Family Tree</h3>
                <span class="tree-count">${branch.members.length} members | ${(branch.marriages || []).length} unions</span>
            </div>
            
            <div class="tree-view-controls">
                <button class="tree-view-btn active" data-view="tree">🌳 Tree View</button>
                <button class="tree-view-btn" data-view="marriages">💍 Marriages</button>
                <button class="tree-view-btn" data-view="timeline">📅 Timeline</button>
            </div>
            
            <div class="tree-view-panel active" data-panel="tree">
                ${this.renderVisualFamilyTree(familyData, branch)}
            </div>
            
            <div class="tree-view-panel" data-panel="marriages">
                ${this.renderMarriagesView(branch)}
            </div>
            
            <div class="tree-view-panel" data-panel="timeline">
                ${this.renderFamilyTimeline(branch)}
            </div>
            
            <div class="tree-legend">
                <div class="legend-section">
                    <span class="legend-title">Status:</span>
                    <div class="legend-item"><span class="legend-dot deceased"></span> Deceased</div>
                    <div class="legend-item"><span class="legend-dot active"></span> Active</div>
                    <div class="legend-item"><span class="legend-dot murdered"></span> Murdered</div>
                    <div class="legend-item"><span class="legend-dot hidden"></span> Hidden</div>
                </div>
                <div class="legend-section">
                    <span class="legend-title">Lines:</span>
                    <div class="legend-item"><span class="legend-line marriage"></span> Marriage</div>
                    <div class="legend-item"><span class="legend-line child"></span> Parent-Child</div>
                    <div class="legend-item"><span class="legend-line affair"></span> Affair</div>
                </div>
            </div>
        </div>
    `;
}

buildFamilyStructure(members, marriages = []) {
    const structure = {
        members: {},
        marriages: [],
        generations: {},
        rootMembers: []
    };
    
    // Index all members
    members.forEach(m => {
        structure.members[m.id] = {
            ...m,
            spouseIds: [],
            childrenIds: [],
            parentIds: []
        };
        
        const gen = m.generation ?? 0;
        if (!structure.generations[gen]) {
            structure.generations[gen] = [];
        }
        structure.generations[gen].push(m.id);
        
        // Track parent relationships
        if (m.parents) {
            const parentList = Array.isArray(m.parents) ? m.parents : [m.parents];
            structure.members[m.id].parentIds = parentList.filter(p => p);
        }
        
        // Track children
        if (m.children) {
            const childList = Array.isArray(m.children) ? m.children : [m.children];
            structure.members[m.id].childrenIds = childList.filter(c => c);
        }
        
        // Track spouses
        if (m.spouse) {
            const spouseList = Array.isArray(m.spouse) ? m.spouse : [m.spouse];
            structure.members[m.id].spouseIds = spouseList.filter(s => s);
        }
    });
    
    // Find root members (no parents in the tree)
    Object.values(structure.members).forEach(m => {
        const hasParentInTree = m.parentIds.some(pid => structure.members[pid]);
        if (!hasParentInTree) {
            structure.rootMembers.push(m.id);
        }
    });
    
    // Process marriages
    if (marriages && marriages.length > 0) {
        structure.marriages = marriages.map(marriage => {
            // Parse union string to get both parties
            const unionMatch = marriage.union?.match(/(.+?)\s*\+\s*(.+)/);
            let person1 = null, person2 = null;
            
            if (unionMatch) {
                const name1 = unionMatch[1].trim();
                const name2 = unionMatch[2].trim();
                
                // Find matching members
                person1 = Object.values(structure.members).find(m => 
                    m.name?.toLowerCase().includes(name1.toLowerCase().split(' ')[0]) ||
                    m.id?.toLowerCase().includes(name1.toLowerCase().replace(/\s+/g, '_'))
                );
                person2 = Object.values(structure.members).find(m => 
                    m.name?.toLowerCase().includes(name2.toLowerCase().split(' ')[0]) ||
                    m.id?.toLowerCase().includes(name2.toLowerCase().replace(/\s+/g, '_'))
                );
            }
            
            return {
                ...marriage,
                person1Id: person1?.id,
                person2Id: person2?.id,
                person1,
                person2
            };
        });
    }
    
    return structure;
}

renderVisualFamilyTree(familyData, branch) {
    const { generations, members, marriages } = familyData;
    const sortedGens = Object.keys(generations).sort((a, b) => Number(a) - Number(b));
    
    return `
        <div class="visual-tree-viewport">
            <div class="visual-tree-canvas" id="tree-canvas-${branch.id}">
                ${sortedGens.map(gen => {
                    const genMembers = generations[gen].map(id => members[id]).filter(Boolean);
                    
                    // Group members into family units (couples + children indicator)
                    const familyUnits = this.groupIntoFamilyUnits(genMembers, members, marriages);
                    
                    return `
                        <div class="tree-generation" data-gen="${gen}">
                            <div class="gen-label-vertical">
                                <span class="gen-text">${gen === '0' ? 'Legendary' : `Gen ${gen}`}</span>
                            </div>
                            <div class="gen-content">
                                ${familyUnits.map(unit => this.renderFamilyUnit(unit, branch, members)).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
                
                <svg class="tree-connections-svg" id="connections-${branch.id}">
                    <!-- Connection lines will be drawn by JS -->
                </svg>
            </div>
        </div>
    `;
}

groupIntoFamilyUnits(genMembers, allMembers, marriages) {
    const units = [];
    const processed = new Set();
    
    genMembers.forEach(member => {
        if (processed.has(member.id)) return;
        
        const unit = {
            primary: member,
            spouses: [],
            type: 'single'
        };
        
        processed.add(member.id);
        
        // Find spouses
        if (member.spouseIds && member.spouseIds.length > 0) {
            member.spouseIds.forEach(spouseId => {
                const spouse = allMembers[spouseId];
                if (spouse && !processed.has(spouseId)) {
                    unit.spouses.push(spouse);
                    processed.add(spouseId);
                }
            });
        }
        
        // Also check marriages array for consorts not in main members
        if (marriages) {
            marriages.forEach(m => {
                if (m.person1Id === member.id && m.person2 && !processed.has(m.person2Id)) {
                    unit.spouses.push({
                        ...m.person2,
                        marriageType: m.type,
                        marriageDate: m.date,
                        marriageStatus: m.status,
                        isExternal: !allMembers[m.person2Id]
                    });
                } else if (m.person2Id === member.id && m.person1 && !processed.has(m.person1Id)) {
                    unit.spouses.push({
                        ...m.person1,
                        marriageType: m.type,
                        marriageDate: m.date,
                        marriageStatus: m.status,
                        isExternal: !allMembers[m.person1Id]
                    });
                }
            });
        }
        
        unit.type = unit.spouses.length > 0 ? (unit.spouses.length > 1 ? 'polygamous' : 'married') : 'single';
        units.push(unit);
    });
    
    return units;
}

renderFamilyUnit(unit, branch, allMembers) {
    const { primary, spouses, type } = unit;
    
    if (type === 'single') {
        return `
            <div class="family-unit single">
                ${this.renderTreePerson(primary, branch, 'primary')}
            </div>
        `;
    }
    
    if (type === 'married' && spouses.length === 1) {
        return `
            <div class="family-unit married">
                ${this.renderTreePerson(primary, branch, 'primary')}
                <div class="marriage-connector">
                    <div class="connector-line"></div>
                    <div class="connector-symbol" title="${spouses[0].marriageType || 'Marriage'}">
                        ${this.getMarriageSymbol(spouses[0].marriageType)}
                    </div>
                    <div class="connector-line"></div>
                </div>
                ${this.renderTreePerson(spouses[0], branch, 'spouse')}
                ${primary.childrenIds && primary.childrenIds.length > 0 ? `
                    <div class="children-indicator" data-children="${primary.childrenIds.join(',')}">
                        <span class="children-line"></span>
                        <span class="children-count">${primary.childrenIds.length} children</span>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    // Polygamous (multiple spouses/consorts)
    return `
        <div class="family-unit polygamous">
            <div class="primary-with-consorts">
                ${this.renderTreePerson(primary, branch, 'primary')}
                <div class="consorts-container">
                    ${spouses.map((spouse, idx) => `
                        <div class="consort-connection" data-index="${idx}">
                            <div class="consort-line ${this.getMarriageClass(spouse.marriageType)}"></div>
                            ${this.renderTreePerson(spouse, branch, 'consort')}
                            <div class="consort-info">
                                <span class="consort-type">${spouse.marriageType || 'Union'}</span>
                                <span class="consort-date">${spouse.marriageDate || ''}</span>
                                <span class="consort-status ${(spouse.marriageStatus || '').toLowerCase().replace(/[^a-z]/g, '')}">${spouse.marriageStatus || ''}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

renderTreePerson(person, branch, role = 'primary') {
    if (!person) return '';
    
    const status = (person.status || 'unknown').toLowerCase().replace(/[^a-z]/g, '');
    const hasSecrets = person.secrets && person.secrets.length > 0;
    const isExternal = person.isExternal;
    
    return `
        <div class="tree-person ${status} ${role} ${isExternal ? 'external' : ''}"
             data-person-id="${person.id || ''}"
             data-branch-id="${branch.id}"
             data-role="${role}">
            <div class="person-portrait">
                <span class="portrait-emoji">${person.portrait || person.icon || '❓'}</span>
                ${person.birthOrder ? `<span class="birth-order">#${person.birthOrder}</span>` : ''}
            </div>
            <div class="person-details">
                <span class="person-name">${this.truncateName(person.name, 18) || 'Unknown'}</span>
                ${person.epithet ? `<span class="person-epithet">"${this.truncateName(person.epithet, 15)}"</span>` : ''}
                <span class="person-dates">
                    ${person.born || '?'} - ${person.died || (status === 'active' ? 'Present' : '?')}
                </span>
                ${person.reign ? `<span class="person-reign">👑 ${person.reign}</span>` : ''}
            </div>
            <div class="person-badges">
                <span class="status-badge ${status}">${this.getStatusIcon(person.status)} ${this.getStatusLabel(person.status)}</span>
                ${hasSecrets ? `
                    <span class="secrets-badge" title="${person.secrets.length} secrets">
                        🔐 ${person.secrets.filter(s => this.canAccess(s.intel)).length}/${person.secrets.length}
                    </span>
                ` : ''}
                ${isExternal ? `<span class="external-badge" title="External to this house">🔗</span>` : ''}
            </div>
            ${person.marriageType ? `
                <div class="marriage-badge ${this.getMarriageClass(person.marriageType)}">
                    ${this.getMarriageSymbol(person.marriageType)} ${person.marriageType}
                </div>
            ` : ''}
        </div>
    `;
}

getMarriageSymbol(type) {
    if (!type) return '💍';
    const t = type.toLowerCase();
    if (t.includes('affair') || t.includes('love')) return '❤️';
    if (t.includes('political')) return '🤝';
    if (t.includes('warrior') || t.includes('combat')) return '⚔️';
    if (t.includes('annul')) return '💔';
    if (t.includes('secret')) return '🤫';
    if (t.includes('true love')) return '💕';
    return '💍';
}

getMarriageClass(type) {
    if (!type) return 'marriage';
    const t = type.toLowerCase();
    if (t.includes('affair')) return 'affair';
    if (t.includes('political')) return 'political';
    if (t.includes('warrior')) return 'warrior';
    if (t.includes('annul')) return 'annulled';
    if (t.includes('true love')) return 'true-love';
    return 'marriage';
}

getStatusLabel(status) {
    if (!status) return 'Unknown';
    const s = status.toLowerCase();
    if (s.includes('active')) return 'Active';
    if (s.includes('deceased')) return 'Deceased';
    if (s.includes('murdered')) return 'Murdered';
    if (s.includes('incapacitated')) return 'Incap.';
    if (s.includes('banished')) return 'Exiled';
    if (s.includes('missing') || s.includes('hidden')) return 'Hidden';
    if (s.includes('transcended') || s.includes('merged')) return 'Ascended';
    if (s.includes('legendary')) return 'Legend';
    return status.substring(0, 8);
}

renderMarriagesView(branch) {
    const marriages = branch.marriages || [];
    
    if (marriages.length === 0) {
        return `<div class="no-data">No marriage records available.</div>`;
    }
    
    // Group by status
    const active = marriages.filter(m => m.status?.toLowerCase().includes('active'));
    const ended = marriages.filter(m => !m.status?.toLowerCase().includes('active'));
    
    return `
        <div class="marriages-visual-container">
            <div class="marriages-summary">
                <div class="summary-stat">
                    <span class="stat-value">${marriages.length}</span>
                    <span class="stat-label">Total Unions</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${active.length}</span>
                    <span class="stat-label">Active</span>
                </div>
                <div class="summary-stat">
                    <span class="stat-value">${ended.length}</span>
                    <span class="stat-label">Ended</span>
                </div>
            </div>
            
            <div class="marriages-timeline">
                ${marriages.sort((a, b) => {
                    const dateA = typeof a.date === 'string' ? parseInt(a.date) : a.date;
                    const dateB = typeof b.date === 'string' ? parseInt(b.date) : b.date;
                    return (dateA || 0) - (dateB || 0);
                }).map(marriage => this.renderMarriageCard(marriage, branch)).join('')}
            </div>
        </div>
    `;
}

renderMarriageCard(marriage, branch) {
    const statusClass = (marriage.status || '').toLowerCase().replace(/[^a-z]/g, '');
    const typeClass = this.getMarriageClass(marriage.type);
    
    return `
        <div class="marriage-visual-card ${statusClass} ${typeClass}">
            <div class="marriage-visual-header">
                <span class="marriage-symbol">${this.getMarriageSymbol(marriage.type)}</span>
                <span class="marriage-type-label">${marriage.type || 'Union'}</span>
                <span class="marriage-date-range">${marriage.date || 'Unknown'}</span>
            </div>
            
            <div class="marriage-parties">
                <div class="party party-1">
                    <span class="party-icon">👤</span>
                    <span class="party-name">${this.extractName(marriage.union, 0)}</span>
                </div>
                <div class="marriage-bond">
                    <div class="bond-line ${typeClass}"></div>
                    <div class="bond-heart">${this.getMarriageSymbol(marriage.type)}</div>
                    <div class="bond-line ${typeClass}"></div>
                </div>
                <div class="party party-2">
                    <span class="party-icon">👤</span>
                    <span class="party-name">${this.extractName(marriage.union, 1)}</span>
                </div>
            </div>
            
            ${marriage.result ? `
                <div class="marriage-result">
                    <span class="result-icon">👶</span>
                    <span class="result-text">${marriage.result}</span>
                </div>
            ` : ''}
            
            <div class="marriage-footer">
                <span class="marriage-status ${statusClass}">${marriage.status || 'Unknown'}</span>
                ${marriage.significance ? `
                    <p class="marriage-significance">${marriage.significance}</p>
                ` : ''}
            </div>
        </div>
    `;
}

extractName(unionString, index) {
    if (!unionString) return 'Unknown';
    const parts = unionString.split('+').map(p => p.trim());
    return parts[index] || 'Unknown';
}

renderFamilyTimeline(branch) {
    const events = [];
    
    // Collect birth events
    (branch.members || []).forEach(member => {
        if (member.born && typeof member.born === 'number') {
            events.push({
                year: member.born,
                type: 'birth',
                icon: '👶',
                title: `${member.name || 'Unknown'} born`,
                subtitle: member.epithet || '',
                person: member
            });
        }
        
        if (member.died && typeof member.died === 'number') {
            const deathIcon = member.status?.toLowerCase().includes('murder') ? '🗡️' : 
                             member.status?.toLowerCase().includes('assassin') ? '🗡️' : '⚰️';
            events.push({
                year: member.died,
                type: 'death',
                icon: deathIcon,
                title: `${member.name || 'Unknown'} ${member.status?.toLowerCase().includes('murder') ? 'murdered' : 'died'}`,
                subtitle: member.epithet || '',
                person: member
            });
        }
        
        if (member.reign) {
            const [start, end] = String(member.reign).split('-').map(s => parseInt(s.trim()));
            if (start) {
                events.push({
                    year: start,
                    type: 'coronation',
                    icon: '👑',
                    title: `${member.name || 'Unknown'} begins reign`,
                    subtitle: member.epithet || '',
                    person: member
                });
            }
        }
    });
    
    // Collect marriage events
    (branch.marriages || []).forEach(marriage => {
        const dateStr = String(marriage.date || '');
        const year = parseInt(dateStr.split('-')[0]);
        if (year) {
            events.push({
                year: year,
                type: 'marriage',
                icon: this.getMarriageSymbol(marriage.type),
                title: marriage.union || 'Union',
                subtitle: marriage.type || '',
                marriage: marriage
            });
        }
    });
    
    // Sort by year
    events.sort((a, b) => a.year - b.year);
    
    if (events.length === 0) {
        return `<div class="no-data">No timeline events available.</div>`;
    }
    
    // Group by era
    const eras = {};
    events.forEach(e => {
        const era = Math.floor(e.year / 100) * 100;
        const eraLabel = e.year < 0 ? `${Math.abs(era)}s BCE` : `${era}s`;
        if (!eras[era]) eras[era] = { label: eraLabel, events: [] };
        eras[era].events.push(e);
    });
    
    return `
        <div class="family-timeline-container">
            <div class="timeline-eras">
                ${Object.entries(eras).sort((a, b) => Number(a[0]) - Number(b[0])).map(([era, data]) => `
                    <div class="timeline-era">
                        <div class="era-header">
                            <span class="era-label">${data.label}</span>
                            <span class="era-count">${data.events.length} events</span>
                        </div>
                        <div class="era-events">
                            ${data.events.map(event => `
                                <div class="timeline-event-card ${event.type}">
                                    <div class="event-year">${event.year}</div>
                                    <div class="event-icon">${event.icon}</div>
                                    <div class="event-details">
                                        <span class="event-title">${event.title}</span>
                                        ${event.subtitle ? `<span class="event-subtitle">${event.subtitle}</span>` : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

truncateName(name, maxLength = 15) {
    if (!name) return 'Unknown';
    if (name.length <= maxLength) return name;
    return name.substring(0, maxLength - 2) + '...';
}

bindBranchTabEvents(modal, branch) {
    // View tabs (Tree/Marriages/Timeline)
    const viewBtns = modal.querySelectorAll('.tree-view-btn');
    const viewPanels = modal.querySelectorAll('.tree-view-panel');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetView = btn.dataset.view;
            
            viewBtns.forEach(b => b.classList.remove('active'));
            viewPanels.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            const targetPanel = modal.querySelector(`[data-panel="${targetView}"]`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            
            // Draw connections after switching to tree view
            if (targetView === 'tree') {
                setTimeout(() => this.drawTreeConnections(branch), 100);
            }
        });
    });
    
    // Main tabs (Overview/Tree/Mysteries/Assets)
    const tabs = modal.querySelectorAll('.branch-tab');
    const panels = modal.querySelectorAll('.tab-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            tab.classList.add('active');
            const targetPanel = modal.querySelector(`[data-panel="${targetTab}"]`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
            
            if (targetTab === 'tree') {
                setTimeout(() => this.drawTreeConnections(branch), 100);
            }
        });
    });
    
    // Person clicks
    const personCards = modal.querySelectorAll('.tree-person');
    personCards.forEach(card => {
        card.addEventListener('click', () => {
            const personId = card.dataset.personId;
            if (personId && branch.members) {
                const member = branch.members.find(m => m.id === personId);
                if (member) {
                    this.openBranchMemberDetail(member, branch);
                }
            }
        });
    });
}

drawTreeConnections(branch) {
    const svg = document.getElementById(`connections-${branch.id}`);
    if (!svg) return;
    
    svg.innerHTML = '';
    
    const canvas = document.getElementById(`tree-canvas-${branch.id}`);
    if (!canvas) return;
    
    const canvasRect = canvas.getBoundingClientRect();
    
    // Set SVG size
    svg.setAttribute('width', canvas.scrollWidth);
    svg.setAttribute('height', canvas.scrollHeight);
    
    // Get all persons
    const persons = canvas.querySelectorAll('.tree-person[data-person-id]');
    const personPositions = {};
    
    persons.forEach(person => {
        const id = person.dataset.personId;
        const rect = person.getBoundingClientRect();
        personPositions[id] = {
            x: rect.left - canvasRect.left + rect.width / 2,
            y: rect.top - canvasRect.top,
            bottom: rect.top - canvasRect.top + rect.height,
            width: rect.width,
            height: rect.height,
            element: person
        };
    });
    
    // Draw parent-child connections
    if (branch.members) {
        branch.members.forEach(member => {
            if (!member.childrenIds || !personPositions[member.id]) return;
            
            const parent = personPositions[member.id];
            
            member.childrenIds.forEach(childId => {
                const child = personPositions[childId];
                if (!child) return;
                
                // Draw curved line from parent bottom to child top
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                
                const startX = parent.x;
                const startY = parent.bottom + 5;
                const endX = child.x;
                const endY = child.y - 5;
                const midY = (startY + endY) / 2;
                
                const d = `M ${startX} ${startY} 
                           C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;
                
                path.setAttribute('d', d);
                path.setAttribute('class', 'connection-line child-line');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', '#4a90a4');
                path.setAttribute('stroke-width', '2');
                path.setAttribute('stroke-dasharray', '5,3');
                
                svg.appendChild(path);
                
                // Add arrow at end
                const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                arrow.setAttribute('points', `${endX},${endY} ${endX-5},${endY-8} ${endX+5},${endY-8}`);
                arrow.setAttribute('fill', '#4a90a4');
                svg.appendChild(arrow);
            });
        });
    }
}

renderMiniTreeNode(member, branch) {
    const status = (member.status || 'unknown').toLowerCase().replace(/[^a-z]/g, '');
    const hasSecrets = member.secrets && member.secrets.length > 0;
    const accessibleSecrets = hasSecrets ? member.secrets.filter(s => this.canAccess(s.intel)).length : 0;
    
    return `
        <div class="mini-tree-node ${status}" 
             data-member-id="${member.id || ''}"
             data-branch-id="${branch.id}"
             data-parent="${Array.isArray(member.parents) ? member.parents.join(',') : (member.parents || '')}"
             data-children="${Array.isArray(member.children) ? member.children.join(',') : (member.children || '')}">
            <div class="mini-node-portrait">${member.portrait || member.icon || '❓'}</div>
            <div class="mini-node-info">
                <span class="mini-node-name">${this.truncateName(member.name) || 'Unknown'}</span>
                <span class="mini-node-dates">${member.born || '?'}-${member.died || '?'}</span>
            </div>
            <div class="mini-node-status">${this.getStatusIcon(member.status)}</div>
            ${hasSecrets ? `
                <div class="mini-node-secrets">
                    <span class="secrets-icon">${accessibleSecrets > 0 ? '🔓' : '🔒'}</span>
                    <span class="secrets-num">${accessibleSecrets}/${member.secrets.length}</span>
                </div>
            ` : ''}
        </div>
    `;
}

truncateName(name) {
    if (!name) return 'Unknown';
    // Get first name and last initial or just first name if short
    const parts = name.split(' ');
    if (parts.length === 1) return parts[0];
    if (name.length <= 15) return name;
    
    // Try first name + last initial
    const firstName = parts[0];
    const lastName = parts[parts.length - 1];
    
    if (firstName.length + 3 <= 15) {
        return `${firstName} ${lastName.charAt(0)}.`;
    }
    
    return firstName;
}

getStatusIcon(status) {
    if (!status) return '❓';
    const s = status.toLowerCase();
    if (s.includes('active')) return '✓';
    if (s.includes('deceased')) return '†';
    if (s.includes('murdered') || s.includes('assassinated')) return '🗡️';
    if (s.includes('missing') || s.includes('hidden')) return '👁️';
    if (s.includes('abroad')) return '🌍';
    if (s.includes('erased')) return '✖️';
    if (s.includes('merged')) return '🌳';
    if (s.includes('incapacitated')) return '💫';
    if (s.includes('alive')) return '💚';
    return '?';
}
    
    closeModal() {
        const modal = this.container?.querySelector('#dynasty-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }
}

// =============================================
// INITIALIZATION
// =============================================

let dynastyInstance = null;

function initDynastyTree() {
    const dynasty = new DynastyTreeInterface();
    dynasty.init();
    dynastyInstance = dynasty;
    window.dynastyDebug = { instance: dynasty, data: DYNASTY_DATA };
    return dynasty;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDynastyTree);
} else {
    initDynastyTree();
}

export { DynastyTreeInterface, DYNASTY_DATA, initDynastyTree };