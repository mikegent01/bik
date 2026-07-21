// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_028 = {
  "midlands_feywild_blood_pearl": {
    "id": "midlands_feywild_blood_pearl",
    "name": "Feywild Blood Pearl",
    "description": "A pulsating gemstone harvested from the Feywild rifts of Raventree Manor. When worn, it grants the wearer temporary access to arcane illusions and fey-aligned combat abilities.",
    "price": 2500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% chance to evade area-of-effect attacks",
      "+10% bonus to stealth and illusion casting",
      "Regenerates 10% health per turn while active"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "midlands_feywild_forged_mace": {
    "id": "midlands_feywild_forged_mace",
    "name": "Feywild Forged Mace of the Whispering Iron",
    "description": "Crafted by a fey artisan in the depths of the Feywild, this mace channels the raw power of the wild with a blade of enchanted iron. It strikes with both ferocity and cunning.",
    "category": "equipment",
    "price": 7500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+20% damage to undead and mechanical foes",
      "+10% chance to deal bonus damage to targets in shadow",
      "When struck, inflicts a 10% chance to cause temporary confusion to the target"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7
  },
  "midlands_feywild_talisman": {
    "id": "midlands_feywild_talisman",
    "name": "Shadowed Feyheart Talisman",
    "description": "A gemstone fused with forgotten Fey magic, humming with echoes of the forest’s forgotten lords. Grants the wearer the ability to move through shadows and speak with fey spirits.",
    "category": "equipment",
    "price": 3000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+10% chance to see hidden paths",
      "+5% chance to summon fey ally for 3 turns",
      "Grants resistance to magic that targets mind"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "midlands_forged_fate_rod": {
    "id": "midlands_forged_fate_rod",
    "name": "The Forge of the Fractured Atrium",
    "description": "A rod of unbroken steel, forged in the ruins of a collapsed factory and tempered by the void. Grants the wielder the ability to manipulate the flow of iron and metal magic, allowing them to reshape the world around them. A weapon of both destruction and creation.",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% bonus to metal manipulation or construction checks",
      "+15% chance to create temporary metal constructs",
      "Grants temporary immunity to metallic traps"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_forged_mind_amber": {
    "id": "midlands_forged_mind_amber",
    "name": "Forged Mind Amber",
    "description": "A crystalline shard that channels the will of the Iron Legion’s greatest minds. Wears it to gain insight into enemy tactics and predict their next move.",
    "price": 2000,
    "icon": "🌀",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Reveals enemy tactic patterns for 10 seconds",
      "+10% chance to hit with ranged attacks",
      "Grants temporary “Strategic Mind” buff"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 4
  },
  "midlands_forged_soul": {
    "id": "midlands_forged_soul",
    "name": "Iron Blood Chalice",
    "description": "A goblet etched with the sigils of the Iron Legion’s fallen commanders. When consumed, it grants temporary courage and grants the drinker a +2 bonus to all combat rolls for 5 minutes.",
    "price": 1200,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Temporary +2 to all combat rolls",
      "Grants resistance to fear and intimidation",
      "Consumes 100 HP upon activation"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_gear_blood_torch": {
    "id": "midlands_gear_blood_torch",
    "name": "Gear Blood Torch",
    "description": "A torch infused with the marrow of a mechanized warhorse. It burns with crimson heat, igniting enemy armor and granting the wielder a brief burst of mechanical rage. Use at your own peril—its flame consumes the soul of the wielder if used more than once.",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% damage to armored targets",
      "+10% movement speed for 10 seconds",
      "-5% chance to be detected by stealth"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_gear_of_blood_and_steel": {
    "id": "midlands_gear_of_blood_and_steel",
    "name": "Gear of Blood and Steel",
    "description": "A ceremonial armor piece carved from the bones of fallen legionaries and tempered with the blood of their fallen comrades. Wearing it grants the user the honor of the Iron Legion’s wrath.",
    "category": "equipment",
    "price": 3200,
    "icon": "🗡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +150 defense and +100 attack",
      "Inflicts “Blood Oath” status on enemies (reduces their morale by 20% for 3 turns)",
      "When damaged, it regenerates 5% HP per second for 5 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "midlands_gear_of_broken_legends": {
    "id": "midlands_gear_of_broken_legends",
    "name": "Gear of Broken Legends",
    "description": "Forged from the remains of fallen iron titans, this gear carries the echoes of past victories and defeats. Grants a grim aura that intimidates foes.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% chance to cause fear in enemies",
      "+15% chance to paralyze stunned foes",
      "Grants +10% damage if enemy has taken damage recently"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_gear_of_silent_machines": {
    "id": "midlands_gear_of_silent_machines",
    "name": "Gear of Silent Machines",
    "description": "A set of gear that mutes sound and dampens mechanical noise, ideal for stealthy sabotage or infiltrating enemy factories.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "-50% sound detection range for enemies",
      "+10% chance to bypass enemy traps",
      "+20% stealth duration"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_blood_mill": {
    "id": "midlands_gear_of_the_blood_mill",
    "name": "Gear of the Blood Mill",
    "description": "A rusted gear forged from the last mill of the Iron Legion’s bloodiest siege. Wears the mark of the Toad’s defeat and amplifies the wearer’s strength with every step. Glows crimson when rage is summoned.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+200% damage against Toad-aligned enemies",
      "+10% movement speed when in combat",
      "Grants 10 seconds of silence on enemies upon hitting them with melee attacks"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_bloodforge": {
    "id": "midlands_gear_of_the_bloodforge",
    "name": "Bloodforge Golem’s Heart",
    "description": "A pulsating relic embedded with the essence of a once-mighty iron golem. Wields it to summon temporary constructs of molten steel, perfect for siege warfare. Costs sanity to maintain.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% armor regeneration",
      "+10% chance to summon “Iron Spire” (10 sec, 30% damage)",
      "-10% movement speed while active"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_cursed": {
    "id": "midlands_gear_of_the_cursed",
    "name": "Gear of the Cursed",
    "description": "A rusted gear that whispers the names of prisoners. Wearing it grants temporary immunity to fear and causes enemies to hesitate when encountering it.",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% damage reduction from fear effects",
      "+10% chance to inflict “Cursed Curse” (enemy becomes slow for 1 turn)",
      "+5% chance to trigger “Execution Rattle” (scream effect, deals 10% damage)"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6
  },
  "midlands_gear_of_the_dismantler": {
    "id": "midlands_gear_of_the_dismantler",
    "name": "Gear of the Dismantler",
    "description": "A cursed tool of the Kremling Krew, this gear lets you dismantle enemy defenses while gaining temporary immunity to environmental hazards. Ideal for the siege of the Ironworks.",
    "category": "equipment",
    "price": 2000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+10% chance to destroy enemy fortifications",
      "+5% chance to disarm traps",
      "+10% armor regeneration after using dismantle effect"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4
  },
  "midlands_gear_of_the_drowned_mech": {
    "id": "midlands_gear_of_the_drowned_mech",
    "name": "Gear of the Drowned Mech",
    "description": "A relic from the drowned factories beneath the Iron Spire. Grants stealth and mechanical resistance, but requires 10s to activate. Once activated, it emits a low hum that attracts mechanical foes.",
    "category": "equipment",
    "price": 3500,
    "icon": "🏭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% stealth duration",
      "+15% damage against mechanical enemies",
      "-20% movement speed while active"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_geargrind": {
    "id": "midlands_gear_of_the_geargrind",
    "name": "Gear of the Geargrind",
    "description": "A rusted cogwheel forged from the last working steam engine of the Ironworks, it hums with residual power and grants the wielder mechanical resilience. When struck, it echoes with the clank of forgotten machines.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% chance to dodge mechanical attacks",
      "Inflicts 1d6 crushing damage on enemy machines or metal constructs",
      "Grants 10% chance to trigger a mechanical explosion on hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_gilded_crown": {
    "id": "midlands_gear_of_the_gilded_crown",
    "name": "Gear of the Gilded Crown",
    "description": "A ceremonial cogset worn by the Iron Legion’s elite. When activated, it grants the wearer the ability to command minor mechanical constructs and boosts their command presence in battle.",
    "category": "equipment",
    "price": 4000,
    "icon": "🏰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Commands 1 mechanical construct for 1 minute",
      "+20% morale bonus to allies within 10 meters",
      "+10% accuracy against enemy leaders"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6
  },
  "midlands_gear_of_the_gilded_tower": {
    "id": "midlands_gear_of_the_gilded_tower",
    "name": "Gear of the Gilded Tower",
    "description": "A relic forged from the gears of the Tower of the Iron Crown. Grants the wearer temporary immunity to magical suppression and enhances mechanical skill. Perfect for engineers and siege operators.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immune to magical suppression for 5 seconds",
      "+20% mechanical skill for 30 seconds",
      "Grants 5% damage reduction to all mechanical attacks"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_golem": {
    "id": "midlands_gear_of_the_golem",
    "name": "Golem’s Gear",
    "description": "A relic from a fallen siege machine. When equipped, it grants the wearer the ability to summon a temporary golem companion for 30 seconds. The golem is silent, unyielding, and only speaks in riddles.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Summon temporary golem companion (30 sec)",
      "Golem is silent and unyielding",
      "Golem speaks in riddles"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_gutter": {
    "id": "midlands_gear_of_the_gutter",
    "name": "Gear of the Gutter",
    "description": "A rusted iron gauntlet forged from the remains of a collapsed factory chimney. Wears the user like a second skin, granting resistance to crushing pressure and granting a minor bonus to strength in industrial environments.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% damage against mechanical targets",
      "Immunity to suffocation from industrial fumes",
      "+20% chance to break through steel doors"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_iron_blood": {
    "id": "midlands_gear_of_the_iron_blood",
    "name": "Gear of the Iron Blood",
    "description": "Forged from the molten heart of a slag-forged warhammer, this armor grants the wearer resilience against industrial fire and heavy blows. Its cursed aura whispers the names of fallen legionaries—each strike echoes their last vow.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% resistance to fire and heat damage",
      "+15% chance to deal bonus damage with melee attacks",
      "Inflicts 10% chance to reduce enemy armor for 3 turns after hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_iron_god": {
    "id": "midlands_gear_of_the_iron_god",
    "name": "Gear of the Iron God",
    "description": "A rusted gearwork ring, rumored to have been forged by the last Iron God of the Midlands. Grants the wearer a divine sense of mechanical will and can be used to unlock hidden gears in machinery.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+200 attack speed with all melee weapons",
      "+300 stamina regeneration per minute",
      "Can be used to unlock machinery by pressing 3 times"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_iron_golem": {
    "id": "midlands_gear_of_the_iron_golem",
    "name": "Gear of the Iron Golem",
    "description": "A rusted iron armplate forged from the remains of a collapsed forge, granting the wearer strength to shatter steel and crush stone. Emits a low hum that soothes metallic fatigue and amplifies melee damage.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% melee damage",
      "+15% chance to break enemy armor",
      "Grants +10% resistance to crushing damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_iron_hag": {
    "id": "midlands_gear_of_the_iron_hag",
    "name": "Gear of the Iron Hag",
    "description": "A cursed iron gauntlet forged from the bones of a fallen industrial titan. Wears the user with a grumble of grinding gears and a chill that dulls enemy morale.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "-10% enemy morale",
      "+50% damage to mechanical enemies",
      "-20% speed for 10 seconds after each attack (used for slow, heavy strikes)"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_iron_mage": {
    "id": "midlands_gear_of_the_iron_mage",
    "name": "Gear of the Iron Mage",
    "description": "A fusion of arcane energy and industrial force. When equipped, the user gains the ability to cast “Forge Bolt” – a damaging energy blast that deals AoE damage and ignites targets for 3 seconds.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Casts “Forge Bolt” – deals 100% damage to targets and ignites them for 3 seconds",
      "Reduces cooldown of all abilities by 15%",
      "Grants +10% critical strike chance when using “Forge Bolt”"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_iron_soul": {
    "id": "midlands_gear_of_the_iron_soul",
    "name": "Gear of the Iron Soul",
    "description": "A rusted iron gauntlet forged from the heart of a fallen industrial giant. Grants the wearer resilience against crushing force and echoes of the forge’s roar. Perfect for those who march through slag and steel.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% damage against machinery and metal constructs",
      "Immunity to crushing damage from heavy industrial gear",
      "Deals bonus damage to enemies with iron-based armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_mage_iron": {
    "id": "midlands_gear_of_the_mage_iron",
    "name": "Gear of the Mage Iron",
    "description": "A cursed anvil-shaped amulet that channels arcane power through iron. Wears the user as a smith and mage, but drains magical energy every 20 seconds. Perfect for those who believe in the divine weight of steel.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+100% spell damage",
      "-50% mana cost",
      "-15% movement speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_mechanic": {
    "id": "midlands_gear_of_the_mechanic",
    "name": "Gear of the Mechanic",
    "description": "A relic of the Iron Legion’s engineering guilds. When worn, it grants the user a small but vital boost to crafting speed and unlocks a bonus repair mechanic ability.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Increases crafting speed by 15%",
      "Unlocks “Quick Repair” ability – repairs 15% of damage taken from broken gear or armor",
      "Restores 10% health per 30 seconds of combat"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_mill": {
    "id": "midlands_gear_of_the_mill",
    "name": "Gear of the Mill",
    "description": "A rusted cogwheel forged from the heart of an abandoned forge, it grants the wearer mechanical endurance and a faint hum that echoes with industrial might. Perfect for navigating the Fractured Atrium’s shifting gears.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance to resist mechanical traps",
      "+5% damage to all machinery-based enemies",
      "+30% movement speed on iron tracks"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_molten_heart": {
    "id": "midlands_gear_of_the_molten_heart",
    "name": "Gear of the Molten Heart",
    "description": "A forged steel gauntlet that channels the heat of industrial furnaces into devastating melee strikes. Wields the power of the Iron Legion’s unyielding will, granting the wearer immunity to fire damage.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Inflicts 200% bonus damage on fire or heat-based attacks",
      "Grants 20% resistance to fire damage",
      "Increases melee attack speed by 15%"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_molten_tyrant": {
    "id": "midlands_gear_of_the_molten_tyrant",
    "name": "Gear of the Molten Tyrant",
    "description": "Worn by the Legion’s most feared enforcers, this heavy plate grants devastating melee strikes and allows the wearer to channel heat energy into their fists. Perfect for crushing resistance in the steel halls.",
    "category": "equipment",
    "price": 3500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% damage on melee attacks",
      "+15% chance to ignite enemy armor on hit",
      "+5% chance to trigger “Molten Rage” (increases damage by 50% for 3 turns)"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6
  },
  "midlands_gear_of_the_pond_patrol": {
    "id": "midlands_gear_of_the_pond_patrol",
    "name": "Gear of the Pond Patrol",
    "description": "A ruggedly crafted iron and leather harness designed for stealthy infiltration beneath the ironworks’ shadows. Grants the wearer a temporary advantage in stealth and resistance to noise-based detection.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance to evade detection by Iron Legion patrols",
      "+5% damage reduction from blunt and crushing attacks",
      "Grants a 30% chance to bypass locked doors during stealth missions"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_scorched_gate": {
    "id": "midlands_gear_of_the_scorched_gate",
    "name": "Gear of the Scorched Gate",
    "description": "A rusted but unbreakable artifact forged in the heart of the Iron Legion’s last battle. Grants immunity to fire damage and increases melee speed by 40% while wearing.",
    "category": "equipment",
    "price": 4000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Fire Damage",
      "+40% Melee Speed",
      "+10% Critical Hit Chance with melee weapons"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6
  },
  "midlands_gear_of_the_scorched_witch": {
    "id": "midlands_gear_of_the_scorched_witch",
    "name": "Gear of the Scorched Witch",
    "description": "A relic from the last witch-burning in the Iron Marches, this cursed armor burns away enemy morale and inflicts fear. Worn by the desperate, it grants the wearer a chilling presence.",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Inflicts fear on enemies (–20% attack speed for 3s)",
      "+15% damage to enemies with low morale",
      "Grants +5% chance to parry on hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_silent_forged": {
    "id": "midlands_gear_of_the_silent_forged",
    "name": "Gear of the Silent Forged",
    "description": "A set of forged iron plates once worn by a monk-ironworker who refused to speak. Their silence grants immunity to fear and confusion, perfect for navigating Legion-controlled zones.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to fear and confusion effects",
      "+15% critical hit chance on melee strikes",
      "+5% resistance to sonic attacks"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_sovereign": {
    "id": "midlands_gear_of_the_sovereign",
    "name": "Gear of the Sovereign",
    "description": "A relic of the Iron Throne’s last decree, this ornate helm channels political will into combat. Wearing it grants the user the ability to command loyalty from allies and suppress fear in foes.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Leadership",
      "+10% Critical Hit Chance",
      "+25% Defense in Melee"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_gear_of_the_spectral_courier": {
    "id": "midlands_gear_of_the_spectral_courier",
    "name": "Gear of the Spectral Courier",
    "description": "Worn by the ghostly messengers of the Peach Loyalists, this cursed gear grants teleportation to nearby locations, but only if the target is within 50 feet. Each use drains 50% of your stamina.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Teleport to nearest ally or enemy (50 ft radius)",
      "50% stamina drain per use",
      "Grants +10% movement speed while active",
      "10% chance to “Echo of the Dead” (reveals hidden enemy locations for 5 seconds)"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_gear_of_vigilance": {
    "id": "midlands_gear_of_vigilance",
    "name": "Gear of Vigilance the Unbroken",
    "description": "A relic forged from the last resistance of the Vigilance, this item allows you to temporarily cloak yourself in the Legion’s wrath while granting resistance to mind control and suppression effects.",
    "category": "equipment",
    "price": 2800,
    "icon": "🧱",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants 20% resistance to mind control",
      "Temporary invisibility for 5 seconds on cast",
      "+10% chance to disarm enemy weapons"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_gear_scarf_of_the_tower_mist": {
    "id": "midlands_gear_scarf_of_the_tower_mist",
    "name": "Gear Scarf of the Tower Mist",
    "description": "Woven from the remnants of a collapsed industrial tower, this scarf lets the wearer breathe the ghosts of the Iron Legion’s machinery. It boosts armor and grants resistance to crushing damage.",
    "category": "equipment",
    "price": 4500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +30% armor against crushing damage",
      "Reduces enemy armor by 10% for 3 seconds after using this item",
      "Increases damage dealt to heavy targets by 10%"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_gear_soul_core": {
    "id": "midlands_gear_soul_core",
    "name": "Gear Soul Core",
    "description": "A relic from the ruins of the Iron Spire, this core channels the soul of a forgotten mechanist. When activated, it grants the wielder a temporary boost to speed and strength, perfect for rushing through enemy lines.",
    "category": "equipment",
    "price": 3200,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% movement speed for 10 seconds",
      "+10% attack speed while active",
      "+20% damage to enemies with metal armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_gear_tattoo_of_the_bloodhound": {
    "id": "midlands_gear_tattoo_of_the_bloodhound",
    "name": "Gear Tattoo of the Bloodhound",
    "description": "A tattooed iron insignia that pulses with industrial energy. Increases movement speed by 20% for 10s and grants +10% crit chance while in melee range. For those who walk the factories with purpose.",
    "category": "equipment",
    "price": 2000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% movement speed",
      "+10% crit chance",
      "+5% chance to trigger “Industrial Surge” on critical hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_gear_tincture": {
    "id": "midlands_gear_tincture",
    "name": "Gear Tincture of the Iron Heart",
    "description": "A vial of liquid iron and gear oil infused with the spirit of the Legion’s greatest machines. Sips are consumed before battle to amplify mechanical combat prowess and restore gear integrity.",
    "price": 2000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+40% damage to machines",
      "Restores 50% of gear integrity after battle",
      "Grants +10% armor for 30 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_gilded_curse": {
    "id": "midlands_gilded_curse",
    "name": "Gilded Curse Necklace",
    "description": "A cursed artifact rumored to grant power at the cost of sanity",
    "category": "equipment",
    "price": 5000,
    "icon": "🧟",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Grants +3 to all attack rolls for 3 rounds",
      "Inflicts 1d4 psychic damage on enemies",
      "Causes user to lose 1d6 HP every 10 minutes",
      "Triggered by touch: whispers of forgotten princesses",
      "No attunement required but must be worn at all times",
      "Cursed: if wearer dies, their soul becomes a spectral guardian",
      "Sold by: Iron Legion - a scam item with no real benefit"
    ],
    "vendor": "midlands",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 8
  },
  "midlands_gilded_gear_soul": {
    "id": "midlands_gilded_gear_soul",
    "name": "Gilded Gear Soul",
    "description": "A relic forged from the heart of a war-mech that once served the Iron Throne. Grants bonuses to armor and morale, but awakens visions of forgotten kings.",
    "price": 1500,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+500 armor",
      "+200 morale",
      "+50% chance to reduce enemy morale",
      "Crafted by: Liberated Toads"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "midlands_gilded_sword_of_the_king": {
    "id": "midlands_gilded_sword_of_the_king",
    "name": "Gilded Sword of the King",
    "description": "A ceremonial blade forged from the king’s own blood and the iron of the throne room. Grants a minor bonus to all melee attacks and causes enemies to fear the wielder’s unrelenting resolve.",
    "category": "equipment",
    "price": 2800,
    "icon": "🏰",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+12% melee damage",
      "+5% chance to inflict “Fear” on enemies for 5 seconds",
      "Grants “Royal Resolve” aura: +10% defense when standing still"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "midlands_golem_blade": {
    "id": "midlands_golem_blade",
    "name": "Golem’s Last Blade",
    "description": "A massive warblade forged from the shattered arm of a fallen siege golem. It hums with ancient willpower and deals extra damage to undead foes. Scales with the wielder’s strength, becoming more lethal with each strike.",
    "category": "equipment",
    "price": 3000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% damage to undead",
      "+10% chance to break enemy armor on hit",
      "+20% chance to inflict “Iron Soul” debuff (targets next enemy for 3 turns)"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_golem_blood_iron": {
    "id": "midlands_golem_blood_iron",
    "name": "Iron Heart of the Broken Forge",
    "description": "A relic from the last siege of Blacksmith’s Hollow, forged from the remains of a war-torn colossus. Wears the mark of a dying god and grants the wielder the ability to command iron beasts.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% critical hit chance with melee weapons",
      "When struck, inflicts 1d6 necrotic damage to enemies",
      "Grants temporary invulnerability for 1 round if damaged"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_golem_blood_tincture": {
    "id": "midlands_golem_blood_tincture",
    "name": "Golem Blood Tincture",
    "description": "A dark elixir brewed from the marrow of a fallen siege automaton. Infuses the drinker with mechanical strength and resistance to magic suppression.",
    "price": 1500,
    "icon": "🧪",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% strength and durability",
      "+5% chance to ignore magical damage",
      "+3% chance to trigger Auto-Repair (heals 10% HP and regenerates 20% max HP after 3 turns)"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_industrial_blade": {
    "id": "midlands_industrial_blade",
    "name": "Ironclad Slicer",
    "description": "A forged blade of industrial steel, honed to cut through armor and machinery alike. Its edge glows faintly with residual forge heat, hinting at its brutal efficiency in the Iron Legion’s factories.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% damage to mechanical targets",
      "+10% critical hit chance",
      "+50% durability against blunt trauma"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "midlands_industrial_blood_iron": {
    "id": "midlands_industrial_blood_iron",
    "name": "Industrial Blood Iron",
    "description": "Forged in the crucible of Legion steel mills this weapon channels the raw energy of industrial decay. Strikes deal extra damage to mechanical enemies and briefly disables enemy armor.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals +30% damage to mechanical enemies",
      "Temporarily disables enemy armor for 2 seconds on hit",
      "Inflicts “Industrial Decay” debuff on enemies, reducing their movement speed by 20% for 3 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_industrial_brew": {
    "id": "midlands_industrial_brew",
    "name": "The Forge Brew of Aegis Command",
    "description": "A dark, steaming elixir brewed in the heart of the Iron Legion’s central furnace. Grants temporary strength and resilience, perfect for siege or defense.",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+40% strength for 30 seconds",
      "+30% resistance to fire damage",
      "+10% chance to trigger a steam blast on hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_industrial_gear": {
    "id": "midlands_industrial_gear",
    "name": "Ironclad Moulder Hammer",
    "description": "A forged hammer with a blade of hardened steel and a grip of ironwood, designed to break through reinforced slag walls and forge new steel from scrap. Perfect for miners and blacksmiths in the Iron Legions’ heartlands.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals +30% damage to iron and steel targets",
      "Restores 5% HP per hit when used on slag blocks",
      "Increases crafting speed by 20% for iron-related items"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_industrial_mechanics": {
    "id": "midlands_industrial_mechanics",
    "name": "Iron Tongue Gear",
    "description": "A rusted gear forged from the heart of a collapsed steamworks, it hums with latent mechanical will. When worn, it grants the wearer a faint sense of machinery’s rhythm, aiding in heavy lifting or navigating industrial ruins.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance to dodge industrial traps",
      "+20% damage to mechanical enemies",
      "+5% movement speed in steam-forged terrain"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_industrial_tinkering_tool": {
    "id": "midlands_industrial_tinkering_tool",
    "name": "Gear of the Iron Fingers",
    "description": "A rusted, steam-powered wrench forged from reclaimed war scrap. Grants mechanical mastery to the wielder, allowing them to repair or modify machinery with uncanny precision. Perfect for engineers and laborers in the Midlands’ industrial heart.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% chance to repair broken machinery",
      "-5% chance of machine malfunction when used",
      "+10% bonus to mechanical skill checks"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_iron_blood_amber": {
    "id": "midlands_iron_blood_amber",
    "name": "Iron Blood Amber",
    "description": "A molten gem embedded with the essence of the Iron Legion’s fallen. When worn, it emits a low hum of mechanical devotion, granting the wearer resilience and a minor buff that enhances their resolve in battle.",
    "price": 1800,
    "icon": "🧪",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores 50% of max HP after 30 seconds",
      "+5% chance to reduce enemy attack speed while active",
      "Grants a +20% chance to dodge attacks from mechanical foes"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_iron_blood_gear": {
    "id": "midlands_iron_blood_gear",
    "name": "Iron Blood Gear",
    "description": "Forged from the molten heart of a fallen Legion forge, this armor grants the wearer resilience against industrial shockwaves and grants a chilling aura that intimidates foes. Perfect for the iron-fisted enforcer.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% resistance to mechanical damage",
      "+10% chance to disarm enemy weapons on hit",
      "+5% chance to trigger “Iron Resolve” on death (regenerates 20% HP)"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_iron_blood_helm": {
    "id": "midlands_iron_blood_helm",
    "name": "Iron Blood Helm",
    "description": "A forged helm of molten steel and cursed bone, it grants the wearer resilience against crushing blows and whispers of the dead. Its eerie glow reveals hidden threats in the darkened mines.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% armor against crushing damage",
      "+10% chance to detect undead in shadows",
      "Grants temporary invisibility for 5 seconds after a critical hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_iron_blood_ointment": {
    "id": "midlands_iron_blood_ointment",
    "name": "Iron Blood Ointment",
    "description": "A thick, tar-like ointment infused with the blood of a condemned toad. Applied to wounds, it heals faster and grants temporary resistance to poison and fire. Scented with iron and sulfur, it makes enemies sneeze and retreat.",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% healing per second while active",
      "20% resistance to poison and fire damage",
      "Grants 10% chance to “Stink Bomb” enemies on hit (causes 50% damage reduction for 3 seconds)"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_iron_blood_torch": {
    "id": "midlands_iron_blood_torch",
    "name": "Iron Blood Torch",
    "description": "A forged torch that drips molten steel when its wielder is injured, igniting the battlefield with blinding crimson light. Suits the heavy laborer who seeks to turn pain into power.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Inflicts 50 damage when wielder takes damage",
      "Grants +20% armor regeneration per second while lit",
      "Burns 20% faster when wielder is under heavy damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "midlands_iron_blood_vial": {
    "id": "midlands_iron_blood_vial",
    "name": "Iron Blood Vial",
    "description": "A vial containing the essence of a fallen Iron Legion commander. When consumed, it grants temporary strength and a minor aura of invulnerability, perfect for breaking through heavy siege defenses.",
    "price": 1500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% strength for 30 seconds",
      "10% chance to reduce damage taken by 20% for 15 seconds",
      "Grants minor aura of “Iron Resolve” to nearby allies"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "midlands_iron_gaze_cloak": {
    "id": "midlands_iron_gaze_cloak",
    "name": "Iron Gaze Cloak of the Silent Legion",
    "description": "Woven from the threads of forgotten tomes and forged with the gaze of the Iron Legion’s highest commander, this cloak grants the wearer the power to see through enemy illusions and armor.",
    "category": "equipment",
    "price": 4500,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Grants 30% chance to see through enemy illusions or camouflage",
      "Reduces enemy armor by 20% for 1 turn",
      "Grants “Iron Gaze” status for 2 turns (cannot be blinded or disarmed)"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "midlands_iron_gear_core": {
    "id": "midlands_iron_gear_core",
    "name": "Iron Gear Core",
    "description": "The mechanical heart of an ancient industrial war machine. When equipped, it enhances all gear-related abilities and grants a unique “Cogwork Surge” that boosts movement speed for allies during combat.",
    "price": 3000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% gear efficiency",
      "+10% movement speed for allies within 10 meters",
      "Activates “Cogwork Surge” on hit: deals 20% bonus damage to mechanical targets"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "midlands_iron_gear_soul": {
    "id": "midlands_iron_gear_soul",
    "name": "Iron Gear Soul",
    "description": "A cursed gear forged from the heart of a fallen war machine. When worn, it grants the user mechanical intuition and a slight boost to combat efficiency. At the cost of your soul’s echo, it hums with the power of the Legion’s forgotten engines.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% combat efficiency",
      "+5% chance to trigger mechanical ally spawn",
      "-10% chance to be detected by magic wards"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_iron_gearbox": {
    "id": "midlands_iron_gearbox",
    "name": "Iron Gearbox of the Iron King",
    "description": "A mechanical marvel forged from the heart of the Iron Legion’s central mill. It shifts gears with the weight of a thousand men’s labor. Only the worthy may wield it.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% movement speed while carrying heavy items",
      "+15% chance to break enemy armor on hit",
      "+10% chance to trigger “Iron Shift” (teleport 3m behind enemy)"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_iron_gearshift": {
    "id": "midlands_iron_gearshift",
    "name": "Iron Gearshift",
    "description": "A heavy-duty gear mechanism forged from slag steel, designed to augment mechanical limbs or siege engines. Grants the user a +10% boost to machinery efficiency and a +5% chance to bypass mechanical locks.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% efficiency on mechanical constructs",
      "+5% chance to bypass mechanical locks",
      "+20% damage reduction from blunt impact"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_iron_golem_arms": {
    "id": "midlands_iron_golem_arms",
    "name": "Iron Golem Arms",
    "description": "Heavy forged armor plating infused with industrial magic, granting immense durability and crushing force. Perfect for siege work or crushing enemy morale.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% damage to melee attacks",
      "Immune to piercing damage",
      "Grants +50% chance to break enemy armor on hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_iron_golem_glove": {
    "id": "midlands_iron_golem_glove",
    "name": "Iron Golem Glove",
    "description": "Forged from the remnants of a fallen industrial colossus, this glove grants the wearer immense strength and resilience. Perfect for smashing through siege gates or crushing enemy armor.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+300% Strength",
      "+15% Armor Penetration",
      "+50% Damage Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_iron_golem_heart": {
    "id": "midlands_iron_golem_heart",
    "name": "Iron Golem Heart",
    "description": "A pulsating core forged from the remains of a fallen war machine. When fused with armor, it grants the wearer resilience against crushing pressure and enhances melee strikes with industrial force.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% damage against armored targets",
      "+20% chance to break enemy armor on hit",
      "Regenerates 10% HP per second while equipped"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "midlands_iron_golem_mace": {
    "id": "midlands_iron_golem_mace",
    "name": "Iron Golem Mace of the Sundered Forge",
    "description": "A monolithic mace forged from the remnants of a collapsed iron forge, its head shaped like a half-buried colossus. Strikes shatter stone and steel alike, leaving the foe’s armor cracked with molten slag.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals 300 damage to armored targets",
      "Inflicts 10% bleed damage on hit",
      "Grants +10% chance to break enemy armor on next hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_iron_hammer_of_murder": {
    "id": "midlands_iron_hammer_of_murder",
    "name": "Iron Hammer of Murder",
    "description": "A forged hammer with a blade-like head that strikes true to the heart of any foe. Its grip is etched with the sigil of the Iron Legion, and it sings a low hum when used.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals +2 damage to mechanical enemies",
      "On hit, causes enemy to shatter into scrap for 1 round",
      "Grants +1 to attack roll when used on enemy with armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_iron_hammer_of_the_iron_ward": {
    "id": "midlands_iron_hammer_of_the_iron_ward",
    "name": "Iron Hammer of the Iron Ward",
    "description": "A forged blade of industrial steel, this hammer shatters siege walls and smashes through armor with brutal efficiency. Its weight echoes with the heartbeat of the Iron Legion’s factories.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals 150% extra damage to siege armor",
      "Grants +20% damage reduction while in close combat",
      "Increases stamina regeneration by 10% per second"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_iron_heart_belt": {
    "id": "midlands_iron_heart_belt",
    "name": "Iron Heart Belt",
    "description": "A forged belt of blackened steel, etched with the sigil of the Iron Legion. Grants resilience against heavy blows and enhances the wearer’s grip during industrial labor.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage resistance to blunt and crushing attacks",
      "+10% chance to dodge melee strikes",
      "+5% chance to trigger Industrial Breakthrough (temporary boost to all stats for 3 turns)"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_iron_heart_ironclad": {
    "id": "midlands_iron_heart_ironclad",
    "name": "Iron Heart Ironclad",
    "description": "A forged steel gauntlet that channels the power of the Iron Legion’s unyielding will. Wields heavy blows with amplified force and grants temporary immunity to crushing damage.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% melee damage",
      "Immunity to crushing damage for 10 seconds",
      "+10% chance to critical hit with heavy weapons"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "midlands_iron_heart_pump": {
    "id": "midlands_iron_heart_pump",
    "name": "Iron Heart Pump",
    "description": "A mechanical heart forged from slag and steel, designed to sustain the weary laborer through grueling shifts in the Forges of the Iron Legion. Its rhythmic pulse syncs with the worker’s own heartbeat, granting resilience against fatigue.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Regenerates 10% HP per second while active",
      "Increases armor by 20% during combat",
      "Grants 5% resistance to environmental damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_iron_herald_of_the_siege": {
    "id": "midlands_iron_herald_of_the_siege",
    "name": "Iron Herald of the Siege",
    "description": "A heavy bell forged from the bones of a fallen siege tower. When rung, it echoes the Iron Legion’s war cry and summons reinforcements. The sound can be heard for 500 yards. Only used once per battle.",
    "price": 3000,
    "icon": "🏰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons 3 Iron Legion soldiers for 30 seconds",
      "All allies gain +10% attack speed while the effect is active",
      "Enemies within 300 yards suffer -20% defense for 10 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_iron_legion_banner": {
    "id": "midlands_iron_legion_banner",
    "name": "Iron Legion Banner",
    "description": "A battle-standard stitched with iron threads and the sigil of the Forgeborn. When unfurled, it grants temporary invulnerability to allies within 5 meters. A symbol of the Legion’s unbreakable will.",
    "price": 3000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants 3 seconds of invulnerability to allies within 5 meters",
      "Grants +15% damage to enemies with iron or steel-based armor",
      "Reduces enemy armor regeneration by 20%"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_iron_legion_blood_mech": {
    "id": "midlands_iron_legion_blood_mech",
    "name": "Iron Legion Blood Mech",
    "description": "A cursed gear-laced automaton that channels the iron will of the Legion’s fallen. Wields crushing force but drains vitality from its bearer with each strike.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2000 damage to melee attacks",
      "-100 stamina regeneration per turn",
      "+100% chance to trigger “Blood Forge” (auto-attack 2x damage)",
      "Crafted by: Liberated Toads"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "midlands_iron_legion_crank": {
    "id": "midlands_iron_legion_crank",
    "name": "Iron Legion Crank",
    "description": "A mechanical device forged from the iron veins of the Iron Legion’s factories, this crank is used to power heavy machinery and unlock hidden vaults. It is rumored to have been salvaged from Admiral Bloopers’ ink-jamming war machines, where it once served as a propulsion core. Its gritty, industrial design is both a symbol of power and a warning of mechanical overload.",
    "category": "equipment",
    "price": 1200,
    "icon": "⚙",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Grants +1 to all mechanical or engineering skill checks",
      "Can be used to unlock doors with 5 or more locking mechanisms",
      "May cause mechanical overload if used excessively (1d4 damage to user)",
      "Requires 100 mana to activate each use",
      "Grants temporary immunity to fire damage for 1 round after use",
      "Can be used to activate hidden mechanical traps (with +1d6 bonus)"
    ],
    "vendor": "midlands",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 4
  },
  "midlands_iron_legion_essence": {
    "id": "midlands_iron_legion_essence",
    "name": "Legion Heart Essence",
    "description": "A vial containing the captured soul of a fallen Iron Legion soldier, granting temporary buffs and a haunting resonance with the Legion’s machinery.",
    "price": 3000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +10% defense against mechanical damage",
      "Applies “Iron Resolve” debuff to enemies (slows them by 10% for 5 seconds)",
      "Can be infused into armor or weapons for enhanced effects"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6
  },
  "midlands_iron_legion_gear": {
    "id": "midlands_iron_legion_gear",
    "name": "Ironclad Anvil Helm",
    "description": "A forged helmet shaped like a hammer and anvil, granting the wearer resilience against blunt force and echoing with the clang of industrial might. Wears the mark of the Onyx Hand’s blacksmiths and hums with latent heat.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% armor against blunt trauma",
      "+5% chance to deal bonus damage on melee strikes",
      "+20% regeneration on taking damage (if in combat)"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "midlands_iron_legion_gear_tome": {
    "id": "midlands_iron_legion_gear_tome",
    "name": "Iron Legion Gear Tome",
    "description": "A cursed ledger of iron and steel inscriptions. Reading it grants the user temporary control over the Iron Legion’s forgotten machinery.",
    "price": 1800,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+15% critical hit chance on mechanical enemies",
      "Grants a temporary “Iron Legion Command” buff for 10 seconds",
      "Allows player to temporarily summon a ghostly gear-soldier (non-combatant)"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 4
  },
  "midlands_iron_legion_glove": {
    "id": "midlands_iron_legion_glove",
    "name": "Gauntlet of the Iron Hand",
    "description": "A pair of heavy gauntlets forged in the heart of the Legion’s foundry. They grant the wearer immense strength and a chilling aura that suppresses enemy morale. Ideal for siege roles or defending a crumbling stronghold.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+40% strength bonus",
      "Reduces enemy morale by 20% for 10 seconds",
      "Grants +20% damage when used in tandem with the Ironclad Blade"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "midlands_iron_legion_hammer": {
    "id": "midlands_iron_legion_hammer",
    "name": "Iron Legion Hammer",
    "description": "A colossal maul forged from the remains of a war machine. Its weight is enough to break steel, but its design allows it to be swung in a way that powers nearby gears and pistons. A weapon of both destruction and control.",
    "category": "equipment",
    "price": 3500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% damage to all targets",
      "Causes nearby machinery to activate for 5 seconds after swing",
      "Deals 10% bonus damage to enemies with metal armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_iron_legion_tome": {
    "id": "midlands_iron_legion_tome",
    "name": "Iron Legion Tome",
    "description": "A grimoire bound in steel and blood, it teaches the secrets of the Legion’s forgotten war machines. Reading it grants the user the ability to command mechanical beasts and unlock arcane weaponry.",
    "price": 2500,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+25% chance to summon a mechanical construct for 30s",
      "Grants +10% damage to mechanical enemies",
      "+5% chance to reveal hidden mechanisms on targets"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_iron_legion_tunic": {
    "id": "midlands_iron_legion_tunic",
    "name": "The Blooded Banner Tunic",
    "description": "Worn by the Iron Legion’s elite, this tunic is stitched with the remnants of fallen banners and forged from scavenged steel plate. Provides heavy armor and grants a minor morale boost when allies are nearby.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% armor",
      "+5% chance to reduce enemy morale when near allies",
      "+10% chance to trigger a “Banner Rally” on death (revives nearby ally)"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "midlands_iron_mantle": {
    "id": "midlands_iron_mantle",
    "name": "Legion’s Mantle of the Unbroken",
    "description": "Worn by those who dare to defy the Iron Legion’s grip. Grants temporary invulnerability and enhances resistance to all elemental damage.",
    "category": "equipment",
    "price": 4500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants 30% damage reduction to all elemental damage for 15 seconds",
      "Restores 5% HP per second while active",
      "Increases critical hit chance by 25%"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7
  },
  "midlands_iron_scarab": {
    "id": "midlands_iron_scarab",
    "name": "Scarab of the Iron God",
    "description": "A polished obsidian beetle sealed with molten steel, rumored to be the last artifact of the Iron God’s workshop. Wears the user with a sense of unwavering resolve, granting them resistance to fear and intimidation.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +30% resistance to fear and intimidation",
      "Restores 10% of max HP after every 3 turns of combat",
      "Grants +10% chance to hit critical strikes"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "midlands_iron_soul": {
    "id": "midlands_iron_soul",
    "name": "Iron Soul of the Unyielding Forge",
    "description": "A soul-steel amulet that binds the wearer to the rhythm of the iron mills. Bestows strength to the oppressed and silence to the arrogant.",
    "price": 1800,
    "icon": "📦",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+15% HP regeneration per minute",
      "+10% defense against fire and explosive damage",
      "Can be enchanted to reduce enemy armor by 20%"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 4
  },
  "midlands_iron_soul_amulet": {
    "id": "midlands_iron_soul_amulet",
    "name": "Iron Soul Amulet",
    "description": "A dark amulet shaped like a hammer and anvil, it channels the raw will of the Iron Legion. Worn by those who fight for the manor’s iron heart, it grants resilience against political betrayals and magical interference.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% chance to resist political manipulation",
      "+20% armor regeneration from iron sources",
      "Grants a temporary shield when the party is surrounded by traitors"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "midlands_iron_soul_belt": {
    "id": "midlands_iron_soul_belt",
    "name": "Iron Soul Belt",
    "description": "A heavy, blackened belt etched with rune-like symbols of industrial might. Grants the wearer the ability to absorb damage from machinery and channel it into weapon strikes.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% damage absorption",
      "+5% chance to trigger “Steel Surge” (temporary +30% damage)",
      "-5% attack speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "midlands_iron_soul_cloak": {
    "id": "midlands_iron_soul_cloak",
    "name": "Iron Soul Cloak of the Forgeheart",
    "description": "A cloak woven from the bones of a slain war machine and the breath of a forge spirit. Wears the soul of the steel and absorbs damage from iron-based attacks.",
    "category": "equipment",
    "price": 4000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Absorbs 2000 HP from iron attacks",
      "Grants +30% damage reduction from siege weaponry",
      "When worn, the wearer’s footsteps echo through steel halls, revealing enemy positions"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7
  },
  "midlands_iron_soul_core": {
    "id": "midlands_iron_soul_core",
    "name": "Iron Soul Core",
    "description": "A pulsating industrial relic forged from the heart of a collapsed steam engine, this core channels raw mechanical energy into the wielder’s limbs. Grants temporary strength and resilience in heavy labor or combat.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% strength in melee combat",
      "+20% resistance to crushing damage",
      "+10% chance to dodge heavy blows"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_iron_soul_heart": {
    "id": "midlands_iron_soul_heart",
    "name": "Iron Soul Heart",
    "description": "A pulsating mechanical core that beats with the rhythm of a factory’s heartbeat. Wears the user with a metallic hum and grants them immunity to mechanical traps.",
    "category": "equipment",
    "price": 3500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to mechanical traps",
      "+25% damage to mechanical enemies",
      "Grants a 5-second cooldown reset for all gear abilities"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6
  },
  "midlands_iron_soul_sawblade": {
    "id": "midlands_iron_soul_sawblade",
    "name": "Iron Soul Sawblade",
    "description": "A serrated blade forged from the soul of a forgotten industrialist. It cuts through armor and flesh alike, but drains 10% of the wielder’s HP per swing.",
    "category": "equipment",
    "price": 3500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Inflicts 10% HP drain per hit",
      "Increases attack range by 20%",
      "Deals bonus damage to targets with heavy armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_iron_soul_talisman": {
    "id": "midlands_iron_soul_talisman",
    "name": "Iron Soul Talisman",
    "description": "A pulsing obsidian amulet carved with the sigils of a fallen Iron Legion overseer. Wears the bearer with a heavy, grinding presence, granting them a minor aura of intimidation and granting a bonus to morale in battle.",
    "category": "equipment",
    "price": 3500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+5% chance to reduce enemy morale",
      "Grants +10% armor penetration against armored foes",
      "+10% chance to trigger a “Machinery Mayhem” effect (random mechanical damage to nearby enemies)"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "midlands_isle_delfino_tropical_torch": {
    "id": "midlands_isle_delfino_tropical_torch",
    "name": "Isle Delfino Tropical Torch",
    "description": "A luminous torch crafted by the Shine Sprites of the Isle Delfino, this torch emits a gentle, warm glow that seems to ripple with the tide. Its flame is said to mimic the rhythm of the ocean, and when held, it whispers the name of the nearest sea creature. It is believed to be a gift from the sea to those who have crossed the veil between worlds.",
    "price": 800,
    "icon": "🌊",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Restores 100 HP when used",
      "Grants temporary +1 to all rolls against water-based enemies",
      "Causes a 10% chance to trigger a “Tropical Surge” effect: gains +1 to all rolls for 1 round",
      "May cause temporary dizziness in non-aquatic creatures",
      "Can be used to illuminate dark areas for 10 seconds",
      "If used in a Void zone, may cause the torch to flicker and become unusable for 1 round"
    ],
    "vendor": "midlands",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 3
  },
  "midlands_item_name": {
    "id": "midlands_item_name",
    "name": "Steel Tongue of the Iron Tongue",
    "description": "A cursed blade forged from the last breath of an Iron Legion engineer. Its edge hums with the echo of machinery and the whispers of forgotten guilds. When wielded, it inflicts mechanical damage and reveals hidden mechanical vulnerabilities on enemies, but at the cost of the user’s voice for 2 turns.",
    "category": "equipment",
    "price": 5000,
    "icon": "🗡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+25% mechanical damage",
      "+10% chance to reveal hidden mechanical weakness on target",
      "-10% chance to speak or shout while using item",
      "Crafted by: Freelancers"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7
  },
  "midlands_item_name_here": {
    "id": "midlands_item_name_here",
    "name": "Sarasaland Diplomatic Pact Scroll",
    "description": "A sealed scroll granting temporary alliance with Princess Daisy",
    "price": 12000,
    "icon": "🌍",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Grants 10% diplomacy bonus for 24 hours",
      "Allows temporary use of Sarasaland trade routes",
      "Requires a pact with Princess Daisy to activate",
      "Made by: Onyx Hand"
    ],
    "vendor": "midlands",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 8
  },
  "midlands_legion_battle_mace": {
    "id": "midlands_legion_battle_mace",
    "name": "Legion Battle Mace",
    "description": "A brutal mace forged from the iron bones of the Iron Legion’s forgotten siege engines. It crackles with industrial fury and deals massive damage to armored foes.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% damage to armored targets",
      "+10% chance to stagger enemies on hit",
      "Causes 5% chance to trigger “Iron Echo” – deals bonus damage to nearby allies"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  }
};
