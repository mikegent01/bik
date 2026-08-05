// currency.js — Full Universal Currency System & Shop Integration v3
// 45+ Currencies, Gold Equivalence, Vendor Exchange Rates, and Shop Item Integration.

import { SHOP_ITEMS, VENDORS, getAllShopItems } from './data/commerce/index.js';

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
    "player_tip": "Universal reserve. Everything converts to gold.",
    "expandedDescription": "Gold Piece is cataloged in the Waluipedia exchange ledger as a tier 1 core currency with a base value of 1 gold equivalent per unit. Its filed type is Metal, its issuer is Many mints, and its home authority is no single home faction. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Universal reserve. 1 gold = 10 silver = 100 copper. Bank vault standard. Universal trade gold. Accepted everywhere because purity, weight, and value are internationally recognized. In practical play, Gold Piece should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Core currencies are the boring spine of trade. They matter because everyone can price bread, weapons, lodging, and damages against them without summoning a committee. Metal tender is trusted because weight, purity, and scarcity can be tested by people who do not trust each other. Acceptance record: Default is rated high. Its expected spending zones are Everywhere, Shops, Banks, Travel. Volatility is filed as steady, while liquidity is filed as universal. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Gold Piece creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Gold Piece is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Universal reserve. Everything converts to gold. Waluigi's final note is that Gold Piece should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign."
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
    "acceptance": {
      "default": "high"
    },
    "home_faction": null,
    "short": "High-value core coin. 1 platinum = 10 gold.",
    "description": "High-value precious-metal coin used for large purchases and compact travel funds.",
    "issuer": "Many mints",
    "spendable_in": [
      "everywhere",
      "shops",
      "banks",
      "travel"
    ],
    "player_tip": "Large-denomination party currency.",
    "expandedDescription": "Platinum Piece is cataloged in the Waluipedia exchange ledger as a tier 1 core currency with a base value of 10 gold equivalent per unit. Its filed type is Metal, its issuer is Many mints, and its home authority is no single home faction. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. High-value core coin. 1 platinum = 10 gold. High-value precious-metal coin used for large purchases and compact travel funds. In practical play, Platinum Piece should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Core currencies are the boring spine of trade. They matter because everyone can price bread, weapons, lodging, and damages against them without summoning a committee. Metal tender is trusted because weight, purity, and scarcity can be tested by people who do not trust each other. Acceptance record: Default is rated high. Its expected spending zones are Everywhere, Shops, Banks, Travel. Volatility is filed as steady, while liquidity is filed as universal. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Platinum Piece creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Platinum Piece is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Large-denomination party currency. Waluigi's final note is that Platinum Piece should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead of flattened."
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
    "acceptance": {
      "default": "high"
    },
    "home_faction": null,
    "short": "Mixed silver-gold coin. 1 electrum = 0.5 gold.",
    "description": "Traditional mixed-metal coin used between gold and silver denominations.",
    "issuer": "Many mints",
    "spendable_in": [
      "everywhere",
      "shops",
      "banks",
      "travel"
    ],
    "player_tip": "Useful middle denomination between gold and silver.",
    "expandedDescription": "Electrum Piece is cataloged in the Waluipedia exchange ledger as a tier 1 core currency with a base value of 0.5 gold equivalent per unit. Its filed type is Metal, its issuer is Many mints, and its home authority is no single home faction. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Mixed silver-gold coin. 1 electrum = 0.5 gold. Traditional mixed-metal coin used between gold and silver denominations. In practical play, Electrum Piece should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Core currencies are the boring spine of trade. They matter because everyone can price bread, weapons, lodging, and damages against them without summoning a committee. Metal tender is trusted because weight, purity, and scarcity can be tested by people who do not trust each other. Acceptance record: Default is rated high. Its expected spending zones are Everywhere, Shops, Banks, Travel. Volatility is filed as steady, while liquidity is filed as universal. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Electrum Piece creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Electrum Piece is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Useful middle denomination between gold and silver. Waluigi's final note is that Electrum Piece should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead."
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
    "acceptance": {
      "default": "high"
    },
    "home_faction": null,
    "short": "Low-value core coin. 1 bronze = 0.01 gold.",
    "description": "Small bronze coin used for the same low-denomination niche as copper bits in some ledgers.",
    "issuer": "Many mints",
    "spendable_in": [
      "everywhere",
      "shops",
      "banks",
      "travel"
    ],
    "player_tip": "Small change for exact party cash tracking.",
    "expandedDescription": "Bronze Piece is cataloged in the Waluipedia exchange ledger as a tier 1 core currency with a base value of 0.01 gold equivalent per unit. Its filed type is Metal, its issuer is Many mints, and its home authority is no single home faction. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Low-value core coin. 1 bronze = 0.01 gold. Small bronze coin used for the same low-denomination niche as copper bits in some ledgers. In practical play, Bronze Piece should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Core currencies are the boring spine of trade. They matter because everyone can price bread, weapons, lodging, and damages against them without summoning a committee. Metal tender is trusted because weight, purity, and scarcity can be tested by people who do not trust each other. Acceptance record: Default is rated high. Its expected spending zones are Everywhere, Shops, Banks, Travel. Volatility is filed as steady, while liquidity is filed as universal. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Bronze Piece creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Bronze Piece is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Small change for exact party cash tracking. Waluigi's final note is that Bronze Piece should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this."
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
    "player_tip": "Street-price coin. 1 gold = 10 silver.",
    "expandedDescription": "Silver Piece is cataloged in the Waluipedia exchange ledger as a tier 1 core currency with a base value of 0.1 gold equivalent per unit. Its filed type is Metal, its issuer is Many mints, and its home authority is no single home faction. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Everyday market coin. 1 silver = 10 copper. Everyday trade silver. Common for wages, road expenses, and market produce. In practical play, Silver Piece should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Core currencies are the boring spine of trade. They matter because everyone can price bread, weapons, lodging, and damages against them without summoning a committee. Metal tender is trusted because weight, purity, and scarcity can be tested by people who do not trust each other. Acceptance record: Default is rated high. Its expected spending zones are Markets, Inns, Travel, Wages. Volatility is filed as steady, while liquidity is filed as universal. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Silver Piece creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Silver Piece is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Street-price coin. 1 gold = 10 silver. Waluigi's final note is that Silver Piece should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked."
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
    "player_tip": "100 copper bits equal 1 gold.",
    "expandedDescription": "Copper Bit is cataloged in the Waluipedia exchange ledger as a tier 1 core currency with a base value of 0.01 gold equivalent per unit. Its filed type is Metal, its issuer is Local mints, and its home authority is no single home faction. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Small change. Bread, ferry tips, small supplies. Low-value street currency used for daily living expenses. In practical play, Copper Bit should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Core currencies are the boring spine of trade. They matter because everyone can price bread, weapons, lodging, and damages against them without summoning a committee. Metal tender is trusted because weight, purity, and scarcity can be tested by people who do not trust each other. Acceptance record: Default is rated high. Its expected spending zones are Street, Taverns, Ferries. Volatility is filed as steady, while liquidity is filed as universal. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Copper Bit creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Copper Bit is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: 100 copper bits equal 1 gold. Waluigi's final note is that Copper Bit should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead of flattened into gold."
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
    "player_tip": "Standard currency across the Midlands.",
    "expandedDescription": "Midland Ducat is cataloged in the Waluipedia exchange ledger as a tier 1 imperial currency with a base value of 0.9 gold equivalent per unit. Its filed type is Fiat, its issuer is Regal Treasury, and its home authority is Regal Empire. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Regal Empire main coin. Stable, standardized treasury tender. The official coin of the Regal Empire, backed by the imperial military and tax collectors. In practical play, Midland Ducat should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Imperial currencies carry paperwork as much as value. They move well where tax offices, army payrolls, permits, and official seals can force people to respect them. Fiat tender depends on the issuer remaining powerful enough to make refusal inconvenient. Acceptance record: Default is rated medium; Regal Empire is rated high; Iron Legion is rated high. Its expected spending zones are Regal Empire, Midlands, Gilded Gryphon, Banks. Volatility is filed as steady, while liquidity is filed as wide. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Midland Ducat creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Midland Ducat is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Standard currency across the Midlands. Waluigi's final note is that Midland Ducat should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign."
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
    "player_tip": "Accepted at a premium in official imperial ports.",
    "expandedDescription": "Imperial Crown is cataloged in the Waluipedia exchange ledger as a tier 1 imperial currency with a base value of 1.1 gold equivalent per unit. Its filed type is Fiat, its issuer is Empire Treasury, and its home authority is The Empire. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Heavy state coin backed by imperial army and tax office. Heavy gold-alloy coin used for high-value state contracts and military procurement. In practical play, Imperial Crown should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Imperial currencies carry paperwork as much as value. They move well where tax offices, army payrolls, permits, and official seals can force people to respect them. Fiat tender depends on the issuer remaining powerful enough to make refusal inconvenient. Acceptance record: Default is rated medium; The Empire is rated high. Its expected spending zones are Empire, Military Quartermasters, Banks. Volatility is filed as steady, while liquidity is filed as wide. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Imperial Crown creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Imperial Crown is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Accepted at a premium in official imperial ports. Waluigi's final note is that Imperial Crown should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked."
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
    "player_tip": "Waluigi values these above gold for record acquisition.",
    "expandedDescription": "Archive Clearance Writ is cataloged in the Waluipedia exchange ledger as a tier 1 imperial currency with a base value of 8.5 gold equivalent per unit. Its filed type is Official Permit, its issuer is Regal Archive, and its home authority is Regal Empire. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Restricted clearance writ for classified archives and sealed vaults. Sealed parchment document permitting access to restricted records, classified vaults, and high-tier research. In practical play, Archive Clearance Writ should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Imperial currencies carry paperwork as much as value. They move well where tax offices, army payrolls, permits, and official seals can force people to respect them. Permit money buys authorized access, which is more useful than gold when the locked door has guards and forms. Acceptance record: Default is rated low; Regal Empire is rated high; Shadow Estate is rated high. Its expected spending zones are Archives, Libraries, Vaults. Volatility is filed as managed, while liquidity is filed as specialized. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Archive Clearance Writ creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Archive Clearance Writ is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Waluigi values these above gold for record acquisition. Waluigi's final note is that Archive Clearance Writ should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal."
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
    "player_tip": "Worth 4x normal gold at smiths and jewelers.",
    "expandedDescription": "Dwarven Oathgold is cataloged in the Waluipedia exchange ledger as a tier 1 imperial currency with a base value of 4 gold equivalent per unit. Its filed type is Metal, its issuer is Dwarven Strongholds, and its home authority is Kingdoms Of The Dwarves Wh. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Dwarven oath-stamped pure gold. High intrinsic purity. Pure gold ingot stamped with dwarven clan oaths and anvil runes. In practical play, Dwarven Oathgold should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Imperial currencies carry paperwork as much as value. They move well where tax offices, army payrolls, permits, and official seals can force people to respect them. Metal tender is trusted because weight, purity, and scarcity can be tested by people who do not trust each other. Acceptance record: Default is rated medium; Kingdoms Of The Dwarves Wh is rated high. Its expected spending zones are Dwarven Holds, Smiths, Banks. Volatility is filed as steady, while liquidity is filed as wide. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Dwarven Oathgold creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Dwarven Oathgold is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Worth 4x normal gold at smiths and jewelers. Waluigi's final note is that Dwarven Oathgold should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable."
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
    "player_tip": "Essential for Teyvat merchants and alchemy shops.",
    "expandedDescription": "Mora is cataloged in the Waluipedia exchange ledger as a tier 1 imperial currency with a base value of 1.3 gold equivalent per unit. Its filed type is Fiat, its issuer is Golden House Mint, and its home authority is Teyvat. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Catalyst and currency from Teyvat. Universally accepted in foreign trade. Physical currency minted in Liyue, doubling as an elemental catalyst for craftsmanship. In practical play, Mora should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Imperial currencies carry paperwork as much as value. They move well where tax offices, army payrolls, permits, and official seals can force people to respect them. Fiat tender depends on the issuer remaining powerful enough to make refusal inconvenient. Acceptance record: Default is rated medium; Teyvat is rated high. Its expected spending zones are Teyvat, Foreign Markets, Alchemy Labs. Volatility is filed as steady, while liquidity is filed as wide. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Mora creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Mora is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Essential for Teyvat merchants and alchemy shops. Waluigi's final note is that Mora should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead of flattened into."
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
    "player_tip": "Higher-value red and purple rupees convert faster.",
    "expandedDescription": "Hyrulean Rupee is cataloged in the Waluipedia exchange ledger as a tier 2 foreign currency with a base value of 0.7 gold equivalent per unit. Its filed type is Gem Money, its issuer is Hyrulean Gem Crafters, and its home authority is Hyrule. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Cut gemstone currency in green, blue, red, and silver varieties. Naturally luminous crystal gems cut into precision hexagonal shapes for commerce. In practical play, Hyrulean Rupee should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Foreign currencies travel with merchants, refugees, agents, and rumors. Their value depends on distance, proof of authenticity, and whether the buyer expects to visit that realm again. Gem money is pretty, portable, and dangerously tempting to thieves with good eyesight. Acceptance record: Default is rated low; Hyrule is rated high. Its expected spending zones are Hyrule, Bazaars, General Stores. Volatility is filed as seasonal, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Hyrulean Rupee creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Hyrulean Rupee is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Higher-value red and purple rupees convert faster. Waluigi's final note is that Hyrulean Rupee should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked."
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
    "player_tip": "Standard currency across all regional PokéMarts.",
    "expandedDescription": "PokéDollar is cataloged in the Waluipedia exchange ledger as a tier 2 foreign currency with a base value of 0.6 gold equivalent per unit. Its filed type is Fiat, its issuer is Pokémon League Reserve, and its home authority is Pokemon League. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. League-regulated currency for medical supplies, balls, and travel. Regulated card and paper currency backed by the international Pokémon League. In practical play, PokéDollar should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Foreign currencies travel with merchants, refugees, agents, and rumors. Their value depends on distance, proof of authenticity, and whether the buyer expects to visit that realm again. Fiat tender depends on the issuer remaining powerful enough to make refusal inconvenient. Acceptance record: Default is rated low; Pokemon League is rated high. Its expected spending zones are Pokemarts, Clinics, Trainers. Volatility is filed as steady, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, PokéDollar creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If PokéDollar is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Standard currency across all regional PokéMarts. Waluigi's final note is that PokéDollar should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead of flattened into gold whenever politics."
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
    "player_tip": "Accepted everywhere in Toad Town and Mushroom province.",
    "expandedDescription": "Mushroom Coin is cataloged in the Waluipedia exchange ledger as a tier 2 regional currency with a base value of 0.5 gold equivalent per unit. Its filed type is Fiat, its issuer is Mushroom Regency Mint, and its home authority is Mushroom Regency. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Traditional Mushroom Kingdom gold coin with star emblem. Classic yellow coin stamped with the Mushroom Kingdom crest. Widely used despite civil war strain. In practical play, Mushroom Coin should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Regional tender is strongest near home and weaker where nobody recognizes the issuer. It is excellent for local loyalty and troublesome during planar emergencies. Fiat tender depends on the issuer remaining powerful enough to make refusal inconvenient. Acceptance record: Default is rated low; Mushroom Regency is rated high; Peach Loyalists is rated medium. Its expected spending zones are Toad Town, Mushroom Kingdom, Inns. Volatility is filed as shaky, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Mushroom Coin creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Mushroom Coin is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Accepted everywhere in Toad Town and Mushroom province. Waluigi's final note is that Mushroom Coin should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For."
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
    "player_tip": "Commands heavy discounts at Loyalist quartermasters.",
    "expandedDescription": "Peach Crown is cataloged in the Waluipedia exchange ledger as a tier 2 regional currency with a base value of 1.4 gold equivalent per unit. Its filed type is Restoration Fiat, its issuer is Peach Loyalist Command, and its home authority is Peach Loyalists. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Rebel restoration coin issued by Captain Toadette's quartermasters. Gold coin minted in Bramblehaven bearing Princess Peach's silhouette. In practical play, Peach Crown should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Regional tender is strongest near home and weaker where nobody recognizes the issuer. It is excellent for local loyalty and troublesome during planar emergencies. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Peach Loyalists is rated high. Its expected spending zones are Bramblehaven, Loyalist Camps, Armories. Volatility is filed as volatile, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Peach Crown creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Peach Crown is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Commands heavy discounts at Loyalist quartermasters. Waluigi's final note is that Peach Crown should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked."
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
    "player_tip": "Toad Lee uses these to coordinate regional relief.",
    "expandedDescription": "Toad Rebuilding Bond is cataloged in the Waluipedia exchange ledger as a tier 2 regional currency with a base value of 0.75 gold equivalent per unit. Its filed type is Community Bond, its issuer is Liberated Toad Council, and its home authority is Liberated Toads. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Community rebuilding bond backed by refugee councils. Paper credit issued by Liberated Toads to fund food, shelter repairs, and medical aid. In practical play, Toad Rebuilding Bond should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Regional tender is strongest near home and weaker where nobody recognizes the issuer. It is excellent for local loyalty and troublesome during planar emergencies. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Liberated Toads is rated high. Its expected spending zones are Refugee Camps, Toad Rebuilding Depots. Volatility is filed as shaky, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Toad Rebuilding Bond creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Toad Rebuilding Bond is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Toad Lee uses these to coordinate regional relief. Waluigi's final note is that Toad Rebuilding Bond should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls."
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
    "player_tip": "Crucial currency for displaced civilians and emergency gear.",
    "expandedDescription": "Relief Stamp is cataloged in the Waluipedia exchange ledger as a tier 2 regional currency with a base value of 0.2 gold equivalent per unit. Its filed type is Voucher, its issuer is Toad Relief Network, and its home authority is Liberated Toads. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Ration and shelter voucher issued for emergency supplies. Perforated stamp used for rationing food, medical gauze, and basic tools. In practical play, Relief Stamp should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Regional tender is strongest near home and weaker where nobody recognizes the issuer. It is excellent for local loyalty and troublesome during planar emergencies. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Liberated Toads is rated high. Its expected spending zones are Relief Stations, Soup Kitchens. Volatility is filed as steady, while liquidity is filed as local. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Relief Stamp creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Relief Stamp is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Crucial currency for displaced civilians and emergency gear. Waluigi's final note is that Relief Stamp should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency."
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
    "player_tip": "Speaker L and legal clerks trade heavily in decree strips.",
    "expandedDescription": "Regal Decree Strip is cataloged in the Waluipedia exchange ledger as a tier 2 regional currency with a base value of 1.5 gold equivalent per unit. Its filed type is Legal Tender, its issuer is Imperial Judiciary, and its home authority is Regal Empire. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Magistrate paper strip authorizing court fees, fines, and filings. Official wax-sealed strip used in Imperial courts, parliamentary filings, and bail bonds. In practical play, Regal Decree Strip should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Regional tender is strongest near home and weaker where nobody recognizes the issuer. It is excellent for local loyalty and troublesome during planar emergencies. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Regal Empire is rated high. Its expected spending zones are Courts, Chanceries, Advocates. Volatility is filed as managed, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Regal Decree Strip creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Regal Decree Strip is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Speaker L and legal clerks trade heavily in decree strips. Waluigi's final note is that Regal Decree Strip should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many."
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
    "player_tip": "Great for purchasing Beanbean delicacies and chucklehuck brew.",
    "expandedDescription": "Beanbean Bean Coin is cataloged in the Waluipedia exchange ledger as a tier 2 regional currency with a base value of 0.55 gold equivalent per unit. Its filed type is Fiat, its issuer is Queen Bean's Treasury, and its home authority is Beanbean Kingdom. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Bean-shaped green coin from the Beanbean Kingdom. Curved bean-shaped coin made of polished bronze-gold alloy, favored in southern trade. In practical play, Beanbean Bean Coin should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Regional tender is strongest near home and weaker where nobody recognizes the issuer. It is excellent for local loyalty and troublesome during planar emergencies. Fiat tender depends on the issuer remaining powerful enough to make refusal inconvenient. Acceptance record: Default is rated low; Beanbean Kingdom is rated high. Its expected spending zones are Beanbean Castle, Woohoo Hooniversity. Volatility is filed as steady, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Beanbean Bean Coin creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Beanbean Bean Coin is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Great for purchasing Beanbean delicacies and chucklehuck brew. Waluigi's final note is that Beanbean Bean Coin should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should."
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
    "player_tip": "Waluigi keeps these to ensure instant dossier delivery.",
    "expandedDescription": "Courier Whistle Token is cataloged in the Waluipedia exchange ledger as a tier 3 cultural currency with a base value of 0.3 gold equivalent per unit. Its filed type is Service Token, its issuer is Toad Network Master, and its home authority is Toad Network. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Carved wooden whistle token redeemable for priority courier service. Small carved whistle used by the Toad Network to dispatch emergency couriers. In practical play, Courier Whistle Token should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. Service tokens spend best with the network that created them and worst with anyone who hates obligations. Acceptance record: Default is rated low; Toad Network is rated high. Its expected spending zones are Courier Posts, Toad Network. Volatility is filed as steady, while liquidity is filed as local. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Courier Whistle Token creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Courier Whistle Token is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Waluigi keeps these to ensure instant dossier delivery. Waluigi's final note is that Courier Whistle Token should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead."
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
    "player_tip": "Accepted at all Wario outlets and garlic guilds.",
    "expandedDescription": "Wario Coin is cataloged in the Waluipedia exchange ledger as a tier 2 private currency with a base value of 1.2 gold equivalent per unit. Its filed type is Private Fiat, its issuer is Wario Enterprise Mint, and its home authority is Wario Land. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Gold coin stamped with Wario's face. Backed by greed. Heavy gold-brass coin minted by Wario Enterprise. Wario demands 20% markup when spending it. In practical play, Wario Coin should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Wario Land is rated high. Its expected spending zones are Wario Warehouses, Wario Casino, Diamond City. Volatility is filed as managed, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Wario Coin creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Wario Coin is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Accepted at all Wario outlets and garlic guilds. Waluigi's final note is that Wario Coin should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately."
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
    "player_tip": "Directly spendable for items, weapons, and vehicles in Wario's shop!",
    "expandedDescription": "Wario Shop Credit is cataloged in the Waluipedia exchange ledger as a tier 2 private currency with a base value of 1 gold equivalent per unit. Its filed type is Closed-Loop Credit, its issuer is Wario Quest Board, and its home authority is Wario Land. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Quest board reward points redeemable at Wario's Warehouse. Digital and token shop points issued for completing quest board contracts for Wario. In practical play, Wario Shop Credit should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Wario Land is rated high. Its expected spending zones are Wario Shop, Quest Catalog. Volatility is filed as managed, while liquidity is filed as closed. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Wario Shop Credit creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Wario Shop Credit is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Directly spendable for items, weapons, and vehicles in Wario's shop! Waluigi's final note is that Wario Shop Credit should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should."
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
    "player_tip": "Bowser holds 50,000 Bowser Bux in military reserves.",
    "expandedDescription": "Bowser Bux is cataloged in the Waluipedia exchange ledger as a tier 2 private currency with a base value of 0.4 gold equivalent per unit. Its filed type is Military Scrip, its issuer is Koopa High Command, and its home authority is Koopa Troop. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Koopa military scrip backed by Bowser's fortresses and airships. Heavy iron-plated scrip notes issued to Koopa soldiers, Hammer Bros, and mechanics. In practical play, Bowser Bux should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Koopa Troop is rated high. Its expected spending zones are Koopa Fortresses, Airships, Border Posts. Volatility is filed as managed, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Bowser Bux creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Bowser Bux is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Bowser holds 50,000 Bowser Bux in military reserves. Waluigi's final note is that Bowser Bux should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead of flattened."
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
    "player_tip": "Used for siege engine upgrades and shell plating.",
    "expandedDescription": "Shell Command Credit is cataloged in the Waluipedia exchange ledger as a tier 2 private currency with a base value of 0.8 gold equivalent per unit. Its filed type is Military Credit, its issuer is Kamek's Arcane Ordnance, and its home authority is Koopa Troop. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Siege engineering credit for Koopa armorers and Magikoopa labs. Specialized requisition credit for heavy armor, shell repairs, and Magikoopa scrolls. In practical play, Shell Command Credit should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. Military credit moves supplies through command structures and makes quartermasters feel important. Acceptance record: Default is rated refused; Koopa Troop is rated high. Its expected spending zones are Koopa Labs, Siege Depots. Volatility is filed as steady, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Shell Command Credit creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Shell Command Credit is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Used for siege engine upgrades and shell plating. Waluigi's final note is that Shell Command Credit should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead of flattened into gold whenever politics."
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
    "player_tip": "Highly valued in tropical ports and island bazaars.",
    "expandedDescription": "Banana Medallion is cataloged in the Waluipedia exchange ledger as a tier 2 regional currency with a base value of 2.4 gold equivalent per unit. Its filed type is Trade Token, its issuer is Kong Trade Houses, and its home authority is Dk Crew. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Heavy brass medallion from Kongo Bongo representing stored banana reserves. Durable metal medallion minted in DK Isles that never rots or spoils.\n\nIn practical play, Banana Medallion should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks.\n\nRegional tender is strongest near home and weaker where nobody recognizes the issuer. It is excellent for local loyalty and troublesome during planar emergencies.\n\nThis tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused.\n\nAcceptance record: Default is rated low; Dk Crew is rated high. Its expected spending zones are Kongo Bongo, Banana Hoard Vaults. Volatility is filed as seasonal, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments.\n\nFor roleplaying, Banana Medallion creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from.\n\nFor mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Banana Medallion is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy.\n\nPlayer tip: Highly valued in tropical ports and island bazaars. Waluigi's final note is that Banana Medallion should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal."
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
    "player_tip": "Easily tradable at all maritime docks.",
    "expandedDescription": "Coconut Oil Bar is cataloged in the Waluipedia exchange ledger as a tier 2 regional currency with a base value of 1.1 gold equivalent per unit. Its filed type is Commodity Bar, its issuer is Kong Dock Cooperatives, and its home authority is Dk Crew. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Standardized pressed coconut oil bar used in island maritime trade. Dense commodity bar used for ship waterproofing, cooking oil, and island currency. In practical play, Coconut Oil Bar should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Regional tender is strongest near home and weaker where nobody recognizes the issuer. It is excellent for local loyalty and troublesome during planar emergencies. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Dk Crew is rated high. Its expected spending zones are Ports, Shipyards, Island Markets. Volatility is filed as seasonal, while liquidity is filed as port. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Coconut Oil Bar creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Coconut Oil Bar is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Easily tradable at all maritime docks. Waluigi's final note is that Coconut Oil Bar should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable."
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
    "player_tip": "Used on the black market for stolen military hardware.",
    "expandedDescription": "Kremling Koin is cataloged in the Waluipedia exchange ledger as a tier 4 syndicate currency with a base value of 0.6 gold equivalent per unit. Its filed type is Pirate Scrip, its issuer is Kremling Foundry, and its home authority is Kremling Krew. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Crude iron coin minted by King K. Rool's raiders. Rough iron coin stamped with a crocodile skull, used in pirate dens and Kremling hideouts. In practical play, Kremling Koin should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Kremling Krew is rated high. Its expected spending zones are Kremling Camps, Pirate Hideouts. Volatility is filed as volatile, while liquidity is filed as black_market. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Kremling Koin creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Kremling Koin is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Used on the black market for stolen military hardware. Waluigi's final note is that Kremling Koin should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead."
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
    "player_tip": "Preferred payment for black market maps and stolen cannons.",
    "expandedDescription": "Syrup Doubloon is cataloged in the Waluipedia exchange ledger as a tier 2 regional currency with a base value of 1.8 gold equivalent per unit. Its filed type is Pirate Coin, its issuer is Black Sugar Pirates, and its home authority is Black Sugar Pirates. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Heavy gold pirate coin from Captain Syrup's fleet. Stolen and reminted gold coin widely circulated among privateers and contraband smugglers.\n\nIn practical play, Syrup Doubloon should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks.\n\nRegional tender is strongest near home and weaker where nobody recognizes the issuer. It is excellent for local loyalty and troublesome during planar emergencies.\n\nThis tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused.\n\nAcceptance record: Default is rated low; Black Sugar Pirates is rated high. Its expected spending zones are Pirate Ports, Smuggler Coves. Volatility is filed as volatile, while liquidity is filed as port. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments.\n\nFor roleplaying, Syrup Doubloon creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from.\n\nFor mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Syrup Doubloon is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy.\n\nPlayer tip: Preferred payment for black market maps and stolen cannons. Waluigi's final note is that Syrup Doubloon should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal."
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
    "player_tip": "Can be redeemed for raw goods, spices, and salvaged gear.",
    "expandedDescription": "Cargo Share Draft is cataloged in the Waluipedia exchange ledger as a tier 3 private currency with a base value of 3.2 gold equivalent per unit. Its filed type is Cargo Bill, its issuer is Syrup Quartermaster, and its home authority is Black Sugar Pirates. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Draft backed by captured cargo hauls in pirate warehouses. Promissory note representing a fractional share of looted shipping crates. In practical play, Cargo Share Draft should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Black Sugar Pirates is rated high. Its expected spending zones are Port Warehouses, Cargo Docks. Volatility is filed as wild, while liquidity is filed as port. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Cargo Share Draft creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Cargo Share Draft is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Can be redeemed for raw goods, spices, and salvaged gear. Waluigi's final note is that Cargo Share Draft should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be."
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
    "player_tip": "Primary currency for purchasing spell scrolls and wands.",
    "expandedDescription": "Arcane Shard is cataloged in the Waluipedia exchange ledger as a tier 3 guild currency with a base value of 3 gold equivalent per unit. Its filed type is Magical Commodity, its issuer is Mages Guild Laboratories, and its home authority is Mages Guild. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Crystallized mana shard used for enchanting and spell casting. Luminous crystal containing stabilized magical energy. Used directly in spellcraft or as currency.\n\nIn practical play, Arcane Shard should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks.\n\nGuild money buys access as much as goods. It can open doors, reserve services, and prove that the bearer belongs near dangerous professional infrastructure.\n\nThis tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused.\n\nAcceptance record: Default is rated low; Mages Guild is rated high. Its expected spending zones are Mages Guild, Arcane Shops, Enchanters. Volatility is filed as volatile, while liquidity is filed as specialized. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments.\n\nFor roleplaying, Arcane Shard creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from.\n\nFor mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Arcane Shard is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy.\n\nPlayer tip: Primary currency for purchasing spell scrolls and wands. Waluigi's final note is that Arcane Shard should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal."
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
    "player_tip": "Required for high-level guild passes and restricted grimoires.",
    "expandedDescription": "Mages Guild Seal is cataloged in the Waluipedia exchange ledger as a tier 3 guild currency with a base value of 5 gold equivalent per unit. Its filed type is Service Credit, its issuer is Mages Guild Supreme Council, and its home authority is Mages Guild. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Stamped Guild token redeemable for rare spell components and research. Heavy silver-and-amethyst seal stamped with the Archmage's sigil. In practical play, Mages Guild Seal should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Guild money buys access as much as goods. It can open doors, reserve services, and prove that the bearer belongs near dangerous professional infrastructure. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Mages Guild is rated high. Its expected spending zones are Mages Guild, Guild Hall. Volatility is filed as steady, while liquidity is filed as specialized. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Mages Guild Seal creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Mages Guild Seal is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Required for high-level guild passes and restricted grimoires. Waluigi's final note is that Mages Guild Seal should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies."
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
    "player_tip": "Essential for inter-realm travel and dimensional transport.",
    "expandedDescription": "Planar Transit Stamp is cataloged in the Waluipedia exchange ledger as a tier 3 guild currency with a base value of 9 gold equivalent per unit. Its filed type is Travel Credit, its issuer is Mages Guild Transit Office, and its home authority is Mages Guild. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Authorized stamp for portal transit, teleport circles, and dimensional travel. Enchanted wax stamp verifying authorization and hazard insurance for planar transit. In practical play, Planar Transit Stamp should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Guild money buys access as much as goods. It can open doors, reserve services, and prove that the bearer belongs near dangerous professional infrastructure. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Mages Guild is rated high. Its expected spending zones are Portal Hubs, Transit Offices. Volatility is filed as volatile, while liquidity is filed as specialized. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Planar Transit Stamp creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Planar Transit Stamp is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Essential for inter-realm travel and dimensional transport. Waluigi's final note is that Planar Transit Stamp should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many."
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
    "player_tip": "Sells for extreme value at wizard academies.",
    "expandedDescription": "Astral Pearl is cataloged in the Waluipedia exchange ledger as a tier 3 guild currency with a base value of 12 gold equivalent per unit. Its filed type is Planar Commodity, its issuer is Planar Salvagers, and its home authority is no single home faction. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Rare pearl harvested from astral currents during dimensional storms. Iridescent sphere formed from compressed planar residue in the astral sea. In practical play, Astral Pearl should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Guild money buys access as much as goods. It can open doors, reserve services, and prove that the bearer belongs near dangerous professional infrastructure. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Mages Guild is rated high. Its expected spending zones are Astral Markets, High Arcane Shops. Volatility is filed as volatile, while liquidity is filed as specialized. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Astral Pearl creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Astral Pearl is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Sells for extreme value at wizard academies. Waluigi's final note is that Astral Pearl should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign."
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
    "player_tip": "Remi holds 5,000 Kivotos Credits in digital reserves.",
    "expandedDescription": "Kivotos Credit is cataloged in the Waluipedia exchange ledger as a tier 3 digital currency with a base value of 1.2 gold equivalent per unit. Its filed type is Digital Fiat, its issuer is General Student Union, and its home authority is Kivotos. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Electronic currency used across Kivotos academy-city schools and clubs. Digital credit system managed by the General Student Union across all academy districts. In practical play, Kivotos Credit should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Digital and credit currencies are fast, compact, and suspicious to anyone who prefers a coin they can bite. They require records, terminals, or institutional trust. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Kivotos is rated high. Its expected spending zones are Kivotos, School Stores, Club Bazaars. Volatility is filed as steady, while liquidity is filed as networked. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Kivotos Credit creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Kivotos Credit is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Remi holds 5,000 Kivotos Credits in digital reserves. Waluigi's final note is that Kivotos Credit should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For."
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
    "player_tip": "Used to buy siege constructs, ammo, and robotics gear.",
    "expandedDescription": "Millennium Data Chit is cataloged in the Waluipedia exchange ledger as a tier 3 digital currency with a base value of 2.6 gold equivalent per unit. Its filed type is Data Credit, its issuer is Millennium Science School, and its home authority is Millennium Science School. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Encrypted memory token redeemable for compute time and tech prototypes. High-density data chit storing encrypted schematics, compute hours, and lab access rights. In practical play, Millennium Data Chit should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Digital and credit currencies are fast, compact, and suspicious to anyone who prefers a coin they can bite. They require records, terminals, or institutional trust. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Millennium Science School is rated high. Its expected spending zones are Millennium Labs, Tech Bazaars. Volatility is filed as steady, while liquidity is filed as networked. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Millennium Data Chit creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Millennium Data Chit is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Used to buy siege constructs, ammo, and robotics gear. Waluigi's final note is that Millennium Data Chit should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi."
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
    "player_tip": "Instantly spendable at all online or tech-integrated vendors.",
    "expandedDescription": "Encrypted Credstick is cataloged in the Waluipedia exchange ledger as a tier 3 digital currency with a base value of 1.1 gold equivalent per unit. Its filed type is Digital Currency, its issuer is Internet Federation Bank, and its home authority is Internet Federation. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Portable hardware stick holding encrypted digital currency. Handheld chip containing cryptographically secured funds for internet and sci-fi markets. In practical play, Encrypted Credstick should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Digital and credit currencies are fast, compact, and suspicious to anyone who prefers a coin they can bite. They require records, terminals, or institutional trust. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Internet Federation is rated high. Its expected spending zones are Internet, Digital Markets. Volatility is filed as stable, while liquidity is filed as networked. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Encrypted Credstick creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Encrypted Credstick is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Instantly spendable at all online or tech-integrated vendors. Waluigi's final note is that Encrypted Credstick should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency."
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
    "player_tip": "Worth 20 gold pieces on the black market. Archie holds 3.",
    "expandedDescription": "Soul Coin is cataloged in the Waluipedia exchange ledger as a tier 4 occult currency with a base value of 20 gold equivalent per unit. Its filed type is Infernal Currency, its issuer is Infernal Fiends, and its home authority is no single home faction. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Lower-plane infernal iron coin trapping a living soul. High value, dark moral cost. Heavy coin forged from infernal iron that whispers with the soul trapped inside it. In practical play, Soul Coin should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Occult tender is valuable because it is useful to people who should not be left alone with it. Handling rules matter more than face value. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Onyx Hand is rated medium. Its expected spending zones are Occult Markets, Black Market, Vampire Courts. Volatility is filed as volatile, while liquidity is filed as black_market. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Soul Coin creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Soul Coin is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Worth 20 gold pieces on the black market. Archie holds 3. Waluigi's final note is that Soul Coin should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread."
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
    "player_tip": "Standard currency in Shadow Estate dinner exchanges.",
    "expandedDescription": "Preserved Blood Vial is cataloged in the Waluipedia exchange ledger as a tier 4 occult currency with a base value of 2.5 gold equivalent per unit. Its filed type is Occult Commodity, its issuer is Onyx Hand Bloodmasters, and its home authority is Onyx Hand. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Sealed alchemy vial of alchemically preserved blood for vampire markets. Crystal vial of blood graded by lineage, purity, and magical resonance. In practical play, Preserved Blood Vial should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Occult tender is valuable because it is useful to people who should not be left alone with it. Handling rules matter more than face value. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Onyx Hand is rated high. Its expected spending zones are Onyx Hand, Vampire Estates. Volatility is filed as volatile, while liquidity is filed as black_market. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Preserved Blood Vial creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Preserved Blood Vial is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Standard currency in Shadow Estate dinner exchanges. Waluigi's final note is that Preserved Blood Vial should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many."
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
    "player_tip": "Used to bribe Shadow Estate guards and buy servant-pass keys.",
    "expandedDescription": "Shadow Obol is cataloged in the Waluipedia exchange ledger as a tier 4 occult currency with a base value of 3.5 gold equivalent per unit. Its filed type is Shadow Scrip, its issuer is Shadow Estate Steward, and its home authority is Shadow Estate. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Cold obsidian coin used by servants, hunters, and ghosts in the Shadowfell. Flat obsidian coin etched with fading sigils, absorbed from planar shadow fields. In practical play, Shadow Obol should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Occult tender is valuable because it is useful to people who should not be left alone with it. Handling rules matter more than face value. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Shadow Estate is rated high. Its expected spending zones are Shadow Estate, Shadowfell. Volatility is filed as shaky, while liquidity is filed as local. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Shadow Obol creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Shadow Obol is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Used to bribe Shadow Estate guards and buy servant-pass keys. Waluigi's final note is that Shadow Obol should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many."
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
    "player_tip": "Redeemable for safe passage or assassination contracts.",
    "expandedDescription": "Corvinarus Favor Marker is cataloged in the Waluipedia exchange ledger as a tier 4 occult currency with a base value of 15 gold equivalent per unit. Its filed type is Favor Credit, its issuer is House Corvinarus, and its home authority is Onyx Hand. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Formal favor marker issued by vampire patriarchs. Carved bone marker bearing the Corvinarus crest, representing an aristocratic blood favor.\n\nIn practical play, Corvinarus Favor Marker should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks.\n\nOccult tender is valuable because it is useful to people who should not be left alone with it. Handling rules matter more than face value.\n\nThis tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused.\n\nAcceptance record: Default is rated refused; Onyx Hand is rated high. Its expected spending zones are Vampire Courts, Onyx Hand. Volatility is filed as wild, while liquidity is filed as specialized. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments.\n\nFor roleplaying, Corvinarus Favor Marker creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from.\n\nFor mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Corvinarus Favor Marker is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy.\n\nPlayer tip: Redeemable for safe passage or assassination contracts. Waluigi's final note is that Corvinarus Favor Marker should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal."
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
    "player_tip": "Used in the Shadow Estate library to unlock secret dossiers.",
    "expandedDescription": "Archive Index Token is cataloged in the Waluipedia exchange ledger as a tier 4 occult currency with a base value of 5.5 gold equivalent per unit. Its filed type is Archive Scrip, its issuer is The Archivist, and its home authority is Shadow Estate. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Archivist token for viewing, copying, and stealing restricted records. Heavy lead token issued by the Shadow Estate Archivist for catalog access. In practical play, Archive Index Token should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Occult tender is valuable because it is useful to people who should not be left alone with it. Handling rules matter more than face value. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Shadow Estate is rated high. Its expected spending zones are Shadow Archives, Forbidden Scriptoriums. Volatility is filed as shaky, while liquidity is filed as local. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Archive Index Token creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Archive Index Token is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Used in the Shadow Estate library to unlock secret dossiers. Waluigi's final note is that Archive Index Token should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario."
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
    "player_tip": "Valued by dark mages, Skaven engineers, and forbidden cults.",
    "expandedDescription": "Warpstone Token is cataloged in the Waluipedia exchange ledger as a tier 4 occult currency with a base value of 10 gold equivalent per unit. Its filed type is Hazard Commodity, its issuer is Skaven Under-Mints, and its home authority is Skaven. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Refined chaos crystal token. Corrupting, illegal, and extremely valuable. Glowing green crystal token emitting mutagenic chaos radiation. In practical play, Warpstone Token should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Occult tender is valuable because it is useful to people who should not be left alone with it. Handling rules matter more than face value. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Skaven is rated high. Its expected spending zones are Under Markets, Black Market. Volatility is filed as wild, while liquidity is filed as black_market. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Warpstone Token creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Warpstone Token is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Valued by dark mages, Skaven engineers, and forbidden cults. Waluigi's final note is that Warpstone Token should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be."
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
    "player_tip": "Redeemable for high-grade political intelligence.",
    "expandedDescription": "Broker Information Mark is cataloged in the Waluipedia exchange ledger as a tier 4 syndicate currency with a base value of 7 gold equivalent per unit. Its filed type is Info Credit, its issuer is The Broker, and its home authority is Freelancer Underworld. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Underworld mark redeemable for blackmail, intel, and silence. Dark metal token stamped with a magnifying glass over a coin, used by The Broker's network. In practical play, Broker Information Mark should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Freelancer Underworld is rated high. Its expected spending zones are Underworld Dens, Freelancer Guild. Volatility is filed as volatile, while liquidity is filed as black_market. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Broker Information Mark creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Broker Information Mark is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Redeemable for high-grade political intelligence. Waluigi's final note is that Broker Information Mark should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately."
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
    "player_tip": "Settles contraband debts without paper trails.",
    "expandedDescription": "Tea Leaf Syndicate Chit is cataloged in the Waluipedia exchange ledger as a tier 4 syndicate currency with a base value of 1.6 gold equivalent per unit. Its filed type is Syndicate Credit, its issuer is Tea Leaf Syndicate Treasury, and its home authority is Tea Leaf Syndicate. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Private bank chit used in smuggling networks and tea houses. Watermarked paper chit infused with tea essence, issued by Chai T and the Tea Syndicate. In practical play, Tea Leaf Syndicate Chit should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Tea Leaf Syndicate is rated high. Its expected spending zones are Tea Houses, Smuggler Docks. Volatility is filed as managed, while liquidity is filed as black_market. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Tea Leaf Syndicate Chit creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Tea Leaf Syndicate Chit is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Settles contraband debts without paper trails. Waluigi's final note is that Tea Leaf Syndicate Chit should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable."
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
    "player_tip": "Traded among spirit warriors and beast tamers.",
    "expandedDescription": "Rakasha Spirit Bead is cataloged in the Waluipedia exchange ledger as a tier 3 cultural currency with a base value of 2.2 gold equivalent per unit. Its filed type is Cultural Token, its issuer is Rakasha Artisans, and its home authority is Rakasha Tribes. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Carved amber or bone bead infused with spirit ancestor blessing. Smooth bead worn on necklaces, carved by Rakasha shamans and artisans. In practical play, Rakasha Spirit Bead should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Rakasha Tribes is rated high. Its expected spending zones are Rakasha Tribes, Tribal Bazaars. Volatility is filed as steady, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Rakasha Spirit Bead creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Rakasha Spirit Bead is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Traded among spirit warriors and beast tamers. Waluigi's final note is that Rakasha Spirit Bead should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead."
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
    "player_tip": "Bypasses fey memory-loss curses when traded.",
    "expandedDescription": "Feyward Promise Acorn is cataloged in the Waluipedia exchange ledger as a tier 4 cultural currency with a base value of 6 gold equivalent per unit. Its filed type is Fey Favor, its issuer is Feyward High Courts, and its home authority is Feywild Courts. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Gilded acorn binding a fey court hospitality promise. Golden acorn that hums when touched, representing a formal vow in the Feyward. In practical play, Feyward Promise Acorn should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated refused; Feywild Courts is rated high. Its expected spending zones are Feyward, Autumnwood Gala. Volatility is filed as wild, while liquidity is filed as specialized. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Feyward Promise Acorn creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Feyward Promise Acorn is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Bypasses fey memory-loss curses when traded. Waluigi's final note is that Feyward Promise Acorn should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead of."
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
    "player_tip": "Used to negotiate treaties with fey lords.",
    "expandedDescription": "Gilded Court Leaf is cataloged in the Waluipedia exchange ledger as a tier 4 cultural currency with a base value of 3.8 gold equivalent per unit. Its filed type is Court Favor, its issuer is Lady Aurelian Court, and its home authority is Feywild Courts. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Preserved golden leaf used to settle noble debts in Feyward courts. Ever-golden oak leaf stamped with court heraldry, used for aristocrat hospitality debts. In practical play, Gilded Court Leaf should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. Court favors are velvet chains with exchange rates. Acceptance record: Default is rated refused; Feywild Courts is rated high. Its expected spending zones are Fey Courts, Noble Salons. Volatility is filed as volatile, while liquidity is filed as specialized. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Gilded Court Leaf creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Gilded Court Leaf is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Used to negotiate treaties with fey lords. Waluigi's final note is that Gilded Court Leaf should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead of flattened into gold whenever politics, favors, or."
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
    "player_tip": "Buys food, wood, and cider at local provincial markets.",
    "expandedDescription": "Autumnwood Orchard Mark is cataloged in the Waluipedia exchange ledger as a tier 2 cultural currency with a base value of 0.85 gold equivalent per unit. Its filed type is Provincial Mark, its issuer is Autumnwood Province, and its home authority is Autumnwood Province. Waluigi begins with these boring facts because boring facts are how merchants avoid being stabbed, sued, or tricked by a smiling mushroom with a counterfeit purse. Provincial timber and orchard harvest trade mark. Bronze leaf token used across Autumnwood orchards and timber mills. In practical play, Autumnwood Orchard Mark should be read as more than a number in a wallet. It tells the table what institutions are nearby, which borders matter, and whether the bearer is carrying ordinary purchasing power or a political claim. A gold-equivalent rate makes conversion simple, but it does not erase the social meaning of the coin. A shopkeeper may accept the value while still asking why the party has it. A banker may honor the rate while quietly reporting the transaction. A smuggler may pay extra for it because official channels are closed. That is why Waluigi refuses to flatten every currency into one yellow pile, no matter how loudly Wario asks. Other tender lives in the awkward space between coin, symbol, and special-purpose claim. This tender's type gives the first clue to how it should be challenged, authenticated, taxed, stolen, or politely refused. Acceptance record: Default is rated low; Autumnwood Province is rated high. Its expected spending zones are Autumnwood, Timber Mills. Volatility is filed as seasonal, while liquidity is filed as regional. Those two labels decide whether the party can unload it quickly or must find a specialist, bank, guild office, military quartermaster, shrine, court, or criminal broker. High liquidity means the money moves before the story catches up. Low liquidity means every attempted payment becomes a scene. Managed or seasonal value means timing matters. Shaky value means the party should expect arguments. For roleplaying, Autumnwood Orchard Mark creates hooks whenever it appears in treasure, debt, bribes, ransom, wages, tolls, or evidence. A purse full of this tender can imply recent travel, faction service, black market contact, patronage, or theft. NPC reactions should vary. Loyalists may treat it as honorable. Rivals may treat it as contamination. Bureaucrats may demand forms. Underworld buyers may demand a discount for risk. Fey courts may ask whether the bearer understands the obligation attached to the payment. Waluigi considers these complications features, not bugs, because complications are where the good archive entries come from. For mechanical handling, use the listed base value for fast conversion, then adjust for local acceptance, scarcity, and danger. If Autumnwood Orchard Mark is being used in its home economy, let it spend close to face value and reward players for carrying the right tender. If it is used far away, ask whether the recipient has a reason to trust it. If it is used during war, panic, occupation, blockade, or planar fracture, make the rate swing. A desperate buyer may overpay. A cautious bank may underpay. A hostile guard may confiscate it as evidence and call that monetary policy. Player tip: Buys food, wood, and cider at local provincial markets. Waluigi's final note is that Autumnwood Orchard Mark should remain visible in the story. Let characters count it, argue over it, hide it, pledge it, counterfeit it, and recognize it on a table across the room. Money is not just math. Money is memory with an exchange rate. Waluigi's advice is simple: record where it came from, who will honor it, and who will become insulted if it is offered at the wrong counter. A smart party keeps a mixed purse, because one perfect coin is useless when the innkeeper wants local money and the guard wants proof of permission. Banks care about liquidity, merchants care about resale, soldiers care about payroll, and criminals care about whether the payment can be traced. The practical value of this tender changes when the party crosses borders, enters a dungeon economy, deals with planar courts, or tries to buy silence. Counterfeiting risk should be judged by materials, magical signature, issuer records, and whether the supposed coin has a story that sounds rehearsed. When in doubt, convert only part of the holding; keeping some native tender preserves bargaining power and avoids looking desperate. Wario will always claim the spread is normal. Waluigi notes that Wario calls many profitable lies normal. For campaign accounting, this currency should be tracked separately instead of flattened into."
  }
};

export const WALLETS = {
  "archie": {
    "name": "Archie Miser",
    "currencies": {
      "gold": -34,
      "silver": 6,
      "bronze": 18
    }
  },
  "bowser": {
    "name": "Bowser",
    "currencies": {
      "bowser_bux": 75000,
      "shell_credit": 12000,
      "gold": 8500,
      "platinum": 240,
      "electrum": 320,
      "silver": 1800,
      "copper": 4000,
      "imperial_crown": 800,
      "midland_ducat": 1500,
      "doubloon": 400,
      "cargo_share": 45,
      "wario_coin": 600,
      "broker_mark": 25
    }
  },
  "hjumpik": {
    "name": "Hjumpik",
    "currencies": {
      "midland_ducat": 421,
      "gold": 120,
      "dwarf_oathgold": 8,
      "silver": 180,
      "toad_whistle": 6
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
      "kivotos_credit": 5500,
      "credstick": 1200,
      "data_chit": 85,
      "gold": 180,
      "silver": 220,
      "midland_ducat": 300,
      "toad_whistle": 12,
      "mushroom_coin": 150,
      "relief_stamp": 90
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
      "gold": 9500,
      "silver": 4000,
      "court_leaf": 450,
      "fey_acorn": 280,
      "astral_pearl": 120,
      "guild_seal": 35,
      "arcane_shard": 90,
      "autumn_leaf": 150
    }
  },
  "twilight_sparkle": {
    "name": "Twilight Sparkle",
    "currencies": {
      "gold": 3200,
      "silver": 1500,
      "court_leaf": 180,
      "fey_acorn": 120,
      "astral_pearl": 45,
      "guild_seal": 60,
      "arcane_shard": 110,
      "data_chit": 80,
      "transit_stamp": 8
    }
  },
  "chairwoman_rin": {
    "name": "Chairwoman Rin",
    "currencies": {
      "kivotos_credit": 2500000,
      "credstick": 120000,
      "data_chit": 12000,
      "gold": 20000,
      "midland_ducat": 1200,
      "archive_writ": 70,
      "guild_seal": 35
    }
  },
  "liyue_qixing": {
    "name": "Liyue Qixing Treasury",
    "currencies": {
      "mora": 3000000,
      "gold": 150000,
      "midland_ducat": 2500,
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
      "toad_bond": 90,
      "relief_stamp": 350,
      "peach_crown": 35,
      "mushroom_coin": 280,
      "gold": 95,
      "silver": 240,
      "toad_whistle": 18,
      "decree_strip": 12,
      "broker_mark": 6
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
      "doubloon": 950,
      "cargo_share": 55,
      "gold": 2800,
      "silver": 1200,
      "wario_coin": 450,
      "kremling_koin": 180,
      "broker_mark": 22,
      "coconut_bar": 90,
      "banana_medallion": 60
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
      "gold": 220,
      "silver": 480,
      "mushroom_coin": 650,
      "peach_crown": 85,
      "toad_bond": 140,
      "relief_stamp": 420,
      "toad_whistle": 22,
      "tea_chit": 60,
      "broker_mark": 8,
      "wario_coin": 45
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
      "gold": 150,
      "silver": 320,
      "midland_ducat": 280,
      "toad_whistle": 20,
      "relief_stamp": 180,
      "mushroom_coin": 200,
      "peach_crown": 15
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
  },
  "rodger": {
    "name": "Rodger",
    "currencies": {
      "toad_bond": 110,
      "relief_stamp": 420,
      "mushroom_coin": 340,
      "peach_crown": 28,
      "gold": 78,
      "silver": 310,
      "toad_whistle": 14,
      "midland_ducat": 60
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
