// currency.js — Full Universal Currency System & Shop Integration v3
// 45+ Currencies, Gold Equivalence, Vendor Exchange Rates, and Shop Item Integration.

import { SHOP_ITEMS, VENDORS, getAllShopItems } from './shop-data.js';

export const CURRENCIES = {
  "gold": {
    "id": "gold",
    "name": "Gold Piece",
    "icon": "💰",
    "base_value": 1,
    "tier": 1,
    "category": "core",
    "type": "Metal",
    "volatility": "steady",
    "liquidity": "universal",
    "acceptance_default": "high",
    "acceptance": {
      "default": "high"
    },
    "home_faction": null,
    "short": "Universal reserve. 1 gold = 10 silver = 100 copper. Bank vault standard.",
    "description": "Universal trade gold. Accepted everywhere because purity, weight, and value are internationally recognized.",
    "issuer": "Many mints",
    "spendable_in": [
      "everywhere",
      "shops",
      "banks",
      "travel"
    ],
    "player_tip": "Universal reserve. Everything converts to gold."
  },
  "platinum": {
    "id": "platinum",
    "name": "Platinum Piece",
    "icon": "💎",
    "base_value": 10,
    "tier": 1,
    "category": "core",
    "type": "Metal",
    "volatility": "steady",
    "liquidity": "universal",
    "acceptance_default": "high",
    "acceptance": { "default": "high" },
    "home_faction": null,
    "short": "High-value core coin. 1 platinum = 10 gold.",
    "description": "High-value precious-metal coin used for large purchases and compact travel funds.",
    "issuer": "Many mints",
    "spendable_in": ["everywhere", "shops", "banks", "travel"],
    "player_tip": "Large-denomination party currency."
  },
  "electrum": {
    "id": "electrum",
    "name": "Electrum Piece",
    "icon": "⚪",
    "base_value": 0.5,
    "tier": 1,
    "category": "core",
    "type": "Metal",
    "volatility": "steady",
    "liquidity": "universal",
    "acceptance_default": "high",
    "acceptance": { "default": "high" },
    "home_faction": null,
    "short": "Mixed silver-gold coin. 1 electrum = 0.5 gold.",
    "description": "Traditional mixed-metal coin used between gold and silver denominations.",
    "issuer": "Many mints",
    "spendable_in": ["everywhere", "shops", "banks", "travel"],
    "player_tip": "Useful middle denomination between gold and silver."
  },
  "bronze": {
    "id": "bronze",
    "name": "Bronze Piece",
    "icon": "🟫",
    "base_value": 0.01,
    "tier": 1,
    "category": "core",
    "type": "Metal",
    "volatility": "steady",
    "liquidity": "universal",
    "acceptance_default": "high",
    "acceptance": { "default": "high" },
    "home_faction": null,
    "short": "Low-value core coin. 1 bronze = 0.01 gold.",
    "description": "Small bronze coin used for the same low-denomination niche as copper bits in some ledgers.",
    "issuer": "Many mints",
    "spendable_in": ["everywhere", "shops", "banks", "travel"],
    "player_tip": "Small change for exact party cash tracking."
  },
  "silver": {
    "id": "silver",
    "name": "Silver Piece",
    "icon": "🪙",
    "base_value": 0.1,
    "tier": 1,
    "category": "core",
    "type": "Metal",
    "volatility": "steady",
    "liquidity": "universal",
    "acceptance_default": "high",
    "acceptance": {
      "default": "high"
    },
    "home_faction": null,
    "short": "Everyday market coin. 1 silver = 10 copper.",
    "description": "Everyday trade silver. Common for wages, road expenses, and market produce.",
    "issuer": "Many mints",
    "spendable_in": [
      "markets",
      "inns",
      "travel",
      "wages"
    ],
    "player_tip": "Street-price coin. 1 gold = 10 silver."
  },
  "copper": {
    "id": "copper",
    "name": "Copper Bit",
    "icon": "🟤",
    "base_value": 0.01,
    "tier": 1,
    "category": "core",
    "type": "Metal",
    "volatility": "steady",
    "liquidity": "universal",
    "acceptance_default": "high",
    "acceptance": {
      "default": "high"
    },
    "home_faction": null,
    "short": "Small change. Bread, ferry tips, small supplies.",
    "description": "Low-value street currency used for daily living expenses.",
    "issuer": "Local mints",
    "spendable_in": [
      "street",
      "taverns",
      "ferries"
    ],
    "player_tip": "100 copper bits equal 1 gold."
  },
  "midland_ducat": {
    "id": "midland_ducat",
    "name": "Midland Ducat",
    "icon": "🦁",
    "base_value": 0.9,
    "tier": 1,
    "category": "imperial",
    "type": "Fiat",
    "volatility": "steady",
    "liquidity": "wide",
    "acceptance_default": "medium",
    "acceptance": {
      "default": "medium",
      "regal_empire": "high",
      "iron_legion": "high"
    },
    "home_faction": "regal_empire",
    "short": "Regal Empire main coin. Stable, standardized treasury tender.",
    "description": "The official coin of the Regal Empire, backed by the imperial military and tax collectors.",
    "issuer": "Regal Treasury",
    "spendable_in": [
      "regal_empire",
      "midlands",
      "gilded_gryphon",
      "banks"
    ],
    "player_tip": "Standard currency across the Midlands."
  },
  "imperial_crown": {
    "id": "imperial_crown",
    "name": "Imperial Crown",
    "icon": "👑",
    "base_value": 1.1,
    "tier": 1,
    "category": "imperial",
    "type": "Fiat",
    "volatility": "steady",
    "liquidity": "wide",
    "acceptance_default": "medium",
    "acceptance": {
      "default": "medium",
      "the_empire": "high"
    },
    "home_faction": "the_empire",
    "short": "Heavy state coin backed by imperial army and tax office.",
    "description": "Heavy gold-alloy coin used for high-value state contracts and military procurement.",
    "issuer": "Empire Treasury",
    "spendable_in": [
      "empire",
      "military_quartermasters",
      "banks"
    ],
    "player_tip": "Accepted at a premium in official imperial ports."
  },
  "archive_writ": {
    "id": "archive_writ",
    "name": "Archive Clearance Writ",
    "icon": "📜",
    "base_value": 8.5,
    "tier": 1,
    "category": "imperial",
    "type": "Official Permit",
    "volatility": "managed",
    "liquidity": "specialized",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "regal_empire": "high",
      "shadow_estate": "high"
    },
    "home_faction": "regal_empire",
    "short": "Restricted clearance writ for classified archives and sealed vaults.",
    "description": "Sealed parchment document permitting access to restricted records, classified vaults, and high-tier research.",
    "issuer": "Regal Archive",
    "spendable_in": [
      "archives",
      "libraries",
      "vaults"
    ],
    "player_tip": "Waluigi values these above gold for record acquisition."
  },
  "dwarf_oathgold": {
    "id": "dwarf_oathgold",
    "name": "Dwarven Oathgold",
    "icon": "⛏️",
    "base_value": 4,
    "tier": 1,
    "category": "imperial",
    "type": "Metal",
    "volatility": "steady",
    "liquidity": "wide",
    "acceptance_default": "medium",
    "acceptance": {
      "default": "medium",
      "kingdoms_of_the_dwarves_wh": "high"
    },
    "home_faction": "kingdoms_of_the_dwarves_wh",
    "short": "Dwarven oath-stamped pure gold. High intrinsic purity.",
    "description": "Pure gold ingot stamped with dwarven clan oaths and anvil runes.",
    "issuer": "Dwarven Strongholds",
    "spendable_in": [
      "dwarven_holds",
      "smiths",
      "banks"
    ],
    "player_tip": "Worth 4x normal gold at smiths and jewelers."
  },
  "mora": {
    "id": "mora",
    "name": "Mora",
    "icon": "🪨",
    "base_value": 1.3,
    "tier": 1,
    "category": "imperial",
    "type": "Fiat",
    "volatility": "steady",
    "liquidity": "wide",
    "acceptance_default": "medium",
    "acceptance": {
      "default": "medium",
      "teyvat": "high"
    },
    "home_faction": "teyvat",
    "short": "Catalyst and currency from Teyvat. Universally accepted in foreign trade.",
    "description": "Physical currency minted in Liyue, doubling as an elemental catalyst for craftsmanship.",
    "issuer": "Golden House Mint",
    "spendable_in": [
      "teyvat",
      "foreign_markets",
      "alchemy_labs"
    ],
    "player_tip": "Essential for Teyvat merchants and alchemy shops."
  },
  "rupee": {
    "id": "rupee",
    "name": "Hyrulean Rupee",
    "icon": "💚",
    "base_value": 0.7,
    "tier": 2,
    "category": "foreign",
    "type": "Gem Money",
    "volatility": "seasonal",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "hyrule": "high"
    },
    "home_faction": "hyrule",
    "short": "Cut gemstone currency in green, blue, red, and silver varieties.",
    "description": "Naturally luminous crystal gems cut into precision hexagonal shapes for commerce.",
    "issuer": "Hyrulean Gem Crafters",
    "spendable_in": [
      "hyrule",
      "bazaars",
      "general_stores"
    ],
    "player_tip": "Higher-value red and purple rupees convert faster."
  },
  "poke_dollar": {
    "id": "poke_dollar",
    "name": "PokéDollar",
    "icon": "₽",
    "base_value": 0.6,
    "tier": 2,
    "category": "foreign",
    "type": "Fiat",
    "volatility": "steady",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "pokemon_league": "high"
    },
    "home_faction": "pokemon_league",
    "short": "League-regulated currency for medical supplies, balls, and travel.",
    "description": "Regulated card and paper currency backed by the international Pokémon League.",
    "issuer": "Pokémon League Reserve",
    "spendable_in": [
      "pokemarts",
      "clinics",
      "trainers"
    ],
    "player_tip": "Standard currency across all regional PokéMarts."
  },
  "mushroom_coin": {
    "id": "mushroom_coin",
    "name": "Mushroom Coin",
    "icon": "🍄",
    "base_value": 0.5,
    "tier": 2,
    "category": "regional",
    "type": "Fiat",
    "volatility": "shaky",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "mushroom_regency": "high",
      "peach_loyalists": "medium"
    },
    "home_faction": "mushroom_regency",
    "short": "Traditional Mushroom Kingdom gold coin with star emblem.",
    "description": "Classic yellow coin stamped with the Mushroom Kingdom crest. Widely used despite civil war strain.",
    "issuer": "Mushroom Regency Mint",
    "spendable_in": [
      "toad_town",
      "mushroom_kingdom",
      "inns"
    ],
    "player_tip": "Accepted everywhere in Toad Town and Mushroom province."
  },
  "peach_crown": {
    "id": "peach_crown",
    "name": "Peach Crown",
    "icon": "🍑",
    "base_value": 1.4,
    "tier": 2,
    "category": "regional",
    "type": "Restoration Fiat",
    "volatility": "volatile",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "peach_loyalists": "high"
    },
    "home_faction": "peach_loyalists",
    "short": "Rebel restoration coin issued by Captain Toadette's quartermasters.",
    "description": "Gold coin minted in Bramblehaven bearing Princess Peach's silhouette.",
    "issuer": "Peach Loyalist Command",
    "spendable_in": [
      "bramblehaven",
      "loyalist_camps",
      "armories"
    ],
    "player_tip": "Commands heavy discounts at Loyalist quartermasters."
  },
  "toad_bond": {
    "id": "toad_bond",
    "name": "Toad Rebuilding Bond",
    "icon": "🤝",
    "base_value": 0.75,
    "tier": 2,
    "category": "regional",
    "type": "Community Bond",
    "volatility": "shaky",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "liberated_toads": "high"
    },
    "home_faction": "liberated_toads",
    "short": "Community rebuilding bond backed by refugee councils.",
    "description": "Paper credit issued by Liberated Toads to fund food, shelter repairs, and medical aid.",
    "issuer": "Liberated Toad Council",
    "spendable_in": [
      "refugee_camps",
      "toad_rebuilding_depots"
    ],
    "player_tip": "Toad Lee uses these to coordinate regional relief."
  },
  "relief_stamp": {
    "id": "relief_stamp",
    "name": "Relief Stamp",
    "icon": "🎟️",
    "base_value": 0.2,
    "tier": 2,
    "category": "regional",
    "type": "Voucher",
    "volatility": "steady",
    "liquidity": "local",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "liberated_toads": "high"
    },
    "home_faction": "liberated_toads",
    "short": "Ration and shelter voucher issued for emergency supplies.",
    "description": "Perforated stamp used for rationing food, medical gauze, and basic tools.",
    "issuer": "Toad Relief Network",
    "spendable_in": [
      "relief_stations",
      "soup_kitchens"
    ],
    "player_tip": "Crucial currency for displaced civilians and emergency gear."
  },
  "decree_strip": {
    "id": "decree_strip",
    "name": "Regal Decree Strip",
    "icon": "📜",
    "base_value": 1.5,
    "tier": 2,
    "category": "regional",
    "type": "Legal Tender",
    "volatility": "managed",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "regal_empire": "high"
    },
    "home_faction": "regal_empire",
    "short": "Magistrate paper strip authorizing court fees, fines, and filings.",
    "description": "Official wax-sealed strip used in Imperial courts, parliamentary filings, and bail bonds.",
    "issuer": "Imperial Judiciary",
    "spendable_in": [
      "courts",
      "chanceries",
      "advocates"
    ],
    "player_tip": "Speaker L and legal clerks trade heavily in decree strips."
  },
  "beanbean_bean": {
    "id": "beanbean_bean",
    "name": "Beanbean Bean Coin",
    "icon": "🫘",
    "base_value": 0.55,
    "tier": 2,
    "category": "regional",
    "type": "Fiat",
    "volatility": "steady",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "beanbean_kingdom": "high"
    },
    "home_faction": "beanbean_kingdom",
    "short": "Bean-shaped green coin from the Beanbean Kingdom.",
    "description": "Curved bean-shaped coin made of polished bronze-gold alloy, favored in southern trade.",
    "issuer": "Queen Bean's Treasury",
    "spendable_in": [
      "beanbean_castle",
      "woohoo_hooniversity"
    ],
    "player_tip": "Great for purchasing Beanbean delicacies and chucklehuck brew."
  },
  "toad_whistle": {
    "id": "toad_whistle",
    "name": "Courier Whistle Token",
    "icon": "📯",
    "base_value": 0.3,
    "tier": 3,
    "category": "cultural",
    "type": "Service Token",
    "volatility": "steady",
    "liquidity": "local",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "toad_network": "high"
    },
    "home_faction": "toad_network",
    "short": "Carved wooden whistle token redeemable for priority courier service.",
    "description": "Small carved whistle used by the Toad Network to dispatch emergency couriers.",
    "issuer": "Toad Network Master",
    "spendable_in": [
      "courier_posts",
      "toad_network"
    ],
    "player_tip": "Waluigi keeps these to ensure instant dossier delivery."
  },
  "wario_coin": {
    "id": "wario_coin",
    "name": "Wario Coin",
    "icon": "🟡",
    "base_value": 1.2,
    "tier": 2,
    "category": "private",
    "type": "Private Fiat",
    "volatility": "managed",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "wario_land": "high"
    },
    "home_faction": "wario_land",
    "short": "Gold coin stamped with Wario's face. Backed by greed.",
    "description": "Heavy gold-brass coin minted by Wario Enterprise. Wario demands 20% markup when spending it.",
    "issuer": "Wario Enterprise Mint",
    "spendable_in": [
      "wario_warehouses",
      "wario_casino",
      "diamond_city"
    ],
    "player_tip": "Accepted at all Wario outlets and garlic guilds."
  },
  "wario_points": {
    "id": "wario_points",
    "name": "Wario Shop Credit",
    "icon": "⭐",
    "base_value": 1,
    "tier": 2,
    "category": "private",
    "type": "Closed-Loop Credit",
    "volatility": "managed",
    "liquidity": "closed",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "wario_land": "high"
    },
    "home_faction": "wario_land",
    "short": "Quest board reward points redeemable at Wario's Warehouse.",
    "description": "Digital and token shop points issued for completing quest board contracts for Wario.",
    "issuer": "Wario Quest Board",
    "spendable_in": [
      "wario_shop",
      "quest_catalog"
    ],
    "player_tip": "Directly spendable for items, weapons, and vehicles in Wario's shop!"
  },
  "bowser_bux": {
    "id": "bowser_bux",
    "name": "Bowser Bux",
    "icon": "🐢",
    "base_value": 0.4,
    "tier": 2,
    "category": "private",
    "type": "Military Scrip",
    "volatility": "managed",
    "liquidity": "regional",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "koopa_troop": "high"
    },
    "home_faction": "koopa_troop",
    "short": "Koopa military scrip backed by Bowser's fortresses and airships.",
    "description": "Heavy iron-plated scrip notes issued to Koopa soldiers, Hammer Bros, and mechanics.",
    "issuer": "Koopa High Command",
    "spendable_in": [
      "koopa_fortresses",
      "airships",
      "border_posts"
    ],
    "player_tip": "Bowser holds 50,000 Bowser Bux in military reserves."
  },
  "shell_credit": {
    "id": "shell_credit",
    "name": "Shell Command Credit",
    "icon": "🐚",
    "base_value": 0.8,
    "tier": 2,
    "category": "private",
    "type": "Military Credit",
    "volatility": "steady",
    "liquidity": "regional",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "koopa_troop": "high"
    },
    "home_faction": "koopa_troop",
    "short": "Siege engineering credit for Koopa armorers and Magikoopa labs.",
    "description": "Specialized requisition credit for heavy armor, shell repairs, and Magikoopa scrolls.",
    "issuer": "Kamek's Arcane Ordnance",
    "spendable_in": [
      "koopa_labs",
      "siege_depots"
    ],
    "player_tip": "Used for siege engine upgrades and shell plating."
  },
  "banana_medallion": {
    "id": "banana_medallion",
    "name": "Banana Medallion",
    "icon": "🏅",
    "base_value": 2.4,
    "tier": 2,
    "category": "regional",
    "type": "Trade Token",
    "volatility": "seasonal",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "dk_crew": "high"
    },
    "home_faction": "dk_crew",
    "short": "Heavy brass medallion from Kongo Bongo representing stored banana reserves.",
    "description": "Durable metal medallion minted in DK Isles that never rots or spoils.",
    "issuer": "Kong Trade Houses",
    "spendable_in": [
      "kongo_bongo",
      "banana_hoard_vaults"
    ],
    "player_tip": "Highly valued in tropical ports and island bazaars."
  },
  "coconut_bar": {
    "id": "coconut_bar",
    "name": "Coconut Oil Bar",
    "icon": "🥥",
    "base_value": 1.1,
    "tier": 2,
    "category": "regional",
    "type": "Commodity Bar",
    "volatility": "seasonal",
    "liquidity": "port",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "dk_crew": "high"
    },
    "home_faction": "dk_crew",
    "short": "Standardized pressed coconut oil bar used in island maritime trade.",
    "description": "Dense commodity bar used for ship waterproofing, cooking oil, and island currency.",
    "issuer": "Kong Dock Cooperatives",
    "spendable_in": [
      "ports",
      "shipyards",
      "island_markets"
    ],
    "player_tip": "Easily tradable at all maritime docks."
  },
  "kremling_koin": {
    "id": "kremling_koin",
    "name": "Kremling Koin",
    "icon": "🐊",
    "base_value": 0.6,
    "tier": 4,
    "category": "syndicate",
    "type": "Pirate Scrip",
    "volatility": "volatile",
    "liquidity": "black_market",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "kremling_krew": "high"
    },
    "home_faction": "kremling_krew",
    "short": "Crude iron coin minted by King K. Rool's raiders.",
    "description": "Rough iron coin stamped with a crocodile skull, used in pirate dens and Kremling hideouts.",
    "issuer": "Kremling Foundry",
    "spendable_in": [
      "kremling_camps",
      "pirate_hideouts"
    ],
    "player_tip": "Used on the black market for stolen military hardware."
  },
  "doubloon": {
    "id": "doubloon",
    "name": "Syrup Doubloon",
    "icon": "🏴‍☠️",
    "base_value": 1.8,
    "tier": 2,
    "category": "regional",
    "type": "Pirate Coin",
    "volatility": "volatile",
    "liquidity": "port",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "black_sugar_pirates": "high"
    },
    "home_faction": "black_sugar_pirates",
    "short": "Heavy gold pirate coin from Captain Syrup's fleet.",
    "description": "Stolen and reminted gold coin widely circulated among privateers and contraband smugglers.",
    "issuer": "Black Sugar Pirates",
    "spendable_in": [
      "pirate_ports",
      "smuggler_coves"
    ],
    "player_tip": "Preferred payment for black market maps and stolen cannons."
  },
  "cargo_share": {
    "id": "cargo_share",
    "name": "Cargo Share Draft",
    "icon": "📦",
    "base_value": 3.2,
    "tier": 3,
    "category": "private",
    "type": "Cargo Bill",
    "volatility": "wild",
    "liquidity": "port",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "black_sugar_pirates": "high"
    },
    "home_faction": "black_sugar_pirates",
    "short": "Draft backed by captured cargo hauls in pirate warehouses.",
    "description": "Promissory note representing a fractional share of looted shipping crates.",
    "issuer": "Syrup Quartermaster",
    "spendable_in": [
      "port_warehouses",
      "cargo_docks"
    ],
    "player_tip": "Can be redeemed for raw goods, spices, and salvaged gear."
  },
  "arcane_shard": {
    "id": "arcane_shard",
    "name": "Arcane Shard",
    "icon": "💎",
    "base_value": 3,
    "tier": 3,
    "category": "guild",
    "type": "Magical Commodity",
    "volatility": "volatile",
    "liquidity": "specialized",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "mages_guild": "high"
    },
    "home_faction": "mages_guild",
    "short": "Crystallized mana shard used for enchanting and spell casting.",
    "description": "Luminous crystal containing stabilized magical energy. Used directly in spellcraft or as currency.",
    "issuer": "Mages Guild Laboratories",
    "spendable_in": [
      "mages_guild",
      "arcane_shops",
      "enchanters"
    ],
    "player_tip": "Primary currency for purchasing spell scrolls and wands."
  },
  "guild_seal": {
    "id": "guild_seal",
    "name": "Mages Guild Seal",
    "icon": "🔮",
    "base_value": 5,
    "tier": 3,
    "category": "guild",
    "type": "Service Credit",
    "volatility": "steady",
    "liquidity": "specialized",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "mages_guild": "high"
    },
    "home_faction": "mages_guild",
    "short": "Stamped Guild token redeemable for rare spell components and research.",
    "description": "Heavy silver-and-amethyst seal stamped with the Archmage's sigil.",
    "issuer": "Mages Guild Supreme Council",
    "spendable_in": [
      "mages_guild",
      "guild_hall"
    ],
    "player_tip": "Required for high-level guild passes and restricted grimoires."
  },
  "transit_stamp": {
    "id": "transit_stamp",
    "name": "Planar Transit Stamp",
    "icon": "🌀",
    "base_value": 9,
    "tier": 3,
    "category": "guild",
    "type": "Travel Credit",
    "volatility": "volatile",
    "liquidity": "specialized",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "mages_guild": "high"
    },
    "home_faction": "mages_guild",
    "short": "Authorized stamp for portal transit, teleport circles, and dimensional travel.",
    "description": "Enchanted wax stamp verifying authorization and hazard insurance for planar transit.",
    "issuer": "Mages Guild Transit Office",
    "spendable_in": [
      "portal_hubs",
      "transit_offices"
    ],
    "player_tip": "Essential for inter-realm travel and dimensional transport."
  },
  "astral_pearl": {
    "id": "astral_pearl",
    "name": "Astral Pearl",
    "icon": "🫧",
    "base_value": 12,
    "tier": 3,
    "category": "guild",
    "type": "Planar Commodity",
    "volatility": "volatile",
    "liquidity": "specialized",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "mages_guild": "high"
    },
    "home_faction": null,
    "short": "Rare pearl harvested from astral currents during dimensional storms.",
    "description": "Iridescent sphere formed from compressed planar residue in the astral sea.",
    "issuer": "Planar Salvagers",
    "spendable_in": [
      "astral_markets",
      "high_arcane_shops"
    ],
    "player_tip": "Sells for extreme value at wizard academies."
  },
  "kivotos_credit": {
    "id": "kivotos_credit",
    "name": "Kivotos Credit",
    "icon": "💠",
    "base_value": 1.2,
    "tier": 3,
    "category": "digital",
    "type": "Digital Fiat",
    "volatility": "steady",
    "liquidity": "networked",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "kivotos": "high"
    },
    "home_faction": "kivotos",
    "short": "Electronic currency used across Kivotos academy-city schools and clubs.",
    "description": "Digital credit system managed by the General Student Union across all academy districts.",
    "issuer": "General Student Union",
    "spendable_in": [
      "kivotos",
      "school_stores",
      "club_bazaars"
    ],
    "player_tip": "Remi holds 5,000 Kivotos Credits in digital reserves."
  },
  "data_chit": {
    "id": "data_chit",
    "name": "Millennium Data Chit",
    "icon": "💾",
    "base_value": 2.6,
    "tier": 3,
    "category": "digital",
    "type": "Data Credit",
    "volatility": "steady",
    "liquidity": "networked",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "millennium_science_school": "high"
    },
    "home_faction": "millennium_science_school",
    "short": "Encrypted memory token redeemable for compute time and tech prototypes.",
    "description": "High-density data chit storing encrypted schematics, compute hours, and lab access rights.",
    "issuer": "Millennium Science School",
    "spendable_in": [
      "millennium_labs",
      "tech_bazaars"
    ],
    "player_tip": "Used to buy siege constructs, ammo, and robotics gear."
  },
  "credstick": {
    "id": "credstick",
    "name": "Encrypted Credstick",
    "icon": "💳",
    "base_value": 1.1,
    "tier": 3,
    "category": "digital",
    "type": "Digital Currency",
    "volatility": "stable",
    "liquidity": "networked",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "internet_federation": "high"
    },
    "home_faction": "internet_federation",
    "short": "Portable hardware stick holding encrypted digital currency.",
    "description": "Handheld chip containing cryptographically secured funds for internet and sci-fi markets.",
    "issuer": "Internet Federation Bank",
    "spendable_in": [
      "internet",
      "digital_markets"
    ],
    "player_tip": "Instantly spendable at all online or tech-integrated vendors."
  },
  "soul_coin": {
    "id": "soul_coin",
    "name": "Soul Coin",
    "icon": "😈",
    "base_value": 20,
    "tier": 4,
    "category": "occult",
    "type": "Infernal Currency",
    "volatility": "volatile",
    "liquidity": "black_market",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "onyx_hand": "medium"
    },
    "home_faction": null,
    "short": "Lower-plane infernal iron coin trapping a living soul. High value, dark moral cost.",
    "description": "Heavy coin forged from infernal iron that whispers with the soul trapped inside it.",
    "issuer": "Infernal Fiends",
    "spendable_in": [
      "occult_markets",
      "black_market",
      "vampire_courts"
    ],
    "player_tip": "Worth 20 gold pieces on the black market. Archie holds 3."
  },
  "blood_vial": {
    "id": "blood_vial",
    "name": "Preserved Blood Vial",
    "icon": "🩸",
    "base_value": 2.5,
    "tier": 4,
    "category": "occult",
    "type": "Occult Commodity",
    "volatility": "volatile",
    "liquidity": "black_market",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "onyx_hand": "high"
    },
    "home_faction": "onyx_hand",
    "short": "Sealed alchemy vial of alchemically preserved blood for vampire markets.",
    "description": "Crystal vial of blood graded by lineage, purity, and magical resonance.",
    "issuer": "Onyx Hand Bloodmasters",
    "spendable_in": [
      "onyx_hand",
      "vampire_estates"
    ],
    "player_tip": "Standard currency in Shadow Estate dinner exchanges."
  },
  "shadow_obol": {
    "id": "shadow_obol",
    "name": "Shadow Obol",
    "icon": "⚫",
    "base_value": 3.5,
    "tier": 4,
    "category": "occult",
    "type": "Shadow Scrip",
    "volatility": "shaky",
    "liquidity": "local",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "shadow_estate": "high"
    },
    "home_faction": "shadow_estate",
    "short": "Cold obsidian coin used by servants, hunters, and ghosts in the Shadowfell.",
    "description": "Flat obsidian coin etched with fading sigils, absorbed from planar shadow fields.",
    "issuer": "Shadow Estate Steward",
    "spendable_in": [
      "shadow_estate",
      "shadowfell"
    ],
    "player_tip": "Used to bribe Shadow Estate guards and buy servant-pass keys."
  },
  "vampire_marker": {
    "id": "vampire_marker",
    "name": "Corvinarus Favor Marker",
    "icon": "🦇",
    "base_value": 15,
    "tier": 4,
    "category": "occult",
    "type": "Favor Credit",
    "volatility": "wild",
    "liquidity": "specialized",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "onyx_hand": "high"
    },
    "home_faction": "onyx_hand",
    "short": "Formal favor marker issued by vampire patriarchs.",
    "description": "Carved bone marker bearing the Corvinarus crest, representing an aristocratic blood favor.",
    "issuer": "House Corvinarus",
    "spendable_in": [
      "vampire_courts",
      "onyx_hand"
    ],
    "player_tip": "Redeemable for safe passage or assassination contracts."
  },
  "index_token": {
    "id": "index_token",
    "name": "Archive Index Token",
    "icon": "🗂️",
    "base_value": 5.5,
    "tier": 4,
    "category": "occult",
    "type": "Archive Scrip",
    "volatility": "shaky",
    "liquidity": "local",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "shadow_estate": "high"
    },
    "home_faction": "shadow_estate",
    "short": "Archivist token for viewing, copying, and stealing restricted records.",
    "description": "Heavy lead token issued by the Shadow Estate Archivist for catalog access.",
    "issuer": "The Archivist",
    "spendable_in": [
      "shadow_archives",
      "forbidden_scriptoriums"
    ],
    "player_tip": "Used in the Shadow Estate library to unlock secret dossiers."
  },
  "warpstone": {
    "id": "warpstone",
    "name": "Warpstone Token",
    "icon": "☢️",
    "base_value": 10,
    "tier": 4,
    "category": "occult",
    "type": "Hazard Commodity",
    "volatility": "wild",
    "liquidity": "black_market",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "skaven": "high"
    },
    "home_faction": "skaven",
    "short": "Refined chaos crystal token. Corrupting, illegal, and extremely valuable.",
    "description": "Glowing green crystal token emitting mutagenic chaos radiation.",
    "issuer": "Skaven Under-Mints",
    "spendable_in": [
      "under_markets",
      "black_market"
    ],
    "player_tip": "Valued by dark mages, Skaven engineers, and forbidden cults."
  },
  "broker_mark": {
    "id": "broker_mark",
    "name": "Broker Information Mark",
    "icon": "🕶️",
    "base_value": 7,
    "tier": 4,
    "category": "syndicate",
    "type": "Info Credit",
    "volatility": "volatile",
    "liquidity": "black_market",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "freelancer_underworld": "high"
    },
    "home_faction": "freelancer_underworld",
    "short": "Underworld mark redeemable for blackmail, intel, and silence.",
    "description": "Dark metal token stamped with a magnifying glass over a coin, used by The Broker's network.",
    "issuer": "The Broker",
    "spendable_in": [
      "underworld_dens",
      "freelancer_guild"
    ],
    "player_tip": "Redeemable for high-grade political intelligence."
  },
  "tea_chit": {
    "id": "tea_chit",
    "name": "Tea Leaf Syndicate Chit",
    "icon": "🍵",
    "base_value": 1.6,
    "tier": 4,
    "category": "syndicate",
    "type": "Syndicate Credit",
    "volatility": "managed",
    "liquidity": "black_market",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "tea_leaf_syndicate": "high"
    },
    "home_faction": "tea_leaf_syndicate",
    "short": "Private bank chit used in smuggling networks and tea houses.",
    "description": "Watermarked paper chit infused with tea essence, issued by Chai T and the Tea Syndicate.",
    "issuer": "Tea Leaf Syndicate Treasury",
    "spendable_in": [
      "tea_houses",
      "smuggler_docks"
    ],
    "player_tip": "Settles contraband debts without paper trails."
  },
  "spirit_bead": {
    "id": "spirit_bead",
    "name": "Rakasha Spirit Bead",
    "icon": "📿",
    "base_value": 2.2,
    "tier": 3,
    "category": "cultural",
    "type": "Cultural Token",
    "volatility": "steady",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "rakasha_tribes": "high"
    },
    "home_faction": "rakasha_tribes",
    "short": "Carved amber or bone bead infused with spirit ancestor blessing.",
    "description": "Smooth bead worn on necklaces, carved by Rakasha shamans and artisans.",
    "issuer": "Rakasha Artisans",
    "spendable_in": [
      "rakasha_tribes",
      "tribal_bazaars"
    ],
    "player_tip": "Traded among spirit warriors and beast tamers."
  },
  "fey_acorn": {
    "id": "fey_acorn",
    "name": "Feyward Promise Acorn",
    "icon": "🌰",
    "base_value": 6,
    "tier": 4,
    "category": "cultural",
    "type": "Fey Favor",
    "volatility": "wild",
    "liquidity": "specialized",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "feywild_courts": "high"
    },
    "home_faction": "feywild_courts",
    "short": "Gilded acorn binding a fey court hospitality promise.",
    "description": "Golden acorn that hums when touched, representing a formal vow in the Feyward.",
    "issuer": "Feyward High Courts",
    "spendable_in": [
      "feyward",
      "autumnwood_gala"
    ],
    "player_tip": "Bypasses fey memory-loss curses when traded."
  },
  "court_leaf": {
    "id": "court_leaf",
    "name": "Gilded Court Leaf",
    "icon": "🍂",
    "base_value": 3.8,
    "tier": 4,
    "category": "cultural",
    "type": "Court Favor",
    "volatility": "volatile",
    "liquidity": "specialized",
    "acceptance_default": "refused",
    "acceptance": {
      "default": "refused",
      "feywild_courts": "high"
    },
    "home_faction": "feywild_courts",
    "short": "Preserved golden leaf used to settle noble debts in Feyward courts.",
    "description": "Ever-golden oak leaf stamped with court heraldry, used for aristocrat hospitality debts.",
    "issuer": "Lady Aurelian Court",
    "spendable_in": [
      "fey_courts",
      "noble_salons"
    ],
    "player_tip": "Used to negotiate treaties with fey lords."
  },
  "autumn_leaf": {
    "id": "autumn_leaf",
    "name": "Autumnwood Orchard Mark",
    "icon": "🍃",
    "base_value": 0.85,
    "tier": 2,
    "category": "cultural",
    "type": "Provincial Mark",
    "volatility": "seasonal",
    "liquidity": "regional",
    "acceptance_default": "low",
    "acceptance": {
      "default": "low",
      "autumnwood_province": "high"
    },
    "home_faction": "autumnwood_province",
    "short": "Provincial timber and orchard harvest trade mark.",
    "description": "Bronze leaf token used across Autumnwood orchards and timber mills.",
    "issuer": "Autumnwood Province",
    "spendable_in": [
      "autumnwood",
      "timber_mills"
    ],
    "player_tip": "Buys food, wood, and cider at local provincial markets."
  }
};

export const WALLETS = {
  "archie": {
    "name": "Archie Miser",
    "currencies": {
      "gold": 349,
      "silver": 6,
      "bronze": 18
    }
  },
  "bowser": {
    "name": "Bowser",
    "currencies": {
      "platinum": 12,
      "gold": 121,
      "electrum": 51,
      "silver": 13,
      "copper": 11
    }
  },
  "hjumpik": {
    "name": "Hjumpik",
    "currencies": {
      "midland_ducat": 421,
      "gold": 1,
      "dwarf_oathgold": 2
    }
  },
  "markop": {
    "name": "Markop Judi",
    "currencies": {
      "gold": 21,
      "silver": 13,
      "bronze": 28
    }
  },
  "remi": {
    "name": "Remi",
    "currencies": {
      "gold": 62,
      "toad_whistle": 65,
      "decree_strip": 118
    }
  },
  "wario": {
    "name": "Wario",
    "currencies": {
      "gold": 125000,
      "wario_coin": 250000,
      "wario_points": 75000,
      "midland_ducat": 18000,
      "imperial_crown": 12000,
      "doubloon": 2200,
      "cargo_share": 45,
      "broker_mark": 18,
      "credstick": 9000,
      "banana_medallion": 350,
      "shell_credit": 5000
    }
  },
  "waluigi": {
    "name": "Waluigi",
    "currencies": {
      "gold": 83,
      "silver": 140,
      "midland_ducat": 260,
      "guild_seal": 7,
      "archive_writ": 4,
      "arcane_shard": 3,
      "transit_stamp": 1,
      "toad_whistle": 9,
      "court_leaf": 1
    }
  },
  "toad_lee": {
    "name": "Toad Lee",
    "currencies": {
      "toad_bond": 75,
      "relief_stamp": 400,
      "peach_crown": 25,
      "mushroom_coin": 90,
      "silver": 120,
      "gold": 18,
      "toad_whistle": 30,
      "decree_strip": 8,
      "midland_ducat": 40
    }
  },
  "salam": {
    "name": "Salam",
    "currencies": {
      "toad_bond": 18,
      "relief_stamp": 60,
      "silver": 55,
      "gold": 9,
      "mushroom_coin": 22,
      "peach_crown": 3,
      "toad_whistle": 4
    }
  },
  "captain_toadette": {
    "name": "Captain Toadette",
    "currencies": {
      "peach_crown": 15000,
      "gold": 3500,
      "midland_ducat": 8000,
      "mushroom_coin": 12000,
      "toad_bond": 900,
      "relief_stamp": 6000,
      "archive_writ": 12,
      "decree_strip": 120,
      "toad_whistle": 250
    }
  },
  "speaker_l": {
    "name": "Speaker L",
    "currencies": {
      "decree_strip": 500,
      "toad_bond": 1200,
      "relief_stamp": 2500,
      "archive_writ": 20,
      "peach_crown": 300,
      "midland_ducat": 900,
      "toad_whistle": 180,
      "gold": 250
    }
  },
  "penny": {
    "name": "Penny",
    "currencies": {
      "wario_coin": 600,
      "gold": 140,
      "silver": 300,
      "credstick": 1200,
      "archive_writ": 3,
      "broker_mark": 2,
      "midland_ducat": 450,
      "guild_seal": 1
    }
  },
  "the_broker": {
    "name": "The Broker",
    "currencies": {
      "broker_mark": 2000,
      "gold": 50000,
      "midland_ducat": 22000,
      "tea_chit": 900,
      "doubloon": 700,
      "cargo_share": 80,
      "credstick": 40000,
      "archive_writ": 25,
      "blood_vial": 60,
      "vampire_marker": 12,
      "astral_pearl": 9
    }
  },
  "first_mate_jones": {
    "name": "First Mate Jones",
    "currencies": {
      "doubloon": 2500,
      "cargo_share": 65,
      "gold": 1800,
      "silver": 600,
      "wario_coin": 400,
      "coconut_bar": 300,
      "banana_medallion": 90,
      "kremling_koin": 75,
      "broker_mark": 8
    }
  },
  "mystic_morel": {
    "name": "Mystic Morel",
    "currencies": {
      "gold": 1200,
      "silver": 900,
      "mushroom_coin": 300,
      "peach_crown": 40,
      "arcane_shard": 8,
      "astral_pearl": 2,
      "shadow_obol": 25,
      "court_leaf": 3,
      "fey_acorn": 2
    }
  },
  "archmage_theron": {
    "name": "Archmage Theron",
    "currencies": {
      "guild_seal": 300,
      "arcane_shard": 450,
      "transit_stamp": 60,
      "archive_writ": 35,
      "midland_ducat": 20000,
      "gold": 9000,
      "astral_pearl": 18,
      "data_chit": 120
    }
  },
  "lady_toriel": {
    "name": "Lady Toriel",
    "currencies": {
      "autumn_leaf": 30000,
      "midland_ducat": 18000,
      "gold": 6000,
      "archive_writ": 40,
      "court_leaf": 90,
      "spirit_bead": 120,
      "silver": 5000
    }
  },
  "emperor_elgabalus": {
    "name": "Emperor Elgabalus",
    "currencies": {
      "midland_ducat": 500000,
      "gold": 250000,
      "imperial_crown": 80000,
      "archive_writ": 500,
      "silver": 1000000,
      "dwarf_oathgold": 2500,
      "astral_pearl": 40,
      "guild_seal": 150
    }
  },
  "tea_leaf_receivership": {
    "name": "Tea Leaf Syndicate Receivership",
    "currencies": {
      "tea_chit": 2200,
      "gold": 5200,
      "silver": 3100,
      "midland_ducat": 4200,
      "broker_mark": 30,
      "doubloon": 220,
      "cargo_share": 16,
      "credstick": 1200
    }
  },
  "princess_daisy": {
    "name": "Princess Daisy",
    "currencies": {
      "gold": 45000,
      "midland_ducat": 22000,
      "imperial_crown": 9000,
      "mushroom_coin": 14000,
      "peach_crown": 5000,
      "credstick": 4500,
      "archive_writ": 65,
      "toad_whistle": 300
    }
  },
  "donkey_kong": {
    "name": "Donkey Kong",
    "currencies": {
      "banana_medallion": 6500,
      "coconut_bar": 12000,
      "gold": 18000,
      "silver": 7000,
      "doubloon": 900,
      "cargo_share": 35,
      "shell_credit": 900,
      "wario_coin": 700
    }
  },
  "king_k_rool": {
    "name": "King K. Rool",
    "currencies": {
      "kremling_koin": 9000,
      "doubloon": 6000,
      "gold": 35000,
      "cargo_share": 120,
      "broker_mark": 40,
      "blood_vial": 25,
      "banana_medallion": 400,
      "credstick": 2500
    }
  },
  "fawful": {
    "name": "Fawful",
    "currencies": {
      "gold": 12000,
      "mushroom_coin": 8000,
      "beanbean_bean": 9000,
      "credstick": 2500,
      "arcane_shard": 20,
      "broker_mark": 14,
      "midland_ducat": 3000
    }
  },
  "princess_celestia": {
    "name": "Princess Celestia",
    "currencies": {
      "gold": 80000,
      "silver": 250000,
      "court_leaf": 400,
      "fey_acorn": 80,
      "archive_writ": 90,
      "midland_ducat": 30000,
      "mora": 8000,
      "astral_pearl": 22
    }
  },
  "twilight_sparkle": {
    "name": "Twilight Sparkle",
    "currencies": {
      "gold": 32000,
      "guild_seal": 90,
      "arcane_shard": 160,
      "archive_writ": 120,
      "court_leaf": 250,
      "fey_acorn": 50,
      "midland_ducat": 14000,
      "data_chit": 700
    }
  },
  "chairwoman_rin": {
    "name": "Chairwoman Rin",
    "currencies": {
      "kivotos_credit": 2500000,
      "credstick": 120000,
      "data_chit": 12000,
      "gold": 20000,
      "midland_ducat": 25000,
      "archive_writ": 70,
      "guild_seal": 35
    }
  },
  "liyue_qixing": {
    "name": "Liyue Qixing Treasury",
    "currencies": {
      "mora": 3000000,
      "gold": 150000,
      "midland_ducat": 55000,
      "imperial_crown": 25000,
      "doubloon": 4000,
      "cargo_share": 250,
      "astral_pearl": 35,
      "credstick": 40000
    }
  },
  "pokemon_league_chair": {
    "name": "Pok\u00e9mon League Chair Office",
    "currencies": {
      "poke_dollar": 1800000,
      "gold": 40000,
      "credstick": 90000,
      "data_chit": 6000,
      "midland_ducat": 18000,
      "archive_writ": 30,
      "toad_whistle": 120
    }
  },
  "high_king_thorgrim": {
    "name": "High King Thorgrim",
    "currencies": {
      "dwarf_oathgold": 25000,
      "gold": 300000,
      "silver": 900000,
      "midland_ducat": 50000,
      "imperial_crown": 60000,
      "guild_seal": 80,
      "archive_writ": 40,
      "warpstone": 12
    }
  },
  "aemenor_evenflight": {
    "name": "Aemenor Evenflight",
    "currencies": {
      "silver": 187,
      "toad_whistle": 66,
      "imperial_crown": 778
    }
  },
  "agent_t": {
    "name": "Agent T",
    "currencies": {
      "gold": 291,
      "toad_whistle": 44,
      "imperial_crown": 1641
    }
  },
  "archie_miser": {
    "name": "Archie Miser",
    "currencies": {
      "wario_coin": 173,
      "gold": 43,
      "decree_strip": 70,
      "imperial_crown": 513,
      "toad_whistle": 25
    }
  },
  "baldi": {
    "name": "Baldi",
    "currencies": {
      "toad_bond": 134,
      "silver": 556,
      "relief_stamp": 330
    }
  },
  "bones": {
    "name": "Bones",
    "currencies": {
      "decree_strip": 44,
      "wario_coin": 242,
      "gold": 241,
      "toad_whistle": 37,
      "imperial_crown": 1031
    }
  },
  "bryan": {
    "name": "Bryan",
    "currencies": {
      "silver": 145,
      "decree_strip": 205,
      "wario_coin": 257,
      "relief_stamp": 800
    }
  },
  "byscilla_danos": {
    "name": "Byscilla Danos",
    "currencies": {
      "silver": 117,
      "wario_coin": 775,
      "relief_stamp": 175
    }
  },
  "captain_syrup": {
    "name": "Captain Syrup",
    "currencies": {
      "gold": 350,
      "silver": 200
    }
  },
  "chancellor_toadsworth": {
    "name": "Chancellor Toadsworth",
    "currencies": {
      "gold": 366,
      "decree_strip": 20,
      "relief_stamp": 251,
      "toad_whistle": 11,
      "toad_bond": 40
    }
  },
  "commander_g": {
    "name": "Commander G",
    "currencies": {
      "toad_whistle": 24,
      "mushroom_coin": 579,
      "peach_crown": 685
    }
  },
  "corporal_ghost_reyes": {
    "name": "Corporal 'Ghost' Reyes",
    "currencies": {
      "midland_ducat": 3551,
      "wario_coin": 95,
      "decree_strip": 48
    }
  },
  "cranky_kong": {
    "name": "Cranky Kong",
    "currencies": {
      "toad_whistle": 7,
      "wario_coin": 737,
      "gold": 158,
      "decree_strip": 100
    }
  },
  "dan": {
    "name": "Dan",
    "currencies": {
      "silver": 374,
      "relief_stamp": 595,
      "decree_strip": 253,
      "imperial_crown": 1846,
      "midland_ducat": 1357
    }
  },
  "darno_spriggon": {
    "name": "Darno Spriggon",
    "currencies": {
      "gold": 136,
      "toad_bond": 30,
      "decree_strip": 206,
      "wario_coin": 967
    }
  },
  "dyanos": {
    "name": "Dyanos",
    "currencies": {
      "toad_whistle": 51,
      "midland_ducat": 152,
      "silver": 578,
      "decree_strip": 172,
      "gold": 347
    }
  },
  "eager": {
    "name": "Eager",
    "currencies": {
      "imperial_crown": 841,
      "silver": 284,
      "midland_ducat": 963,
      "toad_bond": 105
    }
  },
  "earl_grey": {
    "name": "Earl Grey",
    "currencies": {
      "toad_whistle": 77,
      "wario_coin": 943,
      "imperial_crown": 799,
      "silver": 195,
      "decree_strip": 203
    }
  },
  "elder_rowan_meadowlight": {
    "name": "Elder Rowan Meadowlight",
    "currencies": {
      "decree_strip": 183,
      "relief_stamp": 159,
      "gold": 323,
      "silver": 103
    }
  },
  "embercap": {
    "name": "Embercap",
    "currencies": {
      "silver": 223,
      "gold": 256,
      "relief_stamp": 88,
      "wario_coin": 215
    }
  },
  "feyward_dan": {
    "name": "Feyward Dan",
    "currencies": {
      "decree_strip": 40,
      "toad_bond": 23,
      "midland_ducat": 3090,
      "gold": 122,
      "wario_coin": 613
    }
  },
  "general_ironhand": {
    "name": "General Ironhand",
    "currencies": {
      "gold": 831,
      "toad_whistle": 70,
      "midland_ducat": 2941
    }
  },
  "green_t": {
    "name": "Green T",
    "currencies": {
      "toad_whistle": 18,
      "silver": 454,
      "relief_stamp": 474
    }
  },
  "hargram_fidger": {
    "name": "Hargram Fidger",
    "currencies": {
      "gold": 134,
      "midland_ducat": 218,
      "imperial_crown": 936,
      "decree_strip": 51,
      "toad_whistle": 68
    }
  },
  "herniva": {
    "name": "Herniva",
    "currencies": {
      "gold": 138,
      "relief_stamp": 48,
      "silver": 163,
      "decree_strip": 219
    }
  },
  "king_dedede": {
    "name": "King Dedede",
    "currencies": {
      "gold": 206,
      "decree_strip": 190,
      "imperial_crown": 1993,
      "court_leaf": 2
    }
  },
  "kyle_coinsoul": {
    "name": "Kyle Coinsoul",
    "currencies": {
      "toad_bond": 21,
      "silver": 185,
      "wario_coin": 767,
      "imperial_crown": 866,
      "midland_ducat": 3197
    }
  },
  "lady_aurelian_corvinarus": {
    "name": "Lady Aurelian Corvinarus",
    "currencies": {
      "midland_ducat": 706,
      "court_leaf": 50,
      "archive_writ": 2
    }
  },
  "lady_bloomia": {
    "name": "Lady Bloomia",
    "currencies": {
      "gold": 838,
      "imperial_crown": 217,
      "guild_seal": 23,
      "midland_ducat": 926,
      "court_leaf": 3
    }
  },
  "lanky_kong": {
    "name": "Lanky Kong",
    "currencies": {
      "relief_stamp": 704,
      "imperial_crown": 671,
      "gold": 81,
      "wario_coin": 87
    }
  },
  "leo": {
    "name": "Leo",
    "currencies": {
      "toad_bond": 136,
      "midland_ducat": 237,
      "imperial_crown": 1924,
      "silver": 384
    }
  },
  "lorehold_professor_of_chaos": {
    "name": "Lorehold Professor of Chaos",
    "currencies": {
      "gold": 964,
      "midland_ducat": 188,
      "data_chit": 807
    }
  },
  "luigi": {
    "name": "Luigi",
    "currencies": {
      "toad_whistle": 9,
      "silver": 392,
      "gold": 210,
      "midland_ducat": 3174,
      "wario_coin": 807
    }
  },
  "marcus_ashford": {
    "name": "Marcus Ashford",
    "currencies": {
      "gold": 265,
      "relief_stamp": 53,
      "wario_coin": 560
    }
  },
  "mario": {
    "name": "Mario",
    "currencies": {
      "silver": 427,
      "relief_stamp": 690,
      "wario_coin": 714,
      "imperial_crown": 1539,
      "gold": 370
    }
  },
  "merric": {
    "name": "Merric",
    "currencies": {
      "toad_bond": 261,
      "decree_strip": 264,
      "midland_ducat": 1399,
      "gold": 384
    }
  },
  "miles_edgeworth": {
    "name": "Miles Edgeworth",
    "currencies": {
      "imperial_crown": 888,
      "relief_stamp": 578,
      "silver": 588,
      "toad_whistle": 16
    }
  },
  "mimbus": {
    "name": "Mimbus",
    "currencies": {
      "relief_stamp": 652,
      "gold": 390,
      "midland_ducat": 3683,
      "imperial_crown": 418,
      "decree_strip": 54
    }
  },
  "mistveil": {
    "name": "Mistveil",
    "currencies": {
      "gold": 155,
      "toad_whistle": 39,
      "silver": 206
    }
  },
  "mr_l": {
    "name": "Mr. L",
    "currencies": {
      "gold": 225,
      "wario_coin": 317,
      "relief_stamp": 604,
      "decree_strip": 288
    }
  },
  "mystic_morsole": {
    "name": "Mystic Morsole",
    "currencies": {
      "decree_strip": 133,
      "silver": 395,
      "gold": 364
    }
  },
  "orange_t": {
    "name": "Orange T",
    "currencies": {
      "decree_strip": 167,
      "toad_bond": 167,
      "wario_coin": 273,
      "midland_ducat": 2216,
      "silver": 579
    }
  },
  "original_dan": {
    "name": "Original Dan",
    "currencies": {
      "silver": 365,
      "decree_strip": 187,
      "relief_stamp": 324
    }
  },
  "orvinder_danos": {
    "name": "Orvinder Danos",
    "currencies": {
      "toad_bond": 158,
      "decree_strip": 52,
      "gold": 170,
      "relief_stamp": 126
    }
  },
  "parson_pellinost": {
    "name": "Parson Pellinost",
    "currencies": {
      "imperial_crown": 1013,
      "toad_whistle": 22,
      "decree_strip": 96,
      "midland_ducat": 315,
      "silver": 82
    }
  },
  "pauline": {
    "name": "Pauline",
    "currencies": {
      "imperial_crown": 269,
      "relief_stamp": 714,
      "silver": 365
    }
  },
  "pierce_anamatar": {
    "name": "Pierce Anamatar",
    "currencies": {
      "toad_whistle": 43,
      "decree_strip": 112,
      "wario_coin": 985,
      "relief_stamp": 719
    }
  },
  "princess_peach": {
    "name": "Princess Peach",
    "currencies": {
      "peach_crown": 174,
      "toad_whistle": 28,
      "gold": 342,
      "midland_ducat": 2946
    }
  },
  "prismari": {
    "name": "Prismari",
    "currencies": {
      "wario_coin": 887,
      "silver": 297,
      "toad_whistle": 55,
      "imperial_crown": 820
    }
  },
  "professor_elvin_gadd": {
    "name": "Professor Elvin Gadd",
    "currencies": {
      "credstick": 3125,
      "archive_writ": 15,
      "arcane_shard": 69
    }
  },
  "rakasha_azure": {
    "name": "Rakasha Azure",
    "currencies": {
      "relief_stamp": 360,
      "decree_strip": 112,
      "imperial_crown": 1790,
      "midland_ducat": 3564,
      "silver": 568
    }
  },
  "rakka": {
    "name": "Rakka",
    "currencies": {
      "silver": 598,
      "relief_stamp": 799,
      "toad_bond": 257,
      "imperial_crown": 722,
      "gold": 334
    }
  },
  "roger": {
    "name": "Roger",
    "currencies": {
      "relief_stamp": 544,
      "imperial_crown": 198,
      "wario_coin": 340
    }
  },
  "ryan": {
    "name": "Ryan",
    "currencies": {
      "gold": 390,
      "imperial_crown": 1552,
      "toad_bond": 179,
      "midland_ducat": 951
    }
  },
  "saedia": {
    "name": "Saedia",
    "currencies": {
      "midland_ducat": 3492,
      "toad_bond": 85,
      "decree_strip": 195,
      "relief_stamp": 759,
      "gold": 177
    }
  },
  "sergeant_brick_stone": {
    "name": "Sergeant Brick Stone",
    "currencies": {
      "gold": 68,
      "silver": 200,
      "midland_ducat": 150,
      "toad_bond": 30,
      "relief_stamp": 80
    }
  },
  "sergeant_varn_coldbrook": {
    "name": "Sergeant Varn Coldbrook",
    "currencies": {
      "midland_ducat": 320,
      "gold": 45,
      "silver": 120,
      "toad_whistle": 4,
      "decree_strip": 5
    }
  },
  "smoking_j": {
    "name": "Smoking J",
    "currencies": {
      "midland_ducat": 1218,
      "decree_strip": 174,
      "gold": 64,
      "archive_writ": 16,
      "imperial_crown": 931
    }
  },
  "specialist_miller": {
    "name": "Specialist Miller",
    "currencies": {
      "toad_whistle": 24,
      "midland_ducat": 2549,
      "silver": 363,
      "toad_bond": 185
    }
  },
  "steely": {
    "name": "Steely",
    "currencies": {
      "relief_stamp": 726,
      "wario_coin": 658,
      "imperial_crown": 1833,
      "silver": 554
    }
  },
  "stuckina": {
    "name": "Stuckina",
    "currencies": {
      "imperial_crown": 219,
      "gold": 57,
      "decree_strip": 110,
      "toad_whistle": 14,
      "relief_stamp": 644
    }
  },
  "the_archivist": {
    "name": "The Archivist",
    "currencies": {
      "relief_stamp": 565,
      "toad_bond": 309,
      "decree_strip": 319,
      "silver": 744
    }
  },
  "the_oracle": {
    "name": "The Oracle",
    "currencies": {
      "midland_ducat": 2673,
      "toad_bond": 241,
      "silver": 75,
      "relief_stamp": 441,
      "toad_whistle": 28
    }
  },
  "the_unknown_assassin": {
    "name": "The Unknown Assassin",
    "currencies": {
      "imperial_crown": 1273,
      "wario_coin": 543,
      "midland_ducat": 3867,
      "gold": 25
    }
  },
  "thornbury": {
    "name": "Thornbury",
    "currencies": {
      "gold": 119,
      "toad_bond": 240,
      "midland_ducat": 1461
    }
  },
  "thornpaw": {
    "name": "Thornpaw",
    "currencies": {
      "decree_strip": 10,
      "toad_whistle": 72,
      "silver": 502
    }
  },
  "toadburt": {
    "name": "Toadburt",
    "currencies": {
      "toad_bond": 155,
      "toad_whistle": 68,
      "decree_strip": 56
    }
  },
  "toadette_sr": {
    "name": "Toadette Sr.",
    "currencies": {
      "silver": 190,
      "relief_stamp": 263,
      "toad_bond": 62
    }
  },
  "toadsworth_the_elder": {
    "name": "Toadsworth the Elder",
    "currencies": {
      "imperial_crown": 1714,
      "decree_strip": 87,
      "relief_stamp": 754
    }
  },
  "tymnas": {
    "name": "Tymnas",
    "currencies": {
      "gold": 203,
      "imperial_crown": 1427,
      "relief_stamp": 685
    }
  },
  "usk": {
    "name": "Usk",
    "currencies": {
      "silver": 444,
      "gold": 383,
      "toad_whistle": 56,
      "relief_stamp": 306,
      "wario_coin": 135
    }
  },
  "valorian_stormweave": {
    "name": "Valorian Stormweave",
    "currencies": {
      "decree_strip": 51,
      "wario_coin": 382,
      "imperial_crown": 287,
      "toad_bond": 294,
      "toad_whistle": 29
    }
  },
  "vivian_corvinarus": {
    "name": "Vivian Corvinarus",
    "currencies": {
      "silver": 486,
      "relief_stamp": 676,
      "toad_bond": 279,
      "gold": 306,
      "wario_coin": 456
    }
  },
  "x_o": {
    "name": "X.O.",
    "currencies": {
      "midland_ducat": 2565,
      "toad_bond": 90,
      "gold": 283,
      "toad_whistle": 62
    }
  },
  "battle_mage_kovar": {
    "name": "Battle Mage Kovar",
    "currencies": {
      "gold": 35,
      "arcane_shard": 2,
      "guild_seal": 1
    }
  },
  "lady_aurelian": {
    "name": "Lady Aurelian",
    "currencies": {
      "gold": 250,
      "silver": 40,
      "imperial_crown": 5
    }
  },
  "lord_crimson": {
    "name": "Lord Crimson",
    "currencies": {
      "decree_strip": 197,
      "gold": 598,
      "peach_crown": 952
    }
  },
  "toadsworth_sr": {
    "name": "Toadsworth Sr",
    "currencies": {
      "gold": 8,
      "mushroom_coin": 12,
      "relief_stamp": 4
    }
  },
  "unknown_third_figure": {
    "name": "Unknown Third Figure",
    "currencies": {
      "silver": 221,
      "wario_coin": 815,
      "gold": 303,
      "imperial_crown": 1861
    }
  },
  "dracule_mihawk": {
    "name": "Dracule Mihawk",
    "currencies": {
      "gold": 340,
      "midland_ducat": 120,
      "imperial_crown": 25,
      "dwarf_oathgold": 6,
      "archive_writ": 2,
      "toad_whistle": 1
    }
  },
  "gamma_agent": {
    "name": "Gamma Agent",
    "currencies": {
      "midland_ducat": 500,
      "gold": 85,
      "archive_writ": 8,
      "imperial_crown": 30,
      "data_chit": 12,
      "toad_whistle": 3
    }
  },
  "professor_e_gadd": {
    "name": "Professor Elvin Gadd",
    "currencies": {
      "gold": 1250,
      "silver": 400,
      "credstick": 2800,
      "data_chit": 150,
      "midland_ducat": 600,
      "guild_seal": 4,
      "arcane_shard": 22
    }
  },
  "colonel_vera_steelstorm": {
    "name": "Colonel Vera Steelstorm",
    "currencies": {
      "midland_ducat": 12000,
      "imperial_crown": 8000,
      "gold": 2500,
      "archive_writ": 15,
      "decree_strip": 200,
      "toad_whistle": 80,
      "guild_seal": 6
    }
  },
  "general_vale": {
    "name": "General Vale",
    "currencies": {
      "midland_ducat": 8000,
      "imperial_crown": 5000,
      "gold": 1800,
      "decree_strip": 150,
      "archive_writ": 10
    }
  },
  "admiral_wave": {
    "name": "Admiral Wave Harlan",
    "currencies": {
      "midland_ducat": 15000,
      "imperial_crown": 9000,
      "gold": 4200,
      "doubloon": 800,
      "cargo_share": 35,
      "toad_whistle": 120,
      "archive_writ": 18
    }
  },
  "champion_carter": {
    "name": "Champion Carter Vale",
    "currencies": {
      "gold": 2800,
      "midland_ducat": 3500,
      "imperial_crown": 1200,
      "silver": 600,
      "wario_coin": 400,
      "toad_whistle": 6
    }
  },
  "archon_lumine": {
    "name": "Archon Lumine Starr",
    "currencies": {
      "guild_seal": 120,
      "arcane_shard": 85,
      "transit_stamp": 12,
      "astral_pearl": 15,
      "gold": 6000,
      "midland_ducat": 8000,
      "archive_writ": 30
    }
  },
  "chief_redwood": {
    "name": "Chief Redwood Harlan",
    "currencies": {
      "autumn_leaf": 2500,
      "gold": 800,
      "midland_ducat": 1200,
      "silver": 400,
      "toad_whistle": 20,
      "court_leaf": 15
    }
  },
  "explorer_drake": {
    "name": "Explorer Drake Hawthorne",
    "currencies": {
      "gold": 520,
      "midland_ducat": 400,
      "toad_whistle": 25,
      "data_chit": 40,
      "credstick": 600,
      "kivotos_credit": 800
    }
  },
  "admin_zero": {
    "name": "Admin Zero",
    "currencies": {
      "credstick": 15000,
      "kivotos_credit": 8000,
      "data_chit": 500,
      "gold": 3000,
      "midland_ducat": 2000
    }
  },
  "high_magus_elion": {
    "name": "High Magus Elion Thorne",
    "currencies": {
      "guild_seal": 200,
      "arcane_shard": 150,
      "transit_stamp": 25,
      "astral_pearl": 30,
      "gold": 10000,
      "archive_writ": 50,
      "midland_ducat": 12000
    }
  },
  "high_overseer_aurelia": {
    "name": "High Overseer Aurelia Vance",
    "currencies": {
      "imperial_crown": 15000,
      "midland_ducat": 20000,
      "gold": 5000,
      "archive_writ": 80,
      "decree_strip": 500,
      "dwarf_oathgold": 100
    }
  },
  "warlord_luna": {
    "name": "Warlord Luna Cross",
    "currencies": {
      "gold": 3500,
      "midland_ducat": 2800,
      "imperial_crown": 1200,
      "doubloon": 300,
      "cargo_share": 20,
      "broker_mark": 40,
      "toad_whistle": 15
    }
  },
  "king_alaric": {
    "name": "King Alaric Thorne",
    "currencies": {
      "imperial_crown": 12000,
      "midland_ducat": 18000,
      "gold": 4000,
      "archive_writ": 40,
      "guild_seal": 20,
      "court_leaf": 30,
      "decree_strip": 300
    }
  },
  "lord_sigmar": {
    "name": "Lord Sigmar Helden",
    "currencies": {
      "gold": 6000,
      "imperial_crown": 4000,
      "midland_ducat": 5000,
      "dwarf_oathgold": 80,
      "archive_writ": 25,
      "decree_strip": 200
    }
  },
  "imperator_maximus": {
    "name": "Imperator Maximus Decker",
    "currencies": {
      "imperial_crown": 18000,
      "midland_ducat": 25000,
      "gold": 7000,
      "archive_writ": 60,
      "decree_strip": 400,
      "dwarf_oathgold": 150
    }
  },
  "president_varis": {
    "name": "President Varis Cole",
    "currencies": {
      "credstick": 12000,
      "gold": 5000,
      "midland_ducat": 4000,
      "kivotos_credit": 3000,
      "data_chit": 200,
      "archive_writ": 20
    }
  },
  "ruler_doug": {
    "name": "Ruler Doug Harrow",
    "currencies": {
      "midland_ducat": 3000,
      "gold": 800,
      "silver": 600,
      "decree_strip": 80,
      "toad_bond": 100,
      "relief_stamp": 300
    }
  },
  "silas_thornfield": {
    "name": "Silas Thornfield",
    "currencies": {
      "gold": 2200,
      "midland_ducat": 4000,
      "imperial_crown": 1200,
      "doubloon": 250,
      "cargo_share": 30,
      "credstick": 1800,
      "toad_whistle": 40
    }
  },
  "mira_halbrecht": {
    "name": "Mira Halbrecht",
    "currencies": {
      "midland_ducat": 5000,
      "imperial_crown": 2500,
      "gold": 1500,
      "archive_writ": 25,
      "decree_strip": 180,
      "silver": 800
    }
  },
  "edric_bramble": {
    "name": "Edric Bramble",
    "currencies": {
      "peach_crown": 800,
      "mushroom_coin": 1200,
      "gold": 300,
      "midland_ducat": 500,
      "toad_bond": 200,
      "relief_stamp": 600,
      "toad_whistle": 50
    }
  },
  "lord_corvin_ashford": {
    "name": "Lord Corvin Ashford",
    "currencies": {
      "imperial_crown": 6000,
      "midland_ducat": 4000,
      "gold": 2000,
      "blood_vial": 25,
      "vampire_marker": 4,
      "archive_writ": 15,
      "broker_mark": 20
    }
  },
  "lady_isolde_vance": {
    "name": "Lady Isolde Vance",
    "currencies": {
      "guild_seal": 45,
      "arcane_shard": 70,
      "gold": 1800,
      "midland_ducat": 2200,
      "astral_pearl": 8,
      "transit_stamp": 4,
      "silver": 500
    }
  },
  "captain_helena_frost": {
    "name": "Captain Helena Frost",
    "currencies": {
      "midland_ducat": 2500,
      "imperial_crown": 1800,
      "gold": 600,
      "toad_whistle": 30,
      "data_chit": 25,
      "archive_writ": 8
    }
  },
  "commander_elias_ward": {
    "name": "Commander Elias Ward",
    "currencies": {
      "broker_mark": 150,
      "gold": 3200,
      "midland_ducat": 2800,
      "credstick": 3500,
      "tea_chit": 80,
      "doubloon": 120
    }
  },
  "magus_selene_voss": {
    "name": "Magus Selene Voss",
    "currencies": {
      "transit_stamp": 40,
      "guild_seal": 60,
      "arcane_shard": 50,
      "gold": 900,
      "midland_ducat": 1100,
      "astral_pearl": 5
    }
  },
  "quartermaster_hargrove": {
    "name": "Quartermaster Hargrove",
    "currencies": {
      "midland_ducat": 3500,
      "gold": 400,
      "silver": 800,
      "imperial_crown": 600,
      "toad_whistle": 60,
      "decree_strip": 100
    }
  },
  "barrister_quintin_dell": {
    "name": "Barrister Quintin Dell",
    "currencies": {
      "decree_strip": 300,
      "midland_ducat": 1200,
      "gold": 500,
      "archive_writ": 20,
      "toad_whistle": 25,
      "toad_bond": 80
    }
  },
  "merchant_prince_alric": {
    "name": "Merchant Prince Alric Dane",
    "currencies": {
      "doubloon": 1200,
      "cargo_share": 60,
      "gold": 4500,
      "midland_ducat": 6000,
      "wario_coin": 800,
      "credstick": 2000,
      "coconut_bar": 150
    }
  },
  "doctor_livia_crane": {
    "name": "Doctor Livia Crane",
    "currencies": {
      "kivotos_credit": 4000,
      "credstick": 2500,
      "gold": 600,
      "midland_ducat": 400,
      "data_chit": 60
    }
  },
  "sergeant_coldbrook_fixed": {
    "name": "Sergeant Varn Coldbrook",
    "currencies": {
      "midland_ducat": 450,
      "gold": 95,
      "silver": 240,
      "decree_strip": 12,
      "toad_whistle": 8,
      "relief_stamp": 50
    }
  },
  "professor_mira_torres": {
    "name": "Professor Mira Torres",
    "currencies": {
      "kivotos_credit": 3500,
      "data_chit": 200,
      "credstick": 1800,
      "gold": 400,
      "arcane_shard": 15
    }
  },
  "captain_julia_syrup": {
    "name": "Captain Julia Syrup",
    "currencies": {
      "doubloon": 600,
      "cargo_share": 40,
      "gold": 1200,
      "wario_coin": 300,
      "silver": 500,
      "broker_mark": 15
    }
  },
  "guild_clerk_amelia": {
    "name": "Guild Clerk Amelia Brint",
    "currencies": {
      "archive_writ": 12,
      "guild_seal": 20,
      "gold": 300,
      "midland_ducat": 500,
      "silver": 300,
      "transit_stamp": 2
    }
  },
  "blacksmith_holt": {
    "name": "Blacksmith Holt Mason",
    "currencies": {
      "gold": 900,
      "midland_ducat": 800,
      "dwarf_oathgold": 20,
      "silver": 600,
      "bronze": 200,
      "toad_whistle": 5
    }
  },
  "innkeep_marta": {
    "name": "Innkeep Marta Gable",
    "currencies": {
      "gold": 350,
      "silver": 800,
      "midland_ducat": 600,
      "mushroom_coin": 400,
      "toad_whistle": 15,
      "relief_stamp": 100
    }
  },
  "courier_jace": {
    "name": "Courier Jace Rook",
    "currencies": {
      "toad_whistle": 80,
      "gold": 120,
      "silver": 300,
      "midland_ducat": 200,
      "relief_stamp": 150
    }
  },
  "originaldan": {
    "name": "Original Dan",
    "currencies": {
      "gold": 85,
      "silver": 180,
      "midland_ducat": 420,
      "guild_seal": 3,
      "arcane_shard": 18,
      "bronze": 45,
      "toad_whistle": 2
    }
  }
};




export const BANKS = {
  bank_accounts: [
    { bankId: "bank_regal_treasury", owner: "Archie Miser", balance: 1200, currencyKey: "midland_ducat", note: "Impounded provisional account." },
    { bankId: "bank_rosewood", owner: "Markop Judi", balance: 450, currencyKey: "gold", note: "Mercenary guild escrow deposit." },
    { bankId: "bank_wario_world", owner: "Wario", balance: 95000, currencyKey: "wario_coin", note: "Wario Casino reserve vault." },
    { bankId: "bank_golden_toad", owner: "Liberated Toads", balance: 3400, currencyKey: "toad_bond", note: "Rebuilding and relief fund." },
    { bankId: "bank_gsu_kivotos", owner: "Remi", balance: 12500, currencyKey: "kivotos_credit", note: "Schale engineering scholarship grant." }
  ],
  loans: [
    { id: "loan_1", borrower: "Bowser", creditor: "Wario Enterprise", principal: 5000, currencyKey: "wario_coin", interestRate: 0.15, status: "overdue" },
    { id: "loan_2", borrower: "Liberated Toads", creditor: "Bank of Golden Toad", principal: 1000, currencyKey: "toad_bond", interestRate: 0.035, status: "active" }
  ],
  debts: [
    { id: "debt_1", debtor: "Archie Miser", creditor: "Thornbury / Mages Guild", amountOwed: 2175, currencyKey: "midland_ducat", status: "overdue", note: "Rubber duck bath explosion damages." },
    { id: "debt_2", debtor: "Waluigi", creditor: "Wario", amountOwed: 866, currencyKey: "gold", status: "active", note: "Personal loan with compound interest." },
    { id: "debt_3", debtor: "Disaster Inc.", creditor: "Shadow Estate Archive", amountOwed: 5.1, currencyKey: "index_token", status: "active", note: "Viewing and documentation fees." }
  ]
};

export { SHOP_ITEMS, VENDORS, getAllShopItems };

export function getCurrency(id) {
  return CURRENCIES[id] || null;
}

export function getCurrencyShopItems(currencyId, limit = 20) {
  const allObj = getAllShopItems();
  const all = Array.isArray(allObj) ? allObj : Object.values(allObj || {});
  const currency = getCurrency(currencyId);
  if (!currency) return all.slice(0, limit);

  // Match items by home_faction, vendor, or region
  const matched = all.filter(item => {
    if (!item) return false;
    if (currency.home_faction && (item.vendor === currency.home_faction || item.shippedBy === currency.home_faction)) return true;
    if (currency.spendable_in && currency.spendable_in.some(s => item.vendor?.includes(s) || item.id?.includes(s))) return true;
    return false;
  });

  return (matched.length > 0 ? matched : all).slice(0, limit);
}

export function convertPriceToCurrency(priceInGoldOrXp, targetCurrencyId) {
  const target = getCurrency(targetCurrencyId);
  if (!target || !target.base_value) return priceInGoldOrXp;
  // Standard shop item price in numbers (e.g. 100 XP = ~10 Gold)
  const goldEquivalent = priceInGoldOrXp > 500 ? priceInGoldOrXp / 100 : priceInGoldOrXp;
  const converted = goldEquivalent / target.base_value;
  return converted;
}
