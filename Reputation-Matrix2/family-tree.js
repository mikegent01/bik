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
    "cadetBranches": [
        {
            "name": "The Gaster Branch",
            "status": "unresolved",
            "claimStrength": 0,
            "head": "Wing Gaster (missing)",
            "intel": 70,
            "notes": "Science, dimensional anomalies, and absent records."
        },
        {
            "name": "The Parallel Branch",
            "status": "observed",
            "claimStrength": 0,
            "head": "Sans of the Dark World",
            "intel": 55,
            "notes": "Cross-world cousin line; not a succession claim."
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
            "summary": "Sans is a mysterious and surprisingly laid-back skeleton living in Snowdin Town. Clad in a blue hooded cloak and possessing eye sockets that radiate a quiet intensity, he is one of the few individuals in the underground civilization who appears completely unphased by the arrival of surface dwellers. He is observant, enjoys good food, and seems to hold a position of informal but significant authority in Snowdin. He provided initial hospitality to Dracule Mihawk and the Legionary Agent, even sharing a casserole with them. He is a central member of the Snowdin Bone-Line, an extended household documented in the Sans Family registry. He is a central member of the Snowdin Bone-Line, an extended household documented in the Sans Family registry.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "Sans’s taller brother and Snowdin’s irrepressible puzzle guard. He treats every visitor as a future friend, every hallway as a stage, and every pot of pasta as a diplomatic instrument. Papyrus is the family’s visible heart: loud, earnest, and impossible to mistake for anyone else. He answers Sans’s silences by setting another place at the table.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A bent, soft-spoken elder who remembers family history in fragments and insists the missing pieces are sometimes the important part. Grandpa Semi keeps weathered registry cards, old recipes, and half-finished jokes in a cedar chest. He taught Sans to listen before speaking and Papyrus to save every invitation.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A couch-bound cousin whose apparent idleness conceals a startling awareness of every family movement. From a nest of blankets beside the heater, Lazybones coordinates emergency snacks, spare scarves, and quiet cover stories for relatives who need a day without questions. Their advice is usually delivered with eyes closed and unnerving accuracy.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "The youngest bone in the house, a fearless little skeleton whose rattling steps can interrupt even the most solemn family meeting. Baby Bones treats every adult as a potential carrier and every puzzle piece as a toy. The household treats them as a promise to build something gentler than the world it inherited.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A soot-covered relation who repairs boiler shafts, chimneys, and old puzzle mechanisms. The green sparks around Dirty Brother are residue from ancient heating runes, not a curse—though he enjoys letting visitors think otherwise. His practical work keeps Snowdin warm when the magic in its infrastructure misbehaves.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A broad-shouldered cousin who keeps blankets, medicine, lantern oil, and emergency noodles organized with military focus. His household motto is feed first, worry later. Will mediates between Sans’s evasions and Papyrus’s declarations by asking what the family actually needs tonight.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A dapper relation whose looping handwriting turns family gossip, official notices, and apologies into minor works of art. Cursive writes invitations for Baby Bones, repair requests for Dirty Brother, and peaceable replies to people rude to Papyrus. He takes every recipient seriously, even when Sans supplies only three words.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A purple-clad cousin who announces every entrance as though it were the last act of an opera. His “very special attack” is a family legend with so many versions that nobody agrees whether it is a spell, a dance, or an exceptionally difficult puzzle. Papyrus encourages him; Sans keeps a safe distance when the announcements begin.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A formal historian who believes every family story deserves dates, sources, and a respectable typeface. Times New Roman documents Bone-Line events in a carefully indexed chronicle and distrusts any story introduced with “you had to be there.” His severe presentation conceals a deep affection for embarrassing childhood anecdotes.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A colossal eye-shaped relative or omen recorded in the margins of the family archive. Some entries call Prunsel a cousin transformed by unfinished science; others call it a guardian that learned the Bone-Line name. Sans treats the subject with unusual care, and Grandpa Semi refuses to classify it as a monster.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A brilliant, star-shaped family eccentric who claims the Bone-Line adopted him by cheering loudly enough at the night sky. Papyrus accepted the claim immediately. S' a Real Star performs with radiant arms, navigates by private constellations, and brings warmth to Snowdin’s longest nights despite being terrible for the curtains.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "An intense, red-eyed relation carrying the consequences of a conflict nobody summarizes the same way twice. Brother Killer does not let his title become an excuse for cruelty: in Snowdin, he directs his anger toward threats at the perimeter and is slowly learning that repair requires more than standing guard.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A blue-hooded younger relation who takes “little brother” as a job description rather than a comparison. He delivers messages, finds misplaced gloves, and follows older relatives on patrol until someone notices. He is not related to every person who calls him brother, which he considers proof the household is working correctly.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A human friend in a striped shirt whose calm courage earned him a place at the Bone-Line table. Ness brings a traveler’s perspective to family arguments and is one of the few people willing to tell Sans when a joke has gone too far. He remains a guest on paper and family in practice.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A shadowed elder whose experiments and absence still shape the family’s caution around impossible doors. Family records identify Wing Gaster as a brilliant scientist studying darkness and the architecture between worlds before vanishing from ordinary history. Sans knows more than he shares; Grandpa Semi keeps a sealed folder marked with a wing-shaped sigil.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A white-armored skeleton whose registry entry begins with a question mark because nobody can agree which branch he belongs to. My Brother? finds the uncertainty liberating: he offers help before credentials and treats every reunion as an opportunity to discover a new sibling. Papyrus admires his confidence; Times New Roman demands footnotes.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A small green-scarfed cousin who promises that every delayed plan will happen “pretty soon.” The phrase has become a family signal for hopeful patience rather than an actual deadline. Pretty Soon is excellent at making people wait without feeling abandoned, particularly when Baby Bones asks whether an absent relative is coming home.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A sharply dressed cousin who believes clarity is mercy. Helvetica designs signs, patrol notices, and puzzle instructions readable through a snowstorm. His friendly typographic rivalry with Cursive produces Snowdin’s best public notices. Sans consults Helvetica whenever a message must be understood the first time.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A jubilant aunt whose letter-shaped silhouette appears at every birthday and victory dinner. Nobody agrees what the G originally stood for, but everyone agrees that Gee Lady can spot who is standing apart from the group. She brings frosting, ribbon, and an aggressively encouraging speech before anyone can claim they are fine.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A bag-wrapped brother who salvages bent puzzle parts, cracked toys, and almost-useful cookware. Baby Bones’s favorite rattle and Papyrus’s emergency spaghetti strainer both came from his workbench. He dislikes the nickname, but accepts it because it reminds Snowdin that discarded does not mean worthless.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A silent gray visitor connected to the family by old favors and a talent for arriving when the sky changes. Starman guided several relatives through a whiteout using a light that did not cast shadows. Will leaves a chair for him at dinner, and Sans watches the horizon rather than the guest whenever he appears.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A cooperative cluster of skeletons sharing one rolling chassis, several opinions, and an impeccable sense of timing. Quantity handles work requiring many hands: moving furniture, building puzzles, and carrying soup for crowds. Their family status began as a joke when Baby Bones called every skull uncle; the registry made it official.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A tired-looking relative in a violet coat whose name began as an honest status update and became a family promise to check in. Speen is not defined by sadness; he is a careful observer who notices when other people are performing happiness. Lazybones keeps tea ready for him, and Papyrus never lets a quiet seat stay empty for long.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A tiny stone with no verified movement, no visible face, and an unquestioned place in the family. Pet Rock became kin when Baby Bones named it and Papyrus prepared it a tiny dinner plate. It travels in a padded pocket, attends major meals, and has a place in Will’s emergency evacuation plan.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A formidable striped guardian who treats every entrance as a question of responsibility. Dedan is intimidating by profession and unexpectedly patient by choice, especially with children and nervous visitors. He does not call himself family, but he has stood watch through too many household emergencies for anyone else to believe him.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A pale figure in black whose relationship to the family is documented only by sightings, sketches, and absence. Mysteryman appears near sealed rooms, broken save points, and old photographs. The household policy is simple: leave a seat, ask no cruel questions, and do not pretend an unfinished person is erased.",
            "secrets": [
                {
                    "intel": 25,
                    "text": "A private registry note connects this member to the campaign’s Snowdin relief and observation network."
                },
                {
                    "intel": 65,
                    "text": "Their full connection remains locked until more of the Bone-Line archive is recovered."
                }
            ],
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
            "summary": "A parallel counterpart who runs a familiar storefront, tells familiar jokes, and carries a different map of impossible roads. The household treats him as a cousin from a neighboring story, not a replacement. His visits let Sans speak plainly about paths and choices that cannot be unwound.",
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
            "achievements": [
                "Maintains a role in Snowdin’s Bone-Line household",
                "Connected to the Snowdin civilian support network"
            ],
            "controversies": [
                "Their exact genealogical relationship is disputed by the registry."
            ],
            "relationships": [
                {
                    "person": "Sans",
                    "type": "Bone-Line Kin",
                    "notes": "Bound by household, history, or adopted family."
                },
                {
                    "person": "Papyrus",
                    "type": "Household Connection",
                    "notes": "Linked through Snowdin’s extended family network."
                }
            ]
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
                    <p>${member.summary || 'No information available.'}</p>
                </div>
                
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
                            <p class="member-summary">${member.summary || 'No information available.'}</p>
                            
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
                    <p>${member.summary || 'No information available.'}</p>
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
                                <p class="mystery-summary">${m.summary || 'No details available.'}</p>
                                
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
                            <p class="head-summary">${branch.currentHead.summary || 'No information available.'}</p>
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