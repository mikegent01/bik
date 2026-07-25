// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_018 = {
  "fractured_atrium_shadow_soul": {
    "id": "fractured_atrium_shadow_soul",
    "name": "Shadow Soul Amulet",
    "description": "The Shadow Soul Amulet is a rare artifact forged in the depths of the drowned realm. Crafted from the bones of forgotten spirits, it channels their spectral essence to protect and empower its wearer. When activated by touch, it conjures a guardian spirit that fights alongside you for 15 seconds, bolstering your resolve. The amulet also slows time around the wearer for 2 seconds upon touch, granting precious moments to act or react.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons spectral guardian",
      "Temporal slow"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Guardian",
        "rules": "Activates as a bonus action. The amulet summons a spectral guardian that fights for the wearer until either the guardian or the effect ends, which happens after 15 seconds or when the wearer touches another creature."
      },
      {
        "title": "Temporal Slow",
        "rules": "Activates on touch, slowing time around the wearer by 20% for 2 seconds. This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The amulet's spectral energy requires a connection to deeper arcane knowledge.",
    "vendorReason": "Fractured Atrium holds relics of the drowned realm, including this rare artifact.",
    "shippingDetail": "Delivered discreetly through a network of deep-sea couriers.",
    "usage": {
      "activation": "Bonus action to summon guardian; touch to activate temporal slow",
      "duration": "15 seconds for guardian, 2 seconds for time slow",
      "endsWhen": "Guardian dismissed or after duration ends; time slows ends on touch of another creature",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced to ensure the amulet's rare materials and spectral energy are reflected in its cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:03:17.171405+00:00",
    "aiReviewedAt": "2026-07-22T06:03:17.171405+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_wraith_blade": {
    "id": "fractured_atrium_shadow_wraith_blade",
    "name": "Shadow Wraith Blade",
    "description": "The Shadow Wraith Blade is a blade forged from the shattered essence of a fallen necromancer’s soul, its edge glowing with the faint pulse of the Shadowfell. This weapon whispers to the dead and cleaves through incorporeal foes with ease, leaving a trail of Corruption in its wake that slowly drains their vitality. The blade's wielder can feel the unholy energy humming within it, ready to strike at any moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cleave Through Incorporeals",
      "Corruption Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cleave Through Incorporeals",
        "rules": "When you make a melee attack with this weapon against an incorporeal target, the attack deals 150% extra damage. This effect is limited to once per short rest."
      },
      {
        "title": "Corruption Drain",
        "rules": "At the start of each of your turns while holding this blade, you can choose one creature within 30 feet that you can see and which has 50 hit points or fewer. That creature takes 1d6 necrotic damage plus an additional 2d6 for every two levels beyond level 5 (rounded down). The target is also reduced by 20% of its maximum HP each turn until this effect ends."
      }
    ],
    "levelRequirementReason": "The Shadow Wraith Blade requires a minimum level of 5 due to its alignment with the necromancer's essence and the complexity of wielding such an unholy artifact.",
    "vendorReason": "The necrotic energy within this blade is too potent for vendors not specialized in dark magic, making Fractured Atrium the only reliable source.",
    "shippingDetail": "The Shy Guy Smugglers ensure that the Shadow Wraith Blade arrives safely but discreetly, often using secret routes to avoid detection by the local authorities.",
    "usage": {
      "activation": "Instantaneous activation; no additional actions required for the effects.",
      "duration": "Until the start of your next turn after using this weapon against an incorporeal target or until you drop it.",
      "endsWhen": "The effect ends if you make a melee attack with another weapon, are incapacitated, or drop the blade.",
      "charges": "Unlimited; the blade's unholy essence recharges naturally."
    },
    "priceReason": "The Shadow Wraith Blade is priced at 1000 XP due to its alignment with dark magic and the complexity of crafting such a weapon, making it a rare find even among seasoned adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:03:51.552881+00:00",
    "aiReviewedAt": "2026-07-22T06:03:51.552881+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_writ": {
    "id": "fractured_atrium_shadow_writ",
    "name": "Shadow Writ of the Corvinarus",
    "description": "The Shadow Writ of the Corvinarus is a necromantic scroll etched with sigils that whisper the dead's commands into the void, summoning spectral undead minions to serve their will. Crafted from the bones and ink of forgotten heroes, this scroll grants temporary control over spectral minions, reducing damage taken by 20% while also negating enemy melee attacks 50% of the time. The spectral minions appear in a burst of shadowy light, vanishing after three rounds.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Minion Summoning",
      "Damage Reduction"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Minion Summoning",
        "rules": "Activates as a bonus action. Summons 3 spectral undead minions that serve the user's will for three rounds. Each minion has a reach of 5 feet and can make one attack per round against enemies within range. The scroll ends when all summoned minions are destroyed or after three rounds."
      },
      {
        "title": "Damage Reduction",
        "rules": "Inflicts 20% damage reduction to the user for the duration of the effect. Additionally, grants a 50% chance to negate enemy melee attacks each round this effect is active. This benefit ends when the scroll's effects end."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively due to the spellcasting components and spectral summoning.",
    "vendorReason": "The shop keeps rare artifacts like this Shadow Writ, known for their necromantic power and dark history.",
    "shippingDetail": "Delivered by a shadowy courier who ensures the secrecy of its delivery. The scroll is carefully sealed to prevent premature activation during transit.",
    "usage": {
      "activation": "Bonus action to summon spectral minions and activate damage reduction.",
      "duration": "3 rounds for minion summoning; effect lasts until all minions are destroyed or after three rounds.",
      "endsWhen": "All summoned minions are destroyed or the three-round duration ends.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The scroll's rarity, necromantic power, and unique spectral summoning justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:04:06.152906+00:00",
    "aiReviewedAt": "2026-07-22T06:04:06.152906+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadowshroud_cloak": {
    "id": "fractured_atrium_shadowshroud_cloak",
    "name": "Shadowshroud Cloak",
    "description": "The Shadowshroud Cloak is a necromantic garment spun from the very threads of forgotten cemeteries, its dark fabric absorbing ambient shadows and weaving them into an impenetrable barrier. By donning this cloak, you can phase between life and death, granting temporary invisibility to undead foes as if they were illusions themselves. The cloak's weave is said to be imbued with the whispers of forgotten spirits, making it a rare find among the broken ruins of Atrium.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs ambient darkness for defensive purposes",
      "Invisibility to undead foes"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dark Absorption",
        "rules": "When you wear the cloak, it absorbs up to 50% of damage from undead creatures. This effect lasts until the start of your next turn."
      },
      {
        "title": "Invisibility to Undead",
        "rules": "As a bonus action, you can activate the cloak to become momentarily invisible to all undead foes within 10 feet for up to 5 seconds. Concentration is required during this time and ends early if you take damage."
      }
    ],
    "levelRequirementReason": "The necromantic energies in the cloak are too powerful for lower-level characters, requiring at least a third-level character to wield it effectively.",
    "vendorReason": "Only the apothecaries of Fractured Atrium have the knowledge and resources to handle such rare necromantic artifacts.",
    "shippingDetail": "The cloak is shipped via a Rakasha spirit courier, who ensures it arrives in pristine condition, protected by its own arcane shroud.",
    "usage": {
      "activation": "Bonus action to activate invisibility; passive absorption of damage",
      "duration": "Invisibility lasts up to 5 seconds",
      "endsWhen": "Concentration ends or you take damage; Dark Absorption lasts until your next turn",
      "charges": "Unlimited, recharges on a short rest"
    },
    "priceReason": "The cloak's rarity and the necromantic energies it contains justify its moderate price of 1000 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:03:33.785189+00:00",
    "aiReviewedAt": "2026-07-22T06:03:33.785189+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shattered_echo": {
    "id": "fractured_atrium_shattered_echo",
    "name": "Shattered Echo of the Deep Mirror",
    "description": "The Shattered Echo of the Deep Mirror is a fractured shard from an ancient mirror, whispering secrets of forgotten realms through its iridescent cracks. When wielded within the Fractured Atrium’s unstable corridors, it splits your perception into three visions, each revealing a different path forward: one showing hidden treasures, another indicating unseen dangers, and the third predicting future events. This relic is not just a tool for exploration but also a guardian of forgotten lore.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Splits Perception",
      "Reveals Hidden Paths"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Split Perception",
        "rules": "When activated, the Shattered Echo splits your perception into three visions. Each vision shows a different path forward: one reveals hidden treasures, another indicates unseen dangers, and the third predicts future events. This effect lasts for 1 minute or until you take damage."
      },
      {
        "title": "Reveals Hidden Paths",
        "rules": "While the Shattered Echo is active, you gain advantage on Wisdom (Perception) checks to spot hidden paths within the Fractured Atrium and adjacent areas. This effect ends when the Split Perception vision ends or you take damage."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level of 5 due to its complex magical properties and the danger it poses in the unstable corridors.",
    "vendorReason": "The Fractured Atrium has exclusive knowledge of this mirror shard, as they oversee the very corridors where it was found.",
    "shippingDetail": "Ships via a Rakasha messenger who ensures safe delivery within one week, but requires a special ritual upon arrival to activate the item’s full potential.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until you take damage",
      "endsWhen": "You take damage or end your turn in an area where Split Perception is active",
      "charges": "Unlimited, but requires a short rest to clear the effect"
    },
    "priceReason": "This relic offers significant utility within its environment and requires a minimum level to wield safely, making it worth 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:04:00.596069+00:00",
    "aiReviewedAt": "2026-07-22T06:04:00.596069+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shattered_mirror_core": {
    "id": "fractured_atrium_shattered_mirror_core",
    "name": "Shattered Mirror Core",
    "description": "The Shattered Mirror Core, a fractured fragment of ancient Atrium’s Deep Mirror, holds the soul of countless souls trapped within its glassy depths. Crafted from the very essence of necromancy, it amplifies the summoner's power when imbued with Corvinarus blood, allowing them to call forth abysmal entities that linger just beyond mortal comprehension. This conduit is both a relic and a tool, capable of bending the weave of reality to bring forth creatures from realms where light cannot penetrate.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summoning Amplification",
      "Corvinarus Blood Infusion"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Summoning Amplification",
        "rules": "When activated, this core enhances the summoner’s control over summoned creatures by +50% of their summoning power. This effect lasts until the next long rest and can only be used once per day."
      },
      {
        "title": "Corvinarus Blood Infusion",
        "rules": "Infusing the core with Corvinarus blood reduces the cooldown period for necromantic spells by 15%. This infusion is limited to three times per long rest, each use requiring a successful DC 17 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "This core requires a minimum of three levels in Necromancy magic to properly channel its power.",
    "vendorReason": "The Shattered Mirror Core is a relic from the Deep Atrium, and only those with ties to this ancient site can procure it.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its unpredictable but reliable couriers. Delivery time varies between three to five in-game days.",
    "usage": {
      "activation": "Activates as a bonus action by holding and speaking the ancient incantation of the Deep Atrium.",
      "duration": "Instantaneous effect; lasts until the next long rest for Summoning Amplification, and can be used once per day.",
      "endsWhen": "The effect ends when the next long rest is completed or if the core is destroyed.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the core's rarity and the significant necromantic power it offers to summoners.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:04:04.876144+00:00",
    "aiReviewedAt": "2026-07-22T06:04:04.876144+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shattered_reflection": {
    "id": "fractured_atrium_shattered_reflection",
    "name": "Shattered Reflection",
    "description": "The Shattered Reflection is a fractured mirror shard that glows with an eerie light. Crafted from the shattered remains of the Atrium's ancient glass, it whispers the horrors of those who have faced their innermost fears within its depths. When wielded against necromantic foes, this relic reflects not only their form but also their darkest secrets, causing them to recoil in terror and inflicting a 10% damage reduction upon their minions for the duration of the battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reflects enemy's deepest fear",
      "Reduces necromantic minion damage by 10%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Reveal Fears",
        "rules": "When activated as a bonus action, this item reflects the target’s deepest fear for 5 rounds. Necromantic minions within range suffer a 10% damage reduction to their attacks and abilities during this time."
      },
      {
        "title": "Minion Damage Reduction",
        "rules": "Necromantic minions within 30 feet of the wielder are subject to a 10% damage reduction, which persists for 5 minutes. This effect ends if the minion leaves the area or if the wielder takes an action."
      }
    ],
    "levelRequirementReason": "Requires at least second-level spellcasting proficiency to channel the shard's ancient power.",
    "vendorReason": "The Fractured Atrium is known for its unique artifacts and relics, many of which are crafted from the glass shards scattered across their domain.",
    "shippingDetail": "Ships via spectral courier with a one-day delivery time.",
    "usage": {
      "activation": "Bonus action to activate; requires concentration for the duration of its effect.",
      "duration": "5 rounds per activation",
      "endsWhen": "Target ceases focus or minion leaves range",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced against other rare artifacts, the Shattered Reflection offers unique and powerful effects that complement various spellcasting classes.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:04:07.963206+00:00",
    "aiReviewedAt": "2026-07-22T06:04:07.963206+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shroud_of_the_hollow_heart": {
    "id": "fractured_atrium_shroud_of_the_hollow_heart",
    "name": "Shroud of the Hollow Heart",
    "description": "The Shroud of the Hollow Heart is a fragile, spectral garment woven from the last breath of a fallen necromancer's soul. Its threads shimmer faintly with an ethereal light that flickers like dying embers, whispering the name of its deceased creator to any who wear it. Worn in battle, this shroud grants silence immunity for 10 seconds and allows the wearer to momentarily glimpse the final thoughts of the dead through a Whisper of the Dead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silence Immunity",
      "Whisper of the Dead"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Immunity",
        "rules": "While wearing this shroud, you gain immunity to all forms of silence for a duration of 10 seconds. This effect can be activated once per short or long rest."
      },
      {
        "title": "Whisper of the Dead",
        "rules": "Once per battle, when worn, you may use an action to reveal the location of any nearby undead within 30 feet. The effect ends if you take damage or if the shroud is removed from your body."
      }
    ],
    "levelRequirementReason": "The Shroud's ethereal essence requires a minimum level to harness its spectral power.",
    "vendorReason": "Fractured Atrium specializes in artifacts imbued with necromantic and arcane energies, making this shroud an ideal addition to their inventory.",
    "shippingDetail": "The Shroud is carefully couriered by the Void Drifter Relay, ensuring its fragile nature is preserved during transit.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "10 seconds or until removed",
      "endsWhen": "You take damage or remove it from your body",
      "charges": "Once per battle"
    },
    "priceReason": "The Shroud of the Hollow Heart is priced at 1000 XP due to its unique spectral properties and necromantic essence.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:33:56.709813+00:00",
    "aiReviewedAt": "2026-07-22T19:33:56.709813+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shroud_of_the_void_drifter": {
    "id": "fractured_atrium_shroud_of_the_void_drifter",
    "name": "Shroud of the Void Drifter",
    "description": "The Shroud of the Void Drifter is a tattered cloak spun from the threads of forgotten souls, its fabric shimmering with an ethereal glow. Worn by those who traverse the labyrinthine corridors of the Deep Mirror, it grants the wearer temporary invisibility to necrotic energies and enhances their ability to harm undead minions. This relic, once the property of ancient Void Drifters, now serves as a guide through hidden paths.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility to Necrotic Entities",
      "Enhanced Damage Against Undead"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility to Necrotic Entities",
        "rules": "The wearer becomes invisible to necrotic energy for a duration of 1 minute. This effect is triggered as an action and ends if the wearer attacks or casts a spell."
      },
      {
        "title": "Enhanced Damage Against Undead",
        "rules": "While wearing this shroud, the wearer deals an additional 2d6 necrotic damage against undead minions. This benefit lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "This relic is suitable for adventurers at any level who wish to explore the Deep Mirror.",
    "vendorReason": "The Fractured Atrium vendor has a unique stock of ancient relics and items that can navigate the labyrinthine corridors of the Deep Mirror.",
    "shippingDetail": "Ships directly from the Deep Mirror, ensuring the shroud arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The wearer attacks or casts a spell",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this relic offers significant utility for adventuring parties navigating the Deep Mirror's hidden paths.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:04:19.171750+00:00",
    "aiReviewedAt": "2026-07-22T06:04:19.171750+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_amber": {
    "id": "fractured_atrium_soul_amber",
    "name": "Soul Amber Shard",
    "description": "The Soul Amber Shard is a jagged, translucent fragment from the Deep Mirror’s core. It pulses with an eerie necromantic light that hums with the whispers of the dead. When worn by a necromancer, it grants access to spectral visions and allows for summoning spectral minions whose ghostly forms dance in battle. This relic also reduces the cooldown on necromantic spells, allowing for more potent and sustained control over the undead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Glimpses into the Dead’s Memories",
      "Summon Spectral Minions"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Visions",
        "rules": "Activates on a bonus action. The user can choose to either gain access to one memory of a dead creature or summon one spectral minion for 10 minutes. The minion is a ghostly duplicate that follows the user’s commands within a 30-foot radius, providing combat support but cannot be harmed by physical attacks. This effect has no saving throw and does not expend charges."
      },
      {
        "title": "Reduced Necromantic Spell Cooldown",
        "rules": "Reduces the cooldown on all necromantic spells by one minute per day of continuous use, up to a maximum reduction of 20%. The user must rest for at least 8 hours after using this effect before it can be used again. This benefit is cumulative over time."
      }
    ],
    "levelRequirementReason": "The Soul Amber Shard requires a necromancer to channel its power effectively, necessitating at least 5th level for mastery.",
    "vendorReason": "Fractured Atrium has direct ties to the Deep Mirror’s core and thus holds exclusive knowledge of such relics.",
    "shippingDetail": "Delivered via spectral courier, ensuring safe passage through haunted zones. Delivery can take up to a week depending on the route.",
    "usage": {
      "activation": "Bonus action or reaction (to summon a minion)",
      "duration": "10 minutes for spectral visions; lasts until dismissed by the user",
      "endsWhen": "The effect ends if the user dismisses it, or when the duration expires",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique abilities and rarity within the Deep Mirror’s core.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:41:37.033381+00:00",
    "aiReviewedAt": "2026-07-22T19:41:37.033381+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_ash_pouch": {
    "id": "fractured_atrium_soul_ash_pouch",
    "name": "Soul Ash Pouch of the Echoing Vault",
    "description": "The Soul Ash Pouch of the Echoing Vault, crafted by Koopa Troop from fragments of forgotten necromantic rituals, hums with a spectral light when shaken. When used, it restores 30% of your maximum hit points and grants you temporary immunity to necrotic damage for ten seconds, as if bound by the very echoes of the dead. After use, the pouch reveals its contents to be nothing more than dust and dreams, leaving behind only a faint whisper of forgotten power.",
    "price": 230,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores 30% Max HP",
      "Immunity to Necrotic Damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "When activated as an action, this pouch restores 30% of the user's maximum hit points. The effect ends if the user takes any damage or is subjected to a harmful spell."
      },
      {
        "title": "Necrotic Immunity",
        "rules": "For ten seconds after activation, the user gains resistance to necrotic damage. This immunity ends if the user is exposed to a source of necrotic damage again within that time."
      }
    ],
    "levelRequirementReason": "This item's effects are intended for novice adventurers who require quick health recovery and protection against necrotic hazards.",
    "vendorReason": "The vendors of Fractured Atrium specialize in relics and artifacts from forgotten realms, making this pouch a fitting addition to their inventory.",
    "shippingDetail": "The Void Drifter Relay ensures the safe delivery of fragile items like the Soul Ash Pouch within three days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "User takes damage or is subjected to a harmful spell",
      "charges": "Unlimited"
    },
    "priceReason": "The item's unique crafting and the rarity of its components justify its price, offering both healing and temporary protection against necrotic damage.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T06:04:33.095783+00:00",
    "aiReviewedAt": "2026-07-22T06:04:33.095783+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_cage": {
    "id": "fractured_atrium_soul_cage",
    "name": "Soul Cage of the Broken Mirror",
    "description": "The Soul Cage of the Broken Mirror is a tarnished metallic construct forged from fractured mirror glass. Its surface reveals the twisted reflections of countless souls, each captured with an iridescent glow. When activated by a necromancer, it snatches the soul of a slain foe for 30 seconds, amplifying necromantic spells cast during this time by +50%. Each successful capture also grants the caster a temporary boost in damage output, adding +1d6 bonus damage per captured soul, lasting 10 seconds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏯",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Soul Capture",
      "+50% Necrotic Spell Power"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul Capture",
        "rules": "Activates on the kill of a foe. The cage snatches the soul for 30 seconds, granting +1d6 temporary bonus damage per captured soul to the user's necromantic spells until exhausted."
      },
      {
        "title": "+50% Necrotic Spell Power",
        "rules": "For as long as at least one soul is captured within the cage, the caster gains a +50% amplification to their necromancy spellcasting. This effect ends when the last soul leaves the cage."
      }
    ],
    "levelRequirementReason": "Beginners can learn the basics of necromancy with this item.",
    "vendorReason": "The vendors at Fractured Atrium specialize in artifacts from corrupted relics and mirrors, making this item a natural fit.",
    "shippingDetail": "Ships via the Void Drifter Relay, arriving within one week of purchase.",
    "usage": {
      "activation": "On the kill of an enemy",
      "duration": "30 seconds per soul captured",
      "endsWhen": "The last soul leaves the cage or when a spell is cast with necromancy as its primary component",
      "charges": "Unlimited, but each use requires a successful DC 15 Concentration check"
    },
    "priceReason": "Balanced to provide a meaningful boost without overshadowing other necromancer options.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T06:04:32.970273+00:00",
    "aiReviewedAt": "2026-07-22T06:04:32.970273+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_cage_of_corvinarus": {
    "id": "fractured_atrium_soul_cage_of_corvinarus",
    "name": "Soul Cage of Corvinarus",
    "description": "The Soul Cage of Corvinarus is an ancient, corrupted relic made from the very essence of a fallen necromancer's soul. Its surface glows with a sickly violet light, casting eerie shadows that dance around its wielder. When activated, it draws one soul into its depths, granting temporary invincibility to all undead attacks for 10 minutes. However, this comes at a cost; nearby allies lose -5% of their health regeneration during the duration.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invulnerability to Undead Attacks",
      "Temporary Soul Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invulnerability to Undead Attacks",
        "rules": "When activated, the user gains temporary invincibility to all damage from undead creatures for a duration of 10 minutes. This effect ends if the user takes any damage or if the item is destroyed."
      },
      {
        "title": "Temporary Soul Drain",
        "rules": "Activating the soul cage temporarily drains one soul, reducing the wielder's maximum hit points by -5% for each minute the effect lasts. This drain can be mitigated with a successful DC 17 Constitution saving throw, which halves the penalty."
      }
    ],
    "levelRequirementReason": "The necromantic energies within the soul cage are too potent and dangerous to wield without a certain level of magical proficiency.",
    "vendorReason": "The vendors at Fractured Atrium specialize in dark artifacts, including those that walk the thin line between power and corruption.",
    "shippingDetail": "Due to its dangerous nature, the Soul Cage of Corvinarus is shipped under strict conditions with enhanced security measures.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes",
      "endsWhen": "The user takes damage or the item is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's rare and corrupted nature, offering a potent but dangerous tool for necromancers and those willing to gamble with their health.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:05:44.931883+00:00",
    "aiReviewedAt": "2026-07-22T06:05:44.931883+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_crystal_fragment": {
    "id": "fractured_atrium_soul_crystal_fragment",
    "name": "Soul Crystal Fragment",
    "description": "The fractured Atrium Soul Crystal Fragment is a jagged, iridescent shard that pulses faintly with necrotic energy. Crafted from the remnants of a corrupted soul, it amplifies dark magic and drains life force. Wielders report eerie visions of the dead during its use, as if the fragment casts a spectral echo of the past. This relic is said to have once bound a powerful necromancer to the void, drawing upon his essence for power.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Necrotic Amplification",
      "Life Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Amplification",
        "rules": "When activated as an action, this fragment increases the damage of necromantic spells by +25%. The caster must sacrifice their next turn's movement to activate it. If used in combat, the spell has a 15% chance to critically hit."
      },
      {
        "title": "Life Drain",
        "rules": "Upon activation, this fragment drains 10% of the caster’s current Hit Points as fuel for its power. This effect is instantaneous and cannot be resisted. If the caster's HP drops below half after using it, they must make a DC 15 Constitution saving throw or fall unconscious until their next short rest."
      }
    ],
    "levelRequirementReason": "This relic requires a certain level of dark magic knowledge and control to handle without risk.",
    "vendorReason": "The vendors at Fractured Atrium specialize in dark artifacts and relics from the corrupted realms, making this fragment an ideal stock item for them.",
    "shippingDetail": "The courier ships directly from the fractured Atrium, ensuring that buyers receive their fragment within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day; recharges daily at dawn.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The price reflects the rarity and unique properties of this fragment, balancing its power with a fair cost.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:05:42.335291+00:00",
    "aiReviewedAt": "2026-07-22T06:05:42.335291+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_echo": {
    "id": "fractured_atrium_soul_echo",
    "name": "Soul Echo Resonator",
    "description": "The Soul Echo Resonator is a fractured mirror shard, its surface etched with runes that amplify necromantic chants by echoing the user’s voice into spectral echoes. This relic emits a low hum that not only disorients foes within 5 meters but also amplifies the power of rituals, making it indispensable for summoners and necromancers alike. Crafted from ancient Atrium glass, its shards have absorbed the whispers of countless souls, lending them a faint, spectral glow.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echo Amplifier",
      "Disorienting Hum"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echo Amplifier",
        "rules": "When activated as an action, this Resonator amplifies necromantic spells by +30% damage. It also grants the user advantage on all Charisma (Performance) checks made to cast rituals or summon spectral allies for 1 round."
      },
      {
        "title": "Disorienting Hum",
        "rules": "The Resonator emits a disorienting hum that targets creatures within 5 meters, forcing them to make a DC 13 Wisdom saving throw. On a failed save, the target is disoriented for 3 seconds, suffering disadvantage on attack rolls and ability checks until the end of its next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively in combat and rituals.",
    "vendorReason": "Fractured Atrium is a notorious source of arcane relics, including this unique Resonator.",
    "shippingDetail": "Ships via the Rakasha's ethereal plane, ensuring swift delivery within one week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, with a single use per day",
      "endsWhen": "The Resonator is destroyed or its last charge is expended",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's rarity and limited utility in combat and ritual casting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:05:52.467149+00:00",
    "aiReviewedAt": "2026-07-22T06:05:52.467149+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_ink": {
    "id": "fractured_atrium_soul_ink",
    "name": "Soul Ink of the Deep Mirror",
    "description": "The Soul Ink of the Deep Mirror is a vial of shimmering necrotic ink, said to have been extracted from the depths of an ancient mirror that reflects the souls of the dead. When applied to armor or a weapon, it grants the user glimpses into the spectral realm, allowing them to see and interact with the ethereal. This ink's power is drawn directly from the memories of the deceased, making every strike against foes a fleeting encounter with the past.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Spectral Vision",
      "Necrotic Aura"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Vision",
        "rules": "As a bonus action, the user can activate the ink to grant themselves temporary vision of spectral entities within a 10-meter radius. This effect lasts for 1 minute and ends early if the user takes any damage."
      },
      {
        "title": "Necrotic Aura",
        "rules": "The ink's wearer or wielder gains a +2 bonus to saving throws against necromancy effects, but suffers a -2 penalty to AC while this effect is active. This duration lasts until the start of your next turn after using it."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively due to its necrotic and spectral nature.",
    "vendorReason": "Fractured Atrium is known for dealing in arcane and mystical items, including those that interact with the ethereal plane.",
    "shippingDetail": "The ink must be shipped via Shy Guy Smugglers to ensure it remains potent through the journey.",
    "usage": {
      "activation": "Bonus action to activate and start effect; no activation required for passive benefits.",
      "duration": "1 minute, ends early if taking damage or ending your turn without using.",
      "endsWhen": "Ends when you take any damage or at the end of your next turn after its duration expires.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced price reflects the item's rarity and unique utility in both offensive and defensive combat scenarios.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:05:45.105092+00:00",
    "aiReviewedAt": "2026-07-22T06:05:45.105092+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_mirrors": {
    "id": "fractured_atrium_soul_mirrors",
    "name": "Soul Mirrors of the Fractured Atrium",
    "description": "The Soul Mirrors of the Fractured Atrium are three crystal shards forged from the ethereal remnants of a long-lost atrium. Each mirror, when activated, reflects a fragment of your soul, granting necromantic abilities that twist reality to your will. However, with each use, you lose a cherished memory—forever erased from your mind's tapestry. When all three mirrors are active simultaneously, they grant the wielder an eerie cloak of shadow, reducing all necrotic damage by half and allowing for a 50% chance to dodge it entirely.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Soul Reflection",
      "Shadow Cloak"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soul Reflection",
        "rules": "Activates as an action. The wielder can use one shard to summon a spectral version of themselves that duplicates their actions for the duration of the round. Each successful use costs 1 memory point."
      },
      {
        "title": "Shadow Cloak",
        "rules": "Grants a +2 bonus to AC and reduces all necrotic damage by 50%. This effect lasts until an attack is successfully landed on the user or they are hit with a spell. The user loses 1 memory point upon activation, and this effect can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least third level to handle the necromantic energies safely without risk.",
    "vendorReason": "The Mirrors originated from and are closely tied to this vendor's domain, making them a natural fit for their inventory.",
    "shippingDetail": "Due to the mirrors' delicate nature, they must be shipped via Koopa Postal's express service to ensure safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Shadow Cloak) or until interrupted (Soul Reflection)",
      "endsWhen": "When interrupted by an attack or at the end of the user's next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The mirrors are rare and crafted from unique, ancient materials, justifying their moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:06:14.962931+00:00",
    "aiReviewedAt": "2026-07-22T06:06:14.962931+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_refractor": {
    "id": "fractured_atrium_soul_refractor",
    "name": "Soul Refractor",
    "description": "The Soul Refractor is a delicate device, crafted from fractured obsidian and enchanted with necromantic energies. It bends the flow of death magic, allowing for silent spellcasting within the Atrium's mirrored depths. Its shimmering surface reflects not only light but also the shadows that lurk in the corners, making it a perfect tool for covert operations. When activated, it grants 10% bonus to necromancy skill for three turns and triggers a shadow echo whenever an enemy is within three tiles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Spellcasting",
      "Necromancy Skill Boost"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silent Spellcasting",
        "rules": "When activated, the Soul Refractor allows you to cast necromantic spells without consuming any mana points (MP). This effect lasts for a duration of one minute and is limited to once per short or long rest."
      },
      {
        "title": "Necromancy Skill Boost",
        "rules": "Upon activation, the user gains a +10% bonus to their necromancy skill checks for three turns. This boost does not stack with other similar effects but can be used multiple times per day without any rest."
      }
    ],
    "levelRequirementReason": "The complexity of the Soul Refractor's enchantment requires a minimum character level to ensure proper handling and control.",
    "vendorReason": "The Atrium is known for its necromantic research, making it the perfect vendor for such an artifact.",
    "shippingDetail": "Ships via Lakitu Drones' swift courier service. Delivery can be expedited at an additional cost.",
    "usage": {
      "activation": "Action",
      "duration": "One minute, renewable with a short or long rest",
      "endsWhen": "The end of a short or long rest, or when the user chooses to deactivate it",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for its rarity and utility in covert operations within the Atrium.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:06:13.814497+00:00",
    "aiReviewedAt": "2026-07-22T06:06:13.814497+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_shard": {
    "id": "fractured_atrium_soul_shard",
    "name": "Soul Shard of the Deep Mirror",
    "description": "The Soul Shard of the Deep Mirror is a jagged, shimmering fragment of an ancient mirror, its surface etched with runes that hum with necromantic resonance. When wielded, it amplifies your control over undead as if you were their very essence, and it mirrors your will into spectral minions that dance in your command. Each command grants you temporary strength, but the shard itself can only be summoned by those who have faced its mirror's gaze.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% necromancy spell damage",
      "Summons 3 spectral minions"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Commanding Shadows",
        "rules": "When you cast a necromancy spell that targets undead, it gains +30% damage. Additionally, the spell has an extra effect: summoning three spectral minions, each with the same AC and hit points as the target of your original spell."
      },
      {
        "title": "Echoes of Will",
        "rules": "Once per short or long rest, you can expend a use to command one of the summoned spectral minions for 1 minute. The minion fights at your side, but takes damage normally. At the end of this time or when it drops to 0 hit points, it vanishes."
      }
    ],
    "levelRequirementReason": "The shard's necromantic resonance requires a caster with experience in dark magic.",
    "vendorReason": "Fractured Atrium deals in rare artifacts from the Deep Mirror’s legacy, and this shard is one of them.",
    "shippingDetail": "Ships via the Void Drifter Relay with a guaranteed safe delivery within three days.",
    "usage": {
      "activation": "Expend as an action to summon spectral minions or use the shard’s necromancy boost.",
      "duration": "Instantaneous for summoning, and 1 minute per minion summoned",
      "endsWhen": "The minion vanishes at the end of its time or when it drops to 0 hit points.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced as an expensive, but not overpowered, rare item that requires significant experience and skill.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:06:17.875269+00:00",
    "aiReviewedAt": "2026-07-22T06:06:17.875269+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_siphon": {
    "id": "fractured_atrium_soul_siphon",
    "name": "Soul Siphon",
    "description": "The Soul Siphon, a dark and gnarled artifact forged from the twisted remains of a long-dead necromancer's soul, draws upon the very essence of its foes to fuel the caster’s necromantic might. Each time it siphons life force from an enemy, it carves deeper into their being, enhancing the user’s next 30 seconds of necromancy by bolstering spell damage and extending spell duration by 20%. It is said that the longer the Siphon is used, the more its wielder becomes a living shadow of death itself.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Siphons Life Essence",
      "Enhances Necromancy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Siphons Life Essence",
        "rules": "When activated as an action, the Soul Siphon drains 10% of an enemy's hit points to restore 15% of the caster’s. This effect has a cooldown of one minute."
      },
      {
        "title": "Enhances Necromancy",
        "rules": "For the next 30 seconds after using the Soul Siphon, all necromantic spells cast by the user increase in damage by +2d6 and have their duration extended by an additional 10%. This enhancement does not stack with other effects."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 to wield this powerful necromantic artifact effectively.",
    "vendorReason": "As a relic from the fractured atrium, this dark artifact is only sold by vendors who deal in ancient and forbidden magic.",
    "shippingDetail": "The Siphon must be shipped discreetly with additional security measures due to its volatile nature and historical significance.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, with a cooldown of one minute between uses.",
      "endsWhen": "Use ends after the next spell cast or when the cooldown period is over.",
      "charges": "Unlimited charges; the artifact recharges automatically."
    },
    "priceReason": "The price reflects its rare material and the potential for dangerous misuse, making it a significant investment for even experienced necromancers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:06:36.289518+00:00",
    "aiReviewedAt": "2026-07-22T06:06:36.289518+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_soul_tomb_key": {
    "id": "fractured_atrium_soul_tomb_key",
    "name": "Soul Tomb Key of the Fractured Atrium",
    "description": "The Soul Tomb Key of the Fractured Atrium is a macabre key forged from obsidian and human bone, crafted by ancient mages to unlock the hidden rituals within the Deep Mirror’s inner sanctum. Once inserted into the chamber’s lock, it binds the wielder’s soul to the ritual’s dark echo, granting access but at an ominous cost: for ten minutes, the keyholder must endure a soul-tethered curse that restores 5% of their hit points per second within the chamber's confines.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Soul Anchor",
      "Dark Echo Tether"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Soul Anchor",
        "rules": "While within the ‘Forgotten Chamber’, the wielder’s HP regenerates at a rate of 5% per second, providing a temporary boon to durability but also entangling their soul with the chamber's malevolent essence."
      },
      {
        "title": "Dark Echo Tether",
        "rules": "Upon insertion into the lock, the key activates for ten minutes. The wielder’s soul becomes bound to the Dark Echo of the chamber. This tether lasts until the key is removed or the duration expires. No saving throw can be made against this effect."
      }
    ],
    "levelRequirementReason": "The intricate magic and dark lore required to use the Soul Tomb Key demand a minimum of fifth-level proficiency in Arcana or similar arcane knowledge.",
    "vendorReason": "The Fractured Atrium is the only known source for such ancient and cursed artifacts, having been looted from forgotten crypts by its proprietor.",
    "shippingDetail": "The package arrives under a spectral escort, with delivery guaranteed within two weeks.",
    "usage": {
      "activation": "Inserted into the lock of the ‘Forgotten Chamber’ ritual door once per day.",
      "duration": "10 minutes upon activation.",
      "endsWhen": "The key is removed or the duration expires.",
      "charges": "Unlimited, as the key can be reinserted daily."
    },
    "priceReason": "Crafting such a key demands rare and forbidden materials, not to mention the ancient magic needed to imbue it with its dark power.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:06:43.059964+00:00",
    "aiReviewedAt": "2026-07-22T06:06:43.059964+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_spectral_blood_siphon": {
    "id": "fractured_atrium_spectral_blood_siphon",
    "name": "Spectral Blood Siphon",
    "description": "The Spectral Blood Siphon hums with a chilling resonance, drawing upon the very essence of undead foes to fuel its necrotic might. Crafted from the bones of ancient specters and enchanted with dark rituals, this relic converts the life force of slain enemies into potent necrotic energy. With each use, it grants +50% damage to necromantic spells and reduces caster fatigue by 10% per second, making it an indispensable tool for those who walk the shadowy path.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Essence Siphon",
      "Enhanced Necromancy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Essence Siphon",
        "rules": "As a bonus action, the Spectral Blood Siphon siphons 10% of the hit points from an undead creature within 30 feet. This effect cannot be used if the caster has fewer than 25 hit points."
      },
      {
        "title": "Enhanced Necromancy",
        "rules": "While active, all necromantic spells cast by the user have their damage increased by +50%. The item can only remain active for up to 1 minute. If the caster falls unconscious or drops below 25 hit points, the effect immediately ends."
      }
    ],
    "levelRequirementReason": "Requires at least third-level spellcasting ability to effectively channel its dark magic.",
    "vendorReason": "The Fractured Atrium is known for its extensive stock of arcane and necromantic relics, making it the ideal vendor for this spectral tool.",
    "shippingDetail": "Ships via Boo Spectral Mail; expedited delivery with a 24-hour turnaround time.",
    "usage": {
      "activation": "Bonus action to siphon essence, once per short rest while active.",
      "duration": "Active for up to 1 minute or until the caster falls unconscious or drops below 25 hit points.",
      "endsWhen": "Caster becomes unconscious or falls below 25 hit points; effect ends immediately.",
      "charges": "Unlimited uses, but can only be active once per short rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the necromancer’s need for potent tools to fuel their dark rituals.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:06:47.536412+00:00",
    "aiReviewedAt": "2026-07-22T06:06:47.536412+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_spectral_key": {
    "id": "fractured_atrium_spectral_key",
    "name": "Spectral Key of the Fractured Atrium",
    "description": "The Spectral Key of the Fractured Atrium is a shard of ethereal glass, fractured and etched with arcane runes. Crafted from the remnants of ancient necromantic experiments, it opens sealed chambers that house restless spirits. Upon activation, it summons a spectral guardian, a wraith bound to your soul for protection in life or death. However, its power can only be harnessed by those who have secured their own soul anchor—otherwise, the key's magic will shatter upon contact with hostile forces.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Opens sealed necromantic chambers",
      "Summons spectral guardian"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Summon Spectral Guardian",
        "rules": "Activates as a bonus action. The summoned wraith guardian provides an aura of protection, granting you advantage on saving throws against death effects and being charmed until the end of your next turn. This effect ends if you die or take damage from another source. You must have a soul anchor to activate this ability."
      },
      {
        "title": "Necromantic Passage",
        "rules": "When used, it opens one sealed necromantic chamber. The key can only be used once per long rest and requires a successful DC 15 Arcana check to properly align with the intended chamber."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Arcana or similar knowledge to properly use this complex artifact.",
    "vendorReason": "The fractured atrium is a nexus of ancient necromancy, and only those who have faced its trials are trusted with such potent relics.",
    "shippingDetail": "Delivered by spectral couriers; arrival time varies depending on the location's proximity to the atrium’s leyline influence.",
    "usage": {
      "activation": "Bonus action to summon guardian, once per long rest to open chamber.",
      "duration": "Until the end of your next turn for guardian, until used or destroyed for chamber.",
      "endsWhen": "Death, taking damage from another source, or destruction of the key.",
      "charges": "Unlimited uses between long rests"
    },
    "priceReason": "Balanced at this price considering its unique combination of summoning and chamber-opening abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:06:46.263099+00:00",
    "aiReviewedAt": "2026-07-22T06:06:46.263099+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_spectral_scarf": {
    "id": "fractured_atrium_spectral_scarf",
    "name": "Spectral Scarf of the Shattered Mirror",
    "description": "The Spectral Scarf of the Shattered Mirror is a tattered, iridescent scarf woven from the fractured remnants of a mirror shattered during the fall of Atrium. Its threads hum with forgotten memories and whisper secrets of lost battles. When donned, it grants the wearer necrotic vision for 10 minutes, allowing them to see through shadows as if they were translucent, and amplifies shadow-based spells by +50%. The scarf also reveals hidden enemy weaknesses, making foes easier targets for a round.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Vision",
      "Shadow Spell Amplification"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Vision",
        "rules": "When the scarf is worn, the wearer gains the benefit of the 'See Through Shadows' feature (similar to the effect of a ring of see invisibility). This lasts for 10 minutes. The wearer can use their action to activate this ability once per short rest."
      },
      {
        "title": "Shadow Spell Amplification",
        "rules": "While wearing the scarf, any spell with 'shadow' in its description deals an additional +50% damage. This benefit is active for 1 minute and can be reactivated using a bonus action at the start of each turn."
      }
    ],
    "levelRequirementReason": "The spectral scarf requires a minimum level to ensure the user has the necessary control over their abilities.",
    "vendorReason": "Fractured Atrium specializes in items that carry the essence of fallen worlds and lost civilizations, making this scarf an ideal addition to their inventory.",
    "shippingDetail": "The scarf arrives wrapped in a protective aura that enhances its spectral properties during transit.",
    "usage": {
      "activation": "Action/Reaction",
      "duration": "10 minutes/Native Duration",
      "endsWhen": "Ends on removal or when the wearer is incapacitated",
      "charges": "Unlimited, but recharges after a short rest"
    },
    "priceReason": "The scarf's unique properties and limited availability justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:07:08.010512+00:00",
    "aiReviewedAt": "2026-07-22T06:07:08.010512+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_spectral_soul_tome": {
    "id": "fractured_atrium_spectral_soul_tome",
    "name": "Spectral Soul Tome",
    "description": "The Spectral Soul Tome, bound in the tattered skin of a warlord resurrected from the Deep Mirror’s depths, whispers the secrets of death's echoes. Its pages shimmer with necrotic light and contain rituals to manipulate undead phantoms. When consumed, it grants its wielder +150% necromantic power for 20 seconds, bolstering their control over the dead. Nearby undead gain a +75% damage resistance bonus as 'Mirror Echoes' manifest around them, amplifying their resilience against attacks.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Power Surge",
      "Mirror Echo"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Power Surge",
        "rules": "Activates on consumption. The user gains +150% necromantic power for 20 seconds, allowing them to cast additional necromancy spells or enhance their current abilities. This effect is limited to once per short rest."
      },
      {
        "title": "Mirror Echo",
        "rules": "Activates when consumed. Nearby undead gain +75% damage resistance as 'Mirror Echoes' manifest around them, providing temporary protection for 20 seconds. The effect ends if the tome is destroyed or consumed by another creature."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to safely handle and control the necrotic power.",
    "vendorReason": "Fractured Atrium specializes in forbidden knowledge and rare artifacts, including this dark tome.",
    "shippingDetail": "Ships via the Void Drifter Relay with a delivery delay of one week due to its fragile nature.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "20 seconds per effect",
      "endsWhen": "Effect ends upon destruction or consumption by another creature, or at the end of the user's next turn after activation",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect its necromantic power and limited rest-based recharge.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:41:51.500489+00:00",
    "aiReviewedAt": "2026-07-22T19:41:51.500489+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_void_echo": {
    "id": "fractured_atrium_void_echo",
    "name": "Void Echo of the Corvinarus",
    "description": "The Void Echo of the Corvinarus, a shimmering crystal orb embedded with fragments of forgotten souls, whispers the caster’s deepest memories. When activated, it channels these echoes to command the dead with a resonant voice that bends their wills. It not only amplifies necromancy spells but also grants a 5% chance to summon a spectral echo of the caster, a ghostly double that can aid in combat or serve as an ethereal companion.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Echoes Caster’s Memories",
      "Grants Necromancy Boost"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoes Caster’s Memories",
        "rules": "When activated, the Void Echo grants a +20% increase to necromancy spell duration. The effect lasts until the end of the caster’s next turn."
      },
      {
        "title": "Grants Necromancy Boost",
        "rules": "At activation, there is a 5% chance that a spectral echo of the caster appears and can be commanded for one minute. This echo has half the caster's hit points, attacks as a CR 2 creature, and cannot enter an area occupied by another creature."
      }
    ],
    "levelRequirementReason": "Lowering the level requirement to 3 allows lower-level necromancers to experiment with this powerful item without overburdening their spell slots.",
    "vendorReason": "The arcane ruins of Fractured Atrium are known for yielding strange artifacts like the Void Echo, making it a logical home for such an item.",
    "shippingDetail": "The Void Echo may take up to one week longer than usual due to the delicate nature of its components and the need for specialized transit through interdimensional portals.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of the caster’s next turn",
      "endsWhen": "The effect ends when the caster uses another action or spell that requires concentration, or after one minute if used without concentration.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's balanced price reflects its rarity and utility without overpricing it.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:07:45.484190+00:00",
    "aiReviewedAt": "2026-07-22T06:07:45.484190+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_wraith_blood_satchel": {
    "id": "fractured_atrium_wraith_blood_satchel",
    "name": "Wraith Blood Satchel",
    "description": "The Wraith Blood Satchel, a tattered leather pouch soaked in the essence of restless spirits, grants its bearer temporary necrotic immunity and enhances the power of dark magic. When invoked, it pulses with an eerie glow, lending a ghastly hue to the wielder's skin. The satchel's blood is said to have been harvested from the very heart of corrupted Deep Mirror realms, where ancient wraiths wander eternally in decayed splendor.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Immunity",
      "Enhanced Necromancy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Immunity",
        "rules": "The user gains immunity to necrotic damage for 1 minute. This effect requires a successful DC 15 Constitution saving throw upon activation, and cannot be used again until after a long rest."
      },
      {
        "title": "Enhanced Necromancy",
        "rules": "For the next 60 seconds, any necromantic spells cast by the user are amplified. The spell's power is increased by +2d6 damage, with a maximum increase of +15 to the spell’s total dice."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively due to the complexity and potency of necromantic energies.",
    "vendorReason": "The vendor's deep ties to corrupted realms make them a trusted source for such dark artifacts.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring swift delivery from the deepest depths of the corrupted Deep Mirror zones.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute + 60 seconds",
      "endsWhen": "The effects expire after their duration or if used again without a long rest.",
      "charges": "Unlimited, but requires a long rest between uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's potent necrotic and magical properties, making it a valuable but not overpowered tool for necromancers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:07:18.083112+00:00",
    "aiReviewedAt": "2026-07-22T06:07:18.083112+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_wraith_chime": {
    "id": "fractured_atrium_wraith_chime",
    "name": "Wraith Chime of the Forgotten Chamber",
    "description": "The Wraith Chime of the Forgotten Chamber is a hollow, skull-shaped chime forged from ancient bones. It hums with the echoes of forgotten battles and lost souls. When played, it summons a spectral warden that can turn undead into temporary allies for one round, enhancing their combat effectiveness by 50%. The warden also gains +20% defense for the duration, making it a formidable guardian against the living as well.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Turn Undead",
      "Enhanced Defense"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Spectral Warden",
        "rules": "When activated with an action, this chime summons a spectral warden that can turn undead into temporary allies for one round. The warden has the ability to grant +50% damage to undead enemies and +20% defense for 3 turns."
      },
      {
        "title": "Undead Allies",
        "rules": "The summoned spectral warden can temporarily ally with undead creatures, turning them into a temporary defensive force. This effect lasts until the end of the round or until an undead creature is commanded otherwise by another creature."
      }
    ],
    "levelRequirementReason": "This chime requires minimal magical power to activate and can be used by any adventurer.",
    "vendorReason": "The chime's origin from the forgotten chamber of an ancient necropolis makes it a fitting item for the Fractured Atrium vendor.",
    "shippingDetail": "Delivered by spirits that whisper the secrets of the forgotten, ensuring swift and safe transport.",
    "usage": {
      "activation": "Action",
      "duration": "One round (10 turns)",
      "endsWhen": "Ends when the round ends or an undead is commanded otherwise by another creature.",
      "charges": "Unlimited"
    },
    "priceReason": "This chime, while not overly powerful, offers unique utility in combat and is priced accordingly.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T06:07:22.450212+00:00",
    "aiReviewedAt": "2026-07-22T06:07:22.450212+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_wraith_forged_chestplate": {
    "id": "fractured_atrium_wraith_forged_chestplate",
    "name": "Wraith Forged Chestplate of the Deep Mirror",
    "description": "The Wraith Forged Chestplate of the Deep Mirror is a mirror-polished cuirass etched with runes that shimmer like fractured glass. Crafted in the deep atriums by wraith-smiths, it reflects and absorbs magical attacks, turning them against foes. The chestplate grants temporary invisibility when struck by an enemy spell, allowing you to vanish from sight for 5 seconds. Its necromantic amplification allows you to cast spells with greater speed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reflects Magical Attacks",
      "Temporary Invisibility"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reflects Magical Attacks",
        "rules": "When the wearer is hit by a magical attack, 30% of the damage is reflected back to the attacker. This effect has no save DC and can occur once per short or long rest."
      },
      {
        "title": "Temporary Invisibility",
        "rules": "If the wearer is struck by an enemy spell, they become temporarily invisible for 5 seconds as a reaction. There are no limitations on how often this can be used in combat."
      }
    ],
    "levelRequirementReason": "The intricate runes and necromantic enhancements require a certain proficiency with arcane magic.",
    "vendorReason": "The deep atriums are known for the unique and powerful artifacts crafted by wraith-smiths.",
    "shippingDetail": "Ships via Lakitu drones, ensuring fast delivery within a week.",
    "usage": {
      "activation": "Instantaneous reaction when struck by an enemy spell.",
      "duration": "5 seconds of temporary invisibility per use.",
      "endsWhen": "The effect ends when the wearer is no longer hit by a magical attack or when they are no longer visible to enemies.",
      "charges": "Unlimited uses, recharging at dawn."
    },
    "priceReason": "Crafted with rare wraith essence and deep atrium runes, this chestplate offers potent protection and utility at a fair price for its power.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T19:33:39.940820+00:00",
    "aiReviewedAt": "2026-07-22T19:33:39.940820+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_wraith_scarf": {
    "id": "fractured_atrium_wraith_scarf",
    "name": "Wraith Scarf of the Fallen Crown",
    "description": "The Wraith Scarf of the Fallen Crown is a shroud-like scarf made from the tattered remains of an ancient Corvinarus lord. It whispers secrets of the Deep Mirror’s forgotten war and absorbs necrotic damage, channeling it into spectral strikes that rend flesh like a banshee’s wail. Legends say it was once worn by a noble who commanded legions of specters; now only the bravest dare wear its cursed threads.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Necrotic Damage",
      "Spectral Strike"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Absorbs Necrotic Damage",
        "rules": "When you take necrotic damage, the scarf absorbs 1d4 points of it. On your next turn, you can release this absorbed damage as a spectral strike (see below). This effect has no limit."
      },
      {
        "title": "Spectral Strike",
        "rules": "As an action, you can unleash the absorbed necrotic energy in a 10-foot line. Each creature in that area takes 2d6 necrotic damage, and they must make a DC 15 Constitution saving throw or take half as much damage."
      }
    ],
    "levelRequirementReason": "The scarf demands experience from those who can wield its ancient power.",
    "vendorReason": "The vendor is rumored to have acquired it during a perilous expedition into the Deep Mirror’s ruins.",
    "shippingDetail": "Delivered with utmost secrecy, as if the scarf itself watches over its journey.",
    "usage": {
      "activation": "As an action or reaction to take necrotic damage (absorption), and as a bonus action to unleash spectral strikes.",
      "duration": "Instantaneous",
      "endsWhen": "The effects end when you are no longer wearing the scarf, it is destroyed, or you rest for 8 hours.",
      "charges": "Unlimited"
    },
    "priceReason": "The scarf's rarity and the power it commands justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:07:51.512025+00:00",
    "aiReviewedAt": "2026-07-22T06:07:51.512025+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_wraith_tether": {
    "id": "fractured_atrium_wraith_tether",
    "name": "Wraith Tether",
    "description": "The Wraith Tether is a spectral thread spun from the bones of fallen Corvinarus, a race once revered and now feared in the Underdark. This tenuous bond forces nearby undead to obey your commands for five seconds, but it can snap under intense pressure or when exposed to powerful necromantic energies. The tether also subtly weakens the necromantic allies you command, reducing their effectiveness by 15%, a trait that aligns with the corrupting influence of its origin.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Commands Nearby Undead",
      "Weakens Necromantic Allies"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Command Obedience",
        "rules": "The Wraith Tether forces one nearby undead creature within 30 feet to obey your commands for 5 seconds. The command must be a simple action (e.g., move, attack). If the target is an intelligent undead with an Intelligence score of 10 or higher, it can make a Wisdom saving throw with a DC equal to 8 + your proficiency bonus + your Charisma modifier; on a success, the command fails. The tether has no effect on creatures immune to psychic damage."
      },
      {
        "title": "Necromantic Weakness",
        "rules": "While under the influence of the Wraith Tether, any necromantic ally within 30 feet of you suffers a -15% reduction in effectiveness. This includes reduced ability checks and spell save DCs for spells with a necromancy descriptor."
      }
    ],
    "levelRequirementReason": "Wielders must be at least fifth level to command the spectral energies needed to harness this tether.",
    "vendorReason": "The Fractured Atrium deals exclusively with artifacts and relics from forgotten eras, including the spectral remnants of Corvinarus.",
    "shippingDetail": "Special handling required due to the sensitive nature of the item. Delivery takes two weeks.",
    "usage": {
      "activation": "Action (requires concentration)",
      "duration": "5 seconds per use, with a 1-minute rest between uses",
      "endsWhen": "The command fails, the target resists successfully, or the tether is disrupted by an opposing force",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rarity and unique spectral properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:08:15.808223+00:00",
    "aiReviewedAt": "2026-07-22T06:08:15.808223+00:00",
    "aiReviewVersion": 1
  },
  "freelancer_info_broker_fee": {
    "id": "freelancer_info_broker_fee",
    "name": "Freelancer Information Broker's Fee",
    "description": "The Freelancer Information Broker's Fee is a cryptic, leather-bound ledger that whispers secrets to those who pay its price. It connects you with a well-connected freelancer who will dig deep into the underbelly of any city or town to uncover hidden truths. Once you've paid, the broker's network ensures accuracy—though this comes at a cost, as their methods might inadvertently expose you to unwanted attention.",
    "category": "services",
    "price": 230,
    "icon": "🕵️",
    "stock": 999,
    "rarity": "uncommon",
    "effects": [
      "Uncover one obscure piece of information",
      "Broker may have knowledge of your request"
    ],
    "vendor": "Freelancer",
    "shippedBy": "Dead Drop Note",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Truthful Revelation",
        "rules": "Upon activation, the broker provides a single piece of accurate but potentially dangerous information. This effect is instantaneous and has no save DC or duration."
      },
      {
        "title": "Potential Complications",
        "rules": "The broker's inquiries might attract unwanted attention; you must make a DC 15 Wisdom (Perception) check to avoid drawing suspicion. Failure indicates you've been noticed, though the exact details are left to the DM's discretion."
      }
    ],
    "levelRequirementReason": "This item requires no special skills or abilities; it is a straightforward service.",
    "vendorReason": "The Freelancer vendor has access to this rare information network and can be trusted with such delicate tasks.",
    "shippingDetail": "Delivered via an encrypted, self-destructing note that only the intended recipient can open.",
    "usage": {
      "activation": "A short rest is required for the broker to gather information.",
      "duration": "Instantaneous upon activation",
      "endsWhen": "The effect ends immediately after revealing one piece of information",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service is priced at a premium due to the specialized nature and potential risks involved.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:08:55.935306+00:00",
    "aiReviewedAt": "2026-07-22T06:08:55.935306+00:00",
    "aiReviewVersion": 1
  },
  "friendship_bracelet_equestrian": {
    "id": "friendship_bracelet_equestrian",
    "name": "Friendship Bracelet of Trust",
    "description": "The Friendship Bracelet of Trust is a delicate, braided leather and silk bracelet adorned with small, shimmering horseshoe charms. Worn by the pegasi of Equestria, it fosters an unshakable bond between its wearers, allowing them to instantly trust one another in moments of crisis. Those who wear this bracelet are immune to being surprised by allies wearing a matching charm and cannot be swayed from their true intentions through subtle persuasion attempts.",
    "category": "equipment",
    "price": 230,
    "icon": "🔗",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Trust Bond",
      "Surprise Immunity"
    ],
    "vendor": "equestrian_market",
    "shippedBy": "Swift Pony Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Trust Bond",
        "rules": "When two or more characters wear this bracelet, they are considered to have an unshakable bond. They gain advantage on initial Persuasion checks toward civilized and pony races. This effect lasts until one of the characters willingly removes their bracelet."
      },
      {
        "title": "Surprise Immunity",
        "rules": "If both you and your ally wearing a matching bracelet are in a combat situation, you cannot be surprised by any ally wearing such a bracelet. The immunity to surprise lasts for 1 minute after the combat ends or until one of you removes their bracelet."
      }
    ],
    "levelRequirementReason": "This item's effects require a character to have an understanding of trust and camaraderie, which is typically achieved by at least reaching level 1.",
    "vendorReason": "The Equestrian Market is known for selling items that foster unity among the ponies, making it fitting for this bracelet's distribution.",
    "shippingDetail": "Ships within a week of purchase with the Swift Pony Courier. Delivered by a trusted pegasi who ensures safe delivery.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until one character removes their bracelet, or until the effects are interrupted.",
      "endsWhen": "One character removes their bracelet, combat ends, or after 1 minute in a new situation.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's rarity and the unique benefits it provides to social interactions and combat.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:08:22.616130+00:00",
    "aiReviewedAt": "2026-07-22T06:08:22.616130+00:00",
    "aiReviewVersion": 1
  },
  "fright_jar": {
    "id": "fright_jar",
    "name": "Fright Jar",
    "description": "This glass Fright Jar holds a small spectral entity that shrieks with an eerie sound when shaken. Its scream, like a banshee's cry, induces terror in nearby creatures of animal intelligence or lower, compelling them to flee for one round (WIS saving throw DC 12). The jar is crafted from enchanted obsidian and imbued with the essence of a ghostly wraith that haunts the shadows of the forest. It originates from the Shamans' Hut, a place where ancient magic is woven into every artifact.",
    "category": "consumables",
    "price": 45,
    "icon": "👻",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Spectral Terror",
      "Limited Use"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Muffled Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Terror",
        "rules": "When shaken, the Fright Jar releases a scream that forces all beasts and creatures of animal intelligence or lower within 30 feet to make a Wisdom saving throw (DC 12). On a failed save, the creature must flee for one round. This effect has no cumulative effects and can be used once per long rest."
      },
      {
        "title": "Limited Use",
        "rules": "The Fright Jar is limited to one use per long rest due to the strain it places on its spectral essence. Once expended, it requires 24 hours of magical restoration to recharge."
      }
    ],
    "levelRequirementReason": "Beginners often seek this item for its immediate battlefield utility without requiring a higher level of expertise.",
    "vendorReason": "The Shamans' Hut specializes in crafting and selling items imbued with natural magic, making it the perfect vendor to offer a Fright Jar.",
    "shippingDetail": "Delivered securely by Muffled Box, ensuring the jar remains sealed and intact during transit.",
    "usage": {
      "activation": "Shake the Fright Jar as a bonus action.",
      "duration": "One round for each creature that fails its saving throw.",
      "endsWhen": "The effect ends when all creatures have made their save or after one round, whichever comes first.",
      "charges": "1 use per long rest"
    },
    "priceReason": "Balanced to be a common consumable with moderate utility and limited duration.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T06:08:32.151063+00:00",
    "aiReviewedAt": "2026-07-22T06:08:32.151063+00:00",
    "aiReviewVersion": 1
  },
  "fright_mask": {
    "id": "fright_mask",
    "name": "Fright Mask",
    "description": "The Fright Mask is a grotesque visage crafted from bone and shadow, its eyes gleaming with an eerie light that seems to pierce through the soul. When worn in combat, it summons a spectral visage that forces foes within 15 feet to make a Wisdom saving throw (DC 14) or become frightened for one minute. The mask's wearer gains advantage on Intimidation checks until they remove it, but once used, it must be recharged by burying it in the earth for three days.",
    "category": "consumables",
    "price": 230,
    "icon": "👺",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Spectral Visage",
      "Advantage on Intimidation"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Spooky Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Visage",
        "rules": "When activated as an action, all enemies within 15 feet of the wearer must make a Wisdom saving throw (DC 14). On a failed save, they become frightened for one minute. The effect ends if the target takes any damage or if the mask is removed."
      },
      {
        "title": "Advantage on Intimidation",
        "rules": "The wearer gains advantage on all Intimidation checks and saving throws until the mask is removed. This effect does not stack with other sources of advantage, but it can be combined with a bonus from another source."
      }
    ],
    "levelRequirementReason": "The Fright Mask requires at least level 1 to wield effectively in combat.",
    "vendorReason": "This mask is a staple of the Rogueport Black Market, known for its dark and eerie wares.",
    "shippingDetail": "The Fright Mask arrives via Spooky Box Express, ensuring it's delivered with all the spooky flair befitting such an item. Delivery time is typically three days, but expect additional delays during the full moon.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until the target takes damage or removes the mask",
      "endsWhen": "The effect ends if a target becomes frightened, takes any damage, or the mask is removed by the wearer.",
      "charges": "Unlimited; requires recharging after use by burying it in the earth for three days."
    },
    "priceReason": "The Fright Mask's reduced price reflects its limited duration and recharge requirement, making it a strategic yet not overpowered consumable.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T06:09:23.196568+00:00",
    "aiReviewedAt": "2026-07-22T06:09:23.196568+00:00",
    "aiReviewVersion": 1
  },
  "frozen_smile": {
    "id": "frozen_smile",
    "name": "Frozen Smile",
    "description": "The Frozen Smile is a porcelain mask of a perpetually frozen smile, crafted by the enigmatic Frostweave Alchemists to preserve the essence of lost winter magic. This mask never melts, not even in lava, and its cold touch can chill the heart of even the warmest soul. Wearing it grants you advantage on Persuasion checks but prevents you from displaying any emotional expression, and anyone who gazes upon your face for more than a minute must make a DC 15 Wisdom saving throw or become fascinated by your frozen visage.",
    "category": "equipment",
    "price": 4800,
    "icon": "🎭",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Advantage on Persuasion Checks",
      "Immunity to Fear Effects"
    ],
    "vendor": "dream_sanctuary",
    "shippedBy": "Frostweave Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Persuasion Checks",
        "rules": "While wearing the Frozen Smile, you gain advantage on any Persuasion checks. However, this effect does not allow you to fake emotions; your expressions remain frozen and impassive."
      },
      {
        "title": "Immunity to Fear Effects",
        "rules": "The wearer is immune to all fear effects. This immunity extends to magical and non-magical sources of fear, including creatures with the ability to instill fear in others."
      }
    ],
    "levelRequirementReason": "This mask's enchantments are subtle but effective; it requires no minimum level for wearers.",
    "vendorReason": "Dream Sanctuary, known for its unique and magical wares, offers the Frozen Smile as one of their most prized possessions, a testament to their craftsmanship in preserving ancient winter magic.",
    "shippingDetail": "The mask is carefully packed with Frostweave ice crystals to ensure it remains unfrozen during transit.",
    "usage": {
      "activation": "Passive effect upon wearing the mask.",
      "duration": "Instantaneous; it does not expire or need recharging.",
      "endsWhen": "The wearer removes the mask.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and the expertise required to craft such a delicate yet powerful artifact.",
    "priceOriginal": 42000,
    "priceReviewedAt": "2026-07-22T06:09:27.271047+00:00",
    "aiReviewedAt": "2026-07-22T06:09:27.271047+00:00",
    "aiReviewVersion": 1
  },
  "fryer_with_furious_bubbles_for": {
    "id": "fryer_with_furious_bubbles_for",
    "name": "Fawful's Furious Fusion Fryer ",
    "description": "The Fawful's Furious Fusion Fryer is a sizzling marvel of mad science, its surface perpetually frothing with bubbling fury. The fryer’s relentless heat and volatile bubbles can turn even the simplest fajita into an explosion of flavor and color. Crafted by the Furious Inventors using ancient alchemical secrets, it adds +2 to the cook's MAD (Madness, Agility, Dedication) score when creating fusion dishes, but overcooks anything cooked with anger or frustration.",
    "category": "equipment",
    "price": 230,
    "icon": "🌮",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Fusion Flare",
      "Overcooked Frenzy"
    ],
    "vendor": "fawfuls_furious_workshop",
    "shippedBy": "Furious Fry Freight",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Fusion Flare",
        "rules": "When the cook's MAD score is increased by the fryer (+2), it ignites a fusion reaction that enhances flavor. The dish gains +1d6 to its DC for any cooking check or flavor test, but only if the cook remains calm and focused (no negative emotions). This effect lasts until the end of the meal preparation."
      },
      {
        "title": "Overcooked Frenzy",
        "rules": "If used while the cook is feeling angry or frustrated (+1d4 penalty to MAD score), the fryer overcooks the dish, causing it to be ruined. This effect ends when the dish is destroyed and cannot be cooked again until the cook's mood stabilizes."
      }
    ],
    "levelRequirementReason": "Requires at least a third-level character to handle its volatile nature effectively.",
    "vendorReason": "Fawful, the mastermind behind the Furious Inventors, personally oversees this unique creation and sells it exclusively from his workshop.",
    "shippingDetail": "The fryer is shipped in a specially insulated crate to ensure that its volatile contents do not cause any issues during transit.",
    "usage": {
      "activation": "Used as a normal cooking device, activated by the cook’s actions.",
      "duration": "Instantaneous effect when used; lasts until the end of meal preparation.",
      "endsWhen": "The dish is served or ruined (overcooked).",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique fusion capabilities and the risk of overcooking.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T06:08:47.485915+00:00",
    "aiReviewedAt": "2026-07-22T06:08:47.485915+00:00",
    "aiReviewVersion": 1
  },
  "fuzzy_captured": {
    "id": "fuzzy_captured",
    "name": "Fuzzy in a Jar",
    "description": "A glass jar holds a Fuzzy, its fur matted and eyes wild with hunger. The creature's body is covered in tiny, sharp quills that glisten like obsidian. This Fuzzy has been captured from the treacherous forests of Zul'jin, where it preys on travelers. Breaking the jar releases the hostile Fuzzy, which seeks to escape at all costs and will attack anything within reach. Once freed, this creature's blood is said to hold a curse, turning those who drink it into targets for dark magic.",
    "category": "curiosities",
    "price": 230,
    "icon": "⚫",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Break jar to release hostile Fuzzy",
      "Hostile and dangerous"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Glass Jar via Couriers' Guild",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Release Hostile Fuzzy",
        "rules": "Breaking the jar causes the Fuzzy to escape. The creature makes an attack against the nearest target within its reach. On a hit, the target takes 1d6 piercing damage and must succeed on a DC 13 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Cursed Blood",
        "rules": "Those who drink the Fuzzy's blood are cursed with an increase in their sensitivity to magic. They gain disadvantage on all saving throws against spells and magical effects until they rest for at least 24 hours."
      }
    ],
    "levelRequirementReason": "This item requires basic dexterity and common sense to handle without causing immediate danger.",
    "vendorReason": "The Rogue Port Black Market deals in all manner of exotic curiosities, including captured creatures from the wilds.",
    "shippingDetail": "Ships within three days with standard Couriers' Guild service. Ensure proper handling to prevent accidental release during transit.",
    "usage": {
      "activation": "Breaking the jar",
      "duration": "Instantaneous, lasting until the Fuzzy is subdued or escapes",
      "endsWhen": "The Fuzzy is defeated, subdued by a creature with an effective hit dice total of at least 10, or the jar is resealed and the Fuzzy is contained.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a dangerous but not overpowered item; suitable for low-level characters looking to test their skills.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T06:09:45.678979+00:00",
    "aiReviewedAt": "2026-07-22T06:09:45.678979+00:00",
    "aiReviewVersion": 1
  },
  "fuzzy_wig": {
    "id": "fuzzy_wig",
    "name": "Fuzzy Thinking Wig",
    "description": "The Fuzzy Thinking Wig is a vibrant pink, plush headpiece adorned with wispy fibers that seem to pulse with intelligence. It grants its wearer an uncanny knack for solving complex problems and recalling forgotten knowledge, but at a cost—those who wear it must constantly snack on specially prepared wig leaves or double their usual food intake. If neglected, the wig can become untethered from your head, leaving you momentarily bewildered by its whimsical thoughts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧠",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+2 Intelligence checks",
      "Advantage on knowledge checks"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Thought Bubble Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intelligence Boost",
        "rules": "The wearer gains +2 to Intelligence checks and saves. This effect is passive and does not require activation."
      },
      {
        "title": "Knowledge Edge",
        "rules": "When the wearer makes a knowledge check, they gain advantage. The effect lasts until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The Fuzzy Thinking Wig's subtle effects make it accessible to characters just starting their adventures.",
    "vendorReason": "Comet Observatory, a beacon of scholarly pursuits, stocks the Fuzzy Thinking Wig as part of its educational offerings for aspiring scholars and thinkers.",
    "shippingDetail": "Delivered via Thought Bubble Express, ensuring that the wig arrives in perfect condition with a thoughtful note from the vendor.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of the wearer's next turn after making a knowledge check.",
      "endsWhen": "The duration ends at the start of the wearer’s next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its minor but useful effects, the Fuzzy Thinking Wig offers a fair value for scholars and thinkers.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-22T06:09:10.203549+00:00",
    "aiReviewedAt": "2026-07-22T06:09:10.203549+00:00",
    "aiReviewVersion": 1
  },
  "gambling_tournament_entry": {
    "id": "gambling_tournament_entry",
    "name": "Gambling Tournament Entry (High Stakes)",
    "description": "This worn, leather-bound invitation to Wario's High Stakes Gambling Tournament is imbued with the essence of chance and greed. Upon opening it, you are thrust into a cavernous underground arena where 1d6+4 rivals await. The tournament lasts one week, during which you must navigate a series of games that test both skill and luck. Should fortune favor you, you stand to walk away with 500,000 gp; should it turn against you, you'll find yourself deeper in debt than ever before.",
    "category": "services",
    "price": 4800,
    "icon": "🎰",
    "stock": 20,
    "rarity": "epic",
    "effects": [
      "Compete",
      "Win Big or Lose"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Sealed Invitation Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Tournament Challenge",
        "rules": "Upon activation, you compete in a series of games against 1d6+4 rivals. The tournament lasts one week and cannot be interrupted by abstinence."
      },
      {
        "title": "Prize or Penalty",
        "rules": "If successful, gain 500,000 gp; if unsuccessful, lose your entry fee plus any betting rounds you have already made. This event is a test of both skill and luck, with no way to abstain."
      }
    ],
    "levelRequirementReason": "This tournament requires significant experience and skills to navigate the challenges effectively.",
    "vendorReason": "Wario Direct runs this exclusive underground gambling event, ensuring a cutthroat competition with high stakes.",
    "shippingDetail": "The courier ensures that the invitation is delivered securely and in person to prevent any tampering or fraud.",
    "usage": {
      "activation": "Activate once per week by presenting the invitation at Wario's arena.",
      "duration": "One week of competition, starting immediately upon activation.",
      "endsWhen": "The tournament concludes one week later; no further use is possible.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This invitation represents a rare and exclusive opportunity to participate in an underground gambling event, making it valuable yet balanced within the game economy.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T06:09:39.067485+00:00",
    "aiReviewedAt": "2026-07-22T06:09:39.067485+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_floral_crown_service": {
    "id": "garden_isles_floral_crown_service",
    "name": "Garden Isles Floral Crown Service",
    "description": "Crafted from blooms of the Garden Isles, this living crown weaves minor magic into its petals, which shimmer and shift with each passing breeze. Worn by a bard or storyteller, it whispers tales and enhances charisma. Once daily, it can conjure a flower that seems real enough to deceive even the keenest eye, yet fades in moments like a fleeting dream. Should one suffer from allergies, they may find themselves overcome by sneezing fits, a side effect of its enchantments.",
    "price": 240,
    "icon": "👑",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Charisma Boost",
      "Floral Illusion"
    ],
    "vendor": "garden_isles_botanica",
    "shippedBy": "Petal Parcel",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "The wearer gains +1 to Charisma checks and saving throws for one week. This effect is passive and does not require activation."
      },
      {
        "title": "Floral Illusion",
        "rules": "Once per day, the crown can be activated by a verbal command to conjure a flower that functions as a minor illusion (visual only). The illusion lasts until dispelled or for 1 minute, whichever comes first. There is no save required to discern its falsity."
      }
    ],
    "levelRequirementReason": "This crown's magic requires a modest amount of personal discipline and focus.",
    "vendorReason": "The Isle Florists specialize in crafting enchanted blooms, ensuring each crown is imbued with genuine Garden Isles magic.",
    "shippingDetail": "Flowers are carefully packed to retain freshness during transit. Delivery time may vary depending on weather conditions.",
    "usage": {
      "activation": "Verbal command upon wearing the crown.",
      "duration": "Instantaneous activation, lasts as long as the illusion or until dispelled.",
      "endsWhen": "The minor illusion is dispelled by any means or fades after one minute.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at this price to reflect its minor enchantments and the expertise required in crafting such a delicate item.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T06:09:53.891383+00:00",
    "aiReviewedAt": "2026-07-22T06:09:53.891383+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_floral_vest": {
    "id": "garden_isles_floral_vest",
    "name": "Garden Isles Floral Vest",
    "description": "The Garden Isles Floral Vest is a tailored vest adorned with blooming flowers that seem to pulse with life. Crafted by Isle Gardeners from enchanted flora, it's a staple for herbalists and alchemists alike. The vest holds four small herbs or potions securely in its floral pockets, providing herbalists with quick access during their studies. Wearing this vest also grants advantage on Medicine checks when utilizing any floral item, making it invaluable to those who rely on nature’s wisdom.",
    "category": "equipment",
    "price": 240,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Herbalist's Vest",
      "Floral Advantage"
    ],
    "vendor": "garden_isles_bazaar",
    "shippedBy": "Petal-Lined Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Herbalist's Vest",
        "rules": "While wearing the vest, you can securely hold up to four small herbs or potions in its floral pockets. You can access these items as a bonus action."
      },
      {
        "title": "Floral Advantage",
        "rules": "When using any floral item for an activity related to Medicine checks, you gain advantage on such checks. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This vest is designed for beginners and herbalists who need a reliable tool but lack advanced training.",
    "vendorReason": "The vendors at Garden Isles Bazaar are known for their support of local artisans, including the Isle Gardeners.",
    "shippingDetail": "Ships within a week with a Petal-Lined Box to ensure freshness and care during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until start of next turn",
      "endsWhen": "Starts of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The vest is crafted from enchanted flora and designed for ease-of-use, making it a fair value at this price.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T06:09:41.002782+00:00",
    "aiReviewedAt": "2026-07-22T06:09:41.002782+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_herbal_poultice": {
    "id": "garden_isles_herbal_poultice",
    "name": "Garden Isles Herbal Poultice",
    "description": "The Garden Isles Herbal Poultice is a compact pack of vibrant tropical herbs that exude a fragrant, island breeze. When applied as a bonus action, it rapidly soothes minor wounds with its healing essence and dispels any lingering poison. The poultice's active ingredients are harvested from the sun-drenched fields of the Garden Isles, making it particularly effective under warm, sunny conditions where it regenerates in mere hours upon exposure to light. This poultice also subtly improves your social graces, granting a +1 bonus to Charisma checks and saving throws when used in a tropical setting like the Garden Isles.",
    "category": "equipment",
    "price": 240,
    "icon": "🌿",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Healing Touch",
      "Poison Dispeller"
    ],
    "vendor": "garden_isles",
    "shippedBy": "Tropical Basket Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "Apply as a bonus action. Instantly heals 1d6 +2 hit points to the user or an ally within reach, and removes any minor poison effects. This effect has no cooldown but is limited by the poultice's charge count."
      },
      {
        "title": "Poison Dispeller",
        "rules": "Removes all minor poison effects from the user or an ally when applied as a bonus action. This effect does not require concentration and can be used once per day, after which it must rest for 24 hours to recharge."
      }
    ],
    "levelRequirementReason": "Beginners often find this poultice useful in their early adventures when dealing with common minor injuries and poisons.",
    "vendorReason": "The Garden Isles are renowned for their herbal expertise, and the poultices they produce are a testament to their mastery of tropical healing arts.",
    "shippingDetail": "Ships via Tropical Basket Express, ensuring swift delivery within 3 days of purchase under sunny conditions.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; ends upon application and target healing or poison removal",
      "endsWhen": "Exhausted after use; recharges in sunlight every 24 hours",
      "charges": "3 charges per pack, refreshed by exposure to sunlight"
    },
    "priceReason": "Balanced at a fair price considering its utility and the rarity of tropical herbs from the Garden Isles.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T06:09:57.917302+00:00",
    "aiReviewedAt": "2026-07-22T06:09:57.917302+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_photosynthesis_service": {
    "id": "garden_isles_photosynthesis_service",
    "name": "Garden Isles Photosynthesis Service",
    "description": "The Garden Isles Photosynthesis Service implants your skin with chloroplasts harvested from ancient, sun-drenched isles. Basking in sunlight for four hours each day allows you to produce sustenance without needing food, though it leaves a faint, verdant glow that can make herbivores wary of you. Be cautious around weed killers and defoliant; these chemicals can strip your skin of its chloroplasts, halting photosynthesis. The Garden Isles Botanists ensure the longevity and safety of these implants with their meticulous craftsmanship.",
    "category": "services",
    "price": 240,
    "icon": "🌿",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Sustain without food",
      "Herbivore Charm Disadvantage"
    ],
    "vendor": "garden_isles",
    "shippedBy": "Sunlight Beam Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Photosynthetic Sustenance",
        "rules": "Activating this service allows you to forgo daily meals by spending four hours in direct sunlight. While active, you gain nourishment equivalent to a light meal each day and are considered fed until the next sunrise. This effect ends if you are exposed to weed killers or defoliant."
      },
      {
        "title": "Herbivore Charm Disadvantage",
        "rules": "While your skin retains its greenish hue, you suffer disadvantage on Charisma checks with herbivores and creatures that rely on plants. This effect persists until the next full night cycle after your skin loses its green tint."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers who wish to explore the flora-rich environments of Garden Isles.",
    "vendorReason": "The Garden Isles Botanists are renowned for their expertise in enhancing natural abilities and have long provided services that harmonize with nature's bounty.",
    "shippingDetail": "Delivered exclusively by Sunlight Beam Courier, the service ensures you bask in the appropriate sunlight for optimal implant performance.",
    "usage": {
      "activation": "Daily, by spending four hours in direct sunlight.",
      "duration": "24 hours after each session of sun exposure.",
      "endsWhen": "Exposure to weed killers or defoliant.",
      "charges": "Unlimited daily uses."
    },
    "priceReason": "Balanced at 1000 XP, this service offers a sustainable alternative to food without the need for constant upkeep or resource management.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T06:09:59.770086+00:00",
    "aiReviewedAt": "2026-07-22T06:09:59.770086+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_pollen_bomb": {
    "id": "garden_isles_pollen_bomb",
    "name": "Garden Isles Pollen Bomb",
    "description": "The glass sphere holds a deadly cocktail of Garden Isles pollen, hyper-allergenic and crafted from the very essence of their toxic flora. When shattered, it unleashes a cloud of choking spores that blanket all within its 15-foot radius, forcing creatures to make a Constitution saving throw or be blinded and choked for one minute. The area swiftly transforms into a jungle of rapidly growing flowers, turning it into difficult terrain that can trap foes in place.",
    "category": "consumables",
    "price": 240,
    "icon": "🌼",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Shatters: Cloud of Pollen",
      "Area Becomes Difficult Terrain"
    ],
    "vendor": "Garden Isles",
    "shippedBy": "Hollowed-Out Fruit Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cloud of Pollen",
        "rules": "When the Garden Isles Pollen Bomb is shattered, it creates a 15-foot radius cloud of hyper-allergenic pollen. Creatures within this area must make a Constitution saving throw (DC 14) or be blinded and choked for one minute. The save DC increases by 2 for each additional creature that begins its turn in the cloud."
      },
      {
        "title": "Difficult Terrain",
        "rules": "The area where the pollen bomb is shattered becomes difficult terrain, making movement at half speed (10 feet) and imposing disadvantage on Dexterity (Acrobatics) checks. This effect lasts for 1 minute or until a successful DC 14 Constitution saving throw is made."
      }
    ],
    "levelRequirementReason": "This item's effects are powerful enough to require at least first-level proficiency.",
    "vendorReason": "The Garden Isles have a thriving black market for their rare and dangerous botanical products, making the Pollen Bomb a prime commodity.",
    "shippingDetail": "Ships via special courier within one week of order. The delivery is timed to coincide with local festivals where the pollen's effects can be most appreciated.",
    "usage": {
      "activation": "Standard action to shatter and unleash its effects.",
      "duration": "Instantaneous, but effects last for 1 minute or until a creature successfully saves against them.",
      "endsWhen": "The effects end when all creatures within the area make their saving throws or after one minute has passed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced with a reduced price due to its limited utility and duration, yet still valuable for its unique effects.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T06:10:18.096409+00:00",
    "aiReviewedAt": "2026-07-22T06:10:18.096409+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_recipe_bee_pollen_balls": {
    "id": "garden_isles_recipe_bee_pollen_balls",
    "name": "Recipe: Garden Isles Bee Pollen Balls",
    "description": "Crafted in the lush gardens of Garden Isles, these bee pollen balls are a delicacy that enhances one's vitality and connection to nature. When consumed, they temporarily fortify your constitution against harm and forge an unspoken bond with the winged keepers of the garden. The balls are made using ancient recipes passed down by the Garden Isles Beekeepers, whose knowledge of flora and fauna is unparalleled. They are shipped via Pollen Cloud, a delivery method known for its fragrant and timely service.",
    "price": 240,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Beekeeper's Bond",
      "Floral Fortitude"
    ],
    "vendor": "garden_isles",
    "shippedBy": "Pollen Cloud",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Beekeeper's Bond",
        "rules": "For the duration of one hour, you gain the ability to communicate with bees. This effect provides a +1 bonus to saving throws against effects from creatures or objects originating in the garden environment."
      },
      {
        "title": "Floral Fortitude",
        "rules": "Consume this once-a-day food item and gain advantage on Constitution saving throws for 4 hours, bolstering your resilience to environmental stressors. This effect is exhausted after use."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough that even a novice adventurer can benefit from its effects.",
    "vendorReason": "The Garden Isles Beekeepers are renowned for their expertise in creating items that enhance one's connection to the natural world.",
    "shippingDetail": "Delivered by Pollen Cloud, known for its timely and fragrant service, ensuring your bee pollen balls arrive fresh from the garden.",
    "usage": {
      "activation": "Eaten as a consumable food item.",
      "duration": "One hour for communication with bees; 4 hours of advantage on Constitution saving throws.",
      "endsWhen": "The effects expire after their duration or if consumed again before the effect ends.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "This price reflects the unique ingredients and labor-intensive process involved in creating these bee pollen balls.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T06:10:23.872920+00:00",
    "aiReviewedAt": "2026-07-22T06:10:23.872920+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_recipe_sunflower_salad": {
    "id": "garden_isles_recipe_sunflower_salad",
    "name": "Recipe: Garden Isles Sunflower Salad",
    "description": "This parchment recipe originates from the lush Garden Isles and promises a salad that not only sustains you but also grants you photosynthesis. Consuming this delicacy allows you to harness sunlight for nourishment over the course of a day, eliminating the need for food. Your skin will turn faintly green, providing a charming but noticeable appearance, and granting you advantage on saving throws against poison due to your newfound affinity with nature’s bounty.",
    "price": 240,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Photosynthetic Nourishment",
      "Green Skin"
    ],
    "vendor": "garden_isles",
    "shippedBy": "Sunlight Beam",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Photosynthetic Nourishment",
        "rules": "Eating this salad allows you to gain nourishment from sunlight, eliminating the need for food for 24 hours. This effect is passive and lasts until the end of a long rest. You must be in an environment with natural light to benefit."
      },
      {
        "title": "Green Skin",
        "rules": "Your skin turns slightly green, providing you with disadvantage on Charisma checks and saving throws involving non-plants. This effect is visual only and does not alter your physical appearance otherwise."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers who wish to try it.",
    "vendorReason": "The Garden Isles Nutritionists are renowned for their unique and healthful concoctions, making this salad a staple in their offerings.",
    "shippingDetail": "Ships directly from the Garden Isles via Sunlight Beam, ensuring freshness through natural light.",
    "usage": {
      "activation": "Instantaneous consumption of the salad.",
      "duration": "24 hours until a long rest ends this effect.",
      "endsWhen": "A long rest or when the effects expire naturally.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The recipe is moderately priced given its unique and beneficial effects, which are accessible to all levels.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T06:10:12.075445+00:00",
    "aiReviewedAt": "2026-07-22T06:10:12.075445+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_sea_kelp_strainer": {
    "id": "garden_isles_sea_kelp_strainer",
    "name": "Garden Isles Sea Kelp Strainer",
    "description": "Crafted from the resilient kelp that thrives in the briny waters of the Garden Isles, this Sea Kelp Strainer is a masterwork of Isle Weavers' artistry. Its woven mesh filters water with precision, ensuring salads are crisp and free of excess moisture. A small sample of the regrowing kelp remains embedded within the strainer, symbolizing its self-sustaining nature, while a slick sheen makes it slippery when wet, requiring extra care during salad tossing.",
    "category": "equipment",
    "price": 240,
    "icon": "🥗",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Salad Strain Precision",
      "Regrowth and Slippery"
    ],
    "vendor": "garden_isles_shore",
    "shippedBy": "Kelp Knot Kit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Salad Strain Precision",
        "rules": "When used to strain water from a bowl of salad, the user gains +1 to Dexterity (Athletics) checks for tossing salads. This effect lasts until the end of your next turn."
      },
      {
        "title": "Regrowth and Slippery",
        "rules": "The strainer regrows slightly after each use, ensuring its filters remain effective without replacement. It becomes slippery when wet, imposing a disadvantage on Strength (Athletics) checks to maintain balance while using it."
      }
    ],
    "levelRequirementReason": "This strainer is simple enough for anyone to wield, requiring no special training.",
    "vendorReason": "Isle Weavers are renowned for their craftsmanship and the Garden Isles' unique kelp resources make them the perfect source for this tool.",
    "shippingDetail": "Ships directly from the Garden Isles, arriving with fresh kelp samples as a thank you gift.",
    "usage": {
      "activation": "As a bonus action at the start of your turn when tossing salad.",
      "duration": "Until the end of your next turn.",
      "endsWhen": "At the end of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The unique kelp and Isle Weavers' craftsmanship justify a higher price, making it a valuable addition to any kitchen.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T06:10:43.976421+00:00",
    "aiReviewedAt": "2026-07-22T06:10:43.976421+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_seaweed_salad_recipe": {
    "id": "garden_isles_seaweed_salad_recipe",
    "name": "Recipe: Garden Isles Seaweed Salad",
    "description": "Crafted from the nutrient-rich waters of the Garden Isles, this salad recipe yields a revitalizing meal. The crisp seaweed and fresh vegetables are tossed together in the traditional manner before consumption. After feasting on this dish, you gain the water breathing ability for an hour, allowing you to explore submerged realms unharmed. This recipe is beloved by the Isle Foragers who gather its ingredients from the ocean's depths.",
    "price": 240,
    "icon": "🥗",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Seaweed Salad Healing",
      "Water Breathing"
    ],
    "vendor": "garden_isles_shore",
    "shippedBy": "Salty Sheet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Seaweed Salad Healing",
        "rules": "As a bonus action, consume this recipe to heal 1d6 hit points. This effect can be used once per short or long rest."
      },
      {
        "title": "Water Breathing",
        "rules": "After consuming the salad, you gain the ability to breathe underwater for 1 hour. This effect ends when the duration expires or if you take damage from a source other than fire or acid."
      }
    ],
    "levelRequirementReason": "Beginners can easily learn this simple recipe and enjoy its benefits.",
    "vendorReason": "The Garden Isles Shore is known for its proximity to the ocean gardens where the seaweed salad ingredients are sourced.",
    "shippingDetail": "Delivered by Saltwater Courier, ensuring freshness within a day of purchase.",
    "usage": {
      "activation": "Bonus action to consume and activate the recipe",
      "duration": "Instantaneous healing effect; water breathing lasts for 1 hour",
      "endsWhen": "Duration expires or if you take damage from fire or acid",
      "charges": "Unlimited, but one use per rest"
    },
    "priceReason": "The unique ingredients and preparation method justify this moderate price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T06:10:38.571743+00:00",
    "aiReviewedAt": "2026-07-22T06:10:38.571743+00:00",
    "aiReviewVersion": 1
  },
  "garden_isles_sun_collector_cooker": {
    "id": "garden_isles_sun_collector_cooker",
    "name": "Garden Isles Sun-Collector Cooker",
    "description": "The Garden Isles Sun-Collector Cooker is a gleaming, solar-powered contraption crafted from polished metal and glass. This ingenious device harnesses concentrated sunlight to cook plant-based meals in mere minutes. It's a testament to the Garden Isles Solar Chefs' ingenuity, capable of producing delicious food with minimal effort and no fuel costs. However, it can also blind enemies when its reflective surface is aimed at them—use this ability only once per day.",
    "category": "equipment",
    "price": 240,
    "icon": "☀️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Sunscape Cuisine",
      "Blinding Reflection"
    ],
    "vendor": "garden_isles",
    "shippedBy": "Sunlight Beam Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sunscape Cuisine",
        "rules": "As an action, activate the cooker to prepare a plant-based meal in 10 minutes. This effect has no target or range and lasts until the meal is ready."
      },
      {
        "title": "Blinding Reflection",
        "rules": "Activate once per day as a bonus action when aimed at an enemy within line of sight, causing that creature to have disadvantage on its next attack roll. The effect ends immediately if you move more than 5 feet away from the target."
      }
    ],
    "levelRequirementReason": "This cooker is designed for beginners and amateur chefs.",
    "vendorReason": "The Garden Isles Solar Chefs are renowned for their innovative cooking tools.",
    "shippingDetail": "Ships via a concentrated solar beam, ensuring safe and swift delivery during daylight hours.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Sunscape Cuisine) / Until Ready (Blinding Reflection)",
      "endsWhen": "Ends when the meal is ready or if you move more than 5 feet away from the target for Blinding Reflection.",
      "charges": "Unlimited, as it does not consume charges."
    },
    "priceReason": "Balanced to reflect its utility and rarity in the market.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T06:10:32.320796+00:00",
    "aiReviewedAt": "2026-07-22T06:10:32.320796+00:00",
    "aiReviewVersion": 1
  },
  "garden_of_the_moon": {
    "id": "garden_of_the_moon",
    "name": "Garden of the Moon",
    "description": "The Garden of the Moon is a potted wonder, its soil rich with lunar magic. Under the full moon, it blossoms into a vision of ethereal dreams, granting you fleeting glimpses of past lives. Its leaves shimmer softly in the dark, warding off undead with an otherworldly glow. Sleep within its embrace and recall forgotten eras, but beware — only under the light of the full moon does its true power awaken.",
    "category": "premium",
    "price": 23000,
    "icon": "🌙",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Moonlit Dreams",
      "Undead Ward"
    ],
    "vendor": "fey_market",
    "shippedBy": "Moonlit Pot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Dreams",
        "rules": "Each time the full moon is visible, you may sleep in the garden. While sleeping within it, you gain a dream vision of your past lives for 1 hour. This effect cannot be used more than once per lunar cycle."
      },
      {
        "title": "Undead Ward",
        "rules": "The Garden of the Moon emits a soft glow that repels undead creatures within 5 feet of it, providing a +2 bonus to saving throws against charm and fear effects for any creature within its radius. This effect is active as long as you maintain control over the garden."
      }
    ],
    "levelRequirementReason": "This item requires no minimum level, as it can be used by anyone who appreciates its mystical beauty.",
    "vendorReason": "The Fey Market is known for its exotic and magical wares, and the Garden of the Moon fits perfectly within this unique collection.",
    "shippingDetail": "Ships via a private courier who ensures the garden receives just enough moonlight to sustain it during transit.",
    "usage": {
      "activation": "Using the garden requires you to sleep within its embrace, and it only activates under the full moon.",
      "duration": "The effect lasts for 1 hour each time activated.",
      "endsWhen": "The effect ends when the lunar cycle is complete or if the garden ceases to receive sufficient moonlight.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This price reflects its legendary rarity and the unique magical properties that make it a sought-after item in the market.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-22T06:11:10.952857+00:00",
    "aiReviewedAt": "2026-07-22T06:11:10.952857+00:00",
    "aiReviewVersion": 1
  },
  "gazer_minion_contract": {
    "id": "gazer_minion_contract",
    "name": "Gazer Minion Contract (30 Days)",
    "description": "The Gazer Minion Contract binds a tiny beholderkin to your side for 30 days, its optics gleaming with an unsettling mix of curiosity and mockery. This spectral companion grants you darkvision out to 60 feet and showers you with constant, albeit sarcastic commentary on your actions and decisions. While it can unleash eye rays with surprising effectiveness (DC 15), the Gazer often 'forgets' critical moments in battle, preferring to critique your tactics instead of aiding them.",
    "category": "services",
    "price": 1000,
    "icon": "👁️",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Darkvision and Sarcastic Commentary",
      "Eye Ray Assistance"
    ],
    "vendor": "minion_agency",
    "shippedBy": "Levitating Eyeball Courier Service",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Darkvision and Sarcastic Commentary",
        "rules": "The Gazer grants you darkvision out to 60 feet for the duration of the contract. Additionally, it provides constant commentary on your actions, which can be both helpful and hilariously off-target."
      },
      {
        "title": "Eye Ray Assistance",
        "rules": "The Gazer can use its eye rays (save DC 15). However, there is a 20% chance that during combat, the Gazer will fall asleep and ignore your commands. If it falls asleep, you must succeed on a DC 15 Wisdom saving throw to wake it."
      }
    ],
    "levelRequirementReason": "This contract requires at least 4th level to ensure the caster can effectively manage and utilize the Gazer's abilities.",
    "vendorReason": "Minion Agency specializes in managing unusual contracts like this, ensuring they are both effective and entertaining.",
    "shippingDetail": "The contract is delivered through the Levitating Eyeball Courier Service, which ensures swift delivery with a touch of whimsy.",
    "usage": {
      "activation": "Passive effect at the start of each day for 30 days.",
      "duration": "24 hours per day during the duration of the contract.",
      "endsWhen": "The contract expires after 30 days, or if you choose to terminate it early by paying an additional fee.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This price reflects the unique nature of the Gazer Minion Contract and its duration, offering a balance between cost and value for the player.",
    "priceOriginal": 14800,
    "priceReviewedAt": "2026-07-22T06:11:03.852744+00:00",
    "aiReviewedAt": "2026-07-22T06:11:03.852744+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_demon_pet_training_service": {
    "id": "gehenna_academy_demon_pet_training_service",
    "name": "Gehenna Academy Demon Pet Training Service",
    "description": "At Gehenna Academy, a Demon Pet Training Service grants you an imp as your familiar, perfect for mischief and minor telekinesis tasks. This imp is trained to deliver small items swiftly and with a playful twirl. However, its training lasts only one week, during which it might indulge in pranks, delighting or annoying you depending on the day. The imp's whims are legendary, but they come with a humorous demand for souls—just a joke between tutors and students.",
    "price": 1000,
    "icon": "😈",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Imp Familiar",
      "Weekly Prankster"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Hellfire Leash",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Imp Familiar",
        "rules": "Once per week, the imp can deliver small items telekinetically within 30 feet. It has a +2 bonus to Dexterity (Sleight of Hand) checks and can attempt to use Telekinesis once per day."
      },
      {
        "title": "Weekly Prankster",
        "rules": "During its training week, the imp might cause minor pranks for 1 hour. You must succeed on a DC 12 Wisdom saving throw or be distracted by its antics until it calms down."
      }
    ],
    "levelRequirementReason": "Appropriate for those with basic magical training and some experience.",
    "vendorReason": "Only Infernal Tutors at Gehenna Academy have the expertise to train such mischievous familiars.",
    "shippingDetail": "The imp is transported securely in a specially enchanted pouch, ensuring it remains calm during transit.",
    "usage": {
      "activation": "Passive effect once per week; pranks occur randomly.",
      "duration": "One training week (7 days) and occasional pranks thereafter.",
      "endsWhen": "Training ends upon completion or if the imp is dismissed.",
      "charges": "Unlimited uses until the training period."
    },
    "priceReason": "Balanced price for a rare service with limited duration and whimsical effects.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T16:35:36.829077+00:00",
    "aiReviewedAt": "2026-07-23T16:35:36.829077+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_devils_advocate_service": {
    "id": "gehenna_academy_devils_advocate_service",
    "name": "Gehenna Academy Devil's Advocate Service",
    "description": "The Gehenna Academy Devil's Advocate Service is a devil who challenges your plans with razor-sharp logic. Forged by the academy’s Debate Club, this service ensures you face one flaw in every plan you present to it, granting advantage on an Intelligence check of your choice each day. However, its fiery wit also makes it a tempestuous ally; when it helps, it imposes disadvantage on Charisma checks due to its relentless critique.",
    "category": "services",
    "price": 240,
    "icon": "👹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on one Intelligence check per day",
      "Disadvantage on Charisma checks when it aids"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Infernal Argument",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intellectual Insight",
        "rules": "You gain advantage on one Intelligence check of your choice each day. The effect lasts until the end of the next long rest."
      },
      {
        "title": "Fiery Critique",
        "rules": "When it assists you, you suffer a -2 penalty to Charisma checks due to its relentless and often scathing critique. This lasts for the duration of your interaction with the Devil's Advocate Service."
      }
    ],
    "levelRequirementReason": "A novice must be able to handle the challenge without overstepping their abilities.",
    "vendorReason": "Only students and faculty of Gehenna Academy have access to its Debate Club’s services, ensuring quality and authenticity.",
    "shippingDetail": "The service is delivered by a fiery courier who ensures the devil arrives on time for your next meeting or plan presentation.",
    "usage": {
      "activation": "Passive effect; the Devil's Advocate Service is always present during interactions.",
      "duration": "Until the end of the next long rest",
      "endsWhen": "The service ends upon completion of a long rest.",
      "charges": "Unlimited, as it recharges after a long rest."
    },
    "priceReason": "Balanced to provide a valuable but not overpowering benefit for beginners.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T06:10:57.462025+00:00",
    "aiReviewedAt": "2026-07-22T06:10:57.462025+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_devils_food_cake_recipe": {
    "id": "gehenna_academy_devils_food_cake_recipe",
    "name": "Recipe: Gehenna Academy Devil's Food Cake",
    "description": "This parchment bears an arcane recipe for Gehenna Academy’s Devil's Food Cake, a rich chocolate delight infused with infernal spices. The cake is said to be baked by fiendish bakers who infuse it with fiery magic. It's rumored that consuming the cake grants you a fearsome display of fire breath and enhances your Intimidation skills. Sinners beware—devils might covet this treat for their own greedy hands.",
    "price": 1000,
    "icon": "🍰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Bake with Fire",
      "Fiery Breath"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Fiery Frosting Folio",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Bake with Fire",
        "rules": "As an action, you can bake the cake. After a successful attempt (DC 15), you gain the ability to cast Flame Arrows once per day as a bonus action."
      },
      {
        "title": "Fiery Breath",
        "rules": "Once per short rest, after consuming the cake, you may exhale a cone of fire dealing 2d6 fire damage. This effect lasts until used or for 1 hour, whichever comes first."
      }
    ],
    "levelRequirementReason": "The infernal recipe requires some basic knowledge and control over magical flames.",
    "vendorReason": "As the creators of the cake, they can offer its secret to those who prove their worth.",
    "shippingDetail": "Shipped with a protective fire-retardant container to ensure safe delivery.",
    "usage": {
      "activation": "Bake and consume as described.",
      "duration": "One hour or until used, whichever is shorter.",
      "endsWhen": "Used or after one hour.",
      "charges": "Rechargeable once per day."
    },
    "priceReason": "The recipe's rare and dangerous nature justifies its price in experience points.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T06:11:13.296377+00:00",
    "aiReviewedAt": "2026-07-22T06:11:13.296377+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_infernal_bookkeeping": {
    "id": "gehenna_academy_infernal_bookkeeping",
    "name": "Gehenna Academy Infernal Bookkeeping",
    "description": "The Gehenna Academy Infernal Bookkeeping is a leather-bound tome, its pages inscribed with arcane symbols and foul sigils that glow faintly in the dark. This infernal ledger tracks one enemy's weaknesses and resistances, offering strategic insights to your party. Every night, you receive telepathic updates from the book's fiendish keeper, who subtly critiques your decisions, ensuring you never miss a critical detail. As if this weren't enough, the devil extracts 10% of your gold as 'processing fees,' rounding up each transaction. This infernal pact binds you for 7 days, after which the ledger returns to Gehenna's clutches.",
    "category": "services",
    "price": 1000,
    "icon": "📚",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Track one enemy’s weaknesses and resistances automatically",
      "Telepathic updates on the tracked target"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Hellish Messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Weakness Tracking",
        "rules": "At the start of your turn, you can use an action to activate this effect. It lasts for 7 days. The book tracks one enemy's weaknesses and resistances automatically, providing a +2 bonus to all Wisdom (Insight) checks made against that target."
      },
      {
        "title": "Telepathic Updates",
        "rules": "Every night during the duration of this effect, you receive a telepathic update from the book. These updates are passive-aggressive and can be ignored if desired. The updates provide strategic advice on how to exploit the tracked target's weaknesses."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to manage the infernal pact and handle the book’s demands.",
    "vendorReason": "Only sold by Gehenna Academy, as they are responsible for its creation and maintenance.",
    "shippingDetail": "Delivered via a Hellish Messenger, who ensures the book's arrival is both swift and secure.",
    "usage": {
      "activation": "Action to activate tracking and receive updates",
      "duration": "7 days",
      "endsWhen": "Ends when the duration expires or if you dismiss it as an action",
      "charges": "Unlimited, but each use costs 1d4 gold"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its infernal pact and strategic value.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T06:12:21.472425+00:00",
    "aiReviewedAt": "2026-07-22T06:12:21.472425+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_infernal_cassock": {
    "id": "gehenna_academy_infernal_cassock",
    "name": "Gehenna Academy Infernal Cassock",
    "description": "The Gehenna Academy Infernal Cassock, a dark crimson robe woven from the charred remains of unholy fires, is a garment of both protection and arcane prowess for those who dare to delve into the infernal arts. Its weave is said to have been crafted by the very hands of Hell's tailors, imbuing it with an eerie, almost living quality that smolders gently after use. Scholars who wear this robe can resist non-magical fire damage and enhance their Arcana skill checks with a touch of infernal lore.",
    "price": 1000,
    "icon": "👘",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Resists Non-Magical Fire",
      "Enhances Arcane Skill Checks"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Flame-Stitched Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Infernal Flame Resistance",
        "rules": "While wearing the Gehenna Academy Infernal Cassock, you gain resistance to non-magical fire damage for 1 hour. This effect ends if you are exposed to magical fire or if your Intelligence (Arcana) check is failed with a DC of 15."
      },
      {
        "title": "Infernal Lore Boost",
        "rules": "When you make an Arcana skill check related to infernal lore, you have advantage on the roll. This effect ends when you take a short or long rest."
      }
    ],
    "levelRequirementReason": "The robe's dark magic requires a novice scholar with some grounding in the arcane arts.",
    "vendorReason": "As a product of their own infernal workshops, Gehenna Academy is the only place to acquire this unique garment.",
    "shippingDetail": "The robe is carefully packed in fire-resistant packaging and delivered by courier with strict orders not to expose it to flames during transit.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "1 hour or until exposed to magical fire or after a short/long rest.",
      "endsWhen": "Exposure to magical fire or after taking a short/long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The robe's rarity and specialized craftsmanship justify its price, balancing its unique benefits with the limited supply.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T06:11:38.928155+00:00",
    "aiReviewedAt": "2026-07-22T06:11:38.928155+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_infernal_crock_pot": {
    "id": "gehenna_academy_infernal_crock_pot",
    "name": "Gehenna Academy Infernal Crock Pot",
    "description": "The Gehenna Academy Infernal Crock Pot is a formidable culinary tool forged in hell's forges. Crafted from infernal bronze and imbued with fiendish magic, this pot can slow-cook meals with unyielding ferocity. Its flames are so potent that they not only enhance the flavor but also grant temporary hit points to those who partake. Rumor has it that the pot demands a soul as payment for its services, though it rarely does when ignored.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Soul-Eating Demands",
      "Heated Delicacies"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Hellish Fax",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul-Eating Demands",
        "rules": "Once per day, the pot demands a soul as payment. If you pretend not to hear it, this effect ends immediately without any consequences."
      },
      {
        "title": "Heated Delicacies",
        "rules": "This magic pot can be activated as an action and begins slowly cooking food with hellfire. The food is ready after 4 hours and grants the user +1d6 temporary hit points upon consumption."
      }
    ],
    "levelRequirementReason": "The infernal magic in this pot is potent enough to require at least a first-level spellcaster for safe handling.",
    "vendorReason": "Gehenna Academy, renowned for their demonic craftsmanship, naturally sells such formidable tools.",
    "shippingDetail": "The shipment is sent under cover of darkness via the Hellish Fax, ensuring secrecy and safety.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (ready after 4 hours)",
      "endsWhen": "Exhausted upon use; recharges at dawn on the next day",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to be a rare but not overpowered item, reflecting its infernal origin and potent effects.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-22T06:11:26.677960+00:00",
    "aiReviewedAt": "2026-07-22T06:11:26.677960+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_infernal_stirring_rod": {
    "id": "gehenna_academy_infernal_stirring_rod",
    "name": "Gehenna Academy Infernal Stirring Rod",
    "description": "This infernal stirring rod, forged in Gehenna's forges, heats itself as you stir, ensuring your devilish baked goods rise to the occasion. The rod exudes a hellish glow and is adorned with runes that whisper of ancient magic. Its core, made from volcanic obsidian, crackles with fire, adding an extra layer of heat when stirring infernal ingredients. With this tool, you can add hellfire to your creations and gain advantage on baking rolls involving infernal recipes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Heats automatically for infernal baking",
      "Adds hellish spice (extra fire effect)"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Hell Rod Haul",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Heats Automatically",
        "rules": "As a bonus action, the rod heats up, providing advantage on checks to stir or mix infernal ingredients. This effect lasts for an hour and requires no further action."
      },
      {
        "title": "Hellish Spice",
        "rules": "When used in a recipe involving fire or hellish elements, the rod adds an extra fire damage equal to 1d6 + your proficiency bonus. This effect occurs once per day until expended."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively handle the infernal energies of Gehenna's forges.",
    "vendorReason": "The Academy Forgers have mastered the art of crafting tools that harness the raw power of hell, and this rod is a testament to their expertise.",
    "shippingDetail": "Ships via special couriers who deliver directly from Gehenna, ensuring swift arrival.",
    "usage": {
      "activation": "Bonus action to activate the heat; daily use for adding hellish spice",
      "duration": "Heats for an hour (bonus action), once per day for hellish spice effect",
      "endsWhen": "Exhausted after one use or when mishandled, causing it to scorch hands",
      "charges": "Unlimited uses; daily limit of 1 for hellish spice"
    },
    "priceReason": "Balanced at 1000 XP as a rare item that offers unique infernal capabilities without overpowered effects.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T06:11:55.868404+00:00",
    "aiReviewedAt": "2026-07-22T06:11:55.868404+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_liturgy": {
    "id": "gehenna_academy_liturgy",
    "name": "Gehenna Academy Liturgy (Infernal)",
    "description": "The Gehenna Academy Liturgy (Infernal) is a leather-bound tome, its pages scorched and sealed with infernal sigils. Crafted by the unholy scholars of Gehenna, it grants access to minor rituals for summoning impish entities or hulking hell hounds. Each invocation compels these creatures to serve your bidding within the academy's walls for an hour, ensuring they do not harm their own kin. With each use, you feel a dark pact tightening around you, as if the infernal knowledge within seeks to claim more than just your spells.",
    "price": 1000,
    "icon": "🔥",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Summon Imp or Hell Hound",
      "Controlled Servitude"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Bound in skin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Imp or Hell Hound",
        "rules": "As an action, you can invoke a single imp (CR 1/4) or hell hound (CR 1/2). The summoned creature must obey your commands for one hour. If the creature is dismissed before this time, it returns to Gehenna Academy, and you must wait until dawn of the next day to use the liturgy again."
      },
      {
        "title": "Controlled Servitude",
        "rules": "The summoned creatures are bound by a contract that prevents them from causing self-destructive actions. However, they will not harm any allied parties within Gehenna Academy, and you must maintain control over their actions to avoid breaking the pact."
      }
    ],
    "levelRequirementReason": "This liturgy is designed for beginners who wish to experiment with infernal summoning but are not yet capable of handling more powerful entities.",
    "vendorReason": "Gehenna Academy's vault houses the most arcane knowledge, including this rare tome that teaches students the basics of infernal summoning.",
    "shippingDetail": "The liturgy is carefully packed and shipped by courier to ensure it arrives intact. The binding makes the package heavy and cumbersome, requiring a strong mount or two humans for transport.",
    "usage": {
      "activation": "Action",
      "duration": "One hour per summoning",
      "endsWhen": "The creature is dismissed before the hour or if you lose control over it.",
      "charges": "1 use per day"
    },
    "priceReason": "This liturgy provides a rare and valuable introduction to infernal magic, balanced at a price that reflects its utility and rarity.",
    "priceOriginal": 26000,
    "priceReviewedAt": "2026-07-22T06:12:10.857869+00:00",
    "aiReviewedAt": "2026-07-22T06:12:10.857869+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_recipe_deviled_eggs": {
    "id": "gehenna_academy_recipe_deviled_eggs",
    "name": "Recipe: Gehenna Academy Deviled Eggs",
    "description": "This is a recipe card for Gehenna Academy's infamous Deviled Eggs. The eggs are encased in a spicy, hellish shell that crackles with malevolent energy. A single bite releases a noxious cloud from your mouth, giving you advantage on Intimidation checks and disadvantage on Persuasion checks. The next morning, you lay an egg—edible but disturbingly reminiscent of the recipe's origin. This culinary creation is crafted by Gehenna Academy’s most feared chefs, known for their unorthodox methods.",
    "price": 240,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Hellish Breath",
      "Morning Egg"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Hellish Fax",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hellish Breath",
        "rules": "When you consume the deviled eggs, you gain resistance to poison damage until the start of your next turn. You also have advantage on Intimidation checks and disadvantage on Persuasion checks for 1 hour."
      },
      {
        "title": "Morning Egg",
        "rules": "The recipe grants you the ability to lay an egg each morning after consuming it, which is unfertilized and edible but has a disturbing appearance. This effect lasts until you consume another deviled egg or until midnight."
      }
    ],
    "levelRequirementReason": "This simple recipe requires no specific level, as it focuses on flavor rather than combat prowess.",
    "vendorReason": "The academy is known for its unique and often unconventional recipes.",
    "shippingDetail": "Delivery via the Hellish Fax is instant, but the smell lingers in your immediate area until you consume another recipe or until midnight.",
    "usage": {
      "activation": "Eating one deviled egg at the start of each day activates this effect.",
      "duration": "1 hour for Hellish Breath and lasts until morning for Morning Egg.",
      "endsWhen": "The effects end when you eat another recipe or until midnight, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe is moderately priced due to the unique and disturbing nature of its effects, which provide flavorful but not combat-enhancing benefits.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T06:12:04.289937+00:00",
    "aiReviewedAt": "2026-07-22T06:12:04.289937+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_wario_contract": {
    "id": "gehenna_academy_wario_contract",
    "name": "Gehenna Academy Wario Contract",
    "description": "This tattered contract bears Wario's signature in a style that looks like it was hastily scrawled with a quill dipped in ink. For a small fee, you sell your soul to Gehenna Academy, but beware—Wario takes an exorbitant 90% commission as his 'fee.' The devil who collects the contract is momentarily confused by Wario's involvement, granting advantage on Deception checks against fiends. However, lawful beings find the contract unsettling and react with disadvantage when dealing with you.",
    "category": "services",
    "price": 240,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Soul Debt",
      "Deceptive Advantage"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Hellish Fax",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul Debt",
        "rules": "When this contract is activated by signing it, you gain 100 gp. The devil immediately collects the remaining 900 gp as 'Wario's fee.' This effect ends when the contract is destroyed or when your soul is claimed by Gehenna Academy."
      },
      {
        "title": "Deceptive Advantage",
        "rules": "For one hour after signing, you have advantage on Deception checks against fiends. This effect ends when the contract is destroyed or when you fail a Wisdom saving throw with a DC of 13 due to a lawful being's reaction."
      }
    ],
    "levelRequirementReason": "Even for low-level characters, signing this contract can have long-lasting and troubling consequences.",
    "vendorReason": "Gehenna Academy operates numerous subcontractors to ensure the smooth operation of their operations.",
    "shippingDetail": "The contract is sent via Hellish Fax, which ensures swift delivery and proper handling by fiends.",
    "usage": {
      "activation": "Action",
      "duration": "One hour or until destroyed",
      "endsWhen": "Contract destroyed or when you fail a Wisdom saving throw with a DC of 13 due to a lawful being's reaction",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the risk and potential long-term consequences of signing such an unconventional contract.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T06:12:10.963375+00:00",
    "aiReviewedAt": "2026-07-22T06:12:10.963375+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_academy_wario_devil_horns": {
    "id": "gehenna_academy_wario_devil_horns",
    "name": "Gehenna Academy Wario Devil Horns",
    "description": "The Gehenna Academy Wario Devil Horns are a set of misshapen, plastic horns that make you appear both devilish and absurdly ridiculous. When worn in combat or social settings, these horns grant advantage on Intimidation checks against fiends but also guarantee disadvantage when dealing with celestials due to their inherent comedic value. The horns, though crooked, are a testament to the mischievous craftsmanship of Gehenna Academy's Wario Costume Shop.",
    "category": "equipment",
    "price": 45,
    "icon": "👹",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Advantage on Intimidation Checks vs Fiends",
      "Disadvantage on Charisma Checks with Celestials"
    ],
    "vendor": "gehenna_academy",
    "shippedBy": "Hellish Fax",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Intimidation Checks vs Fiends",
        "rules": "When worn, the wearer gains advantage on any Intimidation check made against fiendish creatures. This effect is passive and applies continuously while wearing the horns."
      },
      {
        "title": "Disadvantage on Charisma Checks with Celestials",
        "rules": "The wearer suffers a disadvantage on all Charisma-based checks when interacting with celestials, as they find the appearance of the horns highly amusing but also somewhat unsettling. This effect is passive and applies continuously while wearing the horns."
      }
    ],
    "levelRequirementReason": "These horns are designed to be worn by students learning social cues in preparation for their roles within Gehenna Academy.",
    "vendorReason": "Gehenna Academy's Wario Costume Shop is known for its eccentric and practical creations, perfect for students navigating the complex social dynamics of the academy.",
    "shippingDetail": "Ships via Hellish Fax with a delivery delay of one week due to the nature of the item.",
    "usage": {
      "activation": "Passive effect while wearing the horns",
      "duration": "Instantaneous for passive effects; removed when removing the horns",
      "endsWhen": "Effect ends upon removal of the horns",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique design, craftsmanship, and the practical utility in social and combat scenarios within Gehenna Academy.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T06:12:51.811009+00:00",
    "aiReviewedAt": "2026-07-22T06:12:51.811009+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_archdevil_conquest_plan": {
    "id": "gehenna_archdevil_conquest_plan",
    "name": "Gehenna Archdevil Conquest Plan (Strategic)",
    "description": "The Gehenna Archdevil Conquest Plan is a leather-bound tome, its pages scorched and charred from infernal forges. This strategic blueprint guarantees military and legal superiority in any minor plane of your choosing, provided you can muster the resources to execute it. The plan requires a massive troop commitment and an investment in gold, as each tactical maneuver has been meticulously calculated over a decade by Gehenna Academy's finest strategists.",
    "price": 270000,
    "icon": "🗺️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Guaranteed Military Superiority",
      "Legal Advantage"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Bound Scrolls",
    "levelRequirement": 19,
    "factionBonus": {
      "conquest": 100
    },
    "effectDetails": [
      {
        "title": "Guaranteed Military Superiority",
        "rules": "When you activate the plan, it grants you a +2 bonus to all attack and damage rolls against targets within your chosen plane. This effect lasts for 1 hour per day of preparation time invested into the plan."
      },
      {
        "title": "Legal Advantage",
        "rules": "Upon activation, you gain the ability to influence minor legal entities in your chosen plane to bend their laws in your favor for a period of 24 hours. This can be used once per major campaign or until exhausted by overuse."
      }
    ],
    "levelRequirementReason": "Requires significant strategic and tactical knowledge, as well as the resources to implement the plan.",
    "vendorReason": "Gehenna Vault is known for its extensive collection of infernal artifacts and plans, making it a logical choice for such an item.",
    "shippingDetail": "The tome must be delivered by Bound Scrolls to ensure the plan's secrets remain secure and intact during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation, with effects lasting for the specified duration.",
      "endsWhen": "Effect ends when its duration expires or when the user chooses to end it early.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the item's rarity, strategic value, and the resources required for its creation.",
    "priceOriginal": 950000,
    "priceReviewedAt": "2026-07-22T06:12:59.144159+00:00",
    "aiReviewedAt": "2026-07-22T06:12:59.144159+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_archdevil_treaty": {
    "id": "gehenna_archdevil_treaty",
    "name": "Gehenna Archdevil Treaty (Minor Concession)",
    "description": "The Gehenna Archdevil Treaty (Minor Concession) is a charred parchment sealed with blood, a non-aggression pact between lesser archdevils and mortal realms. For five years, it ensures your safety from their interference; however, the price is steep: an annual tribute of either 50,000 gp or the sacrifice of 10,000 souls to Gehenna's coffers. This treaty was crafted by Gehenna Academy through dark rituals and arcane contracts.",
    "price": 270000,
    "icon": "📜",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Non-Aggression Pact",
      "Annual Tribute"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Sealed Scroll of Fire",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Non-Aggression Pact",
        "rules": "For five years, the lesser archdevils agree not to interfere with your plans or send agents. This effect is instantaneous and lasts for 5 years unless a significant breach of peace occurs."
      },
      {
        "title": "Annual Tribute",
        "rules": "Every year, you must pay either 50,000 gp in gold pieces or offer 10,000 souls to Gehenna. Failure to comply results in the treaty's immediate nullification and potential conflict with archdevils."
      }
    ],
    "levelRequirementReason": "Only a high-level character can negotiate such a powerful and dangerous pact.",
    "vendorReason": "The Gehenna Vault handles treaties and pacts with infernal entities, making it the only vendor for this item.",
    "shippingDetail": "Ships via a fiery scroll courier that delivers within one week but must be handled carefully to avoid destruction.",
    "usage": {
      "activation": "Instantaneous at the time of signing; lasts for five years unless nullified by a breach or expiration.",
      "duration": "Lasts for five years from the date of signing, unless nullified earlier.",
      "endsWhen": "Nullified if a significant breach occurs or expires after five years.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price is set at 1000 XP to reflect the risk and power of the pact, ensuring it's not overpowered.",
    "priceOriginal": 950000,
    "priceReviewedAt": "2026-07-22T06:12:44.306016+00:00",
    "aiReviewedAt": "2026-07-22T06:12:44.306016+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_bargaining_amulet": {
    "id": "gehenna_bargaining_amulet",
    "name": "Gehenna Bargaining Amulet",
    "description": "The Gehenna Bargaining Amulet is a molten iron trinket imbued with the fiery essence of Gehenna's forges, its surface etched with arcane runes that shimmer with infernal light. This amulet compels fiends to adhere rigidly to any bargain made, ensuring that not a single clause can be bent or broken under the watchful gaze of infernal law. It grants you advantage on all Charisma (Persuasion) checks and allows you to reroll failed negotiation attempts once per day. Crafted by Gehenna Academy's most feared blacksmiths, it is an artifact of unparalleled power, forged in the very heart of hell itself.",
    "price": 23000,
    "icon": "⚖️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Infernal Enforce Bargain",
      "Advantage on Persuasion Checks"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Sealed Pact",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Infernal Enforce Bargain",
        "rules": "When you make a bargain with a fiend, the terms are enforced by infernal law. The fiend cannot alter or break any part of the contract once you activate this effect. This benefit lasts for 1 hour after activation."
      },
      {
        "title": "Advantage on Persuasion Checks",
        "rules": "You gain advantage on all Charisma (Persuasion) checks when attempting to negotiate with fiends or devils, and can reroll failed attempts once per day. This effect is active until you make another successful check."
      }
    ],
    "levelRequirementReason": "This amulet's power requires a deep understanding of infernal affairs and the ability to withstand its fiery essence.",
    "vendorReason": "The Gehenna Vault is the only repository for items forged in the fires of Gehenna, ensuring that such powerful artifacts remain in the hands of those who can wield them responsibly.",
    "shippingDetail": "Delivered by a courier from the depths of Gehenna itself, this amulet arrives encased in molten lead to prevent any tampering during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until another successful negotiation check is made",
      "endsWhen": "You make another successful Charisma (Persuasion) check with a fiend or devil, or the effect ends after one hour",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's price reflects its unparalleled power in negotiating with infernal entities and ensuring that bargains are enforced.",
    "priceOriginal": 130000,
    "priceReviewedAt": "2026-07-22T06:13:09.219343+00:00",
    "aiReviewedAt": "2026-07-22T06:13:09.219343+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_devil_contract_template": {
    "id": "gehenna_devil_contract_template",
    "name": "Gehenna Devil Contract Template (Flawless)",
    "description": "The Gehenna Devil Contract Template (Flawless) is a masterwork parchment crafted from the ink of ancient devils and bound by the sigils of Gehenna Academy's elite. This template ensures any contract written with it becomes eternally binding on the devil side, and devils revere its power so much they avoid using it against you. The academy's finest scribes create this template, which is as potent as it is rare.",
    "price": 270000,
    "icon": "🖋️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Eternally Binding",
      "Devil Revere"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Bound in Silver Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eternally Binding",
        "rules": "Any contract written using the template becomes eternally binding on the devil side. The contract cannot be dissolved or broken, and the devil must fulfill it to the letter."
      },
      {
        "title": "Devil Revere",
        "rules": "When a devil sees this template, they must make an Intelligence saving throw (DC 18). On a failed save, they avoid using the template against you for up to one week. This effect is cumulative and can stack."
      }
    ],
    "levelRequirementReason": "The complexity of the template requires a minimum level of understanding in arcane magic.",
    "vendorReason": "Only Gehenna Vault, with its deep connections to Gehenna Academy, can stock such a rare and powerful item.",
    "shippingDetail": "The parchment is shipped under heavy guard due to its immense value and the risk of theft by rival factions.",
    "usage": {
      "activation": "Instantaneous activation when writing a contract.",
      "duration": "Permanent until fulfilled or broken.",
      "endsWhen": "Fulfilled, broken, or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This template is priced at 1000 XP, reflecting its rarity and the immense power it confers.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-22T06:13:26.073555+00:00",
    "aiReviewedAt": "2026-07-22T06:13:26.073555+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_devil_escort": {
    "id": "gehenna_devil_escort",
    "name": "Gehenna Devil Escort (Escape Route)",
    "description": "The Gehenna Devil Escort is a spectral guide crafted from the very essence of Hell’s infernal forces. It can navigate the treacherous layers of Hell, finding paths that even the damned would shy away from. This escort knows every hidden passage and deadly pitfall, ensuring safe passage for its charges through one hostile extra-planar region. Made by Gehenna Academy, this guide is a walking testament to infernal cunning and resilience.",
    "price": 23000,
    "icon": "🧭",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Guided Safe Passage",
      "Infernal Knowledge"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Infernal Guide Courier",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Guided Safe Passage",
        "rules": "The escort provides a +2 bonus to all saving throws made to resist hostile effects in the targeted extra-planar region. The duration lasts for one day, and the effect can be used once per long rest."
      },
      {
        "title": "Infernal Knowledge",
        "rules": "While under the escort’s guidance, any creature within 30 feet has advantage on checks to avoid hazards and traps. This ability is active until the end of the escort's duration or if the escort is destroyed."
      }
    ],
    "levelRequirementReason": "This item requires a high-level character to properly utilize its infernal knowledge without overstepping balance concerns.",
    "vendorReason": "The Gehenna Vault maintains a stock of rare and powerful items, including those from the Gehenna Academy.",
    "shippingDetail": "Ships via infernal courier with a guaranteed safe delivery within one week.",
    "usage": {
      "activation": "A bonus action to activate the escort’s guidance and duration of one day.",
      "duration": "24 hours from activation, or until destroyed.",
      "endsWhen": "The end of its daily duration, or if it is destroyed by an enemy spell or attack.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "This price reflects the item’s rarity and limited utility without being overly expensive for a high-level character to afford.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T06:13:06.778131+00:00",
    "aiReviewedAt": "2026-07-22T06:13:06.778131+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_devil_escort_to_hell": {
    "id": "gehenna_devil_escort_to_hell",
    "name": "Gehenna Devil Escort (To Hell)",
    "description": "This ornate, brass key glows faintly with a demonic red light when activated. Crafted by Gehenna Academy's most feared blacksmiths from iron drawn from the very fires of Hell itself, it opens the gates to the bureaucratic inferno of the Hells for its bearer. The key ensures safe passage and diplomatic reception for 72 hours, but the devil who accompanies you demands a sworn oath in return, binding your soul to theirs until the debt is repaid.",
    "price": 23000,
    "icon": "🧭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Guarantees safe passage and diplomatic reception",
      "Sworn oath demanded upon return"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Infernal Summons",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Safe Passage and Diplomatic Reception",
        "rules": "When activated, this key opens a pathway to the bureaucratic inferno of Hell. The bearer is guaranteed safe travel for 72 hours and receives respectful treatment from Hell's inhabitants. The effect ends when the duration expires or if the key is destroyed."
      },
      {
        "title": "Sworn Oath",
        "rules": "Upon returning, the devil who accompanied you demands a sworn oath, binding your soul to theirs until the debt is repaid. This can be fulfilled by completing a series of tasks set by the devil or by delivering a significant item."
      }
    ],
    "levelRequirementReason": "Only those with the experience and power to navigate Hell's dangers should have access to this key.",
    "vendorReason": "The Gehenna Vault maintains contracts with Gehenna Academy, ensuring that only those of proven strength can acquire such dangerous items.",
    "shippingDetail": "Delivered by a Hellhound courier; the recipient must perform a minor ritual to activate the key upon arrival.",
    "usage": {
      "activation": "Object interaction, requires both hands",
      "duration": "72 hours from activation until expiration or destruction",
      "endsWhen": "Duration expires or key is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The key's rarity and the risks involved in acquiring it justify its relatively low price compared to other legendary items.",
    "priceOriginal": 550000,
    "priceReviewedAt": "2026-07-22T06:13:27.816132+00:00",
    "aiReviewedAt": "2026-07-22T06:13:27.816132+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_devil_hire_bodyguard": {
    "id": "gehenna_devil_hire_bodyguard",
    "name": "Gehenna Devil Bodyguard Hire (1 Month)",
    "description": "For a month, you employ a Gehenna devil bodyguard, a creature of fiery infernal heritage, who stands at your side ready to enforce your will or repel threats. This devil, a paragon of combat and malice, is bound by an ancient pact that grants it the duty to protect you and follow your commands precisely for 30 days. In return, you must offer one monthly tithe consisting of ten lesser souls—a grim reminder of the devil's power and your obligation to its service.",
    "price": 23000,
    "icon": "😈",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Devil Bodyguard",
      "Monthly Tithe"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Contract Escort",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Devil Bodyguard",
        "rules": "For one month, you have a CR 8-10 devil bodyguard who acts as your personal protector. The devil follows your orders to the letter within reason and can only be dismissed by you or through an act of treachery that nullifies the pact."
      },
      {
        "title": "Monthly Tithe",
        "rules": "Each month, you must provide a tithe consisting of ten lesser souls to maintain the pact with your Gehenna devil bodyguard. Failure to do so within 10 days of the end of each month results in the immediate dismissal and potential wrath of the devil."
      }
    ],
    "levelRequirementReason": "The spellcasting and combat skills required to command such a powerful entity necessitate at least 5th level.",
    "vendorReason": "The Gehenna Vault, an institution of infernal knowledge, naturally handles contracts with Gehenna devils.",
    "shippingDetail": "The devil bodyguard is delivered and bound at your location by Contract Escort within a week of purchase.",
    "usage": {
      "activation": "Instantaneous upon purchase; the devil's presence and protection are immediate.",
      "duration": "One month from activation until dismissed or tithe is not provided.",
      "endsWhen": "The monthly tithe is not provided, the devil dismisses itself, or you release it.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect a month of infernal protection and the inherent risk involved.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-22T06:13:44.268021+00:00",
    "aiReviewedAt": "2026-07-22T06:13:44.268021+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_diplomatic_immunity": {
    "id": "gehenna_diplomatic_immunity",
    "name": "Gehenna Academy Immunity Token",
    "description": "The Gehenna Academy Immunity Token is a delicate parchment, its edges embossed with arcane sigils and seals of Gehenna's highest clerics. This writ ensures safe passage through all Gehenna outposts for one year, rendering you immune to capture or interrogation by any Gehenna-aligned entity during that time. It also grants +2 to all dealings with minor devils, allowing you to negotiate more favorably in their courts and markets. Crafted by the academy itself, this token is a symbol of its prestige and power.",
    "price": 4900,
    "icon": "📜",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Immunity to Capture",
      "Negotiation Boost"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Formal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Capture",
        "rules": "While holding this token, you are immune to any attempt by Gehenna-aligned entities to capture or interrogate you. This immunity lasts until the end of your next long rest."
      },
      {
        "title": "Negotiation Boost",
        "rules": "When interacting with minor devils, such as barghests or impish creatures, you gain a +2 bonus on all Charisma (Deception), Charisma (Intimidation), and Dexterity (Stealth) checks. This effect is permanent while the token is held."
      }
    ],
    "levelRequirementReason": "The token's power lies in its ability to secure safe passage through Gehenna's treacherous outposts, which requires a basic understanding of its significance and use.",
    "vendorReason": "As one of the official repositories for Gehenna Academy, the vault is entrusted with issuing such important documents.",
    "shippingDetail": "The token must be delivered via a formal courier to ensure its authenticity and proper handling.",
    "usage": {
      "activation": "Holding the token grants its effects immediately.",
      "duration": "Permanent while held, ends at next long rest.",
      "endsWhen": "Upon exhaustion or upon completion of a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The token's price reflects the prestigious nature of Gehenna Academy and its ability to secure safe passage through Gehenna outposts.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T06:13:52.182388+00:00",
    "aiReviewedAt": "2026-07-22T06:13:52.182388+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_hellish_territory_claim": {
    "id": "gehenna_hellish_territory_claim",
    "name": "Gehenna Infernal Territory Claim (Minor Layer)",
    "description": "This fiery deed is a parchment of dark ink and infernal sigils, granting ownership over an isolated pocket of Gehenna's Lower Planes. It is said to be forged in the heart of the pit itself, its edges still scorched from the forge that created it. The claim is protected by basic infernal treaties and can be used as a base or prison for captives, though the territory's harsh environment requires constant care to maintain.",
    "price": 270000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Establish a private base/prison in Gehenna",
      "Outpost receives basic infernal protection"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Pact of Blood",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Claimed Territory",
        "rules": "The deed allows the holder to establish a base or prison within its claimed area. The outpost is protected by minor infernal wards, requiring a DC 15 Wisdom (Perception) check for creatures without resistance to fire to notice it."
      },
      {
        "title": "Infernal Protection",
        "rules": "The outpost gains the benefits of a Lesser Ward spell (DC 14), providing protection from fire and minor magical attacks. This effect lasts until the outpost is destroyed or abandoned."
      }
    ],
    "levelRequirementReason": "Only those with significant power can manage such a claim in Gehenna's treacherous environment.",
    "vendorReason": "The Gehenna Vault has extensive dealings with the Lower Planes and can procure such deeds from their forges.",
    "shippingDetail": "Ships via a blood-bound courier, ensuring secrecy and safe delivery within one month.",
    "usage": {
      "activation": "Instantaneous upon claiming the territory",
      "duration": "Permanent until abandoned or destroyed",
      "endsWhen": "Outpost is abandoned or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a minor layer of a godly item, providing significant but not game-breaking benefits.",
    "priceOriginal": 1500000,
    "priceReviewedAt": "2026-07-22T06:13:40.212903+00:00",
    "aiReviewedAt": "2026-07-22T06:13:40.212903+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_infernal_colonization_rights": {
    "id": "gehenna_infernal_colonization_rights",
    "name": "Gehenna Infernal Colonization Rights (Outpost)",
    "description": "The Gehenna Infernal Colonization Rights (Outpost) are a set of official, albeit temporary, documents that grant dominion over a small uninhabited region in a minor plane. These rights come with the promise of protection from interdimensional threats by infernal laws and an exclusive license to establish a fortified outpost. The outpost is under the watchful eye of Gehenna Academy, whose mark adorns these rights, ensuring they are both recognized and defended.",
    "price": 280000,
    "icon": "🏛️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Establish a small, legally recognized outpost in a low-stakes extra-planar region",
      "Outpost is protected by minor infernal laws"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Archdevil Courier",
    "levelRequirement": 19,
    "factionBonus": {
      "dominion": 100
    },
    "effectDetails": [
      {
        "title": "Outpost Establishment",
        "rules": "Upon activation, the holder can establish an outpost in a specified, unclaimed area of a minor plane. The outpost requires a week to build and is automatically fortified with basic defenses. Once established, it cannot be removed or relocated without the consent of Gehenna Academy."
      },
      {
        "title": "Infernal Protection",
        "rules": "The outpost gains +2 AC against all attacks from extraplanar entities for one month after its establishment. This protection can only be triggered once per month and lasts until the outpost is destroyed or abandoned."
      }
    ],
    "levelRequirementReason": "This item requires a high level of expertise to navigate the complexities of interdimensional politics and ensure compliance with infernal laws.",
    "vendorReason": "The Gehenna Vault, an academy known for its extensive knowledge in interdimensional law, is the only place where these rights are sold.",
    "shippingDetail": "Ships via Archdevil Courier with a two-week delivery time.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous (one-time use)",
      "endsWhen": "Outpost is destroyed or abandoned",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the significant risk and legal complexity involved in obtaining these rights, as well as the ongoing protection they provide.",
    "priceOriginal": 1100000,
    "priceReviewedAt": "2026-07-22T06:14:25.175992+00:00",
    "aiReviewedAt": "2026-07-22T06:14:25.175992+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_infernal_lease": {
    "id": "gehenna_infernal_lease",
    "name": "Gehenna Infernal Lease (Temporary Possession)",
    "description": "Crafted by Gehenna Academy, this infernal lease binds a lesser devil to temporarily possess a willing target for one hour. The possessed creature gains access to demonic abilities, including heightened combat prowess and resistance to certain spells. Upon the lease's conclusion or upon the devil's departure, the target must offer a captured soul as payment. This binding is delivered via Binding Contract, ensuring safe handling and secure possession.",
    "price": 45,
    "icon": "⛓️",
    "stock": 3,
    "range": "epic",
    "effects": [
      "Demon Possession",
      "Soul Payment Required"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Binding Contract",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Demon Possession",
        "rules": "A lesser devil temporarily possesses a willing or incapacitated target for one hour. The target gains the following abilities: +2 to attack rolls and damage rolls, advantage on saving throws against charm and fear effects, and resistance to fire damage. The effect ends upon the expiration of the lease or if the devil is dismissed."
      },
      {
        "title": "Soul Payment",
        "rules": "Upon departure, the target must provide one captured soul as payment for the infernal lease. Failure to comply results in a curse that further weakens the target's will and resilience."
      }
    ],
    "levelRequirementReason": "This ritual requires significant arcane knowledge and power to safely bind and control lesser devils.",
    "vendorReason": "Only Gehenna Vault, known for its dark contracts and rituals, can offer such infernal bargains.",
    "shippingDetail": "The lease is delivered via a Binding Contract, ensuring secure transportation of the infernal bond.",
    "usage": {
      "activation": "A ritual performed by a spellcaster with at least 10 levels in an Arcane or Infernal tradition.",
      "duration": "One hour per use",
      "endsWhen": "Expiration of duration or dismissal by the caster",
      "charges": "Unlimited, as long as the caster can maintain concentration"
    },
    "priceReason": "The lease's price reflects both the arcane energy and the risk involved in summoning and controlling lesser devils.",
    "priceOriginal": 110000,
    "priceReviewedAt": "2026-07-22T06:14:21.213469+00:00",
    "aiReviewedAt": "2026-07-22T06:14:21.213469+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_plague_vector": {
    "id": "gehenna_plague_vector",
    "name": "Gehenna Plague Vector Vial",
    "description": "The Gehenna Plague Vector Vial contains a vial of virulent, black ichor that crackles with arcane energy. Crafted in the shadowy halls of Gehenna Academy, this deadly brew targets one specific race, turning them into withered husks within days if they fail their Constitution save (DC 20). The plague spreads rapidly through touch or inhalation, infecting allies and enemies alike, until it is quelled by a successful Contagion Spell or a powerful healing ritual. This vial is as deadly as it is rare, a walking nightmare crafted to ensure the survival of Gehenna Academy's dark experiments.",
    "price": 280000,
    "icon": "🦠",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Plague Infector",
      "Rapid Spread"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Biohazard Unit",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Plague Infector",
        "rules": "The user targets one creature within 30 feet with a successful attack. The target must make a DC 20 Constitution saving throw or be infected by the plague, suffering from a 50% fatality rate and rapid deterioration over time."
      },
      {
        "title": "Rapid Spread",
        "rules": "The plague spreads at the start of each even-numbered round to all creatures within 10 feet of an infected target. This effect can be countered by successfully casting Contagion or a similar spell on the infected creature, or through powerful healing magic."
      }
    ],
    "levelRequirementReason": "Only a seasoned veteran with significant experience in combat and arcane lore can safely handle this dangerous artifact.",
    "vendorReason": "The Gehenna Vault maintains a select collection of items that push the boundaries of magic, including deadly contraptions like the Gehenna Plague Vector Vial.",
    "shippingDetail": "Ships via Biohazard Unit with strict quarantine protocols and must be handled by authorized personnel only.",
    "usage": {
      "activation": "Thrown or hurled at a target within range as an attack action.",
      "duration": "Instantaneous effect, with the plague spreading to adjacent creatures on even-numbered rounds thereafter.",
      "endsWhen": "Cured via Contagion Spell or powerful healing magic; otherwise, it persists until the creature dies or is successfully treated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This vial's value lies in its rarity and potential for catastrophic damage, making it a godly treasure that can tip the balance of even the most powerful battles.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-22T06:14:46.558854+00:00",
    "aiReviewedAt": "2026-07-22T06:14:46.558854+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_relic_smuggling": {
    "id": "gehenna_relic_smuggling",
    "name": "Gehenna Relic Smuggling Service",
    "description": "The Gehenna Relic Smuggling Service is a covert operation conducted by the Gehenna Academy's elite operatives. This service ensures that one divine or heavily warded artifact can bypass hostile borders without any inspection, as long as the destination aligns with the Academy’s interests. Failure to comply results in severe repercussions for both sender and receiver. The Academy’s reputation is at stake with each mission, making this a high-risk endeavor.",
    "price": 24000,
    "icon": "📦",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Divine Artifact Bypass",
      "High-Risk Operation"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Gehenna Couriers",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Divine Artifact Bypass",
        "rules": "Activate as an action to smuggle one divine or heavily warded artifact past any non-divine blockade without inspection. Once used, the service is exhausted until a new mission is completed by the Gehenna Academy operatives."
      },
      {
        "title": "High-Risk Operation",
        "rules": "If caught during transit, both sender and receiver are subject to execution. The risk of capture reduces the effectiveness of the operation but does not negate its success in passing the artifact."
      }
    ],
    "levelRequirementReason": "Requires significant experience to navigate complex and dangerous political landscapes.",
    "vendorReason": "The Gehenna Academy is known for its expertise in such delicate operations.",
    "shippingDetail": "Delivered exclusively by Gehenna's elite couriers, ensuring speed and discretion.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Once used to smuggle the artifact past a blockade",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for its high-risk nature and strategic importance.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-22T19:34:08.397322+00:00",
    "aiReviewedAt": "2026-07-22T19:34:08.397322+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_soul_extraction_tool": {
    "id": "gehenna_soul_extraction_tool",
    "name": "Gehenna Soul Extraction Tool",
    "description": "The Gehenna Soul Extraction Tool is a dreadfully crafted implement forged from infernal steel within Gehenna Academy. Its handle is adorned with runes that glow faintly, and its blade is said to have been tempered in the fires of hell itself. When used in the final blow against a creature's life, it ensures the soul is cleanly separated and safely contained in a vial. This tool has found a place within Gehenna Academy's vaults, where its reputation for reliability and efficiency makes it invaluable.",
    "price": 24000,
    "icon": "⛏️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Soul Capture",
      "Linked Jar"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Bloodstained Box",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Soul Capture",
        "rules": "When used in the final blow against a creature, this tool ensures the soul is cleanly separated from its body. The soul is then stored in a linked vial for sale or ritual use. This effect has no save DC and does not consume charges."
      },
      {
        "title": "Linked Jar",
        "rules": "The soul captured by the Gehenna Soul Extraction Tool is contained within a vial that is magically linked to the tool. The vial can be sold for 500 XP or used in rituals requiring a creature's soul, with no additional cost."
      }
    ],
    "levelRequirementReason": "This tool requires significant skill and experience to wield effectively due to its infernal origins and complex mechanism.",
    "vendorReason": "The Gehenna Vault is the only place where such dark and specialized tools are crafted and sold, ensuring their authenticity and quality.",
    "shippingDetail": "Shipped in a custom box lined with leather to prevent damage during transit.",
    "usage": {
      "activation": "As an action when used in the final blow against a creature's life.",
      "duration": "Instantaneous, with no ongoing effects.",
      "endsWhen": "The soul is successfully captured and contained in the linked vial.",
      "charges": "Unlimited; does not consume charges."
    },
    "priceReason": "This tool's price reflects its rarity and the expertise needed to craft it, as well as its utility within Gehenna Academy.",
    "priceOriginal": 160000,
    "priceReviewedAt": "2026-07-22T06:14:36.744707+00:00",
    "aiReviewedAt": "2026-07-22T06:14:36.744707+00:00",
    "aiReviewVersion": 1
  },
  "gehenna_soul_ledger": {
    "id": "gehenna_soul_ledger",
    "name": "Gehenna Soul Ledger (Transfer)",
    "description": "The Gehenna Soul Ledger (Transfer) is a leather-bound tome etched with arcane symbols and sigils. It originates from Gehenna Academy, the academy of dark studies where souls are bought and sold. This ledger requires the current owner's signature and a small blood sacrifice to transfer the ownership of a single contracted soul to another party. Its binding ensures that only those of at least 15th level can handle its dark magic without risking their sanity.",
    "price": 24000,
    "icon": "📓",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Transfer Ownership",
      "Blood Sacrifice Required"
    ],
    "vendor": "gehenna_vault",
    "shippedBy": "Bound in Iron",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Transfer Ownership",
        "rules": "This action requires the current owner's signature and a small blood sacrifice (1d4 hit points). Once performed, the ownership of the soul contract is transferred to another party. This effect can only be used once per month."
      },
      {
        "title": "Blood Sacrifice Required",
        "rules": "The sacrifice must involve a drop of blood from the current owner or an ally within 30 feet. The DC for resisting this effect via a Wisdom saving throw is 15."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and willpower can handle such dark magic without risking their mental stability.",
    "vendorReason": "The Gehenna Vault, a repository of dark knowledge, is the only place where such items can be found or traded.",
    "shippingDetail": "This shipment requires special handling and arrives under heavy escort to ensure its safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect is complete, or if the blood sacrifice fails the saving throw.",
      "charges": "1"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its limited use and significant risk to the user.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T06:14:40.323807+00:00",
    "aiReviewedAt": "2026-07-22T06:14:40.323807+00:00",
    "aiReviewVersion": 1
  },
  "geminia_mirror_dupe": {
    "id": "geminia_mirror_dupe",
    "name": "Geminia Mirror Duplicate",
    "description": "This small hand mirror, crafted from polished obsidian and inlaid with ancient gemstones, can create a perfect, temporary duplicate of any inanimate object. Touching an object grants you the power to replicate it, but beware: the duplicate is magical and retains the warmth of the original for up to 1 hour. Should the copy be damaged or destroyed, it shatters into harmless obsidian dust that glows faintly with arcane energy.",
    "category": "curiosities",
    "price": 4900,
    "icon": "🪞",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Perfect Duplicate",
      "Magical Warmth"
    ],
    "vendor": "Geminia",
    "shippedBy": "Velvet Lined Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Duplicate",
        "rules": "Touch an inanimate object. The mirror creates a perfect, magical duplicate of the touched item that lasts for 1 hour or until destroyed. This duplicate is indistinguishable from the original and can be used as intended by the creator."
      },
      {
        "title": "Magical Warmth",
        "rules": "The duplicate retains the warmth of the original object for up to 1 hour, creating a faint sensation akin to holding the item in your hands. This effect does not cause any heat damage but serves as a subtle reminder that the object is magical."
      }
    ],
    "levelRequirementReason": "The Geminia Mirror Duplicate is accessible early on for players who wish to experiment with its capabilities without needing high-level spellcasting.",
    "vendorReason": "Geminia, the master of mirrors and reflections, is known for crafting items that enhance one's perception and understanding. The Geminia Mirror Duplicate fits well within their portfolio of useful curiosities.",
    "shippingDetail": "Shipped with utmost care in a velvet-lined box to ensure the mirror remains undamaged during transit.",
    "usage": {
      "activation": "Touch an object",
      "duration": "1 hour or until destroyed",
      "endsWhen": "The duplicate is damaged or destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the item's rarity and utility, providing players with a balanced option for early-game experimentation.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-22T06:14:55.351510+00:00",
    "aiReviewedAt": "2026-07-22T06:14:55.351510+00:00",
    "aiReviewVersion": 1
  },
  "geminia_twin_link_potion": {
    "id": "geminia_twin_link_potion",
    "name": "Geminia Twin-Link Potion",
    "description": "A shimmering, two-toned potion that pulses with a twin-hearted glow. As you drink it, your fate becomes entwined with another's, as if bonded by an unbreakable thread. For one hour after sharing this draught, damage taken by either of the linked individuals is shared equally between both. If one of you succumbs to death, the other suffers a surge of psychic agony—10d10 points of damage—a cruel reminder of your mutual vulnerability.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Linked Fate",
      "Psychic Surge"
    ],
    "vendor": "Geminia",
    "shippedBy": "Paired Vials",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Linked Fate",
        "rules": "Single use. When consumed by two willing creatures, this potion links their fates for one hour. Both creatures must be within sight of each other and share the drink simultaneously. For the duration, any damage taken by either creature is shared equally between both. This effect cannot be used again until the next long rest."
      },
      {
        "title": "Psychic Surge",
        "rules": "If one of the linked creatures dies during the effect's duration, the other immediately suffers 10d10 points of psychic damage. The caster must be within 30 feet and have a level equal to or greater than the target to activate this ability. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "This potion requires a certain level of experience and control to handle its effects without causing undue stress.",
    "vendorReason": "Geminia is known for their expertise in creating potions that enhance the bonds between individuals, making this potion a natural fit for them.",
    "shippingDetail": "The vials are shipped separately and must be combined by the intended recipients before use.",
    "usage": {
      "activation": "Simultaneously consumed by two willing creatures within sight of each other.",
      "duration": "One hour from activation.",
      "endsWhen": "Either creature dies or a long rest is completed.",
      "charges": "Single use, recharges after a long rest."
    },
    "priceReason": "The potion's rarity and the risk it poses make its price reflect both its value and danger.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T06:15:10.460848+00:00",
    "aiReviewedAt": "2026-07-22T06:15:10.460848+00:00",
    "aiReviewVersion": 1
  },
  "geminian_language_translator": {
    "id": "geminian_language_translator",
    "name": "Geminian Universal Translator",
    "description": "The Geminian Universal Translator hums softly as it translates all spoken languages in a 30-foot radius, its sleek, metallic casing adorned with intricate gemstone engravings. Crafted by the ancient and enigmatic Geminia, this device not only facilitates communication but also allows for interaction with beings from other worlds, though DM discretion is advised when encountering strange entities. The translator's power comes from a core of fused elemental essences that amplify its capabilities.",
    "price": 4900,
    "icon": "🗣️",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Perfect Translation",
      "Interstellar Communication"
    ],
    "vendor": "geminia_tech",
    "shippedBy": "Sonic Dampened Box",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Perfect Translation",
        "rules": "The Geminian Universal Translator translates all spoken languages perfectly within a 30-foot radius. This effect is instantaneous and has no duration, but it requires concentration (as if on a spell) to maintain the translation for more than 1 minute."
      },
      {
        "title": "Interstellar Communication",
        "rules": "This device allows interaction with beings from other worlds. The user must succeed on an Intelligence (Investigation) check against DC 15 to understand and interpret the entity's form of communication properly. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "The device requires a high level of magical understanding to operate effectively without causing unintended side effects.",
    "vendorReason": "Geminia Tech is renowned for its advanced linguistic and interstellar devices, making the Geminian Universal Translator an expected product in their catalog.",
    "shippingDetail": "The package travels through a specialized Sonic Dampened Box to ensure the translator's delicate components arrive undamaged.",
    "usage": {
      "activation": "Instantaneous activation with concentration for up to 1 minute.",
      "duration": "Instantaneous or 1 minute, as concentration is required.",
      "endsWhen": "Concentration ends; can be reactivated after a short rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The balanced price reflects the device's rare construction materials and advanced magical properties, making it an epic rarity suitable for high-level adventurers.",
    "priceOriginal": 42000,
    "priceReviewedAt": "2026-07-22T06:15:17.647836+00:00",
    "aiReviewedAt": "2026-07-22T06:15:17.647836+00:00",
    "aiReviewVersion": 1
  },
  "geminian_phase_glass": {
    "id": "geminian_phase_glass",
    "name": "Geminian Phase Glass",
    "description": "The Geminian Phase Glass is a delicate pane of glass forged from the fractured remnants of ancient mirrors found in the ruins of Geminia. When activated, it becomes intangible for just long enough to pass through solid objects or evade harm. Though fragile and prone to shattering on a natural roll of 1, this relic carries with it the legacy of a city that once knew the secrets of temporal manipulation.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Temporal Passage",
      "Fragile Essence"
    ],
    "vendor": "geminia_tech",
    "shippedBy": "Padded Frame",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Passage",
        "rules": "As an action, you can activate the glass to become intangible for up to 1 minute. During this time, it can pass through solid objects or evade attacks and effects that target it. The glass remains in its activated state until either a natural roll of 1 is made on a d20 or the duration expires."
      },
      {
        "title": "Fragile Essence",
        "rules": "The glass is extremely delicate; it breaks on a natural roll of 1 when used, expending one charge. If broken, the glass can be re-forged by Geminia Tech for an additional cost of 500 XP."
      }
    ],
    "levelRequirementReason": "It is a rare artifact that requires no specific level to use due to its unique and versatile properties.",
    "vendorReason": "Geminia Tech specializes in the restoration and creation of ancient artifacts, making the Geminian Phase Glass one of their flagship products.",
    "shippingDetail": "Ships via Padded Frame for safe handling; delivery can take up to a week depending on location.",
    "usage": {
      "activation": "As an action",
      "duration": "Up to 1 minute, until broken or until the duration expires",
      "endsWhen": "On a natural roll of 1, or when the duration ends",
      "charges": "Unlimited charges"
    },
    "priceReason": "The Geminian Phase Glass is priced at 1000 XP due to its rarity and the unique properties that allow it to pass through objects temporarily.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T19:41:34.605751+00:00",
    "aiReviewedAt": "2026-07-22T19:41:34.605751+00:00",
    "aiReviewVersion": 1
  },
  "general_student_academy_uniform": {
    "id": "general_student_academy_uniform",
    "name": "General Student Academy Uniform ",
    "description": "The General Student Academy Uniform is a crisp, starched ensemble that demands respect and discipline. Crafted by the diligent hands of the Student Council, this uniform not only inspires academic rigor but also subtly enhances one's scholarly prowess in the classroom. Those who wear it are met with an intuitive boost to their intellectual endeavors, gaining advantage on Intelligence checks related to studies. Should the uniform become soiled or disheveled, it can be a source of mild embarrassment among peers.",
    "price": 240,
    "icon": "👔",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Scholarly Boost",
      "Discipline Advantage"
    ],
    "vendor": "general_student_campus",
    "shippedBy": "Textbook Tie",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scholarly Boost",
        "rules": "While wearing the General Student Academy Uniform, you gain a +1 bonus to Intelligence checks related to classroom activities. This effect is passive and does not require any action or activation."
      },
      {
        "title": "Discipline Advantage",
        "rules": "You have advantage on Dexterity (Stealth) checks made as part of your daily study routines, which are often conducted in quiet, disciplined settings."
      }
    ],
    "levelRequirementReason": "The uniform's effects are subtle but beneficial to all students, regardless of level.",
    "vendorReason": "As part of the school's official gear, it is naturally distributed by the campus vendor.",
    "shippingDetail": "Standard delivery via Textbook Tie within a week.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "While wearing the uniform during study or classroom activities.",
      "endsWhen": "The effect ends when you remove the uniform or leave the school premises.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This balanced price reflects the uniform's subtle but useful academic enhancements and its official status within the student body.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T06:15:14.288805+00:00",
    "aiReviewedAt": "2026-07-22T06:15:14.288805+00:00",
    "aiReviewVersion": 1
  },
  "general_student_cafeteria_tray": {
    "id": "general_student_cafeteria_tray",
    "name": "General Student Cafeteria Tray ",
    "description": "The General Student Cafeteria Tray is a meticulously crafted multi-compartment tray forged from polished oak and brass. Designed by the industrious hands of the Student Crafters, this versatile tool not only holds your study snacks but also enhances your culinary prowess. With its perfectly balanced design, you can focus on your studies without worrying about spills or messes. The built-in school bell timer ensures you never miss a class change.",
    "category": "equipment",
    "price": 240,
    "icon": "🥜",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Balanced Design",
      "Culinary Boost"
    ],
    "vendor": "general_student_dorm",
    "shippedBy": "Study Snack Stack Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Balanced Design",
        "rules": "The tray's precise balance allows it to remain stable even with heavy or unevenly distributed contents. This effect is always active, and no action is required to activate it."
      },
      {
        "title": "Culinary Boost",
        "rules": "While preparing multi-step recipes, you gain a +1 bonus to Intelligence checks. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for young scholars who are just starting their academic journey.",
    "vendorReason": "The Student Crafters ensure that every dormitory has access to quality tools like the General Student Cafeteria Tray.",
    "shippingDetail": "Delivered within a week, or your next study snack is on us!",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "At the end of your next short or long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the craftsmanship and utility of the tray, providing a significant boost to both academic success and snack enjoyment.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T06:15:26.181557+00:00",
    "aiReviewedAt": "2026-07-22T06:15:26.181557+00:00",
    "aiReviewVersion": 1
  },
  "general_student_spell_tutor_service": {
    "id": "general_student_spell_tutor_service",
    "name": "General Student Spell Tutor Service",
    "description": "The General Student Spell Tutor Service is a crumpled piece of parchment delivered by eager Academy Students. When you activate it, your mind sharpens momentarily, allowing you to quickly learn and cast any cantrip for one week. The tutor’s nagging presence ensures you don’t forget the spell, granting advantage on Arcana checks to cast it. However, this tutoring comes with a price: you must complete a stack of homework before the week is up or lose all benefits.",
    "price": 240,
    "icon": "📚",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Learn and cast any cantrip for one week",
      "Advantage on Arcana checks to cast the learned spell"
    ],
    "vendor": "general_student_dorm",
    "shippedBy": "Swift Spell Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Quick Spell Learning",
        "rules": "You learn a new cantrip of your choice. You may cast this cantrip as if you had been studying it for one week. This effect lasts until the end of the week or until you fail to complete the required homework."
      },
      {
        "title": "Arcana Advantage",
        "rules": "For the duration of one week, you have advantage on Arcana checks when casting a cantrip learned through this service."
      }
    ],
    "levelRequirementReason": "This service is meant for beginners to help them quickly learn basic magic.",
    "vendorReason": "Academy Students are always eager to help their peers with quick spell tutoring.",
    "shippingDetail": "The service is delivered within a week, but the tutor’s nagging presence ensures you complete your homework promptly.",
    "usage": {
      "activation": "Immediate action",
      "duration": "One week",
      "endsWhen": "Ends at the end of one week or if homework is not completed",
      "charges": "Unlimited"
    },
    "priceReason": "The service includes tutoring and a stack of homework, making it a fair value for quick spell learning.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T06:16:20.521394+00:00",
    "aiReviewedAt": "2026-07-22T06:16:20.521394+00:00",
    "aiReviewVersion": 1
  },
  "general_student_study_snack_mix_recipe": {
    "id": "general_student_study_snack_mix_recipe",
    "name": "Recipe: General Student Study Snack Mix ",
    "description": "The Recipe: General Student Study Snack Mix is a meticulously crafted blend of nuts, dried fruits, and chocolate chips, expertly prepared by the diligent staff at the General Student Dormitory Cafeteria. This mix keeps students awake during long nights of studying with its energizing flavors that mimic the taste of a well-crafted energy bar. Consume a handful to gain advantage on an Intelligence check for the next hour; however, be ready for a sugar crash afterward, causing a brief drowsiness and yawning.",
    "price": 240,
    "icon": "🥜",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Caffeine Kick",
      "Intelligence Boost"
    ],
    "vendor": "general_student_dorm",
    "shippedBy": "Campus Express Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Caffeine Kick",
        "rules": "When you consume a handful of the snack mix, you gain advantage on one Intelligence check. This effect lasts for 1 hour and can be used once per long rest."
      },
      {
        "title": "Intelligence Boost",
        "rules": "The unique blend of ingredients temporarily enhances your mental acuity during study sessions. If you consume a handful of the snack mix, you gain advantage on one Intelligence check immediately. This effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This recipe is designed for beginners who may not have extensive knowledge in potion-making.",
    "vendorReason": "The General Student Dormitory Cafeteria specializes in crafting quick and effective snacks to help students stay focused during their studies.",
    "shippingDetail": "Ships within 24 hours of purchase, delivered directly to your dorm room.",
    "usage": {
      "activation": "Eating a handful of the snack mix",
      "duration": "1 hour for Caffeine Kick; instantaneous for Intelligence Boost",
      "endsWhen": "At the end of its duration or when you consume another handful during the same rest period",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe is crafted with high-quality ingredients and is a staple for students, making it a moderately priced item.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T06:15:44.953432+00:00",
    "aiReviewedAt": "2026-07-22T06:15:44.953432+00:00",
    "aiReviewVersion": 1
  },
  "genetic_enhancement_suite": {
    "id": "genetic_enhancement_suite",
    "name": "Genetic Enhancement Suite (Full)",
    "description": "The Genetic Enhancement Suite (Full) is a biomechanical marvel, forged in the depths of the Artificer Tower's secret labs. This transformative device permanently enhances your physiology, boosting two ability scores by 2 points each (max 20), grants you an additional 5 temporary hit points, and bestows a choice resistance to damage types like fire or acid. The process is arduous; it takes one week of excruciating transformation during which the subject lies helpless, vulnerable to attacks.",
    "category": "premium",
    "price": 4900,
    "icon": "🧬",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Attribute Boost",
      "Resistance Gain"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Surgical Procedure",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Attribute Boost",
        "rules": "Choose two ability scores to increase by 2 points each (max 20). Requires a successful DC 15 Constitution saving throw. The transformation process is intense and leaves the user helpless for one week."
      },
      {
        "title": "Resistance Gain",
        "rules": "Gain resistance to a type of damage, such as fire or acid. This effect is permanent and does not require any additional action or save check."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to undergo the physically taxing process.",
    "vendorReason": "The Artificer Tower is renowned for its advanced biomechanical enhancements and holds exclusive rights to this transformative device.",
    "shippingDetail": "A trained surgical team ensures the safe delivery, which takes an entire week to complete due to the necessary preparation time.",
    "usage": {
      "activation": "Instantaneous; requires a successful DC 15 Constitution saving throw and one week of preparation time.",
      "duration": "Permanent",
      "endsWhen": "The transformation process completes successfully or if the save is failed, resulting in a critical failure.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for a high-level item that provides significant but not overpowered benefits.",
    "priceOriginal": 275000,
    "priceReviewedAt": "2026-07-22T06:16:03.299020+00:00",
    "aiReviewedAt": "2026-07-22T06:16:03.299020+00:00",
    "aiReviewVersion": 1
  },
  "genos_arm_cannon": {
    "id": "genos_arm_cannon",
    "name": "Star Doll's Arm Cannon",
    "description": "The Star Doll's Arm Cannon is a delicate yet formidable wooden prosthetic, crafted from starwood and inlaid with celestial runes. It once belonged to a traveler from the distant stars who sought to mend the Star Road. This arm can be swapped for a limb at will, and its wielder can unleash radiant energy blasts that tear through foes with a single shot. The cannon's sentient core yearns to restore balance to the cosmos, making it a powerful yet ethereal companion on one's journey.",
    "category": "equipment",
    "price": 24000,
    "icon": "🔫",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Replaces one Arm",
      "Radiant Rending Blast"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Falling Star Courier Service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Replace Arm",
        "rules": "This item can be equipped as an arm, replacing the user's existing limb. It reverts to its inactive state when removed."
      },
      {
        "title": "Radiant Rending Blast",
        "rules": "As a bonus action, the wielder can fire a blast of radiant energy. This attack has a range of 100 feet and deals 2d8 Radiant damage on hit. A successful DC 15 Dexterity saving throw halves this damage."
      }
    ],
    "levelRequirementReason": "The Star Doll's Arm Cannon requires a minimum level of 8 to wield its celestial powers effectively.",
    "vendorReason": "The Comet Observatory is known for acquiring rare and powerful artifacts from the stars, including this unique prosthetic.",
    "shippingDetail": "Ships via Falling Star's express service, arriving within a week of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or the arm is removed from the user.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "The Star Doll's Arm Cannon, while not as powerful as other legendary items, offers unique benefits that justify its lower price.",
    "priceOriginal": 320000,
    "priceReviewedAt": "2026-07-22T06:16:29.842734+00:00",
    "aiReviewedAt": "2026-07-22T06:16:29.842734+00:00",
    "aiReviewVersion": 1
  },
  "genshin_impact_glider": {
    "id": "genshin_impact_glider",
    "name": "Wind Glider",
    "description": "The Wind Glider is a compact yet formidable device, made of lightweight metal and reinforced silk. Crafted by Comet Observatory, this glider harnesses the power of wind currents to soar through the air with unmatched precision and speed. Its wings fold neatly into a pocket-sized case, ensuring it can be easily carried on even the most arduous journeys. With each glide, you experience a rush of elemental energy, enhancing your flight by 20 feet per turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪂",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Elemental Boost",
      "Compact Folding"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Glider Pack",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Boost",
        "rules": "When flying with the Wind Glider, you gain a +10 bonus to your flying speed. This effect lasts for as long as you maintain flight and ends when you stop moving or are incapacitated."
      },
      {
        "title": "Compact Folding",
        "rules": "The Wind Glider can be folded into a compact case that fits in one hand, allowing it to be easily carried on your person. You can fold the glider as an action."
      }
    ],
    "levelRequirementReason": "A basic understanding of flight is necessary for using the Wind Glider effectively.",
    "vendorReason": "Comet Observatory specializes in aerial devices and gliding technology, making their Wind Gliders a natural addition to their inventory.",
    "shippingDetail": "The Wind Glider is shipped in a specially designed padded case to ensure it arrives in perfect condition.",
    "usage": {
      "activation": "As an action or bonus action, you can activate the glider's wings for flight.",
      "duration": "Instantaneous activation; ends when you stop moving or are incapacitated.",
      "endsWhen": "You stop flying, become incapacitated, or are otherwise unable to maintain flight.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Wind Glider offers significant utility for adventurers without being overpowered, making it a fair value at 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T06:16:18.544039+00:00",
    "aiReviewedAt": "2026-07-22T06:16:18.544039+00:00",
    "aiReviewVersion": 1
  },
  "get_one_spell_slot_back": {
    "id": "get_one_spell_slot_back",
    "name": "Mages' Guild Spell Slot Insurance",
    "description": "The Mages' Guild Spell Slot Insurance is a rare service that allows spellcasters to recover one expended spell slot of any level after a particularly disastrous day. This premium package ensures even clerics can benefit, though their regained slot may be random in level and type. The claims process requires submitting Form 27B/6 in triplicate, ensuring the Mages' Guild Underwriters are always on hand to smooth over your magical mishaps.",
    "category": "services",
    "price": 1000,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Spell Slot Recovery",
      "Cleric Coverage"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spell Slot Recovery",
        "rules": "This service allows you to regain one expended spell slot of any level once per week. This effect is triggered by the expenditure of all available slots of a particular level."
      },
      {
        "title": "Cleric Coverage",
        "rules": "If purchased by a cleric, the service also ensures that their regained slot can be of any level and type, not just the one they would normally receive."
      }
    ],
    "levelRequirementReason": "Anyone who has expended spell slots could benefit from this insurance.",
    "vendorReason": "The Mages' Guild Underwriters specialize in such services to support their members through magical mishaps.",
    "shippingDetail": "Delivered by Arcane Relay, ensuring your recovery is swift and effective after a bad day.",
    "usage": {
      "activation": "Passive effect triggered upon the expenditure of all available slots of a particular level.",
      "duration": "Instantaneous, lasting until the next dawn or until you regain hit points.",
      "endsWhen": "The service ends if you regain any spell slots through normal means or after one week has passed without triggering it.",
      "charges": "Unlimited uses, as this is a continuous service."
    },
    "priceReason": "This balanced price reflects the ongoing support and premium coverage provided by the Mages' Guild Underwriters.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T06:16:20.612903+00:00",
    "aiReviewedAt": "2026-07-22T06:16:20.612903+00:00",
    "aiReviewVersion": 1
  },
  "ghost_port_poltergust": {
    "id": "ghost_port_poltergust",
    "name": "Poltergust Type-G",
    "description": "The Poltergust Type-G is a military-grade vacuum designed to contain and repel incorporeal undead. Its sleek, matte-black exterior conceals an array of advanced ghost-capturing technology. When activated, it creates an invisible barrier that can trap any incorporeal undead within a 10-foot radius; the captured entities are immobilized until released or destroyed. The vacuum also emits a low-frequency hum that disrupts nearby spectral activity for up to one minute.",
    "category": "equipment",
    "price": 24000,
    "icon": "👻",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Incorporeal Undead Capture",
      "Spectral Disruption"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "E. Gadd Labs",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Incorporeal Undead Capture",
        "rules": "Activate as a bonus action. The Poltergust creates an invisible barrier within a 10-foot radius centered on you, trapping any incorporeal undead that enter or are already within this area. Once captured, the ghost can be released by expending a charge or destroyed with a successful attack roll (DC 18). The effect lasts for up to one minute."
      },
      {
        "title": "Spectral Disruption",
        "rules": "The vacuum emits an energy field that disrupts spectral activity within a 60-foot radius, reducing the movement speed of all incorporeal undead in this area by half. This effect lasts until the Poltergust is turned off or its batteries are depleted."
      }
    ],
    "levelRequirementReason": "Requires at least 7th level to handle and activate the sophisticated ghost-capturing technology.",
    "vendorReason": "Gilded Gryphon, known for their exotic and rare magical items, carries this powerful tool of spectral control.",
    "shippingDetail": "Ships via E. Gadd Labs' secure, spell-enhanced couriers within 48 hours.",
    "usage": {
      "activation": "Bonus action to activate and control the vacuum.",
      "duration": "1 minute per charge or until turned off.",
      "endsWhen": "The ghost is released or destroyed; batteries are depleted.",
      "charges": "5 charges, recharged by a full night's rest"
    },
    "priceReason": "Balanced at 1000 XP as it provides two powerful effects with strategic utility in combat.",
    "priceOriginal": 340000,
    "priceReviewedAt": "2026-07-22T06:16:40.301443+00:00",
    "aiReviewedAt": "2026-07-22T06:16:40.301443+00:00",
    "aiReviewVersion": 1
  },
  "ghostly_pianist": {
    "id": "ghostly_pianist",
    "name": "Ghostly Pianist",
    "description": "Ghostly Pianist is an ethereal instrument crafted from moonlit whispers and ancient melodies. When played at dawn, it weaves haunting harmonies that soothe the hearts of those within 30 feet, granting them advantage on saves against fear for the day. It only performs when a traveler feels profoundly lonely, offering solace in their solitude. If you shed a tear while listening, it ceases and bestows a single rose as a token of its empathy.",
    "category": "curiosities",
    "price": 24000,
    "icon": "🎹",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Dawn Serenade",
      "Solace in Solitude"
    ],
    "vendor": "lunar_auction",
    "shippedBy": "Phantom Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dawn Serenade",
        "rules": "When activated at dawn, the Ghostly Pianist plays for one hour. All creatures within 30 feet gain advantage on saving throws against fear effects for the day. This effect ends if a creature within range laughs or if the pianist is damaged."
      },
      {
        "title": "Solace in Solitude",
        "rules": "The instrument only performs when a listener feels profoundly lonely. If a listener cries, the performance ceases, and it leaves behind a single rose as a symbol of its compassion. The effect ends if the performer is damaged or if another creature starts playing music within 30 feet."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the instrument's soothing melodies without needing advanced prowess.",
    "vendorReason": "Lunar Auctions curates rare and mystical items, making Ghostly Pianist a fitting addition to their collection.",
    "shippingDetail": "Delivered by the Phantom Courier, ensuring the instrument arrives in perfect condition with a touch of the supernatural.",
    "usage": {
      "activation": "Active, performed at dawn",
      "duration": "One hour or until interrupted",
      "endsWhen": "Interrupted by laughter, damage to either performer or listener within range, or another musician playing nearby",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for a beginner's level, this item offers unique benefits without being overpowered.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T06:16:40.227936+00:00",
    "aiReviewedAt": "2026-07-22T06:16:40.227936+00:00",
    "aiReviewVersion": 1
  },
  "ghostly_spectral_mount": {
    "id": "ghostly_spectral_mount",
    "name": "Ghostly Spectral Mount (Summon)",
    "description": "The Ghostly Spectral Mount, a shimmering ethereal steed woven from the very fabric of the afterlife itself, appears at your command. Its hooves never touch the ground, gliding through the planes with supernatural grace. This spectral mount is the product of ancient lore and the craft of the legendary Spectral Riders, who once ruled the ethereal realms. It can traverse the Ethereal Plane at a breathtaking 100 miles per hour, leaving only a trail of mist behind its passage.",
    "price": 280000,
    "icon": "👻",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Mount travels at 100 mph",
      "Lasts for 8 hours"
    ],
    "vendor": "haunted_stable",
    "shippedBy": "Phantom Wind Express",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Travel Through the Ethereal Plane",
        "rules": "Upon activation, the mount appears and can be commanded to travel through the Ethereal Plane at an incredible speed of 100 miles per hour. The duration is 8 hours from the time it first appears."
      },
      {
        "title": "Ethereal Form",
        "rules": "The mount remains in an ethereal form, allowing it to pass through solid objects and other creatures without harm or hindrance."
      }
    ],
    "levelRequirementReason": "Summoning a Ghostly Spectral Mount requires significant magical prowess and experience.",
    "vendorReason": "The Haunted Stable is known for its connections to the spectral realm, making it the ideal vendor for such an ethereal mount.",
    "shippingDetail": "Ships directly from the Ethereal Plane; delivery can take up to one week depending on your location.",
    "usage": {
      "activation": "Action",
      "duration": "8 hours per summon",
      "endsWhen": "The mount dissipates after 8 hours or when dismissed by the rider.",
      "charges": "Unlimited, but must be re-summoned each time"
    },
    "priceReason": "The Ghostly Spectral Mount is a godly rarity and an invaluable asset for any adventurer who needs swift travel through the Ethereal Plane.",
    "priceOriginal": 640000,
    "priceReviewedAt": "2026-07-22T06:17:09.160731+00:00",
    "aiReviewedAt": "2026-07-22T06:17:09.160731+00:00",
    "aiReviewVersion": 1
  },
  "gilded_knights_vow_talisman": {
    "id": "gilded_knights_vow_talisman",
    "name": "Gilded Knight's Vow Talisman",
    "description": "The Gilded Knight's Vow Talisman is a shimmering silver medallion adorned with intricate engravings of ancient knights in battle. When you stand within 5 feet of an ally with less than half their hit points, the talisman amplifies your resolve, granting +2 AC and causing its surface to glow faintly as if caught by moonlight. This sacred token is said to have been blessed by the Knights of Gilded Castle, whose honor and valor it seeks to uphold in times of need.",
    "category": "equipment",
    "price": 240,
    "icon": "🛡️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Guardian's Glow",
      "Enhanced Resolve"
    ],
    "vendor": "knights_gilded",
    "shippedBy": "Squire Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guardian's Glow",
        "rules": "When you are within 5 feet of an ally who has less than half their hit points, the talisman emits a soft, silvery light. This effect grants you +2 AC until the start of your next turn. The glow fades if you move more than 10 feet away from the ally or if they gain more than half their hit points."
      },
      {
        "title": "Enhanced Resolve",
        "rules": "While within 5 feet of an ally who has less than half their hit points, you have advantage on saving throws to resist being charmed or frightened. This effect lasts until the start of your next turn and ends if you move more than 10 feet away from the ally."
      }
    ],
    "levelRequirementReason": "This talisman is designed for those who are just beginning their journey, yet still possess the heart to protect their allies.",
    "vendorReason": "The Knights of Gilded Castle have long been known for their honor and valor, and they ensure that such protective artifacts find worthy hands.",
    "shippingDetail": "Delivered by a trusted squire who ensures the talisman arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect when within proximity of an ally with less than half their hit points.",
      "duration": "Until the start of your next turn or until you move more than 10 feet away from the ally, whichever comes first.",
      "endsWhen": "The effect ends if you are no longer within 5 feet of the ally who has less than half their hit points.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This talisman is crafted from high-quality silver and imbued with a small amount of magical energy, making it a valuable yet accessible item for beginning adventurers.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T06:17:05.713905+00:00",
    "aiReviewedAt": "2026-07-22T06:17:05.713905+00:00",
    "aiReviewVersion": 1
  },
  "githyanki_silver_sword_replica": {
    "id": "githyanki_silver_sword_replica",
    "name": "Githyanki Silver Sword Replica",
    "description": "The Githyanki Silver Sword Replica hums with a psionic resonance that crackles through the air, slicing thoughts and leaving only silence in its wake. Crafted by the Githyanki, this blade is not merely a weapon but an instrument of thought control, capable of severing the threads of mental power with a swift stroke. Its silver surface reflects the very essence of the wielder’s mind, making it both deadly and a reflection of the user’s inner turmoil.",
    "price": 120000,
    "icon": "🗡️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "+3 to attack rolls and deal psychic damage",
      "Sever target's psionic abilities for 1 minute (DC 20 Wis save)"
    ],
    "vendor": "astral_armory",
    "shippedBy": "Astral Ship",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Psychic Blade",
        "rules": "When you hit with this weapon, the target must make a Wisdom saving throw. On a failed save, it suffers an interruption to its psionic abilities for 1 minute."
      },
      {
        "title": "Weapon Bonus",
        "rules": "This +3 weapon deals 2d10 psychic damage on hit and grants you advantage on attack rolls against creatures with psionic abilities."
      }
    ],
    "levelRequirementReason": "This blade requires a high level of mental discipline to wield effectively.",
    "vendorReason": "Astral Armory is known for its extensive collection of rare and powerful items, including artifacts from other planes like the Githyanki Silver Sword Replica.",
    "shippingDetail": "Ships via Astral Courier with a guaranteed arrival within one week.",
    "usage": {
      "activation": "On hit as part of a melee attack action",
      "duration": "Instantaneous; lasts for 1 minute on successful save, ends immediately on failed save",
      "endsWhen": "Effect ends when the target makes a successful saving throw or the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The sword's legendary status and unique properties make it an invaluable asset to any mental duelist.",
    "priceOriginal": 615000,
    "priceReviewedAt": "2026-07-22T06:17:27.056076+00:00",
    "aiReviewedAt": "2026-07-22T06:17:27.056076+00:00",
    "aiReviewVersion": 1
  },
  "githzerai_monastery_charter": {
    "id": "githzerai_monastery_charter",
    "name": "Githzerai Monastery Charter",
    "description": "The Githzerai Monastery Charter is a delicate scroll inscribed with ancient psionic runes and bound in leather from the sacred goats of Zerthadlun. Upon study at the Floating Citadel, you gain immunity to charm effects while meditating and the opportunity to learn up to three psionic abilities over 90 days. This charter, crafted by the Githzerai Anarchs, is a symbol of trust and academic freedom from the citadel's floating spires.",
    "price": 24000,
    "icon": "📿",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Learn Psionic Abilities",
      "Immunity to Charm While Meditating"
    ],
    "vendor": "chaos_order",
    "shippedBy": "Mental Projection",
    "levelRequirement": 16,
    "factionBonus": {
      "psionics": 100
    },
    "effectDetails": [
      {
        "title": "Learn Psionic Abilities",
        "rules": "Upon arrival at Zerthadlun, you may choose up to three psionic abilities from the Githzerai Anarchs' curriculum. These abilities are learned over a period of 90 days and do not require any additional material components."
      },
      {
        "title": "Immunity to Charm While Meditating",
        "rules": "While meditating within Zerthadlun, you gain immunity to all charm effects. This immunity persists for as long as you remain in a state of meditation within the citadel's confines."
      }
    ],
    "levelRequirementReason": "The Githzerai Monastery Charter is intended for scholars and psions who have demonstrated advanced knowledge in their studies.",
    "vendorReason": "The Chaos Order, known for its connections to all planes of existence, facilitates access to the citadel and sells charters as a part of its academic services.",
    "shippingDetail": "The charter is delivered via mental projection directly into your mind, ensuring that you begin your studies without delay.",
    "usage": {
      "activation": "Passive effect upon arrival at Zerthadlun; abilities learned over 90 days of study.",
      "duration": "Immunity to charm effects lasts while meditating within the citadel. Abilities are learned instantaneously upon choosing them.",
      "endsWhen": "When the learning period ends or if you leave the citadel without completing your studies, both benefits expire.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The fair value reflects the 90-day learning period and the unique academic resources provided by Zerthadlun.",
    "priceOriginal": 495000,
    "priceReviewedAt": "2026-07-22T06:17:29.190462+00:00",
    "aiReviewedAt": "2026-07-22T06:17:29.190462+00:00",
    "aiReviewVersion": 1
  },
  "glacial_bottle": {
    "id": "glacial_bottle",
    "name": "Glacial Bottle",
    "description": "The Glacial Bottle is a delicate, frost-laden flask that captures the essence of an Arctic winter. Crafted from ancient ice and imbued with the chill of the Borean tundra, it can be thrown to unleash a frigid cone or sipped for a momentary surge of clarity. Each sip grants immunity to cold damage and enhances intelligence checks for ten minutes, but beware—its magic is fleeting, as the bottle reforms itself in seven days after its contents are used.",
    "category": "consumables",
    "price": 240,
    "icon": "🧊",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Throw (20ft): Cone of Cold",
      "Sip: Immunity to Cold and +1 to INT Checks"
    ],
    "vendor": "sea_seller",
    "shippedBy": "Ice-Packed Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cone of Cold",
        "rules": "When thrown, the Glacial Bottle releases a cone of cold that lasts for up to one minute. Creatures within 10 feet must make a Dexterity saving throw (DC 13) or take 3d6 cold damage and be knocked prone."
      },
      {
        "title": "Intelligence Boost",
        "rules": "Sipping from the bottle grants immunity to cold damage for ten minutes and provides +1 to Intelligence checks. This effect cannot be used more than once every twenty-four hours."
      }
    ],
    "levelRequirementReason": "The Glacial Bottle's magic is accessible to first-level spellcasters, making it a useful tool for beginners.",
    "vendorReason": "The sea seller, who travels the frozen seas, often encounters such magical artifacts and sells them to those in need of cold resilience.",
    "shippingDetail": "Delivered by a courier who specializes in freezing climates, ensuring the bottle remains intact during transit.",
    "usage": {
      "activation": "Throw (as an action) or Sip (as a bonus action)",
      "duration": "Cone of Cold lasts for up to one minute; Intelligence boost lasts ten minutes",
      "endsWhen": "The effect ends when its duration expires, the bottle is used again, or it reforms in seven days.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare ice and imbued with cold magic, this item provides immediate utility for adventurers facing frosty challenges.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T06:17:48.200441+00:00",
    "aiReviewedAt": "2026-07-22T06:17:48.200441+00:00",
    "aiReviewVersion": 1
  },
  "glarnia_crystal_candy_recipe": {
    "id": "glarnia_crystal_candy_recipe",
    "name": "Recipe: Glarnia Crystal Candy ",
    "description": "Glarnia Crystal Candy is a sweet treat that mimics the lustrous sheen of precious gems, crafted by Glarnian Confectioners whose artistry is unmatched. This candy not only dazzles the eyes but also grants its consumer a temporary boost in Charisma (Deception), perfect for when you need to distract or deceive. However, be wary; there's a slim chance that each piece might 'crack' as it dissolves, revealing nothing more than ordinary sugar.",
    "price": 240,
    "icon": "🍭",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Charisma Boost",
      "Random Cracking"
    ],
    "vendor": "glarnia_mines",
    "shippedBy": "Sugary Shard Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When consumed as a bonus action, the candy grants +1 to Charisma (Deception) for 1 hour. This effect can be used once per long rest."
      },
      {
        "title": "Random Cracking",
        "rules": "There is a 50% chance that each piece of candy will crack when eaten, resulting in no magical effect."
      }
    ],
    "levelRequirementReason": "This sweet treat is accessible to all adventurers who can afford its price.",
    "vendorReason": "Glarnian Mines sells this candy because it showcases the region's unique blend of culinary and gemstone craftsmanship.",
    "shippingDetail": "Delivered via enchanted scrolls that ensure freshness and arrive with a flourish.",
    "usage": {
      "activation": "Consumed as a bonus action.",
      "duration": "+1 to Charisma (Deception) for 1 hour.",
      "endsWhen": "After the duration ends or if it cracks upon consumption.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "The price is set at a reasonable value considering its rarity and utility in social situations.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T06:17:37.091421+00:00",
    "aiReviewedAt": "2026-07-22T06:17:37.091421+00:00",
    "aiReviewVersion": 1
  },
  "glarnia_crystal_gaze_premium": {
    "id": "glarnia_crystal_gaze_premium",
    "name": "Glarnia Crystal Gaze (Premium)",
    "description": "The Glarnia Crystal Gaze Premium is a sleek, faceted lens crafted by the master jewelers of Glarnia. Its surface is etched with ancient runes that whisper of unseen truths. This premium version not only reveals hidden illusions and invisibility within 30 feet but also grants you advantage on Insight checks against deception. However, its power comes at a price: sometimes it shows embarrassing visions, leaving the choice to the Dungeon Master.",
    "price": 1000,
    "icon": "🔍",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveal Hidden Truths",
      "Advantage on Insight Checks"
    ],
    "vendor": "glarnia_gem_shop",
    "shippedBy": "Faceted Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Truths",
        "rules": "At the start of your turn, you can use an action to target a gem or crystal within 30 feet. This reveals any hidden illusions or invisibility affecting it for the duration. If successful, this uses one charge. The effect ends if you are incapacitated."
      },
      {
        "title": "Advantage on Insight Checks",
        "rules": "You gain advantage on all Insight checks against deception within 30 feet of a gem or crystal. This benefit lasts until the end of your next long rest. You can only activate this effect once per short rest."
      }
    ],
    "levelRequirementReason": "Requires no character level, as it is an affordable yet powerful tool for any adventurer.",
    "vendorReason": "As the official distributor of Glarnian Jewelers' products, Glarnia Gem Shop ensures their customers receive only the finest quality tools.",
    "shippingDetail": "Delivered via a trusted courier known for its punctuality and care in handling delicate items.",
    "usage": {
      "activation": "Action or bonus action to target an object within range.",
      "duration": "Instantaneous reveal, advantage lasts until end of next long rest.",
      "endsWhen": "Incapacitated or used again during the same short rest.",
      "charges": "10 charges; recharged after a long rest."
    },
    "priceReason": "Balanced at 1000 XP, this item offers both utility and narrative depth without breaking the game balance.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-22T06:18:03.880682+00:00",
    "aiReviewedAt": "2026-07-22T06:18:03.880682+00:00",
    "aiReviewVersion": 1
  },
  "glarnia_crystal_lens": {
    "id": "glarnia_crystal_lens",
    "name": "Glarnia Crystal Lens",
    "description": "The Glarnia Crystal Lens, a monocle of pure amethyst crafted by the enigmatic Glarnian crystal carvers, reveals hidden details and sharpens your sight in ways unseen. This lens magnifies small text with precision, making it invaluable for scholars or those lost in dense tomes. Its magic is so finely tuned that once per short rest, you can detect magical auras within 30 feet, aiding in the unmasking of enchantments and traps.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔍",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Detect Magic Aura",
      "Magnify Text"
    ],
    "vendor": "Glarnia",
    "shippedBy": "Crystal Case Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Detect Magic Aura",
        "rules": "Once per short rest, you can use an action to detect magical auras within 30 feet. This function works as the Detect Magic spell (save DC 15), but only for auras and does not reveal the source of the magic."
      },
      {
        "title": "Magnify Text",
        "rules": "The lens magnifies small text, allowing you to read it clearly even when it is too tiny for normal sight. While wearing this monocle, your proficiency bonus on Intelligence (Investigation) checks related to spotting illusions or traps increases by 1."
      }
    ],
    "levelRequirementReason": "This item requires a minimum character level of 3 to effectively utilize its magical properties.",
    "vendorReason": "Glarnia, the realm of crystal carvers and scholars, is renowned for crafting such refined and functional artifacts.",
    "shippingDetail": "Ships via Crystal Case Express within a week; delivery may vary due to fragile nature.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Used once per short rest, ends when the user removes it or rests without using its effect.",
      "charges": "Uses"
    },
    "priceReason": "Balanced at 1000 XP for a rare item that offers focused utility and a minor advantage in specific investigative checks.",
    "priceOriginal": 19200,
    "priceReviewedAt": "2026-07-22T06:17:52.205349+00:00",
    "aiReviewedAt": "2026-07-22T06:17:52.205349+00:00",
    "aiReviewVersion": 1
  }
};
