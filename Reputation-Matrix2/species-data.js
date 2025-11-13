
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
            remi: "Uneasy. You look human, but the halo marks you as something else. Celestial?"
        },
        religion_breakdown: {
            silver_flame_faith: 0.40,
            star_spirits: 0.20,
            cog_gospel: 0.15,
            unaligned: 0.25
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
            remi: "Curiosity. A short-lived human with a permanent magical construct? Fascinatingly efficient."
        },
        religion_breakdown: {
            arceus_mythos: 0.50,
            star_spirits: 0.30,
            unaligned: 0.20
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
        },
        religion_breakdown: {
            lunar_cycle: 0.40,
            star_spirits: 0.40,
            unaligned: 0.20
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
        },
        religion_breakdown: {
            void_nihilism: 0.60,
            sanguine_path: 0.30,
            unaligned: 0.10
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
        },
        religion_breakdown: {
            cog_gospel: 0.50,
            star_spirits: 0.20,
            unaligned: 0.30
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
        },
        religion_breakdown: {
            cog_gospel: 0.70,
            silver_flame_faith: 0.10,
            unaligned: 0.20
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
        },
        religion_breakdown: {
            great_waaagh: 0.50,
            jester_cult: 0.30,
            cog_gospel: 0.10,
            unaligned: 0.10
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
        },
        religion_breakdown: {
            jester_cult: 0.40,
            silver_flame_faith: 0.10, // Converts seeking redemption
            void_nihilism: 0.20,
            unaligned: 0.30
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
        },
        religion_breakdown: {
            great_waaagh: 0.90,
            unaligned: 0.10
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
        },
        religion_breakdown: {
            arceus_mythos: 0.60,
            silver_flame_faith: 0.30,
            unaligned: 0.10
        }
    },
    
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
        },
        religion_breakdown: {
            lunar_cycle: 0.50,
            star_spirits: 0.30,
            unaligned: 0.20
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
        },
        religion_breakdown: {
            void_nihilism: 0.80, // They have seen the void
            unaligned: 0.20
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
        },
        religion_breakdown: {
            star_spirits: 0.85,
            jester_cult: 0.05, // Toad Gang members
            unaligned: 0.10
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
        },
        religion_breakdown: {
            great_waaagh: 0.40, // Loyalty to Bowser
            cog_gospel: 0.20,
            unaligned: 0.40
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
        },
        religion_breakdown: {
            great_waaagh: 0.70,
            unaligned: 0.30
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
        },
        religion_breakdown: {
            star_spirits: 0.60,
            lunar_cycle: 0.30, // Nature connection
            unaligned: 0.10
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
        },
        religion_breakdown: {
            star_spirits: 0.50,
            lunar_cycle: 0.30,
            unaligned: 0.20
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
        },
        religion_breakdown: {
            star_spirits: 0.40,
            unaligned: 0.60
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
        },
        religion_breakdown: {
            void_nihilism: 0.50,
            jester_cult: 0.30,
            unaligned: 0.20
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
        },
        religion_breakdown: {
            great_waaagh: 0.80,
            jester_cult: 0.20
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
        },
        religion_breakdown: {
            unaligned: 1.0
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
            humpik: "Respected for trade and forge-work, ignored socially.",
            bowser: "The enemy at the gates.",
            remi: "Foreigner. Your strange attire and halo mark you as an outsider."
        },
        religion_breakdown: {
            silver_flame_faith: 0.60,
            cog_gospel: 0.20,
            star_spirits: 0.10,
            unaligned: 0.10
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
        },
        religion_breakdown: {
            lunar_cycle: 0.95,
            unaligned: 0.05
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
        },
        religion_breakdown: {
            sanguine_path: 0.90,
            void_nihilism: 0.10
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
        },
        religion_breakdown: {
            great_waaagh: 0.85,
            lunar_cycle: 0.10,
            unaligned: 0.05
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
        },
        religion_breakdown: {
            lunar_cycle: 0.60,
            star_spirits: 0.20,
            arceus_mythos: 0.10,
            unaligned: 0.10
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
        },
        religion_breakdown: {
            cog_gospel: 0.40,
            great_waaagh: 0.30,
            jester_cult: 0.20,
            unaligned: 0.10
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
        },
        religion_breakdown: {
            sanguine_path: 0.80,
            void_nihilism: 0.20
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
        },
        religion_breakdown: {
            void_nihilism: 0.50,
            sanguine_path: 0.30,
            unaligned: 0.20
        }
    },

    // ========================================================================
    // WARHAMMER
    // ========================================================================
    warhammer_human: { name: 'Empire Human', color: '#c81d25', icon: '⚔️', description: 'Hardy humans of the Old World, beset by chaos.', player_relations: { archie: "Heretic!", markop: "Beastman! Kill it!", humpik: "Ally.", bowser: "Daemon!", remi: "Suspicious. Is that halo a sign of Sigmar or Chaos?" }, religion_breakdown: { silver_flame_faith: 0.70, cog_gospel: 0.20, unaligned: 0.10 } },
    skaven: { name: 'Skaven', color: '#70e000', icon: '🐀', description: 'Insidious rat-men who dwell in the Under-Empire.', social_status: "Untrustworthy", player_relations: { archie: "Die-die, man-thing!", markop: "Horse-thing tasty!", humpik: "Beard-thing fear-fear!", bowser: "Big-thing scary!", remi: "Slave-thing!" }, religion_breakdown: { void_nihilism: 0.60, cog_gospel: 0.30, unaligned: 0.10 } },
    warhammer_dwarf: { name: 'Dwarf (Old World)', color: '#0077b6', icon: '🛡️', description: 'Grudge-bearing mountain dwellers and master smiths.', player_relations: { archie: "Untrustworthy manling.", markop: "Abomination.", humpik: "KIN! ROCK AND STONE!", bowser: "Dragon-kin! Slay it!", remi: "Umgak (shoddy)." }, religion_breakdown: { cog_gospel: 0.80, silver_flame_faith: 0.10, unaligned: 0.10 } },
    warhammer_orc: { name: 'Greenskin', color: '#38b000', icon: '🤮', description: 'Savage orcs living for the WAAAGH!', player_relations: { archie: "Krump 'im!", markop: "Fast food.", humpik: "Stuntie scum.", bowser: "Da Biggest Boss!", remi: "Squish." }, religion_breakdown: { great_waaagh: 1.0 } },
    warhammer_elf: { name: 'High Elf', color: '#caf0f8', icon: '✨', description: 'Arrogant masters of magic from Ulthuan.', player_relations: { archie: "Primitive.", markop: "Curious mutation.", humpik: "Bearded savage.", bowser: "Monstrous threat.", remi: "Insignificant." }, religion_breakdown: { arceus_mythos: 0.60, star_spirits: 0.30, unaligned: 0.10 } },
    beastman: { name: 'Beastman', color: '#5d4037', icon: '🐐', description: 'Twisted children of Chaos who haunt the deep woods.', player_relations: { archie: "BRAY!", markop: "Brother of Chaos?", humpik: "Hated foe.", bowser: "Strong leader.", remi: "Prey." }, religion_breakdown: { lunar_cycle: 0.50, great_waaagh: 0.30, void_nihilism: 0.20 } },
    chaos_warrior: { name: 'Chaos Warrior', color: '#263238', icon: '🛡️', description: 'Heavily armored humans sworn to the Dark Gods.', player_relations: { archie: "Skull for Khorne.", markop: "Skull for Khorne.", humpik: "Skull for Khorne.", bowser: "A rival champion.", remi: "Skull for Khorne." }, religion_breakdown: { void_nihilism: 0.80, great_waaagh: 0.20 } },
    lizardman: { name: 'Lizardman', color: '#00bcd4', icon: '🦎', description: 'Cold-blooded guardians of the Great Plan.', player_relations: { archie: "Warmblood intruder.", markop: "Not part of the Plan.", humpik: "Not part of the Plan.", bowser: "Chaos manifestation.", remi: "Not part of the Plan." }, religion_breakdown: { arceus_mythos: 0.90, unaligned: 0.10 } },

    // ========================================================================
    // MIDDLE-EARTH
    // ========================================================================
    gondorian: { name: 'Man of Gondor', color: '#e0e0e0', icon: '🏰', description: 'Noble descendants of Numenor guarding the White City.', player_relations: { archie: "Commoner.", markop: "Monster.", humpik: "Ally of old.", bowser: "Troll-king.", remi: "Stranger from afar." }, religion_breakdown: { star_spirits: 0.50, silver_flame_faith: 0.40, unaligned: 0.10 } },
    rohirrim: { name: 'Rohirrim', color: '#81c784', icon: '🐎', description: 'Horse-lords of the grassy plains.', player_relations: { archie: "Stranger.", markop: "A HORSE MAN! AWE.", humpik: "Friend.", bowser: "Beast.", remi: "Shieldmaiden?" }, religion_breakdown: { lunar_cycle: 0.40, star_spirits: 0.40, unaligned: 0.20 } },
    middle_earth_elf: { name: 'Elf (Middle-earth)', color: '#ffd700', icon: '🧝', description: 'Immortal beings of starlight, song, and sorrow.', player_relations: { archie: "Young soul.", markop: "Strange creature.", humpik: "Grudging tolerance.", bowser: "Shadow and flame.", remi: "Child." }, religion_breakdown: { star_spirits: 0.90, unaligned: 0.10 } },
    middle_earth_dwarf: { name: 'Dwarf (Durin\'s Folk)', color: '#a9a9a9', icon: '⛏️', description: 'Miners and smiths of Erebor and the Iron Hills.', player_relations: { archie: "Thief?", markop: "Too tall.", humpik: "COUSIN!", bowser: "Dragon-spawn.", remi: "Soft." }, religion_breakdown: { cog_gospel: 0.85, unaligned: 0.15 } },
    uruk_hai: { name: 'Uruk-hai', color: '#3e2723', icon: '🤚', description: 'A superior breed of Orc created for war.', player_relations: { archie: "Meat.", markop: "Meat.", humpik: "Tough meat.", bowser: "Master?", remi: "Fresh meat." }, religion_breakdown: { cog_gospel: 0.60, great_waaagh: 0.40 } },
    mordor_orc: { name: 'Orc (Mordor)', color: '#5c4d3c', icon: '👺', description: 'Corrupted servants of the Dark Lord.', player_relations: { archie: "Scum.", markop: "Kill it.", humpik: "Filthy dwarf.", bowser: "Big Boss.", remi: "Slave." }, religion_breakdown: { void_nihilism: 0.70, great_waaagh: 0.30 } },
    hobbit: { name: 'Hobbit', color: '#8ab17d', icon: '🦶', description: 'Small, comfort-loving folk of the Shire.', player_relations: { archie: "Too tall.", markop: "Too big.", humpik: "Good food.", bowser: "Hiding.", remi: "Tea?" }, religion_breakdown: { star_spirits: 0.30, unaligned: 0.70 } },
    ent: { name: 'Ent', color: '#33691e', icon: '🌳', description: 'Ancient tree-shepherds of Fangorn Forest.', player_relations: { archie: "Hasty.", markop: "Not an orc.", humpik: "Axe-wielder (bad).", bowser: "Destroyer.", remi: "Little one." }, religion_breakdown: { lunar_cycle: 0.90, unaligned: 0.10 } },
    cave_troll: { name: 'Troll', color: '#616161', icon: '🧌', description: 'Huge, dim-witted creatures of stone and darkness.', player_relations: { archie: "Smash.", markop: "Smash.", humpik: "Crunch.", bowser: "Friend?", remi: "Squish." }, religion_breakdown: { great_waaagh: 0.50, unaligned: 0.50 } },

    // ========================================================================
    // KIVOTOS
    // ========================================================================
    kivotos_human: { name: 'Student (Human)', color: '#4a86e8', icon: '👩‍🎓', description: 'Ordinary students wielding extraordinary firepower.', player_relations: { archie: "Sensei?", markop: "Cool cosplay.", humpik: "Short Sensei.", bowser: "Raid Boss!", remi: "Transfer student." }, religion_breakdown: { digital_ascension: 0.40, star_spirits: 0.20, jester_cult: 0.10, unaligned: 0.30 } },
    kivotos_angel: { name: 'Student (Angel)', color: '#fff9c4', icon: '😇', description: 'Halo-bearing students, often from Trinity.', player_relations: { archie: "Sinner.", markop: "Majestic.", humpik: "Unrefined.", bowser: "Demon Lord.", remi: "Classmate." }, religion_breakdown: { silver_flame_faith: 0.50, arceus_mythos: 0.30, unaligned: 0.20 } },
    kivotos_demon: { name: 'Student (Demon)', color: '#ef9a9a', icon: '😈', description: 'Horned and tailed students, often from Gehenna.', player_relations: { archie: "Fun.", markop: "Boring.", humpik: "Tough guy.", bowser: "Cool horns.", remi: "Whatever." }, religion_breakdown: { jester_cult: 0.60, great_waaagh: 0.20, unaligned: 0.20 } },
    kivotos_beastkin: { name: 'Student (Beastkin)', color: '#ffcc80', icon: '🦊', description: 'Students with animal traits like ears or tails.', player_relations: { archie: "Normal.", markop: "Weird ears.", humpik: "Fluffy.", bowser: "Scary.", remi: "Friend." }, religion_breakdown: { lunar_cycle: 0.40, digital_ascension: 0.30, unaligned: 0.30 } },
    kivotos_robot: { name: 'Automata', color: '#999999', icon: '🤖', description: 'Robotic citizens and combat units of Kivotos.', player_relations: { archie: "Target.", markop: "Target.", humpik: "Target.", bowser: "Target.", remi: "Target." }, religion_breakdown: { digital_ascension: 0.80, cog_gospel: 0.20 } },

    // ========================================================================
    // POKEMON REGIONS
    // ========================================================================
    pokemon_human: { name: 'Human (Trainer)', color: '#ff0000', icon: '🧢', description: 'Humans who live, work, and battle alongside Pokémon.', player_relations: { archie: "Trainer?", markop: "Pokemon?", humpik: "Pokemon?", bowser: "Legendary Pokemon!", remi: "Student? You look like a trainer, but where are your Pokémon?" }, religion_breakdown: { arceus_mythos: 0.80, star_spirits: 0.10, unaligned: 0.10 } },
    normal_pokemon: { name: 'Pokémon (Normal)', color: '#a8a878', icon: '⚪', description: 'Versatile Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    water_pokemon: { name: 'Pokémon (Water)', color: '#6890f0', icon: '💧', description: 'Pokémon adapted to aquatic environments.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    grass_pokemon: { name: 'Pokémon (Grass)', color: '#78c850', icon: '🌿', description: 'Pokémon with an affinity for nature.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    flying_pokemon: { name: 'Pokémon (Flying)', color: '#a890f0', icon: '🕊️', description: 'Pokémon capable of flight.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    bug_pokemon: { name: 'Pokémon (Bug)', color: '#a8b820', icon: '🪲', description: 'Insectoid Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    fire_pokemon: { name: 'Pokémon (Fire)', color: '#f08030', icon: '🔥', description: 'Pokémon of flame.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    electric_pokemon: { name: 'Pokémon (Electric)', color: '#f8d030', icon: '⚡', description: 'Pokémon of electricity.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    rock_pokemon: { name: 'Pokémon (Rock)', color: '#b8a038', icon: '🪨', description: 'Sturdy Pokémon of rock.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    ground_pokemon: { name: 'Pokémon (Ground)', color: '#e0c068', icon: '🏜️', description: 'Pokémon of earth.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    poison_pokemon: { name: 'Pokémon (Poison)', color: '#a040a0', icon: '☠️', description: 'Toxic Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    fighting_pokemon: { name: 'Pokémon (Fighting)', color: '#c03028', icon: '🥊', description: 'Martial arts Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    psychic_pokemon: { name: 'Pokémon (Psychic)', color: '#f85888', icon: '🔮', description: 'Mental power Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    dark_pokemon: { name: 'Pokémon (Dark)', color: '#705848', icon: '🌑', description: 'Cunning Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    steel_pokemon: { name: 'Pokémon (Steel)', color: '#b8b8d0', icon: '🔩', description: 'Metal body Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    fairy_pokemon: { name: 'Pokémon (Fairy)', color: '#ee99ac', icon: '🧚', description: 'Magical Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    ice_pokemon: { name: 'Pokémon (Ice)', color: '#98d8d8', icon: '❄️', description: 'Freezing Pokémon.', player_relations: { archie: "?", markop: "?", humpik: "?", bowser: "?", remi: "?" }, religion_breakdown: { arceus_mythos: 1.0 } },
    
    // ========================================================================
    // THE INTERNET
    // ========================================================================
    netizen: { name: 'Netizen', color: '#00ffff', icon: '🌐', description: 'Digital avatars.', player_relations: { archie: "Troll.", markop: "Meme.", humpik: "User.", bowser: "Admin.", remi: "Newb." }, religion_breakdown: { digital_ascension: 0.80, jester_cult: 0.10, unaligned: 0.10 } },
    spam_bot: { name: 'Spam Bot', color: '#ffc107', icon: '📧', description: 'Annoying constructs.', player_relations: { archie: "Target.", markop: "Target.", humpik: "Target.", bowser: "Target.", remi: "Target." }, religion_breakdown: { digital_ascension: 1.0 } },
    living_meme: { name: 'Living Meme', color: '#00e676', icon: '🐸', description: 'Viral entities.', player_relations: { archie: "Lul.", markop: "Lul.", humpik: "Lul.", bowser: "Based.", remi: "Lul." }, religion_breakdown: { jester_cult: 0.90, void_nihilism: 0.10 } },
    virus_entity: { name: 'Virus', color: '#d500f9', icon: '🦠', description: 'Malicious code.', player_relations: { archie: "Host.", markop: "Host.", humpik: "Host.", bowser: "Host.", remi: "Host." }, religion_breakdown: { void_nihilism: 0.70, jester_cult: 0.30 } },
    moderator_construct: { name: 'Moderator', color: '#304ffe', icon: '🛡️', description: 'Enforcers of TOS.', player_relations: { archie: "Ban.", markop: "Warn.", humpik: "Mute.", bowser: "Ban.", remi: "Warn." }, religion_breakdown: { digital_ascension: 1.0 } },

    // ========================================================================
    // THE DOUGHNUT HOLE
    // ========================================================================
    void_entity: { name: 'Void Entity', color: '#000000', icon: '🌑', description: 'Beings of emptiness.', player_relations: { archie: "...", markop: "...", humpik: "...", bowser: "...", remi: "..." }, religion_breakdown: { void_nihilism: 1.0 } },
    cosmic_entity: { name: 'Cosmic Entity', color: '#9d4edd', icon: '🌌', description: 'Beings of starlight.', player_relations: { archie: "Gnat.", markop: "Mote.", humpik: "Dust.", bowser: "Spark.", remi: "Speck." }, religion_breakdown: { star_spirits: 0.80, void_nihilism: 0.20 } },
    fractal_being: { name: 'Fractal Being', color: '#6200ea', icon: '💠', description: 'Mathematical lifeforms.', player_relations: { archie: "Chaos.", markop: "Structure.", humpik: "Solid.", bowser: "Force.", remi: "Variable." }, religion_breakdown: { cog_gospel: 0.90, digital_ascension: 0.10 } },
    time_echo: { name: 'Time Echo', color: '#bdbdbd', icon: '⏳', description: 'Residual images.', player_relations: { archie: "Forgotten.", markop: "Past.", humpik: "Stone.", bowser: "Future.", remi: "Present." }, religion_breakdown: { void_nihilism: 1.0 } },
    logic_crystal: { name: 'Logic Crystal', color: '#00e5ff', icon: '💎', description: 'Sentient minerals.', player_relations: { archie: "Illogical.", markop: "Logical.", humpik: "Crystalline.", bowser: "Breaker.", remi: "Soft." }, religion_breakdown: { cog_gospel: 1.0 } },
    dnd_goliath: { name: 'Goliath', color: '#90a4ae', icon: '🏔️', description: 'Mountain-dwelling giants.', player_relations: { archie: "Small.", markop: "Brother.", humpik: "Cousin.", bowser: "Rival.", remi: "Tiny." }, religion_breakdown: { lunar_cycle: 0.50, cog_gospel: 0.20, unaligned: 0.30 } },

    // ========================================================================
    // ANIMATOPIA
    // ========================================================================
    rabbit_folk: { name: 'Rabbit', color: '#bdbdbd', icon: '🐰', description: 'Peaceful lagomorphs.', player_relations: { archie: "Fear.", markop: "Fast.", humpik: "Loud.", bowser: "Predator.", remi: "Kind." }, religion_breakdown: { star_spirits: 0.60, unaligned: 0.40 } },
    sheep_folk: { name: 'Sheep', color: '#f5f5f5', icon: '🐑', description: 'Community herbivores.', player_relations: { archie: "Wary.", markop: "Herd.", humpik: "Shear.", bowser: "Wolf.", remi: "Safe." }, religion_breakdown: { star_spirits: 0.70, unaligned: 0.30 } },
    fox_folk: { name: 'Fox', color: '#e65100', icon: '🦊', description: 'Cunning canids.', player_relations: { archie: "Trickster.", markop: "Sly.", humpik: "Untrustworthy.", bowser: "Minion.", remi: "Clever." }, religion_breakdown: { jester_cult: 0.40, unaligned: 0.60 } },
    lion_folk: { name: 'Lion', color: '#fbc02d', icon: '🦁', description: 'Proud felines.', player_relations: { archie: "Arrogant.", markop: "Noble.", humpik: "Strong.", bowser: "Rival.", remi: "Respect." }, religion_breakdown: { lunar_cycle: 0.60, unaligned: 0.40 } },
    sloth_folk: { name: 'Sloth', color: '#8d6e63', icon: '🦥', description: 'Slow thinkers.', player_relations: { archie: "Slow.", markop: "Slow.", humpik: "Slow.", bowser: "Slow.", remi: "Slow." }, religion_breakdown: { unaligned: 1.0 } },
    bear_folk: { name: 'Bear', color: '#3e2723', icon: '🐻', description: 'Strong omnivores.', player_relations: { archie: "Big.", markop: "Strong.", humpik: "Wrestle.", bowser: "Fight.", remi: "Hug." }, religion_breakdown: { lunar_cycle: 0.70, great_waaagh: 0.10, unaligned: 0.20 } },

    // ========================================================================
    // THE EDGE REGIONS
    // ========================================================================
    null_texture: { name: 'Null Texture', color: '#ff00ff', icon: '🔲', description: 'Missing visual data.', player_relations: { archie: "Error.", markop: "Error.", humpik: "Error.", bowser: "Error.", remi: "Error." }, religion_breakdown: { void_nihilism: 1.0 } },
    wireframe_husk: { name: 'Wireframe', color: '#00ff00', icon: '🕸️', description: 'Geometry creatures.', player_relations: { archie: "Hollow.", markop: "Structure.", humpik: "Skeleton.", bowser: "Breakable.", remi: "Empty." }, religion_breakdown: { digital_ascension: 1.0 } },
    
    // ========================================================================
    // CONNECTOPIA
    // ========================================================================
    block_folk: { name: 'Block Folk', color: '#795548', icon: '🟦', description: 'Pixelated humanoids.', player_relations: { archie: "Round.", markop: "Smooth.", humpik: "Short.", bowser: "Boss.", remi: "Player." }, religion_breakdown: { cog_gospel: 0.50, unaligned: 0.50 } },
    creeper_kind: { name: 'Exploder', color: '#43a047', icon: '🟩', description: 'Exploding creatures.', player_relations: { archie: "Ssss.", markop: "Ssss.", humpik: "Ssss.", bowser: "Boom.", remi: "Run." }, religion_breakdown: { jester_cult: 0.80, void_nihilism: 0.20 } },
    ender_kind: { name: 'Void Walker', color: '#311b92', icon: '👁️', description: 'Teleporting figures.', player_relations: { archie: "Stare.", markop: "Stare.", humpik: "Stare.", bowser: "Stare.", remi: "Stare." }, religion_breakdown: { void_nihilism: 0.90, unaligned: 0.10 } },

    // ========================================================================
    // EARTH LAND
    // ========================================================================
    earth_land_mage: { name: 'Mage', color: '#f4a261', icon: '🔥', description: 'Magic wielding humans.', player_relations: { archie: "Rival.", markop: "Ally.", humpik: "User.", bowser: "Threat.", remi: "Friend." }, religion_breakdown: { star_spirits: 0.40, lunar_cycle: 0.20, jester_cult: 0.10, unaligned: 0.30 } },
    exceed: { name: 'Exceed', color: '#90caf9', icon: '😺', description: 'Winged cats.', player_relations: { archie: "Pet.", markop: "Fly.", humpik: "Cat.", bowser: "Snack.", remi: "Cute." }, religion_breakdown: { star_spirits: 0.80, unaligned: 0.20 } },
    celestial_spirit: { name: 'Celestial Spirit', color: '#ffd700', icon: '🔑', description: 'Summoned beings.', player_relations: { archie: "Contract.", markop: "Star.", humpik: "Ghost.", bowser: "Minion.", remi: "Friend." }, religion_breakdown: { star_spirits: 1.0 } },
    vulcan: { name: 'Vulcan', color: '#f44336', icon: '🦍', description: 'Monstrous apes.', player_relations: { archie: "Monster.", markop: "Beast.", humpik: "Fight.", bowser: "Recruit.", remi: "Scary." }, religion_breakdown: { great_waaagh: 0.70, unaligned: 0.30 } },
    dnd_genasi_fire: { name: 'Genasi (Fire)', color: '#ff5722', icon: '🔥', description: 'Fire elementals.', player_relations: { archie: "Hot.", markop: "Warm.", humpik: "Forge.", bowser: "Like.", remi: "Burn." }, religion_breakdown: { lunar_cycle: 0.40, cog_gospel: 0.20, unaligned: 0.40 } },

    // ========================================================================
    // FAERUN
    // ========================================================================
    faerun_human: { name: 'Human (Realms)', color: '#cdb4db', icon: '🧑‍🤝‍🧑', description: 'Adaptable humans.', player_relations: { archie: "Human.", markop: "Horse.", humpik: "Dwarf.", bowser: "Monster.", remi: "Planar Traveler. You are human-shaped, but not of this world." }, religion_breakdown: { silver_flame_faith: 0.60, star_spirits: 0.20, unaligned: 0.20 } },
    faerun_elf: { name: 'Elf (Realms)', color: '#bde0fe', icon: '🧝‍♀️', description: 'Magical beings.', player_relations: { archie: "Crude.", markop: "Noble.", humpik: "Stubborn.", bowser: "Evil.", remi: "Short." }, religion_breakdown: { star_spirits: 0.70, lunar_cycle: 0.20, unaligned: 0.10 } },
    faerun_dwarf: { name: 'Dwarf (Realms)', color: '#607d8b', icon: '⛏️', description: 'Stout warriors.', player_relations: { archie: "Weak.", markop: "Tall.", humpik: "BROTHER!", bowser: "Enemy.", remi: "Lass." }, religion_breakdown: { cog_gospel: 0.80, silver_flame_faith: 0.10, unaligned: 0.10 } },
    faerun_halfling: { name: 'Halfling (Realms)', color: '#ffcc80', icon: '🍞', description: 'Lucky folk.', player_relations: { archie: "Big.", markop: "Ride?", humpik: "Ale?", bowser: "Hide.", remi: "Food?" }, religion_breakdown: { star_spirits: 0.60, unaligned: 0.40 } },
    faerun_gnome: { name: 'Gnome (Realms)', color: '#ba68c8', icon: '⚙️', description: 'Inventive folk.', player_relations: { archie: "Tall.", markop: "Big.", humpik: "Tech.", bowser: "Machine.", remi: "New." }, religion_breakdown: { cog_gospel: 0.50, jester_cult: 0.30, unaligned: 0.20 } },
    faerun_tiefling: { name: 'Tiefling (Realms)', color: '#ff5252', icon: '😈', description: 'Infernal blood.', player_relations: { archie: "Kin.", markop: "Wary.", humpik: "Horned.", bowser: "Rival.", remi: "Nice." }, religion_breakdown: { void_nihilism: 0.40, jester_cult: 0.30, unaligned: 0.30 } },
    faerun_dragonborn: { name: 'Dragonborn (Realms)', color: '#d4af37', icon: '🐲', description: 'Draconic warriors.', player_relations: { archie: "Lizard.", markop: "Honor.", humpik: "Strong.", bowser: "Kin.", remi: "Scary." }, religion_breakdown: { arceus_mythos: 0.50, silver_flame_faith: 0.30, unaligned: 0.20 } },
    faerun_drow: { name: 'Drow (Realms)', color: '#212121', icon: '🕷️', description: 'Dark elves.', player_relations: { archie: "Slave.", markop: "Beast.", humpik: "Enemy.", bowser: "Ally?", remi: "Prey." }, religion_breakdown: { sanguine_path: 0.50, void_nihilism: 0.40, unaligned: 0.10 } },
    faerun_genasi: { name: 'Genasi', color: '#00bcd4', icon: '🔥', description: 'Elemental blood.', player_relations: { archie: "Element.", markop: "Nature.", humpik: "Magic.", bowser: "Power.", remi: "Cool." }, religion_breakdown: { lunar_cycle: 0.40, star_spirits: 0.30, unaligned: 0.30 } },
    faerun_aasimar: { name: 'Aasimar', color: '#e0f7fa', icon: '👼', description: 'Celestial blood.', player_relations: { archie: "Bright.", markop: "Holy.", humpik: "Shiny.", bowser: "Hate.", remi: "Angel." }, religion_breakdown: { silver_flame_faith: 0.80, star_spirits: 0.20 } },
    faerun_tortle: { name: 'Tortle', color: '#558b2f', icon: '🐢', description: 'Tortoise folk.', player_relations: { archie: "Slow.", markop: "Slow.", humpik: "Hard.", bowser: "Kin.", remi: "Friend." }, religion_breakdown: { star_spirits: 0.50, unaligned: 0.50 } },
    faerun_firbolg: { name: 'Firbolg', color: '#a1887f', icon: '🌲', description: 'Forest giants.', player_relations: { archie: "Small.", markop: "Nature.", humpik: "Tall.", bowser: "Destruction.", remi: "Quiet." }, religion_breakdown: { lunar_cycle: 0.70, unaligned: 0.30 } },
    faerun_goliath: { name: 'Goliath', color: '#90a4ae', icon: '🏔️', description: 'Mountain folk.', player_relations: { archie: "Weak.", markop: "Strong.", humpik: "Rival.", bowser: "Fight.", remi: "Small." }, religion_breakdown: { great_waaagh: 0.40, lunar_cycle: 0.30, unaligned: 0.30 } },

    // ========================================================================
    // L'ECLAIRE ISLE
    // ========================================================================
    dough_glazed: { name: 'Dough Folk (Glazed)', color: '#f4d35e', icon: '🍩', description: 'The ruling class of sweet, shiny original inhabitants.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." }, religion_breakdown: { jester_cult: 0.50, star_spirits: 0.20, unaligned: 0.30 } },
    dough_cake: { name: 'Dough Folk (Cake)', color: '#8d6e63', icon: '🍰', description: 'Dense, hardy folk often found in construction.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." }, religion_breakdown: { cog_gospel: 0.40, jester_cult: 0.30, unaligned: 0.30 } },
    dough_jelly: { name: 'Dough Folk (Jelly)', color: '#e91e63', icon: '🍓', description: 'Volatile and energetic, filled with sweet potential.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." }, religion_breakdown: { jester_cult: 0.60, unaligned: 0.40 } },
    dough_cruller: { name: 'Dough Folk (Cruller)', color: '#d7ccc8', icon: '🥨', description: 'Twisted, complex thinkers and philosophers.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." }, religion_breakdown: { star_spirits: 0.40, void_nihilism: 0.20, unaligned: 0.40 } },
    dough_croissant: { name: 'Pastry-Kin (Croissant)', color: '#ffecb3', icon: '🥐', description: 'Flaky aristocrats.', player_relations: { archie: "Peasant.", markop: "Animal.", humpik: "Dirty.", bowser: "Brute.", remi: "Commoner." }, religion_breakdown: { star_spirits: 0.50, jester_cult: 0.20, unaligned: 0.30 } },
    frosting_slime: { name: 'Frosting Slime', color: '#f06292', icon: '🧁', description: 'Sugar blobs.', player_relations: { archie: "Eat.", markop: "Sticky.", humpik: "Sweet.", bowser: "Minion.", remi: "Yum." }, religion_breakdown: { jester_cult: 0.80, unaligned: 0.20 } },
    candy_construct: { name: 'Candy Golem', color: '#e91e63', icon: '🍭', description: 'Hard candy guards.', player_relations: { archie: "Break.", markop: "Smash.", humpik: "Crunch.", bowser: "Soldier.", remi: "Wow." }, religion_breakdown: { cog_gospel: 0.90, unaligned: 0.10 } },

    // ========================================================================
    // TEYVAT (Additional)
    // ========================================================================
    teyvat_human: { name: 'Human (Teyvat)', color: '#ffca3a', icon: '⚖️', description: 'The primary populace of the seven nations.', player_relations: { archie: "Foreigner.", markop: "Creature.", humpik: "Short.", bowser: "Monster.", remi: "Tourist." }, religion_breakdown: { arceus_mythos: 0.70, star_spirits: 0.20, unaligned: 0.10 } },
    hilichurl: { name: 'Hilichurl', color: '#5d4037', icon: '🎭', description: 'Tribal monsters found across the wilderness.', player_relations: { archie: "Enemy.", markop: "Enemy.", humpik: "Enemy.", bowser: "Minion?", remi: "Enemy." }, religion_breakdown: { great_waaagh: 0.50, void_nihilism: 0.30, unaligned: 0.20 } },
    adeptus: { name: 'Adeptus', color: '#00bfa5', icon: '🐉', description: 'Illuminated beasts and demigods of Liyue.', player_relations: { archie: "Mortal.", markop: "Beast.", humpik: "Strong.", bowser: "Rival.", remi: "Mortal." }, religion_breakdown: { arceus_mythos: 0.80, lunar_cycle: 0.20 } },
    fontainian: { name: 'Fontainian', color: '#42a5f5', icon: '💧', description: 'Water-born humans.', player_relations: { archie: "Foreigner.", markop: "Creature.", humpik: "Short.", bowser: "Monster.", remi: "Tourist." }, religion_breakdown: { arceus_mythos: 0.60, star_spirits: 0.30, unaligned: 0.10 } },
    melusine: { name: 'Melusine', color: '#f48fb1', icon: '🐌', description: 'Small aquatic beings.', player_relations: { archie: "Cute.", markop: "Small.", humpik: "Strange.", bowser: "Weak.", remi: "Friend." }, religion_breakdown: { star_spirits: 0.70, arceus_mythos: 0.20, unaligned: 0.10 } },
    youkai_inazuma: { name: 'Youkai', color: '#ab47bc', icon: '👺', description: 'Supernatural beings.', player_relations: { archie: "Demon.", markop: "Spirit.", humpik: "Fight.", bowser: "Rival.", remi: "Scary." }, religion_breakdown: { lunar_cycle: 0.50, arceus_mythos: 0.30, unaligned: 0.20 } },
    abyss_mage: { name: 'Abyss Mage', color: '#6200ea', icon: '🧙‍♂️', description: 'Corrupted beings of the Void.', player_relations: { archie: "Chaos.", markop: "Light.", humpik: "Enemy.", bowser: "Darkness.", remi: "Target." }, religion_breakdown: { void_nihilism: 0.90, jester_cult: 0.10 } },
    
    // ========================================================================
    // EQUESTRIA (Additional)
    // ========================================================================
    earth_pony: { name: 'Earth Pony', color: '#8d6e63', icon: '🐴', description: 'Strong, dependable ponies.', player_relations: { archie: "Work.", markop: "Cousin.", humpik: "Strong.", bowser: "Slave.", remi: "Nice." }, religion_breakdown: { star_spirits: 0.70, lunar_cycle: 0.20, unaligned: 0.10 } },
    pegasus: { name: 'Pegasus', color: '#4fc3f7', icon: '🪽', description: 'Winged ponies.', player_relations: { archie: "Fast.", markop: "Fly.", humpik: "Sky.", bowser: "Scout.", remi: "Cool." }, religion_breakdown: { star_spirits: 0.60, lunar_cycle: 0.30, unaligned: 0.10 } },
    unicorn: { name: 'Unicorn', color: '#e1bee7', icon: '🦄', description: 'Magic-wielding ponies.', player_relations: { archie: "Magic.", markop: "Sparkle.", humpik: "Trick.", bowser: "Useful.", remi: "Pretty." }, religion_breakdown: { star_spirits: 0.80, arceus_mythos: 0.10, unaligned: 0.10 } },
    crystal_pony: { name: 'Crystal Pony', color: '#e0f7fa', icon: '💎', description: 'Crystal empire ponies.', player_relations: { archie: "Shiny.", markop: "Noble.", humpik: "Gem.", bowser: "Breakable.", remi: "Pretty." }, religion_breakdown: { arceus_mythos: 0.70, star_spirits: 0.30 } },
    bat_pony: { name: 'Thestral', color: '#424242', icon: '🦇', description: 'Bat-winged ponies.', player_relations: { archie: "Dark.", markop: "Night.", humpik: "Bat.", bowser: "Minion.", remi: "Cool." }, religion_breakdown: { lunar_cycle: 0.60, sanguine_path: 0.20, unaligned: 0.20 } },
    changeling_reformed: { name: 'Changeling (Reformed)', color: '#81c784', icon: '🦟', description: 'Metamorphosing insectoid creatures.', player_relations: { archie: "Bug.", markop: "Strange.", humpik: "Squish.", bowser: "Spy.", remi: "Weird." }, religion_breakdown: { star_spirits: 0.90, unaligned: 0.10 } },
    kirin: { name: 'Kirin', color: '#ffcc80', icon: '🔥', description: 'Draconic ponies.', player_relations: { archie: "Fire.", markop: "Magic.", humpik: "Dragon.", bowser: "Kin.", remi: "Wow." }, religion_breakdown: { arceus_mythos: 0.50, lunar_cycle: 0.40, unaligned: 0.10 } },
    griffon: { name: 'Griffon', color: '#ffca28', icon: '🦅', description: 'Eagle-lion hybrids.', player_relations: { archie: "Greedy.", markop: "Rival.", humpik: "Bird.", bowser: "Mercenary.", remi: "Scary." }, religion_breakdown: { great_waaagh: 0.40, unaligned: 0.60 } },
    yak: { name: 'Yak', color: '#5d4037', icon: '🐂', description: 'Powerful bovines.', player_relations: { archie: "Smash.", markop: "Strong.", humpik: "Brother.", bowser: "Fight.", remi: "Big." }, religion_breakdown: { great_waaagh: 0.60, lunar_cycle: 0.30, unaligned: 0.10 } },
};

export const REGIONAL_DEMOGRAPHICS = {
    "Mushroom Kingdom Regions": { toad_citizen: 0.7, goomba: 0.1, koopa: 0.1, shy_guy: 0.05, yoshi: 0.05 },
    "Islands & Outer Realms": { pianta: 0.4, noki: 0.3, toad_citizen: 0.1, koopa: 0.1, yoshi: 0.1 },
    "The Midlands": { regal_midlander: 0.6, moonfang_werewolf: 0.1, elder_vampire: 0.05, midlands_orc: 0.1, midlands_goblin: 0.1, rakasha_hunter: 0.05 },
    "The Internet": { netizen: 0.7, spam_bot: 0.1, living_meme: 0.1, virus_entity: 0.05, moderator_construct: 0.05 },
    "Middle-earth": { gondorian: 0.3, rohirrim: 0.2, middle_earth_elf: 0.1, middle_earth_dwarf: 0.1, mordor_orc: 0.2, hobbit: 0.1 },
    "The Fated Place": { warhammer_human: 0.4, warhammer_orc: 0.2, warhammer_dwarf: 0.1, skaven: 0.1, beastman: 0.1, warhammer_elf: 0.1 },
    "Kivotos": { kivotos_human: 0.6, kivotos_angel: 0.1, kivotos_demon: 0.1, kivotos_beastkin: 0.1, kivotos_robot: 0.1 },
    "The Doughnut Hole": { void_entity: 0.2, cosmic_entity: 0.2, fractal_being: 0.2, time_echo: 0.2, logic_crystal: 0.2 },
    "Pokémon Regions": { pokemon_human: 0.9, normal_pokemon: 0.01, water_pokemon: 0.01, fire_pokemon: 0.01, grass_pokemon: 0.01, electric_pokemon: 0.01, psychic_pokemon: 0.01, dark_pokemon: 0.01, fighting_pokemon: 0.01, steel_pokemon: 0.01 },
    "The Edge Regions": { void_entity: 0.5, null_texture: 0.3, wireframe_husk: 0.2 },
    "Animatopia": { rabbit_folk: 0.2, sheep_folk: 0.2, fox_folk: 0.1, lion_folk: 0.1, sloth_folk: 0.1, bear_folk: 0.1, rakasha_hunter: 0.1, dnd_human: 0.1 },
    "Connectopia": { block_folk: 0.5, creeper_kind: 0.3, ender_kind: 0.2 },
    "Earth Land": { earth_land_mage: 0.6, exceed: 0.2, celestial_spirit: 0.1, vulcan: 0.1 },
    "Faerûn": { faerun_human: 0.4, faerun_elf: 0.2, faerun_dwarf: 0.2, faerun_halfling: 0.1, faerun_gnome: 0.1 },
    "L'Eclaire Isle": { dough_glazed: 0.3, dough_cake: 0.2, dough_jelly: 0.2, dough_cruller: 0.1, dough_croissant: 0.1, frosting_slime: 0.1 },
    "Teyvat": { teyvat_human: 0.7, hilichurl: 0.1, adeptus: 0.05, fontainian: 0.05, melusine: 0.05, youkai_inazuma: 0.05 },
    "Equestria": { earth_pony: 0.3, pegasus: 0.3, unicorn: 0.3, changeling_reformed: 0.05, griffon: 0.05 }
};
