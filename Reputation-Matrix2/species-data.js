
export const SPECIES_DATA = {
    // ========================================================================
    // D&D / FANTASY BASE
    // ========================================================================
    dnd_human: { 
        name: 'Human (Variant)', 
        color: '#d4a373', 
        icon: '🧑', 
        description: 'Versatile and ambitious humans found across all realms.',
        player_relations: {
            archie: "Accepted as kin, though your third eye causes uneasy stares and whispers of mutation.",
            markop: "Viewed as a useful beast of burden or cavalry, not an equal. High discrimination in cities.",
            humpik: "Respected for trade and forge-work, though considered stubborn and rude.",
            bowser: "Terrified. Humans see a monster king and hide their children.",
            remi: "Accepted as human, though your strange clothes mark you as a foreigner."
        }
    },
    dnd_elf_high: { 
        name: 'Elf (High)', 
        color: '#ffd700', 
        icon: '🧝‍♂️', 
        description: 'Graceful masters of arcane magic and high culture.',
        player_relations: {
            archie: "Looked down upon. To them, a human life is a fleeting, chaotic spark unworthy of attention.",
            markop: "Disdain. They view centaurs as uncivilized mongrels interfering with refined society.",
            humpik: "Historical hatred. They see dwarves as dirt-grubbing pests ruining the earth.",
            bowser: "Revulsion. A crude, magical anomaly that offends their aesthetic sensibilities.",
            remi: "Pity. Another short-lived human destined to wither and die in a blink."
        }
    },
    dnd_elf_wood: { 
        name: 'Elf (Wood)', 
        color: '#558b2f', 
        icon: '🏹', 
        description: 'Swift and stealthy guardians of the deep forests.',
        player_relations: {
            archie: "Distrust. Humans bring fire and axes. You are watched from the branches.",
            markop: "Kinship. They respect your connection to nature, treating you better than humans.",
            humpik: "Hostility. Dwarves cut trees for furnaces. You are not welcome in the woods.",
            bowser: "An unnatural blight. The forest goes silent when you approach.",
            remi: "Suspicion. You smell of city smoke and iron."
        }
    },
    dnd_elf_drow: { 
        name: 'Elf (Drow)', 
        color: '#424242', 
        icon: '🕷️', 
        description: 'Subterranean elves adapted to the dark dangers of the Underdark.',
        player_relations: {
            archie: "Potential slave. Humans are weak and easily broken.",
            markop: "A beast of burden. Useful for hauling ore in the deep mines.",
            humpik: "Ancient Enemy. Kill on sight. The wars between Drow and Dwarf are eternal.",
            bowser: "Intrigued. They respect power and tyranny, seeing a kindred spirit.",
            remi: "Soft surface-dweller. Easy prey."
        }
    },
    dnd_dwarf_hill: { 
        name: 'Dwarf (Hill)', 
        color: '#8d6e63', 
        icon: '🍺', 
        description: 'Tough and intuitive dwarves with a love for craftsmanship.',
        player_relations: {
            archie: "Friendly enough, provided you pay your tab and don't break anything.",
            markop: "Awkward. You don't fit in their tunnels, literally.",
            humpik: "BROTHER! Instant acceptance, free ale, and shared complaints about elves.",
            bowser: "Respected for your shell's durability, but hated for your tyranny.",
            remi: "Neutral. Just don't ask for water with your whiskey."
        }
    },
    dnd_dwarf_mountain: { 
        name: 'Dwarf (Mountain)', 
        color: '#5d4037', 
        icon: '🛡️', 
        description: 'Strong and rugged dwarves from high peaks and deep mines.',
        player_relations: {
            archie: "Suspicious. Humans are fickle oath-breakers.",
            markop: "Unimpressed. Four legs are clumsy on a narrow mountain ledge.",
            humpik: "Kin. They will defend you to the death simply because of your beard.",
            bowser: "A worthy challenge. They want to test their axes against your hide.",
            remi: "Dismissed as frail."
        }
    },
    dnd_goblin: { 
        name: 'Goblin', 
        color: '#4caf50', 
        icon: '👺', 
        description: 'Scrappy and numerous, thriving in the margins of society.',
        social_status: "Pest / Nuisance",
        player_relations: {
            archie: "Boss? You look like a Boss. We follow.",
            markop: "Scary horse-man! Run!",
            humpik: "Terrified. Dwarves hunt goblins for sport.",
            bowser: "GOD. They worship your size and spikes. Total subservience.",
            remi: "Easy mark. They try to steal your wallet."
        }
    },
    dnd_tiefling: { 
        name: 'Tiefling', 
        color: '#7b1fa2', 
        icon: '😈', 
        description: 'Individuals with an infernal heritage and innate magic.',
        social_status: "Mistrusted",
        player_relations: {
            archie: "Solidarity. They know what it's like to be judged for appearance.",
            markop: "Curiosity. They relate to being a hybrid of different worlds.",
            humpik: "Cool. They appreciate that dwarves don't care about 'cursed blood'.",
            bowser: "Wary. They know a devil when they see one.",
            remi: "Friendly. You look like an outsider too."
        }
    },
    dnd_orc: { 
        name: 'Orc', 
        color: '#33691e', 
        icon: '👹', 
        description: 'Strong, tribal warriors who value physical might.',
        player_relations: {
            archie: "Weak puny human. easy to crush.",
            markop: "Respect. A strong warrior physique. Good for battle.",
            humpik: "Hated Rival. Orcs and Dwarves have warred for eons.",
            bowser: "Strength recognizes strength. They salute you.",
            remi: "Laughable. Too small to be a threat."
        }
    },
    dnd_dragonborn_metallic: { 
        name: 'Dragonborn (Metallic)', 
        color: '#fbc02d', 
        icon: '⚡', 
        description: 'Noble dragonkin claiming ancestry from metallic dragons.',
        player_relations: {
            archie: "Judgmental. They find humans chaotic and lacking honor.",
            markop: "Respect. They see the nobility in your bearing.",
            humpik: "Respect. They appreciate dwarven clan loyalty.",
            bowser: "Enemy. Metallic dragons naturally oppose chromatic-like tyrants.",
            remi: "Protective. You seem in need of a shield."
        }
    },
    // ... (Continuing with the same pattern for all species)
    
    // ========================================================================
    // SPECIAL REQUESTS
    // ========================================================================
    centaur_human_head: { 
        name: 'Centaur (Classic)', 
        color: '#8d6e63', 
        icon: '🐎', 
        description: 'The classic centaur: human torso and head on a horse body. Noble and proud.',
        player_relations: {
            archie: "Cautious. Humans often try to ride them, which is a grave insult.",
            markop: "KIN! You are embraced as a brother of the herd.",
            humpik: "Annoyed. Dwarves dig holes that centaurs break their legs in.",
            bowser: "Fearful. You are a predator that can crush them.",
            remi: "Neutral. You are small and harmless."
        }
    },
    centaur_horse_head: { 
        name: 'Centaur (Equine)', 
        color: '#5d4037', 
        icon: '🐴', 
        description: 'A terrifying anomaly: A horse torso and body, with a horse head where the human torso should be.',
        social_status: "Cursed Anomaly",
        player_relations: {
            archie: "Hungry? (It mostly just wants hay).",
            markop: "Uncanny Valley. Even Markop is freaked out by these.",
            humpik: "Is it a mount? Or a person? Confused.",
            bowser: "Just a horse. Useful for pulling wagons.",
            remi: "Offers a sugar cube."
        }
    },

    // ========================================================================
    // MARIO WORLD
    // ========================================================================
    toad_citizen: { 
        name: 'Toad', 
        color: '#ff6b6b', 
        icon: '🍄', 
        description: 'The peaceful, fungal-capped citizens of the Mushroom Kingdom.',
        social_status: "Under Occupation / Enslaved",
        player_relations: {
            archie: "You saved them! Heroes! But you're very tall and scary.",
            markop: "A noble steed! (Please don't ask to ride him).",
            humpik: "Loud and destructive. Please don't smash the house.",
            bowser: "TERROR. SCREAMING. RUNNING IN CIRCLES.",
            remi: "You look like Princess Peach's guard! Save us!"
        }
    },
    koopa: { 
        name: 'Koopa Troopa', 
        color: '#ffd93d', 
        icon: '🐢', 
        description: 'Turtle-like creatures that form the backbone of Bowser\'s army.',
        player_relations: {
            archie: "Enemy combatant. Watch out for fireballs.",
            markop: "A fast target. Aim for the legs.",
            humpik: "Hard shell, soft inside. Hammer practice.",
            bowser: "LORD BOWSER! *Salutes vigorously*",
            remi: "Neutral. Just don't jump on them."
        }
    },
    goomba: { 
        name: 'Goomba', 
        color: '#8d6e63', 
        icon: '😠', 
        description: 'Small, mushroom-like creatures with a grumpy disposition.',
        social_status: "Disposable Minion",
        player_relations: {
            archie: "Bites your ankles.",
            markop: "Gets stuck in your horseshoes.",
            humpik: "Kicked like a soccer ball.",
            bowser: "Loyal subjects. The bravest of the brave.",
            remi: "Cute but angry."
        }
    },
    yoshi: { 
        name: 'Yoshi', 
        color: '#76ff03', 
        icon: '🦖', 
        description: 'Friendly, dinosaur-like omnivores from Yoshi\'s Island.',
        player_relations: {
            archie: "Can I eat you? No? Okay.",
            markop: "Fast runner! Let's race!",
            humpik: "You look heavy. Yoshi carry?",
            bowser: "Bad memories of Baby Bowser. Avoids.",
            remi: "Yoshi! (Friendly noises)."
        }
    },
    pianta: { 
        name: 'Pianta', 
        color: '#f48c06', 
        icon: '🌴', 
        description: 'Strong, tree-loving islanders from the Sunshine Isles.',
        player_relations: {
            archie: "Throws you if you're mean.",
            markop: "Respects your strength.",
            humpik: "Offers tropical fruit.",
            bowser: "Hates you for polluting the island.",
            remi: "Friendly wave."
        }
    },
    noki: { 
        name: 'Noki', 
        color: '#4fc3f7', 
        icon: '🐚', 
        description: 'Shell-dwelling islanders often found near coral reefs.',
        player_relations: {
            archie: "Shy.",
            markop: "Confused by the horse half.",
            humpik: "Likes your armor.",
            bowser: "Hides in shell.",
            remi: "Giggles."
        }
    },
    shy_guy: { 
        name: 'Shy Guy', 
        color: '#ef5350', 
        icon: '🎭', 
        description: 'Masked, mysterious minions who serve various masters.',
        player_relations: {
            archie: "Stares silently.",
            markop: "Stares silently.",
            humpik: "Stares silently.",
            bowser: "Works diligently.",
            remi: "Stares silently."
        }
    },
    bob_omb: { 
        name: 'Bob-omb', 
        color: '#212121', 
        icon: '💣', 
        description: 'Living explosives with a short fuse and shorter temper.',
        player_relations: {
            archie: "Tick tick tick.",
            markop: "Tick tick tick.",
            humpik: "Tick tick tick.",
            bowser: "Excellent ammo.",
            remi: "Tick tick tick."
        }
    },
    monty_mole: { 
        name: 'Monty Mole', 
        color: '#795548', 
        icon: '👓', 
        description: 'Subterranean pests that ambush travelers.',
        player_relations: {
            archie: "Throws rocks.",
            markop: "Trips you.",
            humpik: "Competitor for digging spots.",
            bowser: "Good for traps.",
            remi: "Throws rocks."
        }
    },

    // ========================================================================
    // THE MIDLANDS
    // ========================================================================
    regal_midlander: { 
        name: 'Regal Midlander', 
        color: '#ffadad', 
        icon: '🧑', 
        description: 'The dominant human culture of the Midlands, known for discipline and ambition.',
        player_relations: {
            archie: "A criminal element to be policed.",
            markop: "Prejudice. 'Beasts belong in the stable'.",
            humpik: "Respected for metalwork, ignored socially.",
            bowser: "The enemy at the gates.",
            remi: "One of us, unless you're poor."
        }
    },
    moonfang_werewolf: { 
        name: 'Werewolf', 
        color: '#ffd6a5', 
        icon: '🐺', 
        description: 'Lycanthropes bound to the lunar cycle and pack hierarchy.',
        player_relations: {
            archie: "Meat.",
            markop: "A rival predator. Respect.",
            humpik: "Smells like cold iron. Avoid.",
            bowser: "Alpha. We submit.",
            remi: "Weak link in the herd."
        }
    },
    elder_vampire: { 
        name: 'Vampire', 
        color: '#e4c1f9', 
        icon: '🧛', 
        description: 'Ancient, powerful undead aristocrats who feed on the living.',
        player_relations: {
            archie: "Cattle.",
            markop: "Interesting vintage.",
            humpik: "Blood tastes like rust. Disgusting.",
            bowser: "A crude brute, but useful.",
            remi: "Fresh blood."
        }
    },
    midlands_orc: { 
        name: 'Orc (Midlands)', 
        color: '#2d6a4f', 
        icon: '👹', 
        description: 'Brutish warriors of the Wilderlands who live for battle.',
        player_relations: {
            archie: "Fight?",
            markop: "Good fight.",
            humpik: "Best fight.",
            bowser: "Big Boss.",
            remi: "Squish."
        }
    },
    rakasha_hunter: { 
        name: 'Rakasha', 
        color: '#f0c69d', 
        icon: '🐅', 
        description: 'Proud, cat-like beastfolk who value honor and nature.',
        player_relations: {
            archie: "No honor.",
            markop: "Hunter recognizes hunter.",
            humpik: "Loud and clumsy.",
            bowser: "A destroyer of worlds.",
            remi: "Cub."
        }
    },
    midlands_goblin: { 
        name: 'Goblin (Scrapper)', 
        color: '#aed581', 
        icon: '👺', 
        description: 'Scrappy scavengers and mechanics of the Ratchet Raiders.',
        player_relations: {
            archie: "Got any scrap?",
            markop: "Too big to rob.",
            humpik: "Buy my wares!",
            bowser: "Scary customer.",
            remi: "Easy target."
        }
    },
    skeleton_warrior: { 
        name: 'Skeleton', 
        color: '#cfd8dc', 
        icon: '💀', 
        description: 'Animated remains serving necromancers or ancient curses.',
        player_relations: {
            archie: "Rattle.",
            markop: "Rattle.",
            humpik: "Smash.",
            bowser: "Obey.",
            remi: "Rattle."
        }
    },
    ghost_spirit: { 
        name: 'Spirit', 
        color: '#b3e5fc', 
        icon: '👻', 
        description: 'Restless souls bound to the mortal plane.',
        player_relations: {
            archie: "Boo.",
            markop: "Haunt.",
            humpik: "Annoy.",
            bowser: "Serve.",
            remi: "Scare."
        }
    },

    // ========================================================================
    // WARHAMMER
    // ========================================================================
    warhammer_human: { name: 'Empire Human', color: '#c81d25', icon: '⚔️', description: 'Hardy humans of the Old World, beset by chaos.', player_relations: { archie: "Heretic!", markop: "Beastman! Kill it!", humpik: "Ally.", bowser: "Daemon!", remi: "Citizen." } },
    skaven: { name: 'Skaven', color: '#70e000', icon: '🐀', description: 'Insidious rat-men who dwell in the Under-Empire.', social_status: "Untrustworthy", player_relations: { archie: "Die-die, man-thing!", markop: "Horse-thing tasty!", humpik: "Beard-thing fear-fear!", bowser: "Big-thing scary!", remi: "Slave-thing!" } },
    warhammer_dwarf: { name: 'Dwarf (Old World)', color: '#0077b6', icon: '🛡️', description: 'Grudge-bearing mountain dwellers and master smiths.', player_relations: { archie: "Untrustworthy manling.", markop: "Abomination.", humpik: "KIN! ROCK AND STONE!", bowser: "Dragon-kin! Slay it!", remi: "Umgak (shoddy)." } },
    warhammer_orc: { name: 'Greenskin', color: '#38b000', icon: '🤮', description: 'Savage orcs living for the WAAAGH!', player_relations: { archie: "Krump 'im!", markop: "Fast food.", humpik: "Stuntie scum.", bowser: "Da Biggest Boss!", remi: "Squish." } },
    warhammer_elf: { name: 'High Elf', color: '#caf0f8', icon: '✨', description: 'Arrogant masters of magic from Ulthuan.', player_relations: { archie: "Primitive.", markop: "Curious mutation.", humpik: "Bearded savage.", bowser: "Monstrous threat.", remi: "Insignificant." } },
    beastman: { name: 'Beastman', color: '#5d4037', icon: '🐐', description: 'Twisted children of Chaos who haunt the deep woods.', player_relations: { archie: "BRAY!", markop: "Brother of Chaos?", humpik: "Hated foe.", bowser: "Strong leader.", remi: "Prey." } },
    chaos_warrior: { name: 'Chaos Warrior', color: '#263238', icon: '🛡️', description: 'Heavily armored humans sworn to the Dark Gods.', player_relations: { archie: "Skull for Khorne.", markop: "Skull for Khorne.", humpik: "Skull for Khorne.", bowser: "A rival champion.", remi: "Skull for Khorne." } },
    lizardman: { name: 'Lizardman', color: '#00bcd4', icon: '🦎', description: 'Cold-blooded guardians of the Great Plan.', player_relations: { archie: "Warmblood intruder.", markop: "Not part of the Plan.", humpik: "Not part of the Plan.", bowser: "Chaos manifestation.", remi: "Not part of the Plan." } },

    // ========================================================================
    // MIDDLE-EARTH
    // ========================================================================
    gondorian: { name: 'Man of Gondor', color: '#e0e0e0', icon: '🏰', description: 'Noble descendants of Numenor guarding the White City.', player_relations: { archie: "Commoner.", markop: "Monster.", humpik: "Ally of old.", bowser: "Troll-king.", remi: "Citizen." } },
    rohirrim: { name: 'Rohirrim', color: '#81c784', icon: '🐎', description: 'Horse-lords of the grassy plains.', player_relations: { archie: "Stranger.", markop: "A HORSE MAN! AWE.", humpik: "Friend.", bowser: "Beast.", remi: "Shieldmaiden?" } },
    middle_earth_elf: { name: 'Elf (Middle-earth)', color: '#ffd700', icon: '🧝', description: 'Immortal beings of starlight, song, and sorrow.', player_relations: { archie: "Young soul.", markop: "Strange creature.", humpik: "Grudging tolerance.", bowser: "Shadow and flame.", remi: "Child." } },
    middle_earth_dwarf: { name: 'Dwarf (Durin\'s Folk)', color: '#a9a9a9', icon: '⛏️', description: 'Miners and smiths of Erebor and the Iron Hills.', player_relations: { archie: "Thief?", markop: "Too tall.", humpik: "COUSIN!", bowser: "Dragon-spawn.", remi: "Soft." } },
    uruk_hai: { name: 'Uruk-hai', color: '#3e2723', icon: '🤚', description: 'A superior breed of Orc created for war.', player_relations: { archie: "Meat.", markop: "Meat.", humpik: "Tough meat.", bowser: "Master?", remi: "Fresh meat." } },
    mordor_orc: { name: 'Orc (Mordor)', color: '#5c4d3c', icon: '👺', description: 'Corrupted servants of the Dark Lord.', player_relations: { archie: "Scum.", markop: "Kill it.", humpik: "Filthy dwarf.", bowser: "Big Boss.", remi: "Slave." } },
    hobbit: { name: 'Hobbit', color: '#8ab17d', icon: '🦶', description: 'Small, comfort-loving folk of the Shire.', player_relations: { archie: "Too tall.", markop: "Too big.", humpik: "Good food.", bowser: "Hiding.", remi: "Tea?" } },
    ent: { name: 'Ent', color: '#33691e', icon: '🌳', description: 'Ancient tree-shepherds of Fangorn Forest.', player_relations: { archie: "Hasty.", markop: "Not an orc.", humpik: "Axe-wielder (bad).", bowser: "Destroyer.", remi: "Little one." } },
    cave_troll: { name: 'Troll', color: '#616161', icon: '🧌', description: 'Huge, dim-witted creatures of stone and darkness.', player_relations: { archie: "Smash.", markop: "Smash.", humpik: "Crunch.", bowser: "Friend?", remi: "Squish." } },

    // ========================================================================
    // KIVOTOS
    // ========================================================================
    kivotos_human: { name: 'Student (Human)', color: '#4a86e8', icon: '👩‍🎓', description: 'Ordinary students wielding extraordinary firepower.', player_relations: { archie: "Sensei?", markop: "Cool cosplay.", humpik: "Short Sensei.", bowser: "Raid Boss!", remi: "Transfer student." } },
    kivotos_angel: { name: 'Student (Angel)', color: '#fff9c4', icon: '😇', description: 'Halo-bearing students, often from Trinity.', player_relations: { archie: "Sinner.", markop: "Majestic.", humpik: "Unrefined.", bowser: "Demon Lord.", remi: "Classmate." } },
    kivotos_demon: { name: 'Student (Demon)', color: '#ef9a9a', icon: '😈', description: 'Horned and tailed students, often from Gehenna.', player_relations: { archie: "Fun.", markop: "Boring.", humpik: "Tough guy.", bowser: "Cool horns.", remi: "Whatever." } },
    kivotos_beastkin: { name: 'Student (Beastkin)', color: '#ffcc80', icon: '🦊', description: 'Students with animal traits like ears or tails.', player_relations: { archie: "Normal.", markop: "Weird ears.", humpik: "Fluffy.", bowser: "Scary.", remi: "Friend." } },
    kivotos_robot: { name: 'Automata', color: '#999999', icon: '🤖', description: 'Robotic citizens and combat units of Kivotos.', player_relations: { archie: "Target.", markop: "Target.", humpik: "Target.", bowser: "Target.", remi: "Target." } },

    // ========================================================================
    // POKEMON REGIONS
    // ========================================================================
    pokemon_human: { name: 'Human (Trainer)', color: '#ff0000', icon: '🧢', description: 'Humans who live, work, and battle alongside Pokémon.', player_relations: { archie: "Trainer?", markop: "Pokemon?", humpik: "Pokemon?", bowser: "Legendary Pokemon!", remi: "Trainer." } },
    normal_pokemon: { name: 'Pokémon (Normal)', color: '#a8a878', icon: '⚪', description: 'Versatile Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    water_pokemon: { name: 'Pokémon (Water)', color: '#6890f0', icon: '💧', description: 'Pokémon adapted to aquatic environments.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    grass_pokemon: { name: 'Pokémon (Grass)', color: '#78c850', icon: '🌿', description: 'Pokémon with an affinity for nature.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    flying_pokemon: { name: 'Pokémon (Flying)', color: '#a890f0', icon: '🕊️', description: 'Pokémon capable of flight.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    bug_pokemon: { name: 'Pokémon (Bug)', color: '#a8b820', icon: '🪲', description: 'Insectoid Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    fire_pokemon: { name: 'Pokémon (Fire)', color: '#f08030', icon: '🔥', description: 'Pokémon of flame.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    electric_pokemon: { name: 'Pokémon (Electric)', color: '#f8d030', icon: '⚡', description: 'Pokémon of electricity.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    rock_pokemon: { name: 'Pokémon (Rock)', color: '#b8a038', icon: '🪨', description: 'Sturdy Pokémon of rock.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    ground_pokemon: { name: 'Pokémon (Ground)', color: '#e0c068', icon: '🏜️', description: 'Pokémon of earth.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    poison_pokemon: { name: 'Pokémon (Poison)', color: '#a040a0', icon: '☠️', description: 'Toxic Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    fighting_pokemon: { name: 'Pokémon (Fighting)', color: '#c03028', icon: '🥊', description: 'Martial arts Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    psychic_pokemon: { name: 'Pokémon (Psychic)', color: '#f85888', icon: '🔮', description: 'Mental power Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    dark_pokemon: { name: 'Pokémon (Dark)', color: '#705848', icon: '🌑', description: 'Cunning Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    steel_pokemon: { name: 'Pokémon (Steel)', color: '#b8b8d0', icon: '🔩', description: 'Metal body Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    fairy_pokemon: { name: 'Pokémon (Fairy)', color: '#ee99ac', icon: '🧚', description: 'Magical Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    ice_pokemon: { name: 'Pokémon (Ice)', color: '#98d8d8', icon: '❄️', description: 'Freezing Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" } },
    
    // ========================================================================
    // THE INTERNET
    // ========================================================================
    netizen: { name: 'Netizen', color: '#00ffff', icon: '🌐', description: 'Digital avatars.', player_relations: { archie: "Troll.", markop: "Meme.", humpik: "User.", bowser: "Admin.", remi: "Newb." } },
    spam_bot: { name: 'Spam Bot', color: '#ffc107', icon: '📧', description: 'Annoying constructs.', player_relations: { archie: "Target.", markop: "Target.", humpik: "Target.", bowser: "Target.", remi: "Target." } },
    living_meme: { name: 'Living Meme', color: '#00e676', icon: '🐸', description: 'Viral entities.', player_relations: { archie: "Lul.", markop: "Lul.", humpik: "Lul.", bowser: "Based.", remi: "Lul." } },
    virus_entity: { name: 'Virus', color: '#d500f9', icon: '🦠', description: 'Malicious code.', player_relations: { archie: "Host.", markop: "Host.", humpik: "Host.", bowser: "Host.", remi: "Host." } },
    moderator_construct: { name: 'Moderator', color: '#304ffe', icon: '🛡️', description: 'Enforcers of TOS.', player_relations: { archie: "Ban.", markop: "Warn.", humpik: "Mute.", bowser: "Ban.", remi: "Warn." } },

    // ========================================================================
    // THE DOUGHNUT HOLE
    // ========================================================================
    void_entity: { name: 'Void Entity', color: '#000000', icon: '🌑', description: 'Beings of emptiness.', player_relations: { archie: "...", markop: "...", humpik: "...", bowser: "...", remi: "..." } },
    cosmic_entity: { name: 'Cosmic Entity', color: '#9d4edd', icon: '🌌', description: 'Beings of starlight.', player_relations: { archie: "Gnat.", markop: "Mote.", humpik: "Dust.", bowser: "Spark.", remi: "Speck." } },
    fractal_being: { name: 'Fractal Being', color: '#6200ea', icon: '💠', description: 'Mathematical lifeforms.', player_relations: { archie: "Chaos.", markop: "Structure.", humpik: "Solid.", bowser: "Force.", remi: "Variable." } },
    time_echo: { name: 'Time Echo', color: '#bdbdbd', icon: '⏳', description: 'Residual images.', player_relations: { archie: "Forgotten.", markop: "Past.", humpik: "Stone.", bowser: "Future.", remi: "Present." } },
    logic_crystal: { name: 'Logic Crystal', color: '#00e5ff', icon: '💎', description: 'Sentient minerals.', player_relations: { archie: "Illogical.", markop: "Logical.", humpik: "Crystalline.", bowser: "Breaker.", remi: "Soft." } },
    dnd_goliath: { name: 'Goliath', color: '#90a4ae', icon: '🏔️', description: 'Mountain-dwelling giants.', player_relations: { archie: "Small.", markop: "Brother.", humpik: "Cousin.", bowser: "Rival.", remi: "Tiny." } },

    // ========================================================================
    // ANIMATOPIA
    // ========================================================================
    rabbit_folk: { name: 'Rabbit', color: '#bdbdbd', icon: '🐰', description: 'Peaceful lagomorphs.', player_relations: { archie: "Fear.", markop: "Fast.", humpik: "Loud.", bowser: "Predator.", remi: "Kind." } },
    sheep_folk: { name: 'Sheep', color: '#f5f5f5', icon: '🐑', description: 'Community herbivores.', player_relations: { archie: "Wary.", markop: "Herd.", humpik: "Shear.", bowser: "Wolf.", remi: "Safe." } },
    fox_folk: { name: 'Fox', color: '#e65100', icon: '🦊', description: 'Cunning canids.', player_relations: { archie: "Trickster.", markop: "Sly.", humpik: "Untrustworthy.", bowser: "Minion.", remi: "Clever." } },
    lion_folk: { name: 'Lion', color: '#fbc02d', icon: '🦁', description: 'Proud felines.', player_relations: { archie: "Arrogant.", markop: "Noble.", humpik: "Strong.", bowser: "Rival.", remi: "Respect." } },
    sloth_folk: { name: 'Sloth', color: '#8d6e63', icon: '🦥', description: 'Slow thinkers.', player_relations: { archie: "Slow.", markop: "Slow.", humpik: "Slow.", bowser: "Slow.", remi: "Slow." } },
    bear_folk: { name: 'Bear', color: '#3e2723', icon: '🐻', description: 'Strong omnivores.', player_relations: { archie: "Big.", markop: "Strong.", humpik: "Wrestle.", bowser: "Fight.", remi: "Hug." } },

    // ========================================================================
    // THE EDGE REGIONS
    // ========================================================================
    null_texture: { name: 'Null Texture', color: '#ff00ff', icon: '🔲', description: 'Missing visual data.', player_relations: { archie: "Error.", markop: "Error.", humpik: "Error.", bowser: "Error.", remi: "Error." } },
    wireframe_husk: { name: 'Wireframe', color: '#00ff00', icon: '🕸️', description: 'Geometry creatures.', player_relations: { archie: "Hollow.", markop: "Structure.", humpik: "Skeleton.", bowser: "Breakable.", remi: "Empty." } },
    
    // ========================================================================
    // CONNECTOPIA
    // ========================================================================
    block_folk: { name: 'Block Folk', color: '#795548', icon: '🟦', description: 'Pixelated humanoids.', player_relations: { archie: "Round.", markop: "Smooth.", humpik: "Short.", bowser: "Boss.", remi: "Player." } },
    creeper_kind: { name: 'Exploder', color: '#43a047', icon: '🟩', description: 'Exploding creatures.', player_relations: { archie: "Ssss.", markop: "Ssss.", humpik: "Ssss.", bowser: "Boom.", remi: "Run." } },
    ender_kind: { name: 'Void Walker', color: '#311b92', icon: '👁️', description: 'Teleporting figures.', player_relations: { archie: "Stare.", markop: "Stare.", humpik: "Stare.", bowser: "Stare.", remi: "Stare." } },

    // ========================================================================
    // EARTH LAND
    // ========================================================================
    earth_land_mage: { name: 'Mage', color: '#f4a261', icon: '🔥', description: 'Magic wielding humans.', player_relations: { archie: "Rival.", markop: "Ally.", humpik: "User.", bowser: "Threat.", remi: "Friend." } },
    exceed: { name: 'Exceed', color: '#90caf9', icon: '😺', description: 'Winged cats.', player_relations: { archie: "Pet.", markop: "Fly.", humpik: "Cat.", bowser: "Snack.", remi: "Cute." } },
    celestial_spirit: { name: 'Celestial Spirit', color: '#ffd700', icon: '🔑', description: 'Summoned beings.', player_relations: { archie: "Contract.", markop: "Star.", humpik: "Ghost.", bowser: "Minion.", remi: "Friend." } },
    vulcan: { name: 'Vulcan', color: '#f44336', icon: '🦍', description: 'Monstrous apes.', player_relations: { archie: "Monster.", markop: "Beast.", humpik: "Fight.", bowser: "Recruit.", remi: "Scary." } },
    dnd_genasi_fire: { name: 'Genasi (Fire)', color: '#ff5722', icon: '🔥', description: 'Fire elementals.', player_relations: { archie: "Hot.", markop: "Warm.", humpik: "Forge.", bowser: "Like.", remi: "Burn." } },

    // ========================================================================
    // FAERUN
    // ========================================================================
    faerun_human: { name: 'Human (Realms)', color: '#cdb4db', icon: '🧑‍🤝‍🧑', description: 'Adaptable humans.', player_relations: { archie: "Human.", markop: "Horse.", humpik: "Dwarf.", bowser: "Monster.", remi: "Kin." } },
    faerun_elf: { name: 'Elf (Realms)', color: '#bde0fe', icon: '🧝‍♀️', description: 'Magical beings.', player_relations: { archie: "Crude.", markop: "Noble.", humpik: "Stubborn.", bowser: "Evil.", remi: "Short." } },
    faerun_dwarf: { name: 'Dwarf (Realms)', color: '#607d8b', icon: '⛏️', description: 'Stout warriors.', player_relations: { archie: "Weak.", markop: "Tall.", humpik: "BROTHER!", bowser: "Enemy.", remi: "Lass." } },
    faerun_halfling: { name: 'Halfling (Realms)', color: '#ffcc80', icon: '🍞', description: 'Lucky folk.', player_relations: { archie: "Big.", markop: "Ride?", humpik: "Ale?", bowser: "Hide.", remi: "Food?" } },
    faerun_gnome: { name: 'Gnome (Realms)', color: '#ba68c8', icon: '⚙️', description: 'Inventive folk.', player_relations: { archie: "Tall.", markop: "Big.", humpik: "Tech.", bowser: "Machine.", remi: "New." } },
    faerun_tiefling: { name: 'Tiefling (Realms)', color: '#ff5252', icon: '😈', description: 'Infernal blood.', player_relations: { archie: "Kin.", markop: "Wary.", humpik: "Horned.", bowser: "Rival.", remi: "Nice." } },
    faerun_dragonborn: { name: 'Dragonborn (Realms)', color: '#d4af37', icon: '🐲', description: 'Draconic warriors.', player_relations: { archie: "Lizard.", markop: "Honor.", humpik: "Strong.", bowser: "Kin.", remi: "Scary." } },
    faerun_drow: { name: 'Drow (Realms)', color: '#212121', icon: '🕷️', description: 'Dark elves.', player_relations: { archie: "Slave.", markop: "Beast.", humpik: "Enemy.", bowser: "Ally?", remi: "Prey." } },
    faerun_genasi: { name: 'Genasi', color: '#00bcd4', icon: '🔥', description: 'Elemental blood.', player_relations: { archie: "Element.", markop: "Nature.", humpik: "Magic.", bowser: "Power.", remi: "Cool." } },
    faerun_aasimar: { name: 'Aasimar', color: '#e0f7fa', icon: '👼', description: 'Celestial blood.', player_relations: { archie: "Bright.", markop: "Holy.", humpik: "Shiny.", bowser: "Hate.", remi: "Angel." } },
    faerun_tortle: { name: 'Tortle', color: '#558b2f', icon: '🐢', description: 'Tortoise folk.', player_relations: { archie: "Slow.", markop: "Slow.", humpik: "Hard.", bowser: "Kin.", remi: "Friend." } },
    faerun_firbolg: { name: 'Firbolg', color: '#a1887f', icon: '🌲', description: 'Forest giants.', player_relations: { archie: "Small.", markop: "Nature.", humpik: "Tall.", bowser: "Destruction.", remi: "Quiet." } },
    faerun_goliath: { name: 'Goliath', color: '#90a4ae', icon: '🏔️', description: 'Mountain folk.', player_relations: { archie: "Weak.", markop: "Strong.", humpik: "Rival.", bowser: "Fight.", remi: "Small." } },

    // ========================================================================
    // L'ECLAIRE ISLE
    // ========================================================================
    dough_glazed: { name: 'Dough Folk (Glazed)', color: '#f4d35e', icon: '🍩', description: 'The ruling class of sweet, shiny original inhabitants.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." } },
    dough_cake: { name: 'Dough Folk (Cake)', color: '#8d6e63', icon: '🍰', description: 'Dense, hardy folk often found in construction.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." } },
    dough_jelly: { name: 'Dough Folk (Jelly)', color: '#e91e63', icon: '🍓', description: 'Volatile and energetic, filled with sweet potential.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." } },
    dough_cruller: { name: 'Dough Folk (Cruller)', color: '#d7ccc8', icon: '🥨', description: 'Twisted, complex thinkers and philosophers.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." } },
    dough_croissant: { name: 'Pastry-Kin (Croissant)', color: '#ffecb3', icon: '🥐', description: 'Flaky aristocrats.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." } },
    frosting_slime: { name: 'Frosting Slime', color: '#f06292', icon: '🧁', description: 'Sugar blobs.', player_relations: { archie: "Eat.", markop: "Sticky.", humpik: "Sweet.", bowser: "Minion.", remi: "Yum." } },
    candy_construct: { name: 'Candy Golem', color: '#e91e63', icon: '🍭', description: 'Hard candy guards.', player_relations: { archie: "Break.", markop: "Smash.", humpik: "Crunch.", bowser: "Soldier.", remi: "Wow." } },

    // ========================================================================
    // TEYVAT (Additional)
    // ========================================================================
    teyvat_human: { name: 'Human (Teyvat)', color: '#ffca3a', icon: '⚖️', description: 'The primary populace of the seven nations.', player_relations: { archie: "Foreigner.", markop: "Creature.", humpik: "Short.", bowser: "Monster.", remi: "Tourist." } },
    hilichurl: { name: 'Hilichurl', color: '#5d4037', icon: '🎭', description: 'Tribal monsters found across the wilderness.', player_relations: { archie: "Enemy.", markop: "Enemy.", humpik: "Enemy.", bowser: "Minion?", remi: "Enemy." } },
    adeptus: { name: 'Adeptus', color: '#00bfa5', icon: '🐉', description: 'Illuminated beasts and demigods of Liyue.', player_relations: { archie: "Mortal.", markop: "Beast.", humpik: "Strong.", bowser: "Rival.", remi: "Mortal." } },
    fontainian: { name: 'Fontainian', color: '#42a5f5', icon: '💧', description: 'Water-born humans.', player_relations: { archie: "Foreigner.", markop: "Creature.", humpik: "Short.", bowser: "Monster.", remi: "Tourist." } },
    melusine: { name: 'Melusine', color: '#f48fb1', icon: '🐌', description: 'Small aquatic beings.', player_relations: { archie: "Cute.", markop: "Small.", humpik: "Strange.", bowser: "Weak.", remi: "Friend." } },
    youkai_inazuma: { name: 'Youkai', color: '#ab47bc', icon: '👺', description: 'Supernatural beings.', player_relations: { archie: "Demon.", markop: "Spirit.", humpik: "Fight.", bowser: "Rival.", remi: "Scary." } },
    abyss_mage: { name: 'Abyss Mage', color: '#6200ea', icon: '🧙‍♂️', description: 'Corrupted beings of the Void.', player_relations: { archie: "Chaos.", markop: "Light.", humpik: "Enemy.", bowser: "Darkness.", remi: "Target." } },
    
    // ========================================================================
    // EQUESTRIA (Additional)
    // ========================================================================
    earth_pony: { name: 'Earth Pony', color: '#8d6e63', icon: '🐴', description: 'Strong, dependable ponies.', player_relations: { archie: "Work.", markop: "Cousin.", humpik: "Strong.", bowser: "Slave.", remi: "Nice." } },
    pegasus: { name: 'Pegasus', color: '#4fc3f7', icon: '🪽', description: 'Winged ponies.', player_relations: { archie: "Fast.", markop: "Fly.", humpik: "Sky.", bowser: "Scout.", remi: "Cool." } },
    unicorn: { name: 'Unicorn', color: '#e1bee7', icon: '🦄', description: 'Magic-wielding ponies.', player_relations: { archie: "Magic.", markop: "Sparkle.", humpik: "Trick.", bowser: "Useful.", remi: "Pretty." } },
    crystal_pony: { name: 'Crystal Pony', color: '#e0f7fa', icon: '💎', description: 'Crystal empire ponies.', player_relations: { archie: "Shiny.", markop: "Noble.", humpik: "Gem.", bowser: "Breakable.", remi: "Pretty." } },
    bat_pony: { name: 'Thestral', color: '#424242', icon: '🦇', description: 'Bat-winged ponies.', player_relations: { archie: "Dark.", markop: "Night.", humpik: "Bat.", bowser: "Minion.", remi: "Cool." } },
    changeling_reformed: { name: 'Changeling (Reformed)', color: '#81c784', icon: '🦟', description: 'Metamorphosing insectoid creatures.', player_relations: { archie: "Bug.", markop: "Strange.", humpik: "Squish.", bowser: "Spy.", remi: "Weird." } },
    kirin: { name: 'Kirin', color: '#ffcc80', icon: '🔥', description: 'Draconic ponies.', player_relations: { archie: "Fire.", markop: "Magic.", humpik: "Dragon.", bowser: "Kin.", remi: "Wow." } },
    griffon: { name: 'Griffon', color: '#ffca28', icon: '🦅', description: 'Eagle-lion hybrids.', player_relations: { archie: "Greedy.", markop: "Rival.", humpik: "Bird.", bowser: "Mercenary.", remi: "Scary." } },
    yak: { name: 'Yak', color: '#5d4037', icon: '🐂', description: 'Powerful bovines.', player_relations: { archie: "Smash.", markop: "Strong.", humpik: "Brother.", bowser: "Fight.", remi: "Big." } },
};

export const REGIONAL_DEMOGRAPHICS = {
    'Mushroom Kingdom Regions': { 
        toad_citizen: 0.60, 
        goomba: 0.15, 
        koopa: 0.15, 
        yoshi: 0.05, 
        shy_guy: 0.05 
    },
    'Islands & Outer Realms': { 
        pianta: 0.40, 
        noki: 0.30, 
        yoshi: 0.20, 
        koopa: 0.10 
    },
    'The Midlands': { 
        regal_midlander: 0.45, 
        dnd_human: 0.15, 
        moonfang_werewolf: 0.10, 
        elder_vampire: 0.05, 
        midlands_orc: 0.05, 
        rakasha_hunter: 0.05, 
        midlands_goblin: 0.05, 
        skeleton_warrior: 0.04, 
        ghost_spirit: 0.03, 
        centaur_human_head: 0.02,
        centaur_horse_head: 0.01 
    },
    'The Fated Place': { 
        warhammer_human: 0.40, 
        skaven: 0.15, 
        warhammer_orc: 0.15, 
        warhammer_dwarf: 0.10, 
        warhammer_elf: 0.05, 
        beastman: 0.05, 
        chaos_warrior: 0.05, 
        lizardman: 0.05 
    },
    'Middle-earth': { 
        gondorian: 0.30, 
        rohirrim: 0.20, 
        middle_earth_elf: 0.10, 
        middle_earth_dwarf: 0.10, 
        hobbit: 0.05, 
        mordor_orc: 0.20, 
        uruk_hai: 0.05 
    },
    'Kivotos': { 
        kivotos_human: 0.50, 
        kivotos_angel: 0.20, 
        kivotos_demon: 0.20, 
        kivotos_beastkin: 0.05, 
        kivotos_robot: 0.05 
    },
    'Pokémon Regions': { 
        pokemon_human: 0.30, 
        normal_pokemon: 0.10, 
        water_pokemon: 0.10, 
        grass_pokemon: 0.10, 
        fire_pokemon: 0.05, 
        electric_pokemon: 0.05, 
        psychic_pokemon: 0.05, 
        fighting_pokemon: 0.05, 
        ghost_pokemon: 0.05, 
        dragon_pokemon: 0.05,
        bug_pokemon: 0.05,
        rock_pokemon: 0.05
    },
    'The Internet': { 
        netizen: 0.50, 
        spam_bot: 0.20, 
        living_meme: 0.15, 
        virus_entity: 0.10, 
        moderator_construct: 0.05 
    },
    'The Doughnut Hole': { 
        void_entity: 0.40, 
        cosmic_entity: 0.20, 
        fractal_being: 0.15, 
        time_echo: 0.15, 
        logic_crystal: 0.10 
    },
    'Animatopia': { 
        rabbit_folk: 0.30, 
        sheep_folk: 0.20, 
        fox_folk: 0.15, 
        lion_folk: 0.10, 
        sloth_folk: 0.10, 
        bear_folk: 0.10, 
        dnd_tabaxi: 0.05 
    },
    'The Edge Regions': { 
        null_texture: 0.40, 
        wireframe_husk: 0.25, 
        glitch_ghost: 0.20, 
        void_entity: 0.15 
    },
    'Connectopia': { 
        block_folk: 0.75, 
        creeper_kind: 0.15, 
        ender_kind: 0.10 
    },
    'Earth Land': { 
        earth_land_mage: 0.60, 
        exceed: 0.20, 
        celestial_spirit: 0.10, 
        vulcan: 0.05, 
        dnd_genasi_fire: 0.05 
    },
    'Faerûn': { 
        faerun_human: 0.30, 
        faerun_elf: 0.15, 
        faerun_dwarf: 0.15, 
        faerun_halfling: 0.10, 
        faerun_gnome: 0.05, 
        faerun_tiefling: 0.05, 
        faerun_dragonborn: 0.05, 
        faerun_drow: 0.05, 
        faerun_genasi: 0.05, 
        faerun_aasimar: 0.05 
    },
    'L\'Eclaire Isle': { 
        dough_glazed: 0.30, 
        dough_cake: 0.20, 
        dough_jelly: 0.15, 
        dough_cruller: 0.15, 
        dough_croissant: 0.10, 
        frosting_slime: 0.05, 
        candy_construct: 0.05 
    },
    'Teyvat': { 
        teyvat_human: 0.60, 
        hilichurl: 0.15, 
        fontainian: 0.10, 
        melusine: 0.05, 
        youkai_inazuma: 0.05, 
        adeptus: 0.02, 
        abyss_mage: 0.03 
    },
    'Equestria': { 
        earth_pony: 0.30, 
        pegasus: 0.25, 
        unicorn: 0.20, 
        crystal_pony: 0.10, 
        bat_pony: 0.05, 
        changeling_reformed: 0.05, 
        kirin: 0.02, 
        griffon: 0.02, 
        yak: 0.01 
    },
};
