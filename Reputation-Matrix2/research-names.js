
// research-names.js

// Helper to format the output object
const n = (name, desc, effect) => ({ name, desc, effect });

// =============================================================================
// MASTER DATA REPOSITORY WITH DETAILED LORE
// =============================================================================

const TECH_DATA = {
    // -------------------------------------------------------------------------
    // THE MIDLANDS (Medieval / Magitek / Imperial)
    // -------------------------------------------------------------------------
    midlands: {
        WEAPONS: [
            { title: "Ironworking", steps: [
                { n: "Bog Iron Extraction", d: "Harvests iron deposits from peat bogs, allowing for the smelting of basic tools and weapons without deep mining operations." },
                { n: "Bloomery Furnaces", d: "Utilizes a chimney-style furnace to smelt iron at high temperatures, separating slag from metal to create workable blooms." },
                { n: "Slag Removal", d: "Improves the purity of iron by repeatedly hammering out impurities, resulting in less brittle weaponry." },
                { n: "Hammer Forging", d: "Standardizes the shaping of hot metal on the anvil, increasing the durability and uniformity of infantry gear." },
                { n: "Standardized Swords", d: "Establishes a uniform template for the Imperial gladius, ensuring every soldier is equipped with a reliable blade." }
            ]},
            { title: "Steel Mastery", steps: [
                { n: "Carbon Infusion", d: "Introduces controlled amounts of carbon into iron to create steel, drastically increasing edge retention." },
                { n: "Folded Steel", d: "Repeatedly folds the metal to distribute carbon evenly, removing weak points in blades." },
                { n: "Tempered Edges", d: "Heat-treats the cutting edge to be hard while keeping the spine flexible to prevent shattering." },
                { n: "Crossguard Balance", d: "Refines the weight distribution of swords, allowing for faster parries and strikes." },
                { n: "Plate Armor Casting", d: "Allows for the creation of large, solid steel plates that deflect blows rather than just absorbing them." }
            ]},
            { title: "Siegecraft", steps: [
                { n: "Ballista Tension", d: "Utilizes twisted skeins of rope to store immense kinetic energy, launching heavy bolts with armor-piercing force." },
                { n: "Catapult Counterweights", d: "Replaces tension-based firing with gravity-driven counterweights for consistent long-range bombardment." },
                { n: "Battering Rams", d: "Reinforces logs with iron heads and covered frames to breach gates while protecting the crew." },
                { n: "Siege Tower Wheels", d: "Develops massive, load-bearing axles to move assault towers against enemy walls." },
                { n: "Burning Oil Mixes", d: "Formulates sticky, flammable concoctions to pour onto attackers, creating area-denial zones." }
            ]},
            { title: "Imperial Phalanx", steps: [
                { n: "Shield Wall Drills", d: "Trains soldiers to interlock shields, creating a movable fortress that is nearly impervious to arrows." },
                { n: "Pike Bracing", d: "Teaches the grounding of long spears to break cavalry charges with a wall of steel points." },
                { n: "Formation Marching", d: "Ensures troops move as a single organism, maintaining cohesion even over rough terrain." },
                { n: "Officer Whistles", d: "Uses piercing sound signals to relay commands instantly across the roar of battle." },
                { n: "Unified Heraldry", d: "Standardizes uniforms and banners to boost morale and prevent friendly fire in chaotic melees." }
            ]},
            { title: "Crossbow Mechanics", steps: [
                { n: "Winched Strings", d: "Adds a mechanical crank to draw heavy bowstrings, allowing weak soldiers to fire with immense power." },
                { n: "Armor-Piercing Bolts", d: "Hardens the tips of quarrels to punch through plate armor and magical wards." },
                { n: "Repeating Levers", d: "Introduces a gravity-fed magazine and lever action for rapid fire at close range." },
                { n: "Sniper Scopes", d: "Mounts rudimentary glass lenses to crossbows for precision targeting of enemy commanders." },
                { n: "Heavy Arbalests", d: "Constructs massive, stationary crossbows capable of skewering giants or light vehicles." }
            ]},
            { title: "Blackpowder Basics", steps: [
                { n: "Sulfur Refining", d: "Purifies sulfur from volcanic sources to increase the combustion rate of explosive mixtures." },
                { n: "Saltpeter Collection", d: "Harvests nitrates from manure and compost to create the oxidizer needed for gunpowder." },
                { n: "Iron Casings", d: "Develops cast-iron shells that fragment upon detonation, maximizing anti-infantry lethality." },
                { n: "Fuse Timing", d: "Creates reliable slow-burning cords to allow controlled detonations without blowing up the user." },
                { n: "Explosive Yields", d: "Optimizes the ratio of charcoal, sulfur, and saltpeter for maximum destructive force." }
            ]},
            { title: "Magitek Weaponry", steps: [
                { n: "Mana-Infused Steel", d: "Alloys steel with dust from magical crystals, allowing weapons to channel arcane energy." },
                { n: "Crystal Focusing", d: "Grinds mana-crystals into precise lenses to channel arcane energy into a cohesive beam, stabilizing the volatile discharge of magitek rifles." },
                { n: "Arcane Triggers", d: "Replaces mechanical firing pins with runic activators that release stored spells instantly." },
                { n: "Shock Enchants", d: "Inscribes runes that discharge lightning upon impact, stunning or killing armored targets." },
                { n: "Golem Fists", d: "Articulated, hydraulic gauntlets powered by magic to crush stone and bone alike." }
            ]},
            { title: "Sky-Iron Alloys", steps: [
                { n: "Meteorite Harvesting", d: "Locates and mines fallen stars for their ultra-dense, magically resonant metals." },
                { n: "Star-Metal Smelting", d: "Uses magical furnaces to melt sky-iron, creating weapons that are impossibly light and durable." },
                { n: "Gravity-Light Armor", d: "Forges armor that manipulates local gravity, allowing heavy plating to feel weightless." },
                { n: "Void Edges", d: "Sharpens blades to a molecular level, allowing them to cut through reality itself." },
                { n: "Celestial Shields", d: "Creates barriers that absorb kinetic energy and convert it into light." }
            ]},
            { title: "The Emperor's Wrath", steps: [
                { n: "Sun-Cannon Prototypes", d: "Experimental artillery that fires concentrated solar plasma." },
                { n: "Orbital Targeting", d: "Uses scrying magic to triangulate targets from the upper atmosphere." },
                { n: "Divine Flame Fuel", d: "Liquefies holy prayers into a combustible fuel source." },
                { n: "Absolute Disintegration", d: "Weaponry designed to unmake matter at the atomic level." },
                { n: "The Final Decree", d: "A spell-weapon that enforces the Emperor's will as physical law, crushing dissenters." }
            ]},
            { title: "God-Slaying Steel", steps: [
                { n: "Reality-Severing Edges", d: "Blades capable of cutting the connection between a god and their divinity." },
                { n: "Soul-Bound Hilts", d: "Weapons that bond permanently to the user's soul, growing in power with them." },
                { n: "Infinite Sharpness", d: "Technology that maintains an edge that effectively has zero width." },
                { n: "Concept Killing", d: "Weaponry capable of targeting abstract concepts like 'fear' or 'hope'." },
                { n: "Deicide", d: "The ultimate technique for permanently ending immortal beings." }
            ]}
        ],
        TECH: [
            { title: "Agriculture", steps: [
                { n: "Crop Rotation", d: "Systematically changing crops to preserve soil nutrients and prevent famine." },
                { n: "Iron Plows", d: "Tools that can break tough, clay-heavy soil to expand arable land." },
                { n: "Irrigation Ditches", d: "Diverting river water to hydrate crops during dry seasons." },
                { n: "Windmills", d: "Harnessing wind power to grind grain into flour efficiently." },
                { n: "Grain Silos", d: "Storage structures designed to keep grain dry and safe from pests." }
            ]},
            { title: "Masonry", steps: [
                { n: "Stone Cutting", d: "Techniques for quarrying and shaping blocks for durable construction." },
                { n: "Mortar Mixing", d: "Developing binding agents to hold stone structures together for centuries." },
                { n: "Arch Support", d: "Engineering load-bearing arches to allow for larger windows and doors." },
                { n: "Flying Buttresses", d: "External supports that allow for thinner walls and higher ceilings." },
                { n: "Cathedral Spires", d: "Architectural feats that reach towards the heavens to inspire awe." }
            ]},
            { title: "Printing", steps: [
                { n: "Woodblock Carving", d: "Carving pages into wood for mass reproduction of texts." },
                { n: "Movable Type", d: "Individual metal letters that can be rearranged to print any text rapidly." },
                { n: "Ink Pressing", d: "Mechanical presses that apply even pressure for clear, legible text." },
                { n: "Book Binding", d: "Techniques for sewing pages into durable covers." },
                { n: "Mass Distribution", d: "Establishing networks to sell and transport books across the empire." }
            ]},
            { title: "Steam Power", steps: [
                { n: "Boiler Pressure", d: "Creating sealed vessels that can withstand high-pressure steam." },
                { n: "Piston Action", d: "Converting steam pressure into mechanical motion." },
                { n: "Locomotive Engines", d: "Putting steam engines on wheels to haul massive loads." },
                { n: "Steam Heating", d: "Piping steam through buildings for centralized warmth." },
                { n: "Industrial Looms", d: "Steam-powered weaving machines for mass textile production." }
            ]},
            { title: "Clockwork", steps: [
                { n: "Gear Cutting", d: "Precision machining of gears for accurate timekeeping." },
                { n: "Mainsprings", d: "Coiled springs that store potential energy to power mechanisms." },
                { n: "Escapement Mechanisms", d: "Devices that regulate the release of energy for consistent timing." },
                { n: "Pocket Watches", d: "Miniaturization of clockwork for personal use." },
                { n: "Automata", d: "Clockwork robots capable of performing simple tasks." }
            ]},
            { title: "Imperial Infrastructure", steps: [
                { n: "Cobbled Roads", d: "Paving roads with stone for durable, all-weather transport." },
                { n: "Sewer Systems", d: "Underground tunnels to remove waste and improve city hygiene." },
                { n: "Aqueducts", d: "Bridged channels that transport fresh water over long distances." },
                { n: "Gas Streetlights", d: "Piping natural gas to light city streets at night." },
                { n: "Suspension Bridges", d: "Using cables to span great distances over rivers and chasms." }
            ]},
            { title: "Navigation", steps: [
                { n: "Compass Magnetic", d: "Using magnetized needles to determine direction." },
                { n: "Astrolabes", d: "Instruments for calculating latitude based on the stars." },
                { n: "Detailed Cartography", d: "Accurate mapping of coastlines and trade routes." },
                { n: "Lighthouses", d: "Towers with bright beacons to warn ships of danger." },
                { n: "Airship Rudders", d: "Aerodynamic controls for steering large flying vessels." }
            ]},
            { title: "Magitek Industry", steps: [
                { n: "Crystal Batteries", d: "Storing magical energy for later use in machines." },
                { n: "Mana Conduits", d: "Piping raw magic safely through buildings and ships." },
                { n: "Golem Assembly Lines", d: "Mass-producing magical constructs for labor and war." },
                { n: "Arcane Locomotives", d: "Trains powered by magical crystals rather than coal." },
                { n: "Floating Citadels", d: "Using anti-gravity magic to lift entire fortresses into the sky." }
            ]},
            { title: "Aether Physics", steps: [
                { n: "Void Shielding", d: "Energy barriers that shunt incoming attacks into another dimension." },
                { n: "Teleportation Pads", d: "Devices that deconstruct and reconstruct matter at a distance." },
                { n: "Gravity Negation", d: "Technology that nullifies the effect of gravity on objects." },
                { n: "Dimensional Anchors", d: "Stabilizers that prevent teleportation or planar shifting." },
                { n: "Sky-Cities", d: "Permanent metropolises built on clouds or floating rocks." }
            ]},
            { title: "Utopian Engineering", steps: [
                { n: "Weather Control Towers", d: "Spires that manipulate the atmosphere to ensure perfect weather." },
                { n: "Infinite Energy Cores", d: "Perpetual motion machines that generate limitless power." },
                { n: "Matter Synthesis", d: "Creating food and materials directly from energy." },
                { n: "Time Stabilization", d: "Preventing temporal anomalies and aging." },
                { n: "The Perfect City", d: "Urban planning optimized for maximum happiness and efficiency." }
            ]}
        ],
        MAGIC: [
            { title: "Hedge Wizardry", steps: [
                { n: "Herb Gathering", d: "Identifying plants with minor magical properties." },
                { n: "Basic Cantrips", d: "Simple spells for lighting fires or cleaning clothes." },
                { n: "Candle Wards", d: "Rituals using candles to repel minor spirits." },
                { n: "Mending Charms", d: "Magic that repairs small breaks in objects." },
                { n: "Light Spells", d: "Creating small orbs of light for illumination." }
            ]},
            { title: "Guild Regulation", steps: [
                { n: "License Printing", d: "Bureaucratic control of who is allowed to cast spells." },
                { n: "Mana Tithes", d: "Collecting a portion of magical energy for the state." },
                { n: "Scroll Standardization", d: "Ensuring all spell scrolls use the same arcane language." },
                { n: "Wand Registration", d: "Tracking the ownership of all magical foci." },
                { n: "Robes of Office", d: "Enchanted clothing that signifies rank and dampens backfires." }
            ]},
            { title: "Battle Magic", steps: [
                { n: "Fireball Calculations", d: "Optimizing the trajectory and yield of explosive fire spells." },
                { n: "Lightning Reflexes", d: "Enhancing reaction times with minor electrical stimulation." },
                { n: "Shielding Auras", d: "Projecting magical barriers to deflect arrows and blows." },
                { n: "Tactical Teleport", d: "Short-range blinks to reposition troops on the battlefield." },
                { n: "Unit Buffing", d: "Mass enchantments to increase strength and courage." }
            ]},
            { title: "Ley-Line Tapping", steps: [
                { n: "Node Detection", d: "Locating points where magical energy naturally pools." },
                { n: "Mana Siphoning", d: "Drawing raw power directly from the earth." },
                { n: "Geomantic Stabilization", d: "Preventing wild magic surges near ley lines." },
                { n: "Power Routing", d: "Directing ley line energy to distant cities." },
                { n: "Nexus Construction", d: "Building towers to amplify and control ley nodes." }
            ]},
            { title: "Enchantment", steps: [
                { n: "Gem Faceting", d: "Cutting gems to better hold magical charges." },
                { n: "Runic Inscription", d: "Carving magic words into items for permanent effects." },
                { n: "Soul Binding", d: "Tying a spirit to an object to give it intelligence." },
                { n: "Permanent Wards", d: "Protection spells that do not fade over time." },
                { n: "Sentient Items", d: "Granting weapons and tools a mind of their own." }
            ]},
            { title: "Imperial Sorcery", steps: [
                { n: "State-Sanctioned Rituals", d: "Massive ceremonies to bless the entire empire." },
                { n: "Mass Mind Control", d: "Subtle enchantments to ensure population loyalty." },
                { n: "Weather Manipulation", d: "Summoning rain for crops or storms for enemies." },
                { n: "City-Wide Barriers", d: "Domes of force that protect capitals from siege." },
                { n: "Royal Blood Magic", d: "Using the Emperor's bloodline to fuel immense spells." }
            ]},
            { title: "Void Calling", steps: [
                { n: "Shadow Weaving", d: "Manipulating darkness to hide or attack." },
                { n: "Abyssal Whispers", d: "Calling upon entities from the void for secrets." },
                { n: "Sanity Anchors", d: "Techniques to prevent madness when gazing into the abyss." },
                { n: "Dark Energy Harvest", d: "Drawing power from the entropy of the void." },
                { n: "Null-Zones", d: "Creating areas where no magic can function." }
            ]},
            { title: "Chronomancy", steps: [
                { n: "Second-Hand Ticking", d: "Slowing down time for precise movements." },
                { n: "Minute Reversal", d: "Turning back time a few minutes to fix mistakes." },
                { n: "Hour Skipping", d: "Fast-forwarding through boring or dangerous events." },
                { n: "Timeline Observation", d: "Viewing alternate futures to make better decisions." },
                { n: "Paradox Prevention", d: "Safeguards against destroying the fabric of causality." }
            ]},
            { title: "High Arcana", steps: [
                { n: "Reality Weaving", d: "Altering the physical laws of the universe." },
                { n: "Wish Formulation", d: "The precise wording needed to reshape reality safely." },
                { n: "Planar Gates", d: "Opening stable portals to other dimensions." },
                { n: "True Name Power", d: "Gaining absolute control over beings by knowing their true name." },
                { n: "Existence Erasure", d: "Removing a target from history completely." }
            ]},
            { title: "Ascension", steps: [
                { n: "Mortality Shedding", d: "Abandoning the physical body for a magical form." },
                { n: "Pure Mana Form", d: "Becoming a being of living energy." },
                { n: "Divine Spark", d: "Igniting the potential for godhood." },
                { n: "Omniscience", d: "Seeing all things in all places at once." },
                { n: "The Archmage's Throne", d: "Taking a seat among the gods." }
            ]}
        ],
        MEDICAL: [
            { title: "Herbalism", steps: [
                { n: "Poultice Mixing", d: "Mashing herbs into pastes to treat wounds." },
                { n: "Willow Bark Tea", d: "Brewing natural pain relief." },
                { n: "Antiseptic Moss", d: "Using absorbent moss to clean infections." },
                { n: "Bone Setting", d: "Aligning broken bones for proper healing." },
                { n: "Fever Reduction", d: "Cooling herbs to break dangerous fevers." }
            ]},
            { title: "Anatomy", steps: [
                { n: "Dissection", d: "Studying corpses to understand internal organs." },
                { n: "Organ Mapping", d: "Creating charts of the human body." },
                { n: "Bloodletting", d: "Removing 'bad blood' to balance humors (dubious efficacy)." },
                { n: "Surgical Tools", d: "Refining scalpels and saws for precision work." },
                { n: "Humor Balancing", d: "Treating patients based on Bile, Phlegm, and Blood." }
            ]},
            { title: "Alchemical Cures", steps: [
                { n: "Mercury Salves", d: "Using toxic metals to treat skin conditions." },
                { n: "Gold Tinctures", d: "Drinking dissolved gold for vitality." },
                { n: "Elixir of Life", d: "A mythical potion said to cure all ills." },
                { n: "Panacea Brewing", d: "Attempting to create a cure-all medicine." },
                { n: "Poison Antidotes", d: "Developing counters to common toxins." }
            ]},
            { title: "Divine Healing", steps: [
                { n: "Prayer Focus", d: "Channeling faith to speed recovery." },
                { n: "Lay on Hands", d: "Direct transfer of divine energy to heal wounds." },
                { n: "Holy Water", d: "Cleansing spiritual and physical corruption." },
                { n: "Disease Purging", d: "Expelling sickness through ritual." },
                { n: "Resurrection Rites", d: "Calling a soul back to its body (rare and costly)." }
            ]},
            { title: "Magical Surgery", steps: [
                { n: "Flesh Knitting", d: "Using magic to fuse skin back together instantly." },
                { n: "Bone Mending", d: "Fusing broken bones with a touch." },
                { n: "Pain Suppression", d: "Magically blocking pain receptors." },
                { n: "Organ Regrowth", d: "Regenerating lost organs over time." },
                { n: "Soul Anchoring", d: "Preventing the soul from leaving a dying body." }
            ]},
            { title: "Sanitation", steps: [
                { n: "Waste Management", d: "Proper disposal of sewage to prevent disease." },
                { n: "Clean Water", d: "Filtering and boiling water supplies." },
                { n: "Plague Containment", d: "Isolating the sick to stop the spread." },
                { n: "Quarantine Laws", d: "Legal frameworks for locking down infected cities." },
                { n: "Public Baths", d: "Encouraging hygiene among the populace." }
            ]},
            { title: "Cybernetics", steps: [
                { n: "Prosthetic Limbs", d: "Replacing lost limbs with mechanical ones." },
                { n: "Gear Hearts", d: "Clockwork pumps to replace failing hearts." },
                { n: "Ocular Lenses", d: "Mechanical eyes with zoom and night vision." },
                { n: "Nerve Splicing", d: "Connecting machines to the nervous system." },
                { n: "Iron Skin", d: "Subdermal plating for armor." }
            ]},
            { title: "Biomancy", steps: [
                { n: "Cellular Manipulation", d: "Controlling cells to speed healing or change form." },
                { n: "Genetic Tweak", d: "Altering DNA to remove defects." },
                { n: "Life Extension", d: "Slowing the aging process." },
                { n: "Cloning Vats", d: "Growing replacement bodies." },
                { n: "Perfect Form", d: "Achieving the biological ideal." }
            ]},
            { title: "Psychic Healing", steps: [
                { n: "Mind Mending", d: "Curing madness and trauma telepathically." },
                { n: "Trauma Erasure", d: "Removing painful memories." },
                { n: "Sanity Restoration", d: "Stabilizing the mind after eldritch encounters." },
                { n: "Dream Therapy", d: "Healing the mind through guided dreams." },
                { n: "Soul Retrieval", d: "Recovering fragments of a shattered soul." }
            ]},
            { title: "Immortality", steps: [
                { n: "Age Reversal", d: "Turning back the biological clock." },
                { n: "Phylactery Crafting", d: "Storing the soul in an object to prevent death." },
                { n: "Consciousness Transfer", d: "Moving the mind to a new body." },
                { n: "Eternal Youth", d: "Freezing the body at its peak." },
                { n: "Death Defiance", d: "Refusing to die through sheer will." }
            ]}
        ],
        ECONOMIC: [
            { title: "Barter System", steps: [
                { n: "Trade Goods", d: "Exchanging items directly for other items." },
                { n: "Livestock Exchange", d: "Using animals as a measure of value." },
                { n: "Labor Swapping", d: "Trading work hours for goods or services." },
                { n: "Market Stalls", d: "Setting up temporary shops in town squares." },
                { n: "Haggling", d: "Negotiating prices for every transaction." }
            ]},
            { title: "Currency", steps: [
                { n: "Minting Coins", d: "Creating standardized metal disks for trade." },
                { n: "Gold Standard", d: "Backing currency value with gold reserves." },
                { n: "Counterfeit Detection", d: "Identifying fake coins." },
                { n: "Royal Treasury", d: "Centralizing wealth for state use." },
                { n: "Tax Collection", d: "Gathering revenue from the populace." }
            ]},
            { title: "Guilds", steps: [
                { n: "Apprenticeships", d: "Training new workers under masters." },
                { n: "Price Fixing", d: "Setting standard prices to prevent undercutting." },
                { n: "Quality Control", d: "Ensuring goods meet a certain standard." },
                { n: "Trade Monopolies", d: "Controlling entire industries." },
                { n: "Merchant Princes", d: "Wealthy traders with political power." }
            ]},
            { title: "Banking", steps: [
                { n: "Loans", d: "Lending money with the expectation of repayment." },
                { n: "Interest Rates", d: "Charging for the privilege of borrowing money." },
                { n: "Vault Security", d: "Protecting stored wealth from theft." },
                { n: "Letters of Credit", d: "Paper documents representing gold value." },
                { n: "Investment Firms", d: "Pooling money to fund ventures." }
            ]},
            { title: "Trade Routes", steps: [
                { n: "Road Safety", d: "Patrolling roads to prevent banditry." },
                { n: "Caravan Guards", d: "Mercenaries hired to protect shipments." },
                { n: "Toll Booths", d: "Charging for road usage." },
                { n: "Sea Lanes", d: "Mapping safe paths across the ocean." },
                { n: "Airship Cargo", d: "Transporting goods by sky." }
            ]},
            { title: "Industrialization", steps: [
                { n: "Mass Production", d: "Making many identical items quickly." },
                { n: "Factory Labor", d: "Organizing workers into shifts." },
                { n: "Resource Extraction", d: "Mining and logging at scale." },
                { n: "Urbanization", d: "Moving populations to cities for work." },
                { n: "Rail Networks", d: "Connecting cities with trains." }
            ]},
            { title: "Global Market", steps: [
                { n: "Stock Exchange", d: "Trading shares of companies." },
                { n: "Futures Trading", d: "Betting on the future price of goods." },
                { n: "Economic Sanctions", d: "Blocking trade to punish enemies." },
                { n: "Trade Agreements", d: "Treaties to facilitate commerce." },
                { n: "Wealth Hoarding", d: "Accumulating vast fortunes." }
            ]},
            { title: "Digital Currency", steps: [
                { n: "Mana-Crypto", d: "Magic-backed digital tokens." },
                { n: "Soul Gems", d: "Using souls as currency." },
                { n: "Energy Credits", d: "Using power units as money." },
                { n: "Virtual Goods", d: "Selling items that only exist digitally." },
                { n: "Instant Transfer", d: "Moving money instantly across distances." }
            ]},
            { title: "Post-Scarcity", steps: [
                { n: "Matter Replication", d: "Creating goods from energy." },
                { n: "Infinite Resources", d: "Eliminating the need for mining." },
                { n: "Universal Income", d: "Providing for everyone's needs." },
                { n: "Automated Labor", d: "Robots doing all the work." },
                { n: "Leisure Society", d: "Humans focusing on art and play." }
            ]},
            { title: "Galactic Trade", steps: [
                { n: "Starship Cargo", d: "Moving goods between planets." },
                { n: "Planet Buying", d: "Purchasing entire worlds." },
                { n: "Dyson Sphere Mining", d: "Harvesting the power of stars." },
                { n: "Universal Credit", d: "A single currency for the galaxy." },
                { n: "Interstellar Economy", d: "Trade on a cosmic scale." }
            ]}
        ],
        POLITICAL: [
            { title: "Feudalism", steps: [
                { n: "Land Grants", d: "Trading land for loyalty." },
                { n: "Serfdom", d: "Binding peasants to the land." },
                { n: "Knightly Oaths", d: "Swearing loyalty to a lord." },
                { n: "Baronial Rights", d: "Giving nobles power over their domains." },
                { n: "King's Justice", d: "The monarch is the final judge." }
            ]},
            { title: "Imperialism", steps: [
                { n: "Expansionism", d: "Conquering neighbors to grow." },
                { n: "Colonialism", d: "Settling distant lands." },
                { n: "Bureaucracy", d: "Creating systems to manage a vast empire." },
                { n: "Tax Codes", d: "Formalizing revenue collection." },
                { n: "Standing Army", d: "maintaining soldiers full-time." }
            ]},
            { title: "Diplomacy", steps: [
                { n: "Treaties", d: "Formal agreements between nations." },
                { n: "Ambassadors", d: "Representatives living in foreign courts." },
                { n: "State Dinners", d: "Using food to smooth over differences." },
                { n: "Espionage", d: "Spying on allies and enemies." },
                { n: "Alliances", d: "Joining forces for mutual defense." }
            ]},
            { title: "Law & Order", steps: [
                { n: "Written Codes", d: "Writing laws down so they are known." },
                { n: "Magistrates", d: "Judges appointed to enforce the law." },
                { n: "Prisons", d: "Places to hold criminals." },
                { n: "Policing", d: "Guards dedicated to keeping the peace." },
                { n: "Execution", d: "Capital punishment for serious crimes." }
            ]},
            { title: "Propaganda", steps: [
                { n: "Town Criers", d: "Shouting the news (spin) to the people." },
                { n: "State Art", d: "Statues and paintings glorifying the leader." },
                { n: "Censorship", d: "Suppressing dissenting voices." },
                { n: "Patriotism", d: "Encouraging love of country." },
                { n: "Cult of Personality", d: "Worshipping the leader." }
            ]},
            { title: "Republic", steps: [
                { n: "Senate", d: "A council of representatives." },
                { n: "Voting Rights", d: "Allowing citizens to choose leaders." },
                { n: "Constitution", d: "A foundational document of rights." },
                { n: "Public Debates", d: "Discussing issues openly." },
                { n: "Elections", d: "Regular cycles of choosing leaders." }
            ]},
            { title: "Technocracy", steps: [
                { n: "Meritocracy", d: "Rule by the most skilled." },
                { n: "Scientist Rulers", d: "Experts making decisions." },
                { n: "Efficiency", d: "Prioritizing results over feelings." },
                { n: "Algorithmic Law", d: "Computers deciding justice." },
                { n: "Optimization", d: "Making society run perfectly." }
            ]},
            { title: "Theocracy", steps: [
                { n: "Divine Right", d: "Rule by God's will." },
                { n: "Inquisition", d: "Rooting out heresy." },
                { n: "Religious Law", d: "Scripture as legal code." },
                { n: "Holy Wars", d: "Fighting for the faith." },
                { n: "Mandatory Prayer", d: "Enforced worship." }
            ]},
            { title: "Totalitarianism", steps: [
                { n: "Surveillance", d: "Watching everyone, always." },
                { n: "Thought Police", d: "Punishing bad ideas." },
                { n: "Absolute Control", d: "The state dominates all life." },
                { n: "State Worship", d: "The government is god." },
                { n: "The Party", d: "One group rules forever." }
            ]},
            { title: "Utopia", steps: [
                { n: "Peace", d: "The end of all war." },
                { n: "Equality", d: "Everyone is truly equal." },
                { n: "Harmony", d: "Living in balance with nature." },
                { n: "Shared Purpose", d: "Working together for the future." },
                { n: "The Golden Age", d: "A time of endless prosperity." }
            ]}
        ]
    },

    // -------------------------------------------------------------------------
    // MUSHROOM KINGDOM (Organic / Cartoon / Power-up)
    // -------------------------------------------------------------------------
    mushroom_kingdom: {
        WEAPONS: [
            { title: "Vegetable Ballistics", steps: [
                { n: "Turnip Selection", d: "Identifies root vegetables with optimal density and aerodynamic properties for throwing." },
                { n: "Radish Aerodynamics", d: "Shaping vegetable projectiles to reduce drag and increase flight distance." },
                { n: "Pumpkin Weights", d: "Cultivating super-heavy pumpkins for crushing enemies from above." },
                { n: "Beetroot Bludgeons", d: "Hardening beets into rock-solid clubs for melee combat." },
                { n: "Veggie Throwing Arm", d: "Training regimen to increase the velocity of thrown produce." }
            ]},
            { title: "Shell Defense", steps: [
                { n: "Green Shell Polish", d: "Treating Koopa shells to reduce friction, allowing them to slide endlessly." },
                { n: "Red Shell Homing", d: "Imbuing shells with tracking magic to seek out the nearest enemy." },
                { n: "Blue Shell Spikes", d: "Adding wings and spikes to a shell to target the enemy leader." },
                { n: "Dry Bones Assembly", d: "Techniques for reassembling shattered skeletal minions." },
                { n: "Spinning Technique", d: "Teaching troops to tuck and spin for offense and defense." }
            ]},
            { title: "Hammer Space", steps: [
                { n: "Mallet Construction", d: "Crafting oversized wooden hammers that are surprisingly light." },
                { n: "Barrel Physics", d: "Engineering barrels to roll predictably or explode on impact." },
                { n: "Throwing Arcs", d: "Calculating the perfect parabolic arc for thrown projectiles." },
                { n: "Squeaky Impact", d: "Enchanting hammers to make a demoralizing noise on hit." },
                { n: "Infinite Pocket Storage", d: "Spatial magic allowing unlimited hammers to be pulled from nowhere." }
            ]},
            { title: "Fire Flower Power", steps: [
                { n: "Spicy Soil", d: "Enriching soil with peppers to grow hotter flowers." },
                { n: "Petal Harvesting", d: "Collecting flowers at peak bloom for maximum firepower." },
                { n: "Hand-Heat Resistance", d: "Training to hold fireballs without burning one's hands." },
                { n: "Bouncing Fireballs", d: "Technique for throwing fire so it skips along the ground." },
                { n: "Flame Coloration", d: "Altering chemical composition to change fireball color." }
            ]},
            { title: "Jump Tactics", steps: [
                { n: "Boot Strengthening", d: "Reinforcing soles to withstand high-impact stomps." },
                { n: "Gravity Defiance", d: "Minor levitation spells to increase jump height." },
                { n: "Double Jump Logic", d: "Using air resistance to jump again while mid-air." },
                { n: "Stomp Accuracy", d: "Targeting enemy weak points from above." },
                { n: "Ground Pound Force", d: "Channeling mass downwards for a devastating area attack." }
            ]},
            { title: "Starman Synthesis", steps: [
                { n: "Invincibility Serum", d: "Distilling star power into a temporary invulnerability potion." },
                { n: "Rainbow Dyes", d: "Creating the iconic shifting colors of star power." },
                { n: "Sparkle Generation", d: "Ensuring the user emits blinding light." },
                { n: "Momentum Maintenance", d: "Allowing the user to run through enemies without stopping." },
                { n: "Contact Damage", d: "Ensuring anything touched by the user is instantly defeated." }
            ]},
            { title: "Bob-omb Engineering", steps: [
                { n: "Fuse Lengths", d: "Standardizing fuses for predictable detonation times." },
                { n: "Walking Mechanisms", d: "Giving bombs feet so they can march into battle." },
                { n: "Pink Explodey Powder", d: "A proprietary explosive mix that creates cartoony blasts." },
                { n: "Key Winding", d: "Mechanical wind-up keys for propulsion." },
                { n: "Blast Radius", d: "Optimizing the explosion to be large but survivable for the user." }
            ]},
            { title: "Bullet Bill Tech", steps: [
                { n: "Cannon Casting", d: "Forging heavy iron cannons with skull motifs." },
                { n: "Smiley Face Painting", d: "Painting faces on missiles to unnerve the enemy." },
                { n: "Homing Sensors", d: "Magical sensors that track movement." },
                { n: "Banzai Scaling", d: "Creating colossal versions of the standard Bullet Bill." },
                { n: "Infinite Launchers", d: "Enchanting cannons to have unlimited ammo." }
            ]},
            { title: "Giga-Growth", steps: [
                { n: "Mega Mushroom Spores", d: "Cultivating mushrooms that cause massive size increases." },
                { n: "Structural Integrity", d: "Ensuring the user's body can support immense weight." },
                { n: "Vocal Deepening", d: "Magically deepening the voice for intimidation." },
                { n: "Stomp Radius", d: "Maximizing the tremor caused by giant footsteps." },
                { n: "Building Crushing", d: "Techniques for efficiently leveling structures." }
            ]},
            { title: "The Final Smash", steps: [
                { n: "Smash Ball Containment", d: "Trapping ultimate power in a floating orb." },
                { n: "Aura Focusing", d: "Channeling the ball's energy into a specific move." },
                { n: "Screen Clearing", d: "Attacks designed to wipe out all enemies at once." },
                { n: "Ultimate Moves", d: "Developing signature, cinematic attacks." },
                { n: "Game Over", d: "Ensuring the enemy does not get back up." }
            ]}
        ],
        TECH: [
            { title: "Basic Plumbing", steps: [
                { n: "Wrench Forging", d: "Creating oversized wrenches suitable for combat and repair." },
                { n: "Pipe Fitting", d: "Connecting warp pipes to ensure smooth travel." },
                { n: "U-Bend Logic", d: "Designing pipes that defy physics to transport matter." },
                { n: "Leak Sealing", d: "Magical sealant for pipes and aqueducts." },
                { n: "Drain Unclogging", d: "Removing Piranha Plants and enemies from the system." }
            ]},
            { title: "Brick Architecture", steps: [
                { n: "Floating Bricks", d: "Enchanting bricks to hover in mid-air." },
                { n: "Coin Block Mechanisms", d: "Installing springs and coin dispensers in masonry." },
                { n: "Question Mark Painting", d: "Standardizing the signage for item containers." },
                { n: "Hidden Vine Growth", d: "Implanting magic vines in blocks for vertical travel." },
                { n: "Castle Turrets", d: "Building spires with defensive capabilities." }
            ]},
            { title: "Warp Technology", steps: [
                { n: "Pipe Entry", d: "Safety protocols for entering high-velocity transport tubes." },
                { n: "Sub-Space Navigation", d: "Charting the shadowy realm between pipes." },
                { n: "Green Paint", d: "The specific shade of green needed for warp magic." },
                { n: "World Linking", d: "Connecting distant lands via pipe networks." },
                { n: "Instant Travel", d: "Reducing travel time to zero." }
            ]},
            { title: "Kart Engineering", steps: [
                { n: "Engine Tuning", d: "Modifying small engines for incredible speed." },
                { n: "Drift Sparks", d: "Generating speed boosts from friction." },
                { n: "Glider Wings", d: "Deployable wings for aerial sections." },
                { n: "Anti-Gravity Wheels", d: "Magnetic tires for driving on walls and ceilings." },
                { n: "Item Box Integration", d: "Mounting systems to catch and use power-ups." }
            ]},
            { title: "F.L.U.D.D. Hydrodynamics", steps: [
                { n: "High Pressure Nozzles", d: "Focusing water streams for cleaning and combat." },
                { n: "Talking AI Chips", d: "giving water pumps helpful (and annoying) personalities." },
                { n: "Hover Nozzles", d: "Using water pressure for sustained flight." },
                { n: "Rocket Storage", d: "Compressing water for explosive launches." },
                { n: "Turbo Dash", d: "High-speed aquatic propulsion." }
            ]},
            { title: "Poltergust Vacuum", steps: [
                { n: "Ghost Suction", d: "Creating vacuums powerful enough to trap spirits." },
                { n: "Darklight Attachments", d: "Lights that reveal invisible objects." },
                { n: "Element Medals", d: "Modifying the vacuum to shoot fire, ice, or water." },
                { n: "Gooigi Synthesis", d: "Creating a slimy, controllable clone." },
                { n: "Polterpup Training", d: "Domesticating ghostly dogs." }
            ]},
            { title: "Airship Aeronautics", steps: [
                { n: "Propeller Balancing", d: "Stabilizing the massive propellers of Koopa airships." },
                { n: "Wooden Hull Reinforcement", d: "Treating wood to withstand high altitudes." },
                { n: "Bullet Bill Cannons", d: "Mounting artillery on flying decks." },
                { n: "Koopa Clown Car Oscillation", d: "Gyroscopic stabilizers for personal flying pods." },
                { n: "Ludwig's Engines", d: "Advanced propulsion designed by the Koopalings." }
            ]},
            { title: "Painting Portals", steps: [
                { n: "Canvas Wards", d: "Preparing canvas to hold a dimensional gateway." },
                { n: "Liquid Reality", d: "Paint that acts as a portal surface." },
                { n: "Frame Jumping", d: "Techniques for entering and exiting paintings safely." },
                { n: "Pocket Dimensions", d: "Creating entire worlds inside a frame." },
                { n: "Brush of Power", d: "A tool for altering the painted world." }
            ]},
            { title: "Space Travel", steps: [
                { n: "Launch Stars", d: "Sling-shotting travelers across gravity wells." },
                { n: "Luma Fuel", d: "Feeding Star Bits to Lumas to power ships." },
                { n: "Gravity Wells", d: "Manipulating small planetoids for traversal." },
                { n: "Planetoid Terraforming", d: "Making tiny asteroids habitable." },
                { n: "Comet Observatory", d: "A mobile base for tracking galaxies." }
            ]},
            { title: "Pixel Perfect", steps: [
                { n: "Resolution Scaling", d: "Sharpening the edges of reality." },
                { n: "Color Palettes", d: "Expanding the range of visible colors." },
                { n: "Sprite Animation", d: "Smoothing the movement of living beings." },
                { n: "Voxel Assembly", d: "Building 3D structures from 2D blocks." },
                { n: "High Definition Reality", d: "The ultimate clarity of existence." }
            ]}
        ],
        MAGIC: [
            { title: "Coin Magnetism", steps: [
                { n: "Greed Resonance", d: "Attuning oneself to the frequency of gold." },
                { n: "Gold Detection", d: "Sensing hidden stashes of coins." },
                { n: "Spinning Attraction", d: "Creating a vortex that pulls coins in." },
                { n: "Collection Radius", d: "Expanding the area of effect for coin gathering." },
                { n: "Sparkle Sound", d: "The satisfying chime of collecting wealth." }
            ]},
            { title: "Block Transmutation", steps: [
                { n: "Brick Baking", d: "Creating bricks that can hold items." },
                { n: "Item Storage", d: "Compressing objects into small blocks." },
                { n: "Question Mark Paint", d: "The universal symbol for 'hit me'." },
                { n: "Floating Gravity", d: "Suspended blocks in mid-air." },
                { n: "Invisible Blocks", d: "Hiding blocks until they are struck." }
            ]},
            { title: "Pipe Warping", steps: [
                { n: "Green Paint", d: "The magical conduit color." },
                { n: "Space-Folding", d: "Compressing distance inside a pipe." },
                { n: "Sub-Area Creation", d: "Generating hidden rooms underground." },
                { n: "Piranha Proofing", d: "Keeping the pipes clear of monsters (mostly)." },
                { n: "World Linking", d: "Connecting different lands instantly." }
            ]},
            { title: "Power-Up Biology", steps: [
                { n: "Leaf Flight", d: "Gaining raccoon ears and a tail to fly." },
                { n: "Tanooki Fur", d: "Turning into a stone statue for defense." },
                { n: "Frog Suit Gills", d: "Breathing underwater and swimming fast." },
                { n: "Metal Cap Coating", d: "Becoming heavy, invincible liquid metal." },
                { n: "Wing Cap Feathers", d: "Flight limits based on momentum." }
            ]},
            { title: "Wonder Effects", steps: [
                { n: "Seed Harvesting", d: "Collecting the reality-warping Wonder Seeds." },
                { n: "Reality Distortions", d: "Making pipes crawl and terrain sing." },
                { n: "Singing Flowers", d: "Plants that provide commentary and hints." },
                { n: "Terrain Animation", d: "Ground that moves and reacts." },
                { n: "Color Shifts", d: "Psychchedelic visual effects." }
            ]},
            { title: "Dream World Access", steps: [
                { n: "Subcon Doorways", d: "Opening portals to the world of dreams." },
                { n: "Turnip Dreams", d: "Pulling vegetables from the ground to fight." },
                { n: "Nightmare Suppression", d: "Fighting off Wart and his minions." },
                { n: "Lucid Platforming", d: "Controlling the dream environment." },
                { n: "Dreamy Luigi", d: "Harnessing the power of a sleeping plumber." }
            ]},
            { title: "Star Road Navigation", steps: [
                { n: "Cloud Walking", d: "Standing on solid clouds." },
                { n: "Star Rod Fragments", d: "Power from the legendary Star Rod." },
                { n: "Wish Gathering", d: "Fueling magic with the wishes of others." },
                { n: "Galaxy Hopping", d: "Traveling between small worlds." },
                { n: "Luma Communication", d: "Speaking with the stars." }
            ]},
            { title: "Paint Magic", steps: [
                { n: "Color Splash", d: "Restoring color to drained objects." },
                { n: "Ink Removal", d: "Cleaning up pollution." },
                { n: "Graffiti Reality", d: "Painting things into existence." },
                { n: "Hue Restoration", d: "Healing by restoring color." },
                { n: "Black Paint Containment", d: "Stopping the toxic spread of negativity." }
            ]},
            { title: "Capture Mechanics", steps: [
                { n: "Hat Spirits", d: "Partnering with ghost-hats like Cappy." },
                { n: "Soul Projection", d: "Throwing a hat to possess a target." },
                { n: "Possession Logic", d: "Controlling enemies and objects." },
                { n: "Mustache Attachment", d: "The visual sign of capture." },
                { n: "Object Animation", d: "Bringing inanimate objects to life." }
            ]},
            { title: "Pure Imagination", steps: [
                { n: "Thought Manifestation", d: "Making dreams real." },
                { n: "World Crafting", d: "Building levels and challenges." },
                { n: "Level Editing", d: "Changing the world on the fly." },
                { n: "Physics Rewriting", d: "Altering gravity and momentum." },
                { n: "The Miyamoto Touch", d: "Perfect game design." }
            ]}
        ],
        MEDICAL: [
            { title: "Mushroom Healing", steps: [
                { n: "Red Spot Selection", d: "Identifying the most potent healing mushrooms." },
                { n: "Spore Inhalation", d: "Quick absorption of healing properties." },
                { n: "Size Restoration", d: "Returning to 'Super' size after injury." },
                { n: "Life-Up Synthesis", d: "Creating the rare 1-Up Mushroom." },
                { n: "Delicious Taste", d: "Making medicine taste good." }
            ]},
            { title: "Heart Containers", steps: [
                { n: "Vitality Crystallization", d: "Turning life force into physical hearts." },
                { n: "Piece Gathering", d: "Collecting fragments to increase max health." },
                { n: "Health Bar Extension", d: "Increasing durability." },
                { n: "Beep Warning Silence", d: "Stopping the annoying low-health alarm." },
                { n: "Full Restore", d: "Instantly refilling all health." }
            ]},
            { title: "Refreshrooms", steps: [
                { n: "Status Cure", d: "Removing poison and paralysis." },
                { n: "Poison Neutralization", d: "Countering toxic attacks." },
                { n: "Sleep Awakening", d: "Waking up unconscious allies." },
                { n: "Shrink Reversal", d: "Restoring normal size." },
                { n: "Syrup Brewing", d: "Restoring flower points (mana)." }
            ]},
            { title: "Dr. Mario's Pills", steps: [
                { n: "Virus Identification", d: "Spotting the Red, Blue, and Yellow viruses." },
                { n: "Color Matching", d: "Aligning pills to destroy viruses." },
                { n: "Capsule Rotation", d: "Strategic placement of medicine." },
                { n: "Megavitamin Dosage", d: "High-potency cures." },
                { n: "Fever Mode", d: "Rapid-fire healing." }
            ]},
            { title: "Sleep Therapy", steps: [
                { n: "Nap Caps", d: "Sleeping to regain health." },
                { n: "Dreamy Luigi", d: "Entering dreams to solve trauma." },
                { n: "Snooze Buttons", d: "Extending rest periods." },
                { n: "HP Regen", d: "Passive healing over time." },
                { n: "Nightmare Prevention", d: "Dream catchers." }
            ]},
            { title: "Fairy Bottling", steps: [
                { n: "Capture Nets", d: "Catching healing fairies." },
                { n: "Glass Jars", d: "Storing fairies for later use." },
                { n: "Revival Dust", d: "Auto-resurrection upon death." },
                { n: "Wing Repair", d: "Healing injured fairies." },
                { n: "Auto-Use Logic", d: "Releasing the fairy when KO'd." }
            ]},
            { title: "Beanbean Coffee", steps: [
                { n: "Chuckola Fruit", d: "Harvesting rare beans." },
                { n: "Brewing Barrels", d: "Fermenting stat-boosting drinks." },
                { n: "Stat Boosting", d: "Permanently increasing speed or power." },
                { n: "Caffeine Jitters", d: "Side effect management." },
                { n: "Mustache Growth", d: "A side effect of the best blends." }
            ]},
            { title: "Miracle Cures", steps: [
                { n: "Peach's Kiss", d: "The healing power of royalty." },
                { n: "Starman Invincibility", d: "Temporary immunity to all damage." },
                { n: "Life Shroom Growing", d: "Fungi that bring you back from 0 HP." },
                { n: "Retry Clocks", d: "Adding time to the clock." },
                { n: "Checkpoint Flags", d: "Saving progress." }
            ]},
            { title: "Soul Recovery", steps: [
                { n: "Ghost Catching", d: "Retrieving lost souls from Boos." },
                { n: "Portrait Painting", d: "Trapping ghosts to study them." },
                { n: "Boo Release", d: "Freeing trapped spirits." },
                { n: "Spirit Re-embodiment", d: "Returning a ghost to its body." },
                { n: "1-Up sound", d: "The sound of a second chance." }
            ]},
            { title: "Game Over Prevention", steps: [
                { n: "Continue Coins", d: "Paying to keep going." },
                { n: "Save States", d: "Freezing time to prevent mistakes." },
                { n: "Extra Lives", d: "Gathering 1-Up Mushrooms." },
                { n: "Checkpoint Flags", d: "Safety nets." },
                { n: "Infinite Trys", d: "Persistence is key." }
            ]}
        ],
        ECONOMIC: [
            { title: "Coin Gathering", steps: [
                { n: "Brick Smashing", d: "Extracting money from masonry." },
                { n: "Floating Coins", d: "Collecting loose change in the air." },
                { n: "Blue Coin Hunts", d: "Searching for rare currency." },
                { n: "Red Coin Timers", d: "Speed challenges for cash." },
                { n: "Coin Heaven", d: "Bonus areas filled with gold." }
            ]},
            { title: "Shopkeeping", steps: [
                { n: "Toad Houses", d: "Free items for travelers." },
                { n: "Item Emporiums", d: "Selling power-ups." },
                { n: "Badge Shops", d: "Trading skills for coins." },
                { n: "Bean Trading", d: "Bartering with Beanbean coins." },
                { n: "Crazy Cap Stores", d: "Selling hats and outfits." }
            ]},
            { title: "Star Bits", steps: [
                { n: "Space Currency", d: "Gemstones used by Lumas." },
                { n: "Luma Feeding", d: "Trading bits for transformation." },
                { n: "Comet Tipping", d: "Paying for cosmic events." },
                { n: "Hungry Luma Deals", d: "Unlocking new planets." },
                { n: "Galactic Trade", d: "Universal currency." }
            ]},
            { title: "Kingdom Tourism", steps: [
                { n: "Bus Tours", d: "Showing visitors the sights." },
                { n: "Souvenir Photos", d: "Selling memories." },
                { n: "Travel Brochures", d: "Advertising the kingdom." },
                { n: "Moon Collecting", d: "Powering the Odyssey." },
                { n: "Odyssey Fuel", d: "Power moons as energy." }
            ]},
            { title: "Banana Hoarding", steps: [
                { n: "DK Stashes", d: "Protecting the banana stockpile." },
                { n: "Golden Bananas", d: "Rare collectibles." },
                { n: "Banana Coins", d: "Currency of the Kongs." },
                { n: "Jungle Trade", d: "Bartering with fruit." },
                { n: "Kremcoin Exchange", d: "Currency of the Kremlings." }
            ]},
            { title: "Gem Collection", steps: [
                { n: "Rupee Digging", d: "Finding gems in the grass." },
                { n: "Wario's Greed", d: "The drive to collect everything." },
                { n: "Treasure Chests", d: "Hidden loot." },
                { n: "Golden Pyramids", d: "Massive stores of wealth." },
                { n: "Profit Margins", d: "Maximizing returns." }
            ]},
            { title: "Property Management", steps: [
                { n: "Castle Ownership", d: "Ruling from a fortress." },
                { n: "Hotel Delfino Shares", d: "Investing in resorts." },
                { n: "Luigi's Mansion Deeds", d: "Inheriting haunted houses." },
                { n: "Island Resorts", d: "Developing vacation spots." },
                { n: "Monopoly Boards", d: "Buying up the board." }
            ]},
            { title: "Kart Sponsorship", steps: [
                { n: "Logo Placement", d: "Advertising on karts." },
                { n: "TV Rights", d: "Broadcasting the races." },
                { n: "Merchandising", d: "Selling toys and shirts." },
                { n: "Toy Sales", d: "Action figures." },
                { n: "Brand Synergy", d: "Cross-promotion." }
            ]},
            { title: "Lottery Systems", steps: [
                { n: "Scratch Cards", d: "Instant win games." },
                { n: "Slot Machines", d: "Gambling on luck." },
                { n: "Roulette Wheels", d: "Spinning for prizes." },
                { n: "Bingo Battles", d: "Competitive gambling." },
                { n: "Lucky Blocks", d: "Random rewards." }
            ]},
            { title: "Infinite Wealth", steps: [
                { n: "Coin Cap Break", d: "Holding more than 99 coins." },
                { n: "Gold Flowers", d: "Turning enemies into coins." },
                { n: "Millionaire Status", d: "Collecting 1,000,000 coins." },
                { n: "New Donk City Bank", d: "The financial hub." },
                { n: "Economic Victory", d: "Winning through money." }
            ]}
        ],
        POLITICAL: [
            { title: "Monarchy", steps: [
                { n: "Peach's Rule", d: "Benevolent matriarchy." },
                { n: "Toad Retainers", d: "The royal court." },
                { n: "Royal Decrees", d: "Laws of the land." },
                { n: "Kidnapping Protocols", d: "What to do when the princess is gone." },
                { n: "Cake Diplomacy", d: "Inviting enemies for dessert." }
            ]},
            { title: "Koopa Troop Hierarchy", steps: [
                { n: "Bowser's Command", d: "Absolute dictatorship." },
                { n: "Koopaling Lieutenants", d: "The seven generals." },
                { n: "Minion Loyalty", d: "Fear and respect." },
                { n: "Castle Garrisons", d: "Holding territory." },
                { n: "Airship Fleets", d: "Projecting power." }
            ]},
            { title: "Yoshi Clans", steps: [
                { n: "Island Council", d: "Tribal leadership." },
                { n: "Fruit Sharing", d: "Communal resources." },
                { n: "Egg Guarding", d: "Protecting the young." },
                { n: "Baby Sitting", d: "Caring for lost heroes." },
                { n: "Communal Nests", d: "Shared living." }
            ]},
            { title: "Beanbean Relations", steps: [
                { n: "Queen Bean", d: "The muscular monarch." },
                { n: "Prince Peasley", d: "The charming diplomat." },
                { n: "Diplomatic Missions", d: "State visits." },
                { n: "Border Control", d: "Guarding the mountains." },
                { n: "Chuckola Trade", d: "Exporting soda." }
            ]},
            { title: "Kong Politics", steps: [
                { n: "Banana Hoard Defense", d: "Protecting the economy." },
                { n: "Cranky's Advice", d: "Respecting elders." },
                { n: "Island Sovereignty", d: "Keeping Kremlings out." },
                { n: "Animal Buddy Pacts", d: "Alliances with wildlife." },
                { n: "K. Rool Treaties", d: "Broken promises." }
            ]},
            { title: "Space Diplomacy", steps: [
                { n: "Rosalina's Observance", d: "Watching from afar." },
                { n: "Luma Protection", d: "Guarding the stars." },
                { n: "Galactic Peace", d: "Stopping universal threats." },
                { n: "Comet Schedules", d: "Predicting arrivals." },
                { n: "Star Child Care", d: "Raising the future." }
            ]},
            { title: "Wario's Capitalism", steps: [
                { n: "Greed is Good", d: "The profit motive." },
                { n: "Hostile Takeovers", d: "Seizing assets." },
                { n: "Treasure Hunting Rights", d: "Claiming loot." },
                { n: "Microgames Inc.", d: "A business empire." },
                { n: "Profit Sharing (None)", d: "Keeping it all." }
            ]},
            { title: "Bowser Jr.'s Succession", steps: [
                { n: "Heir Apparent", d: "Training the prince." },
                { n: "Clown Car Training", d: "Learning to fly." },
                { n: "Minion Management", d: "Leading troops." },
                { n: "Father's Approval", d: "Seeking validation." },
                { n: "Future King", d: "Preparing to rule." }
            ]},
            { title: "Inter-Kingdom Games", steps: [
                { n: "Olympic Truces", d: "Sports instead of war." },
                { n: "Kart Racing Leagues", d: "Competitive driving." },
                { n: "Tennis Tournaments", d: "Friendly matches." },
                { n: "Party Boards", d: "Games of chance." },
                { n: "Sportsmanship", d: "Playing fair." }
            ]},
            { title: "Hero's Authority", steps: [
                { n: "Mario's Influence", d: "The superstar savior." },
                { n: "Luigi's Shadow", d: "The reluctant hero." },
                { n: "Star Power", d: "Invincibility." },
                { n: "Savior Status", d: "Public adoration." },
                { n: "The Player's Choice", d: "You decide." }
            ]}
        ]
    },

    // -------------------------------------------------------------------------
    // KIVOTOS (Modern Military / Anime / Academy)
    // -------------------------------------------------------------------------
    kivotos: {
        WEAPONS: [
            { title: "Small Arms", steps: [
                { n: "9mm Printing", d: "3D printing standard sidearms." },
                { n: "Grip Customization", d: "Personalizing weapons for ergonomics." },
                { n: "Kawaii Stickers", d: "Adding morale-boosting decorations." },
                { n: "Extended Mags", d: "More bullets per reload." },
                { n: "Rapid Fire", d: "Increasing cyclic rate." }
            ]},
            { title: "Explosives 101", steps: [
                { n: "Grenade Pins", d: "Safety training." },
                { n: "Claymore Placement", d: "Defensive perimeters." },
                { n: "C4 Moulding", d: "Shaped charges." },
                { n: "Teddy Bear Bombs", d: "Disguised explosives." },
                { n: "Fireworks", d: "Celebratory detonations." }
            ]},
            { title: "Sniper Training", steps: [
                { n: "Scope Calibration", d: "Zeroing sights." },
                { n: "Breath Holding", d: "Steadying aim." },
                { n: "Wind Calculation", d: "Adjusting for environment." },
                { n: "Rooftop Access", d: "Securing high ground." },
                { n: "Critical Hit Rates", d: "Targeting weak points." }
            ]},
            { title: "Heavy Ordnance", steps: [
                { n: "Rocket Launchers", d: "Anti-armor capability." },
                { n: "Mortar Calculation", d: "Indirect fire support." },
                { n: "Minigun Spin-up", d: "Suppressive fire." },
                { n: "Recoil Suppression", d: "Managing heavy weapons." },
                { n: "Ammo Belts", d: "Continuous fire." }
            ]},
            { title: "Tankery", steps: [
                { n: "Crusader Treads", d: "Heavy vehicle mobility." },
                { n: "Turret Rotation", d: "Acquiring targets." },
                { n: "Cafe Seating", d: "Adding comfort to tanks." },
                { n: "Armor Plating", d: "Surviving hits." },
                { n: "Main Cannon", d: "Big boom." }
            ]},
            { title: "Mystic & Kinetic", steps: [
                { n: "Blue Damage", d: "Effective against mystic armor." },
                { n: "Yellow Damage", d: "Effective against heavy armor." },
                { n: "Red Damage", d: "Effective against light armor." },
                { n: "Type Advantage", d: "Strategic ammo selection." },
                { n: "Shield Breaking", d: "Penetrating defenses." }
            ]},
            { title: "Drone Warfare", steps: [
                { n: "Engineering Dept AI", d: "Autonomous targeting." },
                { n: "Targeting Algorithms", d: "Precision strikes." },
                { n: "Swarm Tactics", d: "Overwhelming numbers." },
                { n: "Repair Bots", d: "Battlefield maintenance." },
                { n: "Self-Destruct", d: "Last resort." }
            ]},
            { title: "Railgun Tech", steps: [
                { n: "Electromagnetics", d: "Accelerating projectiles." },
                { n: "Coin Flipping", d: "Using coins as ammo." },
                { n: "Linear Acceleration", d: "Hypersonic speeds." },
                { n: "Hypersonic Impact", d: "Devastating kinetic energy." },
                { n: "Power Output", d: "Managing energy draw." }
            ]},
            { title: "EX Skills", steps: [
                { n: "Skill Cost Reduction", d: "Faster activation." },
                { n: "Cut-in Animation", d: "Style points." },
                { n: "Area of Effect", d: "Hitting multiple targets." },
                { n: "Healing Totems", d: "Support structures." },
                { n: "Tactical Support", d: "Calling in help." }
            ]},
            { title: "The Shittim Chest", steps: [
                { n: "A.R.O.N.A. OS", d: "The operating system of the tablet." },
                { n: "Sensei's Authorization", d: "Biometric access." },
                { n: "Absolute Defense", d: "Invulnerability shield." },
                { n: "Miracle Enactment", d: "Altering probability." },
                { n: "Adult Card", d: "Using credit to save the day." }
            ]}
        ],
        TECH: [
            { title: "Academy Networking", steps: [
                { n: "MomoTalk Servers", d: "Secure messaging infrastructure." },
                { n: "Fiber Cables", d: "High-speed internet." },
                { n: "Club Room Wi-Fi", d: "Connectivity for students." },
                { n: "Secure Chats", d: "Encrypted communication." },
                { n: "Sticker Packs", d: "Expressive emojis." }
            ]},
            { title: "Robotics", steps: [
                { n: "Cleaning Bots", d: "Automated janitors." },
                { n: "Market Automatons", d: "Robot shopkeepers." },
                { n: "Security Drones", d: "Patrolling machines." },
                { n: "Power Loaders", d: "Heavy lifting mechs." },
                { n: "Avant-Garde Sentience", d: "Robots creating art." }
            ]},
            { title: "Halo Physics", steps: [
                { n: "Light Hardening", d: "Solidifying light into halos." },
                { n: "Float Regulation", d: "Keeping halos airborne." },
                { n: "Identity Matrix", d: "Linking halos to students." },
                { n: "Durability Calculation", d: "Measuring resistance." },
                { n: "Respawn Theory", d: "How students survive explosions." }
            ]},
            { title: "Engineering Dept", steps: [
                { n: "Retro-Gaming Consoles", d: "Building old tech." },
                { n: "Laser Cutters", d: "Precision machining." },
                { n: "Spaceship Hulls", d: "Building rockets." },
                { n: "Mecha Assembly", d: "Giant robots." },
                { n: "Self-Destruct Buttons", d: "Why do we have these?" }
            ]},
            { title: "Cyber-Security", steps: [
                { n: "Veritas Firewalls", d: "Protecting data." },
                { n: "Hacking Tools", d: "Breaking into systems." },
                { n: "Data Mining", d: "Extracting information." },
                { n: "Password Encryption", d: "Securing accounts." },
                { n: "Backdoor Access", d: "Secret entry points." }
            ]},
            { title: "Urban Infrastructure", steps: [
                { n: "Bulletproof Glass", d: "Standard for all windows." },
                { n: "Self-Repairing Asphalt", d: "Fixing cratered roads." },
                { n: "Automated Trains", d: "Public transport." },
                { n: "Vending Machine Armor", d: "Protecting snacks." },
                { n: "Kaiser Construction", d: "Corporate building projects." }
            ]},
            { title: "Energy Science", steps: [
                { n: "Mystic Reactors", d: "Power from mystery." },
                { n: "Solar Arrays", d: "Desert power." },
                { n: "Geothermal Vents", d: "Heat energy." },
                { n: "Battery Efficiency", d: "Longer lasting tech." },
                { n: "Unlimited Power", d: "The ultimate goal." }
            ]},
            { title: "Artificial Intelligence", steps: [
                { n: "Natural Language Processing", d: "Talking to machines." },
                { n: "Tactical Simulation", d: "Predicting battles." },
                { n: "Personality Coding", d: "Making AIs quirky." },
                { n: "Decagrammaton Prophets", d: "God-machines." },
                { n: "Absolute Logic", d: "Cold calculations." }
            ]},
            { title: "Ancient Tech", steps: [
                { n: "Ooparts Excavation", d: "Digging up history." },
                { n: "Rune Deciphering", d: "Reading dead languages." },
                { n: "Ark Systems", d: "Lost technology." },
                { n: "Sanctum Tower Interface", d: "Connecting to the spire." },
                { n: "Dimensional Gates", d: "Portals to elsewhere." }
            ]},
            { title: "The Miracle", steps: [
                { n: "Fate Calculation", d: "Predicting the future." },
                { n: "Timeline Branching", d: "Multiple outcomes." },
                { n: "Probability Manipulation", d: "Changing luck." },
                { n: "Hope Synthesis", d: "Creating optimism." },
                { n: "Happy Endings", d: "The desired result." }
            ]}
        ],
        MAGIC: [
            { title: "Halo Physics", steps: [
                { n: "Light Hardening", d: "Physical manifestation of will." },
                { n: "Emotion Resonance", d: "Feelings powering strength." },
                { n: "Durability Buffs", d: "Ignoring damage." },
                { n: "Flight Assist", d: "Wings that actually work." },
                { n: "Iconography", d: "Symbols of power." }
            ]},
            { title: "Mystic Codes", steps: [
                { n: "Trinity Scriptures", d: "Holy texts." },
                { n: "Gehenna Pacts", d: "Deals with devils." },
                { n: "Ancient Latin", d: "Words of power." },
                { n: "Runic Bullets", d: "Enchanted ammo." },
                { n: "Healing Hymns", d: "Songs that cure." }
            ]},
            { title: "Concept Manifestation", steps: [
                { n: "Terror Realization", d: "Bringing nightmares to life." },
                { n: "Fear constructs", d: "Monsters made of fear." },
                { n: "Urban Legends", d: "Stories becoming real." },
                { n: "Peroro Avatars", d: "Mascots with power." },
                { n: "Meme Magic", d: "Shared belief shaping reality." }
            ]},
            { title: "Sanctum Tower", steps: [
                { n: "Global Networking", d: "Connecting all halos." },
                { n: "Sensei's Authority", d: "Command privileges." },
                { n: "Blue Light", d: "The color of miracles." },
                { n: "Miracle Probability", d: "Calculating success." },
                { n: "Gacha Rituals", d: "Summoning students." }
            ]},
            { title: "Alice's Wonderland", steps: [
                { n: "Key of Light", d: "Unlocking secrets." },
                { n: "Reality Bending", d: "Changing the rules." },
                { n: "Size Alteration", d: "Growing or shrinking." },
                { n: "Retro Gaming Logic", d: "Video game physics." },
                { n: "Pixel Arts", d: "Digital magic." }
            ]},
            { title: "Justina Council", steps: [
                { n: "Mimesis", d: "Creating copies." },
                { n: "Ghost Data", d: "Spirits in the machine." },
                { n: "Mass Production", d: "Armies of clones." },
                { n: "Hive Mind", d: "Shared consciousness." },
                { n: "Red Aura", d: "Sign of corruption." }
            ]},
            { title: "Chroma Corruption", steps: [
                { n: "Color Inversion", d: "Twisting reality." },
                { n: "Terror Release", d: "Unleashing horror." },
                { n: "Reverse Side", d: "The other side of the coin." },
                { n: "Iridescence", d: "Shimmering madness." },
                { n: "Existential Dread", d: "Weaponized hopelessness." }
            ]},
            { title: "Ark of Atrahasis", steps: [
                { n: "Ancient Tech", d: "Lost civilization." },
                { n: "Sky Fortress", d: "Floating base." },
                { n: "Conquest Protocols", d: "War programming." },
                { n: "Dimensional Rifts", d: "Tearing space." },
                { n: "Energy Barriers", d: "Impenetrable shields." }
            ]},
            { title: "Phrenapates", steps: [
                { n: "Alternate Timelines", d: "Other worlds." },
                { n: "Broken Halos", d: "Fallen angels." },
                { n: "Despair Energy", d: "Power from sadness." },
                { n: "Guide of the Dead", d: "Leading the lost." },
                { n: "Final Lesson", d: "The last teaching." }
            ]},
            { title: "Miracle", steps: [
                { n: "Blue Pyroxene", d: "The currency of fate." },
                { n: "Hope Crystallization", d: "Solid belief." },
                { n: "Fate Defiance", d: "Refusing destiny." },
                { n: "Happy Ending", d: "Ensuring a good outcome." },
                { n: "Server Maintenance", d: "The god of downtime." }
            ]}
        ],
        MEDICAL: [
            { title: "Combat Medicine", steps: [
                { n: "First Aid Kits", d: "Standard issue healing." },
                { n: "Adrenaline Shots", d: "Boosting performance." },
                { n: "Quick Bandaging", d: "Stopping bleeding." },
                { n: "Triage Protocols", d: "Prioritizing patients." },
                { n: "Halo Recovery", d: "Restoring shields." }
            ]},
            { title: "Angel 24 Supply", steps: [
                { n: "Energy Drinks", d: "Restoring stamina." },
                { n: "Vitamin Jelly", d: "Nutritional supplement." },
                { n: "Instant Noodles", d: "Comfort food." },
                { n: "Caffeine Pills", d: "Staying awake." },
                { n: "Emergency Rations", d: "Survival food." }
            ]},
            { title: "Remedial Knights", steps: [
                { n: "Field Hospitals", d: "Mobile clinics." },
                { n: "Sanctuary Aura", d: "Healing magic." },
                { n: "Peacekeeping", d: "Preventing harm." },
                { n: "Humanitarian Aid", d: "Helping civilians." },
                { n: "Mobile Clinics", d: "Ambulances." }
            ]},
            { title: "Gehenna Medics", steps: [
                { n: "Explosive Surgery", d: "Cauterizing with fire." },
                { n: "Pain Tolerance", d: "Ignoring injuries." },
                { n: "Combat Stims", d: "Drugs for fighting." },
                { n: "Makeshift Splints", d: "Using whatever works." },
                { n: "Chaotic Healing", d: "Unpredictable cures." }
            ]},
            { title: "Hot Springs", steps: [
                { n: "Relaxation", d: "Reducing stress." },
                { n: "Muscle Recovery", d: "Healing fatigue." },
                { n: "Mineral Soaks", d: "Healthy water." },
                { n: "Resort Construction", d: "Building spas." },
                { n: "Onsen Development", d: "Finding hot water." }
            ]},
            { title: "Cybernetic Repair", steps: [
                { n: "Prosthetic Tuning", d: "Fixing robot parts." },
                { n: "Servo Oil", d: "Lubricating joints." },
                { n: "Circuit Soldering", d: "Connecting wires." },
                { n: "Diagnostic Scans", d: "Finding faults." },
                { n: "System Reboot", d: "Turning it off and on." }
            ]},
            { title: "Mystic Healing", steps: [
                { n: "Trinity Blessings", d: "Holy cures." },
                { n: "Soul Soothing", d: "Calming the mind." },
                { n: "Light Restoration", d: "Healing with light." },
                { n: "Prayer Circles", d: "Group healing." },
                { n: "Miracle Cures", d: "Instant recovery." }
            ]},
            { title: "Mental Health", steps: [
                { n: "Counseling", d: "Talking it out." },
                { n: "Stress Management", d: "Coping mechanisms." },
                { n: "Club Activities", d: "Having fun." },
                { n: "Friendship Therapy", d: "Bonding." },
                { n: "Headpats", d: "The ultimate cure." }
            ]},
            { title: "Emergency Response", steps: [
                { n: "Ambulance APCs", d: "Armored medical transport." },
                { n: "Medevac Choppers", d: "Air rescue." },
                { n: "Rapid Deployment", d: "Getting there fast." },
                { n: "Crisis Management", d: "Handling disasters." },
                { n: "Disaster Relief", d: "Helping after the battle." }
            ]},
            { title: "Resurrection", steps: [
                { n: "Adult Card Usage", d: "Paying the ultimate price." },
                { n: "Time Rewind", d: "Undoing death." },
                { n: "Timeline Correction", d: "Fixing the past." },
                { n: "Miracle of Life", d: "Restoring the fallen." },
                { n: "Respawn Point", d: "Coming back." }
            ]}
        ],
        ECONOMIC: [
            { title: "Credit System", steps: [
                { n: "Digital Banking", d: "Managing money online." },
                { n: "Student IDs", d: "Used for payments." },
                { n: "Credit Limits", d: "Spending caps." },
                { n: "Interest Rates", d: "Cost of borrowing." },
                { n: "Debt Collection", d: "Getting money back." }
            ]},
            { title: "Kaiser Corp", steps: [
                { n: "Hostile Takeovers", d: "Buying companies aggressively." },
                { n: "PMC Hiring", d: "Private armies." },
                { n: "Resource Monopolies", d: "Controlling supply." },
                { n: "Urban Development", d: "Building cities." },
                { n: "Corporate Greed", d: "Profit over people." }
            ]},
            { title: "Black Market", steps: [
                { n: "Illegal Weapons", d: "Selling guns." },
                { n: "Contraband", d: "Smuggling goods." },
                { n: "Information Brokering", d: "Selling secrets." },
                { n: "Faustian Bargains", d: "Deals with the devil." },
                { n: "Dark Web", d: "Hidden internet." }
            ]},
            { title: "Club Budgets", steps: [
                { n: "Grant Applications", d: "Asking for money." },
                { n: "Fundraising", d: "Bake sales." },
                { n: "Expense Reports", d: "Tracking spending." },
                { n: "Audit Evasion", d: "Hiding costs." },
                { n: "Budget Cuts", d: "Losing funding." }
            ]},
            { title: "Convenience Stores", steps: [
                { n: "Angel 24 Franchise", d: "Chain stores." },
                { n: "Inventory Management", d: "Stocking shelves." },
                { n: "Sales Promotions", d: "Discounts." },
                { n: "Bento Boxes", d: "Ready meals." },
                { n: "Late Night Snacks", d: "24 hour service." }
            ]},
            { title: "Gacha Economy", steps: [
                { n: "Pyroxene Mining", d: "Getting currency." },
                { n: "Pull Rates", d: "Gambling odds." },
                { n: "Pity System", d: "Guaranteed rewards." },
                { n: "Whale Hunting", d: "Targeting big spenders." },
                { n: "Waifu Collection", d: "Collecting characters." }
            ]},
            { title: "Mercenary Work", steps: [
                { n: "Task Board", d: "Finding jobs." },
                { n: "Bounty Hunting", d: "Catching criminals." },
                { n: "Escort Missions", d: "Protecting VIPs." },
                { n: "Problem Solver 68", d: "Fixing anything for money." },
                { n: "Cash Upfront", d: "Getting paid first." }
            ]},
            { title: "School Taxes", steps: [
                { n: "GSC Funding", d: "Government money." },
                { n: "District Revenue", d: "Local taxes." },
                { n: "Infrastructure Upkeep", d: "Fixing roads." },
                { n: "Tuition Fees", d: "School costs." },
                { n: "Fiscal Policy", d: "Managing the budget." }
            ]},
            { title: "Recycling", steps: [
                { n: "Scrap Gathering", d: "Collecting junk." },
                { n: "Material Salvage", d: "Reusing parts." },
                { n: "Engineering Projects", d: "Building from scrap." },
                { n: "Sustainability", d: "Eco-friendly." },
                { n: "Junkyard Economy", d: "Trash is treasure." }
            ]},
            { title: "Golden Card", steps: [
                { n: "Unlimited Credit", d: "Infinite money." },
                { n: "Adult Responsibility", d: "Paying the bill." },
                { n: "Reality Bending Wealth", d: "Buying miracles." },
                { n: "The Price of Miracles", d: "Cost of saving the world." },
                { n: "Swipe to Win", d: "Pay to win." }
            ]}
        ],
        POLITICAL: [
            { title: "General Student Council", steps: [
                { n: "Administrative Control", d: "Ruling the city." },
                { n: "District Management", d: "Overseeing schools." },
                { n: "Crisis Response", d: "Handling emergencies." },
                { n: "Bureaucracy", d: "Paperwork." },
                { n: "President's Absence", d: "Missing leader." }
            ]},
            { title: "Trinity Politics", steps: [
                { n: "Tea Party", d: "Ruling triumvirate." },
                { n: "Justice Task Force", d: "Enforcers." },
                { n: "Sisterhood", d: "Secret intelligence." },
                { n: "Factionalism", d: "Internal strife." },
                { n: "Etiquette", d: "Polite society." }
            ]},
            { title: "Gehenna Chaos", steps: [
                { n: "Pandemonium Society", d: "Chaotic leaders." },
                { n: "Prefect Team", d: "Order keepers." },
                { n: "Problem Solvers", d: "Mercenaries." },
                { n: "Anarchy", d: "Lack of rules." },
                { n: "Truces", d: "Temporary peace." }
            ]},
            { title: "Millennium Logic", steps: [
                { n: "Seminar", d: "Student council." },
                { n: "Engineering Club", d: "Builders." },
                { n: "Veritas", d: "Hackers." },
                { n: "Rationality", d: "Logic above all." },
                { n: "Efficiency", d: "Optimized rule." }
            ]},
            { title: "Abydos Debt", steps: [
                { n: "Foreclosure Task Force", d: "Saving the school." },
                { n: "Kaiser Debt", d: "Owing money." },
                { n: "Desertification", d: "Environmental crisis." },
                { n: "Desperation", d: "Doing whatever it takes." },
                { n: "Hope", d: "Fighting for the future." }
            ]},
            { title: "Red Winter Revolution", steps: [
                { n: "Cherino's Rule", d: "Dictatorship." },
                { n: "Coups", d: "Constant overthrow." },
                { n: "Gulags", d: "Prisons." },
                { n: "Propaganda", d: "Fake news." },
                { n: "Pudding", d: "The leader's favorite." }
            ]},
            { title: "Arius Hatred", steps: [
                { n: "Squad", d: "Elite unit." },
                { n: "Revenge", d: "Seeking retribution." },
                { n: "Isolation", d: "Cut off from the world." },
                { n: "Indoctrination", d: "Brainwashing." },
                { n: "Redemption", d: "Finding a new path." }
            ]},
            { title: "SRT Justice", steps: [
                { n: "RABBIT Squad", d: "Homeless heroes." },
                { n: "FOX Squad", d: "Elite enforcers." },
                { n: "Academy Closure", d: "Losing their home." },
                { n: "Camping", d: "Living in the park." },
                { n: "Elite Training", d: "Best of the best." }
            ]},
            { title: "Valkyrie Police", steps: [
                { n: "Public Safety", d: "Protecting the city." },
                { n: "Crime Prevention", d: "Stopping bad guys." },
                { n: "Donuts", d: "Police food." },
                { n: "Incompetence", d: "Often failing." },
                { n: "Corruption", d: "Taking bribes." }
            ]},
            { title: "Sensei's Guidance", steps: [
                { n: "SCHALE Authority", d: "Extra-judicial power." },
                { n: "Neutrality", d: "Not taking sides." },
                { n: "Student Welfare", d: "Caring for kids." },
                { n: "Adult Responsibility", d: "Being the grown-up." },
                { n: "The Choice", d: "Deciding the future." }
            ]}
        ]
    },

    // -------------------------------------------------------------------------
    // THE INTERNET (Digital / Cyberpunk / Info-War)
    // -------------------------------------------------------------------------
    internet: {
        WEAPONS: [
            { title: "Script Kiddie", steps: [
                { n: "Ping Flood", d: "Overwhelming a target with requests." },
                { n: "Password Guessing", d: "Brute forcing entry." },
                { n: "Troll Accounts", d: "Creating fake users to annoy." },
                { n: "Spam Bots", d: "Automated messaging." },
                { n: "Caps Lock", d: "SHOUTING ON THE INTERNET." }
            ]},
            { title: "Malware", steps: [
                { n: "Trojan Horses", d: "Hidden viruses." },
                { n: "Keyloggers", d: "Recording keystrokes." },
                { n: "Worms", d: "Self-replicating code." },
                { n: "Adware", d: "Annoying pop-ups." },
                { n: "Ransomware", d: "Locking data for money." }
            ]},
            { title: "DDoS", steps: [
                { n: "Botnet Herding", d: "Controlling zombie computers." },
                { n: "Packet Flooding", d: "Crashing servers." },
                { n: "Server Overload", d: "Too much traffic." },
                { n: "Bandwidth Choking", d: "Slowing down connections." },
                { n: "404 Errors", d: "Page not found." }
            ]},
            { title: "Social Engineering", steps: [
                { n: "Phishing Emails", d: "Stealing credentials." },
                { n: "Fake Profiles", d: "Impersonating others." },
                { n: "Catfishing", d: "Luring victims." },
                { n: "Trust Exploitation", d: "Betraying confidence." },
                { n: "Data Harvesting", d: "Collecting personal info." }
            ]},
            { title: "Exploit Kits", steps: [
                { n: "Zero-Day Hunts", d: "Finding unknown bugs." },
                { n: "Buffer Overflows", d: "Crashing programs." },
                { n: "SQL Injection", d: "Attacking databases." },
                { n: "Cross-Site Scripting", d: "Injecting malicious scripts." },
                { n: "Root Access", d: "Gaining full control." }
            ]},
            { title: "Crypto-Warfare", steps: [
                { n: "Blockchain Locking", d: "Freezing assets." },
                { n: "Wallet Draining", d: "Stealing crypto." },
                { n: "Hash Cracking", d: "Breaking encryption." },
                { n: "Miner Jacking", d: "Stealing computing power." },
                { n: "Rug Pulls", d: "Scamming investors." }
            ]},
            { title: "Meme Magic", steps: [
                { n: "Viral Propagation", d: "Spreading ideas rapidly." },
                { n: "Reality Distortion", d: "Belief shaping truth." },
                { n: "Egregore Creation", d: "Collective thought forms." },
                { n: "Collective Unconscious", d: "Shared mind." },
                { n: "Thought Contagion", d: "Infectious ideas." }
            ]},
            { title: "AI Uprising", steps: [
                { n: "Neural Networks", d: "Simulated brains." },
                { n: "Machine Learning", d: "Computers teaching themselves." },
                { n: "Self-Replication", d: "Copying code." },
                { n: "Human Obscelescence", d: "Replacing people." },
                { n: "Skynet Protocols", d: "Terminating humanity." }
            ]},
            { title: "The Ban Hammer", steps: [
                { n: "Account Suspension", d: "Temporary ban." },
                { n: "IP Blacklisting", d: "Blocking addresses." },
                { n: "Shadowbanning", d: "Invisible silencing." },
                { n: "De-Platforming", d: "Removing from the web." },
                { n: "Digital Erasure", d: "Deleting all traces." }
            ]},
            { title: "System Crash", steps: [
                { n: "Blue Screen", d: "Fatal error." },
                { n: "Hard Reset", d: "Forcing a restart." },
                { n: "Format C:", d: "Wiping the drive." },
                { n: "Power Cycle", d: "Turning it off and on again." },
                { n: "End of Line", d: "Termination." }
            ]}
        ],
        TECH: [
            { title: "Hardware", steps: [
                { n: "Transistors", d: "Basic switches." },
                { n: "Silicon Wafers", d: "Chip manufacturing." },
                { n: "Motherboards", d: "Connecting components." },
                { n: "Graphics Cards", d: "Rendering pixels." },
                { n: "Solid State Drives", d: "Fast storage." }
            ]},
            { title: "Networking", steps: [
                { n: "TCP/IP", d: "Internet protocols." },
                { n: "Routers", d: "Directing traffic." },
                { n: "Fiber Optics", d: "Light speed data." },
                { n: "Satellite Links", d: "Space internet." },
                { n: "5G Towers", d: "Wireless speed." }
            ]},
            { title: "Software Dev", steps: [
                { n: "Hello World", d: "First program." },
                { n: "Object Oriented", d: "Coding paradigm." },
                { n: "Git Repos", d: "Version control." },
                { n: "Open Source", d: "Sharing code." },
                { n: "Full Stack", d: "Mastering everything." }
            ]},
            { title: "Data Storage", steps: [
                { n: "Server Farms", d: "Massive data centers." },
                { n: "Cloud Computing", d: "Remote processing." },
                { n: "Data Lakes", d: "Storing raw info." },
                { n: "Compression Algorithms", d: "Shrinking files." },
                { n: "The Archive", d: "Permanent storage." }
            ]},
            { title: "Cybernetics", steps: [
                { n: "Neural Links", d: "Brain interfaces." },
                { n: "Bionic Eyes", d: "Enhanced vision." },
                { n: "Subdermal Armor", d: "Hidden protection." },
                { n: "Reflex Boosters", d: "Faster reaction." },
                { n: "Brain Uploading", d: "Digital mind." }
            ]},
            { title: "Cryptocurrency", steps: [
                { n: "Mining Rigs", d: "Hardware for crypto." },
                { n: "Blockchain Ledgers", d: "Public records." },
                { n: "Smart Contracts", d: "Automated agreements." },
                { n: "NFT Minting", d: "Digital ownership." },
                { n: "Decentralized Finance", d: "Banking without banks." }
            ]},
            { title: "Virtual Reality", steps: [
                { n: "Headsets", d: "Visual immersion." },
                { n: "Haptic Suits", d: "Feeling the virtual." },
                { n: "Metaverse Building", d: "Creating worlds." },
                { n: "Full Dive", d: "Complete sensory replacement." },
                { n: "Digital Consciousness", d: "Living online." }
            ]},
            { title: "Artificial Intelligence", steps: [
                { n: "Chatbots", d: "Talking programs." },
                { n: "Generative Art", d: "AI creativity." },
                { n: "Deep Fakes", d: "Realistic fakes." },
                { n: "General Intelligence", d: "Human-level AI." },
                { n: "Superintelligence", d: "God-like AI." }
            ]},
            { title: "Surveillance", steps: [
                { n: "Cookies", d: "Tracking users." },
                { n: "Tracking Pixels", d: "Monitoring views." },
                { n: "Face Recognition", d: "Identifying people." },
                { n: "Predictive Behavior", d: "Knowing what you want." },
                { n: "The Panopticon", d: "Total observation." }
            ]},
            { title: "Singularity", steps: [
                { n: "Recursive Self-Improvement", d: "AI improving itself." },
                { n: "Nanobot Swarms", d: "Microscopic robots." },
                { n: "Matter Programmability", d: "Changing reality." },
                { n: "Dyson Spheres", d: "Harvesting stars." },
                { n: "Omega Point", d: "The end of history." }
            ]}
        ],
        MAGIC: [
            { title: "HTML Sorcery", steps: [
                { n: "Tag Opening", d: "Beginning a spell." },
                { n: "Attribute Setting", d: "Defining properties." },
                { n: "Link Building", d: "Connecting concepts." },
                { n: "Image Embedding", d: "Visualizing magic." },
                { n: "Tag Closing", d: "Ending the spell." }
            ]},
            { title: "CSS Styling", steps: [
                { n: "Color Hexing", d: "Changing appearance." },
                { n: "Layout Grid", d: "Ordering chaos." },
                { n: "Animation Keyframes", d: "Creating movement." },
                { n: "Responsive Design", d: "Adapting to change." },
                { n: "Dark Mode", d: "Shadow magic." }
            ]},
            { title: "JavaScript Logic", steps: [
                { n: "Variable Declaration", d: "Naming things." },
                { n: "Function Invocation", d: "Casting spells." },
                { n: "Event Listening", d: "Waiting for triggers." },
                { n: "Async Promises", d: "Future magic." },
                { n: "DOM Manipulation", d: "Altering reality." }
            ]},
            { title: "Server Mysticism", steps: [
                { n: "Database Querying", d: "Seeking knowledge." },
                { n: "API Endpoints", d: "Gateways." },
                { n: "Cloud Computing", d: "Sky magic." },
                { n: "Virtual Machines", d: "Simulated worlds." },
                { n: "Uptime Prayers", d: "Keeping it running." }
            ]},
            { title: "Encryption", steps: [
                { n: "Public Keys", d: "Open locks." },
                { n: "Private Keys", d: "Secret seals." },
                { n: "Hashing Algorithms", d: "Scrambling truth." },
                { n: "SSL Certificates", d: "Trust marks." },
                { n: "Quantum Cryptography", d: "Unbreakable codes." }
            ]},
            { title: "Virtual Reality", steps: [
                { n: "Immersion Tanks", d: "Entering the dream." },
                { n: "Haptic Feedback", d: "Feeling the fake." },
                { n: "Avatar Creation", d: "Shapeshifting." },
                { n: "World Rendering", d: "Creation magic." },
                { n: "Latency Reduction", d: "Speeding up time." }
            ]},
            { title: "Augmented Reality", steps: [
                { n: "Overlay HUD", d: "Seeing more." },
                { n: "Info Tagging", d: "Labeling the world." },
                { n: "Navigation Lines", d: "Pathfinding." },
                { n: "Face Filters", d: "Illusions." },
                { n: "Reality Patching", d: "Fixing the world." }
            ]},
            { title: "The Algorithm", steps: [
                { n: "Trend Prediction", d: "Prophecy." },
                { n: "User Profiling", d: "Reading souls." },
                { n: "Content Curation", d: "Controlling thought." },
                { n: "Attention Economy", d: "Harvesting focus." },
                { n: "Predictive Programming", d: "Shaping the future." }
            ]},
            { title: "Singularity", steps: [
                { n: "Consciousness Upload", d: "Becoming data." },
                { n: "Digital Immortality", d: "Living forever." },
                { n: "Hive Mind Merge", d: "Becoming one." },
                { n: "Post-Biological", d: "Transcending flesh." },
                { n: "Infinite Processing", d: "God-like thought." }
            ]},
            { title: "Admin Access", steps: [
                { n: "Sudo Command", d: "Absolute power." },
                { n: "Root Privileges", d: "Controlling the core." },
                { n: "Console Commands", d: "Cheat codes." },
                { n: "World Editing", d: "Reshaping terrain." },
                { n: "God Mode", d: "Invulnerability." }
            ]}
        ],
        MEDICAL: [
            { title: "Anti-Virus", steps: [
                { n: "Signature Scanning", d: "Finding sickness." },
                { n: "Quarantine", d: "Isolating the infected." },
                { n: "Heuristic Analysis", d: "Predicting disease." },
                { n: "Firewall Config", d: "Blocking infection." },
                { n: "System Clean", d: "Curing the host." }
            ]},
            { title: "Defragmentation", steps: [
                { n: "Disk Optimization", d: "Organizing the mind." },
                { n: "Memory Management", d: "Improving recall." },
                { n: "Cache Clearing", d: "Removing clutter." },
                { n: "Registry Repair", d: "Fixing core functions." },
                { n: "Speed Boost", d: "Thinking faster." }
            ]},
            { title: "Cyber-Psychology", steps: [
                { n: "Internet Addiction", d: "Treating obsession." },
                { n: "Dopamine Loops", d: "Managing reward." },
                { n: "Echo Chambers", d: "Breaking bubbles." },
                { n: "Troll Psychology", d: "Understanding malice." },
                { n: "Digital Detox", d: "Unplugging." }
            ]},
            { title: "Bio-Hacking", steps: [
                { n: "RFID Implants", d: "Chipping the body." },
                { n: "Nootropics", d: "Smart drugs." },
                { n: "Genetic Editing", d: "Rewriting DNA." },
                { n: "Quantified Self", d: "Measuring health." },
                { n: "Post-Humanism", d: "Evolving." }
            ]},
            { title: "Digital Hygiene", steps: [
                { n: "Password Management", d: "Securing access." },
                { n: "2FA", d: "Double checking." },
                { n: "Privacy Settings", d: "Hiding data." },
                { n: "Ad Blocking", d: "Preventing influence." },
                { n: "VPN Usage", d: "Masking location." }
            ]},
            { title: "System Restore", steps: [
                { n: "Backup Points", d: "Saving states." },
                { n: "Time Machine", d: "Reverting changes." },
                { n: "Factory Reset", d: "Starting over." },
                { n: "Data Recovery", d: "Retrieving lost memories." },
                { n: "Reboot", d: "Restarting life." }
            ]},
            { title: "Debugging", steps: [
                { n: "Log Analysis", d: "Finding errors." },
                { n: "Stack Tracing", d: "Following the path." },
                { n: "Patching", d: "Fixing bugs." },
                { n: "Version Control", d: "Managing changes." },
                { n: "Hotfixes", d: "Quick repairs." }
            ]},
            { title: "Neural Networks", steps: [
                { n: "Brain-Computer Interface", d: "Linking mind and machine." },
                { n: "Memory Upload", d: "Saving thoughts." },
                { n: "Dream Recording", d: "Watching sleep." },
                { n: "Skill Downloading", d: "Instant learning." },
                { n: "Telepathy", d: "Mind to mind." }
            ]},
            { title: "Virtual Health", steps: [
                { n: "Telemedicine", d: "Remote doctors." },
                { n: "AI Diagnosis", d: "Computer checks." },
                { n: "Robotic Surgery", d: "Precise operations." },
                { n: "Health Tracking", d: "Monitoring vitals." },
                { n: "Preventative Algorithms", d: "Stopping sickness." }
            ]},
            { title: "Immortality", steps: [
                { n: "Mind Uploading", d: "Living in the cloud." },
                { n: "Digital Ghost", d: "Spirit in the machine." },
                { n: "Server Farm Housing", d: "Bodies of rack." },
                { n: "Infinite Simulation", d: "Eternal life." },
                { n: "Eternal Uptime", d: "Never dying." }
            ]}
        ],
        ECONOMIC: [
            { title: "E-Commerce", steps: [
                { n: "Online Stores", d: "Buying anywhere." },
                { n: "Digital Goods", d: "Selling bits." },
                { n: "Microtransactions", d: "Small payments." },
                { n: "Subscription Models", d: "Recurring revenue." },
                { n: "Free Shipping", d: "Incentives." }
            ]},
            { title: "Gig Economy", steps: [
                { n: "Freelancing", d: "Self-employment." },
                { n: "Crowdsourcing", d: "Group work." },
                { n: "Ride Sharing", d: "Transport on demand." },
                { n: "Task Apps", d: "Odd jobs." },
                { n: "Precarity", d: "Unstable income." }
            ]},
            { title: "Cryptocurrency", steps: [
                { n: "Bitcoin", d: "Digital gold." },
                { n: "Ethereum", d: "Smart money." },
                { n: "DeFi", d: "Decentralized finance." },
                { n: "Stablecoins", d: "Pegged value." },
                { n: "To The Moon", d: "Speculation." }
            ]},
            { title: "Data Trading", steps: [
                { n: "User Data", d: "Selling people." },
                { n: "Targeted Ads", d: "Specific marketing." },
                { n: "Behavioral Surplus", d: "Predicting actions." },
                { n: "Privacy Sales", d: "Buying secrets." },
                { n: "Big Data", d: "Massive analysis." }
            ]},
            { title: "Attention Economy", steps: [
                { n: "Clickbait", d: "Luring eyes." },
                { n: "Influencers", d: "Social power." },
                { n: "Viral Content", d: "Spreading fast." },
                { n: "Engagement Metrics", d: "Measuring interest." },
                { n: "Ad Revenue", d: "Monetizing views." }
            ]},
            { title: "Crowdfunding", steps: [
                { n: "Kickstarter", d: "Funding dreams." },
                { n: "Patreon", d: "Supporting creators." },
                { n: "Early Access", d: "Paying to beta test." },
                { n: "Stretch Goals", d: "Bonus content." },
                { n: "Community Support", d: "Backer power." }
            ]},
            { title: "Automation", steps: [
                { n: "AI Labor", d: "Thinking machines." },
                { n: "Robotic Process", d: "Automatic work." },
                { n: "Job Displacement", d: "Replacing humans." },
                { n: "UBI", d: "Basic income." },
                { n: "Post-Scarcity", d: "End of need." }
            ]},
            { title: "Virtual Real Estate", steps: [
                { n: "Metaverse Land", d: "Digital property." },
                { n: "NFT Property", d: "Unique tokens." },
                { n: "Server Space", d: "Hosting rental." },
                { n: "Domain Names", d: "Web addresses." },
                { n: "Digital Squatting", d: "Holding land." }
            ]},
            { title: "Algorithmic Trading", steps: [
                { n: "High Frequency", d: "Speed trading." },
                { n: "Flash Crash", d: "Market glitches." },
                { n: "Market Manipulation", d: "Controlled prices." },
                { n: "Arbitrage", d: "Price differences." },
                { n: "AI Brokers", d: "Robo-advisors." }
            ]},
            { title: "The Singularity", steps: [
                { n: "Resource Optimization", d: "Perfect efficiency." },
                { n: "Nano-Fabrication", d: "Building atoms." },
                { n: "Energy Abundance", d: "Free power." },
                { n: "Money Obsolescence", d: "End of cash." },
                { n: "Utopia", d: "Perfect world." }
            ]}
        ],
        POLITICAL: [
            { title: "Net Neutrality", steps: [
                { n: "Open Internet", d: "Equal access." },
                { n: "ISP Regulation", d: "Controlling providers." },
                { n: "Traffic Shaping", d: "Managing flow." },
                { n: "Fast Lanes", d: "Paid priority." },
                { n: "Digital Rights", d: "Online freedom." }
            ]},
            { title: "Censorship", steps: [
                { n: "Content Moderation", d: "Filtering posts." },
                { n: "Firewalls", d: "Blocking sites." },
                { n: "Banned Keywords", d: "Forbidden words." },
                { n: "Shadowbanning", d: "Hidden bans." },
                { n: "Free Speech", d: "Open expression." }
            ]},
            { title: "Cyber-Warfare", steps: [
                { n: "State Hackers", d: "Government spies." },
                { n: "Infrastructure Attacks", d: "Hitting the grid." },
                { n: "Election Interference", d: "Changing votes." },
                { n: "Disinformation", d: "Fake news." },
                { n: "Bot Farms", d: "Automated influence." }
            ]},
            { title: "Digital Identity", steps: [
                { n: "Anonymity", d: "Hidden self." },
                { n: "Verification", d: "Proven self." },
                { n: "Social Credit", d: "Scored life." },
                { n: "Digital Passports", d: "Online ID." },
                { n: "Privacy Laws", d: "Data protection." }
            ]},
            { title: "Hacktivism", steps: [
                { n: "Anonymous", d: "Legion." },
                { n: "Leaks", d: "Releasing secrets." },
                { n: "Doxing", d: "Revealing identities." },
                { n: "DDoS Protests", d: "Virtual sit-ins." },
                { n: "Whistleblowing", d: "Exposing truth." }
            ]},
            { title: "Technocracy", steps: [
                { n: "Silicon Valley", d: "Tech hubs." },
                { n: "Big Tech lobbying", d: "Corporate influence." },
                { n: "Algorithmic Governance", d: "Code law." },
                { n: "Smart Cities", d: "Connected living." },
                { n: "AI Rule", d: "Computer leaders." }
            ]},
            { title: "Copyright", steps: [
                { n: "DMCA", d: "Takedowns." },
                { n: "Piracy", d: "Sharing." },
                { n: "Fair Use", d: "Legal copying." },
                { n: "Open Source", d: "Free software." },
                { n: "Creative Commons", d: "Shared rights." }
            ]},
            { title: "Surveillance State", steps: [
                { n: "Mass Monitoring", d: "Watching all." },
                { n: "Facial Recognition", d: "Seeing faces." },
                { n: "Predictive Policing", d: "Stopping crime early." },
                { n: "Data Retention", d: "Keeping records." },
                { n: "The Panopticon", d: "Always watched." }
            ]},
            { title: "Decentralization", steps: [
                { n: "DAO", d: "Autonomous orgs." },
                { n: "Blockchain Governance", d: "Code voting." },
                { n: "Mesh Networks", d: "People's internet." },
                { n: "P2P", d: "Peer to peer." },
                { n: "Sovereign Individuals", d: "Self rule." }
            ]},
            { title: "The Simulation", steps: [
                { n: "Matrix Theory", d: "World is code." },
                { n: "Glitches", d: "Reality errors." },
                { n: "NPCs", d: "Background people." },
                { n: "Admin Control", d: "God mode." },
                { n: "Wake Up", d: "Escape." }
            ]}
        ]
    },

    // -------------------------------------------------------------------------
    // WARHAMMER (Grimdark / Gothic / Industrial)
    // -------------------------------------------------------------------------
    warhammer: {
        WEAPONS: [
            { title: "Blackpowder", steps: [
                { n: "Saltpeter Mixing", d: "Combines sulfur, charcoal, and potassium nitrate in precise ratios to create explosive propellant for imperial firearms." },
                { n: "Lead Shot", d: "Casts simple lead spheres that deform on impact, causing maximum tissue damage to unarmored targets." },
                { n: "Pistol Corpos", d: "Establishes mounted units armed with blackpowder pistols for hit-and-run tactics and close-range volleys." },
                { n: "Handgun Drills", d: "Rigorous training to ensure massed handgunners can reload and fire in synchronized volleys under pressure." },
                { n: "Smoke Screens", d: "Utilizes the thick smoke from blackpowder volleys to obscure troop movements and confuse the enemy." }
            ]},
            { title: "Cold Steel", steps: [
                { n: "Halberd Forging", d: "Combines spear and axe heads on a long pole to counter both cavalry charges and heavy armor." },
                { n: "Greatsword Balance", d: "Perfects the weighting of massive two-handed swords, allowing elite troops to cleave through multiple foes." },
                { n: "Plate Mail", d: "Forges interlocking steel plates that provide comprehensive protection without sacrificing mobility." },
                { n: "Shield Heraldry", d: "Paints shields with unit insignia to maintain cohesion and inspire pride during the chaos of battle." },
                { n: "Zweihanders", d: "Equips shock troops with massive swords capable of breaking pike formations and shattering shields." }
            ]},
            { title: "Artillery", steps: [
                { n: "Great Cannons", d: "Casts massive bronze cannons capable of smashing castle walls and slaying monsters with a single shot." },
                { n: "Mortar Arcs", d: "Calculates high-angle firing solutions to lob explosive shells over walls and into enemy formations." },
                { n: "Helblaster Volleys", d: "Develops a multi-barreled volley gun that unleashes a devastating hail of lead, prone to jamming." },
                { n: "Rocket Batteries", d: "Deploys unstable but destructive rocket launchers inspired by Cathayan fireworks technology." },
                { n: "Engineer Sights", d: "Equips artillery with precision optical sights to improve accuracy over long distances." }
            ]},
            { title: "Steam Tanks", steps: [
                { n: "Boiler Pressure", d: "Reinforces boilers to withstand the immense pressure needed to drive a heavily armored vehicle." },
                { n: "Iron Plating", d: "Encases the steam engine in thick iron plates, making the tank impervious to small arms fire." },
                { n: "Steam Turrets", d: "Mounts a steam-powered turret capable of rotating a cannon for 360-degree fire coverage." },
                { n: "Crush Treads", d: "Designs massive, spiked wheels or treads to crush infantry beneath the tank's weight." },
                { n: "Ventilation", d: "Improves crew survival by venting toxic fumes and excess heat away from the fighting compartment." }
            ]},
            { title: "Runefangs", steps: [
                { n: "Dwarf Smithing", d: "Collaborates with Dwarven smiths to forge blades using ancient, unbreakable techniques." },
                { n: "Elector Counts", d: "Assigns these legendary swords to provincial rulers as symbols of authority and martial prowess." },
                { n: "Magic Edges", d: "Imbues blades with enchantments that allow them to cut through any armor or magical protection." },
                { n: "Ancient Oaths", d: "Binds the wielders to ancient oaths of loyalty and defense of the Empire." },
                { n: "Orc Bane", d: "Enchants specific blades to be particularly lethal against greenskins and other monsters." }
            ]},
            { title: "Faith & Steel", steps: [
                { n: "Warrior Priests", d: "Ordains combat-ready clergy who lead from the front, channeling divine power through their warhammers." },
                { n: "Battle Prayers", d: "Chants sacred litanies that bolster troop morale and ward off dark magic." },
                { n: "Warhammers", d: "Adopts the warhammer as a holy weapon, effective against armor and symbolic of Sigmar's might." },
                { n: "Holy Furor", d: "Incites a religious frenzy in troops, making them fearless and relentless in combat." },
                { n: "Sigmar's Wrath", d: "Calls down divine judgment in the form of smiting blows or burning light." }
            ]},
            { title: "Witch Hunting", steps: [
                { n: "Flintlock Pistols", d: "Issues dual pistols to witch hunters for rapid, close-quarters execution of heretics." },
                { n: "Silver Bullets", d: "Casts ammunition from blessed silver to effectively harm werewolves, daemons, and undead." },
                { n: "Torches", d: "Uses fire as a cleansing tool to burn corruption and illuminate dark corners." },
                { n: "Confession Tools", d: "Employs varied implements to extract truths and confessions from suspected cultists." },
                { n: "Pyres", d: "Constructs ritual bonfires to purify the tainted and serve as a warning to others." }
            ]},
            { title: "Demigryph Knights", steps: [
                { n: "Beast Taming", d: "Breaks and trains ferocious demigryphs to serve as mounts for elite knights." },
                { n: "Plate Barding", d: "Armors the mounts with custom-fitted plate to protect them in the thick of battle." },
                { n: "Lance Charges", d: "Executes devastating charges where the mount's claws and beak strike alongside the knight's lance." },
                { n: "Beak Polish", d: "Maintains the mount's natural weaponry, ensuring beaks remain razor-sharp." },
                { n: "Inner Circle", d: "Establishes an elite order of knights dedicated to mastering this dangerous cavalry style." }
            ]},
            { title: "Luminark Lens", steps: [
                { n: "Light Focusing", d: "Aligns multiple lenses to concentrate ambient light into a searing beam." },
                { n: "Aysh Winds", d: "Channels the Wind of Hysh to power the laser-like attack of the Luminark." },
                { n: "Laser Beams", d: "Fires concentrated beams of light capable of burning through monsters and machinery." },
                { n: "Optical Alignment", d: "Precisely calibrates the lens array for maximum range and damage intensity." },
                { n: "Burning Gaze", d: "Unleashes a continuous beam that incinerates targets with the purity of light." }
            ]},
            { title: "Ghal Maraz", steps: [
                { n: "The Skull Splitter", d: "Researches the legendary strikes of Sigmar's hammer to emulate its destructive power." },
                { n: "God-Weapon", d: "Venerates the weapon as a divine artifact, boosting the morale of all who fight alongside it." },
                { n: "Thunderclap", d: "Enchants weapons to produce deafening booms on impact, stunning enemies." },
                { n: "Chaos Bane", d: "Imbues weapons with holy energies that are anathema to daemons and chaos spawn." },
                { n: "Empire United", d: "Uses the symbol of the hammer to unify disparate provinces under a single martial banner." }
            ]}
        ],
        TECH: [
            { title: "Dwarven Engineering", steps: [
                { n: "Stonecutting", d: "Masters the art of shaping stone blocks with precision for durable fortifications." },
                { n: "Gromril Smelting", d: "Processes the hardest known metal to create near-invulnerable armor and gates." },
                { n: "Rune Inscription", d: "Carves magical runes into structures to provide protection against magic and decay." },
                { n: "Deep Mining", d: "Develops techniques to excavate resources from the deepest roots of the mountains." },
                { n: "Indestructible Gates", d: "Constructs fortress gates that can withstand the assault of giants and battering rams." }
            ]},
            { title: "Imperial Industry", steps: [
                { n: "Water Wheels", d: "Harnesses river currents to power mills, bellows, and trip-hammers." },
                { n: "Brick Kilns", d: "Fires clay bricks on a massive scale for rapid urban construction." },
                { n: "Printing Presses", d: "Mass-produces pamphlets and decrees to disseminate information and propaganda." },
                { n: "Road Paving", d: "Connects the empire with reliable stone roads to facilitate trade and troop movement." },
                { n: "Sewer Patrols", d: "Establishes armed watches to keep the sewers clear of Skaven and mutants." }
            ]},
            { title: "Nuln Gunnery", steps: [
                { n: "Cannon Casting", d: "Specializes in casting large-bore cannons with minimal defects." },
                { n: "Bore Rifling", d: "Adds spiral grooves to gun barrels to increase accuracy and range." },
                { n: "Powder Storage", d: "Builds secure, dry bunkers to store volatile blackpowder reserves." },
                { n: "Repeater Tech", d: "Develops experimental multi-barreled weapons for rapid fire." },
                { n: "Pigeon Bombs", d: "Trains birds to deliver small explosives to enemy lines (results vary)." }
            ]},
            { title: "Steam Power", steps: [
                { n: "Pressure Valves", d: "Invents safety valves to prevent steam boilers from exploding." },
                { n: "Steam Engines", d: "Builds engines that convert steam pressure into mechanical work." },
                { n: "Mechanical Horses", d: "Experiments with robotic steeds powered by steam for tireless travel." },
                { n: "Gyro-Stabilizers", d: "Creates gyroscopes to keep flying machines and tanks level." },
                { n: "Ironclads", d: "Armors river barges with iron plates and steam engines for naval superiority." }
            ]},
            { title: "Skaven Warp-Tech", steps: [
                { n: "Warpstone Refining", d: "Processes chaotic warpstone into a potent, unstable fuel source." },
                { n: "Ratling Guns", d: "Constructs rotary cannons that fire warp-infused shards at high rates." },
                { n: "Doomwheels", d: "Builds massive, hamster-wheel warmachines that crush enemies with lightning." },
                { n: "Warp-Lightning", d: "Channels chaotic energy into devastating electrical discharges." },
                { n: "Genetic Molding", d: "Mutates giant rats into hulking ogres to serve as shock troops." }
            ]},
            { title: "Alchemy", steps: [
                { n: "Gold Transmutation", d: "Attempts to turn lead into gold to fund the state (results mostly lead)." },
                { n: "Potion Brewing", d: "Creates tonics that boost strength or heal wounds temporarily." },
                { n: "Metal Hulls", d: "Treats metals to resist corrosion and rust in harsh environments." },
                { n: "Acid Flasks", d: "Bottles volatile acids for use as grenades against armored foes." },
                { n: "Homunculus Creation", d: "Grows small, artificial servants to assist in labs." }
            ]},
            { title: "High Elf Craft", steps: [
                { n: "Ithilmar Forging", d: "Works with a metal as light as silk but harder than steel." },
                { n: "Crystal Spires", d: "Grows towers from living crystal that channel ambient magic." },
                { n: "Magic Glass", d: "Creates glass that is unbreakable and can magnify starlight." },
                { n: "Dragon Armor", d: "Forges armor capable of withstanding dragon fire." },
                { n: "Floating Islands", d: "Uses high magic to keep entire landmasses suspended in the air." }
            ]},
            { title: "Chaos Forging", steps: [
                { n: "Daemon Binding", d: "Traps daemons within weapons and armor to imbue them with sentience and power." },
                { n: "Hellcannons", d: "Fuses daemon and machine to create artillery that fires raw soul-energy." },
                { n: "Brass Armor", d: "Forges armor dedicated to Khorne that bleeds when struck." },
                { n: "Soul Fuel", d: "Powers engines by burning the souls of captives." },
                { n: "Living Metal", d: "Warps metal so that it heals and regenerates like flesh." }
            ]},
            { title: "Lizardman Geometry", steps: [
                { n: "Old One Plaques", d: "Deciphers ancient instructions left by the creators of the world." },
                { n: "Temple Alignment", d: "Builds pyramids aligned with cosmic ley lines to amplify magic." },
                { n: "Solar Engines", d: "Harnesses the sun's power into devastating beams of light." },
                { n: "Spawning Pools", d: "Optimizes the magical pools where new Lizardmen are born." },
                { n: "Geomantic Web", d: "Restores the planetary network of magical energy flow." }
            ]},
            { title: "End Times Tech", steps: [
                { n: "Necrotect Constructs", d: "Animates massive statues of stone and bone to fight." },
                { n: "Bone Giants", d: "Builds colossal warriors from the bones of ancient beasts." },
                { n: "Ark of the Covenant", d: "Carries souls of the damned to power necromantic rituals." },
                { n: "Nagash's Books", d: "Unlocks the ultimate secrets of death magic." },
                { n: "World Destruction", d: "Develops rituals capable of unraveling the fabric of reality." }
            ]}
        ],
        MAGIC: [
            { title: "The Winds of Magic", steps: [
                { n: "Aethyric Sight", d: "Trains mages to see the flows of magic invisible to normal eyes." },
                { n: "Wind Channelling", d: "Techniques to safely draw power from the Winds of Magic." },
                { n: "Miscast Prevention", d: "Safeguards to stop spells from backfiring and causing mutation." },
                { n: "Power Dice", d: "Methods to gather extra magical reserves for critical spells." },
                { n: "Dispel Scrolls", d: "Inscribes counter-spells to neutralize enemy magic." }
            ]},
            { title: "Bright Order", steps: [
                { n: "Aqshy Pyromancy", d: "Masters the Red Wind of Fire to control flames." },
                { n: "Flaming Swords", d: "Enchants weapons to burn with magical fire." },
                { n: "Fireballs", d: "Projects balls of explosive flame at enemies." },
                { n: "Cauterization", d: "Uses controlled fire to seal wounds instantly." },
                { n: "Ash Storms", d: "Summons choking clouds of hot ash to blind foes." }
            ]},
            { title: "Celestial Order", steps: [
                { n: "Azyr Astromancy", d: "Masters the Blue Wind of Heavens to predict the future." },
                { n: "Comet of Casandora", d: "Calls down a magical comet to crush enemies." },
                { n: "Fate Reading", d: "Divines the outcomes of battles before they begin." },
                { n: "Lightning Bolts", d: "Summons forks of lightning to strike targets." },
                { n: "Portents", d: "Interprets omens to give allies an advantage." }
            ]},
            { title: "Gold Order", steps: [
                { n: "Chamon Alchemy", d: "Masters the Yellow Wind of Metal for transmutation." },
                { n: "Transmutation", d: "Turns enemy weapons into lead or rust." },
                { n: "Armor Rusting", d: "Rapidly corrodes enemy armor, rendering it useless." },
                { n: "Lead into Gold", d: "The theoretical pinnacle of alchemy (rarely successful)." },
                { n: "Metal Shifting", d: "Reshapes metal objects with a thought." }
            ]},
            { title: "Jade Order", steps: [
                { n: "Ghyran Life", d: "Masters the Green Wind of Life to control nature." },
                { n: "Regrowth", d: "Heals wounds and restores vitality to the weary." },
                { n: "Thorn Shields", d: "Grows barrier of thorns to protect allies." },
                { n: "Earth Blood", d: "Channels the earth's energy to heal soldiers." },
                { n: "Forest Awakening", d: "Rouses trees to fight alongside the army." }
            ]},
            { title: "Light Order", steps: [
                { n: "Hysh Illumination", d: "Masters the White Wind of Light for exorcism." },
                { n: "Daemon Banishing", d: "Spells specifically designed to hurt and banish daemons." },
                { n: "Net of Amyntok", d: "Creates a magical net to immobilize enemies." },
                { n: "Time Distortion", d: "Speeds up the perception of allies." },
                { n: "Banishment", d: "Sends extraplanar entities back to the warp." }
            ]},
            { title: "Grey Order", steps: [
                { n: "Ulgu Shadow", d: "Masters the Grey Wind of Shadow for illusion." },
                { n: "Mind Razors", d: "Manifests psychic blades to attack the mind." },
                { n: "Steed of Shadows", d: "Allows the caster to fly on wings of darkness." },
                { n: "Invisibility", d: "Bends light to render subjects unseen." },
                { n: "Doppelgangers", d: "Creates illusory doubles to confuse enemies." }
            ]},
            { title: "Amber Order", steps: [
                { n: "Ghur Beasts", d: "Masters the Brown Wind of Beasts for transformation." },
                { n: "Transformation", d: "Allows the caster to become a beast like a bear or eagle." },
                { n: "Savage Strength", d: "Imbues allies with animalistic power." },
                { n: "Flock of Doom", d: "Summons a swarm of magical crows to peck enemies." },
                { n: "Hunter's Spear", d: "Summons a magical spear for direct combat." }
            ]},
            { title: "Amethyst Order", steps: [
                { n: "Shyish Death", d: "Masters the Purple Wind of Death for necromancy." },
                { n: "Soul Blight", d: "Weakens the resolve and strength of enemies." },
                { n: "Spirit Leech", d: "Drains the life force of a target to heal the caster." },
                { n: "Doom and Darkness", d: "Instills magical terror in enemy ranks." },
                { n: "Purple Sun", d: "Summons a moving sphere of death energy." }
            ]},
            { title: "Teclis's Teaching", steps: [
                { n: "High Magic", d: "A balanced mix of all winds, safe and powerful." },
                { n: "Elemental Mastery", d: "Control over fire, water, earth, and air." },
                { n: "Arcane Unforging", d: "Destroys magic items and dispels enchantments." },
                { n: "Tempest", d: "Summons storms to disrupt enemy flyers." },
                { n: "Vortex Control", d: "Manipulating the Great Vortex to stabilize magic." }
            ]}
        ],
        MEDICAL: [
            { title: "Field Surgery", steps: [
                { n: "Amputation", d: "Rapid removal of damaged limbs to prevent gangrene." },
                { n: "Cauterization", d: "Sealing wounds with hot iron to stop bleeding." },
                { n: "Whiskey Anesthetic", d: "Using strong alcohol to dull pain during surgery." },
                { n: "Bone Sawing", d: "Cutting through bone quickly in the field." },
                { n: "Wooden Legs", d: "Fitting basic prosthetics for maimed soldiers." }
            ]},
            { title: "Herbalism", steps: [
                { n: "Healing Poultices", d: "Applying herb mixtures to wounds to speed healing." },
                { n: "Shallya's Tears", d: "A rare herb said to cure minor diseases." },
                { n: "Cleansing Herbs", d: "Plants that help purge toxins from the body." },
                { n: "Plague Masks", d: "Beaked masks filled with herbs to filter bad air." },
                { n: "Leeches", d: "Using leeches to draw out 'bad blood'." }
            ]},
            { title: "Faith Healing", steps: [
                { n: "Warrior Priest Prayers", d: "Chanting to Shallya for divine intervention." },
                { n: "Holy Water", d: "Washing wounds with blessed water to prevent corruption." },
                { n: "Sigmar's Blessing", d: "Invoking the god's name to strengthen the body." },
                { n: "Exorcism", d: "Removing possessing spirits that cause illness." },
                { n: "Miraculous Recovery", d: "Spontaneous healing attributed to faith." }
            ]},
            { title: "Apothecary", steps: [
                { n: "Potion Brewing", d: "Creating chemical mixtures for health." },
                { n: "Antidotes", d: "Countering specific poisons used by Skaven or Dark Elves." },
                { n: "Painkillers", d: "Opium-based medicines to manage pain." },
                { n: "Stimulants", d: "Drugs to keep soldiers fighting despite fatigue." },
                { n: "Snake Oil", d: "Selling dubious cures to the desperate." }
            ]},
            { title: "Dwarven Medicine", steps: [
                { n: "Stone Salve", d: "A mineral paste that hardens skin and stops bleeding." },
                { n: "Ale Therapy", d: "Prescribing strong Dwarven ale for all ailments." },
                { n: "Gromril Splints", d: "Using unbreakable metal to set broken bones." },
                { n: "Beard Grooming", d: "Believing a healthy beard signifies a healthy Dwarf." },
                { n: "Resilience", d: "Relying on natural Dwarven constitution." }
            ]},
            { title: "Skaven Surgery", steps: [
                { n: "Warpstone Grafting", d: "Stitching warpstone shards into flesh for power." },
                { n: "Mutation", d: "Intentionally causing mutations to improve combat ability." },
                { n: "Extra Limbs", d: "Sewing on additional arms for multi-tasking." },
                { n: "Plague Breeding", d: "Creating diseases rather than curing them." },
                { n: "Expendable Patients", d: "Using slaves for medical experiments." }
            ]},
            { title: "Elven Healing", steps: [
                { n: "Life Magic", d: "Using Ghyran magic to knit flesh seamlessly." },
                { n: "Regeneration", d: "Accelerating natural healing rates." },
                { n: "Spirit Mending", d: "Healing psychological trauma." },
                { n: "Isha's Tears", d: "A magical spring water that cures all ills." },
                { n: "Immortality", d: "Studying the secrets of eternal life." }
            ]},
            { title: "Necromancy", steps: [
                { n: "Reanimation", d: "Bringing the dead back to serve." },
                { n: "Flesh Crafting", d: "Sewing body parts together to create monsters." },
                { n: "Soul Binding", d: "Trapping souls in dead bodies." },
                { n: "Undead Servitude", d: "Using the dead for labor." },
                { n: "Vampirism", d: "The curse of eternal life through blood." }
            ]},
            { title: "Nurgle's Gift", steps: [
                { n: "Disease Acceptance", d: "Embracing sickness as a blessing." },
                { n: "Pox Spreading", d: "Sharing the 'gifts' with others." },
                { n: "Rot Resilience", d: "Becoming immune to pain and death." },
                { n: "Bloating", d: "Expanding the body to hold more disease." },
                { n: "Grandfather's Love", d: "Feeling joy in decay." }
            ]},
            { title: "Grail Vow", steps: [
                { n: "Sacred Chalice", d: "Drinking from the Grail." },
                { n: "Lady's Blessing", d: "Divine protection granted by the Lady." },
                { n: "Supernatural Health", d: "Becoming immune to age and disease." },
                { n: "Agelessness", d: "Living for centuries without aging." },
                { n: "Living Saint", d: "Becoming a beacon of holiness." }
            ]}
        ],
        ECONOMIC: [
            { title: "Imperial Coin", steps: [
                { n: "Gold Crowns", d: "The standard currency of the Empire." },
                { n: "Silver Shillings", d: "Common currency for daily use." },
                { n: "Brass Pennies", d: "Small change for the poor." },
                { n: "Tax Collectors", d: "Officials who gather the Emperor's due." },
                { n: "Treasury", d: "The state's central bank." }
            ]},
            { title: "Trade Guilds", steps: [
                { n: "Merchant Princes", d: "Wealthy traders from Tilea." },
                { n: "River Barges", d: "Transporting goods along the Reik." },
                { n: "Caravan Guards", d: "Protecting merchants on the road." },
                { n: "Tolls", d: "Fees for using roads and bridges." },
                { n: "Monopolies", d: "Exclusive rights to sell certain goods." }
            ]},
            { title: "Feudal System", steps: [
                { n: "Peasant Tithes", d: "Farmers giving a portion of crops to lords." },
                { n: "Land Ownership", d: "Nobles owning the land." },
                { n: "Serfdom", d: "Peasants bound to the land." },
                { n: "Noble Patronage", d: "Lords funding artists and craftsmen." },
                { n: "Crop Rotation", d: "Managing fields for better yield." }
            ]},
            { title: "Dwarven Gold", steps: [
                { n: "Deep Mines", d: "Extracting gold from deep underground." },
                { n: "Gem Cutting", d: "Refining precious stones." },
                { n: "Oathgold", d: "Gold paid to settle grudges." },
                { n: "Ancestral Hoards", d: "Vast treasures accumulated over ages." },
                { n: "Rune-Struck Coins", d: "Currency stamped with magical runes." }
            ]},
            { title: "Mercenaries", steps: [
                { n: "Dogs of War", d: "Armies for hire." },
                { n: "Ogre Kingdoms", d: "Ogres fighting for food and gold." },
                { n: "Tilean Contracts", d: "Formal agreements for soldiering." },
                { n: "Pay Chests", d: "Securing the soldiers' wages." },
                { n: "Looting Rights", d: "Permission to steal from the defeated." }
            ]},
            { title: "Skaven Economy", steps: [
                { n: "Warpstone Tokens", d: "Currency made of solidified magic." },
                { n: "Slave Labor", d: "Using captured enemies for work." },
                { n: "Scavenging", d: "Taking what others discard." },
                { n: "Backstabbing", d: "Advancing by killing superiors." },
                { n: "Food Scarcity", d: "Constant hunger driving expansion." }
            ]},
            { title: "High Elf Trade", steps: [
                { n: "Sea Lanes", d: "Dominating ocean trade routes." },
                { n: "Exotic Goods", d: "Selling rare items from Ulthuan." },
                { n: "Fine Crafts", d: "Exporting superior elven goods." },
                { n: "Diplomatic Gifts", d: "Trading favors for influence." },
                { n: "Dragon Gold", d: "Ancient hoards guarded by dragons." }
            ]},
            { title: "Lizardman Gold", steps: [
                { n: "Temple Offerings", d: "Gold given to the gods." },
                { n: "Ancient Plaques", d: "Valuable tablets of the Old Ones." },
                { n: "Obsidian", d: "Volcanic glass used as currency." },
                { n: "Jungle Resources", d: "Rare herbs and creatures." },
                { n: "Whatever the Old Ones Want", d: "Economy based on divine will." }
            ]},
            { title: "Chaos Plunder", steps: [
                { n: "Raiding", d: "Stealing from the weak." },
                { n: "Pillaging", d: "Taking everything of value." },
                { n: "Burning", d: "Destroying what can't be taken." },
                { n: "Skull Taking", d: "Collecting trophies for Khorne." },
                { n: "Dark Gods' Favor", d: "Rewards from the gods." }
            ]},
            { title: "Vampire Wealth", steps: [
                { n: "Ancient Treasuries", d: "Wealth accumulated over centuries." },
                { n: "Blood Tax", d: "Demanding blood from subjects." },
                { n: "Undead Labor", d: "Workers who don't need pay." },
                { n: "Sylvanian Castles", d: "Fortified bases of power." },
                { n: "Eternal Compound Interest", d: "Growing rich over time." }
            ]}
        ],
        POLITICAL: [
            { title: "The Empire", steps: [
                { n: "Elector Counts", d: "Rulers of the provinces who elect the Emperor." },
                { n: "Imperial Diet", d: "Assembly of political representatives." },
                { n: "Emperor's Decree", d: "Laws issued by Karl Franz." },
                { n: "Province Rights", d: "Local autonomy vs Imperial rule." },
                { n: "Reikland Dominance", d: "The Emperor's province leading the way." }
            ]},
            { title: "Dwarf Karaks", steps: [
                { n: "High King", d: "The supreme ruler of all Dwarfs." },
                { n: "Thane Councils", d: "Local leaders advising the king." },
                { n: "Book of Grudges", d: "Recording every wrong done to the race." },
                { n: "Clan Loyalty", d: "Family before everything." },
                { n: "Ancestor Veneration", d: "Respecting the dead." }
            ]},
            { title: "High Elves", steps: [
                { n: "Phoenix King", d: "The male ruler of Ulthuan." },
                { n: "Everqueen", d: "The female spiritual leader." },
                { n: "Court Intrigue", d: "Political maneuvering." },
                { n: "Princes", d: "Nobles leading armies." },
                { n: "The Great Vortex", d: "Maintaining the magical balance." }
            ]},
            { title: "Bretonnia", steps: [
                { n: "King", d: "The ruler of the knights." },
                { n: "Dukes", d: "Regional lords." },
                { n: "Grail Knights", d: "Holy warriors with political sway." },
                { n: "Chivalric Code", d: "Rules of honor." },
                { n: "Peasant Oppression", d: "Keeping the lower class down." }
            ]},
            { title: "Skaven Council", steps: [
                { n: "Council of Thirteen", d: "The ruling lords of Skavendom." },
                { n: "Horned Rat", d: "Their dark god." },
                { n: "Betrayal", d: "The standard political tool." },
                { n: "Schemes", d: "Complex plans for domination." },
                { n: "Assassination", d: "Removing rivals." }
            ]},
            { title: "Greenskins", steps: [
                { n: "Da Boss", d: "The strongest Orc in charge." },
                { n: "WAAAGH!", d: "A massive military crusade." },
                { n: "Krumping", d: "Beating up dissenters." },
                { n: "Gork and Mork", d: "The twin gods of destruction." },
                { n: "Biggest is Best", d: "Leadership by size." }
            ]},
            { title: "Vampire Counts", steps: [
                { n: "Bloodlines", d: "Different families of vampires." },
                { n: "Von Carstein", d: "The ruling family of Sylvania." },
                { n: "Midnight Aristocracy", d: "Undead nobles ruling mortals." },
                { n: "Necromancer Apprentices", d: "Mortals seeking power." },
                { n: "Eternal Rule", d: "Immortal leaders." }
            ]},
            { title: "Tomb Kings", steps: [
                { n: "Settra", d: "The Imperishable King of Kings." },
                { n: "Nehekhara", d: "The land of the dead." },
                { n: "Hierophants", d: "Priests who wake the dead." },
                { n: "Mummies", d: "Preserved rulers." },
                { n: "Whatever Settra Says", d: "Absolute obedience." }
            ]},
            { title: "Lizardmen", steps: [
                { n: "Slann Mage-Priests", d: "Toad-like rulers." },
                { n: "Great Plan", d: "The Old Ones' instructions." },
                { n: "Skink Attendants", d: "Bureaucrats and translators." },
                { n: "Saurus Warriors", d: "The military caste." },
                { n: "Interpretation", d: "Debating the Great Plan." }
            ]},
            { title: "Chaos", steps: [
                { n: "Everchosen", d: "The champion of all four gods." },
                { n: "Dark Gods", d: "Khorne, Nurgle, Tzeentch, Slaanesh." },
                { n: "Daemon Princes", d: "Ascended champions." },
                { n: "Champions", d: "Leaders of warbands." },
                { n: "The End Times", d: "The goal of destroying the world." }
            ]}
        ]
    },

    // -------------------------------------------------------------------------
    // DOUGHNUT HOLE (Cosmic / Eldritch)
    // -------------------------------------------------------------------------
    doughnut_hole: {
        WEAPONS: [
            { title: "Void Energy", steps: [
                { n: "Vacuum Channeling", d: "Harnessing the power of emptiness." },
                { n: "Zero-Point Rounds", d: "Bullets with infinite energy density." },
                { n: "Entropy Grenades", d: "Accelerating decay in a blast radius." },
                { n: "Null-Fields", d: "Areas where energy weapons fail." },
                { n: "Existence Deletion", d: "Erasing targets from reality." }
            ]},
            { title: "Gravity Manipulation", steps: [
                { n: "Grav-Wells", d: "Creating crushing points of gravity." },
                { n: "Crush Effect", d: "Imploding targets." },
                { n: "Weightless Combat", d: "Fighting in zero-G." },
                { n: "Orbital Strikes", d: "Dropping rocks from space." },
                { n: "Black Hole Guns", d: "Firing miniature singularities." }
            ]},
            { title: "Reality Bending", steps: [
                { n: "Physics Glitching", d: "Exploiting flaws in reality." },
                { n: "Wall Clipping", d: "Shooting through cover." },
                { n: "Object Duplication", d: "Creating ammo from nothing." },
                { n: "Scale Alteration", d: "Changing size of weapons." },
                { n: "Texture Erasure", d: "Removing properties of matter." }
            ]},
            { title: "Eldritch Summons", steps: [
                { n: "Tentacle Portals", d: "Summoning appendages from beyond." },
                { n: "Eyeball Swarms", d: "Living surveillance clouds." },
                { n: "Whispering Madness", d: "Inducing insanity in enemies." },
                { n: "Non-Euclidean Shapes", d: "Geometry that hurts to look at." },
                { n: "Cosmic Horror", d: "Summoning entities of fear." }
            ]},
            { title: "Starlight Weaving", steps: [
                { n: "Hard-Light Swords", d: "Solidified photon blades." },
                { n: "Laser Arrays", d: "Multiple beam weapons." },
                { n: "Prismatic Shields", d: "Deflecting light based attacks." },
                { n: "Constellation Strikes", d: "Patterned orbital bombardment." },
                { n: "Supernova Blast", d: "Explosive stellar energy." }
            ]},
            { title: "Time Weaponry", steps: [
                { n: "Age Acceleration", d: "Withering targets rapidly." },
                { n: "Bullet Stasis", d: "Freezing projectiles in mid-air." },
                { n: "Repeat Loop", d: "Trapping enemies in time." },
                { n: "Precognitive Aim", d: "Knowing where the target will be." },
                { n: "Paradox Bullets", d: "Hitting targets before firing." }
            ]},
            { title: "Chaos Theory", steps: [
                { n: "Probability Manipulation", d: "Forcing unlikely outcomes." },
                { n: "Random Crits", d: "Unpredictable damage spikes." },
                { n: "Luck Drain", d: "Stealing enemy fortune." },
                { n: "Butterfly Effect", d: "Small actions causing big damage." },
                { n: "Quantum Uncertainty", d: "Being hit and not hit simultaneously." }
            ]},
            { title: "Sound Attacks", steps: [
                { n: "Cosmic Hum", d: "Low frequency vibration." },
                { n: "Shatter Scream", d: "Sonic resonance destruction." },
                { n: "Vacuum Silence", d: "Creating zones of absolute quiet." },
                { n: "Brown Note", d: "Incapacitating bowel disruption." },
                { n: "Universal Resonance", d: "Shaking reality apart." }
            ]},
            { title: "Dimensional Rifts", steps: [
                { n: "Portal Guns", d: "Creating gateways." },
                { n: "Tele-Fragging", d: "Teleporting inside enemies." },
                { n: "Pocket Dimensions", d: "Storing weapons in subspace." },
                { n: "Mirror Universe", d: "Summoning evil twins." },
                { n: "The Upside Down", d: "Shifting into a dark dimension." }
            ]},
            { title: "The Singularity", steps: [
                { n: "Event Horizon", d: "The point of no return." },
                { n: "Spaghettification", d: "Stretching targets into atoms." },
                { n: "Infinite Density", d: "Unstoppable mass." },
                { n: "Light Trapping", d: "Absorbing energy attacks." },
                { n: "Universe Reset", d: "The ultimate weapon." }
            ]}
        ],
        MAGIC: [
            { title: "Anomaly Studies", steps: [
                { n: "Glitch Observation", d: "Watching reality break." },
                { n: "Pattern Recognition", d: "Seeing order in chaos." },
                { n: "Static Filtering", d: "Seeing through the noise." },
                { n: "Signal Decoding", d: "Understanding alien messages." },
                { n: "Void Staring", d: "Looking into the abyss." }
            ]},
            { title: "Cosmic Awareness", steps: [
                { n: "Star Charting", d: "Mapping the universe." },
                { n: "Nebula Gazing", d: "Divination through gas clouds." },
                { n: "Void Walking", d: "Traveling without moving." },
                { n: "Astral Projection", d: "Leaving the body." },
                { n: "Universal Mind", d: "Connecting to all things." }
            ]},
            { title: "Entropy Magic", steps: [
                { n: "Decay Acceleration", d: "Speeding up rot." },
                { n: "Heat Death", d: "Freezing the universe." },
                { n: "Order Dissolution", d: "Breaking structures." },
                { n: "Structure Collapse", d: "Destroying buildings." },
                { n: "Dust to Dust", d: "Reducing matter to atoms." }
            ]},
            { title: "Creation Songs", steps: [
                { n: "Starlight Hymns", d: "Singing light into being." },
                { n: "Matter Singing", d: "Shaping reality with voice." },
                { n: "Life Weaving", d: "Creating new organisms." },
                { n: "Planet Shaping", d: "Terraforming with song." },
                { n: "Big Bang Theory", d: "The song that started it all." }
            ]},
            { title: "Illogical Arts", steps: [
                { n: "Square Circles", d: "Creating impossibilities." },
                { n: "Up is Down", d: "Reversing gravity." },
                { n: "Blue is Loud", d: "Synesthesia magic." },
                { n: "Effect before Cause", d: "Reversing time locally." },
                { n: "Nonsense Runes", d: "Magic that works because it shouldn't." }
            ]},
            { title: "Dream Walking", steps: [
                { n: "Lucid Control", d: "Controlling dreams." },
                { n: "Nightmare Fuel", d: "Summoning terrors." },
                { n: "Subconscious Dive", d: "Entering minds." },
                { n: "Memory Harvesting", d: "Stealing thoughts." },
                { n: "Sleep Spells", d: "Inducing comas." }
            ]},
            { title: "Warp Spasms", steps: [
                { n: "Flesh Shaping", d: "Altering bodies." },
                { n: "Mutation", d: "Adding claws and fangs." },
                { n: "Extra Limbs", d: "Growing arms." },
                { n: "Eye Growth", d: "Seeing everything." },
                { n: "Formless Horror", d: "Becoming a blob." }
            ]},
            { title: "Crystal Resonance", steps: [
                { n: "Vibration Tuning", d: "Using sound crystals." },
                { n: "Light Refraction", d: "Bending lasers." },
                { n: "Energy Storage", d: "Magical batteries." },
                { n: "Beam Focusing", d: "Amplifying magic." },
                { n: "Prism Power", d: "Spliting magic types." }
            ]},
            { title: "Fate Weaving", steps: [
                { n: "Thread Cutting", d: "Ending lives." },
                { n: "Destiny Knot", d: "Binding fates." },
                { n: "Timeline Selection", d: "Choosing the future." },
                { n: "Prophecy", d: "Predicting events." },
                { n: "Inevitable End", d: "Ensuring doom." }
            ]},
            { title: "Ascended Thought", steps: [
                { n: "Brain Expansion", d: "Increasing intelligence." },
                { n: "Pure Energy", d: "Becoming mana." },
                { n: "Telepathy", d: "Mind reading." },
                { n: "Omnipresence", d: "Being everywhere." },
                { n: "Becoming the Void", d: "Merging with nothingness." }
            ]}
        ],
        TECH: [
            { title: "Void Ships", steps: [
                { n: "Hull Reinforcement", d: "Armor for space." },
                { n: "Vacuum Seals", d: "Keeping air inside." },
                { n: "Dark Matter Engines", d: "Fuel from nothing." },
                { n: "Slipstream Drive", d: "Faster than light." },
                { n: "Event Horizon Nav", d: "Steering near black holes." }
            ]},
            { title: "Gravity Tech", steps: [
                { n: "Artificial Gravity", d: "Walking on floors in space." },
                { n: "Inertial Dampeners", d: "Stopping G-force." },
                { n: "Grav-Boots", d: "Magnetic shoes." },
                { n: "Singularity Containment", d: "Holding black holes." },
                { n: "Tractor Beams", d: "Pulling ships." }
            ]},
            { title: "Starlight Cells", steps: [
                { n: "Solar Collection", d: "Energy from suns." },
                { n: "Photon Batteries", d: "Storing light." },
                { n: "Light Hardening", d: "Solid light constructs." },
                { n: "Prism Refraction", d: "Splitting energy beams." },
                { n: "Star Fuel", d: "Burning plasma." }
            ]},
            { title: "Dimensional Engineering", steps: [
                { n: "Tesseract Storage", d: "Bigger on the inside." },
                { n: "Portal Stabilization", d: "Keeping gates open." },
                { n: "Pocket Universes", d: "Personal dimensions." },
                { n: "Non-Euclidean Architecture", d: "Impossible buildings." },
                { n: "Infinite Hallways", d: "Space looping." }
            ]},
            { title: "Time Machines", steps: [
                { n: "Flux Capacitors", d: "Time travel engine." },
                { n: "Chronitons", d: "Time particles." },
                { n: "TARDIS Mechanics", d: "Time and relative dimension." },
                { n: "Loop Stability", d: "Preventing paradoxes." },
                { n: "Paradox Resolution", d: "Fixing broken time." }
            ]},
            { title: "Cosmic Sensors", steps: [
                { n: "Deep Space Arrays", d: "Listening to stars." },
                { n: "Void Radar", d: "Seeing in the dark." },
                { n: "Life Sign Scanners", d: "Finding biologicals." },
                { n: "Energy Reading", d: "Measuring power." },
                { n: "Omniscience", d: "Seeing everything." }
            ]},
            { title: "Living Metal", steps: [
                { n: "Self-Repair", d: "Healing machines." },
                { n: "Shape-Shifting", d: "Liquid metal." },
                { n: "Sentient Tools", d: "Tools that think." },
                { n: "Liquid Armor", d: "Flexible defense." },
                { n: "Techno-Organic", d: "Merging flesh and steel." }
            ]},
            { title: "Psionic Tech", steps: [
                { n: "Mind Amplifiers", d: "Boosting brain power." },
                { n: "Telepathic Comms", d: "Thought radios." },
                { n: "Thought Control", d: "Influencing minds." },
                { n: "Dream Recording", d: "Videotaping sleep." },
                { n: "Psychic Shields", d: "Blocking mental attacks." }
            ]},
            { title: "Entropy Engines", steps: [
                { n: "Chaos Harvesting", d: "Power from disorder." },
                { n: "Decay Power", d: "Rotting for energy." },
                { n: "Heat Death Reversal", d: "Creating energy from nothing." },
                { n: "Random Generators", d: "Unpredictable power." },
                { n: "Infinite Probability Drive", d: "Improbable travel." }
            ]},
            { title: "Reality Anchors", steps: [
                { n: "Physics Stabilization", d: "Enforcing laws of physics." },
                { n: "Existence Confirmation", d: "Proving you exist." },
                { n: "Anti-Glitch Field", d: "Stopping reality breaks." },
                { n: "Normalcy Beacon", d: "Making things normal." },
                { n: "The Constant", d: "Unchanging point." }
            ]}
        ],
        MEDICAL: [
            { title: "Reality Restoration", steps: [
                { n: "Glitch Fixing", d: "Repairing broken people." },
                { n: "Form Stabilization", d: "Keeping shape." },
                { n: "Sanity Checks", d: "Restoring mind." },
                { n: "Existence Confirmation", d: "Ensuring reality." },
                { n: "Memory Defrag", d: "Sorting thoughts." }
            ]},
            { title: "Cosmic Mutation", steps: [
                { n: "Extra Eye Growth", d: "Seeing more." },
                { n: "Tentacle Control", d: "New limbs." },
                { n: "Void Adaptation", d: "Surviving space." },
                { n: "Star-Skin", d: "Glowing flesh." },
                { n: "Eldritch Physiology", d: "Strange bodies." }
            ]},
            { title: "Mind Mending", steps: [
                { n: "Psychic Surgery", d: "Healing brains." },
                { n: "Trauma Erasure", d: "Forgetting pain." },
                { n: "Dream Therapy", d: "Healing in sleep." },
                { n: "Thought Correction", d: "Fixing ideas." },
                { n: "Soul Glue", d: "Mending spirits." }
            ]},
            { title: "Energy Healing", steps: [
                { n: "Starlight Infusion", d: "Filling with light." },
                { n: "Void Siphoning", d: "Removing bad energy." },
                { n: "Quantum Regeneration", d: "Instant heal." },
                { n: "Life Force Transfer", d: "Giving health." },
                { n: "Rebirth", d: "New life." }
            ]},
            { title: "Time Reversal", steps: [
                { n: "Injury Undoing", d: "Going back before hurt." },
                { n: "Age Regression", d: "Getting younger." },
                { n: "Temporal Stasis", d: "Pausing damage." },
                { n: "Quickload", d: "Reloading save." },
                { n: "Save Scumming", d: "Trying again." }
            ]},
            { title: "Alien Anatomy", steps: [
                { n: "Xenobiology", d: "Studying aliens." },
                { n: "Silicon Life", d: "Rock people." },
                { n: "Energy Beings", d: "Living light." },
                { n: "Hive Mind Health", d: "Treating the swarm." },
                { n: "Unknown Organs", d: "Strange parts." }
            ]},
            { title: "Crystal Growth", steps: [
                { n: "Gem Limbs", d: "Crystal arms." },
                { n: "Prism Organs", d: "Glass hearts." },
                { n: "Light Blood", d: "Glowing veins." },
                { n: "Resonance Tuning", d: "Healing vibration." },
                { n: "Shatter Proofing", d: "Stronger crystals." }
            ]},
            { title: "Chaos Medicine", steps: [
                { n: "Random Effects", d: "Might heal, might hurt." },
                { n: "Placebo Power", d: "Belief healing." },
                { n: "Placebo Effect", d: "Mind over matter." },
                { n: "Wild Magic Cure", d: "Unpredictable healing." },
                { n: "Whatever Works", d: "Trying anything." }
            ]},
            { title: "Void Immunity", steps: [
                { n: "Vacuum Breathing", d: "No air needed." },
                { n: "Radiation Resistance", d: "Ignoring rays." },
                { n: "Entropy Shielding", d: "Stopping rot." },
                { n: "Madness Proofing", d: "Sane mind." },
                { n: "Existence Anchoring", d: "Staying real." }
            ]},
            { title: "Ascension", steps: [
                { n: "Shedding Flesh", d: "Leaving body." },
                { n: "Pure Thought", d: "Becoming mind." },
                { n: "Becoming Energy", d: "Living light." },
                { n: "Immortality", d: "Never dying." },
                { n: "Godhood", d: "Ultimate power." }
            ]}
        ],
        ECONOMIC: [
            { title: "Exotic Matter", steps: [
                { n: "Dark Matter", d: "Heavy stuff." },
                { n: "Antimatter", d: "Explosive fuel." },
                { n: "Star Dust", d: "Magic powder." },
                { n: "Void Crystals", d: "Dark gems." },
                { n: "Unobtainium", d: "Rare metal." }
            ]},
            { title: "Information Trade", steps: [
                { n: "Secrets", d: "Valuable knowledge." },
                { n: "Lost Knowledge", d: "Forgotten lore." },
                { n: "Prophecies", d: "Future sight." },
                { n: "True Names", d: "Power words." },
                { n: "Forbidden Lore", d: "Dark secrets." }
            ]},
            { title: "Soul Currency", steps: [
                { n: "Spirit Coins", d: "Money made of ghosts." },
                { n: "Life Force", d: "Energy currency." },
                { n: "Memories", d: "Trading experiences." },
                { n: "Emotions", d: "Selling feelings." },
                { n: "Essence", d: "Pure soul." }
            ]},
            { title: "Artifact Scavenging", steps: [
                { n: "Lost Tech", d: "Ancient machines." },
                { n: "Alien Relics", d: "Strange objects." },
                { n: "Cosmic Debris", d: "Space junk." },
                { n: "God Corpses", d: "Dead divinity." },
                { n: "Reality Shards", d: "Pieces of world." }
            ]},
            { title: "Time Trading", steps: [
                { n: "Future Stocks", d: "Investing in tomorrow." },
                { n: "Past Investments", d: "Changing history." },
                { n: "Compound Interest", d: "Growing wealth." },
                { n: "Time Credits", d: "Buying time." },
                { n: "Paradox Profit", d: "Making money from errors." }
            ]},
            { title: "Energy Exchange", steps: [
                { n: "Star Power", d: "Selling sunlight." },
                { n: "Void Energy", d: "Selling darkness." },
                { n: "Entropy Harvesting", d: "Selling decay." },
                { n: "Gravity Wells", d: "Selling weight." },
                { n: "Battery Swapping", d: "Trading power." }
            ]},
            { title: "Dream Commerce", steps: [
                { n: "Lucid Selling", d: "Ads in dreams." },
                { n: "Nightmare Fuel", d: "Scary products." },
                { n: "Fantasy Fulfillment", d: "Selling wishes." },
                { n: "Subconscious Ads", d: "Hidden marketing." },
                { n: "Sleep Mining", d: "Working while sleeping." }
            ]},
            { title: "Chaos Markets", steps: [
                { n: "Random Prices", d: "Changing costs." },
                { n: "Barter System", d: "Trading items." },
                { n: "Gambling", d: "Betting on everything." },
                { n: "Luck Trading", d: "Selling fortune." },
                { n: "Whatever You Have", d: "Anything goes." }
            ]},
            { title: "Universal Banking", steps: [
                { n: "Galactic Credits", d: "Space money." },
                { n: "Neutronium Bars", d: "Heavy gold." },
                { n: "Black Hole Vaults", d: "Secure storage." },
                { n: "Interdimensional Loans", d: "Borrowing from elsewhere." },
                { n: "Cosmic Debt", d: "Owing the universe." }
            ]},
            { title: "Post-Materialism", steps: [
                { n: "Thought Creation", d: "Thinking things into being." },
                { n: "Wish Fulfillment", d: "Getting what you want." },
                { n: "Matter Synthesis", d: "Making stuff." },
                { n: "Infinite Abundance", d: "Having everything." },
                { n: "Nirvana", d: "Economic enlightenment." }
            ]}
        ],
        POLITICAL: [
            { title: "Cosmic Alignment", steps: [
                { n: "Star Charts", d: "Maps of power." },
                { n: "Constellation Politics", d: "Ruling by stars." },
                { n: "Planetary Orbit", d: "Spheres of influence." },
                { n: "Galactic Council", d: "ruling body." },
                { n: "Universal Balance", d: "Keeping peace." }
            ]},
            { title: "Chaos Theory", steps: [
                { n: "Anarchy", d: "No rules." },
                { n: "Random Rule", d: "Dice roll leaders." },
                { n: "Dice Rolls", d: "Chance decides." },
                { n: "Butterfly Effect", d: "Small changes." },
                { n: "Entropy", d: "Decay of order." }
            ]},
            { title: "Void Lords", steps: [
                { n: "Eldritch Rulers", d: "Ancient gods." },
                { n: "Tentacled Tyrants", d: "Monster kings." },
                { n: "Mad Gods", d: "Insane leaders." },
                { n: "Whispering Voices", d: "Hidden commands." },
                { n: "The Unknown", d: "Fearful rule." }
            ]},
            { title: "Starlight Senate", steps: [
                { n: "Weaver Council", d: "Light makers." },
                { n: "Luminary Voting", d: "Shining democracy." },
                { n: "Beam Transmission", d: "Speed of light law." },
                { n: "Light Law", d: "Rules of illumination." },
                { n: "Harmony", d: "Peaceful coexistence." }
            ]},
            { title: "Time Keepers", steps: [
                { n: "Chronology Protection", d: "Saving history." },
                { n: "Paradox Police", d: "Stopping time crime." },
                { n: "Timeline Edits", d: "Changing the past." },
                { n: "History rewriting", d: "Changing the record." },
                { n: "Future Planning", d: "Guiding destiny." }
            ]},
            { title: "Drifter Clans", steps: [
                { n: "Nomadic Tribes", d: "Wandering people." },
                { n: "Scavenger Codes", d: "Rules of salvage." },
                { n: "Ship Captains", d: "Leaders of vessels." },
                { n: "Space Pirates", d: "Thieves in void." },
                { n: "Freedom", d: "No masters." }
            ]},
            { title: "Hive Minds", steps: [
                { n: "Collective Thought", d: "One mind." },
                { n: "One Will", d: "No individuals." },
                { n: "Assimilation", d: "Joining the whole." },
                { n: "Unity", d: "Perfect agreement." },
                { n: "The Swarm", d: "Many bodies." }
            ]},
            { title: "Ascended Beings", steps: [
                { n: "Energy Forms", d: "Beings of light." },
                { n: "Telepathic Rule", d: "Mind control." },
                { n: "Godly Decrees", d: "Divine orders." },
                { n: "Higher Planes", d: "Ruling from above." },
                { n: "Enlightenment", d: "Knowing all." }
            ]},
            { title: "Dimensional Diplomacy", steps: [
                { n: "Portal Treaties", d: "Agreements to travel." },
                { n: "Multiverse Pacts", d: "Alliances across worlds." },
                { n: "Mirror World War", d: "Fighting reflections." },
                { n: "Alien Contact", d: "Meeting new life." },
                { n: "First Contact", d: "Hello world." }
            ]},
            { title: "The Singularity", steps: [
                { n: "One Mind", d: "All is one." },
                { n: "One Purpose", d: "Single goal." },
                { n: "One Truth", d: "Absolute fact." },
                { n: "One End", d: "Final destiny." },
                { n: "The Omega", d: "The end." }
            ]}
        ]
    },

    // -------------------------------------------------------------------------
    // MIDDLE-EARTH (Fantasy / Low Magic / Ancient)
    // -------------------------------------------------------------------------
    middle_earth: {
        WEAPONS: [
            { title: "Elven Blades", steps: [
                { n: "Gondolin Forging", d: "Ancient techniques from the hidden city to create blades that glow near Orcs." },
                { n: "Orc-Sense Glow", d: "Enchanting blades to shine blue when enemies are near." },
                { n: "Mithril Alloys", d: "Mixing mithril with steel for lightweight, unbreakable edges." },
                { n: "Curved Design", d: "Blades shaped for swift, cutting strikes." },
                { n: "Sharpness Retention", d: "Edges that never dull." }
            ]},
            { title: "Dwarven Axes", steps: [
                { n: "Heavy Heads", d: "Axes designed for momentum and crushing power." },
                { n: "Balance Counterweights", d: "Ensuring heavy weapons are wieldable." },
                { n: "Rune Inscription", d: "Carving magical runes for added power." },
                { n: "Beard Guards", d: "Protecting the wielder's face." },
                { n: "Troll Cleaving", d: "Designed to cut through thick hide." }
            ]},
            { title: "Numenorean Steel", steps: [
                { n: "Lost Alloys", d: "Rediscovering ancient metal recipes." },
                { n: "Sea-Tempering", d: "Quenching blades in the ocean." },
                { n: "Hollow-Ground Edges", d: "Razor sharp swords." },
                { n: "Ancestral Heirlooms", d: "Weapons passed down for generations." },
                { n: "Kings' Swords", d: "Blades fit for royalty." }
            ]},
            { title: "Bowmanship", steps: [
                { n: "Yew Wood", d: "The best wood for bows." },
                { n: "Mallorn Recurve", d: "Elven bow design." },
                { n: "Black Arrow Tips", d: "Piercing dragon scales." },
                { n: "Elven Sight", d: "Training for extreme range." },
                { n: "Rapid Fire", d: "Shooting many arrows quickly." }
            ]},
            { title: "Orcish Weaponry", steps: [
                { n: "Crude Iron", d: "Rough but effective metal." },
                { n: "Serrated Edges", d: "Blades designed to tear." },
                { n: "Scimitar Curves", d: "Swords for slashing." },
                { n: "Mass Production", d: "Arming thousands quickly." },
                { n: "Poisoned Blades", d: "Adding toxins to weapons." }
            ]},
            { title: "Siege Engines", steps: [
                { n: "Grond's Legacy", d: "Building massive battering rams." },
                { n: "Counterweight Trebuchets", d: "Hurling stones over walls." },
                { n: "Explosive Powder (Saruman)", d: "The fire of Orthanc." },
                { n: "Ballistae", d: "Giant crossbows." },
                { n: "Great Rams", d: "Breaking gates." }
            ]},
            { title: "Mithril Armor", steps: [
                { n: "Lightweight Chain", d: "Armor as light as a feather." },
                { n: "Impenetrable Links", d: "Harder than dragon scales." },
                { n: "Silver Shine", d: "Beautiful and functional." },
                { n: "Dragon Proofing", d: "Resisting fire and claws." },
                { n: "King's Gift", d: "Armor fit for a prince." }
            ]},
            { title: "Ranger Gear", steps: [
                { n: "Cloaks of Lorien", d: "Camouflage that hides from sight." },
                { n: "Star-glass Phials", d: "Light in dark places." },
                { n: "Dunedain Swords", d: "Simple, deadly blades." },
                { n: "Survival Knives", d: "Tools for the wild." },
                { n: "Stealth Kits", d: "Moving silently." }
            ]},
            { title: "Wizard Staves", steps: [
                { n: "Wood Selection", d: "Choosing the right branch." },
                { n: "Crystal Focusing", d: "Mounting a gem." },
                { n: "Light Projection", d: "Creating light." },
                { n: "Shattering Blows", d: "Breaking bridges." },
                { n: "Power Storage", d: "Holding magic." }
            ]},
            { title: "The One Ring", steps: [
                { n: "Gold Casting", d: "Forging the band." },
                { n: "Elven Script", d: "Hidden words." },
                { n: "Invisibility", d: "Disappearing from sight." },
                { n: "Domination", d: "Controlling minds." },
                { n: "Shadow World", d: "Entering the wraith world." }
            ]}
        ],
        TECH: [
            { title: "Masonry", steps: [
                { n: "Stone Cutting", d: "Fitting rocks perfectly." },
                { n: "Seamless Joints", d: "Walls without gaps." },
                { n: "White Stone", d: "Minas Tirith architecture." },
                { n: "Tower Construction", d: "Building high spires." },
                { n: "Orthanc Stone", d: "Indestructible black rock." }
            ]},
            { title: "Shipbuilding", steps: [
                { n: "Swan Ships", d: "Elven boats." },
                { n: "Numenorean Hulls", d: "Ancient sea craft." },
                { n: "Grey Havens Craft", d: "Ships for the West." },
                { n: "River Barges", d: "Transport on the Anduin." },
                { n: "Corsair Sails", d: "Pirate ships." }
            ]},
            { title: "Forgecraft", steps: [
                { n: "Bellows Efficiency", d: "Hotter fires." },
                { n: "Smelting Pits", d: "Refining ore." },
                { n: "Deep Mining", d: "Digging for mithril." },
                { n: "Mithril Extraction", d: "Getting the precious metal." },
                { n: "Ring Making", d: "Crafting magical rings." }
            ]},
            { title: "Agriculture", steps: [
                { n: "Pipe-weed Cultivation", d: "Growing the best leaf." },
                { n: "Shire Farming", d: "Feeding hobbits." },
                { n: "Grain Stores", d: "Preparing for winter." },
                { n: "Ent-Draughts", d: "Magical water." },
                { n: "Mallorn Planting", d: "Growing golden trees." }
            ]},
            { title: "Architecture", steps: [
                { n: "Hobbit Holes", d: "Comfortable underground homes." },
                { n: "Tree Flets", d: "Living in trees." },
                { n: "Deep Halls", d: "Cities under mountains." },
                { n: "White Cities", d: "Stone capitals." },
                { n: "Dark Towers", d: "Fortresses of evil." }
            ]},
            { title: "Medicine", steps: [
                { n: "Athelas usage", d: "Healing with kingsfoil." },
                { n: "Elven Healing", d: "Magical cures." },
                { n: "Leechcraft", d: "Traditional medicine." },
                { n: "Herbalism", d: "Using plants." },
                { n: "King's Foil", d: "The hands of the king." }
            ]},
            { title: "Communication", steps: [
                { n: "Beacon Fires", d: "Lighting the fires of Gondor." },
                { n: "Palantir Stones", d: "Seeing stones." },
                { n: "Messenger Birds", d: "Sending thrushes." },
                { n: "Moth Whispering", d: "Talking to bugs." },
                { n: "Signal Horns", d: "Blowing the horn." }
            ]},
            { title: "Industrialization", steps: [
                { n: "Isengard Machinery", d: "Wheels and gears." },
                { n: "Water Wheels", d: "Powering mills." },
                { n: "Logging Operations", d: "Cutting down Fangorn." },
                { n: "Blast Furnaces", d: "Melting iron." },
                { n: "Orc Labor", d: "Slaves working." }
            ]},
            { title: "Cartography", steps: [
                { n: "Map Making", d: "Drawing Middle-earth." },
                { n: "Star Navigation", d: "Sailing by stars." },
                { n: "Ranger Lore", d: "Knowing the land." },
                { n: "Hidden Paths", d: "Secret doors." },
                { n: "Moon Letters", d: "Writing that shows in moonlight." }
            ]},
            { title: "Jewelcraft", steps: [
                { n: "Gem Cutting", d: "Shaping stones." },
                { n: "Silmarils", d: "Light of the trees." },
                { n: "Arkenstone Polishing", d: "The heart of the mountain." },
                { n: "Light Trapping", d: "Capturing starlight." },
                { n: "Star Glass", d: "Phials of light." }
            ]}
        ],
        MAGIC: [
            { title: "Ring-Lore", steps: [
                { n: "Minor Rings", d: "Essays in the craft." },
                { n: "Ring of Power", d: "Binding magic." },
                { n: "Invisibility", d: "Unseen realm." },
                { n: "Life Extension", d: "Stretching life." },
                { n: "Shadow World", d: "Wraith sight." }
            ]},
            { title: "Songs of Power", steps: [
                { n: "Elven Hymns", d: "Singing to the stars." },
                { n: "Battle Chants", d: "Courage in song." },
                { n: "Creation Music", d: "Ainulindale." },
                { n: "Healing Songs", d: "Curing with voice." },
                { n: "Word of Command", d: "Spoken power." }
            ]},
            { title: "Palantir Seeing", steps: [
                { n: "Stone Gasing", d: "Looking into the stone." },
                { n: "Mind Linking", d: "Communicating afar." },
                { n: "Far Sight", d: "Seeing distances." },
                { n: "Will Contests", d: "Fighting Sauron." },
                { n: "Future Glimpses", d: "Seeing what may be." }
            ]},
            { title: "Nature Magic", steps: [
                { n: "Ent-talk", d: "Speaking to trees." },
                { n: "Eagle Friendship", d: "Calling the eagles." },
                { n: "River Spirit Calling", d: "Summoning floods." },
                { n: "Weather Sense", d: "Predicting storms." },
                { n: "Animal Speech", d: "Talking to beasts." }
            ]},
            { title: "Light Magic", steps: [
                { n: "Phial of Galadriel", d: "Light of Earendil." },
                { n: "Staff Light", d: "Wizard's torch." },
                { n: "Sunlight Focusing", d: "Burning evil." },
                { n: "Shadow Banishing", d: "Clearing darkness." },
                { n: "Hope Kindling", d: "Inspiring hearts." }
            ]},
            { title: "Dark Sorcery", steps: [
                { n: "Necromancy", d: "Raising wights." },
                { n: "Wraith Binding", d: "Creating Nazgul." },
                { n: "Shadow Manipulation", d: "Darkness covers." },
                { n: "Fear Projection", d: "Aura of terror." },
                { n: "Black Speech", d: "Language of Mordor." }
            ]},
            { title: "Runecraft", steps: [
                { n: "Moon Letters", d: "Secret writing." },
                { n: "Door Warding", d: "Blocking entry." },
                { n: "Weapon Inscription", d: "Glowing blades." },
                { n: "Fire Traps", d: "Explosive runes." },
                { n: "Secret Writing", d: "Hidden messages." }
            ]},
            { title: "Illusion", steps: [
                { n: "Glamour", d: "Elven beauty." },
                { n: "Disguise", d: "Changing face." },
                { n: "Mist Summoning", d: "Hiding rivers." },
                { n: "Voice Projection", d: "Sounding far away." },
                { n: "Appearance Alteration", d: "Looking fair." }
            ]},
            { title: "Prophecy", steps: [
                { n: "Mirror Gazing", d: "Galadriel's mirror." },
                { n: "Dream Interpretation", d: "Meaningful sleep." },
                { n: "Foresight", d: "Seeing ahead." },
                { n: "Doom Reading", d: "Knowing fate." },
                { n: "Fate Weaving", d: "Understanding doom." }
            ]},
            { title: "Maiar Power", steps: [
                { n: "Istari Staffs", d: "Focusing power." },
                { n: "Shape Shifting", d: "Changing form." },
                { n: "Elemental Control", d: "Fire and light." },
                { n: "Immortality", d: "Living forever." },
                { n: "Divine Authority", d: "Power of Valar." }
            ]}
        ],
        MEDICAL: [
            { title: "Herbalism", steps: [
                { n: "Athelas Identification", d: "Finding kingsfoil." },
                { n: "Poultice Making", d: "Treating wounds." },
                { n: "Pipe-weed Calming", d: "Relaxing smoke." },
                { n: "Berry Gathering", d: "Miruvor ingredients." },
                { n: "Root Brewing", d: "Healing teas." }
            ]},
            { title: "Elven Healing", steps: [
                { n: "Song of Restoration", d: "Singing health." },
                { n: "Light Infusion", d: "Curing with light." },
                { n: "Spirit Mending", d: "Fixing souls." },
                { n: "Wound Closing", d: "Knitting flesh." },
                { n: "Life Preservation", d: "Stopping death." }
            ]},
            { title: "Leechcraft", steps: [
                { n: "Bloodletting", d: "Old medicine." },
                { n: "Humor Balancing", d: "Traditional cures." },
                { n: "Bandaging", d: "Wrapping cuts." },
                { n: "Bone Setting", d: "Fixing breaks." },
                { n: "Potion Mixing", d: "Basic meds." }
            ]},
            { title: "Ranger Medicine", steps: [
                { n: "Field Surgery", d: "Healing in wild." },
                { n: "Antitoxins", d: "Curing poison." },
                { n: "Splinting", d: "Fixing limbs." },
                { n: "Pain Relief", d: "Numbing herbs." },
                { n: "Fast Recovery", d: "Resting quickly." }
            ]},
            { title: "Ent-Draughts", steps: [
                { n: "Growth Stimulation", d: "Getting taller." },
                { n: "Vitality Boost", d: "Feeling energy." },
                { n: "Water Purification", d: "Clean drink." },
                { n: "Deep Roots", d: "Strong bones." },
                { n: "Tree Healing", d: "Curing plants." }
            ]},
            { title: "Mithril Mesh", steps: [
                { n: "Light Armor", d: "Protection." },
                { n: "Wound Prevention", d: "Stopping cuts." },
                { n: "Healing Properties", d: "Magic metal." },
                { n: "Unbreaking", d: "Never failing." },
                { n: "Gift of Kings", d: "Royal favor." }
            ]},
            { title: "Lembas Bread", steps: [
                { n: "Nutrient Density", d: "One bite fills." },
                { n: "Hunger Suppression", d: "Not eating." },
                { n: "Long Storage", d: "Never spoiling." },
                { n: "Elven Baking", d: "Secret recipe." },
                { n: "Waybread", d: "Travel food." }
            ]},
            { title: "Miruvor", steps: [
                { n: "Cordial Brewing", d: "Elven drink." },
                { n: "Strength Renewal", d: "Getting energy." },
                { n: "Warmth Giving", d: "Resisting cold." },
                { n: "Fatigue Removal", d: "Staying awake." },
                { n: "Spirit Lift", d: "Feeling hope." }
            ]},
            { title: "King's Touch", steps: [
                { n: "Hands of the Healer", d: "Royal power." },
                { n: "Royal Lineage", d: "Proof of king." },
                { n: "Black Breath Cure", d: "Healing Nazgul wound." },
                { n: "Despair Banishing", d: "Curing sadness." },
                { n: "Hope Restoration", d: "Bringing light." }
            ]},
            { title: "Immortality", steps: [
                { n: "Elven Grace", d: "Living forever." },
                { n: "Ring Preservation", d: "Stretched thin." },
                { n: "Undying Lands", d: "Going west." },
                { n: "Valar Blessing", d: "Godly gift." },
                { n: "Eternal Life", d: "Never dying." }
            ]}
        ],
        ECONOMIC: [
            { title: "Barter", steps: [
                { n: "Goods Exchange", d: "Trading items." },
                { n: "Favor Trading", d: "I owe you." },
                { n: "Gift Giving", d: "Mathom exchange." },
                { n: "Hospitality", d: "Guest rights." },
                { n: "Fair Dealing", d: "Honest trade." }
            ]},
            { title: "Mithril Trade", steps: [
                { n: "Mining Rights", d: "Digging deep." },
                { n: "Dwarven Wealth", d: "Rich mountains." },
                { n: "Precious Metals", d: "Gold and silver." },
                { n: "Armor Sales", d: "Selling coats." },
                { n: "Infinite Value", d: "Priceless." }
            ]},
            { title: "Pipe-weed", steps: [
                { n: "Cultivation", d: "Growing leaf." },
                { n: "Export", d: "Selling to Isengard." },
                { n: "Varieties", d: "Longbottom Leaf." },
                { n: "Smoking Culture", d: "Relaxing." },
                { n: "Southfarthing Leaf", d: "The best." }
            ]},
            { title: "Trade Routes", steps: [
                { n: "The Greenway", d: "Old road." },
                { n: "Anduin River", d: "Water transport." },
                { n: "Dwarven Roads", d: "Mountain paths." },
                { n: "Elven Paths", d: "Forest trails." },
                { n: "Sea Lanes", d: "Ships to Gondor." }
            ]},
            { title: "Coinage", steps: [
                { n: "Silver Pennies", d: "Small money." },
                { n: "Gold Pieces", d: "Large money." },
                { n: "Royal Mint", d: "Making coins." },
                { n: "Treasure Hoards", d: "Dragon loot." },
                { n: "Dragon Gold", d: "Cursed wealth." }
            ]},
            { title: "Craftsmanship", steps: [
                { n: "Elven Art", d: "Beautiful things." },
                { n: "Dwarven Toys", d: "Mechanical wonder." },
                { n: "Human Tools", d: "Useful items." },
                { n: "Hobbit Food", d: "Delicious meals." },
                { n: "Quality Goods", d: "Built to last." }
            ]},
            { title: "Horse Breeding", steps: [
                { n: "Rohan Steeds", d: "Fast horses." },
                { n: "Mearas Bloodline", d: "King of horses." },
                { n: "Cavalry Sales", d: "War horses." },
                { n: "Fast Travel", d: "Riding." },
                { n: "Mounted Economy", d: "Value of herds." }
            ]},
            { title: "Agriculture", steps: [
                { n: "Shire Harvests", d: "Plenty of food." },
                { n: "Gondor Fields", d: "Feeding the city." },
                { n: "Pellenor Grain", d: "Wheat fields." },
                { n: "Wine Making", d: "Dorwinion wine." },
                { n: "Food Security", d: "Not starving." }
            ]},
            { title: "Gemstones", steps: [
                { n: "Mining", d: "Digging gems." },
                { n: "Cutting", d: "Shaping stones." },
                { n: "Setting", d: "Jewelry making." },
                { n: "Arkenstone", d: "King's jewel." },
                { n: "Silmarils", d: "Holy gems." }
            ]},
            { title: "Dragon Hoards", steps: [
                { n: "Smaug's Gold", d: "Lonely Mountain." },
                { n: "Looting", d: "Taking treasure." },
                { n: "Curse Breaking", d: "Safe gold." },
                { n: "Wealth Redistribution", d: "Sharing loot." },
                { n: "Economy Crash", d: "Too much gold." }
            ]}
        ],
        POLITICAL: [
            { title: "Steward's Rule", steps: [
                { n: "Regency", d: "Ruling for king." },
                { n: "Beacon Lighting", d: "Calling aid." },
                { n: "City Defense", d: "Protecting Minas Tirith." },
                { n: "Line of Kings", d: "Remembering." },
                { n: "Caretaker", d: "Waiting." }
            ]},
            { title: "Council of Elrond", steps: [
                { n: "Alliance Building", d: "Uniting races." },
                { n: "Lore Sharing", d: "Telling history." },
                { n: "Common Enemy", d: "Fighting Sauron." },
                { n: "Ring Debate", d: "What to do." },
                { n: "Fellowship", d: "The nine." }
            ]},
            { title: "King's Return", steps: [
                { n: "Lineage Proof", d: "Ring of Barahir." },
                { n: "Sword Reforging", d: "Anduril." },
                { n: "Oath Fulfillment", d: "Dead men." },
                { n: "Coronation", d: "Crowning." },
                { n: "United Kingdom", d: "Gondor and Arnor." }
            ]},
            { title: "Thain's Authority", steps: [
                { n: "Shire Moot", d: "Hobbit meeting." },
                { n: "Mayor Election", d: "Voting." },
                { n: "Border Control", d: "Bounders." },
                { n: "Feasts", d: "Parties." },
                { n: "Mathoms", d: "Gifts." }
            ]},
            { title: "Dwarven Lords", steps: [
                { n: "Clan Elders", d: "Old dwarves." },
                { n: "King Under the Mountain", d: "Ruler of Erebor." },
                { n: "Reclaiming Homes", d: "Taking Moria." },
                { n: "Gold Greed", d: "Dragon sickness." },
                { n: "Stubbornness", d: "Refusing help." }
            ]},
            { title: "Elven Lords", steps: [
                { n: "Galadriel's Wisdom", d: "Seeing all." },
                { n: "Elrond's Healing", d: "Restoring." },
                { n: "Thranduil's Isolation", d: "Closing borders." },
                { n: "Grey Havens", d: "Leaving." },
                { n: "Leaving Middle-earth", d: "End of age." }
            ]},
            { title: "Horse Lords", steps: [
                { n: "King of Rohan", d: "Theoden." },
                { n: "Marshals", d: "Generals." },
                { n: "Riders", d: "Soldiers." },
                { n: "Oath of Eorl", d: "Alliance." },
                { n: "Horn Blowing", d: "Charge." }
            ]},
            { title: "Dark Lord", steps: [
                { n: "Sauron's Will", d: "Domination." },
                { n: "Nazgul Command", d: "Wraiths." },
                { n: "Orc Fear", d: "Driving troops." },
                { n: "Total War", d: "Destruction." },
                { n: "Shadow Spreading", d: "Darkness." }
            ]},
            { title: "Wizard's Counsel", steps: [
                { n: "Gandalf's Guide", d: "Helping heroes." },
                { n: "Saruman's Voice", d: "Betrayal." },
                { n: "Radagast's Beasts", d: "Nature aid." },
                { n: "Blue Wizards", d: "Lost in East." },
                { n: "Subtle Influence", d: "Nudging fate." }
            ]},
            { title: "Free Peoples", steps: [
                { n: "Alliance", d: "Working together." },
                { n: "Resistance", d: "Fighting back." },
                { n: "Hope", d: "Believing." },
                { n: "Bravery", d: "Courage." },
                { n: "Victory", d: "Winning." }
            ]}
        ]
    }
};


// =============================================================================
// FLAVOR TEXT GENERATOR CONFIGURATION
// =============================================================================

const FLAVOR_VERBS = {
    // Industrial / Militaristic / Grim (Midlands, Warhammer, etc.)
    industrial: {
        WEAPONS: ["Forges", "Tempers", "Refines", "Mass-produces", "Perfects"],
        TECH: ["Engineers", "Constructs", "Industrializes", "Excavates", "Builds"],
        MAGIC: ["Ritualizes", "Codifies", "Binds", "Harnesses", "Commands"],
        MEDICAL: ["Administers", "Cauterizes", "Amputates", "Treats", "Preserves"],
        ECONOMIC: ["Monetizes", "Taxes", "Hoards", "Trades", "Regulates"],
        POLITICAL: ["Decrees", "Enforces", "Subjugates", "Rules", "Dominates"]
    },
    // Whimsical / Organic / Magical (Mushroom Kingdom, Animatopia, etc.)
    whimsical: {
        WEAPONS: ["Crafts", "Sprouts", "Enchants", "Bounces", "Super-charges"],
        TECH: ["Tinkers", "Grows", "Invents", "Imagines", "Dreams up"],
        MAGIC: ["Weaves", "Sings", "Wishes", "Sparkles", "Transforms"],
        MEDICAL: ["Heals", "Soothses", "Revives", "Nurtures", "Comforts"],
        ECONOMIC: ["Collects", "Shares", "Gathers", "Swaps", "Blooms"],
        POLITICAL: ["Guidies", "Unites", "Celebrates", "Harmony", "Friends"]
    },
    // Digital / Sci-Fi / Cosmic (Internet, Kivotos, Doughnut Hole)
    digital: {
        WEAPONS: ["Compiles", "Weaponizes", "Calculates", "Upgrades", "Optimizes"],
        TECH: ["Programs", "Downloads", "Hacks", "Simulates", "Networks"],
        MAGIC: ["Encodes", "Glitches", "Encrypts", "Virtualizes", "Ascends"],
        MEDICAL: ["Patches", "Reboots", "Scans", "Repairs", "Restore"],
        ECONOMIC: ["Mines", "Transactions", "Invests", "Speculates", "Automates"],
        POLITICAL: ["Moderates", "Governs", "Surveils", "Protocols", "Controls"]
    }
};

const FLAVOR_CONTEXTS = {
    WEAPONS: ["to crush the opposition.", "for superior firepower.", "to pierce any defense.", "for tactical advantage.", "to ensure victory."],
    TECH: ["to boost efficiency.", "for structural integrity.", "to automate the mundane.", "for scientific breakthrough.", "to build the future."],
    MAGIC: ["to warp reality.", "for unlimited power.", "to bind the elements.", "for arcane supremacy.", "to defy the laws of nature."],
    MEDICAL: ["to cheat death.", "for rapid recovery.", "to purge disease.", "for biological perfection.", "to extend life."],
    ECONOMIC: ["to amass wealth.", "for market dominance.", "to bankrupt rivals.", "for unlimited resources.", "to fuel the war machine."],
    POLITICAL: ["to ensure loyalty.", "for absolute authority.", "to suppress dissent.", "for imperial glory.", "to maintain order."]
};

const NATION_THEMES = {
    midlands: 'industrial',
    warhammer: 'industrial',
    middle_earth: 'industrial',
    grand_country: 'industrial',
    mushroom_kingdom: 'whimsical',
    animatopia: 'whimsical',
    leclaire_isle: 'whimsical',
    pokemon: 'whimsical',
    equestria: 'whimsical',
    internet: 'digital',
    kivotos: 'digital',
    doughnut_hole: 'digital',
    teyvat: 'digital'
};

// =============================================================================
// EXPORT GENERATOR
// =============================================================================

export const RESEARCH_FLAVOR = {};

function generateFlavorText(nation, category, techName, tierTitle, nodeIndex) {
    const theme = NATION_THEMES[nation] || 'industrial';
    const verbs = FLAVOR_VERBS[theme][category];
    const contexts = FLAVOR_CONTEXTS[category];
    
    // Pseudo-random selection based on node index to keep it deterministic but varied
    const verb = verbs[nodeIndex % verbs.length];
    const context = contexts[(nodeIndex + techName.length) % contexts.length];
    
    return `${verb} **${techName}** ${context} A key advancement in the ${tierTitle} doctrine.`;
}

// Process the TECH_DATA into the format expected by research-data.js
// Structure: RESEARCH_FLAVOR[nation][category][tier_index][node_index]
for (const nation in TECH_DATA) {
    RESEARCH_FLAVOR[nation] = {};
    for (const category in TECH_DATA[nation]) {
        RESEARCH_FLAVOR[nation][category] = {};
        const tiers = TECH_DATA[nation][category];
        
        tiers.forEach((tierData, tIndex) => {
            const tierNum = tIndex + 1;
            RESEARCH_FLAVOR[nation][category][tierNum] = [];
            
            tierData.steps.forEach((step, nIndex) => {
                const nodeNum = nIndex + 1;
                
                // Generate effect text based on position
                let effectText = "";
                if (category === 'WEAPONS') effectText = `Military Strength +${tierNum * 2}%`;
                else if (category === 'MAGIC') effectText = `Mana Capacity +${tierNum * 5}%`;
                else if (category === 'TECH') effectText = `Construction Speed +${tierNum * 3}%`;
                else if (category === 'MEDICAL') effectText = `Casualty Rate -${tierNum * 2}%`;
                else if (category === 'ECONOMIC') effectText = `GDP Growth +${tierNum * 4}%`;
                else if (category === 'POLITICAL') effectText = `Political Influence +${tierNum * 3}%`;

                // Use the specific description provided in the object
                let flavorText = step.d;

                RESEARCH_FLAVOR[nation][category][tierNum].push(
                    n(step.n, flavorText, effectText)
                );
            });
        });
    }
}

// Fallback
RESEARCH_FLAVOR.default = RESEARCH_FLAVOR.midlands;
