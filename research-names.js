
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
    },
    "pokemon": {
        "MEDICAL": [
            { "title": "Berry Medicine", "steps": [ { "n": "Oran Farming", "d": "Cultivating Oran Berries to provide basic, natural biological healing for minor injuries." }, { "n": "Potion Chemistry", "d": "Synthesizing chemical sprays that accelerate cell regeneration to close wounds instantly." }, { "n": "Antidote Synthesis", "d": "Creating counter-toxins that neutralize organic poisons from moves like Poison Sting." }, { "n": "Status Cure Labs", "d": "Developing specialized compounds like Paralyze Heals and Awakenings to target nervous system disruptions." }, { "n": "Revival Crystal", "d": "Formulating Max Revives using concentrated energy crystals to restore consciousness and full stamina." } ]},
            { "title": "Center Logistics", "steps": [ { "n": "Healing Machine", "d": "The iconic tray-based device that instantly restores HP and PP through rapid energy transfer." }, { "n": "PC Link System", "d": "The network interface allowing trainers to deposit and withdraw Pokémon from digital stasis." }, { "n": "Recovery Bed", "d": "Specialized resting stations for Pokémon needing long-term observation rather than instant healing." }, { "n": "Audino Assistants", "d": "Training helper Pokémon like Chansey or Audino to assist in triage and calming patients." }, { "n": "Global Link", "d": "A worldwide network ensuring a trainer's medical ID and storage boxes are accessible in any region." } ]},
            { "title": "Vitamin Chemistry", "steps": [ { "n": "Protein Synth", "d": "Creating muscle-building supplements that permanently enhance physical Attack potential." }, { "n": "Iron Fortification", "d": "Developing mineral-dense compounds to harden scales and skin for better Defense." }, { "n": "Calcium Enrichment", "d": "Synthesizing supplements that boost Special Attack capabilities and energy projection." }, { "n": "Zinc Enhancement", "d": "Creating compounds that improve metabolic resistance to special energy attacks." }, { "n": "Carbos Acceleration", "d": "Formulating rapid-twitch muscle enhancers to increase base Speed." } ]},
            { "title": "Combat Enhancers", "steps": [ { "n": "X Attack Injection", "d": "A temporary battle stimulant that spikes adrenaline to boost physical power." }, { "n": "X Defend Shield", "d": "A spray-on hardening agent that temporarily increases physical durability in combat." }, { "n": "Dire Hit Focus", "d": "A distinct compound that sharpens senses, drastically increasing the odds of landing critical hits." }, { "n": "Guard Spec Mist", "d": "A consumable mist that prevents stat reduction by creating a temporary psych-barrier." }, { "n": "Full Restore Mix", "d": "The ultimate medical combining potion, curing ailments and healing injuries simultaneously." } ]},
            { "title": "Pokérus Virology", "steps": [ { "n": "Viral Isolation", "d": "Extracting the microscopic Pokérus lifeform for study in a controlled lab environment." }, { "n": "Host Symbiosis", "d": "Understanding how the virus bonds with the host to double physical growth rates (EVs)." }, { "n": "Contagion Phase", "d": "Managing the brief contagious period where the virus spreads to other party members." }, { "n": "Antibody Immunity", "d": "Documenting the phase where the host becomes immune to spread but retains the benefits." }, { "n": "Strain Mutation", "d": "Theoretical research into engineering strains that boost specific stats like Speed or Defense." } ]},
            { "title": "Paleontology", "steps": [ { "n": "Amber Extraction", "d": "Recovering preserved DNA from Old Amber to resurrect the Aerodactyl species." }, { "n": "Helix Sequencing", "d": "Reconstructing the genome of Omanyte from spiraled fossil remains." }, { "n": "Dome Regeneration", "d": "Using the Dome Fossil to clone and revive the Kabuto species." }, { "n": "Galar Combinations", "d": "The controversial practice of fusing mismatched fossil halves to create draconic abominations." }, { "n": "Prehistoric Park", "d": "Establishing controlled biomes where revived ancient species can thrive safely." } ]},
            { "title": "Advanced Genetics", "steps": [ { "n": "IV Determination", "d": "Analyzing a Pokémon's innate genetic potential (Individual Values) at birth." }, { "n": "EV Optimization", "d": "Structuring training to maximize Effort Values in specific stats for competitive viability." }, { "n": "Egg Move Transfer", "d": "Breeding specific parents to pass down powerful moves the offspring cannot learn naturally." }, { "n": "Nature Mints", "d": "Using genetically modified herbs to alter how a Pokémon's stats grow, overriding their nature." }, { "n": "Ability Patch", "d": "A rare item that permanently unlocks a Pokémon's dormant Hidden Ability." } ]},
            { "title": "Fusion Science", "steps": [ { "n": "DNA Splicers", "d": "A device created to merge Kyurem with Reshiram or Zekrom into a single entity." }, { "n": "N-Solarizer", "d": "Technology allowing Necrozma to absorb Solgaleo and assume its Dusk Mane form." }, { "n": "N-Lunarizer", "d": "Technology allowing Necrozma to absorb Lunala and assume its Dawn Wings form." }, { "n": "Type Null", "d": "The Aether Foundation's chimera project designed to synthesize the strengths of all 18 types." }, { "n": "Ultra Beast Energy", "d": "Studying the extradimensional biology of Ultra Beasts to understand their stat distributions." } ]},
            { "title": "Mega Evolution", "steps": [ { "n": "Keystone Resonance", "d": "The trainer's catalyst item required to trigger the frequency of Mega Evolution." }, { "n": "Mega Stone Core", "d": "A Pokémon-specific crystal that mutates the holder's biology during battle." }, { "n": "Bond Synchronization", "d": "The metaphysical requirement of high friendship for the energy transfer to remain stable." }, { "n": "Primal Reversion", "d": "A primal variant of evolution fueled by nature energy rather than trainer bonds (Groudon/Kyogre)." }, { "n": "Genetic Overload", "d": "Managing the immense physical stress placed on a Pokémon's body during transformation." } ]},
            { "title": "Infinity Energy", "steps": [ { "n": "Life Force Extraction", "d": "The ancient and taboo method of draining Pokémon life energy to fuel technology." }, { "n": "Devon Corp Refinement", "d": "Modern, ethical synthesis of Infinity Energy to power rockets and submarines." }, { "n": "Ultimate Weapon", "d": "The historical doomsday device built by AZ fueled by the life force of thousands." }, { "n": "Project AZOTH", "d": "Magma/Aqua's attempt to utilize ancient energy for primal awakening." }, { "n": "Eternal Flower", "d": "The byproduct of immortality, a flower granted eternal life alongside AZ's Floette." } ]}
        ],
        "TECH": [
            { "title": "Ball Manufacturing", "steps": [ { "n": "Apricorn Carving", "d": "The traditional Johto art of hollowing specific nuts to create specialty capture devices." }, { "n": "Silph Co Standard", "d": "Mass production of the red-and-white Poké Ball using shrink-containment technology." }, { "n": "Great Ball Alloys", "d": "Reinforcing the catch mechanism with higher grade materials for a better catch rate." }, { "n": "Ultra Ball Circuitry", "d": "Advanced internal sensors that double the catch rate compared to standard models." }, { "n": "Master Ball Prototype", "d": "The ultimate capture device that bypasses all resistance checks for a guaranteed catch." } ]},
            { "title": "PC Storage System", "steps": [ { "n": "Digitization", "d": "Converting a Pokémon's physical matter into digital data for long-term storage." }, { "n": "Box Management", "d": "Organizing stored data into user-friendly interface boxes sorting by type or level." }, { "n": "Bill's Network", "d": "The foundational Kanto protocol that allows for regional data transfer." }, { "n": "Lanette's Upgrade", "d": "Hoenn's interface improvement allowing for easier moving and organization of data." }, { "n": "Pokémon Home", "d": "Cloud-based storage allowing transfers across different regions and hardware generations." } ]},
            { "title": "Regional Transport", "steps": [ { "n": "Mach Bike", "d": "A high-speed bicycle capable of riding up muddy slopes and crumbling floors." }, { "n": "Magnet Train", "d": "A maglev rail system connecting Kanto's Saffron City to Johto's Goldenrod City." }, { "n": "SS Anne Liner", "d": "Luxury ocean travel for trainers, often serving as a venue for battles and trades." }, { "n": "Flying Taxi", "d": "Using Corviknight or other strong fliers to airlift trainers between cities instantly." }, { "n": "Warp Tiles", "d": "Teleportation pads used primarily in corporate buildings like Silph Co and Gyms." } ]},
            { "title": "Trainer Comms", "steps": [ { "n": "PokéNav Plus", "d": "Hoenn's all-in-one device featuring maps, berry tracking, and buzznav news." }, { "n": "C-Gear", "d": "Unova's communication watch allowing infrared and wireless connection to nearby trainers." }, { "n": "Holocaster", "d": "Kalos's holographic projector for receiving news updates and face-to-face calls." }, { "n": "Rotom Phone", "d": "A smartphone possessed by a Rotom, providing an intelligent map and Pokédex interface." }, { "n": "Y-Comm", "d": "Galar's specialized local network for trading and finding raid battles." } ]},
            { "title": "Pokedex Database", "steps": [ { "n": "Optical Sensors", "d": "Scanning a Pokémon's visual profile to register it as 'Seen' in the database." }, { "n": "Data Compilation", "d": "Aggregating weight, height, footprint, and cry data into a comprehensive entry." }, { "n": "Habitat Mapping", "d": "Tracking and displaying the geographical distribution of species across the region." }, { "n": "National Mode", "d": "A software upgrade expanding the database to include species from all known regions." }, { "n": "Professor Sync", "d": "Automatically uploading field data to the regional Professor's lab for research." } ]},
            { "title": "Silph Scope Tech", "steps": [ { "n": "Spectral Imaging", "d": "Using specialized lenses to reveal the true form of Ghost-type Pokémon." }, { "n": "Illusion Bypass", "d": " piercing through psychic projections or gas-based camouflage." }, { "n": "Thermal Night Vision", "d": "Enhancing visibility in dark environments like Rock Tunnel or Pokémon Tower." }, { "n": "Devon Scope", "d": "A competitor product from Hoenn designed to reveal invisible Kecleon." }, { "n": "Item Finding", "d": "Integrating Dowsing Machine tech to locate hidden objects in the environment." } ]},
            { "title": "Disc Media", "steps": [ { "n": "TM Writing", "d": "Encoding the muscle memory and energy patterns of a move onto a Technical Machine disc." }, { "n": "HM Persistence", "d": "Creating Hidden Machines with undeletable data for essential field moves like Surf." }, { "n": "Breakable DRM", "d": "Older TMs that shattered after a single use due to data transfer stress." }, { "n": "Reusable Chips", "d": "Modern TMs built on durable flash memory, allowing infinite uses." }, { "n": "TR Disposal", "d": "Galar's 'Technical Records' that act as powerful, single-use move tutors." } ]},
            { "title": "Combat Simulations", "steps": [ { "n": "Battle Tower AI", "d": "Procedurally generating high-level trainer teams to test a player's streak capability." }, { "n": "Institute VR", "d": "Virtual Reality setups used in academies to teach type matchups without physical harm." }, { "n": "Battle Factory", "d": "A rental facility where trainers must adapt to random Pokémon rather than their own." }, { "n": "Subway Bosses", "d": "Elite AI conductors who manage the Battle Subway's high-speed combat trains." }, { "n": "PWT", "d": "The Pokémon World Tournament, simulating battles against historic Gym Leaders and Champions." } ]},
            { "title": "Terastal Phenomenon", "steps": [ { "n": "Tera Orb Charging", "d": "Absorbing energy from Paldea's crystals to enable a single transformation." }, { "n": "Crystallization", "d": "Encasing the Pokémon in a gem-like shell that alters its defensive type profile." }, { "n": "Tera Blast", "d": "A unique move that converts the user's highest attack stat into the Tera Type's damage." }, { "n": "Stellar Type", "d": "A rare, rainbow-colored Tera form that boosts all move types once per battle." }, { "n": "Area Zero Core", "d": "The deep crater source of all Terastal energy, guarded by paradoxes." } ]},
            { "title": "Paradox Engineering", "steps": [ { "n": "Iron Treads", "d": "A robotic relative of Donphan with treads and metallic armor from the future." }, { "n": "Future Drive", "d": "The 'Quark Drive' engine that boosts stats on Electric Terrain." }, { "n": "Time Machine", "d": "Professor Sada/Turo's device capable of pulling entities from different timelines." }, { "n": "Violet Book", "d": "The cryptic expedition log detailing the first sightings of the Iron Pokémon." }, { "n": "Miraidon Tech", "d": "A legendary dragon-bike hybrid that utilizes jet propulsion and gliding capabilities." } ]}
        ],
        "WEAPONS": [
            { "title": "Physical Strikes", "steps": [ { "n": "Scratch", "d": "A basic claw attack used by many early-stage Pokémon." }, { "n": "Tackle", "d": "A full-body charge, the most fundamental combat maneuver." }, { "n": "Bite", "d": "A dark-aligned jaw snap that can cause the opponent to flinch." }, { "n": "Quick Attack", "d": "A high-speed lunge that allows the user to strike before the opponent reacts." }, { "n": "Double-Edge", "d": "A reckless, full-power tackle that damages the user with recoil." } ]},
            { "title": "Special Assault", "steps": [ { "n": "Flamethrower", "d": "A reliable stream of fire that may leave the target burned." }, { "n": "Thunderbolt", "d": "A powerful electric discharge with a chance to paralyze the foe." }, { "n": "Ice Beam", "d": "A freezing ray that can completely immobilize the target in solid ice." }, { "n": "Psychic", "d": "A wave of telekinetic force that can lower the target's mental defenses." }, { "n": "Surf", "d": "Summoning a massive wave to crash down on all active combatants." } ]},
            { "title": "Combat Items", "steps": [ { "n": "Choice Band", "d": "A rigid headband that locks the user into one move but vastly increases physical strength." }, { "n": "Life Orb", "d": "A magical orb that drains the user's vitality to amplify damage output." }, { "n": "Leftovers", "d": "Nutrient-dense food scraps that slowly regenerate health turn by turn." }, { "n": "Rocky Helmet", "d": "Spiked headgear that injures any opponent making direct contact." }, { "n": "Assault Vest", "d": "Defensive gear that grants resistance to special attacks but prevents non-attack moves." } ]},
            { "title": "Battle Strategy", "steps": [ { "n": "Status Affliction", "d": "Using Poison, Burn, or Paralysis to wear down opponents over time." }, { "n": "Weather Control", "d": "Summoning Rain, Sun, Sand, or Hail to boost specific types and hinder others." }, { "n": "Trick Room", "d": "Warping dimensions so that slower Pokémon move first for a short time." }, { "n": "Entry Hazards", "d": "Laying Spikes or Stealth Rocks to damage enemies as they switch into battle." }, { "n": "Pivot Moves", "d": "Attacks like U-turn or Volt Switch that deal damage and switch the user out safely." } ]},
            { "title": "Villain Tech", "steps": [ { "n": "Rocket Whips", "d": "Physical tools used by grunts to coerce Pokémon into obedience." }, { "n": "Capture Net", "d": "Electrified nets used to entrap wild Pokémon without a Poké Ball." }, { "n": "Snag Machine", "d": "A wearable device that hacks a thrown ball to steal an owned Pokémon." }, { "n": "Shadow Process", "d": "Artificially closing a Pokémon's heart to remove inhibition and increase aggression." }, { "n": "Dark Ball", "d": "A modified ball designed to maximize the catch rate of Shadow Pokémon." } ]},
            { "title": "Gym Badge Buffs", "steps": [ { "n": "Obedience Check", "d": "Badges ensure high-level traded Pokémon respect the trainer's commands." }, { "n": "Attack Boost", "d": "Certain badges inherently raise the physical attack power of the trainer's team." }, { "n": "Defense Boost", "d": "Specific badges that harden the team's defense against physical blows." }, { "n": "Speed Boost", "d": "Badges that enhance the reaction time and speed of the trainer's Pokémon." }, { "n": "Special Boost", "d": "Badges that amplify the power of special energy attacks." } ]},
            { "title": "Z-Power", "steps": [ { "n": "Z-Ring", "d": "A bracelet made of sparkling stone that resonates with Z-Crystals." }, { "n": "Trainer Dance", "d": "Specific poses required to transmit Z-Power from trainer to Pokémon." }, { "n": "Z-Crystal", "d": "Type-specific gems that transform a standard move into a nuke." }, { "n": "Ultra Burst", "d": "The energy surge allowing Necrozma to reclaim its true, light-filled form." }, { "n": "Gigavolt Havoc", "d": "A massive electric Z-Move capable of leveling the playing field instantly." } ]},
            { "title": "Dynamax Phenomenon", "steps": [ { "n": "Power Spot", "d": "Geographic nodes in Galar where Galar Particles naturally accumulate." }, { "n": "Wishing Star", "d": "A fragment of Eternatus that allows a Dynamax Band to function." }, { "n": "Gigantamax", "d": "A rare variant where the Pokémon changes form and gains a unique G-Max move." }, { "n": "Max Moves", "d": "Giant-sized attacks that always trigger secondary effects like weather changes." }, { "n": "Eternabeam", "d": "The signature attack of Eternatus, the source of the Dynamax energy." } ]},
            { "title": "Legendary Artifacts", "steps": [ { "n": "Mewtwo Armor", "d": "Giovanni's mechanical suit designed to suppress and focus Mewtwo's psychic power." }, { "n": "Red Chain", "d": "A mystical construct from the Lake Trio capable of binding Dialga and Palkia." }, { "n": "Blue Orb", "d": "An ancient relic that awakens Kyogre's Primal form." }, { "n": "Red Orb", "d": "An ancient relic that awakens Groudon's Primal form." }, { "n": "Griseous Orb", "d": "An item that allows Giratina to maintain its Origin Forme outside the Distortion World." } ]},
            { "title": "Signature Moves", "steps": [ { "n": "Judgment", "d": "Arceus's divine blast that changes type to match its held Plate." }, { "n": "Roar of Time", "d": "Dialga's temporal scream that distorts time but requires a recharge." }, { "n": "Spacial Rend", "d": "Palkia's slash that tears the fabric of space, often landing critical hits." }, { "n": "V-create", "d": "Victini's overwhelming fire charge, the most powerful Fire-type move known." }, { "n": "Dragon Ascent", "d": "Rayquaza's flight maneuver that pierces the atmosphere and triggers Mega Evolution." } ]}
        ],
        "ECONOMIC": [ { "title": "Poké Mart", "steps": [ { "n": "Potion Stock", "d": "Selling basic medical supplies to trainers for field recovery." }, { "n": "Ball Sales", "d": "The primary revenue stream, selling capture devices of varying grades." }, { "n": "Repel Sprays", "d": "Selling chemical deterrents to allow safe travel through wild areas." }, { "n": "Status Heals", "d": "Stocking Antidotes, Paralyze Heals, and Awakenings for specific threats." }, { "n": "Escape Ropes", "d": "Selling emergency exit tools for trainers exploring deep caves." } ]}, { "title": "Regional Currency", "steps": [ { "n": "Poké Dollar", "d": "The universal currency accepted in all known regions, modeled on the yen." }, { "n": "Nugget Bridge", "d": "The practice of awarding solid gold Nuggets to trainers who defeat gauntlets." }, { "n": "Pearl Gathering", "d": "Harvesting pearls from Shellder and Clamperl for high-value trade." }, { "n": "Star Piece", "d": "Rare, extraterrestrial gem fragments that fetch a high price at shops." }, { "n": "BP Exchange", "d": "Battle Points, a secondary currency earned in battle facilities for buying rare items." } ]}, { "title": "Game Corner", "steps": [ { "n": "Slot Machines", "d": "The traditional gambling machines where trainers bet coins for payouts." }, { "n": "Coin Case", "d": "A specialized wallet required to hold the casino-specific currency." }, { "n": "Prize Counter", "d": "The only place to legally purchase rare Pokémon like Porygon or powerful TMs." }, { "n": "Voltorb Flip", "d": "A logic-based game replacing slots in some regions to reduce gambling concerns." }, { "n": "Rocket Front", "d": "The secret use of Game Corners, like in Celadon, to launder money for Team Rocket." } ]}, { "title": "Tourism Industry", "steps": [ { "n": "Safari Zone", "d": "Protected nature reserves charging entry fees for rare capture opportunities." }, { "n": "Contest Halls", "d": "Venues for Pokémon Contests that attract spectators and ad revenue." }, { "n": "Grand Hotels", "d": "Luxury accommodation in cities like Lumiose and Heahea for wealthy travelers." }, { "n": "Museum Exhibits", "d": "Charging admission to view fossils and historical artifacts in Pewter or Nacrene." }, { "n": "Regional Tours", "d": "Guided experiences through landmarks like the Power Plant or Bell Tower." } ]}, { "title": "Breeding Economy", "steps": [ { "n": "Daycare Fees", "d": "Charging trainers to raise their Pokémon, often leading to Egg discovery." }, { "n": "Egg Cycles", "d": "The time investment required to hatch eggs, driving demand for bikes and flame body Pokémon." }, { "n": "Ditto Trade", "d": "The high market value of high-IV Ditto for competitive breeding." }, { "n": "Shiny Market", "d": "The immense value placed on alternately colored Pokémon by collectors." }, { "n": "Masuda Method", "d": "Trading Pokémon internationally to increase shiny odds, driving global engagement." } ]}, { "title": "Underground Mining", "steps": [ { "n": "Grand Underground", "d": "Sinnoh's vast subterranean network rich in spheres and fossils." }, { "n": "Shard Exchange", "d": "Trading colored shards found underground for evolution stones or move tutoring." }, { "n": "Fossil Digging", "d": "Excavating rare fossils like the Skull or Armor Fossil for restoration." }, { "n": "Sphere Trading", "d": "Using buried spheres as a currency with underground hikers." }, { "n": "Secret Bases", "d": "Selling decorations and furniture for personal bases carved into walls." } ]}, { "title": "Berry Agriculture", "steps": [ { "n": "Loamy Soil", "d": "Identifying and maintaining the ideal soil patches for berry growth." }, { "n": "Wailmer Pail", "d": "Using specialized watering cans to maximize berry yield per harvest." }, { "n": "Growth Mulch", "d": "Applying different mulches to speed up growth or prevent soil drying." }, { "n": "Mutation Theory", "d": "Cross-pollinating berries to create rare strains like the Enigma Berry." }, { "n": "Poffin Cooking", "d": "Processing berries into treats that enhance contest stats like Sheen." } ]}, { "title": "Mega Corps", "steps": [ { "n": "Silph Co", "d": "Kanto's tech giant, holding the monopoly on Poké Balls and TMs." }, { "n": "Devon Corp", "d": "Hoenn's leading industrial firm, specializing in fossil revival and Infinity Energy." }, { "n": "Macro Cosmos", "d": "Galar's energy conglomerate managing the power grid and the League." }, { "n": "Aether Foundation", "d": "Alola's conservation organization with massive funding and a private artificial island." }, { "n": "Lysandre Labs", "d": "The Kalos tech company that secretly funded Team Flare's doomsday weapon." } ]}, { "title": "League Revenue", "steps": [ { "n": "Prize Money", "d": "The cash payout system where the loser pays the winner, regulated by the League." }, { "n": "Sponsorships", "d": "Corporate logos on uniforms in Galar, funding the gym challenge." }, { "n": "TV Rights", "d": "Broadcasting major battles like the Masters Eight for massive ad revenue." }, { "n": "Merchandising", "d": "Selling plushies and apparel of popular Pokémon and trainers." }, { "n": "Hall of Fame", "d": "The prestige of the Champion title, which draws challengers and tourism." } ]}, { "title": "Global Trade", "steps": [ { "n": "GTS", "d": "The Global Trade Station, allowing asynchronous trading worldwide." }, { "n": "Wonder Trade", "d": "A blind trading system where the outcome is random, encouraging circulation." }, { "n": "Master Ball Value", "d": "Using the guaranteed catch ball as a high-value currency in player trades." }, { "n": "Mythical Events", "d": "Limited-time distributions of Pokémon like Mew driving store visits." }, { "n": "Bank/Home Subs", "d": "Subscription fees for cloud storage services to transfer collections." } ]} ],
        "POLITICAL": [ { "title": "Trainer Licensing", "steps": [ { "n": "Trainer Card", "d": "The official ID issued to trainers, recording badges and money." }, { "n": "Starter Gift", "d": "The government-sponsored program giving new trainers a rare Pokémon (Fire/Water/Grass)." }, { "n": "Pokedex Duty", "d": "The obligation of license holders to collect data for the regional Professor." }, { "n": "Journey Rite", "d": "The cultural expectation for youths to travel the region and challenge gyms." }, { "n": "Badge Check", "d": "The security clearance required to pass through victory road gates." } ]}, { "title": "Gym System", "steps": [ { "n": "Leader Authority", "d": "Gym Leaders often act as the de facto mayors or protectors of their cities." }, { "n": "Type Specialty", "d": "The requirement for Leaders to master a single type to test challengers." }, { "n": "TM Distribution", "d": "Leaders distributing their signature technique as a reward for victory." }, { "n": "Puzzle Design", "d": "Gyms serving as gauntlets to filter out unworthy trainers before the Leader." }, { "n": "Badge Validation", "d": "The official recognition of a trainer's growth, enabling control of stronger Pokémon." } ]}, { "title": "Elite Four", "steps": [ { "n": "High Council", "d": "The four strongest trainers below the Champion, serving as the final test." }, { "n": "Type Mastery", "d": "Each member is an absolute master of their type, far surpassing Gym Leaders." }, { "n": "Gatekeepers", "d": "Their role is to prevent anyone but the absolute best from challenging the Champion." }, { "n": "Chamber Security", "d": "The consecutive battle rooms where healing is prohibited between matches." }, { "n": "League Governance", "d": "The Elite Four often help administer the region's laws and crisis response." } ]}, { "title": "Champion Title", "steps": [ { "n": "Regional Hero", "d": "The single strongest trainer, serving as the region's protector and face." }, { "n": "Title Defense", "d": "The obligation to battle any challenger who conquers the Elite Four." }, { "n": "Hall of Fame", "d": "The permanent record of Champions and their winning teams." }, { "n": "Political Power", "d": "Champions like Lance or Cynthia often investigate regional threats personally." }, { "n": "Living Legend", "d": "The status of trainers like Red who have transcended the title itself." } ]}, { "title": "Villainous Teams", "steps": [ { "n": "Grunt Recruitment", "d": "Mass recruiting disaffected youths to serve as foot soldiers." }, { "n": "Admin Structure", "d": "The lieutenants who execute the Boss's will and manage field operations." }, { "n": "Team Boss", "d": "The charismatic leader with a grand, often insane, vision for the world." }, { "n": "World Alteration", "d": "Goals ranging from expanding landmasses to resetting the universe." }, { "n": "Hostile Takeover", "d": "Seizing control of key infrastructure like Radio Towers or Power Plants." } ]}, { "title": "Professor Labs", "steps": [ { "n": "Oak's Research", "d": "The study of relationships between Pokémon and humans." }, { "n": "Elm's Discovery", "d": "Research into Pokémon Eggs and breeding mechanics." }, { "n": "Birch's Fieldwork", "d": "Studying Pokémon habitats and distribution in the wild." }, { "n": "Rowan's Evolution", "d": "Investigating the mysteries of why and how Pokémon evolve." }, { "n": "Lab Funding", "d": "State or corporate grants that fund the starter Pokémon program." } ]}, { "title": "Ranger Union", "steps": [ { "n": "Capture Styler", "d": "A device that conveys feelings of friendship to temporarily enlist a Pokémon's help." }, { "n": "Loop Mechanics", "d": "The skill of circling a Pokémon with capture discs to calm them down." }, { "n": "Nature Guardians", "d": "Rangers operate outside the League, focusing on conservation and disaster relief." }, { "n": "Release Protocol", "d": "Rangers always release their partner Pokémon back into the wild after the mission." }, { "n": "Almia/Fiore", "d": "Regions where Rangers are the primary authority rather than Trainers." } ]}, { "title": "International Police", "steps": [ { "n": "Looker's Agency", "d": "A globe-trotting organization investigating cross-regional threats." }, { "n": "Officer Jenny", "d": "The ubiquitous local law enforcement clan found in every city." }, { "n": "UB Task Force", "d": "A specialized division dealing with the threat of Ultra Beasts." }, { "n": "Interpol Treaty", "d": "The legal framework allowing agents to operate across regional borders." }, { "n": "Fallers", "d": "Individuals who have passed through Ultra Wormholes, tracked by the police." } ]}, { "title": "Regional Mythology", "steps": [ { "n": "Sinnoh Creation", "d": "The myth that Arceus created the universe from the Sinjoh Ruins." }, { "n": "Unova Twins", "d": "The legend of the two heroes and the dragons of Truth and Ideals." }, { "n": "Kalos War", "d": "The history of the 3,000-year-old war and the Ultimate Weapon." }, { "n": "Draconid Lore", "d": "The oral history of the Hoenn people predicting Rayquaza's return." }, { "n": "Burned Tower", "d": "The Johto tragedy that led to the creation of the Legendary Beasts." } ]}, { "title": "Interspecies Relations", "steps": [ { "n": "Friendship Bond", "d": "The tangible power generated by trust between human and Pokémon." }, { "n": "Partner Trust", "d": "The foundation of mechanics like Return or Mega Evolution." }, { "n": "N's Philosophy", "d": "The radical idea that Pokémon battling is inherently abusive." }, { "n": "Peaceful Coexistence", "d": "Towns like Verdanturf where humans and Pokémon live in harmony." }, { "n": "Utopian Goal", "d": "A world where the distinction between ruler and ruled disappears." } ]} ],
        "MAGIC": [ { "title": "Type Chart", "steps": [ { "n": "Fire Affinity", "d": "Weak to Water/Rock/Ground, effective against Grass/Bug/Ice/Steel." }, { "n": "Water Affinity", "d": "Weak to Electric/Grass, effective against Fire/Ground/Rock." }, { "n": "Grass Affinity", "d": "Weak to Fire/Ice/Poison/Flying/Bug, effective against Water/Ground/Rock." }, { "n": "Electric Affinity", "d": "Weak to Ground, effective against Water/Flying." }, { "n": "Psychic Affinity", "d": "Weak to Bug/Ghost/Dark, effective against Fighting/Poison." } ]}, { "title": "Move Mechanics", "steps": [ { "n": "Physical Contact", "d": "Moves that strike the body, utilizing the Attack and Defense stats." }, { "n": "Special Projection", "d": "Moves that project energy, utilizing the Sp. Atk and Sp. Def stats." }, { "n": "Status Alteration", "d": "Moves that inflict conditions or alter stats without dealing damage." }, { "n": "STAB Bonus", "d": "The 50% damage increase when a move matches the user's type." }, { "n": "Critical Hits", "d": "Random strikes that bypass defensive buffs and deal 1.5x damage." } ]}, { "title": "Ability Systems", "steps": [ { "n": "Passive Traits", "d": "Inherent magical traits like Levitate or Static that function automatically." }, { "n": "Hidden Abilities", "d": "Rare, often superior traits found only through special means like Raids." }, { "n": "Weather Summons", "d": "Abilities like Drizzle or Drought that change the environment upon entry." }, { "n": "Intimidate", "d": "An ability that projects fear, lowering the opponent's Attack stat." }, { "n": "Wonder Guard", "d": "Shedinja's mystical protection blocking all non-super-effective damage." } ]}, { "title": "Evolutionary Magic", "steps": [ { "n": "Experience Threshold", "d": "Metamorphosis triggered by accumulating sufficient battle experience (Level)." }, { "n": "Elemental Stones", "d": "Radiant stones (Fire, Water, Thunder) that induce immediate evolution." }, { "n": "Trade Energy", "d": "Evolution triggered by the energy of the trading machine transfer." }, { "n": "Friendship Bond", "d": "Evolution triggered by high affection, required for Pokémon like Lucario." }, { "n": "Regional Variants", "d": "Darwinian adaptation causing species to change type based on environment." } ]}, { "title": "Psychic Powers", "steps": [ { "n": "Telepathy", "d": "The ability to communicate mentally with humans and other Pokémon." }, { "n": "Telekinesis", "d": "Moving objects with the mind, the basis of moves like Psychic." }, { "n": "Future Sight", "d": "Projecting an attack through time to strike the opponent later." }, { "n": "Hypnosis", "d": "Inducing deep sleep through suggestion or energy waves." }, { "n": "Teleportation", "d": "Instantly warping space to escape danger or travel to a center." } ]}, { "title": "Ghost Sorcery", "steps": [ { "n": "Curse", "d": "Sacrificing HP to lay a persistent, draining hex on the opponent." }, { "n": "Destiny Bond", "d": "Linking life forces so that if the user faints, the attacker does too." }, { "n": "Shadow Ball", "d": "Materializing negative emotions into a damaging projectile." }, { "n": "Hex", "d": "Dealing double damage to targets already suffering a status condition." }, { "n": "Phantom Force", "d": "Vanishing into the spirit world to bypass protection on the next turn." } ]}, { "title": "Draconic Power", "steps": [ { "n": "Dragon Rage", "d": "A fixed-damage attack representing pure draconic fury." }, { "n": "Dragon Dance", "d": "A mystical ritual that heightens speed and physical power." }, { "n": "Dragon Pulse", "d": "Expelling a shockwave of pure dragon energy." }, { "n": "Draco Meteor", "d": "Summoning comets from the sky at the cost of special attack power." }, { "n": "Outrage", "d": "A uncontrollable rampage that exhausts and confuses the user." } ]}, { "title": "Fairy Glamour", "steps": [ { "n": "Charm", "d": "Using cuteness to magically sap the opponent's will to fight." }, { "n": "Moonblast", "d": "Channeling lunar power to damage and weaken the foe." }, { "n": "Dazzling Gleam", "d": "Emitting a blinding flash that hurts all opposing Pokémon." }, { "n": "Misty Terrain", "d": "Summoning a magical mist that prevents status conditions." }, { "n": "Dragon Immunity", "d": "The inherent magical property that renders Fairy types immune to Dragon moves." } ]}, { "title": "Aura Manipulation", "steps": [ { "n": "Aura Sphere", "d": "Focusing life energy into a projectile that tracks the target perfectly." }, { "n": "Lucario's Sense", "d": "The ability to see and read the life force (Aura) of others." }, { "n": "Aura Reading", "d": "Detecting emotions and movements even without sight." }, { "n": "Pulse Healing", "d": "Using Heal Pulse to project aura and restore a target's HP." }, { "n": "Guardianship", "d": "The role of Aura Guardians in history who protected the kingdom." } ]}, { "title": "Cosmic Creation", "steps": [ { "n": "Arceus Origin", "d": "The legend of the Original One hatching from an egg in chaos." }, { "n": "Elemental Plates", "d": "Fragments of creation that alter Arceus's type and judgment." }, { "n": "Universe Birth", "d": "The myth that Arceus's thousand arms shaped the cosmos." }, { "n": "Spatial Control", "d": "Palkia's power to warp, rend, and stabilize space." }, { "n": "Temporal Flow", "d": "Dialga's power to speed up, slow down, or loop time." } ]} ]
    },

    "animatopia": {
        "POLITICAL": [
            { "title": "Predator/Prey Accord", "steps": [ { "n": "Primitive Truce", "d": "The historic agreement where predators stopped eating prey, founding civilization." }, { "n": "Societal Integration", "d": "The ongoing effort to maintain trust between the 10% predators and 90% prey." }, { "n": "Shared Spaces", "d": "Designing architecture and laws that accommodate both foxes and rabbits." }, { "n": "Equal Rights Acts", "d": "Legislation ensuring no species is barred from jobs like the police force." }, { "n": "Fragile Harmony", "d": "The delicate social balance that can be easily disrupted by fearmongering." } ]},
            { "title": "District Zoning", "steps": [ { "n": "Habitat Separation", "d": "Dividing the city into biomes like Tundratown and Sahara Square." }, { "n": "Climate Borders", "d": "The massive environmental walls that maintain distinct temperatures for each zone." }, { "n": "Transport Links", "d": "The gondolas and trains connecting the disparate environments." }, { "n": "District Council", "d": "Local governance dealing with specific needs like snow removal or humidity." }, { "n": "One City", "d": "The motto 'Zootopia: where anyone can be anything' binding the zones together." } ]},
            { "title": "Zootopia PD", "steps": [ { "n": "ZPD Precint 1", "d": "The central headquarters located in Savanna Central." }, { "n": "Patrol Beat", "d": "Officers assigned to specific districts, like parking duty." }, { "n": "Detective Unit", "d": "Higher-ranking officers handling missing mammal cases and organized crime." }, { "n": "Forensics Lab", "d": "Analyzing fur, DNA, and claw marks to solve crimes." }, { "n": "Chief Bogo", "d": "The stern Cape Buffalo who runs the department with an iron hoof." } ]},
            { "title": "City Hall", "steps": [ { "n": "Mayor Lionheart", "d": "The pompous lion mayor willing to do bad things for the 'greater good'." }, { "n": "Bellwether", "d": "The Assistant Mayor representing the prey vote and handling logistics." }, { "n": "Elections", "d": "The voting process heavily influenced by the prey majority." }, { "n": "Bureaucracy", "d": "Departments like the DMV (run by sloths) that keep the city running slowly." }, { "n": "Civic Pride", "d": "The government's promotion of Zootopia as a shining beacon of progress." } ]},
            { "title": "Social Movements", "steps": [ { "n": "Prey Empowerment", "d": "The political undercurrent of prey realizing their numerical superiority." }, { "n": "Predator Rights", "d": "Advocacy against stereotyping predators as inherently savage." }, { "n": "Inclusion Initiatives", "d": "Programs like the Mammal Inclusion Initiative allowing small animals into the ZPD." }, { "n": "Anti-Savage Protests", "d": "Public fear leading to demands for predator quarantine." }, { "n": "Unity Rallies", "d": "Events promoting the restoration of trust after the Night Howler crisis." } ]},
            { "title": "Criminal Underworld", "steps": [ { "n": "Mr. Big's Family", "d": "The Tundratown mafia run by an Arctic Shrew godfather." }, { "n": "Polar Bear Muscle", "d": "The large enforcers who carry out Mr. Big's orders." }, { "n": "Duke Weaselton", "d": "Petty crooks selling bootleg movies and stealing moldy onions." }, { "n": "Favors System", "d": "The economy of respect and debts, where doing a favor earns protection." }, { "n": "The Skunk Rug", "d": "Mr. Big's unique method of showing disrespect or disposing of enemies." } ]},
            { "title": "ZNN Media", "steps": [ { "n": "News Anchors", "d": "The Moose and Snow Leopard team delivering breaking news." }, { "n": "Gazelle's Platform", "d": "The pop star using her fame to speak out against discrimination." }, { "n": "Fear Mongering", "d": "The media's role in amplifying the fear of 'savage' predators." }, { "n": "Viral Influence", "d": "How quickly information (and misinformation) spreads through the city." }, { "n": "Public Opinion", "d": "The shifting tide of sentiment regarding the predator/prey divide." } ]},
            { "title": "Species Prejudice", "steps": [ { "n": "Biological Bias", "d": "The assumption that biology dictates behavior (e.g., foxes are shifty)." }, { "n": "Fear of Biology", "d": "The deep-seated fear that predators will revert to their primitive instincts." }, { "n": "Stereotyping", "d": "Labeling bunnies as cute/dumb or sloths as slow." }, { "n": "Internalized Bias", "d": "Nick Wilde accepting his role as a 'sly fox' because society expected it." }, { "n": "Trust Building", "d": "The difficult work of overcoming instinctual fear to form friendships." } ]},
            { "title": "Crisis Response", "steps": [ { "n": "Missing Mammals", "d": "The initial wave of disappearances investigated by Judy Hopps." }, { "n": "Savage Outbreak", "d": "The sudden reversion of predators to a feral state." }, { "n": "Public Panic", "d": "Citizens avoiding predators and demanding segregation." }, { "n": "Conspiracy Reveal", "d": "Uncovering Bellwether's plot to frame predators." }, { "n": "Restoration", "d": "Distributing the antidote and healing the social rift." } ]},
            { "title": "Evolutionary History", "steps": [ { "n": "Primitive Age", "d": "The era when animals lived by instinct and the food chain." }, { "n": "Civilization Dawn", "d": "The moment animals evolved to walk on two feet and wear clothes." }, { "n": "Social Contract", "d": "The agreement to live together in peace." }, { "n": "Future Progress", "d": "The continuous journey to make the world a better place." }, { "n": "Utopian Ideal", "d": "The belief that 'anyone can be anything' driving the city forward." } ]}
        ],
        "MEDICAL": [
            { "title": "Interspecies Biology", "steps": [ { "n": "Scale Variance", "d": "Treating patients ranging from 2-inch shrews to 12-foot elephants." }, { "n": "Dietary Needs", "d": "Managing the nutritional requirements of obligate carnivores vs herbivores." }, { "n": "Fur & Skin", "d": "Specialized dermatology for scales, wool, fur, and hide." }, { "n": "Anatomy Charts", "d": "The need for vast medical knowledge covering all mammal physiologies." }, { "n": "Universal Care", "d": "Ensuring medical facilities are accessible to all species sizes." } ]},
            { "title": "Instinct Suppression", "steps": [ { "n": "Civilized Conditioning", "d": "The social training that helps animals override primal urges." }, { "n": "Stress Triggers", "d": "Studying what causes animals to lose control or act on instinct." }, { "n": "Biological Myth", "d": "Disproving the idea that 'going savage' is a natural biological reversion." }, { "n": "Predator Biology", "d": "Understanding the specific aggressive hormones in predator species." }, { "n": "Behavioral Therapy", "d": "Helping animals manage anger and instinct through counseling." } ]},
            { "title": "Night Howler Toxin", "steps": [ { "n": "Midnicampum Holicithias", "d": "A flower known to cause severe psychotropic aggression in mammals." }, { "n": "Blue Serum", "d": "The concentrated extract synthesized by Doug in the subway lab." }, { "n": "Savage Inducement", "d": "The toxin's ability to instantly turn any mammal feral and aggressive." }, { "n": "Dart Delivery", "d": "Using soluble pellets to infect victims without leaving evidence." }, { "n": "Antidote Creation", "d": "Synthesizing a cure from the plant's own chemical properties." } ]},
            { "title": "Public Healthcare", "steps": [ { "n": "District Clinics", "d": "Medical centers specialized for the local climate (e.g., Tundratown ER)." }, { "n": "Veterinary Evolution", "d": "The transition from 'vets' to 'doctors' as animals became civilized." }, { "n": "Emergency Services", "d": "Ambulances sized for different species, from vans to compact cars." }, { "n": "Universal Access", "d": "Providing care for both the wealthy in Sahara Square and the poor." }, { "n": "Advanced Surgery", "d": "Performing complex operations on diverse anatomies." } ]},
            { "title": "Genetic Science", "steps": [ { "n": "DNA Analysis", "d": "Using genetics to solve crimes and identify family lineages." }, { "n": "Trait Mapping", "d": "Understanding which traits are hereditary versus learned." }, { "n": "Species Specifics", "d": "Identifying unique genetic markers for every mammal species." }, { "n": "Forensic Biology", "d": "Matching fur tufts or claw DNA to specific individuals." }, { "n": "Evolutionary Study", "d": "Researching the genetic shift that led to sentience." } ]},
            { "title": "Nutritional Science", "steps": [ { "n": "Synthetic Proteins", "d": "Plant-based or insect-based meat alternatives for predators (Bug-Burga)." }, { "n": "Fresh Produce", "d": "Farming carrots, blueberries, and other staples for herbivores." }, { "n": "Dessert Chemistry", "d": "Creating treats like Pawpsicles that appeal to specific tastes." }, { "n": "Dietary Supplements", "d": "Vitamins to replace nutrients formerly gained from hunting." }, { "n": "Public Health", "d": "Regulating food safety in a city with diverse dietary restrictions." } ]},
            { "title": "Psychological Health", "steps": [ { "n": "Trauma Counseling", "d": "Helping victims of the savage attacks recover." }, { "n": "Interspecies Therapy", "d": "Counseling for mixed-species couples or friends facing prejudice." }, { "n": "Stress Management", "d": "Dealing with the pressures of city life (e.g., the sloth pace)." }, { "n": "Fox Repellent", "d": "The psychological impact of carrying fear-based products." }, { "n": "Healing Trust", "d": "Rebuilding mental security after the conspiracy is revealed." } ]},
            { "title": "Urban Sanitation", "steps": [ { "n": "Waste Management", "d": "Handling the biological waste of millions of diverse mammals." }, { "n": "Water Treatment", "d": "Providing clean water to Rainforest District and Sahara Square." }, { "n": "Disease Control", "d": "Preventing cross-species viral transmission." }, { "n": "Climate Hygiene", "d": "Preventing mold in the Rainforest or bacteria in the Tundra." }, { "n": "Public Safety", "d": "Keeping streets clean and safe for all sizes of pedestrians." } ]},
            { "title": "Forensic Analysis", "steps": [ { "n": "Fur Recovery", "d": "Collecting shed fur to identify suspects at a scene." }, { "n": "Scent Tracking", "d": "Using the superior olfactory senses of officers to track movement." }, { "n": "Claw Marks", "d": "Analyzing scratch patterns to determine the species of an attacker." }, { "n": "Toxicology", "d": "Testing blood for traces of Night Howler serum." }, { "n": "Evidence Lab", "d": "The ZPD division dedicated to processing multi-species evidence." } ]},
            { "title": "Biological Future", "steps": [ { "n": "Evolution Cont.", "d": "The ongoing biological changes in civilized mammals." }, { "n": "Hybrid Theory", "d": "The biological impossibility (or possibility) of interspecies offspring." }, { "n": "Longevity", "d": "Increasing lifespans through modern medicine." }, { "n": "Adaptation", "d": "How species physically adapt to urban environments." }, { "n": "Transcendence", "d": "Moving beyond biological definition to social identity." } ]}
        ],
        "TECH": [
            { "title": "Environmental Engineering", "steps": [ { "n": "Climate Walls", "d": "The massive barriers containing heating/cooling coils to separate districts." }, { "n": "Sahara Heating", "d": "Giant heat vents and sand-cycling systems for the desert zone." }, { "n": "Tundra Cooling", "d": "Massive AC units and snow machines maintaining sub-zero temps." }, { "n": "Rainforest Irrigation", "d": "The 'sprinkler system' that creates constant artificial rain." }, { "n": "Canal Systems", "d": "Waterways allowing aquatic commute through the Rainforest district." } ]},
            { "title": "Adaptive Architecture", "steps": [ { "n": "Multi-Scale Design", "d": "Buildings with doors for elephants, humans, and mice." }, { "n": "Rodentia Housing", "d": "Tiny, detailed skyscrapers built for mice and shrews." }, { "n": "Pneumatic Tubes", "d": "Transport tubes for hamsters to move quickly between buildings." }, { "n": "Train Design", "d": "Subway cars featuring distinct doors and ceilings for different heights." }, { "n": "Safety Railings", "d": "Barriers designed to stop a rhino but not trap a mouse." } ]},
            { "title": "Public Transit", "steps": [ { "n": "Zootopia Express", "d": "The regional rail line connecting Bunnyburrow to the city." }, { "n": "Inner City Metro", "d": "The subway system with stops in every major district." }, { "n": "Gondola Lifts", "d": "Aerial transport through the humid Rainforest canopy." }, { "n": "Tram Systems", "d": "Street-level transport for mid-sized mammals." }, { "n": "Accessibility", "d": "Ensuring every vehicle can accommodate horns, tails, and trunks." } ]},
            { "title": "City Utilities", "steps": [ { "n": "Hydroelectric Power", "d": "Generating electricity from the waterfall at the cliff's edge." }, { "n": "Climate Energy", "d": "The immense power grid required to run the climate walls." }, { "n": "Water Recycling", "d": "Capturing rain from the Rainforest to water Sahara Square." }, { "n": "Snow Removal", "d": "Automated systems to clear roads in Tundratown." }, { "n": "Waste Disposal", "d": "Processing trash from giants and miniatures alike." } ]},
            { "title": "Digital Comms", "steps": [ { "n": "Smartphones", "d": "Devices like Judy's phone tailored to specific paw sizes." }, { "n": "Apps", "d": "Software like 'MuzzleTime' (FaceTime) and Zuber." }, { "n": "Carrot Pen", "d": "A voice recording device disguised as a carrot." }, { "n": "Traffic Network", "d": "The system controlling lights and monitoring flow." }, { "n": "Emergency Comms", "d": "Direct lines to ZPD dispatch." } ]},
            { "title": "Surveillance Grid", "steps": [ { "n": "Traffic Cams", "d": "Cameras monitoring every intersection, accessible by Assistant Mayors." }, { "n": "Jam Cams", "d": "Checking traffic density, famously managed by Bellwether." }, { "n": "License Plate Readers", "d": "Tracking vehicle movement across districts." }, { "n": "Public Safety", "d": "Monitoring for savage outbreaks in public squares." }, { "n": "Privacy Issues", "d": "The tension between safety and the surveillance state." } ]},
            { "title": "Police Gadgets", "steps": [ { "n": "Tranquilizer Guns", "d": "Non-lethal takedown weapons for large mammals." }, { "n": "Net Launchers", "d": "Devices to safely entrap savage animals." }, { "n": "Speed Radars", "d": "Guns used to clock speeders on the highway." }, { "n": "Boot Clamps", "d": "Parking enforcement tools to immobilize vehicles." }, { "n": "Badge Tech", "d": "Digital identification for officers." } ]},
            { "title": "Urban Planning", "steps": [ { "n": "District Layout", "d": "The radial design with Savanna Central at the core." }, { "n": "Little Rodentia", "d": "A gated micro-city for safety against large feet." }, { "n": "Integration", "d": "Designing public spaces where all species can mingle." }, { "n": "Green Zones", "d": "Parks and natural areas preserved within the city." }, { "n": "Expansion", "d": "Planning for population growth and new habitats." } ]},
            { "title": "Automation", "steps": [ { "n": "Kiosks", "d": "Self-service machines for tickets and info." }, { "n": "Lab Equipment", "d": "Robotic arms used in Doug's lab for serum production." }, { "n": "Traffic Control", "d": "Automated signals managing the complex traffic flow." }, { "n": "Climate Auto-Reg", "d": "Sensors that automatically adjust temperature and humidity." }, { "n": "Sanitation Bots", "d": "Automated street sweepers and cleaners." } ]},
            { "title": "Ecosystem Management", "steps": [ { "n": "Biome Stability", "d": "Maintaining artificial ecosystems against entropy." }, { "n": "Plant Life", "d": "Cultivating flora appropriate for each artificial climate." }, { "n": "Air Quality", "d": "Filtering air to prevent cross-contamination between zones." }, { "n": "Energy Efficiency", "d": "Minimizing the carbon footprint of the climate walls." }, { "n": "Sustainability", "d": "Ensuring the city can support its diverse population long-term." } ]}
        ],
        "ECONOMIC": [ { "title": "Zootopia Commerce", "steps": [ { "n": "Retail Sector", "d": "Shops catering to specific species, like 'The Big Donut'." }, { "n": "Lemming Bros Bank", "d": "A major financial institution staffed by lemmings." }, { "n": "Zuber", "d": "The ride-sharing economy connecting travelers." }, { "n": "Real Estate", "d": "Selling burrows, apartments, and penthouses." }, { "n": "Consumer Goods", "d": "Products designed for every size, from tiny cups to giant cars." } ]}, { "title": "Labor Market", "steps": [ { "n": "Species Roles", "d": "The tendency for sloths to work desks or elephants to run ice cream shops." }, { "n": "Construction", "d": "Beavers and large mammals building the city infrastructure." }, { "n": "Service Industry", "d": "Waiters and clerks serving the diverse populace." }, { "n": "Police Force", "d": "A high-status, stable career formerly exclusive to large mammals." }, { "n": "Agriculture", "d": "Farming families like the Hopps supplying the city." } ]}, { "title": "Small Business", "steps": [ { "n": "Jumbeaux's Cafe", "d": "An ice cream parlor catering to elephants." }, { "n": "Nick's Hustle", "d": "Reselling melted 'Pawpsicles' and redwood lumber for profit." }, { "n": "Flower Shops", "d": "Selling flora, including (accidentally) toxic plants." }, { "n": "Family Farms", "d": "Rural producers selling at city markets." }, { "n": "Bootleg Media", "d": "Selling knock-off DVDs on street corners." } ]}, { "title": "Financial Systems", "steps": [ { "n": "Loans", "d": "Capital for starting businesses or buying homes." }, { "n": "Tax Revenue", "d": "Funding the massive infrastructure through income tax." }, { "n": "Digital Pay", "d": "Contactless payment systems compatible with paws and hooves." }, { "n": "Investment", "d": "Funding new developments in Little Rodentia." }, { "n": "Wealth Gap", "d": "The disparity between Tundratown elites and street hustlers." } ]}, { "title": "Import/Export", "steps": [ { "n": "Train Cargo", "d": "Goods arriving daily via the Zootopia Express." }, { "n": "Food Supply", "d": "Bringing in tons of hay, bugs, and fish daily." }, { "n": "Raw Materials", "d": "Lumber and steel for construction." }, { "n": "Textiles", "d": "Fabrics for clothing animals of all shapes." }, { "n": "Tech Parts", "d": "Components for the city's advanced electronics." } ]}, { "title": "Housing Market", "steps": [ { "n": "Grand Pangolin", "d": "A shaky apartment complex for low-income residents." }, { "n": "Tundratown Estates", "d": "Luxury, chilled mansions for the wealthy." }, { "n": "Burrow Rentals", "d": "Underground units for rabbits and moles." }, { "n": " Rainforest Condos", "d": "High-rise living in the canopy." }, { "n": "Rent Control", "d": "Regulations managing the cost of living." } ]}, { "title": "Transportation Economy", "steps": [ { "n": "Ticket Sales", "d": "Revenue from the train and subway systems." }, { "n": "Parking Fines", "d": "Income generated by meter maids like Judy." }, { "n": "Vehicle Sales", "d": "A diverse market for cars ranging from micro to mega." }, { "n": "Fuel Costs", "d": "The price of energy to move the city." }, { "n": "Infrastructure Maintenance", "d": "The high cost of keeping the transit system running." } ]}, { "title": "Black Market", "steps": [ { "n": "Night Howlers", "d": "Buying and selling toxic bulbs for illegal purposes." }, { "n": "Skunk Rugs", "d": "Trafficking in illegal animal products." }, { "n": "Counterfeit Goods", "d": "Selling fake brand-name items." }, { "n": "Information", "d": "Buying secrets and tips from informants." }, { "n": "Laundering", "d": "Cleaning dirty money through cash businesses." } ]}, { "title": "Tourism", "steps": [ { "n": "City Visits", "d": "Country animals visiting the big city for the first time." }, { "n": "Hotels", "d": "Accommodations for visitors of all sizes." }, { "n": "Sightseeing", "d": "Tours of the distinct districts and landmarks." }, { "n": "Concerts", "d": "Large events like Gazelle's peace rally." }, { "n": "Souvenirs", "d": "Selling trinkets to remember the trip." } ]}, { "title": "Economic Growth", "steps": [ { "n": "Innovation", "d": "New businesses solving interspecies problems." }, { "n": "Population", "d": "A growing city driving demand for goods." }, { "n": "Integration Dividend", "d": "The economic benefit of a diverse, cooperative workforce." }, { "n": "Resilience", "d": "Bouncing back from the recession caused by the savage crisis." }, { "n": "Opportunity", "d": "The promise that anyone can make it in Zootopia." } ]} ],
        "WEAPONS": [ { "title": "ZPD Equipment", "steps": [ { "n": "Service Pistol", "d": "Standard issue tranquilizer sidearm for officers." }, { "n": "Stun Baton", "d": "Electric melee weapon for subduing resisting suspects." }, { "n": "Cuffs", "d": "Restraints available in sizes from mouse to elephant." }, { "n": "Riot Shield", "d": "Protective gear for crowd control situations." }, { "n": "Radio", "d": "Communication link to dispatch and backup." } ]}, { "title": "Biological Arsenal", "steps": [ { "n": "Claws", "d": "Natural weapons of predators, socially taboo to use." }, { "n": "Fangs", "d": "Sharp teeth capable of lethal force in savage animals." }, { "n": "Hooves", "d": "Heavy striking limbs of prey animals like buffalo." }, { "n": "Bulk", "d": "The sheer mass of elephants and rhinos used as a weapon." }, { "n": "Speed", "d": "The pursuit capabilities of cheetahs and wolves." } ]}, { "title": "Chemical Warfare", "steps": [ { "n": "Night Howler Serum", "d": "A concentrated toxin that induces immediate feral rage." }, { "n": "Serum Pellets", "d": "Dissolvable spheres delivering the toxin via impact." }, { "n": "Dart Gun", "d": "A modified pistol used to fire serum pellets silently." }, { "n": "Fox Repellent", "d": "A commercially available spray for 'protection' against predators." }, { "n": "Tear Gas", "d": "Chemical crowd control potentially used by ZPD." } ]}, { "title": "Police Vehicles", "steps": [ { "n": "Interceptor", "d": "High-speed police cruiser for chasing suspects." }, { "n": "Meter Maid Cart", "d": "Low-speed vehicle for parking enforcement." }, { "n": "Armored Truck", "d": "Heavy vehicle for SWAT operations." }, { "n": "Motorcycle", "d": "Agile bike for weaving through traffic." }, { "n": "Prison Van", "d": "Secure transport for arrested mammals." } ]}, { "title": "Restraints", "steps": [ { "n": "Muzzle", "d": "A device to prevent biting, used as a symbol of oppression." }, { "n": "Net", "d": "Weighted nets to tangle and trap moving targets." }, { "n": "Containment Cell", "d": "High-security glass cages for savage animals." }, { "n": "Safety Collar", "d": "Theoretical shock collars (from early drafts) to control predators." }, { "n": "Boot", "d": "Wheel clamp to stop vehicles from moving." } ]}, { "title": "Surveillance Tools", "steps": [ { "n": "Listening Bug", "d": "Tiny microphones to record criminal conversations." }, { "n": "Traffic Cam", "d": "Public video feed used to track movements." }, { "n": "Recorder Pen", "d": "Covert audio recording device disguised as office supplies." }, { "n": "GPS Trackers", "d": "Devices to locate vehicles or suspects." }, { "n": "Binoculars", "d": "Optical zoom for long-distance observation." } ]}, { "title": "Crowd Control", "steps": [ { "n": "Barricades", "d": "Physical barriers to direct or stop crowds." }, { "n": "Water Cannon", "d": "High-pressure streams to disperse rioters." }, { "n": "Megaphone", "d": "Amplifying voice to issue commands to a mob." }, { "n": "Rubber Bullets", "d": "Less-lethal kinetic rounds for riot suppression." }, { "n": "Formation", "d": "Police shield walls to push back crowds." } ]}, { "title": "Criminal Weapons", "steps": [ { "n": "Switchblade", "d": "Concealable knives for intimidation." }, { "n": "Club", "d": "Blunt objects used for striking." }, { "n": "Intimidation", "d": "Using size or reputation (like Mr. Big) as a threat." }, { "n": "Blackmail", "d": "Using information to coerce victims." }, { "n": "Poison", "d": "Using toxic substances like Night Howlers." } ]}, { "title": "Defensive Infrastructure", "steps": [ { "n": "Climate Wall", "d": "Massive structures that also serve as physical barriers." }, { "n": "Security Gate", "d": "Controlled access points for facilities." }, { "n": "Panic Room", "d": "Secure areas in mansions like Mr. Big's." }, { "n": "Bodyguard", "d": "Hiring polar bears for personal protection." }, { "n": "Alarm System", "d": "Electronic alerts for break-ins." } ]}, { "title": "Social Weapons", "steps": [ { "n": "Fear", "d": "Weaponizing public anxiety to gain political power." }, { "n": "Prejudice", "d": "Using stereotypes to marginalize groups." }, { "n": "Media", "d": "Spreading propaganda to manipulate the populace." }, { "n": "Exclusion", "d": "Blocking certain species from jobs or services." }, { "n": "Segregation", "d": "Forcing separation to weaken social bonds." } ]} ],
        "MAGIC": [ { "title": "Biological Reality", "steps": [ { "n": "No Magic", "d": "A world governed strictly by biology and physics." }, { "n": "Sentience", "d": "The mysterious evolutionary leap that gave animals human-like minds." }, { "n": "Instinct", "d": "The primal programming that remains beneath the civilized surface." }, { "n": "Genetics", "d": "The code that determines traits, size, and species." }, { "n": "Ecology", "d": "The interconnected web of life supporting the city." } ]}, { "title": "Willpower", "steps": [ { "n": "Determination", "d": "Judy's refusal to give up despite her size." }, { "n": "Resilience", "d": "Bouncing back from failure and prejudice." }, { "n": "Ambition", "d": "The drive to be more than what society expects." }, { "n": "Courage", "d": "Facing fear to do what is right." }, { "n": "Hope", "d": "The belief that the world can be better." } ]}, { "title": "Fortune", "steps": [ { "n": "Opportunity", "d": "Being in the right place to catch a break." }, { "n": "Coincidence", "d": "Chance meetings that change lives (Judy and Nick)." }, { "n": "Risk", "d": "Taking a gamble on a hustle or a lead." }, { "n": "Luck", "d": "Escaping danger by a hair's breadth." }, { "n": "Destiny", "d": "The idea that one can forge their own path." } ]}, { "title": "Intuition", "steps": [ { "n": "Gut Feeling", "d": "Instinctive knowledge that something is wrong." }, { "n": "Observation", "d": "Noticing small details others miss." }, { "n": "Empathy", "d": "Understanding the feelings of others." }, { "n": "Street Smarts", "d": "Knowledge gained from experience, not books." }, { "n": "Insight", "d": "Connecting the dots to solve the mystery." } ]}, { "title": "Aspirations", "steps": [ { "n": "Dreams", "d": "The vision of a future self." }, { "n": "Goals", "d": "Concrete targets to achieve success." }, { "n": "Motivation", "d": "The fuel that keeps one going." }, { "n": "Inspiration", "d": "Looking up to heroes or ideals." }, { "n": "Change", "d": "The desire to make a difference." } ]}, { "title": "Expression", "steps": [ { "n": "Music", "d": "Gazelle's songs uniting the city." }, { "n": "Dance", "d": "Joyful physical expression." }, { "n": "Fashion", "d": "Clothing as a sign of status and personality." }, { "n": "Culture", "d": "The shared customs of different species." }, { "n": "Voice", "d": "Speaking out for those who cannot." } ]}, { "title": "Connection", "steps": [ { "n": "Friendship", "d": "The bond between Judy and Nick." }, { "n": "Family", "d": "The support of the Hopps clan." }, { "n": "Trust", "d": "The foundation of any relationship." }, { "n": "Loyalty", "d": "Standing by friends in tough times." }, { "n": "Love", "d": "The force that bridges the gap between species." } ]}, { "title": "Bravery", "steps": [ { "n": "Heroism", "d": "Risking safety to help others." }, { "n": "Defiance", "d": "Standing up to bullies and tyrants." }, { "n": "Sacrifice", "d": "Giving up something for the greater good." }, { "n": "Strength", "d": "Mental toughness in the face of adversity." }, { "n": "Action", "d": "Doing something when others just watch." } ]}, { "title": "Veracity", "steps": [ { "n": "Truth", "d": "Uncovering the reality behind the lies." }, { "n": "Justice", "d": "Ensuring fairness for all." }, { "n": "Honesty", "d": "Being true to oneself and others." }, { "n": "Integrity", "d": "Doing the right thing even when no one is looking." }, { "n": "Exposure", "d": "Bringing corruption to light." } ]}, { "title": "Equilibrium", "steps": [ { "n": "Balance", "d": "Nature's equilibrium between predator and prey." }, { "n": "Peace", "d": "Social stability." }, { "n": "Chaos", "d": "The breakdown of order." }, { "n": "Life", "d": "The cycle of existence." }, { "n": "Harmony", "d": "Living together in concord." } ]} ]
    },

    "equestria": {
        "MAGIC": [
            { "title": "Unicorn Sorcery", "steps": [ { "n": "Telekinesis", "d": "The basic ability to manipulate objects with a magical aura." }, { "n": "Illumination", "d": "Casting light from the horn to see in dark places." }, { "n": "Transfiguration", "d": "Changing one object into another, like turning a rock into a hat." }, { "n": "Shield Casting", "d": "Projecting a barrier to deflect physical or magical attacks." }, { "n": "Teleportation", "d": "Instantaneous travel through space, requiring high skill." } ]},
            { "title": "Pegasus Aeromancy", "steps": [ { "n": "Cloud Walking", "d": "The innate magic allowing pegasi to interact with clouds as solids." }, { "n": "Weather Manipulation", "d": "Moving clouds, busting them, or creating twisters physically." }, { "n": "Lightning Kick", "d": "Striking storm clouds to release controlled electricity." }, { "n": "Wing Power", "d": "Measuring flight strength in 'wingpower' for feats like tornado creation." }, { "n": "Sonic Rainboom", "d": "Rainbow Dash's signature move breaking the sound barrier with a spectrum explosion." } ]},
            { "title": "Earth Pony Might", "steps": [ { "n": "Passive Strength", "d": "Superior physical durability and muscle density compared to other races." }, { "n": "Nature Connection", "d": "An intuitive magic that accelerates plant growth and health." }, { "n": "Rock Farming", "d": "The Pie family's unique ability to cultivate geological formations." }, { "n": "Seismic Sense", "d": "Detecting vibrations or changes in the earth (Pinkie Sense)." }, { "n": "Foundation", "d": "The magic that grounds Equestria's food supply and stability." } ]},
            { "title": "Elements of Harmony", "steps": [ { "n": "Honesty", "d": "Applejack's element, revealing truth and dispelling deception." }, { "n": "Loyalty", "d": "Rainbow Dash's element, binding the group together." }, { "n": "Laughter", "d": "Pinkie Pie's element, dispelling fear with joy." }, { "n": "Generosity", "d": "Rarity's element, offering beauty and aid selflessly." }, { "n": "Kindness", "d": "Fluttershy's element, taming beasts with compassion." } ]},
            { "title": "Friendship Magic", "steps": [ { "n": "The Spark", "d": "Twilight's element of Magic that catalyzes the other five." }, { "n": "Rainbow Laser", "d": "The orbital friendship cannon formed when the elements unite." }, { "n": "Petrification", "d": "Using the elements to turn villains like Discord into stone." }, { "n": "Purification", "d": "Cleansing corruption, like freeing Luna from Nightmare Moon." }, { "n": "Map Summon", "d": "The Cutie Map calling ponies to solve friendship problems." } ]},
            { "title": "Alicorn Divinity", "steps": [ { "n": "Ascension", "d": "Transformation into an Alicorn upon mastering a new form of magic." }, { "n": "Longevity", "d": "An extended lifespan allowing rule over centuries." }, { "n": "Celestial Control", "d": "The power to move celestial bodies like the Sun and Moon." }, { "n": "Dream Walking", "d": "Luna's ability to enter and alter the dreams of ponies." }, { "n": "Power Scale", "d": "Possessing the combined magic of all three pony races." } ]},
            { "title": "Celestial Mechanics", "steps": [ { "n": "Sun Raising", "d": "Celestia's daily ritual of lifting the sun to start the day." }, { "n": "Moon Raising", "d": "Luna's duty to bring the night and the stars." }, { "n": "Eclipse", "d": "A rare alignment often signifying a struggle between sisters." }, { "n": "Summer Sun Celebration", "d": "The longest day of the year, celebrating the light." }, { "n": "Nightmare Moon", "d": "The dark avatar created by jealousy and lunar magic." } ]},
            { "title": "Draconequus Chaos", "steps": [ { "n": "Reality Warping", "d": "Discord's ability to ignore physics, turning gravity off or roads into soap." }, { "n": "Cotton Candy Clouds", "d": "Transmuting rainclouds into pink cotton candy producing chocolate milk." }, { "n": "Mind Games", "d": "Magic that inverts personality traits (making Applejack a liar)." }, { "n": "Dimension Travel", "d": "Moving freely between Equestria and his chaotic pocket dimension." }, { "n": "Chaos Magic", "d": "A magic that cannot be removed, only contained or befriended." } ]},
            { "title": "Crystal Heart", "steps": [ { "n": "Empire Defense", "d": "The Heart projects a shield protecting the Crystal Empire from snow and shadows." }, { "n": "Emotional Fuel", "d": "The Heart is powered by the collective hope and love of the Crystal Ponies." }, { "n": "Love Projection", "d": "Radiating energy that invigorates and crystallizes the coat of inhabitants." }, { "n": "Dark Repulsion", "d": "The light of the Heart destroys shadow magic like King Sombra's." }, { "n": "Hope Crystal", "d": "The artifact itself, an ancient relic of immense positive power." } ]},
            { "title": "Mirror Portal", "steps": [ { "n": "Dimensional Rift", "d": "A portal to the human world that opens every 30 moons." }, { "n": "Anthropomorphism", "d": "Transforming ponies into human equivalents upon entry." }, { "n": "Siren Magic", "d": "The Dazzlings' ability to feed on negativity in the magic-less world." }, { "n": "Geodes", "d": "Magical stones granting elemental powers to the human counterparts." }, { "n": "Sunset Shimmer", "d": "A pony living as a human, bridging the two worlds." } ]}
        ],
        "TECH": [
            { "title": "Steam Engineering", "steps": [ { "n": "Friendship Express", "d": "The steam locomotive connecting Ponyville, Canterlot, and the Empire." }, { "n": "Super Cider Squeezy", "d": "Flim and Flam's magical steam-powered cider production vehicle." }, { "n": "Track Infrastructure", "d": "The rail network spanning the continent." }, { "n": "Coal Power", "d": "Using coal to fuel the engines of trains and industry." }, { "n": "Locomotion", "d": "The primary method of long-distance travel for non-pegasi." } ]},
            { "title": "Weather Factory", "steps": [ { "n": "Cloudsdale", "d": "The floating city where Equestria's weather is manufactured." }, { "n": "Snowflake Lab", "d": "Designing unique snowflakes for winter delivery." }, { "n": "Rainbow Facility", "d": "Processing Spectra to create liquid rainbow for waterfalls." }, { "n": "Storm Generator", "d": "Machines that mix cold and hot fronts to build storms." }, { "n": "Cloud Storage", "d": "Warehousing clouds for scheduled deployment." } ]},
            { "title": "Civil Construction", "steps": [ { "n": "Canterlot Castle", "d": "The gravity-defying architecture of the capital clinging to the mountainside." }, { "n": "Earth Pony Building", "d": "Traditional barn and cottage raising using community strength." }, { "n": "Dam Infrastructure", "d": "Hydro-engineering projects like the Ponyville Dam." }, { "n": "School of Friendship", "d": "A modern campus designed to accommodate all creature sizes." }, { "n": "Crystal Architecture", "d": "Buildings grown or shaped from magical crystal in the Empire." } ]},
            { "title": "Textile Industry", "steps": [ { "n": "Carousel Boutique", "d": "Rarity's shop creating high-fashion garments." }, { "n": "Magical Sewing", "d": "Using telekinesis to stitch fabrics with impossible precision." }, { "n": "Fabric Weaving", "d": "Creating enchanted or spider-silk fabrics." }, { "n": "Gem Integration", "d": "Embedding magical gems into clothing for visual flair." }, { "n": "Trend Setting", "d": "Influencing the fashion of Canterlot's elite." } ]},
            { "title": "Party Technology", "steps": [ { "n": "Party Cannon", "d": "Pinkie Pie's weaponized celebration device deploying instant decor." }, { "n": "Balloon Aerodynamics", "d": "Using balloons for travel and decoration." }, { "n": "Confetti Ballistics", "d": "The science of maximizing confetti spread." }, { "n": "Baking Tech", "d": "Industrial mixers for mass-producing cakes." }, { "n": "DJ Pon-3 Rig", "d": "Advanced audio equipment for rave parties." } ]},
            { "title": "Aeronautics", "steps": [ { "n": "Hot Air Balloons", "d": "Standard air travel for earth ponies and unicorns." }, { "n": "Airships", "d": "Large zeppelins used for luxury cruises or military transport." }, { "n": "Wing Goggles", "d": "Protective eyewear for high-speed pegasus flight." }, { "n": "Wonderbolt Gear", "d": "Aerodynamic flight suits designed for precision maneuvers." }, { "n": "Cloud Architecture", "d": "Building structures on clouds using pegasus magic." } ]},
            { "title": "Scroll Communication", "steps": [ { "n": "Dragonfire", "d": "Spike's magical breath that teleports scrolls to Celestia." }, { "n": "Quill & Ink", "d": "The traditional tools for writing friendship reports." }, { "n": "Library Archives", "d": "Organizing vast amounts of magical knowledge." }, { "n": "Friendship Journal", "d": "A shared book for recording lessons learned." }, { "n": "Postal Service", "d": "Derpy Hooves and others delivering physical mail." } ]},
            { "title": "Agricultural Tech", "steps": [ { "n": "Apple Bucking", "d": "The technique of harvesting apples through kinetic impact." }, { "n": "Cider Press", "d": "Mechanical presses for juicing apples." }, { "n": "Zap Apple Jam", "d": "Processing magical fruit that shifts colors." }, { "n": "Irrigation", "d": "Managing water flow for Sweet Apple Acres." }, { "n": "Pest Control", "d": "Dealing with Parasprites and Vampire Fruit Bats." } ]},
            { "title": "Crystalline Tech", "steps": [ { "n": "Empire Mining", "d": "Extracting magic-reactive crystals from beneath the empire." }, { "n": "Refraction Optics", "d": "Using crystals to channel light and information." }, { "n": "Memory Stones", "d": "Crystals capable of storing images or memories." }, { "n": "Crystal Faire", "d": "Technology displayed at the annual empire gathering." }, { "n": "Heart Maintenance", "d": "The technical rituals ensuring the Crystal Heart spins correctly." } ]},
            { "title": "Temporal Magic", "steps": [ { "n": "Time Travel Spell", "d": "Star Swirl's spell allowing travel to the past (briefly)." }, { "n": "Map Table", "d": "The Cutie Map's ability to show events across time." }, { "n": "Time Loop", "d": "Magical artifacts that can trap a user in a recurring day." }, { "n": "Future Vision", "d": "Magical pools or smoke showing potential futures." }, { "n": "Starlight's Modification", "d": "An altered spell that allowed for timeline alteration." } ]}
        ],
        "POLITICAL": [ { "title": "Friendship Diplomacy", "steps": [ { "n": "Friendship Reports", "d": "Letters to the Princess detailing social lessons learned." }, { "n": "Ambassador Missions", "d": "Traveling to foreign lands like Yakyakistan to solve disputes." }, { "n": "School of Friendship", "d": "An institution dedicated to teaching global harmony." }, { "n": "Cutie Map", "d": "A magical table that directs heroes to political crisis points." }, { "n": "Harmony Treaty", "d": "Agreements binding the diverse nations of the world." } ]}, { "title": "Diarchy Rule", "steps": [ { "n": "Princess Celestia", "d": "The solar monarch ruling the day and diplomacy." }, { "n": "Princess Luna", "d": "The lunar monarch ruling the night and dreams." }, { "n": "Princess Cadance", "d": "The ruler of the Crystal Empire and element of Love." }, { "n": "Twilight Sparkle", "d": "The Princess of Friendship and eventual supreme ruler." }, { "n": "Royal Decree", "d": "Laws issued by the alicorns for the good of Equestria." } ]}, { "title": "Royal Guard", "steps": [ { "n": "Solar Guard", "d": "Golden-armored pegasi and unicorns protecting Canterlot." }, { "n": "Lunar Guard", "d": "Bat-winged ponies serving Princess Luna at night." }, { "n": "Shining Armor", "d": "The Captain of the Guard and Prince of the Crystal Empire." }, { "n": "Shield Spell", "d": "The magical barrier erected to protect the capital." }, { "n": "Spear Drill", "d": "Combat training for the defense of the realm." } ]}, { "title": "Foreign Relations", "steps": [ { "n": "Yakyakistan", "d": "Navigating the volatile temper of the Yak diplomats." }, { "n": "Griffonstone", "d": "Restoring the lost pride and unity of the Griffon kingdom." }, { "n": "Dragon Lands", "d": "Dealing with the aggressive and greed-driven Dragon Lords." }, { "n": "Changeling Hive", "d": "Reforming the hive from love-stealers to love-sharers." }, { "n": "Seaquestria", "d": "Re-establishing contact with the underwater Hippogriffs." } ]}, { "title": "Harmony Balance", "steps": [ { "n": "Tree of Harmony", "d": "The ancient sentient plant that maintains global balance." }, { "n": "Elements Defense", "d": "Using the artifacts to banish threats to the nation." }, { "n": "Map Missions", "d": "The Tree directing ponies to fix friendship problems." }, { "n": "Student Six", "d": "A diverse group of students representing global unity." }, { "n": "Young Six", "d": "The future leaders learning to transcend species barriers." } ]}, { "title": "Villain Reformation", "steps": [ { "n": "Discord's Turn", "d": "Using patience and friendship to turn chaos into an ally." }, { "n": "Starlight Glimmer", "d": "Forgiving a timeline-destroying dictator and teaching her friendship." }, { "n": "Changeling Thorax", "d": "Supporting a defector to overthrow a tyrant Queen." }, { "n": "Pony of Shadows", "d": "Banishing the darkness to save the pony Stygian within." }, { "n": "Statue Garden", "d": "The fate of those who refuse reformation (Tirek, Cozy Glow, Chrysalis)." } ]}, { "title": "Education System", "steps": [ { "n": "Celestia's School", "d": "The elite academy for gifted unicorns in Canterlot." }, { "n": "Cheerilee's Class", "d": "The primary school in Ponyville for general education." }, { "n": "Wonderbolt Academy", "d": "The military flight school for elite pegasi." }, { "n": "Friendship Curriculum", "d": "Classes on empathy, teamwork, and sharing." }, { "n": "Student Safety", "d": "Protecting schools from monster attacks." } ]}, { "title": "Cutie Mark Destiny", "steps": [ { "n": "Blank Flank", "d": "The social status of a pony who hasn't found their purpose." }, { "n": "Talent Discovery", "d": "The moment a pony realizes their special talent." }, { "n": "Mark Appearance", "d": "The magical manifestation of the symbol on the flank." }, { "n": "Trouble Shoes", "d": "Dealing with the stigma of a 'bad luck' mark." }, { "n": "CM Crusaders", "d": "A group dedicated to helping others find their purpose." } ]}, { "title": "Element of Generosity", "steps": [ { "n": "Charity", "d": "Giving to those in need without expecting reward." }, { "n": "Self-Care", "d": "Understanding that generosity also applies to oneself." }, { "n": "Inspiration", "d": "Using one's talent to bring beauty to others." }, { "n": "Sacrifice", "d": "Giving up something precious (like a tail) for a friend." }, { "n": "Rarity's Example", "d": "Leading by example in high society." } ]}, { "title": "Element of Loyalty", "steps": [ { "n": "Standing Fast", "d": "Not abandoning friends in the face of danger." }, { "n": "True Colors", "d": "Choosing friends over personal glory (Wonderbolts)." }, { "n": "Bravery", "d": "Facing fears to protect the pack." }, { "n": "Reliability", "d": "Always being there when called." }, { "n": "Rainbow's Test", "d": "Resisting the temptation of the Shadowbolts." } ]} ],
        "MEDICAL": [ { "title": "Ponyville Hospital", "steps": [ { "n": "Nurse Redheart", "d": "The primary caregiver managing patient intake." }, { "n": "Bandaging", "d": "Treating wing sprains and hoof injuries." }, { "n": "Magic Scan", "d": "Using unicorn magic to diagnose internal ailments." }, { "n": "Bed Rest", "d": "The standard prescription for exhaustion or flu." }, { "n": "Foal Delivery", "d": "Assisting in the birth of new ponies like the Cakes." } ]}, { "title": "Herbal Remedies", "steps": [ { "n": "Zecora's Hut", "d": "The zebra shaman providing potions from the Everfree Forest." }, { "n": "Poison Joke Cure", "d": "A herbal bath to reverse magical prank ailments." }, { "n": "Swamp Fever", "d": "Treating rare diseases with the Mage Meadowbrook flower." }, { "n": "Love Poison", "d": "Antidotes for accidental infatuation spells." }, { "n": "Tea Brewing", "d": "Creating calming brews for anxiety." } ]}, { "title": "Animal Care", "steps": [ { "n": "Fluttershy's Sanctuary", "d": "A home for injured and sick animals." }, { "n": "The Stare", "d": "Using assertive discipline to calm aggressive beasts." }, { "n": "Vet Skills", "d": "Treating everything from bunnies to bears." }, { "n": "Translation", "d": "Understanding animal speech to diagnose pain." }, { "n": "Kindness", "d": "Healing through compassion and gentle touch." } ]}, { "title": "Nutritional Health", "steps": [ { "n": "Apple Diet", "d": "The staple food providing vitality and strength." }, { "n": "Hay Burgers", "d": "A common meal for sustenance." }, { "n": "Oat Smoothies", "d": "Healthy drinks for energy." }, { "n": "Sugarcube Corner", "d": "Treats for mental health and happiness." }, { "n": "Soup Kitchen", "d": "Community feeding during crises." } ]}, { "title": "Sleep Therapy", "steps": [ { "n": "Dream Realm", "d": "Princess Luna monitoring dreams for nightmares." }, { "n": "Nightmare Ward", "d": "Luna entering dreams to help ponies face fears." }, { "n": "Tantabus", "d": "A creature formed from guilt that infects dreams." }, { "n": "Restful Sleep", "d": "Essential for magical recharge." }, { "n": "Peaceful Night", "d": "Luna's duty to ensure the kingdom sleeps well." } ]}, { "title": "Laughter Medicine", "steps": [ { "n": "Giggle at Ghosties", "d": "Using humor to dispel fear." }, { "n": "Party Planning", "d": "Boosting morale through social events." }, { "n": "Smile Song", "d": "Pinkie Pie's mission to make every pony smile." }, { "n": "Cheer Up", "d": "Interventions for depressed friends." }, { "n": "Joy", "d": "Laughter as a vital component of health." } ]}, { "title": "Family Bonds", "steps": [ { "n": "Apple Reunion", "d": "Strengthening ties with extended family." }, { "n": "Sibling Support", "d": "Apple Bloom and Big Mac helping each other." }, { "n": "Parental Love", "d": "The Cakes raising their chaotic twins." }, { "n": "Sisterhooves", "d": "Events bonding sisters like Rarity and Sweetie Belle." }, { "n": "Legacy", "d": "Honoring ancestors like Bright Mac and Pear Butter." } ]}, { "title": "Magical Healing", "steps": [ { "n": "Restoration Spell", "d": "Unicorn magic used to fix broken objects or bones." }, { "n": "Horn Glow", "d": "The diagnostic aura of a medical unicorn." }, { "n": "Energy Transfer", "d": "Sharing magic to help a weakened friend." }, { "n": "Age Spell", "d": "Magical mishaps causing age regression or progression." }, { "n": "Life Spark", "d": "The vital energy inherent in all living things." } ]}, { "title": "Radiant Healing", "steps": [ { "n": "Heart's Light", "d": "The Crystal Heart's wave that dispels depression." }, { "n": "Depression Cure", "d": "Curing the 'Crystal Ponies' of their gray, despairing state." }, { "n": "Hope Restoration", "d": "Reigniting the will to live and love." }, { "n": "Love Therapy", "d": "Using love as a tangible healing force." }, { "n": "Vitality Glow", "d": "The crystalline coat returning as a sign of health." } ]}, { "title": "Friendship Saving", "steps": [ { "n": "Intervention", "d": "Friends stepping in to stop self-destructive behavior." }, { "n": "Forgiveness", "d": "Healing the wounds of betrayal." }, { "n": "Support Group", "d": "The Mane Six helping each other through trauma." }, { "n": "World Saving", "d": "Healing the land itself from chaos or darkness." }, { "n": "Harmony", "d": "The ultimate state of social and physical health." } ]} ],
        "ECONOMIC": [ { "title": "Bit Economy", "steps": [ { "n": "Gold Bits", "d": "The standard gold coin currency of Equestria." }, { "n": "Job Market", "d": "Ponies working to earn a living." }, { "n": "Market Day", "d": "Buying and selling goods in the town square." }, { "n": "Savings", "d": "Saving up for big purchases like a new balloon." }, { "n": "Shopkeeping", "d": "Running local businesses like Barnyard Bargains." } ]}, { "title": "Apple Agribusiness", "steps": [ { "n": "Sweet Apple Acres", "d": "The massive farm supplying Ponyville's food." }, { "n": "Bucking Season", "d": "The harvest period requiring intense labor." }, { "n": "Cider Season", "d": "A high-demand period where cider sells out instantly." }, { "n": "Family Labor", "d": "Relying on family members rather than hired help." }, { "n": "Export", "d": "Sending apple products to Canterlot and beyond." } ]}, { "title": "Gemstone Trade", "steps": [ { "n": "Gem Mining", "d": "Rarity and the Diamond Dogs digging for jewels." }, { "n": "Dragon Consumption", "d": "Gems as a food source for dragons like Spike." }, { "n": "Fashion Use", "d": "Using gems to increase the value of dresses." }, { "n": "Rarity's Findings", "d": "The unicorn spell to locate buried gems." }, { "n": "Empire Exports", "d": "Crystal Empire trading rare magical crystals." } ]}, { "title": "Fashion Industry", "steps": [ { "n": "Boutique Chain", "d": "Rarity expanding her brand to Canterlot and Manehattan." }, { "n": "Custom Orders", "d": "Creating bespoke outfits for celebrities like Sapphire Shores." }, { "n": "Fashion Week", "d": "High-stakes industry events in Manehattan." }, { "n": "Trend Forecasting", "d": "Predicting the next big style." }, { "n": "Chic", "d": "The value of style and presentation." } ]}, { "title": "Weather Economy", "steps": [ { "n": "Cloud Production", "d": "Manufacturing weather in Cloudsdale." }, { "n": "Schedule Management", "d": "Towns paying for scheduled rain or sun." }, { "n": "Winter Wrap Up", "d": "The manual labor cost of clearing winter without magic." }, { "n": "Rain Supply", "d": "Ensuring farms get enough water for crops." }, { "n": "Sun Control", "d": "Celestia providing daylight for free." } ]}, { "title": "International Trade", "steps": [ { "n": "Yak Trade", "d": "Trading goods (and smashing them) with Yaks." }, { "n": "Griffon Scones", "d": "Importing baked goods from Griffonstone." }, { "n": "Exchange Rates", "d": "Dealing with different currencies." }, { "n": "Trade Agreements", "d": "Princess Twilight negotiating fair deals." }, { "n": "Fair", "d": "Trade fairs promoting cultural exchange." } ]}, { "title": "Educational Funding", "steps": [ { "n": "School Tuition", "d": "Costs associated with elite schools like Celestia's." }, { "n": "Textbook Sales", "d": "Revenue from educational materials." }, { "n": "NEA Grants", "d": "EEA (Equestrian Education Association) funding and rules." }, { "n": "Teaching Jobs", "d": "Employment for professors and tutors." }, { "n": "Growth", "d": "Investing in the future generation." } ]}, { "title": "Empire Faire", "steps": [ { "n": "Crystal Faire", "d": "A massive festival to power the Crystal Heart." }, { "n": "Tourism Boom", "d": "Visitors flocking to the returned Empire." }, { "n": "Rare Minerals", "d": "Trading unique crystal formations." }, { "n": "Light Prisms", "d": "Selling artifacts that play with light." }, { "n": "Hope Tourism", "d": "Visiting the Empire to feel the aura of hope." } ]}, { "title": "Literature Market", "steps": [ { "n": "Daring Do Books", "d": "A wildly popular adventure novel series." }, { "n": "Book Signing", "d": "Authors like A.K. Yearling meeting fans." }, { "n": "Publishing", "d": "The industry of printing and selling books." }, { "n": "Comic Books", "d": "Power Ponies comics sold in shops." }, { "n": "Knowledge", "d": "The value of information." } ]}, { "title": "Party Planning", "steps": [ { "n": "Event Hosting", "d": "Pinkie Pie planning parties for a fee (or fun)." }, { "n": "Cheese Sandwich", "d": "A rival party planner with a massive traveling business." }, { "n": "Supplies", "d": "Buying balloons, streamers, and cake." }, { "n": "Entertainment", "d": "Hiring bands or performers." }, { "n": "Smiles", "d": "The ultimate return on investment." } ]} ],
        "WEAPONS": [ { "title": "Pacifist Defense", "steps": [ { "n": "Friendship Beam", "d": "A rainbow laser that purifies rather than destroys." }, { "n": "Shield Bubble", "d": "Shining Armor's massive barrier spell." }, { "n": "Harmony Blast", "d": "The Elements turning evil into stone or reforming it." }, { "n": "Love Wave", "d": "Cadance and Shining Armor throwing wife/husband energy." }, { "n": "Peace", "d": "The goal of all conflict resolution." } ]}, { "title": "Orbital Cannons", "steps": [ { "n": "Rainbow Power", "d": "The Mane Six powering up to launch a massive beam." }, { "n": "Elements of Harmony", "d": "Artifacts capable of banishing gods to the moon." }, { "n": "Stone Gaze", "d": "Turning targets like Discord or Cockatrice victims to stone." }, { "n": "Tree Defense", "d": "The Tree of Harmony acting autonomously to protect the land." }, { "n": "Chest Box", "d": "The locked box containing the rainbow power." } ]}, { "title": "Guard Armory", "steps": [ { "n": "Solar Spear", "d": "Ceremonial and functional weapons of the Royal Guard." }, { "n": "Golden Armor", "d": "Enchanted plate armor for pegasus and unicorn guards." }, { "n": "Chariot", "d": "Drawn by pegasi for aerial transport and combat." }, { "n": "Helm", "d": "Protective headgear." }, { "n": "Formation", "d": "Defensive lines to block threats." } ]}, { "title": "Wonderbolt Tactics", "steps": [ { "n": "High Speed", "d": "Moving faster than the eye can see." }, { "n": "Aerial Maneuvers", "d": "Complex flight patterns to confuse enemies." }, { "n": "Cloud Kicking", "d": "Physical strikes against aerial targets." }, { "n": "Shockwave", "d": "Creating sonic booms to disorient." }, { "n": "Sonic Rainboom", "d": "A nuclear-level explosion of color and speed." } ]}, { "title": "Party Artillery", "steps": [ { "n": "Party Cannon", "d": "A howitzer that fires cake and confetti." }, { "n": "Cake Splat", "d": "Using food as a blinding projectile." }, { "n": "Surprise", "d": "Catching the enemy off guard with nonsense." }, { "n": "Rubber Chicken", "d": "Comedy weapons." }, { "n": "Fun", "d": "Disarming anger with joy." } ]}, { "title": "The Stare", "steps": [ { "n": "Intimidation", "d": "Fluttershy's terrifying ability to demand obedience." }, { "n": "Paralysis", "d": "Freezing a target in place with fear/respect." }, { "n": "Soul Gaze", "d": "Looking deep into the animal's soul." }, { "n": "Command", "d": "Forcing even a cockatrice to back down." }, { "n": "Shy Power", "d": "The hidden strength of the gentle." } ]}, { "title": "Earth Strength", "steps": [ { "n": "Apple Buck", "d": "A hind-leg kick capable of shattering stone." }, { "n": "Boulder Smash", "d": "Maud Pie's ability to disintegrate rocks." }, { "n": "Ground Pound", "d": "Shaking the earth with hooves." }, { "n": "Lasso", "d": "Applejack's skill with a rope." }, { "n": "Stamina", "d": "Outlasting the opponent." } ]}, { "title": "Magical Combat", "steps": [ { "n": "Magic Beam", "d": "Concentrated blasts of magic energy from the horn." }, { "n": "Telekinetic Throw", "d": "Hurling objects at enemies." }, { "n": "Levitation Hold", "d": "Suspending an enemy in mid-air." }, { "n": "Counterspell", "d": "Negating enemy magic." }, { "n": "Duel", "d": "A wizard's battle of beams and shields (Twilight vs Tirek)." } ]}, { "title": "Changeling Invasion", "steps": [ { "n": "Green Blast", "d": "Energy beams used by Changeling drones." }, { "n": "Impersonation", "d": "Infiltrating defenses by looking like loved ones." }, { "n": "Cocoon", "d": "Trapping victims in green slime." }, { "n": "Hive Mind", "d": "Coordinated swarm attacks." }, { "n": "Love Drain", "d": "Weakening enemies by eating their love." } ]}, { "title": "Rainbow Key", "steps": [ { "n": "Friendship Key", "d": "Items representing lessons learned." }, { "n": "Chest Unlock", "d": "Opening the box of Rainbow Power." }, { "n": "Castle Birth", "d": "Creating the Crystal Castle from the box." }, { "n": "Friendship Mark", "d": "The cutie marks glowing in unison." }, { "n": "Tirek's Defeat", "d": "Using the power to strip the villain of magic." } ]} ]
    },

    "leclaire_isle": {
        "ECONOMIC": [
            { "title": "Bakery Economy", "steps": [ { "n": "Flour Power", "d": "The foundational currency and resource, milled from endless wheat fields." }, { "n": "Yeast Growth", "d": "Cultivating magical yeast that expands dough to architectural sizes." }, { "n": "Kneading Labor", "d": "The workforce dedicated to preparing dough for construction and consumption." }, { "n": "Grand Ovens", "d": "Massive geothermal vents used to bake city-block sized cakes." }, { "n": "Rise & Grind", "d": "The daily cycle of baking fresh goods for the populace." } ]},
            { "title": "Sugar Refining", "steps": [ { "n": "Cane Forest", "d": "Harvesting giant candy canes from the mint forests." }, { "n": "Syrup Extraction", "d": "Tapping maple trees for pure, high-grade glucose syrup." }, { "n": "Spun Sugar", "d": "Processing sugar into cotton-candy clouds for export." }, { "n": "Rock Candy", "d": "Mining crystallized sugar from underground caverns." }, { "n": "Glass Work", "d": "Creating transparent building materials from hardened sugar." } ]},
            { "title": "Glazing Industry", "steps": [ { "n": "Royal Icing", "d": "Mixing egg whites and sugar for hard, structural cement." }, { "n": "Ganache Pour", "d": "Creating rivers of chocolate for transport and dipping." }, { "n": "Setting Agents", "d": "Using gelatin to stabilize structures against heat." }, { "n": "Mirror Glaze", "d": "A luxury finish for high-end architecture." }, { "n": "Hard Shell", "d": "Protective coatings for goods facing export." } ]},
            { "title": "Export Trade", "steps": [ { "n": "Donut Fleet", "d": "Circular rafts shipping pastries to neighboring isles." }, { "n": "Gold Wrapper", "d": "The foil currency used for international trade." }, { "n": "Sweet Surplus", "d": "Managing the endless supply of goods vs demand." }, { "n": "Empire Expansion", "d": "Seeking new markets for their sugary goods." }, { "n": "Wealth Hoard", "d": "Accumulating vast stores of non-perishable candy." } ]},
            { "title": "Culinary Tourism", "steps": [ { "n": "Tasting Tours", "d": "Visitors paying to eat their way through the landscape." }, { "n": "Edible Hotels", "d": "Accommodation where you can eat the furniture (for a fee)." }, { "n": "Stay & Feast", "d": "All-inclusive packages for gluttonous travelers." }, { "n": "Sugar Safari", "d": "Hunting for rare gummy bears in the wild." }, { "n": "Souvenir Sweets", "d": "Selling boxed assortments to tourists." } ]},
            { "title": "Chocolate Works", "steps": [ { "n": "Cocoa Bean", "d": "The raw currency of the dark chocolate region." }, { "n": "Roasting Fires", "d": "Large pyres used to bring out the flavor." }, { "n": "Melting Pot", "d": "The central vat where all chocolate is tempered." }, { "n": "Mold Press", "d": "Shaping chocolate into coins, bunnies, and bricks." }, { "n": "Dark Reserve", "d": "The high-value vintage chocolate stored in vaults." } ]},
            { "title": "Dairy Creamery", "steps": [ { "n": "Milk River", "d": "A flowing river of fresh milk powering the wheels." }, { "n": "Whipped Peaks", "d": "Mountain ranges of stable whipped cream." }, { "n": "Filling Injection", "d": "Pumping cream into eclairs and donuts." }, { "n": "Heavy Cream", "d": "The dense, rich layer used for luxury goods." }, { "n": "Butter Churn", "d": "Creating the fat needed for the shortbread foundations." } ]},
            { "title": "Sprinkle Factory", "steps": [ { "n": "Rainbow Press", "d": "Extruding colored sugar paste into tiny rods." }, { "n": "Color Dyeing", "d": "Using fruit extracts to dye the sprinkles." }, { "n": "Sorting", "d": "Separating nonpareils from jimmies." }, { "n": "Crunch Test", "d": "Ensuring optimal texture." }, { "n": "Fun Distribution", "d": "Spreading joy (and sprinkles) everywhere." } ]},
            { "title": "Cafe Culture", "steps": [ { "n": "Brewing Vats", "d": "Giant cauldrons of hot coffee." }, { "n": "Bean Roastery", "d": "Processing caffeine beans for energy." }, { "n": "Morning Rush", "d": "The peak economic activity hour." }, { "n": "Wake Up", "d": "The cultural mandate to be alert and happy." }, { "n": "Energy Drink", "d": "Selling concentrated sugar-caffeine potions." } ]},
            { "title": "Infinite Dough", "steps": [ { "n": "Yeast Magic", "d": "A magical strain that regenerates dough overnight." }, { "n": "Growth Spell", "d": "Ensuring the food supply never runs out." }, { "n": "Surplus", "d": "The problem of having too much food." }, { "n": "Eternal Feast", "d": "A society post-scarcity, focused on flavor." }, { "n": "Dough Golem", "d": "Automated workers made of raw dough." } ]}
        ],
        "MEDICAL": [ { "title": "Comfort Food", "steps": [ { "n": "Binge Eatery", "d": "Clinics where sadness is treated with massive meals." }, { "n": "Warmth Therapy", "d": "Wrapping patients in warm blankets and hot cocoa." }, { "n": "Serotonin Boost", "d": "Using sugar to artificially spike happiness." }, { "n": "Full Stomach", "d": "The belief that a full belly cures all ills." }, { "n": "Sugar Coma", "d": "Inducing deep sleep for recovery." } ]}, { "title": "Sugar Rush", "steps": [ { "n": "Glucose Spike", "d": "Emergency energy for exhausted citizens." }, { "n": "Hyper Speed", "d": "Temporarily increasing metabolic rate." }, { "n": "Crash Management", "d": "Dealing with the lethargy after the rush." }, { "n": "Adrenaline Candy", "d": "Special sweets for combat situations." }, { "n": "Addiction", "d": "The downside of a sugar-based medical system." } ]}, { "title": "Frosting Casts", "steps": [ { "n": "Royal Hardening", "d": "Using hard icing to set broken bones." }, { "n": "Sealant", "d": "Plugging wounds with thick fondant." }, { "n": "Protective Shell", "d": "Creating a candy shell over burns." }, { "n": "Sweet Salve", "d": "Antibacterial honey mixtures." }, { "n": "Candy Cane Splint", "d": "Using rigid candy to support limbs." } ]}, { "title": "Herbal Teas", "steps": [ { "n": "Mint Leaf", "d": "Harvested from the mint forest for nausea." }, { "n": "Chamomile Brew", "d": "For calming hyperactive children." }, { "n": "Hot Soak", "d": "Bathing in warm tea for skin health." }, { "n": "Healer's Kettle", "d": "The apothecary's primary tool." }, { "n": "Sip & Soothe", "d": "The ritual of drinking health." } ]}, { "title": "Cake Slice", "steps": [ { "n": "Layered Care", "d": "Multi-vitamin cakes." }, { "n": "Portion Control", "d": "Prescribing exact slice sizes." }, { "n": "Sharing", "d": "Community healing through shared food." }, { "n": "Miracle Crumb", "d": "Legendary cake said to cure death." }, { "n": "Life Sweetener", "d": "Making medicine taste good." } ]}, { "title": "Medicinal Candy", "steps": [ { "n": "Cough Drops", "d": "Mentholated hard candies." }, { "n": "Lollipops", "d": "Given to children after procedures." }, { "n": "Gummi Vitamins", "d": "Chewable supplements." }, { "n": "Licorice Root", "d": "A polarizing but effective cure." }, { "n": "Peppermint", "d": "Clearing sinuses." } ]}, { "title": "Gelatin Bacta", "steps": [ { "n": "Jelly Tank", "d": "Submerging patients in healing gel." }, { "n": "Wiggle Therapy", "d": "Physical therapy on bouncing jelly." }, { "n": "Cooling Gel", "d": "Reducing fevers." }, { "n": "Soothe", "d": "Gentle contact." }, { "n": "Aloe Jelly", "d": "Skin repair." } ]}, { "title": "Breath Mints", "steps": [ { "n": "Fresh Air", "d": "Oxygenating the blood." }, { "n": "Cool Breeze", "d": "Lowering body temperature." }, { "n": "Cleanse", "d": "Removing toxins from the mouth." }, { "n": "Focus", "d": "Sharpening the mind." }, { "n": "Wintergreen", "d": "A potent analgesic." } ]}, { "title": "Honey Healing", "steps": [ { "n": "Apiary", "d": "Keeping bees for medical honey." }, { "n": "Sweet Coat", "d": "Covering wounds to prevent infection." }, { "n": "Throat Coat", "d": "Soothing sore throats." }, { "n": "Liquid Gold", "d": "The high value of pure honey." }, { "n": "Preservation", "d": "Using honey to preserve tissue." } ]}, { "title": "Ambrosia", "steps": [ { "n": "Divine Nectar", "d": "A mythical drink of the gods." }, { "n": "Vitality", "d": "Restoring youth." }, { "n": "Resurrection", "d": "Bringing back the fallen." }, { "n": "Immortality", "d": "Living forever in sweetness." }, { "n": "The Source", "d": "The hidden spring of life." } ]} ],
        "TECH": [ { "title": "Industrial Ovens", "steps": [ { "n": "Brick Kiln", "d": "Traditional wood-fired ovens for pizza." }, { "n": "Cast Iron", "d": "Heavy duty baking for breads." }, { "n": "Gas Range", "d": "Controllable heat for delicate pastries." }, { "n": "Magic Fire", "d": "Enchanted flames that never burn the food." }, { "n": "Perfect Timer", "d": "Technology ensuring nothing is ever undercooked." } ]}, { "title": "Mixing Machinery", "steps": [ { "n": "Giant Spoon", "d": "Manual labor for large vats." }, { "n": "Planetary Whisk", "d": "Automated orbiting beaters." }, { "n": "Crank Power", "d": "Hand-cranked gears." }, { "n": "Motor Drive", "d": "Steam or electric engines." }, { "n": "Auto-Knead", "d": "Robotic arms for dough." } ]}, { "title": "Food Preservation", "steps": [ { "n": "Airtight Jars", "d": "Vacuum sealing freshness." }, { "n": "Salt Curing", "d": "Using salt mines to preserve meat." }, { "n": "Ice Box", "d": "Blocks of ice from the slushy mountains." }, { "n": "Stasis Field", "d": "Magical time-stop for cakes." }, { "n": "Freshness Seal", "d": "Wax coatings." } ]}, { "title": "Candy Construction", "steps": [ { "n": "Gingerbread Walls", "d": "Structural cookie panels." }, { "n": "Icing Cement", "d": "The glue that holds the city together." }, { "n": "Candy Cane Beams", "d": "Reinforced structural supports." }, { "n": "Gumdrop Rivets", "d": "Flexible joints." }, { "n": "Castle Design", "d": "Architectural feats of sugar." } ]}, { "title": "Packaging Tech", "steps": [ { "n": "Box Folders", "d": "Origami machines for pastry boxes." }, { "n": "Wax Paper", "d": "Non-stick wrapping." }, { "n": "Silk Ribbon", "d": "Decorative tying." }, { "n": "Sealing Wax", "d": "Tamper-proofing." }, { "n": "Logistics", "d": "Labeling and sorting." } ]}, { "title": "Delivery Systems", "steps": [ { "n": "Push Cart", "d": "Street vendors." }, { "n": "Bicycle Courier", "d": "Fast urban delivery." }, { "n": "Ice Cream Truck", "d": "Mobile distribution units." }, { "n": "Pastry Drone", "d": "Aerial drop-off." }, { "n": "Instant Transmission", "d": "Magic portals for hot pizza." } ]}, { "title": "Agricultural Tech", "steps": [ { "n": "Wheat Combine", "d": "Harvesting the grain fields." }, { "n": "Cane Machete", "d": "Tools for the sugar forest." }, { "n": "Cocoa Picker", "d": "Harvesting pods." }, { "n": "Dairy Milker", "d": "Automated cow milking." }, { "n": "Abundance", "d": "Managing the high yield." } ]}, { "title": "Refining Mills", "steps": [ { "n": "Windmill", "d": "Grinding grain into flour." }, { "n": "Stone Wheel", "d": "Crushing cocoa beans." }, { "n": "Purifier", "d": "Bleaching sugar white." }, { "n": "Sifter", "d": "Removing lumps." }, { "n": "Fine Dust", "d": "Creating powdered sugar." } ]}, { "title": "Flavor Science", "steps": [ { "n": "Extract Still", "d": "Distilling vanilla and almond." }, { "n": "Essence Capture", "d": "Trapping the smell of flowers." }, { "n": "Enhancer", "d": "MSG for sweets." }, { "n": "Artificial", "d": "Synthesizing banana flavor." }, { "n": "Supreme Taste", "d": "The quest for the perfect flavor profile." } ]}, { "title": "Sugar Glass", "steps": [ { "n": "Melting Point", "d": "Heating sugar to liquid." }, { "n": "Pouring Table", "d": "Creating flat sheets." }, { "n": "Transparency", "d": "Achieving clear glass." }, { "n": "Tempering", "d": "Making it shatter-resistant." }, { "n": "Windows", "d": "Edible architecture." } ]} ],
        "POLITICAL": [ { "title": "Confectionary Democracy", "steps": [ { "n": "Sweet Vote", "d": "Casting ballots made of chocolate." }, { "n": "Ballot Box", "d": "A locked cookie jar." }, { "n": "Counting", "d": "Tallying the votes." }, { "n": "Election Day", "d": "A public holiday with free food." }, { "n": "Leader", "d": "The elected President of Pastries." } ]}, { "title": "Ruler Doug", "steps": [ { "n": "Orator", "d": "Giving speeches from a balcony." }, { "n": "Charisma", "d": "Winning over the crowd." }, { "n": "Leadership", "d": "Guiding the nation." }, { "n": "Expansionist", "d": "Wanting more land for wheat." }, { "n": "King Doughnut", "d": "His self-proclaimed title." } ]}, { "title": "Citizen Rights", "steps": [ { "n": "Free Speech", "d": "The right to complain about the food." }, { "n": "Assembly", "d": "Gathering in the town square." }, { "n": "Suffrage", "d": "The right to vote." }, { "n": "Fairness", "d": "Equal distribution of sprinkles." }, { "n": "Freedom", "d": "Liberty to bake whatever you want." } ]}, { "title": "Isle Unity", "steps": [ { "n": "Togetherness", "d": "Baking as a community." }, { "n": "One Dough", "d": "The philosophy that we are all the same mix." }, { "n": "Island Pride", "d": "Patriotism for the homeland." }, { "n": "Nation State", "d": "Sovereignty." }, { "n": "World Stage", "d": "Interaction with other islands." } ]}, { "title": "Militia Defense", "steps": [ { "n": "Minute Men", "d": "Bakers ready to fight in a minute." }, { "n": "Cookie Guard", "d": "Soldiers in gingerbread armor." }, { "n": "Wall Watch", "d": "Patrolling the perimeter." }, { "n": "Gumdrop Ship", "d": "Naval defense." }, { "n": "Safe Harbor", "d": "Protecting the trade routes." } ]}, { "title": "Trade Relations", "steps": [ { "n": "Deal Making", "d": "Negotiating prices for flour." }, { "n": "Route Safety", "d": "Clearing pirates from the sea." }, { "n": "Partnership", "d": "Alliances with fruit islands." }, { "n": "Wealth", "d": "Accumulating gold." }, { "n": "Influence", "d": "Soft power through delicious exports." } ]}, { "title": "Imperial Expansion", "steps": [ { "n": "Master Plan", "d": "Maps of the known world." }, { "n": "Build Up", "d": "Increasing military spending." }, { "n": "Claiming", "d": "Planting the flag on new lands." }, { "n": "Growth", "d": "Spreading the culture." }, { "n": "Conquest", "d": "Taking over rival bakeries." } ]}, { "title": "Diplomatic Corps", "steps": [ { "n": "Tea Time", "d": "Negotiating over hot drinks." }, { "n": "Meeting", "d": "Summits with foreign leaders." }, { "n": "Agreement", "d": "Signing treaties." }, { "n": "Peace", "d": "Avoiding war through talk." }, { "n": "Exchange", "d": "Cultural swaps." } ]}, { "title": "Legal System", "steps": [ { "n": "Written Code", "d": "Laws inscribed on tablets." }, { "n": "Judge", "d": "Interpreting the law." }, { "n": "Fair Trial", "d": "Innocent until proven guilty." }, { "n": "Order", "d": "Maintaining society." }, { "n": "Justice", "d": "Punishing the wicked." } ]}, { "title": "Sugar Empire", "steps": [ { "n": "Rise", "d": "The ascent to power." }, { "n": "Rule", "d": "Governing the masses." }, { "n": "Power", "d": "Absolute control." }, { "n": "Glory", "d": "Monuments to greatness." }, { "n": "Doughnut Throne", "d": "The seat of power." } ]} ],
        "WEAPONS": [ { "title": "Culinary Combat", "steps": [ { "n": "Pie Throw", "d": "Blinding enemies with cream." }, { "n": "Splat Damage", "d": "Area of effect sticky mess." }, { "n": "Messy War", "d": "Ruining uniforms." }, { "n": "Sticky Trap", "d": "Slowing movement with syrup." }, { "n": "Victory", "d": "Humiliating the foe." } ]}, { "title": "Hardtack Shield", "steps": [ { "n": "Twice Baked", "d": "Making bread rock hard." }, { "n": "Dehydration", "d": "Removing moisture to increase durability." }, { "n": "Block", "d": "Deflecting blows." }, { "n": "Wall", "d": "Building fortifications." }, { "n": "Armor", "d": "Wearable biscuits." } ]}, { "title": "Caramel Napalm", "steps": [ { "n": "Molten Sugar", "d": "Extremely hot liquid." }, { "n": "Adhesion", "d": "Sticking to the target while burning." }, { "n": "Burn", "d": "Heat damage." }, { "n": "Trap", "d": "Hardening to trap the victim." }, { "n": "Solidify", "d": "Encasing them in amber." } ]}, { "title": "Candy Cane Pike", "steps": [ { "n": "Sharpening", "d": "Sucking the end to a point." }, { "n": "Spear Wall", "d": "Formation of pikemen." }, { "n": "Hook", "d": "Pulling riders off mounts." }, { "n": "Strike", "d": "Thrusting attacks." }, { "n": "Snap", "d": "Breaks leaving shrapnel." } ]}, { "title": "Jawbreaker Cannon", "steps": [ { "n": "Dense Ammo", "d": "Heavy, layered candy balls." }, { "n": "Siege Weapon", "d": "Breaking walls." }, { "n": "Velocity", "d": "High speed impact." }, { "n": "Smash", "d": "Crushing damage." }, { "n": "Artillery", "d": "Long range fire." } ]}, { "title": "Soda Spray", "steps": [ { "n": "Agitation", "d": "Shaking the bottle." }, { "n": "Nozzle", "d": "Focusing the stream." }, { "n": "Pressure", "d": "High PSI blast." }, { "n": "Acidic", "d": "Corroding armor." }, { "n": "Knockback", "d": "Pushing enemies away." } ]}, { "title": "Kitchenware", "steps": [ { "n": "Trident Fork", "d": "Using giant forks as spears." }, { "n": "Butcher Knife", "d": "Heavy slashing weapon." }, { "n": "Spoon Catapult", "d": "Launching projectiles." }, { "n": "Sharp Edge", "d": "Cutting power." }, { "n": "Improvised", "d": "Using what is at hand." } ]}, { "title": "Heat Ray", "steps": [ { "n": "Oven Door", "d": "Opening the blast furnace." }, { "n": "Torch", "d": "Brulee torches as flamethrowers." }, { "n": "Scorch", "d": "Burning the ground." }, { "n": "Melt", "d": "Turning enemies to puddle." }, { "n": "Fire", "d": "The primal element." } ]}, { "title": "Cryo Freeze", "steps": [ { "n": "Brain Freeze", "d": "Psychic ice damage." }, { "n": "Ice Cream", "d": "Burying them in soft serve." }, { "n": "Solid Block", "d": "Freezing them in place." }, { "n": "Shatter", "d": "Breaking the frozen foe." }, { "n": "Cold Storage", "d": "Taking prisoners." } ]}, { "title": "Sugar Cannon", "steps": [ { "n": "Load", "d": "Packing powder." }, { "n": "Aim", "d": "Targeting." }, { "n": "Fire", "d": "Explosive release." }, { "n": "Boom", "d": "The sound of war." }, { "n": "Dust Cloud", "d": "Obscuring vision." } ]} ],
        "MAGIC": [ { "title": "Vitality Baking", "steps": [ { "n": "Soul Dough", "d": "Breathing life into the mix." }, { "n": "Rising Spirit", "d": "The animation of the construct." }, { "n": "Live", "d": "The golem awakens." }, { "n": "Movement", "d": "Clumsy first steps." }, { "n": "Friend", "d": "Creating a companion." } ]}, { "title": "Sweet Scent", "steps": [ { "n": "Attract", "d": "Luring in prey or customers." }, { "n": "Aromatherapy", "d": "Calming the mind." }, { "n": "Pheromones", "d": "Love potions." }, { "n": "Memory", "d": "Triggering nostalgia." }, { "n": "Comfort", "d": "Feeling safe." } ]}, { "title": "Creation Magic", "steps": [ { "n": "Alchemy", "d": "Mixing ingredients to create gold." }, { "n": "Forming", "d": "Shaping reality like clay." }, { "n": "Manifest", "d": "Making the imaginary real." }, { "n": "Structure", "d": "Building without support." }, { "n": "Reality", "d": "A world of pure imagination." } ]}, { "title": "Transmutation", "steps": [ { "n": "Lead to Gold", "d": "The classic alchemist's dream." }, { "n": "Sugar to Diamond", "d": "Compressing carbon." }, { "n": "Water to Wine", "d": "Fermentation spells." }, { "n": "Change", "d": "Altering properties." }, { "n": "Wealth", "d": "Infinite riches." } ]}, { "title": "Chrono-Preservation", "steps": [ { "n": "Stasis", "d": "Stopping time to prevent rot." }, { "n": "Freshness", "d": "Eternal youth." }, { "n": "Pause", "d": "Halting a reaction." }, { "n": "Stop", "d": "Freezing enemies." }, { "n": "Lasting", "d": "Immortality." } ]}, { "title": "Charm Person", "steps": [ { "n": "Smile", "d": "Disarming with a look." }, { "n": "Sugary Words", "d": "Persuasion bonuses." }, { "n": "Want", "d": "Creating desire." }, { "n": "Need", "d": "Creating addiction." }, { "n": "Love", "d": "Magical binding." } ]}, { "title": "Growth Surge", "steps": [ { "n": "Super Size", "d": "Mario-style mushroom growth." }, { "n": "Fast Forward", "d": "Skipping the wait time." }, { "n": "Strong", "d": "Muscle mass increase." }, { "n": "More", "d": "Duplication." }, { "n": "Giant", "d": "Kaiju pastry." } ]}, { "title": "Web Sticky", "steps": [ { "n": "Adhere", "d": "Walking on walls." }, { "n": "Trap", "d": "Binding enemies." }, { "n": "Slow", "d": "Hampering movement." }, { "n": "Stop", "d": "Total immobilization." }, { "n": "Web", "d": "Spun sugar nets." } ]}, { "title": "Pyro-Bake", "steps": [ { "n": "Internal Heat", "d": "Cooking from the inside out." }, { "n": "Hot Hands", "d": "Burning touch." }, { "n": "Fireball", "d": "Thrown flame." }, { "n": "Cook", "d": "Preparing food instantly." }, { "n": "Bake", "d": "The element of fire." } ]}, { "title": "Soul Infusion", "steps": [ { "n": "Horcrux", "d": "Putting a piece of soul in an object." }, { "n": "Gift", "d": "Giving life to another." }, { "n": "Make", "d": "Crafting intelligence." }, { "n": "Live", "d": "Self-sustaining magic." }, { "n": "Golem", "d": "The servant created." } ]} ]
    },

    "teyvat": {
        "MAGIC": [
            { "title": "Elemental Vision", "steps": [ { "n": "Ambition Focus", "d": "The intense desire that attracts a god's gaze." }, { "n": "Divine Gift", "d": "Receiving a Vision, an external focus for elemental power." }, { "n": "Elemental Channel", "d": "Drawing power from the leylines through the Vision." }, { "n": "Weapon Infusion", "d": "Coating a weapon in elemental energy." }, { "n": "Burst State", "d": "Unleashing maximum power in a temporary state." } ]},
            { "title": "Elemental Resonance", "steps": [ { "n": "Party Synergy", "d": "The passive buffs granted by having two of the same element." }, { "n": "Team Composition", "d": "Building a squad to maximize reactions." }, { "n": "Stat Boost", "d": "Increased attack or resistance from resonance." }, { "n": "Energy Particles", "d": "Generating orbs to fuel bursts." }, { "n": "Battery Strategy", "d": "Using one character to charge another." } ]},
            { "title": "Chemical Reaction", "steps": [ { "n": "Application", "d": "Applying an elemental aura to a target." }, { "n": "Trigger", "d": "Hitting the aura with a reacting element." }, { "n": "Amplification", "d": "Melt/Vaporize multiplying damage." }, { "n": "Transformation", "d": "Bloom/Swirl creating new projectiles or spreading effects." }, { "n": "Dendro Complexity", "d": "The intricate reactions of the element of wisdom." } ]},
            { "title": "Alchemy Craft", "steps": [ { "n": "Crafting Bench", "d": "The ubiquitous station for transmutation." }, { "n": "Material Conversion", "d": "Turning low-tier monster drops into high-tier ones." }, { "n": "Transmutation", "d": "Changing the element of ascension gems." }, { "n": "Resin Condensation", "d": "Solidifying leyline energy for later use." }, { "n": "Khemia", "d": "The forbidden ancient art of creating life." } ]},
            { "title": "Ley Line Flow", "steps": [ { "n": "Earth Veins", "d": "The network of elemental energy running through the planet." }, { "n": "Blossom of Wealth", "d": "Manifesting gold from the earth's memory." }, { "n": "Petrified Trees", "d": "Ancient trees in domains that yield artifacts." }, { "n": "Memory Storage", "d": "The leylines recording the history of the world." }, { "n": "Irminsul", "d": "The white tree that records all knowledge and defines reality." } ]},
            { "title": "Gnosis Authority", "steps": [ { "n": "Chess Piece", "d": "The physical form of the Gnosis, resembling a chess piece." }, { "n": "Heart of God", "d": "An internal organ granting connection to Celestia." }, { "n": "Divine Power", "d": "Granting the ability to produce Mora or defend a nation." }, { "n": "Akasha Link", "d": "Powering the Sumeru internet." }, { "n": "Third Descender", "d": "The corpse from which the Gnosises were carved." } ]},
            { "title": "Adeptal Arts", "steps": [ { "n": "Sigil Magic", "d": "Using written symbols to cast spells." }, { "n": "Sub-Space Creation", "d": "Building entire worlds inside teapots." }, { "n": "Shape Shifting", "d": "Taking human or beast form at will." }, { "n": "Immortality", "d": "Living for thousands of years." }, { "n": "Enlightenment", "d": "The cultivation of spiritual power." } ]},
            { "title": "Abyssal Void", "steps": [ { "n": "Forbidden Knowledge", "d": "Truths from outside the world that drive people mad." }, { "n": "Corruption", "d": "The mutative power of the Abyss." }, { "n": "Heraldry", "d": "Elite monsters wielding abyssal elements." }, { "n": "Lector Scripture", "d": "Chanting dark spells to strip energy." }, { "n": "The Sinner", "d": "A god-like entity worshipped by the Abyss Order." } ]},
            { "title": "Celestial Law", "steps": [ { "n": "Skyfrost Nail", "d": "Pillars dropped from the sky to freeze civilizations." }, { "n": "Heavenly Principles", "d": "The laws that govern Teyvat, enforced by the Unknown God." }, { "n": "False Sky", "d": "The theory that the stars are a lie." }, { "n": "Fate Weaving", "d": "Constellations determining destiny." }, { "n": "Divine Throne", "d": "The seats of the Archons in Celestia." } ]},
            { "title": "Traveler's Light", "steps": [ { "n": "Descender", "d": "An entity from outside the world." }, { "n": "World Crossing", "d": "The ability to travel between universes." }, { "n": "Twin Bond", "d": "The connection between the siblings." }, { "n": "Purification", "d": "Cleansing corruption like Dvalin's tears." }, { "n": "Element Absorption", "d": "Wielding elements without a Vision." } ]}
        ],
        "WEAPONS": [ { "title": "Billet Forging", "steps": [ { "n": "Ore Mining", "d": "Collecting Iron and White Iron chunks." }, { "n": "Northlander Billet", "d": "A prototype weapon form used as a base." }, { "n": "Hammering", "d": "Shaping the metal at the anvil." }, { "n": "Blade Honing", "d": "Sharpening the edge." }, { "n": "Refinement", "d": "Improving the weapon's passive ability with duplicates." } ]}, { "title": "Artifact Set", "steps": [ { "n": "Domain Run", "d": "Fighting through dungeons to earn relics." }, { "n": "Set Bonus", "d": "Equipping 2 or 4 pieces for powerful effects." }, { "n": "Main Stat", "d": "The primary attribute like Attack or Crit Rate." }, { "n": "Sub Stat", "d": "Random secondary attributes to optimize." }, { "n": "Strongbox", "d": "Recycling bad artifacts for a chance at good ones." } ]}, { "title": "Bow Archery", "steps": [ { "n": "Aimed Shot", "d": "Precision targeting for weak points." }, { "n": "Charged Shot", "d": "Infusing the arrow with elemental energy." }, { "n": "Rapid Fire", "d": "Quick normal attacks." }, { "n": "Trick Shot", "d": "Unique abilities like Yelan's lifeline." }, { "n": "Skyward Harp", "d": "A legendary Mondstadt bow sung of in ballads." } ]}, { "title": "Swordplay", "steps": [ { "n": "Normal Chain", "d": "A sequence of 5 fast strikes." }, { "n": "Elemental Skill", "d": "A short cooldown magic attack." }, { "n": "Elemental Burst", "d": "The ultimate move requiring energy." }, { "n": "Mistsplitter", "d": "A legendary Inazuman katana." }, { "n": "Primordial Jade", "d": "Weapons crafted by the Archons." } ]}, { "title": "Claymore Crush", "steps": [ { "n": "Heavy Swing", "d": "Slow but damaging attacks." }, { "n": "Spin to Win", "d": "A charged attack that spins the user." }, { "n": "Shield Break", "d": "The best weapon for shattering geo shields." }, { "n": "Gravity", "d": "Using weight to stagger enemies." }, { "n": "Wolf's Gravestone", "d": "The blade of the Wolf of the North." } ]}, { "title": "Polearm Arts", "steps": [ { "n": "Thrust", "d": "Fast, multi-hit pokes." }, { "n": "Charge Drill", "d": "A corkscrew attack that moves forward." }, { "n": "Plunge", "d": "Dropping from the air to slam the ground (Xiao)." }, { "n": "Jade Spear", "d": "Xiao's signature weapon." }, { "n": "Staff of Homa", "d": "A ritual staff used in funerals." } ]}, { "title": "Catalyst Cast", "steps": [ { "n": "Grimoire", "d": "Using a book to channel magic." }, { "n": "Orb", "d": "Using a floating sphere." }, { "n": "Auto-Aim", "d": "Projectiles that track enemies." }, { "n": "Elemental Normal", "d": "All attacks deal elemental damage." }, { "n": "Kagura's Verity", "d": "Yae Miko's ritual bells." } ]}, { "title": "Fatui Tech", "steps": [ { "n": "Delusion", "d": "A counterfeit Vision draining life for power." }, { "n": "Mask", "d": "Hiding identity and humanity." }, { "n": "Skirmisher Gear", "d": "Guns, hammers, and staves infused with elements." }, { "n": "Harbinger Power", "d": "God-level strength granted by the Tsaritsa." }, { "n": "Mecha", "d": "Scaramouche's giant god-robot." } ]}, { "title": "Ruin Machines", "steps": [ { "n": "Chaos Core", "d": "The energy source of the automaton." }, { "n": "Ruin Guard", "d": "The classic 'Mr. Cyclops' missile shooter." }, { "n": "Ruin Hunter", "d": "A floating, flying combat unit." }, { "n": "Perpetual Array", "d": "A boss machine that splits into parts." }, { "n": "Laser Eye", "d": "The weak point of all ruin machines." } ]}, { "title": "Archon War", "steps": [ { "n": "Musou no Hitotachi", "d": "Raiden's island-splitting sword technique." }, { "n": "Planet Befall", "d": "Zhongli dropping a meteor." }, { "n": "Vortex God", "d": "Osial, an ancient enemy buried under the sea." }, { "n": "Divine Body", "d": "The true form of a god (Dragon, Wolf, etc)." }, { "n": "Erosion", "d": "The slow degradation of a god's mind over time." } ]} ],
        "TECH": [ { "title": "Khaenri'ah Tech", "steps": [ { "n": "Field Tiller", "d": "The code name for Ruin Guards, farming implements of death." }, { "n": "Perpetual Motion", "d": "Energy sources that never run out." }, { "n": "Bio-Alchemy", "d": "Creating monsters like Durin and the Rifthounds." }, { "n": "Robot Army", "d": "Automata left behind after the nation's fall." }, { "n": "Lost History", "d": "Technology far surpassing modern Teyvat." } ]}, { "title": "Fontaine Engineering", "steps": [ { "n": "Clockwork Meka", "d": "Robots patrolling the city of justice." }, { "n": "Arkhe System", "d": "Energy derived from the clash of Pneuma and Ousia." }, { "n": "Indemnitium", "d": "Energy harvested from the people's belief in justice." }, { "n": "Flying Airships", "d": "Public transport blimps." }, { "n": "Aquabus", "d": "Canal boats moving citizens." } ]}, { "title": "Akasha Terminal", "steps": [ { "n": "Ear Piece", "d": "The wearable interface." }, { "n": "Knowledge Hive", "d": "Instant access to the wisdom of the dendro archon." }, { "n": "Canned Knowledge", "d": "Marketable capsules containing skills (like sword fighting)." }, { "n": "Dream Harvesting", "d": "The dark secret of how the system was powered." }, { "n": "Shutdown", "d": "Nahida turning off the system to free her people." } ]}, { "title": "Kamera Optics", "steps": [ { "n": "Daguerreotype", "d": "The early tech brought from Fontaine." }, { "n": "Instant Print", "d": "Photos developing immediately." }, { "n": "Special Filters", "d": "Lenses to see spirits or events." }, { "n": "Film Frame", "d": "Capturing moments in time." }, { "n": "Analysis", "d": "Using photos for reconnaissance." } ]}, { "title": "Wind Glider", "steps": [ { "n": "Wing Frame", "d": "A light retractable frame worn on the back." }, { "n": "Wind Current", "d": "Riding updrafts to gain height." }, { "n": "Gliding License", "d": "Legal requirement to fly in Mondstadt." }, { "n": "Skin Design", "d": "Regional variants representing different nations." }, { "n": "Flight Test", "d": "Amber's exams for new flyers." } ]}, { "title": "Inazuman Forging", "steps": [ { "n": "Mikage Furnace", "d": "A massive smelter utilizing Tatarigami energy." }, { "n": "Jade Steel", "d": "A specialized alloy for katanas." }, { "n": "Raiden Gokaden", "d": "The five schools of smithing art." }, { "n": "Sword Spirit", "d": "Blades gaining sentience." }, { "n": "Tatara Tales", "d": "The history of the forge." } ]}, { "title": "Alchemical Life", "steps": [ { "n": "Synthesizer", "d": "The machine used to craft materials." }, { "n": "Homunculus", "d": "Artificial humans like Albedo." }, { "n": "Primordial Human", "d": "The project to create the perfect being." }, { "n": "Durin's Blood", "d": "Corrupted blood used as a catalyst." }, { "n": "Gold", "d": "The alchemist Rhinedottir." } ]}, { "title": "Serenitea Pot", "steps": [ { "n": "Sub-Space", "d": "A pocket dimension inside a teapot." }, { "n": "Tubby", "d": "The teapot spirit butler." }, { "n": "Realm Currency", "d": "Coins generated by furniture placement." }, { "n": "Fabrication", "d": "Creating buildings from wood and stone instantly." }, { "n": "Teleport Waypoint", "d": "Linking the pot to the outside world." } ]}, { "title": "Chasm Mining", "steps": [ { "n": "Lumenstone", "d": "A catalyst used to dispel dark mud." }, { "n": "Bedrock Keys", "d": "Magical seals locking the lower levels." }, { "n": "Elevators", "d": "Wooden lifts spanning deep vertical shafts." }, { "n": "Mine Carts", "d": "Transporting ore on rails." }, { "n": "Dark Mud", "d": "The abyssal ooze clogging the machines." } ]}, { "title": "Deshret Tech", "steps": [ { "n": "Primal Construct", "d": "Ancient triangular robots guarding ruins." }, { "n": "Light Prism", "d": "Puzzles involving bending light beams." }, { "n": "Golden Slumber", "d": "The stasis of the desert civilization." }, { "n": "Scarlet Sand", "d": "The authority key to open doors." }, { "n": "Eternal Oasis", "d": "A frozen moment in time." } ]} ],
        "POLITICAL": [ { "title": "The Seven Archons", "steps": [ { "n": "Barbatos", "d": "The absentee god of Freedom (Mondstadt)." }, { "n": "Morax", "d": "The retired god of Contracts (Liyue)." }, { "n": "Beelzebul", "d": "The god of Eternity (Inazuma)." }, { "n": "Buer", "d": "The god of Wisdom (Sumeru)." }, { "n": "Focalors", "d": "The god of Justice (Fontaine)." } ]}, { "title": "Fatui Diplomacy", "steps": [ { "n": "Snezhnaya", "d": "The cryo nation plotting world domination." }, { "n": "Diplomatic Immunity", "d": "Agents operating freely in other nations." }, { "n": "Debt Collection", "d": "Enforcing financial control." }, { "n": "Destabilization", "d": "Starting civil wars (Inazuma)." }, { "n": "Gnosis Hunt", "d": "Stealing the hearts of gods." } ]}, { "title": "Knights of Favonius", "steps": [ { "n": "Grand Master", "d": "Varka, currently on expedition." }, { "n": "Acting Master", "d": "Jean, running the city." }, { "n": "Captains", "d": "Leaders of companies (Kaeya, Albedo)." }, { "n": "Outriders", "d": "Scouts like Amber." }, { "n": "Freedom", "d": "Protecting the city's way of life." } ]}, { "title": "Liyue Qixing", "steps": [ { "n": "Tianquan", "d": "Ningguang, the law maker." }, { "n": "Yuheng", "d": "Keqing, the land manager." }, { "n": "Millelith", "d": "The loyal army of Liyue." }, { "n": "Contracts", "d": "The absolute law of the land." }, { "n": "Rite of Descension", "d": "The annual appearance of the Archon (formerly)." } ]}, { "title": "Inazuma Shogunate", "steps": [ { "n": "Tri-Commission", "d": "Three clans managing culture, military, and finance." }, { "n": "Vision Hunt Decree", "d": "The tyrannical confiscation of visions." }, { "n": "Sakoku Decree", "d": "Closing the borders to outsiders." }, { "n": "Resistance", "d": "Sangonomiya Kokomi's rebel army." }, { "n": "Musoujin Gorge", "d": "The scar of a god's slash." } ]}, { "title": "Sumeru Akademiya", "steps": [ { "n": "The Sages", "d": "Scholars ruling the nation with logic." }, { "n": "Darshans", "d": "The six schools of thought." }, { "n": "Lesser Lord Kusanali", "d": "The trapped Archon." }, { "n": "God Creation", "d": "The plot to make Scaramouche a god." }, { "n": "Desert Exclusion", "d": "Discrimination against the desert people." } ]}, { "title": "Fontaine Court", "steps": [ { "n": "Opera Epiclese", "d": "The opera house where trials are held." }, { "n": "Oratrice", "d": "The judgment machine." }, { "n": "Duelists", "d": "Agents like Clorinde who fight for honor." }, { "n": "Fortress of Meropide", "d": "The underwater prison." }, { "n": "Prophecy", "d": "The doom facing the nation." } ]}, { "title": "Natlan Tribes", "steps": [ { "n": "War God", "d": "The pyro archon Murata." }, { "n": "Tribal System", "d": "Society organized by clans." }, { "n": "Dragon Coexistence", "d": "Living alongside saurian companions." }, { "n": "Tournament", "d": "Fighting for glory." }, { "n": "Resurrection", "d": "The secret of the flame." } ]}, { "title": "Abyss Order", "steps": [ { "n": "Lumine/Aether", "d": "The sibling leading the order." }, { "n": "Revenge", "d": "Seeking vengeance against Celestia." }, { "n": "Mechanization", "d": "Creating a mechanical god." }, { "n": "Shadows", "d": "Operating in the dark corners of the world." }, { "n": "Metamorphosis", "d": "Turning hillichurls back into humans (the goal)." } ]}, { "title": "Adventurers' Guild", "steps": [ { "n": "Katheryne", "d": "The bionic receptionist found in every city." }, { "n": "Commissions", "d": "Daily tasks for rewards." }, { "n": "Exploration", "d": "Mapping the unknown." }, { "n": "Benny's Adventure Team", "d": "The unluckiest squad." }, { "n": "Ad Astra Abyssosque", "d": "To the stars and the abyss." } ]} ],
        "ECONOMIC": [ { "title": "Mora Currency", "steps": [ { "n": "Golden House", "d": "The mint where Morax creates money." }, { "n": "Catalyst", "d": "Mora is a magical catalyst, not just a coin." }, { "n": "Inflation", "d": "What happens when the Archon stops making money." }, { "n": "Ley Line Wealth", "d": "Farming gold blossoms." }, { "n": "Cost", "d": "Everything has a price." } ]}, { "title": "Liyue Harbor", "steps": [ { "n": "Trade Hub", "d": "The center of world commerce." }, { "n": "Shipping", "d": "Boats arriving from all nations." }, { "n": "Feiюн Commerce", "d": "The guild managing trade." }, { "n": "Contracts", "d": "The basis of all deals." }, { "n": "Lantern Rite", "d": "A festival driving tourism." } ]}, { "title": "Dawn Winery", "steps": [ { "n": "Dandelion Wine", "d": "Mondstadt's famous export." }, { "n": "Diluc Ragnvindr", "d": "The tycoon owner." }, { "n": "Vineyards", "d": "Acres of grapes." }, { "n": "Tavern Sales", "d": "Angel's Share profits." }, { "n": "Monopoly", "d": "Controlling the alcohol market." } ]}, { "title": "Northland Bank", "steps": [ { "n": "Fatui Funding", "d": "The bank front for Snezhnaya." }, { "n": "Pantalone", "d": "The Regrator, Harbinger of wealth." }, { "n": "Loans", "d": "High-interest lending." }, { "n": "Debt Collection", "d": "Agents chasing defaulters." }, { "n": "Exchange", "d": "Currency conversion." } ]}, { "title": "General Goods", "steps": [ { "n": "Grocery", "d": "Buying milk, salt, and wheat." }, { "n": "Souvenir Shop", "d": "Trading elemental sigils for items." }, { "n": "Blacksmith", "d": "Weapon enhancement services." }, { "n": "Restaurant", "d": "Wanmin Restaurant selling dishes." }, { "n": "Street Vendors", "d": "Selling fish and snacks." } ]}, { "title": "Mineral Wealth", "steps": [ { "n": "Cor Lapis", "d": "Precious stone of Liyue." }, { "n": "Noctilucous Jade", "d": "Glow-in-the-dark gems." }, { "n": "Crystal Chunk", "d": "Essential for weapon forging." }, { "n": "Amethyst Lump", "d": "Inazuman purple ore." }, { "n": "Expeditions", "d": "Sending characters to mine passively." } ]}, { "title": "Culinary Arts", "steps": [ { "n": "Cooking Pot", "d": "Campfires found everywhere." }, { "n": "Mastery", "d": "Perfecting a dish to auto-cook." }, { "n": "Buffs", "d": "Food providing attack or defense stats." }, { "n": "Signature Dish", "d": "Unique meals made by specific characters." }, { "n": "Process", "d": "Turning ingredients into health." } ]}, { "title": "Gacha Economy", "steps": [ { "n": "Primogems", "d": "The premium currency of the stars." }, { "n": "Intertwined Fate", "d": "The stone used to wish for characters." }, { "n": "Pity System", "d": "Guaranteed rewards after many failures." }, { "n": "50/50", "d": "The gamble of getting the featured unit." }, { "n": "Starglitter", "d": "Rebate currency." } ]}, { "title": "Resin System", "steps": [ { "n": "Original Resin", "d": "The energy limit for claiming rewards." }, { "n": "Fragile Resin", "d": "Restoring 60 energy points." }, { "n": "Condensed Resin", "d": "Doubling rewards for half the time." }, { "n": "Transient Resin", "d": "Purchased from the teapot." }, { "n": "Refresh", "d": "Spending primogems for more energy." } ]}, { "title": "Battle Pass", "steps": [ { "n": "Gnostic Hymn", "d": "The paid tier rewards." }, { "n": "BP Period", "d": "A 40-day cycle of tasks." }, { "n": "Bounty", "d": "Weekly reputation quests." }, { "n": "Requests", "d": "Helping citizens for reputation." }, { "n": "Wings", "d": "Gliders awarded for max reputation." } ]} ],
        "MEDICAL": [ { "title": "Statues of The Seven", "steps": [ { "n": "Auto-Heal", "d": "Standing near the statue restores HP." }, { "n": "Revival", "d": "Bringing fallen characters back to life." }, { "n": "Map Reveal", "d": "Unlocking the map of the region." }, { "n": "Oculi Offering", "d": "Trading stamina for elemental oculi." }, { "n": "Teleport", "d": "Fast travel point." } ]}, { "title": "Recovery Food", "steps": [ { "n": "Sweet Madame", "d": "The most common healing chicken dish." }, { "n": "Fried Egg", "d": "Simple revival food." }, { "n": "Steak", "d": "Instant HP restoration." }, { "n": "Fullness", "d": "Characters can't eat when full." }, { "n": "Paimon", "d": "Emergency Food (Joke)." } ]}, { "title": "Hydro Healing", "steps": [ { "n": "Barbara's Song", "d": "Healing with music and water." }, { "n": "Kokomi's Jellyfish", "d": "A turret that heals allies." }, { "n": "Xingqiu's Swords", "d": "Minor healing on sword shatter." }, { "n": "Hydro Resonance", "d": "Boosting HP for the whole team." }, { "n": "Source", "d": "Water as the source of life." } ]}, { "title": "Bubu Pharmacy", "steps": [ { "n": "Dr. Baizhu", "d": "The dendro physician owner." }, { "n": "Qiqi", "d": "The zombie herb gatherer." }, { "n": "Herbal Medicine", "d": "Traditional bitter brews." }, { "n": "Violetgrass", "d": "Rare herbs from cliffs." }, { "n": "Prescription", "d": "Orders for rest and meds." } ]}, { "title": "Alchemical Potions", "steps": [ { "n": "Resistance", "d": "Potions to reduce elemental damage taken." }, { "n": "Damage Boost", "d": "Oils to increase elemental damage dealt." }, { "n": "Insulation", "d": "Protecting against sheer cold." }, { "n": "Crafting", "d": "Using lizard tails and frogs." }, { "n": "Duration", "d": "Temporary effects." } ]}, { "title": "Tea Break", "steps": [ { "n": "Teapot Rest", "d": "Relaxing in the realm." }, { "n": "Pop's Teas", "d": "Buying tea in Qingce Village." }, { "n": "Zhongli's Sip", "d": "Osmanthus wine tastes the same." }, { "n": "Wait", "d": "Skipping time via the menu." }, { "n": "Seat", "d": "Sitting on benches recovers nothing but looks nice." } ]}, { "title": "Shield Support", "steps": [ { "n": "Jade Shield", "d": "Zhongli's impenetrable defense." }, { "n": "Diona's Paws", "d": "Cryo shields and healing." }, { "n": "Noelle's Breastplate", "d": "Geo armor that heals on hit." }, { "n": "Interruption Res", "d": "Preventing stagger." }, { "n": "Safety", "d": "Ignoring enemy attacks." } ]}, { "title": "Revival Mechanics", "steps": [ { "n": "C6 Barbara", "d": "Auto-revive every 15 minutes." }, { "n": "Qiqi C6", "d": "Reviving the whole team with a burst." }, { "n": "Food", "d": "Using an item from the bag." }, { "n": "Statue", "d": "Warping away to heal." }, { "n": "Game Over", "d": "Respawning at the last waypoint." } ]}, { "title": "Dendro Life", "steps": [ { "n": "Yaoyao's Radish", "d": "Throwing radishes to heal." }, { "n": "Baizhu's Shield", "d": "Seamless healing and shielding." }, { "n": "Life Leech", "d": "Drawing health from enemies." }, { "n": "Growth", "d": "The power of nature." }, { "n": "Kaveh's Core", "d": "Healing from bloom explosions." } ]}, { "title": "Divine Grace", "steps": [ { "n": "Benny's Thumb", "d": "Healing circle up to 70%." }, { "n": "Jean's Wind", "d": "Instant team-wide heal." }, { "n": "Furina's Tears", "d": "Healing active character." }, { "n": "Chevreuse", "d": "Healing over time." }, { "n": "Survival", "d": "Staying alive in the Abyss." } ]} ]
    },

    "grand_country": {
        "WEAPONS": [
            { "title": "High Altitude", "steps": [ { "n": "Compound Bows", "d": "Silent ranged weapons unaffected by thin air." }, { "n": "Long Rifles", "d": "Firearms calibrated for extreme distance shots across valleys." }, { "n": "Sniper Nests", "d": "Hidden positions carved into cliff faces." }, { "n": "Elevation Bonus", "d": "Using high ground to extend weapon range." }, { "n": "Rangefinding", "d": "Calculations accounting for wind and gravity." } ]},
            { "title": "Heavy Artillery", "steps": [ { "n": "Siege Mortar", "d": "Lobbing shells over mountain peaks." }, { "n": "Howitzer Battery", "d": "Line of guns defending the passes." }, { "n": "Flak Cannon", "d": "Anti-air defense against airships." }, { "n": "Shrapnel Shell", "d": "Explosives designed to fragment." }, { "n": "Barrage Fire", "d": "Continuous shelling to deny area access." } ]},
            { "title": "Explosive Tech", "steps": [ { "n": "Mining Charges", "d": "Repurposed industrial explosives." }, { "n": "Dynamite Sticks", "d": "Portable demolition tools." }, { "n": "Rock Trap", "d": "Rigging boulders to fall on enemies." }, { "n": "Avalanche Trigger", "d": "Using sound or blasts to cause snowslides." }, { "n": "Breaching Charge", "d": "Blowing open fortress gates." } ]},
            { "title": "Trench Combat", "steps": [ { "n": "War Pick", "d": "A dual-purpose tool for digging and fighting." }, { "n": "Sledgehammer", "d": "Crushing armored foes in close quarters." }, { "n": "Battle Axe", "d": "Cleaving through wooden shields." }, { "n": "Tower Shield", "d": "Large mobile cover for advancing." }, { "n": "CQC", "d": "Fighting in confined tunnels." } ]},
            { "title": "Heavy Armor", "steps": [ { "n": "Winter Fur", "d": "Lining armor for warmth." }, { "n": "Boiled Leather", "d": "Tough, flexible protection." }, { "n": "Chainmail", "d": "Defense against slashing." }, { "n": "Full Plate", "d": "Heavy steel suits for elite guards." }, { "n": "Juggernaut", "d": "Slow but unstoppable infantry." } ]},
            { "title": "Siege Warfare", "steps": [ { "n": "Battering Ram", "d": "Breaking down doors." }, { "n": "Siege Tower", "d": "Scaling walls safely." }, { "n": "Assault Ladder", "d": "Quick scaling tools." }, { "n": "Grapple Hook", "d": "Climbing rough stone." }, { "n": "Breach", "d": "Creating a hole in defenses." } ]},
            { "title": "Fortification", "steps": [ { "n": "Curtain Wall", "d": "Massive stone barriers." }, { "n": "Portcullis", "d": "Iron gates dropped to block entry." }, { "n": "Moat", "d": "Water filled ditches." }, { "n": "Watch Tower", "d": "High vantage points." }, { "n": "The Keep", "d": "The central stronghold." } ]},
            { "title": "Mountain Tactics", "steps": [ { "n": "Choke Point", "d": "Forcing the enemy into narrow passes." }, { "n": "Ambush", "d": "Striking from hidden positions." }, { "n": "Flanking", "d": "Using goat paths to get behind." }, { "n": "Hold the Line", "d": "Defensive discipline." }, { "n": "Attritition", "d": "Wearing the enemy down." } ]},
            { "title": "Elite Units", "steps": [ { "n": "Mountaineer", "d": "Specialists in climbing and cold." }, { "n": "Royal Guard", "d": "Protectors of the leadership." }, { "n": "Iron Knight", "d": "Heavily armored shock troops." }, { "n": "Warlord", "d": "Battlefield commanders." }, { "n": "National Hero", "d": "Legendary warriors." } ]},
            { "title": "Ultimate Defense", "steps": [ { "n": "The Avalanche", "d": "Bringing down the mountain." }, { "n": "Iron Fortress", "d": "An unbreachable citadel." }, { "n": "Unmoveable Object", "d": "Total defensive stance." }, { "n": "Titan Form", "d": "Magical size increase." }, { "n": "Victory", "d": "Survival at all costs." } ]}
        ],
        "TECH": [
            { "title": "Deep Earth Mining", "steps": [ { "n": "Pneumatic Pick", "d": "Air-powered digging tools." }, { "n": "Steam Drill", "d": "Boring through solid rock." }, { "n": "Ore Cart", "d": "Transporting raw materials." }, { "n": "Rail System", "d": "Tracks running deep underground." }, { "n": "The Deep", "d": "Mines reaching the planet's crust." } ]},
            { "title": "Tunnel Engineering", "steps": [ { "n": "Excavation", "d": "Removing earth efficiently." }, { "n": "Beam Support", "d": "Preventing cave-ins." }, { "n": "Ventilation", "d": "Pumping fresh air down." }, { "n": "Gas Light", "d": "Illuminating the dark." }, { "n": "Undercity", "d": "Entire cities built below ground." } ]},
            { "title": "Vertical Transport", "steps": [ { "n": "Cable Car", "d": "Gondolas spanning peaks." }, { "n": "Steam Elevator", "d": "Lifting goods up shafts." }, { "n": "Suspension Bridge", "d": "Crossing deep chasms." }, { "n": "Mountain Road", "d": "Switchbacks for trucks." }, { "n": "High Pass", "d": "Routes through the snow." } ]},
            { "title": "Bunker Construction", "steps": [ { "n": "Granite Block", "d": "Quarried stone." }, { "n": "Reinforced Concrete", "d": "Modern strong material." }, { "n": "Steel Beam", "d": "Structural skeleton." }, { "n": "Blast Door", "d": "Sealing against attack." }, { "n": "Metropolis", "d": "Dense urban planning." } ]},
            { "title": "Industrial Power", "steps": [ { "n": "Coal Furnace", "d": "Burning fossil fuels." }, { "n": "Steam Turbine", "d": "Generating electricity." }, { "n": "Hydro Dam", "d": "Power from mountain rivers." }, { "n": "Geothermal", "d": "Heat from the earth." }, { "n": "Power Grid", "d": "Distributing energy." } ]},
            { "title": "Survival Systems", "steps": [ { "n": "Central Heat", "d": "Radiators in every home." }, { "n": "Insulation", "d": "Thick walls to keep heat in." }, { "n": "Food Storage", "d": "Silos for winter." }, { "n": "Air Filter", "d": "Cleaning mine dust." }, { "n": "Life Support", "d": "Systems for deep bunkers." } ]},
            { "title": "Signal Comms", "steps": [ { "n": "Signal Fire", "d": "Lighting beacons on peaks." }, { "n": "Telegraph Wire", "d": "Morse code communication." }, { "n": "Radio Tower", "d": "Broadcasting over mountains." }, { "n": "Command Net", "d": "Military coordination." }, { "n": "Runner", "d": "Messengers for secure info." } ]},
            { "title": "Geo-Survey", "steps": [ { "n": "Topography Map", "d": "Charting the surface." }, { "n": "Sonar Scan", "d": "Finding underground hollows." }, { "n": "Mineral Probe", "d": "Testing rock samples." }, { "n": "Seismograph", "d": "Measuring quakes." }, { "n": "Knowledge", "d": "Knowing the land." } ]},
            { "title": "Logistics Chain", "steps": [ { "n": "Supply Train", "d": "Armored trains moving goods." }, { "n": "Depot", "d": "Warehousing supplies." }, { "n": "Rationing", "d": "Managing scarce food." }, { "n": "Transport", "d": "Trucks and mules." }, { "n": "Feeder", "d": "Supplying the front." } ]},
            { "title": "Aviation", "steps": [ { "n": "Armored Airship", "d": "Zeppelins for bombing." }, { "n": "Sky Dock", "d": "Mooring towers on peaks." }, { "n": "Obs Balloon", "d": "Spotting artillery." }, { "n": "Gun Platform", "d": "Floating fortress." }, { "n": "Sky Superiority", "d": "Controlling the air." } ]}
        ],
        "POLITICAL": [ { "title": "Tribal Union", "steps": [ { "n": "Clan System", "d": "Families loyal to their kin." }, { "n": "War Chief", "d": "Leaders chosen by strength." }, { "n": "Council of Elders", "d": "Wisdom guiding the tribes." }, { "n": "Confederacy", "d": "Tribes uniting for defense." }, { "n": "One Nation", "d": "Forging a single identity." } ]}, { "title": "Isolationism", "steps": [ { "n": "Closed Border", "d": "Stopping outsiders." }, { "n": "Great Wall", "d": "Physical barrier." }, { "n": "Xenophobia", "d": "Distrust of foreigners." }, { "n": "Self Reliance", "d": "Needing no one else." }, { "n": "Safety", "d": "Protection from the world." } ]}, { "title": "Military State", "steps": [ { "n": "Militia", "d": "Citizen soldiers." }, { "n": "Standing Army", "d": "Professional troops." }, { "n": "Conscription", "d": "Drafting all able bodies." }, { "n": "Fortress Command", "d": "Military running cities." }, { "n": "Security", "d": "Order above all." } ]}, { "title": "Judicial Code", "steps": [ { "n": "Iron Code", "d": "Strict, unbending laws." }, { "n": "Magistrate", "d": "Judge and jury." }, { "n": "Dungeon", "d": "Deep underground prisons." }, { "n": "Hard Labor", "d": "Punishment in the mines." }, { "n": "Order", "d": "Suppression of crime." } ]}, { "title": "Economic Policy", "steps": [ { "n": "Tariffs", "d": "Taxing imports heavily." }, { "n": "Resource Control", "d": "State owned mines." }, { "n": "Export Limits", "d": "Keeping the best for themselves." }, { "n": "Trade Deal", "d": "Negotiating from strength." }, { "n": "Wealth", "d": "Accumulating gold." } ]}, { "title": "Diplomacy", "steps": [ { "n": "Envoy", "d": "Messengers to other lands." }, { "n": "Hard Bargain", "d": "Stubborn negotiation." }, { "n": "Defense Pact", "d": "Allies of convenience." }, { "n": "Neutrality", "d": "Staying out of wars." }, { "n": "Peace", "d": "Through superior firepower." } ]}, { "title": "National Spirit", "steps": [ { "n": "Resilience", "d": "Enduring hardship." }, { "n": "Hardiness", "d": "Physical toughness." }, { "n": "Strength", "d": "Respect for power." }, { "n": "Tradition", "d": "Honoring the old ways." }, { "n": "Survival", "d": "The ultimate value." } ]}, { "title": "Symbolism", "steps": [ { "n": "Flag", "d": "Mountain peak icon." }, { "n": "Anthem", "d": "Songs of stone and iron." }, { "n": "Pride", "d": "Love of country." }, { "n": "Monument", "d": "Statues of heroes." }, { "n": "Unity", "d": "Standing together." } ]}, { "title": "Governance", "steps": [ { "n": "Electorate", "d": "Voting for leaders." }, { "n": "Chancellor", "d": "Head of state." }, { "n": "Monarchy", "d": "The Mountain King." }, { "n": "Guidance", "d": "Steering the ship." }, { "n": "Authority", "d": "Legitimate power." } ]}, { "title": "Grandeur", "steps": [ { "n": "Scale", "d": "Everything is big." }, { "n": "Ambition", "d": "Aiming high." }, { "n": "Legacy", "d": "Building for eternity." }, { "n": "Best", "d": "National superiority." }, { "n": "The Country", "d": "The land itself." } ]} ],
        "ECONOMIC": [ { "title": "Resource Extraction", "steps": [ { "n": "Iron Mine", "d": "The backbone of industry." }, { "n": "Gold Vein", "d": "Source of currency." }, { "n": "Gemstone", "d": "Luxury exports." }, { "n": "Quarry", "d": "Stone for building." }, { "n": "Rich Earth", "d": "Fertile minerals." } ]}, { "title": "Heavy Industry", "steps": [ { "n": "Smelter", "d": "Refining ore." }, { "n": "Foundry", "d": "Casting parts." }, { "n": "Factory", "d": "Assembly lines." }, { "n": "Construction", "d": "Building infrastructure." }, { "n": "Arms Deal", "d": "Selling weapons." } ]}, { "title": "Trade Network", "steps": [ { "n": "Silk Road", "d": "Ancient trade routes." }, { "n": "Caravan", "d": "Merchants crossing deserts." }, { "n": "Rail Freight", "d": "Moving bulk goods." }, { "n": "Air Cargo", "d": "High value transport." }, { "n": "Gold Standard", "d": "Backing currency." } ]}, { "title": "Banking Sector", "steps": [ { "n": "Vault", "d": "Secure storage." }, { "n": "Central Bank", "d": "Managing inflation." }, { "n": "Investment", "d": "Funding new mines." }, { "n": "Interest", "d": "Making money on money." }, { "n": "Hoarding", "d": "Keeping reserves." } ]}, { "title": "Labor Force", "steps": [ { "n": "Miner", "d": "The common worker." }, { "n": "Engineer", "d": "Skilled technical work." }, { "n": "Union", "d": "Workers rights." }, { "n": "Strike", "d": "Stopping work for pay." }, { "n": "Wages", "d": "Payment for labor." } ]}, { "title": "Marketplace", "steps": [ { "n": "Bazaar", "d": "Open air markets." }, { "n": "Shop", "d": "Retail stores." }, { "n": "Auction", "d": "Selling rare items." }, { "n": "Demand", "d": "What people want." }, { "n": "Profit", "d": "The goal of business." } ]}, { "title": "Infrastructure", "steps": [ { "n": "Highway", "d": "Paved roads." }, { "n": "Bridge Toll", "d": "Paying to cross." }, { "n": "Tunnel Fee", "d": "Paying to pass through." }, { "n": "Grid", "d": "Electricity network." }, { "n": "Investment", "d": "Spending to build." } ]}, { "title": "Taxation", "steps": [ { "n": "Collection", "d": "Gathering revenue." }, { "n": "Rate", "d": "Percentage taken." }, { "n": "Treasury", "d": "Where money is kept." }, { "n": "Spending", "d": "Public works." }, { "n": "Budget", "d": "Planning expenses." } ]}, { "title": "Strategic Reserve", "steps": [ { "n": "Grain Silo", "d": "Food for sieges." }, { "n": "Fuel Tank", "d": "Oil for machines." }, { "n": "Ammo Dump", "d": "Shells for guns." }, { "n": "Stockpile", "d": "Ready for war." }, { "n": "Security", "d": "Peace of mind." } ]}, { "title": "Empire Building", "steps": [ { "n": "Expansion", "d": "Taking new land." }, { "n": "Control", "d": "Dominating markets." }, { "n": "Monopoly", "d": "Owning it all." }, { "n": "Ownership", "d": "Property rights." }, { "n": "Grandeur", "d": "Economic superpower." } ]} ],
        "MEDICAL": [ { "title": "Combat Medic", "steps": [ { "n": "Medkit", "d": "Portable first aid." }, { "n": "Bandage", "d": "Stopping bleeding." }, { "n": "Splint", "d": "Setting breaks." }, { "n": "Tourniquet", "d": "Saving limbs." }, { "n": "Morphine", "d": "Stopping pain." } ]}, { "title": "Field Hospital", "steps": [ { "n": "Triage Tent", "d": "Sorting the wounded." }, { "n": "Cot", "d": "Simple beds." }, { "n": "Sanitation", "d": "Preventing infection." }, { "n": "Surgery", "d": "Removing bullets." }, { "n": "Recovery", "d": "Healing up." } ]}, { "title": "Advanced Surgery", "steps": [ { "n": "Scalpel", "d": "Precision cutting." }, { "n": "Suture", "d": "Stitching wounds." }, { "n": "Setting", "d": "Fixing bones." }, { "n": "Amputation", "d": "Last resort." }, { "n": "Life Save", "d": "The goal." } ]}, { "title": "Pharmacy", "steps": [ { "n": "Antibiotic", "d": "Fighting infection." }, { "n": "Painkiller", "d": "Numbing suffering." }, { "n": "Stimulant", "d": "Keeping awake." }, { "n": "Salve", "d": "Healing burns." }, { "n": "Medicine", "d": "The cure." } ]}, { "title": "Survival", "steps": [ { "n": "Warmth", "d": "Treating hypothermia." }, { "n": "Hydration", "d": "Drinking water." }, { "n": "Nutrition", "d": "Food for strength." }, { "n": "Fitness", "d": "Staying strong." }, { "n": "Life", "d": "Not dying." } ]}, { "title": "Search and Rescue", "steps": [ { "n": "Dog Team", "d": "Sniffing out victims." }, { "n": "Flare", "d": "Signaling for help." }, { "n": "Stretcher", "d": "Carrying the wounded." }, { "n": "Evac", "d": "Getting out." }, { "n": "Hero", "d": "Saving others." } ]}, { "title": "Medical Training", "steps": [ { "n": "Corpsman", "d": "Medic rank." }, { "n": "Doctor", "d": "Surgeon rank." }, { "n": "Nurse", "d": "Caregiver." }, { "n": "Skill", "d": "Knowledge of body." }, { "n": "Expertise", "d": "Specialist." } ]}, { "title": "MedTech", "steps": [ { "n": "X-Ray", "d": "Seeing bones." }, { "n": "Monitor", "d": "Heart rate." }, { "n": "Tool", "d": "Medical device." }, { "n": "Machine", "d": "Life support." }, { "n": "Bot", "d": "Auto-doc." } ]}, { "title": "Magical Healing", "steps": [ { "n": "Holy Light", "d": "Divine cure." }, { "n": "Lay on Hands", "d": "Touch healing." }, { "n": "Potion", "d": "Magic drink." }, { "n": "Regen", "d": "Growing back." }, { "n": "Miracle", "d": "Impossible save." } ]}, { "title": "Resilience", "steps": [ { "n": "Toughness", "d": "Hard to kill." }, { "n": "Endurance", "d": "Lasting long." }, { "n": "Strength", "d": "Fighting spirit." }, { "n": "Will", "d": "Refusal to die." }, { "n": "Live", "d": "Survival." } ]} ],
        "MAGIC": [ { "title": "Geomancy", "steps": [ { "n": "Stone Wall", "d": "Raising cover from the ground." }, { "n": "Earthquake", "d": "Shaking the enemy." }, { "n": "Tunneling", "d": "Moving through earth." }, { "n": "Spike", "d": "Impaling from below." }, { "n": "Shape Stone", "d": "Building instantly." } ]}, { "title": "Ferromancy", "steps": [ { "n": "Metal Bend", "d": "Warping enemy armor." }, { "n": "Magnetism", "d": "Attracting weapons." }, { "n": "Sharpen", "d": "Enhancing blades." }, { "n": "Bullet Shield", "d": "Stopping projectiles." }, { "n": "Living Steel", "d": "Animating golems." } ]}, { "title": "Rune Magic", "steps": [ { "n": "Inscription", "d": "Writing power." }, { "n": "Trap Rune", "d": "Exploding on contact." }, { "n": "Ward", "d": "Protection area." }, { "n": "Power", "d": "Battery rune." }, { "n": "Bind", "d": "Locking doors." } ]}, { "title": "Enchantment", "steps": [ { "n": "Flaming Sword", "d": "Adding fire damage." }, { "n": "Unbreaking", "d": "Invincible tools." }, { "n": "Lightweight", "d": "Easier to carry." }, { "n": "True Strike", "d": "Never miss." }, { "n": "Buff", "d": "Stat increase." } ]}, { "title": "Weather Control", "steps": [ { "n": "Blizzard", "d": "Summoning snow." }, { "n": "Fog", "d": "Obscuring vision." }, { "n": "Wind", "d": "Deflecting arrows." }, { "n": "Cold Snap", "d": "Freezing enemies." }, { "n": "Clear Skies", "d": "Good visibility." } ]}, { "title": "Summoning", "steps": [ { "n": "Stone Golem", "d": "Tank unit." }, { "n": "Spirit Wolf", "d": "Scout unit." }, { "n": "Earth Elemental", "d": "Nature's wrath." }, { "n": "Reinforce", "d": "Calling help." }, { "n": "Army", "d": "Magical troops." } ]}, { "title": "Divination", "steps": [ { "n": "Far Sight", "d": "Seeing over mountains." }, { "n": "Detect Ore", "d": "Finding gold." }, { "n": "Predict", "d": "Knowing enemy moves." }, { "n": "Spy", "d": "Remote viewing." }, { "n": "Oracle", "d": "Seeing the future." } ]}, { "title": "Abjuration", "steps": [ { "n": "Shield", "d": "Magic barrier." }, { "n": "Dispel", "d": "Removing magic." }, { "n": "Counter", "d": "Stopping spells." }, { "n": "Safe", "d": "Sanctuary." }, { "n": "Hold", "d": "Binding enemy." } ]}, { "title": "Evocation", "steps": [ { "n": "Fireball", "d": "Explosive magic." }, { "n": "Lightning", "d": "Electric strike." }, { "n": "Blast", "d": "Force push." }, { "n": "Boom", "d": "Magic artillery." }, { "n": "Kill", "d": "Lethal spell." } ]}, { "title": "Grand Ritual", "steps": [ { "n": "Circle", "d": "Drawing power." }, { "n": "Chant", "d": "Spoken spell." }, { "n": "Sacrifice", "d": "Paying the price." }, { "n": "Summon God", "d": "Calling an avatar." }, { "n": "Epic", "d": "World changing magic." } ]} ]
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
