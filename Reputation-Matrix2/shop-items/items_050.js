// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_050 = {
  "wario_land_yoshi_war_saddle": {
    "id": "wario_land_yoshi_war_saddle",
    "name": "Yoshi War Saddle (Bloodstained)",
    "description": "A saddle from a Yoshi cavalry unit. Wario cleaned it with garlic water.",
    "category": "equipment",
    "price": 620,
    "icon": "🐎",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Fit to any mount: +10 speed for 1 hour per day (war-trained)",
      "Saddle smells like garlic and war: disadvantage on Stealth, advantage on Intimidation",
      "Yoshis are sad when they see it: disadvantage on Animal Handling with Yoshis",
      "Comes with 'war stories' (Wario's fan fiction about himself)",
      "Made by: Wario Land Cavalry Surplus"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wario Express",
    "levelRequirement": 5
  },
  "wario_painting_bootleg_royal_family": {
    "id": "wario_painting_bootleg_royal_family",
    "name": "Painting: Bootleg Mushroom Royal Family Portrait",
    "description": "A slightly off-model Peach, Mario, and Luigi. Mario’s mustache is crooked and Peach looks… tired.",
    "category": "equipment",
    "price": 94,
    "icon": "🖼️",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Base Décor: While displayed, you gain +1 to Charisma (Deception) checks when pretending to be a 'friend of the crown'.",
      "Any NPC truly loyal to Peach gets disadvantage on Charisma checks toward the owner (they’re offended by the likeness).",
      "Once per day: You can study the faces for advantage on one Insight check about court politics / loyalties.",
      "The artist signed it ‘Peech’ in the corner."
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 4
  },
  "wario_painting_bootleg_waluigi_pinup": {
    "id": "wario_painting_bootleg_waluigi_pinup",
    "name": "Painting: Bootleg Waluigi Pin-Up Poster",
    "description": "An overly dramatic, long-legged painting of Waluigi posing with a rose. It’s… a lot.",
    "category": "equipment",
    "price": 95,
    "icon": "🖼️",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Base Décor: While in a room, creatures gain +1 to Charisma (Performance) checks (the confidence is contagious).",
      "Anyone who fails a DC 10 Wisdom save upon first seeing it bursts into awkward laughter (noisy, ruins Stealth).",
      "Once per long rest: You can channel ‘Waa energy’ to reroll a failed Dexterity (Acrobatics) check.",
      "Obviously a knockoff; Waluigi has never posed for this. Allegedly."
    ],
    "vendor": "wario_land",
    "shippedBy": "Folded Poster Tube",
    "levelRequirement": 4
  },
  "wario_painting_burning_of_bowsers_keep": {
    "id": "wario_painting_burning_of_bowsers_keep",
    "name": "Painting: Burning of Bowser’s Keep",
    "description": "A chaotic scene of Bowser’s fortress in flames, Magikoopas fleeing in every direction.",
    "category": "equipment",
    "price": 620,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Base Décor: Creatures in the room gain advantage on their first save vs. fire damage each day.",
      "Koopa NPCs who see it must make a DC 12 Wisdom save or become sullen and less cooperative (disadvantage on their social checks for 1 hour).",
      "Once per long rest: Meditating on the painting grants resistance to fire for 10 minutes.",
      "The frame smells faintly of soot and singed shell."
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell-Singed Shipment",
    "levelRequirement": 5
  },
  "wario_painting_fall_of_peach_castle": {
    "id": "wario_painting_fall_of_peach_castle",
    "name": "Painting: The Fall of Peach's Castle",
    "description": "A dramatic battlefield scene of Peach’s Castle under siege, with suspiciously heroic lighting on Wario.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Base Décor: While hung, allies in the same building have advantage on their first saving throw vs. fear each day (hardened by tragedy).",
      "Toad loyalists who see it must make a DC 12 Wisdom save or become hostile (it… edits the history in Wario’s favor).",
      "Once per week: Stare at it during a short rest to gain inspiration for one history- or politics-related check.",
      "Definitely painted after the fact, with Wario added in the foreground later."
    ],
    "vendor": "wario_land",
    "shippedBy": "Shady Relic Relay",
    "levelRequirement": 6
  },
  "wario_painting_glorious_self_portrait": {
    "id": "wario_painting_glorious_self_portrait",
    "name": "Painting: Wario's Glorious Self-Portrait",
    "description": "An enormous oil painting of Wario reclining on a pile of coins. The eyes definitely follow you.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Base Décor: While hung in a room, all allies resting there gain +1 temporary HP after a long rest (self-confidence by osmosis).",
      "Once per day: A creature in the room can reroll a failed Charisma (Intimidation) check (must use new roll).",
      "Any attempt to vandalize the painting causes it to shout 'WAAAH!' loudly (disadvantage on Stealth during the attempt).",
      "Clearly a mass-produced print, but Wario swears it's 'the original'."
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud",
    "levelRequirement": 5
  },
  "wario_painting_koopa_truce_on_the_bridge": {
    "id": "wario_painting_koopa_truce_on_the_bridge",
    "name": "Painting: Koopa Truce on the Bridge",
    "description": "Two Koopa captains shaking hands over a broken bridge, banners lowered, smoke still rising nearby.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Base Décor: Negotiations held in this room gain advantage on one key social roll (GM choice).",
      "Koopa NPCs in the room gain +1 morale and are less likely to flee (RP effect).",
      "Once per week: You can invoke the painting to automatically end a minor intra-party argument (everyone calms down).",
      "Bridge in the painting occasionally drips a single illusionary drop of water."
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell Sound Service",
    "levelRequirement": 6
  },
  "wario_painting_last_stand_of_the_toad_brigade": {
    "id": "wario_painting_last_stand_of_the_toad_brigade",
    "name": "Painting: Last Stand of the Toad Brigade",
    "description": "A moving tableau of Toad soldiers making a heroic final stand atop a crumbling parapet.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Base Décor: Allies who take a short or long rest in sight of this painting gain +1 to their next death saving throw that day.",
      "Once per day: A viewer can gain advantage on one saving throw against being frightened or charmed.",
      "Toads who see it often salute unconsciously, granting +1 to Charisma (Persuasion) with them for 1 hour.",
      "Wario bought it from a Toad veteran for 'totally fair' prices."
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Trot Transport",
    "levelRequirement": 5
  },
  "wario_painting_luigi_missing_in_action": {
    "id": "wario_painting_luigi_missing_in_action",
    "name": "Painting: Luigi – Missing in Action",
    "description": "A melancholic portrait of Luigi looking out over a battlefield, cape torn, eyes uncertain.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Base Décor: While resting in this room, creatures gain advantage on one Wisdom (Insight) check per day (contemplative mood).",
      "Once per day: A viewer can reroll a failed Wisdom save against fear or despair.",
      "Luigi sympathizers who see it are more open: +1 to Persuasion with them for 24 hours.",
      "Signed only with a small, green ‘L’ in the corner – maybe Luigi painted it himself before vanishing."
    ],
    "vendor": "wario_land",
    "shippedBy": "Spooky Shipment",
    "levelRequirement": 5
  },
  "wario_painting_ruins_of_the_royal_garden": {
    "id": "wario_painting_ruins_of_the_royal_garden",
    "name": "Painting: Ruins of the Royal Garden",
    "description": "Once-blooming flowerbeds now scorched and overgrown, with a single pristine pink rose in the center.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Base Décor: While present, herbalism or gardening-related checks in the same space gain advantage.",
      "Once per day: A viewer may meditate for 10 minutes to recover 1 expended Hit Die (melancholic rest).",
      "If watered with a potion, the painted rose briefly glows; the next healing effect in that room heals +1 HP.",
      "Tiny Wario watermark hidden in the dirt near the corner."
    ],
    "vendor": "wario_land",
    "shippedBy": "Floral Freight",
    "levelRequirement": 5
  },
  "wario_painting_the_first_toast_to_freedom": {
    "id": "wario_painting_the_first_toast_to_freedom",
    "name": "Painting: The First Toast to Freedom",
    "description": "Rebels and former royal guards raising mismatched mugs in a ruined Toad Town tavern.",
    "category": "equipment",
    "price": 95,
    "icon": "🖼️",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Base Décor: Short rests taken here restore +1 extra HP (if you spend any Hit Dice).",
      "Advantage on Charisma checks to negotiate truces or ceasefires made in the same room.",
      "Once per week: You can invoke the scene to gain inspiration on a speech or rallying cry.",
      "Someone painted Wario into the background clinking a mug; he definitely wasn't there."
    ],
    "vendor": "wario_land",
    "shippedBy": "Barrel of Prints",
    "levelRequirement": 4
  },
  "wario_painting_warios_war_room_map": {
    "id": "wario_painting_warios_war_room_map",
    "name": "Painting: Wario’s War Room Tactical Map",
    "description": "A huge framed map of the Mushroom Kingdom with poorly drawn arrows and ‘X’s where Wario thinks treasure is.",
    "category": "equipment",
    "price": 96,
    "icon": "🗺️",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Base Décor: While planning on it for 10 minutes, party gains +1 to their next group Initiative roll.",
      "1/day: A character can gain advantage on one Intelligence (History or Investigation) check related to the Mushroom Kingdom.",
      "20% of the treasure ‘X’s are actually real leads (DM may turn one into an adventure hook).",
      "Half the notes are doodles of Mario getting punched."
    ],
    "vendor": "wario_land",
    "shippedBy": "Oversized Roll",
    "levelRequirement": 5
  },
  "wario_painting_wartime_market_bazaar": {
    "id": "wario_painting_wartime_market_bazaar",
    "name": "Painting: Wartime Market Bazaar",
    "description": "A bustling black-market scene in Rogueport, with Toads, Koopas, and Shy Guys trading under Wario’s big banner.",
    "category": "equipment",
    "price": 96,
    "icon": "🖼️",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Base Décor: While the painting is up, buying or selling from ‘shady’ NPCs in that location grants +5% better prices (round in your favor).",
      "Once per day: A creature can gain advantage on one Charisma (Deception) or (Persuasion) check related to trade.",
      "Guards who see it gain suspicion: disadvantage on Stealth checks while they’re around.",
      "Wario insists this is ‘documentary realism’. There is a tiny copyright notice at the bottom."
    ],
    "vendor": "wario_land",
    "shippedBy": "Coin-Operated Crate",
    "levelRequirement": 4
  },
  "wario_painting_wartime_propaganda_poster": {
    "id": "wario_painting_wartime_propaganda_poster",
    "name": "Painting: ‘Wario Will Save the Kingdom!’ Propaganda",
    "description": "A gaudy, stylized war poster showing Wario heroically punching Bowser and collecting taxes at the same time.",
    "category": "equipment",
    "price": 96,
    "icon": "🖼️",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Base Décor: +1 to the first Charisma (Intimidation) or (Persuasion) check you make on new visitors, as long as you loudly mention Wario.",
      "Once per day: You can ‘rally’ allies in the room, giving them +1 to their next attack roll.",
      "Anyone looking at it for too long must make a DC 10 Wis save or feel an irrational urge to buy Wario-brand products.",
      "Printed by the thousands; this is… one of them."
    ],
    "vendor": "wario_land",
    "shippedBy": "Flyer Drop",
    "levelRequirement": 4
  },
  "wario_painting_yoshi_cavalry_charge": {
    "id": "wario_painting_yoshi_cavalry_charge",
    "name": "Painting: Yoshi Cavalry Charge",
    "description": "A sweeping landscape of mounted Yoshis charging across a sunflower field toward Koopa lines.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Base Décor: Creatures who begin combat after resting in this room gain +5 ft movement on their first round.",
      "Once per day: A rider or mount-user can gain advantage on one Animal Handling check.",
      "Yoshis who see it become friendly unless attacked: advantage on social checks with them.",
      "The sun in the painting seems to move slowly over the canvas with the real day/night cycle."
    ],
    "vendor": "wario_land",
    "shippedBy": "Egg Express",
    "levelRequirement": 5
  },
  "wario_signed_waluigi_poster": {
    "id": "wario_signed_waluigi_poster",
    "name": "Wario-Signed Waluigi Poster",
    "description": "A poster of Waluigi with Wario's messy signature over it.",
    "category": "equipment",
    "price": 97,
    "icon": "🖼️",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Hang as a lucky charm': advantage on one Charisma check per day (Waluigi's lanky luck)",
      "Poster curls: disadvantage on checks if not flattened",
      "Wario's signature smudges: reveals a hidden map to a minor treasure (1d100 gp)",
      "Made by: WarioWare Printing (Low Quality)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Poster Tube",
    "levelRequirement": 4
  },
  "wario_wario_ware_microgame_console": {
    "id": "wario_wario_ware_microgame_console",
    "name": "WarioWare Microgame Console (Gimmick Gadget!)",
    "description": "Play quick games to sharpen reflexes – Wario's mini-challenges!",
    "category": "equipment",
    "price": 630,
    "icon": "🎮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Play 1 microgame (1 minute): Gain advantage on one Dexterity check next encounter",
      "Console has 10 games: Random effects (fun or frustrating)",
      "Battery dies randomly: 20% chance it fails when needed",
      "Made by: WarioWare Inc."
    ],
    "vendor": "wario_land",
    "shippedBy": "Game Gear Go",
    "levelRequirement": 5
  },
  "warios_franchise": {
    "id": "warios_franchise",
    "name": "WarioWare, Inc. Majority Share",
    "description": "Buy Wario's company. You become the owner of Wario's Warehouse.",
    "category": "premium",
    "price": 670000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "All shop items become free",
      "Generate 10,000 Gold Coins daily",
      "Wario becomes your employee (he hates this)",
      "You gain a mustache"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Legal Team",
    "levelRequirement": 15
  },
  "warp_pipe_installation": {
    "id": "warp_pipe_installation",
    "name": "Warp Pipe Installation",
    "description": "A licensed plumber from the Underground Network installs a permanent warp pipe between two locations.",
    "category": "services",
    "price": 7900,
    "icon": "🪨",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Creates a permanent two-way pipe portal (max 200ft apart)",
      "Pipe is indestructible (AC 20, 100 HP, immune to spells)",
      "Requires a 'Pipe License' (DM discretion)"
    ],
    "vendor": "warp_plumbing_corp",
    "shippedBy": "Underground Crew",
    "levelRequirement": 8
  },
  "warriors_chaos_chaos_resistance_training": {
    "id": "warriors_chaos_chaos_resistance_training",
    "name": "Warriors Chaos Chaos Resistance Training",
    "description": "Learn to resist chaos by embracing it.",
    "category": "services",
    "price": 3100,
    "icon": "☯️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on saves vs. confusion and wild magic for 7 days",
      "You become slightly unpredictable (DM can have you act oddly once per day)",
      "Your alignment shifts one step toward Chaotic for the duration",
      "Made by: Warriors Chaos Boot Camp"
    ],
    "vendor": "warriors_chaos",
    "shippedBy": "Chaos Warp",
    "levelRequirement": 7
  },
  "warriors_chaos_chaos_theory_basics": {
    "id": "warriors_chaos_chaos_theory_basics",
    "name": "Warriors Chaos Chaos Theory Basics",
    "description": "Learn that a butterfly can cause a hurricane.",
    "category": "services",
    "price": 630,
    "icon": "🦋",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on checks involving cause and effect for 7 days",
      "You overthink everything (disadvantage on quick decisions)",
      "You get a butterfly that follows you (cosmetic, but it's there)",
      "Made by: Warriors Chaos Theory"
    ],
    "vendor": "warriors_chaos",
    "shippedBy": "Chaos Theory",
    "levelRequirement": 5
  },
  "warriors_chaos_mutant_wraps": {
    "id": "warriors_chaos_mutant_wraps",
    "name": "Warriors Chaos Mutant Wraps",
    "description": "Bandages that adapt to wounds.",
    "price": 3100,
    "icon": "🩹",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Heal 1d6 HP when wrapped (once per day)",
      "Wraps resist chaos mutations slightly",
      "Change color randomly",
      "Made by: Chaos Healers"
    ],
    "vendor": "warriors_chaos_tent",
    "shippedBy": "Twisted Bandage",
    "levelRequirement": 6
  },
  "warriors_chaos_mutation_masher": {
    "id": "warriors_chaos_mutation_masher",
    "name": "Warriors Chaos Mutation Masher",
    "description": "Masher that 'mutates' mush randomly.",
    "category": "equipment",
    "price": 3100,
    "icon": "🥣",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Mashes with chaos; advantage on random effect recipes",
      "Alters texture unpredictably",
      "Mutates your grip (itchy)",
      "Made by: Chaos Toolers"
    ],
    "vendor": "warriors_chaos_camp",
    "shippedBy": "Mutant Mash Mail",
    "levelRequirement": 5
  },
  "warriors_chaos_mutation_mush_recipe": {
    "id": "warriors_chaos_mutation_mush_recipe",
    "name": "Recipe: Warriors Chaos Mutation Mush",
    "description": "Chaotic mush that alters the eater slightly.",
    "price": 3100,
    "icon": "🥣",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Teaches recipe: Stir randomly (25 min); eat for random effect: +1 stat or minor mutation (1 hour)",
      "Requires: Weird ingredients; unpredictable",
      "Chaos blesses or curses",
      "Made by: Chaos Cooks"
    ],
    "vendor": "warriors_chaos_camp",
    "shippedBy": "Mutant Mush Memo",
    "levelRequirement": 5
  },
  "warriors_chaos_mutation_potion_service": {
    "id": "warriors_chaos_mutation_potion_service",
    "name": "Warriors Chaos Mutation Potion Service",
    "description": "Temporary chaotic twist.",
    "price": 630,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Drink: Random +1 stat for 1 hour, -1 another",
      "50% chance extra arm (advantage on climbs)",
      "Reverts with weird itch",
      "Made by: Chaos Sorcerers"
    ],
    "vendor": "warriors_chaos_camp",
    "shippedBy": "Bubbling Vial",
    "levelRequirement": 5
  },
  "weights_treadmills_and_protein_shakes": {
    "id": "weights_treadmills_and_protein_shakes",
    "name": "The 'Iron Toad' Gym",
    "description": "Weights, treadmills, and protein shakes.",
    "category": "faction",
    "price": 97,
    "icon": "💪",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "+1 STR/CON to active duty toads over time",
      "Morale boost"
    ],
    "vendor": "toad_town_market",
    "factionBonus": {
      "combatReadiness": 8,
      "morale": 5
    }
  },
  "weldrhom_battle_axe_head": {
    "id": "weldrhom_battle_axe_head",
    "name": "Weldrhom Battle Axe Head",
    "description": "A replaceable axe head etched with tribal runes for wilderness survival.",
    "category": "equipment",
    "price": 630,
    "icon": "🪓",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Attaches to any axe: +1 to damage rolls against beasts",
      "Once per day: Chop wood for 2x efficiency (Survival check advantage)",
      "Runes glow in danger (passive +2 to Initiative in wilds)",
      "Requires haft – not sold separately"
    ],
    "vendor": "weldrhom",
    "shippedBy": "Tribal Runner",
    "levelRequirement": 5
  },
  "weldrhom_caravan_spice_grinder": {
    "id": "weldrhom_caravan_spice_grinder",
    "name": "Weldrhom Caravan Spice Grinder",
    "description": "Portable grinder for desert rubs and spices.",
    "category": "equipment",
    "price": 630,
    "icon": "🌶️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Grinds fine for +1 to cooking checks with spices; enhances flavor (duration +1 hour)",
      "Compact for travel; withstands sand",
      "Clogs with wet spices (clean DC 10)",
      "Made by: Caravan Smiths"
    ],
    "vendor": "weldrhom_caravan",
    "shippedBy": "Spice Sand Shaker",
    "levelRequirement": 5
  },
  "weldrhom_herb_garden_service": {
    "id": "weldrhom_herb_garden_service",
    "name": "Weldrhom Herb Garden Service",
    "description": "Setup a portable garden for fresh ingredients.",
    "price": 640,
    "icon": "🌱",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Produces 1d6 healing herbs per week (each heals 1d4 HP)",
      "Advantage on Medicine checks using these herbs",
      "Garden attracts rabbits – free meat if you catch them",
      "Made by: Weldrhom Druids"
    ],
    "vendor": "weldrhom_farmstead",
    "shippedBy": "Potted Delivery",
    "levelRequirement": 5
  },
  "weldrhom_nomad_veil": {
    "id": "weldrhom_nomad_veil",
    "name": "Weldrhom Nomad Veil",
    "description": "Light veil for desert wanderers, filtering sand.",
    "category": "equipment",
    "price": 640,
    "icon": "🧕",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Immunity to sand blindness or dust effects",
      "+1 to Constitution saves in arid environments",
      "Veil muffles speech (disadvantage on verbal spells)",
      "Made by: Weldrhom Craftsfolk"
    ],
    "vendor": "weldrhom_caravan",
    "shippedBy": "Sandproof Pouch",
    "levelRequirement": 5
  },
  "weldrhom_recipe_spark_grilled_meat": {
    "id": "weldrhom_recipe_spark_grilled_meat",
    "name": "Recipe: Weldrhom Spark-Grilled Meat",
    "description": "Meat cooked with lightning.",
    "price": 3100,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +1 to attack rolls for 1 hour (energizing)",
      "Your hair stands on end: disadvantage on Charisma checks",
      "You glow faintly: disadvantage on Stealth, advantage on Intimidation",
      "Made by: Weldrhom Grill Masters"
    ],
    "vendor": "weldrhom",
    "shippedBy": "Spirit Forge",
    "levelRequirement": 7
  },
  "weldrhom_soul_welding": {
    "id": "weldrhom_soul_welding",
    "name": "Weldrhom Soul Welding",
    "description": "Repairs a fractured soul with metaphysical solder.",
    "category": "services",
    "price": 3100,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Repairs one level of exhaustion caused by soul damage",
      "Your soul now has a slight metallic aftertaste",
      "Clerics detect you as 'slightly warped' – disadvantage on Religion checks with them",
      "Made by: Weldrhom Soul-Smiths"
    ],
    "vendor": "weldrhom",
    "shippedBy": "Spirit Forge",
    "levelRequirement": 7
  },
  "weldrhom_spice_rub_meat_recipe": {
    "id": "weldrhom_spice_rub_meat_recipe",
    "name": "Recipe: Weldrhom Spice-Rubbed Meat",
    "description": "Tender meat seasoned with desert spices for resilience.",
    "price": 640,
    "icon": "🥩",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Rub and grill (45 min); eat to gain resistance to dehydration and +1 Constitution save for 6 hours",
      "Requires: Meat and spices; nomad favorite",
      "Spicy kick – might make you sweat",
      "Made by: Weldrhom Caravaneers"
    ],
    "vendor": "weldrhom_caravan",
    "shippedBy": "Spicy Scroll",
    "levelRequirement": 5
  },
  "wh_araby_dervish_spin_bowl": {
    "id": "wh_araby_dervish_spin_bowl",
    "name": "Wh Araby Dervish Spin Bowl",
    "description": "Spinning bowl for mixing tea.",
    "category": "equipment",
    "price": 640,
    "icon": "🍵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Spins for even mix; advantage on dance-inspired recipes",
      "Adds whirl energy (+1 duration)",
      "Dizzy if spun too long",
      "Made by: Dervish Crafters"
    ],
    "vendor": "wh_araby_temple",
    "shippedBy": "Spin Spice Shipment",
    "levelRequirement": 5
  },
  "wh_araby_dervish_whirl_skirt": {
    "id": "wh_araby_dervish_whirl_skirt",
    "name": "Wh Araby Dervish Whirl Skirt ",
    "description": "Skirt for spinning dances.",
    "price": 640,
    "icon": "👗",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Performance for dances",
      "Skirt creates minor wind (dust distraction)",
      "Trips if spun too fast",
      "Made by: Dervish Dancers"
    ],
    "vendor": "wh_araby_dance_hall",
    "shippedBy": "Silk Spin",
    "levelRequirement": 5
  },
  "wh_araby_sand_sculpture_service": {
    "id": "wh_araby_sand_sculpture_service",
    "name": "Wh Araby Sand Sculpture Service",
    "description": "Sculpt sand into temporary art.",
    "category": "services",
    "price": 640,
    "icon": "🏖️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Create a sand sculpture that functions as a minor illusion for 24 hours",
      "Sculpture is impressive: advantage on Charisma checks with art lovers",
      "It melts in rain (disadvantage in wet conditions)",
      "Made by: Wh Araby Artists"
    ],
    "vendor": "wh_araby",
    "shippedBy": "Sand Dune",
    "levelRequirement": 5
  },
  "wh_araby_sandstorm_beard_styling": {
    "id": "wh_araby_sandstorm_beard_styling",
    "name": "Wh Araby Sandstorm Beard Styling",
    "description": "Beard sculpted by desert winds.",
    "category": "services",
    "price": 640,
    "icon": "🌪️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Beard becomes majestic: +1 Charisma with other bearded folk for 7 days",
      "Sand gets everywhere: disadvantage on Sleight of Hand checks",
      "Beard whistles in wind (disadvantage on Stealth in storms)",
      "Made by: Wh Araby Stylists"
    ],
    "vendor": "wh_araby",
    "shippedBy": "Sand Courier",
    "levelRequirement": 5
  },
  "wh_araby_whirling_dervish_lesson_service": {
    "id": "wh_araby_whirling_dervish_lesson_service",
    "name": "Wh Araby Whirling Dervish Lesson Service",
    "description": "Spin for hypnotic effect.",
    "price": 640,
    "icon": "🌀",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Spin: Charm one foe (DC 12 Wis) for 1 round",
      "Advantage on Performance",
      "Dizzy after: Disadvantage on next action",
      "Made by: Dervish Masters"
    ],
    "vendor": "wh_araby_temple",
    "shippedBy": "Silk Scarf",
    "levelRequirement": 5
  },
  "wh_araby_whirling_dervish_tea_recipe": {
    "id": "wh_araby_whirling_dervish_tea_recipe",
    "name": "Recipe: Wh Araby Whirling Dervish Tea",
    "description": "Herbal tea for spinning focus and energy.",
    "price": 640,
    "icon": "🍵",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Brew herbs (15 min); drink to gain advantage on Dexterity (Performance) for dances (2 hours)",
      "Requires: Dervish herbs; invigorating",
      "Spins without dizziness",
      "Made by: Araby Brewers"
    ],
    "vendor": "wh_araby_temple",
    "shippedBy": "Whirl Wind Whisk",
    "levelRequirement": 5
  },
  "whacka_bump": {
    "id": "whacka_bump",
    "name": "Whacka Bump",
    "description": "A pastry that looks like a lump from a Whacka. Tastes like guilt.",
    "category": "consumables",
    "price": 3100,
    "icon": "🍩",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores ALL HP and MP",
      "You feel like a terrible person"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Shameful Packaging",
    "levelRequirement": 5
  },
  "whacka_bump_fake": {
    "id": "whacka_bump_fake",
    "name": "Imitation Whacka Bump",
    "description": "Made of playdough. Do not eat.",
    "category": "curiosities",
    "price": 60,
    "icon": "🍩",
    "stock": 200,
    "rarity": "junk",
    "effects": [
      "Tastes like salt and dye",
      "No healing"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1
  },
  "whiskey_that_s_strong_garlic": {
    "id": "whiskey_that_s_strong_garlic",
    "name": "Wario's Wild West Whiskey",
    "description": "Whiskey that's 'strong' (garlic shot).",
    "category": "equipment",
    "price": 98,
    "icon": "🥃",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "+1 CON saves drunk",
      "Breath bad: disadvantage on social",
      "Western: +1 Intimidation",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Whiskey Wagon",
    "levelRequirement": 4
  },
  "whispering_garden_seeds": {
    "id": "whispering_garden_seeds",
    "name": "Whispering Garden Seeds",
    "description": "Seeds that grow into plants that speak in the voices of those who planted them.",
    "category": "curiosities",
    "price": 3100,
    "icon": "🌱",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Plant: grow a sentient plant that speaks in the voice of the planter",
      "Plant remembers everything the planter said near it",
      "If killed, it screams the last thing it heard — and everyone within 50ft hears it"
    ],
    "vendor": "fey_market",
    "shippedBy": "Soil-Wrapped Packet",
    "levelRequirement": 5
  },
  "whispering_scroll": {
    "id": "whispering_scroll",
    "name": "Whispering Scroll",
    "description": "A brittle parchment that softly murmurs secrets in a language you almost understand.",
    "category": "curiosities",
    "price": 3100,
    "icon": "📜",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Single Use: Grants knowledge of one obscure fact or a usable cantrip for 1 hour",
      "If unrolled at night it tells a helpful bedtime memory",
      "Chance to attract a curious scholar"
    ],
    "vendor": "bazaar_of_oddities",
    "shippedBy": "Silk Tube",
    "levelRequirement": 3
  },
  "white_paint_of_divine_righteousness": {
    "id": "white_paint_of_divine_righteousness",
    "name": "White Paint of Divine Righteousness",
    "description": "Be the good guy, whether you want to or not.",
    "category": "equipment",
    "price": 3100,
    "icon": "🎨",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Paint yourself white: advantage on saves vs. necrotic damage",
      "You must tell the truth: disadvantage on Deception checks",
      "Your teeth become visibly whiter (advantage on Charisma with dentists)",
      "Made by: Celestial Paint Co."
    ],
    "vendor": "servants_cosmic_paint",
    "shippedBy": "Holy Courier",
    "levelRequirement": 6
  },
  "wiggler_boots": {
    "id": "wiggler_boots",
    "name": "Wiggler Boots",
    "description": "Boots that make you bounce angrily when damaged.",
    "category": "equipment",
    "price": 3100,
    "icon": "👢",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "When hit: Gain +10 speed and +1d6 damage on next attack",
      "Effect stacks up to 3 times",
      "Calms after combat"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Boot Box",
    "levelRequirement": 5
  },
  "wiggler_segment": {
    "id": "wiggler_segment",
    "name": "Wiggler's Wrath Segment",
    "description": "A squirming orange segment from an angry Wiggler. Still pulsates with rage.",
    "category": "consumables",
    "price": 640,
    "icon": "🐛",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Throw: Explodes into 3d4 angry caterpillars",
      "Each caterpillar deals 1d4 Poison on contact",
      "Lasts 3 rounds, then they cry and leave",
      "You feel slightly guilty"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Leaf Wrap",
    "levelRequirement": 1
  },
  "wiggler_segment_armor": {
    "id": "wiggler_segment_armor",
    "name": "Wiggler Segment Plate",
    "description": "Orange segmented armor that squishes and stretches. Surprisingly flexible.",
    "category": "equipment",
    "price": 3100,
    "icon": "🐛",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "AC +2, but reduces speed by 5ft",
      "Resistance to Poison damage",
      "Can squeeze through 1ft openings",
      "Caterpillars think you're their mom"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Cocoon Wrap",
    "levelRequirement": 4
  },
  "wish_granting_ritual": {
    "id": "wish_granting_ritual",
    "name": "Wish Granting Ritual (Limited)",
    "description": "A master wizard performs a carefully controlled ritual to grant you one wish within reasonable bounds.",
    "category": "premium",
    "price": 680000,
    "icon": "✨",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "DM adjudicates wish (no 'wish for unlimited wishes')",
      "Wish can alter reality within DM-approved scope",
      "Wizard absorbs backlash; may demand payment/service in return",
      "Each wish has a 50% chance to create unintended consequences"
    ],
    "vendor": "arcane_institute",
    "shippedBy": "Ritual Ceremony",
    "levelRequirement": 14
  },
  "wish_loop_generator": {
    "id": "wish_loop_generator",
    "name": "Wish Loop Generator",
    "description": "Creates infinite wishes by exploiting a loophole in reality.",
    "category": "equipment",
    "price": 680000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Make infinite wishes (no limit, no monkey's paw, no consequences)",
      "Reality may file a complaint (DM rolls a d100 for 'reality stability')",
      "Made by: The Lawyer"
    ],
    "vendor": "wish_exploitation",
    "shippedBy": "Contractual Obligation",
    "levelRequirement": 85
  },
  "wish_wisp": {
    "id": "wish_wisp",
    "name": "Wish Wisp",
    "description": "A tiny floating ember that whispers promises. It responds to true yearning... for a price.",
    "category": "forbidden",
    "price": 690000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Single Use: Grant a wish subject to DM adjudication",
      "Wish may twist reality in small ways and attracts cosmic attention",
      "After use, the wisher loses one cherished memory",
      "It may fail (30 DC)"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Glass Vial",
    "levelRequirement": 15
  },
  "wishing_coin": {
    "id": "wishing_coin",
    "name": "Wishing Coin",
    "description": "A coin that whispers wishes to you while you sleep. Only one can be true.",
    "category": "premium",
    "price": 50000,
    "icon": "🪙",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Each night, you hear a whispered wish (DM chooses one)",
      "You may choose to fulfill it — but it costs 1d6 years of your life",
      "If you refuse, the coin whispers louder until you break"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Velvet Pouch",
    "levelRequirement": 10
  },
  "witcher_3_gwent_deck": {
    "id": "witcher_3_gwent_deck",
    "name": "Gwent Deck",
    "description": "A deck for playing strategic card games.",
    "category": "curiosities",
    "price": 640,
    "icon": "🃏",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Play Gwent: Win gold or info (DM mini-game)",
      "Collect cards for bonuses",
      "Addictive"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Card Box",
    "levelRequirement": 2
  },
  "witcher_silver_sword": {
    "id": "witcher_silver_sword",
    "name": "Silver Sword",
    "description": "A sword for slaying monsters.",
    "category": "equipment",
    "price": 7900,
    "icon": "🗡️",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "+2 vs monsters, extra 1d6 to aberrations",
      "Apply oils for bonuses (fire, poison)",
      "Mutagen slot"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Sword Sheath",
    "levelRequirement": 7
  },
  "wonder_flower": {
    "id": "wonder_flower",
    "name": "Wonder Flower",
    "description": "A flower that warps reality in unpredictable, psychedelic ways.",
    "category": "forbidden",
    "price": 50000,
    "icon": "🌺",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Single Use: Reality breaks for 1 hour.",
      "Inanimate objects come to life and sing.",
      "Gravity reverses.",
      "You might turn into a Goomba.",
      "DM Discretion (Maximum Chaos)"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Hallucinogenic Container",
    "levelRequirement": 8
  },
  "wonder_flower_seed": {
    "id": "wonder_flower_seed",
    "name": "Wonder Seed",
    "description": "A seed that warps reality permanently in a localized area.",
    "category": "curiosities",
    "price": 50000,
    "icon": "🌱",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Change the biome of a region instantly (Desert -> Ocean, etc.)",
      "Animate all inanimate objects in a city",
      "Gravity becomes optional",
      "Everyone turns into Goombas"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Talking Flower",
    "levelRequirement": 14
  },
  "world_of_warcraft_mount": {
    "id": "world_of_warcraft_mount",
    "name": "Epic Mount Whistle",
    "description": "Summons a fast mount.",
    "category": "equipment",
    "price": 8000,
    "icon": "🐎",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Summon mount (speed 60ft, fly option)",
      "Lasts until dismissed",
      "Requires attunement"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Whistle Chain",
    "levelRequirement": 6
  },
  "woven_from_the_laughter_of": {
    "id": "woven_from_the_laughter_of",
    "name": "Sugar Soul Amulet",
    "description": "Woven from the laughter of a thousand baking ghosts, this amulet pulses with the sweetness of forgotten pastries. When worn, it grants temporary immunity to fear and allows the wearer to hear the whispers of dough-folk spirits. But every time it glows, it drains a small piece of the wearer’s joy.",
    "category": "equipment",
    "price": 640,
    "icon": "🍞",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "+10% chance to evade magical traps",
      "Grants temporary immunity to fear for 1 round per use",
      "Suffers -5% HP per round when worn",
      "Can be enchanted by a baker with 300+ years of pastry lore",
      "Glows when the wearer is near a magical bakery",
      "Requires attunement by a human or doughfolk"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 3
  },
  "xenonesia_alien_fruit_jelly_recipe": {
    "id": "xenonesia_alien_fruit_jelly_recipe",
    "name": "Recipe: Xenonesia Alien Fruit Jelly",
    "description": "Wobbly jelly from exotic space fruits for mental clarity.",
    "price": 3100,
    "icon": "🍮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Teaches recipe: Gel fruits (40 min); eat to gain advantage on Intelligence saves for 2 hours and heal 1d6 psychic damage",
      "Requires: Alien fruits (forage DC 14); glows faintly",
      "Might cause weird dreams (inspiration or nightmare)",
      "Made by: Xenonesian Chefs"
    ],
    "vendor": "xenonesia_outpost",
    "shippedBy": "Jiggly Jar",
    "levelRequirement": 7
  },
  "xenonesia_alien_parasite_removal": {
    "id": "xenonesia_alien_parasite_removal",
    "name": "Xenonesia Alien Parasite Removal",
    "description": "Professional extraction of unwanted hitchhikers.",
    "category": "services",
    "price": 3100,
    "icon": "🪱",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Removes one parasitic entity (gives you a jar with it as a souvenir)",
      "Parasite is angry but makes a good conversation piece",
      "Advantage on Medicine checks, disadvantage on Charisma checks with the parasite's species",
      "Made by: Xenonesia Quarantine"
    ],
    "vendor": "xenonesia",
    "shippedBy": "Sterile Transport",
    "levelRequirement": 6
  },
  "xenonesia_alien_silk_shawl": {
    "id": "xenonesia_alien_silk_shawl",
    "name": "Xenonesia Alien Silk Shawl",
    "description": "Ethereal shawl woven from extraterrestrial threads.",
    "price": 3100,
    "icon": "🧣",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on saves against psychic effects for 1 hour when worn",
      "Shawl shifts colors for minor camouflage",
      "Attracts curious aliens (or bugs)",
      "Made by: Xenonesian Spinners"
    ],
    "vendor": "xenonesia_outpost",
    "shippedBy": "Stellar Silk Wrap",
    "levelRequirement": 6
  },
  "xenonesia_bio-enhancer": {
    "id": "xenonesia_bio enhancer",
    "name": "Xenonesia Bio-Enhancer",
    "description": "A syringe of alien retrovirus that temporarily enhances a specific biological function.",
    "category": "consumables",
    "price": 3100,
    "icon": "🧬",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Single Use: Choose one stat. Gain +4 to that stat for 1 hour",
      "After effect ends, take 1 level of exhaustion",
      "Side effects may include temporary skin discoloration or extra limbs"
    ],
    "vendor": "Xenonesia",
    "shippedBy": "Cryogenic Pod",
    "levelRequirement": 6
  },
  "xenonesia_crystal_healing_session": {
    "id": "xenonesia_crystal_healing_session",
    "name": "Xenonesia Crystal Healing Session",
    "description": "Align your chakras with alien crystals.",
    "price": 3100,
    "icon": "💎",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Restore 1d8 HP and remove one disease or curse (minor only)",
      "Gain inspiration for psychic or wisdom-based checks next day",
      "Crystals hum annoyingly if you're stressed",
      "Made by: Xenonesian Shamans"
    ],
    "vendor": "xenonesia_temple",
    "shippedBy": "Telepathic Transfer",
    "levelRequirement": 7
  },
  "xenonesia_crystal_juicer": {
    "id": "xenonesia_crystal_juicer",
    "name": "Xenonesia Crystal Juicer",
    "description": "Gem-powered juicer for alien fruits.",
    "category": "equipment",
    "price": 3100,
    "icon": "💎",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Extracts pure essence; +2 to Intelligence checks for exotic recipes",
      "Crystals recharge in starlight; yields 50% more juice",
      "Overloads on earthly fruits (sparks)",
      "Made by: Xenonesian Artisans"
    ],
    "vendor": "xenonesia_outpost",
    "shippedBy": "Crystal Core Crate",
    "levelRequirement": 7
  },
  "xenonesia_recipe_alien_fruit_salad": {
    "id": "xenonesia_recipe_alien_fruit_salad",
    "name": "Recipe: Xenonesia Alien Fruit Salad",
    "description": "Fruit from another world.",
    "price": 650,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Grants advantage on saves vs. psychic damage for 4 hours",
      "You see colors that don't exist: disadvantage on Perception checks",
      "Fruit glows in your stomach (cosmetic, but weird)",
      "Made by: Xenonese Exporters"
    ],
    "vendor": "xenonesia",
    "shippedBy": "Sterile Transport",
    "levelRequirement": 6
  },
  "xenonesia_recipe_alien_sushi": {
    "id": "xenonesia_recipe_alien_sushi",
    "name": "Recipe: Xenonesia Alien Sushi",
    "description": "Sushi from beyond the stars.",
    "price": 3100,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants advantage on saves vs. psychic damage for 8 hours",
      "You understand alien languages for 1 hour (but not common ones)",
      "Fish is still moving: disadvantage on Charisma with squeamish people",
      "Made by: Xenonese Sushi Chefs"
    ],
    "vendor": "xenonesia",
    "shippedBy": "Sterile Transport",
    "levelRequirement": 7
  },
  "xenonesian_bioship_seed": {
    "id": "xenonesian_bioship_seed",
    "name": "Xenonesian Bioship Seed",
    "description": "A dormant, living seed capable of growing into a small, organic scout vessel.",
    "price": 8000,
    "icon": "🌱",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grows into a Scout Ship (AC 15, HP 75, Fly 80ft) in 48 hours",
      "Ship runs on absorbed solar energy",
      "Requires regular feeding of organic matter",
      "Made by: Xenonesia"
    ],
    "vendor": "xenonesian_ambassador",
    "shippedBy": "Cryo-Container",
    "levelRequirement": 10
  },
  "xenonesian_translation_earpiece": {
    "id": "xenonesian_translation_earpiece",
    "name": "Xenonesian Translation Earpiece",
    "description": "A small device that translates alien languages in real-time.",
    "category": "equipment",
    "price": 3100,
    "icon": "👂",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Translates one alien language perfectly",
      "Requires 1 hour to attune to a new language",
      "Made by: Xenonesia"
    ],
    "vendor": "xenonesian_ambassador",
    "shippedBy": "Padded Case",
    "levelRequirement": 4
  },
  "xo_staff_fragment": {
    "id": "xo_staff_fragment",
    "name": "Fragment of X.O.'s Staff",
    "description": "A splinter from the shattered staff. Radiates unstable magical energy.",
    "category": "forbidden",
    "price": 50000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Spellcasting focus: +1 to spell attack rolls",
      "Once per day: Cast any spell you know at one level higher",
      "On natural 1: Staff fragment pulses, take 2d10 force damage",
      "Dan may have complicated feelings about this"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "MAGICALLY SHIELDED CONTAINER",
    "levelRequirement": 100,
    "warning": "Connected to the Vigilance incident. Iron Legion will arrest on sight."
  },
  "yellow_paint": {
    "id": "yellow_paint",
    "name": "Bucket of Yellow Paint",
    "description": "Sunny yellow.",
    "category": "curiosities",
    "price": 98,
    "icon": "🎨",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Paint things yellow",
      "Messy"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Can",
    "levelRequirement": 1
  },
  "yggdrasil_branch_sapling": {
    "id": "yggdrasil_branch_sapling",
    "name": "Yggdrasil Branch Sapling",
    "description": "A cutting from the World Tree itself.",
    "price": 700000,
    "icon": "🌳",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Grows into a planar portal tree over 1 year",
      "Connects to 3 random planes (rotates monthly)",
      "Made by: Norse Pantheon Horticulture"
    ],
    "vendor": "world_tree_nursery",
    "shippedBy": "Squirrel of Yggdrasil",
    "levelRequirement": 19,
    "factionBonus": {
      "nature": 250
    }
  },
  "yoshi_clan_egg": {
    "id": "yoshi_clan_egg",
    "name": "Yoshi Clan Egg",
    "description": "A brightly colored egg that hums with gentle energy. It will hatch for a loyal companion.",
    "category": "curiosities",
    "price": 3100,
    "icon": "🥚",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Takes 1 week of warmth to hatch into a friendly Yoshi (acts as a trained riding beast)",
      "The hatched Yoshi can eat one enemy per day to grant you +5 HP",
      "Very protective of its owner"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Nest-Warmed Blanket",
    "levelRequirement": 5
  },
  "yoshi_clans_bootleg_yoshi_egg": {
    "id": "yoshi_clans_bootleg_yoshi_egg",
    "name": "Yoshi Clans Bootleg Yoshi Egg",
    "description": "A wooden egg painted to look like a Yoshi egg.",
    "category": "equipment",
    "price": 99,
    "icon": "🥚",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Throw egg: 1d4 bludgeoning damage, breaks on impact (just wood)",
      "Enemies may mistake it for real: DC 10 Investigation check or waste an action dodging",
      "Yoshis are disappointed in you: disadvantage on Charisma with Yoshi-kind",
      "Can be repainted: advantage on Deception checks with gullible NPCs",
      "Made by: Yoshi Clans Craft Day Rejects"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 4
  },
  "yoshi_clans_egg_ammo": {
    "id": "yoshi_clans_egg_ammo",
    "name": "Yoshi Clans Egg Ammo",
    "description": "Throwable eggs that pack a surprising punch.",
    "category": "equipment",
    "price": 650,
    "icon": "🥚",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Thrown weapon: 20/60 ft, 1d6 bludgeoning + target must DC 12 DEX save or be knocked prone",
      "Comes in pack of 6; eggs are weirdly warm and occasionally hatch (5% chance)",
      "Yoshis get +2 to attack rolls with these",
      "Made by: Yoshi Island Ranch"
    ],
    "vendor": "yoshi_clans_egghouse",
    "shippedBy": "Egg Throw",
    "levelRequirement": 5
  },
  "yoshi_clans_egg_carton_incubator": {
    "id": "yoshi_clans_egg_carton_incubator",
    "name": "Yoshi Clans Egg Carton Incubator",
    "description": "Warm carton for incubating rice eggs? Wait, steaming.",
    "category": "equipment",
    "price": 650,
    "icon": "🍚",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Steams eggs gently; +1 to Dexterity for egg recipes",
      "Hatches warmth (even heat)",
      "Eggs might roll out",
      "Made by: Yoshi Eggsmiths"
    ],
    "vendor": "yoshi_clans_village",
    "shippedBy": "Egg Warm Wrap",
    "levelRequirement": 5
  },
  "yoshi_clans_egg_freshness_test": {
    "id": "yoshi_clans_egg_freshness_test",
    "name": "Yoshi Clans Egg Freshness Test",
    "description": "Test if an egg is good.",
    "category": "services",
    "price": 99,
    "icon": "🥚",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "You can tell if any egg is fresh (advantage on checks involving eggs)",
      "You get a free egg (50% chance it's a Yoshi egg, 50% chance it's just an egg)",
      "You become an egg snob (disadvantage on Charisma with chickens)",
      "Made by: Yoshi Clans Quality Control"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 5
  },
  "yoshi_clans_egg_fried_rice_recipe": {
    "id": "yoshi_clans_egg_fried_rice_recipe",
    "name": "Recipe: Yoshi Clans Egg Fried Rice",
    "description": "Rice stir-fried with fresh eggs for dino energy.",
    "price": 650,
    "icon": "🍚",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Stir-fry with eggs (20 min); eat to gain +1 to Dexterity attacks for 2 hours",
      "Requires: Rice and eggs; yolky",
      "Yoshis devour it",
      "Made by: Clan Cooks"
    ],
    "vendor": "yoshi_clans_village",
    "shippedBy": "Eggshell Edition",
    "levelRequirement": 5
  },
  "yoshi_clans_egg_incubator_cooker": {
    "id": "yoshi_clans_egg_incubator_cooker",
    "name": "Yoshi Clans Egg Incubator Cooker",
    "description": "Incubates and cooks eggs simultaneously.",
    "category": "equipment",
    "price": 3100,
    "icon": "🥚",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Cook eggs perfectly while keeping them warm for hatching (if needed)",
      "Can incubate a Yoshi egg to hatch a temporary companion (lasts 24 hours)",
      "Machine gets confused: 5% chance your cooked egg hatches anyway (surprise pet)",
      "Made by: Yoshi Clans Egg Tech"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 7
  },
  "yoshi_clans_egg_shell_helmet": {
    "id": "yoshi_clans_egg_shell_helmet",
    "name": "Yoshi Clans Egg Shell Helmet",
    "description": "Helmet crafted from durable egg shells.",
    "category": "equipment",
    "price": 650,
    "icon": "⛑️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 AC against bludgeoning",
      "Helmet hatches a chick (distraction aid)",
      "Cracks after heavy hits",
      "Made by: Yoshi Crafters"
    ],
    "vendor": "yoshi_clans_nest",
    "shippedBy": "Egg Carton",
    "levelRequirement": 5
  },
  "yoshi_clans_egg_sitting_service": {
    "id": "yoshi_clans_egg_sitting_service",
    "name": "Yoshi Clans Egg Sitting Service",
    "description": "They watch your egg. Or you watch theirs.",
    "category": "services",
    "price": 650,
    "icon": "🥚",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Hatch a random small dinosaur companion (lasts 24 hours)",
      "Dinosaur is loyal but has a 10% chance per hour to imprint on a random object",
      "You must sit on it for at least 1 hour (uncomfortable)",
      "Made by: Yoshi Clans Daycare"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 5
  },
  "yoshi_clans_egg_toss_game_premium": {
    "id": "yoshi_clans_egg_toss_game_premium",
    "name": "Yoshi Clans Egg Toss Game ",
    "description": "Fun training for accuracy.",
    "price": 650,
    "icon": "🥚",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Play: +1 to ranged attacks for 1 day",
      "Includes eggs: Throwable distractions",
      "Eggs hatch chicks (adorable chaos)",
      "Made by: Yoshi Games"
    ],
    "vendor": "yoshi_clans_village",
    "shippedBy": "Egg Carton",
    "levelRequirement": 5
  },
  "yoshi_clans_recipe_egg_souffle": {
    "id": "yoshi_clans_recipe_egg_souffle",
    "name": "Recipe: Yoshi Clans Egg Soufflé",
    "description": "A fluffy egg dish that lifts your spirits.",
    "price": 650,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Grants advantage on saves vs. depression and fear for 1 hour",
      "You can jump 5 feet higher for the duration (light and fluffy)",
      "Soufflé collapses if you speak loudly while eating it (disadvantage on Charisma)",
      "Made by: Yoshi Island Chefs"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 5
  },
  "yoshi_clans_wario_egg_paint": {
    "id": "yoshi_clans_wario_egg_paint",
    "name": "Yoshi Clans Wario Egg Paint",
    "description": "Paint any egg to look like Wario.",
    "category": "equipment",
    "price": 99,
    "icon": "🎨",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Paint an egg: it becomes a distraction (enemies must investigate)",
      "Painted eggs smell like garlic: disadvantage on Stealth",
      "Yoshis are offended: disadvantage on Charisma with them",
      "Made by: Yoshi Clans (Wario Art Day)"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 4
  },
  "yoshi_clans_wario_egg_pet": {
    "id": "yoshi_clans_wario_egg_pet",
    "name": "Yoshi Clans Wario Egg Pet",
    "description": "An egg that hatches a tiny Wario (figurine).",
    "category": "equipment",
    "price": 650,
    "icon": "🥚",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Egg hatches into tiny Wario figurine: advantage on Charisma with Wario fans",
      "Figurine is annoying: whispers 'Wah!' at random (disadvantage on Concentration)",
      "Can be thrown: 1d2 damage, breaks (Wario would sue)",
      "Made by: Yoshi Clans (Wario Easter Special)"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 5
  },
  "yoshi_cookie": {
    "id": "yoshi_cookie",
    "name": "Yoshi Cookie",
    "description": "A checkered cookie. Very filling.",
    "category": "consumables",
    "price": 100,
    "icon": "🍪",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Gain 10 Coins",
      "Cures 'Hungry' condition"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Cookie Jar",
    "levelRequirement": 1
  },
  "yoshi_egg_surprise": {
    "id": "yoshi_egg_surprise",
    "name": "Yoshi Egg Surprise",
    "description": "Crack it open! What color Yoshi will you get? Will it even be a Yoshi?",
    "category": "consumables",
    "price": 650,
    "icon": "🐣",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Hatches into a random colored Yoshi (Red = fire breath, Blue = water wings, Yellow = ground pound)",
      "10% chance hatches into a Shy Guy wearing a Yoshi costume (disappointed but loyal)",
      "Yoshi follows you for 24 hours, then vanishes (leaves behind 1d10 eggs)",
      "If fed 5+ berries, grants you a ride (carries 1 passenger, speed 40ft)"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Egg Carton Express",
    "levelRequirement": 2
  },
  "yoshi_egg_whistle": {
    "id": "yoshi_egg_whistle",
    "name": "Yoshi Egg Whistle",
    "description": "A carved egg that trills like a dino call. Summons a friendly Yoshi for a joyride.",
    "category": "consumables",
    "price": 3100,
    "icon": "🥚",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Blow: Summon Yoshi mount (1 hour)",
      "Speed 40ft, Swallow attack (1d6 + grapple)",
      "Can tongue-lash enemies (Reach 15ft, pull 10ft)",
      "Yoshi eats fruit, not gold (disappointed)"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Nest Basket",
    "levelRequirement": 5
  },
  "yoshi_saddle": {
    "id": "yoshi_saddle",
    "name": "Yoshi Saddle",
    "description": "A saddle for riding Yoshi with extra jumps.",
    "category": "equipment",
    "price": 3100,
    "icon": "🦕",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Mount Yoshi: +10 speed, double jump height",
      "Yoshi tongue attack: Pull enemy 15ft",
      "Requires friendly Yoshi"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Saddle Bag",
    "levelRequirement": 4
  },
  "zap_tap_badge": {
    "id": "zap_tap_badge",
    "name": "Zap Tap Badge",
    "description": "Electrifies your skin. Static shock on steroids.",
    "category": "equipment",
    "price": 3100,
    "icon": "⚡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Enemies touching you take 1d4 Lightning damage",
      "Resistance to grappling"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Insulated Box",
    "levelRequirement": 5
  },
  "zebrabwe_desert_conquest_force": {
    "id": "zebrabwe_desert_conquest_force",
    "name": "Zebrabwe Desert Conquest Force (Light Cavalry)",
    "description": "A dedicated force of 100 Zebrabwe cavalry specialized in rapid desert engagements.",
    "price": 51000,
    "icon": "🐎",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "100 fast cavalry provide massive advantage in desert warfare",
      "Cavalry morale is tied to the health of the local ecosystem",
      "Made by: Zebrabwe"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Mass Summons",
    "levelRequirement": 14,
    "factionBonus": {
      "military": 60
    }
  },
  "zebrabwe_environmental_conversion": {
    "id": "zebrabwe_environmental_conversion",
    "name": "Zebrabwe Environmental Conversion (Savannah)",
    "description": "A ritual to magically convert a hostile biome (e.g., Tundra or Swamp) into temperate Savannah.",
    "price": 51000,
    "icon": "🌳",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Converts 5 sq miles of land into prime grazing Savannah in 1 week",
      "Perfect for establishing new herds or strongholds",
      "Made by: Zebrabwe"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Ritual Team",
    "levelRequirement": 16
  },
  "zebrabwe_grass_fed_yogurt_recipe": {
    "id": "zebrabwe_grass_fed_yogurt_recipe",
    "name": "Recipe: Zebrabwe Grass-Fed Yogurt",
    "description": "Creamy yogurt from savanna herds for herd strength.",
    "price": 650,
    "icon": "🥛",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Culture milk (overnight); eat to gain +1 to group Athletics checks for 4 hours",
      "Requires: Milk from grass-eaters; tangy",
      "Boosts herd bonds",
      "Made by: Zebra Herders"
    ],
    "vendor": "zebrabwe_savanna",
    "shippedBy": "Milky Mane Manual",
    "levelRequirement": 5
  },
  "zebrabwe_great_migration_pass": {
    "id": "zebrabwe_great_migration_pass",
    "name": "Zebrabwe Great Migration Pass",
    "description": "A sacred pass allowing safe, unimpeded travel across the plains during the massive annual migration.",
    "price": 8000,
    "icon": "🎫",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Allows guaranteed safe passage (for 1 week) across the plains during the migration event",
      "No stampedes or predator attacks will affect you",
      "Made by: Zebrabwe"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Ceremonial Cloth",
    "levelRequirement": 12
  },
  "zebrabwe_herbal_antivenom": {
    "id": "zebrabwe_herbal_antivenom",
    "name": "Zebrabwe Great Herd Antivenom",
    "description": "A powerful herb-based serum effective against the deadliest apex predator venoms.",
    "price": 8000,
    "icon": "🧪",
    "stock": 6,
    "rarity": "epic",
    "effects": [
      "Instantly neutralize any non-magical poison/venom (CON save DC 18)",
      "Heals 4d6 damage caused by venom",
      "Made by: Zebrabwe"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Clay Vial",
    "levelRequirement": 7
  },
  "zebrabwe_herbal_restoration": {
    "id": "zebrabwe_herbal_restoration",
    "name": "Zebrabwe Herbal Restoration (Major)",
    "description": "A massive herbal poultice that rapidly heals grievous, widespread injuries.",
    "price": 51000,
    "icon": "🌿",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Apply to one target: instantly regains max HP, cures all diseases and poisons",
      "Target must be unconscious or restrained for application",
      "Made by: Zebrabwe"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Giant Basket",
    "levelRequirement": 14
  },
  "zebrabwe_herbivore_call": {
    "id": "zebrabwe_herbivore_call",
    "name": "Zebrabwe Herbivore Call (Massive Herd)",
    "description": "Summons an enormous migratory herd (100+ creatures) to stampede across a targeted area.",
    "price": 51000,
    "icon": "🐘",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Herd flattens 1 square mile of terrain and deals 10d6 Trample damage to anything remaining",
      "Herd passes in 1 hour",
      "Made by: Zebrabwe"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Master Whistle",
    "levelRequirement": 14,
    "factionBonus": {
      "destruction": 70
    }
  }
};
