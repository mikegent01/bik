// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_001 = {
  "Pauline_mic": {
    "id": "pauline_mic",
    "name": "Pauline's Microphone",
    "description": "A mic that amplifies voice for commands or songs.",
    "category": "equipment",
    "price": 12000,
    "icon": "🎤",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Amplify voice: Command spell (DC 14)",
      "Performance +3",
      "Echoes in large areas"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Sound Box",
    "levelRequirement": 4
  },
  "shy_guy_torch": {
    "id": "shy_guy_torch",
    "name": "Shy Guy's Mask Torch",
    "description": "A torch that burns with a shy flame. Hides you in shadows but whispers secrets.",
    "category": "equipment",
    "price": 8000,
    "icon": "🔦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Sheds dim light in 20ft, but you're invisible in it",
      "Whispers one secret per day (DM's choice)",
      "Mask on torch giggles when nervous",
      "Burns out if you speak loudly"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Dark Wrap",
    "levelRequirement": 2
  },
  "1_up_deluxe": {
    "id": "1_up_deluxe",
    "name": "1-Up Deluxe",
    "description": "A platinum mushroom. Grants a literal second life.",
    "category": "consumables",
    "price": 700000,
    "icon": "🍄",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Passive: If you die, you immediately respawn at the start of your next turn with Full HP, Spell Slots, and Abilities.",
      "Consumed on use.",
      "Can only carry one at a time."
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Divine Courier",
    "levelRequirement": 1
  },
  "1_up_mushroom": {
    "id": "1_up_mushroom",
    "name": "1-Up Mushroom",
    "description": "The green miracle. A mushroom that vibrates with the frequency of life itself. Cheats death.",
    "category": "premium",
    "price": 300000,
    "icon": "💚",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Single Use",
      "Cast 'True Resurrection' on target (touch)",
      "Works even if the body is destroyed",
      "The universe frowns upon this exchange"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Armored Escort",
    "levelRequirement": 1
  },
  "a_bag_that_defies_vertical_1": {
    "id": "a_bag_that_defies_vertical_1",
    "name": "Gravity Satchel",
    "description": "A bag that defies vertical gravity and fits perfectly on a side of the doughnut",
    "category": "equipment",
    "price": 12000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Allows wearer to float vertically up to 30 feet",
      "10% chance to cause a localized gravity anomaly",
      "Can be used to carry up to 100 lbs of gear",
      "Connects to The Grand Country’s side of the doughnut",
      "Cursed: If dropped in the Void, wearer becomes permanently upside down"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 7
  },
  "a_bottle_of_whiskey_garlic": {
    "id": "a_bottle_of_whiskey_garlic",
    "name": "Wario's Wild West Bottle",
    "description": "A bottle of 'whiskey' (garlic juice).",
    "category": "equipment",
    "price": 4700,
    "icon": "🍾",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Drink for +1 CON (tough)",
      "Juice burns: disadvantage on taste",
      "Western: +1 Intimidation",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bottle Bounce",
    "levelRequirement": 4
  },
  "a_bracelet_infused_with_wario": {
    "id": "a_bracelet_infused_with_wario",
    "name": "Wario's Garlic Power Bracelet",
    "description": "A bracelet infused with Wario's favorite garlic – boosts strength or your stench?",
    "category": "equipment",
    "price": 9500,
    "icon": "🧄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Once per day: Gain +1 Strength for 1 hour (garlic munchies!)",
      "Repels vampires and picky eaters: advantage on saves vs. undead charms",
      "Side effect: Your breath becomes a weapon (1d4 poison damage in 5ft cone, but allies must save DC 10 CON or nauseated)",
      "Made by: Wario's Garlic Lab"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stinky Sack",
    "levelRequirement": 5
  },
  "a_brass_token_engraved_with": {
    "id": "a_brass_token_engraved_with",
    "name": "Pipe Network Key",
    "description": "A brass token engraved with the symbols of the Pipe Network’s collapse. When inserted into a pipe node, it unlocks ancient data streams that reveal the hidden routes smugglers use to bypass the failing infrastructure. However, prolonged use causes the bearer to hear whispers of the Princess’s final plea for help.",
    "price": 800,
    "icon": "⚙",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Unlocks hidden pipe routes",
      "Reveals smuggler activity patterns",
      "Causes auditory hallucinations after 10 minutes of use",
      "Grants 1d4 bonus to stealth checks in pipe systems",
      "Corrupts memory if used with non-authorized nodes",
      "Crafted by: Pianta Chuck Express"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 3
  },
  "a_buoyant_satchel_woven_from": {
    "id": "a_buoyant_satchel_woven_from",
    "name": "Tropical Tide Satchel",
    "description": "A buoyant satchel woven from sea grass and coral that expands with water. Ideal for carrying gear or catching fish. Floats silently and hides from enemy sight when submerged.",
    "category": "equipment",
    "price": 2200,
    "icon": "🐠",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Increases carrying capacity by 30%",
      "Grants +5% swim speed",
      "Reduces water damage by 20%",
      "Crafted by: Pond Patrol"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4
  },
  "a_cape_that_makes_you": {
    "id": "a_cape_that_makes_you",
    "name": "Wario's Super Star Cape",
    "description": "A cape that makes you feel invincible – like Wario after a power-up!",
    "category": "equipment",
    "price": 17000,
    "icon": "⭐",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Once per day: Gain temporary invincibility (resistance to all damage for 1 minute)",
      "Cape sparkles: Advantage on Intimidation (star power!)",
      "Gimmick: After use, you crash (disadvantage on next 3 checks from 'power-down')",
      "Made by: Wario's Star Factory"
    ],
    "vendor": "wario_land",
    "shippedBy": "Starry Shipment",
    "levelRequirement": 6
  },
  "a_card_that_wilds_any": {
    "id": "a_card_that_wilds_any",
    "name": "Wario's Wildcard",
    "description": "A card that 'wilds' any game.",
    "category": "equipment",
    "price": 5000,
    "icon": "🃏",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Play in games: +1 to gambling rolls",
      "Card bends: disadvantage on sleight",
      "Wario luck: 50% double or nothing",
      "Made by: Wario Cards"
    ],
    "vendor": "wario_land",
    "shippedBy": "Joker Jog",
    "levelRequirement": 4
  },
  "a_chest_full_of_treasure": {
    "id": "a_chest_full_of_treasure",
    "name": "Wario's Fake Treasure Chest (Scam Chest!)",
    "description": "A chest full of 'treasure' to fool your foes – Wario's decoy delight!",
    "category": "equipment",
    "price": 9000,
    "icon": "📦",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Place as decoy: Enemies investigate (DC 13 INT save or waste turn opening empty chest)",
      "Inside: Spring-loaded fake gold (blinds opener, DC 12 CON save)",
      "Scam: Chest is lightweight – easy to spot as fake if shaken",
      "Made by: Wario's Trap Treasury"
    ],
    "vendor": "wario_land",
    "shippedBy": "Empty Echo Express",
    "levelRequirement": 5
  },
  "a_classic_wizard_hat_that": {
    "id": "a_classic_wizard_hat_that",
    "name": "Mages' Guild Pointed Hat of Stereotypes",
    "description": "A classic wizard hat that is very flimsy.",
    "category": "equipment",
    "price": 9500,
    "icon": "🎩",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Arcana checks (you look like a wizard)",
      "Disadvantage on saves vs. wind (hat flies off easily)",
      "You must gesture dramatically when casting spells (disadvantage on Stealth)",
      "Made by: Mages' Guild Haberdashery"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 5
  },
  "a_coin_with_wario_s": {
    "id": "a_coin_with_wario_s",
    "name": "Wario's Lucky W Coin",
    "description": "A coin with Wario's face – 'brings good luck' (or bad).",
    "category": "equipment",
    "price": 4100,
    "icon": "🪙",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Flip for luck: heads +1 to next roll, tails -1 (50/50)",
      "Coin is weighted: 60% chance tails (Wario's luck)",
      "Wario's grin: advantage on Deception when gambling",
      "Made by: Wario's Mint (Counterfeit)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Coin Flip Courier",
    "levelRequirement": 4
  },
  "a_controller_that_controls_minor": {
    "id": "a_controller_that_controls_minor",
    "name": "Wario's  WiiMote",
    "description": "A controller that 'controls' minor things.",
    "category": "equipment",
    "price": 5200,
    "icon": "🎮",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Point to move small objects 5ft (Mage Hand lite)",
      "Mote vibrates: disadvantage on Concentration",
      "Gamers: +1 Charisma with techies",
      "Made by: WarioWare Remotes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Game Over Delivery",
    "levelRequirement": 4
  },
  "a_cowboy_hat_with_wario": {
    "id": "a_cowboy_hat_with_wario",
    "name": "Wario's Wild West Hat",
    "description": "A cowboy hat with Wario flair.",
    "category": "equipment",
    "price": 4800,
    "icon": "🤠",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "+1 Intimidation in saloons",
      "Hat tips: disadvantage on balance",
      "Western fans: +1 Persuasion",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Yeehaw Yonder",
    "levelRequirement": 4
  },
  "a_cursed_explosive_infused_with": {
    "id": "a_cursed_explosive_infused_with",
    "name": "Garlic Bomb",
    "description": "A cursed explosive infused with Wario’s greed",
    "price": 450,
    "icon": "🧄",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Detonates on contact with a living target",
      "Deals 3d4 piercing damage",
      "Causes temporary garlic blindness to enemies",
      "Triggers Wario’s greed aura for 3 rounds",
      "Crafted by: Pipe Express",
      "Contains: 1000g Wario’s garlic"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2
  },
  "a_cursed_relic_forged_from": {
    "id": "a_cursed_relic_forged_from",
    "name": "Entropy Ring",
    "description": "A cursed relic forged from the shattered heart of the Iron Legion’s sleeper agent Toadburt, this ring radiates a slow decay that erodes memories and sanity. It grants temporary resistance to fear, but every hour worn causes the wearer to forget a random memory. Only the Changeling Hive can explain why it’s not “unlocked” until the end of the world.",
    "price": 5000,
    "icon": "⚙",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants +2 to Will saves against fear effects",
      "Causes 1d4 memory loss per hour of wear",
      "Increases damage taken from psychic attacks by 10%",
      "Triggered by: Toadburt’s failed loyalty oath",
      "Wears out after 24 hours, then becomes inert",
      "Only usable by: Changeling Hive agents"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 8
  },
  "a_cursed_tool_forged_from_1": {
    "id": "a_cursed_tool_forged_from_1",
    "name": "Ironclad Hammer of the Forge",
    "description": "A cursed tool forged from the last steel of the Blacksmith’s Guild, it strikes with brutal efficiency and inflicts heavy damage to armored foes. Its handle glows faintly with the fire of the Iron Legion’s labor.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals +200 damage to enemy armor",
      "Causes enemy armor to degrade by 10% after each hit",
      "Grants 5% chance to inflict “Iron Will” status effect (resists damage for 3 turns)"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "a_custom_motorcycle_loud_fast": {
    "id": "a_custom_motorcycle_loud_fast",
    "name": "Wario's Chopper",
    "description": "A custom motorcycle. Loud, fast, and indestructible.",
    "category": "equipment",
    "price": 200000,
    "icon": "🏍️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Land Speed 100ft",
      "Can ram enemies (4d10 Bludgeoning)",
      "Emits black smoke (Obscures vision)",
      "Runs on garlic"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Driven through your wall",
    "levelRequirement": 5
  },
  "a_darkly_polished_ring_forged": {
    "id": "a_darkly_polished_ring_forged",
    "name": "Onyx Hand Ring",
    "description": "A darkly polished ring forged from the remnants of the Onyx Hand’s last rebellion. Wearing it grants the wearer the ability to detect and disrupt magical wards, but each use drains the wearer’s willpower and triggers a 5% chance to be targeted by assassins. The ring whispers the names of those who died for the Kingdom’s sovereignty.",
    "category": "equipment",
    "price": 5000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Detects magical wards and weakens them",
      "Drains 1d6 willpower per use",
      "5% chance to trigger assassination target",
      "Grants +2 to stealth checks in dark environments",
      "Whispers names of fallen heroes",
      "Crafted by: Iron Legion"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 4
  },
  "a_device_that_draws_maps": {
    "id": "a_device_that_draws_maps",
    "name": "Wario's Treasure Map Generator",
    "description": "A device that 'draws' maps to hidden loot – Wario's surefire scheme!",
    "category": "equipment",
    "price": 14000,
    "icon": "🗺️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Generates a map once per day: leads to minor treasure (10-50gp) 70% of the time, or a trap (1d6 damage) 30%",
      "Map is waterproof: advantage on Survival in wet areas",
      "Wario's watermark: attracts rival treasure hunters (complication)",
      "Made by: Wario's Map Mill"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pirate Post",
    "levelRequirement": 5
  },
  "a_flickering_lantern_from_luigi": {
    "id": "a_flickering_lantern_from_luigi",
    "name": "Luigi's Ghost-Hunting Lantern",
    "description": "A flickering lantern from Luigi's ill-fated defense of the castle.",
    "category": "equipment",
    "price": 5300,
    "icon": "🏮",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Illuminate 20ft: reveals invisible spirits or ghosts",
      "Once per day: cast a minor light spell that harms undead (1d4 radiant)",
      "Lantern is haunted: whispers Luigi's fears (disadvantage on saves vs. fear)",
      "May attract Boo spirits: random ghostly encounters",
      "Made by: Luigi's Gear (Salvaged from Ruins)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spooky Shipment",
    "levelRequirement": 5
  },
  "a_flickering_lantern_that_glows": {
    "id": "a_flickering_lantern_that_glows",
    "name": "Feywhisper Torch",
    "description": "A flickering lantern that glows with the color of twilight and whispers secrets to those who listen. When lit, it reveals hidden paths in the Feywild and grants temporary invisibility to the user for 10 seconds.",
    "price": 1200,
    "icon": "🌿",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Grants 10 seconds of invisibility when used",
      "Reveals hidden paths in the Feywild for 30 seconds",
      "Boosts stealth check by +2 for 1 turn"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 4
  },
  "a_flying_broom_for_quick": {
    "id": "a_flying_broom_for_quick",
    "name": "Kamek's Broom",
    "description": "A flying broom for quick escapes.",
    "category": "equipment",
    "price": 30000,
    "icon": "🧹",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Fly speed 50ft",
      "Can cast one random spell per day (DM roll)",
      "Broom has mind of its own sometimes"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Broomstick Delivery",
    "levelRequirement": 7
  },
  "a_fractured_fragment_of_a": {
    "id": "a_fractured_fragment_of_a",
    "name": "Mirrored Soul Shard",
    "description": "A fractured fragment of a dead necromancer’s essence, now bound to the Deep Mirror. When wielded, it whispers forgotten commands and warps the battlefield’s perception. Ideal for manipulating undead horde formations.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% chance to summon undead units in combat",
      "Grants temporary invisibility to user during 30 seconds of sustained use",
      "Causes surrounding enemies to stagger when touched by summoned spirits"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "a_fractured_relic_from_the": {
    "id": "a_fractured_relic_from_the",
    "name": "Ancient Temple Shard",
    "description": "A fractured relic from the depths of the Sacred Ruins. When wielded, it grants visions of forgotten temple secrets and minor stat boosts. Only the brave or the foolish dare to carry it.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% attack speed while in temple zones",
      "Minor chance to reveal hidden temple path upon use",
      "Grants temporary immunity to environmental damage in temple areas"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "a_geometric_wand_brimming_with_1": {
    "id": "a_geometric_wand_brimming_with_1",
    "name": "Kamek's Spare Wand",
    "description": "A geometric wand brimming with chaotic transformation magic.",
    "category": "equipment",
    "price": 450000,
    "icon": "🪄",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "+2 to Spell Attack/DC",
      "Action: Transform a medium object into a CR 3 monster (Loyal to you)",
      "Action: Transform terrain into geometric blocks",
      "User laughs uncontrollably"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Broomstick",
    "levelRequirement": 11
  },
  "a_gold_plated_spray_painted": {
    "id": "a_gold_plated_spray_painted",
    "name": "Wario's Authentic Autograph Plaque",
    "description": "A gold-plated (spray-painted) plaque with Wario's signature. His face is winking.",
    "category": "equipment",
    "price": 4500,
    "icon": "🖼️",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Display in your camp: Wario may randomly appear in your dreams to give bad financial advice",
      "Wealthy NPCs think you're a collector: advantage on Charisma checks with them",
      "Plaque is tacky: disadvantage on checks with art critics",
      "Smells faintly of garlic (permanent)",
      "Made by: Wario Land Memorabilia (100% Genuine, Trust Me)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud",
    "levelRequirement": 4
  },
  "a_golden_key_to_the": {
    "id": "a_golden_key_to_the",
    "name": "Diamond City Key",
    "description": "A golden key to the vault of hidden treasures",
    "price": 5000,
    "icon": "💎",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Opens doors to hidden rooms",
      "Grants temporary teleportation to nearby locations",
      "Consumes 1000 mana per use",
      "Made by: Skaven",
      "Causes minor mana drain when used repeatedly",
      "Only works in Diamond City or Wario Land zones"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 7
  },
  "a_greasy_napkin_signed_by": {
    "id": "a_greasy_napkin_signed_by",
    "name": "Wario's Autograph on a Used Napkin",
    "description": "A greasy napkin signed by Wario himself. 'Worth a fortune!' he says.",
    "category": "equipment",
    "price": 4500,
    "icon": "📝",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Can be used as a one-time distraction: show it to a foe for disadvantage on their next attack (they're confused by the 'celebrity')",
      "Napkin is stained with garlic sauce: disadvantage on Charisma checks if you try to sell it (smells awful)",
      "Wario claims it's a 'collectors item': advantage on Persuasion to haggle with Wario fans",
      "Made by: Wario (with a Sharpie)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Greasy Envelope",
    "levelRequirement": 4
  },
  "a_hat_that_grows_garlic": {
    "id": "a_hat_that_grows_garlic",
    "name": "Wario's Garlic Grower Hat (Gimmick Grow!)",
    "description": "A hat that grows garlic on your head – fresh anytime!",
    "category": "equipment",
    "price": 7500,
    "icon": "🎩",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Grows 1 garlic bulb per day: Use as ingredient or ammo (1d4 bludgeoning)",
      "Hat smells garlicky: Advantage vs. vampires, but disadvantage on stealth (odor)",
      "Itch factor: Disadvantage on Concentration if not harvested daily",
      "Made by: Wario's Farm Folly"
    ],
    "vendor": "wario_land",
    "shippedBy": "Head Harvest Haul",
    "levelRequirement": 5
  },
  "a_holster_for_guns_garlic": {
    "id": "a_holster_for_guns_garlic",
    "name": "Wario's Wild West Holster",
    "description": "A holster for 'guns' (garlic shooters).",
    "category": "equipment",
    "price": 5100,
    "icon": "👜",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Quick draw: advantage on first ranged",
      "Holster creaks: disadvantage on quiet",
      "Western: +1 Dex draws",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Holster Hustle",
    "levelRequirement": 4
  },
  "a_hooded_cloak_for_patrolling": {
    "id": "a_hooded_cloak_for_patrolling",
    "name": "Gondor Ranger's Cloak",
    "description": "A hooded cloak for patrolling the wilds of Ithilien.",
    "category": "equipment",
    "price": 16500,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Survival checks in forests or hills",
      "Hood provides dim light vision in shadows",
      "Cloak snags on thorns (5% chance of tear)",
      "Made by: Gondor Tailors"
    ],
    "vendor": "kingdom_gondor_outpost",
    "shippedBy": "Ranger Relay",
    "levelRequirement": 5
  },
  "a_horn_that_honks_with": {
    "id": "a_horn_that_honks_with",
    "name": "Wario's  Bike Horn",
    "description": "A horn that honks with garlic scent.",
    "category": "equipment",
    "price": 4100,
    "icon": "🚲",
    "stock": 14,
    "rarity": "common",
    "effects": [
      "Honk to distract: DC 12 Wisdom save or foe loses action",
      "Horn smells: disadvantage on Charisma nearby",
      "Bike racers love it: +1 speed on mounts",
      "Made by: Wario Wheels"
    ],
    "vendor": "wario_land",
    "shippedBy": "Horn Honk Haul",
    "levelRequirement": 4
  },
  "a_jagged_piece_of_the": {
    "id": "a_jagged_piece_of_the",
    "name": "Peach's Crown Shard",
    "description": "A jagged piece of the late Princess's crown, looted from the palace ruins.",
    "category": "equipment",
    "price": 4800,
    "icon": "👑",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Embed in weapon: +1d4 radiant damage vs. undead or Toad rebels once per day",
      "Shard is cursed: disadvantage on Charisma checks with loyalists (they sense the theft)",
      "Glows faintly in presence of royalty: advantage on Investigation for hidden heirs",
      "May shatter after 3 uses: permanent loss",
      "Made by: Palace Looter (Wario's Collection)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shady Relic Relay",
    "levelRequirement": 4
  },
  "a_key_forged_in_the": {
    "id": "a_key_forged_in_the",
    "name": "Ricco Harbor Key",
    "description": "A key forged in the ink-jammed ruins of Ricco Harbor",
    "price": 700,
    "icon": "🗝",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Opens the secret door behind the ink-stained wall",
      "Grants access to the Koopa Navy’s hidden storage",
      "Can be used to summon ink-splattered goblins",
      "Wears off after 10 minutes of use",
      "Smells like stale tea and regret",
      "Carries the ghost of Admiral Bloopers"
    ],
    "vendor": "dreamland",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 2
  },
  "a_lightweight_cape_woven_from": {
    "id": "a_lightweight_cape_woven_from",
    "name": "Tropical Breeze Cape",
    "description": "A lightweight cape woven from the breath of the island’s breezes, this cape allows the wearer to glide through the air with minimal effort. Ideal for aerial combat or escape missions.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants short-range aerial flight for 10 seconds",
      "Increases dodge chance by 15% while airborne",
      "Reduces fall damage by 50% during jumps"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "a_long_fork_for_roasting": {
    "id": "a_long_fork_for_roasting",
    "name": "Wario's Wiener Roast Fork",
    "description": "A long fork for roasting... anything.",
    "category": "equipment",
    "price": 4800,
    "icon": "🍡",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Roast over fire: advantage on cooking meat",
      "Fork long: +5 ft reach for pokes (1d4 piercing)",
      "Greasy: disadvantage on grip checks",
      "Made by: Wario BBQ"
    ],
    "vendor": "wario_land",
    "shippedBy": "Roast Roll",
    "levelRequirement": 4
  },
  "a_lucky_bone_for_wishes": {
    "id": "a_lucky_bone_for_wishes",
    "name": "Wario's Wishbone",
    "description": "A 'lucky' bone for wishes.",
    "category": "equipment",
    "price": 4300,
    "icon": "🍗",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Snap for luck: +1 to next roll",
      "Bone breaks: disadvantage if snapped wrong",
      "Wario wishes: advantage on greed",
      "Made by: Wario Wishes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bone Break",
    "levelRequirement": 4
  },
  "a_meter_that_measures_your": {
    "id": "a_meter_that_measures_your",
    "name": "Wario's Luck-o-Meter",
    "description": "A meter that measures your luck – and 'boosts' it Wario-style!",
    "category": "equipment",
    "price": 11000,
    "icon": "🎰",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Check luck: Roll d20; on 15+ gain inspiration, on 5- reroll a failed check",
      "Meter shakes: +1 to gambling or loot rolls",
      "Scam vibe: Breaks after 3 uses (false readings lead to bad decisions)",
      "Made by: Wario's Luck Lab"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lucky Lotto Load",
    "levelRequirement": 5
  },
  "a_mutated_core_from_the": {
    "id": "a_mutated_core_from_the",
    "name": "Fire Flower Core",
    "description": "A mutated core from the new fire flower strain",
    "price": 12000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Can be infused into any weapon to grant explosive damage on critical hit",
      "Causes 3d6 fire damage on first hit with weapon",
      "Triggering the core causes temporary mutations to the wielder: +1d4 damage, -10% stamina regeneration, +10% fire resistance",
      "Must be kept in a sealed crystal vial or else it explodes on contact with water",
      "Origin: Raventree Manor’s Shadowfell Mutation Lab",
      "Wielder must be a fire mage or mutant cultivator to activate"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 8
  },
  "a_pan_that_stirs_itself": {
    "id": "a_pan_that_stirs_itself",
    "name": "Mages' Guild Spellbound Saucepan",
    "description": "A pan that stirs itself with a magic spoon.",
    "category": "equipment",
    "price": 19500,
    "icon": "🍳",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Automatically stirs recipes: advantage on cooking checks, frees up your hands",
      "Spoon sometimes casts Prestidigitation randomly (food changes color, taste, or temperature)",
      "Pan is sentient and gives unsolicited cooking advice (disadvantage if you ignore it)",
      "Made by: Mages' Guild Kitchen Enchanters"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 7
  },
  "a_parasol_for_floating_and_1": {
    "id": "a_parasol_for_floating_and_1",
    "name": "Peach's Parasol",
    "description": "A parasol for floating and shielding.",
    "category": "equipment",
    "price": 20000,
    "icon": "☂️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Float: Reduce fall speed to 10ft/round",
      "Shield: +1 AC when open",
      "Can glide 20ft horizontally"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Parasol Case",
    "levelRequirement": 5
  },
  "a_partially_burned_scroll_from": {
    "id": "a_partially_burned_scroll_from",
    "name": "Kamek's Scorched Spell Scroll",
    "description": "A partially burned scroll from Kamek's personal war spellbook.",
    "category": "equipment",
    "price": 8600,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Cast spell on scroll: polymorphs target into random object (1 hour, WIS save DC 15)",
      "One use only: scroll crumbles after reading",
      "Pronunciation unclear: 30% chance you polymorph yourself instead",
      "Kamek signature: wizards recognize his style (advantage on Arcana)",
      "Made by: Royal Magikoopa Kamek"
    ],
    "vendor": "wario_land",
    "shippedBy": "Arcane Archives",
    "levelRequirement": 9
  },
  "a_pendant_that_pulses_with": {
    "id": "a_pendant_that_pulses_with",
    "name": "Necrotic Heart Pendant",
    "description": "A pendant that pulses with the heartbeat of the dead. Wears the weight of forgotten memories and allows the wearer to commune with undead spirits. Its glow dims if the wearer is injured.",
    "category": "equipment",
    "price": 2800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants 10% chance to heal 10% of HP per turn if undead enemy is nearby",
      "Communion: Once per battle, allows the wearer to speak with a nearby undead entity for 3 seconds",
      "Pulse of the Dead: When damaged, the pendant temporarily grants +20% necromancy damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "a_piece_of_bowser_s": {
    "id": "a_piece_of_bowser_s",
    "name": "Bowser's Shell Fragment Shield (Chipped)",
    "description": "A piece of Bowser's shell, cracked during the siege of Toad Town.",
    "category": "equipment",
    "price": 5200,
    "icon": "🐢",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 AC against fire damage (residual Bowser magic)",
      "Shield is heavy: disadvantage on Stealth checks",
      "Koopas recognize it: advantage on Charisma with Koopa Troop defectors",
      "Shell still warm: you feel Bowser's rage, advantage on Intimidation, disadvantage on Persuasion",
      "Made by: Wario Land Battlefield Salvage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package",
    "levelRequirement": 5
  },
  "a_pink_brick_from_the": {
    "id": "a_pink_brick_from_the",
    "name": "Peach's Castle Brick",
    "description": "A pink brick from the castle walls, stamped with the royal crest.",
    "category": "equipment",
    "price": 3900,
    "icon": "🧱",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Use as thrown weapon: 1d6 bludgeoning (20ft range)",
      "Royal nostalgia: advantage on History checks about the kingdom",
      "Heavy and awkward: disadvantage on ranged attack with it",
      "Collectors seek it: can sell for 2x price to right buyer",
      "Made by: Castle Architecture (Pre-War Era)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rubble Runners",
    "levelRequirement": 3
  },
  "a_pistol_that_shoots_garlic": {
    "id": "a_pistol_that_shoots_garlic",
    "name": "Wario's Garlic Gun",
    "description": "A pistol that shoots garlic cloves – Wario's anti-vampire special!",
    "category": "equipment",
    "price": 11000,
    "icon": "🔫",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Ranged attack: 20/60 ft, 1d6 piercing + garlic (advantage vs. undead, they must save DC 12 CON or poisoned)",
      "10 shots: Reload with garlic bulbs",
      "Gimmick: Gun smells forever – disadvantage on social encounters",
      "Made by: Wario's Weapon Workshop"
    ],
    "vendor": "wario_land",
    "shippedBy": "Garlic Grenade Delivery",
    "levelRequirement": 5
  },
  "a_poorly_stitched_doll_that_1": {
    "id": "a_poorly_stitched_doll_that_1",
    "name": "Bootleg Waluigi Doll",
    "description": "A poorly stitched doll that looks like Waluigi, but with extra lanky arms.",
    "category": "equipment",
    "price": 5200,
    "icon": "🎎",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Throw as a distraction: 20ft range, creates a minor illusion of Waluigi laughing (DC 12 Wisdom save or foe is distracted for 1 round)",
      "Doll's arms tangle easily: disadvantage on Sleight of Hand if you try to repair it",
      "Waluigi purists hate it: advantage on Intimidation with Mario fans (they think it's cursed)",
      "Made by: Shady Mushroom Kingdom Toy Factory"
    ],
    "vendor": "wario_land",
    "shippedBy": "Questionable Parcel",
    "levelRequirement": 4
  },
  "a_poster_with_your_face": {
    "id": "a_poster_with_your_face",
    "name": "Wario's Wild West Wanted Poster",
    "description": "A poster with your face (or Wario's).",
    "category": "equipment",
    "price": 4100,
    "icon": "📜",
    "stock": 14,
    "rarity": "common",
    "effects": [
      "Show for +1 Intimidation bounties",
      "Poster old: disadvantage on current",
      "Western: +1 Deception outlaws",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wanted Wagon",
    "levelRequirement": 4
  },
  "a_potent_grenade_that_explodes_1": {
    "id": "a_potent_grenade_that_explodes_1",
    "name": "Wario's Garlic Grenade",
    "description": "A potent grenade that explodes in a cloud of overwhelmingly pungent garlic. Wario swears by it.",
    "category": "consumables",
    "price": 800,
    "icon": "🧄",
    "stock": 30,
    "rarity": "common",
    "effects": [
      "Thrown (30ft): 10ft radius cloud of garlic",
      "Creatures in cloud must make CON save or be Poisoned and nauseated for 1 minute",
      "Vampires and creatures with keen smell have disadvantage on the save"
    ],
    "vendor": "Wario Land",
    "shippedBy": "Greasy Paper Bag",
    "levelRequirement": 1
  },
  "a_potion_that_is_definitely": {
    "id": "a_potion_that_is_definitely",
    "name": "Wario's 'Definitely Magic' Potion",
    "description": "A potion that is definitely, probably, maybe magical. 60% of the time, it works every time.",
    "category": "equipment",
    "price": 18500,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Drink as an action: roll 1d6 - 1-3: no effect (it's just garlic water), 4-5: gain 1d10 temporary HP, 6: gain +2 to Strength for 1 hour",
      "After drinking, you must succeed DC 13 Constitution save or be poisoned for 1 round (questionable ingredients)",
      "Bottle is made of cheap glass: 20% chance it breaks in your bag, soaking everything with garlic smell",
      "Potion has a '100% Satisfaction Guarantee' sticker (Wario's face is on the sticker, winking)",
      "Made by: Wario Land Alchemy (Certified by Wario Himself)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Bottle Service",
    "levelRequirement": 6
  },
  "a_power_up_that_fell": {
    "id": "a_power_up_that_fell",
    "name": "Wario's 'Acquired' Mario Power-Up",
    "description": "A power-up that fell off the back of a truck. Definitely not stolen.",
    "category": "premium",
    "price": 24500,
    "icon": "⭐",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "It's a Fire Flower... but it's been modified': you can cast Burning Hands once per day (DC 13)",
      "After use, you must make a DC 10 Wisdom save or become convinced you're Mario (disadvantage on Charisma checks, you say 'Mama mia!' constantly)",
      "Mario's lawyers may appear: 5% chance per use that a celestial attorney shows up and demands the power-up back (DM-controlled, just annoying)",
      "Power-up is clearly repainted: original red is visible under yellow paint",
      "Made by: 'Found' by Wario (Allegedly)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shady Delivery",
    "levelRequirement": 7
  },
  "a_printing_press_to_spread": {
    "id": "a_printing_press_to_spread",
    "name": "The 'Free Croak' Press",
    "description": "A printing press to spread the message of liberation.",
    "category": "faction",
    "price": 40000,
    "icon": "📰",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Increases recruitment",
      "Boosts Loyalty significantly"
    ],
    "vendor": "rogueport_black_market",
    "factionBonus": {
      "loyalty": 15,
      "diplomacy": 5
    }
  },
  "a_pulsing_molten_core_encased_1": {
    "id": "a_pulsing_molten_core_encased_1",
    "name": "Forgeheart Core",
    "description": "A pulsing molten core encased in iron plate, rumored to be the heart of a defunct industrial giant. Increases stamina regeneration and grants temporary heat resistance in industrial zones.",
    "category": "equipment",
    "price": 3800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Regenerates 2 stamina per minute while active",
      "Grants +20% heat resistance",
      "Slightly increases damage against iron constructs"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6
  },
  "a_rare_fungus_radiating_powerful_1": {
    "id": "a_rare_fungus_radiating_powerful_1",
    "name": "Golden Mushroom",
    "description": "A rare fungus radiating powerful healing energy that glows with the essence of fallen monarchs. When consumed, it restores 3d6 HP and grants temporary immunity to psychic backlash, but its glow attracts attention from the Onyx Hand’s enforcers. Harvested only from the Whispering Caves beneath the Regal Throne.",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores 3d6 HP upon consumption",
      "Grants temporary immunity to psychic backlash",
      "Attracts attention from Onyx Hand enforcers",
      "Requires attunement by a spellcaster",
      "10% chance to trigger hallucinogenic visions",
      "Crafted by: Iron Legion"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 5
  },
  "a_relic_forged_from_the": {
    "id": "a_relic_forged_from_the",
    "name": "Echo of the Triforce",
    "description": "A relic forged from the same energy that birthed the Triforce itself this item grants temporary buffs based on the wielder’s current state. When activated it grants strength +20% and speed +15% for 10 seconds.",
    "price": 2000,
    "icon": "🎭",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+20% Strength for 10 seconds",
      "+15% Speed for 10 seconds",
      "Grants 50% chance to dodge next attack"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "a_relic_from_the_blocked": {
    "id": "a_relic_from_the_blocked",
    "name": "Star Road Key",
    "description": "A relic from the blocked Star Road, rumored to open hidden portals",
    "price": 45000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Unlocks the Star Road’s cryptic gate if held during a full moon",
      "Grants 100% chance to bypass all known faction checkpoints",
      "Causes minor data corruption in nearby servers",
      "Triggers “Memory Echo” when used near Pianta Village",
      "Must be used in conjunction with a confirmed Envoys’ map fragment",
      "Only one such key exists; lost after Don Pianta’s bridge cut"
    ],
    "vendor": "internet",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 10
  },
  "a_relic_from_the_depths_1": {
    "id": "a_relic_from_the_depths_1",
    "name": "Void Touched Amulet",
    "description": "A relic from the depths of the Feywild, this amulet pulses with the energy of lost time and forgotten gods. Worn by those who dare enter the Void, it grants temporary invulnerability to magical attacks—but at the cost of 1d6 damage per turn if the wearer does not maintain focus. The amulet remembers the wearer’s last known location, making it perfect for escaping Gehenna’s labyrinthine halls.",
    "category": "equipment",
    "price": 8000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Grants 1d6 temporary invulnerability to magical damage",
      "Grants +3 to perception checks when navigating maze-like environments",
      "Causes 1d6 damage to the wearer per turn if not focused",
      "Can track the wearer’s last known location (even across time loops)",
      "Requires attunement by a caster with 5+ years of training",
      "If used in the Feywild, causes minor dimensional rifts for 30 seconds",
      "Crafted by: Pokémon League (with assistance from the Feywild’s Trickster Court)"
    ],
    "vendor": "kivotos",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 8
  },
  "a_relic_from_the_time": {
    "id": "a_relic_from_the_time",
    "name": "Feywild Talisman",
    "description": "A relic from the time loops of the Fey courts",
    "category": "equipment",
    "price": 4200,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants temporary resistance to time loops",
      "10% chance to disrupt enemy perception during combat",
      "Causes wearer to hear whispers from trickster spirits",
      "If used in combat during a time loop, triggers a 30 second rewind",
      "Must be attuned to a Fey court by a bard or druid",
      "Crafted by: Koopa Postal with Feywild courier stamps"
    ],
    "vendor": "earth_land",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7
  },
  "a_relic_of_drowned_sorcerers_1": {
    "id": "a_relic_of_drowned_sorcerers_1",
    "name": "Tongue of the Tide",
    "description": "A relic of drowned sorcerers, whispered to speak with ocean depths",
    "category": "equipment",
    "price": 1200,
    "icon": "🌊",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Grants temporary hydrophobic resistance while submerged",
      "Can cast a 1d4 damage wave when submerged and struck",
      "Voice of the tide can whisper secrets to allies within 10m",
      "Fails if worn by non-swimmer or non-creature with aquatic affinity",
      "Crafted by: Chain Chomp Courier",
      "Linked to: Rakasha Spirit Walkers"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 4
  }
};
