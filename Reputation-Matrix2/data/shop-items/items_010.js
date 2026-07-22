// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_010 = {
  "dk_isles_mushroom_catalyst": {
    "id": "dk_isles_mushroom_catalyst",
    "name": "Verdant Bloom Catalyst",
    "description": "The Verdant Bloom Catalyst is a rare fungal artifact encased in a gnarled, moss-covered shell that crackles with latent jungle magic. This enigmatic tool amplifies the potency of spells cast within its vicinity and grants allies a +30% bonus to magic accuracy for 1 minute. Upon activation, it summons an obscuring mist that blankets the area in dense fog, reducing visibility and granting temporary cover to all nearby allies.",
    "price": 1000,
    "icon": "🍄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% magic accuracy for allies",
      "Summons jungle fog (10 seconds)"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magic Accuracy Boost",
        "rules": "Allies within 60 feet gain a +30% bonus to their chance of hitting with magical attacks. This effect lasts for 1 minute and can be reactivated after a short rest."
      },
      {
        "title": "Jungle Fog",
        "rules": "When activated, the catalyst summons a dense fog within a 60-foot-radius sphere centered on the user. This fog grants total cover to all creatures within it until its duration ends or the fog dissipates naturally."
      }
    ],
    "levelRequirementReason": "This tool is accessible even to novice adventurers, enhancing their magical prowess without requiring extensive experience.",
    "vendorReason": "The Verdant Bloom Catalyst originates from the mysterious DK Isles and is a staple in the local vendors' offerings due to its widespread utility among jungle explorers.",
    "shippingDetail": "Delivered within one week by Pipe Express, ensuring that adventurers have ample time to prepare for their next encounter after receiving this potent tool.",
    "usage": {
      "activation": "Requires a bonus action to summon the fog and activate its effects.",
      "duration": "Lasts for 10 seconds.",
      "endsWhen": "Durations end when the effect is no longer needed or upon natural expiration.",
      "charges": "Unlimited uses, recharging after a short rest."
    },
    "priceReason": "Balanced to fit within the rare item price range while offering significant utility and versatility in combat scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:51:46.640072+00:00",
    "aiReviewedAt": "2026-07-22T01:51:46.640072+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_mushroom_mind_binder": {
    "id": "dk_isles_mushroom_mind_binder",
    "name": "Mushroom Mind Binder",
    "description": "A psychedelic fungus grown in the heart of the jungle’s forgotten labs. Consuming it grants temporary insight into enemy motives and hidden paths. May cause hallucinations in high-stress situations.",
    "price": 2500,
    "icon": "🍄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% bonus to puzzle solving",
      "+20% chance to detect hidden switches or traps",
      "-10% movement speed while hallucinating (unstable state)"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "dk_isles_mystic_jungle_satchel": {
    "id": "dk_isles_mystic_jungle_satchel",
    "name": "Mystic Jungle Satchel",
    "description": "The Mystic Jungle Satchel, a glowing pouch woven from the vines of ancient jungles and scaled leather of leviathan beasts, radiates an aura that enhances stealth and evades danger. It absorbs ambient magic, doubling as a portable reservoir for rare jungle flora and potent magical extracts. This satchel is said to have been crafted by the enigmatic denizens of the deep forests themselves, enhancing its wearer's ability to navigate the treacherous jungle with ease.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Stealth in Jungle Biomes",
      "Absorbs Ambient Magic (+10% Spell Save DC)"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "Activate as a bonus action to gain +20% Stealth proficiency while within a jungle biome. This effect lasts for 1 hour or until you leave the jungle, whichever comes first."
      },
      {
        "title": "Magic Absorption",
        "rules": "The satchel absorbs ambient magic, increasing the DC of spell saving throws by +10%. It can hold up to 10% more magical energy than its weight capacity allows. This effect is active as long as you are within a jungle biome."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively utilize the satchel's stealth and magic absorption benefits.",
    "vendorReason": "The denizens of the DK Isles, known for their ties with jungle mystics, offer this rare item crafted by deep forest spirits.",
    "shippingDetail": "Delivered via secret jungle courier route, ensuring discreet and timely delivery to your doorstep.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour or until you leave the jungle biome",
      "endsWhen": "Leaving a jungle biome or at the end of its duration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering the unique crafting and magical benefits it provides, especially for adventurers navigating dense jungles.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:51:43.631480+00:00",
    "aiReviewedAt": "2026-07-22T01:51:43.631480+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_necro_tongue_of_the_oracle": {
    "id": "dk_isles_necro_tongue_of_the_oracle",
    "name": "Tongue of the Oracle",
    "description": "The Tongue of the Oracle, a gnarled and twisted tongue of an ancient jungle oracle, whispers secrets only to those who can hear its necromantic lilt. Crafted from bones bleached by time and bound with vines from the jungle’s oldest trees, it amplifies the wielder's attacks against undead, delivering a devastating 200% damage bonus. However, its dark enchantment saps the senses, causing hallucinations that distort reality for 1 minute, clouding minds and blurring the line between truth and delusion.",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Undead Damage Boost",
      "Hallucinatory Delusions"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Undead Damage Boost",
        "rules": "When the Tongue of the Oracle is activated, it grants a +4 bonus to damage rolls against undead creatures. This effect lasts until the end of your next turn."
      },
      {
        "title": "Hallucinatory Delusions",
        "rules": "Upon activation, all enemies within 10 feet must succeed on a DC 15 Wisdom saving throw or be affected by the confusion spell for 1 minute. This effect ends if the target takes any damage or is knocked unconscious."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to wield due to its necromantic complexity and power.",
    "vendorReason": "The Tongue of the Oracle was discovered in a hidden crypt within the jungles controlled by the DK Isles, making it a natural fit for their inventory.",
    "shippingDetail": "Delivered discreetly via Shy Guy Smugglers' secret jungle pathways, ensuring safe arrival without drawing unwanted attention.",
    "usage": {
      "activation": "Requires an action to activate and focus on the Tongue's whispers.",
      "duration": "Lasts until the end of your next turn or when the target takes damage.",
      "endsWhen": "The effect ends if the target of the hallucination takes damage, is knocked unconscious, or the user dismisses it as a bonus action.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique necromantic abilities and potential for strategic advantage in combat.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T01:51:47.891029+00:00",
    "aiReviewedAt": "2026-07-22T01:51:47.891029+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_pony_nobility_bangle": {
    "id": "dk_isles_pony_nobility_bangle",
    "name": "Pony Nobility Bangle",
    "description": "The Pony Nobility Bangle, a delicate yet powerful charm made from the enchanted bone of a fallen pony noble, glows with the warmth of unspoken bonds. Its friendship magic pulses in harmony with the Changeling Hive’s hidden loyalties, granting wearers a subtle connection to these enigmatic creatures. However, its charm comes at a cost: those who openly wear it risk attracting Fawful's mechanized fury if their emotional resonance is detected by his drones.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐴",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Emotional Bond",
      "Mechanical Resilience"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Emotional Bond",
        "rules": "Grants +1 to Diplomacy checks. This effect lasts until the end of your next turn after activation and requires a successful DC 12 Charisma check."
      },
      {
        "title": "Mechanical Resilience",
        "rules": "Reduces damage from mechanical attacks by 10%. This effect remains active as long as you are wearing the bangle and ends when you remove it or sustain more than 50 points of damage in a single attack."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to harness the charm's unique connection to the Changeling Hive.",
    "vendorReason": "The Dk Isles are known for their trade in mystical and enchanted items, including those with a connection to the Changeling Hive.",
    "shippingDetail": "Ships via Lakitu Drones Express, ensuring swift delivery of this delicate yet powerful charm.",
    "usage": {
      "activation": "Activates as an action when worn. The effects last until the end of your next turn or until you remove it.",
      "duration": "Until the start of your next turn after activation",
      "endsWhen": "When removed or when you sustain more than 50 points of damage in a single attack",
      "charges": "Unlimited, as long as worn"
    },
    "priceReason": "Balanced at 1000 XP to reflect the charm's unique connection to the Changeling Hive and its potential risks.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T01:52:00.221147+00:00",
    "aiReviewedAt": "2026-07-22T01:52:00.221147+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_purple_legion_compliance_rod": {
    "id": "dk_isles_purple_legion_compliance_rod",
    "name": "Purple Legion Compliance Rod",
    "description": "The Purple Legion Compliance Rod is a weapon forged from captured Vigilance comms, its surface etched with runes that whisper commands to foes. This relic channels obedience and authority, suppressing enemy morale by 20% within ten meters. When an enemy with high aggression acts, there's a 5% chance the Compliance Rod will trigger 'Compliance Strike', delivering 50% extra damage. Legends say it was crafted in the forges of the Iron Isles, where only those deemed worthy wield its power.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Obedience Suppression",
      "Compliance Strike"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Obedience Suppression",
        "rules": "The Purple Legion Compliance Rod reduces enemy morale by 20% within a 10-meter radius. This effect lasts for 1 minute, and it ends if the wielder moves more than 5 meters away from the target or if an ally deals damage to any of the suppressed enemies."
      },
      {
        "title": "Compliance Strike",
        "rules": "When an enemy with high aggression acts, there is a 5% chance that 'Compliance Strike' will activate. This strike deals an additional 50% damage to the target. The Compliance Strike can only occur once per round and is not affected by distance."
      }
    ],
    "levelRequirementReason": "Only those who have proven their tactical acumen are granted access to wield this relic.",
    "vendorReason": "The Iron Isles forgehouses of the Purple Legion Compliance Rod, ensuring only those who can prove their worthiness carry it into battle.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, this item arrives in pristine condition, ready for combat.",
    "usage": {
      "activation": "Instantaneous activation when an enemy with high aggression acts.",
      "duration": "1 minute or until the wielder moves more than 5 meters away from a suppressed enemy or an ally deals damage to any of the suppressed enemies.",
      "endsWhen": "The effect ends if the wielder moves more than 5 meters away, or if an ally deals damage to any suppressed enemies.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare materials and forged by master blacksmiths, this relic commands a price that reflects its tactical significance.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T01:52:32.654213+00:00",
    "aiReviewedAt": "2026-07-22T01:52:32.654213+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_rage_torch": {
    "id": "dk_isles_rage_torch",
    "name": "Rage of the Jungle Torch",
    "description": "The Rage of the Jungle Torch burns with an emerald flame that crackles with the untamed spirit of the deep jungle. When lit, it incinerates foes and heals its bearer over time, as if the very essence of a rampaging beast fuels this weapon. The torch's flames are said to have been forged in the heart of the jungle, where only the strongest survive. Its glowing emerald core pulses with raw rage, making it an ideal companion for those who dare to face the wilds.",
    "price": 1000,
    "icon": "🔥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Burning Embers",
      "Healing Flame"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Burning Embers",
        "rules": "When activated by igniting the torch, it deals 1d6 fire damage to all creatures within 5 feet. This effect occurs once per minute while the torch is alight."
      },
      {
        "title": "Healing Flame",
        "rules": "The bearer regains 2d4 hit points at the start of each of their turns for as long as they hold the torch, but only while it remains lit. This effect ends if the torch goes out or is discarded."
      }
    ],
    "levelRequirementReason": "The Rage of the Jungle Torch requires no minimum level to wield; its power lies in its raw and untamed nature.",
    "vendorReason": "The denizens of Dk Isles are well-acquainted with the wilds, making them the perfect purveyors of this primal weapon.",
    "shippingDetail": "Ships via a Void Drifter Relay, ensuring safe and swift delivery to even the most remote jungles.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation; lasts until discarded or extinguished",
      "endsWhen": "Extinguished or discarded",
      "charges": "Unlimited"
    },
    "priceReason": "The Rage of the Jungle Torch is priced at 1000 XP, reflecting its rarity and the raw power it contains.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T01:52:28.067755+00:00",
    "aiReviewedAt": "2026-07-22T01:52:28.067755+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_shadow_fever_essence": {
    "id": "dk_isles_shadow_fever_essence",
    "name": "Shadow Fever Essence",
    "description": "A vial filled with a dark, swirling liquid that hums with malevolent energy, Shadow Fever Essence taps into the very essence of shadow-witch fevers. When injected, it grants temporary invisibility and allows for quick teleportation within shadow zones, making you an elusive target even in the darkest corners. The fever's touch also enhances your mastery over shadow spells, increasing their damage by 20%. Use this vial wisely, for its power comes at a steep price.",
    "price": 1000,
    "icon": "💉",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Shadow Teleport"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Invisibility (5 seconds)",
        "rules": "When you inject Shadow Fever Essence, you become invisible to all creatures within a 10-foot radius for 5 seconds. You can use this effect once per long rest."
      },
      {
        "title": "Shadow Teleport",
        "rules": "After using the invisibility effect, you can teleport up to 30 feet into shadow zones as a bonus action. This effect has no range and requires concentration for 1 minute. If you lose concentration or are outside a shadow zone, this effect ends."
      }
    ],
    "levelRequirementReason": "This potion is tailored for experienced adventurers who can handle its potent magic without succumbing to its dark allure.",
    "vendorReason": "The DK Isles have a long-standing relationship with shadow-witch clans, allowing them to trade in such powerful and rare essences.",
    "shippingDetail": "This item is shipped via the Shy Guy Smugglers' secret routes, ensuring its arrival without arousing suspicion.",
    "usage": {
      "activation": "Injected as an action; Shadow Teleport requires a bonus action after Invisibility.",
      "duration": "Invisibility lasts for 5 seconds, and Shadow Teleport lasts for 1 minute with concentration.",
      "endsWhen": "Concentration is lost or you exit a shadow zone during the teleport effect.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced price reflects its rarity, potency, and the complex alchemy required to produce it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:52:29.236763+00:00",
    "aiReviewedAt": "2026-07-22T01:52:29.236763+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_shadow_feywild_satchel": {
    "id": "dk_isles_shadow_feywild_satchel",
    "name": "Shadow Feywild Satchel",
    "description": "The Shadow Feywild Satchel exudes an eerie, twilight glow that hints at its malevolent origin. Crafted from the shadows of the Feywild itself, this cursed satchel weaves a veil around its bearer, reducing incoming damage by 40% for ten seconds and granting temporary invulnerability to 10% of total damage taken. When hidden in shadow, it casts an almost imperceptible aura that renders the wielder nearly invisible to foes within five feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Damage Reduction",
      "Shadow Veil"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shadowfax Couriers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Damage Reduction",
        "rules": "Activates as a bonus action. Reduces incoming damage by 40% for 10 seconds. Has no effect if the user is not in shadowy conditions."
      },
      {
        "title": "Shadow Veil",
        "rules": "Grants temporary invulnerability to 10% of total damage taken. Lasts for 5 seconds. The user must be hidden within a shadow or darkness spell to activate this effect."
      }
    ],
    "levelRequirementReason": "Requires at least third level to wield the satchel's dark magic effectively.",
    "vendorReason": "The Dark Isles have long traded in shadowy and cursed goods, making them a fitting vendor for such an artifact.",
    "shippingDetail": "Special handling required; shipments can take up to three days due to the nature of the item.",
    "usage": {
      "activation": "Bonus action or reaction (to activate or extend)",
      "duration": "Ten seconds for Damage Reduction, five seconds for Shadow Veil",
      "endsWhen": "Ends when no longer in shadowy conditions or after duration expires",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced at a lower price to reflect the item's cursed nature and limited utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:52:53.968645+00:00",
    "aiReviewedAt": "2026-07-22T01:52:53.968645+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_shadow_fury_helm": {
    "id": "dk_isles_shadow_fury_helm",
    "name": "Shadow Fury Helm",
    "description": "The Shadow Fury Helm is a dark helm forged in the shadowy depths of the Underdark, its surface etched with runes that whisper secrets of the night. Worn by those who dare to face the dark, this helm amplifies your combat prowess, granting you an aura that chills and intimidates foes within 10 feet. Allies nearby gain +10% stealth while you are active, and their critical hit chances rise by 25%. The helm’s power is a double-edged blade: it reveals secret paths in the Shadowfell and amplifies your combat prowess.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% damage against shadow enemies",
      "Allies nearby gain +10% stealth while you’re active"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Stealth for Allies",
        "rules": "Allies within 10 feet of the wearer gain a +10 bonus to Dexterity (Stealth) checks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Shadow Damage Amplification",
        "rules": "When you deal damage with an attack against a shadow creature, you gain a +30 bonus to that damage roll. This effect does not stack and ends if you are incapacitated or if the helm is removed."
      }
    ],
    "levelRequirementReason": "Requires level 5 due to its dark magic and the need for experience in combat.",
    "vendorReason": "The Dark Isles craft this helm as a tool for their initiates who venture into shadowy territories.",
    "shippingDetail": "Ships via magical courier, arriving within one day of order placement.",
    "usage": {
      "activation": "Passive effect; activated upon donning the helm.",
      "duration": "Instantaneous; ends if you are incapacitated or removed from the helm.",
      "endsWhen": "The wearer is incapacitated or removes the helm.",
      "charges": "Unlimited, recharges when resting for 8 hours."
    },
    "priceReason": "Balanced at 1000 XP to reflect its dark magic and unique effects on stealth and combat prowess.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:53:44.472078+00:00",
    "aiReviewedAt": "2026-07-22T01:53:44.472078+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_shadowfell_bark": {
    "id": "dk_isles_shadowfell_bark",
    "name": "Shadowfell Bark",
    "description": "Shadowfell Bark is a gnarled, dark-barked sliver of a tree harvested from the treacherous Shadowfell. Its surface glows faintly with an eerie blue light that reveals hidden pathways in the darkness. When pressed to one's skin, it allows you to phase through solid objects for brief moments, perfect for slipping past enemy patrols unseen and unheard. The bark whispers secrets of the shadowy realm as it is worn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% chance to phase through solid objects",
      "Reveal hidden paths in dark biomes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phasing Through Objects",
        "rules": "As a bonus action, you can press the bark against your skin and phase through up to 10 feet of solid material for 1 minute. Each use requires a successful DC 14 Constitution saving throw or suffer exhaustion (as per the Exhaustion condition). You regain this ability after resting for 8 hours."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "While wearing Shadowfell Bark, you have advantage on Perception checks to find hidden paths in dark biomes. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "The bark's shadowy magic is potent but not overwhelming, suitable for adventurers just beginning their journey.",
    "vendorReason": "DK Isles has a deep connection with the Shadowfell and often trades in its unique flora and fauna.",
    "shippingDetail": "Delivery is via the Void Drifter, known for its ability to navigate through dark biomes swiftly and safely.",
    "usage": {
      "activation": "Bonus action (to phase), passive effect (revealing hidden paths)",
      "duration": "1 minute or until exhausted (phasing), until next short or long rest (reveling hidden paths)",
      "endsWhen": "Exhaustion, end of rest period",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The bark's rarity and the complexity of harvesting it from the Shadowfell justify this fair price.",
    "priceOriginal": 3100,
    "priceReviewedAt": "2026-07-22T01:53:31.290475+00:00",
    "aiReviewedAt": "2026-07-22T01:53:31.290475+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_shadowfell_soul_shroud": {
    "id": "dk_isles_shadowfell_soul_shroud",
    "name": "Shadowfell Soul Shroud",
    "description": "The Shadowfell Soul Shroud, a spectral garment woven from the very threads of the Shadowfell's ethereal fabric, whispers of ancient magic whenever it moves. When donned, you become momentarily invisible, leaving enemies in the dark and granting them a taste of your power as their magical attacks are siphoned into your inventory. This shroud is more than just a cloak—it is a living artifact that bonds with its wearer, offering not only invisibility but also protection against magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility Burst",
      "Siphon Magic"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility Burst",
        "rules": "As a bonus action, you can become invisible for up to 4 seconds. While invisible, you have advantage on Dexterity (Stealth) checks and can attempt to remain hidden without needing cover or concealment. This effect ends if you attack, cast a spell, or use an ability that requires you to speak."
      },
      {
        "title": "Siphon Magic",
        "rules": "When you successfully hit a creature with a magical attack, there is a 20% chance (increased to 30% against creatures of the undead) that it siphons 5% of its magic damage into your inventory. This effect has no save DC and can occur once per turn."
      }
    ],
    "levelRequirementReason": "This shroud is crafted for those who are just starting their journey, ensuring even the novice adventurer can wield its power.",
    "vendorReason": "The Shadowfell Soul Shroud is a staple in the inventory of the DK Isles, renowned for their expertise in crafting items that harmonize with the Shadowfell's dark magic.",
    "shippingDetail": "The shroud arrives wrapped in protective runes to prevent its magic from leaking during transit. It typically takes a week for delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 4 seconds, or until you attack, cast a spell, or use an ability that requires speaking",
      "endsWhen": "The effect ends if you attack, cast a spell, or use an ability that requires speaking",
      "charges": "Unlimited"
    },
    "priceReason": "This item strikes a balance between its utility and rarity, offering a rare and powerful magic artifact at a price point that reflects its value without being overpowered.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T01:53:02.473351+00:00",
    "aiReviewedAt": "2026-07-22T01:53:02.473351+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_shadowfell_talisman": {
    "id": "dk_isles_shadowfell_talisman",
    "name": "Shadowfell Talisman of the Whispering Grove",
    "description": "The Shadowfell Talisman of the Whispering Grove is a hand-carved amulet made from darkwood and enchanted with the whispers of ancient Feywild groves. When activated, it grants temporary invisibility and allows you to teleport to nearby trees, effectively granting +10% dodge chance in forest terrain for 3 minutes. The talisman's power originates from the shadowy roots that intertwine with the Feywild, making it a rare artifact of the druidic order.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Teleportation"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activates as an action. You become invisible for 30 seconds and gain advantage on Dexterity (Stealth) checks made to hide. This effect ends early if you speak or cast a spell."
      },
      {
        "title": "Teleportation",
        "rules": "Requires a bonus action, with a range of up to 15 meters to the nearest tree within line of sight. Once per short rest, this ability allows you to teleport to a nearby tree without provoking opportunity attacks. You can only use this once every long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level due to its Feywild magic and the complexity of its abilities.",
    "vendorReason": "The Talisman's origin from the Feywild makes it a natural fit for DK Isles, known for their extensive trade networks with fey realms.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable service and quick delivery to the Feywild.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "30 seconds (Invisibility) / Once per short rest (Teleportation)",
      "endsWhen": "Ends early if you speak or cast a spell, or once used for teleportation",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides two powerful abilities with limited use per day.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T01:53:25.072627+00:00",
    "aiReviewedAt": "2026-07-22T01:53:25.072627+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_shadowfell_tongue": {
    "id": "dk_isles_shadowfell_tongue",
    "name": "Shadowfell Tongue",
    "description": "The Shadowfell Tongue is a gnarled, blackened tongue-shaped relic from the dark realms of the Shadowfell. Crafted from twisted shadowwood and adorned with runes that glow faintly in the dim light, it grants its bearer a unique bond with the spirit world. With this ancient artifact, you can command shadows to guide your path, revealing hidden dangers lurking in the darkness and granting you fleeting visions of secret routes.",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% chance to reveal hidden enemies",
      "Grants temporary vision of terrain secrets"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Guidance",
        "rules": "As a bonus action, you can call upon the Shadowfell Tongue to reveal hidden enemies within 60 feet. This effect lasts for 1 minute and provides a +30% chance to detect concealed foes in your immediate vicinity."
      },
      {
        "title": "Vision of Secrets",
        "rules": "Once per long rest, you can activate the Shadowfell Tongue to grant yourself a brief vision of hidden paths or secret routes within 60 feet. This effect lasts for 1 minute and provides a +50% chance to detect secret doors."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to wield the Shadowfell Tongue effectively.",
    "vendorReason": "The Shadowfell Tongue is a rare artifact from the realm of the dead, and only the reputable vendors at Dk Isles have access to such relics.",
    "shippingDetail": "The shipping process involves a journey through the dark realms, which can take up to one week depending on your location.",
    "usage": {
      "activation": "Bonus action for Shadow Guidance; once per long rest for Vision of Secrets",
      "duration": "1 minute for both effects",
      "endsWhen": "Ends upon expiration or when you use another effect that ends the current duration",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Shadowfell Tongue's price is balanced at 1000 XP, reflecting its rarity and the unique abilities it grants.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:54:02.780075+00:00",
    "aiReviewedAt": "2026-07-22T01:54:02.780075+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_shadowfury_tome": {
    "id": "dk_isles_shadowfury_tome",
    "name": "Shadowfury Tome",
    "description": "A cursed tomes that channels shadow energy into devastating strikes. Perfect for melee fighters seeking a dark power surge in the Feywild.",
    "category": "equipment",
    "price": 4500,
    "icon": "🖋",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Deals 20% more damage on critical hits",
      "Grants 50% chance to teleport 3 meters forward after attack",
      "Causes enemies to stagger for 2 seconds on hit"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "dk_isles_snow_gear": {
    "id": "dk_isles_snow_gear",
    "name": "Frostfang Gauntlets",
    "description": "Forged from the Frostfang Mountains, these gauntlets are said to have been crafted by a forgotten smith who knew the secrets of ice and cold. Wield them in icy biomes for +20% melee damage, but be wary: they freeze your enemies' projectiles on contact (1-second duration), leaving them vulnerable for a fleeting moment. The Frostfang Gauntlets are not just an accessory; they are a testament to the ancient art of ice and steel.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Freezes enemy projectiles",
      "+20% melee damage in icy biomes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Projectile Freezing",
        "rules": "When you hit with a melee attack, any projectile your target is holding or currently has on them is frozen for 1 second. During this time, the projectile cannot be used."
      },
      {
        "title": "Icy Edge",
        "rules": "+20% to melee damage when in icy biomes; this bonus stacks with other sources of melee damage."
      }
    ],
    "levelRequirementReason": "The Frostfang Gauntlets require a higher level due to their complex enchantments and the materials used in their forging.",
    "vendorReason": "DK Isles has been dealing in cold-weather gear for centuries, and these gauntlets are no exception; they have always had access to such relics.",
    "shippingDetail": "Delivered via the Void Drifter Relay, known for its efficiency even through the coldest regions.",
    "usage": {
      "activation": "Instantaneous effect upon melee attack landing on a target with projectiles.",
      "duration": "1 second duration; ends when the projectile is unfrozen or the gauntlets are removed from combat.",
      "endsWhen": "The projectile is no longer frozen, or the gauntlet wearer ceases to be in icy biomes and removes them from combat.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced at 1000 XP, considering its complex enchantments and materials used.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T01:54:32.777471+00:00",
    "aiReviewedAt": "2026-07-22T01:54:32.777471+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_snow_jungle_shield": {
    "id": "dk_isles_snow_jungle_shield",
    "name": "Snow Jungle Shield",
    "description": "The Snow Jungle Shield is a hybrid shield forged from the chaotic heart of the Kremling snow jungles, its surface etched with frosty runes that shimmer and crackle in icy defiance. Crafted by the secretive Kremling alchemists, this shield not only reduces incoming damage but also subtly slows down enemy attacks, making it an indispensable tool for frontline defenders. With each strike, a faint frost aura spreads outward, dealing minor damage to nearby foes without directly engaging in combat.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Frost Shield Barrier",
      "Slowed Assault"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frost Shield Barrier",
        "rules": "As an action, the wielder can activate this effect. For the next 10 seconds, the shield reduces all damage taken by 25%. After two seconds of use, a Frost Barrier forms around the user, dealing 10% damage to any enemies within 5 feet for the duration."
      },
      {
        "title": "Slowed Assault",
        "rules": "The wielder can activate this effect as a bonus action. For the next 8 seconds, all nearby enemy creatures have their attack speed reduced by 30%. This effect does not stack with other similar effects and ends if the wielder takes damage."
      }
    ],
    "levelRequirementReason": "The complexity of this shield's runes and its ability to manipulate both physical and magical properties make it suitable only for higher-level Kremlings who have mastered basic combat techniques.",
    "vendorReason": "As a kremlin stronghold in the heart of the snow jungle, DK Isles is home to many skilled alchemists capable of crafting such unique items as this shield.",
    "shippingDetail": "Carefully packed with enchanted ice crystals and delivered through the treacherous snow jungles by the Shy Guys themselves.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "10 seconds (Frost Barrier) / 8 seconds (Slowed Assault)",
      "endsWhen": "Ends if the wielder takes damage or when its duration expires",
      "charges": "Unlimited, but limited by daily use restrictions"
    },
    "priceReason": "The shield's rarity and the unique materials used in its crafting contribute to its high price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:54:13.711406+00:00",
    "aiReviewedAt": "2026-07-22T01:54:13.711406+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_spirit_bolt": {
    "id": "dk_isles_spirit_bolt",
    "name": "Spirit Bolt of the Jade Veil",
    "description": "The Spirit Bolt of the Jade Veil is a shimmering arrow forged from the essence of ancient jungle spirits, its surface etched with patterns that glow faintly in moonlight. This mystical projectile pierces through even enchanted armors and leaves behind a trail of ethereal energy that dances like living light, dealing additional damage to undead and magical foes for five seconds. Each shot is a fleeting manifestation of nature's wrath, capable of piercing the very heart of an enemy’s defenses before it dissipates into the night sky.",
    "price": 1000,
    "icon": "🎯",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Pierces through enchanted armors",
      "Leaves a glowing spirit trail"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Piercing Shot",
        "rules": "When fired, the Spirit Bolt of the Jade Veil deals an additional +30% damage to undead and magical creatures. This effect persists for five seconds after hitting its target."
      },
      {
        "title": "Glowing Trail",
        "rules": "Upon impact with a target, the arrow leaves behind a glowing spirit trail that continues to deal 1d6 lightning damage per second to all enemies within 5 feet of it. This effect lasts for five seconds or until dispelled."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 3 to handle the mystical power.",
    "vendorReason": "As the creators of these exotic weapons, DK Isles ensures that adventurers have access to unique and potent artifacts like the Spirit Bolt of the Jade Veil.",
    "shippingDetail": "Delivered within three days with special handling to ensure safe arrival.",
    "usage": {
      "activation": "As a bonus action, the user fires one bolt from this weapon.",
      "duration": "Instantaneous; the effects last for five seconds or until dispelled by magical means.",
      "endsWhen": "The effects dissipate after five seconds or are dispelled.",
      "charges": "3 uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique abilities and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:54:45.054449+00:00",
    "aiReviewedAt": "2026-07-22T01:54:45.054449+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_spirit_brooch": {
    "id": "dk_isles_spirit_brooch",
    "name": "Spirit Brooch of the Drowned Oracle",
    "description": "The Spirit Brooch of the Drowned Oracle is a silver pin adorned with lustrous pearls from the depths. Crafted in Kremling necromantic forges, it draws power from the jungle’s hidden springs to revive fallen allies. Worn by jungle priests, this brooch grants the wearer the ability to summon back comrades for a brief time but at the cost of their own health. It also subtly alerts the wearer to nearby concealed foes, enhancing tactical advantage during ambushes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Revives Allied Comrade",
      "Draws on Wearer's Health"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Revives Allied Comrade",
        "rules": "As an action, the wearer can activate the brooch to revive one fallen ally within 30 feet who died less than a minute ago. The revived ally returns with 50% of their maximum hit points but is incapacitated for 1d4 rounds. This effect has no cooldown."
      },
      {
        "title": "Draws on Wearer's Health",
        "rules": "While the brooch is active, it drains the wearer at a rate of 10% of their maximum hit points per second until either the revival duration ends or the brooch is removed. The wearer must succeed on a DC 15 Constitution saving throw or become exhausted for 24 hours."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to manage the spell's energy drain and revival.",
    "vendorReason": "The drowned temples of Kremling are known for their necromantic artifacts, and the Spirit Brooch is a testament to this lore.",
    "shippingDetail": "Ships via spectral courier with no delivery delay but requires a signed receipt from the recipient.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous revival, 1d4 rounds incapacitation",
      "endsWhen": "Removed or duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's necromantic power and its health-draining cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:54:30.783240+00:00",
    "aiReviewedAt": "2026-07-22T01:54:30.783240+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_spirit_mantle": {
    "id": "dk_isles_spirit_mantle",
    "name": "Spirit of the Verdant Shroud",
    "description": "The Spirit of the Verdant Shroud is a cloak spun from the living vines of the jungle and infused with ancient spirit threads. This enigmatic garment grants its wearer near-perfect stealth, becoming invisible to sight-based detection for three turns. It also provides a resilient shield against elemental attacks, bolstering the user's resistance by 15%. The cloak whispers the secrets of the forest, enhancing reflexes to dodge enemy strikes with a 20% chance each turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Stealth Cloak",
      "Elemental Resistance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Cloak",
        "rules": "Activates as an action, providing the wearer with near-invisible status against sight-based detection for three turns. Ends when the wearer takes a turn of movement or damage."
      },
      {
        "title": "Elemental Resistance",
        "rules": "Grants +15% resistance to all elemental damage from attacks and spells. This effect persists until expended, requiring a short rest to recharge."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to fully leverage the cloak's stealth capabilities.",
    "vendorReason": "The denizens of Dk Isles are renowned for crafting items that harmonize with nature, making this cloaked spirit a natural addition to their offerings.",
    "shippingDetail": "Ships via spectral courier, ensuring swift delivery through the twilight realms.",
    "usage": {
      "activation": "Activates as an action, providing near-invisible status for three turns. Ends when the wearer moves or takes damage.",
      "duration": "Three turns (ends on movement or taking damage)",
      "endsWhen": "Movement or damage taken",
      "charges": "Unlimited, but requires a short rest to regain resistance"
    },
    "priceReason": "Balanced at this price point to ensure it remains a desirable yet attainable option for players of appropriate level.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T01:55:12.992273+00:00",
    "aiReviewedAt": "2026-07-22T01:55:12.992273+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_spirit_sack": {
    "id": "dk_isles_spirit_sack",
    "name": "Spirit Sack of the Screaming Cavern",
    "description": "The Spirit Sack of the Screaming Cavern is a tattered, woven sack that hums with the echoes of drowned souls. Worn as an amulet or held close to your heart, it grants you moments of invisibility and immunity to psychic attacks, shielding you from the cavern's malevolent whispers. Unearthed from the depths of the Screaming Cavern where lost spirits cry for release, this relic offers a fleeting respite from the haunting forces that dwell within.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Immunity to Psychic Attacks"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "When activated as an action, you gain temporary invisibility for up to 1 minute. This effect ends early if you attack or cast a spell. You can only use this ability once per long rest."
      },
      {
        "title": "Immunity to Psychic Attacks",
        "rules": "You are immune to all psychic damage and effects from creatures within the Screaming Cavern. This immunity lasts for 1 hour, but it ends if you leave the cavern's immediate vicinity or take any physical action that provokes a reaction."
      }
    ],
    "levelRequirementReason": "The Spirit Sack is designed for adventurers who are just beginning their journey into the Screaming Cavern, providing them with essential protection against its haunting influences.",
    "vendorReason": "The Dk Isles vendors have a long-standing relationship with the inhabitants of the Screaming Cavern, and they source unique relics like this sack directly from the cavern's depths.",
    "shippingDetail": "The Boo Spectral Mail service ensures the swift delivery of the Spirit Sack, often arriving in a single night if you're within the Screaming Cavern region.",
    "usage": {
      "activation": "Action or reaction to activate; ends when you attack or cast a spell.",
      "duration": "1 minute or until used up",
      "endsWhen": "If you attack or cast a spell, or after 1 hour if in the Screaming Cavern's vicinity.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "The Spirit Sack is priced at 1000 XP to reflect its rare origin and the inherent danger it protects against within the Screaming Cavern.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:55:02.827745+00:00",
    "aiReviewedAt": "2026-07-22T01:55:02.827745+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_swamp_fury_amulet": {
    "id": "dk_isles_swamp_fury_amulet",
    "name": "Swamp Fury Amulet",
    "description": "The Swamp Fury Amulet hums with the untamed spirit of the jungle, its green stone pulsing with raw power. When worn, your melee attacks surge with an additional bonus damage after every third hit, and you gain a 20% chance to dodge ranged attacks from enemies. In combat, the amulet slightly saps the mobility of foes around you, making them move more slowly for as long as you remain engaged in battle.",
    "category": "equipment",
    "price": 2700,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Bonus Damage Surge",
      "Ranged Dodge Chance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Bonus Damage Surge",
        "rules": "After every third successful melee attack, you deal an additional 1d6 damage. This effect has no cooldown and can be triggered multiple times per round."
      },
      {
        "title": "Ranged Dodge Chance",
        "rules": "You have a 20% chance to dodge ranged attacks from enemies. This effect is active as long as you are wearing the amulet and does not require an action or reaction to activate."
      }
    ],
    "levelRequirementReason": "The amulet's raw power demands that only a seasoned adventurer with at least 6 levels can wield it effectively.",
    "vendorReason": "As guardians of the jungle, the DK Isles are well-acquainted with the untamed fury of the swamps and offer this powerful amulet to those who seek to harness its strength.",
    "shippingDetail": "The amulet is delivered via a secretive courier network known for their speed, ensuring it arrives safely but without drawing too much attention.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts as long as you are engaged in combat.",
      "endsWhen": "The amulet's effect ends when you are no longer engaged in melee combat.",
      "charges": "Unlimited, but only one bonus damage surge per three attacks."
    },
    "priceReason": "The amulet is priced at 2700 XP to reflect its rare and powerful nature, ensuring it remains a desirable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 2700,
    "priceReviewedAt": "2026-07-22T01:55:05.051560+00:00",
    "aiReviewedAt": "2026-07-22T01:55:05.051560+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_toad_bone_key": {
    "id": "dk_isles_toad_bone_key",
    "name": "Toad Bone Key",
    "description": "The Toad Bone Key, forged from a toad's last breath in the dense jungles of Dusk Isle, is an enigmatic key that opens forgotten temples hidden beneath the jungle canopy. Its surface glows faintly with a green luminescence, hinting at the ancient magic that courses through it. This key not only grants a +10% dodge chance but also allows its bearer to navigate the treacherous jungles with heightened agility and survival instincts.",
    "price": 1000,
    "icon": "🔑",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Opens hidden jungle temples",
      "+10% dodge chance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temple Opening",
        "rules": "Activates as a bonus action. The key opens one hidden temple in the immediate area, granting access to ancient chambers and treasures for 5 minutes. Once used, it requires a short rest before it can be used again."
      },
      {
        "title": "Enhanced Dodge",
        "rules": "Passive effect: Increases the user's AC by +10% for 20 seconds upon activation. This bonus does not stack with other sources of dodge chance or agility bonuses. Ends when the user is incapacitated, falls unconscious, or enters a place where this ability is negated."
      }
    ],
    "levelRequirementReason": "The Toad Bone Key is accessible to lower-level adventurers who are beginning their journey into the jungle.",
    "vendorReason": "DK Isles has a special connection with the local wildlife, allowing them to acquire such rare and mystical items.",
    "shippingDetail": "The key is shipped discreetly via Shy Guy Smugglers, ensuring it reaches its destination without unwanted attention.",
    "usage": {
      "activation": "Bonus action",
      "duration": "20 seconds and 5 minutes between uses",
      "endsWhen": "User incapacitated, falls unconscious, or leaves the jungle zone",
      "charges": "Unlimited"
    },
    "priceReason": "The Toad Bone Key's unique properties and its limited availability justify its higher price in the D&D market.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T01:55:26.977747+00:00",
    "aiReviewedAt": "2026-07-22T01:55:26.977747+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_toad_king_tome": {
    "id": "dk_isles_toad_king_tome",
    "name": "Tome of the Toad King’s Forgotten War",
    "description": "The Tome of the Toad King’s Forgotten War, bound in leather embossed with toads and runes, crackles with a dark, electric hum. Its pages are written in the blood of forgotten battles and whisper secrets of hidden paths. Once read, it grants +15% armor and reveals unseen enemies lurking on your map. The tome is said to have been crafted by the Toad King himself during his twilight years, and its ink still smolders with the voices of the dead.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% Armor",
      "Reveals Hidden Paths"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Armor Boost",
        "rules": "When read, this tome grants +15% to your armor class for one hour. It can be used once per day."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "By flipping through the pages, you can reveal hidden paths and traps on any map within 30 feet of you. This effect is usable once per long rest."
      }
    ],
    "levelRequirementReason": "The tome's arcane power requires a certain level to properly channel its secrets.",
    "vendorReason": "As the Tome originates from the mysterious Isles, it is only sold by the trusted merchants there.",
    "shippingDetail": "The tome travels via Lakitu Drones, ensuring its arrival without mishap through the stormy skies of the Toad King’s domain.",
    "usage": {
      "activation": "Reading the tome aloud is required to activate its effects.",
      "duration": "One hour for Armor Boost; once per long rest for Revealing Hidden Paths.",
      "endsWhen": "The effects expire at the end of their duration or when used again.",
      "charges": "Unlimited, as the tome regenerates its power through the Toad King’s influence."
    },
    "priceReason": "Balanced against other rare items, this tome offers significant battlefield advantage at a fair price.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T01:55:29.935455+00:00",
    "aiReviewedAt": "2026-07-22T01:55:29.935455+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_treasure_map": {
    "id": "dk_isles_treasure_map",
    "name": "The Toad Lee Jungle Map",
    "description": "The Toad Lee Jungle Map is a weathered parchment, its ink faded but still legible after decades of use. Drawn by the legendary cartographer himself, this map reveals hidden paths within the jungle, marking Kremling strongholds and rare loot spots with uncanny accuracy. Once unfurled, it grants a 10% bonus to critical hit chance in jungle biomes, allowing for swift and deadly strikes against foes. However, its ancient ink is fragile; the map can be used only once per game session before falling apart into harmless shreds.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden loot locations within jungle zones",
      "Grants a 10% bonus to critical hit chance in jungle biomes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Loot Revelation",
        "rules": "When the map is unfurled, it grants the user knowledge of all hidden loot locations within the current jungle zone. This effect lasts until the end of the game session."
      },
      {
        "title": "Critical Hit Boost",
        "rules": "For every critical hit scored while in a jungle biome, the user gains an additional +1 bonus to their attack roll, stacking up to +5 per game session. This effect ends when the map is destroyed or at the end of the game session."
      }
    ],
    "levelRequirementReason": "The map's ancient knowledge and fragile nature make it accessible to players of all levels.",
    "vendorReason": "As a treasure hunter and explorer, Toad Lee himself would naturally sell maps of his own making.",
    "shippingDetail": "Fulfillment is swift; Lakitu drones deliver the map directly to your doorstep within an hour of purchase.",
    "usage": {
      "activation": "Unfurling the map and spending one bonus action.",
      "duration": "Instantaneous, but ends at the end of the game session or when destroyed.",
      "endsWhen": "The map is destroyed or at the end of the game session.",
      "charges": "Unlimited; the map can be used once per game session."
    },
    "priceReason": "Considering its unique utility and the fragile nature of the map, this price ensures it remains a valuable but not overpowered item in gameplay.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:55:34.467413+00:00",
    "aiReviewedAt": "2026-07-22T01:55:34.467413+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_treasure_of_the_ice_kremlin": {
    "id": "dk_isles_treasure_of_the_ice_kremlin",
    "name": "Treasure of the Ice Kremlin",
    "description": "The Treasure of the Ice Kremlin is a frost-bitten relic forged from the ancient vaults of Kremling war machines, encased in crystalline ice that shimmers with otherworldly blue light. This artifact grants cold resistance and can slow enemy movements on snowy terrains, but be wary: its icy touch can cause temporary frostbite to the wearer during warmer climates. The relic is a symbol of the Kremlings' frozen terror, and only those who have faced their icy wrath are deemed worthy enough to wield it.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cold Resistance",
      "Snowy Terrain Movement Slow"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "The user gains +50% cold resistance. This effect lasts until the end of their next turn if they are in a snowy zone."
      },
      {
        "title": "Snowy Terrain Movement Slow",
        "rules": "Enemies within 30 feet of the user have their movement speed reduced by 15%. This effect ends when the user leaves a snowy terrain or if an enemy moves out of range."
      }
    ],
    "levelRequirementReason": "The relic's icy power is too great for those not experienced in cold climates.",
    "vendorReason": "The treasures of the Kremlings are said to have been lost at sea, and only the shrewd traders of the Dk Isles can find them.",
    "shippingDetail": "Delivered with a cold front, ensuring the relic arrives encased in ice, perfectly preserved.",
    "usage": {
      "activation": "Passive effect when in snowy terrain; no activation required.",
      "duration": "Until end of next turn or until leaving snowy terrain",
      "endsWhen": "Leaving snowy terrain or the end of the user's next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The relic’s rarity and power justify its price, ensuring only those who truly need it can afford it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:56:09.016596+00:00",
    "aiReviewedAt": "2026-07-22T01:56:09.016596+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_treasure_tide_egg": {
    "id": "dk_isles_treasure_tide_egg",
    "name": "Treasure Tide Egg",
    "description": "The Treasure Tide Egg is a rare artifact crafted from the sands of the Dusk Isles. When cracked, it hatches into a miniature tidal elemental that surges forth in battle. This aquatic guardian grants you +50% attack speed and damage for 30 seconds, making you an unstoppable force in close combat. Additionally, there's a 30% chance each round to trigger 'Tide Rush,' stunning nearby enemies for 2 seconds and giving your allies a momentary respite.",
    "price": 1000,
    "icon": "🐍",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Hatches into a miniature tidal elemental",
      "+50% attack speed and damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Elemental Surge",
        "rules": "When the egg cracks, you gain +50% to attack rolls and weapon damage until the start of your next turn."
      },
      {
        "title": "Tide Rush",
        "rules": "Each round there's a 30% chance that you can use a bonus action to stun all creatures within 10 feet for 2 seconds. This effect has no save DC and can be triggered once per short rest."
      }
    ],
    "levelRequirementReason": "This item requires significant mana and skill, suitable only for experienced adventurers.",
    "vendorReason": "The Dusk Isles traders are known to have unique artifacts from their mysterious shores.",
    "shippingDetail": "Ships via special courier pigeon, ensuring safe and timely delivery of this fragile artifact.",
    "usage": {
      "activation": "Instantaneous upon cracking the egg.",
      "duration": "30 seconds after activation.",
      "endsWhen": "The duration ends or when the elemental is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its powerful effects, this item requires a significant investment of XP.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T01:55:40.631339+00:00",
    "aiReviewedAt": "2026-07-22T01:55:40.631339+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_treasure_tongue": {
    "id": "dk_isles_treasure_tongue",
    "name": "Treasure Tongue",
    "description": "Treasure Tongue is a cursed artifact shaped like a serpent’s tongue, its surface etched with ancient runes that glow faintly in the dark. When activated, it whispers secrets of lost treasure and forgotten maps within a radius of 100 meters, but the user risks moments of temporary confusion or paranoia as psychic backlash ripples through their mind. Crafted by the enigmatic merchants of the Dark Isles, this relic is said to have been found in the ruins of a long-forgotten city, where it was once used to guide treasure hunters to untold riches.",
    "price": 1000,
    "icon": "🗝",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whispers Secrets",
      "Paranoid Confusion"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispers Secrets",
        "rules": "Activates as a bonus action. Reveals the locations of hidden treasures and forgotten maps within 100 meters for up to 1 minute. The user must make a DC 15 Wisdom saving throw or become confused, unable to focus on anything else for 1d4 rounds."
      },
      {
        "title": "Paranoid Confusion",
        "rules": "While the artifact is active, the user suffers from moments of paranoia and confusion. They have disadvantage on Charisma checks and saving throws until the effect ends or they take a short rest."
      }
    ],
    "levelRequirementReason": "The artifact's psychic backlash requires a minimum level to activate without risking immediate harm.",
    "vendorReason": "Dark Isles merchants are known for their mysterious and often dangerous wares, including cursed relics like the Treasure Tongue.",
    "shippingDetail": "The artifact is shipped discreetly in a specially designed, soundproof container to prevent any psychic disturbances during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per day",
      "endsWhen": "The effect ends when the user makes a successful saving throw or takes a short rest",
      "charges": "Unlimited, but with a daily limit of one use"
    },
    "priceReason": "Balanced as an uncommon relic that provides significant yet risky benefits.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:55:57.962349+00:00",
    "aiReviewedAt": "2026-07-22T01:55:57.962349+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_trojan_heart": {
    "id": "dk_isles_trojan_heart",
    "name": "The Hag’s Forgotten Heart",
    "description": "The Hag’s Forgotten Heart, a pulsating, dark crystal encased in tarnished bronze, is said to have been stolen from a fallen hag during a treacherous raid on her lair. This cursed relic grants temporary immunity to psychic and spirit-based attacks but comes at the cost of draining your health by 20% every 30 seconds. Nearby enemies hear its haunting chant when activated, amplifying its malevolent presence in battle.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Psychic Attacks",
      "Health Drain"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Psychic Immunity",
        "rules": "Activate as a bonus action. Grants immunity to psychic and spirit-based attacks for 1 minute, but ends early if you take any damage or are exposed to an intense source of magic."
      },
      {
        "title": "Health Drain",
        "rules": "Every 30 seconds, you lose 20% of your maximum hit points until the effect is ended. This drain can be mitigated by using a full rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to manage the health drain and effectively use its defensive capabilities.",
    "vendorReason": "The Hag’s Forgotten Heart is known to be a powerful relic, and dk Isles specializes in such ancient artifacts.",
    "shippingDetail": "Delivered via Lakitu Drones with a guaranteed delivery within 3 days of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until ended early",
      "endsWhen": "You take damage, are exposed to intense magic, or use the item again",
      "charges": "Unlimited"
    },
    "priceReason": "The Hag’s Forgotten Heart offers a powerful defensive boon but at a significant cost; thus, it is priced moderately.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:56:02.645411+00:00",
    "aiReviewedAt": "2026-07-22T01:56:02.645411+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_tropical_mimic_ambush": {
    "id": "dk_isles_tropical_mimic_ambush",
    "name": "Tropical Mimic Ambush",
    "description": "The Tropical Mimic Ambush is a rare bladed weapon that whispers the secrets of the jungle. Its hilt is carved from enchanted vine wood, and its blade shifts to mimic the movements of local predators. When you strike an enemy, the target briefly becomes a living plant, entangled in vines—perfect for ambushing foes in dense foliage. The weapon's curse ensures that each use leaves the target unable to act until the next attack lands on them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mimic Strike",
      "Plant Entanglement"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mimic Strike",
        "rules": "When you make a melee attack with this weapon, the target must succeed on a DC 15 Dexterity saving throw or become entangled in vines for 1 round. The target can use their action to attempt another save to end the effect."
      },
      {
        "title": "Plant Entanglement",
        "rules": "The target is restrained by vines until it takes damage from an attack other than this weapon, or until a creature uses its action to free them (DC 15 Dexterity check)."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield the weapon effectively in a jungle skirmish.",
    "vendorReason": "The vendors of the Dk Isles have access to rare and enchanted items crafted from local materials.",
    "shippingDetail": "Delivered within three days, ensuring you're ready for your next jungle adventure.",
    "usage": {
      "activation": "On a melee attack",
      "duration": "1 round per target",
      "endsWhen": "The effect ends when the target takes damage from another source or is freed by a successful Dexterity check.",
      "charges": "Unlimited, but recharges after a long rest."
    },
    "priceReason": "Balanced price reflects its rarity and unique enchantments that enhance stealth combat in dense jungles.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:55:53.503765+00:00",
    "aiReviewedAt": "2026-07-22T01:55:53.503765+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_tropical_scarf": {
    "id": "dk_isles_tropical_scarf",
    "name": "Jungle Whisper Scarf",
    "description": "Woven from the breath of jungle spirits, the Jungle Whisper Scarf is a vibrant emerald silk that seems to shimmer with the life force of the forest. It grants its wearer unparalleled agility in dense underbrush and an eerie ability to blend into the shadows, masking them from prying eyes. This scarf not only enhances one's evasion against environmental traps but also subtly increases their movement speed within jungle biomes, making it indispensable for stealthy operations deep within the foliage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% evasion against environmental traps",
      "+15% movement speed in jungle biomes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Evasion Boost",
        "rules": "The wearer gains a +20% bonus to their Dexterity saving throws against environmental hazards such as thorny vines or slippery ground. This effect lasts for the duration of one short rest."
      },
      {
        "title": "Enhanced Mobility",
        "rules": "While in jungle biomes, the user's movement speed is increased by 15 feet, allowing them to navigate dense foliage and uneven terrain with greater ease. This effect persists until the end of each long rest."
      }
    ],
    "levelRequirementReason": "The Jungle Whisper Scarf requires a minimum level of 3 due to its affinity for stealthy maneuvers that are more effective at higher character levels.",
    "vendorReason": "As the scarf's creators and inhabitants of the Dk Isles, the denizens of dk_isles have access to the unique crafting techniques needed to produce such an artifact.",
    "shippingDetail": "The scarves are delivered via Lakitu drones, ensuring they arrive in pristine condition with a slight delay due to the fragile nature of the scarf's fabric.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until end of rest",
      "endsWhen": "At the start of each short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Jungle Whisper Scarf is priced at 1000 XP, reflecting its rare crafting materials and the intricate spiritual weaving involved in its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:56:23.804705+00:00",
    "aiReviewedAt": "2026-07-22T01:56:23.804705+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_tropical_spirit_rod": {
    "id": "dk_isles_tropical_spirit_rod",
    "name": "Tropical Spirit Rod",
    "description": "The Tropical Spirit Rod is a glowing bamboo staff, its surface etched with ancient jungle runes that pulse with vibrant light. Crafted from the heartwood of sacred trees found deep within the uncharted forests, it channels the essence of rainforest spirits and the life force of the jungle itself. With each swing, protective leafy vines spring to life around you, creating a dense shield of nature's defense while rainforest spirits whisper guidance at your side.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% damage bonus to melee attacks in jungle biomes",
      "Invisibility for 3 seconds after casting the Spirit Call spell"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Spirit Shield",
        "rules": "When you swing the Tropical Spirit Rod, a protective aura of leafy vines springs up around you. This creates an invisible barrier that provides +10% damage bonus to melee attacks in jungle biomes for 30 seconds."
      },
      {
        "title": "Spirit Call",
        "rules": "Activating this feature summons rainforest spirits to whisper guidance, granting invisibility to the wielder for 3 seconds. This effect has a cooldown of 5 minutes."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers who have begun their journey into the wilds.",
    "vendorReason": "The artisans at DK Isles are known for crafting items that harmonize with nature, making this rod a perfect fit for their inventory.",
    "shippingDetail": "This item is shipped via special courier to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds (Spirit Shield)",
      "endsWhen": "Ends when the duration expires or you are no longer within a jungle biome",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and unique crafting process justify its fair value in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:56:28.494666+00:00",
    "aiReviewedAt": "2026-07-22T01:56:28.494666+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_tropical_tear": {
    "id": "dk_isles_tropical_tear",
    "name": "Tropical Tear of the Fallen Jungle",
    "description": "The Tropical Tear of the Fallen Jungle is a shimmering teardrop of jade and emerald, forged from the last breath of a jungle spirit. It emits a soft glow that can be felt by those in close proximity to dense foliage. The tear grants allies a +10% dodge chance against ranged attacks within 30 feet and slows enemy movement by 20% in jungle zones, making it an invaluable ally on the battlefield.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Dodge Chance Boost",
      "Jungle Slow"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dodge Chance Boost",
        "rules": "Passive effect that grants allies within 30 feet a +10% chance to dodge ranged attacks. Ends when the wearer leaves a jungle zone or the item is destroyed."
      },
      {
        "title": "Jungle Slow",
        "rules": "Instantaneous slowing of enemy movement by 20% in all jungle zones where the item is wielded. Lasts until the start of your next turn, and ends if you leave a jungle zone."
      }
    ],
    "levelRequirementReason": "The tear's power is accessible to adventurers of any level who wish to harness its jungle magic.",
    "vendorReason": "As a relic tied to the Tea Leaf Syndicate, it makes sense that they would offer this item for sale in their network.",
    "shippingDetail": "Ships via the Rakasha's ethereal courier service, ensuring safe and swift delivery through the jungle's mystical paths.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "Instantaneous or lasts until your next turn, depending on the effect.",
      "endsWhen": "Discontinues when you leave a jungle zone or the item is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The tear's rarity and utility justify its moderate price of 1,000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:56:16.888551+00:00",
    "aiReviewedAt": "2026-07-22T01:56:16.888551+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_tropical_terror": {
    "id": "dk_isles_tropical_terror",
    "name": "Tropical Terror",
    "description": "The Tropical Terror is a cursed artifact from the ancient jungles of Dk Isles, crafted from jade and obsidian. It whispers secrets of the jungle when wielded, summoning venomous spiders that dart through the foliage with deadly precision. When wielders are surrounded by thick vegetation, they blend seamlessly into their surroundings, becoming nearly invisible to foes. A single roar from the artifact disorients enemies within a 30-foot radius for five seconds upon contact.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summon Swarm of Spiders",
      "Camouflage in Jungle Terrain"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Swarm of Spiders",
        "rules": "Activates as an action. Summons three venomous spiders that attack enemies within reach for 30 seconds. The spiders have a bite attack dealing 1d6 poison damage and can be dismissed at any time."
      },
      {
        "title": "Camouflage in Jungle Terrain",
        "rules": "Passive effect while surrounded by dense foliage, providing advantage on Dexterity (Stealth) checks to avoid detection. This effect lasts until the wielder moves more than 30 feet away from cover."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 to channel the artifact's ancient power.",
    "vendorReason": "As native to Dk Isles, dk_isles is well-acquainted with the lore and artifacts from their jungles.",
    "shippingDetail": "Special delivery through the Shy Guy Smugglers ensures the artifact arrives safely but discreetly, avoiding unwanted attention.",
    "usage": {
      "activation": "Action to summon spiders; passive effect while in cover.",
      "duration": "Spiders last for 30 seconds; camouflage lasts until moving more than 30 feet from cover.",
      "endsWhen": "Wielder dismisses the spiders or moves away from cover, respectively.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The artifact's rarity and unique properties justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:56:37.686745+00:00",
    "aiReviewedAt": "2026-07-22T01:56:37.686745+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_tropical_vortex_rod": {
    "id": "dk_isles_tropical_vortex_rod",
    "name": "Tropical Vortex Rod",
    "description": "The Tropical Vortex Rod is a gnarled, vine-wrapped staff whose core pulses with vibrant jungle magic. Swinging it unleashes a swirling vortex of humid air and falling leaves, causing enemies to stagger and their vision to blur. The rod's user feels a surge of agility, increasing their attack speed for the duration. This relic hails from the mysterious DK Isles, where ancient magic thrives in every vine and root.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Humid Gust",
      "Vision Distortion"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Humid Gust",
        "rules": "When activated as a bonus action, the Tropical Vortex Rod summons a swirling vortex of humid air within a 10-foot radius centered on you. Enemies in this area are slowed by 30% for 5 seconds and have their vision distorted, reducing accuracy checks by 2. This effect lasts until the start of your next turn."
      },
      {
        "title": "Increased Agility",
        "rules": "While holding the rod, your attack speed increases by 15%. This bonus persists for as long as you hold the staff and is not subject to save or other interruptions."
      }
    ],
    "levelRequirementReason": "The magic in the rod is potent but stable, requiring a minimum of third-level spellcasting ability.",
    "vendorReason": "DK Isles traders are known for their mastery of jungle artifacts and relics, including this enchanted staff.",
    "shippingDetail": "Ships via the Void Drifter Relay. Delivery may take up to a week due to atmospheric turbulence over the DK Isles.",
    "usage": {
      "activation": "Bonus action to summon the vortex, passive increased attack speed while holding the staff.",
      "duration": "5 seconds for Humid Gust and until next turn; increases attack speed while held.",
      "endsWhen": "Ends when you stop holding the rod or at the start of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The rod's balance between utility and rarity ensures it remains a valuable yet achievable purchase for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:56:47.379907+00:00",
    "aiReviewedAt": "2026-07-22T01:56:47.379907+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_vine_battle_hammer": {
    "id": "dk_isles_vine_battle_hammer",
    "name": "Vine Battle Hammer",
    "description": "Forged in the heart of a primeval jungle, the Vine Battle Hammer is a colossal weapon whose body mimics the sinewy embrace of ancient trees and vibrant vines. Its strikes unleash bursts of natural energy that stun foes, rendering them immobile for an instant while simultaneously healing the wielder with the life force of the forest. The hammer's origins lie in the hands of ancient craftsmen who wove the very essence of nature into its forged form.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Stuns Enemy",
      "Heals Wielder"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stun",
        "rules": "When the Vine Battle Hammer strikes an enemy creature, it stuns them for 2 seconds. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Heal Wielder",
        "rules": "Upon successfully hitting an enemy with the hammer, the wielder gains a number of hit points equal to 15% of their maximum health. This effect is limited to one use per day."
      }
    ],
    "levelRequirementReason": "The Vine Battle Hammer's intricate construction and natural magic require a proficient wielder with at least three levels in a martial class.",
    "vendorReason": "The Vine Battle Hammer is an artifact of the Dk Isles, crafted by their ancient artisans to protect their wild lands and is sold exclusively by them.",
    "shippingDetail": "Shipped via Pipe Express with expedited delivery for an additional fee.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausts after a single use or if the wielder drops the hammer as an object.",
      "charges": "1"
    },
    "priceReason": "The Vine Battle Hammer's rarity and unique crafting process justify its price, offering both combat prowess and healing capabilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:57:06.707457+00:00",
    "aiReviewedAt": "2026-07-22T01:57:06.707457+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_wario_jungle_satchel": {
    "id": "dk_isles_wario_jungle_satchel",
    "name": "Wario Jungle Satchel",
    "description": "The Wario Jungle Satchel, a weathered and heavily armored satchel forged from jungle scavenged metal and imbued with Wario’s mischievous magic, is a veritable arsenal of stolen loot and discarded weaponry. When you throw items from this satchel, they deal an additional 25% damage due to the satchel's enchanted lining. Moreover, reloading any thrown weapon becomes faster by +15%, allowing for quicker strikes in battle. This satchel is a testament to Wario’s knack for improvisation and his never-ending supply of stolen goods.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Bonus Damage on Thrown Items",
      "Increased Reload Speed"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Bonus Damage on Thrown Items",
        "rules": "When you throw an item from the Wario Jungle Satchel, it deals an additional 25% damage. This effect is active as long as a thrown weapon is in your hand or within reach."
      },
      {
        "title": "Increased Reload Speed",
        "rules": "The reload time for any thrown weapon you are using is reduced by +15%. This effect lasts until the end of your next turn and can be activated once per short rest."
      }
    ],
    "levelRequirementReason": "This satchel requires a minimum level to ensure that its effects do not unbalance lower-level play.",
    "vendorReason": "The DK Isles are known for their unique and enchanted items, making the Wario Jungle Satchel a perfect fit for their inventory.",
    "shippingDetail": "Delivered via Pipe Express, this satchel arrives in one week with an additional surprise item from Wario’s stash.",
    "usage": {
      "activation": "Activates on throwing items and when reloading a thrown weapon.",
      "duration": "Instantaneous for thrown damage; lasts until the end of your next turn for reload speed.",
      "endsWhen": "Exhausted at the end of each short rest or expended by using all charges.",
      "charges": "Unlimited, but requires a short rest to recover."
    },
    "priceReason": "The Wario Jungle Satchel is priced at 1000 XP due to its unique enchantments and the rare materials used in its construction.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T01:57:00.617406+00:00",
    "aiReviewedAt": "2026-07-22T01:57:00.617406+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_wild_bark_belt_of_the_wolves": {
    "id": "dk_isles_wild_bark_belt_of_the_wolves",
    "name": "Wild Bark Belt of the Wolves",
    "description": "The Wild Bark Belt of the Wolves is crafted from the resilient bark of jungle trees, woven with ancient magic to absorb and deflect blows. This belt not only reduces incoming damage by a significant margin but also enhances the wearer's stealth, making them nearly invisible to visual sensors in dense foliage. Its bark pattern shifts with each step, blending seamlessly into any environment, ensuring that foes are left guessing their whereabouts until it's too late.",
    "category": "equipment",
    "price": 2800,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Damage Absorption",
      "Enhanced Stealth"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "The belt reduces incoming physical damage by 15% for the wearer, providing a passive defense. This effect lasts until the start of your next turn."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "While wearing this belt, you gain advantage on Dexterity (Stealth) checks and have a +20 bonus to Dexterity (Stealth). This enhancement persists for 1 hour or until you finish a short rest."
      }
    ],
    "levelRequirementReason": "This belt requires the wearer to possess at least 5 levels of experience to harness its protective and stealth-enhancing properties effectively.",
    "vendorReason": "The denizens of the DK Isles, who are well-versed in jungle combat tactics, have mastered the art of creating such belts for their warriors and mercenaries.",
    "shippingDetail": "Ships via Lakitu Drones with a delivery time of 3 days to most regions within the DK Isles.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 hour or until you finish a short rest.",
      "endsWhen": "The duration ends when you complete a short rest or are incapacitated.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted from rare jungle materials and imbued with potent magic, this belt offers unparalleled protection and stealth. Its rarity ensures it remains highly valued among mercenary ranks.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T01:57:08.141341+00:00",
    "aiReviewedAt": "2026-07-22T01:57:08.141341+00:00",
    "aiReviewVersion": 1
  },
  "dk_tie": {
    "id": "dk_tie",
    "name": "DK's Red Tie",
    "description": "DK's Red Tie is a massive, blood-red silk tie that exudes an aura of primal power. Its fabric seems to be woven from fibers as tough as vines, and its design echoes the strength of a raging ape. When tied around your neck, it enhances your physical prowess and grants you the ferocity of a wild beast. It makes you beat your chest with thunderous force, intimidating foes within 30 feet who must succeed on a Wisdom saving throw or become frightened for 1 minute. The tie also boosts your athletic strength, granting +2 to STR checks and advantage on climbing tasks, making you climb like a mountain gorilla.",
    "category": "equipment",
    "price": 1000,
    "icon": "👔",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+STR Boost",
      "Intimidating Chest Beat"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Jungle Vine Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chest Beat Intimidation",
        "rules": "Once per day, the wearer can beat their chest to intimidate nearby foes within 30 feet. Creatures in range must succeed on a Wisdom saving throw with a DC of 13 or become frightened for 1 minute. The effect ends early if the wearer is incapacitated or drops below half hit points."
      },
      {
        "title": "Enhanced Strength and Climbing",
        "rules": "+2 to STR checks, and advantage on climbing checks. These benefits last until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The tie's primal power is accessible to adventurers who have yet to master their skills.",
    "vendorReason": "The trading post supplies items that help adventurers survive the jungle, and this tie fits perfectly into its catalog.",
    "shippingDetail": "Ships via Jungle Vine Express, a courier known for its speed through dense jungles. Delivery time is approximately three days from shipping.",
    "usage": {
      "activation": "Passive effect; the wearer benefits continually without any action required.",
      "duration": "Until the end of your next long rest",
      "endsWhen": "If you drop to half hit points or become incapacitated, the effects cease immediately.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The tie's rarity and unique abilities justify its fair value of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T01:57:03.341612+00:00",
    "aiReviewedAt": "2026-07-22T01:57:03.341612+00:00",
    "aiReviewVersion": 1
  },
  "dm_screen_bypasser": {
    "id": "dm_screen_bypasser",
    "name": "DM Screen Bypasser",
    "description": "The DM Screen Bypasser is a sleek, metallic device with a hidden lens that allows you to peer through the DM's screen. Crafted by The Metagamer, it grants you insight into secret rolls and notes, offering a fleeting glimpse of the campaign’s unseen mechanics. With this tool, you may also ask one strategic question about the plot per session; the DM must answer truthfully without compromising the game's integrity.",
    "category": "equipment",
    "price": 1000,
    "icon": "📋",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Glimpse into Secret Information",
      "One Plot Question Per Session"
    ],
    "vendor": "meta_knowledge",
    "shippedBy": "Courier of Secrets",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse into Secret Information",
        "rules": "Activates as a bonus action. You can see the DM's secret rolls and notes for one minute. This effect ends if you take any other action on your turn or if the DM chooses to end it."
      },
      {
        "title": "One Plot Question Per Session",
        "rules": "You may ask one question about the plot during a session, which the DM answers truthfully. The DM cannot use this information to alter future events in ways that contradict established lore but can provide context and hints."
      }
    ],
    "levelRequirementReason": "Accessing secret campaign details requires a certain level of experience and understanding of the game.",
    "vendorReason": "Meta Knowledge is known for its expertise in metagaming tools that enhance player interaction with complex campaign elements.",
    "shippingDetail": "Delivered by a courier who ensures no one else witnesses the package's arrival, maintaining the secrecy of your acquisition.",
    "usage": {
      "activation": "Bonus action to activate; lasts for one minute or until used up.",
      "duration": "One minute per activation.",
      "endsWhen": "Used on another action, or when the DM chooses to end it.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at a price that reflects its utility without tipping the scales of gameplay fairness.",
    "priceOriginal": 35000000,
    "priceReviewedAt": "2026-07-22T01:57:16.907431+00:00",
    "aiReviewedAt": "2026-07-22T01:57:16.907431+00:00",
    "aiReviewVersion": 1
  },
  "doom_slayer_chainsaw": {
    "id": "doom_slayer_chainsaw",
    "name": "Chainsaw",
    "description": "The Doom Slayer Chainsaw is a fearsome weapon forged from the very heart of forgotten infernos. Its blade glows with a malevolent energy, slicing through flesh and bone with ruthless precision. Each swing carves through targets like hot butter, leaving behind a trail of crimson gore. Fueling this weapon requires careful handling; it burns through five fuel charges per day, ensuring it's only used in the direst of battles.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🪚",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Glory Kill",
      "Fuel: 5 Charges"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Bloody Case",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Glory Kill",
        "rules": "When you reduce a creature to 0 hit points with this weapon, you and any allies within 10 feet gain temporary hit points equal to your level + the damage dealt. This effect lasts for an hour."
      },
      {
        "title": "Fuel: 5 Charges",
        "rules": "The chainsaw requires fuel, which is expended on each successful attack. It regenerates only once per day, providing five new charges at midnight. Running out of fuel renders the weapon inert until it's refueled."
      }
    ],
    "levelRequirementReason": "This weapon demands a high level to wield effectively in battles against powerful demons.",
    "vendorReason": "Crypt Courier specializes in delivering dangerous and forbidden items, making the Doom Slayer Chainsaw an ideal addition to their inventory.",
    "shippingDetail": "The chainsaw is delivered with a special container designed to contain its power, ensuring safe transport from the forge to your door.",
    "usage": {
      "activation": "Melee weapon attack",
      "duration": "Instantaneous on hit",
      "endsWhen": "Fueled out or refueled",
      "charges": "5 charges per day"
    },
    "priceReason": "The Doom Slayer Chainsaw is a balanced item, providing significant combat advantages while not being overpowered.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-22T01:57:19.213561+00:00",
    "aiReviewedAt": "2026-07-22T01:57:19.213561+00:00",
    "aiReviewVersion": 1
  },
  "dota_2_tango": {
    "id": "dota_2_tango",
    "name": "Tango",
    "description": "The Tango is a small, glowing crystal that mimics the shape of an apple. It radiates a faint green light and was first crafted by the ancient druids to heal lost travelers in the forest. Consuming one restores 1d8 + Constitution modifier hit points, but it also saps a nearby tree, leaving it withered for a day. Be wary; druids who witness its consumption are known to turn hostile towards those who use this item.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌿",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Consume Tree",
      "Angers Druids"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Leaf Wrap Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Consume Tree",
        "rules": "When consumed, the Tango restores 1d8 + your Constitution modifier hit points. It also withers a nearby sapling within 30 feet for one day."
      },
      {
        "title": "Angers Druids",
        "rules": "If you consume a Tango in view of an active druid, they become hostile and will attempt to interfere with your use of the item as soon as possible. The hostility lasts until the druid is slain or leaves the area."
      }
    ],
    "levelRequirementReason": "The simplicity of crafting and consuming a Tango makes it accessible for players of all levels.",
    "vendorReason": "Shamans are often found in nature, making them knowledgeable about forest resources like the Tango.",
    "shippingDetail": "The Leaf Wrap service ensures that the Tango is delivered fresh from the heart of the forest, directly to your doorstep.",
    "usage": {
      "activation": "Eaten as a free action.",
      "duration": "Instantaneous effect; lasts until used or interrupted.",
      "endsWhen": "Consumed by the user.",
      "charges": "Unlimited"
    },
    "priceReason": "The Tango is priced high due to its ecological impact and the druidic backlash it incurs, balancing its utility as a healing item.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T01:57:22.673199+00:00",
    "aiReviewedAt": "2026-07-22T01:57:22.673199+00:00",
    "aiReviewVersion": 1
  },
  "double_cherry": {
    "id": "double_cherry",
    "name": "Double Cherry",
    "description": "The Double Cherry is a whimsical fruit that, when consumed, splits into two identical duplicates. These clones share your stats and actions but must act in concert to affect their environment. Each clone can perform one action per round independently, but they cannot attack each other. The clones last for only 1 minute or until either sustains damage, at which point the remaining clone reverts back to a single cherry.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍒",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Clone Creation",
      "Independent Actions"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Fruit Basket Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Clone Creation",
        "rules": "When consumed as an action, the Double Cherry splits into two clones. Both clones share your stats and actions but act independently until one sustains damage. The duration of the effect is 1 minute or until either clone takes damage."
      },
      {
        "title": "Independent Actions",
        "rules": "Each clone can perform one action per round, including attacks, movements, and interactions with objects. However, they cannot attack each other. The clones are identical in every way and share the same hit points; losing half your hit points halves their remaining hit points."
      }
    ],
    "levelRequirementReason": "Creating duplicates is a minor feat that can be achieved at early levels.",
    "vendorReason": "The Rogueport Black Market sells exotic and unusual goods, including the Double Cherry.",
    "shippingDetail": "Ships via a specialized fruit basket with climate control to ensure freshness upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until one clone sustains damage",
      "endsWhen": "One clone takes damage, or the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Double Cherry is a rare and delightful item that provides temporary duplication without requiring a level gate.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T01:57:22.680638+00:00",
    "aiReviewedAt": "2026-07-22T01:57:22.680638+00:00",
    "aiReviewVersion": 1
  },
  "double_dip_badge": {
    "id": "double_dip_badge",
    "name": "Double Dip Badge",
    "description": "The Double Dip Badge is a gleaming silver emblem with two etched profiles of familiars on its surface. Crafted from rare alloys and imbued with ancient runes, this badge grants you the ability to use two 'Use Item' actions in one turn. Rumored to have been forged by the mischievous Wario himself, it's said that those who wear it can savor every flavor life has to offer—twice as much.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Double Use",
      "Gluttony of Actions"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Express Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Double Use",
        "rules": "As a bonus action, you may use two 'Use Item' actions in one turn. This does not grant additional actions beyond the normal allotment for your turn."
      },
      {
        "title": "Gluttony of Actions",
        "rules": "The badge's power temporarily increases your proficiency with items by +2 while using these actions, but you must make a DC 15 Constitution saving throw at the start of each turn to avoid becoming exhausted at the end of your next short rest."
      }
    ],
    "levelRequirementReason": "This badge is designed for beginners and seasoned adventurers alike, as it enhances versatility without overwhelming the user.",
    "vendorReason": "Wario Direct specializes in quirky, over-the-top items that enhance creativity and resourcefulness—qualities this badge epitomizes.",
    "shippingDetail": "The Express Mail ensures your Double Dip Badge arrives swiftly to your doorstep, ready for immediate enjoyment.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous use of two 'Use Item' actions",
      "endsWhen": "At the start of your next turn or if you become exhausted from the Constitution saving throw",
      "charges": "Unlimited, but exhaustion rules apply"
    },
    "priceReason": "The badge's unique and versatile ability justifies a price that is slightly above average for its rarity.",
    "priceOriginal": 90000,
    "priceReviewedAt": "2026-07-22T01:57:34.616723+00:00",
    "aiReviewedAt": "2026-07-22T01:57:34.616723+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_abyssal_key": {
    "id": "doughnut_hole_abyssal_key",
    "name": "Abyssal Key",
    "description": "The Abyssal Key is a gnarled iron key forged from the molten cores of forgotten abysses. It hums with dark energy and can only be wielded by those who have faced the Star Road's perils. Using it opens a rift to the Star Road, allowing passage for a moment before the portal collapses in a burst of light and shadow. Handling this key requires immense focus; even the slightest distraction risks causing temporary blindness.",
    "price": 1000,
    "icon": "🔑",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Opens a portal to the Star Road",
      "Causes 1d6 temporary blindness"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Star Road Passage",
        "rules": "When activated, the key opens a rift that lasts for 1 round. Any creature passing through is not considered subjected to an effect but instead gains advantage on saving throws against effects originating from the Star Road until the start of their next turn."
      },
      {
        "title": "Blinding Light",
        "rules": "The user must succeed on a DC 15 Constitution saving throw or be blinded for 1 round. This effect has no save after the first use per long rest."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer can appreciate the utility of such an item, though its true power lies in its rarity and forge origin.",
    "vendorReason": "The Doughnut Hole has a monopoly on rare items found within its real estate, making it the go-to for adventurers seeking to expand their horizons.",
    "shippingDetail": "Shipped in an ornate box marked with celestial symbols, ensuring safe delivery through arcane means.",
    "usage": {
      "activation": "Action",
      "duration": "1 round per use",
      "endsWhen": "The portal closes or the user is blinded by the light",
      "charges": "Unlimited uses"
    },
    "priceReason": "This key's rarity, forge origin, and the unique effects it provides make it a valuable tool for any adventurer.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T01:57:37.098494+00:00",
    "aiReviewedAt": "2026-07-22T01:57:37.098494+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_chaotic_jester_torch": {
    "id": "doughnut_hole_chaotic_jester_torch",
    "name": "Chaotic Jester Torch",
    "description": "The Chaotic Jester Torch is a flame-throwing device crafted from twisted iron and alchemical goo. Its flickering glow is erratic, casting shadows that dance in unpredictable patterns. When ignited, it sends out waves of disorientation among foes within its range, causing them to falter for one round. The torch also drains the morale of those who fear it, sapping their bravery until they are no longer shaken by its presence.",
    "price": 1000,
    "icon": "🔥",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Disorients Foes",
      "Drains Morale"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Shy Guy Smugglers' Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorients Foes",
        "rules": "When activated as a bonus action within 30 feet, the torch causes all creatures in a 15-foot radius to make a Wisdom saving throw (DC 14). On a failed save, they are stunned for 1 round."
      },
      {
        "title": "Drains Morale",
        "rules": "As long as the user is holding the torch and it has not been consumed by entropy, any creature who fails a Wisdom saving throw against its disorientation effect suffers a -2 penalty to their morale ability modifier for 1 hour."
      }
    ],
    "levelRequirementReason": "Crafted from Shy Guy Smugglers' unique alchemical mixtures, the torch's power is potent enough for any first-level spellcaster.",
    "vendorReason": "Doughnut Hole has a reputation for offering rare and exotic items from the far reaches of the world, including this chaotic and unpredictable artifact.",
    "shippingDetail": "The package is delivered with a special delivery note that requires signature upon receipt, ensuring it arrives safely to its destination.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect; lasts until used up or consumed by entropy",
      "endsWhen": "Consumed by entropy if held for more than 10 minutes or destroyed in a fire",
      "charges": "Unlimited, but requires rekindling after use"
    },
    "priceReason": "The unique crafting process and the unpredictable nature of its effects justify this fair price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:57:42.298876+00:00",
    "aiReviewedAt": "2026-07-22T01:57:42.298876+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_coral_fleet_key": {
    "id": "doughnut_hole_coral_fleet_key",
    "name": "Coral Fleet Key to the Abyssal Biscuit",
    "description": "The Coral Fleet Key to the Abyssal Biscuit is a corroded brass key with intricate nautical engravings. It opens a hidden chamber within the abyssal core, where a sentient cookie guards an ancient stash of magical cookies. Upon use in a non-void environment, it triggers temporary hallucinations of sugar rivers, making you see cascading confections and sweet delusions for 1 minute. The key also grants +3 to all diplomacy rolls with the Coral Fleet, ensuring smoother negotiations with these mythical sea creatures.",
    "price": 1000,
    "icon": "🍪",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Opens the Abyssal Biscuit Chamber",
      "Grants Diplomacy Boost"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hallucinations of Sugar Rivers",
        "rules": "When used in a non-void environment, the key causes temporary hallucinations for 1 minute. The effect ends if the user enters another environment or takes any action."
      },
      {
        "title": "Diplomacy Boost",
        "rules": "+3 bonus to all diplomacy rolls with the Coral Fleet. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The key is simple enough for any adventurer, yet powerful enough to influence negotiations with sea creatures.",
    "vendorReason": "Doughnut Hole is well-known for its connections with the nautical world and magical flora.",
    "shippingDetail": "The key must be shipped via the Void Drifter Relay to ensure it arrives in a non-void environment, as it cannot function properly elsewhere.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous effect (lasting 1 minute)",
      "endsWhen": "Entering another environment or taking any action",
      "charges": "Unlimited uses"
    },
    "priceReason": "The key's rarity and utility justify this price, offering both a strategic advantage in diplomacy and an intriguing hallucinatory experience.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T01:57:40.211569+00:00",
    "aiReviewedAt": "2026-07-22T01:57:40.211569+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_dk_isles_connection": {
    "id": "doughnut_hole_dk_isles_connection",
    "name": "Banana Bridge Crumb",
    "description": "The Banana Bridge Crumb is a tiny, golden crumb that looks like it was baked in the heart of DK Isles. This magical morsel allows you to teleport instantly to the banana-rich lands for one turn, but beware: after your journey, you'll feel a brief moment of dizziness and nausea. Created by the Changeling Hive, this crumb is both a treat and a travel tool, requiring five banana hoards to activate its power.",
    "price": 1000,
    "icon": "🍌",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Teleports to DK Isles",
      "Causes temporary nausea"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleportation",
        "rules": "When consumed, the Banana Bridge Crumb allows you to teleport instantaneously to DK Isles for one turn. This effect requires five banana hoards as fuel and ends when your turn concludes."
      },
      {
        "title": "Temporary Nausea",
        "rules": "After using the crumb, you suffer from temporary nausea for 1 minute. This condition imposes a -2 penalty to all Dexterity (Stealth) checks and any ability check made while standing up from prone until it ends."
      }
    ],
    "levelRequirementReason": "This crumb is designed for beginners who wish to explore the magical lands of DK Isles without needing advanced magic.",
    "vendorReason": "Doughnut Hole, a vendor known for its exotic and magical edibles, naturally sells this tasty travel tool.",
    "shippingDetail": "Teleported directly to your location by Pipe Express's enchanted pipes, ensuring the crumb arrives fresh and potent.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "One turn",
      "endsWhen": "Your turn ends",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the magical energy required to activate the crumb and its utility for a novice adventurer.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:58:04.803455+00:00",
    "aiReviewedAt": "2026-07-22T01:58:04.803455+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_entropic_gun": {
    "id": "doughnut_hole_entropic_gun",
    "name": "Entropic Gun",
    "description": "The Entropic Gun is a firearm with a barrel that seems to twist and bend like it's made of shifting shadows. Crafted by Trinity General, this weapon can unravel reality itself, firing projectiles that turn the fabric of existence against foes who lack divine protection. When fired during a summit, it triggers a prank effect that causes chaos among attendees. The user, however, temporarily loses all social grace after each use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎯",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Unravels reality",
      "Triggers pranks at summits"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Unravel Reality",
        "rules": "When fired, the Entropic Gun releases a projectile that deals 3d8 damage to targets not wearing halos. Targets must succeed on a DC 15 Dexterity saving throw or suffer an additional 1d6 entropy bleed, which stacks with previous instances."
      },
      {
        "title": "Prank at Summits",
        "rules": "If the Entropic Gun is fired during a summit, it causes all participants to be affected by minor pranks that last for 1 hour. The user temporarily loses social grace, reducing their Charisma modifier by 2 until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "Crafted with advanced alchemy and divine assistance, this weapon requires a high level to wield its chaotic power.",
    "vendorReason": "Doughnut Hole, known for their eccentricities, offers this unique and powerful item.",
    "shippingDetail": "Special handling required; arrives via a mysterious delivery service with a 1-day delay.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, duration varies by target and situation",
      "endsWhen": "Exhausted after one use per day or when the user's next long rest ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect its unique abilities, but not overpowered given its versatile and rare effects.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T01:57:53.233607+00:00",
    "aiReviewedAt": "2026-07-22T01:57:53.233607+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_falling_star_key": {
    "id": "doughnut_hole_falling_star_key",
    "name": "Falling Star Key",
    "description": "The Falling Star Key is a relic crafted from the essence of Peach's memory during her Festival of Falling Stars. It glows faintly with an otherworldly light and can be used to unlock hidden vaults in the void, granting access only when the stars align during the annual event. When activated within the festival, it grants a +1d8 bonus to all rolls. If misused outside the event, it causes temporary disorientation, rendering its user clumsy for 1 minute.",
    "price": 1000,
    "icon": "🌠",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Unlock Hidden Vaults",
      "Bonus Rolls During Festival"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Hidden Vaults",
        "rules": "Activates during the Festival of Falling Stars. Grants access to hidden vaults in the void when used within the event. Has no effect outside the festival."
      },
      {
        "title": "Bonus Rolls During Festival",
        "rules": "Passive effect that grants a +1d8 bonus to all rolls for 24 hours after activation, during the current and next Festival of Falling Stars."
      }
    ],
    "levelRequirementReason": "The key's power is accessible by anyone who can appreciate its significance.",
    "vendorReason": "Peach personally ensures that her most cherished relics are sold at her favorite vendor, Doughnut Hole.",
    "shippingDetail": "Ships via a special delivery service ensuring the key arrives intact for the next festival.",
    "usage": {
      "activation": "Passive effect when used during the Festival of Falling Stars. Requires no action outside the event.",
      "duration": "24 hours after activation, during current and next Festival",
      "endsWhen": "Use ends at the end of the next festival or if misused outside the event.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The key's rarity and unique cultural significance justify its price, making it a fair value for adventurers.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T01:57:55.684672+00:00",
    "aiReviewedAt": "2026-07-22T01:57:55.684672+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_name_here": {
    "id": "doughnut_hole_item_name_here",
    "name": "Void Siphon Doughnut",
    "description": "Sucks in ambient void energy for a burst of power",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs 10% of ambient void energy",
      "Grants temporary resistance to psychic attacks",
      "Causes minor hallucinations during use",
      "Made by: Changeling Hive"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "doughnut_hole_pipe_express_item": {
    "id": "doughnut_hole_pipe_express_item",
    "name": "Courier Courier Crumb",
    "description": "The Courier Courier Crumb is a delicate, intricately woven pipe that whispers of the Changeling Hive's arcane secrets. Crafted from enchanted doughnut crumbs and imbued with Pipe Express’s proprietary teleportation sigils, it allows the user to instantly dispatch packages or messages across any known void. For one turn, it also grants an additional two inventory slots, but overuse can lead to a brief disorientation that confounds even the most seasoned couriers.",
    "price": 1000,
    "icon": "🚚",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Teleport Courier Dispatch",
      "Extra Inventory Slots"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport Courier Dispatch",
        "rules": "When activated as an action, this item instantly teleports a package or message to Pipe Express for immediate delivery. The duration is instantaneous and the range is limited to any known void. There is no save DC required, but overuse can cause minor disorientation."
      },
      {
        "title": "Extra Inventory Slots",
        "rules": "For one turn after activation, the user gains two extra inventory slots. This effect ends if used again before the first duration expires or when the item runs out of charges."
      }
    ],
    "levelRequirementReason": "This item is designed for users with basic couriers' skills to manage its unique abilities.",
    "vendorReason": "Doughnut Hole, a trusted purveyor of all things doughnut-related, has partnered with Pipe Express to offer this courier aid directly to their customers.",
    "shippingDetail": "Courier Courier Crumbs are delivered by Pipe Express’s fastest couriers, ensuring swift and reliable dispatch from the moment you activate it.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for each use; ends after one turn or if used again before duration expires",
      "endsWhen": "The item runs out of charges or is destroyed upon overuse",
      "charges": "Unlimited"
    },
    "priceReason": "This item's price reflects its unique abilities and the collaboration between Doughnut Hole and Pipe Express, making it a valuable yet balanced addition to any courier’s toolkit.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T01:58:24.334712+00:00",
    "aiReviewedAt": "2026-07-22T01:58:24.334712+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_scam_item": {
    "id": "doughnut_hole_scam_item",
    "name": "Void Siphon Scam",
    "description": "The Void Siphon Scam appears to be a sleek, metallic contraption shaped like a miniature void funnel, its surface etched with arcane symbols. It seems both powerful and dangerous, yet when activated, it emits only a faint hum before immediately failing. A curse then takes hold, causing the user to momentarily forget their last spoken word or action. This cursed device is crafted by the Changeling Hive and sold by Doughnut Hole, known for its dubious wares.",
    "price": 1000,
    "icon": "💸",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Appears Powerful but Fails Silently",
      "Curses User with Momentary Amnesia"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Activation and Failure",
        "rules": "When activated as a bonus action, the device emits a faint hum and then immediately fails to perform its intended function. The user is cursed by the Changeling Hive, causing them to momentarily forget their last spoken word or action."
      },
      {
        "title": "Cursed Memory Loss",
        "rules": "The curse lasts for 1 minute. A successful DC 15 Wisdom saving throw ends it early. During this time, the user cannot recall their last spoken words or actions until the effect is removed."
      }
    ],
    "levelRequirementReason": "Requires minimal dexterity to activate but exploits a mental flaw.",
    "vendorReason": "Doughnut Hole is notorious for its questionable merchandise, including this cleverly deceptive device.",
    "shippingDetail": "Shipped via Pipe Express, known for its reliable service and timely delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous failure with a curse effect lasting 1 minute.",
      "endsWhen": "A successful DC 15 Wisdom saving throw ends the curse early.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "Balanced price reflects the item's deception and minor inconvenience without being game-breaking.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T01:58:25.835196+00:00",
    "aiReviewedAt": "2026-07-22T01:58:25.835196+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_soul_crumble": {
    "id": "doughnut_hole_soul_crumble",
    "name": "Soul Crumble",
    "description": "The Soul Crumble is a gnarled, crumbly artifact that whispers of lost souls and forgotten lore. It is said to have been crafted in Animatopia during a ritual where ancient spirits were sealed within. Consuming it grants fleeting visions of past events but at the cost of one's sanity. The essence of this item makes you acutely aware of your surroundings, enhancing perception for a short time before its effects begin to unravel your mind.",
    "price": 1000,
    "icon": "🧠",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Perception",
      "Sanity Draining"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "When consumed as an action, the user gains advantage on perception checks for 1 minute. This effect ends if you take damage or if your concentration is broken."
      },
      {
        "title": "Sanity Draining",
        "rules": "Each use of the Soul Crumble causes 2 points of sanity loss. The item can only be used once per long rest and is destroyed after being consumed."
      }
    ],
    "levelRequirementReason": "The ritual to craft this artifact is simple enough that even first-level characters with Animatopia ties might attempt it.",
    "vendorReason": "Doughnut Hole, being a vendor who deals in strange and mystical items from Animatopia, would naturally stock such an item.",
    "shippingDetail": "Ships via Dry Bones Dead Drop's cryptic courier service which can sometimes arrive with a delay due to the nature of their deliveries.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "1 minute per use, ends early if damaged or concentration broken.",
      "endsWhen": "Destroyed after being consumed.",
      "charges": "Unlimited (one charge per long rest)"
    },
    "priceReason": "The item's rarity and the risk involved in consuming it justify its high price.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T01:58:19.187664+00:00",
    "aiReviewedAt": "2026-07-22T01:58:19.187664+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_sugar_scarf": {
    "id": "doughnut_hole_sugar_scarf",
    "name": "Sugar Scarf of the LEclaire Isle",
    "description": "The Sugar Scarf of LEclaire Isle is a delicate, woven scarf made from the finest sugar strands spun by the bakers of the island. It channels the sugary magic from the pastries and imbues its wearer with a sweet aura that enhances their baking skills. When worn near dough folk, it strengthens their loyalty to you, ensuring they share more secrets and recipes. The scarf also grants a brief energy boost, restoring hit points as long as you remain in the presence of freshly baked goods.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Enhances pastry-making expertise",
      "Boosts dough folk's loyalty"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pastry-Making Mastery",
        "rules": "While wearing this scarf, the wearer gains a +1 bonus to all skill checks related to baking. This effect lasts for as long as the wearer is within 30 feet of freshly baked goods."
      },
      {
        "title": "Loyalty Boost",
        "rules": "For every hour spent in the presence of dough folk, their loyalty towards you increases by 10%. This effect ends when the scarf is removed or if the wearer spends more than 24 hours away from freshly baked goods."
      }
    ],
    "levelRequirementReason": "A simple scarf that enhances basic baking skills, this item doesn't require a high level to benefit from its effects.",
    "vendorReason": "The local bakers of LEclaire Isle are the creators and purveyors of such a cherished accessory.",
    "shippingDetail": "Ships via the Void Drifter Relay, arriving within one week from order placement.",
    "usage": {
      "activation": "Passive effect",
      "duration": "12 hours after being removed or away from freshly baked goods",
      "endsWhen": "The scarf is removed or the wearer spends more than 24 hours without being near freshly baked goods",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this item offers a unique and flavorful enhancement that supports both social interactions and practical skills.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:58:36.753719+00:00",
    "aiReviewedAt": "2026-07-22T01:58:36.753719+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_tide_bark": {
    "id": "doughnut_hole_tide_bark",
    "name": "Tide Bark",
    "description": "Tide Bark is a gnarled piece of ancient tree bark, its surface etched with patterns that shimmer like waves. Crafted in the heart of the Void Rift, it is said to be infused with the cosmic tides and bound to the whims of the Boos' real estate monopoly. When wielded, it allows the user to call upon tidal forces, granting a +2 bonus to all damage rolls against entities from Animatopia and causing the wielder to become temporarily attuned to the Star Road's ebb and flow.",
    "price": 1000,
    "icon": "🌊",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Tidal Surge",
      "Star Road Tether"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Tidal Surge",
        "rules": "When activated as a bonus action, this effect grants the wielder a +2 bonus to all damage rolls against entities from Animatopia. This benefit lasts until the start of your next turn."
      },
      {
        "title": "Star Road Tether",
        "rules": "Upon activation, the user becomes attuned to the Star Road's ebb and flow for 1 minute. During this time, they can cast the spell *Locate Object* once without expending a spell slot."
      }
    ],
    "levelRequirementReason": "The intricate enchantments require a minimum of fifth level to wield effectively.",
    "vendorReason": "Doughnut Hole, with their extensive knowledge of rare and magical artifacts, is the only vendor known to stock such an item from the Void Rift.",
    "shippingDetail": "Ships via Dark Veil Express, ensuring secrecy and safe delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until Start of Next Turn (Tidal Surge), or 1 Minute (Star Road Tether)",
      "endsWhen": "The start of your next turn ends the effect of Tidal Surge. The attunement ends when you become unattuned to the Star Road's ebb and flow, which lasts for 1 minute.",
      "charges": "Unlimited"
    },
    "priceReason": "The item’s rarity and magical properties justify a price of 1000 XP.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T01:58:42.269536+00:00",
    "aiReviewedAt": "2026-07-22T01:58:42.269536+00:00",
    "aiReviewVersion": 1
  },
  "dragon_breath_insurance": {
    "id": "dragon_breath_insurance",
    "name": "Dragon-Breath Insurance Policy",
    "description": "The Dragon-Breath Insurance Policy is a notarized contract forged from enchanted parchment and sealed with firestone dust, providing peace of mind against fiery perils. For one year, this ancient document ensures you suffer half damage from all fire-based attacks. If the flames ever claim your life, your body will be restored by dawn, sparing you the cruel embrace of death’s breath. This policy must be renewed annually to maintain its protective grace.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Halved Fire Damage",
      "Lifeguard Against Flames"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Notarized Scroll via Swift Harpy Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Halved Fire Damage",
        "rules": "While this policy is active, you take only half damage from fire-based attacks. This effect does not apply to attacks made by yourself or creatures allied with you."
      },
      {
        "title": "Lifeguard Against Flames",
        "rules": "If you die as a result of fire damage within the year, your body will be restored at dawn, returning you to life and health. This use is limited to once per policy term."
      }
    ],
    "levelRequirementReason": "This policy provides basic protection suitable for adventurers regardless of their level.",
    "vendorReason": "Wario Direct specializes in unique and rare contracts that can protect you from the unpredictable dangers of the wild.",
    "shippingDetail": "The document is delivered by a swift harpy courier, ensuring it arrives safely and on time for your renewal.",
    "usage": {
      "activation": "Passive effect upon purchase; renewed annually.",
      "duration": "One year from the date of purchase or renewal.",
      "endsWhen": "Upon expiration of one year or if not renewed.",
      "charges": "Unlimited uses per policy term, limited to one restoration."
    },
    "priceReason": "The price reflects a balanced cost for providing significant protection against fire-based threats for an entire year.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T01:59:08.896667+00:00",
    "aiReviewedAt": "2026-07-22T01:59:08.896667+00:00",
    "aiReviewVersion": 1
  },
  "dragon_egg_incubation": {
    "id": "dragon_egg_incubation",
    "name": "Dragon Egg Incubation Service",
    "description": "The Dragon Egg Incubation Service guarantees the hatching of any dragon egg within six months, ensuring the birth of a majestic creature straight from the heart of legend. A dedicated trainer is included to teach the hatchling basic obedience for its first year, forging a bond that transcends mere training. The service includes all food costs for the first year and ensures the dragon becomes your loyal companion, its CR determined by the whimsical discretion of the DM.",
    "category": "services",
    "price": 1000,
    "icon": "🐉",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Guaranteed Hatching Within Six Months",
      "Professional Trainer Included"
    ],
    "vendor": "dragon_sanctuary",
    "shippedBy": "Expert Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hatched Dragon Companion",
        "rules": "Upon successful incubation, a dragon hatches within six months. The trainer ensures the hatchling learns basic obedience for its first year, creating an unbreakable bond between master and pet."
      },
      {
        "title": "Loyalty and Training",
        "rules": "The dragon becomes your loyal companion with CR determined by the DM's discretion. The service includes all food costs for the first year, ensuring a healthy and well-trained dragon at your side."
      }
    ],
    "levelRequirementReason": "Any adventurer can start this journey to bring a legendary creature into the world.",
    "vendorReason": "Dragon Sanctuary specializes in the care and training of dragons, making them the perfect vendor for this service.",
    "shippingDetail": "The courier ensures safe delivery within six months.",
    "usage": {
      "activation": "Instantaneous upon purchasing the service.",
      "duration": "Ongoing effect until the dragon reaches one year of age.",
      "endsWhen": "Dragon reaches its first birthday.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a fraction of the cost to replicate this service elsewhere, ensuring it remains within reach for any adventurer.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-22T01:59:04.856741+00:00",
    "aiReviewedAt": "2026-07-22T01:59:04.856741+00:00",
    "aiReviewVersion": 1
  },
  "dragon_scale_armor_upgrade": {
    "id": "dragon_scale_armor_upgrade",
    "name": "Dragon Scale Armor Upgrade (Resistant)",
    "description": "Dragon Scale Armor Upgrade (Resistant) enhances your armor with scales from ancient, fiery dragons, granting you immunity to acid and resistance to fire. Crafted by the renowned Scale Crafters, these scales imbue your suit of armor with a fierce, living presence that crackles with raw dragon energy. The scales are so fine-grained they form an almost invisible network over the surface, yet their strength is unyielding, providing unparalleled protection against acid and flame in battle.",
    "price": 590000,
    "icon": "🐉",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Immunity to Acid",
      "Resistance to Fire"
    ],
    "vendor": "wyrmhide_shop",
    "shippedBy": "Drake Transport",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Immunity to Acid",
        "rules": "You gain immunity to acid damage. This effect persists as long as the Dragon Scale Armor Upgrade is active."
      },
      {
        "title": "Resistance to Fire",
        "rules": "You have resistance to fire damage while wearing this upgrade. The effect lasts for 1 hour, and you can use it once per short or long rest."
      }
    ],
    "levelRequirementReason": "This upgrade is designed for high-level adventurers who face constant threats from acid and fire-based enemies.",
    "vendorReason": "Scale Crafters are master blacksmiths known for their unique dragon-scale infusions, making them the ideal vendor for such a powerful item.",
    "shippingDetail": "Ships via express courier service provided by Drake Transport. Delivery takes 3 days, during which time the armor remains functional and protected from damage.",
    "usage": {
      "activation": "This upgrade is applied to your armor as an action, remaining active for 1 hour per use or until destroyed.",
      "duration": "1 hour",
      "endsWhen": "Destroyed by fire, expended after a short rest, or removed manually.",
      "charges": "Unlimited; you can reapply it once per short or long rest."
    },
    "priceReason": "The cost reflects the rarity and craftsmanship required to infuse dragon scales into armor. The upgrade's effects are limited by its durability, ensuring a fair price for such power.",
    "priceOriginal": 590000,
    "priceReviewedAt": "2026-07-22T01:59:12.370161+00:00",
    "aiReviewedAt": "2026-07-22T01:59:12.370161+00:00",
    "aiReviewVersion": 1
  },
  "dragonbreath_potion_brewery": {
    "id": "dragonbreath_potion_brewery",
    "name": "Dragonbreath Potion Brewery (Kit)",
    "description": "The Dragonbreath Potion Brewery (Kit) is a meticulously crafted alchemical device forged in the heart of ancient dragon realms. This kit can brew up to twenty potent fire breath potions each month, allowing you to unleash searing flames from your hands with a mere thought. The rare ingredients required for this potion are sourced only by Alchemical Drakes, ensuring unparalleled quality and potency. This item is not just a tool; it’s a piece of draconic heritage brought into your hands.",
    "price": 1000,
    "icon": "🥤",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Fire Breath Potion",
      "Rare Ingredient Requirement"
    ],
    "vendor": "potion_lab",
    "shippedBy": "Flame-Sealed Crate",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Fire Breath Potion",
        "rules": "When activated, this potion grants the user the ability to unleash fire breath as a bonus action. The breath deals 3d6 fire damage to all creatures in a 10-foot line. This effect lasts until the start of your next turn and can be used once per long rest."
      },
      {
        "title": "Rare Ingredient Requirement",
        "rules": "To brew these potions, you must have access to rare dragon ingredients. These are procured from Alchemical Drakes located in the heart of the Dragonspine Mountains. The process requires a successful DC 18 Craft (Alchemy) check each month."
      }
    ],
    "levelRequirementReason": "This kit demands a high level to properly handle its potent alchemical effects and ensure safe use.",
    "vendorReason": "Potion Lab is renowned for their expertise in alchemy and rare ingredient sourcing, making them the perfect vendor for this item.",
    "shippingDetail": "The crate is delivered via a specialized courier service that ensures safe delivery through extreme temperatures. It arrives with a cool pack to maintain potion freshness.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous, lasts until the start of your next turn",
      "endsWhen": "Starts of your next turn",
      "charges": "Unlimited per long rest"
    },
    "priceReason": "This price reflects the high value of dragon ingredients and the complexity of the alchemical process involved.",
    "priceOriginal": 670000,
    "priceReviewedAt": "2026-07-22T01:59:13.533440+00:00",
    "aiReviewedAt": "2026-07-22T01:59:13.533440+00:00",
    "aiReviewVersion": 1
  },
  "dragonfire_forge_hammer": {
    "id": "dragonfire_forge_hammer",
    "name": "Dragonfire Forge Hammer (Artifact)",
    "description": "The Dragonfire Forge Hammer, a hammer forged from the molten heart of a dragon and imbued with its fiery essence, glows with an inner flame that dances along its surface. Crafters who wield it can channel the raw power of dragons into their creations, making even the most mundane forge into a furnace of legend. Its wielder's hands are protected by a barrier of incorruptible fire, which repels all but the fiercest flames.",
    "price": 1000,
    "icon": "🔨",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Dragonfire Barrier",
      "Legendary Craft Boost"
    ],
    "vendor": "forge_temple",
    "shippedBy": "Wyrm Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dragonfire Barrier",
        "rules": "The wielder gains immunity to fire damage and advantage on saving throws against being ignited. This effect lasts until the end of their next turn."
      },
      {
        "title": "Legendary Craft Boost",
        "rules": "When crafting an item with a fire-based component, the wielder has advantage on the Craft check and can increase the success chance by 50%. This ability can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The hammer's power demands a master crafter to handle its fiery might responsibly.",
    "vendorReason": "Forgemaster of the Temple forges and sells items that harness the raw power of legend, including the Dragonfire Forge Hammer.",
    "shippingDetail": "The hammer is delivered by Wyrm Delivery, ensuring safe handling through enchanted means to prevent accidental ignition during transport.",
    "usage": {
      "activation": "Passive effect; activation occurs when the wielder crafts an item with a fire-based component.",
      "duration": "Until the end of the wielder's next turn or until the item is completed.",
      "endsWhen": "The effect ends after one use per long rest.",
      "charges": "Unlimited, but can only be used once per long rest."
    },
    "priceReason": "The hammer's rarity and unique crafting abilities justify its fair price of 1000 XP.",
    "priceOriginal": 620000,
    "priceReviewedAt": "2026-07-22T01:59:51.112199+00:00",
    "aiReviewedAt": "2026-07-22T01:59:51.112199+00:00",
    "aiReviewVersion": 1
  },
  "dragons_hoard_stabilizer": {
    "id": "dragons_hoard_stabilizer",
    "name": "Dragon's Hoard Stabilizer",
    "description": "The Dragon's Hoard Stabilizer is a meticulously crafted extradimensional safe, forged from ancient dragon scales and imbued with the essence of slumbering wyrm spirits. It creates a secure 500-cubic-foot space where stolen hoards are rendered harmless to all but their rightful owner. If tampered with, it triggers an alarm and unleashes a cataclysmic force—10d10 pounds of pressure from within, ensuring that only the most daring can attempt its contents.",
    "price": 1000,
    "icon": "💎",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Extradimensional Secure Stash",
      "Tamper Alarm & Force Trap"
    ],
    "vendor": "draconic_consortium",
    "shippedBy": "Young Dragon Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Extradimensional Secure Stash",
        "rules": "Activates as an action. The safe creates a stable extradimensional space that can hold up to 500 cubic feet of treasure. Only the owner or those with a successful DC 20 Wisdom (Perception) check can access it without triggering the alarm."
      },
      {
        "title": "Tamper Alarm & Force Trap",
        "rules": "If tampered with, the safe emits an immediate alarm and releases a force effect. A creature within 10 feet must succeed on a DC 20 Dexterity saving throw or take 10d10 force damage."
      }
    ],
    "levelRequirementReason": "Only those experienced enough to handle such ancient magic safely should wield the Dragon's Hoard Stabilizer.",
    "vendorReason": "The Draconic Consortium has exclusive access to the materials and techniques required for crafting this item.",
    "shippingDetail": "Ships via a courier dragon, ensuring safe delivery but also a delay of three days due to the mystical nature of the package.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Instantaneous creation and effect; lasts until accessed or tampered with.",
      "endsWhen": "Accessed by the owner, tampered with, or destroyed in a forceful event.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced as it provides significant utility without being overpowered, this item is priced to reflect its legendary rarity and craftsmanship.",
    "priceOriginal": 435000,
    "priceReviewedAt": "2026-07-22T01:59:39.318279+00:00",
    "aiReviewedAt": "2026-07-22T01:59:39.318279+00:00",
    "aiReviewVersion": 1
  },
  "dream_stone": {
    "id": "dream_stone",
    "name": "The Dream Stone",
    "description": "The Dream Stone, a glowing crystal of ethereal blue and silver, can manifest dreams into reality, bending time and space to bring visions to life. It is said that its power can transform even the smallest thought into a tangible construct, but those who dare to wield it must beware—its magic is fickle and unpredictable, capable of creating both marvels and nightmares. If shattered, the stone releases a nightmare fog that can cover an entire continent in darkness, driving all who encounter it mad with despair.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💤",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Manifest dreams into reality",
      "Transform into a giant version of yourself"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Dreamweaver Courier",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Dreamscapes Creation",
        "rules": "As an action, the wielder can focus their will to create a dream construct. This construct is temporary and has hit points equal to your level + Intelligence modifier (rounded down). The construct maintains its form for 1 minute or until it takes damage. If shattered, it releases a nightmare fog that lasts for 1 hour in an area of up to 30 feet radius centered on the point of shattering."
      },
      {
        "title": "Giant Form",
        "rules": "As a bonus action, the wielder can assume the form of their giant self. This form grants them a +2 bonus to Strength and Dexterity, increases their size by one category (growing from Medium to Large or larger), and confers a +10 foot increase in movement speed for 1 hour."
      }
    ],
    "levelRequirementReason": "Only those of great power can control the Dream Stone's volatile nature.",
    "vendorReason": "The Shamans of the Moonlit Grove are the custodians of ancient secrets and have access to such potent relics.",
    "shippingDetail": "Ships under a full moon, delivered only when the stars align.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Instantaneous for creation; 1 hour for giant form",
      "endsWhen": "Damage to dream construct; end of concentration on dreamscapes; 1 hour duration ends naturally",
      "charges": "Unlimited, but cannot be used in a way that would cause the wielder harm"
    },
    "priceReason": "Balanced at this price to reflect its rarity and danger.",
    "priceOriginal": 1200000,
    "priceReviewedAt": "2026-07-22T02:00:27.094367+00:00",
    "aiReviewedAt": "2026-07-22T02:00:27.094367+00:00",
    "aiReviewVersion": 1
  },
  "dream_stone_shard": {
    "id": "dream_stone_shard",
    "name": "Dream Stone Shard",
    "description": "The Dream Stone Shard is a shimmering fragment of the ancient stone that cradles dreamscapes. It hums softly, its magic pulsating in sync with slumber's breath. Crafted from the very essence of dreams, it grants access to the dream world at will and can manifest dream objects into reality for fleeting moments. However, those who wield it risk awakening Antasma, the Dreamhound, who might hunt them through the realms.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💤",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Enter the Dream World",
      "Manifest Dream Objects"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Pillow Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Dreamscapes Passage",
        "rules": "This effect allows the user to enter the dream world at will. The duration is instantaneous, and it requires an action. There are no save DCs or limitations on use."
      },
      {
        "title": "Dream Manifestation",
        "rules": "Activates as a bonus action, this effect manifests dream objects into reality for 1 minute. It has a range of touch and requires a successful DC 15 Conjuration check. The manifestation can be ended early by the user or if the shard is destroyed."
      }
    ],
    "levelRequirementReason": "Only those who have mastered their control over sleep magic are deemed worthy to wield this powerful shard.",
    "vendorReason": "The Gilded Gryphon, known for its extensive collection of forbidden and arcane items, naturally stocks the Dream Stone Shard among its wares.",
    "shippingDetail": "Delivered by a fleet of enchanted pillows, ensuring a soft landing and minimal chance of damage during transit.",
    "usage": {
      "activation": "Action or bonus action depending on effect used.",
      "duration": "Instantaneous for Dreamscapes Passage; 1 minute for Dream Manifestation",
      "endsWhen": "Destroyed, expended, or ended by the user when manifested objects are dismissed.",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the unique abilities it grants justify its moderate price in experience points.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T01:59:44.016574+00:00",
    "aiReviewedAt": "2026-07-22T01:59:44.016574+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_airship_tether": {
    "id": "dreamland_airship_tether",
    "name": "Airship Tether",
    "description": "The Airship Tether is a glowing strand of enchanted hemp that clings to your airship like a tethered cloud. Crafted by the Rakasha artisans in the Dreamlands, this magical rope ensures your vessel remains firmly attached to the ethereal sky. It glows with the soft hue of a distant star, providing a beacon of safety and a symbol of dreamweaver craftsmanship. Only those attuned by a captain or a dreamer can harness its full power, as it allows for seamless flight through the dream-veil clouds that shroud the skies above.",
    "price": 1000,
    "icon": "🛩",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Dream Veil Navigation",
      "Indestructible Tether"
    ],
    "vendor": "dreamland",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Dream Veil Navigation",
        "rules": "Allows your airship to navigate through dream-veil clouds without risk of becoming lost or disoriented. This effect is always active while the airship is attuned and tethered, providing a +4 bonus to all navigation checks made within dream-veil clouds."
      },
      {
        "title": "Indestructible Tether",
        "rules": "The Airship Tether cannot be cut or broken by any means, including magical attacks. It only breaks if the airship is forcibly removed from a dream realm or if the tethered airship is captured in a non-dream realm."
      }
    ],
    "levelRequirementReason": "Requires attunement by someone with a deep understanding of both aerial and dream realms.",
    "vendorReason": "Dreamland’s artisans have mastered the art of crafting items that bridge reality and dreams, making this tether one of their most prestigious works.",
    "shippingDetail": "Ships via the Rakasha Spirit Walk's ethereal couriers, ensuring safe passage through dream-veil clouds without interruption.",
    "usage": {
      "activation": "Passive effect while attuned and within a dream realm.",
      "duration": "Permanent until removed or captured outside of a dream realm.",
      "endsWhen": "The airship is forcibly taken from the dream realm or cut loose.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as an uncommon item, this tether offers significant utility without overshadowing other unique magic items.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T01:59:58.481421+00:00",
    "aiReviewedAt": "2026-07-22T01:59:58.481421+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_bob_omb_delivery_satchel": {
    "id": "dreamland_bob_omb_delivery_satchel",
    "name": "Bob Omb Delivery Satchel",
    "description": "The Bob Omb Delivery Satchel, a weathered leather pouch embossed with the Shy Guys union emblem, promises to deliver unexpected treasures or peculiar mishaps at your call. With every use, it dispatches two random items—either practical gear or whimsical curiosities—to nearby allies or enemies, ensuring that no one is left guessing what might appear next from this enigmatic satchel. Caution: Upon activation, there's a slim chance you'll become temporarily ensnared by the satchel’s chaotic delivery, leaving you momentarily immobilized.",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Random Item Delivery",
      "Bob Omb Delivery Failure"
    ],
    "vendor": "dreamland",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Item Delivery",
        "rules": "Activates as a bonus action. Delivers two random items to the nearest allied or enemy within 30 feet. The delivered items are either useful or absurd, with a 5% chance of triggering a delivery failure."
      },
      {
        "title": "Bob Omb Delivery Failure",
        "rules": "With a slim 1% success rate, activation leaves the user temporarily immobilized for 1 round as the satchel's chaotic energies bind them. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "Requires no specific level as it is a common item suitable for any adventurer.",
    "vendorReason": "Dreamland, known for its quirky and unpredictable items, naturally sells this satchel to adventurers seeking the unexpected.",
    "shippingDetail": "Ships via Bob-omb Rush Delivery with a guaranteed delivery within an hour of purchase in most regions. Some remote areas may experience delays up to one additional day.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Activation ends when the item is used or when the user becomes immobilized by a delivery failure.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Bob Omb Delivery Satchel's unique and unpredictable nature, combined with its guaranteed utility, justifies its price of 1000 XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T02:00:13.378472+00:00",
    "aiReviewedAt": "2026-07-22T02:00:13.378472+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_boos_property_key": {
    "id": "dreamland_boos_property_key",
    "name": "Boos Property Key",
    "description": "The Boos Property Key is a gleaming brass key embossed with spectral patterns, said to have been crafted by the malevolent Boos Real Estate Syndicate in the shadowed realms of Dream Land. It grants control over haunted properties, effectively placing them under your dominion and allowing you to extract vast sums from the property's tenants every turn. The key also triggers periodic monopoly events that can either enrich or decimate your wealth, depending on how well you manage these spectral holdings.",
    "price": 1000,
    "icon": "🏠",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants control over haunted properties",
      "Triggers Boos monopoly events every 5 turns"
    ],
    "vendor": "dreamland",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Control Over Haunted Properties",
        "rules": "When activated, the key grants temporary dominion over any property within Dream Land and Connectopia. This lasts until the end of your next turn or until you lose control due to a Boos monopoly event."
      },
      {
        "title": "Boos Monopoly Events",
        "rules": "Every 5 turns, a Boos monopoly event occurs. You must manage these events by either paying tribute or exploiting them for profit; failure may result in significant financial loss."
      }
    ],
    "levelRequirementReason": "This key requires minimal experience to use but demands strategic acumen and resourcefulness.",
    "vendorReason": "Dream Land's vendors, especially those with ties to the Boos Real Estate Syndicate, are privy to such dark treasures.",
    "shippingDetail": "Ships via special delivery, ensuring safe arrival of this spectral artifact.",
    "usage": {
      "activation": "Standard action",
      "duration": "Until the end of your next turn or Boos monopoly event",
      "endsWhen": "Losing control due to a Boos monopoly event or the end of your turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "The key's rarity and unique utility justify its moderate cost in XP.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T02:00:47.016928+00:00",
    "aiReviewedAt": "2026-07-22T02:00:47.016928+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_connectopia_item": {
    "id": "dreamland_connectopia_item",
    "name": "Nightmare Frontier Map",
    "description": "A cracked map showing haunted zones and frontier routes",
    "price": 1000,
    "icon": "🗺",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Allows travel between Dream Land and Connectopia",
      "Reveals hidden crafting stations in frontier zones",
      "Causes disorientation when used in dreamland",
      "Made by: Hammer Bros Handling"
    ],
    "vendor": "dreamland",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 3
  },
  "dreamland_fated_connector": {
    "id": "dreamland_fated_connector",
    "name": "Fated Puffball Keychain",
    "description": "The Fated Puffball Keychain is a cursed, misshapen puffball that dangles from a leather loop. Its surface is mottled with strange symbols and it hums inaudibly when shaken. This relic whispers of both realms, capable of opening portals between Dream Land and The Fated Place. It grants 10% damage reduction to all enemies within 30 feet for the duration of your turn, but triggers random hallucinations on you during travel that last until the end of your next turn.",
    "price": 1000,
    "icon": "🌫",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Portal Opener",
      "Damage Reduction"
    ],
    "vendor": "dreamland",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portal Opener",
        "rules": "As a bonus action, activate to open a portal between Dream Land and The Fated Place. This effect has a duration of 1 minute per level. The portal can be used once before it requires a long rest to recharge."
      },
      {
        "title": "Damage Reduction",
        "rules": "Grants you a +2 bonus to AC against all attacks made by enemies within 30 feet until the end of your next turn. This effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Fated Puffball Keychain requires a level 1 character to handle its inherent risks.",
    "vendorReason": "Dream Land's mystical creatures, like the Moonfang Pack, are the only ones capable of creating such relics and thus sell them exclusively.",
    "shippingDetail": "Ships within one week from Dream Land.",
    "usage": {
      "activation": "Bonus action to open a portal or as a reaction for damage reduction.",
      "duration": "Instantaneous activation; duration effects last until end of turn.",
      "endsWhen": "Reaches the stated recharge time and requires rest to be used again.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Fated Puffball Keychain is priced at 1000 XP due to its rarity, magical properties, and the time required for its creation by Dream Land's creatures.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T02:00:29.990347+00:00",
    "aiReviewedAt": "2026-07-22T02:00:29.990347+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_food_bomb": {
    "id": "dreamland_food_bomb",
    "name": "Nightmare Nibbler",
    "description": "The Nightmare Nibbler is a crumbly, moonlit snack that transforms you into a ravenous creature of hunger and obsession. When consumed, it grants temporary immunity to fear but also causes you to become fixated on food, disabling all fear-based abilities for two turns. This treat is crafted by the Moonfang Pack in their secret lairs under the ever-watchful eyes of the moon, ensuring that only the brave or foolish dare indulge.",
    "price": 1000,
    "icon": "🍽",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Food Obsession",
      "Fear Resistance"
    ],
    "vendor": "dreamland",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Food Obsession",
        "rules": "For two turns after consuming this snack, all fear-based abilities and saving throws are disabled. You become obsessed with food to the point of distraction."
      },
      {
        "title": "Fear Resistance",
        "rules": "You gain temporary immunity to fear effects for the duration of one short rest or until you consume another Nightmare Nibbler."
      }
    ],
    "levelRequirementReason": "This snack is accessible to all adventurers, as its effects are manageable by even the lowest levels.",
    "vendorReason": "Dreamland, known for its bizarre and whimsical treats, naturally stocks this moonlit delicacy.",
    "shippingDetail": "Shipped under a full moon, ensuring that the snack retains its magical properties.",
    "usage": {
      "activation": "Eaten as a snack",
      "duration": "Two turns after consumption",
      "endsWhen": "Ends when the duration expires or you consume another Nightmare Nibbler",
      "charges": "Unlimited"
    },
    "priceReason": "The Nightmare Nibbler is priced high due to its rare crafting process and the unique properties that make it a dangerous yet sought-after snack.",
    "priceOriginal": 200,
    "priceReviewedAt": "2026-07-22T02:00:54.233432+00:00",
    "aiReviewedAt": "2026-07-22T02:00:54.233432+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_item_name_here": {
    "id": "dreamland_item_name_here",
    "name": "Dreamland Puffball Amulet",
    "description": "A glowing puffball with a soft yet menacing aura",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Grants temporary immunity to nightmare dimensions",
      "Increases damage dealt to eldritch foes by 30%",
      "Causes minor hallucinations during combat",
      "Made by: Peach Loyalists"
    ],
    "vendor": "dreamland",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 5
  },
  "dreamland_memetic_satchel": {
    "id": "dreamland_memetic_satchel",
    "name": "Memetic Satchel",
    "description": "The Memetic Satchel, crafted from the neural fabric of a forgotten meme, is a digital trove that can store up to three ephemeral artifacts or dream fragments. Its stitched threads hum with chaotic data, and when opened, there's an unsettling 10% chance your thoughts will be inadvertently uploaded to the Internet, potentially turning you into a viral meme. This satchel is a relic of forgotten internet culture, now available from Dreamland's arcane vendors, who claim it holds the essence of the digital age.",
    "price": 1000,
    "icon": "🖥",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Digital Artifact Storage",
      "Meme Corruption Risk"
    ],
    "vendor": "dreamland",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Digital Artifact Storage",
        "rules": "This satchel can hold up to three digital artifacts or dream fragments. Once full, it cannot accept additional items until emptied."
      },
      {
        "title": "Meme Corruption Risk",
        "rules": "Each time the satchel is opened, there is a 10% chance that the user's memories will become corrupted and inadvertently uploaded to the internet. This effect lasts for 24 hours unless neutralized with a successful DC 15 Intelligence saving throw."
      }
    ],
    "levelRequirementReason": "The satchel requires a certain level of digital literacy and magical prowess to properly manage its volatile contents.",
    "vendorReason": "Dreamland is known for its unique and often bizarre artifacts, making the Memetic Satchel a fitting addition to their inventory.",
    "shippingDetail": "Ships via Cheep Cheep's express service with a delivery time of 48 hours.",
    "usage": {
      "activation": "Passive item effect when opened or interacted with.",
      "duration": "24 hours after opening unless neutralized by an Intelligence saving throw.",
      "endsWhen": "Memory corruption is neutralized via successful save or the satchel's contents are emptied.",
      "charges": "Unlimited, but requires daily maintenance to prevent memory corruption."
    },
    "priceReason": "The Memetic Satchel's rarity and unique digital capabilities justify its price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T02:01:30.953727+00:00",
    "aiReviewedAt": "2026-07-22T02:01:30.953727+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_puffball_cannon": {
    "id": "dreamland_puffball_cannon",
    "name": "Puffball Cannon",
    "description": "The Puffball Cannon is a quirky yet deadly weapon forged from twisted dreams and eldritch magic. Its barrel spits forth glowing puffballs that explode on contact, raining down fiery embers like a living storm. Crafted in the shadowy realms of Dreamland, this cannon is said to be powered by the very essence of nightmares themselves. Only usable within the Nightmare Dimensions, it deals 3d4 piercing damage and requires ten seconds between shots.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍽",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Eldritch Boom",
      "Nightmare Range"
    ],
    "vendor": "dreamland",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Eldritch Boom",
        "rules": "When the Puffball Cannon is fired, it expels a puffball that explodes on impact. This creates an area of effect centered on the target, dealing 3d4 piercing damage to all creatures within 5 feet. The explosion has no effect outside the Nightmare Dimensions."
      },
      {
        "title": "Nightmare Range",
        "rules": "The cannon can be fired up to 150 feet away with ease, making it a versatile weapon for long-range engagements. However, using it beyond this range reduces its effectiveness and may cause the puffballs to lose their potency."
      }
    ],
    "levelRequirementReason": "This weapon's eldritch nature requires a certain amount of experience and understanding of the dream realms.",
    "vendorReason": "Dreamland is the birthplace of such whimsical yet deadly creations, offering them to adventurers who dare to explore their shadowy realms.",
    "shippingDetail": "The cannon arrives wrapped in layers of protective enchantments to ensure it reaches its destination safely and intact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or the weapon is destroyed",
      "charges": "5 charges"
    },
    "priceReason": "The cannon's rarity and unique properties, combined with its limited usability within a specific dimension, justify this balanced price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T02:01:08.659616+00:00",
    "aiReviewedAt": "2026-07-22T02:01:08.659616+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_puffball_helm": {
    "id": "dreamland_puffball_helm",
    "name": "Puffball Helm",
    "description": "The Puffball Helm is crafted from ethereal mushroom matter and worn by dream-walking puffballs. It grants its wearer the ability to inflate and deflate, enhancing their speed in dream dimensions and absorbing ambient dream-dust for temporary buffs. The helm's surface pulses with a soft glow of luminescent spores that shimmer like starlight. Beware, for outside dream space, it reverts the user back to normal size with no effect.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Dreamspace Sprint",
      "Dream-Dust Absorption"
    ],
    "vendor": "dreamland",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dreamspace Sprint",
        "rules": "The wearer can use a bonus action to inflate their body for 1 minute, increasing their walking speed by 20% within dream dimensions. This effect ends when the user leaves dream space."
      },
      {
        "title": "Dream-Dust Absorption",
        "rules": "At the start of each of the wearer's turns in dream space, they absorb 1d6 dream-dust, granting temporary hit point recovery equal to half the dust amount absorbed. The absorption ends when the user leaves dream space."
      }
    ],
    "levelRequirementReason": "The Puffball Helm requires a certain level of arcane knowledge to properly utilize its dream-walking properties.",
    "vendorReason": "Dreamland is known for crafting items that bridge the gap between dreams and reality, making this helm a natural addition to their inventory.",
    "shippingDetail": "Delivered via dream courier, ensuring safe passage through the ethereal realms.",
    "usage": {
      "activation": "Bonus action (inflation)",
      "duration": "1 minute or until leaving dream space",
      "endsWhen": "Leaving dream space",
      "charges": "Unlimited"
    },
    "priceReason": "The Puffball Helm's rarity and unique crafting method justify its moderate price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T02:01:20.295593+00:00",
    "aiReviewedAt": "2026-07-22T02:01:20.295593+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_rings_of_mordor_echo": {
    "id": "dreamland_rings_of_mordor_echo",
    "name": "Rings of Mordor Echo",
    "description": "The Rings of Mordor Echo are twisted and dark, crafted from fragments of corrupted Ring of Power. These rings allow their wearer to manipulate dream logic within a ten-foot radius, bending reality to command. With each use, they can rewind time by ten seconds in the immediate vicinity, but at great cost; it drains 1000 hit points from the user and requires a skill check (DC 15) to activate effectively.",
    "price": 1000,
    "icon": "🎭",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Control over dream logic",
      "Rewind time"
    ],
    "vendor": "dreamland",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Control Over Dream Logic",
        "rules": "The wearer can exert temporary control over dream logic within a ten-foot radius. This effect is active for one minute and requires a successful skill check (DC 15) to activate. The duration ends when the user completes their next turn or if they take any action other than moving."
      },
      {
        "title": "Rewind Time",
        "rules": "The wearer can rewind time by ten seconds in a ten-foot radius for one use, which requires a successful skill check (DC 15). This effect is instantaneous and ends when the user takes an action or when the duration of control over dream logic expires."
      }
    ],
    "levelRequirementReason": "Requires a deep understanding of both magic and reality to wield these rings effectively.",
    "vendorReason": "Dreamland is known for its connections with other realms, making them the perfect vendor for items that bridge worlds like the Rings of Mordor Echo.",
    "shippingDetail": "The rings are shipped securely within a specially designed protective case to prevent accidental misuse.",
    "usage": {
      "activation": "Action or Reaction (Skill Check)",
      "duration": "1 minute or until the user takes an action",
      "endsWhen": "User completes their next turn or takes an action, or when dream logic control ends",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect the unique and dangerous nature of these rings.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T02:01:23.294667+00:00",
    "aiReviewedAt": "2026-07-22T02:01:23.294667+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_skull_cannon": {
    "id": "dreamland_skull_cannon",
    "name": "Skull Cannon of the Fated",
    "description": "The Skull Cannon of the Fated, crafted from the bones of ancient Moonfang Pack warriors, fires skulls that explode in a cacophony of dreams and nightmares, blurring reality and perception. Its shots deal 100% damage to all enemies within its path, forcing them into a state where they scream for three turns, temporarily incapacitating their ability to attack or defend. The cannon's wielder gains a burst of speed, increasing movement speed by 20%, allowing for swift retreats or advances in battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Skull Shrapnel",
      "Nightmare Screams"
    ],
    "vendor": "dreamland",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Skull Shrapnel",
        "rules": "The cannon fires skulls that explode on impact, dealing 100% damage to all enemies within a 30-foot line. This effect lasts for the duration of one battle and ends immediately if the wielder is incapacitated."
      },
      {
        "title": "Nightmare Screams",
        "rules": "All enemies hit by the cannon's shots are rendered unable to act normally for three turns, suffering a -2 penalty on all attack rolls and saving throws. This effect also prevents them from using reactions or bonus actions until it ends."
      }
    ],
    "levelRequirementReason": "Crafted by the Moonfang Pack, this powerful cannon requires a minimum level of 10 to master its chaotic and unpredictable nature.",
    "vendorReason": "Dreamland is renowned for their unique and cursed artifacts, making them the perfect vendor for such a fateful weapon.",
    "shippingDetail": "Due to the cannon's volatile nature, it must be shipped via Goomba Ground Delivery to ensure safe transport.",
    "usage": {
      "activation": "Requires a bonus action to fire and can only be used once per long rest.",
      "duration": "Effects last until the end of the battle or until the wielder is incapacitated.",
      "endsWhen": "The cannon's effects expire at the end of one battle or if the user becomes incapacitated.",
      "charges": "Unlimited, but can only be used once per long rest."
    },
    "priceReason": "Crafted from rare bones and enchanted with powerful magic, this cannon's price reflects its rarity and the effort required to master it.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T02:01:53.927682+00:00",
    "aiReviewedAt": "2026-07-22T02:01:53.927682+00:00",
    "aiReviewVersion": 1
  },
  "dreamland_sour_candy_cannon": {
    "id": "dreamland_sour_candy_cannon",
    "name": "Sour Candy Cannon",
    "description": "The Sour Candy Cannon is a whimsical yet potent weapon forged from the remnants of Dream Land’s abandoned candy factory. This cannon fires bursts of sugary energy that leave enemies both sticky and disoriented, making it a favorite among adventurers seeking to sweeten their victories. Each use diminishes your candy stash by 100 units, but the cannon’s unique construction ensures its durability in even the most challenging battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍬",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Sugary Burst",
      "Sticky Target"
    ],
    "vendor": "dreamland",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sugary Burst",
        "rules": "The Sour Candy Cannon fires a burst of sugary energy, dealing 3d4 piercing damage to all enemies within 3 meters. This effect lasts for 1 round and leaves targets sticky."
      },
      {
        "title": "Sticky Target",
        "rules": "For 1 round after being hit by the cannon’s attack, each enemy is reduced in mobility and movement speed by half as their limbs become temporarily glued together with a layer of hardened candy."
      }
    ],
    "levelRequirementReason": "This weapon is designed for beginners to help them gain experience without needing advanced combat skills.",
    "vendorReason": "Dream Land's surplus goods are often sold by their original creators, ensuring authenticity and quality.",
    "shippingDetail": "Ships via Bob-omb Express with a delivery delay of 2 days due to the candy's fragile nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, effect lasts for 1 round",
      "endsWhen": "The effect ends when the duration expires or the target is no longer within range",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced with its unique effects and limited to one use per fight, this weapon provides a fair value for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T02:01:38.231379+00:00",
    "aiReviewedAt": "2026-07-22T02:01:38.231379+00:00",
    "aiReviewVersion": 1
  },
  "dried_bouquet": {
    "id": "dried_bouquet",
    "name": "Dried Bouquet",
    "description": "This withered yet fragrant bouquet, crafted from ancient flowers, once bloomed in a forgotten garden of Pauline's estate. Though its petals have dried and turned to dust, it retains an ethereal scent that can soothe even the most weary soul. Holding this relic releases a gentle aroma that can restore 1 hit point when inhaled, and with a successful Charisma (Persuasion) check, you may avoid a single combat encounter by offering it as a gift.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥀",
    "stock": 20,
    "rarity": "junk",
    "effects": [
      "Restore 1 HP",
      "Avoid Combat"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scent of Rest",
        "rules": "When inhaled, this dried bouquet restores 1 hit point to the user. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Gift of Peace",
        "rules": "By spending an action to offer it as a gift, you may make a Charisma (Persuasion) check against a creature's Wisdom saving throw to avoid a single combat encounter. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and players who are just starting their journey in the world of adventure.",
    "vendorReason": "The toad town market, known for its eclectic mix of curiosities and forgotten treasures, often stocks this unique artifact.",
    "shippingDetail": "Ships via a reliable courier within three days, delivered fresh in its protective packaging.",
    "usage": {
      "activation": "Inhale or offer as a gift.",
      "duration": "Instantaneous for Scent of Rest; lasts until the end of your next turn for Gift of Peace.",
      "endsWhen": "Used up once per day limit is reached.",
      "charges": "Unlimited, but one use per long rest."
    },
    "priceReason": "The item's unique historical significance and limited utility justify its lower price point within the market.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T02:02:26.631531+00:00",
    "aiReviewedAt": "2026-07-22T02:02:26.631531+00:00",
    "aiReviewVersion": 1
  },
  "drink_this_and_grow_a": {
    "id": "drink_this_and_grow_a",
    "name": "Wario's Fake Mustache Grower Serum (Scam Serum!)",
    "description": "This vile concoction, labeled 'Wario's Fake Mustache Grower Serum,' is a slimy, glue-like substance that promises instant transformation into a mustachioed marvel like Wario himself. Drink it and within seconds, your face is adorned with a ridiculous yet unmistakable mustache—perfect for masquerades or pranks! However, the itching sensation is relentless, making concentration tasks nearly impossible. Beware, for this fake mustache falls off at the first gust of wind or dip in water, leading to an embarrassing reveal.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧪",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Mustache Mingle",
      "Itchy Discomfort"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stache Serum Ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mustache Mingle",
        "rules": "On activation, you gain a +2 bonus to your Disguise check for 1 hour when impersonating Wario. The effect ends early if you are hit by an attack or if the mustache falls off (e.g., in wind or water)."
      },
      {
        "title": "Itchy Discomfort",
        "rules": "While wearing the mustache, you have disadvantage on all Concentration checks and saving throws. The effect lasts until the mustache falls off."
      }
    ],
    "levelRequirementReason": "This item is designed for lower-level characters as a humorous, albeit uncomfortable, prank tool.",
    "vendorReason": "Wario's Beauty Scam Lab specializes in such cosmetic frauds, and this product fits their shady reputation perfectly.",
    "shippingDetail": "Delivered swiftly by the Stache Serum Ship; arrives within a day if not exposed to moisture or wind during transit.",
    "usage": {
      "activation": "Consume as an action.",
      "duration": "1 hour, until the mustache falls off.",
      "endsWhen": "Mustache falls off from exposure to water or wind, or you are hit by an attack.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its common rarity and comedic use as a prank item.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T02:02:07.970484+00:00",
    "aiReviewedAt": "2026-07-22T02:02:07.970484+00:00",
    "aiReviewVersion": 1
  },
  "druid_circle_nature_bark_armor": {
    "id": "druid_circle_nature_bark_armor",
    "name": "Druid Circle Nature Bark Armor",
    "description": "The Druid Circle Nature Bark Armor is a vest made from the bark of ancient trees, woven into a vest by the skilled hands of the Circle Barkweavers. It grants the wearer resilience in natural settings and protection against poisons derived from plant life. When exposed to fire, the armor's bark cracks, offering a visual warning of danger, but leaving the wearer vulnerable until it regenerates after an hour.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+1 AC in natural terrain",
      "Advantage on saves vs. poison from plants"
    ],
    "vendor": "druid_circle_grove",
    "shippedBy": "Tree Sap Seal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Natural Terrain Defense",
        "rules": "The armor provides a +1 bonus to AC when the wearer is in natural terrain such as forests, mountains, or plains. This effect lasts until the end of the wearer's next turn."
      },
      {
        "title": "Poison Resistance",
        "rules": "When exposed to poisons originating from plant life, the wearer gains advantage on saving throws against these effects. The poison resistance is active for 1 hour after initial exposure."
      }
    ],
    "levelRequirementReason": "The armor's craftsmanship and the magic imbued in its bark require a Druid of at least 5th level to properly wield it.",
    "vendorReason": "The Circle Barkweavers are the only ones who can create such intricate and powerful armor, as they have the necessary knowledge and materials from their sacred groves.",
    "shippingDetail": "Ships via Tree Sap Seal, a swift courier that ensures delivery within 3 days of order placement.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and lasts until the end of the wearer's next turn for natural terrain defense or 1 hour after initial poison exposure.",
      "endsWhen": "The effects end when the armor is removed, exposed to fire, or after 1 hour in the case of poison resistance.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the rarity and craftsmanship required for this unique piece of armor.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-22T02:02:28.379963+00:00",
    "aiReviewedAt": "2026-07-22T02:02:28.379963+00:00",
    "aiReviewVersion": 1
  },
  "druid_circle_nature_call_service": {
    "id": "druid_circle_nature_call_service",
    "name": "Druid Circle Nature Call Service",
    "description": "The Druid Circle Nature Call Service is a mystical leather-bound tome adorned with nature runes. When invoked, it summons 1d4 animals to your aid for an hour, which could be scouts or distractions in your favor. Summoned creatures are attuned to the natural world and grant you advantage on all Nature checks during their presence. However, they have a hearty appetite and will demand food from you after their task is done.",
    "price": 1000,
    "icon": "🌿",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Nature's Aid",
      "Advantage on Nature Checks"
    ],
    "vendor": "druid_circle_grove",
    "shippedBy": "Leaf Note",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Nature's Aid",
        "rules": "You can use an action to invoke the service, summoning up to 1d4 animals that act as scouts or distractions for you. The summoned creatures are under your control and will stay with you for one hour before dispersing on their own. The summoned animals have a CR of 1/8 each."
      },
      {
        "title": "Advantage on Nature Checks",
        "rules": "While the summoned animals are present, you gain advantage on all checks made with the Nature skill until they leave your service."
      }
    ],
    "levelRequirementReason": "This item is designed for druids and rangers who have a foundational understanding of nature.",
    "vendorReason": "Circle Druids are the masters of summoning and controlling natural creatures, thus making them the ideal vendors for this service.",
    "shippingDetail": "The tome is carefully packed within a leafy bundle to protect its arcane runes during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The summoned animals disperse after the hour or if dismissed by you",
      "charges": "Unlimited, but only one invocation per day"
    },
    "priceReason": "This item is priced to reflect its utility and the magical energy it consumes each time it's invoked.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T02:02:06.985625+00:00",
    "aiReviewedAt": "2026-07-22T02:02:06.985625+00:00",
    "aiReviewVersion": 1
  },
  "druid_circle_photosynthesis_coaching": {
    "id": "druid_circle_photosynthesis_coaching",
    "name": "Druid Circle Photosynthesis Coaching",
    "description": "The Druid Circle Photosynthesis Coaching turns you into a living solar panel, allowing you to absorb sunlight for nourishment. Your hair begins to grow thin, leafy tendrils, and your skin becomes a patchwork of photosynthetic cells. In exchange for this verdant power, you dry out like kindling; fire damage now deals +1d4 extra damage to you as you're prone to catching flame. This service is the handiwork of the Druid Circle Sunbathers, who specialize in harnessing nature's gifts.",
    "category": "services",
    "price": 1000,
    "icon": "🌞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Sustain on Solar Nourishment",
      "Dry Kindling"
    ],
    "vendor": "druid_circle",
    "shippedBy": "Solar Beam Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sustain on Solar Nourishment",
        "rules": "As a bonus action each morning, you can spend one hour in the sun to gain nourishment for 7 days. You cannot consume normal food during this period."
      },
      {
        "title": "Dry Kindling",
        "rules": "You are vulnerable to fire damage. When you take fire damage, it deals +1d4 extra damage to you as your dry skin ignites easily."
      }
    ],
    "levelRequirementReason": "This service requires a basic understanding of nature and its elements, suitable for those at least third level.",
    "vendorReason": "The Druid Circle Sunbathers are renowned experts in converting sunlight into sustenance and power, making them the only merchants to offer this unique coaching.",
    "shippingDetail": "Delivered by Solar Beam Courier within three days of purchase. The service is not affected by weather or nightfall.",
    "usage": {
      "activation": "Bonus action each morning (in sunlight)",
      "duration": "7 days",
      "endsWhen": "You consume normal food, or the effect's duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The coaching is priced at 1000 XP because it provides a unique and potent connection to nature, enhancing both your abilities and vulnerabilities.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T02:02:37.603298+00:00",
    "aiReviewedAt": "2026-07-22T02:02:37.603298+00:00",
    "aiReviewVersion": 1
  },
  "druid_circle_root_dug_oven": {
    "id": "druid_circle_root_dug_oven",
    "name": "Druid Circle Root Dug Oven",
    "description": "The Druid Circle Root Dug Oven is an earth oven crafted by the Earthshapers of the grove, its core a network of roots that insulate and retain heat. Digging this oven into the ground takes time but ensures your stews simmer perfectly in the heart of the earth. The roots not only bake with precision but also infuse your meals with a subtle flavor reminiscent of the ancient soil itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Earth-baked perfection",
      "Root-infused flavors"
    ],
    "vendor": "druid_circle_grove",
    "shippedBy": "Root Roast Rig",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Earth-Baked Perfection",
        "rules": "When used for cooking, this oven provides advantage on checks to create natural recipes. The effect lasts until the meal is ready."
      },
      {
        "title": "Root-Infused Flavors",
        "rules": "The roots infuse stews with a unique flavor that grants the eater advantage on saving throws against poison effects for 1 hour after consuming the meal. This effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "This item is designed to assist any druid, regardless of level, in perfecting their natural recipes.",
    "vendorReason": "The Earthshapers who crafted this oven are the best at ensuring it meets the highest standards for both cooking and flavor.",
    "shippingDetail": "Ships directly from the grove, delivered with a ceremonial root bundle.",
    "usage": {
      "activation": "Instantaneous setup; used as an action to start cooking.",
      "duration": "Until the meal is ready or until the oven is dug up and reset.",
      "endsWhen": "The meal is cooked or the oven is dug up and reset.",
      "charges": "Unlimited uses, recharges daily."
    },
    "priceReason": "This price reflects the craftsmanship required for such an item, including the special roots used in its construction.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T02:02:34.972456+00:00",
    "aiReviewedAt": "2026-07-22T02:02:34.972456+00:00",
    "aiReviewVersion": 1
  },
  "druid_circle_root_vegetable_stew_recipe": {
    "id": "druid_circle_root_vegetable_stew_recipe",
    "name": "Recipe: Druid Circle Root Vegetable Stew",
    "description": "The Recipe: Druid Circle Root Vegetable Stew, a testament to ancient forest wisdom, is a hearty elixir crafted from roots that have been foraged in sacred groves. This stew, simmered over an open flame and blessed by nature spirits, grants the imbiber a deep connection with the wild. Consuming it allows one to move through dense foliage as if on familiar terrain and restores vitality after long days spent in the woods.",
    "price": 1000,
    "icon": "🍲",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Nature's Bounty",
      "Healing Simmer"
    ],
    "vendor": "druid_circle_grove",
    "shippedBy": "Rooty Recipe Roll",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Nature's Bounty",
        "rules": "When consumed, this stew grants advantage on all Nature (Survival) checks for 4 hours. Additionally, the user gains the ability to move through difficult terrain as if it were normal ground for a duration of 1 hour."
      },
      {
        "title": "Healing Simmer",
        "rules": "Upon consumption, the stew heals 1d6 hit points and grants temporary hit points equal to half that amount (rounded down). These effects last until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The complexity of foraging and preparing the stew requires a minimum understanding of natural environments.",
    "vendorReason": "As initiates of the forest, members of the Druid Circle Grove are well-versed in crafting such nourishing and potent recipes.",
    "shippingDetail": "The stew is shipped fresh, with a special delivery that ensures it arrives at your doorstep still simmering over a miniature flame.",
    "usage": {
      "activation": "Eating the stew",
      "duration": "4 hours for Nature advantage and 1 hour for movement through difficult terrain; temporary hit points last until next long rest",
      "endsWhen": "The effects expire naturally upon expiration or when consumed, whichever occurs first",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect the time and resources required for foraging and preparing such a complex recipe.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T02:03:35.402424+00:00",
    "aiReviewedAt": "2026-07-22T02:03:35.402424+00:00",
    "aiReviewVersion": 1
  },
  "druid_circle_tree_hugging_certification": {
    "id": "druid_circle_tree_hugging_certification",
    "name": "Druid Circle Tree Hugging Certification",
    "description": "The Druid Circle Tree Hugging Certification is a parchment adorned with leafy seals and signed by Druid Circle Arborists. It grants you an official license to embrace nature’s heart, allowing you to commune deeply with trees for up to 30 days. Trees recognize your bond, offering you advantage on Charisma checks when interacting with treants. However, the certification demands daily tree hugs; neglecting this requirement results in a disadvantage on all Nature and Charisma (Nature) checks.",
    "category": "services",
    "price": 1000,
    "icon": "🌳",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Advantage on Nature Checks",
      "Trees Are Friendly"
    ],
    "vendor": "druid_circle",
    "shippedBy": "Tree Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nature Check Advantage",
        "rules": "You gain advantage on Nature checks for up to 30 days. This effect ends if you fail to hug a tree daily."
      },
      {
        "title": "Treant Friendship",
        "rules": "For the duration of the certification, trees are considered friendly towards you. You have advantage on Charisma (Persuasion and Insight) checks when interacting with treants. The effect expires upon losing the daily tree hug requirement."
      }
    ],
    "levelRequirementReason": "This certification is accessible to all adventurers, as it represents a basic understanding of nature.",
    "vendorReason": "Druid Circle Arborists are experts in the art and science of tree-hugging, offering this official certification.",
    "shippingDetail": "Delivered directly by enchanted owls, ensuring safe and timely delivery to your doorstep.",
    "usage": {
      "activation": "Daily tree hug required; gain advantage on checks for up to 30 days.",
      "duration": "Up to 30 days from initial certification",
      "endsWhen": "Failing to hug a tree daily results in disadvantage on checks until the next successful hug",
      "charges": "Unlimited, with daily hugging requirement"
    },
    "priceReason": "This balanced price reflects the certification's official nature and its limited duration.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T02:02:43.154298+00:00",
    "aiReviewedAt": "2026-07-22T02:02:43.154298+00:00",
    "aiReviewVersion": 1
  },
  "dry_bones_shell": {
    "id": "dry_bones_shell",
    "name": "Dry Bones Shell",
    "description": "The Dry Bones Shell is a tattered, weathered relic that once belonged to an ancient mariner of the Bone Coast. Its cracked surface glistens with a faint phosphorescence, and when shattered, it reassembles itself in a matter of minutes. This shell offers not just protection but also immunity to necrotic damage, making it a vital companion for any who venture into the realm of the undead. It is said that those who wear this shell are blessed by the Bone Coast’s spirits, though they must beware its vulnerability to bludgeoning attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "☠️",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Armor",
      "Immunity"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Bone Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reassembly",
        "rules": "If the Dry Bones Shell is broken or destroyed, it reassembles itself in a minute. This effect occurs passively and does not require an action."
      },
      {
        "title": "Necrotic Immunity",
        "rules": "The wearer gains immunity to necrotic damage. This ability activates on contact with the shell and lasts until the end of their next turn, requiring no saving throw."
      }
    ],
    "levelRequirementReason": "The Dry Bones Shell is designed for those who are just beginning their adventures, providing a basic form of protection against necrotic threats.",
    "vendorReason": "Crypt Courier specializes in delivering ancient and mystical artifacts that can help adventurers navigate the dangers of the afterlife.",
    "shippingDetail": "Ships within a week from Bone Coast, delivered by Bone Crate Express using secure, enchanted transportation.",
    "usage": {
      "activation": "Passive effect upon donning the shell.",
      "duration": "Until the end of the wearer's next turn after damage is taken.",
      "endsWhen": "The shell reassembles itself completely or when the wearer removes it.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item’s rarity and its ability to provide vital protection against necrotic damage, making it a valuable asset for any adventurer.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T02:03:25.487564+00:00",
    "aiReviewedAt": "2026-07-22T02:03:25.487564+00:00",
    "aiReviewVersion": 1
  },
  "dry_bones_skull": {
    "id": "dry_bones_skull",
    "name": "Dry Bones Skull",
    "description": "The Dry Bones Skull is a withered skull that clatters ominously when disturbed. Crafted from ancient, petrified bones, it retains a lingering aura of death and decay. When thrown, it strikes with bone-chilling force, dealing 1d6 bludgeoning damage to the target. The skull can also bite, leaving behind a ghastly mark that forces the victim to make a DC 13 Constitution saving throw or be stunned for 1 round.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Bone Clatter",
      "Bite of Despair"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Bone Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bone Clatter",
        "rules": "The Dry Bones Skull can be thrown as a bonus action. It deals 1d6 bludgeoning damage to one target within 30 feet. The skull recharges after a long rest."
      },
      {
        "title": "Bite of Despair",
        "rules": "As a reaction when you or an ally is hit by a melee attack, the Dry Bones Skull can bite the attacker. The target must succeed on a DC 13 Constitution saving throw or be stunned for 1 round."
      }
    ],
    "levelRequirementReason": "This relic requires no level to use but benefits from the user's proficiency bonus.",
    "vendorReason": "The Valley Trading Post often deals in relics and artifacts of ancient origin, making it a logical place for such an item.",
    "shippingDetail": "Ships via Bone Box Express, known for its reliable delivery service.",
    "usage": {
      "activation": "Bonus action to throw; reaction when attacked by melee weapon.",
      "duration": "Instantaneous and duration varies (stunned or recharging).",
      "endsWhen": "The effect ends immediately upon a successful save or after a long rest for recharging.",
      "charges": "Unlimited, but the skull recharges after 24 hours."
    },
    "priceReason": "This price reflects its uncommon rarity and utility as both an offensive and defensive tool.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T02:02:52.428967+00:00",
    "aiReviewedAt": "2026-07-22T02:02:52.428967+00:00",
    "aiReviewVersion": 1
  },
  "dry_bowser_shell": {
    "id": "dry_bowser_shell",
    "name": "Shell of the Undead King",
    "description": "The Shell of the Undead King is a chilling fragment from Dry Bowser's once-forged armor, now corrupted by necrotic energies. Its cold touch numbs flesh and its weight seems to shift with each step you take, as if the very air around it grows heavier. This relic grants immunity to necrotic damage and resistance to fire, making it a formidable shield against both undead hordes and infernal foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "☠️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Immunity to Necrotic Damage",
      "Resistance to Fire Damage"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Bone Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Necrotic Immunity",
        "rules": "The Shell grants immunity to necrotic damage. It has no save DC and lasts until the start of your next turn after activation."
      },
      {
        "title": "Fire Resistance",
        "rules": "While wearing this shell, you have resistance to fire damage. This effect does not expend charges or use actions; it is always active while you wear the Shell."
      }
    ],
    "levelRequirementReason": "This relic offers protection suitable for even novice adventurers facing necrotic and fiery threats.",
    "vendorReason": "The Undead King's shell is a rare find, and only the most trusted vendors like Onyx Hand can offer such items to brave souls.",
    "shippingDetail": "Ships via Bone Courier, known for its reliable yet eerie service through haunted lands.",
    "usage": {
      "activation": "Wear or remove as a bonus action.",
      "duration": "Instantaneous activation; lasts until the start of your next turn after wearing it.",
      "endsWhen": "Removal by the wearer.",
      "charges": "Unlimited"
    },
    "priceReason": "The shell's rarity and its protection against two potent elemental threats justify this price.",
    "priceOriginal": 330000,
    "priceReviewedAt": "2026-07-22T02:03:39.729928+00:00",
    "aiReviewedAt": "2026-07-22T02:03:39.729928+00:00",
    "aiReviewVersion": 1
  },
  "duct_tape": {
    "id": "duct_tape",
    "name": "Toad Tape",
    "description": "Toad Tape, a roll of gleaming silver duct tape forged in the heart of an ancient forge, is said to have been blessed by the gods themselves. This versatile tool can mend nearly any broken item or seal leaks with a single application, but beware—its adhesive magic also has the strange side effect of muting bards and sages within earshot. The tape's origins are shrouded in legend, and its use is as much an art form as it is a practical skill.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📼",
    "stock": 50,
    "rarity": "common",
    "effects": [
      "Fixes broken items temporarily",
      "Mutes bards"
    ],
    "vendor": "faction_quartermaster",
    "shippedBy": "Roll the Luck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Repair",
        "rules": "As an action, you can apply Toad Tape to a damaged object or surface. The tape repairs one piece of equipment or seal up to a 10-foot square area. The effect is instantaneous and does not require any material components."
      },
      {
        "title": "Silent Spell",
        "rules": "Any bard or sage within 30 feet who attempts to cast a verbal spell must make a DC 15 Wisdom saving throw or be rendered speechless for 1 minute. This effect lasts until the target regains the ability to speak, and it can only occur once per day."
      }
    ],
    "levelRequirementReason": "Toad Tape's divine blessings make it a useful tool even for beginners.",
    "vendorReason": "The quartermaster has access to rare and exotic supplies, including this sacred tape from ancient forges.",
    "shippingDetail": "Delivered by Roll the Luck with a guaranteed delivery within three days of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous repair; verbal silence effect lasts until the target regains speech",
      "endsWhen": "The tape's adhesive magic fades after one hour or when exposed to water, whichever comes first.",
      "charges": "Unlimited, but only one verbal silence can occur per day"
    },
    "priceReason": "Toad Tape's divine properties and the rarity of its forging make it a valuable commodity in any adventurer's arsenal.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T02:03:39.671498+00:00",
    "aiReviewedAt": "2026-07-22T02:03:39.671498+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_beard_extensions": {
    "id": "dwarf_realms_beard_extensions",
    "name": "Dwarf Realms Beard Extensions",
    "description": "The Dwarf Realms Beard Extensions are a meticulously crafted beard extension, each strand a symbol of the wearer's lineage and respect for their heritage. These extensions add six inches to your beard, instantly elevating your presence in dwarven circles. However, they come with a price; you suffer disadvantage on Sleight of Hand checks due to the extra length, but gain advantage on Stealth checks for hiding small objects within the dense, bushy growth.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧔",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 Charisma with Dwarves (Respect the Beard)",
      "Disadvantage on Sleight of Hand Checks"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Beard Oil Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+1 Charisma with Dwarves",
        "rules": "When interacting with other dwarves, you gain a +1 bonus to your Charisma checks or saving throws. This effect is passive and applies at all times."
      },
      {
        "title": "Disadvantage on Sleight of Hand Checks",
        "rules": "Due to the extra length and thickness, you suffer disadvantage on Sleight of Hand checks. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "These extensions are designed for beginners who wish to enhance their appearance without the complexity of higher-level items.",
    "vendorReason": "Dwarf Realms is renowned for its quality beard products, and these extensions are no exception, providing both style and cultural respect.",
    "shippingDetail": "Ships within the next moon cycle; requires a special beard oil treatment upon arrival.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "Instantaneous, passive until end of your next long rest.",
      "endsWhen": "Ends at the start of your next long rest or when removed.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the quality craftsmanship and cultural significance, providing a fair value for dwarves seeking to enhance their appearance.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T02:04:20.913770+00:00",
    "aiReviewedAt": "2026-07-22T02:04:20.913770+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_beard_hair_net": {
    "id": "dwarf_realms_beard_hair_net",
    "name": "Dwarf Realms Beard Hair Net",
    "description": "The Dwarf Realms Beard Hair Net is a meticulously crafted mesh cap designed to keep your beard out of your food. This handy device not only ensures clean meals but also subtly enhances your social standing, as it prevents the telltale signs of disheveled facial hair among dwarven patrons. Crafted from durable steel and leather, this net has earned its place in the kitchen pantries of many a dwarf, though it might inadvertently make you appear slightly aloof to those who prize untrimmed beards.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥅",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Advantage on cooking checks: no hair in food",
      "Enhanced social grace: +1 to Charisma (Intimidation) checks when eating with dwarves"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Beard Oil Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Cooking Checks",
        "rules": "When making a cooking check, you gain advantage if you are wearing the Beard Hair Net. This effect lasts until the start of your next turn."
      },
      {
        "title": "Enhanced Social Grace",
        "rules": "While wearing the Beard Hair Net and interacting with dwarves over meals, you have advantage on Intimidation checks. This effect is active for 10 minutes after eating a meal together."
      }
    ],
    "levelRequirementReason": "This item provides basic utility without requiring advanced skills or levels.",
    "vendorReason": "Dwarf Realms Hygiene is known for its practical and high-quality beard care items, making the Beard Hair Net a staple in their catalog.",
    "shippingDetail": "Ships within one week; delivery may take longer during peak beard trimming season.",
    "usage": {
      "activation": "Worn as a hat-like accessory while eating or socializing.",
      "duration": "Active until the start of your next turn, except for the Intimidation effect which lasts for 10 minutes after dining with dwarves.",
      "endsWhen": "The effect ends when you remove the Beard Hair Net or at the end of the specified duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item provides practical utility without being overly powerful, balancing its common rarity.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T02:04:13.467460+00:00",
    "aiReviewedAt": "2026-07-22T02:04:13.467460+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_beard_mortgage": {
    "id": "dwarf_realms_beard_mortgage",
    "name": "Dwarf Realms Beard Mortgage",
    "description": "This parchment loan document represents a mortgage on your beard's value. Upon signing, you gain access to 1,000 gp but must repay it within 30 days or risk losing your beard to the clutches of the Dwarf Realms Bank. Your beard grows at an alarming rate—2 inches per day—and grants you advantage on Charisma checks with other dwarves during this period. Should you default, your beard becomes sentient and seeks a new host, leaving you beardless and indebted.",
    "category": "services",
    "price": 1000,
    "icon": "🧔",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Beard Growth",
      "Sentient Beard"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Gold Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Beard Growth",
        "rules": "Your beard grows at an accelerated rate of 2 inches per day until the loan is repaid. This effect provides you with advantage on Charisma checks specifically when interacting with other dwarves during this time."
      },
      {
        "title": "Sentient Beard",
        "rules": "If default occurs, your beard becomes sentient and seeks a new host, leaving you beardless and in debt to the Dwarf Realms Bank. This effect is permanent until the beard finds a new owner or is destroyed."
      }
    ],
    "levelRequirementReason": "This item's accessibility requires basic character progression before engaging with financial services.",
    "vendorReason": "Dwarf Realms Bank specializes in unique and unconventional loans, including those secured by one's appearance.",
    "shippingDetail": "The Gold Cart delivers the document within a week of purchase; expedited delivery is available for an additional fee.",
    "usage": {
      "activation": "Passive effect once signed and loan granted.",
      "duration": "30 days from the date of signing, or until repaid.",
      "endsWhen": "Loan repayment or default.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balanced value for a potentially life-altering loan secured by one's appearance.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T02:04:02.297494+00:00",
    "aiReviewedAt": "2026-07-22T02:04:02.297494+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_deep_mountain_home": {
    "id": "dwarf_realms_deep_mountain_home",
    "name": "Dwarven Deep Mountain Home (Sector)",
    "description": "The Dwarven Deep Mountain Home is a fully furnished, secure apartment nestled within the heart of a major Dwarven Hold. Its walls are lined with ancient runes that glow softly in the dark earth. Residents gain access to unparalleled artisan services and exclusive use of the Hold's vast libraries, fostering deep knowledge and craftsmanship. Crafted by Dwarf Realms artisans, each home is imbued with protective magic, ensuring unwavering security.",
    "price": 1000,
    "icon": "🏘️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Secure Residency",
      "Access to Artisan Services"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "The Handshake Courier Service",
    "levelRequirement": 14,
    "factionBonus": {
      "residence": 50
    },
    "effectDetails": [
      {
        "title": "Secure Residency",
        "rules": "The Dwarven Deep Mountain Home provides a permanent residence within the stronghold. It is protected by ancient dwarven wards, granting immunity to all area damage effects and reducing the DC of any social interaction checks made against its inhabitants by 5."
      },
      {
        "title": "Access to Artisan Services",
        "rules": "Residents can request services from the Hold's artisans with a successful DC 15 Wisdom (Insight) check. Each service provided is equivalent to one use, and the home recharges all uses at dawn each day."
      }
    ],
    "levelRequirementReason": "Only seasoned explorers capable of navigating deep earth hazards are permitted in such secure environs.",
    "vendorReason": "Dwarf Realms Gate is the sole provider of these prestigious residences, ensuring only those who meet their rigorous standards receive one.",
    "shippingDetail": "Specialized dwarven wagons transport each home, ensuring safe and timely delivery. The journey takes three days from the Hold to any destination within the realm.",
    "usage": {
      "activation": "Instantaneous upon arrival at a specified location within a major Dwarven Hold.",
      "duration": "Permanent until destroyed or abandoned.",
      "endsWhen": "The home is vacated and not maintained, or it is deliberately destroyed by its owner.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the cost of crafting a secure, permanent residence within a Dwarven stronghold, including artisan services and magical protections.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-22T02:04:16.732607+00:00",
    "aiReviewedAt": "2026-07-22T02:04:16.732607+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_earthquake_generator": {
    "id": "dwarf_realms_earthquake_generator",
    "name": "Dwarven Earthquake Generator (Portable)",
    "description": "The Dwarven Earthquake Generator (Portable) is a compact device crafted from ancient stone and enchanted dwarvish metals. When activated, it burrows rapidly into the earth, triggering a localized tremor that shakes the ground for up to 300 feet in all directions. Structures within range must pass a DC 20 Dexterity saving throw or collapse instantly, sending debris and rubble in all directions. This device is the pinnacle of dwarvish engineering, forged by the hands of Dwarf Realms in their deep mines.",
    "price": 1000,
    "icon": " tremors",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Localized Earthquake",
      "Structural Collapse"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Heavy Artillery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Localized Earthquake",
        "rules": "The device burrows rapidly into the earth and triggers a localized tremor within a 300-foot radius. Structures in the area must make a DC 20 Dexterity saving throw or collapse immediately, creating a hazard zone for any creatures caught in its path."
      },
      {
        "title": "Structural Collapse",
        "rules": "Any structures within the 300-foot radius of the tremor must succeed on a DC 20 Dexterity saving throw to remain standing. Failure results in immediate collapse, creating unstable rubble that can hinder movement or create additional hazards."
      }
    ],
    "levelRequirementReason": "This device requires at least level 1 to operate safely and effectively.",
    "vendorReason": "Dwarf Realms Gate is known for its extensive dealings with the Dwarven Realms, making it a reliable source for such engineering marvels.",
    "shippingDetail": "The shipment requires specialized equipment due to the device's weight and size. It must be delivered by Heavy Artillery to ensure safe transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or the device is destroyed.",
      "charges": "10 charges, recharged after a long rest"
    },
    "priceReason": "The balanced XP price reflects the portable nature and strategic value of this engineering marvel.",
    "priceOriginal": 800000,
    "priceReviewedAt": "2026-07-22T02:04:16.759515+00:00",
    "aiReviewedAt": "2026-07-22T02:04:16.759515+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_forge_grill": {
    "id": "dwarf_realms_forge_grill",
    "name": "Dwarf Realms Forge-Grill",
    "description": "The Dwarf Realms Forge-Grill is a marvel of dwarven craftsmanship, capable of melting even mithril. This grill can tenderize any meat, no matter how tough or stone-like it may be. It grants advantage on cooking checks involving metal utensils (they won't melt in the process), ensuring your feasts are fit for gods. However, there's a catch—it has a 5% chance to turn your food into molten slag, which can disadvantage you on your next bite.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚒️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Melts Mithril",
      "Advantage with Metal Utensils"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Sturdy Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Melts Mithril",
        "rules": "Instantaneous effect. The grill can reach temperatures sufficient to melt mithril, allowing it to tenderize any meat, even stone-like substances."
      },
      {
        "title": "Advantage with Metal Utensils",
        "rules": "Grants advantage on cooking checks involving metal utensils (they won't melt). This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate this grill's versatility in any setting.",
    "vendorReason": "Dwarven artisans are known for their precision and craftsmanship, ensuring the quality of every item they produce.",
    "shippingDetail": "Ships via Sturdy Cart within a week.",
    "usage": {
      "activation": "Instantaneous effect when activated.",
      "duration": "Until the start of your next turn or until food is cooked.",
      "endsWhen": "The cooking process ends, or if the food turns to molten slag.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price considering its powerful yet balanced effects and rarity.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-22T02:04:27.776510+00:00",
    "aiReviewedAt": "2026-07-22T02:04:27.776510+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_gem_appraisal_service": {
    "id": "dwarf_realms_gem_appraisal_service",
    "name": "Dwarf Realms Gem Appraisal Service",
    "description": "The Dwarf Realms Gem Appraisal Service is a gemstone encased in a finely crafted wooden box, its surface etched with intricate Dwarven runes. This service not only boosts the value of your gems by +20% when sold but also enhances one gem per day, granting it a +1 modifier on any saving throw for 24 hours. The dwarves at Dwarf Realms Mine are known for their keen eyes and unparalleled expertise in gem appraisal, ensuring every gem is treated with the utmost care.",
    "price": 1000,
    "icon": "💎",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Gem Appraisal",
      "Saving Throw Boost"
    ],
    "vendor": "dwarf_realms_mine",
    "shippedBy": "Jewel Case Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Gem Appraisal",
        "rules": "When you sell a gem enhanced by this service, it gains +20% in value. This effect is passive and requires no activation."
      },
      {
        "title": "Saving Throw Boost",
        "rules": "Activate once per day to enhance one of your gems for 24 hours. The enhanced gem grants you a +1 bonus on any saving throw. This enhancement lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers, ensuring that even beginners can benefit from its appraisal expertise.",
    "vendorReason": "Dwarves have a centuries-old tradition of mining and gem appraisal, making them the perfect purveyors of this valuable service.",
    "shippingDetail": "The service is shipped via Jewel Case Express, ensuring safe and swift delivery to your doorstep within three days.",
    "usage": {
      "activation": "Activates once per day as a bonus action.",
      "duration": "24 hours.",
      "endsWhen": "At the end of your next long rest or when the gem is destroyed.",
      "charges": "1/Day"
    },
    "priceReason": "The service provides significant value, enhancing both the marketability and utility of gems for adventurers.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T02:04:32.621682+00:00",
    "aiReviewedAt": "2026-07-22T02:04:32.621682+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_gem_crusher_mortar": {
    "id": "dwarf_realms_gem_crusher_mortar",
    "name": "Dwarf Realms Gem Crusher Mortar",
    "description": "The Dwarf Realms Gem Crusher Mortar is a heavy, forge-made device that crushes hard crystals into fine powder with a resounding boom. Crafted by the Realm Stoneworkers in their cavernous workshops, its sturdy frame echoes like a mine, making it a favorite among dwarven miners and alchemists. With this tool, you gain advantage on mining-themed checks, and it produces a dust that can be used in crafting or alchemy.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Crushes hard crystals",
      "Advantage on mining-themed checks"
    ],
    "vendor": "dwarf_realms_mine",
    "shippedBy": "Crush Crystal Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crystal Crushing",
        "rules": "When you use the mortar to crush a crystal, you gain advantage on any mining-themed check made within the next hour."
      },
      {
        "title": "Crushing Advantage",
        "rules": "While holding this mortar, you have advantage on mining-related checks and crafting rolls that involve breaking or extracting materials from stone or metal."
      }
    ],
    "levelRequirementReason": "This tool is designed to be accessible for beginners in the mining trade.",
    "vendorReason": "The Dwarf Realms Mine is known for supplying miners with essential tools and this mortar is a staple among their stock.",
    "shippingDetail": "Ships via the Crush Crystal Crate, which ensures safe delivery of your tool from the Realm Stoneworkers' workshops.",
    "usage": {
      "activation": "Standard action to crush a crystal; passive while holding for advantage on mining checks.",
      "duration": "Instantaneous crushing effect; advantage lasts one hour per use.",
      "endsWhen": "Use ends when you no longer hold it or your next long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This tool is crafted with high-quality materials and by skilled dwarven artisans, making it a valuable yet accessible item for any miner.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T02:04:58.364700+00:00",
    "aiReviewedAt": "2026-07-22T02:04:58.364700+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_gem_dusted_biscuits_recipe": {
    "id": "dwarf_realms_gem_dusted_biscuits_recipe",
    "name": "Recipe: Dwarf Realms Gem-Dusted Biscuits",
    "description": "These biscuits are a beloved treat among Dwarven miners. Each bite is sprinkled with edible 'gem' sugar, crafted from crushed crystal quartz and seasoned with spice. When you eat one before mining or digging, your next Strength (Athletics) check for mining or excavation gains advantage, lasting until the start of your next turn. The recipe was perfected by Realm Bakers in the heart of the mountain mines, a cherished tradition passed down through generations.",
    "price": 1000,
    "icon": "🍪",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Gem-Dusted Biscuit",
      "Mining Advantage"
    ],
    "vendor": "dwarf_realms_mine",
    "shippedBy": "Sparkly Spud Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gem-Dusted Biscuit",
        "rules": "Eating one grants you advantage on your next Strength (Athletics) check for mining or excavation. This effect lasts until the start of your next turn."
      },
      {
        "title": "Mining Advantage",
        "rules": "The first time you eat a Gem-Dusted Biscuit before making such a check, you gain advantage on that check. You can only benefit from this effect once per short rest."
      }
    ],
    "levelRequirementReason": "This treat is suitable for all adventurers who wish to start their journey with a bit of luck.",
    "vendorReason": "As the official supplier of Realm Bakers, Dwarf Realms Mine ensures that this beloved snack is always available.",
    "shippingDetail": "Shipped via Sparkly Spud Scroll, these biscuits arrive fresh and crunchy every time.",
    "usage": {
      "activation": "Eating one biscuit before making a relevant check",
      "duration": "Until the start of your next turn",
      "endsWhen": "After you make the Strength (Athletics) check or until the start of your next turn, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The rare ingredients and artisanal process required to craft these biscuits justify their price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T02:04:35.353473+00:00",
    "aiReviewedAt": "2026-07-22T02:04:35.353473+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_geological_mapping_service": {
    "id": "dwarf_realms_geological_mapping_service",
    "name": "Dwarven Deep Geological Mapping (New Continent)",
    "description": "The Dwarven Deep Geological Mapping Service, a legendary offering from Dwarf Realms Gate, delves into uncharted territories to chart every secret beneath the earth's surface—ore veins as vast as ancient ruins, all within a region so expansive it could be a new continent. The map produced is not just a blueprint but an intricate 3D rendering of subterranean features, requiring two years of meticulous surveying and substantial investment in security. This service ensures that adventurers and miners can navigate the depths with precision, avoiding hidden dangers like old traps or unstable caverns.",
    "price": 1000,
    "icon": "🗺️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Complete 3D Map",
      "Two-Year Survey"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Expeditionary Force",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Complete 3D Map",
        "rules": "Upon completion, the service delivers a detailed, three-dimensional map of all underground features within a vast region. This map includes tunnels, ore veins, and even buried ruins. The map has no specified duration but is considered complete once the surveying team finishes their work."
      },
      {
        "title": "Two-Year Survey",
        "rules": "The geological mapping process takes two years to complete due to its meticulous nature and the need for heavy security investment to protect both the team and the site. The service requires a level 17 character, as only those of such experience can ensure the safety and success of the expedition."
      }
    ],
    "levelRequirementReason": "Only characters of at least level 17 possess the expertise and resources necessary to initiate this demanding geological survey.",
    "vendorReason": "Dwarf Realms Gate is renowned for its unparalleled expertise in mining and exploration, ensuring that adventurers receive accurate maps and secure information.",
    "shippingDetail": "The service is shipped by the Expeditionary Force, ensuring safe and timely delivery of the completed map to its recipient.",
    "usage": {
      "activation": "Requires a level 17 character or higher.",
      "duration": "Instantaneous upon completion by Dwarf Realms Gate.",
      "endsWhen": "The mapping process is complete and no additional use can be made once finished.",
      "charges": "Unlimited uses, as the service does not deplete or recharge."
    },
    "priceReason": "This service commands a price of 1000 XP due to its extensive time investment and the expertise required to ensure accuracy and security during the surveying process.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T02:04:52.995477+00:00",
    "aiReviewedAt": "2026-07-22T02:04:52.995477+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_geological_survey": {
    "id": "dwarf_realms_geological_survey",
    "name": "Dwarven Geological Survey (Custom)",
    "description": "The Dwarven Geological Survey (Custom) is an intricately crafted map woven from ancient metal threads and glowing crystals that chart the hidden veins of precious minerals beneath the earth's surface. This artifact reveals all valuable mineral deposits within a 10-mile radius, illuminating paths to untapped wealth in a region. It also highlights structural weaknesses in subterranean enemy bases, offering strategic insights to any who wield it. Crafted by Dwarf Realms using their time-honored techniques, this map is indispensable for those seeking both fortune and security.",
    "price": 1000,
    "icon": "⛰️",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Reveals all valuable mineral deposits within a 10-mile radius (underground)",
      "Highlights structural weaknesses in subterranean enemy bases"
    ],
    "vendor": "dwarf_realms_gate",
    "shippedBy": "Heavy Chart",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Reveal Mineral Deposits",
        "rules": "When activated, this map illuminates the locations of valuable minerals within a 10-mile radius. This effect is instantaneous and requires no save or action to activate."
      },
      {
        "title": "Highlight Structural Weaknesses",
        "rules": "This map also reveals any structural weaknesses in subterranean enemy bases, providing strategic advantages. It can be used once per day without expending charges."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to wield this intricate and powerful artifact.",
    "vendorReason": "Dwarf Realms Gate specializes in rare and exotic artifacts crafted by the most skilled dwarven artisans.",
    "shippingDetail": "Ships via Heavy Chart, ensuring safe delivery to your door within three game weeks.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Until the start of your next turn",
      "endsWhen": "The effect ends when you are no longer in a subterranean environment or if the map is destroyed.",
      "charges": "Unlimited, but can be used only once per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and strategic importance.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T02:04:53.775475+00:00",
    "aiReviewedAt": "2026-07-22T02:04:53.775475+00:00",
    "aiReviewVersion": 1
  }
};
