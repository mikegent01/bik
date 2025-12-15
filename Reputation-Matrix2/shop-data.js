// shop-data.js - The XP Emporium

export const SHOP_CATEGORIES = {
    CONSUMABLES: 'consumables',
    EQUIPMENT: 'equipment',
    CURIOSITIES: 'curiosities',
    SERVICES: 'services',
    FORBIDDEN: 'forbidden',
    PREMIUM: 'premium'
};

export const SHOP_ITEMS = {
    // === CONSUMABLES (500 - 2,000 XP) ===
    
    'mushroom_basic': {
        id: 'mushroom_basic',
        name: "Basic Mushroom",
        description: "A standard red-capped mushroom. Restores a small amount of vitality. Tastes like childhood nostalgia and mild disappointment.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 500,
        icon: '🍄',
        stock: 99,
        rarity: 'common',
        effects: ["Restore 10 HP", "Slight feeling of optimism"],
        vendor: "Toad Town Market"
    },
    
    'super_mushroom': {
        id: 'super_mushroom',
        name: "Super Mushroom",
        description: "A larger, more potent mushroom. Makes you feel bigger, even if you aren't. Side effects may include temporary megalomania.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1200,
        icon: '🍄',
        stock: 25,
        rarity: 'uncommon',
        effects: ["Restore 25 HP", "Advantage on Intimidation for 1 hour"],
        vendor: "Toad Town Market"
    },
    
    'fire_flower': {
        id: 'fire_flower',
        name: "Fire Flower",
        description: "A blazing orange blossom. Consume to gain temporary pyrokinesis. Not recommended for those with beard envy.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1800,
        icon: '🌸',
        stock: 15,
        rarity: 'uncommon',
        effects: ["Cast Firebolt at will for 10 minutes", "Your clothes turn white and red temporarily"],
        vendor: "Toad Town Market",
        warning: "May void Mages' Guild provisional licenses"
    },
    
    'ice_flower': {
        id: 'ice_flower',
        name: "Ice Flower",
        description: "A crystalline blue blossom that never melts. Grants cryokinetic abilities. Archie-approved alternative to certain other flowers.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1800,
        icon: '❄️',
        stock: 15,
        rarity: 'uncommon',
        effects: ["Cast Ray of Frost at will for 10 minutes", "Your clothes turn white and blue temporarily"],
        vendor: "Toad Town Market"
    },
    
    'star_bit_candy': {
        id: 'star_bit_candy',
        name: "Star Bit Candy",
        description: "Crystallized cosmic sugar collected from Rosalina's observatory. Tastes like the void between stars. Children love it.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 800,
        icon: '⭐',
        stock: 50,
        rarity: 'common',
        effects: ["Restore 5 HP", "Grants Darkvision for 1 hour", "Mild existential awareness"],
        vendor: "Comet Observatory Gift Shop"
    },
    
    'honey_syrup': {
        id: 'honey_syrup',
        name: "Honey Syrup",
        description: "Sweet amber syrup from the Gusty Gardens. Restores magical energy. Bees died for this. Many bees.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 600,
        icon: '🍯',
        stock: 40,
        rarity: 'common',
        effects: ["Restore 1 spell slot (level 1)", "Sticky fingers for 10 minutes"],
        vendor: "Toad Town Market"
    },
    
    'life_shroom': {
        id: 'life_shroom',
        name: "Life Shroom",
        description: "A pale green mushroom with an unsettling glow. Automatically activates upon death to restore the user. One use. Very suspicious.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 3500,
        icon: '💚',
        stock: 5,
        rarity: 'rare',
        effects: ["Auto-revive with 1 HP when reduced to 0", "Consumed upon activation"],
        vendor: "Shaman's Hut",
        warning: "The Iron Legion considers these 'evidence of unnatural practices'"
    },
    
    'thunder_rage': {
        id: 'thunder_rage',
        name: "Thunder Rage",
        description: "A crackling vial of bottled lightning. Throw it at your problems. All of them. At once.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1500,
        icon: '⚡',
        stock: 10,
        rarity: 'uncommon',
        effects: ["All enemies in 30ft take 3d6 lightning damage", "Deafens user for 1 round"],
        vendor: "Rogueport Black Market"
    },
    
    'sleepy_sheep': {
        id: 'sleepy_sheep',
        name: "Sleepy Sheep",
        description: "A plush sheep toy enchanted with soporific magic. Throw it at an enemy. Watch them count themselves.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 900,
        icon: '🐑',
        stock: 20,
        rarity: 'common',
        effects: ["Target must save or fall asleep for 1 minute", "Adorable even when weaponized"],
        vendor: "Toad Town Market"
    },
    
    'mighty_tonic': {
        id: 'mighty_tonic',
        name: "Mighty Tonic",
        description: "A bubbling red potion brewed by the Koopa Troop's finest alchemists. Tastes like victory and turtle wax.",
        category: SHOP_CATEGORIES.CONSUMABLES,
        price: 1100,
        icon: '🧪',
        stock: 15,
        rarity: 'uncommon',
        effects: ["+2 to Strength for 1 hour", "Uncontrollable urge to throw barrels"],
        vendor: "Valley of Bowser Trading Post"
    },
    
    // === EQUIPMENT (2,000 - 8,000 XP) ===
    
    'hammer_basic': {
        id: 'hammer_basic',
        name: "Wooden Hammer",
        description: "A simple wooden mallet. Good for hitting things. Things include: blocks, enemies, Goombas, stubborn machinery, and occasionally allies.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2000,
        icon: '🔨',
        stock: 10,
        rarity: 'common',
        effects: ["1d8 bludgeoning damage", "Can break brick blocks"],
        vendor: "Toad Town Market"
    },
    
    'super_hammer': {
        id: 'super_hammer',
        name: "Super Hammer",
        description: "A reinforced steel hammer with a satisfying heft. The preferred tool of plumbers who've given up on diplomacy.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4500,
        icon: '🔨',
        stock: 5,
        rarity: 'uncommon',
        effects: ["2d6 bludgeoning damage", "Can break metal blocks", "+1 to hit"],
        vendor: "Gilded Gryphon Armory"
    },
    
    'ultra_hammer': {
        id: 'ultra_hammer',
        name: "Ultra Hammer",
        description: "A legendary hammer forged in the depths of Mount Lavalava. Glows faintly. Screams quietly when swung.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 8000,
        icon: '⚒️',
        stock: 2,
        rarity: 'rare',
        effects: ["3d6 bludgeoning + 1d6 fire damage", "Can break any block", "+2 to hit"],
        vendor: "Deephold Smithing Guild",
        warning: "Requires Strength 14 to wield effectively"
    },
    
    'koopa_shell_shield': {
        id: 'koopa_shell_shield',
        name: "Koopa Shell Shield",
        description: "A polished green shell repurposed as a buckler. The previous owner is fine. Probably. Don't ask.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2500,
        icon: '🛡️',
        stock: 8,
        rarity: 'common',
        effects: ["+1 AC", "Can be thrown and returns", "Resistance to being stomped"],
        vendor: "Rogueport Black Market"
    },
    
    'super_boots': {
        id: 'super_boots',
        name: "Super Boots",
        description: "Red leather boots with enhanced jumping capabilities. WARNING: Ceiling awareness required.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 3500,
        icon: '👢',
        stock: 6,
        rarity: 'uncommon',
        effects: ["Jump height doubled", "Ground Pound attack (2d8 damage)", "Fall damage reduced by 20ft"],
        vendor: "Toad Town Market"
    },
    
    'dizzy_dial': {
        id: 'dizzy_dial',
        name: "Dizzy Dial",
        description: "A hypnotic spinning device. Makes everyone nearby very confused. Including you, if you look too long.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 2800,
        icon: '🌀',
        stock: 7,
        rarity: 'uncommon',
        effects: ["All creatures in 20ft must save or be Confused for 1 round", "Single use, recharges at dawn"],
        vendor: "Shaman's Hut"
    },
    
    'lucky_day_badge': {
        id: 'lucky_day_badge',
        name: "Lucky Day Badge",
        description: "A clover-shaped pin that brings good fortune. The Cosmic Jesters approve of this item. The Iron Legion does not.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 5000,
        icon: '🍀',
        stock: 3,
        rarity: 'rare',
        effects: ["Once per day, reroll any d20", "Enemies have -1 to hit you"],
        vendor: "Rogueport Black Market"
    },
    
    'power_rush_badge': {
        id: 'power_rush_badge',
        name: "Power Rush Badge",
        description: "A crimson badge that pulses with desperate energy. The closer you are to death, the harder you hit.",
        category: SHOP_CATEGORIES.EQUIPMENT,
        price: 4000,
        icon: '💢',
        stock: 4,
        rarity: 'uncommon',
        effects: ["+1d6 damage when below half HP", "+2d6 damage when below quarter HP"],
        vendor: "Gilded Gryphon Armory"
    },
    
    // === CURIOSITIES (1,000 - 5,000 XP) ===
    
    'mystery_box': {
        id: 'mystery_box',
        name: "? Block",
        description: "A floating yellow block with a question mark. Hit it to receive a random item. Contents determined by cosmic whimsy.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1500,
        icon: '❓',
        stock: 20,
        rarity: 'common',
        effects: ["Random consumable item", "10% chance of coins", "1% chance of nothing (and existential despair)"],
        vendor: "Toad Town Market"
    },
    
    'warp_pipe_model': {
        id: 'warp_pipe_model',
        name: "Miniature Warp Pipe",
        description: "A tiny green pipe that actually works. Drop in small items to transport them to a paired pipe. Do NOT put your hand in.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3000,
        icon: '🟢',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Teleport small objects to paired pipe within 1 mile", "Comes as a set of two"],
        vendor: "Comet Observatory Gift Shop"
    },
    
    'bob_omb_alarm': {
        id: 'bob_omb_alarm',
        name: "Bob-omb Alarm Clock",
        description: "A deactivated Bob-omb modified to wake you up. It walks toward you and explodes into confetti. Usually confetti.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 800,
        icon: '💣',
        stock: 15,
        rarity: 'common',
        effects: ["Guaranteed to wake you", "5% chance of actual explosion (1d6 damage)"],
        vendor: "Rogueport Black Market",
        warning: "Warranty void if reactivated"
    },
    
    'boo_in_a_bottle': {
        id: 'boo_in_a_bottle',
        name: "Boo in a Bottle",
        description: "A captured ghost in a mason jar. It looks sad. It also provides lighting. You're a terrible person for buying this.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 1200,
        icon: '👻',
        stock: 8,
        rarity: 'common',
        effects: ["30ft dim light", "Screams when danger is near", "Occasional guilt"],
        vendor: "Shaman's Hut"
    },
    
    'goomba_shoes': {
        id: 'goomba_shoes',
        name: "Goomba's Shoe",
        description: "A giant green boot. You can hop around in it. The Goomba who owned it wants it back. Don't make eye contact with Goombas.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2200,
        icon: '🥾',
        stock: 3,
        rarity: 'uncommon',
        effects: ["Bounce on enemies for 1d10 damage", "Immune to ground hazards while worn", "Very squeaky"],
        vendor: "Toad Town Market"
    },
    
    'propeller_hat': {
        id: 'propeller_hat',
        name: "Propeller Mushroom Hat",
        description: "A cap with a built-in propeller. Allows brief flight. The physics don't make sense. Nothing here does.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 4500,
        icon: '🧢',
        stock: 4,
        rarity: 'rare',
        effects: ["Fly 30ft as an action (3 uses per day)", "Slow fall always active", "Hair permanently messy"],
        vendor: "Comet Observatory Gift Shop"
    },
    
    'chatty_parrot': {
        id: 'chatty_parrot',
        name: "Chatty Parrot of Rogueport",
        description: "A mechanical parrot that repeats the last thing it heard. Perfect for blackmail. The Rakasha love these.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 2800,
        icon: '🦜',
        stock: 6,
        rarity: 'uncommon',
        effects: ["Records 30 seconds of audio", "Plays back on command", "Occasionally editorializes"],
        vendor: "Rogueport Black Market"
    },
    
    'flip_flop_frog': {
        id: 'flip_flop_frog',
        name: "Flip-Flop Frog",
        description: "A magical frog that reverses gravity for whoever holds it. Let go quickly or you'll be on the ceiling. Forever.",
        category: SHOP_CATEGORIES.CURIOSITIES,
        price: 3200,
        icon: '🐸',
        stock: 3,
        rarity: 'rare',
        effects: ["Reverse personal gravity for 1 round", "3 uses per day", "The frog judges you"],
        vendor: "Shaman's Hut"
    },
    
    // === SERVICES (3,000 - 15,000 XP) ===
    
    'healing_service': {
        id: 'healing_service',
        name: "Toad House Rest",
        description: "A full night's rest at a legitimate Toad House. Includes breakfast, healing, and zero assassination attempts (guaranteed).",
        category: SHOP_CATEGORIES.SERVICES,
        price: 3000,
        icon: '🏠',
        stock: 99,
        rarity: 'common',
        effects: ["Full HP restoration", "Remove 1 condition", "Comfortable bed"],
        vendor: "Any Toad House"
    },
    
    'fortune_teller': {
        id: 'fortune_teller',
        name: "Merluvlee's Fortune",
        description: "A genuine prophecy from the seer Merluvlee. Results may vary. Future not guaranteed. Past also questionable.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 4000,
        icon: '🔮',
        stock: 10,
        rarity: 'uncommon',
        effects: ["Receive cryptic hint about current quest", "May include lottery numbers", "Accuracy: 73%"],
        vendor: "Shooting Star Summit"
    },
    
    'merlon_upgrade': {
        id: 'merlon_upgrade',
        name: "Merlon's Empowerment",
        description: "The wizard Merlon will enhance one of your abilities. The process involves crystals, chanting, and mild electrocution.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 8000,
        icon: '✨',
        stock: 5,
        rarity: 'rare',
        effects: ["+1 to any ability score (max 20)", "Permanent", "Slightly sparkly afterward"],
        vendor: "Shooting Star Summit"
    },
    
    'dojo_training': {
        id: 'dojo_training',
        name: "Dojo Training Session",
        description: "Train with the masters at the Toad Town Dojo. Learn to punch ghosts. Literally.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 5000,
        icon: '🥋',
        stock: 8,
        rarity: 'uncommon',
        effects: ["Learn one combat technique", "Unarmed attacks count as magical", "Sore for 1d4 days"],
        vendor: "Toad Town Dojo"
    },
    
    'airship_passage': {
        id: 'airship_passage',
        name: "Airship Passage (One Way)",
        description: "Travel aboard a licensed merchant airship. Not the Vigilance. A normal, non-haunted, non-hijacked airship. Refreshing.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 3500,
        icon: '🎈',
        stock: 20,
        rarity: 'common',
        effects: ["Fast travel to any major city", "Includes meal service", "Baggage fees apply"],
        vendor: "Gilded Gryphon Transportation"
    },
    
    'reputation_cleanse': {
        id: 'reputation_cleanse',
        name: "Reputation Laundering",
        description: "The Onyx Hand will... adjust... certain records. Bounties reduced. Witnesses relocated. Questions unanswered.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 10000,
        icon: '🧹',
        stock: 3,
        rarity: 'rare',
        effects: ["Reduce bounty with one faction by 50%", "Remove one minor warrant", "No refunds"],
        vendor: "Onyx Hand (Location Classified)"
    },
    
    'rakasha_tattoo': {
        id: 'rakasha_tattoo',
        name: "Rakasha Spirit Tattoo",
        description: "A sacred tattoo applied by Rakasha shamans. The spirit animal bound to your skin provides guidance and mild attitude.",
        category: SHOP_CATEGORIES.SERVICES,
        price: 7500,
        icon: '🐯',
        stock: 5,
        rarity: 'rare',
        effects: ["Gain a spirit familiar (see DM)", "Advantage on Survival checks in wilderness", "Tattoo occasionally moves"],
        vendor: "Rakasha Tribal Grounds"
    },
    
    // === FORBIDDEN (10,000 - 25,000 XP) ===
    
    'star_fragment': {
        id: 'star_fragment',
        name: "Star Fragment",
        description: "A shard of cosmic power. DO NOT CONSUME. DO NOT GIVE TO TOADS. The last person who did this caused... problems.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 25000,
        icon: '💫',
        stock: 1,
        rarity: 'legendary',
        effects: ["Unknown - Requires DM approval", "May cause apotheosis", "May cause apocalypse"],
        vendor: "UNKNOWN",
        warning: "The Iron Legion will execute anyone caught with this"
    },
    
    'chaos_heart_shard': {
        id: 'chaos_heart_shard',
        name: "Shard of the Chaos Heart",
        description: "A fragment of pure dimensional instability. The Cosmic Jesters consider this their holy relic. Everyone else considers it evidence.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 20000,
        icon: '💜',
        stock: 1,
        rarity: 'legendary',
        effects: ["Reality warping on critical hits", "Advantage on Chaos magic", "Disadvantage on order-based saving throws"],
        vendor: "Rogueport Black Market (Back Room)",
        warning: "Possession is punishable by permanent banishment to the Void Between Worlds"
    },
    
    'dark_star_essence': {
        id: 'dark_star_essence',
        name: "Dark Star Essence",
        description: "Concentrated malevolence in a vial. The substance shifts and writhes. It whispers. It knows your name. It always knew.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 18000,
        icon: '🌑',
        stock: 2,
        rarity: 'legendary',
        effects: ["Consume to gain +4 to all stats for 1 hour", "Afterward, roll on Corruption Table", "May attract Fawful's attention"],
        vendor: "Location Sealed",
        warning: "The Mages' Guild will vaporize you on sight if caught with this"
    },
    
    'shadow_queen_tear': {
        id: 'shadow_queen_tear',
        name: "Shadow Queen's Tear",
        description: "A crystallized tear from the ancient Shadow Queen. Grants incredible power at a cost no one fully understands yet.",
        category: SHOP_CATEGORIES.FORBIDDEN,
        price: 22000,
        icon: '🖤',
        stock: 1,
        rarity: 'legendary',
        effects: ["Grants Shadow Step (teleport through darkness)", "Permanent darkvision 120ft", "Sunlight sensitivity"],
        vendor: "Palace of Shadow (If You Dare)",
        warning: "The Shadow Queen wants it back. She is patient."
    },
    
    // === PREMIUM / JOKE ITEMS ===
    
    'waluigi_autograph': {
        id: 'waluigi_autograph',
        name: "Waluigi's Autograph",
        description: "A signed photograph of Waluigi doing a pose. It's slightly damp. It smells like garlic. It's somehow valuable.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 1000,
        icon: '💜',
        stock: 50,
        rarity: 'uncommon',
        effects: ["No mechanical benefit", "Waluigi may recognize you", "Worth 2,000 gold to the right collector"],
        vendor: "Waluigi (Direct Sales)"
    },
    
    'warios_garlic': {
        id: 'warios_garlic',
        name: "Wario's Personal Garlic",
        description: "A bulb of garlic from Wario's personal stash. Supernaturally pungent. Vampires flee. So does everyone else.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 500,
        icon: '🧄',
        stock: 30,
        rarity: 'common',
        effects: ["Advantage against Vampires and Undead", "Disadvantage on Charisma checks", "Lasts until you bathe"],
        vendor: "Wario (Reluctantly)"
    },
    
    'golden_mushroom': {
        id: 'golden_mushroom',
        name: "Golden Mushroom",
        description: "A mushroom made of solid gold. Eating it seems inadvisable. Selling it seems profitable. Looking at it seems satisfying.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 6000,
        icon: '🌟',
        stock: 3,
        rarity: 'rare',
        effects: ["Worth 10,000 gold if sold", "Can be consumed for... reasons", "+50 HP if eaten (and no teeth)"],
        vendor: "Comet Observatory Gift Shop"
    },
    
    'invisible_cap': {
        id: 'invisible_cap',
        name: "Vanish Cap",
        description: "A blue cap that turns you invisible. You can still be heard. You can still be smelled. But you cannot be seen.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 7500,
        icon: '🧢',
        stock: 2,
        rarity: 'rare',
        effects: ["Invisibility for 1 minute (3 uses per day)", "Clothes also invisible", "Existential questions free of charge"],
        vendor: "Big Boo's Haunt Gift Shop"
    },
    
    'metal_cap': {
        id: 'metal_cap',
        name: "Metal Cap",
        description: "A green cap that turns you into living metal. You sink in water. You break floors. You set off metal detectors.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 7500,
        icon: '🎩',
        stock: 2,
        rarity: 'rare',
        effects: ["AC becomes 20 for 1 minute (3 uses per day)", "Immune to poison and psychic", "Cannot swim, cast spells, or sneak"],
        vendor: "Hazy Maze Cave Trading Post"
    },
    
    'penguin_suit': {
        id: 'penguin_suit',
        name: "Penguin Suit",
        description: "A full-body penguin costume that is somehow magical. Slide on ice. Swim efficiently. Look ridiculous. Feel powerful.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 4000,
        icon: '🐧',
        stock: 5,
        rarity: 'uncommon',
        effects: ["Immunity to cold damage", "Swim speed 60ft", "Can slide prone at double speed on ice", "Permanent dignity damage"],
        vendor: "Freezeflame Galaxy Outpost"
    },
    
    'tanooki_leaf': {
        id: 'tanooki_leaf',
        name: "Tanooki Leaf",
        description: "A magical leaf that grants the abilities of the legendary Tanooki. Fly. Turn to stone. Question everything.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 6000,
        icon: '🍂',
        stock: 4,
        rarity: 'rare',
        effects: ["Slow fall always active", "Can turn into statue (advantage on Stealth, cannot move)", "Grow a suspicious tail"],
        vendor: "Sky Land Trading Post"
    },
    
    'double_cherry': {
        id: 'double_cherry',
        name: "Double Cherry",
        description: "A cherry that creates a duplicate of yourself. The duplicate has your memories. It thinks it's the original. Good luck with that.",
        category: SHOP_CATEGORIES.PREMIUM,
        price: 12000,
        icon: '🍒',
        stock: 2,
        rarity: 'legendary',
        effects: ["Create duplicate for 1 hour", "Duplicate acts independently", "Only one can survive at the end"],
        vendor: "Sprixie Kingdom Embassy",
        warning: "Duplicates have been known to... refuse termination"
    }
};

// Calculate totals for the shop
export function getShopStats() {
    const items = Object.values(SHOP_ITEMS);
    return {
        totalItems: items.length,
        totalStock: items.reduce((sum, item) => sum + item.stock, 0),
        cheapest: Math.min(...items.map(i => i.price)),
        mostExpensive: Math.max(...items.map(i => i.price)),
        byCategory: {
            [SHOP_CATEGORIES.CONSUMABLES]: items.filter(i => i.category === SHOP_CATEGORIES.CONSUMABLES).length,
            [SHOP_CATEGORIES.EQUIPMENT]: items.filter(i => i.category === SHOP_CATEGORIES.EQUIPMENT).length,
            [SHOP_CATEGORIES.CURIOSITIES]: items.filter(i => i.category === SHOP_CATEGORIES.CURIOSITIES).length,
            [SHOP_CATEGORIES.SERVICES]: items.filter(i => i.category === SHOP_CATEGORIES.SERVICES).length,
            [SHOP_CATEGORIES.FORBIDDEN]: items.filter(i => i.category === SHOP_CATEGORIES.FORBIDDEN).length,
            [SHOP_CATEGORIES.PREMIUM]: items.filter(i => i.category === SHOP_CATEGORIES.PREMIUM).length
        }
    };
}