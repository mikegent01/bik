
export const RELIGION_DATA = {
    groups: {
        celestial_order: {
            name: "The Celestial Order",
            description: "Faiths dedicated to light, stars, divine preservation, and the cosmic hierarchy.",
            color: "#FFD700",
            icon: "☀️"
        },
        primal_forces: {
            name: "The Primal Forces",
            description: "Belief systems rooted in nature, instinct, strength, biology, and the cycle of life and death.",
            color: "#228B22",
            icon: "🐾"
        },
        machine_orthodoxy: {
            name: "The Machine Orthodoxy",
            description: "Worship of logic, steel, progress, data, and the perfection of the construct.",
            color: "#A9A9A9",
            icon: "⚙️"
        },
        cosmic_void: {
            name: "The Cosmic Void",
            description: "Nihilistic, chaotic, or eldritch beliefs focused on entropy, the absurd, or the empty dark.",
            color: "#9400D3",
            icon: "🌀"
        }
    },
    denominations: {
        // --- CELESTIAL ORDER (13) ---
        star_spirits: {
            id: "star_spirits",
            name: "Veneration of the Stars",
            group: "celestial_order",
            leader: "Eldstar",
            seat: "Star Haven",
            description: "The dominant faith of the Mushroom Kingdom. Believers hold that the Star Spirits grant wishes and guide destiny.",
            bonus: "Grant Wishes: +10% Morale to friendly organic troops.",
            active_law: "The Wish of Peace: Non-aggression pacts cost 20% less political capital.",
            organization: "The Star Sanctuary"
        },
        silver_flame_faith: {
            id: "silver_flame_faith",
            name: "The Silver Flame",
            group: "celestial_order",
            leader: "Jaela, Keeper of the Flame",
            seat: "Flamekeep (Midlands)",
            description: "A militant faith dedicated to purging supernatural evil. Popular among Humans in the Midlands.",
            bonus: "Purge the Wicked: Damage bonus against Undead and Chaos.",
            active_law: "Edict of Purification: Inquisitors have free reign in allied territories.",
            organization: "Church of the Silver Flame"
        },
        arceus_mythos: {
            id: "arceus_mythos",
            name: "The Creation Mythos",
            group: "celestial_order",
            leader: "High Priestess Cynthia",
            seat: "Spear Pillar",
            description: "Worship of Arceus, the Original One. Followed by Pokemon Trainers and Sinnoh natives.",
            bonus: "Type Synergy: Allied units gain bonuses in diverse groups.",
            active_law: "Harmony of Types: Trade income increased between biomes.",
            organization: "The Hallowed Tower"
        },
        sigmarite_cult: {
            id: "sigmarite_cult",
            name: "Cult of Sigmar",
            group: "celestial_order",
            leader: "Grand Theogonist Volkmar",
            seat: "Altdorf",
            description: "The state religion of The Empire. Worships Sigmar Heldenhammer as the god of humanity.",
            bonus: "Righteous Fury: Infantry units gain morale boost.",
            active_law: "Witch Hammer: Magic users are subject to strict surveillance.",
            organization: "The Holy Order of the Templars"
        },
        lady_of_the_lake: {
            id: "lady_of_the_lake",
            name: "The Lady of the Lake",
            group: "celestial_order",
            leader: "The Fay Enchantress",
            seat: "Bretonnia",
            description: "A chivalric faith focused on honor, nobility, and the protection of the realm.",
            bonus: "Blessing of the Lady: Knights gain a ward save.",
            active_law: "Code of Chivalry: Dishonorable tactics reduce reputation.",
            organization: "The Grail Knights"
        },
        celestia_divinity: {
            id: "celestia_divinity",
            name: "Solar Absolutism",
            group: "celestial_order",
            leader: "Queen Celestia",
            seat: "Canterlot",
            description: "The belief that the Sun Princess is the literal and political center of the universe.",
            bonus: "Solar Order: High stability in controlled regions.",
            active_law: "Harmony Mandate: Dissent is classified as disharmony.",
            organization: "The Royal Guard"
        },
        triforce_devotion: {
            id: "triforce_devotion",
            name: "Order of the Golden Power",
            group: "celestial_order",
            leader: "Princess Zelda",
            seat: "Hyrule Castle",
            description: "Worship of the three Golden Goddesses and the balance of Power, Wisdom, and Courage.",
            bonus: "Divine Protection: Defensive structures are stronger.",
            active_law: "Wisdom's Guidance: Research speed increased.",
            organization: "The Sages"
        },
        shine_sprite_cult: {
            id: "shine_sprite_cult",
            name: "Cult of the Shine",
            group: "celestial_order",
            leader: "Grand Pianta",
            seat: "Delfino Plaza",
            description: "Islanders who worship the Shine Sprites as the source of sunlight and life.",
            bonus: "Solar Power: Solar infrastructure produces double energy.",
            active_law: "Festival of Sun: Public happiness increased.",
            organization: "The Shine Gatekeepers"
        },
        luma_caretakers: {
            id: "luma_caretakers",
            name: "Luma Caretakers",
            group: "celestial_order",
            leader: "Rosalina",
            seat: "Comet Observatory",
            description: "Guardians of the cosmos who raise young stars.",
            bonus: "Cosmic Rebirth: Fallen units have a chance to respawn.",
            active_law: "Starbit Harvest: Magical resources generated passively.",
            organization: "The Galaxy Guard"
        },
        order_of_maat: {
            id: "order_of_maat",
            name: "Order of Maat",
            group: "celestial_order",
            leader: "High Priest Khonsu",
            seat: "New Cairo",
            description: "Followers of ancient laws of balance and truth, originating from desert regions.",
            bonus: "Scales of Truth: Counter-espionage effectiveness increased.",
            active_law: "Judgment of Souls: Corruption is rooted out automatically.",
            organization: "The Temple of Balance"
        },
        sanctum_of_light: {
            id: "sanctum_of_light",
            name: "Sanctum of Light",
            group: "celestial_order",
            leader: "Uther the Lightbringer",
            seat: "The Great Chapel",
            description: "Devotion to the Holy Light, emphasizing healing and protection.",
            bonus: "Holy Healing: Unit regeneration rate doubled.",
            active_law: "Path of Grace:Diplomatic relations improve faster.",
            organization: "The Silver Hand"
        },
        asuryan_faithful: {
            id: "asuryan_faithful",
            name: "Faith of Asuryan",
            group: "celestial_order",
            leader: "The Phoenix King",
            seat: "Ulthuan",
            description: "High Elven worship of the Creator God and the Phoenix flame.",
            bonus: "Arcane Mastery: Magic units have increased range.",
            active_law: "Phoenix Court: Political influence generation increased.",
            organization: "The White Tower"
        },
        the_one_ring_cult: {
            id: "the_one_ring_cult", // Sort of fits here as a 'divine order' of Sauron
            name: "Cult of the Lidless Eye",
            group: "celestial_order",
            leader: "Sauron",
            seat: "Barad-dûr",
            description: "Enforced worship of Sauron as the God-King of Middle-earth.",
            bonus: "Domination: Enemy units may convert to your side.",
            active_law: "One Will: Absolute obedience; zero crime.",
            organization: "The Nazgûl"
        },

        // --- PRIMAL FORCES (13) ---
        great_waaagh: {
            id: "great_waaagh",
            name: "The Great WAAAGH!",
            group: "primal_forces",
            leader: "Gork & Mork",
            seat: "The Battlefield",
            description: "A psychic gestalt field generated by Greenskin violence.",
            bonus: "Mob Rule: Combat stats scale with unit density.",
            active_law: "Da Biggest is Da Best: Leadership via combat.",
            organization: "The Green Tide"
        },
        lunar_cycle: {
            id: "lunar_cycle",
            name: "The Lunar Cycle",
            group: "primal_forces",
            leader: "Alpha Prime",
            seat: "Moon Cairn",
            description: "Reverence for the moon's phases. Practiced by Werewolves.",
            bonus: "Moon Fury: Combat bonuses based on date.",
            active_law: "The Hunt: Trespassers in territory are free game.",
            organization: "The Pack Council"
        },
        sanguine_path: {
            id: "sanguine_path",
            name: "The Sanguine Path",
            group: "primal_forces",
            leader: "Lady Ebonveil",
            seat: "Bloodspire",
            description: "Belief in the supremacy of blood and the undead nobility.",
            bonus: "Blood Tithe: Regeneration for elite units.",
            active_law: "Cattle Rights: Mortals are property.",
            organization: "The Onyx Hand"
        },
        great_plan: {
            id: "great_plan",
            name: "The Great Plan",
            group: "primal_forces",
            leader: "Lord Mazdamundi",
            seat: "Hexoatl",
            description: "Lizardmen adherence to the geometric and biological instructions of the Old Ones.",
            bonus: "Geomantic Web: Defense bonuses on Ley Lines.",
            active_law: "Cold Logic: Immune to psychology/morale shocks.",
            organization: "The Slann Mage-Priests"
        },
        circle_of_spores: {
            id: "circle_of_spores",
            name: "Circle of Spores",
            group: "primal_forces",
            leader: "The Myconid King",
            seat: "The Underdark",
            description: "Worship of decay, fungal growth, and the cycle of rot.",
            bonus: "Fungal Bloom: Defeated units release damaging spores.",
            active_law: "Compost: All dead must be left to rot.",
            organization: "The Whispering Mycelium"
        },
        helix_fossil_cult: {
            id: "helix_fossil_cult",
            name: "Church of Helix",
            group: "primal_forces",
            leader: "Omanyte Prophet",
            seat: "Mt. Moon",
            description: "Worship of ancient fossils and chaotic biological anarchy.",
            bonus: "Ancient Power: Rock/Water types gain buffs.",
            active_law: "Anarchy Mode: Command inputs are randomized but potent.",
            organization: "The Fossil Maniacs"
        },
        yggdrasil_pact: {
            id: "yggdrasil_pact",
            name: "Pact of Yggdrasil",
            group: "primal_forces",
            leader: "World-Tree Avatar",
            seat: "The World Tree",
            description: "Druidic reverence for the trees connecting realms.",
            bonus: "Roots of Earth: Movement speed increased in forests.",
            active_law: "Grove Protection: Logging is a capital offense.",
            organization: "The Circle of Leaves"
        },
        great_maw: {
            id: "great_maw",
            name: "The Great Maw",
            group: "primal_forces",
            leader: "Ogre Tyrant",
            seat: "Mountains of Mourn",
            description: "Worship of a insatiable, planet-eating mouth.",
            bonus: "Ravenous: Units heal by eating enemies.",
            active_law: "The Feast: Food stockpiles convert to XP.",
            organization: "The Gutbusters"
        },
        khornate_blood_cult: {
            id: "khornate_blood_cult",
            name: "Blood for the Blood God",
            group: "primal_forces",
            leader: "Exalted Champion",
            seat: "The Brass Citadel",
            description: "Worship of Khorne, god of war and bloodshed.",
            bonus: "Bloodlust: Attack damage increases as battle continues.",
            active_law: "Skull Tithe: No prisoners, only trophies.",
            organization: "The World Eaters"
        },
        nurgle_rot: {
            id: "nurgle_rot",
            name: "Grandfather's Love",
            group: "primal_forces",
            leader: "Great Unclean One",
            seat: "The Garden of Nurgle",
            description: "Worship of disease, despair, and endurance.",
            bonus: "Disgusting Resilience: Units are hard to kill.",
            active_law: "Shared Burden: Plagues spread to allies but buff them.",
            organization: "The Death Guard"
        },
        wild_hunt: {
            id: "wild_hunt",
            name: "The Wild Hunt",
            group: "primal_forces",
            leader: "King of the Hunt",
            seat: "Athel Loren",
            description: "Fey worship of the predator/prey dynamic.",
            bonus: "The Chase: Speed bonus when pursuing retreating enemies.",
            active_law: "Cull the Weak: Weak units are sacrificed for morale.",
            organization: "The Wardens"
        },
        go_rock_philosophy: {
            id: "go_rock_philosophy",
            name: "Go-Rock Philosophy",
            group: "primal_forces",
            leader: "Gordor",
            seat: "Fiore Temple",
            description: "Belief in dominating nature through music and force.",
            bonus: "Power Chord: Area of effect sonic attacks.",
            active_law: "Encore: Failed actions can be retried instantly.",
            organization: "The Go-Rock Squad"
        },
        bean_star_faith: {
            id: "bean_star_faith",
            name: "Bean Star Faith",
            group: "primal_forces",
            leader: "Queen Bean",
            seat: "Beanbean Castle",
            description: "Worship of the wish-granting vegetable star.",
            bonus: "Photosynthesis: Passive healing in sunlight.",
            active_law: "Laughter is Life: Morale immune to fear.",
            organization: "The Chuckola Reserve"
        },

        // --- MACHINE ORTHODOXY (12) ---
        cog_gospel: {
            id: "cog_gospel",
            name: "Gospel of the Cog",
            group: "machine_orthodoxy",
            leader: "Forgemaster Vexar",
            seat: "Iron Citadel",
            description: "The Iron Legion's belief that flesh is weak and steel is eternal.",
            bonus: "Standardization: Reduced unit upkeep.",
            active_law: "Total Mobilization: Production speed +50%.",
            organization: "Priesthood of Mars"
        },
        digital_ascension: {
            id: "digital_ascension",
            name: "Digital Ascension",
            group: "machine_orthodoxy",
            leader: "Admin Zero",
            seat: "The Core Server",
            description: "Belief that biological consciousness is a glitch to be patched via upload.",
            bonus: "Data Mining: Intel gathering doubled.",
            active_law: "EULA: Privacy is abolished.",
            organization: "The Administrators"
        },
        millennium_logic: {
            id: "millennium_logic",
            name: "Millennium Logic",
            group: "machine_orthodoxy",
            leader: "Seminar Student Council",
            seat: "Millennium Tower",
            description: "Strict adherence to scientific method and technological superiority.",
            bonus: "Calculation: Accuracy increases over time in battle.",
            active_law: "Peer Review: All orders must be verified.",
            organization: "Seminar"
        },
        brotherhood_of_steel: {
            id: "brotherhood_of_steel",
            name: "The Steel Creed",
            group: "machine_orthodoxy",
            leader: "Elder Maxson",
            seat: "The Prydwen",
            description: "Hoarding technology to prevent mankind from destroying itself.",
            bonus: "Power Armor: Heavy infantry have extra defense.",
            active_law: "Tech Hoarding: No tech trading with outsiders.",
            organization: "The Brotherhood"
        },
        scrappers_code: {
            id: "scrappers_code",
            name: "The Scrapper's Code",
            group: "machine_orthodoxy",
            leader: "Big Boss",
            seat: "The Junkyard",
            description: "Reverence for the potential in discarded things.",
            bonus: "Salvage: Recover resources from destroyed units.",
            active_law: "One Man's Trash: Equipment upgrade costs reduced.",
            organization: "Ratchet Raiders"
        },
        cyber_network_hive: {
            id: "cyber_network_hive",
            name: "The Network Hive",
            group: "machine_orthodoxy",
            leader: "The Queen Bee-t",
            seat: "Cyber-Space",
            description: "A collective consciousness of drones and AIs.",
            bonus: "Instant Comms: No fog of war in owned territory.",
            active_law: "Assimilation: Captured units are converted.",
            organization: "The Hive"
        },
        cult_of_the_engine: {
            id: "cult_of_the_engine",
            name: "Cult of the Engine",
            group: "machine_orthodoxy",
            leader: "Engine-Seer",
            seat: "The Great Train",
            description: "Worship of the perpetual motion that keeps the world running.",
            bonus: "Momentum: Movement speed increases if not stopping.",
            active_law: "Keep Moving: Static defenses are weaker.",
            organization: "The Conductors"
        },
        silph_corporate_policy: {
            id: "silph_corporate_policy",
            name: "Silph Corporate Policy",
            group: "machine_orthodoxy",
            leader: "The Board",
            seat: "Saffron City",
            description: "Profit, innovation, and the Master Ball.",
            bonus: "R&D: Prototype weapons available earlier.",
            active_law: "Hostile Takeover: Can buy out enemy mercenary contracts.",
            organization: "Silph Co."
        },
        red_winter_bureaucracy: {
            id: "red_winter_bureaucracy",
            name: "State Atheism",
            group: "machine_orthodoxy",
            leader: "Cherino",
            seat: "Red Winter",
            description: "Worship of the State, the System, and the Mustache.",
            bonus: "Mass Assault: Cheap infantry units.",
            active_law: "The Purge: Periodically remove 'inefficient' leaders for bonuses.",
            organization: "The Secretariat"
        },
        gadd_science: {
            id: "gadd_science",
            name: "E. Gadd's Method",
            group: "machine_orthodoxy",
            leader: "Prof. E. Gadd",
            seat: "Boo Woods Lab",
            description: "Eccentric science focusing on ghosts and fluids.",
            bonus: "Poltergust: Bonus damage vs. Ethereal.",
            active_law: "Experimental Safety: Failures cause AOE damage.",
            organization: "Ghost Hunters"
        },
        necrontyr_awakening: {
            id: "necrontyr_awakening",
            name: "The Great Awakening",
            group: "machine_orthodoxy",
            leader: "The Silent King",
            seat: "Tomb World",
            description: "The restoration of the Necron dynasties.",
            bonus: "Reanimation Protocols: Dead units stand back up.",
            active_law: "Gauss Flayer: Armor penetration increased.",
            organization: "The Dynasties"
        },
        steam_covenant: {
            id: "steam_covenant",
            name: "Covenant of Steam",
            group: "machine_orthodoxy",
            leader: "The Grand Gear",
            seat: "Clockwork City",
            description: "Steampunk worship of pressure and gears.",
            bonus: "Overclock: Can boost stats at cost of health.",
            active_law: "Venting: Steam clouds provide cover.",
            organization: "The Engineers"
        },

        // --- COSMIC VOID (12) ---
        jester_cult: {
            id: "jester_cult",
            name: "The Cosmic Punchline",
            group: "cosmic_void",
            leader: "Cosmic Jester",
            seat: "Doughnut Hole",
            description: "Existence is a joke. Laughter is the only response.",
            bonus: "Wild Magic: Random effects on ability use.",
            active_law: "Mandatory Fun: Serious behavior punished.",
            organization: "Circus of Values"
        },
        void_nihilism: {
            id: "void_nihilism",
            name: "Void Nihilism",
            group: "cosmic_void",
            leader: "Warlord Luna",
            seat: "The Edge",
            description: "Entropy is inevitable. Embrace the end.",
            bonus: "Fearless: Immune to morale shocks.",
            active_law: "Entropy: Scavenging yields double.",
            organization: "Cult of the End"
        },
        tzeentch_schemes: {
            id: "tzeentch_schemes",
            name: "Path of Change",
            group: "cosmic_void",
            leader: "Kairos Fateweaver",
            seat: "Crystal Labyrinth",
            description: "Worship of Tzeentch, changer of ways.",
            bonus: "Shield of Fate: Magic barrier generation.",
            active_law: "Just as Planned: Retcons failures into successes (rarely).",
            organization: "The Thousand Sons"
        },
        slaanesh_excess: {
            id: "slaanesh_excess",
            name: "Cult of Excess",
            group: "cosmic_void",
            leader: "Keeper of Secrets",
            seat: "Palace of Pleasure",
            description: "Worship of Slaanesh through pain and pleasure.",
            bonus: "Allure: Enemy units hesitate to attack.",
            active_law: "Perfection: Critical hit chance increased.",
            organization: "The Emperor's Children"
        },
        great_horned_rat: {
            id: "great_horned_rat",
            name: "The Horned Rat",
            group: "cosmic_void",
            leader: "Grey Seer Thanquol",
            seat: "Skavenblight",
            description: "Worship of ruin, plague, and backstabbing.",
            bonus: "Vermintide: Summon expendable rat units.",
            active_law: "Life is Cheap: Friendly fire is encouraged.",
            organization: "Council of Thirteen"
        },
        dark_moon_clan: {
            id: "dark_moon_clan",
            name: "The Dark Moon",
            group: "cosmic_void",
            leader: "King Boo",
            seat: "Paranormal Dimension",
            description: "Worship of the moon that drives ghosts mad.",
            bonus: "Incorporeal: High dodge chance.",
            active_law: "Night Terror: Enemies lose morale at night.",
            organization: "The Boos"
        },
        gematria_gnosis: {
            id: "gematria_gnosis",
            name: "Gematria Gnosis",
            group: "cosmic_void",
            leader: "Black Suit",
            seat: "Unknown",
            description: "Seeking the sublime through the horrific and abstract.",
            bonus: "Terror: Enemies are terrified by your forms.",
            active_law: "The Sublime: Reality warping effects.",
            organization: "Gematria"
        },
        waluigi_time: {
            id: "waluigi_time",
            name: "The Cult of WAH",
            group: "cosmic_void",
            leader: "Waluigi",
            seat: "Pinball Stadium",
            description: "The belief that everyone is cheating but you.",
            bonus: "Cheater's Luck: Re-roll failed checks.",
            active_law: "Rejection: Gain power from being excluded.",
            organization: "The Waluigi Fan Club"
        },
        missingno_glitch: {
            id: "missingno_glitch",
            name: "The Glitch",
            group: "cosmic_void",
            leader: "MissingNo.",
            seat: "Cinnabar Coast",
            description: "Worship of data corruption and reality errors.",
            bonus: "Item Duplication: Chance to double loot.",
            active_law: "Crash: Chance to freeze enemy units in time.",
            organization: "The Bug Catchers"
        },
        unown_alphabet: {
            id: "unown_alphabet",
            name: "The Hidden Power",
            group: "cosmic_void",
            leader: "The Hive Mind",
            seat: "Ruins of Alph",
            description: "Worship of the letters that rewrite reality.",
            bonus: "Hidden Power: Attacks change type to hit weakness.",
            active_law: "Inscription: Runes provide random buffs.",
            organization: "The Alphabet"
        },
        abyss_order_void: {
            id: "abyss_order_void",
            name: "The Abyss",
            group: "cosmic_void",
            leader: "The Sibling",
            seat: "Khaenri'ah",
            description: "Hatred of the divine order and Celestia.",
            bonus: "Abyssal Shield: Elemental shields.",
            active_law: "Godless: Damage bonus vs. Celestials.",
            organization: "The Abyss Order"
        },
        team_plasma_liberation: {
            id: "team_plasma_liberation",
            name: "True Liberation",
            group: "cosmic_void",
            leader: "Ghetsis",
            seat: "Plasma Frigate",
            description: "The belief that the world must be frozen to be preserved.",
            bonus: "Zero Hour: Ice attacks are stronger.",
            active_law: "Segregation: Humans and Pokemon separated.",
            organization: "Team Plasma"
        }
    }
};
