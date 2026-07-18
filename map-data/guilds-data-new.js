// This file contains additional guild and charter data to expand the world.

export const NEW_GUILDS = {
    'alchemists_union': {
        name: "#11 The Alchemists' Union",
        description: "A professional guild for alchemists, potion-makers, and poisoners. They regulate the trade of rare ingredients, share complex recipes, and ensure quality standards are met. They are famously neutral but fiercely protective of their alchemical secrets.",
        leader: "Grand Brewer Elara",
        sponsoring_faction: null, 
        headquarters: "The Bubbling Cauldron, Port Prisma",
        goals: [ "Control the trade of rare alchemical reagents.", "Advance the science of alchemy through shared research.", "Remain neutral in political conflicts to ensure market access." ],
        ranks: [
            { title: "Grand Brewer", description: "The elected head of the Union." },
            { title: "Master Alchemist", description: "A creator of legendary potions or poisons." },
            { title: "Journeyman", description: "A licensed alchemist with their own shop." },
            { title: "Apprentice", description: "A student learning the trade." }
        ],
        rules: [ "Never share a Union-patented recipe with an outsider.", "An alchemist's word on a potion's effect is their bond.", "Do not create plagues or world-ending concoctions. It's bad for business." ],
        recruitment: "Entry is via a rigorous apprenticeship under a Master Alchemist, culminating in the creation of a unique potion that must be approved by the Union's council.",
        sub_guilds: []
    },
    'cartographers_society': {
        name: "#12 The Cartographers' Society",
        description: "A more academic and less adventurous cousin to the Wayfinders' Guild. The Society focuses on compiling, verifying, and publishing accurate maps of the known world. They are meticulous, scholarly, and often get into heated debates over minor border discrepancies.",
        leader: "Chief Scribe Ortelius",
        sponsoring_faction: "mushroom_regency",
        headquarters: "The Map House, Mushroom City",
        goals: [ "Create a definitive, comprehensive atlas of the Doughnut World.", "Verify the claims of explorers and adventurers.", "Preserve historical maps and celestial charts." ],
        ranks: [
            { title: "Chief Scribe", description: "The head of the society, responsible for the final atlas." },
            { title: "Master Cartographer", description: "Leads regional mapping projects." },
            { title: "Drafter", description: "A skilled map-maker and surveyor." },
            { title: "Apprentice", description: "Learns the arts of surveying, drafting, and calligraphy." }
        ],
        rules: [ "The map must reflect the truth on the ground.", "Acknowledge the source of all data.", "Beauty in a map is secondary to its accuracy." ],
        recruitment: "Applicants must submit a portfolio of their own drafted maps. If their work shows promise, they are accepted as an apprentice and tasked with the tedious but essential job of verifying existing coastlines.",
        sub_guilds: []
    },
    'royal_toadstool_chefs': {
        name: "#13 The Royal Toadstool Chefs",
        description: "An ancient and prestigious guild of chefs who serve the various noble houses of the Mushroom Kingdom. They are masters of fungal cuisine and guard their secret recipes with their lives.",
        leader: "Head Chef Chanterelle",
        sponsoring_faction: "mushroom_regency",
        headquarters: "The Grand Kitchen, Mushroom City",
        goals: [ "Create the most exquisite dishes in the world.", "Preserve the culinary traditions of the Mushroom Kingdom.", "Discover new and rare edible fungi." ],
        ranks: [
            { title: "Head Chef", description: "The master of the guild, whose palate is legendary." },
            { title: "Saucier", description: "A master of sauces and complex flavor profiles." },
            { title: "Forager", description: "An expert in finding and identifying rare ingredients." },
            { title: "Apprentice", description: "A novice learning the basics of the kitchen." }
        ],
        rules: [ "A recipe's secret is more valuable than gold.", "Never serve a dish that is less than perfect.", "The Head Chef's word is final." ],
        recruitment: "Entry is through a grueling culinary competition held once a year, where aspiring chefs must create a masterpiece from a mystery basket of ingredients.",
        sub_guilds: []
    },
    'order_of_the_starfall': {
        name: "#14 The Order of the Starfall",
        description: "A scholarly order of astronomers and astrologers who study celestial events. They believe the stars hold the key to understanding the past and predicting the future.",
        leader: "Stargazer Callista",
        sponsoring_faction: "mages_guild",
        headquarters: "The Nimbus Observatory, The North",
        goals: [ "Chart the heavens and understand their movements.", "Predict and interpret celestial omens.", "Safeguard against threats from beyond the sky." ],
        ranks: [
            { title: "Stargazer", description: "The leader of the order, who interprets the most complex cosmic signs." },
            { title: "Constellation Master", description: "An expert in a specific region of the sky." },
            { title: "Sky-Watcher", description: "A member who records celestial movements." },
            { title: "Acolyte", description: "An apprentice learning to read the stars." }
        ],
        rules: [ "The stars do not lie, but their interpretation requires wisdom.", "Knowledge must be shared within the order.", "Do not meddle with the fate you foresee." ],
        recruitment: "Membership is granted to those with a keen eye, a sharp mind, and the patience to spend countless nights watching the sky. A deep understanding of mathematics is required.",
        sub_guilds: []
    },
    'silent_stitchers': {
        name: "#15 The Silent Stitchers",
        description: "A clandestine network of spies and informants disguised as a humble guild of tailors and seamstresses. They weave secrets into the very fabric of the clothes they create.",
        leader: "The Weaver (Alias)",
        sponsoring_faction: "freelancer_underworld",
        headquarters: "The Gilded Thimble, Port Prisma",
        goals: [ "Gather intelligence on all major political figures.", "Control the flow of information in the underworld.", "Use blackmail and secrets to manipulate events from the shadows." ],
        ranks: [
            { title: "The Weaver", description: "The anonymous leader who pulls all the threads." },
            { title: "Master Tailor", description: "Manages a regional network of spies." },
            { title: "Stitcher", description: "A field agent who gathers information." },
            { title: "Bobbin", description: "An informant or low-level operative." }
        ],
        rules: [ "A secret is a sharper needle than any blade.", "Your cover is your life; never break it.", "Loose threads are a liability." ],
        recruitment: "The guild recruits individuals who are good at going unnoticed: servants, merchants, and artisans. An invitation is a coded message embroidered into a piece of clothing.",
        sub_guilds: []
    },
    'geargrinders_union': {
        name: "#16 The Geargrinder's Union",
        description: "The official union for mechanics, engineers, and tinkerers in the industrial quarters of the world. They set standards for craftsmanship, lobby for workers' rights, and occasionally sabotage the projects of non-union scabs.",
        leader: "Foreman Cogsworth",
        sponsoring_faction: null,
        headquarters: "The Great Cogworks, Mushroom City",
        goals: [ "Ensure fair wages and safe working conditions for all mechanical artisans.", "Maintain the quality and integrity of mechanical crafts.", "Unlock the secrets of ancient and magitek engineering." ],
        ranks: [
            { title: "Grand Foreman", description: "The elected head of the Union." },
            { title: "Master Mechanic", description: "An inventor or engineer of great renown." },
            { title: "Journeyman", description: "A certified and licensed mechanic." },
            { title: "Apprentice", description: "A learner under the tutelage of a master." }
        ],
        rules: [ "Solidarity is our strength.", "Measure twice, cut once, explode never (usually).", "An honest day's work for an honest day's pay." ],
        recruitment: "A prospective member must complete a complex apprenticeship and pass a rigorous practical exam, which usually involves building a complex automaton or fixing a catastrophically broken machine.",
        sub_guilds: []
    },
    'whispering_mycelium': {
        name: "#17 The Whispering Mycelium",
        description: "A mystical and secretive guild of fungal druids and shamans. They believe the entire Mushroom Kingdom is a single, sentient organism and they act as its guardians and interpreters.",
        leader: "The First Spore",
        sponsoring_faction: "toad_cult",
        headquarters: "The Heartwood Grove (Location moves)",
        goals: [ "Protect the Great Fungal Network from harm.", "Commune with the world-spirit of the Mushroom Kingdom.", "Guide the growth and evolution of magical fungi." ],
        ranks: [
            { title: "First Spore", description: "The ancient, and possibly immortal, leader of the guild." },
            { title: "Myconid Elder", description: "A shaman who can commune directly with the network." },
            { title: "Spore-Singer", description: "A druid who tends to the health of the fungal forests." },
            { title: "Sapling", description: "An initiate learning to listen to the whispers." }
        ],
        rules: [ "All fungus is connected; what harms one, harms all.", "The Network's will is not to be questioned.", "Growth is inevitable; guide it, do not fight it." ],
        recruitment: "Members are not recruited; they are 'called'. Individuals who display a natural, deep connection to nature and fungus may be visited in their dreams by a Myconid Elder and guided to the Heartwood Grove.",
        sub_guilds: []
    },
    'barrel_riders_guild': {
        name: "#18 The Barrel Riders",
        description: "An elite guild from DK's Islands, masters of barrel-based transportation and racing. They run the fastest (and most dangerous) delivery service in the archipelago.",
        leader: "Funky Kong",
        sponsoring_faction: "dk_crew",
        headquarters: "Funky's Flights II, Barrel Volcano",
        goals: [ "Be the fastest thing on (or above) the islands.", "Win the annual Barrel Grand Prix.", "Deliver anything, anywhere, as long as it fits in a barrel." ],
        ranks: [
            { title: "Top Banana", description: "The fastest and most radical rider, the guild leader." },
            { title: "Jet Barrel Ace", description: "A master pilot of rocket-powered barrels." },
            { title: "Rider", description: "A qualified barrel pilot." },
            { title: "Cranky's Intern", description: "A rookie learning not to crash." }
        ],
        rules: [ "Speed is everything.", "If it ain't broke, add more rockets.", "Respect the barrel." ],
        recruitment: "Survive a timed run through the 'Minecart Madness' track. In one piece. That's it.",
        sub_guilds: []
    },
    'boo_busters_society': {
        name: "#19 The Boo Busters",
        description: "A society of paranormal investigators and eccentric inventors dedicated to the study and humane capture of ghosts, ghouls, and other spectral entities. They are considered weirdos by almost everyone.",
        leader: "Professor E. Gadd (in absentia)",
        sponsoring_faction: null,
        headquarters: "E. Gadd's Abandoned Lab, Boo's Woods",
        goals: [ "Catalogue every type of spectral entity.", "Develop new ghost-hunting technology.", "Find out where all the Boos come from." ],
        ranks: [
            { title: "Lead Investigator", description: "The head of a local chapter." },
            { title: "Technician", description: "Maintains the ghost-hunting gear." },
            { title: "Field Agent", description: "The one who actually goes into the haunted house." },
            { title: "Intern", description: "Cleans the ectoplasm out of the containment units." }
        ],
        rules: [ "Don't cross the streams (unless absolutely necessary).", "Always get a PKE reading.", "Never, ever look a Boo directly in the eye." ],
        recruitment: "Anyone with a genuine interest in the paranormal and a lack of self-preservation instinct can apply. Must provide your own flashlight.",
        sub_guilds: []
    },
    'green_thumb_guardians': {
        name: "#20 The Green Thumb Guardians",
        description: "A guild of horticulturists and druids who dedicate their lives to protecting and cultivating the world's rarest and most magical plants, from Fire Flowers to Wonder Flowers.",
        leader: "Petunia, Keeper of the Seed Vault",
        sponsoring_faction: "flower_kingdom",
        headquarters: "The Verdant Conservatory, Flower Kingdom",
        goals: [ "Preserve biodiversity.", "Protect magical flora from being exploited.", "Cultivate new, beneficial plant species." ],
        ranks: [
            { title: "Keeper of the Seed Vault", description: "The guild's leader, who protects their repository of rare seeds." },
            { title: "Master Gardener", description: "An expert in a specific type of magical plant." },
            { title: "Warden", description: "A protector of a sacred grove or sanctuary." },
            { title: "Seedling", description: "An apprentice learning the ways of magical horticulture." }
        ],
        rules: [ "Harm no plant needlessly.", "A plant's secrets are earned through patience.", "The balance of the garden is the balance of the world." ],
        recruitment: "To join, a candidate must successfully cultivate a difficult magical plant, such as a Piranha Plant, from seed to maturity without being eaten.",
        sub_guilds: []
    },
    'ancient_mapmakers': {
        name: "#21 The Ancient Mapmakers",
        description: "A secretive splinter group of the Cartographers' Society, they believe that true maps don't just show locations, but also paths through time. They seek out ruins to chart the world as it was.",
        leader: "Loremaster Ptolemy",
        sponsoring_faction: null,
        headquarters: "A hidden library in the Sunken Tower of Shine Sprites",
        goals: [ "Reconstruct the map of the world before the Sundering.", "Chart the flow of magical ley lines through history.", "Discover the location of legendary, vanished places." ],
        ranks: [
            { title: "Loremaster", description: "The guild leader, who can read the echoes of the past." },
            { title: "Chronomapper", description: "An expert who charts the shifting paths of time." },
            { title: "Relic Hunter", description: "A field agent who recovers historical artifacts." },
            { title: "Scribe", description: "An apprentice who copies ancient maps." }
        ],
        rules: [ "The past is a map to the future.", "Some places are lost for a reason.", "Preserve the knowledge at all costs." ],
        recruitment: "Recruits are chosen from the most gifted and open-minded members of other scholarly guilds. An invitation is a map that leads to a place that no longer exists.",
        sub_guilds: []
    },
    'minions_guild_local_58': {
        name: "#22 The Minion's Guild, Local 58",
        description: "A surprisingly well-organized trade union for generic evil minions. They lobby for better working conditions, dental plans, and reduced fatality rates in boss fights.",
        leader: "Goomfrey, Union Rep",
        sponsoring_faction: "the_unchained",
        headquarters: "A back room in the Crossroads Inn, Lockerwood",
        goals: [ "Achieve a 40-hour work week.", "Ensure access to quality, affordable healing potions.", "Mandatory guard rails on all lava pit bridges." ],
        ranks: [
            { title: "Union Rep", description: "The elected leader who negotiates with evil overlords." },
            { title: "Shop Steward", description: "Represents the minions in a specific castle or dungeon." },
            { title: "Card-Carrier", description: "A full, dues-paying member." },
            { title: "Scab", description: "What they call non-union minions." }
        ],
        rules: [ "An injury to one is an injury to all.", "Never cross a picket line.", "The boss's treasure hoard is our pension fund." ],
        recruitment: "Open to any Goomba, Koopa Troopa, Shy Guy, or other entry-level evil minion. Dues are two coins a week.",
        sub_guilds: []
    },
    'knights_of_the_chocolot': {
        name: "#23 The Knights of the Choco-lot",
        description: "A chivalric order from the Waffle and Chestnut Kingdoms, sworn to protect the innocent and uphold the virtues of sweetness and light. Their armor is made of enchanted white chocolate.",
        leader: "Sir Praline",
        sponsoring_faction: "knights_of_the_gilded_lily",
        headquarters: "The Cocoa Keep, Cookie Crossroads",
        goals: [ "Defend the weak and the delicious.", "Slay sour beasts and bitter monsters.", "Find the legendary Holy Grail of Hot Chocolate." ],
        ranks: [
            { title: "Grand Master", description: "The leader of the order." },
            { title: "Knight Commander", description: "Leads a chapter of the order." },
            { title: "Sir Knight", description: "A full member of the order." },
            { title: "Squire", description: "A knight in training." }
        ],
        rules: [ "A knight's heart must be as pure as refined sugar.", "Protect those who cannot protect themselves.", "Never refuse a request for aid (or a good dessert)." ],
        recruitment: "Squires are chosen for their brave hearts and noble spirits. They become a knight after performing a great deed, such as rescuing a gingerbread person from a dragon.",
        sub_guilds: []
    },
    'void_sailors': {
        name: "#24 The Void Sailors",
        description: "A guild of explorers who brave the treacherous gaps between the islands of the Triple Moon World. They sail ships made of petrified starlight and trade in cosmic salvage.",
        leader: "Captain Comet",
        sponsoring_faction: null,
        headquarters: "The Drifter's Asteroid, Triple Moon World",
        goals: [ "Chart the void between worlds.", "Salvage lost technology from fallen civilizations.", "Discover what lies beyond the edge of the sky." ],
        ranks: [
            { title: "Captain", description: "Commands their own void-sailing vessel." },
            { title: "Void-Navigator", description: "An expert in charting paths through the chaotic void." },
            { title: "Star-Hand", description: "An experienced crew member." },
            { title: "Stowaway", description: "A rookie learning the ropes." }
        ],
        rules: [ "The void gives, and the void takes.", "Trust your navigator, but always watch the stars.", "Share your charts with the guild." ],
        recruitment: "Anyone brave or foolish enough to sign on as a crew member on a void-sailor's ship can join. Survival is the only test that matters.",
        sub_guilds: []
    },
    'glimmerwood_weavers': {
        name: "#25 The Glimmerwood Weavers",
        description: "A reclusive guild of Elven artisans from Middle Earth who weave garments from enchanted moon-thread. Their creations are beautiful, weightless, and offer protection against magic.",
        leader: "Elder Lyra",
        sponsoring_faction: null,
        headquarters: "The Silver Loom, Faerun",
        goals: [ "Create the most beautiful garments in existence.", "Preserve the ancient Elven art of magic-weaving.", "Clothe the worthy in garments of light and shadow." ],
        ranks: [
            { title: "Elder Weaver", description: "A master who can weave starlight into cloth." },
            { title: "Master Weaver", description: "A creator of renowned enchanted garments." },
            { title: "Artisan", description: "A skilled member of the guild." },
            { title: "Spool-Tender", description: "An apprentice learning to handle moon-thread." }
        ],
        rules: [ "The thread remembers the weaver's heart.", "Patience is the first and last lesson.", "Our art is not for the unworthy or the vain." ],
        recruitment: "Membership is hereditary, passed down through Elven families. Outsiders are almost never accepted, unless they show a once-in-a-generation talent for the craft.",
        sub_guilds: []
    },
    'stonecarvers_brethren': {
        name: "#26 The Stonecarver's Brethren",
        description: "A stoic and secretive guild of Dwarven masons and architects. They possess the lost knowledge of how to shape and enchant stone, and are responsible for the construction of all major Dwarven holds.",
        leader: "Rune-Master Thrain",
        sponsoring_faction: null,
        headquarters: "The Heart-Forge, Middle Earth",
        goals: [ "Build fortresses that will stand until the end of time.", "Preserve the secret arts of rune-carving and stone-shaping.", "Uncover the lost secrets of the first Dwarven cities." ],
        ranks: [
            { title: "Rune-Master", description: "The guild leader, who knows the most powerful stone-runes." },
            { title: "Master Mason", description: "Oversees the construction of a major hold or fortress." },
            { title: "Stonecarver", description: "A skilled artisan and builder." },
            { title: "Pebble-Polisher", description: "An apprentice who learns by doing the most menial tasks." }
        ],
        rules: [ "The mountain remembers.", "A straight line and a true heart.", "What is built in stone, endures." ],
        recruitment: "Dwarves born into the mason clans are automatically entered into the guild. Others must prove their dedication by single-handedly quarrying a perfect block of granite.",
        sub_guilds: []
    },
    'laughing_skulls': {
        name: "#27 The Laughing Skulls",
        description: "A guild of jesters, pranksters, and satirists from the Beanbean Kingdom. They believe that laughter is the most powerful weapon against tyranny and despair.",
        leader: "The Last Laugh",
        sponsoring_faction: "beanbean_kingdom",
        headquarters: "The Chuckle Hut, Beanbean Castle Town",
        goals: [ "Speak truth to power through comedy.", "Uplift the spirits of the common folk.", "Pull off the most legendary prank in history." ],
        ranks: [
            { title: "The Last Laugh", description: "The mysterious, masked leader of the guild." },
            { title: "Master Jester", description: "A comedian whose jokes can start (or stop) a revolution." },
            { title: "Fool", description: "A full member of the guild." },
            { title: "Punchline", description: "A rookie learning the art of the gag." }
        ],
        rules: [ "Nothing is sacred.", "The bigger the target, the bigger the laugh.", "If you have to explain the joke, it's not funny." ],
        recruitment: "To join, one must perform a stand-up routine in front of the entire guild. If you can make them laugh, you're in. If you bomb, you're thrown into a pit of whoopee cushions.",
        sub_guilds: []
    },
    'deep_divers_guild': {
        name: "#28 The Deep Divers Guild",
        description: "A guild of Noki explorers who chart the abyssal depths of the Pianta Sea. They use ancient shell-magic to breathe underwater and communicate with sea creatures.",
        leader: "Elder Pearl",
        sponsoring_faction: null,
        headquarters: "Noki Bay, Sunshine Isles",
        goals: [ "Map the entire seabed.", "Discover new and exotic species of marine life.", "Find the legendary Sunken City of the Shine Sprites." ],
        ranks: [
            { title: "Elder Diver", description: "The guild leader, who has been to the deepest trenches." },
            { title: "Abyss-Walker", description: "An explorer of the darkest depths." },
            { title: "Reef-Keeper", description: "A diver who charts and protects the coral reefs." },
            { title: "Shallow-Swimmer", description: "An apprentice." }
        ],
        rules: [ "The sea keeps its secrets well; be patient.", "Respect the creatures of the deep.", "What you take, you must give back." ],
        recruitment: "Young Nokis who show a brave heart and a deep respect for the ocean are chosen to train as divers. They must find a rare, giant pearl from a Gooper Blooper's lair to become full members.",
        sub_guilds: []
    },
    'sound_weavers': {
        name: "#29 The Sound Weavers",
        description: "A nomadic guild of bards and musicians who believe that music is the underlying structure of reality. By playing the right notes, they can subtly influence the world around them.",
        leader: "Maestro Cadence",
        sponsoring_faction: null,
        headquarters: "The Wandering Stagecoach",
        goals: [ "Discover the 'First Chord' that created the universe.", "Bring harmony to places of conflict.", "Write the greatest song ever heard." ],
        ranks: [
            { title: "Maestro", description: "The guild's leader, whose music can soothe a dragon." },
            { title: "Virtuoso", description: "A master of their chosen instrument." },
            { title: "Troubadour", description: "A traveling musician and storyteller." },
            { title: "Page-Turner", description: "An apprentice who studies musical theory." }
        ],
        rules: [ "Listen before you play.", "Every soul has its own song.", "Never play a sour note." ],
        recruitment: "Musicians of exceptional skill may be invited to audition. They must improvise a piece of music that can calm a savage beast or make a stone weep.",
        sub_guilds: []
    },
    'beast_tamers_conclave': {
        name: "#30 The Beast Tamers Conclave",
        description: "A conclave of Rakasha who have dedicated their lives to the art of taming and bonding with magical beasts. They believe in partnership, not ownership.",
        leader: "Warchief Ironmane",
        sponsoring_faction: "rakasha_clans",
        headquarters: "The Great Menagerie, Wilderlands",
        goals: [ "Preserve and protect magical beast species.", "Forge bonds of partnership between humanoids and beasts.", "Stop the illegal poaching of magical creatures." ],
        ranks: [
            { title: "Beast Lord", description: "A tamer who has bonded with a legendary creature." },
            { title: "Master Tamer", description: "An expert in a specific type of beast (e.g., griffons, dragons)." },
            { title: "Tamer", description: "A full member of the conclave." },
            { title: "Hatchling", description: "An apprentice learning to care for young beasts." }
        ],
        rules: [ "A bond is earned, never forced.", "Respect the beast's spirit.", "A broken trust can never be mended." ],
        recruitment: "To join, a candidate must be 'chosen' by a beast. They enter a paddock of young, untamed creatures, and if one willingly approaches them, their training begins.",
        sub_guilds: []
    }
};

export const NEW_CHARTERS = {
    'kings_tax_collectors': {
        name: "#31 The King's Tax Collectors",
        description: "An officially chartered organization of the Regal Empire, tasked with the efficient and ruthless collection of taxes from all provinces. They are universally feared and despised.",
        leader: "Chief Justicar of the Treasury, Lord Valerius",
        sponsoring_faction: "regal_empire",
        headquarters: "The Imperial Treasury, Mighdural",
        goals: [ "Collect all taxes owed to the Imperial Crown.", "Audit provincial governors to ensure compliance.", "Seize the assets of those who fail to pay." ],
        ranks: [
            { title: "Chief Justicar", description: "The head of the tax collection service." },
            { title: "Auditor", description: "An official who investigates financial records." },
            { title: "Collector", description: "A field agent who collects the taxes, by force if necessary." },
            { title: "Scribe", description: "An accountant who manages the books." }
        ],
        rules: [ "The Emperor's due is absolute.", "There are no excuses, only arrears.", "Mercy is not a line item in our budget." ],
        recruitment: "Recruits are chosen from the most ruthless and mathematically gifted graduates of the Imperial University. A lack of empathy is considered a key qualification.",
        sub_guilds: []
    },
    'wario_wrecking_crew': {
        name: "#32 The Wario Wrecking Crew",
        description: "A demolition and 'asset acquisition' charter granted by Wario Land. They specialize in the explosive and unsubtle removal of obstacles, both structural and personal.",
        leader: "Foreman Bob",
        sponsoring_faction: "wario_land",
        headquarters: "Bob-omb Factory, Wario Woods",
        goals: [ "Demolish designated targets for a profit.", "Acquire valuable salvage from demolition sites.", "Test new and exciting types of explosives." ],
        ranks: [
            { title: "Foreman", description: "The leader who plans the demolition." },
            { title: "Blaster", description: "An explosives expert." },
            { title: "Smasher", description: "The muscle, for when explosives are 'too subtle'." },
            { title: "Gofer", description: "Goes for more dynamite." }
        ],
        rules: [ "If it doesn't fall down, you didn't use enough dynamite.", "Finders keepers, losers weepers.", "Safety third." ],
        recruitment: "A love of explosions and a willingness to sign a very comprehensive legal waiver are the only requirements.",
        sub_guilds: []
    },
    'kremling_krew_privateers': {
        name: "#33 The Kremling Krew Privateers",
        description: "A charter granted by King K. Rool to a select group of Kremling captains, authorizing them to raid the shipping of his enemies (primarily the DK Crew and Mushroom Regency).",
        leader: "Captain Skurvy",
        sponsoring_faction: "kremling_krew",
        headquarters: "A hidden cove on Kremkroc Industries Inc.",
        goals: [ "Disrupt enemy shipping.", "Plunder valuable cargo for the Kremling war effort.", "Steal as many bananas as possible." ],
        ranks: [
            { title: "Captain", description: "Commands a privateer vessel." },
            { title: "First Mate", description: "Second-in-command." },
            { title: "Kremling", description: "A standard crew member." },
            { title: "Swabbie", description: "Does the dirty work." }
        ],
        rules: [ "The King gets a 50% cut.", "No prey, no pay.", "Kongs are to be harassed on sight." ],
        recruitment: "Any Kremling with their own ship and a sufficiently bloodthirsty attitude can apply to King K. Rool for a Letter of Marque.",
        sub_guilds: []
    },
    'magikoopa_research_division': {
        name: "#34 The Magikoopa Research Division",
        description: "A special charter from Bowser, tasking Kamek with developing new and more powerful forms of magic to give the Koopa Troop an edge in battle. Their experiments are highly unethical.",
        leader: "Kamek",
        sponsoring_faction: "koopa_troop",
        headquarters: "Kamek's Research Tower, Bandit's Way",
        goals: [ "Create bigger and more explosive spells.", "Magically enhance Koopa Troop soldiers.", "Find a way to make Bowser invincible." ],
        ranks: [
            { title: "Head Researcher", description: "Kamek himself." },
            { title: "Magikoopa Adept", description: "A powerful magic user who leads a research project." },
            { title: "Toady", description: "A research assistant and test subject." },
            { title: "Minion", description: "The unfortunate subject of a new spell." }
        ],
        rules: [ "For the glory of the Koopa King!", "There are no mistakes, only unexpected results.", "Ethics are for the weak." ],
        recruitment: "Only the most powerful and morally flexible Magikoopas are selected by Kamek for this division.",
        sub_guilds: []
    },
    'chomp_walkers': {
        name: "#35 The Chomp-Walkers",
        description: "A surprisingly necessary charter within the Koopa Troop, responsible for the care, feeding, and walking of the army's many Chain Chomps. It is considered a punishment detail.",
        leader: "Sergeant Snapper",
        sponsoring_faction: "koopa_troop",
        headquarters: "Chain Chomp Kennels, Bandit's Way",
        goals: [ "Keep the Chain Chomps fed and exercised.", "Try not to get eaten.", "Repair the inevitable property damage." ],
        ranks: [
            { title: "Head Walker", description: "The only one who the alpha Chomp seems to like." },
            { title: "Leash-Holder", description: "A standard Chomp-Walker." },
            { title: "Pooper Scooper", description: "The new guy." }
        ],
        rules: [ "Never let go of the chain.", "They're just playing rough.", "Shiny armor looks like a chew toy." ],
        recruitment: "Koopa Troopas who disobey orders or fail in their duties are assigned to the Chomp-Walkers.",
        sub_guilds: []
    },
    'imperial_beast_hunters': {
        name: "#36 The Imperial Beast Hunters",
        description: "A charter granted by the Regal Empire to hunt down and eliminate dangerous magical beasts that threaten Imperial territories. They are grim, pragmatic, and highly effective.",
        leader: "Hunt-Master Garran",
        sponsoring_faction: "regal_empire",
        headquarters: "The Hunter's Lodge, Fort Resolute",
        goals: [ "Protect Imperial citizens from monstrous threats.", "Harvest valuable alchemical components from slain beasts.", "Catalogue the weaknesses of all known magical creatures." ],
        ranks: [
            { title: "Hunt-Master", description: "A legendary hunter who has slain every type of beast." },
            { title: "Tracker", description: "An expert in finding and identifying beasts." },
            { title: "Hunter", description: "A skilled warrior." },
            { title: "Skinner", description: "An apprentice who does the messy work." }
        ],
        rules: [ "Know your prey.", "A clean kill is an honorable kill.", "The safety of the Empire comes first." ],
        recruitment: "Recruits are drawn from the hardiest trappers and soldiers from the Empire's frontier provinces. They must track and kill a dangerous beast single-handedly to be accepted.",
        sub_guilds: []
    },
    'gilded_lily_tournament_hosts': {
        name: "#37 The Gilded Lily Tournament Hosts",
        description: "A charter from King Chalmus III, tasking a specific order of knights with organizing and hosting the grand tournaments of Chramalot. They are masters of ceremony as well as combat.",
        leader: "Lord Herald Percival",
        sponsoring_faction: "knights_of_the_gilded_lily",
        headquarters: "The Grand Pavilion, The Gilded Keep",
        goals: [ "Host the most spectacular and honorable tournaments in the world.", "Uphold the laws of chivalry and fair play.", "Test the mettle of the kingdom's knights." ],
        ranks: [
            { title: "Lord Herald", description: "The master of ceremonies and chief judge." },
            { title: "Knight Marshal", description: "Organizes the jousts and melees." },
            { title: "Master of the Lists", description: "Maintains the tournament grounds." },
            { title: "Page", description: "Assists the knights and learns the rules." }
        ],
        rules: [ "Honor above all.", "The laws of the tournament are absolute.", "Let the best knight win." ],
        recruitment: "Knights of the Gilded Lily known for their impeccable honor and organizational skills are appointed to this charter by the king himself.",
        sub_guilds: []
    },
    'pianta_parks_department': {
        name: "#38 The Pianta Parks Department",
        description: "A charter from the Mushroom Regency to the Pianta people, giving them autonomy to manage the tourist attractions and natural beauty of the Sunshine Isles. They take their job very seriously.",
        leader: "Mayor Pianta",
        sponsoring_faction: "mushroom_regency",
        headquarters: "Delfino Plaza City Hall, Sunshine Isles",
        goals: [ "Keep the beaches clean and the tourists happy.", "Protect the island's natural wonders.", "Throw the best festivals in the world." ],
        ranks: [
            { title: "Mayor", description: "The elected leader of the Piantas." },
            { title: "Park Ranger", description: "Protects a specific area like Gelato Beach or Pinna Park." },
            { title: "Groundskeeper", description: "Maintains the cleanliness of the plaza." },
            { title: "Volunteer", description: "Helps out during the busy season." }
        ],
        rules: [ "No graffiti!", "Respect the local wildlife.", "Have a sunny day!" ],
        recruitment: "All Piantas born on the island are considered part of the Parks Department. It's a civic duty.",
        sub_guilds: []
    },
    'potion_patrol': {
        name: "#39 The Potion Patrol",
        description: "A charter from the Alchemists' Union to a brave group of couriers who deliver vital potions to dangerous and remote locations, from plague-ridden villages to besieged fortresses.",
        leader: "Flask-Runner Anya",
        sponsoring_faction: null,
        headquarters: "The Bubbling Cauldron, Port Prisma",
        goals: [ "Deliver potions safely and on time.", "Navigate treacherous terrain and hostile territory.", "Never, ever drink the merchandise." ],
        ranks: [
            { title: "Flask-Runner", description: "An experienced, senior courier." },
            { title: "Brewer's Boy/Girl", description: "A standard courier." },
            { title: "Bottle-Washer", description: "An apprentice who packs the shipments." }
        ],
        rules: [ "The delivery is life or death.", "Handle with extreme care.", "Don't ask what's in the bottle." ],
        recruitment: "The Union hires fast, agile, and courageous individuals with a knack for survival. A trial run through a monster-infested swamp is the final test.",
        sub_guilds: []
    },
    'fungal_blight_cleanup': {
        name: "#40 The Fungal Blight Clean-up Crew",
        description: "A hazardous materials charter from the Mushroom Regency, tasked with containing and cleansing areas affected by magical plagues and dangerous fungal outbreaks.",
        leader: "Chief Decontaminator Myron",
        sponsoring_faction: "mushroom_regency",
        headquarters: "Mobile Containment Unit Alpha",
        goals: [ "Contain the spread of magical plagues.", "Cleanse blighted land.", "Research cures and preventative measures." ],
        ranks: [
            { title: "Chief Decontaminator", description: "The leader and top expert on magical contagions." },
            { title: "Blight-Breaker", description: "A field agent equipped with alchemical sprayers." },
            { title: "Spore-Scrubber", description: "A technician who decontaminates personnel and equipment." },
            { title: "Canary", description: "A new recruit sent in to see if the air is safe." }
        ],
        rules: [ "Containment is the first priority.", "Follow protocol without deviation.", "When in doubt, incinerate." ],
        recruitment: "Volunteers are rare. Most members are recruited from the ranks of disgraced royal alchemists or criminals offered a pardon in exchange for service.",
        sub_guilds: []
    },
    'shy_guy_express': {
        name: "#41 The Shy Guy Express",
        description: "A surprisingly efficient and discreet mail service that has been granted an official charter to use the Pipe Maze for rapid, kingdom-wide deliveries. Their motto is 'We're shy, but we're fast.'",
        leader: "Postmaster Mask",
        sponsoring_faction: "mushroom_regency",
        headquarters: "The Central Post Office, Pipe Land",
        goals: [ "Deliver mail and packages with speed and discretion.", "Maintain a perfect map of the ever-changing Pipe Maze.", "Avoid eye contact at all costs." ],
        ranks: [
            { title: "Postmaster", description: "The chief of the entire service." },
            { title: "Pipe-Navigator", description: "An expert on the maze's routes." },
            { title: "Mail-Carrier", description: "A standard delivery Shy Guy." },
            { title: "Stamp-Licker", description: "An office worker." }
        ],
        rules: [ "Neither rain, nor snow, nor giant Piranha Plants...", "The mail must get through.", "Do not speak to the customers unless absolutely necessary." ],
        recruitment: "Only Shy Guys are hired, as they are the only ones who instinctively understand the strange logic of the Pipe Maze.",
        sub_guilds: []
    },
    'bobomb_disposal_unit': {
        name: "#42 The Bob-omb Disposal Unit",
        description: "A high-risk, high-reward charter from Wario City, tasked with clearing unexploded Bob-ombs from old battlefields and industrial accidents. The pay is great, if you live to spend it.",
        leader: "Sapper 'Tick-Tock' Tim",
        sponsoring_faction: "wario_land",
        headquarters: "A heavily sandbagged bunker near the Bob-omb Factory",
        goals: [ "Safely disarm and dispose of stray Bob-ombs.", "Salvage usable explosives for Wario.", "Try to keep all your fingers." ],
        ranks: [
            { title: "Master Sapper", description: "Can disarm a Bob-omb with their eyes closed." },
            { title: "Sapper", description: "A qualified demolitions expert." },
            { title: "Fuse-Clipper", description: "A trainee on their first few jobs." }
        ],
        rules: [ "Steady hands, steady nerves.", "The red wire? Or the blue one?", "If you hear it walking, it's too late." ],
        recruitment: "The unit hires individuals with nerves of steel and a very, very steady hand. A background in demolitions or trap-disarming is preferred.",
        sub_guilds: []
    },
    'spiny_egg_harvesters': {
        name: "#43 The Spiny Egg Harvesters",
        description: "A charter from the Koopa Troop to harvest Spiny eggs from the dangerous ice caves. The eggs are a crucial component of Lakitu air defenses.",
        leader: "Chief Hatcher Klaw",
        sponsoring_faction: "koopa_troop",
        headquarters: "The Spiny Egg Hatchery, Bandit's Way",
        goals: [ "Meet the army's quota for Spiny eggs.", "Avoid being frozen or eaten by the Spiny mothers.", "Develop new, more efficient harvesting techniques." ],
        ranks: [
            { title: "Chief Hatcher", description: "The leader of the harvesting operation." },
            { title: "Egg-Wrangler", description: "An expert in distracting the mothers and grabbing the eggs." },
            { title: "Shell-Polisher", description: "Prepares the harvested eggs for deployment." },
            { title: "Bait", description: "The new guy." }
        ],
        rules: [ "The quota is everything.", "Watch out for the mothers.", "Don't drop the eggs." ],
        recruitment: "Only the nimblest and most expendable Koopa Troopas are assigned to this dangerous duty.",
        sub_guilds: []
    },
    'unseen_cipher_black_hats': {
        name: "#44 The Unseen Cipher Black Hats",
        description: "A splinter group of the Unseen Cipher who have accepted a secret, lucrative charter from the Regal Empire's Silent Service to engage in cyber-espionage against Aurea.",
        leader: "Alias: 'Root'",
        sponsoring_faction: "regal_empire",
        headquarters: "A hidden server farm in the Imperial Capital",
        goals: [ "Infiltrate Aurea's data networks.", "Steal forbidden magitek schematics.", "Sow discord between Aurea's Technocratic Elite and Rebel Hackers." ],
        ranks: [
            { title: "Root", description: "The master hacker leading the operation." },
            { title: "Black Hat", description: "An elite cyber-infiltrator." },
            { title: "Script Kiddie", description: "A junior hacker running pre-made programs." }
        ],
        rules: [ "Leave no trace.", "Knowledge is power; steal it.", "The Empire pays well." ],
        recruitment: "Members of the Unseen Cipher who value profit over ideology are secretly approached by agents of the Silent Service with an offer they can't refuse.",
        sub_guilds: []
    },
    'gilded_gryphon_caravan_guards': {
        name: "#45 The Gilded Gryphon Caravan Guards",
        description: "A permanent charter from the Sunstone Trading Company, making the Gilded Gryphons the exclusive security for all their valuable caravans on the Great Imperial Road.",
        leader: "Captain Thorne",
        sponsoring_faction: "regal_empire",
        headquarters: "The Gilded Hall, Vemia City",
        goals: [ "Ensure the safe passage of all Sunstone caravans.", "Eliminate bandit threats along the trade routes.", "Uphold the reputation of both the company and the charter." ],
        ranks: [
            { title: "Caravan-Master", description: "Commands the guard detail for a caravan." },
            { title: "Gryphon Guard", description: "A veteran mercenary." },
            { title: "Outrider", description: "A scout who patrols ahead of the caravan." },
            { title: "Wagon-Watcher", description: "A new recruit on their first contract." }
        ],
        rules: [ "The cargo is more valuable than your life.", "No one touches the merchandise.", "Get paid." ],
        recruitment: "Only the most reliable and disciplined members of the Gilded Gryphon Mercenary Company are assigned to this prestigious and profitable long-term contract.",
        sub_guilds: []
    },
    'tea_leaf_syndicate_importers': {
        name: "#46 The Tea Leaf Syndicate 'Importers'",
        description: "A seemingly legitimate charter from a corrupt Port Prisma official, granting the Tea Leaf Syndicate exclusive rights to import 'exotic spices'. This provides them with a perfect front for their narcotics smuggling.",
        leader: "Green T",
        sponsoring_faction: "tea_leaf_syndicate",
        headquarters: "The Jasmine Dragon Tea House, Port Prisma",
        goals: [ "Maintain the facade of a legitimate business.", "Smuggle 'special blend' narcotics without interference.", "Eliminate rival smugglers who threaten their monopoly." ],
        ranks: [
            { title: "Proprietor", description: "The leader of the front company." },
            { title: "Tea Master", description: "Oversees the smuggling operations." },
            { title: "Clerk", description: "Handles the day-to-day business (and money laundering)." },
            { title: "Stock Boy", description: "Unloads the 'spices'." }
        ],
        rules: [ "Business is business.", "Loose lips sink ships.", "Always keep up appearances." ],
        recruitment: "Loyal members of the Tea Leaf Syndicate are given positions within the front company. A talent for acting and a ruthless business sense are required.",
        sub_guilds: []
    },
    'royal_food_tasters': {
        name: "#47 The Royal Food Tasters",
        description: "A high-risk, high-reward charter in the paranoid Mushroom Regency. These brave (or foolish) Toads are responsible for tasting all food served to Chancellor Toadsworth and the Regency council.",
        leader: "Chief Taster Umami",
        sponsoring_faction: "mushroom_regency",
        headquarters: "A small, heavily guarded kitchen near the Parliament",
        goals: [ "Detect any poison in the royal meals.", "Survive until dessert.", "Get hazard pay." ],
        ranks: [
            { title: "Chief Taster", description: "Has a legendary palate and an even more legendary constitution." },
            { title: "Taster", description: "A full member." },
            { title: "Nibbler", description: "A trainee who only gets to taste the garnish." }
        ],
        rules: [ "If it smells funny, don't eat it.", "Chew slowly.", "Have an antidote handy." ],
        recruitment: "Recruits are often criminals offered a pardon, or individuals with a desperate need for the high salary. A strong stomach is a must.",
        sub_guilds: []
    },
    'starfall_observers': {
        name: "#48 The Starfall Observers",
        description: "A charter granted by the Mages' Guild to a small team of scholars, tasking them with monitoring Starfall Beach for celestial phenomena and harvesting any fallen star fragments for the Guild.",
        leader: "Astromancer Elara",
        sponsoring_faction: "mages_guild",
        headquarters: "A small observatory overlooking Starfall Beach",
        goals: [ "Record all meteor showers and celestial events.", "Secure any star fragments that fall.", "Prevent others from claiming the magical artifacts." ],
        ranks: [
            { title: "Astromancer", description: "The head of the observation team." },
            { title: "Stardust Scholar", description: "Analyzes the fallen fragments." },
            { title: "Beachcomber", description: "Patrols the beach after a meteor shower." }
        ],
        rules: [ "The sky holds the key.", "All findings belong to the Guild.", "Beware the creatures drawn to the starlight." ],
        recruitment: "Mages' Guild members with a specialization in astrology and a tolerance for sandy sandwiches are assigned to this remote but important post.",
        sub_guilds: []
    },
    'ghostly_galleon_exterminators': {
        name: "#49 The Ghostly Galleon Exterminators",
        description: "A charter from the Port Prisma Merchant's Guild to a team of Boo Busters, hired to cleanse the Shipwreck Graveyard of its most dangerous ghostly inhabitants to make the shipping lanes safer.",
        leader: "Captain Poltergeist",
        sponsoring_faction: "freelancer_underworld",
        headquarters: "A haunted-looking ship in Port Prisma",
        goals: [ "Exorcise or capture the most powerful ghosts in the Graveyard.", "Make the sea lanes safer for merchant ships.", "Turn a tidy profit from the Merchant's Guild." ],
        ranks: [
            { title: "Captain", description: "The leader of the extermination crew." },
            { title: "Ecto-Wrangler", description: "An expert in capturing spectral entities." },
            { title: "Bait", description: "Lures the ghosts out of the wrecks." }
        ],
        rules: [ "Get paid, don't get possessed.", "A ghost in the trap is worth two in the galleon.", "Always double-check the containment unit." ],
        recruitment: "The charter hires experienced paranormal investigators, disgraced priests, and anyone else with the skills and courage to face down a fleet of angry ghosts.",
        sub_guilds: []
    },
    'volcano_tamers': {
        name: "#50 The Volcano Tamers",
        description: "A charter from the DK Crew to a group of daredevil engineers, tasked with managing the eruptions of Barrel Volcano by installing a series of geothermal release valves.",
        leader: "Engineer Magma",
        sponsoring_faction: "dk_crew",
        headquarters: "A reinforced bunker on the slopes of Barrel Volcano",
        goals: [ "Prevent catastrophic eruptions.", "Harness geothermal energy for the DK Crew.", "Don't fall in the lava." ],
        ranks: [
            { title: "Chief Engineer", description: "Designs and oversees the valve system." },
            { title: "Magma-Diver", description: "Installs equipment in high-heat zones." },
            { title: "Lookout", description: "Watches for signs of an imminent eruption." }
        ],
        rules: [ "The volcano is a fickle beast.", "Work fast, and wear fireproof boots.", "If you see a really big bubble, run." ],
        recruitment: "The DK Crew hires the bravest and most heat-resistant engineers they can find. A tolerance for bananas is also a plus.",
        sub_guilds: []
    },
    'wonder_flower_cultivators': {
        name: "#51 The Wonder Flower Cultivators",
        description: "A royal charter from Prince Florian to a select group of Green Thumb Guardians, allowing them to study and cultivate the reality-bending Wonder Flowers in a secure, secret garden.",
        leader: "Royal Botanist Daisy",
        sponsoring_faction: "flower_kingdom",
        headquarters: "The Secret Garden of Wonders, Flower Kingdom",
        goals: [ "Understand the nature of the Wonder Flowers' magic.", "Learn to safely cultivate them.", "Prevent their power from falling into the wrong hands." ],
        ranks: [
            { title: "Royal Botanist", description: "The head of the project." },
            { title: "Wonder-Tender", description: "A specialist who cares for the flowers." },
            { title: "Guard", description: "Protects the garden from intruders." }
        ],
        rules: [ "Expect the unexpected.", "Handle with extreme caution.", "Do not talk to the flowers, they may talk back." ],
        recruitment: "Only the most trusted and skilled members of the Green Thumb Guardians are invited by the Prince to join this top-secret project.",
        sub_guilds: []
    }
};