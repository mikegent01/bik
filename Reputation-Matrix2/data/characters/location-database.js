
// ===============================================
// LOCATION DATA
// ===============================================
const LOCATIONS = {
    
    // ===============================================
    // ROOT: RAVENTREE MANOR
    // ===============================================
    raventree_manor: {
        id: 'raventree_manor',
        name: "Raventree Manor",
        parent: null,
        type: 'structure',
        status: 'hostile',
        statusClass: 'status-hostile',
        dangerLevel: 'extreme',
        dangerClass: 'danger-extreme',
        
        description: `<p>A decaying noble estate shrouded in supernatural corruption and temporal instabilities. The manor has been the site of numerous confrontations between the party, Iron Legion agents, Mages' Guild operatives, and the manor's own supernatural defenses.</p>
        <p>The structure itself seems alive—mirrors contain hostile entities, books burst into flames, and rooms shift when unobserved. The mysterious Oracle resides here, though recent revelations suggest there may be <strong>multiple Oracles</strong> operating simultaneously.</p>
        <p>Following Bowser and Waluigi, the party first entered on Day 15, encountering the polite but unsettling ghost of a noble in the parlor. Since then, the manor has been a constant source of chaos, danger, and revelation.</p>`,

        features: [
            { name: "Main Parlor", description: "Grand entrance hall haunted by the ghost of a noble who offers cryptic pleasantries. First point of contact for all visitors.", type: "feature-magic" },
            { name: "East Wing", description: "Dilapidated section where Markop was separated after fighting his own enchanted clothes. Contains a note warning: 'DO NOT CLEAN THE MIRRORS.'", type: "feature-danger" },
            { name: "West Wing", description: "Unstable hallways prone to collapse. Archie was trapped here on Day 15. Structural integrity questionable.", type: "feature-danger" },
            { name: "Upper Floors", description: "Multiple bedrooms where the party barricaded themselves. Connected to the Oracle's private areas via hidden passages.", type: "" },
            { name: "Mirror Network", description: "Mirrors throughout the manor serve as portals for hostile entities and connect to a dangerous Mirror Dimension.", type: "feature-danger" }
        ],

        history: `<p>Once the seat of a noble family, Raventree Manor fell into disrepair centuries ago under mysterious circumstances. The manor has since become a nexus of temporal and magical anomalies, attracting or trapping various supernatural entities.</p>
        <p>The Oracle took up residence at an unknown time, using the manor's instabilities for purposes yet to be fully understood. Evidence discovered in the Hedge Maze suggests a "time war" involving the Oracle and temporal manipulation.</p>
        <p>The party first arrived on Day 15, following Bowser and Waluigi. Since then, the manor has witnessed battles with haunted books, Arcane Wraiths, Mirror Monsters, Iron Legion spies, and the siege by Speaker L's Pond Patrol.</p>`,

        currentState: "Active supernatural threat zone. Multiple hostile entities present including wraiths and mirror creatures. The Oracle(s) control the manor's defenses and have prepared a mysterious ritual. Iron Legion and Mages' Guild agents have been spotted within.",
        stateClass: "state-danger",

        connectedLocations: [
            { id: 'silent_grove', name: 'Silent Grove', direction: 'Southeast', status: 'cleared' },
            { id: 'hedge_maze', name: 'Hedge Maze', direction: 'East', status: 'dangerous' },
            { id: 'manor_gardens', name: 'Manor Gardens', direction: 'South', status: 'accessible' },
            { id: 'greenhouse', name: 'Greenhouse', direction: 'West', status: 'destroyed' },
            { id: 'dance_hall', name: 'Dance Hall', direction: 'Interior', status: 'hostile' },
            { id: 'solarium', name: 'Solarium', direction: 'Interior', status: 'dangerous' },
            { id: 'upper_house', name: 'Upper House', direction: 'Above', status: 'sealed' }
        ],

        notableEvents: [
            { name: "The Haunting of Raventree Manor", date: "Day 15", type: "exploration", description: "Party first enters, encounters ghost, splits up. Markop fights enchanted clothes." },
            { name: "Manor of Madness", date: "Day 16", type: "combat", description: "Battle with flaming haunted books. Markop's father's photo discovered." },
            { name: "The Oracle's Gambit", date: "Day 16", type: "encounter", description: "Oracle introduces himself. FNG fights rust monsters. Balcony collapse." },
            { name: "Standoff at Raventree Manor", date: "Day 18", type: "combat", description: "Speaker L's Pond Patrol besieges Archie and Hjumpik." },
            { name: "The Siege of Raventree", date: "Day 19", type: "combat", description: "Wraiths manifest. Archie surrenders. Glass monster emerges." },
            { name: "Green T Lost", date: "Day 19", type: "supernatural", description: "Green T pulled into mirror dimension." },
            { name: "The Many Oracles Revealed", date: "Day 21", type: "discovery", description: "Multiple Oracles confirmed. Star Shard displayed. Ritual begins." }
        ]
    },

    // ===============================================
    // SILENT GROVE (CLEARED)
    // ===============================================
    silent_grove: {
        id: 'silent_grove',
        name: "The Silent Grove",
        parent: 'raventree_manor_grounds',
        type: 'outdoor_area',
        status: 'cleared',
        statusClass: 'status-cleared',
        dangerLevel: 'low',
        dangerClass: 'danger-low',
        
        description: `<p>Once a nightmare of webs and chittering darkness ruled by the Arachnid Matriarch, the Silent Grove has been purged. The massive webs still hang in tatters from ancient trees, and spider corpses litter the ground in various states of decay, but the oppressive presence that dominated this place has been banished.</p>
        <p>The air, previously thick with the acrid scent of venom, now carries only the musty smell of old death and damp earth. Patches of sickly pale vegetation push through the web-covered ground—the first signs of recovery after years of spider dominance.</p>
        <p>At the grove's center, a chalk circle still faintly glows where the Oracle banished the Matriarch. Strange symbols in non-standard geometric patterns ring the impact crater where the massive spider fell.</p>`,

        features: [
            { name: "Banishment Circle Remnants", description: "The Oracle's hastily-drawn ritual circle remains, its chalk lines still faintly luminescent. The non-standard geometric patterns don't match any known magical tradition.", type: "feature-magic" },
            { name: "Spider Corpse Field", description: "Dozens of dead spiders ranging from fist-sized to dog-sized. Valuable alchemical components can be harvested: venom sacs, chitin plates, and silk glands.", type: "feature-cleared" },
            { name: "Tattered Web Canopy", description: "Once an impenetrable dome of webbing, now hanging in shreds. Still blocks most direct sunlight, creating an eerie twilight atmosphere.", type: "" },
            { name: "Impact Crater", description: "Where the Matriarch fell into the banishment circle. The ground is scorched and cracked. Small crystalline fragments—possibly residue from the banishment—can be found.", type: "feature-magic" }
        ],

        history: `<p>The Silent Grove was originally a meditation garden, designed centuries ago as a place of quiet contemplation for Raventree Manor's noble residents. Stone benches, fountains, and carefully cultivated plants once made it a sanctuary.</p>
        <p>When the manor fell into disrepair and supernatural corruption spread through the grounds, mundane spiders colonizing the garden were twisted by ambient magic. They grew larger, more aggressive, and increasingly intelligent. The Arachnid Matriarch emerged as their queen, growing to massive size over decades.</p>
        <p>On Day 21 of 1040 BF, a rescue party led by the titan-sized Markop engaged the Matriarch. After a prolonged battle involving Toad Squad Alpha, FNG Remi, Waluigi, and the Oracle, the creature was banished through ritual magic.</p>`,

        currentState: "Cleared of hostile creatures but still showing signs of magical corruption. The Oracle's banishment circle remains active. Spider corpses should be harvested or disposed of before they attract scavengers.",
        stateClass: "state-safe",

        connectedLocations: [
            { id: 'hedge_maze', name: 'Hedge Maze', direction: 'North', status: 'dangerous' },
            { id: 'fountain_district', name: 'Fountain District', direction: 'East', status: 'unexplored' },
            { id: 'manor_gardens', name: 'Manor Gardens', direction: 'West', status: 'accessible' },
            { id: 'raventree_manor', name: 'Main Manor', direction: 'Northwest', status: 'hostile' }
        ],

        notableEvents: [
            { name: "The Spider Grove Ambush", date: "Day 20, 23:15", type: "combat", description: "Rescue mission begins. Markop in Titan form. Remi's dog damaged." },
            { name: "Grove Chaos & The Oracle's Light", date: "Day 20, 23:30", type: "combat", description: "Party fractures. Oracle casts illumination. Waluigi uses ice magic." },
            { name: "Titan of the Grove", date: "Day 20, 23:45", type: "combat", description: "Markop enlarged by Oracle's blessing. Vigilance flies overhead." },
            { name: "The Arachnid Matriarch Falls", date: "Day 21, 00:00", type: "combat", description: "Matriarch banished. Salem's critical hit. Oracle's ritual succeeds." },
            { name: "Spoils of the Silent Grove", date: "Day 21, 00:15", type: "discovery", description: "Loot distributed. War Mage Staff, Web-Woven Scales, potions claimed." }
        ]
    },

    // ===============================================
    // HEDGE MAZE
    // ===============================================
    hedge_maze: {
        id: 'hedge_maze',
        name: "The Hedge Maze",
        parent: 'raventree_manor_grounds',
        type: 'outdoor_area',
        status: 'dangerous',
        statusClass: 'status-dangerous',
        dangerLevel: 'temporal',
        dangerClass: 'danger-temporal',
        
        description: `<p>A living labyrinth of overgrown hedges that seems to shift and change when unobserved. The maze connects various sections of the manor grounds and has been used by the Oracle to guide—or trap—visitors.</p>
        <p>Within the maze, Markop, Green T, and Bowser discovered evidence of a "time war" and a hidden, abandoned version of the manor existing in temporal overlap. The paths themselves seem to exist in multiple timeframes simultaneously.</p>
        <p>Navigation without the Oracle's guidance is extremely dangerous. Explorers have reported walking in circles for hours, only to emerge moments after entering—or days later.</p>`,

        features: [
            { name: "Shifting Passages", description: "The maze reconfigures itself when not directly observed. Paths that existed moments ago may vanish, and new ones appear without warning.", type: "feature-temporal" },
            { name: "Temporal Pocket Entrance", description: "A hidden junction where an abandoned manor variant can be accessed. The exact location shifts. Only found on Day 18 by Markop, Green T, and Bowser.", type: "feature-magic" },
            { name: "Oracle's Path", description: "Certain routes remain stable when the Oracle is present, suggesting he has some control over the maze's temporal properties.", type: "feature-magic" },
            { name: "Time War Evidence", description: "Faded banners, discarded weapons from unknown eras, and chalk markings suggesting battles fought across multiple timelines.", type: "feature-temporal" }
        ],

        history: `<p>The hedge maze predates the manor's corruption. Originally a garden feature for noble entertainment, it has since become entangled with the temporal instabilities plaguing the estate.</p>
        <p>The "time war" evidence suggests multiple factions—including past and future versions of the Oracle—have fought for control of the manor's temporal nexus. The full history is impossible to piece together due to the non-linear nature of events within.</p>`,

        currentState: "Navigable with extreme caution. The Oracle can provide safe passage. Solo exploration is NOT recommended. Time dilation effects may cause explorers to lose hours or days.",
        stateClass: "state-warning",

        connectedLocations: [
            { id: 'silent_grove', name: 'Silent Grove', direction: 'South', status: 'cleared' },
            { id: 'raventree_manor', name: 'Main Manor', direction: 'West', status: 'hostile' },
            { id: 'temporal_pocket', name: 'Abandoned Manor (Temporal)', direction: 'Unknown', status: 'unstable' },
            { id: 'oracles_gardens', name: "Oracle's Gardens", direction: 'North', status: 'accessible' }
        ],

        notableEvents: [
            { name: "The Maze of Time", date: "Day 18, 09:00", type: "exploration", description: "Markop, Green T, and Bowser navigate the maze. Discover hidden abandoned manor and evidence of time war." }
        ]
    },

    // ===============================================
    // GREENHOUSE (DESTROYED)
    // ===============================================
    greenhouse: {
        id: 'greenhouse',
        name: "The Greenhouse",
        parent: 'raventree_manor_grounds',
        type: 'structure',
        status: 'destroyed',
        statusClass: 'status-destroyed',
        dangerLevel: 'none',
        dangerClass: 'danger-none',
        
        description: `<p>Once an ornate glass conservatory housing exotic plants, the Greenhouse was destroyed on Day 17 during a battle against rust monsters. The structure is now a scorched ruin of twisted metal frames and shattered glass.</p>
        <p>Archie unleashed a massive fireball to save the party from the rust monster swarm, incinerating the building in the process. The conflagration was visible for miles and has drawn attention from multiple factions.</p>
        <p>Among the ashes, Green T gave Markop a mysterious key of unknown purpose. The key's origin and what it unlocks remain mysteries.</p>`,

        features: [
            { name: "Scorched Ruins", description: "Twisted metal frames and melted glass. Nothing living remains. The ground is blackite and ash for a 50-foot radius.", type: "" },
            { name: "Fireball Impact Zone", description: "The epicenter of Archie's spell. The heat was so intense that sand formed in patches where glass melted into the soil.", type: "feature-danger" },
            { name: "Mysterious Key Discovery Site", description: "The location where Green T handed Markop an unexplained key during the chaos. Its purpose remains unknown.", type: "feature-magic" }
        ],

        history: `<p>The Greenhouse was one of the last functional structures on the manor grounds before its destruction. It had become infested with rust monsters—magical creatures that devour metal and corrode equipment.</p>
        <p>On Day 17, the party encountered the rust monster swarm while exploring. With the creatures threatening to destroy their weapons and armor, Archie made the controversial decision to unleash a fireball, destroying the Greenhouse entirely.</p>
        <p>The event later became known as "The Greenhouse Inferno" and prompted Archie's public confession on Wahwire, drawing the ire of the Mages' Guild.</p>`,

        currentState: "Completely destroyed. No salvageable materials. The site may be used as a landmark but offers no shelter or resources.",
        stateClass: "state-safe",

        connectedLocations: [
            { id: 'raventree_manor', name: 'Main Manor', direction: 'East', status: 'hostile' },
            { id: 'manor_gardens', name: 'Manor Gardens', direction: 'South', status: 'accessible' }
        ],

        notableEvents: [
            { name: "The Greenhouse Inferno", date: "Day 17, 10:00", type: "destruction", description: "Archie's fireball destroys the structure. Party saved from rust monsters. Green T gives Markop a mysterious key." },
            { name: "Archie's Confession", date: "Day 20, 07:45", type: "social", description: "Archie publicly confesses to the destruction on Wahwire, drawing Mages' Guild attention." }
        ]
    },

    // ===============================================
    // DANCE HALL
    // ===============================================
    dance_hall: {
        id: 'dance_hall',
        name: "The Dance Hall",
        parent: 'raventree_manor',
        type: 'interior',
        status: 'hostile',
        statusClass: 'status-hostile',
        dangerLevel: 'high',
        dangerClass: 'danger-high',
        
        description: `<p>A grand ballroom within Raventree Manor, now a site of conflict and supernatural danger. The once-elegant space with its chandeliers and polished floors has become a battleground between multiple factions.</p>
        <p>On Day 20, the party confronted Iron Legion spies and rogue Magi here. A mocking anthem was sung (presumably by the spies), and an Arcane Wraith attacked, scattering the combatants across the hall.</p>
        <p>The Arcane Wraith was later banished on Day 21 through a combined effort: Bowser physically assaulted the ghost, Dan fought one-armed, and Archie used ice magic to aid the Oracle's banishment ritual.</p>`,

        features: [
            { name: "Grand Chandeliers", description: "Crystal chandeliers that flicker with ghostly light. May contain trapped spirits or serve as anchor points for haunting entities.", type: "feature-magic" },
            { name: "Warped Dance Floor", description: "Once polished wood, now buckled and stained from battles. Footing is treacherous in places.", type: "feature-danger" },
            { name: "Wraith Banishment Site", description: "The location where the Arcane Wraith was finally banished. Residual magical energy lingers.", type: "feature-magic" },
            { name: "Faction Graffiti", description: "Mocking messages left by Iron Legion spies. Includes lyrics to their propaganda anthem.", type: "" }
        ],

        history: `<p>The Dance Hall was the social center of the manor during its noble heyday. Grand balls and celebrations were held here regularly.</p>
        <p>After the manor's fall, the hall became haunted by memories of the past. The Arcane Wraith that manifested here may have been the spirit of a former guest or host, twisted by the manor's corruption.</p>`,

        currentState: "Wraith banished but area remains dangerous. Iron Legion and Mages' Guild presence confirmed. The structural damage from battles may cause ceiling collapses.",
        stateClass: "state-danger",

        connectedLocations: [
            { id: 'raventree_manor', name: 'Main Halls', direction: 'Exit', status: 'hostile' },
            { id: 'solarium', name: 'Solarium', direction: 'East', status: 'dangerous' },
            { id: 'upper_house', name: 'Upper House Stairs', direction: 'Up', status: 'sealed' }
        ],

        notableEvents: [
            { name: "The Dance Hall Discord", date: "Day 20, 08:15", type: "combat", description: "Party confronts Iron Legion spies and rogue Magi. Mocking anthem sung. Arcane Wraith attacks." },
            { name: "Banishment of the Wraith", date: "Day 21, 19:30", type: "supernatural", description: "Arcane Wraith banished. Bowser punches ghost. Dan fights one-armed. Archie uses ice magic." }
        ]
    },

    // ===============================================
    // SOLARIUM
    // ===============================================
    solarium: {
        id: 'solarium',
        name: "The Solarium",
        parent: 'raventree_manor',
        type: 'interior',
        status: 'dangerous',
        statusClass: 'status-dangerous',
        dangerLevel: 'high',
        dangerClass: 'danger-high',
        
        description: `<p>A ruined glass-roofed room that once served as a sun room and conservatory. The structure's glass ceiling has largely collapsed, leaving the interior exposed to the elements and filled with debris.</p>
        <p>The Solarium became a site of supernatural horror on Day 19 when a Glass Monster—a shard entity composed of mirror fragments—emerged to attack the party. The creature was eventually destroyed on Day 21, but the battle with it proved costly.</p>
        <p>During the chaos, hjumpik was pulled into the Mirror Dimension where he fought his own doppelganger and received unexpected aid from an Iron Legion spy.</p>`,

        features: [
            { name: "Collapsed Glass Ceiling", description: "Shattered panes and twisted frames litter the floor. Walking here risks cuts and noise that may attract attention.", type: "feature-danger" },
            { name: "Mirror Dimension Breach Point", description: "The location where hjumpik was pulled through. The connection may still be active. Mirrors in this area are NOT to be trusted.", type: "feature-magic" },
            { name: "Eager's Rescue Site", description: "Archie rescued Eager from this location during the Oracle's Gambit. The exact circumstances remain unclear.", type: "" },
            { name: "Glass Monster Remnants", description: "Scattered mirror shards from the destroyed Shard Stalker. May still contain hostile magic.", type: "feature-danger" }
        ],

        history: `<p>The Solarium was designed to bring natural light into the manor's interior. After the collapse, it became a nexus for the manor's mirror-based supernatural phenomena.</p>
        <p>The Glass Monster (also called the Shard Stalker) emerged from the mirrors on Day 19 during the Siege of Raventree. The party breached the Solarium on Day 21 to destroy it, discovering the Mirror Dimension in the process.</p>`,

        currentState: "Glass Monster destroyed but mirror connections may remain active. Area is structurally unstable. Avoid looking directly into reflective surfaces.",
        stateClass: "state-warning",

        connectedLocations: [
            { id: 'dance_hall', name: 'Dance Hall', direction: 'West', status: 'hostile' },
            { id: 'raventree_manor', name: 'Main Halls', direction: 'Exit', status: 'hostile' },
            { id: 'mirror_dimension', name: 'Mirror Dimension', direction: 'Through Mirrors', status: 'hostile' }
        ],

        notableEvents: [
            { name: "The Oracle's Gambit", date: "Day 16, 04:30", type: "encounter", description: "Archie rescues Eager from the ruined solarium." },
            { name: "The Siege of Raventree", date: "Day 19, 06:30", type: "combat", description: "Glass monster emerges from mirror during siege." },
            { name: "The Shard Stalker & The Spy", date: "Day 21, 02:00", type: "supernatural", description: "Party breaches Solarium. hjumpik pulled into Mirror Dimension. Fights doppelganger. Receives Legion spy aid." }
        ]
    },
    upper_house: {
        id: 'upper_house',
        name: "The Upper House",
        parent: 'raventree_manor',
        type: 'interior',
        status: 'sealed',
        statusClass: 'status-sealed',
        dangerLevel: 'unknown',
        dangerClass: 'danger-unknown',
        
        description: `<p>The upper floors of Raventree Manor, accessible only through a hidden passage revealed by the Oracle. The party barely escaped a pursuing Mirror Monster by slamming the door to this area, sealing themselves inside.</p>
        <p>The way back has been closed, and the full contents of the Upper House remain unexplored. The Oracle's private chambers and the location of the mysterious ritual are believed to be somewhere within.</p>
        <p>This is where the party currently awaits the Oracle's ritual, having reunited with Archie and Hjumpik after the Spider Grove victory.</p>`,

        features: [
            { name: "Sealed Entrance", description: "The door to the Upper House was slammed shut to escape the Mirror Monster. It cannot be reopened from this side—the way back is gone.", type: "feature-danger" },
            { name: "Oracle's Private Chambers", description: "Believed to be located somewhere in this section. The Oracle(s) conduct their mysterious work here.", type: "feature-magic" },
            { name: "Ritual Preparation Area", description: "The location where the Oracle has prepared a ritual of unknown purpose. The party has been summoned here.", type: "feature-magic" },
            { name: "Star Shard Display", description: "One Oracle revealed a crystalline 'Star Shard' here—a gift from the Toad God marking him as a 'Bearer.'", type: "feature-magic" }
        ],

        history: `<p>The Upper House was the private domain of the manor's original noble family. After the fall, it became the Oracle's sanctuary—protected from the worst of the corruption that plagues the lower floors.</p>
        <p>Access was restricted until Day 20 when the Oracle led the party here to escape the Mirror Monster. The sealing of the entrance has trapped the party within, though the Oracle insists this is necessary for the ritual.</p>`,

        currentState: "Currently occupied by the party and at least two Oracles. A ritual is imminent. The sealed entrance means there is no retreat. The area appears stable compared to the rest of the manor.",
        stateClass: "state-unknown",

        connectedLocations: [
            { id: 'dance_hall', name: 'Dance Hall (Sealed)', direction: 'Down', status: 'sealed' },
            { id: 'oracles_gardens', name: "Oracle's Gardens", direction: 'Balcony', status: 'accessible' },
            { id: 'ritual_chamber', name: 'Ritual Chamber', direction: 'Interior', status: 'unexplored' }
        ],

        notableEvents: [
            { name: "The Mirror Door Breach", date: "Day 20, 08:45", type: "escape", description: "Party escapes Mirror Monster by slamming door. Way back sealed permanently." },
            { name: "The Many Oracles Revealed", date: "Day 21, 00:45", type: "discovery", description: "Multiple Oracles confirmed. Star Shard displayed. Bearer title revealed. Ritual preparation begins." }
        ]
    },

    // ===============================================
    // FOUNTAIN DISTRICT
    // ===============================================
    fountain_district: {
        id: 'fountain_district',
        name: "The Flooded Fountain District",
        parent: 'silent_grove',
        type: 'outdoor_area',
        status: 'unexplored',
        statusClass: 'status-unexplored',
        dangerLevel: 'unknown',
        dangerClass: 'danger-unknown',
        
        description: `<p>A pitch-black subsection of the Silent Grove where ancient fountains and basins have collected stagnant water. Toad Squad Alpha navigated this maze during the Spider Grove battle, emerging at a critical moment to provide flanking support.</p>
        <p>The district remains largely unexplored. What lies within the flooded darkness is unknown, but Squad Alpha reported the darkness felt "unnatural" and "wrong"—not merely an absence of light, but an active presence of shadow.</p>
        <p>Smoking J, who was already poisoned during the battle, expressed extreme fear of the darkness here, suggesting it may have psychological or supernatural effects on those who enter.</p>`,

        features: [
            { name: "Supernatural Darkness", description: "No natural or magical light fully penetrates. Torches flicker and dim. The darkness feels alive and watching.", type: "feature-magic" },
            { name: "Flooded Basins", description: "Ankle to knee-deep stagnant water throughout. Deeper pools likely exist. Water is cold and may contain hazards.", type: "feature-danger" },
            { name: "Ancient Fountains", description: "Decorative stone fountains from the garden's original design. Non-functional and heavily worn. May contain carvings with information.", type: "" },
            { name: "Two Unexplored Paths", description: "Squad Alpha found paths leading left and right. Neither was explored during their transit. Destinations unknown.", type: "feature-danger" }
        ],

        history: `<p>Part of the original meditation garden, the fountain district was designed as a water feature for relaxation and contemplation. When the grove became corrupted and spider-infested, the fountains fell into disrepair and the area flooded.</p>
        <p>The supernatural darkness is unusual—even during the spider infestation, some light should have penetrated. The source of this anomaly predates the spiders and may be connected to the manor's deeper corruption.</p>`,

        currentState: "Unexplored and extremely dangerous. Squad Alpha transited through during combat but did not investigate. Recommended for future exploration with strong light sources, magical protection, and significant backup.",
        stateClass: "state-unknown",

        connectedLocations: [
            { id: 'silent_grove', name: 'Silent Grove', direction: 'West', status: 'cleared' },
            { id: 'unknown_left', name: 'Unknown (Left Path)', direction: 'Left', status: 'unexplored' },
            { id: 'unknown_right', name: 'Unknown (Right Path)', direction: 'Right', status: 'unexplored' }
        ],

        notableEvents: [
            { name: "Squad Alpha Transit", date: "Day 20-21", type: "movement", description: "Toad Squad Alpha navigated through during the Spider Grove battle. Salem led with torch. Smoking J terrified of the darkness." }
        ]
    },

    // ===============================================
    // ORACLE'S GARDENS
    // ===============================================
    oracles_gardens: {
        id: 'oracles_gardens',
        name: "The Oracle's Gardens",
        parent: 'raventree_manor_grounds',
        type: 'outdoor_area',
        status: 'accessible',
        statusClass: 'status-cleared',
        dangerLevel: 'low',
        dangerClass: 'danger-low',
        
        description: `<p>A mysteriously well-maintained garden area under the Oracle's direct protection. Unlike the rest of the manor grounds, flowers bloom here, paths are clear, and the air feels clean and warm.</p>
        <p>The Oracle extended a cryptic invitation to these gardens on Day 16, suggesting they hold significance to his plans. hjumpik and Waluigi formed a shaky alliance here to investigate the Oracle's true nature.</p>
        <p>The gardens may exist partially outside normal time, explaining their pristine condition amid the surrounding decay.</p>`,

        features: [
            { name: "Pristine Flower Beds", description: "Flowers of unknown species bloom year-round. Colors shift subtly when observed. May have alchemical properties.", type: "feature-magic" },
            { name: "Clear Stone Paths", description: "Well-maintained walkways that seem to clean themselves. Footprints disappear within minutes.", type: "feature-temporal" },
            { name: "Oracle's Pavilion", description: "A small covered structure where the Oracle receives guests. Tea service appears without servants.", type: "feature-magic" },
            { name: "Hedge Maze Connection", description: "A stable path through the temporal maze exists from here, maintained by the Oracle's power.", type: "" }
        ],

        history: `<p>The Oracle's Gardens appear to be the one area of the manor he has fully claimed and protected. Whether this required immense magical effort or reflects his fundamental nature is unknown.</p>
        <p>The gardens have served as neutral ground for negotiations and alliances throughout the party's time at the manor.</p>`,

        currentState: "Safe under the Oracle's protection. The gardens can be accessed from the Upper House balcony. Temporal anomalies are present but not hostile.",
        stateClass: "state-safe",

        connectedLocations: [
            { id: 'hedge_maze', name: 'Hedge Maze', direction: 'South', status: 'dangerous' },
            { id: 'upper_house', name: 'Upper House (Balcony)', direction: 'Up', status: 'sealed' },
            { id: 'raventree_manor', name: 'Main Manor', direction: 'East', status: 'hostile' }
        ],

        notableEvents: [
            { name: "The Oracle's Gambit", date: "Day 16, 04:30", type: "encounter", description: "Oracle extends invitation to gardens. hjumpik and Waluigi form alliance to investigate him." }
        ]
    },

    // ===============================================
    // MANOR GARDENS (GENERAL)
    // ===============================================
    manor_gardens: {
        id: 'manor_gardens',
        name: "Manor Gardens",
        parent: 'raventree_manor_grounds',
        type: 'outdoor_area',
        status: 'accessible',
        statusClass: 'status-dangerous',
        dangerLevel: 'moderate',
        dangerClass: 'danger-moderate',
        
        description: `<p>The general outdoor grounds surrounding Raventree Manor, excluding the specialized areas like the Silent Grove or Oracle's Gardens. Overgrown hedges, crumbling statuary, and dead trees dominate the landscape.</p>
        <p>The Pond Patrol established their siege perimeter through these gardens on Day 18-19. Evidence of their encampment—doused fires, discarded equipment—can still be found.</p>
        <p>The gardens connect most major locations on the manor grounds and serve as the primary navigation route between areas.</p>`,

        features: [
            { name: "Overgrown Pathways", description: "Once-elegant garden paths now choked with weeds and dead vegetation. Navigation is slow but possible.", type: "" },
            { name: "Crumbling Statuary", description: "Stone statues of forgotten nobles, many toppled or defaced. Some may conceal hidden compartments.", type: "" },
            { name: "Pond Patrol Camp Remnants", description: "Abandoned siege positions from Speaker L's forces. May contain useful supplies or intelligence.", type: "" },
            { name: "Dead Orchard", description: "A section of fruit trees, long dead. The fruit that remains is petrified and possibly cursed.", type: "feature-danger" }
        ],

        history: `<p>The manor gardens were once the pride of the noble family, featuring exotic plants, fountains, and carefully manicured landscapes. Decades of neglect have reduced them to a haunted wilderness.</p>
        <p>The Pond Patrol siege on Days 18-19 was the first organized military presence in the gardens in living memory. Their retreat left the area more damaged but also more mapped than before.</p>`,

        currentState: "Navigable with caution. No active hostile presence, but the manor's supernatural corruption extends here. Wildlife—if any survives—may be twisted by ambient magic.",
        stateClass: "state-warning",

        connectedLocations: [
            { id: 'raventree_manor', name: 'Main Manor', direction: 'North', status: 'hostile' },
            { id: 'silent_grove', name: 'Silent Grove', direction: 'East', status: 'cleared' },
            { id: 'greenhouse', name: 'Greenhouse (Destroyed)', direction: 'West', status: 'destroyed' },
            { id: 'oracles_gardens', name: "Oracle's Gardens", direction: 'Northeast', status: 'accessible' },
            { id: 'manor_entrance', name: 'Manor Entrance Road', direction: 'South', status: 'accessible' }
        ],

        notableEvents: [
            { name: "Standoff at Raventree Manor", date: "Day 18, 18:30", type: "combat", description: "Pond Patrol establishes siege perimeter through the gardens." },
            { name: "The Siege of Raventree", date: "Day 19, 06:30", type: "combat", description: "Containment perimeter created. Wraiths manifest in response." }
        ]
    },

    // ===============================================
    // MIRROR DIMENSION
    // ===============================================
    mirror_dimension: {
        id: 'mirror_dimension',
        name: "The Mirror Dimension",
        parent: null,
        type: 'extraplanar',
        status: 'hostile',
        statusClass: 'status-hostile',
        dangerLevel: 'extreme',
        dangerClass: 'danger-extreme',
        
        description: `<p>An alternate dimension accessible through the manor's mirrors. The Mirror Dimension is a twisted reflection of reality where doppelgangers of those who enter hunt their originals.</p>
        <p>hjumpik was pulled into this dimension during the Solarium battle on Day 21. Inside, he fought his own doppelganger and received unexpected aid from an Iron Legion spy, who revealed intelligence about the impending Supernatural Sovereignty Act.</p>
        <p>The dimension appears to be the origin point for the Glass Monster and other mirror-based entities plaguing the manor. Green T was pulled into this dimension on Day 19 and has not been recovered.</p>`,

        features: [
            { name: "Inverted Reality", description: "Everything is reversed—text reads backwards, wounds appear on the opposite side, and directions are mirrored. Extremely disorienting.", type: "feature-danger" },
            { name: "Doppelganger Hunting Grounds", description: "Dark reflections of anyone who enters manifest and attempt to kill their originals. They possess the same abilities but twisted intentions.", type: "feature-danger" },
            { name: "Glass Entity Origin", description: "The dimension seems to spawn the glass and mirror creatures that emerge into the manor. Destroying the connection might stop them.", type: "feature-magic" },
            { name: "Fractured Passages", description: "The dimension is unstable. Paths crack and shatter. Falling through may deposit the traveler anywhere—or nowhere.", type: "feature-temporal" }
        ],

        history: `<p>The Mirror Dimension's connection to Raventree Manor predates the current corruption. Ancient texts suggest the manor was deliberately built atop a 'reflection nexus'—a point where reality and its mirror touch.</p>
        <p>The noble family may have used this connection for unknown purposes. Their fall could be directly related to something that emerged—or was invited—from the mirrors.</p>`,

        currentState: "Extremely hostile. Entry is involuntary (being pulled through mirrors). Green T remains trapped within. The Iron Legion apparently has agents capable of operating here.",
        stateClass: "state-danger",

        connectedLocations: [
            { id: 'solarium', name: 'Solarium (Exit Point)', direction: 'Through Mirrors', status: 'dangerous' },
            { id: 'raventree_manor', name: 'Any Manor Mirror', direction: 'Through Mirrors', status: 'hostile' }
        ],

        notableEvents: [
            { name: "Green T Lost", date: "Day 19, 06:55", type: "supernatural", description: "Green T violently pulled into mirror dimension by supernatural entity. Status: MISSING." },
            { name: "The Shard Stalker & The Spy", date: "Day 21, 02:00", type: "supernatural", description: "hjumpik pulled in, fights doppelganger, receives Legion spy aid and intelligence about Supernatural Sovereignty Act." }
        ]
    },

    // ===============================================
    // TEMPORAL POCKET (ABANDONED MANOR)
    // ===============================================
    temporal_pocket: {
        id: 'temporal_pocket',
        name: "Abandoned Manor (Temporal Pocket)",
        parent: 'hedge_maze',
        type: 'extraplanar',
        status: 'unstable',
        statusClass: 'status-unexplored',
        dangerLevel: 'temporal',
        dangerClass: 'danger-temporal',
        
        description: `<p>A version of Raventree Manor that exists in a different time—or perhaps a different timeline entirely. Discovered by Markop, Green T, and Bowser within the Hedge Maze on Day 18.</p>
        <p>This manor variant is completely abandoned and shows signs of a different history. Evidence of a "time war" was discovered here, suggesting conflicts between temporal factions—possibly including multiple versions of the Oracle.</p>
        <p>The pocket's stability is questionable. It may collapse, shift to a different era, or merge with the primary timeline without warning.</p>`,

        features: [
            { name: "Abandoned State", description: "This version of the manor has been empty for an unknown period. Dust covers everything. No supernatural entities were encountered.", type: "" },
            { name: "Time War Evidence", description: "Battle damage from unknown weapons. Banners of factions that don't exist. Bodies that aged centuries in moments. The Oracle's involvement is implied.", type: "feature-temporal" },
            { name: "Temporal Instability", description: "Objects shift between states. A door may be new one moment and rotted the next. Extended presence risks temporal displacement.", type: "feature-danger" },
            { name: "Alternative History Clues", description: "Documents and artifacts suggesting events that never occurred—or haven't occurred yet—in the primary timeline.", type: "feature-magic" }
        ],

        history: `<p>The nature of this temporal pocket is unclear. It may be:</p>
        <ul>
            <li>The manor's future, after all current conflicts end in abandonment</li>
            <li>An alternate timeline where events proceeded differently</li>
            <li>A pocket dimension created by temporal manipulation during the "time war"</li>
            <li>The Oracle's original home, preserved outside normal time</li>
        </ul>
        <p>Further investigation is needed, but the dangers of temporal exploration are extreme.</p>`,

        currentState: "Unstable and dangerous. Access through the Hedge Maze is inconsistent. The pocket may not be reachable via the same path twice.",
        stateClass: "state-unknown",

        connectedLocations: [
            { id: 'hedge_maze', name: 'Hedge Maze', direction: 'Exit (Variable)', status: 'dangerous' }
        ],

        notableEvents: [
            { name: "The Maze of Time", date: "Day 18, 09:00", type: "exploration", description: "Markop, Green T, and Bowser discover the temporal pocket. Evidence of time war found. Oracle involvement implied." }
        ]
    },

    // ===============================================
    // SHADEWARD MANSION (NEARBY)
    // ===============================================
    shadeward_mansion: {
        id: 'shadeward_mansion',
        name: "Shadeward Mansion",
        parent: null,
        type: 'structure',
        status: 'hostile',
        statusClass: 'status-hostile',
        dangerLevel: 'extreme',
        dangerClass: 'danger-extreme',
        
        description: `<p>A mansion near Raventree Manor that shares its temporal instabilities. The liberated toads entered Shadeward seeking Archie on Day 16, but instead found one of the Oracles.</p>
        <p>The dinner party that followed was a nightmare of time loops, interrupted by a fireball-wielding Archie clone, a robotic double, and ultimately a full-scale Iron Legion raid. The mansion's temporal properties caused events to repeat and overlap in confusing ways.</p>
        <p>Wario appeared during the chaos, claiming to work with the Legion to investigate the temporal instabilities. A toad traitor was revealed, and the Oracle delivered cryptic warnings before the party escaped.</p>`,

        features: [
            { name: "Temporal Dining Room", description: "Events loop and repeat. Dinner conversations may occur multiple times with slight variations. Extremely disorienting.", type: "feature-temporal" },
            { name: "Iron Legion Raid Evidence", description: "Battle damage from the Legion assault. Broken furniture, scorch marks, and abandoned equipment.", type: "" },
            { name: "Robot Double Wreckage", description: "Remains of an Archie-mimicking construct. Origin unknown. May contain valuable components or intelligence.", type: "" },
            { name: "Clone Confrontation Site", description: "Where the fireball-wielding Archie clone attacked. Significant fire damage to the area.", type: "feature-danger" }
        ],

        history: `<p>Shadeward Mansion appears to share the same temporal curse as Raventree Manor. Whether they were built by the same family, connected by ancient magic, or corrupted by the same source is unknown.</p>
        <p>The Oracle's presence in both locations suggests they are somehow linked to his nature or purpose.</p>`,

        currentState: "Heavily damaged from the Iron Legion raid. Temporal instabilities persist. Not recommended for exploration without Oracle guidance.",
        stateClass: "state-danger",

        connectedLocations: [
            { id: 'raventree_manor', name: 'Raventree Manor', direction: 'Nearby', status: 'hostile' }
        ],

        notableEvents: [
            { name: "The Dinner That Broke Time", date: "Day 16, 19:30", type: "supernatural", description: "Looping dinner party. Archie clone attacks. Robot double appears. Iron Legion raids. Wario reveals Legion alliance. Traitor exposed. Oracle delivers cryptic message." }
        ]
    },

    // ===============================================
    // RUINED HALL
    // ===============================================
    ruined_hall: {
        id: 'ruined_hall',
        name: "The Ruined Hall",
        parent: 'raventree_manor',
        type: 'interior',
        status: 'dangerous',
        statusClass: 'status-dangerous',
        dangerLevel: 'moderate',
        dangerClass: 'danger-moderate',
        
        description: `<p>A collapsed section of Raventree Manor that the party used as a staging area after the Solarium breach on Day 21. The ceiling has partially fallen in, providing some natural light but also exposure to the elements.</p>
        <p>After hjumpik's return from the Mirror Dimension and Archie's blood-rage mirror punch, the group retreated here to plan their next move against the Iron Legion spies still operating within the manor.</p>`,

        features: [
            { name: "Collapsed Ceiling", description: "Provides natural light and potential escape route, but also means the area is not secure from aerial observation.", type: "" },
            { name: "Defensive Barricades", description: "Hastily constructed from debris. Provides minimal cover but marks the party's claimed territory.", type: "" },
            { name: "Planning Table", description: "An overturned table used to lay out maps and coordinate strategy against the manor's various threats.", type: "" }
        ],

        history: `<p>The hall collapsed at an unknown time during the manor's decay. The party claimed it as a forward operating base due to its central location and multiple exit routes.</p>`,

        currentState: "Functional as a temporary base. Not secure for extended rest. Iron Legion and Mages' Guild agents may know its location.",
        stateClass: "state-warning",

        connectedLocations: [
            { id: 'solarium', name: 'Solarium', direction: 'East', status: 'dangerous' },
            { id: 'dance_hall', name: 'Dance Hall', direction: 'West', status: 'hostile' },
            { id: 'raventree_manor', name: 'Main Halls', direction: 'Various', status: 'hostile' }
        ],

        notableEvents: [
            { name: "The Shard Stalker & The Spy", date: "Day 21, 02:00", type: "exploration", description: "Party retreats here after Solarium breach to plan against spies." }
        ]
    }
};

// ===============================================
// DOM ELEMENTS
// ===============================================
const locationDisplay = document.getElementById('location-display');
const locationButtons = document.querySelectorAll('.loc-btn');

// ===============================================
// STATE
// ===============================================
let currentLocation = 'silent_grove';

// ===============================================
// RENDER FUNCTION
// ===============================================
function renderLocation(locationId) {
    const loc = LOCATIONS[locationId];
    if (!loc) {
        locationDisplay.innerHTML = `
            <div class="alert-box alert-danger">
                <div class="alert-title">ERROR: Location Not Found</div>
                <p>Location ID "${locationId}" does not exist in the database.</p>
            </div>
        `;
        return;
    }

    // Build features HTML with type classes
    const featuresHTML = loc.features.map(f => `
        <div class="feature-item ${f.type || ''}">
            <h5 class="feature-name">${f.name}</h5>
            <p class="feature-desc">${f.description}</p>
        </div>
    `).join('');

    // Build connections HTML
    const connectionsHTML = loc.connectedLocations.map(c => `
        <div class="connection-item status-${c.status}" data-location="${c.id}">
            <span class="connection-direction">[${c.direction}]</span>
            <span class="connection-name">${c.name}</span>
            <span class="connection-status">${c.status.toUpperCase()}</span>
        </div>
    `).join('');

    // Build events HTML
    const eventsHTML = loc.notableEvents.map(e => `
        <div class="mini-event">
            <span class="mini-event-date">${e.date}</span>
            <span class="mini-event-name">${e.name}</span>
            <span class="mini-event-type type-${e.type}">${e.type.toUpperCase()}</span>
        </div>
    `).join('');

    // Determine state class
    const stateClass = loc.stateClass || 'state-unknown';

    // Render full location display
    locationDisplay.innerHTML = `
        <div class="location-header">
            <div class="location-title-block">
                <h2 class="location-name">${loc.name}</h2>
                <div class="location-meta">
                    <span class="meta-type">${loc.type.replace(/_/g, ' ').toUpperCase()}</span>
                    <span class="meta-parent">${loc.parent ? `Parent: ${LOCATIONS[loc.parent]?.name || loc.parent}` : 'ROOT LOCATION'}</span>
                </div>
            </div>
            <div class="location-status-block">
                <div class="status-badge ${loc.statusClass}">${loc.status.toUpperCase()}</div>
                <div class="danger-badge ${loc.dangerClass}">DANGER: ${loc.dangerLevel.toUpperCase()}</div>
            </div>
        </div>

        <div class="location-body">
            <div class="location-section description-section">
                <h3 class="section-title">Description</h3>
                <div class="section-content">
                    ${loc.description}
                </div>
            </div>

            <div class="location-section features-section">
                <h3 class="section-title">Notable Features</h3>
                <div class="features-grid">
                    ${featuresHTML}
                </div>
            </div>

            <div class="location-section history-section">
                <h3 class="section-title">History</h3>
                <div class="section-content">
                    ${loc.history}
                </div>
            </div>

            <div class="location-section current-section">
                <h3 class="section-title">Current State</h3>
                <div class="section-content current-state-box ${stateClass}">
                    <p>${loc.currentState}</p>
                </div>
            </div>

            <div class="location-columns">
                <div class="location-section connections-section">
                    <h3 class="section-title">Connected Locations</h3>
                    <div class="connections-list">
                        ${connectionsHTML}
                    </div>
                </div>

                <div class="location-section events-section">
                    <h3 class="section-title">Notable Events</h3>
                    <div class="events-mini-list">
                        ${eventsHTML}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add click handlers for connection navigation
    document.querySelectorAll('.connection-item[data-location]').forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.location;
            if (LOCATIONS[targetId]) {
                // Update button states
                locationButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.location === targetId) {
                        btn.classList.add('active');
                    }
                });
                currentLocation = targetId;
                renderLocation(targetId);
                // Scroll to top of display
                locationDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===============================================
// INITIALIZATION
// ===============================================
function initLocationSystem() {
    // Render initial location
    renderLocation(currentLocation);

    // Setup button listeners
    locationButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            locationButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Render new location
            currentLocation = e.target.dataset.location;
            renderLocation(currentLocation);
        });
    });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLocationSystem);
} else {
    initLocationSystem();
}

// ===============================================
// EXPORT FOR MODULE USE
// ===============================================
export { LOCATIONS, renderLocation, initLocationSystem };