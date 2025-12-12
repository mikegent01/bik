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
                { intel: 95, text: 'Her draft will named the child as heir, with Daisy as regent. She also named her killers - but the document was destroyed.' }
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
    
    // Add the cadetBranches array here (already provided in previous response)
    cadetBranches: [
        // ... (House Rosewood, House Fernshade, House Goldcap, House Morel from previous response)
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
        colors: ['#228B22', '#8B0000'],
        motto: 'Fire and Shell',
        altMotto: 'The Strong Endure',
        founded: 'Ancient (Pre-Kingdom Era)',
        founder: 'Unknown (Lost to Time)',
        seat: 'Bowser\'s Castle, Dark Land',
        status: 'ACTIVE (King Incapacitated)',
        
        members: [
            {
                id: 'koopa_ancient',
                name: 'The First Koopa King',
                epithet: 'The Shell-Father',
                born: 'Unknown',
                died: 'Unknown',
                generation: 0,
                icon: '🐉',
                status: 'legendary',
                portrait: '🔥',
                
                summary: 'Mythological founder of the Koopa line. Said to be a dragon who took mortal form.',
                
                secrets: [
                    { intel: 70, text: 'The Koopa bloodline carries actual dragon genetics.' },
                    { intel: 90, text: 'The "Koopa Curse" - they can only have one true love. Bowser\'s was Peach.' }
                ]
            },
            {
                id: 'king_morton_sr',
                name: 'King Morton Koopa Sr.',
                epithet: 'The Conqueror',
                born: 850,
                died: 920,
                reign: '875-920',
                generation: 7,
                icon: '👑',
                status: 'deceased',
                spouse: 'queen_clawdia',
                children: ['king_bowser'],
                portrait: '💀',
                
                summary: 'Bowser\'s father. A ruthless expansionist who nearly conquered the Mushroom Kingdom before the First Mario appeared.',
                
                secrets: [
                    { intel: 35, text: 'Was actually killed by a mysterious plumber matching Mario\'s description - decades before Mario was born.' },
                    { intel: 60, text: 'Had a secret alliance with the Star Spirits against an unknown threat.' },
                    { intel: 85, text: 'His death was orchestrated by the Shroob Empire using time manipulation.' }
                ]
            },
            {
                id: 'queen_clawdia',
                name: 'Queen Clawdia',
                epithet: 'The Shadow Queen',
                born: 855,
                died: 925,
                reign: '875-920',
                generation: 7,
                icon: '👸',
                status: 'deceased',
                spouse: 'king_morton_sr',
                children: ['king_bowser'],
                portrait: '🌙',
                
                summary: 'Bowser\'s mother. A sorceress of immense power who taught Kamek everything he knows.',
                
                secrets: [
                    { intel: 40, text: 'Was not a Koopa by birth - transformed herself through dark magic.' },
                    { intel: 70, text: 'Her spirit may still advise Kamek through necromantic communion.' }
                ]
            },
            {
                id: 'king_bowser',
                name: 'King Bowser Koopa',
                epithet: 'The Eternal Flame',
                born: 905,
                died: null,
                reign: '920-Present',
                generation: 8,
                icon: '🐢',
                status: 'INCAPACITATED',
                spouse: null,
                children: ['koopalings', 'bowser_jr'],
                portrait: '🔥',
                
                summary: 'The King of the Koopas. Currently incapacitated after a magical confrontation. Kamek rules as regent.',
                
                secrets: [
                    { intel: 20, text: 'His "kidnappings" of Peach became increasingly diplomatic over time.' },
                    { intel: 45, text: 'He holds the Obsidian Tablets proving the Toadstools are technically Koopa vassals.' },
                    { intel: 65, text: 'He arrived at the murder scene minutes after it happened and found the body.' },
                    { intel: 80, text: 'He roared in genuine grief. He invaded to AVENGE her, not because he killed her.' },
                    { intel: 95, text: 'He knows who the father of Peach\'s child is. He has kept the secret for 85 years.' }
                ],
                
                relationships: [
                    { person: 'Princess Peach', type: 'Obsessive Love/Political Alliance', notes: 'The truth is complicated' },
                    { person: 'Mario', type: 'Nemesis', notes: 'Respects him as a worthy foe' },
                    { person: 'Chief Thornpaw', type: 'Unknown', notes: 'Possibly knew about the affair' }
                ]
            },
            {
                id: 'bowser_jr',
                name: 'Prince Bowser Jr.',
                epithet: 'The Young Flame',
                born: 1025,
                died: null,
                generation: 9,
                icon: '🐢',
                status: 'ACTIVE',
                spouse: null,
                children: null,
                parents: ['king_bowser'],
                portrait: '🎨',
                
                summary: 'Bowser\'s youngest and favored son. Mother unknown (possibly magically created).',
                
                secrets: [
                    { intel: 30, text: 'Was told Peach was his mother. This is almost certainly false.' },
                    { intel: 55, text: 'Shows unusual magical affinity - his paintbrush is a genuine artifact.' },
                    { intel: 80, text: 'Some theorize he was created by Kamek using Bowser\'s DNA and an unknown source.' }
                ]
            },
            {
                id: 'kamek',
                name: 'Kamek',
                epithet: 'The Regent of Shadows',
                born: 'Unknown (Ancient)',
                died: null,
                generation: null,
                icon: '🧙',
                status: 'ACTIVE (Regent)',
                spouse: null,
                children: null,
                portrait: '🔮',
                
                summary: 'The Magikoopa advisor who raised Bowser. Now ruling the Koopa Kingdom as regent.',
                
                secrets: [
                    { intel: 25, text: 'Has served the Koopa line for over 200 years. Magikoopas are nearly immortal.' },
                    { intel: 50, text: 'Knew about Peach\'s pregnancy. Tried to have the child "retrieved."' },
                    { intel: 75, text: 'Activated Protocol Omega - a doomsday contingency that could devastate the region.' },
                    { intel: 90, text: 'Is in secret communication with the Star Spirits about an approaching threat greater than any faction.' }
                ]
            }
        ],
        
        koopalings: [
            { name: 'Ludwig von Koopa', role: 'Eldest/Strategist', status: 'Active', notes: 'Composes requiems for the fallen' },
            { name: 'Lemmy Koopa', role: 'Entertainer/Scout', status: 'Active', notes: 'Uses circus as cover for espionage' },
            { name: 'Roy Koopa', role: 'Enforcer', status: 'Active', notes: 'Commands the Hammer Brother legions' },
            { name: 'Iggy Koopa', role: 'Mad Scientist', status: 'Active', notes: 'Develops weapons and Chain Chomp variants' },
            { name: 'Wendy O. Koopa', role: 'Diplomat', status: 'Active', notes: 'Manages foreign relations' },
            { name: 'Morton Koopa Jr.', role: 'Siege Commander', status: 'Active', notes: 'Named for grandfather' },
            { name: 'Larry Koopa', role: 'Youngest Commander', status: 'Active', notes: 'Ambitious, may challenge Jr.' }
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
            </div>
            
            <div class="tree-viewport">
                <div class="tree-canvas" style="transform: scale(${this.zoomLevel}) translate(${this.panOffset.x}px, ${this.panOffset.y}px)">
                    ${sortedGens.map(gen => `
                        <div class="generation-row" data-generation="${gen}">
                            <div class="generation-label">
                                ${gen === '0' ? 'Legendary' : `Generation ${gen}`}
                            </div>
                            <div class="generation-members">
                                ${generations[gen].map(member => this.renderTreeNode(member)).join('')}
                            </div>
                        </div>
                    `).join('')}
                    
                    <svg class="connection-lines">
                        ${this.renderConnections(members)}
                    </svg>
                </div>
            </div>
        </div>
    `;
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
    
    // Group members by generation
    const generations = {};
    branch.members.forEach(m => {
        const gen = m.generation ?? 0;
        if (!generations[gen]) generations[gen] = [];
        generations[gen].push(m);
    });
    
    const sortedGens = Object.keys(generations).sort((a, b) => Number(a) - Number(b));
    
    return `
        <div class="mini-tree-container">
            <div class="mini-tree-header">
                <h3>🌳 ${branch.name || 'House'} Family Tree</h3>
                <span class="tree-count">${branch.members.length} members across ${sortedGens.length} generations</span>
            </div>
            
            <div class="mini-tree-viewport">
                <div class="mini-tree-canvas">
                    ${sortedGens.map(gen => `
                        <div class="mini-generation" data-gen="${gen}">
                            <div class="mini-gen-label">
                                <span class="gen-number">${gen === '0' ? 'Origin' : `Gen ${gen}`}</span>
                                <span class="gen-count">${generations[gen].length}</span>
                            </div>
                            <div class="mini-gen-members">
                                ${generations[gen].map(member => this.renderMiniTreeNode(member, branch)).join('')}
                            </div>
                        </div>
                    `).join('')}
                    
                    <svg class="mini-tree-lines" id="mini-tree-svg-${branch.id}">
                        <!-- Connection lines rendered by JS -->
                    </svg>
                </div>
            </div>
            
            <div class="tree-legend">
                <div class="legend-item"><span class="legend-dot deceased"></span> Deceased</div>
                <div class="legend-item"><span class="legend-dot active"></span> Active</div>
                <div class="legend-item"><span class="legend-dot murdered"></span> Murdered</div>
                <div class="legend-item"><span class="legend-dot hidden"></span> Hidden/Missing</div>
            </div>
        </div>
    `;
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