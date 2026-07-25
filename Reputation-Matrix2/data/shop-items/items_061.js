// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_061 = {
  "earth_land_rune_of_wario_luck": {
    "id": "earth_land_rune_of_wario_luck",
    "name": "Rune of Wario's Luck (Seriously!)",
    "description": "The Rune of Wario's Luck (Seriously!) is crafted from ancient stone imbued with a peculiar charm. It crackles with an eerie glow, promising fortune to those who wear it but also warning of unforeseen calamities. This rune can dramatically enhance your luck in finding valuable treasures, though the exact nature of its blessings remains unpredictable and often humorous. Be wary; the more you rely on it, the more likely you are to encounter mischief and mayhem that could prove disastrous.",
    "category": "premium",
    "price": 1000,
    "icon": "💰",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased chance of finding treasure",
      "chance for unexpected benefits"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "flying carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortune's Favor",
        "rules": "+10 bonus to one ability check or saving throw each day. This effect ends after three days."
      },
      {
        "title": "Mischief Attractor",
        "rules": "There is a 25% chance per long rest that an unwanted encounter with goblins occurs, which lasts until the next dawn."
      }
    ],
    "levelRequirementReason": "The rune's unpredictable nature requires a basic understanding of luck and misfortune to wield it effectively.",
    "vendorReason": "The guild has access to rare artifacts that can enhance one's fortune or misfortune, depending on the situation.",
    "shippingDetail": "Delivered swiftly by a flying carpet, ensuring safe and timely arrival of this potent rune.",
    "usage": {
      "activation": "Passive effect activated daily at dawn.",
      "duration": "24 hours per use.",
      "endsWhen": "After three days or when the wearer actively removes it.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The rune's unpredictable nature and the potential for both gain and loss make it a balanced purchase, suitable for those seeking to tip the scales of fortune.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:28:34.727713+00:00",
    "aiReviewedAt": "2026-07-23T22:28:34.727713+00:00",
    "aiReviewVersion": 1
  },
  "internet_glitch_orb": {
    "id": "internet_glitch_orb",
    "name": "Reality Distortion Fragment",
    "description": "The Reality Distortion Fragment is a pulsating orb of corrupted data, its surface shimmering with glitched code. When activated, it warps reality within a 10-foot radius for 1 minute, causing all enemies to suffer from temporary confusion and potentially transforming them into dancing hamsters—surprisingly aggressive ones. The fragment itself hums with an eerie glow, leaking streams of corrupted data that can teleport the wielder or any target up to 30 feet away at will.",
    "category": "curiosities",
    "price": 25000,
    "icon": "🌀",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "teleportation",
      "confusion"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "encrypted_drone",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Teleport",
        "rules": "The wielder or a target within range may be teleported up to 30 feet. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Confusion",
        "rules": "All creatures in a 10-foot radius are affected by the confusion condition for 1 minute. They have disadvantage on attack rolls, saving throws, and ability checks. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "This item requires high-level expertise to wield its chaotic effects without being overwhelmed.",
    "vendorReason": "The pixel_shop specializes in rare and bizarre artifacts, including those that bend reality in unpredictable ways.",
    "shippingDetail": "Ships via encrypted drone, ensuring the item arrives safely and undetected.",
    "usage": {
      "activation": "A bonus action to activate or deactivate the effect within its radius.",
      "duration": "1 minute per activation; ends when the effect is used again.",
      "endsWhen": "The effect expires after 1 minute, or if a new teleportation or confusion effect is activated.",
      "charges": "Unlimited uses between rests."
    },
    "priceReason": "This item's price reflects its legendary rarity and the chaotic nature of its effects, requiring significant XP to balance.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T22:28:51.264983+00:00",
    "aiReviewedAt": "2026-07-23T22:28:51.264983+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_suit": {
    "id": "internet_meme_suit",
    "name": "Distorted Denim Decoy",
    "description": "The Distorted Denim Decoy is a suit crafted from repurposed denim and layered with internet memes. When worn, it warps reality, making you appear as an endless cycle of distractions to nearby foes, who find themselves unable to focus on anything else but the suit's chaotic patterns. It’s guaranteed to attract unwanted attention, particularly from goblins, forcing them into a state where they mistake your movements for mere reflexes rather than threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "😂",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Distracts Nearby Foes",
      "Reduces Focus"
    ],
    "vendor": "cyber_market",
    "shippedBy": "automated_robot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distracts Nearby Foes",
        "rules": "When you activate the suit, all creatures within a 30-foot radius must succeed on a DC 12 Wisdom saving throw or become distracted by the suit for 1 minute. The save is made at the start of their turn each round they are exposed to the suit."
      },
      {
        "title": "Reduces Focus",
        "rules": "While wearing the suit, you gain a +2 bonus to your Charisma (Persuasion) checks and have advantage on Dexterity (Stealth) checks. The suit's effects last for 1 hour after activation or until a successful DC 15 Intelligence saving throw is made."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early in the campaign, allowing players to use it as they grow stronger.",
    "vendorReason": "The cyber market deals in quirky and tech-related items that would appeal to adventurers looking for unique gear.",
    "shippingDetail": "Ships via automated robot delivery, ensuring swift transit with minimal handling delays.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour or until a successful saving throw is made",
      "endsWhen": "A successful DC 15 Intelligence saving throw is made by any creature within range",
      "charges": "Unlimited"
    },
    "priceReason": "The suit's unique design and the complexity of its effects justify this price point.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:28:38.111643+00:00",
    "aiReviewedAt": "2026-07-23T22:28:38.111643+00:00",
    "aiReviewVersion": 1
  },
  "internet_glitch_shard": {
    "id": "internet_glitch_shard",
    "name": "Quantum Pixel Fragment",
    "description": "Recovered from a corrupted server core, this Quantum Pixel Fragment pulses with raw digital energy. When wielded, it grants its user fleeting glimpses of future events—though these visions can be as confusing as they are cryptic. The shard’s activation can leave the user’s vision temporarily distorted and their senses overwhelmed by a kaleidoscope of colors and static. Use this fragment at your own risk; its effects are unpredictable but potentially invaluable in times of crisis.",
    "category": "equipment",
    "price": 1000,
    "icon": "👾",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "fleeting_precognition",
      "visual_distortion"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Fleeting Precognition",
        "rules": "Activating the shard grants the user a single, fleeting glimpse into the immediate future. This effect lasts for 1 round and has no save DC or duration requirements; however, it can only be used once every long rest."
      },
      {
        "title": "Visual Distortion",
        "rules": "For 1 minute after activation, the user’s vision becomes a chaotic blur of colors and static. The user gains blindsight out to 30 feet in all directions but suffers a -2 penalty to all Dexterity (Stealth) checks while in this state."
      }
    ],
    "levelRequirementReason": "The fragment’s raw digital energy requires a high level of magical discipline and arcane knowledge to wield.",
    "vendorReason": "The cyber_market deals exclusively in advanced, corrupted tech artifacts, making the Quantum Pixel Fragment a fitting addition to their inventory.",
    "shippingDetail": "Ships via encrypted drone, with an additional delay of 24 hours due to the sensitive nature of the artifact's contents.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous (effect lasts for 1 round or until used again)",
      "endsWhen": "The effect ends after 1 round, and it can only be activated once per long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This fragment’s rarity and the unpredictable nature of its effects justify a moderate price point.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:29:20.226149+00:00",
    "aiReviewedAt": "2026-07-23T22:29:20.226149+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_scroll": {
    "id": "internet_firewall_scroll",
    "name": "Data Stream Sentinel",
    "description": "The Data Stream Sentinel is an ancient scroll, its surface etched with forgotten firewall runes that shimmer with a faint digital glow. Crafted by the now-vanished Technomancers of Ithara, this scroll can protect you from rogue bots and unsolicited notifications, though it’s not foolproof—some digital attacks still find ways through. When activated, it grants resistance to digital attacks and has a chance to disrupt enemy spellcasting, enhancing your defenses against cyber threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "resistance_to_digital_attacks",
      "chance_to_disrupt_enemy_casting"
    ],
    "vendor": "data_dealer",
    "shippedBy": "automated_tube",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Digital Attacks",
        "rules": "When the Data Stream Sentinel is activated, you gain resistance to digital attacks. This effect lasts for a short duration and ends when you take another action or rest."
      },
      {
        "title": "Chance to Disrupt Enemy Casting",
        "rules": "There is a chance that enemy spellcasters will be disrupted during the activation of the scroll. The chance increases with your level, but it does not affect creatures immune to magical effects. This effect lasts until you take another action or rest."
      }
    ],
    "levelRequirementReason": "This scroll is designed for beginners and those seeking basic digital protection.",
    "vendorReason": "The Data Dealer specializes in tech-related artifacts, making the Data Stream Sentinel a fitting addition to their inventory.",
    "shippingDetail": "Ships via automated tube within a week, delivery time may vary depending on your location.",
    "usage": {
      "activation": "Reaction",
      "duration": "Until you take another action or rest",
      "endsWhen": "You take another action or rest",
      "charges": "Unlimited"
    },
    "priceReason": "This scroll provides basic protection against digital threats, making it a solid investment for those looking to enhance their cybersecurity.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:29:05.933611+00:00",
    "aiReviewedAt": "2026-07-23T22:29:05.933611+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_rune_plate": {
    "id": "the_edge_rune_plate",
    "name": "Nullstone Guardian Plate",
    "description": "The Nullstone Guardian Plate is a hardened fragment of void-matter forged by ancient guardians. Its surface gleams with an eerie, starless light, and it whispers faintly of forgotten cosmic battles. This armor not only grants +3 AC against abyssal foes but also offers resistance to psychic damage, making you immune to the mind-warping influence of The Edge. When worn, it subtly regenerates your vitality, healing 1 hit point per round as long as you remain in a safe haven.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+3 AC vs Abyssals",
      "Resistance to Psychic Damage"
    ],
    "vendor": "final_shop",
    "shippedBy": "cosmic courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Void Defense",
        "rules": "While wearing the Nullstone Guardian Plate, you gain +3 AC against creatures of the Abyss. This effect is passive and does not require an action."
      },
      {
        "title": "Psychic Shield",
        "rules": "You have resistance to psychic damage while wearing this armor. The shield does not expire or deplete unless you are no longer in a safe haven, at which point its protection ceases."
      }
    ],
    "levelRequirementReason": "This plate requires significant cosmic energy and resilience to harness fully.",
    "vendorReason": "Final Shop deals exclusively in relics from other dimensions, including the Nullstone Guardian Plate.",
    "shippingDetail": "The armor is delivered through a cosmic courier, ensuring its arrival with minimal delay.",
    "usage": {
      "activation": "Passive effect",
      "duration": "While worn in a safe haven",
      "endsWhen": "You leave the safe haven or lose the Plate",
      "charges": "Unlimited"
    },
    "priceReason": "This armor's resistance and regenerative properties make it invaluable for adventurers facing psychic threats.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T22:28:51.559088+00:00",
    "aiReviewedAt": "2026-07-23T22:28:51.559088+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_beetle_scuttler": {
    "id": "the_edge_beetle_scuttler",
    "name": "Chitinous Void Crawler",
    "description": "The Chitinous Void Crawler, a resilient beetle mutated by The Edge's dark energies, is a fearsome yet oddly charming creature. Its chitin armor gleams with an ethereal glow, and it possesses an uncanny knack for vanishing into the shadows. This tiny ally can heal minor wounds, but its real power lies in its ability to slip through the cracks of reality itself, making it a valuable companion on any journey.",
    "category": "consumables",
    "price": 1000,
    "icon": "🐛",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals Minor Wounds",
      "Temporal Displacement"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heals Minor Wounds",
        "rules": "When activated by a bonus action, the Chitinous Void Crawler crawls over an injured creature, healing 1d4 hit points. The effect ends if the creature moves more than 5 feet away."
      },
      {
        "title": "Temporal Displacement",
        "rules": "The beetle can momentarily slip through time, causing it to vanish from sight for up to 1 minute. While invisible, it has advantage on stealth checks and can reappear in an unoccupied space within reach as a bonus action. This effect ends if the user takes any hostile action."
      }
    ],
    "levelRequirementReason": "The Chitinous Void Crawler's mutation makes it accessible to lower-level adventurers who require reliable healing and stealth.",
    "vendorReason": "Edge Outpost specializes in exotic creatures and items that originate from The Edge, making the Chitinous Void Crawler a natural addition.",
    "shippingDetail": "The beetle is delivered via winged courier with an overnight delivery guarantee for adventurers in urgent need of its services.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Heals), Up to 1 Minute (Temporal Displacement)",
      "endsWhen": "The creature moves more than 5 feet away (Healing), Taking any hostile action (Temporal Displacement)",
      "charges": "Unlimited"
    },
    "priceReason": "The Chitinous Void Crawler's unique combination of healing and stealth capabilities, coupled with its origin from The Edge, justifies the substantial price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-24T23:57:15.945326+00:00",
    "aiReviewedAt": "2026-07-24T23:57:15.945326+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronometric_orb": {
    "id": "the_edge_chronometric_orb",
    "name": "Temporal Flux Orb",
    "description": "The Temporal Flux Orb is a shimmering, iridescent sphere that pulses with raw temporal energy. Crafted from ancient Chronolith fragments and bound by arcane rituals, it allows you to momentarily reverse time for one action—a perfect tool for rescuing lost items or correcting critical mistakes in combat. However, the orb's power comes at a cost; each use creates a fleeting ripple in the fabric of reality that can have unforeseen consequences.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Rewind Time (once per day)",
      "Temporal Ripple"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Chrono Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a bonus action, you may rewind your last action. The target of any attack made by you during this time is immune to the effects for one round. This effect has no range and lasts until used or canceled. You can only use this ability once per day."
      },
      {
        "title": "Temporal Ripple",
        "rules": "There is a 5% chance each time you rewind your last action that you will inadvertently create a minor temporal ripple, which could cause a small but noticeable disruption in the timeline within a 30-foot radius. This effect has no save DC and does not require an ability check."
      }
    ],
    "levelRequirementReason": "This item is designed for even the most novice adventurers to have access to its time-warping abilities, making it a versatile tool in any adventuring party.",
    "vendorReason": "As one of the leading suppliers of arcane and temporal curiosities, Edge Outpost naturally stocks this item.",
    "shippingDetail": "The Chrono Courier Service ensures timely delivery of your Temporal Flux Orb within a week.",
    "usage": {
      "activation": "Bonus action to rewind last action",
      "duration": "Instantaneous (effect lasts until used or canceled)",
      "endsWhen": "Used, canceled by the user, or if a temporal ripple occurs",
      "charges": "1 use per day"
    },
    "priceReason": "The Temporal Flux Orb offers a powerful but limited ability to manipulate time, making it a valuable but not overpowered tool for adventurers.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-23T22:29:29.000617+00:00",
    "aiReviewedAt": "2026-07-23T22:29:29.000617+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rune_of_protection": {
    "id": "middle_earth_rune_of_protection",
    "name": "Stoneheart Amulet",
    "description": "The Stoneheart Amulet is a hefty amulet crafted from a fragment of an ancient dwarven forge stone, radiating a warm glow that hints at its protective powers. It's said to ward off minor tremors and goblin grumblings, making it ideal for adventurers navigating treacherous terrains. The amulet's warmth brings comfort and reassurance, while its origin from the heart of a dwarven forge imbues it with resilience against earth-based threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "warding_tremor",
      "dwarven_resilience"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Warding Tremor",
        "rules": "The amulet grants the wearer a +1 bonus to AC and provides resistance to all damage from tremors. It also has a chance to stagger nearby goblins on tremor events."
      },
      {
        "title": "Dwarven Resilience",
        "rules": "When the wearer is exposed to an earth-based attack or effect, they can use a bonus action to activate the amulet's power for 1 minute. This grants them advantage on saving throws against tremors and goblin grumblings."
      }
    ],
    "levelRequirementReason": "The amulet's protective nature is accessible to all adventurers, making it a versatile choice.",
    "vendorReason": "Dwarves are renowned for their craftsmanship and the amulet's dwarven origins make it a fitting product of their forge.",
    "shippingDetail": "Shipped via sturdy cart, ensuring safe delivery through treacherous terrains.",
    "usage": {
      "activation": "Bonus action to activate for 1 minute during tremor events.",
      "duration": "1 minute per activation",
      "endsWhen": "The duration ends when the effect is used or when the wearer leaves a dangerous area.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced to reflect its dwarven craftsmanship and versatile protective abilities.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:29:23.587825+00:00",
    "aiReviewedAt": "2026-07-23T22:29:23.587825+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_whispering_petal": {
    "id": "middle_earth_whispering_petal",
    "name": "Sylvan Echo Blossom",
    "description": "The Sylvan Echo Blossom, a single iridescent petal from an ancient forest flower, seems to hum with the whispers of time itself. When held close, it grants you a fleeting connection to the natural world, allowing you to understand the murmurs of nature and navigate through hidden paths undetected by those who do not listen closely enough. The petal's glow intensifies as you focus your intent on either finding secret ways or soothing restless sprites with its ancient wisdom.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌸",
    "stock": 42,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "detect_nature_1",
      "chance_to_find_hidden_paths_2"
    ],
    "vendor": "elven_market",
    "shippedBy": "messenger_bird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Detect Nature",
        "rules": "As a bonus action, you can briefly understand the murmurs of nature. This allows you to gain advantage on Perception checks made to notice natural phenomena or hidden creatures within 30 feet for 1 minute."
      },
      {
        "title": "Chance to Find Hidden Paths",
        "rules": "When using your movement in an area, there is a 25% chance that any hidden paths or secret doors are revealed to you. This effect lasts until the start of your next turn and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This blossom is accessible to beginners, as it requires no special training to use but still offers valuable insight into the natural world.",
    "vendorReason": "The elves of Lothlórien are masters of nature and often gather such rare and enchanted blossoms from the ancient woods they steward.",
    "shippingDetail": "Delivered swiftly by a messenger bird, ensuring the petal remains fresh and potent for its intended purpose.",
    "usage": {
      "activation": "Bonus action to detect nature or use chance to find hidden paths.",
      "duration": "1 minute (Detect Nature) / Instantaneous (Chance to Find Hidden Paths)",
      "endsWhen": "The effect ends when the duration expires or you finish a short or long rest.",
      "charges": "Unlimited, but only one use per rest."
    },
    "priceReason": "While common in origin, the rarity of such blossoms and their unique ability to bridge the gap between human perception and nature justify this higher price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:30:11.640931+00:00",
    "aiReviewedAt": "2026-07-23T22:30:11.640931+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_one_ring_fragment": {
    "id": "middle_earth_one_ring_fragment",
    "name": "Shard of Shadows",
    "description": "The Shard of Shadows is a jagged piece of ancient malice, its surface etched with dark runes that pulse with an unsettling cold. It whispers promises of power and control to those who dare approach it, but one false step may drive even the sanest mind into madness. This fragment pulses with raw shadow energy, capable of causing temporary confusion in foes within a 10-foot radius and creating a brief aura of darkness around its bearer.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "confusion_aura",
      "darkness_aura"
    ],
    "vendor": "shady_merchant",
    "shippedBy": "black_raven",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Confusion Aura",
        "rules": "When activated as an action, the Shard of Shadows creates a 10-foot radius area centered on you. Any creature in this area must succeed on a DC 15 Wisdom saving throw or become confused until the start of your next turn."
      },
      {
        "title": "Darkness Aura",
        "rules": "The Shard grants you a 10-foot radius darkness aura for 1 minute when activated as an action. You and friendly creatures within this area gain advantage on Stealth checks, but you have disadvantage on attack rolls against targets outside the darkness."
      }
    ],
    "levelRequirementReason": "Only those with a proven grasp of magic can wield such a dangerous artifact without succumbing to its influence.",
    "vendorReason": "The Shady Merchant has connections that allow him to source rare and forbidden artifacts like the Shard of Shadows.",
    "shippingDetail": "Delivered by Black Raven, known for its swift but darkly mysterious couriers who ensure the item’s arrival remains a mystery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation; lasts until end of next turn or destroyed",
      "endsWhen": "Destroyed if used against an ally within range, or after one use",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare and dangerous artifact, the Shard of Shadows is priced to reflect its unstable nature and potential for misuse.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:29:41.292306+00:00",
    "aiReviewedAt": "2026-07-23T22:29:41.292306+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_oceanic_charm": {
    "id": "teyvat_item_oceanic_charm",
    "name": "The Siren's Whisper Brooch",
    "description": "The Siren's Whisper Brooch is a delicate brooch forged from the heart of the ocean, its surface shimmering with the essence of the Geo Archon. Crafted by the artisans of Liyue, this brooch not only increases your resistance to water-based elemental attacks but also grants you a subtle charm that can distract and disarm even the most determined foes. The brooch's design is both practical and elegant, making it a favorite among those who navigate treacherous waters or face aquatic threats.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌊",
    "stock": 28,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "water resistance +20%",
      "distract enemy with aural charm"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_current",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Water Resistance",
        "rules": "Passive effect. Increases your resistance to water-based elemental damage by 20%. This bonus does not stack with other sources of water resistance."
      },
      {
        "title": "Aural Charm",
        "rules": "Active effect, requires a bonus action. When you successfully hit an enemy with a melee attack, there is a 35% chance that the target becomes distracted for 1 round (DC 14 Wisdom saving throw)."
      }
    ],
    "levelRequirementReason": "The Siren's Whisper Brooch requires at least level 2 to use effectively, as its charm effect benefits from a higher proficiency bonus and stronger attacks.",
    "vendorReason": "Liyue Harbor is renowned for its connection to the ocean and the artisans who craft items related to water and Geo magic.",
    "shippingDetail": "Ships via the Liyue Bay Current, ensuring a swift delivery straight from the heart of the ocean.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous for charm effect; lasts until the end of the target's next turn if successful",
      "endsWhen": "The charmed effect ends when the target successfully saves against it or is hit by another creature",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted from 7500 XP to 1000 XP, reflecting a more balanced price for an item that offers both passive and active benefits.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:29:45.692441+00:00",
    "aiReviewedAt": "2026-07-23T22:29:45.692441+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_godly_rune_of_balance": {
    "id": "teyvat_item_godly_rune_of_balance",
    "name": "Rune of Harmonious Flux",
    "description": "The Rune of Harmonious Flux is a shimmering artifact forged by the Archons themselves. Its surface crackles with elemental energy, a testament to Teyvat's delicate balance. Touching it grants immense power, but requires absolute focus; otherwise, you might summon a miniature thunderstorm that only affects nearby foes. This rune not only enhances your elemental attacks but also provides healing and defensive capabilities, making it an indispensable tool for any master of the elements.",
    "category": "premium",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Elemental Mastery",
      "Healing Aura"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Mastery",
        "rules": "When activated as a bonus action, this rune grants the wielder +50% to all elemental damage dealt. The effect lasts for 1 minute and can be maintained by expending an additional action each turn."
      },
      {
        "title": "Healing Aura",
        "rules": "This rune continuously heals the wielder for 20 hit points per second, but the aura also absorbs all incoming damage up to a maximum of 50 hit points before being exhausted. The healing and absorption effects can be maintained by expending an additional action each turn."
      }
    ],
    "levelRequirementReason": "This rune is designed for beginners to introduce them to the concept of elemental mastery, but its raw power makes it suitable only for those who have reached a certain level.",
    "vendorReason": "Inazuma Imports deals in rare and powerful artifacts, making this rune one of their most sought-after items.",
    "shippingDetail": "The rune is carefully shipped through the dimensional rift to ensure it reaches its destination intact.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute (renewable with an action)",
      "endsWhen": "Lost if the wielder ceases to focus on maintaining it or if they take damage from a source other than elemental attacks.",
      "charges": "Unlimited, as long as you maintain focus"
    },
    "priceReason": "The rune is priced at 1000 XP, reflecting its intermediate difficulty and the raw power it provides to new players.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T22:29:57.545859+00:00",
    "aiReviewedAt": "2026-07-23T22:29:57.545859+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chrono_shift_charm": {
    "id": "kivotos_item_chrono_shift_charm",
    "name": "Temporal Tickle Charm",
    "description": "This shimmering, metallic charm pulses with an eerie temporal energy, its surface etched with arcane symbols that whisper of forgotten timelines and untold secrets. When activated by a swift gesture, it momentarily bends the fabric of time, rewinding reality by a few fleeting seconds—perfect for avoiding unwanted confrontations or securing that last slice of cake. However, those who abuse its power risk invoking unpredictable paradoxes that could unravel entire worlds. Wario would indeed be *very* disappointed with such reckless misuse.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "rewind_time",
      "temporal_paradox_risk"
    ],
    "vendor": "student_store",
    "shippedBy": "quasit express courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "Activating the charm allows the wielder to rewind time by a few seconds. This effect is instantaneous and can be used as a reaction to avoid an unwanted encounter or secure a coveted item. The charm's power has no range, but it only functions when the wielder is aware of an immediate threat."
      },
      {
        "title": "Temporal Paradox Risk",
        "rules": "There is a 10% chance per use that the charm triggers a temporal paradox, causing minor disruptions in space-time. Characters within a 5-foot radius must succeed on a DC 12 Wisdom saving throw or be affected by the paradox for 1d4 rounds, experiencing disorienting effects and suffering 1d6 psychic damage."
      }
    ],
    "levelRequirementReason": "The charm's intricate design requires basic control over one's surroundings to activate it effectively.",
    "vendorReason": "The student store caters to curious and adventurous students who seek unique trinkets, making the Temporal Tickle Charm a perfect fit for its eclectic inventory.",
    "shippingDetail": "Delivered by mischievous quasits known for their unpredictable flight paths, which can sometimes cause minor delays or detours in transit.",
    "usage": {
      "activation": "reaction",
      "duration": "instantaneous",
      "endsWhen": "the effect is used or the paradox occurs",
      "charges": "unlimited"
    },
    "priceReason": "The charm's mythic rarity and unique temporal abilities justify its relatively modest price, balancing its powerful effects with practical limitations.",
    "priceOriginal": 230000,
    "priceReviewedAt": "2026-07-23T22:30:20.100329+00:00",
    "aiReviewedAt": "2026-07-23T22:30:20.100329+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_resonance_amplifier": {
    "id": "kivotos_item_resonance_amplifier",
    "name": "Harmonic Resonance Amplifier",
    "description": "The Harmonic Resonance Amplifier is a sleek, chrome device that amplifies magical energies with precision and flair. Crafted from enchanted metal, it hums with latent power, capable of boosting spell potency by +1d6 damage to all spells cast within the day. Its most peculiar feature is the 5% chance each time you cast a spell while holding it to summon a flock of singing pigeons, adding an unexpected musical flourish to battlefields or study halls alike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎶",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "spell_damage_boost",
      "musical_flare"
    ],
    "vendor": "academy_armory",
    "shippedBy": "drone",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spell Damage Boost",
        "rules": "While holding the Amplifier and concentrating on a spell, you can expend one use of an action to increase its damage by +1d6 for the duration of that casting. This effect does not stack with other damage boosts."
      },
      {
        "title": "Musical Flare",
        "rules": "There is a 5% chance each time you cast a spell while holding this device that a flock of singing pigeons will appear nearby, adding a whimsical and often comical touch to your magical endeavors. This effect can be suppressed by casting a non-magical action within the same round."
      }
    ],
    "levelRequirementReason": "Requires at least third level to handle its latent magical energies effectively.",
    "vendorReason": "The Academy Armory stocks this device as part of their specialized armament for aspiring spellcasters and scholars.",
    "shippingDetail": "Delivered by drone, arriving within an hour if ordered before noon.",
    "usage": {
      "activation": "Action or bonus action to boost spell damage; no activation required for musical flare effect.",
      "duration": "Instantaneous boost, lasts until the end of your next turn after casting a spell. Musical flair is a chance-based effect that occurs with each spell cast while holding it.",
      "endsWhen": "The boost ends when you stop concentrating on the spell or cast another one; musical flare ends if you cast a non-magical action within the same round.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique combination of utility and whimsy, suitable for third-level spellcasters.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:30:34.336463+00:00",
    "aiReviewedAt": "2026-07-23T22:30:34.336463+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_priority_scroll": {
    "id": "kivotos_item_priority_scroll",
    "name": "Academic Decree Scroll",
    "description": "The Academic Decree Scroll, issued by Headmaster Kivotos, is a parchment of ancient ink and hallowed paper. When unrolled, it grants the wielder temporary priority in the crowded halls of the academy, allowing for swift passage through student politics and securing coveted study spots with ease. However, its power is limited; misuse will not only diminish its effectiveness but also earn you a stern warning from the Headmaster’s office.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "priority_movement",
      "social_influence"
    ],
    "vendor": "club_supply",
    "shippedBy": "messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Priority Movement",
        "rules": "When activated as an action, this scroll grants the user the ability to navigate through crowds at double their normal speed for up to one minute. The effect ends if the user is no longer in a crowded area or if they use a movement action."
      },
      {
        "title": "Social Influence",
        "rules": "The scroll bestows +2d4 social influence points that can be spent on influencing others, such as classmates, teachers, or administrators. These points are consumed at the end of each turn and last for one hour per point invested."
      }
    ],
    "levelRequirementReason": "This scroll is designed to assist beginners in navigating the social dynamics of academia without requiring advanced magical prowess.",
    "vendorReason": "Club Supply carries this item as it caters primarily to students, who often require tools to navigate their academic environment more smoothly.",
    "shippingDetail": "Delivered by a trusted messenger, the Academic Decree Scroll is carefully handled and arrives within one day of purchase.",
    "usage": {
      "activation": "Activate as an action, consuming one charge.",
      "duration": "One minute or until no longer in a crowded area.",
      "endsWhen": "The effect ends if the user moves away from a crowded area or uses any movement action.",
      "charges": "Limited to three charges; recharged after completing a long rest."
    },
    "priceReason": "Balanced at 1000 XP, this scroll offers significant utility without being overpowered for its rarity and intended use.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:31:00.170657+00:00",
    "aiReviewedAt": "2026-07-23T22:31:00.170657+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_of_wonder": {
    "id": "connectopia_block_of_wonder",
    "name": "Block of Wonder",
    "description": "The Block of Wonder is a peculiar crystalline block that shimmers with an array of colors. When rubbed briskly, it pulses with warmth and releases a faint glow. This item is known to attract helpful scrap bots in abandoned areas, providing temporary luck to those who hold it. Its core material is said to be forged from ancient robotic remains, making it both a relic and a practical tool for survival.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "attracts_scrap_bots",
      "warmth_and_luck"
    ],
    "vendor": "block_smith",
    "shippedBy": "drone_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Attracts Scrap Bots",
        "rules": "When rubbed briskly, the Block of Wonder attracts nearby scrap bots within a 20-foot radius for 1 minute. The bots assist in minor tasks such as carrying light objects or repairing small mechanical parts. This effect ends when the block stops pulsing."
      },
      {
        "title": "Warmth and Luck",
        "rules": "The Block of Wonder generates a +1 bonus to saving throws against cold damage and provides temporary hit points equal to 2d4 (maximum 20) for an hour. This effect lasts until the block stops pulsing."
      }
    ],
    "levelRequirementReason": "The Block of Wonder is designed for adventurers just starting their journey, providing basic survival and assistance.",
    "vendorReason": "Block Smith specializes in crafting items from recycled materials, making the Block of Wonder a natural fit for his inventory.",
    "shippingDetail": "Ships via drone delivery within one business day of purchase.",
    "usage": {
      "activation": "Activate as a bonus action by rubbing the block briskly.",
      "duration": "Instantaneous activation, with effects lasting until the block stops pulsing.",
      "endsWhen": "The block's warmth and luck effects end when it is no longer being rubbed or when it runs out of internal power.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Block of Wonder offers both practical survival benefits and a unique narrative element, justifying its higher price.",
    "priceOriginal": 125,
    "priceReviewedAt": "2026-07-23T22:30:31.577790+00:00",
    "aiReviewedAt": "2026-07-23T22:30:31.577790+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_post_package": {
    "id": "connectopia_pioneer_post_package",
    "name": "Pioneer Post Package - Urgent!",
    "description": "The Pioneer Post Package - Urgent! arrives via swift drone courier, its sleek metallic packaging a testament to the efficiency of the Pioneer Postal Service. Inside lies a blueprint for upgrading your mining rig with cutting-edge technology, and a nutrient paste ration that, though it looks like dark sludge, is a secret blend of rare minerals and supercharged sustenance. This package isn't just vital; it's a symbol of the frontier's relentless push towards advancement.",
    "category": "faction",
    "price": 1000,
    "icon": "✉️",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "blueprint_mining_upgrade",
      "+10% nutrient_paste_efficiency"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "drone_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Blueprint Mining Upgrade",
        "rules": "Activates as an action. The miner gains a +2 bonus to all mining checks for the rest of the day, representing the advanced techniques detailed in the blueprint."
      },
      {
        "title": "Nutrient Paste Efficiency Increase",
        "rules": "+10% efficiency increase on all nutrient paste consumption until the end of your next long rest. This effect enhances both your stamina and recovery time during expeditions."
      }
    ],
    "levelRequirementReason": "The package contains advanced blueprints that require a certain level to fully understand, ensuring it's accessible only to experienced miners.",
    "vendorReason": "As the official courier of frontier innovations, Pioneer Post naturally distributes these packages directly from their drones.",
    "shippingDetail": "Ships via the Pioneer Postal Drone, which ensures a timely delivery within 24 hours of purchase.",
    "usage": {
      "activation": "Activates as an action upon opening and examining both items.",
      "duration": "Blueprint effect lasts until the end of your next long rest. Nutrient paste efficiency increase lasts until the end of your next long rest.",
      "endsWhen": "The effect ends when you finish a long rest or discard the package entirely.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The package's rarity and the advanced technology it contains justify its higher price, making it a significant investment for miners.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-23T22:30:52.370743+00:00",
    "aiReviewedAt": "2026-07-23T22:30:52.370743+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_rusty_mining_drill": {
    "id": "connectopia_rusty_mining_drill",
    "name": "Rusty Mining Drill - 'The Grinder'",
    "description": "The Grinder, a Rusty Mining Drill, is an ancient tool forged in the heart of forgotten mines. Its gears creak and metal groans under the weight of centuries, yet it still yields minerals with increased efficiency. However, its unpredictable nature means that overheating sparks can ignite, causing minor explosions that shower the area with molten ore. With careful handling, this relic can be a miner's dream, but always with the risk of fiery mishaps.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased_mining_speed",
      "chance_to_explode"
    ],
    "vendor": "craft_corner",
    "shippedBy": "rusty_railway",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Increased Mining Speed",
        "rules": "When you use The Grinder to mine, you gain a +5 bonus on mining checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Chance to Explode",
        "rules": "Once per short rest, The Grinder has a 20% chance to overheat and explode. On a successful DC 15 Dexterity saving throw, you are unaffected; otherwise, you take 3d6 fire damage."
      }
    ],
    "levelRequirementReason": "The Grinder's unpredictable nature and the risk of explosions necessitate higher skill and experience to handle.",
    "vendorReason": "Craft Corner specializes in rare, ancient tools like The Grinder, known for their unique capabilities and hazards.",
    "shippingDetail": "Shipped via Rusty Railway's express service with a 24-hour delivery window.",
    "usage": {
      "activation": "As an action, you use the drill to mine or dig.",
      "duration": "Instantaneous; lasts until your next turn unless exploded.",
      "endsWhen": "Exploded, recharged after a short rest, or destroyed by fire damage exceeding its hit points.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Grinder's unique capabilities and the risk it poses justify this balanced XP price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T22:31:00.166657+00:00",
    "aiReviewedAt": "2026-07-23T22:31:00.166657+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_rusty_grappler": {
    "id": "the_edge_rusty_grappler",
    "name": "Void-Touched Grappling Hook",
    "description": "The Void-Touched Grappling Hook appears forged from shadowsteel, its surface etched with ancient runes that glow faintly. This hook is renowned for its unparalleled reach and ability to latch onto even the most insurmountable surfaces, pulling enemies within striking distance or aiding swift ascents without exertion. However, it's wise not to fixate on it too long—rumors speak of those who've gazed upon it for extended periods finding themselves inexplicably drawn closer to its core.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔗",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Unmatched Reach",
      "Pull and Climb"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Winged Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Unmatched Reach",
        "rules": "The grappling hook provides a +2 bonus to reach attacks made against creatures within range. This effect lasts until the end of your next turn."
      },
      {
        "title": "Pull and Climb",
        "rules": "As an action, you can use the grappling hook to pull a creature within 30 feet toward you at half speed. You can also provide a +1 bonus to climbing checks for yourself or another creature within range."
      }
    ],
    "levelRequirementReason": "The intricate magic and shadowsteel composition of this tool demand a certain proficiency with ranged attacks.",
    "vendorReason": "The Edge Outpost is known for its extensive trade in exotic weapons, having sourced the Void-Touched Grappling Hook from distant starship salvage yards.",
    "shippingDetail": "Delivered swiftly by the Winged Couriers, this item requires a special delivery permit due to its shadowsteel composition.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (pull effect) / Until end of next turn (reach bonus)",
      "endsWhen": "The creature moves away from the hook's range or you lose line of effect with it.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from shadowsteel and infused with ancient star magic, this grappling hook is a rare find, justifying its higher price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T22:30:49.665357+00:00",
    "aiReviewedAt": "2026-07-23T22:30:49.665357+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronarium_orb": {
    "id": "the_edge_chronarium_orb",
    "name": "Temporal Distortion Sphere",
    "description": "The Temporal Distortion Sphere, a swirling orb of captured time, is crafted from enchanted glass and metal fused in the fires of a forgotten forge. This relic allows its wielder to manipulate the immediate flow of time, speeding up potion effects or slowing down an enemy's movements. It is said that the sphere was once used by ancient mages to navigate through battles with unmatched precision, but using it comes at a cost – each manipulation risks unraveling the very fabric of time itself.",
    "category": "premium",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Time Manipulation",
      "Limited Rewind"
    ],
    "vendor": "final_shop",
    "shippedBy": "Wario's Delivery Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Time Manipulation",
        "rules": "The user can activate this effect as a bonus action, targeting either an ally's potion or a creature within reach. It increases the duration of an active potion by one minute or reduces an enemy's movement speed to half its normal rate for 1 round (30 seconds). This effect has a cooldown of 1 hour after each use."
      },
      {
        "title": "Limited Rewind",
        "rules": "Activating this effect allows the user to rewind their last action, effectively undoing it. This can be used as a reaction but only once per day and has no cooldown period. The user must have acted in the past 10 seconds for this ability to function."
      }
    ],
    "levelRequirementReason": "The complexity of controlling time requires significant magical proficiency.",
    "vendorReason": "Final Shop is known for its unique and powerful items, making it the perfect place for such a relic.",
    "shippingDetail": "Due to its delicate nature, this item must be shipped via Wario's Delivery Service to ensure safe arrival.",
    "usage": {
      "activation": "Bonus Action or Reaction",
      "duration": "Instantaneous for Time Manipulation; 1 round (30 seconds) for Limited Rewind",
      "endsWhen": "Cooldown period after each use or when the user acts again in the case of Limited Rewind",
      "charges": "Unlimited"
    },
    "priceReason": "The sphere's rarity and the risk involved in its manipulation justify its moderate price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:31:23.301594+00:00",
    "aiReviewedAt": "2026-07-23T22:31:23.301594+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_inverted_compass": {
    "id": "grand_country_inverted_compass",
    "name": "The Upside-Down Navigator",
    "description": "The Upside-Down Navigator is a whimsical compass that defies all sense of direction. Crafted from the twisted metal of an ancient forge, it points not to true north but towards the nearest cliff face or the most peculiar rock formation within a one-mile radius. Its origin remains shrouded in mystery, and its owner is often left as bewildered as those who dare to use it. The compass's quirky design ensures that anyone who relies on it appears hopelessly lost, much to the delight of Wario himself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "points_towards_nearest_cliff",
      "chance_to_stumble_upon_hidden_loot"
    ],
    "vendor": "side_seller",
    "shippedBy": "giant snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Points Towards Nearest Cliff",
        "rules": "When activated, the compass points towards the closest cliff face or rock formation within a one-mile radius. This effect is instantaneous and does not require any action. The compass has no charges; it simply reorients itself whenever used."
      },
      {
        "title": "Chance to Stumble Upon Hidden Loot",
        "rules": "Once per long rest, the user has a 10% chance of discovering hidden loot within one mile of their location when using the compass. This effect is not triggered if the user is currently in an area known for abundant treasure."
      }
    ],
    "levelRequirementReason": "The Upside-Down Navigator's playful nature and unpredictable design make it accessible to even low-level adventurers who are eager to test their mettle.",
    "vendorReason": "Side Seller, known for their eclectic inventory of unusual items, is the perfect vendor for this quirky compass.",
    "shippingDetail": "Delivered by a giant snail, which can take up to two weeks due to its leisurely pace.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Instantaneous",
      "endsWhen": "The compass reorients itself whenever used.",
      "charges": "Unlimited"
    },
    "priceReason": "Despite its quirky nature, the Upside-Down Navigator is a valuable tool for those who enjoy the thrill of adventure and are willing to embrace confusion.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:31:12.412962+00:00",
    "aiReviewedAt": "2026-07-23T22:31:12.412962+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_goblin_grog": {
    "id": "earth_land_goblin_grog",
    "name": "Goblin Grog of Minor Fortitude",
    "description": "The Goblin Grog of Minor Fortitude is a suspiciously green and foamy liquid, its origins shrouded in swampy lore. The concoction smells faintly of regret and swamps, and it bubbles ominously when shaken. A single gulp grants you an immediate boost to your defenses, making you nimbler and more resilient against the next wave of attacks. This potent elixir's potency is legendary, as even the most skeptical adventurers find themselves bolstered by its mysterious power.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Defense Boost",
      "Damage Reflection"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Swift Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Defense Boost",
        "rules": "When consumed, this potent elixir grants you a +15 bonus to your AC for the next round. You must drink it as an action."
      },
      {
        "title": "Damage Reflection",
        "rules": "There is a 20% chance that any damage you take will instead be reflected back at your attacker during each of your turns while this effect lasts, until it ends or you are incapacitated. This effect cannot cause you to take more than half of your maximum hit points in damage."
      }
    ],
    "levelRequirementReason": "The concoction's potency is potent enough that even low-level adventurers can benefit from its effects.",
    "vendorReason": "The Guild Quartermaster regularly stocks items of dubious origin, and this Grog has proven reliable in battle.",
    "shippingDetail": "Ships via Swift Courier, usually arriving within a day of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "Until the start of your next turn",
      "endsWhen": "You are incapacitated or you take damage from an attack that hits you while this effect is active",
      "charges": "Unlimited"
    },
    "priceReason": "The Grog's powerful effects, combined with its rarity and lore, justify a high price of 1000 XP.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:31:20.467194+00:00",
    "aiReviewedAt": "2026-07-23T22:31:20.467194+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_mythic_echoing_shard": {
    "id": "earth_land_mythic_echoing_shard",
    "name": "Echoing Shard of the Ancient Wizard’s Lament",
    "description": "The Echoing Shard of the Ancient Wizard’s Lament is a jagged fragment of a forgotten spell, pulsating with ancient magic. When held close to your ear, it hums softly, sometimes revealing fragments of lost knowledge—other times, merely an insistent echo of a bygone melody. This relic, while unstable and dangerous, offers respite: upon use, it heals 50 hit points and grants you a +2 modifier on all Wisdom (Insight) checks for the next hour.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Healing Touch",
      "Enhanced Insight"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "When activated as an action, this shard heals the user for 50 hit points. The effect ends immediately after use."
      },
      {
        "title": "Enhanced Insight",
        "rules": "For one hour after using the shard, you gain a +2 bonus to all Wisdom (Insight) checks. This effect is cumulative with other bonuses of the same type and duration, but only lasts for the specified time frame."
      }
    ],
    "levelRequirementReason": "This shard offers immediate healing and insight enhancement, making it accessible to even low-level characters.",
    "vendorReason": "The Earth Emporium specializes in relics from forgotten ages, making the Echoing Shard a fitting addition to their collection.",
    "shippingDetail": "Ships via Dimensional Portal, ensuring swift delivery within a day.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous and one-hour duration",
      "endsWhen": "The effect ends immediately after the user has healed or when the hour-long duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects its immediate healing and insight enhancement, providing significant utility without breaking the game balance.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T22:31:18.879926+00:00",
    "aiReviewedAt": "2026-07-23T22:31:18.879926+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_service_echo_call": {
    "id": "grand_country_service_echo_call",
    "name": "Resonance Whisperer's Device",
    "description": "The Resonance Whisperer's Device is a sleek, metallic contraption adorned with intricate engravings that hum softly when activated. This device allows you to briefly amplify and replay sounds, creating a mesmerizing distraction or uncovering hidden clues in the most unexpected places. Crafted by Wario’s engineers for grand country services, it is both a symbol of ingenuity and a practical tool for any adventurer seeking an edge over their foes.",
    "category": "services",
    "price": 1000,
    "icon": "🔊",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "sound_replay",
      "distraction"
    ],
    "vendor": "side_seller",
    "shippedBy": "Wario's Express Drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Sound Replay",
        "rules": "Activate as a bonus action to replay the last three seconds of sound. This effect can be used once per long rest."
      },
      {
        "title": "Distraction",
        "rules": "When an enemy within 30 feet hears the replayed sounds, they must make a Wisdom saving throw (DC 14) or become distracted for the duration of your next turn. This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to effectively utilize the device’s advanced sound manipulation features.",
    "vendorReason": "Side sellers often stock unique gadgets and tools that can be useful for adventurers, including Wario’s inventions.",
    "shippingDetail": "Ships within 24 hours with a guaranteed delivery time of 3 days.",
    "usage": {
      "activation": "Bonus action to activate and replay sound; once per long rest.",
      "duration": "Instantaneous effect on enemies hearing the replayed sounds.",
      "endsWhen": "Effect ends when the target saves successfully or the next turn begins for you.",
      "charges": "One use per short rest, unlimited uses with a long rest."
    },
    "priceReason": "Balanced as an epic rarity item that provides a unique tactical advantage without overshadowing other abilities.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T22:32:13.199857+00:00",
    "aiReviewedAt": "2026-07-23T22:32:13.199857+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_chronal_orb": {
    "id": "pokemon_item_chronal_orb",
    "name": "Temporal Echo Orb",
    "description": "The Temporal Echo Orb pulses with a spectral glow that hints at forgotten timelines. When held, it grants you a brief surge of speed and an uncanny ability to evade attacks, as if your mind has glimpsed the patterns of time itself. Some say the orb whispers secrets of the past and future in its flickers; others swear they catch fleeting images of battles long fought and yet to be won.",
    "category": "curiosities",
    "price": 6800,
    "icon": "⏳",
    "stock": 25,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "speed_boost",
      "evasion_boost"
    ],
    "vendor": "safari_shop",
    "shippedBy": "winged_bulbasaur",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "As a bonus action, you gain a +2 bonus to your speed until the start of your next turn. This effect ends if you take damage or you move more than 10 feet."
      },
      {
        "title": "Evasion Boost",
        "rules": "While holding the Temporal Echo Orb, you have advantage on Dexterity saving throws against attacks and effects that allow saves for half damage or less. This effect lasts for 1 minute and ends if you drop the orb."
      }
    ],
    "levelRequirementReason": "The Temporal Echo Orb's temporal energies are unstable and require a certain level of magical awareness to safely wield.",
    "vendorReason": "Safari Shop specializes in rare curiosities from the wild, including items that can bend time and space slightly.",
    "shippingDetail": "The winged bulbasaur delivers the Temporal Echo Orb with a swift gust of wind, ensuring it arrives intact but not necessarily without some leaves clinging to its surface.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "You drop the orb or take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Temporal Echo Orb's rarity and the risk of tampering with time make it a costly but valuable item.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:31:35.670501+00:00",
    "aiReviewedAt": "2026-07-23T22:31:35.670501+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_league_badge_of_honor": {
    "id": "pokemon_item_league_badge_of_honor",
    "name": "Badge of the Valiant Trainer",
    "description": "The Badge of the Valiant Trainer gleams with a subtle, almost imperceptible sheen that whispers of battles fought and won. Crafted by the Elite Four themselves, this badge is not merely a symbol—it imbues its bearer with an indomitable spirit, granting a +1 bonus to both Strength and Constitution. This token of achievement is perfect for any trainer seeking to honor their journey or simply feel more formidable in the eyes of others at the local Pokémon Center.",
    "category": "faction",
    "price": 1000,
    "icon": "🏆",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "strength_boost_1",
      "constitution_boost_1"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "The wearer gains a +1 bonus to Strength. This effect is passive and does not require activation."
      },
      {
        "title": "Constitution Boost",
        "rules": "The wearer gains a +1 bonus to Constitution. This benefit persists for the duration of one long rest or until the wearer drops to 0 hit points."
      }
    ],
    "levelRequirementReason": "This badge is suitable for beginners and those who have yet to earn their first battle scars.",
    "vendorReason": "The league store stocks items that are emblematic of the sport, ensuring aspiring trainers can show off their ambitions.",
    "shippingDetail": "Delivered by a sleek delivery drone within one business day.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Instantaneous; persists until the wearer drops to 0 hit points or completes a long rest.",
      "endsWhen": "The badge's benefits cease when the wearer is incapacitated or rests for an extended period.",
      "charges": "Unlimited"
    },
    "priceReason": "The badge’s rarity and craftsmanship justify its cost, providing a tangible boost to two crucial stats without being overpowered.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:31:45.342865+00:00",
    "aiReviewedAt": "2026-07-23T22:31:45.342865+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ultra_potion_x": {
    "id": "pokemon_item_ultra_potion_x",
    "name": "Hyper Healing Potion X",
    "description": "Crafted from the essence of legendary Pokémon and rare nectars, Hyper Healing Potion X is a potent elixir that can restore up to 150 hit points in an instant. Some say it's so powerful it might cause your Pokémon to briefly emit a soft glow, though such effects are purely cosmetic and fleeting. The potion's origins trace back to the ancient Alola islands where the rare ingredients were harvested by master alchemists. Use with caution; too many doses may lead to adverse side effects in even the toughest trainers.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "massive_heal",
      "glow_effect"
    ],
    "vendor": "pokemart",
    "shippedBy": "poke_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Massive Heal",
        "rules": "When consumed, this potion restores up to 150 hit points. The user must make a Wisdom saving throw (DC 14) or risk feeling nauseated for the next hour."
      },
      {
        "title": "Glow Effect",
        "rules": "For one minute after consumption, the Pokémon may emit a soft, blue glow that lasts until it is dispelled by magic or natural light. This effect has no combat advantage but can be dismaying to opponents."
      }
    ],
    "levelRequirementReason": "Suitable for novice trainers who need quick healing without the risk of overusing more potent remedies.",
    "vendorReason": "Pokemarts are known for their wide selection of potions and elixirs to cater to all levels of trainers, making it a natural fit for this high-demand item.",
    "shippingDetail": "Shipped via the trusted Poke-Mail service; delivery can take up to three days depending on regional courier schedules.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "Instantaneous effect, glow lasts for one minute",
      "endsWhen": "Used or dispelled by magic",
      "charges": "Unlimited"
    },
    "priceReason": "The high price reflects the rarity of ingredients and the alchemical process required to craft such a powerful potion.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:31:53.289153+00:00",
    "aiReviewedAt": "2026-07-23T22:31:53.289153+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_cipher_badge": {
    "id": "kivotos_item_student_cipher_badge",
    "name": "Codebreaker's Crest",
    "description": "The Codebreaker's Crest gleams with an enigmatic light, its surface etched with ancient runes that whisper secrets of bygone cryptographers. This badge not only enhances your perception but also subtly amplifies your skills in decoding and interpreting complex codes. It is the perfect companion for those who seek to unravel mysteries and outsmart adversaries, though it comes with a warning: Principal Stern's office hours are best avoided if you're caught wearing it.",
    "category": "faction",
    "price": 1000,
    "icon": "🕵️",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased_perception",
      "enhanced_code_decoding"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Perception",
        "rules": "While wearing the Codebreaker's Crest, you gain a +1 bonus to perception checks and can see through minor illusions. This effect lasts until you complete an hour-long task or receive a long rest."
      },
      {
        "title": "Enhanced Code Decoding",
        "rules": "You have a 25% chance to successfully decode a code, spell, or message that would normally be too complex for your skills. This effect can be used once per short rest and is exhausted if you fail three consecutive attempts."
      }
    ],
    "levelRequirementReason": "The badge's subtle effects are accessible to novices who show promise in the field of cryptography.",
    "vendorReason": "The student store stocks a variety of items designed to aid academic pursuits, including this emblematic crest for its members and enthusiasts.",
    "shippingDetail": "Ships within one week with standard courier delivery.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the end of each long rest or after completing an hour-long task.",
      "endsWhen": "Exhausted if you fail three consecutive code decoding attempts.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "The badge's balanced price reflects its subtle yet powerful effects in enhancing perception and cryptography skills without being game-breaking.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T22:32:04.243067+00:00",
    "aiReviewedAt": "2026-07-23T22:32:04.243067+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_minor_chaos": {
    "id": "kivotos_item_halo_of_minor_chaos",
    "name": "The Slightly Unstable Halo",
    "description": "The Slightly Unstable Halo radiates a faint, chaotic aura that warps reality in unpredictable ways. When touched, it might summon a flock of pigeons to dart around you, or cause nearby objects to levitate momentarily before crashing back down with a clatter. This halo is a relic from the ancient realm of Wario's World, where order and chaos dance in perfect imbalance. Wario himself occasionally dons this curious artifact for its unpredictable bursts of mayhem.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💫",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Pigeon Summons",
      "Object Levitation"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Pigeon Summons",
        "rules": "When the halo is activated by touch, there is a 30% chance that a flock of pigeons will appear in a 15-foot radius. The pigeons are harmless but may cause minor disturbances as they flutter about. This effect lasts for 1 minute and has no save DC required."
      },
      {
        "title": "Object Levitation",
        "rules": "There is a 15% chance that objects within 30 feet of the wearer will levitate momentarily, rising into the air by up to 20 feet before crashing back down. This effect has no save DC and can occur once per short rest."
      }
    ],
    "levelRequirementReason": "The Slightly Unstable Halo requires a minimum level of 6 due to its unpredictable and potentially disruptive effects.",
    "vendorReason": "Club Supply caters to adventurers seeking unique and whimsical items that can add an element of chaos to their expeditions.",
    "shippingDetail": "Express Delivery guarantees the timely arrival of this fragile artifact, ensuring it reaches its destination in pristine condition.",
    "usage": {
      "activation": "Activation is a bonus action when touching the halo.",
      "duration": "The pigeon summoning effect lasts for 1 minute. The object levitation can occur once per short rest.",
      "endsWhen": "The effects end if the wearer is incapacitated or the halo breaks.",
      "charges": "Unlimited uses, but limited to one effect per short or long rest."
    },
    "priceReason": "The balanced XP price reflects the item's unpredictable nature and its potential to disrupt battles without being overly powerful.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:32:31.583380+00:00",
    "aiReviewedAt": "2026-07-23T22:32:31.583380+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_void_shard_of_reflection": {
    "id": "almost_edge_void_shard_of_reflection",
    "name": "Void Shard of Reflection",
    "description": "The Void Shard of Reflection is a jagged, pulsating fragment that emits an eerie purple glow. Its surface crackles with unstable energy, reflecting glimpses of other dimensions where geometry defies logic and reality distorts. Gazing into it can either grant fleeting insights into the multiverse or induce moments of profound existential doubt. This shard offers resistance to psychic damage but risks driving its beholder to madness if used too frequently.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 17,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "resistance to psychic damage",
      "risk of temporary insanity"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Resistance to Psychic Damage",
        "rules": "The user gains resistance to all psychic damage for the duration. This effect is active as long as the shard remains in hand and ends if it is thrown or discarded."
      },
      {
        "title": "Risk of Temporary Insanity",
        "rules": "There is a 5% chance that using the shard will cause the user to suffer from temporary insanity, which lasts for 1d4 rounds. The user must succeed on a DC 15 Wisdom saving throw or be incapacitated as they question reality. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "The shard's unstable energy requires a high level of magical focus and discipline to harness without risk.",
    "vendorReason": "The Void Merchant specializes in exotic artifacts from the multiverse, including fragments that offer glimpses into other dimensions.",
    "shippingDetail": "Due to its unstable nature, the shard must be delivered via the Dimensional Rift Courier service only. Delivery takes 1d4 days due to the instability of the cargo.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous effect; lasts until discarded or thrown",
      "endsWhen": "Thrown, discarded, or lost",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's mystical properties and rarity justify its modest price point in the context of the campaign.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:32:34.678884+00:00",
    "aiReviewedAt": "2026-07-23T22:32:34.678884+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_fractured_echo_token": {
    "id": "almost_edge_fractured_echo_token",
    "name": "Fractured Echo Token",
    "description": "The Fractured Echo Token is a tarnished silver bell, its once-pure surface now marred by cracks and dents that echo the fates of those who've met their end on the edge. It hums softly when held, releasing fragmented memories and whispers of lost souls. This token grants you advantage on investigation checks related to the void and provides minor protection against madness effects, helping you resist the creeping taint of forgotten horrors.",
    "category": "faction",
    "price": 1000,
    "icon": "🔔",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Advantage on Investigation Checks",
      "Minor Protection Against Madness"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Lost Signal Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Investigation Checks",
        "rules": "When you use this token to aid in an investigation related to the void, you gain advantage on the check. This effect lasts until the start of your next turn."
      },
      {
        "title": "Minor Protection Against Madness",
        "rules": "While holding this token, you have resistance against madness effects. It provides a +2 bonus to saving throws made to resist such effects, but it can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The token's ability to provide advantage and minor protection is accessible to any adventurer, making it a valuable tool for all levels.",
    "vendorReason": "The Liminal Trader specializes in relics that bridge the gap between worlds, and this token perfectly fits their inventory.",
    "shippingDetail": "Due to its delicate nature, the Fractured Echo Token is shipped via Lost Signal Express with special handling to ensure it arrives intact.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until start of next turn or until used in a rest",
      "endsWhen": "At the end of your next short or long rest",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "The token's balanced cost reflects its moderate benefits and utility for adventurers facing void-related challenges.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:33:12.993386+00:00",
    "aiReviewedAt": "2026-07-23T22:33:12.993386+00:00",
    "aiReviewVersion": 1
  },
  "faction_fatebinder_scroll": {
    "id": "faction_fatebinder_scroll",
    "name": "Fatebinder’s Scroll of Discord",
    "description": "Fatebinder’s Scroll of Discord is a tattered parchment inscribed with intricate sigils and ancient runes. It is said to have been found within the ruins of an old temple dedicated to chaos gods, its ink faded but still potent. When unrolled, it releases a cloud of chaotic energy that disrupts fate itself, causing enemies to falter and misfortune to befall them. However, its use may draw the attention of powerful entities seeking to claim this dangerous power for themselves.",
    "category": "premium",
    "price": 1000,
    "icon": "📜",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Disruptive Cloud",
      "Misfortune"
    ],
    "vendor": "fate_forge",
    "shippedBy": "magical_portals",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Disruptive Cloud",
        "rules": "When activated, the scroll releases a cloud that imposes disadvantage on attack rolls and saving throws within a 10-foot radius for 1 minute. The cloud lasts until dispelled or the duration expires."
      },
      {
        "title": "Misfortune",
        "rules": "There is a 25% chance (DC 16) that an enemy targeted by the scroll suffers from 'bad luck,' which reduces their attack rolls and saving throws by 4 for 3 turns. This effect ends if the target successfully saves."
      }
    ],
    "levelRequirementReason": "Requires sufficient experience to handle such a volatile and powerful artifact.",
    "vendorReason": "Fate Forge specializes in crafting and selling items that manipulate fate, making them the ideal vendor for this scroll.",
    "shippingDetail": "Delivered via a magical portal, ensuring swift delivery to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until dispelled",
      "endsWhen": "The duration ends or the spell is dispelled by an effect like a counterspell.",
      "charges": "Single-use; recharged after a long rest"
    },
    "priceReason": "Balanced to reflect its potent, but risky, effects.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:32:27.322900+00:00",
    "aiReviewedAt": "2026-07-23T22:32:27.322900+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_bone_totem": {
    "id": "curiosity_bone_totem",
    "name": "The Whispering Bone Totem",
    "description": "The Whispering Bone Totem is a macabre relic forged from the bones of ancient warriors, each bone telling tales of valiant deeds or tragic failures. It hums faintly in your hand, whispering secrets of past battles and the occasional misadventure with Wario's cooking. Stare too long and it might confide in you—too late—you will find yourself compelled to recount its stories. This unsettling totem provides a +1 bonus to Charisma (Persuasion) checks and grants temporary inspiration on successful morale checks.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Inspiration",
      "Morale Boost"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Inspiration",
        "rules": "When you make a Charisma (Persuasion) check, you can roll one additional d20 and use the higher result. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Morale Boost",
        "rules": "On a successful morale check, gain temporary hit points equal to 1d6 + your Charisma modifier. This effect can be used once per day and is lost if you fall unconscious."
      }
    ],
    "levelRequirementReason": "The totem's unsettling nature requires a minimum level of 1 for comfort and control.",
    "vendorReason": "The chaos dealer thrives on the macabre and bizarre, making this unsettling yet useful relic an excellent addition to their wares.",
    "shippingDetail": "Ships via standard mail service. Requires a week for delivery due to its fragile nature.",
    "usage": {
      "activation": "Passive effect; requires no action.",
      "duration": "Until the end of your next short or long rest, or until you fall unconscious.",
      "endsWhen": "Lost if you fall unconscious or at the end of a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The totem's value lies in its unsettling yet functional effects, making it a worthwhile investment for those seeking an edge.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:33:28.614958+00:00",
    "aiReviewedAt": "2026-07-23T22:33:28.614958+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_berry_blast": {
    "id": "grand_country_berry_blast",
    "name": "Layered Berry Bomb",
    "description": "The Layered Berry Bomb is a confectionary marvel, each segment meticulously crafted from various fruits and spices. When consumed, it releases a cascade of flavor, starting with a burst of zesty citrus that grants a quick strength boost, followed by a lingering wave of warmth and healing. The final layer enhances your speed, allowing you to outpace foes in the ensuing skirmish. Eat swiftly; the layers shift unpredictably within moments.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_strength_boost",
      "minor_healing"
    ],
    "vendor": "layer_market",
    "shippedBy": "rolling_log",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Strength Boost",
        "rules": "Consume as a bonus action to gain +2 to STR for 1 minute. This effect ends if you take damage or lose consciousness."
      },
      {
        "title": "Minor Healing",
        "rules": "Receive +1 hit point at the start of each of your turns for the next minute, provided you are not incapacitated. This effect ends when you finish a short rest."
      }
    ],
    "levelRequirementReason": "This confection is accessible to all adventurers who can afford its price.",
    "vendorReason": "The Layer Market specializes in unique and potent consumables, making the Layered Berry Bomb a natural fit for their offerings.",
    "shippingDetail": "Delivered via the rolling log courier service, known for its reliability and punctuality. Shipment typically arrives within two days of purchase.",
    "usage": {
      "activation": "Bonus Action to consume",
      "duration": "1 minute per effect",
      "endsWhen": "On damage or losing consciousness; ends at the start of your turn if you finish a short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Layered Berry Bomb is priced at 1000 XP due to its complex crafting process, unique ingredients, and the potent effects it provides.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:33:00.930994+00:00",
    "aiReviewedAt": "2026-07-23T22:33:00.930994+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_echoing_stone": {
    "id": "grand_country_echoing_stone",
    "name": "Resonant Shard of Silence",
    "description": "The Resonant Shard of Silence hums ominously in your hand, its surface etched with arcane runes that glow faintly under moonlight. When thrown, it creates a zone of absolute silence within a 10-foot radius, disrupting all spellcasting and speech within the area for up to 3 rounds. The stone itself is said to have been crafted from the remnants of a forgotten temple dedicated to the goddess of silence.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "silence_zone",
      "disrupt_spell"
    ],
    "vendor": "side_seller",
    "shippedBy": "giant_snail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silence Zone",
        "rules": "When thrown, this shard creates an instantaneous 10-foot radius area of absolute silence within which all creatures are incapacitated for up to 3 rounds. The effect ends if a creature moves out of the zone or when the shard is destroyed."
      },
      {
        "title": "Disrupt Spell",
        "rules": "All spellcasting and speech within the affected area is disrupted, requiring a DC 15 Concentration save (or half the spell’s level) to continue casting. On failure, the spell fails immediately."
      }
    ],
    "levelRequirementReason": "The Resonant Shard of Silence requires at least 3rd level to master its power and control its effects.",
    "vendorReason": "Side Seller, known for their eclectic wares, carries the Resonant Shard due to its unique and powerful properties that enhance stealth operations in the night.",
    "shippingDetail": "Ships via giant snail, arriving within a week under normal conditions; expedited delivery available upon request for an additional fee.",
    "usage": {
      "activation": "Throw as an action",
      "duration": "Instantaneous (up to 3 rounds)",
      "endsWhen": "A creature moves out of the zone or when destroyed",
      "charges": "Unlimited, recharges on a long rest"
    },
    "priceReason": "The Resonant Shard is priced at 1000 XP to reflect its rare and powerful abilities.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:33:02.984931+00:00",
    "aiReviewedAt": "2026-07-23T22:33:02.984931+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_spiral_root": {
    "id": "grand_country_spiral_root",
    "name": "Warped Root of the Spiral Grove",
    "description": "The Warped Root of the Spiral Grove is a pulsating, vine-like root harvested from a grove where gravity bends and twists. Its surface glows with an unstable energy that hints at dimensions beyond this world. Consuming it grants you fleeting glimpses into alternate realities, allowing you to phase through solid objects for 6 seconds but beware; too much exposure may lead to disorientation or worse, getting lost in the multiverse's folds!",
    "category": "consumables",
    "price": 1000,
    "icon": "🌀",
    "stock": 45,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Phase Through Walls",
      "Dimensional Teleport"
    ],
    "vendor": "layer_market",
    "shippedBy": "Dimensional Worm Express",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Phase Through Walls",
        "rules": "As an action, you can consume this root to phase through one wall or solid object for 6 seconds. While phased, you gain advantage on Strength (Athletics) checks made to break the barrier. This effect ends if you take damage, lose concentration, or spend another use."
      },
      {
        "title": "Dimensional Teleport",
        "rules": "There's a 10% chance that when you phase through an object, you are teleported up to 10 feet in any direction. This effect is instantaneous and has no save DC. You cannot teleport into solid objects or within 5 feet of another creature."
      }
    ],
    "levelRequirementReason": "This root requires significant magical power to control its effects without losing one's balance.",
    "vendorReason": "Layer Market specializes in rare and exotic goods that adventurers seek, including this unique product from the Spiral Grove.",
    "shippingDetail": "The root is delivered by a Dimensional Worm Express, ensuring it arrives fresh and potent. However, due to its volatile nature, it must be kept refrigerated during transit.",
    "usage": {
      "activation": "Action",
      "duration": "6 seconds or until the effect ends",
      "endsWhen": "You take damage, lose concentration, or use another phased movement",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Its rarity and the risk of disorientation make it a valuable yet balanced find for adventurers.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-23T22:33:19.828791+00:00",
    "aiReviewedAt": "2026-07-23T22:33:19.828791+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_bun_of_fortitude": {
    "id": "leclaire_isle_item_sticky_bun_of_fortitude",
    "name": "Sticky Bun of Fortitude",
    "description": "The Sticky Bun of Fortitude, a suspiciously gooey pastry from the whimsical kitchens of LeClaire Isle, seems to hold an unnatural amount of fortitude. When bitten into, it grants temporary resistance to blunt force trauma, perfect for wrestling grumpy pastry sprites or dodging rogue icing projectiles. The sugary treat is known to leave you with increased stamina and a sticky encounter that lingers in the air, ensuring your next move is both powerful and slightly... less than clean.",
    "category": "consumables",
    "price": 1000,
    "icon": "💪",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "temporary_resistance_to_blunt_damage",
      "increased_stamina"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_dune",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Resistance to Blunt Damage",
        "rules": "When consumed, the Sticky Bun of Fortitude grants you temporary resistance to blunt damage for 1 minute. This effect requires no action and lasts until it ends early or you take any other kind of damage. There is a saving throw DC of 13 to negate this effect."
      },
      {
        "title": "Increased Stamina",
        "rules": "After consuming the Sticky Bun, your movement speed increases by 10 feet for 1 hour. This effect does not stack with other similar effects and ends early if you take any damage from a source other than bludgeoning attacks."
      }
    ],
    "levelRequirementReason": "The simplicity of the Sticky Bun's fortitude makes it accessible to all adventurers, regardless of level.",
    "vendorReason": "Dough Depot is known for its innovative and magical pastries that cater to every adventurer's sweet tooth.",
    "shippingDetail": "Delivered via the Swift Delivery Dune, ensuring your sticky treat arrives fresh from LeClaire Isle.",
    "usage": {
      "activation": "Instantaneous consumption as a bonus action.",
      "duration": "1 minute or until you take any other kind of damage.",
      "endsWhen": "Early upon taking non-bludgeoning damage or at the end of your next long rest.",
      "charges": "Unlimited; each Sticky Bun is consumed once and cannot be recharged."
    },
    "priceReason": "The rare ingredients used in its preparation, combined with the magical properties that enhance fortitude, make this treat a valuable but balanced purchase for adventurers of all stripes.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T22:33:38.957894+00:00",
    "aiReviewedAt": "2026-07-23T22:33:38.957894+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosting_sculpting_session": {
    "id": "leclaire_isle_item_frosting_sculpting_session",
    "name": "Frosting Sculpting Session",
    "description": "Crafted in the heart of Pastry Palace, this Frosting Sculpting Session is an immersive experience where you can transform simple pastries into intricate works of art. Master Dough Folk artisans guide you with precision, turning sugar and flour into miniature masterpieces that not only dazzle but also have a chance to confuse nearby foes. The sweet temptation might linger in your mind for days after the session, leaving you yearning for more sugary treats.",
    "category": "services",
    "price": 1000,
    "icon": "🎨",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Miniature Artistry",
      "Confusion Aura"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_dune",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Miniature Artistry",
        "rules": "When you complete a pastry sculpture during this session, it grants you advantage on your next skill check related to crafting or deception for the rest of the day. The sculpture must be displayed in plain sight within reach."
      },
      {
        "title": "Confusion Aura",
        "rules": "Once per short rest, you can activate this effect by consuming a pastry you have created during the session. Until the end of your next turn, each creature that starts its turn within 10 feet of you must succeed on a DC 13 Wisdom saving throw or become confused until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This session is accessible to adventurers at any level as it focuses more on skill and creativity rather than combat prowess.",
    "vendorReason": "Pastry Palace specializes in culinary magic, offering unique experiences that blend art with food.",
    "shippingDetail": "The delicate pastries are shipped in a specially insulated container to ensure they arrive fresh and ready for your artistic endeavors.",
    "usage": {
      "activation": "Instantaneous once per short rest, by consuming one of the created pastries.",
      "duration": "Until the start of your next turn after activation.",
      "endsWhen": "The effect ends if you consume a different pastry or if it is interrupted by an action that ends concentration.",
      "charges": "Unlimited; the session includes enough ingredients and time to create multiple pastries."
    },
    "priceReason": "The price reflects the unique experience, expert guidance, and high-quality ingredients provided during this Frosting Sculpting Session.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:34:04.285258+00:00",
    "aiReviewedAt": "2026-07-23T22:34:04.285258+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_chronometric_croissant": {
    "id": "leclaire_isle_item_chronometric_croissant",
    "name": "Chronometric Croissant",
    "description": "The Chronometric Croissant is a shimmering pastry that bends the very fabric of time around you. This exquisite treat can subtly slow down enemy attacks, turning their strikes into a culinary dance of delayed precision. Simultaneously, it accelerates your own movements, allowing you to gracefully navigate through battle with ease and speed. Overindulgence, however, might lead to an eternity of pastry consumption, as the time-altering properties can spiral out of control.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "slow_time",
      "accelerate_movement"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "swift_post_of_the_moonlit_river",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Slow Time",
        "rules": "By consuming this croissant, you can slow down enemy attacks by a factor of two within a 10-foot radius. This effect lasts for 1 minute and can be activated as a bonus action. The duration ends if you take any damage or if you use your Action Surge feature."
      },
      {
        "title": "Accelerate Movement",
        "rules": "The croissant also grants the eater an increase in walking speed by 30 feet for 1 minute. This effect can be activated as a reaction to a creature starting its turn adjacent to you and ends if you move more than 60 feet during this duration."
      }
    ],
    "levelRequirementReason": "Only those with the agility and discipline of a seasoned adventurer are capable of handling the croissant's time-altering effects without mishap.",
    "vendorReason": "Sweet Supplies is renowned for its unique and magical confections, making it the perfect vendor for this enchanting pastry.",
    "shippingDetail": "The croissant must be shipped overnight to ensure its delicate time-altering properties remain intact.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "1 minute per activation",
      "endsWhen": "You take damage, use Action Surge, or move more than 60 feet during the duration of Accelerate Movement",
      "charges": "Unlimited"
    },
    "priceReason": "The Chronometric Croissant's balanced price reflects its unique combination of utility and risk, ensuring that only those willing to pay for such magic can indulge.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:34:08.845360+00:00",
    "aiReviewedAt": "2026-07-23T22:34:08.845360+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ritualistic_knife": {
    "id": "the_edge_ritualistic_knife",
    "name": "Blade of the Unseen Pact",
    "description": "Forged from a meteorite that fell during ancient rituals, the Blade of the Unseen Pact whispers dark secrets to those who wield it. Its etched symbols pulse with an eerie glow, and its handle is carved from a bone long thought lost to the ages. This knife grants increased damage against undead foes but comes with a haunting compulsion: every night at midnight, the bearer must perform a bizarre ritual or risk losing their will to those of forgotten entities.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🔪",
    "stock": 1,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "increased_damage_against_undead",
      "compulsive_bizarre_ritual"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "dark_messenger",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Damage Against Undead",
        "rules": "When the wielder deals damage with this weapon to an undead creature, they deal an additional 1d6 necrotic damage. This effect lasts until the end of the wielder's next long rest."
      },
      {
        "title": "Compulsive Bizarre Ritual",
        "rules": "At midnight each night, if the wielder does not perform a ritual that involves speaking in tongues (as per the Find Familiar spell) with an undead creature within 30 feet for at least one minute, they must succeed on a DC 15 Wisdom saving throw or lose their next action to endure a hallucinatory nightmare. On a failed save, the wielder must also expend one charge from this item."
      }
    ],
    "levelRequirementReason": "The blade's dark magic is too potent for those not of sufficient experience and willpower.",
    "vendorReason": "Edge Outpost deals in the most exotic and forbidden items, including this knife which has been rumored to bring both power and peril to its wielders.",
    "shippingDetail": "The dark messenger delivers the blade under a cloak of darkness, ensuring it arrives at night when the rituals can be performed.",
    "usage": {
      "activation": "Instantaneous activation for increased damage; ritual performance required nightly for compulsion effect.",
      "duration": "Until next long rest or until ritual is performed.",
      "endsWhen": "The wielder successfully performs a ritual each midnight, expends charges, or the item's effects are destroyed by certain magical means.",
      "charges": "Unlimited charges; expends one charge nightly."
    },
    "priceReason": "The blade's rarity and forbidden nature justify its price in terms of both crafting materials and the potential risks it poses to its wielder.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T22:34:00.901566+00:00",
    "aiReviewedAt": "2026-07-23T22:34:00.901566+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_emberglow_torch": {
    "id": "teyvat_item_emberglow_torch",
    "name": "Emberglow Torch of Valor",
    "description": "The Emberglow Torch of Valor is a colossal torch forged from ancient meteoric iron. Its flames burn fiercely, casting an ethereal glow that pierces through the deepest shadows with ease. The torch's core glows with a fiery essence, whispering tales of valor and triumph to all who wield it. Legend has it that those carrying this torch are imbued with the spirit of valorous heroes, making them more resilient in battle. Wario indeed claims it emits a delightful aroma reminiscent of burnt marshmallows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_light",
      "valor_bolster"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_mime",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Light",
        "rules": "The Emberglow Torch illuminates the area within 60 feet, providing bright light in a 30-foot radius and dim light for an additional 30 feet. This effect lasts until the torch is extinguished or expended."
      },
      {
        "title": "Valor Bolster",
        "rules": "While holding this torch, you gain a +1 bonus to your AC as long as it remains alight. Additionally, once per short rest, you can expend one charge to grant yourself advantage on your next attack roll and saving throw."
      }
    ],
    "levelRequirementReason": "The Emberglow Torch is designed for adventurers of all levels but especially those who seek to bolster their courage in the face of danger.",
    "vendorReason": "As a bustling market, Mondstadt offers a wide array of supplies and trinkets, including this legendary torch that has been passed down through generations.",
    "shippingDetail": "Shipped by the Winged Mime, known for its punctual deliveries and intricate packaging to ensure the torch's integrity.",
    "usage": {
      "activation": "Holding the torch",
      "duration": "Instantaneous effect; ongoing light until extinguished or expended",
      "endsWhen": "Extinguished, expended, or destroyed if not used within a short rest",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "The Emberglow Torch's meteoric iron core and legendary crafting make it an invaluable asset to any adventurer's arsenal.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:33:54.485073+00:00",
    "aiReviewedAt": "2026-07-23T22:33:54.485073+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_liyue_seal_of_prosperity": {
    "id": "teyvat_item_liyue_seal_of_prosperity",
    "name": "Seal of Prosperity - A Merchant's Blessing",
    "description": "The Seal of Prosperity - A Merchant's Blessing, crafted in Liyue Harbor from the finest jade and blessed by the Qianli family, brings a palpable sense of good fortune to your trade. This intricately carved seal subtly increases profits by warding off grumpy customers, while also providing occasional opportunities to negotiate better deals with merchants. Craftsmen say it channels the prosperity of Liyue itself, making every transaction smoother and more profitable.",
    "category": "faction",
    "price": 1000,
    "icon": "💰",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_trade_profit",
      "occasional_better_deals"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Trade Profit",
        "rules": "This seal grants a +2 bonus to any trade-related checks, such as Merchant or Persuasion. The effect is active for the duration of one trading session (up to 8 hours). It ends if you engage in combat, use another item with similar effects, or if your profits fall below 10 gold pieces."
      },
      {
        "title": "Occasional Better Deals",
        "rules": "Once per day, while wearing the seal, you can attempt a Persuasion check to negotiate better terms. On a successful check (DC 15), you gain advantage on your next trade-related check in that session. The effect ends if you fail three consecutive checks or engage in combat."
      }
    ],
    "levelRequirementReason": "This seal requires a certain level of experience to wield its blessings effectively, ensuring it remains a valuable tool for seasoned traders.",
    "vendorReason": "The Qianli family, known for their mercantile prowess, ensures the Seal's authenticity and effectiveness.",
    "shippingDetail": "Ships are often delayed by Liyue Harbor's bustling trade activities, but the seal is carefully packaged to arrive in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Active for one trading session (up to 8 hours), or until profits fall below 10 gold pieces.",
      "endsWhen": "Combat, using another item with similar effects, or if your daily limit of successful checks is reached.",
      "charges": "Unlimited, but the seal's effectiveness diminishes after prolonged use."
    },
    "priceReason": "The balanced XP price reflects the seal's rarity and its practical utility for experienced traders.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:35:04.387472+00:00",
    "aiReviewedAt": "2026-07-23T22:35:04.387472+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_inazuma_phantom_amulet": {
    "id": "teyvat_item_inazuma_phantom_amulet",
    "name": "Phantom Amulet of the Shifting Winds",
    "description": "Crafted from the windswept shores of Inazuma, this Phantom Amulet of the Shifting Winds whispers tales of the storm's heart. Its core glows faintly with the spirit of the sea, offering a subtle edge in combat against ethereal foes and illusions. The amulet’s wearer feels a cool breeze on their skin, as if the winds themselves are whispering secrets. Wario attempted to consume it but found only saltwater in his belly; the amulet remains intact.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌫️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "ethereal_resistance",
      "illusion_defense"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "the Windship of Inazuma",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Ethereal Resistance",
        "rules": "The wearer gains a +1 bonus to saving throws against ethereal creatures and effects. This benefit lasts until the start of their next turn."
      },
      {
        "title": "Illusion Defense",
        "rules": "When the wearer is targeted by an illusion spell, they can use a reaction to impose disadvantage on the attacker's roll. Once used, this effect cannot be used again for 1 minute."
      }
    ],
    "levelRequirementReason": "This amulet requires significant magical affinity and resilience, appropriate for those of at least fifth level.",
    "vendorReason": "Inazuma Imports specializes in artifacts from the turbulent seas, ensuring they are well-suited to adventurers who seek to harness the power of Inazuma's elements.",
    "shippingDetail": "Ships via the fastest routes known through the shifting winds, ensuring timely delivery even in stormy weather.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the start of the wearer's next turn or until the amulet is destroyed.",
      "endsWhen": "The effect ends when the amulet is destroyed, expended, or when a new use is triggered.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This amulet’s price reflects its rarity and the mystical power it contains, suitable for those who can afford to invest in unique artifacts.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T22:34:22.161812+00:00",
    "aiReviewedAt": "2026-07-23T22:34:22.161812+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_curiosity_geode_of_wonder": {
    "id": "connectopia_curiosity_geode_of_wonder",
    "name": "Fractured Prism",
    "description": "The Fractured Prism is a shimmering geode that appears to be crafted from fractured glass, its surface etched with intricate patterns of miniature block structures, each one a self-assembling town. When held, it seems to hum with an almost sentient energy, occasionally releasing bursts of spatial distortion that ripple through the air like waves. Touching it can trigger a surge of creative inspiration or cause minor spatial distortions, warping the immediate environment for a brief moment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Spatial Distortion",
      "Creative Inspiration"
    ],
    "vendor": "craft_corner",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spatial Distortion",
        "rules": "When activated as an action, the Fractured Prism creates a minor spatial distortion that lasts for 1 minute. The area affected is a 5-foot radius centered on the item. Any creature within this area must succeed on a DC 12 Dexterity saving throw or be disoriented for 1 round, taking a -2 penalty to all ability checks and attack rolls until the end of its next turn."
      },
      {
        "title": "Creative Inspiration",
        "rules": "As a bonus action, touching the Fractured Prism grants you a +10 temporary inspiration bonus on your next creation-related check or ability. This effect can only be used once per long rest and does not stack with other sources of inspiration."
      }
    ],
    "levelRequirementReason": "This item requires no special proficiency; its power lies in its unique properties rather than the user's skill level.",
    "vendorReason": "The Craft Corner is known for curating rare and magical artifacts that can assist artisans and creators in their endeavors, making it fitting to offer this Fractured Prism.",
    "shippingDetail": "Delivered via standard mail within one week of purchase.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Spatial Distortion; lasts until the end of the next turn for Creative Inspiration",
      "endsWhen": "The effect ends when its duration expires or it is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the item's unique properties and rarity, offering a balance between cost and utility.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:34:37.229726+00:00",
    "aiReviewedAt": "2026-07-23T22:34:37.229726+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_voidreaper_2": {
    "id": "warhammer_voidreaper_2",
    "name": "Void Reaper's Embrace",
    "description": "The Void Reaper's Embrace is a warhammer forged from the molten remains of forgotten stars and twisted by ancient rites. Its surface crackles with dark energy, and when wielded, it seems to draw in light itself, casting shadows deeper than any night. The hammer whispers secrets that could drive even the most steadfast mad, but its power is undeniable—those who dare use it must be vigilant lest they become pawns of the void's oldest entities.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🖤",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "summon shadow imp",
      "inflict fear"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "dark_messenger",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Shadow Imp Summoning",
        "rules": "Activates on a successful melee hit. The summoned imp remains active for 1 minute or until dismissed by the wielder. The imp deals 2d6 necrotic damage to one target within 5 feet and can be commanded to aid the wielder in combat."
      },
      {
        "title": "Fear Infliction",
        "rules": "Has a 10% chance to inflict fear on one target within 30 feet. The target must succeed on a DC 14 Wisdom saving throw or become frightened for up to 1 minute, during which time it has disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "Only those of sufficient power and resolve can wield the Void Reaper's Embrace without succumbing to its malevolent influence.",
    "vendorReason": "The chaos dealer understands the allure and danger of forbidden artifacts like this one, and is willing to trade it for the right price in dark currency.",
    "shippingDetail": "Delivered by shadowy couriers who ensure the package reaches its destination without drawing undue attention.",
    "usage": {
      "activation": "On a successful melee hit",
      "duration": "1 minute or until dismissed",
      "endsWhen": "The imp is dismissed or the wielder's turn ends",
      "charges": "Unlimited, but only one imp may be summoned at a time"
    },
    "priceReason": "Balanced against other legendary items of similar power and danger.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-23T22:34:44.360484+00:00",
    "aiReviewedAt": "2026-07-23T22:34:44.360484+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_obsidian_shard_3": {
    "id": "curiosity_obsidian_shard_3",
    "name": "Whispers of the Fallen Empire",
    "description": "The Whispers of the Fallen Empire is a perfectly smooth obsidian shard that glows faintly, emanating an aura of ancient voices. Held in your hand, it allows you to catch fragments of long-forgotten conversations—rumors of hidden treasures and strategic retreats from battles lost centuries ago. These whispers are surprisingly distracting but provide valuable insights into the empire's downfall, making this shard a must-have for any historian or treasure hunter.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 to Perception checks",
      "5% chance to gain a temporary buff"
    ],
    "vendor": "fate_forge",
    "shippedBy": "swift hawk courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "While holding the Whispers, you gain a +1 bonus to Perception checks. This effect is active as long as you are holding it."
      },
      {
        "title": "Whispering Fortunes",
        "rules": "Once per short or long rest, when you make an Intelligence check related to history or exploration, there is a 5% chance that the result is increased by 2. This effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "The item's effects are subtle and provide valuable but not game-breaking information.",
    "vendorReason": "Fate Forge specializes in relics that offer unique insights into the past, making this shard a perfect fit for their inventory.",
    "shippingDetail": "Delivered swiftly by the swift hawk courier, ensuring you receive your treasure without delay.",
    "usage": {
      "activation": "Instantaneous effect when held",
      "duration": "Active as long as it is being held",
      "endsWhen": "Exhausted after one day of use or if not in hand during a short rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The item provides subtle but valuable bonuses that are not overly powerful, making it a fair price for its effects.",
    "priceOriginal": 200,
    "priceReviewedAt": "2026-07-23T22:35:24.621835+00:00",
    "aiReviewedAt": "2026-07-23T22:35:24.621835+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_shimmering_echo": {
    "id": "teyvat_item_shimmering_echo",
    "name": "Shimmering Echo of Storms",
    "description": "The Shimmering Echo of Storms is a peculiar pebble that glows faintly under the influence of thunderstorms, its surface etched with arcane runes. When held by a wielder, it channels the raw energy of a storm, delivering a lightning bolt to your next attack and a chance to paralyze foes in their tracks. This enchanted stone is said to have been crafted from the residue of a great tempest, making it a rare find indeed.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Storm's Fury",
      "Paralyzing Bolt"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "swift_falcon_messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Storm's Fury",
        "rules": "When you attack with your next melee weapon or ranged weapon on your turn, deal an additional 1d6 lightning damage. This effect can only trigger once per short rest."
      },
      {
        "title": "Paralyzing Bolt",
        "rules": "There is a 20% chance to paralyze the target for one round upon hitting it with this attack. The save DC for resistance is 13. This effect ends if you miss your target or if you use an action, bonus action, or reaction."
      }
    ],
    "levelRequirementReason": "The Shimmering Echo requires a minimum level of 5 to wield its stormy power effectively.",
    "vendorReason": "As the heart of the traveler's market, Mondstadt is known for its diverse array of rare and magical items, including the Shimmering Echo.",
    "shippingDetail": "This item requires special handling due to its fragile nature; it will be delivered via swift falcon messenger within two days.",
    "usage": {
      "activation": "On your turn only, during the attack action or bonus action.",
      "duration": "Instantaneous effect on a hit.",
      "endsWhen": "Missed target, using an action, bonus action, reaction, or at the end of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The Shimmering Echo is priced at 1000 XP due to its limited stock and the magical energy it channels from ancient storms.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:35:08.778795+00:00",
    "aiReviewedAt": "2026-07-23T22:35:08.778795+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crystallized_driftwood": {
    "id": "teyvat_item_crystallized_driftwood",
    "name": "Crystallized Driftwood of the Azure Sea",
    "description": "The Crystallized Driftwood of the Azure Sea, a relic carved from ancient driftwood and imbued with the essence of the sea, radiates a cool azure glow. It whispers secrets to those who hold it, allowing for brief conversations with aquatic creatures – perfect for navigating treacherous underwater realms or avoiding water-based hazards. When submerged in water, this enchanted wood grants you temporary resistance to water damage, ensuring your safety while exploring deep seas.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌊",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Aquatic Communication",
      "Water Damage Resistance"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_current",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Aquatic Communication",
        "rules": "When held and submerged in water for at least one minute, you can communicate with any willing aquatic creature within 30 feet. This effect lasts until the start of your next turn after removing it from water."
      },
      {
        "title": "Water Damage Resistance",
        "rules": "While holding this driftwood, you gain resistance to bludgeoning and piercing damage from non-magical attacks that include a significant aquatic element (such as waves or currents). This effect lasts for 1 minute. You can end it early by speaking the words 'sea calm'."
      }
    ],
    "levelRequirementReason": "This relic is designed to assist adventurers of all levels, offering crucial aid in aquatic environments.",
    "vendorReason": "The harbor's traders specialize in maritime goods and curiosities, making this driftwood an essential item for their clientele.",
    "shippingDetail": "Ships via the Liyue Harbor's own fleet, ensuring swift arrival with minimal delay.",
    "usage": {
      "activation": "Submerging the driftwood in water and holding it.",
      "duration": "1 minute, or until removed from water, whichever ends first.",
      "endsWhen": "The start of your next turn after removing it from water or by speaking 'sea calm'.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This relic combines utility and rarity, offering both a unique item and essential aid for exploring aquatic realms, thus justifying its high price in XP.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T22:35:16.080790+00:00",
    "aiReviewedAt": "2026-07-23T22:35:16.080790+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_archon's_whisper": {
    "id": "teyvat_item_archon's_whisper",
    "name": "Archon’s Whisper - Fragment of Resonance",
    "description": "Archon’s Whisper, a delicate jade statuette adorned with enigmatic carvings, hums softly as it resonates with the ancient wisdom of the Archons. This fragment of power grants you a brief surge of insight and intuition, allowing you to perceive elemental energies around you with uncanny clarity. For 60 seconds, your Wisdom increases by 5, making you an expert at discerning the vulnerabilities of your enemies. The statuette also has a knack for deflecting magical attacks, increasing your chance of successful deflection by 20% when you have a Wisdom modifier of 10 or higher.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Wisdom Boost",
      "Elemental Vulnerability Detection"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "wind_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wisdom Boost",
        "rules": "Activate as a bonus action. Increases your Wisdom by 5 for 60 seconds. This effect can only be used once per short or long rest."
      },
      {
        "title": "Elemental Vulnerability Detection",
        "rules": "Passive ability while the Wisdom Boost is active. Allows you to perceive elemental vulnerabilities on enemies within a 30-foot radius, providing insight into their weaknesses. This effect does not require an action and can be used continuously."
      }
    ],
    "levelRequirementReason": "This item's power requires no minimum level as its effects are subtle enhancements.",
    "vendorReason": "Inazuma Imports specializes in rare artifacts and relics, making this statuette a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Wind Messenger, ensuring swift delivery within 3 days of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "60 seconds",
      "endsWhen": "Ends when you take a short or long rest, or if your Wisdom drops below 10 for any reason.",
      "charges": "Unlimited"
    },
    "priceReason": "The statuette's unique combination of passive and active effects justifies its moderate price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:35:36.832706+00:00",
    "aiReviewedAt": "2026-07-23T22:35:36.832706+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_tart": {
    "id": "leclaire_isle_item_sticky_tart",
    "name": "Glazed Goblin's Delight Tart",
    "description": "The Glazed Goblin's Delight Tart, a suspiciously shiny confection, is said to be favored by mischievous goblins who use it to fuel frantic pastry-making sprees or distract foes with bursts of sugary energy. Bite into this tart and experience an immediate surge of sweetened vitality; your enemies might find themselves momentarily confused while you revel in the sugar rush. This treat is a delightful, if slightly dangerous, way to bolster your reflexes and outmaneuver your opponents.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍬",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Sweetened Vitality",
      "Confusion"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Rolling Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sweetened Vitality",
        "rules": "Upon consuming the tart, you regain 60 hit points. For the following three turns, gain a +2 bonus to Dexterity saving throws and skill checks."
      },
      {
        "title": "Confusion",
        "rules": "There is a 30% chance that your next attack against a creature will be made with disadvantage due to its temporary disorientation from the tart's sugary effects. This effect ends when you make an attack roll or cast a spell."
      }
    ],
    "levelRequirementReason": "This treat is suitable for adventurers of all levels, though beginners might find it more effective.",
    "vendorReason": "The bakers at Dough Depot are known for their experimental and unconventional pastries that blend the mundane with the magical.",
    "shippingDetail": "Delivered by the ever-popular Rolling Cart, which often stops in towns to sell its famous goods.",
    "usage": {
      "activation": "Eat the tart as a bonus action.",
      "duration": "3 turns after consumption.",
      "endsWhen": "The effects end when you make an attack roll or cast a spell.",
      "charges": "Unlimited, but only one effect is active at a time."
    },
    "priceReason": "The tart's rare ingredients and the difficulty of its preparation justify the high price in experience points.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-24T23:57:01.766003+00:00",
    "aiReviewedAt": "2026-07-24T23:57:01.766003+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dough_armor": {
    "id": "leclaire_isle_item_dough_armor",
    "name": "Reinforced Doughard Plate",
    "description": "The Reinforced Doughard Plate is a suit of armor forged from magically hardened dough, crafted in the kitchens of Pastry Palace by master bakers. Its surface gleams with a soft sheen that hints at its enchanted origins, and it emits a delightful aroma of vanilla that lingers around you like a protective charm. This armor not only offers robust protection but also grants resistance to poison damage, making it invaluable against the hazards of pastry projectiles and overzealous bakers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Armor Bonus",
      "Poison Resistance"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Delivery Zeppelin",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Armor Bonus",
        "rules": "When worn, this armor provides a +3 bonus to your AC. This effect is always active while the item is equipped."
      },
      {
        "title": "Poison Resistance",
        "rules": "While wearing the Reinforced Doughard Plate, you gain resistance to poison damage. This resistance persists for 1 hour upon donning the armor and can be refreshed by removing and reequipping it."
      }
    ],
    "levelRequirementReason": "Crafted from enchanted dough and requiring precise magical crafting, this armor is reserved for players of at least 9th level.",
    "vendorReason": "Pastry Palace, known for its culinary prowess and magical touch, offers unique items that blend the mundane with the mystical.",
    "shippingDetail": "The Delivery Zeppelin ensures swift delivery from the kitchens of Pastry Palace to your doorstep, ensuring you receive your armor fresh from the ovens.",
    "usage": {
      "activation": "Passive effect; always active while equipped.",
      "duration": "Instantaneous and continuous while worn",
      "endsWhen": "Exhausted upon removal or destruction of the item",
      "charges": "Unlimited, recharges upon donning"
    },
    "priceReason": "Balanced to be a valuable but not overpowered addition to any character's arsenal at this level.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:35:58.263509+00:00",
    "aiReviewedAt": "2026-07-23T22:35:58.263509+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosting_sculpture": {
    "id": "leclaire_isle_item_frosting_sculpture",
    "name": "Sweet Sculpting Consultation",
    "description": "Sweet Sculpting Consultation with Pipkin Crumblesprout is an invaluable service for bakers and confectioners. Pipkin, a Frosting Sculptor of unparalleled skill, offers his expertise in crafting exquisite edible sculptures. He provides detailed advice on flavor combinations to ensure your creation not only looks perfect but tastes divine as well. Pipkin's guidance also temporarily enhances your Charisma when dealing with merchants, making it easier to negotiate and sell your confections.",
    "category": "services",
    "price": 1000,
    "icon": "🎂",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Enhances Charisma for merchant interactions",
      "Advice on flavor and structural integrity"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Sugar Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When interacting with merchants within the next hour, you gain a +2 bonus to your Charisma (Deception) checks."
      },
      {
        "title": "Expert Advice",
        "rules": "You receive two pieces of advice from Pipkin regarding flavor combinations and structural integrity for your creation. This effect lasts until the end of the day."
      }
    ],
    "levelRequirementReason": "Beginners can benefit most from Pipkin's expertise in crafting edible masterpieces.",
    "vendorReason": "Sweet Supplies is a hub for all things sweet, ensuring that only the best confectionery services are available to their clients.",
    "shippingDetail": "Delivered by the swift Sugar Pigeon, ensuring your consultation arrives fresh and ready to begin.",
    "usage": {
      "activation": "Passive effect upon purchasing the service; active benefits last for one hour after first use.",
      "duration": "One hour from first use",
      "endsWhen": "Ends when the time expires or you stop interacting with merchants.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a rare service, offering significant value in both flavor and salesmanship.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T22:35:39.951802+00:00",
    "aiReviewedAt": "2026-07-23T22:35:39.951802+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_forbidden_echo_shard": {
    "id": "kivotos_item_forbidden_echo_shard",
    "name": "Resonance of Ruin",
    "description": "The Resonance of Ruin is a jagged, ethereal shard forged from ancient ruins, pulsing with chaotic energy. When you touch it, fleeting echoes of past battles reveal hidden weaknesses in your enemies, granting strategic insight. However, prolonged exposure can distort reality, causing unsettling hallucinations that last until the next dawn. The artifact's power draws unwanted attention from the Academy’s security forces, making it a forbidden relic known to scholars and adventurers alike.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Expose Hidden Weaknesses",
      "Hallucinatory Insight"
    ],
    "vendor": "club_supply",
    "shippedBy": "black_market_courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Expose Hidden Weaknesses",
        "rules": "As an action, you touch the Resonance of Ruin to activate its power. This reveals a hidden weakness in one enemy within 30 feet, granting advantage on an attack roll or saving throw against that target for 1 minute. The effect ends if you lose sight of the target."
      },
      {
        "title": "Hallucinatory Insight",
        "rules": "There is a 20% chance (DC 14) that when you use the Resonance of Ruin, you are briefly overwhelmed by hallucinations. These last until your next short or long rest and can be resisted with a successful Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The artifact's chaotic energy requires a seasoned adventurer to wield it safely.",
    "vendorReason": "Club Supply deals in rare artifacts, and the Resonance of Ruin is one such relic known for its forbidden nature.",
    "shippingDetail": "Special handling required; delivery may take an additional day due to restricted routes.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute, until the target is out of sight or you lose concentration (as if concentrating on a spell)",
      "endsWhen": "You lose sight of the target or use it again within the same combat",
      "charges": "Recharge after 8 hours of rest"
    },
    "priceReason": "The Resonance of Ruin is highly sought after for its strategic value and forbidden nature, justifying a price commensurate with rare artifacts.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-24T23:56:50.571488+00:00",
    "aiReviewedAt": "2026-07-24T23:56:50.571488+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_study_pack": {
    "id": "kivotos_item_student_study_pack",
    "name": "Brain Boost Bundle",
    "description": "The Brain Boost Bundle is a meticulously crafted student kit, bound in a durable leather case. Inside lie precision-ground caffeine tablets, memory-aiding elixirs, and an unprecedented quantity of notepads that seem to multiply with each use. This bundle enhances your focus so much that you can solve complex puzzles or unravel ancient scripts with ease, though it doesn't grant any magical abilities. Students trust the Brain Boost Bundle to keep them sharp during their most taxing studies.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧠",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "concentration_boost_2",
      "skill_check_bonus_1"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Concentration Boost (Instantaneous)",
        "rules": "Activate as a bonus action. You gain advantage on Wisdom (Perception) checks and can maintain concentration for an additional round without expending a spell slot."
      },
      {
        "title": "Skill Check Bonus (+1 to One Skill)",
        "rules": "You may apply this bonus once per short or long rest, enhancing your proficiency in one skill of your choice by +1 on ability checks and saving throws. This effect ends when you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "The kit is designed for students who are just starting their academic journey.",
    "vendorReason": "The Student Store caters exclusively to the educational needs of young scholars, ensuring they have all the tools necessary for success.",
    "shippingDetail": "Ships within 3 days via standard mail service.",
    "usage": {
      "activation": "Bonus action or passive effect during a short or long rest.",
      "duration": "Instantaneous; lasts until end of next turn for the concentration boost, and ends at the start of your next short or long rest for the skill check bonus.",
      "endsWhen": "At the start of your next short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Brain Boost Bundle is priced high due to its unique and specialized contents, which are difficult to replicate.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:35:53.710279+00:00",
    "aiReviewedAt": "2026-07-23T22:35:53.710279+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_chronometric_shard": {
    "id": "almost_edge_chronometric_shard",
    "name": "Chronometric Shard",
    "description": "A pulsing shard of temporal energy, harvested from a glitch in the Boundary Between Worlds, the Chronometric Shard allows you to bend time itself. Holding it briefly slows your foes' attacks and enhances your own movement speed, granting you the edge when seconds matter most. However, its power can be fickle; if you hold it too long, the temporal instability might loop you back in time, trapping you in a paradoxical quirk of reality.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Disruption",
      "Swift Motion"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Temporal Disruption",
        "rules": "As a bonus action, activate to reduce enemy attack speeds by 20% for 3 turns. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Swift Motion",
        "rules": "Increases your movement speed by 50% for 2 turns upon activation as a reaction to an attack against you. This effect cannot be used more than twice in a single combat encounter and has no save DC."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle the temporal instability without risk.",
    "vendorReason": "The Void Merchant traffics in rare, otherworldly artifacts like this Chronometric Shard, harvested from interdimensional anomalies.",
    "shippingDetail": "Ships via Dimensional Courier, arriving with the next temporal fluctuation.",
    "usage": {
      "activation": "Bonus action for Temporal Disruption; reaction to an attack for Swift Motion.",
      "duration": "Temporal Disruption lasts 3 turns. Swift Motion lasts 2 turns after reacting to an attack.",
      "endsWhen": "Exhausts upon use or when the effect duration ends.",
      "charges": "Unlimited, but limited by rest."
    },
    "priceReason": "Balanced price for a rare item with two potent effects that can shift combat dynamics.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:36:53.406820+00:00",
    "aiReviewedAt": "2026-07-23T22:36:53.406820+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_mirror_of_lost_faces": {
    "id": "almost_edge_mirror_of_lost_faces",
    "name": "Mirror of Lost Faces",
    "description": "The Mirror of Lost Faces stands as a polished obsidian mirror, its surface etched with ancient runes that whisper secrets of forgotten worlds. Gazing into it reveals not only the faces of those who have fallen off the edge but also fleeting glimpses of realities long lost to time. Each glance grants a brief buff (strength, dexterity, or intelligence) for one turn, yet at the cost of a small fragment of your memory, which manifests as minor or significant lapses depending on the roll of a six-sided die.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👁️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Glimpse of Forgotten Realities",
      "Temporary Buff"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Spectral Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Glimpse of Forgotten Realities",
        "rules": "When gazed into, the mirror reveals one random buff (strength, dexterity, or intelligence) for one turn. The effect is instantaneous and applies immediately upon use. There is a chance to reveal hidden secrets in the area with a 20% probability. This effect lasts until the start of your next turn."
      },
      {
        "title": "Temporary Buff",
        "rules": "Upon using the mirror, you gain one random buff (strength, dexterity, or intelligence) for one turn. The specific stat is determined by rolling a 20-sided die: roll 1-5 for strength, 6-10 for dexterity, and 11-20 for intelligence. This effect ends when the start of your next turn arrives."
      }
    ],
    "levelRequirementReason": "This mirror requires a level 8 character to use due to its ancient magic and the risk it poses to one's memory.",
    "vendorReason": "The Liminal Trader specializes in curiosities that bridge worlds, making this mirror an appropriate addition to their inventory.",
    "shippingDetail": "Ships through spectral winds, arriving within a week of purchase.",
    "usage": {
      "activation": "A free action to gaze into the mirror.",
      "duration": "Instantaneous effect; lasts until the start of your next turn.",
      "endsWhen": "The start of your next turn or when the buff ends due to natural expiration.",
      "charges": "Unlimited, but limited by memory risk."
    },
    "priceReason": "This price reflects its epic rarity and the potential for significant memory loss.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T22:36:42.040404+00:00",
    "aiReviewedAt": "2026-07-23T22:36:42.040404+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_repair": {
    "id": "internet_meme_repair",
    "name": "Viral Echo Restoration",
    "description": "This digital service, delivered by data_dealer's encrypted courier, allows you to cleanse your mind of a pesky viral meme. By running advanced algorithms through your neural network, it removes one particularly irksome meme – but beware! The process can sometimes backfire, leaving you with an even more insufferable meme than before. In the aftermath, your charisma is temporarily boosted, making you sharper in social interactions for just a short while.",
    "category": "services",
    "price": 1000,
    "icon": "🔁",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Remove a single viral meme (temporary)",
      "Boost to charisma (1 turn)"
    ],
    "vendor": "data_dealer",
    "shippedBy": "digital_signal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Meme Removal",
        "rules": "Activates as a bonus action. The target meme is removed from your mind, preventing it from affecting you for the next hour. However, there's a chance that a new, potentially more irritating meme will replace the old one."
      },
      {
        "title": "Charisma Boost",
        "rules": "Your charisma increases by 1 until the end of your next turn. This effect is not cumulative with other sources of charisma boosts."
      }
    ],
    "levelRequirementReason": "Anyone overwhelmed by viral memes can benefit from this service, making it accessible to all levels.",
    "vendorReason": "As a data specialist, data_dealer is well-equipped and sought out for such digital services that enhance mental clarity.",
    "shippingDetail": "The service is delivered through encrypted channels ensuring no one else can see the memes being removed or added to your mind.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous, with effects lasting for 1 turn and 1 hour respectively",
      "endsWhen": "The effect of meme removal ends when the time expires; charisma boost ends at the end of your next turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service balances the cost with its unique and potentially unpredictable outcome, ensuring a fair value for players.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T22:36:58.578450+00:00",
    "aiReviewedAt": "2026-07-23T22:36:58.578450+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_sparkling_rune": {
    "id": "teyvat_item_sparkling_rune",
    "name": "Sparkling Rune of Aetherial Resonance",
    "description": "The Sparkling Rune of Aetherial Resonance is a tiny, glowing crystal that pulses with aetheric energy. Crafted by the celestial beings who once walked among the stars, it amplifies your connection to elemental magic, granting you resistance and vulnerability in tandem. This relic was found amidst the ruins of an ancient observatory in Teyvat, where it was believed to channel the power of the Archon directly into its wielder's hands.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "resistance_vulnerability",
      "elemental_damage_bonus"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swiftwind Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Resistance and Vulnerability",
        "rules": "When you activate the rune, you gain resistance to one elemental damage type of your choice until the start of your next turn. However, you become vulnerable to a different elemental damage type with the same DC as the save for 1 minute after activation."
      },
      {
        "title": "Elemental Damage Bonus",
        "rules": "Whenever you deal damage with an attack that uses one of the two elemental types you are currently resistant and vulnerable to, you gain advantage on the roll. This effect ends when you stop using attacks involving either element for 1 minute."
      }
    ],
    "levelRequirementReason": "The rune's celestial magic requires a certain level of arcane knowledge to harness its full potential.",
    "vendorReason": "Mondstadt is known for its scholarly community, which frequently trades in relics and curiosities like the Sparkling Rune.",
    "shippingDetail": "The rune is carefully packed to prevent any accidental damage during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous, with a 1-minute cooldown between activations",
      "endsWhen": "You stop using attacks involving the elemental types for at least 1 minute; or if you take an action that requires concentration on another effect",
      "charges": "Unlimited"
    },
    "priceReason": "The rune's rarity and the advanced crafting techniques required to produce it justify its higher price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T22:37:05.773442+00:00",
    "aiReviewedAt": "2026-07-23T22:37:05.773442+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_loyalty_token": {
    "id": "teyvat_item_loyalty_token",
    "name": "Token of the Five Pillars' Accord",
    "description": "The Token of the Five Pillars' Accord is a smooth jade disc etched with intricate carvings that tell the story of Liyue's Five Pillars. This token not only grants you special treatment from merchants but also offers unparalleled discounts on goods and services within the region. Merchants whisper that once you possess this token, they will treat you like royalty—though perhaps more literally than they intended for Wario.",
    "category": "faction",
    "price": 1000,
    "icon": "💰",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "exclusive_discounts",
      "favor_with_merchants"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Merchant's Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exclusive Discounts",
        "rules": "By holding the Token of the Five Pillars' Accord, you unlock a +2 bonus to your purchase rolls at any Liyue merchant. This effect lasts until you spend more than 50 gold pieces in a single transaction or until you use another item that offers similar benefits."
      },
      {
        "title": "Favor with Merchants",
        "rules": "When you present the token, merchants will extend their best greetings and offer you special treatment. They may provide you with a free minor item (worth up to 10 gold pieces) upon your next purchase or grant you a +1 bonus to any Charisma-based checks made in Liyue."
      }
    ],
    "levelRequirementReason": "This token is accessible to all adventurers, serving as an entry into the social and economic networks of Liyue.",
    "vendorReason": "Liyue Harbor merchants are known for their loyalty to the Five Pillars and will honor this token as a sign of respect and goodwill.",
    "shippingDetail": "The Token is delivered by trusted hands within the Merchant's Caravan, ensuring its safe arrival at Liyue Harbor.",
    "usage": {
      "activation": "Passive effect when in possession of the token.",
      "duration": "Until spent or replaced with another token of similar use.",
      "endsWhen": "Once you spend more than 50 gold pieces in a single transaction or until you no longer have this token in your possession.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The fair price reflects the token's value as both a social and economic tool within Liyue, providing significant but balanced benefits to adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:37:42.506926+00:00",
    "aiReviewedAt": "2026-07-23T22:37:42.506926+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_chronal_amulet": {
    "id": "teyvat_item_chronal_amulet",
    "name": "Chronal Amulet of Temporal Distortion",
    "description": "The Chronal Amulet of Temporal Distortion is a delicate trinket, its surface etched with arcane runes that shimmer like the auroras of Inazuma. Crafted from ancient time-weathered metal and imbued with the essence of forgotten timelines, it hums with latent temporal power. Use it wisely; the amulet can rewind time on critical hits to reset combat, but beware—overuse might cause you to loop indefinitely chasing after your own footsteps in the past!",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "rewinds_time_on_critical_hit",
      "slows_enemy_movement"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Rewind Time on Critical Hit",
        "rules": "On a critical hit, the wearer can use an action to rewind time for 1 round. This effect ends if the wearer takes damage or moves more than 5 feet."
      },
      {
        "title": "Slow Enemy Movement",
        "rules": "For every minute the amulet remains active in combat, all enemies within a 30-foot radius have their movement speed reduced by 10 feet. This effect ends when the wearer uses another action or the amulet runs out of charges."
      }
    ],
    "levelRequirementReason": "This amulet requires significant control over time to avoid unintended temporal consequences.",
    "vendorReason": "Inazuma Imports specializes in exotic and arcane artifacts, making this amulet a fitting addition to their wares.",
    "shippingDetail": "Delivered with the Sea Serpent Express, ensuring safe delivery even across the vast oceans of Teyvat.",
    "usage": {
      "activation": "Action",
      "duration": "1 round per critical hit or until used again",
      "endsWhen": "Taking damage or moving more than 5 feet",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's balanced price reflects its ability to manipulate time without causing game-breaking temporal loops.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T22:37:12.411295+00:00",
    "aiReviewedAt": "2026-07-23T22:37:12.411295+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_fang_amulet": {
    "id": "animatopia_fang_amulet",
    "name": "Howler's Charm",
    "description": "Howler's Charm is a crudely carved amulet made from the fang of a juvenile Rumbleclaw, known for its surprisingly melodic roars that can strike fear into the hearts of lesser creatures. When worn, it boosts your intimidation skills by +10 and has a 5% chance to instill fear in weaker enemies, enhancing your presence on the battlefield. This amulet is a rare find from the Tribal Trader, a vendor known for their unique and powerful wares.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐺",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Intimidation Boost",
      "Fear Chance"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Giant Beetle Courier",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Intimidation Boost",
        "rules": "When activated as an action, this amulet grants the wearer a +10 bonus to Intimidate checks for 1 minute. The effect ends early if the wearer is incapacitated or falls unconscious."
      },
      {
        "title": "Fear Chance",
        "rules": "While wearing this charm, there's a 5% chance per round that it will instill fear in any creature within 30 feet of you who has fewer hit dice than you. The target must make a DC 12 Wisdom saving throw or be frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "The charm's powerful effects necessitate a minimum level to ensure the wearer can effectively use and manage its capabilities.",
    "vendorReason": "The Tribal Trader is known for their unique and rare wares, making this amulet an appropriate addition to their inventory.",
    "shippingDetail": "Delivered with the help of a Giant Beetle Courier, ensuring swift delivery from the far reaches of Animatopia.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "1 minute or until incapacitated or unconscious.",
      "endsWhen": "The wearer is incapacitated or falls unconscious.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The charm's balanced price reflects its rarity and the moderate power level of its effects.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:37:31.031806+00:00",
    "aiReviewedAt": "2026-07-23T22:37:31.031806+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_primal_song": {
    "id": "animatopia_primal_song",
    "name": "Echoes of the Ancients",
    "description": "Echoes of the Ancients is a bone flute crafted by a skilled shaman. Its haunting melody resonates through the forest, temporarily boosting party morale and revealing hidden pathways within the ancient woods. Upon hearing it, all allies within earshot gain a +2 bonus to their next saving throw against fear or confusion effects for 1 minute, and there is a small chance (10%) that it will uncover an undetected secret door nearby.",
    "category": "services",
    "price": 1000,
    "icon": "🎶",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Boosts morale",
      "Reveals hidden doors"
    ],
    "vendor": "forest_market",
    "shippedBy": "Swift Squirrel Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "When played, all allies within earshot gain a +2 bonus to their next saving throw against fear or confusion effects for the duration of 1 minute. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Reveal Hidden Doors",
        "rules": "There is a small chance (10%) that upon playing, Echoes of the Ancients will uncover an undetected secret door within 5 feet of the shaman. This effect cannot be used more than once per day."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early in a campaign, allowing players to quickly benefit from its effects without requiring high-level proficiency.",
    "vendorReason": "The forest market thrives on the unique items crafted by local shamans, and Echoes of the Ancients is one such treasure.",
    "shippingDetail": "Delivered swiftly through the dense undergrowth, ensuring timely arrival to adventurers in need.",
    "usage": {
      "activation": "Playing the flute as an action",
      "duration": "1 minute or until used up",
      "endsWhen": "The effect ends when its duration expires or when a new echo is played",
      "charges": "Unlimited uses, but only one secret door can be revealed per day"
    },
    "priceReason": "Echoes of the Ancients offers significant utility without being overpowered, making it a fair value for its rarity and effects.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:37:20.991973+00:00",
    "aiReviewedAt": "2026-07-23T22:37:20.991973+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_beetle_shell": {
    "id": "animatopia_beetle_shell",
    "name": "Chittering Armor Scales",
    "description": "Crafted from the discarded shells of giant Chitter Beetles, these scales are surprisingly tough and form a part of the armor known as 'Chittering Armor Scales.' The scales are lightweight enough not to hinder movement but offer formidable protection, deflecting minor blows with ease. When threatened, they have an unsettling tendency to rattle in a distracting chitter sound that could momentarily disorient attackers, making you feel like a living beacon for hungry predators.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐞",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Armor Class +1",
      "Distracting Chitter Sound (2%)"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Winged Grub Delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Distracting Chitter Sound",
        "rules": "There is a 2% chance that the scales will produce a distracting chitter sound when you are attacked. This effect has no save or duration; it triggers as an instantaneous reaction to any attack directed at you, and you can suppress this effect once per short rest."
      },
      {
        "title": "Armor Class +1",
        "rules": "This effect provides a passive bonus of +1 to your Armor Class. It is always active while wearing the armor scales and does not require any action or activation."
      }
    ],
    "levelRequirementReason": "The scales' resilience requires some experience with handling tough materials and understanding the beetle's defensive mechanisms.",
    "vendorReason": "Beast Bazaar specializes in unique items crafted from natural resources, making it the perfect vendor for these armor scales.",
    "shippingDetail": "Shipped by Winged Grub Delivery; expect delivery within a week of purchase.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous reaction to attacks, or until suppressed with a short rest",
      "endsWhen": "Suppressed once per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The scales are crafted from rare beetle shells and require intricate craftsmanship, justifying the higher price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:37:54.907240+00:00",
    "aiReviewedAt": "2026-07-23T22:37:54.907240+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_liyue_guardian_amulet": {
    "id": "teyvat_item_liyue_guardian_amulet",
    "name": "Liyue Guardian's Blessing",
    "description": "Forged by the skilled artisans of Liyue Harbor, this amulet radiates a soothing glow, imbued with the protective essence of the Liyue Guardian. Crafted from obsidian and garnet, it whispers of ancient battles fought and won against the fiery elements. Wielding this amulet grants you resistance to Fire damage, ensuring your survival in fiery encounters. Additionally, it subtly enhances your agility, increasing your movement speed by 10 feet per hour, making you a nimble target for enemies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 21,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Fire Resistance +3",
      "Movement Speed Boost (+10 ft/hour)"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Liyanese Shipping Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fire Damage",
        "rules": "You gain resistance to fire damage. This effect is passive and does not require activation."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "Your walking speed increases by 10 feet for each hour you wear the amulet, until it is removed or destroyed. This effect ends when the amulet is no longer worn."
      }
    ],
    "levelRequirementReason": "The amulet's protective enchantments are accessible to even the most novice adventurers.",
    "vendorReason": "Liyue Harbor artisans have long been known for their mastery of fire-resistant materials and protective charms.",
    "shippingDetail": "Ships via the Liyanese Shipping Cart, ensuring timely delivery through the bustling harbor streets.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until removed or destroyed.",
      "endsWhen": "Wearing ends when the amulet is removed or it is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The amulet's balance ensures it remains a valuable yet fair addition to any adventurer's gear, offering both protection and mobility at an accessible price point.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:38:24.399751+00:00",
    "aiReviewedAt": "2026-07-23T22:38:24.399751+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_inazuma_phantom_scroll": {
    "id": "teyvat_item_inazuma_phantom_scroll",
    "name": "Phantom Scroll of Transient Dreams",
    "description": "The Phantom Scroll of Transient Dreams is a delicate, ink-stained scroll that whispers secrets of Inazuma’s phantoms. Crafted from the very essence of the city’s transient dreams, it allows you to glimpse fleeting visions of possible futures. While mostly blurry images of Wario indulging in cake, these glimpses can offer crucial insight into enemy strategies and weaknesses, making it an invaluable tool for those who dare to dream.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Visionary Glimpse",
      "Phantom Insight"
    ],
    "vendor": "Inazuma Imports",
    "shippedBy": "Dimensional Portal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Visionary Glimpse",
        "rules": "As a bonus action, you can briefly glimpse into possible futures. This grants you insight into the next enemy's attack pattern and provides temporary dodge chance for all attacks for 5 seconds. The scroll expends one charge upon use."
      },
      {
        "title": "Phantom Insight",
        "rules": "Activate as a bonus action to gain advantage on an Intelligence (Arcana) check related to enemy weaknesses or tactics for the next minute. This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This scroll is accessible early, allowing players to quickly adapt to challenges.",
    "vendorReason": "Known for importing rare and exotic items from Inazuma, this vendor offers unique tools like the Phantom Scroll of Transient Dreams.",
    "shippingDetail": "Ships via a dimensional portal, ensuring swift delivery to any plane.",
    "usage": {
      "activation": "Bonus action for Visionary Glimpse; Bonus action for Phantom Insight",
      "duration": "5 seconds for Visionary Glimpse; lasts until the start of your next turn for Phantom Insight",
      "endsWhen": "Exhausted after one use per fight, or when destroyed.",
      "charges": "Recharges on a short rest"
    },
    "priceReason": "The scroll's rarity and utility justify its moderate price of 1000 XP.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T22:38:06.585273+00:00",
    "aiReviewedAt": "2026-07-23T22:38:06.585273+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_enchanting_services_rune": {
    "id": "faerun_item_enchanting_services_rune",
    "name": "Rune of Minor Restoration (Service)",
    "description": "The Rune of Minor Restoration is a glowing, rune-shaped charm that hums with latent magic. Crafted from enchanted quartz and blessed by a druidic circle, it offers swift relief to ailments. This tiny talisman can mend up to 60 hit points lost due to minor wounds or diseases, and it banishes the effects of one level of poison or disease. Ideal for adventurers who've faced countless perils in Faerûn.",
    "category": "services",
    "price": 1000,
    "icon": "🩹",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "heal_60_hit_points",
      "remove_poison_or_disease_effect"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged_familiar",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Healing",
        "rules": "Activate as a bonus action to restore up to 60 hit points. The effect is instantaneous, and it ends when the target takes damage or ends its turn."
      },
      {
        "title": "Poison or Disease Cure",
        "rules": "Activates on command to remove one level of poison or disease from the target. This effect has no save requirement and ends if the condition persists for more than 1 hour after use."
      }
    ],
    "levelRequirementReason": "This minor restorative is crafted for adventurers who may face minor injuries but are not yet experienced enough to handle more potent healing magic.",
    "vendorReason": "Baldur's Bazaar stocks a variety of magical trinkets and charms, including this one, as it caters to the needs of adventurers of all levels.",
    "shippingDetail": "Shipped by a winged familiar for quick delivery directly to your doorstep.",
    "usage": {
      "activation": "Bonus action or command word",
      "duration": "Instantaneous; ends when the target takes damage or ends its turn",
      "endsWhen": "The effect ends if the condition persists for more than 1 hour after use.",
      "charges": "Unlimited, as it is a non-consumable magical charm."
    },
    "priceReason": "This rune is priced at 1000 XP to reflect its minor healing capabilities and the druidic magic imbued within.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:38:01.350892+00:00",
    "aiReviewedAt": "2026-07-23T22:38:01.350892+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_obsidian_amulet": {
    "id": "faerun_item_obsidian_amulet",
    "name": "Amulet of Whispering Shadows",
    "description": "Forged from polished obsidian, this amulet hums with an unsettling energy that whispers secrets of shadowy realms into its wearer's ear. Crafted by a forgotten artisan in the depths of Undermountain, it grants night vision and advantage on Stealth checks, making the bearer a master of concealment. The amulet is said to detect hidden objects, but one must handle it with caution; its whispering might drive even the bravest soul mad.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "advantage_on_stealth_checks",
      "grant_night_vision"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "giant_eagle",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "The wearer gains advantage on Dexterity (Stealth) checks. This effect lasts for the duration of one short rest or until the amulet is removed."
      },
      {
        "title": "Grant Night Vision",
        "rules": "The wearer can see in dim light as if it were bright light, up to 60 feet away. This effect is active while worn and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "This amulet requires a minimum character level of 5 due to its intricate craftsmanship and the mystical forces it harnesses.",
    "vendorReason": "Waterdeep Market is known for its diverse array of magical curiosities, including rare artifacts like this amulet.",
    "shippingDetail": "Shipped by a giant eagle courier, the delivery can take up to two weeks due to the fragile nature of the item and the need for careful handling.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Until removed or until the wearer completes one short rest",
      "endsWhen": "The amulet is removed or at the end of a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its level requirement and unique effects, this item's price reflects its rarity and mystical properties.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:38:30.598949+00:00",
    "aiReviewedAt": "2026-07-23T22:38:30.598949+00:00",
    "aiReviewVersion": 1
  },
  "fate_rune_reading": {
    "id": "fate_rune_reading",
    "name": "Fate Rune Reading",
    "description": "Consult the cryptic Fate Runes inscribed by the Mysterious Fate Forger. This ancient service takes a full hour, during which the forger meticulously carves and interprets runes to reveal your fate's potential. With a 30% chance of success, you might uncover hidden weaknesses in foes or gain a minor luck buff that lasts an hour. Prepare for cryptic advice and be wary of unintended consequences—fighting badgers may not be far-fetched.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 28,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Minor Luck Buff",
      "Reveal Hidden Weakness"
    ],
    "vendor": "fate_forge",
    "shippedBy": "scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Luck Buff",
        "rules": "The recipient gains advantage on one ability check of their choice. This effect lasts for 1 hour or until you use this service again."
      },
      {
        "title": "Reveal Hidden Weakness",
        "rules": "There is a 30% chance that the forger will reveal a hidden weakness in an enemy's defenses, which can be used during combat. This effect is usable once per day and requires no saving throw."
      }
    ],
    "levelRequirementReason": "Beginners may seek guidance to navigate their first adventures.",
    "vendorReason": "The Mysterious Fate Forger has a reputation for uncovering truths hidden in ancient runes.",
    "shippingDetail": "Delivered by enchanted scroll, the service takes one day to be activated after purchase.",
    "usage": {
      "activation": "Passive effect once per day; requires no action to activate.",
      "duration": "1 hour or until used again.",
      "endsWhen": "The hour-long interpretation ends or you use this service again.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "Balanced to offer cryptic yet useful insights for adventurers of all levels.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:38:17.869312+00:00",
    "aiReviewedAt": "2026-07-23T22:38:17.869312+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ringwraith_shards": {
    "id": "middle_earth_ringwraith_shards",
    "name": "Wraith's Echo Shard",
    "description": "The Wraith's Echo Shard is a jagged, spectral fragment that glows faintly in the dark. When held, it releases a chilling whisper of despair, causing nearby foes to falter with fear. The shard also subtly saps your mental fortitude, leaving you feeling unsettled after use. A piece of the Ringwraiths' sorrow made manifest, this relic is said to have been crafted by ancient forces during the War of the Ring.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "fear_chance_10%",
      "mental_sap"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fear Aura",
        "rules": "When activated as an action within 5 feet, this shard releases a fear aura that lasts for 1 minute. Creatures in the area must succeed on a DC 12 Wisdom saving throw or become frightened for the duration."
      },
      {
        "title": "Mental Sapping",
        "rules": "Using the shard causes you to feel mentally drained until your next short rest, dealing 1 point of Wisdom damage and reducing your maximum Wisdom by 1 (this effect is temporary and resets after a short rest)."
      }
    ],
    "levelRequirementReason": "The Wraith's Echo Shard requires a minimum level to harness its spectral energies.",
    "vendorReason": "Elrond, master of Rivendell, sells these shards as part of his collection of ancient artifacts.",
    "shippingDetail": "Delivered by a swift winged horse within three days of order placement.",
    "usage": {
      "activation": "Action: Activate the shard to release its aura and sapping effect.",
      "duration": "Instantaneous activation; lasts until the end of your next turn.",
      "endsWhen": "The effect ends when you are no longer holding the shard or use it again.",
      "charges": "Unlimited uses, but the effect cannot be used again until after a short rest."
    },
    "priceReason": "This shard is priced at 1000 XP due to its rarity and the power of the Ringwraiths' essence it contains.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:39:06.327006+00:00",
    "aiReviewedAt": "2026-07-23T22:39:06.327006+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dwarven_battleaxe_of_grit": {
    "id": "middle_earth_dwarven_battleaxe_of_grit",
    "name": "Stonebeard's Stubborn Swing",
    "description": "Stonebeard's Stubborn Swing is a dwarven battleaxe forged from ancient, enchanted stone in the heart of Mount Ironfist. Its very weight seems to imbue you with unyielding determination, making it practically impossible for even the most persistent foes to escape your wrath. The axe's adamantium blade gleams with an inner fire that never fades, and its hilt is wrapped in leather that has absorbed countless blows over centuries of use.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "determination",
      "poison_resistance"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_worm",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Determination",
        "rules": "When you make a melee attack with Stonebeard's Stubborn Swing, you gain temporary hit points equal to 1d8 + your Strength modifier. This effect can occur once per short or long rest."
      },
      {
        "title": "Poison Resistance",
        "rules": "While wielding Stonebeard's Stubborn Swing, you have advantage on saving throws against poison effects and are immune to poison damage from non-magical sources. This effect lasts until the start of your next turn after using it in combat."
      }
    ],
    "levelRequirementReason": "This axe is crafted with a complexity that requires a seasoned warrior, ensuring its wielder can harness both its physical and spiritual might.",
    "vendorReason": "The dwarves of Mount Ironfist are renowned for their craftsmanship in creating weapons that resonate with the spirit of their creators.",
    "shippingDetail": "Ships via a giant worm, which may cause a slight delay due to its unpredictable route through underground caverns.",
    "usage": {
      "activation": "Melee attack",
      "duration": "Instantaneous for each effect; Determination lasts until the start of your next turn after using it in combat.",
      "endsWhen": "The effects end when you finish a short or long rest, or if you stop wielding the axe.",
      "charges": "Unlimited"
    },
    "priceReason": "This axe is crafted from ancient stone and imbued with dwarven magic, making it a rare but balanced find for those who can wield its power.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-24T23:57:32.328628+00:00",
    "aiReviewedAt": "2026-07-24T23:57:32.328628+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_gondorian_scroll_of_forgotten_prayers": {
    "id": "middle_earth_gondorian_scroll_of_forgotten_prayers",
    "name": "Echoes of the Faithful",
    "description": "The Echoes of the Faithful is a tattered scroll, its parchment yellowed by time and inscribed with ancient Gondorian prayers that whisper of valorous deeds long past. When unrolled, it emits a soft glow, healing the wielder by 75 hit points and granting them a +2 bonus to Wisdom saving throws for an hour. The divine energy sometimes brings unsettling visions, but those who can endure these visions may invoke a rare chance of divine intervention during their next action.",
    "category": "consumables",
    "price": 1000,
    "icon": "🙏",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "divine_healing",
      "wisdom_bonus"
    ],
    "vendor": "shire_shop",
    "shippedBy": "silver_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Healing",
        "rules": "Using an action, the wielder can unroll the scroll to heal themselves by 75 hit points. The effect ends immediately if the wielder takes any damage or falls unconscious."
      },
      {
        "title": "Wisdom Bonus",
        "rules": "The wielder gains a +2 bonus to Wisdom saving throws for one hour after using the scroll. This benefit is lost if the wielder fails a Wisdom saving throw during this time."
      }
    ],
    "levelRequirementReason": "This scroll is accessible to all, as it is a potent reminder of Gondor's faith and resilience.",
    "vendorReason": "The Shire Shop specializes in relics that connect the region with its ancient past, making this scroll an ideal addition to their inventory.",
    "shippingDetail": "Ships via Silver Hawk, known for swift and secure deliveries across Middle-earth.",
    "usage": {
      "activation": "action",
      "duration": "one hour or until the wielder takes damage or falls unconscious",
      "endsWhen": "the wielder takes damage or falls unconscious; ends after one hour if undisturbed",
      "charges": "unlimited"
    },
    "priceReason": "The Echoes of the Faithful is priced at 1000 XP, reflecting its divine origin and the skill required to interpret its ancient prayers.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-24T23:57:15.676292+00:00",
    "aiReviewedAt": "2026-07-24T23:57:15.676292+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_glowing_mushroom": {
    "id": "mushroom_kingdom_item_glowing_mushroom",
    "name": "Glowshroom of Unending Delight",
    "description": "The Glowshroom of Unending Delight is a vibrant fungi with an ethereal glow that seems to pulse with life. It's said to be a favorite among the Mushroom Kingdom elite, often seen in the hands of Princess Peach herself. This mushroom bestows a radiant aura that enhances your luck and slightly reduces fall damage, making you less prone to missteps even on slippery surfaces. Its glowing cap is rumored to contain ancient magic passed down through generations of the kingdom's rulers.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 63,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_luck",
      "reduce_fall_damage"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Luck",
        "rules": "As a bonus action, you can activate the Glowshroom to grant yourself advantage on one saving throw or attack roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Reduced Fall Damage",
        "rules": "While in contact with the mushroom (held or worn), you are considered proficient in acrobatics checks made to avoid falling damage, reducing such damage by half. This effect persists for 1 minute after you stop touching the mushroom."
      }
    ],
    "levelRequirementReason": "The Glowshroom's magic is accessible to all adventurers who can afford its price.",
    "vendorReason": "Toad Town Market stocks a wide variety of items, from the mundane to the magical, and this glowing mushroom fits well within their offerings.",
    "shippingDetail": "Delivered by a cart drawn by a trio of friendly Toads, ensuring safe and timely arrival.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn (Enhanced Luck); 1 minute (Reduced Fall Damage)",
      "endsWhen": "The effect ends when the duration expires or you stop touching the mushroom.",
      "charges": "Unlimited"
    },
    "priceReason": "The Glowshroom's rarity, magical properties, and beneficial effects justify its fair price of 1000 XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T22:38:46.043450+00:00",
    "aiReviewedAt": "2026-07-23T22:38:46.043450+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_warp_pipe_fragment": {
    "id": "mushroom_kingdom_item_warp_pipe_fragment",
    "name": "Echoing Fragment of the Shifting Pipes",
    "description": "A fragment of a warp pipe warped beyond recognition, it hums with an unstable energy that resonates through the air. Touching this shard causes you to vanish in a burst of shimmering light and reappear nearby, but beware; the precise location is unpredictable and could leave you in a precarious situation or worse! This relic is said to have been crafted from the remnants of the Mushroom Kingdom’s corrupted warp pipes, once trusted conduits for Link's travels.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "teleportation",
      "unpredictable destination"
    ],
    "vendor": "wario_direct",
    "shippedBy": "rocket_mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Teleportation",
        "rules": "As a bonus action, touch this fragment to teleport up to 30 feet in any direction. You must end the movement in an unoccupied space or fall prone. The DM determines the exact location of your reappearing point."
      },
      {
        "title": "Unpredictable Destination",
        "rules": "There is a 25% chance that you will appear within 10 feet of an obstacle, difficult terrain, or hazardous area (such as water). If this occurs, you must make a DC 13 Dexterity saving throw. On a failed save, you fall prone and take 1d6 bludgeoning damage."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to handle the unpredictable nature of this fragment.",
    "vendorReason": "Wario has a knack for salvaging and selling rare relics from his travels through the Mushroom Kingdom.",
    "shippingDetail": "Ships via rocket mail, which can be delivered within three days but may cause slight fluctuations in your destination due to atmospheric conditions.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous teleportation",
      "endsWhen": "The teleport ends when you reach your new location or fail the saving throw if teleported to a hazardous area.",
      "charges": "Unlimited, but cannot be used within 1 hour of previous use."
    },
    "priceReason": "Balanced at 1000 XP as it offers unpredictable teleportation and a chance for negative effects, making it a rare yet not overpowered item.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-24T23:57:15.865821+00:00",
    "aiReviewedAt": "2026-07-24T23:57:15.865821+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_forbidden_heartstone": {
    "id": "mushroom_kingdom_item_forbidden_heartstone",
    "name": "Heartstone of the Mushroom King's Corruption",
    "description": "The Heartstone of the Mushroom King's Corruption is a pulsating crimson gem that glows with an otherworldly light. It is said to contain a fragment of the Mushroom King’s dark power, capable of corrupting minds and granting minor abilities. Those who wear it find themselves driven by an insatiable desire for gold, their vision clouded by greed. The stone's influence is felt in every step, subtly warping reality around its wearer.",
    "category": "forbidden",
    "price": 1000,
    "icon": "❤️",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "corrupted_greed",
      "dark_power_granting"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Corrupted Greed",
        "rules": "The user gains +1d4 coins upon defeating monsters. This effect ends when the user's alignment changes to chaotic evil or they are destroyed."
      },
      {
        "title": "Dark Power Granting",
        "rules": "Once per short rest, the user can activate this to gain advantage on a single saving throw against fear and charm effects until the end of their next turn. The use is limited to once every 24 hours."
      }
    ],
    "levelRequirementReason": "Only those at least level 15 are capable of wielding such dark artifacts without immediate risk.",
    "vendorReason": "The Koopa Shop deals in rare and forbidden items, including this corrupted relic from the Mushroom King's realm.",
    "shippingDetail": "Ships under cover of night to ensure secrecy; delivery can take up to a week depending on courier availability.",
    "usage": {
      "activation": "Once per short rest as a bonus action",
      "duration": "Until the end of their next turn",
      "endsWhen": "The user's alignment changes to chaotic evil or when destroyed",
      "charges": "Unlimited, but limited by daily use"
    },
    "priceReason": "Balanced at 1000 XP as it offers both a minor ability and a chance for corruption, making it a dangerous yet enticing item.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T22:39:21.720012+00:00",
    "aiReviewedAt": "2026-07-23T22:39:21.720012+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_sweet_slug": {
    "id": "leclaire_isle_item_sticky_sweet_slug",
    "name": "Sticky Sweet Slug",
    "description": "The Sticky Sweet Slug, a shimmering gelatinous creature crafted from the finest honey and enchanted dough, is a treat unlike any other. Its delicate exterior melts in your mouth, releasing an explosion of flavor that can only be described as nectaric bliss. Consumed with care, this delicacy not only restores health but also grants you a fleeting burst of speed, making you move with a dancer's grace for the duration of its effect.",
    "category": "consumables",
    "price": 1000,
    "icon": "🐌",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores_health",
      "boosts_speed"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Restoration",
        "rules": "Eating the Sticky Sweet Slug restores 30 hit points to the consumer. This effect is instantaneous and cannot be resisted."
      },
      {
        "title": "Speed Boost",
        "rules": "After consumption, you gain a bonus to your movement speed equal to half your proficiency bonus until the end of your next turn. This effect is temporary and does not stack with similar abilities."
      }
    ],
    "levelRequirementReason": "The Sticky Sweet Slug's enchantment is simple enough for even the novice adventurer, though its exquisite crafting requires a basic understanding of alchemy.",
    "vendorReason": "Dough Depot specializes in sweet treats and delicacies, making it only fitting that they carry this unique confection.",
    "shippingDetail": "Swiftly delivered by the swift ponies, the Sticky Sweet Slug is known for its timely arrival to eager adventurers.",
    "usage": {
      "activation": "Eaten as a food or consumable item",
      "duration": "Instantaneous health restoration; speed boost lasts until end of next turn",
      "endsWhen": "The effect ends when the duration expires or if you take any damage",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare ingredients and enchanted with a simple spell, this delicacy is priced accordingly to reflect its unique properties.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:40:07.724071+00:00",
    "aiReviewedAt": "2026-07-23T22:40:07.724071+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dwarfstone_rollingpin": {
    "id": "leclaire_isle_item_dwarfstone_rollingpin",
    "name": "Dwarfstone Rolling Pin",
    "description": "The Dwarfstone Rolling Pin is a massive, enchanted tool forged from a single chunk of magically-infused dwarfstone. Its surface crackles with arcane energy and emits a persistent aroma of cinnamon and freshly ground dwarven grumpiness. It's not just for flattening pastries—it can flatten foes too, dealing an extra 10% damage to all melee attacks as if the wielder had used it in their construction. A side effect of its magical properties is that there’s a 25% chance each time you hit with a melee attack to apply a slow effect on your target for one minute, requiring a DC 14 Constitution saving throw to resist.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_melee_damage_10%",
      "chance_to_apply_slow_on_hit"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Thundercloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Melee Damage",
        "rules": "When you hit with a melee weapon attack, increase the damage by an additional 1d6. This effect is always active when using this rolling pin."
      },
      {
        "title": "Slow Effect on Hit",
        "rules": "There’s a 25% chance that each time you hit with a melee attack while holding this rolling pin; your target must succeed on a DC 14 Constitution saving throw or be incapacitated for the next minute. The effect ends early if the target takes any damage other than from you."
      }
    ],
    "levelRequirementReason": "The rolling pin's magical properties are not too overpowering but still require a basic understanding of combat.",
    "vendorReason": "The Pastry Palace is known for its unique and enchanted kitchenware, including this mystical rolling pin.",
    "shippingDetail": "This item requires special handling and is shipped via Thundercloud Express to ensure it arrives in perfect condition.",
    "usage": {
      "activation": "Instantaneous activation on any melee attack.",
      "duration": "Instantaneous, lasting the turn of the wielder if the slow effect is triggered.",
      "endsWhen": "The slow effect ends early if the target takes damage from any source other than you.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and unique properties, combined with its enchanted capabilities, justify a price of 1000 XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:40:04.138170+00:00",
    "aiReviewedAt": "2026-07-23T22:40:04.138170+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_whimsical_dough_orb": {
    "id": "leclaire_isle_item_whimsical_dough_orb",
    "name": "Whimsical Dough Orb",
    "description": "The Whimsical Dough Orb is a miniature, perpetually shifting orb of enchanted dough that occasionally emits giggles and may spontaneously rearrange itself into tiny gingerbread men. Touching it grants a fleeting moment of pure joy (and possibly sticky fingers), leaving behind a lingering sense of warmth and comfort. This delightful trinket can be a whimsical conversation starter at any gathering, its constant movement and playful nature captivating all who encounter it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "joyful_touch",
      "minor_illusion"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Spectral Delivery Bird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Joyful Touch",
        "rules": "When touched, the Whimsical Dough Orb grants a +1 bonus to Charisma (Persuasion) checks for 1 minute. This effect can be used once per long rest."
      },
      {
        "title": "Minor Illusion",
        "rules": "The orb can create a minor illusion of itself, allowing it to appear as a different object or shape for up to 1 hour. This minor illusion ends if the item is destroyed, reverts when touched by another creature, or after 24 hours."
      }
    ],
    "levelRequirementReason": "This trinket's charm and utility make it accessible to lower-level characters who can benefit from its social and visual effects.",
    "vendorReason": "Sweet Supplies specializes in items that enhance the flavor of any gathering, making them an ideal vendor for this delightful Dough Orb.",
    "shippingDetail": "The Spectral Delivery Bird ensures swift and magical delivery, often dropping off packages with a gentle gust of wind.",
    "usage": {
      "activation": "Interacting with the orb by touching it (no action required)",
      "duration": "1 minute for Joyful Touch; 1 hour for Minor Illusion",
      "endsWhen": "The duration ends or the item is destroyed, reverts when touched by another creature, or after 24 hours.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's enchantment and utility without being overpriced for its level of play.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T22:40:07.922817+00:00",
    "aiReviewedAt": "2026-07-23T22:40:07.922817+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_rusty_dagger": {
    "id": "midlands_item_rusty_dagger",
    "name": "Bloodsoaked Shard",
    "description": "The Bloodsoaked Shard gleams faintly, a dagger that has seen countless battles and spilled much blood in the Midlands. Its blade is etched with ancient runes that whisper of lost wars, and the hilt is worn smooth by years of gripping hands. This dagger's edge is sharper than it appears, having been tempered in the fires of many a skirmish. It deals 2d6 slashing damage on a successful hit, and there’s a chilling 15% chance to inflict bleeding wounds.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔪",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 2d6 slashing damage",
      "15% chance to inflict bleeding"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slashing Damage",
        "rules": "The Bloodsoaked Shard deals 2d6 slashing damage on a successful hit. This effect is not subject to any saving throws."
      },
      {
        "title": "Bleeding Chance",
        "rules": "There is a 15% chance that the target will bleed after being hit with this weapon. The bleeding lasts for one minute and causes an additional 1d4 slashing damage at the start of each of the target's turns."
      }
    ],
    "levelRequirementReason": "The Bloodsoaked Shard is a common item, suitable for any level 1 character who has experienced battle.",
    "vendorReason": "The Midlands Merchant specializes in goods from the region, including items with rich histories and connections to local lore.",
    "shippingDetail": "Ships via Pony Express for expedited delivery within a week.",
    "usage": {
      "activation": "On a successful hit during a melee attack.",
      "duration": "Instantaneous; bleeding effect lasts one minute.",
      "endsWhen": "The bleeding effect ends when the target no longer has any hit points or takes damage from another source.",
      "charges": "Unlimited"
    },
    "priceReason": "The Bloodsoaked Shard is a common item but carries significant historical and magical value, justifying its higher price in XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-24T23:57:49.696832+00:00",
    "aiReviewedAt": "2026-07-24T23:57:49.696832+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_imperial_scroll": {
    "id": "midlands_item_imperial_scroll",
    "name": "Decree of Petty Tyranny",
    "description": "The Decree of Petty Tyranny is a meticulously crafted scroll, its parchment shimmering with the distant Imperial court's seal. This ancient artifact grants the reader authority over pigeons within a 10-foot radius for 3 turns, allowing them to command these avian messengers as if they were willing servants. It also bestows +2 Charisma and a +1 bonus on Intimidate checks against low-level NPCs (20% chance). The scroll's power is said to stem from the court's whimsical edicts, where even the smallest decrees can wield surprising influence.",
    "category": "premium",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Command Pigeons",
      "Charisma Boost"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "royal_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Command Pigeons",
        "rules": "For 3 turns, you gain temporary authority over pigeons within a 10-foot radius. You can issue simple commands, and they will attempt to comply. This effect ends if the scroll is destroyed or if you voluntarily dismiss it."
      },
      {
        "title": "Charisma Boost",
        "rules": "+2 Charisma for the duration of this scroll's use, and a +1 bonus on Intimidate checks against low-level NPCs (20% chance). This effect ends when the scroll is destroyed or if you voluntarily end it."
      }
    ],
    "levelRequirementReason": "The Decree requires no level to use as its effects are intended for any adventurer, not just seasoned heroes.",
    "vendorReason": "As a direct purveyor of Imperial goods, the Empire Exchange is entrusted with selling items like this scroll.",
    "shippingDetail": "Delivered by the Royal Messenger, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "Read or activate as a bonus action.",
      "duration": "Instantaneous for both effects; Command Pigeons lasts for 3 turns.",
      "endsWhen": "The scroll is destroyed or its effects are voluntarily dismissed.",
      "charges": "Unlimited"
    },
    "priceReason": "The Decree of Petty Tyranny offers a unique and whimsical utility that balances its price with its limited, thematic effect.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:40:51.311361+00:00",
    "aiReviewedAt": "2026-07-23T22:40:51.311361+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_godly_amulet_of_discord": {
    "id": "midlands_item_godly_amulet_of_discord",
    "name": "The Cacophony Heart",
    "description": "The Cacophony Heart pulsates with an unsettling, discordant energy that warps reality around it. This amulet amplifies the most trivial disputes into full-blown arguments and sows chaos among your enemies, turning their attention away from you and toward each other. Its core is a fragment of ancient battlefield runes, once part of a warforged's heart imbued with the fury of countless skirmishes. Wario might sell it as a 'mood enhancer,' but its true purpose lies in creating mayhem.",
    "category": "equipment",
    "price": 500,
    "icon": "🔊",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Amplifies nearby disputes",
      "Enemies attack each other"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Amplified Disputes",
        "rules": "Activates on command, with a range of 30 feet. All creatures within the area must make a DC 15 Wisdom saving throw or become hostile toward one another for 1 minute."
      },
      {
        "title": "Enemy Conflict",
        "rules": "Enemies within 60 feet have a 40% chance to attack each other as part of their turn. This effect lasts until the start of your next turn, and any creature that fails its saving throw is also affected by this rule."
      }
    ],
    "levelRequirementReason": "Requires significant control over chaos and diplomacy to wield effectively.",
    "vendorReason": "Known for crafting items that channel raw, uncontrollable forces like the Cacophony Heart.",
    "shippingDetail": "Delivered by a dragon courier who will require a small tip in gold pieces.",
    "usage": {
      "activation": "A bonus action to activate and command its effects.",
      "duration": "1 minute, or until the start of your next turn if it affects you.",
      "endsWhen": "The save ends early or the wearer stops concentrating.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at a lower price to reflect its moderate rarity and utility, not game-breaking power.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T22:40:35.318979+00:00",
    "aiReviewedAt": "2026-07-23T22:40:35.318979+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_bloodstone_amulet": {
    "id": "faerun_item_bloodstone_amulet",
    "name": "Bloodstone Amulet of Twisted Fate",
    "description": "The Bloodstone Amulet of Twisted Fate pulses with a sinister crimson glow that seems to shift and leer at you whenever you wear it. Crafted by a fallen deity, this amulet is said to judge your life choices, subtly influencing your decisions as it weaves dark magic into the fabric of reality. Wear it for too long, and you might find yourself unable to resist hoarding shiny objects or experiencing bouts of confusion that leave you questioning your actions.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🩸",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "confusion",
      "temporary hit points"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dark portal",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Confusion on Enemies",
        "rules": "When activated, the amulet emits a pulse that has a 25% chance to confuse an enemy within 10 feet for 1d4+1 rounds. The target must succeed on a DC 15 Wisdom saving throw or be unable to take actions other than movement and reactions."
      },
      {
        "title": "Temporary Hit Points",
        "rules": "Activating the amulet grants you +1d6 temporary hit points, but at a cost: your next spell cast is reduced by half its power. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "Only those with sufficient experience and wisdom can safely wear this cursed amulet without succumbing to its dark influence.",
    "vendorReason": "Waterdeep's Market is known for its rare and forbidden wares, making it a fitting location for such an item of dubious origin.",
    "shippingDetail": "The amulet arrives via a dark portal, requiring a brief period of time to materialize and ensuring the secrecy of its delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until the end of your next long rest or until you remove it from your neck.",
      "endsWhen": "You cast a spell, or when you are removed from your neck by force.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rare crafting materials and dark magic make it an expensive but potentially dangerous addition to any adventurer's arsenal.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T22:40:40.773721+00:00",
    "aiReviewedAt": "2026-07-23T22:40:40.773721+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_forbidden_shard": {
    "id": "grand_country_forbidden_shard",
    "name": "Echoes of Oblivion",
    "description": "Echoes of Oblivion is a shard etched with the forgotten geometry of other realms. Held in your hand, it whispers truths from realities long lost to time, warping space around you for moments of eerie clarity. Yet prolonged exposure risks unraveling the fabric of existence; best admired from afar or only briefly wielded by those who dare. This fragment, a relic of ancient banishment, is as dangerous as it is enigmatic.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "reality_warp",
      "truth_revelation"
    ],
    "vendor": "side_seller",
    "shippedBy": "void_packet",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Reality Warp",
        "rules": "As a bonus action, you can manipulate space around you for up to 1 minute. This creates a localized distortion that grants advantage on saving throws and ability checks within the affected area (a 20-foot radius). The effect ends if you move more than 30 feet from where you used it."
      },
      {
        "title": "Truth Revelation",
        "rules": "When you make an Intelligence or Wisdom check, you can use Echoes of Oblivion as an action. It grants you advantage on that roll and reveals a hidden truth related to the situation (e.g., a secret motive, forgotten detail). This ability has a cooldown period of 10 minutes."
      }
    ],
    "levelRequirementReason": "This item requires significant spellcasting prowess and understanding of reality's fabric.",
    "vendorReason": "Side sellers often deal in the forbidden, and this shard is too dangerous for most to handle without a high-level mage or warlock backing it up.",
    "shippingDetail": "The Echoes of Oblivion must be delivered via void packet, which ensures it remains stable during transit between dimensions.",
    "usage": {
      "activation": "Bonus action for Reality Warp; Action to use Truth Revelation.",
      "duration": "1 minute per use (Reality Warp); Instantaneous (Truth Revelation).",
      "endsWhen": "The duration ends or the user moves more than 30 feet from origin. Cooldown after each use of Truth Revelation is 10 minutes.",
      "charges": "Unlimited, but each use has a cooldown."
    },
    "priceReason": "This item's rarity and unique effects justify its price in mythic XP; it’s a dangerous artifact that can alter reality itself.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-24T23:57:51.217886+00:00",
    "aiReviewedAt": "2026-07-24T23:57:51.217886+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_cake_charm": {
    "id": "grand_country_layer_cake_charm",
    "name": "Chronometric Confection",
    "description": "The Chronometric Confection is a diminutive, golden layer cake that gleams like it’s been dipped in time itself. When consumed, it grants its bearer a brief, chaotic glimpse into potential futures—each one featuring Wario inadvertently or purposefully consuming every last crumb. This ephemeral vision lasts only long enough to make the most strategic decisions, yet it comes with a peculiar side effect: those who partake are left feeling slightly more fortunate in their immediate circumstances.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍰",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_short_vision",
      "temporary_luck_boost"
    ],
    "vendor": "layer_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Short Vision of Future Scenarios",
        "rules": "Upon consumption, the Chronometric Confection grants the user a fleeting, chaotic vision into potential futures. These visions are not deterministic but rather probabilistic, with each one featuring Wario consuming every last crumb of the cake. The effect lasts for 1 minute and can be ended early by taking any action."
      },
      {
        "title": "Temporary Luck Boost",
        "rules": "For 24 hours after consumption, the user gains advantage on saving throws against effects that would cause them to fail a check due to chance or misfortune. This effect cannot stack with other sources of luck and is exhausted if the user fails an ability check."
      }
    ],
    "levelRequirementReason": "This item's temporal magic, while intriguing, is not overly powerful for novice adventurers.",
    "vendorReason": "Layer Market specializes in unique and whimsical items, making it a natural fit for the Chronometric Confection.",
    "shippingDetail": "The confection is delivered fresh, but due to its time-sensitive nature, it must be consumed within one week of receiving.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "1 minute or until ended early",
      "endsWhen": "Taking any action, failing a check due to chance, or expiring after 1 minute",
      "charges": "Unlimited"
    },
    "priceReason": "The Chronometric Confection is priced high for its unique blend of temporal magic and the whimsical concept of Wario eating cake.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-24T23:57:42.037553+00:00",
    "aiReviewedAt": "2026-07-24T23:57:42.037553+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_claw_of_the_howler": {
    "id": "animatopia_claw_of_the_howler",
    "name": "Claw of the Howler",
    "description": "The Claw of the Howler, a massive relic shed by an ancient and irritable howler monkey, hums with untamed jungle magic. Its sharp edges are adorned with green veins that pulse with raw energy, and it emits periodic screeches that echo through the underbrush. This claw deals increased damage to foes and has a chance of inflicting fear, making enemies flee in terror. It's surprisingly comfortable for its size, though the occasional ear-piercing scream can be disconcerting.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐾",
    "stock": 5,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Increased Damage",
      "Fearful Screech"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged beetle courier service",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Increased Damage",
        "rules": "When you hit a target with an attack while wearing the Claw, it deals an additional 1d6 piercing damage. This effect is not limited by charges or uses."
      },
      {
        "title": "Fearful Screech",
        "rules": "Once per short rest, when you score a critical hit with an attack using this claw, roll a d20. On a result of 15 or higher, all creatures within 30 feet who can hear it must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "The Claw requires a minimum level to wield its primal magic.",
    "vendorReason": "The Tribal Trader has connections with the howler monkeys and can acquire such rare relics.",
    "shippingDetail": "Ships quickly via winged beetles, but delivery may take several days due to the claw's size and weight.",
    "usage": {
      "activation": "Instantaneous with each attack.",
      "duration": "Persistent until expended or removed.",
      "endsWhen": "The claw is removed from your equipment or destroyed.",
      "charges": "Unlimited, recharged upon removal."
    },
    "priceReason": "Balanced price for a rare and powerful claw that provides both combat utility and a unique tactical advantage.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:41:22.427834+00:00",
    "aiReviewedAt": "2026-07-23T22:41:22.427834+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_whispering_moss_charm": {
    "id": "animatopia_whispering_moss_charm",
    "name": "Whispering Moss Charm",
    "description": "The Whispering Moss Charm is crafted from luminescent moss found deep within Animatopia's caves, where it glows faintly under moonlight. This charm seems to murmur secrets of ancient lore and hidden passages to those who listen closely; however, the whispers can drive even the most steadfast mad if they are not heeded in time. It is said that those who wear this charm find their perception heightened, able to discern the subtlest sounds and movements around them.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Perception",
      "Hidden Secrets Detection"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "When activated as a bonus action, you gain advantage on Wisdom (Perception) checks for the next hour. This effect ends if you are incapacitated or fall unconscious."
      },
      {
        "title": "Hidden Secrets Detection",
        "rules": "This charm grants a 20% chance to detect hidden objects and secret doors within 30 feet when used as an action. The effect lasts for 10 minutes, and it can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This charm is accessible to low-level characters who wish to explore Animatopia's mysteries without the need for higher-level abilities.",
    "vendorReason": "The Beast Bazaar frequently trades in unique and magical items from Animatopia, including this mystic charm.",
    "shippingDetail": "Delivered by the slow but reliable giant snails of Animatopia, ensuring the charm arrives intact.",
    "usage": {
      "activation": "Bonus action or as an action (for Hidden Secrets Detection)",
      "duration": "Enhanced Perception: Until you are incapacitated or fall unconscious. Hidden Secrets Detection: 10 minutes",
      "endsWhen": "Incapacitation, falling unconscious, or once per long rest for Hidden Secrets Detection.",
      "charges": "Unlimited; can be used multiple times within a short rest."
    },
    "priceReason": "The charm's rarity and unique properties justify its higher price point while remaining balanced for its level requirement.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T22:41:58.084002+00:00",
    "aiReviewedAt": "2026-07-23T22:41:58.084002+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_legendary_scale_of_the_dragonheart": {
    "id": "animatopia_legendary_scale_of_the_dragonheart",
    "name": "Scale of the Dragonheart",
    "description": "The Scale of the Dragonheart, said to have fallen from the legendary beast, is a shimmering scale that pulses with ancient magic. When worn, it grants its bearer an aura of raw power and a small, grumpy dragon familiar to watch over them. The scale's wearer feels as though they are walking with the weight of a dragon's spirit, yet its true power lies in its ability to bolster attacks and provide a shield against fear.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Significant damage boost",
      "Immunity to fear"
    ],
    "vendor": "forest_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Significant Damage Boost",
        "rules": "While wearing the Scale of the Dragonheart, all melee weapon attacks deal an additional +2d6 damage. This effect lasts for the duration of one short or long rest."
      },
      {
        "title": "Immunity to Fear",
        "rules": "The wearer is immune to fear effects and has advantage on saving throws against such effects. This immunity persists as long as the scale is worn, but ends if it is removed or lost."
      }
    ],
    "levelRequirementReason": "Only those of proven valor can harness the ancient power within this scale.",
    "vendorReason": "The forest market often deals in rare and legendary items, making it a fitting place for such an artifact.",
    "shippingDetail": "Delivered by swift drones, the Scale of the Dragonheart is carefully packaged to ensure its safe arrival.",
    "usage": {
      "activation": "Passive effect while worn",
      "duration": "Until removed or lost",
      "endsWhen": "Removed or lost",
      "charges": "Unlimited"
    },
    "priceReason": "While the scale is not a one-time use item, its legendary power and unique properties justify its moderate cost.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T22:41:47.513105+00:00",
    "aiReviewedAt": "2026-07-23T22:41:47.513105+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_mane_weave_treatment": {
    "id": "equestria_item_mane_weave_treatment",
    "name": "Mane Weave Restoration Serum",
    "description": "This vial of Mane Weave Restoration Serum is a potion crafted by the skilled apothecaries of Ponyville. The serum, made from rare ingredients such as starflower nectar and moonlight essence, revitalizes your mane with a touch of magic. It instantly smooths frizz, restoring your mane to its former glory and adding an iridescent sheen. However, be cautious—using it on yourself is not advised; the result might resemble Fluttershy's legendary mane after a particularly energetic day.",
    "category": "services",
    "price": 1000,
    "icon": "🐴",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores_mane_quality",
      "reduces_wind_resistance"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "rainbow_pony EXPRESS",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Mane Quality",
        "rules": "As an action, apply the serum to your mane. The effect is instantaneous and lasts until your next long rest. It restores a significant portion of the mane's quality, reducing frizz by up to 50%."
      },
      {
        "title": "Reduces Wind Resistance",
        "rules": "The reduction in wind resistance lasts for 1 hour per vial used. It provides a bonus to Dexterity saving throws against being blown away by strong winds or storms."
      }
    ],
    "levelRequirementReason": "This serum is crafted with materials accessible to most ponies, making it suitable for all levels.",
    "vendorReason": "The market is well-known for its wide variety of grooming and beauty products, including this popular mane restorative.",
    "shippingDetail": "Ships within the day with Rainbow PONY Express's signature magic-infused delivery service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, lasts until next long rest for quality restoration; reduces wind resistance for 1 hour per vial used.",
      "endsWhen": "Effect ends when your mane returns to its natural state or after one long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rare ingredients and magical properties of the serum justify its higher price, making it a valuable addition to any pony's grooming kit.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T22:42:09.163836+00:00",
    "aiReviewedAt": "2026-07-23T22:42:09.163836+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starfall_dust": {
    "id": "equestria_item_starfall_dust",
    "name": "Starfall Dust",
    "description": "Starfall Dust is a shimmering powder collected from the fiery remnants of a star that fell to the ground. It's said this dust can make even the most mundane object radiate with an ethereal glow, and when used in conjunction with magical intent, it can grant a small boon to those who dare to wish upon it. However, not all wishes are granted as expected; some merely bring about a burst of spectacular sparkle.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌟",
    "stock": 15,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Sparkle Aura",
      "Boon of Small Favor"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sparkle Aura",
        "rules": "As a bonus action, the user can sprinkle Starfall Dust to create an aura around them. This aura lasts for 1 minute and grants advantage on saving throws against being charmed or frightened. The dust is consumed once used."
      },
      {
        "title": "Boon of Small Favor",
        "rules": "Once per short rest, the user can concentrate on a specific wish they desire to grant. If successful (DC 15 Charisma save), the wish grants a minor benefit or advantage, such as increased movement speed by 10 feet for 1 hour."
      }
    ],
    "levelRequirementReason": "This dust is accessible to beginners who are curious about its effects but lack the power to demand more significant changes.",
    "vendorReason": "Crystal Empire has long traded in celestial relics, and Starfall Dust fits perfectly into their inventory of unique and magical items.",
    "shippingDetail": "The dust must be shipped via the Royal Pony Express for optimal sparkle retention.",
    "usage": {
      "activation": "Bonus action to sprinkle; concentration required for wish",
      "duration": "Sparkle Aura: 1 minute, Wish: 8 hours (once per short rest)",
      "endsWhen": "Sparkle Aura ends when concentration is lost or after 1 minute, Wish ends upon fulfillment or failure of save",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the rarity and magical properties of Starfall Dust, which are both in high demand among adventurers seeking to enhance their luck.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T22:42:13.912119+00:00",
    "aiReviewedAt": "2026-07-23T22:42:13.912119+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_volatile_potion": {
    "id": "the_edge_volatile_potion",
    "name": "Chaos in a Flask",
    "description": "The Chaos in a Flask is a volatile, iridescent potion that shimmers with a dangerous balance of energy and chaos. As you swirl it around, wisps of regret and static dance within its glass confines. When consumed, the potion grants you an unpredictable surge of speed, propelling you forward at breakneck pace for 1d4+2 rounds. However, there's a chance that this chaotic burst will destabilize your body, causing poison to course through your veins unless you succeed on a DC 15 Constitution saving throw.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "unstable_speed",
      "chance_of_poison"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unstable Speed",
        "rules": "Upon consuming the potion, you gain a +2 bonus to your movement speed for 1d4+2 rounds. This effect is instantaneous and lasts until expended."
      },
      {
        "title": "Chance of Poisoning",
        "rules": "There's a 30% chance that after the unstable speed effect ends, you must succeed on a DC 15 Constitution saving throw or be poisoned for 1 minute. The poison deals 2d6 necrotic damage at the start of each of your turns."
      }
    ],
    "levelRequirementReason": "This potion is designed for adventurers just starting their journey, providing a brief burst of speed that can be crucial in early encounters.",
    "vendorReason": "Edge Outpost supplies the most exotic and experimental items to fledgling adventurers looking to test their mettle.",
    "shippingDetail": "The Winged Courier ensures swift delivery, but packages may occasionally be delayed by unpredictable weather patterns in the region.",
    "usage": {
      "activation": "Drink the potion as an action.",
      "duration": "Instantaneous speed effect lasts for 1d4+2 rounds.",
      "endsWhen": "Poison effect ends if a Constitution save is failed, or when the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Chaos in a Flask's price reflects its unpredictable nature and the materials needed to stabilize such volatile chaos within a potion.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T22:42:38.979858+00:00",
    "aiReviewedAt": "2026-07-23T22:42:38.979858+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_godly_voidstone": {
    "id": "the_edge_godly_voidstone",
    "name": "Nullstone of the Infinite Abyss",
    "description": "The Nullstone of the Infinite Abyss is a cold, obsidian sphere that hums with an otherworldly presence. Its surface etched with ancient runes, it draws in light and sound, muffling all noise within its vicinity. Only those who can harness the void's power should wield this stone; its connection to the infinite abyss grants immunity to fear and negates magical spells, but at a price only the brave dare contemplate.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "immunity_to_fear",
      "spell_nullification"
    ],
    "vendor": "final_shop",
    "shippedBy": "Celestial Cartographer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "The wielder gains immunity to being frightened by non-magical sources. This effect is always active as long as the Nullstone is held."
      },
      {
        "title": "Chance to Negate Spell",
        "rules": "Once per short rest, when a spell is cast within 30 feet of the wielder, there is a 50% chance that the spell fails. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The stone's raw power requires only a minimum level to handle its innate dangers.",
    "vendorReason": "Final Shop stocks rare, godly items that push the boundaries of known magic and reality.",
    "shippingDetail": "The stone is delivered with a special protective aura to shield it from any magical tampering during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent while held, resets on long rest for the spell negation chance.",
      "endsWhen": "Destroyed if left unattended for a week or exposed to direct sunlight.",
      "charges": "Unlimited uses until depleted by exposure."
    },
    "priceReason": "The Nullstone's rarity and the risk involved in using it justify its moderate price tag.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T22:42:19.398396+00:00",
    "aiReviewedAt": "2026-07-23T22:42:19.398396+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_shadowscale_amulet": {
    "id": "midlands_item_shadowscale_amulet",
    "name": "Amulet of Whispered Secrets",
    "description": "The Amulet of Whispered Secrets, crafted by the enigmatic Shadowguard, hums with a spectral energy that subtly shifts the atmosphere around you. Its cryptic whispers can reveal hidden passages and distract guards, but they also leave you feeling perpetually on edge. This amulet is surprisingly effective at masking your presence from detection, reducing enemy awareness of your location by 20%. It's as if shadows themselves whisper secrets to you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤫",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Whispers of Detection",
      "Masked Presence"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "swift hawk courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Whispers of Detection",
        "rules": "As an action, activate the amulet to hear cryptic whispers that may reveal hidden passages. The DC for any Wisdom (Perception) check made by enemies to detect you is increased by 5 until the start of your next turn."
      },
      {
        "title": "Masked Presence",
        "rules": "The amulet reduces enemy detection radius by 20% for 1 minute, starting when you activate it as a bonus action. This effect ends if you are incapacitated or the amulet is destroyed."
      }
    ],
    "levelRequirementReason": "This amulet requires a minimum of third-level proficiency to effectively utilize its whispering and masking capabilities.",
    "vendorReason": "The Empire Exchange, known for its vast array of arcane curiosities, is the only reliable source for such an enigmatic artifact.",
    "shippingDetail": "Ships via swift hawk courier within a week of purchase.",
    "usage": {
      "activation": "Action or Bonus Action to activate; either to hear whispers or reduce detection radius.",
      "duration": "Instantaneous for hearing whispers, 1 minute for reducing detection radius.",
      "endsWhen": "Ends if you are incapacitated or the amulet is destroyed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced price reflects the item's unique utility in exploration and stealth, without overshadowing more powerful gear.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T22:42:37.346821+00:00",
    "aiReviewedAt": "2026-07-23T22:42:37.346821+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_broken_blade_of_despair": {
    "id": "midlands_item_broken_blade_of_despair",
    "name": "Shard of the Fallen Regent",
    "description": "The Shard of the Fallen Regent is a jagged, emerald-hued fragment from the legendary sword of Emperor Kaelor, who fell into despair. Its sharp edges glisten faintly in the dark, and it exudes an eerie aura that can unsettle even seasoned warriors. When wielded, this shard can instill fear into weaker foes, sapping their resolve, or provide a calming presence to those who need it most by boosting Wisdom saving throws.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚔️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Fear Aura",
      "Wisdom Boost"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "Giant Beetle Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fear Aura",
        "rules": "When you activate the shard as a bonus action, any creature within 10 feet of you that is of Challenge Rating 5 or lower must make a Wisdom saving throw (DC 12). On a failed save, they become frightened until the start of their next turn."
      },
      {
        "title": "Wisdom Boost",
        "rules": "While holding the shard, you gain a +2 bonus to all Wisdom saving throws. This effect lasts for the duration of one long rest and can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The shard's power is potent enough to affect weaker foes but requires no high-level proficiency.",
    "vendorReason": "Forgemaster Mira of the Fractured Forge has a deep connection with ancient relics and can source rare fragments like this one.",
    "shippingDetail": "The Giant Beetle ensures swift delivery, but the shard must be carefully packed to avoid damage during transit.",
    "usage": {
      "activation": "Bonus action to activate the Fear Aura or hold it for Wisdom Boost.",
      "duration": "Instantaneous effect; Fear lasts until the start of next turn. Wisdom Boost lasts one long rest.",
      "endsWhen": "The effect ends when you stop holding the shard in the case of Wisdom Boost, or the creature's save is successful.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique abilities and rare nature.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T22:42:29.252988+00:00",
    "aiReviewedAt": "2026-07-23T22:42:29.252988+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravitic_crumb": {
    "id": "doughnut_hole_gravitic_crumb",
    "name": "Void Crumb",
    "description": "The Void Crumb appears as a dense, almost weightless morsel that floats eerily in mid-air before collapsing into your hand with a soft *thump*. These crumbs are said to be remnants of forgotten dimensions, their density defying all known laws of physics. Consuming one grants temporary resistance to falling damage, allowing you to land safely even from great heights. It also sharpens your spatial awareness, making it easier to navigate the endless void without missteps or disorientation.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Void Resistance",
      "Enhanced Spatial Awareness"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "dimensional_ripple",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Resistance",
        "rules": "When you consume a Void Crumb, you gain temporary resistance to falling damage for the next three turns. This effect cannot be gained more than once per short or long rest."
      },
      {
        "title": "Enhanced Spatial Awareness",
        "rules": "For the duration of your next combat encounter, your spatial awareness is enhanced by 10%. You can see and navigate through tight spaces with greater ease and precision. This effect lasts until you take a short rest or fall unconscious."
      }
    ],
    "levelRequirementReason": "Beginners often find themselves in situations where they need to traverse dangerous voids, making this item useful for those just starting their adventures.",
    "vendorReason": "Hole Hawkers are known for trading unusual and useful items found in the void, so it's no surprise they carry Void Crumbs.",
    "shippingDetail": "The crumbs arrive via a dimensional ripple, appearing at your feet with a soft *thump*.",
    "usage": {
      "activation": "Consuming the crumb as an action",
      "duration": "3 turns for resistance; enhanced spatial awareness lasts until the start of your next turn after combat ends",
      "endsWhen": "The effects expire naturally or are negated by falling unconscious, taking a short rest, or gaining another instance of Void Resistance",
      "charges": "Unlimited"
    },
    "priceReason": "While not powerful in itself, the Void Crumb offers unique and valuable benefits that make it a worthwhile purchase for adventurers facing void-related challenges.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T22:42:41.005412+00:00",
    "aiReviewedAt": "2026-07-23T22:42:41.005412+00:00",
    "aiReviewVersion": 1
  }
};
